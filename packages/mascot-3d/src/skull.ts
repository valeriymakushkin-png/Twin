import * as THREE from 'three';
import type { HeadParams } from './head';
import { polygonize, sdEllipsoid, sdRoundCone, smax, smin, type Sdf, type Vec3 } from './sdf';

/**
 * Sculpted cartoon head (signed-distance clay): cranium, brow ridge, temples, eye sockets,
 * cheekbones and apple cheeks, a real nose (bridge, tip, wings, nostrils), muzzle and lips,
 * jaw corners and chin, ears and a neck that flows out from under the jaw.
 *
 * Everything that sits on the head keeps using the same APIs: the polygonized mesh feeds the
 * FrontMap (face painting, brows, glasses), and a spherical radius map turns `sculpt(dir)`
 * into a lookup on this surface (hair shells, clumps, beards).
 */
export interface HeadShape {
  /** Head + ears + neck mesh with cylindrical UVs (front of the face at u = 0.5). */
  geometry: THREE.BufferGeometry;
  /** Eye centres for eyeballs sitting in the sockets. */
  eye: { x: number; y: number; z: number; r: number };
  /** Surface radius along a unit direction (no ears / neck). */
  radius(dx: number, dy: number, dz: number): number;
}

const NU = 160;
const NV = 80;

/** Face-shape dependent jaw-corner strength (square jaws). */
function jawCorner(P: HeadParams): number {
  return Math.max(0, Math.min(1, (P.jaw - 0.8) / 0.14));
}

