import { Module } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { AllExceptionsFilter } from './common/filters/all-exceptions.filter';
import { MetricsInterceptor } from './common/interceptors/metrics.interceptor';
import { CoreModule } from './core.module';
import { LocalFilesController } from './infra/storage/local-files.controller';
import { AdminModule } from './modules/admin/admin.module';
import { AuthModule } from './modules/auth/auth.module';
import { AvatarsModule } from './modules/avatars/avatars.module';
import { HealthModule } from './modules/health/health.module';
import { MemesModule } from './modules/memes/memes.module';
import { PfpModule } from './modules/pfp/pfp.module';
import { ShareModule } from './modules/share/share.module';
import { StickersModule } from './modules/stickers/stickers.module';
import { UploadsModule } from './modules/uploads/uploads.module';
import { VideosModule } from './modules/videos/videos.module';

@Module({
  imports: [
    CoreModule,
    AuthModule,
    HealthModule,
    UploadsModule,
    AvatarsModule,
    StickersModule,
    MemesModule,
    PfpModule,
    VideosModule,
    ShareModule,
    AdminModule,
  ],
  controllers: [LocalFilesController],
  providers: [
    { provide: APP_FILTER, useClass: AllExceptionsFilter },
    { provide: APP_INTERCEPTOR, useClass: MetricsInterceptor },
  ],
})
export class AppModule {}
