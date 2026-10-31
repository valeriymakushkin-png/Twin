import { optimizeOrder } from './routing';
import { distanceKm } from './utils';

export type Pace = 'relaxed' | 'balanced' | 'packed';
export type Slot = 'morning' | 'lunch' | 'afternoon' | 'sunset' | 'dinner';
export type Interest = 'sights' | 'nature' | 'food' | 'photo';

export const PACES: Pace[] = ['relaxed', 'balanced', 'packed'];
export const INTERESTS: Interest[] = ['sights', 'nature', 'food', 'photo'];

/** Places per day, meals and the sunset photo stop included. Editable in the admin panel. */
export const DEFAULT_PER_DAY: Record<Pace, number> = { relaxed: 3, balanced: 5, packed: 7 };

export interface PlanPlace {
  id: string;
  lat: number;
  lng: number;
  category: 'attraction' | 'food' | 'hotel' | 'nature';
  spot?: 'insta' | 'hidden';
  rating: number;
  reviews: number;
}

export interface PlanItem {
  placeId: string;
  slot: Slot;
}

export interface PlanOptions {
  pace: Pace;
  interests: Interest[];
  perDay?: Partial<Record<Pace, number>>;
}

const score = (p: PlanPlace) => p.rating * Math.log10(p.reviews + 10);

/** Interest weighting: with no preference everything counts equally; a chosen interest lifts its places, the rest are damped. */
function weight(p: PlanPlace, interests: Interest[]) {
  if (!interests.length) return 1;
  if (p.category === 'nature') return interests.includes('nature') ? 1.5 : 0.7;
  if (p.category === 'attraction') return interests.includes('sights') ? 1.4 : 0.7;
  return 1;
}

/** Split places into `k` geographic groups of at most `cap`: farthest-point seeds, then nearest seed with room. */
function cluster<T extends { lat: number; lng: number }>(items: T[], k: number, cap: number): T[][] {
  if (k <= 1 || items.length <= 1) return [items];
  const seeds: T[] = [items[0]!];
  while (seeds.length < Math.min(k, items.length)) {
    let far = items[0]!;
    let farD = -1;
    for (const p of items) {
      const d = Math.min(...seeds.map((s) => distanceKm(p, s)));
      if (d > farD) (far = p), (farD = d);
    }
    seeds.push(far);
  }
  const groups: T[][] = seeds.map(() => []);
  const pairs = items.flatMap((p) => seeds.map((s, i) => ({ p, i, d: distanceKm(p, s) }))).sort((a, b) => a.d - b.d);
  const placed = new Set<T>();
  for (const { p, i } of pairs) {
    if (placed.has(p) || groups[i]!.length >= cap) continue;
    groups[i]!.push(p);
    placed.add(p);
  }
  return groups;
}

const centre = (ps: { lat: number; lng: number }[]) => ({ lat: ps.reduce((s, p) => s + p.lat, 0) / ps.length, lng: ps.reduce((s, p) => s + p.lng, 0) / ps.length });

/**
 * A day-by-day itinerary for one city. Each day is a compact geographic cluster of the best places for the
 * traveller's interests, visited in a walkable order, with lunch (and dinner on busier days) near the day's
 * centre and a photo spot kept for the evening, when the light is best.
 */
export function planDays(pool: PlanPlace[], days: number, opts: PlanOptions): PlanItem[][] {
  const perDay = { ...DEFAULT_PER_DAY, ...opts.perDay }[opts.pace];
  const wantsFood = !opts.interests.length || opts.interests.includes('food');
  const wantsPhoto = !opts.interests.length || opts.interests.includes('photo');
  const meals = wantsFood ? (opts.pace === 'relaxed' ? 1 : 2) : 0;

  const usable = pool.filter((p) => p.category !== 'hotel');
  const food = usable.filter((p) => p.category === 'food').sort((a, b) => score(b) - score(a));
  const photo = usable.filter((p) => p.spot === 'insta' && p.category !== 'food').sort((a, b) => score(b) - score(a));
  const sights = usable.filter((p) => p.category !== 'food' && !photo.includes(p));

  const photoSlots = wantsPhoto ? Math.min(photo.length, days) : 0;
  const perDaySights = Math.max(1, perDay - meals - (photoSlots ? 1 : 0));
  const chosen = [...sights].sort((a, b) => score(b) * weight(b, opts.interests) - score(a) * weight(a, opts.interests)).slice(0, days * perDaySights);
  // Sights beyond the photo spots are scarce in small towns: top up with the remaining photo spots instead of leaving days empty.
  for (const p of photo.slice(photoSlots)) if (chosen.length < days * perDaySights) chosen.push(p);

  const groups = cluster(chosen, days, perDaySights);
  const usedFood = new Set<string>();
  const usedPhoto = new Set<string>();
  const plan: PlanItem[][] = [];

  for (const group of groups) {
    const ordered = group.length > 2 ? optimizeOrder(group) : group;
    const home = ordered.length ? centre(ordered) : undefined;
    const items: PlanItem[] = [];
    const half = Math.ceil(ordered.length / 2);
    ordered.forEach((p, i) => {
      if (i === half && meals) {
        const lunch = nearest(food, usedFood, home);
        if (lunch) items.push({ placeId: lunch.id, slot: 'lunch' });
      }
      items.push({ placeId: p.id, slot: i < half ? 'morning' : 'afternoon' });
    });
    if (items.length && !items.some((x) => x.slot === 'lunch') && meals) {
      const lunch = nearest(food, usedFood, home);
      if (lunch) items.splice(Math.min(items.length, Math.max(1, half)), 0, { placeId: lunch.id, slot: 'lunch' });
    }
    if (photoSlots) {
      const spot = nearest(photo, usedPhoto, home);
      if (spot) items.push({ placeId: spot.id, slot: 'sunset' });
    }
    if (meals > 1) {
      const dinner = nearest(food, usedFood, home);
      if (dinner) items.push({ placeId: dinner.id, slot: 'dinner' });
    }
    plan.push(items);
  }
  while (plan.length < days) plan.push([]);
  return plan;
}

function nearest<T extends PlanPlace>(list: T[], used: Set<string>, from?: { lat: number; lng: number }): T | undefined {
  const free = list.filter((p) => !used.has(p.id));
  if (!free.length) return undefined;
  // Distance decides; rating only breaks near-ties (about 700 m per 14 points of score).
  const rank = (p: T) => (from ? distanceKm(from, p) : 0) - score(p) * 0.05;
  const pick = [...free].sort((a, b) => rank(a) - rank(b))[0]!;
  used.add(pick.id);
  return pick;
}
