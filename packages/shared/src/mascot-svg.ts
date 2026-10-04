import {
  EYE_COLOR_HEX,
  HAIR_COLOR_HEX,
  SKIN_TONE_HEX,
  type FaceShape,
  type HairStyle,
  type MascotDna,
} from './dna';
import { baseEmotion, type StickerEmotion } from './emotions';

/**
 * Deterministic procedural mascot renderer (pure SVG string, no DOM).
 *
 * Used for:
 *  - landing page showcase art (web)
 *  - the `mock` image provider, so the full pipeline runs locally without AI keys
 *  - placeholder thumbnails while real renders are in flight
 *
 * It is DNA-faithful on purpose: face shape, skin tone, hair, eyes, brows, nose,
 * mouth, facial hair and glasses all map to visible geometry, which makes it a
 * useful debugging tool for the DNA extraction stage as well.
 */

export interface MascotSvgOptions {
  size?: number;
  emotion?: StickerEmotion | 'neutral';
  background?: [string, string] | 'transparent';
  outfitColor?: string;
  /** Adds a thick white die-cut outline (sticker look). */
  stickerOutline?: boolean;
  /** Cartoon ink outline strength (0 = none). */
  ink?: number;
}

/* ----------------------------- color utils ----------------------------- */

function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace('#', '');
  const n = parseInt(h.length === 3 ? h.split('').map((c) => c + c).join('') : h, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

function rgbToHex([r, g, b]: [number, number, number]): string {
  const c = (v: number) => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, '0');
  return `#${c(r)}${c(g)}${c(b)}`;
}

/** amount > 0 lightens towards white, < 0 darkens towards black. */
export function shade(hex: string, amount: number): string {
  const [r, g, b] = hexToRgb(hex);
  const t = amount > 0 ? 255 : 0;
  const a = Math.abs(amount);
  return rgbToHex([r + (t - r) * a, g + (t - g) * a, b + (t - b) * a]);
}

