import * as THREE from 'three';
import type { HairStyle } from '@mascot/shared';
import { sculpt, type HeadParams } from './head';
import { backFlow, buildClumps, crownFlow, fringeFlow, partFlow, tieFlow, type ClumpSpec } from './clumps';
import { fbm3, gauss, lerp, rng, smoothstep } from './math';

interface ShellSpec {
  front: number;
  side: number;
  back: number;
  sideburn: number;
  base: number;
  top: number;
  /** Extra volume above the forehead (quiff / pompadour). */
  frontBoost: number;
  noiseAmp: number;
  noiseFreq: number;
  /** Bangs: lowers the front hairline to this height (dir.y) with a jagged edge. */
  fringe?: number;
  fringeWidth?: number;
  /** Side part groove x position. */
  part?: number;
  /** Mohawk: only a central strip has volume. */
  strip?: number;
  /** Swept fringe direction (+1 → towards +x). */
  sweep?: number;
}

const SHAVED: Partial<ShellSpec> = { base: 0.008, top: 0, noiseAmp: 0.002 };

const SPECS: Partial<Record<HairStyle, ShellSpec>> = {
  'buzz-cut': { front: 0.56, side: 0.2, back: -0.4, sideburn: 0.2, base: 0.012, top: 0.006, frontBoost: 0, noiseAmp: 0.003, noiseFreq: 30 },
  'crew-cut': { front: 0.52, side: 0.2, back: -0.38, sideburn: 0.22, base: 0.03, top: 0.07, frontBoost: 0.03, noiseAmp: 0.012, noiseFreq: 14 },
  'short-textured': { front: 0.5, side: 0.2, back: -0.36, sideburn: 0.22, base: 0.035, top: 0.13, frontBoost: 0.05, noiseAmp: 0.045, noiseFreq: 9 },
  'side-part': { front: 0.5, side: 0.18, back: -0.36, sideburn: 0.22, base: 0.04, top: 0.1, frontBoost: 0.04, noiseAmp: 0.012, noiseFreq: 6, part: -0.32, sweep: 1 },
  quiff: { front: 0.5, side: 0.2, back: -0.36, sideburn: 0.2, base: 0.03, top: 0.1, frontBoost: 0.26, noiseAmp: 0.02, noiseFreq: 7, sweep: 1 },
  pompadour: { front: 0.5, side: 0.2, back: -0.36, sideburn: 0.2, base: 0.035, top: 0.12, frontBoost: 0.36, noiseAmp: 0.012, noiseFreq: 5 },
  undercut: { front: 0.5, side: 0.48, back: 0.3, sideburn: 0, base: 0.05, top: 0.15, frontBoost: 0.08, noiseAmp: 0.025, noiseFreq: 8, sweep: -1 },
  mohawk: { front: 0.45, side: 0.2, back: -0.4, sideburn: 0.15, base: 0.006, top: 0, frontBoost: 0, noiseAmp: 0.03, noiseFreq: 12, strip: 0.3 },
  mullet: { front: 0.5, side: 0.2, back: -0.85, sideburn: 0.22, base: 0.05, top: 0.09, frontBoost: 0.04, noiseAmp: 0.025, noiseFreq: 7 },
  'curly-short': { front: 0.52, side: 0.34, back: -0.3, sideburn: 0.15, base: 0.01, top: 0.03, frontBoost: 0, noiseAmp: 0.004, noiseFreq: 20 },
  afro: { front: 0.48, side: 0.12, back: -0.45, sideburn: 0.15, base: 0.08, top: 0.12, frontBoost: 0, noiseAmp: 0.01, noiseFreq: 8 },
  'medium-wavy': { front: 0.46, side: -0.2, back: -0.7, sideburn: 0, base: 0.06, top: 0.07, frontBoost: 0.02, noiseAmp: 0.03, noiseFreq: 6, fringe: 0.5, fringeWidth: 0.5, sweep: 1 },
  'medium-straight': { front: 0.46, side: -0.2, back: -0.7, sideburn: 0, base: 0.055, top: 0.06, frontBoost: 0.01, noiseAmp: 0.01, noiseFreq: 6, fringe: 0.42, fringeWidth: 0.55 },
  'long-straight': { front: 0.48, side: -0.2, back: -0.8, sideburn: 0, base: 0.05, top: 0.06, frontBoost: 0.02, noiseAmp: 0.01, noiseFreq: 5, part: 0.02 },
  'long-wavy': { front: 0.46, side: -0.2, back: -0.8, sideburn: 0, base: 0.06, top: 0.07, frontBoost: 0.03, noiseAmp: 0.03, noiseFreq: 6, part: -0.18 },
  'long-curly': { front: 0.46, side: -0.2, back: -0.8, sideburn: 0, base: 0.08, top: 0.09, frontBoost: 0.03, noiseAmp: 0.05, noiseFreq: 9 },
  bob: { front: 0.44, side: -0.25, back: -0.65, sideburn: 0, base: 0.07, top: 0.06, frontBoost: 0.01, noiseAmp: 0.01, noiseFreq: 6, fringe: 0.36, fringeWidth: 0.62 },
  pixie: { front: 0.4, side: 0.15, back: -0.42, sideburn: 0.12, base: 0.04, top: 0.08, frontBoost: 0.05, noiseAmp: 0.025, noiseFreq: 9, fringe: 0.34, fringeWidth: 0.42, sweep: 1 },
  ponytail: { front: 0.5, side: 0.12, back: -0.45, sideburn: 0.1, base: 0.03, top: 0.04, frontBoost: 0.01, noiseAmp: 0.008, noiseFreq: 6, part: 0 },
  bun: { front: 0.5, side: 0.12, back: -0.45, sideburn: 0.1, base: 0.03, top: 0.04, frontBoost: 0.01, noiseAmp: 0.008, noiseFreq: 6 },
  braids: { front: 0.5, side: 0.15, back: -0.45, sideburn: 0.1, base: 0.03, top: 0.03, frontBoost: 0, noiseAmp: 0.006, noiseFreq: 10, part: 0 },
  dreadlocks: { front: 0.5, side: 0.15, back: -0.45, sideburn: 0.1, base: 0.04, top: 0.05, frontBoost: 0, noiseAmp: 0.02, noiseFreq: 12 },
};

