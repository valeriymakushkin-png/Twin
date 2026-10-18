'use client';

import { motion } from 'framer-motion';
import { Bookmark, Compass, Map, Plus, UserRound } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useI18n } from '@/i18n/use';
import { cn } from '@/lib/utils';
import { useUI } from '@/store/ui';

const tabs = [
  { href: '/map/', key: 'map', icon: Map },
  { href: '/discover/', key: 'discover', icon: Compass },
  null,
  { href: '/saved/', key: 'saved', icon: Bookmark },
  { href: '/profile/', key: 'profile', icon: UserRound },
] as const;

export const TAB_ROUTES = ['/map', '/discover', '/saved', '/profile', '/meetups'];

export function normalizePath(p: string) {
  return p.length > 1 ? p.replace(/\/$/, '') : p;
}

export function TabBar() {
  const pathname = normalizePath(usePathname());
  const openSheet = useUI((s) => s.openSheet);
  const { t } = useI18n();
  if (!TAB_ROUTES.includes(pathname)) return null;

  return (
    <nav className="pb-safe fixed inset-x-0 bottom-0 z-40 px-3">
      <div className="glass relative mb-2 flex h-[68px] items-center justify-around rounded-[28px] px-1 shadow-float ring-1 ring-black/[0.04]">
        {tabs.map((tab) => {
          if (!tab)
            return (
              <button
                key="create"
                aria-label={t('tabs.create')}
                onClick={() => openSheet({ type: 'create' })}
                className="press -mt-1 grid size-[54px] shrink-0 place-items-center rounded-full bg-gradient-to-b from-[#7577f7] to-brand-600 text-white shadow-brand"
              >
                <Plus className="size-6" strokeWidth={2.6} />
              </button>
            );
          const active = pathname === normalizePath(tab.href) || (tab.href === '/discover/' && pathname === '/meetups');
          const Icon = tab.icon;
          return (
            <Link key={tab.href} href={tab.href} className="press relative flex min-w-0 flex-1 flex-col items-center gap-1 py-1.5">
              {active && <motion.span layoutId="tab-dot" className="absolute -top-0.5 h-1 w-5 rounded-full bg-brand" transition={{ type: 'spring', stiffness: 500, damping: 36 }} />}
              <Icon className={cn('size-[22px] transition-colors', active ? 'text-brand' : 'text-faint')} strokeWidth={active ? 2.4 : 2} fill={active && tab.key === 'saved' ? 'currentColor' : 'none'} />
              <span className={cn('w-full truncate text-center text-[10px] font-semibold transition-colors', active ? 'text-brand' : 'text-faint')}>{t(`tabs.${tab.key}`)}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
