/**
 * Style engine catalog.
 *
 * Each style is a declarative rendering recipe. The prompt compiler (apps/api/src/ai/prompts)
 * combines: style recipe + mascot DNA description + scene (emotion / pose / outfit / meme / video).
 *
 * Prompts intentionally describe the *visual language* (materials, lighting, proportions)
 * instead of relying only on studio/brand names: this yields more consistent results across
 * providers and keeps us clear of provider-side brand-name filtering. Display names use the
 * "-style" / "-inspired" convention; final naming must be cleared by legal before launch.
 */

export const STYLE_SLUGS = [
  'pixar',
  'cartoon',
  'anime',
  'cyberpunk',
  'lego',
  'funko-pop',
  'fortnite',
  'arcane',
  'gta-loading-screen',
  'disney-inspired',
  'dreamworks-inspired',
] as const;

export type StyleSlug = (typeof STYLE_SLUGS)[number];

export interface StyleRecipe {
  slug: StyleSlug;
  name: string;
  tagline: string;
  isPremium: boolean;
  sortOrder: number;
  /** Core rendering language of the style. */
  look: string;
  /** Proportions / character design rules — key to "stylised but recognisable". */
  characterDesign: string;
  lighting: string;
  /** Default background for the hero render (sticker/pfp scenes override it). */
  background: string;
  /** Things the model must avoid for this style. */
  negative: string;
  /** How strongly to lean on reference photos vs the style (0..1), passed to providers that support it. */
  identityStrength: number;
  /** UI gradient (from → to) used on cards, chips and loaders. */
  gradient: [string, string];
}

