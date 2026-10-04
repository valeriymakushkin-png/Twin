import * as THREE from 'three';
import { getEyewear, resolveEyewear, type EyewearDef, type EyewearSpec, type FrameShape, type LensTint, type MascotDna } from '@mascot/shared';
import type { FrontMap, HeadParams } from './head';
import { sculpt } from './head';
import { material } from './materials';
import { rng, smoothstep } from './math';
import type { StyleLook } from './styles';

/**
 * Parametric eyewear: lens outlines of real frame families (round wire, panto, browline,
 * pilot, navigator, cat-eye, butterfly, hexagon, D-frame, trapezoid…), rims (full acetate,
 * thick, wire, half-rim, rimless), bridges (single, double bar, keyhole, saddle), temples,
 * nose pads, lens tints (clear, dark, gradient, mirror, colour) and frame materials
 * (acetate, tortoise, metal, crystal). Pairs that reference a .glb are swapped for the
 * loaded model (see `preloadEyewearModel`).
 */

type Pt = [number, number];

const N = 72;

function ellipse(rx: number, ry: number, f?: (x: number, y: number) => Pt): Pt[] {
  const out: Pt[] = [];
  for (let i = 0; i < N; i++) {
    const t = (i / N) * Math.PI * 2;
    const x = Math.cos(t) * rx;
    const y = Math.sin(t) * ry;
    out.push(f ? f(x, y) : [x, y]);
  }
  return out;
}

function superellipse(rx: number, ry: number, n: number, f?: (x: number, y: number) => Pt): Pt[] {
  return ellipse(1, 1, (cx, cy) => {
    const x = Math.sign(cx) * Math.pow(Math.abs(cx), 2 / n) * rx;
    const y = Math.sign(cy) * Math.pow(Math.abs(cy), 2 / n) * ry;
    return f ? f(x, y) : [x, y];
  });
}

function polygon(sides: number, rx: number, ry: number, rot: number, round = 0.12): Pt[] {
  // Rounded polygon: sample a polygon and soften the corners by blending with a circle.
  return ellipse(1, 1, (cx, cy) => {
    const t = Math.atan2(cy, cx) - rot;
    const seg = (Math.PI * 2) / sides;
    const k = Math.cos(Math.PI / sides) / Math.cos(((t % seg) + seg) % seg - seg / 2);
    const r = k * (1 - round) + round;
    return [Math.cos(t + rot) * r * rx, Math.sin(t + rot) * r * ry];
  });
}

