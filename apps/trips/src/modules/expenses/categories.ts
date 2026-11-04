import type { ExpenseCategory } from '../../core/db';

/** Оформление категорий: значок и цвет для полосок. */
export const CATEGORY_META: Record<ExpenseCategory, { emoji: string; color: string }> = {
  food: { emoji: '🍽️', color: '#f97316' },
  transport: { emoji: '🚕', color: '#0ea5e9' },
  stay: { emoji: '🏨', color: '#8b5cf6' },
  activities: { emoji: '🎟️', color: '#10b981' },
  shopping: { emoji: '🛍️', color: '#ec4899' },
  other: { emoji: '📌', color: '#64748b' },
};
