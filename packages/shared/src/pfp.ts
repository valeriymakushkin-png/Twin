/**
 * Profile picture backgrounds. "composite" backgrounds are rendered with Sharp
 * (instant and free of AI cost); "scene" backgrounds are AI-generated (premium).
 */
export interface PfpBackground {
  key: string;
  label: string;
  kind: 'gradient' | 'pattern' | 'scene';
  colors: string[];
  isPremium: boolean;
  /** Scene prompt for AI backgrounds. */
  scene?: string;
}

export const PFP_BACKGROUNDS: readonly PfpBackground[] = [
  { key: 'aurora', label: 'Aurora', kind: 'gradient', colors: ['#7c3aed', '#db2777', '#f59e0b'], isPremium: false },
  { key: 'ocean', label: 'Ocean', kind: 'gradient', colors: ['#0ea5e9', '#6366f1'], isPremium: false },
  { key: 'mint', label: 'Mint', kind: 'gradient', colors: ['#34d399', '#06b6d4'], isPremium: false },
  { key: 'sunset', label: 'Sunset', kind: 'gradient', colors: ['#fb7185', '#f97316', '#facc15'], isPremium: false },
  { key: 'mono', label: 'Mono', kind: 'gradient', colors: ['#18181b', '#3f3f46'], isPremium: false },
  { key: 'halftone', label: 'Halftone', kind: 'pattern', colors: ['#facc15', '#111827'], isPremium: true },
  { key: 'rays', label: 'Rays', kind: 'pattern', colors: ['#f43f5e', '#fb923c'], isPremium: true },
  { key: 'grid', label: 'Synth grid', kind: 'pattern', colors: ['#0f0326', '#ff2bd6', '#22d3ee'], isPremium: true },
  { key: 'neon-city', label: 'Neon city', kind: 'scene', colors: ['#0f172a', '#ec4899'], isPremium: true, scene: 'neon-lit futuristic city skyline at night' },
  { key: 'space', label: 'Space', kind: 'scene', colors: ['#020617', '#6366f1'], isPremium: true, scene: 'colorful nebula and stars in deep space' },
  { key: 'gaming-den', label: 'Gaming den', kind: 'scene', colors: ['#111827', '#22d3ee'], isPremium: true, scene: 'gaming room with RGB lights and monitors' },
];

export function getPfpBackground(key: string): PfpBackground | undefined {
  return PFP_BACKGROUNDS.find((b) => b.key === key);
}
