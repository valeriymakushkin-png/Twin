import * as THREE from 'three';
import { HAIR_COLOR_HEX, type MascotDna } from '@mascot/shared';
import type { Expression } from './expressions';
import type { FrontMap, HeadParams } from './head';
import { mix, rgba, rng, shade } from './math';
import type { StyleLook } from './styles';

type Pt = [number, number];

export function createCanvas(w: number, h: number): HTMLCanvasElement | OffscreenCanvas {
  if (typeof OffscreenCanvas !== 'undefined') return new OffscreenCanvas(w, h);
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  return c;
}

type Ctx = CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D;

function qb(p0: Pt, p1: Pt, p2: Pt, n = 24): Pt[] {
  const out: Pt[] = [];
  for (let i = 0; i <= n; i++) {
    const t = i / n;
    const a = (1 - t) * (1 - t);
    const b = 2 * (1 - t) * t;
    const c = t * t;
    out.push([a * p0[0] + b * p1[0] + c * p2[0], a * p0[1] + b * p1[1] + c * p2[1]]);
  }
  return out;
}

function ellipsePts(cx: number, cy: number, rx: number, ry: number, n = 40): Pt[] {
  return Array.from({ length: n }, (_, i) => {
    const a = (i / n) * Math.PI * 2;
    return [cx + Math.cos(a) * rx, cy + Math.sin(a) * ry] as Pt;
  });
}

function distToPoly(x: number, y: number, poly: Pt[]): number {
  let best = Infinity;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [ax, ay] = poly[j]!;
    const [bx, by] = poly[i]!;
    const dx = bx - ax;
    const dy = by - ay;
    const t = Math.max(0, Math.min(1, ((x - ax) * dx + (y - ay) * dy) / (dx * dx + dy * dy || 1)));
    best = Math.min(best, Math.hypot(x - ax - t * dx, y - ay - t * dy));
  }
  return best;
}

function pointInPoly(x: number, y: number, poly: Pt[]): boolean {
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, yi] = poly[i]!;
    const [xj, yj] = poly[j]!;
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) inside = !inside;
  }
  return inside;
}

/**
 * Paints the face texture (skin variation, brows, mouth, blush, freckles, stubble) in UV space.
 * Every outline is authored in face space and mapped through the FrontMap, so the paint lands
 * exactly where the sculpted features are.
 */
export class FacePainter {
  readonly W = 2048;
  readonly H = 1024;
  readonly canvas: HTMLCanvasElement | OffscreenCanvas;
  private ctx: Ctx;
  private hit = { position: new THREE.Vector3(), normal: new THREE.Vector3(), uv: new THREE.Vector2() };

  constructor(
    private readonly map: FrontMap,
    private readonly P: HeadParams,
  ) {
    this.canvas = createCanvas(this.W, this.H);
    this.ctx = this.canvas.getContext('2d') as Ctx;
  }

  private px(x: number, y: number): Pt | null {
    const h = this.map.hit(x, y, this.hit);
    // Silhouette hits can land just past the UV seam (u ≈ 1 on the -x side); a polygon through
    // such a point would wrap across the whole texture as a dark band, so drop it.
    if (!h || h.uv.x > 0.6) return null;
    return [h.uv.x * this.W, (1 - h.uv.y) * this.H];
  }

  /** Pixel of the last surface point on the segment from the face centre towards (x, y). */
  private pxClamped(x: number, y: number): Pt | null {
    const cy = -0.3;
    let lo = 0;
    let hi = 1;
    for (let i = 0; i < 14; i++) {
      const mid = (lo + hi) / 2;
      if (this.px(x * mid, cy + (y - cy) * mid)) lo = mid;
      else hi = mid;
    }
    return lo > 0 ? this.px(x * lo, cy + (y - cy) * lo) : null;
  }

  /** Pixels per face unit around (x, y) — for radii of soft spots. */
  private scaleAt(x: number, y: number): Pt {
    const a = this.px(x, y);
    const b = this.px(x + 0.02, y);
    const c = this.px(x, y + 0.02);
    if (!a || !b || !c) return [360, 300];
    return [Math.hypot(b[0] - a[0], b[1] - a[1]) / 0.02, Math.hypot(c[0] - a[0], c[1] - a[1]) / 0.02];
  }

