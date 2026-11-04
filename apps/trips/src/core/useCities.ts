import { useEffect, useMemo, useState } from 'react';
import { findCity, loadCities, type CityIndex } from '../data/cities';
import type { CityLocator } from '../modules/map/stats';

/** Загружает встроенный список городов, когда он нужен (файл большой — не тянем его на каждом экране). */
export function useCityIndex(enabled = true): CityIndex | null {
  const [index, setIndex] = useState<CityIndex | null>(null);
  useEffect(() => {
    if (!enabled) return;
    let live = true;
    void loadCities().then((i) => live && setIndex(i));
    return () => {
      live = false;
    };
  }, [enabled]);
  return index;
}

/** Определитель координат города по названию и стране; `null`, пока список городов не загрузился. */
export function useLocator(enabled = true): CityLocator | null {
  const index = useCityIndex(enabled);
  return useMemo<CityLocator | null>(() => {
    if (!index) return null;
    const cache = new Map<string, { lat: number; lng: number } | undefined>();
    return (name, country) => {
      const key = `${country}:${name}`;
      if (!cache.has(key)) {
        const c = findCity(index, name, country);
        cache.set(key, c ? { lat: c.lat, lng: c.lng } : undefined);
      }
      return cache.get(key);
    };
  }, [index]);
}
