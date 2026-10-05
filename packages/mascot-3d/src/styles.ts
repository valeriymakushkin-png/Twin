/**
 * Visual recipes per style slug. The geometry is always DNA-driven; a style only changes
 * proportions, shading model and lighting, so the same person stays recognisable.
 */
export type Shading = 'pbr' | 'toon' | 'vinyl' | 'plastic';
export type FacePaint = 'full' | 'dots' | 'button';

export interface StyleLook {
  shading: Shading;
  /** Ink outline thickness (0 = none). */
  outline: number;
  eyeScale: number;
  headScale: number;
  boxy: number;
  face: FacePaint;
  /** Overrides skin colour (brick figures are yellow). */
  skinOverride?: string;
  saturation: number;
  rim: [string, string];
  rimIntensity: number;
  keyWarmth: number;
  /** Extra flourish. */
  extra?: 'neon' | 'stud' | 'paint';
  hairDetail: number;
  noseScale: number;
}

const BASE: StyleLook = {
  shading: 'pbr',
  outline: 0,
  eyeScale: 1,
  headScale: 1,
  boxy: 0,
  face: 'full',
  saturation: 1,
  // Emoji look: soft, bright, evenly lit; rims only separate the silhouette.
  rim: ['#fff1ea', '#ffe0d2'],
  rimIntensity: 0.45,
  keyWarmth: 0.1,
  hairDetail: 1,
  noseScale: 1,
};

export const STYLE_LOOKS: Record<string, Partial<StyleLook>> = {
  pixar: {},
  cartoon: { shading: 'toon', outline: 0.022, eyeScale: 1.12, saturation: 1.15, hairDetail: 0.6 },
  anime: { shading: 'toon', outline: 0.014, eyeScale: 1.32, noseScale: 0.55, saturation: 1.05, rim: ['#ff3b8d', '#7aa8ff'] },
  cyberpunk: { rim: ['#ff2bd6', '#22d3ee'], rimIntensity: 1.6, keyWarmth: -0.1, extra: 'neon' },
  lego: { shading: 'plastic', boxy: 0.85, face: 'dots', skinOverride: '#f7c934', eyeScale: 0.7, hairDetail: 0, noseScale: 0, extra: 'stud' },
  'funko-pop': { shading: 'vinyl', boxy: 0.55, headScale: 1.12, face: 'button', eyeScale: 1.25, noseScale: 0.4, hairDetail: 0.4 },
  fortnite: { saturation: 1.18, rim: ['#ff2a3c', '#3da9ff'], rimIntensity: 1.25, eyeScale: 0.96 },
  arcane: { rim: ['#14b8a6', '#ff6a3d'], keyWarmth: 0.3, extra: 'paint', saturation: 0.92, eyeScale: 0.9 },
  'gta-loading-screen': { shading: 'toon', outline: 0.03, eyeScale: 0.82, saturation: 1.1, rim: ['#ff8a1f', '#ff2a3c'], noseScale: 1.1 },
  'disney-inspired': { eyeScale: 1.2, saturation: 1.08, rim: ['#ff7ab6', '#ffd36e'], keyWarmth: 0.3 },
  'dreamworks-inspired': { eyeScale: 1.05, saturation: 1.05, rim: ['#ff2a3c', '#ffa53d'] },
};

export function styleLook(slug = 'pixar'): StyleLook {
  return { ...BASE, ...(STYLE_LOOKS[slug] ?? {}) };
}
