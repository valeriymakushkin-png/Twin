'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { useEffect, useMemo } from 'react';
import { levelFor, questsFor } from '@/lib/gamification';
import { hash, plural, todayKey } from '@/lib/utils';
import { useApp } from '@/store/app';
import { useUI } from '@/store/ui';
import { AchievementBadge } from './achievement-badge';
import { Button } from './ui';

const confettiColors = ['#6366f1', '#10b981', '#f59e0b', '#ef4444', '#ec4899', '#0ea5e9', '#fbbf24'];

function Confetti() {
  const pieces = useMemo(
    () =>
      Array.from({ length: 46 }, (_, i) => {
        const h = hash(`c${i}`);
        const angle = (i / 46) * Math.PI * 2 + (h % 100) / 100;
        const dist = 120 + (h % 140);
        return {
          x: Math.cos(angle) * dist,
          y: Math.sin(angle) * dist - 60,
          r: (h % 720) - 360,
          color: confettiColors[i % confettiColors.length]!,
          w: 6 + (h % 6),
          round: i % 3 === 0,
          delay: (h % 10) / 100,
        };
      }),
    [],
  );
  return (
    <div className="pointer-events-none absolute left-1/2 top-[42%]">
      {pieces.map((p, i) => (
        <motion.span
          key={i}
          className="absolute block"
          style={{ width: p.w, height: p.round ? p.w : p.w * 0.45, background: p.color, borderRadius: p.round ? 99 : 2 }}
          initial={{ x: 0, y: 0, opacity: 1, rotate: 0, scale: 0.4 }}
          animate={{ x: p.x, y: [0, p.y, p.y + 260], opacity: [1, 1, 0], rotate: p.r, scale: 1 }}
          transition={{ duration: 1.9, delay: p.delay, ease: [0.2, 0.7, 0.4, 1], times: [0, 0.35, 1] }}
        />
      ))}
    </div>
  );
}

function Flame({ size = 88 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" className="animate-flame drop-shadow-[0_10px_24px_rgba(249,115,22,0.55)]">
      <defs>
        <linearGradient id="fl-a" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#ef4444" />
          <stop offset="0.55" stopColor="#f97316" />
          <stop offset="1" stopColor="#fbbf24" />
        </linearGradient>
        <linearGradient id="fl-b" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#fde68a" />
          <stop offset="1" stopColor="#fff7ed" />
        </linearGradient>
      </defs>
      <path d="M32 4c3 10 14 16 14 32a14 14 0 0 1-28 0c0-7 3-12 7-16 0 6 3 9 6 9-3-8 0-17 1-25z" fill="url(#fl-a)" />
      <path d="M32 30c2 5 7 8 7 15a7 7 0 0 1-14 0c0-4 2-6 4-8 0 3 1 4 3 4-1-4 0-8 0-11z" fill="url(#fl-b)" />
    </svg>
  );
}

export { Flame };

export function Celebrations() {
  const current = useUI((s) => s.celebrations[0]);
  const next = useUI((s) => s.nextCelebration);
  const xp = useApp((s) => s.xp);
  const lvl = levelFor(xp);
  const quests = questsFor(todayKey());

  return (
    <AnimatePresence mode="wait">
      {current && (
        <motion.div key={JSON.stringify(current)} className="fixed inset-0 z-[90] grid place-items-center px-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <div className="absolute inset-0 bg-ink/55 backdrop-blur-sm" onClick={next} />
          <Confetti />
          <motion.div
            className="relative w-full overflow-hidden rounded-[32px] bg-white p-7 text-center shadow-float"
            initial={{ scale: 0.8, y: 30 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 320, damping: 24 }}
          >
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-brand-50 to-white" />
            <div className="relative">
              {current.kind === 'achievement' && (
                <>
                  <div className="mx-auto flex justify-center">
                    <AchievementBadge achievement={current.achievement} unlocked size={96} />
                  </div>
                  <p className="mt-5 text-[12px] font-bold uppercase tracking-[0.14em] text-brand">Новое достижение</p>
                  <h3 className="mt-1 text-[24px] font-bold tracking-[-0.03em]">{current.achievement.title}</h3>
                  <p className="mt-1.5 text-[14px] text-muted">{current.achievement.description}</p>
                  <p className="mx-auto mt-4 inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1.5 text-[13px] font-bold text-amber">
                    <Sparkles className="size-4" /> +{current.achievement.xp} XP
                  </p>
                </>
              )}
              {current.kind === 'level' && (
                <>
                  <motion.div
                    className="mx-auto grid size-24 place-items-center rounded-[30px] bg-gradient-to-br from-brand to-violet text-[40px] font-black text-white shadow-brand"
                    initial={{ rotate: -12, scale: 0.6 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 14, delay: 0.1 }}
                  >
                    {current.level}
                  </motion.div>
                  <p className="mt-5 text-[12px] font-bold uppercase tracking-[0.14em] text-brand">Новый уровень</p>
                  <h3 className="mt-1 text-[24px] font-bold tracking-[-0.03em]">{current.name}</h3>
                  <p className="mt-1.5 text-[14px] text-muted">
                    {lvl.next ? `До уровня «${lvl.next.name}» — ${lvl.toNext} XP` : 'Вы достигли вершины. Легенда!'}
                  </p>
                </>
              )}
              {current.kind === 'streak' && (
                <>
                  <div className="mx-auto flex justify-center">
                    <Flame />
                  </div>
                  <h3 className="mt-3 text-[44px] font-black leading-none tracking-[-0.04em]">{current.count}</h3>
                  <p className="text-[15px] font-semibold text-ink-2">{plural(current.count, ['день', 'дня', 'дней'])} подряд</p>
                  <div className="mt-5 flex justify-center gap-1.5">
                    {Array.from({ length: 7 }, (_, i) => (
                      <motion.span
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.15 + i * 0.05 }}
                        className={`grid size-8 place-items-center rounded-full text-[11px] font-bold ${i < (current.count % 7 || 7) ? 'bg-gradient-to-b from-amber to-[#f97316] text-white' : 'bg-surface-2 text-faint'}`}
                      >
                        {i + 1}
                      </motion.span>
                    ))}
                  </div>
                  <p className="mt-4 text-[13px] text-muted">
                    Лучшая серия: {current.best}. Сегодня вас ждут {quests.length} {plural(quests.length, ['задание', 'задания', 'заданий'])}.
                  </p>
                </>
              )}
              <Button className="mt-6 w-full" size="lg" onClick={next}>
                {current.kind === 'streak' ? 'Вперёд к открытиям' : 'Супер!'}
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function RewardToasts() {
  const rewards = useUI((s) => s.rewards);
  const drop = useUI((s) => s.dropReward);
  useEffect(() => {
    if (!rewards.length) return;
    const t = setTimeout(() => drop(rewards[0]!.id), 1800);
    return () => clearTimeout(t);
  }, [rewards, drop]);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[80] flex flex-col items-center gap-2" style={{ paddingTop: 'calc(var(--safe-top) + 8px)' }}>
      <AnimatePresence>
        {rewards.map((r) => (
          <motion.div
            key={r.id}
            layout
            initial={{ y: -30, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -20, opacity: 0, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 420, damping: 28 }}
            className="flex items-center gap-2 rounded-full bg-ink py-2 pl-2 pr-4 text-white shadow-float"
          >
            <span className="grid h-7 place-items-center rounded-full bg-gradient-to-b from-amber to-[#f97316] px-2 text-[12px] font-black">+{r.xp} XP</span>
            <span className="text-[13px] font-semibold">{r.label}</span>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
