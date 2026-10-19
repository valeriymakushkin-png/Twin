'use client';

import type { Feature, FeatureCollection, Geometry, Point } from 'geojson';
import type { ExpressionSpecification, GeoJSONSource, Map as MLMap, Marker, StyleSpecification } from 'maplibre-gl';
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
  spot?: 'insta' | 'hidden';
}

/** Everything else in the catalogue, drawn cheaply as coloured dots on the GPU. */
export interface MapDot {
  id: string;
  lat: number;
  lng: number;
  color: string;
}

export interface MapRoute {
  /** [lng, lat] */
  line: [number, number][];
  stops: { lat: number; lng: number; label: string }[];
  approximate?: boolean;
}

export interface MapView {
  /** west, south, east, north */
  bounds: [number, number, number, number];
  zoom: number;
  center: { lat: number; lng: number };
}

export interface WorldMapHandle {
  flyTo: (lat: number, lng: number, zoom?: number) => void;
  fitPoints: (points: { lat: number; lng: number }[], maxZoom?: number) => void;
  zoomOut: () => void;
  zoomBy: (delta: number) => void;
  resetNorth: () => void;
  toggleTilt: () => boolean;
  center: () => { lat: number; lng: number; zoom: number } | null;
  showUser: (lat: number, lng: number) => void;
}

const SATELLITE_TILES = process.env.NEXT_PUBLIC_SATELLITE_TILES ?? 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
const LABEL_TILES = 'https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}';
const ROAD_TILES = 'https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Transportation/MapServer/tile/{z}/{y}/{x}';
const STREET_TILES = process.env.NEXT_PUBLIC_STREET_TILES
  ? [process.env.NEXT_PUBLIC_STREET_TILES]
  : ['a', 'b', 'c', 'd'].map((s) => `https://${s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}@2x.png`);

type Style = 'satellite' | 'light';

const palette = {
  satellite: { ocean: '#0d2b45', land: '#2c4a3b', border: 'rgba(255,255,255,0.38)', visited: '#818cf8', visitedOpacity: 0.32, selected: '#ffffff' },
  light: { ocean: '#cfe0f1', land: '#fbfbf8', border: '#c3cddb', visited: '#6366f1', visitedOpacity: 0.22, selected: '#4f46e5' },
};

/** Opacity ramp that fades a layer in between two zoom levels. */
const fadeIn = (from: number, to: number, max = 1) => ['interpolate', ['linear'], ['zoom'], from, 0, to, max] as ExpressionSpecification;

const emptyFC: FeatureCollection = { type: 'FeatureCollection', features: [] };

const dotsToFC = (dots: MapDot[]): FeatureCollection<Point> => ({
  type: 'FeatureCollection',
  features: dots.map((d): Feature<Point> => ({ type: 'Feature', id: d.id, properties: { id: d.id, color: d.color }, geometry: { type: 'Point', coordinates: [d.lng, d.lat] } })),
});

const routeToFC = (route: MapRoute | null | undefined): FeatureCollection =>
  route && route.line.length > 1
    ? { type: 'FeatureCollection', features: [{ type: 'Feature', properties: { approximate: !!route.approximate }, geometry: { type: 'LineString', coordinates: route.line } }] }
    : emptyFC;

