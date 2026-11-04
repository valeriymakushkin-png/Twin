import { geoPath, type GeoProjection } from 'd3-geo';
import type { PhotoSlot } from '../../../core/db';
import type { LatLng } from '../../map/geo';
import { routeProjection, worldProjection, type World } from '../../map/world';

/** Примитивы рисования на холсте: текст с переносом, фото с кадрированием, карта. Всё в «условных единицах» страницы. */

export type Ctx = CanvasRenderingContext2D;
export interface Rect {
  x: number;
  y: number;
  w: number;
  h: number;
}

export function roundRect(ctx: Ctx, r: Rect, radius: number) {
  const rr = Math.min(radius, r.w / 2, r.h / 2);
  ctx.beginPath();
  ctx.moveTo(r.x + rr, r.y);
  ctx.arcTo(r.x + r.w, r.y, r.x + r.w, r.y + r.h, rr);
  ctx.arcTo(r.x + r.w, r.y + r.h, r.x, r.y + r.h, rr);
  ctx.arcTo(r.x, r.y + r.h, r.x, r.y, rr);
  ctx.arcTo(r.x, r.y, r.x + r.w, r.y, rr);
  ctx.closePath();
}

/** Разбивает текст на строки по ширине; учитывает переводы строк и очень длинные слова. */
export function wrap(ctx: Ctx, text: string, maxW: number): string[] {
  const lines: string[] = [];
  for (const para of text.split('\n')) {
    if (!para.trim()) {
      lines.push('');
      continue;
    }
    let line = '';
    for (const word of para.split(/\s+/)) {
      const test = line ? `${line} ${word}` : word;
      if (ctx.measureText(test).width <= maxW || !line) {
        // Слово шире строки — режем по буквам, чтобы оно не вылезло за край.
        if (!line && ctx.measureText(word).width > maxW) {
          let chunk = '';
          for (const ch of word) {
            if (ctx.measureText(chunk + ch).width > maxW && chunk) {
              lines.push(chunk);
              chunk = ch;
            } else chunk += ch;
          }
          line = chunk;
        } else line = test;
      } else {
        lines.push(line);
        line = word;
      }
    }
    if (line) lines.push(line);
  }
  return lines;
}

export interface FittedText {
  lines: string[];
  size: number;
  lineHeight: number;
  height: number;
}

/**
 * Подбирает размер шрифта (от `max` вниз до `min`), чтобы текст поместился в ширину и высоту. Если и на минимальном не помещается —
 * лишние строки отбрасываются с многоточием в конце.
 */
export function fitText(ctx: Ctx, text: string, font: (size: number) => string, maxW: number, maxH: number, max: number, min: number, lh = 1.35): FittedText {
  for (let size = max; size >= min; size -= 2) {
    ctx.font = font(size);
    const lines = wrap(ctx, text, maxW);
    if (lines.length * size * lh <= maxH) return { lines, size, lineHeight: size * lh, height: lines.length * size * lh };
  }
  ctx.font = font(min);
  let lines = wrap(ctx, text, maxW);
  const maxLines = Math.max(1, Math.floor(maxH / (min * lh)));
  if (lines.length > maxLines) {
    lines = lines.slice(0, maxLines);
    let last = lines[maxLines - 1]!;
    while (last.length > 1 && ctx.measureText(`${last}…`).width > maxW) last = last.slice(0, -1);
    lines[maxLines - 1] = `${last.trimEnd()}…`;
  }
  return { lines, size: min, lineHeight: min * lh, height: lines.length * min * lh };
}

export function drawLines(ctx: Ctx, f: FittedText, x: number, y: number, align: CanvasTextAlign = 'left') {
  ctx.textAlign = align;
  ctx.textBaseline = 'top';
  f.lines.forEach((l, i) => ctx.fillText(l, x, y + i * f.lineHeight));
}

/** Строка, обрезанная многоточием до заданной ширины. */
export function ellipsize(ctx: Ctx, text: string, maxW: number): string {
  if (ctx.measureText(text).width <= maxW) return text;
  let s = text;
  while (s.length > 1 && ctx.measureText(`${s}…`).width > maxW) s = s.slice(0, -1);
  return `${s.trimEnd()}…`;
}

/** Рисует фото в прямоугольник «с обрезкой по краям» (как object-fit: cover) с точкой кадра и приближением. */
export function drawCover(ctx: Ctx, img: ImageBitmap | HTMLImageElement, r: Rect, slot: Pick<PhotoSlot, 'fx' | 'fy' | 'zoom'> = { fx: 0.5, fy: 0.5, zoom: 1 }) {
  const iw = 'width' in img ? img.width : 1;
  const ih = 'height' in img ? img.height : 1;
  const scale = Math.max(r.w / iw, r.h / ih) * Math.max(1, slot.zoom);
  const sw = r.w / scale;
  const sh = r.h / scale;
  const sx = Math.min(iw - sw, Math.max(0, slot.fx * iw - sw / 2));
  const sy = Math.min(ih - sh, Math.max(0, slot.fy * ih - sh / 2));
  ctx.drawImage(img, sx, sy, sw, sh, r.x, r.y, r.w, r.h);
}

