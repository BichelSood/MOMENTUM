import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle.jsx';
export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => setOpen(false), [location.pathname]);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 16);
    update(); window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
  return <header id="top" className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
    <div className="nav-inner wrap flex items-center justify-between">
      <Link className="wordmark cursor-interactive" to="/" aria-label="MOMENTUM home">MOMENTUM<span>.</span></Link>
      <nav className={`primary-nav ${open ? 'is-open' : ''}`} aria-label="Main navigation">
        <NavLink to="/" end className={({ isActive }) => `nav-link cursor-interactive ${isActive ? 'active' : ''}`}>Home</NavLink>
        <NavLink to="/explore" className={({ isActive }) => `nav-link cursor-interactive ${isActive ? 'active' : ''}`}>Explore</NavLink>
        <NavLink to="/my-events" className={({ isActive }) => `nav-link cursor-interactive ${isActive ? 'active' : ''}`}>My Events</NavLink>
      </nav>
      <div className="nav-actions flex items-center gap-2"><ThemeToggle /><button className="menu-button" type="button" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen((v) => !v)}>{open ? <X size={19} /> : <Menu size={19} />}</button></div>
      <nav id="mobile-navigation" className={`mobile-nav ${open ? 'is-open' : ''}`} aria-label="Mobile navigation" aria-hidden={!open}>
        <NavLink to="/" end onClick={() => setOpen(false)}>Home <span>01</span></NavLink><NavLink to="/explore" onClick={() => setOpen(false)}>Explore <span>02</span></NavLink><NavLink to="/my-events" onClick={() => setOpen(false)}>My Events <span>03</span></NavLink>
        <p>Make room for what moves you.</p>
      </nav>
    </div>
  </header>;
}
