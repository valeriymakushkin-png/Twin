'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { CalendarDays, Clock, Lock, MapPin, MessageCircle, Send, Ticket, Users } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useRef, useState } from 'react';
import { HeroPage } from '@/components/hero';
import { Avatar, Button, DemoBadge } from '@/components/ui';
import { destinationById } from '@/data/destinations';
import { userById } from '@/data/social';
import type { MessageKey } from '@/i18n';
import { useI18n } from '@/i18n/use';
import { cn } from '@/lib/utils';
import { meetupStart, useAllMeetups, useApp } from '@/store/app';

const REPLIES = ['a', 'b', 'c', 'd', 'e'].map((k) => `meetups.replies.${k}` as MessageKey);

function MeetupInner() {
  const params = useSearchParams();
  const id = params.get('id') ?? '';
  const openChat = params.get('chat') === '1';
  const meetup = useAllMeetups().find((m) => m.id === id);
  const { joined, toggleJoin, chats, sendMessage, profile } = useApp();
  const { t, tk, f, dest, user, country, meetupText } = useI18n();
  const [chat, setChat] = useState(openChat);
  const [text, setText] = useState('');
  const bottom = useRef<HTMLDivElement>(null);
  const messages = chats[id] ?? [];
  const isJoined = joined.includes(id);

  useEffect(() => {
    bottom.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages.length, chat]);

  if (!meetup) return <div className="grid h-full place-items-center text-muted">{t('meetups.notFound')}</div>;

  const copy = meetupText(meetup);
  const host = meetup.createdByMe ? null : userById(meetup.hostId);
  const d = destinationById(meetup.destinationId);
  const accent = d?.theme.accent ?? '#ec4899';
  const start = meetupStart(meetup);
  const attendees = [...(isJoined || meetup.createdByMe ? ['me'] : []), ...meetup.attendeeIds];
  const spots = meetup.capacity - attendees.length;
  const firstName = (uid: string) => (uid === 'me' ? t('common.you') : user(uid)?.name.split(' ')[0] ?? '');
  const price = meetup.price ? f.price(meetup.price) : t('common.free');

  // Seeded conversation is rebuilt from the dictionary so it follows the chosen language.
  const seeded = [
    ...(host ? [{ id: 's1', userId: host.id, text: t('meetups.seedHost', { name: firstName(host.id) }), at: 0 }] : []),
    ...meetup.attendeeIds.slice(0, 2).map((u, i) => ({ id: `s${i + 2}`, userId: u, text: t(REPLIES[i]!), at: 0 })),
  ];

  const send = () => {
    const body = text.trim();
    if (!body) return;
    sendMessage(id, body);
    setText('');
    const responder = meetup.attendeeIds[messages.length % Math.max(1, meetup.attendeeIds.length)];
    if (responder) setTimeout(() => sendMessage(id, t(REPLIES[(messages.length + 2) % REPLIES.length]!), responder), 1400 + Math.random() * 1200);
  };

  return (
    <>
      <HeroPage
        image={meetup.image}
        title={copy.title}
        heroHeight={340}
        theme={d?.theme}
        overlay={
          <>
            <div className="flex flex-wrap gap-1.5">
              <span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold" style={{ background: accent }}>
                <Users className="size-3" /> {tk(`meetups.kind.${meetup.kind}`)}
              </span>
              {meetup.private && (
                <span className="glass-dark inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-bold ring-1 ring-white/20">
                  <Lock className="size-3" /> {t('meetups.private')}
                </span>
              )}
            </div>
            <h1 className="mt-2 text-[30px] font-bold leading-[1.08] tracking-[-0.035em]">{copy.title}</h1>
            <p className="mt-1 text-[15px] text-white/90">{d ? `${dest(d.id).name}, ${country(d.countryCode)}` : copy.placeName}</p>
          </>
        }
      >
        <div className="grid gap-5 px-5 pb-28 pt-6">
          <div className="grid gap-2">
            {[
              { icon: CalendarDays, text: f.when(start) },
              { icon: Clock, text: t('common.hoursShort', { count: meetup.durationHours }) },
              { icon: MapPin, text: copy.placeName },
              ...(meetup.price ? [{ icon: Ticket, text: price }] : []),
            ].map((r) => (
              <div key={r.text} className="flex items-center gap-3 text-[15px]">
                <span className="grid size-9 shrink-0 place-items-center rounded-xl" style={{ background: `${accent}14`, color: accent }}>
                  <r.icon className="size-[18px]" />
                </span>
                {r.text}
              </div>
            ))}
          </div>

          <p className="text-[15px] leading-relaxed text-ink-2">{copy.description}</p>

          <div className="flex items-center gap-3 rounded-[22px] bg-surface-2/70 p-3.5">
            <Avatar userId={host?.id ?? 'me'} size={44} />
            <div className="min-w-0 flex-1">
              <p className="flex items-center gap-1.5 text-[12px] text-muted">
                {t('meetups.organizer')} {host && <DemoBadge />}
              </p>
              <p className="truncate text-[15px] font-semibold">{host ? user(host.id).name : t('meetups.meAsHost', { name: profile.name })}</p>
            </div>
            {host && (
              <Link href={`/u/${host.id}/`} className="text-[13px] font-semibold" style={{ color: accent }}>
                {t('meetups.profile')}
              </Link>
            )}
          </div>

          <section>
            <div className="flex items-center justify-between">
              <h2 className="text-[17px] font-bold">{t('meetups.participants', { count: attendees.length })}</h2>
              <span className={cn('text-[12px] font-semibold', spots <= 3 ? 'text-rose' : 'text-muted')}>{spots > 0 ? t('meetups.spotsLeft', { count: spots }) : t('meetups.noSpots')}</span>
            </div>
            <div className="mt-3 flex flex-wrap gap-3">
              <AnimatePresence>
                {attendees.map((u) => (
                  <motion.div key={u} layout initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="flex w-14 flex-col items-center gap-1">
                    <Avatar userId={u} size={52} />
                    <span className="w-full truncate text-center text-[11px] text-ink-2">{firstName(u)}</span>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </section>

          <button onClick={() => setChat(true)} className="press flex items-center gap-3 rounded-[22px] bg-white p-3.5 text-left shadow-card ring-1 ring-line-soft">
            <span className="grid size-11 shrink-0 place-items-center rounded-2xl text-white" style={{ background: `linear-gradient(135deg, ${accent}, ${d?.theme.accent2 ?? '#7c3aed'})` }}>
              <MessageCircle className="size-5" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-[15px] font-semibold">{t('meetups.chat')}</p>
              <p className="truncate text-[12px] text-muted">{(messages.at(-1) ?? seeded.at(-1))?.text ?? t('meetups.chatHint')}</p>
            </div>
            <span className="rounded-full px-2 py-0.5 text-[11px] font-bold text-white" style={{ background: accent }}>
              {seeded.length + messages.length}
            </span>
          </button>
        </div>
      </HeroPage>

      {!meetup.createdByMe && (
        <div className="pb-safe glass fixed inset-x-0 bottom-0 z-30 border-t border-line-soft px-5 pt-3">
          <div className="mb-3 flex items-center gap-3">
            <div className="min-w-0 flex-1">
              <p className="truncate text-[13px] text-muted">{f.when(start)}</p>
              <p className="text-[15px] font-bold">{price}</p>
            </div>
            <Button size="lg" variant={isJoined ? 'soft' : 'primary'} onClick={() => toggleJoin(id)} disabled={!isJoined && spots <= 0}>
              {isJoined ? `✓ ${t('meetups.going')}` : t('meetups.join')}
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
                <button onClick={() => setChat(false)} className="w-16 text-left text-[15px] font-semibold" style={{ color: accent }}>
                  {t('common.back')}
                </button>
                <div className="min-w-0 flex-1 text-center">
                  <p className="truncate text-[15px] font-bold">{copy.title}</p>
                  <p className="text-[11px] text-muted">{t('common.people', { count: attendees.length })}</p>
                </div>
                <span className="w-16" />
              </div>
            </div>
            <div className="scroll-area flex-1 px-4 py-4">
              <p className="mb-4 text-center text-[12px] text-faint">{t('meetups.chatSafety')}</p>
              <div className="grid gap-2.5">
                {[...seeded, ...messages].map((m) => {
                  const mine = m.userId === 'me';
                  return (
                    <motion.div key={m.id} initial={{ opacity: 0, y: 8, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} className={cn('flex items-end gap-2', mine && 'flex-row-reverse')}>
                      {!mine && <Avatar userId={m.userId} size={28} />}
                      <div
                        className={cn('max-w-[75%] rounded-[20px] px-3.5 py-2.5 text-[14px] leading-snug', mine ? 'rounded-br-md text-white' : 'rounded-bl-md bg-white text-ink shadow-soft')}
                        style={mine ? { background: accent } : undefined}
                      >
                        {!mine && (
                          <p className="mb-0.5 text-[11px] font-semibold" style={{ color: accent }}>
                            {firstName(m.userId)}
                          </p>
                        )}
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
                  <input value={text} onChange={(e) => setText(e.target.value)} placeholder={t('meetups.message')} className="h-11 min-w-0 flex-1 rounded-full bg-white px-4 text-[15px] outline-none ring-1 ring-line focus:ring-2 focus:ring-brand" />
                  <button aria-label={t('meetups.send')} disabled={!text.trim()} className="press grid size-11 place-items-center rounded-full text-white disabled:opacity-40" style={{ background: accent }}>
                    <Send className="size-[18px]" />
                  </button>
                </form>
              ) : (
                <Button className="mb-2.5 w-full" onClick={() => toggleJoin(id)}>
                  {t('meetups.joinToChat')}
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
