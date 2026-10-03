import 'reflect-metadata';
import { RequestMethod } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import type { NestExpressApplication } from '@nestjs/platform-express';
import helmet from 'helmet';
import { Logger } from 'nestjs-pino';
import { AppModule } from './app.module';
import { AppConfig } from './config/app-config';
import { loadEnv } from './config/env';

async function bootstrap(): Promise<void> {
  loadEnv(); // fail fast on invalid configuration
  const app = await NestFactory.create<NestExpressApplication>(AppModule, { bufferLogs: true, bodyParser: false });
  const config = app.get(AppConfig);
  app.useLogger(app.get(Logger));

  app.set('trust proxy', config.TRUST_PROXY_HOPS);
  app.disable('x-powered-by');
  app.use(helmet({ contentSecurityPolicy: false, crossOriginResourcePolicy: { policy: 'cross-origin' } }));
  app.useBodyParser('json', { limit: '256kb' });
  app.useBodyParser('urlencoded', { extended: false, limit: '64kb' });
  app.enableCors({
    origin: [config.WEB_APP_URL, config.ADMIN_APP_URL, ...config.CORS_ORIGINS],
    methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Authorization', 'Content-Type', 'Idempotency-Key', 'X-Request-Id'],
    exposedHeaders: ['X-Request-Id', 'Retry-After', 'X-RateLimit-Remaining'],
    maxAge: 600,
  });
  app.setGlobalPrefix('v1', {
    exclude: [
      { path: 'health', method: RequestMethod.GET },
      { path: 'health/ready', method: RequestMethod.GET },
      { path: 'metrics', method: RequestMethod.GET },
    ],
  });
  app.enableShutdownHooks();
  await app.listen(config.PORT, '0.0.0.0');
  app.get(Logger).log(`Mascot AI API listening on :${config.PORT}`);
}

void bootstrap();
