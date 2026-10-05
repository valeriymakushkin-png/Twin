import * as THREE from 'three';
import type { MascotDna } from '@mascot/shared';
import type { MouthKind } from './expressions';
import type { HeadParams } from './head';
import { sdRoundCone, type Sdf } from './sdf';

/**
 * Sculpted emoji-style mouth: an opening carved into the muzzle, rolled upper and lower lips,
 * a row of teeth and a tongue. The same 2D curves drive the head SDF (cavity + lips), the face
 * paint (lip colour, dark interior) and the teeth / tongue meshes, so everything lines up.
 * Coordinates are head space (x right, y up, z towards the viewer).
 */
export interface MouthSpec {
  kind: MouthKind;
  /** Mouth centre height and half width. */
  y: number;
  w: number;
  /** Opening line above / below the centre at t ∈ [-1, 1] (t = x / w). */
  upper(t: number): number;
  lower(t: number): number;
  /** Lip thickness (vertical) along the mouth. */
  lipU(t: number): number;
  lipL(t: number): number;
  /** Lips pushed forward (kiss / pout). */
  pucker: number;
  teethTop: number;
  teethBottom: number;
  tongue: 'none' | 'in' | 'out';
  /** True when the lips part (an interior is visible). */
  open: boolean;
}

const sq = (t: number) => t * t;

export function mouthSpec(kind: MouthKind, widthMul: number, P: HeadParams, dna: Pick<MascotDna, 'mouthShape'>): MouthSpec {
  const my = P.mouthY * P.height;
  const shapeW = dna.mouthShape === 'wide' ? 1.12 : dna.mouthShape === 'small' ? 0.86 : 1;
  const full = dna.mouthShape === 'full' || dna.mouthShape === 'heart' || dna.mouthShape === 'bow' ? 1.3 : dna.mouthShape === 'thin' ? 0.65 : 1;
  const down = dna.mouthShape === 'downturned' ? -0.012 : 0;
  const base = 0.25 * shapeW * widthMul;
  const lip = (u: number, l: number) => ({
    lipU: (t: number) => u * full * (1 - 0.7 * sq(t)) * (1 - 0.25 * Math.exp(-sq(t) / 0.01)),
    lipL: (t: number) => l * full * (1 - 0.6 * sq(t)),
  });
  // Opening between two curves; `lift` raises the corners (smile) or drops them (frown).
  const open = (w: number, lift: number, top: number, bottom: number, extra: Partial<MouthSpec> = {}): MouthSpec => ({
    kind,
    y: my,
    w,
    upper: (t) => my + (lift + down) * sq(t) + top * (1 - sq(t)),
    lower: (t) => my + (lift + down) * sq(t) - bottom * Math.pow(Math.max(0, 1 - sq(t)), 0.85),
    ...lip(0.045, 0.06),
    pucker: 0,
    teethTop: 0,
    teethBottom: 0,
    tongue: 'none',
    open: true,
    ...extra,
  });
  const closed = (w: number, line: (t: number) => number, extra: Partial<MouthSpec> = {}): MouthSpec => ({
    kind,
    y: my,
    w,
    upper: (t) => line(t) + 0.004,
    lower: (t) => line(t) - 0.004,
    ...lip(0.05, 0.065),
    pucker: 0,
    teethTop: 0,
    teethBottom: 0,
    tongue: 'none',
    open: false,
    ...extra,
  });
  switch (kind) {
    case 'grin':
      return open(base * 1.15, 0.06, 0.01, 0.12, { teethTop: 0.05, tongue: 'in', ...lip(0.032, 0.05) });
    case 'laugh':
      return open(base * 1.25, 0.06, 0.03, 0.22, { teethTop: 0.055, tongue: 'in', ...lip(0.03, 0.045) });
    case 'tongue':
      return open(base * 1.05, 0.05, 0.012, 0.1, { teethTop: 0.045, tongue: 'out', ...lip(0.034, 0.05) });
    case 'o': {
      const w = base * 0.5;
      const h = 0.085;
      return {
        ...open(w, 0, h, h),
        upper: (t) => my - 0.02 + h * Math.sqrt(Math.max(0, 1 - sq(t))),
        lower: (t) => my - 0.02 - h * 1.1 * Math.sqrt(Math.max(0, 1 - sq(t))),
        ...lip(0.04, 0.05),
        teethTop: 0.02,
        tongue: 'in',
      };
    }
    case 'yawn': {
      const w = base * 0.62;
      const h = 0.15;
      return {
        ...open(w, 0, h, h),
        upper: (t) => my - 0.06 + h * Math.sqrt(Math.max(0, 1 - sq(t))),
        lower: (t) => my - 0.06 - h * 1.05 * Math.sqrt(Math.max(0, 1 - sq(t))),
        ...lip(0.03, 0.045),
        teethTop: 0.025,
        tongue: 'in',
      };
    }
    case 'wail':
      // Crying: corners pulled down, upper lip arched.
      return {
        ...open(base * 1.0, -0.07, 0.07, 0.04),
        upper: (t) => my - 0.07 * sq(t) + 0.07 * (1 - sq(t)),
        lower: (t) => my - 0.07 * sq(t) - 0.04 * (1 - sq(t)),
        teethBottom: 0.03,
        tongue: 'in',
      };
    case 'grit':
      return open(base * 1.1, -0.01, 0.035, 0.045, { teethTop: 0.04, teethBottom: 0.04, ...lip(0.035, 0.045) });
    case 'smile':
      return closed(base * 1.05, (t) => my + 0.045 * sq(t) - 0.008 + down * sq(t));
    case 'smirk':
      return closed(base * 0.95, (t) => my + (t > 0 ? 0.07 * sq(t) : 0.008 * sq(t)) - 0.004 + 0.012 * t);
    case 'frown':
      return closed(base * 0.9, (t) => my - 0.04 * sq(t) + 0.01);
    case 'wavy':
      return closed(base * 0.9, (t) => my + 0.014 * Math.sin(t * Math.PI * 2.2), lip(0.035, 0.045));
    case 'cat':
      return closed(base * 0.75, (t) => my - 0.03 * Math.abs(Math.sin(t * Math.PI)) + 0.006, lip(0.03, 0.04));
    case 'kiss':
      return { ...closed(base * 0.42, () => my - 0.01), ...lip(0.06, 0.07), pucker: 1 };
    case 'pout':
      return { ...closed(base * 0.6, (t) => my - 0.012 * sq(t)), ...lip(0.06, 0.08), pucker: 0.6 };
    case 'flat':
    default:
      return closed(base * 0.85, (t) => my + 0.012 * sq(t) - 0.002 + down * sq(t));
  }
}

