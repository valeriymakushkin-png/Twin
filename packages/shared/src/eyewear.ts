import type { MascotDna } from './dna';

/**
 * Eyewear catalog (100 pairs): frame families that exist in real optics and sunglasses
 * (round wire, panto, browline, pilot, navigator, cat-eye, butterfly, hexagon, shield,
 * wraparound sport, goggles…) in real-world finishes. The renderer builds each pair
 * parametrically; a pair can also point at a licensed .glb model (see `model`), which the
 * renderer loads and fits to the face instead.
 */

export type FrameShape =
  | 'round'
  | 'small-round'
  | 'oval'
  | 'panto'
  | 'square'
  | 'rectangle'
  | 'half-eye'
  | 'browline'
  | 'pilot'
  | 'navigator'
  | 'cat-eye'
  | 'winged'
  | 'butterfly'
  | 'oversized'
  | 'hexagon'
  | 'octagon'
  | 'geometric'
  | 'd-frame'
  | 'trapezoid'
  | 'slim-oval'
  | 'shield'
  | 'wrap'
  | 'goggles'
  | 'heart'
  | 'star'
  | 'monocle';

export type RimStyle = 'full' | 'thick' | 'wire' | 'half' | 'rimless';
export type BridgeStyle = 'single' | 'double' | 'keyhole' | 'saddle';
export type FrameMaterial = 'acetate' | 'tortoise' | 'metal' | 'clear';
export type LensTint = 'clear' | 'dark' | 'gradient' | 'green' | 'brown' | 'mirror-blue' | 'mirror-gold' | 'mirror-silver' | 'mirror-red' | 'rose' | 'yellow' | 'blue' | 'purple';
export type EyewearFamily = 'optical' | 'sun' | 'retro' | 'sport' | 'fun';

export interface EyewearSpec {
  shape: FrameShape;
  rim: RimStyle;
  bridge: BridgeStyle;
  material: FrameMaterial;
  frame: string;
  /** Second colour (browline top bar). */
  accent?: string;
  lens: LensTint;
  /** Lens size multiplier. */
  size?: number;
  /** Rim thickness multiplier. */
  thickness?: number;
  /** No temple arms (pince-nez, monocle). */
  noTemples?: boolean;
  /** Elastic strap instead of temples (goggles). */
  strap?: boolean;
}

export interface EyewearDef {
  key: string;
  model: string;
  finish: string;
  /** English name (also used inside prompts). */
  label: string;
  family: EyewearFamily;
  sun: boolean;
  spec: EyewearSpec;
  /** Optional licensed glTF/GLB model (URL or app-relative path) rendered instead of the parametric frame. */
  glb?: string;
}

interface Finish {
  label: string;
  frame: string;
  material: FrameMaterial;
  lens?: LensTint;
  accent?: string;
}

export const EYEWEAR_FINISHES: Record<string, Finish> = {
  black: { label: 'Black', frame: '#141416', material: 'acetate' },
  tortoise: { label: 'Tortoise', frame: '#6e3c1c', material: 'tortoise' },
  honey: { label: 'Honey', frame: '#c98d3e', material: 'clear' },
  crystal: { label: 'Crystal', frame: '#e6edf5', material: 'clear' },
  pink: { label: 'Pink crystal', frame: '#f2a7c3', material: 'clear' },
  red: { label: 'Red', frame: '#d42637', material: 'acetate' },
  navy: { label: 'Navy', frame: '#1e2c55', material: 'acetate' },
  white: { label: 'White', frame: '#f3f3f1', material: 'acetate' },
  green: { label: 'Olive', frame: '#4b5a2e', material: 'acetate' },
  gold: { label: 'Gold', frame: '#d6ad4c', material: 'metal' },
  silver: { label: 'Silver', frame: '#c8ccd3', material: 'metal' },
  gunmetal: { label: 'Gunmetal', frame: '#4b4f57', material: 'metal' },
  'rose-gold': { label: 'Rose gold', frame: '#e3a690', material: 'metal' },
  'black-metal': { label: 'Matte black', frame: '#1b1b1e', material: 'metal' },
  'black-tortoise': { label: 'Black & tortoise', frame: '#d6ad4c', material: 'metal', accent: '#141416' },
  'tortoise-gold': { label: 'Tortoise & gold', frame: '#d6ad4c', material: 'metal', accent: '#6e3c1c' },
  // Sunglasses finishes (frame + lens).
  'black-dark': { label: 'Black / dark', frame: '#141416', material: 'acetate', lens: 'dark' },
  'tortoise-brown': { label: 'Tortoise / brown', frame: '#6e3c1c', material: 'tortoise', lens: 'brown' },
  'gold-green': { label: 'Gold / green', frame: '#d6ad4c', material: 'metal', lens: 'green' },
  'gold-gradient': { label: 'Gold / gradient', frame: '#d6ad4c', material: 'metal', lens: 'gradient' },
  'silver-mirror': { label: 'Silver / mirror', frame: '#c8ccd3', material: 'metal', lens: 'mirror-silver' },
  'gunmetal-blue': { label: 'Gunmetal / blue mirror', frame: '#4b4f57', material: 'metal', lens: 'mirror-blue' },
  'black-gold': { label: 'Black / gold mirror', frame: '#141416', material: 'acetate', lens: 'mirror-gold' },
  'black-red': { label: 'Black / red mirror', frame: '#141416', material: 'acetate', lens: 'mirror-red' },
  'white-dark': { label: 'White / dark', frame: '#f3f3f1', material: 'acetate', lens: 'dark' },
  'red-dark': { label: 'Red / dark', frame: '#d42637', material: 'acetate', lens: 'dark' },
  'crystal-rose': { label: 'Crystal / rose', frame: '#e6edf5', material: 'clear', lens: 'rose' },
  'gold-yellow': { label: 'Gold / yellow', frame: '#d6ad4c', material: 'metal', lens: 'yellow' },
  'silver-blue': { label: 'Silver / blue', frame: '#c8ccd3', material: 'metal', lens: 'blue' },
  'gold-purple': { label: 'Gold / purple', frame: '#d6ad4c', material: 'metal', lens: 'purple' },
  'pink-rose': { label: 'Pink / rose', frame: '#f06aa6', material: 'acetate', lens: 'rose' },
};

