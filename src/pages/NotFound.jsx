import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
export function NotFound(){return <div className="wrap page-shell"><section className="empty-state not-found-state"><span className="empty-glyph">404</span><p className="eyebrow">THIS PAGE TOOK A DETOUR</p><h1>Nothing here<br/>just yet.</h1><p>Let's get you back to the good stuff.</p><Link className="button button-primary cursor-interactive" to="/explore"><ArrowLeft size={15}/>Explore events <ArrowUpRight size={15}/></Link></section></div>}
