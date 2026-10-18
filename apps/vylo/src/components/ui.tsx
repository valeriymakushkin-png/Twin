'use client';

import { motion } from 'framer-motion';
import { BadgeCheck, ChevronLeft, ChevronRight, Sparkles, Star } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { userById } from '@/data/social';
import { useI18n } from '@/i18n/use';
import { avatarFromSeed } from '@/lib/avatar';
import { cn } from '@/lib/utils';
import { useApp } from '@/store/app';
import { AvatarArt } from './avatar-art';

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' | 'ghost' | 'dark' | 'soft' | 'gold'; size?: 'sm' | 'md' | 'lg' }) {
  return (
    <button
      {...props}
      className={cn(
        'press inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-[-0.01em] disabled:pointer-events-none disabled:opacity-45',
        size === 'sm' && 'h-9 px-4 text-[13px]',
        size === 'md' && 'h-11 px-5 text-[15px]',
        size === 'lg' && 'h-14 px-6 text-base',
        variant === 'primary' && 'bg-gradient-to-b from-[#7173f5] to-brand-600 text-white shadow-brand',
        variant === 'secondary' && 'border border-brand/25 bg-white text-brand-600 shadow-soft',
        variant === 'ghost' && 'text-ink-2 hover:bg-surface-2',
        variant === 'dark' && 'bg-ink text-white shadow-float',
        variant === 'soft' && 'bg-brand-50 text-brand-600',
        variant === 'gold' && 'bg-gradient-to-b from-[#fcd34d] to-[#f59e0b] text-[#451a03] shadow-[0_10px_28px_-8px_rgba(245,158,11,0.7)]',
        className,
      )}
    >
      {children}
    </button>
  );
}

