'use client';

import { useQuery } from '@tanstack/react-query';
import { RefreshCw } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { ChartCard, HeroFigure, StatTile, TimeLineChart } from '@/components/charts';
import { Shell } from '@/components/shell';
import { PageHeader, Panel, RangeFilter, StatusPill, type RangeDays } from '@/components/ui';
import { adminApi } from '@/lib/api';
import { compact, ms, pct } from '@/lib/format';

export default function OverviewPage() {
  const [days, setDays] = useState<RangeDays>(30);
  const overview = useQuery({ queryKey: ['overview', days], queryFn: () => adminApi.overview(days), refetchInterval: 30_000 });
  const users = useQuery({ queryKey: ['users-analytics', days], queryFn: () => adminApi.usersAnalytics(days) });
  const o = overview.data;
  const merged = (users.data?.signups ?? []).map((p, i) => ({ date: p.date, signups: p.value, active: users.data?.active[i]?.value ?? 0 }));

  return (
    <Shell>
      <PageHeader title="Overview" subtitle="Live product health" right={<RangeFilter value={days} onChange={setDays} />} />
      {o && (
        <>
          <div className="grid gap-3 lg:grid-cols-[1.2fr_2fr]">
            <HeroFigure label={`Stars revenue · last ${days} days`} value={`⭐ ${compact(o.revenue.stars)}`} hint={`${o.revenue.payments} payments · ${o.revenue.refunds} refunds · MRR ⭐ ${compact(o.revenue.mrrStars)}`} />
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
              <StatTile label="Total users" value={compact(o.users.total)} hint={`+${compact(o.users.new)} new`} />
              <StatTile label="Daily active" value={compact(o.users.dau)} hint={`WAU ${compact(o.users.wau)} · MAU ${compact(o.users.mau)}`} />
              <StatTile label="Premium users" value={compact(o.users.premium)} hint={`${pct(o.conversion.freeToPremium)} conversion`} />
              <StatTile label="Upload → mascot" value={pct(o.conversion.uploadToMascot)} hint="Activation rate" />
              <StatTile
                label="Generation success"
                value={pct(o.generations.successRate)}
                hint={`${compact(o.generations.failed)} failed of ${compact(o.generations.total)}`}
                tone={o.generations.successRate >= 0.97 ? 'good' : 'critical'}
              />
              <StatTile label="Avatar latency" value={ms(o.generations.p50Ms)} hint={`p95 ${ms(o.generations.p95Ms)} · AI cost $${o.generations.estimatedCostUsd}`} />
            </div>
          </div>

          <div className="mt-3 grid gap-3 lg:grid-cols-[2fr_1fr]">
            <ChartCard
              title="Signups vs daily active users"
              subtitle="Users per day (UTC)"
              loading={users.isFetching}
              legend={[
                { key: 'active', label: 'Daily active', slot: 0 },
                { key: 'signups', label: 'Signups', slot: 1 },
              ]}
              table={{ columns: ['Date', 'Daily active', 'Signups'], rows: merged.map((r) => [r.date, r.active, r.signups]) }}
            >
              <TimeLineChart
                data={merged}
                series={[
                  { key: 'active', label: 'Daily active', slot: 0 },
                  { key: 'signups', label: 'Signups', slot: 1 },
                ]}
              />
            </ChartCard>
            <Panel title="Queues" right={<span className="text-[11px] text-muted">auto-refresh 30s</span>}>
              <table className="w-full text-[12px]">
                <thead className="text-left text-muted">
                  <tr>
                    <th className="pb-2 font-medium">Queue</th>
                    <th className="pb-2 text-right font-medium">Waiting</th>
                    <th className="pb-2 text-right font-medium">Active</th>
                    <th className="pb-2 text-right font-medium">Failed</th>
                  </tr>
                </thead>
                <tbody className="tabular">
                  {o.queues.map((q) => (
                    <tr key={q.name} className="border-t border-line">
                      <td className="py-1.5 capitalize text-ink-2">{q.name}</td>
                      <td className="py-1.5 text-right">{q.waiting}</td>
                      <td className="py-1.5 text-right">{q.active}</td>
                      <td className="py-1.5 text-right">
                        {q.failed > 0 ? (
                          <button
                            className="text-critical underline-offset-2 hover:underline"
                            onClick={async () => {
                              await adminApi.retryFailed(q.name);
                              toast.success(`Retrying failed ${q.name} jobs`);
                              void overview.refetch();
                            }}
                          >
                            {q.failed} <RefreshCw className="inline size-3" />
                          </button>
                        ) : (
                          0
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="mt-4 flex items-center justify-between border-t border-line pt-3 text-[12px]">
                <span className="text-muted">Trust & safety</span>
                {o.abuse.openEvents > 0 ? <StatusPill status="serious" label={`${o.abuse.openEvents} open events`} /> : <StatusPill status="good" label="No open events" />}
              </div>
            </Panel>
          </div>
          {users.data && (
            <div className="mt-3 grid grid-cols-2 gap-3 md:grid-cols-4">
              <StatTile label="D1 retention" value={pct(users.data.retention.d1)} hint="Seen again after 1 day" />
              <StatTile label="D7 retention" value={pct(users.data.retention.d7)} hint="Seen again after 7 days" />
              <StatTile label="ARPPU" value={`⭐ ${compact(o.revenue.arppuStars)}`} hint="Per paying user" />
              <StatTile label="Banned users" value={compact(o.abuse.bannedUsers)} />
            </div>
          )}
        </>
      )}
      {overview.isError && <p className="text-[13px] text-critical">Failed to load analytics.</p>}
    </Shell>
  );
}
