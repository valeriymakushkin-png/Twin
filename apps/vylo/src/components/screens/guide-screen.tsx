'use client';

import { motion } from 'framer-motion';
import { BadgeCheck, BookmarkPlus, Clock, Heart, PartyPopper } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { toast } from 'sonner';
import { PlaceRow } from '@/components/cards';
import { HeroPage } from '@/components/hero';
import { Avatar, Button } from '@/components/ui';
import { guideById, userById } from '@/data/social';
import { cn, compact } from '@/lib/utils';
import { useApp } from '@/store/app';

export function GuideScreen({ id }: { id: string }) {
  const g = guideById(id)!;
  const author = userById(g.authorId)!;
  const { liked, toggleLike, following, toggleFollow, createCollection, markGuideRead, guidesRead } = useApp();
  const isLiked = liked.includes(g.id);
  const read = guidesRead.includes(g.id);
  const end = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = `${g.title} — Vylo`;
    const el = end.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => e?.isIntersecting && markGuideRead(g.id), { threshold: 0.6 });
    io.observe(el);
    return () => io.disconnect();
  }, [g.id, g.title, markGuideRead]);

  return (
    <HeroPage
      image={g.image}
      title={g.title}
      heroHeight={360}
      overlay={
        <>
          <span className="glass-dark inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold ring-1 ring-white/20">
            <Clock className="size-3" /> {g.readMins} мин чтения
          </span>
          <h1 className="mt-2 text-[30px] font-bold leading-[1.08] tracking-[-0.035em]">{g.title}</h1>
          <p className="mt-1 text-[15px] text-white/85">{g.subtitle}</p>
        </>
      }
    >
      <div className="px-5 pt-6">
        <div className="flex items-center gap-3">
          <Link href={`/u/${author.id}/`}>
            <Avatar userId={author.id} size={46} />
          </Link>
          <div className="min-w-0 flex-1">
            <p className="flex items-center gap-1 text-[15px] font-semibold">
              {author.name} {author.verified && <BadgeCheck className="size-4 fill-brand text-white" />}
            </p>
            <p className="text-[12px] text-muted">
              {author.countries.length} стран · {compact(author.followers)} подписчиков
            </p>
          </div>
          <Button size="sm" variant={following.includes(author.id) ? 'soft' : 'primary'} onClick={() => toggleFollow(author.id)}>
            {following.includes(author.id) ? 'Читаю' : 'Читать'}
          </Button>
        </div>

        <article className="mt-7 grid gap-6">
          {g.sections.map((s, i) => (
            <motion.section key={s.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }}>
              <div className="flex items-baseline gap-3">
                <span className="text-[13px] font-black text-brand">{String(i + 1).padStart(2, '0')}</span>
                <h2 className="text-[20px] font-bold leading-snug tracking-[-0.02em]">{s.title}</h2>
              </div>
              <p className="mt-2 text-[16px] leading-[1.7] text-ink-2">{s.body}</p>
            </motion.section>
          ))}
        </article>

        {g.placeIds.length > 0 && (
          <section className="mt-8">
            <div className="flex items-center justify-between">
              <h2 className="text-[19px] font-bold tracking-[-0.02em]">Места из гида</h2>
              <button
                onClick={() => {
                  const cid = createCollection(g.title, '📚');
                  g.placeIds.forEach((pid) => useApp.getState().toggleInCollection(cid, pid));
                  toast.success('Все места сохранены в новую коллекцию');
                }}
                className="flex items-center gap-1 text-[13px] font-semibold text-brand-600"
              >
                <BookmarkPlus className="size-4" /> Сохранить все
              </button>
            </div>
            <div className="mt-3 grid gap-2.5">
              {g.placeIds.map((pid) => (
                <PlaceRow key={pid} id={pid} />
              ))}
            </div>
          </section>
        )}

        <div ref={end} className="mt-8 flex flex-col items-center rounded-[26px] bg-gradient-to-br from-brand-50 to-white p-6 text-center ring-1 ring-brand-100">
          {read ? <PartyPopper className="size-8 text-brand" /> : <Heart className="size-8 text-rose" />}
          <p className="mt-2 text-[16px] font-bold">{read ? 'Гид прочитан!' : 'Понравился гид?'}</p>
          <p className="mt-1 text-[13px] text-muted">Поддержите автора — это мотивирует писать новые.</p>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => toggleLike(g.id)}
            className={cn('mt-4 flex h-11 items-center gap-2 rounded-full px-5 text-[14px] font-bold', isLiked ? 'bg-rose text-white' : 'bg-white text-rose shadow-soft ring-1 ring-rose/20')}
          >
            <Heart className={cn('size-4', isLiked && 'fill-white')} /> {compact(g.likes + (isLiked ? 1 : 0))}
          </motion.button>
        </div>
      </div>
    </HeroPage>
  );
}
