'use client';

import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { STAR_PRODUCTS, type StarProductId } from '@mascot/shared';
import { ChartCard, RankBars, StatTile, TimeBarChart } from '@/components/charts';
import { Shell } from '@/components/shell';
import { PageHeader, RangeFilter, type RangeDays } from '@/components/ui';
import { adminApi } from '@/lib/api';
import { compact } from '@/lib/format';

export default function RevenuePage() {
  const [days, setDays] = useState<RangeDays>(30);
  const { data, isFetching } = useQuery({ queryKey: ['revenue', days], queryFn: () => adminApi.revenue(days) });
  const total = data?.daily.reduce((s, p) => s + p.value, 0) ?? 0;
  const refunded = data?.refunds.reduce((s, p) => s + p.value, 0) ?? 0;
  const daily = (data?.daily ?? []).map((p) => ({ date: p.date, stars: p.value }));

  return (
    <Shell>
      <PageHeader title="Revenue" subtitle="Telegram Stars (XTR)" right={<RangeFilter value={days} onChange={setDays} />} />
      {data && (
        <>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            <StatTile label="Gross Stars" value={`⭐ ${compact(total)}`} hint={`≈ $${compact(data.estimatedUsd)} payout`} />
            <StatTile label="Refunded" value={`⭐ ${compact(refunded)}`} hint={total ? `${((refunded / total) * 100).toFixed(1)}% of gross` : undefined} />
            <StatTile label="Active subscriptions" value={compact(data.subscriptions.active)} hint={`${data.subscriptions.canceling} canceling`} />
            <StatTile label="MRR" value={`⭐ ${compact(data.subscriptions.mrrStars)}`} hint="Active recurring × monthly price" />
          </div>
          <div className="mt-3 grid gap-3 lg:grid-cols-[2fr_1fr]">
            <ChartCard
              title="Stars per day"
              subtitle="Paid amount by payment date"
              loading={isFetching}
              table={{ columns: ['Date', 'Stars'], rows: daily.map((d) => [d.date, d.stars]) }}
            >
              <TimeBarChart data={daily} series={[{ key: 'stars', label: 'Stars', slot: 0 }]} />
            </ChartCard>
            <ChartCard
              title="By product"
              subtitle="Stars in range"
              table={{ columns: ['Product', 'Payments', 'Stars'], rows: data.byProduct.map((p) => [p.productId, p.count, p.stars]) }}
            >
              <RankBars
                items={data.byProduct
                  .map((p) => ({ label: STAR_PRODUCTS[p.productId as StarProductId]?.title.replace('Mascot AI ', '') ?? p.productId, value: p.stars }))
                  .sort((a, b) => b.value - a.value)}
              />
            </ChartCard>
          </div>
        </>
      )}
    </Shell>
  );
}
