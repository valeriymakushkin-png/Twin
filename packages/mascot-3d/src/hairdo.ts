import * as THREE from 'three';
import type { HairLook, HairSides, HairTie } from '@mascot/shared';
import { backFlow, buildClumps, clumpPaths, crownFlow, fringeFlow, partFlow, tieFlow, type ClumpSpec } from './clumps';
import { buildDrape, type DrapeSpec } from './drape';
import { buildHairSdf, type SdfBlob, type SdfLock, type SdfRing } from './hairsdf';
import { sculpt, type HeadParams } from './head';
import { clamp, fbm3, gauss, lerp, noise3, rng, smoothstep } from './math';

/**
 * Hairstyle compiler: turns a semantic HairLook (cut, length, texture, sides, bangs, ties,
 * strands…) into layers — a sculpted scalp shell, a faded stubble shell, groomed clumps,
 * instanced curls, a backing curtain and attachments (tails, buns, braids, locs, puffs).
 */

export interface ShellSpec {
  front: number;
  side: number;
  back: number;
  sideburn: number;
  base: number;
  top: number;
  /** Extra volume above the forehead (quiff / pompadour). */
  frontBoost: number;
  noiseAmp: number;
  noiseFreq: number;
  /** Bangs: lowers the front hairline to this height (dir.y). */
  fringe?: number;
  fringeWidth?: number;
  /** 0 = ruler-straight fringe edge, 1 = jagged. */
  fringeJag?: number;
  /** Side part groove x position / depth / width. */
  part?: number;
  partDepth?: number;
  partWidth?: number;
  /** Mohawk: only a central strip has volume. */
  strip?: number;
  /** Swept fringe direction (+1 → towards +x). */
  sweep?: number;
  /** Receding hairline 0..1. */
  recede?: number;
  /** Horseshoe: no hair above this height. */
  topCut?: number;
  /** Side shave on the -1 / +1 x side. */
  shave?: number;
  /** Flat top: hair clipped at this height (× head height). */
  flat?: number;
  /** Tall rounded volume on top (beehive). */
  dome?: number;
  /** Crown volume at the back (stacked bob). */
  backBoost?: number;
  /** Extra width over the ears (bouffant). */
  sideBoost?: number;
  /** Width multiplier of the soft hairline band (0 = hard edge). */
  soft?: number;
}

export function hairline(dir: THREE.Vector3, s: ShellSpec): number {
  const phi = Math.atan2(dir.x, dir.z);
  const a = Math.abs(phi) / Math.PI;
  // Behind the ears the hairline drops to the nape and runs across it (not a V down the back).
  let h = a < 0.5 ? lerp(s.front, s.side, smoothstep(0, 0.5, a)) : lerp(s.side, s.back, smoothstep(0.5, 0.82, a));
  h -= s.sideburn * gauss((a - 0.42) ** 2, 0.03);
  const recede = s.recede ?? 0;
  // Temple recession gives a natural "M" hairline instead of a bowl cut.
  if (s.fringe === undefined) h += (0.07 + 0.2 * recede) * gauss((a - 0.17) ** 2, 0.05);
  if (recede > 0) h += 0.14 * recede * (1 - smoothstep(0.05, 0.32, a));
  if (s.fringe !== undefined && a < (s.fringeWidth ?? 0.4)) {
    const fw = s.fringeWidth ?? 0.4;
    const k = 1 - smoothstep(fw * 0.6, fw, a);
    const jag = (s.fringeJag ?? 1) * (0.025 * Math.sin(phi * 38) + 0.02 * Math.sin(phi * 13 + 1)) + (s.sweep ?? 0) * phi * 0.18;
    h = lerp(h, s.fringe + jag, k);
  }
  if (s.shave && Math.sign(dir.x) === s.shave) h = lerp(h, 0.66, smoothstep(0.14, 0.26, a) * smoothstep(0.86, 0.7, a));
  // Horseshoe: the band starts above the ears, temples stay bald.
  if (s.topCut !== undefined) h = a < 0.45 ? lerp(1.4, h, smoothstep(0.3, 0.45, a)) : h;
  return h;
}

type Collider = (x: number, y: number, z: number) => number;

export interface HairdoOptions {
  seed: number;
  detail: number;
  /** Low-detail helmet (toy styles). */
  simple?: boolean;
  /** Body volume (head space) long hair rests on. */
  collider?: Collider;
  /** Skin colour, used to blend faded sides into the scalp. */
  skin?: THREE.Color;
}

export interface HairResult {
  group: THREE.Group;
  /** Approx. hair volume above the scalp at the crown (used to place hats). */
  crown: number;
}

interface CurlLayer {
  /** Root directions to scatter over. */
  keep: (d: THREE.Vector3) => boolean;
  /** Radial volume above the scalp at d (head units). */
  vol: (d: THREE.Vector3) => number;
  count: number;
  size: number;
  layers: number;
}

interface Ctx {
  P: HeadParams;
  group: THREE.Group;
  mat: THREE.MeshPhysicalMaterial;
  tieMat: THREE.Material;
  rand: () => number;
  collider?: Collider;
  look: HairLook;
  shell: ShellSpec;
  /** Sculpted mode: tails, buns and rolls become part of the hair sculpture. */
  sdf?: { locks: SdfLock[]; blobs: SdfBlob[]; rings: SdfRing[] };
}

interface Plan {
  shell: ShellSpec;
  stubble?: { spec: ShellSpec; gradient: boolean; skinMix: number };
  clumps: ClumpSpec[];
  curls: CurlLayer[];
  /** Curls filling an arbitrary volume (high top, puffs). */
  fills: Array<{ test: (p: THREE.Vector3) => boolean; box: [THREE.Vector3, THREE.Vector3]; count: number; size: number }>;
  curtain?: { length: number; phiStart: number; flare: number };
  /** Sculpted (emoji) mode: falling hair as parametric drapes instead of falling clumps. */
  drapes?: Array<Omit<DrapeSpec, 'seed'>>;
  extras: Array<(c: Ctx) => void>;
  crown: number;
  /** 0..1 wet / pomade shine. */
  gloss?: number;
}

/* --------------------------------- helpers -------------------------------- */

const T1 = new THREE.Vector3();
const T2 = new THREE.Vector3();
const UP = new THREE.Vector3(0, 1, 0);

const SHORT = { front: 0.55, side: 0.21, back: -0.56, sideburn: 0.22 };
const LONG = { front: 0.48, side: 0.06, back: -0.8, sideburn: 0 };
const TIED = { front: 0.5, side: 0.12, back: -0.62, sideburn: 0.1 };

function shellSpec(base: typeof SHORT, rest: Partial<ShellSpec>): ShellSpec {
  return { ...base, base: 0.03, top: 0.07, frontBoost: 0, noiseAmp: 0.01, noiseFreq: 7, ...rest };
}

const top = (d: THREE.Vector3) => smoothstep(0.3, 1, d.y);

/** Clumps lie flat near a soft front hairline instead of stacking into a ledge. */
const edgeFade = (s: ShellSpec) => (d: THREE.Vector3) => {
  const a = Math.abs(Math.atan2(d.x, d.z)) / Math.PI;
  if (s.fringe !== undefined && a < (s.fringeWidth ?? 0.4)) return 1;
  const h = hairline(d, s);
  return lerp(lerp(0.25, 0.6, smoothstep(0.2, 0.4, a)), 1, smoothstep(h - 0.02, h + (a < 0.3 ? 0.18 : 0.1), d.y));
};
const frontK = (d: THREE.Vector3) => smoothstep(0.35, 0.8, d.z) * smoothstep(0.3, 0.75, d.y);

function messy(flow: ClumpSpec['flow'], k: number): ClumpSpec['flow'] {
  if (k <= 0) return flow;
  return (d, o) => flow(d, o).add(T1.set(Math.sin(d.x * 23 + d.z * 7) * 0.6, Math.cos(d.z * 19) * 0.4 + 0.15, Math.sin(d.y * 17 + d.x * 5) * 0.5).multiplyScalar(k * 1.5));
}

/** Curtain bangs: parted at the centre, swept to both sides. */
const curtainFlow: ClumpSpec['flow'] = (d, o) => o.set(Math.sign(d.x || 1) * 1.7, -0.55, 0.2);

/** Strands converge on the centre line (French braid, mohawk). */
const centreFlow = (back = 0.15): ClumpSpec['flow'] => (d, o) => o.set(-Math.sign(d.x || 1), 0.25, -back);

function dirOf(x: number, y: number, z: number): THREE.Vector3 {
  return new THREE.Vector3(x, y, z).normalize();
}

/** Point on the head surface along `dir`, pushed `lift` head units outwards. */
function onHead(P: HeadParams, dir: THREE.Vector3, lift = 0): THREE.Vector3 {
  return sculpt(dir, P, new THREE.Vector3(), 1 + lift);
}

function headR(P: HeadParams, p: THREE.Vector3): number {
  return sculpt(T2.copy(p).normalize(), P, new THREE.Vector3()).length();
}

/** Keeps p outside the head (with margin) and the body collider. */
function pushOut(P: HeadParams, p: THREE.Vector3, margin: number, collider?: Collider) {
  const r = headR(P, p);
  const l = p.length();
  if (l < r + margin && l > 1e-4) p.multiplyScalar((r + margin) / l);
  if (collider) {
    for (let it = 0; it < 3; it++) {
      const d = collider(p.x, p.y, p.z);
      if (d >= margin) break;
      const e = 0.01;
      T1.set(collider(p.x + e, p.y, p.z) - collider(p.x - e, p.y, p.z), collider(p.x, p.y + e, p.z) - collider(p.x, p.y - e, p.z), collider(p.x, p.y, p.z + e) - collider(p.x, p.y, p.z - e));
      if (T1.lengthSq() < 1e-12) break;
      p.addScaledVector(T1.normalize(), margin - d);
    }
  }
}

/** Hanging path from `start`, leaving along `out` and bending under gravity. */
function hangPath(P: HeadParams, start: THREE.Vector3, out: THREE.Vector3, length: number, c: { collider?: Collider; margin: number; stiff?: number; forward?: number; wave?: number; seed?: number }): THREE.Vector3[] {
  const pts = [start.clone()];
  const dir = out.clone().normalize();
  const ds = 0.04;
  const n = Math.max(3, Math.ceil(length / ds));
  const p = start.clone();
  const side = new THREE.Vector3();
  const prev = new THREE.Vector3();
  let lastWave = 0;
  for (let i = 1; i <= n; i++) {
    const g = (1 - (c.stiff ?? 0.6)) * 0.35 + 0.06;
    dir.lerp(T1.set(0, -1, c.forward ?? 0).normalize(), g).normalize();
    p.addScaledVector(dir, ds);
    if (c.wave) {
      side.set(-p.z, 0, p.x).normalize();
      const w = c.wave * Math.sin(i * ds * 9 + (c.seed ?? 0)) * smoothstep(0, 0.3, i * ds);
      p.addScaledVector(side, w - lastWave);
      lastWave = w;
    }
    prev.copy(p);
    pushOut(P, p, c.margin, c.collider);
    // Pushed off a surface (head, hood, shoulders): slide along it instead of piling up.
    prev.subVectors(p, prev);
    if (prev.lengthSq() > 1e-8) {
      prev.normalize();
      dir.addScaledVector(prev, -Math.min(0, dir.dot(prev))).addScaledVector(prev, 0.25).normalize();
    }
    pts.push(p.clone());
  }
  return pts;
}

/* ------------------------------ geometry kit ------------------------------ */

class GeoBuilder {
  pos: number[] = [];
  uv: number[] = [];
  idx: number[] = [];
  col: number[] | null = null;

  /** Tube around a polyline; `radius(u, theta)` shapes the cross-section (braids, twists, locs). */
  tube(pts: THREE.Vector3[], radius: (u: number, th: number) => number, radial = 10, ref?: (p: THREE.Vector3) => THREE.Vector3, shade?: (u: number, th: number) => number) {
    const m = pts.length;
    if (m < 2) return;
    const start = this.pos.length / 3;
    const T = new THREE.Vector3();
    const N = new THREE.Vector3();
    const B = new THREE.Vector3();
    let len = 0;
    for (let i = 0; i < m; i++) {
      const c = pts[i]!;
      if (i > 0) len += c.distanceTo(pts[i - 1]!);
      T.subVectors(pts[Math.min(m - 1, i + 1)]!, pts[Math.max(0, i - 1)]!).normalize();
      // Reference "outwards" axis: away from the head by default, so ridges face the camera.
      N.copy(ref ? ref(c) : c).normalize();
      N.addScaledVector(T, -N.dot(T));
      if (N.lengthSq() < 1e-6) N.set(0, 0, 1).addScaledVector(T, -T.z);
      N.normalize();
      B.crossVectors(T, N).normalize();
      const u = i / (m - 1);
      for (let j = 0; j <= radial; j++) {
        const th = (j / radial) * Math.PI * 2;
        const r = radius(u, th);
        const ca = Math.cos(th);
        const sa = Math.sin(th);
        this.pos.push(c.x + (N.x * ca + B.x * sa) * r, c.y + (N.y * ca + B.y * sa) * r, c.z + (N.z * ca + B.z * sa) * r);
        this.uv.push((j / radial) * 0.25, len * 0.6);
        if (this.col) {
          const k = shade ? shade(u, th) : 1;
          this.col.push(k, k, k);
        }
      }
    }
    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < radial; j++) {
        const a = start + i * (radial + 1) + j;
        const b = a + radial + 1;
        this.idx.push(a, b, a + 1, b, b + 1, a + 1);
      }
    }
    // Close the ends with a cap point.
    for (const [i, sgn] of [[0, -1], [m - 1, 1]] as const) {
      const c = pts[i]!;
      const ci = this.pos.length / 3;
      T.subVectors(pts[Math.min(m - 1, i + 1)]!, pts[Math.max(0, i - 1)]!).normalize();
      const rr = radius(i / (m - 1), 0) * 0.5;
      this.pos.push(c.x + T.x * rr * sgn, c.y + T.y * rr * sgn, c.z + T.z * rr * sgn);
      this.uv.push(0, 0);
      if (this.col) this.col.push(1, 1, 1);
      const ring = start + i * (radial + 1);
      for (let j = 0; j < radial; j++) {
        if (sgn < 0) this.idx.push(ci, ring + j + 1, ring + j);
        else this.idx.push(ci, ring + j, ring + j + 1);
      }
    }
  }

  build(): THREE.BufferGeometry {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(this.pos, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(this.uv, 2));
    if (this.col) g.setAttribute('color', new THREE.Float32BufferAttribute(this.col, 3));
    g.setIndex(this.idx);
    g.computeVertexNormals();
    return g;
  }
}

