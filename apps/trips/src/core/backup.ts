import { unzip, zip, type Zippable } from 'fflate';
import { decryptWithPassword, encryptWithPassword, isPasswordEncrypted } from './crypto';
import type { DocRecord, ItineraryItem, Photo, Sealed, Setting, Trip, VyloDb } from './db';

/**
 * Резервная копия — один файл `.vylo` (это обычный zip). Внутри:
 *   manifest.json  — что за файл и какой версии
 *   data.json      — поездки, маршрут, настройки и описания фото/документов
 *   photos/<id>    — сами фото (JPEG)
 *   docs/<id>.meta, docs/<id>.data — документы УЖЕ зашифрованы PIN-кодом, в копии они остаются такими же
 * По желанию весь файл дополнительно шифруется паролем. Куда сохранять файл, решает пользователь (никуда не отправляется).
 */

export const BACKUP_VERSION = 1;
export const BACKUP_EXTENSION = '.vylo';

export type BackupErrorCode = 'password-required' | 'wrong-password' | 'invalid' | 'newer-version';
export class BackupError extends Error {
  constructor(public code: BackupErrorCode) {
    super(code);
  }
}

export interface BackupSummary {
  trips: number;
  items: number;
  photos: number;
  docs: number;
}

// --- JSON с бинарными полями ----------------------------------------------------------------------------------------

const toB64 = (u: Uint8Array) => {
  let s = '';
  for (let i = 0; i < u.length; i += 0x8000) s += String.fromCharCode(...u.subarray(i, i + 0x8000));
  return btoa(s);
};
const fromB64 = (s: string) => Uint8Array.from(atob(s), (c) => c.charCodeAt(0));

const replacer = (_: string, v: unknown) => (v instanceof Uint8Array ? { __u8: toB64(v) } : v);
const reviver = (_: string, v: unknown) => (v && typeof v === 'object' && '__u8' in v ? fromB64((v as { __u8: string }).__u8) : v);

// --- Упаковка -------------------------------------------------------------------------------------------------------

const bytesOf = async (b: Blob) => new Uint8Array(await b.arrayBuffer());
const text = (s: string) => new TextEncoder().encode(s);

const zipAsync = (files: Zippable) => new Promise<Uint8Array>((res, rej) => zip(files, (e, d) => (e ? rej(e) : res(d))));
const unzipAsync = (data: Uint8Array) => new Promise<Record<string, Uint8Array>>((res, rej) => unzip(data, (e, d) => (e ? rej(e) : res(d))));

export async function createBackup(db: VyloDb, options: { password?: string; iterations?: number } = {}): Promise<Uint8Array> {
  const [trips, items, photos, docs, settings] = await Promise.all([db.trips.toArray(), db.items.toArray(), db.photos.toArray(), db.docs.toArray(), db.settings.toArray()]);

  const files: Zippable = {};
  for (const p of photos) files[`photos/${p.id}`] = [await bytesOf(p.blob), { level: 0 }]; // JPEG уже сжат
  for (const d of docs) {
    files[`docs/${d.id}.meta`] = [d.meta.ct, { level: 0 }];
    files[`docs/${d.id}.data`] = [d.data.ct, { level: 0 }];
  }
  const data = {
    trips,
    items,
    photos: photos.map(({ blob, ...rest }) => ({ ...rest, mime: blob.type || 'image/jpeg' })),
    docs: docs.map((d) => ({ id: d.id, tripId: d.tripId, kind: d.kind, createdAt: d.createdAt, metaIv: d.meta.iv, dataIv: d.data.iv })),
    settings,
  };
  files['data.json'] = text(JSON.stringify(data, replacer));
  files['manifest.json'] = text(JSON.stringify({ app: 'vylo-trips', version: BACKUP_VERSION, createdAt: Date.now(), counts: { trips: trips.length, items: items.length, photos: photos.length, docs: docs.length } }));

  const archive = await zipAsync(files);
  return options.password ? encryptWithPassword(archive, options.password, options.iterations) : archive;
}

