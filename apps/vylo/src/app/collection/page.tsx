'use client';

import { Trash2, X } from 'lucide-react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { PlaceRow } from '@/components/cards';
import { Photo } from '@/components/photo';
import { BackButton, Button, Empty, IconButton } from '@/components/ui';
import { resolveItem } from '@/data';
import { useCollectionName } from '@/components/global-sheets';
import { useI18n } from '@/i18n/use';
import { useApp } from '@/store/app';

function CollectionInner() {
  const id = useSearchParams().get('id') ?? '';
  const router = useRouter();
  const c = useApp((s) => s.collections.find((x) => x.id === id));
  const { toggleInCollection, deleteCollection } = useApp();
  const { t } = useI18n();
  const collectionName = useCollectionName();
  if (!c) return <div className="grid h-full place-items-center text-muted">{t('collection.notFound')}</div>;
  const name = collectionName(c);
  const cover = c.itemIds[0] ? resolveItem(c.itemIds[0])?.image : undefined;

  return (
    <div className="scroll-area absolute inset-0 bg-canvas pb-16">
      <div className="relative h-[240px] overflow-hidden bg-gradient-to-br from-brand to-violet">
        {cover && <Photo id={cover} alt={name} width={900} className="absolute inset-0" />}
        <div className="photo-scrim-top absolute inset-0" />
        <div className="pt-safe absolute inset-x-0 top-0 flex h-14 items-center justify-between px-4">
          <BackButton tone="glass" />
          {c.nameKey !== 'wishlist' && (
            <IconButton
              label={t('collection.delete')}
              tone="glass"
              onClick={() => {
                if (window.confirm(t('collection.deleteConfirm', { name }))) {
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
          <h1 className="mt-2 text-[28px] font-bold tracking-[-0.035em]">{name}</h1>
          <p className="text-[14px] text-white/85">
            {t('common.places', { count: c.itemIds.length })}
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
                aria-label={t('collection.remove')}
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
            title={t('collection.emptyTitle')}
            text={t('collection.emptyText')}
            action={
              <Link href="/discover/">
                <Button>{t('collection.findPlaces')}</Button>
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
