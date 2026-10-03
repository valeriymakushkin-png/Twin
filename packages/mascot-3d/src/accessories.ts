import * as THREE from 'three';
import type { FrontMap, HeadParams } from './head';
import { sculpt } from './head';
import { material } from './materials';
import { smoothstep } from './math';
import type { StyleLook } from './styles';

export type AccessoryKey = 'cap' | 'beanie' | 'headphones' | 'sunglasses' | 'chain' | 'earrings';
export const ACCESSORY_KEYS: AccessoryKey[] = ['cap', 'beanie', 'headphones', 'sunglasses', 'chain', 'earrings'];

function roundedRect(w: number, h: number, r: number): THREE.Shape {
  const s = new THREE.Shape();
  s.moveTo(-w / 2 + r, -h / 2);
  s.lineTo(w / 2 - r, -h / 2);
  s.quadraticCurveTo(w / 2, -h / 2, w / 2, -h / 2 + r);
  s.lineTo(w / 2, h / 2 - r);
  s.quadraticCurveTo(w / 2, h / 2, w / 2 - r, h / 2);
  s.lineTo(-w / 2 + r, h / 2);
  s.quadraticCurveTo(-w / 2, h / 2, -w / 2, h / 2 - r);
  s.lineTo(-w / 2, -h / 2 + r);
  s.quadraticCurveTo(-w / 2, -h / 2, -w / 2 + r, -h / 2);
  return s;
}

function lensShape(kind: string, R: number): THREE.Shape {
  switch (kind) {
    case 'round': {
      const s = new THREE.Shape();
      s.absarc(0, 0, R, 0, Math.PI * 2, false);
      return s;
    }
    case 'sunglasses': {
      // Wayfarer: wide top, softly rounded bottom.
      const s = new THREE.Shape();
      s.moveTo(-R * 1.18, R * 0.6);
      s.lineTo(R * 1.18, R * 0.66);
      s.quadraticCurveTo(R * 1.2, -R * 0.55, R * 0.62, -R * 0.72);
      s.lineTo(-R * 0.62, -R * 0.72);
      s.quadraticCurveTo(-R * 1.2, -R * 0.55, -R * 1.18, R * 0.6);
      return s;
    }
    case 'aviator': {
      const s = new THREE.Shape();
      s.moveTo(-R * 1.1, R * 0.62);
      s.lineTo(R * 1.1, R * 0.62);
      s.bezierCurveTo(R * 1.18, -R * 0.2, R * 0.7, -R * 1.0, 0, -R * 0.95);
      s.bezierCurveTo(-R * 0.9, -R * 0.95, -R * 1.2, -R * 0.2, -R * 1.1, R * 0.62);
      return s;
    }
    case 'cat-eye': {
      const s = new THREE.Shape();
      s.moveTo(-R * 1.1, R * 0.45);
      s.lineTo(R * 1.25, R * 0.85);
      s.bezierCurveTo(R * 1.1, -R * 0.4, R * 0.6, -R * 0.85, 0, -R * 0.8);
      s.bezierCurveTo(-R * 0.8, -R * 0.8, -R * 1.15, -R * 0.3, -R * 1.1, R * 0.45);
      return s;
    }
    default:
      return roundedRect(R * 2.3, R * 1.6, R * 0.35);
  }
}

