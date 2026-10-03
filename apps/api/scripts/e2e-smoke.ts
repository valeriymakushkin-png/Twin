/**
 * End-to-end smoke test against a running API + worker (mock AI providers).
 *
 * It starts a fake Telegram Bot API on MOCK_TELEGRAM_PORT, so the API/worker must be
 * launched with TELEGRAM_API_BASE=http://localhost:4099 and the same TELEGRAM_BOT_TOKEN /
 * TELEGRAM_WEBHOOK_SECRET as below. Covers: auth → upload → avatar pipeline → stickers
 * (FREE quota + paywall) → publish to Telegram → meme → PFP → Stars payment via webhook
 * → Premium video → style variant → share → EN/RU localization → admin analytics.
 *
 *   API_URL=http://localhost:4000 pnpm --filter @mascot/api test:e2e
 */
import { createServer } from 'node:http';
import sharp from 'sharp';
import { renderMascotSvg, SHOWCASE_DNA } from '@mascot/shared';
import { signInitData } from '../src/modules/telegram/init-data';

const API = process.env.API_URL ?? 'http://localhost:4000';
const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN ?? '000000:dev-token';
const WEBHOOK_SECRET = process.env.TELEGRAM_WEBHOOK_SECRET ?? 'dev-webhook-secret';
const MOCK_PORT = Number(process.env.MOCK_TELEGRAM_PORT ?? 4099);
const TG_USER_ID = 700000000 + Math.floor(Math.random() * 1_000_000);

const telegramCalls: Array<{ method: string; body: string }> = [];
let failures = 0;

function check(condition: unknown, label: string): void {
  if (condition) console.log(`  ✔ ${label}`);
  else {
    failures++;
    console.error(`  ✘ ${label}`);
  }
}

/* ----------------------------- fake Telegram Bot API ----------------------------- */

function startMockTelegram(): Promise<void> {
  const results: Record<string, unknown> = {
    createInvoiceLink: 'https://t.me/$mock_invoice',
    answerPreCheckoutQuery: true,
    sendMessage: { message_id: 1, chat: { id: TG_USER_ID, type: 'private' }, date: 0 },
    sendPhoto: { message_id: 2, chat: { id: TG_USER_ID, type: 'private' }, date: 0 },
    uploadStickerFile: { file_id: `file_${Date.now()}`, file_unique_id: 'u' },
    createNewStickerSet: true,
    addStickerToSet: true,
    getStickerSet: { name: 'x', stickers: [] },
    savePreparedInlineMessage: { id: 'prepared_123', expiration_date: Math.floor(Date.now() / 1000) + 3600 },
    editUserStarSubscription: true,
    refundStarPayment: true,
  };
  return new Promise((resolve) => {
    createServer((req, res) => {
      const method = (req.url ?? '').split('/').pop() ?? '';
      const chunks: Buffer[] = [];
      req.on('data', (c: Buffer) => chunks.push(c));
      req.on('end', () => {
        telegramCalls.push({ method, body: Buffer.concat(chunks).toString('utf8').slice(0, 2000) });
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ ok: true, result: method === 'uploadStickerFile' ? { file_id: `file_${telegramCalls.length}`, file_unique_id: 'u' } : (results[method] ?? true) }));
      });
    }).listen(MOCK_PORT, resolve);
  });
}

/* ----------------------------- HTTP helpers ----------------------------- */

let token = '';

async function api<T = any>(method: string, path: string, body?: unknown, extra: Record<string, string> = {}): Promise<{ status: number; data: T }> {
  const isForm = body instanceof FormData;
  const res = await fetch(`${API}${path}`, {
    method,
    headers: {
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(body && !isForm ? { 'Content-Type': 'application/json' } : {}),
      ...extra,
    },
    body: body ? (isForm ? (body as FormData) : JSON.stringify(body)) : undefined,
  });
  const text = await res.text();
  return { status: res.status, data: (text ? JSON.parse(text) : null) as T };
}

