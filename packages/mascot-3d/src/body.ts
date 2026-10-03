import * as THREE from 'three';
import { fabricBump } from './face';
import { material } from './materials';
import { lerp, shade } from './math';
import type { StyleLook } from './styles';

/**
 * Upper body + outfits. The torso is a lathe (revolved profile) squashed in depth, which
 * gives clean shoulders and chest at any style; outfits add layers on top of it.
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

const DEPTH = 0.6;

function torsoProfile(inflate = 0, collar = 0.36): THREE.Vector2[] {
  const p: Array<[number, number]> = [
    [collar, -1.14],
    [collar + 0.08, -1.25],
    [0.66, -1.38],
    [0.98, -1.5],
    [1.22, -1.66],
    [1.35, -1.9],
    [1.4, -2.25],
    [1.4, -3.4],
  ];
  return p.map(([r, y]) => new THREE.Vector2(r + inflate * Math.min(1, (-1.16 - y) * 3 + 0.2), y));
}

function lathe(profile: THREE.Vector2[], mat: THREE.Material, phiStart = 0, phiLength = Math.PI * 2, segments = 96): THREE.Mesh {
  const geo = new THREE.LatheGeometry(profile, segments, phiStart, phiLength);
  geo.scale(1, 1, DEPTH);
  geo.computeVertexNormals();
  const m = new THREE.Mesh(geo, mat);
  m.castShadow = true;
  m.receiveShadow = true;
  m.userData.outline = true;
  return m;
}

/** Front-surface z of the torso at height y (for strings, emblems, ties). */
function chestZ(y: number, inflate = 0): number {
  const prof = torsoProfile(inflate);
  for (let i = 0; i < prof.length - 1; i++) {
    const a = prof[i]!;
    const b = prof[i + 1]!;
    if (y <= a.y && y >= b.y) return lerp(a.x, b.x, (a.y - y) / (a.y - b.y)) * DEPTH;
  }
  return 1.4 * DEPTH;
}

