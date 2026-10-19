import { VisaScreen } from '@/components/screens/visa-screen';
import { visaCountries } from '@/data/catalog';

export const dynamicParams = false;

export function generateStaticParams() {
  return visaCountries.map((v) => ({ code: v.code.toLowerCase() }));
}

export default async function Page({ params }: { params: Promise<{ code: string }> }) {
  const { code } = await params;
  return <VisaScreen code={code.toUpperCase()} />;
}
