'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { EditorFrame, useEntityEditor } from '@/components/admin/editor';
import { LocalizedFields, PhotoField, PriceField, ThemeField } from '@/components/admin/fields';
import { Card, NumberInput, Row, Select, Toggle } from '@/components/admin/ui';
import { Photo } from '@/components/photo';
import { REGION_ORDER } from '@/components/region-explorer';
import { baseCountry, bundledVisa, countryByCode, countryHref, visaByCode } from '@/data/catalog';
import type { VisaDoc, VisaInfo } from '@/data/types';
import type { CountryFacts } from '@/data/world/types';
import ru from '@/i18n/messages/ru';
import { useI18n } from '@/i18n/use';
import { flag } from '@/lib/countries';
import { cn } from '@/lib/utils';

type CountryDraft = CountryFacts & { visa?: Omit<VisaInfo, 'code'> };
const DOCS = Object.keys(ru.visa.doc) as VisaDoc[];
const strip = (v: VisaInfo | undefined) => {
  if (!v) return undefined;
  const { code: _c, ...rest } = v;
  return rest;
};

function CountryEditor() {
  const code = (useSearchParams().get('code') ?? '').toUpperCase();
  const { t, tk, country } = useI18n();
  const live = countryByCode(code);
  const base = baseCountry(code);
  const editor = useEntityEditor<CountryDraft>({
    kind: 'countries',
    id: code,
    bundled: base ? { ...base, visa: strip(bundledVisa(code)) } : undefined,
    initial: () => ({ ...(live ?? base)!, visa: strip(visaByCode(code)) }),
  });
  const { facts: c, setFacts, text, setText, canEdit } = editor;
  if (!live && !base) return <p className="text-[#86868b]">{t('country.notFound')}</p>;
  const set = <K extends keyof CountryDraft>(k: K, v: CountryDraft[K]) => setFacts({ ...c, [k]: v });
  const visa = c.visa;
  const setVisa = (patch: Partial<Omit<VisaInfo, 'code'>>) => set('visa', { ...(visa ?? { regime: 'required', days: 0, cost: { kind: 'free' }, validity: 'sixMonths', docs: ['passport'], notes: [] }), ...patch });
  const name = country(code);

  return (
    <EditorFrame
      back={{ href: '/admin/countries/', label: t('admin.nav.countries') }}
      title={`${flag(code)} ${name}`}
      subtitle={code}
      editor={editor}
      viewHref={countryHref(code)}
      name={name}
      onSave={() => void editor.save()}
      preview={
        <div className="relative h-56 overflow-hidden rounded-[18px] shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
          <Photo id={c.image} alt={name} width={600} className="absolute inset-0" tint={c.theme.accent} />
          <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, transparent 35%, ${c.theme.accent}f0)` }} />
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <p className="text-[28px] leading-none">{flag(code)}</p>
            <p className="mt-1 text-[22px] font-bold">{name}</p>
            <p className="text-[13px] opacity-90">{tk(`country.region.${c.region}`)}</p>
          </div>
        </div>
      }
    >
      <Card title={t('admin.edit.basics')}>
        <Row label={t('admin.edit.region')}>
          <Select value={c.region} onChange={(v) => set('region', v)} options={REGION_ORDER.map((r) => ({ value: r, label: tk(`country.region.${r}`) }))} />
        </Row>
        <Row label={t('admin.edit.fromMoscow')}>
          <div className="flex items-center gap-4">
            <NumberInput disabled={!canEdit} value={c.fromMoscow.hours} onChange={(v) => set('fromMoscow', { ...c.fromMoscow, hours: v ?? 0 })} step="0.5" className="w-24" />
            <label className="flex items-center gap-2 text-[14px]">
              <Toggle checked={c.fromMoscow.direct} onChange={(v) => canEdit && set('fromMoscow', { ...c.fromMoscow, direct: v })} label={t('admin.edit.direct')} />
              {t('admin.edit.direct')}
            </label>
          </div>
        </Row>
      </Card>

      <Card title={t('admin.edit.look')}>
        <div className="grid gap-4 p-4">
          <PhotoField value={c.image} onChange={(v) => set('image', v)} disabled={!canEdit} />
          <ThemeField value={c.theme} onChange={(v) => set('theme', v)} disabled={!canEdit} />
        </div>
      </Card>

      <Card title={t('admin.edit.visa')} footer={t('visa.disclaimer')}>
        <Row label={t('admin.edit.visaRegime')}>
          <Select value={visa?.regime ?? 'required'} onChange={(v) => setVisa({ regime: v })} options={(Object.keys(ru.visa.regime) as VisaInfo['regime'][]).map((r) => ({ value: r, label: tk(`visa.regime.${r}`) }))} />
        </Row>
        <Row label={t('admin.edit.visaDays')}>
          <NumberInput disabled={!canEdit} value={visa?.days} onChange={(v) => setVisa({ days: Math.round(v ?? 0) })} className="w-24" />
        </Row>
        <Row label={t('admin.edit.visaCost')}>
          <PriceField value={visa?.cost} onChange={(v) => setVisa({ cost: v ?? { kind: 'free' } })} disabled={!canEdit} />
        </Row>
        <Row label={t('admin.edit.visaValidity')}>
          <Select value={visa?.validity ?? 'sixMonths'} onChange={(v) => setVisa({ validity: v })} options={(Object.keys(ru.visa.validity) as VisaInfo['validity'][]).map((v) => ({ value: v, label: tk(`visa.validity.${v}`) }))} />
        </Row>
        <Row label={t('admin.edit.visaDocs')}>
          <div className="flex flex-wrap gap-1.5">
            {DOCS.map((doc) => {
              const on = visa?.docs.includes(doc);
              return (
                <button
                  key={doc}
                  type="button"
                  disabled={!canEdit}
                  onClick={() => setVisa({ docs: on ? visa!.docs.filter((x) => x !== doc) : [...(visa?.docs ?? []), doc] })}
                  className={cn('h-7 rounded-full px-2.5 text-[12px] font-medium', on ? 'bg-[#0071e3] text-white' : 'bg-[#f5f5f7]')}
                >
                  {tk(`visa.doc.${doc}`)}
                </button>
              );
            })}
          </div>
        </Row>
      </Card>

      <Card title={t('admin.edit.texts')}>
        <LocalizedFields
          kind="countries"
          id={code}
          value={text}
          onChange={setText}
          disabled={!canEdit}
          fields={[
            { key: 'tagline', label: t('admin.edit.tagline') },
            { key: 'description', label: t('admin.edit.description'), multiline: true },
            { key: 'howToGet', label: t('admin.edit.howToGet'), multiline: true },
            { key: 'tips', label: t('admin.edit.tips'), list: 3 },
            { key: 'guide', label: t('admin.edit.guide'), guide: true },
          ]}
        />
      </Card>
    </EditorFrame>
  );
}

export default function AdminCountryPage() {
  return (
    <Suspense>
      <CountryEditor />
    </Suspense>
  );
}
