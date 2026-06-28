/* nav.js — shared across all pages */
(function () {
  const burger = document.querySelector('.nav-burger, .nav__toggle');
  const links  = document.querySelector('.nav-links, .nav__links');
  if (!burger || !links) return;

  burger.addEventListener('click', () => {
    const open = burger.getAttribute('aria-expanded') === 'true';
    burger.setAttribute('aria-expanded', String(!open));
    links.classList.toggle('open', !open);
    document.body.style.overflow = open ? '' : 'hidden';
  });

  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      burger.setAttribute('aria-expanded', 'false');
      links.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 70);
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    reveals.forEach(el => io.observe(el));
  }
})();
