'use client';

import { motion } from 'framer-motion';
import { Bell, ChevronRight, FileText, Gift, MapPin, PenLine, RotateCcw, Settings, Shuffle, Sparkles, Stamp, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense, useState } from 'react';
import { toast } from 'sonner';
import { AvatarArt } from '@/components/avatar-art';
import { ReviewCard } from '@/components/cards';
import { QuestList } from '@/components/daily';
import { CompassMark, PatchBadge } from '@/components/journey';
import { usePlus } from '@/components/paywall';
import { Sheet } from '@/components/sheet';
import { Avatar, Button, Empty, PlusBadge, ProgressBar, UnderlineTabs } from '@/components/ui';
import type { MessageKey } from '@/i18n';
import { useI18n } from '@/i18n/use';
import { ACCESSORIES, BACKGROUNDS, HAIR_COLORS, HAIR_STYLES, PLUS_ACCESSORY_FROM, SHIRTS, SKINS, type AvatarConfig } from '@/lib/avatar';
import { flag, WORLD_COUNTRIES } from '@/lib/countries';
import { patches, statusFor } from '@/lib/gamification';
import { cn, todayKey } from '@/lib/utils';
import { progressOf, useApp, type Profile } from '@/store/app';

type Tab = 'route' | 'patches' | 'reviews';
const VACATION_DAYS = 2;

function StreakWeek() {
  const streak = useApp((s) => s.streak);
  const vacation = useApp((s) => s.vacation);
  const plus = useApp((s) => s.plus.active);
  const { t, f } = useI18n();
  const today = new Date();
  const days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(today);
    d.setDate(today.getDate() - (6 - i));
    return d;
  });
  const activeSince = new Date(today);
  activeSince.setDate(today.getDate() - (streak.last === todayKey() ? streak.count - 1 : streak.count));
  const month = todayKey().slice(0, 7);
  const vacationLeft = VACATION_DAYS - (vacation.month === month ? vacation.used : 0);

  return (
    <div className="rounded-[26px] bg-gradient-to-br from-[#f0fdfa] to-white p-4 shadow-soft ring-1 ring-[#14b8a6]/15">
      <div className="flex items-center gap-3">
        <CompassMark size={48} active={streak.count > 0} />
        <div className="min-w-0 flex-1">
          <p className="text-[21px] font-black leading-none tracking-[-0.03em]">{t('profile.onTheRoad', { count: streak.count })}</p>
          <p className="mt-1 text-[12px] text-muted">{t('profile.best', { count: streak.best })}</p>
        </div>
      </div>
      {/* A week drawn as a dotted route: each visited day is a stop on the line. */}
      <div className="relative mt-4 grid grid-cols-7 gap-1.5">
        <div className="absolute inset-x-5 top-[30px] border-t-2 border-dashed border-[#99f6e4]" />
        {days.map((d) => {
          const on = d >= new Date(activeSince.toDateString()) && d <= today && streak.count > 0;
          return (
            <div key={d.toISOString()} className="relative flex flex-col items-center gap-1">
              <span className="text-[10px] font-semibold uppercase text-faint">{f.weekdayShort(d).slice(0, 3)}</span>
              <span className={cn('grid size-9 place-items-center rounded-full text-[12px] font-bold', on ? 'bg-gradient-to-b from-[#2dd4bf] to-[#0f766e] text-white shadow-[0_6px_14px_-6px_rgba(15,118,110,0.9)]' : 'bg-surface-2 text-faint')}>
                {d.getDate()}
              </span>
            </div>
          );
        })}
      </div>
      {plus && <p className="mt-3 text-center text-[12px] font-semibold text-[#0f766e]">🏖️ {t('profile.vacation', { count: Math.max(0, vacationLeft) })}</p>}
    </div>
  );
}

function Swatches({ label, count, value, onChange, render, locked }: { label: string; count: number; value: number; onChange: (i: number) => void; render: (i: number) => React.ReactNode; locked?: (i: number) => boolean }) {
  return (
    <div>
      <p className="mb-2 text-[12px] font-semibold text-muted">{label}</p>
      <div className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 py-1">
        {Array.from({ length: count }, (_, i) => (
          <button key={i} onClick={() => onChange(i)} className={cn('relative grid size-11 shrink-0 place-items-center rounded-full ring-offset-2 transition-shadow', value === i && 'ring-[3px] ring-brand')}>
            {render(i)}
            {locked?.(i) && <PlusBadge className="absolute -bottom-1 left-1/2 -translate-x-1/2 scale-75" />}
          </button>
        ))}
      </div>
    </div>
  );
}

