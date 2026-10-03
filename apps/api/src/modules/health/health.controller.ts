import { Controller, Get, Headers, Res, ServiceUnavailableException, UnauthorizedException } from '@nestjs/common';
import type { Response } from 'express';
import { AppConfig } from '../../config/app-config';
import { Public } from '../../common/decorators';
import { MetricsService } from '../../infra/metrics/metrics.service';
import { PrismaService } from '../../infra/prisma/prisma.service';
import { QueueService } from '../../infra/queue/queue.service';
import { RedisService } from '../../infra/redis/redis.service';

@Controller()
export class HealthController {
  constructor(
    private readonly prisma: PrismaService,
    private readonly redis: RedisService,
    private readonly metrics: MetricsService,
    private readonly queues: QueueService,
    private readonly config: AppConfig,
  ) {}

  /** Liveness: process is up. */
  @Public()
  @Get('health')
  live() {
    return { status: 'ok', uptime: Math.round(process.uptime()) };
  }

  /** Readiness: dependencies reachable (used by the load balancer / k8s readinessProbe). */
  @Public()
  @Get('health/ready')
  async ready() {
    const checks = await Promise.allSettled([this.prisma.$queryRaw`SELECT 1`, this.redis.client.ping()]);
    const [db, redis] = checks.map((c) => c.status === 'fulfilled');
    if (!db || !redis) throw new ServiceUnavailableException({ code: 'NOT_READY', message: 'Dependencies unavailable', details: { db, redis } });
    return { status: 'ready', db, redis };
  }

  /** Prometheus scrape endpoint (bearer METRICS_TOKEN when configured). */
  @Public()
  @Get('metrics')
  async scrape(@Headers('authorization') auth: string | undefined, @Res() res: Response) {
    if (this.config.METRICS_TOKEN && auth !== `Bearer ${this.config.METRICS_TOKEN}`) throw new UnauthorizedException();
    await Promise.all(
      this.queues.all().map(async (q) => {
        const counts = await q.getJobCounts('waiting', 'prioritized', 'active', 'delayed', 'failed');
        for (const [state, value] of Object.entries(counts)) this.metrics.queueDepth.set({ queue: q.name, state }, value);
      }),
    );
    res.setHeader('Content-Type', this.metrics.registry.contentType);
    res.send(await this.metrics.registry.metrics());
  }
}