/** Lens outline in units of R, outer (temple) side towards +x. */
function outline(shape: FrameShape): Pt[] {
  switch (shape) {
    case 'round':
    case 'monocle':
      return ellipse(1, 1);
    case 'small-round':
      return ellipse(0.9, 0.9);
    case 'oval':
      return ellipse(1.14, 0.8);
    case 'slim-oval':
      return ellipse(1.28, 0.5, (x, y) => [x, y + 0.12 * Math.max(0, x) * (y > 0 ? 1 : 0.4)]);
    case 'panto':
      return ellipse(1.06, 0.96, (x, y) => [x, y > 0.72 ? 0.72 + (y - 0.72) * 0.35 : y]);
    case 'square':
      return superellipse(1.12, 0.94, 4.2);
    case 'oversized':
      return superellipse(1.28, 1.12, 3.6, (x, y) => [x, y + 0.06 * x]);
    case 'rectangle':
      return superellipse(1.22, 0.72, 5);
    case 'half-eye':
      return superellipse(1.08, 0.5, 4.5, (x, y) => [x, y - 0.42]);
    case 'browline':
      return superellipse(1.14, 0.84, 3.2, (x, y) => [x * (y > 0 ? 1.04 : 1), y > 0.6 ? 0.6 + (y - 0.6) * 0.4 : y]);
    case 'pilot':
      // Teardrop: straight top, deepest point towards the nose.
      return ellipse(1, 1, (cx, cy) => {
        const x = cx * 1.18;
        if (cy > 0) return [x, 0.62 + 0.06 * cx + cy * 0.12];
        const deep = 1.02 - 0.18 * (cx + 1) * 0.5;
        return [x * (1 - 0.08 * -cy), cy * deep];
      });
    case 'navigator':
      return superellipse(1.16, 0.95, 3.4, (x, y) => [x, y > 0 ? Math.min(y, 0.7) : y * (1.05 - 0.12 * (x + 1.16) / 2.32)]);
    case 'cat-eye':
      return ellipse(1.12, 0.78, (x, y) => [x, y + (y > 0 ? 0.32 : 0.08) * Math.max(0, x) ** 1.6]);
    case 'winged':
      return ellipse(1.14, 0.76, (x, y) => [x + 0.22 * Math.max(0, x) * Math.max(0, y), y + (y > 0 ? 0.55 : 0.1) * Math.max(0, x) ** 2]);
    case 'butterfly':
      return ellipse(1.2, 1.0, (x, y) => [x * (y > 0 ? 1.08 : 0.92) + (y < 0 ? 0.1 : 0), y > 0 ? y * 0.9 + 0.12 * Math.max(0, x) : y * (1 - 0.25 * Math.max(0, -x))]);
    case 'hexagon':
      return polygon(6, 1.12, 0.98, 0, 0.1);
    case 'octagon':
      return polygon(8, 1.08, 0.98, Math.PI / 8, 0.06);
    case 'geometric':
      return polygon(5, 1.12, 0.98, Math.PI / 2, 0.14).map(([x, y]) => [x, y * 0.92 + 0.04 * x] as Pt);
    case 'd-frame':
      return ellipse(1, 1, (cx, cy) => [cx * 1.12, cy > 0 ? 0.72 + 0.12 * cy : cy * 0.95]);
    case 'trapezoid':
      return ellipse(1, 1, (cx, cy) => {
        const top = cy > 0;
        const w = top ? 1.22 : 1.0 - 0.1 * -cy;
        return [cx * w + (top ? 0.02 : -0.06), top ? 0.62 + 0.1 * cx + 0.12 * cy : cy * 0.8];
      });
    case 'heart':
      return ellipse(1, 1, (cx, cy) => {
        const t = Math.atan2(cy, cx);
        const x = 16 * Math.sin(t) ** 3;
        const y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
        return [x / 14, y / 14 + 0.1];
      });
    case 'star':
      return ellipse(1, 1, (cx, cy) => {
        const t = Math.atan2(cy, cx) + Math.PI / 2;
        const k = Math.cos((t * 5) % (Math.PI * 2));
        const r = 0.66 + 0.5 * Math.pow((k + 1) / 2, 2.2);
        return [Math.cos(t - Math.PI / 2) * r * 1.1, Math.sin(t - Math.PI / 2) * r * 1.1];
      });
    default:
      return superellipse(1.15, 0.8, 4);
  }
}

/** Offsets a closed outline along its normals (positive = outwards). */
function offset(pts: Pt[], d: number): Pt[] {
  const n = pts.length;
  // Orientation: CCW polygons have positive area.
  let area = 0;
  for (let i = 0; i < n; i++) {
    const [x0, y0] = pts[i]!;
    const [x1, y1] = pts[(i + 1) % n]!;
    area += x0 * y1 - x1 * y0;
  }
  const sgn = area > 0 ? 1 : -1;
  return pts.map((p, i) => {
    const a = pts[(i - 1 + n) % n]!;
    const b = pts[(i + 1) % n]!;
    let nx = b[1] - a[1];
    let ny = -(b[0] - a[0]);
    const l = Math.hypot(nx, ny) || 1;
    nx = (nx / l) * sgn;
    ny = (ny / l) * sgn;
    return [p[0] + nx * d, p[1] + ny * d] as Pt;
  });
}

function toShape(pts: Pt[]): THREE.Shape {
  return new THREE.Shape(pts.map(([x, y]) => new THREE.Vector2(x, y)));
}

function toPath(pts: Pt[]): THREE.Path {
  return new THREE.Path(pts.map(([x, y]) => new THREE.Vector2(x, y)));
}

/** Lens wrap: bends a flat piece back with distance from the lens centre. */
function bend(geo: THREE.BufferGeometry, k: number, cx = 0) {
  const pos = geo.attributes.position as THREE.BufferAttribute;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i) - cx;
    pos.setZ(i, pos.getZ(i) - k * x * x);
  }
  geo.computeVertexNormals();
}

/* -------------------------------- textures -------------------------------- */

