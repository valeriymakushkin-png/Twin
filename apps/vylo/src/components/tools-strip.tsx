'use client';

import { CalendarRange, CloudDownload, Compass, Hourglass, MessageSquareText, Route, Wallet, type LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { useI18n } from '@/i18n/use';
import type { MessageKey } from '@/i18n';

interface Tool {
  href: string;
  icon: LucideIcon;
  title: MessageKey;
  text: MessageKey;
  color: string;
}

const TOOLS: Tool[] = [
  { href: '/where/', icon: Compass, title: 'tools.where', text: 'tools.whereText', color: 'from-[#2dd4bf] to-[#0891b2]' },
  { href: '/visa/stay/', icon: Hourglass, title: 'stay.title', text: 'stay.cardText', color: 'from-[#fb7185] to-[#e11d48]' },
  { href: '/visa/chain/', icon: Route, title: 'chain.title', text: 'chain.cardText', color: 'from-[#34d399] to-[#0d9488]' },
  { href: '/expenses/', icon: Wallet, title: 'expenses.title', text: 'expenses.cardText', color: 'from-[#818cf8] to-[#0ea5e9]' },
  { href: '/phrases/', icon: MessageSquareText, title: 'phrases.title', text: 'phrases.cardText', color: 'from-[#f472b6] to-[#8b5cf6]' },
  { href: '/offline/', icon: CloudDownload, title: 'offlineMgr.manageTitle', text: 'offlineMgr.cardText', color: 'from-[#64748b] to-[#334155]' },
  { href: '/plan/', icon: CalendarRange, title: 'tools.plan', text: 'tools.planText', color: 'from-[#f59e0b] to-[#e11d48]' },
];

/** Entry points to the planning tools, shown on the discover screen. */
export function ToolsStrip() {
  const { t } = useI18n();
  return (
    <div className="no-scrollbar mt-4 flex gap-3 overflow-x-auto px-5 pb-1">
      {TOOLS.map(({ href, icon: Icon, title, text, color }) => (
        <Link key={href} href={href} className="press flex w-[188px] shrink-0 items-center gap-3 rounded-[20px] bg-white p-3 shadow-soft ring-1 ring-line-soft">
          <span className={`grid size-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br text-white ${color}`}>
            <Icon className="size-5" />
          </span>
          <span className="min-w-0">
            <span className="block truncate text-[14px] font-bold">{t(title)}</span>
            <span className="block truncate text-[11.5px] text-muted">{t(text)}</span>
          </span>
        </Link>
      ))}
    </div>
  );
}