  private path(points: Pt[]): boolean {
    const ctx = this.ctx;
    ctx.beginPath();
    let started = false;
    for (const [x, y] of points) {
      // Points past the silhouette (e.g. the jaw line of a narrow chin) snap onto its edge;
      // skipping them would close the polygon across the face.
      const p = this.px(x, y) ?? this.pxClamped(x, y);
      if (!p) continue;
      if (!started) {
        ctx.moveTo(p[0], p[1]);
        started = true;
      } else ctx.lineTo(p[0], p[1]);
    }
    ctx.closePath();
    return started;
  }

  private fill(points: Pt[], style: string | CanvasGradient | CanvasPattern) {
    if (!this.path(points)) return;
    this.ctx.fillStyle = style;
    this.ctx.fill();
  }

  private spot(x: number, y: number, rx: number, color: string, alpha: number, ry = rx) {
    const p = this.px(x, y);
    if (!p) return;
    const [sx, sy] = this.scaleAt(x, y);
    const ctx = this.ctx;
    ctx.save();
    ctx.translate(p[0], p[1]);
    ctx.scale((rx * sx) / 100, (ry * sy) / 100);
    const g = ctx.createRadialGradient(0, 0, 0, 0, 0, 100);
    g.addColorStop(0, rgba(color, alpha));
    g.addColorStop(1, rgba(color, 0));
    ctx.fillStyle = g;
    ctx.fillRect(-100, -100, 200, 200);
    ctx.restore();
  }

  private gradientFor(points: Pt[], top: string, bottom: string): CanvasGradient | string {
    const ys = points.map((p) => this.px(p[0], p[1])).filter((p): p is Pt => Boolean(p)).map((p) => p[1]);
    if (!ys.length) return top;
    const g = this.ctx.createLinearGradient(0, Math.min(...ys), 0, Math.max(...ys));
    g.addColorStop(0, top);
    g.addColorStop(1, bottom);
    return g;
  }

  paint(dna: MascotDna, skin: string, look: StyleLook, expr: Expression, seed: number): THREE.CanvasTexture {
    const { ctx, W, H, P } = this;
    const r = rng(seed);
    ctx.fillStyle = skin;
    ctx.fillRect(0, 0, W, H);

    if (look.face === 'full') {
      // Subtle skin variation so the surface never reads as plastic.
      for (let i = 0; i < 260; i++) {
        const x = (r() - 0.5) * 1.8;
        const y = (r() - 0.5) * 2.2;
        this.spot(x, y, 0.05 + r() * 0.12, r() > 0.5 ? shade(skin, -0.12) : mix(skin, '#d9576a', 0.5), 0.05);
      }
      // Warmth on nose, cheeks; depth around eyes and under the lower lip.
      const tipY = -0.24 * P.noseLength;
      this.spot(0, tipY, 0.09, mix(skin, '#e0566a', 0.6), 0.22);
      for (const s of [-1, 1]) {
        this.spot(s * P.eyeX, P.eyeY + 0.01, 0.22, shade(skin, -0.3), 0.07, 0.17);
        this.spot(s * 0.045 * P.noseWidth, tipY - 0.055, 0.022, '#2a0f0c', 0.55, 0.013);
      }
      this.spot(0, P.mouthY - 0.17, 0.12, shade(skin, -0.25), 0.12, 0.05);
    }

    // Blush.
    const blush = expr.blush * (look.face === 'button' ? 0.6 : 1);
    if (blush > 0) for (const s of [-1, 1]) this.spot(s * 0.56, -0.27, 0.17, '#ff4d6a', 0.42 * blush, 0.12);

    if (look.face === 'full') {
      if (dna.facialHair !== 'none') this.facialHair(dna, r);
      if (dna.freckles) {
        for (let i = 0; i < 46; i++) {
          const s = r() > 0.5 ? 1 : -1;
          const x = s * (0.12 + r() * 0.48);
          const y = -0.1 - r() * 0.28;
          this.spot(x, y, 0.012 + r() * 0.01, shade(skin, -0.45), 0.6);
        }
      }
      this.mouth(dna, skin, expr);
    } else {
      this.simpleMouth(expr, look);
    }
    this.brows(dna, expr, look);

    const tex = new THREE.CanvasTexture(this.canvas as HTMLCanvasElement);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = 8;
    return tex;
  }

  /* ----------------------------- brows ----------------------------- */

