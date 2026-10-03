/** Helpers for rendering text into SVG overlays composited by Sharp (librsvg). */

export function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

/** Average glyph advance as a fraction of the font size for the condensed display stack. */
const GLYPH_RATIO = 0.56;

export function wrapText(text: string, maxWidth: number, fontSize: number, ratio = GLYPH_RATIO): string[] {
  const maxChars = Math.max(4, Math.floor(maxWidth / (fontSize * ratio)));
  const words = text.trim().split(/\s+/).filter(Boolean);
  const lines: string[] = [];
  let current = '';
  for (const word of words) {
    const chunks = word.length > maxChars ? word.match(new RegExp(`.{1,${maxChars}}`, 'g')) ?? [word] : [word];
    for (const chunk of chunks) {
      const candidate = current ? `${current} ${chunk}` : chunk;
      if (candidate.length <= maxChars) current = candidate;
      else {
        if (current) lines.push(current);
        current = chunk;
      }
    }
  }
  if (current) lines.push(current);
  return lines;
}

/** Picks the largest font size (from max down to min) whose wrapped text fits the box. */
export function fitText(
  text: string,
  box: { width: number; height: number },
  opts: { max: number; min: number; lineHeight?: number; maxLines?: number; ratio?: number },
): { fontSize: number; lines: string[] } {
  const lineHeight = opts.lineHeight ?? 1.1;
  for (let size = opts.max; size >= opts.min; size -= 2) {
    const lines = wrapText(text, box.width, size, opts.ratio);
    if (lines.length * size * lineHeight <= box.height && lines.length <= (opts.maxLines ?? 6)) {
      return { fontSize: size, lines };
    }
  }
  const lines = wrapText(text, box.width, opts.min, opts.ratio).slice(0, opts.maxLines ?? 6);
  return { fontSize: opts.min, lines };
}

export const MEME_FONT = "Impact, Anton, 'Arial Black', 'Liberation Sans', 'DejaVu Sans', sans-serif";
export const UI_FONT = "Inter, 'Helvetica Neue', Arial, 'Liberation Sans', 'DejaVu Sans', sans-serif";

/** Multi-line text block, centred on x, starting at y (top of first line). */
export function textBlock(
  lines: string[],
  opts: {
    x: number;
    y: number;
    fontSize: number;
    fill: string;
    stroke?: string;
    strokeWidth?: number;
    font?: string;
    weight?: number | string;
    anchor?: 'start' | 'middle' | 'end';
    lineHeight?: number;
    uppercase?: boolean;
  },
): string {
  const lh = opts.fontSize * (opts.lineHeight ?? 1.1);
  const stroke = opts.stroke
    ? `stroke="${opts.stroke}" stroke-width="${opts.strokeWidth ?? 6}" stroke-linejoin="round" paint-order="stroke"`
    : '';
  const tspans = lines
    .map((line, i) => `<tspan x="${opts.x}" y="${opts.y + opts.fontSize + i * lh}">${escapeXml(opts.uppercase ? line.toUpperCase() : line)}</tspan>`)
    .join('');
  return `<text font-family="${opts.font ?? MEME_FONT}" font-size="${opts.fontSize}" font-weight="${opts.weight ?? 900}" fill="${opts.fill}" ${stroke} text-anchor="${opts.anchor ?? 'middle'}">${tspans}</text>`;
}
