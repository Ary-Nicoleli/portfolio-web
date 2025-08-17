const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  sections.forEach(sec => {
    if (scrollY + window.innerHeight > sec.offsetTop + 100) {
      sec.style.opacity = '1';
      sec.style.transform = 'translateY(0)';
    }
  });
});
