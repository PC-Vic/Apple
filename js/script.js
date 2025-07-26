
/* Hero Right Side Animation */
gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero-right", {
  scrollTrigger: {
    trigger: ".hero-right",
    start: "top 80%",
  },
  opacity: 0,
  x: 100,
  duration: 1,
  ease: "power2.out",
  delay: 0.2
});


/* Pop Up Animation */
gsap.fromTo(".pop-up-text",
  {
    scale: 0,
    opacity: 0,
  },
  {
    scrollTrigger: {
      trigger: ".pop-up-text",
      start: "top 70%",
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


/*Battery Section Animation*/
gsap.from(".battery-entry", {
  opacity: 0,
  y: 50,
  duration: 1.9,
  stagger: 1.1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".battery-content",
    start: "top 35%",
    toggleActions: "play none none none"
  }
});



gsap.from(".battery-image img", {
  scale: 0.8,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".battery-content",
    start: "top 65%"
  }
});

