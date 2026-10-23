import { passportRules, visaByCode } from '../catalog';
import type { PassportValidity, Price, VisaDoc, VisaNote, VisaRegime } from '../types';
import { visaGuides } from './guides.generated';
import { CODES, DAYS, MATRIX_DATE, ROWS } from './matrix';
import type { Holding, MatrixCell, Status, VisaGuideFacts, Waiver } from './types';

/**
 * Entry rules for any passport at any destination. Layers, most specific first:
 *   1. per-passport corrections made in the admin panel;
 *   2. hand-curated rows for Russian passports (src/data/visa.ts, world packs, admin edits);
 *   3. corrections in the destination's visa guide (`overrides`);
 *   4. the Passport Index matrix (199 × 199).
 * Waivers for holders of other visas or residence permits are applied on top.
 */

export { MATRIX_DATE };
export type { Holding, Waiver };

const codes = CODES.match(/../g)!;
const index = new Map(codes.map((c, i) => [c, i]));
/** Every passport the app knows (ISO 3166-1 alpha-2) */
export const PASSPORTS: readonly string[] = codes;

const guides = new Map(visaGuides.map((g) => [g.code, g]));
export const guideFacts = (code: string): VisaGuideFacts | undefined => guides.get(code);

export const SCHENGEN = new Set('AT BE BG CH CZ DE DK EE ES FI FR GR HR HU IS IT LI LT LU LV MT NL NO PL PT RO SE SI SK'.split(' '));
/** EU, EEA and Switzerland — free movement between them */
export const FREE_MOVEMENT = new Set([...SCHENGEN, 'CY', 'IE']);

const STATUS: Record<string, Status> = { f: 'free', a: 'voa', t: 'eta', e: 'evisa', r: 'required', x: 'banned' };

/** Raw matrix cell with the guide's corrections applied. */
export function cell(passport: string, dest: string): MatrixCell | undefined {
  const g = guides.get(dest);
  const fix = passportRules(dest)?.[passport] ?? g?.overrides?.[passport];
  if (fix) return fix;
  const row = index.get(passport);
  const col = index.get(g?.base ?? dest);
  if (row === undefined || col === undefined) return undefined;
  const c = ROWS[row][col];
  if (DAYS[c]) return { status: 'free', days: DAYS[c] };
  const status = STATUS[c];
  return status ? { status } : undefined;
}

/** Lower is easier. */
export const RANK: Record<VisaRegime, number> = { domestic: 0, eu: 0, free: 1, voa: 2, eta: 3, evisa: 4, required: 5, schengen: 5, banned: 6 };

export interface WaiverRef {
  index: number;
  waiver: Waiver;
}

export interface VisaResult {
  code: string;
  passport: string;
  regime: VisaRegime;
  /** Stay in days; 0 = depends on the visa / not limited */
  days: number;
  cost?: Price;
  plusFee?: boolean;
  pilot?: boolean;
  validity: PassportValidity;
  docs: VisaDoc[];
  notes: VisaNote[];
  /** From the hand-curated Russian dataset */
  curated: boolean;
  /** Regime before any waiver */
  baseRegime: VisaRegime;
  /** Applied because the traveller holds a qualifying visa or residence permit */
  waiver?: WaiverRef;
  /** Waivers the traveller could use with a visa or permit they have not marked as held */
  offers: WaiverRef[];
}

const docsFor = (regime: VisaRegime, g?: VisaGuideFacts): VisaDoc[] => {
  const base: Record<VisaRegime, VisaDoc[]> = {
    domestic: [],
    eu: ['idCard'],
    free: [],
    voa: [],
    eta: ['eta'],
    evisa: ['evisa', 'photo'],
    required: ['form', 'photo', 'finance', 'booking'],
    schengen: ['form', 'photo', 'insurance30k', 'booking', 'returnTicket', 'finance'],
    banned: [],
  };
  const extra = regime === 'eu' || regime === 'domestic' || regime === 'banned' ? [] : (g?.docs ?? []);
  return [...new Set([...base[regime], ...extra])] as VisaDoc[];
};

const validityFor = (regime: VisaRegime, dest: string, g?: VisaGuideFacts): PassportValidity => {
  if (regime === 'eu' || regime === 'domestic') return 'stay';
  if (regime === 'schengen' || (SCHENGEN.has(dest) && g?.passportMonths !== 6)) return 'threeMonthsSchengen';
  if (g?.passportMonths === 0) return 'stay';
  if (g?.passportMonths === 3) return 'threeMonths';
  return 'sixMonths';
};

