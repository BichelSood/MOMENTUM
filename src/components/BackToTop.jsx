import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { getLenis } from '../hooks/useLenis.js';
export function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { const update = () => setVisible(scrollY > 480); window.addEventListener('scroll', update, { passive: true }); return () => window.removeEventListener('scroll', update); }, []);
  const goTop = () => { if (getLenis()) getLenis().scrollTo(0); else window.scrollTo({ top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' }); };
  return <button className={`back-to-top cursor-interactive ${visible ? 'visible' : ''}`} type="button" onClick={goTop} aria-label="Back to top" tabIndex={visible ? 0 : -1}><ArrowUp size={17}/></button>;
}