// --- Восстановление -------------------------------------------------------------------------------------------------

export const needsPassword = (bytes: Uint8Array) => isPasswordEncrypted(bytes);

type PhotoMeta = Omit<Photo, 'blob'> & { mime: string };
type DocMeta = { id: string; tripId: string; kind: DocRecord['kind']; createdAt: number; metaIv: Uint8Array; dataIv: Uint8Array };

const isObj = (v: unknown): v is Record<string, unknown> => !!v && typeof v === 'object' && !Array.isArray(v);
const list = (v: unknown): Record<string, unknown>[] => {
  if (!Array.isArray(v) || !v.every((x) => isObj(x) && typeof x.id === 'string')) throw new BackupError('invalid');
  return v as Record<string, unknown>[];
};

/**
 * Заменяет ВСЕ данные на устройстве содержимым копии. Сначала файл полностью читается и проверяется, и только потом
 * в одной транзакции старое удаляется, а новое записывается — при ошибке прежние данные останутся нетронутыми.
 */
export async function restoreBackup(db: VyloDb, input: Uint8Array, password?: string): Promise<BackupSummary> {
  let bytes = input;
  if (isPasswordEncrypted(bytes)) {
    if (!password) throw new BackupError('password-required');
    const plain = await decryptWithPassword(bytes, password);
    if (!plain) throw new BackupError('wrong-password');
    bytes = plain;
  }

  let entries: Record<string, Uint8Array>;
  try {
    entries = await unzipAsync(bytes);
  } catch {
    throw new BackupError('invalid');
  }
  const manifestRaw = entries['manifest.json'];
  const dataRaw = entries['data.json'];
  if (!manifestRaw || !dataRaw) throw new BackupError('invalid');

  let manifest: { app?: string; version?: number };
  let data: Record<string, unknown>;
  try {
    manifest = JSON.parse(new TextDecoder().decode(manifestRaw));
    data = JSON.parse(new TextDecoder().decode(dataRaw), reviver);
  } catch {
    throw new BackupError('invalid');
  }
  if (manifest.app !== 'vylo-trips') throw new BackupError('invalid');
  if (typeof manifest.version !== 'number' || manifest.version < 1) throw new BackupError('invalid');
  if (manifest.version > BACKUP_VERSION) throw new BackupError('newer-version');

  const trips = list(data.trips) as unknown as Trip[];
  const items = list(data.items) as unknown as ItineraryItem[];
  const settings = (Array.isArray(data.settings) ? data.settings : []) as Setting[];

  const photos: Photo[] = (list(data.photos) as unknown as PhotoMeta[]).map(({ mime, ...rest }) => {
    const raw = entries[`photos/${rest.id}`];
    if (!raw) throw new BackupError('invalid');
    return { ...rest, blob: new Blob([raw as BlobPart], { type: mime }) };
  });
  const docs: DocRecord[] = (list(data.docs) as unknown as DocMeta[]).map((d) => {
    const meta = entries[`docs/${d.id}.meta`];
    const body = entries[`docs/${d.id}.data`];
    if (!meta || !body) throw new BackupError('invalid');
    const sealed = (iv: Uint8Array, ct: Uint8Array): Sealed => ({ iv, ct });
    return { id: d.id, tripId: d.tripId, kind: d.kind, createdAt: d.createdAt, meta: sealed(d.metaIv, meta), data: sealed(d.dataIv, body) };
  });

  await db.transaction('rw', [db.trips, db.items, db.photos, db.docs, db.settings], async () => {
    await Promise.all([db.trips.clear(), db.items.clear(), db.photos.clear(), db.docs.clear(), db.settings.clear()]);
    await db.trips.bulkAdd(trips);
    await db.items.bulkAdd(items);
    await db.photos.bulkAdd(photos);
    await db.docs.bulkAdd(docs);
    await db.settings.bulkAdd(settings);
  });
  return { trips: trips.length, items: items.length, photos: photos.length, docs: docs.length };
}
