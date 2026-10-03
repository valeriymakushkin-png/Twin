/**
 * Mascot AI load test (k6).
 *
 * Simulates real Mini App traffic with Telegram-signed initData (each virtual user is a
 * distinct Telegram account), against a STAGING stack running the mock/stub AI providers:
 *
 *   browse  — returning users opening the app: auth → profile, styles, mascots, library
 *   create  — new users doing the core loop: consent upload (6 selfies) → generate mascot →
 *             poll progress → 5-sticker pack → meme; measures end-to-end latency
 *
 * Target from the roadmap: 5,000 mascots/hour (≈ 1.4/s) with p95 mascot latency ≤ 90 s,
 * generation success ≥ 97 %, API error rate < 1 %, p95 read latency < 300 ms.
 *
 *   k6 run infra/loadtest/k6-mascot.js \
 *     -e API_URL=https://api.staging.mascot.ai -e BOT_TOKEN=<staging bot token> \
 *     -e MASCOTS_PER_HOUR=5000 -e DURATION=30m [-e RAMP=5m -e BROWSE_RPS=60]
 *
 *   # quick local smoke against `pnpm dev` (mock providers):
 *   k6 run infra/loadtest/k6-mascot.js -e PROFILE=smoke
 *
 * Staging prerequisites: AI_*_PROVIDER=mock (or stubs), FACE_ANALYSIS_PROVIDER=mock,
 * TELEGRAM_NOTIFICATIONS_ENABLED=false, and the load generators' IPs in
 * RATE_LIMIT_EXEMPT_IPS (per-IP auth limits would otherwise throttle the test).
 * Never point this at production: it creates real users and generations.
 */
import { check, sleep } from 'k6';
import crypto from 'k6/crypto';
import exec from 'k6/execution';
import http from 'k6/http';
import { Counter, Rate, Trend } from 'k6/metrics';

const API = (__ENV.API_URL || 'http://localhost:4000').replace(/\/$/, '');
const BOT_TOKEN = __ENV.BOT_TOKEN || '000000:dev-token';
const PROFILE = __ENV.PROFILE || 'load';
const MASCOTS_PER_HOUR = Number(__ENV.MASCOTS_PER_HOUR || 5000);
const DURATION = __ENV.DURATION || '30m';
const RAMP = __ENV.RAMP || '5m';
const BROWSE_RPS = Number(__ENV.BROWSE_RPS || 60);
const POLL_TIMEOUT_S = Number(__ENV.POLL_TIMEOUT_S || 240);
// Random per-run offset keeps Telegram ids unique across runs (fresh FREE users).
const ID_BASE = 800_000_000 + Math.floor(Math.random() * 50_000_000);

const PHOTOS = [0, 1, 2, 3, 4, 5].map((i) => open(`./fixtures/selfie-${i}.jpg`, 'b'));

/* ----------------------------- metrics ----------------------------- */

const mascotLatency = new Trend('mascot_e2e_seconds');
const stickersLatency = new Trend('stickers_e2e_seconds');
const generationOk = new Rate('generation_success');
const mascotsCreated = new Counter('mascots_created');
const paywalls = new Counter('paywall_responses');

/* ----------------------------- scenarios ----------------------------- */

const createRatePerMin = Math.max(1, Math.round(MASCOTS_PER_HOUR / 60));

