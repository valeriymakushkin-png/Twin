'use client';

import { Loader2 } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';
import type { StyleSlug } from '@mascot/shared';
import { AppShell } from '@/components/layout/app-shell';
import { StylePicker } from '@/components/mascot/style-picker';
import { Button } from '@/components/ui/button';
import { Card, ScreenTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/misc';
import { api } from '@/lib/api';
import { useT } from '@/lib/i18n';
import { styleName } from '@/lib/i18n/catalog';
import { qk, useAvatar, useGeneration, useInvalidate, useMutation, useStyles } from '@/lib/queries';
import { usePaywall } from '@/store/paywall';

export default function StylesPage() {
  const { id: avatarId } = useParams<{ id: string }>();
  const router = useRouter();
  const { data: avatar } = useAvatar(avatarId);
  const { data: styles } = useStyles();
  const invalidate = useInvalidate();
  const showPaywall = usePaywall((s) => s.show);
  const [styleSlug, setStyleSlug] = useState<StyleSlug | null>(null);
  const [generationId, setGenerationId] = useState<string | null>(null);
  const tr = useT();
  const { t, f } = tr;
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
    mutationFn: () => api.avatars.styleVariant(avatarId, { styleSlug: current }),
    onSuccess: (g) => setGenerationId(g.id),
  });

  const busy = Boolean(generationId) || restyle.isPending;

  return (
    <AppShell>
      <ScreenTitle title={t.styles.title} subtitle={t.styles.subtitle} />
      <StylePicker
        styles={styles}
        value={current}
        previewDna={avatar?.dna}
        onChange={(s) => {
          setStyleSlug(s.slug as StyleSlug);
          if (s.locked) showPaywall('PREMIUM_STYLE', f(t.styles.premiumOrCredits, { name: styleName(tr, s.slug, s.name) }));
        }}
      />
      {generation && generation.status !== 'SUCCEEDED' && (
        <Card className="mt-4 p-4">
          <div className="mb-2 flex items-center gap-2 text-[13px] text-ink-2">
            <Loader2 className="size-4 animate-spin text-brand" /> {t.styles.rerendering}
          </div>
          <Progress value={generation.progress} />
        </Card>
      )}
      <div className="sticky bottom-[88px] z-20 -mx-4 mt-6 bg-gradient-to-t from-canvas via-canvas/95 to-transparent px-4 pb-3 pt-8">
        <Button size="lg" block loading={busy} disabled={current === avatar?.styleSlug && !styleSlug} onClick={() => restyle.mutate()}>
          {busy ? t.styles.creating : t.styles.apply}
        </Button>
      </div>
    </AppShell>
  );
}
