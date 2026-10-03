'use client';

import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { useState } from 'react';
import { toast } from 'sonner';
import { ChartCard, RankBars } from '@/components/charts';
import { Shell } from '@/components/shell';
import { Btn, PageHeader, Panel, StatusPill, severityStatus } from '@/components/ui';
import { adminApi } from '@/lib/api';
import { dateTime } from '@/lib/format';

const STATUSES = ['OPEN', 'RESOLVED', 'DISMISSED'] as const;

export default function AbusePage() {
  const [status, setStatus] = useState<(typeof STATUSES)[number]>('OPEN');
  const events = useQuery({ queryKey: ['abuse', status], queryFn: () => adminApi.abuse(status), refetchInterval: 30_000 });
  const summary = useQuery({ queryKey: ['abuse-summary'], queryFn: () => adminApi.abuseSummary(30) });

  async function resolve(id: string, action: 'resolve' | 'dismiss') {
    await adminApi.resolveAbuse(id, action);
    toast.success(action === 'resolve' ? 'Resolved' : 'Dismissed');
    void events.refetch();
  }

  const byType = new Map<string, number>();
  (summary.data?.byType ?? []).forEach((b) => byType.set(b.type, (byType.get(b.type) ?? 0) + b.count));

  return (
    <Shell>
      <PageHeader
        title="Abuse monitoring"
        subtitle="NSFW uploads, minors, identity mismatch, spam, payment & referral abuse. Auto-ban at risk ≥ threshold or any critical event."
        right={
          <div className="inline-flex rounded-xl border border-line bg-card p-1">
            {STATUSES.map((s) => (
              <button key={s} onClick={() => setStatus(s)} className={`rounded-lg px-3 py-1.5 text-[12px] font-medium capitalize ${status === s ? 'bg-white/10 text-ink' : 'text-muted'}`}>
                {s.toLowerCase()}
              </button>
            ))}
          </div>
        }
      />
      <div className="grid gap-3 lg:grid-cols-3">
        <ChartCard title="Events by type" subtitle="Last 30 days" height={220} table={{ columns: ['Type', 'Events'], rows: [...byType.entries()] }}>
          <RankBars items={[...byType.entries()].map(([label, value]) => ({ label, value })).sort((a, b) => b.value - a.value)} />
        </ChartCard>
        <Panel title="Riskiest users">
          <ul className="space-y-1.5 text-[12px]">
            {(summary.data?.riskiestUsers ?? []).map((u) => (
              <li key={u.id} className="flex items-center justify-between">
                <Link href={`/users/${u.id}`} className="text-ink-2 hover:underline">{u.username ? `@${u.username}` : u.id.slice(0, 10)}</Link>
                <span className="flex items-center gap-2 tabular">
                  {u.isBanned && <StatusPill status="critical" label="Banned" />}
                  {u.riskScore}
                </span>
              </li>
            ))}
            {!summary.data?.riskiestUsers.length && <li className="text-muted">Nobody flagged.</li>}
          </ul>
        </Panel>
        <Panel title="High velocity (24h)">
          <ul className="space-y-1.5 text-[12px]">
            {(summary.data?.highVelocityUsers ?? []).map((u) => (
              <li key={u.userId} className="flex items-center justify-between">
                <Link href={`/users/${u.userId}`} className="text-ink-2 hover:underline">{u.userId.slice(0, 12)}</Link>
                <span className="tabular">{u.generations24h} generations</span>
              </li>
            ))}
          </ul>
        </Panel>
      </div>
      <div className="mt-3 overflow-x-auto rounded-2xl border border-line bg-card">
        <table className="w-full min-w-[820px] text-[12.5px]">
          <thead className="border-b border-line text-left text-muted">
            <tr>{['Severity', 'Type', 'User', 'Details', 'When', ''].map((h) => <th key={h} className="px-4 py-2.5 font-medium">{h}</th>)}</tr>
          </thead>
          <tbody>
            {(events.data ?? []).map((e) => (
              <tr key={e.id} className="border-t border-line align-top">
                <td className="px-4 py-2.5"><StatusPill status={severityStatus(e.severity)} label={e.severity} /></td>
                <td className="px-4 py-2.5 font-medium">{e.type}</td>
                <td className="px-4 py-2.5">{e.userId ? <Link href={`/users/${e.userId}`} className="text-ink-2 hover:underline">{e.username ? `@${e.username}` : e.userId.slice(0, 10)}</Link> : '—'}</td>
                <td className="max-w-[320px] px-4 py-2.5 font-mono text-[11px] text-muted"><span className="line-clamp-2 break-all">{JSON.stringify(e.details)}</span></td>
                <td className="px-4 py-2.5 text-muted">{dateTime(e.createdAt)}</td>
                <td className="px-4 py-2.5 text-right">
                  {e.status === 'OPEN' && (
                    <span className="inline-flex gap-1.5">
                      <Btn onClick={() => resolve(e.id, 'resolve')}>Resolve</Btn>
                      <Btn onClick={() => resolve(e.id, 'dismiss')}>Dismiss</Btn>
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {!events.data?.length && <p className="p-6 text-center text-[13px] text-muted">No {status.toLowerCase()} events.</p>}
      </div>
    </Shell>
  );
}
