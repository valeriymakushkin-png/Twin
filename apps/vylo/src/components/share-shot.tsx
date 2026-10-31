'use client';

import { Camera } from 'lucide-react';
import { useRef, useState } from 'react';
import { toast } from 'sonner';
import { hasApi } from '@/lib/api';
import { useI18n } from '@/i18n/use';
import { prepareImage, sendPhoto } from '@/lib/community';
import { Sheet } from './sheet';
import { Button } from './ui';

/**
 * "Were you here? Share your photo": a traveller sends a picture of themselves at the spot. It goes to the
 * moderation queue; nothing appears in the app until the team approves it.
 */
export function ShareShot({ placeId, accent }: { placeId: string; accent: string }) {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [credit, setCredit] = useState('');
  const [consent, setConsent] = useState(false);
  const [busy, setBusy] = useState(false);
  const input = useRef<HTMLInputElement>(null);

  const submit = async () => {
    if (!file) return;
    setBusy(true);
    try {
      await sendPhoto(placeId, await prepareImage(file), credit.trim());
      toast.success(t('shot.sent'));
      setOpen(false);
      setFile(null);
      setConsent(false);
    } catch {
      toast.error(t('shot.failed'));
    } finally {
      setBusy(false);
    }
  };

  return (
    <>
      <button onClick={() => setOpen(true)} className="press flex w-full items-center gap-3 rounded-[20px] p-4 text-left" style={{ background: `${accent}10` }}>
        <span className="grid size-11 shrink-0 place-items-center rounded-2xl text-white" style={{ background: accent }}>
          <Camera className="size-5" />
        </span>
        <span className="min-w-0">
          <span className="block text-[15px] font-bold">{t('shot.title')}</span>
          <span className="block text-[12.5px] leading-snug text-muted">{t('shot.text')}</span>
        </span>
      </button>
      <Sheet open={open} onClose={() => setOpen(false)} title={t('shot.title')}>
        <div className="px-5 pb-5">
          <h2 className="text-[19px] font-bold tracking-[-0.02em]">{t('shot.title')}</h2>
          {!hasApi() ? (
            <p className="mt-3 rounded-2xl bg-amber-50 p-3.5 text-[13.5px] leading-snug text-ink-2">{t('shot.noServer')}</p>
          ) : (
            <>
              <input ref={input} type="file" accept="image/jpeg,image/png,image/webp" hidden onChange={(e) => setFile(e.target.files?.[0] ?? null)} />
              <button onClick={() => input.current?.click()} className="press mt-3 flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-surface-2 text-[14px] font-semibold">
                <Camera className="size-4" /> {file ? file.name : t('shot.choose')}
              </button>
              <input value={credit} onChange={(e) => setCredit(e.target.value)} maxLength={80} placeholder={t('shot.credit')} aria-label={t('shot.credit')} className="mt-2.5 h-11 w-full rounded-2xl bg-surface-2 px-3.5 text-[15px] outline-none focus:ring-2 focus:ring-brand/40" />
              <label className="mt-3 flex items-start gap-3 text-[12.5px] leading-snug text-ink-2">
                <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-0.5 size-5 shrink-0 accent-brand" />
                <span>{t('shot.consent')}</span>
              </label>
              <Button className="mt-3 w-full" onClick={submit} disabled={!file || !consent || busy}>
                {t('shot.send')}
              </Button>
            </>
          )}
        </div>
      </Sheet>
    </>
  );
}
