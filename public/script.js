document.addEventListener("DOMContentLoaded", () => {
  const { gsap } = window;

  if (!gsap) return;

  gsap.registerPlugin(ScrollTrigger);

  const splitTexts = document.querySelectorAll('.split-text');
  splitTexts.forEach((element) => {
    const split = new SplitText(element, { type: 'words,chars' });

    gsap.from(split.chars, {
      opacity: 0,
      y: 18,
      rotationX: 90,
      stagger: 0.03,
      ease: 'power3.out',
      duration: 0.8,
      scrollTrigger: {
        trigger: element,
        start: 'top 88%',
      },
    });
  });

  gsap.from('.reveal-card', {
    opacity: 0,
    y: 28,
    duration: 0.9,
    stagger: 0.12,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.generator',
      start: 'top 80%',
    },
  });

  gsap.from('.reveal', {
    opacity: 0,
    y: 22,
    duration: 0.8,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.generator',
      start: 'top 80%',
    },
  });

  gsap.to('.hero-panel', {
    y: -10,
    duration: 2.5,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  });
});
