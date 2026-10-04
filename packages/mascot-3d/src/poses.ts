import type { HandPose } from './hands';
import type { Vec3 } from './sdf';

/**
 * Upper-body poses. Coordinates are in character space (head centre at the origin, +Z towards
 * the viewer). Each arm gives a wrist target solved with two-bone IK, an elbow pole hint, and
 * the hand orientation (finger direction + palm normal). `hand: null` hides the hand (in a
 * pocket or tucked under the other arm).
 */
export interface ArmPose {
  wrist: Vec3;
  pole: Vec3;
  fingers: Vec3;
  palm: Vec3;
  hand: HandPose | null;
}

export interface BodyPose {
  /** Character's right arm (screen left, x < 0). */
  right: ArmPose;
  left: ArmPose;
  /** Raise the shoulders (shrug / tension), in units. */
  shrug?: number;
}

export type PoseKey = 'pockets' | 'relaxed' | 'wave' | 'belly' | 'fists' | 'cheeks' | 'heart' | 'crossed' | 'thumbsUp' | 'think' | 'facepalm' | 'slump';

/** Mirrors a right-arm pose to the left arm. */
const mirror = (a: ArmPose): ArmPose => ({
  wrist: [-a.wrist[0], a.wrist[1], a.wrist[2]],
  pole: [-a.pole[0], a.pole[1], a.pole[2]],
  fingers: [-a.fingers[0], a.fingers[1], a.fingers[2]],
  palm: [-a.palm[0], a.palm[1], a.palm[2]],
  hand: a.hand,
});

const POCKET: ArmPose = { wrist: [-0.4, -3.52, 0.46], pole: [-1, -0.1, -0.7], fingers: [0.6, -0.6, 0.2], palm: [0, 0, -1], hand: null };
const HANG: ArmPose = { wrist: [-1.42, -4.2, 0.18], pole: [-0.2, 0, -1], fingers: [0.06, -1, 0.12], palm: [1, 0, 0.15], hand: 'relaxed' };

const POSES: Record<PoseKey, BodyPose> = {
  pockets: { right: POCKET, left: mirror(POCKET) },
  relaxed: { right: HANG, left: mirror(HANG) },
  slump: {
    right: { ...HANG, wrist: [-1.3, -4.3, 0.28] },
    left: mirror({ ...HANG, wrist: [-1.3, -4.3, 0.28] }),
    shrug: -0.06,
  },
  wave: {
    right: { wrist: [-1.52, -0.42, 0.42], pole: [-0.45, -1, 0.35], fingers: [0.12, 1, 0.04], palm: [0.06, 0.02, 1], hand: 'wave' },
    left: mirror(POCKET),
  },
  belly: {
    right: { wrist: [-0.66, -3.02, 0.82], pole: [-1, -0.2, -0.3], fingers: [0.85, -0.42, 0.15], palm: [0.1, 0, -1], hand: 'grip' },
    left: mirror({ wrist: [-0.66, -3.02, 0.82], pole: [-1, -0.2, -0.3], fingers: [0.85, -0.42, 0.15], palm: [0.1, 0, -1], hand: 'grip' }),
  },
  fists: {
    right: { wrist: [-0.74, -2.2, 0.98], pole: [-0.7, -1, -0.1], fingers: [0.12, 1, 0.25], palm: [1, 0, -0.1], hand: 'fist' },
    left: mirror({ wrist: [-0.74, -2.2, 0.98], pole: [-0.7, -1, -0.1], fingers: [0.12, 1, 0.25], palm: [1, 0, -0.1], hand: 'fist' }),
    shrug: 0.08,
  },
  cheeks: {
    right: { wrist: [-1.0, -1.16, 0.46], pole: [-0.25, -1, 0.45], fingers: [0.14, 1, 0.04], palm: [1, 0, -0.28], hand: 'cup' },
    left: mirror({ wrist: [-1.0, -1.16, 0.46], pole: [-0.25, -1, 0.45], fingers: [0.14, 1, 0.04], palm: [1, 0, -0.28], hand: 'cup' }),
    shrug: 0.1,
  },
  heart: {
    right: { wrist: [-0.36, -2.48, 1.06], pole: [-0.7, -1, 0.1], fingers: [0.55, 0.83, 0.1], palm: [0.1, -0.05, 1], hand: 'heart' },
    left: mirror({ wrist: [-0.36, -2.48, 1.06], pole: [-0.7, -1, 0.1], fingers: [0.55, 0.83, 0.1], palm: [0.1, -0.05, 1], hand: 'heart' }),
  },
  crossed: {
    right: { wrist: [0.58, -2.78, 0.86], pole: [-0.35, -1, 0.55], fingers: [1, -0.1, -0.3], palm: [0, 0, -1], hand: null },
    left: { wrist: [-0.58, -2.52, 1.0], pole: [0.35, -1, 0.55], fingers: [-1, -0.1, -0.3], palm: [0, 0, -1], hand: null },
  },
  thumbsUp: {
    right: { wrist: [-0.86, -2.2, 0.96], pole: [-0.8, -1, 0], fingers: [0.72, 0.05, 0.69], palm: [0.69, 0, -0.72], hand: 'thumbsUp' },
    left: mirror(POCKET),
  },
  think: {
    right: { wrist: [-0.42, -1.58, 0.74], pole: [0, -1, 0.4], fingers: [0.24, 1, 0.12], palm: [0.72, 0, -0.68], hand: 'point' },
    left: { wrist: [-0.52, -2.82, 0.96], pole: [0.6, -1, 0.3], fingers: [-0.7, 0.25, 0.2], palm: [0, 0.3, -0.95], hand: 'grip' },
  },
  facepalm: {
    right: { wrist: [-0.46, -0.74, 1.12], pole: [-0.5, -1, 0.3], fingers: [0.34, 1, -0.06], palm: [0, 0.04, -1], hand: 'flat' },
    left: mirror(HANG),
  },
};

/** Pose for a garment: without a front pocket, "hands in pockets" arms hang relaxed instead. */
export function bodyPose(key: PoseKey, hasPocket = true): BodyPose {
  const pose = POSES[key];
  if (hasPocket) return pose;
  const fix = (a: ArmPose, side: -1 | 1): ArmPose => (a === POCKET || (a.hand === null && a.wrist[1] < -3.2) ? (side < 0 ? HANG : mirror(HANG)) : a);
  return { ...pose, right: fix(pose.right, -1), left: fix(pose.left, 1) };
}
