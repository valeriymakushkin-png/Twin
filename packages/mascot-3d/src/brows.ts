import * as THREE from 'three';
import type { MascotDna } from '@mascot/shared';
import type { Expression } from './expressions';
import type { FrontMap, HeadParams } from './head';
import type { StyleLook } from './styles';

/**
 * Sculpted 3D eyebrows: a tapered, flattened sweep that hugs the forehead. Chunky brows that
 * catch light and cast a little shadow carry most of a cartoon character's expression.
 */
export function buildBrows(dna: MascotDna, expr: Expression, look: StyleLook, map: FrontMap, P: HeadParams, mat: THREE.Material): THREE.Group {
  const g = new THREE.Group();
  g.name = 'brows';
  const thick = dna.eyebrows === 'bushy' ? 0.15 : dna.eyebrows.startsWith('thick') ? 0.135 : dna.eyebrows.startsWith('thin') ? 0.08 : 0.11;
  const arch = dna.eyebrows.includes('arched') ? 0.055 : dna.eyebrows === 'rounded' ? 0.045 : dna.eyebrows === 'soft-angled' ? 0.035 : 0.015;
  const eyeS = look.eyeScale;
  const n = 24;
  const radial = 12;
  for (const [i, s] of [[0, -1], [1, 1]] as const) {
    const xi = 0.09;
    const xo = P.eyeX + 0.19 * eyeS;
    const by = P.eyeY + 0.22 + 0.05 * (eyeS - 1) + expr.browLift[i];
    const angle = expr.browAngle[i];
    const cx = (xi + xo) / 2;
    const c = Math.cos(angle);
    const sn = Math.sin(angle);
    const centres: THREE.Vector3[] = [];
    const normals: THREE.Vector3[] = [];
    const widths: number[] = [];
    for (let k = 0; k <= n; k++) {
      const t = k / n;
      const x = xi + (xo - xi) * t;
      const y = by + arch * Math.sin(Math.PI * Math.min(1, t * 1.15)) - 0.012 * t;
      const dx = x - cx;
      const dy = y - by;
      const fx = s * (cx + dx * c - dy * sn);
      const fy = by + dx * sn + dy * c;
      const hit = map.hit(fx, fy);
      if (!hit) continue;
      centres.push(hit.position.clone());
      normals.push(hit.normal.clone());
      // Thick at the head, tapering to the tail; rounded start.
      widths.push(thick * (1 - 0.55 * Math.pow(t, 1.6)) * (0.8 + 0.2 * Math.min(1, t * 6)));
    }
    if (centres.length < 4) continue;
    const m = centres.length;
    const positions: number[] = [];
    const index: number[] = [];
    const T = new THREE.Vector3();
    const B = new THREE.Vector3();
    for (let k = 0; k < m; k++) {
      const p = centres[k]!;
      const N = normals[k]!;
      T.subVectors(centres[Math.min(m - 1, k + 1)]!, centres[Math.max(0, k - 1)]!).normalize();
      B.crossVectors(N, T).normalize();
      const w = widths[k]! / 2;
      const h = w * 0.42;
      const end = k === 0 || k === m - 1 ? 0.35 : 1;
      for (let j = 0; j <= radial; j++) {
        const a = (j / radial) * Math.PI * 2;
        const ca = Math.cos(a);
        const sa = Math.sin(a);
        const lift = Math.max(0, sa) * h * end + h * 0.25;
        positions.push(p.x + B.x * ca * w * end + N.x * lift, p.y + B.y * ca * w * end + N.y * lift, p.z + B.z * ca * w * end + N.z * lift);
      }
    }
    for (let k = 0; k < m - 1; k++) {
      for (let j = 0; j < radial; j++) {
        const a = k * (radial + 1) + j;
        const b = a + radial + 1;
        if (s > 0) index.push(a, b, a + 1, b, b + 1, a + 1);
        else index.push(a, a + 1, b, b, a + 1, b + 1);
      }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geo.setIndex(index);
    geo.computeVertexNormals();
    const mesh = new THREE.Mesh(geo, mat);
    mesh.castShadow = true;
    mesh.userData.outline = true;
    g.add(mesh);
  }
  return g;
}