export const STYLE_CATALOG: readonly StyleRecipe[] = [
  {
    slug: 'pixar',
    name: 'Pixar Style',
    tagline: 'Feature-film 3D charm',
    isPremium: false,
    sortOrder: 1,
    look: 'high-end 3D animated feature film character render, soft subsurface-scattered skin, smooth stylised shapes, physically based materials, subtle film grain',
    characterDesign: 'slightly enlarged head and expressive eyes, simplified but faithful facial structure, appealing rounded forms while keeping the exact face shape, hairline and nose silhouette',
    lighting: 'cinematic three-point lighting with warm key light and soft rim light',
    background: 'soft gradient studio backdrop with gentle bokeh',
    negative: 'photorealistic skin pores, uncanny valley, horror, extra fingers, text, watermark, logo',
    identityStrength: 0.8,
    gradient: ['#ffb36b', '#ff5e8a'],
  },
  {
    slug: 'cartoon',
    name: 'Cartoon',
    tagline: 'Bold lines, big energy',
    isPremium: false,
    sortOrder: 2,
    look: 'modern 2D TV cartoon illustration, bold clean outlines, flat cel shading with one shadow tone, vibrant saturated palette',
    characterDesign: 'exaggerated but recognisable caricature, simplified geometric features, keeps signature hairstyle and face shape',
    lighting: 'flat lighting with a single crisp shadow layer',
    background: 'solid pastel color background with simple shapes',
    negative: '3D render, photorealism, gradients on skin, blurry lines, text, watermark',
    identityStrength: 0.7,
    gradient: ['#ffe14d', '#ff7a45'],
  },
  {
    slug: 'anime',
    name: 'Anime',
    tagline: 'Studio-grade anime hero',
    isPremium: false,
    sortOrder: 3,
    look: 'premium Japanese anime key visual, crisp line art, cel shading with soft gradients, detailed glossy hair strands, luminous eyes',
    characterDesign: 'anime proportions with slightly larger eyes, keeps real hairstyle, hair color, eye color and face shape',
    lighting: 'dramatic anime lighting with colored rim light and lens glow',
    background: 'atmospheric sky with soft clouds and light particles',
    negative: 'western cartoon, 3D render, photorealism, chibi unless requested, text, watermark',
    identityStrength: 0.7,
    gradient: ['#7f7cff', '#ff8bd1'],
  },
  {
    slug: 'cyberpunk',
    name: 'Cyberpunk',
    tagline: 'Neon-soaked future self',
    isPremium: true,
    sortOrder: 4,
    look: 'stylised 3D cyberpunk character art, neon reflections, holographic accents, techwear details, glossy materials',
    characterDesign: 'stylised semi-realistic proportions, subtle cybernetic accents that never cover the face, faithful facial structure',
    lighting: 'magenta and cyan neon lighting, wet reflections, volumetric haze',
    background: 'rainy neon city street at night, out of focus',
    negative: 'daylight, pastel, face covered by implants, text, watermark, logo',
    identityStrength: 0.8,
    gradient: ['#00e5ff', '#ff00c8'],
  },
  {
    slug: 'lego',
    name: 'Brick Figure',
    tagline: 'Plastic brick minifigure',
    isPremium: true,
    sortOrder: 5,
    look: 'glossy injection-moulded plastic toy minifigure, cylindrical head, printed facial features, studio macro product photography',
    characterDesign: 'printed face decal capturing the person: eyebrow shape, eye color, facial hair, glasses; hair as a moulded hair piece matching the real hairstyle and color',
    lighting: 'bright softbox product lighting with specular highlights on plastic',
    background: 'clean seamless studio background with a few toy bricks',
    negative: 'realistic skin, human proportions, brand logos, text, watermark',
    identityStrength: 0.55,
    gradient: ['#ffd400', '#e3000b'],
  },
  {
    slug: 'funko-pop',
    name: 'Vinyl Pop',
    tagline: 'Collectible vinyl figure',
    isPremium: true,
    sortOrder: 6,
    look: 'collectible vinyl bobblehead figure, oversized square-ish head, small body, matte vinyl material, tiny painted details',
    characterDesign: 'big head with simplified black eyes, keeps the exact hairstyle, hair color, skin tone, facial hair and accessories',
    lighting: 'soft product photography lighting',
    background: 'minimal shelf display background',
    negative: 'realistic eyes, human proportions, brand logo, box text, watermark',
    identityStrength: 0.5,
    gradient: ['#4dd0e1', '#7c4dff'],
  },
  {
    slug: 'fortnite',
    name: 'Battle Royale',
    tagline: 'Game-ready hero skin',
    isPremium: true,
    sortOrder: 7,
    look: 'stylised 3D battle-royale game character skin, chunky readable shapes, hand-painted textures, vibrant saturated colors',
    characterDesign: 'heroic slightly exaggerated proportions, confident pose, keeps face shape, hairstyle, skin tone and facial hair',
    lighting: 'bright game key-art lighting with strong rim light',
    background: 'colorful stylised game lobby background with light rays',
    negative: 'photorealism, dark gritty tone, weapons pointed at camera, logos, text, watermark',
    identityStrength: 0.75,
    gradient: ['#3b82f6', '#a855f7'],
  },
  {
    slug: 'arcane',
    name: 'Painterly Noir',
    tagline: 'Hand-painted cinematic',
    isPremium: true,
    sortOrder: 8,
    look: 'hand-painted 3D animation style, painterly brush-stroke textures on skin and clothes, graphic shapes, rich color grading',
    characterDesign: 'angular stylised features with strong silhouettes, faithful nose, jaw and brow structure, textured hair',
    lighting: 'moody cinematic lighting with teal-orange contrast and painted highlights',
    background: 'steampunk city alley with painted atmospheric depth',
    negative: 'cute chibi, flat vector, photorealism, text, watermark',
    identityStrength: 0.8,
    gradient: ['#1fb5a6', '#e2683c'],
  },
  {
    slug: 'gta-loading-screen',
    name: 'Loading Screen',
    tagline: 'Iconic open-world poster',
    isPremium: true,
    sortOrder: 9,
    look: 'open-world crime game loading screen illustration, semi-realistic digital painting, thick dark outlines, posterized cel shading',
    characterDesign: 'semi-realistic proportions with strong graphic shading, confident attitude, faithful facial features',
    lighting: 'hard sunset lighting with saturated warm tones',
    background: 'sunny palm-lined city with sunset sky in graphic poster style',
    negative: 'cute style, 3D render, logos, game title text, watermark',
    identityStrength: 0.85,
    gradient: ['#ff9a3c', '#ff3c7e'],
  },
  {
    slug: 'disney-inspired',
    name: 'Fairytale 3D',
    tagline: 'Classic storybook magic',
    isPremium: true,
    sortOrder: 10,
    look: 'modern fairytale 3D animated musical character, glossy expressive eyes, soft painterly textures, magical warm atmosphere',
    characterDesign: 'elegant stylised proportions, large sparkling eyes, keeps exact skin tone, hairstyle and face shape',
    lighting: 'warm magical golden-hour lighting with sparkles',
    background: 'storybook castle garden softly blurred',
    negative: 'horror, gritty, photorealism, text, watermark, logo',
    identityStrength: 0.75,
    gradient: ['#ffc8dd', '#8ec5ff'],
  },
  {
    slug: 'dreamworks-inspired',
    name: 'Comedy 3D',
    tagline: 'Big-screen comedy hero',
    isPremium: true,
    sortOrder: 11,
    look: 'comedic 3D animated feature character, playful exaggeration, signature raised-eyebrow smirk, rich textures',
    characterDesign: 'expressive caricature with exaggerated brows and smile, preserves recognisable face shape, nose and hairstyle',
    lighting: 'bright adventurous lighting with saturated colors',
    background: 'lush adventure landscape softly out of focus',
    negative: 'photorealism, dull colors, horror, text, watermark, logo',
    identityStrength: 0.75,
    gradient: ['#8bc34a', '#00bcd4'],
  },
] as const;

export const FREE_STYLE_SLUGS: readonly StyleSlug[] = STYLE_CATALOG.filter((s) => !s.isPremium).map(
  (s) => s.slug,
);

export function getStyleRecipe(slug: string): StyleRecipe | undefined {
  return STYLE_CATALOG.find((s) => s.slug === slug);
}

export function isStyleSlug(value: string): value is StyleSlug {
  return (STYLE_SLUGS as readonly string[]).includes(value);
}
