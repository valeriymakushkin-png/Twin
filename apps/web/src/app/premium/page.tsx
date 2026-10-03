'use client';

import { motion } from 'framer-motion';
import { Check, Minus, Sparkles, Star } from 'lucide-react';
import { CREDIT_COSTS, PLAN_ENTITLEMENTS, STAR_PRODUCTS, type StarProductId } from '@mascot/shared';
import { LogoMark } from '@/components/brand/logo';
import { AppShell } from '@/components/layout/app-shell';
import { PricingCards } from '@/components/landing/sections';
import { usePurchase } from '@/components/paywall/purchase';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, ScreenTitle, SectionTitle } from '@/components/ui/card';
import { formatDate, formatStars } from '@/lib/format';
import { useT, type Dict } from '@/lib/i18n';
import { useProfile } from '@/lib/queries';
import { useRouter } from 'next/navigation';

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
  if (value === UNLIMITED) return <span className="font-semibold">{t.premium.unlimited}</span>;
  if (value === ALL_STYLES) return <span className="font-semibold">{t.premium.allStyles}</span>;
  if (value === true) return <Check className="mx-auto size-4 text-brand" strokeWidth={3} />;
  if (value === false) return <Minus className="mx-auto size-4 text-faint" />;
  return <span className="font-medium">{value}</span>;
}

export default function PremiumPage() {
  const { data: profile } = useProfile();
  const { purchase, pending } = usePurchase();
  const router = useRouter();
  const isPremium = profile?.plan === 'PREMIUM';
  const credits: StarProductId[] = ['credits_60', 'credits_200', 'credits_600'];
  const { t, f } = useT();
  const yearly = STAR_PRODUCTS.premium_yearly;

  return (
    <AppShell>
      <ScreenTitle
        title={t.premium.plansTitle}
        subtitle={t.premium.subtitle}
        right={isPremium && profile?.premiumUntil ? <Badge tone="brand" className="mt-1.5 shrink-0">{f(t.premium.activeUntil, { date: formatDate(profile.premiumUntil) })}</Badge> : undefined}
      />

      <PricingCards onFree={() => router.push('/create')} onPremium={() => purchase('premium_monthly')} />

      <Card className="mt-2.5 flex items-center gap-3 p-4">
        <LogoMark className="size-9" />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[14.5px] font-bold">
            <span className="whitespace-nowrap">{t.premium.yearly}</span>
            <Badge tone="premium" className="whitespace-nowrap">{t.premium.save}</Badge>
          </div>
          <p className="mt-0.5 text-[11.5px] leading-snug text-muted">{t.premium.yearlyDesc}</p>
        </div>
        <Button size="sm" variant="outline" loading={pending === 'premium_yearly'} onClick={() => purchase('premium_yearly')}>
          <Star className="size-3.5 fill-star text-star" />
          {formatStars(yearly.stars)}
        </Button>
      </Card>

      <section className="mt-8">
        <SectionTitle title={t.premium.compare} />
        <Card className="overflow-hidden">
          <div className="grid grid-cols-[1fr_72px_96px] border-b border-line px-4 py-2.5 text-[11px] font-semibold uppercase tracking-wider text-muted">
            <span />
            <span className="text-center">{t.common.free}</span>
            <span className="text-center text-brand">{t.common.premium}</span>
          </div>
          {ROWS.map((row) => (
            <div key={row.key} className="grid grid-cols-[1fr_72px_96px] items-center border-b border-line/60 px-4 py-2.5 text-[13px] last:border-0">
              <span className="text-ink-2">{t.premium.rows[row.key]}</span>
              <span className="text-center text-muted">
                <Cell value={row.free} />
              </span>
              <span className="text-center">
                <Cell value={row.premium} />
              </span>
            </div>
          ))}
        </Card>
      </section>

      <section className="mt-8">
        <SectionTitle title={t.premium.creditsTitle} action={<span className="text-[12px] text-muted">{f(t.premium.balance, { credits: profile?.credits ?? 0 })}</span>} />
        <p className="-mt-1 mb-3 px-0.5 text-[12px] leading-relaxed text-muted">
          {f(t.premium.creditPrices, { sticker: CREDIT_COSTS.sticker, style: CREDIT_COSTS.styleRender, pfp: CREDIT_COSTS.aiProfilePicture, video: CREDIT_COSTS.videoUnit, mascot: CREDIT_COSTS.extraAvatar })}
        </p>
        <div className="grid grid-cols-3 gap-2">
          {credits.map((id) => {
            const p = STAR_PRODUCTS[id];
            return (
              <motion.button key={id} whileTap={{ scale: 0.95 }} disabled={pending !== null} onClick={() => purchase(id)} className="card relative flex flex-col items-center rounded-2xl px-2 py-4">
                {p.badge && <span className="absolute -top-2 rounded-full bg-brand-grad px-2 text-[10px] font-bold text-white shadow-red">{id === 'credits_600' ? t.premium.bestValue : p.badge}</span>}
                <Sparkles className="size-5 text-brand" />
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
      <p className="mt-8 px-4 text-center text-[11px] leading-relaxed text-faint">{t.premium.footnote}</p>
    </AppShell>
  );
}
