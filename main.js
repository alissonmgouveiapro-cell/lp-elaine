// Lenis Smooth Scroll Setup
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: 'vertical',
  gestureDirection: 'vertical',
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
})

// Request Animation Frame for Lenis
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

// Integrar Lenis com GSAP ScrollTrigger
lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)

// GSAP Animations
document.addEventListener("DOMContentLoaded", (event) => {
  // Set initial states for elements to hide them before animation
  gsap.set(".hero-reveal", { opacity: 0, y: 30 });
  gsap.set(".reveal", { opacity: 0, y: 40 });

  // Hero Animations
  gsap.to(".hero-reveal", {
    y: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.15,
    ease: "power3.out",
    delay: 0.2
  });

  // Scroll Animations for sections
  const revealElements = document.querySelectorAll('.reveal');
  
  revealElements.forEach((el) => {
    ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      onEnter: () => {
        gsap.to(el, {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          overwrite: "auto"
        });
      },
      once: true
    });
  });

  // Subtle parallax effect on backgrounds if needed
  const sections = document.querySelectorAll('.sec-reveal-container');
  sections.forEach(sec => {
      const bg = sec.querySelector('.bg-gradient-to-b');
      if (bg) {
          gsap.to(bg, {
              yPercent: 20,
              ease: "none",
              scrollTrigger: {
                  trigger: sec,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: true
              }
          });
      }
  });
  // ==========================================
  // BOTÃO FLUTUANTE VOLTAR AO TOPO
  // ==========================================
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    lenis.on('scroll', (e) => {
      // e.scroll contém a posição atual na maioria das versões do Lenis
      const currentScroll = typeof e.scroll !== 'undefined' ? e.scroll : window.scrollY;
      
      if (currentScroll > 600) {
        // backToTopBtn.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
        // backToTopBtn.classList.add('opacity-100', 'pointer-events-auto', 'translate-y-0');
      } else {
        // backToTopBtn.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
        // backToTopBtn.classList.remove('opacity-100', 'pointer-events-auto', 'translate-y-0');
      }
    });

    backToTopBtn.addEventListener('click', (ev) => {
      ev.preventDefault(); 
      lenis.scrollTo(0, { duration: 1.5 }); // Usa o próprio Lenis para rolar
    });
  }

});
