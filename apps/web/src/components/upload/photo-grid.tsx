'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { AlertCircle, Check, ImagePlus, Loader2, X } from 'lucide-react';
import { useRef } from 'react';
import { UPLOAD_RULES } from '@mascot/shared';
import { cn } from '@/lib/cn';
import type { LocalPhoto } from '@/store/create-flow';
import { useT } from '@/lib/i18n';

export function PhotoGrid({ photos, onAdd, onRemove }: { photos: LocalPhoto[]; onAdd: (files: File[]) => void; onRemove: (key: string) => void }) {
  const input = useRef<HTMLInputElement>(null);
  const full = photos.length >= UPLOAD_RULES.maxPhotos;
  const { t } = useT();
  const photoErrors = t.errors.photo as Record<string, string>;
  return (
    <div className="grid grid-cols-3 gap-2">
      <AnimatePresence initial={false}>
        {photos.map((p) => (
          <motion.div
            key={p.key}
            layout
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            className={cn('relative aspect-[3/4] overflow-hidden rounded-2xl border', p.status === 'rejected' || p.status === 'error' ? 'border-rose-500/50' : 'border-line')}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p.previewUrl} alt="" className={cn('size-full object-cover', (p.status === 'rejected' || p.status === 'error') && 'opacity-40 grayscale')} />
            {p.status === 'uploading' && (
              <div className="absolute inset-0 grid place-items-center bg-black/40">
                <Loader2 className="size-6 animate-spin" />
              </div>
            )}
            {p.status === 'accepted' && (
              <span className="absolute bottom-1.5 left-1.5 flex items-center gap-1 rounded-full bg-black/60 px-1.5 py-0.5 text-[10px] font-semibold capitalize backdrop-blur">
                <Check className="size-3 text-emerald-300" strokeWidth={3} />
                {t.poses[p.remote?.pose ?? 'OTHER']}
              </span>
            )}
            {(p.status === 'rejected' || p.status === 'error') && (
              <div className="absolute inset-x-1.5 bottom-1.5 flex items-start gap-1 rounded-lg bg-black/70 p-1.5 text-[10px] leading-tight text-rose-200 backdrop-blur">
                <AlertCircle className="mt-px size-3 shrink-0" />
                {(p.code && photoErrors[p.code]) || p.reason || t.create.notUsable}
              </div>
            )}
            <button onClick={() => onRemove(p.key)} aria-label={t.common.delete} className="absolute right-1.5 top-1.5 grid size-6 place-items-center rounded-full bg-black/60 backdrop-blur">
              <X className="size-3.5" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
      {!full && (
        <motion.button
          layout
          whileTap={{ scale: 0.95 }}
          onClick={() => input.current?.click()}
          className="flex aspect-[3/4] flex-col items-center justify-center gap-1.5 rounded-2xl border border-dashed border-line-strong bg-white/[0.02] text-muted"
        >
          <ImagePlus className="size-6 text-violet-300" />
          <span className="text-[11px] font-semibold text-ink-2">{t.create.addPhotos}</span>
        </motion.button>
      )}
      <input
        ref={input}
        type="file"
        accept="image/*"
        multiple
        hidden
        onChange={(e) => {
          const files = Array.from(e.target.files ?? []);
          e.target.value = '';
          if (files.length) onAdd(files.slice(0, UPLOAD_RULES.maxPhotos - photos.length));
        }}
      />
    </div>
  );
}
