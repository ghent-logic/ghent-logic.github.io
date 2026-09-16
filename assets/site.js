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
  const records = list => (list || []).filter(x => G.preview || !x.sample);
  const set = (id, html) => { const el = document.getElementById(id); if (el) el.innerHTML = html; };
  const external = (url, label, cls = '') => link(url) ? `<a class="${cls}" href="${link(url)}">${esc(label)} <span aria-hidden="true">↗</span></a>` : '';
  const nav = [['index','Home'],['people','People'],['research','Research'],['seminars','Seminars'],['publications','Publications'],['contact','Contact']];
  const current = document.body.dataset.page;
  // Allows the all-in-one preview to mount another page without retaining listeners.
  window.groupListeners?.abort();
  const listeners = new AbortController();
  window.groupListeners = listeners;
  document.title = `${current === 'index' ? '' : (nav.find(n => n[0] === current)?.[1] || 'Page not found') + ' · '}${G.name} · ${G.university}`;

  if (G.preview) {
    set('preview-note', 'Design preview · Bracketed fields and “Sample entry” labels need your details. <a href="START-HERE.html">Finishing checklist</a>');
  } else {
    document.getElementById('preview-note')?.remove();
  }
  set('site-header', `<div class="masthead"><div class="wrap"><span>${esc(G.university)} <span aria-hidden="true">/</span> Research group</span><span class="masthead-right">${esc(G.city)}</span></div></div>
    <header class="header"><div class="wrap header-row"><a class="brand" href="index.html"><span class="brand-symbol" aria-hidden="true"><svg viewBox="0 0 32 32" focusable="false"><path d="M9 5V27M9 16H28"/></svg></span><span class="brand-title">${esc(G.name)}</span></a>
    <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="main-navigation">Menu <span aria-hidden="true">☰</span></button>
    <nav class="nav" id="main-navigation" aria-label="Main navigation">${nav.map(([p,t]) => `<a href="${p}.html"${current === p ? ' aria-current="page"' : ''}>${t}</a>`).join('')}</nav></div></header>`);
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

  set('site-footer', `<footer class="footer"><div class="wrap"><div class="footer-main"><div><h2>${esc(G.name)}</h2><p>${esc(G.department || G.university)}<br>${esc(G.city)}</p></div><div><div class="footer-label">Explore</div><div class="footer-links">${nav.slice(1,5).map(([p,t]) => `<a href="${p}.html">${t}</a>`).join('')}</div></div><div><div class="footer-label">Connect</div><div class="footer-links"><a href="contact.html">Contact the group</a>${external(G.universityUrl, G.university)}${mail(G.email) ? `<a href="${mail(G.email)}">${esc(G.email)}</a>` : ''}</div></div></div><div class="footer-bottom"><span>© ${new Date().getFullYear()} ${esc(G.name)}</span><span>${G.preview ? 'Preview copy · Replace sample content before launch' : esc(G.university)}</span></div></div></footer>`);
  document.querySelectorAll('[data-group-name]').forEach(el => el.textContent = G.name);
  document.querySelectorAll('[data-university]').forEach(el => el.textContent = G.university);
  document.querySelectorAll('[data-city]').forEach(el => el.textContent = G.city);

  const areas = G.research || [];
  if (current === 'index') {
    set('hero-eyebrow', esc(G.home.eyebrow));
    set('hero-title', `${esc(G.home.title)}<em>${esc(G.home.emphasis)}</em>`);
    set('hero-introduction', esc(G.home.introduction));
    set('group-introduction', esc(G.home.about));
    set('home-topics', areas.map(a => `<article class="topic"><div class="topic-number">${esc(a.number)}</div><h3>${esc(a.title)}</h3><p>${esc(a.short)}</p><a class="text-link" href="research.html#${slug(a.id)}">Explore this area <span aria-hidden="true">↗</span></a></article>`).join(''));
  }
  if (current === 'research') {
    set('research-index', areas.map(a => `<a href="#${slug(a.id)}">${esc(a.title)}</a>`).join(''));
    set('research-areas', areas.map(a => `<section class="research-row" id="${slug(a.id)}"><div class="research-number">${esc(a.number)}</div><div><h2>${esc(a.title)}</h2><p class="research-question">${esc(a.question)}</p></div><div class="research-detail"><p>${esc(a.description)}</p><div class="tags">${(a.topics||[]).map(t => `<span class="tag">${esc(t)}</span>`).join('')}</div></div></section>`).join(''));
  }
  if (current === 'people') {
    const people = records(G.people);
    const groups = [...new Set(people.map(p => p.group))];
    set('people-index', groups.map(g => `<a href="#${slug(g)}">${esc(g)}</a>`).join(''));
    set('people-list', groups.length ? groups.map(g => `<section class="member-group" id="${slug(g)}"><h2 class="group-title">${esc(g)}</h2><div class="members">${people.filter(p => p.group===g).map(p => {
      const photo = /^(assets\/|https:\/\/)/.test(p.photo || '') && !p.photo.includes('..') ? p.photo : '';
      return `<article class="member"><div class="portrait">${photo ? `<img src="${esc(photo)}" alt="${esc(p.name)}" loading="lazy" width="400" height="300"><span hidden aria-hidden="true">${esc(p.initials)}</span>` : `<span aria-hidden="true">${esc(p.initials)}</span>`}</div><div class="member-body">${sample(p)}<h3>${esc(p.name)}</h3><p class="member-role">${esc(p.role)}</p><p class="member-area">${esc(p.area)}</p><p class="member-bio">${esc(p.bio)}</p>${p.profile || mail(p.email) ? `<div class="member-links">${external(p.profile,'Academic profile')}${mail(p.email) ? `<a href="${mail(p.email)}">Email</a>` : ''}</div>` : ''}${p.sample ? '<p class="edit-hint">Profile and email links appear when added.</p>' : ''}</div></article>`;
    }).join('')}</div></section>`).join('') : '<div class="empty"><h3>Members</h3><p>Member profiles will be added here.</p></div>');
    document.querySelectorAll('.portrait img').forEach(img => img.addEventListener('error', () => {img.hidden=true; img.nextElementSibling.hidden=false;}));
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
    return `<article class="talk" id="${slug(t.id)}">${dateBox(t)}<div>${sample(t)}<h3>${esc(t.title)}</h3><p class="speaker">${esc(t.speaker)}${t.affiliation ? ' · '+esc(t.affiliation) : ''}</p><p class="location">${t.time ? esc(t.time) + ' (Ghent local time) · ' : ''}${esc(t.location || G.seminarLocation || 'Location to be announced')}</p>${t.abstract ? `<details><summary>Read abstract</summary><p>${esc(t.abstract)}</p></details>` : ''}${t.onlineUrl || t.slidesUrl ? `<div class="talk-links">${external(t.onlineUrl,'Join online')}${external(t.slidesUrl,'Slides')}</div>` : ''}</div></article>`;
  }
  if (current === 'index') {
    const t = upcoming[0];
    set('home-seminar', t ? `<div class="seminar-feature"><div class="sample-row"><p class="eyebrow">${validDate(t.date) ? esc(dateLabel(t)) : 'Programme in preparation'}</p>${sample(t)}</div><h3>${esc(t.title)}</h3><p>${esc(t.speaker)}</p><p class="muted">${esc(t.affiliation)}</p><div class="feature-meta">${esc(t.location || G.seminarLocation || 'Location to be announced')}${t.time ? ' · '+esc(t.time) : ''}</div><a class="text-link" href="seminars.html#${slug(t.id)}">Seminar details <span aria-hidden="true">↗</span></a></div>` : '<div class="seminar-feature"><p class="eyebrow">Logic seminar</p><h3>New talks will be announced here.</h3><p class="muted">Explore the archive of previous seminars.</p><div class="actions"><a class="text-link" href="seminars.html">Seminar programme</a></div></div>');
  }
  if (current === 'seminars') {
    set('upcoming-talks', upcoming.length ? upcoming.map(talkHtml).join('') : '<div class="empty">No upcoming talks have been announced. Please check back for the next programme.</div>');
    set('past-talks', past.length ? past.map(talkHtml).join('') : '<p class="muted">Previous talks will appear here.</p>');
    set('seminar-practical', `<h3>Practical information</h3><div class="info-item"><span class="info-label">When</span><p>${esc(G.seminarSchedule || 'See individual announcements. All times are local to Ghent.')}</p></div><div class="info-item"><span class="info-label">Where</span><p>${esc(G.seminarLocation || 'Locations will be included with each announcement.')}</p></div><div class="info-item"><span class="info-label">Questions & online access</span>${mail(G.seminarEmail || G.email) ? `<a href="${mail(G.seminarEmail || G.email)}">Email the organizers</a>` : '<a href="contact.html">Contact information</a>'}</div>`);
  }
  if (current === 'publications') {
    const papers = records(G.publications).sort((a,b) => String(b.year||'').localeCompare(String(a.year||'')));
    set('publication-list', papers.length ? papers.map(p => `<article class="publication"><div class="publication-meta"><span>${esc(p.type)}</span>${p.year ? `<span>${esc(p.year)}</span>` : ''}${sample(p)}</div><h3>${esc(p.title)}</h3><p class="authors">${esc(p.authors)}</p><p class="venue">${esc(p.venue)}</p>${p.url || p.preprintUrl ? `<div class="talk-links">${external(p.url,'Publisher / DOI')}${external(p.preprintUrl,'Read preprint')}</div>` : ''}${p.abstract ? `<details><summary>Abstract</summary><p>${esc(p.abstract)}</p></details>` : ''}</article>`).join('') : '<div class="empty"><h3>Publications</h3><p>The publication list is being prepared.</p></div>');
  }
  if (current === 'contact') {
    set('general-contact', mail(G.email) ? `<a class="email-link" href="${mail(G.email)}">${esc(G.email)}</a>` : `<p class="draft-field">${G.preview ? '[Add the group’s contact email in content.js]' : 'A group contact address will be added here.'}</p>`);
    set('seminar-contact', mail(G.seminarEmail || G.email) ? `<a href="${mail(G.seminarEmail || G.email)}">Email the seminar organizers</a>` : '<p class="muted">Organizer details will be included in the seminar announcements.</p>');
    set('visit-address', `<p>${esc(G.name)}<br>${G.department ? esc(G.department)+'<br>' : ''}${esc(G.university)}</p><address>${G.address?.length ? G.address.map(esc).join('\n') : (G.preview ? '[Building, street, and postal code]\n' : '')+esc(G.city)}</address>${external(G.mapUrl, 'Open map')}`);
    set('visit-directions', G.directions ? esc(G.directions) : G.preview ? '[Add directions and information about step-free access in content.js.]' : 'Please contact your host for directions and information about building access.');
  }
})();
