'use client';

import { Layers, Plus } from 'lucide-react';
import type { Map as MLMap, Marker, StyleSpecification } from 'maplibre-gl';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';
import { toast } from 'sonner';
import { AButton, Card, PageHeader, Select, useAdminError } from '@/components/admin/ui';
import { SPOT_STYLE } from '@/components/spot-badge';
import { categoryColor, citiesIn, countries, destinations, overrides, places } from '@/data/catalog';
import { useI18n } from '@/i18n/use';
import { adminRepo, token, useAdmin } from '@/lib/admin/repo';
import { can } from '@/lib/admin/roles';
import { flag } from '@/lib/countries';
import { distanceKm } from '@/lib/utils';

const style = (satellite: boolean): StyleSpecification => ({
  version: 8,
  sources: satellite
    ? { base: { type: 'raster', tiles: ['https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'], tileSize: 256, maxzoom: 19, attribution: '© Esri, Maxar' } }
    : { base: { type: 'raster', tiles: ['a', 'b', 'c', 'd'].map((s) => `https://${s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}@2x.png`), tileSize: 256, maxzoom: 19, attribution: '© OpenStreetMap contributors © CARTO' } },
  layers: [
    { id: 'bg', type: 'background', paint: { 'background-color': '#dfe7f0' } },
    { id: 'base', type: 'raster', source: 'base' },
  ],
});

interface Move {
  kind: 'places' | 'destinations';
  id: string;
  lat: number;
  lng: number;
  name: string;
}

