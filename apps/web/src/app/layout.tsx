import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import type { ReactNode } from 'react';
import { AppProviders } from '@/providers/app-providers';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mascot AI — your face, your mascot',
  description: 'Turn your selfies into a personal 3D mascot. Make stickers, memes, profile pictures and videos — right inside Telegram.',
  applicationName: 'Mascot AI',
  openGraph: { title: 'Mascot AI', description: 'Your face. Your mascot.', type: 'website' },
  icons: { icon: '/icon.svg' },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
  themeColor: '#07070a',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <head>
        {/* Official Telegram Mini Apps SDK — must load before the app hydrates. */}
        <Script src="https://telegram.org/js/telegram-web-app.js?59" strategy="beforeInteractive" />
      </head>
      <body className="font-sans">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
