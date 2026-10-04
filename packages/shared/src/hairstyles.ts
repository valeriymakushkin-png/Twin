import type { HairStyle } from './dna';

/**
 * Hairstyle catalog (230+ cuts). Each entry is a semantic recipe (`HairLook`) that the 3D
 * renderer compiles into geometry, the SVG fallback maps to its nearest base style and the
 * prompt compiler turns into words — so one key drives every surface.
 */

export type HairGender = 'female' | 'male' | 'unisex';
export type HairTexture = 'straight' | 'wavy' | 'curly' | 'coily';
export type HairCut =
  | 'bald'
  | 'shaved'
  | 'horseshoe'
  | 'buzz'
  | 'crew'
  | 'crop'
  | 'caesar'
  | 'side-part'
  | 'comb-over'
  | 'quiff'
  | 'pompadour'
  | 'slick-back'
  | 'spiky'
  | 'textured'
  | 'faux-hawk'
  | 'mohawk'
  | 'bowl'
  | 'curtains'
  | 'curly-top'
  | 'afro'
  | 'high-top'
  | 'pixie'
  | 'bob'
  | 'shag'
  | 'medium'
  | 'long'
  | 'mullet'
  | 'tied'
  | 'braided'
  | 'locs';
export type HairSides = 'full' | 'taper' | 'low-fade' | 'mid-fade' | 'high-fade' | 'skin-fade' | 'undercut' | 'side-shave';
export type HairBangs = 'none' | 'straight' | 'curtain' | 'side' | 'wispy' | 'micro' | 'long' | 'curly';
export type HairShape = 'blunt' | 'a-line' | 'inverted' | 'asymmetric' | 'layered' | 'shaggy' | 'hime' | 'flip';
export type HairTieKind =
  | 'ponytail'
  | 'pigtails'
  | 'bun'
  | 'space-buns'
  | 'half-up'
  | 'braid'
  | 'french-braid'
  | 'two-braids'
  | 'crown-braid'
  | 'puff'
  | 'twin-puffs'
  | 'beehive'
  | 'victory-rolls';

export interface HairTie {
  kind: HairTieKind;
  height?: 'top' | 'high' | 'mid' | 'low' | 'side';
  /** Tail / braid length 0..1. */
  length?: number;
  /** Bun / puff size 0..1. */
  size?: number;
  braided?: boolean;
  messy?: boolean;
  /** Ponytail made of stacked bubbles. */
  bubble?: boolean;
  /** Donut (sock) bun. */
  donut?: boolean;
  /** Half-up variant: gathers only the top into a bun instead of a small tail. */
  bun?: boolean;
}

export interface HairStrands {
  kind: 'box-braids' | 'locs' | 'twists' | 'cornrows';
  count?: number;
  /** Hanging length 0..1 (0 = lies on the scalp only). */
  length?: number;
  /** Strands gathered instead of hanging free. */
  tied?: 'none' | 'bun' | 'ponytail' | 'up';
  thickness?: number;
}

export interface HairLook {
  cut: HairCut;
  /** 0..1: top length for short cuts, fall length for long ones. */
  length?: number;
  texture?: HairTexture;
  /** 0..1 volume / lift. */
  volume?: number;
  sides?: HairSides;
  part?: 'none' | 'middle' | 'side' | 'hard';
  /** Direction of a side part / swept fringe (+1 sweeps towards the character's left). */
  sweep?: -1 | 1;
  bangs?: HairBangs;
  shape?: HairShape;
  tie?: HairTie;
  strands?: HairStrands;
  /** Receding hairline 0..1. */
  recede?: number;
  /** 0..1 how tousled the top is. */
  messy?: number;
}

export type HairFamily =
  | 'short'
  | 'fade'
  | 'classic'
  | 'textured'
  | 'mohawk'
  | 'curly'
  | 'afro'
  | 'pixie'
  | 'bob'
  | 'layered'
  | 'long'
  | 'wavy'
  | 'ponytail'
  | 'bun'
  | 'braids'
  | 'locs'
  | 'retro'
  | 'bald';

export const HAIR_FAMILIES: readonly HairFamily[] = [
  'short',
  'fade',
  'classic',
  'textured',
  'mohawk',
  'curly',
  'afro',
  'pixie',
  'bob',
  'layered',
  'long',
  'wavy',
  'ponytail',
  'bun',
  'braids',
  'locs',
  'retro',
  'bald',
];

export interface HairstyleDef {
  key: string;
  /** English name (also used inside prompts). */
  label: string;
  gender: HairGender;
  family: HairFamily;
  look: HairLook;
}

const M: HairGender = 'male';
const F: HairGender = 'female';
const U: HairGender = 'unisex';
const h = (key: string, label: string, gender: HairGender, family: HairFamily, look: HairLook): HairstyleDef => ({ key, label, gender, family, look });

