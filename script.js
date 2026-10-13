// ===== BRAND CONFIG (edit here to rebrand) =====
var BRAND = {
  name: 'Mirrova',
  headline: 'Your conversations. Your choice.',
  tagline: 'A private messenger in development, designed around username connections, relationship-based identities and control over who can contact you.',
  contact: '', // e.g. 'hello@mirrova.app' — leave empty to show 'Contact: coming soon'
  domain: 'mirrova.app',
  themeKey: 'mirrova-theme' // localStorage key for the theme toggle
};
// ================================================
// Mirrova landing page — tiny, local-only script. No network requests.
(function () {
  var root = document.documentElement;
  function fill(k, v) { document.querySelectorAll('[data-brand="' + k + '"]').forEach(function (el) { el.textContent = v; }); }
  fill('name', BRAND.name); fill('tagline', BRAND.tagline); fill('year', String(new Date().getFullYear()));
  if (BRAND.contact) document.querySelectorAll('[data-brand="contact"]').forEach(function (el) { el.innerHTML = ''; var a = document.createElement('a'); a.href = 'mailto:' + BRAND.contact; a.textContent = BRAND.contact; el.appendChild(a); });
  document.querySelectorAll('[data-brand="domain-link"]').forEach(function (a) { a.textContent = BRAND.domain; a.href = 'https://' + BRAND.domain + '/'; });

  // Theme toggle (remembered in localStorage on this device only)
  var btn = document.getElementById('themeBtn');
  function current() {
    var t = root.getAttribute('data-theme');
    if (t) return t;
    return window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  if (btn) btn.addEventListener('click', function () {
    var next = current() === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem(BRAND.themeKey, next); } catch (e) {}
  });

  // Header border on scroll
  var header = document.querySelector('.site-header');
  function onScroll() { header && header.classList.toggle('scrolled', window.scrollY > 8); }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  // Reveal on scroll
  var els = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px' });
    els.forEach(function (el) { io.observe(el); });
  } else { els.forEach(function (el) { el.classList.add('in'); }); }

})();
