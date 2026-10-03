'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';
import { toast } from 'sonner';
import { UPLOAD_RULES, type PhotoPose, type StyleSlug } from '@mascot/shared';
import { AppShell, TopBar } from '@/components/layout/app-shell';
import { StylePicker } from '@/components/mascot/style-picker';
import { PhotoGrid } from '@/components/upload/photo-grid';
import { PhotoGuide } from '@/components/upload/photo-guide';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/misc';
import { Sheet } from '@/components/ui/sheet';
import { api, ApiRequestError, errorMessage, paywallMessage } from '@/lib/api';
import { prepareImage } from '@/lib/image';
import { useStyles } from '@/lib/queries';
import { haptic } from '@/lib/telegram';
import { useCreateFlow, type LocalPhoto } from '@/store/create-flow';
import { usePaywall } from '@/store/paywall';
import { useAuth } from '@/providers/auth-provider';
import { useT } from '@/lib/i18n';
import { styleName } from '@/lib/i18n/catalog';

const CONSENT_KEY = 'mascot.biometricConsent';
type Step = 'photos' | 'style' | 'confirm';
const STEPS: Step[] = ['photos', 'style', 'confirm'];

export default function CreatePage() {
  const router = useRouter();
  const { status } = useAuth();
  const flow = useCreateFlow();
  const { data: styles } = useStyles();
  const showPaywall = usePaywall((s) => s.show);
  const [step, setStep] = useState<Step>('photos');
  const [consentOpen, setConsentOpen] = useState(false);
  const [pendingFiles, setPendingFiles] = useState<File[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const tr = useT();
  const { t, f, p } = tr;

  const accepted = flow.photos.filter((p) => p.status === 'accepted');
  const uploading = flow.photos.some((p) => p.status === 'uploading');
  const covered = useMemo(() => new Set(accepted.map((p) => p.remote?.pose).filter(Boolean) as PhotoPose[]), [accepted]);
  const selectedStyle = styles?.find((s) => s.slug === flow.styleSlug);

  const hasConsent = () => {
    try {
      return localStorage.getItem(CONSENT_KEY) === '1';
    } catch {
      return false;
    }
  };

  async function uploadFiles(files: File[], consent: boolean) {
    const locals: LocalPhoto[] = files.map((f, i) => ({
      key: `${Date.now()}-${i}-${f.name}`,
      previewUrl: URL.createObjectURL(f),
      status: 'uploading',
    }));
    flow.addPhotos(locals);
    // Small batches give progressive feedback and keep each request well under body limits.
    for (let i = 0; i < files.length; i += 3) {
      const batch = files.slice(i, i + 3);
      const batchLocals = locals.slice(i, i + 3);
      try {
        // Name each file after its local key so results map back to the right tile.
        const prepared = await Promise.all(
          batch.map(async (f, j) => {
            const img = await prepareImage(f);
            return new File([img], `${batchLocals[j]!.key}.jpg`, { type: img.type });
          }),
        );
        const res = await api.upload(prepared, consent);
        const byName = new Map(batchLocals.map((l) => [`${l.key}.jpg`, l]));
        for (const photo of res.photos) {
          const local = photo.fileName ? byName.get(photo.fileName) : undefined;
          if (!local) continue;
          byName.delete(photo.fileName!);
          flow.updatePhoto(local.key, {
            remote: photo,
            status: photo.status === 'REJECTED' ? 'rejected' : 'accepted',
            reason: photo.rejectReason ?? undefined,
            code: photo.rejectCode ?? undefined,
          });
        }
        for (const r of res.rejected) {
          const local = byName.get(r.fileName);
          if (!local) continue;
          byName.delete(r.fileName);
          flow.updatePhoto(local.key, { status: 'rejected', reason: r.reason, code: r.code });
        }
        byName.forEach((l) => flow.updatePhoto(l.key, { status: 'error', reason: t.create.notProcessed }));
      } catch (error) {
        const message = errorMessage(error, t.create.uploadFailed);
        batchLocals.forEach((l) => flow.updatePhoto(l.key, { status: 'error', reason: message }));
      }
    }
    haptic.success();
  }

  function onAdd(files: File[]) {
    if (!hasConsent()) {
      setPendingFiles(files);
      setConsentOpen(true);
      return;
    }
    void uploadFiles(files, true);
  }

  async function generate() {
    if (!selectedStyle) return;
    if (selectedStyle.locked) {
      showPaywall('PREMIUM_STYLE', f(t.create.premiumStyle, { name: styleName(tr, selectedStyle.slug, selectedStyle.name) }));
      return;
    }
    setSubmitting(true);
    try {
      const res = await api.avatars.generate({
        photoIds: accepted.map((p) => p.remote!.id),
        styleSlug: flow.styleSlug,
        name: flow.name.trim() || undefined,
      });
      haptic.success();
      flow.reset();
      router.replace(`/processing/${res.generation.id}?avatar=${res.avatar.id}`);
    } catch (error) {
      if (error instanceof ApiRequestError && error.isPaywall) {
        showPaywall(error.body.paywall!.reason as never, paywallMessage(error));
      } else {
        toast.error(errorMessage(error, t.create.startFailed));
      }
    } finally {
      setSubmitting(false);
    }
  }

  const stepIndex = STEPS.indexOf(step);
  const canContinue = step === 'photos' ? accepted.length >= UPLOAD_RULES.minPhotos && !uploading : step === 'style' ? Boolean(selectedStyle) : true;

  return (
    <AppShell tabs={step === 'photos'}>
      <TopBar
        title={step === 'photos' ? t.create.titlePhotos : step === 'style' ? t.create.titleStyle : t.create.titleConfirm}
        subtitle={f(t.create.step, { n: stepIndex + 1 })}
        right={
          stepIndex > 0 ? (
            <Button size="sm" variant="ghost" icon={<ArrowLeft className="size-4" />} onClick={() => setStep(STEPS[stepIndex - 1]!)}>
              {t.common.back}
            </Button>
          ) : undefined
        }
      />
      <Progress value={((stepIndex + 1) / 3) * 100} className="mb-5" />

      {status === 'outside-telegram' && (
        <Card className="mb-4 p-4 text-[13px] text-muted">{t.auth.openInTelegram}</Card>
      )}

      <AnimatePresence mode="wait">
        <motion.div key={step} initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} transition={{ duration: 0.22 }}>
          {step === 'photos' && (
            <div className="space-y-5">
              <PhotoGuide covered={covered} />
              <div className="flex items-baseline justify-between px-1">
                <span className="text-[13px] text-ink-2">
                  <span className="font-mono text-lg font-semibold text-white">{accepted.length}</span> {f(t.create.minimum, { min: UPLOAD_RULES.minPhotos })}
                </span>
                <span className="text-[12px] text-muted">
                  {f(t.create.recommended, { from: UPLOAD_RULES.recommendedMin, to: UPLOAD_RULES.recommendedMax })}
                </span>
              </div>
              <PhotoGrid photos={flow.photos} onAdd={onAdd} onRemove={flow.removePhoto} />
              <Card className="flex items-start gap-3 p-3.5 text-[12px] leading-relaxed text-muted">
                <ShieldCheck className="mt-0.5 size-4 shrink-0 text-emerald-300" />
                {t.create.tips}
              </Card>
            </div>
          )}

          {step === 'style' && (
            <div className="space-y-4">
              <StylePicker
                styles={styles}
                value={flow.styleSlug}
                onChange={(s) => {
                  flow.setStyle(s.slug as StyleSlug);
                  if (s.locked) showPaywall('PREMIUM_STYLE', f(t.create.premiumStyle, { name: styleName(tr, s.slug, s.name) }));
                }}
              />
            </div>
          )}

          {step === 'confirm' && (
            <div className="space-y-4">
              <Card className="p-4">
                <label className="text-[12px] font-medium uppercase tracking-wider text-muted">{t.create.nameLabel}</label>
                <input
                  value={flow.name}
                  onChange={(e) => flow.setName(e.target.value.slice(0, 40))}
                  placeholder={t.create.namePlaceholder}
                  className="mt-2 h-12 w-full rounded-xl border border-line bg-white/[0.04] px-4 text-[15px] outline-none placeholder:text-faint focus:border-violet-400/60"
                />
              </Card>
              <Card className="divide-y divide-line">
                <Row label={t.create.summaryPhotos} value={f(t.create.summaryAccepted, { count: accepted.length })} />
                <Row label={t.create.summaryPoses} value={`${covered.size} / 5`} />
                <Row label={t.create.summaryStyle} value={styleName(tr, flow.styleSlug, selectedStyle?.name ?? flow.styleSlug)} />
                <Row label={t.create.summaryTime} value={t.create.summaryTimeValue} />
              </Card>
              <div className="grid grid-cols-4 gap-1.5">
                {accepted.slice(0, 8).map((p) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img key={p.key} src={p.previewUrl} alt="" className="aspect-square rounded-xl object-cover" />
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="sticky bottom-[88px] z-20 -mx-4 mt-6 bg-gradient-to-t from-canvas via-canvas/95 to-transparent px-4 pb-3 pt-8">
        {step === 'confirm' ? (
          <Button size="lg" block loading={submitting} onClick={generate} icon={<Sparkles className="size-[18px]" />}>
            {t.create.generate}
          </Button>
        ) : (
          <Button size="lg" block disabled={!canContinue} onClick={() => setStep(STEPS[stepIndex + 1]!)}>
            {step === 'photos' && accepted.length < UPLOAD_RULES.minPhotos
              ? p(t.create.addMore, UPLOAD_RULES.minPhotos - accepted.length)
              : t.common.continue}
            <ArrowRight className="size-4" />
          </Button>
        )}
      </div>

      <Sheet open={consentOpen} onClose={() => setConsentOpen(false)} title={t.consent.title}>
        <div className="space-y-3 text-[13px] leading-relaxed text-ink-2">
          <p>{t.consent.body}</p>
          <ul className="list-disc space-y-1 pl-5 text-muted">
            {t.consent.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
        <Button
          size="lg"
          block
          className="mt-5"
          onClick={() => {
            try {
              localStorage.setItem(CONSENT_KEY, '1');
            } catch {
              /* private mode */
            }
            setConsentOpen(false);
            void uploadFiles(pendingFiles, true);
          }}
        >
          {t.consent.agree}
        </Button>
        <a href="/legal" className="mt-3 block text-center text-[12px] text-muted underline underline-offset-2">
          {t.consent.privacy}
        </a>
      </Sheet>
    </AppShell>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between px-4 py-3 text-[14px]">
      <span className="text-muted">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}
