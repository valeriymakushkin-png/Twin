'use client';

import { motion, type HTMLMotionProps } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { forwardRef, type ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { haptic } from '@/lib/telegram';

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'star';
type Size = 'sm' | 'md' | 'lg';

const variants: Record<Variant, string> = {
  primary: 'bg-brand-grad text-white shadow-red hover:brightness-110',
  secondary: 'bg-white/[0.06] text-ink border border-white/10 hover:bg-white/[0.09]',
  outline: 'border border-white/15 bg-white/[0.02] text-ink hover:border-brand/60 hover:bg-brand/10',
  ghost: 'text-ink-2 hover:bg-white/[0.05]',
  danger: 'bg-danger/10 text-danger border border-danger/25 hover:bg-danger/15',
  star: 'bg-brand-grad text-white shadow-red hover:brightness-110',
};

const sizes: Record<Size, string> = {
  sm: 'h-9 px-4 text-[13px] rounded-xl gap-1.5',
  md: 'h-12 px-5 text-[14px] rounded-2xl gap-2',
  lg: 'h-14 px-6 text-[15px] rounded-2xl gap-2.5',
};

export interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  icon?: ReactNode;
  block?: boolean;
  children?: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = 'primary', size = 'md', loading, icon, block, className, children, disabled, onClick, ...props },
  ref,
) {
  return (
    <motion.button
      ref={ref}
      whileTap={disabled || loading ? undefined : { scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      className={cn(
        'relative inline-flex select-none items-center justify-center font-semibold tracking-[-0.01em] transition-[filter,background-color,border-color,opacity] disabled:pointer-events-none disabled:opacity-40',
        variants[variant],
        sizes[size],
        block && 'w-full',
        className,
      )}
      disabled={disabled || loading}
      onClick={(e) => {
        haptic.tap(variant === 'primary' || variant === 'star' ? 'medium' : 'light');
        onClick?.(e);
      }}
      {...props}
    >
      {loading ? <Loader2 className="size-4 animate-spin" /> : icon}
      {children}
    </motion.button>
  );
});
