import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ========================================
   DEFAULTS
======================================== */

const EASE = "expo.out";
const START = "top 75%";

/* ========================================
   HERO / ABOUT / EXPERIENCE / CAPABILITIES
======================================== */

export function initHomeAnimations() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".about-section",
      start: "top 75%",
      once: true,
    },
  });

  tl.fromTo(
    ".statement-title",
    {
      clipPath: "inset(100% 0 0 0)",
      y: 20,
    },
    {
      clipPath: "inset(0% 0 0 0)",
      y: 0,
      duration: 1,
      ease: "expo.out",
    },
  ).fromTo(
    ".about-text",
    {
      clipPath: "inset(0 0 100% 0)",
      y: 50,
      opacity: 0,
      filter: "blur(2px)",
    },
    {
      clipPath: "inset(0 0 0% 0)",
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      duration: 0.9,
      ease: EASE,
    },
    "-=0.5",
  );

  const capTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".capabilities-section",
      start: "top 85%",
      once: true,
    },
  });

  capTl
    .fromTo(
      ".capabilities-label p",
      {
        clipPath: "inset(100% 0 0 0)",
      },
      {
        clipPath: "inset(0% 0 0 0)",
        duration: 1.2,
        ease: EASE,
      },
    )
    .fromTo(
      ".capabilities-list p",
      {
        clipPath: "inset(100% 0 0 0)",
      },
      {
        clipPath: "inset(0% 0 0 0)",
        stagger: 0.09,
        duration: 0.8,
        ease: EASE,
      },
      "-=0.9",
    );

  gsap.utils.toArray<HTMLElement>(".experience-item").forEach((item) => {
    gsap.fromTo(
      item,
      {
        clipPath: "inset(100% 0 0 0)",
      },
      {
        clipPath: "inset(0% 0 0 0)",
        duration: 1.2,
        ease: EASE,

        scrollTrigger: {
          trigger: item,
          start: "top 55%",
          once: true,
        },
      },
    );
  });
}
