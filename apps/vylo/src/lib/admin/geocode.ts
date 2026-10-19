/**
 * Address search for the admin console (OpenStreetMap Nominatim: fine for occasional editorial use,
 * max one request per second; point NEXT_PUBLIC_GEOCODER_URL at your own instance for heavier use).
 */
const BASE = (process.env.NEXT_PUBLIC_GEOCODER_URL ?? 'https://nominatim.openstreetmap.org').replace(/\/$/, '');

export interface GeoResult {
  label: string;
  lat: number;
  lng: number;
  countryCode?: string;
}

export async function geocode(query: string, lang = 'en'): Promise<GeoResult[]> {
  const r = await fetch(`${BASE}/search?format=jsonv2&addressdetails=1&limit=6&accept-language=${lang}&q=${encodeURIComponent(query)}`);
  if (!r.ok) throw new Error('geocoder');
  const rows = (await r.json()) as { display_name: string; lat: string; lon: string; address?: { country_code?: string } }[];
  return rows.map((x) => ({ label: x.display_name, lat: Number(x.lat), lng: Number(x.lon), countryCode: x.address?.country_code?.toUpperCase() }));
}

export async function reverseGeocode(lat: number, lng: number, lang = 'en'): Promise<string | null> {
  const r = await fetch(`${BASE}/reverse?format=jsonv2&zoom=18&accept-language=${lang}&lat=${lat}&lon=${lng}`);
  if (!r.ok) return null;
  const j = (await r.json()) as { display_name?: string; address?: Record<string, string> };
  const a = j.address;
  if (!a) return j.display_name ?? null;
  const street = [a.road ?? a.pedestrian ?? a.footway, a.house_number].filter(Boolean).join(' ');
  const town = [a.postcode, a.city ?? a.town ?? a.village].filter(Boolean).join(' ');
  return [street, town].filter(Boolean).join(', ') || j.display_name || null;
}
