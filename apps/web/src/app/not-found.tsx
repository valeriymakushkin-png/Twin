'use client';

import Link from 'next/link';
import { useT } from '@/lib/i18n';

export default function NotFound() {
  const { t } = useT();
  return (
    <main className="mx-auto flex min-h-dvh max-w-md flex-col items-center justify-center px-6 text-center">
      <div className="text-5xl">🫥</div>
      <h1 className="mt-4 text-xl font-semibold">{t.notFound.title}</h1>
      <p className="mt-1 text-[13px] text-muted">{t.notFound.body}</p>
      <Link href="/" className="mt-6 rounded-2xl bg-white/[0.07] px-5 py-3 text-[14px] font-semibold">
        {t.notFound.home}
      </Link>
    </main>
  );
}
