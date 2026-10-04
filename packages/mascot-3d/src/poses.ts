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
  /** Wrist given relative to the head (face-touching gestures); the body adds the neck offset. */
  head?: boolean;
}

export interface BodyPose {
  /** Character's right arm (screen left, x < 0). */
  right: ArmPose;
  left: ArmPose;
  /** Raise the shoulders (shrug / tension), in units. */
  shrug?: number;
}

export type PoseKey =
  | 'pockets'
  | 'relaxed'
  | 'wave'
  | 'belly'
  | 'fists'
  | 'cheeks'
  | 'heart'
  | 'crossed'
  | 'thumbsUp'
  | 'think'
  | 'facepalm'
  | 'slump'
  | 'shrug'
  | 'peace'
  | 'salute'
  | 'ok'
  | 'thumbsDown'
  | 'shush'
  | 'kissBlow'
  | 'flex'
  | 'pray'
  | 'point'
  | 'scared'
  | 'hug'
  | 'clap'
  | 'handsUp'
  | 'akimbo'
  | 'headScratch'
  | 'coverMouth'
  | 'chinRest'
  | 'push'
  | 'fan'
  | 'bellyRub'
  | 'mindblown'
  | 'pointUp';

/** Mirrors a right-arm pose to the left arm. */
const mirror = (a: ArmPose): ArmPose => ({
  wrist: [-a.wrist[0], a.wrist[1], a.wrist[2]],
  pole: [-a.pole[0], a.pole[1], a.pole[2]],
  fingers: [-a.fingers[0], a.fingers[1], a.fingers[2]],
  palm: [-a.palm[0], a.palm[1], a.palm[2]],
  hand: a.hand,
  head: a.head,
});
const sym = (a: ArmPose, shrug?: number): BodyPose => ({ right: a, left: mirror(a), shrug });

