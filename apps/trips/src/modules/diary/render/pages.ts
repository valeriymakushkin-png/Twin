import { pluralWord, ru } from '../../../core/strings';
import type { DiaryPage, PhotoSlot } from '../../../core/db';
import { countryName } from '../../../data/countries';
import { formatDayShort } from '../../../core/dates';
import { DAYS, PLACES } from '../phrases';
import { rng } from '../random';
import { drawCover, drawLines, drawPlaceholder, drawRouteMap, ellipsize, fitText, paperNoise, roundRect, wrap, type Ctx, type Rect } from './draw';
import { FONT } from './fonts';
import { THEMES, type Theme } from './themes';
import { SIZES, type RenderArgs, type RenderData } from './types';

/**
 * Отрисовка страницы дневника на холсте. Раскладка считается в «условных единицах»: ширина 1000…1450, высота 1450…1777
 * в зависимости от формата (страница А5, stories, квадрат), поэтому одни и те же функции рисуют все три формата.
 */
export interface RC {
  ctx: Ctx;
  W: number;
  H: number;
  theme: Theme;
  data: RenderData;
  random: () => number;
}

export const M = 64;
export const hashKey = (s: string) => [...s].reduce((h, c) => (Math.imul(h, 31) + c.charCodeAt(0)) | 0, 7);

export function renderDiaryPage(canvas: HTMLCanvasElement, args: RenderArgs): void {
  const { w, h } = SIZES[args.aspect];
  canvas.width = Math.max(1, Math.round(w * args.scale));
  canvas.height = Math.max(1, Math.round(h * args.scale));
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('canvas');
  const u = Math.min(w / 1000, h / 1450);
  ctx.setTransform(args.scale * u, 0, 0, args.scale * u, 0, 0);
  ctx.imageSmoothingQuality = 'high';
  const rc: RC = { ctx, W: w / u, H: h / u, theme: THEMES[args.style], data: args.data, random: rng(args.data.seed ^ hashKey(args.page.key)) };

  background(rc);
  const p = args.page;
  if (p.kind === 'cover') cover(rc, p);
  else if (p.kind === 'overview') overview(rc, p);
  else if (p.kind === 'day') day(rc, p);
  else if (p.kind === 'stats') stats(rc, p);
  else if (p.kind === 'map') mapPage(rc, p);
  else closing(rc, p);
  if (args.data.watermark) watermark(rc, p.kind === 'cover' && rc.theme.id === 'magazine' ? 'rgba(255,255,255,.75)' : rc.theme.watermark);
}

// --- Общее -----------------------------------------------------------------------------------------------------------