export function headSdf(P: HeadParams, withExtras = true): Sdf {
  const W = P.width;
  const H = P.height;
  const D = P.depth;
  const tipY = -0.24 * P.noseLength;
  const nw = P.noseWidth;
  const ex = P.eyeX;
  const ey = P.eyeY;
  const my = P.mouthY;
  const corner = jawCorner(P);
  const k = Math.min(W, H, D);
  return (x0, y0, z0) => {
    const x = x0 / W;
    const y = y0 / H;
    const z = z0 / D;
    const ax = Math.abs(x);
    // Cranium (fuller at the back) + forehead.
    let d = sdEllipsoid(x, y, z, 0, 0.22, -0.04, 1.06 * (0.94 + 0.06 * P.forehead), 1.02, 0.96);
    // Face mass, jaw, jaw corners, chin.
    d = smin(d, sdEllipsoid(x, y, z, 0, -0.24, 0.2, 0.68, 0.68, 0.72), 0.5);
    d = smin(d, sdEllipsoid(x, y, z, 0, -0.55, 0.12, 0.48 * P.jaw, 0.31, 0.54), 0.42);
    if (corner > 0) d = smin(d, sdEllipsoid(ax, y, z, 0.44 * P.jaw, -0.58, -0.02, 0.18, 0.2 * corner + 0.05, 0.28), 0.3);
    d = smin(d, sdEllipsoid(x, y, z, 0, -0.83 + 0.04 * (1 - P.chin), 0.36 + 0.06 * P.chin, 0.21 - 0.05 * P.chin, 0.16, 0.19), 0.24);
    // Features only where they can matter (each test bounds the feature plus its blend radius).
    if (z > -0.05 && y < 0.4 && y > -0.85) {
      // Cheekbones and apple cheeks.
      d = smin(d, sdEllipsoid(ax, y, z, 0.54, -0.08, 0.46, 0.2, 0.14, 0.2), 0.28);
      d = smin(d, sdEllipsoid(ax, y, z, 0.38, -0.32, 0.6, 0.2 * P.cheek, 0.18, 0.2), 0.3);
    }
    // Brow ridge (slight arch) — gives the eyes a ledge and the face a profile.
    if (z > 0.4 && y > 0.0 && y < 0.55) d = smin(d, sdRoundCone(ax, y, z, [0, 0.3, 0.8], [0.5, 0.26, 0.66], 0.075, 0.06), 0.16);
    // Temples: slight hollows so the skull never reads as a ball.
    if (ax > 0.6 && y > -0.3 && y < 0.65) d = smax(d, -sdEllipsoid(ax, y, z, 0.97, 0.16, 0.3, 0.12, 0.22, 0.26), 0.25);
    // Eye sockets.
    if (z > 0.55 && ax < 0.7 && Math.abs(y - ey) < 0.32) d = smax(d, -sdEllipsoid(ax, y, z, ex, ey + 0.01, 0.88, 0.225, 0.205, 0.16), 0.07);
    if (z > 0.22 && ax < 0.6 && y < my + 0.5 && y > my - 0.46) {
      // Muzzle, lips, philtrum.
      d = smin(d, sdEllipsoid(x, y, z, 0, my + 0.03, 0.7, 0.36, 0.26, 0.26), 0.2);
      d = smin(d, sdRoundCone(ax, y, z, [0, my + 0.04, 0.93], [0.16, my + 0.02, 0.87], 0.04, 0.026), 0.04);
      d = smin(d, sdEllipsoid(x, y, z, 0, my - 0.05, 0.89, 0.15, 0.05, 0.055), 0.05);
      d = smax(d, -sdEllipsoid(x, y, z, 0, my, 0.95, 0.19, 0.011, 0.06), 0.012);
      d = smax(d, -sdRoundCone(x, y, z, [0, tipY - 0.12, 0.98], [0, my + 0.08, 0.94], 0.018, 0.022), 0.02);
    }
    if (z > 0.65 && ax < 0.38 && y < 0.36 && y > tipY - 0.25) {
      // Nose: bridge, tip, wings; nostrils.
      let nose = sdRoundCone(x, y, z, [0, 0.2, 0.86], [0, tipY + 0.07, 1.0 + 0.02 * P.noseBridge], 0.05 * P.noseBridge + 0.012, 0.07);
      nose = smin(nose, sdEllipsoid(x, y, z, 0, tipY + 0.015 * P.noseUp, 1.04, 0.1 * P.noseTip * Math.max(0.85, nw * 0.85), 0.09 * P.noseTip, 0.09), 0.06);
      nose = smin(nose, sdEllipsoid(ax, y, z, 0.095 * nw, tipY - 0.03, 0.95, 0.07, 0.06, 0.065), 0.05);
      d = smin(d, nose, 0.07);
      d = smax(d, -sdEllipsoid(ax, y, z, 0.048 * nw, tipY - 0.075, 1.0, 0.03, 0.017, 0.04), 0.015);
    }
    const ey2 = ey - 0.16;
    if (withExtras && ax > 0.62 && Math.abs(y - ey2) < 0.52 && z > -0.5 && z < 0.4) {
      // Ears: rim with a hollow, angled back; lobe.
      const c = Math.cos(0.4);
      const s = Math.sin(0.4);
      const lx = ax - 0.93;
      const lz = z + 0.06;
      const rx = lx * c - lz * s;
      const rz = lx * s + lz * c;
      let ear = sdEllipsoid(rx, y, rz, 0, ey2, 0, 0.07, 0.23, 0.15);
      ear = smax(ear, -sdEllipsoid(rx, y, rz, 0.05, ey2 + 0.01, 0.01, 0.045, 0.15, 0.09), 0.03);
      ear = smin(ear, sdEllipsoid(rx, y, rz, 0.01, ey2 - 0.2, 0.02, 0.05, 0.07, 0.07), 0.04);
      d = smin(d, ear, 0.06);
    }
    // Neck from under the jaw / back of the head.
    if (withExtras && y < 0) d = smin(d, sdRoundCone(x, y, z, [0, -0.5, -0.2], [0, -1.62, -0.12], 0.3, 0.35), 0.16);
    return d * k;
  };
}

/** Rewraps triangles that straddle the cylindrical UV seam (back of the head). */
function fixSeam(geo: THREE.BufferGeometry): THREE.BufferGeometry {
  const uv = geo.attributes.uv as THREE.BufferAttribute;
  const pos = geo.attributes.position as THREE.BufferAttribute;
  const nor = geo.attributes.normal as THREE.BufferAttribute;
  const index = Array.from(geo.index!.array);
  const extraPos: number[] = [];
  const extraNor: number[] = [];
  const extraUv: number[] = [];
  let next = pos.count;
  const dup = new Map<number, number>();
  for (let t = 0; t < index.length; t += 3) {
    const us = [uv.getX(index[t]!), uv.getX(index[t + 1]!), uv.getX(index[t + 2]!)];
    if (Math.max(...us) - Math.min(...us) < 0.5) continue;
    for (let j = 0; j < 3; j++) {
      const v = index[t + j]!;
      if (us[j]! >= 0.5) continue;
      let nv = dup.get(v);
      if (nv === undefined) {
        nv = next++;
        dup.set(v, nv);
        extraPos.push(pos.getX(v), pos.getY(v), pos.getZ(v));
        extraNor.push(nor.getX(v), nor.getY(v), nor.getZ(v));
        extraUv.push(uv.getX(v) + 1, uv.getY(v));
      }
      index[t + j] = nv;
    }
  }
  if (!extraPos.length) return geo;
  const merge = (a: THREE.BufferAttribute, extra: number[], size: number) => {
    const out = new Float32Array((a.count + extra.length / size) * size);
    out.set(a.array as Float32Array);
    out.set(extra, a.count * size);
    return new THREE.BufferAttribute(out, size);
  };
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', merge(pos, extraPos, 3));
  g.setAttribute('normal', merge(nor, extraNor, 3));
  g.setAttribute('uv', merge(uv, extraUv, 2));
  g.setIndex(index);
  return g;
}