/** Three-strand plait: staggered chevron lobes along the tube. */
function braidRadius(r0: number, r1: number, len: number, pitch = 0.11) {
  return (u: number, th: number) => {
    let t = th;
    if (t > Math.PI) t -= Math.PI * 2;
    const side = t >= 0 ? 0 : 0.5;
    const phase = (u * len) / pitch + Math.abs(t) * 0.32 + side;
    const tri = 1 - Math.abs(2 * (phase - Math.floor(phase)) - 1);
    const r = lerp(r0, r1, u) * (u > 0.94 ? 1 - (u - 0.94) * 9 : 1);
    return r * (0.74 + 0.36 * Math.pow(tri, 0.55)) * (1 - 0.2 * Math.abs(Math.sin(t)));
  };
}

function braidShade(len: number, pitch = 0.11) {
  return (u: number, th: number) => {
    let t = th;
    if (t > Math.PI) t -= Math.PI * 2;
    const phase = (u * len) / pitch + Math.abs(t) * 0.32 + (t >= 0 ? 0 : 0.5);
    const tri = 1 - Math.abs(2 * (phase - Math.floor(phase)) - 1);
    return 0.55 + 0.5 * Math.pow(tri, 0.7);
  };
}

/** Two-strand twist: a double helix of ridges. */
function twistRadius(r: number, len: number) {
  return (u: number, th: number) => r * (0.78 + 0.28 * Math.abs(Math.cos(th + (u * len) / 0.05))) * (u > 0.95 ? 1 - (u - 0.95) * 10 : 1);
}

/** Loc: lumpy felted rope. */
function locRadius(r: number, len: number, seed: number) {
  return (u: number, th: number) => r * (0.86 + 0.2 * noise3(u * len * 7, Math.cos(th) * 0.7 + seed, Math.sin(th) * 0.7)) * (u > 0.94 ? 1 - (u - 0.94) * 7 : 1) * (u < 0.04 ? 0.8 : 1);
}

function smoothTube(r0: number, r1: number) {
  return (u: number) => lerp(r0, r1, u) * (u > 0.9 ? 1 - (u - 0.9) * 6 : 1);
}

function addMesh(c: Ctx, geo: THREE.BufferGeometry, mat: THREE.Material = c.mat, name = 'hair-extra') {
  const mesh = new THREE.Mesh(geo, mat);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  mesh.name = name;
  mesh.userData.outline = true;
  c.group.add(mesh);
  return mesh;
}

function vertexColorMat(c: Ctx): THREE.MeshPhysicalMaterial {
  const m = c.mat.clone();
  m.vertexColors = true;
  m.color = c.mat.color.clone();
  return m;
}

/* ------------------------------- attachments ------------------------------ */

const TIE_DIRS: Record<NonNullable<HairTie['height']>, THREE.Vector3> = {
  top: dirOf(0, 0.95, -0.3),
  high: dirOf(0, 0.78, -0.62),
  mid: dirOf(0, 0.5, -0.86),
  low: dirOf(0, -0.08, -1),
  side: dirOf(0.72, -0.05, -0.68),
};

function elastic(c: Ctx, at: THREE.Vector3, axis: THREE.Vector3, r: number) {
  const tie = new THREE.Mesh(new THREE.TorusGeometry(r, r * 0.3, 8, 20), c.tieMat);
  tie.position.copy(at);
  tie.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), axis.clone().normalize());
  tie.castShadow = true;
  c.group.add(tie);
}

interface TailOpts {
  length: number;
  r0: number;
  r1: number;
  braided?: boolean;
  bubble?: boolean;
  texture?: HairLook['texture'];
  forward?: number;
  stiff?: number;
}

/** Ponytail / pigtail from a tie point on the scalp. */
function tail(c: Ctx, dir: THREE.Vector3, o: TailOpts) {
  const root = onHead(c.P, dir, 0.04);
  const out = dir.clone().add(T1.set(0, 0.25, 0)).normalize();
  const pts = hangPath(c.P, root, out, o.length, { collider: c.collider, margin: o.r0 * 0.9, stiff: o.stiff ?? 0.55, forward: o.forward, wave: o.texture === 'wavy' ? 0.05 : o.texture === 'curly' ? 0.04 : 0, seed: dir.x * 9 });
  const len = o.length;
  const g = new GeoBuilder();
  if (o.braided) {
    g.col = [];
    g.tube(pts, braidRadius(o.r0 * 0.85, o.r1 * 1.3, len, 0.1 + o.r0 * 0.25), 16, undefined, braidShade(len, 0.1 + o.r0 * 0.25));
    addMesh(c, g.build(), vertexColorMat(c), 'hair-braid');
  } else if (o.bubble && c.sdf) {
    const nb = Math.max(3, Math.round(len / 0.32));
    const curve = new THREE.CatmullRomCurve3(pts);
    for (let i = 0; i <= nb * 8; i++) {
      const u = i / (nb * 8);
      const r = lerp(o.r0 * 1.15, o.r1 * 1.6, u) * (0.55 + 0.6 * Math.pow(Math.abs(Math.sin(u * nb * Math.PI)), 0.6)) * (u > 0.93 ? 1 - (u - 0.93) * 8 : 1);
      if (r > 0.01) c.sdf.blobs.push({ c: curve.getPointAt(u), r });
    }
    for (let k = 1; k < nb; k++) {
      const i = Math.round((k / nb) * (pts.length - 1));
      const a = pts[i]!;
      const b = pts[Math.min(pts.length - 1, i + 1)]!;
      elastic(c, a, T2.subVectors(b, a), o.r0 * 0.6);
    }
  } else if (o.bubble) {
    const nb = Math.max(3, Math.round(len / 0.32));
    g.tube(pts, (u) => lerp(o.r0 * 1.15, o.r1 * 1.6, u) * (0.55 + 0.6 * Math.pow(Math.abs(Math.sin(u * nb * Math.PI)), 0.6)) * (u > 0.93 ? 1 - (u - 0.93) * 8 : 1), 16);
    addMesh(c, g.build(), c.mat, 'hair-tail');
    for (let k = 1; k < nb; k++) {
      const i = Math.round((k / nb) * (pts.length - 1));
      const a = pts[i]!;
      const b = pts[Math.min(pts.length - 1, i + 1)]!;
      elastic(c, a, T2.subVectors(b, a), o.r0 * 0.6);
    }
  } else {
    // A bundle of locks: tight at the elastic, fuller in the middle, separate soft tips.
    const R = (u: number) => lerp(o.r0 * 0.7, o.r1 * 1.4, Math.pow(u, 1.3)) * (1 + (c.sdf ? 0.85 : 0.6) * Math.sin(Math.PI * Math.min(1, u * 1.15)));
    const T = new THREE.Vector3();
    const N = new THREE.Vector3();
    const B = new THREE.Vector3();
    const locks = 6;
    for (let k = 0; k < locks; k++) {
      const th0 = (k / locks) * Math.PI * 2 + c.rand() * 0.4;
      const cut = 1 - c.rand() * 0.14;
      const sub: THREE.Vector3[] = [];
      const m = Math.max(3, Math.round(pts.length * cut));
      for (let i = 0; i < m; i++) {
        const u = i / (pts.length - 1);
        const p = pts[i]!;
        T.subVectors(pts[Math.min(pts.length - 1, i + 1)]!, pts[Math.max(0, i - 1)]!).normalize();
        N.copy(p).normalize().addScaledVector(T, -N.copy(p).normalize().dot(T)).normalize();
        B.crossVectors(T, N);
        const th = th0 + u * 1.2;
        const off = R(u) * (c.sdf ? 0.56 * (0.6 + 0.4 * u) : 0.48 * (0.55 + 0.45 * u));
        sub.push(p.clone().addScaledVector(N, Math.cos(th) * off).addScaledVector(B, Math.sin(th) * off));
      }
      if (c.sdf) c.sdf.locks.push({ pts: sub, r0: 1, tip: 1, shade: 0.92 + 0.16 * c.rand(), radius: (u) => R(u * cut) * 0.6 * (u > 0.8 ? 1 - (u - 0.8) * 3.5 : 1) });
      else g.tube(sub, (u) => R(u * cut) * 0.62 * (u > 0.85 ? 1 - (u - 0.85) * 5 : 1), 10);
    }
    if (!c.sdf) addMesh(c, g.build(), c.mat, 'hair-tail');
    if (o.texture === 'curly' || o.texture === 'coily') curlsAlong(c, pts, o.r0 * 1.1);
  }
  const a = pts[1]!;
  elastic(c, root.clone().lerp(a, 0.6), T2.subVectors(pts[2] ?? a, root), o.r0 * 0.75);
}

/** Instanced curls hugging a path (curly ponytails / pigtails). */
function curlsAlong(c: Ctx, pts: THREE.Vector3[], r: number) {
  if (c.sdf) {
    for (let i = 0; i < pts.length; i++) {
      const u = i / (pts.length - 1);
      const rr = r * (1 + 0.5 * Math.sin(Math.PI * Math.min(1, u * 1.4))) * (1 - 0.5 * u);
      for (let j = 0; j < 3; j++) c.sdf.blobs.push({ c: new THREE.Vector3(c.rand() - 0.5, c.rand() - 0.5, c.rand() - 0.5).normalize().multiplyScalar(rr * (0.6 + 0.5 * c.rand())).add(pts[i]!), r: 0.07 + 0.04 * c.rand() });
    }
    return;
  }
  const coil = new THREE.TorusGeometry(1, 0.55, 6, 10);
  const n = pts.length * 7;
  const im = new THREE.InstancedMesh(coil, c.mat, n);
  const m4 = new THREE.Matrix4();
  const q = new THREE.Quaternion();
  const e = new THREE.Euler();
  const p = new THREE.Vector3();
  let k = 0;
  for (let i = 0; i < pts.length && k < n; i++) {
    const u = i / (pts.length - 1);
    const rr = r * (1 + 0.5 * Math.sin(Math.PI * Math.min(1, u * 1.4))) * (1 - 0.5 * u);
    for (let j = 0; j < 7 && k < n; j++) {
      p.set(c.rand() - 0.5, c.rand() - 0.5, c.rand() - 0.5).normalize().multiplyScalar(rr * (0.6 + 0.5 * c.rand())).add(pts[i]!);
      e.set(c.rand() * 3, c.rand() * 3, c.rand() * 3);
      q.setFromEuler(e);
      m4.compose(p, q, T1.setScalar(0.06 + 0.03 * c.rand()));
      im.setMatrixAt(k++, m4);
    }
  }
  im.count = k;
  im.castShadow = true;
  im.instanceMatrix.needsUpdate = true;
  im.userData.outline = true;
  c.group.add(im);
}

interface BunOpts {
  size: number;
  messy?: boolean;
  donut?: boolean;
  braided?: boolean;
}

function bun(c: Ctx, dir: THREE.Vector3, o: BunOpts): number {
  const R = 0.2 + 0.26 * o.size;
  const base = onHead(c.P, dir, 0);
  const n = base.clone().normalize().lerp(dir, 0.5).normalize();
  const centre = base.clone().addScaledVector(n, R * (o.donut ? 0.45 : 0.72));
  if (c.sdf && !o.braided) {
    if (o.donut) {
      c.sdf.rings.push({ c: centre.clone(), axis: n.clone(), R: R * 0.72, r: R * 0.42 });
      c.sdf.blobs.push({ c: centre.clone().addScaledVector(n, R * 0.12), r: R * 0.42 });
    } else {
      c.sdf.blobs.push({ c: centre.clone(), r: R * 0.95 });
      if (o.messy) {
        for (let k = 0; k < 6; k++) {
          const axis = new THREE.Vector3(c.rand() - 0.5, c.rand() - 0.5, c.rand() - 0.5).normalize();
          c.sdf.rings.push({ c: centre.clone().add(T1.set(c.rand() - 0.5, c.rand() - 0.5, c.rand() - 0.5).multiplyScalar(R * 0.55)), axis, R: R * (0.5 + 0.2 * c.rand()), r: R * 0.14 });
        }
      }
    }
  } else if (o.donut) {
    const geo = new THREE.TorusGeometry(R * 0.72, R * 0.42, 16, 36);
    const m = addMesh(c, geo, c.mat, 'hair-bun');
    m.position.copy(centre);
    m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), n);
    const knot = addMesh(c, new THREE.SphereGeometry(R * 0.42, 20, 14), c.mat, 'hair-bun');
    knot.position.copy(centre).addScaledVector(n, R * 0.12);
  } else if (o.braided) {
    // A braid coiled into a spiral.
    const pts: THREE.Vector3[] = [];
    const a = new THREE.Vector3().crossVectors(n, Math.abs(n.y) > 0.9 ? new THREE.Vector3(1, 0, 0) : UP).normalize();
    const b = new THREE.Vector3().crossVectors(n, a).normalize();
    for (let i = 0; i <= 90; i++) {
      const t = i / 90;
      const ang = t * Math.PI * 2 * 2.2;
      const rr = R * (0.85 - 0.62 * t);
      pts.push(centre.clone().addScaledVector(a, Math.cos(ang) * rr).addScaledVector(b, Math.sin(ang) * rr).addScaledVector(n, (t - 0.3) * R * 0.9));
    }
    const g = new GeoBuilder();
    g.col = [];
    const len = R * 9;
    g.tube(pts, braidRadius(R * 0.36, R * 0.24, len, 0.09), 14, (p) => T1.subVectors(p, centre).addScaledVector(n, 0.4), braidShade(len, 0.09));
    addMesh(c, g.build(), vertexColorMat(c), 'hair-bun');
  } else {
    const geo = new THREE.SphereGeometry(R, 36, 26);
    // Wrapped look: swirl the UVs so the strand texture spirals around the knot.
    const uv = geo.attributes.uv as THREE.BufferAttribute;
    for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * 2 + uv.getY(i) * 1.5, uv.getY(i));
    const m = addMesh(c, geo, c.mat, 'hair-bun');
    m.position.copy(centre);
    m.quaternion.setFromUnitVectors(UP, n);
    m.scale.set(1, 0.86, 1);
    if (o.messy) {
      for (let k = 0; k < 7; k++) {
        const loop = addMesh(c, new THREE.TorusGeometry(R * (0.45 + 0.25 * c.rand()), R * 0.13, 8, 20, Math.PI * (1 + c.rand() * 0.6)), c.mat, 'hair-bun');
        loop.position.copy(centre).add(T1.set(c.rand() - 0.5, c.rand() - 0.5, c.rand() - 0.5).multiplyScalar(R * 0.7));
        loop.rotation.set(c.rand() * 6, c.rand() * 6, c.rand() * 6);
      }
      // Flyaways.
      const g = new GeoBuilder();
      for (let k = 0; k < 9; k++) {
        const d = T1.set(c.rand() - 0.5, c.rand() * 0.6, c.rand() - 0.5).normalize().clone();
        const s0 = centre.clone().addScaledVector(d, R * 0.8);
        const pts = hangPath(c.P, s0, d, 0.18 + c.rand() * 0.18, { margin: 0.01, stiff: 0.8 });
        g.tube(pts, smoothTube(0.016, 0.006), 5);
      }
      addMesh(c, g.build(), c.mat, 'hair-flyaway');
    }
  }
  elastic(c, base.clone().addScaledVector(n, R * 0.12), n, R * 0.62);
  return centre.y + R;
}