function stripedTexture(base: string, stripe: string): THREE.CanvasTexture {
  const c = typeof OffscreenCanvas !== 'undefined' ? new OffscreenCanvas(256, 256) : Object.assign(document.createElement('canvas'), { width: 256, height: 256 });
  const ctx = c.getContext('2d') as CanvasRenderingContext2D;
  ctx.fillStyle = base;
  ctx.fillRect(0, 0, 256, 256);
  ctx.fillStyle = stripe;
  ctx.fillRect(0, 150, 256, 26);
  ctx.fillRect(0, 186, 256, 10);
  const t = new THREE.CanvasTexture(c as HTMLCanvasElement);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

function starsTexture(base: string): THREE.CanvasTexture {
  const c = typeof OffscreenCanvas !== 'undefined' ? new OffscreenCanvas(512, 512) : Object.assign(document.createElement('canvas'), { width: 512, height: 512 });
  const ctx = c.getContext('2d') as CanvasRenderingContext2D;
  ctx.fillStyle = base;
  ctx.fillRect(0, 0, 512, 512);
  ctx.fillStyle = '#ffd36e';
  for (let i = 0; i < 40; i++) {
    const x = (i * 97) % 512;
    const y = (i * 191) % 512;
    ctx.beginPath();
    ctx.arc(x, y, 3 + (i % 3) * 2, 0, Math.PI * 2);
    ctx.fill();
  }
  const t = new THREE.CanvasTexture(c as HTMLCanvasElement);
  t.colorSpace = THREE.SRGBColorSpace;
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(4, 2);
  return t;
}

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

export interface BodyOptions {
  outfit: OutfitKey;
  /** Overrides the main garment colour (default red hoodie, like the brand). */
  color?: string;
  skin: string;
  look: StyleLook;
}

export function buildBody(o: BodyOptions): THREE.Group {
  const { look } = o;
  const g = new THREE.Group();
  g.name = 'body';
  const bump = look.shading === 'pbr' ? fabricBump() : undefined;
  const fabric = (color: string, roughness?: number, map?: THREE.Texture) => material(look, 'fabric', { color, bumpMap: map ? undefined : bump, roughness, map, side: THREE.DoubleSide });

  // Neck.
  const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.42, 0.75, 40), material(look, 'skin', { color: shade(o.skin, -0.22) }));
  neck.position.set(0, -1.2, -0.2);
  neck.castShadow = true;
  neck.receiveShadow = true;
  g.add(neck);

  const addStrings = (color: string, inflate: number) => {
    for (const s of [-1, 1]) {
      const pts = [-1.3, -1.5, -1.75, -2.08].map((y, i) => new THREE.Vector3(s * (0.15 + i * 0.018), y, chestZ(y, inflate) + 0.035));
      const curve = new THREE.CatmullRomCurve3(pts);
      const str = new THREE.Mesh(new THREE.TubeGeometry(curve, 32, 0.026, 10, false), fabric(color, 0.7));
      str.castShadow = true;
      g.add(str);
      const end = pts[pts.length - 1]!;
      const aglet = new THREE.Mesh(new THREE.CylinderGeometry(0.034, 0.03, 0.12, 16), material(look, 'metal', { color: '#d9d9de', roughness: 0.3 }));
      aglet.position.set(end.x, end.y - 0.07, end.z + 0.005);
      g.add(aglet);
    }
  };

  const hoodie = (color: string, opts: { strings?: boolean } = {}) => {
    g.add(lathe(torsoProfile(), fabric(color)));
    // Hood roll around the neck, open at the front like a real hoodie.
    const rollGeo = new THREE.TorusGeometry(0.5, 0.19, 24, 96, Math.PI * 1.72);
    rollGeo.rotateX(Math.PI / 2);
    rollGeo.rotateY(-0.64 * Math.PI);
    const roll = new THREE.Mesh(rollGeo, fabric(shade(color, -0.05)));
    roll.position.set(0, -1.2, -0.04);
    roll.scale.set(1.18, 1, 1.02);
    roll.castShadow = true;
    roll.receiveShadow = true;
    g.add(roll);
    // Hood fabric bunched behind the neck.
    const hood = new THREE.Mesh(new THREE.SphereGeometry(0.9, 48, 24, 0, Math.PI * 2, 0, Math.PI * 0.55), fabric(shade(color, -0.12)));
    hood.position.set(0, -1.3, -0.62);
    hood.scale.set(1.2, 0.72, 0.74);
    hood.rotation.x = -0.35;
    hood.castShadow = true;
    g.add(hood);
    if (opts.strings !== false) addStrings('#f3eee8', 0);
  };

  const base = o.color;
  switch (o.outfit) {
    case 'tshirt': {
      const c = base ?? '#f4f4f5';
      g.add(lathe(torsoProfile(0, 0.4), fabric(c)));
      const rib = new THREE.Mesh(new THREE.TorusGeometry(0.47, 0.045, 12, 64), fabric(shade(c, -0.08)));
      rib.rotation.x = Math.PI / 2;
      rib.position.set(0, -1.2, -0.04);
      rib.scale.set(1.08, 1, 1);
      g.add(rib);
      break;
    }
    case 'denim-jacket': {
      g.add(lathe(torsoProfile(0, 0.4), fabric('#f4f4f5')));
      const c = base ?? '#3d6fa8';
      g.add(lathe(torsoProfile(0.05, 0.46), fabric(c, 0.9), 0.22, Math.PI * 2 - 0.44));
      for (const s of [-1, 1]) {
        const flap = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.5, 0.05), fabric(shade(c, -0.08)));
        flap.position.set(s * 0.36, -1.42, chestZ(-1.42, 0.05) + 0.02);
        flap.rotation.set(-0.5, s * 0.5, s * 0.55);
        flap.castShadow = true;
        g.add(flap);
      }
      break;
    }
    case 'streetwear': {
      hoodie(base ?? '#9ca3af', { strings: true });
      const vest = lathe(torsoProfile(0.1, 0.5), material(look, 'gloss', { color: '#111114', roughness: 0.38 }), 0.3, Math.PI * 2 - 0.6);
      const vp = vest.geometry.attributes.position as THREE.BufferAttribute;
      for (let i = 0; i < vp.count; i++) {
        const y = vp.getY(i);
        const k = 1 + 0.03 * Math.abs(Math.sin(y * 9));
        vp.setX(i, vp.getX(i) * k);
        vp.setZ(i, vp.getZ(i) * k);
      }
      vest.geometry.computeVertexNormals();
      g.add(vest);
      break;
    }
    case 'business-suit': {
      g.add(lathe(torsoProfile(0, 0.38), fabric('#f8fafc', 0.6)));
      const c = base ?? '#1f2a44';
      g.add(lathe(torsoProfile(0.05, 0.44), fabric(c, 0.65), 0.42, Math.PI * 2 - 0.84));
      const tie = new THREE.Shape();
      tie.moveTo(-0.07, 0);
      tie.lineTo(0.07, 0);
      tie.lineTo(0.13, -0.75);
      tie.lineTo(0, -0.9);
      tie.lineTo(-0.13, -0.75);
      tie.closePath();
      const tieMesh = new THREE.Mesh(new THREE.ExtrudeGeometry(tie, { depth: 0.04, bevelEnabled: true, bevelSize: 0.012, bevelThickness: 0.012, bevelSegments: 2 }), material(look, 'gloss', { color: '#c81e2e', roughness: 0.4 }));
      tieMesh.position.set(0, -1.3, chestZ(-1.6) - 0.02);
      tieMesh.rotation.x = -0.32;
      tieMesh.castShadow = true;
      g.add(tieMesh);
      const knot = new THREE.Mesh(new THREE.SphereGeometry(0.09, 16, 12), material(look, 'gloss', { color: '#b01a28', roughness: 0.4 }));
      knot.position.set(0, -1.3, chestZ(-1.3) + 0.04);
      knot.scale.set(1, 0.85, 0.7);
      g.add(knot);
      break;
    }
    case 'gamer': {
      const c = base ?? '#16a34a';
      const tex = stripedTexture(c, '#0b0b0f');
      g.add(lathe(torsoProfile(0, 0.4), fabric(c, 0.6, tex)));
      const set = new THREE.Mesh(new THREE.TorusGeometry(0.62, 0.07, 14, 64, Math.PI * 1.25), material(look, 'gloss', { color: '#18181b' }));
      set.rotation.set(Math.PI / 2, 0, Math.PI * 0.12 + Math.PI);
      set.position.set(0, -1.28, 0.05);
      g.add(set);
      for (const s of [-1, 1]) {
        const cup = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.14, 32), material(look, 'gloss', { color: '#18181b' }));
        cup.position.set(s * 0.6, -1.32, 0.2);
        cup.rotation.set(0.4, 0, s * 1.2);
        g.add(cup);
        const glow = new THREE.Mesh(new THREE.TorusGeometry(0.15, 0.025, 8, 32), material(look, 'emissive', { color: '#22d3ee' }));
        glow.position.copy(cup.position).add(new THREE.Vector3(s * 0.06, 0.02, 0.03));
        glow.rotation.copy(cup.rotation);
        glow.rotateX(Math.PI / 2);
        g.add(glow);
      }
      break;
    }
    case 'astronaut': {
      g.add(lathe(torsoProfile(0.04, 0.5), material(look, 'gloss', { color: base ?? '#f1f5f9', roughness: 0.55 })));
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.58, 0.1, 16, 64), material(look, 'metal', { color: '#cbd5e1', roughness: 0.3 }));
      ring.rotation.x = Math.PI / 2;
      ring.position.set(0, -1.22, -0.02);
      ring.scale.set(1.1, 1, 0.95);
      g.add(ring);
      const patch = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.03, 32), material(look, 'gloss', { color: '#ff2a3c' }));
      patch.rotation.x = Math.PI / 2 - 0.35;
      patch.position.set(0.62, -1.95, chestZ(-1.95, 0.04) - 0.02);
      g.add(patch);
      break;
    }
    case 'superhero': {
      const c = base ?? '#2563eb';
      g.add(lathe(torsoProfile(-0.02, 0.38), material(look, 'gloss', { color: c, roughness: 0.35 })));
      const cape = lathe(
        [new THREE.Vector2(0.55, -1.22), new THREE.Vector2(1.2, -1.5), new THREE.Vector2(1.62, -1.9), new THREE.Vector2(1.75, -3.4)],
        fabric('#ff2a3c', 0.7),
        0.62 * Math.PI,
        0.76 * Math.PI,
      );
      cape.position.z = -0.08;
      g.add(cape);
      const emblem = new THREE.Mesh(new THREE.ExtrudeGeometry(starShape(0.32, 0.14), { depth: 0.05, bevelEnabled: true, bevelSize: 0.015, bevelThickness: 0.015, bevelSegments: 2 }), material(look, 'metal', { color: '#fbbf24', roughness: 0.25 }));
      emblem.position.set(0, -2.02, chestZ(-2.02) - 0.02);
      emblem.rotation.x = -0.12;
      g.add(emblem);
      break;
    }
    case 'samurai': {
      g.add(lathe(torsoProfile(0, 0.4), fabric(base ?? '#7f1d1d', 0.7)));
      for (let k = 0; k < 4; k++) {
        const y0 = -1.55 - k * 0.22;
        const plate = lathe([new THREE.Vector2(1.18 + k * 0.1, y0), new THREE.Vector2(1.32 + k * 0.1, y0 - 0.2)], material(look, 'gloss', { color: k % 2 ? '#111114' : '#b91c1c', roughness: 0.3 }), 0, Math.PI * 2, 72);
        plate.scale.set(1.04, 1, 1.06);
        g.add(plate);
      }
      break;
    }
    case 'wizard': {
      const c = base ?? '#4c1d95';
      g.add(lathe(torsoProfile(0.06, 0.42), fabric(c, 0.75, starsTexture(c))));
      const collar = new THREE.Mesh(new THREE.TorusGeometry(0.5, 0.1, 14, 64), fabric(shade(c, 0.15)));
      collar.rotation.x = Math.PI / 2;
      collar.position.set(0, -1.2, -0.02);
      g.add(collar);
      break;
    }
    case 'techwear': {
      const c = base ?? '#0f0f12';
      g.add(lathe(torsoProfile(0.04, 0.44), material(look, 'gloss', { color: c, roughness: 0.55 })));
      const collar = new THREE.Mesh(new THREE.CylinderGeometry(0.52, 0.6, 0.42, 48, 1, true), material(look, 'gloss', { color: c, roughness: 0.5, side: THREE.DoubleSide }));
      collar.position.set(0, -1.2, -0.04);
      collar.scale.set(1.1, 1, 0.9);
      g.add(collar);
      for (const s of [-1, 1]) {
        const pts = [-1.45, -1.8, -2.3].map((y) => new THREE.Vector3(s * 0.5, y, chestZ(y, 0.04) + 0.01));
        const strip = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 24, 0.018, 8, false), material(look, 'emissive', { color: look.rim[1] }));
        g.add(strip);
      }
      break;
    }
    case 'streamer':
      hoodie(base ?? '#111114');
      break;
    case 'casual-hoodie':
    default:
      hoodie(base ?? '#e11d2e');
  }
  return g;
}
