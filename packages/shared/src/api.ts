import { z } from 'zod';
import { STICKER_EMOTIONS, type StickerEmotion } from './emotions';
import type { MascotDna } from './dna';
import { MEME_FORMATS, type MemeFormat } from './memes';
import { STYLE_SLUGS } from './styles';
import {
  TTS_VOICES,
  VIDEO_ASPECT_RATIOS,
  VIDEO_TEMPLATES,
  type VideoAspectRatio,
  type VideoTemplate,
} from './videos';
import { STAR_PRODUCT_IDS, type Entitlements, type Plan, type StarProductId } from './plans';
import type { AvatarStage, GenerationStatus, GenerationType, PhotoPose } from './generation';

/* ------------------------------------------------------------------ */
/* Request schemas (validated by the API, reused by the client)        */
/* ------------------------------------------------------------------ */

const id = z.string().min(1).max(64);

export const TelegramAuthSchema = z.object({
  initData: z.string().min(10).max(8192),
});

export const TelegramLoginWidgetSchema = z.object({
  id: z.coerce.number().int().positive(),
  first_name: z.string().max(256).optional(),
  last_name: z.string().max(256).optional(),
  username: z.string().max(64).optional(),
  photo_url: z.string().url().max(1024).optional(),
  auth_date: z.coerce.number().int().positive(),
  hash: z.string().length(64),
});

export const GenerateAvatarSchema = z.object({
  photoIds: z.array(id).min(5).max(20),
  styleSlug: z.enum(STYLE_SLUGS),
  name: z.string().trim().min(1).max(40).optional(),
  outfitKey: z.string().max(40).optional(),
  poseKey: z.string().max(40).optional(),
});

export const StyleVariantSchema = z.object({
  styleSlug: z.enum(STYLE_SLUGS),
  outfitKey: z.string().max(40).optional(),
  poseKey: z.string().max(40).optional(),
});

export const GenerateStickersSchema = z.object({
  avatarId: id,
  emotions: z.array(z.enum(STICKER_EMOTIONS)).min(1).max(STICKER_EMOTIONS.length).optional(),
  styleSlug: z.enum(STYLE_SLUGS).optional(),
  title: z.string().trim().min(1).max(64).optional(),
});

export const GenerateMemeSchema = z
  .object({
    avatarId: id,
    format: z.enum(MEME_FORMATS).default('classic'),
    text: z.string().trim().max(200).optional(),
    topText: z.string().trim().max(120).optional(),
    bottomText: z.string().trim().max(120).optional(),
    emotion: z.enum(STICKER_EMOTIONS).optional(),
  })
  .refine((v) => Boolean(v.text || v.topText || v.bottomText), {
    message: 'Provide text, topText or bottomText',
  });

export const GeneratePfpSchema = z.object({
  avatarId: id,
  backgroundKey: z.string().max(40),
  mode: z.enum(['composite', 'ai']).default('composite'),
  outfitKey: z.string().max(40).optional(),
  poseKey: z.string().max(40).optional(),
});

export const GenerateVideoSchema = z.object({
  avatarId: id,
  template: z.enum(VIDEO_TEMPLATES),
  prompt: z.string().trim().max(300).optional(),
  script: z.string().trim().max(500).optional(),
  voice: z.enum(TTS_VOICES).optional(),
  aspectRatio: z.enum(VIDEO_ASPECT_RATIOS).default('9:16'),
});

export const CreateInvoiceSchema = z.object({
  productId: z.enum(STAR_PRODUCT_IDS),
});

export const PrepareShareSchema = z.object({
  kind: z.enum(['avatar', 'sticker_pack', 'meme', 'pfp', 'video']),
  id,
});

export const UpdateProfileSchema = z.object({
  notificationsEnabled: z.boolean().optional(),
  languageCode: z.string().min(2).max(8).optional(),
});

