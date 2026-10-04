import * as THREE from 'three';

/**
 * Signed-distance "clay" toolkit: bodies and hands are written as smooth unions of simple
 * primitives and turned into meshes with surface nets. Smooth blends (shoulders into arms,
 * fingers into palms) are what make a character read as sculpted rather than assembled.
 */
export type Sdf = (x: number, y: number, z: number) => number;
export type Vec3 = [number, number, number];

/* ----------------------------- primitives ----------------------------- */

export function sdSphere(x: number, y: number, z: number, cx: number, cy: number, cz: number, r: number): number {
  return Math.hypot(x - cx, y - cy, z - cz) - r;
}

/** Ellipsoid (bounded approximation, good near the surface). */
export function sdEllipsoid(x: number, y: number, z: number, cx: number, cy: number, cz: number, rx: number, ry: number, rz: number): number {
  const px = (x - cx) / rx;
  const py = (y - cy) / ry;
  const pz = (z - cz) / rz;
  const k0 = Math.hypot(px, py, pz);
  const k1 = Math.hypot(px / rx, py / ry, pz / rz);
  return k1 === 0 ? -Math.min(rx, ry, rz) : (k0 * (k0 - 1)) / k1;
}

/** Capsule with different end radii ("round cone") between a and b. */
export function sdRoundCone(x: number, y: number, z: number, a: Vec3, b: Vec3, ra: number, rb: number): number {
  const bax = b[0] - a[0];
  const bay = b[1] - a[1];
  const baz = b[2] - a[2];
  const pax = x - a[0];
  const pay = y - a[1];
  const paz = z - a[2];
  const l2 = bax * bax + bay * bay + baz * baz;
  const h = Math.min(1, Math.max(0, (pax * bax + pay * bay + paz * baz) / l2));
  const dx = pax - bax * h;
  const dy = pay - bay * h;
  const dz = paz - baz * h;
  return Math.hypot(dx, dy, dz) - (ra + (rb - ra) * h);
}

/** Rounded box centred at c with half extents h and corner radius r (axis aligned). */
export function sdRoundBox(x: number, y: number, z: number, cx: number, cy: number, cz: number, hx: number, hy: number, hz: number, r: number): number {
  const qx = Math.abs(x - cx) - hx + r;
  const qy = Math.abs(y - cy) - hy + r;
  const qz = Math.abs(z - cz) - hz + r;
  const ox = Math.max(qx, 0);
  const oy = Math.max(qy, 0);
  const oz = Math.max(qz, 0);
  return Math.hypot(ox, oy, oz) + Math.min(Math.max(qx, qy, qz), 0) - r;
}

/** Torus lying in the XZ plane around c (major radius R scaled by sx/sz, tube radius r). */
export function sdTorus(x: number, y: number, z: number, cx: number, cy: number, cz: number, R: number, r: number, sx = 1, sz = 1): number {
  const px = (x - cx) / sx;
  const pz = (z - cz) / sz;
  const q = Math.hypot(px, pz) - R;
  return Math.hypot(q, y - cy) - r;
}

/* ----------------------------- operators ----------------------------- */

/** Polynomial smooth minimum (k = blend radius). */
export function smin(a: number, b: number, k: number): number {
  if (k <= 0) return Math.min(a, b);
  const h = Math.max(k - Math.abs(a - b), 0) / k;
  return Math.min(a, b) - h * h * k * 0.25;
}

export function smax(a: number, b: number, k: number): number {
  return -smin(-a, -b, k);
}

/* ----------------------------- polygonizer ----------------------------- */

export interface PolygonizeOptions {
  /** Per-vertex colour (linear RGB, 0..1) from position and normal. */
  color?: (x: number, y: number, z: number, nx: number, ny: number, nz: number) => Vec3;
  /** Darken creases with SDF ambient occlusion baked into vertex colours (0 = off). */
  ao?: number;
  /** Extra geometry that occludes (AO only), e.g. the torso behind a sleeve. */
  occluder?: Sdf;
  /** Emit planar-projected UVs (scale = texture repeats per unit) for detail/bump maps. */
  uvScale?: number;
}

/**
 * Surface nets over a narrow band: blocks whose centre is provably far from the surface are
 * skipped (Lipschitz bound), so a body costs a few hundred thousand SDF samples, not millions.
 * Vertices are snapped onto the surface with one Newton step; normals come from the gradient.
 */
