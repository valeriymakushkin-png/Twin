import * as THREE from 'three';
import type { StyleLook } from './styles';

let toonRamp: THREE.DataTexture | null = null;
function ramp(): THREE.DataTexture {
  if (toonRamp) return toonRamp;
  const data = new Uint8Array([90, 90, 90, 255, 170, 170, 170, 255, 235, 235, 235, 255, 255, 255, 255, 255]);
  toonRamp = new THREE.DataTexture(data, 4, 1, THREE.RGBAFormat);
  toonRamp.minFilter = THREE.NearestFilter;
  toonRamp.magFilter = THREE.NearestFilter;
  toonRamp.needsUpdate = true;
  return toonRamp;
}

export function tune(hex: string, look: StyleLook): THREE.Color {
  const c = new THREE.Color(hex);
  if (look.saturation !== 1) {
    const hsl = { h: 0, s: 0, l: 0 };
    c.getHSL(hsl);
    c.setHSL(hsl.h, Math.min(1, hsl.s * look.saturation), hsl.l);
  }
  return c;
}

export type Surface = 'skin' | 'hair' | 'fabric' | 'eye' | 'lid' | 'metal' | 'glass' | 'rubber' | 'gloss' | 'emissive';

export interface MaterialOpts {
  color: string;
  map?: THREE.Texture;
  bumpMap?: THREE.Texture;
  roughness?: number;
  emissive?: string;
  opacity?: number;
  side?: THREE.Side;
}

/** Material factory: one call site per surface type, shading model switched by style. */
export function material(look: StyleLook, surface: Surface, o: MaterialOpts): THREE.Material {
  const color = tune(o.color, look);
  const side = o.side ?? THREE.FrontSide;
  const transparent = o.opacity !== undefined && o.opacity < 1;
  if (surface === 'emissive') {
    return new THREE.MeshBasicMaterial({ color, transparent, opacity: o.opacity ?? 1, toneMapped: false, side });
  }
  if (look.shading === 'toon' && surface !== 'eye' && surface !== 'glass') {
    return new THREE.MeshToonMaterial({ color, map: o.map ?? null, gradientMap: ramp(), transparent, opacity: o.opacity ?? 1, side });
  }
  const vinyl = look.shading === 'vinyl' || look.shading === 'plastic';
  const base: THREE.MeshPhysicalMaterialParameters = {
    color,
    map: o.map ?? null,
    bumpMap: o.bumpMap ?? null,
    bumpScale: o.bumpMap ? 0.6 : 1,
    transparent,
    opacity: o.opacity ?? 1,
    side,
  };
  switch (surface) {
    case 'skin':
    case 'lid':
      return new THREE.MeshPhysicalMaterial({
        ...base,
        roughness: vinyl ? (look.shading === 'plastic' ? 0.22 : 0.32) : (o.roughness ?? 0.5),
        clearcoat: vinyl ? 0.7 : 0.08,
        clearcoatRoughness: 0.4,
        // Warm sheen at grazing angles fakes subsurface scattering.
        sheen: vinyl ? 0 : 0.7,
        sheenColor: new THREE.Color('#ff8f78'),
        sheenRoughness: 0.42,
      });
    case 'hair':
      return new THREE.MeshPhysicalMaterial({
        ...base,
        roughness: vinyl ? 0.25 : (o.roughness ?? 0.48),
        clearcoat: vinyl ? 0.8 : 0.15,
        clearcoatRoughness: 0.4,
        sheen: vinyl ? 0 : 0.8,
        sheenColor: color.clone().offsetHSL(0, 0, 0.25),
        sheenRoughness: 0.35,
      });
    case 'fabric':
      return new THREE.MeshPhysicalMaterial({
        ...base,
        roughness: vinyl ? 0.3 : (o.roughness ?? 0.82),
        clearcoat: vinyl ? 0.6 : 0,
        sheen: vinyl ? 0 : 1,
        sheenColor: color.clone().offsetHSL(0, -0.1, 0.22),
        sheenRoughness: 0.5,
      });
    case 'eye':
      return new THREE.MeshPhysicalMaterial({ ...base, roughness: 0.12, clearcoat: 1, clearcoatRoughness: 0.03 });
    case 'metal':
      return new THREE.MeshPhysicalMaterial({ ...base, roughness: o.roughness ?? 0.25, metalness: 1 });
    case 'glass':
      return new THREE.MeshPhysicalMaterial({ ...base, roughness: 0.05, metalness: 0, transparent: true, opacity: o.opacity ?? 0.25, clearcoat: 1 });
    case 'rubber':
      return new THREE.MeshPhysicalMaterial({ ...base, roughness: o.roughness ?? 0.7 });
    case 'gloss':
    default:
      return new THREE.MeshPhysicalMaterial({ ...base, roughness: o.roughness ?? 0.3, clearcoat: 0.6, ...(o.emissive ? { emissive: new THREE.Color(o.emissive) } : {}) });
  }
}

/** Inverted-hull outline for toon styles (works with instanced meshes too). */
export function outlineMaterial(thickness: number): THREE.MeshBasicMaterial {
  const m = new THREE.MeshBasicMaterial({ color: '#120c10', side: THREE.BackSide });
  m.onBeforeCompile = (shader) => {
    shader.vertexShader = shader.vertexShader.replace('#include <begin_vertex>', `#include <begin_vertex>\n transformed += normalize(normal) * ${thickness.toFixed(4)};`);
  };
  return m;
}
