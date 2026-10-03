'use client';

import { motion } from 'framer-motion';
import { SHOWCASE_DNA } from '@mascot/shared';
import { MascotArt } from '@/components/brand/mascot-art';

/** Morphing silhouette inside orbiting particles — signals "AI at work" without fake detail. */
export function Orbit({ progress }: { progress: number }) {
  const dna = SHOWCASE_DNA[Math.floor(progress / 20) % SHOWCASE_DNA.length]!.dna;
  return (
    <div className="relative mx-auto size-64">
      <div className="absolute inset-0 rounded-full bg-aurora opacity-25 blur-3xl" />
      {[0, 1, 2].map((ring) => (
        <motion.div
          key={ring}
          className="absolute rounded-full border border-white/10"
          style={{ inset: ring * 22 }}
          animate={{ rotate: ring % 2 ? -360 : 360 }}
          transition={{ duration: 12 + ring * 6, repeat: Infinity, ease: 'linear' }}
        >
          <span className="absolute -top-1 left-1/2 size-2 -translate-x-1/2 rounded-full bg-fuchsia-300 shadow-[0_0_12px_#f0abfc]" />
        </motion.div>
      ))}
      <motion.div
        key={Math.floor(progress / 20)}
        initial={{ opacity: 0, scale: 0.9, filter: 'blur(12px)' }}
        animate={{ opacity: 0.9, scale: 1, filter: 'blur(3px)' }}
        transition={{ duration: 0.8 }}
        className="absolute inset-12 overflow-hidden rounded-full bg-white/[0.04]"
      >
        <MascotArt dna={dna} emotion="neutral" className="size-full opacity-60 grayscale" />
      </motion.div>
      <div className="absolute inset-0 grid place-items-center">
        <span className="font-mono text-4xl font-semibold tabular-nums drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]">{Math.round(progress)}%</span>
      </div>
    </div>
  );
}
