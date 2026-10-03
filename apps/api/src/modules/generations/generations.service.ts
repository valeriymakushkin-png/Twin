import { Injectable, Logger } from '@nestjs/common';
import { Prisma, type Generation, type GenerationType } from '@prisma/client';
import type { GenerationDto } from '@mascot/shared';
import { AppException, NotFound } from '../../common/errors';
import { MetricsService } from '../../infra/metrics/metrics.service';
import { PrismaService } from '../../infra/prisma/prisma.service';
import { QueueService } from '../../infra/queue/queue.service';
import { StorageService } from '../../infra/storage/storage.service';
import { QuotaService, type Charge } from '../quota/quota.service';

export interface LaunchOptions<T> {
  userId: string;
  type: GenerationType;
  idempotencyKey?: string;
  /** Charges the user (may throw 402). Runs before anything is persisted. */
  authorize: () => Promise<Charge>;
  /** Persists domain rows + the generation inside one transaction. */
  persist: (tx: Prisma.TransactionClient, charge: Charge, priority: number) => Promise<{ generation: Generation; result: T }>;
  /** Re-materialises the response for an idempotent replay. */
  replay: (generation: Generation) => Promise<T>;
}

export interface GenerationInput {
  charge?: Charge;
  [key: string]: unknown;
}

const STALE_AFTER_MS = 30 * 60_000;

@Injectable()
export class GenerationsService {
  private readonly logger = new Logger(GenerationsService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly queues: QueueService,
    private readonly quota: QuotaService,
    private readonly storage: StorageService,
    private readonly metrics: MetricsService,
  ) {}

  /**
   * Uniform launch protocol for every AI operation:
   * idempotency replay → authorize/charge → transactional persist → enqueue (jobId = generation id).
   * Any failure after charging refunds the user.
   */
  async launch<T>(opts: LaunchOptions<T>): Promise<T> {
    if (opts.idempotencyKey) {
      const existing = await this.prisma.generation.findUnique({
        where: { userId_idempotencyKey: { userId: opts.userId, idempotencyKey: opts.idempotencyKey } },
      });
      if (existing) return opts.replay(existing);
    }

    const user = await this.quota.loadUser(opts.userId);
    const priority = this.quota.entitlements(user).priorityQueue ? 1 : 10;
    const charge = await opts.authorize();
    let created: { generation: Generation; result: T };
    try {
      created = await this.prisma.$transaction((tx) => opts.persist(tx, charge, priority));
    } catch (error) {
      await this.quota.refund(opts.userId, charge, { type: 'generation', id: 'persist-failed' });
      if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002' && opts.idempotencyKey) {
        const existing = await this.prisma.generation.findUnique({
          where: { userId_idempotencyKey: { userId: opts.userId, idempotencyKey: opts.idempotencyKey } },
        });
        if (existing) return opts.replay(existing);
      }
      throw error;
    }

