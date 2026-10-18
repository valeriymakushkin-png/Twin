'use client';

import { motion } from 'framer-motion';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useState } from 'react';
import { Photo } from '@/components/photo';
import { Button, TopBar } from '@/components/ui';
import { destinationById, destinations } from '@/data/destinations';
import type { MeetupKind } from '@/data/types';
import { cn, formatWhen, todayKey } from '@/lib/utils';
import { useApp } from '@/store/app';

const kinds: { value: MeetupKind; label: string; emoji: string }[] = [
  { value: 'sunset', label: 'Закат', emoji: '🌅' },
  { value: 'coffee', label: 'Кофе', emoji: '☕' },
  { value: 'food', label: 'Еда', emoji: '🍜' },
  { value: 'hike', label: 'Хайкинг', emoji: '🥾' },
  { value: 'tour', label: 'Экскурсия', emoji: '🗺️' },
  { value: 'party', label: 'Вечеринка', emoji: '🎉' },
  { value: 'cowork', label: 'Коворкинг', emoji: '💻' },
];

function NewMeetupInner() {
  const router = useRouter();
  const params = useSearchParams();
  const createMeetup = useApp((s) => s.createMeetup);
  const [kind, setKind] = useState<MeetupKind>('sunset');
  const [destId, setDestId] = useState(params.get('d') ?? 'bali');
  const [title, setTitle] = useState('');
  const [placeName, setPlaceName] = useState('');
  const [date, setDate] = useState(todayKey(new Date(Date.now() + 86_400_000)));
  const [time, setTime] = useState('18:00');
  const [capacity, setCapacity] = useState(10);
  const [description, setDescription] = useState('');
  const d = destinationById(destId)!;
  const k = kinds.find((x) => x.value === kind)!;
  const start = new Date(`${date}T${time}:00`);
  const finalTitle = title.trim() || `${k.label} в компании · ${d.name}`;

  const submit = () => {
    const id = createMeetup({
      title: finalTitle,
      kind,
      destinationId: d.id,
      placeName: placeName.trim() || d.name,
      lat: d.lat + (Math.random() - 0.5) * 0.04,
      lng: d.lng + (Math.random() - 0.5) * 0.04,
      image: d.gallery[0] ?? d.image,
      startsInHours: 0,
      startsAt: start.toISOString(),
      durationHours: 3,
      capacity,
      description: description.trim() || 'Присоединяйтесь — будет классно!',
      price: 'Бесплатно',
    });
    router.replace(`/meetup/?id=${id}`);
  };

  const field = 'h-12 w-full rounded-2xl bg-white px-4 text-[15px] outline-none ring-1 ring-line focus:ring-2 focus:ring-brand';

  return (
    <div className="scroll-area absolute inset-0 bg-canvas pb-32">
      <TopBar title="Новая встреча" />
      <div className="grid gap-5 px-5 pt-1">
        <motion.div layout className="flex gap-3 rounded-[26px] bg-white p-2.5 shadow-float">
          <Photo id={d.gallery[0] ?? d.image} alt={d.name} width={240} className="h-[92px] w-[88px] shrink-0" rounded="rounded-[18px]" />
          <div className="min-w-0 py-1">
            <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-pink">Предпросмотр</p>
            <p className="truncate text-[16px] font-bold">
              {k.emoji} {finalTitle}
            </p>
            <p className="truncate text-[12px] text-muted">{placeName || d.name}</p>
            <p className="text-[12px] font-medium text-ink-2">{isNaN(start.getTime()) ? '' : formatWhen(start)}</p>
          </div>
        </motion.div>

        <section>
          <p className="mb-2 text-[13px] font-semibold text-muted">Формат</p>
          <div className="flex flex-wrap gap-2">
            {kinds.map((x) => (
              <button
                key={x.value}
                onClick={() => setKind(x.value)}
                className={cn('press h-10 rounded-full px-3.5 text-[14px] font-semibold ring-1 transition-all', kind === x.value ? 'bg-ink text-white ring-ink' : 'bg-white text-ink-2 ring-line')}
              >
                {x.emoji} {x.label}
              </button>
            ))}
          </div>
        </section>

        <section>
          <p className="mb-2 text-[13px] font-semibold text-muted">Где</p>
          <div className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 pb-1">
            {destinations.map((x) => (
              <button key={x.id} onClick={() => setDestId(x.id)} className={cn('press h-10 shrink-0 rounded-full px-3.5 text-[13px] font-semibold ring-1', destId === x.id ? 'bg-brand text-white ring-brand' : 'bg-white text-ink-2 ring-line')}>
                {x.name}
              </button>
            ))}
          </div>
          <input value={placeName} onChange={(e) => setPlaceName(e.target.value)} placeholder="Точка встречи, например «у входа в храм»" className={cn(field, 'mt-2.5')} />
        </section>

        <section className="grid gap-2.5">
          <p className="text-[13px] font-semibold text-muted">Название и описание</p>
          <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder={finalTitle} className={field} />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
            placeholder="Что будем делать? Что взять с собой?"
            className="w-full resize-none rounded-2xl bg-white p-4 text-[15px] outline-none ring-1 ring-line focus:ring-2 focus:ring-brand"
          />
        </section>

        <section className="grid grid-cols-2 gap-2.5">
          <label className="rounded-2xl bg-white px-4 py-2.5 ring-1 ring-line">
            <span className="block text-[11px] font-semibold text-muted">Дата</span>
            <input type="date" value={date} min={todayKey()} onChange={(e) => setDate(e.target.value)} className="w-full bg-transparent text-[15px] font-semibold outline-none" />
          </label>
          <label className="rounded-2xl bg-white px-4 py-2.5 ring-1 ring-line">
            <span className="block text-[11px] font-semibold text-muted">Время</span>
            <input type="time" value={time} onChange={(e) => setTime(e.target.value)} className="w-full bg-transparent text-[15px] font-semibold outline-none" />
          </label>
        </section>

        <section className="rounded-2xl bg-white p-4 ring-1 ring-line">
          <div className="flex items-center justify-between">
            <span className="text-[14px] font-semibold">Участников максимум</span>
            <span className="text-[18px] font-bold text-brand">{capacity}</span>
          </div>
          <input type="range" min={2} max={40} value={capacity} onChange={(e) => setCapacity(Number(e.target.value))} className="mt-3 w-full accent-[#6366f1]" />
        </section>
      </div>

      <div className="pb-safe glass fixed inset-x-0 bottom-0 z-30 border-t border-line-soft px-5 pt-3">
        <Button size="lg" className="mb-3 w-full" onClick={submit} disabled={isNaN(start.getTime())}>
          Опубликовать встречу · +60 XP
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
