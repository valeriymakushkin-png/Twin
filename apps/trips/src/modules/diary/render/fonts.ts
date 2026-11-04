import interLatin from '@fontsource-variable/inter/files/inter-latin-wght-normal.woff2?url';
import interCyr from '@fontsource-variable/inter/files/inter-cyrillic-wght-normal.woff2?url';
import playfairLatin from '@fontsource-variable/playfair-display/files/playfair-display-latin-wght-normal.woff2?url';
import playfairCyr from '@fontsource-variable/playfair-display/files/playfair-display-cyrillic-wght-normal.woff2?url';
import caveatLatin from '@fontsource-variable/caveat/files/caveat-latin-wght-normal.woff2?url';
import caveatCyr from '@fontsource-variable/caveat/files/caveat-cyrillic-wght-normal.woff2?url';
import plexLatin4 from '@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-400-normal.woff2?url';
import plexCyr4 from '@fontsource/ibm-plex-mono/files/ibm-plex-mono-cyrillic-400-normal.woff2?url';
import plexLatin6 from '@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-600-normal.woff2?url';
import plexCyr6 from '@fontsource/ibm-plex-mono/files/ibm-plex-mono-cyrillic-600-normal.woff2?url';

/**
 * Шрифты дневника лежат внутри приложения (не из интернета): так картинки и PDF выглядят одинаково у всех и без сети.
 * Для холста (canvas) шрифт надо загрузить заранее — иначе первый кадр нарисуется запасным шрифтом.
 */
export const FONT = {
  sans: '"Inter Variable", system-ui, sans-serif',
  serif: '"Playfair Display Variable", Georgia, serif',
  hand: '"Caveat Variable", "Segoe Script", cursive',
  mono: '"IBM Plex Mono", ui-monospace, monospace',
} as const;

const LATIN = 'U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD';
const CYRILLIC = 'U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116';

const faces: [family: string, url: string, descriptors: FontFaceDescriptors][] = [
  ['Inter Variable', interLatin, { weight: '100 900', unicodeRange: LATIN }],
  ['Inter Variable', interCyr, { weight: '100 900', unicodeRange: CYRILLIC }],
  ['Playfair Display Variable', playfairLatin, { weight: '400 900', unicodeRange: LATIN }],
  ['Playfair Display Variable', playfairCyr, { weight: '400 900', unicodeRange: CYRILLIC }],
  ['Caveat Variable', caveatLatin, { weight: '400 700', unicodeRange: LATIN }],
  ['Caveat Variable', caveatCyr, { weight: '400 700', unicodeRange: CYRILLIC }],
  ['IBM Plex Mono', plexLatin4, { weight: '400', unicodeRange: LATIN }],
  ['IBM Plex Mono', plexCyr4, { weight: '400', unicodeRange: CYRILLIC }],
  ['IBM Plex Mono', plexLatin6, { weight: '600', unicodeRange: LATIN }],
  ['IBM Plex Mono', plexCyr6, { weight: '600', unicodeRange: CYRILLIC }],
];

let ready: Promise<void> | null = null;

/** Регистрирует и загружает шрифты дневника (один раз). */
export function loadDiaryFonts(): Promise<void> {
  ready ??= (async () => {
    for (const [family, url, d] of faces) {
      const face = new FontFace(family, `url(${url}) format('woff2')`, d);
      document.fonts.add(face);
      await face.load();
    }
    // Прогрев: просим браузер подготовить нужные начертания для кириллицы и латиницы.
    await Promise.all(
      ['400 20px "Inter Variable"', '700 20px "Inter Variable"', '700 20px "Playfair Display Variable"', '400 20px "Playfair Display Variable"', '700 20px "Caveat Variable"', '400 20px "IBM Plex Mono"', '600 20px "IBM Plex Mono"'].map((f) => document.fonts.load(f, 'Аа Aa 0123')),
    );
  })();
  return ready;
}
