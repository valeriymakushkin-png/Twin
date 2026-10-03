'use client';

import { Clapperboard, FolderHeart, Image as ImageIcon, Laugh, Smile } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { AppShell, TopBar } from '@/components/layout/app-shell';
import { MascotTile } from '@/components/mascot/mascot-tile';
import { Card } from '@/components/ui/card';
import { EmptyState, Segmented, Skeleton } from '@/components/ui/misc';
import { relativeTime } from '@/lib/format';
import { useAvatars, useLibrary } from '@/lib/queries';
import { downloadFile } from '@/lib/telegram';
import { useT } from '@/lib/i18n';

type Tab = 'mascots' | 'stickers' | 'memes' | 'pfp' | 'videos';

export default function LibraryPage() {
  const [tab, setTab] = useState<Tab>('mascots');
  const { data: avatars, isLoading: loadingAvatars } = useAvatars();
  const { data: library, isLoading } = useLibrary();
  const { t, f } = useT();

  return (
    <AppShell>
      <TopBar title={t.library.title} subtitle={t.library.subtitle} />
      <Segmented
        value={tab}
        onChange={setTab}
        options={[
          { value: 'mascots', label: <FolderHeart className="mx-auto size-4" /> },
          { value: 'stickers', label: <Smile className="mx-auto size-4" /> },
          { value: 'memes', label: <Laugh className="mx-auto size-4" /> },
          { value: 'pfp', label: <ImageIcon className="mx-auto size-4" /> },
          { value: 'videos', label: <Clapperboard className="mx-auto size-4" /> },
        ]}
      />
      <div className="mt-4">
        {(isLoading || loadingAvatars) && <Skeleton className="h-60" />}

        {tab === 'mascots' && avatars && (avatars.length ? (
          <div className="grid grid-cols-2 gap-3">{avatars.map((a) => <MascotTile key={a.id} avatar={a} />)}</div>
        ) : (
          <EmptyState icon={<FolderHeart className="size-6" />} title={t.library.noMascots} action={<Link href="/create" className="text-[13px] font-semibold text-brand">{t.library.createOne}</Link>} />
        ))}

        {tab === 'stickers' && library && (library.stickerPacks.length ? (
          <div className="space-y-2.5">
            {library.stickerPacks.map((p) => (
              <Link key={p.id} href={`/mascot/${p.avatarId}/stickers?pack=${p.id}`}>
                <Card className="mb-2.5 flex items-center gap-3 p-3">
                  <div className="checker grid size-14 shrink-0 place-items-center overflow-hidden rounded-xl">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    {p.stickers[0]?.imageUrl && <img src={p.stickers[0].imageUrl} alt="" className="size-full object-contain" />}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-[14px] font-semibold">{p.title}</div>
                    <div className="text-[12px] text-muted">{f(t.library.packMeta, { count: p.stickers.length, time: relativeTime(p.createdAt) })}</div>
                  </div>
                  <span className="text-[11px] font-semibold text-muted">{t.stickers.status[p.status]}</span>
                </Card>
              </Link>
            ))}
          </div>
        ) : <EmptyState icon={<Smile className="size-6" />} title={t.library.noPacks} />)}

        {tab === 'memes' && library && (library.memes.length ? (
          <div className="grid grid-cols-2 gap-2.5">
            {library.memes.filter((m) => m.imageUrl).map((m) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={m.id} src={m.imageUrl!} alt="" onClick={() => downloadFile(m.imageUrl!, `meme-${m.id}.jpg`)} className="w-full rounded-2xl border border-line" />
            ))}
          </div>
        ) : <EmptyState icon={<Laugh className="size-6" />} title={t.library.noMemes} />)}

        {tab === 'pfp' && library && (library.profilePictures.length ? (
          <div className="grid grid-cols-3 gap-2">
            {library.profilePictures.filter((p) => p.imageUrl).map((p) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={p.id} src={p.imageUrl!} alt="" onClick={() => downloadFile(p.imageUrl!, `pfp-${p.id}.png`)} className="aspect-square w-full rounded-full border border-line object-cover" />
            ))}
          </div>
        ) : <EmptyState icon={<ImageIcon className="size-6" />} title={t.library.noPfps} />)}

        {tab === 'videos' && library && (library.videos.length ? (
          <div className="grid grid-cols-2 gap-2.5">
            {library.videos.filter((v) => v.videoUrl).map((v) => (
              <video key={v.id} src={v.videoUrl!} poster={v.thumbnailUrl ?? undefined} playsInline muted loop autoPlay className="w-full rounded-2xl border border-line bg-black" />
            ))}
          </div>
        ) : <EmptyState icon={<Clapperboard className="size-6" />} title={t.library.noVideos} />)}
      </div>
    </AppShell>
  );
}
