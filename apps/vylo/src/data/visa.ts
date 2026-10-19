import type { Price, VisaInfo, VisaRegime } from './types';

/**
 * Entry rules for holders of an ordinary Russian passport travelling as tourists.
 * Reference data only: rules change, and the UI always tells travellers to confirm with the consulate.
 * All wording comes from the UI dictionaries (regime titles, document and note keys).
 */
const free: Price = { kind: 'free' };
const fee = (amount: number, currency: string): Price => ({ kind: 'fixed', amount, currency });
const fromFee = (amount: number, currency: string): Price => ({ kind: 'from', amount, currency });

const schengen = (code: string, extra: VisaInfo['notes'] = []): VisaInfo => ({
  code,
  regime: 'schengen',
  days: 90,
  cost: fee(90, 'EUR'),
  plusFee: true,
  validity: 'threeMonthsSchengen',
  docs: ['form', 'photo', 'insurance30k', 'booking', 'returnTicket', 'finance'],
  notes: ['schengenTime', ...extra],
});

const rows: VisaInfo[] = [
  { code: 'TH', regime: 'free', days: 60, cost: free, validity: 'sixMonths', docs: ['returnTicket', 'booking', 'tdac'], notes: ['thRules', 'thExtend'] },
  { code: 'ID', regime: 'voa', days: 30, cost: fee(500000, 'IDR'), validity: 'sixMonths', docs: ['returnTicket', 'evoa', 'touristLevy'], notes: ['idEcd'] },
  { code: 'VN', regime: 'free', days: 45, cost: free, validity: 'sixMonths', docs: ['returnTicket'], notes: ['vnEvisa'] },
  { code: 'JP', regime: 'required', days: 90, cost: free, validity: 'stay', docs: ['form', 'photo', 'itinerary', 'employment', 'booking'], notes: ['jpCards'] },
  schengen('PT'),
  schengen('GR'),
  schengen('FR'),
  schengen('IT'),
  schengen('ES'),
  schengen('CH'),
  schengen('CZ'),
  schengen('IS', ['isConsulate']),
  { code: 'TR', regime: 'free', days: 60, cost: free, validity: 'p120', docs: ['returnTicket'], notes: ['tr180'] },
  { code: 'GE', regime: 'free', days: 365, cost: free, validity: 'stay', docs: ['passport'], notes: [] },
  { code: 'AM', regime: 'free', days: 180, cost: free, validity: 'stay', docs: ['internalPassport'], notes: ['amInternal'] },
  { code: 'AE', regime: 'free', days: 90, cost: free, validity: 'sixMonths', docs: ['returnTicket'], notes: ['ae180'] },
  { code: 'MV', regime: 'voa', days: 30, cost: free, validity: 'sixMonths', docs: ['booking', 'returnTicket', 'imuga'], notes: [] },
  { code: 'LK', regime: 'eta', days: 30, cost: free, validity: 'sixMonths', docs: ['eta', 'returnTicket'], notes: ['lkScam'] },
  { code: 'PE', regime: 'free', days: 90, cost: free, validity: 'sixMonths', docs: ['returnTicket'], notes: [] },
  { code: 'US', regime: 'required', days: 0, cost: fee(185, 'USD'), validity: 'sixMonths', docs: ['ds160', 'homeTies'], notes: ['usInterview'] },
  { code: 'EG', regime: 'voa', days: 30, cost: fee(25, 'USD'), validity: 'sixMonths', docs: ['returnTicket'], notes: ['egSinai'] },
  { code: 'CN', regime: 'free', days: 30, cost: free, pilot: true, validity: 'sixMonths', docs: ['returnTicket', 'booking'], notes: ['cnPilot'] },
  { code: 'KR', regime: 'free', days: 60, cost: free, validity: 'sixMonths', docs: ['returnTicket'], notes: ['kr180'] },
  { code: 'MY', regime: 'free', days: 30, cost: free, validity: 'sixMonths', docs: ['mdac', 'returnTicket'], notes: [] },
  { code: 'PH', regime: 'free', days: 30, cost: free, validity: 'sixMonths', docs: ['etravel', 'returnTicket'], notes: [] },
  { code: 'IN', regime: 'evisa', days: 30, cost: fromFee(10, 'USD'), validity: 'sixMonths', docs: ['evisa', 'photo'], notes: [] },
  { code: 'KH', regime: 'evisa', days: 30, cost: fee(36, 'USD'), validity: 'sixMonths', docs: ['evisa', 'photo', 'returnTicket'], notes: [] },
  { code: 'LA', regime: 'free', days: 30, cost: free, validity: 'sixMonths', docs: ['returnTicket'], notes: [] },
  { code: 'RS', regime: 'free', days: 30, cost: free, validity: 'stay', docs: ['passport'], notes: [] },
  { code: 'ME', regime: 'free', days: 30, cost: free, validity: 'stay', docs: ['passport'], notes: [] },
  { code: 'MA', regime: 'free', days: 90, cost: free, validity: 'sixMonths', docs: ['returnTicket'], notes: [] },
  { code: 'TN', regime: 'free', days: 90, cost: free, validity: 'sixMonths', docs: ['returnTicket'], notes: [] },
  { code: 'IL', regime: 'free', days: 90, cost: free, validity: 'sixMonths', docs: ['returnTicket', 'insurance'], notes: ['ilQuestions'] },
  { code: 'BR', regime: 'free', days: 90, cost: free, validity: 'sixMonths', docs: ['returnTicket'], notes: [] },
  { code: 'AR', regime: 'free', days: 90, cost: free, validity: 'sixMonths', docs: ['returnTicket'], notes: [] },
  { code: 'CU', regime: 'free', days: 90, cost: free, validity: 'sixMonths', docs: ['insurance', 'dviajeros'], notes: [] },
  { code: 'KZ', regime: 'free', days: 90, cost: free, validity: 'stay', docs: ['internalPassport'], notes: ['kzInternal'] },
  { code: 'UZ', regime: 'free', days: 60, cost: free, validity: 'stay', docs: ['passport'], notes: ['uzRegistration'] },
  { code: 'GB', regime: 'required', days: 0, cost: fromFee(127, 'GBP'), validity: 'stay', docs: ['form', 'finance'], notes: ['gbBiometrics'] },
  { code: 'ZA', regime: 'free', days: 90, cost: free, validity: 'stay', docs: ['returnTicket'], notes: [] },
  { code: 'JO', regime: 'voa', days: 30, cost: fee(40, 'JOD'), validity: 'sixMonths', docs: ['returnTicket'], notes: ['joPass'] },
  { code: 'SG', regime: 'required', days: 30, cost: fromFee(30, 'SGD'), validity: 'sixMonths', docs: ['form', 'photo', 'returnTicket', 'booking'], notes: ['sgTransit'] },
  { code: 'RU', regime: 'domestic', days: 0, cost: free, validity: 'none', docs: ['internalPassport'], notes: ['domestic'] },
];

export const baseVisa = rows;

export const regimeTone: Record<VisaRegime, 'mint' | 'sky' | 'amber' | 'rose'> = {
  free: 'mint',
  domestic: 'mint',
  voa: 'sky',
  eta: 'sky',
  evisa: 'amber',
  required: 'rose',
  schengen: 'rose',
};

/** Regimes that let a traveller simply fly in. */
export const isEasyRegime = (r: VisaRegime) => r === 'free' || r === 'voa' || r === 'domestic';
