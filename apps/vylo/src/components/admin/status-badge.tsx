'use client';

import { useI18n } from '@/i18n/use';
import type { Status } from '@/lib/admin/entities';
import { Badge } from './ui';

export function StatusBadge({ status }: { status: Status }) {
  const { t } = useI18n();
  if (status === 'original') return null;
  const map = { custom: ['#34c759', t('admin.common.custom')], edited: ['#0071e3', t('admin.common.edited')], hidden: ['#86868b', t('admin.common.hidden')] } as const;
  const [color, label] = map[status];
  return <Badge color={color}>{label}</Badge>;
}
