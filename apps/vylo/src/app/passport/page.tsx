'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Check, Globe2, Search } from 'lucide-react';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { Spark } from '@/components/logo';
import { usePlus } from '@/components/paywall';
import { PlusBadge, TopBar } from '@/components/ui';
import { useI18n } from '@/i18n/use';
import { allCountries, flag, WORLD_COUNTRIES } from '@/lib/countries';
import { cn, hash } from '@/lib/utils';
import { useApp, type PassportCover } from '@/store/app';

/** Cover artwork for the passport card; every cover except the classic one comes with Plus. */
const COVERS: Record<PassportCover, { bg: string; ring: string; pattern: string }> = {
  classic: { bg: 'linear-gradient(135deg, #1e1b4b, #312e81 55%, #4338ca)', ring: '#a5b4fc', pattern: '#ffffff' },
  night: { bg: 'linear-gradient(135deg, #0a0a0a, #1c1917 60%, #292524)', ring: '#fcd34d', pattern: '#fcd34d' },
  sunset: { bg: 'linear-gradient(135deg, #7c2d12, #c2410c 50%, #db2777)', ring: '#fed7aa', pattern: '#ffffff' },
  forest: { bg: 'linear-gradient(135deg, #052e16, #166534 55%, #15803d)', ring: '#bbf7d0', pattern: '#ffffff' },
  arctic: { bg: 'linear-gradient(135deg, #0c4a6e, #0369a1 50%, #0ea5e9)', ring: '#e0f2fe', pattern: '#ffffff' },
};

const inks = ['#4f46e5', '#0d9488', '#be123c', '#b45309', '#7c3aed', '#0369a1', '#15803d'];

function StampMark({ code, index }: { code: string; index: number }) {
  const { country } = useI18n();
  const name = country(code);
  const h = hash(code);
  const ink = inks[h % inks.length]!;
  const rotate = (h % 24) - 12;
  const round = h % 3 !== 0;
  return (
    <motion.div
      initial={{ scale: 1.8, opacity: 0, rotate: rotate - 20 }}
      animate={{ scale: 1, opacity: 1, rotate }}
      transition={{ type: 'spring', stiffness: 420, damping: 18, delay: Math.min(index * 0.04, 0.6) }}
      className={cn('flex aspect-square flex-col items-center justify-center border-[2.5px] p-1 text-center', round ? 'rounded-full' : 'rounded-[18px]')}
      style={{ borderColor: ink, color: ink, boxShadow: `inset 0 0 0 3px white, inset 0 0 0 4.5px ${ink}55` }}
    >
      <span className="text-[26px] leading-none">{flag(code)}</span>
      <span className={cn('mt-1 line-clamp-2 max-w-[86%] break-words font-black uppercase leading-tight', name.length > 8 ? 'text-[7px]' : 'text-[9px] tracking-[0.04em]')}>
        {name}
      </span>
    </motion.div>
  );
}

