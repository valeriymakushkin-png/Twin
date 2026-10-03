import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import { resolveLocale } from '@mascot/shared';
import { Logo } from '@/components/brand/logo';
import { env, miniAppLink } from '@/lib/env';
import { en } from '@/lib/i18n/en';
import { ru } from '@/lib/i18n/ru';

/** Server-side locale from Accept-Language (link previews and browsers outside Telegram). */
async function dict() {
  const lang = (await headers()).get('accept-language')?.split(',')[0];
  return resolveLocale(lang) === 'ru' ? ru : en;
}

const fill = (template: string, vars: Record<string, string>) => template.replace(/\{(\w+)\}/g, (m, k: string) => vars[k] ?? m);

interface PublicMascot {
  name: string;
  styleName: string;
  imageUrl: string | null;
  cardUrl: string | null;
  referralCode: string;
}

async function load(slug: string): Promise<PublicMascot | null> {
  const res = await fetch(`${env.apiUrl}/v1/public/avatars/${encodeURIComponent(slug)}`, { next: { revalidate: 300 } });
  return res.ok ? ((await res.json()) as PublicMascot) : null;
}

/** Public, SSR share page: rich link previews (OG) outside Telegram drive installs back into the bot. */
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const mascot = await load(slug);
  if (!mascot) return { title: 'Mascot AI' };
  const t = await dict();
  const title = fill(t.share_page.ogTitle, { name: mascot.name });
  const image = mascot.cardUrl ?? mascot.imageUrl ?? undefined;
  return {
    title,
    description: t.share_page.ogDescription,
    openGraph: { title, images: image ? [{ url: image }] : undefined },
    twitter: { card: 'summary_large_image', title, images: image ? [image] : undefined },
  };
}

export default async function PublicMascotPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const mascot = await load(slug);
  if (!mascot) notFound();
  const cta = miniAppLink(`ref_${mascot.referralCode}__m_${slug}`);
  const t = await dict();
  return (
    <main className="mx-auto flex min-h-dvh max-w-md flex-col px-5 py-6">
      <Logo />
      <div className="mt-8 overflow-hidden rounded-[32px] border border-white/10 bg-[radial-gradient(circle_at_50%_45%,rgba(255,43,61,0.45),rgba(14,14,16,1)_70%)] shadow-glow">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {mascot.imageUrl && <img src={mascot.imageUrl} alt={mascot.name} className="aspect-square w-full object-contain p-4" />}
      </div>
      <h1 className="mt-6 text-center text-[28px] font-semibold tracking-[-0.03em]">{fill(t.share_page.meet, { name: mascot.name })}</h1>
      <p className="mt-1 text-center text-[14px] text-muted">{fill(t.share_page.createdWith, { style: mascot.styleName })}</p>
      <a href={cta} className="mt-8 flex h-14 items-center justify-center rounded-2xl bg-brand-grad text-[15px] font-semibold text-white shadow-red">
        {t.share_page.cta}
      </a>
      <p className="mt-3 text-center text-[12px] text-faint">{t.share_page.footnote}</p>
    </main>
  );
}