const PROFILES = {
  smoke: {
    browse: { executor: 'constant-arrival-rate', rate: 5, timeUnit: '1s', duration: '1m', preAllocatedVUs: 20, exec: 'browse' },
    create: { executor: 'per-vu-iterations', vus: 2, iterations: 1, maxDuration: '5m', exec: 'create' },
  },
  load: {
    browse: {
      executor: 'ramping-arrival-rate',
      exec: 'browse',
      startRate: 10,
      timeUnit: '1s',
      preAllocatedVUs: 100,
      maxVUs: 600,
      stages: [
        { target: BROWSE_RPS, duration: RAMP },
        { target: BROWSE_RPS, duration: DURATION },
        { target: 0, duration: '2m' },
      ],
    },
    create: {
      executor: 'ramping-arrival-rate',
      exec: 'create',
      startRate: 1,
      timeUnit: '1m',
      // Each iteration lives ~1–3 min (polling), so VUs ≈ rate × duration.
      preAllocatedVUs: Math.ceil(createRatePerMin * 2),
      maxVUs: Math.ceil(createRatePerMin * 5),
      stages: [
        { target: createRatePerMin, duration: RAMP },
        { target: createRatePerMin, duration: DURATION },
        { target: 0, duration: '2m' },
      ],
    },
  },
  spike: {
    create: {
      executor: 'ramping-arrival-rate',
      exec: 'create',
      startRate: createRatePerMin,
      timeUnit: '1m',
      preAllocatedVUs: createRatePerMin * 5,
      maxVUs: createRatePerMin * 12,
      stages: [
        { target: createRatePerMin, duration: '3m' },
        { target: createRatePerMin * 10, duration: '1m' }, // creator-campaign burst (10×)
        { target: createRatePerMin * 10, duration: '5m' },
        { target: createRatePerMin, duration: '5m' }, // recovery: queue must drain
      ],
    },
  },
};

export const options = {
  scenarios: PROFILES[PROFILE],
  thresholds: {
    http_req_failed: ['rate<0.01'],
    'http_req_duration{kind:read}': ['p(95)<300', 'p(99)<800'],
    'http_req_duration{kind:write}': ['p(95)<1500'],
    'http_req_duration{kind:upload}': ['p(95)<4000'],
    mascot_e2e_seconds: ['p(95)<90'],
    generation_success: ['rate>0.97'],
    checks: ['rate>0.98'],
  },
  summaryTrendStats: ['avg', 'med', 'p(90)', 'p(95)', 'p(99)', 'max'],
};

/* ----------------------------- Telegram initData ----------------------------- */

/**
 * Same algorithm Telegram uses for Mini App launch params:
 *   secret = HMAC_SHA256(key = "WebAppData", data = bot_token)
 *   hash   = hex(HMAC_SHA256(key = secret, data = data_check_string))
 * where data_check_string is every field except `hash`, sorted, as `key=value` lines.
 */
function signInitData(telegramId, languageCode) {
  const fields = {
    auth_date: String(Math.floor(Date.now() / 1000)),
    query_id: `AAk6${telegramId}`,
    user: JSON.stringify({
      id: telegramId,
      first_name: 'Load',
      last_name: `Test ${telegramId % 1000}`,
      username: `k6_${telegramId}`,
      language_code: languageCode,
      allows_write_to_pm: false,
    }),
    start_param: 'src_k6',
  };
  const dataCheckString = Object.keys(fields)
    .sort()
    .map((k) => `${k}=${fields[k]}`)
    .join('\n');
  const secret = crypto.hmac('sha256', 'WebAppData', BOT_TOKEN, 'binary');
  const hash = crypto.hmac('sha256', secret, dataCheckString, 'hex');
  return `${Object.keys(fields)
    .map((k) => `${k}=${encodeURIComponent(fields[k])}`)
    .join('&')}&hash=${hash}`;
}

/* ----------------------------- helpers ----------------------------- */

function json(res) {
  try {
    return res.json();
  } catch (_) {
    return null;
  }
}

function headers(token, extra) {
  return Object.assign({ Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }, extra || {});
}

function login(telegramId, languageCode) {
  const res = http.post(`${API}/v1/auth/telegram`, JSON.stringify({ initData: signInitData(telegramId, languageCode) }), {
    headers: { 'Content-Type': 'application/json' },
    tags: { kind: 'write', name: 'auth' },
  });
  if (!check(res, { 'auth 200': (r) => r.status === 200 })) return null;
  return json(res).accessToken;
}

function get(token, path, name) {
  return http.get(`${API}${path}`, { headers: headers(token), tags: { kind: 'read', name: name || path } });
}

function post(token, path, body, name) {
  return http.post(`${API}${path}`, JSON.stringify(body), {
    headers: headers(token, { 'Idempotency-Key': `k6-${exec.vu.idInTest}-${exec.vu.iterationInScenario}-${name}` }),
    tags: { kind: 'write', name: name || path },
  });
}

