/**
 * Validates the visa guides in src/data/visa/guides and splits them into
 *   src/data/visa/guides.generated.ts       — facts bundled with the app (fees, rules, borders, waivers…)
 *   src/content/visa/<locale>.generated.ts — texts, loaded only for the language in use
 * Usage: node --experimental-strip-types scripts/build-visa.mts [--check] [guide files…]
 */
import { mkdirSync, readdirSync, writeFileSync } from 'node:fs';
import { basename, dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { CODES } from '../src/data/visa/matrix.ts';
import { HOLDINGS, type VisaGuide } from '../src/data/visa/types.ts';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dir = join(root, 'src/data/visa/guides');
const worldDir = join(root, 'src/data/world/countries');
const LOCALES = ['ru', 'en', 'es', 'de', 'fr', 'it'] as const;
const CYRILLIC = /[А-Яа-яЁё]/;
const STATUSES = ['free', 'voa', 'eta', 'evisa', 'required', 'banned'];
const DOCS = ['insurance', 'returnTicket', 'booking', 'finance', 'yellowFever'];
const PRICE_KINDS = ['free', 'fixed', 'from'];
const ISO = new Set(CODES.match(/../g));
const holdings = new Set<string>(HOLDINGS);
const GROUPS = new Set(['@EU', '@SCHENGEN', '@EAEU', '@GCC', '@CIS', '@ASEAN', '@MERCOSUR']);
const REGIME_TOKENS = new Set(['free', 'voa', 'eta', 'evisa', 'required', 'banned'].map((r) => `regime:${r}`));
const validScope = (t: unknown) => typeof t === 'string' && (ISO.has(t) || GROUPS.has(t) || REGIME_TOKENS.has(t));

const args = process.argv.slice(2);
const checkOnly = args.includes('--check');
const only = args.filter((a) => !a.startsWith('--')).map((a) => basename(a));
const errors: string[] = [];
const warnings: string[] = [];

const destinations = readdirSync(worldDir).filter((f) => /^[a-z]{2}\.ts$/.test(f)).map((f) => f.slice(0, 2).toUpperCase());
const files = readdirSync(dir).filter((f) => /^[a-z]{2}\.ts$/.test(f)).sort();

const isPrice = (p: unknown) => {
  const x = p as { kind?: string; amount?: number; currency?: string };
  return !!x && PRICE_KINDS.includes(x.kind ?? '') && (x.kind === 'free' || (typeof x.amount === 'number' && x.amount > 0 && /^[A-Z]{3}$/.test(x.currency ?? '')));
};
const isUrl = (u: unknown) => typeof u === 'string' && /^https:\/\/[^\s]+$/.test(u);

function checkFacts(g: VisaGuide, where: string) {
  if (!/^\d{4}-(0[1-9]|1[0-2])$/.test(g.checked ?? '')) errors.push(`${where}: checked must be "YYYY-MM"`);
  if (g.base && !ISO.has(g.base)) errors.push(`${where}: base ${g.base} is not in the matrix`);
  if (!g.base && !ISO.has(g.code)) errors.push(`${where}: ${g.code} has no matrix column — set "base"`);
  for (const [p, c] of Object.entries(g.overrides ?? {})) {
    if (!ISO.has(p)) errors.push(`${where}.overrides: unknown passport ${p}`);
    if (!STATUSES.includes(c.status)) errors.push(`${where}.overrides.${p}: bad status ${c.status}`);
    if (c.days !== undefined && (!Number.isInteger(c.days) || c.days < 1 || c.days > 730)) errors.push(`${where}.overrides.${p}: bad days`);
  }
  for (const [k, p] of Object.entries(g.fees ?? {})) if (!isPrice(p)) errors.push(`${where}.fees.${k}: bad price`);
  for (const [k, d] of Object.entries(g.stay ?? {})) if (!Number.isInteger(d) || d < 1 || d > 3650) errors.push(`${where}.stay.${k}: bad days`);
  for (const [k, u] of Object.entries(g.links ?? {})) if (!isUrl(u)) errors.push(`${where}.links.${k}: must be an https URL`);
  for (const f of g.forms ?? []) {
    if (!f.name?.trim() || CYRILLIC.test(f.name)) errors.push(`${where}.forms: name must be the official Latin-script name`);
    if (f.url !== undefined && !isUrl(f.url)) errors.push(`${where}.forms.${f.name}: url must be https`);
    if (f.fee !== undefined && !isPrice(f.fee)) errors.push(`${where}.forms.${f.name}: bad fee`);
  }
  for (const d of g.docs ?? []) if (!DOCS.includes(d)) errors.push(`${where}.docs: unknown ${d}`);
  if (g.passportMonths !== undefined && ![0, 3, 6].includes(g.passportMonths)) errors.push(`${where}: passportMonths must be 0, 3 or 6`);
  if (g.rule && (!(g.rule.days > 0) || !(g.rule.window >= g.rule.days))) errors.push(`${where}.rule: days ≤ window`);
  if (g.extend?.fee && !isPrice(g.extend.fee)) errors.push(`${where}.extend.fee: bad price`);
  if (g.visaRun && !['yes', 'limited', 'no'].includes(g.visaRun)) errors.push(`${where}.visaRun: yes | limited | no`);
  for (const b of g.borders ?? []) {
    if (!b.name?.trim() || CYRILLIC.test(b.name)) errors.push(`${where}.borders: name in Latin script`);
    if (!ISO.has(b.to) || b.to === g.code) errors.push(`${where}.borders.${b.name}: bad "to" ${b.to}`);
    if (!(Math.abs(b.lat) <= 90 && Math.abs(b.lng) <= 180)) errors.push(`${where}.borders.${b.name}: bad coordinates`);
  }
  if (g.borders?.length && !g.visaRun) errors.push(`${where}: borders without visaRun`);
  if (g.transit && (!(g.transit.hours > 0) || g.transit.passports?.some((p) => !ISO.has(p)))) errors.push(`${where}.transit: bad hours or passports`);
  if (g.nomad && (!g.nomad.name?.trim() || !(g.nomad.months > 0) || (g.nomad.income && !isPrice(g.nomad.income)))) errors.push(`${where}.nomad: name, months, income`);
  for (const [key, count] of [['hackScope', g.text?.en?.hacks?.length], ['pitfallScope', g.text?.en?.pitfalls?.length]] as const) {
    const scope = g[key];
    if (scope === undefined) continue;
    if (!Array.isArray(scope) || scope.length !== count) errors.push(`${where}.${key}: needs one entry per ${key === 'hackScope' ? 'hack' : 'pitfall'} (${count})`);
    else scope.forEach((s, i) => {
      if (s !== null && (!Array.isArray(s) || !s.length || !s.every(validScope))) errors.push(`${where}.${key}[${i}]: null or a list of ISO codes, regime:<status> or @GROUP tokens`);
    });
  }
  for (const [i, w] of (g.waivers ?? []).entries()) {
    if (!w.holds?.length || w.holds.some((h) => !holdings.has(h))) errors.push(`${where}.waivers[${i}]: holds must be from ${[...holdings].join(', ')}`);
    if (w.passports?.some((p) => !ISO.has(p))) errors.push(`${where}.waivers[${i}]: unknown passport`);
    if (!['free', 'voa', 'eta', 'evisa'].includes(w.status)) errors.push(`${where}.waivers[${i}]: bad status`);
  }
}

function checkText(g: VisaGuide, where: string) {
  for (const l of LOCALES) {
    const t = g.text?.[l];
    if (!t) {
      errors.push(`${where}: no "${l}" text`);
      continue;
    }
    const at = `${where}.${l}`;
    const strings: string[] = [];
    const str = (k: string, v: unknown, required: boolean) => {
      if (v === undefined && !required) return;
      if (typeof v !== 'string' || v.trim().length < 12) errors.push(`${at}.${k}: missing or too short`);
      else strings.push(v);
    };
    str('summary', t.summary, true);
    str('apply', t.apply, false);
    str('extend', t.extend, !!g.extend);
    str('visaRun', t.visaRun, !!g.visaRun);
    str('transit', t.transit, !!g.transit);
    str('nomad', t.nomad, !!g.nomad);
    if (!g.extend && t.extend) warnings.push(`${at}.extend: text without facts.extend`);
    if (!Array.isArray(t.hacks) || t.hacks.length < 3 || t.hacks.length > 6) errors.push(`${at}.hacks: 3–6 items`);
    if (!Array.isArray(t.pitfalls) || t.pitfalls.length < 2 || t.pitfalls.length > 4) errors.push(`${at}.pitfalls: 2–4 items`);
    for (const [k, list] of [['hacks', t.hacks], ['pitfalls', t.pitfalls], ['waivers', t.waivers ?? []]] as const) (list ?? []).forEach((s, i) => str(`${k}[${i}]`, s, true));
    if ((t.waivers?.length ?? 0) !== (g.waivers?.length ?? 0)) errors.push(`${at}.waivers: one text per facts.waivers entry`);
    for (const [p, s] of Object.entries(t.passports ?? {})) {
      if (!ISO.has(p)) errors.push(`${at}.passports: unknown passport ${p}`);
      str(`passports.${p}`, s, true);
    }
    for (const s of strings) {
      if (l !== 'ru' && CYRILLIC.test(s)) errors.push(`${at}: Cyrillic in a non-Russian text: "${s.slice(0, 50)}"`);
      if (/\{\w+\}/.test(s)) errors.push(`${at}: unexpected placeholder in "${s.slice(0, 50)}"`);
      if (/https?:\/\//.test(s)) errors.push(`${at}: put links in facts.links / forms, not in text: "${s.slice(0, 50)}"`);
    }
    if (l === 'ru' && !CYRILLIC.test(t.summary ?? '')) errors.push(`${at}: Russian text has no Cyrillic`);
  }
  const en = g.text?.en;
  if (en) for (const l of ['es', 'de', 'fr', 'it'] as const) for (const k of ['summary', 'apply', 'extend', 'visaRun', 'nomad'] as const) {
    const a = g.text?.[l]?.[k];
    if (typeof a === 'string' && a.length > 24 && a === en[k]) errors.push(`${where}.${l}.${k}: identical to English`);
  }
}

const guides: VisaGuide[] = [];
for (const f of files) {
  if (only.length && !only.includes(f)) continue;
  const where = f;
  try {
    const g = (await import(pathToFileURL(join(dir, f)).href)).default as VisaGuide;
    if (!g || g.code !== f.slice(0, 2).toUpperCase()) {
      errors.push(`${where}: default export's code must be ${f.slice(0, 2).toUpperCase()}`);
      continue;
    }
    checkFacts(g, where);
    checkText(g, where);
    guides.push(g);
  } catch (e) {
    errors.push(`${where}: ${(e as Error).message}`);
  }
}

const missing = destinations.filter((c) => !files.includes(`${c.toLowerCase()}.ts`));
if (!only.length && missing.length) warnings.push(`no visa guide yet for ${missing.length} destinations: ${missing.join(' ')}`);
for (const w of warnings) console.warn(`⚠ ${w}`);
if (errors.length) {
  for (const e of errors) console.error(`✗ ${e}`);
  console.error(`\n${errors.length} problem(s) in visa guides`);
  process.exit(1);
}
if (checkOnly) {
  console.log(`✓ ${guides.length} visa guides are valid`);
  process.exit(0);
}

const header = '// Generated by scripts/build-visa.mts from src/data/visa/guides — do not edit.\n';
const facts = guides.map(({ text: _t, ...f }) => f);
writeFileSync(
  join(root, 'src/data/visa/guides.generated.ts'),
  `${header}import type { VisaGuideFacts } from './types';\n\nexport const visaGuides = JSON.parse(${JSON.stringify(JSON.stringify(facts))}) as VisaGuideFacts[];\n`,
);
mkdirSync(join(root, 'src/content/visa'), { recursive: true });
for (const l of LOCALES) {
  const text = Object.fromEntries(guides.map((g) => [g.code, g.text[l]]));
  writeFileSync(join(root, `src/content/visa/${l}.generated.ts`), `${header}import type { VisaTexts } from '@/data/visa/types';\n\nconst text: VisaTexts = ${JSON.stringify(text)};\n\nexport default text;\n`);
}
console.log(`✓ visa: ${guides.length} guides`);
