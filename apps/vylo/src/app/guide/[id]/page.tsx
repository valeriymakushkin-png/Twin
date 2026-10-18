import { GuideScreen } from '@/components/screens/guide-screen';
import { guides } from '@/data/social';

export const dynamicParams = false;

export function generateStaticParams() {
  return guides.map((g) => ({ id: g.id }));
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <GuideScreen id={id} />;
}
