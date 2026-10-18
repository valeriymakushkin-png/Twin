'use client';

import { AnimatePresence, motion, useDragControls } from 'framer-motion';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

/** iOS-style bottom sheet: spring in, drag the grabber (or flick) down to dismiss. */
export function Sheet({
  open,
  onClose,
  children,
  title,
  className,
}: {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
  className?: string;
}) {
  const controls = useDragControls();
  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[60]">
          <motion.div
            className="absolute inset-0 bg-ink/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            role="dialog"
            aria-modal
            aria-label={title}
            className={cn('pb-safe absolute inset-x-0 bottom-0 flex max-h-[88%] flex-col overflow-hidden rounded-t-[32px] bg-white shadow-float', className)}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', stiffness: 380, damping: 38 }}
            drag="y"
            dragListener={false}
            dragControls={controls}
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={{ top: 0, bottom: 0.6 }}
            onDragEnd={(_, info) => {
              if (info.offset.y > 120 || info.velocity.y > 600) onClose();
            }}
          >
            <div className="flex shrink-0 cursor-grab touch-none justify-center pb-1 pt-2.5" onPointerDown={(e) => controls.start(e)}>
              <span className="h-1.5 w-10 rounded-full bg-line" />
            </div>
            {title && (
              <div className="shrink-0 touch-none px-5 pb-3 pt-1" onPointerDown={(e) => controls.start(e)}>
                <h3 className="text-[19px] font-bold tracking-[-0.02em]">{title}</h3>
              </div>
            )}
            <div className="scroll-area min-h-0 flex-1">{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
