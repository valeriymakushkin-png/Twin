/* Vylo service worker: offline pages and photos for downloaded destinations. */
const RUNTIME = 'vylo-runtime-v1';
const PHOTOS = 'vylo-photos-v1';

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));

self.addEventListener('message', (event) => {
  const { type, urls, photos, id } = event.data || {};
  if (type !== 'cache') return;
  event.waitUntil(
    (async () => {
      const runtime = await caches.open(RUNTIME);
      const photoCache = await caches.open(PHOTOS);
      let failed = 0;
      for (const url of urls || []) {
        try {
          const res = await fetch(url, { credentials: 'same-origin' });
          if (res.ok) await runtime.put(url, res);
          else failed++;
        } catch {
          failed++;
        }
      }
      for (const url of photos || []) {
        try {
          const res = await fetch(url, { mode: 'no-cors' });
          await photoCache.put(url, res);
        } catch {
          failed++;
        }
      }
      const clients = await self.clients.matchAll();
      for (const c of clients) c.postMessage({ type: 'cached', id, failed });
    })(),
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // Photos: cache-first, so downloaded destinations keep their images offline.
  if (req.destination === 'image' && url.origin !== self.location.origin) {
    event.respondWith(
      caches.open(PHOTOS).then(async (cache) => (await cache.match(req.url)) || fetch(req).catch(() => Response.error())),
    );
    return;
  }

  // Same-origin: network first, fall back to anything cached.
  if (url.origin === self.location.origin) {
    event.respondWith(
      (async () => {
        const cache = await caches.open(RUNTIME);
        try {
          const res = await fetch(req);
          if (res.ok && (url.pathname.startsWith('/_next/') || req.mode === 'navigate' || url.pathname.endsWith('.txt'))) cache.put(req, res.clone());
          return res;
        } catch {
          return (await cache.match(req)) || (await cache.match(url.pathname)) || (await cache.match(`${url.pathname.replace(/\/?$/, '/')}`)) || Response.error();
        }
      })(),
    );
  }
});
