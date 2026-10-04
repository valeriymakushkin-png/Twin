import type { DanceId } from '@mascot/shared';
import type { HandPose } from './hands';
import type { ArmPose, BodyPose } from './poses';
import type { Vec3 } from './sdf';

/**
 * Original dance loops for the live viewer (upper body: arms, hands, torso bounce and twist,
 * head groove). Each dance is a short list of key poses played on the beat with eased
 * transitions; all moves are generic dance vocabulary, choreographed here from scratch.
 */
export interface DanceFrame {
  pose: BodyPose;
  /** Vertical bounce (units). */
  bob: number;
  /** Torso twist around the vertical axis (radians). */
  twist: number;
  /** Side lean (radians). */
  lean: number;
  headTilt: number;
  headNod: number;
  headTurn: number;
}

interface Arm {
  wrist: Vec3;
  hand: HandPose | null;
  fingers?: Vec3;
  palm?: Vec3;
  pole?: Vec3;
}

interface Key {
  r: Arm;
  l: Arm;
  twist?: number;
  lean?: number;
  tilt?: number;
  nod?: number;
  turn?: number;
  shrug?: number;
}

export interface DanceDef {
  id: DanceId;
  bpm: number;
  /** Bounce amplitude per beat. */
  bounce: number;
  /** Beats per key (0.5 = two keys per beat). */
  beatsPerKey: number;
  /** "snap" moves fast then holds (robot); "smooth" eases in and out. */
  motion: 'smooth' | 'snap';
  keys: Key[];
}

/* Arm helpers (right arm, screen left, x < 0); mirrorArm() makes the left one. */
const fist = (wrist: Vec3, fingers: Vec3 = [0.1, 1, 0.25]): Arm => ({ wrist, hand: 'fist', fingers, palm: [1, 0, -0.1] });
const open = (wrist: Vec3, fingers: Vec3 = [0.1, 1, 0.05], palm: Vec3 = [0, 0, 1]): Arm => ({ wrist, hand: 'wave', fingers, palm });
const flat = (wrist: Vec3, fingers: Vec3, palm: Vec3): Arm => ({ wrist, hand: 'flat', fingers, palm });
const point = (wrist: Vec3, fingers: Vec3, palm: Vec3 = [0, -1, 0]): Arm => ({ wrist, hand: 'point', fingers, palm });
const pocket: Arm = { wrist: [-0.36, -3.56, 0.3], hand: null, pole: [-1, -0.1, -0.7] };

const flip = (v: Vec3): Vec3 => [-v[0], v[1], v[2]];
function mirrorArm(a: Arm): Arm {
  return { wrist: flip(a.wrist), hand: a.hand, fingers: a.fingers && flip(a.fingers), palm: a.palm && flip(a.palm), pole: a.pole && flip(a.pole) };
}
/** Same move on both arms. */
const both = (r: Arm, extra: Omit<Key, 'r' | 'l'> = {}): Key => ({ r, l: mirrorArm(r), ...extra });

