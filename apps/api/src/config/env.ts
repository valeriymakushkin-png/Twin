import { z } from 'zod';

const bool = z
  .union([z.boolean(), z.string()])
  .transform((v) => (typeof v === 'boolean' ? v : ['1', 'true', 'yes', 'on'].includes(v.toLowerCase())));

const csv = z
  .string()
  .default('')
  .transform((v) =>
    v
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean),
  );

export const EnvSchema = z
  .object({
    NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
    PORT: z.coerce.number().int().default(4000),
    LOG_LEVEL: z.enum(['fatal', 'error', 'warn', 'info', 'debug', 'trace']).default('info'),
    APP_NAME: z.string().default('Mascot AI'),
    /** Public base URL of this API (used for local file URLs and webhooks). */
    PUBLIC_API_URL: z.string().url().default('http://localhost:4000'),
    /** URL of the Telegram Mini App (Next.js web). */
    WEB_APP_URL: z.string().url().default('http://localhost:3000'),
    ADMIN_APP_URL: z.string().url().default('http://localhost:3001'),
    CORS_ORIGINS: csv,
    TRUST_PROXY_HOPS: z.coerce.number().int().min(0).default(1),

    DATABASE_URL: z.string().min(1),
    REDIS_URL: z.string().default('redis://localhost:6379'),

    JWT_SECRET: z.string().min(16).default('dev-only-change-me-please-32chars!!'),
    JWT_TTL_SECONDS: z.coerce.number().int().default(60 * 60 * 24),
    ADMIN_JWT_TTL_SECONDS: z.coerce.number().int().default(60 * 60 * 12),
    DEV_AUTH_ENABLED: bool.default(false),
    METRICS_TOKEN: z.string().optional(),

    TELEGRAM_BOT_TOKEN: z.string().default('000000:dev-token'),
    TELEGRAM_BOT_USERNAME: z.string().default('MascotAIBot'),
    TELEGRAM_MINI_APP_SHORT_NAME: z.string().default('app'),
    TELEGRAM_WEBHOOK_SECRET: z.string().default('dev-webhook-secret'),
    TELEGRAM_API_BASE: z.string().url().default('https://api.telegram.org'),
    TELEGRAM_INIT_DATA_TTL_SECONDS: z.coerce.number().int().default(60 * 60 * 24),
    TELEGRAM_ADMIN_IDS: csv,
    TELEGRAM_NOTIFICATIONS_ENABLED: bool.default(true),
    TELEGRAM_SUPPORT_USERNAME: z.string().default('MascotAISupport'),

    STORAGE_DRIVER: z.enum(['s3', 'local']).default('local'),
    S3_ENDPOINT: z.string().optional(),
    S3_REGION: z.string().default('auto'),
    S3_ACCESS_KEY_ID: z.string().optional(),
    S3_SECRET_ACCESS_KEY: z.string().optional(),
    S3_PRIVATE_BUCKET: z.string().default('mascot-private'),
    S3_PUBLIC_BUCKET: z.string().default('mascot-public'),
    S3_FORCE_PATH_STYLE: bool.default(false),
    /** Public CDN origin bound to the public bucket (e.g. https://cdn.mascot.ai). */
    PUBLIC_CDN_URL: z.string().optional(),
    LOCAL_STORAGE_DIR: z.string().default('.storage'),
    SIGNED_URL_TTL_SECONDS: z.coerce.number().int().default(900),

    AI_IMAGE_PROVIDER: z.enum(['openai', 'flux', 'mock']).default('mock'),
    AI_VIDEO_PROVIDER: z.enum(['kling', 'runway', 'veo', 'mock']).default('mock'),
    FACE_ANALYSIS_PROVIDER: z.enum(['service', 'mock']).default('mock'),
    VISION_PROVIDER: z.enum(['openai', 'mock']).default('mock'),
    TTS_PROVIDER: z.enum(['openai', 'mock']).default('mock'),
    MODERATION_PROVIDER: z.enum(['openai', 'none']).default('none'),
    AVATAR_CANDIDATES: z.coerce.number().int().min(1).max(4).default(2),

    OPENAI_API_KEY: z.string().optional(),
    OPENAI_BASE_URL: z.string().url().default('https://api.openai.com/v1'),
    OPENAI_IMAGE_MODEL: z.string().default('gpt-image-1'),
    OPENAI_IMAGE_QUALITY: z.enum(['low', 'medium', 'high', 'auto']).default('high'),
    /** gpt-image-1 `input_fidelity`: "high" preserves faces from reference images much better. */
    OPENAI_IMAGE_INPUT_FIDELITY: z.enum(['high', 'low', 'none']).default('high'),
    OPENAI_VISION_MODEL: z.string().default('gpt-4.1-mini'),
    OPENAI_TEXT_MODEL: z.string().default('gpt-4.1-mini'),
    OPENAI_TTS_MODEL: z.string().default('gpt-4o-mini-tts'),
    OPENAI_MODERATION_MODEL: z.string().default('omni-moderation-latest'),

    BFL_API_KEY: z.string().optional(),
    BFL_BASE_URL: z.string().url().default('https://api.bfl.ai/v1'),
    FLUX_MODEL: z.string().default('flux-kontext-pro'),

    KLING_ACCESS_KEY: z.string().optional(),
    KLING_SECRET_KEY: z.string().optional(),
    KLING_BASE_URL: z.string().url().default('https://api-singapore.klingai.com'),
    KLING_MODEL: z.string().default('kling-v2-1'),

    RUNWAY_API_KEY: z.string().optional(),
    RUNWAY_BASE_URL: z.string().url().default('https://api.dev.runwayml.com/v1'),
    RUNWAY_MODEL: z.string().default('gen4_turbo'),
    RUNWAY_API_VERSION: z.string().default('2024-11-06'),

    GEMINI_API_KEY: z.string().optional(),
    GEMINI_BASE_URL: z.string().url().default('https://generativelanguage.googleapis.com/v1beta'),
    VEO_MODEL: z.string().default('veo-3.0-fast-generate-001'),

    FACE_SERVICE_URL: z.string().url().default('http://localhost:8000'),
    FACE_SERVICE_TOKEN: z.string().default('dev-face-token'),
    FACE_SERVICE_TIMEOUT_MS: z.coerce.number().int().default(20_000),
    BACKGROUND_REMOVAL: z.enum(['face-service', 'none']).default('none'),

    PHOTO_RETENTION_DAYS: z.coerce.number().int().min(1).default(30),
    AUTO_BAN_RISK_SCORE: z.coerce.number().int().default(100),

    WORKER_CONCURRENCY_AVATAR: z.coerce.number().int().default(4),
    WORKER_CONCURRENCY_STICKER: z.coerce.number().int().default(4),
    WORKER_CONCURRENCY_MEME: z.coerce.number().int().default(8),
    WORKER_CONCURRENCY_PFP: z.coerce.number().int().default(8),
    WORKER_CONCURRENCY_VIDEO: z.coerce.number().int().default(10),
    WORKER_CONCURRENCY_TELEGRAM: z.coerce.number().int().default(4),
    /** Global provider rate limits (requests per minute across all workers). */
    IMAGE_PROVIDER_RPM: z.coerce.number().int().default(120),
    VIDEO_PROVIDER_RPM: z.coerce.number().int().default(20),
  })
  .superRefine((env, ctx) => {
    if (env.NODE_ENV !== 'production') return;
    const fail = (path: string, message: string) => ctx.addIssue({ code: 'custom', path: [path], message });
    if (env.JWT_SECRET.startsWith('dev-only')) fail('JWT_SECRET', 'must be set in production');
    if (env.JWT_SECRET.length < 32) fail('JWT_SECRET', 'must be at least 32 characters in production');
    if (env.DEV_AUTH_ENABLED) fail('DEV_AUTH_ENABLED', 'must be false in production');
    if (env.TELEGRAM_BOT_TOKEN.includes('dev-token')) fail('TELEGRAM_BOT_TOKEN', 'must be set in production');
    if (env.TELEGRAM_WEBHOOK_SECRET.startsWith('dev-')) fail('TELEGRAM_WEBHOOK_SECRET', 'must be set in production');
    if (env.STORAGE_DRIVER !== 's3') fail('STORAGE_DRIVER', 'production requires s3 (Cloudflare R2)');
    if (env.STORAGE_DRIVER === 's3' && !env.PUBLIC_CDN_URL) fail('PUBLIC_CDN_URL', 'required with s3 storage');
    if (env.AI_IMAGE_PROVIDER === 'openai' && !env.OPENAI_API_KEY) fail('OPENAI_API_KEY', 'required');
    if (env.AI_IMAGE_PROVIDER === 'flux' && !env.BFL_API_KEY) fail('BFL_API_KEY', 'required');
  });

export type Env = z.infer<typeof EnvSchema>;

let cached: Env | undefined;

export function loadEnv(source: NodeJS.ProcessEnv = process.env): Env {
  if (cached && source === process.env) return cached;
  const parsed = EnvSchema.safeParse(source);
  if (!parsed.success) {
    const message = parsed.error.issues.map((i) => `  - ${i.path.join('.')}: ${i.message}`).join('\n');
    throw new Error(`Invalid environment configuration:\n${message}`);
  }
  if (source === process.env) cached = parsed.data;
  return parsed.data;
}
