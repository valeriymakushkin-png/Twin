'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState, type ReactNode } from 'react';
import { Toaster } from 'sonner';

export function Providers({ children }: { children: ReactNode }) {
  const [client] = useState(
    () => new QueryClient({ defaultOptions: { queries: { refetchOnWindowFocus: false, retry: 1, placeholderData: (prev: unknown) => prev } } }),
  );
  return (
    <QueryClientProvider client={client}>
      {children}
      <Toaster theme="dark" position="top-right" />
    </QueryClientProvider>
  );
}
