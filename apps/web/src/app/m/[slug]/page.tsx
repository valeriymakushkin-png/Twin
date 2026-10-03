import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Logo } from '@/components/brand/logo';
import { env, miniAppLink } from '@/lib/env';

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
  const title = `${mascot.name} — made with Mascot AI`;
  const image = mascot.cardUrl ?? mascot.imageUrl ?? undefined;
  return {
    title,
    description: 'Turn your selfies into a personal 3D mascot in Telegram.',
    openGraph: { title, images: image ? [{ url: image }] : undefined },
    twitter: { card: 'summary_large_image', title, images: image ? [image] : undefined },
  };
}

export default async function PublicMascotPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const mascot = await load(slug);
  if (!mascot) notFound();
  const cta = miniAppLink(`ref_${mascot.referralCode}__m_${slug}`);
  return (
    <main className="mx-auto flex min-h-dvh max-w-md flex-col px-5 py-6">
      <Logo />
      <div className="mt-8 overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-b from-violet-600/40 to-fuchsia-600/20 shadow-glow">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {mascot.imageUrl && <img src={mascot.imageUrl} alt={mascot.name} className="aspect-square w-full object-contain p-4" />}
      </div>
      <h1 className="mt-6 text-center text-[28px] font-semibold tracking-[-0.03em]">Meet {mascot.name}</h1>
      <p className="mt-1 text-center text-[14px] text-muted">{mascot.styleName} · created with Mascot AI</p>
      <a href={cta} className="mt-8 flex h-14 items-center justify-center rounded-2xl bg-aurora text-[15px] font-semibold text-white shadow-[0_10px_40px_-12px_rgba(192,38,211,0.65)]">
        ✨ Create my own mascot
      </a>
      <p className="mt-3 text-center text-[12px] text-faint">Opens in Telegram · first mascot free</p>
    </main>
  );
}