export type TelegramAuthInput = z.infer<typeof TelegramAuthSchema>;
export type TelegramLoginWidgetInput = z.infer<typeof TelegramLoginWidgetSchema>;
export type GenerateAvatarInput = z.infer<typeof GenerateAvatarSchema>;
export type StyleVariantInput = z.infer<typeof StyleVariantSchema>;
export type GenerateStickersInput = z.infer<typeof GenerateStickersSchema>;
export type GenerateMemeInput = z.input<typeof GenerateMemeSchema>;
export type GeneratePfpInput = z.input<typeof GeneratePfpSchema>;
export type GenerateVideoInput = z.input<typeof GenerateVideoSchema>;
export type CreateInvoiceInput = z.infer<typeof CreateInvoiceSchema>;
export type PrepareShareInput = z.infer<typeof PrepareShareSchema>;
export type UpdateProfileInput = z.infer<typeof UpdateProfileSchema>;

/* ------------------------------------------------------------------ */
/* Response DTOs                                                       */
/* ------------------------------------------------------------------ */

export interface ApiError {
  statusCode: number;
  error: string;
  message: string;
  code?: string;
  paywall?: { reason: string; suggestedProductId?: StarProductId };
  details?: unknown;
  requestId?: string;
}

export interface UsageDto {
  avatarsOwned: number;
  stickersUsed: number;
  stickersRemaining: number | null;
  videoUnitsUsedThisPeriod: number;
  videoUnitsRemaining: number;
  memesToday: number;
}

export interface SubscriptionDto {
  id: string;
  status: 'ACTIVE' | 'CANCELED' | 'EXPIRED' | 'PAST_DUE';
  productId: StarProductId;
  currentPeriodEnd: string;
  cancelAtPeriodEnd: boolean;
  isRecurring: boolean;
}

export interface UserProfileDto {
  id: string;
  telegramId: string;
  username: string | null;
  firstName: string | null;
  lastName: string | null;
  photoUrl: string | null;
  languageCode: string | null;
  plan: Plan;
  premiumUntil: string | null;
  credits: number;
  referralCode: string;
  referralLink: string;
  referralsCount: number;
  notificationsEnabled: boolean;
  entitlements: Entitlements;
  usage: UsageDto;
  subscription: SubscriptionDto | null;
  createdAt: string;
}

export interface AuthResponseDto {
  accessToken: string;
  expiresIn: number;
  user: UserProfileDto;
  isNewUser: boolean;
}

export interface PhotoDto {
  id: string;
  /** Echo of the uploaded file name (upload responses only), so clients can match results. */
  fileName?: string;
  url: string;
  width: number;
  height: number;
  pose: PhotoPose;
  status: 'UPLOADED' | 'ACCEPTED' | 'REJECTED';
  rejectReason: string | null;
  qualityScore: number | null;
}

export interface UploadResponseDto {
  photos: PhotoDto[];
  rejected: Array<{ fileName: string; reason: string }>;
}

export interface AvatarRenderDto {
  id: string;
  styleSlug: string;
  imageUrl: string;
  thumbnailUrl: string;
  hdAvailable: boolean;
  outfitKey: string | null;
  poseKey: string | null;
  isPrimary: boolean;
  createdAt: string;
}

export interface AvatarDto {
  id: string;
  name: string;
  status: 'DRAFT' | 'PROCESSING' | 'READY' | 'FAILED';
  styleSlug: string;
  imageUrl: string | null;
  thumbnailUrl: string | null;
  cardUrl: string | null;
  shareSlug: string;
  shareUrl: string;
  dna: MascotDna | null;
  renders: AvatarRenderDto[];
  latestGenerationId: string | null;
  createdAt: string;
}

export interface GenerationDto {
  id: string;
  type: GenerationType;
  status: GenerationStatus;
  stage: AvatarStage | string | null;
  progress: number;
  avatarId: string | null;
  resultId: string | null;
  outputUrls: string[];
  error: { code: string; message: string } | null;
  queuePosition: number | null;
  createdAt: string;
  startedAt: string | null;
  completedAt: string | null;
}

