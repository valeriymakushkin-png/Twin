import countries from 'i18n-iso-countries';
import ru from 'i18n-iso-countries/langs/ru.json';

countries.registerLocale(ru);

// Everyday names where the dataset only has the formal one.
const shortNames: Record<string, string> = {
  CN: 'Китай',
  KR: 'Южная Корея',
  KP: 'КНДР',
  RU: 'Россия',
  TW: 'Тайвань',
  CD: 'ДР Конго',
};

/** Russian country name for an ISO alpha-2 code. */
export function countryName(code: string): string {
  return shortNames[code] ?? countries.getName(code, 'ru', { select: 'alias' }) ?? code;
}

/** world-atlas features carry ISO 3166-1 numeric ids. */
export function numericToAlpha2(id: string | number | undefined): string | undefined {
  if (id === undefined) return undefined;
  return countries.numericToAlpha2(String(id).padStart(3, '0'));
}

export function flag(code: string): string {
  return code
    .toUpperCase()
    .replace(/./g, (c) => String.fromCodePoint(127397 + c.charCodeAt(0)));
}

/** UN member states — the denominator for "world explored". */
export const WORLD_COUNTRIES = 195;

/** Every ISO country with its Russian name, sorted alphabetically. */
export function allCountries(): { code: string; name: string }[] {
  return Object.keys(countries.getAlpha2Codes())
    .map((code) => ({ code, name: countryName(code) }))
    .sort((a, b) => a.name.localeCompare(b.name, 'ru'));
}
