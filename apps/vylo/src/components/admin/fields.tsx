'use client';

import { Copy, Layers, Loader2, Upload, X } from 'lucide-react';
import type { Map as MLMap, Marker, StyleSpecification } from 'maplibre-gl';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { toast } from 'sonner';
import { Photo } from '@/components/photo';
import ru from '@/i18n/messages/ru';
import { useWorldText } from '@/content/world';
import type { Motif, Price, TagKey, Theme } from '@/data/types';
import { LOCALE_META, LOCALES, type Locale } from '@/i18n/config';
import { useI18n } from '@/i18n/use';
import { bundledText } from '@/lib/admin/entities';
import { adminRepo, token } from '@/lib/admin/repo';
import { cn } from '@/lib/utils';
import { AButton, NumberInput, Segmented, Select, TextArea, TextInput, useAdminError } from './ui';

export const ALL_TAGS = Object.keys(ru.tags) as TagKey[];
export const MOTIFS: Motif[] = ['waves', 'palms', 'peaks', 'grid', 'torii', 'dunes', 'tiles', 'aurora', 'sun', 'domes', 'balloons', 'mosaic', 'snow', 'lanterns'];

// --- Map picker ------------------------------------------------------------------------------

const pickerStyle = (satellite: boolean): StyleSpecification => ({
  version: 8,
  sources: satellite
    ? { base: { type: 'raster', tiles: ['https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'], tileSize: 256, maxzoom: 19, attribution: '© Esri, Maxar' } }
    : { base: { type: 'raster', tiles: ['a', 'b', 'c', 'd'].map((s) => `https://${s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}@2x.png`), tileSize: 256, maxzoom: 19, attribution: '© OpenStreetMap contributors © CARTO' } },
  layers: [
    { id: 'bg', type: 'background', paint: { 'background-color': '#e5ecf4' } },
    { id: 'base', type: 'raster', source: 'base' },
  ],
});

/** A small map with one draggable pin. */
export function MapPicker({ lat, lng, onChange, height = 320, zoom = 15 }: { lat?: number; lng?: number; onChange: (lat: number, lng: number) => void; height?: number; zoom?: number }) {
  const el = useRef<HTMLDivElement>(null);
  const map = useRef<MLMap | null>(null);
  const marker = useRef<Marker | null>(null);
  const latest = useRef(onChange);
  latest.current = onChange;
  const [satellite, setSatellite] = useState(false);
  const { t } = useI18n();

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const ml = await import('maplibre-gl/dist/maplibre-gl-csp');
      if (cancelled || !el.current) return;
      ml.setWorkerUrl('/maplibre-gl-csp-worker.js');
      const has = lat !== undefined && lng !== undefined;
      const m = new ml.Map({ container: el.current, style: pickerStyle(false), center: has ? [lng!, lat!] : [20, 30], zoom: has ? zoom : 1.5, attributionControl: { compact: true } });
      m.addControl(new ml.NavigationControl({ showCompass: false }), 'top-right');
      const mk = new ml.Marker({ draggable: true, color: '#0071e3' }).setLngLat(has ? [lng!, lat!] : [20, 30]).addTo(m);
      mk.on('dragend', () => {
        const p = mk.getLngLat();
        latest.current(Number(p.lat.toFixed(6)), Number(p.lng.toFixed(6)));
      });
      m.on('click', (e) => {
        mk.setLngLat(e.lngLat);
        latest.current(Number(e.lngLat.lat.toFixed(6)), Number(e.lngLat.lng.toFixed(6)));
      });
      map.current = m;
      marker.current = mk;
    })();
    return () => {
      cancelled = true;
      map.current?.remove();
      map.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Follow coordinates typed into the fields or found by the geocoder.
  useEffect(() => {
    if (lat === undefined || lng === undefined || !marker.current || !map.current) return;
    const cur = marker.current.getLngLat();
    if (Math.abs(cur.lat - lat) < 1e-7 && Math.abs(cur.lng - lng) < 1e-7) return;
    marker.current.setLngLat([lng, lat]);
    map.current.easeTo({ center: [lng, lat], zoom: Math.max(map.current.getZoom(), 13) });
  }, [lat, lng]);

  useEffect(() => {
    map.current?.setStyle(pickerStyle(satellite));
  }, [satellite]);

  return (
    <div className="relative overflow-hidden rounded-[12px] ring-1 ring-black/5" style={{ height }}>
      <div ref={el} className="absolute inset-0" />
      <button type="button" onClick={() => setSatellite(!satellite)} className="absolute left-2 top-2 z-10 flex h-8 items-center gap-1.5 rounded-full bg-white/95 px-3 text-[12px] font-semibold shadow">
        <Layers className="size-3.5" /> {satellite ? t('map.scheme') : t('map.satellite')}
      </button>
    </div>
  );
}

