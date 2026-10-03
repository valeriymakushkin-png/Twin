'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import { Search } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { Shell } from '@/components/shell';
import { Btn, PageHeader, StatusPill } from '@/components/ui';
import { adminApi } from '@/lib/api';
import { compact, dateTime } from '@/lib/format';

export default function UsersPage() {
  const [q, setQ] = useState('');
  const [query, setQuery] = useState('');
  const [plan, setPlan] = useState('');
  const [sort, setSort] = useState('recent');
  const list = useInfiniteQuery({
    queryKey: ['users', query, plan, sort],
    queryFn: ({ pageParam }) => adminApi.users({ q: query, plan, sort, cursor: pageParam }),
    initialPageParam: undefined as string | undefined,
    getNextPageParam: (last) => last.nextCursor ?? undefined,
  });
  const rows = list.data?.pages.flatMap((p) => p.items) ?? [];

  return (
    <Shell>
      <PageHeader title="Users" subtitle="Search by @username, name, Telegram ID or user ID" />
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setQuery(q.trim());
          }}
          className="flex h-9 items-center gap-2 rounded-xl border border-line bg-card px-3"
        >
          <Search className="size-4 text-muted" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search users…" className="w-56 bg-transparent text-[13px] outline-none" />
        </form>
        <select value={plan} onChange={(e) => setPlan(e.target.value)} className="h-9 rounded-xl border border-line bg-card px-3 text-[13px]">
          <option value="">All plans</option>
          <option value="FREE">Free</option>
          <option value="PREMIUM">Premium</option>
        </select>
        <select value={sort} onChange={(e) => setSort(e.target.value)} className="h-9 rounded-xl border border-line bg-card px-3 text-[13px]">
          <option value="recent">Newest</option>
          <option value="risk">Highest risk</option>
        </select>
      </div>
      <div className="overflow-x-auto rounded-2xl border border-line bg-card">
        <table className="w-full min-w-[860px] text-[12.5px]">
          <thead className="border-b border-line text-left text-muted">
            <tr>
              {['User', 'Telegram ID', 'Plan', 'Credits', 'Mascots', 'Generations', 'Stars spent', 'Risk', 'Joined', 'Last seen'].map((h) => (
                <th key={h} className="px-4 py-2.5 font-medium">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="tabular">
            {rows.map((u) => (
              <tr key={u.id} className="border-t border-line hover:bg-white/[0.02]">
                <td className="px-4 py-2.5">
                  <Link href={`/users/${u.id}`} className="font-medium text-ink hover:underline">
                    {u.username ? `@${u.username}` : (u.firstName ?? u.id.slice(0, 8))}
                  </Link>
                  {u.isBanned && <span className="ml-2"><StatusPill status="critical" label="Banned" /></span>}
                </td>
                <td className="px-4 py-2.5 text-muted">{u.telegramId}</td>
                <td className="px-4 py-2.5">{u.plan === 'PREMIUM' ? <StatusPill status="good" label="Premium" /> : <span className="text-muted">Free</span>}</td>
                <td className="px-4 py-2.5">{compact(u.credits)}</td>
                <td className="px-4 py-2.5">{u.avatars}</td>
                <td className="px-4 py-2.5">{compact(u.generations)}</td>
                <td className="px-4 py-2.5">⭐ {compact(u.starsSpent)}</td>
                <td className="px-4 py-2.5">{u.riskScore >= 35 ? <StatusPill status="serious" label={String(u.riskScore)} /> : u.riskScore}</td>
                <td className="px-4 py-2.5 text-muted">{dateTime(u.createdAt)}</td>
                <td className="px-4 py-2.5 text-muted">{dateTime(u.lastSeenAt)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {!rows.length && !list.isLoading && <p className="p-6 text-center text-[13px] text-muted">No users match.</p>}
      </div>
      {list.hasNextPage && (
        <div className="mt-4 text-center">
          <Btn onClick={() => list.fetchNextPage()} disabled={list.isFetchingNextPage}>Load more</Btn>
        </div>
      )}
    </Shell>
  );
}
