'use client';

import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState, type ReactNode } from 'react';
import { toast } from 'sonner';
import type { PaywallReason, StarProductId } from '@mascot/shared';
import { ApiRequestError } from '@/lib/api';
import { haptic } from '@/lib/telegram';
import { usePaywall } from '@/store/paywall';

function handleError(error: unknown, silent = false): void {
  if (error instanceof ApiRequestError && error.isPaywall) {
    haptic.warning();
    usePaywall
      .getState()
      .show(error.body.paywall!.reason as PaywallReason, error.body.message, (error.body.paywall!.suggestedProductId as StarProductId) ?? null);
    return;
  }
  if (silent) return;
  haptic.error();
  toast.error(error instanceof ApiRequestError ? error.body.message : 'Network error — check your connection.');
}

export function QueryProvider({ children }: { children: ReactNode }) {
  const [client] = useState(
    () =>
      new QueryClient({
        queryCache: new QueryCache({ onError: (e) => handleError(e, true) }),
        mutationCache: new MutationCache({ onError: (e) => handleError(e) }),
        defaultOptions: {
          queries: {
            retry: (count, error) => !(error instanceof ApiRequestError && error.status < 500) && count < 2,
            refetchOnWindowFocus: false,
          },
          mutations: { retry: false },
        },
      }),
  );
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
