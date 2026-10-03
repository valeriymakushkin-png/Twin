import * as THREE from 'three';
import type { FaceShape, MascotDna } from '@mascot/shared';
import { clamp, gauss, lerp, smoothstep } from './math';

/**
 * Head geometry: a high-resolution unit sphere deformed by an analytic sculpting function.
 * Everything that sits on the face (hair line, brows, mouth paint, eyes, glasses) is placed
 * through the same function / FrontMap, so features always hug the actual surface.
 */
export interface HeadParams {
  width: number;
  height: number;
  depth: number;
  forehead: number;
  jaw: number;
  chin: number;
  cheek: number;
  cranium: number;
  /** 0 = sphere-like, 1 = boxy (vinyl / brick figure heads). */
  boxy: number;
  noseWidth: number;
  noseTip: number;
  noseBridge: number;
  noseUp: number;
  noseLength: number;
  /** Eye centres in face space (x is the absolute offset). */
  eyeX: number;
  eyeY: number;
  mouthY: number;
}

const SHAPES: Record<FaceShape, Pick<HeadParams, 'width' | 'height' | 'forehead' | 'jaw' | 'chin' | 'cheek'>> = {
  oval: { width: 0.93, height: 1.08, forehead: 0.97, jaw: 0.9, chin: 0.26, cheek: 0.9 },
  round: { width: 0.99, height: 1.02, forehead: 0.98, jaw: 0.96, chin: 0.1, cheek: 1.15 },
  square: { width: 0.97, height: 1.06, forehead: 0.98, jaw: 1.0, chin: 0.06, cheek: 0.7 },
  heart: { width: 0.95, height: 1.07, forehead: 1, jaw: 0.84, chin: 0.4, cheek: 0.9 },
  oblong: { width: 0.88, height: 1.15, forehead: 0.95, jaw: 0.9, chin: 0.2, cheek: 0.65 },
  diamond: { width: 0.93, height: 1.08, forehead: 0.9, jaw: 0.86, chin: 0.34, cheek: 1.2 },
  triangle: { width: 0.93, height: 1.07, forehead: 0.88, jaw: 1.0, chin: 0.14, cheek: 0.8 },
};

export function headParamsFromDna(dna: MascotDna, overrides: Partial<HeadParams> = {}): HeadParams {
  const s = SHAPES[dna.faceShape];
  const p = dna.proportions;
  const nose = dna.noseShape;
  const base: HeadParams = {
    ...s,
    width: s.width * (p ? lerp(0.96, 1.04, clamp((p.widthToHeight - 0.7) / 0.2)) : 1),
    depth: 0.98,
    cranium: 1,
    boxy: 0,
    noseWidth: nose === 'wide' ? 1.3 : nose === 'narrow' ? 0.78 : nose === 'button' ? 0.9 : 1,
    noseTip: nose === 'button' || nose === 'snub' ? 1.15 : nose === 'narrow' ? 0.8 : 1,
    noseBridge: nose === 'roman' || nose === 'aquiline' ? 1.5 : nose === 'snub' || nose === 'button' ? 0.55 : 1,
    noseUp: nose === 'upturned' || nose === 'snub' ? 1 : nose === 'aquiline' ? -0.6 : 0,
    noseLength: nose === 'roman' || nose === 'aquiline' ? 1.15 : nose === 'button' || nose === 'snub' ? 0.85 : 1,
    eyeX: 0.36 * (p ? lerp(0.94, 1.08, clamp((p.eyeSpacing - 0.38) / 0.12)) : 1),
    eyeY: 0.02,
    mouthY: -0.5,
  };
  return { ...base, ...overrides };
}

