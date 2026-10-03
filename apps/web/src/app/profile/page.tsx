'use client';

import { Bell, ChevronRight, Copy, Crown, FileText, Gift, Languages, LifeBuoy, Share2, Sparkles, Star, Trash2 } from 'lucide-react';
import { REFERRAL_REWARDS, type Locale } from '@mascot/shared';
import Link from 'next/link';
import { toast } from 'sonner';
import { AppShell, TopBar } from '@/components/layout/app-shell';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, SectionTitle } from '@/components/ui/card';
import { Progress, Segmented, Skeleton, Stat } from '@/components/ui/misc';
import { api } from '@/lib/api';
import { env } from '@/lib/env';
import { qk, useInvalidate, useMutation, useProfile } from '@/lib/queries';
import { confirm, getWebApp, openTelegramLink, shareUrl } from '@/lib/telegram';
import { formatDate } from '@/lib/format';
import { clearStoredLocale, detectLocale, useLocaleStore, useT } from '@/lib/i18n';

export default function ProfilePage() {
  const { data: profile, isLoading } = useProfile();
  const invalidate = useInvalidate();
  const { t, f, locale } = useT();
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

  return (
    <AppShell>
      <TopBar title={t.profile.title} />
      <Card className="flex items-center gap-3.5 p-4">
        {profile.photoUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={profile.photoUrl} alt="" className="size-14 rounded-2xl object-cover" />
        ) : (
          <div className="grid size-14 place-items-center rounded-2xl bg-aurora text-xl font-semibold">{(profile.firstName ?? '?')[0]}</div>
        )}
        <div className="min-w-0 flex-1">
          <div className="truncate text-[16px] font-semibold">{[profile.firstName, profile.lastName].filter(Boolean).join(' ')}</div>
          <div className="truncate text-[12px] text-muted">{profile.username ? `@${profile.username}` : `ID ${profile.telegramId}`}</div>
        </div>
        {premium ? <Badge tone="premium" icon={<Crown className="size-3" />}>{t.common.premium}</Badge> : <Badge>{t.common.free}</Badge>}
      </Card>

      {!premium && (
        <Link href="/premium">
          <Card className="mt-3 flex items-center gap-3 border-amber-300/25 bg-gradient-to-r from-amber-300/10 to-transparent p-4">
            <Crown className="size-6 text-amber-300" />
            <div className="flex-1">
              <div className="text-[14px] font-semibold">{t.profile.upgrade}</div>
              <div className="text-[12px] text-muted">{t.profile.upgradeBody}</div>
            </div>
            <ChevronRight className="size-4 text-muted" />
          </Card>
        </Link>
      )}

      <section className="mt-6">
        <SectionTitle title={t.profile.usage} />
        <div className="grid grid-cols-2 gap-2.5">
          <Stat label={t.profile.credits} value={<span className="flex items-center gap-1.5"><Sparkles className="size-4 text-fuchsia-300" />{profile.credits}</span>} hint={t.profile.topUpHint} />
          <Stat label={t.profile.mascots} value={profile.usage.avatarsOwned} hint={profile.entitlements.maxAvatars ? f(t.profile.ofFree, { count: profile.entitlements.maxAvatars }) : t.profile.unlimited} />
        </div>
        {stickerCap !== null && (
          <Card className="mt-2.5 p-4">
            <div className="mb-2 flex justify-between text-[13px]">
              <span className="text-ink-2">{t.profile.freeStickers}</span>
              <span className="font-mono">{profile.usage.stickersUsed}/{stickerCap}</span>
            </div>
            <Progress value={(profile.usage.stickersUsed / stickerCap) * 100} />
          </Card>
        )}
        {premium && (
          <Card className="mt-2.5 p-4">
            <div className="mb-2 flex justify-between text-[13px]">
              <span className="text-ink-2">{t.profile.videoCredits}</span>
              <span className="font-mono">{profile.usage.videoUnitsUsedThisPeriod}/{profile.entitlements.videoUnitsPerMonth}</span>
            </div>
            <Progress value={(profile.usage.videoUnitsUsedThisPeriod / Math.max(1, profile.entitlements.videoUnitsPerMonth)) * 100} />
          </Card>
        )}
      </section>

      <section className="mt-6" id="invite">
        <SectionTitle title={t.profile.invite} />
        <Card className="p-4">
          <div className="flex items-start gap-3">
            <span className="grid size-10 place-items-center rounded-xl bg-emerald-400/15 text-emerald-300"><Gift className="size-5" /></span>
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
              <Badge tone={sub.cancelAtPeriodEnd ? 'neutral' : 'success'}>{f(sub.cancelAtPeriodEnd ? t.profile.ends : sub.isRecurring ? t.profile.renews : t.profile.until, { date: formatDate(sub.currentPeriodEnd) })}</Badge>
            </div>
            {sub.isRecurring && (
              sub.cancelAtPeriodEnd ? (
                <Button block variant="secondary" className="mt-3" loading={resume.isPending} onClick={() => resume.mutate()} icon={<Star className="size-4" />}>{t.profile.resume}</Button>
              ) : (
                <Button block variant="ghost" className="mt-3" loading={cancel.isPending} onClick={async () => (await confirm(t.profile.cancelConfirm)) && cancel.mutate()}>
                  {t.profile.cancel}
                </Button>
              )
            )}
          </Card>
        </section>
      )}

      <section className="mt-6">
        <SectionTitle title={t.profile.settings} />
        <Card className="divide-y divide-line">
          <div className="flex items-center gap-3 px-4 py-3">
            <Languages className="size-4 text-muted" />
            <span className="flex-1 text-[14px]">{t.profile.language}</span>
            <Segmented
              className="w-[210px]"
              value={profile.locale ?? 'auto'}
              onChange={(choice) => changeLanguage.mutate(choice)}
              options={[
                { value: 'auto', label: t.profile.languageAuto },
                { value: 'en', label: 'EN' },
                { value: 'ru', label: 'RU' },
              ]}
            />
          </div>
          <button className="flex w-full items-center gap-3 px-4 py-3.5 text-[14px]" onClick={() => toggleNotifications.mutate(!profile.notificationsEnabled)}>
            <Bell className="size-4 text-muted" />
            <span className="flex-1 text-left">{t.profile.notifications}</span>
            <span className={`h-6 w-10 rounded-full p-0.5 transition-colors ${profile.notificationsEnabled ? 'bg-violet-500' : 'bg-white/15'}`}>
              <span className={`block size-5 rounded-full bg-white transition-transform ${profile.notificationsEnabled ? 'translate-x-4' : ''}`} />
            </span>
          </button>
          <button className="flex w-full items-center gap-3 px-4 py-3.5 text-[14px]" onClick={() => openTelegramLink(`https://t.me/${env.botUsername}?start=paysupport`)}>
            <LifeBuoy className="size-4 text-muted" />
            <span className="flex-1 text-left">{t.profile.support}</span>
            <ChevronRight className="size-4 text-faint" />
          </button>
          <Link href="/legal" className="flex w-full items-center gap-3 px-4 py-3.5 text-[14px]">
            <FileText className="size-4 text-muted" />
            <span className="flex-1">{t.profile.legal}</span>
            <ChevronRight className="size-4 text-faint" />
          </Link>
        </Card>
        <Button
          block
          variant="danger"
          className="mt-4"
          icon={<Trash2 className="size-4" />}
          loading={remove.isPending}
          onClick={async () => (await confirm(t.profile.deleteConfirm)) && remove.mutate()}
        >
          {t.profile.deleteAccount}
        </Button>
      </section>
    </AppShell>
  );
}
