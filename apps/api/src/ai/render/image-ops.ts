import sharp from 'sharp';
import type { Locale, MemeFormat, PfpBackground, VideoAspectRatio } from '@mascot/shared';
import { MEME_FORMAT_CATALOG } from '@mascot/shared';
import { PipelineError } from '../../common/errors';
import { escapeXml, fitText, MEME_FONT, textBlock, UI_FONT } from './svg-text';

/**
 * Pure Sharp image operations used across the pipeline.
 * Everything here is deterministic and side-effect free (Buffer in → Buffer out).
 */

sharp.cache({ memory: 256, items: 64 });
sharp.concurrency(Math.max(1, Math.min(4, Number(process.env.SHARP_CONCURRENCY ?? 2))));

const TRANSPARENT = { r: 0, g: 0, b: 0, alpha: 0 };
const SUPPORTED_INPUT = new Set(['jpeg', 'png', 'webp', 'heif', 'avif', 'tiff']);

/* ------------------------------------------------------------------ */
/* Uploads                                                             */
/* ------------------------------------------------------------------ */

export interface NormalizedUpload {
  jpeg: Buffer;
  width: number;
  height: number;
}

/**
 * Auto-orients by EXIF, strips all metadata (GPS!), flattens alpha, caps resolution
 * at 1600px and re-encodes as progressive mozjpeg.
 */
export async function normalizeUpload(input: Buffer, minDimension: number): Promise<NormalizedUpload> {
  let meta: sharp.Metadata;
  try {
    meta = await sharp(input, { limitInputPixels: 60_000_000 }).metadata();
  } catch {
    throw new PipelineError('UNSUPPORTED_IMAGE', 'Unreadable image', false, 'This file is not a supported image.');
  }
  if (!meta.format || !SUPPORTED_INPUT.has(meta.format)) {
    throw new PipelineError('UNSUPPORTED_IMAGE', `Unsupported format ${meta.format}`, false, 'Please upload JPG, PNG or WEBP photos.');
  }
  const shortest = Math.min(meta.width ?? 0, meta.height ?? 0);
  if (shortest < minDimension) {
    throw new PipelineError('IMAGE_TOO_SMALL', `Image ${meta.width}x${meta.height} too small`, false, `Photo is too small (min ${minDimension}px).`);
  }
  try {
    const { data, info } = await sharp(input, { limitInputPixels: 60_000_000, failOn: 'error' })
      .rotate()
      .resize({ width: 1600, height: 1600, fit: 'inside', withoutEnlargement: true })
      .flatten({ background: '#ffffff' })
      .jpeg({ quality: 90, mozjpeg: true, progressive: true })
      .toBuffer({ resolveWithObject: true });
    return { jpeg: data, width: info.width, height: info.height };
  } catch (error) {
    if (meta.format === 'heif') {
      throw new PipelineError('UNSUPPORTED_IMAGE', 'HEIC decode unavailable', false, 'HEIC photos are not supported — please share as JPG.');
    }
    throw new PipelineError('UNSUPPORTED_IMAGE', (error as Error).message, false, 'This image appears to be corrupted.');
  }
}

export interface ImageQuality {
  /** Mean luminance 0..1 */
  brightness: number;
  /** Variance of the Laplacian on a 512px greyscale copy — classic blur metric. */
  sharpness: number;
  /** Heuristic 0..1 score combining exposure and sharpness. */
  score: number;
}

export async function imageQuality(jpeg: Buffer): Promise<ImageQuality> {
  const base = sharp(jpeg).greyscale().resize(512, 512, { fit: 'inside' });
  const stats = await base.clone().stats();
  const brightness = (stats.channels[0]?.mean ?? 128) / 255;
  const { data } = await base
    .clone()
    .convolve({ width: 3, height: 3, kernel: [0, 1, 0, 1, -4, 1, 0, 1, 0], offset: 128 })
    .raw()
    .toBuffer({ resolveWithObject: true });
  let sum = 0;
  let sumSq = 0;
  for (let i = 0; i < data.length; i++) {
    const v = (data[i] as number) - 128;
    sum += v;
    sumSq += v * v;
  }
  const mean = sum / data.length;
  const sharpness = sumSq / data.length - mean * mean;
  const exposure = 1 - Math.min(1, Math.abs(brightness - 0.5) * 2.2);
  const sharp01 = Math.min(1, sharpness / 120);
  return { brightness, sharpness, score: Number((0.45 * exposure + 0.55 * sharp01).toFixed(3)) };
}

