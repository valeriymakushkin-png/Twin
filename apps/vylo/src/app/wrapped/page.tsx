'use client';

import { motion } from 'framer-motion';
import { Download, Share2 } from 'lucide-react';
import Link from 'next/link';
import { useMemo } from 'react';
import { usePlus } from '@/components/paywall';
import { BackButton, Button, PlusBadge } from '@/components/ui';
import { resolveItem } from '@/data';
import { destinations } from '@/data/catalog';
import { useI18n } from '@/i18n/use';
import { continentOf, flag } from '@/lib/countries';
import { distanceKm } from '@/lib/utils';
import { useApp } from '@/store/app';

/** Moscow — the default home for the demo profile. */
const HOME = { lat: 55.7558, lng: 37.6173 };

function useRecap() {
  const visited = useApp((s) => s.visited);
  const beenHere = useApp((s) => s.beenHere);
  const savedIds = useApp((s) => s.savedIds);
  return useMemo(() => {
    const points = [
      ...beenHere.map((id) => resolveItem(id)).filter((x) => x !== undefined),
      ...visited.map((c) => destinations.find((d) => d.countryCode === c)).filter((x) => x !== undefined),
    ];
    const km = Math.round(points.reduce((sum, p) => sum + distanceKm(HOME, p), 0));
    const continents = [...new Set(visited.map(continentOf).filter((c) => c !== 'AN'))];
    const tagCount = new Map<string, number>();
    for (const id of [...beenHere, ...savedIds]) for (const tag of resolveItem(id)?.tags ?? []) tagCount.set(tag, (tagCount.get(tag) ?? 0) + 1);
    const topTag = [...tagCount.entries()].sort((a, b) => b[1] - a[1])[0]?.[0];
    return { visited, km, continents, places: beenHere.length, topTag };
  }, [visited, beenHere, savedIds]);
}

