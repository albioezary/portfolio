import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ========================================
   DEFAULTS
======================================== */

const EASE = "expo.out";
const START = "top 75%";

/* ========================================
   HERO
======================================== */

export function initHomeAnimations() {
  const tl = gsap.timeline();

  tl.fromTo(
    ".bigname",
    {
      clipPath: "inset(100% 0 0 0)",
      opacity: 0.85,
      filter: "blur(1px)",
    },
    {
      clipPath: "inset(0% 0 0 0)",
      opacity: 1,
      filter: "blur(0px)",
      duration: 1.4,
      ease: EASE,
    }
  ).fromTo(
    ".role p",
    {
      y: 12,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      stagger: 0.09,
      duration: 0.5,
      ease: "power2.out",
    },
    "-=1.2"
  );


/* ========================================
   ABOUT
======================================== */

const aboutTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".aboutme",
    start: START,
    once: true,
  },
});

aboutTl

  // Heading
  .fromTo(
    ".about-left h2",
    {
      clipPath: "inset(100% 0 0 0)",
      opacity: 0.85,
      filter: "blur(1px)",
    },
    {
      clipPath: "inset(0% 0 0 0)",
      opacity: 1,
      filter: "blur(0px)",
      duration: 1.2,
      ease: EASE,
    }
  )

  // Intro
  .fromTo(
    ".about-intro",
    {
      y: 18,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.7,
      ease: "power2.out",
    },
    "-=0.7"
  )

  // CTA
  .fromTo(
    ".about-cta",
    {
      y: 12,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
    },
    "-=0.35"
  )

  // Right blocks
  .fromTo(
    ".about-block",
    {
      y: 20,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      stagger: 0.12,
      duration: 0.8,
      ease: "power2.out",
    },
    "-=0.9"
  );
/* ========================================
   SELECTED WORKS
======================================== */

gsap.fromTo(
  ".works-header span",
  {
    clipPath: "inset(100% 0 0 0)",
  },
  {
    clipPath: "inset(0% 0 0 0)",
    duration: 0.8,
    ease: EASE,
    scrollTrigger: {
      trigger: ".works",
      start: START,
      once: true,
    },
  }
);

gsap.fromTo(
  ".work-item",
  {
    clipPath: "inset(100% 0 0 0)",
  },
  {
    clipPath: "inset(0% 0 0 0)",
    duration: 1,
    stagger: 0.12,
    ease: EASE,
    scrollTrigger: {
      trigger: ".works-list",
      start: "top 75%",
      once: true,
    },
  }
);

gsap.fromTo(
  ".work-bg",
  {
    scale: 1.08,
  },
  {
    scale: 1,
    duration: 1.4,
    stagger: 0.12,
    ease: EASE,
    scrollTrigger: {
      trigger: ".works-list",
      start: "top 75%",
      once: true,
    },
  }
);

gsap.fromTo(
  ".works-btn",
  {
    y: 12,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 0.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".works-footer",
      start: "top 90%",
      once: true,
    },
  }
);


/* ========================================
   CONTACT
======================================== */

gsap.fromTo(
  ".contact-title",
  {
    clipPath: "inset(100% 0 0 0)",
    opacity: 0.85,
    filter: "blur(1px)",
  },
  {
    clipPath: "inset(0% 0 0 0)",
    opacity: 1,
    filter: "blur(0px)",
    duration: 1.2,
    ease: EASE,
    scrollTrigger: {
      trigger: ".contact",
      start: START,
      once: true,
    },
  }
);

gsap.fromTo(
  ".contact-info > div",
  {
    y: 20,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    stagger: 0.12,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".contact-grid",
      start: START,
      once: true,
    },
  }
);

gsap.fromTo(
  ".contact-cta h3",
  {
    clipPath: "inset(100% 0 0 0)",
    opacity: 0.85,
    filter: "blur(1px)",
  },
  {
    clipPath: "inset(0% 0 0 0)",
    opacity: 1,
    filter: "blur(0px)",
    duration: 1,
    ease: EASE,
    scrollTrigger: {
      trigger: ".contact-grid",
      start: START,
      once: true,
    },
  }
);

gsap.fromTo(
  ".contact-email",
  {
    y: 12,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 0.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".contact-grid",
      start: START,
      once: true,
    },
  }
);

gsap.fromTo(
  ".contact-socials a",
  {
    y: 12,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    stagger: 0.08,
    duration: 0.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".contact-socials",
      start: START,
      once: true,
    },
  }
);

}