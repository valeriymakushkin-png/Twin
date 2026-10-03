import {
  MascotDnaSchema,
  SKIN_TONE_HEX,
  SKIN_TONES,
  type AgeGroup,
  type DnaConfidence,
  type EyeShape,
  type FaceProportions,
  type FaceShape,
  type MascotDna,
  type MouthShape,
  type NoseShape,
  type SkinTone,
} from '@mascot/shared';
import type { FaceAnalysis } from '../face/face.types';
import type { VisionAttributes } from './vision.types';

/**
 * Mascot DNA builder — pure, deterministic, unit-tested.
 *
 * Sources and their authority:
 *  - Geometry (MediaPipe landmarks, frontal photos): face shape, eye openness/tilt, nose width, lips.
 *  - Colorimetry (face-service, cheek patches in Lab): skin tone on the Monk scale.
 *  - InsightFace attributes: age → age group, identity embedding.
 *  - Vision LLM: hair style/colour, eye colour, brows, facial hair, glasses, freckles, notes.
 * For overlapping traits the higher (weighted) confidence wins.
 */

export const DNA_EXTRACTOR_VERSION = 'dna-2026.10.1';

interface Scored<T> {
  value: T;
  confidence: number;
}

/* ----------------------------- vector math ----------------------------- */

export function cosine(a: number[], b: number[]): number {
  let dot = 0;
  let na = 0;
  let nb = 0;
  for (let i = 0; i < a.length; i++) {
    const x = a[i] as number;
    const y = b[i] as number;
    dot += x * y;
    na += x * x;
    nb += y * y;
  }
  return na && nb ? dot / Math.sqrt(na * nb) : 0;
}

export function meanEmbedding(vectors: number[][]): number[] {
  if (!vectors.length) return [];
  const dim = vectors[0]!.length;
  const sum = new Array<number>(dim).fill(0);
  for (const v of vectors) for (let i = 0; i < dim; i++) sum[i]! += v[i] as number;
  const norm = Math.sqrt(sum.reduce((s, x) => s + x * x, 0)) || 1;
  return sum.map((x) => x / norm);
}

/**
 * Leave-one-out identity check: a photo is an outlier when its embedding is far from
 * the mean of all other photos. ArcFace same-person cosine is typically > 0.45.
 */
export function findIdentityOutliers(embeddings: Array<{ id: string; embedding: number[] }>, threshold = 0.32): Set<string> {
  const outliers = new Set<string>();
  if (embeddings.length < 3) return outliers;
  for (const item of embeddings) {
    const others = embeddings.filter((e) => e.id !== item.id).map((e) => e.embedding);
    if (cosine(item.embedding, meanEmbedding(others)) < threshold) outliers.add(item.id);
  }
  return outliers;
}

function median(values: number[]): number {
  const sorted = [...values].sort((a, b) => a - b);
  const mid = sorted.length >> 1;
  return sorted.length % 2 ? (sorted[mid] as number) : ((sorted[mid - 1] as number) + (sorted[mid] as number)) / 2;
}

export function medianProportions(list: FaceProportions[]): FaceProportions | null {
  if (!list.length) return null;
  const keys = Object.keys(list[0]!) as Array<keyof FaceProportions>;
  return Object.fromEntries(keys.map((k) => [k, Number(median(list.map((p) => p[k])).toFixed(4))])) as FaceProportions;
}

/* ----------------------------- geometric classifiers ----------------------------- */

export function classifyFaceShape(p: FaceProportions): Scored<FaceShape> {
  const wh = p.widthToHeight;
  const jaw = p.jawToCheek;
  const forehead = p.foreheadToCheek;
  const scores: Record<FaceShape, number> = {
    oblong: wh < 0.7 ? 1 - wh / 0.7 + 0.6 : 0,
    round: wh > 0.83 && jaw > 0.8 && jaw < 0.92 ? (wh - 0.83) * 6 + 0.6 : 0,
    square: wh > 0.78 && jaw >= 0.9 ? (jaw - 0.9) * 6 + (wh - 0.78) * 4 + 0.65 : 0,
    heart: forehead >= 0.95 && jaw < 0.8 ? (forehead - 0.95) * 5 + (0.8 - jaw) * 4 + 0.6 : 0,
    diamond: forehead < 0.86 && jaw < 0.82 ? (0.86 - forehead) * 5 + (0.82 - jaw) * 4 + 0.6 : 0,
    triangle: jaw > forehead + 0.08 ? (jaw - forehead) * 5 + 0.55 : 0,
    oval: 0.55 - Math.abs(wh - 0.76) * 2 - Math.abs(jaw - 0.82),
  };
  const ranked = (Object.entries(scores) as Array<[FaceShape, number]>).sort((a, b) => b[1] - a[1]);
  const [best, second] = ranked;
  const margin = best![1] - (second?.[1] ?? 0);
  return { value: best![0], confidence: Math.max(0.35, Math.min(0.95, 0.5 + margin)) };
}

