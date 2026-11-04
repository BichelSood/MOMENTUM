import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
export function Footer() {
  return <footer className="site-footer"><div className="wrap footer-top flex justify-between"><div><Link className="wordmark" to="/">MOMENTUM<span>.</span></Link><p>Find events worth showing up for.</p></div><div className="footer-links"><div><small>DISCOVER</small><Link to="/explore">All events</Link><Link to="/my-events">My Events</Link></div><div><small>THE DEMO</small><a href="#top">Back to top <ArrowUpRight size={14}/></a><span>Fictional sample listings</span></div></div></div><div className="wrap footer-bottom flex justify-between"><span>© 2026 MOMENTUM</span><span>Make every moment count.</span><span>Local browser demo</span></div></footer>;
}
