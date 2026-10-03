import sharp from 'sharp';
import type { VideoAspectRatio } from '@mascot/shared';
import type { AppConfig } from '../../config/app-config';
import { fetchJson } from '../../common/utils/http';
import type { VideoGenerationRequest, VideoJobStatus, VideoProvider } from './video-provider.types';

const RATIO: Record<VideoAspectRatio, string> = { '9:16': '720:1280', '16:9': '1280:720', '1:1': '960:960' };

/** Runway Gen-4 Turbo image-to-video (POST /image_to_video, GET /tasks/{id}). */
export class RunwayVideoProvider implements VideoProvider {
  readonly name = 'runway';

  constructor(private readonly config: AppConfig) {}

  get model(): string {
    return this.config.RUNWAY_MODEL;
  }

  private headers() {
    return {
      Authorization: `Bearer ${this.config.RUNWAY_API_KEY}`,
      'X-Runway-Version': this.config.RUNWAY_API_VERSION,
      'Content-Type': 'application/json',
    };
  }

  async start(req: VideoGenerationRequest): Promise<{ jobId: string }> {
    const jpeg = await sharp(req.image).jpeg({ quality: 90 }).toBuffer();
    const res = await fetchJson<{ id: string }>(`${this.config.RUNWAY_BASE_URL}/image_to_video`, {
      provider: this.name,
      method: 'POST',
      timeoutMs: 60_000,
      headers: this.headers(),
      body: JSON.stringify({
        model: this.config.RUNWAY_MODEL,
        promptImage: `data:image/jpeg;base64,${jpeg.toString('base64')}`,
        promptText: req.prompt.slice(0, 1000),
        ratio: RATIO[req.aspectRatio],
        duration: req.durationSec,
      }),
    });
    return { jobId: res.id };
  }

  async poll(jobId: string): Promise<VideoJobStatus> {
    const res = await fetchJson<{ status: string; output?: string[]; failure?: string; failureCode?: string }>(
      `${this.config.RUNWAY_BASE_URL}/tasks/${encodeURIComponent(jobId)}`,
      { provider: this.name, timeoutMs: 30_000, headers: this.headers() },
    );
    if (res.status === 'SUCCEEDED') return { status: 'succeeded', videoUrl: res.output?.[0] };
    if (res.status === 'FAILED' || res.status === 'CANCELLED') {
      return { status: 'failed', error: res.failure ?? res.status, policy: /SAFETY/i.test(res.failureCode ?? '') };
    }
    return { status: 'pending' };
  }

  estimateCostMicros(req: Pick<VideoGenerationRequest, 'durationSec'>): number {
    // gen4_turbo: 5 credits/s at $0.01/credit.
    return req.durationSec * 50_000;
  }
}
