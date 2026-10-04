import type {
  ApiError,
  AuthResponseDto,
  AvatarDto,
  GenerateAvatarInput,
  GenerateMemeInput,
  GeneratePfpInput,
  GenerateStickersInput,
  GenerateVideoInput,
  GenerationDto,
  InvoiceResponseDto,
  LibraryDto,
  MemeDto,
  PrepareShareInput,
  PrepareShareResponseDto,
  ProfilePictureDto,
  StarProductDto,
  StarProductId,
  StickerPackDto,
  StyleDto,
  StyleVariantInput,
  UpdateLookInput,
  UpdateProfileInput,
  UploadResponseDto,
  UserProfileDto,
  VideoDto,
} from '@mascot/shared';
import { env } from './env';
import { getT } from './i18n';

export class ApiRequestError extends Error {
  constructor(
    readonly status: number,
    readonly body: ApiError,
  ) {
    super(body.message);
    this.name = 'ApiRequestError';
  }

  get isPaywall(): boolean {
    return this.status === 402 && Boolean(this.body.paywall);
  }
}

/**
 * User-facing text for any request error, localized by the stable `code` the API returns.
 * English falls back to the server's own (often more specific) message.
 */
export function errorMessage(error: unknown, fallback?: string): string {
  const { t, locale } = getT();
  if (!(error instanceof ApiRequestError)) return fallback ?? t.errors.network;
  const codes = t.errors.codes as Record<string, string>;
  if (locale === 'en') return error.body.message || codes[error.body.code ?? ''] || fallback || t.errors.generic;
  return codes[error.body.code ?? ''] ?? fallback ?? t.errors.generic;
}

/** Server paywall copy is English-only; other locales rely on the localized headline. */
export function paywallMessage(error: ApiRequestError): string | null {
  return getT().locale === 'en' ? error.body.message : null;
}

/** Localized text for a stored failure `{ code, message }` (generations, renders). */
export function codedMessage(error: { code: string; message: string } | null | undefined, fallback?: string): string {
  const { t, locale } = getT();
  const generic = fallback ?? t.errors.generic;
  if (!error) return generic;
  const localized = (t.errors.codes as Record<string, string>)[error.code];
  return locale === 'en' ? error.message || localized || generic : (localized ?? generic);
}

let accessToken: string | null = null;
let onUnauthorized: (() => void) | null = null;

export function setAccessToken(token: string | null): void {
  accessToken = token;
}

export function setUnauthorizedHandler(handler: () => void): void {
  onUnauthorized = handler;
}

