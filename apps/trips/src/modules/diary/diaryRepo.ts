import { db, type Diary, type DiaryPage, type DiaryStyle, type Photo } from '../../core/db';
import { newId } from '../../core/id';
import { downscaleImage } from '../../core/images';

export const saveDiary = (d: Diary) => db.diaries.put({ ...d, updatedAt: Date.now() });

export async function createDiary(tripId: string, style: DiaryStyle, pages: DiaryPage[], seed: number, fingerprint: string): Promise<void> {
  const now = Date.now();
  await db.diaries.put({ tripId, style, seed, pages, fingerprint, createdAt: now, updatedAt: now });
}

/** Меняет страницы дневника функцией; запись в базе обновляется одной операцией. */
export async function updateDiary(tripId: string, change: (d: Diary) => Diary): Promise<void> {
  await db.transaction('rw', db.diaries, async () => {
    const d = await db.diaries.get(tripId);
    if (d) await db.diaries.put({ ...change(d), updatedAt: Date.now() });
  });
}

/** Фото, которое пользователь выбрал для дневника, хранится в той же таблице фото (без привязки к записи маршрута). */
export async function addUserPhoto(tripId: string, file: File): Promise<string> {
  const { blob, width, height } = await downscaleImage(file, 2000, 0.86);
  const photo: Photo = { id: newId(), tripId, blob, width, height, createdAt: Date.now() };
  await db.photos.add(photo);
  return photo.id;
}

const referenced = (pages: DiaryPage[]): Set<string> => {
  const ids = new Set<string>();
  for (const p of pages) {
    if (p.kind === 'cover' && p.photo) [p.photo.source, p.photo.override].forEach((x) => x && ids.add(x));
    if (p.kind === 'day') for (const s of p.photos) [s.source, s.override].forEach((x) => x && ids.add(x));
  }
  return ids;
};

/**
 * Удаляет фото, добавленные в дневник, которые больше нигде не используются (после замены или «вернуть оригинал»).
 * Фото из маршрута и обложка поездки не трогаются.
 */
export async function dropUnusedUserPhotos(tripId: string): Promise<void> {
  await db.transaction('rw', [db.photos, db.diaries, db.trips], async () => {
    const [diary, trip, photos] = await Promise.all([db.diaries.get(tripId), db.trips.get(tripId), db.photos.where('tripId').equals(tripId).toArray()]);
    const used = referenced(diary?.pages ?? []);
    for (const p of photos) if (!p.itemId && p.id !== trip?.coverPhotoId && !used.has(p.id)) await db.photos.delete(p.id);
  });
}
