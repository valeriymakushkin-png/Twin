'use client';

import { photoUrl } from './photos';
import { countryHref, destinationById, destinationHref, placeHref, placesIn } from '@/data/catalog';

export const offlineSupported = () => typeof navigator !== 'undefined' && 'serviceWorker' in navigator;

export function registerServiceWorker() {
  if (!offlineSupported() || process.env.NODE_ENV !== 'production') return;
  navigator.serviceWorker.register('/sw.js').catch(() => {});
}

/** Pages and photos that make a destination usable offline. */
export function offlineAssets(id: string): { urls: string[]; photos: string[] } {
  const d = destinationById(id);
  if (!d) return { urls: [], photos: [] };
  const places = placesIn(id);
  const urls = [destinationHref(id), countryHref(d.countryCode), `/visa/${d.countryCode}/`, `/phrases/?lang=${d.language}`, `/plan/?d=${id}`, ...places.map((p) => placeHref(p.id)), '/map/', '/discover/', '/visa/', '/expenses/'];
  const widths = [1000, 2000, 800, 1600, 360, 720];
  const ids = [d.image, ...d.gallery, ...places.map((p) => p.image)];
  const photos = Array.from(new Set(ids.flatMap((pid) => widths.map((w) => photoUrl(pid, w)))));
  return { urls, photos };
}

const worker = async () => {
  if (!offlineSupported()) return null;
  const reg = await navigator.serviceWorker.ready.catch(() => null);
  return reg?.active ?? null;
};

function request(message: Record<string, unknown>, done: string, id: string, timeoutMs: number): Promise<{ failed?: number } | null> {
  return new Promise((resolve) => {
    const timer = setTimeout(() => resolve(null), timeoutMs);
    const onMessage = (e: MessageEvent) => {
      if (e.data?.type === done && e.data.id === id) {
        clearTimeout(timer);
        navigator.serviceWorker.removeEventListener('message', onMessage);
        resolve(e.data);
      }
    };
    navigator.serviceWorker.addEventListener('message', onMessage);
    void worker().then((w) => (w ? w.postMessage(message) : resolve(null)));
  });
}

/** Ask the service worker to store a destination's pages and photos; resolves when it reports back. */
export async function downloadDestination(id: string): Promise<boolean> {
  if (!(await worker()) || !destinationById(id)) return false;
  const { urls, photos } = offlineAssets(id);
  const r = await request({ type: 'cache', id, urls, photos }, 'cached', id, 60_000);
  return !!r && r.failed === 0;
}

/**
 * Remove a destination from the offline cache. Pages and photos that another saved destination still needs
 * (a country's shared pictures, the map and discover screens) stay.
 */
export async function removeDestination(id: string, stillSaved: string[]): Promise<boolean> {
  const keep = stillSaved.filter((x) => x !== id).map(offlineAssets);
  const keepUrls = new Set(keep.flatMap((a) => a.urls));
  const keepPhotos = new Set(keep.flatMap((a) => a.photos));
  const gone = offlineAssets(id);
  const r = await request({ type: 'evict', id, urls: gone.urls.filter((u) => !keepUrls.has(u)), photos: gone.photos.filter((u) => !keepPhotos.has(u)) }, 'evicted', id, 30_000);
  return !!r;
}

/** Bytes used and available for this app, when the browser reports them. */
export async function storageUsage(): Promise<{ used: number; quota: number } | null> {
  try {
    const e = await navigator.storage?.estimate?.();
    return e?.usage !== undefined && e.quota ? { used: e.usage, quota: e.quota } : null;
  } catch {
    return null;
  }
}
