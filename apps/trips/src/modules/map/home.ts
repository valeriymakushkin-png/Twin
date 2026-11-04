import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '../../core/db';

/** Домашний город пользователя — нужен только для подсчёта километров (дорога из дома и обратно). Хранится на устройстве. */
export interface HomeCity {
  name: string;
  countryCode: string;
  lat: number;
  lng: number;
}

const KEY = 'homeCity';

/** `undefined` — ещё читается из базы, `null` — не задан. */
export function useHomeCity(): HomeCity | null | undefined {
  return useLiveQuery(async () => ((await db.settings.get(KEY))?.value as HomeCity | undefined) ?? null, []);
}

export const setHomeCity = (city: HomeCity | null): Promise<unknown> => (city ? db.settings.put({ key: KEY, value: city }) : db.settings.delete(KEY));
