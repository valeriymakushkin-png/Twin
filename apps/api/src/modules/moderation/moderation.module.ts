import { Global, Module } from '@nestjs/common';
import { AbuseService } from './abuse.service';
import { ModerationService } from './moderation.service';

@Global()
@Module({
  providers: [ModerationService, AbuseService],
  exports: [ModerationService, AbuseService],
})
export class ModerationModule {}