function idempotencyKey(): string {
  return `web-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

async function request<T>(method: string, path: string, body?: unknown, opts: { idempotent?: boolean } = {}): Promise<T> {
  const headers: Record<string, string> = {};
  if (accessToken) headers.Authorization = `Bearer ${accessToken}`;
  if (body !== undefined && !(body instanceof FormData)) headers['Content-Type'] = 'application/json';
  if (opts.idempotent) headers['Idempotency-Key'] = idempotencyKey();

  const res = await fetch(`${env.apiUrl}/v1${path}`, {
    method,
    headers,
    body: body === undefined ? undefined : body instanceof FormData ? body : JSON.stringify(body),
  });
  if (res.status === 204) return undefined as T;
  const text = await res.text();
  const data = text ? JSON.parse(text) : null;
  if (!res.ok) {
    if (res.status === 401) onUnauthorized?.();
    throw new ApiRequestError(res.status, data ?? { statusCode: res.status, error: 'Error', message: res.statusText });
  }
  return data as T;
}

type Launch<K extends string, V> = { generation: GenerationDto } & Record<K, V>;

export const api = {
  auth: {
    telegram: (initData: string) => request<AuthResponseDto>('POST', '/auth/telegram', { initData }),
    dev: (telegramId: number) => request<AuthResponseDto>('POST', '/auth/dev', { telegramId, username: `dev_${telegramId}` }),
  },
  profile: {
    get: () => request<UserProfileDto>('GET', '/profile'),
    update: (input: UpdateProfileInput) => request<UserProfileDto>('PATCH', '/profile', input),
    referrals: () => request<{ invited: number; activated: number; creditsEarned: number }>('GET', '/profile/referrals'),
    delete: () => request<{ status: string }>('DELETE', '/profile'),
  },
  upload: (files: File[], consent: boolean) => {
    const form = new FormData();
    if (consent) form.append('consent', 'true');
    files.forEach((f) => form.append('photos', f, f.name));
    return request<UploadResponseDto>('POST', '/upload', form);
  },
  styles: () => request<StyleDto[]>('GET', '/styles'),
  avatars: {
    list: () => request<AvatarDto[]>('GET', '/avatars'),
    get: (id: string) => request<AvatarDto>('GET', `/avatars/${id}`),
    generate: (input: GenerateAvatarInput) => request<Launch<'avatar', AvatarDto>>('POST', '/generate-avatar', input, { idempotent: true }),
    styleVariant: (id: string, input: StyleVariantInput) => request<GenerationDto>('POST', `/avatars/${id}/styles`, input, { idempotent: true }),
    updateLook: (id: string, input: UpdateLookInput) => request<AvatarDto>('PATCH', `/avatars/${id}/look`, input),
    setPrimary: (id: string, renderId: string) => request<AvatarDto>('POST', `/avatars/${id}/renders/${renderId}/primary`),
    hd: (id: string, renderId: string) => request<{ url: string }>('GET', `/avatars/${id}/renders/${renderId}/hd`),
    rename: (id: string, name: string) => request<AvatarDto>('PATCH', `/avatars/${id}`, { name }),
    remove: (id: string) => request<void>('DELETE', `/avatars/${id}`),
  },
  generations: {
    get: (id: string) => request<GenerationDto>('GET', `/generations/${id}`),
    cancel: (id: string) => request<GenerationDto>('POST', `/generations/${id}/cancel`),
  },
  stickers: {
    generate: (input: GenerateStickersInput) => request<Launch<'pack', StickerPackDto>>('POST', '/generate-stickers', input, { idempotent: true }),
    list: (avatarId?: string) => request<StickerPackDto[]>('GET', `/sticker-packs${avatarId ? `?avatarId=${avatarId}` : ''}`),
    get: (id: string) => request<StickerPackDto>('GET', `/sticker-packs/${id}`),
    publish: (id: string) => request<StickerPackDto>('POST', `/sticker-packs/${id}/publish`),
  },
  memes: {
    generate: (input: GenerateMemeInput) => request<Launch<'meme', MemeDto>>('POST', '/generate-meme', input, { idempotent: true }),
    list: (avatarId?: string) => request<MemeDto[]>('GET', `/memes${avatarId ? `?avatarId=${avatarId}` : ''}`),
    remove: (id: string) => request<void>('DELETE', `/memes/${id}`),
  },
  pfp: {
    generate: (input: GeneratePfpInput) => request<Launch<'pfp', ProfilePictureDto>>('POST', '/generate-pfp', input, { idempotent: true }),
    list: (avatarId?: string) => request<ProfilePictureDto[]>('GET', `/pfps${avatarId ? `?avatarId=${avatarId}` : ''}`),
    hd: (id: string) => request<{ url: string }>('GET', `/pfps/${id}/hd`),
  },
  videos: {
    generate: (input: GenerateVideoInput) => request<Launch<'video', VideoDto>>('POST', '/generate-video', input, { idempotent: true }),
    list: (avatarId?: string) => request<VideoDto[]>('GET', `/videos${avatarId ? `?avatarId=${avatarId}` : ''}`),
  },
  library: () => request<LibraryDto>('GET', '/library'),
  payments: {
    products: () => request<StarProductDto[]>('GET', '/payments/products'),
    invoice: (productId: StarProductId) => request<InvoiceResponseDto>('POST', '/payments/invoice', { productId }),
    cancel: () => request<{ status: string }>('POST', '/payments/subscription/cancel'),
    resume: () => request<{ status: string }>('POST', '/payments/subscription/resume'),
  },
  share: {
    prepare: (input: PrepareShareInput) => request<PrepareShareResponseDto>('POST', '/share/prepare', input),
  },
};
