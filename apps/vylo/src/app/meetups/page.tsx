'use client';

import { Plus, Users } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { MeetupRow } from '@/components/cards';
import { Empty, PageTitle, Segmented, Button } from '@/components/ui';
import { meetupStart, useAllMeetups, useApp } from '@/store/app';

type Tab = 'upcoming' | 'popular' | 'mine';

export default function MeetupsPage() {
  const [tab, setTab] = useState<Tab>('upcoming');
  const joined = useApp((s) => s.joined);
  const all = useAllMeetups();
  const byTime = [...all].sort((a, b) => meetupStart(a).getTime() - meetupStart(b).getTime());
  const list =
    tab === 'upcoming'
      ? byTime
      : tab === 'popular'
        ? [...all].sort((a, b) => b.attendeeIds.length - a.attendeeIds.length)
        : byTime.filter((m) => joined.includes(m.id) || m.createdByMe);

  return (
    <div className="scroll-area pb-tabbar absolute inset-0">
      <PageTitle
        title="Встречи"
        subtitle="Знакомьтесь с путешественниками рядом"
        right={
          <Link href="/meetups/new/" aria-label="Создать встречу" className="press grid size-11 place-items-center rounded-full bg-brand text-white shadow-brand">
            <Plus className="size-5" strokeWidth={2.6} />
          </Link>
        }
      />
      <div className="px-5 pt-4">
        <Segmented
          layoutId="meetups-tab"
          value={tab}
          onChange={setTab}
          options={[
            { value: 'upcoming', label: 'Скоро' },
            { value: 'popular', label: 'Популярные' },
            { value: 'mine', label: `Мои · ${all.filter((m) => joined.includes(m.id) || m.createdByMe).length}` },
          ]}
        />
      </div>
      <div className="mt-4 grid gap-2.5 px-5">
        {list.map((m) => (
          <MeetupRow key={m.id} m={m} />
        ))}
        {list.length === 0 && (
          <Empty
            icon={<Users className="size-7" />}
            title="Пока нет встреч"
            text="Присоединяйтесь к встрече или создайте свою — путешествовать вместе веселее."
            action={
              <Link href="/meetups/new/">
                <Button>Создать встречу</Button>
              </Link>
            }
          />
        )}
      </div>
    </div>
  );
}