export function classifyEyeShape(p: FaceProportions): Scored<EyeShape> {
  if (p.canthalTiltDeg >= 6) return { value: 'upturned', confidence: Math.min(0.9, 0.55 + (p.canthalTiltDeg - 6) / 20) };
  if (p.canthalTiltDeg <= -4) return { value: 'downturned', confidence: Math.min(0.9, 0.55 + (-4 - p.canthalTiltDeg) / 20) };
  if (p.eyeOpenness >= 0.36) return { value: 'round', confidence: Math.min(0.9, 0.55 + (p.eyeOpenness - 0.36) * 3) };
  if (p.eyeOpenness <= 0.22) return { value: 'monolid', confidence: 0.45 };
  return { value: 'almond', confidence: 0.6 };
}

export function classifyNose(p: FaceProportions): Scored<NoseShape> {
  if (p.noseWidthRatio >= 1.15) return { value: 'wide', confidence: Math.min(0.9, 0.55 + (p.noseWidthRatio - 1.15)) };
  if (p.noseWidthRatio <= 0.85) return { value: 'narrow', confidence: Math.min(0.9, 0.55 + (0.85 - p.noseWidthRatio)) };
  if (p.noseLengthRatio <= 0.27) return { value: 'button', confidence: 0.55 };
  return { value: 'straight', confidence: 0.5 };
}

export function classifyMouth(p: FaceProportions): Scored<MouthShape> {
  if (p.lipFullness >= 0.105) return { value: 'full', confidence: Math.min(0.9, 0.55 + (p.lipFullness - 0.105) * 8) };
  if (p.lipFullness <= 0.06) return { value: 'thin', confidence: Math.min(0.9, 0.55 + (0.06 - p.lipFullness) * 8) };
  if (p.mouthWidthRatio >= 1.75) return { value: 'wide', confidence: 0.6 };
  if (p.mouthWidthRatio <= 1.35) return { value: 'small', confidence: 0.6 };
  return { value: 'bow', confidence: 0.45 };
}

export function ageGroupFromAge(age: number): AgeGroup {
  if (age < 20) return 'teen';
  if (age < 30) return 'young-adult';
  if (age < 40) return 'adult';
  if (age < 55) return 'middle-aged';
  return 'senior';
}

/* ----------------------------- colorimetry ----------------------------- */

function srgbToLab(hex: string): [number, number, number] {
  const n = parseInt(hex.slice(1), 16);
  const lin = (c: number) => {
    const v = c / 255;
    return v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
  };
  const r = lin((n >> 16) & 255);
  const g = lin((n >> 8) & 255);
  const b = lin(n & 255);
  const x = (r * 0.4124 + g * 0.3576 + b * 0.1805) / 0.95047;
  const y = r * 0.2126 + g * 0.7152 + b * 0.0722;
  const z = (r * 0.0193 + g * 0.1192 + b * 0.9505) / 1.08883;
  const f = (t: number) => (t > 0.008856 ? Math.cbrt(t) : 7.787 * t + 16 / 116);
  return [116 * f(y) - 16, 500 * (f(x) - f(y)), 200 * (f(y) - f(z))];
}

const MST_LAB = SKIN_TONES.map((tone) => ({ tone, lab: srgbToLab(SKIN_TONE_HEX[tone]) }));

/** Nearest Monk Skin Tone by CIE76 ΔE, weighting lightness higher (it dominates perception). */
export function nearestMonkTone(lab: [number, number, number]): Scored<SkinTone> {
  const ranked = MST_LAB.map(({ tone, lab: ref }) => ({
    tone,
    d: Math.sqrt(1.6 * (lab[0] - ref[0]) ** 2 + (lab[1] - ref[1]) ** 2 + (lab[2] - ref[2]) ** 2),
  })).sort((a, b) => a.d - b.d);
  const best = ranked[0]!;
  const second = ranked[1]!;
  return { value: best.tone, confidence: Math.max(0.4, Math.min(0.95, 0.5 + (second.d - best.d) / 20)) };
}

/* ----------------------------- assembly ----------------------------- */

export interface DnaBuildInput {
  analyses: FaceAnalysis[];
  vision: VisionAttributes | null;
}

export interface DnaBuildResult {
  dna: MascotDna;
  confidence: DnaConfidence;
  embedding: number[];
}

function pick<T>(...candidates: Array<Scored<T> | null | undefined>): Scored<T> | null {
  return candidates.filter((c): c is Scored<T> => Boolean(c)).sort((a, b) => b.confidence - a.confidence)[0] ?? null;
}

function fromVision<K extends keyof VisionAttributes>(vision: VisionAttributes | null, key: K, weight = 1): Scored<NonNullable<VisionAttributes[K]>> | null {
  if (!vision) return null;
  const value = vision[key];
  if (value === undefined || value === null) return null;
  return { value: value as NonNullable<VisionAttributes[K]>, confidence: (vision.confidence[key as string] ?? 0.6) * weight };
}

