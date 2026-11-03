import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vitest/config';

// Относительная база ('./') — приложение работает из любой папки хостинга, а hash-маршруты не требуют настройки сервера.
export default defineConfig({
  base: './',
  plugins: [
    react(),
    VitePWA({
      // Новая версия скачивается в фоне и включается при следующем открытии; данные пользователя это не затрагивает.
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'icon-192.png', 'icon-512.png'],
      manifest: {
        name: 'Vylo — поездки',
        short_name: 'Vylo',
        description: 'Маршрут, документы, расходы и дневник поездки. Работает без интернета.',
        lang: 'ru',
        start_url: './',
        scope: './',
        display: 'standalone',
        background_color: '#f6f7fb',
        theme_color: '#4f46e5',
        icons: [
          { src: 'icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'icon-512.png', sizes: '512x512', type: 'image/png' },
          { src: 'icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
      },
      workbox: {
        // Вся оболочка приложения (код, стили, шрифты, иконки) кладётся в кэш при первой загрузке.
        globPatterns: ['**/*.{js,css,html,svg,png,woff2,webmanifest}'],
        navigateFallback: 'index.html',
        cleanupOutdatedCaches: true,
      },
    }),
  ],
  test: {
    environment: 'node',
    include: ['src/**/*.test.ts'],
  },
});
