'use client';

import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { toast } from 'sonner';
import { StatTile } from '@/components/charts';
import { Shell } from '@/components/shell';
import { Btn, PageHeader, Panel, StatusPill, severityStatus } from '@/components/ui';
import { adminApi, API_URL } from '@/lib/api';
import { dateTime } from '@/lib/format';

type Row = Record<string, any>;

export default function UserDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { data: user, refetch } = useQuery({ queryKey: ['user', id], queryFn: () => adminApi.user(id) });

  async function act(fn: () => Promise<unknown>, message: string) {
    try {
      await fn();
      toast.success(message);
      await refetch();
    } catch (e) {
      toast.error((e as Error).message);
    }
  }

  if (!user) return <Shell><p className="text-muted">Loading…</p></Shell>;
  const premium = user.premiumUntil && new Date(user.premiumUntil) > new Date();

  return (
    <Shell>
      <PageHeader
        title={user.username ? `@${user.username}` : (user.firstName ?? user.id)}
        subtitle={`Telegram ${user.telegramId} · joined ${dateTime(user.createdAt)} · source ${user.acquisitionSource ?? 'organic'}`}
        right={
          <div className="flex flex-wrap gap-2">
            {user.isBanned ? (
              <Btn onClick={() => act(() => adminApi.unban(id), 'User unbanned')}>Unban</Btn>
            ) : (
              <Btn variant="danger" onClick={() => { const reason = prompt('Ban reason'); if (reason) void act(() => adminApi.ban(id, reason), 'User banned'); }}>Ban</Btn>
            )}
            <Btn onClick={() => { const d = Number(prompt('Grant Premium days', '30')); if (d > 0) void act(() => adminApi.grantPremium(id, d), 'Premium granted'); }}>Grant Premium</Btn>
            <Btn onClick={() => { const n = Number(prompt('Credits to grant', '50')); if (n > 0) void act(() => adminApi.grantCredits(id, n), 'Credits granted'); }}>Grant credits</Btn>
          </div>
        }
      />
      <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
        <StatTile label="Plan" value={premium ? 'Premium' : 'Free'} hint={premium ? `until ${dateTime(user.premiumUntil)}` : undefined} />
        <StatTile label="Credits" value={user.credits} />
        <StatTile label="Free stickers used" value={user.stickersGenerated} />
        <StatTile label="Referrals" value={user._count?.referrals ?? 0} />
        <StatTile label="Risk score" value={user.riskScore} hint={user.isBanned ? `Banned: ${user.banReason}` : undefined} tone={user.isBanned ? 'critical' : undefined} />
      </div>

      <div className="mt-3 grid gap-3 lg:grid-cols-2">
        <Panel title="Mascots">
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
            {(user.avatars as Row[]).map((a) => (
              <div key={a.id} className="rounded-xl border border-line bg-card-2 p-2 text-[11px]">
                <div className="aspect-square rounded-lg bg-black/30" />
                <div className="mt-1.5 truncate font-medium">{a.name}</div>
                <div className="text-muted">{a.status} · {a.style?.slug}</div>
              </div>
            ))}
            {!user.avatars.length && <p className="text-[12px] text-muted">No mascots.</p>}
          </div>
        </Panel>
        <Panel title="Moderation events">
          <ul className="space-y-2 text-[12px]">
            {(user.moderationEvents as Row[]).map((e) => (
              <li key={e.id} className="flex items-center justify-between gap-2 border-b border-line pb-2">
                <span className="flex items-center gap-2"><StatusPill status={severityStatus(e.severity)} label={e.severity} /> {e.type}</span>
                <span className="text-muted">{dateTime(e.createdAt)}</span>
              </li>
            ))}
            {!user.moderationEvents.length && <li className="text-muted">Clean record.</li>}
          </ul>
        </Panel>
        <Panel title="Payments">
          <table className="w-full text-[12px]">
            <tbody className="tabular">
              {(user.payments as Row[]).map((p) => (
                <tr key={p.id} className="border-t border-line">
                  <td className="py-1.5">{p.productId}</td>
                  <td className="py-1.5">⭐ {p.amount}</td>
                  <td className="py-1.5">{p.status === 'PAID' ? <StatusPill status="good" label="Paid" /> : p.status === 'REFUNDED' ? <StatusPill status="warning" label="Refunded" /> : <span className="text-muted">{p.status.toLowerCase()}</span>}</td>
                  <td className="py-1.5 text-muted">{dateTime(p.paidAt ?? p.createdAt)}</td>
                  <td className="py-1.5 text-right">
                    {p.status === 'PAID' && (
                      <Btn onClick={() => confirm('Refund this payment in Stars and revoke the purchase?') && act(() => adminApi.refund(p.id), 'Refunded')}>Refund</Btn>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {!user.payments.length && <p className="text-[12px] text-muted">No payments.</p>}
        </Panel>
        <Panel title="Recent generations">
          <table className="w-full text-[12px]">
            <tbody className="tabular">
              {(user.generations as Row[]).map((g) => (
                <tr key={g.id} className="border-t border-line">
                  <td className="py-1.5">{g.type}</td>
                  <td className="py-1.5">{g.status === 'SUCCEEDED' ? <StatusPill status="good" label="Done" /> : g.status === 'FAILED' ? <StatusPill status="critical" label={g.errorCode ?? 'Failed'} /> : <span className="text-muted">{g.status.toLowerCase()}</span>}</td>
                  <td className="py-1.5 text-muted">{g.provider ?? '—'}</td>
                  <td className="py-1.5 text-right text-muted">{dateTime(g.createdAt)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Panel>
      </div>
      <p className="mt-6 text-[11px] text-muted">Source photos are never shown in the admin panel. API: {API_URL}</p>
    </Shell>
  );
}
