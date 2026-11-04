import type { Feature, FeatureCollection, Geometry, MultiPolygon, Polygon } from 'geojson';
import { geoArea, geoCentroid, geoMercator, geoNaturalEarth1, geoPath, type GeoPermissibleObjects, type GeoProjection } from 'd3-geo';
import { feature } from 'topojson-client';
import type { Topology } from 'topojson-specification';
import { NUMERIC_TO_ALPHA2 } from '../../data/country-numeric.generated';
import type { LatLng } from './geo';

/**
 * Границы стран для офлайн-карты (Natural Earth через пакет world-atlas, общественное достояние). Карта рисуется
 * самим приложением (SVG на экране, Canvas для картинок и PDF), поэтому ей не нужны ни интернет, ни тайлы.
 */
export interface Country {
  /** ISO 3166-1 alpha-2; у спорных территорий без кода — undefined */
  code?: string;
  name: string;
  feature: Feature<Geometry>;
}

export interface World {
  countries: Country[];
  /** Все границы одним объектом — удобно для фона мини-карт */
  collection: FeatureCollection<Geometry>;
}

let loading: Promise<World> | null = null;

export function loadWorld(): Promise<World> {
  loading ??= import('world-atlas/countries-50m.json').then((m) => {
    const topo = m.default as unknown as Topology;
    const collection = feature(topo, topo.objects.countries!) as unknown as FeatureCollection<Geometry>;
    const countries = collection.features.map((f): Country => {
      const name = (f.properties as { name?: string } | null)?.name ?? '';
      const id = f.id === undefined ? undefined : String(f.id).padStart(3, '0');
      // В карте у Косова нет цифрового кода — ему присваиваем его двухбуквенный.
      const code = id ? NUMERIC_TO_ALPHA2[id] : name === 'Kosovo' ? 'XK' : undefined;
      return { code, name, feature: f };
    });
    return { countries, collection };
  });
  return loading;
}

/** Проекция всего мира (Natural Earth — привычный вид с «округлыми» краями) под прямоугольник заданного размера. */
export function worldProjection(width: number, height: number, pad = 8): GeoProjection {
  return geoNaturalEarth1().fitExtent([[pad, pad], [width - pad, height - pad]], { type: 'Sphere' });
}

/** Самый большой кусок территории страны (у Франции — европейская часть, а не заморские департаменты). */
export function mainLand(f: Feature<Geometry>): Feature<Geometry> {
  const g = f.geometry;
  if (g.type !== 'MultiPolygon') return f;
  let best: Polygon | undefined;
  let bestArea = -1;
  for (const coordinates of (g as MultiPolygon).coordinates) {
    const poly: Polygon = { type: 'Polygon', coordinates };
    const a = geoArea(poly);
    if (a > bestArea) (best = poly), (bestArea = a);
  }
  return best ? { type: 'Feature', properties: f.properties, geometry: best } : f;
}

/** Опорная точка страны для значка: центр самого большого куска территории. */
export function countryAnchor(f: Feature<Geometry>): LatLng | undefined {
  return centroidOf(mainLand(f));
}

function centroidOf(f: Feature<Geometry>): LatLng {
  const [lng, lat] = geoCentroid(f as GeoPermissibleObjects);
  return { lat: lat as number, lng: lng as number };
}

/**
 * Проекция Меркатора под набор точек: маршрут занимает всю область, вокруг — границы стран. Масштаб считается прямо в
 * координатах Меркатора, поэтому пропорции не искажаются. Если точки почти совпадают (поездка в одном городе), берётся
 * окно в несколько градусов, чтобы карта не приближалась «до пикселей» и вокруг были видны береговые линии.
 */
export function routeProjection(points: LatLng[], width: number, height: number, pad: number, minSpanDeg = 4): GeoProjection {
  const rad = (d: number) => (d * Math.PI) / 180;
  const deg = (r: number) => (r * 180) / Math.PI;
  const mercY = (lat: number) => Math.log(Math.tan(Math.PI / 4 + rad(Math.max(-85, Math.min(85, lat))) / 2));
  const lngs = points.map((p) => rad(p.lng));
  const ys = points.map((p) => mercY(p.lat));
  const dx = Math.max(Math.max(...lngs) - Math.min(...lngs), rad(minSpanDeg));
  const dy = Math.max(Math.max(...ys) - Math.min(...ys), rad(minSpanDeg));
  const scale = Math.min((width - 2 * pad) / dx, (height - 2 * pad) / dy);
  const cx = (Math.max(...lngs) + Math.min(...lngs)) / 2;
  const cy = (Math.max(...ys) + Math.min(...ys)) / 2;
  const centerLat = deg(2 * Math.atan(Math.exp(cy)) - Math.PI / 2);
  return geoMercator().scale(scale).center([deg(cx), centerLat]).translate([width / 2, height / 2]);
}

export { geoPath };
