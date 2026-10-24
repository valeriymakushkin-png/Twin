'use client';

import { LocateFixed, Search } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useState } from 'react';
import { toast } from 'sonner';
import { EditorFrame, useEntityEditor } from '@/components/admin/editor';
import { CopyText, LocalizedFields, MapPicker, PhotoField, PriceField, TagPicker } from '@/components/admin/fields';
import { AButton, Card, NumberInput, Row, Segmented, Select, TextInput, useAdminError } from '@/components/admin/ui';
import { Photo } from '@/components/photo';
import { SpotBadge } from '@/components/spot-badge';
import { bundledDestination, bundledPlace, citiesIn, destinationById, destinations, overrides, placeById, placeHref } from '@/data/catalog';
import type { Place } from '@/data/types';
import { useI18n } from '@/i18n/use';
import { allPlaces, slugify } from '@/lib/admin/entities';
import { geocode, reverseGeocode, type GeoResult } from '@/lib/admin/geocode';
import { flag } from '@/lib/countries';

function PlaceEditor() {
  const params = useSearchParams();
  const router = useRouter();
  const { t, tk, dest, place, country, locale } = useI18n();
  const errorText = useAdminError();
  const isNew = params.get('new') === '1';
  const [id] = useState(() => (isNew ? `new-${Date.now().toString(36)}` : (params.get('id') ?? '')));
  const bundled = isNew ? undefined : bundledPlace(id);
  const existing = isNew ? undefined : (allPlaces().find((p) => p.id === id) ?? placeById(id));

  const editor = useEntityEditor<Place>({
    kind: 'places',
    id,
    bundled,
    initial: () => {
      if (existing) {
        const { id: _i, ...rest } = existing;
        return { ...rest, id } as Place;
      }
      const city = destinationById(params.get('city') ?? '') ?? citiesIn(params.get('country') ?? '')[0] ?? destinations[0]!;
      const lat = Number(params.get('lat')) || city.lat;
      const lng = Number(params.get('lng')) || city.lng;
      return { id, destinationId: city.id, category: 'attraction', lat, lng, image: city.image, rating: 4.6, reviews: 0, tags: [] };
    },
  });
  const { facts: p, setFacts, text, setText, canEdit } = editor;
  const set = <K extends keyof Place>(k: K, v: Place[K]) => setFacts({ ...p, [k]: v });

  const [query, setQuery] = useState('');
  const [results, setResults] = useState<GeoResult[]>([]);
  const [searching, setSearching] = useState(false);

  if (!isNew && !existing) return <p className="text-[#86868b]">{t('admin.common.noResults')}</p>;

  const name = (text[locale]?.name as string) || (text.en?.name as string) || (text.ru?.name as string) || (isNew ? t('admin.edit.createPlace') : place(id).name);
  const city = destinationById(p.destinationId) ?? bundledDestination(p.destinationId);

  const findAddress = async () => {
    if (!query.trim()) return;
    setSearching(true);
    try {
      setResults(await geocode(query, locale));
    } catch (e) {
      toast.error(errorText(e));
    } finally {
      setSearching(false);
    }
  };

  const addressFromPin = async () => {
    try {
      const a = await reverseGeocode(p.lat, p.lng, 'en');
      if (a) set('address', a);
    } catch (e) {
      toast.error(errorText(e));
    }
  };

  const onSave = async () => {
    const hasName = Object.values(text).some((x) => typeof x?.name === 'string' && x.name.trim()) || !isNew;
    if (!hasName || !p.destinationId || !Number.isFinite(p.lat) || !Number.isFinite(p.lng)) return void toast.error(t('admin.edit.required'));
    if (!isNew) return void editor.save();
    // New entries get a readable id from the city and the first name typed.
    const firstName = String(text.en?.name || text[locale]?.name || Object.values(text).find((x) => x?.name)?.name || 'place');
    let newId = `${p.destinationId}-${slugify(firstName)}`.slice(0, 60);
    const taken = (x: string) => !!placeById(x) || !!bundledPlace(x) || !!overrides().places[x];
    for (let i = 2; taken(newId); i++) newId = `${p.destinationId}-${slugify(firstName)}-${i}`;
    const ok = await editor.save({ id: undefined }, newId);
    if (ok) router.replace(`/admin/place/?id=${newId}`);
  };

  const cityOptions = [...destinations]
    .sort((a, b) => country(a.countryCode).localeCompare(country(b.countryCode), locale) || dest(a.id).name.localeCompare(dest(b.id).name, locale))
    .map((d) => ({ value: d.id, label: `${flag(d.countryCode)} ${country(d.countryCode)} — ${dest(d.id).name}` }));

  return (
    <EditorFrame
      back={{ href: '/admin/places/', label: t('admin.nav.places') }}
      title={name}
      subtitle={!isNew && <CopyText text={id} />}
      editor={editor}
      viewHref={!isNew ? placeHref(id) : undefined}
      name={name}
      onSave={onSave}
      preview={
        <div className="overflow-hidden rounded-[18px] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
          <div className="relative">
            <Photo id={p.image} alt={name} width={600} className="h-48 w-full" tint={city?.theme.accent} />
            {p.spot && <SpotBadge spot={p.spot} className="absolute left-3 top-3" />}
          </div>
          <div className="p-4">
            <p className="text-[17px] font-bold">{name}</p>
            <p className="text-[13px] text-[#6e6e73]">
              {city ? `${dest(city.id).name}, ${country(city.countryCode)}` : ''} · ★ {p.rating}
            </p>
            <p className="mt-2 line-clamp-4 text-[13px] leading-relaxed text-[#424245]">{String(text[locale]?.description || (isNew ? '' : place(id).description))}</p>
          </div>
        </div>
      }
    >
      <Card title={t('admin.edit.basics')}>
        <Row label={t('admin.edit.city')}>
          <Select value={p.destinationId} onChange={(v) => set('destinationId', v)} options={cityOptions} />
        </Row>
        <Row label={t('admin.edit.category')}>
          <Segmented value={p.category} onChange={(v) => set('category', v)} options={(['attraction', 'nature', 'food', 'hotel'] as const).map((c) => ({ value: c, label: tk(`categories.${c}Short`) }))} />
        </Row>
        <Row label={t('admin.edit.spot')}>
          <Segmented
            value={p.spot ?? 'none'}
            onChange={(v) => set('spot', v === 'none' ? undefined : v)}
            options={[
              { value: 'none', label: t('admin.edit.spotNone') },
              { value: 'insta', label: t('spots.insta') },
              { value: 'hidden', label: t('spots.hidden') },
            ]}
          />
        </Row>
        <Row label={t('admin.edit.rating')}>
          <div className="flex gap-2">
            <NumberInput disabled={!canEdit} value={p.rating} onChange={(v) => set('rating', Math.min(5, Math.max(0, v ?? 0)))} step="0.1" className="w-24" />
            <NumberInput disabled={!canEdit} value={p.reviews} onChange={(v) => set('reviews', Math.max(0, Math.round(v ?? 0)))} step="1" className="w-32" placeholder={t('admin.edit.reviews')} />
          </div>
        </Row>
        <Row label={t('admin.edit.price')}>
          <PriceField value={p.price} onChange={(v) => set('price', v)} disabled={!canEdit} />
        </Row>
        <Row label={t('admin.edit.hours')} hint={t('admin.edit.hoursHint')}>
          <TextInput disabled={!canEdit} value={p.hours ?? ''} onChange={(e) => set('hours', e.target.value || undefined)} placeholder="09:00–18:00" />
        </Row>
        <Row label={t('admin.edit.tags')}>
          <TagPicker value={p.tags} onChange={(v) => set('tags', v)} disabled={!canEdit} />
        </Row>
      </Card>

      <Card title={t('admin.edit.location')} footer={t('admin.edit.dragHint')}>
        <div className="p-4">
          <div className="flex gap-2">
            <TextInput value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && findAddress()} placeholder={t('admin.edit.findAddress')} />
            <AButton type="button" variant="secondary" onClick={findAddress} loading={searching}>
              {!searching && <Search className="size-4" />}
            </AButton>
          </div>
          {results.length > 0 && (
            <ul className="mt-2 overflow-hidden rounded-[10px] ring-1 ring-black/5">
              {results.map((r) => (
                <li key={`${r.lat},${r.lng}`}>
                  <button
                    type="button"
                    onClick={() => {
                      setFacts({ ...p, lat: Number(r.lat.toFixed(6)), lng: Number(r.lng.toFixed(6)), address: r.label.split(',').slice(0, 3).join(',').trim() });
                      setResults([]);
                    }}
                    className="block w-full border-b border-[#e5e5ea] px-3 py-2 text-left text-[13px] last:border-b-0 hover:bg-[#f5f5f7]"
                  >
                    {r.label}
                  </button>
                </li>
              ))}
            </ul>
          )}
          <div className="mt-3">
            <MapPicker lat={p.lat} lng={p.lng} onChange={(lat, lng) => canEdit && setFacts({ ...p, lat, lng })} />
          </div>
        </div>
        <Row label={t('admin.edit.address')}>
          <div className="flex gap-2">
            <TextInput disabled={!canEdit} value={p.address ?? ''} onChange={(e) => set('address', e.target.value || undefined)} />
            <AButton type="button" variant="secondary" size="sm" onClick={addressFromPin} disabled={!canEdit} className="h-9" title={t('admin.edit.fromPin')}>
              <LocateFixed className="size-4" />
            </AButton>
          </div>
        </Row>
        <Row label={`${t('admin.edit.lat')} / ${t('admin.edit.lng')}`}>
          <div className="flex gap-2">
            <NumberInput disabled={!canEdit} value={p.lat} onChange={(v) => set('lat', v ?? 0)} className="w-40" />
            <NumberInput disabled={!canEdit} value={p.lng} onChange={(v) => set('lng', v ?? 0)} className="w-40" />
          </div>
        </Row>
      </Card>

      <Card title={t('admin.edit.photo')}>
        <div className="p-4">
          <PhotoField value={p.image} onChange={(v) => set('image', v)} disabled={!canEdit} />
        </div>
      </Card>

      {p.spot === 'insta' && (
        <Card title={t('admin.edit.people')} footer={t('admin.edit.peopleHint')}>
          <div className="grid gap-3 p-4">
            {(p.people ?? []).map((id, i) => (
              <div key={i} className="flex items-start gap-2">
                <div className="min-w-0 flex-1">
                  <PhotoField value={id} onChange={(v) => set('people', (p.people ?? []).map((x, j) => (j === i ? v : x)))} disabled={!canEdit} />
                </div>
                <AButton type="button" size="sm" variant="plain" disabled={!canEdit} onClick={() => set('people', (p.people ?? []).filter((_, j) => j !== i))}>
                  {t('admin.common.delete')}
                </AButton>
              </div>
            ))}
            {(p.people?.length ?? 0) < 4 && (
              <AButton type="button" size="sm" variant="secondary" disabled={!canEdit} onClick={() => set('people', [...(p.people ?? []), ''])} className="justify-self-start">
                {t('admin.edit.addPeople')}
              </AButton>
            )}
          </div>
        </Card>
      )}

      <Card title={t('admin.edit.texts')}>
        <LocalizedFields
          kind="places"
          id={id}
          value={text}
          onChange={setText}
          disabled={!canEdit}
          fields={[
            { key: 'name', label: t('admin.edit.name') },
            { key: 'description', label: t('admin.edit.description'), multiline: true },
            { key: 'tip', label: t('admin.edit.tip'), multiline: true },
          ]}
        />
      </Card>
    </EditorFrame>
  );
}

export default function AdminPlacePage() {
  return (
    <Suspense>
      <PlaceEditor />
    </Suspense>
  );
}
