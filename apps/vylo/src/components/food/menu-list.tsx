'use client';

import { BookOpen } from 'lucide-react';
import type { Place } from '@/data/types';
import { destinationById } from '@/data/catalog';
import { useI18n } from '@/i18n/use';

/**
 * A restaurant's signature dishes as an inset grouped list (iOS Settings style): dish on the left, its
 * plain-language gloss below, price on the right in tabular figures.
 */
export function MenuList({ place: p, accent }: { place: Place; accent: string }) {
  const { t, f, place } = useI18n();
  if (!p.menu?.length) return null;
  const glosses = place(p.id).dishes ?? [];
  const currency = destinationById(p.destinationId)?.currency ?? 'USD';
  return (
    <section>
      <h2 className="flex items-center gap-2 text-[19px] font-bold tracking-[-0.02em]">
        <BookOpen className="size-5" style={{ color: accent }} /> {t('eat.menu')}
      </h2>
      <div className="mt-3 overflow-hidden rounded-[22px] bg-white shadow-soft ring-1 ring-line-soft">
        {p.menu.map((m, i) => (
          <div key={m.dish} className="relative flex items-start gap-3 px-4 py-3.5">
            {i > 0 && <span className="absolute inset-x-4 top-0 h-px bg-line-soft" />}
            <span className="mt-[7px] size-1.5 shrink-0 rounded-full" style={{ background: accent }} />
            <div className="min-w-0 flex-1">
              <p className="text-[15px] font-semibold leading-snug tracking-[-0.01em]">{m.dish}</p>
              {glosses[i] && <p className="mt-0.5 text-[13px] leading-snug text-muted">{glosses[i]}</p>}
            </div>
            {m.price !== undefined && <p className="shrink-0 pt-px text-[15px] font-semibold tabular-nums text-ink-2">≈ {f.money(m.price, currency)}</p>}
          </div>
        ))}
      </div>
      <p className="mt-2 px-1 text-[12px] leading-snug text-faint">{t('eat.menuNote')}</p>
    </section>
  );
}
