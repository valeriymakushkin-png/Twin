import * as THREE from 'three';
import { fabricBump } from './face';
import { handGeometry } from './hands';
import { material, tune } from './materials';
import { clamp, gauss, lerp, shade, smoothstep } from './math';
import { bodyPose, type ArmPose, type PoseKey } from './poses';
import { polygonize, probeFront, sdEllipsoid, sdRoundBox, sdRoundCone, sdTorus, smax, smin, type Sdf, type Vec3 } from './sdf';
import type { StyleLook } from './styles';

/**
 * Sculpted upper body: torso + hood and the posed sleeves are signed-distance "clay" meshes
 * (smooth blends, baked ambient occlusion in vertex colours; torso cached per outfit, sleeves per pose),
 * with a skin mesh for the neck / bare arms, posed 5-finger hands and outfit details on top.
 */
export type OutfitKey =
  | 'casual-hoodie'
  | 'tshirt'
  | 'denim-jacket'
  | 'streetwear'
  | 'business-suit'
  | 'gamer'
  | 'streamer'
  | 'astronaut'
  | 'superhero'
  | 'samurai'
  | 'wizard'
  | 'techwear';

type Collar = 'hood' | 'crew' | 'turtle' | 'open';

interface Garment {
  color: string;
  trim?: string;
  collar: Collar;
  sleeve: 'long' | 'short';
  pocket?: boolean;
  strings?: boolean;
  bulk?: number;
  finish?: 'fabric' | 'gloss';
  roughness?: number;
  /** Front opening showing a layer underneath (jackets, suits, kimono): half width at the
   *  bottom of the opening, widening by `flare` per unit upwards. */
  inner?: { color: string; width: number; flare: number; bottom: number };
  /** Horizontal stripe colour (gamer jersey). */
  stripes?: string;
  /** Ribbed cuffs (hoodies, sweaters). */
  ribs?: boolean;
}

const GARMENTS: Record<OutfitKey, (c?: string) => Garment> = {
  'casual-hoodie': (c) => ({ color: c ?? '#d4101f', collar: 'hood', sleeve: 'long', pocket: true, strings: true, ribs: true }),
  streamer: (c) => ({ color: c ?? '#17171b', collar: 'hood', sleeve: 'long', pocket: true, strings: true, ribs: true }),
  streetwear: (c) => ({ color: c ?? '#9ca3af', collar: 'hood', sleeve: 'long', pocket: false, strings: true, ribs: true }),
  tshirt: (c) => ({ color: c ?? '#f4f4f5', collar: 'crew', sleeve: 'short', bulk: -0.02 }),
  'denim-jacket': (c) => ({ color: c ?? '#3d6fa8', collar: 'open', sleeve: 'long', roughness: 0.92, inner: { color: '#f4f4f5', width: 0.22, flare: -0.02, bottom: -4.9 } }),
  'business-suit': (c) => ({ color: c ?? '#1f2a44', collar: 'open', sleeve: 'long', roughness: 0.6, inner: { color: '#f8fafc', width: 0.05, flare: 0.3, bottom: -2.8 } }),
  gamer: (c) => ({ color: c ?? '#16a34a', collar: 'crew', sleeve: 'long', stripes: '#0b0b0f', ribs: true }),
  astronaut: (c) => ({ color: c ?? '#f1f5f9', collar: 'crew', sleeve: 'long', bulk: 0.08, finish: 'gloss', roughness: 0.55, ribs: true, trim: '#94a3b8' }),
  superhero: (c) => ({ color: c ?? '#2563eb', collar: 'crew', sleeve: 'long', bulk: -0.03, finish: 'gloss', roughness: 0.35, trim: '#ff2a3c' }),
  samurai: (c) => ({ color: c ?? '#7f1d1d', collar: 'open', sleeve: 'long', roughness: 0.75, inner: { color: '#f5f0e6', width: 0.04, flare: 0.3, bottom: -3.0 } }),
  wizard: (c) => ({ color: c ?? '#4c1d95', collar: 'crew', sleeve: 'long', bulk: 0.04, trim: '#f2c14e', ribs: false }),
  techwear: (c) => ({ color: c ?? '#121215', collar: 'turtle', sleeve: 'long', finish: 'gloss', roughness: 0.55, trim: '#26262b' }),
};

/* ----------------------------- skeleton ----------------------------- */

const SHOULDER: Vec3 = [-1.22, -1.94, -0.08];
const L_UPPER = 1.28;
const L_FORE = 1.18;

const v3 = (a: Vec3) => new THREE.Vector3(a[0], a[1], a[2]);
const arr = (v: THREE.Vector3): Vec3 => [v.x, v.y, v.z];

