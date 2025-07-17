// gsap.to(".box", {
//     x: 200,
// });

gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero-right", {
  scrollTrigger: {
    trigger: ".hero-right",
    start: "top 80%",
    // markers: true // optional for debugging
  },
  opacity: 0,
  x: 100,
  duration: 1,
  ease: "power2.out",
  delay: 0.2
});

// Dynamic Pop up text animation //
// gsap.from(".pop-up-text", {
//   scrollTrigger: {
//     trigger: ".pop-up-text",
//     start: "top 80%",
//   },
//   scale: 0,
//   opacity: 0,
//   duration: 0.6,
//   ease: "back.out(1.7)"
// });

gsap.fromTo(".pop-up-text",
  {
    scale: 0,
    opacity: 0,
  },
  {
    scrollTrigger: {
      trigger: ".pop-up-text",
      start: "top 80%",
    },
    scale: 1,
    opacity: 1,
    duration: 0.5,
    ease: "back.out(1.7)",
    onComplete: () => {
      // Wiggle animation after pop-up finishes
      gsap.to(".pop-up-text", {
        scale: 1.2,
        rotation: 5,
        yoyo: true,
        repeat: 1,
        duration: 0.2,
        ease: "power1.inOut",
        onComplete: () => {
          // Smoothly reset to original state
          gsap.to(".pop-up-text", {
            scale: 1,
            rotation: 0,
            duration: 0.3,
            ease: "power2.out"
          });
        }
      });
    }
  }
);
