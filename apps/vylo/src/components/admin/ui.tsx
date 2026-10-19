'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Loader2, Search, X } from 'lucide-react';
import { createContext, useCallback, useContext, useState, type ButtonHTMLAttributes, type InputHTMLAttributes, type ReactNode, type TextareaHTMLAttributes } from 'react';
import { useI18n } from '@/i18n/use';
import { ApiError } from '@/lib/api';
import { AdminError } from '@/lib/admin/repo';
import { cn } from '@/lib/utils';

/* The console follows macOS/iOS settings conventions: grouped inset cards, hairline separators,
   system blue for actions, SF-like type scale. */

export function useAdminError() {
  const { tk, t } = useI18n();
  return (e: unknown) => {
    const code = e instanceof ApiError ? e.code : e instanceof AdminError ? e.message : e instanceof DOMException && e.name === 'QuotaExceededError' ? 'storage' : e instanceof TypeError ? 'network' : 'generic';
    const text = tk(`admin.errors.${code}`);
    return text.startsWith('admin.') ? t('admin.errors.generic') : text;
  };
}

export function AButton({ variant = 'primary', size = 'md', loading, className, children, ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' | 'plain' | 'danger'; size?: 'sm' | 'md'; loading?: boolean }) {
  return (
    <button
      {...props}
      disabled={props.disabled || loading}
      className={cn(
        'inline-flex shrink-0 items-center justify-center gap-1.5 rounded-full font-semibold transition active:scale-[0.97] disabled:opacity-40',
        size === 'sm' ? 'h-8 px-3.5 text-[13px]' : 'h-10 px-5 text-[14px]',
        variant === 'primary' && 'bg-[#0071e3] text-white hover:bg-[#0077ed]',
        variant === 'secondary' && 'bg-[#e8e8ed] text-[#1d1d1f] hover:bg-[#dcdce1]',
        variant === 'plain' && 'text-[#0071e3] hover:bg-[#0071e3]/8',
        variant === 'danger' && 'bg-[#ff3b30]/10 text-[#d70015] hover:bg-[#ff3b30]/15',
        className,
      )}
    >
      {loading && <Loader2 className="size-4 animate-spin" />}
      {children}
    </button>
  );
}

export function Card({ title, footer, action, children, className, padded = false }: { title?: ReactNode; footer?: ReactNode; action?: ReactNode; children: ReactNode; className?: string; padded?: boolean }) {
  return (
    <section className={className}>
      {(title || action) && (
        <div className="mb-2 flex items-end justify-between gap-3 px-1">
          {title && <h3 className="text-[13px] font-semibold uppercase tracking-[0.04em] text-[#6e6e73]">{title}</h3>}
          {action}
        </div>
      )}
      <div className={cn('overflow-hidden rounded-[14px] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04),0_0_0_0.5px_rgba(0,0,0,0.06)]', padded && 'p-4')}>{children}</div>
      {footer && <p className="mt-1.5 px-1 text-[12px] leading-snug text-[#86868b]">{footer}</p>}
    </section>
  );
}

/** A labelled row inside a grouped card: label on the left on wide screens, stacked on phones. */
export function Row({ label, hint, children, className }: { label: ReactNode; hint?: ReactNode; children: ReactNode; className?: string }) {
  return (
    <div className={cn('grid gap-1.5 border-b border-[#e5e5ea] px-4 py-3 last:border-b-0 md:grid-cols-[200px_1fr] md:items-center md:gap-4', className)}>
      <div>
        <p className="text-[14px] font-medium text-[#1d1d1f]">{label}</p>
        {hint && <p className="text-[12px] leading-snug text-[#86868b]">{hint}</p>}
      </div>
      <div className="min-w-0">{children}</div>
    </div>
  );
}

const field = 'w-full rounded-[9px] bg-[#f5f5f7] px-3 text-[14px] text-[#1d1d1f] outline-none ring-1 ring-transparent transition placeholder:text-[#a1a1a6] focus:bg-white focus:ring-2 focus:ring-[#0071e3]/60';

export function TextInput({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={cn(field, 'h-9', className)} />;
}

export function TextArea({ className, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea rows={3} {...props} className={cn(field, 'resize-y py-2 leading-relaxed', className)} />;
}

export function NumberInput({ value, onChange, step = 'any', className, ...props }: Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> & { value: number | undefined; onChange: (v: number | undefined) => void }) {
  return (
    <input
      type="number"
      step={step}
      value={value ?? ''}
      onChange={(e) => onChange(e.target.value === '' ? undefined : Number(e.target.value))}
      {...props}
      className={cn(field, 'h-9 tabular-nums', className)}
    />
  );
}

export function Select<T extends string>({ value, onChange, options, className }: { value: T; onChange: (v: T) => void; options: { value: T; label: string }[]; className?: string }) {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value as T)} className={cn(field, 'h-9 appearance-none bg-[url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2712%27 height=%2712%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%2386868b%27 stroke-width=%273%27%3E%3Cpath d=%27m6 9 6 6 6-6%27/%3E%3C/svg%3E")] bg-[length:12px] bg-[right_12px_center] bg-no-repeat pr-8', className)}>
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  );
}

