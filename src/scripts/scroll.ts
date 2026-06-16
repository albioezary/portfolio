import Lenis from "lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function initLenis() {
  const lenis = new Lenis({
    duration: 1.9,
    smoothWheel: true,
    touchMultiplier: 1.5,
  });

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  document.addEventListener("astro:after-swap", () => {
    lenis.scrollTo(0, { immediate: true });
    ScrollTrigger.refresh();
  });
}

// penting: jalanin di semua lifecycle Astro
if (typeof window !== "undefined") {
  initLenis();

  document.addEventListener("astro:page-load", () => {
    ScrollTrigger.refresh();
  });
}