function canvas(w: number, h: number): CanvasRenderingContext2D {
  const c = typeof OffscreenCanvas !== 'undefined' ? new OffscreenCanvas(w, h) : Object.assign(document.createElement('canvas'), { width: w, height: h });
  return c.getContext('2d') as CanvasRenderingContext2D;
}

let tortoiseTex: THREE.Texture | null = null;
function tortoise(): THREE.Texture {
  if (tortoiseTex) return tortoiseTex;
  const ctx = canvas(256, 256);
  ctx.fillStyle = '#7a4520';
  ctx.fillRect(0, 0, 256, 256);
  const r = rng(7);
  for (let i = 0; i < 140; i++) {
    const x = r() * 256;
    const y = r() * 256;
    const rad = 6 + r() * 26;
    const g = ctx.createRadialGradient(x, y, 0, x, y, rad);
    const dark = r() < 0.6;
    g.addColorStop(0, dark ? 'rgba(28,12,4,0.9)' : 'rgba(214,150,70,0.8)');
    g.addColorStop(1, dark ? 'rgba(28,12,4,0)' : 'rgba(214,150,70,0)');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.ellipse(x, y, rad, rad * (0.5 + r() * 0.6), r() * 3, 0, Math.PI * 2);
    ctx.fill();
  }
  tortoiseTex = new THREE.CanvasTexture(ctx.canvas as HTMLCanvasElement);
  tortoiseTex.wrapS = tortoiseTex.wrapT = THREE.RepeatWrapping;
  tortoiseTex.colorSpace = THREE.SRGBColorSpace;
  return tortoiseTex;
}

let gradientTex: THREE.Texture | null = null;
function gradient(): THREE.Texture {
  if (gradientTex) return gradientTex;
  const ctx = canvas(4, 128);
  const g = ctx.createLinearGradient(0, 0, 0, 128);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.55, 'rgba(255,255,255,0.55)');
  g.addColorStop(1, 'rgba(255,255,255,0.12)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 4, 128);
  gradientTex = new THREE.CanvasTexture(ctx.canvas as HTMLCanvasElement);
  return gradientTex;
}

/* -------------------------------- materials ------------------------------- */

function frameMaterial(look: StyleLook, spec: EyewearSpec, color = spec.frame): THREE.Material {
  switch (spec.material) {
    case 'metal':
      return material(look, 'metal', { color, roughness: 0.22 });
    case 'tortoise': {
      const m = material(look, 'gloss', { color: '#ffffff', roughness: 0.2, map: tortoise() });
      return m;
    }
    case 'clear':
      return material(look, 'glass', { color, opacity: 0.62 });
    default:
      return material(look, 'gloss', { color, roughness: 0.2 });
  }
}

const MIRROR: Partial<Record<LensTint, string>> = { 'mirror-blue': '#3d8bff', 'mirror-gold': '#ffc23d', 'mirror-silver': '#e6ecf3', 'mirror-red': '#ff3b3b' };
const TINT: Partial<Record<LensTint, [string, number]>> = {
  clear: ['#e4f2ff', 0.13],
  dark: ['#0a0a10', 0.9],
  brown: ['#3b2412', 0.86],
  green: ['#1e3a26', 0.86],
  rose: ['#ff7aa8', 0.5],
  yellow: ['#ffd23a', 0.48],
  blue: ['#3d7dff', 0.5],
  purple: ['#8b4dff', 0.52],
};

function lensMaterial(look: StyleLook, tint: LensTint): THREE.Material {
  const mirror = MIRROR[tint];
  if (mirror) {
    const m = new THREE.MeshPhysicalMaterial({ color: mirror, metalness: 1, roughness: 0.05, clearcoat: 1, side: THREE.DoubleSide, envMapIntensity: 1.6 });
    return m;
  }
  if (tint === 'gradient') {
    return new THREE.MeshPhysicalMaterial({ color: '#1a1410', alphaMap: gradient(), transparent: true, roughness: 0.05, clearcoat: 1, side: THREE.DoubleSide, depthWrite: false });
  }
  const [c, o] = TINT[tint] ?? TINT.clear!;
  const m = material(look, tint === 'clear' ? 'glass' : 'gloss', { color: c, opacity: o, roughness: 0.05, side: THREE.DoubleSide });
  (m as THREE.MeshPhysicalMaterial).depthWrite = false;
  return m;
}

