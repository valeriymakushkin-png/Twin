'use client';

import { Trash2, X } from 'lucide-react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { PlaceRow } from '@/components/cards';
import { Photo } from '@/components/photo';
import { BackButton, Button, Empty, IconButton } from '@/components/ui';
import { resolveItem } from '@/data';
import { plural } from '@/lib/utils';
import { useApp } from '@/store/app';

function CollectionInner() {
  const id = useSearchParams().get('id') ?? '';
  const router = useRouter();
  const c = useApp((s) => s.collections.find((x) => x.id === id));
  const { toggleInCollection, deleteCollection } = useApp();
  if (!c) return <div className="grid h-full place-items-center text-muted">Коллекция не найдена</div>;
  const cover = c.itemIds[0] ? resolveItem(c.itemIds[0])?.image : undefined;

  return (
    <div className="scroll-area absolute inset-0 bg-canvas pb-16">
      <div className="relative h-[240px] overflow-hidden bg-gradient-to-br from-brand to-violet">
        {cover && <Photo id={cover} alt={c.name} width={900} className="absolute inset-0" />}
        <div className="photo-scrim-top absolute inset-0" />
        <div className="pt-safe absolute inset-x-0 top-0 flex h-14 items-center justify-between px-4">
          <BackButton tone="glass" />
          {!['wishlist'].includes(c.id) && (
            <IconButton
              label="Удалить коллекцию"
              tone="glass"
              onClick={() => {
                if (window.confirm(`Удалить «${c.name}»?`)) {
                  deleteCollection(c.id);
                  router.replace('/saved/');
                }
              }}
            >
              <Trash2 className="size-[18px]" />
            </IconButton>
          )}
        </div>
        <div className="absolute bottom-5 left-5 text-white">
          <p className="text-[40px] leading-none">{c.emoji}</p>
          <h1 className="mt-2 text-[28px] font-bold tracking-[-0.035em]">{c.name}</h1>
          <p className="text-[14px] text-white/85">
            {c.itemIds.length} {plural(c.itemIds.length, ['место', 'места', 'мест'])}
          </p>
        </div>
      </div>
      <div className="grid gap-2.5 px-5 pt-5">
        {c.itemIds.map((itemId) => (
          <PlaceRow
            key={itemId}
            id={itemId}
            right={
              <button
                aria-label="Убрать из коллекции"
                onClick={(e) => {
                  e.preventDefault();
                  toggleInCollection(c.id, itemId);
                }}
                className="grid size-9 place-items-center rounded-full bg-surface-2 text-muted"
              >
                <X className="size-4" />
              </button>
            }
          />
        ))}
        {c.itemIds.length === 0 && (
          <Empty
            icon={<span className="text-[28px]">{c.emoji}</span>}
            title="Коллекция пуста"
            text="Сохраняйте места с карты или из подборок и добавляйте их сюда."
            action={
              <Link href="/discover/">
                <Button>Найти места</Button>
              </Link>
            }
          />
        )}
      </div>
    </div>
  );
}

export default function CollectionPage() {
  return (
    <Suspense>
      <CollectionInner />
    </Suspense>
  );
}