interface Model {
  key: string;
  label: string;
  family: EyewearFamily;
  sun: boolean;
  spec: Pick<EyewearSpec, 'shape' | 'rim' | 'bridge'> & Partial<EyewearSpec>;
  finishes: string[];
}

const MODELS: Model[] = [
  /* ------------------------------- optical ------------------------------ */
  { key: 'round-wire', label: 'Round wire', family: 'optical', sun: false, spec: { shape: 'round', rim: 'wire', bridge: 'saddle' }, finishes: ['gold', 'silver', 'black-metal', 'rose-gold'] },
  { key: 'panto', label: 'Panto', family: 'optical', sun: false, spec: { shape: 'panto', rim: 'full', bridge: 'keyhole' }, finishes: ['black', 'tortoise', 'crystal', 'honey'] },
  { key: 'oval-wire', label: 'Oval wire', family: 'optical', sun: false, spec: { shape: 'oval', rim: 'wire', bridge: 'single' }, finishes: ['gold', 'silver'] },
  { key: 'classic-square', label: 'Classic square', family: 'optical', sun: false, spec: { shape: 'square', rim: 'thick', bridge: 'single' }, finishes: ['black', 'tortoise', 'navy', 'crystal'] },
  { key: 'slim-rectangle', label: 'Slim rectangle', family: 'optical', sun: false, spec: { shape: 'rectangle', rim: 'full', bridge: 'single', size: 0.9 }, finishes: ['gunmetal', 'black-metal', 'silver'] },
  { key: 'bold-rectangle', label: 'Bold rectangle', family: 'optical', sun: false, spec: { shape: 'rectangle', rim: 'thick', bridge: 'single', thickness: 1.5 }, finishes: ['black', 'tortoise', 'red'] },
  { key: 'half-rim', label: 'Half-rim', family: 'optical', sun: false, spec: { shape: 'rectangle', rim: 'half', bridge: 'single' }, finishes: ['gunmetal', 'black-metal'] },
  { key: 'rimless', label: 'Rimless', family: 'optical', sun: false, spec: { shape: 'rectangle', rim: 'rimless', bridge: 'single' }, finishes: ['silver', 'gold'] },
  { key: 'rimless-oval', label: 'Rimless oval', family: 'optical', sun: false, spec: { shape: 'oval', rim: 'rimless', bridge: 'single' }, finishes: ['silver'] },
  { key: 'keyhole-round', label: 'Keyhole round', family: 'optical', sun: false, spec: { shape: 'round', rim: 'thick', bridge: 'keyhole' }, finishes: ['black', 'tortoise', 'green'] },
  { key: 'd-frame', label: 'D-frame', family: 'optical', sun: false, spec: { shape: 'd-frame', rim: 'thick', bridge: 'single' }, finishes: ['black', 'honey'] },
  { key: 'hexagon', label: 'Hexagon', family: 'optical', sun: false, spec: { shape: 'hexagon', rim: 'wire', bridge: 'double' }, finishes: ['gold', 'silver', 'black-metal'] },
  { key: 'octagon', label: 'Octagon', family: 'optical', sun: false, spec: { shape: 'octagon', rim: 'wire', bridge: 'saddle' }, finishes: ['gold', 'rose-gold'] },
  { key: 'geometric', label: 'Geometric', family: 'optical', sun: false, spec: { shape: 'geometric', rim: 'full', bridge: 'single' }, finishes: ['crystal', 'black'] },
  { key: 'half-eye', label: 'Half-eye readers', family: 'optical', sun: false, spec: { shape: 'half-eye', rim: 'full', bridge: 'single' }, finishes: ['tortoise', 'black'] },
  { key: 'kids-round', label: 'Bold round', family: 'optical', sun: false, spec: { shape: 'round', rim: 'thick', bridge: 'single', thickness: 1.6, size: 0.98 }, finishes: ['red', 'navy', 'pink', 'white'] },
  { key: 'cat-eye-optical', label: 'Cat-eye', family: 'optical', sun: false, spec: { shape: 'cat-eye', rim: 'thick', bridge: 'single' }, finishes: ['black', 'tortoise', 'red'] },

  /* -------------------------------- retro ------------------------------- */
  { key: 'browline', label: 'Browline', family: 'retro', sun: false, spec: { shape: 'browline', rim: 'half', bridge: 'single' }, finishes: ['black-tortoise', 'tortoise-gold'] },
  { key: 'small-round', label: 'Small round', family: 'retro', sun: false, spec: { shape: 'small-round', rim: 'wire', bridge: 'saddle', size: 0.78 }, finishes: ['gold', 'silver'] },
  { key: 'winged-cat-eye', label: 'Winged cat-eye', family: 'retro', sun: false, spec: { shape: 'winged', rim: 'thick', bridge: 'single' }, finishes: ['black', 'white'] },
  { key: 'pince-nez', label: 'Pince-nez', family: 'retro', sun: false, spec: { shape: 'oval', rim: 'wire', bridge: 'saddle', noTemples: true, size: 0.85 }, finishes: ['gold'] },
  { key: 'monocle', label: 'Monocle', family: 'retro', sun: false, spec: { shape: 'monocle', rim: 'wire', bridge: 'single', noTemples: true }, finishes: ['gold', 'silver'] },
  { key: 'steampunk', label: 'Steampunk goggles', family: 'retro', sun: true, spec: { shape: 'round', rim: 'thick', bridge: 'double', thickness: 2.2, strap: true }, finishes: ['tortoise-brown', 'gold-yellow'] },
  { key: 'teashades', label: 'Teashades', family: 'retro', sun: true, spec: { shape: 'small-round', rim: 'wire', bridge: 'saddle', size: 0.8 }, finishes: ['gold-purple', 'silver-blue', 'gold-yellow', 'gold-gradient'] },

  /* --------------------------------- sun -------------------------------- */
  { key: 'pilot', label: 'Pilot', family: 'sun', sun: true, spec: { shape: 'pilot', rim: 'wire', bridge: 'double' }, finishes: ['gold-green', 'silver-mirror', 'gunmetal-blue', 'gold-gradient'] },
  { key: 'navigator', label: 'Navigator', family: 'sun', sun: true, spec: { shape: 'navigator', rim: 'wire', bridge: 'double' }, finishes: ['gold-green', 'black-gold'] },
  { key: 'trapezoid', label: 'Classic trapezoid', family: 'sun', sun: true, spec: { shape: 'trapezoid', rim: 'thick', bridge: 'single' }, finishes: ['black-dark', 'tortoise-brown', 'red-dark', 'white-dark'] },
  { key: 'round-sun', label: 'Round sunglasses', family: 'sun', sun: true, spec: { shape: 'round', rim: 'wire', bridge: 'saddle' }, finishes: ['gold-green', 'silver-mirror', 'black-gold'] },
  { key: 'cat-eye-sun', label: 'Cat-eye sunglasses', family: 'sun', sun: true, spec: { shape: 'cat-eye', rim: 'thick', bridge: 'single' }, finishes: ['black-dark', 'tortoise-brown', 'pink-rose'] },
  { key: 'butterfly', label: 'Butterfly', family: 'sun', sun: true, spec: { shape: 'butterfly', rim: 'thick', bridge: 'single', size: 1.06 }, finishes: ['black-dark', 'tortoise-brown', 'crystal-rose'] },
  { key: 'oversized-square', label: 'Oversized square', family: 'sun', sun: true, spec: { shape: 'oversized', rim: 'thick', bridge: 'single', size: 1.08 }, finishes: ['black-dark', 'white-dark', 'tortoise-brown'] },
  { key: 'slim-90s', label: 'Slim 90s', family: 'sun', sun: true, spec: { shape: 'slim-oval', rim: 'thick', bridge: 'single', size: 0.92 }, finishes: ['black-dark', 'red-dark', 'black-red'] },
  { key: 'hexagon-sun', label: 'Hexagon sunglasses', family: 'sun', sun: true, spec: { shape: 'hexagon', rim: 'wire', bridge: 'double' }, finishes: ['gold-green', 'silver-blue'] },
  { key: 'square-sun', label: 'Square sunglasses', family: 'sun', sun: true, spec: { shape: 'square', rim: 'thick', bridge: 'single', size: 1.08 }, finishes: ['black-dark', 'tortoise-brown'] },

  /* -------------------------------- sport ------------------------------- */
  { key: 'shield', label: 'Shield visor', family: 'sport', sun: true, spec: { shape: 'shield', rim: 'rimless', bridge: 'single' }, finishes: ['black-red', 'gunmetal-blue', 'silver-mirror'] },
  { key: 'sport-wrap', label: 'Sport wrap', family: 'sport', sun: true, spec: { shape: 'wrap', rim: 'half', bridge: 'single' }, finishes: ['black-dark', 'gunmetal-blue', 'white-dark'] },
  { key: 'ski-goggles', label: 'Ski goggles', family: 'sport', sun: true, spec: { shape: 'goggles', rim: 'thick', bridge: 'single', strap: true }, finishes: ['black-gold', 'white-dark'] },

  /* --------------------------------- fun -------------------------------- */
  { key: 'heart', label: 'Heart', family: 'fun', sun: true, spec: { shape: 'heart', rim: 'thick', bridge: 'single' }, finishes: ['pink-rose', 'red-dark'] },
  { key: 'star', label: 'Star', family: 'fun', sun: true, spec: { shape: 'star', rim: 'thick', bridge: 'single', size: 0.98 }, finishes: ['gold-yellow', 'pink-rose'] },
  { key: 'party-round', label: 'Party round', family: 'fun', sun: true, spec: { shape: 'round', rim: 'thick', bridge: 'single', thickness: 1.8, size: 1.02 }, finishes: ['white-dark', 'pink-rose'] },
];