/** Stable cache key of the geometry-relevant part of a mouth. */
export function mouthKey(m: MouthSpec): string {
  const r = (v: number) => Math.round(v * 1000);
  return [m.kind, r(m.y), r(m.w), r(m.upper(0)), r(m.lower(0)), r(m.upper(0.7)), r(m.lower(0.7)), r(m.lipU(0)), r(m.lipL(0)), m.pucker].join(',');
}

/**
 * Face depth along the mouth, measured on the head without the mouth (ray from the front).
 * Lips and teeth are placed relative to it.
 */
export function surfaceSampler(f: Sdf, y0: number, y1: number, x1: number): (x: number, y: number) => number {
  const NX = 33;
  const NY = 25;
  const grid = new Float32Array(NX * NY);
  for (let j = 0; j < NY; j++) {
    const y = y0 + ((y1 - y0) * j) / (NY - 1);
    for (let i = 0; i < NX; i++) {
      const x = -x1 + (2 * x1 * i) / (NX - 1);
      let z = 1.8;
      while (z > -0.2 && f(x, y, z) > 0) z -= 0.006;
      grid[j * NX + i] = z;
    }
  }
  return (x, y) => {
    const fx = Math.max(0, Math.min(NX - 1.001, ((x + x1) / (2 * x1)) * (NX - 1)));
    const fy = Math.max(0, Math.min(NY - 1.001, ((y - y0) / (y1 - y0)) * (NY - 1)));
    const i = Math.floor(fx);
    const j = Math.floor(fy);
    const tx = fx - i;
    const ty = fy - j;
    const a = grid[j * NX + i]! * (1 - tx) + grid[j * NX + i + 1]! * tx;
    const b = grid[(j + 1) * NX + i]! * (1 - tx) + grid[(j + 1) * NX + i + 1]! * tx;
    return a * (1 - ty) + b * ty;
  };
}

export interface MouthSdf {
  /** Lip rolls (union these into the head). */
  lips: Sdf;
  /** Cavity (subtract from the head). */
  cavity: Sdf;
  /** Bounds of everything the mouth touches. */
  box: [number, number, number, number];
}

/** Lip rolls along both lines + the carved interior, as signed distances. */
export function mouthSdf(m: MouthSpec, surf: (x: number, y: number) => number): MouthSdf {
  const N = 14;
  type Seg = [[number, number, number], [number, number, number], number, number];
  const segs: Seg[] = [];
  const roll = (line: (t: number) => number, thick: (t: number) => number, dir: 1 | -1) => {
    const pts: Array<[[number, number, number], number]> = [];
    for (let i = 0; i <= N; i++) {
      const t = -1 + (2 * i) / N;
      const x = t * m.w * (1 + 0.04 * m.pucker);
      const th = thick(t);
      const r = th * 0.55 * (1 - 0.35 * Math.pow(Math.abs(t), 6));
      const y = line(t) + dir * th * 0.45;
      // Pucker: lips push forward and gather towards the centre.
      const fwd = m.pucker * 0.06 * (1 - sq(t));
      const z = surf(x, y) - r * 0.45 + fwd;
      pts.push([[x * (1 - 0.15 * m.pucker), y, z], r]);
    }
    for (let i = 0; i < pts.length - 1; i++) segs.push([pts[i]![0], pts[i + 1]![0], pts[i]![1], pts[i + 1]![1]]);
  };
  roll(m.upper, m.lipU, 1);
  roll(m.lower, m.lipL, -1);
  const lips: Sdf = (x, y, z) => {
    let d = Infinity;
    for (const [a, b, ra, rb] of segs) d = Math.min(d, sdRoundCone(x, y, z, a, b, ra, rb));
    return d;
  };
  // Interior: the prism between the opening lines, from just behind the lips backwards.
  const back = surf(0, m.y) - (m.open ? 0.3 : 0.08);
  const cavity: Sdf = (x, y, z) => {
    const t = x / (m.w * 0.98);
    const dx = Math.abs(t) - 1;
    const tc = Math.max(-1, Math.min(1, t));
    const dy = Math.max(m.lower(tc) - y, y - m.upper(tc));
    const d2 = Math.max(dx * m.w * 0.98, dy);
    return Math.max(d2, back - z);
  };
  const top = Math.max(m.upper(0), m.upper(0.7), m.upper(1)) + m.lipU(0) + 0.06;
  const bottom = Math.min(m.lower(0), m.lower(0.7), m.lower(1)) - m.lipL(0) - 0.06;
  return { lips, cavity, box: [-m.w - 0.08, m.w + 0.08, bottom, top] };
}

