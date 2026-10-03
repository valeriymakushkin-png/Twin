import type { FaceProportions, PhotoPose, SkinTone } from '@mascot/shared';

export interface FacePose {
  /** Degrees. Positive yaw = subject turned to their left (camera sees the right cheek). */
  yaw: number;
  pitch: number;
  roll: number;
}

export interface FaceAnalysis {
  faceCount: number;
  /** Detection confidence of the primary (largest) face. */
  detScore: number;
  /** Normalised [x1, y1, x2, y2] of the primary face. */
  bbox: [number, number, number, number] | null;
  pose: FacePose;
  age: number | null;
  /** Model estimate, used only to pick a neutral default presentation; users can edit DNA. */
  sex: 'M' | 'F' | null;
  /** L2-normalised 512-d ArcFace embedding (InsightFace buffalo_l). */
  embedding: number[] | null;
  /** MediaPipe Face Mesh derived ratios. */
  proportions: FaceProportions | null;
  skin: { lab: [number, number, number]; hex: string; mst: SkinTone } | null;
  /** 0..1 smile intensity from mouth landmarks. */
  smile: number;
  quality: { sharpness: number; brightness: number; faceAreaRatio: number };
}

export interface FaceImageInput {
  id: string;
  data?: Buffer;
  url?: string;
  /** Uploader id — only used by the mock analyzer to simulate a stable identity. */
  subject?: string;
}

export interface FaceAnalyzer {
  readonly name: string;
  analyze(images: FaceImageInput[]): Promise<Map<string, FaceAnalysis>>;
  /** Background removal (rembg) — optional capability of the face service. */
  removeBackground?(image: Buffer): Promise<Buffer>;
}

export const FACE_ANALYZER = Symbol('FACE_ANALYZER');

export function classifyPose(a: Pick<FaceAnalysis, 'pose' | 'smile'>): PhotoPose {
  if (a.pose.yaw >= 20) return 'LEFT';
  if (a.pose.yaw <= -20) return 'RIGHT';
  if (Math.abs(a.pose.yaw) <= 12 && Math.abs(a.pose.pitch) <= 20) {
    if (a.smile >= 0.55) return 'SMILE';
    if (a.smile <= 0.2) return 'NEUTRAL';
    return 'FRONT';
  }
  return a.smile >= 0.55 ? 'SMILE' : 'OTHER';
}