const radiusCache = new Map<string, (dx: number, dy: number, dz: number) => number>();
const cache = new Map<string, HeadShape>();

/** Spherical radius map of the core head (no ears / neck), star-shaped from the centre. */
export function headRadius(P: HeadParams): (dx: number, dy: number, dz: number) => number {
  const key = JSON.stringify(P);
  const hit = radiusCache.get(key);
  if (hit) return hit;
  const core = headSdf(P, false);
  const radii = new Float32Array(NU * NV);
  for (let j = 0; j < NV; j++) {
    const theta = ((j + 0.5) / NV) * Math.PI;
    const st = Math.sin(theta);
    const dy = Math.cos(theta);
    for (let i = 0; i < NU; i++) {
      const phi = (i / NU) * Math.PI * 2;
      const dx = st * Math.sin(phi);
      const dz = st * Math.cos(phi);
      let lo = 0.3;
      let hi = 1.8;
      for (let it = 0; it < 14; it++) {
        const mid = (lo + hi) / 2;
        if (core(dx * mid, dy * mid, dz * mid) < 0) lo = mid;
        else hi = mid;
      }
      radii[j * NU + i] = (lo + hi) / 2;
    }
  }
  const radius = (dx: number, dy: number, dz: number) => {
    const l = Math.hypot(dx, dy, dz) || 1;
    const theta = Math.acos(Math.max(-1, Math.min(1, dy / l)));
    let phi = Math.atan2(dx, dz);
    if (phi < 0) phi += Math.PI * 2;
    const fu = (phi / (Math.PI * 2)) * NU;
    const fv = Math.max(0, Math.min(NV - 1.001, (theta / Math.PI) * NV - 0.5));
    const i0 = Math.floor(fu) % NU;
    const i1 = (i0 + 1) % NU;
    const j0 = Math.floor(fv);
    const j1 = Math.min(NV - 1, j0 + 1);
    const tu = fu - Math.floor(fu);
    const tv = fv - j0;
    const a = radii[j0 * NU + i0]! * (1 - tu) + radii[j0 * NU + i1]! * tu;
    const b = radii[j1 * NU + i0]! * (1 - tu) + radii[j1 * NU + i1]! * tu;
    return a * (1 - tv) + b * tv;
  };
  radiusCache.set(key, radius);
  if (radiusCache.size > 12) radiusCache.delete(radiusCache.keys().next().value!);
  return radius;
}

export function headShape(P: HeadParams): HeadShape {
  const key = JSON.stringify(P);
  const hit = cache.get(key);
  if (hit) return hit;
  const radius = headRadius(P);

  const full = headSdf(P, true);
  const W = P.width;
  const H = P.height;
  const D = P.depth;
  const raw = polygonize(full, [-1.25 * W, -1.75 * H, -1.2 * D], [1.25 * W, 1.28 * H, 1.32 * D], 0.02);
  // Cylindrical UVs, front of the face at u = 0.5 (seam at the back, under the hair).
  const pos = raw.attributes.position as THREE.BufferAttribute;
  const uvs = new Float32Array(pos.count * 2);
  for (let i = 0; i < pos.count; i++) {
    uvs[i * 2] = 0.5 + Math.atan2(pos.getX(i), pos.getZ(i)) / (Math.PI * 2);
    uvs[i * 2 + 1] = 0.5 + pos.getY(i) / 3.2;
  }
  raw.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
  const geometry = fixSeam(raw);
  geometry.userData.shared = true;

  const shape: HeadShape = {
    geometry,
    eye: { x: P.eyeX * W, y: (P.eyeY + 0.01) * H, z: 0.78 * D, r: 0.215 },
    radius,
  };
  cache.set(key, shape);
  if (cache.size > 12) cache.delete(cache.keys().next().value!);
  return shape;
}

export type { Vec3 };
