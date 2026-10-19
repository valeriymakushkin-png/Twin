import { CountryScreen } from '@/components/screens/country-screen';
import { countries } from '@/data/catalog';

export const dynamicParams = false;

export function generateStaticParams() {
  return countries.map((c) => ({ code: c.code.toLowerCase() }));
}

export default async function Page({ params }: { params: Promise<{ code: string }> }) {
  const { code } = await params;
  return <CountryScreen code={code.toUpperCase()} />;
}