export const DANCES: Record<DanceId, DanceDef> = {
  bounce: {
    id: 'bounce', bpm: 112, bounce: 0.09, beatsPerKey: 1, motion: 'smooth',
    keys: [
      { r: fist([-0.72, -1.55, 0.92]), l: mirrorArm(fist([-0.78, -2.65, 0.82])), twist: 0.08, tilt: 0.06 },
      { r: fist([-0.78, -2.65, 0.82]), l: mirrorArm(fist([-0.72, -1.55, 0.92])), twist: -0.08, tilt: -0.06 },
    ],
  },
  'wave-arms': {
    id: 'wave-arms', bpm: 96, bounce: 0.05, beatsPerKey: 1, motion: 'smooth',
    keys: [
      both(open([-1.0, 0.55, 0.35], [0.15, 1, 0], [0, 0, 1]), { tilt: 0 }),
      { r: open([-0.25, 0.7, 0.35], [0.5, 1, 0]), l: mirrorArm(open([-1.55, 0.2, 0.35], [-0.3, 1, 0])), tilt: -0.12, lean: -0.08, twist: -0.05 },
      both(open([-1.0, 0.55, 0.35], [0.15, 1, 0], [0, 0, 1]), { tilt: 0 }),
      { r: open([-1.55, 0.2, 0.35], [-0.3, 1, 0]), l: mirrorArm(open([-0.25, 0.7, 0.35], [0.5, 1, 0])), tilt: 0.12, lean: 0.08, twist: 0.05 },
    ],
  },
  disco: {
    id: 'disco', bpm: 118, bounce: 0.07, beatsPerKey: 1, motion: 'smooth',
    keys: [
      { r: point([-1.85, 0.05, 0.45], [-0.55, 1, 0.12]), l: mirrorArm(fist([-0.95, -3.0, 0.55])), twist: 0.16, tilt: 0.1, turn: -0.15 },
      { r: point([0.25, -3.05, 0.95], [0.55, -1, 0.25], [0, 0, 1]), l: mirrorArm(fist([-0.95, -3.0, 0.55])), twist: -0.12, tilt: -0.06, nod: 0.08, turn: 0.1 },
    ],
  },
  robot: {
    id: 'robot', bpm: 100, bounce: 0.0, beatsPerKey: 1, motion: 'snap',
    keys: [
      { r: flat([-1.62, -0.95, 0.3], [0, 1, 0], [0, 0, 1]), l: mirrorArm(flat([-0.95, -2.5, 1.3], [0, 0, 1], [0, -1, 0])), turn: 0.35 },
      { r: flat([-0.95, -2.5, 1.3], [0, 0, 1], [0, -1, 0]), l: mirrorArm(flat([-1.62, -0.95, 0.3], [0, 1, 0], [0, 0, 1])), turn: -0.35 },
      both(flat([-1.0, -2.45, 1.35], [0, 0, 1], [0, -1, 0]), { turn: 0, nod: 0.1 }),
      both(flat([-1.62, -0.95, 0.3], [0, 1, 0], [0, 0, 1]), { turn: 0, nod: -0.06 }),
    ],
  },
  clap: {
    id: 'clap', bpm: 120, bounce: 0.1, beatsPerKey: 0.5, motion: 'smooth',
    keys: [
      { r: flat([-0.06, -1.95, 1.3], [0.15, 1, 0.1], [1, 0, 0]), l: mirrorArm(flat([-0.06, -1.95, 1.3], [0.15, 1, 0.1], [1, 0, 0])), nod: 0.06 },
      both(open([-1.25, -1.75, 0.75], [-0.1, 1, 0.1], [0.4, 0, 0.9]), { nod: -0.04 }),
    ],
  },
  'raise-roof': {
    id: 'raise-roof', bpm: 104, bounce: 0.08, beatsPerKey: 0.5, motion: 'smooth',
    keys: [
      both(flat([-1.35, -0.55, 0.7], [0.45, 0.15, -0.88], [0, 1, 0]), { nod: 0.05 }),
      both(flat([-1.3, 0.15, 0.75], [0.45, 0.15, -0.88], [0, 1, 0]), { nod: -0.08 }),
    ],
  },
  shimmy: {
    id: 'shimmy', bpm: 128, bounce: 0.03, beatsPerKey: 0.5, motion: 'smooth',
    keys: [
      { ...both(fist([-1.12, -2.3, 0.9], [0.4, 0.9, 0.2])), twist: 0.14, shrug: 0.08, tilt: 0.05 },
      { ...both(fist([-1.12, -2.3, 0.9], [0.4, 0.9, 0.2])), twist: -0.14, shrug: -0.02, tilt: -0.05 },
    ],
  },
  swim: {
    id: 'swim', bpm: 100, bounce: 0.05, beatsPerKey: 1, motion: 'smooth',
    keys: [
      { r: flat([-0.45, -0.75, 1.45], [0.1, 0.3, 1], [0, -1, 0.1]), l: mirrorArm(flat([-1.35, -3.15, -0.3], [0, -0.4, -1], [0.3, -1, 0])), twist: -0.12, turn: 0.15 },
      { r: flat([-1.35, -3.15, -0.3], [0, -0.4, -1], [0.3, -1, 0]), l: mirrorArm(flat([-0.45, -0.75, 1.45], [0.1, 0.3, 1], [0, -1, 0.1])), twist: 0.12, turn: -0.15 },
    ],
  },
  'hands-up': {
    id: 'hands-up', bpm: 116, bounce: 0.1, beatsPerKey: 0.5, motion: 'smooth',
    keys: [
      both(fist([-1.0, 0.85, 0.65], [0.1, 1, 0.15]), { nod: -0.1 }),
      both(fist([-1.15, 0.3, 0.75], [0.1, 1, 0.15]), { nod: 0.04 }),
    ],
  },
  sprinkler: {
    id: 'sprinkler', bpm: 108, bounce: 0.05, beatsPerKey: 0.5, motion: 'snap',
    keys: [
      { r: flat([-1.9, -1.55, 0.7], [-0.9, 0.05, 0.4], [0, -1, 0]), l: mirrorArm(flat([-0.45, 0.3, -0.45], [0.6, 0.6, -0.4], [0.3, 0, 1])), twist: 0.2, turn: -0.25 },
      { r: flat([-1.45, -1.55, 1.35], [-0.5, 0.05, 0.85], [0, -1, 0]), l: mirrorArm(flat([-0.45, 0.3, -0.45], [0.6, 0.6, -0.4], [0.3, 0, 1])), twist: 0.08, turn: -0.1 },
      { r: flat([-0.6, -1.55, 1.75], [0, 0.05, 1], [0, -1, 0]), l: mirrorArm(flat([-0.45, 0.3, -0.45], [0.6, 0.6, -0.4], [0.3, 0, 1])), twist: -0.05, turn: 0.05 },
      { r: flat([-1.45, -1.55, 1.35], [-0.5, 0.05, 0.85], [0, -1, 0]), l: mirrorArm(flat([-0.45, 0.3, -0.45], [0.6, 0.6, -0.4], [0.3, 0, 1])), twist: 0.08, turn: -0.1 },
    ],
  },
  circles: {
    id: 'circles', bpm: 110, bounce: 0.06, beatsPerKey: 0.5, motion: 'smooth',
    keys: [
      { r: fist([-0.42, -2.15, 1.2]), l: mirrorArm(fist([-0.42, -1.45, 1.2])), twist: 0.06 },
      { r: fist([-0.75, -1.75, 1.1]), l: mirrorArm(fist([-0.1, -1.8, 1.25])), twist: 0.1 },
      { r: fist([-0.42, -1.45, 1.2]), l: mirrorArm(fist([-0.42, -2.15, 1.2])), twist: -0.06 },
      { r: fist([-0.1, -1.8, 1.25]), l: mirrorArm(fist([-0.75, -1.75, 1.1])), twist: -0.1 },
    ],
  },
  'point-sway': {
    id: 'point-sway', bpm: 102, bounce: 0.06, beatsPerKey: 1, motion: 'smooth',
    keys: [
      { r: point([-0.62, -1.25, 1.55], [0.1, 0.35, 1], [0, -1, 0]), l: pocketLeft(), twist: 0.18, tilt: 0.08, turn: 0.12 },
      { r: pocket, l: mirrorArm(point([-0.62, -1.25, 1.55], [0.1, 0.35, 1], [0, -1, 0])), twist: -0.18, tilt: -0.08, turn: -0.12 },
    ],
  },
};

