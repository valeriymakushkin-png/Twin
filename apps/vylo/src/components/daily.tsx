'use client';

import { motion } from 'framer-motion';
import { Check, ChevronRight, Gift, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { destinations } from '@/data/destinations';
import { questsFor } from '@/lib/gamification';
import { cn, hash, todayKey } from '@/lib/utils';
import { useApp } from '@/store/app';
import { Flame } from './celebrations';
import { Photo } from './photo';
import { SaveButton } from './save-button';
import { ProgressBar, Rating } from './ui';

export function dailyPick(date = todayKey()) {
  return destinations[hash(`pick-${date}`) % destinations.length]!;
}

function useCountdown() {
  const [left, setLeft] = useState('');
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const end = new Date(now);
      end.setHours(24, 0, 0, 0);
      const ms = end.getTime() - now.getTime();
      const h = Math.floor(ms / 3_600_000);
      const m = Math.floor((ms % 3_600_000) / 60_000);
      setLeft(`${h} ч ${String(m).padStart(2, '0')} мин`);
    };
    tick();
    const t = setInterval(tick, 30_000);
    return () => clearInterval(t);
  }, []);
  return left;
}

/** One destination per day for everyone — a reason to open the app tomorrow. */
export function DailyPickCard() {
  const d = dailyPick();
  const left = useCountdown();
  return (
    <Link href={`/d/${d.id}/`} className="press relative mx-5 block h-[230px] overflow-hidden rounded-[30px] shadow-float">
      <Photo id={d.image} alt={d.name} width={900} priority className="absolute inset-0" />
      <div className="photo-scrim-top absolute inset-0" />
      <div className="absolute inset-x-4 top-4 flex items-center justify-between">
        <span className="flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[12px] font-bold text-ink shadow-soft">
          <Sparkles className="size-3.5 text-brand" /> Место дня
        </span>
        <SaveButton id={d.id} tone="glass" />
      </div>
      <div className="absolute inset-x-5 bottom-4 text-white">
        <p className="text-[12px] font-medium text-white/80">{d.country}</p>
        <p className="text-[28px] font-bold leading-tight tracking-[-0.03em]">{d.name}</p>
        <p className="mt-0.5 line-clamp-1 text-[13px] text-white/85">{d.tagline}</p>
        <div className="mt-2.5 flex items-center justify-between">
          <Rating value={d.rating} count={d.reviews} light />
          <span className="glass-dark rounded-full px-2.5 py-1 text-[11px] font-medium text-white/90 ring-1 ring-white/20">Новое через {left}</span>
        </div>
      </div>
    </Link>
  );
}

export function useQuests() {
  const daily = useApp((s) => s.daily);
  const quests = questsFor(todayKey());
  const counts = daily.date === todayKey() ? daily.counts : {};
  const claimed = daily.date === todayKey() ? daily.claimed : [];
  return quests.map((q) => ({ ...q, count: Math.min(counts[q.key] ?? 0, q.target), done: (counts[q.key] ?? 0) >= q.target, claimed: claimed.includes(q.id) }));
}

/** Compact streak + daily quests widget. */
export function QuestStrip() {
  const quests = useQuests();
  const streak = useApp((s) => s.streak);
  const done = quests.filter((q) => q.done).length;
  return (
    <Link href="/profile/?tab=quests" className="press mx-5 flex items-center gap-3.5 rounded-[24px] bg-white p-3.5 shadow-card">
      <div className="relative grid size-14 place-items-center rounded-2xl bg-gradient-to-b from-amber-50 to-[#ffedd5]">
        <Flame size={34} />
        <span className="absolute -bottom-1.5 rounded-full bg-ink px-1.5 text-[11px] font-black text-white ring-2 ring-white">{streak.count}</span>
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[15px] font-bold tracking-[-0.01em]">Задания дня</p>
        <p className="truncate text-[12px] text-muted">{done === quests.length ? 'Всё выполнено — вы супер! 🎉' : (quests.find((q) => !q.done)?.title ?? '')}</p>
        <div className="mt-2 flex gap-1">
          {quests.map((q) => (
            <span key={q.id} className={cn('h-1.5 flex-1 rounded-full', q.done ? 'bg-amber' : 'bg-surface-2')} />
          ))}
        </div>
      </div>
      <span className="text-[13px] font-bold text-ink-2">
        {done}/{quests.length}
      </span>
      <ChevronRight className="size-4 text-faint" />
    </Link>
  );
}

export function QuestList() {
  const quests = useQuests();
  const claim = useApp((s) => s.claimQuest);
  return (
    <div className="grid gap-2.5">
      {quests.map((q, i) => (
        <motion.div
          key={q.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05 }}
          className={cn('flex items-center gap-3 rounded-[22px] bg-white p-3.5 shadow-soft', q.claimed && 'opacity-60')}
        >
          <span className={cn('grid size-11 shrink-0 place-items-center rounded-2xl', q.done ? 'bg-mint-50 text-mint' : 'bg-amber-50 text-amber')}>
            {q.done ? <Check className="size-5" strokeWidth={3} /> : <Gift className="size-5" />}
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-[14px] font-semibold">{q.title}</p>
            <div className="mt-1.5 flex items-center gap-2">
              <ProgressBar value={q.count / q.target} className="h-1.5 flex-1" color={q.done ? 'bg-mint' : 'bg-amber'} />
              <span className="text-[11px] font-semibold text-muted">
                {q.count}/{q.target}
              </span>
            </div>
          </div>
          {q.claimed ? (
            <span className="text-[12px] font-semibold text-mint">Получено</span>
          ) : q.done ? (
            <motion.button
              initial={{ scale: 0.8 }}
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ repeat: Infinity, duration: 1.6 }}
              onClick={() => claim(q.id)}
              className="h-9 rounded-full bg-gradient-to-b from-amber to-[#f97316] px-3.5 text-[13px] font-bold text-white shadow-[0_8px_20px_-8px_rgba(249,115,22,0.8)]"
            >
              +{q.xp} XP
            </motion.button>
          ) : (
            <Link href={q.href} className="rounded-full bg-surface-2 px-3 py-2 text-[12px] font-semibold text-ink-2">
              +{q.xp} XP
            </Link>
          )}
        </motion.div>
      ))}
    </div>
  );
}
