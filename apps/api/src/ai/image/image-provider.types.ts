import type { MascotDna, StickerEmotion, StyleRecipe } from '@mascot/shared';

export type ImageOperation = 'avatar' | 'style' | 'sticker' | 'meme' | 'pfp' | 'keyframe';

export interface ImageGenerationRequest {
  operation: ImageOperation;
  prompt: string;
  negative?: string;
  /** Identity references (photos and/or the master render). PNG or JPEG. First = most important. */
  references: Buffer[];
  size: '1024x1024' | '1024x1536' | '1536x1024';
  /** Request alpha output when the provider supports it. */
  transparent: boolean;
  n: number;
  seed?: number;
  quality?: 'low' | 'medium' | 'high';
  /** Rendering hints for the procedural mock provider (ignored by real providers). */
  mock?: { dna: MascotDna; emotion?: StickerEmotion | 'neutral'; style?: StyleRecipe; background?: [string, string] };
}

export interface ImageGenerationResult {
  images: Buffer[];
  provider: string;
  model: string;
  costMicros: number;
  /** Whether returned images carry a transparent background. */
  transparent: boolean;
}

export interface ImageProvider {
  readonly name: string;
  readonly supportsTransparency: boolean;
  generate(req: ImageGenerationRequest): Promise<ImageGenerationResult>;
}

export const IMAGE_PROVIDER = Symbol('IMAGE_PROVIDER');
