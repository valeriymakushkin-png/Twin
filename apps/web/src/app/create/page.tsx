'use client';

import { ArrowRight, ShieldCheck, Upload } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useMemo, useRef, useState } from 'react';
import { toast } from 'sonner';
import { UPLOAD_RULES, type PhotoPose } from '@mascot/shared';
import { AppShell } from '@/components/layout/app-shell';
import { PhotoGrid, type PhotoGridHandle } from '@/components/upload/photo-grid';
import { PhotoGuide } from '@/components/upload/photo-guide';
import { Button } from '@/components/ui/button';
import { Card, ScreenTitle } from '@/components/ui/card';
import { Sheet } from '@/components/ui/sheet';
import { api, ApiRequestError, errorMessage, paywallMessage } from '@/lib/api';
import { prepareImage } from '@/lib/image';
import { useT } from '@/lib/i18n';
import { haptic } from '@/lib/telegram';
import { useCreateFlow, type LocalPhoto } from '@/store/create-flow';
import { usePaywall } from '@/store/paywall';
import { useAuth } from '@/providers/auth-provider';

const CONSENT_KEY = 'mascot.biometricConsent';

/** Renders a template with {min} highlighted in brand red. */
function Highlight({ template, vars, accent }: { template: string; vars: Record<string, string | number>; accent: string }) {
  const parts = template.split(`{${accent}}`);
  const fill = (s: string) => s.replace(/\{(\w+)\}/g, (m, k: string) => (k in vars ? String(vars[k]) : m));
  return (
    <>
      {fill(parts[0] ?? '')}
      <span className="font-bold text-brand">{vars[accent]}</span>
      {fill(parts.slice(1).join(''))}
    </>
  );
}

export default function CreatePage() {
  const router = useRouter();
  const { status } = useAuth();
  const flow = useCreateFlow();
  const showPaywall = usePaywall((s) => s.show);
  const grid = useRef<PhotoGridHandle>(null);
  const [consentOpen, setConsentOpen] = useState(false);
  const [pendingFiles, setPendingFiles] = useState<File[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const { t } = useT();

  const accepted = flow.photos.filter((p) => p.status === 'accepted');
  const uploading = flow.photos.some((p) => p.status === 'uploading');
  const covered = useMemo(() => new Set(accepted.map((p) => p.remote?.pose).filter(Boolean) as PhotoPose[]), [accepted]);
  const enough = accepted.length >= UPLOAD_RULES.minPhotos;

  const hasConsent = () => {
    try {
      return localStorage.getItem(CONSENT_KEY) === '1';
    } catch {
      return false;
    }
  };

  async function uploadFiles(files: File[], consent: boolean) {
    const locals: LocalPhoto[] = files.map((f, i) => ({ key: `${Date.now()}-${i}-${f.name}`, previewUrl: URL.createObjectURL(f), status: 'uploading' }));
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
    setSubmitting(true);
    try {
      const res = await api.avatars.generate({
        photoIds: accepted.map((p) => p.remote!.id),
        styleSlug: flow.styleSlug,
        name: flow.name.trim() || undefined,
      });
      haptic.success();
      flow.reset();
      router.replace(`/processing/${res.generation.id}?avatar=${res.avatar.id}&photos=${accepted.length}`);
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

  return (
    <AppShell>
      <ScreenTitle
        title={t.create.titlePhotos}
        subtitle={<Highlight template={t.create.subtitle} vars={{ min: UPLOAD_RULES.minPhotos, from: UPLOAD_RULES.recommendedMin, to: UPLOAD_RULES.recommendedMax }} accent="min" />}
        right={
          flow.photos.length > 0 ? (
            <span className="mt-1.5 shrink-0 rounded-full border border-brand/40 bg-brand/10 px-2.5 py-1 font-mono text-[12px] font-semibold text-white">
              {enough ? `${accepted.length} ✓` : `${accepted.length}/${UPLOAD_RULES.minPhotos}`}
            </span>
          ) : undefined
        }
      />

      {status === 'outside-telegram' && <Card className="mb-4 p-4 text-[13px] text-muted">{t.auth.openInTelegram}</Card>}

      <div className="space-y-5">
        <PhotoGrid ref={grid} photos={flow.photos} onAdd={onAdd} onRemove={flow.removePhoto} />
        <div>
          <div className="mb-2.5 text-[13px] font-bold text-ink-2">{t.create.examples}</div>
          <PhotoGuide covered={covered} />
        </div>
        <div className="flex items-start gap-2.5 px-1 text-[12px] leading-relaxed text-muted">
          <ShieldCheck className="mt-0.5 size-4 shrink-0 text-brand" />
          {t.create.tips}
        </div>
      </div>

      <div className="sticky bottom-[88px] z-20 -mx-4 mt-6 bg-gradient-to-t from-canvas via-canvas/95 to-transparent px-4 pb-3 pt-8">
        {enough ? (
          <Button size="lg" block loading={submitting} disabled={uploading} onClick={generate}>
            {t.create.createCta}
            <ArrowRight className="size-[18px]" />
          </Button>
        ) : (
          <Button size="lg" block disabled={uploading} onClick={() => grid.current?.pick()} icon={<Upload className="size-[18px]" />}>
            {t.create.uploadCta}
          </Button>
        )}
      </div>

      <Sheet open={consentOpen} onClose={() => setConsentOpen(false)} title={t.consent.title}>
        <div className="space-y-3 text-[13px] leading-relaxed text-ink-2">
          <p>{t.consent.body}</p>
          <ul className="space-y-1.5 text-muted">
            {t.consent.points.map((point) => (
              <li key={point} className="flex gap-2">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand" />
                {point}
              </li>
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
