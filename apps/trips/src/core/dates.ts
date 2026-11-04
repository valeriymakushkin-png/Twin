/**
 * Даты в приложении — строки "ГГГГ-ММ-ДД" в местном часовом поясе пользователя. Так поездка не «съезжает»
 * на день при смене часового пояса, а сравнивать строки можно обычным `<`.
 */
const pad = (n: number) => String(n).padStart(2, '0');

export const toIso = (d: Date): string => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
export const todayIso = (): string => toIso(new Date());
/** Дата без времени, всегда в местной зоне (строка из `new Date('2026-05-01')` уехала бы в UTC). */
export const fromIso = (iso: string): Date => {
  const [y = 1970, m = 1, d = 1] = iso.split('-').map(Number);
  return new Date(y, m - 1, d);
};

export function addDays(iso: string, n: number): string {
  const d = fromIso(iso);
  d.setDate(d.getDate() + n);
  return toIso(d);
}

/** Количество дней между датами (целое, может быть отрицательным). */
export function daysBetween(a: string, b: string): number {
  return Math.round((fromIso(b).getTime() - fromIso(a).getTime()) / 86_400_000);
}

/** Все даты поездки от первого до последнего дня включительно. */
export function eachDay(start: string, end: string): string[] {
  const n = daysBetween(start, end);
  return n < 0 ? [] : Array.from({ length: n + 1 }, (_, i) => addDays(start, i));
}

export const formatDayLong = (iso: string): string => fromIso(iso).toLocaleDateString('ru-RU', { weekday: 'short', day: 'numeric', month: 'long' });
export const formatDayShort = (iso: string): string => fromIso(iso).toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' });

export function formatRange(start: string, end: string): string {
  const a = fromIso(start);
  const b = fromIso(end);
  if (start === end) return a.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' });
  const sameYear = a.getFullYear() === b.getFullYear();
  const left = a.toLocaleDateString('ru-RU', { day: 'numeric', month: 'short', ...(sameYear ? {} : { year: 'numeric' }) });
  const right = b.toLocaleDateString('ru-RU', { day: 'numeric', month: 'short', year: 'numeric' });
  return `${left} — ${right}`;
}

/** «пятница, 8 мая» — слова в нужном падеже даёт сам браузер. */
export const formatDayFull = (iso: string): string => fromIso(iso).toLocaleDateString('ru-RU', { weekday: 'long', day: 'numeric', month: 'long' });
