import type { VideoAspectRatio } from '@mascot/shared';

export interface VideoGenerationRequest {
  /** Start frame (PNG), already composed at the target aspect ratio. */
  image: Buffer;
  prompt: string;
  negative?: string;
  durationSec: 5 | 10;
  aspectRatio: VideoAspectRatio;
}

export interface VideoJobStatus {
  status: 'pending' | 'succeeded' | 'failed';
  /** https URL to download, or file:// for the local mock. */
  videoUrl?: string;
  error?: string;
  /** true when the failure was a content-policy rejection (do not retry). */
  policy?: boolean;
}

export interface VideoProvider {
  readonly name: string;
  readonly model: string;
  start(req: VideoGenerationRequest): Promise<{ jobId: string }>;
  poll(jobId: string): Promise<VideoJobStatus>;
  estimateCostMicros(req: Pick<VideoGenerationRequest, 'durationSec'>): number;
}

export const VIDEO_PROVIDER = Symbol('VIDEO_PROVIDER');