async function waitFor(generationId: string, timeoutMs = 90_000): Promise<any> {
  const start = Date.now();
  let last: any;
  while (Date.now() - start < timeoutMs) {
    const { data } = await api('GET', `/v1/generations/${generationId}`);
    last = data;
    if (data.status === 'SUCCEEDED' || data.status === 'FAILED' || data.status === 'CANCELED') return data;
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error(`generation ${generationId} timed out (last: ${JSON.stringify(last)})`);
}

async function webhook(update: unknown): Promise<number> {
  const res = await fetch(`${API}/v1/telegram/webhook`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'X-Telegram-Bot-Api-Secret-Token': WEBHOOK_SECRET },
    body: JSON.stringify(update),
  });
  return res.status;
}

async function selfie(i: number): Promise<Blob> {
  const tint = ['#c9d6df', '#d6c9df', '#dfd6c9', '#c9dfd0', '#dfc9cf', '#cfcfdf', '#e0e0c0'][i % 7]!;
  const svg = renderMascotSvg(SHOWCASE_DNA[2]!.dna, { size: 800, emotion: i % 2 ? 'happy' : 'neutral', background: [tint, '#52616b'] });
  const jpeg = await sharp(Buffer.from(svg)).jpeg({ quality: 88 }).toBuffer();
  return new Blob([new Uint8Array(jpeg)], { type: 'image/jpeg' });
}

/* ----------------------------- scenario ----------------------------- */

