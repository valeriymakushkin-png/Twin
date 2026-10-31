import { addDays, daysBetween } from './utils';

/**
 * Stay arithmetic. The day of entry counts as day 1 (the rule in Thailand, Vietnam, the Schengen area and most
 * others), so a 30-day stay entered on 1 May must end by 30 May. Travellers can override the allowance with what
 * their stamp or e-visa says.
 */
export interface StayStatus {
  /** Last day the traveller may be in the country */
  leaveBy: string;
  /** Days left today, counting today; negative once overstayed */
  left: number;
  /** Days already used, entry day included (0 before arrival) */
  used: number;
  state: 'upcoming' | 'ok' | 'soon' | 'urgent' | 'overstay';
}

/** Days left (today included) on which a reminder fires; 1 is the last day. A stay past its end always reminds. */
export const REMIND_AT = [14, 7, 3, 1];

export function stayStatus(entry: string, days: number, today: string): StayStatus {
  const leaveBy = addDays(entry, days - 1);
  const left = daysBetween(today, leaveBy) + 1;
  const used = Math.max(0, Math.min(days, daysBetween(entry, today) + 1));
  const state: StayStatus['state'] = today < entry ? 'upcoming' : left < 1 ? 'overstay' : left <= 3 ? 'urgent' : left <= 14 ? 'soon' : 'ok';
  return { leaveBy, left, used, state };
}
