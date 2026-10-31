/**
 * IANA time zone of a destination, so local times follow daylight saving. The catalogue only stores a
 * fixed "UTC+n" (standard time); that value is kept as the cross-check in scripts/check-tz.mts.
 * Countries with one zone map directly; larger ones pick the nearest of their zone anchors.
 */
type Anchor = [zone: string, lat: number, lng: number];

const SINGLE: Record<string, string> = {
  AE: 'Asia/Dubai', AL: 'Europe/Tirane', AM: 'Asia/Yerevan', AR: 'America/Argentina/Buenos_Aires', AT: 'Europe/Vienna', AZ: 'Asia/Baku',
  BA: 'Europe/Sarajevo', BE: 'Europe/Brussels', BG: 'Europe/Sofia', BN: 'Asia/Brunei', BT: 'Asia/Thimphu', CH: 'Europe/Zurich',
  CN: 'Asia/Shanghai', CO: 'America/Bogota', CR: 'America/Costa_Rica', CU: 'America/Havana', CY: 'Asia/Nicosia', CZ: 'Europe/Prague',
  DE: 'Europe/Berlin', DK: 'Europe/Copenhagen', DO: 'America/Santo_Domingo', EE: 'Europe/Tallinn', EG: 'Africa/Cairo', FI: 'Europe/Helsinki',
  FJ: 'Pacific/Fiji', FR: 'Europe/Paris', GB: 'Europe/London', GE: 'Asia/Tbilisi', GR: 'Europe/Athens', HK: 'Asia/Hong_Kong',
  HR: 'Europe/Zagreb', HU: 'Europe/Budapest', IE: 'Europe/Dublin', IL: 'Asia/Jerusalem', IN: 'Asia/Kolkata', IS: 'Atlantic/Reykjavik',
  IT: 'Europe/Rome', JO: 'Asia/Amman', JP: 'Asia/Tokyo', KE: 'Africa/Nairobi', KG: 'Asia/Bishkek', KH: 'Asia/Phnom_Penh',
  KR: 'Asia/Seoul', KZ: 'Asia/Almaty', LA: 'Asia/Vientiane', LK: 'Asia/Colombo', LT: 'Europe/Vilnius', LU: 'Europe/Luxembourg',
  LV: 'Europe/Riga', MA: 'Africa/Casablanca', ME: 'Europe/Podgorica', MG: 'Indian/Antananarivo', MK: 'Europe/Skopje', MM: 'Asia/Yangon',
  MN: 'Asia/Ulaanbaatar', MT: 'Europe/Malta', MU: 'Indian/Mauritius', MV: 'Indian/Maldives', MY: 'Asia/Kuala_Lumpur', NA: 'Africa/Windhoek',
  NL: 'Europe/Amsterdam', NO: 'Europe/Oslo', NP: 'Asia/Kathmandu', OM: 'Asia/Muscat', PE: 'America/Lima', PF: 'Pacific/Tahiti',
  PH: 'Asia/Manila', PL: 'Europe/Warsaw', QA: 'Asia/Qatar', RO: 'Europe/Bucharest', RS: 'Europe/Belgrade', SA: 'Asia/Riyadh',
  SC: 'Indian/Mahe', SE: 'Europe/Stockholm', SG: 'Asia/Singapore', SI: 'Europe/Ljubljana', SK: 'Europe/Bratislava', TH: 'Asia/Bangkok',
  TJ: 'Asia/Dushanbe', TN: 'Africa/Tunis', TR: 'Europe/Istanbul', TW: 'Asia/Taipei', TZ: 'Africa/Dar_es_Salaam', UZ: 'Asia/Tashkent',
  VN: 'Asia/Ho_Chi_Minh', ZA: 'Africa/Johannesburg',
};

