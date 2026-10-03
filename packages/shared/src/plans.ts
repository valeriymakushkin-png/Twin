/**
 * Plans, entitlements and Telegram Stars products.
 *
 * Telegram requires digital goods inside Mini Apps to be sold for Telegram Stars (XTR).
 * Recurring billing uses Star subscriptions (30-day period, fixed by Telegram).
 */
export const PLANS = ['FREE', 'PREMIUM'] as const;
export type Plan = (typeof PLANS)[number];

export interface Entitlements {
  /** Max READY mascots a user can own; null = unlimited. */
  maxAvatars: number | null;
  /** Lifetime sticker allowance on FREE, per-day fair-use cap on PREMIUM. */
  stickerAllowance: number | null;
  stickersPerDay: number | null;
  avatarGenerationsPerDay: number;
  styleRendersPerDay: number;
  memesPerDay: number;
  /** Video cost units per billing month; 0 = feature locked. */
  videoUnitsPerMonth: number;
  allStyles: boolean;
  premiumWardrobe: boolean;
  hdExport: boolean;
  watermark: boolean;
  aiProfilePictures: boolean;
  priorityQueue: boolean;
}

export const PLAN_ENTITLEMENTS: Record<Plan, Entitlements> = {
  FREE: {
    maxAvatars: 1,
    stickerAllowance: 5,
    stickersPerDay: null,
    avatarGenerationsPerDay: 2,
    styleRendersPerDay: 3,
    memesPerDay: 5,
    videoUnitsPerMonth: 0,
    allStyles: false,
    premiumWardrobe: false,
    hdExport: false,
    watermark: true,
    aiProfilePictures: false,
    priorityQueue: false,
  },
  PREMIUM: {
    maxAvatars: null,
    stickerAllowance: null,
    stickersPerDay: 120,
    avatarGenerationsPerDay: 20,
    styleRendersPerDay: 80,
    memesPerDay: 200,
    videoUnitsPerMonth: 20,
    allStyles: true,
    premiumWardrobe: true,
    hdExport: true,
    watermark: false,
    aiProfilePictures: true,
    priorityQueue: true,
  },
};

/** Credit prices for actions beyond the plan allowance. */
export const CREDIT_COSTS = {
  extraAvatar: 20,
  sticker: 2,
  styleRender: 6,
  aiProfilePicture: 5,
  videoUnit: 25,
} as const;

export type ProductKind = 'subscription' | 'premium_pass' | 'credits';

export interface StarProduct {
  id: StarProductId;
  kind: ProductKind;
  title: string;
  description: string;
  /** Price in Telegram Stars (XTR). */
  stars: number;
  /** For subscriptions / passes. */
  premiumDays?: number;
  credits?: number;
  badge?: string;
}

export const STAR_PRODUCT_IDS = [
  'premium_monthly',
  'premium_yearly',
  'credits_60',
  'credits_200',
  'credits_600',
] as const;
export type StarProductId = (typeof STAR_PRODUCT_IDS)[number];

/** Telegram Star subscriptions are always billed every 30 days (2592000 seconds). */
export const STAR_SUBSCRIPTION_PERIOD_SECONDS = 2_592_000;

export const STAR_PRODUCTS: Record<StarProductId, StarProduct> = {
  premium_monthly: {
    id: 'premium_monthly',
    kind: 'subscription',
    title: 'Mascot AI Premium',
    description: 'Unlimited mascots & styles, video generation, HD export, premium outfits and poses. Renews every 30 days.',
    stars: 450,
    premiumDays: 30,
    badge: 'Most popular',
  },
  premium_yearly: {
    id: 'premium_yearly',
    kind: 'premium_pass',
    title: 'Mascot AI Premium — 12 months',
    description: '12 months of Premium for the price of 8. One-time payment, no auto-renewal.',
    stars: 3600,
    premiumDays: 365,
    badge: 'Save 33%',
  },
  credits_60: {
    id: 'credits_60',
    kind: 'credits',
    title: '60 credits',
    description: 'Credits for extra stickers, styles, AI profile pictures and videos.',
    stars: 150,
    credits: 60,
  },
  credits_200: {
    id: 'credits_200',
    kind: 'credits',
    title: '200 credits',
    description: 'Credits for extra stickers, styles, AI profile pictures and videos. +11% bonus.',
    stars: 450,
    credits: 200,
    badge: '+11%',
  },
  credits_600: {
    id: 'credits_600',
    kind: 'credits',
    title: '600 credits',
    description: 'Credits for extra stickers, styles, AI profile pictures and videos. +33% bonus.',
    stars: 1125,
    credits: 600,
    badge: 'Best value',
  },
};

export const REFERRAL_REWARDS = {
  /** Credits granted to the referrer when the invitee finishes their first mascot. */
  referrerCredits: 20,
  /** Credits granted to the invitee at sign-up. */
  inviteeCredits: 10,
  /** Max rewarded referrals per user per month (anti-abuse). */
  monthlyCap: 50,
} as const;

/** Machine-readable reasons returned with HTTP 402 so the client can open the right paywall. */
export const PAYWALL_REASONS = [
  'AVATAR_LIMIT',
  'STICKER_LIMIT',
  'PREMIUM_STYLE',
  'PREMIUM_WARDROBE',
  'VIDEO_PREMIUM_ONLY',
  'VIDEO_QUOTA',
  'HD_EXPORT',
  'AI_PFP_PREMIUM',
  'DAILY_LIMIT',
  'INSUFFICIENT_CREDITS',
] as const;
export type PaywallReason = (typeof PAYWALL_REASONS)[number];
