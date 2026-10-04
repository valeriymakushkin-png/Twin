'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Camera, Clapperboard, Download, Image as ImageIcon, Laugh, Music2, Palette, Pencil, Plus, Rotate3d, Share2, Shirt, Smile, Square } from 'lucide-react';
import Link from 'next/link';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useState } from 'react';
import { toast } from 'sonner';
import { DANCE_EMOJI, DANCE_IDS, getStyleRecipe, type AvatarDto } from '@mascot/shared';
import { AppShell } from '@/components/layout/app-shell';
import { CharacterCard } from '@/components/mascot/character-card';
import { Confetti } from '@/components/mascot/confetti';
import { ShareSheet } from '@/components/share/share-sheet';
import { Mascot3D } from '@/components/three/mascot-3d';
import { Button } from '@/components/ui/button';
import { Card, ScreenTitle, SectionTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/misc';
import { Sheet } from '@/components/ui/sheet';
import { api, ApiRequestError } from '@/lib/api';
import { cn } from '@/lib/cn';
import { useT } from '@/lib/i18n';
import { styleName } from '@/lib/i18n/catalog';
import { renderShot, webglSupported } from '@/lib/mascot3d';
import { qk, useAvatar, useInvalidate, useProfile } from '@/lib/queries';
import { downloadFile, haptic } from '@/lib/telegram';
import { usePaywall } from '@/store/paywall';

const ACTIONS = [
  { key: 'stickers', icon: Smile, premium: false },
  { key: 'memes', icon: Laugh, premium: false },
  { key: 'videos', icon: Clapperboard, premium: true },
  { key: 'pfp', icon: ImageIcon, premium: false },
  { key: 'customize', icon: Shirt, premium: false },
  { key: 'styles', icon: Palette, premium: false },
] as const;

/** "Done!" moment right after the first generation (reference screen 4). */
function ReadyView({ avatar, onNext }: { avatar: AvatarDto; onNext: () => void }) {
  const tr = useT();
  const { t, f } = tr;
  const router = useRouter();
  const style = getStyleRecipe(avatar.styleSlug);
  return (
    <>
      <Confetti />
      <ScreenTitle className="text-center [&>div]:mx-auto" title={t.mascot.ready} subtitle={t.mascot.readySub} />
      <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: 'spring', stiffness: 140, damping: 16 }} className="relative -mx-4">
        <div className="glow-red absolute left-1/2 top-1/2 size-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-xl" />
        {avatar.imageUrl && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={avatar.imageUrl} alt={avatar.name} className="fade-bottom relative mx-auto aspect-square w-[92%] object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.7)]" />
        )}
      </motion.div>
      <Card className="relative -mt-6 p-3.5">
        <div className="flex items-center gap-3">
          {avatar.thumbnailUrl && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={avatar.thumbnailUrl} alt="" className="size-12 rounded-xl border border-brand/40 bg-brand/10 object-contain" />
          )}
          <div className="min-w-0 flex-1">
            <div className="text-[14.5px] font-bold">{t.mascot.yourMascot}</div>
            <div className="text-[12px] text-muted">{f(t.mascot.styleLabel, { style: styleName(tr, avatar.styleSlug, style?.name ?? avatar.styleSlug) })}</div>
          </div>
        </div>
        <Button variant="outline" block className="mt-3" onClick={() => router.push(`/mascot/${avatar.id}/styles`)}>
          {t.mascot.changeStyle}
        </Button>
      </Card>
      <Button size="lg" block className="mt-3" onClick={onNext}>
        {t.mascot.next}
        <ArrowRight className="size-[18px]" />
      </Button>
    </>
  );
}