const feeKey = { voa: 'voa', eta: 'eta', evisa: 'evisa', required: 'visa', schengen: 'visa' } as const;

function costFor(regime: VisaRegime, g?: VisaGuideFacts): Price | undefined {
  if (regime === 'free' || regime === 'eu' || regime === 'domestic') return { kind: 'free' };
  if (regime === 'banned') return undefined;
  const fee = g?.fees?.[feeKey[regime]];
  if (fee) return fee;
  return regime === 'schengen' ? { kind: 'fixed', amount: 90, currency: 'EUR' } : undefined;
}

function stayFor(regime: VisaRegime, g?: VisaGuideFacts): number {
  if (regime === 'schengen') return g?.stay?.visa ?? 90;
  if (regime === 'voa' || regime === 'eta' || regime === 'evisa') return g?.stay?.[regime] ?? 0;
  if (regime === 'required') return g?.stay?.visa ?? 0;
  return 0;
}

function fromMatrix(passport: string, dest: string): Omit<VisaResult, 'baseRegime' | 'offers'> | undefined {
  const g = guides.get(dest);
  if (passport === dest)
    return { code: dest, passport, regime: 'domestic', days: 0, cost: { kind: 'free' }, validity: 'stay', docs: [], notes: [], curated: false };
  const c = cell(passport, dest);
  if (!c) return undefined;
  let regime: VisaRegime = c.status;
  if (regime === 'free' && FREE_MOVEMENT.has(passport) && FREE_MOVEMENT.has(dest)) regime = 'eu';
  if (regime === 'required' && SCHENGEN.has(dest)) regime = 'schengen';
  const days = regime === 'free' ? (c.days ?? g?.rule?.days ?? 0) : regime === 'eu' ? 0 : (c.days ?? stayFor(regime, g));
  return {
    code: dest,
    passport,
    regime,
    days,
    cost: costFor(regime, g),
    plusFee: regime === 'schengen' || undefined,
    validity: validityFor(regime, dest, g),
    docs: docsFor(regime, g),
    notes: [],
    curated: false,
  };
}

/** How a holder of `passport` gets into `dest`, given the visas and permits they already hold. */
export function visaFor(passport: string, dest: string, holdings: readonly Holding[] = []): VisaResult | undefined {
  const curated = passport === 'RU' && !passportRules(dest)?.RU ? visaByCode(dest) : undefined;
  const base = curated ? { ...curated, passport, cost: curated.cost as Price | undefined, curated: true } : fromMatrix(passport, dest);
  if (!base) return undefined;
  const g = guides.get(dest);
  const offers: WaiverRef[] = [];
  let best: WaiverRef | undefined;
  (g?.waivers ?? []).forEach((waiver, i) => {
    const eligible = waiver.passports ? waiver.passports.includes(passport) : RANK[base.regime] >= RANK.eta && base.regime !== 'banned';
    if (!eligible || RANK[waiver.status] >= RANK[base.regime]) return;
    const ref = { index: i, waiver };
    if (waiver.holds.some((h) => holdings.includes(h))) {
      if (!best || RANK[waiver.status] < RANK[best.waiver.status]) best = ref;
    } else offers.push(ref);
  });
  if (!best) return { ...base, baseRegime: base.regime, offers };
  const regime = best.waiver.status;
  return {
    ...base,
    regime,
    days: best.waiver.days ?? stayFor(regime, g),
    cost: costFor(regime, g),
    plusFee: undefined,
    docs: [...docsFor(regime, g), 'heldVisa'],
    baseRegime: base.regime,
    waiver: best,
    offers: offers.filter((o) => RANK[o.waiver.status] < RANK[regime]),
  };
}

/** Easier of two passports for one destination (dual citizens). */
export function bestPassport(passports: readonly string[], dest: string, holdings: readonly Holding[] = []) {
  let best: VisaResult | undefined;
  for (const p of passports) {
    const v = visaFor(p, dest, holdings);
    if (v && (!best || RANK[v.regime] < RANK[best.regime] || (RANK[v.regime] === RANK[best.regime] && v.days > best.days))) best = v;
  }
  return best;
}
