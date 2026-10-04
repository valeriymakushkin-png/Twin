import { z } from 'zod';
import { describeEyewear, getEyewear } from './eyewear';
import { describeHairstyle, getHairstyle } from './hairstyles';

/**
 * Mascot DNA — the canonical, provider-agnostic identity description of a user.
 *
 * DNA is extracted once from the user's photos (face analysis + vision attributes)
 * and then reused for every future generation (styles, stickers, memes, videos),
 * which is what keeps the mascot recognisable across the whole product.
 *
 * Every trait uses a closed vocabulary so that prompts are deterministic and
 * the analytics / admin tooling can aggregate on them.
 */

export const FACE_SHAPES = ['oval', 'round', 'square', 'heart', 'oblong', 'diamond', 'triangle'] as const;

export const EYE_SHAPES = [
  'almond',
  'round',
  'monolid',
  'hooded',
  'upturned',
  'downturned',
  'deep-set',
] as const;

export const EYE_COLORS = [
  'dark-brown',
  'brown',
  'hazel',
  'amber',
  'green',
  'blue',
  'gray',
] as const;

export const HAIR_STYLES = [
  'bald',
  'buzz-cut',
  'crew-cut',
  'short-textured',
  'side-part',
  'quiff',
  'pompadour',
  'undercut',
  'mohawk',
  'mullet',
  'curly-short',
  'afro',
  'medium-wavy',
  'medium-straight',
  'long-straight',
  'long-wavy',
  'long-curly',
  'bob',
  'pixie',
  'ponytail',
  'bun',
  'braids',
  'dreadlocks',
] as const;

export const HAIR_COLORS = [
  'black',
  'dark-brown',
  'brown',
  'light-brown',
  'dark-blonde',
  'blonde',
  'platinum',
  'red',
  'auburn',
  'ginger',
  'gray',
  'white',
  'dyed-blue',
  'dyed-pink',
  'dyed-purple',
  'dyed-green',
] as const;

export const NOSE_SHAPES = [
  'straight',
  'button',
  'roman',
  'snub',
  'wide',
  'narrow',
  'aquiline',
  'upturned',
] as const;

export const MOUTH_SHAPES = ['full', 'thin', 'wide', 'small', 'heart', 'bow', 'downturned'] as const;

/** Monk Skin Tone scale (10 tones), the inclusive standard also used by Google. */
export const SKIN_TONES = [
  'mst-1',
  'mst-2',
  'mst-3',
  'mst-4',
  'mst-5',
  'mst-6',
  'mst-7',
  'mst-8',
  'mst-9',
  'mst-10',
] as const;

export const EYEBROWS = [
  'thick-straight',
  'thick-arched',
  'thin-straight',
  'thin-arched',
  'bushy',
  'soft-angled',
  'rounded',
] as const;

export const AGE_GROUPS = ['teen', 'young-adult', 'adult', 'middle-aged', 'senior'] as const;

export const FACIAL_HAIR = [
  'none',
  'stubble',
  'mustache',
  'goatee',
  'short-beard',
  'full-beard',
] as const;

export const GLASSES = ['none', 'round', 'rectangular', 'aviator', 'cat-eye', 'sunglasses'] as const;

export const PRESENTATIONS = ['masculine', 'feminine', 'androgynous'] as const;

export type FaceShape = (typeof FACE_SHAPES)[number];
export type EyeShape = (typeof EYE_SHAPES)[number];
export type EyeColor = (typeof EYE_COLORS)[number];
export type HairStyle = (typeof HAIR_STYLES)[number];
export type HairColor = (typeof HAIR_COLORS)[number];
export type NoseShape = (typeof NOSE_SHAPES)[number];
export type MouthShape = (typeof MOUTH_SHAPES)[number];
export type SkinTone = (typeof SKIN_TONES)[number];
export type Eyebrows = (typeof EYEBROWS)[number];
export type AgeGroup = (typeof AGE_GROUPS)[number];
export type FacialHair = (typeof FACIAL_HAIR)[number];
export type Glasses = (typeof GLASSES)[number];
export type Presentation = (typeof PRESENTATIONS)[number];