interface ArmChain {
  S: Vec3;
  E: Vec3;
  W: Vec3;
  /** Unit forearm direction (elbow → wrist). */
  F: THREE.Vector3;
}

/** Two-bone IK: elbow placed towards the pole, wrist clamped to reach. */
function solveArm(side: -1 | 1, pose: ArmPose, shrug: number): ArmChain {
  const S = new THREE.Vector3(side * Math.abs(SHOULDER[0]), SHOULDER[1] + shrug, SHOULDER[2]);
  let W = v3(pose.wrist);
  const toW = W.clone().sub(S);
  let d = toW.length();
  const maxReach = (L_UPPER + L_FORE) * 0.995;
  if (d > maxReach) {
    W = S.clone().addScaledVector(toW.normalize(), maxReach);
    d = maxReach;
  }
  const dir = W.clone().sub(S).normalize();
  const a = (L_UPPER * L_UPPER - L_FORE * L_FORE + d * d) / (2 * d);
  const h = Math.sqrt(Math.max(0, L_UPPER * L_UPPER - a * a));
  const pole = v3(pose.pole);
  pole.addScaledVector(dir, -pole.dot(dir));
  if (pole.lengthSq() < 1e-6) pole.set(0, -1, 0);
  pole.normalize();
  const E = S.clone().addScaledVector(dir, a).addScaledVector(pole, h);
  return { S: arr(S), E: arr(E), W: arr(W), F: W.clone().sub(E).normalize() };
}

/* ----------------------------- SDF parts ----------------------------- */

function torsoSdf(bulk: number): Sdf {
  const b = bulk;
  return (x, y, z) => {
    const chest = sdEllipsoid(x, y, z, 0, -2.3, -0.02, 1.1 + b, 0.9 + b, 0.64 + b);
    const belly = sdEllipsoid(x, y, z, 0, -3.45, 0, 1.0 + b, 1.12 + b, 0.62 + b);
    const hips = sdEllipsoid(x, y, z, 0, -4.5, -0.02, 1.0 + b, 0.8, 0.6 + b);
    const shoulders = sdRoundCone(x, y, z, [-1.02, -1.84, -0.1], [1.02, -1.84, -0.1], 0.4 + b, 0.4 + b);
    const ax = Math.abs(x);
    const traps = sdRoundCone(ax, y, z, [0.3, -1.66, -0.16], [1.0, -1.82, -0.12], 0.26 + b, 0.37 + b);
    let d = smin(chest, belly, 0.55);
    d = smin(d, hips, 0.45);
    d = smin(d, shoulders, 0.35);
    d = smin(d, traps, 0.3);
    // Neck opening.
    const hole = Math.max(Math.hypot(x, (z + 0.1) * 1.05) - 0.37, -1.8 - y);
    d = smax(d, -hole, 0.08);
    // Soft drape folds at the flanks.
    d += 0.009 * Math.sin(y * 9 + x * 1.5) * smoothstep(0.55, 0.95, ax) * smoothstep(-1.9, -2.6, y);
    return d;
  };
}

function hoodSdf(bulk: number): Sdf {
  return (x, y, z) => {
    // Folded hood: a fat roll around the neck, open at the front, bunched behind.
    let roll = sdTorus(x, y, z, 0, -1.4, -0.13, 0.62 + bulk * 0.5, 0.25, 1.16, 0.98);
    roll = smax(roll, z - 0.36, 0.14);
    const back = sdEllipsoid(x, y, z, 0, -1.62, -0.82, 0.86, 0.56, 0.42);
    return smin(roll, back, 0.2);
  };
}

interface ArmSdf {
  sleeve: Sdf;
  cuff: Sdf | null;
}

function armSdf(chain: ArmChain, g: Garment, bulk: number): ArmSdf {
  const { S, E, W, F } = chain;
  if (g.sleeve === 'short') {
    const mid: Vec3 = [S[0] + (E[0] - S[0]) * 0.48, S[1] + (E[1] - S[1]) * 0.48, S[2] + (E[2] - S[2]) * 0.48];
    return { sleeve: (x, y, z) => sdRoundCone(x, y, z, S, mid, 0.39 + bulk, 0.35 + bulk), cuff: null };
  }
  const cuffLen = g.ribs ? 0.17 : 0.06;
  const W0: Vec3 = [W[0] - F.x * cuffLen, W[1] - F.y * cuffLen, W[2] - F.z * cuffLen];
  const Wc: Vec3 = [W[0] - F.x * 0.01, W[1] - F.y * 0.01, W[2] - F.z * 0.01];
  const sleeve: Sdf = (x, y, z) => {
    const d = smin(sdRoundCone(x, y, z, S, E, 0.35 + bulk, 0.3 + bulk), sdRoundCone(x, y, z, E, W0, 0.3 + bulk, 0.272 + bulk), 0.07);
    // Soft fabric folds bunching around the elbow.
    const de = Math.hypot(x - E[0], y - E[1], z - E[2]);
    return d + 0.011 * Math.sin(de * 26) * Math.exp(-(de * de) / 0.12);
  };
  const cuff: Sdf = (x, y, z) => sdRoundCone(x, y, z, W0, Wc, g.ribs ? 0.245 + bulk * 0.5 : 0.27 + bulk, g.ribs ? 0.235 + bulk * 0.5 : 0.265 + bulk);
  return { sleeve, cuff };
}

