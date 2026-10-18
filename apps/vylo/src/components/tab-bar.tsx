'use client';

import { motion } from 'framer-motion';
import { Bookmark, Compass, Map, Plus, UserRound } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useUI } from '@/store/ui';
import { cn } from '@/lib/utils';

const tabs = [
  { href: '/map/', label: 'Карта', icon: Map },
  { href: '/discover/', label: 'Обзор', icon: Compass },
  null,
  { href: '/saved/', label: 'Сохранённое', icon: Bookmark },
  { href: '/profile/', label: 'Профиль', icon: UserRound },
] as const;

export const TAB_ROUTES = ['/map', '/discover', '/saved', '/profile', '/meetups'];

export function normalizePath(p: string) {
  return p.length > 1 ? p.replace(/\/$/, '') : p;
}

export function TabBar() {
  const pathname = normalizePath(usePathname());
  const openSheet = useUI((s) => s.openSheet);
  if (!TAB_ROUTES.includes(pathname)) return null;

  return (
    <nav className="pb-safe fixed inset-x-0 bottom-0 z-40 px-3">
      <div className="glass relative mb-2 flex h-[68px] items-center justify-around rounded-[28px] px-1 shadow-float ring-1 ring-black/[0.04]">
        {tabs.map((t) => {
          if (!t)
            return (
              <button
                key="create"
                aria-label="Создать"
                onClick={() => openSheet({ type: 'create' })}
                className="press -mt-1 grid size-[54px] place-items-center rounded-full bg-gradient-to-b from-[#7577f7] to-brand-600 text-white shadow-brand"
              >
                <Plus className="size-6" strokeWidth={2.6} />
              </button>
            );
          const active = pathname === normalizePath(t.href) || (t.href === '/discover/' && pathname === '/meetups');
          const Icon = t.icon;
          return (
            <Link key={t.href} href={t.href} className="press relative flex w-16 flex-col items-center gap-1 py-1.5">
              {active && (
                <motion.span layoutId="tab-dot" className="absolute -top-0.5 h-1 w-5 rounded-full bg-brand" transition={{ type: 'spring', stiffness: 500, damping: 36 }} />
              )}
              <Icon className={cn('size-[22px] transition-colors', active ? 'text-brand' : 'text-faint')} strokeWidth={active ? 2.4 : 2} fill={active && t.href === '/saved/' ? 'currentColor' : 'none'} />
              <span className={cn('text-[10px] font-semibold transition-colors', active ? 'text-brand' : 'text-faint')}>{t.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
