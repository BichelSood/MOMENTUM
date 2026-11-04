import { useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react';
import { categories, featuredEvent, upcomingEvents } from '../data/events.js';
import { eventDate } from '../utils/date.js';
import { EventCard } from '../components/EventCard.jsx';
import { CategoryCard } from '../components/CategoryCard.jsx';
import { SearchBar } from '../components/SearchBar.jsx';
import { useCardReveal } from '../hooks/useCardReveal.js';
gsap.registerPlugin(ScrollTrigger);
export function Home() {
  useCardReveal('home');
  const featured = featuredEvent;
  useLayoutEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-copy > *', { y: 22, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.75, stagger: 0.09, ease: 'power3.out', clearProps: 'all' });
      gsap.fromTo('.hero-visual', { clipPath: 'inset(0 0 100% 0 round 4px 92px 4px 4px)' }, { clipPath: 'inset(0 0 0% 0 round 4px 92px 4px 4px)', duration: 1.1, delay: 0.2, ease: 'power3.inOut', clearProps: 'clipPath' });
      if (matchMedia('(pointer: fine) and (min-width: 800px)').matches) gsap.to('.hero-photo', { yPercent: 7, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 0.6 } });
    });
    return () => ctx.revert();
  }, []);
  return <div className="page-shell home-page">
    <section className="hero wrap">
      <div className="hero-copy"><p className="eyebrow"><span className="eyebrow-mark"/> DISCOVER WHAT'S HAPPENING</p><h1>Make every<br/><em>moment</em> count.</h1><p className="hero-description">Find events worth showing up for — from big ideas and new connections to unforgettable nights.</p><div className="hero-actions flex flex-wrap items-center gap-2"><Link className="button button-primary cursor-interactive" to="/explore">Explore events <ArrowUpRight size={16}/></Link><a className="button button-quiet cursor-interactive" href="#featured">See what's featured <ArrowDown size={14}/></a></div><div className="hero-footnote flex items-center gap-2"><Sparkles size={15}/><span>Thoughtful experiences. Right around the corner.</span></div></div>
      <div className="hero-visual"><div className="hero-photo" style={{ backgroundImage: `url(${featured.image})` }} role="img" aria-label={featured.imageAlt}/><div className="hero-image-shade"/><div className="hero-stamp">M / 26 <span>•</span> INDIA</div><div className="hero-event-card"><div className="hero-event-kicker"><span className="live-dot"/> THIS WEEK'S PICK <span className="hero-rule"/></div><h2>{featured.title}</h2><p>{featured.city} <i>·</i> {featured.category}</p><Link to={`/event/${featured.id}`} className="hero-card-link cursor-interactive">Explore the event <ArrowUpRight size={15}/></Link></div><span className="hero-index">01 <i>/</i> 15</span></div>
    </section>
    <section className="search-section wrap"><div><p className="eyebrow">YOUR NEXT GOOD PLAN</p><h2>Find your kind of moment.</h2></div><SearchBar compact/></section>
    <section id="featured" className="section-block wrap"><div className="section-heading"><div><p className="eyebrow">IN THE SPOTLIGHT <span className="heading-dot"/></p><h2>Worth putting on<br className="desktop-break"/> your calendar.</h2></div><Link className="underlined-link cursor-interactive" to={`/event/${featured.id}`}>Meet the event <ArrowUpRight size={15}/></Link></div><Link className="featured-panel cursor-interactive" to={`/event/${featured.id}`} style={{ '--feature-image': `url("${featured.image}")` }}><div className="feature-panel-copy"><span className="pill-label">FEATURED · {featured.category}</span><h3>{featured.title}</h3><p>{featured.shortDescription}</p><span className="feature-meta">{featured.city} <i>·</i> {eventDate(featured,{month:'short',day:'numeric',year:'numeric'})} <i>·</i> View event <ArrowUpRight size={14}/></span></div><div className="feature-corner">MOMENTUM<br/>COMMUNITY <span>↗</span></div></Link></section>
    <section className="section-block wrap category-section"><div className="section-heading"><div><p className="eyebrow">FOLLOW YOUR CURIOSITY <span className="heading-dot"/></p><h2>Browse by mood.</h2></div><p className="section-aside">A good day can begin<br/>with one small discovery.</p></div><div className="category-grid">{categories.map((category,index)=><CategoryCard key={category} category={category} index={index}/>)}</div></section>
    <section className="section-block wrap upcoming-section"><div className="section-heading"><div><p className="eyebrow">COMING UP <span className="heading-dot"/></p><h2>Good things on<br className="desktop-break"/> the horizon.</h2></div><Link className="underlined-link cursor-interactive" to="/explore">All events <ArrowUpRight size={15}/></Link></div><div className="event-grid">{upcomingEvents().slice(0,6).map((event,index)=><EventCard key={event.id} event={event} index={index}/>)}</div></section>
    <section className="benefits-section"><div className="wrap benefits-layout"><div className="benefits-title"><p className="eyebrow">A LITTLE MORE MOMENTUM <span className="heading-dot"/></p><h2>Make room for<br/><em>something memorable.</em></h2><span className="benefits-glyph">M<span>.</span></span></div><div className="benefit-list"><article><span>01</span><div><h3>Find your people</h3><p>Explore a considered mix of ideas, culture, sport and sound.</p></div><ArrowUpRight size={17}/></article><article><span>02</span><div><h3>Know before you go</h3><p>Get the details, schedule and venue before you commit.</p></div><ArrowUpRight size={17}/></article><article><span>03</span><div><h3>Keep it all together</h3><p>Your local demo registrations stay together in My Events.</p></div><ArrowUpRight size={17}/></article></div></div></section>
    <section className="closing-cta wrap"><div className="closing-orbit" aria-hidden="true">✳</div><p className="eyebrow">A GOOD PLAN STARTS HERE</p><h2>Make a little space<br/>for <em>what's next.</em></h2><Link className="button button-primary cursor-interactive" to="/explore">Find your next event <ArrowUpRight size={16}/></Link><span className="closing-side-note">MOMENTUM / 2026</span></section>
  </div>;
}