// --- Photos ----------------------------------------------------------------------------------

export function PhotoField({ value, onChange, disabled }: { value: string; onChange: (v: string) => void; disabled?: boolean }) {
  const { t } = useI18n();
  const errorText = useAdminError();
  const input = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);
  const upload = async (file: File) => {
    setBusy(true);
    try {
      onChange(await adminRepo.upload(token(), file));
    } catch (e) {
      toast.error(errorText(e));
    } finally {
      setBusy(false);
    }
  };
  // Accept a pasted Unsplash page URL and keep just the id.
  const normalize = (v: string) => v.trim().match(/unsplash\.com\/photos\/(?:[^/?#]*-)?([A-Za-z0-9_-]{11})(?:[/?#]|$)/)?.[1] ?? v.trim();
  return (
    <div className="flex gap-3">
      <Photo id={value} alt="" width={240} className="size-[88px] shrink-0" rounded="rounded-[10px]" />
      <div className="min-w-0 flex-1">
        <TextInput value={value} disabled={disabled} onChange={(e) => onChange(normalize(e.target.value))} placeholder={t('admin.edit.photoId')} className="font-mono text-[13px]" />
        <div className="mt-2 flex gap-2">
          <input ref={input} type="file" accept="image/jpeg,image/png,image/webp,image/avif" hidden onChange={(e) => e.target.files?.[0] && upload(e.target.files[0])} />
          <AButton type="button" size="sm" variant="secondary" disabled={disabled} loading={busy} onClick={() => input.current?.click()}>
            {!busy && <Upload className="size-3.5" />} {busy ? t('admin.edit.uploading') : t('admin.edit.upload')}
          </AButton>
        </div>
      </div>
    </div>
  );
}

export function GalleryField({ value, onChange, disabled }: { value: string[]; onChange: (v: string[]) => void; disabled?: boolean }) {
  const [draft, setDraft] = useState('');
  const { t } = useI18n();
  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {value.map((id, i) => (
          <div key={id + i} className="relative">
            <Photo id={id} alt="" width={200} className="size-[72px]" rounded="rounded-[10px]" />
            {!disabled && (
              <button type="button" aria-label="×" onClick={() => onChange(value.filter((_, j) => j !== i))} className="absolute -right-1.5 -top-1.5 grid size-5 place-items-center rounded-full bg-[#1d1d1f] text-white">
                <X className="size-3" />
              </button>
            )}
          </div>
        ))}
      </div>
      {!disabled && (
        <div className="mt-2 flex gap-2">
          <TextInput value={draft} onChange={(e) => setDraft(e.target.value)} placeholder={t('admin.edit.photoId')} className="font-mono text-[13px]" />
          <AButton
            type="button"
            size="sm"
            variant="secondary"
            disabled={!draft.trim()}
            onClick={() => {
              onChange([...value, draft.trim()]);
              setDraft('');
            }}
          >
            {t('admin.common.add')}
          </AButton>
        </div>
      )}
    </div>
  );
}

// --- Small editors ---------------------------------------------------------------------------

export function TagPicker({ value, onChange, disabled }: { value: TagKey[]; onChange: (v: TagKey[]) => void; disabled?: boolean }) {
  const { tk } = useI18n();
  return (
    <div className="flex flex-wrap gap-1.5">
      {ALL_TAGS.map((tag) => {
        const on = value.includes(tag);
        return (
          <button
            key={tag}
            type="button"
            disabled={disabled}
            onClick={() => onChange(on ? value.filter((x) => x !== tag) : [...value, tag])}
            className={cn('h-7 rounded-full px-2.5 text-[12px] font-medium transition-colors', on ? 'bg-[#0071e3] text-white' : 'bg-[#f5f5f7] text-[#1d1d1f] hover:bg-[#e8e8ed]')}
          >
            {tk(`tags.${tag}`)}
          </button>
        );
      })}
    </div>
  );
}

export function MonthPicker({ value, onChange, disabled }: { value: number[]; onChange: (v: number[]) => void; disabled?: boolean }) {
  const { f } = useI18n();
  return (
    <div className="grid grid-cols-6 gap-1.5 md:grid-cols-12">
      {Array.from({ length: 12 }, (_, i) => i + 1).map((m) => {
        const on = value.includes(m);
        return (
          <button
            key={m}
            type="button"
            disabled={disabled}
            onClick={() => onChange(on ? value.filter((x) => x !== m) : [...value, m].sort((a, b) => a - b))}
            className={cn('h-8 rounded-[8px] text-[12px] font-semibold capitalize', on ? 'bg-[#0071e3] text-white' : 'bg-[#f5f5f7] text-[#1d1d1f]')}
          >
            {f.month(m).slice(0, 3)}
          </button>
        );
      })}
    </div>
  );
}

export function PriceField({ value, onChange, disabled }: { value: Price | undefined; onChange: (v: Price | undefined) => void; disabled?: boolean }) {
  const { t } = useI18n();
  const kind = value?.kind ?? 'none';
  return (
    <div className="grid gap-2">
      <Segmented
        value={kind}
        onChange={(k) =>
          onChange(
            k === 'none'
              ? undefined
              : k === 'free'
                ? { kind: 'free' }
                : k === 'level'
                  ? { kind: 'level', level: 2 }
                  : { kind: k, amount: value && 'amount' in value ? value.amount : 10, currency: value && 'currency' in value ? value.currency : 'EUR' },
          )
        }
        options={[
          { value: 'none', label: t('admin.edit.priceNone') },
          { value: 'free', label: t('admin.edit.priceFree') },
          { value: 'fixed', label: t('admin.edit.priceFixed') },
          { value: 'from', label: t('admin.edit.priceFrom') },
          { value: 'level', label: t('admin.edit.priceLevel') },
        ]}
      />
      {value && (value.kind === 'fixed' || value.kind === 'from') && (
        <div className="flex gap-2">
          <NumberInput disabled={disabled} value={value.amount} onChange={(n) => onChange({ ...value, amount: n ?? 0 })} placeholder={t('admin.edit.amount')} className="w-32" />
          <TextInput disabled={disabled} value={value.currency} maxLength={3} onChange={(e) => onChange({ ...value, currency: e.target.value.toUpperCase() })} className="w-24 uppercase" />
        </div>
      )}
      {value?.kind === 'level' && <Segmented value={String(value.level) as '1' | '2' | '3'} onChange={(l) => onChange({ kind: 'level', level: Number(l) as 1 | 2 | 3 })} options={[{ value: '1', label: '$' }, { value: '2', label: '$$' }, { value: '3', label: '$$$' }]} />}
    </div>
  );
}

export function ThemeField({ value, onChange, disabled }: { value: Theme; onChange: (v: Theme) => void; disabled?: boolean }) {
  const { t } = useI18n();
  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="h-10 w-24 rounded-[10px] shadow-inner" style={{ background: `linear-gradient(135deg, ${value.accent}, ${value.accent2})` }} />
      {(['accent', 'accent2'] as const).map((k) => (
        <label key={k} className="flex items-center gap-2 text-[13px] text-[#6e6e73]">
          <input type="color" disabled={disabled} value={value[k]} onChange={(e) => onChange({ ...value, [k]: e.target.value })} className="size-9 cursor-pointer rounded-[8px] border-0 bg-transparent" />
          {t(k === 'accent' ? 'admin.edit.accent' : 'admin.edit.accent2')}
        </label>
      ))}
      <Select value={value.motif} onChange={(m) => onChange({ ...value, motif: m })} options={MOTIFS.map((m) => ({ value: m, label: m }))} className="w-36" />
    </div>
  );
}

