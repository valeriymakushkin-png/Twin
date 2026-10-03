'use client';

import { Dna } from 'lucide-react';
import { dnaHighlights, SKIN_TONE_HEX, HAIR_COLOR_HEX, EYE_COLOR_HEX, type MascotDna } from '@mascot/shared';
import { Card } from '@/components/ui/card';

/** Human-readable Mascot DNA — builds trust that the mascot is really "you". */
export function CharacterCard({ dna }: { dna: MascotDna }) {
  const swatches = [
    { label: 'Skin', color: SKIN_TONE_HEX[dna.skinTone] },
    { label: 'Hair', color: HAIR_COLOR_HEX[dna.hairColor] },
    { label: 'Eyes', color: EYE_COLOR_HEX[dna.eyeColor] },
  ];
  return (
    <Card className="p-4">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2 text-[13px] font-semibold">
          <Dna className="size-4 text-fuchsia-300" /> Mascot DNA
        </div>
        <div className="flex gap-1.5">
          {swatches.map((s) => (
            <span key={s.label} title={s.label} className="size-5 rounded-full border border-white/20" style={{ background: s.color }} />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-1.5">
        {dnaHighlights(dna).map((h) => (
          <div key={h.label} className="rounded-xl border border-line bg-white/[0.03] px-3 py-2">
            <div className="text-[10px] font-semibold uppercase tracking-wider text-faint">{h.label}</div>
            <div className="truncate text-[13px] font-medium capitalize">{h.value}</div>
          </div>
        ))}
      </div>
      {dna.distinguishingFeatures.length > 0 && <p className="mt-2.5 text-[12px] text-muted">Signature details: {dna.distinguishingFeatures.join(' · ')}</p>}
    </Card>
  );
}
