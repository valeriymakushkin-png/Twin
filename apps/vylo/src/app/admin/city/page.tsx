'use client';

import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useState } from 'react';
import { toast } from 'sonner';
import { EditorFrame, useEntityEditor } from '@/components/admin/editor';
import { CopyText, GalleryField, LocalizedFields, MapPicker, MonthPicker, PhotoField, TagPicker, ThemeField } from '@/components/admin/fields';
import { Card, NumberInput, Row, Select, TextInput } from '@/components/admin/ui';
import { Photo } from '@/components/photo';
import { bundledDestination, countries, destinationById, destinationHref, overrides, placesIn } from '@/data/catalog';
import type { Destination } from '@/data/types';
import { useI18n } from '@/i18n/use';
import { allDestinations, slugify } from '@/lib/admin/entities';
import { flag } from '@/lib/countries';

function CityEditor() {
  const params = useSearchParams();
  const router = useRouter();
  const { t, dest, place, country, locale } = useI18n();
  const isNew = params.get('new') === '1';
  const [id] = useState(() => (isNew ? `new-${Date.now().toString(36)}` : (params.get('id') ?? '')));
  const bundled = isNew ? undefined : bundledDestination(id);
  const existing = isNew ? undefined : allDestinations().find((d) => d.id === id);

  const editor = useEntityEditor<Destination>({
    kind: 'destinations',
    id,
    bundled,
    initial: () => {
      if (existing) return { ...existing, id };
      const code = params.get('country') ?? 'RU';
      const sibling = allDestinations().find((d) => d.countryCode === code);
      return {
        id,
        countryCode: code,
        lat: sibling?.lat ?? 55.75,
        lng: sibling?.lng ?? 37.62,
        image: '',
        gallery: [],
        rating: 4.6,
        reviews: 0,
        tags: ['city'],
        months: [5, 6, 7, 8, 9],
        budgetPerDay: sibling?.budgetPerDay ?? 80,
        currency: sibling?.currency ?? 'EUR',
        language: sibling?.language ?? 'en',
        timezone: sibling?.timezone ?? 'UTC+3',
        zoom: 11,
        theme: sibling?.theme ?? { accent: '#4f46e5', accent2: '#ec4899', motif: 'grid' },
      };
    },
  });
  const { facts: d, setFacts, text, setText, canEdit } = editor;
  const set = <K extends keyof Destination>(k: K, v: Destination[K]) => setFacts({ ...d, [k]: v });
  if (!isNew && !existing) return <p className="text-[#86868b]">{t('admin.common.noResults')}</p>;

  const name = (text[locale]?.name as string) || (text.en?.name as string) || (isNew ? t('admin.edit.createCity') : dest(id).name);

  const onSave = async () => {
    const firstName = String(text.en?.name || text[locale]?.name || Object.values(text).find((x) => x?.name)?.name || '');
    if ((isNew && !firstName.trim()) || !/^[A-Z]{2}$/.test(d.countryCode)) return void toast.error(t('admin.edit.required'));
    if (!isNew) return void editor.save();
    let newId = slugify(firstName) || 'city';
    for (let i = 2; destinationById(newId) || bundledDestination(newId) || overrides().destinations[newId]; i++) newId = `${slugify(firstName)}-${i}`;
    if (await editor.save({ id: undefined }, newId)) router.replace(`/admin/city/?id=${newId}`);
  };

  const countryOptions = [...countries].sort((a, b) => country(a.code).localeCompare(country(b.code), locale)).map((c) => ({ value: c.code, label: `${flag(c.code)} ${country(c.code)}` }));

  return (
    <EditorFrame
      back={{ href: '/admin/cities/', label: t('admin.nav.cities') }}
      title={name}
      subtitle={!isNew && <CopyText text={id} />}
      editor={editor}
      viewHref={!isNew ? destinationHref(id) : undefined}
      name={name}
      onSave={onSave}
      preview={
        <div className="overflow-hidden rounded-[18px] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
          <div className="relative h-52">
            <Photo id={d.image} alt={name} width={600} className="absolute inset-0" tint={d.theme.accent} />
            <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, transparent 40%, ${d.theme.accent}ee)` }} />
            <div className="absolute bottom-3 left-4 text-white">
              <p className="text-[22px] font-bold">{name}</p>
              <p className="text-[13px] opacity-90">
                {flag(d.countryCode)} {country(d.countryCode)}
              </p>
            </div>
          </div>
          {!isNew && (
            <ul className="max-h-64 overflow-y-auto">
              {placesIn(id).map((p) => (
                <li key={p.id}>
                  <Link href={`/admin/place/?id=${p.id}`} className="flex items-center gap-2 border-t border-[#e5e5ea] px-4 py-2 text-[13px] hover:bg-[#f5f5f7]">
                    <Photo id={p.image} alt="" width={80} className="size-7 shrink-0" rounded="rounded-[6px]" />
                    <span className="truncate">{place(p.id).name}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link href={`/admin/place/?new=1&city=${id}`} className="block border-t border-[#e5e5ea] px-4 py-2.5 text-[13px] font-semibold text-[#0071e3]">
                  + {t('admin.list.newPlace')}
                </Link>
              </li>
            </ul>
          )}
        </div>
      }
    >
      <Card title={t('admin.edit.basics')}>
        <Row label={t('admin.edit.country')}>
          <Select value={d.countryCode} onChange={(v) => set('countryCode', v)} options={countryOptions} />
        </Row>
        <Row label={t('admin.edit.rating')}>
          <div className="flex gap-2">
            <NumberInput disabled={!canEdit} value={d.rating} onChange={(v) => set('rating', v ?? 0)} step="0.1" className="w-24" />
            <NumberInput disabled={!canEdit} value={d.reviews} onChange={(v) => set('reviews', Math.round(v ?? 0))} step="1" className="w-32" />
          </div>
        </Row>
        <Row label={t('admin.edit.tags')}>
          <TagPicker value={d.tags} onChange={(v) => set('tags', v)} disabled={!canEdit} />
        </Row>
        <Row label={t('verify.label')} hint={t('verify.hint')}>
          <TextInput disabled={!canEdit} type="date" value={d.verified ?? ''} onChange={(e) => set('verified', e.target.value || undefined)} className="w-44" />
        </Row>
        <Row label={t('admin.edit.months')}>
          <MonthPicker value={d.months} onChange={(v) => set('months', v)} disabled={!canEdit} />
        </Row>
      </Card>

      <Card title={t('admin.edit.facts')}>
        <Row label={t('admin.edit.budget')}>
          <NumberInput disabled={!canEdit} value={d.budgetPerDay} onChange={(v) => set('budgetPerDay', v ?? 0)} className="w-32" />
        </Row>
        <Row label={t('admin.edit.currency')}>
          <TextInput disabled={!canEdit} value={d.currency} maxLength={3} onChange={(e) => set('currency', e.target.value.toUpperCase())} className="w-24 uppercase" />
        </Row>
        <Row label={t('admin.edit.language')}>
          <TextInput disabled={!canEdit} value={d.language} maxLength={2} onChange={(e) => set('language', e.target.value.toLowerCase())} className="w-24" />
        </Row>
        <Row label={t('admin.edit.timezone')}>
          <TextInput disabled={!canEdit} value={d.timezone} onChange={(e) => set('timezone', e.target.value)} className="w-32" />
        </Row>
      </Card>

      <Card title={t('admin.edit.location')} footer={t('admin.edit.dragHint')}>
        <div className="p-4">
          <MapPicker lat={d.lat} lng={d.lng} zoom={d.zoom} onChange={(lat, lng) => canEdit && setFacts({ ...d, lat, lng })} />
        </div>
        <Row label={`${t('admin.edit.lat')} / ${t('admin.edit.lng')}`}>
          <div className="flex gap-2">
            <NumberInput disabled={!canEdit} value={d.lat} onChange={(v) => set('lat', v ?? 0)} className="w-40" />
            <NumberInput disabled={!canEdit} value={d.lng} onChange={(v) => set('lng', v ?? 0)} className="w-40" />
          </div>
        </Row>
        <Row label={t('admin.edit.zoom')}>
          <NumberInput disabled={!canEdit} value={d.zoom} onChange={(v) => set('zoom', v ?? 10)} step="0.5" className="w-24" />
        </Row>
      </Card>

      <Card title={t('admin.edit.look')}>
        <div className="grid gap-4 p-4">
          <PhotoField value={d.image} onChange={(v) => set('image', v)} disabled={!canEdit} />
          <ThemeField value={d.theme} onChange={(v) => set('theme', v)} disabled={!canEdit} />
        </div>
        <Row label={t('admin.edit.gallery')}>
          <GalleryField value={d.gallery} onChange={(v) => set('gallery', v)} disabled={!canEdit} />
        </Row>
      </Card>

      <Card title={t('admin.edit.texts')}>
        <LocalizedFields
          kind="cities"
          id={id}
          value={text}
          onChange={setText}
          disabled={!canEdit}
          fields={[
            { key: 'name', label: t('admin.edit.name') },
            { key: 'tagline', label: t('admin.edit.tagline') },
            { key: 'description', label: t('admin.edit.description'), multiline: true },
            { key: 'gettingThere', label: t('admin.edit.gettingThere'), multiline: true },
            { key: 'tips', label: t('admin.edit.tips'), list: 2 },
          ]}
        />
      </Card>
    </EditorFrame>
  );
}

export default function AdminCityPage() {
  return (
    <Suspense>
      <CityEditor />
    </Suspense>
  );
}