export default function PassportPage() {
  const visited = useApp((s) => s.visited);
  const toggleVisited = useApp((s) => s.toggleVisited);
  const cover = useApp((s) => s.passportCover);
  const setCover = useApp((s) => s.setPassportCover);
  const plus = usePlus();
  const { t, tk, f, locale, country } = useI18n();
  const [q, setQ] = useState('');
  const all = useMemo(() => allCountries(locale), [locale]);
  const list = useMemo(() => {
    const fold = (x: string) => x.normalize('NFD').replace(/\p{M}/gu, '').toLowerCase();
    const s = fold(q.trim());
    return s ? all.filter((c) => fold(c.name).includes(s)) : all;
  }, [q, all]);
  const pct = (visited.length / WORLD_COUNTRIES) * 100;
  const look = COVERS[cover];
  const r = 52;
  const c = 2 * Math.PI * r;

  return (
    <div className="scroll-area absolute inset-0 bg-canvas pb-16">
      <TopBar title={t('passport.title')} />
      <div className="px-5">
        <motion.div layout className="relative overflow-hidden rounded-[30px] p-6 text-white shadow-float transition-[background] duration-500" style={{ background: look.bg }}>
          <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: `repeating-linear-gradient(45deg, ${look.pattern} 0, ${look.pattern} 1px, transparent 1px, transparent 12px)` }} />
          <div className="relative flex items-center gap-5">
            <div className="relative size-[124px] shrink-0">
              <svg viewBox="0 0 124 124" className="absolute inset-0 -rotate-90">
                <circle cx="62" cy="62" r={r} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="9" />
                <motion.circle
                  cx="62"
                  cy="62"
                  r={r}
                  fill="none"
                  stroke={look.ring}
                  strokeWidth="9"
                  strokeLinecap="round"
                  strokeDasharray={c}
                  initial={{ strokeDashoffset: c }}
                  animate={{ strokeDashoffset: c * (1 - Math.max(0.01, pct / 100)) }}
                  transition={{ type: 'spring', stiffness: 50, damping: 16 }}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-[26px] font-black leading-none">{f.percent(pct / 100)}</span>
                <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-white/60">{t('passport.ofWorld')}</span>
              </div>
            </div>
            <div>
              <Spark size={28} />
              <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.18em] text-white/60">Vylo · Passport</p>
              <p className="mt-1 text-[30px] font-black leading-none">{f.number(visited.length)}</p>
              <p className="text-[13px] text-white/75">{t('passport.ofCountries', { total: WORLD_COUNTRIES })}</p>
            </div>
          </div>
          <Link href="/map/" className="relative mt-5 flex h-11 items-center justify-center gap-2 rounded-full bg-white/12 text-[14px] font-semibold ring-1 ring-white/20 backdrop-blur">
            <Globe2 className="size-4" /> {t('passport.viewGlobe')}
          </Link>
        </motion.div>

        <p className="mt-5 text-[13px] font-semibold text-muted">{t('passport.cover')}</p>
        <div className="no-scrollbar -mx-5 mt-2 flex gap-2.5 overflow-x-auto px-5 pb-1">
          {(Object.keys(COVERS) as PassportCover[]).map((k) => {
            const locked = k !== 'classic' && !plus.active;
            return (
              <button key={k} onClick={() => (k === 'classic' ? setCover(k) : plus.gate(() => setCover(k)))} className="flex shrink-0 flex-col items-center gap-1.5">
                <span className={cn('relative block h-16 w-12 rounded-[10px] shadow-soft ring-offset-2 transition-shadow', cover === k && 'ring-[3px] ring-brand')} style={{ background: COVERS[k].bg }}>
                  <span className="absolute inset-x-2 top-3 h-px" style={{ background: COVERS[k].ring }} />
                  {locked && <PlusBadge className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 scale-90" />}
                </span>
                <span className="text-[11px] font-semibold text-ink-2">{tk(`passport.covers.${k}`)}</span>
              </button>
            );
          })}
        </div>

        {visited.length > 0 && (
          <>
            <h2 className="mt-7 text-[19px] font-bold tracking-[-0.02em]">{t('passport.stamps')}</h2>
            <div className="mt-3 grid grid-cols-4 gap-3 rounded-[26px] bg-[#fffdf7] p-4 shadow-soft ring-1 ring-[#f1e9d2]">
              <AnimatePresence>
                {visited.map((code, i) => (
                  <button key={code} onClick={() => toggleVisited(code)} aria-label={t('passport.remove', { name: country(code) })}>
                    <StampMark code={code} index={i} />
                  </button>
                ))}
              </AnimatePresence>
            </div>
          </>
        )}

        <h2 className="mt-7 text-[19px] font-bold tracking-[-0.02em]">{t('passport.whereBeen')}</h2>
        <div className="mt-3 flex h-12 items-center gap-2.5 rounded-full bg-white px-4 shadow-soft ring-1 ring-line-soft">
          <Search className="size-[18px] text-muted" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder={t('passport.find')} className="min-w-0 flex-1 bg-transparent text-[15px] outline-none placeholder:text-faint" />
        </div>
        <div className="mt-3 grid gap-1 rounded-[24px] bg-white p-2 shadow-soft">
          {list.map((x) => {
            const on = visited.includes(x.code);
            return (
              <button key={x.code} onClick={() => toggleVisited(x.code)} className="flex items-center gap-3 rounded-2xl px-2 py-2 text-left hover:bg-surface-2">
                <span className="text-[24px]">{flag(x.code)}</span>
                <span className="flex-1 text-[15px]">{x.name}</span>
                <span className={cn('grid size-6 place-items-center rounded-full border-2 transition-colors', on ? 'border-brand bg-brand text-white' : 'border-line')}>
                  {on && <Check className="size-3.5" strokeWidth={3.5} />}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
