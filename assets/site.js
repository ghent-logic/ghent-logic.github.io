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
  const paras = v => (Array.isArray(v) ? v : String(v ?? '').split(/\n\s*\n/))
    .map(t => String(t).trim()).filter(Boolean).map(t => `<p>${esc(t)}</p>`).join('');
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
  const nav = [['index','Home'],['people','People'],['research','Research'],['seminars','Seminars'],['activities','Activities'],['contact','Contact']];
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

  set('site-footer', `<footer class="footer"><div class="wrap"><div class="footer-main"><div><h2>${esc(G.name)}</h2><p>${esc(G.department || G.university)}<br>${esc(G.city)}</p></div><div><div class="footer-label">Explore</div><div class="footer-links">${nav.slice(1,5).map(([p,t]) => `<a href="${p}.html">${t}</a>`).join('')}</div></div><div><div class="footer-label">Connect</div><div class="footer-links"><a href="contact.html">Contact the group</a>${external(G.universityUrl, G.university)}${mail(G.email) ? `<a href="${mail(G.email)}">${esc(G.email)}</a>` : ''}</div></div></div><div class="footer-bottom"><span>© ${new Date().getFullYear()} ${esc(G.name)}</span>${G.photoCredit ? `<span class="footer-credit">${esc(G.photoCredit)}</span>` : ''}<span>${G.preview ? 'Preview copy · Replace sample content before launch' : esc(G.university)}</span></div></div></footer>`);
  document.querySelectorAll('[data-group-name]').forEach(el => el.textContent = G.name);
  document.querySelectorAll('[data-university]').forEach(el => el.textContent = G.university);
  document.querySelectorAll('[data-city]').forEach(el => el.textContent = G.city);

  const areas = G.research || [];
  if (current === 'index') {
    set('hero-title', esc(G.home.title));
    set('hero-introduction', esc(G.home.introduction));
    set('group-introduction', esc(G.home.about));
    set('home-topics', areas.map(a => `<article class="topic"><h3>${esc(a.title)}</h3><p>${esc(a.short)}</p><a class="text-link" href="research.html#${slug(a.id)}">Explore this area</a></article>`).join(''));
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
    // A past talk keeps the room it was held in, but must not promise a location still to come.
    // The announcements name rooms by number alone, so the campus and building come
    // from G.seminarVenue rather than being repeated in every entry.
    const room = t.location || (isPast(t) ? '' : G.seminarLocation || 'Location to be announced');
    const place = room && G.seminarVenue && !room.includes(G.seminarVenue) ? `${G.seminarVenue}, ${room}` : room;
    const meta = [t.time ? esc(t.time) + ' (Ghent local time)' : '', esc(place)].filter(Boolean).join(' · ');
    const links = external(t.onlineUrl,'Join online') + external(t.videoUrl,'Recording') + external(t.slidesUrl,'Slides') + external(t.paperUrl,'Paper');
    return `<article class="talk" id="${slug(t.id)}">${dateBox(t)}<div>${sample(t)}<h3>${esc(t.title)}</h3><p class="speaker">${who}${t.affiliation ? ' · '+esc(t.affiliation) : ''}</p>${meta ? `<p class="location">${meta}</p>` : ''}${t.abstract ? `<details><summary>Read abstract</summary>${paras(t.abstract)}</details>` : ''}${links ? `<div class="talk-links">${links}</div>` : ''}</div></article>`;
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
      + (past.length > recent.length ? `<p class="archive-more"><a class="text-link" href="archive.html">All previous talks</a></p>` : '')
      : '<p class="muted">Previous talks will appear here.</p>');
    set('seminar-practical', `<h3>Practical information</h3><div class="info-item"><span class="info-label">When</span><p>${esc(G.seminarSchedule || 'See individual announcements. All times are local to Ghent.')}</p></div><div class="info-item"><span class="info-label">Where</span><p>${esc(G.seminarLocation || G.seminarVenue || 'Locations will be included with each announcement.')}</p></div><div class="info-item"><span class="info-label">Questions & online access</span>${mail(G.seminarEmail || G.email) ? `<a href="${mail(G.seminarEmail || G.email)}">Email the organizers</a>` : '<a href="contact.html">Contact information</a>'}</div>`);
  }
  if (current === 'archive') {
    const pages = Math.max(1, Math.ceil(past.length / PER_PAGE));
    // A link to one talk opens the page that holds it, wherever it has drifted to.
    const wanted = decodeURIComponent(location.hash.slice(1));
    const found = wanted ? past.findIndex(t => slug(t.id) === wanted) : -1;
    const asked = found >= 0 ? Math.floor(found / PER_PAGE) + 1 : parseInt(new URLSearchParams(location.search).get('page'), 10) || 1;
    const page = Math.min(Math.max(asked, 1), pages);
    const slice = past.slice((page - 1) * PER_PAGE, page * PER_PAGE);
    set('archive-count', past.length
      ? `${past.length} talk${past.length === 1 ? '' : 's'}${pages > 1 ? ` · page ${page} of ${pages}` : ''}`
      : '');
    set('archive-talks', slice.length ? slice.map(talkHtml).join('') : '<div class="empty"><h3>Archive</h3><p>Previous talks will appear here.</p></div>');
    const href = n => n === 1 ? 'archive.html' : `archive.html?page=${n}`;
    set('archive-pager', pages > 1 ? `<nav class="pager" aria-label="Archive pages">
      ${page > 1 ? `<a class="pager-step" href="${href(page - 1)}" rel="prev"><span aria-hidden="true">←</span> Newer</a>` : '<span class="pager-step is-off"><span aria-hidden="true">←</span> Newer</span>'}
      <span class="pager-pages">${pagerNumbers(page, pages).map(n => n === GAP
        ? '<span class="pager-gap" aria-hidden="true">…</span>'
        : n === page
          ? `<span class="pager-page is-current" aria-current="page">${n}</span>`
          : `<a class="pager-page" href="${href(n)}">${n}</a>`).join('')}</span>
      ${page < pages ? `<a class="pager-step" href="${href(page + 1)}" rel="next">Older <span aria-hidden="true">→</span></a>` : '<span class="pager-step is-off">Older <span aria-hidden="true">→</span></span>'}
    </nav>` : '');
    if (found >= 0) document.getElementById(wanted)?.scrollIntoView();
  }
  if (current === 'activities') {
    const doings = records(G.activities);
    // Sections come from the distinct kinds, in the order they first appear in content.js.
    const kinds = [...new Set(doings.map(a => a.kind))];
    set('activities-index', kinds.map(k => `<a href="#${slug(k)}">${esc(k)}</a>`).join(''));
    set('activities-list', kinds.length ? kinds.map(k => `<section class="activity-group" id="${slug(k)}"><h2 class="group-title">${esc(k)}</h2>${doings.filter(a => a.kind === k).map(a => {
      const links = external(a.url, a.linkLabel || 'More information') + (mail(a.contact) ? `<a href="${mail(a.contact)}">Email the organisers</a>` : '');
      return `<article class="activity"${a.id ? ` id="${slug(a.id)}"` : ''}><div class="activity-meta">${a.when ? `<span>${esc(a.when)}</span>` : ''}${a.where ? `<span>${esc(a.where)}</span>` : ''}${sample(a)}</div><h3>${esc(a.title)}</h3>${a.description ? paras(a.description) : ''}${links ? `<div class="talk-links">${links}</div>` : ''}</article>`;
    }).join('')}</section>`).join('') : '<div class="empty"><h3>Activities</h3><p>The group\u2019s activities will be listed here.</p></div>');
  }
  if (current === 'contact') {
    set('general-contact', mail(G.email) ? `<a class="email-link" href="${mail(G.email)}">${esc(G.email)}</a>` : `<p class="draft-field">${G.preview ? '[Add the group’s contact email in content.js]' : 'A group contact address will be added here.'}</p>`);
    set('seminar-contact', mail(G.seminarEmail || G.email) ? `<a href="${mail(G.seminarEmail || G.email)}">Email the seminar organizers</a>` : '<p class="muted">Organizer details will be included in the seminar announcements.</p>');
    set('visit-address', `<p>${esc(G.name)}<br>${G.department ? esc(G.department)+'<br>' : ''}${esc(G.university)}</p><address>${G.address?.length ? G.address.map(esc).join('\n') : (G.preview ? '[Building, street, and postal code]\n' : '')+esc(G.city)}</address>${external(G.mapUrl, 'Open map')}`);
    set('visit-directions', G.directions ? esc(G.directions) : G.preview ? '[Add directions and information about step-free access in content.js.]' : 'Please contact your host for directions and information about building access.');
  }
  typesetMath(document.body);
})();
