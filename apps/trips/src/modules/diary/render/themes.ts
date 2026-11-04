import type { DiaryStyle } from '../../../core/db';
import { FONT } from './fonts';
import type { MapColors } from './draw';

/** Оформление стиля: цвета и шрифты. Раскладка страниц общая, а детали (рамки фото, заголовки) зависят от стиля. */
export interface Theme {
  id: DiaryStyle;
  bg: string;
  fg: string;
  muted: string;
  accent: string;
  accent2: string;
  tile: string;
  line: string;
  /** Подпись «Сделано в Vylo» */
  watermark: string;
  head: (size: number) => string;
  body: (size: number) => string;
  label: (size: number) => string;
  map: MapColors;
}

export const THEMES: Record<DiaryStyle, Theme> = {
  // Минимализм: белое поле, тонкие линии, много воздуха, один акцентный цвет.
  minimal: {
    id: 'minimal',
    bg: '#ffffff',
    fg: '#111218',
    muted: '#767b8c',
    accent: '#4f46e5',
    accent2: '#7c3aed',
    tile: '#f4f5f9',
    line: '#e3e5ee',
    watermark: '#a2a7b8',
    head: (s) => `700 ${s}px ${FONT.sans}`,
    body: (s) => `400 ${s}px ${FONT.sans}`,
    label: (s) => `600 ${s}px ${FONT.sans}`,
    map: { land: '#eceef5', stroke: '#ffffff', sea: '#f8f9fc', highlight: '#4f46e5', route: '#4f46e5', dot: '#ffffff', dotStroke: '#4f46e5', label: '#111218' },
  },
  // Журнал: крупная антиква, красная акцентная плашка, полноэкранные фото.
  magazine: {
    id: 'magazine',
    bg: '#faf6ef',
    fg: '#1a1411',
    muted: '#7d6f64',
    accent: '#c1121f',
    accent2: '#7f0d15',
    tile: '#f0e8da',
    line: '#dccfbb',
    watermark: '#a99a8a',
    head: (s) => `800 ${s}px ${FONT.serif}`,
    body: (s) => `400 ${s}px ${FONT.serif}`,
    label: (s) => `700 ${s}px ${FONT.sans}`,
    map: { land: '#e8dfcf', stroke: '#faf6ef', sea: '#f3ecdf', highlight: '#c1121f', route: '#c1121f', dot: '#ffffff', dotStroke: '#c1121f', label: '#1a1411' },
  },
  // Ретро-открытка: тёплая бумага, рукописный шрифт, марки и штемпели.
  postcard: {
    id: 'postcard',
    bg: '#f1e4c8',
    fg: '#3f3222',
    muted: '#8a7658',
    accent: '#b5433a',
    accent2: '#2f6f73',
    tile: '#e8d7b3',
    line: '#c9b58c',
    watermark: '#9c8760',
    head: (s) => `700 ${s}px ${FONT.hand}`,
    body: (s) => `500 ${s}px ${FONT.hand}`,
    label: (s) => `600 ${s}px ${FONT.mono}`,
    map: { land: '#e0cfa6', stroke: '#f1e4c8', sea: '#f6ecd5', highlight: '#b5433a', route: '#b5433a', dot: '#f1e4c8', dotStroke: '#b5433a', label: '#3f3222' },
  },
};

export const STYLE_NAMES: Record<DiaryStyle, string> = { minimal: 'Минимализм', magazine: 'Журнал', postcard: 'Открытка' };
