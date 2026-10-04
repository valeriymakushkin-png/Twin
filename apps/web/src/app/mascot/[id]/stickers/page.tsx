'use client';

import { motion } from 'framer-motion';
import { Loader2, Send, Sparkles } from 'lucide-react';
import { useParams, useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useMemo, useState } from 'react';
import { toast } from 'sonner';
import { CREDIT_COSTS, DEFAULT_PACK_SIZE, DEFAULT_STICKER_ORDER, EMOTION_CATALOG, type StickerEmotion, type StickerPackDto } from '@mascot/shared';
import { AppShell } from '@/components/layout/app-shell';
import { LazyMascotShot } from '@/components/three/mascot-shot';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, ScreenTitle, SectionTitle } from '@/components/ui/card';
import { CheckDot } from '@/components/ui/misc';
import { api } from '@/lib/api';
import { cn } from '@/lib/cn';
import { useT } from '@/lib/i18n';
import { qk, useAvatar, useGeneration, useInvalidate, useMutation, useProfile, useStickerPacks } from '@/lib/queries';
import { haptic, openTelegramLink } from '@/lib/telegram';

function PackCard({ pack, onPublish, publishing }: { pack: StickerPackDto; onPublish: () => void; publishing: boolean }) {
  const ready = pack.stickers.filter((s) => s.status === 'READY').length;
  const { t, f } = useT();
  return (
    <Card className="p-4">
      <div className="mb-3 flex items-center justify-between">
        <div>
          <div className="text-[14.5px] font-bold">{pack.title}</div>
          <div className="text-[12px] text-muted">{f(t.stickers.packMeta, { ready, total: pack.stickers.length, status: t.stickers.status[pack.status] })}</div>
        </div>
        {pack.status === 'PUBLISHED' && <Badge tone="premium">{t.stickers.added}</Badge>}
      </div>
      <div className="grid grid-cols-3 gap-2">
        {pack.stickers.map((s) => (
          <div key={s.id} className="overflow-hidden rounded-2xl border border-white/[0.06] bg-surface-2">
            <div className="checker relative aspect-square">
              {s.imageUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <motion.img initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} src={s.imageUrl} alt={s.emotion} className="size-full object-contain" />
              ) : s.status === 'FAILED' ? (
                <div className="grid size-full place-items-center text-[10px] text-brand">{t.stickers.failed}</div>
              ) : (
                <div className="skeleton size-full" />
              )}
            </div>
            <div className="py-1.5 text-center text-[11px] font-semibold text-ink-2">{(t.stickers.captions as Record<string, string>)[s.emotion] ?? s.emoji}</div>
          </div>
        ))}
      </div>
      {(pack.status === 'READY' || pack.status === 'PUBLISHING' || pack.status === 'PUBLISHED') && (
        <Button
          block
          className="mt-3"
          variant={pack.status === 'PUBLISHED' ? 'outline' : 'primary'}
          loading={publishing || pack.status === 'PUBLISHING'}
          icon={<Send className="size-4" />}
          onClick={() => (pack.status === 'PUBLISHED' && pack.addStickersUrl ? openTelegramLink(pack.addStickersUrl) : onPublish())}
        >
          {pack.status === 'PUBLISHED' ? t.stickers.openInTelegram : t.stickers.downloadToTelegram}
        </Button>
      )}
    </Card>
  );
}

