import * as THREE from 'three';
import type { HeadParams } from './head';
import { headSdf } from './skull';
import { clamp, lerp, noise3, rng, smoothstep } from './math';

/**
 * Falling hair (bobs, long hair, mullets, shags) as one parametric sheet: it hangs from the
 * widest point of the head straight down, drapes over the shoulders, and is shaped into
 * rounded locks separated by soft grooves, with lock tips that end in a scalloped edge —
 * the clean sculpted look of emoji hair, built in milliseconds (no field sampling).
 */
export interface DrapeSpec {
  /** Bottom height (head space) at angle φ (0 = front, ±π = back). */
  bottom: (phi: number) => number;
  /** Top of the sheet (tucked under the scalp shell). */
  top: number;
  /** The sheet covers |φ| ≥ phi0 (the face stays open in front). */
  phi0: number;
  /** Locks around the full circle. */
  locks: number;
  /** Outward flare at the bottom (head units). */
  flare: number;
  /** Lock relief depth. */
  groove: number;
  thick: number;
  /** Lateral waves of the locks (amplitude in radians, cycles per head unit). */
  wave?: { amp: number; freq: number };
  /** Bumpy curls on the surface (0..1). */
  curls?: number;
  /** Ends flip outwards (0..1). */
  flip?: number;
  /** Ends curl under (0..1, blow-dry). */
  under?: number;
  /** Extra volume around the head (0..1). */
  volume?: number;
  seed: number;
}

type Collider = (x: number, y: number, z: number) => number;

const tableCache = new Map<string, Float32Array>();
const NPHI = 48;
const NY = 48;
const Y0 = -1.0;
const Y1 = 0.7;

/** Horizontal head radius per (φ, y), made monotone downwards (hair falls from the widest point). */
function hangTable(P: HeadParams): Float32Array {
  const key = JSON.stringify(P);
  const hit = tableCache.get(key);
  if (hit) return hit;
  const f = headSdf(P, false, false);
  const t = new Float32Array(NPHI * NY);
  for (let i = 0; i < NPHI; i++) {
    const phi = (i / NPHI) * Math.PI * 2;
    const sx = Math.sin(phi);
    const sz = Math.cos(phi);
    for (let j = 0; j < NY; j++) {
      const y = Y1 - ((Y1 - Y0) * j) / (NY - 1);
      let lo = 0;
      let hi = 1.6;
      if (f(0, y, 0) > 0) {
        t[i * NY + j] = 0;
        continue;
      }
      for (let it = 0; it < 12; it++) {
        const mid = (lo + hi) / 2;
        if (f(sx * mid, y, sz * mid) < 0) lo = mid;
        else hi = mid;
      }
      t[i * NY + j] = lo;
    }
    // Monotone: below the widest point the sheet keeps hanging straight.
    for (let j = 1; j < NY; j++) t[i * NY + j] = Math.max(t[i * NY + j]!, t[i * NY + j - 1]! * (j > 0 && Y1 - ((Y1 - Y0) * j) / (NY - 1) < 0.15 ? 1 : 0));
  }
  tableCache.set(key, t);
  if (tableCache.size > 12) tableCache.delete(tableCache.keys().next().value!);
  return t;
}

function headR(t: Float32Array, phi: number, y: number): number {
  let u = (phi / (Math.PI * 2)) % 1;
  if (u < 0) u += 1;
  const fi = u * NPHI;
  const i0 = Math.floor(fi) % NPHI;
  const i1 = (i0 + 1) % NPHI;
  const ti = fi - Math.floor(fi);
  const fj = clamp(((Y1 - y) / (Y1 - Y0)) * (NY - 1), 0, NY - 1.001);
  const j0 = Math.floor(fj);
  const tj = fj - j0;
  const at = (i: number) => t[i * NY + j0]! * (1 - tj) + t[i * NY + j0 + 1]! * tj;
  // Below the table, keep the lowest radius.
  return at(i0) * (1 - ti) + at(i1) * ti;
}

