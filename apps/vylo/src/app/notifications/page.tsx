'use client';

import { motion } from 'framer-motion';
import { Bell, CalendarClock, Compass, Heart, MessageCircle, Newspaper, Sparkles, UserPlus } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Photo } from '@/components/photo';
import { CompassMark } from '@/components/journey';
import { Avatar, Empty, TopBar } from '@/components/ui';
import { useI18n } from '@/i18n/use';
import { useNotifications, type Notice } from '@/lib/notifications';
import { cn } from '@/lib/utils';
import { useApp } from '@/store/app';

const icons: Record<Notice['kind'], { icon: typeof Bell; cls: string }> = {
  meetup: { icon: CalendarClock, cls: 'bg-pink text-white' },
  chat: { icon: MessageCircle, cls: 'bg-brand text-white' },
  guide: { icon: Newspaper, cls: 'bg-sky text-white' },
  like: { icon: Heart, cls: 'bg-rose text-white' },
  pick: { icon: Sparkles, cls: 'bg-amber text-white' },
  streak: { icon: Compass, cls: 'bg-[#0d9488] text-white' },
  follow: { icon: UserPlus, cls: 'bg-mint text-white' },
};

export default function NotificationsPage() {
  const { list } = useNotifications();
  const seenAt = useApp((s) => s.notificationsSeenAt);
  const markSeen = useApp((s) => s.markNotificationsSeen);
  const [baseline] = useState(seenAt);
  const { t, f } = useI18n();

  useEffect(() => {
    markSeen();
  }, [markSeen]);

  return (
    <div className="scroll-area absolute inset-0 bg-canvas pb-16">
      <TopBar title={t('notifications.title')} />
      <div className="grid gap-2 px-5">
        {list.map((n, i) => {
          const meta = icons[n.kind];
          const fresh = n.at > baseline;
          return (
            <motion.div key={n.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }}>
              <Link href={n.href} className={cn('press flex items-center gap-3 rounded-[22px] p-3', fresh ? 'bg-white shadow-card' : 'bg-white/60')}>
                <div className="relative shrink-0">
                  {n.userId ? <Avatar userId={n.userId} size={46} /> : n.image ? <Photo id={n.image} alt="" width={120} className="size-[46px]" rounded="rounded-2xl" /> : <div className="grid size-[46px] place-items-center rounded-2xl bg-[#f0fdfa]">
                      <CompassMark size={34} />
                    </div>}
                  <span className={cn('absolute -bottom-1 -right-1 grid size-5 place-items-center rounded-full ring-2 ring-white', meta.cls)}>
                    <meta.icon className="size-3" strokeWidth={2.6} />
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[14px] font-semibold">{n.title}</p>
                  <p className="line-clamp-2 text-[13px] leading-snug text-muted">{n.text}</p>
                </div>
                <div className="flex shrink-0 flex-col items-end gap-1.5">
                  <span className="text-[11px] text-faint">{f.agoMs(Date.now() - n.at)}</span>
                  {fresh && <span className="size-2 rounded-full bg-brand" />}
                </div>
              </Link>
            </motion.div>
          );
        })}
        {list.length === 0 && <Empty icon={<Bell className="size-7" />} title={t('notifications.emptyTitle')} text={t('notifications.emptyText')} />}
      </div>
    </div>
  );
}