/** Polls a generation like the Mini App does (adaptive 1.5–4 s); returns the final DTO. */
function waitForGeneration(token, id) {
  const started = Date.now();
  let delay = 1.5;
  while ((Date.now() - started) / 1000 < POLL_TIMEOUT_S) {
    const res = get(token, `/v1/generations/${id}`, 'generation');
    const g = json(res);
    if (g && (g.status === 'SUCCEEDED' || g.status === 'FAILED' || g.status === 'CANCELED')) return g;
    sleep(delay);
    delay = Math.min(4, delay * 1.3);
  }
  return { status: 'TIMEOUT' };
}

/* ----------------------------- returning users ----------------------------- */

// Returning users reuse a small pool of accounts so the read path sees warm data. A VU keeps
// its session for a few "app opens" (the Mini App caches its JWT), then signs in again.
const BROWSE_POOL = 500;
const OPENS_PER_SESSION = 10;
let session = null;

export function browse() {
  if (!session || session.opens >= OPENS_PER_SESSION) {
    const telegramId = ID_BASE + 90_000_000 + (exec.vu.idInTest % BROWSE_POOL);
    const token = login(telegramId, telegramId % 3 === 0 ? 'ru' : 'en');
    if (!token) {
      sleep(5);
      return;
    }
    session = { token, opens: 0 };
  }
  session.opens++;
  const token = session.token;
  const responses = http.batch([
    ['GET', `${API}/v1/profile`, null, { headers: headers(token), tags: { kind: 'read', name: 'profile' } }],
    ['GET', `${API}/v1/styles`, null, { headers: headers(token), tags: { kind: 'read', name: 'styles' } }],
    ['GET', `${API}/v1/avatars`, null, { headers: headers(token), tags: { kind: 'read', name: 'avatars' } }],
  ]);
  check(responses, { 'browse reads 200': (rs) => rs.every((r) => r.status === 200) });
  sleep(1 + Math.random() * 2); // user looks around
  check(get(token, '/v1/library', 'library'), { 'library 200': (r) => r.status === 200 });
  check(get(token, '/v1/payments/products', 'products'), { 'products 200': (r) => r.status === 200 });
}

/* ----------------------------- new users: the core loop ----------------------------- */

export function create() {
  const telegramId = ID_BASE + exec.scenario.iterationInTest;
  const token = login(telegramId, telegramId % 2 ? 'ru' : 'en');
  if (!token) {
    generationOk.add(false);
    return;
  }

  // 1. Consent + upload (two batches, like the Mini App's progressive upload).
  const photoIds = [];
  for (const batch of [[0, 1, 2], [3, 4, 5]]) {
    const { body, contentType } = multipart({ consent: 'true' }, batch.map((i) => ({ field: 'photos', name: `k6-${telegramId}-${i}.jpg`, data: PHOTOS[i] })));
    const res = http.post(`${API}/v1/upload`, body, {
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': contentType },
      tags: { kind: 'upload', name: 'upload' },
    });
    const data = json(res);
    check(res, { 'upload 201': (r) => r.status === 201 || r.status === 200 });
    (data && data.photos ? data.photos : []).filter((p) => p.status !== 'REJECTED').forEach((p) => photoIds.push(p.id));
  }
  if (photoIds.length < 5) {
    generationOk.add(false);
    return;
  }
  sleep(2 + Math.random() * 3); // picks a style

  // 2. Generate the mascot and follow progress.
  const started = Date.now();
  const launch = post(token, '/v1/generate-avatar', { photoIds, styleSlug: 'pixar', name: `K6 ${telegramId % 1000}` }, 'generate-avatar');
  if (launch.status === 402) paywalls.add(1);
  if (!check(launch, { 'avatar queued': (r) => r.status === 201 })) {
    generationOk.add(false);
    return;
  }
  const { generation, avatar } = json(launch);
  const done = waitForGeneration(token, generation.id);
  const ok = done.status === 'SUCCEEDED';
  generationOk.add(ok);
  if (!ok) return;
  mascotLatency.add((Date.now() - started) / 1000);
  mascotsCreated.add(1);
  check(get(token, `/v1/avatars/${avatar.id}`, 'avatar'), { 'avatar ready': (r) => json(r) && json(r).status === 'READY' });
  sleep(3 + Math.random() * 5); // admires the result

  // 3. Free sticker pack (5 stickers).
  const stickersStarted = Date.now();
  const stickers = post(token, '/v1/generate-stickers', { avatarId: avatar.id }, 'generate-stickers');
  if (check(stickers, { 'stickers queued': (r) => r.status === 201 })) {
    const packDone = waitForGeneration(token, json(stickers).generation.id);
    generationOk.add(packDone.status === 'SUCCEEDED');
    if (packDone.status === 'SUCCEEDED') stickersLatency.add((Date.now() - stickersStarted) / 1000);
  }

  // 4. A meme (reuses sticker renders when possible).
  const meme = post(token, '/v1/generate-meme', { avatarId: avatar.id, format: 'classic', text: 'me at 9am | me after one meeting' }, 'generate-meme');
  if (check(meme, { 'meme queued': (r) => r.status === 201 })) {
    generationOk.add(waitForGeneration(token, json(meme).generation.id).status === 'SUCCEEDED');
  }
}