function hash(input: string): number {
  let h = 2166136261;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

/* ----------------------------- geometry ----------------------------- */

interface HeadGeometry {
  fw: number; // half width at forehead
  cw: number; // half width at cheekbones
  jw: number; // half width at jaw
  chin: number; // half width of chin
  h: number; // half height
}

const HEAD: Record<FaceShape, HeadGeometry> = {
  oval: { fw: 112, cw: 122, jw: 98, chin: 40, h: 150 },
  round: { fw: 124, cw: 134, jw: 120, chin: 66, h: 138 },
  square: { fw: 122, cw: 126, jw: 124, chin: 78, h: 145 },
  heart: { fw: 130, cw: 124, jw: 90, chin: 22, h: 148 },
  oblong: { fw: 104, cw: 110, jw: 100, chin: 48, h: 164 },
  diamond: { fw: 96, cw: 132, jw: 94, chin: 30, h: 150 },
  triangle: { fw: 100, cw: 118, jw: 128, chin: 70, h: 145 },
};

const CX = 256;
const CY = 228;

function headPath(g: HeadGeometry): string {
  const top = CY - g.h;
  const fy = CY - g.h * 0.42;
  const cy = CY + g.h * 0.12;
  const jy = CY + g.h * 0.62;
  const chinY = CY + g.h;
  const side = (s: 1 | -1) =>
    [
      `C ${CX + s * g.fw * 0.92} ${top} ${CX + s * g.fw} ${fy - g.h * 0.3} ${CX + s * g.fw} ${fy}`,
      `C ${CX + s * g.fw} ${fy + (cy - fy) * 0.5} ${CX + s * g.cw} ${cy - g.h * 0.12} ${CX + s * g.cw} ${cy}`,
      `C ${CX + s * g.cw} ${cy + g.h * 0.22} ${CX + s * g.jw} ${jy - g.h * 0.16} ${CX + s * g.jw} ${jy}`,
      `C ${CX + s * g.jw * 0.86} ${jy + g.h * 0.24} ${CX + s * g.chin * 1.5} ${chinY} ${CX} ${chinY}`,
    ].join(' ');
  // Right side goes top → chin; left side is drawn chin → top by reversing control points.
  const left = [
    `C ${CX - g.chin * 1.5} ${chinY} ${CX - g.jw * 0.86} ${jy + g.h * 0.24} ${CX - g.jw} ${jy}`,
    `C ${CX - g.jw} ${jy - g.h * 0.16} ${CX - g.cw} ${cy + g.h * 0.22} ${CX - g.cw} ${cy}`,
    `C ${CX - g.cw} ${cy - g.h * 0.12} ${CX - g.fw} ${fy + (cy - fy) * 0.5} ${CX - g.fw} ${fy}`,
    `C ${CX - g.fw} ${fy - g.h * 0.3} ${CX - g.fw * 0.92} ${top} ${CX} ${top}`,
  ].join(' ');
  return `M ${CX} ${top} ${side(1)} ${left} Z`;
}

/* ----------------------------- hair ----------------------------- */

function hairLayers(style: HairStyle, g: HeadGeometry, color: string, seed: number) {
  const top = CY - g.h;
  const w = g.fw + 10;
  const dark = shade(color, -0.25);
  const light = shade(color, 0.22);
  const back: string[] = [];
  const front: string[] = [];
  const fill = `url(#hairGrad)`;

  const cap = (height: number, fringe: number) =>
    `M ${CX - w - 4} ${CY - g.h * 0.28} C ${CX - w - 10} ${top - height} ${CX + w + 10} ${top - height} ${CX + w + 4} ${CY - g.h * 0.28} C ${CX + w * 0.6} ${top + fringe} ${CX - w * 0.2} ${top + fringe * 1.15} ${CX - w - 4} ${CY - g.h * 0.28} Z`;

  switch (style) {
    case 'bald':
      front.push(`<ellipse cx="${CX - 30}" cy="${top + 36}" rx="34" ry="14" fill="#ffffff" opacity="0.18"/>`);
      break;
    case 'buzz-cut':
      front.push(`<path d="${cap(8, 52)}" fill="${color}" opacity="0.55"/>`);
      break;
    case 'crew-cut':
    case 'short-textured':
    case 'side-part':
    case 'undercut':
      front.push(`<path d="${cap(style === 'short-textured' ? 30 : 22, 58)}" fill="${fill}"/>`);
      if (style === 'side-part') {
        front.push(`<path d="M ${CX - 40} ${top + 6} q 10 30 0 58" stroke="${dark}" stroke-width="4" fill="none" opacity="0.6"/>`);
      }
      if (style === 'short-textured') {
        for (let i = 0; i < 7; i++) {
          const x = CX - w + 20 + i * ((w * 2 - 40) / 6);
          front.push(`<path d="M ${x} ${top + 30} q 8 -16 16 -3" stroke="${light}" stroke-width="5" fill="none" stroke-linecap="round" opacity="0.55"/>`);
        }
      }
      break;
    case 'quiff':
    case 'pompadour':
      front.push(`<path d="${cap(style === 'pompadour' ? 70 : 52, 56)}" fill="${fill}"/>`);
      front.push(`<path d="M ${CX - 64} ${top + 8} C ${CX - 30} ${top - (style === 'pompadour' ? 34 : 22)} ${CX + 40} ${top - (style === 'pompadour' ? 30 : 18)} ${CX + 72} ${top + 18}" stroke="${light}" stroke-width="7" fill="none" stroke-linecap="round" opacity="0.55"/>`);
      break;
    case 'mohawk':
      front.push(`<path d="${cap(4, 50)}" fill="${color}" opacity="0.35"/>`);
      front.push(`<path d="M ${CX - 26} ${top + 30} C ${CX - 30} ${top - 70} ${CX + 30} ${top - 70} ${CX + 26} ${top + 30} Z" fill="${fill}"/>`);
      break;
    case 'mullet':
      back.push(`<path d="M ${CX - g.cw} ${CY} C ${CX - g.cw - 10} ${CY + 150} ${CX + g.cw + 10} ${CY + 150} ${CX + g.cw} ${CY} Z" fill="${dark}"/>`);
      front.push(`<path d="${cap(26, 56)}" fill="${fill}"/>`);
      break;
    case 'curly-short':
    case 'afro': {
      const r = style === 'afro' ? 46 : 26;
      const ring = style === 'afro' ? 1.32 : 1.06;
      const n = style === 'afro' ? 16 : 13;
      const pts: string[] = [];
      for (let i = 0; i < n; i++) {
        const a = Math.PI + (i / (n - 1)) * Math.PI;
        const x = CX + Math.cos(a) * w * ring;
        const y = CY - g.h * 0.2 + Math.sin(a) * g.h * (style === 'afro' ? 1.05 : 0.92);
        const jitter = ((seed >> (i % 16)) & 7) - 3;
        pts.push(`<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r + jitter}" fill="${i % 2 ? color : dark}"/>`);
      }
      (style === 'afro' ? back : front).push(...pts);
      if (style === 'afro') back.push(`<ellipse cx="${CX}" cy="${CY - g.h * 0.35}" rx="${w * 1.25}" ry="${g.h * 0.9}" fill="${color}"/>`);
      front.push(`<path d="${cap(style === 'afro' ? 40 : 24, 50)}" fill="${fill}"/>`);
      break;
    }
    case 'medium-wavy':
    case 'medium-straight':
    case 'bob': {
      const len = style === 'bob' ? g.h * 0.75 : g.h * 0.95;
      back.push(`<path d="M ${CX - w - 12} ${CY - g.h * 0.4} L ${CX - w - 16} ${CY + len} Q ${CX} ${CY + len + 26} ${CX + w + 16} ${CY + len} L ${CX + w + 12} ${CY - g.h * 0.4} Z" fill="${dark}"/>`);
      front.push(`<path d="${cap(32, 70)}" fill="${fill}"/>`);
      front.push(`<path d="M ${CX - w - 6} ${CY - g.h * 0.3} C ${CX - w - 20} ${CY + 20} ${CX - w + 6} ${CY + len * 0.6} ${CX - w - 10} ${CY + len}" stroke="${color}" stroke-width="26" fill="none" stroke-linecap="round"/>`);
      front.push(`<path d="M ${CX + w + 6} ${CY - g.h * 0.3} C ${CX + w + 20} ${CY + 20} ${CX + w - 6} ${CY + len * 0.6} ${CX + w + 10} ${CY + len}" stroke="${color}" stroke-width="26" fill="none" stroke-linecap="round"/>`);
      break;
    }
    case 'long-straight':
    case 'long-wavy':
    case 'long-curly': {
      const wave = style === 'long-straight' ? 0 : style === 'long-wavy' ? 18 : 30;
      back.push(`<path d="M ${CX - w - 14} ${CY - g.h * 0.5} C ${CX - w - 30 - wave} ${CY + 80} ${CX - w + wave} ${CY + 180} ${CX - w - 24} ${CY + 270} L ${CX + w + 24} ${CY + 270} C ${CX + w - wave} ${CY + 180} ${CX + w + 30 + wave} ${CY + 80} ${CX + w + 14} ${CY - g.h * 0.5} Z" fill="${dark}"/>`);
      front.push(`<path d="${cap(34, 64)}" fill="${fill}"/>`);
      front.push(`<path d="M ${CX - w - 4} ${CY - g.h * 0.32} C ${CX - w - 24} ${CY + 60} ${CX - w + wave} ${CY + 140} ${CX - w - 16} ${CY + 230}" stroke="${color}" stroke-width="30" fill="none" stroke-linecap="round"/>`);
      front.push(`<path d="M ${CX + w + 4} ${CY - g.h * 0.32} C ${CX + w + 24} ${CY + 60} ${CX + w - wave} ${CY + 140} ${CX + w + 16} ${CY + 230}" stroke="${color}" stroke-width="30" fill="none" stroke-linecap="round"/>`);
      break;
    }
    case 'pixie':
      front.push(`<path d="${cap(26, 64)}" fill="${fill}"/>`);
      front.push(`<path d="M ${CX + w} ${top + 30} C ${CX + 20} ${top + 40} ${CX - 40} ${top + 70} ${CX - w + 10} ${top + 96}" stroke="${color}" stroke-width="22" fill="none" stroke-linecap="round"/>`);
      break;
    case 'ponytail':
      back.push(`<path d="M ${CX + w - 10} ${CY - g.h * 0.6} C ${CX + w + 90} ${CY - g.h * 0.4} ${CX + w + 60} ${CY + 120} ${CX + w + 20} ${CY + 170}" stroke="${dark}" stroke-width="40" fill="none" stroke-linecap="round"/>`);
      front.push(`<path d="${cap(26, 54)}" fill="${fill}"/>`);
      break;
    case 'bun':
      back.push(`<circle cx="${CX}" cy="${top - 22}" r="44" fill="${dark}"/>`);
      front.push(`<path d="${cap(24, 54)}" fill="${fill}"/>`);
      break;
    case 'braids':
    case 'dreadlocks': {
      front.push(`<path d="${cap(28, 56)}" fill="${fill}"/>`);
      const strands = style === 'braids' ? 4 : 7;
      for (let i = 0; i < strands; i++) {
        const sideX = i % 2 === 0 ? CX - w - 6 - (i >> 1) * 10 : CX + w + 6 + (i >> 1) * 10;
        back.push(`<path d="M ${sideX} ${CY - g.h * 0.4} L ${sideX + (i % 2 === 0 ? -6 : 6)} ${CY + 210}" stroke="${i % 3 ? color : dark}" stroke-width="${style === 'braids' ? 22 : 14}" stroke-linecap="round" ${style === 'braids' ? 'stroke-dasharray="18 4"' : ''}/>`);
      }
      break;
    }
    default:
      front.push(`<path d="${cap(24, 58)}" fill="${fill}"/>`);
  }
  return { back: back.join(''), front: front.join('') };
}

/* ----------------------------- features ----------------------------- */

function eyes(dna: MascotDna, g: HeadGeometry, emotion: string): string {
  const iris = EYE_COLOR_HEX[dna.eyeColor];
  const spacing = dna.proportions ? Math.min(0.52, Math.max(0.36, dna.proportions.eyeSpacing)) : 0.44;
  const dx = g.cw * spacing * 1.05;
  const y = CY + g.h * 0.02;
  const rx = 30;
  let ry = 30;
  let tilt = 0;
  switch (dna.eyeShape) {
    case 'almond':
      ry = 22;
      break;
    case 'monolid':
      ry = 18;
      break;
    case 'hooded':
      ry = 24;
      break;
    case 'upturned':
      ry = 24;
      tilt = -8;
      break;
    case 'downturned':
      ry = 24;
      tilt = 8;
      break;
    case 'deep-set':
      ry = 24;
      break;
    default:
      ry = 30;
  }

  if (emotion === 'laughing' || emotion === 'happy') {
    const arc = (x: number) =>
      `<path d="M ${x - rx} ${y + 4} Q ${x} ${y - 26} ${x + rx} ${y + 4}" stroke="#1d1414" stroke-width="7" fill="none" stroke-linecap="round"/>`;
    if (emotion === 'laughing') return arc(CX - dx) + arc(CX + dx);
  }
  if (emotion === 'facepalm') {
    return `<path d="M ${CX - dx - rx} ${y} q ${rx} 12 ${rx * 2} 0" stroke="#1d1414" stroke-width="6" fill="none" stroke-linecap="round"/><path d="M ${CX + dx - rx} ${y} q ${rx} 12 ${rx * 2} 0" stroke="#1d1414" stroke-width="6" fill="none" stroke-linecap="round"/>`;
  }
  if (emotion === 'love') {
    const heart = (x: number) =>
      `<path transform="translate(${x - 26} ${y - 24}) scale(2.2)" d="M12 21s-7-4.6-9.5-9C.7 8.7 2.6 5 6.3 5c2 0 3.4 1.1 4.2 2.3h1C12.3 6.1 13.7 5 15.7 5c3.7 0 5.6 3.7 3.8 7-2.5 4.4-9.5 9-9.5 9z" fill="#ff3b6b"/>`;
    return heart(CX - dx) + heart(CX + dx);
  }
  const shocked = emotion === 'shocked';
  const one = (x: number, side: 1 | -1) => {
    const ery = shocked ? ry + 8 : ry;
    const irisR = shocked ? 13 : 17;
    const lid =
      dna.eyeShape === 'hooded' || dna.eyeShape === 'monolid'
        ? `<path d="M ${x - rx - 2} ${y - ery * 0.2} Q ${x} ${y - ery - 8} ${x + rx + 2} ${y - ery * 0.2} L ${x + rx + 2} ${y - ery - 6} L ${x - rx - 2} ${y - ery - 6} Z" fill="url(#skinGrad)"/>`
        : '';
    const deep = dna.eyeShape === 'deep-set' ? `<ellipse cx="${x}" cy="${y - 6}" rx="${rx + 8}" ry="${ery + 6}" fill="#000" opacity="0.08"/>` : '';
    return `<g transform="rotate(${tilt * side} ${x} ${y})">${deep}<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ery}" fill="#fff"/><circle cx="${x + side * 2}" cy="${y + 2}" r="${irisR}" fill="${iris}"/><circle cx="${x + side * 2}" cy="${y + 2}" r="${irisR * 0.5}" fill="#120c0a"/><circle cx="${x + side * 2 - 6}" cy="${y - 5}" r="5" fill="#fff" opacity="0.95"/>${lid}<path d="M ${x - rx} ${y} Q ${x} ${y - ery - 6} ${x + rx} ${y}" stroke="#1d1414" stroke-width="3.5" fill="none" opacity="0.85"/></g>`;
  };
  let out = one(CX - dx, -1) + one(CX + dx, 1);
  if (emotion === 'crying') {
    out += `<path d="M ${CX - dx} ${y + ry} q -8 40 -2 90" stroke="#7cc7ff" stroke-width="12" fill="none" stroke-linecap="round" opacity="0.9"/><path d="M ${CX + dx} ${y + ry} q 8 40 2 90" stroke="#7cc7ff" stroke-width="12" fill="none" stroke-linecap="round" opacity="0.9"/>`;
  }
  return out;
}

function brows(dna: MascotDna, g: HeadGeometry, emotion: string, hairHex: string): string {
  const color = shade(hairHex, -0.3);
  const dx = g.cw * 0.47;
  const y = CY - g.h * 0.2;
  const thick = dna.eyebrows.startsWith('thick') || dna.eyebrows === 'bushy' ? 11 : dna.eyebrows.startsWith('thin') ? 5 : 8;
  const arch = dna.eyebrows.includes('arched') || dna.eyebrows === 'rounded' ? -14 : dna.eyebrows === 'soft-angled' ? -9 : -4;
  let innerLift = 0;
  if (emotion === 'angry') innerLift = 14;
  if (emotion === 'crying' || emotion === 'thinking') innerLift = -12;
  if (emotion === 'shocked') innerLift = -16;
  const one = (side: 1 | -1) => {
    const inner = CX + side * (dx - 24);
    const outer = CX + side * (dx + 30);
    const sigmaLift = emotion === 'sigma' && side === 1 ? -14 : 0;
    const iy = y + innerLift + (emotion === 'shocked' ? -10 : 0) + sigmaLift;
    const oy = y + (emotion === 'shocked' ? -10 : 0) + sigmaLift;
    return `<path d="M ${inner} ${iy} Q ${(inner + outer) / 2} ${y + arch + sigmaLift} ${outer} ${oy}" stroke="${color}" stroke-width="${thick}" fill="none" stroke-linecap="round"/>`;
  };
  return one(-1) + one(1);
}

function nose(dna: MascotDna, g: HeadGeometry, skin: string): string {
  const y = CY + g.h * 0.3;
  const dark = shade(skin, -0.22);
  const wide = dna.noseShape === 'wide' ? 22 : dna.noseShape === 'narrow' ? 11 : dna.noseShape === 'button' ? 13 : 16;
  const bridge =
    dna.noseShape === 'roman' || dna.noseShape === 'aquiline'
      ? `<path d="M ${CX + 4} ${y - 48} Q ${CX + 14} ${y - 24} ${CX + 6} ${y - 6}" stroke="${dark}" stroke-width="4" fill="none" opacity="0.6"/>`
      : '';
  const tipUp = dna.noseShape === 'upturned' || dna.noseShape === 'snub' ? -4 : 0;
  return `${bridge}<path d="M ${CX - wide} ${y + tipUp} Q ${CX} ${y + 14 + tipUp} ${CX + wide} ${y + tipUp}" stroke="${dark}" stroke-width="5" fill="none" stroke-linecap="round"/><ellipse cx="${CX}" cy="${y - 8 + tipUp}" rx="${wide * 0.7}" ry="9" fill="#fff" opacity="0.14"/>`;
}

function mouth(dna: MascotDna, g: HeadGeometry, emotion: string, skin: string): string {
  const y = CY + g.h * 0.55;
  const base = dna.mouthShape === 'wide' ? 46 : dna.mouthShape === 'small' ? 26 : 36;
  const lip = dna.mouthShape === 'full' || dna.mouthShape === 'heart' ? 8 : dna.mouthShape === 'thin' ? 3 : 5;
  const lipColor = shade(skin, -0.35);
  switch (emotion) {
    case 'laughing':
    case 'shocked': {
      const h = emotion === 'laughing' ? 44 : 38;
      const w = emotion === 'laughing' ? base + 8 : base * 0.6;
      return `<path d="M ${CX - w} ${y - 6} Q ${CX} ${y + h * 1.4} ${CX + w} ${y - 6} Z" fill="#5a1f22"/><path d="M ${CX - w * 0.6} ${y + h * 0.6} Q ${CX} ${y + h * 0.95} ${CX + w * 0.6} ${y + h * 0.6} Q ${CX} ${y + h * 0.3} ${CX - w * 0.6} ${y + h * 0.6} Z" fill="#ff7a8a"/><path d="M ${CX - w + 6} ${y - 2} L ${CX + w - 6} ${y - 2} L ${CX + w - 12} ${y + 8} L ${CX - w + 12} ${y + 8} Z" fill="#fff"/>`;
    }
    case 'angry':
      return `<path d="M ${CX - base} ${y + 10} Q ${CX} ${y - 10} ${CX + base} ${y + 10}" stroke="${lipColor}" stroke-width="${lip + 3}" fill="none" stroke-linecap="round"/>`;
    case 'crying':
      return `<path d="M ${CX - base * 0.8} ${y + 14} Q ${CX} ${y - 14} ${CX + base * 0.8} ${y + 14}" stroke="${lipColor}" stroke-width="${lip + 3}" fill="none" stroke-linecap="round"/>`;
    case 'sigma':
      return `<path d="M ${CX - base * 0.7} ${y + 4} Q ${CX + base * 0.2} ${y + 8} ${CX + base} ${y - 8}" stroke="${lipColor}" stroke-width="${lip + 2}" fill="none" stroke-linecap="round"/>`;
    case 'thinking':
      return `<ellipse cx="${CX + 8}" cy="${y + 4}" rx="${base * 0.35}" ry="${lip + 3}" fill="${lipColor}"/>`;
    case 'neutral':
      return `<path d="M ${CX - base * 0.8} ${y + 2} Q ${CX} ${y + 8} ${CX + base * 0.8} ${y + 2}" stroke="${lipColor}" stroke-width="${lip + 2}" fill="none" stroke-linecap="round"/>`;
    default: {
      const smile = `<path d="M ${CX - base} ${y - 4} Q ${CX} ${y + 34} ${CX + base} ${y - 4} Q ${CX} ${y + 14} ${CX - base} ${y - 4} Z" fill="#5a1f22"/><path d="M ${CX - base + 8} ${y} Q ${CX} ${y + 10} ${CX + base - 8} ${y}" stroke="#fff" stroke-width="7" fill="none" stroke-linecap="round"/>`;
      const dimples = dna.dimples
        ? `<circle cx="${CX - base - 10}" cy="${y + 4}" r="3" fill="${lipColor}" opacity="0.5"/><circle cx="${CX + base + 10}" cy="${y + 4}" r="3" fill="${lipColor}" opacity="0.5"/>`
        : '';
      return smile + dimples;
    }
  }
}

function facialHair(dna: MascotDna, g: HeadGeometry, hairHex: string): string {
  const c = shade(hairHex, -0.1);
  const y = CY + g.h * 0.5;
  switch (dna.facialHair) {
    case 'stubble':
      return `<path d="M ${CX - g.jw + 6} ${CY + g.h * 0.5} C ${CX - g.jw + 6} ${CY + g.h * 1.02} ${CX + g.jw - 6} ${CY + g.h * 1.02} ${CX + g.jw - 6} ${CY + g.h * 0.5} C ${CX + 50} ${y + 46} ${CX - 50} ${y + 46} ${CX - g.jw + 6} ${CY + g.h * 0.5} Z" fill="${c}" opacity="0.13"/>`;
    case 'mustache':
      return `<path d="M ${CX - 40} ${y - 4} Q ${CX - 20} ${y - 22} ${CX} ${y - 10} Q ${CX + 20} ${y - 22} ${CX + 40} ${y - 4} Q ${CX} ${y - 2} ${CX - 40} ${y - 4} Z" fill="${c}"/>`;
    case 'goatee':
      return `<path d="M ${CX - 40} ${y - 4} Q ${CX} ${y - 22} ${CX + 40} ${y - 4} Q ${CX} ${y - 6} ${CX - 40} ${y - 4} Z" fill="${c}"/><path d="M ${CX - 26} ${y + 34} Q ${CX} ${y + 80} ${CX + 26} ${y + 34} Z" fill="${c}"/>`;
    case 'short-beard':
    case 'full-beard': {
      const drop = dna.facialHair === 'full-beard' ? 52 : 24;
      return `<path d="M ${CX - g.jw - 4} ${CY + g.h * 0.2} C ${CX - g.jw - 4} ${CY + g.h + drop} ${CX + g.jw + 4} ${CY + g.h + drop} ${CX + g.jw + 4} ${CY + g.h * 0.2} L ${CX + g.jw - 14} ${CY + g.h * 0.42} C ${CX + 50} ${y + 10} ${CX + 30} ${y + 44} ${CX} ${y + 44} C ${CX - 30} ${y + 44} ${CX - 50} ${y + 10} ${CX - g.jw + 14} ${CY + g.h * 0.42} Z" fill="${c}"/><path d="M ${CX - 42} ${y - 4} Q ${CX} ${y - 24} ${CX + 42} ${y - 4} Q ${CX} ${y - 4} ${CX - 42} ${y - 4} Z" fill="${c}"/>`;
    }
    default:
      return '';
  }
}

function glasses(kind: string, g: HeadGeometry, forceSunglasses: boolean): string {
  const k = forceSunglasses ? 'sunglasses' : kind;
  if (k === 'none') return '';
  const dx = g.cw * 0.46;
  const y = CY + g.h * 0.02;
  const lens = k === 'sunglasses' ? 'fill="#111" fill-opacity="0.92"' : 'fill="#bfe3ff" fill-opacity="0.12"';
  const shape = (x: number) => {
    if (k === 'round') return `<circle cx="${x}" cy="${y}" r="38" ${lens} stroke="#1c1c1c" stroke-width="6"/>`;
    if (k === 'aviator' || k === 'sunglasses')
      return `<path d="M ${x - 42} ${y - 22} L ${x + 42} ${y - 22} Q ${x + 44} ${y + 36} ${x} ${y + 34} Q ${x - 44} ${y + 36} ${x - 42} ${y - 22} Z" ${lens} stroke="#1c1c1c" stroke-width="5"/>`;
    if (k === 'cat-eye')
      return `<path d="M ${x - 44} ${y - 18} L ${x + 44} ${y - 26} Q ${x + 40} ${y + 30} ${x} ${y + 28} Q ${x - 40} ${y + 28} ${x - 44} ${y - 18} Z" ${lens} stroke="#1c1c1c" stroke-width="6"/>`;
    return `<rect x="${x - 42}" y="${y - 28}" width="84" height="58" rx="12" ${lens} stroke="#1c1c1c" stroke-width="6"/>`;
  };
  return `${shape(CX - dx)}${shape(CX + dx)}<path d="M ${CX - dx + 40} ${y - 6} Q ${CX} ${y - 18} ${CX + dx - 40} ${y - 6}" stroke="#1c1c1c" stroke-width="6" fill="none"/>`;
}

/* ----------------------------- main ----------------------------- */

export function renderMascotSvg(dna: MascotDna, options: MascotSvgOptions = {}): string {
  const size = options.size ?? 512;
  // The SVG fallback draws the ten base emotions; richer ones map to their closest base.
  const emotion = baseEmotion(options.emotion ?? 'happy');
  const g = HEAD[dna.faceShape];
  const skin = SKIN_TONE_HEX[dna.skinTone];
  const hairHex = HAIR_COLOR_HEX[dna.hairColor];
  const seed = hash(JSON.stringify(dna));
  const outfit = options.outfitColor ?? ['#6d5dfc', '#ff6b6b', '#14b8a6', '#f59e0b', '#3b82f6'][seed % 5]!;
  const hair = hairLayers(dna.hairStyle, g, hairHex, seed);
  const ink = options.ink ?? 0;
  const inkAttr = ink > 0 ? `stroke="#1a1020" stroke-width="${ink}" stroke-linejoin="round"` : '';

  const bg =
    options.background === 'transparent' || options.background === undefined
      ? ''
      : `<rect width="512" height="512" rx="0" fill="url(#bgGrad)"/><circle cx="256" cy="230" r="210" fill="#fff" opacity="0.08"/>`;

  const body = `<path d="M 70 512 C 76 440 140 408 206 398 L 306 398 C 372 408 436 440 442 512 Z" fill="url(#outfitGrad)" ${inkAttr}/><path d="M 216 398 Q 256 446 296 398" stroke="${shade(outfit, -0.3)}" stroke-width="10" fill="none" stroke-linecap="round"/>`;
  const neck = `<path d="M 222 ${CY + g.h * 0.75} L 222 404 Q 256 428 290 404 L 290 ${CY + g.h * 0.75} Z" fill="${shade(skin, -0.12)}"/>`;
  const ears = `<ellipse cx="${CX - g.cw - 6}" cy="${CY + 10}" rx="20" ry="30" fill="${shade(skin, -0.05)}" ${inkAttr}/><ellipse cx="${CX + g.cw + 6}" cy="${CY + 10}" rx="20" ry="30" fill="${shade(skin, -0.05)}" ${inkAttr}/>`;
  const cheeks = `<ellipse cx="${CX - g.cw * 0.58}" cy="${CY + g.h * 0.32}" rx="24" ry="14" fill="#ff6f7d" opacity="${emotion === 'love' || emotion === 'angry' ? 0.45 : 0.22}"/><ellipse cx="${CX + g.cw * 0.58}" cy="${CY + g.h * 0.32}" rx="24" ry="14" fill="#ff6f7d" opacity="${emotion === 'love' || emotion === 'angry' ? 0.45 : 0.22}"/>`;
  let freckles = '';
  if (dna.freckles) {
    for (let i = 0; i < 12; i++) {
      const side = i % 2 ? 1 : -1;
      const fx = CX + side * (g.cw * 0.4 + ((seed >> i) % 30));
      const fy = CY + g.h * 0.2 + ((seed >> (i + 3)) % 26);
      freckles += `<circle cx="${fx}" cy="${fy}" r="2.6" fill="${shade(skin, -0.38)}" opacity="0.7"/>`;
    }
  }
  const facepalmHand =
    emotion === 'facepalm'
      ? `<path d="M ${CX - 70} ${CY - 70} C ${CX - 40} ${CY - 100} ${CX + 70} ${CY - 90} ${CX + 80} ${CY - 30} C ${CX + 70} ${CY + 10} ${CX - 60} ${CY + 10} ${CX - 80} ${CY - 20} Z" fill="${shade(skin, -0.04)}" stroke="${shade(skin, -0.25)}" stroke-width="4"/>`
      : '';
  const thinkingHand =
    emotion === 'thinking'
      ? `<path d="M ${CX + 20} ${CY + g.h + 10} C ${CX + 30} ${CY + g.h - 30} ${CX + 70} ${CY + g.h - 20} ${CX + 74} ${CY + g.h + 30} L ${CX + 60} ${CY + g.h + 90} L ${CX + 10} ${CY + g.h + 80} Z" fill="${shade(skin, -0.04)}" stroke="${shade(skin, -0.25)}" stroke-width="4"/>`
      : '';
  const accents =
    emotion === 'love'
      ? `<path transform="translate(400 90) scale(1.8)" d="M12 21s-7-4.6-9.5-9C.7 8.7 2.6 5 6.3 5c2 0 3.4 1.1 4.2 2.3h1C12.3 6.1 13.7 5 15.7 5c3.7 0 5.6 3.7 3.8 7-2.5 4.4-9.5 9-9.5 9z" fill="#ff3b6b"/><path transform="translate(70 130) scale(1.2)" d="M12 21s-7-4.6-9.5-9C.7 8.7 2.6 5 6.3 5c2 0 3.4 1.1 4.2 2.3h1C12.3 6.1 13.7 5 15.7 5c3.7 0 5.6 3.7 3.8 7-2.5 4.4-9.5 9-9.5 9z" fill="#ff7aa2"/>`
      : emotion === 'angry'
        ? `<path d="M 400 80 q 20 -20 40 0 q 20 -20 40 0" stroke="#bbb" stroke-width="10" fill="none" stroke-linecap="round"/>`
        : emotion === 'shocked'
          ? `<g stroke="#ffd166" stroke-width="8" stroke-linecap="round"><path d="M 60 120 l -30 -20"/><path d="M 70 80 l -14 -30"/><path d="M 452 120 l 30 -20"/><path d="M 442 80 l 14 -30"/></g>`
          : emotion === 'thinking'
            ? `<circle cx="420" cy="90" r="40" fill="#fff" opacity="0.92"/><text x="420" y="106" font-size="46" text-anchor="middle" font-family="Arial, sans-serif" font-weight="700" fill="#6d5dfc">?</text><circle cx="378" cy="146" r="12" fill="#fff" opacity="0.92"/>`
            : '';

  const character = `${hair.back}${body}${neck}${ears}<path d="${headPath(g)}" fill="url(#skinGrad)" ${inkAttr}/>${freckles}${cheeks}${facialHair(dna, g, hairHex)}${brows(dna, g, emotion, hairHex)}${eyes(dna, g, emotion)}${glasses(dna.glasses, g, emotion === 'cool')}${nose(dna, g, skin)}${mouth(dna, g, emotion, skin)}${hair.front}${facepalmHand}${thinkingHand}`;

  const outline = options.stickerOutline
    ? `<g filter="url(#dieCut)">${character}</g>`
    : character;

  const [bg1, bg2] = Array.isArray(options.background) ? options.background : ['#1e1b4b', '#7c3aed'];
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 512 512">
<defs>
<linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${bg1}"/><stop offset="1" stop-color="${bg2}"/></linearGradient>
<radialGradient id="skinGrad" cx="0.42" cy="0.38" r="0.75"><stop offset="0" stop-color="${shade(skin, 0.14)}"/><stop offset="0.65" stop-color="${skin}"/><stop offset="1" stop-color="${shade(skin, -0.16)}"/></radialGradient>
<linearGradient id="hairGrad" x1="0" y1="0" x2="0.3" y2="1"><stop offset="0" stop-color="${shade(hairHex, 0.18)}"/><stop offset="1" stop-color="${shade(hairHex, -0.12)}"/></linearGradient>
<linearGradient id="outfitGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${shade(outfit, 0.12)}"/><stop offset="1" stop-color="${shade(outfit, -0.2)}"/></linearGradient>
<filter id="dieCut" x="-10%" y="-10%" width="120%" height="120%"><feMorphology in="SourceAlpha" operator="dilate" radius="10" result="d"/><feFlood flood-color="#ffffff"/><feComposite in2="d" operator="in" result="o"/><feMerge><feMergeNode in="o"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>
${bg}${accents}${outline}
</svg>`;
}

/** The brand hero character (landing, onboarding, empty states). */
export const HERO_DNA: MascotDna = {
  faceShape: 'oval', eyeShape: 'almond', eyeColor: 'dark-brown', hairStyle: 'curly-short', hairColor: 'black',
  noseShape: 'wide', mouthShape: 'wide', skinTone: 'mst-7', eyebrows: 'thick-straight', ageGroup: 'young-adult',
  facialHair: 'none', glasses: 'none', presentation: 'masculine', freckles: false, dimples: true, distinguishingFeatures: [],
};

/** Curated DNA presets for showcase art and onboarding examples. */
export const SHOWCASE_DNA: Array<{ name: string; style: string; dna: MascotDna }> = [
  {
    name: 'Alex',
    style: 'pixar',
    dna: {
      faceShape: 'oval', eyeShape: 'almond', eyeColor: 'brown', hairStyle: 'quiff', hairColor: 'dark-brown',
      noseShape: 'straight', mouthShape: 'wide', skinTone: 'mst-4', eyebrows: 'thick-straight', ageGroup: 'young-adult',
      facialHair: 'stubble', glasses: 'none', presentation: 'masculine', freckles: false, dimples: true, distinguishingFeatures: [],
    },
  },
  {
    name: 'Maya',
    style: 'anime',
    dna: {
      faceShape: 'heart', eyeShape: 'round', eyeColor: 'green', hairStyle: 'long-wavy', hairColor: 'auburn',
      noseShape: 'button', mouthShape: 'full', skinTone: 'mst-2', eyebrows: 'thin-arched', ageGroup: 'young-adult',
      facialHair: 'none', glasses: 'none', presentation: 'feminine', freckles: true, dimples: false, distinguishingFeatures: [],
    },
  },
  {
    name: 'Jay',
    style: 'cyberpunk',
    dna: {
      faceShape: 'square', eyeShape: 'hooded', eyeColor: 'dark-brown', hairStyle: 'afro', hairColor: 'black',
      noseShape: 'wide', mouthShape: 'full', skinTone: 'mst-8', eyebrows: 'bushy', ageGroup: 'adult',
      facialHair: 'short-beard', glasses: 'rectangular', presentation: 'masculine', freckles: false, dimples: false, distinguishingFeatures: [],
    },
  },
  {
    name: 'Yuna',
    style: 'cartoon',
    dna: {
      faceShape: 'round', eyeShape: 'monolid', eyeColor: 'dark-brown', hairStyle: 'bob', hairColor: 'dyed-pink',
      noseShape: 'snub', mouthShape: 'small', skinTone: 'mst-3', eyebrows: 'soft-angled', ageGroup: 'teen',
      facialHair: 'none', glasses: 'round', presentation: 'feminine', freckles: false, dimples: true, distinguishingFeatures: [],
    },
  },
  {
    name: 'Leo',
    style: 'fortnite',
    dna: {
      faceShape: 'diamond', eyeShape: 'deep-set', eyeColor: 'blue', hairStyle: 'side-part', hairColor: 'blonde',
      noseShape: 'roman', mouthShape: 'thin', skinTone: 'mst-1', eyebrows: 'soft-angled', ageGroup: 'adult',
      facialHair: 'full-beard', glasses: 'none', presentation: 'masculine', freckles: false, dimples: false, distinguishingFeatures: [],
    },
  },
  {
    name: 'Zara',
    style: 'arcane',
    dna: {
      faceShape: 'oblong', eyeShape: 'upturned', eyeColor: 'amber', hairStyle: 'braids', hairColor: 'black',
      noseShape: 'narrow', mouthShape: 'heart', skinTone: 'mst-6', eyebrows: 'thick-arched', ageGroup: 'young-adult',
      facialHair: 'none', glasses: 'none', presentation: 'feminine', freckles: false, dimples: false, distinguishingFeatures: [],
    },
  },
];
