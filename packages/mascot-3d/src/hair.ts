import * as THREE from 'three';
import type { HairLook } from '@mascot/shared';
import { sculpt, type HeadParams } from './head';
import { buildHairdo, type HairResult } from './hairdo';
import { fbm3, gauss, lerp, rng, smoothstep } from './math';

export type { HairResult } from './hairdo';

/** Grayscale strand streaks (map + bump) so hair surfaces read as hair, not helmets. */
let strandTex: THREE.CanvasTexture | null = null;
export function strandTexture(): THREE.CanvasTexture {
  if (strandTex) return strandTex;
  const W = 1024;
  const H = 512;
  const c = typeof OffscreenCanvas !== 'undefined' ? new OffscreenCanvas(W, H) : Object.assign(document.createElement('canvas'), { width: W, height: H });
  const ctx = c.getContext('2d') as CanvasRenderingContext2D;
  ctx.fillStyle = 'rgb(205,205,205)';
  ctx.fillRect(0, 0, W, H);
  const r = rng(99);
  for (let i = 0; i < 2600; i++) {
    const x = r() * W;
    const v = Math.floor(150 + r() * 105);
    ctx.strokeStyle = `rgba(${v},${v},${v},${0.5 + r() * 0.5})`;
    ctx.lineWidth = 0.8 + r() * 2.2;
    ctx.beginPath();
    const y0 = r() * H * 0.3;
    ctx.moveTo(x, y0);
    ctx.bezierCurveTo(x + (r() - 0.5) * 20, y0 + H * 0.3, x + (r() - 0.5) * 20, y0 + H * 0.6, x + (r() - 0.5) * 14, y0 + H * (0.5 + r() * 0.5));
    ctx.stroke();
  }
  strandTex = new THREE.CanvasTexture(c as HTMLCanvasElement);
  strandTex.wrapS = strandTex.wrapT = THREE.RepeatWrapping;
  strandTex.anisotropy = 8;
  return strandTex;
}

/** Builds a hairstyle (see hairdo.ts for the recipe compiler). */
export function buildHair(look: HairLook, P: HeadParams, mat: THREE.Material, seed: number, detail: number, simple = false, collider?: (x: number, y: number, z: number) => number, skin?: THREE.Color, cacheKey?: string): HairResult {
  if (!cacheKey) return buildHairdo(look, P, mat, { seed, detail, simple, collider, skin });
  // Sculpted hair costs ~1 s; a sticker pack renders the same hair 62 times.
  let hit = hairCache.get(cacheKey);
  if (!hit) {
    hit = buildHairdo(look, P, mat, { seed, detail, simple, collider, skin });
    hit.group.traverse((o) => {
      const m = o as THREE.Mesh;
      if (!m.isMesh) return;
      m.geometry.userData.shared = true;
      for (const mm of Array.isArray(m.material) ? m.material : [m.material]) mm.userData.shared = true;
    });
    hairCache.set(cacheKey, hit);
    if (hairCache.size > 4) hairCache.delete(hairCache.keys().next().value!);
  } else {
    hairCache.delete(cacheKey);
    hairCache.set(cacheKey, hit);
  }
  return { group: hit.group.clone(true), crown: hit.crown };
}

const hairCache = new Map<string, HairResult>();

/** Tube with a radius that tapers from r0 to r1 along the curve. */
export function taperedTube(curve: THREE.Curve<THREE.Vector3>, segments: number, r0: number, r1: number, radial = 12): THREE.BufferGeometry {
  const geo = new THREE.TubeGeometry(curve, segments, 1, radial, false);
  const pos = geo.attributes.position as THREE.BufferAttribute;
  const c = new THREE.Vector3();
  const v = new THREE.Vector3();
  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    curve.getPointAt(t, c);
    const radius = lerp(r0, r1, t) * (t > 0.92 ? 1 - (t - 0.92) * 6 : 1);
    for (let j = 0; j <= radial; j++) {
      const k = i * (radial + 1) + j;
      v.fromBufferAttribute(pos, k).sub(c).multiplyScalar(radius);
      pos.setXYZ(k, c.x + v.x, c.y + v.y, c.z + v.z);
    }
  }
  geo.computeVertexNormals();
  return geo;
}

