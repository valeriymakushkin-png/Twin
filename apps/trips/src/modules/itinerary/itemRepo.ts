import { db, type ItemKind, type ItineraryItem, type Photo } from '../../core/db';
import { newId } from '../../core/id';
import { downscaleImage } from '../../core/images';
import { groupByDate, insertIndexForTime, planInsert, planMove, planSortByTime, type OrderUpdate } from './ordering';

export interface ItemInput {
  date: string;
  time?: string;
  kind: ItemKind;
  title: string;
  notes?: string;
  city?: string;
  lat?: number;
  lng?: number;
}

const applyUpdates = (updates: OrderUpdate[], now = Date.now()) =>
  Promise.all(updates.map((u) => db.items.update(u.id, { date: u.date, order: u.order, updatedAt: now })));

/** Новая запись встаёт в нужный день: со временем — по времени, без времени — в конец дня. */
export async function addItem(tripId: string, input: ItemInput): Promise<string> {
  const id = newId();
  await db.transaction('rw', db.items, async () => {
    const existing = await db.items.where('tripId').equals(tripId).toArray();
    const { order, updates } = planInsert(existing, id, input.date, input.time);
    await applyUpdates(updates);
    const now = Date.now();
    await db.items.add({ id, tripId, ...input, order, createdAt: now, updatedAt: now });
  });
  return id;
}

/** Меняет поля записи. Если сменились день или время — запись переставляется на подходящее место. */
export async function updateItem(id: string, input: ItemInput): Promise<void> {
  await db.transaction('rw', db.items, async () => {
    const current = await db.items.get(id);
    if (!current) return;
    const siblings = await db.items.where('tripId').equals(current.tripId).toArray();
    const now = Date.now();
    await db.items.update(id, { ...input, time: input.time || undefined, notes: input.notes || undefined, city: input.city || undefined, updatedAt: now });
    const dayChanged = input.date !== current.date;
    const timeChanged = (input.time || undefined) !== current.time && !!input.time;
    if (dayChanged || timeChanged) {
      const others = siblings.filter((s) => s.id !== id);
      const day = groupByDate(others).get(input.date) ?? [];
      await applyUpdates(planMove(siblings, id, input.date, insertIndexForTime(day, input.time || undefined)), now);
    }
  });
}

/** Перетаскивание: запись `id` теперь в день `toDate` на позиции `toIndex`. */
export async function moveItem(tripId: string, id: string, toDate: string, toIndex: number): Promise<void> {
  await db.transaction('rw', db.items, async () => {
    const items = await db.items.where('tripId').equals(tripId).toArray();
    await applyUpdates(planMove(items, id, toDate, toIndex));
  });
}

export async function sortDayByTime(tripId: string, date: string): Promise<void> {
  await db.transaction('rw', db.items, async () => {
    const items = await db.items.where('tripId').equals(tripId).toArray();
    await applyUpdates(planSortByTime(items, date));
  });
}

export async function deleteItem(id: string): Promise<void> {
  await db.transaction('rw', db.items, db.photos, async () => {
    await db.photos.where('itemId').equals(id).delete();
    await db.items.delete(id);
  });
}

/** Фото к месту: уменьшается и сохраняется в базе рядом с записью. */
export async function addItemPhoto(tripId: string, itemId: string, file: File): Promise<void> {
  const { blob, width, height } = await downscaleImage(file);
  const photo: Photo = { id: newId(), tripId, itemId, blob, width, height, createdAt: Date.now() };
  await db.photos.add(photo);
}

export const deletePhoto = (id: string) => db.photos.delete(id);
