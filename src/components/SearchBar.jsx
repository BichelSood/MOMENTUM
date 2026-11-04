import { ArrowUpRight, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
export function SearchBar({ compact = false, value, onChange }) {
  const [localQuery, setLocalQuery] = useState(''); const navigate = useNavigate();
  const query = value ?? localQuery;
  const change = (next) => { if (onChange) onChange(next); else setLocalQuery(next); };
  const submit = (e) => { e.preventDefault(); if (onChange) return; const params = new URLSearchParams(); if (query.trim()) params.set('q', query.trim()); navigate(`/explore${params.size ? `?${params}` : ''}`); };
  return <form className={`search-bar flex items-center gap-3 ${compact ? 'is-compact' : ''}`} onSubmit={submit}><Search size={19}/><label className="sr-only" htmlFor={`event-search-${compact ? 'compact' : 'home'}`}>Search events and places</label><input id={`event-search-${compact ? 'compact' : 'home'}`} type="search" placeholder="Try ‘live music’ or ‘Bengaluru’" value={query} onChange={(e) => change(e.target.value)} /><button className="button button-primary cursor-interactive" type="submit">Explore <ArrowUpRight size={15}/></button></form>;
}
