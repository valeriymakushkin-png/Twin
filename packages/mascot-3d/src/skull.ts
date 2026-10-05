import * as THREE from 'three';
import type { HeadParams } from './head';
import { mouthKey, mouthSdf, surfaceSampler, type MouthSpec } from './mouth3d';
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
  /** Face depth around the mouth (before carving), for teeth and tongue. */
  mouthSurface?: (x: number, y: number) => number;
}

const NU = 160;
const NV = 80;

/** Face-shape dependent jaw-corner strength (square jaws). */
function jawCorner(P: HeadParams): number {
  return Math.max(0, Math.min(1, (P.jaw - 0.86) / 0.08));
}

/** Eyeball radius (head units) and how far it sits in front of the socket centre. */
export const EYE_R = 0.235;

/**
 * Emoji-style proportions: a big round cranium, full soft cheeks that carry the width down
 * to a small rounded chin, big eyes set into shallow sockets at mid-height, a small button
 * nose, a soft muzzle around the mouth, simple rounded ears and a slender neck.
 */
export function headSdf(P: HeadParams, withExtras = true, sockets = true): Sdf {
  const W = P.width;
  const H = P.height;
  const D = P.depth;
  const tipY = -0.27 * P.noseLength;
  const nw = P.noseWidth;
  const ex = P.eyeX;
  const ey = P.eyeY;
  const my = P.mouthY;
  const corner = jawCorner(P);
  const cheek = P.cheek;
  const jaw = P.jaw;
  const chin = P.chin;
  const k = Math.min(W, H, D);
  const er = EYE_R / k;
  const eyeZ = sockets ? eyeCentreZ(P) / D : 0;
  return (x0, y0, z0) => {
    const x = x0 / W;
    const y = y0 / H;
    const z = z0 / D;
    const ax = Math.abs(x);
    // Cranium (round, fuller at the back).
    let d = sdEllipsoid(x, y, z, 0, 0.12, -0.06, 1.02 * (0.95 + 0.05 * P.forehead), 0.9, 0.97);
    // Cheek mass: keeps the face wide and round down to the mouth.
    d = smin(d, sdEllipsoid(x, y, z, 0, -0.3, 0.08, 0.96 * (0.9 + 0.1 * cheek), 0.7, 0.84), 0.42);
    // Jaw → small rounded chin.
    d = smin(d, sdEllipsoid(x, y, z, 0, -0.6, 0.2, 0.68 * jaw, 0.38, 0.64), 0.36);
    if (corner > 0) d = smin(d, sdEllipsoid(ax, y, z, 0.46 * jaw, -0.62, 0.0, 0.18, 0.18 * corner + 0.06, 0.3), 0.3);
    d = smin(d, sdEllipsoid(x, y, z, 0, -0.84, 0.34 + 0.08 * chin, 0.26 - 0.05 * chin, 0.15, 0.2), 0.26);
    if (z > -0.1 && y < 0.3 && y > -0.95) {
      // Apple cheeks under the eyes.
      d = smin(d, sdEllipsoid(ax, y, z, 0.47, -0.26, 0.58, 0.25 * (0.85 + 0.15 * cheek), 0.2, 0.22), 0.26);
    }
    // Soft brow ridge.
    if (z > 0.45 && y > 0.05 && y < 0.6) d = smin(d, sdRoundCone(ax, y, z, [0, ey + 0.3, 0.86], [0.5, ey + 0.27, 0.7], 0.06, 0.05), 0.2);
    // Eye sockets: shallow bowls the eyeballs sit in (lids are separate shells).
    if (sockets && z > 0.5 && ax < 0.8 && Math.abs(y - ey) < 0.4) d = smax(d, -sdEllipsoid(ax, y, z, ex, ey, eyeZ, er * 1.2, er * 1.04, er * 1.0), 0.06);
    if (z > 0.2 && ax < 0.62 && y < my + 0.42 && y > my - 0.4) {
      // Muzzle around the mouth.
      d = smin(d, sdEllipsoid(x, y, z, 0, my + 0.02, 0.66, 0.36, 0.24, 0.3), 0.22);
    }
    if (z > 0.6 && ax < 0.3 && y < ey && y > tipY - 0.2) {
      // Button nose: faint bridge, round tip, small wings, nostrils.
      let nose = sdRoundCone(x, y, z, [0, ey - 0.12, 0.9], [0, tipY + 0.06, 0.97 + 0.012 * P.noseBridge], 0.012 + 0.01 * P.noseBridge, 0.05);
      nose = smin(nose, sdEllipsoid(x, y, z, 0, tipY + 0.012 * P.noseUp, 1.0, 0.085 * P.noseTip * Math.max(0.85, nw * 0.85), 0.075 * P.noseTip, 0.075), 0.05);
      nose = smin(nose, sdEllipsoid(ax, y, z, 0.07 * nw, tipY - 0.025, 0.94, 0.05, 0.045, 0.05), 0.04);
      d = smin(d, nose, 0.06);
      d = smax(d, -sdEllipsoid(ax, y, z, 0.04 * nw, tipY - 0.062, 0.97, 0.024, 0.013, 0.03), 0.012);
    }
    const ey2 = ey - 0.1;
    if (withExtras && ax > 0.66 && Math.abs(y - ey2) < 0.4 && z > -0.45 && z < 0.35) {
      // Ears: rounded rim with a soft hollow, angled back.
      const c = Math.cos(0.35);
      const s = Math.sin(0.35);
      const lx = ax - 0.95;
      const lz = z + 0.04;
      const rx = lx * c - lz * s;
      const rz = lx * s + lz * c;
      let ear = sdEllipsoid(rx, y, rz, 0, ey2, 0, 0.075, 0.2, 0.15);
      ear = smax(ear, -sdEllipsoid(rx, y, rz, 0.055, ey2 + 0.01, 0.01, 0.05, 0.13, 0.09), 0.035);
      d = smin(d, ear, 0.07);
    }
    // Slender neck from under the jaw / back of the head.
    if (withExtras && y < 0) d = smin(d, sdRoundCone(x, y, z, [0, -0.5, -0.16], [0, -1.62, -0.1], 0.3, 0.33), 0.18);
    return d * k;
  };
}

