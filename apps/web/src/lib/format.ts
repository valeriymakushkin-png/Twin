import { getT, intlLocale } from '@/lib/i18n';

export function formatStars(n: number): string {
  return n.toLocaleString(intlLocale(getT().locale));
}

export function relativeTime(iso: string): string {
  const { t, f, locale } = getT();
  const diff = (Date.now() - new Date(iso).getTime()) / 1000;
  if (diff < 60) return t.time.justNow;
  if (diff < 3600) return f(t.time.minutes, { n: Math.floor(diff / 60) });
  if (diff < 86400) return f(t.time.hours, { n: Math.floor(diff / 3600) });
  return new Date(iso).toLocaleDateString(intlLocale(locale), { month: 'short', day: 'numeric' });
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString(intlLocale(getT().locale), { day: 'numeric', month: 'long', year: 'numeric' });
}

export function humanize(value: string): string {
  return value.replace(/-/g, ' ');
}
