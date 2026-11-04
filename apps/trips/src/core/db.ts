import Dexie, { type Table } from 'dexie';

/**
 * Локальная база (IndexedDB) — единственное место, где живут данные пользователя. Сервера нет.
 * Любое изменение структуры — это новая `version(n)` ниже, чтобы данные уже установленных приложений не пропали.
 */

export interface TripCity {
  name: string;
  /** Координаты нужны карте и километрам; необязательны (город можно ввести просто названием) */
  lat?: number;
  lng?: number;
  /** Страна города (ISO), если выбрана из подсказки; нужна для поездок через несколько стран. Нет — берётся страна поездки */
  cc?: string;
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
  /** Валюта отчётов и бюджета (ISO 4217). Если не задана — берётся из настроек (`homeCurrency`) */
  currency?: string;
  /** Бюджет поездки в валюте `currency` */
  budget?: number;
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

export type ExpenseCategory = 'food' | 'transport' | 'stay' | 'activities' | 'shopping' | 'other';

export interface Expense {
  id: string;
  tripId: string;
  /** День траты, "ГГГГ-ММ-ДД" */
  date: string;
  /** Сумма в валюте, в которой платили */
  amount: number;
  /** ISO 4217, например "EUR" */
  currency: string;
  category: ExpenseCategory;
  note?: string;
  createdAt: number;
  updatedAt: number;
}

export type DiaryStyle = 'minimal' | 'magazine' | 'postcard';

/**
 * Место под фото на странице дневника. `source` — фото из маршрута (оригинал), `override` — фото, которое пользователь
 * выбрал вместо него; `fx`/`fy` — точка кадра (0…1), `zoom` ≥ 1 — приближение при кадрировании.
 */
export interface PhotoSlot {
  source?: string;
  override?: string;
  fx: number;
  fy: number;
  zoom: number;
}

interface PageBase {
  /** Уникален внутри дневника */
  id: string;
  /** Постоянное «имя» страницы: по нему страницы узнаются при пересборке (cover, overview, day:2026-05-01, stats, map, closing) */
  key: string;
  hidden?: boolean;
  /** Пользователь правил текст — при пересборке он сохраняется */
  edited?: boolean;
}

export type DiaryPage =
  | (PageBase & { kind: 'cover'; title: string; subtitle: string; photo: PhotoSlot | null })
  | (PageBase & { kind: 'overview'; text: string })
  | (PageBase & { kind: 'day'; date: string; heading: string; text: string; photos: PhotoSlot[] })
  | (PageBase & { kind: 'stats'; text: string; lines: string[] })
  | (PageBase & { kind: 'map'; text: string })
  | (PageBase & { kind: 'closing'; text: string });

export type DiaryPageKind = DiaryPage['kind'];

/** Дневник поездки (по одному на поездку). Тексты можно править, а страницы — переставлять и скрывать. */
export interface Diary {
  tripId: string;
  style: DiaryStyle;
  /** Зерно случайности: тот же дневник с тем же зерном всегда собирается одинаково */
  seed: number;
  pages: DiaryPage[];
  /** Отпечаток данных поездки на момент сборки — чтобы заметить, что поездка изменилась */
  fingerprint: string;
  createdAt: number;
  updatedAt: number;
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
  expenses!: Table<Expense, string>;
  diaries!: Table<Diary, string>;
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
    // Версия 2 (Этап 2): добавилась таблица расходов. Старые данные не затрагиваются.
    this.version(2).stores({
      expenses: 'id, tripId, date, [tripId+date]',
    });
    // Версия 3 (Этап 3): дневники поездок.
    this.version(3).stores({
      diaries: 'tripId',
    });
  }
}

export const db = new VyloDb();

export async function getSetting<T>(key: string): Promise<T | undefined> {
  return (await db.settings.get(key))?.value as T | undefined;
}
export const setSetting = (key: string, value: unknown) => db.settings.put({ key, value });