function MascotInner() {
  const { id } = useParams<{ id: string }>();
  const search = useSearchParams();
  const router = useRouter();
  const { data: avatar, isLoading } = useAvatar(id);
  const { data: profile } = useProfile();
  const invalidate = useInvalidate();
  const showPaywall = usePaywall((s) => s.show);
  const [shareOpen, setShareOpen] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [view3d, setView3d] = useState(false);
  const [spin, setSpin] = useState(0);
  const [dance, setDance] = useState<string | null>(null);
  const [danceOpen, setDanceOpen] = useState(false);
  const [ready, setReady] = useState(search.get('new') === '1');
  const tr = useT();
  const { t, f } = tr;

  if (isLoading || !avatar) {
    return (
      <AppShell>
        <Skeleton className="mt-6 aspect-square w-full" />
        <Skeleton className="mt-4 h-24 w-full" />
      </AppShell>
    );
  }

  if (ready) {
    return (
      <AppShell tabs={false}>
        <ReadyView
          avatar={avatar}
          onNext={() => {
            setReady(false);
            router.replace(`/mascot/${avatar.id}`);
          }}
        />
      </AppShell>
    );
  }

  const style = getStyleRecipe(avatar.styleSlug);
  const primary = avatar.renders.find((r) => r.isPrimary) ?? avatar.renders[0];
  const premium = profile?.plan === 'PREMIUM';
  const label = styleName(tr, avatar.styleSlug, style?.name ?? avatar.styleSlug);
  const can3d = Boolean(avatar.dna) && typeof window !== 'undefined' && webglSupported();

  async function download() {
    if (!primary) return;
    setDownloading(true);
    try {
      if (premium) {
        const { url } = await api.avatars.hd(avatar!.id, primary.id);
        downloadFile(url, `${avatar!.name}-hd.png`);
      } else {
        downloadFile(primary.imageUrl, `${avatar!.name}.webp`);
        toast(t.mascot.savedStandard, { description: t.mascot.savedStandardHint });
      }
    } catch (error) {
      if (!(error instanceof ApiRequestError && error.isPaywall)) toast.error(t.mascot.downloadFailed);
    } finally {
      setDownloading(false);
    }
  }

  async function camera() {
    if (!avatar?.dna) return;
    haptic.tap('medium');
    const url = await renderShot(avatar.dna, { style: avatar.styleSlug, outfit: primary?.outfitKey ?? undefined, accessory: primary?.accessoryKey ?? null, framing: 'portrait', size: 1024, yaw: 0.35 });
    downloadFile(url, `${avatar.name}-3d.png`);
    toast.success(t.mascot.shotSaved);
  }

  async function rename() {
    const name = window.prompt(t.mascot.renamePrompt, avatar!.name)?.trim();
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
      {/* Viewer: main render (or live 3D) + look rail on the right. */}
      <div className="relative -mx-4 mt-2 flex gap-2 px-4">
        <div className="relative flex-1">
          <div className="glow-red absolute left-1/2 top-1/2 size-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-xl" />
          <AnimatePresence mode="wait">
            {view3d && avatar.dna ? (
              <motion.div key="3d" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative aspect-[4/5] w-full">
                <Mascot3D dna={avatar.dna} style={avatar.styleSlug} outfit={primary?.outfitKey ?? undefined} accessory={primary?.accessoryKey ?? null} framing="bust" spin={spin} dance={dance} className="fade-bottom size-full" />
              </motion.div>
            ) : (
              <motion.div key="img" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative aspect-[4/5] w-full">
                {avatar.imageUrl && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={avatar.imageUrl} alt={avatar.name} className="fade-bottom size-full animate-float object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.7)]" />
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="flex w-[58px] shrink-0 flex-col gap-2 pt-3">
          {avatar.renders.slice(0, 4).map((r) => (
            <button
              key={r.id}
              onClick={() => makePrimary(r.id)}
              className={cn('aspect-square overflow-hidden rounded-xl border bg-surface-2', r.isPrimary ? 'selected' : 'border-white/10')}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={r.thumbnailUrl} alt="" className="size-full object-contain" />
            </button>
          ))}
          <Link href={`/mascot/${avatar.id}/styles`} className="grid aspect-square place-items-center rounded-xl border border-dashed border-white/15 text-muted">
            <Plus className="size-5" />
          </Link>
        </div>
      </div>

      <div className="mt-2 grid grid-cols-4 gap-2">
        <ToolButton
          icon={<Rotate3d className="size-[18px]" />}
          label={t.mascot.rotate}
          active={view3d && !dance}
          disabled={!can3d}
          onClick={() => {
            if (!view3d) setView3d(true);
            setSpin((n) => n + 1);
          }}
        />
        <ToolButton
          icon={dance ? <Square className="size-[16px] fill-current" /> : <Music2 className="size-[18px]" />}
          label={dance ? t.dances.stop : t.mascot.dance}
          active={Boolean(dance)}
          disabled={!can3d}
          onClick={() => {
            haptic.tap();
            if (dance) setDance(null);
            else setDanceOpen(true);
          }}
        />
        <ToolButton icon={<Camera className="size-[18px]" />} label={t.mascot.camera} disabled={!can3d} onClick={camera} />
        <ToolButton icon={<Download className="size-[18px]" />} label={t.mascot.download} loading={downloading} onClick={download} />
      </div>

      <Card className="mt-3 flex items-center gap-3 p-3.5">
        {avatar.thumbnailUrl && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={avatar.thumbnailUrl} alt="" className="size-11 rounded-xl border border-brand/40 bg-brand/10 object-contain" />
        )}
        <div className="min-w-0 flex-1">
          <div className="truncate text-[14.5px] font-bold">{avatar.name}</div>
          <div className="text-[12px] text-muted">{f(t.mascot.styleLabel, { style: label })}</div>
        </div>
        <button onClick={rename} aria-label={t.mascot.renamePrompt} className="grid size-9 place-items-center rounded-xl border border-white/10 text-muted">
          <Pencil className="size-4" />
        </button>
        <button onClick={() => setShareOpen(true)} aria-label={t.common.share} className="grid size-9 place-items-center rounded-xl bg-brand-grad text-white shadow-red">
          <Share2 className="size-4" />
        </button>
      </Card>

      <section className="mt-7">
        <SectionTitle title={t.mascot.createWith} />
        <div className="grid grid-cols-2 gap-2.5">
          {ACTIONS.map(({ key, icon: Icon, premium: needsPremium }, i) => (
            <motion.div key={key} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.04 * i }}>
              <Link
                href={`/mascot/${avatar.id}/${key}`}
                onClick={(e) => {
                  haptic.tap();
                  if (needsPremium && !premium) {
                    e.preventDefault();
                    showPaywall('VIDEO_PREMIUM_ONLY', t.mascot.videosPremium);
                  }
                }}
                className="card relative flex items-center gap-3 overflow-hidden rounded-[20px] p-3.5"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand/12 text-brand ring-1 ring-brand/25">
                  <Icon className="size-5" />
                </span>
                <div className="min-w-0">
                  <div className="text-[13.5px] font-bold">{t.mascot.actions[key].label}</div>
                  <div className="truncate text-[11px] text-muted">{t.mascot.actions[key].desc}</div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {avatar.dna && (
        <section className="mt-7">
          <CharacterCard dna={avatar.dna} />
        </section>
      )}

      <Sheet open={danceOpen} onClose={() => setDanceOpen(false)} title={t.dances.title}>
        <div className="grid grid-cols-3 gap-2">
          {DANCE_IDS.map((id) => (
            <button
              key={id}
              onClick={() => {
                haptic.select();
                setView3d(true);
                setDance(id);
                setDanceOpen(false);
              }}
              className={cn('card flex flex-col items-center gap-1 rounded-2xl px-2 py-3', dance === id && 'selected')}
            >
              <span className="text-[26px] leading-none">{DANCE_EMOJI[id]}</span>
              <span className="text-center text-[12px] font-semibold leading-tight">{t.dances.names[id]}</span>
            </button>
          ))}
        </div>
      </Sheet>

      <ShareSheet open={shareOpen} onClose={() => setShareOpen(false)} target={{ kind: 'avatar', id: avatar.id }} mediaUrl={avatar.imageUrl} fileName={`${avatar.name}.webp`} />
    </AppShell>
  );
}

function ToolButton({ icon, label, onClick, active, disabled, loading }: { icon: React.ReactNode; label: string; onClick: () => void; active?: boolean; disabled?: boolean; loading?: boolean }) {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      disabled={disabled || loading}
      onClick={onClick}
      className={cn('card flex h-[58px] flex-col items-center justify-center gap-1 rounded-2xl text-[11.5px] font-semibold transition-colors disabled:opacity-40', active && 'selected text-white')}
    >
      <span className={cn(active ? 'text-brand' : 'text-ink-2', loading && 'animate-pulse')}>{icon}</span>
      {label}
    </motion.button>
  );
}

export default function MascotPage() {
  return (
    <Suspense>
      <MascotInner />
    </Suspense>
  );
}
