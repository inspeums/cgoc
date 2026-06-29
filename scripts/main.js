  // nav scrolled state
  const nav = document.getElementById('nav');
  addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 8));

  // mobile menu
  const burger = document.getElementById('burger');
  const links = document.getElementById('navLinks');
  burger.addEventListener('click', () => links.classList.toggle('open'));
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));

  // reveal on scroll
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        // animate hero bars when ecosystem revealed
        e.target.querySelectorAll('.bar i').forEach(b => b.style.width = b.dataset.w);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // fire hero bars immediately if already visible
  setTimeout(() => {
    document.querySelectorAll('.hero .bar i').forEach(b => b.style.width = b.dataset.w);
  }, 400);