function buildStyle(style: Style, countries: FeatureCollection | null, visited: string[], dots: FeatureCollection, route: FeatureCollection): StyleSpecification {
  const c = palette[style];
  const sat = style === 'satellite';
  return {
    version: 8,
    projection: { type: 'globe' },
    sky: {
      'sky-color': sat ? '#1e2a5a' : '#e0e7ff',
      'horizon-color': sat ? '#93c5fd' : '#ffffff',
      'fog-color': sat ? '#93c5fd' : '#ffffff',
      'sky-horizon-blend': 0.6,
      'horizon-fog-blend': 0.5,
      'fog-ground-blend': 0.6,
      'atmosphere-blend': ['interpolate', ['linear'], ['zoom'], 0, 1, 5, 1, 7, 0],
    },
    sources: {
      countries: { type: 'geojson', data: countries ?? emptyFC },
      satellite: { type: 'raster', tiles: [SATELLITE_TILES], tileSize: 256, maxzoom: 18, attribution: 'Imagery © Esri, Maxar, Earthstar Geographics' },
      labels: { type: 'raster', tiles: [LABEL_TILES], tileSize: 256, maxzoom: 18 },
      roads: { type: 'raster', tiles: [ROAD_TILES], tileSize: 256, maxzoom: 18 },
      streets: { type: 'raster', tiles: STREET_TILES, tileSize: 256, maxzoom: 19, attribution: '© OpenStreetMap contributors © CARTO' },
      dots: { type: 'geojson', data: dots },
      route: { type: 'geojson', data: route },
    },
    layers: [
      { id: 'ocean', type: 'background', paint: { 'background-color': c.ocean } },
      { id: 'land', type: 'fill', source: 'countries', paint: { 'fill-color': c.land } },
      ...(sat
        ? [
            { id: 'satellite', type: 'raster' as const, source: 'satellite', paint: { 'raster-fade-duration': 250, 'raster-saturation': 0.12, 'raster-contrast': 0.06 } },
            { id: 'roads', type: 'raster' as const, source: 'roads', minzoom: 7, paint: { 'raster-opacity': fadeIn(7, 9, 0.85) } },
            { id: 'labels', type: 'raster' as const, source: 'labels', minzoom: 2.5, paint: { 'raster-opacity': 0.95 } },
          ]
        : [
            // The street map fades in as soon as there is something to read on it.
            { id: 'streets', type: 'raster' as const, source: 'streets', minzoom: 3, paint: { 'raster-opacity': fadeIn(3, 4.5), 'raster-fade-duration': 200 } },
          ]),
      {
        id: 'visited',
        type: 'fill',
        source: 'countries',
        filter: ['in', ['get', 'iso'], ['literal', visited]],
        paint: { 'fill-color': c.visited, 'fill-opacity': ['interpolate', ['linear'], ['zoom'], 3, c.visitedOpacity, 6, 0.06] },
      },
      { id: 'borders', type: 'line', source: 'countries', maxzoom: sat ? 24 : 5, paint: { 'line-color': c.border, 'line-width': ['interpolate', ['linear'], ['zoom'], 1, 0.4, 6, 1.2] } },
      { id: 'selected', type: 'line', source: 'countries', filter: ['==', ['get', 'iso'], ''], paint: { 'line-color': c.selected, 'line-width': 2.2 } },
      {
        id: 'route-casing',
        type: 'line',
        source: 'route',
        layout: { 'line-cap': 'round', 'line-join': 'round' },
        paint: { 'line-color': '#ffffff', 'line-width': ['interpolate', ['linear'], ['zoom'], 4, 5, 14, 11], 'line-opacity': 0.95 },
      },
      {
        id: 'route-line',
        type: 'line',
        source: 'route',
        layout: { 'line-cap': 'round', 'line-join': 'round' },
        paint: {
          'line-color': '#2563eb',
          'line-width': ['interpolate', ['linear'], ['zoom'], 4, 3, 14, 7],
          'line-dasharray': ['case', ['get', 'approximate'], ['literal', [1.5, 1.2]], ['literal', [1, 0]]],
        },
      },
      {
        id: 'dots',
        type: 'circle',
        source: 'dots',
        paint: {
          'circle-color': ['get', 'color'],
          'circle-radius': ['interpolate', ['linear'], ['zoom'], 2, 2.2, 8, 4.5, 14, 7],
          'circle-stroke-color': '#ffffff',
          'circle-stroke-width': ['interpolate', ['linear'], ['zoom'], 2, 0.6, 10, 2],
          'circle-opacity': 0.92,
        },
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
  dots?: MapDot[];
  route?: MapRoute | null;
  activeId?: string | null;
  visited: string[];
  mapStyle: Style;
  selectedCountry?: string | null;
  initial?: { lat: number; lng: number; zoom: number };
  bottomInset?: number;
  onMarkerClick?: (id: string) => void;
  onCountryClick?: (iso: string) => void;
  onUserMove?: (center: { lat: number; lng: number; zoom: number }) => void;
  onViewChange?: (view: MapView) => void;
  onBearing?: (bearing: number, pitch: number) => void;
}

export const WorldMap = forwardRef<WorldMapHandle, Props>(function WorldMap(
  { markers, dots = [], route, activeId, visited, mapStyle, selectedCountry, initial, bottomInset = 0, onMarkerClick, onCountryClick, onUserMove, onViewChange, onBearing },
  ref,
) {
  const container = useRef<HTMLDivElement>(null);
  const map = useRef<MLMap | null>(null);
  const markerRefs = useRef(new Map<string, { marker: Marker; el: HTMLDivElement }>());
  const stopRefs = useRef<Marker[]>([]);
  const userMarker = useRef<Marker | null>(null);
  const ready = useRef(false);
  const data = useRef({ dots: dotsToFC(dots), route: routeToFC(route) });
  const latest = useRef({ onMarkerClick, onCountryClick, onUserMove, onViewChange, onBearing, visited, mapStyle, bottomInset });
  latest.current = { onMarkerClick, onCountryClick, onUserMove, onViewChange, onBearing, visited, mapStyle, bottomInset };
  const mlRef = useRef<typeof import('maplibre-gl/dist/maplibre-gl-csp') | null>(null);

  const padding = () => ({ top: 150, bottom: latest.current.bottomInset, left: 40, right: 40 });

  useImperativeHandle(ref, () => ({
    flyTo: (lat, lng, zoom) => {
      const m = map.current;
      if (!m) return;
      m.flyTo({ center: [lng, lat], zoom: zoom ?? Math.max(m.getZoom(), 5), speed: 1.1, curve: 1.5, padding: padding(), essential: true });
    },
    fitPoints: (points, maxZoom = 15) => {
      const m = map.current;
      if (!m || !points.length) return;
      if (points.length === 1) return void m.flyTo({ center: [points[0]!.lng, points[0]!.lat], zoom: Math.min(maxZoom, 14), padding: padding(), essential: true });
      const lngs = points.map((p) => p.lng);
      const lats = points.map((p) => p.lat);
      m.fitBounds(
        [
          [Math.min(...lngs), Math.min(...lats)],
          [Math.max(...lngs), Math.max(...lats)],
        ],
        { padding: padding(), maxZoom, duration: 1200 },
      );
    },
    zoomOut: () => map.current?.flyTo({ zoom: 1.4, pitch: 0, bearing: 0, speed: 1.2, padding: { top: 0, bottom: 0, left: 0, right: 0 } }),
    zoomBy: (delta) => map.current?.easeTo({ zoom: map.current.getZoom() + delta, duration: 300 }),
    resetNorth: () => map.current?.easeTo({ bearing: 0, pitch: 0, duration: 500 }),
    toggleTilt: () => {
      const m = map.current;
      if (!m) return false;
      const tilted = m.getPitch() < 20;
      m.easeTo({ pitch: tilted ? 55 : 0, duration: 600 });
      return tilted;
    },
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
        style: buildStyle(latest.current.mapStyle, countriesCache, latest.current.visited, data.current.dots, data.current.route),
        center: [start.lng, start.lat],
        zoom: Math.max(0.8, start.zoom - 1.2),
        attributionControl: { compact: true },
        maxPitch: 70,
        fadeDuration: 150,
      });
      m.addControl(new ml.ScaleControl({ maxWidth: 90, unit: 'metric' }), 'bottom-left');
      // Missing tiles are expected offline; the vector land layer underneath covers for them.
      m.on('error', (e) => {
        if (!/fetch|tile|load|image/i.test(String(e.error?.message))) console.warn('[map]', e.error);
      });
      map.current = m;
      if (process.env.NODE_ENV !== 'production') (window as unknown as { __vyMap?: MLMap }).__vyMap = m;

      const syncZoomAttr = () => container.current?.setAttribute('data-zoom', m.getZoom() >= 5.2 ? 'near' : 'far');
      syncZoomAttr();
      m.on('zoom', syncZoomAttr);

      const emitView = () => {
        const b = m.getBounds();
        const c = m.getCenter();
        latest.current.onViewChange?.({ bounds: [b.getWest(), b.getSouth(), b.getEast(), b.getNorth()], zoom: m.getZoom(), center: { lat: c.lat, lng: c.lng } });
      };
      m.on('rotate', () => latest.current.onBearing?.(m.getBearing(), m.getPitch()));
      m.on('pitch', () => latest.current.onBearing?.(m.getBearing(), m.getPitch()));

      // `load` waits for every tile, which never happens offline — the style being ready is enough.
      m.once('style.load', async () => {
        ready.current = true;
        m.easeTo({ zoom: start.zoom, duration: 1800, easing: (t) => 1 - Math.pow(1 - t, 3) });
        m.getContainer().querySelector('.maplibregl-compact-show')?.classList.remove('maplibregl-compact-show');
        emitView();
        await loadCountries((fc) => {
          if (cancelled) return;
          (m.getSource('countries') as GeoJSONSource | undefined)?.setData(fc);
        });
      });

      m.on('click', 'dots', (e) => {
        const id = e.features?.[0]?.properties?.id as string | undefined;
        if (id) {
          e.preventDefault();
          latest.current.onMarkerClick?.(id);
        }
      });
      m.on('mouseenter', 'dots', () => (m.getCanvas().style.cursor = 'pointer'));
      m.on('mouseleave', 'dots', () => (m.getCanvas().style.cursor = ''));

      m.on('click', (e) => {
        if (e.defaultPrevented) return;
        if (m.queryRenderedFeatures(e.point, { layers: ['dots'] }).length) return;
        // Countries are tappable from afar; up close a tap is about streets, not borders.
        if (m.getZoom() > 7) return;
        const features = m.queryRenderedFeatures(e.point, { layers: ['land'] });
        const iso = features[0]?.properties?.iso as string | undefined;
        if (iso) latest.current.onCountryClick?.(iso);
      });

      m.on('moveend', (e) => {
        emitView();
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
      stopRefs.current.forEach((s) => s.remove());
      map.current?.remove();
      map.current = null;
      ready.current = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Swap the style when the user toggles satellite / scheme (data travels along in the style).
  useEffect(() => {
    const m = map.current;
    if (!m || !ready.current) return;
    m.setStyle(buildStyle(mapStyle, countriesCache, latest.current.visited, data.current.dots, data.current.route));
  }, [mapStyle]);

  useEffect(() => {
    data.current.dots = dotsToFC(dots);
    (map.current?.getSource('dots') as GeoJSONSource | undefined)?.setData(data.current.dots);
  }, [dots]);

  // Route line and numbered stops.
  useEffect(() => {
    data.current.route = routeToFC(route);
    (map.current?.getSource('route') as GeoJSONSource | undefined)?.setData(data.current.route);
    let raf = 0;
    const draw = () => {
      const ml = mlRef.current;
      const m = map.current;
      if (!ml || !m) return void (raf = requestAnimationFrame(draw));
      stopRefs.current.forEach((s) => s.remove());
      stopRefs.current = (route?.stops ?? []).map((s, i, all) => {
        const el = document.createElement('div');
        el.className = `vy-stop${i === 0 ? ' vy-stop--start' : i === all.length - 1 ? ' vy-stop--end' : ''}`;
        el.textContent = String(i + 1);
        el.title = s.label;
        return new ml.Marker({ element: el }).setLngLat([s.lng, s.lat]).addTo(m);
      });
    };
    draw();
    return () => cancelAnimationFrame(raf);
  }, [route]);

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
        pin.className = `vy-pin vy-pin--${mk.kind}${mk.spot ? ` vy-pin--${mk.spot}` : ''}`;
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
