import { db, type DocKind, type DocRecord, type VyloDb } from '../../core/db';
import { createVault, open, openJson, seal, sealJson, unlockVault, type VaultParams, changeVaultPin } from '../../core/crypto';
import { newId } from '../../core/id';

/**
 * Документы. В базе лежат только зашифрованные данные: название/тип файла (meta) и содержимое (data).
 * Расшифровывать может только тот, кто знает PIN (ключ DEK живёт в памяти, пока сейф открыт).
 */
export interface DocMeta {
  name: string;
  mime: string;
  size: number;
}
export interface DocView extends DocMeta {
  id: string;
  tripId: string;
  kind: DocKind;
  createdAt: number;
}

const VAULT_KEY = 'vault';

export async function getVaultParams(database: VyloDb = db): Promise<VaultParams | undefined> {
  return (await database.settings.get(VAULT_KEY))?.value as VaultParams | undefined;
}

export async function setupVault(pin: string, database: VyloDb = db, iterations?: number): Promise<CryptoKey> {
  const { params, dek } = await createVault(pin, iterations);
  await database.settings.put({ key: VAULT_KEY, value: params });
  return dek;
}

export async function unlock(pin: string, database: VyloDb = db): Promise<CryptoKey | null> {
  const params = await getVaultParams(database);
  return params ? unlockVault(params, pin) : null;
}

export async function changePin(oldPin: string, newPin: string, database: VyloDb = db): Promise<boolean> {
  const params = await getVaultParams(database);
  const next = params && (await changeVaultPin(params, oldPin, newPin));
  if (!next) return false;
  await database.settings.put({ key: VAULT_KEY, value: next });
  return true;
}

/** «Забыл PIN»: удаляет все документы и сейф. Остальные данные (поездки, маршрут, фото) не затрагиваются. */
export async function resetVault(database: VyloDb = db): Promise<void> {
  await database.transaction('rw', [database.docs, database.settings], async () => {
    await database.docs.clear();
    await database.settings.delete(VAULT_KEY);
  });
}

export async function addDocument(dek: CryptoKey, tripId: string, file: Blob, meta: { name: string; kind: DocKind }, database: VyloDb = db): Promise<string> {
  const id = newId();
  const bytes = new Uint8Array(await file.arrayBuffer());
  const record: DocRecord = {
    id,
    tripId,
    kind: meta.kind,
    createdAt: Date.now(),
    meta: await sealJson(dek, { name: meta.name, mime: file.type || 'application/octet-stream', size: bytes.length } satisfies DocMeta),
    data: await seal(dek, bytes),
  };
  await database.docs.add(record);
  return id;
}

export async function listDocuments(dek: CryptoKey, tripId: string, database: VyloDb = db): Promise<DocView[]> {
  const records = await database.docs.where('tripId').equals(tripId).toArray();
  const views = await Promise.all(
    records.map(async (r) => {
      try {
        return { id: r.id, tripId: r.tripId, kind: r.kind, createdAt: r.createdAt, ...(await openJson<DocMeta>(dek, r.meta)) } satisfies DocView;
      } catch {
        return null; // повреждённая запись не должна ломать весь список
      }
    }),
  );
  return views.filter((v): v is DocView => v !== null).sort((a, b) => b.createdAt - a.createdAt);
}

export async function readDocument(dek: CryptoKey, id: string, database: VyloDb = db): Promise<Blob> {
  const rec = await database.docs.get(id);
  if (!rec) throw new Error('not-found');
  const meta = await openJson<DocMeta>(dek, rec.meta);
  return new Blob([(await open(dek, rec.data)) as BlobPart], { type: meta.mime });
}

export async function updateDocumentMeta(dek: CryptoKey, id: string, patch: { name?: string; kind?: DocKind }, database: VyloDb = db): Promise<void> {
  const rec = await database.docs.get(id);
  if (!rec) return;
  const meta = await openJson<DocMeta>(dek, rec.meta);
  await database.docs.update(id, { kind: patch.kind ?? rec.kind, meta: await sealJson(dek, { ...meta, name: patch.name?.trim() || meta.name }) });
}

export const deleteDocument = (id: string, database: VyloDb = db) => database.docs.delete(id);
