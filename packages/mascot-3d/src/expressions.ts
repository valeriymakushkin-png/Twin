import type { StickerEmotion } from '@mascot/shared';
import type { PoseKey } from './poses';

export type MouthKind = 'grin' | 'smile' | 'laugh' | 'o' | 'wail' | 'grit' | 'smirk' | 'flat' | 'pout' | 'tongue' | 'kiss' | 'frown' | 'wavy' | 'cat' | 'yawn';
export type EyeKind = 'normal' | 'heart' | 'star' | 'dollar' | 'spiral' | 'x' | 'puppy';
export type PropKind = 'hearts' | 'sweat' | 'steam' | 'question' | 'sparkles' | 'zzz' | 'exclaim' | 'stars' | 'money' | 'snow' | 'bulb' | 'confetti' | 'blush';
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
  /** Stylised iris (stars, dollar signs, spirals, X, puppy eyes). */
  eyes?: EyeKind;
  /** Closed eyes read as happy ^ ^ arcs (otherwise by mouth). */
  closedHappy?: boolean;
  /** Wink: closes the eye on this screen side (-1 left, 1 right). */
  wink?: -1 | 1;
  /** Skin tint [colour, amount] (sick green, cold blue, furious red, pale). */
  skinTint?: [string, number];
  tears?: boolean;
  sunglasses?: boolean;
  /** Extra props around the character. */
  extra?: PropKind;
  /** Upper-body pose (arms and hands). */
  pose: PoseKey;
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
  pose: 'pockets',
};

const PRESETS_BASE = {
  neutral: { mouth: 'flat', upperLid: 0.18, lowerLid: 0.08, blush: 0.15, pose: 'pockets' },
  happy: { mouth: 'grin', upperLid: 0.14, lowerLid: 0.2, browLift: [0.025, 0.025], blush: 0.32, headTilt: 0.04, pose: 'wave' },
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
    pose: 'belly',
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
    pose: 'slump',
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
    pose: 'fists',
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
    pose: 'cheeks',
  },
  love: { mouth: 'smile', mouthWidth: 0.9, heartEyes: true, upperLid: 0.1, lowerLid: 0.22, blush: 0.65, extra: 'hearts', headTilt: 0.12, pose: 'heart' },
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
    pose: 'crossed',
  },
  cool: { mouth: 'smirk', sunglasses: true, browLift: [0, 0.02], blush: 0.12, headTilt: -0.06, pose: 'thumbsUp' },
  thinking: {
    mouth: 'pout',
    upperLid: 0.2,
    gaze: [0.22, 0.2],
    browLift: [0.02, 0.07],
    browAngle: [0.1, -0.2],
    pose: 'think',
    extra: 'question',
    blush: 0.15,
    headTilt: 0.1,
  },
  facepalm: {
    mouth: 'flat',
    upperLid: 1,
    lowerLid: 0.2,
    browAngle: [-0.3, -0.3],
    pose: 'facepalm',
    extra: 'sweat',
    blush: 0.2,
    headNod: 0.14,
  },
} satisfies Partial<Record<Emotion, Partial<Expression>>>;

const PALE: [string, number] = ['#d9e6f2', 0.28];

