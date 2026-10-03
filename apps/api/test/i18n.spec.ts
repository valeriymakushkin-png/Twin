import { resolveLocale, userLocale } from '@mascot/shared';
import { BOT_CATALOGS, catalogFor, renderNotify, type NotifyMessage } from '../src/i18n/bot-messages';
import { memeLocale } from '../src/ai/render/image-ops';

describe('locale resolution', () => {
  it.each([
    ['ru', 'ru'],
    ['ru-RU', 'ru'],
    ['uk', 'ru'],
    ['kk', 'ru'],
    ['en-US', 'en'],
    ['pt-br', 'en'],
    [null, 'en'],
    ['', 'en'],
  ])('%s → %s', (code, expected) => {
    expect(resolveLocale(code)).toBe(expected);
  });

  it('explicit choice beats Telegram language', () => {
    expect(userLocale({ locale: 'en', languageCode: 'ru' })).toBe('en');
    expect(userLocale({ locale: null, languageCode: 'ru' })).toBe('ru');
    expect(userLocale({ locale: 'de', languageCode: 'uk' })).toBe('ru');
  });

  it('meme language follows the script of the text', () => {
    expect(memeLocale('Я в 9 утра', 'en')).toBe('ru');
    expect(memeLocale('me at 9am', 'ru')).toBe('ru');
    expect(memeLocale('me at 9am', 'en')).toBe('en');
  });
});

describe('bot catalog', () => {
  const messages: NotifyMessage[] = [
    { key: 'avatarReady', params: { name: 'Captain' } },
    { key: 'styleReady', params: { slug: 'cyberpunk', name: 'Cyberpunk' } },
    { key: 'stickersReady', params: { count: 7 } },
    { key: 'packPublished', params: { title: 'Pack', url: 'https://t.me/addstickers/x' } },
    { key: 'videoReady', params: { template: 'dancing' } },
    { key: 'referralReward', params: { credits: 20 } },
    { key: 'creditsAdded', params: { credits: 60 } },
    { key: 'premiumRenewed', params: {} },
    { key: 'premiumUnlocked', params: {} },
  ];

  it('every locale renders every notification with its parameters', () => {
    for (const catalog of Object.values(BOT_CATALOGS)) {
      for (const message of messages) {
        const text = renderNotify(catalog, message);
        expect(text.length).toBeGreaterThan(5);
        for (const value of Object.values(message.params)) {
          if (typeof value === 'number' || (typeof value === 'string' && message.key !== 'videoReady' && message.key !== 'styleReady')) {
            expect(text).toContain(String(value));
          }
        }
      }
    }
  });

  it('localizes style and video names in Russian', () => {
    const ru = catalogFor({ languageCode: 'ru' });
    expect(renderNotify(ru, { key: 'styleReady', params: { slug: 'cyberpunk', name: 'Cyberpunk' } })).toContain('Киберпанк');
    expect(renderNotify(ru, { key: 'videoReady', params: { template: 'dancing' } })).toContain('Танец');
    expect(renderNotify(catalogFor({ languageCode: 'en' }), { key: 'videoReady', params: { template: 'dancing' } })).toContain('dancing');
  });

  it('has invoice copy for every product within Telegram limits', () => {
    for (const catalog of Object.values(BOT_CATALOGS)) {
      for (const copy of Object.values(catalog.invoice)) {
        expect(copy.title.length).toBeLessThanOrEqual(32);
        expect(copy.description.length).toBeLessThanOrEqual(255);
      }
    }
  });
});
