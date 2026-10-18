'use client';

import { motion } from 'framer-motion';
import { BadgeCheck, BookOpen, Check, CloudOff, Lock, Palette, Route, Share2, ShieldCheck, Sparkles, type LucideIcon } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import type { Locale } from '@/i18n/config';
import { useI18n } from '@/i18n/use';
import { cn } from '@/lib/utils';
import { useApp } from '@/store/app';
import { useUI } from '@/store/ui';
import { Button } from './ui';

/** Regional pricing — set per storefront in production. */
export function plusPricing(locale: Locale) {
  return locale === 'ru' ? { currency: 'RUB', monthly: 299, yearly: 1990 } : { currency: 'EUR', monthly: 4.99, yearly: 29.99 };
}

const features: { icon: LucideIcon; key: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 }[] = [
  { icon: Route, key: 1 },
  { icon: CloudOff, key: 2 },
  { icon: BookOpen, key: 3 },
  { icon: Share2, key: 4 },
  { icon: ShieldCheck, key: 5 },
  { icon: Lock, key: 6 },
  { icon: Palette, key: 7 },
  { icon: BadgeCheck, key: 8 },
];

export function Paywall({ onDone }: { onDone?: () => void }) {
  const { t, tk, f, locale } = useI18n();
  const plus = useApp((s) => s.plus);
  const startPlus = useApp((s) => s.startPlus);
  const stopPlus = useApp((s) => s.stopPlus);
  const [plan, setPlan] = useState<'monthly' | 'yearly'>('yearly');
  const p = plusPricing(locale);
  const save = Math.round((1 - p.yearly / (p.monthly * 12)) * 100);

  return (
    <div className="px-5 pb-6">
      <div className="relative overflow-hidden rounded-[28px] bg-[radial-gradient(120%_100%_at_0%_0%,#312e81_0%,#0f172a_60%)] p-5 text-white">
        <div className="absolute -right-10 -top-10 size-40 rounded-full bg-[#f59e0b]/25 blur-2xl" />
        <span className="relative inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-[#fcd34d] to-[#f59e0b] px-2.5 py-1 text-[11px] font-black text-[#451a03]">
          <Sparkles className="size-3" /> {t('plus.name')}
        </span>
        <h2 className="relative mt-3 text-[26px] font-bold leading-tight tracking-[-0.03em]">{t('plus.title')}</h2>
        <p className="relative mt-1.5 text-[14px] text-white/75">{t('plus.subtitle')}</p>
      </div>

      <div className="mt-4 grid gap-1.5">
        {features.map((ft, i) => (
          <motion.div key={ft.key} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.03 }} className="flex items-start gap-3 rounded-2xl px-1 py-2">
            <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-amber-50 text-amber">
              <ft.icon className="size-[18px]" />
            </span>
            <span className="min-w-0">
              <span className="block text-[14px] font-semibold">{tk(`plus.f${ft.key}`)}</span>
              <span className="block text-[12px] leading-snug text-muted">{tk(`plus.f${ft.key}t`)}</span>
            </span>
          </motion.div>
        ))}
      </div>

      {plus.active ? (
        <div className="mt-4 rounded-[24px] bg-mint-50 p-4 text-center">
          <p className="flex items-center justify-center gap-1.5 text-[15px] font-bold text-mint">
            <Check className="size-5" strokeWidth={3} /> {t('plus.active')}
          </p>
          <p className="mt-1 text-[13px] text-muted">{t('plus.activeText')}</p>
          <Button variant="ghost" size="sm" className="mt-2" onClick={stopPlus}>
            {t('plus.cancel')}
          </Button>
        </div>
      ) : (
        <>
          <div className="mt-4 grid grid-cols-2 gap-2.5">
            {(['monthly', 'yearly'] as const).map((k) => (
              <button
                key={k}
                onClick={() => setPlan(k)}
                className={cn('press relative rounded-[22px] p-3.5 text-left ring-1 transition-all', plan === k ? 'bg-amber-50 ring-2 ring-amber' : 'bg-white ring-line')}
              >
                {k === 'yearly' && <span className="absolute -top-2.5 right-3 rounded-full bg-amber px-2 py-0.5 text-[10px] font-black text-white">{t('plus.saveBadge', { pct: save })}</span>}
                <span className="block text-[13px] font-semibold text-muted">{t(k === 'monthly' ? 'plus.monthly' : 'plus.yearly')}</span>
                <span className="mt-0.5 block text-[18px] font-bold">{f.money(p[k], p.currency)}</span>
                <span className="block text-[11px] text-muted">
                  {k === 'yearly' ? t('plus.perMonth', { price: f.money(Math.round((p.yearly / 12) * 100) / 100, p.currency) }) : t('plus.perMonth', { price: f.money(p.monthly, p.currency) })}
                </span>
              </button>
            ))}
          </div>
          <Button
            variant="gold"
            size="lg"
            className="mt-4 w-full"
            onClick={() => {
              startPlus(plan);
              toast.success(t('plus.welcome'));
              onDone?.();
            }}
          >
            {t('plus.cta')}
          </Button>
          <p className="mt-2 text-center text-[12px] text-muted">{t('plus.trial', { price: plan === 'yearly' ? t('plus.perYear', { price: f.money(p.yearly, p.currency) }) : t('plus.perMonth', { price: f.money(p.monthly, p.currency) }) })}</p>
          <p className="mt-3 rounded-2xl bg-surface-2/70 p-3 text-center text-[11px] leading-relaxed text-muted">{t('plus.demoNote')}</p>
        </>
      )}
    </div>
  );
}

/** Soft lock: shows what Plus unlocks instead of a dead end. */
export function PlusLock({ className, compact }: { className?: string; compact?: boolean }) {
  const { t } = useI18n();
  const openSheet = useUI((s) => s.openSheet);
  return (
    <div className={cn('rounded-[24px] bg-gradient-to-br from-amber-50 to-white p-4 text-center ring-1 ring-amber/20', className)}>
      <span className="mx-auto grid size-11 place-items-center rounded-2xl bg-gradient-to-br from-[#fcd34d] to-[#f59e0b] text-[#451a03]">
        <Lock className="size-5" />
      </span>
      <p className="mt-2 text-[15px] font-bold">{t('plus.lockedTitle')}</p>
      {!compact && <p className="mt-0.5 text-[13px] text-muted">{t('plus.lockedText')}</p>}
      <Button variant="gold" size="sm" className="mt-3" onClick={() => openSheet({ type: 'paywall' })}>
        <Sparkles className="size-4" /> {t('plus.unlock')}
      </Button>
    </div>
  );
}

export function usePlus() {
  const active = useApp((s) => s.plus.active);
  const openSheet = useUI((s) => s.openSheet);
  /** Run `fn` with Plus, otherwise open the paywall. */
  const gate = (fn: () => void) => (active ? fn() : openSheet({ type: 'paywall' }));
  return { active, gate };
}
