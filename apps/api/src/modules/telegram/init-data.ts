import { createHash, createHmac } from 'node:crypto';
import { safeEqualHex } from '../../common/utils/crypto';
import type { TgUser } from './telegram.types';

export interface ValidatedInitData {
  user: TgUser;
  authDate: number;
  queryId?: string;
  startParam?: string;
  chatType?: string;
  chatInstance?: string;
}

export class InitDataError extends Error {}

/**
 * Validates Telegram Mini App initData (https://core.telegram.org/bots/webapps#validating-data-received-via-the-mini-app).
 *
 *   secret_key = HMAC_SHA256(key="WebAppData", message=bot_token)
 *   hash       = hex(HMAC_SHA256(key=secret_key, message=data_check_string))
 *
 * data_check_string = every field except `hash`, sorted by key, "key=value" joined by "\n".
 * The `signature` field (Ed25519, for third-party validation) is part of the data-check-string.
 */
export function validateInitData(
  initData: string,
  botToken: string,
  maxAgeSeconds: number,
  nowSeconds = Math.floor(Date.now() / 1000),
): ValidatedInitData {
  const params = new URLSearchParams(initData);
  const hash = params.get('hash');
  if (!hash || !/^[a-f0-9]{64}$/.test(hash)) throw new InitDataError('Missing or malformed hash');

  const pairs: string[] = [];
  params.forEach((value, key) => {
    if (key !== 'hash') pairs.push(`${key}=${value}`);
  });
  pairs.sort();
  const dataCheckString = pairs.join('\n');

  const secretKey = createHmac('sha256', 'WebAppData').update(botToken).digest();
  const expected = createHmac('sha256', secretKey).update(dataCheckString).digest('hex');
  if (!safeEqualHex(expected, hash)) throw new InitDataError('Invalid signature');

  const authDate = Number(params.get('auth_date'));
  if (!Number.isFinite(authDate) || authDate <= 0) throw new InitDataError('Missing auth_date');
  if (nowSeconds - authDate > maxAgeSeconds) throw new InitDataError('initData expired');
  if (authDate - nowSeconds > 300) throw new InitDataError('auth_date is in the future');

  const rawUser = params.get('user');
  if (!rawUser) throw new InitDataError('Missing user');
  let user: TgUser;
  try {
    user = JSON.parse(rawUser) as TgUser;
  } catch {
    throw new InitDataError('Malformed user');
  }
  if (!user || typeof user.id !== 'number' || user.is_bot) throw new InitDataError('Invalid user');

  return {
    user,
    authDate,
    queryId: params.get('query_id') ?? undefined,
    startParam: params.get('start_param') ?? undefined,
    chatType: params.get('chat_type') ?? undefined,
    chatInstance: params.get('chat_instance') ?? undefined,
  };
}

/** Test/dev helper: produce a correctly signed initData string. */
export function signInitData(fields: Record<string, string>, botToken: string): string {
  const pairs = Object.entries(fields)
    .map(([k, v]) => `${k}=${v}`)
    .sort();
  const secretKey = createHmac('sha256', 'WebAppData').update(botToken).digest();
  const hash = createHmac('sha256', secretKey).update(pairs.join('\n')).digest('hex');
  const params = new URLSearchParams(fields);
  params.set('hash', hash);
  return params.toString();
}

export interface LoginWidgetData {
  id: number;
  first_name?: string;
  last_name?: string;
  username?: string;
  photo_url?: string;
  auth_date: number;
  hash: string;
}

/**
 * Validates Telegram Login Widget data (https://core.telegram.org/widgets/login#checking-authorization).
 * Used by the admin panel.
 *   secret_key = SHA256(bot_token); hash = hex(HMAC_SHA256(secret_key, data_check_string))
 */
export function validateLoginWidget(
  data: LoginWidgetData,
  botToken: string,
  maxAgeSeconds: number,
  nowSeconds = Math.floor(Date.now() / 1000),
): LoginWidgetData {
  const { hash, ...fields } = data;
  const dataCheckString = Object.entries(fields)
    .filter(([, v]) => v !== undefined && v !== null && v !== '')
    .map(([k, v]) => `${k}=${v}`)
    .sort()
    .join('\n');
  const secretKey = createHash('sha256').update(botToken).digest();
  const expected = createHmac('sha256', secretKey).update(dataCheckString).digest('hex');
  if (!safeEqualHex(expected, hash)) throw new InitDataError('Invalid login widget signature');
  if (nowSeconds - data.auth_date > maxAgeSeconds) throw new InitDataError('Login data expired');
  return data;
}
