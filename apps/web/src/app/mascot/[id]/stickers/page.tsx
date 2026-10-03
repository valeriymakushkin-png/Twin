'use client';

import { motion } from 'framer-motion';
import { Check, Loader2, Send, Smile, Sparkles } from 'lucide-react';
import { useParams, useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useMemo, useState } from 'react';
import { toast } from 'sonner';
import { CREDIT_COSTS, DEFAULT_STICKER_ORDER, EMOTION_CATALOG, type StickerEmotion, type StickerPackDto } from '@mascot/shared';
import { AppShell, TopBar } from '@/components/layout/app-shell';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, SectionTitle } from '@/components/ui/card';
import { EmptyState } from '@/components/ui/misc';
import { api } from '@/lib/api';
import { cn } from '@/lib/cn';
import { qk, useGeneration, useInvalidate, useMutation, useProfile, useStickerPacks } from '@/lib/queries';
import { haptic, openTelegramLink } from '@/lib/telegram';

function PackCard({ pack, onPublish, publishing }: { pack: StickerPackDto; onPublish: () => void; publishing: boolean }) {
  const ready = pack.stickers.filter((s) => s.status === 'READY').length;
  return (
    <Card className="p-4">
      <div className="mb-3 flex items-center justify-between">
        <div>
          <div className="text-[14px] font-semibold">{pack.title}</div>
          <div className="text-[12px] text-muted">
            {ready}/{pack.stickers.length} stickers · {pack.status === 'PUBLISHED' ? 'in Telegram' : pack.status.toLowerCase()}
          </div>
        </div>
        {pack.status === 'PUBLISHED' && <Badge tone="success">Added</Badge>}
      </div>
      <div className="grid grid-cols-5 gap-1.5">
        {pack.stickers.map((s) => (
          <div key={s.id} className="checker relative aspect-square overflow-hidden rounded-xl">
            {s.imageUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <motion.img initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} src={s.imageUrl} alt={s.emotion} className="size-full object-contain" />
            ) : s.status === 'FAILED' ? (
              <div className="grid size-full place-items-center text-[10px] text-rose-300">failed</div>
            ) : (
              <div className="skeleton size-full" />
            )}
            <span className="absolute bottom-0.5 right-1 text-[11px]">{s.emoji}</span>
          </div>
        ))}
      </div>
      {(pack.status === 'READY' || pack.status === 'PUBLISHING' || pack.status === 'PUBLISHED') && (
        <Button
          block
          className="mt-3"
          variant={pack.status === 'PUBLISHED' ? 'secondary' : 'primary'}
          loading={publishing || pack.status === 'PUBLISHING'}
          icon={<Send className="size-4" />}
          onClick={() => (pack.status === 'PUBLISHED' && pack.addStickersUrl ? openTelegramLink(pack.addStickersUrl) : onPublish())}
        >
          {pack.status === 'PUBLISHED' ? 'Open in Telegram' : 'Add to Telegram'}
        </Button>
      )}
    </Card>
  );
}

function StickersInner() {
  const { id: avatarId } = useParams<{ id: string }>();
  const focusPack = useSearchParams().get('pack');
  const { data: profile } = useProfile();
  const { data: packs } = useStickerPacks(avatarId);
  const invalidate = useInvalidate();
  const [generationId, setGenerationId] = useState<string | null>(null);
  const remaining = profile?.usage.stickersRemaining ?? null;
  const [selected, setSelected] = useState<Set<StickerEmotion>>(new Set());

  useEffect(() => {
    if (selected.size || !profile) return;
    const count = remaining === null ? DEFAULT_STICKER_ORDER.length : Math.max(1, remaining);
    setSelected(new Set(DEFAULT_STICKER_ORDER.slice(0, count)));
  }, [profile, remaining, selected.size]);

  useGeneration(generationId, () => {
    void invalidate(qk.stickerPacks(avatarId), qk.profile);
    setGenerationId(null);
  });

  const generate = useMutation({
    mutationFn: () => api.stickers.generate({ avatarId, emotions: DEFAULT_STICKER_ORDER.filter((e) => selected.has(e)) }),
    onSuccess: (res) => {
      haptic.success();
      setGenerationId(res.generation.id);
      void invalidate(qk.stickerPacks(avatarId), qk.profile);
    },
  });

  const publish = useMutation({
    mutationFn: (packId: string) => api.stickers.publish(packId),
    onSuccess: () => {
      toast.success('Creating your Telegram sticker set…');
      void invalidate(qk.stickerPacks(avatarId));
    },
  });

  const overflow = remaining === null ? 0 : Math.max(0, selected.size - remaining);
  const sortedPacks = useMemo(
    () => (packs ?? []).slice().sort((a, b) => (a.id === focusPack ? -1 : b.id === focusPack ? 1 : 0)),
    [packs, focusPack],
  );

  return (
    <AppShell>
      <TopBar title="Sticker pack" subtitle={remaining === null ? 'Unlimited with Premium' : `${remaining} free stickers left`} />

      <Card className="p-4">
        <SectionTitle title="Emotions" action={<span className="text-[12px] text-muted">{selected.size} selected</span>} className="px-0" />
        <div className="grid grid-cols-5 gap-2">
          {DEFAULT_STICKER_ORDER.map((emotion) => {
            const e = EMOTION_CATALOG[emotion];
            const on = selected.has(emotion);
            return (
              <motion.button
                key={emotion}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  haptic.select();
                  setSelected((prev) => {
                    const next = new Set(prev);
                    if (next.has(emotion)) next.delete(emotion);
                    else next.add(emotion);
                    return next;
                  });
                }}
                className={cn(
                  'relative flex flex-col items-center gap-1 rounded-2xl border py-2.5 transition-colors',
                  on ? 'border-violet-400/60 bg-violet-500/15' : 'border-line bg-white/[0.02]',
                )}
              >
                <span className="text-2xl">{e.emoji}</span>
                <span className="text-[10px] font-medium text-ink-2">{e.label}</span>
                {on && (
                  <span className="absolute right-1 top-1 grid size-4 place-items-center rounded-full bg-violet-400 text-black">
                    <Check className="size-2.5" strokeWidth={4} />
                  </span>
                )}
              </motion.button>
            );
          })}
        </div>
        {overflow > 0 && (
          <p className="mt-3 text-[12px] text-amber-200/90">
            {overflow} beyond your free stickers · {overflow * CREDIT_COSTS.sticker} credits (you have {profile?.credits ?? 0}) — or go Premium for unlimited.
          </p>
        )}
        <Button
          block
          size="lg"
          className="mt-4"
          disabled={!selected.size || Boolean(generationId)}
          loading={generate.isPending}
          icon={generationId ? <Loader2 className="size-4 animate-spin" /> : <Sparkles className="size-4" />}
          onClick={() => generate.mutate()}
        >
          {generationId ? 'Drawing your stickers…' : `Generate ${selected.size} sticker${selected.size === 1 ? '' : 's'}`}
        </Button>
      </Card>

      <section className="mt-6 space-y-3">
        {sortedPacks.length ? (
          sortedPacks.map((pack) => (
            <PackCard key={pack.id} pack={pack} publishing={publish.isPending && publish.variables === pack.id} onPublish={() => publish.mutate(pack.id)} />
          ))
        ) : (
          <EmptyState icon={<Smile className="size-6" />} title="No packs yet" body="Pick emotions above and we’ll draw your mascot in each one." />
        )}
      </section>
    </AppShell>
  );
}

export default function StickersPage() {
  return (
    <Suspense>
      <StickersInner />
    </Suspense>
  );
}
