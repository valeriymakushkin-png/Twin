import { createHash } from 'node:crypto';
import { EYE_COLORS, EYEBROWS, FACIAL_HAIR, HAIR_COLORS, HAIR_STYLES, PRESENTATIONS } from '@mascot/shared';
import type { VisionAttributes, VisionExtractor } from './vision.types';

/** Deterministic attribute generator for local runs (seeded by the user id). */
export class MockVisionExtractor implements VisionExtractor {
  readonly name = 'mock-vision';

  async extract(_images: Buffer[], hints: { seed: string }): Promise<{ attributes: VisionAttributes; costMicros: number }> {
    const h = createHash('sha256').update(hints.seed).digest();
    const pick = <T>(arr: readonly T[], i: number) => arr[(h[i] as number) % arr.length] as T;
    const presentation = pick(PRESENTATIONS, 0);
    const naturalHair = HAIR_COLORS.filter((c) => !c.startsWith('dyed'));
    return {
      attributes: {
        hairStyle: pick(HAIR_STYLES.filter((s) => s !== 'bald'), 1),
        hairColor: pick(naturalHair, 2),
        eyeColor: pick(EYE_COLORS, 3),
        eyebrows: pick(EYEBROWS, 4),
        facialHair: presentation === 'masculine' ? pick(FACIAL_HAIR, 5) : 'none',
        glasses: (h[6] as number) % 4 === 0 ? 'round' : 'none',
        presentation,
        freckles: (h[7] as number) % 5 === 0,
        dimples: (h[8] as number) % 3 === 0,
        distinguishingFeatures: [],
        confidence: { hairStyle: 0.8, hairColor: 0.8, eyeColor: 0.7, eyebrows: 0.7, facialHair: 0.8, glasses: 0.9, presentation: 0.8 },
      },
      costMicros: 0,
    };
  }
}
