'use client';

import { Loader2, Palette, Sparkles } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';
import { OUTFITS, POSES, type StyleSlug } from '@mascot/shared';
import { AppShell, TopBar } from '@/components/layout/app-shell';
import { StylePicker } from '@/components/mascot/style-picker';
import { Button } from '@/components/ui/button';
import { Card, SectionTitle } from '@/components/ui/card';
import { Chip, Progress } from '@/components/ui/misc';
import { api } from '@/lib/api';
import { qk, useAvatar, useGeneration, useInvalidate, useMutation, useProfile, useStyles } from '@/lib/queries';
import { usePaywall } from '@/store/paywall';
import { useT } from '@/lib/i18n';
import { styleName } from '@/lib/i18n/catalog';

export default function StylesPage() {
  const { id: avatarId } = useParams<{ id: string }>();
  const router = useRouter();
  const { data: avatar } = useAvatar(avatarId);
  const { data: styles } = useStyles();
  const { data: profile } = useProfile();
  const invalidate = useInvalidate();
  const showPaywall = usePaywall((s) => s.show);
  const [styleSlug, setStyleSlug] = useState<StyleSlug | null>(null);
  const [outfit, setOutfit] = useState<string | undefined>();
  const [pose, setPose] = useState<string | undefined>();
  const [generationId, setGenerationId] = useState<string | null>(null);
  const premium = profile?.plan === 'PREMIUM';
  const tr = useT();
  const { t, f, pick } = tr;
  const current = styleSlug ?? (avatar?.styleSlug as StyleSlug | undefined) ?? 'pixar';

  const { data: generation } = useGeneration(generationId, (g) => {
    setGenerationId(null);
    void invalidate(qk.avatar(avatarId), qk.avatars, qk.profile);
    if (g.status === 'SUCCEEDED') {
      toast.success(t.styles.ready);
      router.push(`/mascot/${avatarId}`);
    }
  });

  const restyle = useMutation({
    mutationFn: () => api.avatars.styleVariant(avatarId, { styleSlug: current, outfitKey: outfit, poseKey: pose }),
    onSuccess: (g) => setGenerationId(g.id),
  });

  const busy = Boolean(generationId) || restyle.isPending;

  return (
    <AppShell>
      <TopBar title={t.styles.title} subtitle={t.styles.subtitle} />
      <StylePicker
        styles={styles}
        value={current}
        previewDna={avatar?.dna}
        onChange={(s) => {
          setStyleSlug(s.slug as StyleSlug);
          if (s.locked) showPaywall('PREMIUM_STYLE', f(t.styles.premiumOrCredits, { name: styleName(tr, s.slug, s.name) }));
        }}
      />
      <Card className="mt-4 p-4">
        <SectionTitle title={t.pfp.outfit} className="px-0" />
        <div className="-mx-4 flex gap-1.5 overflow-x-auto px-4 pb-1">
          <Chip active={!outfit} onClick={() => setOutfit(undefined)}>{t.common.casual}</Chip>
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
      </Card>
      {generation && generation.status !== 'SUCCEEDED' && (
        <Card className="mt-4 p-4">
          <div className="mb-2 flex items-center gap-2 text-[13px] text-ink-2">
            <Loader2 className="size-4 animate-spin text-violet-300" /> {t.styles.rerendering}
          </div>
          <Progress value={generation.progress} />
        </Card>
      )}
      <div className="sticky bottom-[88px] z-20 -mx-4 mt-6 bg-gradient-to-t from-canvas via-canvas/95 to-transparent px-4 pb-3 pt-8">
        <Button size="lg" block loading={busy} icon={busy ? undefined : <Palette className="size-4" />} onClick={() => restyle.mutate()}>
          {busy ? t.styles.creating : (
            <>
              {t.styles.apply} <Sparkles className="size-4 opacity-70" />
            </>
          )}
        </Button>
      </div>
    </AppShell>
  );
}
