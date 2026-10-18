'use client';

import { motion } from 'framer-motion';
import { BadgeCheck, Bell, ChevronRight, MapPin, PenLine, RotateCcw, Stamp } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense, useState } from 'react';
import { AchievementBadge } from '@/components/achievement-badge';
import { ReviewCard } from '@/components/cards';
import { Flame } from '@/components/celebrations';
import { QuestList } from '@/components/daily';
import { Sheet } from '@/components/sheet';
import { Avatar, Button, Empty, ProgressBar, UnderlineTabs } from '@/components/ui';
import { users } from '@/data/social';
import { achievements, levelFor } from '@/lib/gamification';
import { countryName, flag, WORLD_COUNTRIES } from '@/lib/countries';
import { cn, todayKey } from '@/lib/utils';
import { progressOf, useApp } from '@/store/app';

type Tab = 'quests' | 'achievements' | 'reviews';

function LevelRing({ progress, size = 112, children }: { progress: number; size?: number; children: React.ReactNode }) {
  const r = size / 2 - 5;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="absolute inset-0 -rotate-90">
        <defs>
          <linearGradient id="lvl-ring" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#8b5cf6" />
            <stop offset="1" stopColor="#6366f1" />
          </linearGradient>
        </defs>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#e0e7ff" strokeWidth="5" />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="url(#lvl-ring)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          animate={{ strokeDashoffset: c * (1 - progress) }}
          transition={{ type: 'spring', stiffness: 60, damping: 18 }}
        />
      </svg>
      <div className="absolute inset-[9px]">{children}</div>
    </div>
  );
}

