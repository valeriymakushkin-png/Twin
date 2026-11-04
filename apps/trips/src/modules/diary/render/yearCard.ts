import { pluralWord, ru } from '../../../core/strings';
import type { DiaryStyle } from '../../../core/db';
import type { LatLng } from '../../map/geo';
import type { Feature, Geometry } from 'geojson';
import { geoCentroid, geoDistance, geoNaturalEarth1, type GeoProjection } from 'd3-geo';
import { geoPath, mainLand, type World } from '../../map/world';
import { fitText, drawLines, type Ctx, type Rect } from './draw';
import { background, eyebrow, hashKey, M, watermark, type RC } from './pages';
import { rng } from '../random';
import { THEMES } from './themes';
import { SIZES } from './types';

/** Данные итоговой карточки «N стран, N городов, N км» (за год или за всё время). */
export interface YearCardData {
  world: World | null;
  /** Коды посещённых стран — они закрашиваются на карте */
  visited: ReadonlySet<string>;
  /** Города — точками поверх карты */
  cities: LatLng[];
  countries: number;
  cityCount: number;
  km: number;
  /** Крупная надпись: «2026» или «Всё время» */
  period: string;
  eyebrow: string;
  watermark: boolean;
}

export interface YearCardArgs {
  style: DiaryStyle;
  aspect: 'story' | 'square';
  scale: number;
  data: YearCardData;
}

const nf = new Intl.NumberFormat('ru-RU', { maximumFractionDigits: 0 });

/** Рисует карточку на холсте (те же размеры и принцип «условных единиц», что у страниц дневника). */
export function renderYearCard(canvas: HTMLCanvasElement, args: YearCardArgs): void {
  const { w, h } = SIZES[args.aspect];
  canvas.width = Math.max(1, Math.round(w * args.scale));
  canvas.height = Math.max(1, Math.round(h * args.scale));
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('canvas');
  const u = Math.min(w / 1000, h / 1450);
  ctx.setTransform(args.scale * u, 0, 0, args.scale * u, 0, 0);
  ctx.imageSmoothingQuality = 'high';
  const theme = THEMES[args.style];
  const d = args.data;
  const rc = { ctx, W: w / u, H: h / u, theme, random: rng(hashKey(`year:${d.period}`)), data: null } as unknown as RC;
  const { W, H } = rc;
  const tall = H > 1600;

  background(rc);
  eyebrow(rc, d.eyebrow, M, M + 44);
  // Крупный период — «2026» или «Всё время»
  const big = fitText(ctx, d.period, theme.head, W - 2 * M, 260, tall ? 190 : 150, 70, 1.0);
  ctx.fillStyle = theme.id === 'minimal' ? theme.accent : theme.fg;
  drawLines(ctx, big, M, M + 70);
  let y = M + 70 + big.height + 24;

  // Карта мира с закрашенными странами
  const mapW = W - 2 * M;
  const { projection, height: mapH } = cardProjection(mapW);
  const mapRect: Rect = { x: M, y, w: mapW, h: mapH };
  drawVisitedMap(ctx, mapRect, projection, d, theme.map);
  y += mapRect.h + (tall ? 60 : 40);

  // Три счётчика
  const items: { n: string; label: string }[] = [
    { n: nf.format(d.countries), label: pluralWord(d.countries, ru.map.countries) },
    { n: nf.format(d.cityCount), label: pluralWord(d.cityCount, ru.map.cities) },
    { n: nf.format(Math.round(d.km)), label: ru.map.km },
  ];
  const footer = 110;
  if (tall) {
    const rowH = Math.min(230, (H - y - footer) / 3);
    items.forEach((it, i) => {
      const ry = y + i * rowH;
      ctx.strokeStyle = theme.line;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(M, ry);
      ctx.lineTo(W - M, ry);
      ctx.stroke();
      const f = fitText(ctx, it.n, theme.head, W - 2 * M - 330, rowH - 40, 150, 60, 1.0);
      ctx.fillStyle = theme.id === 'minimal' && i === 0 ? theme.accent : theme.fg;
      ctx.textBaseline = 'alphabetic';
      ctx.textAlign = 'left';
      ctx.font = theme.head(f.size);
      ctx.fillText(it.n, M, ry + rowH / 2 + f.size * 0.36);
      ctx.font = theme.id === 'postcard' ? theme.body(46) : theme.label(34);
      ctx.fillStyle = theme.muted;
      ctx.textAlign = 'right';
      ctx.fillText(it.label, W - M, ry + rowH / 2 + 12);
    });
  } else {
    const colW = (W - 2 * M) / 3;
    items.forEach((it, i) => {
      const cx = M + i * colW;
      const f = fitText(ctx, it.n, theme.head, colW - 30, 160, 130, 50, 1.0);
      ctx.fillStyle = theme.id === 'minimal' ? theme.accent : theme.fg;
      ctx.font = theme.head(f.size);
      ctx.textAlign = 'left';
      ctx.textBaseline = 'alphabetic';
      ctx.fillText(it.n, cx, y + 110);
      ctx.font = theme.id === 'postcard' ? theme.body(38) : theme.label(28);
      ctx.fillStyle = theme.muted;
      ctx.fillText(it.label, cx, y + 160);
      if (i) {
        ctx.strokeStyle = theme.line;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(cx - 20, y + 20);
        ctx.lineTo(cx - 20, y + 170);
        ctx.stroke();
      }
    });
  }
  if (d.watermark) watermark(rc, theme.watermark);
}