const eyeZCache = new Map<string, number>();

/** Eyeball centre depth: the face surface in front of the eye minus most of the eyeball. */
export function eyeCentreZ(P: HeadParams): number {
  const key = JSON.stringify(P);
  const hit = eyeZCache.get(key);
  if (hit !== undefined) return hit;
  const f = headSdf(P, false, false);
  const x = P.eyeX * P.width;
  const y = P.eyeY * P.height;
  let z = 1.6;
  while (z > 0 && f(x, y, z) > 0) z -= 0.005;
  const out = z - EYE_R * 0.84;
  eyeZCache.set(key, out);
  return out;
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

export function headShape(P: HeadParams, mouth?: MouthSpec): HeadShape {
  const key = JSON.stringify(P) + (mouth ? mouthKey(mouth) : '');
  const hit = cache.get(key);
  if (hit) return hit;
  const radius = headRadius(P);

  const base = headSdf(P, true);
  let full = base;
  let mouthSurface: ((x: number, y: number) => number) | undefined;
  if (mouth) {
    mouthSurface = surfaceSampler(base, mouth.y - 0.45, mouth.y + 0.32, 0.5);
    const m = mouthSdf(mouth, mouthSurface);
    const [x0, x1, y0, y1] = m.box;
    full = (x, y, z) => {
      let d = base(x, y, z);
      if (x < x0 || x > x1 || y < y0 || y > y1 || z < 0.3) return d;
      d = smin(d, m.lips(x, y, z), 0.022);
      return smax(d, -m.cavity(x, y, z), 0.012);
    };
  }
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
    eye: { x: P.eyeX * W, y: P.eyeY * H, z: eyeCentreZ(P), r: EYE_R },
    radius,
    mouthSurface,
  };
  cache.set(key, shape);
  if (cache.size > 12) cache.delete(cache.keys().next().value!);
  return shape;
}

export type { Vec3 };
