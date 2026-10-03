'use client';

import { motion } from 'framer-motion';
import { Clapperboard, Crown, Download, Loader2, Play, Share2, Sparkles } from 'lucide-react';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import { TTS_VOICES, VIDEO_TEMPLATE_CATALOG, VIDEO_TEMPLATES, type TtsVoice, type VideoAspectRatio, type VideoDto, type VideoTemplate } from '@mascot/shared';
import { AppShell } from '@/components/layout/app-shell';
import { ShareSheet } from '@/components/share/share-sheet';
import { MascotShot } from '@/components/three/mascot-shot';
import { Button } from '@/components/ui/button';
import { Card, ScreenTitle, SectionTitle } from '@/components/ui/card';
import { Chip, EmptyState, Segmented } from '@/components/ui/misc';
import { api } from '@/lib/api';
import { useT } from '@/lib/i18n';
import { qk, useAvatar, useInvalidate, useMutation, useProfile, useVideos } from '@/lib/queries';
import { downloadFile, haptic } from '@/lib/telegram';
import { usePaywall } from '@/store/paywall';

const PREVIEW: Record<VideoTemplate, Array<{ emotion: string; yaw: number }>> = {
  dancing: [{ emotion: 'happy', yaw: -0.5 }, { emotion: 'laughing', yaw: 0 }, { emotion: 'cool', yaw: 0.5 }],
  talking: [{ emotion: 'happy', yaw: -0.2 }, { emotion: 'shocked', yaw: 0 }, { emotion: 'thinking', yaw: 0.25 }],
  walking: [{ emotion: 'cool', yaw: -0.8 }, { emotion: 'happy', yaw: -0.4 }, { emotion: 'sigma', yaw: 0 }],
  podcast: [{ emotion: 'thinking', yaw: 0.35 }, { emotion: 'laughing', yaw: 0 }, { emotion: 'happy', yaw: -0.35 }],
  promo: [{ emotion: 'cool', yaw: 0.3 }, { emotion: 'happy', yaw: 0 }, { emotion: 'love', yaw: -0.3 }],
};

