import { UserScreen } from '@/components/screens/user-screen';
import { users } from '@/data/social';

export const dynamicParams = false;

export function generateStaticParams() {
  return users.map((u) => ({ id: u.id }));
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <UserScreen id={id} />;
}
