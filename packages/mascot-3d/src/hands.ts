import * as THREE from 'three';
import { polygonize, sdRoundBox, sdRoundCone, smin, type Vec3 } from './sdf';

/**
 * Chunky cartoon hands as signed-distance clay: a rounded palm with four 3-segment fingers and
 * a thumb, each pose defined by joint curls. Local frame (right hand): wrist at the origin,
 * fingers along +Y, palm facing +Z, thumb on +X. Left hands mirror X in the SDF itself so
 * triangle winding stays correct.
 */
export type HandPose = 'open' | 'wave' | 'relaxed' | 'fist' | 'point' | 'thumbsUp' | 'cup' | 'flat' | 'heart' | 'grip';

interface FingerSpec {
  /** Knuckle x. */
  x: number;
  lengths: [number, number, number];
  r: number;
}

const FINGERS: FingerSpec[] = [
  { x: 0.13, lengths: [0.15, 0.1, 0.085], r: 0.057 },
  { x: 0.043, lengths: [0.165, 0.11, 0.09], r: 0.059 },
  { x: -0.045, lengths: [0.155, 0.1, 0.085], r: 0.056 },
  { x: -0.128, lengths: [0.12, 0.08, 0.07], r: 0.05 },
];

interface PoseSpec {
  /** Curl per finger [index, middle, ring, pinky], each three joint angles (radians, + = towards palm). */
  curl: [number, number, number][];
  /** Splay per finger (radians around the palm normal, + = towards the thumb). */
  spread: [number, number, number, number];
  /** Thumb direction (local) and curl of its two outer joints. */
  thumb: { dir: Vec3; curl: [number, number] };
}

const c3 = (a: number, b: number, c: number): [number, number, number] => [a, b, c];

const POSES: Record<HandPose, PoseSpec> = {
  open: { curl: [c3(0.08, 0.06, 0.04), c3(0.06, 0.05, 0.03), c3(0.1, 0.06, 0.04), c3(0.14, 0.08, 0.05)], spread: [0.13, 0.03, -0.07, -0.17], thumb: { dir: [0.85, 0.45, 0.28], curl: [0.1, 0.1] } },
  wave: { curl: [c3(0.02, 0.02, 0), c3(0, 0.02, 0), c3(0.04, 0.03, 0), c3(0.08, 0.04, 0.02)], spread: [0.2, 0.05, -0.1, -0.26], thumb: { dir: [0.92, 0.32, 0.2], curl: [0, 0.05] } },
  relaxed: { curl: [c3(0.32, 0.42, 0.3), c3(0.38, 0.48, 0.32), c3(0.45, 0.52, 0.34), c3(0.52, 0.56, 0.36)], spread: [0.08, 0.02, -0.04, -0.1], thumb: { dir: [0.62, 0.62, 0.48], curl: [0.25, 0.2] } },
  fist: { curl: [c3(1.45, 1.6, 1.0), c3(1.5, 1.65, 1.0), c3(1.5, 1.65, 1.0), c3(1.45, 1.6, 1.0)], spread: [0.04, 0.0, -0.03, -0.06], thumb: { dir: [-0.35, 0.55, 0.76], curl: [0.35, 0.3] } },
  point: { curl: [c3(0.04, 0.02, 0), c3(1.5, 1.65, 1.0), c3(1.5, 1.65, 1.0), c3(1.45, 1.6, 1.0)], spread: [0.05, 0.0, -0.03, -0.06], thumb: { dir: [-0.2, 0.55, 0.8], curl: [0.3, 0.3] } },
  thumbsUp: { curl: [c3(1.45, 1.6, 1.0), c3(1.5, 1.65, 1.0), c3(1.5, 1.65, 1.0), c3(1.45, 1.6, 1.0)], spread: [0.04, 0.0, -0.03, -0.06], thumb: { dir: [0.97, 0.22, 0.05], curl: [-0.05, -0.05] } },
  cup: { curl: [c3(0.22, 0.25, 0.15), c3(0.2, 0.25, 0.15), c3(0.24, 0.27, 0.16), c3(0.3, 0.3, 0.18)], spread: [0.07, 0.01, -0.04, -0.09], thumb: { dir: [0.75, 0.55, 0.35], curl: [0.15, 0.15] } },
  flat: { curl: [c3(0.06, 0.04, 0.02), c3(0.04, 0.04, 0.02), c3(0.06, 0.04, 0.02), c3(0.08, 0.05, 0.03)], spread: [0.04, 0.0, -0.03, -0.06], thumb: { dir: [0.7, 0.68, 0.2], curl: [0.05, 0.05] } },
  heart: { curl: [c3(0.75, 0.95, 0.7), c3(0.7, 0.95, 0.7), c3(0.7, 0.95, 0.7), c3(0.7, 0.95, 0.7)], spread: [0.0, 0.0, 0.0, 0.0], thumb: { dir: [0.35, -0.9, 0.25], curl: [0.15, 0.25] } },
  grip: { curl: [c3(0.6, 0.7, 0.4), c3(0.62, 0.72, 0.4), c3(0.66, 0.74, 0.42), c3(0.7, 0.76, 0.44)], spread: [0.06, 0.01, -0.04, -0.08], thumb: { dir: [0.5, 0.6, 0.62], curl: [0.3, 0.25] } },
};

interface Segment {
  a: Vec3;
  b: Vec3;
  ra: number;
  rb: number;
}

function rotateAround(v: THREE.Vector3, axis: THREE.Vector3, angle: number): THREE.Vector3 {
  return v.applyAxisAngle(axis, angle);
}

