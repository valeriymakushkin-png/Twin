'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { CalendarPlus, Check, ChevronRight, Flag, Megaphone, PenLine, Plus, Star, Stamp, X } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { resolveItem } from '@/data';
import { destinationById, destinations } from '@/data/destinations';
import { placeById } from '@/data/places';
import { stories, userById } from '@/data/social';
import { regimeMeta, visaByCode } from '@/data/visa';
import { countryName, flag } from '@/lib/countries';
import { cn, formatDate, todayKey } from '@/lib/utils';
import { useApp } from '@/store/app';
import { useUI } from '@/store/ui';
import { Photo } from './photo';
import { Sheet } from './sheet';
import { Avatar, Button } from './ui';
import { VisaBadge } from './visa-badge';

export function GlobalSheets() {
  const sheet = useUI((s) => s.sheet);
  const close = useUI((s) => s.closeSheet);
  return (
    <>
      <Sheet open={sheet?.type === 'create'} onClose={close} title="Создать">
        <CreateSheet />
      </Sheet>
      <Sheet open={sheet?.type === 'collect'} onClose={close} title="Сохранить в коллекцию">
        {sheet?.type === 'collect' && <CollectSheet itemId={sheet.itemId} />}
      </Sheet>
      <Sheet open={sheet?.type === 'new-collection'} onClose={close} title="Новая коллекция">
        <NewCollectionSheet />
      </Sheet>
      <Sheet open={sheet?.type === 'trip'} onClose={close} title={sheet?.type === 'trip' && sheet.itemId ? 'Добавить в поездку' : 'Новая поездка'}>
        {sheet?.type === 'trip' && <TripSheet itemId={sheet.itemId} />}
      </Sheet>
      <Sheet open={sheet?.type === 'review'} onClose={close} title="Ваш отзыв">
        {sheet?.type === 'review' && <ReviewSheet targetId={sheet.targetId} />}
      </Sheet>
      <Sheet open={sheet?.type === 'country'} onClose={close}>
        {sheet?.type === 'country' && <CountrySheet code={sheet.code} />}
      </Sheet>
      <AnimatePresence>{sheet?.type === 'story' && <StoryViewer start={sheet.index} onClose={close} />}</AnimatePresence>
    </>
  );
}

function CreateSheet() {
  const router = useRouter();
  const { openSheet, closeSheet } = useUI();
  const items = [
    { icon: CalendarPlus, title: 'Новая поездка', text: 'Маршрут по дням, чек-лист и бюджет', color: 'from-sky to-brand', onClick: () => openSheet({ type: 'trip' }) },
    { icon: Megaphone, title: 'Создать встречу', text: 'Соберите компанию на закат или ужин', color: 'from-pink to-rose', onClick: () => (closeSheet(), router.push('/meetups/new/')) },
    { icon: PenLine, title: 'Написать отзыв', text: 'Помогите другим найти лучшие места', color: 'from-amber to-[#f97316]', onClick: () => openSheet({ type: 'review', targetId: '' }) },
    { icon: Stamp, title: 'Отметить страну', text: 'Пополните свой паспорт путешественника', color: 'from-mint to-[#0d9488]', onClick: () => (closeSheet(), router.push('/passport/')) },
  ];
  return (
    <div className="grid gap-2.5 px-5 pb-6">
      {items.map((it, i) => (
        <motion.button
          key={it.title}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.04 }}
          onClick={it.onClick}
          className="press flex items-center gap-4 rounded-3xl bg-surface-2/70 p-3.5 text-left"
        >
          <span className={cn('grid size-12 place-items-center rounded-2xl bg-gradient-to-br text-white shadow-soft', it.color)}>
            <it.icon className="size-[22px]" />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-[15px] font-semibold">{it.title}</span>
            <span className="block text-[13px] text-muted">{it.text}</span>
          </span>
          <ChevronRight className="size-5 text-faint" />
        </motion.button>
      ))}
    </div>
  );
}

const emojis = ['✨', '🏝️', '🏔️', '🍜', '🌆', '🏛️', '❤️', '🎒', '🌋', '🛶'];