  private brows(dna: MascotDna, expr: Expression, look: StyleLook) {
    const P = this.P;
    const hair = HAIR_COLOR_HEX[dna.hairColor];
    const color = dna.hairStyle === 'bald' ? shade(hair, -0.2) : shade(hair, -0.32);
    const thick =
      dna.eyebrows === 'bushy' ? 0.1 : dna.eyebrows.startsWith('thick') ? 0.088 : dna.eyebrows.startsWith('thin') ? 0.045 : 0.065;
    const arch = dna.eyebrows.includes('arched') ? 0.055 : dna.eyebrows === 'rounded' ? 0.045 : dna.eyebrows === 'soft-angled' ? 0.035 : 0.015;
    const eyeS = look.eyeScale;
    for (const [i, s] of [[0, -1], [1, 1]] as const) {
      const xi = 0.09;
      const xo = P.eyeX + 0.19 * eyeS;
      const by = P.eyeY + 0.21 + 0.05 * (eyeS - 1) + expr.browLift[i];
      const angle = expr.browAngle[i];
      const cx = (xi + xo) / 2;
      const top: Pt[] = [];
      const bottom: Pt[] = [];
      const n = 20;
      for (let k = 0; k <= n; k++) {
        const t = k / n;
        const x = xi + (xo - xi) * t;
        const yc = by + arch * Math.sin(Math.PI * Math.min(1, t * 1.15)) - 0.012 * t;
        const th = (look.face === 'full' ? thick : thick * 0.8) * (1 - 0.62 * Math.pow(t, 1.6)) * (k === 0 ? 0.75 : 1);
        top.push([x, yc + th / 2]);
        bottom.push([x, yc - th / 2]);
      }
      const rot = (p: Pt): Pt => {
        const dx = p[0] - cx;
        const dy = p[1] - by;
        const c = Math.cos(angle);
        const sn = Math.sin(angle);
        return [s * (cx + dx * c - dy * sn), by + dx * sn + dy * c];
      };
      const outline = [...top, ...bottom.reverse()].map(rot);
      this.fill(outline, color);
      if (look.face === 'full') {
        // Hair strokes for texture.
        const ctx = this.ctx;
        ctx.lineWidth = 2.2;
        for (let k = 0; k < 26; k++) {
          const t = k / 26;
          const x = xi + (xo - xi) * t;
          const yc = by + arch * Math.sin(Math.PI * Math.min(1, t * 1.15));
          const a = this.px(...rot([x, yc - thick * 0.35]));
          const b = this.px(...rot([x + 0.035, yc + thick * 0.3]));
          if (!a || !b) continue;
          ctx.strokeStyle = rgba(k % 3 ? shade(color, 0.25) : shade(color, -0.3), 0.55);
          ctx.beginPath();
          ctx.moveTo(a[0], a[1]);
          ctx.lineTo(b[0], b[1]);
          ctx.stroke();
        }
      }
    }
  }

  /* ----------------------------- mouth ----------------------------- */

