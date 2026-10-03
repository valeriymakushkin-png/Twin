/**
 * One-off bot configuration (idempotent):
 *   pnpm telegram:setup
 * - webhook with secret token
 * - command list (EN + RU)
 * - menu button that opens the Mini App
 * - bot descriptions
 * Inline mode and the Mini App short name must be enabled once in @BotFather
 * (/setinline, /newapp). See docs/08-telegram.md.
 */
import { loadEnv } from '../src/config/env';

const env = loadEnv();
const base = `${env.TELEGRAM_API_BASE}/bot${env.TELEGRAM_BOT_TOKEN}`;

async function call(method: string, body: Record<string, unknown>): Promise<unknown> {
  const res = await fetch(`${base}/${method}`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
  const json = (await res.json()) as { ok: boolean; result?: unknown; description?: string };
  if (!json.ok) throw new Error(`${method}: ${json.description}`);
  console.log(`✔ ${method}`);
  return json.result;
}

async function main(): Promise<void> {
  const me = (await call('getMe', {})) as { username: string };
  console.log(`  bot: @${me.username}`);
  await call('setWebhook', {
    url: `${env.PUBLIC_API_URL}/v1/telegram/webhook`,
    secret_token: env.TELEGRAM_WEBHOOK_SECRET,
    allowed_updates: ['message', 'pre_checkout_query', 'inline_query', 'callback_query'],
    max_connections: 80,
  });
  const commands = [
    { command: 'start', description: 'Create your AI mascot' },
    { command: 'premium', description: 'Premium plans' },
    { command: 'paysupport', description: 'Payment support' },
    { command: 'terms', description: 'Terms & privacy' },
    { command: 'help', description: 'Help' },
  ];
  await call('setMyCommands', { commands });
  await call('setMyCommands', {
    language_code: 'ru',
    commands: [
      { command: 'start', description: 'Создать AI-маскота' },
      { command: 'premium', description: 'Премиум' },
      { command: 'paysupport', description: 'Поддержка по оплате' },
      { command: 'terms', description: 'Условия и приватность' },
      { command: 'help', description: 'Помощь' },
    ],
  });
  await call('setChatMenuButton', { menu_button: { type: 'web_app', text: 'Open', web_app: { url: env.WEB_APP_URL } } });
  await call('setMyDescription', {
    description: 'Turn your selfies into a personal 3D mascot — then make stickers, memes, profile pictures and videos with it.',
  });
  await call('setMyShortDescription', { short_description: 'Your face → your personal AI mascot ✨' });
  console.log('Done. Remember to enable inline mode (/setinline) and create the Mini App (/newapp) in @BotFather.');
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
