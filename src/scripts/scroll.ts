import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
  duration: 1.9,
  smoothWheel: true,
  touchMultiplier: 1.5,
});

// Sync Lenis dengan ScrollTrigger
lenis.on("scroll", ScrollTrigger.update);

// GSAP mengontrol RAF Lenis
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

// Reset scroll ketika pindah halaman Astro
document.addEventListener("astro:after-swap", () => {
  lenis.scrollTo(0, {
    immediate: true,
  });

  ScrollTrigger.refresh();
});

// Refresh ScrollTrigger setelah halaman selesai dimuat
document.addEventListener("astro:page-load", () => {
  ScrollTrigger.refresh();
});
