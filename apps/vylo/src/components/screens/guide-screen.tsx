'use client';

import { motion } from 'framer-motion';
import { BookmarkPlus, Clock, Heart, PartyPopper, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { toast } from 'sonner';
import { PlaceRow } from '@/components/cards';
import { HeroPage } from '@/components/hero';
import { PlusLock } from '@/components/paywall';
import { Avatar, Button, DemoBadge, UserName } from '@/components/ui';
import { destinationById } from '@/data/destinations';
import { guideById, userById } from '@/data/social';
import { useI18n } from '@/i18n/use';
import { cn } from '@/lib/utils';
import { useApp } from '@/store/app';

export function GuideScreen({ id }: { id: string }) {
  const g = guideById(id)!;
  const author = userById(g.authorId)!;
  const d = destinationById(g.destinationId)!;
  const { liked, toggleLike, following, toggleFollow, createCollection, toggleInCollection, markGuideRead, guidesRead, plus } = useApp();
  const { t, f, guide } = useI18n();
  const text = guide(id);
  const locked = g.plus && !plus.active;
  const isLiked = liked.includes(g.id);
  const read = guidesRead.includes(g.id);
  const end = useRef<HTMLDivElement>(null);
  const accent = d.theme.accent;

  useEffect(() => {
    document.title = `${text.title} — Vylo`;
  }, [text.title]);

  useEffect(() => {
    const el = end.current;
    if (!el || locked) return;
    const io = new IntersectionObserver(([e]) => e?.isIntersecting && markGuideRead(g.id), { threshold: 0.6 });
    io.observe(el);
    return () => io.disconnect();
  }, [g.id, locked, markGuideRead]);

  const sections = locked ? text.sections.slice(0, 1) : text.sections;

  return (
    <HeroPage
      image={g.image}
      title={text.title}
      heroHeight={360}
      theme={d.theme}
      overlay={
        <>
          <div className="flex flex-wrap gap-1.5">
            <span className="glass-dark inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold ring-1 ring-white/20">
              <Clock className="size-3" /> {t('common.readMins', { count: g.readMins })}
            </span>
            {g.plus && (
              <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-[#fcd34d] to-[#f59e0b] px-2.5 py-1 text-[11px] font-black text-[#451a03]">
                <Sparkles className="size-3" /> {t('plus.exclusive')}
              </span>
            )}
          </div>
          <h1 className="mt-2 text-[30px] font-bold leading-[1.08] tracking-[-0.035em]">{text.title}</h1>
          <p className="mt-1 text-[15px] text-white/85">{text.subtitle}</p>
        </>
      }
    >
      <div className="px-5 pt-7">
        <div className="flex items-center gap-3">
          <Link href={`/u/${author.id}/`}>
            <Avatar userId={author.id} size={46} />
          </Link>
          <div className="min-w-0 flex-1">
            <UserName userId={author.id} className="text-[15px] font-semibold" />
            <p className="flex items-center gap-1.5 text-[12px] text-muted">
              {t('common.countries', { count: author.countries.length })} · {f.compact(author.followers)} <DemoBadge />
            </p>
          </div>
          <Button size="sm" variant={following.includes(author.id) ? 'soft' : 'primary'} onClick={() => toggleFollow(author.id)}>
            {following.includes(author.id) ? t('discover.following') : t('discover.follow')}
          </Button>
        </div>

        <article className="mt-7 grid gap-6">
          {sections.map((s, i) => (
            <motion.section key={s.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }}>
              <div className="flex items-baseline gap-3">
                <span className="text-[13px] font-black" style={{ color: accent }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h2 className="text-[20px] font-bold leading-snug tracking-[-0.02em]">{s.title}</h2>
              </div>
              <p className="mt-2 text-[16px] leading-[1.7] text-ink-2">{s.body}</p>
            </motion.section>
          ))}
        </article>

        {locked ? (
          <div className="relative mt-4">
            <div className="pointer-events-none absolute -top-24 inset-x-0 h-24 bg-gradient-to-b from-transparent to-white" />
            <p className="mb-3 text-center text-[13px] font-semibold text-muted">{t('plus.readMore')}</p>
            <PlusLock />
          </div>
        ) : (
          <>
            {g.placeIds.length > 0 && (
              <section className="mt-8">
                <div className="flex items-center justify-between gap-2">
                  <h2 className="text-[19px] font-bold tracking-[-0.02em]">{t('destination.topPlaces')}</h2>
                  <button
                    onClick={() => {
                      const cid = createCollection(text.title, '📚');
                      g.placeIds.forEach((pid) => toggleInCollection(cid, pid));
                      toast.success(t('sheets.collectionCreated', { name: text.title }));
                    }}
                    className="flex shrink-0 items-center gap-1 text-[13px] font-semibold"
                    style={{ color: accent }}
                  >
                    <BookmarkPlus className="size-4" /> {t('common.save')}
                  </button>
                </div>
                <div className="mt-3 grid gap-2.5">
                  {g.placeIds.map((pid) => (
                    <PlaceRow key={pid} id={pid} />
                  ))}
                </div>
              </section>
            )}

            <div ref={end} className="mt-8 flex flex-col items-center rounded-[26px] p-6 text-center ring-1" style={{ background: `${accent}0d`, borderColor: `${accent}33` }}>
              {read ? <PartyPopper className="size-8" style={{ color: accent }} /> : <Heart className="size-8 text-rose" />}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => toggleLike(g.id)}
                className={cn('mt-4 flex h-11 items-center gap-2 rounded-full px-5 text-[14px] font-bold', isLiked ? 'bg-rose text-white' : 'bg-white text-rose shadow-soft ring-1 ring-rose/20')}
              >
                <Heart className={cn('size-4', isLiked && 'fill-white')} /> {f.compact(g.likes + (isLiked ? 1 : 0))}
              </motion.button>
            </div>
          </>
        )}
      </div>
    </HeroPage>
  );
}
