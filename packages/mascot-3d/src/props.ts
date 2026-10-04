import * as THREE from 'three';
import type { Expression } from './expressions';
import type { FrontMap, HeadParams } from './head';
import { taperedTube } from './hair';
import { material } from './materials';
import type { StyleLook } from './styles';

export function heartShape(size = 1): THREE.Shape {
  const s = new THREE.Shape();
  const k = size / 16;
  s.moveTo(0, -12 * k);
  s.bezierCurveTo(-18 * k, 0, -12 * k, 14 * k, 0, 6 * k);
  s.bezierCurveTo(12 * k, 14 * k, 18 * k, 0, 0, -12 * k);
  return s;
}

function starShape(size: number): THREE.Shape {
  const s = new THREE.Shape();
  for (let i = 0; i < 10; i++) {
    const r = i % 2 ? size * 0.45 : size;
    const a = (i / 10) * Math.PI * 2 + Math.PI / 2;
    if (i === 0) s.moveTo(Math.cos(a) * r, Math.sin(a) * r);
    else s.lineTo(Math.cos(a) * r, Math.sin(a) * r);
  }
  s.closePath();
  return s;
}

function sparkleShape(size: number): THREE.Shape {
  const s = new THREE.Shape();
  const n = 4;
  for (let i = 0; i < n * 2; i++) {
    const r = i % 2 ? size * 0.22 : size;
    const a = (i / (n * 2)) * Math.PI * 2 + Math.PI / 2;
    if (i === 0) s.moveTo(Math.cos(a) * r, Math.sin(a) * r);
    else s.lineTo(Math.cos(a) * r, Math.sin(a) * r);
  }
  s.closePath();
  return s;
}

function teardrop(): THREE.LatheGeometry {
  const pts: THREE.Vector2[] = [];
  for (let i = 0; i <= 20; i++) {
    const t = i / 20;
    const y = 1 - t * 2;
    const r = t < 0.35 ? Math.sin((t / 0.35) * Math.PI * 0.5) * 0.35 * t * 2.2 : Math.sqrt(Math.max(0, 1 - ((t - 0.65) / 0.35) ** 2)) * 0.62;
    pts.push(new THREE.Vector2(Math.max(0.001, r), y));
  }
  return new THREE.LatheGeometry(pts, 24);
}

const extrude = (shape: THREE.Shape, depth: number) =>
  new THREE.ExtrudeGeometry(shape, { depth, bevelEnabled: true, bevelSize: depth * 0.4, bevelThickness: depth * 0.4, bevelSegments: 3, curveSegments: 18 });