export const HAIRSTYLE_CATALOG: readonly HairstyleDef[] = [
  /* ------------------------------- bald ------------------------------- */
  h('bald-clean', 'Clean shaven head', U, 'bald', { cut: 'bald' }),
  h('bald-stubble', 'Shaved head stubble', U, 'bald', { cut: 'shaved' }),
  h('bald-horseshoe', 'Horseshoe', M, 'bald', { cut: 'horseshoe' }),
  h('bald-receding-buzz', 'Receding buzz', M, 'bald', { cut: 'buzz', length: 0.3, recede: 0.9 }),
  h('widows-peak-crop', "Widow's peak crop", M, 'bald', { cut: 'crop', recede: 0.55, length: 0.4 }),
  h('receding-side-part', 'Receding side part', M, 'bald', { cut: 'side-part', recede: 0.7, length: 0.4 }),

  /* ------------------------------- short ------------------------------ */
  h('buzz-induction', 'Induction cut', U, 'short', { cut: 'buzz', length: 0 }),
  h('buzz-classic', 'Buzz cut', U, 'short', { cut: 'buzz', length: 0.35 }),
  h('buzz-butch', 'Butch cut', M, 'short', { cut: 'buzz', length: 0.7 }),
  h('buzz-line-up', 'Buzz with line-up', M, 'short', { cut: 'buzz', length: 0.45, sides: 'taper' }),
  h('high-and-tight', 'High and tight', M, 'short', { cut: 'buzz', length: 0.55, sides: 'high-fade' }),
  h('crew-classic', 'Crew cut', M, 'short', { cut: 'crew' }),
  h('crew-ivy', 'Ivy League', M, 'short', { cut: 'crew', length: 0.75, part: 'side', sweep: 1 }),
  h('crew-textured', 'Textured crew', M, 'short', { cut: 'crew', messy: 0.7 }),
  h('crop-french', 'French crop', M, 'short', { cut: 'crop', bangs: 'micro' }),
  h('crop-textured', 'Textured crop', M, 'short', { cut: 'crop', messy: 0.75, bangs: 'micro' }),
  h('crop-long-fringe', 'Crop with long fringe', U, 'short', { cut: 'crop', length: 0.85, bangs: 'straight' }),
  h('caesar-classic', 'Caesar cut', M, 'short', { cut: 'caesar' }),
  h('caesar-textured', 'Textured Caesar', M, 'short', { cut: 'caesar', messy: 0.6 }),
  h('flat-top', 'Flat top', M, 'short', { cut: 'crew', length: 0.9, volume: 0.9, shape: 'blunt' }),

  /* ------------------------------- fades ------------------------------ */
  h('crew-low-fade', 'Crew cut, low fade', M, 'fade', { cut: 'crew', sides: 'low-fade' }),
  h('crew-mid-fade', 'Crew cut, mid fade', M, 'fade', { cut: 'crew', sides: 'mid-fade' }),
  h('crew-high-fade', 'Crew cut, high fade', M, 'fade', { cut: 'crew', sides: 'high-fade' }),
  h('crop-skin-fade', 'French crop, skin fade', M, 'fade', { cut: 'crop', sides: 'skin-fade', bangs: 'micro' }),
  h('crop-mid-fade', 'Textured crop, mid fade', M, 'fade', { cut: 'crop', sides: 'mid-fade', messy: 0.7, bangs: 'micro' }),
  h('caesar-fade', 'Caesar, mid fade', M, 'fade', { cut: 'caesar', sides: 'mid-fade' }),
  h('buzz-skin-fade', 'Buzz, skin fade', M, 'fade', { cut: 'buzz', length: 0.45, sides: 'skin-fade' }),
  h('side-part-fade', 'Hard part fade', M, 'fade', { cut: 'side-part', sides: 'mid-fade', part: 'hard' }),
  h('quiff-fade', 'Quiff, high fade', M, 'fade', { cut: 'quiff', sides: 'high-fade' }),
  h('pompadour-fade', 'Pompadour, skin fade', M, 'fade', { cut: 'pompadour', sides: 'skin-fade' }),
  h('textured-high-fade', 'Textured top, high fade', M, 'fade', { cut: 'textured', sides: 'high-fade', messy: 0.6 }),
  h('drop-fade', 'Drop fade', M, 'fade', { cut: 'textured', sides: 'low-fade', messy: 0.4, length: 0.5 }),
  h('taper-classic', 'Classic taper', M, 'fade', { cut: 'side-part', sides: 'taper' }),
  h('curly-top-fade', 'Curly top, mid fade', M, 'fade', { cut: 'curly-top', sides: 'mid-fade' }),
  h('high-top-fade', 'High top fade', M, 'fade', { cut: 'high-top', sides: 'high-fade' }),
  h('burst-fade-mohawk', 'Burst fade mohawk', M, 'fade', { cut: 'mohawk', sides: 'skin-fade', volume: 0.35 }),
  h('slick-back-fade', 'Slick back, low fade', M, 'fade', { cut: 'slick-back', sides: 'low-fade' }),
  h('spiky-fade', 'Spiky, mid fade', M, 'fade', { cut: 'spiky', sides: 'mid-fade', length: 0.4 }),

  /* ------------------------------ classic ----------------------------- */
  h('side-part-classic', 'Side part', M, 'classic', { cut: 'side-part' }),
  h('side-part-hard', 'Hard side part', M, 'classic', { cut: 'side-part', part: 'hard' }),
  h('side-part-volume', 'Voluminous side part', M, 'classic', { cut: 'side-part', volume: 0.85 }),
  h('side-part-left', 'Side part, left', M, 'classic', { cut: 'side-part', sweep: -1 }),
  h('comb-over', 'Comb over', M, 'classic', { cut: 'comb-over' }),
  h('comb-over-fade', 'Comb over fade', M, 'classic', { cut: 'comb-over', sides: 'low-fade' }),
  h('executive-contour', 'Executive contour', M, 'classic', { cut: 'side-part', length: 0.4, recede: 0.3 }),
  h('quiff-classic', 'Quiff', M, 'classic', { cut: 'quiff' }),
  h('quiff-textured', 'Textured quiff', M, 'classic', { cut: 'quiff', messy: 0.6 }),
  h('quiff-short', 'Short quiff', M, 'classic', { cut: 'quiff', volume: 0.3 }),
  h('quiff-messy', 'Messy quiff', M, 'classic', { cut: 'quiff', messy: 0.95, volume: 0.6 }),
  h('pompadour-classic', 'Pompadour', M, 'classic', { cut: 'pompadour' }),
  h('pompadour-modern', 'Modern pompadour', M, 'classic', { cut: 'pompadour', sides: 'undercut' }),
  h('pompadour-small', 'Short pompadour', M, 'classic', { cut: 'pompadour', volume: 0.3 }),
  h('pompadour-rockabilly', 'Rockabilly pompadour', M, 'classic', { cut: 'pompadour', volume: 1, length: 0.8 }),
  h('slick-back-classic', 'Slick back', M, 'classic', { cut: 'slick-back' }),
  h('slick-back-undercut', 'Slick back undercut', M, 'classic', { cut: 'slick-back', sides: 'undercut' }),
  h('slick-back-long', 'Long slick back', M, 'classic', { cut: 'slick-back', length: 0.85 }),
  h('slick-back-wet', 'Wet-look slick back', M, 'classic', { cut: 'slick-back', volume: 0.15 }),
  h('undercut-classic', 'Undercut', M, 'classic', { cut: 'textured', sides: 'undercut', length: 0.7, part: 'side', sweep: -1 }),
  h('undercut-disconnected', 'Disconnected undercut', M, 'classic', { cut: 'side-part', sides: 'undercut', length: 0.95, sweep: -1, volume: 0.7 }),
  h('ivy-slick', 'Ivy slick part', M, 'classic', { cut: 'side-part', volume: 0.2, part: 'hard', sweep: -1 }),

  /* ------------------------------ mohawk ------------------------------ */
  h('faux-hawk', 'Faux hawk', M, 'mohawk', { cut: 'faux-hawk' }),
  h('faux-hawk-fade', 'Faux hawk, mid fade', M, 'mohawk', { cut: 'faux-hawk', sides: 'mid-fade' }),
  h('faux-hawk-tall', 'Tall faux hawk', M, 'mohawk', { cut: 'faux-hawk', volume: 1 }),
  h('mohawk-spiky', 'Mohawk', U, 'mohawk', { cut: 'mohawk' }),
  h('mohawk-tall', 'Tall mohawk', U, 'mohawk', { cut: 'mohawk', volume: 1 }),
  h('mohawk-short', 'Short mohawk', M, 'mohawk', { cut: 'mohawk', volume: 0.2 }),
  h('frohawk', 'Frohawk', U, 'mohawk', { cut: 'mohawk', texture: 'coily', volume: 0.6 }),

  /* ----------------------------- textured ----------------------------- */
  h('spiky-short', 'Short spikes', M, 'textured', { cut: 'spiky', length: 0.3 }),
  h('spiky-anime', 'Anime spikes', U, 'textured', { cut: 'spiky', length: 1, volume: 1 }),
  h('spiky-messy', 'Messy spikes', M, 'textured', { cut: 'spiky', messy: 1, length: 0.6 }),
  h('spiky-frosted', 'Frosted spikes', M, 'textured', { cut: 'spiky', length: 0.55, volume: 0.7 }),
  h('short-textured', 'Short textured', M, 'textured', { cut: 'textured' }),
  h('textured-fringe', 'Textured fringe', M, 'textured', { cut: 'textured', bangs: 'side', length: 0.7 }),
  h('messy-top', 'Messy top', M, 'textured', { cut: 'textured', messy: 1, length: 0.6 }),
  h('bed-head', 'Bed head', U, 'textured', { cut: 'textured', messy: 1, length: 0.9, volume: 0.8 }),
  h('tousled-wavy', 'Tousled waves', M, 'textured', { cut: 'textured', texture: 'wavy', length: 0.85, messy: 0.6 }),
  h('bowl-cut', 'Bowl cut', U, 'textured', { cut: 'bowl' }),
  h('mushroom', 'Mushroom cut', U, 'textured', { cut: 'bowl', volume: 0.9, length: 0.7 }),
  h('edgar', 'Edgar cut', M, 'textured', { cut: 'caesar', sides: 'high-fade', bangs: 'straight', length: 0.6 }),
  h('mod-cut', 'Mod cut', U, 'textured', { cut: 'bowl', length: 1, bangs: 'long' }),
  h('curtains-90s', '90s curtains', U, 'textured', { cut: 'curtains' }),
  h('curtains-long', 'Long curtains', U, 'textured', { cut: 'curtains', length: 1 }),
  h('emo-fringe', 'Emo fringe', U, 'textured', { cut: 'textured', bangs: 'long', length: 1, sweep: 1 }),
  h('korean-two-block', 'Two-block', M, 'textured', { cut: 'bowl', sides: 'undercut', length: 0.8, bangs: 'wispy' }),
  h('comma-hair', 'Comma hair', M, 'textured', { cut: 'curtains', length: 0.7, sides: 'undercut', bangs: 'curtain' }),

  /* ------------------------------- curly ------------------------------ */
  h('curly-short', 'Short curls', U, 'curly', { cut: 'curly-top', length: 0.3 }),
  h('curly-fringe', 'Curly fringe', M, 'curly', { cut: 'curly-top', bangs: 'curly', sides: 'taper' }),
  h('curly-medium-top', 'Curly top', M, 'curly', { cut: 'curly-top', length: 1 }),
  h('sponge-twists', 'Sponge twists', M, 'curly', { cut: 'curly-top', texture: 'coily', length: 0.4, sides: 'low-fade' }),
  h('curly-undercut', 'Curly undercut', M, 'curly', { cut: 'curly-top', sides: 'undercut', length: 0.7 }),
  h('curly-medium', 'Medium curls', U, 'curly', { cut: 'medium', texture: 'curly' }),
  h('curly-shag', 'Curly shag', U, 'curly', { cut: 'shag', texture: 'curly' }),
  h('curly-bob', 'Curly bob', F, 'curly', { cut: 'bob', texture: 'curly' }),
  h('curls-spiral', 'Spiral curls', F, 'curly', { cut: 'long', texture: 'curly', volume: 0.8 }),
  h('curls-loose', 'Loose curls', F, 'curly', { cut: 'long', texture: 'curly', volume: 0.35, length: 0.85 }),
  h('curls-bangs', 'Curls with bangs', F, 'curly', { cut: 'long', texture: 'curly', bangs: 'curly' }),
  h('curls-big', 'Big curls', F, 'curly', { cut: 'long', texture: 'curly', volume: 1, length: 0.6 }),
  h('ringlets', 'Ringlets', F, 'curly', { cut: 'long', texture: 'coily', length: 0.7 }),
  h('long-curly', 'Long curly', F, 'curly', { cut: 'long', texture: 'curly' }),

  /* -------------------------------- afro ------------------------------ */
  h('afro-twa', 'Teeny afro', U, 'afro', { cut: 'afro', length: 0.12 }),
  h('afro-short', 'Short afro', M, 'afro', { cut: 'afro', length: 0.25 }),
  h('afro-taper', 'Afro taper', M, 'afro', { cut: 'afro', length: 0.4, sides: 'taper' }),
  h('afro-classic', 'Afro', U, 'afro', { cut: 'afro', length: 0.65 }),
  h('afro-big', 'Big afro', U, 'afro', { cut: 'afro', length: 1, volume: 1 }),
  h('high-top-classic', 'High top', M, 'afro', { cut: 'high-top' }),
  h('afro-side-part', 'Afro with side part', U, 'afro', { cut: 'afro', length: 0.55, part: 'hard' }),
  h('twist-out', 'Twist out', F, 'afro', { cut: 'afro', texture: 'curly', length: 0.7, messy: 0.6 }),
  h('afro-puff', 'Afro puff', F, 'afro', { cut: 'tied', texture: 'coily', tie: { kind: 'puff', height: 'top', size: 0.7 } }),
  h('twin-puffs', 'Twin puffs', F, 'afro', { cut: 'tied', texture: 'coily', tie: { kind: 'twin-puffs', size: 0.55 } }),
  h('coily-medium', 'Medium coils', F, 'afro', { cut: 'medium', texture: 'coily' }),

  /* ------------------------------- pixie ------------------------------ */
  h('pixie-classic', 'Pixie cut', F, 'pixie', { cut: 'pixie' }),
  h('pixie-long', 'Long pixie', F, 'pixie', { cut: 'pixie', length: 0.85 }),
  h('pixie-textured', 'Textured pixie', F, 'pixie', { cut: 'pixie', messy: 0.75 }),
  h('pixie-side-swept', 'Side-swept pixie', F, 'pixie', { cut: 'pixie', bangs: 'side', sweep: -1, length: 0.7 }),
  h('pixie-undercut', 'Undercut pixie', F, 'pixie', { cut: 'pixie', sides: 'undercut', length: 0.8 }),
  h('pixie-curly', 'Curly pixie', F, 'pixie', { cut: 'pixie', texture: 'curly' }),
  h('pixie-wavy', 'Wavy pixie', F, 'pixie', { cut: 'pixie', texture: 'wavy', length: 0.7 }),
  h('pixie-buzz', 'Feminine buzz', F, 'pixie', { cut: 'buzz', length: 0.6 }),
  h('pixie-bangs', 'Pixie with bangs', F, 'pixie', { cut: 'pixie', bangs: 'straight' }),
  h('pixie-spiky', 'Spiky pixie', F, 'pixie', { cut: 'pixie', messy: 1, volume: 0.8 }),

  /* -------------------------------- bob ------------------------------- */
  h('bob-classic', 'Bob with bangs', F, 'bob', { cut: 'bob', bangs: 'straight' }),
  h('bob-blunt', 'Blunt bob', F, 'bob', { cut: 'bob', shape: 'blunt', part: 'middle' }),
  h('bob-french', 'French bob', F, 'bob', { cut: 'bob', length: 0.15, bangs: 'straight' }),
  h('bob-a-line', 'A-line bob', F, 'bob', { cut: 'bob', shape: 'a-line', part: 'side' }),
  h('bob-inverted', 'Inverted bob', F, 'bob', { cut: 'bob', shape: 'inverted', part: 'side', sweep: -1 }),
  h('bob-stacked', 'Stacked bob', F, 'bob', { cut: 'bob', shape: 'inverted', volume: 0.85 }),
  h('bob-asymmetric', 'Asymmetric bob', F, 'bob', { cut: 'bob', shape: 'asymmetric', part: 'side' }),
  h('bob-wavy', 'Wavy bob', F, 'bob', { cut: 'bob', texture: 'wavy', part: 'side' }),
  h('lob', 'Lob', F, 'bob', { cut: 'bob', length: 0.75, part: 'middle' }),
  h('lob-wavy', 'Wavy lob', F, 'bob', { cut: 'bob', length: 0.75, texture: 'wavy', part: 'side' }),
  h('bob-shaggy', 'Shaggy bob', F, 'bob', { cut: 'bob', shape: 'shaggy', bangs: 'wispy' }),
  h('bob-curtain', 'Bob with curtain bangs', F, 'bob', { cut: 'bob', bangs: 'curtain' }),
  h('bob-micro', 'Micro bob', F, 'bob', { cut: 'bob', length: 0, bangs: 'micro' }),
  h('bob-side-part', 'Side-part bob', F, 'bob', { cut: 'bob', part: 'side', sweep: 1 }),
  h('bob-sleek', 'Sleek bob', F, 'bob', { cut: 'bob', part: 'middle', volume: 0.15 }),
  h('bob-side-shave', 'Bob with side shave', F, 'bob', { cut: 'bob', sides: 'side-shave', part: 'side', sweep: 1 }),
  h('bob-flip', 'Flipped bob', F, 'bob', { cut: 'bob', shape: 'flip', part: 'side' }),
  h('bob-hime', 'Hime bob', F, 'bob', { cut: 'bob', shape: 'hime', bangs: 'straight', length: 0.6 }),

  /* ------------------------------ layered ----------------------------- */
  h('shag', 'Shag', U, 'layered', { cut: 'shag' }),
  h('wolf-cut', 'Wolf cut', U, 'layered', { cut: 'shag', length: 0.7, messy: 0.8, bangs: 'curtain' }),
  h('butterfly-cut', 'Butterfly cut', F, 'layered', { cut: 'long', shape: 'layered', bangs: 'curtain', volume: 0.8 }),
  h('octopus-cut', 'Octopus cut', F, 'layered', { cut: 'shag', length: 0.95, shape: 'layered' }),
  h('shag-short', 'Short shag', U, 'layered', { cut: 'shag', length: 0.3, bangs: 'wispy' }),
  h('feathered-70s', '70s feathered', F, 'layered', { cut: 'long', shape: 'layered', bangs: 'curtain', volume: 0.95, texture: 'wavy' }),
  h('long-layered', 'Long layers', F, 'layered', { cut: 'long', shape: 'layered', part: 'side' }),
  h('medium-layered', 'Medium layers', F, 'layered', { cut: 'medium', shape: 'layered', part: 'side' }),
  h('jellyfish-cut', 'Jellyfish cut', F, 'layered', { cut: 'long', shape: 'hime', bangs: 'straight', length: 0.7 }),

  /* ------------------------------- long ------------------------------- */
  h('long-middle', 'Long, middle part', F, 'long', { cut: 'long', part: 'middle' }),
  h('long-side', 'Long, side part', F, 'long', { cut: 'long', part: 'side' }),
  h('long-straight', 'Long straight', F, 'long', { cut: 'long', part: 'middle', length: 0.95 }),
  h('long-bangs', 'Long with bangs', F, 'long', { cut: 'long', bangs: 'straight' }),
  h('long-curtain', 'Long with curtain bangs', F, 'long', { cut: 'long', bangs: 'curtain' }),
  h('long-sleek', 'Sleek long', F, 'long', { cut: 'long', part: 'middle', volume: 0.15, length: 0.9 }),
  h('long-extra', 'Extra long', F, 'long', { cut: 'long', length: 1 }),
  h('long-wispy', 'Long with wispy bangs', F, 'long', { cut: 'long', bangs: 'wispy' }),
  h('long-side-bangs', 'Long with side bangs', F, 'long', { cut: 'long', bangs: 'side', sweep: 1 }),
  h('long-hime', 'Hime cut', F, 'long', { cut: 'long', shape: 'hime', bangs: 'straight' }),
  h('long-side-shave', 'Long with side shave', F, 'long', { cut: 'long', sides: 'side-shave', part: 'side', sweep: 1 }),
  h('medium-straight', 'Shoulder length', F, 'long', { cut: 'medium', bangs: 'straight' }),
  h('collarbone', 'Collarbone cut', F, 'long', { cut: 'medium', part: 'middle' }),
  h('medium-curtain', 'Medium with curtain bangs', F, 'long', { cut: 'medium', bangs: 'curtain' }),
  h('medium-sleek', 'Sleek medium', F, 'long', { cut: 'medium', part: 'side', volume: 0.2, sweep: 1 }),
  h('long-men-middle', 'Long, middle part (men)', M, 'long', { cut: 'long', length: 0.55, part: 'middle' }),
  h('shoulder-men', 'Shoulder length (men)', M, 'long', { cut: 'medium', length: 0.5, part: 'side' }),
  h('rocker', 'Rocker long', M, 'long', { cut: 'long', length: 0.95, texture: 'wavy', volume: 0.85 }),
  h('mullet-classic', 'Mullet', M, 'long', { cut: 'mullet' }),
  h('mullet-modern', 'Modern mullet', U, 'long', { cut: 'mullet', messy: 0.6, length: 0.6 }),
  h('mullet-fade', 'Burst fade mullet', M, 'long', { cut: 'mullet', sides: 'mid-fade' }),
  h('mullet-curly', 'Curly mullet', U, 'long', { cut: 'mullet', texture: 'curly' }),
  h('mullet-shag', 'Shag mullet', U, 'long', { cut: 'mullet', shape: 'shaggy', bangs: 'wispy' }),

  /* ------------------------------- wavy ------------------------------- */
  h('beach-waves', 'Beach waves', F, 'wavy', { cut: 'long', texture: 'wavy', part: 'middle', messy: 0.4 }),
  h('hollywood-waves', 'Hollywood waves', F, 'wavy', { cut: 'long', texture: 'wavy', part: 'side', volume: 0.8, sweep: -1 }),
  h('mermaid-waves', 'Mermaid waves', F, 'wavy', { cut: 'long', texture: 'wavy', length: 1 }),
  h('wavy-curtain', 'Waves with curtain bangs', F, 'wavy', { cut: 'long', texture: 'wavy', bangs: 'curtain' }),
  h('wavy-bangs', 'Waves with bangs', F, 'wavy', { cut: 'long', texture: 'wavy', bangs: 'straight' }),
  h('boho-waves', 'Boho waves', F, 'wavy', { cut: 'long', texture: 'wavy', messy: 0.8, part: 'middle', volume: 0.75 }),
  h('long-wavy', 'Long wavy', F, 'wavy', { cut: 'long', texture: 'wavy', part: 'side' }),
  h('medium-wavy', 'Medium wavy', F, 'wavy', { cut: 'medium', texture: 'wavy', bangs: 'side' }),
  h('medium-wavy-middle', 'Medium waves, middle part', F, 'wavy', { cut: 'medium', texture: 'wavy', part: 'middle' }),
  h('surfer', 'Surfer hair', M, 'wavy', { cut: 'long', texture: 'wavy', length: 0.5, messy: 0.7 }),
  h('wavy-men-medium', 'Medium waves (men)', M, 'wavy', { cut: 'medium', texture: 'wavy', length: 0.4, part: 'middle' }),

  /* ----------------------------- ponytail ----------------------------- */
  h('ponytail-high', 'High ponytail', F, 'ponytail', { cut: 'tied', tie: { kind: 'ponytail', height: 'high' } }),
  h('ponytail-sleek', 'Sleek high ponytail', F, 'ponytail', { cut: 'tied', volume: 0.1, tie: { kind: 'ponytail', height: 'high', length: 1 } }),
  h('ponytail-mid', 'Ponytail', F, 'ponytail', { cut: 'tied', tie: { kind: 'ponytail', height: 'mid' } }),
  h('ponytail-low', 'Low ponytail', F, 'ponytail', { cut: 'tied', tie: { kind: 'ponytail', height: 'low' } }),
  h('ponytail-side', 'Side ponytail', F, 'ponytail', { cut: 'tied', tie: { kind: 'ponytail', height: 'side' } }),
  h('ponytail-bubble', 'Bubble ponytail', F, 'ponytail', { cut: 'tied', tie: { kind: 'ponytail', height: 'high', bubble: true, length: 0.9 } }),
  h('ponytail-curly', 'Curly ponytail', F, 'ponytail', { cut: 'tied', texture: 'curly', tie: { kind: 'ponytail', height: 'mid' } }),
  h('ponytail-wavy-low', 'Wavy low ponytail', F, 'ponytail', { cut: 'tied', texture: 'wavy', tie: { kind: 'ponytail', height: 'low', length: 0.8 } }),
  h('ponytail-braided', 'Braided ponytail', F, 'ponytail', { cut: 'tied', tie: { kind: 'ponytail', height: 'mid', braided: true } }),
  h('ponytail-bangs', 'Ponytail with bangs', F, 'ponytail', { cut: 'tied', bangs: 'straight', tie: { kind: 'ponytail', height: 'high' } }),
  h('ponytail-curtain', 'Ponytail with curtain bangs', F, 'ponytail', { cut: 'tied', bangs: 'curtain', tie: { kind: 'ponytail', height: 'mid' } }),
  h('ponytail-short-men', 'Short ponytail (men)', M, 'ponytail', { cut: 'tied', tie: { kind: 'ponytail', height: 'low', length: 0.3 } }),
  h('viking-ponytail', 'Viking braid ponytail', M, 'ponytail', { cut: 'tied', sides: 'undercut', tie: { kind: 'ponytail', height: 'mid', braided: true, length: 0.6 } }),
  h('pigtails-low', 'Low pigtails', F, 'ponytail', { cut: 'tied', part: 'middle', tie: { kind: 'pigtails', height: 'low' } }),
  h('pigtails-high', 'High pigtails', F, 'ponytail', { cut: 'tied', part: 'middle', tie: { kind: 'pigtails', height: 'high', length: 0.7 } }),
  h('pigtails-bangs', 'Pigtails with bangs', F, 'ponytail', { cut: 'tied', bangs: 'straight', tie: { kind: 'pigtails', height: 'high', length: 0.6 } }),
  h('pigtails-curly', 'Curly pigtails', F, 'ponytail', { cut: 'tied', part: 'middle', texture: 'curly', tie: { kind: 'pigtails', height: 'mid' } }),
  h('half-up-ponytail', 'Half-up ponytail', F, 'ponytail', { cut: 'long', tie: { kind: 'half-up' } }),
  h('half-up-wavy', 'Half-up waves', F, 'ponytail', { cut: 'long', texture: 'wavy', tie: { kind: 'half-up' } }),

  /* -------------------------------- bun ------------------------------- */
  h('bun-top', 'Top bun', F, 'bun', { cut: 'tied', tie: { kind: 'bun', height: 'top' } }),
  h('bun-messy', 'Messy bun', F, 'bun', { cut: 'tied', messy: 0.6, tie: { kind: 'bun', height: 'top', messy: true, size: 0.65 } }),
  h('bun-ballerina', 'Ballerina bun', F, 'bun', { cut: 'tied', volume: 0.1, tie: { kind: 'bun', height: 'high', size: 0.45 } }),
  h('chignon', 'Chignon', F, 'bun', { cut: 'tied', part: 'side', tie: { kind: 'bun', height: 'low', size: 0.55 } }),
  h('bun-donut', 'Donut bun', F, 'bun', { cut: 'tied', tie: { kind: 'bun', height: 'high', donut: true, size: 0.6 } }),
  h('bun-braided', 'Braided bun', F, 'bun', { cut: 'tied', tie: { kind: 'bun', height: 'top', braided: true, size: 0.6 } }),
  h('bun-bangs', 'Top bun with bangs', F, 'bun', { cut: 'tied', bangs: 'curtain', tie: { kind: 'bun', height: 'top' } }),
  h('space-buns', 'Space buns', F, 'bun', { cut: 'tied', part: 'middle', tie: { kind: 'space-buns', height: 'top' } }),
  h('space-buns-low', 'Low twin buns', F, 'bun', { cut: 'tied', part: 'middle', tie: { kind: 'space-buns', height: 'low' } }),
  h('half-up-bun', 'Half-up bun', F, 'bun', { cut: 'long', tie: { kind: 'half-up', bun: true } }),
  h('half-up-space-buns', 'Half-up space buns', F, 'bun', { cut: 'long', part: 'middle', tie: { kind: 'space-buns', height: 'top', size: 0.4 } }),
  h('man-bun', 'Man bun', M, 'bun', { cut: 'tied', tie: { kind: 'bun', height: 'high', size: 0.5 } }),
  h('top-knot', 'Top knot', M, 'bun', { cut: 'tied', sides: 'undercut', tie: { kind: 'bun', height: 'top', size: 0.35 } }),
  h('half-bun-men', 'Half bun (men)', M, 'bun', { cut: 'long', length: 0.45, tie: { kind: 'half-up', bun: true } }),
  h('samurai-knot', 'Samurai knot', M, 'bun', { cut: 'tied', volume: 0.1, tie: { kind: 'bun', height: 'top', size: 0.3, donut: true } }),

  /* ------------------------------ braids ------------------------------ */
  h('braids-classic', 'Two braids', F, 'braids', { cut: 'tied', part: 'middle', tie: { kind: 'pigtails', height: 'low', braided: true } }),
  h('braid-single', 'Single braid', F, 'braids', { cut: 'tied', tie: { kind: 'braid', height: 'low' } }),
  h('braid-side', 'Side braid', F, 'braids', { cut: 'tied', tie: { kind: 'braid', height: 'side' } }),
  h('braid-french', 'French braid', F, 'braids', { cut: 'tied', tie: { kind: 'french-braid' } }),
  h('braids-dutch', 'Dutch double braids', F, 'braids', { cut: 'tied', tie: { kind: 'two-braids' } }),
  h('crown-braid', 'Crown braid', F, 'braids', { cut: 'tied', tie: { kind: 'crown-braid' } }),
  h('pigtails-braided-high', 'High braided pigtails', F, 'braids', { cut: 'tied', part: 'middle', tie: { kind: 'pigtails', height: 'high', braided: true, length: 0.8 } }),
  h('half-up-braids', 'Half-up braids', F, 'braids', { cut: 'long', tie: { kind: 'half-up', braided: true } }),
  h('box-braids', 'Box braids', U, 'braids', { cut: 'braided', strands: { kind: 'box-braids', length: 0.85 } }),
  h('box-braids-short', 'Short box braids', U, 'braids', { cut: 'braided', strands: { kind: 'box-braids', length: 0.4 } }),
  h('knotless-braids', 'Knotless braids', F, 'braids', { cut: 'braided', strands: { kind: 'box-braids', length: 1, count: 40, thickness: 0.75 } }),
  h('box-braids-bun', 'Box braids bun', F, 'braids', { cut: 'braided', strands: { kind: 'box-braids', tied: 'bun' } }),
  h('box-braids-ponytail', 'Box braids ponytail', F, 'braids', { cut: 'braided', strands: { kind: 'box-braids', tied: 'ponytail' } }),
  h('goddess-braids', 'Goddess braids', F, 'braids', { cut: 'braided', messy: 0.7, strands: { kind: 'box-braids', length: 0.75, count: 24, thickness: 1.15 } }),
  h('fulani-braids', 'Fulani braids', F, 'braids', { cut: 'braided', strands: { kind: 'cornrows', count: 9, length: 0.8 } }),
  h('cornrows', 'Cornrows', U, 'braids', { cut: 'braided', strands: { kind: 'cornrows', count: 8, length: 0 } }),
  h('cornrows-fade', 'Cornrows with fade', M, 'braids', { cut: 'braided', sides: 'low-fade', strands: { kind: 'cornrows', count: 6, length: 0 } }),
  h('cornrows-long', 'Long cornrows', U, 'braids', { cut: 'braided', strands: { kind: 'cornrows', count: 8, length: 0.5 } }),
  h('two-strand-twists', 'Two-strand twists', U, 'braids', { cut: 'braided', strands: { kind: 'twists', length: 0.35 } }),
  h('twists-long', 'Long twists', F, 'braids', { cut: 'braided', strands: { kind: 'twists', length: 0.8 } }),

  /* -------------------------------- locs ------------------------------ */
  h('dreads-short', 'Short dreads', U, 'locs', { cut: 'locs', strands: { kind: 'locs', length: 0.3 } }),
  h('dreadlocks', 'Dreadlocks', U, 'locs', { cut: 'locs', strands: { kind: 'locs', length: 0.6 } }),
  h('dreads-long', 'Long dreads', U, 'locs', { cut: 'locs', strands: { kind: 'locs', length: 0.95 } }),
  h('dreads-high-top', 'Dreads high top', M, 'locs', { cut: 'locs', sides: 'high-fade', strands: { kind: 'locs', length: 0.3, tied: 'up' } }),
  h('locs-ponytail', 'Locs ponytail', U, 'locs', { cut: 'locs', strands: { kind: 'locs', length: 0.7, tied: 'ponytail' } }),
  h('locs-bun', 'Locs bun', F, 'locs', { cut: 'locs', strands: { kind: 'locs', tied: 'bun' } }),
  h('freeform-locs', 'Freeform locs', U, 'locs', { cut: 'locs', messy: 1, strands: { kind: 'locs', length: 0.6, count: 18, thickness: 1.3 } }),
  h('faux-locs', 'Faux locs', F, 'locs', { cut: 'locs', strands: { kind: 'locs', length: 0.9, count: 34, thickness: 0.8 } }),
  h('locs-fade', 'Short locs with fade', M, 'locs', { cut: 'locs', sides: 'mid-fade', strands: { kind: 'locs', length: 0.2 } }),

  /* ------------------------------- retro ------------------------------ */
  h('bouffant', 'Bouffant', F, 'retro', { cut: 'medium', volume: 1, length: 0.25, shape: 'flip' }),
  h('finger-waves', 'Finger waves', F, 'retro', { cut: 'bob', texture: 'wavy', length: 0.1, volume: 0.1, part: 'side' }),
  h('beehive', 'Beehive', F, 'retro', { cut: 'tied', tie: { kind: 'beehive' } }),
  h('victory-rolls', 'Victory rolls', F, 'retro', { cut: 'medium', texture: 'wavy', tie: { kind: 'victory-rolls' } }),
  h('flip-60s', '60s flip', F, 'retro', { cut: 'bob', shape: 'flip', length: 0.55, volume: 0.8 }),
  h('greaser', 'Greaser', M, 'retro', { cut: 'pompadour', volume: 0.75, length: 0.7, sides: 'full' }),
  h('disco-afro', 'Disco afro', U, 'retro', { cut: 'afro', length: 0.9, part: 'side' }),
  h('mod-bob', 'Mod bob', F, 'retro', { cut: 'bob', shape: 'blunt', bangs: 'straight', length: 0.35 }),
];

