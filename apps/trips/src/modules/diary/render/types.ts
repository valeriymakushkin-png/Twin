import type { DiaryPage, DiaryStyle, ItineraryItem, Trip } from '../../../core/db';
import type { LatLng } from '../../map/geo';
import type { TripFacts } from '../../map/stats';
import type { World } from '../../map/world';

/** Размеры холстов, пиксели. Страница — А5 (148×210 мм) при ≈ 213 dpi; stories — 9:16; квадрат — 1:1. */
export type Aspect = 'page' | 'story' | 'square';
export const SIZES: Record<Aspect, { w: number; h: number }> = {
  page: { w: 1240, h: 1754 },
  story: { w: 1080, h: 1920 },
  square: { w: 1080, h: 1080 },
};

/** Всё, что нужно рисовальщику, помимо самой страницы. Собирается один раз на дневник. */
export interface RenderData {
  trip: Trip;
  facts: TripFacts;
  /** Города маршрута с координатами по порядку (для подписей на карте) */
  cities: { name: string; point: LatLng }[];
  /** Если городов нет — точки маршрута по записям */
  path: LatLng[];
  world: World | null;
  /** Загруженные фото: id → картинка */
  images: Map<string, ImageBitmap>;
  itemsOf: (date: string) => ItineraryItem[];
  /** Расходы уже в виде текста («1 250 €»); undefined — расходов нет */
  spend?: { total: string; perDay?: string };
  /** Рисовать подпись «Сделано в Vylo» */
  watermark: boolean;
  /** Зерно для детерминированных украшений (штемпели, наклон фото) */
  seed: number;
}

export interface RenderArgs {
  page: DiaryPage;
  style: DiaryStyle;
  aspect: Aspect;
  /** Масштаб в пикселях: 1 — полный размер, 0.3 — миниатюра */
  scale: number;
  data: RenderData;
}
