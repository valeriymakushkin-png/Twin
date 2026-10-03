import type { Subscription, User } from '@prisma/client';
import type { StarProductId, SubscriptionDto } from '@mascot/shared';

export function toSubscriptionDto(sub: Subscription | null | undefined): SubscriptionDto | null {
  if (!sub) return null;
  return {
    id: sub.id,
    status: sub.status,
    productId: sub.productId as StarProductId,
    currentPeriodEnd: sub.currentPeriodEnd.toISOString(),
    cancelAtPeriodEnd: sub.cancelAtPeriodEnd,
    isRecurring: sub.isRecurring,
  };
}

export function telegramIdString(user: Pick<User, 'telegramId'>): string {
  return user.telegramId.toString();
}
