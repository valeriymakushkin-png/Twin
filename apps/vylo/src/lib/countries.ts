import countries from 'i18n-iso-countries';
import { LOCALE_META, type Locale } from '@/i18n/config';

// Everyday short forms where CLDR uses the formal name.
const overrides: Partial<Record<Locale, Record<string, string>>> = {
  ru: { KR: 'Южная Корея', US: 'США', GB: 'Великобритания', CD: 'ДР Конго', AE: 'ОАЭ' },
  en: { CD: 'DR Congo', CG: 'Republic of the Congo' },
};

const displayCache = new Map<Locale, Intl.DisplayNames>();

/** Country name in the UI language (CLDR via Intl.DisplayNames). */
export function countryName(code: string, locale: Locale): string {
  const o = overrides[locale]?.[code];
  if (o) return o;
  let dn = displayCache.get(locale);
  if (!dn) displayCache.set(locale, (dn = new Intl.DisplayNames(LOCALE_META[locale].bcp47, { type: 'region' })));
  try {
    return dn.of(code) ?? code;
  } catch {
    return code;
  }
}

/** world-atlas features carry ISO 3166-1 numeric ids. */
export function numericToAlpha2(id: string | number | undefined): string | undefined {
  if (id === undefined) return undefined;
  return countries.numericToAlpha2(String(id).padStart(3, '0'));
}

export function flag(code: string): string {
  return code.toUpperCase().replace(/./g, (c) => String.fromCodePoint(127397 + c.charCodeAt(0)));
}

/** UN member states — the denominator for "world explored". */
export const WORLD_COUNTRIES = 195;

/** Every ISO country with its localized name, sorted for that language. */
export function allCountries(locale: Locale): { code: string; name: string }[] {
  const tag = LOCALE_META[locale].bcp47;
  return Object.keys(countries.getAlpha2Codes())
    .map((code) => ({ code, name: countryName(code, locale) }))
    .sort((a, b) => a.name.localeCompare(b.name, tag));
}

/** Rough continent for a country — enough for the travel recap. */
export function continentOf(code: string): 'AF' | 'AS' | 'EU' | 'NA' | 'SA' | 'OC' | 'AN' {
  const groups: Record<string, string> = {
    EU: 'AD AL AT BA BE BG BY CH CY CZ DE DK EE ES FI FO FR GB GI GR HR HU IE IM IS IT LI LT LU LV MC MD ME MK MT NL NO PL PT RO RS RU SE SI SK SM UA VA XK GE AM AZ',
    AS: 'AE AF BD BH BN BT CN HK ID IL IN IQ IR JO JP KG KH KP KR KW KZ LA LB LK MM MN MO MV MY NP OM PH PK PS QA SA SG SY TH TJ TL TM TR TW UZ VN YE',
    AF: 'AO BF BI BJ BW CD CF CG CI CM CV DJ DZ EG EH ER ET GA GH GM GN GQ GW KE KM LR LS LY MA MG ML MR MU MW MZ NA NE NG RE RW SC SD SL SN SO SS ST SZ TD TG TN TZ UG YT ZA ZM ZW',
    NA: 'AG AI AW BB BL BM BS BZ CA CR CU CW DM DO GD GL GP GT HN HT JM KN KY LC MF MQ MS MX NI PA PM PR SV SX TC TT US VC VG VI',
    SA: 'AR BO BR CL CO EC FK GF GY PE PY SR UY VE',
    OC: 'AS AU CK FJ FM GU KI MH MP NC NF NR NU NZ PF PG PN PW SB TK TO TV VU WF WS',
  };
  for (const [k, v] of Object.entries(groups)) if (v.split(' ').includes(code)) return k as 'EU';
  return 'AN';
}