export function buildDrape(P: HeadParams, d: DrapeSpec, collider: Collider | undefined, color: THREE.Color, mat: THREE.Material): THREE.Mesh {
  const table = hangTable(P);
  const rand = rng(d.seed);
  const N = d.locks;
  const lockPhase = Array.from({ length: N }, () => rand());
  const lockLen = Array.from({ length: N }, () => (rand() - 0.5) * 0.08);
  const span = Math.PI * 2 - 2 * d.phi0;
  // Columns: several per lock so each lock is rounded.
  const PER = 6;
  const cols = Math.max(8, Math.round((span / (Math.PI * 2)) * N * PER));
  const rows = 46;
  const outer: THREE.Vector3[][] = [];
  const inner: THREE.Vector3[][] = [];
  const shade: number[][] = [];
  const uvs: Array<Array<[number, number]>> = [];
  const p = new THREE.Vector3();
  const n = new THREE.Vector3();
  const curls = d.curls ?? 0;
  const vol = d.volume ?? 0;

  for (let c = 0; c <= cols; c++) {
    const a = c / cols;
    // φ runs from the left front edge round the back to the right front edge.
    const phiBase = d.phi0 + a * span;
    const lockF = (phiBase / (Math.PI * 2)) * N;
    const k = Math.floor(lockF);
    const g = lockF - k - 0.5; // −0.5 … 0.5 across a lock
    const li = ((k % N) + N) % N;
    const bump = Math.sqrt(Math.max(0, 1 - (2 * g) ** 2)); // rounded lock profile
    const edgeW = 1.2 / Math.max(8, Math.round((span / (Math.PI * 2)) * N));
    const edgeK = Math.sqrt(smoothstep(0, edgeW, a) * smoothstep(1, 1 - edgeW, a)); // rounded front edges
    const yb = d.bottom(phiBase) + lockLen[li]! - 0.06 * (1 - bump) * 0.6;
    const col: THREE.Vector3[] = [];
    const colIn: THREE.Vector3[] = [];
    const colShade: number[] = [];
    const colUv: Array<[number, number]> = [];
    let prev: THREE.Vector3 | null = null;
    let along = 0;
    for (let r = 0; r <= rows; r++) {
      const v = r / rows;
      const y = lerp(d.top, yb, v);
      // Lock tips: narrower towards the very end so the bottom edge is scalloped.
      const tipK = smoothstep(0.82, 1, v);
      const wavePhi = d.wave ? d.wave.amp * Math.sin((d.top - y) * d.wave.freq * Math.PI * 2 + lockPhase[li]! * 6.28) * smoothstep(0, 0.2, v) : 0;
      const phi = phiBase + wavePhi;
      const hr = headR(table, phi, Math.max(Y0, y));
      const fall = smoothstep(0.15, -0.6, y);
      let rad = hr + 0.04 + d.thick * 0.5 + vol * 0.08 * (1 - fall * 0.5);
      rad += d.flare * smoothstep(0, 1, v) * v;
      // The top tucks under the scalp shell (no seam where the sheet begins).
      rad -= 0.09 * (1 - smoothstep(0, 0.22, v));
      rad += d.groove * (bump - 0.75) * (1 - 0.5 * tipK) - d.groove * tipK * (1 - bump) * 1.4;
      if (curls > 0) rad += curls * 0.07 * noise3(Math.cos(phi) * 4.5 + li, y * 4.5, Math.sin(phi) * 4.5);
      if (d.under) rad -= d.under * 0.12 * smoothstep(0.75, 1, v);
      let yy = y;
      if (d.flip) {
        rad += d.flip * 0.32 * smoothstep(0.72, 1, v) ** 1.5;
        yy += d.flip * 0.2 * smoothstep(0.78, 1, v) ** 2;
      }
      rad *= lerp(0.95, 1, edgeK);
      p.set(Math.sin(phi) * rad, yy, Math.cos(phi) * rad);
      // Drape over the shoulders and hood instead of passing through them.
      if (collider) {
        for (let it = 0; it < 4; it++) {
          const dist = collider(p.x, p.y, p.z);
          if (dist >= 0.05) break;
          const e = 0.01;
          n.set(collider(p.x + e, p.y, p.z) - collider(p.x - e, p.y, p.z), collider(p.x, p.y + e, p.z) - collider(p.x, p.y - e, p.z), collider(p.x, p.y, p.z + e) - collider(p.x, p.y, p.z - e));
          if (n.lengthSq() < 1e-12) break;
          p.addScaledVector(n.normalize(), 0.05 - dist);
        }
      }
      // Never move up the column (keeps the sheet clean where it rests on the shoulders).
      if (prev && p.y > prev.y - 0.004) p.y = prev.y - 0.004;
      if (prev) along += p.distanceTo(prev);
      prev = p.clone();
      col.push(p.clone());
      // Rounded front edges and lock tips: the sheet thins out instead of ending as a plank.
      const th = d.thick * lerp(1, 0.35, tipK) * (0.6 + 0.4 * bump) * lerp(0.25, 1, edgeK);
      const hor = new THREE.Vector3(p.x, 0, p.z).normalize();
      colIn.push(p.clone().addScaledVector(hor, -th));
      colShade.push((0.78 + 0.22 * bump) * lerp(0.9, 1, smoothstep(0, 0.3, v)));
      colUv.push([lockF * 0.35, along * 0.9]);
    }
    outer.push(col);
    inner.push(colIn);
    shade.push(colShade);
    uvs.push(colUv);
  }

  // Mesh: outer grid, inner grid (reversed), bottom rim and the two front edges.
  const pos: number[] = [];
  const colr: number[] = [];
  const uv: number[] = [];
  const idx: number[] = [];
  const W = cols + 1;
  const H = rows + 1;
  const push = (v: THREE.Vector3, s: number, t: [number, number]) => {
    pos.push(v.x, v.y, v.z);
    colr.push(color.r * s, color.g * s, color.b * s);
    uv.push(t[0], t[1]);
  };
  for (let c = 0; c < W; c++) for (let r = 0; r < H; r++) push(outer[c]![r]!, shade[c]![r]!, uvs[c]![r]!);
  const innerOff = pos.length / 3;
  for (let c = 0; c < W; c++) for (let r = 0; r < H; r++) push(inner[c]![r]!, shade[c]![r]! * 0.55, uvs[c]![r]!);
  const o = (c: number, r: number) => c * H + r;
  const i = (c: number, r: number) => innerOff + c * H + r;
  for (let c = 0; c < W - 1; c++) {
    for (let r = 0; r < H - 1; r++) {
      idx.push(o(c, r), o(c, r + 1), o(c + 1, r + 1), o(c, r), o(c + 1, r + 1), o(c + 1, r));
      idx.push(i(c, r), i(c + 1, r + 1), i(c, r + 1), i(c, r), i(c + 1, r), i(c + 1, r + 1));
    }
    // Bottom rim.
    idx.push(o(c, H - 1), i(c, H - 1), i(c + 1, H - 1), o(c, H - 1), i(c + 1, H - 1), o(c + 1, H - 1));
  }
  for (let r = 0; r < H - 1; r++) {
    idx.push(o(0, r), i(0, r), i(0, r + 1), o(0, r), i(0, r + 1), o(0, r + 1));
    idx.push(o(W - 1, r), o(W - 1, r + 1), i(W - 1, r + 1), o(W - 1, r), i(W - 1, r + 1), i(W - 1, r));
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute('color', new THREE.Float32BufferAttribute(colr, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  geo.setIndex(idx);
  geo.computeVertexNormals();
  const mesh = new THREE.Mesh(geo, mat);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  mesh.name = 'hair-drape';
  mesh.userData.outline = true;
  return mesh;
}
