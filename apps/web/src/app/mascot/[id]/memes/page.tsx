'use client';

import { motion } from 'framer-motion';
import { Download, Laugh, Share2, Sparkles, Trash2, Wand2 } from 'lucide-react';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import { EMOTION_CATALOG, MEME_FORMAT_CATALOG, MEME_FORMATS, STICKER_EMOTIONS, type MemeDto, type MemeFormat, type StickerEmotion } from '@mascot/shared';
import { AppShell, TopBar } from '@/components/layout/app-shell';
import { ShareSheet } from '@/components/share/share-sheet';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Chip, EmptyState } from '@/components/ui/misc';
import { api } from '@/lib/api';
import { qk, useInvalidate, useMemes, useMutation } from '@/lib/queries';
import { downloadFile, haptic } from '@/lib/telegram';

const IDEAS = [
  'Me at 9am | Me after one meeting',
  'When the code works on the first try',
  'Nobody: | Me opening the fridge every 5 minutes',
  'POV: you said “one more game” 3 hours ago',
  'My bank account after buying skins',
];

export default function MemesPage() {
  const { id: avatarId } = useParams<{ id: string }>();
  const { data: memes } = useMemes(avatarId);
  const invalidate = useInvalidate();
  const [format, setFormat] = useState<MemeFormat>('classic');
  const [text, setText] = useState('');
  const [emotion, setEmotion] = useState<StickerEmotion | 'auto'>('auto');
  const [share, setShare] = useState<MemeDto | null>(null);
  const recipe = MEME_FORMAT_CATALOG[format];

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

  return (
    <AppShell>
      <TopBar title="Meme generator" subtitle="Type it. Your mascot reacts." />
      <div className="-mx-4 mb-3 flex gap-2 overflow-x-auto px-4 pb-1">
        {MEME_FORMATS.map((f) => (
          <Chip key={f} active={format === f} onClick={() => setFormat(f)}>
            {MEME_FORMAT_CATALOG[f].label}
          </Chip>
        ))}
      </div>
      <Card className="p-4">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value.slice(0, 200))}
          rows={3}
          placeholder={recipe.dualText ? 'Top text | Bottom text' : 'Your caption…'}
          className="w-full resize-none rounded-2xl border border-line bg-white/[0.04] p-3.5 text-[15px] outline-none placeholder:text-faint focus:border-violet-400/60"
        />
        <div className="mt-2 flex items-center justify-between text-[11px] text-faint">
          <span>{recipe.description}{recipe.dualText ? ' · use | to split' : ''}</span>
          <span>{text.length}/200</span>
        </div>
        <div className="-mx-1 mt-3 flex flex-wrap gap-1.5">
          <Chip active={emotion === 'auto'} onClick={() => setEmotion('auto')}>
            <Wand2 className="size-3.5" /> Auto
          </Chip>
          {STICKER_EMOTIONS.map((e) => (
            <Chip key={e} active={emotion === e} onClick={() => setEmotion(e)}>
              {EMOTION_CATALOG[e].emoji}
            </Chip>
          ))}
        </div>
        <Button block size="lg" className="mt-4" disabled={!text.trim()} loading={generate.isPending} icon={<Sparkles className="size-4" />} onClick={() => generate.mutate()}>
          Make meme
        </Button>
      </Card>

      {!memes?.length && (
        <div className="mt-4 space-y-1.5">
          <div className="px-1 text-[12px] font-medium text-muted">Need an idea?</div>
          {IDEAS.map((idea) => (
            <button key={idea} onClick={() => setText(idea)} className="block w-full rounded-xl border border-line bg-white/[0.02] px-3.5 py-2.5 text-left text-[13px] text-ink-2">
              {idea}
            </button>
          ))}
        </div>
      )}

      <section className="mt-6 grid grid-cols-2 gap-2.5">
        {memes?.map((m) => (
          <motion.div key={m.id} layout initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="overflow-hidden rounded-2xl border border-line bg-surface-2">
            {m.imageUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={m.imageUrl} alt={m.topText ?? ''} className="w-full" />
            ) : (
              <div className="skeleton aspect-square" />
            )}
            {m.status === 'READY' && (
              <div className="flex justify-around py-1.5">
                <button aria-label="Download" onClick={() => downloadFile(m.imageUrl!, `meme-${m.id}.jpg`)} className="p-2 text-muted">
                  <Download className="size-4" />
                </button>
                <button aria-label="Share" onClick={() => setShare(m)} className="p-2 text-muted">
                  <Share2 className="size-4" />
                </button>
                <button aria-label="Delete" onClick={() => remove.mutate(m.id)} className="p-2 text-muted">
                  <Trash2 className="size-4" />
                </button>
              </div>
            )}
          </motion.div>
        ))}
      </section>
      {memes?.length === 0 && <EmptyState icon={<Laugh className="size-6" />} title="Your memes live here" />}
      {share && <ShareSheet open onClose={() => setShare(null)} target={{ kind: 'meme', id: share.id }} mediaUrl={share.imageUrl} fileName="meme.jpg" />}
    </AppShell>
  );
}