  private mouth(dna: MascotDna, skin: string, expr: Expression) {
    const P = this.P;
    const my = P.mouthY;
    const base = dna.mouthShape === 'wide' ? 0.34 : dna.mouthShape === 'small' ? 0.24 : 0.3;
    const mw = base * expr.mouthWidth;
    const lipFull = dna.mouthShape === 'full' || dna.mouthShape === 'heart' || dna.mouthShape === 'bow' ? 1.35 : dna.mouthShape === 'thin' ? 0.6 : 1;
    const lip = mix(skin, '#b8505c', 0.5);
    const cavityTop = '#5b1620';
    const cavityBottom = '#2a070b';
    const ctx = this.ctx;

    const openMouth = (upper: Pt[], lower: Pt[], opts: { teethTop?: number; teethBottom?: number; tongue?: [number, number, number, number] }) => {
      const shape = [...upper, ...lower];
      this.fill(shape, this.gradientFor(shape, cavityTop, cavityBottom));
      ctx.save();
      if (this.path(shape)) {
        ctx.clip();
        if (opts.tongue) {
          const [tx, ty, rx, ry] = opts.tongue;
          const t = ellipsePts(tx, ty, rx, ry);
          this.fill(t, this.gradientFor(t, '#ff8a94', '#c84a5a'));
        }
        if (opts.teethTop) {
          const band = [...upper, ...upper.slice().reverse().map(([x, y]) => [x, y - opts.teethTop!] as Pt)];
          this.fill(band, this.gradientFor(band, '#ffffff', '#e8e2dc'));
          // Tooth separations.
          ctx.lineWidth = 1.6;
          ctx.strokeStyle = 'rgba(150,130,120,0.35)';
          for (let k = -3; k <= 3; k++) {
            const x = k * mw * 0.22;
            const yTop = upper.reduce((best, p) => (Math.abs(p[0] - x) < Math.abs(best[0] - x) ? p : best), upper[0]!)[1];
            const a = this.px(x, yTop);
            const b = this.px(x, yTop - opts.teethTop * 0.92);
            if (!a || !b) continue;
            ctx.beginPath();
            ctx.moveTo(a[0], a[1]);
            ctx.lineTo(b[0], b[1]);
            ctx.stroke();
          }
        }
        if (opts.teethBottom) {
          const band = [...lower, ...lower.slice().reverse().map(([x, y]) => [x, y + opts.teethBottom!] as Pt)];
          this.fill(band, this.gradientFor(band, '#e4ddd6', '#ffffff'));
        }
      }
      ctx.restore();
      // Lower lip.
      const lipBand = [...lower.map(([x, y]) => [x, y - 0.006] as Pt), ...lower.slice().reverse().map(([x, y]) => [x * 0.94, y - 0.03 * lipFull * (1 - Math.pow(x / mw, 2) * 0.7)] as Pt)];
      this.fill(lipBand, rgba(lip, 0.55));
      // Corner creases.
      const c0 = upper[0]!;
      const c1 = upper[upper.length - 1]!;
      for (const [cx, cy, s] of [[c0[0], c0[1], -1], [c1[0], c1[1], 1]] as const) {
        const crease = [...qb([cx, cy], [cx + s * 0.035, cy + 0.01], [cx + s * 0.03, cy + 0.06], 10), ...qb([cx + s * 0.03, cy + 0.06], [cx + s * 0.028, cy + 0.01], [cx - s * 0.004, cy - 0.004], 10)];
        this.fill(crease, rgba(shade(skin, -0.45), 0.35));
      }
    };

    switch (expr.mouth) {
      case 'grin': {
        const upper = qb([-mw, my + 0.06], [0, my - 0.0], [mw, my + 0.06]);
        const lower = qb([mw, my + 0.06], [0, my - 0.29], [-mw, my + 0.06]);
        openMouth(upper, lower, { teethTop: 0.075, tongue: [0, my - 0.22, mw * 0.5, 0.065] });
        break;
      }
      case 'laugh': {
        const w = mw * 1.12;
        const upper = qb([-w, my + 0.07], [0, my + 0.02], [w, my + 0.07]);
        const lower = qb([w, my + 0.07], [0, my - 0.38], [-w, my + 0.07]);
        openMouth(upper, lower, { teethTop: 0.075, tongue: [0, my - 0.28, w * 0.55, 0.09] });
        break;
      }
      case 'o': {
        const cy = my - 0.07;
        const rx = mw * 0.42;
        const ry = 0.105;
        // Upper arc left → top → right, lower arc right → bottom → left.
        const upper = Array.from({ length: 25 }, (_, i) => {
          const a = Math.PI - (i / 24) * Math.PI;
          return [Math.cos(a) * rx, cy + Math.sin(a) * ry] as Pt;
        });
        const lower = Array.from({ length: 25 }, (_, i) => {
          const a = -(i / 24) * Math.PI;
          return [Math.cos(a) * rx, cy + Math.sin(a) * ry] as Pt;
        });
        openMouth(upper, lower, { teethTop: 0.035, tongue: [0, my - 0.15, mw * 0.3, 0.04] });
        break;
      }
      case 'wail': {
        const upper = qb([-mw * 0.92, my - 0.07], [0, my + 0.06], [mw * 0.92, my - 0.07]);
        const lower = qb([mw * 0.92, my - 0.07], [0, my - 0.2], [-mw * 0.92, my - 0.07]);
        openMouth(upper, lower, { teethBottom: 0.04, tongue: [0, my - 0.15, mw * 0.45, 0.05] });
        break;
      }
      case 'grit': {
        const upper = qb([-mw * 0.9, my - 0.06], [0, my + 0.05], [mw * 0.9, my - 0.06]);
        const lower = qb([mw * 0.9, my - 0.06], [0, my - 0.15], [-mw * 0.9, my - 0.06]);
        const shape = [...upper, ...lower];
        this.fill(shape, this.gradientFor(shape, '#fbf8f4', '#e0d8d0'));
        ctx.save();
        if (this.path(shape)) {
          ctx.clip();
          ctx.lineWidth = 3;
          ctx.strokeStyle = 'rgba(70,30,30,0.7)';
          const mid = qb([-mw, my - 0.04], [0, my - 0.03], [mw, my - 0.04]);
          this.path(mid);
          ctx.stroke();
          ctx.lineWidth = 1.6;
          ctx.strokeStyle = 'rgba(120,100,90,0.4)';
          for (let k = -4; k <= 4; k++) {
            const a = this.px(k * mw * 0.2, my + 0.03);
            const b = this.px(k * mw * 0.2, my - 0.12);
            if (!a || !b) continue;
            ctx.beginPath();
            ctx.moveTo(a[0], a[1]);
            ctx.lineTo(b[0], b[1]);
            ctx.stroke();
          }
        }
        ctx.restore();
        this.fill([...upper.map(([x, y]) => [x, y + 0.004] as Pt), ...upper.slice().reverse().map(([x, y]) => [x, y + 0.026] as Pt)], rgba(lip, 0.6));
        this.fill([...lower.map(([x, y]) => [x, y - 0.004] as Pt), ...lower.slice().reverse().map(([x, y]) => [x * 0.95, y - 0.03] as Pt)], rgba(lip, 0.55));
        break;
      }
      case 'smirk': {
        const upper = qb([-mw * 0.78, my - 0.012], [0.04, my - 0.03], [mw * 1.02, my + 0.065]);
        const lower = qb([mw * 1.02, my + 0.065], [0.05, my - 0.075], [-mw * 0.78, my - 0.012]);
        this.fill([...upper, ...lower], rgba(shade(lip, -0.25), 0.95));
        this.fill(qb([mw * 0.7, my + 0.02], [0, my - 0.115], [-mw * 0.6, my - 0.03]).concat(qb([-mw * 0.6, my - 0.03], [0, my - 0.08], [mw * 0.7, my + 0.02])), rgba(lip, 0.5));
        this.spot(mw * 1.05, my + 0.07, 0.03, shade(skin, -0.4), 0.35);
        break;
      }
      case 'pout': {
        const lips = ellipsePts(0.03, my - 0.035, mw * 0.36, 0.045 * lipFull);
        this.fill(lips, this.gradientFor(lips, shade(lip, 0.05), shade(lip, -0.15)));
        this.fill(qb([-mw * 0.25 + 0.03, my - 0.035], [0.03, my - 0.025], [mw * 0.25 + 0.03, my - 0.035]).concat(qb([mw * 0.25 + 0.03, my - 0.035], [0.03, my - 0.045], [-mw * 0.25 + 0.03, my - 0.035])), rgba(shade(lip, -0.5), 0.8));
        break;
      }
      case 'flat': {
        const upper = qb([-mw * 0.72, my - 0.01], [0, my - 0.022], [mw * 0.72, my - 0.01]);
        const lower = qb([mw * 0.72, my - 0.01], [0, my - 0.045], [-mw * 0.72, my - 0.01]);
        this.fill([...upper, ...lower], rgba(shade(lip, -0.3), 0.9));
        this.fill([...lower.map(([x, y]) => [x, y - 0.004] as Pt), ...lower.slice().reverse().map(([x, y]) => [x * 0.9, y - 0.03 * lipFull] as Pt)], rgba(lip, 0.45));
        break;
      }
      case 'smile':
      default: {
        const upper = qb([-mw, my + 0.035], [0, my - 0.045], [mw, my + 0.035]);
        const lower = qb([mw, my + 0.035], [0, my - 0.085], [-mw, my + 0.035]);
        this.fill([...upper, ...lower], rgba(shade(lip, -0.3), 0.95));
        this.fill([...lower.map(([x, y]) => [x, y - 0.004] as Pt), ...lower.slice().reverse().map(([x, y]) => [x * 0.92, y - 0.034 * lipFull] as Pt)], rgba(lip, 0.5));
        for (const s of [-1, 1]) this.spot(s * (mw + 0.015), my + 0.04, 0.028, shade(skin, -0.4), 0.3);
      }
    }
  }

