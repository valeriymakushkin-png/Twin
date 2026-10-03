import * as THREE from 'three';
import { sculpt, type HeadParams } from './head';
import { lerp, smoothstep } from './math';

/**
 * Stylised hair clumps: ribbons that start on the scalp and follow a flow field over the
 * sculpted head surface (optionally falling with gravity past the head). Hundreds of them,
 * merged into one geometry, read as groomed 3D hair rather than a helmet.
 */
export interface ClumpSpec {
  count: number;
  /** Root acceptance on the unit sphere. */
  region: (d: THREE.Vector3) => boolean;
  /** Flow direction at d (any vector; projected onto the tangent plane). */
  flow: (d: THREE.Vector3, out: THREE.Vector3) => THREE.Vector3;
  /** Path length along the sphere (radians). */
  length: (d: THREE.Vector3, r: number) => number;
  /** Max height above the scalp along the clump. */
  lift: (d: THREE.Vector3, u: number) => number;
  base: number;
  /** Root half-width / half-thickness. */
  width: [number, number];
  thickness: number;
  /** Tip width factor. */
  tip: number;
  /** World units of free fall once the path drops below `fallFrom` (long hair). */
  fall?: (d: THREE.Vector3, r: number) => number;
  fallFrom?: number;
  /** Outward splay while falling. */
  splay?: number;
  segments?: number;
  colorJitter?: number;
  /** Clumps stop when their path drops below this height (dir.y) — keeps short cuts off the face. */
  floor?: (d: THREE.Vector3) => number;
}

const C = new THREE.Vector3();