/** Normalised UVs (0..1 over the shape bounds) so gradient lenses fade top → bottom. */
function boundsUv(geo: THREE.BufferGeometry) {
  geo.computeBoundingBox();
  const b = geo.boundingBox!;
  const pos = geo.attributes.position as THREE.BufferAttribute;
  const uv = new Float32Array(pos.count * 2);
  for (let i = 0; i < pos.count; i++) {
    uv[i * 2] = (pos.getX(i) - b.min.x) / (b.max.x - b.min.x || 1);
    uv[i * 2 + 1] = (pos.getY(i) - b.min.y) / (b.max.y - b.min.y || 1);
  }
  geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
}

/* ------------------------------ GLB eyewear ------------------------------ */

const glbModels = new Map<string, THREE.Object3D>();
const glbPending = new Map<string, Promise<THREE.Object3D | null>>();

/**
 * Loads a licensed glTF/GLB eyewear model once. Convention: the frame faces +z, x spans
 * temple to temple; it is centred and scaled to the face automatically. Optional nodes
 * `lens_L` / `lens_R` get the lens tint of the catalog entry.
 */
export function preloadEyewearModel(url: string): Promise<THREE.Object3D | null> {
  const hit = glbModels.get(url);
  if (hit) return Promise.resolve(hit);
  let p = glbPending.get(url);
  if (!p) {
    p = import('three/examples/jsm/loaders/GLTFLoader.js')
      .then(({ GLTFLoader }) => new GLTFLoader().loadAsync(url))
      .then((gltf) => {
        const scene = gltf.scene;
        const box = new THREE.Box3().setFromObject(scene);
        const size = box.getSize(new THREE.Vector3());
        const centre = box.getCenter(new THREE.Vector3());
        const wrap = new THREE.Group();
        scene.position.sub(centre);
        wrap.add(scene);
        wrap.userData.width = size.x || 1;
        wrap.userData.depth = size.z || 1;
        glbModels.set(url, wrap);
        return wrap;
      })
      .catch(() => null);
    glbPending.set(url, p);
  }
  return p;
}

/** Resolves when the GLB (if any) of the pair this character wears is loaded; true if one was. */
export async function prepareEyewear(dna: MascotDna, glasses?: string): Promise<boolean> {
  const def = glasses === 'none' ? null : (getEyewear(glasses) ?? resolveEyewear(dna));
  if (!def?.glb || glbModels.has(def.glb)) return false;
  return Boolean(await preloadEyewearModel(def.glb));
}

function glbEyewear(def: EyewearDef, look: StyleLook, frameWidth: number): THREE.Object3D | null {
  const src = def.glb ? glbModels.get(def.glb) : undefined;
  if (!src) return null;
  const obj = src.clone(true);
  const k = frameWidth / (src.userData.width as number);
  obj.scale.setScalar(k);
  const lens = lensMaterial(look, def.spec.lens);
  obj.traverse((o) => {
    if ((o as THREE.Mesh).isMesh) {
      o.castShadow = true;
      if (/lens/i.test(o.name)) (o as THREE.Mesh).material = lens;
    }
  });
  obj.userData.depth = (src.userData.depth as number) * k;
  return obj;
}

/* --------------------------------- builder -------------------------------- */

function tube(pts: THREE.Vector3[], r: number, mat: THREE.Material, closed = false, seg = 48): THREE.Mesh {
  const curve = new THREE.CatmullRomCurve3(pts, closed, 'centripetal');
  const m = new THREE.Mesh(new THREE.TubeGeometry(curve, seg, r, 8, closed), mat);
  m.castShadow = true;
  return m;
}

