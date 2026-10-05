import * as THREE from 'three';
import { hairline, shellMask, shellThickness, type ShellSpec } from './hairdo';
import { headRadius } from './skull';
import type { HeadParams } from './head';
import { fbm3, lerp, smoothstep } from './math';
import { polygonize, smax, smin, type Sdf } from './sdf';

/**
 * Sculpted (emoji-style) hair: the scalp shell, chunky locks, buns and curl blobs are one
 * signed-distance field, meshed with surface nets. Locks melt into the mass with smooth
 * unions, so the hair reads as a single soft sculpture with grooves between locks — no
 * ribbons, no helmet ledges. Strand texture follows the locks (UVs from the nearest lock).
 */

export interface SdfLock {
  pts: THREE.Vector3[];
  /** Root radius and tip factor. */
  r0: number;
  tip: number;
  /** Colour multiplier for this lock. */
  shade: number;
}

export interface SdfBlob {
  c: THREE.Vector3;
  r: number;
}

/** Torus primitives (donut buns, rolls): centre, axis, major / minor radius. */
export interface SdfRing {
  c: THREE.Vector3;
  axis: THREE.Vector3;
  R: number;
  r: number;
}

/** Smooth hanging sheet of long hair (sides + back) the falling locks melt into. */
export interface SdfDrape {
  /** Lathe length below y = 0.4 (head units, before scaling). */
  length: number;
  /** Angle from the front where the sheet starts (radians). */
  phiStart: number;
  flare: number;
  thick: number;
}

export interface HairSdfOptions {
  shell: ShellSpec | null;
  drape?: SdfDrape;
  locks: SdfLock[];
  blobs: SdfBlob[];
  rings?: SdfRing[];
  /** Smooth-union radius between locks / the shell (bigger = softer, chunkier). */
  kLock: number;
  kBlob: number;
  step: number;
  color: THREE.Color;
  /** Shell noise amplitude multiplier (0 = smooth). */
  detail: number;
}

const STRIDE = 12; // ax ay az bx by bz ra rb v0 v1 lock shade

class SegGrid {
  readonly C = 0.12;
  min = new THREE.Vector3(Infinity, Infinity, Infinity);
  max = new THREE.Vector3(-Infinity, -Infinity, -Infinity);
  nx = 0;
  ny = 0;
  nz = 0;
  starts: Int32Array = new Int32Array(1);
  items: Int32Array = new Int32Array(0);
  /** Lower bound of the distance to any primitive, for cells that list none (chamfer transform). */
  far: Float32Array = new Float32Array(0);