function CollectSheet({ itemId }: { itemId: string }) {
  const { collections, toggleInCollection, createCollection } = useApp();
  const close = useUI((s) => s.closeSheet);
  const item = resolveItem(itemId);
  const [creating, setCreating] = useState(false);
  const [name, setName] = useState('');
  const [emoji, setEmoji] = useState('✨');

  return (
    <div className="px-5 pb-6">
      {item && (
        <div className="mb-4 flex items-center gap-3 rounded-2xl bg-surface-2/70 p-2.5">
          <Photo id={item.image} alt={item.name} width={120} className="size-12" rounded="rounded-xl" />
          <div className="min-w-0">
            <p className="truncate text-[14px] font-semibold">{item.name}</p>
            <p className="truncate text-[12px] text-muted">{item.subtitle}</p>
          </div>
        </div>
      )}
      <div className="grid gap-1">
        {collections.map((c) => {
          const has = c.itemIds.includes(itemId);
          const cover = c.itemIds[0] && resolveItem(c.itemIds[0]);
          return (
            <button key={c.id} onClick={() => toggleInCollection(c.id, itemId)} className="press flex items-center gap-3 rounded-2xl p-2 text-left hover:bg-surface-2">
              {cover ? (
                <Photo id={cover.image} alt={c.name} width={120} className="size-12" rounded="rounded-xl" />
              ) : (
                <span className="grid size-12 place-items-center rounded-xl bg-brand-50 text-[22px]">{c.emoji}</span>
              )}
              <span className="min-w-0 flex-1">
                <span className="block text-[15px] font-semibold">
                  {c.emoji} {c.name}
                </span>
                <span className="block text-[12px] text-muted">{c.itemIds.length} мест</span>
              </span>
              <span className={cn('grid size-7 place-items-center rounded-full border-2 transition-colors', has ? 'border-brand bg-brand text-white' : 'border-line')}>
                {has && <Check className="size-4" strokeWidth={3} />}
              </span>
            </button>
          );
        })}
      </div>
      {creating ? (
        <div className="mt-3 rounded-3xl bg-surface-2/70 p-3">
          <div className="no-scrollbar flex gap-1.5 overflow-x-auto pb-2">
            {emojis.map((e) => (
              <button key={e} onClick={() => setEmoji(e)} className={cn('grid size-10 shrink-0 place-items-center rounded-xl text-[20px]', emoji === e ? 'bg-white shadow-soft ring-2 ring-brand' : '')}>
                {e}
              </button>
            ))}
          </div>
          <input
            autoFocus
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Название, например «Азия 2027»"
            className="h-12 w-full rounded-2xl bg-white px-4 text-[15px] outline-none ring-1 ring-line focus:ring-2 focus:ring-brand"
          />
          <Button
            className="mt-3 w-full"
            disabled={!name.trim()}
            onClick={() => {
              createCollection(name.trim(), emoji, itemId);
              toast.success(`Коллекция «${name.trim()}» создана`);
              close();
            }}
          >
            Создать и добавить
          </Button>
        </div>
      ) : (
        <button onClick={() => setCreating(true)} className="press mt-2 flex w-full items-center gap-3 rounded-2xl p-2 text-left text-brand-600">
          <span className="grid size-12 place-items-center rounded-xl border-2 border-dashed border-brand/40">
            <Plus className="size-5" />
          </span>
          <span className="text-[15px] font-semibold">Новая коллекция</span>
        </button>
      )}
    </div>
  );
}

function NewCollectionSheet() {
  const createCollection = useApp((s) => s.createCollection);
  const close = useUI((s) => s.closeSheet);
  const [name, setName] = useState('');
  const [emoji, setEmoji] = useState('✨');
  return (
    <div className="px-5 pb-6">
      <div className="flex items-center gap-3">
        <span className="grid size-16 shrink-0 place-items-center rounded-[22px] bg-brand-50 text-[32px]">{emoji}</span>
        <input
          autoFocus
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Например, «Медовый месяц»"
          className="h-14 min-w-0 flex-1 rounded-2xl bg-surface-2/70 px-4 text-[16px] outline-none focus:ring-2 focus:ring-brand"
        />
      </div>
      <div className="mt-4 grid grid-cols-5 gap-2">
        {emojis.map((e) => (
          <button key={e} onClick={() => setEmoji(e)} className={cn('press grid h-12 place-items-center rounded-2xl text-[22px]', emoji === e ? 'bg-white shadow-soft ring-2 ring-brand' : 'bg-surface-2/70')}>
            {e}
          </button>
        ))}
      </div>
      <Button
        size="lg"
        className="mt-5 w-full"
        disabled={!name.trim()}
        onClick={() => {
          createCollection(name.trim(), emoji);
          close();
        }}
      >
        Создать коллекцию
      </Button>
    </div>
  );
}

