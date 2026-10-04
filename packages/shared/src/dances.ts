/**
 * Dance loops the live 3D character can perform (choreography lives in @mascot/mascot-3d).
 * Original, generic dance vocabulary — no third-party emote animations.
 */
export const DANCE_IDS = [
  'bounce',
  'wave-arms',
  'disco',
  'robot',
  'clap',
  'raise-roof',
  'shimmy',
  'swim',
  'hands-up',
  'sprinkler',
  'circles',
  'point-sway',
] as const;

export type DanceId = (typeof DANCE_IDS)[number];

export const DANCE_EMOJI: Record<DanceId, string> = {
  bounce: '🕺',
  'wave-arms': '🙌',
  disco: '🪩',
  robot: '🤖',
  clap: '👏',
  'raise-roof': '🏠',
  shimmy: '💃',
  swim: '🏊',
  'hands-up': '🙋',
  sprinkler: '💦',
  circles: '🌀',
  'point-sway': '👉',
};
