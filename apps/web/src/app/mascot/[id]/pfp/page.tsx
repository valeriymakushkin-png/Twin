'use client';

import { motion } from 'framer-motion';
import { Download, Image as ImageIcon, Share2, Sparkles, Zap } from 'lucide-react';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';
import { OUTFITS, PFP_BACKGROUNDS, POSES, type ProfilePictureDto } from '@mascot/shared';
import { AppShell, TopBar } from '@/components/layout/app-shell';
import { ShareSheet } from '@/components/share/share-sheet';
import { Button } from '@/components/ui/button';
import { Card, SectionTitle } from '@/components/ui/card';
import { Chip, EmptyState, Segmented } from '@/components/ui/misc';
import { api, ApiRequestError } from '@/lib/api';
import { cn } from '@/lib/cn';
import { qk, useInvalidate, useMutation, usePfps, useProfile } from '@/lib/queries';
import { downloadFile, haptic } from '@/lib/telegram';
import { useT } from '@/lib/i18n';

export default function PfpPage() {
  const { id: avatarId } = useParams<{ id: string }>();
  const { data: profile } = useProfile();
  const { data: pfps } = usePfps(avatarId);
  const invalidate = useInvalidate();
  const premium = profile?.plan === 'PREMIUM';
  const [mode, setMode] = useState<'composite' | 'ai'>('composite');
  const [background, setBackground] = useState('aurora');
  const [outfit, setOutfit] = useState<string | undefined>();
  const [pose, setPose] = useState<string | undefined>();
  const [share, setShare] = useState<ProfilePictureDto | null>(null);
  const { t, pick } = useT();

  const generate = useMutation({
    mutationFn: () =>
      api.pfp.generate({ avatarId, backgroundKey: background, mode, outfitKey: mode === 'ai' ? outfit : undefined, poseKey: mode === 'ai' ? pose : undefined }),
    onSuccess: () => {
      haptic.success();
      void invalidate(qk.pfps(avatarId), qk.profile);
    },
  });

  async function downloadHd(p: ProfilePictureDto) {
    try {
      const { url } = premium ? await api.pfp.hd(p.id) : { url: p.imageUrl! };
      downloadFile(url, `pfp-${p.id}.png`);
      if (!premium) toast(t.pfp.saved1024, { description: t.pfp.saved1024Hint });
    } catch (error) {
      if (!(error instanceof ApiRequestError && error.isPaywall)) toast.error(t.mascot.downloadFailed);
    }
  }

  const backgrounds = PFP_BACKGROUNDS.filter((b) => (mode === 'composite' ? b.kind !== 'scene' : true));

  return (
    <AppShell>
      <TopBar title={t.pfp.title} subtitle={t.pfp.subtitle} />
      <Segmented
        value={mode}
        onChange={setMode}
        options={[
          { value: 'composite', label: <span className="inline-flex items-center gap-1.5"><Zap className="size-3.5" /> {t.pfp.instant}</span> },
          { value: 'ai', label: <span className="inline-flex items-center gap-1.5"><Sparkles className="size-3.5" /> {t.pfp.aiScene}</span> },
        ]}
      />

      <Card className="mt-3 p-4">
        <SectionTitle title={t.pfp.background} className="px-0" />
        <div className="grid grid-cols-4 gap-2">
          {backgrounds.map((b) => (
            <motion.button
              key={b.key}
              whileTap={{ scale: 0.92 }}
              onClick={() => {
                haptic.select();
                setBackground(b.key);
              }}
              className={cn('relative aspect-square overflow-hidden rounded-2xl border-2', background === b.key ? 'border-white' : 'border-transparent')}
              style={{ background: `linear-gradient(135deg, ${b.colors.join(', ')})` }}
            >
              <span className="absolute inset-x-0 bottom-0 bg-black/40 py-0.5 text-[9.5px] font-semibold">{pick(t.pfp.backgrounds, b.key, b.label)}</span>
              {b.isPremium && !premium && <span className="absolute right-1 top-1 text-[10px] text-[#ff8a94]">★</span>}
            </motion.button>
          ))}
        </div>

        {mode === 'ai' && (
          <>
            <SectionTitle title={t.pfp.outfit} className="mt-5 px-0" />
            <div className="-mx-4 flex gap-1.5 overflow-x-auto px-4 pb-1">
              <Chip active={!outfit} onClick={() => setOutfit(undefined)}>{t.common.original}</Chip>
              {OUTFITS.map((o) => (
                <Chip key={o.key} active={outfit === o.key} locked={o.isPremium && !premium} onClick={() => setOutfit(o.key)}>
                  {pick(t.wardrobe.outfits, o.key, o.label)}
                </Chip>
              ))}
            </div>
            <SectionTitle title={t.pfp.pose} className="mt-4 px-0" />
            <div className="-mx-4 flex gap-1.5 overflow-x-auto px-4 pb-1">
              <Chip active={!pose} onClick={() => setPose(undefined)}>{t.common.portrait}</Chip>
              {POSES.filter((p) => p.key !== 'portrait').map((p) => (
                <Chip key={p.key} active={pose === p.key} locked={p.isPremium && !premium} onClick={() => setPose(p.key)}>
                  {pick(t.wardrobe.poses, p.key, p.label)}
                </Chip>
              ))}
            </div>
          </>
        )}
        <Button block size="lg" className="mt-5" loading={generate.isPending} icon={<Sparkles className="size-4" />} onClick={() => generate.mutate()}>
          {t.pfp.create}
        </Button>
      </Card>

      <section className="mt-6 grid grid-cols-2 gap-2.5">
        {pfps?.map((p) => (
          <motion.div key={p.id} layout initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="overflow-hidden rounded-3xl border border-line bg-surface-2">
            <div className="relative aspect-square">
              {p.imageUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={p.imageUrl} alt="" className="size-full object-cover" />
              ) : (
                <div className="skeleton size-full" />
              )}
              {p.imageUrl && <div className="pointer-events-none absolute inset-0 rounded-full ring-[999px] ring-black/30" />}
            </div>
            {p.status === 'READY' && (
              <div className="flex justify-around py-1.5">
                <button aria-label={t.common.download} onClick={() => downloadHd(p)} className="p-2 text-muted">
                  <Download className="size-4" />
                </button>
                <button aria-label={t.common.share} onClick={() => setShare(p)} className="p-2 text-muted">
                  <Share2 className="size-4" />
                </button>
              </div>
            )}
          </motion.div>
        ))}
      </section>
      {pfps?.length === 0 && <EmptyState icon={<ImageIcon className="size-6" />} title={t.pfp.emptyTitle} body={t.pfp.emptyBody} />}
      <p className="mt-6 px-2 text-center text-[11px] leading-relaxed text-faint">
        {t.pfp.howToSet}
      </p>
      {share && <ShareSheet open onClose={() => setShare(null)} target={{ kind: 'pfp', id: share.id }} mediaUrl={share.imageUrl} fileName="pfp.png" />}
    </AppShell>
  );
}