/** Normalised facial proportions measured from landmarks (all values unitless ratios). */
export const FaceProportionsSchema = z.object({
  /** face width / face height (cheekbone-to-cheekbone vs hairline-to-chin) */
  widthToHeight: z.number().min(0).max(3),
  /** jaw width / cheekbone width */
  jawToCheek: z.number().min(0).max(3),
  /** forehead width / cheekbone width */
  foreheadToCheek: z.number().min(0).max(3),
  /** inter-pupil distance / face width */
  eyeSpacing: z.number().min(0).max(1.5),
  /** eye height / eye width (eye aspect ratio) */
  eyeOpenness: z.number().min(0).max(1.5),
  /** canthal tilt in degrees, positive = upturned */
  canthalTiltDeg: z.number().min(-45).max(45),
  /** nose (alar) width / inter-canthal distance */
  noseWidthRatio: z.number().min(0).max(3),
  /** nose length / face height */
  noseLengthRatio: z.number().min(0).max(1),
  /** mouth width / nose width */
  mouthWidthRatio: z.number().min(0).max(4),
  /** (upper + lower lip height) / face height */
  lipFullness: z.number().min(0).max(0.5),
});
export type FaceProportions = z.infer<typeof FaceProportionsSchema>;

export const MascotDnaSchema = z.object({
  faceShape: z.enum(FACE_SHAPES),
  eyeShape: z.enum(EYE_SHAPES),
  eyeColor: z.enum(EYE_COLORS),
  hairStyle: z.enum(HAIR_STYLES),
  hairColor: z.enum(HAIR_COLORS),
  noseShape: z.enum(NOSE_SHAPES),
  mouthShape: z.enum(MOUTH_SHAPES),
  skinTone: z.enum(SKIN_TONES),
  eyebrows: z.enum(EYEBROWS),
  ageGroup: z.enum(AGE_GROUPS),
  facialHair: z.enum(FACIAL_HAIR).default('none'),
  glasses: z.enum(GLASSES).default('none'),
  /** Picked hairstyle (HAIRSTYLE_CATALOG key); falls back to the extracted `hairStyle`. */
  hairKey: z.string().max(48).nullish(),
  /** Picked eyewear (EYEWEAR_CATALOG key); overrides `glasses` when set. */
  glassesKey: z.string().max(48).nullish(),
  presentation: z.enum(PRESENTATIONS).default('androgynous'),
  freckles: z.boolean().default(false),
  dimples: z.boolean().default(false),
  /** Short free-text distinguishing marks (e.g. "small mole above left lip"), max 3. */
  distinguishingFeatures: z.array(z.string().min(2).max(80)).max(3).default([]),
  proportions: FaceProportionsSchema.optional(),
});
export type MascotDna = z.infer<typeof MascotDnaSchema>;

/** Per-trait confidence in [0..1], stored next to the DNA for QA / re-extraction decisions. */
export type DnaConfidence = Partial<Record<keyof MascotDna, number>>;

/** Hex values used by the procedural renderer, character cards and UI chips. */
export const SKIN_TONE_HEX: Record<SkinTone, string> = {
  'mst-1': '#f6ede4',
  'mst-2': '#f3e7db',
  'mst-3': '#f7ead0',
  'mst-4': '#eadaba',
  'mst-5': '#d7bd96',
  'mst-6': '#a07e56',
  'mst-7': '#825c43',
  'mst-8': '#604134',
  'mst-9': '#3a312a',
  'mst-10': '#292420',
};

export const HAIR_COLOR_HEX: Record<HairColor, string> = {
  black: '#1b1b1f',
  'dark-brown': '#3b2a20',
  brown: '#5a3d2b',
  'light-brown': '#8a6142',
  'dark-blonde': '#a7834f',
  blonde: '#d8b86a',
  platinum: '#ece3cf',
  red: '#a6352a',
  auburn: '#7d3420',
  ginger: '#c4632e',
  gray: '#9a9a9f',
  white: '#ececec',
  'dyed-blue': '#3d6bff',
  'dyed-pink': '#ff6fb5',
  'dyed-purple': '#8d5cff',
  'dyed-green': '#2fd38a',
};

export const EYE_COLOR_HEX: Record<EyeColor, string> = {
  'dark-brown': '#3a2418',
  brown: '#6b4226',
  hazel: '#8e7240',
  amber: '#b5791f',
  green: '#4f7d4a',
  blue: '#4a7bb7',
  gray: '#7c8a96',
};

const humanize = (value: string) => value.replace(/-/g, ' ');

const AGE_PHRASE: Record<AgeGroup, string> = {
  teen: 'late-teenage',
  'young-adult': 'young adult in their twenties',
  adult: 'adult in their thirties',
  'middle-aged': 'middle-aged',
  senior: 'senior',
};

