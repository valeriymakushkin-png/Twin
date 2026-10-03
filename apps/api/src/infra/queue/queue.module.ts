import { BullModule } from '@nestjs/bullmq';
import { Global, Module } from '@nestjs/common';
import { AppConfig } from '../../config/app-config';
import { redisOptionsFromUrl } from '../redis/redis.service';
import { ALL_QUEUES } from './queue.constants';
import { QueueService } from './queue.service';

@Global()
@Module({
  imports: [
    BullModule.forRootAsync({
      inject: [AppConfig],
      useFactory: (config: AppConfig) => ({
        connection: { ...redisOptionsFromUrl(config.REDIS_URL), maxRetriesPerRequest: null },
        prefix: 'mascot',
        defaultJobOptions: {
          attempts: 3,
          backoff: { type: 'exponential', delay: 10_000 },
          removeOnComplete: { age: 24 * 3600, count: 5000 },
          removeOnFail: { age: 7 * 24 * 3600, count: 20000 },
        },
      }),
    }),
    BullModule.registerQueue(...ALL_QUEUES.map((name) => ({ name }))),
  ],
  providers: [QueueService],
  exports: [BullModule, QueueService],
})
export class QueueModule {}
