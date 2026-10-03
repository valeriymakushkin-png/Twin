'use client';

import { Bell, ChevronRight, Copy, Crown, FileText, FolderHeart, Gift, History, Languages, LifeBuoy, Settings, Share2, Sparkles, Star, Trash2 } from 'lucide-react';
import Link from 'next/link';
import { toast } from 'sonner';
import { REFERRAL_REWARDS, type Locale } from '@mascot/shared';
import { AppShell } from '@/components/layout/app-shell';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, ScreenTitle, SectionTitle } from '@/components/ui/card';
import { Progress, Segmented, Skeleton } from '@/components/ui/misc';
import { api } from '@/lib/api';
import { env } from '@/lib/env';
import { formatDate } from '@/lib/format';
import { clearStoredLocale, detectLocale, useLocaleStore, useT } from '@/lib/i18n';
import { qk, useAvatars, useInvalidate, useLibrary, useMutation, useProfile } from '@/lib/queries';
import { confirm, getWebApp, openTelegramLink, shareUrl } from '@/lib/telegram';

function MenuRow({ icon, label, href, onClick, right }: { icon: React.ReactNode; label: string; href?: string; onClick?: () => void; right?: React.ReactNode }) {
  const inner = (
    <>
      <span className="grid size-8 place-items-center rounded-xl bg-white/[0.05] text-ink-2">{icon}</span>
      <span className="flex-1 text-left text-[14px] font-medium">{label}</span>
      {right ?? <ChevronRight className="size-4 text-faint" />}
    </>
  );
  const cls = 'flex w-full items-center gap-3 px-4 py-3';
  return href ? (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  ) : (
    <button onClick={onClick} className={cls}>
      {inner}
    </button>
  );
}

