import { LOCALE_META, type Locale } from './config';
import de from './messages/de';
import en from './messages/en';
import es from './messages/es';
import fr from './messages/fr';
import it from './messages/it';
import ru from './messages/ru';

export type Plural = Partial<Record<Intl.LDMLPluralRule, string>> & { other: string };

/** The shape every dictionary must follow: same keys as Russian, strings or plural sets at the leaves. */
export type Shape<T> = {
  [K in keyof T]: T[K] extends string ? string : T[K] extends { other: string } ? Plural : Shape<T[K]>;
};

export type Messages = Shape<typeof ru>;

type Paths<T, P extends string = ''> = {
  [K in keyof T & string]: T[K] extends string ? `${P}${K}` : T[K] extends { other: string } ? `${P}${K}` : Paths<T[K], `${P}${K}.`>;
}[keyof T & string];

export type MessageKey = Paths<typeof ru>;
export type Vars = Record<string, string | number>;

export const dictionaries: Record<Locale, Messages> = { ru, en, es, de, fr, it };

const pluralCache = new Map<Locale, Intl.PluralRules>();
const plurals = (locale: Locale) => {
  let rules = pluralCache.get(locale);
  if (!rules) pluralCache.set(locale, (rules = new Intl.PluralRules(LOCALE_META[locale].bcp47)));
  return rules;
};

function lookup(dict: Messages, key: string): unknown {
  let node: unknown = dict;
  for (const part of key.split('.')) {
    if (node && typeof node === 'object' && part in node) node = (node as Record<string, unknown>)[part];
    else return undefined;
  }
  return node;
}

const interpolate = (s: string, vars?: Vars) => (vars ? s.replace(/\{(\w+)\}/g, (m, k: string) => (k in vars ? String(vars[k]) : m)) : s);

/** Resolve a key for a locale, falling back to English, then to the key itself. */
export function translate(locale: Locale, key: MessageKey | string, vars?: Vars): string {
  const node = lookup(dictionaries[locale], key) ?? lookup(dictionaries.en, key);
  if (typeof node === 'string') return interpolate(node, vars);
  if (node && typeof node === 'object' && 'other' in node) {
    const count = Number(vars?.count ?? 0);
    const forms = node as Plural;
    const form = forms[plurals(locale).select(count)] ?? forms.other;
    return interpolate(form, { ...vars, count: new Intl.NumberFormat(LOCALE_META[locale].bcp47).format(count) });
  }
  return key;
}

export type TFunction = (key: MessageKey, vars?: Vars) => string;