function eyewearList(): EyewearDef[] {
  const out: EyewearDef[] = [];
  for (const m of MODELS) {
    for (const f of m.finishes) {
      const fin = EYEWEAR_FINISHES[f]!;
      out.push({
        key: `${m.key}-${f}`,
        model: m.key,
        finish: f,
        label: `${m.label}, ${fin.label.toLowerCase()}`,
        family: m.family,
        sun: m.sun,
        spec: { material: fin.material, frame: fin.frame, accent: fin.accent, lens: fin.lens ?? (m.sun ? 'dark' : 'clear'), ...m.spec },
      });
    }
  }
  return out;
}

export const EYEWEAR_CATALOG: readonly EyewearDef[] = eyewearList();
export const EYEWEAR_MODELS: ReadonlyArray<Pick<Model, 'key' | 'label' | 'family' | 'sun'>> = MODELS.map(({ key, label, family, sun }) => ({ key, label, family, sun }));
export const EYEWEAR_FAMILIES: readonly EyewearFamily[] = ['optical', 'retro', 'sun', 'sport', 'fun'];
const BY_KEY = new Map(EYEWEAR_CATALOG.map((e) => [e.key, e]));

export function getEyewear(key?: string | null): EyewearDef | undefined {
  return key ? BY_KEY.get(key) : undefined;
}

/** Catalog pair matching each extracted glasses type. */
export const LEGACY_EYEWEAR_KEY: Record<Exclude<MascotDna['glasses'], 'none'>, string> = {
  round: 'round-wire-gold',
  rectangular: 'slim-rectangle-black-metal',
  aviator: 'pilot-gold-green',
  'cat-eye': 'cat-eye-optical-black',
  sunglasses: 'trapezoid-black-dark',
};

/** The eyewear a DNA renders with ('none' → no glasses). */
export function resolveEyewear(dna: Pick<MascotDna, 'glasses' | 'glassesKey'>): EyewearDef | null {
  if (dna.glassesKey === 'none') return null;
  const picked = getEyewear(dna.glassesKey);
  if (picked) return picked;
  return dna.glasses === 'none' ? null : BY_KEY.get(LEGACY_EYEWEAR_KEY[dna.glasses])!;
}

export function describeEyewear(def: EyewearDef): string {
  return `wearing ${def.label.toLowerCase()} ${def.sun ? 'sunglasses' : 'glasses'}`;
}
