import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ArrowUpRight, SlidersHorizontal } from 'lucide-react';
import { events, categories } from '../data/events.js';
import { isPast } from '../utils/date.js';
import { EventCard } from '../components/EventCard.jsx';
import { SearchBar } from '../components/SearchBar.jsx';
import { useCardReveal } from '../hooks/useCardReveal.js';
export function Explore() {
  const [params,setParams] = useSearchParams();
  const [query,setQuery] = useState(params.get('q')||'');
  const [category,setCategory] = useState(params.get('category')||'');
  const [city,setCity] = useState(params.get('city')||'');
  const [date,setDate] = useState(params.get('date')||'all');
  const [sort,setSort] = useState(params.get('sort')||'soon');
  const [filtersOpen,setFiltersOpen] = useState(false);
  const cities = useMemo(()=>[...new Set(events.map(e=>e.city))].sort(),[]);
  useEffect(()=>{setQuery(params.get('q')||'');setCategory(params.get('category')||'');setCity(params.get('city')||'');setDate(params.get('date')||'all');setSort(params.get('sort')||'soon')},[params]);
  const results = useMemo(()=>{
    const now=Date.now(),days=date==='week'?7:date==='month'?30:null,until=days?now+days*864e5:null;
    let list=events.filter(e=>!isPast(e));const term=query.trim().toLowerCase();
    if(term)list=list.filter(e=>`${e.title} ${e.description} ${e.city} ${e.venue} ${e.category}`.toLowerCase().includes(term));
    if(category)list=list.filter(e=>e.category===category);if(city)list=list.filter(e=>e.city===city);
    if(until)list=list.filter(e=>new Date(`${e.date}T${e.startTime}:00+05:30`).getTime()<=until);
    return list.sort((a,b)=>sort==='az'?a.title.localeCompare(b.title):(sort==='late'?-1:1)*a.date.localeCompare(b.date));
  },[query,category,city,date,sort]);
  useCardReveal(results.map(e=>e.id).join(','));
  const updateUrl=(next)=>{const p=new URLSearchParams();for(const [key,value] of Object.entries(next))if(value&&!(key==='date'&&value==='all')&&!(key==='sort'&&value==='soon'))p.set(key,value);setParams(p,{replace:true})};
  const changeQuery=(value)=>{setQuery(value);updateUrl({q:value,category,city,date,sort})};
  const clear=()=>{setQuery('');setCategory('');setCity('');setDate('all');setSort('soon');setParams({}, {replace:true})};
  return <div className="page-shell wrap explore-page"><section className="page-intro"><p className="eyebrow">THE MOMENTUM CALENDAR <span className="heading-dot"/></p><h1>Find your next<br/><em>yes.</em></h1><p>A considered collection of events, gatherings and good reasons to get out there.</p></section>
    <section className="explore-controls" aria-label="Event filters"><SearchBar compact value={query} onChange={changeQuery}/><button className="filter-toggle cursor-interactive" type="button" aria-expanded={filtersOpen} onClick={()=>setFiltersOpen(v=>!v)}><SlidersHorizontal size={15}/> Filters <span>{[category,city,date!=='all'?date:''].filter(Boolean).length||''}</span></button><label className="sort-control">Sort by<select value={sort} onChange={e=>{setSort(e.target.value);updateUrl({q:query,category,city,date,sort:e.target.value})}}><option value="soon">Soonest</option><option value="late">Latest</option><option value="az">A to Z</option></select></label></section>
    <section className={`filter-panel ${filtersOpen?'is-open':''}`} aria-label="Filter events"><label>Category<select value={category} onChange={e=>{setCategory(e.target.value);updateUrl({q:query,category:e.target.value,city,date,sort})}}><option value="">All categories</option>{categories.map(x=><option key={x}>{x}</option>)}</select></label><label>When<select value={date} onChange={e=>{setDate(e.target.value);updateUrl({q:query,category,city,date:e.target.value,sort})}}><option value="all">All upcoming</option><option value="week">Next 7 days</option><option value="month">Next 30 days</option></select></label><label>City<select value={city} onChange={e=>{setCity(e.target.value);updateUrl({q:query,category,city:e.target.value,date,sort})}}><option value="">Everywhere</option>{cities.map(x=><option key={x}>{x}</option>)}</select></label><button className="clear-filters cursor-interactive" type="button" onClick={clear}>Clear all <ArrowUpRight size={14}/></button></section>
    <div className="results-header"><p><strong>{results.length.toString().padStart(2,'0')}</strong> events to explore</p><span>Showing upcoming experiences</span></div>
    {results.length?<div className="event-grid explore-grid">{results.map((event,index)=><EventCard key={event.id} event={event} index={index}/>)}</div>:<section className="empty-state"><span className="empty-glyph">✳</span><h2>No events found just yet.</h2><p>Try another search or clear a filter to see more.</p><button className="button button-secondary cursor-interactive" onClick={clear}>Clear filters</button></section>}
  </div>;
}