/** Torso (+ hood) volume for hair collision, matching the outfit's silhouette. */
export function bodyCollider(outfit: OutfitKey | string | undefined): Sdf {
  const garment = (GARMENTS[outfit as OutfitKey] ?? GARMENTS['casual-hoodie'])();
  const torso = torsoSdf((garment.bulk ?? 0) + 0.04);
  const hood = garment.collar === 'hood' ? hoodSdf(garment.bulk ?? 0) : null;
  return (x, y, z) => (hood ? Math.min(torso(x, y, z), hood(x, y, z) - 0.03) : torso(x, y, z));
}

let knitTex: THREE.Texture | null = null;
/** Fine knit bump shared by all fabric garments (UVs come from the polygonizer). */
function fabricKnit(): THREE.Texture {
  if (!knitTex) {
    knitTex = fabricBump(11);
    knitTex.repeat.set(6, 6);
  }
  return knitTex;
}

/* ----------------------------- assembly ----------------------------- */

export interface BodyOptions {
  outfit: OutfitKey;
  /** Overrides the main garment colour (default red hoodie, like the brand). */
  color?: string;
  skin: string;
  look: StyleLook;
  pose?: PoseKey;
}

export interface BodyResult {
  group: THREE.Group;
  /** Front surface z of the torso at (x, y) — for chains, emblems and badges. */
  surfaceZ: (x: number, y: number) => number;
}

const torsoCache = new Map<string, { garment: THREE.BufferGeometry; extraLayer: THREE.BufferGeometry | null }>();
const limbCache = new Map<string, THREE.BufferGeometry>();
const neckCache = new Map<string, THREE.BufferGeometry>();

function remember<T>(cache: Map<string, T>, key: string, make: () => T, max = 24): T {
  let v = cache.get(key);
  if (!v) {
    v = make();
    cache.set(key, v);
    if (cache.size > max) cache.delete(cache.keys().next().value!);
  }
  return v;
}

function share(geo: THREE.BufferGeometry): THREE.BufferGeometry {
  geo.userData.shared = true;
  return geo;
}

function linear(hex: string, look: StyleLook): Vec3 {
  const c = tune(hex, look);
  return [c.r, c.g, c.b];
}

const headOcc = (x: number, y: number, z: number) => lerp(0.74, 1, smoothstep(0.02, 0.5, sdEllipsoid(x, y, z, 0, -0.05, 0, 0.98, 1.08, 0.95)));
const mix = (a: Vec3, b: Vec3, t: number): Vec3 => [lerp(a[0], b[0], t), lerp(a[1], b[1], t), lerp(a[2], b[2], t)];

/** Bounds of a limb chain, padded. */
function chainBounds(points: Vec3[], pad: number): [Vec3, Vec3] {
  const min: Vec3 = [Infinity, Infinity, Infinity];
  const max: Vec3 = [-Infinity, -Infinity, -Infinity];
  for (const p of points) for (let i = 0; i < 3; i++) {
    min[i] = Math.min(min[i]!, p[i]! - pad);
    max[i] = Math.max(max[i]!, p[i]! + pad);
  }
  return [min, max];
}