function hairline(dir: THREE.Vector3, s: ShellSpec): number {
  const phi = Math.atan2(dir.x, dir.z);
  const a = Math.abs(phi) / Math.PI;
  let h = a < 0.5 ? lerp(s.front, s.side, smoothstep(0, 0.5, a)) : lerp(s.side, s.back, smoothstep(0.5, 1, a));
  h -= s.sideburn * gauss((a - 0.42) ** 2, 0.03);
  // Temple recession gives a natural "M" hairline instead of a bowl cut.
  if (s.fringe === undefined) h += 0.07 * gauss((a - 0.17) ** 2, 0.05);
  if (s.fringe !== undefined && a < (s.fringeWidth ?? 0.4)) {
    const k = 1 - smoothstep((s.fringeWidth ?? 0.4) * 0.6, s.fringeWidth ?? 0.4, a);
    const jag = 0.025 * Math.sin(phi * 38) + 0.02 * Math.sin(phi * 13 + 1) + (s.sweep ?? 0) * phi * 0.18;
    h = lerp(h, s.fringe + jag, k);
  }
  return h;
}

export interface HairResult {
  group: THREE.Group;
  /** Approx. hair volume above the scalp at the crown (used to place hats). */
  crown: number;
}

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

/** Builds the hair for a style out of a sculpted shell plus style-specific volumes. */
export function buildHair(style: HairStyle, P: HeadParams, mat: THREE.Material, seed: number, detail: number, simple = false, collider?: (x: number, y: number, z: number) => number): HairResult {
  const group = new THREE.Group();
  if (style === 'bald') return { group, crown: 0 };
  const spec = simple ? { ...SPECS['crew-cut']!, base: 0.1, top: 0.08, noiseAmp: 0, frontBoost: 0.02 } : (SPECS[style] ?? SPECS['crew-cut']!);
  const r = rng(seed);

  const thickness = (dir: THREE.Vector3, m: number) => {
    if (spec.strip !== undefined) {
      const strip = gauss(dir.x * dir.x, spec.strip * 0.3) * smoothstep(-0.1, 0.5, dir.y);
      return (SHAVED.base ?? 0.008) + strip * 0.34 * m;
    }
    let t = spec.base + spec.top * smoothstep(spec.side, 1, dir.y);
    t += spec.frontBoost * gauss(dir.x * dir.x + (dir.y - 0.72) ** 2, 0.16) * smoothstep(0.1, 0.6, dir.z);
    if (spec.part !== undefined) t *= 1 - 0.55 * gauss((dir.x - spec.part) ** 2, 0.03) * smoothstep(0.35, 0.7, dir.y) * smoothstep(-0.2, 0.3, dir.z);
    return t;
  };

  const geo = new THREE.SphereGeometry(1, 140, 104);
  const pos = geo.attributes.position as THREE.BufferAttribute;
  const dir = new THREE.Vector3();
  const out = new THREE.Vector3();
  const amp = spec.noiseAmp * Math.max(0.25, detail);
  for (let i = 0; i < pos.count; i++) {
    dir.fromBufferAttribute(pos, i).normalize();
    const h = hairline(dir, spec);
    const m = smoothstep(h - 0.035, h + 0.035, dir.y);
    const n = fbm3(dir.x * spec.noiseFreq, dir.y * spec.noiseFreq, dir.z * spec.noiseFreq, 3);
    const scale = 1 + (thickness(dir, m) + amp * n) * m + (m - 1) * 0.05;
    sculpt(dir, P, out, scale);
    pos.setXYZ(i, out.x, out.y, out.z);
  }
  geo.computeVertexNormals();
  const shell = new THREE.Mesh(geo, mat);
  shell.castShadow = true;
  shell.receiveShadow = true;
  shell.name = 'hair-shell';
  shell.userData.outline = true;
  if (simple) return { group, crown: spec.base + spec.top };
  group.add(shell);
  let crown = spec.base + spec.top;

  const fib = (n: number, keep: (d: THREE.Vector3) => boolean) => {
    const pts: THREE.Vector3[] = [];
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < n; i++) {
      const y = 1 - (i / (n - 1)) * 2;
      const rad = Math.sqrt(1 - y * y);
      const th = golden * i;
      const d = new THREE.Vector3(Math.cos(th) * rad, y, Math.sin(th) * rad);
      if (keep(d)) pts.push(d);
    }
    return pts;
  };

  // Curls: instanced coils over a volume above the scalp.
  if (style === 'curly-short' || style === 'afro' || style === 'long-curly') {
    const afro = style === 'afro';
    // Low-poly coils/blobs: thousands of instances, so every triangle counts on phones.
    const coil = new THREE.TorusGeometry(1, 0.55, 6, 10);
    const blob = new THREE.IcosahedronGeometry(1, 1);
    const dirs = fib(afro ? 3600 : 2400, (d) => {
      const h = hairline(d, spec);
      if (afro) return d.y > h + 0.02;
      if (style === 'long-curly') return d.y > h + 0.04 && d.y > 0.15;
      return d.y > Math.max(h, 0.42) + 0.02;
    });
    const layers = afro ? 3 : 2;
    const count = dirs.length * layers;
    const coils = new THREE.InstancedMesh(coil, mat, Math.ceil(count * 0.6));
    const blobs = new THREE.InstancedMesh(blob, mat, Math.ceil(count * 0.6));
    const m4 = new THREE.Matrix4();
    const q = new THREE.Quaternion();
    const e = new THREE.Euler();
    const sc = new THREE.Vector3();
    let ci = 0;
    let bi = 0;
    for (const d of dirs) {
      for (let l = 0; l < layers; l++) {
        const top = smoothstep(0.35, 1, d.y);
        const vol = afro ? 0.12 + 0.34 * smoothstep(-0.3, 0.9, d.y) : 0.04 + 0.2 * top;
        const s = 1 + 0.01 + (vol * (l + r()) * 0.9) / layers;
        sculpt(d, P, out, s);
        out.addScaledVector(d, (r() - 0.5) * 0.03);
        const size = (afro ? 0.095 : 0.08) + r() * 0.035;
        e.set(r() * Math.PI, r() * Math.PI, r() * Math.PI);
        q.setFromEuler(e);
        sc.setScalar(size);
        m4.compose(out, q, sc);
        if (r() < 0.55 && ci < coils.count) coils.setMatrixAt(ci++, m4);
        else if (bi < blobs.count) blobs.setMatrixAt(bi++, m4);
        crown = Math.max(crown, s - 1);
      }
    }
    coils.count = ci;
    blobs.count = bi;
    for (const im of [coils, blobs]) {
      im.castShadow = true;
      im.receiveShadow = true;
      im.instanceMatrix.needsUpdate = true;
      im.name = 'hair-curls';
      im.userData.outline = true;
      group.add(im);
    }
  }

  // Long hair: dark backing curtain behind the head (fills gaps between falling clumps).
  const long = style.startsWith('long-') || style === 'medium-wavy' || style === 'medium-straight' || style === 'bob' || style === 'mullet';
  if (long) {
    const length = style === 'bob' ? 0.95 : style.startsWith('medium') ? 1.3 : style === 'mullet' ? 1.45 : 2.2;
    const pts: THREE.Vector2[] = [];
    for (let i = 0; i <= 24; i++) {
      const t = i / 24;
      const y = lerp(0.4, -length, t);
      const rad = 1.0 + 0.02 + 0.06 * smoothstep(0, 0.4, t) + (style === 'bob' ? 0.08 * t * t : 0.12 * t);
      pts.push(new THREE.Vector2(rad, y));
    }
    const phiStart = style === 'mullet' ? 0.72 * Math.PI : 0.42 * Math.PI;
    const curtain = new THREE.LatheGeometry(pts, 72, phiStart, 2 * (Math.PI - phiStart));
    const cp = curtain.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < cp.count; i++) cp.setXYZ(i, cp.getX(i) * P.width, cp.getY(i) * P.height * 0.98, cp.getZ(i) * P.depth * 0.95);
    if (collider) {
      // Drape over the shoulders / hood instead of cutting through them.
      const p = new THREE.Vector3();
      const n = new THREE.Vector3();
      const e = 0.01;
      for (let i = 0; i < cp.count; i++) {
        p.fromBufferAttribute(cp, i);
        for (let it = 0; it < 3; it++) {
          const d = collider(p.x, p.y, p.z);
          if (d >= 0.06) break;
          n.set(collider(p.x + e, p.y, p.z) - collider(p.x - e, p.y, p.z), collider(p.x, p.y + e, p.z) - collider(p.x, p.y - e, p.z), collider(p.x, p.y, p.z + e) - collider(p.x, p.y, p.z - e)).normalize();
          p.addScaledVector(n, 0.06 - d);
        }
        cp.setXYZ(i, p.x, p.y, p.z);
      }
    }
    curtain.computeVertexNormals();
    const cmat = (mat as THREE.MeshPhysicalMaterial).clone();
    cmat.side = THREE.DoubleSide;
    cmat.color = (mat as THREE.MeshPhysicalMaterial).color.clone().multiplyScalar(0.55);
    group.add(new THREE.Mesh(curtain, cmat));
  }

  // Groomed clumps on top of the shell.
  const clumpSpecs = clumpSpecsFor(style, spec, P);
  if (clumpSpecs.length) {
    const cmat = (mat as THREE.MeshPhysicalMaterial).clone();
    cmat.vertexColors = true;
    cmat.color = new THREE.Color('#ffffff');
    cmat.side = THREE.DoubleSide;
    const baseColor = (mat as THREE.MeshPhysicalMaterial).color.clone();
    // Darker shell underneath reads as depth between clumps.
    const shellMat = (mat as THREE.MeshPhysicalMaterial).clone();
    shellMat.color = baseColor.clone().multiplyScalar(0.62);
    shell.material = shellMat;
    for (const cs of clumpSpecs) {
      const geo = buildClumps(P, { ...cs, collider }, r, baseColor);
      const mesh = new THREE.Mesh(geo, cmat);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      mesh.name = 'hair-clumps';
      mesh.userData.outline = true;
      group.add(mesh);
    }
    crown = Math.max(crown, 0.12);
  }

  if (style === 'ponytail') {
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 0.55, -0.9),
      new THREE.Vector3(0, 0.62, -1.18),
      new THREE.Vector3(0, 0.1, -1.32),
      new THREE.Vector3(0.05, -0.7, -1.22),
      new THREE.Vector3(0.1, -1.3, -1.05),
    ]);
    const tail = new THREE.Mesh(taperedTube(curve, 60, 0.2, 0.06, 18), mat);
    tail.castShadow = true;
    group.add(tail);
    const tie = new THREE.Mesh(new THREE.TorusGeometry(0.15, 0.05, 10, 24), mat);
    tie.position.set(0, 0.6, -1.12);
    tie.rotation.x = Math.PI / 2.4;
    group.add(tie);
  }
  if (style === 'bun') {
    const bun = new THREE.Mesh(new THREE.SphereGeometry(0.36, 32, 24), mat);
    bun.position.set(0, 1.18 * P.height, -0.4);
    bun.scale.set(1, 0.85, 1);
    bun.castShadow = true;
    group.add(bun);
    crown = 0.5;
  }
  if (style === 'braids' || style === 'dreadlocks') {
    const strands = style === 'braids' ? 2 : 14;
    for (let k = 0; k < strands; k++) {
      const a = style === 'braids' ? (k === 0 ? -0.55 : 0.55) * Math.PI : (-0.9 + (k / (strands - 1)) * 1.8) * Math.PI * 0.55 + Math.PI;
      const sx = Math.sin(a);
      const sz = Math.cos(a);
      const start = new THREE.Vector3(sx * 0.95 * P.width, 0.1, sz * 0.95);
      const len = style === 'braids' ? 1.9 : 1.2 + r() * 0.6;
      const curve = new THREE.CatmullRomCurve3([
        start,
        new THREE.Vector3(sx * 1.08 * P.width, -0.5, sz * 1.05),
        new THREE.Vector3(sx * 1.12 * P.width, -len, sz * 1.0 + (style === 'braids' ? 0.25 : 0)),
      ]);
      if (style === 'braids') {
        for (let j = 0; j < 16; j++) {
          const t = j / 15;
          const p = curve.getPointAt(t);
          const seg = new THREE.Mesh(new THREE.SphereGeometry(0.14 * (1 - t * 0.45), 16, 12), mat);
          seg.position.copy(p);
          seg.scale.set(1, 0.75, 0.85);
          seg.rotation.z = (j % 2 ? 0.5 : -0.5) * (sx > 0 ? 1 : -1);
          seg.castShadow = true;
          group.add(seg);
        }
      } else {
        const lock = new THREE.Mesh(taperedTube(curve, 24, 0.085, 0.06, 10), mat);
        lock.castShadow = true;
        group.add(lock);
      }
    }
  }
  return { group, crown };
}

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