export function IconButton({
  children,
  className,
  tone = 'light',
  label,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { tone?: 'light' | 'glass' | 'plain'; label: string }) {
  return (
    <button
      aria-label={label}
      {...props}
      className={cn(
        'press grid size-10 shrink-0 place-items-center rounded-full',
        tone === 'light' && 'bg-white text-ink shadow-soft',
        tone === 'glass' && 'glass-dark text-white ring-1 ring-white/20',
        tone === 'plain' && 'text-ink',
        className,
      )}
    >
      {children}
    </button>
  );
}

export function BackButton({ tone = 'light', className }: { tone?: 'light' | 'glass'; className?: string }) {
  const router = useRouter();
  const { t } = useI18n();
  return (
    <IconButton label={t('common.back')} tone={tone} className={className} onClick={() => (window.history.length > 1 ? router.back() : router.push('/map/'))}>
      <ChevronLeft className="size-5" strokeWidth={2.4} />
    </IconButton>
  );
}

export function Chip({ active, children, icon, className, ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { active?: boolean; icon?: ReactNode }) {
  return (
    <button
      {...props}
      className={cn(
        'press inline-flex h-9 shrink-0 items-center gap-1.5 rounded-full px-3.5 text-[13px] font-semibold transition-colors',
        active ? 'bg-brand text-white shadow-brand' : 'bg-white text-ink-2 shadow-soft ring-1 ring-line-soft',
        className,
      )}
    >
      {icon}
      {children}
    </button>
  );
}

export function Tag({ children, className, style }: { children: ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <span style={style} className={cn('inline-flex h-6 shrink-0 items-center whitespace-nowrap rounded-full bg-surface-2 px-2.5 text-[11px] font-medium text-ink-2', className)}>
      {children}
    </span>
  );
}

export function Rating({ value, count, className, light }: { value: number; count?: number; className?: string; light?: boolean }) {
  const { f } = useI18n();
  return (
    <span className={cn('inline-flex items-center gap-1 text-[13px] font-semibold', light ? 'text-white' : 'text-ink', className)}>
      <Star className="size-3.5 fill-star text-star" />
      {value.toFixed(1)}
      {count !== undefined && <span className={cn('font-normal', light ? 'text-white/75' : 'text-muted')}>({f.compact(count)})</span>}
    </span>
  );
}

export function SectionHeader({ title, href, onAction, action, className }: { title: string; href?: string; onAction?: () => void; action?: string; className?: string }) {
  const { t } = useI18n();
  const label = action ?? t('common.seeAll');
  return (
    <div className={cn('flex items-end justify-between gap-3 px-5', className)}>
      <h2 className="text-[19px] font-bold tracking-[-0.02em]">{title}</h2>
      {onAction && (
        <button onClick={onAction} className="flex shrink-0 items-center text-[13px] font-medium text-muted">
          {label}
          <ChevronRight className="size-4" />
        </button>
      )}
      {href && (
        <Link href={href} className="flex shrink-0 items-center text-[13px] font-medium text-muted">
          {label}
          <ChevronRight className="size-4" />
        </Link>
      )}
    </div>
  );
}

/** Avatar for a user id; "me" resolves to the local profile's own illustrated avatar. */
export function Avatar({ userId, size = 36, ring, className }: { userId: string; size?: number; ring?: boolean; className?: string }) {
  const mine = useApp((s) => s.profile.avatar);
  const user = userId === 'me' ? null : userById(userId);
  const config = user ? avatarFromSeed(user.avatar) : mine;
  return (
    <div className={cn('relative shrink-0 overflow-hidden rounded-full', ring && 'ring-2 ring-white', className)} style={{ width: size, height: size }}>
      <AvatarArt config={config} size={size} />
    </div>
  );
}

export function UserName({ userId, className }: { userId: string; className?: string }) {
  const { c } = useI18n();
  const profileName = useApp((s) => s.profile.name);
  const plus = useApp((s) => s.plus.active);
  const user = userId === 'me' ? null : userById(userId);
  return (
    <span className={cn('inline-flex items-center gap-1', className)}>
      {user ? c.users[user.id].name : profileName}
      {user?.verified && <BadgeCheck className="size-4 shrink-0 fill-brand text-white" />}
      {!user && plus && <PlusBadge />}
    </span>
  );
}

export function PlusBadge({ className }: { className?: string }) {
  return (
    <span className={cn('inline-flex h-[18px] items-center gap-0.5 rounded-full bg-gradient-to-r from-[#fcd34d] to-[#f59e0b] px-1.5 text-[10px] font-black text-[#451a03]', className)}>
      <Sparkles className="size-2.5" strokeWidth={3} />
      PLUS
    </span>
  );
}

export function AvatarStack({ ids, max = 3, size = 26, extra, className }: { ids: string[]; max?: number; size?: number; extra?: number; className?: string }) {
  const shown = ids.slice(0, max);
  const rest = (extra ?? 0) + Math.max(0, ids.length - max);
  return (
    <div className={cn('flex items-center', className)}>
      {shown.map((id, i) => (
        <Avatar key={id} userId={id} size={size} ring className={i ? '-ml-2' : ''} />
      ))}
      {rest > 0 && (
        <span className="-ml-2 grid place-items-center rounded-full bg-brand-50 px-1.5 text-[10px] font-bold text-brand-600 ring-2 ring-white" style={{ height: size, minWidth: size }}>
          +{rest}
        </span>
      )}
    </div>
  );
}

export function Segmented<T extends string>({
  options,
  value,
  onChange,
  className,
  layoutId,
}: {
  options: { value: T; label: string }[];
  value: T;
  onChange: (v: T) => void;
  className?: string;
  layoutId: string;
}) {
  return (
    <div className={cn('flex gap-1 rounded-full bg-surface-2 p-1', className)}>
      {options.map((o) => (
        <button key={o.value} onClick={() => onChange(o.value)} className="relative flex-1 rounded-full px-1 py-2 text-[13px] font-semibold">
          {value === o.value && <motion.span layoutId={layoutId} className="absolute inset-0 rounded-full bg-white shadow-soft" transition={{ type: 'spring', stiffness: 500, damping: 38 }} />}
          <span className={cn('relative block truncate transition-colors', value === o.value ? 'text-brand-600' : 'text-muted')}>{o.label}</span>
        </button>
      ))}
    </div>
  );
}

export function UnderlineTabs<T extends string>({
  options,
  value,
  onChange,
  layoutId,
  className,
  accent,
}: {
  options: { value: T; label: string }[];
  value: T;
  onChange: (v: T) => void;
  layoutId: string;
  className?: string;
  accent?: string;
}) {
  return (
    <div className={cn('no-scrollbar flex gap-6 overflow-x-auto border-b border-line-soft px-5', className)}>
      {options.map((o) => (
        <button key={o.value} onClick={() => onChange(o.value)} className="relative shrink-0 pb-3 pt-1 text-[14px] font-semibold">
          <span className={value === o.value ? (accent ? '' : 'text-brand-600') : 'text-muted'} style={value === o.value && accent ? { color: accent } : undefined}>
            {o.label}
          </span>
          {value === o.value && <motion.span layoutId={layoutId} className={cn('absolute inset-x-0 -bottom-px h-[2.5px] rounded-full', !accent && 'bg-brand')} style={accent ? { background: accent } : undefined} />}
        </button>
      ))}
    </div>
  );
}

export function TopBar({ title, right, className }: { title?: string; right?: ReactNode; className?: string }) {
  return (
    <header className={cn('pt-safe sticky top-0 z-30 bg-canvas/85 backdrop-blur-xl', className)}>
      <div className="flex h-14 items-center gap-3 px-4">
        <BackButton />
        <h1 className="min-w-0 flex-1 truncate text-[17px] font-bold tracking-[-0.02em]">{title}</h1>
        {right}
      </div>
    </header>
  );
}

export function PageTitle({ title, subtitle, right }: { title: string; subtitle?: string; right?: ReactNode }) {
  return (
    <header className="pt-safe px-5">
      <div className="flex items-center justify-between gap-3 pt-3">
        <div className="min-w-0">
          <h1 className="text-[30px] font-bold leading-tight tracking-[-0.035em]">{title}</h1>
          {subtitle && <p className="mt-0.5 text-[14px] text-muted">{subtitle}</p>}
        </div>
        {right}
      </div>
    </header>
  );
}

export function Empty({ icon, title, text, action }: { icon: ReactNode; title: string; text: string; action?: ReactNode }) {
  return (
    <div className="flex flex-col items-center px-8 py-12 text-center">
      <div className="grid size-16 place-items-center rounded-3xl bg-brand-50 text-brand">{icon}</div>
      <h3 className="mt-4 text-[17px] font-bold">{title}</h3>
      <p className="mt-1 text-[14px] leading-relaxed text-muted">{text}</p>
      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}

export function ProgressBar({ value, className, color = 'bg-brand', style }: { value: number; className?: string; color?: string; style?: React.CSSProperties }) {
  return (
    <div className={cn('h-2 overflow-hidden rounded-full bg-surface-2', className)}>
      <motion.div
        className={cn('h-full rounded-full', color)}
        style={style}
        initial={{ width: 0 }}
        animate={{ width: `${Math.max(0, Math.min(1, value)) * 100}%` }}
        transition={{ type: 'spring', stiffness: 120, damping: 22 }}
      />
    </div>
  );
}

export function DemoBadge({ className }: { className?: string }) {
  const { t } = useI18n();
  return <span className={cn('rounded-full bg-surface-2 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.06em] text-faint', className)}>{t('licenses.demoBadge')}</span>;
}
