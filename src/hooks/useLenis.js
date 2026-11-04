import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
let activeLenis = null;
export const getLenis = () => activeLenis;
export function useLenis() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const finePointer = window.matchMedia('(pointer: fine) and (min-width: 800px)').matches;
    if (reduced || !finePointer) return undefined;
    let lenis; let ticker; let disposed = false;
    import('lenis').then(({ default: Lenis }) => {
      if (disposed) return;
      lenis = new Lenis({ duration: 1.05, smoothWheel: true, syncTouch: false, anchors: true, wheelMultiplier: 0.9 });
      activeLenis = lenis;
      lenis.on('scroll', ScrollTrigger.update);
      ticker = (time) => lenis.raf(time * 1000);
      gsap.ticker.add(ticker);
    }).catch(() => { /* Native browser scrolling remains available. */ });
    return () => {
      disposed = true;
      if (ticker) gsap.ticker.remove(ticker);
      if (lenis) { lenis.off('scroll', ScrollTrigger.update); lenis.destroy(); }
      if (activeLenis === lenis) activeLenis = null;
    };
  }, []);
}
