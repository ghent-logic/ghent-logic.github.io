/* Shared page behaviour. Routine content edits belong in ../content.js. */
(() => {
  'use strict';
  const G = window.GROUP;
  if (!G) {
    document.body.insertAdjacentHTML('afterbegin', '<div class="no-script">The content file could not be loaded. Keep content.js beside index.html and check it for missing commas or quotation marks.</div>');
    return;
  }
  const esc = (v) => String(v ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const slug = v => String(v).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const link = v => /^(https?:\/\/|mailto:)/i.test(v || '') ? esc(v) : '';
  const mail = v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v || '') ? 'mailto:' + esc(v) : '';
  const sample = x => x.sample ? '<span class="sample">Sample entry</span>' : '';
  // An abstract may be one string or a list of paragraphs; blank lines also split a string.
  // A bare http(s) address in an abstract becomes a link. The text is escaped
  // first, so whatever this matches can hold no quote and no angle bracket and
  // is safe in an href; a trailing full stop or comma is left outside the link.
  const linkify = t => t.replace(/https?:\/\/[^\s<>"']+/g, u => {
    const url = u.replace(/[.,;:]+$/, '');
    return `<a href="${url}">${url}</a>${u.slice(url.length)}`;
  });
  // A paragraph opening with [1] is a reference, and is set to hang. A list
  // inside the list of paragraphs, ["a", "b"], is set as a numbered list.
  const paras = v => (Array.isArray(v) ? v : String(v ?? '').split(/\n\s*\n/))
    .map(t => Array.isArray(t) ? t : String(t).trim()).filter(t => t.length)
    .map(t => Array.isArray(t)
      ? `<ol class="text-list">${t.map(i => `<li>${linkify(esc(i))}</li>`).join('')}</ol>`
      : `<p${/^\[\d+\]/.test(t) ? ' class="reference"' : ''}>${linkify(esc(t))}</p>`).join('');
  // [words](target) in the homepage introduction becomes a link. It runs on text
  // that is already escaped, and the target must be one of the site's own pages
  // or an http(s) address; anything else is left as the words alone.
  const withLinks = t => t.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, words, to) =>
    /^[a-z0-9-]+\.html(#[a-z0-9-]+)?$/i.test(to) || /^https?:\/\//i.test(to) ? `<a href="${to}">${words}</a>` : words);
  // A bare email address in a line of contact text becomes a mailto link. The
  // text is escaped first, and the pattern admits no quote, angle bracket or &.
  const withEmails = t => t.replace(/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g, a => `<a href="mailto:${a}">${a}</a>`);
  const records = list => (list || []).filter(x => G.preview || !x.sample);
  const set = (id, html) => { const el = document.getElementById(id); if (el) el.innerHTML = html; };
  const external = (url, label, cls = '') => link(url) ? `<a class="${cls}" href="${link(url)}">${esc(label)}</a>` : '';
  const MATH_DELIMITERS = [
    {left: '\\(', right: '\\)', display: false},
    {left: '$$', right: '$$', display: true},
    {left: '\\[', right: '\\]', display: true},
    {left: '$', right: '$', display: false}
  ];
  // Up to SHOW_ALL_PAGES numbers are listed in full; beyond that the run is
  // elided around the current page, so the row never outgrows its line.
  const GAP = '…', SHOW_ALL_PAGES = 7;
  function pagerNumbers(page, pages) {
    if (pages <= SHOW_ALL_PAGES) return Array.from({length: pages}, (_, i) => i + 1);
    const keep = [...new Set([1, page - 1, page, page + 1, pages])]
      .filter(n => n >= 1 && n <= pages).sort((a, b) => a - b);
    const out = [];
    keep.forEach((n, i) => {
      if (i && n - keep[i - 1] > 1) out.push(GAP);
      out.push(n);
    });
    return out;
  }
  let mathLoading = null;
  function loadMath() {
    if (window.renderMathInElement) return Promise.resolve();
    if (mathLoading) return mathLoading;
    const css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = 'assets/katex/katex.min.css';
    document.head.appendChild(css);
    const script = src => new Promise((resolve, reject) => {
      const el = document.createElement('script');
      el.src = src; el.onload = resolve; el.onerror = reject;
      document.head.appendChild(el);
    });
    mathLoading = script('assets/katex/katex.min.js').then(() => script('assets/katex/auto-render.min.js'));
    return mathLoading;
  }
  // Typeset only when a delimiter is actually present, so text-only pages load no KaTeX
  // at all; if it fails to load the LaTeX simply stays as written.
  function typesetMath(root) {
    if (!root || !/\\\(|\\\[|\$/.test(root.textContent)) return;
    loadMath()
      .then(() => window.renderMathInElement(root, {delimiters: MATH_DELIMITERS, throwOnError: false, errorColor: '#8a1c1c'}))
      .catch(() => {});
  }
  const nav = [['index','Home'],['people','People'],['research','Research'],['seminars','Seminars'],['activities','Activities'],['courses','Courses'],['contact','Contact']];
  const current = document.body.dataset.page;
  // Pages reachable from within the site rather than from the main navigation.
  const subPages = {archive: ['Seminar archive', 'seminars'], former: ['Former members', 'people']};
  const navCurrent = subPages[current]?.[1] || current;
  const RECENT_TALKS = 4;   // kept on the seminars page; the rest live in the archive
  const PER_PAGE = 10;      // archive entries per page
  // Allows the all-in-one preview to mount another page without retaining listeners.
  window.groupListeners?.abort();
  const listeners = new AbortController();
  window.groupListeners = listeners;
  document.title = `${current === 'index' ? '' : (nav.find(n => n[0] === current)?.[1] || subPages[current]?.[0] || 'Page not found') + ' · '}${G.name}`;

  if (G.preview) {
    set('preview-note', 'Design preview · Bracketed fields and “Sample entry” labels need your details. <a href="START-HERE.html">Finishing checklist</a>');
  } else {
    document.getElementById('preview-note')?.remove();
  }
  set('site-header', `<div class="masthead"><div class="wrap"><span>${esc(G.tagline || G.university)}</span></div></div>
    <header class="header"><div class="wrap header-row"><a class="brand" href="index.html"><span class="brand-symbol" aria-hidden="true"><svg viewBox="0 0 32 32" focusable="false"><path d="M9 5V27M9 16H28"/></svg></span><span class="brand-title">${esc(G.name)}</span></a>
    <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="main-navigation">Menu <span aria-hidden="true">☰</span></button>
    <nav class="nav" id="main-navigation" aria-label="Main navigation">${nav.map(([p,t]) => `<a href="${p}.html"${navCurrent === p ? ' aria-current="page"' : ''}>${t}</a>`).join('')}</nav></div></header>`);
  // The wrapper participates in layout, so the coloured header itself stays sticky.
  const wrapper = document.getElementById('site-header');
  if (wrapper) wrapper.replaceWith(...wrapper.childNodes);
  const toggle = document.querySelector('.menu-toggle');
  const navigation = document.getElementById('main-navigation');
  function closeMenu() { navigation.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); }
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open)); navigation.classList.toggle('open', open);
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') { closeMenu(); toggle.focus(); }
  }, {signal: listeners.signal});
  const wide = window.matchMedia('(min-width: 761px)');
  wide.addEventListener('change', () => closeMenu(), {signal: listeners.signal});

  set('site-footer', `<footer class="footer"><div class="wrap"><div class="footer-main"><div><h2>${esc(G.name)}</h2><p>${esc(G.department || G.university)}<br>${esc(G.city)}</p></div><div><div class="footer-label">Explore</div><div class="footer-links">${nav.filter(([p]) => p !== 'index' && p !== 'contact').map(([p,t]) => `<a href="${p}.html">${t}</a>`).join('')}</div></div><div><div class="footer-label">Connect</div><div class="footer-links"><a href="contact.html">Contact the group</a>${external(G.universityUrl, G.university)}${mail(G.email) ? `<a href="${mail(G.email)}">${esc(G.email)}</a>` : ''}</div></div></div><div class="footer-bottom"><span>© ${new Date().getFullYear()} ${esc(G.name)}</span>${G.photoCredit ? `<span class="footer-credit">${esc(G.photoCredit)}</span>` : ''}<span>${G.preview ? 'Preview copy · Replace sample content before launch' : esc(G.university)}</span></div></div></footer>`);
  document.querySelectorAll('[data-group-name]').forEach(el => el.textContent = G.name);
  document.querySelectorAll('[data-university]').forEach(el => el.textContent = G.university);
  document.querySelectorAll('[data-city]').forEach(el => el.textContent = G.city);

  const areas = G.research || [];
  if (current === 'index') {
    set('hero-title', esc(G.home.title));
    set('hero-introduction', withLinks(esc(G.home.introduction)));
    set('home-youtube', external(G.youtubeUrl, 'Recorded talks on YouTube', 'text-link'));
    set('home-topics', areas.map(a => `<article class="topic"><h3>${esc(a.title)}</h3><p>${esc(a.short)}</p></article>`).join(''));
  }
  if (current === 'research') {
    set('research-index', areas.map(a => `<a href="#${slug(a.id)}">${esc(a.title)}</a>`).join(''));
    set('research-areas', areas.map(a => `<section class="research-row" id="${slug(a.id)}"><div><h2>${esc(a.title)}</h2><p class="research-question">${esc(a.question)}</p></div><div class="research-detail"><p>${esc(a.description)}</p><div class="tags">${(a.topics||[]).map(t => `<span class="tag">${esc(t)}</span>`).join('')}</div></div></section>`).join(''));
  }
  const everyone = records(G.people);
  const peopleGroups = [...new Set(everyone.map(p => p.group))];
  const former = everyone.filter(p => p.former);
  if (current === 'people') {
    const people = everyone.filter(p => !p.former);
    const groups = peopleGroups.filter(g => people.some(p => p.group === g));
    set('people-index', groups.map(g => `<a href="#${slug(g)}">${esc(g)}</a>`).join(''));
    set('people-list', groups.length ? groups.map(g => `<section class="member-group" id="${slug(g)}"><h2 class="group-title">${esc(g)}</h2><div class="members">${people.filter(p => p.group===g).map(p => {
      const photo = /^(assets\/|https:\/\/)/.test(p.photo || '') && !p.photo.includes('..') ? p.photo : '';
      return `<article class="member"><div class="portrait">${photo ? `<img src="${esc(photo)}" alt="${esc(p.name)}" loading="lazy" width="400" height="300"><span hidden aria-hidden="true">${esc(p.initials)}</span>` : `<span aria-hidden="true">${esc(p.initials)}</span>`}</div><div class="member-body">${sample(p)}<h3>${esc(p.name)}</h3>${p.role ? `<p class="member-role">${esc(p.role)}</p>` : ''}${p.area ? `<p class="member-area">${esc(p.area)}</p>` : ''}${p.bio ? `<p class="member-bio">${esc(p.bio)}</p>` : ''}${p.profile || mail(p.email) ? `<div class="member-links">${external(p.profile,'Academic profile')}${mail(p.email) ? `<a href="${mail(p.email)}">Email</a>` : ''}</div>` : ''}${p.sample ? '<p class="edit-hint">Profile and email links appear when added.</p>' : ''}</div></article>`;
    }).join('')}</div></section>`).join('') : '<div class="empty"><h3>Members</h3><p>Member profiles will be added here.</p></div>');
    set('people-former', former.length ? '<p class="former-link"><a class="text-link" href="former.html">Former members</a></p>' : '');
    document.querySelectorAll('.portrait img').forEach(img => img.addEventListener('error', () => {img.hidden=true; img.nextElementSibling.hidden=false;}));
  }
  if (current === 'former') {
    const groups = peopleGroups.filter(g => former.some(p => p.group === g));
    set('former-list', groups.length ? groups.map(g => `<section class="former-group" id="${slug(g)}"><h2 class="group-title">${esc(g)}</h2><ul class="former-list">${former.filter(p => p.group===g).map(p => {
      const who = link(p.profile) ? `<a href="${link(p.profile)}">${esc(p.name)}</a>` : esc(p.name);
      const meta = [p.role, p.years, p.now].filter(Boolean).map(esc).join(' · ');
      return `<li>${sample(p)}<span class="former-name">${who}</span>${meta ? `<span class="former-meta">${meta}</span>` : ''}</li>`;
    }).join('')}</ul></section>`).join('') : '<div class="empty"><h3>Former members</h3><p>People who have moved on will be listed here.</p></div>');
  }
  // Compare calendar dates in Ghent's timezone, without UTC shifting a talk's day.
  const today = new Intl.DateTimeFormat('en-CA',{timeZone:'Europe/Brussels',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
  function validDate(s) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(s || '')) return false;
    const d = new Date(s + 'T12:00:00Z');
    return !Number.isNaN(d.getTime()) && d.toISOString().slice(0,10) === s;
  }
  const isPast = t => t.archived || (validDate(t.date) && t.date < today);
  const talks = records(G.seminars);
  const upcoming = talks.filter(t => !isPast(t)).sort((a,b) => (a.date || '9999').localeCompare(b.date || '9999'));
  const past = talks.filter(isPast).sort((a,b) => (b.date || '').localeCompare(a.date || ''));
  function dateLabel(t) {
    if (!validDate(t.date)) return 'Date to be announced';
    return new Intl.DateTimeFormat('en-GB',{day:'numeric',month:'long',year:'numeric'}).format(new Date(t.date+'T12:00:00'));
  }
  function dateBox(t) {
    if (!validDate(t.date)) return '<div class="date-box"><strong>TBA</strong><small>Date</small></div>';
    const d = new Date(t.date+'T12:00:00');
    return `<time class="date-box" datetime="${esc(t.date)}"><strong>${d.getDate()}</strong>${d.toLocaleDateString('en-GB',{month:'short'})}<small>${d.getFullYear()}</small></time>`;
  }
  function talkHtml(t) {
    const who = link(t.speakerUrl) ? `<a href="${link(t.speakerUrl)}">${esc(t.speaker)}</a>` : esc(t.speaker);
    // Once a talk is over its time, room and meeting link are of no use, so only
    // a talk still to come shows them. The announcements name rooms by number
    // alone, so the campus and building come from G.seminarVenue.
    const over = isPast(t);
    const room = over ? '' : t.location || G.seminarLocation || 'Location to be announced';
    const place = room && G.seminarVenue && !room.includes(G.seminarVenue) ? `${G.seminarVenue}, ${room}` : room;
    const meta = over ? '' : [t.time ? esc(t.time) + ' (Ghent local time)' : '', esc(place)].filter(Boolean).join(' · ');
    const live = over ? '' : external(t.zoomUrl, 'Join on Zoom') || external(t.onlineUrl, 'Join online');
    const links = live + external(t.videoUrl,'Recording') + external(t.slidesUrl,'Slides') + external(t.paperUrl,'Paper');
    return `<article class="talk" id="${slug(t.id)}">${dateBox(t)}<div>${sample(t)}<h3>${esc(t.title)}</h3><p class="speaker">${who}${t.affiliation ? ' · '+esc(t.affiliation) : ''}</p>${meta ? `<p class="location">${meta}</p>` : ''}${t.abstract || links ? `<div class="talk-actions">${t.abstract ? `<details><summary>Read abstract</summary>${paras(t.abstract)}</details>` : ''}${links ? `<div class="talk-links">${links}</div>` : ''}</div>` : ''}</div></article>`;
  }
  if (current === 'index') {
    const t = upcoming[0];
    set('home-seminar', t ? `<div class="seminar-feature"><div class="sample-row"><p class="eyebrow">${validDate(t.date) ? esc(dateLabel(t)) : 'Programme in preparation'}</p>${sample(t)}</div><h3>${esc(t.title)}</h3><p>${esc(t.speaker)}</p><p class="muted">${esc(t.affiliation)}</p><div class="feature-meta">${esc(t.location || G.seminarLocation || 'Location to be announced')}${t.time ? ' · '+esc(t.time) : ''}</div><a class="text-link" href="seminars.html#${slug(t.id)}">Seminar details</a></div>` : '<div class="seminar-feature"><h3>New talks will be announced here.</h3><p class="muted">Previous talks are kept in the archive.</p><div class="actions"><a class="text-link" href="archive.html">Seminar archive</a></div></div>');
  }
  if (current === 'seminars') {
    // A link to a talk that has since moved into the archive should still reach it.
    const wanted = decodeURIComponent(location.hash.slice(1));
    if (wanted && past.slice(RECENT_TALKS).some(t => slug(t.id) === wanted)) {
      location.replace(`archive.html#${encodeURIComponent(wanted)}`);
      return;
    }
    set('upcoming-talks', upcoming.length ? upcoming.map(talkHtml).join('') : '<div class="empty">No upcoming talks have been announced. Please check back for the next programme.</div>');
    const recent = past.slice(0, RECENT_TALKS);
    set('past-talks', recent.length ? recent.map(talkHtml).join('')
      + (past.length > recent.length ? `<p class="archive-more"><a class="text-link" href="archive.html">Previous talks</a></p>` : '')
      : '<p class="muted">Previous talks will appear here.</p>');
    set('seminar-practical', `<h3>Practical information</h3><div class="info-item"><span class="info-label">When</span><p>${esc(G.seminarSchedule || 'See individual announcements. All times are local to Ghent.')}</p></div><div class="info-item"><span class="info-label">Where</span><p>${esc(G.seminarLocation || G.seminarVenue || 'Locations will be included with each announcement.')}</p></div>${G.seminarMailing ? `<div class="info-item"><span class="info-label">Announcements</span><p>${withEmails(esc(G.seminarMailing))}</p></div>` : ''}${link(G.youtubeUrl) ? `<div class="info-item"><span class="info-label">Recordings</span>${external(G.youtubeUrl, 'YouTube channel')}</div>` : ''}${mail(G.seminarEmail || G.email) ? `<div class="info-item"><span class="info-label">Questions & online access</span><a href="${mail(G.seminarEmail || G.email)}">Email the organizers</a></div>` : ''}`);
  }
  if (current === 'archive') {
    const list = document.getElementById('archive-talks');
    const box = document.getElementById('archive-q');
    // Search ignores case and accents, so "godel" finds "Gödel", and reads the
    // LaTeX both as written and with its markup stripped, so "ACA0" finds
    // \(\mathsf{ACA}_0\). Every word typed must occur somewhere in the talk.
    const fold = v => String(v ?? '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
    const bare = v => v.replace(/\\(mathsf|mathrm|mathbf|mathit|mathcal|text|operatorname)\b/g, '').replace(/\\[()[\]]/g, ' ').replace(/[\\{}_^$]/g, '');
    const searchable = past.map(t => {
      const text = [t.title, t.speaker, t.affiliation, t.date, validDate(t.date) ? dateLabel(t) : '', ...[].concat(t.abstract || [])].join(' ');
      return fold(text + ' ' + bare(text));
    });
    const href = n => n === 1 ? 'archive.html' : `archive.html?page=${n}`;
    function showPage(page, pages) {
      const slice = past.slice((page - 1) * PER_PAGE, page * PER_PAGE);
      set('archive-count', past.length
        ? `${past.length} talk${past.length === 1 ? '' : 's'}${pages > 1 ? ` · page ${page} of ${pages}` : ''}`
        : '');
      set('archive-talks', slice.length ? slice.map(talkHtml).join('') : '<div class="empty"><h3>Archive</h3><p>Previous talks will appear here.</p></div>');
      set('archive-pager', pages > 1 ? `<nav class="pager" aria-label="Archive pages">
      ${page > 1 ? `<a class="pager-step" href="${href(page - 1)}" rel="prev"><span aria-hidden="true">←</span> Newer</a>` : '<span class="pager-step is-off"><span aria-hidden="true">←</span> Newer</span>'}
      <span class="pager-pages">${pagerNumbers(page, pages).map(n => n === GAP
        ? '<span class="pager-gap" aria-hidden="true">…</span>'
        : n === page
          ? `<span class="pager-page is-current" aria-current="page">${n}</span>`
          : `<a class="pager-page" href="${href(n)}">${n}</a>`).join('')}</span>
      ${page < pages ? `<a class="pager-step" href="${href(page + 1)}" rel="next">Older <span aria-hidden="true">→</span></a>` : '<span class="pager-step is-off">Older <span aria-hidden="true">→</span></span>'}
    </nav>` : '');
    }
    // While searching, every match is listed on one page and the pager steps aside.
    function showMatches(query) {
      const words = fold(query).split(/\s+/).filter(Boolean);
      const hits = past.filter((t, i) => words.every(w => searchable[i].includes(w)));
      set('archive-count', `${hits.length} of ${past.length} talks match`);
      set('archive-talks', hits.length ? hits.map(talkHtml).join('') : `<div class="empty"><p>No talk matches “${esc(query.trim())}”. Try fewer or shorter words.</p></div>`);
      set('archive-pager', '');
    }
    const pages = Math.max(1, Math.ceil(past.length / PER_PAGE));
    const params = new URLSearchParams(location.search);
    const query = params.get('q') || '';
    // A link to one talk opens the page that holds it, wherever it has drifted to.
    const wanted = decodeURIComponent(location.hash.slice(1));
    const found = wanted ? past.findIndex(t => slug(t.id) === wanted) : -1;
    if (query.trim() && found < 0) {
      if (box) box.value = query;
      showMatches(query);
    } else {
      const asked = found >= 0 ? Math.floor(found / PER_PAGE) + 1 : parseInt(params.get('page'), 10) || 1;
      showPage(Math.min(Math.max(asked, 1), pages), pages);
      if (found >= 0) document.getElementById(wanted)?.scrollIntoView();
    }
    let pending;
    box?.addEventListener('input', () => {
      clearTimeout(pending);
      pending = setTimeout(() => {
        const q = box.value;
        // The address keeps the search, so a filtered list can be shared or reloaded.
        history.replaceState(null, '', q.trim() ? `archive.html?q=${encodeURIComponent(q.trim())}` : 'archive.html');
        if (q.trim()) showMatches(q); else showPage(1, pages);
        typesetMath(list);
      }, 150);
    }, {signal: listeners.signal});
  }
  // Activities and courses are both lists of entries grouped into sections by
  // `kind`, the sections in the order each kind first appears in content.js.
  function sectionedList(items, indexId, listId, emptyTitle, emptyText) {
    const entries = records(items);
    const kinds = [...new Set(entries.map(a => a.kind))];
    // A single section needs no jump links to itself.
    set(indexId, kinds.length > 1 ? kinds.map(k => `<a href="#${slug(k)}">${esc(k)}</a>`).join('') : '');
    // An entry marked ongoing: true is labelled and comes first in its section.
    // One marked ongoing: false is over, so its dates and room give way to `period`
    // ("March 2025"). Entries without the field show everything they have.
    const ongoingFirst = (a, b) => (b.ongoing === true) - (a.ongoing === true);
    set(listId, kinds.length ? kinds.map(k => `<section class="activity-group" id="${slug(k)}"><h2 class="group-title">${esc(k)}</h2>${entries.filter(a => a.kind === k).sort(ongoingFirst).map(a => {
      const links = external(a.url, a.linkLabel || 'More information') + external(a.videoUrl, 'Recordings') + (mail(a.contact) ? `<a href="${mail(a.contact)}">Email the organisers</a>` : '');
      const shown = a.ongoing === false ? [a.lecturer, a.programme, a.period] : [a.lecturer, a.programme, a.when, a.where];
      const meta = shown.filter(Boolean).map(m => `<span>${esc(m)}</span>`).join('');
      const status = a.ongoing === true ? '<span class="status-ongoing">Ongoing</span>' : '';
      return `<article class="activity"${a.id ? ` id="${slug(a.id)}"` : ''}><div class="activity-meta">${meta}${sample(a)}</div><h3>${esc(a.title)}${status}</h3>${a.description ? paras(a.description) : ''}${links ? `<div class="talk-links">${links}</div>` : ''}</article>`;
    }).join('')}</section>`).join('') : `<div class="empty"><h3>${emptyTitle}</h3><p>${emptyText}</p></div>`);
  }
  if (current === 'activities') sectionedList(G.activities, 'activities-index', 'activities-list', 'Activities', 'The group’s activities will be listed here.');
  if (current === 'courses') sectionedList(G.courses, 'courses-index', 'courses-list', 'Courses', 'The courses the group teaches will be listed here.');
  if (current === 'contact') {
    const people = (G.contacts || []).filter(c => mail(c.email));
    const group = mail(G.email) ? `<a class="email-link" href="${mail(G.email)}">${esc(G.email)}</a>` : '';
    set('general-contact', people.length
      ? `${group}<p>For questions about the group, its research, or a visit, write to one of its professors:</p><ul class="contact-people">${people.map(c => `<li><span class="contact-name">${esc(c.name)}</span><a href="${mail(c.email)}">${esc(c.email)}</a></li>`).join('')}</ul>`
      : group || `<p class="draft-field">${G.preview ? '[Add contacts or the group’s email in content.js]' : 'Contact details will be added here.'}</p>`);
    const mailing = G.seminarMailing ? `<p>${withEmails(esc(G.seminarMailing))}</p>` : G.preview ? '<p class="draft-field">[How to receive the seminar announcements: fill in seminarMailing in content.js]</p>' : '';
    const organisers = mail(G.seminarEmail) ? `<p><a href="${mail(G.seminarEmail)}">Email the seminar organizers</a></p>` : '';
    set('seminar-contact', `${G.seminarContact ? `<p>${withEmails(esc(G.seminarContact))}</p>` : ''}${mailing}${organisers}`);
    const maps = external(G.mapUrl, 'Directions in Google Maps', 'text-link') + external(G.campusMapUrl, 'Campus plan (PDF)', 'text-link');
    set('visit-address', `<address>${G.address?.length ? G.address.map(esc).join('\n') : (G.preview ? '[Building, street, and postal code]\n' : '')+esc(G.city)}</address>`);
    set('visit-maps', maps);
    set('visit-directions', G.directions?.length ? paras(G.directions) : `<p${G.preview ? ' class="draft-field">[Add directions in content.js]' : '>Please contact your host for directions and information about building access.'}</p>`);
  }
  typesetMath(document.body);
})();