function StickersInner() {
  const { id: avatarId } = useParams<{ id: string }>();
  const focusPack = useSearchParams().get('pack');
  const { data: profile } = useProfile();
  const { data: avatar } = useAvatar(avatarId);
  const { data: packs } = useStickerPacks(avatarId);
  const invalidate = useInvalidate();
  const [generationId, setGenerationId] = useState<string | null>(null);
  const remaining = profile?.usage.stickersRemaining ?? null;
  const [selected, setSelected] = useState<Set<StickerEmotion>>(new Set());
  const { t, f, p } = useT();

  useEffect(() => {
    if (selected.size || !profile) return;
    const count = remaining === null ? DEFAULT_PACK_SIZE : Math.max(1, Math.min(DEFAULT_PACK_SIZE, remaining));
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
      toast.success(t.stickers.creatingSet);
      void invalidate(qk.stickerPacks(avatarId));
    },
  });

  const overflow = remaining === null ? 0 : Math.max(0, selected.size - remaining);
  const sortedPacks = useMemo(() => (packs ?? []).slice().sort((a, b) => (a.id === focusPack ? -1 : b.id === focusPack ? 1 : 0)), [packs, focusPack]);

  return (
    <AppShell>
      <ScreenTitle
        title={t.stickers.title}
        subtitle={t.stickers.subtitle}
        right={<span className="mt-1.5 shrink-0 rounded-full border border-white/10 px-2.5 py-1 text-[11px] font-semibold text-muted">{remaining === null ? '∞' : f(t.stickers.freeLeft, { count: remaining })}</span>}
      />

      {sortedPacks.length > 0 && (
        <section className="mb-6 space-y-3">
          {sortedPacks.map((pack) => (
            <PackCard key={pack.id} pack={pack} publishing={publish.isPending && publish.variables === pack.id} onPublish={() => publish.mutate(pack.id)} />
          ))}
        </section>
      )}

      <SectionTitle
        title={f(t.stickers.emotionsCount, { count: DEFAULT_STICKER_ORDER.length })}
        action={
          <button
            className="text-[12px] font-semibold text-muted"
            onClick={() => {
              haptic.select();
              setSelected(selected.size === DEFAULT_STICKER_ORDER.length ? new Set() : new Set(DEFAULT_STICKER_ORDER));
            }}
          >
            {f(t.common.selected, { count: selected.size })} · {selected.size === DEFAULT_STICKER_ORDER.length ? t.stickers.clearAll : t.stickers.selectAll}
          </button>
        }
      />
      <div className="grid grid-cols-3 gap-2">
        {DEFAULT_STICKER_ORDER.map((emotion) => {
          const on = selected.has(emotion);
          return (
            <motion.button
              key={emotion}
              whileTap={{ scale: 0.94 }}
              onClick={() => {
                haptic.select();
                setSelected((prev) => {
                  const next = new Set(prev);
                  if (next.has(emotion)) next.delete(emotion);
                  else next.add(emotion);
                  return next;
                });
              }}
              className={cn('relative overflow-hidden rounded-2xl border bg-surface-2 text-center transition-shadow', on ? 'selected' : 'border-white/10')}
            >
              {avatar?.dna ? (
                <LazyMascotShot
                  dna={avatar.dna}
                  style={avatar.styleSlug}
                  emotion={emotion}
                  framing="sticker"
                  className="aspect-square w-full"
                  placeholder={<span className="text-[34px] opacity-60">{EMOTION_CATALOG[emotion].emoji}</span>}
                />
              ) : (
                <div className="skeleton aspect-square" />
              )}
              <div className={cn('pb-2 text-[11.5px] font-semibold', on ? 'text-white' : 'text-ink-2')}>{(t.stickers.captions as Record<string, string>)[emotion]}</div>
              {on && <CheckDot className="absolute right-1.5 top-1.5" />}
            </motion.button>
          );
        })}
      </div>
      {overflow > 0 && <p className="mt-3 text-[12px] text-[#ff9aa3]">{f(t.stickers.overflow, { overflow, cost: overflow * CREDIT_COSTS.sticker, credits: profile?.credits ?? 0 })}</p>}

      <div className="sticky bottom-[88px] z-20 -mx-4 mt-6 bg-gradient-to-t from-canvas via-canvas/95 to-transparent px-4 pb-3 pt-8">
        <Button
          block
          size="lg"
          disabled={!selected.size || Boolean(generationId)}
          loading={generate.isPending}
          icon={generationId ? <Loader2 className="size-4 animate-spin" /> : <Sparkles className="size-4" />}
          onClick={() => generate.mutate()}
        >
          {generationId ? t.stickers.drawing : p(t.stickers.generate, selected.size)}
        </Button>
      </div>
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
