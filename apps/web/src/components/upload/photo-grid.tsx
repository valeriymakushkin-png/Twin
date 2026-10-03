'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { AlertCircle, ImagePlus, Loader2, X } from 'lucide-react';
import { forwardRef, useImperativeHandle, useRef } from 'react';
import { UPLOAD_RULES } from '@mascot/shared';
import { CheckDot } from '@/components/ui/misc';
import { cn } from '@/lib/cn';
import { useT } from '@/lib/i18n';
import type { LocalPhoto } from '@/store/create-flow';

export interface PhotoGridHandle {
  pick: () => void;
}

export const PhotoGrid = forwardRef<PhotoGridHandle, { photos: LocalPhoto[]; onAdd: (files: File[]) => void; onRemove: (key: string) => void }>(function PhotoGrid(
  { photos, onAdd, onRemove },
  ref,
) {
  const input = useRef<HTMLInputElement>(null);
  const full = photos.length >= UPLOAD_RULES.maxPhotos;
  const { t } = useT();
  const photoErrors = t.errors.photo as Record<string, string>;
  useImperativeHandle(ref, () => ({ pick: () => input.current?.click() }));
  return (
    <div className="grid grid-cols-3 gap-2">
      <AnimatePresence initial={false}>
        {photos.map((p) => {
          const bad = p.status === 'rejected' || p.status === 'error';
          return (
            <motion.div
              key={p.key}
              layout
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              className={cn('relative aspect-square overflow-hidden rounded-2xl border', bad ? 'border-brand/70' : 'border-white/10')}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.previewUrl} alt="" className={cn('size-full object-cover', bad && 'opacity-40 grayscale')} />
              {p.status === 'uploading' && (
                <div className="absolute inset-0 grid place-items-center bg-black/45">
                  <Loader2 className="size-6 animate-spin text-brand" />
                </div>
              )}
              {p.status === 'accepted' && <CheckDot className="absolute bottom-1.5 right-1.5" />}
              {bad && (
                <div className="absolute inset-x-1.5 bottom-1.5 flex items-start gap-1 rounded-lg bg-black/75 p-1.5 text-[10px] leading-tight text-[#ffb3ba] backdrop-blur">
                  <AlertCircle className="mt-px size-3 shrink-0" />
                  {(p.code && photoErrors[p.code]) || p.reason || t.create.notUsable}
                </div>
              )}
              <button onClick={() => onRemove(p.key)} aria-label={t.common.delete} className="absolute right-1.5 top-1.5 grid size-6 place-items-center rounded-full bg-black/60 backdrop-blur">
                <X className="size-3.5" />
              </button>
            </motion.div>
          );
        })}
      </AnimatePresence>
      {!full && (
        <motion.button
          layout
          whileTap={{ scale: 0.95 }}
          onClick={() => input.current?.click()}
          className="flex aspect-square flex-col items-center justify-center gap-1.5 rounded-2xl border border-dashed border-brand/40 bg-brand/[0.04] text-muted"
        >
          <ImagePlus className="size-6 text-brand" />
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
});
