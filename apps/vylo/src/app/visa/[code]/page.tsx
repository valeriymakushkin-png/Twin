import { VisaScreen } from '@/components/screens/visa-screen';
import { countries } from '@/data/catalog';

export const dynamicParams = false;

export function generateStaticParams() {
  return countries.map((c) => ({ code: c.code.toLowerCase() }));
}

export default async function Page({ params }: { params: Promise<{ code: string }> }) {
  const { code } = await params;
  return <VisaScreen code={code.toUpperCase()} />;
}
