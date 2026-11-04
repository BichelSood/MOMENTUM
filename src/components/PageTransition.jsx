import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
export function PageTransition({ children }) {
  const ref = useRef(null); const { pathname } = useLocation();
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = gsap.context(() => gsap.fromTo(ref.current, { autoAlpha: 0.7, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.42, ease: 'power2.out', clearProps: 'all' }), ref);
    return () => ctx.revert();
  }, [pathname]);
  return <div ref={ref} className="route-content">{children}</div>;
}
