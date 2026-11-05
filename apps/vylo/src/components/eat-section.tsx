'use client';

import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { MichelinBadge, michelinRank } from '@/components/food/michelin';
import { Photo } from '@/components/photo';
import { Rating } from '@/components/ui';
import { destinationById, placeHref } from '@/data/catalog';
import type { Place } from '@/data/types';
import { useI18n } from '@/i18n/use';
import { cn } from '@/lib/utils';

/** One restaurant card: photo, name with its MICHELIN distinction, rating and price, and a taste of the menu. */
function EatCard({ p, accent, showCity }: { p: Place; accent: string; showCity: boolean }) {
  const { f, place, dest } = useI18n();
  const text = place(p.id);
  const currency = destinationById(p.destinationId)?.currency ?? 'USD';
  const dishes = p.menu?.slice(0, 2) ?? [];
  return (
    <Link href={placeHref(p.id)} className="press group flex gap-3.5 rounded-[24px] bg-white p-2.5 pr-3 shadow-soft ring-1 ring-line-soft">
      <div className="relative shrink-0">
        <Photo id={p.image} alt={text.name} width={260} className="size-[96px]" rounded="rounded-[18px]" tint={accent} />
        {p.michelin && <MichelinBadge m={p.michelin} onDark className="absolute bottom-1.5 left-1.5 h-5 px-1.5 text-[10px]" />}
      </div>
      <div className="flex min-w-0 flex-1 flex-col py-0.5">
        <div className="flex items-start gap-1">
          <p className="line-clamp-1 flex-1 text-[16px] font-semibold tracking-[-0.02em]">{text.name}</p>
          <ChevronRight className="mt-0.5 size-4 shrink-0 text-faint transition-transform group-active:translate-x-0.5" />
        </div>
        <p className="mt-0.5 flex items-center gap-1.5 truncate text-[12px] text-muted">
          <Rating value={p.rating} className="text-[12px]" />
          {p.price ? <span>· {f.price(p.price)}</span> : null}
          {showCity ? <span className="truncate">· {dest(p.destinationId).name}</span> : null}
        </p>
        {dishes.length ? (
          <div className="mt-auto flex min-w-0 flex-wrap gap-1 pt-1.5">
            {dishes.map((m) => (
              <span key={m.dish} className="inline-flex max-w-full items-center gap-1 truncate rounded-full px-2 py-[3px] text-[11px] font-semibold" style={{ background: `${accent}12`, color: accent }}>
                <span className="truncate">{m.dish.replace(/\s*\(.*\)$/, '')}</span>
                {m.price !== undefined && <span className="font-medium opacity-75 tabular-nums">{f.money(m.price, currency)}</span>}
              </span>
            ))}
          </div>
        ) : (
          text.tip && <p className="mt-auto line-clamp-2 pt-1 text-[12px] leading-snug text-ink-2">{text.tip}</p>
        )}
      </div>
    </Link>
  );
}

/** "Where to eat": MICHELIN-distinguished places first, then by rating. */
export function EatList({ items, accent, showCity = false }: { items: Place[]; accent: string; showCity?: boolean }) {
  return (
    <div className="mt-3 grid gap-2.5 px-5">
      {items.map((p) => (
        <EatCard key={p.id} p={p} accent={accent} showCity={showCity} />
      ))}
    </div>
  );
}

const score = (p: Place) => p.rating * Math.log10(p.reviews + 10);
const byPrestige = (a: Place, b: Place) => michelinRank(b.michelin) - michelinRank(a.michelin) || score(b) - score(a);

/** Best first (MICHELIN distinctions lead), with at most `limit` places. */
export const topFood = (places: Place[], limit: number) => places.filter((p) => p.category === 'food').sort(byPrestige).slice(0, limit);

type EatFilter = 'all' | 'stars' | 'bib' | 'local';

/** The full list for a city with filters: everything / MICHELIN stars / Bib Gourmand / local favourites. */
export function EatBrowser({ places, accent }: { places: Place[]; accent: string }) {
  const { t } = useI18n();
  const [filter, setFilter] = useState<EatFilter>('all');
  const food = places.filter((p) => p.category === 'food').sort(byPrestige);
  const counts: Record<EatFilter, number> = {
    all: food.length,
    stars: food.filter((p) => p.michelin && p.michelin.award.startsWith('star')).length,
    bib: food.filter((p) => p.michelin?.award === 'bib').length,
    local: food.filter((p) => !p.michelin || p.michelin.award === 'bib').filter((p) => !p.price || p.price.kind !== 'level' || p.price.level < 3).length,
  };
  const shown = food.filter((p) =>
    filter === 'all' ? true : filter === 'stars' ? p.michelin?.award.startsWith('star') : filter === 'bib' ? p.michelin?.award === 'bib' : (!p.michelin || p.michelin.award === 'bib') && (!p.price || p.price.kind !== 'level' || p.price.level < 3),
  );
  const options: { v: EatFilter; label: string }[] = [
    { v: 'all', label: t('eat.filterAll') },
    { v: 'stars', label: t('eat.filterStars') },
    { v: 'bib', label: 'Bib Gourmand' },
    { v: 'local', label: t('eat.filterLocal') },
  ];
  return (
    <div className="pt-4">
      <div className="no-scrollbar flex gap-2 overflow-x-auto px-5 pb-1">
        {options
          .filter((o) => o.v === 'all' || counts[o.v] > 0)
          .map((o) => (
            <button
              key={o.v}
              onClick={() => setFilter(o.v)}
              className={cn('press inline-flex h-9 shrink-0 items-center gap-1.5 rounded-full px-3.5 text-[13px] font-semibold transition-colors', filter === o.v ? 'text-white' : 'bg-white text-ink-2 shadow-soft ring-1 ring-line-soft')}
              style={filter === o.v ? { background: o.v === 'stars' || o.v === 'bib' ? '#c8102e' : accent } : undefined}
            >
              {o.label}
              <span className={cn('tabular-nums', filter === o.v ? 'text-white/75' : 'text-faint')}>{counts[o.v]}</span>
            </button>
          ))}
      </div>
      <EatList items={shown} accent={accent} />
      <p className="mt-3 px-5 text-[12px] leading-snug text-faint">{t('eat.michelinNote')}</p>
    </div>
  );
}