export function Toggle({ checked, onChange, label }: { checked: boolean; onChange: (v: boolean) => void; label?: string }) {
  return (
    <button type="button" role="switch" aria-checked={checked} aria-label={label} onClick={() => onChange(!checked)} className={cn('relative h-[31px] w-[51px] shrink-0 rounded-full transition-colors', checked ? 'bg-[#34c759]' : 'bg-[#e9e9eb]')}>
      <span className={cn('absolute top-[2px] size-[27px] rounded-full bg-white shadow-[0_3px_8px_rgba(0,0,0,0.15),0_1px_1px_rgba(0,0,0,0.16)] transition-all', checked ? 'left-[22px]' : 'left-[2px]')} />
    </button>
  );
}

export function Segmented<T extends string>({ value, onChange, options, className }: { value: T; onChange: (v: T) => void; options: { value: T; label: ReactNode }[]; className?: string }) {
  return (
    <div className={cn('inline-flex rounded-[9px] bg-[#e8e8ed] p-[2px]', className)}>
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          onClick={() => onChange(o.value)}
          className={cn('h-7 rounded-[7px] px-3 text-[13px] font-medium transition-all', value === o.value ? 'bg-white text-[#1d1d1f] shadow-[0_1px_3px_rgba(0,0,0,0.12)]' : 'text-[#1d1d1f]/70')}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

export function Badge({ color = '#6e6e73', children, className }: { color?: string; children: ReactNode; className?: string }) {
  return (
    <span className={cn('inline-flex h-[20px] items-center rounded-full px-2 text-[11px] font-semibold', className)} style={{ background: `${color}1a`, color }}>
      {children}
    </span>
  );
}

export function SearchField({ value, onChange, placeholder, className }: { value: string; onChange: (v: string) => void; placeholder?: string; className?: string }) {
  return (
    <label className={cn('flex h-9 items-center gap-2 rounded-[9px] bg-[#e8e8ed]/80 px-2.5', className)}>
      <Search className="size-4 text-[#86868b]" />
      <input value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className="min-w-0 flex-1 bg-transparent text-[14px] outline-none placeholder:text-[#86868b]" />
      {value && (
        <button type="button" onClick={() => onChange('')} className="grid size-4 place-items-center rounded-full bg-[#86868b] text-white">
          <X className="size-3" strokeWidth={3} />
        </button>
      )}
    </label>
  );
}

export function PageHeader({ title, subtitle, actions }: { title: ReactNode; subtitle?: ReactNode; actions?: ReactNode }) {
  return (
    <header className="mb-6 flex flex-wrap items-end justify-between gap-3">
      <div className="min-w-0">
        <h1 className="text-[28px] font-bold leading-tight tracking-[-0.02em] text-[#1d1d1f] md:text-[32px]">{title}</h1>
        {subtitle && <p className="mt-1 text-[14px] text-[#6e6e73]">{subtitle}</p>}
      </div>
      {actions && <div className="flex flex-wrap items-center gap-2">{actions}</div>}
    </header>
  );
}

export function Empty({ children }: { children: ReactNode }) {
  return <p className="px-4 py-10 text-center text-[14px] text-[#86868b]">{children}</p>;
}

// --- Dialogs ---------------------------------------------------------------------------------

export function Modal({ open, onClose, title, children, width = 440 }: { open: boolean; onClose: () => void; title?: ReactNode; children: ReactNode; width?: number }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-[200] grid place-items-center bg-black/30 p-4 backdrop-blur-[2px]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={onClose}>
          <motion.div
            role="dialog"
            aria-modal
            className="w-full rounded-[18px] bg-white p-5 shadow-[0_24px_80px_rgba(0,0,0,0.25)]"
            style={{ maxWidth: width }}
            initial={{ scale: 0.96, y: 8 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.96, y: 8 }}
            transition={{ type: 'spring', stiffness: 420, damping: 32 }}
            onMouseDown={(e) => e.stopPropagation()}
          >
            {title && <h2 className="mb-3 text-[17px] font-semibold text-[#1d1d1f]">{title}</h2>}
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

interface ConfirmOptions {
  title: string;
  text?: string;
  confirm?: string;
  danger?: boolean;
}
const ConfirmContext = createContext<(o: ConfirmOptions) => Promise<boolean>>(async () => false);
export const useConfirm = () => useContext(ConfirmContext);

export function ConfirmProvider({ children }: { children: ReactNode }) {
  const { t } = useI18n();
  const [state, setState] = useState<(ConfirmOptions & { resolve: (v: boolean) => void }) | null>(null);
  const ask = useCallback((o: ConfirmOptions) => new Promise<boolean>((resolve) => setState({ ...o, resolve })), []);
  const done = (v: boolean) => {
    state?.resolve(v);
    setState(null);
  };
  return (
    <ConfirmContext.Provider value={ask}>
      {children}
      <Modal open={!!state} onClose={() => done(false)} title={state?.title} width={380}>
        {state?.text && <p className="text-[14px] leading-relaxed text-[#6e6e73]">{state.text}</p>}
        <div className="mt-5 flex justify-end gap-2">
          <AButton variant="secondary" onClick={() => done(false)}>
            {t('admin.common.cancel')}
          </AButton>
          <AButton variant={state?.danger ? 'danger' : 'primary'} onClick={() => done(true)} autoFocus>
            {state?.confirm ?? t('admin.common.done')}
          </AButton>
        </div>
      </Modal>
    </ConfirmContext.Provider>
  );
}
