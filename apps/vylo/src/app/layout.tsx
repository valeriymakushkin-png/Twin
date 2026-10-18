import '@fontsource-variable/inter';
import 'maplibre-gl/dist/maplibre-gl.css';
import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { AppShell } from '@/components/app-shell';
import './globals.css';

export const metadata: Metadata = {
  title: 'Vylo — карта путешествий',
  description: 'Исследуй, сохраняй, встречайся и делись. Глобальная карта путешествий: места, визы, встречи и сообщество путешественников.',
  applicationName: 'Vylo',
  manifest: '/manifest.webmanifest',
  icons: { icon: '/icon.svg', apple: '/icon.svg' },
  appleWebApp: { capable: true, title: 'Vylo', statusBarStyle: 'default' },
  openGraph: { title: 'Vylo', description: 'Explore. Save. Meet. Share.', type: 'website' },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
  themeColor: '#f6f7fb',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body className="font-sans">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