/** Braid lying on the scalp along `dirs`, optionally continuing as a hanging braid. */
function scalpBraid(c: Ctx, dirs: THREE.Vector3[], r: number, hang: number, hangOut?: THREE.Vector3) {
  // Sculpted hair: the braid rides on top of the hair mass (it is the feature of the style),
  // instead of being buried in the scalp shell.
  const pts = dirs.map((d) => onHead(c.P, d, Math.max(0.03 + r * 0.5, c.sdf && c.shell ? shellT(c.shell, d) + r * 0.62 : 0)));
  if (hang > 0) {
    const last = pts[pts.length - 1]!;
    const out = hangOut ?? T1.subVectors(last, pts[pts.length - 2]!).normalize().clone();
    pts.push(...hangPath(c.P, last, out, hang, { collider: c.collider, margin: r * 0.9, stiff: 0.5 }).slice(1));
  }
  let len = 0;
  for (let i = 1; i < pts.length; i++) len += pts[i]!.distanceTo(pts[i - 1]!);
  const g = new GeoBuilder();
  g.col = [];
  const pitch = 0.07 + r * 0.5;
  g.tube(resample(pts, 0.015), braidRadius(r, hang > 0 ? r * 0.7 : r * 0.85, len, pitch), r > 0.06 ? 16 : 10, undefined, braidShade(len, pitch));
  return g;
}

function resample(pts: THREE.Vector3[], step: number): THREE.Vector3[] {
  const curve = new THREE.CatmullRomCurve3(pts, false, 'centripetal');
  const n = Math.max(4, Math.ceil(curve.getLength() / step));
  return curve.getSpacedPoints(n);
}

/** Arc of directions over the scalp from a to b (spherical lerp). */
function arc(a: THREE.Vector3, b: THREE.Vector3, n: number): THREE.Vector3[] {
  const out: THREE.Vector3[] = [];
  for (let i = 0; i <= n; i++) {
    const t = i / n;
    out.push(new THREE.Vector3().lerpVectors(a, b, t).normalize());
  }
  return out;
}

function arc3(a: THREE.Vector3, m: THREE.Vector3, b: THREE.Vector3, n: number): THREE.Vector3[] {
  return [...arc(a, m, n).slice(0, -1), ...arc(m, b, n)];
}

/* --------------------------------- strands -------------------------------- */

function strands(c: Ctx, look: HairLook) {
  const s = look.strands!;
  const P = c.P;
  const kind = s.kind;
  const thick = s.thickness ?? 1;
  const g = new GeoBuilder();
  const braided = kind === 'box-braids' || kind === 'cornrows';
  if (braided) g.col = [];
  if (kind === 'cornrows') {
    const rows = s.count ?? 8;
    const r = 0.05 * thick * (8 / rows) ** 0.4;
    for (let i = 0; i < rows; i++) {
      const xn = lerp(-0.66, 0.66, rows === 1 ? 0.5 : i / (rows - 1));
      const ax = Math.abs(xn);
      const startY = lerp(0.62, 0.38, ax);
      const a = dirOf(xn * 0.9, startY, Math.sqrt(Math.max(0.05, 1 - startY * startY - xn * xn * 0.8)));
      const m = dirOf(xn * 1.05, 0.85 - ax * 0.4, -0.45);
      const b = dirOf(xn * 0.8, -0.3, -0.9);
      const hang = (s.length ?? 0) * 2.4;
      const sub = scalpBraid(c, arc3(a, m, b, 18), r, hang * (0.85 + 0.3 * c.rand()), new THREE.Vector3(xn * 0.3, -1, -0.2));
      merge(g, sub);
    }
    addMesh(c, g.build(), vertexColorMat(c), 'hair-strands');
    return;
  }
  const count = s.count ?? (kind === 'locs' ? (s.tied === 'up' ? 34 : 22) : kind === 'twists' ? 40 : 32);
  const r = (kind === 'locs' ? (s.tied === 'up' ? 0.085 : 0.075) : kind === 'twists' ? 0.05 : 0.052) * thick;
  const hang = (s.length ?? 0.6) * 2.6;
  const tied = s.tied ?? 'none';
  const tieDir = tied === 'bun' ? TIE_DIRS.top : TIE_DIRS.high;
  const tiePt = onHead(P, tieDir, 0.06);
  // Roots spread evenly over the whole hair region (not just the crown), so braids and locs
  // cover the back and sides of the head too.
  const inHair = (d: THREE.Vector3) => d.y > hairline(d, c.shell) + 0.06;
  const share = fib(400, inHair).length / 400;
  const roots = fib(Math.max(count, Math.round(count / Math.max(0.05, share))), inHair);
  const flow = partFlow(0, -0.5);
  roots.forEach((root, k) => {
    const rr = r * (0.85 + 0.3 * c.rand());
    const pts: THREE.Vector3[] = [];
    const d = root.clone();
    const lift = 0.02 + rr;
    if (tied === 'up') {
      // Fountain: locs spring up from the crown and arc over.
      const start = onHead(P, d, lift * 0.5);
      // Mostly upwards (a high top of locs), tips flopping over a little.
      const out = d.clone().lerp(UP, 0.82).normalize();
      pts.push(...hangPath(P, start, out, 0.3 + hang * 0.25 + 0.08 * c.rand(), { margin: rr, stiff: 0.93, collider: c.collider }));
    } else if (tied === 'bun' || tied === 'ponytail') {
      // Along the scalp to the tie point.
      for (let i = 0; i < 30; i++) {
        pts.push(onHead(P, d, lift));
        tieFlow(tieDir)(d, T1);
        T1.addScaledVector(d, -T1.dot(d));
        if (T1.length() < 0.06) break;
        d.addScaledVector(T1.normalize(), 0.06).normalize();
      }
      if (tied === 'ponytail') {
        const out = tieDir.clone().add(T1.set((c.rand() - 0.5) * 0.4, 0.1, 0)).normalize();
        pts.push(...hangPath(P, tiePt, out, hang * (0.85 + 0.25 * c.rand()), { collider: c.collider, margin: rr, stiff: 0.55 }));
      }
    } else {
      for (let i = 0; i < 40; i++) {
        pts.push(onHead(P, d, lift));
        if (d.y < -0.05 || (d.z > 0.25 && d.y < 0.35)) break;
        flow(d, T1);
        T1.addScaledVector(d, -T1.dot(d));
        if (T1.lengthSq() < 1e-8) T1.set(0, -1, 0);
        d.addScaledVector(T1.normalize(), 0.06).normalize();
      }
      const last = pts[pts.length - 1]!;
      const out = T1.subVectors(last, pts[Math.max(0, pts.length - 2)]!).normalize().clone();
      const fall = hang * (0.85 + 0.3 * c.rand()) * (root.z > 0.3 ? 0.55 : 1);
      if (fall > 0.05) pts.push(...hangPath(P, last, out, fall, { collider: c.collider, margin: rr * 0.9, stiff: 0.45 }).slice(1));
    }
    if (pts.length < 3) return;
    const path = resample(pts, 0.025);
    let len = 0;
    for (let i = 1; i < path.length; i++) len += path[i]!.distanceTo(path[i - 1]!);
    if (kind === 'box-braids') g.tube(path, braidRadius(rr, rr * 0.75, len, 0.06 + rr * 0.6), 10, undefined, braidShade(len, 0.06 + rr * 0.6));
    else if (kind === 'twists') g.tube(path, twistRadius(rr, len), 10);
    else g.tube(path, locRadius(rr, len, k * 1.7), 10);
  });
  addMesh(c, g.build(), braided ? vertexColorMat(c) : c.mat, 'hair-strands');
  if (tied === 'bun') bun(c, tieDir, { size: 0.9, braided: kind === 'box-braids' });
  if (tied === 'ponytail') elastic(c, tiePt, tieDir, 0.16);
}

function merge(into: GeoBuilder, from: GeoBuilder) {
  const off = into.pos.length / 3;
  into.pos.push(...from.pos);
  into.uv.push(...from.uv);
  if (into.col && from.col) into.col.push(...from.col);
  for (const i of from.idx) into.idx.push(i + off);
}

/* -------------------------------- compiler -------------------------------- */

/** Applies a fade / undercut to the main shell; returns the stubble layer underneath. */
function applySides(s: ShellSpec, sides: HairSides | undefined, sweep: number): Plan['stubble'] {
  const stub = (side: number, back: number, gradient: boolean, skinMix: number) => ({
    spec: { ...s, side, back, sideburn: 0.14, base: 0.017, soft: 0, top: 0, frontBoost: 0, noiseAmp: 0, fringe: undefined, part: undefined, strip: undefined, shave: undefined, topCut: undefined, dome: undefined, backBoost: undefined, sideBoost: undefined, flat: undefined },
    gradient,
    skinMix,
  });
  switch (sides) {
    case 'taper':
      s.side = Math.max(s.side, 0.25);
      s.back = Math.max(s.back, -0.42);
      s.sideburn *= 0.5;
      return stub(0.12, -0.62, true, 0.3);
    case 'low-fade':
      s.side = Math.max(s.side, 0.31);
      s.back = Math.max(s.back, -0.26);
      s.sideburn = 0.06;
      return stub(0.1, -0.62, true, 0.6);
    case 'mid-fade':
      s.side = Math.max(s.side, 0.4);
      s.back = Math.max(s.back, -0.04);
      s.sideburn = 0;
      return stub(0.12, -0.62, true, 0.65);
    case 'high-fade':
      s.side = Math.max(s.side, 0.5);
      s.back = Math.max(s.back, 0.2);
      s.sideburn = 0;
      return stub(0.12, -0.62, true, 0.7);
    case 'skin-fade':
      s.side = Math.max(s.side, 0.47);
      s.back = Math.max(s.back, 0.16);
      s.sideburn = 0;
      return stub(0.3, -0.2, true, 0.9);
    case 'undercut':
      s.side = Math.max(s.side, 0.5);
      s.back = Math.max(s.back, 0.24);
      s.sideburn = 0;
      return stub(0.14, -0.62, false, 0.45);
    case 'side-shave':
      s.shave = sweep > 0 ? -1 : 1;
      return stub(0.14, -0.62, false, 0.45);
    default:
      return undefined;
  }
}

function fringeOf(bangs: HairLook['bangs'], cut: HairLook['cut']): Partial<ShellSpec> {
  switch (bangs) {
    case 'straight':
      return { fringe: cut === 'bob' ? 0.36 : 0.4, fringeWidth: 0.58, fringeJag: 0.5 };
    case 'curtain':
      return { fringe: 0.47, fringeWidth: 0.5, fringeJag: 0.6 };
    case 'side':
      return { fringe: 0.46, fringeWidth: 0.5 };
    case 'wispy':
      return { fringe: 0.4, fringeWidth: 0.5, fringeJag: 1.4 };
    case 'micro':
      return { fringe: 0.58, fringeWidth: 0.45, fringeJag: 0.4 };
    case 'long':
      return { fringe: 0.3, fringeWidth: 0.46 };
    case 'curly':
      return { fringe: 0.44, fringeWidth: 0.55, fringeJag: 1.2 };
    default:
      return {};
  }
}

export function compileHair(look: HairLook, P: HeadParams): Plan {
  const plan = compileLook(look, P);
  if (P.organic) {
    // The emoji head has a full, rounded back: the nape hairline sits lower, just above the neck.
    const lower = (sp: ShellSpec) => {
      if (sp.back <= -0.45) sp.back -= 0.14;
    };
    lower(plan.shell);
    if (plan.stubble) lower(plan.stubble.spec);
  }
  return plan;
}