/** Teeth rows and tongue, fitted inside the opening. */
export function buildMouthParts(m: MouthSpec, surf: (x: number, y: number) => number, mats: { teeth: THREE.Material; tongue: THREE.Material }): THREE.Group {
  const g = new THREE.Group();
  g.name = 'mouth';
  if (!m.open) return g;
  const row = (top: boolean, h: number) => {
    const n = 24;
    const pos: number[] = [];
    const idx: number[] = [];
    const span = 0.88;
    for (let i = 0; i <= n; i++) {
      const t = -span + (2 * span * i) / n;
      const x = t * m.w;
      const edge = top ? m.upper(t) + 0.02 : m.lower(t) - 0.02;
      const y0 = edge;
      const y1 = top ? edge - h - 0.02 : edge + h + 0.02;
      const z = surf(x, (y0 + y1) / 2) - 0.055 - 0.04 * sq(t);
      // Front face (two rows) + a rounded biting edge.
      pos.push(x, y0, z - 0.01, x, y1 + (top ? 0.01 : -0.01), z - 0.004, x, y1, z - 0.05);
    }
    for (let i = 0; i < n; i++) {
      const a = i * 3;
      const b = a + 3;
      if (top) idx.push(a, b + 1, b, a, a + 1, b + 1, a + 1, b + 2, b + 1, a + 1, a + 2, b + 2);
      else idx.push(a, b, b + 1, a, b + 1, a + 1, a + 1, b + 1, b + 2, a + 1, b + 2, a + 2);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    geo.setIndex(idx);
    geo.computeVertexNormals();
    const mesh = new THREE.Mesh(geo, mats.teeth);
    mesh.name = top ? 'teeth-top' : 'teeth-bottom';
    g.add(mesh);
  };
  if (m.teethTop > 0) row(true, m.teethTop);
  if (m.teethBottom > 0) row(false, m.teethBottom);
  if (m.tongue !== 'none') {
    const depth = m.upper(0) - m.lower(0);
    const out = m.tongue === 'out';
    const tongue = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 20), mats.tongue);
    const cy = out ? m.lower(0) - 0.035 : m.lower(0) + Math.min(0.03, depth * 0.12);
    const cz = surf(0, m.y) + (out ? 0.03 : -0.15);
    tongue.position.set(out ? 0.015 : 0, cy, cz);
    tongue.scale.set(m.w * (out ? 0.45 : 0.5), out ? 0.07 : Math.max(0.025, Math.min(0.055, depth * 0.25)), out ? 0.1 : 0.1);
    if (out) tongue.rotation.x = 0.5;
    tongue.name = 'tongue';
    g.add(tongue);
  }
  return g;
}

/** 2D outlines (head space x, y) for painting: opening and lip bands. */
export function mouthOutlines(m: MouthSpec, n = 28): { opening: Array<[number, number]>; upperLip: Array<[number, number]>; lowerLip: Array<[number, number]> } {
  const ts = Array.from({ length: n + 1 }, (_, i) => -1 + (2 * i) / n);
  const opening = [...ts.map((t) => [t * m.w, m.upper(t)] as [number, number]), ...ts.slice().reverse().map((t) => [t * m.w, m.lower(t)] as [number, number])];
  const pull = 1 - 0.15 * m.pucker;
  const upperLip = [...ts.map((t) => [t * m.w * pull, m.upper(t) - 0.004] as [number, number]), ...ts.slice().reverse().map((t) => [t * m.w * pull, m.upper(t) + m.lipU(t) * 1.15] as [number, number])];
  const lowerLip = [...ts.map((t) => [t * m.w * pull, m.lower(t) + 0.004] as [number, number]), ...ts.slice().reverse().map((t) => [t * m.w * pull, m.lower(t) - m.lipL(t) * 1.15] as [number, number])];
  return { opening, upperLip, lowerLip };
}
