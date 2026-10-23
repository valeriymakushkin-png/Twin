'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { CalendarPlus, Check, ChevronRight, Flag, Globe2, Megaphone, PenLine, Plus, Stamp, Star, X } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { resolveItem } from '@/data';
import { citiesIn, countryByCode, countryHref, destinationById, destinationHref, destinations, placeById } from '@/data/catalog';
import { useVisa } from '@/store/visa';
import { stories, userById } from '@/data/social';
import { useI18n } from '@/i18n/use';
import { flag } from '@/lib/countries';
import { addDays, cn, todayKey } from '@/lib/utils';
import { useApp, type Collection } from '@/store/app';
import { useUI } from '@/store/ui';
import { Paywall } from './paywall';
import { Photo } from './photo';
import { Sheet } from './sheet';
import { Avatar, Button } from './ui';
import { useVisaTitle, VisaBadge } from './visa-badge';
import { HoldingsSheet, PassportSheet } from './visa/passport';

export function useCollectionName() {
  const { tk } = useI18n();
  return (c: Collection) => (c.nameKey ? tk(`collection.${c.nameKey}`) : c.name);
}

export function GlobalSheets() {
  const sheet = useUI((s) => s.sheet);
  const close = useUI((s) => s.closeSheet);
  const { t } = useI18n();
  return (
    <>
      <Sheet open={sheet?.type === 'create'} onClose={close} title={t('sheets.createTitle')}>
        <CreateSheet />
      </Sheet>
      <Sheet open={sheet?.type === 'collect'} onClose={close} title={t('sheets.collectTitle')}>
        {sheet?.type === 'collect' && <CollectSheet itemId={sheet.itemId} />}
      </Sheet>
      <Sheet open={sheet?.type === 'new-collection'} onClose={close} title={t('sheets.newCollection')}>
        <NewCollectionSheet />
      </Sheet>
      <Sheet open={sheet?.type === 'trip'} onClose={close} title={sheet?.type === 'trip' && sheet.itemId ? t('sheets.tripAddTitle') : t('sheets.tripNewTitle')}>
        {sheet?.type === 'trip' && <TripSheet itemId={sheet.itemId} />}
      </Sheet>
      <Sheet open={sheet?.type === 'review'} onClose={close} title={t('sheets.reviewTitle')}>
        {sheet?.type === 'review' && <ReviewSheet targetId={sheet.targetId} />}
      </Sheet>
      <Sheet open={sheet?.type === 'country'} onClose={close}>
        {sheet?.type === 'country' && <CountrySheet code={sheet.code} />}
      </Sheet>
      <Sheet open={sheet?.type === 'passport'} onClose={close} title={sheet?.type === 'passport' && sheet.slot === 'second' ? t('visa.pickSecondTitle') : t('visa.pickTitle')}>
        {sheet?.type === 'passport' && <PassportSheet slot={sheet.slot} />}
      </Sheet>
      <Sheet open={sheet?.type === 'holdings'} onClose={close} title={t('visa.holdingsTitle')}>
        <HoldingsSheet />
      </Sheet>
      <Sheet open={sheet?.type === 'paywall'} onClose={close}>
        <Paywall onDone={close} />
      </Sheet>
      <AnimatePresence>{sheet?.type === 'story' && <StoryViewer start={sheet.index} onClose={close} />}</AnimatePresence>
    </>
  );
}