function compileLook(look: HairLook, P: HeadParams): Plan {
  const len = look.length;
  const vol = look.volume ?? 0.5;
  const tex = look.texture ?? 'straight';
  const sweep = look.sweep ?? 1;
  const mess = look.messy ?? 0;
  const plan: Plan = { shell: shellSpec(SHORT, {}), clumps: [], curls: [], fills: [], extras: [], crown: 0.1 };
  let s = plan.shell;
  const above = (m: number) => (d: THREE.Vector3) => d.y > hairline(d, s) + m;
  const floor = (d: THREE.Vector3) => (d.z > 0.2 ? hairline(d, s) - 0.015 : -2);
  const partX = look.part === 'middle' ? 0 : look.part === 'side' || look.part === 'hard' ? -0.3 * sweep : undefined;
  const shortClump = (o: Partial<ClumpSpec>): ClumpSpec => ({ count: 340, region: above(0.03), flow: crownFlow, length: (_d, r) => 0.22 + r * 0.1, lift: (d) => 0.02 + 0.035 * top(d), base: 0.013, width: [0.05, 0.08], thickness: 0.022, tip: 0.25, floor, edge: edgeFade(s), ...o });
  const curlTop = (lenK: number, coily: boolean, region?: (d: THREE.Vector3) => boolean) => {
    plan.curls.push({
      keep: region ?? ((d) => d.y > Math.max(hairline(d, s), 0.4) + 0.02),
      vol: (d) => 0.04 + (0.1 + 0.26 * lenK) * smoothstep(0.35, 1, d.y),
      count: coily ? 3000 : 2400,
      size: coily ? 0.062 : 0.08,
      layers: 2,
    });
  };
  const sidesLong = () => {
    if (look.sides === 'side-shave') plan.stubble = applySides(s, 'side-shave', sweep);
  };

  switch (look.cut) {
    case 'bald':
      plan.shell = s = shellSpec(SHORT, { base: -1 });
      plan.crown = 0;
      return plan;
    case 'shaved':
      plan.shell = s = shellSpec(SHORT, { base: -1 });
      plan.stubble = { spec: shellSpec(SHORT, { base: 0.017, top: 0, noiseAmp: 0, recede: look.recede, soft: 0 }), gradient: false, skinMix: 0.5 };
      plan.crown = 0.01;
      return plan;
    case 'horseshoe':
      plan.shell = s = shellSpec(SHORT, { side: -0.02, back: -0.56, sideburn: 0.1, base: P.organic ? 0.018 : 0.026, top: 0, noiseAmp: 0.006, noiseFreq: 14, topCut: P.organic ? 0.3 : 0.42 });
      // Thinning hair above the band fades into the bald crown.
      if (P.organic) plan.stubble = { spec: shellSpec(SHORT, { side: -0.02, back: -0.56, sideburn: 0.1, base: 0.017, top: 0, noiseAmp: 0, topCut: 0.62 }), gradient: false, skinMix: 0.15 };
      plan.crown = 0;
      return plan;
    case 'buzz': {
      const l = len ?? 0.35;
      plan.shell = s = shellSpec(SHORT, { base: 0.007 + 0.016 * l, top: 0.004 + 0.012 * l, noiseAmp: 0.002 + 0.003 * l, noiseFreq: 30, recede: look.recede });
      plan.stubble = applySides(s, look.sides, sweep);
      plan.crown = 0.02;
      return plan;
    }
    case 'crew': {
      const l = len ?? 0.5;
      const flat = look.shape === 'blunt';
      plan.shell = s = shellSpec(SHORT, { base: 0.03, top: flat ? 0.34 : 0.05 + 0.05 * l, noiseAmp: 0.012, noiseFreq: 14, frontBoost: 0.03, recede: look.recede, flat: flat ? 1.12 : undefined, part: partX, partDepth: 0.4 });
      // A flat top is always cut short on the sides.
      plan.stubble = applySides(s, look.sides ?? (flat ? 'mid-fade' : undefined), sweep);
      if (!flat) plan.clumps.push(shortClump({ flow: messy(partX !== undefined ? partFlow(partX, 0.55) : crownFlow, mess), length: (_d, r) => 0.17 + 0.1 * l + r * 0.1 }));
      plan.crown = flat ? 0.28 : 0.08;
      return plan;
    }
    case 'crop':
    case 'caesar': {
      const l = len ?? 0.5;
      const caesar = look.cut === 'caesar';
      plan.shell = s = shellSpec(SHORT, { base: 0.03, top: 0.07, noiseAmp: 0.012, noiseFreq: 12, recede: look.recede, ...fringeOf(look.bangs ?? 'micro', look.cut) });
      if (caesar) s.fringeJag = 0.15;
      plan.stubble = applySides(s, look.sides, sweep);
      plan.clumps.push(shortClump({ count: 380, flow: messy((_d, o) => o.set(0, -0.35, 1), mess), length: (_d, r) => 0.22 + 0.22 * l + r * 0.08, lift: (d) => 0.025 + 0.03 * top(d), tip: caesar ? 0.45 : 0.25, floor: undefined, region: above(0.02) }));
      plan.crown = 0.08;
      return plan;
    }
    case 'side-part':
    case 'comb-over': {
      const l = len ?? 0.5;
      const over = look.cut === 'comb-over';
      const part = (over ? -0.46 : -0.32) * sweep;
      plan.shell = s = shellSpec(SHORT, { side: 0.18, base: 0.04, top: 0.06 + 0.08 * vol, frontBoost: 0.02 + 0.06 * vol, noiseAmp: 0.012, noiseFreq: 6, part, partDepth: look.part === 'hard' ? 0.95 : 0.55, partWidth: look.part === 'hard' ? 0.018 : 0.03, sweep, recede: look.recede });
      plan.stubble = applySides(s, look.sides, sweep);
      plan.clumps.push(shortClump({ count: 440, flow: over ? (d, o) => o.set(Math.sign(d.x - part || 1) * (Math.sign(d.x - part) === sweep ? 1 : 0.6), -0.2, 0.25) : partFlow(part, 0.55), length: (_d, r) => 0.3 + 0.2 * l + r * 0.16, lift: (d) => 0.02 + (0.03 + 0.05 * vol) * top(d), base: 0.014, width: [0.06, 0.085], thickness: 0.024, tip: 0.3 }));
      plan.crown = 0.1;
      return plan;
    }
    case 'quiff':
    case 'pompadour': {
      const pomp = look.cut === 'pompadour';
      const big = (pomp ? 1.4 : 1) * lerp(0.55, 1.35, vol);
      plan.shell = s = shellSpec(SHORT, { base: 0.03, top: 0.1 + 0.02 * (len ?? 0.5), frontBoost: (pomp ? 0.36 : 0.26) * lerp(0.6, 1.3, vol), noiseAmp: 0.012 + 0.02 * mess, noiseFreq: pomp ? 5 : 7, sweep, soft: 0.35 });
      plan.stubble = applySides(s, look.sides, sweep);
      plan.clumps.push(
        shortClump({ count: 300, region: (d) => above(0.03)(d) && frontK(d) < 0.3, length: (_d, r) => 0.3 + r * 0.12, lift: (d) => 0.02 + 0.05 * top(d), base: 0.014, width: [0.06, 0.085], thickness: 0.024, tip: 0.3, flow: messy(crownFlow, mess * 0.5) }),
        {
          count: 220,
          region: (d) => above(0.02)(d) && frontK(d) >= 0.3,
          flow: messy((_d, o) => o.set(0.25 * sweep, 1, pomp ? -0.8 : -0.35), mess * 0.6),
          length: (_d, r) => (0.42 + r * 0.16) * big,
          lift: (d, u) => 0.04 + 0.26 * big * frontK(d) * Math.sin(Math.PI * Math.min(1, u * 0.85)),
          base: 0.016,
          width: [0.07, 0.1],
          thickness: 0.032,
          tip: 0.25,
          floor,
          edge: edgeFade(s),
        },
      );
      plan.crown = 0.12 + 0.1 * big;
      plan.gloss = 0.35;
      return plan;
    }
    case 'slick-back': {
      const l = len ?? 0.5;
      plan.shell = s = shellSpec(SHORT, { front: 0.55, base: 0.035, top: 0.04 + 0.06 * vol, frontBoost: 0.03 + 0.12 * vol, noiseAmp: 0.006, noiseFreq: 6 });
      plan.gloss = 0.75 - 0.4 * vol;
      plan.stubble = applySides(s, look.sides, sweep);
      plan.clumps.push({
        count: 420,
        region: above(0.02),
        flow: backFlow(0.2 + 0.4 * vol),
        length: (_d, r) => 0.45 + 0.4 * l + r * 0.12,
        lift: (d, u) => 0.02 + (0.03 + 0.08 * vol) * frontK(d) * Math.sin(Math.PI * Math.min(1, u)) + 0.015,
        base: 0.012,
        width: [0.07, 0.1],
        thickness: 0.018,
        tip: 0.4,
        fall: l > 0.7 ? (_d, r) => 0.25 + r * 0.1 : undefined,
        fallFrom: -0.1,
        edge: edgeFade(s),
      });
      plan.crown = 0.1;
      return plan;
    }
    case 'spiky': {
      const l = len ?? 0.5;
      const anime = vol > 0.85;
      plan.shell = s = shellSpec(SHORT, { base: 0.03, top: 0.05, noiseAmp: 0.01, noiseFreq: 10 });
      plan.stubble = applySides(s, look.sides, sweep);
      plan.clumps.push({
        count: anime ? 70 : 150,
        spikes: true,
        region: above(0.04),
        flow: messy((d, o) => crownFlow(d, o).multiplyScalar(-1).add(T2.set(0, 0.2, -0.3)), mess * 0.4),
        length: (_d, r) => (anime ? 0.22 : 0.14) + r * 0.06,
        lift: (d, u) => 0.04 + (0.1 + 0.3 * l) * u * (0.5 + 0.5 * top(d)) * (anime ? 1.4 : 1),
        base: 0.02,
        width: anime ? [0.13, 0.18] : [0.06, 0.09],
        thickness: anime ? 0.06 : 0.035,
        tip: 0.04,
        segments: 8,
      });
      plan.crown = 0.2 + 0.3 * l;
      return plan;
    }
    case 'textured': {
      const l = len ?? 0.5;
      plan.shell = s = shellSpec(SHORT, { base: 0.035, top: 0.1 + 0.06 * l, frontBoost: 0.05, noiseAmp: 0.045, noiseFreq: 9, ...fringeOf(look.bangs, 'textured'), sweep, part: partX });
      plan.stubble = applySides(s, look.sides, sweep);
      const fringeBangs = look.bangs === 'side' || look.bangs === 'long';
      plan.clumps.push({
        count: 400,
        region: (d) => above(0.03)(d) && (!fringeBangs || frontK(d) < 0.25),
        flow: messy(partX !== undefined ? partFlow(partX, 0.6) : (d, o) => crownFlow(d, o).add(T2.set(Math.sin(d.x * 23) * 0.5, Math.cos(d.z * 19) * 0.3, Math.sin(d.y * 17) * 0.4)), 0.3 + mess * 0.7),
        length: (_d, r) => 0.22 + 0.22 * l + r * 0.14,
        lift: (d, u) => 0.03 + (0.06 + 0.06 * vol) * top(d) * Math.sin(Math.PI * Math.min(1, u * 1.3)),
        base: 0.015,
        width: [0.06, 0.09],
        thickness: 0.03,
        tip: 0.12,
        floor: fringeBangs ? undefined : floor,
        edge: edgeFade(s),
        wave: tex === 'wavy' ? { amp: 0.03, freq: 5 } : undefined,
      });
      if (fringeBangs) {
        const long = look.bangs === 'long';
        plan.clumps.push({ count: long ? 140 : 160, region: (d) => above(-0.02)(d) && frontK(d) >= 0.25, fringe: true, flow: fringeFlow(sweep), length: (_d, r) => (long ? 0.5 : 0.36) + r * 0.1, lift: () => 0.04, base: 0.02, width: [0.06, 0.09], thickness: 0.026, tip: 0.2, fall: long ? (_d, r) => 0.2 + r * 0.15 : undefined, fallFrom: 0.25 });
      }
      plan.crown = 0.14 + 0.06 * l;
      return plan;
    }
    case 'faux-hawk':
    case 'mohawk': {
      const hawk = look.cut === 'mohawk';
      if (hawk) {
        plan.shell = s = shellSpec(SHORT, { front: 0.45, side: 0.2, back: -0.5, sideburn: 0.15, base: 0.006, top: 0, noiseAmp: 0.03, noiseFreq: 12, strip: 0.3 });
        plan.stubble = applySides(s, look.sides ?? 'undercut', sweep);
        if (tex === 'coily') {
          plan.curls.push({ keep: (d) => Math.abs(d.x) < 0.2 && d.y > -0.25 && above(0.02)(d), vol: (d) => 0.06 + 0.3 * vol * smoothstep(-0.2, 0.9, d.y), count: 2200, size: 0.075, layers: 3 });
        } else {
          plan.clumps.push({ count: 170, spikes: true, region: (d) => Math.abs(d.x) < 0.16 && above(0.02)(d) && d.y > -0.25, flow: (_d, o) => o.set(0, 0.3, -1), length: () => 0.2, lift: (_d, u) => 0.08 + (0.12 + 0.36 * vol) * u, base: 0.02, width: [0.05, 0.07], thickness: 0.035, tip: 0.05 });
        }
        plan.crown = 0.25 + 0.3 * vol;
      } else {
        plan.shell = s = shellSpec(SHORT, { base: 0.03, top: 0.06, noiseAmp: 0.015, noiseFreq: 9 });
        plan.stubble = applySides(s, look.sides ?? 'taper', sweep);
        plan.clumps.push(
          shortClump({ count: 260, region: (d) => above(0.03)(d) && Math.abs(d.x) > 0.3, flow: centreFlow(0.3), length: (_d, r) => 0.2 + r * 0.08 }),
          { count: 180, spikes: true, region: (d) => above(0.02)(d) && Math.abs(d.x) <= 0.34, flow: (d, o) => o.set(-d.x * 2, 0.5, -0.2), length: (_d, r) => 0.18 + r * 0.08, lift: (d, u) => 0.04 + (0.1 + 0.18 * vol) * u * gauss(d.x * d.x, 0.18), base: 0.018, width: [0.06, 0.08], thickness: 0.03, tip: 0.08 },
        );
        plan.crown = 0.2 + 0.15 * vol;
      }
      return plan;
    }
    case 'bowl': {
      const l = len ?? 0.5;
      const lowDown = l > 0.85;
      plan.shell = s = shellSpec(SHORT, { front: 0.36, side: lowDown ? -0.12 : 0.06, back: lowDown ? -0.6 : -0.3, sideburn: 0, base: 0.05 + 0.05 * vol, top: 0.07, noiseAmp: 0.012, noiseFreq: 7, fringe: look.bangs === 'long' ? 0.3 : 0.36, fringeWidth: 0.7, fringeJag: look.bangs === 'wispy' ? 1.2 : 0.2 });
      plan.stubble = applySides(s, look.sides, sweep);
      plan.clumps.push({ count: 520, region: above(0.02), flow: (d, o) => crownFlow(d, o).add(T2.set(0, 0, 0.25)), length: (_d, r) => 0.5 + 0.25 * l + r * 0.15, lift: (d) => 0.03 + (0.03 + 0.05 * vol) * top(d), base: 0.02, width: [0.07, 0.1], thickness: 0.025, tip: 0.6, floor: (d) => hairline(d, s) - 0.02, fall: lowDown ? (_d, r) => 0.12 + r * 0.06 : undefined, fallFrom: 0.05 });
      plan.crown = 0.14;
      return plan;
    }
    case 'curtains': {
      const l = len ?? 0.5;
      plan.shell = s = shellSpec(SHORT, { front: 0.46, side: -0.02, back: -0.62, sideburn: 0.05, base: 0.045, top: 0.07, noiseAmp: 0.012, noiseFreq: 6, part: 0, partDepth: 0.6, fringe: 0.5, fringeWidth: 0.42, fringeJag: 0.3 });
      plan.stubble = applySides(s, look.sides, sweep);
      plan.clumps.push(
        { count: 460, region: (d) => above(0.02)(d) && frontK(d) < 0.25, flow: partFlow(0, -0.2), length: (_d, r) => 0.45 + 0.25 * l + r * 0.15, lift: (d) => 0.03 + 0.04 * top(d), base: 0.018, width: [0.07, 0.11], thickness: 0.024, tip: 0.5, fall: (_d, r) => 0.1 + 0.4 * l * (0.8 + r * 0.4), fallFrom: 0.2, splay: 0.04 },
        { count: 180, region: (d) => above(-0.02)(d) && frontK(d) >= 0.25, fringe: true, flow: (d, o) => o.set(Math.sign(d.x || 1) * 1.6, -0.45, 0.2), length: (_d, r) => 0.5 + 0.15 * l + r * 0.08, lift: (d) => 0.045 + 0.03 * frontK(d), base: 0.02, width: [0.06, 0.09], thickness: 0.026, tip: 0.5, fall: (_d, r) => 0.08 + 0.25 * l * r, fallFrom: 0.1 },
      );
      plan.crown = 0.12;
      return plan;
    }
    case 'curly-top': {
      const l = len ?? 0.4;
      plan.shell = s = shellSpec(SHORT, { front: 0.52, side: 0.3, back: -0.5, sideburn: 0.15, base: 0.01, top: 0.03, noiseAmp: 0.004, noiseFreq: 20, ...(look.bangs === 'curly' ? { fringe: 0.42, fringeWidth: 0.5, fringeJag: 1 } : {}) });
      plan.stubble = applySides(s, look.sides ?? (l > 0.6 ? undefined : 'taper'), sweep);
      curlTop(l, tex === 'coily', look.bangs === 'curly' ? (d) => d.y > Math.max(hairline(d, s), 0.3) + 0.02 : undefined);
      plan.crown = 0.12 + 0.26 * l;
      return plan;
    }
    case 'afro':
    case 'high-top': {
      const l = len ?? 0.6;
      const high = look.cut === 'high-top';
      plan.shell = s = shellSpec(SHORT, { front: 0.48, side: 0.12, back: -0.58, sideburn: 0.15, base: 0.05 + 0.04 * l, top: 0.06 + 0.06 * l, noiseAmp: 0.01, noiseFreq: 8, part: look.part === 'hard' ? -0.3 * sweep : undefined, partDepth: 0.9, partWidth: 0.02 });
      plan.stubble = applySides(s, look.sides ?? (high ? 'high-fade' : undefined), sweep);
      if (high) {
        const W = P.width;
        const yTop = 1.38 * P.height;
        plan.fills.push({
          test: (p) => {
            const rr = Math.hypot(p.x / (1.04 * W), (p.z + 0.06) / 1.02);
            return rr < 1 && p.y < yTop && p.y > 0.32 + 0.12 * smoothstep(0.3, 0.9, p.z) && p.length() > headR(P, p) + 0.02;
          },
          box: [new THREE.Vector3(-1.05 * W, 0.3, -1.1), new THREE.Vector3(1.05 * W, yTop, 1)],
          count: 4200,
          size: 0.085,
        });
        plan.crown = yTop - P.height;
      } else {
        const curly = tex === 'curly';
        plan.curls.push({
          keep: (d) => d.y > hairline(d, s) + 0.02 && (look.part !== 'hard' || Math.abs(d.x + 0.3 * sweep) > 0.04 || d.y < 0.45),
          vol: (d) => (0.06 + 0.42 * l) * smoothstep(-0.3, 0.9, d.y) * (look.sides === 'taper' ? smoothstep(0.1, 0.5, d.y) : 1) + 0.04,
          count: Math.round(2400 + 2200 * l),
          size: curly ? 0.105 : 0.095,
          layers: l > 0.5 ? 3 : 2,
        });
        plan.crown = 0.1 + 0.42 * l;
      }
      return plan;
    }
    case 'pixie': {
      const l = len ?? 0.5;
      plan.shell = s = shellSpec(SHORT, { front: 0.4, side: 0.15, back: -0.58, sideburn: 0.12, base: 0.04, top: 0.08 + 0.04 * vol, frontBoost: 0.05, noiseAmp: 0.025, noiseFreq: 9, fringe: 0.34, fringeWidth: 0.42, sweep, ...fringeOf(look.bangs, 'pixie') });
      plan.stubble = applySides(s, look.sides, sweep);
      const straightBangs = look.bangs === 'straight';
      plan.clumps.push(
        { count: 260, region: (d) => above(0.03)(d) && frontK(d) < 0.25, flow: messy(crownFlow, mess), length: (_d, r) => 0.24 + 0.12 * l + r * 0.1, lift: (d) => 0.03 + (0.03 + 0.04 * vol) * top(d), base: 0.015, width: [0.06, 0.08], thickness: 0.024, tip: 0.25, floor, wave: tex === 'wavy' ? { amp: 0.03, freq: 6 } : undefined },
        { count: 160, region: (d) => above(0.0)(d) && frontK(d) >= 0.25, fringe: true, flow: straightBangs ? (_d, o) => o.set(0, -0.6, 1) : fringeFlow(sweep), length: (_d, r) => 0.3 + 0.16 * l + r * 0.1, lift: () => 0.04, base: 0.02, width: [0.06, 0.09], thickness: 0.026, tip: straightBangs ? 0.6 : 0.2 },
      );
      if (tex === 'curly' || tex === 'coily') curlTop(0.25, tex === 'coily');
      plan.crown = 0.12;
      return plan;
    }
    case 'bob':
    case 'medium':
    case 'long':
    case 'shag':
    case 'mullet':
      return compileLong(look, P, plan);
    case 'tied':
      return compileTied(look, P, plan);
    case 'braided':
    case 'locs': {
      plan.shell = s = shellSpec(TIED, { base: look.cut === 'locs' ? 0.03 : 0.012, top: 0.02, noiseAmp: 0.01, noiseFreq: 14, part: look.strands?.kind === 'cornrows' ? undefined : 0, partDepth: 0.3 });
      plan.stubble = applySides(s, look.sides, sweep);
      plan.extras.push((c) => strands(c, look));
      plan.crown = look.strands?.tied === 'bun' ? 0.5 : look.strands?.tied === 'up' ? 0.4 : 0.1;
      return plan;
    }
  }
  return plan;
}

