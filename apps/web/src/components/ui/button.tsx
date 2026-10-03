'use client';

import { motion, type HTMLMotionProps } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { forwardRef, type ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { haptic } from '@/lib/telegram';

type Variant = 'primary' | 'secondary' | 'ghost' | 'danger' | 'star';
type Size = 'sm' | 'md' | 'lg';

const variants: Record<Variant, string> = {
  primary: 'bg-aurora text-white shadow-[0_10px_40px_-12px_rgba(192,38,211,0.65)] hover:brightness-110',
  secondary: 'glass text-ink hover:bg-white/[0.07]',
  ghost: 'text-ink-2 hover:bg-white/[0.05]',
  danger: 'bg-danger/15 text-danger border border-danger/30 hover:bg-danger/20',
  star: 'bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400 text-black shadow-[0_10px_40px_-12px_rgba(251,191,36,0.7)]',
};

const sizes: Record<Size, string> = {
  sm: 'h-9 px-3.5 text-[13px] rounded-xl gap-1.5',
  md: 'h-11 px-5 text-sm rounded-2xl gap-2',
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
        'relative inline-flex select-none items-center justify-center font-semibold tracking-[-0.01em] transition-[filter,background-color,opacity] disabled:opacity-45 disabled:pointer-events-none',
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