function CreateSheet() {
  const router = useRouter();
  const { openSheet, closeSheet } = useUI();
  const { t } = useI18n();
  const items = [
    { icon: CalendarPlus, title: t('sheets.createTrip'), text: t('sheets.createTripText'), color: 'from-sky to-brand', onClick: () => openSheet({ type: 'trip' }) },
    { icon: Megaphone, title: t('sheets.createMeetup'), text: t('sheets.createMeetupText'), color: 'from-pink to-rose', onClick: () => (closeSheet(), router.push('/meetups/new/')) },
    { icon: PenLine, title: t('sheets.createReview'), text: t('sheets.createReviewText'), color: 'from-amber to-[#f97316]', onClick: () => openSheet({ type: 'review', targetId: '' }) },
    { icon: Stamp, title: t('sheets.createCountry'), text: t('sheets.createCountryText'), color: 'from-mint to-[#0d9488]', onClick: () => (closeSheet(), router.push('/passport/')) },
  ];
  return (
    <div className="grid gap-2.5 px-5 pb-6">
      {items.map((it, i) => (
        <motion.button key={it.title} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }} onClick={it.onClick} className="press flex items-center gap-4 rounded-3xl bg-surface-2/70 p-3.5 text-left">
          <span className={cn('grid size-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br text-white shadow-soft', it.color)}>
            <it.icon className="size-[22px]" />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-[15px] font-semibold">{it.title}</span>
            <span className="block text-[13px] text-muted">{it.text}</span>
          </span>
          <ChevronRight className="size-5 shrink-0 text-faint" />
        </motion.button>
      ))}
    </div>
  );
}

const emojis = ['✨', '🏝️', '🏔️', '🍜', '🌆', '🏛️', '❤️', '🎒', '🌋', '🛶'];

