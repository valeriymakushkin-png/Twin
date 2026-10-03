import type { MascotDna } from '@mascot/shared';

/** Appearance attributes returned by the vision model (subset of DNA + confidences). */
export interface VisionAttributes {
  hairStyle: MascotDna['hairStyle'];
  hairColor: MascotDna['hairColor'];
  eyeColor: MascotDna['eyeColor'];
  eyebrows: MascotDna['eyebrows'];
  facialHair: MascotDna['facialHair'];
  glasses: MascotDna['glasses'];
  presentation: MascotDna['presentation'];
  freckles: boolean;
  dimples: boolean;
  distinguishingFeatures: string[];
  faceShape?: MascotDna['faceShape'];
  eyeShape?: MascotDna['eyeShape'];
  noseShape?: MascotDna['noseShape'];
  mouthShape?: MascotDna['mouthShape'];
  skinTone?: MascotDna['skinTone'];
  ageGroup?: MascotDna['ageGroup'];
  confidence: Record<string, number>;
}

export interface VisionExtractor {
  readonly name: string;
  extract(images: Buffer[], hints: { seed: string }): Promise<{ attributes: VisionAttributes; costMicros: number }>;
}

export const VISION_EXTRACTOR = Symbol('VISION_EXTRACTOR');
