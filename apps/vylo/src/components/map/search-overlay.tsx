'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Clock, Search, TrendingUp, X } from 'lucide-react';
import { useMemo, useState } from 'react';
import { packs } from '@/content';
import { useWorldText } from '@/content/world';
import { allItemIds, resolveItem } from '@/data';
import { countries as allCountries, destinations, visaByCode } from '@/data/catalog';
import { LOCALES } from '@/i18n/config';
import { useI18n } from '@/i18n/use';
import { countryName, flag } from '@/lib/countries';
import { useApp } from '@/store/app';
import { Photo } from '../photo';
import { Rating } from '../ui';
import { useVisaTitle } from '../visa-badge';

const norm = (s: string) => s.toLocaleLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '');

/** Names in every loaded language, so "Петра", "Petra" and "Pétra" all find the same place. */
function searchIndex(world: ReturnType<typeof useWorldText.getState>['texts'], extra: (id: string) => string) {
  return allItemIds().map((id) => {
    const names = LOCALES.flatMap((l) => {
      const p = packs[l];
      const d = (p.destinations as Record<string, { name: string }>)[id] ?? world[l]?.cities[id];
      const pl = (p.places as Record<string, { name: string }>)[id] ?? world[l]?.places[id];
      return [d?.name, pl?.name].filter(Boolean) as string[];
    });
    return { id, haystack: norm([...names, extra(id)].join(' | ')) };
  });
}

export function SearchOverlay({ onClose, onPick }: { onClose: () => void; onPick: (id: string, kind: 'item' | 'country') => void }) {
  const [q, setQ] = useState('');
  const { recentSearches, addSearch, clearSearches } = useApp();
  const { t, tk, locale, item, dest, country } = useI18n();
  const visaTitle = useVisaTitle();
  const world = useWorldText((s) => s.texts);
  // Names edited in the admin panel are searchable too.
  const index = useMemo(() => searchIndex(world, (id) => item(id).name), [world, item]);
  const results = useMemo(() => {
    const s = norm(q.trim());
    if (!s) return [];
    const tagHits = (id: string) => resolveItem(id)?.tags.some((tag) => norm(tk(`tags.${tag}`)).includes(s));
    return index.filter((e) => e.haystack.includes(s) || tagHits(e.id)).slice(0, 20).map((e) => e.id);
  }, [q, index, tk]);
  const countries = useMemo(() => {
    const s = norm(q.trim());
    if (!s) return [];
    return allCountries.filter((v) => LOCALES.some((l) => norm(countryName(v.code, l)).includes(s))).slice(0, 4);
  }, [q]);

  const pick = (id: string, kind: 'item' | 'country', label: string) => {
    addSearch(label);
    onPick(id, kind);
  };

  return (
    <motion.div className="pt-safe absolute inset-0 z-50 flex flex-col bg-white" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 24 }} transition={{ type: 'spring', stiffness: 420, damping: 36 }}>
      <div className="flex items-center gap-2 px-4 pb-3 pt-2">
        <div className="flex h-12 flex-1 items-center gap-2.5 rounded-full bg-surface-2 px-4">
          <Search className="size-[18px] text-muted" strokeWidth={2.4} />
          <input autoFocus value={q} onChange={(e) => setQ(e.target.value)} placeholder={t('map.searchPlaceholder')} className="min-w-0 flex-1 bg-transparent text-[16px] outline-none placeholder:text-faint" />
          {q && (
            <button aria-label={t('common.clear')} onClick={() => setQ('')} className="grid size-6 place-items-center rounded-full bg-faint/30">
              <X className="size-3.5" />
            </button>
          )}
        </div>
        <button onClick={onClose} className="px-1 text-[15px] font-semibold text-brand-600">
          {t('common.cancel')}
        </button>
      </div>

      <div className="scroll-area flex-1 px-4 pb-10">
        {!q && (
          <>
            {recentSearches.length > 0 && (
              <section className="mb-6">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-[13px] font-bold uppercase tracking-[0.08em] text-faint">{t('search.recent')}</h3>
                  <button onClick={clearSearches} className="text-[13px] font-medium text-muted">
                    {t('common.clear')}
                  </button>
                </div>
                {recentSearches.map((r) => (
                  <button key={r} onClick={() => setQ(r)} className="flex w-full items-center gap-3 py-2.5 text-left text-[15px]">
                    <Clock className="size-4 text-faint" />
                    {r}
                  </button>
                ))}
              </section>
            )}
            <h3 className="mb-3 text-[13px] font-bold uppercase tracking-[0.08em] text-faint">{t('search.trending')}</h3>
            <div className="grid grid-cols-2 gap-2.5">
              {destinations.slice(0, 10).map((d, i) => (
                <motion.button key={d.id} initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.03 }} onClick={() => pick(d.id, 'item', dest(d.id).name)} className="press relative h-28 overflow-hidden rounded-3xl text-left">
                  <Photo id={d.image} alt={dest(d.id).name} width={360} className="absolute inset-0" tint={d.theme.accent} />
                  <span className="photo-scrim absolute inset-0" />
                  <span className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-bold text-ink">
                    <TrendingUp className="size-3 text-mint" /> #{i + 1}
                  </span>
                  <span className="absolute inset-x-3 bottom-2.5 text-white">
                    <span className="block truncate text-[15px] font-bold">{dest(d.id).name}</span>
                    <span className="block truncate text-[11px] text-white/80">{country(d.countryCode)}</span>
                  </span>
                </motion.button>
              ))}
            </div>
          </>
        )}

        {q && countries.length === 0 && results.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-[40px]">🧭</p>
            <p className="mt-2 text-[16px] font-semibold">{t('search.emptyTitle')}</p>
            <p className="mt-1 text-[14px] text-muted">{t('search.emptyHint')}</p>
          </div>
        )}

        {countries.length > 0 && (
          <section className="mb-4">
            <h3 className="mb-1 text-[13px] font-bold uppercase tracking-[0.08em] text-faint">{t('search.countries')}</h3>
            {countries.map((c) => (
              <button key={c.code} onClick={() => pick(c.code, 'country', countryName(c.code, locale))} className="flex w-full items-center gap-3 rounded-2xl py-2.5 text-left">
                <span className="grid size-12 place-items-center rounded-2xl bg-surface-2 text-[26px]">{flag(c.code)}</span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-[15px] font-semibold">{countryName(c.code, locale)}</span>
                  <span className="block truncate text-[12px] text-muted">{visaByCode(c.code) ? visaTitle(visaByCode(c.code)!) : tk(`country.region.${c.region}`)}</span>
                </span>
                <ArrowUpRight className="size-4 text-faint" />
              </button>
            ))}
          </section>
        )}

        {results.length > 0 && (
          <section>
            <h3 className="mb-1 text-[13px] font-bold uppercase tracking-[0.08em] text-faint">{t('search.places')}</h3>
            {results.map((id) => {
              const ref = resolveItem(id)!;
              const text = item(id);
              return (
                <button key={id} onClick={() => pick(id, 'item', text.name)} className="flex w-full items-center gap-3 rounded-2xl py-2 text-left">
                  <Photo id={ref.image} alt={text.name} width={120} className="size-12 shrink-0" rounded="rounded-2xl" />
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-[15px] font-semibold">{text.name}</span>
                    <span className="block truncate text-[12px] text-muted">{text.subtitle}</span>
                  </span>
                  <Rating value={ref.rating} />
                </button>
              );
            })}
          </section>
        )}
      </div>
    </motion.div>
  );
}
