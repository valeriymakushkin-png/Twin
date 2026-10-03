'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { TabBar } from './tab-bar';

export function AppShell({ children, tabs = true, className }: { children: ReactNode; tabs?: boolean; className?: string }) {
  return (
    <div className="relative mx-auto min-h-dvh w-full max-w-md">
      <motion.main
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        className={cn('pt-safe px-4', tabs ? 'pb-28' : 'pb-10', className)}
      >
        {children}
      </motion.main>
      {tabs && <TabBar />}
    </div>
  );
}

export function TopBar({ title, subtitle, right }: { title: ReactNode; subtitle?: ReactNode; right?: ReactNode }) {
  return (
    <header className="flex items-start justify-between gap-3 pb-4 pt-5">
      <div className="min-w-0">
        <h1 className="truncate text-[24px] font-bold tracking-[-0.03em]">{title}</h1>
        {subtitle && <p className="mt-1 text-[13.5px] leading-snug text-muted">{subtitle}</p>}
      </div>
      {right}
    </header>
  );
}
