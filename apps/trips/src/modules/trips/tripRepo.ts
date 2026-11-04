import { db, type Photo, type Trip, type TripCity } from '../../core/db';
import { newId } from '../../core/id';
import { downscaleImage } from '../../core/images';

export interface TripInput {
  name: string;
  countryCode: string;
  cities: TripCity[];
  startDate: string;
  endDate: string;
  /** Валюта отчётов и бюджета */
  currency?: string;
  /** Бюджет в этой валюте; пусто — без бюджета */
  budget?: number;
}

/** Обложка: старая запись заменяется новой; `null` — убрать обложку. */
async function replaceCover(tripId: string, file: File | null): Promise<string | undefined> {
  const trip = await db.trips.get(tripId);
  if (trip?.coverPhotoId) await db.photos.delete(trip.coverPhotoId);
  if (!file) return undefined;
  const { blob, width, height } = await downscaleImage(file, 1400);
  const photo: Photo = { id: newId(), tripId, blob, width, height, createdAt: Date.now() };
  await db.photos.add(photo);
  return photo.id;
}

/** `cover`: File — новая обложка, null — убрать, undefined — не трогать. */
export async function createTrip(input: TripInput, cover?: File | null): Promise<string> {
  const id = newId();
  const now = Date.now();
  await db.trips.add({ id, ...input, createdAt: now, updatedAt: now });
  if (cover) await db.trips.update(id, { coverPhotoId: await replaceCover(id, cover) });
  return id;
}

export async function updateTrip(id: string, input: TripInput, cover?: File | null): Promise<void> {
  await db.trips.update(id, { ...input, updatedAt: Date.now() });
  if (cover !== undefined) await db.trips.update(id, { coverPhotoId: await replaceCover(id, cover) });
}

/** Поездка удаляется вместе со всем, что к ней относится: записями, фото и документами. */
export async function deleteTrip(id: string): Promise<void> {
  await db.transaction('rw', [db.trips, db.items, db.photos, db.docs, db.expenses], async () => {
    await db.expenses.where('tripId').equals(id).delete();
    await db.items.where('tripId').equals(id).delete();
    await db.photos.where('tripId').equals(id).delete();
    await db.docs.where('tripId').equals(id).delete();
    await db.trips.delete(id);
  });
}

export type { Trip };
