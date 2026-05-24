'use client';

import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const KEY = 'pyhp_saved_venues';

type FavCtx = {
  ids: Set<string>;
  toggle: (id: string) => void;
  isSaved: (id: string) => boolean;
};

const FavContext = createContext<FavCtx>({
  ids: new Set(),
  toggle: () => {},
  isSaved: () => false,
});

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [ids, setIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    try {
      const stored = localStorage.getItem(KEY);
      if (stored) setIds(new Set(JSON.parse(stored)));
    } catch {}
  }, []);

  const toggle = useCallback((id: string) => {
    setIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      try {
        localStorage.setItem(KEY, JSON.stringify(Array.from(next)));
      } catch {}
      return next;
    });
  }, []);

  const isSaved = useCallback((id: string) => ids.has(id), [ids]);

  return (
    <FavContext.Provider value={{ ids, toggle, isSaved }}>
      {children}
    </FavContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavContext);
}
