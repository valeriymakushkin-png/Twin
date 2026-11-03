import 'fake-indexeddb/auto';
import { describe, expect, it } from 'vitest';
import { zipSync } from 'fflate';
import { BackupError, createBackup, needsPassword, restoreBackup } from './backup';
import { VyloDb } from './db';
import { addDocument, listDocuments, readDocument, setupVault, unlock } from '../modules/documents/docRepo';

let n = 0;
const freshDb = () => new VyloDb(`test-${++n}-${Math.random()}`);

async function seed(db: VyloDb) {
  await db.trips.add({ id: 't1', name: 'Лиссабон', countryCode: 'PT', cities: [{ name: 'Лиссабон' }], startDate: '2026-05-01', endDate: '2026-05-05', createdAt: 1, updatedAt: 1 });
  await db.items.add({ id: 'i1', tripId: 't1', date: '2026-05-01', time: '10:00', kind: 'place', title: 'Белен', order: 0, createdAt: 1, updatedAt: 1 });
  await db.photos.add({ id: 'p1', tripId: 't1', itemId: 'i1', blob: new Blob([new Uint8Array([255, 216, 255, 1, 2, 3])], { type: 'image/jpeg' }), width: 10, height: 10, createdAt: 1 });
  const dek = await setupVault('482915', db, 1000);
  await addDocument(dek, 't1', new Blob(['билет на самолёт'], { type: 'text/plain' }), { name: 'Билет.txt', kind: 'ticket' }, db);
}

describe('резервная копия', () => {
  it('сохраняет и восстанавливает всё, документы остаются зашифрованными и открываются прежним PIN', async () => {
    const source = freshDb();
    await seed(source);
    const file = await createBackup(source);

    const target = freshDb();
    await target.trips.add({ id: 'old', name: 'Старое', countryCode: 'FR', cities: [], startDate: '2025-01-01', endDate: '2025-01-02', createdAt: 1, updatedAt: 1 });
    const summary = await restoreBackup(target, file);
    expect(summary).toEqual({ trips: 1, items: 1, photos: 1, docs: 1 });
    expect((await target.trips.toArray()).map((t) => t.id)).toEqual(['t1']); // старые данные заменены

    const photo = await target.photos.get('p1');
    expect(Array.from(new Uint8Array(await photo!.blob.arrayBuffer()))).toEqual([255, 216, 255, 1, 2, 3]);
    expect(photo!.blob.type).toBe('image/jpeg');

    const dek = await unlock('482915', target);
    expect(dek).not.toBeNull();
    const [doc] = await listDocuments(dek!, 't1', target);
    expect(doc).toMatchObject({ name: 'Билет.txt', kind: 'ticket' });
    expect(await (await readDocument(dek!, doc!.id, target)).text()).toBe('билет на самолёт');
    expect(await unlock('000000', target)).toBeNull();
  });

  it('в файле копии нет документов в открытом виде', async () => {
    const source = freshDb();
    await seed(source);
    const file = await createBackup(source);
    expect(Buffer.from(file).includes(Buffer.from('билет на самолёт'))).toBe(false);
  });

  it('файл с паролем: без пароля и с неверным паролем не открывается, с верным — открывается', async () => {
    const source = freshDb();
    await seed(source);
    const file = await createBackup(source, { password: 'секрет', iterations: 1000 });
    expect(needsPassword(file)).toBe(true);
    const target = freshDb();
    await expect(restoreBackup(target, file)).rejects.toMatchObject({ code: 'password-required' });
    await expect(restoreBackup(target, file, 'не тот')).rejects.toMatchObject({ code: 'wrong-password' });
    expect((await restoreBackup(target, file, 'секрет')).trips).toBe(1);
  });

  it('отвергает чужие и повреждённые файлы, не затрагивая текущие данные', async () => {
    const target = freshDb();
    await seed(target);
    await expect(restoreBackup(target, new Uint8Array([1, 2, 3, 4]))).rejects.toBeInstanceOf(BackupError);
    const alien = zipSync({ 'manifest.json': new TextEncoder().encode('{"app":"other","version":1}'), 'data.json': new TextEncoder().encode('{}') });
    await expect(restoreBackup(target, alien)).rejects.toMatchObject({ code: 'invalid' });
    const newer = zipSync({ 'manifest.json': new TextEncoder().encode('{"app":"vylo-trips","version":99}'), 'data.json': new TextEncoder().encode('{}') });
    await expect(restoreBackup(target, newer)).rejects.toMatchObject({ code: 'newer-version' });
    const missingPhoto = zipSync({
      'manifest.json': new TextEncoder().encode('{"app":"vylo-trips","version":1}'),
      'data.json': new TextEncoder().encode(JSON.stringify({ trips: [], items: [], photos: [{ id: 'zz', tripId: 't', mime: 'image/jpeg' }], docs: [], settings: [] })),
    });
    await expect(restoreBackup(target, missingPhoto)).rejects.toMatchObject({ code: 'invalid' });
    expect(await target.trips.count()).toBe(1); // прежние данные целы
  });
});