/** 64-bit difference hash as 16 hex chars (perceptual near-duplicate detection). */
export async function dHash(buffer: Buffer): Promise<string> {
  const { data } = await sharp(buffer).greyscale().resize(9, 8, { fit: 'fill' }).raw().toBuffer({ resolveWithObject: true });
  let bits = 0n;
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const left = data[row * 9 + col] as number;
      const right = data[row * 9 + col + 1] as number;
      bits = (bits << 1n) | (left < right ? 1n : 0n);
    }
  }
  return bits.toString(16).padStart(16, '0');
}

export function hammingDistanceHex(a: string, b: string): number {
  let x = BigInt(`0x${a}`) ^ BigInt(`0x${b}`);
  let count = 0;
  while (x) {
    count += Number(x & 1n);
    x >>= 1n;
  }
  return count;
}

/* ------------------------------------------------------------------ */
/* Transparency                                                        */
/* ------------------------------------------------------------------ */

export async function hasTransparentBackground(png: Buffer): Promise<boolean> {
  const meta = await sharp(png).metadata();
  if (!meta.hasAlpha) return false;
  const { data, info } = await sharp(png).ensureAlpha().extractChannel(3).raw().toBuffer({ resolveWithObject: true });
  const corners = [0, info.width - 1, (info.height - 1) * info.width, info.height * info.width - 1];
  return corners.filter((i) => (data[i] as number) < 16).length >= 3;
}

/**
 * Fallback background removal for providers without alpha output: flood-fills from the
 * image border through pixels similar to the dominant border colour (so interior whites
 * such as eyes and teeth are preserved), then feathers the mask edge.
 */
export async function removeUniformBackground(input: Buffer, tolerance = 42): Promise<Buffer> {
  const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width: w, height: h } = info;
  const px = (i: number) => [data[i * 4] as number, data[i * 4 + 1] as number, data[i * 4 + 2] as number] as const;

  // Dominant border colour = median of border samples.
  const samples: Array<readonly [number, number, number]> = [];
  for (let x = 0; x < w; x += 8) samples.push(px(x), px((h - 1) * w + x));
  for (let y = 0; y < h; y += 8) samples.push(px(y * w), px(y * w + w - 1));
  const median = (k: 0 | 1 | 2) => samples.map((s) => s[k]).sort((a, b) => a - b)[samples.length >> 1] as number;
  const bg = [median(0), median(1), median(2)] as const;
  const tol2 = tolerance * tolerance;
  const close = (i: number) => {
    const [r, g, b] = px(i);
    return (r - bg[0]) ** 2 + (g - bg[1]) ** 2 + (b - bg[2]) ** 2 <= tol2;
  };

  const borderClose = samples.filter((s) => (s[0] - bg[0]) ** 2 + (s[1] - bg[1]) ** 2 + (s[2] - bg[2]) ** 2 <= tol2).length;
  if (borderClose / samples.length < 0.6) return sharp(input).png().toBuffer(); // background not uniform: keep as is

  const mask = new Uint8Array(w * h).fill(255);
  const queue = new Int32Array(w * h);
  let head = 0;
  let tail = 0;
  const seed = (i: number) => {
    if (mask[i] === 255 && close(i)) {
      mask[i] = 0;
      queue[tail++] = i;
    }
  };
  for (let x = 0; x < w; x++) {
    seed(x);
    seed((h - 1) * w + x);
  }
  for (let y = 0; y < h; y++) {
    seed(y * w);
    seed(y * w + w - 1);
  }
  while (head < tail) {
    const i = queue[head++] as number;
    const x = i % w;
    if (x > 0) seed(i - 1);
    if (x < w - 1) seed(i + 1);
    if (i >= w) seed(i - w);
    if (i < w * (h - 1)) seed(i + w);
  }

  const feathered = await sharp(Buffer.from(mask), { raw: { width: w, height: h, channels: 1 } })
    .blur(1.1)
    .toColourspace('b-w')
    .extractChannel(0)
    .raw()
    .toBuffer();
  for (let i = 0; i < w * h; i++) {
    data[i * 4 + 3] = Math.min(data[i * 4 + 3] as number, feathered[i] as number);
  }
  return sharp(data, { raw: { width: w, height: h, channels: 4 } }).png().toBuffer();
}