export const HAIRSTYLE_KEYS: readonly string[] = HAIRSTYLE_CATALOG.map((s) => s.key);
const BY_KEY = new Map(HAIRSTYLE_CATALOG.map((s) => [s.key, s]));

export function getHairstyle(key?: string | null): HairstyleDef | undefined {
  return key ? BY_KEY.get(key) : undefined;
}

/** Catalog entry that reproduces each extracted base style. */
export const LEGACY_HAIR_KEY: Record<HairStyle, string> = {
  bald: 'bald-clean',
  'buzz-cut': 'buzz-classic',
  'crew-cut': 'crew-classic',
  'short-textured': 'short-textured',
  'side-part': 'side-part-classic',
  quiff: 'quiff-classic',
  pompadour: 'pompadour-classic',
  undercut: 'undercut-classic',
  mohawk: 'mohawk-spiky',
  mullet: 'mullet-classic',
  'curly-short': 'curly-short',
  afro: 'afro-classic',
  'medium-wavy': 'medium-wavy',
  'medium-straight': 'medium-straight',
  'long-straight': 'long-straight',
  'long-wavy': 'long-wavy',
  'long-curly': 'long-curly',
  bob: 'bob-classic',
  pixie: 'pixie-classic',
  ponytail: 'ponytail-mid',
  bun: 'bun-top',
  braids: 'braids-classic',
  dreadlocks: 'dreadlocks',
};

