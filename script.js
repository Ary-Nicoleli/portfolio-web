// Aplica efeito fade-in em cada seção ao rolar
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.style.animationPlayState = 'running';
        observer.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => {
    fader.style.animationPlayState = 'paused';
    appearOnScroll.observe(fader);
});
