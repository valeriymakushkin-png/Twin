import { Injectable } from '@nestjs/common';
import { collectDefaultMetrics, Counter, Gauge, Histogram, Registry } from 'prom-client';

@Injectable()
export class MetricsService {
  readonly registry = new Registry();

  readonly httpDuration = new Histogram({
    name: 'http_request_duration_seconds',
    help: 'HTTP request duration',
    labelNames: ['method', 'route', 'status'],
    buckets: [0.01, 0.025, 0.05, 0.1, 0.25, 0.5, 1, 2.5, 5, 10],
    registers: [this.registry],
  });

  readonly generationDuration = new Histogram({
    name: 'generation_duration_seconds',
    help: 'End-to-end AI generation duration',
    labelNames: ['type', 'status'],
    buckets: [5, 10, 20, 30, 45, 60, 90, 120, 180, 300, 600],
    registers: [this.registry],
  });

  readonly generationTotal = new Counter({
    name: 'generation_total',
    help: 'AI generations by type and outcome',
    labelNames: ['type', 'status'],
    registers: [this.registry],
  });

  readonly providerRequests = new Counter({
    name: 'ai_provider_requests_total',
    help: 'Requests to AI providers',
    labelNames: ['provider', 'operation', 'outcome'],
    registers: [this.registry],
  });

  readonly providerCostMicros = new Counter({
    name: 'ai_provider_cost_micro_usd_total',
    help: 'Estimated provider spend in micro-USD',
    labelNames: ['provider', 'operation'],
    registers: [this.registry],
  });

  readonly queueDepth = new Gauge({
    name: 'queue_jobs',
    help: 'BullMQ job counts by queue and state',
    labelNames: ['queue', 'state'],
    registers: [this.registry],
  });

  readonly paymentsTotal = new Counter({
    name: 'payments_total',
    help: 'Telegram Stars payments',
    labelNames: ['product', 'outcome'],
    registers: [this.registry],
  });

  constructor() {
    collectDefaultMetrics({ register: this.registry });
  }
}
