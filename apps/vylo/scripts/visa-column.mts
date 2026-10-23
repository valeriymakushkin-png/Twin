/**
 * Prints what the passport matrix says about one destination, grouped by status — a quick way to
 * review a country's column while writing its visa guide.
 * Usage: node --experimental-strip-types scripts/visa-column.mts <ISO2> [passport…]
 */
import { CODES, DAYS, ROWS } from '../src/data/visa/matrix.ts';

const [dest, ...passports] = process.argv.slice(2).map((s) => s.toUpperCase());
const codes = CODES.match(/../g)!;
const col = codes.indexOf(dest ?? '');
if (col < 0) {
  console.error(`usage: visa-column.mts <ISO2> [passport…] — ${dest ?? '?'} is not in the matrix`);
  process.exit(1);
}
const label = (c: string) => (DAYS[c] ? `visa-free ${DAYS[c]} days` : ({ f: 'visa-free', a: 'visa on arrival', t: 'ETA', e: 'e-visa', r: 'visa required', x: 'no admission', '-': 'same country' } as Record<string, string>)[c] ?? c);
if (passports.length) {
  for (const p of passports) console.log(`${p} → ${dest}: ${label(ROWS[codes.indexOf(p)]?.[col] ?? '?')}`);
} else {
  const groups = new Map<string, string[]>();
  codes.forEach((p, i) => {
    const l = label(ROWS[i][col]);
    groups.set(l, [...(groups.get(l) ?? []), p]);
  });
  for (const [l, ps] of [...groups].sort((a, b) => b[1].length - a[1].length)) console.log(`${l} (${ps.length}): ${ps.join(' ')}`);
}
