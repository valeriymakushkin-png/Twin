import type { Place } from '@/data/types';

/**
 * One visual language for everything on the map: every kind of thing has its own colour and glyph, used by the photo pins,
 * the GPU dots, the filter chips, the bottom cards and the legend — so a pin can be told apart from across the screen.
 * Hues are spread around the colour wheel; the glyph is a second cue for people who cannot rely on colour.
 */
export type PinKind = 'city' | 'sight' | 'insta' | 'hidden' | 'food' | 'nature' | 'hotel' | 'meetup';

export interface KindStyle {
  /** Main colour: ring, dot, accents */
  color: string;
  /** Darker shade for text on a light tint */
  dark: string;
  /** Ring / badge fill */
  gradient: string;
  /** Inner markup of a 24×24 stroke icon (lucide), for imperatively built DOM markers */
  svg: string;
}

export const KIND: Record<PinKind, KindStyle> = {
  city: { color: '#334155', dark: '#0f172a', gradient: 'linear-gradient(135deg,#475569,#0f172a)', svg: "<path d=\"M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0\"/><circle cx=\"12\" cy=\"8\" r=\"2\"/><path d=\"M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712\"/>" },
  sight: { color: '#6366f1', dark: '#4338ca', gradient: 'linear-gradient(135deg,#818cf8,#4f46e5)', svg: "<path d=\"M10 18v-7\"/><path d=\"M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z\"/><path d=\"M14 18v-7\"/><path d=\"M18 18v-7\"/><path d=\"M3 22h18\"/><path d=\"M6 18v-7\"/>" },
  insta: { color: '#db2777', dark: '#9d174d', gradient: 'linear-gradient(135deg,#fb7185,#db2777 60%,#c026d3)', svg: "<path d=\"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z\"/><circle cx=\"12\" cy=\"13\" r=\"3\"/>" },
  hidden: { color: '#0d9488', dark: '#115e59', gradient: 'linear-gradient(135deg,#2dd4bf,#0f766e)', svg: "<path d=\"M10.5 3 8 9l4 13 4-13-2.5-6\"/><path d=\"M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z\"/><path d=\"M2 9h20\"/>" },
  food: { color: '#f59e0b', dark: '#92400e', gradient: 'linear-gradient(135deg,#fbbf24,#ea580c)', svg: "<path d=\"m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8\"/><path d=\"M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7\"/><path d=\"m2.1 21.8 6.4-6.3\"/><path d=\"m19 5-7 7\"/>" },
  nature: { color: '#16a34a', dark: '#166534', gradient: 'linear-gradient(135deg,#4ade80,#15803d)', svg: "<path d=\"m8 3 4 8 5-5 5 15H2L8 3z\"/>" },
  hotel: { color: '#0ea5e9', dark: '#075985', gradient: 'linear-gradient(135deg,#38bdf8,#0369a1)', svg: "<path d=\"M10 22v-6.57\"/><path d=\"M12 11h.01\"/><path d=\"M12 7h.01\"/><path d=\"M14 15.43V22\"/><path d=\"M15 16a5 5 0 0 0-6 0\"/><path d=\"M16 11h.01\"/><path d=\"M16 7h.01\"/><path d=\"M8 11h.01\"/><path d=\"M8 7h.01\"/><rect x=\"4\" y=\"2\" width=\"16\" height=\"20\" rx=\"2\"/>" },
  meetup: { color: '#a21caf', dark: '#701a75', gradient: 'linear-gradient(135deg,#e879f9,#a21caf)', svg: "<path d=\"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2\"/><path d=\"M16 3.128a4 4 0 0 1 0 7.744\"/><path d=\"M22 21v-2a4 4 0 0 0-3-3.87\"/><circle cx=\"9\" cy=\"7\" r=\"4\"/>" },
};

/** Order used in the filter bar and the legend. */
export const KIND_ORDER: PinKind[] = ['city', 'sight', 'insta', 'hidden', 'food', 'nature', 'hotel', 'meetup'];

/** Which filter chip each kind belongs to (the chips predate the kinds and keep their names). */
export const KIND_FILTER: Record<PinKind, string> = { city: 'cities', sight: 'sights', insta: 'insta', hidden: 'hidden', food: 'food', nature: 'nature', hotel: 'hotels', meetup: 'meetups' };

export function placeKind(p: Pick<Place, 'category' | 'spot'>): PinKind {
  if (p.spot) return p.spot;
  return p.category === 'attraction' ? 'sight' : p.category;
}

/** Soft tint of a kind's colour for card backgrounds and pills. */
export const tint = (color: string, percent = 12) => `color-mix(in srgb, ${color} ${percent}%, #ffffff)`;
