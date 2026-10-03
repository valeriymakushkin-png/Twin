'use client';

import { motion } from 'framer-motion';
import { Clapperboard, Crown, Image as ImageIcon, Laugh, Plus, Smile, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { SHOWCASE_DNA } from '@mascot/shared';
import { Logo } from '@/components/brand/logo';
import { BeforeAfter } from '@/components/landing/before-after';
import { Hero } from '@/components/landing/hero';
import { HowItWorks, ShowcaseMarquee, StylesStrip, WhatYouGet } from '@/components/landing/sections';
import { AppShell } from '@/components/layout/app-shell';
import { MascotTile } from '@/components/mascot/mascot-tile';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, SectionTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/misc';
import { miniAppLink } from '@/lib/env';
import { useAvatars, useProfile } from '@/lib/queries';
import { openTelegramLink } from '@/lib/telegram';
import { useAuth } from '@/providers/auth-provider';

function Landing({ onCreate, outside }: { onCreate: () => void; outside: boolean }) {
  return (
    <>
      <Hero onCreate={onCreate} ctaLabel={outside ? 'Open in Telegram' : 'Create My Mascot'} />
      <ShowcaseMarquee />
      <section className="mt-10">
        <SectionTitle title="Before → After" action={<span className="text-[12px] text-muted">drag to compare</span>} />
        <BeforeAfter
          dna={SHOWCASE_DNA[0]!.dna}
          styleSlug="pixar"
          beforeUrl={process.env.NEXT_PUBLIC_SHOWCASE_BEFORE}
          afterUrl={process.env.NEXT_PUBLIC_SHOWCASE_AFTER}
        />
      </section>
      <HowItWorks />
      <WhatYouGet />
      <StylesStrip />
      <Card className="relative mt-10 overflow-hidden p-6 text-center">
        <div className="absolute inset-0 -z-10 bg-aurora opacity-20" />
        <h3 className="text-xl font-semibold tracking-[-0.02em]">Ready to meet your mascot?</h3>
        <p className="mt-1 text-[13px] text-muted">Your first mascot and 5 stickers are free.</p>
        <Button size="lg" block className="mt-5" onClick={onCreate} icon={<Sparkles className="size-4" />}>
          {outside ? 'Open in Telegram' : 'Create My Mascot'}
        </Button>
      </Card>
    </>
  );
}

const QUICK = [
  { key: 'stickers', label: 'Stickers', icon: Smile, color: 'text-pink-300' },
  { key: 'memes', label: 'Memes', icon: Laugh, color: 'text-amber-300' },
  { key: 'pfp', label: 'Profile pic', icon: ImageIcon, color: 'text-sky-300' },
  { key: 'videos', label: 'Video', icon: Clapperboard, color: 'text-violet-300', premium: true },
];

function Dashboard() {
  const { data: avatars, isLoading } = useAvatars();
  const { data: profile } = useProfile();
  const router = useRouter();
  const ready = avatars?.filter((a) => a.status === 'READY') ?? [];
  const primary = ready[0];

  return (
    <>
      <div className="flex items-center justify-between py-4">
        <Logo />
        {profile?.plan === 'PREMIUM' ? (
          <Badge tone="premium" icon={<Crown className="size-3" />}>Premium</Badge>
        ) : (
          <Link href="/premium">
            <Badge tone="premium" icon={<Crown className="size-3" />}>Go Premium</Badge>
          </Link>
        )}
      </div>
      <h1 className="mt-1 text-[26px] font-semibold tracking-[-0.03em]">Hey {profile?.firstName ?? 'there'} 👋</h1>
      <p className="text-[13px] text-muted">What are we making today?</p>

      {primary && (
        <section className="mt-5 grid grid-cols-4 gap-2">
          {QUICK.map(({ key, label, icon: Icon, color, premium }) => (
            <motion.button
              key={key}
              whileTap={{ scale: 0.94 }}
              onClick={() => router.push(`/mascot/${primary.id}/${key}`)}
              className="glass relative flex flex-col items-center gap-1.5 rounded-2xl py-3.5 text-[11px] font-semibold"
            >
              <Icon className={`size-[22px] ${color}`} />
              {label}
              {premium && profile?.plan !== 'PREMIUM' && <span className="absolute right-1.5 top-1.5 text-[9px] text-amber-300">★</span>}
            </motion.button>
          ))}
        </section>
      )}

      <section className="mt-7">
        <SectionTitle title="My mascots" action={<span className="text-[12px] text-muted">{avatars?.length ?? 0}</span>} />
        {isLoading ? (
          <div className="grid grid-cols-2 gap-3">
            <Skeleton className="aspect-[4/5]" />
            <Skeleton className="aspect-[4/5]" />
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3">
            {avatars?.map((a) => <MascotTile key={a.id} avatar={a} />)}
            <motion.div whileTap={{ scale: 0.97 }}>
              <Link href="/create" className="flex aspect-[4/5] flex-col items-center justify-center gap-2 rounded-3xl border border-dashed border-line-strong text-muted">
                <span className="grid size-11 place-items-center rounded-2xl bg-aurora text-white">
                  <Plus className="size-5" />
                </span>
                <span className="text-[13px] font-semibold text-ink-2">New mascot</span>
              </Link>
            </motion.div>
          </div>
        )}
      </section>

      {profile && (
        <Card className="mt-7 flex items-center gap-3 p-4">
          <span className="grid size-10 place-items-center rounded-xl bg-emerald-400/15 text-xl">🎁</span>
          <div className="flex-1">
            <div className="text-[14px] font-semibold">Invite friends, get credits</div>
            <div className="text-[12px] text-muted">+20 credits for every friend who makes a mascot</div>
          </div>
          <Button size="sm" variant="secondary" onClick={() => router.push('/profile#invite')}>
            Invite
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
