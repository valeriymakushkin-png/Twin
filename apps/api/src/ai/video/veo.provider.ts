import sharp from 'sharp';
import type { AppConfig } from '../../config/app-config';
import { fetchJson } from '../../common/utils/http';
import type { VideoGenerationRequest, VideoJobStatus, VideoProvider } from './video-provider.types';

interface VeoOperation {
  name: string;
  done?: boolean;
  error?: { code: number; message: string };
  response?: {
    generateVideoResponse?: {
      generatedSamples?: Array<{ video?: { uri?: string } }>;
      raiMediaFilteredReasons?: string[];
    };
  };
}

/** Google Veo via the Gemini API long-running predict endpoint. */
export class VeoVideoProvider implements VideoProvider {
  readonly name = 'veo';

  constructor(private readonly config: AppConfig) {}

  get model(): string {
    return this.config.VEO_MODEL;
  }

  private headers() {
    return { 'x-goog-api-key': this.config.GEMINI_API_KEY ?? '', 'Content-Type': 'application/json' };
  }

  async start(req: VideoGenerationRequest): Promise<{ jobId: string }> {
    const png = await sharp(req.image).png().toBuffer();
    const op = await fetchJson<VeoOperation>(`${this.config.GEMINI_BASE_URL}/models/${this.config.VEO_MODEL}:predictLongRunning`, {
      provider: this.name,
      method: 'POST',
      timeoutMs: 60_000,
      headers: this.headers(),
      body: JSON.stringify({
        instances: [{ prompt: req.prompt, image: { bytesBase64Encoded: png.toString('base64'), mimeType: 'image/png' } }],
        parameters: {
          aspectRatio: req.aspectRatio === '1:1' ? '9:16' : req.aspectRatio,
          negativePrompt: req.negative,
          personGeneration: 'allow_adult',
        },
      }),
    });
    return { jobId: op.name };
  }

  async poll(jobId: string): Promise<VideoJobStatus> {
    const op = await fetchJson<VeoOperation>(`${this.config.GEMINI_BASE_URL}/${jobId}`, {
      provider: this.name,
      timeoutMs: 30_000,
      headers: this.headers(),
    });
    if (!op.done) return { status: 'pending' };
    if (op.error) return { status: 'failed', error: op.error.message };
    const res = op.response?.generateVideoResponse;
    const uri = res?.generatedSamples?.[0]?.video?.uri;
    if (!uri) return { status: 'failed', error: res?.raiMediaFilteredReasons?.join('; ') ?? 'no video returned', policy: true };
    // Gemini file URIs require the API key on download.
    const url = new URL(uri);
    url.searchParams.set('key', this.config.GEMINI_API_KEY ?? '');
    return { status: 'succeeded', videoUrl: url.toString() };
  }

  estimateCostMicros(req: Pick<VideoGenerationRequest, 'durationSec'>): number {
    return Math.min(req.durationSec, 8) * 150_000;
  }
}