// --- Texts in six languages ------------------------------------------------------------------

export interface TextFieldSpec {
  key: string;
  label: string;
  multiline?: boolean;
  /** Field holds a fixed-length list (tips) */
  list?: number;
  /** Country guidebook: { title, sections[4] } */
  guide?: boolean;
}

type LocalizedValue = Partial<Record<Locale, Record<string, unknown>>>;

/**
 * Edits the per-language overrides. Bundled text shows as the placeholder, so an empty field means
 * "keep what ships with the app" and the dots on the tabs show which languages still have gaps.
 */
export function LocalizedFields({ kind, id, value, onChange, fields, disabled }: { kind: 'cities' | 'places' | 'countries'; id: string; value: LocalizedValue; onChange: (v: LocalizedValue) => void; fields: TextFieldSpec[]; disabled?: boolean }) {
  const { t, locale: uiLocale } = useI18n();
  const world = useWorldText((s) => s.texts);
  const [locale, setLocale] = useState<Locale>(uiLocale);
  const base = (l: Locale) => bundledText(kind, id, l, world) ?? {};
  const current = value[locale] ?? {};
  const set = (key: string, v: unknown) => onChange({ ...value, [locale]: { ...current, [key]: v } });
  const filled = (l: Locale) => fields.every((f) => f.list || f.guide || !!(value[l]?.[f.key] || base(l)[f.key]));

  const copyFrom = (from: Locale) => {
    const src = { ...base(from), ...(value[from] ?? {}) };
    onChange({ ...value, [locale]: Object.fromEntries(fields.map((f) => [f.key, src[f.key]])) });
  };

  const row = (label: ReactNode, input: ReactNode, key: string) => (
    <div key={key} className="border-b border-[#e5e5ea] px-4 py-3 last:border-b-0">
      <p className="mb-1.5 text-[13px] font-medium text-[#1d1d1f]">{label}</p>
      {input}
    </div>
  );

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2 border-b border-[#e5e5ea] px-4 py-3">
        <div className="flex flex-wrap gap-1">
          {LOCALES.map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => setLocale(l)}
              className={cn('relative flex h-8 items-center gap-1.5 rounded-[8px] px-2.5 text-[13px] font-semibold', l === locale ? 'bg-[#1d1d1f] text-white' : 'bg-[#f5f5f7] text-[#1d1d1f]')}
            >
              {LOCALE_META[l].flag} {l.toUpperCase()}
              <span className={cn('size-1.5 rounded-full', filled(l) ? 'bg-[#34c759]' : 'bg-[#ff9500]')} />
            </button>
          ))}
        </div>
        <span className="flex-1" />
        {!disabled && (
          <Select<string>
            value=""
            onChange={(l) => l && copyFrom(l as Locale)}
            options={[{ value: '', label: t('admin.common.copy') }, ...LOCALES.filter((l) => l !== locale).map((l) => ({ value: l, label: t('admin.edit.copyFrom', { lang: l.toUpperCase() }) }))]}
            className="w-44"
          />
        )}
      </div>
      {fields.map((f) => {
        const b = base(locale)[f.key];
        if (f.guide) {
          const g = (current[f.key] as { title?: string; sections?: { title?: string; body?: string }[] } | undefined) ?? {};
          const bg = (b as { title?: string; sections?: { title: string; body: string }[] } | undefined) ?? {};
          const sections = [0, 1, 2, 3].map((i) => ({ title: g.sections?.[i]?.title ?? '', body: g.sections?.[i]?.body ?? '' }));
          const setGuide = (next: typeof g) => set(f.key, next);
          return (
            <div key={f.key}>
              {row(t('admin.edit.guideTitle'), <TextInput disabled={disabled} value={g.title ?? ''} placeholder={bg.title} onChange={(e) => setGuide({ ...g, sections, title: e.target.value })} />, `${f.key}-title`)}
              {sections.map((s, i) =>
                row(
                  t('admin.edit.section', { n: i + 1 }),
                  <div className="grid gap-2">
                    <TextInput disabled={disabled} value={s.title} placeholder={bg.sections?.[i]?.title ?? t('admin.edit.sectionTitle')} onChange={(e) => setGuide({ ...g, sections: sections.map((x, j) => (j === i ? { ...x, title: e.target.value } : x)) })} />
                    <TextArea disabled={disabled} rows={4} value={s.body} placeholder={bg.sections?.[i]?.body ?? t('admin.edit.sectionBody')} onChange={(e) => setGuide({ ...g, sections: sections.map((x, j) => (j === i ? { ...x, body: e.target.value } : x)) })} />
                  </div>,
                  `${f.key}-${i}`,
                ),
              )}
            </div>
          );
        }
        if (f.list) {
          const list = (current[f.key] as string[] | undefined) ?? [];
          const bl = (b as string[] | undefined) ?? [];
          return row(
            f.label,
            <div className="grid gap-2">
              {Array.from({ length: f.list }, (_, i) => (
                <TextArea key={i} rows={2} disabled={disabled} value={list[i] ?? ''} placeholder={bl[i]} onChange={(e) => set(f.key, Array.from({ length: f.list! }, (_, j) => (j === i ? e.target.value : (list[j] ?? ''))))} />
              ))}
            </div>,
            f.key,
          );
        }
        const v = (current[f.key] as string | undefined) ?? '';
        return row(
          f.label,
          f.multiline ? <TextArea disabled={disabled} rows={4} value={v} placeholder={b as string | undefined} onChange={(e) => set(f.key, e.target.value)} /> : <TextInput disabled={disabled} value={v} placeholder={b as string | undefined} onChange={(e) => set(f.key, e.target.value)} />,
          f.key,
        );
      })}
    </div>
  );
}

/** Small "copy" affordance for ids and coordinates. */
export function CopyText({ text }: { text: string }) {
  const { t } = useI18n();
  return (
    <button
      type="button"
      onClick={() => {
        void navigator.clipboard?.writeText(text);
        toast.success(t('admin.common.copied'));
      }}
      className="inline-flex items-center gap-1.5 rounded-[8px] bg-[#f5f5f7] px-2 py-1 font-mono text-[12px] text-[#1d1d1f] hover:bg-[#e8e8ed]"
    >
      {text} <Copy className="size-3 text-[#86868b]" />
    </button>
  );
}

export function Spinner() {
  return <Loader2 className="size-4 animate-spin text-[#86868b]" />;
}
