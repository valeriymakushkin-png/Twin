'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { CalendarDays, Clock, MapPin, MessageCircle, Send, Ticket, Users } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useRef, useState } from 'react';
import { HeroPage } from '@/components/hero';
import { Avatar, Button } from '@/components/ui';
import { destinationById } from '@/data/destinations';
import { userById } from '@/data/social';
import { cn, formatWhen } from '@/lib/utils';
import { meetupStart, useAllMeetups, useApp } from '@/store/app';

const replies = [
  'Супер, до встречи! 🙌',
  'Кто-нибудь берёт байк? Могу подвезти',
  'Я буду чуть пораньше, займу место',
  'Отличная идея, давно хотел(а) туда',
  'Беру с собой фотоаппарат 📸',
];

function MeetupInner() {
  const params = useSearchParams();
  const id = params.get('id') ?? '';
  const openChat = params.get('chat') === '1';
  const meetup = useAllMeetups().find((m) => m.id === id);
  const { joined, toggleJoin, chats, sendMessage, profile } = useApp();
  const [chat, setChat] = useState(openChat);
  const [text, setText] = useState('');
  const bottom = useRef<HTMLDivElement>(null);
  const messages = chats[id] ?? [];
  const isJoined = joined.includes(id);

  useEffect(() => {
    bottom.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages.length, chat]);

  if (!meetup) return <div className="grid h-full place-items-center text-muted">Встреча не найдена</div>;

  const host = meetup.createdByMe ? null : userById(meetup.hostId);
  const dest = destinationById(meetup.destinationId);
  const start = meetupStart(meetup);
  const attendees = [...(isJoined && !meetup.createdByMe ? ['me'] : []), ...(meetup.createdByMe ? ['me'] : []), ...meetup.attendeeIds];
  const spots = meetup.capacity - attendees.length;

  const seeded = [
    ...(host ? [{ id: 's1', userId: host.id, text: `Всем привет! Это ${host.name.split(' ')[0]}, организую встречу. ${meetup.description.split('.')[0]}.`, at: 0 }] : []),
    ...meetup.attendeeIds.slice(0, 2).map((u, i) => ({ id: `s${i + 2}`, userId: u, text: replies[i]!, at: 0 })),
  ];

  const send = () => {
    const t = text.trim();
    if (!t) return;
    sendMessage(id, t);
    setText('');
    const responder = meetup.attendeeIds[messages.length % Math.max(1, meetup.attendeeIds.length)];
    if (responder) setTimeout(() => sendMessage(id, replies[(messages.length + 2) % replies.length]!, responder), 1400 + Math.random() * 1200);
  };

  return (
    <>
      <HeroPage
        image={meetup.image}
        title={meetup.title}
        heroHeight={340}
        overlay={
          <>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-pink px-2.5 py-1 text-[11px] font-bold">
              <Users className="size-3" /> Встреча
            </span>
            <h1 className="mt-2 text-[30px] font-bold leading-[1.08] tracking-[-0.035em]">{meetup.title}</h1>
            <p className="mt-1 text-[15px] text-white/90">{dest ? `${dest.name}, ${dest.country}` : meetup.placeName}</p>
          </>
        }
      >
        <div className="grid gap-5 px-5 pb-28 pt-6">
          <div className="grid gap-2">
            {[
              { icon: CalendarDays, text: formatWhen(start) },
              { icon: Clock, text: `${meetup.durationHours} ч` },
              { icon: MapPin, text: meetup.placeName },
              ...(meetup.price ? [{ icon: Ticket, text: meetup.price }] : []),
            ].map((r) => (
              <div key={r.text} className="flex items-center gap-3 text-[15px]">
                <span className="grid size-9 place-items-center rounded-xl bg-brand-50 text-brand">
                  <r.icon className="size-[18px]" />
                </span>
                {r.text}
              </div>
            ))}
          </div>

          <p className="text-[15px] leading-relaxed text-ink-2">{meetup.description}</p>

          <div className="flex items-center gap-3 rounded-[22px] bg-surface-2/70 p-3.5">
            <Avatar userId={host?.id ?? 'me'} size={44} />
            <div className="min-w-0 flex-1">
              <p className="text-[12px] text-muted">Организатор</p>
              <p className="text-[15px] font-semibold">{host?.name ?? `${profile.name} (вы)`}</p>
            </div>
            {host && (
              <Link href={`/u/${host.id}/`} className="text-[13px] font-semibold text-brand-600">
                Профиль
              </Link>
            )}
          </div>

          <section>
            <div className="flex items-center justify-between">
              <h2 className="text-[17px] font-bold">Участники · {attendees.length}</h2>
              <span className={cn('text-[12px] font-semibold', spots <= 3 ? 'text-rose' : 'text-muted')}>{spots > 0 ? `Осталось мест: ${spots}` : 'Мест нет'}</span>
            </div>
            <div className="mt-3 flex flex-wrap gap-3">
              <AnimatePresence>
                {attendees.map((u) => (
                  <motion.div key={u} layout initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="flex w-14 flex-col items-center gap-1">
                    <Avatar userId={u} size={52} />
                    <span className="w-full truncate text-center text-[11px] text-ink-2">{u === 'me' ? 'Вы' : userById(u)?.name.split(' ')[0]}</span>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </section>

          <button onClick={() => setChat(true)} className="press flex items-center gap-3 rounded-[22px] bg-white p-3.5 text-left shadow-card ring-1 ring-line-soft">
            <span className="grid size-11 place-items-center rounded-2xl bg-gradient-to-br from-brand to-violet text-white">
              <MessageCircle className="size-5" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-[15px] font-semibold">Чат встречи</p>
              <p className="truncate text-[12px] text-muted">{(messages.at(-1) ?? seeded.at(-1))?.text ?? 'Познакомьтесь до встречи'}</p>
            </div>
            <span className="rounded-full bg-brand px-2 py-0.5 text-[11px] font-bold text-white">{seeded.length + messages.length}</span>
          </button>
        </div>
      </HeroPage>

      {!meetup.createdByMe && (
        <div className="pb-safe glass fixed inset-x-0 bottom-0 z-30 border-t border-line-soft px-5 pt-3">
          <div className="mb-3 flex items-center gap-3">
            <div className="flex-1">
              <p className="text-[13px] text-muted">{formatWhen(start)}</p>
              <p className="text-[15px] font-bold">{meetup.price ?? 'Бесплатно'}</p>
            </div>
            <Button size="lg" variant={isJoined ? 'soft' : 'primary'} onClick={() => toggleJoin(id)} disabled={!isJoined && spots <= 0}>
              {isJoined ? '✓ Вы идёте' : 'Присоединиться'}
            </Button>
          </div>
        </div>
      )}

      <AnimatePresence>
        {chat && (
          <motion.div
            className="absolute inset-0 z-50 flex flex-col bg-canvas"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 380, damping: 38 }}
          >
            <div className="pt-safe glass border-b border-line-soft">
              <div className="flex h-14 items-center gap-3 px-4">
                <button onClick={() => setChat(false)} className="text-[15px] font-semibold text-brand-600">
                  Назад
                </button>
                <div className="min-w-0 flex-1 text-center">
                  <p className="truncate text-[15px] font-bold">{meetup.title}</p>
                  <p className="text-[11px] text-muted">{attendees.length} участников</p>
                </div>
                <span className="w-12" />
              </div>
            </div>
            <div className="scroll-area flex-1 px-4 py-4">
              <p className="mb-4 text-center text-[12px] text-faint">Будьте вежливы и не делитесь личными данными до встречи</p>
              <div className="grid gap-2.5">
                {[...seeded, ...messages].map((m) => {
                  const mine = m.userId === 'me';
                  return (
                    <motion.div key={m.id} initial={{ opacity: 0, y: 8, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} className={cn('flex items-end gap-2', mine && 'flex-row-reverse')}>
                      {!mine && <Avatar userId={m.userId} size={28} />}
                      <div className={cn('max-w-[75%] rounded-[20px] px-3.5 py-2.5 text-[14px] leading-snug', mine ? 'rounded-br-md bg-brand text-white' : 'rounded-bl-md bg-white text-ink shadow-soft')}>
                        {!mine && <p className="mb-0.5 text-[11px] font-semibold text-brand-600">{userById(m.userId)?.name.split(' ')[0]}</p>}
                        {m.text}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
              <div ref={bottom} />
            </div>
            <div className="pb-safe glass border-t border-line-soft px-3 pt-2.5">
              {isJoined || meetup.createdByMe ? (
                <form
                  className="mb-2.5 flex items-center gap-2"
                  onSubmit={(e) => {
                    e.preventDefault();
                    send();
                  }}
                >
                  <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Сообщение…" className="h-11 min-w-0 flex-1 rounded-full bg-white px-4 text-[15px] outline-none ring-1 ring-line focus:ring-2 focus:ring-brand" />
                  <button aria-label="Отправить" disabled={!text.trim()} className="press grid size-11 place-items-center rounded-full bg-brand text-white shadow-brand disabled:opacity-40">
                    <Send className="size-[18px]" />
                  </button>
                </form>
              ) : (
                <Button className="mb-2.5 w-full" onClick={() => toggleJoin(id)}>
                  Присоединитесь, чтобы писать в чат
                </Button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function MeetupPage() {
  return (
    <Suspense>
      <MeetupInner />
    </Suspense>
  );
}
