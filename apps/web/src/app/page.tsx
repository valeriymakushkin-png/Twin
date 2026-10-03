'use client';

import { motion } from 'framer-motion';
import { ChevronRight, Clapperboard, Crown, Gift, Image as ImageIcon, Laugh, Plus, Smile } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { getStyleRecipe, type AvatarDto } from '@mascot/shared';
import { Logo } from '@/components/brand/logo';
import { Hero } from '@/components/landing/hero';
import { HowItWorks, PricingCards, Slogan, StickersShowcase, StylesStrip, UseEverywhere } from '@/components/landing/sections';
import { AppShell } from '@/components/layout/app-shell';
import { MascotTile } from '@/components/mascot/mascot-tile';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, SectionTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/misc';
import { miniAppLink } from '@/lib/env';
import { useT } from '@/lib/i18n';
import { styleName } from '@/lib/i18n/catalog';
import { useAvatars, useProfile } from '@/lib/queries';
import { openTelegramLink } from '@/lib/telegram';
import { useAuth } from '@/providers/auth-provider';

function Landing({ onCreate, outside }: { onCreate: () => void; outside: boolean }) {
  const { t } = useT();
  const router = useRouter();
  const cta = outside ? t.landing.ctaTelegram : t.landing.cta;
  return (
    <>
      <Hero onCreate={onCreate} ctaLabel={cta} />
      <HowItWorks />
      <StylesStrip />
      <StickersShowcase />
      <UseEverywhere />
      <section className="mt-10">
        <SectionTitle title={t.landing.pricingTitle} />
        <PricingCards onFree={onCreate} onPremium={() => (outside ? onCreate() : router.push('/premium'))} />
      </section>
      <Card className="relative mt-10 overflow-hidden p-6 text-center">
        <div className="glow-red absolute left-1/2 top-0 size-[300px] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-60 blur-xl" />
        <h3 className="relative text-[20px] font-bold tracking-[-0.02em]">{t.landing.finalTitle}</h3>
        <p className="relative mt-1 text-[13px] text-muted">{t.landing.finalBody}</p>
        <Button size="lg" block className="relative mt-5" onClick={onCreate}>
          {cta}
        </Button>
      </Card>
      <Slogan />
    </>
  );
}

const QUICK = [
  { key: 'stickers', icon: Smile, premium: false },
  { key: 'memes', icon: Laugh, premium: false },
  { key: 'videos', icon: Clapperboard, premium: true },
  { key: 'pfp', icon: ImageIcon, premium: false },
] as const;

function PrimaryCard({ avatar }: { avatar: AvatarDto }) {
  const tr = useT();
  const style = getStyleRecipe(avatar.styleSlug);
  return (
    <Link href={`/mascot/${avatar.id}`} className="block">
      <motion.div whileTap={{ scale: 0.985 }} className="card relative overflow-hidden rounded-[26px]">
        <div className="glow-red absolute left-1/2 top-[45%] size-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-xl" />
        {avatar.imageUrl && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={avatar.imageUrl} alt={avatar.name} className="fade-bottom relative mx-auto aspect-square w-[82%] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]" />
        )}
        <div className="relative flex items-center gap-3 border-t border-white/5 bg-black/30 px-4 py-3 backdrop-blur">
          <div className="min-w-0 flex-1">
            <div className="truncate text-[16px] font-bold">{avatar.name}</div>
            <div className="text-[12px] text-muted">{styleName(tr, avatar.styleSlug, style?.name ?? avatar.styleSlug)}</div>
          </div>
          <span className="grid size-9 place-items-center rounded-full bg-brand-grad text-white shadow-red">
            <ChevronRight className="size-4" />
          </span>
        </div>
      </motion.div>
    </Link>
  );
}