export function buildClumps(P: HeadParams, spec: ClumpSpec, rand: () => number, baseColor: THREE.Color): THREE.BufferGeometry {
  const positions: number[] = [];
  const uvs: number[] = [];
  const colors: number[] = [];
  const indices: number[] = [];
  const radial = 8;
  const segs = spec.segments ?? 14;

  // Fibonacci roots, oversampled then filtered by region.
  const roots: THREE.Vector3[] = [];
  const n = spec.count * 6;
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < n && roots.length < spec.count; i++) {
    const k = (i + rand() * 0.5) / n;
    const y = 1 - k * 2;
    const rad = Math.sqrt(Math.max(0, 1 - y * y));
    const th = golden * i;
    const d = new THREE.Vector3(Math.cos(th) * rad, y, Math.sin(th) * rad);
    if (spec.region(d)) roots.push(d);
  }

  const dir = new THREE.Vector3();
  const t = new THREE.Vector3();
  const p = new THREE.Vector3();
  const centers: THREE.Vector3[] = [];
  const tmpColor = new THREE.Color();

  for (const root of roots) {
    const r = rand();
    centers.length = 0;
    dir.copy(root);
    const len = spec.length(root, r);
    const fallLen = spec.fall ? spec.fall(root, r) : 0;
    const fallFrom = spec.fallFrom ?? -2;
    const ds = len / segs;
    let falling = false;
    let fallStep = 0;
    let fallen = 0;
    const steps = segs + (fallLen > 0 ? Math.ceil(segs * 0.9) : 0);
    for (let i = 0; i <= steps; i++) {
      const u = i / steps;
      if (!falling) {
        sculpt(dir, P, p, 1 + spec.base + spec.lift(dir, Math.min(1, i / segs)));
        centers.push(p.clone());
        if (i < segs) {
          spec.flow(dir, t);
          t.addScaledVector(dir, -t.dot(dir));
          if (t.lengthSq() < 1e-8) t.set(0, -1, 0);
          t.normalize();
          dir.addScaledVector(t, ds).normalize();
          if (spec.floor && dir.y < spec.floor(dir)) break;
          if (fallLen > 0 && dir.y < fallFrom) {
            falling = true;
            fallStep = fallLen / Math.max(1, steps - i - 1);
          }
        } else if (fallLen > 0) {
          falling = true;
          fallStep = fallLen / Math.max(1, steps - i);
        }
      } else {
        const last = centers[centers.length - 1]!;
        fallen += fallStep;
        C.set(last.x, 0, last.z).normalize().multiplyScalar((spec.splay ?? 0.06) * fallStep);
        p.copy(last).add(C);
        p.y -= fallStep;
        // Ends curl slightly inwards like a blow-dried cut.
        const endK = smoothstep(0.7, 1, fallen / fallLen);
        p.x -= Math.sign(p.x) * endK * fallStep * 0.18;
        p.z += endK * fallStep * 0.08;
        // Keep falling hair outside the shoulders.
        const sh = smoothstep(-1.1, -1.7, p.y);
        const minR = lerp(0, 1.05, sh);
        const radXZ = Math.hypot(p.x / 1.25, p.z / 0.75);
        if (radXZ < minR && radXZ > 1e-3) {
          const k = minR / radXZ;
          p.x *= k;
          p.z *= k;
        }
        centers.push(p.clone());
      }
      void u;
      if (falling && fallen >= fallLen) break;
    }
    if (centers.length < 3) continue;

    // Ribbon around the centre line: wide across the surface, thin along the head normal.
    const w0 = lerp(spec.width[0], spec.width[1], rand());
    const shade = 1 + (rand() - 0.5) * (spec.colorJitter ?? 0.25);
    tmpColor.copy(baseColor).multiplyScalar(shade);
    const startIndex = positions.length / 3;
    const m = centers.length;
    const T = new THREE.Vector3();
    const N = new THREE.Vector3();
    const B = new THREE.Vector3();
    for (let i = 0; i < m; i++) {
      const c = centers[i]!;
      const prev = centers[Math.max(0, i - 1)]!;
      const next = centers[Math.min(m - 1, i + 1)]!;
      T.subVectors(next, prev).normalize();
      N.copy(c).normalize();
      N.addScaledVector(T, -N.dot(T)).normalize();
      B.crossVectors(T, N).normalize();
      const u = i / (m - 1);
      const taper = lerp(1, spec.tip, Math.pow(u, 1.4)) * (i === 0 ? 0.7 : 1);
      const w = w0 * taper;
      const h = spec.thickness * taper;
      for (let j = 0; j <= radial; j++) {
        const a = (j / radial) * Math.PI * 2;
        const ca = Math.cos(a);
        const sa = Math.sin(a);
        positions.push(c.x + B.x * ca * w + N.x * sa * h, c.y + B.y * ca * w + N.y * sa * h, c.z + B.z * ca * w + N.z * sa * h);
        uvs.push(j / radial, u);
        colors.push(tmpColor.r, tmpColor.g, tmpColor.b);
      }
    }
    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < radial; j++) {
        const a = startIndex + i * (radial + 1) + j;
        const b = a + radial + 1;
        indices.push(a, b, a + 1, b, b + 1, a + 1);
      }
    }
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  geo.setIndex(indices);
  geo.computeVertexNormals();
  return geo;
}

/* ----------------------------- flow fields ----------------------------- */

const CROWN = new THREE.Vector3(0, 0.82, -0.57).normalize();

/** Away from the crown whorl (natural short hair). */
export function crownFlow(d: THREE.Vector3, out: THREE.Vector3): THREE.Vector3 {
  out.copy(d).multiplyScalar(d.dot(CROWN)).sub(CROWN);
  return out;
}

/** Away from a side part at x = partX, towards the face at the front. */
export function partFlow(partX: number, forward = 0.35) {
  return (d: THREE.Vector3, out: THREE.Vector3) => {
    const s = d.x >= partX ? 1 : -1;
    out.set(s * 1, -0.55, forward * smoothstep(0.1, 0.8, d.z) - 0.25 * smoothstep(0.2, -0.6, d.z));
    return out;
  };
}

/** Combed back (pompadour, slick back, ponytail roots). */
export function backFlow(lift = 0.3) {
  return (d: THREE.Vector3, out: THREE.Vector3) => out.set(d.x * 0.25, lift * smoothstep(0.2, 0.9, d.z) - 0.2, -1);
}

/** Towards a tie point (ponytail / bun). */
export function tieFlow(target: THREE.Vector3) {
  return (d: THREE.Vector3, out: THREE.Vector3) => out.subVectors(target, d);
}

/** Bangs swept forward and to one side. */
export function fringeFlow(sweep: number) {
  return (d: THREE.Vector3, out: THREE.Vector3) => out.set(sweep * 0.7, -0.6, 1);
}
