'use client';

import { motion } from 'framer-motion';
import { FolderHeart, Home, Plus, UserRound } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/cn';
import { useT } from '@/lib/i18n';
import { haptic } from '@/lib/telegram';

const TABS = [
  { href: '/', key: 'home', icon: Home },
  { href: '/create', key: 'create', icon: Plus, accent: true },
  { href: '/library', key: 'library', icon: FolderHeart },
  { href: '/profile', key: 'profile', icon: UserRound },
] as const;

export function TabBar() {
  const pathname = usePathname();
  const { t } = useT();
  return (
    <nav className="fixed inset-x-0 bottom-0 z-30 mx-auto max-w-md px-4 pb-safe">
      {/* Scrim: content scrolling under the floating bar fades into the canvas. */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[120px] bg-gradient-to-t from-canvas via-canvas/90 to-transparent" />
      <div className="mb-3 flex items-center justify-around rounded-[24px] border border-white/[0.08] bg-[#0c0c0e]/95 px-2 py-1.5 shadow-[0_18px_40px_-12px_rgba(0,0,0,0.9)] backdrop-blur-xl">
        {TABS.map(({ href, key, icon: Icon, ...rest }) => {
          const accent = 'accent' in rest && rest.accent;
          const active = href === '/' ? pathname === '/' : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              onClick={() => haptic.select()}
              className={cn('relative flex flex-1 flex-col items-center gap-0.5 rounded-2xl py-1.5 text-[10px] font-semibold transition-colors', active ? 'text-white' : 'text-muted')}
            >
              {active && !accent && (
                <motion.span layoutId="tab-active" className="absolute inset-0 -z-10 rounded-2xl bg-brand/10" transition={{ type: 'spring', stiffness: 500, damping: 38 }} />
              )}
              {accent ? (
                <span className="grid size-8 place-items-center rounded-full bg-brand-grad text-white shadow-red">
                  <Icon className="size-[18px]" strokeWidth={2.8} />
                </span>
              ) : (
                <Icon className={cn('size-[22px]', active && 'text-brand')} strokeWidth={active ? 2.3 : 1.9} />
              )}
              {t.nav[key]}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
