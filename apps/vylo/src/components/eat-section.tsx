'use client';

import { Utensils } from 'lucide-react';
import Link from 'next/link';
import { Photo } from '@/components/photo';
import { Rating } from '@/components/ui';
import { placeHref } from '@/data/catalog';
import type { Place } from '@/data/types';
import { useI18n } from '@/i18n/use';

/** "Where to eat": what each place is known for and what to order, best-rated first. */
export function EatList({ items, accent, showCity = false }: { items: Place[]; accent: string; showCity?: boolean }) {
  const { f, place, dest } = useI18n();
  return (
    <div className="mt-3 grid gap-2.5 px-5">
      {items.map((p) => {
        const text = place(p.id);
        return (
          <Link key={p.id} href={placeHref(p.id)} className="press flex gap-3 rounded-[22px] bg-white p-2.5 shadow-soft">
            <Photo id={p.image} alt={text.name} width={240} className="size-[84px] shrink-0" rounded="rounded-[16px]" tint={accent} />
            <div className="min-w-0 flex-1 py-0.5">
              <p className="truncate text-[15px] font-semibold">{text.name}</p>
              <p className="flex items-center gap-1.5 truncate text-[12px] text-muted">
                <Rating value={p.rating} className="text-[12px]" />
                {p.price ? <span>· {f.price(p.price)}</span> : null}
                {showCity ? <span className="truncate">· {dest(p.destinationId).name}</span> : null}
              </p>
              {text.tip && (
                <p className="mt-1 flex gap-1.5 text-[12px] leading-snug text-ink-2">
                  <Utensils className="mt-0.5 size-3.5 shrink-0" style={{ color: accent }} />
                  <span className="line-clamp-2">{text.tip}</span>
                </p>
              )}
            </div>
          </Link>
        );
      })}
    </div>
  );
}

/** Best-rated first, with at most `limit` places. */
export const topFood = (places: Place[], limit: number) =>
  places
    .filter((p) => p.category === 'food')
    .sort((a, b) => b.rating * Math.log10(b.reviews + 10) - a.rating * Math.log10(a.reviews + 10))
    .slice(0, limit);