/** Sculpts a unit-sphere direction into a head-surface point (scale > 1 → offset shells). */
export function sculpt(dir: THREE.Vector3, P: HeadParams, out: THREE.Vector3, scale = 1): THREE.Vector3 {
  let x = dir.x;
  let y = dir.y;
  let z = dir.z;

  if (P.boxy > 0) {
    // Superellipsoid-ish: push points towards the bounding box.
    const k = 1 + P.boxy * 1.6;
    const n = Math.pow(Math.pow(Math.abs(x), k) + Math.pow(Math.abs(y), k) + Math.pow(Math.abs(z), k), 1 / k);
    const t = P.boxy;
    x = lerp(x, x / n, t);
    y = lerp(y, y / n, t);
    z = lerp(z, z / n, t);
  }

  const lower = smoothstep(-0.05, -1, y);
  const upper = smoothstep(0.2, 1, y);
  let wf = lerp(1, P.jaw, Math.pow(lower, 1.15)) * lerp(1, P.forehead, upper);
  wf *= 1 - P.chin * 0.42 * smoothstep(-0.6, -1, y);
  const df = lerp(1, 0.86, lower);
  const front = Math.max(0, z);
  const cheek = P.cheek * gauss((Math.abs(x) - 0.6) ** 2 + (y + 0.22) ** 2, 0.2) * front;

  x *= P.width * wf * (1 + cheek * 0.07);
  z *= P.depth * df;
  y *= P.height;
  if (z < 0) z *= 1 + 0.12 * P.cranium * smoothstep(-0.7, 0.6, dir.y);
  // Slightly flatter face plane reads as "character" rather than "ball".
  if (z > 0) z *= 1 - 0.05 * smoothstep(-0.4, 0.6, dir.y);

  // Facial relief (only on the front of the face).
  const fw = smoothstep(0.45, 0.85, dir.z);
  if (fw > 0) {
    const ax = Math.abs(x);
    const tipY = -0.24 * P.noseLength;
    const nw = 0.085 * P.noseWidth;
    // Nose: bridge, tip, alae.
    const bridge = 0.05 * P.noseBridge * gauss(x * x, nw * 0.55) * smoothstep(0.14, -0.02, y) * smoothstep(tipY - 0.04, tipY + 0.1, y);
    const tip = 0.11 * P.noseTip * gauss(x * x + ((y - tipY - P.noseUp * 0.02) * 1.15) ** 2, nw);
    const alae = 0.045 * gauss((ax - nw * 1.05) ** 2 + (y - tipY + 0.035) ** 2, nw * 0.62);
    // Eye sockets, brow ridge, muzzle, chin.
    const socket = -0.05 * gauss((ax - P.eyeX) ** 2 + ((y - P.eyeY) * 1.2) ** 2, 0.12);
    const brow = 0.035 * gauss((y - (P.eyeY + 0.24)) ** 2, 0.06) * gauss(x * x, 0.42);
    const muzzle = 0.045 * gauss(x * x * 1.4 + (y - P.mouthY + 0.02) ** 2, 0.22);
    const chin = 0.05 * gauss(x * x * 2 + (y + 0.98 * P.height) ** 2, 0.13);
    z += fw * (bridge + tip + alae + socket + brow + muzzle + chin);
  }
  return out.set(x * scale, y * scale, z * scale);
}

export function buildHeadGeometry(P: HeadParams, widthSegments = 160, heightSegments = 120): THREE.BufferGeometry {
  const geo = new THREE.SphereGeometry(1, widthSegments, heightSegments);
  const pos = geo.attributes.position as THREE.BufferAttribute;
  const dir = new THREE.Vector3();
  const out = new THREE.Vector3();
  for (let i = 0; i < pos.count; i++) {
    dir.fromBufferAttribute(pos, i).normalize();
    sculpt(dir, P, out);
    pos.setXYZ(i, out.x, out.y, out.z);
  }
  geo.computeVertexNormals();
  return geo;
}

/* ----------------------------- FrontMap ----------------------------- */

export interface SurfaceHit {
  position: THREE.Vector3;
  normal: THREE.Vector3;
  uv: THREE.Vector2;
}

/**
 * Orthographic "front projection" of the head: for any (x, y) in face space it returns the
 * frontmost surface point, its normal and texture UV. Built once per head by rasterising the
 * front-facing triangles into a grid, so lookups are O(1) (no raycasting per feature point).
 */
export class FrontMap {
  readonly N = 384;
  readonly x0 = -1.35;
  readonly x1 = 1.35;
  readonly y0 = -1.5;
  readonly y1 = 1.4;
  private z: Float32Array;
  private data: Float32Array; // u, v, nx, ny, nz

