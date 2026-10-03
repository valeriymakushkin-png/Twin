/**
 * Sticker emotions. Each emotion maps to a Telegram emoji (required by the
 * Bot API for every sticker) and a scene description for the prompt compiler.
 */
export const STICKER_EMOTIONS = [
  'happy',
  'laughing',
  'crying',
  'angry',
  'shocked',
  'love',
  'sigma',
  'cool',
  'thinking',
  'facepalm',
] as const;

export type StickerEmotion = (typeof STICKER_EMOTIONS)[number];

export interface EmotionRecipe {
  key: StickerEmotion;
  label: string;
  emoji: string;
  /** Extra emojis Telegram uses to suggest the sticker (max 20 total). */
  extraEmojis: string[];
  expression: string;
  pose: string;
  /** Optional graphic accent rendered by the model around the character. */
  accent?: string;
}

export const EMOTION_CATALOG: Record<StickerEmotion, EmotionRecipe> = {
  happy: {
    key: 'happy',
    label: 'Happy',
    emoji: '😊',
    extraEmojis: ['🙂', '😄'],
    expression: 'warm genuine smile with eyes slightly squinting',
    pose: 'waving hello with one hand',
  },
  laughing: {
    key: 'laughing',
    label: 'Laughing',
    emoji: '😂',
    extraEmojis: ['🤣', '😆'],
    expression: 'laughing out loud, mouth wide open, eyes shut, tears of joy',
    pose: 'leaning back holding belly',
    accent: 'small comic "HA" motion lines',
  },
  crying: {
    key: 'crying',
    label: 'Crying',
    emoji: '😭',
    extraEmojis: ['😢', '🥲'],
    expression: 'dramatic crying, big streams of cartoon tears, trembling lips',
    pose: 'hands near face',
    accent: 'tear droplets',
  },
  angry: {
    key: 'angry',
    label: 'Angry',
    emoji: '😡',
    extraEmojis: ['😠', '🤬'],
    expression: 'furious frown, furrowed brows, gritted teeth, red cheeks',
    pose: 'clenched fists raised',
    accent: 'cartoon steam puffs',
  },
  shocked: {
    key: 'shocked',
    label: 'Shocked',
    emoji: '😱',
    extraEmojis: ['😮', '🤯'],
    expression: 'jaw dropped, eyes wide, eyebrows raised high',
    pose: 'both hands on cheeks',
    accent: 'surprise burst lines',
  },
  love: {
    key: 'love',
    label: 'Love',
    emoji: '😍',
    extraEmojis: ['❤️', '🥰'],
    expression: 'dreamy smile with heart-shaped eyes, blushing',
    pose: 'making a heart shape with both hands',
    accent: 'floating hearts',
  },
  sigma: {
    key: 'sigma',
    label: 'Sigma',
    emoji: '🗿',
    extraEmojis: ['😏', '💪'],
    expression: 'confident smirk, one eyebrow raised, unbothered gaze',
    pose: 'arms crossed, slight head tilt, three-quarter view',
  },
  cool: {
    key: 'cool',
    label: 'Cool',
    emoji: '😎',
    extraEmojis: ['🤙', '🔥'],
    expression: 'relaxed cool smile wearing stylish sunglasses',
    pose: 'finger guns pointing forward',
  },
  thinking: {
    key: 'thinking',
    label: 'Thinking',
    emoji: '🤔',
    extraEmojis: ['🧐', '💭'],
    expression: 'pondering, eyes looking up, pursed lips',
    pose: 'hand on chin',
    accent: 'small thought bubble with question mark',
  },
  facepalm: {
    key: 'facepalm',
    label: 'Facepalm',
    emoji: '🤦',
    extraEmojis: ['😩', '🙄'],
    expression: 'exasperated, eyes closed',
    pose: 'palm covering forehead and upper face, mouth still visible',
  },
};

/** Default emotion order; FREE users get the first N (see plans.ts). */
export const DEFAULT_STICKER_ORDER: readonly StickerEmotion[] = [
  'happy',
  'laughing',
  'love',
  'shocked',
  'cool',
  'crying',
  'angry',
  'sigma',
  'thinking',
  'facepalm',
];
