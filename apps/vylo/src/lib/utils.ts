import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Unsplash CDN url for a photo id. */
export function photoUrl(id: string, width = 800, height?: number) {
  if (id.startsWith('http') || id.startsWith('data:') || id.startsWith('/')) return id;
  const h = height ? `&h=${height}` : '';
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}${h}&q=80`;
}

export function hash(str: string) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export function compact(n: number) {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1).replace('.0', '')}M`;
  if (n >= 10_000) return `${Math.round(n / 1000)}k`;
  if (n >= 1000) return `${(n / 1000).toFixed(1).replace('.0', '')}k`;
  return String(n);
}

export function plural(n: number, forms: [string, string, string]) {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return forms[0];
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return forms[1];
  return forms[2];
}

export const todayKey = (d = new Date()) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

export function daysBetween(a: string, b: string) {
  const ms = new Date(`${b}T00:00:00`).getTime() - new Date(`${a}T00:00:00`).getTime();
  return Math.round(ms / 86_400_000);
}

const weekdays = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
const months = ['янв', 'фев', 'мар', 'апр', 'мая', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];

export function formatWhen(date: Date, now = new Date()) {
  const time = date.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
  const d = daysBetween(todayKey(now), todayKey(date));
  if (d === 0) return `Сегодня, ${time}`;
  if (d === 1) return `Завтра, ${time}`;
  return `${weekdays[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]}, ${time}`;
}

export function formatDate(iso: string) {
  const d = new Date(`${iso}T00:00:00`);
  return `${d.getDate()} ${months[d.getMonth()]}`;
}

export function timeAgo(daysAgo: number) {
  if (daysAgo <= 0) return 'сегодня';
  if (daysAgo === 1) return 'вчера';
  if (daysAgo < 7) return `${daysAgo} ${plural(daysAgo, ['день', 'дня', 'дней'])} назад`;
  const w = Math.round(daysAgo / 7);
  return `${w} ${plural(w, ['неделю', 'недели', 'недель'])} назад`;
}

export const uid = () => Math.random().toString(36).slice(2, 10);

/** Great-circle distance in km. */
export function distanceKm(a: { lat: number; lng: number }, b: { lat: number; lng: number }) {
  const R = 6371;
  const dLat = ((b.lat - a.lat) * Math.PI) / 180;
  const dLng = ((b.lng - a.lng) * Math.PI) / 180;
  const s = Math.sin(dLat / 2) ** 2 + Math.cos((a.lat * Math.PI) / 180) * Math.cos((b.lat * Math.PI) / 180) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(s));
}