  private simpleMouth(expr: Expression, look: StyleLook) {
    if (look.face === 'button') return; // vinyl figures have no mouth
    const my = this.P.mouthY + 0.04;
    const ink = '#1a1110';
    const open = expr.mouth === 'grin' || expr.mouth === 'laugh' || expr.mouth === 'o' || expr.mouth === 'wail';
    if (open) {
      const upper = qb([-0.17, my + 0.02], [0, my], [0.17, my + 0.02]);
      const lower = qb([0.17, my + 0.02], [0, my - 0.2], [-0.17, my + 0.02]);
      this.fill([...upper, ...lower], ink);
      this.fill([...upper, ...upper.slice().reverse().map(([x, y]) => [x, y - 0.05] as Pt)], '#ffffff');
    } else {
      const dir = expr.mouth === 'grit' || expr.mouth === 'flat' ? -0.3 : 1;
      const upper = qb([-0.17, my], [0, my - 0.12 * dir], [0.17, my]);
      const lower = qb([0.17, my], [0, my - 0.07 * dir], [-0.17, my]);
      this.fill([...upper, ...lower], ink);
    }
  }

  /* ----------------------------- facial hair ----------------------------- */

  private facialHair(dna: MascotDna, r: () => number) {
    const P = this.P;
    const hair = shade(HAIR_COLOR_HEX[dna.hairColor], -0.15);
    const my = P.mouthY;
    const stubbleArea: Pt[] = [
      [-0.86, -0.12],
      [-0.82, -0.5],
      [-0.66, -0.85],
      [-0.36, -1.08],
      [0, -1.16],
      [0.36, -1.08],
      [0.66, -0.85],
      [0.82, -0.5],
      [0.86, -0.12],
      [0.62, -0.18],
      [0.3, my + 0.06],
      [0.12, my + 0.13],
      [0, my + 0.12],
      [-0.12, my + 0.13],
      [-0.3, my + 0.06],
      [-0.62, -0.18],
    ];
    // Beards follow the beard line (sideburn → below the mouth corners); cheeks stay clean.
    const beardArea: Pt[] = [
      [-0.9, -0.1],
      [-0.86, -0.5],
      [-0.68, -0.86],
      [-0.36, -1.1],
      [0, -1.18],
      [0.36, -1.1],
      [0.68, -0.86],
      [0.86, -0.5],
      [0.9, -0.1],
      [0.62, my + 0.05],
      [0.38, my - 0.04],
      [0.2, my - 0.13],
      [0, my - 0.15],
      [-0.2, my - 0.13],
      [-0.38, my - 0.04],
      [-0.62, my + 0.05],
    ];
    const kind = dna.facialHair;
    const jaw = kind === 'stubble' ? stubbleArea : beardArea;
    const dots = kind === 'stubble' ? 16000 : 0;
    const ctx = this.ctx;
    ctx.filter = 'blur(14px)';
    if (kind === 'stubble') this.fill(jaw, rgba(hair, 0.2));
    if (kind === 'short-beard' || kind === 'full-beard') this.fill(jaw, rgba(shade(hair, -0.25), kind === 'full-beard' ? 0.45 : 0.3));
    ctx.filter = 'none';
    for (let i = 0; i < dots; i++) {
      const x = (r() - 0.5) * 1.8;
      const y = -0.1 - r() * 1.1;
      if (!pointInPoly(x, y, jaw)) continue;
      if (r() > Math.min(1, distToPoly(x, y, jaw) / 0.08)) continue;
      const p = this.px(x, y);
      if (!p) continue;
      ctx.fillStyle = rgba(r() > 0.3 ? hair : shade(hair, -0.4), 0.22);
      ctx.fillRect(p[0], p[1], 1.1, 1.1 + r() * 1.2);
    }
    if (kind === 'mustache' || kind === 'goatee' || kind === 'short-beard' || kind === 'full-beard') {
      const mus = [...qb([-0.26, my + 0.02], [0, my + 0.14], [0.26, my + 0.02], 16), ...qb([0.26, my + 0.02], [0, my + 0.06], [-0.26, my + 0.02], 16)];
      this.fill(mus, rgba(hair, 0.95));
    }
    if (kind === 'goatee') {
      const g = [...qb([-0.16, my - 0.1], [0, my - 0.42], [0.16, my - 0.1], 16), ...qb([0.16, my - 0.1], [0, my - 0.16], [-0.16, my - 0.1], 16)];
      this.fill(g, rgba(hair, 0.95));
    }
  }
}

