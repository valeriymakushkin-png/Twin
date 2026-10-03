import { readFile, rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { Inject, Logger } from '@nestjs/common';
import { Processor } from '@nestjs/bullmq';
import type { Job } from 'bullmq';
import type { Generation } from '@prisma/client';
import { VIDEO_TEMPLATE_CATALOG, type TtsVoice, type VideoAspectRatio, type VideoTemplate } from '@mascot/shared';
import { AppConfig } from '../config/app-config';
import { loadEnv } from '../config/env';
import { PipelineError, ProviderError } from '../common/errors';
import { sleep } from '../common/utils/async';
import { downloadBuffer } from '../common/utils/http';
import { PrismaService } from '../infra/prisma/prisma.service';
import { QUEUES, type GenerationJobData } from '../infra/queue/queue.constants';
import { QueueService } from '../infra/queue/queue.service';
import { StorageKeys, StorageService } from '../infra/storage/storage.service';
import { MascotEngine } from '../ai/mascot-engine.service';
import { extractThumbnail, muxVoiceOver, normalizeVideo, probeDuration } from '../ai/media/ffmpeg';
import { ProviderRateLimiter } from '../ai/provider-rate-limiter';
import { compileVideoPrompt } from '../ai/prompts/prompt-compiler';
import { videoStartFrame } from '../ai/render/image-ops';
import { TTS_PROVIDER, type TtsProvider } from '../ai/tts/tts.service';
import { VIDEO_PROVIDER, type VideoProvider } from '../ai/video/video-provider.types';
import { GenerationsService } from '../modules/generations/generations.service';
import { GenerationProcessor } from './shared/generation.processor';

const MAX_WAIT_MS = 12 * 60_000;
const EXPECTED_MS = 150_000;

/**
 * Video pipeline: start frame (Sharp) → image-to-video provider (async task, polled) →
 * optional TTS voice-over muxed with ffmpeg → thumbnail → CDN.
 * The provider job id is persisted, so a retried job resumes polling instead of paying twice.
 */
@Processor(QUEUES.VIDEO, { concurrency: loadEnv().WORKER_CONCURRENCY_VIDEO, lockDuration: 300_000 })
export class VideoProcessor extends GenerationProcessor {
  protected readonly logger = new Logger(VideoProcessor.name);

  constructor(
    generations: GenerationsService,
    private readonly prisma: PrismaService,
    private readonly storage: StorageService,
    private readonly engine: MascotEngine,
    private readonly queues: QueueService,
    private readonly limiter: ProviderRateLimiter,
    private readonly config: AppConfig,
    @Inject(VIDEO_PROVIDER) private readonly provider: VideoProvider,
    @Inject(TTS_PROVIDER) private readonly tts: TtsProvider,
  ) {
    super(generations);
  }

  protected async run(generation: Generation, job: Job<GenerationJobData>): Promise<void> {
    const { videoId } = generation.input as { videoId: string };
    let video = await this.prisma.video.findUniqueOrThrow({ where: { id: videoId } });
    const template = VIDEO_TEMPLATE_CATALOG[video.template as VideoTemplate];
    const ctx = await this.engine.loadAvatarContext(video.avatarId);
    if (!ctx.primaryMasterKey) throw new PipelineError('NO_RENDER', 'avatar has no primary render');

    let jobId = video.provider === this.provider.name ? video.providerJobId : null;
    if (!jobId) {
      await this.generations.progress(generation.id, 'PREPARING', 5);
      const master = await this.storage.get('private', ctx.primaryMasterKey);
      const frame = await videoStartFrame(master, video.aspectRatio as VideoAspectRatio, ctx.style.recipe.gradient);
      const compiled = compileVideoPrompt({ identity: ctx.identity, style: ctx.style.recipe }, template.key, video.prompt ?? undefined);
      if (this.provider.name !== 'mock') await this.limiter.acquire(`video:${this.provider.name}`, this.config.VIDEO_PROVIDER_RPM);
      ({ jobId } = await this.provider.start({
        image: frame,
        prompt: compiled.prompt,
        negative: compiled.negative,
        durationSec: template.durationSec,
        aspectRatio: video.aspectRatio as VideoAspectRatio,
      }));
      video = await this.prisma.video.update({ where: { id: video.id }, data: { provider: this.provider.name, providerJobId: jobId, status: 'PROCESSING' } });
      await this.prisma.generation.update({ where: { id: generation.id }, data: { provider: this.provider.name, model: this.provider.model, prompt: compiled.prompt } });
      await this.generations.addCost(generation.id, this.provider.estimateCostMicros({ durationSec: template.durationSec }));
    }

    const started = Date.now();
    let delay = this.provider.name === 'mock' ? 500 : 5_000;
    let videoUrl: string | undefined;
    while (Date.now() - started < MAX_WAIT_MS) {
      const status = await this.provider.poll(jobId);
      if (status.status === 'succeeded') {
        videoUrl = status.videoUrl;
        break;
      }
      if (status.status === 'failed') {
        throw status.policy
          ? new PipelineError('VIDEO_POLICY', status.error ?? 'policy', false, 'The video provider declined this request. Try another prompt.')
          : new ProviderError(this.provider.name, status.error ?? 'video generation failed');
      }
      const pct = 10 + Math.min(70, ((Date.now() - started) / EXPECTED_MS) * 70);
      await this.generations.progress(generation.id, 'GENERATING', pct);
      await job.updateProgress(Math.round(pct));
      await sleep(delay);
      delay = Math.min(15_000, Math.round(delay * 1.2));
    }
    if (!videoUrl) throw new ProviderError(this.provider.name, `video ${jobId} timed out after ${MAX_WAIT_MS / 60000} min`);

    await this.generations.progress(generation.id, 'POST_PROCESSING', 82);
    let clip: Buffer;
    if (videoUrl.startsWith('file://')) {
      const path = fileURLToPath(videoUrl);
      clip = await readFile(path);
      await rm(path, { force: true });
    } else {
      clip = await normalizeVideo(await downloadBuffer(videoUrl, this.provider.name, 180_000));
    }

    if (video.script) {
      const speech = await this.tts.synthesize(video.script, (video.voice as TtsVoice | null) ?? 'nova');
      await this.generations.addCost(generation.id, speech.costMicros);
      clip = await muxVoiceOver(clip, speech.audio);
    }
    await this.generations.progress(generation.id, 'POST_PROCESSING', 92);

    const [thumb, duration] = await Promise.all([extractThumbnail(clip), probeDuration(clip)]);
    const videoKey = StorageKeys.video(video.id);
    const thumbnailKey = StorageKeys.videoThumb(video.id);
    await Promise.all([this.storage.putPublic(videoKey, clip, 'video/mp4'), this.storage.putPublic(thumbnailKey, thumb, 'image/jpeg')]);
    await this.prisma.video.update({ where: { id: video.id }, data: { status: 'READY', videoKey, thumbnailKey, durationSec: duration } });
    await this.generations.succeed(generation.id, { resultId: video.id, outputKeys: [videoKey, thumbnailKey] });
    await this.queues.notify({
      userId: generation.userId,
      message: { key: 'videoReady', params: { template: template.key } },
      path: `/mascot/${video.avatarId}/videos`,
      button: 'watch',
      photoUrl: this.storage.publicUrl(thumbnailKey) ?? undefined,
    });
  }

  protected override async onFinalFailure(generation: Generation): Promise<void> {
    const { videoId } = generation.input as { videoId: string };
    await this.prisma.video.update({ where: { id: videoId }, data: { status: 'FAILED' } }).catch(() => undefined);
  }
}
