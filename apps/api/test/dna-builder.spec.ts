import { describeDna, MascotDnaSchema, type FaceProportions } from '@mascot/shared';
import {
  ageGroupFromAge,
  buildDna,
  classifyEyeShape,
  classifyFaceShape,
  classifyMouth,
  classifyNose,
  cosine,
  findIdentityOutliers,
  meanEmbedding,
  nearestMonkTone,
  rankReferencePhotos,
} from '../src/ai/dna/dna-builder';
import type { FaceAnalysis } from '../src/ai/face/face.types';

const base: FaceProportions = {
  widthToHeight: 0.76,
  jawToCheek: 0.82,
  foreheadToCheek: 0.9,
  eyeSpacing: 0.44,
  eyeOpenness: 0.3,
  canthalTiltDeg: 1,
  noseWidthRatio: 1,
  noseLengthRatio: 0.3,
  mouthWidthRatio: 1.5,
  lipFullness: 0.08,
};

function unit(seed: number, noise = 0): number[] {
  const v = Array.from({ length: 512 }, (_, i) => Math.sin(seed * 31 + i * 7.13) + noise * Math.cos(i * seed));
  const n = Math.sqrt(v.reduce((s, x) => s + x * x, 0));
  return v.map((x) => x / n);
}

function analysis(overrides: Partial<FaceAnalysis> = {}): FaceAnalysis {
  return {
    faceCount: 1,
    detScore: 0.9,
    bbox: [0.3, 0.2, 0.7, 0.7],
    pose: { yaw: 0, pitch: 0, roll: 0 },
    age: 26,
    sex: 'F',
    embedding: unit(1),
    proportions: base,
    skin: { lab: [70, 10, 18], hex: '#e0c0a0', mst: 'mst-3' },
    smile: 0.2,
    quality: { sharpness: 150, brightness: 0.5, faceAreaRatio: 0.18 },
    ...overrides,
  };
}

describe('geometric classifiers', () => {
  it('classifies face shapes from proportions', () => {
    expect(classifyFaceShape({ ...base, widthToHeight: 0.64 }).value).toBe('oblong');
    expect(classifyFaceShape({ ...base, widthToHeight: 0.84, jawToCheek: 0.97 }).value).toBe('square');
    expect(classifyFaceShape({ ...base, foreheadToCheek: 1.02, jawToCheek: 0.7 }).value).toBe('heart');
    expect(classifyFaceShape({ ...base, widthToHeight: 0.9, jawToCheek: 0.85 }).value).toBe('round');
    expect(classifyFaceShape(base).value).toBe('oval');
  });

  it('classifies eyes, nose and mouth', () => {
    expect(classifyEyeShape({ ...base, canthalTiltDeg: 9 }).value).toBe('upturned');
    expect(classifyEyeShape({ ...base, canthalTiltDeg: -7 }).value).toBe('downturned');
    expect(classifyEyeShape({ ...base, eyeOpenness: 0.42 }).value).toBe('round');
    expect(classifyNose({ ...base, noseWidthRatio: 1.3 }).value).toBe('wide');
    expect(classifyNose({ ...base, noseWidthRatio: 0.8 }).value).toBe('narrow');
    expect(classifyMouth({ ...base, lipFullness: 0.12 }).value).toBe('full');
    expect(classifyMouth({ ...base, lipFullness: 0.05 }).value).toBe('thin');
  });

  it('maps ages to groups', () => {
    expect(ageGroupFromAge(17)).toBe('teen');
    expect(ageGroupFromAge(25)).toBe('young-adult');
    expect(ageGroupFromAge(35)).toBe('adult');
    expect(ageGroupFromAge(48)).toBe('middle-aged');
    expect(ageGroupFromAge(70)).toBe('senior');
  });

  it('picks the nearest Monk skin tone', () => {
    expect(nearestMonkTone([94, 1, 5]).value).toMatch(/mst-[123]/);
    expect(nearestMonkTone([20, 5, 6]).value).toMatch(/mst-(9|10)/);
  });
});

describe('identity consistency', () => {
  it('computes cosine similarity and normalised means', () => {
    expect(cosine(unit(1), unit(1))).toBeCloseTo(1, 5);
    const m = meanEmbedding([unit(1), unit(1)]);
    expect(Math.sqrt(m.reduce((s, x) => s + x * x, 0))).toBeCloseTo(1, 5);
  });

  it('flags photos of a different person', () => {
    const same = [1, 2, 3, 4].map((i) => ({ id: `p${i}`, embedding: unit(1, 0.05 * i) }));
    const outliers = findIdentityOutliers([...same, { id: 'intruder', embedding: unit(9) }]);
    expect([...outliers]).toEqual(['intruder']);
  });
});

describe('buildDna', () => {
  it('merges geometry, colorimetry and vision into a valid DNA', () => {
    const result = buildDna({
      analyses: [analysis(), analysis({ pose: { yaw: 30, pitch: 0, roll: 0 } }), analysis({ age: 28 })],
      vision: {
        hairStyle: 'long-wavy',
        hairColor: 'auburn',
        eyeColor: 'green',
        eyebrows: 'thin-arched',
        facialHair: 'none',
        glasses: 'none',
        presentation: 'feminine',
        freckles: true,
        dimples: false,
        distinguishingFeatures: ['small mole above left lip'],
        confidence: { hairStyle: 0.9, hairColor: 0.9, eyeColor: 0.8 },
      },
    });
    expect(MascotDnaSchema.safeParse(result.dna).success).toBe(true);
    expect(result.dna.hairColor).toBe('auburn');
    expect(result.dna.ageGroup).toBe('young-adult');
    expect(result.embedding).toHaveLength(512);
    expect(describeDna(result.dna)).toContain('auburn long wavy hair');
    expect(describeDna(result.dna)).toContain('small mole above left lip');
  });

  it('falls back gracefully without vision attributes', () => {
    const result = buildDna({ analyses: [analysis()], vision: null });
    expect(MascotDnaSchema.safeParse(result.dna).success).toBe(true);
  });

  it('ranks frontal sharp photos first as references', () => {
    const ranked = rankReferencePhotos([
      { id: 'side', analysis: analysis({ pose: { yaw: 40, pitch: 0, roll: 0 } }) },
      { id: 'front', analysis: analysis() },
    ]);
    expect(ranked[0]!.id).toBe('front');
  });
});