/** Glasses frames that sit just in front of the eyes, with temples to the ears. */
export function buildGlasses(kind: string, look: StyleLook, map: FrontMap, P: HeadParams, eyeR: number, eyeX: number): THREE.Group {
  const g = new THREE.Group();
  const dark = kind === 'sunglasses';
  const frameMat = material(look, 'gloss', { color: dark ? '#0b0b0e' : '#16161a', roughness: 0.25 });
  const lensMat = dark
    ? material(look, 'gloss', { color: '#0a0a12', roughness: 0.08, side: THREE.DoubleSide })
    : material(look, 'glass', { color: '#cfe8ff', opacity: 0.16, side: THREE.DoubleSide });
  const R = eyeR * 1.45;
  const z = Math.max(map.surfaceZ(eyeX, P.eyeY), map.surfaceZ(0, P.eyeY)) + eyeR * 0.75;
  for (const s of [-1, 1]) {
    const shape = lensShape(kind, R);
    const pts = shape.getSpacedPoints(80).map((p) => new THREE.Vector3(p.x * s, p.y, 0));
    const curve = new THREE.CatmullRomCurve3(pts, true);
    const frame = new THREE.Mesh(new THREE.TubeGeometry(curve, 120, 0.028, 10, true), frameMat);
    const lens = new THREE.Mesh(new THREE.ShapeGeometry(shape, 24), lensMat);
    lens.scale.x = s;
    lens.position.z = -0.01;
    const holder = new THREE.Group();
    holder.add(frame, lens);
    holder.position.set(s * eyeX, P.eyeY + 0.01, z);
    holder.rotation.y = s * 0.12;
    frame.castShadow = true;
    g.add(holder);
    // Temple arm to the ear.
    const ex = map.halfWidth(P.eyeY) + 0.02;
    const arm = new THREE.Mesh(
      new THREE.TubeGeometry(new THREE.CatmullRomCurve3([new THREE.Vector3(s * (eyeX + R * 1.05), P.eyeY + 0.05, z - 0.05), new THREE.Vector3(s * ex, P.eyeY + 0.04, z - 0.5), new THREE.Vector3(s * ex, P.eyeY - 0.02, -0.15)]), 24, 0.024, 8, false),
      frameMat,
    );
    g.add(arm);
  }
  const bridge = new THREE.Mesh(
    new THREE.TubeGeometry(new THREE.QuadraticBezierCurve3(new THREE.Vector3(-(eyeX - R * 0.95), P.eyeY + 0.06, z), new THREE.Vector3(0, P.eyeY + 0.12, z + 0.04), new THREE.Vector3(eyeX - R * 0.95, P.eyeY + 0.06, z)), 16, 0.026, 8, false),
    frameMat,
  );
  g.add(bridge);
  return g;
}

