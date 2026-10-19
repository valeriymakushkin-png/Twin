'use client';

import { motion } from 'framer-motion';
import { Check, ChevronRight, MapPin, Plane, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { destinationById, destinationHref, destinations, overrides } from '@/data/catalog';
import { useI18n } from '@/i18n/use';
import { questsFor } from '@/lib/gamification';
import { cn, hash, todayKey } from '@/lib/utils';
import { useApp } from '@/store/app';
import { CompassMark } from './journey';
import { Photo } from './photo';
import { SaveButton } from './save-button';
import { Rating } from './ui';

export function dailyPick(date = todayKey()) {
  // The team can pin a destination from the admin console.
  const pinned = overrides().settings.placeOfDay;
  return (pinned && destinationById(pinned)) || destinations[hash(`pick-${date}`) % destinations.length]!;
}

function useCountdown() {
  const { t } = useI18n();
  const [left, setLeft] = useState('');
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const end = new Date(now);
      end.setHours(24, 0, 0, 0);
      const ms = end.getTime() - now.getTime();
      setLeft(t('daily.hm', { h: Math.floor(ms / 3_600_000), m: String(Math.floor((ms % 3_600_000) / 60_000)).padStart(2, '0') }));
    };
    tick();
    const timer = setInterval(tick, 30_000);
    return () => clearInterval(timer);
  }, [t]);
  return left;
}

/** One destination per day for everyone — a reason to open the app tomorrow. */
export function DailyPickCard() {
  const d = dailyPick();
  const left = useCountdown();
  const { t, dest, country } = useI18n();
  const text = dest(d.id);
  return (
    <Link href={destinationHref(d.id)} className="press relative mx-5 block h-[230px] overflow-hidden rounded-[30px] shadow-float">
      <Photo id={d.image} alt={text.name} width={900} priority className="absolute inset-0" tint={d.theme.accent} />
      <div className="photo-scrim-top absolute inset-0" />
      <div className="absolute inset-x-4 top-4 flex items-center justify-between">
        <span className="flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[12px] font-bold text-ink shadow-soft">
          <Sparkles className="size-3.5" style={{ color: d.theme.accent }} /> {t('daily.placeOfDay')}
        </span>
        <SaveButton id={d.id} tone="glass" />
      </div>
      <div className="absolute inset-x-5 bottom-4 text-white">
        <p className="text-[12px] font-medium text-white/80">{country(d.countryCode)}</p>
        <p className="text-[28px] font-bold leading-tight tracking-[-0.03em]">{text.name}</p>
        <p className="mt-0.5 line-clamp-1 text-[13px] text-white/85">{text.tagline}</p>
        <div className="mt-2.5 flex items-center justify-between gap-2">
          <Rating value={d.rating} count={d.reviews} light />
          <span className="glass-dark truncate rounded-full px-2.5 py-1 text-[11px] font-medium text-white/90 ring-1 ring-white/20">{t('daily.newIn', { time: left })}</span>
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

/** Compact "today's route" strip: three stops on a dotted flight path. */
export function QuestStrip() {
  const quests = useQuests();
  const streak = useApp((s) => s.streak);
  const { t, tk } = useI18n();
  const done = quests.filter((q) => q.done).length;
  return (
    <Link href="/profile/?tab=route" className="press mx-5 flex items-center gap-3.5 rounded-[24px] bg-white p-3.5 shadow-card">
      <div className="relative">
        <CompassMark size={52} />
        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 rounded-full bg-ink px-1.5 text-[11px] font-black text-white ring-2 ring-white">{streak.count}</span>
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[15px] font-bold tracking-[-0.01em]">{t('daily.route')}</p>
        <p className="truncate text-[12px] text-muted">{done === quests.length ? t('daily.allDone') : tk(`quests.${quests.find((q) => !q.done)?.key ?? 'save'}`)}</p>
        <div className="mt-2 flex items-center gap-1">
          {quests.map((q, i) => (
            <div key={q.id} className="flex flex-1 items-center gap-1">
              <span className={cn('grid size-4 shrink-0 place-items-center rounded-full', q.done ? 'bg-[#0f766e] text-white' : 'bg-surface-2 text-faint')}>
                {q.done ? <Check className="size-2.5" strokeWidth={4} /> : <span className="size-1.5 rounded-full bg-current" />}
              </span>
              {i < quests.length - 1 && <span className={cn('h-0 flex-1 border-t-2 border-dashed', q.done ? 'border-[#0f766e]/50' : 'border-line')} />}
            </div>
          ))}
          <Plane className={cn('size-3.5 shrink-0', done === quests.length ? 'text-[#0f766e]' : 'text-faint')} />
        </div>
      </div>
      <ChevronRight className="size-4 shrink-0 text-faint" />
    </Link>
  );
}

export function QuestList() {
  const quests = useQuests();
  const claim = useApp((s) => s.claimQuest);
  const { t, tk } = useI18n();
  return (
    <div className="relative grid gap-2.5 pl-6">
      <span className="absolute bottom-6 left-[11px] top-6 border-l-2 border-dashed border-line" />
      {quests.map((q, i) => (
        <motion.div key={q.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="relative">
          <span className={cn('absolute -left-6 top-1/2 grid size-[22px] -translate-y-1/2 place-items-center rounded-full ring-4 ring-canvas', q.done ? 'bg-[#0f766e] text-white' : 'bg-white text-faint shadow-soft')}>
            {q.done ? <Check className="size-3" strokeWidth={3.5} /> : <MapPin className="size-3" />}
          </span>
          <div className={cn('flex items-center gap-3 rounded-[22px] bg-white p-3.5 shadow-soft', q.claimed && 'opacity-60')}>
            <div className="min-w-0 flex-1">
              <p className="text-[14px] font-semibold">{tk(`quests.${q.key}`)}</p>
              <p className="mt-0.5 text-[11px] font-semibold text-muted">
                {q.count}/{q.target}
              </p>
            </div>
            {q.claimed ? (
              <span className="text-[12px] font-semibold text-mint">{t('daily.claimed')}</span>
            ) : q.done ? (
              <motion.button
                animate={{ scale: [1, 1.06, 1] }}
                transition={{ repeat: Infinity, duration: 1.6 }}
                onClick={() => claim(q.id)}
                className="flex h-9 items-center gap-1 rounded-full bg-gradient-to-b from-[#2dd4bf] to-[#0f766e] px-3.5 text-[13px] font-bold text-white shadow-[0_8px_20px_-8px_rgba(15,118,110,0.8)]"
              >
                <Plane className="size-3.5 fill-white" /> {t('common.plusMiles', { count: q.miles })}
              </motion.button>
            ) : (
              <Link href={q.href} className="flex items-center gap-1 rounded-full bg-surface-2 px-3 py-2 text-[12px] font-semibold text-ink-2">
                <Plane className="size-3" /> {t('common.plusMiles', { count: q.miles })}
              </Link>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
