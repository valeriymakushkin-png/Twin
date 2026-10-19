'use client';

import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { AButton, Badge, Card, PageHeader, Row, Select, TextInput, Toggle, useAdminError } from '@/components/admin/ui';
import { destinations, overrides, type CatalogSettings } from '@/data/catalog';
import { meetups, reviews } from '@/data/social';
import { LOCALE_META, LOCALES } from '@/i18n/config';
import { useI18n } from '@/i18n/use';
import { adminRepo, token, useAdmin } from '@/lib/admin/repo';
import { can } from '@/lib/admin/roles';
import { cn } from '@/lib/utils';

export default function AdminModeration() {
  const { t, c, item, dest, meetupText, user, version, locale } = useI18n();
  const role = useAdmin((s) => s.user?.role);
  const errorText = useAdminError();
  const admin = can(role, 'settings.write');
  const [s, setS] = useState<CatalogSettings>(() => overrides().settings);
  const [busy, setBusy] = useState(false);
  useEffect(() => setS(overrides().settings), [version]);
  const dirty = JSON.stringify(s) !== JSON.stringify(overrides().settings);

  const toggle = (key: 'hiddenReviews' | 'hiddenMeetups', id: string) => {
    const list = s[key] ?? [];
    setS({ ...s, [key]: list.includes(id) ? list.filter((x) => x !== id) : [...list, id] });
  };

  const save = async () => {
    setBusy(true);
    try {
      await adminRepo.saveSettings(token(), s);
      toast.success(t('admin.common.saved'));
    } catch (e) {
      toast.error(errorText(e));
    } finally {
      setBusy(false);
    }
  };

  const cityOptions = [...destinations].sort((a, b) => dest(a.id).name.localeCompare(dest(b.id).name, locale)).map((d) => ({ value: d.id, label: dest(d.id).name }));

  return (
    <>
      <PageHeader title={t('admin.nav.moderation')} actions={<AButton onClick={save} loading={busy} disabled={!dirty}>{t('admin.common.save')}</AButton>} />
      <div className="grid gap-8">
        {admin && (
          <Card title={t('admin.mod.announcement')} footer={t('admin.mod.announcementHint')}>
            {LOCALES.map((l) => (
              <Row key={l} label={`${LOCALE_META[l].flag} ${LOCALE_META[l].native}`}>
                <TextInput value={s.announcement?.[l]?.text ?? ''} onChange={(e) => setS({ ...s, announcement: { ...s.announcement, [l]: { text: e.target.value } } })} />
              </Row>
            ))}
          </Card>
        )}
        {admin && (
          <Card title={t('admin.mod.placeOfDay')}>
            <Row label={t('admin.mod.placeOfDay')}>
              <Select value={s.placeOfDay ?? ''} onChange={(v) => setS({ ...s, placeOfDay: v || undefined })} options={[{ value: '', label: t('admin.mod.auto') }, ...cityOptions]} />
            </Row>
            <Row label={t('admin.mod.featured')} hint={t('admin.mod.featuredHint')}>
              <div className="flex flex-wrap gap-1.5">
                {(s.featured ?? []).map((id) => (
                  <button key={id} onClick={() => setS({ ...s, featured: s.featured!.filter((x) => x !== id) })} className="h-7 rounded-full bg-[#0071e3] px-2.5 text-[12px] font-medium text-white">
                    {dest(id).name} ×
                  </button>
                ))}
                <Select value="" onChange={(v) => v && setS({ ...s, featured: [...(s.featured ?? []), v] })} options={[{ value: '', label: `+ ${t('admin.common.add')}` }, ...cityOptions.filter((o) => !s.featured?.includes(o.value))]} className="w-48" />
              </div>
            </Row>
          </Card>
        )}
        <Card title={t('admin.mod.reviews')}>
          <ul>
            {reviews.map((r) => {
              const hidden = s.hiddenReviews?.includes(r.id);
              return (
                <li key={r.id} className={cn('flex items-start gap-3 border-b border-[#e5e5ea] px-4 py-3 last:border-b-0', hidden && 'opacity-50')}>
                  <div className="min-w-0 flex-1">
                    <p className="text-[13px] font-semibold">
                      {user(r.authorId)?.name} · {item(r.targetId).name} · ★ {r.rating} <Badge className="ml-1">{t('admin.mod.sample')}</Badge>
                    </p>
                    <p className="mt-0.5 line-clamp-2 text-[13px] text-[#424245]">{(c.reviews as Record<string, string>)[r.id]}</p>
                  </div>
                  <Toggle checked={!hidden} onChange={() => toggle('hiddenReviews', r.id)} label={hidden ? t('admin.common.show') : t('admin.common.hide')} />
                </li>
              );
            })}
          </ul>
        </Card>
        <Card title={t('admin.mod.meetups')}>
          <ul>
            {meetups.map((m) => {
              const hidden = s.hiddenMeetups?.includes(m.id);
              return (
                <li key={m.id} className={cn('flex items-center gap-3 border-b border-[#e5e5ea] px-4 py-3 last:border-b-0', hidden && 'opacity-50')}>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[14px] font-semibold">{meetupText(m).title}</p>
                    <p className="truncate text-[12px] text-[#86868b]">
                      {dest(m.destinationId).name} · {user(m.hostId)?.name}
                    </p>
                  </div>
                  <Toggle checked={!hidden} onChange={() => toggle('hiddenMeetups', m.id)} label={hidden ? t('admin.common.show') : t('admin.common.hide')} />
                </li>
              );
            })}
          </ul>
        </Card>
      </div>
    </>
  );
}
