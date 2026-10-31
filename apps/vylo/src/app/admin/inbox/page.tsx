'use client';

import { Check, ExternalLink, X } from 'lucide-react';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { toast } from 'sonner';
import { AButton, Badge, Card, Empty, PageHeader, Segmented, useAdminError } from '@/components/admin/ui';
import { Photo } from '@/components/photo';
import { placeById } from '@/data/catalog';
import { useI18n } from '@/i18n/use';
import { adminRepo, token, useAdmin, type Submission } from '@/lib/admin/repo';
import { can } from '@/lib/admin/roles';

const where = (s: Submission) => {
  const kind = s.kind.replace('report:', '');
  if (kind === 'place' || s.kind === 'photo') return `/admin/place/?id=${s.target}`;
  if (kind === 'city') return `/admin/city/?id=${s.target}`;
  if (kind === 'country' || kind === 'visa') return `/admin/country/?code=${s.target}`;
  if (kind === 'phrase') return '/admin/phrases/';
  return undefined;
};

/** Reports and photos travellers sent, waiting for a moderator. */
export default function AdminInbox() {
  const { t, place, locale } = useI18n();
  const role = useAdmin((s) => s.user?.role);
  const errorText = useAdminError();
  const [status, setStatus] = useState<Submission['status']>('new');
  const [list, setList] = useState<Submission[]>([]);
  const [counts, setCounts] = useState<Record<string, number>>({});
  const [busy, setBusy] = useState<string | null>(null);
  const canReview = can(role, 'moderate');

  const load = useCallback(async () => {
    try {
      const r = await adminRepo.submissions(token(), status);
      setList(r.list);
      setCounts(r.counts);
    } catch (e) {
      toast.error(errorText(e));
    }
  }, [status, errorText]);
  useEffect(() => void load(), [load]);

  const review = async (s: Submission, next: Submission['status'], publish = false) => {
    setBusy(s.id);
    try {
      if (publish && s.url) {
        // The picture joins the spot's "how people shoot it" strip; approving it is what publishes it.
        const existing = placeById(s.target)?.people ?? [];
        await adminRepo.saveEntity(token(), 'places', s.target, { people: [...existing, s.url] });
      }
      await adminRepo.reviewSubmission(token(), s.id, next);
      toast.success(t('admin.common.saved'));
      await load();
    } catch (e) {
      toast.error(errorText(e));
    } finally {
      setBusy(null);
    }
  };

  const date = (ms: number) => new Date(ms).toLocaleString(locale, { dateStyle: 'medium', timeStyle: 'short' });

  return (
    <>
      <PageHeader title={t('inbox.title')} subtitle={t('inbox.hint')} />
      <Segmented
        value={status}
        onChange={setStatus}
        options={[
          { value: 'new', label: `${t('inbox.new')} · ${counts.new ?? 0}` },
          { value: 'done', label: t('inbox.done') },
          { value: 'approved', label: t('inbox.approved') },
          { value: 'rejected', label: t('inbox.rejected') },
        ]}
        className="mb-6"
      />
      {list.length === 0 ? (
        <Empty>{t('inbox.empty')}</Empty>
      ) : (
        <div className="grid gap-4">
          {list.map((s) => {
            const link = where(s);
            const isPhoto = s.kind === 'photo';
            return (
              <Card key={s.id}>
                <div className="flex flex-col gap-4 p-4 sm:flex-row">
                  {isPhoto && s.url && (
                    <a href={s.url} target="_blank" rel="noopener noreferrer" className="block shrink-0">
                      <Photo id={s.url} alt="" width={400} className="h-40 w-32" rounded="rounded-xl" />
                    </a>
                  )}
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge color={isPhoto ? '#8b5cf6' : '#0071e3'}>{isPhoto ? t('inbox.photo') : t(`inbox.kind.${s.kind === 'report:other' ? 'misc' : s.kind.replace('report:', '')}` as 'inbox.kind.place')}</Badge>
                      <span className="text-[13px] font-semibold">{isPhoto ? place(s.target).name : s.target}</span>
                      {link && (
                        <Link href={link} className="inline-flex items-center gap-1 text-[12.5px] font-medium text-[#0071e3]">
                          {t('inbox.open')} <ExternalLink className="size-3" />
                        </Link>
                      )}
                      <span className="ml-auto text-[12px] text-[#86868b]">{date(s.createdAt)}</span>
                    </div>
                    {s.payload.message && <p className="mt-2 whitespace-pre-wrap text-[14px] leading-snug text-[#1d1d1f]">{s.payload.message}</p>}
                    {s.payload.credit && <p className="mt-2 text-[13px] text-[#424245]">{t('inbox.credit', { name: s.payload.credit })}</p>}
                    {s.payload.contact && <p className="mt-1 text-[12.5px] text-[#6e6e73]">{s.payload.contact}</p>}
                    {canReview && s.status === 'new' && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {isPhoto ? (
                          <AButton size="sm" loading={busy === s.id} onClick={() => review(s, 'approved', true)}>
                            <Check className="size-4" /> {t('inbox.publish')}
                          </AButton>
                        ) : (
                          <AButton size="sm" loading={busy === s.id} onClick={() => review(s, 'done')}>
                            <Check className="size-4" /> {t('inbox.markDone')}
                          </AButton>
                        )}
                        <AButton size="sm" variant="secondary" loading={busy === s.id} onClick={() => review(s, 'rejected')}>
                          <X className="size-4" /> {t('inbox.reject')}
                        </AButton>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      )}
    </>
  );
}
