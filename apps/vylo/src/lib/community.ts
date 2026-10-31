'use client';

import { api, hasApi } from './api';

/**
 * What travellers send back: error reports and photos. With the Vylo API they go to the moderation queue in
 * the admin panel. Without a server a report is kept on this device (the admin panel in the same browser can
 * read it), and photos cannot be sent at all.
 */

export type ReportKind = 'place' | 'city' | 'country' | 'visa' | 'phrase' | 'other';

export interface LocalReport {
  id: string;
  kind: ReportKind;
  target: string;
  message: string;
  contact?: string;
  at: number;
}

const KEY = 'vylo-reports-v1';

export const localReports = (): LocalReport[] => {
  try {
    return JSON.parse(localStorage.getItem(KEY) ?? '[]') as LocalReport[];
  } catch {
    return [];
  }
};
export const saveLocalReports = (list: LocalReport[]) => {
  try {
    localStorage.setItem(KEY, JSON.stringify(list.slice(0, 200)));
  } catch {
    /* storage full or unavailable */
  }
};

export async function sendReport(r: { kind: ReportKind; target: string; message: string; contact?: string; locale: string }): Promise<'sent' | 'saved'> {
  if (hasApi()) {
    await api('/public/reports', { method: 'POST', body: JSON.stringify(r) });
    return 'sent';
  }
  saveLocalReports([{ id: Math.random().toString(36).slice(2, 10), kind: r.kind, target: r.target, message: r.message, contact: r.contact, at: Date.now() }, ...localReports()]);
  return 'saved';
}

export async function sendPhoto(placeId: string, file: Blob, credit: string): Promise<void> {
  await api('/public/photos', {
    method: 'POST',
    body: file,
    headers: { 'content-type': file.type || 'image/jpeg', 'x-place-id': placeId, 'x-consent': '1', 'x-credit': encodeURIComponent(credit) },
  });
}

/** Resize to at most 1800 px on the long side and re-encode as JPEG, so uploads stay small and carry no camera metadata. */
export async function prepareImage(file: File): Promise<Blob> {
  const bitmap = await createImageBitmap(file);
  const scale = Math.min(1, 1800 / Math.max(bitmap.width, bitmap.height));
  const canvas = document.createElement('canvas');
  canvas.width = Math.round(bitmap.width * scale);
  canvas.height = Math.round(bitmap.height * scale);
  canvas.getContext('2d')!.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  return new Promise((resolve, reject) => canvas.toBlob((b) => (b ? resolve(b) : reject(new Error('encode'))), 'image/jpeg', 0.85));
}
