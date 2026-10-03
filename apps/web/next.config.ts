import path from 'node:path';
import type { NextConfig } from 'next';

/**
 * Telegram loads Mini Apps inside an iframe on web/desktop clients (web.telegram.org),
 * so frame-ancestors must allow Telegram origins.
 */
const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: "frame-ancestors 'self' https://web.telegram.org https://*.telegram.org https://telegram.org",
  },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Permissions-Policy', value: 'camera=(self), microphone=(), geolocation=()' },
];

const config: NextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  poweredByHeader: false,
  transpilePackages: ['@mascot/shared'],
  // Monorepo root, so the standalone output includes workspace packages.
  outputFileTracingRoot: path.join(process.cwd(), '../../'),
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }];
  },
};

export default config;
