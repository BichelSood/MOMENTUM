import { ArrowUpRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { eventDate } from '../utils/date.js';
export function EventCard({ event, index = 0 }) {
  return <article className="event-card reveal-card" data-cursor-label="VIEW" style={{ '--card-index': index }}>
    <Link to={`/event/${event.id}`} className="card-visual cursor-interactive" aria-label={`View ${event.title}`}>
      <img src={event.image} alt={event.imageAlt} loading="lazy" onError={(e) => { e.currentTarget.hidden = true; e.currentTarget.parentElement.classList.add('image-fallback'); }} />
      <span className="card-category">{event.category}</span><span className="card-open"><ArrowUpRight size={17}/></span>
    </Link>
    <div className="card-content"><div className="card-meta flex items-center gap-2"><span>{eventDate(event, { month: 'short', day: 'numeric' })}</span><i>·</i><span><MapPin size={12}/>{event.city}</span></div><h3><Link to={`/event/${event.id}`} className="cursor-interactive">{event.title}</Link></h3><p>{event.shortDescription}</p><Link className="card-link cursor-interactive" to={`/event/${event.id}`}>Explore event <ArrowUpRight size={14}/></Link></div>
  </article>;
}