  constructor(geometry: THREE.BufferGeometry) {
    const N = this.N;
    this.z = new Float32Array(N * N).fill(-Infinity);
    this.data = new Float32Array(N * N * 5);
    const pos = geometry.attributes.position as THREE.BufferAttribute;
    const nor = geometry.attributes.normal as THREE.BufferAttribute;
    const uv = geometry.attributes.uv as THREE.BufferAttribute;
    const index = geometry.index!;
    const sx = (N - 1) / (this.x1 - this.x0);
    const sy = (N - 1) / (this.y1 - this.y0);
    for (let t = 0; t < index.count; t += 3) {
      const a = index.getX(t);
      const b = index.getX(t + 1);
      const c = index.getX(t + 2);
      const za = pos.getZ(a);
      const zb = pos.getZ(b);
      const zc = pos.getZ(c);
      if (za < -0.1 && zb < -0.1 && zc < -0.1) continue;
      const ax = (pos.getX(a) - this.x0) * sx;
      const ay = (pos.getY(a) - this.y0) * sy;
      const bx = (pos.getX(b) - this.x0) * sx;
      const by = (pos.getY(b) - this.y0) * sy;
      const cx = (pos.getX(c) - this.x0) * sx;
      const cy = (pos.getY(c) - this.y0) * sy;
      const minX = Math.max(0, Math.floor(Math.min(ax, bx, cx)));
      const maxX = Math.min(N - 1, Math.ceil(Math.max(ax, bx, cx)));
      const minY = Math.max(0, Math.floor(Math.min(ay, by, cy)));
      const maxY = Math.min(N - 1, Math.ceil(Math.max(ay, by, cy)));
      const det = (by - cy) * (ax - cx) + (cx - bx) * (ay - cy);
      if (Math.abs(det) < 1e-9) continue;
      for (let gy = minY; gy <= maxY; gy++) {
        for (let gx = minX; gx <= maxX; gx++) {
          const l1 = ((by - cy) * (gx - cx) + (cx - bx) * (gy - cy)) / det;
          const l2 = ((cy - ay) * (gx - cx) + (ax - cx) * (gy - cy)) / det;
          const l3 = 1 - l1 - l2;
          if (l1 < -1e-4 || l2 < -1e-4 || l3 < -1e-4) continue;
          const zz = l1 * za + l2 * zb + l3 * zc;
          const k = gy * N + gx;
          if (zz <= this.z[k]!) continue;
          this.z[k] = zz;
          const d = k * 5;
          // UVs wrap at the sphere seam (back of the head) — never visible from the front.
          this.data[d] = l1 * uv.getX(a) + l2 * uv.getX(b) + l3 * uv.getX(c);
          this.data[d + 1] = l1 * uv.getY(a) + l2 * uv.getY(b) + l3 * uv.getY(c);
          this.data[d + 2] = l1 * nor.getX(a) + l2 * nor.getX(b) + l3 * nor.getX(c);
          this.data[d + 3] = l1 * nor.getY(a) + l2 * nor.getY(b) + l3 * nor.getY(c);
          this.data[d + 4] = l1 * nor.getZ(a) + l2 * nor.getZ(b) + l3 * nor.getZ(c);
        }
      }
    }
  }

  /** Surface point at face-space (x, y), or null outside the silhouette. */
  hit(x: number, y: number, target?: SurfaceHit): SurfaceHit | null {
    const N = this.N;
    const fx = ((x - this.x0) / (this.x1 - this.x0)) * (N - 1);
    const fy = ((y - this.y0) / (this.y1 - this.y0)) * (N - 1);
    const ix = Math.floor(fx);
    const iy = Math.floor(fy);
    if (ix < 0 || iy < 0 || ix >= N - 1 || iy >= N - 1) return null;
    const tx = fx - ix;
    const ty = fy - iy;
    const ks = [iy * N + ix, iy * N + ix + 1, (iy + 1) * N + ix, (iy + 1) * N + ix + 1];
    const ws = [(1 - tx) * (1 - ty), tx * (1 - ty), (1 - tx) * ty, tx * ty];
    let wsum = 0;
    let z = 0;
    const acc = [0, 0, 0, 0, 0];
    for (let i = 0; i < 4; i++) {
      const k = ks[i]!;
      if (this.z[k] === -Infinity) continue;
      const w = ws[i]!;
      wsum += w;
      z += this.z[k]! * w;
      for (let j = 0; j < 5; j++) acc[j]! += this.data[k * 5 + j]! * w;
    }
    if (wsum < 0.25) return null;
    const out = target ?? { position: new THREE.Vector3(), normal: new THREE.Vector3(), uv: new THREE.Vector2() };
    out.position.set(x, y, z / wsum);
    out.uv.set(acc[0]! / wsum, acc[1]! / wsum);
    out.normal.set(acc[2]!, acc[3]!, acc[4]!).normalize();
    return out;
  }

  surfaceZ(x: number, y: number): number {
    return this.hit(x, y)?.position.z ?? 0;
  }

  /** Half-width of the head silhouette at height y (for ears, hair sides, glasses temples). */
  halfWidth(y: number): number {
    let lo = 0;
    let hi = 1.35;
    for (let i = 0; i < 18; i++) {
      const mid = (lo + hi) / 2;
      if (this.hit(mid, y)) lo = mid;
      else hi = mid;
    }
    return lo;
  }
}