function handSegments(pose: HandPose): Segment[] {
  const p = POSES[pose];
  const segs: Segment[] = [];
  const knuckleY = 0.4;
  FINGERS.forEach((f, i) => {
    const spread = p.spread[i]!;
    // Splay rotates around the palm normal (+Z), towards the thumb (+X) for positive values.
    let dir: THREE.Vector3;
    const axis = new THREE.Vector3(1, 0, 0).applyAxisAngle(new THREE.Vector3(0, 0, 1), -spread);
    let at = new THREE.Vector3(f.x, knuckleY - (i === 3 ? 0.03 : i === 0 ? 0.01 : 0), 0.005);
    let r = f.r;
    let bend = 0;
    for (let s = 0; s < 3; s++) {
      bend += p.curl[i]![s]!;
      // Curling rotates the finger towards the palm side (+Z).
      dir = rotateAround(new THREE.Vector3(0, 1, 0).applyAxisAngle(new THREE.Vector3(0, 0, 1), -spread), axis, bend);
      const end = at.clone().addScaledVector(dir, f.lengths[s]!);
      const rEnd = r * (s === 2 ? 0.86 : 0.95);
      segs.push({ a: [at.x, at.y, at.z], b: [end.x, end.y, end.z], ra: r, rb: rEnd });
      at = end;
      r = rEnd;
    }
  });
  // Thumb: metacarpal from the heel of the palm, then two phalanges.
  const tDir = new THREE.Vector3(...p.thumb.dir).normalize();
  const base = new THREE.Vector3(0.12, 0.1, 0.035);
  const knuckle = base.clone().addScaledVector(tDir, 0.13);
  segs.push({ a: [base.x, base.y, base.z], b: [knuckle.x, knuckle.y, knuckle.z], ra: 0.075, rb: 0.066 });
  // Thumb curls around the axis perpendicular to its direction and the palm normal.
  const tAxis = new THREE.Vector3().crossVectors(tDir, new THREE.Vector3(0, 0, 1)).normalize();
  if (tAxis.lengthSq() < 1e-6) tAxis.set(1, 0, 0);
  let at = knuckle;
  let bend = 0;
  const lens = [0.12, 0.1];
  let r = 0.066;
  for (let s = 0; s < 2; s++) {
    bend += p.thumb.curl[s]!;
    const dir = tDir.clone().applyAxisAngle(tAxis, bend);
    const end = at.clone().addScaledVector(dir, lens[s]!);
    const rEnd = r * (s === 1 ? 0.88 : 0.96);
    segs.push({ a: [at.x, at.y, at.z], b: [end.x, end.y, end.z], ra: r, rb: rEnd });
    at = end;
    r = rEnd;
  }
  return segs;
}

/** Hand SDF in local space; side = -1 mirrors to a left hand. */
export function handSdf(pose: HandPose, side: 1 | -1) {
  const segs = handSegments(pose);
  const fingers = segs.slice(0, 12);
  const thumb = segs.slice(12);
  // Bounding spheres per finger / thumb chain: skip chains that cannot affect the result.
  const bound = (chain: Segment[]) => {
    const pts = chain.flatMap((c) => [c.a, c.b]);
    const cx = pts.reduce((a, p) => a + p[0], 0) / pts.length;
    const cy = pts.reduce((a, p) => a + p[1], 0) / pts.length;
    const cz = pts.reduce((a, p) => a + p[2], 0) / pts.length;
    const r = Math.max(...pts.map((p) => Math.hypot(p[0] - cx, p[1] - cy, p[2] - cz))) + Math.max(...chain.map((c) => c.ra));
    return [cx, cy, cz, r] as const;
  };
  const fingerBounds = [0, 1, 2, 3].map((i) => bound(fingers.slice(i * 3, i * 3 + 3)));
  const thumbBound = bound(thumb);
  return (x: number, y: number, z: number) => {
    const lx = x * side;
    // Palm: slightly tapered towards the wrist, rounded.
    let d = sdRoundBox(lx, y, z, 0.005, 0.24, 0, 0.165, 0.16, 0.068, 0.065);
    // Wrist.
    d = smin(d, sdRoundCone(lx, y, z, [0, -0.14, -0.005], [0, 0.12, 0], 0.115, 0.13), 0.06);
    // Thumb pad (thenar) blends into the palm.
    const [tx, ty, tz, tr] = thumbBound;
    if (Math.hypot(lx - tx, y - ty, z - tz) - tr < d + 0.06) {
      let t = Infinity;
      for (const s of thumb) t = Math.min(t, sdRoundCone(lx, y, z, s.a, s.b, s.ra, s.rb));
      d = smin(d, t, 0.06);
    }
    // Fingers stay separate from each other but blend into the knuckles.
    let fd = Infinity;
    for (let i = 0; i < 4; i++) {
      const [bx, by, bz, br] = fingerBounds[i]!;
      if (Math.hypot(lx - bx, y - by, z - bz) - br > Math.min(d, fd) + 0.04) continue;
      let fi = Infinity;
      for (let s = 0; s < 3; s++) {
        const g = fingers[i * 3 + s]!;
        fi = smin(fi, sdRoundCone(lx, y, z, g.a, g.b, g.ra, g.rb), 0.015);
      }
      fd = Math.min(fd, fi);
    }
    return smin(d, fd, 0.035);
  };
}

const cache = new Map<string, THREE.BufferGeometry>();

/** Cached hand geometry (pose × side); shared across characters, never disposed. */
export function handGeometry(pose: HandPose, side: 1 | -1): THREE.BufferGeometry {
  const key = `${pose}:${side}`;
  let geo = cache.get(key);
  if (!geo) {
    geo = polygonize(handSdf(pose, side), [-0.45, -0.2, -0.42], [0.45, 0.82, 0.45], 0.014);
    geo.userData.shared = true;
    cache.set(key, geo);
  }
  return geo;
}
