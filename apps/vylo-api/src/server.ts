import { randomBytes } from 'node:crypto';
import { createApp } from './app.ts';

const env = process.env;
const production = env.NODE_ENV === 'production';
const secret = env.VYLO_SECRET ?? (production ? '' : randomBytes(32).toString('hex'));
if (secret.length < 32) {
  console.error('VYLO_SECRET must be set to at least 32 characters in production.');
  process.exit(1);
}
if (production && !env.VYLO_SETUP_TOKEN) console.warn('VYLO_SETUP_TOKEN is not set: anyone who reaches the API first can claim the owner account.');

const { server } = createApp({
  dbFile: env.VYLO_DB ?? 'data/vylo.db',
  uploadDir: env.VYLO_UPLOADS ?? 'data/uploads',
  secret,
  setupToken: env.VYLO_SETUP_TOKEN ?? '',
  allowedOrigins: (env.VYLO_ALLOWED_ORIGINS ?? (production ? '' : '*')).split(',').map((s) => s.trim()).filter(Boolean),
  publicUrl: env.VYLO_PUBLIC_URL,
});

const port = Number(env.PORT ?? 4300);
server.listen(port, () => console.log(`Vylo API on http://localhost:${port}`));