function compileLong(look: HairLook, P: HeadParams, plan: Plan): Plan {
  void P;
  const cut = look.cut;
  const tex = look.texture ?? 'straight';
  const vol = look.volume ?? 0.5;
  const sweep = look.sweep ?? 1;
  const mess = look.messy ?? 0;
  const shape = look.shape;
  const l = look.length ?? (cut === 'bob' ? 0.45 : cut === 'medium' ? 0.5 : cut === 'shag' ? 0.5 : cut === 'mullet' ? 0.5 : 0.6);
  const fall = cut === 'bob' ? 0.55 + 0.6 * l : cut === 'medium' ? 0.9 + 0.6 * l : cut === 'shag' ? 0.55 + 1.0 * l : cut === 'mullet' ? 0.55 + 0.7 * l : 1.3 + 1.1 * l;
  const partX = look.part === 'middle' ? 0 : look.part === 'side' || look.part === 'hard' ? -0.18 * sweep : cut === 'long' && !look.bangs ? 0.02 : undefined;
  const bangs = look.bangs ?? (cut === 'bob' && !look.part ? 'straight' : 'none');
  const wave = tex === 'wavy' ? { amp: 0.045, freq: 1.4 } : tex === 'curly' ? { amp: 0.085, freq: 2.4 } : tex === 'coily' ? { amp: 0.07, freq: 3.6 } : undefined;
  const kinky = tex === 'curly' || tex === 'coily';
  let s: ShellSpec;
  if (cut === 'mullet') {
    s = plan.shell = shellSpec(SHORT, { side: 0.2, back: -0.85, base: 0.05, top: 0.09, frontBoost: 0.04, noiseAmp: 0.025, noiseFreq: 7, ...fringeOf(bangs, cut), sweep });
    plan.stubble = applySides(s, look.sides, sweep);
  } else {
    s = plan.shell = shellSpec(LONG, {
      side: cut === 'bob' ? 0.02 : 0.06,
      back: cut === 'bob' ? -0.65 : cut === 'long' ? -0.8 : -0.7,
      base: cut === 'bob' ? 0.06 + 0.04 * vol : 0.05 + 0.03 * vol,
      top: 0.05 + 0.04 * vol,
      frontBoost: 0.01 + 0.03 * vol,
      noiseAmp: tex === 'straight' ? 0.01 : 0.03,
      noiseFreq: 6,
      ...fringeOf(bangs, cut),
      part: partX,
      sweep,
      backBoost: shape === 'inverted' ? 0.06 + 0.06 * vol : shape === 'flip' && vol > 0.7 ? 0.08 : undefined,
      sideBoost: shape === 'flip' ? 0.04 + 0.06 * vol : undefined,
    });
    if (cut === 'medium' && vol > 0.9) s.top += 0.1;
    plan.stubble = applySides(s, look.sides === 'side-shave' ? 'side-shave' : undefined, sweep);
  }
  const above = (m: number) => (d: THREE.Vector3) => d.y > hairline(d, s) + m;
  const floor = (d: THREE.Vector3) => (d.z > 0.2 ? hairline(d, s) - 0.015 : -2);
  const hasFringe = s.fringe !== undefined;
  const lenAt = (d: THREE.Vector3, r: number) => {
    let k = 0.88 + r * 0.24;
    if (shape === 'blunt' || shape === 'flip') k = 0.97 + r * 0.06;
    if (shape === 'a-line') k *= 0.75 + 0.55 * smoothstep(-0.6, 0.6, d.z);
    if (shape === 'inverted') k *= 0.5 + 0.7 * smoothstep(-0.8, 0.5, d.z);
    if (shape === 'asymmetric') k *= 1 + 0.55 * clamp(-sweep * d.x * 1.5, -0.6, 1);
    if (shape === 'shaggy') k *= 0.55 + 0.75 * r;
    if (shape === 'hime' && d.z > 0.1 && Math.abs(d.x) > 0.3) k = (cut === 'bob' ? 0.6 : 0.35) * (0.97 + r * 0.06);
    return fall * k;
  };
  const tip = shape === 'blunt' || shape === 'hime' ? 0.95 : shape === 'shaggy' ? 0.3 : cut === 'bob' ? 0.85 : 0.55;

  if (cut === 'mullet') {
    plan.clumps.push(
      { count: 300, region: (d) => above(0.03)(d) && d.z > -0.3, flow: messy(crownFlow, mess), length: (_d, r) => 0.25 + r * 0.1, lift: (d) => 0.03 + 0.05 * top(d), base: 0.015, width: [0.06, 0.085], thickness: 0.026, tip: 0.25, floor },
      { count: 300, region: (d) => above(0.0)(d) && d.z <= -0.3, flow: (_d, o) => o.set(0, -1, -0.2), length: () => 0.3, lift: () => 0.04, base: 0.02, width: [0.07, 0.1], thickness: 0.03, tip: shape === 'shaggy' ? 0.3 : 0.35, fall: (d, r) => fall * (shape === 'shaggy' ? 0.6 + 0.6 * r : 0.88 + 0.24 * r), fallFrom: 0.3, splay: 0.05, wave },
    );
    if (hasFringe) plan.clumps.push({ count: 140, region: (d) => above(-0.02)(d) && frontK(d) >= 0.25, fringe: true, flow: fringeFlow(0), length: (_d, r) => 0.32 + r * 0.08, lift: () => 0.045, base: 0.02, width: [0.05, 0.08], thickness: 0.022, tip: 0.3 });
    if (tex === 'curly' || tex === 'coily') plan.curls.push({ keep: (d) => d.y > Math.max(hairline(d, s), 0.35) + 0.02 && d.z > -0.4, vol: (d) => 0.06 + 0.14 * smoothstep(0.35, 1, d.y), count: 1800, size: 0.08, layers: 2 });
    plan.curtain = { length: Math.max(0.2, (fall - 0.42) / 1.05), phiStart: 0.72 * Math.PI, flare: 0.12 };
    plan.drapes = [
      {
        bottom: (phi) => 0.2 - fall * (shape === 'shaggy' ? 0.85 : 1) * (0.75 + 0.25 * smoothstep(0.62 * Math.PI, Math.PI, Math.abs(phi > Math.PI ? phi - 2 * Math.PI : phi))),
        top: 0.05,
        phi0: 0.62 * Math.PI,
        locks: 22,
        flare: 0.1,
        groove: 0.055,
        thick: 0.09,
        wave: wave ? { amp: wave.amp, freq: 1.1 } : undefined,
        curls: kinky ? 1 : 0,
        volume: 0.3,
      },
    ];
    plan.crown = 0.12;
    return plan;
  }

  const layered = shape === 'layered' || cut === 'shag';
  plan.clumps.push({
    count: kinky ? 820 : 680,
    region: (d) => above(0.02)(d) && (!hasFringe || frontK(d) < 0.25),
    flow: messy(partFlow(partX ?? 0, -0.45), mess * 0.5 + (cut === 'shag' ? 0.3 : 0) + (kinky ? 0.35 : 0)),
    length: (_d, r) => 0.6 + r * 0.25,
    lift: (d) => 0.03 + (0.02 + 0.04 * vol) * top(d) + (kinky ? 0.04 + 0.05 * vol : 0),
    base: 0.02,
    width: tex === 'straight' ? [0.1, 0.15] : tex === 'wavy' ? [0.09, 0.13] : [0.065, 0.095],
    thickness: tex === 'straight' ? 0.022 : tex === 'wavy' ? 0.03 : 0.045,
    tip,
    fall: lenAt,
    fallFrom: 0.3,
    splay: 0.05 + 0.04 * vol + (shape === 'flip' ? 0.04 : 0),
    wave,
    flip: shape === 'flip' ? 0.6 : undefined,
  });
  if (layered) {
    // Shorter face-framing / crown layer over the long one.
    plan.clumps.push({
      count: cut === 'shag' ? 380 : 260,
      region: (d) => above(0.03)(d) && d.y > 0.25 && (!hasFringe || frontK(d) < 0.25),
      flow: messy(partFlow(partX ?? 0, -0.3), 0.3 + mess * 0.6),
      length: (_d, r) => 0.5 + r * 0.2,
      lift: (d) => 0.05 + (0.04 + 0.05 * vol) * top(d),
      base: 0.03,
      width: [0.08, 0.12],
      thickness: 0.026,
      tip: 0.3,
      fall: (_d, r) => fall * (0.3 + 0.25 * r),
      fallFrom: 0.3,
      splay: 0.09,
      wave,
      flip: look.texture === 'wavy' && vol > 0.8 ? 0.5 : undefined,
    });
  }
  if (hasFringe) {
    const b = bangs;
    const flow = b === 'curtain' ? curtainFlow : b === 'side' || b === 'long' ? fringeFlow(sweep) : (_d: THREE.Vector3, o: THREE.Vector3) => o.set(0, -0.6, 1);
    plan.clumps.push({
      count: b === 'wispy' ? 240 : 200,
      region: (d) => above(-0.02)(d) && frontK(d) >= 0.25,
      fringe: true,
      flow,
      length: (_d, r) => (b === 'micro' ? 0.22 : 0.36) + r * 0.08,
      lift: () => 0.045,
      base: 0.02,
      width: b === 'wispy' ? [0.04, 0.06] : [0.06, 0.09],
      thickness: 0.024,
      tip: b === 'straight' ? 0.75 : b === 'wispy' ? 0.2 : 0.55,
      fall: b === 'long' ? (_d, r) => 0.25 + 0.15 * r : undefined,
      fallFrom: 0.3,
    });
  }
  if (tex === 'curly' || tex === 'coily') {
    plan.curls.push({ keep: (d) => d.y > hairline(d, s) + 0.04 && d.y > 0.2, vol: (d) => 0.03 + (0.04 + 0.08 * vol) * smoothstep(0.2, 1, d.y), count: tex === 'coily' ? 2400 : 1800, size: tex === 'coily' ? 0.06 : 0.075, layers: 2 });
  }
  const phiStart = 0.58 * Math.PI;
  // The backing curtain stops a little above the clump ends so it never shows as a slab.
  plan.curtain = { length: Math.max(0.2, (fall * (shape === 'inverted' ? 0.6 : shape === 'a-line' ? 0.8 : 1) - 0.42) / 1.05), phiStart, flare: cut === 'bob' ? 0.08 : 0.12 + (tex === 'curly' ? 0.1 : 0) + (vol > 0.8 ? 0.06 : 0) };
  {
    // Emoji drapes: bottom edge from the same length rules as the falling clumps.
    const bottomAt = (phi: number) => {
      const d = new THREE.Vector3(Math.sin(phi), 0.2, Math.cos(phi)).normalize();
      return 0.24 - lenAt(d, 0.5) * (cut === 'bob' ? 1.12 : 1);
    };
    const phi0 = cut === 'bob' || hasFringe ? 0.3 * Math.PI : 0.27 * Math.PI;
    const base: Omit<DrapeSpec, 'seed'> = {
      bottom: bottomAt,
      top: 0.32,
      phi0,
      locks: cut === 'bob' ? 20 : tex === 'straight' ? 22 : 18,
      flare: plan.curtain.flare,
      groove: tex === 'straight' ? 0.038 : 0.055,
      thick: cut === 'bob' ? 0.12 : 0.09,
      wave: tex === 'wavy' ? { amp: 0.07, freq: 0.9 } : kinky ? { amp: 0.09, freq: 1.7 } : undefined,
      curls: kinky ? 1 : 0,
      flip: shape === 'flip' ? 0.8 : 0,
      under: shape === 'blunt' || (cut === 'bob' && !shape) ? 0.5 : shape === 'flip' ? 0 : 0.2,
      volume: vol,
      shave: s.shave,
    };
    plan.drapes = [base];
    if (layered) {
      // Shorter outer layer (shag, butterfly, layered cuts).
      plan.drapes.push({ ...base, bottom: (phi) => 0.32 + (bottomAt(phi) - 0.32) * (cut === 'shag' ? 0.45 : 0.55), thick: 0.07, locks: base.locks - 6, volume: vol + 0.6, under: 0.35 });
    }
  }
  if (look.tie?.kind === 'half-up') halfUp(look, plan, s);
  if (look.tie?.kind === 'space-buns') {
    const t = look.tie;
    plan.extras.push((c) => {
      for (const sx of [-1, 1]) bun(c, dirOf(0.55 * sx, 0.82, -0.18), { size: t.size ?? 0.4 });
    });
    plan.crown = 0.4;
  }
  if (look.tie?.kind === 'victory-rolls') {
    plan.extras.push((c) => {
      for (const sx of [-1, 1]) {
        const at = onHead(c.P, dirOf(0.42 * sx, 0.85, 0.32), 0.1);
        if (c.sdf) {
          const ax = new THREE.Vector3(0, 0, 1).applyEuler(new THREE.Euler(Math.PI / 2 - 0.5, 0, sx * 0.5)).normalize();
          const a = at.clone().addScaledVector(ax, 0.16);
          const b = at.clone().addScaledVector(ax, -0.16);
          c.sdf.locks.push({ pts: [a, b], r0: 1, tip: 1, shade: 1, radius: () => 0.15 });
          continue;
        }
        const roll = addMesh(c, new THREE.CapsuleGeometry(0.15, 0.32, 8, 20), c.mat, 'hair-roll');
        roll.position.copy(at);
        roll.rotation.set(Math.PI / 2 - 0.5, 0, sx * 0.5);
      }
    });
    plan.crown = 0.3;
  }
  plan.crown = Math.max(plan.crown, 0.12);
  return plan;
}