function AvatarEditor({ value, onChange }: { value: AvatarConfig; onChange: (a: AvatarConfig) => void }) {
  const { t } = useI18n();
  const plus = usePlus();
  const set = (k: keyof AvatarConfig) => (i: number) => onChange({ ...value, [k]: i });
  const shuffle = () => {
    const r = (n: number) => Math.floor(Math.random() * n);
    onChange({ skin: r(SKINS.length), hair: r(HAIR_STYLES), hairColor: r(HAIR_COLORS.length), bg: r(BACKGROUNDS.length), shirt: r(SHIRTS.length), accessory: r(plus.active ? ACCESSORIES.length : PLUS_ACCESSORY_FROM) });
  };
  return (
    <div className="grid gap-3">
      <div className="flex items-center justify-center gap-4">
        <AvatarArt config={value} size={104} />
        <Button size="sm" variant="soft" onClick={shuffle}>
          <Shuffle className="size-4" /> {t('profile.randomize')}
        </Button>
      </div>
      <Swatches label={t('profile.avatarSkin')} count={SKINS.length} value={value.skin} onChange={set('skin')} render={(i) => <span className="size-full rounded-full" style={{ background: SKINS[i] }} />} />
      <Swatches label={t('profile.avatarHair')} count={HAIR_STYLES} value={value.hair} onChange={set('hair')} render={(i) => <AvatarArt config={{ ...value, hair: i, accessory: 0 }} size={44} />} />
      <Swatches label={t('profile.avatarHairColor')} count={HAIR_COLORS.length} value={value.hairColor} onChange={set('hairColor')} render={(i) => <span className="size-full rounded-full" style={{ background: HAIR_COLORS[i] }} />} />
      <Swatches label={t('profile.avatarBg')} count={BACKGROUNDS.length} value={value.bg} onChange={set('bg')} render={(i) => <span className="size-full rounded-full" style={{ background: `linear-gradient(135deg, ${BACKGROUNDS[i]![0]}, ${BACKGROUNDS[i]![1]})` }} />} />
      <Swatches label={t('profile.avatarShirt')} count={SHIRTS.length} value={value.shirt} onChange={set('shirt')} render={(i) => <span className="size-full rounded-full" style={{ background: SHIRTS[i] }} />} />
      <Swatches
        label={t('profile.avatarAccessory')}
        count={ACCESSORIES.length}
        value={value.accessory}
        onChange={(i) => (i >= PLUS_ACCESSORY_FROM ? plus.gate(() => set('accessory')(i)) : set('accessory')(i))}
        render={(i) => <AvatarArt config={{ ...value, accessory: i }} size={44} />}
        locked={(i) => i >= PLUS_ACCESSORY_FROM && !plus.active}
      />
    </div>
  );
}

