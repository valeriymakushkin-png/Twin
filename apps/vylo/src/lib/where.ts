import { destinations, overrides } from '@/data/catalog';
import type { Destination, TagKey } from '@/data/types';
import { RANK, type VisaResult } from '@/data/visa/rules';

export type VisaLevel = 'free' | 'easy' | 'any';

export interface WhereQuery {
  /** 1–12, or 0 for any month */
  month: number;
  /** USD per day, or 0 for any */
  budget: number;
  tags: TagKey[];
  visa: VisaLevel;
}

export interface WhereHit {
  d: Destination;
  visa: VisaResult;
  /** In the best-months list, or a month either side of it */
  season: 'best' | 'shoulder' | 'any';
  /** Costs more than the budget, but within a quarter of it */
  stretch: boolean;
  matched: TagKey[];
  score: number;
}

/** Highest visa rank still accepted for each level: visa-free, then on-arrival / online, then anything. */
const MAX_RANK: Record<VisaLevel, number> = { free: RANK.free, easy: RANK.evisa, any: RANK.required };

/**
 * Destinations that suit a traveller with this passport in this month on this budget. Visa status comes
 * from the passport matrix (with held visas applied), seasons and budgets from the catalogue, so edits in
 * the admin panel change the ranking directly. A destination the passport cannot enter is never offered.
 */
export function suggest(q: WhereQuery, visaOf: (country: string) => VisaResult | undefined): WhereHit[] {
  const featured = new Set(overrides().settings.featured ?? []);
  const hits: WhereHit[] = [];
  for (const d of destinations) {
    const visa = visaOf(d.countryCode);
    if (!visa || visa.regime === 'banned' || RANK[visa.regime] > MAX_RANK[q.visa]) continue;

    let season: WhereHit['season'] = 'any';
    if (q.month) {
      const prev = q.month === 1 ? 12 : q.month - 1;
      const next = q.month === 12 ? 1 : q.month + 1;
      if (d.months.includes(q.month)) season = 'best';
      else if (d.months.includes(prev) && d.months.includes(next)) continue;
      else if (d.months.includes(prev) || d.months.includes(next)) season = 'shoulder';
      else continue;
    }

    let stretch = false;
    if (q.budget) {
      if (d.budgetPerDay > q.budget * 1.25) continue;
      stretch = d.budgetPerDay > q.budget;
    }

    const matched = q.tags.filter((t) => d.tags.includes(t));
    if (q.tags.length && !matched.length) continue;

    const score =
      (season === 'best' ? 3 : season === 'shoulder' ? 1 : 0) +
      matched.length * 2 +
      (stretch ? -1 : 0) +
      (RANK[visa.regime] <= RANK.free ? 1.5 : RANK[visa.regime] <= RANK.evisa ? 0.5 : 0) +
      d.rating / 5 +
      (featured.has(d.id) ? 1 : 0);
    hits.push({ d, visa, season, stretch, matched, score });
  }
  return hits.sort((a, b) => b.score - a.score || b.d.reviews - a.d.reviews);
}
