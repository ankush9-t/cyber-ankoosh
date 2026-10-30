(() => {
  "use strict";
  const config = window.PORTFOLIO_CONFIG || {};
  const links = config.links || {};
  document.querySelectorAll('[data-name="fullName"]').forEach(el => el.textContent = config.fullName || "Your Name");
  document.querySelectorAll('[data-name="shortName"]').forEach(el => el.textContent = config.shortName || "YOURNAME");

  document.querySelectorAll('[data-link]').forEach(anchor => {
    const url = links[anchor.dataset.link];
    if (url && /^https?:\/\//i.test(url)) anchor.href = url;
    else anchor.hidden = true;
  });

  const emailLink = document.querySelector('[data-email-link]');
  const configNote = document.getElementById('config-note');
  if (emailLink) {
    if (config.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(config.email)) {
      emailLink.href = `mailto:${encodeURIComponent(config.email)}?subject=${encodeURIComponent('Portfolio enquiry')}`;
      if (configNote) configNote.hidden = true;
    } else {
      emailLink.hidden = true;
      if (configNote) configNote.hidden = false;
    }
  }

  const menu = document.getElementById('menu');
  const nav = document.getElementById('navlinks');
  if (menu && nav) {
    menu.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menu.setAttribute('aria-expanded', String(open));
      menu.setAttribute('aria-label', open ? 'Close navigation' : 'Toggle navigation');
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false');
    }));
  }

  const targets = document.querySelectorAll('.heading,.about,.stat,.ethics,.skill,.project,.more,.roadmap article');
  targets.forEach(el => el.classList.add('reveal'));
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('show'); observer.unobserve(entry.target); }
    }), { threshold: 0.12 });
    targets.forEach(el => observer.observe(el));
  } else targets.forEach(el => el.classList.add('show'));
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