function halfUp(look: HairLook, plan: Plan, s: ShellSpec) {
  const tie = look.tie!;
  const dir = dirOf(0, 0.55, -0.83);
  // The crown section flows to the tie; the long layer underneath keeps falling.
  const main = plan.clumps[0]!;
  const prev = main.region;
  main.region = (d) => prev(d) && d.y < 0.42;
  plan.clumps.push({ count: 320, region: (d) => d.y >= 0.4 && d.y > hairline(d, s) + 0.02, flow: tieFlow(dir), length: (d) => Math.min(1.2, d.distanceTo(dir)), lift: () => 0.03, base: 0.014, width: [0.06, 0.09], thickness: 0.022, tip: 0.6 });
  plan.extras.push((c) => {
    if (tie.bun) bun(c, dir, { size: 0.25 });
    else tail(c, dir, { length: 0.7 + 0.9 * (tie.length ?? 0.5), r0: 0.1, r1: 0.04, braided: tie.braided, texture: look.texture, stiff: 0.5 });
  });
}

function compileTied(look: HairLook, P: HeadParams, plan: Plan): Plan {
  void P;
  const tie = look.tie ?? { kind: 'ponytail' };
  const tex = look.texture ?? 'straight';
  const vol = look.volume ?? 0.4;
  const sweep = look.sweep ?? 1;
  const s = (plan.shell = shellSpec(TIED, { base: 0.022 + 0.02 * vol, top: 0.03 + 0.03 * vol, frontBoost: 0.01, noiseAmp: tex === 'straight' ? 0.008 : 0.02, noiseFreq: 6, ...fringeOf(look.bangs, 'tied'), part: look.part === 'middle' ? 0 : look.part === 'side' ? -0.25 * sweep : undefined, partDepth: 0.45, sweep }));
  plan.stubble = applySides(s, look.sides, sweep);
  const above = (m: number) => (d: THREE.Vector3) => d.y > hairline(d, s) + m;
  const hasFringe = s.fringe !== undefined;
  const region = (d: THREE.Vector3) => above(0.02)(d) && (!hasFringe || frontK(d) < 0.25);
  const toward = (dir: THREE.Vector3): Partial<ClumpSpec> => ({ flow: tieFlow(dir), length: (d) => Math.min(1.25, d.distanceTo(dir)) });
  const rootClumps = (o: Partial<ClumpSpec>): ClumpSpec => ({ count: 440, region, flow: crownFlow, length: () => 0.6, lift: () => 0.022, base: 0.012, width: [0.06, 0.09], thickness: 0.02, tip: 0.6, ...o });
  const tailLen = 0.5 + 2.0 * (tie.length ?? 0.6);
  const curlyTail = tex === 'curly' || tex === 'coily';

  switch (tie.kind) {
    case 'ponytail': {
      const dir = TIE_DIRS[tie.height ?? 'mid'];
      plan.clumps.push(rootClumps(toward(dir)));
      plan.extras.push((c) => tail(c, dir, { length: tailLen, r0: tie.height === 'side' ? 0.15 : 0.18, r1: 0.05, braided: tie.braided, bubble: tie.bubble, texture: tex, forward: tie.height === 'side' ? 0.6 : 0, stiff: tie.height === 'high' ? 0.62 : 0.5 }));
      plan.crown = 0.08;
      break;
    }
    case 'pigtails': {
      const y = tie.height === 'high' ? 0.62 : tie.height === 'mid' ? 0.38 : 0.02;
      const z = tie.height === 'high' ? -0.3 : -0.42;
      const dirs = [dirOf(-0.82, y, z), dirOf(0.82, y, z)];
      plan.clumps.push(rootClumps({ flow: (d, o) => tieFlow(dirs[d.x < 0 ? 0 : 1]!)(d, o), length: (d) => Math.min(1.2, d.distanceTo(dirs[d.x < 0 ? 0 : 1]!)) }));
      plan.extras.push((c) => {
        for (const dir of dirs) tail(c, dir, { length: tailLen * 0.85, r0: 0.13, r1: 0.04, braided: tie.braided, texture: tex, forward: 0.35, stiff: tie.height === 'high' ? 0.7 : 0.45 });
      });
      break;
    }
    case 'bun':
    case 'space-buns': {
      const single = tie.kind === 'bun';
      const h = tie.height ?? 'top';
      const dirs = single ? [TIE_DIRS[h === 'side' ? 'mid' : h]] : h === 'low' ? [dirOf(-0.62, -0.05, -0.78), dirOf(0.62, -0.05, -0.78)] : [dirOf(-0.55, 0.82, -0.18), dirOf(0.55, 0.82, -0.18)];
      plan.clumps.push(rootClumps(single ? toward(dirs[0]!) : { flow: (d, o) => tieFlow(dirs[d.x < 0 ? 0 : 1]!)(d, o), length: (d) => Math.min(1.2, d.distanceTo(dirs[d.x < 0 ? 0 : 1]!)) }));
      if (tie.messy) plan.clumps.push({ count: 40, region: (d) => above(0)(d) && d.z > 0.2 && Math.abs(d.x) > 0.35, flow: (_d, o) => o.set(0, -1, 0.2), length: () => 0.2, lift: () => 0.03, base: 0.02, width: [0.02, 0.035], thickness: 0.012, tip: 0.3, fall: (_d, r) => 0.25 + 0.3 * r, fallFrom: 0.4 });
      plan.extras.push((c) => {
        for (const dir of dirs) {
          const topY = bun(c, dir, { size: tie.size ?? (single ? 0.6 : 0.42), messy: tie.messy, donut: tie.donut, braided: tie.braided });
          c.group.userData.bunTop = Math.max(c.group.userData.bunTop ?? 0, topY);
        }
      });
      plan.crown = h === 'top' || h === 'high' ? 0.45 : 0.1;
      break;
    }
    case 'braid': {
      const side = tie.height === 'side';
      const dir = side ? dirOf(0.62 * sweep, -0.2, -0.62) : TIE_DIRS.low;
      plan.clumps.push(rootClumps(toward(dir)));
      plan.extras.push((c) => tail(c, dir, { length: tailLen * 1.1, r0: 0.13, r1: 0.06, braided: true, forward: side ? 0.9 : 0, stiff: 0.45 }));
      break;
    }
    case 'french-braid':
    case 'two-braids': {
      const two = tie.kind === 'two-braids';
      plan.clumps.push(rootClumps({ flow: two ? (d, o) => o.set(Math.abs(d.x) > 0.3 ? -Math.sign(d.x) : Math.sign(d.x || 1) * 0.6, 0.1, -0.35) : centreFlow(0.3), length: (d) => (two ? Math.max(0.05, Math.abs(Math.abs(d.x) - 0.3)) : Math.abs(d.x)) * 1.1 + 0.05 }));
      plan.extras.push((c) => {
        const xs = two ? [-0.3, 0.3] : [0];
        for (const x of xs) {
          const r = (two ? 0.075 : 0.095) * (c.sdf ? 1.2 : 1);
          const g = scalpBraid(c, arc3(dirOf(x * 0.9, 0.62, 0.72), dirOf(x * 1.1, 0.92, -0.25), dirOf(x * 1.5, -0.1, -0.95), 16), r, tailLen * (two ? 0.75 : 0.8), new THREE.Vector3(x * 1.4, -1, two ? 0.3 : -0.2));
          addMesh(c, g.build(), vertexColorMat(c), 'hair-braid');
        }
      });
      break;
    }
    case 'crown-braid': {
      plan.clumps.push(rootClumps({ flow: (d, o) => o.set(0, d.y > 0.55 ? -0.4 : 1, 0), length: (d) => Math.abs(d.y - 0.55) * 1.2 + 0.05 }));
      plan.extras.push((c) => {
        const dirs: THREE.Vector3[] = [];
        for (let i = 0; i <= 64; i++) {
          const th = (i / 64) * Math.PI * 2;
          // A halo: just behind the hairline in front, above the nape at the back.
          const y = 0.4 + 0.3 * Math.cos(th);
          dirs.push(dirOf(Math.sin(th) * 0.9, y, Math.cos(th) * 0.8));
        }
        const g = scalpBraid(c, dirs, 0.15, 0);
        addMesh(c, g.build(), vertexColorMat(c), 'hair-braid');
      });
      plan.crown = 0.15;
      break;
    }
    case 'puff':
    case 'twin-puffs': {
      const twin = tie.kind === 'twin-puffs';
      const size = tie.size ?? 0.6;
      const centres = twin ? [new THREE.Vector3(-0.56 * P.width, 1.02 * P.height, -0.2), new THREE.Vector3(0.56 * P.width, 1.02 * P.height, -0.2)] : [new THREE.Vector3(0, 1.22 * P.height, -0.3)];
      const R = (twin ? 0.3 : 0.4) + 0.25 * size;
      plan.clumps.push(rootClumps({ flow: (d, o) => tieFlow(centres[twin && d.x >= 0 ? 1 : 0]!.clone().normalize())(d, o), length: (d) => Math.min(1.2, d.distanceTo(centres[twin && d.x >= 0 ? 1 : 0]!.clone().normalize())), thickness: 0.018 }));
      for (const cc of centres) {
        plan.fills.push({ test: (p) => p.distanceToSquared(cc) < R * R && headR(P, p) < p.length() - 0.02, box: [cc.clone().subScalar(R), cc.clone().addScalar(R)], count: twin ? 900 : 1500, size: 0.085 });
      }
      plan.extras.push((c) => {
        for (const cc of centres) {
          const dir = cc.clone().normalize();
          elastic(c, onHead(c.P, dir, 0.05), dir, 0.16);
        }
      });
      plan.crown = centres[0]!.y + R - P.height;
      break;
    }
    case 'beehive': {
      s.dome = 0.42;
      s.top += 0.05;
      plan.clumps.push(rootClumps({ flow: (d, o) => o.set(-d.x * 0.6, 1, -0.2 * d.z), length: (_d, r) => (P.organic ? 0.3 : 0.5) + r * 0.2, lift: (d, u) => 0.03 + 0.45 * smoothstep(0.1, 0.9, d.y) * u * gauss(d.x * d.x, 0.5), thickness: 0.026 }));
      plan.crown = 0.6;
      break;
    }
    default:
      plan.clumps.push(rootClumps(toward(TIE_DIRS.mid)));
  }
  if (hasFringe) {
    const b = look.bangs;
    plan.clumps.push({ count: 200, region: (d) => above(-0.02)(d) && frontK(d) >= 0.25, fringe: true, flow: b === 'curtain' ? curtainFlow : b === 'side' ? fringeFlow(sweep) : (_d, o) => o.set(0, -0.6, 1), length: (_d, r) => 0.36 + r * 0.08, lift: () => 0.045, base: 0.02, width: [0.06, 0.09], thickness: 0.024, tip: b === 'straight' ? 0.75 : 0.55 });
  }
  if (curlyTail && tie.kind !== 'puff' && tie.kind !== 'twin-puffs') {
    plan.curls.push({ keep: (d) => d.y > hairline(d, s) + 0.03 && d.z > 0.1 && d.y < 0.75, vol: () => 0.03, count: 500, size: 0.06, layers: 1 });
  }
  return plan;
}