const POCKET: ArmPose = { wrist: [-0.36, -3.56, 0.3], pole: [-1, -0.1, -0.7], fingers: [0.6, -0.6, 0.2], palm: [0, 0, -1], hand: null };
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
    right: { wrist: [-1.0, -1.16, 0.46], pole: [-0.25, -1, 0.45], fingers: [0.14, 1, 0.04], palm: [1, 0, -0.28], hand: 'cup', head: true },
    left: mirror({ wrist: [-1.0, -1.16, 0.46], pole: [-0.25, -1, 0.45], fingers: [0.14, 1, 0.04], palm: [1, 0, -0.28], hand: 'cup', head: true }),
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
    right: { wrist: [-0.42, -1.58, 0.74], pole: [0, -1, 0.4], fingers: [0.24, 1, 0.12], palm: [0.72, 0, -0.68], hand: 'point', head: true },
    left: { wrist: [-0.52, -2.82, 0.96], pole: [0.6, -1, 0.3], fingers: [-0.7, 0.25, 0.2], palm: [0, 0.3, -0.95], hand: 'grip' },
  },
  facepalm: {
    right: { wrist: [-0.46, -0.74, 1.12], pole: [-0.5, -1, 0.3], fingers: [0.34, 1, -0.06], palm: [0, 0.04, -1], hand: 'flat', head: true },
    left: mirror(HANG),
  },
  shrug: sym({ wrist: [-1.3, -2.8, 0.8], pole: [-0.7, -1, -0.4], fingers: [-0.5, 0.15, 0.85], palm: [0.1, 1, 0.1], hand: 'open' }, 0.16),
  peace: { right: { wrist: [-0.98, -1.25, 0.7], pole: [-0.8, -1, 0], fingers: [0.12, 1, 0.08], palm: [0, 0, 1], hand: 'peace' }, left: mirror(POCKET) },
  salute: { right: { wrist: [-0.98, -0.18, 0.72], pole: [-1, -0.35, 0.3], fingers: [0.72, 0.6, 0.1], palm: [0.15, -0.35, 0.92], hand: 'flat', head: true }, left: mirror(POCKET) },
  ok: { right: { wrist: [-0.78, -2.0, 1.0], pole: [-0.7, -1, 0], fingers: [0.1, 1, 0.2], palm: [0, 0, 1], hand: 'ok' }, left: mirror(POCKET) },
  thumbsDown: { right: { wrist: [-0.86, -2.3, 0.96], pole: [-0.8, -1, 0], fingers: [0.72, 0, 0.69], palm: [-0.69, 0, 0.72], hand: 'thumbsUp' }, left: mirror(POCKET) },
  shush: { right: { wrist: [-0.2, -1.22, 1.0], pole: [-0.4, -1, 0.3], fingers: [0.08, 1, 0.05], palm: [0.25, 0, -1], hand: 'point', head: true }, left: mirror(POCKET) },
  kissBlow: { right: { wrist: [-0.3, -1.2, 1.08], pole: [-0.5, -1, 0.3], fingers: [0.15, 1, 0.3], palm: [0, -0.15, 1], hand: 'flat', head: true }, left: mirror(POCKET) },
  flex: sym({ wrist: [-1.85, -0.8, 0.15], pole: [-1, -0.15, 0], fingers: [0.35, 1, 0], palm: [1, 0, 0], hand: 'fist' }, 0.06),
  pray: sym({ wrist: [-0.13, -2.35, 1.12], pole: [-0.8, -1, 0], fingers: [0.04, 1, 0.12], palm: [1, 0, 0], hand: 'flat' }),
  point: { right: { wrist: [-0.55, -1.9, 1.45], pole: [-0.7, -1, 0], fingers: [0.1, 0.15, 1], palm: [0, -1, 0], hand: 'point' }, left: mirror(POCKET) },
  scared: sym({ wrist: [-0.72, -1.35, 1.12], pole: [-0.5, -1, 0.2], fingers: [0.12, 1, 0.08], palm: [0, 0, 1], hand: 'open' }, 0.14),
  hug: {
    right: { wrist: [0.92, -2.25, 0.78], pole: [-0.3, -1, 0.6], fingers: [0.35, 0.25, -0.9], palm: [-0.4, 0, -0.9], hand: 'grip' },
    left: { wrist: [-0.92, -2.05, 0.9], pole: [0.3, -1, 0.6], fingers: [-0.35, 0.25, -0.9], palm: [0.4, 0, -0.9], hand: 'grip' },
    shrug: 0.12,
  },
  clap: sym({ wrist: [-0.1, -1.95, 1.25], pole: [-0.8, -1, 0], fingers: [0.12, 1, 0.12], palm: [1, 0, 0], hand: 'flat' }),
  handsUp: sym({ wrist: [-1.05, 0.75, 0.6], pole: [-1, -0.3, 0], fingers: [0.1, 1, 0.15], palm: [1, 0, -0.1], hand: 'fist' }),
  akimbo: sym({ wrist: [-1.08, -3.55, 0.2], pole: [-1, 0, 0.25], fingers: [0.35, -0.7, -0.3], palm: [1, 0, 0.1], hand: 'fist' }),
  headScratch: { right: { wrist: [-1.05, -0.2, 0.05], pole: [-1, -0.35, 0.2], fingers: [0.35, 1, -0.2], palm: [1, 0, 0], hand: 'relaxed', head: true }, left: mirror(POCKET) },
  coverMouth: { right: { wrist: [-0.36, -1.24, 1.06], pole: [-0.5, -1, 0.3], fingers: [0.32, 1, 0.04], palm: [0, 0, -1], hand: 'flat', head: true }, left: mirror(POCKET) },
  chinRest: {
    right: { wrist: [-0.26, -1.62, 0.78], pole: [0, -1, 0.4], fingers: [0.25, 1, 0.25], palm: [0.6, 0.5, -0.6], hand: 'cup', head: true },
    left: { wrist: [-0.52, -2.82, 0.96], pole: [0.6, -1, 0.3], fingers: [-0.7, 0.25, 0.2], palm: [0, 0.3, -0.95], hand: 'grip' },
  },
  push: { right: { wrist: [-0.72, -1.6, 1.4], pole: [-0.7, -1, 0], fingers: [0.05, 1, 0.1], palm: [0, 0, 1], hand: 'flat' }, left: mirror(POCKET) },
  fan: { right: { wrist: [-0.98, -0.95, 0.85], pole: [-0.7, -1, 0.2], fingers: [0.2, 1, 0.1], palm: [0.65, 0, 0.75], hand: 'open', head: true }, left: mirror(POCKET) },
  bellyRub: { right: { wrist: [-0.55, -3.1, 0.82], pole: [-1, -0.2, -0.2], fingers: [0.9, -0.2, 0.1], palm: [0, 0, -1], hand: 'flat' }, left: mirror(POCKET) },
  mindblown: sym({ wrist: [-1.02, 0.05, 0.25], pole: [-1, -0.4, 0.2], fingers: [0.3, 1, 0], palm: [1, 0, 0.1], hand: 'open', head: true }, 0.1),
  pointUp: { right: { wrist: [-1.1, -1.05, 0.72], pole: [-0.8, -1, 0], fingers: [0.05, 1, 0.05], palm: [0, 0, 1], hand: 'point' }, left: mirror(POCKET) },
};

/** Without a front pocket, "hands in pockets" arms hang relaxed instead. */
export function withoutPockets(pose: BodyPose): BodyPose {
  const fix = (a: ArmPose, side: -1 | 1): ArmPose => (a === POCKET || (a.hand === null && a.wrist[1] < -3.2) ? (side < 0 ? HANG : mirror(HANG)) : a);
  return { ...pose, right: fix(pose.right, -1), left: fix(pose.left, 1) };
}

export function bodyPose(key: PoseKey, hasPocket = true): BodyPose {
  const pose = POSES[key];
  return hasPocket ? pose : withoutPockets(pose);
}