function pocketLeft(): Arm {
  return mirrorArm(pocket);
}


export type { DanceId };

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const lerpV = (a: Vec3, b: Vec3, t: number): Vec3 => [lerp(a[0], b[0], t), lerp(a[1], b[1], t), lerp(a[2], b[2], t)];
const ease = (t: number) => t * t * (3 - 2 * t);

const DEFAULTS = {
  r: { pole: [-0.6, -1, 0.1] as Vec3, fingers: [0.1, 1, 0.2] as Vec3, palm: [0, 0, 1] as Vec3 },
  l: { pole: [0.6, -1, 0.1] as Vec3, fingers: [-0.1, 1, 0.2] as Vec3, palm: [0, 0, 1] as Vec3 },
};

function armAt(a: Arm, b: Arm, t: number, side: 'r' | 'l'): ArmPose {
  const d = DEFAULTS[side];
  return {
    wrist: lerpV(a.wrist, b.wrist, t),
    pole: lerpV(a.pole ?? d.pole, b.pole ?? d.pole, t),
    fingers: lerpV(a.fingers ?? d.fingers, b.fingers ?? d.fingers, t),
    palm: lerpV(a.palm ?? d.palm, b.palm ?? d.palm, t),
    hand: t < 0.5 ? a.hand : b.hand,
  };
}

/** Dance pose at time t (seconds). */
export function danceFrame(id: DanceId, t: number): DanceFrame {
  const dance = DANCES[id];
  const beat = (t * dance.bpm) / 60;
  const keyPos = beat / dance.beatsPerKey;
  const n = dance.keys.length;
  const k = Math.floor(keyPos) % n;
  const a = dance.keys[k]!;
  const b = dance.keys[(k + 1) % n]!;
  const raw = keyPos - Math.floor(keyPos);
  const f = dance.motion === 'snap' ? ease(Math.min(1, raw / 0.3)) : ease(raw);
  const num = (x: number | undefined, y: number | undefined) => lerp(x ?? 0, y ?? 0, f);
  const groove = Math.sin(beat * Math.PI * 2);
  return {
    pose: { right: armAt(a.r, b.r, f, 'r'), left: armAt(a.l, b.l, f, 'l'), shrug: num(a.shrug, b.shrug) },
    bob: -Math.abs(Math.sin(beat * Math.PI)) * dance.bounce,
    twist: num(a.twist, b.twist),
    lean: num(a.lean, b.lean),
    headTilt: num(a.tilt, b.tilt),
    headNod: num(a.nod, b.nod) + groove * 0.035,
    headTurn: num(a.turn, b.turn),
  };
}