/* --------------------------------- builder -------------------------------- */

/** Hair thickness above the scalp along `d` (before the hairline taper). */
export function shellThickness(s: ShellSpec, d: THREE.Vector3, m: number): number {
  if (s.strip !== undefined) {
    // Outside the strip the shell sinks under the scalp so the shaved sides show.
    const strip = gauss(d.x * d.x, s.strip * 0.3) * smoothstep(-0.1, 0.5, d.y);
    return lerp(-0.03, 0.34 * m, Math.min(1, strip * 1.6));
  }
  let t = s.base + s.top * smoothstep(s.side, 1, d.y);
  // Flat top: vertical walls just outside the widest part of the head (clipped flat on top),
  // a box of hair instead of a dome or a beret.
  if (s.flat) t = s.base + Math.max(0, Math.min(s.top * 3, 1.0 / Math.sqrt(Math.max(0.04, 1 - d.y * d.y)) - 1)) * smoothstep(s.side, s.side + 0.3, d.y);
  t += s.frontBoost * gauss(d.x * d.x + (d.y - 0.72) ** 2, 0.16) * smoothstep(0.1, 0.6, d.z);
  if (s.dome) t += s.dome * gauss(d.x * d.x * 1.1 + (d.y - 0.95) ** 2 + (d.z + 0.15) ** 2 * 0.7, 0.62);
  if (s.backBoost) t += s.backBoost * gauss(d.x * d.x * 0.8 + (d.y - 0.4) ** 2 + (d.z + 0.8) ** 2, 0.3);
  if (s.sideBoost) t += s.sideBoost * gauss((Math.abs(d.x) - 0.85) ** 2 + (d.y - 0.15) ** 2, 0.3);
  if (s.part !== undefined) t *= 1 - (s.partDepth ?? 0.55) * gauss((d.x - s.part) ** 2, s.partWidth ?? 0.03) * smoothstep(0.35, 0.7, d.y) * smoothstep(-0.2, 0.3, d.z);
  return t;
}

/** Coverage (0..1) and soft-hairline taper (0..1) along `dir`. */
export function shellMask(s: ShellSpec, dir: THREE.Vector3): [number, number] {
  const h = hairline(dir, s);
  let m = smoothstep(h - 0.05, h + 0.05, dir.y);
  // Soft hairline: thickness grows over a band instead of a helmet ledge (cut fringes stay blunt).
  const a = Math.abs(Math.atan2(dir.x, dir.z)) / Math.PI;
  const bluntK = s.fringe !== undefined ? 1 - smoothstep((s.fringeWidth ?? 0.4) * 0.85, (s.fringeWidth ?? 0.4) * 1.1, a) : 0;
  const taper = lerp(smoothstep(h - 0.03, h + (a < 0.3 ? 0.17 : 0.09) * (s.soft ?? 1), dir.y), 1, bluntK);
  if (s.topCut !== undefined) {
    m *= smoothstep(s.topCut + 0.04, s.topCut - 0.04, dir.y);
    // Thinning towards the bald crown.
    return [m, taper * smoothstep(s.topCut + 0.02, s.topCut - 0.18, dir.y)];
  }
  return [m, taper];
}

/**
 * Scalp shell mesh. With `fade` the shell keeps a constant offset and its edge fades out through
 * vertex alpha (the colour callback returns RGBA) — a painted-on layer with no ledge or stair-stepped
 * border, used for stubble and fades on the emoji head.
 */
function shellGeometry(P: HeadParams, s: ShellSpec, detail: number, seg: [number, number], color?: (d: THREE.Vector3, m: number) => number[], fade = false): THREE.BufferGeometry {
  const geo = new THREE.SphereGeometry(1, seg[0], seg[1]);
  const pos = geo.attributes.position as THREE.BufferAttribute;
  const dir = new THREE.Vector3();
  const out = new THREE.Vector3();
  const amp = s.noiseAmp * Math.max(0.25, detail);
  const ch = fade ? 4 : 3;
  const colors = color ? new Float32Array(pos.count * ch) : null;
  const mask = new Float32Array(pos.count);
  const thickness = (d: THREE.Vector3, m: number) => shellThickness(s, d, m);
  for (let i = 0; i < pos.count; i++) {
    dir.fromBufferAttribute(pos, i).normalize();
    const h = hairline(dir, s);
    let m = smoothstep(h - 0.05, h + 0.05, dir.y);
    // Soft hairline: thickness grows over a band instead of a helmet ledge (cut fringes stay blunt).
    const a = Math.abs(Math.atan2(dir.x, dir.z)) / Math.PI;
    const bluntK = s.fringe !== undefined ? 1 - smoothstep((s.fringeWidth ?? 0.4) * 0.85, (s.fringeWidth ?? 0.4) * 1.1, a) : 0;
    const taper = lerp(smoothstep(h - 0.03, h + (a < 0.3 ? 0.17 : 0.09) * (s.soft ?? 1), dir.y), 1, bluntK);
    if (s.topCut !== undefined) m *= smoothstep(s.topCut + 0.04, s.topCut - 0.04, dir.y);
    const n = fbm3(dir.x * s.noiseFreq, dir.y * s.noiseFreq, dir.z * s.noiseFreq, 3);
    mask[i] = m;
    const scale = fade ? 1 + thickness(dir, 1) : 1 + (thickness(dir, m) * lerp(0.25, 1, taper) + amp * n * taper) * m + (m - 1) * 0.3;
    sculpt(dir, P, out, scale);
    if (s.flat && out.y > s.flat * P.height) out.y = s.flat * P.height + (out.y - s.flat * P.height) * 0.08;
    pos.setXYZ(i, out.x, out.y, out.z);
    if (colors && color) {
      const c = color(dir, m);
      for (let k = 0; k < ch; k++) colors[i * ch + k] = c[k] ?? 1;
      if (fade) mask[i] = c[3] ?? 1;
    }
  }
  if (colors) geo.setAttribute('color', new THREE.BufferAttribute(colors, ch));
  // Drop the parts tucked under the skin: they would show through the mouth and eye sockets.
  const src = geo.index!;
  const keep: number[] = [];
  for (let t = 0; t < src.count; t += 3) {
    const a = src.getX(t);
    const b = src.getX(t + 1);
    const c = src.getX(t + 2);
    const lim = fade ? 0.004 : 0.02;
    if (mask[a]! > lim || mask[b]! > lim || mask[c]! > lim) keep.push(a, b, c);
  }
  geo.setIndex(keep);
  geo.computeVertexNormals();
  return geo;
}

const fib = (n: number, keep: (d: THREE.Vector3) => boolean) => {
  const pts: THREE.Vector3[] = [];
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < n; i++) {
    const y = 1 - (i / (n - 1)) * 2;
    const rad = Math.sqrt(1 - y * y);
    const th = golden * i;
    const d = new THREE.Vector3(Math.cos(th) * rad, y, Math.sin(th) * rad);
    if (keep(d)) pts.push(d);
  }
  return pts;
};

let coilGeo: THREE.TorusGeometry | null = null;
let blobGeo: THREE.IcosahedronGeometry | null = null;

function instancedCurls(group: THREE.Group, mat: THREE.Material, placements: Array<{ p: THREE.Vector3; size: number }>, rand: () => number) {
  // Low-poly coils/blobs: thousands of instances, so every triangle counts on phones.
  coilGeo ??= new THREE.TorusGeometry(1, 0.55, 6, 10);
  blobGeo ??= new THREE.IcosahedronGeometry(1, 1);
  coilGeo.userData.shared = true;
  blobGeo.userData.shared = true;
  const coils = new THREE.InstancedMesh(coilGeo, mat, Math.ceil(placements.length * 0.6) + 1);
  const blobs = new THREE.InstancedMesh(blobGeo, mat, Math.ceil(placements.length * 0.6) + 1);
  const m4 = new THREE.Matrix4();
  const q = new THREE.Quaternion();
  const e = new THREE.Euler();
  const sc = new THREE.Vector3();
  let ci = 0;
  let bi = 0;
  for (const { p, size } of placements) {
    e.set(rand() * Math.PI, rand() * Math.PI, rand() * Math.PI);
    q.setFromEuler(e);
    sc.setScalar(size);
    m4.compose(p, q, sc);
    if (rand() < 0.55 && ci < coils.count) coils.setMatrixAt(ci++, m4);
    else if (bi < blobs.count) blobs.setMatrixAt(bi++, m4);
  }
  coils.count = ci;
  blobs.count = bi;
  for (const im of [coils, blobs]) {
    im.castShadow = true;
    im.receiveShadow = true;
    im.instanceMatrix.needsUpdate = true;
    im.name = 'hair-curls';
    im.userData.outline = true;
    group.add(im);
  }
}

