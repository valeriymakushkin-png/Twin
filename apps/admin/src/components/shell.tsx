'use client';

import { BarChart3, Coins, Cpu, LayoutDashboard, LogOut, Palette, ShieldAlert, Star, Users } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState, type ReactNode } from 'react';
import { clearToken, getToken } from '@/lib/api';
import { cn } from '@/lib/format';

const NAV = [
  { href: '/', label: 'Overview', icon: LayoutDashboard },
  { href: '/users', label: 'Users', icon: Users },
  { href: '/revenue', label: 'Revenue', icon: Coins },
  { href: '/generations', label: 'Generations', icon: Cpu },
  { href: '/abuse', label: 'Abuse', icon: ShieldAlert },
  { href: '/payments', label: 'Payments', icon: Star },
  { href: '/styles', label: 'Styles', icon: Palette },
];

export function Shell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!getToken()) router.replace('/login');
    else setReady(true);
  }, [router]);

  if (!ready) return null;
  return (
    <div className="flex min-h-dvh">
      <aside className="sticky top-0 hidden h-dvh w-56 shrink-0 flex-col border-r border-line bg-card px-3 py-4 md:flex">
        <div className="mb-6 flex items-center gap-2 px-2">
          <BarChart3 className="size-5 text-accent" />
          <span className="text-[14px] font-semibold">Mascot AI · Admin</span>
        </div>
        <nav className="flex-1 space-y-0.5">
          {NAV.map(({ href, label, icon: Icon }) => {
            const active = href === '/' ? pathname === '/' : pathname.startsWith(href);
            return (
              <Link key={href} href={href} className={cn('flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[13px]', active ? 'bg-white/[0.07] text-ink' : 'text-muted hover:text-ink-2')}>
                <Icon className="size-4" />
                {label}
              </Link>
            );
          })}
        </nav>
        <button
          onClick={() => {
            clearToken();
            router.replace('/login');
          }}
          className="flex items-center gap-2 px-2.5 py-2 text-[13px] text-muted hover:text-ink-2"
        >
          <LogOut className="size-4" /> Sign out
        </button>
      </aside>
      <div className="min-w-0 flex-1">
        <nav className="flex gap-1 overflow-x-auto border-b border-line px-4 py-2 md:hidden">
          {NAV.map(({ href, label }) => (
            <Link key={href} href={href} className={cn('whitespace-nowrap rounded-lg px-2.5 py-1.5 text-[12px]', pathname === href ? 'bg-white/10 text-ink' : 'text-muted')}>
              {label}
            </Link>
          ))}
        </nav>
        <main className="mx-auto max-w-[1280px] px-4 py-6 md:px-8">{children}</main>
      </div>
    </div>
  );
}
