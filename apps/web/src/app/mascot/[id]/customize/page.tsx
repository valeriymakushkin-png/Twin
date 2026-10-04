'use client';

import { motion } from 'framer-motion';
import { Ban, Gamepad2, Hand, Loader2, PersonStanding, Smartphone, Sparkles, Swords, ThumbsUp, Trophy, User, Zap } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';
import { ACCESSORIES, OUTFITS, PFP_BACKGROUNDS, POSES, type AccessoryKey, type StyleSlug } from '@mascot/shared';
import { AppShell } from '@/components/layout/app-shell';
import { Mascot3D } from '@/components/three/mascot-3d';
import { MascotShot } from '@/components/three/mascot-shot';
import { Button } from '@/components/ui/button';
import { Card, ScreenTitle } from '@/components/ui/card';
import { Chip, LockDot, Progress, Skeleton } from '@/components/ui/misc';
import { api } from '@/lib/api';
import { cn } from '@/lib/cn';
import { useT } from '@/lib/i18n';
import { qk, useAvatar, useGeneration, useInvalidate, useMutation, useProfile } from '@/lib/queries';
import { haptic } from '@/lib/telegram';
import { usePaywall } from '@/store/paywall';

type Tab = 'outfit' | 'accessories' | 'background' | 'poses';

const POSE_ICONS: Record<string, typeof User> = {
  portrait: User,
  waving: Hand,
  'thumbs-up': ThumbsUp,
  peace: Sparkles,
  'arms-crossed': PersonStanding,
  pointing: Zap,
  gaming: Gamepad2,
  jumping: Trophy,
  hero: Swords,
  selfie: Smartphone,
};

