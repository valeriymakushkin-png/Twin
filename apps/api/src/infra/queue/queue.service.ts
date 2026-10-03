import { InjectQueue } from '@nestjs/bullmq';
import { Injectable } from '@nestjs/common';
import type { Queue } from 'bullmq';
import type { GenerationType } from '@mascot/shared';
import {
  GENERATION_QUEUE,
  QUEUES,
  type GenerationJobData,
  type MaintenanceJobData,
  type NotifyJobData,
  type QueueName,
  type TelegramJobData,
} from './queue.constants';

@Injectable()
export class QueueService {
  private readonly byName: Record<QueueName, Queue>;

  constructor(
    @InjectQueue(QUEUES.AVATAR) avatar: Queue,
    @InjectQueue(QUEUES.STICKER) sticker: Queue,
    @InjectQueue(QUEUES.MEME) meme: Queue,
    @InjectQueue(QUEUES.PFP) pfp: Queue,
    @InjectQueue(QUEUES.VIDEO) video: Queue,
    @InjectQueue(QUEUES.TELEGRAM) telegram: Queue,
    @InjectQueue(QUEUES.NOTIFY) notify: Queue,
    @InjectQueue(QUEUES.MAINTENANCE) maintenance: Queue,
  ) {
    this.byName = { avatar, sticker, meme, pfp, video, telegram, notify, maintenance };
  }

  queue(name: QueueName): Queue {
    return this.byName[name];
  }

  all(): Queue[] {
    return Object.values(this.byName);
  }

  /**
   * Enqueue an AI generation. jobId = generationId makes enqueueing idempotent.
   * BullMQ priority: lower number = higher priority (premium users jump the queue).
   */
  async enqueueGeneration(type: GenerationType, generationId: string, opts: { priority: number }): Promise<void> {
    const data: GenerationJobData = { generationId };
    const isVideo = type === 'VIDEO';
    await this.byName[GENERATION_QUEUE[type]].add(type, data, {
      jobId: generationId,
      priority: opts.priority,
      attempts: isVideo ? 2 : 3,
      backoff: { type: 'exponential', delay: isVideo ? 30_000 : 10_000 },
    });
  }

  async enqueueTelegram(data: TelegramJobData): Promise<void> {
    await this.byName.telegram.add(data.kind, data, {
      jobId: `${data.kind}:${data.packId}:${Date.now()}`,
      attempts: 5,
      backoff: { type: 'exponential', delay: 5_000 },
    });
  }

  async notify(data: NotifyJobData): Promise<void> {
    await this.byName.notify.add('notify', data, { attempts: 3, backoff: { type: 'exponential', delay: 3_000 } });
  }

  async maintenance(data: MaintenanceJobData, opts: { delayMs?: number } = {}): Promise<void> {
    await this.byName.maintenance.add(data.task, data, { delay: opts.delayMs, attempts: 5 });
  }

  async waitingCount(type: GenerationType): Promise<number> {
    const counts = await this.byName[GENERATION_QUEUE[type]].getJobCounts('waiting', 'prioritized');
    return (counts.waiting ?? 0) + (counts.prioritized ?? 0);
  }

  async remove(type: GenerationType, generationId: string): Promise<boolean> {
    const job = await this.byName[GENERATION_QUEUE[type]].getJob(generationId);
    if (!job) return false;
    const state = await job.getState();
    if (state === 'waiting' || state === 'prioritized' || state === 'delayed') {
      await job.remove();
      return true;
    }
    return false;
  }
}
