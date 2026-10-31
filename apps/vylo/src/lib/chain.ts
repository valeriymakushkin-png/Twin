import { addDays } from './utils';

export const addMonths = (iso: string, n: number) => {
  const d = new Date(`${iso}T00:00:00`);
  const day = d.getDate();
  d.setMonth(d.getMonth() + n);
  // 31 Aug + 6 months must not roll into March.
  if (d.getDate() !== day) d.setDate(0);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};

export type ValidityRule = 'sixMonths' | 'threeMonths' | 'threeMonthsSchengen' | 'stay' | 'p120' | 'none';

/**
 * Last date the passport must still be valid for a leg: 6 months or 120 days from entry, 3 months beyond departure
 * (Schengen and most others), or just for the stay. `none` (a domestic ID) needs no check.
 */
export function validUntil(rule: ValidityRule, arrival: string, departure: string): string | undefined {
  switch (rule) {
    case 'sixMonths':
      return addMonths(arrival, 6);
    case 'p120':
      return addDays(arrival, 120);
    case 'threeMonths':
    case 'threeMonthsSchengen':
      return addMonths(departure, 3);
    case 'stay':
      return departure;
    default:
      return undefined;
  }
}

export interface Leg {
  country: string;
  nights: number;
}

/** Arrival and departure date of every leg; the next leg starts the day the previous one ends. */
export function schedule(start: string, legs: Leg[]) {
  let cursor = start;
  return legs.map((leg) => {
    const arrival = cursor;
    const departure = addDays(arrival, leg.nights);
    cursor = departure;
    return { arrival, departure };
  });
}
