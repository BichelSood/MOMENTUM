import { useEffect, useRef } from 'react';
import gsap from 'gsap';
export function CustomCursor() {
  const cursorRef = useRef(null); const labelRef = useRef(null);
  useEffect(() => {
    const fine = matchMedia('(pointer: fine) and (min-width: 800px)').matches, reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduced) return undefined;
    const cursor = cursorRef.current; if (!cursor) return undefined;
    document.documentElement.dataset.cursorActive = 'true';
    const moveX = gsap.quickTo(cursor, 'x', { duration: 0.16, ease: 'power3.out' });
    const moveY = gsap.quickTo(cursor, 'y', { duration: 0.16, ease: 'power3.out' });
    const move = (event) => {
      cursor.classList.add('is-visible');
      moveX(event.clientX); moveY(event.clientY);
      const target = event.target.closest('a,button,[role="button"],input,textarea,select,[contenteditable="true"]');
      const textTarget = target && /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName) || target?.isContentEditable;
      cursor.classList.toggle('is-interactive', Boolean(target && !textTarget));
      cursor.classList.toggle('is-text', Boolean(textTarget));
      const label = target?.closest('[data-cursor-label]')?.dataset.cursorLabel;
      labelRef.current.textContent = label || '';
      cursor.classList.toggle('has-label', Boolean(label && !textTarget));
    };
    window.addEventListener('pointermove', move, { passive: true });
    return () => { window.removeEventListener('pointermove', move); delete document.documentElement.dataset.cursorActive; gsap.set(cursor, { clearProps: 'all' }); };
  }, []);
  return <div ref={cursorRef} className="custom-cursor" aria-hidden="true"><span className="cursor-dot"/><span className="cursor-ring"/><span ref={labelRef} className="cursor-label"/></div>;
}
