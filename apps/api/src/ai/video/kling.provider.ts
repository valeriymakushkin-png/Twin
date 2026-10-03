import sharp from 'sharp';
import type { AppConfig } from '../../config/app-config';
import { ProviderError } from '../../common/errors';
import { signHs256Jwt } from '../../common/utils/crypto';
import { fetchJson } from '../../common/utils/http';
import type { VideoGenerationRequest, VideoJobStatus, VideoProvider } from './video-provider.types';

interface KlingResponse<T> {
  code: number;
  message: string;
  request_id?: string;
  data: T;
}

/**
 * Kling AI image-to-video. Auth = short-lived HS256 JWT signed with the access/secret key pair.
 * POST /v1/videos/image2video → task_id; GET /v1/videos/image2video/{task_id} for status.
 */
export class KlingVideoProvider implements VideoProvider {
  readonly name = 'kling';

  constructor(private readonly config: AppConfig) {}

  get model(): string {
    return this.config.KLING_MODEL;
  }

  private token(): string {
    const now = Math.floor(Date.now() / 1000);
    return signHs256Jwt({ iss: this.config.KLING_ACCESS_KEY, exp: now + 1800, nbf: now - 5 }, this.config.KLING_SECRET_KEY ?? '');
  }

  private headers() {
    return { Authorization: `Bearer ${this.token()}`, 'Content-Type': 'application/json' };
  }

  async start(req: VideoGenerationRequest): Promise<{ jobId: string }> {
    const image = (await sharp(req.image).jpeg({ quality: 92 }).toBuffer()).toString('base64');
    const res = await fetchJson<KlingResponse<{ task_id: string }>>(`${this.config.KLING_BASE_URL}/v1/videos/image2video`, {
      provider: this.name,
      method: 'POST',
      timeoutMs: 60_000,
      headers: this.headers(),
      body: JSON.stringify({
        model_name: this.config.KLING_MODEL,
        image,
        prompt: req.prompt.slice(0, 2500),
        negative_prompt: req.negative?.slice(0, 2500),
        duration: String(req.durationSec),
        mode: 'std',
        cfg_scale: 0.5,
      }),
    });
    if (res.code !== 0) throw new ProviderError(this.name, `${res.code} ${res.message}`, 400, res.code >= 1200 && res.code < 1300 ? false : true);
    return { jobId: res.data.task_id };
  }

  async poll(jobId: string): Promise<VideoJobStatus> {
    const res = await fetchJson<
      KlingResponse<{ task_status: 'submitted' | 'processing' | 'succeed' | 'failed'; task_status_msg?: string; task_result?: { videos?: Array<{ url: string }> } }>
    >(`${this.config.KLING_BASE_URL}/v1/videos/image2video/${encodeURIComponent(jobId)}`, {
      provider: this.name,
      timeoutMs: 30_000,
      headers: this.headers(),
    });
    const d = res.data;
    if (d.task_status === 'succeed') return { status: 'succeeded', videoUrl: d.task_result?.videos?.[0]?.url };
    if (d.task_status === 'failed') {
      const msg = d.task_status_msg ?? 'failed';
      return { status: 'failed', error: msg, policy: /risk|sensitive|policy/i.test(msg) };
    }
    return { status: 'pending' };
  }

  estimateCostMicros(req: Pick<VideoGenerationRequest, 'durationSec'>): number {
    return req.durationSec === 10 ? 560_000 : 280_000;
  }
}
