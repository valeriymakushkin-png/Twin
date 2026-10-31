'use client';

import { api, ApiError, hasApi } from './api';

/**
 * Trips shared by link. With the Vylo API a short code opens a live copy: friends read it, vote on places and
 * suggest more, and the creator (who holds an edit key on this device) accepts suggestions and republishes. Without
 * a server the link carries a read-only snapshot of the trip itself.
 */
export interface SharedItem {
  placeId: string;
  day: number;
  slot?: string;
}
export interface SharedTrip {
  name: string;
  destinationId: string;
  start: string;
  end: string;
  items: SharedItem[];
}
export interface SharedView {
  code: string;
  trip: SharedTrip;
  suggestions: { placeId: string; by: string; at: number }[];
  votes: Record<string, { up: number; down: number; mine: number }>;
  updatedAt: number;
}

const read = <T>(key: string, fallback: T): T => {
  try {
    return JSON.parse(localStorage.getItem(key) ?? '') as T;
  } catch {
    return fallback;
  }
};
const write = (key: string, v: unknown) => {
  try {
    localStorage.setItem(key, JSON.stringify(v));
  } catch {
    /* storage unavailable */
  }
};

export const voterId = () => {
  let id = read<string>('vylo-voter-v1', '');
  if (!id) write('vylo-voter-v1', (id = `v${crypto.randomUUID().replace(/-/g, '').slice(0, 20)}`));
  return id;
};

/** Edit keys of the trips this device created, by share code. */
const keys = () => read<Record<string, string>>('vylo-trip-keys-v1', {});
export const editKey = (code: string) => keys()[code];
/** Which share code belongs to which local trip. */
const shared = () => read<Record<string, string>>('vylo-shared-v1', {});

export const linkFor = (code: string) => `${location.origin}/t/?code=${code}`;

const encode = (t: SharedTrip) => btoa(unescape(encodeURIComponent(JSON.stringify(t)))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
export const decodeSnapshot = (s: string): SharedTrip | null => {
  try {
    const t = JSON.parse(decodeURIComponent(escape(atob(s.replace(/-/g, '+').replace(/_/g, '/'))))) as SharedTrip;
    return t && typeof t.name === 'string' && Array.isArray(t.items) ? t : null;
  } catch {
    return null;
  }
};

/** Create or update the shared copy of a local trip and return its link. */
export async function shareTrip(localId: string, trip: SharedTrip): Promise<{ link: string; live: boolean }> {
  if (!hasApi()) return { link: `${location.origin}/t/?s=${encode(trip)}`, live: false };
  const code = shared()[localId];
  const key = code ? editKey(code) : undefined;
  if (code && key) {
    try {
      await api(`/public/trips/${code}`, { method: 'PUT', headers: { 'x-edit-key': key }, body: JSON.stringify({ trip }) });
      return { link: linkFor(code), live: true };
    } catch (e) {
      if (!(e instanceof ApiError) || e.status !== 404) throw e;
    }
  }
  const made = await api<{ code: string; key: string }>('/public/trips', { method: 'POST', body: JSON.stringify(trip) });
  write('vylo-trip-keys-v1', { ...keys(), [made.code]: made.key });
  write('vylo-shared-v1', { ...shared(), [localId]: made.code });
  return { link: linkFor(made.code), live: true };
}

export const fetchShared = (code: string) => api<SharedView>(`/public/trips/${code}?voter=${voterId()}`);
export const vote = (code: string, item: string, value: -1 | 0 | 1) => api<SharedView>(`/public/trips/${code}/vote`, { method: 'POST', body: JSON.stringify({ voter: voterId(), item, value }) });
export const suggest = (code: string, placeId: string) => api<SharedView>(`/public/trips/${code}/suggest`, { method: 'POST', body: JSON.stringify({ voter: voterId(), placeId }) });
export const republish = (code: string, trip: SharedTrip) => {
  const key = editKey(code);
  if (!key) throw new ApiError(403, 'forbidden');
  return api<SharedView>(`/public/trips/${code}`, { method: 'PUT', headers: { 'x-edit-key': key }, body: JSON.stringify({ trip }) });
};
