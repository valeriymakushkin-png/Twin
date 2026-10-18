'use client';

import type { FeatureCollection, Geometry } from 'geojson';
import type { Map as MLMap, Marker, StyleSpecification } from 'maplibre-gl';
import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
import { feature } from 'topojson-client';
import type { GeometryCollection, Topology } from 'topojson-specification';
import { numericToAlpha2 } from '@/lib/countries';
import { photoUrl } from '@/lib/photos';

export interface MapMarker {
  id: string;
  lat: number;
  lng: number;
  image: string;
  kind: 'destination' | 'place' | 'meetup';
  label: string;
  /** Small colored dot in the corner (category) */
  badgeColor?: string;
  badgeText?: string;
}

export interface WorldMapHandle {
  flyTo: (lat: number, lng: number, zoom?: number) => void;
  zoomOut: () => void;
  center: () => { lat: number; lng: number; zoom: number } | null;
  showUser: (lat: number, lng: number) => void;
}

const SATELLITE_TILES =
  process.env.NEXT_PUBLIC_SATELLITE_TILES ?? 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';

type Style = 'satellite' | 'light';

const palette = {
  satellite: { ocean: '#0d2b45', land: '#2c4a3b', border: 'rgba(255,255,255,0.38)', visited: '#818cf8', visitedOpacity: 0.32, selected: '#ffffff' },
  light: { ocean: '#cfe0f1', land: '#fbfbf8', border: '#c3cddb', visited: '#6366f1', visitedOpacity: 0.22, selected: '#4f46e5' },
};

function buildStyle(style: Style, countries: FeatureCollection | null, visited: string[]): StyleSpecification {
  const c = palette[style];
  const empty: FeatureCollection = { type: 'FeatureCollection', features: [] };
  return {
    version: 8,
    projection: { type: 'globe' },
    sky: {
      'sky-color': style === 'satellite' ? '#1e2a5a' : '#e0e7ff',
      'horizon-color': style === 'satellite' ? '#93c5fd' : '#ffffff',
      'fog-color': style === 'satellite' ? '#93c5fd' : '#ffffff',
      'sky-horizon-blend': 0.6,
      'horizon-fog-blend': 0.5,
      'fog-ground-blend': 0.6,
      'atmosphere-blend': ['interpolate', ['linear'], ['zoom'], 0, 1, 5, 1, 7, 0],
    },
    sources: {
      countries: { type: 'geojson', data: countries ?? empty },
      satellite: {
        type: 'raster',
        tiles: [SATELLITE_TILES],
        tileSize: 256,
        maxzoom: 18,
        attribution: 'Imagery © Esri, Maxar, Earthstar Geographics',
      },
    },
    layers: [
      { id: 'ocean', type: 'background', paint: { 'background-color': c.ocean } },
      { id: 'land', type: 'fill', source: 'countries', paint: { 'fill-color': c.land } },
      ...(style === 'satellite' ? [{ id: 'satellite', type: 'raster' as const, source: 'satellite', paint: { 'raster-fade-duration': 250, 'raster-saturation': 0.12, 'raster-contrast': 0.06 } }] : []),
      {
        id: 'visited',
        type: 'fill',
        source: 'countries',
        filter: ['in', ['get', 'iso'], ['literal', visited]],
        paint: { 'fill-color': c.visited, 'fill-opacity': c.visitedOpacity },
      },
      { id: 'borders', type: 'line', source: 'countries', paint: { 'line-color': c.border, 'line-width': ['interpolate', ['linear'], ['zoom'], 1, 0.4, 6, 1.2] } },
      {
        id: 'selected',
        type: 'line',
        source: 'countries',
        filter: ['==', ['get', 'iso'], ''],
        paint: { 'line-color': c.selected, 'line-width': 2.2 },
      },
    ],
  };
}

let countriesCache: FeatureCollection | null = null;

function toCountries(topo: Topology<{ countries: GeometryCollection }>) {
  const fc = feature(topo, topo.objects.countries) as FeatureCollection<Geometry, { name: string; iso?: string }>;
  for (const f of fc.features) f.properties = { ...f.properties, iso: numericToAlpha2(f.id) ?? '' };
  return fc;
}