/* ----------------------------- facial hair ----------------------------- */

/**
 * Offset shell over the head where `mask(dir)` > 0: thickness eases in from the edge, so the
 * mass reads as one sculpted volume (Pixar-style beard) instead of a fur of spikes.
 */
function facialShell(P: HeadParams, mask: (d: THREE.Vector3, q: THREE.Vector3) => number, thickness: (q: THREE.Vector3) => number, base: THREE.Color): THREE.BufferGeometry {
  const geo = new THREE.SphereGeometry(1, 160, 120);
  const pos = geo.attributes.position as THREE.BufferAttribute;
  const colors = new Float32Array(pos.count * 4);
  const keep = new Uint8Array(pos.count);
  const d = new THREE.Vector3();
  const q = new THREE.Vector3();
  const out = new THREE.Vector3();
  for (let i = 0; i < pos.count; i++) {
    d.fromBufferAttribute(pos, i).normalize();
    sculpt(d, P, q);
    const m = mask(d, q);
    keep[i] = m > 0.02 ? 1 : 0;
    const t = 0.004 + thickness(q) * Math.pow(Math.max(0, m), 0.55);
    sculpt(d, P, out, 1 + t);
    pos.setXYZ(i, out.x, out.y, out.z);
    // Roots darker, tips lighter: depth without textures.
    const k = 0.72 + 0.28 * m;
    colors[i * 4] = base.r * k;
    colors[i * 4 + 1] = base.g * k;
    colors[i * 4 + 2] = base.b * k;
    // Edges fade out, hiding the grid's stair-stepped boundary.
    colors[i * 4 + 3] = smoothstep(0.02, 0.4, m);
  }
  const src = geo.index!;
  const idx: number[] = [];
  for (let i = 0; i < src.count; i += 3) {
    const a = src.getX(i);
    const b = src.getX(i + 1);
    const c = src.getX(i + 2);
    if (keep[a]! | keep[b]! | keep[c]!) idx.push(a, b, c);
  }
  geo.setIndex(idx);
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 4));
  geo.computeVertexNormals();
  return geo;
}

