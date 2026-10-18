'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Bookmark } from 'lucide-react';
import { toast } from 'sonner';
import { useApp } from '@/store/app';
import { useUI } from '@/store/ui';
import { cn } from '@/lib/utils';

/** Bookmark toggle with a pop + burst; offers "add to collection" right after saving. */
export function SaveButton({ id, tone = 'plain', className, size = 20 }: { id: string; tone?: 'plain' | 'glass' | 'light'; className?: string; size?: number }) {
  const saved = useApp((s) => s.savedIds.includes(id));
  const toggle = useApp((s) => s.toggleSave);
  const openSheet = useUI((s) => s.openSheet);

  return (
    <button
      aria-label={saved ? 'Убрать из сохранённого' : 'Сохранить'}
      aria-pressed={saved}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        const now = toggle(id);
        if (now)
          toast('Сохранено', {
            description: 'Добавьте в коллекцию, чтобы не потерять',
            action: { label: 'В коллекцию', onClick: () => openSheet({ type: 'collect', itemId: id }) },
          });
      }}
      className={cn(
        'press relative grid shrink-0 place-items-center rounded-full',
        tone === 'plain' && 'size-9 text-ink',
        tone === 'glass' && 'glass-dark size-10 text-white ring-1 ring-white/20',
        tone === 'light' && 'size-10 bg-white text-ink shadow-soft',
        className,
      )}
    >
      <AnimatePresence>
        {saved && (
          <motion.span
            key="burst"
            className="absolute inset-0 rounded-full border-2 border-brand"
            initial={{ scale: 0.6, opacity: 0.9 }}
            animate={{ scale: 1.6, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        )}
      </AnimatePresence>
      <motion.span key={String(saved)} initial={{ scale: 0.6 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 600, damping: 15 }}>
        <Bookmark
          style={{ width: size, height: size }}
          className={cn(saved && (tone === 'glass' ? 'fill-white' : 'fill-brand text-brand'))}
          strokeWidth={2.2}
        />
      </motion.span>
    </button>
  );
}
