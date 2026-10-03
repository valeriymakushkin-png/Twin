'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { getWebApp } from '@/lib/telegram';

const ROOT_PATHS = new Set(['/', '/library', '/profile', '/create']);

/** Drives Telegram's native back button from the Next.js route. */
export function TelegramBackButton() {
  const pathname = usePathname();
  const router = useRouter();
  useEffect(() => {
    const app = getWebApp();
    if (!app) return;
    const onBack = () => (window.history.length > 1 ? router.back() : router.push('/'));
    if (ROOT_PATHS.has(pathname) || pathname.startsWith('/processing')) {
      app.BackButton.hide();
      return;
    }
    app.BackButton.show();
    app.BackButton.onClick(onBack);
    return () => app.BackButton.offClick(onBack);
  }, [pathname, router]);
  return null;
}
