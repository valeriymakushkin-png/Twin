/**
 * Dictionary lint (key parity is already enforced by the compiler via `Dict`):
 *  - every translated string keeps exactly the same {placeholders} as English;
 *  - no translation is empty where English is not;
 *  - Russian plurals define one/few/many forms.
 * Run: pnpm --filter @mascot/web i18n:check
 */
import { en } from '../src/lib/i18n/en.ts';
import { ru } from '../src/lib/i18n/ru.ts';

type Node = string | Node[] | { [k: string]: Node };
const problems: string[] = [];
const placeholders = (s: string) => [...s.matchAll(/\{(\w+)\}/g)].map((m) => m[1]).sort().join(',');
const isPlural = (v: unknown): v is Record<string, string> => typeof v === 'object' && v !== null && !Array.isArray(v) && 'one' in v && 'other' in v;

function walk(a: Node, b: Node | undefined, path: string, locale: string): void {
  if (typeof a === 'string') {
    if (typeof b !== 'string') return void problems.push(`${locale}:${path} missing`);
    if (a.trim() && !b.trim()) problems.push(`${locale}:${path} is empty`);
    if (placeholders(a) !== placeholders(b)) problems.push(`${locale}:${path} placeholders {${placeholders(b)}} ≠ {${placeholders(a)}}`);
    return;
  }
  if (isPlural(a)) {
    const ref = placeholders(a.other!);
    const forms = b as Record<string, string>;
    if (locale === 'ru') for (const f of ['one', 'few', 'many']) if (!forms[f]) problems.push(`${locale}:${path}.${f} plural form missing`);
    for (const [f, v] of Object.entries(forms)) if (placeholders(v) !== ref) problems.push(`${locale}:${path}.${f} placeholders differ`);
    return;
  }
  if (Array.isArray(a)) {
    if (!Array.isArray(b) || b.length !== a.length) return void problems.push(`${locale}:${path} array length differs`);
    a.forEach((v, i) => walk(v, b[i], `${path}[${i}]`, locale));
    return;
  }
  for (const [k, v] of Object.entries(a)) walk(v, (b as Record<string, Node> | undefined)?.[k], path ? `${path}.${k}` : k, locale);
}

walk(en as unknown as Node, ru as unknown as Node, '', 'ru');
if (problems.length) {
  console.error(problems.join('\n'));
  process.exit(1);
}
console.log('i18n OK: ru matches en');
