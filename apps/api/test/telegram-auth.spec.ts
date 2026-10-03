import { createHash, createHmac } from 'node:crypto';
import { signInitData, validateInitData, validateLoginWidget, InitDataError } from '../src/modules/telegram/init-data';

const BOT_TOKEN = '123456:TEST-token';
const now = Math.floor(Date.now() / 1000);
const user = JSON.stringify({ id: 42, first_name: 'Ada', username: 'ada', language_code: 'en', is_premium: true });

describe('Telegram Mini App initData validation', () => {
  it('accepts correctly signed, fresh data (including the signature field)', () => {
    const initData = signInitData(
      { auth_date: String(now), query_id: 'AAH', user, start_param: 'ref_abc123', signature: 'ed25519sig' },
      BOT_TOKEN,
    );
    const result = validateInitData(initData, BOT_TOKEN, 3600);
    expect(result.user.id).toBe(42);
    expect(result.startParam).toBe('ref_abc123');
  });

  it('rejects tampered payloads', () => {
    const initData = signInitData({ auth_date: String(now), user }, BOT_TOKEN);
    const tampered = initData.replace('Ada', 'Eve');
    expect(() => validateInitData(tampered, BOT_TOKEN, 3600)).toThrow(InitDataError);
  });

  it('rejects data signed with another bot token', () => {
    const initData = signInitData({ auth_date: String(now), user }, '999:OTHER');
    expect(() => validateInitData(initData, BOT_TOKEN, 3600)).toThrow('Invalid signature');
  });

  it('rejects expired data', () => {
    const initData = signInitData({ auth_date: String(now - 7200), user }, BOT_TOKEN);
    expect(() => validateInitData(initData, BOT_TOKEN, 3600)).toThrow('expired');
  });

  it('rejects bots and malformed users', () => {
    const initData = signInitData({ auth_date: String(now), user: JSON.stringify({ id: 1, is_bot: true, first_name: 'x' }) }, BOT_TOKEN);
    expect(() => validateInitData(initData, BOT_TOKEN, 3600)).toThrow('Invalid user');
  });

  it('matches the reference algorithm from the Telegram docs', () => {
    const fields = { auth_date: String(now), user };
    const dataCheckString = Object.entries(fields).map(([k, v]) => `${k}=${v}`).sort().join('\n');
    const secret = createHmac('sha256', 'WebAppData').update(BOT_TOKEN).digest();
    const hash = createHmac('sha256', secret).update(dataCheckString).digest('hex');
    const params = new URLSearchParams({ ...fields, hash });
    expect(validateInitData(params.toString(), BOT_TOKEN, 3600).user.username).toBe('ada');
  });
});

describe('Telegram Login Widget validation (admin panel)', () => {
  const sign = (data: Record<string, string | number>) => {
    const dcs = Object.entries(data).map(([k, v]) => `${k}=${v}`).sort().join('\n');
    const secret = createHash('sha256').update(BOT_TOKEN).digest();
    return createHmac('sha256', secret).update(dcs).digest('hex');
  };

  it('accepts a valid widget payload', () => {
    const data = { id: 7, first_name: 'Root', username: 'root', auth_date: now };
    expect(validateLoginWidget({ ...data, hash: sign(data) }, BOT_TOKEN, 3600).id).toBe(7);
  });

  it('rejects a forged payload', () => {
    const data = { id: 7, first_name: 'Root', auth_date: now };
    expect(() => validateLoginWidget({ ...data, id: 8, hash: sign(data) }, BOT_TOKEN, 3600)).toThrow(InitDataError);
  });
});