/** Drag pins to fix positions; click the map to drop a new place. Up to 250 pins in view at once. */
export default function AdminMapEditor() {
  const { t, place, dest, country, locale, version } = useI18n();
  const router = useRouter();
  const errorText = useAdminError();
  const role = useAdmin((s) => s.user?.role);
  const editable = can(role, 'content.write');
  const el = useRef<HTMLDivElement>(null);
  const map = useRef<MLMap | null>(null);
  const ml = useRef<typeof import('maplibre-gl/dist/maplibre-gl-csp') | null>(null);
  const pins = useRef(new Map<string, Marker>());
  const [moves, setMoves] = useState<Record<string, Move>>({});
  const [click, setClick] = useState<{ lat: number; lng: number } | null>(null);
  const [satellite, setSatellite] = useState(false);
  const [code, setCode] = useState('');
  const [saving, setSaving] = useState(false);
  const movesRef = useRef(moves);
  movesRef.current = moves;

  const draw = useCallback(() => {
    const m = map.current;
    const lib = ml.current;
    if (!m || !lib) return;
    const b = m.getBounds();
    const zoom = m.getZoom();
    const inView = (x: { lat: number; lng: number }) => b.contains([x.lng, x.lat]);
    const items: { kind: Move['kind']; id: string; lat: number; lng: number; color: string; name: string; big: boolean }[] = [
      ...destinations.filter(inView).map((d) => ({ kind: 'destinations' as const, id: d.id, lat: d.lat, lng: d.lng, color: d.theme.accent, name: dest(d.id).name, big: true })),
      ...(zoom >= 6 ? places.filter(inView).map((p) => ({ kind: 'places' as const, id: p.id, lat: p.lat, lng: p.lng, color: p.spot ? SPOT_STYLE[p.spot].color : categoryColor[p.category], name: place(p.id).name, big: false })) : []),
    ].slice(0, 250);
    const keep = new Set(items.map((i) => `${i.kind}:${i.id}`));
    pins.current.forEach((mk, k) => {
      if (!keep.has(k)) {
        mk.remove();
        pins.current.delete(k);
      }
    });
    for (const it of items) {
      const key = `${it.kind}:${it.id}`;
      if (pins.current.has(key)) continue;
      const moved = movesRef.current[key];
      const node = document.createElement('div');
      node.title = it.name;
      node.style.cssText = `width:${it.big ? 22 : 16}px;height:${it.big ? 22 : 16}px;border-radius:999px;background:${it.color};border:3px solid #fff;box-shadow:0 2px 8px rgba(0,0,0,.35);cursor:${editable ? 'grab' : 'pointer'}`;
      const label = document.createElement('span');
      label.textContent = it.name;
      label.style.cssText = 'position:absolute;left:50%;top:100%;transform:translate(-50%,4px);white-space:nowrap;font:600 11px system-ui;background:rgba(255,255,255,.92);padding:1px 6px;border-radius:6px;pointer-events:none';
      if (zoom >= 11 || it.big) node.appendChild(label);
      const mk = new lib.Marker({ element: node, draggable: editable }).setLngLat([moved?.lng ?? it.lng, moved?.lat ?? it.lat]).addTo(m);
      mk.on('dragend', () => {
        const p = mk.getLngLat();
        setMoves((s) => ({ ...s, [key]: { kind: it.kind, id: it.id, lat: Number(p.lat.toFixed(6)), lng: Number(p.lng.toFixed(6)), name: it.name } }));
      });
      node.addEventListener('dblclick', (e) => {
        e.stopPropagation();
        router.push(it.kind === 'places' ? `/admin/place/?id=${it.id}` : `/admin/city/?id=${it.id}`);
      });
      pins.current.set(key, mk);
    }
  }, [dest, place, editable, router]);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const lib = await import('maplibre-gl/dist/maplibre-gl-csp');
      if (cancelled || !el.current) return;
      lib.setWorkerUrl('/maplibre-gl-csp-worker.js');
      ml.current = lib;
      const m = new lib.Map({ container: el.current, style: style(false), center: [15, 45], zoom: 3, attributionControl: { compact: true } });
      m.addControl(new lib.NavigationControl(), 'top-right');
      m.on('moveend', draw);
      m.on('load', draw);
      m.on('click', (e) => setClick({ lat: Number(e.lngLat.lat.toFixed(6)), lng: Number(e.lngLat.lng.toFixed(6)) }));
      map.current = m;
      draw();
    })();
    return () => {
      cancelled = true;
      pins.current.forEach((p) => p.remove());
      pins.current.clear();
      map.current?.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Redraw with fresh names/positions after a save.
  useEffect(() => {
    pins.current.forEach((p) => p.remove());
    pins.current.clear();
    draw();
  }, [version, draw]);

  useEffect(() => {
    map.current?.setStyle(style(satellite));
  }, [satellite]);

  useEffect(() => {
    const cities = citiesIn(code);
    if (!cities.length || !map.current) return;
    const lngs = cities.map((c) => c.lng);
    const lats = cities.map((c) => c.lat);
    map.current.fitBounds(
      [
        [Math.min(...lngs) - 0.3, Math.min(...lats) - 0.3],
        [Math.max(...lngs) + 0.3, Math.max(...lats) + 0.3],
      ],
      { padding: 60, maxZoom: 11 },
    );
  }, [code]);

  const saveAll = async () => {
    setSaving(true);
    try {
      for (const mv of Object.values(moves)) {
        const { updatedAt: _u, updatedBy: _b, ...prev } = (overrides()[mv.kind][mv.id] ?? {}) as Record<string, unknown>;
        await adminRepo.saveEntity(token(), mv.kind, mv.id, { ...prev, lat: mv.lat, lng: mv.lng });
      }
      toast.success(t('admin.common.saved'));
      setMoves({});
    } catch (e) {
      toast.error(errorText(e));
    } finally {
      setSaving(false);
    }
  };

  const discard = () => {
    setMoves({});
    pins.current.forEach((p) => p.remove());
    pins.current.clear();
    draw();
  };

  const pending = Object.values(moves);
  const nearestCity = click ? [...destinations].sort((a, b) => distanceKm(click, a) - distanceKm(click, b))[0] : undefined;

  return (
    <>
      <PageHeader
        title={t('admin.nav.map')}
        subtitle={t('admin.mapEditor.hint')}
        actions={
          <>
            <Select
              value={code}
              onChange={setCode}
              options={[{ value: '', label: t('admin.list.anyCountry') }, ...[...countries].sort((a, b) => country(a.code).localeCompare(country(b.code), locale)).map((c) => ({ value: c.code, label: `${flag(c.code)} ${country(c.code)}` }))]}
              className="w-56"
          toolbar
            />
            <AButton variant="secondary" onClick={() => setSatellite(!satellite)}>
              <Layers className="size-4" /> {satellite ? t('map.scheme') : t('map.satellite')}
            </AButton>
          </>
        }
      />
      <div className="relative h-[68vh] min-h-[420px] overflow-hidden rounded-[16px] shadow-[0_1px_2px_rgba(0,0,0,0.04),0_0_0_0.5px_rgba(0,0,0,0.08)]">
        <div ref={el} className="h-full w-full" />
        {click && editable && (
          <div className="absolute left-3 top-3 z-10 flex items-center gap-2 rounded-[12px] bg-white/95 p-2 pl-3 shadow-lg backdrop-blur">
            <span className="font-mono text-[12px] text-[#6e6e73]">
              {click.lat.toFixed(5)}, {click.lng.toFixed(5)}
            </span>
            <AButton size="sm" onClick={() => router.push(`/admin/place/?new=1&lat=${click.lat}&lng=${click.lng}${nearestCity ? `&city=${nearestCity.id}` : ''}`)}>
              <Plus className="size-3.5" /> {t('admin.mapEditor.addHere')}
            </AButton>
            <AButton size="sm" variant="plain" onClick={() => setClick(null)}>
              {t('admin.common.cancel')}
            </AButton>
          </div>
        )}
      </div>
      {pending.length > 0 && (
        <Card
          className="mt-6"
          title={t('admin.mapEditor.pending', { count: pending.length })}
          action={
            <div className="flex gap-2">
              <AButton size="sm" variant="secondary" onClick={discard}>
                {t('admin.mapEditor.discard')}
              </AButton>
              <AButton size="sm" onClick={saveAll} loading={saving}>
                {t('admin.mapEditor.saveAll')}
              </AButton>
            </div>
          }
        >
          <ul>
            {pending.map((m) => (
              <li key={`${m.kind}:${m.id}`} className="flex items-center justify-between border-b border-[#e5e5ea] px-4 py-2.5 text-[14px] last:border-b-0">
                <span>{t('admin.mapEditor.moved', { name: m.name })}</span>
                <span className="font-mono text-[12px] text-[#6e6e73]">
                  {m.lat.toFixed(5)}, {m.lng.toFixed(5)}
                </span>
              </li>
            ))}
          </ul>
        </Card>
      )}
    </>
  );
}
