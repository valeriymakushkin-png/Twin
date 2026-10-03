import type { StickerEmotion } from './emotions';

/**
 * Meme formats are original layouts (no copyrighted template images).
 * The mascot reaction image is generated (or reused from stickers) and composited
 * server-side with Sharp.
 */
export const MEME_FORMATS = [
  'classic',
  'pov',
  'nobody-me',
  'expectation-reality',
  'tweet',
  'caption-bar',
] as const;

export type MemeFormat = (typeof MEME_FORMATS)[number];

export interface MemeFormatRecipe {
  key: MemeFormat;
  label: string;
  description: string;
  /** Output canvas size. */
  width: number;
  height: number;
  /** Number of mascot panels needed. */
  panels: 1 | 2;
  /** Whether the format needs top + bottom text instead of one caption. */
  dualText: boolean;
}

export const MEME_FORMAT_CATALOG: Record<MemeFormat, MemeFormatRecipe> = {
  classic: { key: 'classic', label: 'Classic', description: 'Bold top & bottom text', width: 1080, height: 1080, panels: 1, dualText: true },
  pov: { key: 'pov', label: 'POV', description: '"POV:" caption over a reaction', width: 1080, height: 1350, panels: 1, dualText: false },
  'nobody-me': { key: 'nobody-me', label: 'Nobody / Me', description: 'Nobody: … Me: …', width: 1080, height: 1350, panels: 1, dualText: true },
  'expectation-reality': { key: 'expectation-reality', label: 'Expectation vs Reality', description: 'Two-panel contrast', width: 1080, height: 1350, panels: 2, dualText: true },
  tweet: { key: 'tweet', label: 'Post', description: 'Social post with mascot reaction', width: 1080, height: 1350, panels: 1, dualText: false },
  'caption-bar': { key: 'caption-bar', label: 'Caption', description: 'Clean white caption bar on top', width: 1080, height: 1250, panels: 1, dualText: false },
};

/**
 * Lightweight keyword → emotion classifier used before (or instead of) an LLM call.
 * Ordered by priority. Kept multilingual for EN/RU, the two largest Telegram audiences.
 */
export const MEME_EMOTION_KEYWORDS: Array<{ emotion: StickerEmotion; keywords: string[] }> = [
  { emotion: 'facepalm', keywords: ['again', 'why', 'seriously', 'bruh', 'опять', 'зачем', 'серьезно', 'ну конечно'] },
  { emotion: 'crying', keywords: ['sad', 'cry', 'monday', 'broke', 'miss', 'грустно', 'плачу', 'понедельник'] },
  { emotion: 'angry', keywords: ['angry', 'hate', 'mad', 'lag', 'злой', 'бесит', 'ненавижу'] },
  { emotion: 'shocked', keywords: ['what', 'omg', 'wtf', 'price', 'shock', 'что', 'офигеть', 'шок'] },
  { emotion: 'love', keywords: ['love', 'crush', 'pizza', 'weekend', 'люблю', 'обожаю', 'выходные'] },
  { emotion: 'laughing', keywords: ['lol', 'lmao', 'funny', 'joke', 'ахах', 'смешно', 'ржу'] },
  { emotion: 'sigma', keywords: ['sigma', 'grind', 'alpha', 'rule', 'сигма', 'гринд'] },
  { emotion: 'cool', keywords: ['cool', 'win', 'flex', 'ez', 'easy', 'круто', 'изи'] },
  { emotion: 'thinking', keywords: ['think', 'maybe', 'hmm', 'wonder', 'думаю', 'хмм', 'может'] },
];
