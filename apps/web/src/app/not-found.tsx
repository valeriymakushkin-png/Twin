import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-md flex-col items-center justify-center px-6 text-center">
      <div className="text-5xl">🫥</div>
      <h1 className="mt-4 text-xl font-semibold">Nothing here</h1>
      <p className="mt-1 text-[13px] text-muted">This mascot may have been deleted or made private.</p>
      <Link href="/" className="mt-6 rounded-2xl bg-white/[0.07] px-5 py-3 text-[14px] font-semibold">
        Go home
      </Link>
    </main>
  );
}