/** Glasses for a catalog pair, fitted in front of the eyes with temples to the ears. */
export function buildEyewear(def: EyewearDef, look: StyleLook, map: FrontMap, P: HeadParams, eyeR: number, eyeX: number): THREE.Group {
  const g = new THREE.Group();
  g.name = `eyewear-${def.key}`;
  const spec = def.spec;
  const size = spec.size ?? 1;
  const R = eyeR * 1.42 * size;
  const ey = P.eyeY + 0.01;
  const z = Math.max(map.surfaceZ(eyeX, P.eyeY), map.surfaceZ(0, P.eyeY)) + eyeR * 0.75 + Math.max(0, size - 1) * 0.22;
  const earX = map.halfWidth(P.eyeY) + 0.03;

  const glb = glbEyewear(def, look, 2 * (eyeX + R * 1.25));
  if (glb) {
    glb.position.set(0, ey, z);
    g.add(glb);
    return g;
  }

  const frameMat = frameMaterial(look, spec);
  const accentMat = spec.accent ? material(look, 'gloss', { color: spec.accent, roughness: 0.2 }) : frameMat;
  const lensMat = lensMaterial(look, spec.lens);
  const metal = spec.material === 'metal';
  const th = spec.thickness ?? 1;
  const rimW = (spec.rim === 'thick' ? 0.075 : spec.rim === 'full' ? 0.05 : 0.02) * th;
  const depth = spec.rim === 'thick' ? 0.07 : 0.045;
  const wrap = spec.shape === 'wrap' ? 0.34 : 0.12;
  const bendK = spec.shape === 'wrap' ? 0.5 : 0.18;

  if (spec.shape === 'shield' || spec.shape === 'goggles') {
    buildVisor(g, def, look, frameMat, lensMat, { R, ey, z, eyeX, earX, P });
    return g;
  }

  const sides: Array<1 | -1> = spec.shape === 'monocle' ? [-1] : [-1, 1];
  const hinge: Record<number, THREE.Vector3> = {};
  const inner: Record<number, THREE.Vector3> = {};
  const basePts = outline(spec.shape === 'wrap' ? 'rectangle' : spec.shape).map(([x, y]) => [x * R, y * R] as Pt);
  if (spec.shape === 'wrap') basePts.forEach((p) => (p[1] += p[0] * 0.18));
  // Wide lenses move outwards rather than overlapping at the bridge.
  const nasal = Math.max(...basePts.map(([x]) => -x));
  const cx = spec.shape === 'monocle' ? eyeX : Math.max(eyeX, nasal + rimW + 0.055);
  for (const s of sides) {
    const holder = new THREE.Group();
    holder.position.set(s * cx, ey, z);
    holder.rotation.y = s * wrap;
    g.add(holder);
    // Mirror for the right lens, keeping the outline counter-clockwise.
    const lensPts = s > 0 ? basePts : basePts.map(([x, y]) => [-x, y] as Pt).reverse();

    // Lens.
    const lensGeo = new THREE.ShapeGeometry(toShape(lensPts), 24);
    boundsUv(lensGeo);
    bend(lensGeo, bendK);
    const lens = new THREE.Mesh(lensGeo, lensMat);
    lens.position.z = -0.008;
    lens.renderOrder = 2;
    holder.add(lens);

    // Rim.
    if (spec.rim === 'full' || spec.rim === 'thick') {
      const ring = toShape(offset(lensPts, rimW));
      ring.holes.push(toPath(lensPts.slice().reverse()));
      const geo = new THREE.ExtrudeGeometry(ring, { depth, bevelEnabled: true, bevelThickness: depth * 0.3, bevelSize: rimW * 0.25, bevelSegments: 2, curveSegments: 4 });
      geo.translate(0, 0, -depth * 0.6);
      bend(geo, bendK);
      if (spec.material === 'tortoise') boundsUv(geo);
      const rim = new THREE.Mesh(geo, frameMat);
      rim.castShadow = true;
      holder.add(rim);
    } else if (spec.rim === 'wire') {
      const r3 = lensPts.map(([x, y]) => new THREE.Vector3(x, y, -bendK * x * x));
      holder.add(tube(r3, 0.016 * th * (spec.shape === 'monocle' ? 1.3 : 1), frameMat, true, 96));
    } else if (spec.rim === 'half') {
      // Top bar (browline / sport) + thin nylon line underneath.
      const top = lensPts.filter(([, y]) => y > -0.1 * R);
      const ordered = top.sort((a, b) => a[0] - b[0]).map(([x, y]) => new THREE.Vector3(x, y + 0.01, -bendK * x * x));
      const barR = (spec.shape === 'browline' ? 0.042 : spec.shape === 'wrap' ? 0.04 : 0.022) * th;
      const bar = tube(ordered, barR, spec.shape === 'browline' ? accentMat : frameMat, false, 48);
      bar.scale.z = 0.8;
      holder.add(bar);
      const line = lensPts.map(([x, y]) => new THREE.Vector3(x, y, -bendK * x * x));
      holder.add(tube(line, 0.006, frameMat, true, 96));
    } else {
      // Rimless: drilled mounts at the temple and nose.
      for (const sx of [-1, 1]) {
        const mount = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.04, 0.03), frameMat);
        mount.position.set(sx * R * 1.08, R * 0.25, 0);
        holder.add(mount);
      }
    }

    // Outer hinge + inner bridge point in head space.
    let maxX = -Infinity;
    let hingePt: Pt = [R, 0];
    let minX = Infinity;
    let innerPt: Pt = [-R, 0];
    for (const p of basePts) {
      const score = p[0] + p[1] * 0.35;
      if (score > maxX) {
        maxX = score;
        hingePt = p;
      }
      const sc = p[0] - p[1] * 0.25;
      if (sc < minX) {
        minX = sc;
        innerPt = p;
      }
    }
    holder.updateMatrix();
    hinge[s] = new THREE.Vector3(s * (hingePt[0] + rimW), hingePt[1], -bendK * hingePt[0] ** 2 - 0.02).applyMatrix4(holder.matrix);
    inner[s] = new THREE.Vector3(s * (innerPt[0] - rimW * 0.5), innerPt[1], -bendK * innerPt[0] ** 2).applyMatrix4(holder.matrix);

    // Nose pads (metal frames).
    if (metal && spec.shape !== 'monocle') {
      const pad = new THREE.Mesh(new THREE.SphereGeometry(0.035, 12, 8), material(look, 'glass', { color: '#ffffff', opacity: 0.5 }));
      pad.scale.set(0.6, 1, 0.5);
      pad.position.set(-s * R * 0.62, -R * 0.38, -0.08);
      holder.add(pad);
    }
  }

  // Bridge.
  if (sides.length === 2) {
    const a = inner[-1]!;
    const b = inner[1]!;
    const lift = spec.bridge === 'keyhole' ? 0.11 : spec.bridge === 'saddle' ? 0.02 : 0.06;
    const mid = new THREE.Vector3(0, Math.max(a.y, b.y) + lift, Math.max(a.z, b.z) + 0.05);
    const br = (spec.rim === 'thick' ? 0.04 : spec.rim === 'full' ? 0.03 : 0.016) * th;
    if (spec.bridge === 'keyhole') {
      g.add(tube([a, new THREE.Vector3(a.x * 0.5, mid.y, mid.z), mid, new THREE.Vector3(b.x * 0.5, mid.y, mid.z), b], br, frameMat, false, 32));
    } else {
      g.add(tube([a, mid, b], br, frameMat, false, 24));
    }
    if (spec.bridge === 'double') {
      const top = R * (spec.shape === 'pilot' || spec.shape === 'navigator' ? 0.62 : 0.8);
      const xa = -cx + R * 0.4;
      g.add(tube([new THREE.Vector3(xa, ey + top, z - 0.02), new THREE.Vector3(0, ey + top + 0.01, z + 0.01), new THREE.Vector3(-xa, ey + top, z - 0.02)], 0.014, frameMat, false, 16));
    }
  }

  // Temples / strap / chain.
  if (spec.strap) {
    strap(g, P, ey, look);
    for (const s of sides) g.add(tube([hinge[s]!, new THREE.Vector3(s * (earX - 0.02), ey, hinge[s]!.z - 0.25)], 0.05, frameMat, false, 8));
  } else if (!spec.noTemples) {
    const tr = metal || spec.rim === 'wire' || spec.rim === 'rimless' ? 0.016 : 0.028 * Math.min(1.4, th);
    for (const s of sides) {
      const h = hinge[s]!;
      const temple = tube([h, new THREE.Vector3(s * earX, ey + 0.04, h.z - 0.45), new THREE.Vector3(s * earX, ey + 0.02, -0.12), new THREE.Vector3(s * (earX - 0.04), ey - 0.14, -0.3)], tr, frameMat, false, 32);
      g.add(temple);
      if (!metal && spec.rim !== 'wire') {
        const block = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.07, 0.09), frameMat);
        block.position.copy(h).add(new THREE.Vector3(s * 0.01, 0, -0.02));
        block.castShadow = true;
        g.add(block);
      }
    }
  } else if (spec.shape === 'monocle') {
    // Chain hanging from the rim.
    const h = hinge[-1]!;
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i <= 12; i++) {
      const t = i / 12;
      pts.push(new THREE.Vector3(h.x - 0.05 - t * 0.25, h.y - t * 1.1 - Math.sin(t * Math.PI) * 0.1, h.z - t * 0.2));
    }
    g.add(tube(pts, 0.008, frameMat, false, 48));
  }
  return g;
}