export default function ProfilePage() {
  const { data: profile, isLoading } = useProfile();
  const { data: avatars } = useAvatars();
  const { data: library } = useLibrary();
  const invalidate = useInvalidate();
  const { t, f } = useT();
  const setLocale = useLocaleStore((s) => s.setLocale);

  const toggleNotifications = useMutation({
    mutationFn: (enabled: boolean) => api.profile.update({ notificationsEnabled: enabled }),
    onSuccess: () => invalidate(qk.profile),
  });
  const changeLanguage = useMutation({
    mutationFn: (choice: Locale | 'auto') => {
      if (choice === 'auto') {
        clearStoredLocale();
        setLocale(detectLocale(getWebApp()?.initDataUnsafe.user?.language_code), false);
      } else {
        setLocale(choice);
      }
      return api.profile.update({ locale: choice === 'auto' ? null : choice });
    },
    onSuccess: () => invalidate(qk.profile),
  });
  const cancel = useMutation({ mutationFn: api.payments.cancel, onSuccess: () => { toast.success(t.profile.canceled); void invalidate(qk.profile); } });
  const resume = useMutation({ mutationFn: api.payments.resume, onSuccess: () => { toast.success(t.profile.resumed); void invalidate(qk.profile); } });
  const remove = useMutation({
    mutationFn: api.profile.delete,
    onSuccess: () => {
      toast.success(t.profile.deleted);
      sessionStorage.clear();
      setTimeout(() => window.location.replace('/'), 1200);
    },
  });

  if (isLoading || !profile) {
    return (
      <AppShell>
        <Skeleton className="mt-6 h-28" />
        <Skeleton className="mt-4 h-40" />
      </AppShell>
    );
  }

  const premium = profile.plan === 'PREMIUM';
  const sub = profile.subscription;
  const stickerCap = profile.entitlements.stickerAllowance;
  const avatarImg = avatars?.find((a) => a.thumbnailUrl)?.thumbnailUrl ?? profile.photoUrl;
  const stickersTotal = library?.stickerPacks.reduce((n, p) => n + p.stickers.length, 0) ?? profile.usage.stickersUsed;
  const stats = [
    { value: profile.usage.avatarsOwned, label: t.profile.statMascots },
    { value: stickersTotal, label: t.profile.statStickers },
    { value: library?.videos.length ?? 0, label: t.profile.statVideos },
  ];

  return (
    <AppShell>
      <ScreenTitle title={t.profile.title} />
      <Card className="p-4">
        <div className="flex items-center gap-3.5">
          {avatarImg ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={avatarImg} alt="" className="size-14 rounded-full border-2 border-brand/60 bg-brand/10 object-cover" />
          ) : (
            <div className="grid size-14 place-items-center rounded-full bg-brand-grad text-xl font-bold">{(profile.firstName ?? '?')[0]}</div>
          )}
          <div className="min-w-0 flex-1">
            <div className="truncate text-[17px] font-bold">{[profile.firstName, profile.lastName].filter(Boolean).join(' ')}</div>
            <div className="mt-0.5 flex items-center gap-2">
              <span className="truncate text-[12px] text-muted">{profile.username ? `@${profile.username}` : `ID ${profile.telegramId}`}</span>
              {premium ? (
                <Badge tone="brand" icon={<Crown className="size-3" />}>
                  {t.common.premium}
                </Badge>
              ) : (
                <Badge>{t.common.free}</Badge>
              )}
            </div>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-3 divide-x divide-line rounded-2xl border border-line bg-black/20 py-3">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-[19px] font-extrabold tabular-nums">{s.value}</div>
              <div className="text-[11px] text-muted">{s.label}</div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="mt-3 divide-y divide-line">
        <MenuRow icon={<FolderHeart className="size-4" />} label={t.profile.myMascots} href="/library" />
        <MenuRow icon={<History className="size-4" />} label={t.profile.history} href="/library?tab=stickers" />
        <MenuRow icon={<Settings className="size-4" />} label={t.profile.menuSettings} href="#settings" />
        <MenuRow icon={<LifeBuoy className="size-4" />} label={t.profile.support} onClick={() => openTelegramLink(`https://t.me/${env.botUsername}?start=paysupport`)} />
      </Card>

      {!premium && (
        <Link href="/premium">
          <div className="relative mt-3 flex items-center gap-3 overflow-hidden rounded-[22px] border border-brand bg-[linear-gradient(120deg,rgba(255,43,61,0.22),rgba(255,43,61,0.04))] p-4 shadow-glow">
            <Crown className="size-6 text-brand" />
            <div className="flex-1">
              <div className="text-[14.5px] font-bold">{t.profile.upgrade}</div>
              <div className="text-[12px] text-ink-2">{t.profile.upgradeBody}</div>
            </div>
            <ChevronRight className="size-4 text-ink-2" />
          </div>
        </Link>
      )}

      <section className="mt-6">
        <SectionTitle title={t.profile.usage} />
        <div className="grid grid-cols-2 gap-2.5">
          <Card className="p-3.5">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-muted">{t.profile.credits}</div>
            <div className="mt-1 flex items-center gap-1.5 font-mono text-xl font-semibold">
              <Sparkles className="size-4 text-brand" />
              {profile.credits}
            </div>
            <div className="mt-0.5 text-[11px] text-faint">{t.profile.topUpHint}</div>
          </Card>
          <Card className="p-3.5">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-muted">{t.profile.mascots}</div>
            <div className="mt-1 font-mono text-xl font-semibold">{profile.usage.avatarsOwned}</div>
            <div className="mt-0.5 text-[11px] text-faint">{profile.entitlements.maxAvatars ? f(t.profile.ofFree, { count: profile.entitlements.maxAvatars }) : t.profile.unlimited}</div>
          </Card>
        </div>
        {stickerCap !== null && (
          <Card className="mt-2.5 p-4">
            <div className="mb-2 flex justify-between text-[13px]">
              <span className="text-ink-2">{t.profile.freeStickers}</span>
              <span className="font-mono">
                {profile.usage.stickersUsed}/{stickerCap}
              </span>
            </div>
            <Progress value={(profile.usage.stickersUsed / stickerCap) * 100} />
          </Card>
        )}
        {premium && (
          <Card className="mt-2.5 p-4">
            <div className="mb-2 flex justify-between text-[13px]">
              <span className="text-ink-2">{t.profile.videoCredits}</span>
              <span className="font-mono">
                {profile.usage.videoUnitsUsedThisPeriod}/{profile.entitlements.videoUnitsPerMonth}
              </span>
            </div>
            <Progress value={(profile.usage.videoUnitsUsedThisPeriod / Math.max(1, profile.entitlements.videoUnitsPerMonth)) * 100} />
          </Card>
        )}
      </section>

      <section className="mt-6" id="invite">
        <SectionTitle title={t.profile.invite} />
        <Card className="p-4">
          <div className="flex items-start gap-3">
            <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand/12 text-brand ring-1 ring-brand/25">
              <Gift className="size-5" />
            </span>
            <div className="text-[13px] leading-relaxed text-ink-2">
              {f(t.profile.inviteBody, { invitee: REFERRAL_REWARDS.inviteeCredits, referrer: REFERRAL_REWARDS.referrerCredits, count: profile.referralsCount })}
            </div>
          </div>
          <div className="mt-3 flex gap-2">
            <Button variant="secondary" className="flex-1" icon={<Copy className="size-4" />} onClick={async () => { await navigator.clipboard.writeText(profile.referralLink); toast.success(t.profile.linkCopied); }}>
              {t.profile.copyLink}
            </Button>
            <Button className="flex-1" icon={<Share2 className="size-4" />} onClick={() => shareUrl(profile.referralLink, t.profile.shareText)}>
              {t.common.share}
            </Button>
          </div>
        </Card>
      </section>

      {sub && (
        <section className="mt-6">
          <SectionTitle title={t.profile.subscription} />
          <Card className="p-4">
            <div className="flex items-center justify-between text-[13px]">
              <span className="text-ink-2">{sub.isRecurring ? t.profile.monthly : t.profile.pass}</span>
              <Badge tone={sub.cancelAtPeriodEnd ? 'neutral' : 'premium'}>
                {f(sub.cancelAtPeriodEnd ? t.profile.ends : sub.isRecurring ? t.profile.renews : t.profile.until, { date: formatDate(sub.currentPeriodEnd) })}
              </Badge>
            </div>
            {sub.isRecurring &&
              (sub.cancelAtPeriodEnd ? (
                <Button block variant="secondary" className="mt-3" loading={resume.isPending} onClick={() => resume.mutate()} icon={<Star className="size-4" />}>
                  {t.profile.resume}
                </Button>
              ) : (
                <Button block variant="ghost" className="mt-3" loading={cancel.isPending} onClick={async () => (await confirm(t.profile.cancelConfirm)) && cancel.mutate()}>
                  {t.profile.cancel}
                </Button>
              ))}
          </Card>
        </section>
      )}

      <section className="mt-6" id="settings">
        <SectionTitle title={t.profile.settings} />
        <Card className="divide-y divide-line">
          <div className="flex items-center gap-3 px-4 py-3">
            <span className="grid size-8 place-items-center rounded-xl bg-white/[0.05] text-ink-2">
              <Languages className="size-4" />
            </span>
            <span className="flex-1 text-[14px] font-medium">{t.profile.language}</span>
            <Segmented
              className="w-[190px]"
              value={profile.locale ?? 'auto'}
              onChange={(choice) => changeLanguage.mutate(choice)}
              options={[
                { value: 'auto', label: t.profile.languageAuto },
                { value: 'en', label: 'EN' },
                { value: 'ru', label: 'RU' },
              ]}
            />
          </div>
          <MenuRow
            icon={<Bell className="size-4" />}
            label={t.profile.notifications}
            onClick={() => toggleNotifications.mutate(!profile.notificationsEnabled)}
            right={
              <span className={`h-6 w-10 rounded-full p-0.5 transition-colors ${profile.notificationsEnabled ? 'bg-brand' : 'bg-white/15'}`}>
                <span className={`block size-5 rounded-full bg-white transition-transform ${profile.notificationsEnabled ? 'translate-x-4' : ''}`} />
              </span>
            }
          />
          <MenuRow icon={<FileText className="size-4" />} label={t.profile.legal} href="/legal" />
        </Card>
        <Button block variant="danger" className="mt-4" icon={<Trash2 className="size-4" />} loading={remove.isPending} onClick={async () => (await confirm(t.profile.deleteConfirm)) && remove.mutate()}>
          {t.profile.deleteAccount}
        </Button>
      </section>
    </AppShell>
  );
}
