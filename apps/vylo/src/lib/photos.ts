/**
 * Photo URLs. Catalogue images are Unsplash photo ids. With an Unsplash API access key
 * (NEXT_PUBLIC_UNSPLASH_ACCESS_KEY) we resolve each id through the official API, hotlink the CDN
 * URL it returns and keep the photographer credit — the production-grade path. Without a key we
 * fall back to the public per-photo link, which is fine for demos.
 */
const KEY = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY;
const STORE = 'vylo-unsplash-v1';

export interface PhotoMeta {
  raw: string;
  author: string;
  authorUrl: string;
  page: string;
}

const cache = new Map<string, PhotoMeta>();
const pending = new Map<string, Promise<PhotoMeta | null>>();
let loaded = false;

function loadCache() {
  if (loaded || typeof window === 'undefined') return;
  loaded = true;
  try {
    const raw = localStorage.getItem(STORE);
    if (raw) for (const [k, v] of Object.entries(JSON.parse(raw) as Record<string, PhotoMeta>)) cache.set(k, v);
  } catch {
    /* storage unavailable */
  }
}

function persist() {
  try {
    localStorage.setItem(STORE, JSON.stringify(Object.fromEntries(cache)));
  } catch {
    /* storage unavailable */
  }
}

/** Old-style CDN ids look like "1537996194471-e657df975ab4". */
const isLegacy = (id: string) => /^\d{9,}-[0-9a-f]+$/.test(id);

export const hasPhotoApi = Boolean(KEY);

export function photoMeta(id: string): PhotoMeta | undefined {
  loadCache();
  return cache.get(id);
}

export function photoUrl(id: string, width = 800): string {
  if (!id) return '';
  if (id.startsWith('http') || id.startsWith('data:') || id.startsWith('/')) return id;
  if (isLegacy(id)) return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=80`;
  const meta = photoMeta(id);
  if (meta) return `${meta.raw}${meta.raw.includes('?') ? '&' : '?'}auto=format&fit=crop&w=${width}&q=80`;
  return `https://unsplash.com/photos/${id}/download?w=${width}`;
}

export const photoPage = (id: string) => (isLegacy(id) ? 'https://unsplash.com' : `https://unsplash.com/photos/${id}`);

/** Resolve an id through the Unsplash API (no-op without a key). */
export function resolvePhoto(id: string): Promise<PhotoMeta | null> {
  loadCache();
  if (!KEY || !id || isLegacy(id) || id.startsWith('http')) return Promise.resolve(null);
  const hit = cache.get(id);
  if (hit) return Promise.resolve(hit);
  let p = pending.get(id);
  if (!p) {
    p = fetch(`https://api.unsplash.com/photos/${id}?client_id=${KEY}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((j: { urls?: { raw?: string }; user?: { name?: string; links?: { html?: string } }; links?: { html?: string } } | null) => {
        if (!j?.urls?.raw) return null;
        const meta: PhotoMeta = {
          raw: j.urls.raw,
          author: j.user?.name ?? 'Unsplash',
          authorUrl: `${j.user?.links?.html ?? 'https://unsplash.com'}?utm_source=vylo&utm_medium=referral`,
          page: `${j.links?.html ?? photoPage(id)}?utm_source=vylo&utm_medium=referral`,
        };
        cache.set(id, meta);
        persist();
        return meta;
      })
      .catch(() => null);
    pending.set(id, p);
  }
  return p;
}
