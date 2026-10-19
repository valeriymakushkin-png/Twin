'use client';

import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useState } from 'react';
import { usePlus } from '@/components/paywall';
import { Photo } from '@/components/photo';
import { Button, PlusBadge, TopBar } from '@/components/ui';
import { destinationById, destinations } from '@/data/catalog';
import type { MeetupKind } from '@/data/types';
import { useI18n } from '@/i18n/use';
import { MILES } from '@/lib/gamification';
import { cn, todayKey } from '@/lib/utils';
import { useApp } from '@/store/app';

const kinds: { value: MeetupKind; emoji: string }[] = [
  { value: 'sunset', emoji: '🌅' },
  { value: 'coffee', emoji: '☕' },
  { value: 'food', emoji: '🍜' },
  { value: 'hike', emoji: '🥾' },
  { value: 'tour', emoji: '🗺️' },
  { value: 'party', emoji: '🎉' },
  { value: 'cowork', emoji: '💻' },
];

function NewMeetupInner() {
  const router = useRouter();
  const params = useSearchParams();
  const createMeetup = useApp((s) => s.createMeetup);
  const { t, tk, f, dest, locale } = useI18n();
  const plus = usePlus();
  const [kind, setKind] = useState<MeetupKind>('sunset');
  const [destId, setDestId] = useState(destinationById(params.get('d') ?? '') ? params.get('d')! : 'bali');
  const [title, setTitle] = useState('');
  const [placeName, setPlaceName] = useState('');
  const [date, setDate] = useState(todayKey(new Date(Date.now() + 86_400_000)));
  const [time, setTime] = useState('18:00');
  const [capacity, setCapacity] = useState(10);
  const [description, setDescription] = useState('');
  const [isPrivate, setPrivate] = useState(false);
  const d = destinationById(destId)!;
  const k = kinds.find((x) => x.value === kind)!;
  const start = new Date(`${date}T${time}:00`);
  const name = dest(d.id).name;
  const finalTitle = title.trim() || t('meetups.defaultTitle', { kind: tk(`meetups.kind.${kind}`), place: name });
  const sorted = [...destinations].sort((a, b) => dest(a.id).name.localeCompare(dest(b.id).name, locale));

  const submit = () => {
    const id = createMeetup({
      title: finalTitle,
      kind,
      destinationId: d.id,
      placeName: placeName.trim() || name,
      lat: d.lat + (Math.random() - 0.5) * 0.04,
      lng: d.lng + (Math.random() - 0.5) * 0.04,
      image: d.gallery[0] ?? d.image,
      startsInHours: 0,
      startsAt: start.toISOString(),
      durationHours: 3,
      capacity,
      description: description.trim() || t('meetups.defaultDesc'),
      private: isPrivate,
    });
    router.replace(`/meetup/?id=${id}`);
  };

  const field = 'h-12 w-full rounded-2xl bg-white px-4 text-[15px] outline-none ring-1 ring-line focus:ring-2 focus:ring-brand';

  return (
    <div className="scroll-area absolute inset-0 bg-canvas pb-32">
      <TopBar title={t('meetups.newTitle')} />
      <div className="grid gap-5 px-5 pt-1">
        <motion.div layout className="flex gap-3 rounded-[26px] bg-white p-2.5 shadow-float">
          <Photo id={d.gallery[0] ?? d.image} alt={name} width={240} className="h-[92px] w-[88px] shrink-0" rounded="rounded-[18px]" tint={d.theme.accent} />
          <div className="min-w-0 py-1">
            <p className="text-[11px] font-bold uppercase tracking-[0.08em]" style={{ color: d.theme.accent }}>
              {t('meetups.preview')}
            </p>
            <p className="truncate text-[16px] font-bold">
              {k.emoji} {finalTitle}
            </p>
            <p className="truncate text-[12px] text-muted">{placeName || name}</p>
            <p className="text-[12px] font-medium text-ink-2">{isNaN(start.getTime()) ? '' : f.when(start)}</p>
          </div>
        </motion.div>

        <section>
          <p className="mb-2 text-[13px] font-semibold text-muted">{t('meetups.format')}</p>
          <div className="flex flex-wrap gap-2">
            {kinds.map((x) => (
              <button
                key={x.value}
                onClick={() => setKind(x.value)}
                className={cn('press h-10 rounded-full px-3.5 text-[14px] font-semibold ring-1 transition-all', kind === x.value ? 'bg-ink text-white ring-ink' : 'bg-white text-ink-2 ring-line')}
              >
                {x.emoji} {tk(`meetups.kind.${x.value}`)}
              </button>
            ))}
          </div>
        </section>

        <section>
          <p className="mb-2 text-[13px] font-semibold text-muted">{t('meetups.where')}</p>
          <div className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 pb-1">
            {sorted.map((x) => (
              <button
                key={x.id}
                onClick={() => setDestId(x.id)}
                className={cn('press h-10 shrink-0 rounded-full px-3.5 text-[13px] font-semibold ring-1', destId === x.id ? 'text-white' : 'bg-white text-ink-2 ring-line')}
                style={destId === x.id ? { background: x.theme.accent, boxShadow: `0 0 0 1px ${x.theme.accent}` } : undefined}
              >
                {dest(x.id).name}
              </button>
            ))}
          </div>
          <input value={placeName} onChange={(e) => setPlaceName(e.target.value)} placeholder={t('meetups.pointPlaceholder')} className={cn(field, 'mt-2.5')} />
        </section>

        <section className="grid gap-2.5">
          <p className="text-[13px] font-semibold text-muted">{t('meetups.nameAndDesc')}</p>
          <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder={finalTitle} className={field} />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
            placeholder={t('meetups.descPlaceholder')}
            className="w-full resize-none rounded-2xl bg-white p-4 text-[15px] outline-none ring-1 ring-line focus:ring-2 focus:ring-brand"
          />
        </section>

        <section className="grid grid-cols-2 gap-2.5">
          <label className="rounded-2xl bg-white px-4 py-2.5 ring-1 ring-line">
            <span className="block text-[11px] font-semibold text-muted">{t('meetups.date')}</span>
            <input type="date" value={date} min={todayKey()} onChange={(e) => setDate(e.target.value)} className="w-full bg-transparent text-[15px] font-semibold outline-none" />
          </label>
          <label className="rounded-2xl bg-white px-4 py-2.5 ring-1 ring-line">
            <span className="block text-[11px] font-semibold text-muted">{t('meetups.time')}</span>
            <input type="time" value={time} onChange={(e) => setTime(e.target.value)} className="w-full bg-transparent text-[15px] font-semibold outline-none" />
          </label>
        </section>

        <section className="rounded-2xl bg-white p-4 ring-1 ring-line">
          <div className="flex items-center justify-between">
            <span className="text-[14px] font-semibold">{t('meetups.capacity')}</span>
            <span className="text-[18px] font-bold text-brand">{f.number(capacity)}</span>
          </div>
          <input type="range" min={2} max={40} value={capacity} onChange={(e) => setCapacity(Number(e.target.value))} className="mt-3 w-full accent-[#6366f1]" />
        </section>

        <button
          onClick={() => plus.gate(() => setPrivate(!isPrivate))}
          className="flex items-center gap-3 rounded-2xl bg-white p-4 text-left ring-1 ring-line"
          role="switch"
          aria-checked={isPrivate}
        >
          <Lock className="size-5 shrink-0 text-ink-2" />
          <span className="min-w-0 flex-1 text-[14px] font-semibold">{t('meetups.privateToggle')}</span>
          {!plus.active && <PlusBadge />}
          <span className={cn('relative h-7 w-12 shrink-0 rounded-full transition-colors', isPrivate ? 'bg-brand' : 'bg-line')}>
            <span className={cn('absolute top-0.5 size-6 rounded-full bg-white shadow transition-all', isPrivate ? 'left-[22px]' : 'left-0.5')} />
          </span>
        </button>
      </div>

      <div className="pb-safe glass fixed inset-x-0 bottom-0 z-30 border-t border-line-soft px-5 pt-3">
        <Button size="lg" className="mb-3 w-full" onClick={submit} disabled={isNaN(start.getTime())}>
          {t('meetups.publish', { count: MILES.host })}
        </Button>
      </div>
    </div>
  );
}

export default function NewMeetupPage() {
  return (
    <Suspense>
      <NewMeetupInner />
    </Suspense>
  );
}