export interface StickerDto {
  id: string;
  emotion: StickerEmotion;
  emoji: string;
  imageUrl: string | null;
  status: 'PENDING' | 'READY' | 'FAILED';
}

export interface StickerPackDto {
  id: string;
  avatarId: string;
  title: string;
  styleSlug: string;
  status: 'GENERATING' | 'READY' | 'PUBLISHING' | 'PUBLISHED' | 'FAILED';
  telegramSetName: string | null;
  addStickersUrl: string | null;
  stickers: StickerDto[];
  generationId: string | null;
  createdAt: string;
}

export interface MemeDto {
  id: string;
  avatarId: string;
  format: MemeFormat;
  topText: string | null;
  bottomText: string | null;
  imageUrl: string | null;
  status: 'PENDING' | 'READY' | 'FAILED';
  generationId: string | null;
  createdAt: string;
}

export interface ProfilePictureDto {
  id: string;
  avatarId: string;
  backgroundKey: string;
  mode: 'composite' | 'ai';
  imageUrl: string | null;
  hdUrl: string | null;
  status: 'PENDING' | 'READY' | 'FAILED';
  generationId: string | null;
  createdAt: string;
}

export interface VideoDto {
  id: string;
  avatarId: string;
  template: VideoTemplate;
  aspectRatio: VideoAspectRatio;
  status: 'QUEUED' | 'PROCESSING' | 'READY' | 'FAILED';
  videoUrl: string | null;
  thumbnailUrl: string | null;
  durationSec: number | null;
  provider: string | null;
  generationId: string | null;
  createdAt: string;
}

export interface StyleDto {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  isPremium: boolean;
  previewUrl: string | null;
  gradient: [string, string];
  locked: boolean;
}

export interface StarProductDto {
  id: StarProductId;
  kind: 'subscription' | 'premium_pass' | 'credits';
  title: string;
  description: string;
  stars: number;
  premiumDays: number | null;
  credits: number | null;
  badge: string | null;
}

export interface InvoiceResponseDto {
  paymentId: string;
  invoiceUrl: string;
}

export interface PrepareShareResponseDto {
  preparedMessageId: string | null;
  shareUrl: string;
  mediaUrl: string;
}

export interface Paginated<T> {
  items: T[];
  nextCursor: string | null;
}

export interface LibraryDto {
  stickerPacks: StickerPackDto[];
  memes: MemeDto[];
  profilePictures: ProfilePictureDto[];
  videos: VideoDto[];
}

/* ------------------------------------------------------------------ */
/* Admin DTOs                                                          */
/* ------------------------------------------------------------------ */

export interface TimePoint {
  date: string;
  value: number;
}

export interface AdminOverviewDto {
  rangeDays: number;
  users: { total: number; new: number; dau: number; wau: number; mau: number; premium: number };
  revenue: { stars: number; payments: number; refunds: number; arppuStars: number; mrrStars: number };
  conversion: { freeToPremium: number; uploadToMascot: number };
  generations: {
    total: number;
    succeeded: number;
    failed: number;
    successRate: number;
    p50Ms: number | null;
    p95Ms: number | null;
    estimatedCostUsd: number;
  };
  queues: Array<{ name: string; waiting: number; active: number; delayed: number; failed: number }>;
  abuse: { openEvents: number; bannedUsers: number };
}

export interface AdminUserRowDto {
  id: string;
  telegramId: string;
  username: string | null;
  firstName: string | null;
  plan: Plan;
  credits: number;
  avatars: number;
  generations: number;
  starsSpent: number;
  riskScore: number;
  isBanned: boolean;
  createdAt: string;
  lastSeenAt: string | null;
}

export interface AbuseEventDto {
  id: string;
  userId: string | null;
  username: string | null;
  type: string;
  severity: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  status: 'OPEN' | 'RESOLVED' | 'DISMISSED';
  details: Record<string, unknown>;
  createdAt: string;
}
