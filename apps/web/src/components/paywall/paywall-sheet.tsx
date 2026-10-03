'use client';

import { motion } from 'framer-motion';
import { Check, Crown, Sparkles, Star } from 'lucide-react';
import Link from 'next/link';
import { STAR_PRODUCTS, type PaywallReason } from '@mascot/shared';
import { Button } from '@/components/ui/button';
import { Sheet } from '@/components/ui/sheet';
import { useProfile } from '@/lib/queries';
import { usePaywall } from '@/store/paywall';
import { usePurchase } from './purchase';

const HEADLINES: Partial<Record<PaywallReason, string>> = {
  AVATAR_LIMIT: 'Create unlimited mascots',
  STICKER_LIMIT: 'Unlock the full sticker pack',
  PREMIUM_STYLE: 'Unlock every style',
  PREMIUM_WARDROBE: 'Premium outfits & poses',
  VIDEO_PREMIUM_ONLY: 'Bring your mascot to life',
  VIDEO_QUOTA: 'More videos this month',
  HD_EXPORT: 'Export in HD',
  AI_PFP_PREMIUM: 'AI profile pictures',
  DAILY_LIMIT: 'Keep creating today',
};

export const PREMIUM_PERKS = [
  'Unlimited mascots & all 11 styles',
  'Unlimited sticker packs',
  'Video generation (20/month)',
  'HD transparent export, no watermark',
  'Premium outfits & poses',
  'Priority queue — 3× faster',
];

export function PaywallSheet() {
  const { open, reason, message, close } = usePaywall();
  const { data: profile } = useProfile();
  const { purchase, pending } = usePurchase(close);
  const monthly = STAR_PRODUCTS.premium_monthly;
  const yearly = STAR_PRODUCTS.premium_yearly;
  const showCredits = reason === 'VIDEO_QUOTA' || reason === 'INSUFFICIENT_CREDITS' || reason === 'STICKER_LIMIT';

  return (
    <Sheet open={open} onClose={close} title={null}>
      <div className="relative -mt-2 overflow-hidden rounded-3xl border border-amber-300/20 bg-gradient-to-b from-amber-300/10 to-transparent p-5 text-center">
        <motion.div
          initial={{ scale: 0.6, rotate: -12, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 16 }}
          className="mx-auto mb-3 grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-amber-300 to-orange-500 text-black shadow-[0_12px_40px_-10px_rgba(251,191,36,0.8)]"
        >
          <Crown className="size-7" />
        </motion.div>
        <h3 className="text-xl font-semibold tracking-[-0.02em]">{(reason && HEADLINES[reason]) ?? 'Go Premium'}</h3>
        {message && <p className="mx-auto mt-1.5 max-w-[280px] text-[13px] text-muted">{message}</p>}
      </div>

      <ul className="mt-5 space-y-2.5">
        {PREMIUM_PERKS.map((perk) => (
          <li key={perk} className="flex items-center gap-3 text-[14px] text-ink-2">
            <span className="grid size-5 place-items-center rounded-full bg-emerald-400/15 text-emerald-300">
              <Check className="size-3" strokeWidth={3} />
            </span>
            {perk}
          </li>
        ))}
      </ul>

      <div className="mt-6 space-y-2.5">
        <Button variant="star" size="lg" block loading={pending === 'premium_monthly'} onClick={() => purchase('premium_monthly')} icon={<Star className="size-4 fill-black" />}>
          {monthly.stars} Stars / month
        </Button>
        <Button variant="secondary" size="lg" block loading={pending === 'premium_yearly'} onClick={() => purchase('premium_yearly')}>
          <span>12 months · {yearly.stars} Stars</span>
          <span className="ml-1 rounded-full bg-emerald-400/15 px-2 py-0.5 text-[11px] text-emerald-300">−33%</span>
        </Button>
        {showCredits && (
          <Button variant="ghost" block loading={pending === 'credits_200'} onClick={() => purchase('credits_200')} icon={<Sparkles className="size-4" />}>
            Or top up 200 credits · {STAR_PRODUCTS.credits_200.stars} ⭐
          </Button>
        )}
      </div>
      <p className="mt-4 text-center text-[11px] leading-relaxed text-faint">
        Paid with Telegram Stars. Subscription renews every 30 days, cancel anytime in Profile.
        {profile ? ` Balance: ${profile.credits} credits.` : ''}{' '}
        <Link href="/premium" onClick={close} className="text-ink-2 underline underline-offset-2">
          Compare plans
        </Link>
      </p>
    </Sheet>
  );
}
