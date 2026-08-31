(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.getElementById('year').textContent = new Date().getFullYear();

  /* ---------- Mobile nav toggle ---------- */
  var toggle = document.getElementById('nav-toggle');
  var nav = document.getElementById('main-nav');

  toggle.addEventListener('click', function () {
    var isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    toggle.setAttribute('aria-label', isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación');
  });

  nav.querySelectorAll('.nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Abrir menú de navegación');
    });
  });

  /* ---------- Active nav link on scroll ---------- */
  var sections = document.querySelectorAll('main section[id]');
  var navLinks = document.querySelectorAll('.nav-link');

  var sectionObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.getAttribute('id');
          navLinks.forEach(function (link) {
            link.classList.toggle('is-active', link.getAttribute('href') === '#' + id);
          });
        }
      });
    },
    { rootMargin: '-45% 0px -50% 0px' }
  );
  sections.forEach(function (section) { sectionObserver.observe(section); });

  /* ---------- Hero entrance: typing + fade-up ---------- */
  var eyebrowEl = document.getElementById('eyebrow-text');
  var cursorEl = document.getElementById('cursor');
  var fadeEls = ['hero-name', 'hero-role', 'hero-pitch', 'hero-actions'].map(function (id) {
    return document.getElementById(id);
  });

  function revealHero() {
    fadeEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  if (reduceMotion) {
    revealHero();
    return;
  }

  var fullText = eyebrowEl.textContent;
  eyebrowEl.textContent = '';
  var i = 0;

  function typeChar() {
    if (i <= fullText.length) {
      eyebrowEl.textContent = fullText.slice(0, i);
      i++;
      setTimeout(typeChar, 28);
    } else {
      setTimeout(function () {
        cursorEl.style.display = 'none';
        revealHero();
      }, 300);
    }
  }

  setTimeout(typeChar, 200);
})();
