import { createHash } from 'node:crypto';
import type { FaceProportions } from '@mascot/shared';
import type { FaceAnalysis, FaceAnalyzer, FaceImageInput } from './face.types';

/** Seeded PRNG (mulberry32). */
function rng(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function seedOf(value: string | Buffer): number {
  return createHash('sha1').update(value).digest().readUInt32BE(0);
}

/**
 * Deterministic analyzer for local development / CI.
 * All photos of the same uploader share an identity vector (plus small per-photo noise)
 * so the identity-consistency check behaves like production. Pose cycles through the
 * five guide poses based on upload order embedded in the photo id hash.
 */
export class MockFaceAnalyzer implements FaceAnalyzer {
  readonly name = 'mock';

  private identitySeed(input: FaceImageInput): string {
    return input.subject ?? 'mock-identity';
  }

  async analyze(images: FaceImageInput[]): Promise<Map<string, FaceAnalysis>> {
    const out = new Map<string, FaceAnalysis>();
    images.forEach((img, index) => {
      const identity = rng(seedOf(this.identitySeed(img)));
      const base = Array.from({ length: 512 }, () => identity() * 2 - 1);
      const noise = rng(seedOf(img.data ?? img.id));
      const emb = base.map((v) => v + (noise() * 2 - 1) * 0.25);
      const norm = Math.sqrt(emb.reduce((s, v) => s + v * v, 0));
      const poses = [
        { yaw: 0, smile: 0.1 },
        { yaw: 32, smile: 0.2 },
        { yaw: -32, smile: 0.2 },
        { yaw: 3, smile: 0.8 },
        { yaw: -2, smile: 0.05 },
      ];
      const p = poses[index % poses.length]!;
      const r = rng(seedOf(this.identitySeed(img) + ':props'));
      const proportions: FaceProportions = {
        widthToHeight: 0.7 + r() * 0.2,
        jawToCheek: 0.72 + r() * 0.25,
        foreheadToCheek: 0.85 + r() * 0.2,
        eyeSpacing: 0.4 + r() * 0.08,
        eyeOpenness: 0.25 + r() * 0.15,
        canthalTiltDeg: -6 + r() * 12,
        noseWidthRatio: 0.85 + r() * 0.4,
        noseLengthRatio: 0.28 + r() * 0.06,
        mouthWidthRatio: 1.3 + r() * 0.5,
        lipFullness: 0.06 + r() * 0.05,
      };
      out.set(img.id, {
        faceCount: 1,
        detScore: 0.92,
        bbox: [0.3, 0.2, 0.7, 0.7],
        pose: { yaw: p.yaw, pitch: 2, roll: 1 },
        age: 22 + Math.floor(r() * 12),
        sex: r() > 0.5 ? 'M' : 'F',
        embedding: emb.map((v) => v / norm),
        proportions,
        skin: { lab: [65, 12, 18], hex: '#d7bd96', mst: (['mst-2', 'mst-4', 'mst-5', 'mst-7', 'mst-9'] as const)[Math.floor(r() * 5)]! },
        smile: p.smile,
        quality: { sharpness: 180, brightness: 0.52, faceAreaRatio: 0.16 },
      });
    });
    return out;
  }
}