function CollectSheet({ itemId }: { itemId: string }) {
  const { collections, toggleInCollection, createCollection } = useApp();
  const close = useUI((s) => s.closeSheet);
  const { t, item, f } = useI18n();
  const collectionName = useCollectionName();
  const ref = resolveItem(itemId);
  const text = item(itemId);
  const [creating, setCreating] = useState(false);
  const [name, setName] = useState('');
  const [emoji, setEmoji] = useState('✨');

  return (
    <div className="px-5 pb-6">
      {ref && (
        <div className="mb-4 flex items-center gap-3 rounded-2xl bg-surface-2/70 p-2.5">
          <Photo id={ref.image} alt={text.name} width={120} className="size-12 shrink-0" rounded="rounded-xl" />
          <div className="min-w-0">
            <p className="truncate text-[14px] font-semibold">{text.name}</p>
            <p className="truncate text-[12px] text-muted">{text.subtitle}</p>
          </div>
        </div>
      )}
      <div className="grid gap-1">
        {collections.map((c) => {
          const has = c.itemIds.includes(itemId);
          const cover = c.itemIds[0] ? resolveItem(c.itemIds[0]) : undefined;
          return (
            <button key={c.id} onClick={() => toggleInCollection(c.id, itemId)} className="press flex items-center gap-3 rounded-2xl p-2 text-left hover:bg-surface-2">
              {cover ? <Photo id={cover.image} alt="" width={120} className="size-12 shrink-0" rounded="rounded-xl" /> : <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-brand-50 text-[22px]">{c.emoji}</span>}
              <span className="min-w-0 flex-1">
                <span className="block truncate text-[15px] font-semibold">
                  {c.emoji} {collectionName(c)}
                </span>
                <span className="block text-[12px] text-muted">{t('common.places', { count: c.itemIds.length })}</span>
              </span>
              <span className={cn('grid size-7 shrink-0 place-items-center rounded-full border-2 transition-colors', has ? 'border-brand bg-brand text-white' : 'border-line')}>{has && <Check className="size-4" strokeWidth={3} />}</span>
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
          <input autoFocus value={name} onChange={(e) => setName(e.target.value)} placeholder={t('sheets.collectionPlaceholder')} className="h-12 w-full rounded-2xl bg-white px-4 text-[15px] outline-none ring-1 ring-line focus:ring-2 focus:ring-brand" />
          <Button
            className="mt-3 w-full"
            disabled={!name.trim()}
            onClick={() => {
              createCollection(name.trim(), emoji, itemId);
              toast.success(t('sheets.collectionCreated', { name: name.trim() }));
              close();
            }}
          >
            {t('sheets.createAndAdd')}
          </Button>
        </div>
      ) : (
        <button onClick={() => setCreating(true)} className="press mt-2 flex w-full items-center gap-3 rounded-2xl p-2 text-left text-brand-600">
          <span className="grid size-12 place-items-center rounded-xl border-2 border-dashed border-brand/40">
            <Plus className="size-5" />
          </span>
          <span className="text-[15px] font-semibold">{t('sheets.newCollection')}</span>
        </button>
      )}
    </div>
  );
}

function NewCollectionSheet() {
  const createCollection = useApp((s) => s.createCollection);
  const close = useUI((s) => s.closeSheet);
  const { t } = useI18n();
  const [name, setName] = useState('');
  const [emoji, setEmoji] = useState('✨');
  return (
    <div className="px-5 pb-6">
      <div className="flex items-center gap-3">
        <span className="grid size-16 shrink-0 place-items-center rounded-[22px] bg-brand-50 text-[32px]">{emoji}</span>
        <input autoFocus value={name} onChange={(e) => setName(e.target.value)} placeholder={t('sheets.collectionPlaceholder')} className="h-14 min-w-0 flex-1 rounded-2xl bg-surface-2/70 px-4 text-[16px] outline-none focus:ring-2 focus:ring-brand" />
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
        {t('sheets.createCollection')}
      </Button>
    </div>
  );
}

function TripSheet({ itemId }: { itemId?: string }) {
  const router = useRouter();
  const close = useUI((s) => s.closeSheet);
  const { trips, createTrip, addToTrip } = useApp();
  const { t, f, dest } = useI18n();
  const ref = itemId ? resolveItem(itemId) : undefined;
  const destId = ref ? (ref.kind === 'destination' ? ref.id : (placeById(ref.id)?.destinationId ?? 'bali')) : 'bali';
  const [creating, setCreating] = useState(!itemId || trips.length === 0);
  const [destination, setDestination] = useState(destId);
  const [start, setStart] = useState(addDays(todayKey(), 30));
  const [end, setEnd] = useState(addDays(todayKey(), 37));
  const [name, setName] = useState('');
  const d = destinationById(destination);
  const placeId = ref?.kind === 'place' ? ref.id : undefined;
  const defaultName = t('trip.defaultName', { place: d ? dest(d.id).name : '', year: new Date(start).getFullYear() });

  if (!creating)
    return (
      <div className="px-5 pb-6">
        <div className="grid gap-1">
          {trips.map((tr) => {
            const td = destinationById(tr.destinationId);
            const has = placeId ? tr.items.some((i) => i.placeId === placeId) : false;
            return (
              <button
                key={tr.id}
                onClick={() => {
                  if (placeId) addToTrip(tr.id, placeId);
                  toast.success(t('sheets.addedTo', { name: tr.name }));
                  close();
                }}
                className="press flex items-center gap-3 rounded-2xl p-2 text-left hover:bg-surface-2"
              >
                <Photo id={td?.image ?? ''} alt={tr.name} width={120} className="size-12 shrink-0" rounded="rounded-xl" />
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-[15px] font-semibold">{tr.name}</span>
                  <span className="block text-[12px] text-muted">
                    {f.date(tr.start)} — {f.date(tr.end)} · {t('common.places', { count: tr.items.length })}
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
          <span className="text-[15px] font-semibold">{t('saved.newTrip')}</span>
        </button>
      </div>
    );

  return (
    <div className="px-5 pb-6">
      <p className="mb-2 text-[13px] font-semibold text-muted">{t('sheets.whereTo')}</p>
      <div className="no-scrollbar -mx-5 flex gap-2.5 overflow-x-auto px-5 pb-1">
        {destinations.map((x) => (
          <button key={x.id} onClick={() => setDestination(x.id)} className={cn('press relative h-24 w-20 shrink-0 overflow-hidden rounded-2xl transition-all', destination === x.id ? 'ring-[3px] ring-brand ring-offset-2' : '')}>
            <Photo id={x.image} alt={dest(x.id).name} width={200} className="absolute inset-0" tint={x.theme.accent} />
            <span className="photo-scrim absolute inset-0" />
            <span className="absolute inset-x-1.5 bottom-1.5 text-left text-[11px] font-bold leading-tight text-white">{dest(x.id).name}</span>
          </button>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2.5">
        <label className="rounded-2xl bg-surface-2/70 px-4 py-2.5">
          <span className="block text-[11px] font-semibold text-muted">{t('sheets.departure')}</span>
          <input type="date" value={start} min={todayKey()} onChange={(e) => (setStart(e.target.value), e.target.value > end && setEnd(addDays(e.target.value, 5)))} className="w-full bg-transparent text-[15px] font-semibold outline-none" />
        </label>
        <label className="rounded-2xl bg-surface-2/70 px-4 py-2.5">
          <span className="block text-[11px] font-semibold text-muted">{t('sheets.return')}</span>
          <input type="date" value={end} min={start} onChange={(e) => setEnd(e.target.value)} className="w-full bg-transparent text-[15px] font-semibold outline-none" />
        </label>
      </div>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder={defaultName} className="mt-2.5 h-12 w-full rounded-2xl bg-surface-2/70 px-4 text-[15px] outline-none focus:ring-2 focus:ring-brand" />
      {d && <VisaBadge code={d.countryCode} className="mt-3" />}
      <Button
        className="mt-4 w-full"
        size="lg"
        onClick={() => {
          const id = createTrip({ name: name.trim() || defaultName, destinationId: destination, start, end, placeIds: placeId ? [placeId] : [] });
          close();
          router.push(`/trip/?id=${id}`);
        }}
      >
        {t('sheets.submitTrip')}
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
  const { t, tk, item, dest } = useI18n();
  const target = targetId ? resolveItem(targetId) : undefined;
  const targetText = targetId ? item(targetId) : undefined;

  return (
    <div className="px-5 pb-6">
      {!target ? (
        <>
          <p className="mb-2 text-[13px] font-semibold text-muted">{t('sheets.reviewAbout')}</p>
          <div className="grid grid-cols-3 gap-2">
            {destinations.slice(0, 15).map((x) => (
              <button key={x.id} onClick={() => setTargetId(x.id)} className="press relative h-20 overflow-hidden rounded-2xl">
                <Photo id={x.image} alt={dest(x.id).name} width={240} className="absolute inset-0" tint={x.theme.accent} />
                <span className="photo-scrim absolute inset-0" />
                <span className="absolute inset-x-2 bottom-1.5 truncate text-left text-[12px] font-bold text-white">{dest(x.id).name}</span>
              </button>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="flex items-center gap-3 rounded-2xl bg-surface-2/70 p-2.5">
            <Photo id={target.image} alt={targetText!.name} width={120} className="size-12 shrink-0" rounded="rounded-xl" />
            <div className="min-w-0 flex-1">
              <p className="truncate text-[15px] font-semibold">{targetText!.name}</p>
              <p className="truncate text-[12px] text-muted">{targetText!.subtitle}</p>
            </div>
          </div>
          <div className="mt-5 flex flex-col items-center">
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((n) => (
                <motion.button key={n} whileTap={{ scale: 0.8 }} onClick={() => setRating(n)} aria-label={`${n}/5`}>
                  <Star className={cn('size-10 transition-colors', n <= rating ? 'fill-star text-star' : 'text-line')} strokeWidth={1.5} />
                </motion.button>
              ))}
            </div>
            <p className="mt-2 text-[14px] font-semibold text-ink-2">{tk(`sheets.rating.r${rating}`)}</p>
          </div>
          <textarea value={text} onChange={(e) => setText(e.target.value)} rows={4} placeholder={t('sheets.reviewPlaceholder')} className="mt-4 w-full resize-none rounded-2xl bg-surface-2/70 p-4 text-[15px] outline-none focus:ring-2 focus:ring-brand" />
          <Button
            className="mt-3 w-full"
            size="lg"
            disabled={text.trim().length < 5}
            onClick={() => {
              addReview(target.id, rating, text.trim());
              close();
            }}
          >
            {t('sheets.publish', { count: 40 })}
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
  const { t, country, dest } = useI18n();
  const visaTitle = useVisaTitle();
  const visa = useVisa(code);
  const dests = citiesIn(code);
  return (
    <div className="px-5 pb-6">
      <div className="flex items-center gap-4">
        <span className="text-[52px] leading-none">{flag(code)}</span>
        <div className="min-w-0">
          <h3 className="text-[24px] font-bold tracking-[-0.03em]">{country(code)}</h3>
          <p className="text-[13px] text-muted">
            {visa ? `${t('sheets.countryRegime', { regime: visaTitle(visa) })}${visa.days ? ` · ${t('visa.stay', { count: visa.days })}` : ''}` : t('sheets.countryNoVisa')}
          </p>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2.5">
        <Button variant={visited ? 'soft' : 'primary'} onClick={() => toggleVisited(code)}>
          {visited ? <Check className="size-4" /> : <Flag className="size-4" />}
          {visited ? t('sheets.been') : t('sheets.mark')}
        </Button>
        {visa ? (
          <Link href={`/visa/${code.toLowerCase()}/`} onClick={close} className="press inline-flex h-11 items-center justify-center gap-2 rounded-full border border-brand/25 bg-white text-[15px] font-semibold text-brand-600 shadow-soft">
            <Stamp className="size-4" /> {t('sheets.visa')}
          </Link>
        ) : (
          <Button variant="secondary" disabled>
            {t('sheets.noData')}
          </Button>
        )}
      </div>
      {countryByCode(code) && (
        <Link href={countryHref(code)} onClick={close} className="press mt-2.5 flex h-11 items-center justify-center gap-2 rounded-full bg-ink text-[15px] font-semibold text-white">
          <Globe2 className="size-4" /> {t('country.open')}
        </Link>
      )}
      {dests.length > 0 && (
        <>
          <p className="mb-2 mt-5 text-[13px] font-semibold text-muted">{t('sheets.destinations')}</p>
          <div className="grid gap-2">
            {dests.map((x) => (
              <Link key={x.id} href={destinationHref(x.id)} onClick={close} className="press flex items-center gap-3 rounded-2xl bg-surface-2/70 p-2">
                <Photo id={x.image} alt={dest(x.id).name} width={140} className="size-14 shrink-0" rounded="rounded-xl" tint={x.theme.accent} />
                <div className="min-w-0 flex-1">
                  <p className="text-[15px] font-semibold">{dest(x.id).name}</p>
                  <p className="truncate text-[12px] text-muted">{dest(x.id).tagline}</p>
                </div>
                <ChevronRight className="size-5 shrink-0 text-faint" />
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
  const { t, c, user } = useI18n();
  const story = stories[index];
  const author = story ? userById(story.userId) : undefined;
  const [liked, setLiked] = useState<string[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => (index < stories.length - 1 ? setIndex(index + 1) : onClose()), 5000);
    return () => clearTimeout(timer);
  }, [index, onClose]);

  if (!story || !author) return null;
  const caption = c.stories[story.id];
  return (
    <motion.div className="fixed inset-0 z-[85] bg-black" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }}>
      <AnimatePresence mode="popLayout">
        <motion.div key={story.id} className="absolute inset-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <motion.div className="absolute inset-0" initial={{ scale: 1 }} animate={{ scale: 1.08 }} transition={{ duration: 5, ease: 'linear' }}>
            <Photo id={story.image} alt={caption} width={900} priority className="absolute inset-0" />
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
          <Avatar userId={author.id} size={36} ring />
          <div className="min-w-0 flex-1 text-white">
            <p className="text-[14px] font-semibold">{user(author.id).name}</p>
            <p className="text-[12px] text-white/75">{user(author.id).home}</p>
          </div>
          <button aria-label={t('common.close')} onClick={onClose} className="grid size-10 place-items-center text-white">
            <X className="size-6" />
          </button>
        </div>
      </div>
      <button aria-label={t('common.back')} className="absolute inset-y-0 left-0 w-1/3" onClick={() => setIndex(Math.max(0, index - 1))} />
      <button aria-label={t('common.continue')} className="absolute inset-y-0 right-0 w-2/3" onClick={() => (index < stories.length - 1 ? setIndex(index + 1) : onClose())} />
      <div className="pb-safe absolute inset-x-0 bottom-0 z-10 px-5">
        <p className="mb-4 text-[22px] font-bold leading-snug text-white">{caption}</p>
        <div className="mb-4 flex items-center gap-3">
          <div className="glass-dark flex h-12 flex-1 items-center rounded-full px-5 text-[14px] text-white/70 ring-1 ring-white/25">{t('sheets.storyReply', { name: user(author.id).name.split(' ')[0]! })}</div>
          <motion.button
            whileTap={{ scale: 0.8 }}
            aria-label={t('sheets.like')}
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