/** Coarse borders first for a fast first paint, then the detailed set (small islands included). */
async function loadCountries(onData: (fc: FeatureCollection) => void) {
  if (countriesCache) return onData(countriesCache);
  const coarse = (await import('world-atlas/countries-110m.json')).default as unknown as Topology<{ countries: GeometryCollection }>;
  onData(toCountries(coarse));
  const fine = (await import('world-atlas/countries-50m.json')).default as unknown as Topology<{ countries: GeometryCollection }>;
  countriesCache = toCountries(fine);
  onData(countriesCache);
}

interface Props {
  markers: MapMarker[];
  activeId?: string | null;
  visited: string[];
  mapStyle: Style;
  selectedCountry?: string | null;
  initial?: { lat: number; lng: number; zoom: number };
  bottomInset?: number;
  onMarkerClick?: (id: string) => void;
  onCountryClick?: (iso: string) => void;
  onUserMove?: (center: { lat: number; lng: number; zoom: number }) => void;
}

export const WorldMap = forwardRef<WorldMapHandle, Props>(function WorldMap(
  { markers, activeId, visited, mapStyle, selectedCountry, initial, bottomInset = 0, onMarkerClick, onCountryClick, onUserMove },
  ref,
) {
  const container = useRef<HTMLDivElement>(null);
  const map = useRef<MLMap | null>(null);
  const markerRefs = useRef(new Map<string, { marker: Marker; el: HTMLDivElement }>());
  const userMarker = useRef<Marker | null>(null);
  const ready = useRef(false);
  const latest = useRef({ onMarkerClick, onCountryClick, onUserMove, visited, mapStyle, bottomInset });
  latest.current = { onMarkerClick, onCountryClick, onUserMove, visited, mapStyle, bottomInset };
  const mlRef = useRef<typeof import('maplibre-gl/dist/maplibre-gl-csp') | null>(null);

  useImperativeHandle(ref, () => ({
    flyTo: (lat, lng, zoom) => {
      const m = map.current;
      if (!m) return;
      m.flyTo({
        center: [lng, lat],
        zoom: zoom ?? Math.max(m.getZoom(), 5),
        speed: 1.1,
        curve: 1.5,
        padding: { top: 120, bottom: latest.current.bottomInset, left: 0, right: 0 },
        essential: true,
      });
    },
    zoomOut: () => map.current?.flyTo({ zoom: 1.4, speed: 1.2, padding: { top: 0, bottom: 0, left: 0, right: 0 } }),
    center: () => {
      const m = map.current;
      if (!m) return null;
      const c = m.getCenter();
      return { lat: c.lat, lng: c.lng, zoom: m.getZoom() };
    },
    showUser: (lat, lng) => {
      const ml = mlRef.current;
      const m = map.current;
      if (!ml || !m) return;
      userMarker.current?.remove();
      const el = document.createElement('div');
      el.className = 'vy-user-dot';
      userMarker.current = new ml.Marker({ element: el }).setLngLat([lng, lat]).addTo(m);
    },
  }));

  // Create the map once.
  useEffect(() => {
    let cancelled = false;
    (async () => {
      const ml = await import('maplibre-gl/dist/maplibre-gl-csp');
      if (cancelled || !container.current) return;
      ml.setWorkerUrl('/maplibre-gl-csp-worker.js');
      mlRef.current = ml;
      const start = initial ?? { lat: 12, lng: 105, zoom: 2.4 };
      const m = new ml.Map({
        container: container.current,
        style: buildStyle(latest.current.mapStyle, countriesCache, latest.current.visited),
        center: [start.lng, start.lat],
        zoom: Math.max(0.8, start.zoom - 1.2),
        attributionControl: { compact: true },
        maxPitch: 60,
        dragRotate: false,
        pitchWithRotate: false,
        fadeDuration: 150,
      });
      m.touchZoomRotate.disableRotation();
      // Missing tiles are expected offline; the vector land layer underneath covers for them.
      m.on('error', (e) => {
        if (!/fetch|tile|load/i.test(String(e.error?.message))) console.warn('[map]', e.error);
      });
      map.current = m;
      if (process.env.NODE_ENV !== 'production') (window as unknown as { __vyMap?: MLMap }).__vyMap = m;

      const syncZoomAttr = () => container.current?.setAttribute('data-zoom', m.getZoom() >= 5.2 ? 'near' : 'far');
      syncZoomAttr();
      m.on('zoom', syncZoomAttr);

      // `load` waits for every tile, which never happens offline — the style being ready is enough.
      m.once('style.load', async () => {
        ready.current = true;
        m.easeTo({ zoom: start.zoom, duration: 1800, easing: (t) => 1 - Math.pow(1 - t, 3) });
        m.getContainer().querySelector('.maplibregl-compact-show')?.classList.remove('maplibregl-compact-show');
        await loadCountries((fc) => {
          if (cancelled) return;
          (m.getSource('countries') as import('maplibre-gl').GeoJSONSource | undefined)?.setData(fc);
        });
      });

      m.on('click', (e) => {
        const features = m.queryRenderedFeatures(e.point, { layers: ['land'] });
        const iso = features[0]?.properties?.iso as string | undefined;
        if (iso) latest.current.onCountryClick?.(iso);
      });

      m.on('moveend', (e) => {
        // Only user gestures re-rank the nearby list; programmatic flights keep it stable.
        if (!(e as { originalEvent?: unknown }).originalEvent) return;
        const c = m.getCenter();
        latest.current.onUserMove?.({ lat: c.lat, lng: c.lng, zoom: m.getZoom() });
      });
    })();
    return () => {
      cancelled = true;
      markerRefs.current.forEach(({ marker }) => marker.remove());
      markerRefs.current.clear();
      map.current?.remove();
      map.current = null;
      ready.current = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Swap the style when the user toggles satellite / scheme.
  useEffect(() => {
    const m = map.current;
    if (!m || !ready.current) return;
    m.setStyle(buildStyle(mapStyle, countriesCache, latest.current.visited));
  }, [mapStyle]);

  // Visited countries tint.
  useEffect(() => {
    const m = map.current;
    if (!m || !m.getLayer('visited')) return;
    m.setFilter('visited', ['in', ['get', 'iso'], ['literal', visited]]);
  }, [visited]);

  useEffect(() => {
    const m = map.current;
    if (!m || !m.getLayer('selected')) return;
    m.setFilter('selected', ['==', ['get', 'iso'], selectedCountry ?? '']);
  }, [selectedCountry]);

  // Reconcile DOM markers with props.
  useEffect(() => {
    let raf = 0;
    const apply = () => {
      const ml = mlRef.current;
      const m = map.current;
      if (!ml || !m) {
        raf = requestAnimationFrame(apply);
        return;
      }
      const next = new Set(markers.map((x) => x.id));
      markerRefs.current.forEach((v, id) => {
        if (!next.has(id)) {
          v.marker.remove();
          markerRefs.current.delete(id);
        }
      });
      for (const mk of markers) {
        const existing = markerRefs.current.get(mk.id);
        if (existing) {
          // Labels follow the UI language.
          const label = existing.el.querySelector('.vy-pin__label');
          if (label && label.textContent !== mk.label) label.textContent = mk.label;
          continue;
        }
        const root = document.createElement('div');
        const pin = document.createElement('div');
        pin.className = `vy-pin vy-pin--${mk.kind}`;
        pin.innerHTML = `
          ${mk.kind === 'meetup' ? '<span class="vy-pin__pulse"></span>' : ''}
          <div class="vy-pin__photo" style="background-image:url('${photoUrl(mk.image, 140)}'), linear-gradient(135deg,#a5b4fc,#6366f1)"></div>
          <span class="vy-pin__tail"></span>
          ${mk.badgeColor ? `<span class="vy-pin__badge" style="background:${mk.badgeColor}">${mk.badgeText ?? ''}</span>` : ''}
          <span class="vy-pin__label"></span>`;
        (pin.querySelector('.vy-pin__label') as HTMLElement).textContent = mk.label;
        root.appendChild(pin);
        root.addEventListener('click', (e) => {
          e.stopPropagation();
          latest.current.onMarkerClick?.(mk.id);
        });
        const marker = new ml.Marker({ element: root, anchor: 'bottom', opacityWhenCovered: '0' }).setLngLat([mk.lng, mk.lat]).addTo(m);
        markerRefs.current.set(mk.id, { marker, el: pin });
      }
    };
    apply();
    return () => cancelAnimationFrame(raf);
  }, [markers]);

  useEffect(() => {
    markerRefs.current.forEach(({ el, marker }, id) => {
      const on = id === activeId;
      el.classList.toggle('is-active', on);
      marker.getElement().style.zIndex = on ? '10' : '';
    });
  }, [activeId, markers]);

  // maplibre's stylesheet forces `position: relative` on the map element, so size it from a wrapper.
  return (
    <div className={`absolute inset-0 ${mapStyle === 'satellite' ? 'vy-space' : 'vy-space-light'}`}>
      <div ref={container} className="h-full w-full" />
    </div>
  );
});