/* ----------------------------- eyes ----------------------------- */

/** Equirectangular eyeball texture: iris centred on +Z (u = 0.25, v = 0.5). */
export function paintEyeTexture(irisHex: string, opts: { heart?: boolean; dots?: boolean; button?: boolean; irisScale?: number }): THREE.CanvasTexture {
  const W = 1024;
  const H = 512;
  const canvas = createCanvas(W, H);
  const ctx = canvas.getContext('2d') as Ctx;
  const cx = W * 0.25;
  const cy = H * 0.5;
  if (opts.button) {
    ctx.fillStyle = '#0b0b0d';
    ctx.fillRect(0, 0, W, H);
  } else {
    const sclera = ctx.createRadialGradient(cx, cy, 10, cx, cy, W * 0.3);
    sclera.addColorStop(0, '#ffffff');
    sclera.addColorStop(0.7, '#f4efec');
    sclera.addColorStop(1, '#e2d2cf');
    ctx.fillStyle = sclera;
    ctx.fillRect(0, 0, W, H);
  }
  const R = (0.5 / Math.PI) * H * (opts.irisScale ?? 1);
  if (opts.dots) {
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, W, H);
  } else if (opts.heart) {
    ctx.save();
    ctx.translate(cx, cy + R * 0.1);
    ctx.scale(R / 13, R / 13);
    ctx.beginPath();
    ctx.moveTo(0, 8);
    ctx.bezierCurveTo(-14, -2, -10, -14, 0, -7);
    ctx.bezierCurveTo(10, -14, 14, -2, 0, 8);
    const g = ctx.createRadialGradient(0, -4, 1, 0, 0, 14);
    g.addColorStop(0, '#ff7a9a');
    g.addColorStop(1, '#e0103a');
    ctx.fillStyle = g;
    ctx.fill();
    ctx.restore();
  } else if (!opts.button) {
    const iris = ctx.createRadialGradient(cx, cy, R * 0.2, cx, cy, R);
    iris.addColorStop(0, shade(irisHex, 0.25));
    iris.addColorStop(0.55, irisHex);
    iris.addColorStop(0.88, shade(irisHex, -0.35));
    iris.addColorStop(1, shade(irisHex, -0.7));
    ctx.fillStyle = iris;
    ctx.beginPath();
    ctx.arc(cx, cy, R, 0, Math.PI * 2);
    ctx.fill();
    // Radial fibres.
    ctx.lineWidth = 1.4;
    for (let i = 0; i < 90; i++) {
      const a = (i / 90) * Math.PI * 2;
      ctx.strokeStyle = rgba(i % 2 ? shade(irisHex, 0.45) : shade(irisHex, -0.4), 0.35);
      ctx.beginPath();
      ctx.moveTo(cx + Math.cos(a) * R * 0.45, cy + Math.sin(a) * R * 0.45);
      ctx.lineTo(cx + Math.cos(a) * R * 0.92, cy + Math.sin(a) * R * 0.92);
      ctx.stroke();
    }
    ctx.fillStyle = '#070505';
    ctx.beginPath();
    ctx.arc(cx, cy, R * 0.42, 0, Math.PI * 2);
    ctx.fill();
  }
  const tex = new THREE.CanvasTexture(canvas as HTMLCanvasElement);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  return tex;
}

/** Tiling knit/bump texture for fabric. */
export function fabricBump(seed = 7): THREE.CanvasTexture {
  const S = 256;
  const canvas = createCanvas(S, S);
  const ctx = canvas.getContext('2d') as Ctx;
  const r = rng(seed);
  ctx.fillStyle = '#808080';
  ctx.fillRect(0, 0, S, S);
  for (let y = 0; y < S; y += 4) {
    for (let x = 0; x < S; x += 4) {
      const v = 110 + Math.floor(r() * 50) + ((x / 4 + y / 4) % 2) * 20;
      ctx.fillStyle = `rgb(${v},${v},${v})`;
      ctx.fillRect(x, y, 4, 4);
    }
  }
  const tex = new THREE.CanvasTexture(canvas as HTMLCanvasElement);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(10, 10);
  return tex;
}
