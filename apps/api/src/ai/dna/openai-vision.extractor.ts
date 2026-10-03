import sharp from 'sharp';
import {
  AGE_GROUPS,
  EYE_COLORS,
  EYE_SHAPES,
  EYEBROWS,
  FACE_SHAPES,
  FACIAL_HAIR,
  GLASSES,
  HAIR_COLORS,
  HAIR_STYLES,
  MOUTH_SHAPES,
  NOSE_SHAPES,
  PRESENTATIONS,
  SKIN_TONES,
} from '@mascot/shared';
import type { AppConfig } from '../../config/app-config';
import { ProviderError } from '../../common/errors';
import { fetchJson } from '../../common/utils/http';
import type { VisionAttributes, VisionExtractor } from './vision.types';

const CONFIDENCE_KEYS = [
  'hairStyle', 'hairColor', 'eyeColor', 'eyebrows', 'facialHair', 'glasses', 'presentation',
  'faceShape', 'eyeShape', 'noseShape', 'mouthShape', 'skinTone', 'ageGroup',
] as const;

const enumField = (values: readonly string[]) => ({ type: 'string', enum: [...values] });

/** Strict JSON schema (OpenAI Structured Outputs) mirroring the DNA vocabulary. */
const SCHEMA = {
  type: 'object',
  additionalProperties: false,
  required: [
    'hairStyle', 'hairColor', 'eyeColor', 'eyebrows', 'facialHair', 'glasses', 'presentation', 'freckles', 'dimples',
    'distinguishingFeatures', 'faceShape', 'eyeShape', 'noseShape', 'mouthShape', 'skinTone', 'ageGroup', 'confidence',
  ],
  properties: {
    hairStyle: enumField(HAIR_STYLES),
    hairColor: enumField(HAIR_COLORS),
    eyeColor: enumField(EYE_COLORS),
    eyebrows: enumField(EYEBROWS),
    facialHair: enumField(FACIAL_HAIR),
    glasses: enumField(GLASSES),
    presentation: enumField(PRESENTATIONS),
    freckles: { type: 'boolean' },
    dimples: { type: 'boolean' },
    distinguishingFeatures: { type: 'array', items: { type: 'string' }, maxItems: 3 },
    faceShape: enumField(FACE_SHAPES),
    eyeShape: enumField(EYE_SHAPES),
    noseShape: enumField(NOSE_SHAPES),
    mouthShape: enumField(MOUTH_SHAPES),
    skinTone: enumField(SKIN_TONES),
    ageGroup: enumField(AGE_GROUPS),
    confidence: {
      type: 'object',
      additionalProperties: false,
      required: [...CONFIDENCE_KEYS],
      properties: Object.fromEntries(CONFIDENCE_KEYS.map((k) => [k, { type: 'number' }])),
    },
  },
} as const;

const SYSTEM_PROMPT = `You are a character-design assistant. Several photos of the SAME person are provided.
Describe only their visible, stable appearance so an illustrator can draw a recognisable stylised mascot.
Rules:
- Use exactly the allowed enum values. Choose the closest option.
- Hair: describe how it is usually worn across the photos (ignore hats).
- Glasses: only if worn in most photos.
- skinTone uses the Monk Skin Tone scale mst-1 (lightest) .. mst-10 (deepest); judge under neutral lighting.
- distinguishingFeatures: up to 3 short visual notes that aid recognition (e.g. "small mole above left lip", "gap between front teeth"). No names, no guesses about identity, ethnicity, health or personality.
- confidence: 0..1 per trait.`;

interface ChatCompletionResponse {
  choices: Array<{ message: { content: string | null; refusal?: string | null } }>;
  usage?: { prompt_tokens: number; completion_tokens: number };
}

export class OpenAiVisionExtractor implements VisionExtractor {
  readonly name = 'openai-vision';

  constructor(private readonly config: AppConfig) {}

  async extract(images: Buffer[]): Promise<{ attributes: VisionAttributes; costMicros: number }> {
    const content: Array<Record<string, unknown>> = [{ type: 'text', text: 'Analyse these photos of one person.' }];
    for (const image of images.slice(0, 4)) {
      const jpeg = await sharp(image).resize(768, 768, { fit: 'inside' }).jpeg({ quality: 85 }).toBuffer();
      content.push({ type: 'image_url', image_url: { url: `data:image/jpeg;base64,${jpeg.toString('base64')}`, detail: 'high' } });
    }
    const res = await fetchJson<ChatCompletionResponse>(`${this.config.OPENAI_BASE_URL}/chat/completions`, {
      provider: this.name,
      method: 'POST',
      timeoutMs: 60_000,
      headers: { Authorization: `Bearer ${this.config.OPENAI_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: this.config.OPENAI_VISION_MODEL,
        temperature: 0.1,
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          { role: 'user', content },
        ],
        response_format: { type: 'json_schema', json_schema: { name: 'mascot_attributes', strict: true, schema: SCHEMA } },
      }),
    });
    const message = res.choices[0]?.message;
    if (!message?.content) {
      throw new ProviderError(this.name, `vision refusal: ${message?.refusal ?? 'empty response'}`, 200, false);
    }
    const attributes = JSON.parse(message.content) as VisionAttributes;
    // gpt-4.1-mini list price ≈ $0.40 / 1M input, $1.60 / 1M output tokens.
    const usage = res.usage ?? { prompt_tokens: 3000, completion_tokens: 300 };
    const costMicros = Math.round(usage.prompt_tokens * 0.4 + usage.completion_tokens * 1.6);
    return { attributes, costMicros };
  }
}
