'use client';

import type { MascotDna } from '@mascot/shared';
import { humanize } from '@/lib/format';
import type { Translator } from '@/lib/i18n';

type TraitKey = keyof Translator['t']['dna']['traits'];

function trait(tr: Translator, key: TraitKey, value: string): string {
  return tr.t.dna.traits[key][value] ?? humanize(value);
}

/** Localized Mascot DNA highlights (labels + trait values) for the character card. */
export function dnaHighlightsT(tr: Translator, dna: MascotDna): Array<{ label: string; value: string }> {
  const L = tr.t.dna.labels;
  return [
    { label: L.Face, value: trait(tr, 'faceShape', dna.faceShape) },
    { label: L.Eyes, value: `${trait(tr, 'eyeShape', dna.eyeShape)}, ${trait(tr, 'eyeColor', dna.eyeColor)}` },
    {
      label: L.Hair,
      value: dna.hairKey
        ? `${hairstyleName(tr, dna.hairKey)}, ${trait(tr, 'hairColor', dna.hairColor)}`
        : dna.hairStyle === 'bald'
          ? tr.t.dna.bald
          : `${trait(tr, 'hairStyle', dna.hairStyle)}, ${trait(tr, 'hairColor', dna.hairColor)}`,
    },
    { label: L.Nose, value: trait(tr, 'noseShape', dna.noseShape) },
    { label: L.Lips, value: trait(tr, 'mouthShape', dna.mouthShape) },
    { label: L.Brows, value: trait(tr, 'eyebrows', dna.eyebrows) },
    { label: L.Skin, value: dna.skinTone.toUpperCase() },
    { label: L.Age, value: trait(tr, 'ageGroup', dna.ageGroup) },
  ];
}

export function hairstyleName(tr: Translator, key: string): string {
  return (tr.t.hairstyles.names as Record<string, string>)[key] ?? key;
}

/** Eyewear name: model + finish, e.g. "Pilot · Gold / green". */
export function eyewearName(tr: Translator, model: string, finish: string): string {
  const m = (tr.t.eyewear.models as Record<string, string>)[model] ?? model;
  const f = (tr.t.eyewear.finishes as Record<string, string>)[finish] ?? finish;
  return `${m} · ${f}`;
}

/** Style display name: the catalog/admin name in English, the dictionary name elsewhere. */
export function styleName(tr: Translator, slug: string, fallback: string): string {
  return tr.locale === 'en' ? fallback : (tr.t.styles.names[slug] ?? fallback);
}

export function styleTagline(tr: Translator, slug: string, fallback: string): string {
  return tr.locale === 'en' ? fallback : tr.pick(tr.t.styles.taglines, slug, fallback);
}
