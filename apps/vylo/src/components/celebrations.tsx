'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Plane, Sparkles } from 'lucide-react';
import { useEffect, useMemo } from 'react';
import { useI18n } from '@/i18n/use';
import { questsFor, STATUS_STYLE, statusFor } from '@/lib/gamification';
import { hash, todayKey } from '@/lib/utils';
import { useApp } from '@/store/app';
import { useUI } from '@/store/ui';
import { CompassMark, PatchBadge } from './journey';
import { Button } from './ui';

const confettiColors = ['#6366f1', '#10b981', '#f59e0b', '#ef4444', '#ec4899', '#0ea5e9', '#fbbf24'];

/** Confetti mixed with tiny paper planes. */
function Confetti() {
  const pieces = useMemo(
    () =>
      Array.from({ length: 42 }, (_, i) => {
        const h = hash(`c${i}`);
        const angle = (i / 42) * Math.PI * 2 + (h % 100) / 100;
        const dist = 120 + (h % 140);
        return { x: Math.cos(angle) * dist, y: Math.sin(angle) * dist - 60, r: (h % 720) - 360, color: confettiColors[i % confettiColors.length]!, w: 6 + (h % 6), plane: i % 7 === 0, round: i % 3 === 0, delay: (h % 10) / 100 };
      }),
    [],
  );
  return (
    <div className="pointer-events-none absolute left-1/2 top-[42%]">
      {pieces.map((p, i) => (
        <motion.span
          key={i}
          className="absolute block"
          style={p.plane ? { color: p.color } : { width: p.w, height: p.round ? p.w : p.w * 0.45, background: p.color, borderRadius: p.round ? 99 : 2 }}
          initial={{ x: 0, y: 0, opacity: 1, rotate: 0, scale: 0.4 }}
          animate={{ x: p.x, y: [0, p.y, p.y + 260], opacity: [1, 1, 0], rotate: p.r, scale: 1 }}
          transition={{ duration: 1.9, delay: p.delay, ease: [0.2, 0.7, 0.4, 1], times: [0, 0.35, 1] }}
        >
          {p.plane && <Plane className="size-4 fill-current" />}
        </motion.span>
      ))}
    </div>
  );
}

/** "Day N on the road" as a boarding pass with a tear-off stub. */
function BoardingPass({ count, best }: { count: number; best: number }) {
  const { t, f } = useI18n();
  const name = useApp((s) => s.profile.name);
  const steps = questsFor(todayKey()).length;
  return (
    <div className="relative">
      <div className="overflow-hidden rounded-[24px] bg-gradient-to-br from-[#0f766e] to-[#115e59] text-white">
        <div className="flex items-center justify-between px-5 pt-4 text-[11px] font-bold uppercase tracking-[0.16em] text-white/70">
          <span>{t('celebrate.boarding')}</span>
          <span>Vylo</span>
        </div>
        <div className="flex items-center justify-between px-5 pb-4 pt-3">
          <div className="text-left">
            <p className="text-[26px] font-black uppercase leading-none">{t('trip.day')}</p>
            <p className="mt-1 text-[11px] text-white/70">{name || '—'}</p>
          </div>
          <motion.div initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.25, type: 'spring' }}>
            <Plane className="size-7 rotate-45 fill-white" />
          </motion.div>
          <div className="text-right">
            <p className="text-[30px] font-black leading-none">{String(count).padStart(2, '0')}</p>
            <p className="mt-1 text-[11px] text-white/70">{f.date(todayKey())}</p>
          </div>
        </div>
        <div className="relative border-t-2 border-dashed border-white/25 bg-white/5 px-5 py-3">
          <span className="absolute -left-3 -top-3 size-6 rounded-full bg-white" />
          <span className="absolute -right-3 -top-3 size-6 rounded-full bg-white" />
          <div className="grid grid-cols-3 text-left text-[10px] uppercase tracking-[0.12em] text-white/60">
            <span>{t('celebrate.gate')}</span>
            <span>{t('celebrate.seat')}</span>
            <span className="text-right">{t('celebrate.record', { count: best })}</span>
          </div>
          <div className="mt-0.5 grid grid-cols-3 text-left text-[16px] font-black">
            <span>{String.fromCharCode(65 + (count % 6))}{(count % 9) + 1}</span>
            <span>{(count % 30) + 1}{'ABCDEF'[count % 6]}</span>
            <span className="text-right">{best}</span>
          </div>
        </div>
      </div>
      <h3 className="mt-5 text-[24px] font-bold tracking-[-0.03em]">{t('celebrate.dayOnRoad', { count })}</h3>
      <p className="mt-1 text-[14px] text-muted">{t('celebrate.routeToday', { count: steps })}</p>
    </div>
  );
}