/** Builds a hairstyle from its semantic recipe. */
export function buildHairdo(look: HairLook, P: HeadParams, mat: THREE.Material, opts: HairdoOptions): HairResult {
  const group = new THREE.Group();
  const rand = rng(opts.seed);
  let hmat = mat as THREE.MeshPhysicalMaterial;
  if (opts.simple) {
    const s = shellSpec(SHORT, { base: 0.1, top: 0.08, noiseAmp: 0, frontBoost: 0.02, noiseFreq: 6 });
    void s;
    return { group, crown: 0.18 };
  }
  const plan = compileHair(look, P);
  const s = plan.shell;
  if (plan.gloss && hmat.isMeshPhysicalMaterial) {
    hmat = hmat.clone();
    hmat.roughness = lerp(hmat.roughness, 0.22, plan.gloss);
    hmat.clearcoat = 0.5 * plan.gloss;
    hmat.clearcoatRoughness = 0.35;
  }
  const baseColor = hmat.color.clone();

  if (plan.stubble) {
    const st = plan.stubble;
    const skin = opts.skin ?? baseColor.clone().multiplyScalar(2).addScalar(0.25);
    const dark = baseColor.clone().multiplyScalar(0.6);
    const low = dark.clone().lerp(skin, st.skinMix);
    const c = new THREE.Color();
    // Emoji head: stubble is a thin translucent layer (hair colour over the skin) whose edge and
    // fade gradient live in vertex alpha — no ledge, no stair-stepped border.
    const fade = Boolean(P.organic);
    const spec = fade ? { ...st.spec, base: 0.007 } : st.spec;
    const tint = baseColor.clone().multiplyScalar(0.72);
    const geo = shellGeometry(
      P,
      spec,
      0,
      fade ? [180, 135] : [120, 90],
      (d) => {
        const h0 = hairline(d, spec);
        const t = st.gradient ? smoothstep(h0, (s.base < 0 ? h0 + 0.3 : hairline(d, s)) + 0.02, d.y) : 0;
        if (fade) {
          let edge = smoothstep(h0 - 0.03, h0 + 0.1, d.y);
          if (spec.topCut !== undefined) edge *= smoothstep(spec.topCut, spec.topCut - 0.3, d.y);
          const a = lerp(1 - st.skinMix, 0.95, Math.pow(t, 0.6)) * edge;
          return [tint.r, tint.g, tint.b, a];
        }
        if (!st.gradient) return [low.r, low.g, low.b];
        c.copy(low).lerp(dark, Math.pow(t, 0.6));
        return [c.r, c.g, c.b];
      },
      fade,
    );
    const smat = hmat.clone();
    smat.vertexColors = true;
    smat.color = new THREE.Color('#ffffff');
    smat.map = null;
    smat.bumpMap = null;
    smat.roughness = 0.85;
    smat.sheen = 0;
    if (fade) {
      smat.transparent = true;
      smat.depthWrite = false;
      smat.polygonOffset = true;
      smat.polygonOffsetFactor = -1;
      smat.polygonOffsetUnits = -2;
      if ('clearcoat' in smat) smat.clearcoat = 0;
    }
    const stubble = new THREE.Mesh(geo, smat);
    stubble.receiveShadow = true;
    stubble.renderOrder = 1;
    stubble.name = 'hair-stubble';
    group.add(stubble);
  }

  if (s.base < 0) return { group, crown: plan.crown };

  if (P.organic) return sculptedHair(plan, look, P, hmat, opts, group, rand, baseColor);

  const shell = new THREE.Mesh(shellGeometry(P, s, opts.detail, [192, 144]), hmat);
  shell.castShadow = true;
  shell.receiveShadow = true;
  shell.name = 'hair-shell';
  shell.userData.outline = true;
  group.add(shell);
  let crown = Math.max(plan.crown, s.base + s.top);

  // Curls: instanced coils over a volume above the scalp.
  for (const layer of plan.curls) {
    const dirs = fib(layer.count, layer.keep);
    const placements: Array<{ p: THREE.Vector3; size: number }> = [];
    for (const d of dirs) {
      for (let l = 0; l < layer.layers; l++) {
        const v = layer.vol(d);
        const k = 1 + 0.01 + (v * (l + rand())) / layer.layers;
        const p = sculpt(d, P, new THREE.Vector3(), k);
        p.addScaledVector(d, (rand() - 0.5) * 0.03);
        placements.push({ p, size: layer.size + rand() * 0.035 });
        crown = Math.max(crown, k - 1);
      }
    }
    instancedCurls(group, hmat, placements, rand);
  }
  for (const f of plan.fills) {
    const placements: Array<{ p: THREE.Vector3; size: number }> = [];
    const [lo, hi] = f.box;
    for (let i = 0; i < f.count * 6 && placements.length < f.count; i++) {
      const p = new THREE.Vector3(lerp(lo.x, hi.x, rand()), lerp(lo.y, hi.y, rand()), lerp(lo.z, hi.z, rand()));
      if (f.test(p)) placements.push({ p, size: f.size + rand() * 0.035 });
    }
    instancedCurls(group, hmat, placements, rand);
  }

  // Long hair: dark backing curtain behind the head (fills gaps between falling clumps).
  if (plan.curtain) {
    const { length, phiStart, flare } = plan.curtain;
    const pts: THREE.Vector2[] = [];
    for (let i = 0; i <= 24; i++) {
      const t = i / 24;
      const y = lerp(0.4, -length, t);
      const rad = 1.0 + 0.02 + 0.06 * smoothstep(0, 0.4, t) + flare * t * (length < 1.2 ? t : 1);
      pts.push(new THREE.Vector2(rad, y));
    }
    const curtain = new THREE.LatheGeometry(pts, 72, phiStart, 2 * (Math.PI - phiStart));
    const cp = curtain.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < cp.count; i++) cp.setXYZ(i, cp.getX(i) * P.width, cp.getY(i) * P.height * 0.98, cp.getZ(i) * P.depth * 0.95);
    if (opts.collider) {
      const p = new THREE.Vector3();
      for (let i = 0; i < cp.count; i++) {
        p.fromBufferAttribute(cp, i);
        pushOut(P, p, 0.0, undefined);
        const col = opts.collider;
        for (let it = 0; it < 3; it++) {
          const d = col(p.x, p.y, p.z);
          if (d >= 0.06) break;
          const e = 0.01;
          T1.set(col(p.x + e, p.y, p.z) - col(p.x - e, p.y, p.z), col(p.x, p.y + e, p.z) - col(p.x, p.y - e, p.z), col(p.x, p.y, p.z + e) - col(p.x, p.y, p.z - e)).normalize();
          p.addScaledVector(T1, 0.06 - d);
        }
        cp.setXYZ(i, p.x, p.y, p.z);
      }
    }
    curtain.computeVertexNormals();
    const cmat = hmat.clone();
    cmat.side = THREE.DoubleSide;
    cmat.color = baseColor.clone().multiplyScalar(0.55);
    const cm = new THREE.Mesh(curtain, cmat);
    cm.name = 'hair-curtain';
    group.add(cm);
  }

  // Groomed clumps on top of the shell.
  if (plan.clumps.length) {
    const cmat = hmat.clone();
    cmat.vertexColors = true;
    cmat.color = new THREE.Color('#ffffff');
    cmat.side = THREE.DoubleSide;
    // Darker shell underneath reads as depth between clumps.
    const shellMat = hmat.clone();
    shellMat.color = baseColor.clone().multiplyScalar(0.62);
    shell.material = shellMat;
    for (const cs of plan.clumps) {
      const geo = buildClumps(P, { ...cs, collider: cs.collider ?? opts.collider }, rand, baseColor);
      const mesh = new THREE.Mesh(geo, cmat);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      mesh.name = 'hair-clumps';
      mesh.userData.outline = true;
      group.add(mesh);
    }
    crown = Math.max(crown, 0.12);
  }

  if (plan.extras.length) {
    const tieMat = new THREE.MeshStandardMaterial({ color: '#16161a', roughness: 0.45 });
    const ctx: Ctx = { P, group, mat: hmat, tieMat, rand, collider: opts.collider, look, shell: s };
    for (const extra of plan.extras) extra(ctx);
    if (group.userData.bunTop) crown = Math.max(crown, group.userData.bunTop - P.height);
  }
  return { group, crown };
}

/** Clamp helper re-export for tests. */
export const _internal = { clamp };

/* ------------------------------ sculpted hair ----------------------------- */

/** Outer surface of the sculpted scalp shell above the head (head units, ×radius). */
function shellT(s: ShellSpec, d: THREE.Vector3): number {
  const [m, taper] = shellMask(s, d);
  return (shellThickness(s, d, m) * lerp(0.25, 1, taper)) * m + (m - 1) * 0.06;
}

/** Fewer, chunkier locks than ribbon clumps: they melt into one emoji-style mass. */
const LOCK_FRACTION = 0.12;
const LOCK_RADIUS = 1.35;

function sculptedHair(plan: Plan, look: HairLook, P: HeadParams, hmat: THREE.MeshPhysicalMaterial, opts: HairdoOptions, group: THREE.Group, rand: () => number, baseColor: THREE.Color): HairResult {
  // Sculpted fringes are cut in soft scallops, not fine zig-zags (those mesh into drips).
  const s: ShellSpec = { ...plan.shell, fringeJag: (plan.shell.fringeJag ?? 1) * 0.3 };
  let crown = Math.max(plan.crown, s.base + s.top);
  const locks: SdfLock[] = [];
  for (const cs of plan.clumps) {
    const wide = (cs.width[0] + cs.width[1]) / 2;
    // Short cuts: a few big sculpted chunks; long hair: more locks for the falling mass.
    const tune = (globalThis as { __hairTune?: { short?: number; long?: number; r?: number; rl?: number; k?: number } }).__hairTune ?? {};
    const isLong = wide >= 0.095;
    // Spikes: many sharp cones over the top (a few big horns read as a costume).
    const count = cs.spikes ? Math.max(8, Math.round(cs.count * 0.13)) : Math.max(8, Math.round(cs.count * (isLong ? (tune.long ?? LOCK_FRACTION) : (tune.short ?? LOCK_FRACTION * 0.6))));
    const r0 = wide * (cs.spikes ? 1.6 : isLong ? (tune.rl ?? LOCK_RADIUS) : (tune.r ?? LOCK_RADIUS));
    const spec: ClumpSpec = { ...cs, collider: cs.collider ?? opts.collider };
    // Tied hair is pulled tight: lower relief (braided ties almost flush, the braid is the feature).
    const braidTie = look.tie?.kind === 'french-braid' || look.tie?.kind === 'two-braids' || look.tie?.kind === 'crown-braid';
    const sink = look.cut === 'tied' ? (braidTie ? 0.85 : 0.6) : 0.4;
    if (cs.spikes) {
      // Spikes grow from the top, long and pointed enough to read as spikes, not studs.
      spec.region = (d) => cs.region(d) && d.y > 0.2;
      spec.lift = (d, u) => cs.lift(d, u) * 1.25 + shellT(s, d) * 0.3;
    }
    if (cs.fringe && !cs.fall) spec.floor = (d) => hairline(d, s) + 0.03;
    // Groomed locks stop short of the hairline: the shell alone makes the clean edge.
    else if (!cs.fringe && !cs.fall && !cs.spikes) spec.floor = (d) => hairline(d, s) + 0.06;
    // Falling hair comes from the drapes; locks only groom the scalp (low relief).
    let rk = cs.fringe ? 0.62 : 1;
    if (plan.drapes && !cs.fringe) {
      if (cs.fall) spec.fall = undefined;
      rk = 0.65;
    }
    if (!cs.spikes) {
      // Locks hug the sculpted volume: the shell gives the shape, locks only carve the flow.
      const lockR = r0 * rk;
      spec.base = 0;
      spec.edge = undefined;
      spec.lift = (d) => Math.max(0.005, shellT(s, d) - lockR * sink);
      // Longer strokes for loose cuts; tied hair stops at the tie (overshooting locks pile up
      // into fat rolls where they meet).
      spec.length = (d, r) => cs.length(d, r) * (cs.fringe || look.cut === 'tied' ? 1 : 1.5);
    }
    const free = Boolean(spec.fall);
    for (const path of clumpPaths(P, spec, rand, count)) {
      const rl = r0 * rk * (0.85 + 0.3 * path.r);
      const tip = cs.spikes ? 0.08 : Math.max(0.25, cs.tip);
      if (free || cs.spikes) {
        locks.push({ pts: path.pts, r0: rl, tip, shade: 1 + (path.r - 0.5) * 0.16, free });
        continue;
      }
      // Locks thin out towards the hairline like the shell does (soft edge, no helmet ledge),
      // and never stand further proud of a thin shell than their relief allows (tied hair).
      const tk = path.pts.map((q) => lerp(0.35, 1, shellMask(s, T1.copy(q).normalize())[1]));
      const cap = path.pts.map((q) => Math.max(0.025, shellT(s, T1.copy(q).normalize()) + rl * (1 - sink)));
      const n = tk.length - 1;
      locks.push({
        pts: path.pts,
        r0: rl,
        tip,
        shade: 1 + (path.r - 0.5) * 0.16,
        radius: (u) => {
          const f = u * n;
          const i = Math.min(n - 1, Math.floor(f));
          const k = n > 0 ? lerp(tk[i]!, tk[i + 1]!, f - i) : tk[0]!;
          const c = n > 0 ? lerp(cap[i]!, cap[i + 1]!, f - i) : cap[0]!;
          // Spindle-shaped: thin root and tip, so locks melt into the mass like brush strokes.
          return Math.min(c, rl * lerp(0.4, 1, smoothstep(0, 0.22, u)) * lerp(1, tip, Math.pow(u, 1.3)) * k);
        },
      });
    }
  }
  const blobs: SdfBlob[] = [];
  for (const layer of plan.curls) {
    const dirs = fib(Math.round(layer.count * 0.28), layer.keep);
    for (const d of dirs) {
      for (let l = 0; l < layer.layers; l++) {
        const v = layer.vol(d);
        const k = 1 + 0.01 + (v * (l + rand())) / layer.layers;
        const c = sculpt(d, P, new THREE.Vector3(), k);
        c.addScaledVector(d, (rand() - 0.5) * 0.03);
        blobs.push({ c, r: (layer.size + rand() * 0.035) * 1.45 });
        crown = Math.max(crown, k - 1);
      }
    }
  }
  for (const f of plan.fills) {
    const [lo, hi] = f.box;
    let n = 0;
    for (let i = 0; i < f.count * 6 && n < f.count * 0.3; i++) {
      const c = new THREE.Vector3(lerp(lo.x, hi.x, rand()), lerp(lo.y, hi.y, rand()), lerp(lo.z, hi.z, rand()));
      if (!f.test(c)) continue;
      blobs.push({ c, r: (f.size + rand() * 0.035) * 1.55 });
      n++;
    }
  }
  // Tails, buns and rolls join the sculpture (elastics and braids stay separate meshes).
  const sdf = { locks: [] as SdfLock[], blobs: [] as SdfBlob[], rings: [] as SdfRing[] };
  if (plan.extras.length) {
    const tieMat = new THREE.MeshStandardMaterial({ color: '#16161a', roughness: 0.45 });
    const ctx: Ctx = { P, group, mat: hmat, tieMat, rand, collider: opts.collider, look, shell: s, sdf };
    for (const extra of plan.extras) extra(ctx);
    if (group.userData.bunTop) crown = Math.max(crown, group.userData.bunTop - P.height);
  }
  for (const l of sdf.locks) locks.push({ ...l, free: true });
  for (const b of sdf.blobs) blobs.push({ ...b, free: true });
  const kTune = (globalThis as { __hairTune?: { k?: number } }).__hairTune?.k;
  const stepTune = (globalThis as { __hairTune?: { step?: number } }).__hairTune?.step;
  const geo = buildHairSdf(P, { shell: s, locks, blobs, rings: sdf.rings, kLock: kTune ?? 0.065, kBlob: 0.035, step: stepTune ?? 0.026, color: baseColor, detail: opts.detail * 0.5 });
  if (geo) {
    const mat = hmat.clone();
    mat.vertexColors = true;
    mat.color = new THREE.Color('#ffffff');
    const mesh = new THREE.Mesh(geo, mat);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.name = 'hair-sculpt';
    mesh.userData.outline = true;
    group.add(mesh);
  }
  if (plan.drapes) {
    const mat = hmat.clone();
    mat.vertexColors = true;
    mat.color = new THREE.Color('#ffffff');
    plan.drapes.forEach((d, i) => group.add(buildDrape(P, { ...d, seed: opts.seed + i * 17 }, opts.collider, baseColor, mat)));
  }
  return { group, crown: Math.max(crown, locks.length ? 0.12 : 0) };
}