export function buildAccessory(key: AccessoryKey, look: StyleLook, map: FrontMap, P: HeadParams, crown: number, color = '#111114'): THREE.Group {
  const g = new THREE.Group();
  g.name = `accessory-${key}`;
  const dir = new THREE.Vector3();
  const out = new THREE.Vector3();
  switch (key) {
    case 'cap':
    case 'beanie': {
      // Dome hugging the skull above the hairline (+ hair volume).
      const geo = new THREE.SphereGeometry(1, 96, 64);
      const pos = geo.attributes.position as THREE.BufferAttribute;
      const edge = key === 'cap' ? 0.42 : 0.3;
      for (let i = 0; i < pos.count; i++) {
        dir.fromBufferAttribute(pos, i).normalize();
        const phi = Math.atan2(dir.x, dir.z);
        const line = edge + (Math.abs(phi) / Math.PI) * (key === 'cap' ? -0.35 : -0.25);
        const m = smoothstep(line - 0.02, line + 0.02, dir.y);
        sculpt(dir, P, out, 1 + (crown * 0.7 + 0.06) * m - (1 - m) * 0.08);
        pos.setXYZ(i, out.x, out.y, out.z);
      }
      geo.computeVertexNormals();
      const capColor = key === 'cap' ? color : '#b91c1c';
      const dome = new THREE.Mesh(geo, material(look, 'fabric', { color: capColor, roughness: key === 'beanie' ? 0.95 : 0.75 }));
      dome.castShadow = true;
      g.add(dome);
      if (key === 'cap') {
        const brimShape = new THREE.Shape();
        brimShape.absellipse(0, 0, 0.8, 0.55, 0, Math.PI, false, 0);
        const brim = new THREE.Mesh(new THREE.ExtrudeGeometry(brimShape, { depth: 0.04, bevelEnabled: true, bevelSize: 0.02, bevelThickness: 0.02, bevelSegments: 2 }), material(look, 'fabric', { color: capColor, roughness: 0.7 }));
        brim.rotation.x = Math.PI / 2 - 0.12;
        brim.position.set(0, 0.62 * P.height + crown * 0.4, (map.surfaceZ(0, 0.55) || 0.75) + 0.02);
        brim.castShadow = true;
        g.add(brim);
        const button = new THREE.Mesh(new THREE.SphereGeometry(0.06, 16, 12), material(look, 'fabric', { color: capColor }));
        button.position.set(0, 1.08 * P.height + crown * 0.9 + 0.08, 0);
        g.add(button);
      } else {
        const band = new THREE.Mesh(new THREE.TorusGeometry(1.0, 0.11, 16, 96), material(look, 'fabric', { color: '#991b1b', roughness: 0.95 }));
        band.rotation.x = Math.PI / 2 + 0.12;
        band.position.set(0, 0.42 * P.height, -0.03);
        band.scale.set(P.width * 1.08, P.depth * 1.08, 1);
        g.add(band);
        const pom = new THREE.Mesh(new THREE.IcosahedronGeometry(0.2, 3), material(look, 'fabric', { color: '#f5f5f4', roughness: 1 }));
        pom.position.set(0, 1.12 * P.height + crown + 0.22, -0.05);
        g.add(pom);
      }
      break;
    }
    case 'headphones': {
      const w = map.halfWidth(-0.02) + 0.08;
      const band = new THREE.Mesh(new THREE.TorusGeometry(1, 0.06, 12, 64, Math.PI), material(look, 'gloss', { color: '#18181b', roughness: 0.35 }));
      band.scale.set(w + 0.05, 1.12 * P.height + crown * 0.8 + 0.12, 1);
      band.position.set(0, -0.05, -0.08);
      g.add(band);
      for (const s of [-1, 1]) {
        const cup = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.26, 0.2, 40), material(look, 'gloss', { color: '#18181b', roughness: 0.35 }));
        cup.rotation.z = Math.PI / 2;
        cup.position.set(s * (w + 0.04), -0.05, -0.08);
        cup.castShadow = true;
        g.add(cup);
        const ring = new THREE.Mesh(new THREE.TorusGeometry(0.2, 0.03, 8, 40), material(look, 'emissive', { color: look.rim[0] }));
        ring.rotation.y = Math.PI / 2;
        ring.position.set(s * (w + 0.15), -0.05, -0.08);
        g.add(ring);
      }
      break;
    }
    case 'chain': {
      const mat = material(look, 'metal', { color: '#f2c14e', roughness: 0.22 });
      const curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(-0.52, -1.25, 0.2),
        new THREE.Vector3(-0.4, -1.62, 0.74),
        new THREE.Vector3(0, -1.88, 0.94),
        new THREE.Vector3(0.4, -1.62, 0.74),
        new THREE.Vector3(0.52, -1.25, 0.2),
      ]);
      const n = 34;
      for (let i = 0; i < n; i++) {
        const t = i / (n - 1);
        const link = new THREE.Mesh(new THREE.TorusGeometry(0.045, 0.016, 8, 16), mat);
        link.position.copy(curve.getPointAt(t));
        link.lookAt(curve.getPointAt(Math.min(1, t + 0.02)));
        link.rotateY(i % 2 ? Math.PI / 2 : 0);
        g.add(link);
      }
      const pendant = new THREE.Mesh(new THREE.OctahedronGeometry(0.11, 0), mat);
      pendant.position.set(0, -2.0, 0.98);
      g.add(pendant);
      break;
    }
    case 'earrings': {
      const mat = material(look, 'metal', { color: '#f2c14e', roughness: 0.2 });
      const w = map.halfWidth(-0.2);
      for (const s of [-1, 1]) {
        const ring = new THREE.Mesh(new THREE.TorusGeometry(0.06, 0.014, 8, 24), mat);
        ring.position.set(s * (w + 0.05), -0.32, 0.0);
        ring.rotation.y = Math.PI / 2;
        g.add(ring);
      }
      break;
    }
    case 'sunglasses':
      break;
  }
  return g;
}