function StreakWeek() {
  const streak = useApp((s) => s.streak);
  const today = new Date();
  const days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(today);
    d.setDate(today.getDate() - (6 - i));
    return d;
  });
  const activeSince = new Date(today);
  activeSince.setDate(today.getDate() - (streak.last === todayKey() ? streak.count - 1 : streak.count));
  return (
    <div className="rounded-[26px] bg-gradient-to-br from-[#fff7ed] to-white p-4 shadow-soft ring-1 ring-amber/15">
      <div className="flex items-center gap-3">
        <Flame size={48} />
        <div className="flex-1">
          <p className="text-[22px] font-black leading-none tracking-[-0.03em]">{streak.count} дн. подряд</p>
          <p className="mt-1 text-[12px] text-muted">Рекорд: {streak.best} · заходите каждый день за бонусом XP</p>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-7 gap-1.5">
        {days.map((d) => {
          const on = d >= new Date(activeSince.toDateString()) && d <= today && streak.count > 0;
          return (
            <div key={d.toISOString()} className="flex flex-col items-center gap-1">
              <span className="text-[10px] font-semibold uppercase text-faint">{d.toLocaleDateString('ru-RU', { weekday: 'short' }).slice(0, 2)}</span>
              <span className={cn('grid size-9 place-items-center rounded-full text-[12px] font-bold', on ? 'bg-gradient-to-b from-amber to-[#f97316] text-white shadow-[0_6px_14px_-6px_rgba(249,115,22,0.9)]' : 'bg-surface-2 text-faint')}>
                {d.getDate()}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const avatarPresets = ['1500648767791-00dcc994a43e', '1494790108377-be9c29b29330', '1506794778202-cad84cf45f1d', '1534528741775-53994a69daeb', '1539571696357-5a69c17a67c6', '1544005313-94ddf0286df2'];

function ProfileInner() {
  const params = useSearchParams();
  const initial = (params.get('tab') as Tab | null) ?? 'quests';
  const [tab, setTab] = useState<Tab>(['quests', 'achievements', 'reviews'].includes(initial) ? initial : 'quests');
  const [editing, setEditing] = useState(false);
  const state = useApp();
  const { profile, xp, visited, unlocked, myReviews, updateProfile, reset } = state;
  const lvl = levelFor(xp);
  const progress = progressOf(state);
  const [draft, setDraft] = useState(profile);

  return (
    <div className="scroll-area pb-tabbar absolute inset-0">
      <div className="pt-safe relative">
        <div className="absolute inset-x-0 top-0 h-[230px] bg-[radial-gradient(120%_100%_at_50%_0%,#e0e7ff_0%,#f6f7fb_70%)]" />
        <div className="relative flex justify-end gap-2 px-4 pt-2">
          <button aria-label="Редактировать профиль" onClick={() => (setDraft(profile), setEditing(true))} className="press grid size-10 place-items-center rounded-full bg-white shadow-soft">
            <PenLine className="size-[18px]" />
          </button>
          <Link href="/notifications/" aria-label="Уведомления" className="press grid size-10 place-items-center rounded-full bg-white shadow-soft">
            <Bell className="size-[18px]" />
          </Link>
        </div>
        <div className="relative flex flex-col items-center px-5">
          <LevelRing progress={lvl.progress}>
            <Avatar userId="me" size={94} />
          </LevelRing>
          <span className="-mt-3.5 rounded-full bg-gradient-to-r from-violet to-brand px-3 py-1 text-[11px] font-bold text-white shadow-brand ring-2 ring-white">
            Ур. {lvl.level} · {lvl.name}
          </span>
          <h1 className="mt-3 flex items-center gap-1.5 text-[26px] font-bold tracking-[-0.035em]">
            {profile.name}
            {lvl.level >= 3 && <BadgeCheck className="size-6 fill-brand text-white" />}
          </h1>
          <p className="text-[14px] text-muted">@{profile.handle}</p>
          <p className="mt-2 max-w-[300px] text-center text-[14px] leading-relaxed text-ink-2">{profile.bio}</p>
          <p className="mt-1.5 flex items-center gap-1 text-[13px] text-muted">
            <MapPin className="size-3.5" /> {profile.home}
          </p>
        </div>
      </div>

      <div className="mt-5 grid gap-4 px-5">
        <div className="rounded-[24px] bg-white p-4 shadow-soft">
          <div className="flex items-baseline justify-between">
            <p className="text-[15px] font-bold">{xp} XP</p>
            <p className="text-[12px] text-muted">{lvl.next ? `${lvl.toNext} XP до «${lvl.next.name}»` : 'Максимальный уровень'}</p>
          </div>
          <ProgressBar value={lvl.progress} className="mt-2.5 h-2.5" color="bg-gradient-to-r from-violet to-brand" />
          <div className="mt-4 grid grid-cols-4 text-center">
            {[
              [state.trips.length, 'Поездок'],
              [visited.length, 'Стран'],
              [state.beenHere.length, 'Мест'],
              [state.following.length, 'Читаю'],
            ].map(([v, l]) => (
              <div key={String(l)}>
                <p className="text-[20px] font-bold tracking-[-0.02em]">{v}</p>
                <p className="text-[11px] text-muted">{l}</p>
              </div>
            ))}
          </div>
        </div>

        <Link href="/passport/" className="press relative overflow-hidden rounded-[26px] bg-gradient-to-br from-[#1e1b4b] via-[#312e81] to-[#4338ca] p-5 text-white shadow-float">
          <div className="absolute -right-10 -top-10 size-44 rounded-full border-[18px] border-white/5" />
          <div className="absolute -bottom-16 right-16 size-36 rounded-full border-[14px] border-white/5" />
          <div className="relative flex items-center justify-between">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/60">Паспорт путешественника</p>
              <p className="mt-1 text-[30px] font-black tracking-[-0.03em]">{((visited.length / WORLD_COUNTRIES) * 100).toFixed(1)}%</p>
              <p className="text-[13px] text-white/75">мира открыто · {visited.length} из {WORLD_COUNTRIES}</p>
            </div>
            <Stamp className="size-12 text-white/30" />
          </div>
          <div className="relative mt-4 flex items-center gap-1">
            {visited.slice(0, 9).map((c) => (
              <span key={c} title={countryName(c)} className="grid size-8 place-items-center rounded-full bg-white/10 text-[17px]">
                {flag(c)}
              </span>
            ))}
            {visited.length > 9 && <span className="ml-1 text-[12px] font-semibold text-white/70">+{visited.length - 9}</span>}
            {visited.length === 0 && <span className="text-[13px] text-white/70">Отметьте страны, где вы были →</span>}
            <ChevronRight className="ml-auto size-5 text-white/60" />
          </div>
        </Link>
      </div>

      <UnderlineTabs
        layoutId="profile-tab"
        className="mt-6"
        value={tab}
        onChange={setTab}
        options={[
          { value: 'quests', label: 'Задания' },
          { value: 'achievements', label: `Награды · ${unlocked.length}/${achievements.length}` },
          { value: 'reviews', label: `Отзывы · ${myReviews.length}` },
        ]}
      />

      <motion.div key={tab} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="grid gap-4 px-5 pt-5">
        {tab === 'quests' && (
          <>
            <StreakWeek />
            <QuestList />
            <p className="text-center text-[12px] text-faint">Новые задания появляются каждый день в 00:00</p>
          </>
        )}
        {tab === 'achievements' && (
          <div className="grid grid-cols-3 gap-x-3 gap-y-5">
            {achievements.map((a) => {
              const on = unlocked.includes(a.id);
              const cur = Math.min(progress[a.metric], a.target);
              return (
                <div key={a.id} className="flex flex-col items-center text-center">
                  <AchievementBadge achievement={a} unlocked={on} size={68} />
                  <p className={cn('mt-2 text-[12px] font-bold leading-tight', !on && 'text-muted')}>{a.title}</p>
                  <p className="mt-0.5 text-[10px] leading-tight text-faint">{on ? a.description : `${cur}/${a.target} · ${a.description}`}</p>
                </div>
              );
            })}
          </div>
        )}
        {tab === 'reviews' &&
          (myReviews.length ? (
            myReviews.map((r) => <ReviewCard key={r.id} r={r} />)
          ) : (
            <Empty icon={<PenLine className="size-7" />} title="Пока нет отзывов" text="Делитесь впечатлениями о местах — каждый отзыв помогает другим и приносит 40 XP." />
          ))}
      </motion.div>

      <div className="mt-10 flex justify-center">
        <button
          onClick={() => {
            if (window.confirm('Сбросить все данные приложения на этом устройстве?')) {
              reset();
              window.location.href = '/';
            }
          }}
          className="flex items-center gap-1.5 text-[12px] font-medium text-faint"
        >
          <RotateCcw className="size-3.5" /> Сбросить данные
        </button>
      </div>

      <Sheet open={editing} onClose={() => setEditing(false)} title="Профиль">
        <div className="grid gap-3 px-5 pb-6">
          <div className="no-scrollbar -mx-5 flex gap-2.5 overflow-x-auto px-5 py-1">
            <button onClick={() => setDraft({ ...draft, avatar: '' })} className={cn('grid size-16 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand to-pink text-[22px] font-bold text-white', !draft.avatar && 'ring-[3px] ring-brand ring-offset-2')}>
              {draft.name.slice(0, 1)}
            </button>
            {avatarPresets.map((a) => (
              <button key={a} onClick={() => setDraft({ ...draft, avatar: a })} className={cn('size-16 shrink-0 overflow-hidden rounded-full', draft.avatar === a && 'ring-[3px] ring-brand ring-offset-2')}>
                <Avatar userId={users.find((u) => u.avatar === a)?.id ?? 'me'} size={64} />
              </button>
            ))}
          </div>
          {(
            [
              ['name', 'Имя'],
              ['handle', 'Никнейм'],
              ['home', 'Город'],
              ['bio', 'О себе'],
            ] as const
          ).map(([k, l]) => (
            <label key={k} className="rounded-2xl bg-surface-2/70 px-4 py-2.5">
              <span className="block text-[11px] font-semibold text-muted">{l}</span>
              <input value={draft[k]} onChange={(e) => setDraft({ ...draft, [k]: e.target.value })} className="w-full bg-transparent text-[15px] font-medium outline-none" />
            </label>
          ))}
          <Button
            size="lg"
            className="mt-1"
            onClick={() => {
              updateProfile({ ...draft, handle: draft.handle.replace(/^@/, '') });
              setEditing(false);
            }}
          >
            Сохранить
          </Button>
        </div>
      </Sheet>
    </div>
  );
}

export default function ProfilePage() {
  return (
    <Suspense>
      <ProfileInner />
    </Suspense>
  );
}