export function buildBody(o: BodyOptions): BodyResult {
  const { look } = o;
  const g = new THREE.Group();
  g.name = 'body';
  const garment = GARMENTS[o.outfit](o.color);
  const bulk = garment.bulk ?? 0;
  const poseKey = o.pose ?? 'pockets';
  const pose = bodyPose(poseKey, Boolean(garment.pocket));
  const shrug = pose.shrug ?? 0;
  const armR = solveArm(-1, pose.right, shrug);
  const armL = solveArm(1, pose.left, shrug);

  // Torso (pose-independent, cached per outfit): torso + hood + pocket + collar, opening cut.
  const torso = torsoSdf(bulk);
  const hood = garment.collar === 'hood' ? hoodSdf(bulk) : null;
  const pocket = garment.pocket ? (x: number, y: number, z: number) => sdRoundBox(x, y, z, 0, -3.6, 0.47, 0.6, 0.33, 0.13, 0.1) : null;
  const collarRib = garment.collar === 'crew' || garment.collar === 'open' ? (x: number, y: number, z: number) => sdTorus(x, y, z, 0, -1.47, -0.1, 0.385, 0.05, 1.1, 1.02) : null;
  const turtle = garment.collar === 'turtle' ? (x: number, y: number, z: number) => sdRoundCone(x, y, z, [0, -1.75, -0.11], [0, -1.02, -0.12], 0.45, 0.4) : null;
  const inner = garment.inner;
  /** Front opening (V or straight) as a distance: < 0 inside the opening. */
  const wedge = inner
    ? (x: number, y: number, z: number) => Math.max((Math.abs(x) - (inner.width + Math.max(0, y - inner.bottom) * inner.flare)) / Math.sqrt(1 + inner.flare * inner.flare), 0.12 - z, inner.bottom - y)
    : null;
  const core: Sdf = (x, y, z) => {
    let d = torso(x, y, z);
    if (hood) d = smin(d, hood(x, y, z), 0.09);
    if (pocket) d = smin(d, pocket(x, y, z), 0.035);
    if (collarRib) d = smin(d, collarRib(x, y, z), 0.025);
    if (turtle) d = smin(d, turtle(x, y, z), 0.1);
    if (wedge) d = smax(d, -wedge(x, y, z), 0.04);
    return d;
  };

  const base = linear(garment.color, look);
  const trim = linear(garment.trim ?? shade(garment.color, -0.1), look);
  const stripe = garment.stripes ? linear(garment.stripes, look) : null;
  const torsoColor = (x: number, y: number, z: number): Vec3 => {
    let c = base;
    if (stripe && Math.abs(Math.sin(y * 3.2)) > 0.86 && y < -1.9) c = stripe;
    if (wedge && Math.abs(wedge(x, y, z)) < 0.05 && z > 0.1) c = mix(c, trim, 0.7);
    if (collarRib && collarRib(x, y, z) < 0.03) c = trim;
    if (hood && hood(x, y, z) < 0.02 && z > 0.05 && y > -1.6) c = mix(c, trim, 0.35);
    if (pocket && Math.abs(pocket(x, y, z)) < 0.03 && z > 0.38 && y < -3.2) c = mix(c, trim, 0.85);
    const occ = headOcc(x, y, z);
    return [c[0] * occ, c[1] * occ, c[2] * occ];
  };

  const outfitKey = JSON.stringify([o.outfit, o.color ?? '', look.saturation]);
  const torsoGeos = remember(torsoCache, outfitKey, () => {
    const garmentGeo = share(polygonize(core, [-1.85, -4.95, -1.45], [1.85, -0.85, 1.3], 0.042, { color: torsoColor, ao: 0.55, uvScale: 1.2 }));
    let extraLayer: THREE.BufferGeometry | null = null;
    if (inner && wedge) {
      // The layer underneath (tee / shirt), only where the opening reveals it.
      const under = torsoSdf(bulk - 0.035);
      const innerC = linear(inner.color, look);
      const tee: Sdf = (x, y, z) => {
        const d = smin(under(x, y, z), sdTorus(x, y, z, 0, -1.5, -0.1, 0.38, 0.045, 1.1, 1.02), 0.02);
        return smax(d, wedge(x, y, z) - 0.09, 0.03);
      };
      const teeColor = (x: number, y: number, z: number): Vec3 => {
        const k = headOcc(x, y, z);
        return [innerC[0] * k, innerC[1] * k, innerC[2] * k];
      };
      extraLayer = share(polygonize(tee, [-1.0, -4.95, -0.4], [1.0, -1.0, 1.0], 0.03, { color: teeColor, ao: 0.5 }));
    } else if (o.outfit === 'streetwear') {
      // Quilted puffer vest over the hoodie.
      const vestBase = torsoSdf(0.11);
      const vest: Sdf = (x, y, z) => {
        let d = vestBase(x, y, z) - 0.022 * Math.abs(Math.sin(y * 6.5));
        d = smax(d, -sdEllipsoid(Math.abs(x), y, z, 1.3, -2.05, -0.05, 0.42, 0.62, 0.55), 0.05);
        d = smax(d, -Math.max(Math.abs(x) - 0.045, 0.15 - z), 0.02);
        return smax(d, -4.45 - y, 0.05);
      };
      const vc = linear('#111114', look);
      extraLayer = share(polygonize(vest, [-1.7, -4.95, -1.2], [1.7, -1.1, 1.2], 0.042, { color: () => vc, ao: 0.5 }));
    }
    return { garment: garmentGeo, extraLayer };
  });

  // Sleeves per pose and side (hard union with the torso; AO still sees the torso).
  const sleeveGeos = [armR, armL].map((chain, i) => {
    const side = i === 0 ? -1 : 1;
    return remember(limbCache, JSON.stringify([outfitKey, poseKey, side, 'sleeve', Boolean(garment.pocket)]), () => {
      const a = armSdf(chain, garment, bulk);
      const shoulderCap = (x: number, y: number, z: number) => sdEllipsoid(x, y, z, chain.S[0] * 0.97, chain.S[1] + 0.08, chain.S[2], 0.4 + bulk, 0.42 + bulk, 0.42 + bulk);
      const sdf: Sdf = (x, y, z) => {
        let d = smin(a.sleeve(x, y, z), shoulderCap(x, y, z), 0.12);
        if (a.cuff) d = smin(d, a.cuff(x, y, z), 0.02);
        return d;
      };
      const U = new THREE.Vector3(0, 1, 0).cross(chain.F);
      if (U.lengthSq() < 1e-4) U.set(1, 0, 0);
      U.normalize();
      const V = new THREE.Vector3().crossVectors(chain.F, U).normalize();
      const color = (x: number, y: number, z: number): Vec3 => {
        let c = base;
        if (a.cuff && a.cuff(x, y, z) < 0.03) {
          if (!garment.ribs) c = trim;
          else {
            const px = x - chain.W[0];
            const py = y - chain.W[1];
            const pz = z - chain.W[2];
            const ang = Math.atan2(px * V.x + py * V.y + pz * V.z, px * U.x + py * U.y + pz * U.z);
            c = mix(trim, base, 0.2 + 0.2 * Math.sin(ang * 22));
          }
        } else if (stripe && Math.abs(Math.sin(y * 3.2)) > 0.86 && y < -1.9) c = stripe;
        const occ = headOcc(x, y, z);
        return [c[0] * occ, c[1] * occ, c[2] * occ];
      };
      const end = garment.sleeve === 'short' ? [chain.S, chain.E] : [chain.S, chain.E, chain.W];
      const [min, max] = chainBounds(end as Vec3[], 0.5);
      return share(polygonize(sdf, min, max, 0.04, { color, ao: 0.5, occluder: core, uvScale: 1.2 }));
    });
  });

  // Skin: neck (cached per skin tone) + bare arms for short sleeves (per pose).
  const skinC = linear(o.skin, look);
  const neckGeo = remember(neckCache, JSON.stringify([o.skin, look.saturation]), () => {
    const neck: Sdf = (x, y, z) => sdRoundCone(x, y, z, [0, -0.45, -0.15], [0, -1.65, -0.1], 0.31, 0.36);
    const shadeNeck = (x: number, y: number, z: number): Vec3 => {
      const k = headOcc(x, y, z) * lerp(0.88, 1, smoothstep(-0.9, -1.4, y));
      return [skinC[0] * k, skinC[1] * k, skinC[2] * k];
    };
    return share(polygonize(neck, [-0.5, -1.8, -0.6], [0.5, -0.3, 0.4], 0.025, { color: shadeNeck, ao: 0.3 }));
  });
  const bareArms =
    garment.sleeve === 'short'
      ? [armR, armL].map((chain, i) =>
          remember(limbCache, JSON.stringify([o.skin, look.saturation, poseKey, i, 'bare']), () => {
            const sdf: Sdf = (x, y, z) => smin(sdRoundCone(x, y, z, chain.S, chain.E, 0.25, 0.205), sdRoundCone(x, y, z, chain.E, chain.W, 0.205, 0.15), 0.05);
            const [min, max] = chainBounds([chain.S, chain.E, chain.W], 0.32);
            return share(polygonize(sdf, min, max, 0.03, { color: () => skinC, ao: 0.4, occluder: core }));
          }),
        )
      : [];

  const knit = look.shading === 'pbr' && garment.finish !== 'gloss' ? fabricKnit() : undefined;
  const fabricMat = material(look, garment.finish === 'gloss' ? 'gloss' : 'fabric', { color: '#ffffff', roughness: garment.roughness, bumpMap: knit });
  (fabricMat as THREE.MeshStandardMaterial).vertexColors = true;
  // Sheen derived from white would wash the garment pink: tint it with the garment colour.
  if ((fabricMat as THREE.MeshPhysicalMaterial).sheenColor) {
    (fabricMat as THREE.MeshPhysicalMaterial).sheenColor = tune(shade(garment.color, 0.12), look);
    (fabricMat as THREE.MeshPhysicalMaterial).sheen = 0.6;
  }
  for (const geo of [torsoGeos.garment, ...sleeveGeos]) {
    const mesh = new THREE.Mesh(geo, fabricMat);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.userData.outline = true;
    mesh.name = 'garment';
    g.add(mesh);
  }
  if (torsoGeos.extraLayer) {
    const vestMat = inner ? material(look, 'fabric', { color: '#ffffff', roughness: 0.7 }) : material(look, 'gloss', { color: '#ffffff', roughness: 0.4 });
    (vestMat as THREE.MeshStandardMaterial).vertexColors = true;
    const vest = new THREE.Mesh(torsoGeos.extraLayer, vestMat);
    vest.castShadow = true;
    vest.userData.outline = true;
    g.add(vest);
  }
  const skinMat = material(look, 'skin', { color: '#ffffff' });
  (skinMat as THREE.MeshStandardMaterial).vertexColors = true;
  for (const geo of [neckGeo, ...bareArms]) {
    const skinMesh = new THREE.Mesh(geo, skinMat);
    skinMesh.castShadow = true;
    skinMesh.receiveShadow = true;
    skinMesh.userData.outline = true;
    skinMesh.name = 'body-skin';
    g.add(skinMesh);
  }

  // Hands.
  const handMat = material(look, 'skin', { color: shade(o.skin, 0.01) });
  const addHand = (chain: ArmChain, armPose: ArmPose, side: -1 | 1) => {
    if (!armPose.hand) return;
    const Y = v3(armPose.fingers).normalize();
    const Z = v3(armPose.palm);
    Z.addScaledVector(Y, -Z.dot(Y)).normalize();
    const X = new THREE.Vector3().crossVectors(Y, Z);
    const m = new THREE.Matrix4().makeBasis(X, Y, Z);
    // Right hand (screen left) uses the canonical right-hand SDF; left hands are mirrored.
    const hand = new THREE.Mesh(handGeometry(armPose.hand, side === -1 ? 1 : -1), handMat);
    hand.quaternion.setFromRotationMatrix(m);
    hand.position.set(chain.W[0] + chain.F.x * 0.02, chain.W[1] + chain.F.y * 0.02, chain.W[2] + chain.F.z * 0.02);
    hand.scale.setScalar(1.06);
    hand.castShadow = true;
    hand.receiveShadow = true;
    hand.userData.outline = true;
    g.add(hand);
  };
  addHand(armR, pose.right, -1);
  addHand(armL, pose.left, 1);

  // Details placed on the torso surface (ignores arms in front of it).
  const outer: Sdf = (x, y, z) => (hood ? smin(torso(x, y, z), hood(x, y, z), 0.09) : torso(x, y, z));
  const surfaceZ = (x: number, y: number) => probeFront(outer, x, y, 2.2, -0.5) ?? 0.6;
  addOutfitDetails(g, o, garment, look, surfaceZ);
  return { group: g, surfaceZ };
}