async function safeTrim(png: Buffer): Promise<Buffer> {
  try {
    return await sharp(png).trim({ threshold: 8 }).png().toBuffer();
  } catch {
    return png;
  }
}

/** Trims transparent borders and centres the subject on a square transparent canvas. */
export async function fitMaster(png: Buffer, size = 1024, padding = 0.05): Promise<Buffer> {
  const trimmed = await safeTrim(png);
  const inner = Math.round(size * (1 - padding * 2));
  const resized = await sharp(trimmed).resize(inner, inner, { fit: 'contain', background: TRANSPARENT }).png().toBuffer();
  const pad = Math.round((size - inner) / 2);
  return sharp(resized)
    .extend({ top: pad, bottom: size - inner - pad, left: pad, right: size - inner - pad, background: TRANSPARENT })
    .png({ compressionLevel: 9 })
    .toBuffer();
}

/* ------------------------------------------------------------------ */
/* Watermark & variants                                                */
/* ------------------------------------------------------------------ */

function watermarkSvg(width: number, height: number): Buffer {
  const fs = Math.max(18, Math.round(width * 0.03));
  const pad = Math.round(fs * 0.9);
  return Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
      <text x="${width - pad}" y="${height - pad}" font-family="${UI_FONT}" font-size="${fs}" font-weight="700" text-anchor="end" fill="#ffffff" fill-opacity="0.75" stroke="#000000" stroke-opacity="0.35" stroke-width="${Math.max(2, fs / 8)}" paint-order="stroke">✦ Mascot AI</text>
    </svg>`,
  );
}

export async function applyWatermark(image: Buffer): Promise<Buffer> {
  const meta = await sharp(image).metadata();
  const width = meta.width ?? 1024;
  const height = meta.height ?? 1024;
  const out = sharp(image).composite([{ input: watermarkSvg(width, height), top: 0, left: 0 }]);
  return meta.format === 'jpeg' ? out.jpeg({ quality: 90 }).toBuffer() : meta.format === 'webp' ? out.webp({ quality: 88 }).toBuffer() : out.png().toBuffer();
}

export interface RenderVariants {
  display: Buffer;
  thumb: Buffer;
}

export async function renderVariants(master: Buffer, opts: { watermark: boolean }): Promise<RenderVariants> {
  let display = await sharp(master).resize(1024, 1024, { fit: 'contain', background: TRANSPARENT }).webp({ quality: 88, alphaQuality: 95 }).toBuffer();
  if (opts.watermark) display = await applyWatermark(display);
  const thumb = await sharp(master).resize(320, 320, { fit: 'contain', background: TRANSPARENT }).webp({ quality: 80 }).toBuffer();
  return { display, thumb };
}

/* ------------------------------------------------------------------ */
/* Stickers                                                            */
/* ------------------------------------------------------------------ */

/**
 * Telegram static sticker: WEBP, 512x512, < 512 KB, with a die-cut white outline.
 */
export async function stickerize(png: Buffer): Promise<Buffer> {
  const S = 512;
  const PAD = 24;
  const trimmed = await safeTrim(png);
  const inner = await sharp(trimmed)
    .resize(S - PAD * 2, S - PAD * 2, { fit: 'contain', background: TRANSPARENT })
    .extend({ top: PAD, bottom: PAD, left: PAD, right: PAD, background: TRANSPARENT })
    .png()
    .toBuffer();
  const alpha = await sharp(inner).extractChannel(3).blur(6).threshold(6).toColourspace('b-w').extractChannel(0).raw().toBuffer();
  if (alpha.length !== S * S) throw new PipelineError('STICKER_MASK', `unexpected mask size ${alpha.length}`, true);
  const outline = await sharp({ create: { width: S, height: S, channels: 3, background: '#ffffff' } })
    .joinChannel(alpha, { raw: { width: S, height: S, channels: 1 } })
    .png()
    .toBuffer();
  const composed = await sharp(outline).composite([{ input: inner }]).png().toBuffer();
  for (const quality of [92, 85, 75, 65, 50]) {
    const webp = await sharp(composed).webp({ quality, alphaQuality: 100, effort: 5 }).toBuffer();
    if (webp.length < 500 * 1024) return webp;
  }
  throw new PipelineError('STICKER_TOO_LARGE', 'Sticker exceeds 512KB after compression', true);
}

/* ------------------------------------------------------------------ */
/* Backgrounds                                                         */
/* ------------------------------------------------------------------ */

function gradientDefs(id: string, colors: string[], angle = 135): string {
  const rad = (angle * Math.PI) / 180;
  const x2 = 0.5 + Math.cos(rad) / 2;
  const y2 = 0.5 + Math.sin(rad) / 2;
  const stops = colors.map((c, i) => `<stop offset="${colors.length === 1 ? 0 : i / (colors.length - 1)}" stop-color="${c}"/>`).join('');
  return `<linearGradient id="${id}" x1="${1 - x2}" y1="${1 - y2}" x2="${x2}" y2="${y2}">${stops}</linearGradient>`;
}

export function backgroundSvg(width: number, height: number, bg: Pick<PfpBackground, 'kind' | 'colors' | 'key'>): Buffer {
  const [c1 = '#7c3aed', c2 = '#db2777', c3 = '#f59e0b'] = bg.colors;
  let pattern = '';
  if (bg.key === 'halftone') {
    const dots: string[] = [];
    const step = Math.round(width / 28);
    for (let y = 0; y < height; y += step) {
      for (let x = 0; x < width; x += step) {
        const r = (step / 2.4) * (1 - y / height) + 1;
        dots.push(`<circle cx="${x + ((y / step) % 2 ? step / 2 : 0)}" cy="${y}" r="${r.toFixed(1)}" fill="${c2}" opacity="0.25"/>`);
      }
    }
    pattern = dots.join('');
  } else if (bg.key === 'rays') {
    const rays: string[] = [];
    const cx = width / 2;
    const cy = height * 0.55;
    const R = Math.max(width, height) * 1.2;
    for (let i = 0; i < 24; i += 2) {
      const a1 = (i / 24) * Math.PI * 2;
      const a2 = ((i + 1) / 24) * Math.PI * 2;
      rays.push(`<path d="M ${cx} ${cy} L ${cx + Math.cos(a1) * R} ${cy + Math.sin(a1) * R} L ${cx + Math.cos(a2) * R} ${cy + Math.sin(a2) * R} Z" fill="#ffffff" opacity="0.14"/>`);
    }
    pattern = rays.join('');
  } else if (bg.key === 'grid') {
    const lines: string[] = [];
    const horizon = height * 0.58;
    for (let i = 0; i <= 12; i++) {
      const y = horizon + ((height - horizon) * (i / 12)) ** 1.6 / (height - horizon) ** 0.6;
      lines.push(`<line x1="0" y1="${y}" x2="${width}" y2="${y}" stroke="${c3}" stroke-width="2" opacity="0.6"/>`);
    }
    for (let i = -12; i <= 12; i++) {
      lines.push(`<line x1="${width / 2 + i * 18}" y1="${horizon}" x2="${width / 2 + i * width * 0.18}" y2="${height}" stroke="${c3}" stroke-width="2" opacity="0.6"/>`);
    }
    pattern = `<circle cx="${width / 2}" cy="${horizon - height * 0.12}" r="${width * 0.22}" fill="${c2}" opacity="0.85"/>${lines.join('')}`;
  }
  const fillColors = bg.key === 'grid' ? [c1, c1, c2] : bg.colors.length ? bg.colors : [c1, c2, c3];
  return Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
      <defs>${gradientDefs('bg', fillColors)}<radialGradient id="glow" cx="0.5" cy="0.45" r="0.6"><stop offset="0" stop-color="#ffffff" stop-opacity="0.28"/><stop offset="1" stop-color="#ffffff" stop-opacity="0"/></radialGradient></defs>
      <rect width="100%" height="100%" fill="url(#bg)"/>${pattern}<rect width="100%" height="100%" fill="url(#glow)"/>
    </svg>`,
  );
}

