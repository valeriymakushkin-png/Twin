import { Logger } from '@nestjs/common';
import { WorkerHost } from '@nestjs/bullmq';
import { UnrecoverableError, type Job } from 'bullmq';
import type { Generation } from '@prisma/client';
import { PipelineError } from '../../common/errors';
import type { GenerationJobData } from '../../infra/queue/queue.constants';
import { GenerationsService } from '../../modules/generations/generations.service';

export function userFacingMessage(error: unknown): { code: string; message: string } {
  if (error instanceof PipelineError) return { code: error.code, message: error.userMessage ?? error.message };
  return { code: 'INTERNAL', message: 'Something went wrong while generating. Your credits were refunded.' };
}

/**
 * Base class for every AI generation worker.
 *  - skips canceled / already-completed generations (idempotent redelivery)
 *  - non-retryable PipelineErrors (bad input, policy) fail fast via UnrecoverableError
 *  - on the final attempt: domain cleanup hook + generation FAILED + automatic refund
 */
export abstract class GenerationProcessor extends WorkerHost {
  protected abstract readonly logger: Logger;

  constructor(protected readonly generations: GenerationsService) {
    super();
  }

  protected abstract run(generation: Generation, job: Job<GenerationJobData>): Promise<void>;

  /** Mark domain objects (avatar, pack, video...) as failed. */
  protected async onFinalFailure(_generation: Generation, _error: unknown): Promise<void> {}

  async process(job: Job<GenerationJobData>): Promise<void> {
    const generation = await this.generations.markProcessing(job.data.generationId, job.attemptsMade + 1);
    if (!generation) {
      this.logger.debug(`skip ${job.data.generationId}: not processable`);
      return;
    }
    try {
      await this.run(generation, job);
    } catch (error) {
      const retryable = !(error instanceof PipelineError) || error.retryable;
      const final = !retryable || job.attemptsMade + 1 >= (job.opts.attempts ?? 1);
      this.logger.warn(
        `generation ${generation.id} (${generation.type}) attempt ${job.attemptsMade + 1} failed${final ? ' [final]' : ''}: ${(error as Error).message}`,
      );
      if (final) {
        const { code, message } = userFacingMessage(error);
        try {
          await this.onFinalFailure(generation, error);
        } finally {
          await this.generations.fail(generation.id, code, message);
        }
        if (!retryable) throw new UnrecoverableError((error as Error).message);
      }
      throw error;
    }
  }
}
