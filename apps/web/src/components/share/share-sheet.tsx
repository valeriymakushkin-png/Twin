'use client';

import { Download, Link2, MessageCircle, Send, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import type { PrepareShareInput } from '@mascot/shared';
import { Sheet } from '@/components/ui/sheet';
import { api, errorMessage } from '@/lib/api';
import { env } from '@/lib/env';
import { canShareToStory, downloadFile, haptic, shareMessage, shareToStory, shareUrl } from '@/lib/telegram';
import { useT } from '@/lib/i18n';

/**
 * Share surfaces in order of virality: Telegram chat share (prepared inline message with a
 * "Make my own mascot" button), Stories (with a deep-link widget), link, download.
 */
export function ShareSheet({
  open,
  onClose,
  target,
  mediaUrl,
  fileName,
}: {
  open: boolean;
  onClose: () => void;
  target: PrepareShareInput;
  mediaUrl?: string | null;
  fileName?: string;
}) {
  const [busy, setBusy] = useState<string | null>(null);
  const { t, f } = useT();

  async function prepare() {
    return api.share.prepare(target);
  }

  const actions = [
    {
      key: 'chat',
      icon: Send,
      label: t.share.chat,
      run: async () => {
        const prepared = await prepare();
        const sent = prepared.preparedMessageId ? await shareMessage(prepared.preparedMessageId) : false;
        if (!sent) shareUrl(prepared.shareUrl, t.share.chatText);
      },
    },
    ...(canShareToStory()
      ? [
          {
            key: 'story',
            icon: Sparkles,
            label: t.share.story,
            run: async () => {
              const prepared = await prepare();
              shareToStory(prepared.mediaUrl, t.share.storyText, { url: prepared.shareUrl, name: t.share.storyWidget });
            },
          },
        ]
      : []),
    {
      key: 'link',
      icon: Link2,
      label: t.share.link,
      run: async () => {
        const prepared = await prepare();
        await navigator.clipboard.writeText(prepared.shareUrl);
        toast.success(t.share.copied);
      },
    },
    ...(mediaUrl
      ? [{ key: 'download', icon: Download, label: t.share.save, run: async () => downloadFile(mediaUrl, fileName ?? 'mascot.png') }]
      : []),
  ];

  return (
    <Sheet open={open} onClose={onClose} title={t.share.title}>
      <div className="grid grid-cols-2 gap-2.5">
        {actions.map(({ key, icon: Icon, label, run }) => (
          <button
            key={key}
            disabled={busy !== null}
            onClick={async () => {
              haptic.tap();
              setBusy(key);
              try {
                await run();
              } catch (error) {
                toast.error(errorMessage(error, (error as Error).message));
              } finally {
                setBusy(null);
              }
            }}
            className="card flex flex-col items-start gap-3 rounded-2xl p-4 text-left transition-colors hover:border-brand/40 disabled:opacity-60"
          >
            <span className="grid size-9 place-items-center rounded-xl bg-brand/12 text-brand ring-1 ring-brand/25">
              <Icon className="size-[18px]" />
            </span>
            <span className="text-[13px] font-semibold">{busy === key ? t.share.opening : label}</span>
          </button>
        ))}
      </div>
      <p className="mt-4 flex items-center gap-1.5 text-[11px] text-faint">
        <MessageCircle className="size-3.5" /> {f(t.share.tip, { bot: env.botUsername })}
      </p>
    </Sheet>
  );
}
