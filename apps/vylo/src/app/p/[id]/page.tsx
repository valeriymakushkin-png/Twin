import { PlaceScreen } from '@/components/screens/place-screen';
import { places } from '@/data/catalog';

export const dynamicParams = false;

export function generateStaticParams() {
  return places.map((p) => ({ id: p.id }));
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <PlaceScreen id={id} />;
}
