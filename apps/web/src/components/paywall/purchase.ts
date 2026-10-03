'use client';

import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { toast } from 'sonner';
import type { StarProductId } from '@mascot/shared';
import { api, errorMessage } from '@/lib/api';
import { getT } from '@/lib/i18n';
import { qk } from '@/lib/queries';
import { haptic, openInvoice } from '@/lib/telegram';

/**
 * Telegram Stars purchase: server creates the invoice link, the client opens Telegram's
 * native payment sheet, entitlements are granted by the bot webhook (successful_payment),
 * so we poll the profile briefly until the upgrade lands.
 */
export function usePurchase(onPaid?: () => void) {
  const queryClient = useQueryClient();
  const [pending, setPending] = useState<StarProductId | null>(null);

  async function purchase(productId: StarProductId) {
    setPending(productId);
    try {
      const { invoiceUrl } = await api.payments.invoice(productId);
      const status = await openInvoice(invoiceUrl);
      if (status === 'paid') {
        haptic.success();
        toast.success(getT().t.paywall.paymentReceived);
        for (let i = 0; i < 8; i++) {
          await new Promise((r) => setTimeout(r, 900));
          await queryClient.invalidateQueries({ queryKey: qk.profile });
          const profile = queryClient.getQueryData<{ plan: string; credits: number }>(qk.profile);
          if (profile && (productId.startsWith('premium') ? profile.plan === 'PREMIUM' : true)) break;
        }
        await queryClient.invalidateQueries({ queryKey: qk.styles });
        onPaid?.();
      } else if (status === 'failed') {
        haptic.error();
        toast.error(getT().t.paywall.paymentFailed);
      }
    } catch (error) {
      toast.error(errorMessage(error));
    } finally {
      setPending(null);
    }
  }

  return { purchase, pending };
}