/** Заглушка вместо фото: мягкая заливка с диагональю — страница не выглядит «дырявой». */
export function drawPlaceholder(ctx: Ctx, r: Rect, a: string, b: string) {
  const g = ctx.createLinearGradient(r.x, r.y, r.x + r.w, r.y + r.h);
  g.addColorStop(0, a);
  g.addColorStop(1, b);
  ctx.fillStyle = g;
  ctx.fillRect(r.x, r.y, r.w, r.h);
}

export interface MapColors {
  land: string;
  stroke: string;
  sea?: string;
  highlight: string;
  route: string;
  dot: string;
  dotStroke: string;
  label: string;
}

/**
 * Маршрут на карте: границы стран как фон, линия маршрута и точки городов. Масштаб подбирается под точки; если точек нет —
 * рисуется весь мир с выделенной страной поездки.
 */
export function drawRouteMap(
  ctx: Ctx,
  r: Rect,
  world: World | null,
  points: { name?: string; point: LatLng }[],
  countryCode: string | undefined,
  colors: MapColors,
  opts: { labels?: boolean; fontSize?: number; font?: string; numbers?: boolean; radius?: number } = {},
) {
  ctx.save();
  roundRect(ctx, r, opts.radius ?? 0);
  ctx.clip();
  ctx.translate(r.x, r.y);
  if (colors.sea) {
    ctx.fillStyle = colors.sea;
    ctx.fillRect(0, 0, r.w, r.h);
  }
  const hasRoute = points.length > 0;
  const projection: GeoProjection = hasRoute ? routeProjection(points.map((p) => p.point), r.w, r.h, Math.min(r.w, r.h) * 0.16) : worldProjection(r.w, r.h, 4);
  if (world) {
    const path = geoPath(projection, ctx);
    ctx.lineWidth = Math.max(0.6, r.w / 600);
    ctx.lineJoin = 'round';
    for (const c of world.countries) {
      ctx.beginPath();
      path(c.feature);
      ctx.fillStyle = !hasRoute && c.code && c.code === countryCode ? colors.highlight : colors.land;
      ctx.fill();
      ctx.strokeStyle = colors.stroke;
      ctx.stroke();
    }
  }
  if (hasRoute) {
    const xy = points.map((p) => projection([p.point.lng, p.point.lat])).filter((v): v is [number, number] => !!v);
    if (xy.length > 1) {
      ctx.beginPath();
      xy.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)));
      ctx.strokeStyle = colors.route;
      ctx.lineWidth = Math.max(2.5, r.w / 110);
      ctx.setLineDash([ctx.lineWidth * 2.2, ctx.lineWidth * 1.6]);
      ctx.lineCap = 'round';
      ctx.stroke();
      ctx.setLineDash([]);
    }
    const dot = Math.max(5, r.w / 60);
    xy.forEach(([x, y], i) => {
      ctx.beginPath();
      ctx.arc(x, y, dot, 0, Math.PI * 2);
      ctx.fillStyle = colors.dot;
      ctx.fill();
      ctx.lineWidth = dot * 0.4;
      ctx.strokeStyle = colors.dotStroke;
      ctx.stroke();
      if (opts.numbers) {
        ctx.fillStyle = colors.dotStroke;
        ctx.font = `700 ${dot * 1.25}px ${opts.font ?? 'sans-serif'}`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(String(i + 1), x, y + dot * 0.05);
      }
    });
    if (opts.labels) {
      const fs = opts.fontSize ?? 22;
      ctx.font = `600 ${fs}px ${opts.font ?? 'sans-serif'}`;
      ctx.textBaseline = 'middle';
      points.forEach((p, i) => {
        const pos = projection([p.point.lng, p.point.lat]);
        if (!pos || !p.name) return;
        const text = p.name;
        const w = ctx.measureText(text).width;
        const right = pos[0] + dot * 1.8 + w < r.w - 6;
        const x = right ? pos[0] + dot * 1.8 : pos[0] - dot * 1.8 - w;
        ctx.lineWidth = fs * 0.28;
        ctx.strokeStyle = colors.land;
        ctx.lineJoin = 'round';
        ctx.textAlign = 'left';
        ctx.strokeText(text, x, pos[1] - (i % 2 ? 0 : 0));
        ctx.fillStyle = colors.label;
        ctx.fillText(text, x, pos[1]);
      });
    }
  }
  ctx.restore();
}

/** Маленькая «шумная» бумажная текстура: тёплые точки и волокна, детерминированно по зерну. */
export function paperNoise(ctx: Ctx, w: number, h: number, random: () => number, color = '#7a5c2e') {
  ctx.save();
  ctx.globalAlpha = 0.06;
  ctx.fillStyle = color;
  const n = Math.floor((w * h) / 1400);
  for (let i = 0; i < n; i++) ctx.fillRect(random() * w, random() * h, 1 + random() * 2.2, 1 + random() * 2.2);
  ctx.restore();
}
