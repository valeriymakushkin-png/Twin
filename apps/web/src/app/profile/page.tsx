'use client';

import { Bell, ChevronRight, Copy, Crown, FileText, Gift, LifeBuoy, Share2, Sparkles, Star, Trash2 } from 'lucide-react';
import Link from 'next/link';
import { toast } from 'sonner';
import { AppShell, TopBar } from '@/components/layout/app-shell';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, SectionTitle } from '@/components/ui/card';
import { Progress, Skeleton, Stat } from '@/components/ui/misc';
import { api } from '@/lib/api';
import { env } from '@/lib/env';
import { qk, useInvalidate, useMutation, useProfile } from '@/lib/queries';
import { confirm, openTelegramLink, shareUrl } from '@/lib/telegram';

export default function ProfilePage() {
  const { data: profile, isLoading } = useProfile();
  const invalidate = useInvalidate();

  const toggleNotifications = useMutation({
    mutationFn: (enabled: boolean) => api.profile.update({ notificationsEnabled: enabled }),
    onSuccess: () => invalidate(qk.profile),
  });
  const cancel = useMutation({ mutationFn: api.payments.cancel, onSuccess: () => { toast.success('Auto-renew turned off. Premium stays active until the period ends.'); void invalidate(qk.profile); } });
  const resume = useMutation({ mutationFn: api.payments.resume, onSuccess: () => { toast.success('Auto-renew is back on.'); void invalidate(qk.profile); } });
  const remove = useMutation({
    mutationFn: api.profile.delete,
    onSuccess: () => {
      toast.success('Your account and all data are being deleted.');
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
      <TopBar title="Profile" />
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
        {premium ? <Badge tone="premium" icon={<Crown className="size-3" />}>Premium</Badge> : <Badge>Free</Badge>}
      </Card>

      {!premium && (
        <Link href="/premium">
          <Card className="mt-3 flex items-center gap-3 border-amber-300/25 bg-gradient-to-r from-amber-300/10 to-transparent p-4">
            <Crown className="size-6 text-amber-300" />
            <div className="flex-1">
              <div className="text-[14px] font-semibold">Upgrade to Premium</div>
              <div className="text-[12px] text-muted">Unlimited everything + videos</div>
            </div>
            <ChevronRight className="size-4 text-muted" />
          </Card>
        </Link>
      )}

      <section className="mt-6">
        <SectionTitle title="Usage" />
        <div className="grid grid-cols-2 gap-2.5">
          <Stat label="Credits" value={<span className="flex items-center gap-1.5"><Sparkles className="size-4 text-fuchsia-300" />{profile.credits}</span>} hint="Top up on Premium page" />
          <Stat label="Mascots" value={profile.usage.avatarsOwned} hint={profile.entitlements.maxAvatars ? `of ${profile.entitlements.maxAvatars} free` : 'Unlimited'} />
        </div>
        {stickerCap !== null && (
          <Card className="mt-2.5 p-4">
            <div className="mb-2 flex justify-between text-[13px]">
              <span className="text-ink-2">Free stickers</span>
              <span className="font-mono">{profile.usage.stickersUsed}/{stickerCap}</span>
            </div>
            <Progress value={(profile.usage.stickersUsed / stickerCap) * 100} />
          </Card>
        )}
        {premium && (
          <Card className="mt-2.5 p-4">
            <div className="mb-2 flex justify-between text-[13px]">
              <span className="text-ink-2">Video credits this month</span>
              <span className="font-mono">{profile.usage.videoUnitsUsedThisPeriod}/{profile.entitlements.videoUnitsPerMonth}</span>
            </div>
            <Progress value={(profile.usage.videoUnitsUsedThisPeriod / Math.max(1, profile.entitlements.videoUnitsPerMonth)) * 100} />
          </Card>
        )}
      </section>

      <section className="mt-6" id="invite">
        <SectionTitle title="Invite friends" />
        <Card className="p-4">
          <div className="flex items-start gap-3">
            <span className="grid size-10 place-items-center rounded-xl bg-emerald-400/15 text-emerald-300"><Gift className="size-5" /></span>
            <div className="text-[13px] leading-relaxed text-ink-2">
              Friends get <b className="text-white">10 credits</b> on sign-up. You get <b className="text-white">20 credits</b> when they create their first mascot. {profile.referralsCount} invited so far.
            </div>
          </div>
          <div className="mt-3 flex gap-2">
            <Button variant="secondary" className="flex-1" icon={<Copy className="size-4" />} onClick={async () => { await navigator.clipboard.writeText(profile.referralLink); toast.success('Invite link copied'); }}>
              Copy link
            </Button>
            <Button className="flex-1" icon={<Share2 className="size-4" />} onClick={() => shareUrl(profile.referralLink, 'I turned myself into an AI mascot ✨ Make yours:')}>
              Share
            </Button>
          </div>
        </Card>
      </section>

      {sub && (
        <section className="mt-6">
          <SectionTitle title="Subscription" />
          <Card className="p-4">
            <div className="flex items-center justify-between text-[13px]">
              <span className="text-ink-2">{sub.isRecurring ? 'Premium monthly' : 'Premium pass'}</span>
              <Badge tone={sub.cancelAtPeriodEnd ? 'neutral' : 'success'}>{sub.cancelAtPeriodEnd ? 'Ends' : sub.isRecurring ? 'Renews' : 'Until'} {new Date(sub.currentPeriodEnd).toLocaleDateString()}</Badge>
            </div>
            {sub.isRecurring && (
              sub.cancelAtPeriodEnd ? (
                <Button block variant="secondary" className="mt-3" loading={resume.isPending} onClick={() => resume.mutate()} icon={<Star className="size-4" />}>Turn auto-renew on</Button>
              ) : (
                <Button block variant="ghost" className="mt-3" loading={cancel.isPending} onClick={async () => (await confirm('Turn off auto-renew? Premium stays active until the end of the period.')) && cancel.mutate()}>
                  Cancel auto-renew
                </Button>
              )
            )}
          </Card>
        </section>
      )}

      <section className="mt-6">
        <SectionTitle title="Settings" />
        <Card className="divide-y divide-line">
          <button className="flex w-full items-center gap-3 px-4 py-3.5 text-[14px]" onClick={() => toggleNotifications.mutate(!profile.notificationsEnabled)}>
            <Bell className="size-4 text-muted" />
            <span className="flex-1 text-left">Bot notifications</span>
            <span className={`h-6 w-10 rounded-full p-0.5 transition-colors ${profile.notificationsEnabled ? 'bg-violet-500' : 'bg-white/15'}`}>
              <span className={`block size-5 rounded-full bg-white transition-transform ${profile.notificationsEnabled ? 'translate-x-4' : ''}`} />
            </span>
          </button>
          <button className="flex w-full items-center gap-3 px-4 py-3.5 text-[14px]" onClick={() => openTelegramLink(`https://t.me/${env.botUsername}?start=paysupport`)}>
            <LifeBuoy className="size-4 text-muted" />
            <span className="flex-1 text-left">Support</span>
            <ChevronRight className="size-4 text-faint" />
          </button>
          <Link href="/legal" className="flex w-full items-center gap-3 px-4 py-3.5 text-[14px]">
            <FileText className="size-4 text-muted" />
            <span className="flex-1">Terms & privacy</span>
            <ChevronRight className="size-4 text-faint" />
          </Link>
        </Card>
        <Button
          block
          variant="danger"
          className="mt-4"
          icon={<Trash2 className="size-4" />}
          loading={remove.isPending}
          onClick={async () => (await confirm('Delete your account, mascots, photos and all creations? This cannot be undone.')) && remove.mutate()}
        >
          Delete account & data
        </Button>
      </section>
    </AppShell>
  );
}
