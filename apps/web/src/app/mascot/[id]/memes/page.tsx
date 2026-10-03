'use client';

import { motion } from 'framer-motion';
import { Download, Share2, Sparkles, Trash2, Wand2 } from 'lucide-react';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import { EMOTION_CATALOG, MEME_FORMAT_CATALOG, MEME_FORMATS, STICKER_EMOTIONS, type MemeDto, type MemeFormat, type StickerEmotion } from '@mascot/shared';
import { AppShell } from '@/components/layout/app-shell';
import { ShareSheet } from '@/components/share/share-sheet';
import { MascotShot } from '@/components/three/mascot-shot';
import { Button } from '@/components/ui/button';
import { Card, ScreenTitle } from '@/components/ui/card';
import { Chip } from '@/components/ui/misc';
import { api } from '@/lib/api';
import { useT } from '@/lib/i18n';
import { qk, useAvatar, useInvalidate, useMemes, useMutation } from '@/lib/queries';
import { downloadFile, haptic } from '@/lib/telegram';

export default function MemesPage() {
  const { id: avatarId } = useParams<{ id: string }>();
  const { data: memes } = useMemes(avatarId);
  const { data: avatar } = useAvatar(avatarId);
  const invalidate = useInvalidate();
  const [format, setFormat] = useState<MemeFormat>('classic');
  const [text, setText] = useState('');
  const [emotion, setEmotion] = useState<StickerEmotion | 'auto'>('auto');
  const [share, setShare] = useState<MemeDto | null>(null);
  const recipe = MEME_FORMAT_CATALOG[format];
  const { t } = useT();

  const generate = useMutation({
    mutationFn: () => api.memes.generate({ avatarId, format, text, emotion: emotion === 'auto' ? undefined : emotion }),
    onSuccess: () => {
      haptic.success();
      setText('');
      void invalidate(qk.memes(avatarId), qk.profile);
    },
  });

  const remove = useMutation({
    mutationFn: (id: string) => api.memes.remove(id),
    onSuccess: () => invalidate(qk.memes(avatarId)),
  });

  const latest = memes?.[0];

  return (
    <AppShell>
      <ScreenTitle title={t.memes.title} subtitle={t.memes.subtitle} />
      <Card className="p-4">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value.slice(0, 200))}
          rows={3}
          placeholder={recipe.dualText ? t.memes.placeholderDual : t.memes.placeholderSingle}
          className="w-full resize-none rounded-2xl border border-white/10 bg-black/30 p-3.5 text-[15px] outline-none placeholder:text-faint focus:border-brand/60"
        />
        <div className="mt-1.5 flex items-center justify-between text-[11px] text-faint">
          <span>{t.memes.example}</span>
          <span>{text.length}/200</span>
        </div>
        <div className="-mx-4 mt-3 flex gap-1.5 overflow-x-auto px-4 pb-1">
          {MEME_FORMATS.map((key) => (
            <Chip key={key} active={format === key} onClick={() => setFormat(key)}>
              {t.memes.formats[key].label}
            </Chip>
          ))}
        </div>
        <div className="-mx-4 mt-2 flex gap-1.5 overflow-x-auto px-4 pb-1">
          <Chip active={emotion === 'auto'} onClick={() => setEmotion('auto')}>
            <Wand2 className="size-3.5" /> {t.memes.auto}
          </Chip>
          {STICKER_EMOTIONS.map((e) => (
            <Chip key={e} active={emotion === e} onClick={() => setEmotion(e)}>
              {EMOTION_CATALOG[e].emoji}
            </Chip>
          ))}
        </div>
        <Button block size="lg" className="mt-4" disabled={!text.trim()} loading={generate.isPending} icon={<Sparkles className="size-4" />} onClick={() => generate.mutate()}>
          {t.memes.generate}
        </Button>
      </Card>

      {latest ? (
        <motion.div key={latest.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-4 overflow-hidden rounded-[22px] border border-white/[0.07]">
          {latest.imageUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={latest.imageUrl} alt={latest.topText ?? ''} className="w-full" />
          ) : (
            <div className="skeleton aspect-square" />
          )}
          {latest.status === 'READY' && (
            <div className="flex justify-around bg-surface py-1.5">
              <button aria-label={t.common.download} onClick={() => downloadFile(latest.imageUrl!, `meme-${latest.id}.jpg`)} className="p-2 text-muted">
                <Download className="size-[18px]" />
              </button>
              <button aria-label={t.common.share} onClick={() => setShare(latest)} className="p-2 text-brand">
                <Share2 className="size-[18px]" />
              </button>
              <button aria-label={t.common.delete} onClick={() => remove.mutate(latest.id)} className="p-2 text-muted">
                <Trash2 className="size-[18px]" />
              </button>
            </div>
          )}
        </motion.div>
      ) : (
        <div className="mt-4 space-y-1.5">
          {avatar?.dna && (
            <Card className="relative mb-3 overflow-hidden">
              <MascotShot dna={avatar.dna} style={avatar.styleSlug} emotion="laughing" framing="portrait" className="mx-auto aspect-square w-[70%]" />
              <div className="absolute inset-x-0 top-3 text-center text-[22px] font-black uppercase tracking-tight text-white [text-shadow:0_2px_0_#000,0_0_12px_#000]">{t.memes.example.split(':').pop()?.trim()}</div>
            </Card>
          )}
          <div className="px-1 text-[12px] font-semibold text-muted">{t.memes.ideasTitle}</div>
          {t.memes.ideas.map((idea) => (
            <button key={idea} onClick={() => setText(idea)} className="card block w-full rounded-xl px-3.5 py-2.5 text-left text-[13px] text-ink-2">
              {idea}
            </button>
          ))}
        </div>
      )}

      {memes && memes.length > 1 && (
        <section className="mt-4 grid grid-cols-2 gap-2.5">
          {memes.slice(1).map((m) =>
            m.imageUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={m.id} src={m.imageUrl} alt="" onClick={() => setShare(m)} className="w-full rounded-2xl border border-white/[0.07]" />
            ) : (
              <div key={m.id} className="skeleton aspect-square rounded-2xl" />
            ),
          )}
        </section>
      )}
      {share && <ShareSheet open onClose={() => setShare(null)} target={{ kind: 'meme', id: share.id }} mediaUrl={share.imageUrl} fileName="meme.jpg" />}
    </AppShell>
  );
}
