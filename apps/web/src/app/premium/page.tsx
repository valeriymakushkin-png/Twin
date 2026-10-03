'use client';

import { motion } from 'framer-motion';
import { Check, Crown, Minus, Sparkles, Star } from 'lucide-react';
import { CREDIT_COSTS, PLAN_ENTITLEMENTS, STAR_PRODUCTS, type StarProductId } from '@mascot/shared';
import { Aurora } from '@/components/brand/aurora';
import { AppShell } from '@/components/layout/app-shell';
import { usePurchase } from '@/components/paywall/purchase';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, SectionTitle } from '@/components/ui/card';
import { formatDate, formatStars } from '@/lib/format';
import { useProfile } from '@/lib/queries';
import { useT, type Dict } from '@/lib/i18n';

const free = PLAN_ENTITLEMENTS.FREE;
const pro = PLAN_ENTITLEMENTS.PREMIUM;

const UNLIMITED = Symbol('unlimited');
const ALL_STYLES = Symbol('all-styles');
type CellValue = string | boolean | typeof UNLIMITED | typeof ALL_STYLES;

const ROWS: Array<{ key: keyof Dict['premium']['rows']; free: CellValue; premium: CellValue }> = [
  { key: 'mascots', free: `${free.maxAvatars}`, premium: UNLIMITED },
  { key: 'styles', free: '3', premium: ALL_STYLES },
  { key: 'stickers', free: `${free.stickerAllowance}`, premium: UNLIMITED },
  { key: 'memes', free: `${free.memesPerDay}`, premium: UNLIMITED },
  { key: 'videos', free: false, premium: `${pro.videoUnitsPerMonth}` },
  { key: 'aiPfp', free: false, premium: true },
  { key: 'wardrobe', free: false, premium: true },
  { key: 'hd', free: false, premium: true },
  { key: 'watermark', free: false, premium: true },
  { key: 'priority', free: false, premium: true },
];

function Cell({ value }: { value: CellValue }) {
  const { t } = useT();
  if (value === UNLIMITED) return <span className="font-medium">{t.premium.unlimited}</span>;
  if (value === ALL_STYLES) return <span className="font-medium">{t.premium.allStyles}</span>;
  if (value === true) return <Check className="mx-auto size-4 text-emerald-300" strokeWidth={3} />;
  if (value === false) return <Minus className="mx-auto size-4 text-faint" />;
  return <span className="font-medium">{value}</span>;
}

