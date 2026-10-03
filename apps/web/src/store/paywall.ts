'use client';

import { create } from 'zustand';
import type { PaywallReason, StarProductId } from '@mascot/shared';

interface PaywallState {
  open: boolean;
  reason: PaywallReason | null;
  message: string | null;
  suggested: StarProductId | null;
  show: (reason: PaywallReason | null, message?: string | null, suggested?: StarProductId | null) => void;
  close: () => void;
}

export const usePaywall = create<PaywallState>((set) => ({
  open: false,
  reason: null,
  message: null,
  suggested: null,
  show: (reason, message = null, suggested = null) => set({ open: true, reason, message, suggested }),
  close: () => set({ open: false }),
}));