function Dashboard() {
  const { data: avatars, isLoading } = useAvatars();
  const { data: profile } = useProfile();
  const router = useRouter();
  const { t, f } = useT();
  const ready = avatars?.filter((a) => a.status === 'READY') ?? [];
  const primary = ready[0];

  return (
    <>
      <div className="flex items-center justify-between py-4">
        <Logo />
        {profile?.plan === 'PREMIUM' ? (
          <Badge tone="brand" icon={<Crown className="size-3" />}>
            {t.common.premium}
          </Badge>
        ) : (
          <Link href="/premium">
            <Badge tone="premium" icon={<Crown className="size-3" />}>
              {t.common.goPremium}
            </Badge>
          </Link>
        )}
      </div>
      <h1 className="text-[26px] font-extrabold tracking-[-0.035em]">{f(t.home.greeting, { name: profile?.firstName ?? t.home.greetingFallback })}</h1>
      <p className="text-[13.5px] text-muted">{t.home.prompt}</p>

      {primary && (
        <section className="mt-5">
          <PrimaryCard avatar={primary} />
          <div className="mt-2.5 grid grid-cols-4 gap-2">
            {QUICK.map(({ key, icon: Icon, premium }) => (
              <motion.button
                key={key}
                whileTap={{ scale: 0.94 }}
                onClick={() => router.push(`/mascot/${primary.id}/${key}`)}
                className="card relative flex flex-col items-center gap-1.5 rounded-2xl py-3.5 text-[11px] font-semibold"
              >
                <span className="grid size-9 place-items-center rounded-xl bg-brand/12 text-brand ring-1 ring-brand/25">
                  <Icon className="size-[18px]" />
                </span>
                {t.home.quick[key]}
                {premium && profile?.plan !== 'PREMIUM' && <Crown className="absolute right-1.5 top-1.5 size-3 text-brand" />}
              </motion.button>
            ))}
          </div>
        </section>
      )}

      <section className="mt-7">
        <SectionTitle title={t.home.myMascots} action={<span className="text-[12px] text-muted">{avatars?.length ?? 0}</span>} />
        {isLoading ? (
          <div className="grid grid-cols-2 gap-3">
            <Skeleton className="aspect-[4/5]" />
            <Skeleton className="aspect-[4/5]" />
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3">
            {avatars?.map((a) => <MascotTile key={a.id} avatar={a} />)}
            <motion.div whileTap={{ scale: 0.97 }}>
              <Link href="/create" className="flex aspect-[4/5] flex-col items-center justify-center gap-2.5 rounded-[22px] border border-dashed border-brand/35 bg-brand/[0.04] text-muted">
                <span className="grid size-12 place-items-center rounded-2xl bg-brand-grad text-white shadow-red">
                  <Plus className="size-5" />
                </span>
                <span className="text-[13px] font-semibold text-ink-2">{t.home.newMascot}</span>
              </Link>
            </motion.div>
          </div>
        )}
      </section>

      {profile && (
        <Card className="mt-7 flex items-center gap-3 p-4">
          <span className="grid size-11 place-items-center rounded-2xl bg-brand/12 text-brand ring-1 ring-brand/25">
            <Gift className="size-5" />
          </span>
          <div className="flex-1">
            <div className="text-[14px] font-bold">{t.home.inviteTitle}</div>
            <div className="text-[12px] text-muted">{t.home.inviteBody}</div>
          </div>
          <Button size="sm" variant="outline" onClick={() => router.push('/profile#invite')}>
            {t.home.invite}
          </Button>
        </Card>
      )}
    </>
  );
}

export default function HomePage() {
  const { status } = useAuth();
  const { data: avatars, isLoading } = useAvatars(status === 'authenticated');
  const router = useRouter();
  const outside = status === 'outside-telegram';
  const hasMascots = (avatars?.length ?? 0) > 0;

  const onCreate = () => (outside ? openTelegramLink(miniAppLink('src_web')) : router.push('/create'));

  if (status === 'authenticated' && (isLoading || hasMascots)) {
    return <AppShell>{isLoading ? <Skeleton className="mt-20 h-64" /> : <Dashboard />}</AppShell>;
  }
  return (
    <AppShell tabs={status === 'authenticated'}>
      <Landing onCreate={onCreate} outside={outside} />
    </AppShell>
  );
}
