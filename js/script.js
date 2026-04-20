
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
  delay: 0.5
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
  duration: 1,
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


/* Mobile Nav Overlay */
const navHamburger  = document.querySelector('.nav-hamburger');
const navOverlay    = document.querySelector('.nav-overlay');
const navClose      = document.querySelector('.nav-close');
const overlayLinks  = document.querySelectorAll('.nav-overlay-links a');

function openNav() {
  navOverlay.classList.add('is-open');
  navOverlay.setAttribute('aria-hidden', 'false');
  navHamburger.setAttribute('aria-expanded', 'true');

  gsap.fromTo(navOverlay,
    { opacity: 0 },
    { opacity: 1, duration: 0.45, ease: 'power2.inOut' }
  );

  gsap.fromTo(overlayLinks,
    { opacity: 0, y: 28 },
    { opacity: 1, y: 0, duration: 0.5, stagger: 0.09, ease: 'power2.out', delay: 0.2 }
  );
}

function closeNav() {
  navHamburger.setAttribute('aria-expanded', 'false');

  gsap.to(overlayLinks, {
    opacity: 0, y: -16, duration: 0.2, stagger: 0.04, ease: 'power2.in'
  });

  gsap.to(navOverlay, {
    opacity: 0, duration: 0.38, delay: 0.1, ease: 'power2.inOut',
    onComplete: () => {
      navOverlay.classList.remove('is-open');
      navOverlay.setAttribute('aria-hidden', 'true');
    }
  });
}

navHamburger.addEventListener('click', openNav);
navClose.addEventListener('click', closeNav);
overlayLinks.forEach(link => link.addEventListener('click', closeNav));

