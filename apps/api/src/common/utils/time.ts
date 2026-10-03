export const DAY_MS = 86_400_000;

/** UTC date key, e.g. 20261003 — used for daily quota counters and HLL keys. */
export function dayKey(date = new Date()): string {
  return date.toISOString().slice(0, 10).replace(/-/g, '');
}

export function isoDay(date: Date): string {
  return date.toISOString().slice(0, 10);
}

export function startOfUtcDay(date = new Date()): Date {
  return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
}

export function addDays(date: Date, days: number): Date {
  return new Date(date.getTime() + days * DAY_MS);
}

export function secondsUntilEndOfUtcDay(now = new Date()): number {
  const end = startOfUtcDay(now).getTime() + DAY_MS;
  return Math.max(60, Math.ceil((end - now.getTime()) / 1000));
}