async function main(): Promise<void> {
  await startMockTelegram();
  console.log(`Mock Telegram Bot API on :${MOCK_PORT}, API ${API}, tg user ${TG_USER_ID}\n`);

  console.log('1. Health & auth');
  check((await fetch(`${API}/health/ready`)).ok, 'API ready (db + redis)');
  const badAuth = await api('POST', '/v1/auth/telegram', { initData: 'auth_date=1&hash=' + '0'.repeat(64) });
  check(badAuth.status === 401, 'forged initData rejected (401)');
  const initData = signInitData(
    {
      auth_date: String(Math.floor(Date.now() / 1000)),
      query_id: 'AAE2e',
      user: JSON.stringify({ id: TG_USER_ID, first_name: 'Jay', username: `jay_${TG_USER_ID}`, language_code: 'en', allows_write_to_pm: true }),
      start_param: 'src_e2e',
    },
    BOT_TOKEN,
  );
  const auth = await api('POST', '/v1/auth/telegram', { initData });
  check(auth.status === 200 && auth.data.accessToken, 'signed initData → access token');
  token = auth.data.accessToken;
  const profile = await api('GET', '/v1/profile');
  check(profile.data.plan === 'FREE' && profile.data.usage.stickersRemaining === 5, 'profile: FREE plan, 5 free stickers');

  console.log('\n2. Upload');
  const noConsent = new FormData();
  noConsent.append('photos', await selfie(0), 'a.jpg');
  check((await api('POST', '/v1/upload', noConsent)).status === 428, 'biometric consent required before first upload');
  const form = new FormData();
  form.append('consent', 'true');
  for (let i = 0; i < 6; i++) form.append('photos', await selfie(i), `selfie-${i}.jpg`);
  const upload = await api('POST', '/v1/upload', form);
  check(upload.status === 201 && upload.data.photos.length >= 5, `uploaded ${upload.data.photos?.length} photos (${upload.data.rejected?.length} rejected)`);
  check(upload.data.photos.some((p: any) => p.pose === 'LEFT') && upload.data.photos.every((p: any) => p.status === 'ACCEPTED'), 'face analysis classified poses');

  console.log('\n3. Avatar pipeline');
  const photoIds = upload.data.photos.map((p: any) => p.id);
  const premiumStyle = await api('POST', '/v1/generate-avatar', { photoIds, styleSlug: 'cyberpunk' });
  check(premiumStyle.status === 402 && premiumStyle.data.paywall?.reason === 'PREMIUM_STYLE', 'premium style paywalled for FREE (402)');
  const idem = `e2e-${TG_USER_ID}-avatar`;
  const gen = await api('POST', '/v1/generate-avatar', { photoIds, styleSlug: 'pixar', name: 'Jay' }, { 'Idempotency-Key': idem });
  check(gen.status === 201 && gen.data.avatar.status === 'PROCESSING', 'avatar generation queued');
  const replay = await api('POST', '/v1/generate-avatar', { photoIds, styleSlug: 'pixar', name: 'Jay' }, { 'Idempotency-Key': idem });
  check(replay.data.generation?.id === gen.data.generation.id, 'idempotency key replays the same generation');
  const done = await waitFor(gen.data.generation.id);
  check(done.status === 'SUCCEEDED' && done.progress === 100, `pipeline finished: ${done.status} (${done.error?.message ?? 'ok'})`);
  const avatarId = gen.data.avatar.id;
  const avatar = await api('GET', `/v1/avatars/${avatarId}`);
  check(avatar.data.status === 'READY' && avatar.data.dna?.faceShape && avatar.data.imageUrl, `avatar READY with DNA (face: ${avatar.data.dna?.faceShape}, hair: ${avatar.data.dna?.hairStyle})`);
  check((await fetch(avatar.data.imageUrl)).ok && (await fetch(avatar.data.cardUrl)).ok, 'render + character card served');
  const second = await api('POST', '/v1/generate-avatar', { photoIds, styleSlug: 'anime' });
  check(second.status === 402 && second.data.paywall?.reason === 'AVATAR_LIMIT', 'second mascot paywalled for FREE (402)');

  console.log('\n4. Stickers');
  const stickers = await api('POST', '/v1/generate-stickers', { avatarId });
  check(stickers.status === 201 && stickers.data.pack.stickers.length === 5, 'FREE pack gets the 5 free emotions');
  const stickersDone = await waitFor(stickers.data.generation.id);
  check(stickersDone.status === 'SUCCEEDED' && stickersDone.outputUrls.length === 5, '5 stickers generated');
  const more = await api('POST', '/v1/generate-stickers', { avatarId, emotions: ['sigma'] });
  check(more.status === 402 && more.data.paywall?.reason === 'STICKER_LIMIT', 'sticker allowance exhausted → 402');
  const publish = await api('POST', `/v1/sticker-packs/${stickers.data.pack.id}/publish`);
  check(publish.data.status === 'PUBLISHING', 'publish to Telegram queued');
  let pack: any;
  for (let i = 0; i < 40; i++) {
    pack = (await api('GET', `/v1/sticker-packs/${stickers.data.pack.id}`)).data;
    if (pack.status === 'PUBLISHED') break;
    await new Promise((r) => setTimeout(r, 300));
  }
  check(pack.status === 'PUBLISHED' && pack.addStickersUrl?.startsWith('https://t.me/addstickers/'), `sticker set created: ${pack.addStickersUrl}`);
  check(telegramCalls.filter((c) => c.method === 'uploadStickerFile').length === 5, 'uploadStickerFile ×5 + createNewStickerSet');

  console.log('\n5. Meme & profile picture');
  const meme = await api('POST', '/v1/generate-meme', { avatarId, format: 'classic', text: 'me at 9am | me after one meeting' });
  const memeDone = await waitFor(meme.data.generation.id);
  check(memeDone.status === 'SUCCEEDED', 'meme generated (reuses sticker render when possible)');
  const linkMeme = await api('POST', '/v1/generate-meme', { avatarId, format: 'pov', text: 'visit spam.com now' });
  check(linkMeme.status === 400 && linkMeme.data.code === 'TEXT_POLICY', 'links in meme text blocked by moderation');
  const pfp = await api('POST', '/v1/generate-pfp', { avatarId, backgroundKey: 'aurora' });
  check((await waitFor(pfp.data.generation.id)).status === 'SUCCEEDED', 'composite profile picture generated');
  const aiPfp = await api('POST', '/v1/generate-pfp', { avatarId, backgroundKey: 'space', mode: 'ai' });
  check(aiPfp.status === 402, 'AI scene PFP paywalled for FREE');

  console.log('\n6. Telegram Stars payment');
  const video402 = await api('POST', '/v1/generate-video', { avatarId, template: 'dancing' });
  check(video402.status === 402 && video402.data.paywall?.reason === 'VIDEO_PREMIUM_ONLY', 'video is Premium-only (402)');
  const invoice = await api('POST', '/v1/payments/invoice', { productId: 'premium_monthly' });
  check(invoice.status === 201 && invoice.data.invoiceUrl, 'invoice link created (XTR, 30-day subscription)');
  const createCall = telegramCalls.find((c) => c.method === 'createInvoiceLink');
  check(createCall?.body.includes('"subscription_period":2592000') && createCall.body.includes('"currency":"XTR"'), 'createInvoiceLink sent subscription_period + XTR');
  check((await webhook({ update_id: 1 })) === 200 && (await fetch(`${API}/v1/telegram/webhook`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: '{}' })).status === 403, 'webhook rejects missing secret');
  const updateBase = Math.floor(Math.random() * 1e9);
  await webhook({
    update_id: updateBase + 1,
    pre_checkout_query: { id: 'pcq1', from: { id: TG_USER_ID, first_name: 'Jay' }, currency: 'XTR', total_amount: 450, invoice_payload: invoice.data.paymentId },
  });
  const answer = telegramCalls.filter((c) => c.method === 'answerPreCheckoutQuery').pop();
  check(answer?.body.includes('"ok":true'), 'pre_checkout_query approved');
  const successful = {
    update_id: updateBase + 2,
    message: {
      message_id: 10,
      date: Math.floor(Date.now() / 1000),
      chat: { id: TG_USER_ID, type: 'private' },
      from: { id: TG_USER_ID, first_name: 'Jay' },
      successful_payment: {
        currency: 'XTR',
        total_amount: 450,
        invoice_payload: invoice.data.paymentId,
        subscription_expiration_date: Math.floor(Date.now() / 1000) + 30 * 86400,
        is_recurring: true,
        is_first_recurring: true,
        telegram_payment_charge_id: `charge_${updateBase}`,
        provider_payment_charge_id: `prov_${updateBase}`,
      },
    },
  };
  await webhook(successful);
  await webhook({ ...successful, update_id: updateBase + 3 }); // duplicate delivery with new update id
  const premium = await api('GET', '/v1/profile');
  check(premium.data.plan === 'PREMIUM' && premium.data.subscription?.isRecurring, 'user upgraded to PREMIUM with recurring subscription');
  const payments = await api('GET', '/v1/payments');
  check(payments.data.length === 1, 'duplicate successful_payment is idempotent');

  console.log('\n7. Premium features');
  const video = await api('POST', '/v1/generate-video', { avatarId, template: 'talking', script: 'Hey! This is my AI mascot talking.', aspectRatio: '9:16' });
  check(video.status === 201, 'talking video queued');
  const videoDone = await waitFor(video.data.generation.id, 180_000);
  check(videoDone.status === 'SUCCEEDED', `video rendered (${videoDone.error?.message ?? 'mp4 + voice-over'})`);
  const videos = await api('GET', `/v1/videos?avatarId=${avatarId}`);
  check(videos.data[0]?.videoUrl && videos.data[0]?.durationSec > 1, `video served (${videos.data[0]?.durationSec?.toFixed?.(1)}s)`);
  const variant = await api('POST', `/v1/avatars/${avatarId}/styles`, { styleSlug: 'cyberpunk', outfitKey: 'techwear' });
  check(variant.status === 201, 'premium style variant allowed after upgrade');
  check((await waitFor(variant.data.id)).status === 'SUCCEEDED', 'style variant rendered from stored DNA');
  const updated = await api('GET', `/v1/avatars/${avatarId}`);
  check(updated.data.renders.length === 2 && updated.data.styleSlug === 'cyberpunk', 'new render became primary');
  const hd = await api('GET', `/v1/avatars/${avatarId}/renders/${updated.data.renders[0].id}/hd`);
  check(hd.status === 200 && hd.data.url, 'HD transparent export available for Premium');
  const share = await api('POST', '/v1/share/prepare', { kind: 'avatar', id: avatarId });
  check(share.data.preparedMessageId === 'prepared_123' && share.data.shareUrl.includes('startapp=ref_'), 'share prepared with referral deep link');
  const cancel = await api('POST', '/v1/payments/subscription/cancel');
  check(cancel.status === 200, 'subscription cancel → editUserStarSubscription');

  console.log('\n8. Localization');
  const sentTexts = async (needle: string, timeoutMs = 10_000) => {
    const deadline = Date.now() + timeoutMs;
    while (Date.now() < deadline) {
      if (telegramCalls.some((c) => (c.method === 'sendMessage' || c.method === 'sendPhoto') && c.body.includes(needle))) return true;
      await new Promise((r) => setTimeout(r, 250));
    }
    return false;
  };
  check(await sentTexts('is ready'), 'notifications rendered in English for an "en" Telegram client');
  const ru = await api('PATCH', '/v1/profile', { locale: 'ru' });
  check(ru.status === 200 && ru.data.locale === 'ru', 'language override saved (ru)');
  await webhook({ update_id: Date.now() % 1_000_000_000, message: { message_id: 9, date: Math.floor(Date.now() / 1000), chat: { id: TG_USER_ID, type: 'private' }, from: { id: TG_USER_ID, is_bot: false, first_name: 'Jay', language_code: 'en' }, text: '/help' } });
  check(await sentTexts('Команды'), 'bot command answered in the chosen language (ru)');
  const invoiceRu = await api('POST', '/v1/payments/invoice', { productId: 'credits_60' });
  check(invoiceRu.status === 201 && telegramCalls.some((c) => c.method === 'createInvoiceLink' && c.body.includes('60 кредитов')), 'Stars invoice title localized');
  const memeRu = await api('POST', '/v1/generate-meme', { avatarId, format: 'nobody-me', text: 'Я в 9 утра | Я после планёрки' });
  check(memeRu.status === 201 && (await waitFor(memeRu.data.generation.id)).status === 'SUCCEEDED', 'Cyrillic meme rendered with Russian template captions');
  const reset = await api('PATCH', '/v1/profile', { locale: null });
  check(reset.status === 200 && reset.data.locale === null, 'language reset to follow Telegram');

  console.log('\n9. Admin');
  const savedToken = token;
  token = '';
  const adminLogin = await api('POST', '/v1/auth/dev', { telegramId: 900000001, username: 'ops', admin: true });
  token = adminLogin.data.accessToken;
  const overview = await api('GET', '/v1/admin/analytics/overview?days=7');
  check(overview.status === 200 && overview.data.users.total >= 1 && overview.data.revenue.stars >= 450, `admin overview (users ${overview.data.users?.total}, ⭐ ${overview.data.revenue?.stars}, DAU ${overview.data.users?.dau})`);
  for (const path of ['users', 'revenue', 'generations']) {
    check((await api('GET', `/v1/admin/analytics/${path}?days=7`)).status === 200, `admin ${path} analytics`);
  }
  check((await api('GET', '/v1/admin/users?q=jay_')).data.items.length >= 1, 'admin user search');
  token = savedToken;
  check((await api('GET', '/v1/admin/analytics/overview')).status === 403, 'app token cannot access admin API');

  console.log(`\n${failures === 0 ? '✅ All checks passed' : `❌ ${failures} check(s) failed`}`);
  process.exit(failures === 0 ? 0 : 1);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