/**
 * Hand-built multipart body: k6's object form cannot repeat a field name, and the API
 * expects every file under the same `photos` field (like a browser FormData).
 */
function multipart(fields, files) {
  const boundary = `----k6mascot${Math.random().toString(16).slice(2)}`;
  const parts = [];
  const text = (s) => {
    const bytes = new Uint8Array(s.length);
    for (let i = 0; i < s.length; i++) bytes[i] = s.charCodeAt(i) & 0xff;
    return bytes;
  };
  for (const [name, value] of Object.entries(fields)) {
    parts.push(text(`--${boundary}\r\nContent-Disposition: form-data; name="${name}"\r\n\r\n${value}\r\n`));
  }
  for (const f of files) {
    parts.push(text(`--${boundary}\r\nContent-Disposition: form-data; name="${f.field}"; filename="${f.name}"\r\nContent-Type: image/jpeg\r\n\r\n`));
    parts.push(new Uint8Array(f.data));
    parts.push(text('\r\n'));
  }
  parts.push(text(`--${boundary}--\r\n`));
  const size = parts.reduce((n, p) => n + p.length, 0);
  const out = new Uint8Array(size);
  let offset = 0;
  for (const p of parts) {
    out.set(p, offset);
    offset += p.length;
  }
  return { body: out.buffer, contentType: `multipart/form-data; boundary=${boundary}` };
}

export function handleSummary(data) {
  const m = (name, stat) => (data.metrics[name] && data.metrics[name].values[stat] !== undefined ? data.metrics[name].values[stat] : null);
  const mascots = m('mascots_created', 'count') || 0;
  const durationS = data.state.testRunDurationMs / 1000;
  const lines = [
    `Mascot AI load test (${PROFILE}) — ${API}`,
    `  mascots created      ${mascots} (${((mascots / durationS) * 3600).toFixed(0)}/hour)`,
    `  mascot e2e p95       ${(m('mascot_e2e_seconds', 'p(95)') || 0).toFixed(1)} s`,
    `  stickers e2e p95     ${(m('stickers_e2e_seconds', 'p(95)') || 0).toFixed(1)} s`,
    `  generation success   ${((m('generation_success', 'rate') || 0) * 100).toFixed(1)} %`,
    `  read p95             ${(m('http_req_duration{kind:read}', 'p(95)') || 0).toFixed(0)} ms`,
    `  HTTP errors          ${((m('http_req_failed', 'rate') || 0) * 100).toFixed(2)} %`,
    `  paywall responses    ${m('paywall_responses', 'count') || 0}`,
    '',
  ];
  return { stdout: lines.join('\n'), 'loadtest-summary.json': JSON.stringify(data, null, 2) };
}