export function Celebrations() {
  const current = useUI((s) => s.celebrations[0]);
  const next = useUI((s) => s.nextCelebration);
  const miles = useApp((s) => s.miles);
  const { t, tk } = useI18n();
  const st = statusFor(miles);

  return (
    <AnimatePresence mode="wait">
      {current && (
        <motion.div key={JSON.stringify(current)} className="fixed inset-0 z-[90] grid place-items-center px-7" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <div className="absolute inset-0 bg-ink/55 backdrop-blur-sm" onClick={next} />
          <Confetti />
          <motion.div
            className="relative w-full overflow-hidden rounded-[32px] bg-white p-6 text-center shadow-float"
            initial={{ scale: 0.8, y: 30 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 320, damping: 24 }}
          >
            {current.kind === 'patch' && (
              <>
                <motion.div className="mx-auto flex justify-center" initial={{ rotate: -25, scale: 0.4 }} animate={{ rotate: 0, scale: 1 }} transition={{ type: 'spring', stiffness: 260, damping: 13 }}>
                  <PatchBadge patch={current.patch} earned size={104} />
                </motion.div>
                <p className="mt-5 text-[12px] font-bold uppercase tracking-[0.14em] text-brand">{t('celebrate.newPatch')}</p>
                <h3 className="mt-1 text-[24px] font-bold tracking-[-0.03em]">{tk(`gamify.patch.${current.patch.id}.title`)}</h3>
                <p className="mt-1.5 text-[14px] text-muted">{tk(`gamify.patch.${current.patch.id}.text`)}</p>
                <p className="mx-auto mt-4 inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1.5 text-[13px] font-bold text-amber">
                  <Sparkles className="size-4" /> {t('common.miles', { count: current.patch.miles })}
                </p>
              </>
            )}
            {current.kind === 'status' && (
              <>
                <motion.div
                  className="mx-auto flex h-36 w-full max-w-[260px] flex-col justify-between rounded-[22px] p-4 text-left shadow-float"
                  style={{ background: `linear-gradient(135deg, ${STATUS_STYLE[current.level - 1]!.from}, ${STATUS_STYLE[current.level - 1]!.to})`, color: STATUS_STYLE[current.level - 1]!.ink }}
                  initial={{ rotateY: 90 }}
                  animate={{ rotateY: 0 }}
                  transition={{ type: 'spring', stiffness: 120, damping: 14 }}
                >
                  <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-[0.16em] opacity-80">
                    <span>Vylo</span>
                    <span>{t('profile.status')}</span>
                  </div>
                  <div>
                    <p className="text-[22px] font-black leading-tight">{tk(`gamify.status.${current.key}`)}</p>
                    <p className="mt-1 font-mono text-[12px] tracking-[0.2em] opacity-70">•••• {String(current.level).padStart(4, '0')}</p>
                  </div>
                </motion.div>
                <p className="mt-5 text-[12px] font-bold uppercase tracking-[0.14em] text-brand">{t('celebrate.newStatus')}</p>
                <h3 className="mt-1 text-[24px] font-bold tracking-[-0.03em]">{tk(`gamify.status.${current.key}`)}</h3>
                <p className="mt-1.5 text-[14px] text-muted">{st.nextKey ? t('celebrate.toNext', { name: tk(`gamify.status.${st.nextKey}`), count: st.toNext }) : t('celebrate.max')}</p>
              </>
            )}
            {current.kind === 'day' && (
              <>
                <div className="mb-4 flex justify-center">
                  <CompassMark size={56} />
                </div>
                <BoardingPass count={current.count} best={current.best} />
              </>
            )}
            {current.kind === 'plus' && (
              <>
                <motion.div
                  className="mx-auto grid size-24 place-items-center rounded-[30px] bg-gradient-to-br from-[#fcd34d] to-[#f59e0b] text-[#451a03] shadow-[0_14px_34px_-10px_rgba(245,158,11,0.8)]"
                  initial={{ rotate: -12, scale: 0.6 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 14 }}
                >
                  <Sparkles className="size-11" />
                </motion.div>
                <h3 className="mt-5 text-[24px] font-bold tracking-[-0.03em]">{t('plus.welcome')}</h3>
                <p className="mt-1.5 text-[14px] text-muted">{t('plus.activeText')}</p>
              </>
            )}
            <Button className="mt-6 w-full" size="lg" variant={current.kind === 'plus' ? 'gold' : 'primary'} onClick={next}>
              {current.kind === 'day' ? t('celebrate.letsGo') : t('celebrate.great')}
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function RewardToasts() {
  const rewards = useUI((s) => s.rewards);
  const drop = useUI((s) => s.dropReward);
  const { t, tk } = useI18n();
  useEffect(() => {
    if (!rewards.length) return;
    const timer = setTimeout(() => drop(rewards[0]!.id), 1800);
    return () => clearTimeout(timer);
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
            <span className="flex h-7 items-center gap-1 rounded-full bg-gradient-to-b from-[#2dd4bf] to-[#0f766e] px-2 text-[12px] font-black">
              <Plane className="size-3 fill-white" /> {t('common.plusMiles', { count: r.miles })}
            </span>
            <span className="text-[13px] font-semibold">{tk(r.labelKey, r.vars)}</span>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
