'use client';

import { motion } from 'framer-motion';
import { Clapperboard, Crown, Download, IdCard, Image as ImageIcon, Laugh, Palette, Pencil, Share2, Smile } from 'lucide-react';
import Link from 'next/link';
import { useParams, useSearchParams } from 'next/navigation';
import { Suspense, useState } from 'react';
import { toast } from 'sonner';
import { getStyleRecipe } from '@mascot/shared';
import { AppShell } from '@/components/layout/app-shell';
import { CharacterCard } from '@/components/mascot/character-card';
import { Confetti } from '@/components/mascot/confetti';
import { ShareSheet } from '@/components/share/share-sheet';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { SectionTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/misc';
import { api, ApiRequestError } from '@/lib/api';
import { cn } from '@/lib/cn';
import { qk, useAvatar, useInvalidate, useProfile } from '@/lib/queries';
import { downloadFile, haptic } from '@/lib/telegram';
import { usePaywall } from '@/store/paywall';

const ACTIONS = [
  { key: 'stickers', label: 'Stickers', desc: 'Telegram pack', icon: Smile, tint: 'from-pink-500/25' },
  { key: 'memes', label: 'Memes', desc: 'Type & meme', icon: Laugh, tint: 'from-amber-500/25' },
  { key: 'pfp', label: 'Profile pics', desc: 'Backgrounds & poses', icon: ImageIcon, tint: 'from-sky-500/25' },
  { key: 'videos', label: 'Videos', desc: 'Dance, talk, promo', icon: Clapperboard, tint: 'from-violet-500/25', premium: true },
  { key: 'styles', label: 'Change style', desc: '11 styles', icon: Palette, tint: 'from-emerald-500/25' },
];

function MascotInner() {
  const { id } = useParams<{ id: string }>();
  const search = useSearchParams();
  const { data: avatar, isLoading } = useAvatar(id);
  const { data: profile } = useProfile();
  const invalidate = useInvalidate();
  const showPaywall = usePaywall((s) => s.show);
  const [shareOpen, setShareOpen] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const isNew = search.get('new') === '1';

  if (isLoading || !avatar) {
    return (
      <AppShell>
        <Skeleton className="mt-6 aspect-square w-full" />
        <Skeleton className="mt-4 h-24 w-full" />
      </AppShell>
    );
  }

  const style = getStyleRecipe(avatar.styleSlug);
  const primary = avatar.renders.find((r) => r.isPrimary) ?? avatar.renders[0];
  const premium = profile?.plan === 'PREMIUM';

  async function download() {
    if (!primary) return;
    setDownloading(true);
    try {
      if (premium) {
        const { url } = await api.avatars.hd(avatar!.id, primary.id);
        downloadFile(url, `${avatar!.name}-hd.png`);
      } else {
        downloadFile(primary.imageUrl, `${avatar!.name}.webp`);
        toast('Saved in standard quality', { description: 'Premium unlocks HD transparent PNG without watermark.' });
      }
    } catch (error) {
      if (!(error instanceof ApiRequestError && error.isPaywall)) toast.error('Download failed');
    } finally {
      setDownloading(false);
    }
  }

  async function rename() {
    const name = window.prompt('Rename your mascot', avatar!.name)?.trim();
    if (!name || name === avatar!.name) return;
    await api.avatars.rename(avatar!.id, name);
    await invalidate(qk.avatar(avatar!.id), qk.avatars);
  }

  async function makePrimary(renderId: string) {
    haptic.select();
    await api.avatars.setPrimary(avatar!.id, renderId);
    await invalidate(qk.avatar(avatar!.id), qk.avatars);
  }

  return (
    <AppShell>
      {isNew && <Confetti />}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 160, damping: 18 }}
        className="relative mt-4 overflow-hidden rounded-[32px] border border-white/10 shadow-glow"
        style={{ background: style ? `radial-gradient(120% 90% at 50% 10%, ${style.gradient[0]}, ${style.gradient[1]} 55%, #0b0b10 100%)` : '#16161e' }}
      >
        {avatar.imageUrl && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={avatar.imageUrl} alt={avatar.name} className="aspect-square w-full animate-float object-contain p-4" />
        )}
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/70 to-transparent p-4 pt-16">
          <div>
            <button onClick={rename} className="flex items-center gap-1.5 text-[22px] font-semibold tracking-[-0.02em]">
              {avatar.name} <Pencil className="size-3.5 opacity-60" />
            </button>
            <div className="mt-1 flex gap-1.5">
              <Badge>{style?.name ?? avatar.styleSlug}</Badge>
              {premium && <Badge tone="premium" icon={<Crown className="size-3" />}>HD</Badge>}
            </div>
          </div>
        </div>
      </motion.div>

      <div className="mt-3 grid grid-cols-3 gap-2">
        <Button variant="secondary" icon={<Download className="size-4" />} loading={downloading} onClick={download}>
          Save
        </Button>
        <Button variant="secondary" icon={<Share2 className="size-4" />} onClick={() => setShareOpen(true)}>
          Share
        </Button>
        <Button variant="secondary" icon={<IdCard className="size-4" />} onClick={() => avatar.cardUrl && downloadFile(avatar.cardUrl, `${avatar.name}-card.png`)}>
          Card
        </Button>
      </div>

      <section className="mt-7">
        <SectionTitle title="Create with your mascot" />
        <div className="grid grid-cols-2 gap-2.5">
          {ACTIONS.map(({ key, label, desc, icon: Icon, tint, premium: needsPremium }, i) => (
            <motion.div key={key} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 * i }} className={cn(key === 'styles' && 'col-span-2')}>
              <Link
                href={`/mascot/${avatar.id}/${key}`}
                onClick={(e) => {
                  haptic.tap();
                  if (needsPremium && !premium) {
                    e.preventDefault();
                    showPaywall('VIDEO_PREMIUM_ONLY', 'Videos are part of Premium.');
                  }
                }}
                className={cn('glass relative flex items-center gap-3 overflow-hidden rounded-3xl p-4 bg-gradient-to-br to-transparent', tint)}
              >
                <span className="grid size-10 place-items-center rounded-2xl bg-white/10">
                  <Icon className="size-5" />
                </span>
                <div className="min-w-0">
                  <div className="text-[14px] font-semibold">{label}</div>
                  <div className="truncate text-[11.5px] text-muted">{desc}</div>
                </div>
                {needsPremium && !premium && <span className="absolute right-3 top-3 text-[11px] text-amber-300">★</span>}
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {avatar.renders.length > 1 && (
        <section className="mt-7">
          <SectionTitle title="Looks" action={<span className="text-[12px] text-muted">tap to set main</span>} />
          <div className="-mx-4 flex gap-2.5 overflow-x-auto px-4 pb-1">
            {avatar.renders.map((r) => {
              const rs = getStyleRecipe(r.styleSlug);
              return (
                <button
                  key={r.id}
                  onClick={() => makePrimary(r.id)}
                  className={cn('w-24 shrink-0 overflow-hidden rounded-2xl border', r.isPrimary ? 'border-white/80' : 'border-white/10')}
                  style={{ background: rs ? `linear-gradient(150deg, ${rs.gradient[0]}, ${rs.gradient[1]})` : undefined }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={r.thumbnailUrl} alt="" className="aspect-square w-full object-contain" />
                  <div className="bg-black/40 py-1 text-[10px] font-semibold">{rs?.name ?? r.styleSlug}</div>
                </button>
              );
            })}
          </div>
        </section>
      )}

      {avatar.dna && (
        <section className="mt-7">
          <CharacterCard dna={avatar.dna} />
        </section>
      )}

      <ShareSheet open={shareOpen} onClose={() => setShareOpen(false)} target={{ kind: 'avatar', id: avatar.id }} mediaUrl={avatar.imageUrl} fileName={`${avatar.name}.webp`} />
    </AppShell>
  );
}

export default function MascotPage() {
  return (
    <Suspense>
      <MascotInner />
    </Suspense>
  );
}
