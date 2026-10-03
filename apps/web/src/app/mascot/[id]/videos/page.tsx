'use client';

import { motion } from 'framer-motion';
import { Clapperboard, Crown, Download, Loader2, Share2, Sparkles } from 'lucide-react';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import {
  TTS_VOICES,
  VIDEO_TEMPLATE_CATALOG,
  VIDEO_TEMPLATES,
  type TtsVoice,
  type VideoAspectRatio,
  type VideoDto,
  type VideoTemplate,
} from '@mascot/shared';
import { AppShell, TopBar } from '@/components/layout/app-shell';
import { ShareSheet } from '@/components/share/share-sheet';
import { Button } from '@/components/ui/button';
import { Card, SectionTitle } from '@/components/ui/card';
import { Chip, EmptyState, Segmented } from '@/components/ui/misc';
import { api } from '@/lib/api';
import { cn } from '@/lib/cn';
import { qk, useInvalidate, useMutation, useProfile, useVideos } from '@/lib/queries';
import { downloadFile, haptic } from '@/lib/telegram';
import { usePaywall } from '@/store/paywall';

const ICONS: Record<VideoTemplate, string> = { dancing: '🕺', talking: '🗣️', walking: '🚶', podcast: '🎙️', promo: '🚀' };

export default function VideosPage() {
  const { id: avatarId } = useParams<{ id: string }>();
  const { data: profile } = useProfile();
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
      <TopBar
        title="Videos"
        subtitle={premium ? `${profile?.usage.videoUnitsRemaining ?? 0} video credits left this month` : 'Premium feature'}
      />
      {!premium && (
        <Card className="mb-4 flex items-center gap-3 border-amber-300/20 bg-amber-300/[0.06] p-4">
          <Crown className="size-6 shrink-0 text-amber-300" />
          <div className="flex-1 text-[13px] text-ink-2">Make your mascot dance, talk and star in promos.</div>
          <Button size="sm" variant="star" onClick={() => showPaywall('VIDEO_PREMIUM_ONLY', 'Videos are part of Premium.')}>
            Unlock
          </Button>
        </Card>
      )}

      <div className="grid grid-cols-3 gap-2">
        {VIDEO_TEMPLATES.map((t) => {
          const r = VIDEO_TEMPLATE_CATALOG[t];
          return (
            <motion.button
              key={t}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                haptic.select();
                setTemplate(t);
              }}
              className={cn('rounded-2xl border p-3 text-left', template === t ? 'border-violet-400/60 bg-violet-500/15' : 'border-line bg-white/[0.02]')}
            >
              <div className="text-xl">{ICONS[t]}</div>
              <div className="mt-1 text-[12.5px] font-semibold">{r.label}</div>
              <div className="text-[10.5px] text-muted">{r.durationSec}s · {r.cost} credit{r.cost > 1 ? 's' : ''}</div>
            </motion.button>
          );
        })}
      </div>

      <Card className="mt-3 space-y-4 p-4">
        <p className="text-[13px] text-muted">{recipe.description}</p>
        {recipe.scriptMode !== 'none' && (
          <div>
            <SectionTitle title={recipe.scriptMode === 'required' ? 'What should your mascot say?' : 'Voice-over (optional)'} className="mb-2 px-0" />
            <textarea
              value={script}
              onChange={(e) => setScript(e.target.value.slice(0, recipe.maxScriptChars))}
              rows={3}
              placeholder="Hey everyone! Welcome back to the channel…"
              className="w-full resize-none rounded-2xl border border-line bg-white/[0.04] p-3.5 text-[14px] outline-none placeholder:text-faint focus:border-violet-400/60"
            />
            <div className="mt-1 text-right text-[11px] text-faint">{script.length}/{recipe.maxScriptChars}</div>
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
          placeholder="Optional direction, e.g. “on a neon rooftop at night”"
          className="h-11 w-full rounded-xl border border-line bg-white/[0.04] px-3.5 text-[14px] outline-none placeholder:text-faint focus:border-violet-400/60"
        />
        <Segmented
          value={aspect}
          onChange={setAspect}
          options={[
            { value: '9:16', label: '9:16 Reels' },
            { value: '1:1', label: '1:1 Post' },
            { value: '16:9', label: '16:9 YouTube' },
          ]}
        />
        <Button
          block
          size="lg"
          disabled={scriptMissing}
          loading={generate.isPending}
          icon={<Sparkles className="size-4" />}
          onClick={() => (premium ? generate.mutate() : showPaywall('VIDEO_PREMIUM_ONLY', 'Videos are part of Premium.'))}
        >
          {scriptMissing ? 'Write a script first' : 'Generate video'}
        </Button>
      </Card>

      <section className="mt-6 space-y-3">
        {videos?.map((v) => (
          <Card key={v.id} className="overflow-hidden">
            {v.status === 'READY' && v.videoUrl ? (
              <video src={v.videoUrl} poster={v.thumbnailUrl ?? undefined} controls playsInline loop className="w-full bg-black" />
            ) : v.status === 'FAILED' ? (
              <div className="p-5 text-center text-[13px] text-rose-300">Generation failed — credits refunded.</div>
            ) : (
              <div className="flex aspect-video flex-col items-center justify-center gap-2 text-[13px] text-muted">
                <Loader2 className="size-6 animate-spin text-violet-300" />
                Rendering {VIDEO_TEMPLATE_CATALOG[v.template].label.toLowerCase()} · ~2 min
              </div>
            )}
            <div className="flex items-center justify-between px-4 py-2.5">
              <span className="text-[13px] font-semibold">
                {ICONS[v.template]} {VIDEO_TEMPLATE_CATALOG[v.template].label}
                <span className="ml-1.5 text-[11px] font-normal text-muted">{v.aspectRatio}</span>
              </span>
              {v.status === 'READY' && v.videoUrl && (
                <div className="flex gap-1">
                  <button aria-label="Download" onClick={() => downloadFile(v.videoUrl!, `mascot-${v.template}.mp4`)} className="p-2 text-muted">
                    <Download className="size-4" />
                  </button>
                  <button aria-label="Share" onClick={() => setShare(v)} className="p-2 text-muted">
                    <Share2 className="size-4" />
                  </button>
                </div>
              )}
            </div>
          </Card>
        ))}
        {videos?.length === 0 && <EmptyState icon={<Clapperboard className="size-6" />} title="No videos yet" body="Pick a template and your mascot comes to life." />}
      </section>
      {share && <ShareSheet open onClose={() => setShare(null)} target={{ kind: 'video', id: share.id }} mediaUrl={share.videoUrl} fileName="mascot.mp4" />}
    </AppShell>
  );
}
