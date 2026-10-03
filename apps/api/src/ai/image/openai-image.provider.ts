import sharp from 'sharp';
import type { AppConfig } from '../../config/app-config';
import { ProviderError } from '../../common/errors';
import { fetchWithTimeout, isRetryableStatus } from '../../common/utils/http';
import type { ImageGenerationRequest, ImageGenerationResult, ImageProvider } from './image-provider.types';

interface OpenAiImageResponse {
  data?: Array<{ b64_json?: string }>;
  usage?: { input_tokens?: number; output_tokens?: number };
  error?: { message: string; code?: string; type?: string };
}

/** Approximate list prices (USD) per output image for gpt-image-1, used for cost telemetry. */
const PRICE_PER_IMAGE: Record<string, Record<string, number>> = {
  low: { '1024x1024': 0.011, '1024x1536': 0.016, '1536x1024': 0.016 },
  medium: { '1024x1024': 0.042, '1024x1536': 0.063, '1536x1024': 0.063 },
  high: { '1024x1024': 0.167, '1024x1536': 0.25, '1536x1024': 0.25 },
  auto: { '1024x1024': 0.167, '1024x1536': 0.25, '1536x1024': 0.25 },
};

/**
 * OpenAI Images API.
 *  - With references → POST /images/edits (multipart, up to 16 reference images, input_fidelity=high)
 *  - Without        → POST /images/generations
 * Native transparent PNG output (background=transparent) avoids a matting step.
 */
export class OpenAiImageProvider implements ImageProvider {
  readonly name = 'openai';
  readonly supportsTransparency = true;

  constructor(private readonly config: AppConfig) {}

  async generate(req: ImageGenerationRequest): Promise<ImageGenerationResult> {
    const quality = req.quality ?? this.config.OPENAI_IMAGE_QUALITY;
    const prompt = req.prompt.slice(0, 31_000);
    let res: Response;
    if (req.references.length) {
      const form = new FormData();
      form.append('model', this.config.OPENAI_IMAGE_MODEL);
      form.append('prompt', prompt);
      form.append('n', String(req.n));
      form.append('size', req.size);
      form.append('quality', quality);
      form.append('background', req.transparent ? 'transparent' : 'auto');
      form.append('output_format', 'png');
      if (this.config.OPENAI_IMAGE_INPUT_FIDELITY !== 'none') form.append('input_fidelity', this.config.OPENAI_IMAGE_INPUT_FIDELITY);
      for (const [i, ref] of req.references.slice(0, 16).entries()) {
        const png = await sharp(ref).resize(1024, 1024, { fit: 'inside' }).png().toBuffer();
        form.append('image[]', new Blob([new Uint8Array(png)], { type: 'image/png' }), `ref-${i}.png`);
      }
      res = await fetchWithTimeout(`${this.config.OPENAI_BASE_URL}/images/edits`, {
        provider: this.name,
        method: 'POST',
        timeoutMs: 240_000,
        headers: { Authorization: `Bearer ${this.config.OPENAI_API_KEY}` },
        body: form,
      });
    } else {
      res = await fetchWithTimeout(`${this.config.OPENAI_BASE_URL}/images/generations`, {
        provider: this.name,
        method: 'POST',
        timeoutMs: 240_000,
        headers: { Authorization: `Bearer ${this.config.OPENAI_API_KEY}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: this.config.OPENAI_IMAGE_MODEL,
          prompt,
          n: req.n,
          size: req.size,
          quality,
          background: req.transparent ? 'transparent' : 'auto',
          output_format: 'png',
          moderation: 'auto',
        }),
      });
    }

    const body = (await res.json().catch(() => ({}))) as OpenAiImageResponse;
    if (!res.ok || !body.data?.length) {
      const message = body.error?.message ?? `HTTP ${res.status}`;
      const policy = body.error?.code === 'moderation_blocked' || /safety|policy/i.test(message);
      if (policy) throw new ProviderError(this.name, `content policy: ${message}`, res.status, false);
      throw new ProviderError(this.name, message, res.status, isRetryableStatus(res.status));
    }
    const images = body.data.map((d) => Buffer.from(d.b64_json ?? '', 'base64')).filter((b) => b.length > 0);
    const costMicros = Math.round((PRICE_PER_IMAGE[quality]?.[req.size] ?? 0.167) * images.length * 1_000_000);
    return { images, provider: this.name, model: this.config.OPENAI_IMAGE_MODEL, costMicros, transparent: req.transparent };
  }
}
