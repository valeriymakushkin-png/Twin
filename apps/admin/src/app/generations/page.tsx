'use client';

import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { ChartCard, RankBars, TimeBarChart, type SeriesDef } from '@/components/charts';
import { Shell } from '@/components/shell';
import { PageHeader, Panel, RangeFilter, type RangeDays } from '@/components/ui';
import { adminApi } from '@/lib/api';
import { compact } from '@/lib/format';

/** Fixed slot per generation type — color follows the entity, never its rank. */
const TYPE_SERIES: SeriesDef[] = [
  { key: 'AVATAR', label: 'Mascots', slot: 0 },
  { key: 'STYLE_VARIANT', label: 'Style changes', slot: 1 },
  { key: 'STICKER_PACK', label: 'Sticker packs', slot: 2 },
  { key: 'MEME', label: 'Memes', slot: 3 },
  { key: 'PROFILE_PICTURE', label: 'Profile pics', slot: 4 },
  { key: 'VIDEO', label: 'Videos', slot: 5 },
];

export default function GenerationsPage() {
  const [days, setDays] = useState<RangeDays>(30);
  const { data, isFetching } = useQuery({ queryKey: ['generations', days], queryFn: () => adminApi.generations(days) });
  const daily = (data?.daily ?? []).map((d) => {
    const row: Record<string, string | number> = { date: d.date as string };
    TYPE_SERIES.forEach((s) => (row[s.key] = Number(d[s.key] ?? 0)));
    return row;
  });
  const typeLabel = (t: string) => TYPE_SERIES.find((s) => s.key === t)?.label ?? t;
  const costByType = TYPE_SERIES.map((s) => ({
    label: s.label,
    value: Number((data?.byType ?? []).filter((b) => b.type === s.key).reduce((sum, b) => sum + b.costUsd, 0).toFixed(2)),
  }))
    .filter((c) => c.value > 0)
    .sort((a, b) => b.value - a.value);
  const providers = new Map<string, { ok: number; failed: number }>();
  (data?.providers ?? []).forEach((p) => {
    const key = p.provider ?? 'unknown';
    const entry = providers.get(key) ?? { ok: 0, failed: 0 };
    if (p.status === 'SUCCEEDED') entry.ok += p.count;
    if (p.status === 'FAILED') entry.failed += p.count;
    providers.set(key, entry);
  });

  return (
    <Shell>
      <PageHeader title="Generations" subtitle="AI pipeline throughput, latency, failures and cost" right={<RangeFilter value={days} onChange={setDays} />} />
      <ChartCard
        title="Generations per day by type"
        subtitle="Stacked; hover a column for the breakdown"
        loading={isFetching}
        legend={TYPE_SERIES}
        height={280}
        table={{ columns: ['Date', ...TYPE_SERIES.map((s) => s.label)], rows: daily.map((d) => [d.date as string, ...TYPE_SERIES.map((s) => d[s.key] as number)]) }}
      >
        <TimeBarChart data={daily} series={TYPE_SERIES} stacked />
      </ChartCard>
      <div className="mt-3 grid gap-3 lg:grid-cols-3">
        <Panel title="Latency (succeeded)">
          <table className="w-full text-[12px]">
            <thead className="text-left text-muted">
              <tr><th className="pb-2 font-medium">Type</th><th className="pb-2 text-right font-medium">p50</th><th className="pb-2 text-right font-medium">p95</th><th className="pb-2 text-right font-medium">n</th></tr>
            </thead>
            <tbody className="tabular">
              {(data?.latency ?? []).map((l) => (
                <tr key={l.type} className="border-t border-line">
                  <td className="py-1.5 text-ink-2">{typeLabel(l.type)}</td>
                  <td className="py-1.5 text-right">{l.p50Sec.toFixed(1)}s</td>
                  <td className="py-1.5 text-right">{l.p95Sec.toFixed(1)}s</td>
                  <td className="py-1.5 text-right text-muted">{compact(l.count)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Panel>
        <ChartCard title="Top failure reasons" subtitle="Error codes in range" height={200} table={{ columns: ['Code', 'Count'], rows: (data?.failures ?? []).map((f) => [f.code, f.count]) }}>
          <RankBars items={(data?.failures ?? []).map((f) => ({ label: f.code, value: f.count }))} />
        </ChartCard>
        <ChartCard title="AI cost by type" subtitle="Estimated provider spend (USD)" height={200} table={{ columns: ['Type', 'USD'], rows: costByType.map((c) => [c.label, c.value]) }}>
          <RankBars items={costByType} format={(v) => `$${v.toFixed(2)}`} />
        </ChartCard>
      </div>
      <div className="mt-3">
        <Panel title="Providers">
          <table className="w-full text-[12px]">
            <thead className="text-left text-muted"><tr><th className="pb-2 font-medium">Provider</th><th className="pb-2 text-right font-medium">Succeeded</th><th className="pb-2 text-right font-medium">Failed</th><th className="pb-2 text-right font-medium">Failure rate</th></tr></thead>
            <tbody className="tabular">
              {[...providers.entries()].map(([name, v]) => (
                <tr key={name} className="border-t border-line">
                  <td className="py-1.5 text-ink-2">{name}</td>
                  <td className="py-1.5 text-right">{compact(v.ok)}</td>
                  <td className="py-1.5 text-right">{compact(v.failed)}</td>
                  <td className="py-1.5 text-right">{v.ok + v.failed ? `${((v.failed / (v.ok + v.failed)) * 100).toFixed(1)}%` : '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Panel>
      </div>
    </Shell>
  );
}
