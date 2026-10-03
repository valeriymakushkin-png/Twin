import sharp from 'sharp';
import type { AppConfig } from '../../config/app-config';
import { ProviderError } from '../../common/errors';
import { sleep } from '../../common/utils/async';
import { downloadBuffer, fetchJson } from '../../common/utils/http';
import type { ImageGenerationRequest, ImageGenerationResult, ImageProvider } from './image-provider.types';

interface BflSubmitResponse {
  id: string;
  polling_url: string;
}

interface BflPollResponse {
  id: string;
  status: 'Task not found' | 'Pending' | 'Request Moderated' | 'Content Moderated' | 'Ready' | 'Error';
  result?: { sample?: string };
}

const ASPECT: Record<ImageGenerationRequest['size'], string> = {
  '1024x1024': '1:1',
  '1024x1536': '2:3',
  '1536x1024': '3:2',
};

/**
 * Black Forest Labs FLUX (Kontext Pro by default) — strong identity-preserving edits from a
 * single reference image. Output is opaque, so the pipeline mattes it afterwards.
 * Async API: submit → poll `polling_url` → download signed `result.sample` (valid ~10 min).
 */
export class FluxImageProvider implements ImageProvider {
  readonly name = 'flux';
  readonly supportsTransparency = false;

  constructor(private readonly config: AppConfig) {}

  private async generateOne(req: ImageGenerationRequest, seed: number): Promise<Buffer> {
    const headers = { 'x-key': this.config.BFL_API_KEY ?? '', 'Content-Type': 'application/json', accept: 'application/json' };
    const reference = req.references[0]
      ? (await sharp(req.references[0]).resize(1024, 1024, { fit: 'inside' }).flatten({ background: '#ffffff' }).jpeg({ quality: 92 }).toBuffer()).toString('base64')
      : undefined;
    const submit = await fetchJson<BflSubmitResponse>(`${this.config.BFL_BASE_URL}/${this.config.FLUX_MODEL}`, {
      provider: this.name,
      method: 'POST',
      timeoutMs: 30_000,
      headers,
      body: JSON.stringify({
        prompt: req.prompt.slice(0, 4000),
        ...(reference ? { input_image: reference } : {}),
        seed,
        aspect_ratio: ASPECT[req.size],
        output_format: 'png',
        safety_tolerance: 2,
        prompt_upsampling: false,
      }),
    });

    const deadline = Date.now() + 180_000;
    let delay = 1500;
    while (Date.now() < deadline) {
      await sleep(delay);
      delay = Math.min(4000, Math.round(delay * 1.3));
      const poll = await fetchJson<BflPollResponse>(submit.polling_url, { provider: this.name, timeoutMs: 20_000, headers });
      if (poll.status === 'Ready' && poll.result?.sample) return downloadBuffer(poll.result.sample, this.name);
      if (poll.status === 'Request Moderated' || poll.status === 'Content Moderated') {
        throw new ProviderError(this.name, `content policy: ${poll.status}`, 400, false);
      }
      if (poll.status === 'Error' || poll.status === 'Task not found') {
        throw new ProviderError(this.name, `task ${submit.id} failed: ${poll.status}`, 500, true);
      }
    }
    throw new ProviderError(this.name, `task ${submit.id} timed out`, 504, true);
  }

  async generate(req: ImageGenerationRequest): Promise<ImageGenerationResult> {
    const baseSeed = req.seed ?? Math.floor(Math.random() * 2 ** 31);
    const images = await Promise.all(Array.from({ length: req.n }, (_, i) => this.generateOne(req, baseSeed + i * 7919)));
    // Kontext Pro list price ≈ $0.04 / image.
    return { images, provider: this.name, model: this.config.FLUX_MODEL, costMicros: 40_000 * images.length, transparent: false };
  }
}
