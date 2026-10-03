'use client';

import { BarChart3 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import type { TelegramLoginWidgetInput } from '@mascot/shared';
import { adminApi, setToken } from '@/lib/api';

declare global {
  interface Window {
    onTelegramAuth?: (user: TelegramLoginWidgetInput) => void;
  }
}

/** Admin sign-in with the Telegram Login Widget (verified server-side; ADMIN/SUPPORT roles only). */
export default function LoginPage() {
  const router = useRouter();
  const container = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);
  const bot = process.env.NEXT_PUBLIC_BOT_USERNAME ?? 'MascotAIBot';

  useEffect(() => {
    window.onTelegramAuth = async (user) => {
      try {
        const res = await adminApi.login(user);
        setToken(res.accessToken, res.expiresIn);
        router.replace('/');
      } catch (e) {
        setError((e as Error).message);
      }
    };
    const script = document.createElement('script');
    script.src = 'https://telegram.org/js/telegram-widget.js?22';
    script.async = true;
    script.setAttribute('data-telegram-login', bot);
    script.setAttribute('data-size', 'large');
    script.setAttribute('data-radius', '10');
    script.setAttribute('data-onauth', 'onTelegramAuth(user)');
    script.setAttribute('data-request-access', 'write');
    container.current?.appendChild(script);
    return () => {
      delete window.onTelegramAuth;
    };
  }, [bot, router]);

  return (
    <main className="grid min-h-dvh place-items-center px-6">
      <div className="w-full max-w-sm rounded-2xl border border-line bg-card p-8 text-center">
        <BarChart3 className="mx-auto size-8 text-accent" />
        <h1 className="mt-4 text-[18px] font-semibold">Mascot AI Admin</h1>
        <p className="mt-1 text-[13px] text-muted">Sign in with an authorised Telegram account.</p>
        <div ref={container} className="mt-6 flex min-h-[48px] justify-center" />
        {process.env.NEXT_PUBLIC_DEV_AUTH === 'true' && (
          <button
            onClick={async () => {
              const res = await adminApi.devLogin();
              setToken(res.accessToken, res.expiresIn);
              router.replace('/');
            }}
            className="mt-4 w-full rounded-lg border border-line py-2 text-[12px] text-muted hover:text-ink"
          >
            Dev login (local only)
          </button>
        )}
        {error && <p className="mt-4 text-[12px] text-critical">{error}</p>}
      </div>
    </main>
  );
}
