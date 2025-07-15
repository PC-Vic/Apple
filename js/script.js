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