/** The hairstyle a DNA renders with: an explicit pick, else its extracted base style. */
export function resolveHairstyle(dna: { hairStyle: HairStyle; hairKey?: string | null }): HairstyleDef {
  return getHairstyle(dna.hairKey) ?? BY_KEY.get(LEGACY_HAIR_KEY[dna.hairStyle])!;
}

/** Nearest base style (SVG fallback renderer, analytics). */
export function baseHairStyle(look: HairLook): HairStyle {
  const t = look.texture ?? 'straight';
  switch (look.cut) {
    case 'bald':
    case 'shaved':
    case 'horseshoe':
      return 'bald';
    case 'buzz':
      return 'buzz-cut';
    case 'crew':
    case 'crop':
    case 'caesar':
      return 'crew-cut';
    case 'side-part':
    case 'comb-over':
      return 'side-part';
    case 'quiff':
      return 'quiff';
    case 'pompadour':
    case 'slick-back':
      return 'pompadour';
    case 'faux-hawk':
    case 'mohawk':
      return 'mohawk';
    case 'spiky':
    case 'textured':
    case 'bowl':
    case 'curtains':
      return look.sides === 'undercut' ? 'undercut' : 'short-textured';
    case 'curly-top':
      return 'curly-short';
    case 'afro':
    case 'high-top':
      return 'afro';
    case 'pixie':
      return 'pixie';
    case 'bob':
      return 'bob';
    case 'mullet':
      return 'mullet';
    case 'shag':
    case 'medium':
      return t === 'straight' ? 'medium-straight' : 'medium-wavy';
    case 'long':
      return t === 'curly' || t === 'coily' ? 'long-curly' : t === 'wavy' ? 'long-wavy' : 'long-straight';
    case 'tied':
      if (look.tie?.kind === 'bun' || look.tie?.kind === 'space-buns' || look.tie?.kind === 'beehive') return 'bun';
      if (look.tie?.kind === 'puff' || look.tie?.kind === 'twin-puffs') return 'afro';
      if (look.tie?.braided || look.tie?.kind.includes('braid')) return 'braids';
      return 'ponytail';
    case 'braided':
      return 'braids';
    case 'locs':
      return 'dreadlocks';
  }
}

