import { useEffect, useMemo, useState } from 'react';
import { searchOnline, useGeoOnline, type GeoHit } from '../../core/geocode';
import { useOnline } from '../../core/hooks';
import { useCityIndex } from '../../core/useCities';
import { searchCities } from '../../data/cities';
import { countryName } from '../../data/countries';

/** Вариант города для выбора: из встроенного списка или из интернета. */
export interface CityCandidate {
  key: string;
  label: string;
  /** «Португалия» или «США, Нью-Гэмпшир» */
  sub: string;
  cc: string;
  lat: number;
  lng: number;
  source: 'list' | 'web';
}

const near = (a: { lat: number; lng: number }, b: { lat: number; lng: number }) => Math.abs(a.lat - b.lat) < 0.15 && Math.abs(a.lng - b.lng) < 0.15;

const fromWeb = (h: GeoHit): CityCandidate => ({ key: `web:${h.countryCode}:${h.lat}:${h.lng}`, label: h.name, sub: [countryName(h.countryCode), h.region].filter(Boolean).join(', '), cc: h.countryCode, lat: h.lat, lng: h.lng, source: 'web' });

/**
 * Варианты городов по введённому тексту: сначала встроенный список (мгновенно, офлайн), затем — если есть сеть, поиск включён
 * и в списке нашлось мало — открытая база через интернет (с задержкой после ввода, чтобы не слать запрос на каждую букву).
 */
export function useCityCandidates(query: string, options: { enabled?: boolean; country?: string; limit?: number; alwaysOnline?: boolean } = {}): { items: CityCandidate[]; searching: boolean; webFailed: boolean } {
  const { enabled = true, country, limit = 6, alwaysOnline = false } = options;
  const index = useCityIndex(enabled);
  const online = useOnline();
  const geoOn = useGeoOnline();
  const q = query.trim();
  const local = useMemo<CityCandidate[]>(
    () => (index && q.length >= 2 ? searchCities(index, q, { country, limit }).map(({ city, label }) => ({ key: `list:${city.cc}:${city.lat}:${city.lng}`, label, sub: countryName(city.cc), cc: city.cc, lat: city.lat, lng: city.lng, source: 'list' as const })) : []),
    [index, q, country, limit],
  );
  const wantWeb = enabled && online && geoOn && q.length >= 3 && !!index && (alwaysOnline || local.length < 3);
  const [web, setWeb] = useState<{ q: string; hits: GeoHit[] } | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (!wantWeb) return;
    let live = true;
    const timer = setTimeout(() => {
      searchOnline(q, { count: limit })
        .then((hits) => live && (setWeb({ q, hits }), setFailed(false)))
        .catch(() => live && setFailed(true));
    }, 450);
    return () => {
      live = false;
      clearTimeout(timer);
    };
  }, [wantWeb, q, limit]);

  const webItems = wantWeb && web?.q === q ? web.hits.map(fromWeb).filter((w) => !local.some((l) => l.cc === w.cc && near(l, w))) : [];
  const searching = wantWeb && web?.q !== q && !failed;
  return { items: [...local, ...webItems].slice(0, limit + 2), searching, webFailed: wantWeb && failed };
}
