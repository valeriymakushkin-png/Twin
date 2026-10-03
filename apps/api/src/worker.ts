import 'reflect-metadata';
import { createServer } from 'node:http';
import { NestFactory } from '@nestjs/core';
import { Logger } from 'nestjs-pino';
import { loadEnv } from './config/env';
import { MetricsService } from './infra/metrics/metrics.service';
import { WorkerModule } from './worker.module';

/**
 * Worker entrypoint (same image as the API, different command):
 *   node dist/worker.js
 * Exposes /health and /metrics on WORKER_HEALTH_PORT for k8s probes and Prometheus.
 */
async function bootstrap(): Promise<void> {
  loadEnv();
  const app = await NestFactory.createApplicationContext(WorkerModule, { bufferLogs: true });
  const logger = app.get(Logger);
  app.useLogger(logger);
  app.enableShutdownHooks();
  await app.init();

  const metrics = app.get(MetricsService);
  const port = Number(process.env.WORKER_HEALTH_PORT ?? 4001);
  createServer(async (req, res) => {
    if (req.url === '/health') {
      res.writeHead(200, { 'Content-Type': 'application/json' }).end(JSON.stringify({ status: 'ok', queues: process.env.WORKER_QUEUES ?? 'all' }));
    } else if (req.url === '/metrics') {
      res.writeHead(200, { 'Content-Type': metrics.registry.contentType }).end(await metrics.registry.metrics());
    } else {
      res.writeHead(404).end();
    }
  }).listen(port, '0.0.0.0');

  logger.log(`Mascot AI workers running (queues: ${process.env.WORKER_QUEUES ?? 'all'}), health on :${port}`);
}

void bootstrap();