/* ----------------------------- clump recipes ----------------------------- */

function clumpSpecsFor(style: HairStyle, spec: ShellSpec, P: HeadParams): ClumpSpec[] {
  const above = (m: number) => (d: THREE.Vector3) => d.y > hairline(d, spec) + m;
  const top = (d: THREE.Vector3) => smoothstep(0.3, 1, d.y);
  const front = (d: THREE.Vector3) => smoothstep(0.35, 0.8, d.z) * smoothstep(0.3, 0.75, d.y);
  const sweep = spec.sweep ?? 1;
  const longFall = (len: number): Partial<ClumpSpec> => ({ fall: (_d, r) => len * (0.88 + r * 0.24), fallFrom: 0.3, splay: 0.05 });
  // Short cuts end at the hairline over the face instead of dangling onto the forehead.
  const floor = (d: THREE.Vector3) => (d.z > 0.2 ? hairline(d, spec) - 0.015 : -2);
  void P;
  switch (style) {
    case 'crew-cut':
      return [{ count: 320, region: above(0.03), flow: crownFlow, length: (_d, r) => 0.2 + r * 0.1, lift: (d) => 0.02 + 0.035 * top(d), base: 0.012, width: [0.05, 0.075], thickness: 0.02, tip: 0.25, floor }];
    case 'short-textured':
      return [{
        count: 380,
        region: above(0.03),
        flow: (d, o) => crownFlow(d, o).add(new THREE.Vector3(Math.sin(d.x * 23) * 0.5, Math.cos(d.z * 19) * 0.3, Math.sin(d.y * 17) * 0.4)),
        length: (_d, r) => 0.24 + r * 0.14,
        lift: (d, u) => 0.03 + 0.09 * top(d) * Math.sin(Math.PI * Math.min(1, u * 1.3)),
        base: 0.015,
        width: [0.06, 0.09],
        thickness: 0.03,
        tip: 0.12,
        floor,
      }];
    case 'side-part':
      return [{ count: 420, region: above(0.03), flow: partFlow(spec.part ?? -0.3, 0.55), length: (_d, r) => 0.38 + r * 0.18, lift: (d) => 0.025 + 0.06 * top(d), base: 0.014, width: [0.06, 0.085], thickness: 0.024, tip: 0.3, floor }];
    case 'quiff':
    case 'pompadour': {
      const big = style === 'pompadour' ? 1.4 : 1;
      return [
        { count: 300, region: (d) => above(0.03)(d) && front(d) < 0.3, flow: crownFlow, length: (_d, r) => 0.3 + r * 0.12, lift: (d) => 0.02 + 0.05 * top(d), base: 0.014, width: [0.06, 0.085], thickness: 0.024, tip: 0.3, floor },
        {
          count: 220,
          region: (d) => above(0.02)(d) && front(d) >= 0.3,
          flow: (d, o) => o.set(0.25 * sweep, 1, style === 'pompadour' ? -0.8 : -0.35),
          length: (_d, r) => (0.42 + r * 0.16) * big,
          lift: (d, u) => 0.04 + 0.26 * big * front(d) * Math.sin(Math.PI * Math.min(1, u * 0.85)),
          base: 0.016,
          width: [0.07, 0.1],
          thickness: 0.032,
          tip: 0.25,
          floor,
        },
      ];
    }
    case 'undercut':
      return [{ count: 300, region: (d) => above(0.02)(d), flow: partFlow(-0.22, 0.7), length: (_d, r) => 0.5 + r * 0.15, lift: (d) => 0.05 + 0.07 * top(d), base: 0.02, width: [0.07, 0.1], thickness: 0.03, tip: 0.25, floor }];
    case 'mohawk':
      return [{ count: 170, region: (d) => Math.abs(d.x) < 0.16 && above(0.02)(d) && d.y > -0.25, flow: (_d, o) => o.set(0, 0.3, -1), length: () => 0.2, lift: (_d, u) => 0.08 + 0.3 * u, base: 0.02, width: [0.05, 0.07], thickness: 0.035, tip: 0.05 }];
    case 'pixie':
      return [
        { count: 260, region: (d) => above(0.03)(d) && front(d) < 0.25, flow: crownFlow, length: (_d, r) => 0.28 + r * 0.1, lift: (d) => 0.03 + 0.04 * top(d), base: 0.015, width: [0.06, 0.08], thickness: 0.024, tip: 0.25, floor },
        { count: 160, region: (d) => above(0.0)(d) && front(d) >= 0.25, flow: fringeFlow(sweep), length: (_d, r) => 0.38 + r * 0.1, lift: () => 0.04, base: 0.02, width: [0.06, 0.09], thickness: 0.026, tip: 0.2 },
      ];
    case 'mullet':
      return [
        { count: 300, region: (d) => above(0.03)(d) && d.z > -0.3, flow: crownFlow, length: (_d, r) => 0.25 + r * 0.1, lift: (d) => 0.03 + 0.05 * top(d), base: 0.015, width: [0.06, 0.085], thickness: 0.026, tip: 0.25, floor },
        { count: 260, region: (d) => above(0.0)(d) && d.z <= -0.3, flow: (_d, o) => o.set(0, -1, -0.2), length: () => 0.3, lift: () => 0.04, base: 0.02, width: [0.07, 0.1], thickness: 0.03, tip: 0.35, ...longFall(0.75) },
      ];
    case 'medium-wavy':
    case 'medium-straight':
    case 'long-straight':
    case 'long-wavy':
    case 'bob': {
      const len = style === 'bob' ? 0.5 : style.startsWith('medium') ? 0.85 : 1.6;
      const part = spec.part ?? 0;
      const specs: ClumpSpec[] = [
        {
          count: 680,
          region: (d) => above(0.02)(d) && (spec.fringe === undefined || front(d) < 0.25),
          flow: partFlow(part, -0.45),
          length: (_d, r) => 0.6 + r * 0.25,
          lift: (d) => 0.03 + 0.04 * top(d),
          base: 0.02,
          width: [0.1, 0.15],
          thickness: 0.022,
          tip: style === 'bob' ? 0.85 : 0.55,
          ...longFall(len),
        },
      ];
      if (spec.fringe !== undefined) {
        specs.push({ count: 200, region: (d) => above(-0.02)(d) && front(d) >= 0.25, flow: fringeFlow(style === 'bob' ? 0 : sweep), length: (_d, r) => 0.36 + r * 0.08, lift: () => 0.045, base: 0.02, width: [0.06, 0.09], thickness: 0.026, tip: 0.6 });
      }
      return specs;
    }
    case 'ponytail':
      return [{ count: 420, region: above(0.02), flow: tieFlow(new THREE.Vector3(0, 0.5, -0.86).normalize()), length: (d) => Math.min(1.2, d.distanceTo(new THREE.Vector3(0, 0.5, -0.86).normalize())), lift: () => 0.025, base: 0.012, width: [0.06, 0.09], thickness: 0.022, tip: 0.6 }];
    case 'bun':
      return [{ count: 420, region: above(0.02), flow: tieFlow(new THREE.Vector3(0, 0.95, -0.3).normalize()), length: (d) => Math.min(1.2, d.distanceTo(new THREE.Vector3(0, 0.95, -0.3).normalize())), lift: () => 0.025, base: 0.012, width: [0.06, 0.09], thickness: 0.022, tip: 0.6 }];
    case 'braids':
      return [{ count: 400, region: above(0.02), flow: partFlow(0, -0.2), length: (_d, r) => 0.5 + r * 0.2, lift: () => 0.025, base: 0.012, width: [0.06, 0.08], thickness: 0.022, tip: 0.6 }];
    default:
      return [];
  }
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
    const line = (ax: number) => (ax < 0.36 ? my - 0.1 : lerp(my - 0.02, -0.06, smoothstep(0.36, 0.9 * P.width, ax)));
    const mask = (d: THREE.Vector3, q: THREE.Vector3) =>
      smoothstep(0, 0.09, line(Math.abs(q.x)) - q.y) * mouthClear(q) * smoothstep(-0.42, -0.12, d.z);
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
