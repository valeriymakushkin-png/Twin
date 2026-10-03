'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';

const COLORS = ['#8b5cf6', '#d946ef', '#f59e0b', '#34d399', '#38bdf8', '#f472b6'];

export function Confetti({ count = 46 }: { count?: number }) {
  const pieces = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        x: (Math.random() - 0.5) * 360,
        y: -(160 + Math.random() * 260),
        r: Math.random() * 540 - 270,
        delay: Math.random() * 0.15,
        color: COLORS[i % COLORS.length],
        w: 6 + Math.random() * 6,
      })),
    [count],
  );
  return (
    <div className="pointer-events-none fixed inset-x-0 top-1/3 z-50 flex justify-center">
      {pieces.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-[2px]"
          style={{ width: p.w, height: p.w * 0.45, background: p.color }}
          initial={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
          animate={{ x: p.x, y: [0, p.y, p.y + 420], opacity: [1, 1, 0], rotate: p.r }}
          transition={{ duration: 1.9, delay: p.delay, ease: [0.2, 0.8, 0.4, 1] }}
        />
      ))}
    </div>
  );
}
