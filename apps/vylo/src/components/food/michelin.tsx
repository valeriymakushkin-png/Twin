'use client';

import type { Michelin } from '@/data/types';
import { useI18n } from '@/i18n/use';
import { cn } from '@/lib/utils';

/** MICHELIN red, as on the guide itself. */
export const MICHELIN_RED = '#c8102e';
const GREEN = '#15803d';

/** The guide's stylised star (a six-lobed flower), drawn as one path. */
function Rosette({ size = 11, color }: { size?: number; color: string }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" fill={color}>
      <path d="M12 2.2c1.5 0 2.6 1.3 2.4 2.8l-.3 2.3 1.9-1.4c1.2-.9 2.9-.6 3.6.7.8 1.3.2 2.9-1.2 3.5l-2.1.9 2.1.9c1.4.6 2 2.2 1.2 3.5-.7 1.3-2.4 1.6-3.6.7l-1.9-1.4.3 2.3c.2 1.5-.9 2.8-2.4 2.8s-2.6-1.3-2.4-2.8l.3-2.3-1.9 1.4c-1.2.9-2.9.6-3.6-.7-.8-1.3-.2-2.9 1.2-3.5l2.1-.9-2.1-.9C3.4 9 2.8 7.4 3.6 6.1c.7-1.3 2.4-1.6 3.6-.7l1.9 1.4-.3-2.3C8.6 3.5 10.5 2.2 12 2.2Zm0 7.3a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z" />
    </svg>
  );
}

const STARS = { star3: 3, star2: 2, star1: 1 } as const;

/** Compact pill: rosettes or "Bib Gourmand", with the guide edition in the full variant. */
export function MichelinBadge({ m, full = false, className, onDark = false }: { m: Michelin; full?: boolean; className?: string; onDark?: boolean }) {
  const { t, tk } = useI18n();
  const color = m.award === 'green' ? GREEN : MICHELIN_RED;
  const stars = m.award in STARS ? STARS[m.award as keyof typeof STARS] : 0;
  const label = tk(`eat.michelin.${m.award}`);
  return (
    <span
      title={`${label} · ${t('eat.michelinYear', { year: m.year })}`}
      className={cn('inline-flex h-[22px] shrink-0 items-center gap-1 whitespace-nowrap rounded-full px-2 text-[11px] font-bold tracking-[-0.01em]', onDark ? 'bg-white/95 shadow-sm' : 'bg-white ring-1 ring-black/[0.06]', className)}
      style={{ color }}
    >
      {stars ? Array.from({ length: stars }, (_, i) => <Rosette key={i} color={color} />) : m.award === 'green' ? <Rosette color={color} /> : <span aria-hidden="true">☺</span>}
      <span>{full ? `${label} · ${m.year}` : stars ? 'MICHELIN' : m.award === 'bib' ? 'Bib Gourmand' : label}</span>
    </span>
  );
}

/** Sort key: three stars first, then two, one, Bib Gourmand, Green Star; then rating. */
export const michelinRank = (m?: Michelin) => (m ? { star3: 5, star2: 4, star1: 3, bib: 2, green: 1 }[m.award] : 0);