  constructor(
    readonly segs: Float32Array,
    readonly count: number,
    readonly pad: number,
  ) {
    if (!count) return;
    for (let i = 0; i < count; i++) {
      const o = i * STRIDE;
      const r = Math.max(segs[o + 6]!, segs[o + 7]!) + pad;
      for (let a = 0; a < 2; a++) {
        this.min.set(Math.min(this.min.x, segs[o + a * 3]! - r), Math.min(this.min.y, segs[o + a * 3 + 1]! - r), Math.min(this.min.z, segs[o + a * 3 + 2]! - r));
        this.max.set(Math.max(this.max.x, segs[o + a * 3]! + r), Math.max(this.max.y, segs[o + a * 3 + 1]! + r), Math.max(this.max.z, segs[o + a * 3 + 2]! + r));
      }
    }
    this.min.subScalar(this.C);
    this.max.addScalar(this.C);
    const C = this.C;
    this.nx = Math.ceil((this.max.x - this.min.x) / C) + 1;
    this.ny = Math.ceil((this.max.y - this.min.y) / C) + 1;
    this.nz = Math.ceil((this.max.z - this.min.z) / C) + 1;
    const ncell = this.nx * this.ny * this.nz;
    const counts = new Int32Array(ncell);
    const ranges = new Int32Array(count * 6);
    for (let i = 0; i < count; i++) {
      const o = i * STRIDE;
      const r = Math.max(segs[o + 6]!, segs[o + 7]!) + pad;
      const i0 = Math.max(0, Math.floor((Math.min(segs[o]!, segs[o + 3]!) - r - this.min.x) / C));
      const i1 = Math.min(this.nx - 1, Math.floor((Math.max(segs[o]!, segs[o + 3]!) + r - this.min.x) / C));
      const j0 = Math.max(0, Math.floor((Math.min(segs[o + 1]!, segs[o + 4]!) - r - this.min.y) / C));
      const j1 = Math.min(this.ny - 1, Math.floor((Math.max(segs[o + 1]!, segs[o + 4]!) + r - this.min.y) / C));
      const k0 = Math.max(0, Math.floor((Math.min(segs[o + 2]!, segs[o + 5]!) - r - this.min.z) / C));
      const k1 = Math.min(this.nz - 1, Math.floor((Math.max(segs[o + 2]!, segs[o + 5]!) + r - this.min.z) / C));
      ranges.set([i0, i1, j0, j1, k0, k1], i * 6);
      for (let k = k0; k <= k1; k++) for (let j = j0; j <= j1; j++) for (let ii = i0; ii <= i1; ii++) counts[(k * this.ny + j) * this.nx + ii]!++;
    }
    this.starts = new Int32Array(ncell + 1);
    for (let c = 0; c < ncell; c++) this.starts[c + 1] = this.starts[c]! + counts[c]!;
    this.items = new Int32Array(this.starts[ncell]!);
    const fillPos = this.starts.slice(0, ncell);
    for (let i = 0; i < count; i++) {
      const b = i * 6;
      for (let k = ranges[b + 4]!; k <= ranges[b + 5]!; k++)
        for (let j = ranges[b + 2]!; j <= ranges[b + 3]!; j++) for (let ii = ranges[b]!; ii <= ranges[b + 1]!; ii++) this.items[fillPos[(k * this.ny + j) * this.nx + ii]!++] = i;
    }
    // Chamfer distance (in cells) from every empty cell to the nearest listed one.
    const far = new Float32Array(ncell);
    for (let c = 0; c < ncell; c++) far[c] = counts[c]! > 0 ? 0 : 1e9;
    const nx = this.nx;
    const ny = this.ny;
    const nz = this.nz;
    const pass = (dir: 1 | -1) => {
      const ks = dir > 0 ? [0, nz, 1] : [nz - 1, -1, -1];
      const js = dir > 0 ? [0, ny, 1] : [ny - 1, -1, -1];
      const is = dir > 0 ? [0, nx, 1] : [nx - 1, -1, -1];
      for (let k = ks[0]!; k !== ks[1]; k += ks[2]!)
        for (let j = js[0]!; j !== js[1]; j += js[2]!)
          for (let i = is[0]!; i !== is[1]; i += is[2]!) {
            const c = (k * ny + j) * nx + i;
            let v = far[c]!;
            if (v === 0) continue;
            const pi = i - dir;
            const pj = j - dir;
            const pk = k - dir;
            if (pi >= 0 && pi < nx) v = Math.min(v, far[c - dir]! + 1);
            if (pj >= 0 && pj < ny) v = Math.min(v, far[c - dir * nx]! + 1);
            if (pk >= 0 && pk < nz) v = Math.min(v, far[c - dir * nx * ny]! + 1);
            far[c] = v;
          }
    };
    pass(1);
    pass(-1);
    pass(1);
    for (let c = 0; c < ncell; c++) far[c] = far[c]! > 0 ? Math.max(pad, (far[c]! - 1) * C) : 0;
    this.far = far;
  }

  cell(x: number, y: number, z: number): number {
    if (!this.count) return -1;
    const i = Math.floor((x - this.min.x) / this.C);
    const j = Math.floor((y - this.min.y) / this.C);
    const k = Math.floor((z - this.min.z) / this.C);
    if (i < 0 || j < 0 || k < 0 || i >= this.nx || j >= this.ny || k >= this.nz) return -1;
    return (k * this.ny + j) * this.nx + i;
  }

