import type { NextConfig } from 'next';

/**
 * Vylo ships as a fully static, offline-first web app: all data is bundled and user state lives in
 * localStorage, so `next build` emits plain files to `out/` that any static host can serve.
 */
const config: NextConfig = {
  output: 'export',
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: true,
  images: { unoptimized: true },
  devIndicators: false,
};

export default config;
