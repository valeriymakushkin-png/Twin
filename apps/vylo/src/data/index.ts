import { destinationById, destinations } from './destinations';
import { categoryMeta, placeById, places } from './places';

export interface ItemRef {
  kind: 'place' | 'destination';
  id: string;
  name: string;
  subtitle: string;
  image: string;
  rating: number;
  reviews: number;
  href: string;
  lat: number;
  lng: number;
  tags: string[];
  countryCode: string;
}

/** Places and destinations share one id space so they can be saved, collected and searched together. */
export function resolveItem(id: string): ItemRef | undefined {
  const d = destinationById(id);
  if (d)
    return {
      kind: 'destination',
      id,
      name: d.name,
      subtitle: d.country,
      image: d.image,
      rating: d.rating,
      reviews: d.reviews,
      href: `/d/${d.id}/`,
      lat: d.lat,
      lng: d.lng,
      tags: d.tags,
      countryCode: d.countryCode,
    };
  const p = placeById(id);
  if (p) {
    const dest = destinationById(p.destinationId);
    return {
      kind: 'place',
      id,
      name: p.name,
      subtitle: `${dest?.name ?? ''}, ${dest?.country ?? ''} · ${categoryMeta[p.category].short}`,
      image: p.image,
      rating: p.rating,
      reviews: p.reviews,
      href: `/p/${p.id}/`,
      lat: p.lat,
      lng: p.lng,
      tags: p.tags,
      countryCode: dest?.countryCode ?? '',
    };
  }
  return undefined;
}

export function searchItems(q: string): ItemRef[] {
  const s = q.trim().toLowerCase();
  if (!s) return [];
  const ids = [
    ...destinations.filter((d) => [d.name, d.country, ...d.tags].some((x) => x.toLowerCase().includes(s))).map((d) => d.id),
    ...places.filter((p) => [p.name, ...p.tags].some((x) => x.toLowerCase().includes(s))).map((p) => p.id),
  ];
  return ids.map((id) => resolveItem(id)!).slice(0, 20);
}
