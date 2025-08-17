// Pequena animação suave no scroll
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

// Inicializa com efeito de fade
sections.forEach(sec => {
  sec.style.opacity = '0';
  sec.style.transform = 'translateY(20px)';
  sec.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});
