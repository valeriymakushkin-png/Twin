'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { usePathname } from 'next/navigation';
import type { UserProfileDto } from '@mascot/shared';
import { api, setAccessToken, setUnauthorizedHandler } from '@/lib/api';
import { env } from '@/lib/env';
import { bootstrapWebApp, getWebApp } from '@/lib/telegram';
import { qk } from '@/lib/queries';
import { useT } from '@/lib/i18n';
import { LogoMark } from '@/components/brand/logo';

type AuthStatus = 'loading' | 'authenticated' | 'outside-telegram' | 'error';

interface AuthContextValue {
  status: AuthStatus;
  user: UserProfileDto | null;
  isNewUser: boolean;
  error: string | null;
  retry: () => void;
}

const AuthContext = createContext<AuthContextValue>({ status: 'loading', user: null, isNewUser: false, error: null, retry: () => {} });

const TOKEN_KEY = 'mascot.token';
const DEV_ID_KEY = 'mascot.devTelegramId';

function cachedToken(): string | null {
  try {
    const raw = sessionStorage.getItem(TOKEN_KEY);
    if (!raw) return null;
    const { token, exp } = JSON.parse(raw) as { token: string; exp: number };
    return exp > Date.now() + 60_000 ? token : null;
  } catch {
    return null;
  }
}

/**
 * Authentication: Telegram initData (signed by Telegram, verified server-side) is exchanged
 * for a short-lived JWT. Outside Telegram the app shows the public landing, or a dev login
 * when NEXT_PUBLIC_DEV_AUTH=true (local development only).
 */
export function AuthProvider({ children }: { children: ReactNode }) {
  const queryClient = useQueryClient();
  const pathname = usePathname();
  const [state, setState] = useState<Omit<AuthContextValue, 'retry'>>({ status: 'loading', user: null, isNewUser: false, error: null });
  const [attempt, setAttempt] = useState(0);

  const authenticate = useCallback(async () => {
    const app = bootstrapWebApp() ?? getWebApp();
    try {
      let response;
      if (app?.initData) {
        response = await api.auth.telegram(app.initData);
      } else if (env.devAuth) {
        const token = cachedToken();
        if (token) {
          setAccessToken(token);
          const user = await api.profile.get();
          queryClient.setQueryData(qk.profile, user);
          setState({ status: 'authenticated', user, isNewUser: false, error: null });
          return;
        }
        let devId = Number(localStorage.getItem(DEV_ID_KEY));
        if (!devId) {
          devId = 100_000_000 + Math.floor(Math.random() * 1_000_000);
          localStorage.setItem(DEV_ID_KEY, String(devId));
        }
        response = await api.auth.dev(devId);
      } else {
        setState({ status: 'outside-telegram', user: null, isNewUser: false, error: null });
        return;
      }
      setAccessToken(response.accessToken);
      sessionStorage.setItem(TOKEN_KEY, JSON.stringify({ token: response.accessToken, exp: Date.now() + response.expiresIn * 1000 }));
      queryClient.setQueryData(qk.profile, response.user);
      setState({ status: 'authenticated', user: response.user, isNewUser: response.isNewUser, error: null });
    } catch (error) {
      setState({ status: 'error', user: null, isNewUser: false, error: (error as Error).message });
    }
  }, [queryClient]);

  useEffect(() => {
    setUnauthorizedHandler(() => {
      sessionStorage.removeItem(TOKEN_KEY);
      setAttempt((n) => n + 1);
    });
  }, []);

  useEffect(() => {
    // The SDK script loads before hydration; give slow clients a tick to populate initData.
    const timer = setTimeout(() => void authenticate(), 30);
    return () => clearTimeout(timer);
  }, [authenticate, attempt]);

  const value = useMemo(() => ({ ...state, retry: () => setAttempt((n) => n + 1) }), [state]);
  // Public pages render immediately (SSR content + OG previews); app pages wait for a token
  // so no request is ever sent unauthenticated.
  const isPublic = PUBLIC_PREFIXES.some((p) => pathname.startsWith(p));
  return (
    <AuthContext.Provider value={value}>
      {isPublic || state.status !== 'loading' ? (state.status === 'error' && !isPublic ? <AuthError message={state.error} onRetry={value.retry} /> : children) : <Splash />}
    </AuthContext.Provider>
  );
}

const PUBLIC_PREFIXES = ['/m/', '/legal'];

function Splash() {
  return (
    <div className="grid min-h-dvh place-items-center">
      <div className="flex flex-col items-center gap-4">
        <LogoMark className="size-16 animate-pulse-soft" />
        <div className="h-1 w-24 overflow-hidden rounded-full bg-white/10">
          <div className="skeleton h-full w-full" />
        </div>
      </div>
    </div>
  );
}

function AuthError({ message, onRetry }: { message: string | null; onRetry: () => void }) {
  const { t } = useT();
  return (
    <div className="mx-auto grid min-h-dvh max-w-sm place-items-center px-6 text-center">
      <div>
        <div className="text-4xl">🔌</div>
        <h1 className="mt-3 text-lg font-semibold">{t.auth.errorTitle}</h1>
        <p className="mt-1 text-[13px] text-muted">{message ?? t.auth.errorBody}</p>
        <button onClick={onRetry} className="mt-5 rounded-2xl bg-white/[0.08] px-5 py-3 text-[14px] font-semibold">
          {t.common.retry}
        </button>
      </div>
    </div>
  );
}

export function useAuth(): AuthContextValue {
  return useContext(AuthContext);
}