/* ------------------------------------------------------------------ */
/* Profile pictures                                                    */
/* ------------------------------------------------------------------ */

export async function composeProfilePicture(
  master: Buffer,
  bg: Pick<PfpBackground, 'kind' | 'colors' | 'key'>,
  size: number,
  sceneBackground?: Buffer,
): Promise<Buffer> {
  const background = sceneBackground
    ? await sharp(sceneBackground).resize(size, size, { fit: 'cover' }).png().toBuffer()
    : await sharp(backgroundSvg(size, size, bg)).png().toBuffer();
  const subjectSize = Math.round(size * 0.94);
  const subject = await sharp(await safeTrim(master)).resize(subjectSize, subjectSize, { fit: 'contain', position: 'south', background: TRANSPARENT }).png().toBuffer();
  return sharp(background)
    .composite([{ input: subject, top: size - subjectSize, left: Math.round((size - subjectSize) / 2) }])
    .png()
    .toBuffer();
}

/* ------------------------------------------------------------------ */
/* Character card                                                      */
/* ------------------------------------------------------------------ */

export async function characterCard(opts: {
  render: Buffer;
  name: string;
  styleName: string;
  gradient: [string, string];
  highlights: Array<{ label: string; value: string }>;
  watermark: boolean;
}): Promise<Buffer> {
  const W = 1080;
  const H = 1440;
  const [g1, g2] = opts.gradient;
  const chips = opts.highlights.slice(0, 8).map((h, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 70 + col * 480;
    const y = 1030 + row * 76;
    const value = h.value.length > 22 ? `${h.value.slice(0, 21)}…` : h.value;
    return `<g><rect x="${x}" y="${y}" width="460" height="62" rx="18" fill="#ffffff" fill-opacity="0.08" stroke="#ffffff" stroke-opacity="0.12"/>
      <text x="${x + 22}" y="${y + 40}" font-family="${UI_FONT}" font-size="22" font-weight="600" fill="#ffffff" fill-opacity="0.55">${escapeXml(h.label.toUpperCase())}</text>
      <text x="${x + 440}" y="${y + 41}" font-family="${UI_FONT}" font-size="26" font-weight="700" fill="#ffffff" text-anchor="end">${escapeXml(value)}</text></g>`;
  });
  const name = opts.name.length > 18 ? `${opts.name.slice(0, 17)}…` : opts.name;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
    <defs>
      ${gradientDefs('hero', [g1, g2])}
      <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1"><stop offset="0.45" stop-color="#0b0b10" stop-opacity="0"/><stop offset="0.78" stop-color="#0b0b10" stop-opacity="1"/></linearGradient>
    </defs>
    <rect width="${W}" height="${H}" fill="#0b0b10"/>
    <rect x="30" y="30" width="${W - 60}" height="${H - 60}" rx="56" fill="url(#hero)"/>
    <rect x="30" y="30" width="${W - 60}" height="${H - 60}" rx="56" fill="url(#fade)"/>
    <rect x="30" y="30" width="${W - 60}" height="${H - 60}" rx="56" fill="none" stroke="#ffffff" stroke-opacity="0.18" stroke-width="2"/>
    <text x="80" y="110" font-family="${UI_FONT}" font-size="26" font-weight="800" letter-spacing="6" fill="#ffffff" fill-opacity="0.85">MASCOT DNA</text>
    <rect x="${W - 80 - 260}" y="74" width="260" height="52" rx="26" fill="#000000" fill-opacity="0.35"/>
    <text x="${W - 80 - 130}" y="109" font-family="${UI_FONT}" font-size="24" font-weight="700" fill="#ffffff" text-anchor="middle">${escapeXml(opts.styleName)}</text>
    <text x="80" y="1000" font-family="${UI_FONT}" font-size="76" font-weight="900" fill="#ffffff">${escapeXml(name)}</text>
    <text x="${W - 80}" y="${H - 62}" font-family="${UI_FONT}" font-size="24" font-weight="700" fill="#ffffff" fill-opacity="0.6" text-anchor="end">✦ Mascot AI</text>
    ${chips.join('')}
  </svg>`;
  const mascot = await sharp(opts.render).resize(800, 800, { fit: 'contain', background: TRANSPARENT }).png().toBuffer();
  let card = await sharp(Buffer.from(svg)).composite([{ input: mascot, top: 130, left: 140 }]).png().toBuffer();
  if (opts.watermark) card = await applyWatermark(card);
  return card;
}

/* ------------------------------------------------------------------ */
/* Memes                                                               */
/* ------------------------------------------------------------------ */

/** Fixed captions baked into meme templates, per language of the meme. */
const MEME_LABELS: Record<Locale, { pov: string; nobody: string; me: string; expectation: string; reality: string; now: string }> = {
  en: { pov: 'POV:', nobody: 'Nobody:', me: 'Me:', expectation: 'EXPECTATION', reality: 'REALITY', now: 'now' },
  ru: { pov: 'POV:', nobody: 'Никто:', me: 'Я:', expectation: 'ОЖИДАНИЕ', reality: 'РЕАЛЬНОСТЬ', now: 'сейчас' },
};

/** Meme language: Cyrillic text wins, otherwise the user's locale. */
export function memeLocale(text: string, fallback: Locale): Locale {
  return /[\u0400-\u04FF]/.test(text) ? 'ru' : fallback;
}

export interface MemeTexts {
  top?: string | null;
  bottom?: string | null;
}

export async function composeMeme(
  format: MemeFormat,
  panels: Buffer[],
  texts: MemeTexts,
  opts: { gradient: [string, string]; watermark: boolean; displayName: string; locale?: Locale },
): Promise<Buffer> {
  const recipe = MEME_FORMAT_CATALOG[format];
  const L = MEME_LABELS[opts.locale ?? 'en'];
  const W = recipe.width;
  const H = recipe.height;
  const [g1, g2] = opts.gradient;
  const top = texts.top?.trim() ?? '';
  const bottom = texts.bottom?.trim() ?? '';
  const layers: sharp.OverlayOptions[] = [];
  let svgBody = '';
  const fitPanel = async (buf: Buffer, w: number, h: number) =>
    sharp(await safeTrim(buf)).resize(w, h, { fit: 'contain', position: 'south', background: TRANSPARENT }).png().toBuffer();

  switch (format) {
    case 'classic': {
      svgBody = `<rect width="${W}" height="${H}" fill="url(#g)"/>`;
      layers.push({ input: await fitPanel(panels[0]!, W, H - 60), top: 60, left: 0 });
      const t = fitText(top, { width: W - 80, height: 260 }, { max: 104, min: 48, maxLines: 3 });
      const b = fitText(bottom, { width: W - 80, height: 260 }, { max: 104, min: 48, maxLines: 3 });
      const bY = H - 40 - b.lines.length * b.fontSize * 1.1;
      layers.push({
        input: Buffer.from(
          `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">${top ? textBlock(t.lines, { x: W / 2, y: 28, fontSize: t.fontSize, fill: '#fff', stroke: '#000', strokeWidth: t.fontSize / 7, uppercase: true }) : ''}${bottom ? textBlock(b.lines, { x: W / 2, y: bY, fontSize: b.fontSize, fill: '#fff', stroke: '#000', strokeWidth: b.fontSize / 7, uppercase: true }) : ''}</svg>`,
        ),
        top: 0,
        left: 0,
      });
      break;
    }
    case 'pov': {
      const caption = `${L.pov} ${top || bottom}`;
      const t = fitText(caption, { width: W - 120, height: 300 }, { max: 72, min: 40, ratio: 0.52, maxLines: 4 });
      svgBody = `<rect width="${W}" height="${H}" fill="url(#g)"/><rect width="${W}" height="${H}" fill="url(#shade)"/>`;
      layers.push({ input: await fitPanel(panels[0]!, W, H - 260), top: 260, left: 0 });
      layers.push({
        input: Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">${textBlock(t.lines, { x: 60, y: 60, fontSize: t.fontSize, fill: '#fff', stroke: '#000', strokeWidth: 4, font: UI_FONT, weight: 800, anchor: 'start' })}</svg>`),
        top: 0,
        left: 0,
      });
      break;
    }
    case 'nobody-me': {
      const me = bottom || top;
      const t = fitText(`${L.me} ${me}`, { width: W - 120, height: 220 }, { max: 58, min: 36, ratio: 0.5, maxLines: 4 });
      svgBody = `<rect width="${W}" height="${H}" fill="#ffffff"/><rect y="400" width="${W}" height="${H - 400}" fill="url(#g)"/>
        <text x="60" y="110" font-family="${UI_FONT}" font-size="58" font-weight="700" fill="#0f0f14">${L.nobody}</text>
        <text x="60" y="190" font-family="${UI_FONT}" font-size="58" font-weight="700" fill="#0f0f14">${escapeXml(top && bottom ? top : '')}</text>
        ${textBlock(t.lines, { x: 60, y: 210, fontSize: t.fontSize, fill: '#0f0f14', font: UI_FONT, weight: 700, anchor: 'start' })}`;
      layers.push({ input: await fitPanel(panels[0]!, W, H - 420), top: 420, left: 0 });
      break;
    }
    case 'expectation-reality': {
      const half = H / 2;
      svgBody = `<rect width="${W}" height="${half}" fill="url(#g)"/><rect y="${half}" width="${W}" height="${half}" fill="#16161d"/>
        <rect x="40" y="36" width="380" height="70" rx="16" fill="#000" fill-opacity="0.55"/><text x="230" y="84" font-family="${MEME_FONT}" font-size="44" fill="#fff" text-anchor="middle">${L.expectation}</text>
        <rect x="40" y="${half + 36}" width="${L.reality.length > 8 ? 380 : 300}" height="70" rx="16" fill="#ffffff" fill-opacity="0.9"/><text x="${L.reality.length > 8 ? 230 : 190}" y="${half + 84}" font-family="${MEME_FONT}" font-size="44" fill="#000" text-anchor="middle">${L.reality}</text>`;
      layers.push({ input: await fitPanel(panels[0]!, W - 300, half - 20), top: 20, left: 300 });
      layers.push({ input: await fitPanel(panels[1] ?? panels[0]!, W - 300, half - 20), top: half + 20, left: 300 });
      const t = fitText(top, { width: 280, height: half - 180 }, { max: 52, min: 28, ratio: 0.5, maxLines: 6 });
      const b = fitText(bottom, { width: 280, height: half - 180 }, { max: 52, min: 28, ratio: 0.5, maxLines: 6 });
      layers.push({
        input: Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">${textBlock(t.lines, { x: 40, y: 140, fontSize: t.fontSize, fill: '#fff', stroke: '#000', strokeWidth: 3, font: UI_FONT, weight: 800, anchor: 'start' })}${textBlock(b.lines, { x: 40, y: half + 140, fontSize: b.fontSize, fill: '#fff', font: UI_FONT, weight: 800, anchor: 'start' })}</svg>`),
        top: 0,
        left: 0,
      });
      break;
    }
    case 'tweet': {
      const text = top || bottom;
      const t = fitText(text, { width: W - 200, height: 260 }, { max: 50, min: 32, ratio: 0.5, maxLines: 5 });
      const handle = `@${opts.displayName.toLowerCase().replace(/[^a-z0-9_]/g, '').slice(0, 15) || 'mascot'}`;
      const textBottom = 250 + t.lines.length * t.fontSize * 1.2;
      svgBody = `<rect width="${W}" height="${H}" fill="#0b0b10"/><rect x="40" y="40" width="${W - 80}" height="${H - 80}" rx="44" fill="#16161f" stroke="#ffffff" stroke-opacity="0.1"/>
        <circle cx="140" cy="150" r="54" fill="url(#g)"/>
        <text x="220" y="140" font-family="${UI_FONT}" font-size="38" font-weight="800" fill="#ffffff">${escapeXml(opts.displayName.slice(0, 22))}</text>
        <text x="220" y="186" font-family="${UI_FONT}" font-size="30" font-weight="500" fill="#8b8b9a">${escapeXml(handle)} · ${L.now}</text>
        ${textBlock(t.lines, { x: 100, y: 230, fontSize: t.fontSize, fill: '#f4f4f8', font: UI_FONT, weight: 500, anchor: 'start', lineHeight: 1.2 })}
        <rect x="100" y="${textBottom + 30}" width="${W - 200}" height="${H - textBottom - 170}" rx="32" fill="url(#g)"/>`;
      const panelH = Math.round(H - textBottom - 190);
      layers.push({ input: await fitPanel(panels[0]!, W - 240, panelH), top: Math.round(textBottom + 40), left: 120 });
      const avatar = await sharp(await safeTrim(panels[0]!)).resize(100, 100, { fit: 'cover', position: 'north' }).png().toBuffer();
      const circle = Buffer.from('<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><circle cx="50" cy="50" r="50" fill="#fff"/></svg>');
      layers.push({ input: await sharp(avatar).composite([{ input: circle, blend: 'dest-in' }]).png().toBuffer(), top: 100, left: 90 });
      break;
    }
    case 'caption-bar':
    default: {
      const text = top || bottom;
      const t = fitText(text, { width: W - 100, height: 300 }, { max: 64, min: 36, ratio: 0.5, maxLines: 5 });
      const barH = Math.round(t.lines.length * t.fontSize * 1.18 + 80);
      svgBody = `<rect width="${W}" height="${H}" fill="url(#g)"/><rect width="${W}" height="${barH}" fill="#ffffff"/>
        ${textBlock(t.lines, { x: W / 2, y: 36, fontSize: t.fontSize, fill: '#0f0f14', font: UI_FONT, weight: 700, lineHeight: 1.18 })}`;
      layers.push({ input: await fitPanel(panels[0]!, W, H - barH - 10), top: barH + 10, left: 0 });
      break;
    }
  }

  const base = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}"><defs>${gradientDefs('g', [g1, g2])}<linearGradient id="shade" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#000" stop-opacity="0.55"/><stop offset="0.4" stop-color="#000" stop-opacity="0"/></linearGradient></defs>${svgBody}</svg>`,
  );
  let meme = await sharp(base).composite(layers).jpeg({ quality: 90, mozjpeg: true }).toBuffer();
  if (opts.watermark) meme = await applyWatermark(meme);
  return meme;
}

/* ------------------------------------------------------------------ */
/* Video start frames                                                  */
/* ------------------------------------------------------------------ */

export const VIDEO_DIMENSIONS: Record<VideoAspectRatio, { width: number; height: number }> = {
  '9:16': { width: 720, height: 1280 },
  '1:1': { width: 960, height: 960 },
  '16:9': { width: 1280, height: 720 },
};

export async function videoStartFrame(
  master: Buffer,
  aspect: VideoAspectRatio,
  gradient: [string, string],
  sceneBackground?: Buffer,
): Promise<Buffer> {
  const { width, height } = VIDEO_DIMENSIONS[aspect];
  const background = sceneBackground
    ? await sharp(sceneBackground).resize(width, height, { fit: 'cover' }).png().toBuffer()
    : await sharp(backgroundSvg(width, height, { key: 'aurora', kind: 'gradient', colors: [gradient[0], gradient[1]] })).png().toBuffer();
  const box = Math.round(Math.min(width, height) * (aspect === '9:16' ? 0.98 : 0.86));
  const subject = await sharp(await safeTrim(master)).resize(box, box, { fit: 'contain', position: 'south', background: TRANSPARENT }).png().toBuffer();
  return sharp(background)
    .composite([{ input: subject, top: height - box, left: Math.round((width - box) / 2) }])
    .png()
    .toBuffer();
}

export async function toJpeg(image: Buffer, quality = 90): Promise<Buffer> {
  return sharp(image).flatten({ background: '#ffffff' }).jpeg({ quality, mozjpeg: true }).toBuffer();
}

export async function dataUrl(image: Buffer, mime = 'image/jpeg'): Promise<string> {
  return `data:${mime};base64,${image.toString('base64')}`;
}