const SIDES_PHRASE: Record<HairSides, string> = {
  full: '',
  taper: 'tapered sides',
  'low-fade': 'low fade on the sides',
  'mid-fade': 'mid fade on the sides',
  'high-fade': 'high fade on the sides',
  'skin-fade': 'skin fade on the sides',
  undercut: 'shaved undercut sides',
  'side-shave': 'one side shaved',
};
const BANGS_PHRASE: Record<HairBangs, string> = {
  none: '',
  straight: 'straight blunt bangs',
  curtain: 'curtain bangs',
  side: 'side-swept bangs',
  wispy: 'wispy bangs',
  micro: 'short micro fringe',
  long: 'long fringe over one eye',
  curly: 'curly bangs',
};

/** Prompt phrase, e.g. "high ponytail hairstyle, wavy hair, curtain bangs". */
export function describeHairstyle(def: HairstyleDef): string {
  const l = def.look;
  if (l.cut === 'bald') return 'bald head';
  const parts = [`${def.label.toLowerCase().replace(/ \((men)\)$/, '')} hairstyle`];
  if (l.texture && l.texture !== 'straight' && !def.label.toLowerCase().includes(l.texture)) parts.push(`${l.texture} hair`);
  if (l.sides && SIDES_PHRASE[l.sides] && !def.label.toLowerCase().includes('fade')) parts.push(SIDES_PHRASE[l.sides]);
  if (l.bangs && BANGS_PHRASE[l.bangs] && !def.label.toLowerCase().includes('bang')) parts.push(BANGS_PHRASE[l.bangs]);
  return parts.join(', ');
}