/** Floating emotion props (hearts, sweat, steam, question mark, sparkles) + tears. */
export function buildProps(expr: Expression, look: StyleLook, map: FrontMap, P: HeadParams, eyeR: number): THREE.Group {
  const g = new THREE.Group();
  g.name = 'props';
  switch (expr.extra) {
    case 'hearts': {
      const mat = material(look, 'gloss', { color: '#ff2a55', roughness: 0.25 });
      for (const [x, y, s, rz] of [[1.45, 1.05, 0.34, -0.3], [-1.5, 0.55, 0.24, 0.35], [1.25, -0.15, 0.18, -0.2]] as const) {
        const h = new THREE.Mesh(extrude(heartShape(s), s * 0.35), mat);
        h.position.set(x, y, 0.4);
        h.rotation.set(0.15, x > 0 ? -0.35 : 0.35, rz);
        g.add(h);
      }
      break;
    }
    case 'sweat': {
      const drop = new THREE.Mesh(teardrop(), material(look, 'glass', { color: '#8fd3ff', opacity: 0.85 }));
      drop.scale.setScalar(0.17);
      drop.position.set(0.82 * P.width, 0.72, 0.45);
      drop.rotation.z = -0.2;
      g.add(drop);
      break;
    }
    case 'steam': {
      const mat = material(look, 'rubber', { color: '#f5f5f5', roughness: 0.9 });
      for (const s of [-1, 1]) {
        const cloud = new THREE.Group();
        for (const [x, y, r] of [[0, 0, 0.16], [0.15, 0.05, 0.12], [-0.12, 0.06, 0.11], [0.04, 0.14, 0.12]] as const) {
          const puff = new THREE.Mesh(new THREE.SphereGeometry(r, 20, 16), mat);
          puff.position.set(x, y, 0);
          cloud.add(puff);
        }
        cloud.position.set(s * 1.32, 1.12, 0.1);
        g.add(cloud);
      }
      break;
    }
    case 'question': {
      const curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(-0.16, 0.2, 0),
        new THREE.Vector3(-0.12, 0.36, 0),
        new THREE.Vector3(0.08, 0.4, 0),
        new THREE.Vector3(0.18, 0.24, 0),
        new THREE.Vector3(0.04, 0.06, 0),
        new THREE.Vector3(0, -0.08, 0),
      ]);
      const mat = material(look, 'gloss', { color: '#ff2a3c', roughness: 0.3 });
      const q = new THREE.Group();
      q.add(new THREE.Mesh(new THREE.TubeGeometry(curve, 40, 0.055, 12, false), mat));
      const dot = new THREE.Mesh(new THREE.SphereGeometry(0.065, 16, 12), mat);
      dot.position.set(0, -0.24, 0);
      q.add(dot);
      q.position.set(1.35, 1.0, 0.3);
      q.scale.setScalar(1.3);
      q.rotation.z = -0.15;
      g.add(q);
      break;
    }
    case 'sparkles': {
      const mat = material(look, 'emissive', { color: '#ffd23f' });
      for (const [x, y, s] of [[1.4, 1.0, 0.2], [-1.45, 0.85, 0.16], [1.55, 0.2, 0.12], [-1.3, 1.35, 0.1]] as const) {
        const sp = new THREE.Mesh(new THREE.ShapeGeometry(sparkleShape(s)), mat);
        sp.position.set(x, y, 0.5);
        g.add(sp);
      }
      break;
    }
    case 'zzz': {
      const mat = material(look, 'gloss', { color: '#9fd3ff', roughness: 0.3 });
      [[1.25, 0.9, 0.16], [1.55, 1.25, 0.21], [1.9, 1.65, 0.27]].forEach(([x, y, sz]) => {
        const z = new THREE.Shape();
        const pts: Array<[number, number]> = [[-1, 1], [1, 1], [1, 0.62], [-0.38, -0.62], [1, -0.62], [1, -1], [-1, -1], [-1, -0.62], [0.38, 0.62], [-1, 0.62]];
        pts.forEach(([px, py], i) => (i ? z.lineTo(px * sz!, py * sz!) : z.moveTo(px * sz!, py * sz!)));
        z.closePath();
        const m = new THREE.Mesh(extrude(z, sz! * 0.25), mat);
        m.position.set(x!, y!, 0.2);
        m.rotation.z = -0.15;
        g.add(m);
      });
      break;
    }
    case 'exclaim': {
      const mat = material(look, 'gloss', { color: '#ff2a3c', roughness: 0.3 });
      for (const [x, y, sc, rz] of [[1.35, 1.0, 1, -0.15], [-1.42, 0.9, 0.8, 0.2]] as const) {
        const ex = new THREE.Group();
        const bar = new THREE.Mesh(new THREE.CapsuleGeometry(0.06, 0.32, 6, 12), mat);
        bar.position.y = 0.12;
        const dot = new THREE.Mesh(new THREE.SphereGeometry(0.07, 16, 12), mat);
        dot.position.y = -0.2;
        ex.add(bar, dot);
        ex.position.set(x, y, 0.3);
        ex.rotation.z = rz;
        ex.scale.setScalar(sc);
        g.add(ex);
      }
      break;
    }
    case 'stars': {
      const mat = material(look, 'emissive', { color: '#ffd23f' });
      for (let i = 0; i < 5; i++) {
        const a = (i / 5) * Math.PI * 2;
        const st = new THREE.Mesh(extrude(starShape(0.12), 0.03), mat);
        st.position.set(Math.cos(a) * 1.05, 1.15 + Math.sin(a) * 0.12, Math.sin(a) * 0.9);
        g.add(st);
      }
      break;
    }
    case 'money': {
      const gold = material(look, 'metal', { color: '#f2c14e', roughness: 0.25 });
      for (const [x, y, rz] of [[1.35, 0.95, 0.4], [-1.45, 0.7, -0.5], [1.6, 0.25, 0.9], [-1.25, 1.3, 0.2]] as const) {
        const coin = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 0.035, 32), gold);
        coin.position.set(x, y, 0.35);
        coin.rotation.set(Math.PI / 2 - 0.3, 0, rz);
        g.add(coin);
      }
      break;
    }
    case 'snow': {
      const mat = material(look, 'emissive', { color: '#e8f4ff' });
      for (const [x, y, sz] of [[1.35, 1.1, 0.13], [-1.45, 0.85, 0.11], [1.55, 0.3, 0.09], [-1.3, 1.4, 0.08], [0.9, 1.55, 0.07]] as const) {
        const flake = new THREE.Group();
        for (let k = 0; k < 3; k++) {
          const arm = new THREE.Mesh(new THREE.CapsuleGeometry(sz * 0.12, sz * 2, 4, 8), mat);
          arm.rotation.z = (k / 3) * Math.PI;
          flake.add(arm);
        }
        flake.position.set(x, y, 0.4);
        g.add(flake);
      }
      break;
    }
    case 'bulb': {
      const glow = material(look, 'emissive', { color: '#fff1a8' });
      const bulb = new THREE.Group();
      const glass = new THREE.Mesh(new THREE.SphereGeometry(0.22, 24, 18), glow);
      const base = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.11, 0.16, 16), material(look, 'metal', { color: '#b8bcc6', roughness: 0.3 }));
      base.position.y = -0.24;
      bulb.add(glass, base);
      for (let k = 0; k < 6; k++) {
        const ray = new THREE.Mesh(new THREE.CapsuleGeometry(0.018, 0.12, 4, 8), glow);
        const a = (k / 6) * Math.PI - Math.PI * 0.0;
        ray.position.set(Math.cos(a) * 0.36, Math.sin(a) * 0.36, 0);
        ray.rotation.z = a - Math.PI / 2;
        bulb.add(ray);
      }
      bulb.position.set(0.0, 1.62, 0.25);
      g.add(bulb);
      break;
    }
    case 'confetti': {
      const colors = ['#ff2a3c', '#ffd23f', '#3ec6ff', '#7ef08a', '#c084fc', '#ff8a3d'];
      let seed = 7;
      const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
      for (let k = 0; k < 26; k++) {
        const m = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.035, 0.01), material(look, 'gloss', { color: colors[k % colors.length]!, roughness: 0.4 }));
        const side = k % 2 ? 1 : -1;
        m.position.set(side * (1.0 + rnd() * 0.9), -0.2 + rnd() * 1.9, 0.2 + rnd() * 0.4);
        m.rotation.set(rnd() * 3, rnd() * 3, rnd() * 3);
        g.add(m);
      }
      break;
    }
    case 'blush': {
      const mat = material(look, 'emissive', { color: '#ff5a76' });
      for (const s of [-1, 1]) {
        for (let k = 0; k < 3; k++) {
          const x = s * (0.48 + k * 0.07);
          const y = -0.3;
          const hit = map.hit(x, y);
          const line = new THREE.Mesh(new THREE.CapsuleGeometry(0.012, 0.07, 4, 8), mat);
          line.position.set(x, y, (hit?.position.z ?? 0.7) + 0.02);
          line.rotation.z = 0.5;
          g.add(line);
        }
      }
      break;
    }
  }

  if (expr.tears) {
    const mat = material(look, 'glass', { color: '#7cc7ff', opacity: 0.88 });
    for (const s of [-1, 1]) {
      const pts: THREE.Vector3[] = [];
      for (let i = 0; i <= 6; i++) {
        const y = P.eyeY - eyeR * 0.9 - i * 0.11;
        const x = s * (P.eyeX + 0.02 + i * 0.012);
        const hit = map.hit(x, y);
        pts.push(new THREE.Vector3(x, y, (hit?.position.z ?? 0.8) + 0.025));
      }
      const tear = new THREE.Mesh(taperedTube(new THREE.CatmullRomCurve3(pts), 30, 0.035, 0.05, 10), mat);
      g.add(tear);
    }
  }
  return g;
}
