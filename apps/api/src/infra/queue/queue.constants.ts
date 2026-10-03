import type { GenerationType } from '@mascot/shared';

export const QUEUES = {
  AVATAR: 'avatar',
  STICKER: 'sticker',
  MEME: 'meme',
  PFP: 'pfp',
  VIDEO: 'video',
  TELEGRAM: 'telegram',
  NOTIFY: 'notify',
  MAINTENANCE: 'maintenance',
} as const;

export type QueueName = (typeof QUEUES)[keyof typeof QUEUES];

export const ALL_QUEUES: QueueName[] = Object.values(QUEUES);

export const GENERATION_QUEUE: Record<GenerationType, QueueName> = {
  AVATAR: QUEUES.AVATAR,
  STYLE_VARIANT: QUEUES.AVATAR,
  STICKER_PACK: QUEUES.STICKER,
  MEME: QUEUES.MEME,
  PROFILE_PICTURE: QUEUES.PFP,
  VIDEO: QUEUES.VIDEO,
};

export interface GenerationJobData {
  generationId: string;
}

export type TelegramJobData = { kind: 'publish-sticker-pack'; packId: string };

export interface NotifyJobData {
  userId: string;
  text: string;
  /** Mini App path to open from the inline button, e.g. /mascot/abc */
  path?: string;
  buttonText?: string;
  photoUrl?: string;
}

export type MaintenanceTask =
  | 'expire-subscriptions'
  | 'expire-payments'
  | 'purge-photos'
  | 'rollup-daily-stats'
  | 'recover-stale-generations'
  | 'delete-account'
  | 'delete-avatar';

export interface MaintenanceJobData {
  task: MaintenanceTask;
  userId?: string;
  avatarId?: string;
}

/** Recurring maintenance schedule (cron, UTC). Registered idempotently via upsertJobScheduler. */
export const MAINTENANCE_SCHEDULE: Array<{ task: MaintenanceTask; pattern: string }> = [
  { task: 'expire-subscriptions', pattern: '*/10 * * * *' },
  { task: 'expire-payments', pattern: '17 * * * *' },
  { task: 'recover-stale-generations', pattern: '*/15 * * * *' },
  { task: 'rollup-daily-stats', pattern: '5 * * * *' },
  { task: 'purge-photos', pattern: '30 3 * * *' },
];