interface VisorCtx {
  R: number;
  ey: number;
  z: number;
  eyeX: number;
  earX: number;
  P: HeadParams;
}

/** One-piece lenses: shield visor and goggles. */
function buildVisor(g: THREE.Group, def: EyewearDef, look: StyleLook, frameMat: THREE.Material, lensMat: THREE.Material, c: VisorCtx) {
  const goggles = def.spec.shape === 'goggles';
  const W = c.eyeX + c.R * (goggles ? 1.25 : 1.35);
  const H = c.R * (goggles ? 1.05 : 0.95);
  const pts: Pt[] = superellipse(W, H, goggles ? 3.2 : 4.2, (x, y) => {
    // Nose notch at the bottom centre.
    const notch = y < 0 ? 0.55 * H * Math.exp(-(x * x) / (2 * (0.16 * W) ** 2)) : 0;
    return [x, y + notch + (goggles ? 0 : 0.08 * Math.abs(x))];
  });
  const k = goggles ? 0.28 : 0.34;
  const z = c.z + (goggles ? 0.12 : 0.06);
  const lensGeo = new THREE.ShapeGeometry(toShape(pts), 32);
  boundsUv(lensGeo);
  bend(lensGeo, k);
  const lens = new THREE.Mesh(lensGeo, lensMat);
  lens.position.set(0, c.ey, z);
  lens.renderOrder = 2;
  g.add(lens);
  if (goggles) {
    const ring = toShape(offset(pts, 0.1));
    ring.holes.push(toPath(pts.slice().reverse()));
    const geo = new THREE.ExtrudeGeometry(ring, { depth: 0.12, bevelEnabled: true, bevelThickness: 0.04, bevelSize: 0.04, bevelSegments: 3, curveSegments: 4 });
    geo.translate(0, 0, -0.1);
    bend(geo, k);
    const rim = new THREE.Mesh(geo, frameMat);
    rim.position.set(0, c.ey, z);
    rim.castShadow = true;
    g.add(rim);
    strap(g, c.P, c.ey, look);
  } else {
    const top = pts.filter(([, y]) => y > 0).sort((a, b) => a[0] - b[0]).map(([x, y]) => new THREE.Vector3(x, y + c.ey + 0.01, z - k * x * x));
    g.add(tube(top, 0.022, frameMat, false, 48));
    for (const s of [-1, 1]) {
      const h = new THREE.Vector3(s * W * 0.98, c.ey + H * 0.4, z - k * W * W);
      g.add(tube([h, new THREE.Vector3(s * c.earX, c.ey + 0.04, h.z - 0.4), new THREE.Vector3(s * c.earX, c.ey + 0.02, -0.12), new THREE.Vector3(s * (c.earX - 0.04), c.ey - 0.14, -0.3)], 0.022, frameMat, false, 32));
    }
  }
}

/** Elastic band around the head at eye level (goggles). */
function strap(g: THREE.Group, P: HeadParams, ey: number, look: StyleLook) {
  const pts: THREE.Vector3[] = [];
  const d = new THREE.Vector3();
  for (let i = 0; i <= 48; i++) {
    const a = 0.35 * Math.PI + (i / 48) * 1.3 * Math.PI;
    d.set(Math.sin(a), ey + 0.06 + 0.08 * smoothstep(0.5, 1, Math.abs(Math.cos(a))), Math.cos(a)).normalize();
    pts.push(sculpt(d, P, new THREE.Vector3(), 1.05));
  }
  const band = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 96, 0.05, 8, false), material(look, 'rubber', { color: '#18181c', roughness: 0.8 }));
  band.castShadow = true;
  g.add(band);
}