/** Swept moustache: chunky in the middle of each side, dipped at the philtrum, tapered tips. */
function moustacheGeometry(P: HeadParams, surfaceZ: (x: number, y: number) => number, scale: number): THREE.BufferGeometry {
  const my = P.mouthY;
  const n = 40;
  const radial = 14;
  const centres: THREE.Vector3[] = [];
  for (let i = 0; i <= n; i++) {
    const t = i / n;
    const x = (t - 0.5) * 0.66 * scale;
    const ax = Math.abs(x) / (0.33 * scale);
    const y = my + 0.125 - 0.1 * ax * ax;
    centres.push(new THREE.Vector3(x, y, surfaceZ(x, y) + 0.03));
  }
  const positions: number[] = [];
  const indices: number[] = [];
  const T = new THREE.Vector3();
  const depth = new THREE.Vector3();
  const up = new THREE.Vector3();
  for (let i = 0; i <= n; i++) {
    const t = i / n;
    const c = centres[i]!;
    T.subVectors(centres[Math.min(n, i + 1)]!, centres[Math.max(0, i - 1)]!).normalize();
    depth.set(0, 0, 1).addScaledVector(T, -T.z).normalize();
    up.crossVectors(T, depth).normalize();
    const side = Math.abs(t - 0.5) * 2;
    const r = (0.014 + 0.062 * Math.pow(Math.sin(Math.PI * t), 0.7)) * (1 - 0.32 * Math.exp(-(side * side) / 0.012)) * scale;
    for (let j = 0; j <= radial; j++) {
      const a = (j / radial) * Math.PI * 2;
      const ca = Math.cos(a);
      const sa = Math.sin(a);
      // Flat against the lip, fuller at the top edge.
      const dz = sa * r * 0.55 + r * 0.25;
      positions.push(c.x + up.x * ca * r + depth.x * dz, c.y + up.y * ca * r * (ca > 0 ? 1 : 0.8) + depth.y * dz, c.z + up.z * ca * r + depth.z * dz);
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < radial; j++) {
      const a = i * (radial + 1) + j;
      const b = a + radial + 1;
      indices.push(a, b, a + 1, b, b + 1, a + 1);
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setIndex(indices);
  geo.computeVertexNormals();
  return geo;
}

/** Sculpted beard / moustache / goatee volumes (stubble stays painted). */
export function buildFacialHair(kind: string, P: HeadParams, mat: THREE.Material, seed: number, surfaceZ: (x: number, y: number) => number): THREE.Group | null {
  if (kind === 'none' || kind === 'stubble') return null;
  void seed;
  const g = new THREE.Group();
  const my = P.mouthY;
  const base = (mat as THREE.MeshPhysicalMaterial).color.clone();
  const shellMat = (mat as THREE.MeshPhysicalMaterial).clone();
  shellMat.vertexColors = true;
  shellMat.transparent = true;
  shellMat.color = new THREE.Color('#ffffff');
  // Mouth opening stays clear whatever the expression.
  const mouthClear = (q: THREE.Vector3) => smoothstep(1, 1.6, Math.hypot(q.x / 0.36, (q.y - my + 0.06) / 0.15));
  const chinK = (q: THREE.Vector3) => gauss(q.x * q.x * 1.6 + (q.y + 0.95 * P.height) ** 2, 0.18);

  if (kind === 'short-beard' || kind === 'full-beard') {
    const full = kind === 'full-beard';
    // Beard line: sideburn → jaw → just under the mouth corners; cheeks stay clean.
    // Emoji head: the beard follows the jaw and climbs to the sideburn only near the ear, so the
    // cheeks stay clear (a line across the cheekbones reads as a ski mask).
    const line = (ax: number, d: THREE.Vector3) =>
      P.organic
        ? ax < 0.3
          ? my - 0.1
          : lerp(my - 0.02, -0.34, smoothstep(0.3, 0.78 * P.width, ax)) + 0.3 * smoothstep(0.5, 0.05, d.z)
        : ax < 0.36
          ? my - 0.1
          : lerp(my - 0.02, -0.06, smoothstep(0.36, 0.9 * P.width, ax));
    const mask = (d: THREE.Vector3, q: THREE.Vector3) =>
      smoothstep(0, 0.09, line(Math.abs(q.x), d) - q.y) * mouthClear(q) * smoothstep(-0.42, -0.12, d.z);
    const thick = (q: THREE.Vector3) => (full ? 0.06 + 0.11 * chinK(q) : 0.032 + 0.03 * chinK(q));
    const mesh = new THREE.Mesh(facialShell(P, mask, thick, base), shellMat);
    mesh.castShadow = true;
    g.add(mesh);
  }
  if (kind === 'goatee') {
    const mask = (d: THREE.Vector3, q: THREE.Vector3) =>
      smoothstep(0.22, 0.13, Math.abs(q.x)) * smoothstep(my - 0.05, my - 0.15, q.y) * mouthClear(q) * smoothstep(-0.2, 0.15, d.z);
    const mesh = new THREE.Mesh(facialShell(P, mask, (q) => 0.03 + 0.06 * chinK(q), base), shellMat);
    mesh.castShadow = true;
    g.add(mesh);
  }
  const stacheMat = (mat as THREE.MeshPhysicalMaterial).clone();
  stacheMat.color = base.clone().multiplyScalar(0.85);
  const stache = new THREE.Mesh(moustacheGeometry(P, surfaceZ, kind === 'full-beard' ? 1.12 : 1), stacheMat);
  stache.castShadow = true;
  g.add(stache);
  return g;
}
