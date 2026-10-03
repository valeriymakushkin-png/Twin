-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('USER', 'SUPPORT', 'ADMIN');

-- CreateEnum
CREATE TYPE "Plan" AS ENUM ('FREE', 'PREMIUM');

-- CreateEnum
CREATE TYPE "PhotoStatus" AS ENUM ('UPLOADED', 'ACCEPTED', 'REJECTED');

-- CreateEnum
CREATE TYPE "PhotoPose" AS ENUM ('FRONT', 'LEFT', 'RIGHT', 'SMILE', 'NEUTRAL', 'OTHER');

-- CreateEnum
CREATE TYPE "AvatarStatus" AS ENUM ('DRAFT', 'PROCESSING', 'READY', 'FAILED');

-- CreateEnum
CREATE TYPE "GenerationType" AS ENUM ('AVATAR', 'STYLE_VARIANT', 'STICKER_PACK', 'MEME', 'PROFILE_PICTURE', 'VIDEO');

-- CreateEnum
CREATE TYPE "GenerationStatus" AS ENUM ('QUEUED', 'PROCESSING', 'SUCCEEDED', 'FAILED', 'CANCELED');

-- CreateEnum
CREATE TYPE "StickerPackStatus" AS ENUM ('GENERATING', 'READY', 'PUBLISHING', 'PUBLISHED', 'FAILED');

-- CreateEnum
CREATE TYPE "AssetStatus" AS ENUM ('PENDING', 'READY', 'FAILED');

-- CreateEnum
CREATE TYPE "VideoStatus" AS ENUM ('QUEUED', 'PROCESSING', 'READY', 'FAILED');

-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('PENDING', 'PAID', 'REFUNDED', 'FAILED', 'EXPIRED');

-- CreateEnum
CREATE TYPE "SubscriptionStatus" AS ENUM ('ACTIVE', 'CANCELED', 'EXPIRED', 'PAST_DUE');

-- CreateEnum
CREATE TYPE "CreditReason" AS ENUM ('PURCHASE', 'REFERRAL_BONUS', 'SIGNUP_BONUS', 'SPEND', 'REFUND', 'ADMIN_GRANT', 'GENERATION_FAILED_REFUND');

-- CreateEnum
CREATE TYPE "ModerationType" AS ENUM ('NSFW_UPLOAD', 'MULTIPLE_IDENTITIES', 'MINOR_DETECTED', 'NO_FACE_SPAM', 'RATE_LIMIT', 'TEXT_POLICY', 'PAYMENT_ABUSE', 'REFERRAL_ABUSE', 'GENERATION_ABUSE');

-- CreateEnum
CREATE TYPE "ModerationSeverity" AS ENUM ('LOW', 'MEDIUM', 'HIGH', 'CRITICAL');