export function polygonize(f: Sdf, min: Vec3, max: Vec3, step: number, opts: PolygonizeOptions = {}): THREE.BufferGeometry {
  const nx = Math.ceil((max[0] - min[0]) / step) + 1;
  const ny = Math.ceil((max[1] - min[1]) / step) + 1;
  const nz = Math.ceil((max[2] - min[2]) / step) + 1;
  const sxy = nx * ny;
  const values = new Float32Array(nx * ny * nz);
  // Two-level narrow band: 8³ blocks far from the surface are filled from their centre value,
  // near ones are refined in 2³ sub-blocks, and only sub-blocks near the surface are sampled.
  const fill = (i0: number, i1: number, j0: number, j1: number, k0: number, k1: number, v: number) => {
    for (let k = k0; k < k1; k++) for (let j = j0; j < j1; j++) values.fill(v, k * sxy + j * nx + i0, k * sxy + j * nx + i1);
  };
  const lip = 1.25;
  const block = (B: number, i0: number, j0: number, k0: number, i1: number, j1: number, k1: number) => {
    const cx = min[0] + ((i0 + i1 - 1) / 2) * step;
    const cy = min[1] + ((j0 + j1 - 1) / 2) * step;
    const cz = min[2] + ((k0 + k1 - 1) / 2) * step;
    const dc = f(cx, cy, cz);
    const half = Math.hypot(i1 - i0 - 1, j1 - j0 - 1, k1 - k0 - 1) * 0.5 * step;
    if (Math.abs(dc) > (half + step) * lip) {
      fill(i0, i1, j0, j1, k0, k1, dc);
      return;
    }
    if (B > 2) {
      const h = B >> 2;
      for (let k = k0; k < k1; k += h) for (let j = j0; j < j1; j += h) for (let i = i0; i < i1; i += h) block(h, i, j, k, Math.min(i1, i + h), Math.min(j1, j + h), Math.min(k1, k + h));
      return;
    }
    for (let k = k0; k < k1; k++) {
      for (let j = j0; j < j1; j++) {
        let idx = k * sxy + j * nx + i0;
        for (let i = i0; i < i1; i++, idx++) values[idx] = f(min[0] + i * step, min[1] + j * step, min[2] + k * step);
      }
    }
  };
  const TOP = 8;
  for (let k = 0; k < nz; k += TOP) for (let j = 0; j < ny; j += TOP) for (let i = 0; i < nx; i += TOP) block(TOP, i, j, k, Math.min(nx, i + TOP), Math.min(ny, j + TOP), Math.min(nz, k + TOP));

  // One vertex per sign-changing cell.
  const cellVert = new Int32Array((nx - 1) * (ny - 1) * (nz - 1)).fill(-1);
  const cxy = (nx - 1) * (ny - 1);
  const pos: number[] = [];
  const EDGES = [
    [0, 1], [2, 3], [4, 5], [6, 7],
    [0, 2], [1, 3], [4, 6], [5, 7],
    [0, 4], [1, 5], [2, 6], [3, 7],
  ];
  const cv = new Float32Array(8);
  for (let k = 0; k < nz - 1; k++) {
    for (let j = 0; j < ny - 1; j++) {
      for (let i = 0; i < nx - 1; i++) {
        let mask = 0;
        for (let c = 0; c < 8; c++) {
          const v = values[(k + (c >> 2)) * sxy + (j + ((c >> 1) & 1)) * nx + i + (c & 1)]!;
          cv[c] = v;
          if (v < 0) mask |= 1 << c;
        }
        if (mask === 0 || mask === 255) continue;
        let ax = 0;
        let ay = 0;
        let az = 0;
        let n = 0;
        for (const [a, b] of EDGES) {
          const va = cv[a!]!;
          const vb = cv[b!]!;
          if (va < 0 === vb < 0) continue;
          const t = va / (va - vb);
          ax += (a! & 1) + ((b! & 1) - (a! & 1)) * t;
          ay += ((a! >> 1) & 1) + (((b! >> 1) & 1) - ((a! >> 1) & 1)) * t;
          az += (a! >> 2) + ((b! >> 2) - (a! >> 2)) * t;
          n++;
        }
        const px = min[0] + (i + ax / n) * step;
        const py = min[1] + (j + ay / n) * step;
        const pz = min[2] + (k + az / n) * step;
        cellVert[k * cxy + j * (nx - 1) + i] = pos.length / 3;
        pos.push(px, py, pz);
      }
    }
  }

  const cell = (i: number, j: number, k: number) => cellVert[k * cxy + j * (nx - 1) + i]!;
  const index: number[] = [];
  const quad = (a: number, b: number, c: number, d: number, flip: boolean) => {
    if (a < 0 || b < 0 || c < 0 || d < 0) return;
    if (flip) index.push(a, c, b, a, d, c);
    else index.push(a, b, c, a, c, d);
  };
  for (let k = 1; k < nz - 1; k++) {
    for (let j = 1; j < ny - 1; j++) {
      for (let i = 1; i < nx - 1; i++) {
        const v0 = values[k * sxy + j * nx + i]! < 0;
        // x edge
        if (i < nx - 1 && v0 !== values[k * sxy + j * nx + i + 1]! < 0) quad(cell(i, j - 1, k - 1), cell(i, j, k - 1), cell(i, j, k), cell(i, j - 1, k), !v0);
        // y edge
        if (j < ny - 1 && v0 !== values[k * sxy + (j + 1) * nx + i]! < 0) quad(cell(i - 1, j, k - 1), cell(i - 1, j, k), cell(i, j, k), cell(i, j, k - 1), !v0);
        // z edge
        if (k < nz - 1 && v0 !== values[(k + 1) * sxy + j * nx + i]! < 0) quad(cell(i - 1, j - 1, k), cell(i, j - 1, k), cell(i, j, k), cell(i - 1, j, k), !v0);
      }
    }
  }

  // Tetrahedral gradient (4 samples) gives both the normal and a Newton step onto the surface;
  // optional colours with baked AO.
  const count = pos.length / 3;
  const normals = new Float32Array(count * 3);
  const colors = opts.color || opts.ao ? new Float32Array(count * 3) : null;
  const h = step * 0.35;
  for (let v = 0; v < count; v++) {
    let x = pos[v * 3]!;
    let y = pos[v * 3 + 1]!;
    let z = pos[v * 3 + 2]!;
    const a = f(x + h, y - h, z - h);
    const b = f(x - h, y - h, z + h);
    const c = f(x - h, y + h, z - h);
    const d = f(x + h, y + h, z + h);
    let gx = a - b - c + d;
    let gy = -a - b + c + d;
    let gz = -a + b - c + d;
    const gl = Math.hypot(gx, gy, gz) || 1;
    gx /= gl;
    gy /= gl;
    gz /= gl;
    const dist = Math.max(-step, Math.min(step, (a + b + c + d) * 0.25));
    x -= gx * dist;
    y -= gy * dist;
    z -= gz * dist;
    pos[v * 3] = x;
    pos[v * 3 + 1] = y;
    pos[v * 3 + 2] = z;
    normals[v * 3] = gx;
    normals[v * 3 + 1] = gy;
    normals[v * 3 + 2] = gz;
    if (colors) {
      const col = opts.color ? opts.color(x, y, z, gx, gy, gz) : ([1, 1, 1] as Vec3);
      let occ = 1;
      if (opts.ao) {
        let sum = 0;
        let w = 0;
        for (const s of [0.08, 0.22]) {
          const qx = x + gx * s;
          const qy = y + gy * s;
          const qz = z + gz * s;
          const sd = opts.occluder ? Math.min(f(qx, qy, qz), opts.occluder(qx, qy, qz)) : f(qx, qy, qz);
          sum += Math.max(0, Math.min(1, sd / s)) / s;
          w += 1 / s;
        }
        occ = 1 - opts.ao * (1 - sum / w);
      }
      colors[v * 3] = col[0] * occ;
      colors[v * 3 + 1] = col[1] * occ;
      colors[v * 3 + 2] = col[2] * occ;
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute('normal', new THREE.BufferAttribute(normals, 3));
  if (opts.uvScale) {
    // Projection along the dominant normal axis (cheap triplanar): fine fabric detail only.
    const uv = new Float32Array(count * 2);
    for (let v = 0; v < count; v++) {
      const ax = Math.abs(normals[v * 3]!);
      const ay = Math.abs(normals[v * 3 + 1]!);
      const az = Math.abs(normals[v * 3 + 2]!);
      const x = pos[v * 3]!;
      const y = pos[v * 3 + 1]!;
      const z = pos[v * 3 + 2]!;
      const [a, b] = az >= ax && az >= ay ? [x, y] : ax >= ay ? [z, y] : [x, z];
      uv[v * 2] = a * opts.uvScale;
      uv[v * 2 + 1] = b * opts.uvScale;
    }
    geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  }
  if (colors) geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  geo.setIndex(index);
  return geo;
}

/** Front-most surface point along -z at (x, y), by bisection (null if the ray misses). */
export function probeFront(f: Sdf, x: number, y: number, zFrom = 3, zTo = -1.5): number | null {
  let hi = zFrom;
  if (f(x, y, hi) < 0) return hi;
  // March until inside.
  let z = hi;
  const dz = 0.03;
  while (z > zTo) {
    const d = f(x, y, z);
    if (d < 0) break;
    hi = z;
    z -= Math.max(dz, d * 0.9);
  }
  if (z <= zTo) return null;
  let lo = z;
  for (let i = 0; i < 24; i++) {
    const mid = (lo + hi) / 2;
    if (f(x, y, mid) < 0) lo = mid;
    else hi = mid;
  }
  return (lo + hi) / 2;
}

/** Unit normal of the SDF at p. */
export function sdfNormal(f: Sdf, x: number, y: number, z: number, eps = 0.005): THREE.Vector3 {
  return new THREE.Vector3(
    f(x + eps, y, z) - f(x - eps, y, z),
    f(x, y + eps, z) - f(x, y - eps, z),
    f(x, y, z + eps) - f(x, y, z - eps),
  ).normalize();
}
