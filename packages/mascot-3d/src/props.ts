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
