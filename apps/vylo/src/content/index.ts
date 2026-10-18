import type { Locale } from '@/i18n/config';
import de from './de';
import en from './en';
import es from './es';
import fr from './fr';
import it from './it';
import ru from './ru';
import type { ContentPack } from './types';

export const packs: Record<Locale, ContentPack> = { ru, en, es, de, fr, it };
export type { ContentPack };
