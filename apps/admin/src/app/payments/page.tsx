'use client';

import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { useState } from 'react';
import { toast } from 'sonner';
import { Shell } from '@/components/shell';
import { Btn, PageHeader, StatusPill } from '@/components/ui';
import { adminApi } from '@/lib/api';
import { dateTime } from '@/lib/format';

export default function PaymentsPage() {
  const [status, setStatus] = useState('');
  const { data, refetch } = useQuery({ queryKey: ['payments', status], queryFn: () => adminApi.payments(status || undefined) });

  return (
    <Shell>
      <PageHeader
        title="Payments"
        subtitle="Telegram Stars transactions. Refunds call refundStarPayment and revoke the purchase."
        right={
          <select value={status} onChange={(e) => setStatus(e.target.value)} className="h-9 rounded-xl border border-line bg-card px-3 text-[13px]">
            <option value="">All (non-pending)</option>
            <option value="PAID">Paid</option>
            <option value="REFUNDED">Refunded</option>
            <option value="PENDING">Pending</option>
            <option value="EXPIRED">Expired</option>
          </select>
        }
      />
      <div className="overflow-x-auto rounded-2xl border border-line bg-card">
        <table className="w-full min-w-[820px] text-[12.5px]">
          <thead className="border-b border-line text-left text-muted">
            <tr>{['User', 'Product', 'Stars', 'Status', 'Recurring', 'Paid', 'Refunded', ''].map((h) => <th key={h} className="px-4 py-2.5 font-medium">{h}</th>)}</tr>
          </thead>
          <tbody className="tabular">
            {(data ?? []).map((p) => (
              <tr key={p.id} className="border-t border-line">
                <td className="px-4 py-2.5">{p.userId ? <Link href={`/users/${p.userId}`} className="hover:underline">{p.username ? `@${p.username}` : p.telegramId}</Link> : <span className="text-muted">deleted user</span>}</td>
                <td className="px-4 py-2.5">{p.productId}</td>
                <td className="px-4 py-2.5">⭐ {p.amount}</td>
                <td className="px-4 py-2.5">
                  {p.status === 'PAID' ? <StatusPill status="good" label="Paid" /> : p.status === 'REFUNDED' ? <StatusPill status="warning" label="Refunded" /> : <span className="text-muted">{p.status.toLowerCase()}</span>}
                </td>
                <td className="px-4 py-2.5 text-muted">{p.isRecurring ? 'yes' : '—'}</td>
                <td className="px-4 py-2.5 text-muted">{dateTime(p.paidAt)}</td>
                <td className="px-4 py-2.5 text-muted">{dateTime(p.refundedAt)}</td>
                <td className="px-4 py-2.5 text-right">
                  {p.status === 'PAID' && p.userId && (
                    <Btn
                      variant="danger"
                      onClick={async () => {
                        if (!confirm(`Refund ⭐ ${p.amount} and revoke ${p.productId}?`)) return;
                        try {
                          await adminApi.refund(p.id);
                          toast.success('Refunded');
                          void refetch();
                        } catch (e) {
                          toast.error((e as Error).message);
                        }
                      }}
                    >
                      Refund
                    </Btn>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {!data?.length && <p className="p-6 text-center text-[13px] text-muted">No payments.</p>}
      </div>
    </Shell>
  );
}
