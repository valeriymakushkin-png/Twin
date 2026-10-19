'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { PlaceScreen } from '@/components/screens/place-screen';

/** Pages for catalogue entries added in the admin panel after the build (no static page exists for them). */
function Inner() {
  const id = useSearchParams().get('id') ?? '';
  return <PlaceScreen id={id} />;
}

export default function Page() {
  return (
    <Suspense>
      <Inner />
    </Suspense>
  );
}
