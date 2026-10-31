import type { L } from '../world/types';

/**
 * Travel phrasebook. Every language has one pack with the same phrase ids; what each id means (in the
 * reader's language) lives in the UI dictionaries under `phrases.gloss.<id>`, so a pack only carries the
 * local-language side.
 */
export const PHRASES = {
  basics: ['hello', 'goodbye', 'please', 'thanks', 'sorry', 'excuse', 'yes', 'no', 'noUnderstand', 'speakEnglish', 'slower', 'wifi'],
  eating: ['menu', 'water', 'bill', 'delicious', 'vegetarian', 'allergy', 'noSpicy', 'cheers'],
  money: ['howMuch', 'tooExpensive', 'card', 'atm'],
  move: ['toilet', 'station', 'airport', 'hotel', 'stopHere', 'left', 'right', 'straight', 'ticket'],
  help: ['help', 'doctor', 'police', 'pharmacy', 'lost'],
  numbers: ['n0', 'n1', 'n2', 'n3', 'n4', 'n5', 'n6', 'n7', 'n8', 'n9', 'n10', 'n100', 'n1000'],
} as const;

export type PhraseGroup = keyof typeof PHRASES;
export type PhraseId = (typeof PHRASES)[PhraseGroup][number];
export const PHRASE_GROUPS = Object.keys(PHRASES) as PhraseGroup[];
export const ALL_PHRASES: PhraseId[] = PHRASE_GROUPS.flatMap((g) => [...PHRASES[g]]);

export interface PhrasePack {
  /** ISO 639-1 code, same as `language` on destinations */
  lang: string;
  /** BCP 47 tag for speech synthesis, e.g. "th-TH" */
  speech: string;
  /** Right-to-left script */
  rtl?: boolean;
  /** The phrase as written in the local language (native script) */
  text: Record<PhraseId, string>;
  /** Reading aid in Latin letters. Required when the native script is not Latin; omit for Latin-script languages. */
  roman?: Record<PhraseId, string>;
  /** Etiquette worth knowing when speaking this language (politeness particles, gendered forms, tones…), 1–2 sentences */
  note: L<string>;
  /** Month the wording was last checked, "YYYY-MM" */
  checked: string;
}
