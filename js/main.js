(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.getElementById('year').textContent = new Date().getFullYear();

  /* ---------- Translations ---------- */
  var translations = {
    es: {
      'skip': 'Saltar al contenido principal',
      'nav.about': 'Sobre mí',
      'nav.stack': 'Stack',
      'nav.projects': 'Proyectos',
      'nav.education': 'Formación',
      'nav.contact': 'Contacto',
      'nav.openMenu': 'Abrir menú de navegación',
      'nav.closeMenu': 'Cerrar menú de navegación',
      'theme.toLight': 'Cambiar a tema claro',
      'theme.toDark': 'Cambiar a tema oscuro',
      'lang.group': 'Selector de idioma',
      'hero.role': 'Desarrollador Full-Stack · DAM',
      'hero.status': 'Disponible para trabajo',
      'hero.pitch': 'Construyo productos de principio a fin, de la idea al deploy.',
      'hero.ctaProjects': 'Ver proyectos',
      'hero.ctaContact': 'Contacto',
      'hero.ctaCV': '📄 Descargar CV',
      'about.title': 'Sobre mí',
      'about.p1': 'Desarrollador full-stack recién titulado en <strong>DAM</strong>, con background en edición de vídeo y diseño gráfico. Esa mezcla me dejó una obsesión: si algo funciona pero se ve o se siente mal, para mí no está terminado.',
      'about.p2': 'Construyo aplicaciones completas — backend en Java, Laravel o Node.js, frontend en React y React Native, con PostgreSQL detrás —. Me interesa especialmente integrar IA en productos reales (RAG, embeddings, APIs de LLMs), como hice en <em>reparaelec</em>.',
      'stack.title': 'Stack tecnológico',
      'stack.languages': 'Lenguajes',
      'stack.frontend': 'Frontend',
      'stack.backend': 'Backend',
      'stack.databases': 'Bases de datos',
      'stack.tools': 'Herramientas &amp; IA',
      'projects.title': 'Proyectos',
      'projects.featuredBadge': 'Proyecto insignia',
      'projects.reparaelec.desc': 'Asistente de IA con RAG para que técnicos de reparación consulten manuales de electrodomésticos en lenguaje natural, en vez de bucear en PDFs de cientos de páginas. Los manuales se indexan como embeddings en pgvector y las respuestas se generan vía la API de Claude. Incluye versión web y app móvil.',
      'projects.reparaelec.linkWeb': 'Repo web (Laravel + Next.js) ↗',
      'projects.reparaelec.linkApp': 'Repo app móvil ↗',
      'projects.peluqueria.desc': 'Gestión de citas para peluquerías, multitenant y con PWA instalable. Backend desplegado en Railway, frontend en Vercel.',
      'projects.demo': 'Demo en vivo ↗',
      'projects.code': 'Código ↗',
      'projects.others': 'Otros proyectos',
      'projects.pdformatter.desc': 'API REST que automatiza la extracción de texto, fusión y reformateo de documentos PDF. Diseñada para integrarse en flujos de trabajo que necesitan procesar documentos en lote.',
      'projects.contactmanager.desc': 'App nativa para gestionar contactos con búsqueda avanzada, organización por categorías y persistencia local. CRUD completo con validaciones.',
      'projects.eventrun.desc': 'Plataforma para crear, gestionar e inscribirse en eventos. Incluye calendario interactivo, filtros de búsqueda y gestión de participantes.',
      'carousel.prev': 'Proyecto anterior',
      'carousel.next': 'Siguiente proyecto',
      'carousel.region': 'Otros proyectos',
      'education.title': 'Formación',
      'education.degree': 'Desarrollo de Aplicaciones Multiplataforma (DAM)',
      'education.degree2': 'Especialización en Big Data + Inteligencia Artificial',
      'education.year2': 'En curso',
      'contact.title': 'Contacto',
      'contact.lead': 'Estoy deseando trabajar en nuevos proyectos. Escríbeme.',
      'footer.made': 'Hecho a mano con HTML, CSS y JS puro.'
    },
    en: {
      'skip': 'Skip to main content',
      'nav.about': 'About',
      'nav.stack': 'Stack',
      'nav.projects': 'Projects',
      'nav.education': 'Education',
      'nav.contact': 'Contact',
      'nav.openMenu': 'Open navigation menu',
      'nav.closeMenu': 'Close navigation menu',
      'theme.toLight': 'Switch to light theme',
      'theme.toDark': 'Switch to dark theme',
      'lang.group': 'Language selector',
      'hero.role': 'Full-Stack Developer · DAM',
      'hero.status': 'Available for work',
      'hero.pitch': 'I build products end to end, from idea to deploy.',
      'hero.ctaProjects': 'View projects',
      'hero.ctaContact': 'Contact',
      'hero.ctaCV': '📄 Download CV',
      'about.title': 'About me',
      'about.p1': "Full-stack developer, recently graduated in <strong>Multiplatform App Development (DAM)</strong>, with a background in video editing and graphic design. That mix left me with an obsession: if something works but looks or feels wrong, it's not done.",
      'about.p2': "I build complete applications — backend in Java, Laravel or Node.js, frontend in React and React Native, with PostgreSQL behind them —. I'm especially interested in integrating AI into real products (RAG, embeddings, LLM APIs), as I did in <em>reparaelec</em>.",
      'stack.title': 'Tech stack',
      'stack.languages': 'Languages',
      'stack.frontend': 'Frontend',
      'stack.backend': 'Backend',
      'stack.databases': 'Databases',
      'stack.tools': 'Tools &amp; AI',
      'projects.title': 'Projects',
      'projects.featuredBadge': 'Flagship project',
      'projects.reparaelec.desc': 'An AI assistant with RAG so repair technicians can query appliance manuals in natural language instead of digging through hundred-page PDFs. Manuals are indexed as embeddings in pgvector and answers are generated via the Claude API. Includes a web version and a mobile app.',
      'projects.reparaelec.linkWeb': 'Web repo (Laravel + Next.js) ↗',
      'projects.reparaelec.linkApp': 'Mobile app repo ↗',
      'projects.peluqueria.desc': 'Appointment management for hair salons, multitenant and installable as a PWA. Backend deployed on Railway, frontend on Vercel.',
      'projects.demo': 'Live demo ↗',
      'projects.code': 'Code ↗',
      'projects.others': 'Other projects',
      'projects.pdformatter.desc': 'REST API that automates text extraction, merging and reformatting of PDF documents. Designed to plug into workflows that need batch document processing.',
      'projects.contactmanager.desc': 'Native app to manage contacts with advanced search, category organization and local persistence. Full CRUD with validations.',
      'projects.eventrun.desc': 'Platform to create, manage and register for events. Features an interactive calendar, search filters and participant management.',
      'carousel.prev': 'Previous project',
      'carousel.next': 'Next project',
      'carousel.region': 'Other projects',
      'education.title': 'Education',
      'education.degree': 'Multiplatform App Development (DAM)',
      'education.degree2': 'Specialization in Big Data + Artificial Intelligence',
      'education.year2': 'In progress',
      'contact.title': 'Contact',
      'contact.lead': "I'm looking forward to working on new projects. Get in touch.",
      'footer.made': 'Handcrafted with plain HTML, CSS and JS.'
    }
  };

  var i18nEls = document.querySelectorAll('[data-i18n]');
  var navToggle = document.getElementById('nav-toggle');
  var nav = document.getElementById('main-nav');
  var langButtons = document.querySelectorAll('.lang-btn');
  var themeToggle = document.getElementById('theme-toggle');
  var carouselPrev = document.getElementById('carousel-prev');
  var carouselNext = document.getElementById('carousel-next');
  var currentLang = 'es';

  function applyLanguage(lang) {
    if (!translations[lang]) { lang = 'es'; }
    currentLang = lang;
    document.documentElement.setAttribute('lang', lang);

    i18nEls.forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var value = translations[lang][key];
      if (value != null) { el.innerHTML = value; }
    });

    langButtons.forEach(function (btn) {
      btn.setAttribute('aria-pressed', btn.dataset.lang === lang ? 'true' : 'false');
    });

    document.querySelector('.lang-switch').setAttribute('aria-label', translations[lang]['lang.group']);
    navToggle.setAttribute('aria-label', translations[lang][nav.classList.contains('is-open') ? 'nav.closeMenu' : 'nav.openMenu']);
    themeToggle.setAttribute('aria-label', translations[lang][document.documentElement.getAttribute('data-theme') === 'light' ? 'theme.toDark' : 'theme.toLight']);
    carouselPrev.setAttribute('aria-label', translations[lang]['carousel.prev']);
    carouselNext.setAttribute('aria-label', translations[lang]['carousel.next']);
    document.getElementById('carousel-track').setAttribute('aria-label', translations[lang]['carousel.region']);

    localStorage.setItem('lang', lang);
  }

  langButtons.forEach(function (btn) {
    btn.addEventListener('click', function () { applyLanguage(btn.dataset.lang); });
  });

  var storedLang = null;
  try { storedLang = localStorage.getItem('lang'); } catch (e) {}
  var initialLang = storedLang || (navigator.language && navigator.language.toLowerCase().indexOf('en') === 0 ? 'en' : 'es');
  applyLanguage(initialLang);

  /* ---------- Theme ---------- */
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    themeToggle.setAttribute('aria-pressed', theme === 'light' ? 'true' : 'false');
    themeToggle.setAttribute('aria-label', translations[currentLang][theme === 'light' ? 'theme.toDark' : 'theme.toLight']);
    try { localStorage.setItem('theme', theme); } catch (e) {}
  }

  var storedTheme = null;
  try { storedTheme = localStorage.getItem('theme'); } catch (e) {}
  var initialTheme = storedTheme || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
  applyTheme(initialTheme);

  themeToggle.addEventListener('click', function () {
    var next = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    applyTheme(next);
  });

  /* ---------- Mobile nav toggle ---------- */
  navToggle.addEventListener('click', function () {
    var isOpen = nav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    navToggle.setAttribute('aria-label', translations[currentLang][isOpen ? 'nav.closeMenu' : 'nav.openMenu']);
  });

  nav.querySelectorAll('.nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', translations[currentLang]['nav.openMenu']);
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

  /* ---------- Carousel ---------- */
  var track = document.getElementById('carousel-track');

  function scrollCarousel(direction) {
    var item = track.querySelector('.carousel-item');
    var amount = item ? item.getBoundingClientRect().width + 20 : 300;
    track.scrollBy({ left: direction * amount, behavior: reduceMotion ? 'auto' : 'smooth' });
  }

  carouselPrev.addEventListener('click', function () { scrollCarousel(-1); });
  carouselNext.addEventListener('click', function () { scrollCarousel(1); });

  /* ---------- Hero entrance: typing + fade-up ---------- */
  var eyebrowEl = document.getElementById('eyebrow-text');
  var cursorEl = document.getElementById('cursor');
  var fadeEls = ['hero-name', 'hero-role', 'hero-status', 'hero-pitch', 'hero-actions'].map(function (id) {
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