const MULTI: Record<string, Anchor[]> = {
  RU: [
    ['Europe/Kaliningrad', 54.71, 20.51], ['Europe/Moscow', 55.75, 37.62], ['Europe/Moscow', 55.79, 49.12], ['Europe/Moscow', 43.59, 39.73], ['Europe/Moscow', 42.98, 47.5], ['Europe/Samara', 53.2, 50.1], ['Asia/Yekaterinburg', 56.84, 60.6],
    ['Asia/Omsk', 54.99, 73.37], ['Asia/Novosibirsk', 55.03, 82.92], ['Asia/Krasnoyarsk', 56.01, 92.85], ['Asia/Irkutsk', 52.29, 104.28],
    ['Asia/Yakutsk', 62.03, 129.73], ['Asia/Vladivostok', 43.12, 131.89], ['Asia/Magadan', 59.56, 150.8], ['Asia/Kamchatka', 53.02, 158.65],
  ],
  US: [
    ['America/New_York', 40.71, -74.0], ['America/Chicago', 41.88, -87.63], ['America/Denver', 39.74, -104.99], ['America/Phoenix', 33.45, -112.07],
    ['America/Los_Angeles', 34.05, -118.24], ['America/Anchorage', 61.22, -149.9], ['Pacific/Honolulu', 21.31, -157.86],
  ],
  CA: [
    ['America/St_Johns', 47.56, -52.71], ['America/Halifax', 44.65, -63.58], ['America/Toronto', 43.65, -79.38], ['America/Winnipeg', 49.9, -97.14],
    ['America/Edmonton', 53.55, -113.49], ['America/Vancouver', 49.28, -123.12],
  ],
  AU: [
    ['Australia/Perth', -31.95, 115.86], ['Australia/Darwin', -12.46, 130.84], ['Australia/Adelaide', -34.93, 138.6], ['Australia/Brisbane', -27.47, 153.03],
    ['Australia/Sydney', -33.87, 151.21], ['Australia/Melbourne', -37.81, 144.96], ['Australia/Hobart', -42.88, 147.33],
  ],
  NZ: [['Pacific/Auckland', -36.85, 174.76]],
  BR: [['America/Sao_Paulo', -23.55, -46.63], ['America/Sao_Paulo', -12.97, -38.5], ['America/Sao_Paulo', -3.73, -38.52], ['America/Manaus', -3.12, -60.02], ['America/Rio_Branco', -9.97, -67.81]],
  MX: [['America/Mexico_City', 19.43, -99.13], ['America/Cancun', 21.16, -86.85], ['America/Tijuana', 32.51, -117.04], ['America/Hermosillo', 29.07, -110.96]],
  ID: [['Asia/Jakarta', -6.21, 106.85], ['Asia/Makassar', -5.15, 119.43], ['Asia/Jayapura', -2.53, 140.72]],
  CL: [['America/Santiago', -33.45, -70.67], ['Pacific/Easter', -27.11, -109.35], ['America/Punta_Arenas', -53.16, -70.91]],
  EC: [['America/Guayaquil', -2.17, -79.92], ['Pacific/Galapagos', -0.74, -90.31]],
  ES: [['Europe/Madrid', 40.42, -3.7], ['Atlantic/Canary', 28.29, -16.63]],
  PT: [['Europe/Lisbon', 38.72, -9.14], ['Atlantic/Azores', 37.74, -25.67], ['Atlantic/Madeira', 32.65, -16.91]],
};

const km = (a: { lat: number; lng: number }, b: { lat: number; lng: number }) => {
  const r = Math.PI / 180;
  const h = Math.sin(((b.lat - a.lat) * r) / 2) ** 2 + Math.cos(a.lat * r) * Math.cos(b.lat * r) * Math.sin(((b.lng - a.lng) * r) / 2) ** 2;
  return 12742 * Math.asin(Math.sqrt(h));
};

export function zoneFor(country: string, lat: number, lng: number): string | undefined {
  const anchors = MULTI[country];
  if (anchors) return anchors.reduce((best, a) => (km({ lat, lng }, { lat: a[1], lng: a[2] }) < km({ lat, lng }, { lat: best[1], lng: best[2] }) ? a : best))[0];
  return SINGLE[country];
}

/** UTC offset in minutes of a zone at an instant (daylight saving included). */
export function offsetMinutes(zone: string, at: Date): number {
  const p = Object.fromEntries(
    new Intl.DateTimeFormat('en-US', { timeZone: zone, hourCycle: 'h23', year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' })
      .formatToParts(at)
      .map((x) => [x.type, Number(x.value)]),
  ) as Record<string, number>;
  return Math.round((Date.UTC(p.year!, p.month! - 1, p.day!, p.hour!, p.minute!, p.second!) - Math.floor(at.getTime() / 1000) * 1000) / 60000);
}

/** "UTC+5:30" → minutes; 0 if unparseable. Standard time only — used where no IANA zone is known. */
export function fixedOffsetMinutes(utc?: string): number {
  const m = utc ? /^UTC([+\-−])(\d+)(?::(\d+))?$/.exec(utc) : null;
  return m ? (m[1] === '+' ? 1 : -1) * (Number(m[2]) * 60 + Number(m[3] ?? 0)) : 0;
}

/** Offset (minutes) of the place at an instant: IANA zone with daylight saving, else the catalogue's fixed offset. */
export function placeOffset(country: string, lat: number, lng: number, fixedTimezone: string | undefined, at: Date): number {
  const zone = zoneFor(country, lat, lng);
  return zone ? offsetMinutes(zone, at) : fixedOffsetMinutes(fixedTimezone);
}

/** "19:42" in the place's clock. */
export function clockTime(at: Date, offset: number, bcp47: string): string {
  return new Intl.DateTimeFormat(bcp47, { hour: '2-digit', minute: '2-digit', hourCycle: 'h23', timeZone: 'UTC' }).format(new Date(at.getTime() + offset * 60_000));
}
