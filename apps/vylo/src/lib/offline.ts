'use client';

import { destinationById } from '@/data/destinations';
import { placesIn } from '@/data/places';
import { photoUrl } from './photos';

export const offlineSupported = () => typeof navigator !== 'undefined' && 'serviceWorker' in navigator;

export function registerServiceWorker() {
  if (!offlineSupported() || process.env.NODE_ENV !== 'production') return;
  navigator.serviceWorker.register('/sw.js').catch(() => {});
}

/** Ask the service worker to store a destination's pages and photos; resolves when it reports back. */
export async function downloadDestination(id: string): Promise<boolean> {
  if (!offlineSupported()) return false;
  const reg = await navigator.serviceWorker.ready.catch(() => null);
  const d = destinationById(id);
  if (!reg?.active || !d) return false;
  const places = placesIn(id);
  const urls = [`/d/${id}/`, ...places.map((p) => `/p/${p.id}/`), '/map/', '/discover/'];
  const widths = [1000, 2000, 800, 1600, 360, 720];
  const ids = [d.image, ...d.gallery, ...places.map((p) => p.image)];
  const photos = Array.from(new Set(ids.flatMap((pid) => widths.map((w) => photoUrl(pid, w)))));
  return new Promise((resolve) => {
    const timer = setTimeout(() => resolve(false), 60_000);
    const onMessage = (e: MessageEvent) => {
      if (e.data?.type === 'cached' && e.data.id === id) {
        clearTimeout(timer);
        navigator.serviceWorker.removeEventListener('message', onMessage);
        resolve(e.data.failed === 0);
      }
    };
    navigator.serviceWorker.addEventListener('message', onMessage);
    reg.active!.postMessage({ type: 'cache', id, urls, photos });
  });
}
