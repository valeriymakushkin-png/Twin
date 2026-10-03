import type { StickerEmotion } from '@mascot/shared';

export type MouthKind = 'grin' | 'smile' | 'laugh' | 'o' | 'wail' | 'grit' | 'smirk' | 'flat' | 'pout';
export type Emotion = StickerEmotion | 'neutral';

export interface Expression {
  /** 0 = wide open … 1 = closed. */
  upperLid: number;
  /** 0 = relaxed … 1 = pushed up (smile squint). */
  lowerLid: number;
  /** Lid tilt in radians; + = inner corners down (angry), − = inner corners up (sad). */
  lidTilt: number;
  /** Vertical brow offsets [left, right] in face units. */
  browLift: [number, number];
  /** Brow rotation [left, right] in radians; + = inner end down. */
  browAngle: [number, number];
  mouth: MouthKind;
  /** Mouth width multiplier. */
  mouthWidth: number;
  /** Gaze in radians [yaw, pitch]. */
  gaze: [number, number];
  blush: number;
  heartEyes?: boolean;
  tears?: boolean;
  sunglasses?: boolean;
  /** Extra props around the character. */
  extra?: 'hearts' | 'sweat' | 'steam' | 'question' | 'sparkles';
  /** Hand pose. */
  hand?: 'chin' | 'face';
  /** Head tilt (roll, radians) and nod (pitch). */
  headTilt: number;
  headNod: number;
}

const BASE: Expression = {
  upperLid: 0.12,
  lowerLid: 0.12,
  lidTilt: 0,
  browLift: [0, 0],
  browAngle: [0, 0],
  mouth: 'smile',
  mouthWidth: 1,
  gaze: [0, 0],
  blush: 0.25,
  headTilt: 0,
  headNod: 0,
};

const PRESETS: Record<Emotion, Partial<Expression>> = {
  neutral: { mouth: 'flat', upperLid: 0.18, lowerLid: 0.08, blush: 0.15 },
  happy: { mouth: 'grin', upperLid: 0.14, lowerLid: 0.2, browLift: [0.025, 0.025], blush: 0.32, headTilt: 0.04 },
  laughing: {
    mouth: 'laugh',
    upperLid: 0.92,
    lowerLid: 0.55,
    browLift: [0.05, 0.05],
    browAngle: [-0.12, -0.12],
    blush: 0.45,
    extra: 'sparkles',
    headTilt: -0.08,
    headNod: -0.08,
  },
  crying: {
    mouth: 'wail',
    upperLid: 0.42,
    lowerLid: 0.25,
    lidTilt: -0.3,
    browLift: [0.03, 0.03],
    browAngle: [-0.42, -0.42],
    tears: true,
    blush: 0.35,
    headNod: 0.06,
  },
  angry: {
    mouth: 'grit',
    upperLid: 0.38,
    lowerLid: 0.2,
    lidTilt: 0.34,
    browLift: [-0.055, -0.055],
    browAngle: [0.5, 0.5],
    blush: 0.5,
    extra: 'steam',
    headNod: 0.07,
  },
  shocked: {
    mouth: 'o',
    upperLid: 0,
    lowerLid: 0,
    browLift: [0.09, 0.09],
    browAngle: [-0.12, -0.12],
    extra: 'sweat',
    blush: 0.1,
    headNod: -0.04,
  },
  love: { mouth: 'smile', mouthWidth: 0.9, heartEyes: true, upperLid: 0.1, lowerLid: 0.22, blush: 0.65, extra: 'hearts', headTilt: 0.12 },
  sigma: {
    mouth: 'smirk',
    upperLid: 0.46,
    lowerLid: 0.18,
    browLift: [-0.02, 0.05],
    browAngle: [0.12, -0.1],
    gaze: [-0.12, 0],
    blush: 0.08,
    headNod: -0.05,
    headTilt: -0.05,
  },
  cool: { mouth: 'smirk', sunglasses: true, browLift: [0, 0.02], blush: 0.12, headTilt: -0.06 },
  thinking: {
    mouth: 'pout',
    upperLid: 0.2,
    gaze: [0.22, 0.2],
    browLift: [0.02, 0.07],
    browAngle: [0.1, -0.2],
    hand: 'chin',
    extra: 'question',
    blush: 0.15,
    headTilt: 0.1,
  },
  facepalm: {
    mouth: 'flat',
    upperLid: 1,
    lowerLid: 0.2,
    browAngle: [-0.3, -0.3],
    hand: 'face',
    extra: 'sweat',
    blush: 0.2,
    headNod: 0.14,
  },
};

export function expressionFor(emotion: Emotion = 'happy'): Expression {
  return { ...BASE, ...PRESETS[emotion] };
}
