/**
 * Cross-checks the IANA zone chosen for every destination against the "UTC+n" the catalogue stores
 * (standard time). The standard offset of the zone — the smaller of its January and July offsets in
 * the northern/southern hemisphere sense — must equal the catalogue value. Prints every mismatch.
 * Run: node --experimental-strip-types --no-warnings scripts/check-tz.mts
 */
import { baseDestinations } from '../src/data/destinations.ts';
import { worldCities } from '../src/data/world.generated.ts';
import { offsetMinutes, zoneFor } from '../src/lib/tz.ts';

const parse = (s: string) => {
  const m = /^UTC([+\-−])(\d+)(?::(\d+))?$/.exec(s);
  if (!m) return NaN;
  return (m[1] === '+' ? 1 : -1) * (Number(m[2]) * 60 + Number(m[3] ?? 0));
};
let bad = 0;
const byCountry = new Map<string, Set<string>>();
for (const d of [...baseDestinations, ...worldCities]) {
  const zone = zoneFor(d.countryCode, d.lat, d.lng);
  if (!zone) {
    console.log(`${d.id}: no zone for ${d.countryCode}`);
    bad++;
    continue;
  }
  (byCountry.get(d.countryCode) ?? byCountry.set(d.countryCode, new Set()).get(d.countryCode)!).add(`${d.id}→${zone}`);
  const std = Math.min(offsetMinutes(zone, new Date('2026-01-15T12:00:00Z')), offsetMinutes(zone, new Date('2026-07-15T12:00:00Z')));
  const want = parse(d.timezone);
  if (std !== want) {
    console.log(`${d.id} (${d.countryCode}): ${d.timezone} but ${zone} is standard UTC${std >= 0 ? '+' : '-'}${Math.abs(std) / 60}`);
    bad++;
  }
}
for (const c of ['RU', 'US', 'CA', 'AU', 'BR', 'MX', 'ID', 'CL', 'EC', 'ES', 'PT']) if (byCountry.has(c)) console.log(c, [...byCountry.get(c)!].join(' '));
console.log(bad ? `${bad} problem(s)` : 'all zones agree with the catalogue');
process.exit(bad ? 1 : 0);