/** Основная территория страны плюс острова не дальше ~30° от неё (заморские территории отбрасываются). */
function nearMainland(f: Feature<Geometry>): Feature<Geometry> {
  const g = f.geometry;
  if (g.type !== 'MultiPolygon') return f;
  const origin = geoCentroid(mainLand(f));
  const polygons = g.coordinates.filter((coordinates) => geoDistance(origin, geoCentroid({ type: 'Polygon', coordinates })) < 0.55);
  return { type: 'Feature', properties: f.properties, geometry: { type: 'MultiPolygon', coordinates: polygons } };
}

/** Проекция мира без Антарктиды: места под нужные страны больше. Возвращает проекцию и высоту, которую она занимает. */
function cardProjection(width: number): { projection: GeoProjection; height: number } {
  const frame = { type: 'MultiPoint' as const, coordinates: [[-180, 0], [180, 0], [0, 84], [0, -58]] as [number, number][] };
  const projection = geoNaturalEarth1().fitWidth(width, frame);
  const [[, y0], [, y1]] = geoPath(projection).bounds(frame);
  projection.translate([projection.translate()[0], projection.translate()[1] - y0]);
  return { projection, height: Math.ceil(y1 - y0) };
}

function drawVisitedMap(ctx: Ctx, r: Rect, projection: GeoProjection, d: YearCardData, colors: { land: string; stroke: string; sea?: string; highlight: string; dot: string; dotStroke: string }) {
  ctx.save();
  ctx.beginPath();
  ctx.rect(r.x, r.y, r.w, r.h);
  ctx.clip();
  ctx.translate(r.x, r.y);
  if (d.world) {
    const path = geoPath(projection, ctx);
    ctx.lineJoin = 'round';
    const hair = Math.max(0.6, r.w / 700);
    const halos: [number, number][] = [];
    for (const c of d.world.countries) {
      const on = !!c.code && d.visited.has(c.code);
      ctx.beginPath();
      path(c.feature);
      ctx.fillStyle = colors.land;
      ctx.fill();
      ctx.lineWidth = hair;
      ctx.strokeStyle = colors.stroke;
      ctx.stroke();
      if (!on) continue;
      // Закрашиваем основную территорию и близкие острова; заморские владения (Гвиана у Франции и т. п.) не трогаем.
      const near = nearMainland(c.feature);
      ctx.beginPath();
      path(near);
      ctx.fillStyle = colors.highlight;
      ctx.fill();
      ctx.lineWidth = hair * 2.4;
      ctx.strokeStyle = colors.highlight;
      ctx.stroke();
      // Маленькие страны на карте мира — всего пара пикселей: добавляем мягкий ореол, чтобы было видно.
      const [[x0, y0], [x1, y1]] = path.bounds(mainLand(c.feature));
      if (Math.max(x1 - x0, y1 - y0) < 26) halos.push([(x0 + x1) / 2, (y0 + y1) / 2]);
    }
    ctx.globalAlpha = 0.28;
    ctx.fillStyle = colors.highlight;
    for (const [x, y] of halos) (ctx.beginPath(), ctx.arc(x, y, r.w / 50, 0, Math.PI * 2), ctx.fill());
    ctx.globalAlpha = 1;
  }
  const dot = Math.max(3.5, r.w / 230);
  for (const c of d.cities) {
    const p = projection([c.lng, c.lat]);
    if (!p) continue;
    ctx.beginPath();
    ctx.arc(p[0], p[1], dot, 0, Math.PI * 2);
    ctx.fillStyle = colors.dot;
    ctx.fill();
    ctx.lineWidth = dot * 0.5;
    ctx.strokeStyle = colors.dotStroke;
    ctx.stroke();
  }
  ctx.restore();
}