const MORE: Record<Exclude<Emotion, keyof typeof PRESETS_BASE>, Partial<Expression>> = {
  joy: { mouth: 'laugh', upperLid: 0.92, lowerLid: 0.55, closedHappy: true, tears: true, blush: 0.5, browLift: [0.05, 0.05], headTilt: -0.08, pose: 'belly' },
  rofl: { mouth: 'laugh', upperLid: 0.95, lowerLid: 0.6, closedHappy: true, tears: true, blush: 0.55, headTilt: 0.34, headNod: -0.06, pose: 'belly' },
  wink: { mouth: 'grin', wink: 1, lowerLid: 0.25, browLift: [0.04, -0.02], blush: 0.3, headTilt: 0.06, pose: 'point' },
  kiss: { mouth: 'kiss', wink: 1, blush: 0.6, browLift: [0.03, 0.03], extra: 'hearts', headTilt: 0.1, pose: 'kissBlow' },
  shy: { mouth: 'smile', mouthWidth: 0.65, gaze: [0.12, -0.28], upperLid: 0.3, blush: 0.85, browAngle: [-0.12, -0.12], extra: 'blush', headTilt: 0.14, headNod: 0.06, pose: 'pray' },
  embarrassed: { mouth: 'wavy', blush: 0.7, browAngle: [-0.22, -0.22], browLift: [0.03, 0.03], extra: 'sweat', headTilt: 0.08, pose: 'headScratch' },
  nervous: { mouth: 'wavy', upperLid: 0.05, browAngle: [-0.34, -0.34], browLift: [0.05, 0.05], extra: 'sweat', blush: 0.2, pose: 'pray' },
  scared: { mouth: 'wavy', upperLid: 0, lowerLid: 0, browAngle: [-0.4, -0.4], browLift: [0.08, 0.08], skinTint: ['#cfdcf0', 0.18], pose: 'scared' },
  terrified: { mouth: 'wail', upperLid: 0, lowerLid: 0, browAngle: [-0.45, -0.45], browLift: [0.1, 0.1], skinTint: PALE, extra: 'exclaim', pose: 'cheeks' },
  disgusted: { mouth: 'grit', mouthWidth: 0.85, upperLid: 0.45, lowerLid: 0.42, browAngle: [0.3, 0.3], browLift: [-0.03, -0.03], gaze: [-0.3, 0], skinTint: ['#b9d6a3', 0.12], headTilt: -0.08, pose: 'push' },
  sick: { mouth: 'frown', upperLid: 0.48, lowerLid: 0.15, browAngle: [-0.25, -0.25], skinTint: ['#9fcf88', 0.32], extra: 'sweat', blush: 0, headTilt: 0.1, pose: 'bellyRub' },
  sleepy: { mouth: 'o', mouthWidth: 0.55, upperLid: 0.68, lowerLid: 0.2, browAngle: [-0.1, -0.1], extra: 'zzz', blush: 0.1, headTilt: 0.12, headNod: 0.06, pose: 'relaxed' },
  sleeping: { mouth: 'flat', upperLid: 1, lowerLid: 0.2, extra: 'zzz', blush: 0.15, headTilt: 0.16, headNod: 0.16, pose: 'slump' },
  yawning: { mouth: 'yawn', upperLid: 1, lowerLid: 0.4, browLift: [0.04, 0.04], browAngle: [-0.15, -0.15], headNod: -0.12, pose: 'relaxed' },
  bored: { mouth: 'flat', upperLid: 0.55, gaze: [0.22, 0.1], browLift: [-0.01, -0.01], blush: 0.05, headTilt: 0.14, pose: 'chinRest' },
  confused: { mouth: 'wavy', browLift: [0.09, -0.02], browAngle: [-0.12, 0.2], gaze: [0.15, 0.15], extra: 'question', headTilt: 0.14, pose: 'headScratch' },
  suspicious: { mouth: 'flat', upperLid: 0.5, lowerLid: 0.38, gaze: [-0.38, 0], browAngle: [0.25, 0.1], browLift: [-0.02, 0.02], headTilt: -0.06, pose: 'crossed' },
  smug: { mouth: 'smirk', upperLid: 0.45, lowerLid: 0.2, browLift: [0, 0.06], headNod: -0.07, headTilt: -0.06, pose: 'akimbo' },
  proud: { mouth: 'smile', upperLid: 0.25, lowerLid: 0.3, browLift: [0.03, 0.03], headNod: -0.12, extra: 'sparkles', pose: 'flex' },
  celebrate: { mouth: 'laugh', upperLid: 0.9, lowerLid: 0.5, closedHappy: true, browLift: [0.06, 0.06], blush: 0.4, extra: 'confetti', headNod: -0.08, pose: 'handsUp' },
  excited: { mouth: 'grin', eyes: 'star', browLift: [0.07, 0.07], blush: 0.45, extra: 'sparkles', pose: 'fists' },
  starstruck: { mouth: 'o', eyes: 'star', upperLid: 0, browLift: [0.09, 0.09], blush: 0.35, extra: 'stars', pose: 'cheeks' },
  mindblown: { mouth: 'o', upperLid: 0, lowerLid: 0, browLift: [0.1, 0.1], extra: 'exclaim', blush: 0.1, pose: 'mindblown' },
  sad: { mouth: 'frown', upperLid: 0.42, lowerLid: 0.15, lidTilt: -0.3, browAngle: [-0.42, -0.42], browLift: [0.02, 0.02], tears: true, blush: 0.2, headNod: 0.1, pose: 'slump' },
  disappointed: { mouth: 'frown', mouthWidth: 0.8, upperLid: 0.55, browAngle: [-0.25, -0.25], blush: 0.1, headNod: 0.14, pose: 'relaxed' },
  pleading: { mouth: 'frown', mouthWidth: 0.55, eyes: 'puppy', upperLid: 0, browAngle: [-0.48, -0.48], browLift: [0.06, 0.06], blush: 0.4, headTilt: 0.1, pose: 'pray' },
  grateful: { mouth: 'smile', upperLid: 1, lowerLid: 0.35, closedHappy: true, browAngle: [-0.15, -0.15], blush: 0.4, extra: 'sparkles', headNod: 0.1, pose: 'pray' },
  shrug: { mouth: 'smirk', browLift: [0.07, 0.07], browAngle: [-0.1, -0.1], upperLid: 0.2, headTilt: 0.1, pose: 'shrug' },
  eyeroll: { mouth: 'flat', gaze: [0.05, 0.5], upperLid: 0.32, browLift: [0.03, 0.03], headTilt: -0.08, pose: 'akimbo' },
  annoyed: { mouth: 'flat', upperLid: 0.5, lowerLid: 0.2, browAngle: [0.28, 0.28], browLift: [-0.03, -0.03], gaze: [0.2, 0], pose: 'crossed' },
  furious: { mouth: 'grit', upperLid: 0.35, lowerLid: 0.25, lidTilt: 0.42, browLift: [-0.06, -0.06], browAngle: [0.58, 0.58], skinTint: ['#ff4a3a', 0.28], blush: 0.6, extra: 'steam', headNod: 0.08, pose: 'fists' },
  evil: { mouth: 'smirk', mouthWidth: 1.25, upperLid: 0.45, lowerLid: 0.3, lidTilt: 0.3, browAngle: [0.48, 0.48], browLift: [-0.02, -0.02], headNod: 0.08, pose: 'pray' },
  crazy: { mouth: 'tongue', wink: -1, browLift: [0.08, -0.02], blush: 0.35, headTilt: 0.16, pose: 'peace' },
  silly: { mouth: 'tongue', upperLid: 0.5, lowerLid: 0.45, browLift: [0.04, 0.04], blush: 0.35, headTilt: -0.08, pose: 'peace' },
  yummy: { mouth: 'tongue', upperLid: 1, lowerLid: 0.35, closedHappy: true, blush: 0.45, headTilt: 0.08, pose: 'bellyRub' },
  money: { mouth: 'grin', eyes: 'dollar', browLift: [0.05, 0.05], blush: 0.25, extra: 'money', pose: 'thumbsUp' },
  dead: { mouth: 'tongue', eyes: 'x', upperLid: 0, browAngle: [-0.1, -0.1], skinTint: PALE, blush: 0, headTilt: 0.22, headNod: 0.08, pose: 'slump' },
  dizzy: { mouth: 'wavy', eyes: 'spiral', upperLid: 0, browAngle: [-0.15, 0.1], extra: 'stars', headTilt: 0.2, pose: 'relaxed' },
  cold: { mouth: 'grit', upperLid: 0.25, browAngle: [-0.3, -0.3], skinTint: ['#8fb8ff', 0.3], blush: 0, extra: 'snow', pose: 'hug' },
  hot: { mouth: 'tongue', upperLid: 0.4, lowerLid: 0.2, browAngle: [-0.2, -0.2], skinTint: ['#ff6b4a', 0.22], blush: 0.6, extra: 'sweat', pose: 'fan' },
  shush: { mouth: 'pout', mouthWidth: 0.8, gaze: [-0.2, 0], browLift: [0.03, -0.01], upperLid: 0.25, pose: 'shush' },
  salute: { mouth: 'smile', browLift: [0.02, 0.02], upperLid: 0.15, headNod: -0.04, pose: 'salute' },
  peace: { mouth: 'grin', lowerLid: 0.25, browLift: [0.03, 0.03], blush: 0.3, headTilt: 0.08, pose: 'peace' },
  ok: { mouth: 'smile', lowerLid: 0.22, browLift: [0.02, 0.02], pose: 'ok' },
  thumbsdown: { mouth: 'frown', upperLid: 0.35, browAngle: [0.15, 0.15], headTilt: -0.06, pose: 'thumbsDown' },
  clap: { mouth: 'grin', upperLid: 0.3, lowerLid: 0.4, browLift: [0.04, 0.04], blush: 0.35, pose: 'clap' },
  hug: { mouth: 'smile', upperLid: 1, lowerLid: 0.35, closedHappy: true, blush: 0.55, extra: 'hearts', headTilt: 0.12, pose: 'hug' },
  bye: { mouth: 'smile', lowerLid: 0.2, browLift: [0.03, 0.03], blush: 0.25, headTilt: 0.06, pose: 'wave' },
  idea: { mouth: 'o', mouthWidth: 0.7, upperLid: 0, browLift: [0.08, 0.08], extra: 'bulb', gaze: [0, 0.18], pose: 'pointUp' },
  gasp: { mouth: 'o', mouthWidth: 0.75, upperLid: 0, lowerLid: 0, browLift: [0.08, 0.08], pose: 'coverMouth' },
  oops: { mouth: 'grit', mouthWidth: 0.9, browAngle: [-0.25, -0.25], browLift: [0.05, 0.05], extra: 'sweat', blush: 0.4, pose: 'coverMouth' },
  party: { mouth: 'laugh', upperLid: 0.9, lowerLid: 0.5, closedHappy: true, blush: 0.4, extra: 'confetti', pose: 'handsUp' },
};

export function expressionFor(emotion: Emotion = 'happy'): Expression {
  const preset = (PRESETS_BASE as Partial<Record<Emotion, Partial<Expression>>>)[emotion] ?? MORE[emotion as keyof typeof MORE] ?? {};
  return { ...BASE, ...preset };
}