/* ----------------------------- outfit details ----------------------------- */

function starShape(outer: number, inner: number, points = 5): THREE.Shape {
  const s = new THREE.Shape();
  for (let i = 0; i < points * 2; i++) {
    const r = i % 2 ? inner : outer;
    const a = (i / (points * 2)) * Math.PI * 2 + Math.PI / 2;
    const x = Math.cos(a) * r;
    const y = Math.sin(a) * r;
    if (i === 0) s.moveTo(x, y);
    else s.lineTo(x, y);
  }
  s.closePath();
  return s;
}

function addOutfitDetails(g: THREE.Group, o: BodyOptions, garment: Garment, look: StyleLook, surfaceZ: (x: number, y: number) => number) {
  const fabric = (color: string, roughness?: number) => material(look, 'fabric', { color, roughness });
  const metal = (color: string, roughness = 0.3) => material(look, 'metal', { color, roughness });
  const onSurface = (x: number, y: number, lift = 0.02) => new THREE.Vector3(x, y, surfaceZ(x, y) + lift);

  if (garment.strings) {
    for (const s of [-1, 1]) {
      const pts = [-1.6, -1.88, -2.2, -2.52].map((y, i) => onSurface(s * (0.22 + i * 0.012), y, 0.03));
      const tube = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 32, 0.027, 10, false), fabric('#f3eee8', 0.7));
      tube.castShadow = true;
      g.add(tube);
      const end = pts[pts.length - 1]!;
      const aglet = new THREE.Mesh(new THREE.CapsuleGeometry(0.032, 0.09, 4, 12), metal('#d9d9de'));
      aglet.position.set(end.x, end.y - 0.07, end.z + 0.005);
      g.add(aglet);
      // Eyelet.
      const eye = new THREE.Mesh(new THREE.TorusGeometry(0.04, 0.012, 8, 20), metal('#d9d9de'));
      const top = onSurface(s * 0.22, -1.6, 0.012);
      eye.position.copy(top);
      g.add(eye);
    }
  }

  switch (o.outfit) {
    case 'denim-jacket': {
      const c = o.color ?? '#3d6fa8';
      for (const s of [-1, 1]) {
        // Collar points.
        const flap = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.5, 0.05), fabric(shade(c, -0.06), 0.9));
        flap.position.copy(onSurface(s * 0.4, -1.5, 0.04));
        flap.rotation.set(-0.45, s * 0.45, s * 0.5);
        flap.castShadow = true;
        g.add(flap);
        // Chest pocket flaps + buttons.
        const pf = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.14, 0.04), fabric(shade(c, -0.08), 0.9));
        pf.position.copy(onSurface(s * 0.58, -2.15, 0.02));
        pf.lookAt(pf.position.clone().add(new THREE.Vector3(s * 0.35, 0.1, 1)));
        g.add(pf);
        const btn = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.02, 16), metal('#b7925a'));
        btn.position.copy(onSurface(s * 0.58, -2.2, 0.05));
        btn.rotation.x = Math.PI / 2;
        g.add(btn);
      }
      for (let i = 0; i < 4; i++) {
        const y = -2.4 - i * 0.48;
        const btn = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.02, 16), metal('#b7925a'));
        btn.position.copy(onSurface(0.3 + (-2.4 - y) * 0.05, y, 0.03));
        btn.rotation.x = Math.PI / 2;
        g.add(btn);
      }
      break;
    }
    case 'business-suit': {
      const tie = new THREE.Shape();
      tie.moveTo(-0.06, 0);
      tie.lineTo(0.06, 0);
      tie.lineTo(0.12, -0.78);
      tie.lineTo(0, -0.92);
      tie.lineTo(-0.12, -0.78);
      tie.closePath();
      const tieMesh = new THREE.Mesh(new THREE.ExtrudeGeometry(tie, { depth: 0.035, bevelEnabled: true, bevelSize: 0.012, bevelThickness: 0.012, bevelSegments: 2 }), material(look, 'gloss', { color: '#c81e2e', roughness: 0.4 }));
      const top = onSurface(0, -1.52, 0.01);
      tieMesh.position.copy(top);
      tieMesh.rotation.x = -0.28;
      tieMesh.castShadow = true;
      g.add(tieMesh);
      const knot = new THREE.Mesh(new THREE.SphereGeometry(0.085, 16, 12), material(look, 'gloss', { color: '#b01a28', roughness: 0.4 }));
      knot.position.copy(onSurface(0, -1.47, 0.05));
      knot.scale.set(1, 0.85, 0.7);
      g.add(knot);
      for (const s of [-1, 1]) {
        const collar = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.2, 0.03), fabric('#f8fafc', 0.6));
        collar.position.copy(onSurface(s * 0.17, -1.42, 0.04));
        collar.rotation.set(-0.3, s * 0.3, s * 0.75);
        g.add(collar);
      }
      for (let i = 0; i < 2; i++) {
        const btn = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.02, 16), material(look, 'gloss', { color: '#0f172a' }));
        btn.position.copy(onSurface(0.07, -3.0 - i * 0.36, 0.03));
        btn.rotation.x = Math.PI / 2;
        g.add(btn);
      }
      break;
    }
    case 'gamer': {
      const set = new THREE.Mesh(new THREE.TorusGeometry(0.6, 0.065, 14, 64, Math.PI * 1.25), material(look, 'gloss', { color: '#18181b' }));
      set.rotation.set(Math.PI / 2, 0, Math.PI * 0.12 + Math.PI);
      set.position.set(0, -1.38, 0.0);
      g.add(set);
      for (const s of [-1, 1]) {
        const cup = new THREE.Mesh(new THREE.CylinderGeometry(0.19, 0.19, 0.13, 32), material(look, 'gloss', { color: '#18181b' }));
        cup.position.set(s * 0.58, -1.42, 0.22);
        cup.rotation.set(0.4, 0, s * 1.2);
        g.add(cup);
        const glow = new THREE.Mesh(new THREE.TorusGeometry(0.14, 0.024, 8, 32), material(look, 'emissive', { color: '#22d3ee' }));
        glow.position.copy(cup.position).add(new THREE.Vector3(s * 0.06, 0.02, 0.03));
        glow.rotation.copy(cup.rotation);
        glow.rotateX(Math.PI / 2);
        g.add(glow);
      }
      break;
    }
    case 'astronaut': {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.56, 0.1, 16, 64), metal('#cbd5e1'));
      ring.rotation.x = Math.PI / 2;
      ring.position.set(0, -1.36, -0.08);
      ring.scale.set(1.12, 1, 0.98);
      g.add(ring);
      const patch = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.17, 0.03, 32), material(look, 'gloss', { color: '#ff2a3c' }));
      patch.position.copy(onSurface(0.55, -2.15, 0.02));
      patch.lookAt(patch.position.clone().add(new THREE.Vector3(0.4, 0.05, 1)));
      patch.rotateX(Math.PI / 2);
      g.add(patch);
      const box = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.32, 0.12), material(look, 'gloss', { color: '#cbd5e1', roughness: 0.4 }));
      box.position.copy(onSurface(0, -2.9, 0.06));
      g.add(box);
      for (let i = 0; i < 3; i++) {
        const led = new THREE.Mesh(new THREE.SphereGeometry(0.035, 12, 8), material(look, 'emissive', { color: ['#ff2a3c', '#22d3ee', '#facc15'][i]! }));
        led.position.copy(box.position).add(new THREE.Vector3(-0.14 + i * 0.14, 0.04, 0.07));
        g.add(led);
      }
      break;
    }
    case 'superhero': {
      const cape = new THREE.Mesh(
        new THREE.LatheGeometry([new THREE.Vector2(0.6, -1.3), new THREE.Vector2(1.25, -1.6), new THREE.Vector2(1.6, -2.1), new THREE.Vector2(1.72, -4.8)], 64, 0.62 * Math.PI, 0.76 * Math.PI),
        material(look, 'fabric', { color: '#ff2a3c', roughness: 0.7, side: THREE.DoubleSide }),
      );
      cape.geometry.scale(1, 1, 0.62);
      cape.geometry.computeVertexNormals();
      cape.position.z = -0.12;
      cape.castShadow = true;
      g.add(cape);
      const emblem = new THREE.Mesh(new THREE.ExtrudeGeometry(starShape(0.3, 0.13), { depth: 0.05, bevelEnabled: true, bevelSize: 0.015, bevelThickness: 0.015, bevelSegments: 2 }), metal('#fbbf24', 0.25));
      emblem.position.copy(onSurface(0, -2.15, -0.01));
      g.add(emblem);
      break;
    }
    case 'samurai': {
      const plateMat = (k: number) => material(look, 'gloss', { color: k % 2 ? '#111114' : '#b91c1c', roughness: 0.3 });
      for (const s of [-1, 1]) {
        for (let k = 0; k < 3; k++) {
          const plate = new THREE.Mesh(new THREE.CylinderGeometry(0.5 - k * 0.02, 0.56 - k * 0.02, 0.16, 32, 1, true, -0.9, 1.8), plateMat(k));
          (plate.material as THREE.Material).side = THREE.DoubleSide;
          plate.position.set(s * (1.2 + k * 0.04), -1.75 - k * 0.15, -0.05);
          plate.rotation.set(0, s * Math.PI / 2, s * 0.35);
          plate.castShadow = true;
          g.add(plate);
        }
      }
      const belt = new THREE.Mesh(new THREE.TorusGeometry(1.0, 0.07, 10, 64), fabric('#111114'));
      belt.rotation.x = Math.PI / 2;
      belt.position.set(0, -3.75, -0.02);
      belt.scale.set(1.02, 0.64, 1);
      g.add(belt);
      break;
    }
    case 'wizard': {
      const gold = metal('#f2c14e', 0.3);
      const pts: Array<[number, number, number]> = [[-0.55, -2.3, 0.16], [0.6, -2.0, 0.12], [0.35, -3.1, 0.1], [-0.3, -3.5, 0.13], [0.7, -3.6, 0.09], [-0.75, -2.95, 0.1]];
      for (const [x, y, s] of pts) {
        const star = new THREE.Mesh(new THREE.ExtrudeGeometry(starShape(s, s * 0.45), { depth: 0.02, bevelEnabled: false }), gold);
        star.position.copy(onSurface(x, y, -0.005));
        star.lookAt(star.position.clone().add(new THREE.Vector3(x * 0.5, 0, 1)));
        g.add(star);
      }
      break;
    }
    case 'techwear': {
      for (const s of [-1, 1]) {
        const pts = [-1.7, -2.1, -2.6, -3.1].map((y) => onSurface(s * 0.5, y, 0.015));
        g.add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 24, 0.018, 8, false), material(look, 'emissive', { color: look.rim[1] })));
      }
      const strap = new THREE.CatmullRomCurve3([onSurface(-0.85, -1.8, 0.03), onSurface(-0.2, -2.6, 0.03), onSurface(0.6, -3.5, 0.03)]);
      const st = new THREE.Mesh(new THREE.TubeGeometry(strap, 32, 0.05, 8, false), material(look, 'gloss', { color: '#2a2a30', roughness: 0.5 }));
      st.scale.set(1, 1, 1);
      g.add(st);
      const buckle = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.12, 0.05), metal('#9ca3af'));
      buckle.position.copy(onSurface(-0.2, -2.6, 0.06));
      buckle.rotation.z = 0.8;
      g.add(buckle);
      break;
    }
  }
  void clamp;
  void gauss;
}
