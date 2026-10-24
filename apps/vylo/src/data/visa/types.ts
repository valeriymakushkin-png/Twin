import type { Price } from '../types';
import type { L } from '../world/types';

/**
 * Entry status for one passport at one destination, as stored in the passport matrix.
 *   free     — visa-free (days when known)
 *   voa      — visa on arrival
 *   eta      — electronic travel authorisation (ESTA, eTA, UK ETA, K-ETA…)
 *   evisa    — electronic visa applied for online before the trip
 *   required — consular visa
 *   banned   — no admission for tourists
 */
export type Status = 'free' | 'voa' | 'eta' | 'evisa' | 'required' | 'banned';

export interface MatrixCell {
  status: Status;
  days?: number;
}

/**
 * Visas and residence permits a traveller may already hold. Many countries waive or simplify
 * entry for holders of one of these — the most useful visa hack of all.
 */
export const HOLDINGS = [
  'visaUS',
  'visaGB',
  'visaSchengen',
  'visaCA',
  'visaJP',
  'visaAU',
  'visaNZ',
  'visaKR',
  'resUS',
  'resGB',
  'resEU',
  'resCA',
  'resAU',
  'resJP',
  'resGCC',
] as const;
export type Holding = (typeof HOLDINGS)[number];

/** Entry eased for holders of a visa or residence permit (index-aligned with `text.waivers`). */
export interface Waiver {
  /** Any one of these is enough */
  holds: Holding[];
  /** Only these passports; omitted = every passport that otherwise needs a visa, e-visa or ETA */
  passports?: string[];
  /** What the holder gets instead */
  status: 'free' | 'voa' | 'eta' | 'evisa';
  days?: number;
}

/** A border crossing or short hop that works for a visa run. */
export interface Border {
  /** Crossing, airport or town, in Latin script as signposted (e.g. "Moc Bai – Bavet") */
  name: string;
  /** Country on the other side (ISO 3166-1 alpha-2) */
  to: string;
  lat: number;
  lng: number;
}

/** An online form, card or authorisation to file before the trip (names are not translated). */
export interface EntryForm {
  /** Official name, e.g. "TDAC", "MDAC", "Visit Japan Web", "ESTA" */
  name: string;
  /** Official https URL — never an agency */
  url?: string;
  fee?: Price;
}

export interface VisaGuideFacts {
  /** Destination, ISO 3166-1 alpha-2 */
  code: string;
  /** Month the rules were last checked, "YYYY-MM" */
  checked: string;
  /** Borrow this country's column of the passport matrix when the destination has none (e.g. PF → FR) */
  base?: string;
  /** Corrections to the passport matrix, keyed by passport ISO code */
  overrides?: Record<string, MatrixCell>;
  /** Typical fee and stay for each way in */
  fees?: Partial<Record<'voa' | 'eta' | 'evisa' | 'visa', Price>>;
  stay?: Partial<Record<'voa' | 'eta' | 'evisa' | 'visa', number>>;
  /** Official portals */
  links?: { evisa?: string; eta?: string; immigration?: string };
  /** Online forms everyone files before arrival (arrival cards, levies, customs) */
  forms?: EntryForm[];
  /** Extra documents commonly checked at the border */
  docs?: ('insurance' | 'returnTicket' | 'booking' | 'finance' | 'yellowFever')[];
  /** Passport must be valid this many months beyond arrival (0 = for the stay) */
  passportMonths?: number;
  /** Stay limit in a rolling window, e.g. Schengen 90 in 180 */
  rule?: { days: number; window: number };
  /** In-country extension */
  extend?: { days?: number; fee?: Price };
  /** Whether leaving and re-entering resets the clock */
  visaRun?: 'yes' | 'limited' | 'no';
  borders?: Border[];
  /** Visa-free airside/landside transit */
  transit?: { hours: number; passports?: string[] };
  /** Digital-nomad or remote-work visa */
  nomad?: { name: string; months: number; income?: Price };
  waivers?: Waiver[];
  /**
   * Who each `text.<lang>.hacks[i]` / `pitfalls[i]` is for (index-aligned; `null` = everyone). A scope is a list of
   * tokens: a passport ISO code ("IN"), a regime for this destination ("regime:free" | "regime:voa" | "regime:eta" |
   * "regime:evisa" | "regime:required" | "regime:banned") or a group ("@EU", "@SCHENGEN", "@EAEU", "@GCC", "@CIS",
   * "@ASEAN", "@MERCOSUR"). A line shows when the traveller's passport matches any token.
   */
  hackScope?: (string[] | null)[];
  pitfallScope?: (string[] | null)[];
}

export interface VisaGuideText {
  /** How tourists get in, in general (2–3 sentences) */
  summary: string;
  /** How to get the e-visa / ETA / visa on arrival / consular visa, practically */
  apply?: string;
  /** Required when facts.extend is set */
  extend?: string;
  /** Required when facts.visaRun is set */
  visaRun?: string;
  /** Required when facts.transit is set */
  transit?: string;
  /** Required when facts.nomad is set */
  nomad?: string;
  /** 3–6 practical hacks */
  hacks: string[];
  /** 2–4 common mistakes */
  pitfalls: string[];
  /** Conditions for each waiver, index-aligned with facts.waivers */
  waivers?: string[];
  /** Notes for particular passports, keyed by ISO code */
  passports?: Record<string, string>;
}

export interface VisaGuide extends VisaGuideFacts {
  text: L<VisaGuideText>;
}

export interface VisaTexts {
  [code: string]: VisaGuideText;
}