function ProfileInner() {
  const params = useSearchParams();
  const initial = params.get('tab') as Tab | null;
  const [tab, setTab] = useState<Tab>(initial && ['route', 'patches', 'reviews'].includes(initial) ? initial : 'route');
  const [editing, setEditing] = useState(false);
  const state = useApp();
  const { profile, miles, visited, unlocked, myReviews, updateProfile, reset, plus } = state;
  const { t, tk, f, country } = useI18n();
  const status = statusFor(miles);
  const progress = progressOf(state);
  const [draft, setDraft] = useState<Profile>(profile);
  const name = profile.name || t('common.you');

  const invite = async () => {
    const url = window.location.origin;
    const text = t('plus.inviteMessage', { url });
    try {
      if (navigator.share) await navigator.share({ title: 'Vylo', text });
      else {
        await navigator.clipboard.writeText(text);
        toast.success(t('plus.inviteCopied'));
      }
    } catch {
      /* share sheet dismissed */
    }
  };

  const links: { href: string; icon: typeof Settings; label: MessageKey; badge?: boolean }[] = [
    { href: '/wrapped/', icon: TrendingUp, label: 'profile.wrapped', badge: !plus.active },
    { href: '/settings/', icon: Settings, label: 'profile.settings' },
    { href: '/licenses/', icon: FileText, label: 'profile.licenses' },
  ];

  return (
    <div className="scroll-area pb-tabbar absolute inset-0">
      <div className="pt-safe relative">
        <div className="absolute inset-x-0 top-0 h-[230px]" style={{ background: `radial-gradient(120% 100% at 50% 0%, ${status.style.from} 0%, #f6f7fb 72%)` }} />
        <div className="relative flex justify-end gap-2 px-4 pt-2">
          <button aria-label={t('profile.edit')} onClick={() => (setDraft(profile), setEditing(true))} className="press grid size-10 place-items-center rounded-full bg-white shadow-soft">
            <PenLine className="size-[18px]" />
          </button>
          <Link href="/notifications/" aria-label={t('notifications.title')} className="press grid size-10 place-items-center rounded-full bg-white shadow-soft">
            <Bell className="size-[18px]" />
          </Link>
        </div>
        <div className="relative flex flex-col items-center px-5">
          <Avatar userId="me" size={104} className="ring-4 ring-white shadow-float" />
          <h1 className="mt-3 flex items-center gap-1.5 text-[26px] font-bold tracking-[-0.035em]">
            {name}
            {plus.active && <PlusBadge />}
          </h1>
          <p className="text-[14px] text-muted">@{profile.handle}</p>
          {profile.bio && <p className="mt-2 max-w-[300px] text-center text-[14px] leading-relaxed text-ink-2">{profile.bio}</p>}
          {profile.home && (
            <p className="mt-1.5 flex items-center gap-1 text-[13px] text-muted">
              <MapPin className="size-3.5" /> {profile.home}
            </p>
          )}
        </div>
      </div>

      <div className="mt-5 grid gap-4 px-5">
        {/* Status reads like a loyalty card: paper ticket at the start, black card at the top. */}
        <div className="relative overflow-hidden rounded-[24px] p-4 shadow-float" style={{ background: `linear-gradient(135deg, ${status.style.from}, ${status.style.to})`, color: status.style.ink }}>
          <div className="absolute -right-6 -top-10 size-32 rounded-full border-[14px] border-white/15" />
          <div className="relative flex items-start justify-between">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] opacity-70">{t('profile.status')}</p>
              <p className="text-[22px] font-black tracking-[-0.02em]">{tk(`gamify.status.${status.key}`)}</p>
            </div>
            <div className="text-right">
              <p className="text-[22px] font-black leading-none tracking-[-0.02em]">{f.number(miles)}</p>
              <p className="text-[11px] font-semibold opacity-70">{t('common.milesUnit')}</p>
            </div>
          </div>
          <ProgressBar value={status.progress} className="relative mt-3 h-2 bg-white/35" color="bg-current" />
          <p className="relative mt-2 text-[12px] font-semibold opacity-80">
            {status.nextKey ? t('profile.toNext', { count: status.toNext, name: tk(`gamify.status.${status.nextKey}`) }) : t('profile.maxStatus')}
          </p>
        </div>

        <div className="grid grid-cols-4 rounded-[22px] bg-white py-3.5 text-center shadow-soft">
          {(
            [
              [state.trips.length, 'profile.statTrips'],
              [visited.length, 'profile.statCountries'],
              [state.beenHere.length, 'profile.statPlaces'],
              [state.following.length, 'profile.statFollowing'],
            ] as const
          ).map(([v, l]) => (
            <div key={l} className="min-w-0">
              <p className="text-[20px] font-bold tracking-[-0.02em]">{f.number(v)}</p>
              <p className="truncate px-1 text-[11px] text-muted">{t(l)}</p>
            </div>
          ))}
        </div>

        <Link href="/passport/" className="press relative overflow-hidden rounded-[26px] bg-gradient-to-br from-[#1e1b4b] via-[#312e81] to-[#4338ca] p-5 text-white shadow-float">
          <div className="absolute -right-10 -top-10 size-44 rounded-full border-[18px] border-white/5" />
          <div className="absolute -bottom-16 right-16 size-36 rounded-full border-[14px] border-white/5" />
          <div className="relative flex items-center justify-between">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/60">{t('profile.passportTitle')}</p>
              <p className="mt-1 text-[30px] font-black tracking-[-0.03em]">{f.percent(visited.length / WORLD_COUNTRIES)}</p>
              <p className="text-[13px] text-white/75">{t('profile.worldOpened', { n: visited.length, total: WORLD_COUNTRIES })}</p>
            </div>
            <Stamp className="size-12 text-white/30" />
          </div>
          <div className="relative mt-4 flex items-center gap-1">
            {visited.slice(0, 9).map((c) => (
              <span key={c} title={country(c)} className="grid size-8 place-items-center rounded-full bg-white/10 text-[17px]">
                {flag(c)}
              </span>
            ))}
            {visited.length > 9 && <span className="ml-1 text-[12px] font-semibold text-white/70">+{visited.length - 9}</span>}
            {visited.length === 0 && <span className="text-[13px] text-white/70">{t('profile.markCountries')}</span>}
            <ChevronRight className="ml-auto size-5 text-white/60" />
          </div>
        </Link>

        {!plus.active && (
          <Link href="/plus/" className="press flex items-center gap-3 rounded-[22px] bg-gradient-to-r from-[#1c1917] to-[#44403c] p-4 text-white shadow-float">
            <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-[#fcd34d] to-[#f59e0b] text-[#451a03]">
              <Sparkles className="size-5" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-[15px] font-bold">{t('plus.name')}</p>
              <p className="truncate text-[12px] text-white/70">{t('plus.subtitle')}</p>
            </div>
            <ChevronRight className="size-5 shrink-0 text-white/60" />
          </Link>
        )}
      </div>

      <UnderlineTabs
        layoutId="profile-tab"
        className="mt-6"
        value={tab}
        onChange={setTab}
        options={[
          { value: 'route', label: t('profile.tabRoute') },
          { value: 'patches', label: t('profile.tabPatches', { n: unlocked.length, total: patches.length }) },
          { value: 'reviews', label: t('profile.tabReviews', { n: myReviews.length }) },
        ]}
      />

      <motion.div key={tab} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="grid gap-4 px-5 pt-5">
        {tab === 'route' && (
          <>
            <StreakWeek />
            <QuestList />
          </>
        )}
        {tab === 'patches' && (
          <div className="grid grid-cols-3 gap-x-3 gap-y-5">
            {patches.map((p) => {
              const on = unlocked.includes(p.id);
              const cur = Math.min(progress[p.metric], p.target);
              return (
                <div key={p.id} className="flex flex-col items-center text-center">
                  <PatchBadge patch={p} earned={on} size={72} />
                  <p className={cn('mt-2 text-[12px] font-bold leading-tight', !on && 'text-muted')}>{tk(`gamify.patch.${p.id}.title`)}</p>
                  <p className="mt-0.5 text-[10px] leading-tight text-faint">
                    {on ? '' : `${f.number(cur)}/${f.number(p.target)} · `}
                    {tk(`gamify.patch.${p.id}.text`)}
                  </p>
                </div>
              );
            })}
          </div>
        )}
        {tab === 'reviews' &&
          (myReviews.length ? myReviews.map((r) => <ReviewCard key={r.id} r={r} />) : <Empty icon={<PenLine className="size-7" />} title={t('profile.noReviewsTitle')} text={t('profile.noReviewsText')} />)}
      </motion.div>

      <div className="mt-8 grid gap-2 px-5">
        <button onClick={invite} className="press flex items-center gap-3 rounded-[22px] bg-gradient-to-r from-[#fdf2f8] to-[#eef2ff] p-4 text-left ring-1 ring-brand/10">
          <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-white text-pink shadow-soft">
            <Gift className="size-5" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-[15px] font-bold">{t('plus.inviteTitle')}</p>
            <p className="text-[12px] leading-snug text-muted">{t('plus.inviteText')}</p>
          </div>
        </button>
        <div className="overflow-hidden rounded-[22px] bg-white shadow-soft">
          {links.map((l, i) => (
            <Link key={l.href} href={l.href} className={cn('press flex items-center gap-3 px-4 py-3.5', i > 0 && 'border-t border-line-soft')}>
              <l.icon className="size-5 shrink-0 text-ink-2" />
              <span className="flex-1 text-[15px] font-medium">{t(l.label)}</span>
              {l.badge && <PlusBadge />}
              <ChevronRight className="size-4 shrink-0 text-faint" />
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <button
          onClick={() => {
            if (window.confirm(t('profile.resetConfirm'))) {
              reset();
              window.location.href = '/';
            }
          }}
          className="flex items-center gap-1.5 text-[12px] font-medium text-faint"
        >
          <RotateCcw className="size-3.5" /> {t('profile.reset')}
        </button>
      </div>

      <Sheet open={editing} onClose={() => setEditing(false)} title={t('profile.editTitle')}>
        <div className="grid gap-4 px-5 pb-6">
          <AvatarEditor value={draft.avatar} onChange={(avatar) => setDraft({ ...draft, avatar })} />
          {(
            [
              ['name', 'profile.fieldName'],
              ['handle', 'profile.fieldHandle'],
              ['home', 'profile.fieldHome'],
              ['bio', 'profile.fieldBio'],
            ] as const
          ).map(([k, l]) => (
            <label key={k} className="rounded-2xl bg-surface-2/70 px-4 py-2.5">
              <span className="block text-[11px] font-semibold text-muted">{t(l)}</span>
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
            {t('common.save')}
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