const SKIN_PHRASE: Record<SkinTone, string> = {
  'mst-1': 'very fair porcelain',
  'mst-2': 'fair',
  'mst-3': 'light warm',
  'mst-4': 'light olive',
  'mst-5': 'medium tan',
  'mst-6': 'warm caramel',
  'mst-7': 'medium brown',
  'mst-8': 'rich brown',
  'mst-9': 'deep brown',
  'mst-10': 'very deep ebony',
};

/**
 * Compiles DNA into a stable natural-language identity description.
 * The output is deterministic for a given DNA, so it is safe to cache
 * (stored as `AvatarDna.promptFragment`).
 */
export function describeDna(dna: MascotDna): string {
  const parts: string[] = [];
  const subject =
    dna.presentation === 'masculine' ? 'man' : dna.presentation === 'feminine' ? 'woman' : 'person';
  parts.push(`a ${AGE_PHRASE[dna.ageGroup]} ${subject}`);
  parts.push(`${humanize(dna.faceShape)} face shape`);
  parts.push(`${SKIN_PHRASE[dna.skinTone]} skin tone`);
  parts.push(`${humanize(dna.eyeShape)} ${humanize(dna.eyeColor)} eyes`);
  parts.push(`${humanize(dna.eyebrows)} eyebrows`);
  parts.push(`${humanize(dna.noseShape)} nose`);
  parts.push(`${humanize(dna.mouthShape)} lips`);
  const hairstyle = getHairstyle(dna.hairKey);
  if (hairstyle) parts.push(hairstyle.look.cut === 'bald' ? 'bald head' : `${humanize(dna.hairColor)} hair, ${describeHairstyle(hairstyle)}`);
  else parts.push(dna.hairStyle === 'bald' ? 'bald head' : `${humanize(dna.hairColor)} ${humanize(dna.hairStyle)} hair`);
  if (dna.facialHair !== 'none') parts.push(humanize(dna.facialHair));
  const eyewear = getEyewear(dna.glassesKey);
  if (eyewear) parts.push(describeEyewear(eyewear));
  else if (dna.glasses !== 'none' && dna.glassesKey !== 'none') {
    parts.push(dna.glasses === 'sunglasses' ? 'wearing sunglasses' : `${humanize(dna.glasses)} glasses`);
  }
  if (dna.freckles) parts.push('freckles');
  if (dna.dimples) parts.push('dimples when smiling');
  for (const feature of dna.distinguishingFeatures) parts.push(feature);

  if (dna.proportions) {
    const p = dna.proportions;
    if (p.eyeSpacing > 0.47) parts.push('wide-set eyes');
    else if (p.eyeSpacing < 0.4) parts.push('close-set eyes');
    if (p.widthToHeight > 0.86) parts.push('broad face');
    else if (p.widthToHeight < 0.72) parts.push('long narrow face');
    if (p.jawToCheek > 0.92) parts.push('strong defined jawline');
    else if (p.jawToCheek < 0.75) parts.push('soft tapered jaw');
  }
  return parts.join(', ');
}

/** A short list of the most identity-defining traits, rendered on the character card. */
export function dnaHighlights(dna: MascotDna): Array<{ label: string; value: string }> {
  return [
    { label: 'Face', value: humanize(dna.faceShape) },
    { label: 'Eyes', value: `${humanize(dna.eyeShape)}, ${humanize(dna.eyeColor)}` },
    { label: 'Hair', value: dna.hairStyle === 'bald' ? 'bald' : `${humanize(dna.hairStyle)}, ${humanize(dna.hairColor)}` },
    { label: 'Nose', value: humanize(dna.noseShape) },
    { label: 'Lips', value: humanize(dna.mouthShape) },
    { label: 'Brows', value: humanize(dna.eyebrows) },
    { label: 'Skin', value: dna.skinTone.toUpperCase() },
    { label: 'Age', value: humanize(dna.ageGroup) },
  ];
}

/** Stable fingerprint of identity traits; used for cache keys and deduplication. */
export function dnaFingerprint(dna: MascotDna): string {
  const keys: Array<keyof MascotDna> = [
    'faceShape',
    'eyeShape',
    'eyeColor',
    'hairStyle',
    'hairColor',
    'noseShape',
    'mouthShape',
    'skinTone',
    'eyebrows',
    'ageGroup',
    'facialHair',
    'glasses',
    'presentation',
    'hairKey',
    'glassesKey',
  ];
  return keys.map((k) => String(dna[k] ?? '')).join('|');
}
