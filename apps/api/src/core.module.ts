import { randomUUID } from 'node:crypto';
import { Module } from '@nestjs/common';
import { LoggerModule } from 'nestjs-pino';
import { AiModule } from './ai/ai.module';
import { AppConfig } from './config/app-config';
import { ConfigModule } from './config/config.module';
import { MetricsModule } from './infra/metrics/metrics.module';
import { PrismaModule } from './infra/prisma/prisma.module';
import { QueueModule } from './infra/queue/queue.module';
import { RedisModule } from './infra/redis/redis.module';
import { StorageModule } from './infra/storage/storage.module';
import { GenerationsModule } from './modules/generations/generations.module';
import { LibraryModule } from './modules/library/library.module';
import { ModerationModule } from './modules/moderation/moderation.module';
import { PaymentsModule } from './modules/payments/payments.module';
import { QuotaModule } from './modules/quota/quota.module';
import { StylesModule } from './modules/styles/styles.module';
import { TelegramModule } from './modules/telegram/telegram.module';
import { UsersModule } from './modules/users/users.module';

/** Infrastructure + domain services shared by the HTTP API and the workers. */
@Module({
  imports: [
    ConfigModule,
    LoggerModule.forRootAsync({
      inject: [AppConfig],
      useFactory: (config: AppConfig) => ({
        pinoHttp: {
          level: config.LOG_LEVEL,
          genReqId: (req, res) => {
            const id = (req.headers['x-request-id'] as string | undefined)?.slice(0, 64) || randomUUID();
            res.setHeader('x-request-id', id);
            return id;
          },
          redact: {
            paths: ['req.headers.authorization', 'req.headers.cookie', 'req.headers["x-telegram-bot-api-secret-token"]'],
            censor: '[redacted]',
          },
          autoLogging: { ignore: (req) => req.url === '/health' || req.url === '/metrics' },
          transport: config.isProduction ? undefined : { target: 'pino-pretty', options: { singleLine: true, colorize: true } },
        },
      }),
    }),
    PrismaModule,
    RedisModule,
    StorageModule,
    QueueModule,
    MetricsModule,
    QuotaModule,
    ModerationModule,
    StylesModule,
    LibraryModule,
    GenerationsModule,
    AiModule,
    UsersModule,
    TelegramModule,
    PaymentsModule,
  ],
})
export class CoreModule {}