export default function CustomizePage() {
  const { id: avatarId } = useParams<{ id: string }>();
  const router = useRouter();
  const { data: avatar } = useAvatar(avatarId);
  const { data: profile } = useProfile();
  const invalidate = useInvalidate();
  const showPaywall = usePaywall((s) => s.show);
  const { t, pick } = useT();
  const primary = avatar?.renders.find((r) => r.isPrimary) ?? avatar?.renders[0];
  const [tab, setTab] = useState<Tab>('outfit');
  const [outfit, setOutfit] = useState<string | undefined>(undefined);
  const [accessory, setAccessory] = useState<AccessoryKey | undefined>(undefined);
  const [background, setBackground] = useState<string>('aurora');
  const [pose, setPose] = useState<string | undefined>(undefined);
  const [generationId, setGenerationId] = useState<string | null>(null);
  const premium = profile?.plan === 'PREMIUM';
  const currentOutfit = outfit ?? primary?.outfitKey ?? 'casual-hoodie';
  const currentAccessory = accessory ?? (primary?.accessoryKey as AccessoryKey | undefined);
  const bg = PFP_BACKGROUNDS.find((b) => b.key === background) ?? PFP_BACKGROUNDS[0]!;

  const { data: generation } = useGeneration(generationId, (g) => {
    setGenerationId(null);
    void invalidate(qk.avatar(avatarId), qk.avatars, qk.profile);
    if (g.status === 'SUCCEEDED') {
      toast.success(t.customize.saved);
      router.push(`/mascot/${avatarId}`);
    }
  });

  const save = useMutation({
    mutationFn: () =>
      api.avatars.styleVariant(avatarId, {
        styleSlug: (avatar?.styleSlug ?? 'pixar') as StyleSlug,
        outfitKey: currentOutfit,
        poseKey: pose,
        accessoryKey: currentAccessory,
      }),
    onSuccess: (g) => setGenerationId(g.id),
  });

  const lockedPick = (isPremium: boolean, apply: () => void) => {
    haptic.select();
    apply();
    if (isPremium && !premium) showPaywall('PREMIUM_WARDROBE', t.customize.premiumItem);
  };

  const busy = Boolean(generationId) || save.isPending;
  const dna = avatar?.dna;

  return (
    <AppShell>
      <ScreenTitle title={t.customize.title} />
      {/* Live preview with the chosen background. */}
      <Card className="relative -mt-1 overflow-hidden p-0">
        <div className="absolute inset-0 opacity-60" style={{ background: `linear-gradient(135deg, ${bg.colors.join(', ')})` }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,transparent_30%,rgba(6,6,7,0.85)_80%)]" />
        {dna ? (
          <Mascot3D dna={dna} style={avatar?.styleSlug} outfit={currentOutfit} accessory={currentAccessory ?? null} framing="portrait" className="relative aspect-[5/4] w-full" />
        ) : (
          <Skeleton className="aspect-[5/4] w-full" />
        )}
      </Card>

      <div className="-mx-4 mt-4 flex gap-2 overflow-x-auto px-4 pb-1">
        {(['outfit', 'accessories', 'background', 'poses'] as const).map((k) => (
          <Chip key={k} active={tab === k} onClick={() => setTab(k)}>
            {t.customize.tabs[k]}
          </Chip>
        ))}
      </div>

      <motion.div key={tab} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-3 grid grid-cols-3 gap-2.5">
        {tab === 'outfit' &&
          dna &&
          OUTFITS.map((o) => (
            <Tile key={o.key} active={currentOutfit === o.key} locked={o.isPremium && !premium} label={pick(t.wardrobe.outfits, o.key, o.label)} onClick={() => lockedPick(o.isPremium, () => setOutfit(o.key))}>
              <MascotShot dna={dna} style={avatar?.styleSlug} outfit={o.key} framing="bust" className="size-full" />
            </Tile>
          ))}
        {tab === 'accessories' && dna && (
          <>
            <Tile active={!currentAccessory} label={t.customize.none} onClick={() => setAccessory(undefined)}>
              <div className="grid size-full place-items-center text-muted">
                <Ban className="size-7" />
              </div>
            </Tile>
            {ACCESSORIES.map((a) => (
              <Tile
                key={a.key}
                active={currentAccessory === a.key}
                locked={a.isPremium && !premium}
                label={pick(t.customize.accessories, a.key, a.label)}
                onClick={() => lockedPick(a.isPremium, () => setAccessory(a.key as AccessoryKey))}
              >
                <MascotShot dna={dna} style={avatar?.styleSlug} outfit={currentOutfit} accessory={a.key} framing={a.key === 'chain' ? 'bust' : 'head'} className="size-full" />
              </Tile>
            ))}
          </>
        )}
        {tab === 'background' &&
          PFP_BACKGROUNDS.map((b) => (
            <Tile key={b.key} active={background === b.key} locked={b.isPremium && !premium} label={pick(t.pfp.backgrounds, b.key, b.label)} onClick={() => lockedPick(b.isPremium, () => setBackground(b.key))}>
              <div className="size-full" style={{ background: `linear-gradient(135deg, ${b.colors.join(', ')})` }} />
            </Tile>
          ))}
        {tab === 'poses' &&
          POSES.map((p) => {
            const Icon = POSE_ICONS[p.key] ?? User;
            return (
              <Tile key={p.key} active={(pose ?? 'portrait') === p.key} locked={p.isPremium && !premium} label={pick(t.wardrobe.poses, p.key, p.label)} onClick={() => lockedPick(p.isPremium, () => setPose(p.key === 'portrait' ? undefined : p.key))}>
                <div className="grid size-full place-items-center text-ink-2">
                  <Icon className="size-8" strokeWidth={1.6} />
                </div>
              </Tile>
            );
          })}
      </motion.div>

      {generation && generation.status !== 'SUCCEEDED' && (
        <Card className="mt-4 p-4">
          <div className="mb-2 flex items-center gap-2 text-[13px] text-ink-2">
            <Loader2 className="size-4 animate-spin text-brand" /> {t.customize.saving}
          </div>
          <Progress value={generation.progress} />
        </Card>
      )}

      <div className="sticky bottom-[88px] z-20 -mx-4 mt-6 bg-gradient-to-t from-canvas via-canvas/95 to-transparent px-4 pb-3 pt-8">
        <Button size="lg" block loading={busy} onClick={() => save.mutate()}>
          {busy ? t.customize.saving : t.customize.save}
        </Button>
      </div>
    </AppShell>
  );
}

function Tile({ active, locked, label, onClick, children }: { active?: boolean; locked?: boolean; label: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <motion.button whileTap={{ scale: 0.95 }} onClick={onClick} className="text-left">
      <div className={cn('relative aspect-square overflow-hidden rounded-2xl border bg-surface-2', active ? 'selected' : 'border-white/10')}>
        {children}
        {locked && <LockDot className="absolute right-1.5 top-1.5" />}
      </div>
      <div className={cn('mt-1.5 truncate text-center text-[11.5px] font-semibold', active ? 'text-white' : 'text-ink-2')}>{label}</div>
    </motion.button>
  );
}
