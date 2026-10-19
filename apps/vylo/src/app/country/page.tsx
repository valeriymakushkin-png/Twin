'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { CountryScreen } from '@/components/screens/country-screen';

/** Pages for catalogue entries added in the admin panel after the build (no static page exists for them). */
function Inner() {
  const code = useSearchParams().get('code') ?? '';
  return <CountryScreen code={code.toUpperCase()} />;
}

export default function Page() {
  return (
    <Suspense>
      <Inner />
    </Suspense>
  );
}