    try {
      await this.queues.enqueueGeneration(opts.type, created.generation.id, { priority });
    } catch (error) {
      this.logger.error(`enqueue failed for ${created.generation.id}: ${(error as Error).message}`);
      await this.fail(created.generation.id, 'QUEUE_UNAVAILABLE', 'Queue unavailable, please retry.');
      throw new AppException('QUEUE_UNAVAILABLE', 'Our generators are restarting. Please try again in a minute.', 503);
    }
    return created.result;
  }

  findIdempotent(userId: string, idempotencyKey: string): Promise<Generation | null> {
    return this.prisma.generation.findUnique({ where: { userId_idempotencyKey: { userId, idempotencyKey } } });
  }

  async toDto(generation: Generation): Promise<GenerationDto> {
    let queuePosition: number | null = null;
    if (generation.status === 'QUEUED') {
      queuePosition = await this.queues.waitingCount(generation.type).catch(() => null);
    }
    return {
      id: generation.id,
      type: generation.type,
      status: generation.status,
      stage: generation.stage,
      progress: generation.progress,
      avatarId: generation.avatarId,
      resultId: generation.resultId,
      outputUrls: generation.outputKeys.map((k) => this.storage.publicUrl(k)).filter((u): u is string => Boolean(u)),
      error: generation.errorCode ? { code: generation.errorCode, message: generation.errorMessage ?? 'Generation failed' } : null,
      queuePosition,
      createdAt: generation.createdAt.toISOString(),
      startedAt: generation.startedAt?.toISOString() ?? null,
      completedAt: generation.completedAt?.toISOString() ?? null,
    };
  }

  async get(userId: string, id: string): Promise<GenerationDto> {
    const generation = await this.prisma.generation.findFirst({ where: { id, userId } });
    if (!generation) throw new NotFound('Generation');
    return this.toDto(generation);
  }

  async list(userId: string, type?: GenerationType, limit = 20): Promise<GenerationDto[]> {
    const rows = await this.prisma.generation.findMany({
      where: { userId, ...(type ? { type } : {}) },
      orderBy: { createdAt: 'desc' },
      take: Math.min(50, limit),
    });
    return Promise.all(rows.map((g) => this.toDto(g)));
  }

  async cancel(userId: string, id: string): Promise<GenerationDto> {
    const generation = await this.prisma.generation.findFirst({ where: { id, userId } });
    if (!generation) throw new NotFound('Generation');
    if (generation.status !== 'QUEUED') throw new AppException('NOT_CANCELABLE', 'Generation already started');
    const removed = await this.queues.remove(generation.type, id);
    if (!removed) throw new AppException('NOT_CANCELABLE', 'Generation already started');
    await this.fail(id, 'CANCELED', 'Canceled by user', 'CANCELED');
    return this.get(userId, id);
  }

  /* ----------------------------- worker-side lifecycle ----------------------------- */

  async markProcessing(id: string, attempt: number): Promise<Generation | null> {
    const generation = await this.prisma.generation.findUnique({ where: { id } });
    if (!generation || generation.status === 'CANCELED' || generation.status === 'SUCCEEDED') return null;
    return this.prisma.generation.update({
      where: { id },
      data: { status: 'PROCESSING', startedAt: generation.startedAt ?? new Date(), attempts: attempt, errorCode: null, errorMessage: null },
    });
  }

  async progress(id: string, stage: string, progress: number): Promise<void> {
    await this.prisma.generation.update({ where: { id }, data: { stage, progress: Math.max(0, Math.min(100, Math.round(progress))) } });
  }

  async addCost(id: string, costMicros: number, provider?: string, model?: string): Promise<void> {
    await this.prisma.generation.update({
      where: { id },
      data: { costMicros: { increment: Math.round(costMicros) }, ...(provider ? { provider } : {}), ...(model ? { model } : {}) },
    });
  }

  async succeed(
    id: string,
    data: { resultId?: string; outputKeys?: string[]; prompt?: string; provider?: string; model?: string },
  ): Promise<Generation> {
    const generation = await this.prisma.generation.update({
      where: { id },
      data: { status: 'SUCCEEDED', stage: 'DONE', progress: 100, completedAt: new Date(), ...data },
    });
    this.observe(generation, 'succeeded');
    return generation;
  }

  /**
   * Terminal failure: records the error and refunds what was charged (once — guarded by status).
   * `refundRatio` < 1 supports partial refunds (e.g. 3 of 10 stickers failed).
   */
  async fail(id: string, code: string, message: string, status: 'FAILED' | 'CANCELED' = 'FAILED', refundRatio = 1): Promise<void> {
    const claimed = await this.prisma.generation.updateMany({
      where: { id, status: { in: ['QUEUED', 'PROCESSING'] } },
      data: { status, errorCode: code, errorMessage: message.slice(0, 500), completedAt: new Date() },
    });
    if (claimed.count === 0) return;
    const generation = await this.prisma.generation.findUniqueOrThrow({ where: { id } });
    const input = generation.input as GenerationInput;
    await this.quota.refund(generation.userId, input.charge, { type: 'generation', id }, refundRatio);
    this.observe(generation, status === 'CANCELED' ? 'canceled' : 'failed');
  }

  /** Partial refund on success (some items failed). */
  async refundPartial(id: string, ratio: number): Promise<void> {
    if (ratio <= 0) return;
    const generation = await this.prisma.generation.findUniqueOrThrow({ where: { id } });
    await this.quota.refund(generation.userId, (generation.input as GenerationInput).charge, { type: 'generation-partial', id }, ratio);
  }

  private observe(generation: Generation, status: string): void {
    this.metrics.generationTotal.inc({ type: generation.type, status });
    if (generation.startedAt && generation.completedAt) {
      this.metrics.generationDuration.observe(
        { type: generation.type, status },
        (generation.completedAt.getTime() - generation.createdAt.getTime()) / 1000,
      );
    }
  }

  /** Generations stuck in PROCESSING (crashed worker beyond BullMQ stall recovery). */
  async findStale(): Promise<Generation[]> {
    return this.prisma.generation.findMany({
      where: { status: { in: ['PROCESSING', 'QUEUED'] }, updatedAt: { lt: new Date(Date.now() - STALE_AFTER_MS) } },
      take: 200,
    });
  }
}
