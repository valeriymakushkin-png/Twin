'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

/** Re-mounts on every navigation, giving each screen a soft native-feeling entrance. */
export default function Template({ children }: { children: ReactNode }) {
  return (
    <motion.div
      className="absolute inset-0"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 380, damping: 34, mass: 0.7 }}
    >
      {children}
    </motion.div>
  );
}
