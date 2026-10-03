'use client';

import type { ReactNode } from 'react';
import { Toaster } from 'sonner';
import { PaywallSheet } from '@/components/paywall/paywall-sheet';
import { AuthProvider } from './auth-provider';
import { QueryProvider } from './query-provider';
import { TelegramBackButton } from './telegram-back-button';

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <QueryProvider>
      <AuthProvider>
        <TelegramBackButton />
        {children}
        <PaywallSheet />
        <Toaster
          theme="dark"
          position="top-center"
          toastOptions={{
            style: { background: '#16161e', border: '1px solid rgba(255,255,255,0.08)', color: '#f4f4f7', borderRadius: 16 },
          }}
        />
      </AuthProvider>
    </QueryProvider>
  );
}
