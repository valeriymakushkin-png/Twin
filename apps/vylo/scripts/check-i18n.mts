/**
 * Translation lint for the UI dictionaries and content packs. Key parity is already enforced by
 * the compiler; this catches what types cannot:
 *  - a missing, extra or empty entry (also in content packs, which are plain records);
 *  - {placeholders} that differ from the Russian reference;
 *  - plural entries without every CLDR category the language needs (Intl.PluralRules);
 *  - Cyrillic left in a non-Russian file, and strings copied verbatim from English.
 * Run: pnpm --filter @vylo/app i18n:check
 */
import cde from '../src/content/de.ts';
import cen from '../src/content/en.ts';
import ces from '../src/content/es.ts';
import cfr from '../src/content/fr.ts';
import cit from '../src/content/it.ts';
import cru from '../src/content/ru.ts';
import de from '../src/i18n/messages/de.ts';
import en from '../src/i18n/messages/en.ts';
import es from '../src/i18n/messages/es.ts';
import fr from '../src/i18n/messages/fr.ts';
import it from '../src/i18n/messages/it.ts';
import ru from '../src/i18n/messages/ru.ts';

type Node = string | Node[] | { [k: string]: Node };
const problems: string[] = [];
const copies: string[] = [];
let compared = 0;

const placeholders = (s: string) => [...s.matchAll(/\{(\w+)\}/g)].map((m) => m[1]).sort().join(',');
const isPlural = (v: unknown): v is Record<string, string> => typeof v === 'object' && v !== null && !Array.isArray(v) && 'other' in v && typeof (v as { other: unknown }).other === 'string';
/** Short codes, brand names and proper nouns that legitimately read the same in every language. */
const SAME_EVERYWHERE = /^(Vylo( Plus)?|Plus|ETA|E-?visa|OK|Instagram|[A-Z0-9 .\-'’·&+/]{1,12}|\{\w+\}.*|.{0,3})$/;

function walk(ref: Node, b: Node | undefined, en: Node | undefined, path: string, locale: string) {
  const at = `${locale}:${path}`;
  if (typeof ref === 'string') {
    if (typeof b !== 'string') return void problems.push(`${at} missing`);
    if (ref.trim() && !b.trim()) problems.push(`${at} is empty`);
    if (placeholders(ref) !== placeholders(b)) problems.push(`${at} placeholders {${placeholders(b)}} ≠ {${placeholders(ref)}}`);
    // Percentages come pre-formatted by Intl ("3,6 %"), so a translation must not add its own sign.
    if ((b.match(/%/g)?.length ?? 0) !== (ref.match(/%/g)?.length ?? 0)) problems.push(`${at} has a different number of % signs than the reference`);
    if (locale !== 'ru' && /[А-Яа-яЁё]/.test(b)) problems.push(`${at} still contains Cyrillic: ${b}`);
    // Proper names (people, places) are expected to match English, so only prose is compared.
    if (locale !== 'en' && locale !== 'ru' && typeof en === 'string' && !/^content\..*\.(name|home|placeName)$/.test(path)) {
      compared++;
      if (b === en && !SAME_EVERYWHERE.test(b)) copies.push(`${at} = "${b}"`);
    }
    return;
  }
  if (isPlural(ref)) {
    if (!isPlural(b)) return void problems.push(`${at} plural missing`);
    const tag = { ru: 'ru', en: 'en', es: 'es', de: 'de', fr: 'fr', it: 'it' }[locale]!;
    for (const cat of new Intl.PluralRules(tag).resolvedOptions().pluralCategories) if (!b[cat]) problems.push(`${at}.${cat} plural form missing`);
    for (const [cat, v] of Object.entries(b)) if (placeholders(v) !== placeholders(ref.other!)) problems.push(`${at}.${cat} placeholders differ`);
    return;
  }
  if (Array.isArray(ref)) {
    if (!Array.isArray(b) || b.length !== ref.length) return void problems.push(`${at} array length differs`);
    ref.forEach((v, i) => walk(v, b[i], (en as Node[] | undefined)?.[i], `${path}[${i}]`, locale));
    return;
  }
  if (typeof b !== 'object' || b === null || Array.isArray(b)) return void problems.push(`${at} missing`);
  for (const [k, v] of Object.entries(ref)) walk(v, b[k], (en as Record<string, Node> | undefined)?.[k], path ? `${path}.${k}` : k, locale);
  for (const k of Object.keys(b)) if (!(k in ref)) problems.push(`${at}${path ? '.' : ''}${k} is not in the reference`);
}

const messages = { en, es, de, fr, it } as Record<string, unknown>;
const content = { en: cen, es: ces, de: cde, fr: cfr, it: cit } as Record<string, unknown>;
walk(ru as unknown as Node, ru as unknown as Node, undefined, '', 'ru');
for (const [locale, dict] of Object.entries(messages)) walk(ru as unknown as Node, dict as Node, en as unknown as Node, '', locale);
for (const [locale, pack] of Object.entries(content)) walk(cru as unknown as Node, pack as Node, cen as unknown as Node, 'content', locale);

// A handful of identical strings is normal (place names, loanwords); dozens mean a file was not translated.
const copyLimit = Math.ceil(compared * 0.06);
if (copies.length > copyLimit) problems.push(`${copies.length} strings are identical to English (limit ${copyLimit}):\n  ${copies.join('\n  ')}`);

if (problems.length) {
  console.error(problems.join('\n'));
  process.exit(1);
}
console.log(`i18n OK: 6 languages, ${compared} translated strings checked, ${copies.length} kept as in English`);
if (copies.length && process.env.VERBOSE) console.log(`  ${copies.join('\n  ')}`);
