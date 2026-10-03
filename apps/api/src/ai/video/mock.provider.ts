import { randomUUID } from 'node:crypto';
import { writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { VIDEO_DIMENSIONS } from '../render/image-ops';
import { stillToVideo } from '../media/ffmpeg';
import type { VideoGenerationRequest, VideoJobStatus, VideoProvider } from './video-provider.types';

/** Renders a real MP4 locally with ffmpeg (push-in animation over the start frame). */
export class MockVideoProvider implements VideoProvider {
  readonly name = 'mock';
  readonly model = 'ffmpeg-zoompan';
  private readonly jobs = new Map<string, Promise<string>>();
  private readonly done = new Map<string, VideoJobStatus>();

  async start(req: VideoGenerationRequest): Promise<{ jobId: string }> {
    const jobId = randomUUID();
    const { width, height } = VIDEO_DIMENSIONS[req.aspectRatio];
    const task = stillToVideo(req.image, Math.min(req.durationSec, 5), width, height).then(async (video) => {
      const path = join(tmpdir(), `mock-video-${jobId}.mp4`);
      await writeFile(path, video);
      return path;
    });
    this.jobs.set(jobId, task);
    task
      .then((path) => this.done.set(jobId, { status: 'succeeded', videoUrl: `file://${path}` }))
      .catch((err: Error) => this.done.set(jobId, { status: 'failed', error: err.message }));
    return { jobId };
  }

  async poll(jobId: string): Promise<VideoJobStatus> {
    if (!this.jobs.has(jobId)) return { status: 'failed', error: 'unknown job (worker restarted?)' };
    return this.done.get(jobId) ?? { status: 'pending' };
  }

  estimateCostMicros(): number {
    return 0;
  }
}
