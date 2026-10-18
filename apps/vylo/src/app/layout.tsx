import '@fontsource-variable/inter';
import 'maplibre-gl/dist/maplibre-gl.css';
import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { AppShell } from '@/components/app-shell';
import './globals.css';

export const metadata: Metadata = {
  title: 'Vylo — explore, save, meet, share',
  description: 'A global travel map: real places, visa rules, meetups with travellers and a passport worth filling. In Russian, English, Spanish, German, French and Italian.',
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
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
