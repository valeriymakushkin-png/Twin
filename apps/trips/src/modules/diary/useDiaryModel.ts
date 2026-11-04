import { useLiveQuery } from 'dexie-react-hooks';
import { useEffect, useMemo, useRef, useState } from 'react';
import { todayIso, eachDay } from '../../core/dates';
import { db, type DiaryPage, type ItineraryItem, type Photo, type Trip } from '../../core/db';
import { ru } from '../../core/strings';
import { useLocator } from '../../core/useCities';
import { formatMoney } from '../../data/currencies';
import { summarize } from '../expenses/calc';
import { tripCurrency, useHomeCurrency, useRatesData } from '../expenses/useRates';
import { cityPoint, tripFacts, tripRoute } from '../map/stats';
import { loadWorld, type World } from '../map/world';
import { fingerprint, type DiaryInput } from './generate';
import { loadDiaryFonts } from './render/fonts';
import type { RenderData } from './render/types';

/** Фото страницы: id картинок, которые надо загрузить для отрисовки. */
export function photoIdsOf(pages: DiaryPage[]): string[] {
  const ids = new Set<string>();
  for (const p of pages) {
    if (p.kind === 'cover' && p.photo) [p.photo.source, p.photo.override].forEach((x) => x && ids.add(x));
    if (p.kind === 'day') for (const s of p.photos) [s.source, s.override].forEach((x) => x && ids.add(x));
  }
  return [...ids];
}

/**
 * Загружает фото из базы в память (ImageBitmap) для рисования; уже загруженные не читает повторно. Возвращает новый Map
 * при каждом пополнении — поэтому его можно безопасно использовать как зависимость при перерисовке.
 */
export function useBitmaps(ids: string[]): Map<string, ImageBitmap> {
  const cache = useRef(new Map<string, ImageBitmap>());
  const [map, setMap] = useState<Map<string, ImageBitmap>>(() => new Map());
  const key = ids.slice().sort().join(',');
  useEffect(() => {
    let live = true;
    void (async () => {
      let changed = false;
      for (const id of ids) {
        if (cache.current.has(id)) continue;
        const photo = await db.photos.get(id);
        if (!photo) continue;
        try {
          cache.current.set(id, await createImageBitmap(photo.blob));
          changed = true;
        } catch {
          /* повреждённое фото пропускаем: на странице будет заглушка */
        }
      }
      if (live && (changed || map.size !== ids.filter((i) => cache.current.has(i)).length)) setMap(new Map(ids.flatMap((i) => (cache.current.has(i) ? [[i, cache.current.get(i)!] as const] : []))));
    })();
    return () => {
      live = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);
  return map;
}

export function useFontsReady(): boolean {
  const [ok, setOk] = useState(false);
  useEffect(() => void loadDiaryFonts().then(() => setOk(true), () => setOk(true)), []);
  return ok;
}

export interface DiaryModel {
  input: DiaryInput | null;
  fp: string;
  world: World | null;
  items: ItineraryItem[];
  photos: Photo[];
  /** Всё нужное рисовальщику, кроме картинок (их добавляет вызывающий) */
  base: Omit<RenderData, 'images' | 'seed' | 'watermark'> | null;
}

/** Собирает из базы всё, что нужно дневнику: факты поездки, расходы, маршрут, границы стран. */
export function useDiaryModel(trip: Trip): DiaryModel {
  const items = useLiveQuery(() => db.items.where('tripId').equals(trip.id).toArray(), [trip.id]);
  const photos = useLiveQuery(() => db.photos.where('tripId').equals(trip.id).toArray(), [trip.id]);
  const expenses = useLiveQuery(() => db.expenses.where('tripId').equals(trip.id).toArray(), [trip.id]);
  const home = useHomeCurrency();
  const { rates, ready } = useRatesData();
  const locate = useLocator();
  const [world, setWorld] = useState<World | null>(null);
  useEffect(() => void loadWorld().then(setWorld), []);

  return useMemo<DiaryModel>(() => {
    if (!items || !photos || !expenses || !ready || !locate) return { input: null, fp: '', world, items: items ?? [], photos: photos ?? [], base: null };
    const currency = tripCurrency(trip, home);
    const itemPhotos = photos.filter((p) => p.itemId).sort((a, b) => a.createdAt - b.createdAt);
    const photosByItem = new Map<string, string[]>();
    for (const p of itemPhotos) photosByItem.set(p.itemId!, [...(photosByItem.get(p.itemId!) ?? []), p.id]);
    const days = eachDay(trip.startDate, trip.endDate).length;
    const facts = tripFacts(trip, items, locate, itemPhotos.length, days);

    const s = summarize(expenses, { startDate: trip.startDate, endDate: trip.endDate, currency, budget: trip.budget }, rates, todayIso());
    const byDay = new Map(s.byDay.map((d) => [d.date, d.total]));
    const hasSpend = s.total > 0;
    const spend = hasSpend
      ? {
          currency,
          byDay,
          average: s.averagePerDay,
          topCategory: s.byCategory[0] ? { category: s.byCategory[0].category, label: ru.expenses.categories[s.byCategory[0].category], total: s.byCategory[0].total } : undefined,
          mostExpensiveDay: s.byDay.length > 1 ? s.byDay.reduce((best, d) => (d.total > best.total ? d : best)) : undefined,
        }
      : undefined;
    const money = (a: number, c: string) => formatMoney(a, c);
    const input: DiaryInput = { trip, items, photosByItem, facts, spend, money };

    const cities = trip.cities.flatMap((c) => {
      const point = cityPoint(c.name, trip, locate);
      return point ? [{ name: c.name, point }] : [];
    });
    const sorted = [...items].sort((a, b) => (a.date === b.date ? a.order - b.order : a.date < b.date ? -1 : 1));
    const base: DiaryModel['base'] = {
      trip,
      facts,
      cities,
      path: cities.length ? [] : tripRoute(trip, items, locate),
      world,
      itemsOf: (date) => sorted.filter((i) => i.date === date),
      spend: spend ? { total: money(s.total, currency), perDay: s.averagePerDay !== undefined ? money(s.averagePerDay, currency) : undefined } : undefined,
    };
    return { input, fp: fingerprint(input), world, items, photos, base };
  }, [trip, items, photos, expenses, ready, locate, rates, home, world]);
}