export function background(rc: RC) {
  const { ctx, W, H, theme } = rc;
  ctx.fillStyle = theme.bg;
  ctx.fillRect(0, 0, W, H);
  if (theme.id === 'postcard') {
    const g = ctx.createRadialGradient(W / 2, H / 2, Math.min(W, H) * 0.35, W / 2, H / 2, Math.max(W, H) * 0.75);
    g.addColorStop(0, 'rgba(255,248,225,0)');
    g.addColorStop(1, 'rgba(120,80,30,0.20)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);
    paperNoise(ctx, W, H, rc.random);
    // двойная рамка открытки
    ctx.strokeStyle = theme.line;
    ctx.lineWidth = 3;
    ctx.strokeRect(26, 26, W - 52, H - 52);
    ctx.lineWidth = 1.5;
    ctx.strokeRect(36, 36, W - 72, H - 72);
  }
}

export function watermark(rc: RC, color: string) {
  const { ctx, W, H, theme } = rc;
  ctx.save();
  ctx.font = theme.label(20);
  ctx.fillStyle = color;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'alphabetic';
  ctx.fillText('Сделано в Vylo', W / 2, H - 34);
  ctx.restore();
}

/** Картинка для места на странице: замена пользователя важнее исходного фото. */
const imageFor = (rc: RC, slot: PhotoSlot | null | undefined): ImageBitmap | undefined => (slot ? rc.data.images.get(slot.override ?? '') ?? (slot.source ? rc.data.images.get(slot.source) : undefined) : undefined);

function photo(rc: RC, r: Rect, slot: PhotoSlot | null | undefined, index = 0) {
  const { ctx, theme } = rc;
  const img = imageFor(rc, slot);
  ctx.save();
  if (theme.id === 'postcard') {
    // Полароид: белая рамка, тень, лёгкий наклон и полоска скотча.
    const tilt = ((rc.random() - 0.5) * 5 * Math.PI) / 180 + (index % 2 ? 0.015 : -0.015);
    ctx.translate(r.x + r.w / 2, r.y + r.h / 2);
    ctx.rotate(tilt);
    const pad = Math.max(12, r.w * 0.035);
    const frame: Rect = { x: -r.w / 2, y: -r.h / 2, w: r.w, h: r.h };
    ctx.shadowColor = 'rgba(60,40,10,.35)';
    ctx.shadowBlur = 22;
    ctx.shadowOffsetY = 8;
    ctx.fillStyle = '#fffdf6';
    ctx.fillRect(frame.x, frame.y, frame.w, frame.h);
    ctx.shadowColor = 'transparent';
    const inner: Rect = { x: frame.x + pad, y: frame.y + pad, w: frame.w - 2 * pad, h: frame.h - pad * 2.6 };
    if (img && slot) drawCover(ctx, img, inner, slot);
    else drawPlaceholder(ctx, inner, '#d9c79c', '#c4ad78');
    ctx.fillStyle = 'rgba(244, 214, 120, .72)';
    ctx.translate(0, frame.y);
    ctx.rotate(-0.04);
    ctx.fillRect(-r.w * 0.11, -14, r.w * 0.22, 30);
  } else {
    if (theme.id === 'minimal') roundRect(ctx, r, 14);
    else roundRect(ctx, r, 0);
    ctx.clip();
    if (img && slot) drawCover(ctx, img, r, slot);
    else drawPlaceholder(ctx, r, theme.tile, theme.line);
  }
  ctx.restore();
  if (theme.id === 'magazine') {
    ctx.fillStyle = theme.accent;
    ctx.fillRect(r.x, r.y + r.h, Math.min(120, r.w), 5);
  }
}

/** Подпись-метка над заголовком: «ДЕНЬ 3», «ИТОГИ». */
export function eyebrow(rc: RC, text: string, x: number, y: number, color?: string) {
  const { ctx, theme } = rc;
  ctx.save();
  ctx.font = theme.label(26);
  ctx.fillStyle = color ?? theme.accent;
  ctx.textAlign = 'left';
  ctx.textBaseline = 'alphabetic';
  ctx.fillText(text.toUpperCase(), x, y);
  ctx.restore();
}

function title(rc: RC, text: string, x: number, y: number, maxW: number, max = 76, min = 40, color?: string): number {
  const { ctx, theme } = rc;
  const f = fitText(ctx, text, theme.head, maxW, 260, max, min, 1.12);
  ctx.fillStyle = color ?? theme.fg;
  drawLines(ctx, f, x, y);
  return f.height;
}

const routePoints = (rc: RC) => (rc.data.cities.length ? rc.data.cities.map((c) => ({ name: c.name, point: c.point })) : rc.data.path.map((point) => ({ point })));

// --- Обложка ---------------------------------------------------------------------------------------------------------

function cover(rc: RC, p: Extract<DiaryPage, { kind: 'cover' }>) {
  const { ctx, W, H, theme, data } = rc;
  const mapColors = theme.map;
  if (theme.id === 'minimal') {
    const photoRect: Rect = { x: 0, y: 0, w: W, h: H * 0.6 };
    const img = imageFor(rc, p.photo);
    if (img && p.photo) {
      ctx.save();
      ctx.beginPath();
      ctx.rect(photoRect.x, photoRect.y, photoRect.w, photoRect.h);
      ctx.clip();
      drawCover(ctx, img, photoRect, p.photo);
      ctx.restore();
    } else drawPlaceholder(ctx, photoRect, theme.accent, theme.accent2);
    const textW = W - 2 * M - 400;
    eyebrow(rc, 'Дневник поездки', M, photoRect.h + 70);
    const h1 = title(rc, p.title, M, photoRect.h + 92, textW, 92, 44);
    ctx.font = theme.body(32);
    ctx.fillStyle = theme.muted;
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    const sub = wrap(ctx, p.subtitle, textW).slice(0, 2);
    sub.forEach((l, i) => ctx.fillText(l, M, photoRect.h + 92 + h1 + 20 + i * 42));
    drawRouteMap(ctx, { x: W - M - 320, y: photoRect.h + 44, w: 320, h: 230 }, data.world, routePoints(rc), data.trip.countryCode, mapColors, { radius: 18 });
    return;
  }
  if (theme.id === 'magazine') {
    const full: Rect = { x: 0, y: 0, w: W, h: H };
    const img = imageFor(rc, p.photo);
    if (img && p.photo) drawCover(ctx, img, full, p.photo);
    else drawPlaceholder(ctx, full, '#3a1d1d', '#c1121f');
    const g = ctx.createLinearGradient(0, H * 0.3, 0, H);
    g.addColorStop(0, 'rgba(10,6,4,0)');
    g.addColorStop(1, 'rgba(10,6,4,.88)');
    ctx.fillStyle = g;
    ctx.fillRect(0, H * 0.3, W, H * 0.7);
    ctx.fillStyle = theme.accent;
    ctx.fillRect(M, H - 520, 130, 12);
    ctx.font = theme.label(24);
    ctx.fillStyle = 'rgba(255,255,255,.85)';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'alphabetic';
    ctx.fillText('ДНЕВНИК ПОЕЗДКИ', M, H - 470);
    const h1 = fitText(ctx, p.title, theme.head, W - 2 * M, 300, 132, 56, 1.04);
    ctx.fillStyle = '#fff';
    drawLines(ctx, h1, M, H - 440);
    ctx.font = theme.body(34);
    ctx.fillStyle = 'rgba(255,255,255,.88)';
    ctx.textBaseline = 'top';
    ctx.fillText(ellipsize(ctx, p.subtitle, W - 2 * M), M, H - 440 + h1.height + 24);
    // карта в круге
    const d = 230;
    ctx.save();
    ctx.shadowColor = 'rgba(0,0,0,.4)';
    ctx.shadowBlur = 24;
    ctx.beginPath();
    ctx.arc(W - M - d / 2, M + d / 2, d / 2 + 8, 0, Math.PI * 2);
    ctx.fillStyle = '#fff';
    ctx.fill();
    ctx.restore();
    drawRouteMap(ctx, { x: W - M - d, y: M, w: d, h: d }, data.world, routePoints(rc), data.trip.countryCode, mapColors, { radius: d / 2 });
    return;
  }
  // postcard
  const side = Math.min(W - 2 * M - 40, H * 0.5);
  const box: Rect = { x: (W - side * 1.05) / 2 - 30, y: 150, w: side * 1.05, h: side * 1.1 };
  const baseY = box.y + box.h + 70;
  const f = fitText(ctx, p.title, theme.head, W - 2 * M - 40, 240, 112, 56, 1.0);
  // На высоких форматах (stories) сдвигаем всё вниз, чтобы низ не оставался пустым.
  const dy = Math.max(0, Math.min(260, (H - 110 - (baseY + f.height + 14 + 44)) * 0.45));
  ctx.save();
  ctx.translate(0, dy);
  photo(rc, box, p.photo, 0);
  // марка
  const st: Rect = { x: W - M - 250, y: 70, w: 210, h: 260 };
  ctx.save();
  ctx.translate(st.x + st.w / 2, st.y + st.h / 2);
  ctx.rotate(0.05);
  ctx.translate(-st.w / 2, -st.h / 2);
  ctx.shadowColor = 'rgba(60,40,10,.3)';
  ctx.shadowBlur = 10;
  ctx.shadowOffsetY = 4;
  ctx.fillStyle = '#fffdf6';
  ctx.fillRect(0, 0, st.w, st.h);
  ctx.shadowColor = 'transparent';
  ctx.fillStyle = theme.bg; // «зубчики» по краю
  for (let x = 0; x <= st.w; x += 20) for (const y of [0, st.h]) (ctx.beginPath(), ctx.arc(x, y, 7, 0, Math.PI * 2), ctx.fill());
  for (let y = 0; y <= st.h; y += 20) for (const x of [0, st.w]) (ctx.beginPath(), ctx.arc(x, y, 7, 0, Math.PI * 2), ctx.fill());
  drawRouteMap(ctx, { x: 18, y: 18, w: st.w - 36, h: st.h - 80 }, data.world, routePoints(rc), data.trip.countryCode, mapColors, {});
  ctx.fillStyle = theme.fg;
  ctx.font = theme.label(22);
  ctx.textAlign = 'center';
  ctx.textBaseline = 'alphabetic';
  ctx.fillText(data.trip.countryCode, st.w / 2, st.h - 28);
  ctx.restore();
  // штемпель
  ctx.save();
  ctx.translate(st.x - 40, st.y + 120);
  ctx.rotate(-0.22);
  ctx.strokeStyle = 'rgba(181,67,58,.7)';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.arc(0, 0, 78, 0, Math.PI * 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, 64, 0, Math.PI * 2);
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.fillStyle = 'rgba(181,67,58,.8)';
  ctx.font = theme.label(18);
  ctx.textAlign = 'center';
  ctx.fillText('ДНЕВНИК', 0, -10);
  ctx.fillText(data.trip.startDate.slice(0, 4), 0, 18);
  ctx.restore();
  ctx.fillStyle = theme.accent;
  drawLines(ctx, f, W / 2, baseY, 'center');
  ctx.font = theme.body(40);
  ctx.fillStyle = theme.fg;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';
  ctx.fillText(ellipsize(ctx, p.subtitle, W - 2 * M - 40), W / 2, baseY + f.height + 14);
  ctx.restore();
}

// --- Обзор -----------------------------------------------------------------------------------------------------------

function overview(rc: RC, p: Extract<DiaryPage, { kind: 'overview' }>) {
  const { ctx, W, H, theme, data } = rc;
  eyebrow(rc, 'Итоги', M, M + 40);
  const th = title(rc, 'Поездка в цифрах', M, M + 62, W - 2 * M, 84, 52);
  const f = data.facts;
  const tiles: { n: string; label: string }[] = [
    { n: String(f.days), label: pluralWord(f.days, DAYS) },
    { n: String(f.places), label: pluralWord(f.places, PLACES) },
  ];
  if (data.cities.length || f.cities.length) tiles.push({ n: String(f.cities.length), label: pluralWord(f.cities.length, ru.map.cities) });
  if (f.km >= 1) tiles.push({ n: new Intl.NumberFormat('ru-RU').format(f.km >= 100 ? Math.round(f.km / 10) * 10 : Math.round(f.km)), label: 'км по прямой' });
  if (data.spend) tiles.push({ n: data.spend.total, label: data.spend.perDay ? `потрачено · ${data.spend.perDay} в день` : 'потрачено' });
  const top = M + 62 + th + 36;
  const cols = 2;
  const gap = 24;
  const tw = (W - 2 * M - gap) / cols;
  const tileH = H > 1600 ? 200 : 170;
  tiles.forEach((t, i) => {
    const wide = data.spend && i === tiles.length - 1 && tiles.length % 2 === 1;
    const x = M + (wide ? 0 : (i % cols) * (tw + gap));
    const y = top + Math.floor(i / cols) * (tileH + gap);
    const r: Rect = { x, y, w: wide ? W - 2 * M : tw, h: tileH };
    ctx.fillStyle = theme.tile;
    roundRect(ctx, r, theme.id === 'magazine' ? 0 : 26);
    ctx.fill();
    if (theme.id === 'postcard') {
      ctx.setLineDash([10, 8]);
      ctx.strokeStyle = theme.line;
      ctx.lineWidth = 3;
      ctx.stroke();
      ctx.setLineDash([]);
    }
    if (theme.id === 'magazine') {
      ctx.fillStyle = theme.accent;
      ctx.fillRect(r.x, r.y, 8, r.h);
    }
    const big = fitText(ctx, t.n, theme.head, r.w - 56, 100, 92, 40, 1);
    ctx.fillStyle = theme.id === 'minimal' ? theme.accent : theme.fg;
    drawLines(ctx, big, r.x + 32, r.y + 24);
    ctx.font = theme.label(23);
    ctx.fillStyle = theme.muted;
    ctx.textBaseline = 'alphabetic';
    ctx.textAlign = 'left';
    ctx.fillText(ellipsize(ctx, t.label, r.w - 56), r.x + 32, r.y + r.h - 28);
  });
  const rows = Math.ceil((tiles.length - (data.spend && tiles.length % 2 === 1 ? 1 : 0)) / cols) + (data.spend && tiles.length % 2 === 1 ? 1 : 0);
  const textTop = top + rows * (tileH + gap) + 10;
  const bodyH = H - textTop - 330;
  const ft = fitText(ctx, p.text, theme.body, W - 2 * M, Math.max(140, bodyH), 40, 26, 1.42);
  ctx.fillStyle = theme.fg;
  drawLines(ctx, ft, M, textTop);
  // мир с выделенной страной — в нижней части страницы
  const mapTop = textTop + ft.height + 26;
  const mapH = H - mapTop - 90;
  if (mapH > 150) drawRouteMap(ctx, { x: M, y: mapTop, w: W - 2 * M, h: Math.min(mapH, H > 1600 ? 760 : 340) }, data.world, [], data.trip.countryCode, theme.map, { radius: theme.id === 'magazine' ? 0 : 22 });
}

// --- День ------------------------------------------------------------------------------------------------------------

function day(rc: RC, p: Extract<DiaryPage, { kind: 'day' }>) {
  const { ctx, W, H, theme, data } = rc;
  // Заголовок «День 3 · воскресенье, 3 мая»; если пользователь переписал его без « · », это становится крупным заголовком.
  const parts = p.heading.split(' · ');
  const dayNo = Math.round((Date.parse(`${p.date}T00:00:00Z`) - Date.parse(`${data.trip.startDate}T00:00:00Z`)) / 86_400_000) + 1;
  const label = parts.length > 1 ? parts[0]! : `День ${dayNo}`;
  eyebrow(rc, label, M, M + 44);
  const dh = title(rc, (parts.length > 1 ? parts.slice(1).join(' · ') : p.heading) || formatDayShort(p.date), M, M + 66, W - 2 * M, 72, 44);
  const y0 = M + 66 + dh + 28;

  const slots = p.photos.filter((s) => imageFor(rc, s));
  const items = data.itemsOf(p.date);
  const hasTime = items.some((i) => i.time);
  const col = M + (hasTime ? 140 : 40);
  const footer = 110;
  const gapAfterPhoto = theme.id === 'postcard' ? 56 : 34;
  const baseH = slots.length ? (H > 1600 ? 640 : 500) : 0;

  // Сначала считаем, сколько места займут текст и список, — остаток отдаём фото (или тексту, если фото нет).
  const listRoom = Math.max(0, H - y0 - footer - (baseH ? baseH + gapAfterPhoto : 0));
  const textBox = slots.length ? Math.min(listRoom * 0.46, 330) : Math.min(listRoom * 0.55, 620);
  const maxSize = slots.length ? (theme.id === 'postcard' ? 46 : 36) : theme.id === 'postcard' ? 58 : 48;
  const ft = fitText(ctx, p.text, theme.body, W - 2 * M - (theme.id === 'magazine' ? 26 : 0), Math.max(90, textBox), maxSize, 24, 1.38);
  const rowHs = items.map((i) => (i.notes?.trim() ? 104 : 56));
  const afterText = y0 + (baseH ? baseH + gapAfterPhoto : 0) + ft.height + 26;
  let used = 0;
  let count = 0;
  for (const h of rowHs) {
    if (afterText + used + h > H - footer - (count < items.length - 1 ? 56 : 0)) break;
    used += h;
    count++;
  }
  if (count === items.length - 1 && afterText + used + rowHs[count]! <= H - footer) {
    used += rowHs[count]!;
    count++;
  }
  const listH = used + (count < items.length ? 56 : 0);
  const slack = H - footer - (afterText + listH);
  const photoH = baseH + (slots.length && slack > 60 ? Math.min(slack - 30, H > 1600 ? 560 : 160) : 0);

  let y = y0;
  if (!slots.length) {
    // Без фото страницу украшает крупный номер дня — он же «заполняет» нижнюю часть.
    const n = label?.match(/\d+/)?.[0];
    if (n && H - afterText - listH > 380) {
      ctx.save();
      ctx.globalAlpha = theme.id === 'minimal' ? 0.07 : 0.1;
      ctx.fillStyle = theme.accent;
      ctx.font = theme.id === 'postcard' ? `400 ${Math.round(H * 0.34)}px ${FONT.hand}` : `800 ${Math.round(H * 0.34)}px ${theme.id === 'magazine' ? FONT.serif : FONT.sans}`;
      ctx.textAlign = 'right';
      ctx.textBaseline = 'alphabetic';
      ctx.fillText(n, W - M, H - footer - 20);
      ctx.restore();
    }
  }
  if (slots.length) {
    const gap = 18;
    const full = W - 2 * M;
    if (slots.length === 1) photo(rc, { x: M, y, w: full, h: photoH }, slots[0], 0);
    else if (slots.length === 2) {
      const w2 = (full - gap) / 2;
      photo(rc, { x: M, y, w: w2, h: photoH }, slots[0], 0);
      photo(rc, { x: M + w2 + gap, y, w: w2, h: photoH }, slots[1], 1);
    } else {
      const wl = full * 0.6;
      const wr = full - wl - gap;
      const hh = (photoH - gap) / 2;
      photo(rc, { x: M, y, w: wl, h: photoH }, slots[0], 0);
      photo(rc, { x: M + wl + gap, y, w: wr, h: hh }, slots[1], 1);
      photo(rc, { x: M + wl + gap, y: y + hh + gap, w: wr, h: hh }, slots[2], 2);
    }
    y += photoH + gapAfterPhoto;
  }

  ctx.fillStyle = theme.fg;
  if (theme.id === 'magazine') {
    ctx.fillStyle = theme.accent;
    ctx.fillRect(M, y + 4, 6, ft.height - 8);
    ctx.fillStyle = theme.fg;
    drawLines(ctx, ft, M + 26, y);
  } else drawLines(ctx, ft, M, y);
  y += ft.height + 26;

  ctx.strokeStyle = theme.line;
  ctx.lineWidth = 2;
  let ry = y;
  items.slice(0, count).forEach((it, i) => {
    const h = rowHs[i]!;
    const note = it.notes?.trim().replace(/\s+/g, ' ');
    ctx.beginPath();
    ctx.moveTo(M, ry);
    ctx.lineTo(W - M, ry);
    ctx.stroke();
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'left';
    ctx.font = theme.id === 'minimal' ? `600 28px ${FONT.sans}` : theme.id === 'magazine' ? `700 24px ${FONT.sans}` : `600 26px ${FONT.mono}`;
    ctx.fillStyle = theme.accent;
    ctx.fillText(it.time ?? '•', M, ry + 28);
    ctx.font = theme.id === 'postcard' ? theme.body(36) : theme.id === 'magazine' ? `400 31px ${FONT.serif}` : `500 30px ${FONT.sans}`;
    ctx.fillStyle = theme.fg;
    ctx.fillText(ellipsize(ctx, it.title, W - M - col), col, ry + 29);
    if (note) {
      ctx.font = theme.id === 'postcard' ? theme.body(28) : theme.id === 'magazine' ? `italic 400 26px ${FONT.serif}` : `400 26px ${FONT.sans}`;
      ctx.fillStyle = theme.muted;
      ctx.fillText(ellipsize(ctx, note, W - M - col), col, ry + 72);
    }
    ry += h;
  });
  if (count < items.length) {
    ctx.font = theme.label(24);
    ctx.fillStyle = theme.muted;
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    ctx.fillText(`и ещё ${items.length - count}`, col, ry + 28);
  }
}

// --- Факты -----------------------------------------------------------------------------------------------------------

function stats(rc: RC, p: Extract<DiaryPage, { kind: 'stats' }>) {
  const { ctx, W, H, theme } = rc;
  eyebrow(rc, 'Рекорды', M, M + 44);
  const th = title(rc, 'Факты о поездке', M, M + 66, W - 2 * M, 80, 48);
  let y = M + 66 + th + 20;
  ctx.font = theme.body(34);
  ctx.fillStyle = theme.muted;
  ctx.textAlign = 'left';
  ctx.textBaseline = 'top';
  ctx.fillText(ellipsize(ctx, p.text, W - 2 * M), M, y);
  y += 70;
  const avail = H - y - 120;
  // Подбираем размер, при котором все факты помещаются.
  let size = H > 1600 ? 44 : 40;
  let blocks: string[][] = [];
  let total = 0;
  for (; size >= 24; size -= 2) {
    ctx.font = theme.body(size);
    blocks = p.lines.map((l) => wrap(ctx, l, W - 2 * M - 70));
    total = blocks.reduce((s, b) => s + b.length * size * 1.35 + 26, 0);
    if (total <= avail) break;
  }
  // Если места много — раздвигаем факты, чтобы страница не выглядела пустой снизу.
  const spread = Math.max(0, Math.min(80, (avail - total) / Math.max(1, blocks.length)));
  ctx.textBaseline = 'top';
  blocks.forEach((b, i) => {
    ctx.fillStyle = theme.id === 'postcard' ? theme.accent2 : theme.accent;
    if (theme.id === 'magazine') ctx.fillRect(M, y + size * 0.3, 14, 14);
    else (ctx.beginPath(), ctx.arc(M + 8, y + size * 0.62, 8, 0, Math.PI * 2), ctx.fill());
    ctx.fillStyle = theme.fg;
    ctx.font = theme.body(size);
    ctx.textAlign = 'left';
    b.forEach((l, k) => ctx.fillText(l, M + 50, y + k * size * 1.35));
    y += b.length * size * 1.35 + 26 + spread;
    void i;
  });
}

// --- Карта маршрута --------------------------------------------------------------------------------------------------

function mapPage(rc: RC, p: Extract<DiaryPage, { kind: 'map' }>) {
  const { ctx, W, H, theme, data } = rc;
  eyebrow(rc, 'Маршрут', M, M + 44);
  const th = title(rc, 'Путь на карте', M, M + 66, W - 2 * M, 80, 48);
  const top = M + 66 + th + 24;
  const mapH = Math.min(H * (H > 1600 ? 0.62 : 0.52), H - top - 330);
  const rect: Rect = { x: M, y: top, w: W - 2 * M, h: mapH };
  drawRouteMap(ctx, rect, data.world, routePoints(rc), data.trip.countryCode, theme.map, { labels: true, fontSize: 24, font: theme.id === 'postcard' ? FONT.hand : FONT.sans, numbers: true, radius: theme.id === 'magazine' ? 0 : 24 });
  ctx.strokeStyle = theme.line;
  ctx.lineWidth = 3;
  roundRect(ctx, rect, theme.id === 'magazine' ? 0 : 24);
  ctx.stroke();
  const ft = fitText(ctx, p.text, theme.body, W - 2 * M, H - top - mapH - 150, 36, 24, 1.4);
  ctx.fillStyle = theme.fg;
  drawLines(ctx, ft, M, top + mapH + 30);
}

// --- Финал -----------------------------------------------------------------------------------------------------------

function closing(rc: RC, p: Extract<DiaryPage, { kind: 'closing' }>) {
  const { ctx, W, H, theme, data } = rc;
  const cy = H * 0.44;
  const box = W - 2 * M - 80;
  const f = fitText(ctx, p.text, theme.head, box, 520, 84, 40, 1.22);
  // украшение — над текстом, на любой его высоте
  const decoY = cy - f.height / 2 - 70;
  ctx.save();
  ctx.fillStyle = theme.accent;
  if (theme.id === 'magazine') ctx.fillRect(W / 2 - 65, decoY, 130, 12);
  else if (theme.id === 'minimal') (ctx.beginPath(), ctx.arc(W / 2, decoY, 14, 0, Math.PI * 2), ctx.fill());
  else {
    ctx.strokeStyle = theme.accent;
    ctx.lineWidth = 4;
    ctx.setLineDash([2, 14]);
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(W / 2 - 160, decoY);
    ctx.lineTo(W / 2 + 160, decoY);
    ctx.stroke();
  }
  ctx.restore();
  ctx.fillStyle = theme.fg;
  drawLines(ctx, f, W / 2, cy - f.height / 2, 'center');
  const fa = data.facts;
  const parts = [`${fa.days} ${pluralWord(fa.days, DAYS)}`, fa.places ? `${fa.places} ${pluralWord(fa.places, PLACES)}` : '', fa.km >= 1 ? `${new Intl.NumberFormat('ru-RU').format(fa.km >= 100 ? Math.round(fa.km / 10) * 10 : Math.round(fa.km))} км` : ''].filter(Boolean);
  ctx.font = theme.label(28);
  ctx.fillStyle = theme.muted;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'alphabetic';
  ctx.fillText(parts.join('  ·  '), W / 2, cy + f.height / 2 + 90);
  ctx.font = theme.label(22);
  ctx.fillText(countryName(data.trip.countryCode).toUpperCase(), W / 2, cy + f.height / 2 + 140);
}
