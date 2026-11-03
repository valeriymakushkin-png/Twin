import Dexie, { type Table } from 'dexie';

/**
 * Локальная база (IndexedDB) — единственное место, где живут данные пользователя. Сервера нет.
 * Любое изменение структуры — это новая `version(n)` ниже, чтобы данные уже установленных приложений не пропали.
 */

export interface TripCity {
  name: string;
  /** Координаты нужны карте (Этап 3); пока необязательны */
  lat?: number;
  lng?: number;
}

export interface Trip {
  id: string;
  name: string;
  /** ISO 3166-1 alpha-2, например "FR" */
  countryCode: string;
  cities: TripCity[];
  startDate: string;
  endDate: string;
  /** Фото-обложка (запись в таблице photos) */
  coverPhotoId?: string;
  createdAt: number;
  updatedAt: number;
}

export type ItemKind = 'place' | 'event';

export interface ItineraryItem {
  id: string;
  tripId: string;
  /** День поездки, "ГГГГ-ММ-ДД" */
  date: string;
  /** "ЧЧ:ММ", необязательно */
  time?: string;
  kind: ItemKind;
  title: string;
  notes?: string;
  city?: string;
  lat?: number;
  lng?: number;
  /** Позиция внутри дня; единственный источник порядка на экране */
  order: number;
  createdAt: number;
  updatedAt: number;
}

export interface Photo {
  id: string;
  tripId: string;
  /** Пусто у обложки поездки */
  itemId?: string;
  blob: Blob;
  width: number;
  height: number;
  createdAt: number;
}

export type DocKind = 'ticket' | 'booking' | 'insurance' | 'passport' | 'other';

/** Зашифрованный кусок: iv — случайный вектор AES-GCM, ct — шифртекст (с тегом подлинности). */
export interface Sealed {
  iv: Uint8Array;
  ct: Uint8Array;
}

export interface DocRecord {
  id: string;
  tripId: string;
  kind: DocKind;
  createdAt: number;
  /** Зашифрованный JSON { name, mime, size } — название файла тоже может быть личным */
  meta: Sealed;
  /** Зашифрованное содержимое файла */
  data: Sealed;
}

export interface Setting {
  key: string;
  value: unknown;
}

export class VyloDb extends Dexie {
  trips!: Table<Trip, string>;
  items!: Table<ItineraryItem, string>;
  photos!: Table<Photo, string>;
  docs!: Table<DocRecord, string>;
  settings!: Table<Setting, string>;

  constructor(name = 'vylo-trips') {
    super(name);
    this.version(1).stores({
      trips: 'id, startDate, updatedAt',
      items: 'id, tripId, date, [tripId+date]',
      photos: 'id, tripId, itemId',
      docs: 'id, tripId',
      settings: 'key',
    });
  }
}

export const db = new VyloDb();

export async function getSetting<T>(key: string): Promise<T | undefined> {
  return (await db.settings.get(key))?.value as T | undefined;
}
export const setSetting = (key: string, value: unknown) => db.settings.put({ key, value });
