'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Clock, Search, TrendingUp, X } from 'lucide-react';
import { useMemo, useState } from 'react';
import { searchItems } from '@/data';
import { destinations } from '@/data/destinations';
import { visaCountries } from '@/data/visa';
import { countryName, flag } from '@/lib/countries';
import { useApp } from '@/store/app';
import { Photo } from '../photo';
import { Rating } from '../ui';

export function SearchOverlay({ onClose, onPick }: { onClose: () => void; onPick: (id: string, kind: 'item' | 'country') => void }) {
  const [q, setQ] = useState('');
  const { recentSearches, addSearch, clearSearches } = useApp();
  const results = useMemo(() => searchItems(q), [q]);
  const countries = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return [];
    return visaCountries.filter((v) => countryName(v.code).toLowerCase().includes(s)).slice(0, 4);
  }, [q]);

  const pick = (id: string, kind: 'item' | 'country', label: string) => {
    addSearch(label);
    onPick(id, kind);
  };

  return (
    <motion.div
      className="pt-safe absolute inset-0 z-50 flex flex-col bg-white"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 24 }}
      transition={{ type: 'spring', stiffness: 420, damping: 36 }}
    >
      <div className="flex items-center gap-2 px-4 pb-3 pt-2">
        <div className="flex h-12 flex-1 items-center gap-2.5 rounded-full bg-surface-2 px-4">
          <Search className="size-[18px] text-muted" strokeWidth={2.4} />
          <input
            autoFocus
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Места, города, страны"
            className="min-w-0 flex-1 bg-transparent text-[16px] outline-none placeholder:text-faint"
          />
          {q && (
            <button aria-label="Очистить" onClick={() => setQ('')} className="grid size-6 place-items-center rounded-full bg-faint/30">
              <X className="size-3.5" />
            </button>
          )}
        </div>
        <button onClick={onClose} className="px-1 text-[15px] font-semibold text-brand-600">
          Отмена
        </button>
      </div>

      <div className="scroll-area flex-1 px-4 pb-10">
        {!q && (
          <>
            {recentSearches.length > 0 && (
              <section className="mb-6">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-[13px] font-bold uppercase tracking-[0.08em] text-faint">Недавние</h3>
                  <button onClick={clearSearches} className="text-[13px] font-medium text-muted">
                    Очистить
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
            <h3 className="mb-3 text-[13px] font-bold uppercase tracking-[0.08em] text-faint">Сейчас популярно</h3>
            <div className="grid grid-cols-2 gap-2.5">
              {destinations.slice(0, 8).map((d, i) => (
                <motion.button
                  key={d.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.03 }}
                  onClick={() => pick(d.id, 'item', d.name)}
                  className="press relative h-28 overflow-hidden rounded-3xl text-left"
                >
                  <Photo id={d.image} alt={d.name} width={360} className="absolute inset-0" />
                  <span className="photo-scrim absolute inset-0" />
                  <span className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-bold text-ink">
                    <TrendingUp className="size-3 text-mint" /> #{i + 1}
                  </span>
                  <span className="absolute bottom-2.5 left-3 text-white">
                    <span className="block text-[15px] font-bold">{d.name}</span>
                    <span className="block text-[11px] text-white/80">{d.country}</span>
                  </span>
                </motion.button>
              ))}
            </div>
          </>
        )}

        {q && countries.length === 0 && results.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-[40px]">🧭</p>
            <p className="mt-2 text-[16px] font-semibold">Ничего не нашли</p>
            <p className="mt-1 text-[14px] text-muted">Попробуйте «Бали», «храм» или «Япония»</p>
          </div>
        )}

        {countries.length > 0 && (
          <section className="mb-4">
            <h3 className="mb-1 text-[13px] font-bold uppercase tracking-[0.08em] text-faint">Страны</h3>
            {countries.map((c) => (
              <button key={c.code} onClick={() => pick(c.code, 'country', countryName(c.code))} className="flex w-full items-center gap-3 rounded-2xl py-2.5 text-left">
                <span className="grid size-12 place-items-center rounded-2xl bg-surface-2 text-[26px]">{flag(c.code)}</span>
                <span className="flex-1">
                  <span className="block text-[15px] font-semibold">{countryName(c.code)}</span>
                  <span className="block text-[12px] text-muted">{c.title}</span>
                </span>
                <ArrowUpRight className="size-4 text-faint" />
              </button>
            ))}
          </section>
        )}

        {results.length > 0 && (
          <section>
            <h3 className="mb-1 text-[13px] font-bold uppercase tracking-[0.08em] text-faint">Места</h3>
            {results.map((r) => (
              <button key={r.id} onClick={() => pick(r.id, 'item', r.name)} className="flex w-full items-center gap-3 rounded-2xl py-2 text-left">
                <Photo id={r.image} alt={r.name} width={120} className="size-12" rounded="rounded-2xl" />
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-[15px] font-semibold">{r.name}</span>
                  <span className="block truncate text-[12px] text-muted">{r.subtitle}</span>
                </span>
                <Rating value={r.rating} />
              </button>
            ))}
          </section>
        )}
      </div>
    </motion.div>
  );
}