export default function PremiumPage() {
  const { data: profile } = useProfile();
  const { purchase, pending } = usePurchase();
  const isPremium = profile?.plan === 'PREMIUM';
  const credits: StarProductId[] = ['credits_60', 'credits_200', 'credits_600'];
  const { t, f } = useT();

  return (
    <AppShell>
      <section className="relative -mx-4 overflow-hidden px-4 pb-6 pt-8 text-center">
        <Aurora intensity={0.9} />
        <motion.div initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="mx-auto grid size-16 place-items-center rounded-3xl bg-gradient-to-br from-amber-300 to-orange-500 text-black shadow-[0_16px_50px_-12px_rgba(251,191,36,0.8)]">
          <Crown className="size-8" />
        </motion.div>
        <h1 className="mt-5 text-[30px] font-semibold tracking-[-0.035em]">{t.premium.title} <span className="text-aurora">{t.premium.titleAccent}</span></h1>
        <p className="mx-auto mt-2 max-w-[300px] text-[14px] text-ink-2">{t.premium.subtitle}</p>
        {isPremium && profile?.premiumUntil && (
          <Badge tone="premium" className="mt-4">{f(t.premium.activeUntil, { date: formatDate(profile.premiumUntil) })}</Badge>
        )}
      </section>

      <div className="space-y-2.5">
        {(['premium_monthly', 'premium_yearly'] as const).map((id) => {
          const p = STAR_PRODUCTS[id];
          const featured = id === 'premium_monthly';
          return (
            <Card key={id} className={featured ? 'border-amber-300/30 p-4' : 'p-4'}>
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 text-[15px] font-semibold">
                    {id === 'premium_monthly' ? t.premium.monthly : t.premium.yearly}
                    {p.badge && <Badge tone={featured ? 'premium' : 'success'}>{featured ? t.premium.mostPopular : t.premium.save}</Badge>}
                  </div>
                  <p className="mt-1 max-w-[230px] text-[12px] text-muted">{featured ? t.premium.monthlyDesc : t.premium.yearlyDesc}</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center justify-end gap-1 font-mono text-xl font-semibold">
                    <Star className="size-4 fill-star text-star" />
                    {formatStars(p.stars)}
                  </div>
                  <div className="text-[11px] text-muted">{id === 'premium_monthly' ? t.premium.perPeriod : t.premium.oneTime}</div>
                </div>
              </div>
              <Button
                block
                className="mt-4"
                variant={featured ? 'star' : 'secondary'}
                disabled={isPremium && id === 'premium_monthly' && profile?.subscription?.isRecurring}
                loading={pending === id}
                onClick={() => purchase(id)}
              >
                {isPremium && id === 'premium_monthly' && profile?.subscription?.isRecurring ? t.premium.current : isPremium ? t.premium.extend : t.premium.get}
              </Button>
            </Card>
          );
        })}
      </div>

      <section className="mt-8">
        <SectionTitle title={t.premium.compare} />
        <Card className="overflow-hidden">
          <div className="grid grid-cols-[1fr_72px_96px] border-b border-line px-4 py-2.5 text-[11px] font-semibold uppercase tracking-wider text-muted">
            <span />
            <span className="text-center">{t.common.free}</span>
            <span className="text-center text-amber-300">{t.common.premium}</span>
          </div>
          {ROWS.map((row) => (
            <div key={row.key} className="grid grid-cols-[1fr_72px_96px] items-center border-b border-line/60 px-4 py-2.5 text-[13px] last:border-0">
              <span className="text-ink-2">{t.premium.rows[row.key]}</span>
              <span className="text-center text-muted"><Cell value={row.free} /></span>
              <span className="text-center"><Cell value={row.premium} /></span>
            </div>
          ))}
        </Card>
      </section>

      <section className="mt-8">
        <SectionTitle title={t.premium.creditsTitle} action={<span className="text-[12px] text-muted">{f(t.premium.balance, { credits: profile?.credits ?? 0 })}</span>} />
        <p className="-mt-1 mb-3 px-1 text-[12px] leading-relaxed text-muted">
          {f(t.premium.creditPrices, {
            sticker: CREDIT_COSTS.sticker,
            style: CREDIT_COSTS.styleRender,
            pfp: CREDIT_COSTS.aiProfilePicture,
            video: CREDIT_COSTS.videoUnit,
            mascot: CREDIT_COSTS.extraAvatar,
          })}
        </p>
        <div className="grid grid-cols-3 gap-2">
          {credits.map((id) => {
            const p = STAR_PRODUCTS[id];
            return (
              <motion.button
                key={id}
                whileTap={{ scale: 0.95 }}
                disabled={pending !== null}
                onClick={() => purchase(id)}
                className="glass relative flex flex-col items-center rounded-2xl px-2 py-4"
              >
                {p.badge && <span className="absolute -top-2 rounded-full bg-emerald-400 px-2 text-[10px] font-bold text-black">{id === 'credits_600' ? t.premium.bestValue : p.badge}</span>}
                <Sparkles className="size-5 text-fuchsia-300" />
                <span className="mt-1.5 font-mono text-lg font-semibold">{p.credits}</span>
                <span className="text-[11px] text-muted">{t.common.credits}</span>
                <span className="mt-2 flex items-center gap-1 text-[12px] font-semibold">
                  <Star className="size-3 fill-star text-star" />
                  {formatStars(p.stars)}
                </span>
              </motion.button>
            );
          })}
        </div>
      </section>
      <p className="mt-8 px-4 text-center text-[11px] leading-relaxed text-faint">
        {t.premium.footnote}
      </p>
    </AppShell>
  );
}