  /** Distance lower bound outside the grid. */
  outside(x: number, y: number, z: number): number {
    const dx = Math.max(this.min.x - x, 0, x - this.max.x);
    const dy = Math.max(this.min.y - y, 0, y - this.max.y);
    const dz = Math.max(this.min.z - z, 0, z - this.max.z);
    return Math.hypot(dx, dy, dz) + this.pad;
  }
}

function sdTorusAxis(x: number, y: number, z: number, ring: SdfRing): number {
  const px = x - ring.c.x;
  const py = y - ring.c.y;
  const pz = z - ring.c.z;
  const a = ring.axis;
  const h = px * a.x + py * a.y + pz * a.z;
  const qx = px - a.x * h;
  const qy = py - a.y * h;
  const qz = pz - a.z * h;
  const q = Math.hypot(qx, qy, qz) - ring.R;
  return Math.hypot(q, h) - ring.r;
}

/** Builds the sculpted hair mesh (positions, normals, lock-aligned UVs, AO vertex colours). */
export function buildHairSdf(P: HeadParams, o: HairSdfOptions): THREE.BufferGeometry | null {
  const R = headRadius(P);
  const s = o.shell;

  // Pack lock segments (resampled to an even spacing) and blobs (degenerate segments).
  const packed: number[] = [];
  o.locks.forEach((lock, li) => {
    const pts = resample(lock.pts, 0.09);
    if (pts.length < 2) return;
    let len = 0;
    const lens = [0];
    for (let i = 1; i < pts.length; i++) lens.push((len += pts[i]!.distanceTo(pts[i - 1]!)));
    const rad = (u: number) => lock.r0 * lerp(1, lock.tip, Math.pow(u, 1.3)) * (u < 0.04 ? 0.8 : 1);
    for (let i = 0; i < pts.length - 1; i++) {
      const a = pts[i]!;
      const b = pts[i + 1]!;
      packed.push(a.x, a.y, a.z, b.x, b.y, b.z, rad(lens[i]! / len), rad(lens[i + 1]! / len), lens[i]!, lens[i + 1]!, li, lock.shade);
    }
  });
  const nLockSegs = packed.length / STRIDE;
  for (const b of o.blobs) packed.push(b.c.x, b.c.y, b.c.z, b.c.x, b.c.y, b.c.z, b.r, b.r, -1, -1, -1, 1);
  const segs = new Float32Array(packed);
  const count = segs.length / STRIDE;
  const grid = new SegGrid(segs, count, Math.max(o.kLock, o.kBlob) + 0.025);
  const rings = o.rings ?? [];

  const dir = new THREE.Vector3();
  const amp = s ? s.noiseAmp * Math.max(0.25, o.detail) : 0;
  const shellD = (x: number, y: number, z: number): number => {
    if (!s || s.base < 0) return 1;
    const l = Math.hypot(x, y, z) || 1e-6;
    dir.set(x / l, y / l, z / l);
    const [m, taper] = shellMask(s, dir);
    if (m < 0.02) return Math.max(0.05, l - R(x, y, z) * 0.9);
    const rr = R(x, y, z);
    const n = amp > 0 ? fbm3(dir.x * s.noiseFreq, dir.y * s.noiseFreq, dir.z * s.noiseFreq, 2) : 0;
    let t = shellThickness(s, dir, m) * lerp(0.25, 1, taper) + amp * n * taper;
    t = t * m + (m - 1) * 0.06;
    let outer = l - rr * (1 + t);
    if (s.flat && y > s.flat * P.height) outer = Math.max(outer, y - s.flat * P.height - 0.02);
    // Hair only exists in a layer just above the scalp (nothing to show through the face).
    const inner = rr * 0.9 - l;
    // A softer coverage ramp for the cut keeps the hairline edge smooth after meshing.
    const h = hairline(dir, s);
    const mc = smoothstep(h - 0.09, h + 0.09, dir.y) * (s.topCut !== undefined ? smoothstep(s.topCut + 0.06, s.topCut - 0.06, dir.y) : 1);
    return smax(smax(outer, inner, 0.02), (0.3 - mc) * 0.25, 0.03);
  };

  const dr = o.drape;
  const drapeD = (x: number, y: number, z: number): number => {
    if (!dr) return 1;
    const qx = x / P.width;
    const qy = y / (P.height * 0.98);
    const qz = z / (P.depth * 0.95);
    const t = (0.4 - qy) / (0.4 + dr.length);
    const rho = Math.hypot(qx, qz);
    const rt = 1.02 + 0.06 * smoothstep(0, 0.4, t) + dr.flare * Math.max(0, t) * (dr.length < 1.2 ? Math.max(0, t) : 1);
    let d = Math.abs(rho - rt - dr.thick * 0.4) - dr.thick;
    // Blunt rounded bottom edge, top tucked under the scalp shell.
    d = Math.max(d, qy - 0.45, -(qy + dr.length) - 0.0);
    const phi = Math.abs(Math.atan2(qx, qz));
    d = Math.max(d, (dr.phiStart - phi) * rho);
    return d * Math.min(P.width, P.depth);
  };

  const field: Sdf = (x, y, z) => {
    let d = shellD(x, y, z);
    if (dr) d = smin(d, drapeD(x, y, z), o.kLock);
    if (count) {
      const c = grid.cell(x, y, z);
      if (c < 0) d = Math.min(d, grid.outside(x, y, z));
      else if (grid.starts[c] === grid.starts[c + 1]) d = Math.min(d, grid.far[c]!);
      else {
        let best = grid.pad;
        for (let q = grid.starts[c]!; q < grid.starts[c + 1]!; q++) {
          const i = grid.items[q]!;
          const off = i * STRIDE;
          let sd: number;
          if (i >= nLockSegs) sd = Math.hypot(x - segs[off]!, y - segs[off + 1]!, z - segs[off + 2]!) - segs[off + 6]!;
          else {
            const ax = segs[off]!;
            const ay = segs[off + 1]!;
            const az = segs[off + 2]!;
            const bax = segs[off + 3]! - ax;
            const bay = segs[off + 4]! - ay;
            const baz = segs[off + 5]! - az;
            const pax = x - ax;
            const pay = y - ay;
            const paz = z - az;
            const l2 = bax * bax + bay * bay + baz * baz || 1e-9;
            const h = Math.min(1, Math.max(0, (pax * bax + pay * bay + paz * baz) / l2));
            sd = Math.hypot(pax - bax * h, pay - bay * h, paz - baz * h) - (segs[off + 6]! + (segs[off + 7]! - segs[off + 6]!) * h);
          }
          if (sd >= grid.pad) continue;
          if (sd < best) best = sd;
          d = smin(d, sd, i < nLockSegs ? o.kLock : o.kBlob);
        }
        d = Math.min(d, best);
      }
    }
    for (const ring of rings) d = smin(d, sdTorusAxis(x, y, z, ring), o.kLock);
    return d;
  };

  // Bounds: the scalp shell plus everything the locks / blobs reach.
  const lo = new THREE.Vector3(-1.35 * P.width, -1.05 * P.height, -1.3 * P.depth);
  const hi = new THREE.Vector3(1.35 * P.width, 1.55 * P.height, 1.35 * P.depth);
  if (count) {
    lo.min(grid.min.clone().addScalar(grid.C * 0.5));
    hi.max(grid.max.clone().subScalar(grid.C * 0.5));
  }
  if (dr) {
    lo.min(new THREE.Vector3(-1.5 * P.width, -(dr.length + 0.1) * P.height, -1.45 * P.depth));
    hi.max(new THREE.Vector3(1.5 * P.width, 0.6, 1.0 * P.depth));
  }
  for (const ring of rings) {
    lo.min(ring.c.clone().subScalar(ring.R + ring.r + 0.05));
    hi.max(ring.c.clone().addScalar(ring.R + ring.r + 0.05));
  }
  const geo = polygonize(field, [lo.x, lo.y, lo.z], [hi.x, hi.y, hi.z], o.step, { ao: 0.6, aoSteps: [0.12] });
  const pos = geo.attributes.position as THREE.BufferAttribute;
  if (!pos.count) return null;

  // UVs along the nearest lock (strands follow the hair), colours: roots darker, per-lock shade.
  const nor = geo.attributes.normal as THREE.BufferAttribute;
  const col = geo.attributes.color as THREE.BufferAttribute;
  const uv = new Float32Array(pos.count * 2);
  const rgb = new Float32Array(pos.count * 3);
  for (let v = 0; v < pos.count; v++) {
    const x = pos.getX(v);
    const y = pos.getY(v);
    const z = pos.getZ(v);
    const c = count ? grid.cell(x, y, z) : -1;
    let best = Infinity;
    let bu = 0;
    let bv = 0;
    let shade = 1;
    let rootK = 1;
    if (c >= 0) {
      for (let q = grid.starts[c]!; q < grid.starts[c + 1]!; q++) {
        const i = grid.items[q]!;
        if (i >= nLockSegs) continue;
        const off = i * STRIDE;
        const ax = segs[off]!;
        const ay = segs[off + 1]!;
        const az = segs[off + 2]!;
        const bx = segs[off + 3]! - ax;
        const by = segs[off + 4]! - ay;
        const bz = segs[off + 5]! - az;
        const l2 = bx * bx + by * by + bz * bz || 1e-9;
        const px = x - ax;
        const py = y - ay;
        const pz = z - az;
        const t = Math.max(0, Math.min(1, (px * bx + py * by + pz * bz) / l2));
        const sx = px - bx * t;
        const sy = py - by * t;
        const sz = pz - bz * t;
        const d = Math.hypot(sx, sy, sz) - (segs[off + 6]! + (segs[off + 7]! - segs[off + 6]!) * t);
        if (d < best) {
          best = d;
          const along = segs[off + 8]! + (segs[off + 9]! - segs[off + 8]!) * t;
          // Angle around the lock axis → u, arc length → v.
          const il = 1 / Math.sqrt(l2);
          const ux = bx * il;
          const uy = by * il;
          const uz = bz * il;
          // ref = up × axis, ref2 = ref × axis
          let rx = uz;
          let ry = 0;
          let rz = -ux;
          const rl = Math.hypot(rx, rz) || 1;
          rx /= rl;
          rz /= rl;
          const r2x = ry * uz - rz * uy;
          const r2y = rz * ux - rx * uz;
          const r2z = rx * uy - ry * ux;
          void ry;
          const ang = Math.atan2(sx * r2x + sy * r2y + sz * r2z, sx * rx + sz * rz);
          bu = (ang / (Math.PI * 2)) * 0.35 + segs[off + 10]! * 0.173;
          bv = along * 0.9;
          shade = segs[off + 11]!;
          rootK = smoothstep(0, 0.35, along);
          ry = 0;
        }
      }
    }
    if (best > 0.08) {
      // Shell: strands radiate from the crown.
      const l = Math.hypot(x, y, z) || 1;
      bu = (Math.atan2(x, z) / (Math.PI * 2)) * 3;
      bv = Math.acos(Math.max(-1, Math.min(1, y / l))) * 1.2;
      shade = 1;
      rootK = 0.85;
    }
    uv[v * 2] = bu;
    uv[v * 2 + 1] = bv;
    const ao = col ? col.getX(v) : 1;
    const k = ao * shade * lerp(0.82, 1, rootK);
    rgb[v * 3] = o.color.r * k;
    rgb[v * 3 + 1] = o.color.g * k;
    rgb[v * 3 + 2] = o.color.b * k;
    void nor;
  }
  geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  geo.setAttribute('color', new THREE.BufferAttribute(rgb, 3));
  return geo;
}

function resample(pts: THREE.Vector3[], step: number): THREE.Vector3[] {
  if (pts.length < 2) return pts;
  const out = [pts[0]!.clone()];
  let carry = 0;
  for (let i = 1; i < pts.length; i++) {
    const a = pts[i - 1]!;
    const b = pts[i]!;
    const d = a.distanceTo(b);
    let t = step - carry;
    while (t <= d) {
      out.push(a.clone().lerp(b, t / d));
      t += step;
    }
    carry = d - (t - step);
  }
  const last = pts[pts.length - 1]!;
  if (out[out.length - 1]!.distanceTo(last) > step * 0.3) out.push(last.clone());
  return out;
}

