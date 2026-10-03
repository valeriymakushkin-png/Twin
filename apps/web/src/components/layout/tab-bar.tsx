'use client';

import { motion } from 'framer-motion';
import { FolderHeart, Home, Plus, UserRound } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/cn';
import { haptic } from '@/lib/telegram';

const TABS = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/create', label: 'Create', icon: Plus, accent: true },
  { href: '/library', label: 'Library', icon: FolderHeart },
  { href: '/profile', label: 'Profile', icon: UserRound },
];

export function TabBar() {
  const pathname = usePathname();
  return (
    <nav className="fixed inset-x-0 bottom-0 z-30 mx-auto max-w-md px-4 pb-safe">
      <div className="mb-3 flex items-center justify-around rounded-[22px] border border-line bg-[#101016]/92 px-2 py-1.5 shadow-card backdrop-blur-xl">
        {TABS.map(({ href, label, icon: Icon, accent }) => {
          const active = href === '/' ? pathname === '/' : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              onClick={() => haptic.select()}
              className={cn('relative flex flex-1 flex-col items-center gap-0.5 rounded-2xl py-1.5 text-[10px] font-medium transition-colors', active ? 'text-white' : 'text-muted')}
            >
              {active && (
                <motion.span layoutId="tab-active" className="absolute inset-0 -z-10 rounded-2xl bg-white/[0.07]" transition={{ type: 'spring', stiffness: 500, damping: 38 }} />
              )}
              {accent ? (
                <span className="grid size-7 place-items-center rounded-xl bg-aurora text-white shadow-[0_6px_20px_-6px_rgba(217,70,239,0.8)]">
                  <Icon className="size-4" strokeWidth={2.6} />
                </span>
              ) : (
                <Icon className="size-[22px]" strokeWidth={active ? 2.3 : 1.9} />
              )}
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
