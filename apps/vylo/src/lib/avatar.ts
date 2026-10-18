import { hash } from './utils';

/** Vylo's own illustrated avatars — generated, so no real person's likeness is ever used. */
export interface AvatarConfig {
  skin: number;
  hair: number;
  hairColor: number;
  bg: number;
  shirt: number;
  accessory: number;
}

export const SKINS = ['#f9d7c0', '#f1c19e', '#e0a57e', '#c98a5f', '#a96b45', '#7d4b2e'];
export const HAIR_COLORS = ['#1f1b2e', '#3b2416', '#6b3f22', '#a8642c', '#d9a45b', '#e8d3a6', '#9ca3af', '#c2410c', '#6d28d9'];
export const BACKGROUNDS: [string, string][] = [
  ['#c7d2fe', '#818cf8'],
  ['#bbf7d0', '#34d399'],
  ['#fed7aa', '#fb923c'],
  ['#fbcfe8', '#f472b6'],
  ['#bae6fd', '#38bdf8'],
  ['#fde68a', '#f59e0b'],
  ['#ddd6fe', '#a78bfa'],
  ['#99f6e4', '#14b8a6'],
];
export const SHIRTS = ['#4f46e5', '#0f766e', '#be123c', '#f59e0b', '#0f172a', '#0284c7', '#16a34a', '#7c3aed'];
/** 0 none, 1 glasses, 2 sunglasses, 3 cap, 4 beanie, 5 headphones — 6+ are Plus extras */
export const ACCESSORIES = ['none', 'glasses', 'sunglasses', 'cap', 'beanie', 'headphones', 'explorer', 'flower', 'aviator'] as const;
export const PLUS_ACCESSORY_FROM = 6;
export const HAIR_STYLES = 8;

export function avatarFromSeed(seed: string): AvatarConfig {
  const h = hash(seed);
  return {
    skin: h % SKINS.length,
    hair: (h >>> 3) % HAIR_STYLES,
    hairColor: (h >>> 7) % 6,
    bg: (h >>> 11) % BACKGROUNDS.length,
    shirt: (h >>> 15) % SHIRTS.length,
    accessory: (h >>> 19) % 6 === 1 ? 1 : (h >>> 19) % 9 === 4 ? 2 : 0,
  };
}
