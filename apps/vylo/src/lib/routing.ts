/**
 * Turn-by-turn routes from an OSRM-compatible server. The default is the FOSSGIS instance behind
 * openstreetmap.org (fair use, attribution required); set NEXT_PUBLIC_ROUTING_URL to your own OSRM or
 * a commercial provider for production. Offline, or if the server fails, we fall back to straight
 * lines with time estimated from typical speeds, so the planner always answers.
 */
import { distanceKm } from './utils';

export type TravelMode = 'walk' | 'bike' | 'car';

export interface RoutePoint {
  /** Catalogue id when the stop is a known place */
  id?: string;
  lat: number;
  lng: number;
  label: string;
}

export interface RouteStep {
  type: string;
  modifier?: string;
  name: string;
  /** metres */
  distance: number;
  /** seconds */
  duration: number;
  location: [number, number];
}

export interface RouteLeg {
  distance: number;
  duration: number;
  steps: RouteStep[];
}

export interface RouteResult {
  /** [lng, lat] pairs */
  geometry: [number, number][];
  distance: number;
  duration: number;
  legs: RouteLeg[];
  /** True when we could not reach the routing server and drew straight lines instead */
  approximate: boolean;
}

const BASE = (process.env.NEXT_PUBLIC_ROUTING_URL ?? 'https://routing.openstreetmap.de').replace(/\/$/, '');
const PROFILE: Record<TravelMode, string> = { walk: 'routed-foot', bike: 'routed-bike', car: 'routed-car' };
/** km/h including stops, and how much longer real paths are than the crow flies */
const SPEED: Record<TravelMode, number> = { walk: 4.6, bike: 14, car: 32 };
const DETOUR = 1.3;

function approximate(points: RoutePoint[], mode: TravelMode): RouteResult {
  const legs: RouteLeg[] = [];
  for (let i = 1; i < points.length; i++) {
    const a = points[i - 1]!;
    const b = points[i]!;
    const distance = distanceKm(a, b) * 1000 * DETOUR;
    const duration = (distance / 1000 / SPEED[mode]) * 3600;
    legs.push({ distance, duration, steps: [{ type: 'arrive', name: b.label, distance, duration, location: [b.lng, b.lat] }] });
  }
  return {
    geometry: points.map((p) => [p.lng, p.lat]),
    distance: legs.reduce((s, l) => s + l.distance, 0),
    duration: legs.reduce((s, l) => s + l.duration, 0),
    legs,
    approximate: true,
  };
}

interface OsrmResponse {
  code: string;
  routes?: {
    distance: number;
    duration: number;
    geometry: { coordinates: [number, number][] };
    legs: { distance: number; duration: number; steps: { distance: number; duration: number; name: string; maneuver: { type: string; modifier?: string; location: [number, number] } }[] }[];
  }[];
}

export async function fetchRoute(points: RoutePoint[], mode: TravelMode, signal?: AbortSignal): Promise<RouteResult> {
  if (points.length < 2) return { geometry: [], distance: 0, duration: 0, legs: [], approximate: true };
  // Very long trips (another city, another country) are flights, not walks: skip the router.
  const longest = Math.max(...points.slice(1).map((p, i) => distanceKm(points[i]!, p)));
  if (longest > (mode === 'car' ? 1500 : mode === 'bike' ? 250 : 60)) return approximate(points, mode);
  const coords = points.map((p) => `${p.lng.toFixed(6)},${p.lat.toFixed(6)}`).join(';');
  try {
    const res = await fetch(`${BASE}/${PROFILE[mode]}/route/v1/driving/${coords}?overview=full&geometries=geojson&steps=true`, { signal });
    const data = (await res.json()) as OsrmResponse;
    const r = data.routes?.[0];
    if (!res.ok || data.code !== 'Ok' || !r) throw new Error(data.code);
    return {
      geometry: r.geometry.coordinates,
      distance: r.distance,
      duration: r.duration,
      legs: r.legs.map((l) => ({
        distance: l.distance,
        duration: l.duration,
        steps: l.steps.map((s) => ({ type: s.maneuver.type, modifier: s.maneuver.modifier, name: s.name, distance: s.distance, duration: s.duration, location: s.maneuver.location })),
      })),
      approximate: false,
    };
  } catch (e) {
    if ((e as Error).name === 'AbortError') throw e;
    return approximate(points, mode);
  }
}

/** Visit order that keeps the first stop fixed: nearest neighbour, then 2-opt until nothing improves. */
export function optimizeOrder<T extends { lat: number; lng: number }>(points: T[]): T[] {
  if (points.length < 4) return points;
  const [start, ...rest] = points;
  const route = [start!];
  const left = [...rest];
  while (left.length) {
    const last = route[route.length - 1]!;
    let best = 0;
    for (let i = 1; i < left.length; i++) if (distanceKm(last, left[i]!) < distanceKm(last, left[best]!)) best = i;
    route.push(left.splice(best, 1)[0]!);
  }
  const length = (r: T[]) => r.slice(1).reduce((s, p, i) => s + distanceKm(r[i]!, p), 0);
  let improved = true;
  while (improved) {
    improved = false;
    for (let i = 1; i < route.length - 1; i++)
      for (let j = i + 1; j < route.length; j++) {
        const next = [...route.slice(0, i), ...route.slice(i, j + 1).reverse(), ...route.slice(j + 1)];
        if (length(next) + 1e-9 < length(route)) {
          route.splice(0, route.length, ...next);
          improved = true;
        }
      }
  }
  return route;
}

/** Hand the route to the system maps app for real navigation. */
export function externalLinks(points: RoutePoint[], mode: TravelMode) {
  const dest = points[points.length - 1]!;
  const via = points.slice(1, -1);
  const origin = points[0]!;
  const ll = (p: RoutePoint) => `${p.lat},${p.lng}`;
  const g = new URLSearchParams({ api: '1', origin: ll(origin), destination: ll(dest), travelmode: mode === 'walk' ? 'walking' : mode === 'bike' ? 'bicycling' : 'driving' });
  if (via.length) g.set('waypoints', via.map(ll).join('|'));
  const apple = new URLSearchParams({ saddr: ll(origin), daddr: ll(dest), dirflg: mode === 'walk' ? 'w' : mode === 'car' ? 'd' : 'w' });
  return { google: `https://www.google.com/maps/dir/?${g}`, apple: `https://maps.apple.com/?${apple}` };
}
