import { useCallback, useState } from 'react';
export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try { const stored = localStorage.getItem(key); return stored === null ? initialValue : JSON.parse(stored); }
    catch { return initialValue; }
  });
  const update = useCallback((next) => {
    setValue((previous) => {
      const resolved = typeof next === 'function' ? next(previous) : next;
      try { localStorage.setItem(key, JSON.stringify(resolved)); } catch { /* Keep the in-memory state. */ }
      return resolved;
    });
  }, [key]);
  return [value, update];
}