function addDays(iso: string, n: number) {
  const d = new Date(`${iso}T00:00:00`);
  d.setDate(d.getDate() + n);
  return todayKey(d);
}

function TripSheet({ itemId }: { itemId?: string }) {
  const router = useRouter();
  const close = useUI((s) => s.closeSheet);
  const { trips, createTrip, addToTrip } = useApp();
  const item = itemId ? resolveItem(itemId) : undefined;
  const destId = item ? (item.kind === 'destination' ? item.id : (placeById(item.id)?.destinationId ?? 'bali')) : 'bali';
  const [creating, setCreating] = useState(!itemId || trips.length === 0);
  const [dest, setDest] = useState(destId);
  const [start, setStart] = useState(addDays(todayKey(), 30));
  const [end, setEnd] = useState(addDays(todayKey(), 37));
  const d = destinationById(dest);
  const [name, setName] = useState('');

  const placeId = item?.kind === 'place' ? item.id : undefined;

  if (!creating)
    return (
      <div className="px-5 pb-6">
        <div className="grid gap-1">
          {trips.map((t) => {
            const td = destinationById(t.destinationId);
            const has = placeId ? t.items.some((i) => i.placeId === placeId) : false;
            return (
              <button
                key={t.id}
                onClick={() => {
                  if (placeId) addToTrip(t.id, placeId);
                  toast.success(`Добавлено в «${t.name}»`);
                  close();
                }}
                className="press flex items-center gap-3 rounded-2xl p-2 text-left hover:bg-surface-2"
              >
                <Photo id={td?.image ?? ''} alt={t.name} width={120} className="size-12" rounded="rounded-xl" />
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-[15px] font-semibold">{t.name}</span>
                  <span className="block text-[12px] text-muted">
                    {formatDate(t.start)} — {formatDate(t.end)} · {t.items.length} мест
                  </span>
                </span>
                {has && <Check className="size-5 text-brand" />}
              </button>
            );
          })}
        </div>
        <button onClick={() => setCreating(true)} className="press mt-2 flex w-full items-center gap-3 rounded-2xl p-2 text-left text-brand-600">
          <span className="grid size-12 place-items-center rounded-xl border-2 border-dashed border-brand/40">
            <Plus className="size-5" />
          </span>
          <span className="text-[15px] font-semibold">Новая поездка</span>
        </button>
      </div>
    );

  return (
    <div className="px-5 pb-6">
      <p className="mb-2 text-[13px] font-semibold text-muted">Куда едем?</p>
      <div className="no-scrollbar -mx-5 flex gap-2.5 overflow-x-auto px-5 pb-1">
        {destinations.map((x) => (
          <button key={x.id} onClick={() => setDest(x.id)} className={cn('press relative h-24 w-20 shrink-0 overflow-hidden rounded-2xl transition-all', dest === x.id ? 'ring-[3px] ring-brand ring-offset-2' : '')}>
            <Photo id={x.image} alt={x.name} width={200} className="absolute inset-0" />
            <span className="photo-scrim absolute inset-0" />
            <span className="absolute inset-x-1.5 bottom-1.5 text-left text-[11px] font-bold leading-tight text-white">{x.name}</span>
          </button>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2.5">
        <label className="rounded-2xl bg-surface-2/70 px-4 py-2.5">
          <span className="block text-[11px] font-semibold text-muted">Туда</span>
          <input type="date" value={start} min={todayKey()} onChange={(e) => (setStart(e.target.value), e.target.value > end && setEnd(addDays(e.target.value, 5)))} className="w-full bg-transparent text-[15px] font-semibold outline-none" />
        </label>
        <label className="rounded-2xl bg-surface-2/70 px-4 py-2.5">
          <span className="block text-[11px] font-semibold text-muted">Обратно</span>
          <input type="date" value={end} min={start} onChange={(e) => setEnd(e.target.value)} className="w-full bg-transparent text-[15px] font-semibold outline-none" />
        </label>
      </div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder={d ? `${d.name} ${new Date(start).getFullYear()}` : 'Название поездки'}
        className="mt-2.5 h-12 w-full rounded-2xl bg-surface-2/70 px-4 text-[15px] outline-none focus:ring-2 focus:ring-brand"
      />
      {d && <VisaBadge code={d.countryCode} className="mt-3" />}
      <Button
        className="mt-4 w-full"
        size="lg"
        onClick={() => {
          const id = createTrip({ name: name.trim() || `${d?.name ?? 'Поездка'} ${new Date(start).getFullYear()}`, destinationId: dest, start, end, placeIds: placeId ? [placeId] : [] });
          close();
          router.push(`/trip/?id=${id}`);
        }}
      >
        Создать поездку
      </Button>
    </div>
  );
}

function ReviewSheet({ targetId: initial }: { targetId: string }) {
  const [targetId, setTargetId] = useState(initial);
  const [rating, setRating] = useState(5);
  const [text, setText] = useState('');
  const addReview = useApp((s) => s.addReview);
  const close = useUI((s) => s.closeSheet);
  const target = targetId ? resolveItem(targetId) : undefined;
  const labels = ['', 'Плохо', 'Так себе', 'Нормально', 'Хорошо', 'Восторг!'];

  return (
    <div className="px-5 pb-6">
      {!target ? (
        <>
          <p className="mb-2 text-[13px] font-semibold text-muted">О каком месте?</p>
          <div className="grid grid-cols-3 gap-2">
            {destinations.slice(0, 12).map((x) => (
              <button key={x.id} onClick={() => setTargetId(x.id)} className="press relative h-20 overflow-hidden rounded-2xl">
                <Photo id={x.image} alt={x.name} width={240} className="absolute inset-0" />
                <span className="photo-scrim absolute inset-0" />
                <span className="absolute bottom-1.5 left-2 text-[12px] font-bold text-white">{x.name}</span>
              </button>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="flex items-center gap-3 rounded-2xl bg-surface-2/70 p-2.5">
            <Photo id={target.image} alt={target.name} width={120} className="size-12" rounded="rounded-xl" />
            <div className="min-w-0 flex-1">
              <p className="truncate text-[15px] font-semibold">{target.name}</p>
              <p className="truncate text-[12px] text-muted">{target.subtitle}</p>
            </div>
          </div>
          <div className="mt-5 flex flex-col items-center">
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((n) => (
                <motion.button key={n} whileTap={{ scale: 0.8 }} onClick={() => setRating(n)} aria-label={`${n} из 5`}>
                  <Star className={cn('size-10 transition-colors', n <= rating ? 'fill-star text-star' : 'text-line')} strokeWidth={1.5} />
                </motion.button>
              ))}
            </div>
            <p className="mt-2 text-[14px] font-semibold text-ink-2">{labels[rating]}</p>
          </div>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={4}
            placeholder="Что понравилось? Какие советы дадите другим путешественникам?"
            className="mt-4 w-full resize-none rounded-2xl bg-surface-2/70 p-4 text-[15px] outline-none focus:ring-2 focus:ring-brand"
          />
          <Button
            className="mt-3 w-full"
            size="lg"
            disabled={text.trim().length < 5}
            onClick={() => {
              addReview(target.id, rating, text.trim());
              close();
            }}
          >
            Опубликовать · +40 XP
          </Button>
        </>
      )}
    </div>
  );
}

function CountrySheet({ code }: { code: string }) {
  const visited = useApp((s) => s.visited.includes(code));
  const toggleVisited = useApp((s) => s.toggleVisited);
  const close = useUI((s) => s.closeSheet);
  const visa = visaByCode(code);
  const dests = destinations.filter((d) => d.countryCode === code);
  return (
    <div className="px-5 pb-6">
      <div className="flex items-center gap-4">
        <span className="text-[52px] leading-none">{flag(code)}</span>
        <div className="min-w-0">
          <h3 className="text-[24px] font-bold tracking-[-0.03em]">{countryName(code)}</h3>
          {visa ? (
            <p className="text-[13px] text-muted">
              {regimeMeta[visa.regime].label}
              {visa.days ? ` · до ${visa.days} дней` : ''} для граждан РФ
            </p>
          ) : (
            <p className="text-[13px] text-muted">Визовые правила уточняйте в консульстве</p>
          )}
        </div>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2.5">
        <Button variant={visited ? 'soft' : 'primary'} onClick={() => toggleVisited(code)}>
          {visited ? <Check className="size-4" /> : <Flag className="size-4" />}
          {visited ? 'Я был здесь' : 'Отметить'}
        </Button>
        {visa ? (
          <Link href={`/visa/${code.toLowerCase()}/`} onClick={close} className="press inline-flex h-11 items-center justify-center gap-2 rounded-full border border-brand/25 bg-white text-[15px] font-semibold text-brand-600 shadow-soft">
            <Stamp className="size-4" /> Виза
          </Link>
        ) : (
          <Button variant="secondary" disabled>
            Нет данных
          </Button>
        )}
      </div>
      {dests.length > 0 && (
        <>
          <p className="mb-2 mt-5 text-[13px] font-semibold text-muted">Направления</p>
          <div className="grid gap-2">
            {dests.map((x) => (
              <Link key={x.id} href={`/d/${x.id}/`} onClick={close} className="press flex items-center gap-3 rounded-2xl bg-surface-2/70 p-2">
                <Photo id={x.image} alt={x.name} width={140} className="size-14" rounded="rounded-xl" />
                <div className="min-w-0 flex-1">
                  <p className="text-[15px] font-semibold">{x.name}</p>
                  <p className="truncate text-[12px] text-muted">{x.tagline}</p>
                </div>
                <ChevronRight className="size-5 text-faint" />
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function StoryViewer({ start, onClose }: { start: number; onClose: () => void }) {
  const [index, setIndex] = useState(start);
  const story = stories[index];
  const user = story ? userById(story.userId) : undefined;
  const [liked, setLiked] = useState<string[]>([]);

  useEffect(() => {
    const t = setTimeout(() => (index < stories.length - 1 ? setIndex(index + 1) : onClose()), 5000);
    return () => clearTimeout(t);
  }, [index, onClose]);

  if (!story || !user) return null;
  return (
    <motion.div className="fixed inset-0 z-[85] bg-black" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }}>
      <AnimatePresence mode="popLayout">
        <motion.div key={story.id} className="absolute inset-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <motion.div className="absolute inset-0" initial={{ scale: 1 }} animate={{ scale: 1.08 }} transition={{ duration: 5, ease: 'linear' }}>
            <Photo id={story.image} alt={story.caption} width={900} priority className="absolute inset-0" />
          </motion.div>
          <div className="photo-scrim-top absolute inset-0" />
        </motion.div>
      </AnimatePresence>
      <div className="pt-safe absolute inset-x-0 top-0 z-10 px-3">
        <div className="mt-2 flex gap-1">
          {stories.map((s, i) => (
            <div key={s.id} className="h-[3px] flex-1 overflow-hidden rounded-full bg-white/30">
              {i < index && <div className="h-full w-full bg-white" />}
              {i === index && <motion.div key={s.id} className="h-full bg-white" initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 5, ease: 'linear' }} />}
            </div>
          ))}
        </div>
        <div className="mt-3 flex items-center gap-2.5">
          <Avatar userId={user.id} size={36} ring />
          <div className="min-w-0 flex-1 text-white">
            <p className="text-[14px] font-semibold">{user.name}</p>
            <p className="text-[12px] text-white/75">{story.location}</p>
          </div>
          <button aria-label="Закрыть" onClick={onClose} className="grid size-10 place-items-center text-white">
            <X className="size-6" />
          </button>
        </div>
      </div>
      <button aria-label="Назад" className="absolute inset-y-0 left-0 w-1/3" onClick={() => setIndex(Math.max(0, index - 1))} />
      <button aria-label="Дальше" className="absolute inset-y-0 right-0 w-2/3" onClick={() => (index < stories.length - 1 ? setIndex(index + 1) : onClose())} />
      <div className="pb-safe absolute inset-x-0 bottom-0 z-10 px-5">
        <p className="mb-4 text-[22px] font-bold leading-snug text-white">{story.caption}</p>
        <div className="mb-4 flex items-center gap-3">
          <div className="glass-dark flex h-12 flex-1 items-center rounded-full px-5 text-[14px] text-white/70 ring-1 ring-white/25">Ответить {user.name.split(' ')[0]}…</div>
          <motion.button
            whileTap={{ scale: 0.8 }}
            aria-label="Нравится"
            onClick={() => setLiked((l) => (l.includes(story.id) ? l.filter((x) => x !== story.id) : [...l, story.id]))}
            className="glass-dark grid size-12 place-items-center rounded-full text-[22px] ring-1 ring-white/25"
          >
            {liked.includes(story.id) ? '❤️' : '🤍'}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
