import { Global, Module } from '@nestjs/common';
import { AppConfig } from '../config/app-config';
import { MockVisionExtractor } from './dna/mock-vision.extractor';
import { OpenAiVisionExtractor } from './dna/openai-vision.extractor';
import { VISION_EXTRACTOR, type VisionExtractor } from './dna/vision.types';
import { FaceServiceAnalyzer } from './face/face-service.analyzer';
import { FACE_ANALYZER, type FaceAnalyzer } from './face/face.types';
import { MockFaceAnalyzer } from './face/mock.analyzer';
import { FluxImageProvider } from './image/flux-image.provider';
import { IMAGE_PROVIDER, type ImageProvider } from './image/image-provider.types';
import { MockImageProvider } from './image/mock-image.provider';
import { OpenAiImageProvider } from './image/openai-image.provider';
import { MascotEngine } from './mascot-engine.service';
import { ProviderRateLimiter } from './provider-rate-limiter';
import { MockTtsProvider, OpenAiTtsProvider, TTS_PROVIDER, type TtsProvider } from './tts/tts.service';
import { KlingVideoProvider } from './video/kling.provider';
import { MockVideoProvider } from './video/mock.provider';
import { RunwayVideoProvider } from './video/runway.provider';
import { VeoVideoProvider } from './video/veo.provider';
import { VIDEO_PROVIDER, type VideoProvider } from './video/video-provider.types';

/**
 * Provider wiring. Every AI capability sits behind an interface selected by env, so
 * vendors can be swapped (or A/B tested) without touching pipeline code.
 */
@Global()
@Module({
  providers: [
    {
      provide: IMAGE_PROVIDER,
      inject: [AppConfig],
      useFactory: (config: AppConfig): ImageProvider => {
        switch (config.AI_IMAGE_PROVIDER) {
          case 'openai':
            return new OpenAiImageProvider(config);
          case 'flux':
            return new FluxImageProvider(config);
          default:
            return new MockImageProvider();
        }
      },
    },
    {
      provide: VIDEO_PROVIDER,
      inject: [AppConfig],
      useFactory: (config: AppConfig): VideoProvider => {
        switch (config.AI_VIDEO_PROVIDER) {
          case 'kling':
            return new KlingVideoProvider(config);
          case 'runway':
            return new RunwayVideoProvider(config);
          case 'veo':
            return new VeoVideoProvider(config);
          default:
            return new MockVideoProvider();
        }
      },
    },
    {
      provide: FACE_ANALYZER,
      inject: [AppConfig],
      useFactory: (config: AppConfig): FaceAnalyzer =>
        config.FACE_ANALYSIS_PROVIDER === 'service' ? new FaceServiceAnalyzer(config) : new MockFaceAnalyzer(),
    },
    {
      provide: VISION_EXTRACTOR,
      inject: [AppConfig],
      useFactory: (config: AppConfig): VisionExtractor =>
        config.VISION_PROVIDER === 'openai' ? new OpenAiVisionExtractor(config) : new MockVisionExtractor(),
    },
    {
      provide: TTS_PROVIDER,
      inject: [AppConfig],
      useFactory: (config: AppConfig): TtsProvider =>
        config.TTS_PROVIDER === 'openai' ? new OpenAiTtsProvider(config) : new MockTtsProvider(),
    },
    ProviderRateLimiter,
    MascotEngine,
  ],
  exports: [IMAGE_PROVIDER, VIDEO_PROVIDER, FACE_ANALYZER, VISION_EXTRACTOR, TTS_PROVIDER, MascotEngine, ProviderRateLimiter],
})
export class AiModule {}
