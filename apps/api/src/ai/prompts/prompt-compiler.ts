import {
  EMOTION_CATALOG,
  VIDEO_TEMPLATE_CATALOG,
  type MascotDna,
  type PfpBackground,
  type StickerEmotion,
  type StyleRecipe,
  type VideoTemplate,
  type WardrobeItem,
} from '@mascot/shared';

/**
 * Prompt compiler — turns (DNA + style recipe + scene) into provider prompts.
 *
 * Structure is deliberately sectioned (IDENTITY / STYLE / SCENE / CONSTRAINTS): image models
 * weigh early, explicit identity constraints heavily, and a stable layout makes prompt
 * regressions diffable (every compiled prompt is stored on the generation row).
 */

export const PROMPT_VERSION = 'p-2026.10.1';

export interface PromptContext {
  dna: MascotDna;
  /** describeDna(dna), cached on avatar_dna.prompt_fragment */
  identity: string;
  style: StyleRecipe;
  outfit?: WardrobeItem;
  pose?: WardrobeItem;
  accessory?: WardrobeItem;
  /** true when the provider cannot output alpha: ask for a plain keyable background instead. */
  opaqueOutput?: boolean;
}

export interface CompiledPrompt {
  prompt: string;
  negative: string;
}

function backgroundClause(ctx: PromptContext, transparent: boolean, fallback: string): string {
  if (!transparent) return fallback;
  return ctx.opaqueOutput
    ? 'isolated on a perfectly plain flat pure-white background, no shadows on the background'
    : 'isolated on a fully transparent background';
}

function identityBlock(ctx: PromptContext, referenceKind: 'photos' | 'character'): string {
  const source =
    referenceKind === 'photos'
      ? 'the person in the reference photos'
      : 'the exact same character shown in the reference image';
  return [
    `IDENTITY — this is ${source}; the result must be instantly recognisable as them.`,
    `Traits to preserve: ${ctx.identity}.`,
    'Keep the same face shape, hairline and hairstyle silhouette, skin tone, eye shape and colour, eyebrow shape, nose shape, lip shape and facial proportions.',
    ctx.dna.glasses !== 'none' ? 'Keep their glasses.' : '',
    ctx.dna.facialHair !== 'none' ? 'Keep their facial hair.' : '',
  ]
    .filter(Boolean)
    .join(' ');
}

function styleBlock(style: StyleRecipe): string {
  return `STYLE — ${style.look}. Character design: ${style.characterDesign}. Lighting: ${style.lighting}.`;
}

function constraints(style: StyleRecipe, extra = ''): string {
  return `CONSTRAINTS — single character only, no text, no letters, no watermark, no logos or brand marks, no frame. ${extra} Avoid: ${style.negative}.`;
}

/** Hero render used for the mascot result screen and every downstream asset. */
export function compileAvatarPrompt(ctx: PromptContext): CompiledPrompt {
  const pose = ctx.pose?.prompt ?? 'head-and-shoulders portrait, facing the camera, warm confident smile';
  const outfit = ctx.outfit?.prompt ?? 'wearing a simple modern casual outfit';
  return {
    prompt: [
      `Create a stylised character portrait (a personal mascot) of the person in the reference photos.`,
      identityBlock(ctx, 'photos'),
      styleBlock(ctx.style),
      `SCENE — ${pose}, ${outfit}. Centered composition with the whole head and hair inside the frame, ${backgroundClause(ctx, true, ctx.style.background)}.`,
      constraints(ctx.style, 'Not a photograph; a polished stylised character.'),
    ].join('\n'),
    negative: ctx.style.negative,
  };
}

/** Re-render an existing mascot in another style / outfit / pose, anchored on the master render + photos. */
export function compileStyleVariantPrompt(ctx: PromptContext): CompiledPrompt {
  const pose = ctx.pose?.prompt ?? 'head-and-shoulders portrait, facing the camera, friendly expression';
  const outfit = [ctx.outfit?.prompt ?? 'wearing a simple modern casual outfit', ctx.accessory?.prompt].filter(Boolean).join(', ');
  return {
    prompt: [
      'Redraw the character from the first reference image in a new art style. Additional reference photos show the real person for likeness.',
      identityBlock(ctx, 'character'),
      styleBlock(ctx.style),
      `SCENE — ${pose}, ${outfit}, ${backgroundClause(ctx, true, ctx.style.background)}.`,
      constraints(ctx.style),
    ].join('\n'),
    negative: ctx.style.negative,
  };
}

export function compileStickerPrompt(ctx: PromptContext, emotion: StickerEmotion): CompiledPrompt {
  const e = EMOTION_CATALOG[emotion];
  return {
    prompt: [
      'Create a chat sticker of the character in the reference image.',
      identityBlock(ctx, 'character'),
      styleBlock(ctx.style),
      `EMOTION — ${e.label}: ${e.expression}; pose: ${e.pose}${e.accent ? `; small graphic accent: ${e.accent}` : ''}.`,
      `COMPOSITION — upper body, exaggerated readable expression that works at small size, bold clean silhouette, ${backgroundClause(ctx, true, '')}.`,
      constraints(ctx.style, 'Sticker art.'),
    ].join('\n'),
    negative: ctx.style.negative,
  };
}

export function compileMemeReactionPrompt(ctx: PromptContext, emotion: StickerEmotion, situation?: string): CompiledPrompt {
  const e = EMOTION_CATALOG[emotion];
  const context = situation ? ` The reaction fits this situation: "${situation.slice(0, 160)}".` : '';
  return {
    prompt: [
      'Create a meme reaction image of the character in the reference image.',
      identityBlock(ctx, 'character'),
      styleBlock(ctx.style),
      `REACTION — ${e.expression}; ${e.pose}.${context} Highly expressive, comedic timing, upper body, ${backgroundClause(ctx, true, '')}.`,
      constraints(ctx.style),
    ].join('\n'),
    negative: ctx.style.negative,
  };
}

export function compilePfpScenePrompt(ctx: PromptContext, background: PfpBackground): CompiledPrompt {
  return {
    prompt: [
      'Create a square social media profile picture of the character in the reference image.',
      identityBlock(ctx, 'character'),
      styleBlock(ctx.style),
      `SCENE — ${ctx.pose?.prompt ?? 'head-and-shoulders, facing camera, confident smile'}, ${ctx.outfit?.prompt ?? 'stylish casual outfit'}, background: ${background.scene ?? 'soft gradient'}. Face centred in the middle third so it survives a circular crop.`,
      constraints(ctx.style),
    ].join('\n'),
    negative: ctx.style.negative,
  };
}

export function compileVideoPrompt(ctx: Pick<PromptContext, 'identity' | 'style'>, template: VideoTemplate, userPrompt?: string): CompiledPrompt {
  const t = VIDEO_TEMPLATE_CATALOG[template];
  return {
    prompt: [
      `Animate the stylised ${ctx.style.name.toLowerCase()} character from the start frame.`,
      `MOTION — ${t.motion}.`,
      `SCENE — ${t.scene}.`,
      userPrompt ? `DIRECTION — ${userPrompt.slice(0, 280)}.` : '',
      'Keep the character design, face, hairstyle and colours perfectly consistent with the start frame for the whole clip. Smooth natural motion, no morphing, no extra people, no text.',
    ]
      .filter(Boolean)
      .join(' '),
    negative: 'face morphing, identity drift, extra limbs, distorted hands, flicker, text, watermark, extra characters',
  };
}
