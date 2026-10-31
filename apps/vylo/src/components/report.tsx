'use client';

import { Flag } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { useI18n } from '@/i18n/use';
import { sendReport, type ReportKind } from '@/lib/community';
import { Button } from './ui';
import { Sheet } from './sheet';

/** "Found a mistake?" — sends a note about a place, city, visa rule or phrase to the team. */
export function ReportButton({ kind, target, className }: { kind: ReportKind; target: string; className?: string }) {
  const { t, locale } = useI18n();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [contact, setContact] = useState('');
  const [busy, setBusy] = useState(false);

  const submit = async () => {
    setBusy(true);
    try {
      const how = await sendReport({ kind, target, message: message.trim(), contact: contact.trim() || undefined, locale });
      toast.success(how === 'sent' ? t('report.sent') : t('report.saved'));
      setOpen(false);
      setMessage('');
    } catch {
      toast.error(t('report.failed'));
    } finally {
      setBusy(false);
    }
  };

  return (
    <>
      <button onClick={() => setOpen(true)} className={className ?? 'press inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-muted'}>
        <Flag className="size-3.5" /> {t('report.button')}
      </button>
      <Sheet open={open} onClose={() => setOpen(false)} title={t('report.title')}>
        <div className="px-5 pb-5">
          <h2 className="text-[19px] font-bold tracking-[-0.02em]">{t('report.title')}</h2>
          <p className="mt-1 text-[13px] leading-snug text-muted">{t('report.text')}</p>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            maxLength={1000}
            rows={4}
            placeholder={t('report.placeholder')}
            aria-label={t('report.title')}
            className="mt-3 w-full rounded-2xl bg-surface-2 p-3.5 text-[15px] outline-none focus:ring-2 focus:ring-brand/40"
          />
          <input value={contact} onChange={(e) => setContact(e.target.value)} maxLength={120} placeholder={t('report.contact')} aria-label={t('report.contact')} className="mt-2.5 h-11 w-full rounded-2xl bg-surface-2 px-3.5 text-[15px] outline-none focus:ring-2 focus:ring-brand/40" />
          <Button className="mt-3 w-full" onClick={submit} disabled={busy || message.trim().length < 5}>
            {t('report.send')}
          </Button>
        </div>
      </Sheet>
    </>
  );
}