export default function VideosPage() {
  const { id: avatarId } = useParams<{ id: string }>();
  const { data: profile } = useProfile();
  const { data: avatar } = useAvatar(avatarId);
  const { data: videos } = useVideos(avatarId);
  const invalidate = useInvalidate();
  const showPaywall = usePaywall((s) => s.show);
  const [template, setTemplate] = useState<VideoTemplate>('dancing');
  const [script, setScript] = useState('');
  const [prompt, setPrompt] = useState('');
  const [voice, setVoice] = useState<TtsVoice>('nova');
  const [aspect, setAspect] = useState<VideoAspectRatio>('9:16');
  const [share, setShare] = useState<VideoDto | null>(null);
  const recipe = VIDEO_TEMPLATE_CATALOG[template];
  const premium = profile?.plan === 'PREMIUM';
  const { t, f, p } = useT();

  const generate = useMutation({
    mutationFn: () =>
      api.videos.generate({
        avatarId,
        template,
        aspectRatio: aspect,
        prompt: prompt.trim() || undefined,
        script: recipe.scriptMode !== 'none' && script.trim() ? script.trim() : undefined,
        voice: recipe.scriptMode !== 'none' ? voice : undefined,
      }),
    onSuccess: () => {
      haptic.success();
      setScript('');
      void invalidate(qk.videos(avatarId), qk.profile);
    },
  });

  const scriptMissing = recipe.scriptMode === 'required' && !script.trim();

  return (
    <AppShell>
      <ScreenTitle
        title={t.videos.title}
        subtitle={t.videos.subtitle}
        right={premium ? <span className="mt-1.5 shrink-0 rounded-full border border-white/10 px-2.5 py-1 text-[11px] font-semibold text-muted">{profile?.usage.videoUnitsRemaining ?? 0} ⚡</span> : undefined}
      />

      <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1">
        {VIDEO_TEMPLATES.map((key) => (
          <Chip
            key={key}
            active={template === key}
            onClick={() => {
              haptic.select();
              setTemplate(key);
            }}
          >
            {t.videos.templates[key].label}
          </Chip>
        ))}
      </div>

      <div className="mt-3 grid grid-cols-3 gap-2">
        {PREVIEW[template].map((frame, i) => (
          <motion.div key={`${template}-${i}`} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }} className="relative aspect-[9/14] overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(180deg,#24161a,#0d0d10)]">
            <div className="glow-red absolute inset-x-0 bottom-0 h-2/3 opacity-60 blur-lg" />
            {avatar?.dna ? <MascotShot dna={avatar.dna} style={avatar.styleSlug} emotion={frame.emotion} yaw={frame.yaw} framing="bust" className="absolute inset-x-[-20%] bottom-0 top-[8%]" /> : <div className="skeleton size-full" />}
            {i === 1 && (
              <span className="absolute left-1/2 top-1/2 grid size-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-black/55 text-white backdrop-blur">
                <Play className="size-4 fill-white" />
              </span>
            )}
          </motion.div>
        ))}
      </div>
      <p className="mt-2 px-0.5 text-[12.5px] text-muted">
        {t.videos.templates[template].description} · {p(t.videos.meta, recipe.cost, { sec: recipe.durationSec })}
      </p>

      <Card className="mt-3 space-y-4 p-4">
        {recipe.scriptMode !== 'none' && (
          <div>
            <SectionTitle title={recipe.scriptMode === 'required' ? t.videos.scriptRequired : t.videos.scriptOptional} className="mb-2" />
            <textarea
              value={script}
              onChange={(e) => setScript(e.target.value.slice(0, recipe.maxScriptChars))}
              rows={3}
              placeholder={t.videos.scriptPlaceholder}
              className="w-full resize-none rounded-2xl border border-white/10 bg-black/30 p-3.5 text-[14px] outline-none placeholder:text-faint focus:border-brand/60"
            />
            <div className="mt-1 text-right text-[11px] text-faint">
              {script.length}/{recipe.maxScriptChars}
            </div>
            <div className="-mx-4 mt-1 flex gap-1.5 overflow-x-auto px-4">
              {TTS_VOICES.map((v) => (
                <Chip key={v} active={voice === v} onClick={() => setVoice(v)} className="capitalize">
                  {v}
                </Chip>
              ))}
            </div>
          </div>
        )}
        <input
          value={prompt}
          onChange={(e) => setPrompt(e.target.value.slice(0, 300))}
          placeholder={t.videos.direction}
          className="h-11 w-full rounded-xl border border-white/10 bg-black/30 px-3.5 text-[14px] outline-none placeholder:text-faint focus:border-brand/60"
        />
        <Segmented
          value={aspect}
          onChange={setAspect}
          options={[
            { value: '9:16', label: t.videos.aspect['9:16'] },
            { value: '1:1', label: t.videos.aspect['1:1'] },
            { value: '16:9', label: t.videos.aspect['16:9'] },
          ]}
        />
      </Card>

      <section className="mt-6 space-y-3">
        {videos?.map((v) => (
          <Card key={v.id} className="overflow-hidden">
            {v.status === 'READY' && v.videoUrl ? (
              <video src={v.videoUrl} poster={v.thumbnailUrl ?? undefined} controls playsInline loop className="w-full bg-black" />
            ) : v.status === 'FAILED' ? (
              <div className="p-5 text-center text-[13px] text-brand">{t.videos.failed}</div>
            ) : (
              <div className="flex aspect-video flex-col items-center justify-center gap-2 text-[13px] text-muted">
                <Loader2 className="size-6 animate-spin text-brand" />
                {f(t.videos.rendering, { template: t.videos.templates[v.template].label })}
              </div>
            )}
            <div className="flex items-center justify-between px-4 py-2.5">
              <span className="text-[13px] font-bold">
                {t.videos.templates[v.template].label}
                <span className="ml-1.5 text-[11px] font-normal text-muted">{v.aspectRatio}</span>
              </span>
              {v.status === 'READY' && v.videoUrl && (
                <div className="flex gap-1">
                  <button aria-label={t.common.download} onClick={() => downloadFile(v.videoUrl!, `mascot-${v.template}.mp4`)} className="p-2 text-muted">
                    <Download className="size-4" />
                  </button>
                  <button aria-label={t.common.share} onClick={() => setShare(v)} className="p-2 text-brand">
                    <Share2 className="size-4" />
                  </button>
                </div>
              )}
            </div>
          </Card>
        ))}
        {videos?.length === 0 && <EmptyState icon={<Clapperboard className="size-6" />} title={t.videos.emptyTitle} body={t.videos.emptyBody} />}
      </section>

      <div className="sticky bottom-[88px] z-20 -mx-4 mt-6 bg-gradient-to-t from-canvas via-canvas/95 to-transparent px-4 pb-3 pt-8">
        <Button
          block
          size="lg"
          disabled={premium && scriptMissing}
          loading={generate.isPending}
          icon={premium ? <Sparkles className="size-4" /> : <Crown className="size-4" />}
          onClick={() => (premium ? generate.mutate() : showPaywall('VIDEO_PREMIUM_ONLY', t.mascot.videosPremium))}
        >
          {premium && scriptMissing ? t.videos.writeScript : t.videos.generate}
        </Button>
      </div>
      {share && <ShareSheet open onClose={() => setShare(null)} target={{ kind: 'video', id: share.id }} mediaUrl={share.videoUrl} fileName="mascot.mp4" />}
    </AppShell>
  );
}
