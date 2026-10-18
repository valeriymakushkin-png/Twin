'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Check, Globe2, Search } from 'lucide-react';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { Spark } from '@/components/logo';
import { TopBar } from '@/components/ui';
import { allCountries, countryName, flag, WORLD_COUNTRIES } from '@/lib/countries';
import { cn, hash } from '@/lib/utils';
import { useApp } from '@/store/app';

const inks = ['#4f46e5', '#0d9488', '#be123c', '#b45309', '#7c3aed', '#0369a1', '#15803d'];

function StampMark({ code, index }: { code: string; index: number }) {
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
      <span className={cn('mt-1 line-clamp-2 max-w-[86%] break-words font-black uppercase leading-tight', countryName(code).length > 8 ? 'text-[7px]' : 'text-[9px] tracking-[0.04em]')}>
        {countryName(code)}
      </span>
    </motion.div>
  );
}

export default function PassportPage() {
  const visited = useApp((s) => s.visited);
  const toggleVisited = useApp((s) => s.toggleVisited);
  const [q, setQ] = useState('');
  const all = useMemo(() => allCountries(), []);
  const list = useMemo(() => {
    const s = q.trim().toLowerCase();
    return s ? all.filter((c) => c.name.toLowerCase().includes(s)) : all;
  }, [q, all]);
  const pct = (visited.length / WORLD_COUNTRIES) * 100;
  const r = 52;
  const c = 2 * Math.PI * r;

  return (
    <div className="scroll-area absolute inset-0 bg-canvas pb-16">
      <TopBar title="Паспорт путешественника" />
      <div className="px-5">
        <div className="relative overflow-hidden rounded-[30px] bg-gradient-to-br from-[#1e1b4b] via-[#312e81] to-[#4338ca] p-6 text-white shadow-float">
          <div className="absolute inset-0 opacity-[0.07] [background-image:repeating-linear-gradient(45deg,#fff_0,#fff_1px,transparent_1px,transparent_12px)]" />
          <div className="relative flex items-center gap-5">
            <div className="relative size-[124px] shrink-0">
              <svg viewBox="0 0 124 124" className="absolute inset-0 -rotate-90">
                <circle cx="62" cy="62" r={r} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="9" />
                <motion.circle
                  cx="62"
                  cy="62"
                  r={r}
                  fill="none"
                  stroke="#a5b4fc"
                  strokeWidth="9"
                  strokeLinecap="round"
                  strokeDasharray={c}
                  initial={{ strokeDashoffset: c }}
                  animate={{ strokeDashoffset: c * (1 - Math.max(0.01, pct / 100)) }}
                  transition={{ type: 'spring', stiffness: 50, damping: 16 }}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-[26px] font-black leading-none">{pct.toFixed(1)}%</span>
                <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-white/60">мира</span>
              </div>
            </div>
            <div>
              <Spark size={28} />
              <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.18em] text-white/60">Vylo · Passport</p>
              <p className="mt-1 text-[30px] font-black leading-none">{visited.length}</p>
              <p className="text-[13px] text-white/75">из {WORLD_COUNTRIES} стран</p>
            </div>
          </div>
          <Link href="/map/" className="relative mt-5 flex h-11 items-center justify-center gap-2 rounded-full bg-white/12 text-[14px] font-semibold ring-1 ring-white/20 backdrop-blur">
            <Globe2 className="size-4" /> Посмотреть на глобусе
          </Link>
        </div>

        {visited.length > 0 && (
          <>
            <h2 className="mt-7 text-[19px] font-bold tracking-[-0.02em]">Штампы</h2>
            <div className="mt-3 grid grid-cols-4 gap-3 rounded-[26px] bg-[#fffdf7] p-4 shadow-soft ring-1 ring-[#f1e9d2]">
              <AnimatePresence>
                {visited.map((code, i) => (
                  <button key={code} onClick={() => toggleVisited(code)} aria-label={`Убрать ${countryName(code)}`}>
                    <StampMark code={code} index={i} />
                  </button>
                ))}
              </AnimatePresence>
            </div>
          </>
        )}

        <h2 className="mt-7 text-[19px] font-bold tracking-[-0.02em]">Где вы были?</h2>
        <div className="mt-3 flex h-12 items-center gap-2.5 rounded-full bg-white px-4 shadow-soft ring-1 ring-line-soft">
          <Search className="size-[18px] text-muted" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Найти страну" className="min-w-0 flex-1 bg-transparent text-[15px] outline-none placeholder:text-faint" />
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
