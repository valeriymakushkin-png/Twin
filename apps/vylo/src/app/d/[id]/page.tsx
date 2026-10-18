import { DestinationScreen } from '@/components/screens/destination-screen';
import { destinations } from '@/data/destinations';

export const dynamicParams = false;

export function generateStaticParams() {
  return destinations.map((d) => ({ id: d.id }));
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <DestinationScreen id={id} />;
}