export function buildDna({ analyses, vision }: DnaBuildInput): DnaBuildResult {
  const frontal = analyses.filter((a) => Math.abs(a.pose.yaw) <= 15 && a.proportions);
  const proportions = medianProportions((frontal.length ? frontal : analyses).map((a) => a.proportions).filter((p): p is FaceProportions => Boolean(p)));

  const skinSamples = analyses.map((a) => a.skin?.lab).filter((l): l is [number, number, number] => Boolean(l));
  const skinLab = skinSamples.length
    ? ([median(skinSamples.map((l) => l[0])), median(skinSamples.map((l) => l[1])), median(skinSamples.map((l) => l[2]))] as [number, number, number])
    : null;

  const ages = analyses.map((a) => a.age).filter((a): a is number => typeof a === 'number');
  const age = ages.length ? median(ages) : null;
  const sexVotes = analyses.map((a) => a.sex).filter(Boolean);
  const male = sexVotes.filter((s) => s === 'M').length;
  const geoPresentation: Scored<MascotDna['presentation']> | null = sexVotes.length
    ? { value: male / sexVotes.length >= 0.7 ? 'masculine' : male / sexVotes.length <= 0.3 ? 'feminine' : 'androgynous', confidence: 0.55 }
    : null;

  const faceShape = pick(proportions ? classifyFaceShape(proportions) : null, fromVision(vision, 'faceShape', 0.8));
  const eyeShape = pick(proportions ? classifyEyeShape(proportions) : null, fromVision(vision, 'eyeShape', 0.9));
  const noseShape = pick(proportions ? classifyNose(proportions) : null, fromVision(vision, 'noseShape', 0.85));
  const mouthShape = pick(proportions ? classifyMouth(proportions) : null, fromVision(vision, 'mouthShape', 0.85));
  const skinTone = pick(skinLab ? nearestMonkTone(skinLab) : null, fromVision(vision, 'skinTone', 0.7));
  const ageGroup = pick(age !== null ? { value: ageGroupFromAge(age), confidence: 0.75 } : null, fromVision(vision, 'ageGroup', 0.7));
  const presentation = pick(fromVision(vision, 'presentation'), geoPresentation);

  const draft = {
    faceShape: faceShape?.value ?? 'oval',
    eyeShape: eyeShape?.value ?? 'almond',
    eyeColor: vision?.eyeColor ?? 'brown',
    hairStyle: vision?.hairStyle ?? 'short-textured',
    hairColor: vision?.hairColor ?? 'dark-brown',
    noseShape: noseShape?.value ?? 'straight',
    mouthShape: mouthShape?.value ?? 'bow',
    skinTone: skinTone?.value ?? 'mst-4',
    eyebrows: vision?.eyebrows ?? 'soft-angled',
    ageGroup: ageGroup?.value ?? 'young-adult',
    facialHair: vision?.facialHair ?? 'none',
    glasses: vision?.glasses ?? 'none',
    presentation: presentation?.value ?? 'androgynous',
    freckles: vision?.freckles ?? false,
    dimples: vision?.dimples ?? false,
    distinguishingFeatures: (vision?.distinguishingFeatures ?? []).slice(0, 3),
    proportions: proportions ?? undefined,
  };
  const dna = MascotDnaSchema.parse(draft);

  const confidence: DnaConfidence = {
    faceShape: faceShape?.confidence ?? 0.2,
    eyeShape: eyeShape?.confidence ?? 0.2,
    noseShape: noseShape?.confidence ?? 0.2,
    mouthShape: mouthShape?.confidence ?? 0.2,
    skinTone: skinTone?.confidence ?? 0.2,
    ageGroup: ageGroup?.confidence ?? 0.2,
    presentation: presentation?.confidence ?? 0.2,
    eyeColor: vision?.confidence.eyeColor ?? 0.2,
    hairStyle: vision?.confidence.hairStyle ?? 0.2,
    hairColor: vision?.confidence.hairColor ?? 0.2,
    eyebrows: vision?.confidence.eyebrows ?? 0.2,
    facialHair: vision?.confidence.facialHair ?? 0.2,
    glasses: vision?.confidence.glasses ?? 0.2,
  };

  const embeddings = analyses.map((a) => a.embedding).filter((e): e is number[] => Boolean(e && e.length));
  return { dna, confidence, embedding: meanEmbedding(embeddings) };
}

/** Ranks photos for use as identity references: frontal, sharp, large faces first. */
export function rankReferencePhotos<T extends { analysis: FaceAnalysis }>(photos: T[]): T[] {
  const score = (a: FaceAnalysis) =>
    (1 - Math.min(1, Math.abs(a.pose.yaw) / 45)) * 0.45 +
    Math.min(1, a.quality.sharpness / 150) * 0.25 +
    Math.min(1, a.quality.faceAreaRatio / 0.2) * 0.2 +
    a.detScore * 0.1;
  return [...photos].sort((x, y) => score(y.analysis) - score(x.analysis));
}