-- CreateEnum
CREATE TYPE "ModerationStatus" AS ENUM ('OPEN', 'RESOLVED', 'DISMISSED');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "telegram_id" BIGINT NOT NULL,
    "username" TEXT,
    "first_name" TEXT,
    "last_name" TEXT,
    "language_code" TEXT,
    "photo_url" TEXT,
    "is_telegram_premium" BOOLEAN NOT NULL DEFAULT false,
    "allows_write_to_pm" BOOLEAN NOT NULL DEFAULT false,
    "notifications_enabled" BOOLEAN NOT NULL DEFAULT true,
    "role" "UserRole" NOT NULL DEFAULT 'USER',
    "plan" "Plan" NOT NULL DEFAULT 'FREE',
    "premium_until" TIMESTAMP(3),
    "credits" INTEGER NOT NULL DEFAULT 0,
    "stickers_generated" INTEGER NOT NULL DEFAULT 0,
    "avatars_created" INTEGER NOT NULL DEFAULT 0,
    "referral_code" TEXT NOT NULL,
    "referred_by_id" TEXT,
    "referral_rewarded_at" TIMESTAMP(3),
    "acquisition_source" TEXT,
    "biometric_consent_at" TIMESTAMP(3),
    "risk_score" INTEGER NOT NULL DEFAULT 0,
    "is_banned" BOOLEAN NOT NULL DEFAULT false,
    "ban_reason" TEXT,
    "last_seen_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "photos" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "avatar_id" TEXT,
    "storage_key" TEXT NOT NULL,
    "mime_type" TEXT NOT NULL,
    "width" INTEGER NOT NULL,
    "height" INTEGER NOT NULL,
    "size_bytes" INTEGER NOT NULL,
    "sha256" TEXT NOT NULL,
    "phash" TEXT NOT NULL,
    "status" "PhotoStatus" NOT NULL DEFAULT 'UPLOADED',
    "pose" "PhotoPose" NOT NULL DEFAULT 'OTHER',
    "reject_reason" TEXT,
    "quality_score" DOUBLE PRECISION,
    "face_count" INTEGER,
    "analysis" JSONB,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "photos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "styles" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "tagline" TEXT NOT NULL,
    "is_premium" BOOLEAN NOT NULL DEFAULT false,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "sort_order" INTEGER NOT NULL DEFAULT 0,
    "prompt_overrides" JSONB,
    "preview_key" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "styles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "avatars" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "status" "AvatarStatus" NOT NULL DEFAULT 'DRAFT',
    "style_id" TEXT NOT NULL,
    "seed" INTEGER NOT NULL,
    "share_slug" TEXT NOT NULL,
    "is_public" BOOLEAN NOT NULL DEFAULT true,
    "primary_render_id" TEXT,
    "card_key" TEXT,
    "failure_reason" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "avatars_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "avatar_dna" (
    "id" TEXT NOT NULL,
    "avatar_id" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "face_shape" TEXT NOT NULL,
    "eye_shape" TEXT NOT NULL,
    "eye_color" TEXT NOT NULL,
    "hair_style" TEXT NOT NULL,
    "hair_color" TEXT NOT NULL,
    "nose_shape" TEXT NOT NULL,
    "mouth_shape" TEXT NOT NULL,
    "skin_tone" TEXT NOT NULL,
    "eyebrows" TEXT NOT NULL,
    "age_group" TEXT NOT NULL,
    "facial_hair" TEXT NOT NULL DEFAULT 'none',
    "glasses" TEXT NOT NULL DEFAULT 'none',
    "presentation" TEXT NOT NULL DEFAULT 'androgynous',
    "freckles" BOOLEAN NOT NULL DEFAULT false,
    "dimples" BOOLEAN NOT NULL DEFAULT false,
    "distinguishing_features" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "proportions" JSONB,
    "confidence" JSONB,
    "face_embedding" DOUBLE PRECISION[] DEFAULT ARRAY[]::DOUBLE PRECISION[],
    "prompt_fragment" TEXT NOT NULL,
    "reference_photo_keys" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "extractor_version" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "avatar_dna_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "avatar_renders" (
    "id" TEXT NOT NULL,
    "avatar_id" TEXT NOT NULL,
    "style_id" TEXT NOT NULL,
    "generation_id" TEXT,
    "outfit_key" TEXT,
    "pose_key" TEXT,
    "master_key" TEXT NOT NULL,
    "image_key" TEXT NOT NULL,
    "thumb_key" TEXT NOT NULL,
    "identity_score" DOUBLE PRECISION,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "avatar_renders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "generations" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "avatar_id" TEXT,
    "style_id" TEXT,
    "type" "GenerationType" NOT NULL,
    "status" "GenerationStatus" NOT NULL DEFAULT 'QUEUED',
    "stage" TEXT,
    "progress" INTEGER NOT NULL DEFAULT 0,
    "input" JSONB NOT NULL,
    "prompt" TEXT,
    "provider" TEXT,
    "model" TEXT,
    "output_keys" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "result_id" TEXT,
    "credits_charged" INTEGER NOT NULL DEFAULT 0,
    "quota_units" INTEGER NOT NULL DEFAULT 0,
    "cost_micros" INTEGER NOT NULL DEFAULT 0,
    "error_code" TEXT,
    "error_message" TEXT,
    "attempts" INTEGER NOT NULL DEFAULT 0,
    "priority" INTEGER NOT NULL DEFAULT 5,
    "idempotency_key" TEXT,
    "queued_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "started_at" TIMESTAMP(3),
    "completed_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "generations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sticker_packs" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "avatar_id" TEXT NOT NULL,
    "style_id" TEXT NOT NULL,
    "generation_id" TEXT,
    "title" TEXT NOT NULL,
    "status" "StickerPackStatus" NOT NULL DEFAULT 'GENERATING',
    "telegram_set_name" TEXT,
    "published_at" TIMESTAMP(3),
    "publish_error" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sticker_packs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stickers" (
    "id" TEXT NOT NULL,
    "pack_id" TEXT NOT NULL,
    "emotion" TEXT NOT NULL,
    "emoji" TEXT NOT NULL,
    "status" "AssetStatus" NOT NULL DEFAULT 'PENDING',
    "image_key" TEXT,
    "master_key" TEXT,
    "telegram_file_id" TEXT,
    "sort_order" INTEGER NOT NULL DEFAULT 0,
    "error_message" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "stickers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "memes" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "avatar_id" TEXT NOT NULL,
    "generation_id" TEXT,
    "format" TEXT NOT NULL,
    "emotion" TEXT,
    "top_text" TEXT,
    "bottom_text" TEXT,
    "status" "AssetStatus" NOT NULL DEFAULT 'PENDING',
    "image_key" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "memes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "profile_pictures" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "avatar_id" TEXT NOT NULL,
    "generation_id" TEXT,
    "background_key" TEXT NOT NULL,
    "mode" TEXT NOT NULL,
    "outfit_key" TEXT,
    "pose_key" TEXT,
    "status" "AssetStatus" NOT NULL DEFAULT 'PENDING',
    "image_key" TEXT,
    "hd_key" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "profile_pictures_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "videos" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "avatar_id" TEXT NOT NULL,
    "generation_id" TEXT,
    "template" TEXT NOT NULL,
    "aspect_ratio" TEXT NOT NULL,
    "prompt" TEXT,
    "script" TEXT,
    "voice" TEXT,
    "provider" TEXT,
    "provider_job_id" TEXT,
    "status" "VideoStatus" NOT NULL DEFAULT 'QUEUED',
    "video_key" TEXT,
    "thumbnail_key" TEXT,
    "duration_sec" DOUBLE PRECISION,
    "cost_units" INTEGER NOT NULL DEFAULT 1,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "videos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payments" (
    "id" TEXT NOT NULL,
    "user_id" TEXT,
    "subscription_id" TEXT,
    "product_id" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'XTR',
    "status" "PaymentStatus" NOT NULL DEFAULT 'PENDING',
    "invoice_payload" TEXT NOT NULL,
    "telegram_payment_charge_id" TEXT,
    "provider_payment_charge_id" TEXT,
    "is_recurring" BOOLEAN NOT NULL DEFAULT false,
    "is_first_recurring" BOOLEAN NOT NULL DEFAULT false,
    "subscription_expires_at" TIMESTAMP(3),
    "raw" JSONB,
    "paid_at" TIMESTAMP(3),
    "refunded_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "payments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "subscriptions" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,
    "status" "SubscriptionStatus" NOT NULL DEFAULT 'ACTIVE',
    "is_recurring" BOOLEAN NOT NULL DEFAULT true,
    "telegram_charge_id" TEXT,
    "current_period_start" TIMESTAMP(3) NOT NULL,
    "current_period_end" TIMESTAMP(3) NOT NULL,
    "cancel_at_period_end" BOOLEAN NOT NULL DEFAULT false,
    "canceled_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "subscriptions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "credit_ledger" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "delta" INTEGER NOT NULL,
    "balance_after" INTEGER NOT NULL,
    "reason" "CreditReason" NOT NULL,
    "ref_type" TEXT,
    "ref_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "credit_ledger_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "moderation_events" (
    "id" TEXT NOT NULL,
    "user_id" TEXT,
    "type" "ModerationType" NOT NULL,
    "severity" "ModerationSeverity" NOT NULL DEFAULT 'LOW',
    "status" "ModerationStatus" NOT NULL DEFAULT 'OPEN',
    "details" JSONB NOT NULL,
    "resolved_by" TEXT,
    "resolved_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "moderation_events_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "audit_logs" (
    "id" TEXT NOT NULL,
    "actor_id" TEXT,
    "action" TEXT NOT NULL,
    "target_type" TEXT NOT NULL,
    "target_id" TEXT NOT NULL,
    "metadata" JSONB,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "audit_logs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "daily_stats" (
    "date" DATE NOT NULL,
    "new_users" INTEGER NOT NULL DEFAULT 0,
    "active_users" INTEGER NOT NULL DEFAULT 0,
    "avatars_created" INTEGER NOT NULL DEFAULT 0,
    "generations" INTEGER NOT NULL DEFAULT 0,
    "failed_generations" INTEGER NOT NULL DEFAULT 0,
    "stars_revenue" INTEGER NOT NULL DEFAULT 0,
    "new_premium" INTEGER NOT NULL DEFAULT 0,
    "cost_micros" BIGINT NOT NULL DEFAULT 0,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "daily_stats_pkey" PRIMARY KEY ("date")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_telegram_id_key" ON "users"("telegram_id");

-- CreateIndex
CREATE UNIQUE INDEX "users_referral_code_key" ON "users"("referral_code");

-- CreateIndex
CREATE INDEX "users_created_at_idx" ON "users"("created_at");

-- CreateIndex
CREATE INDEX "users_plan_premium_until_idx" ON "users"("plan", "premium_until");

-- CreateIndex
CREATE INDEX "users_referred_by_id_idx" ON "users"("referred_by_id");

-- CreateIndex
CREATE INDEX "users_last_seen_at_idx" ON "users"("last_seen_at");

-- CreateIndex
CREATE INDEX "users_is_banned_idx" ON "users"("is_banned");

-- CreateIndex
CREATE UNIQUE INDEX "photos_storage_key_key" ON "photos"("storage_key");

-- CreateIndex
CREATE INDEX "photos_user_id_created_at_idx" ON "photos"("user_id", "created_at");

-- CreateIndex
CREATE INDEX "photos_avatar_id_idx" ON "photos"("avatar_id");

-- CreateIndex
CREATE INDEX "photos_phash_idx" ON "photos"("phash");

-- CreateIndex
CREATE INDEX "photos_created_at_idx" ON "photos"("created_at");

-- CreateIndex
CREATE UNIQUE INDEX "photos_user_id_sha256_key" ON "photos"("user_id", "sha256");

-- CreateIndex
CREATE UNIQUE INDEX "styles_slug_key" ON "styles"("slug");

-- CreateIndex
CREATE INDEX "styles_is_active_sort_order_idx" ON "styles"("is_active", "sort_order");

-- CreateIndex
CREATE UNIQUE INDEX "avatars_share_slug_key" ON "avatars"("share_slug");

-- CreateIndex
CREATE UNIQUE INDEX "avatars_primary_render_id_key" ON "avatars"("primary_render_id");

-- CreateIndex
CREATE INDEX "avatars_user_id_status_created_at_idx" ON "avatars"("user_id", "status", "created_at");

-- CreateIndex
CREATE INDEX "avatars_status_idx" ON "avatars"("status");

-- CreateIndex
CREATE UNIQUE INDEX "avatar_dna_avatar_id_key" ON "avatar_dna"("avatar_id");

-- CreateIndex
CREATE INDEX "avatar_dna_face_shape_idx" ON "avatar_dna"("face_shape");

-- CreateIndex
CREATE INDEX "avatar_dna_hair_style_idx" ON "avatar_dna"("hair_style");

-- CreateIndex
CREATE INDEX "avatar_dna_skin_tone_idx" ON "avatar_dna"("skin_tone");

-- CreateIndex
CREATE INDEX "avatar_renders_avatar_id_created_at_idx" ON "avatar_renders"("avatar_id", "created_at");

-- CreateIndex
CREATE INDEX "avatar_renders_style_id_idx" ON "avatar_renders"("style_id");

-- CreateIndex
CREATE INDEX "generations_user_id_created_at_idx" ON "generations"("user_id", "created_at");

-- CreateIndex
CREATE INDEX "generations_user_id_type_created_at_idx" ON "generations"("user_id", "type", "created_at");

-- CreateIndex
CREATE INDEX "generations_status_created_at_idx" ON "generations"("status", "created_at");

-- CreateIndex
CREATE INDEX "generations_type_created_at_idx" ON "generations"("type", "created_at");

-- CreateIndex
CREATE INDEX "generations_avatar_id_idx" ON "generations"("avatar_id");

-- CreateIndex
CREATE UNIQUE INDEX "generations_user_id_idempotency_key_key" ON "generations"("user_id", "idempotency_key");

-- CreateIndex
CREATE UNIQUE INDEX "sticker_packs_generation_id_key" ON "sticker_packs"("generation_id");

-- CreateIndex
CREATE UNIQUE INDEX "sticker_packs_telegram_set_name_key" ON "sticker_packs"("telegram_set_name");

-- CreateIndex
CREATE INDEX "sticker_packs_user_id_created_at_idx" ON "sticker_packs"("user_id", "created_at");

-- CreateIndex
CREATE INDEX "sticker_packs_avatar_id_idx" ON "sticker_packs"("avatar_id");

-- CreateIndex
CREATE INDEX "stickers_pack_id_sort_order_idx" ON "stickers"("pack_id", "sort_order");

-- CreateIndex
CREATE INDEX "stickers_emotion_idx" ON "stickers"("emotion");

-- CreateIndex
CREATE UNIQUE INDEX "stickers_pack_id_emotion_key" ON "stickers"("pack_id", "emotion");

-- CreateIndex
CREATE UNIQUE INDEX "memes_generation_id_key" ON "memes"("generation_id");

-- CreateIndex
CREATE INDEX "memes_user_id_created_at_idx" ON "memes"("user_id", "created_at");

-- CreateIndex
CREATE UNIQUE INDEX "profile_pictures_generation_id_key" ON "profile_pictures"("generation_id");

-- CreateIndex
CREATE INDEX "profile_pictures_user_id_created_at_idx" ON "profile_pictures"("user_id", "created_at");

-- CreateIndex
CREATE UNIQUE INDEX "videos_generation_id_key" ON "videos"("generation_id");

-- CreateIndex
CREATE INDEX "videos_user_id_created_at_idx" ON "videos"("user_id", "created_at");

-- CreateIndex
CREATE INDEX "videos_status_idx" ON "videos"("status");

-- CreateIndex
CREATE INDEX "videos_provider_provider_job_id_idx" ON "videos"("provider", "provider_job_id");

-- CreateIndex
CREATE UNIQUE INDEX "payments_telegram_payment_charge_id_key" ON "payments"("telegram_payment_charge_id");

-- CreateIndex
CREATE INDEX "payments_user_id_created_at_idx" ON "payments"("user_id", "created_at");

-- CreateIndex
CREATE INDEX "payments_status_created_at_idx" ON "payments"("status", "created_at");

-- CreateIndex
CREATE INDEX "payments_invoice_payload_idx" ON "payments"("invoice_payload");

-- CreateIndex
CREATE INDEX "payments_paid_at_idx" ON "payments"("paid_at");

-- CreateIndex
CREATE UNIQUE INDEX "subscriptions_telegram_charge_id_key" ON "subscriptions"("telegram_charge_id");

-- CreateIndex
CREATE INDEX "subscriptions_user_id_status_idx" ON "subscriptions"("user_id", "status");

-- CreateIndex
CREATE INDEX "subscriptions_status_current_period_end_idx" ON "subscriptions"("status", "current_period_end");

-- CreateIndex
CREATE INDEX "credit_ledger_user_id_created_at_idx" ON "credit_ledger"("user_id", "created_at");

-- CreateIndex
CREATE INDEX "credit_ledger_ref_type_ref_id_idx" ON "credit_ledger"("ref_type", "ref_id");

-- CreateIndex
CREATE INDEX "moderation_events_status_severity_created_at_idx" ON "moderation_events"("status", "severity", "created_at");

-- CreateIndex
CREATE INDEX "moderation_events_user_id_created_at_idx" ON "moderation_events"("user_id", "created_at");

-- CreateIndex
CREATE INDEX "moderation_events_type_created_at_idx" ON "moderation_events"("type", "created_at");

-- CreateIndex
CREATE INDEX "audit_logs_target_type_target_id_idx" ON "audit_logs"("target_type", "target_id");

-- CreateIndex
CREATE INDEX "audit_logs_actor_id_created_at_idx" ON "audit_logs"("actor_id", "created_at");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_referred_by_id_fkey" FOREIGN KEY ("referred_by_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "photos" ADD CONSTRAINT "photos_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "photos" ADD CONSTRAINT "photos_avatar_id_fkey" FOREIGN KEY ("avatar_id") REFERENCES "avatars"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "avatars" ADD CONSTRAINT "avatars_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "avatars" ADD CONSTRAINT "avatars_style_id_fkey" FOREIGN KEY ("style_id") REFERENCES "styles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "avatars" ADD CONSTRAINT "avatars_primary_render_id_fkey" FOREIGN KEY ("primary_render_id") REFERENCES "avatar_renders"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "avatar_dna" ADD CONSTRAINT "avatar_dna_avatar_id_fkey" FOREIGN KEY ("avatar_id") REFERENCES "avatars"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "avatar_renders" ADD CONSTRAINT "avatar_renders_avatar_id_fkey" FOREIGN KEY ("avatar_id") REFERENCES "avatars"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "avatar_renders" ADD CONSTRAINT "avatar_renders_style_id_fkey" FOREIGN KEY ("style_id") REFERENCES "styles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "avatar_renders" ADD CONSTRAINT "avatar_renders_generation_id_fkey" FOREIGN KEY ("generation_id") REFERENCES "generations"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "generations" ADD CONSTRAINT "generations_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "generations" ADD CONSTRAINT "generations_avatar_id_fkey" FOREIGN KEY ("avatar_id") REFERENCES "avatars"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "generations" ADD CONSTRAINT "generations_style_id_fkey" FOREIGN KEY ("style_id") REFERENCES "styles"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sticker_packs" ADD CONSTRAINT "sticker_packs_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sticker_packs" ADD CONSTRAINT "sticker_packs_avatar_id_fkey" FOREIGN KEY ("avatar_id") REFERENCES "avatars"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sticker_packs" ADD CONSTRAINT "sticker_packs_style_id_fkey" FOREIGN KEY ("style_id") REFERENCES "styles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stickers" ADD CONSTRAINT "stickers_pack_id_fkey" FOREIGN KEY ("pack_id") REFERENCES "sticker_packs"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "memes" ADD CONSTRAINT "memes_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "memes" ADD CONSTRAINT "memes_avatar_id_fkey" FOREIGN KEY ("avatar_id") REFERENCES "avatars"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profile_pictures" ADD CONSTRAINT "profile_pictures_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profile_pictures" ADD CONSTRAINT "profile_pictures_avatar_id_fkey" FOREIGN KEY ("avatar_id") REFERENCES "avatars"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "videos" ADD CONSTRAINT "videos_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "videos" ADD CONSTRAINT "videos_avatar_id_fkey" FOREIGN KEY ("avatar_id") REFERENCES "avatars"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payments" ADD CONSTRAINT "payments_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payments" ADD CONSTRAINT "payments_subscription_id_fkey" FOREIGN KEY ("subscription_id") REFERENCES "subscriptions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subscriptions" ADD CONSTRAINT "subscriptions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "credit_ledger" ADD CONSTRAINT "credit_ledger_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "moderation_events" ADD CONSTRAINT "moderation_events_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "audit_logs" ADD CONSTRAINT "audit_logs_actor_id_fkey" FOREIGN KEY ("actor_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
