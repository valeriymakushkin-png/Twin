import { destinationById, destinationHref, destinations, placeById, placeHref, places } from './catalog';

export interface ItemRef {
  kind: 'place' | 'destination';
  id: string;
  image: string;
  rating: number;
  reviews: number;
  href: string;
  lat: number;
  lng: number;
  tags: string[];
  countryCode: string;
  destinationId: string;
}

/** Places and destinations share one id space so they can be saved, collected and searched together. */
export function resolveItem(id: string): ItemRef | undefined {
  const d = destinationById(id);
  if (d)
    return { kind: 'destination', id, image: d.image, rating: d.rating, reviews: d.reviews, href: destinationHref(d.id), lat: d.lat, lng: d.lng, tags: d.tags, countryCode: d.countryCode, destinationId: d.id };
  const p = placeById(id);
  if (p) {
    const dest = destinationById(p.destinationId);
    return { kind: 'place', id, image: p.image, rating: p.rating, reviews: p.reviews, href: placeHref(p.id), lat: p.lat, lng: p.lng, tags: p.tags, countryCode: dest?.countryCode ?? '', destinationId: p.destinationId };
  }
  return undefined;
}

export const allItemIds = () => [...destinations.map((d) => d.id), ...places.map((p) => p.id)];