export default function WrappedPage() {
  const r = useRecap();
  const plus = usePlus();
  const { t, tk, f } = useI18n();
  const name = useApp((s) => s.profile.name);

  const stats = [
    { value: f.number(r.km), label: t('wrapped.km') },
    { value: f.number(r.visited.length), label: t('wrapped.countries') },
    { value: f.number(r.continents.length), label: t('wrapped.continents') },
    { value: f.number(r.places), label: t('wrapped.places') },
  ];

  /** Renders a 1080×1920 story card on a canvas, entirely on the device. */
  const render = async () => {
    const W = 1080;
    const H = 1920;
    const canvas = document.createElement('canvas');
    canvas.width = W;
    canvas.height = H;
    const ctx = canvas.getContext('2d')!;
    const bg = ctx.createLinearGradient(0, 0, W, H);
    bg.addColorStop(0, '#1e1b4b');
    bg.addColorStop(0.55, '#4338ca');
    bg.addColorStop(1, '#db2777');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, W, H);
    ctx.strokeStyle = 'rgba(255,255,255,0.25)';
    ctx.setLineDash([18, 22]);
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(-40, 1500);
    ctx.bezierCurveTo(300, 1200, 700, 1700, 1120, 1260);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = '#fff';
    ctx.font = '800 64px Inter, system-ui, sans-serif';
    ctx.fillText('Vylo', 90, 160);
    ctx.font = '700 92px Inter, system-ui, sans-serif';
    ctx.fillText(t('wrapped.title'), 90, 330, W - 180);
    ctx.font = '500 44px Inter, system-ui, sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,0.75)';
    ctx.fillText(name || t('wrapped.subtitle'), 90, 400, W - 180);
    stats.forEach((s, i) => {
      const y = 600 + i * 230;
      ctx.fillStyle = '#fff';
      ctx.font = '900 150px Inter, system-ui, sans-serif';
      ctx.fillText(s.value, 90, y);
      ctx.fillStyle = 'rgba(255,255,255,0.75)';
      ctx.font = '600 44px Inter, system-ui, sans-serif';
      ctx.fillText(s.label, 90, y + 62, W - 180);
    });
    ctx.font = '72px sans-serif';
    r.visited.slice(0, 10).forEach((c, i) => ctx.fillText(flag(c), 90 + i * 92, 1660));
    if (r.topTag) {
      ctx.fillStyle = '#fff';
      ctx.font = '700 48px Inter, system-ui, sans-serif';
      ctx.fillText(`${t('wrapped.topStyle')}: ${tk(`tags.${r.topTag}`)}`, 90, 1800, W - 180);
    }
    return new Promise<Blob | null>((res) => canvas.toBlob(res, 'image/png'));
  };

  const share = () =>
    plus.gate(async () => {
      const blob = await render();
      if (!blob) return;
      const file = new File([blob], 'vylo-recap.png', { type: 'image/png' });
      try {
        if (navigator.canShare?.({ files: [file] })) return await navigator.share({ files: [file], title: t('wrapped.title') });
      } catch {
        return;
      }
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'vylo-recap.png';
      a.click();
      URL.revokeObjectURL(a.href);
    });

  return (
    <div className="scroll-area absolute inset-0 bg-gradient-to-b from-[#1e1b4b] via-[#3730a3] to-[#be185d] pb-16 text-white">
      <div className="pt-safe flex h-14 items-center px-4">
        <BackButton tone="glass" />
      </div>
      <div className="px-6 pt-2">
        <p className="text-[13px] font-bold uppercase tracking-[0.2em] text-white/60">Vylo</p>
        <h1 className="mt-1 text-[36px] font-black leading-[1.05] tracking-[-0.04em]">{t('wrapped.title')}</h1>
        <p className="mt-1 text-[15px] text-white/75">{t('wrapped.subtitle')}</p>

        {r.visited.length === 0 && r.places === 0 ? (
          <div className="mt-10 rounded-[26px] bg-white/10 p-6 text-center ring-1 ring-white/15">
            <p className="text-[15px] leading-relaxed text-white/85">{t('wrapped.empty')}</p>
            <Link href="/passport/">
              <Button variant="secondary" className="mt-4">
                {t('passport.title')}
              </Button>
            </Link>
          </div>
        ) : (
          <>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {stats.map((s, i) => (
                <motion.div key={s.label} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.08 }} className="rounded-[24px] bg-white/10 p-4 ring-1 ring-white/15 backdrop-blur">
                  <p className="text-[34px] font-black leading-none tracking-[-0.03em]">{s.value}</p>
                  <p className="mt-1.5 text-[12px] font-semibold text-white/70">{s.label}</p>
                </motion.div>
              ))}
            </div>
            {r.continents.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-1.5">
                {r.continents.map((c) => (
                  <span key={c} className="rounded-full bg-white/15 px-3 py-1 text-[12px] font-semibold">
                    {tk(`wrapped.continent.${c}`)}
                  </span>
                ))}
              </div>
            )}
            <div className="mt-5 flex flex-wrap gap-1.5 text-[26px]">
              {r.visited.map((c) => (
                <span key={c}>{flag(c)}</span>
              ))}
            </div>
            {r.topTag && (
              <p className="mt-5 text-[15px] text-white/85">
                {t('wrapped.topStyle')}: <b className="text-white">{tk(`tags.${r.topTag}`)}</b>
              </p>
            )}
            <Button variant="gold" size="lg" className="mt-8 w-full" onClick={share}>
              {typeof navigator !== 'undefined' && 'share' in navigator ? <Share2 className="size-5" /> : <Download className="size-5" />} {t('wrapped.share')}
              {!plus.active && <PlusBadge className="ml-1" />}
            </Button>
            {!plus.active && <p className="mt-2 text-center text-[12px] text-white/65">{t('plus.shareLocked')}</p>}
          </>
        )}
      </div>
    </div>
  );
}
