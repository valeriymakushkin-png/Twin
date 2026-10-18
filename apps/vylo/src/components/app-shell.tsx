'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState, type ReactNode } from 'react';
import { Toaster } from 'sonner';
import { useApp } from '@/store/app';
import { Celebrations, RewardToasts } from './celebrations';
import { GlobalSheets } from './global-sheets';
import { Logo } from './logo';
import { normalizePath, TabBar } from './tab-bar';

// Screens whose top edge is a dark photo or the globe get light status-bar glyphs.
const DARK_TOP = [/^\/map/, /^\/d\//, /^\/p\//, /^\/guide\//, /^\/meetup$/, /^\/trip/, /^\/collection/, /^\/u\//];

function StatusBar() {
  const pathname = normalizePath(usePathname());
  const light = DARK_TOP.some((r) => r.test(pathname));
  const [time, setTime] = useState('9:41');
  useEffect(() => {
    const tick = () => setTime(new Date().toLocaleTimeString('ru-RU', { hour: 'numeric', minute: '2-digit' }));
    tick();
    const t = setInterval(tick, 20_000);
    return () => clearInterval(t);
  }, []);
  return (
    <div className={`device-only pointer-events-none absolute inset-x-0 top-0 z-[100] h-[50px] items-center justify-between px-8 pt-1 transition-colors ${light ? 'text-white' : 'text-ink'}`}>
      <span className="w-16 text-[16px] font-semibold">{time}</span>
      <span className="absolute left-1/2 top-[11px] h-[34px] w-[122px] -translate-x-1/2 rounded-full bg-black" />
      <span className="flex w-16 items-center justify-end gap-1.5">
        <svg width="18" height="12" viewBox="0 0 18 12" fill="currentColor">
          <rect x="0" y="8" width="3" height="4" rx="1" />
          <rect x="5" y="5.5" width="3" height="6.5" rx="1" />
          <rect x="10" y="3" width="3" height="9" rx="1" />
          <rect x="15" y="0" width="3" height="12" rx="1" />
        </svg>
        <svg width="16" height="12" viewBox="0 0 16 12" fill="currentColor">
          <path d="M8 2.6c2.3 0 4.4.9 6 2.4l1.2-1.3A10.4 10.4 0 0 0 8 .8C5.2.8 2.7 1.9.8 3.7L2 5c1.6-1.5 3.7-2.4 6-2.4Zm0 3.6c1.3 0 2.5.5 3.4 1.3l1.2-1.3A6.7 6.7 0 0 0 8 4.4c-1.8 0-3.4.7-4.6 1.8l1.2 1.3c.9-.8 2.1-1.3 3.4-1.3Zm0 3.6c.6 0 1.1.2 1.5.6L8 12l-1.5-1.6c.4-.4.9-.6 1.5-.6Z" />
        </svg>
        <svg width="26" height="12" viewBox="0 0 26 12" fill="none">
          <rect x="0.5" y="0.5" width="22" height="11" rx="3.5" stroke="currentColor" opacity="0.4" />
          <rect x="2" y="2" width="17" height="8" rx="2" fill="currentColor" />
          <rect x="24" y="4" width="1.5" height="4" rx="0.75" fill="currentColor" opacity="0.4" />
        </svg>
      </span>
    </div>
  );
}

function Splash() {
  return (
    <motion.div className="absolute inset-0 z-[95] grid place-items-center bg-white" exit={{ opacity: 0 }} transition={{ duration: 0.35 }}>
      <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: 'spring', stiffness: 260, damping: 20 }}>
        <Logo size={44} />
      </motion.div>
    </motion.div>
  );
}

function DevicePanel() {
  return (
    <aside className="device-only hidden max-w-[420px] flex-col">
      <Logo size={52} />
      <h1 className="mt-8 text-[40px] font-bold leading-[1.05] tracking-[-0.04em] text-ink">
        Исследуй. Сохраняй.
        <br />
        Встречайся. Делись.
      </h1>
      <p className="mt-4 text-[17px] leading-relaxed text-muted">
        Глобальная карта путешествий: реальные места от реальных людей, визы за секунду, встречи с путешественниками рядом и паспорт, который
        хочется заполнять.
      </p>
      <div className="mt-8 grid grid-cols-2 gap-3 text-[14px]">
        {[
          ['🌍', '3D-глобус с местами'],
          ['🛂', 'Визы для граждан РФ'],
          ['👋', 'Встречи и чаты'],
          ['🔥', 'Серии, уровни и награды'],
          ['🗺️', 'Планировщик поездок'],
          ['📔', 'Паспорт путешественника'],
        ].map(([e, t]) => (
          <div key={t} className="flex items-center gap-2.5 rounded-2xl bg-white/70 px-3.5 py-3 font-medium text-ink-2 shadow-soft ring-1 ring-black/[0.03]">
            <span className="text-[18px]">{e}</span>
            {t}
          </div>
        ))}
      </div>
      <p className="mt-8 text-[13px] text-faint">Откройте эту страницу на телефоне и добавьте на экран «Домой» — Vylo работает как приложение.</p>
    </aside>
  );
}

const ONBOARDING_FREE = ['/', '/onboarding'];

export function AppShell({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const onboarded = useApp((s) => s.onboarded);
  const checkIn = useApp((s) => s.checkIn);
  const pathname = normalizePath(usePathname());
  const router = useRouter();

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 450);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (!onboarded && !ONBOARDING_FREE.includes(pathname)) {
      // Remember a shared deep link so onboarding can hand the newcomer straight to it.
      try {
        sessionStorage.setItem('vylo-next', window.location.pathname + window.location.search);
      } catch {}
      router.replace('/');
    }
    if (onboarded) checkIn();
  }, [mounted, onboarded, pathname, router, checkIn]);

  return (
    <div className="flex min-h-dvh items-center justify-center gap-20 bg-canvas min-[900px]:bg-[radial-gradient(1200px_700px_at_80%_10%,#e0e7ff_0%,transparent_60%),radial-gradient(900px_600px_at_0%_100%,#dcfce7_0%,transparent_55%),#f6f7fb]">
      <DevicePanel />
      <div className="app-shell">
        <StatusBar />
        {mounted && children}
        {mounted && <TabBar />}
        {mounted && <GlobalSheets />}
        <RewardToasts />
        <Celebrations />
        <Toaster
          position="top-center"
          offset={60}
          toastOptions={{
            classNames: {
              toast: '!rounded-2xl !border-0 !shadow-float !font-sans',
              actionButton: '!bg-brand !rounded-full !font-semibold',
            },
          }}
        />
        <AnimatePresence>{!mounted && <Splash />}</AnimatePresence>
      </div>
    </div>
  );
}
