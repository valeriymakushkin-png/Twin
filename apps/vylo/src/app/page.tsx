'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Check, ChevronLeft, MapPin, Star } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { Logo } from '@/components/logo';
import { Photo } from '@/components/photo';
import { Avatar, Button } from '@/components/ui';
import { countryName, flag, WORLD_COUNTRIES } from '@/lib/countries';
import { cn } from '@/lib/utils';
import { useApp } from '@/store/app';

const interests = ['🏝️ Пляжи', '🏔️ Горы', '🌆 Города', '🍜 Еда', '🏛️ Культура', '🧗 Приключения', '📸 Фото', '🌙 Ночная жизнь', '🧘 Ретриты', '🤿 Дайвинг'];
const styles = ['Соло', 'Пара', 'С друзьями', 'Номад', 'Бэкпекер', 'С семьёй'];
const popular = ['TR', 'EG', 'TH', 'AE', 'GE', 'AM', 'VN', 'ID', 'CN', 'IT', 'ES', 'FR', 'GR', 'CY', 'ME', 'RS', 'KZ', 'UZ', 'MV', 'LK', 'JP', 'PT', 'DE', 'CZ'];

export default function OnboardingPage() {
  const router = useRouter();
  const onboarded = useApp((s) => s.onboarded);
  const complete = useApp((s) => s.completeOnboarding);
  const [step, setStep] = useState(0);
  const [name, setName] = useState('');
  const [picked, setPicked] = useState<string[]>([]);
  const [style, setStyle] = useState('Соло');
  const [visited, setVisited] = useState<string[]>([]);

  const finishing = useRef(false);

  useEffect(() => {
    if (onboarded && !finishing.current) router.replace('/map/');
  }, [onboarded, router]);

  if (onboarded && !finishing.current) return null;

  const finish = () => {
    finishing.current = true;
    const clean = name.trim() || 'Путешественник';
    complete(
      {
        name: clean,
        handle: clean.toLowerCase().replace(/[^a-zа-я0-9]+/gi, '').slice(0, 16) || 'traveler',
        interests: [...picked.map((p) => p.split(' ').slice(1).join(' ')), style],
      },
      visited,
    );
    let next = '/map/';
    try {
      next = sessionStorage.getItem('vylo-next') ?? next;
      sessionStorage.removeItem('vylo-next');
    } catch {}
    router.replace(next);
  };

  return (
    <div className="absolute inset-0 overflow-hidden bg-white">
      <AnimatePresence mode="popLayout" initial={false}>
        {step === 0 && (
          <motion.section key="hero" className="absolute inset-0" exit={{ opacity: 0, x: -60 }} transition={{ duration: 0.35 }}>
            <Photo id="1570939274717-7eda259b50ed" alt="Воздушные шары над Каппадокией" width={1000} priority className="absolute inset-0" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#c7d2fe]/50 via-transparent to-white" />
            <div className="absolute inset-x-0 bottom-0 h-[62%] bg-gradient-to-t from-white via-white/95 to-transparent" />

            <div className="pt-safe relative flex justify-center pt-6">
              <motion.div initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
                <Logo size={34} />
              </motion.div>
            </div>

            <motion.div
              className="absolute left-5 top-[24%] flex items-center gap-2 rounded-2xl bg-white/90 p-2 pr-3.5 shadow-float backdrop-blur"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, type: 'spring' }}
            >
              <Avatar userId="maria" size={34} />
              <div>
                <p className="text-[12px] font-semibold">Мария присоединилась</p>
                <p className="text-[11px] text-muted">Закат на Улувату · 5 мест</p>
              </div>
            </motion.div>
            <motion.div
              className="absolute right-5 top-[36%] flex items-center gap-2 rounded-2xl bg-white/90 p-2 pr-3.5 shadow-float backdrop-blur animate-float"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.75, type: 'spring' }}
            >
              <span className="grid size-[34px] place-items-center rounded-xl bg-amber-50">
                <Star className="size-4 fill-star text-star" />
              </span>
              <div>
                <p className="text-[12px] font-semibold">4.9 · Каппадокия</p>
                <p className="text-[11px] text-muted">8.6k отзывов</p>
              </div>
            </motion.div>

            <div className="pb-safe absolute inset-x-0 bottom-0 px-6 pb-8">
              <motion.h1
                className="text-balance text-center text-[34px] font-bold leading-[1.08] tracking-[-0.04em]"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.15 }}
              >
                Исследуйте мир вместе
              </motion.h1>
              <motion.p className="mx-auto mt-3 max-w-[300px] text-center text-[15px] leading-relaxed text-muted" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.25 }}>
                Открывайте места, знакомьтесь с путешественниками и создавайте незабываемые истории.
              </motion.p>
              <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.35 }} className="mt-6 grid gap-3">
                <Button size="lg" onClick={() => setStep(1)}>
                  Начать <ArrowRight className="size-5" />
                </Button>
                <div className="mt-1 flex items-center justify-center gap-2 text-[13px] text-muted">
                  <div className="flex">
                    {['alex', 'sophie', 'kenji', 'anna'].map((u, i) => (
                      <Avatar key={u} userId={u} size={22} ring className={i ? '-ml-1.5' : ''} />
                    ))}
                  </div>
                  12 000+ путешественников уже с нами
                </div>
              </motion.div>
            </div>
          </motion.section>
        )}

        {step > 0 && (
          <motion.section
            key={`step-${step}`}
            className="pt-safe absolute inset-0 flex flex-col bg-white"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ type: 'spring', stiffness: 300, damping: 32 }}
          >
            <div className="flex h-14 items-center gap-3 px-4">
              <button aria-label="Назад" onClick={() => setStep(step - 1)} className="press grid size-10 place-items-center rounded-full bg-surface-2">
                <ChevronLeft className="size-5" />
              </button>
              <div className="flex flex-1 gap-1.5">
                {[1, 2].map((i) => (
                  <span key={i} className="h-1.5 flex-1 overflow-hidden rounded-full bg-surface-2">
                    <motion.span className="block h-full rounded-full bg-brand" initial={false} animate={{ width: step >= i ? '100%' : '0%' }} />
                  </span>
                ))}
              </div>
              <button onClick={finish} className="px-2 text-[14px] font-semibold text-muted">
                Пропустить
              </button>
            </div>

            {step === 1 && (
              <div className="scroll-area flex-1 px-6 pb-32">
                <h2 className="mt-4 text-[28px] font-bold leading-tight tracking-[-0.035em]">Давайте знакомиться</h2>
                <p className="mt-1.5 text-[15px] text-muted">Подберём места и людей под ваш стиль.</p>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ваше имя"
                  className="mt-6 h-14 w-full rounded-2xl bg-surface-2 px-5 text-[17px] font-medium outline-none transition focus:bg-white focus:ring-2 focus:ring-brand"
                />
                <p className="mb-3 mt-7 text-[13px] font-bold uppercase tracking-[0.08em] text-faint">Что вдохновляет</p>
                <div className="flex flex-wrap gap-2">
                  {interests.map((it) => {
                    const on = picked.includes(it);
                    return (
                      <motion.button
                        key={it}
                        whileTap={{ scale: 0.92 }}
                        onClick={() => setPicked(on ? picked.filter((x) => x !== it) : [...picked, it])}
                        className={cn('h-11 rounded-full px-4 text-[14px] font-semibold transition-all', on ? 'bg-brand text-white shadow-brand' : 'bg-surface-2 text-ink-2')}
                      >
                        {it}
                      </motion.button>
                    );
                  })}
                </div>
                <p className="mb-3 mt-7 text-[13px] font-bold uppercase tracking-[0.08em] text-faint">Как путешествуете</p>
                <div className="grid grid-cols-3 gap-2">
                  {styles.map((s) => (
                    <button
                      key={s}
                      onClick={() => setStyle(s)}
                      className={cn('press h-12 rounded-2xl text-[14px] font-semibold ring-1 transition-all', style === s ? 'bg-brand-50 text-brand-600 ring-2 ring-brand' : 'bg-white text-ink-2 ring-line')}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="scroll-area flex-1 px-6 pb-32">
                <h2 className="mt-4 text-[28px] font-bold leading-tight tracking-[-0.035em]">Где вы уже были?</h2>
                <p className="mt-1.5 text-[15px] text-muted">Соберём ваш паспорт путешественника — каждая страна это штамп и XP.</p>
                <div className="mt-5 flex items-center gap-4 rounded-3xl bg-gradient-to-br from-brand to-violet p-4 text-white shadow-brand">
                  <div className="grid size-14 place-items-center rounded-2xl bg-white/15 text-[24px] font-black">{visited.length}</div>
                  <div className="flex-1">
                    <p className="text-[15px] font-semibold">Мир исследован на {((visited.length / WORLD_COUNTRIES) * 100).toFixed(1)}%</p>
                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/20">
                      <motion.div className="h-full rounded-full bg-white" animate={{ width: `${Math.max(2, (visited.length / WORLD_COUNTRIES) * 100 * 4)}%` }} />
                    </div>
                  </div>
                </div>
                <div className="mt-5 grid grid-cols-3 gap-2">
                  {popular.map((code) => {
                    const on = visited.includes(code);
                    return (
                      <motion.button
                        key={code}
                        whileTap={{ scale: 0.92 }}
                        onClick={() => setVisited(on ? visited.filter((x) => x !== code) : [...visited, code])}
                        className={cn('relative flex flex-col items-center gap-1 rounded-2xl py-3 ring-1 transition-all', on ? 'bg-brand-50 ring-2 ring-brand' : 'bg-white ring-line')}
                      >
                        <span className="text-[28px] leading-none">{flag(code)}</span>
                        <span className="w-full truncate px-1 text-[12px] font-semibold text-ink-2">{countryName(code)}</span>
                        {on && (
                          <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute right-1.5 top-1.5 grid size-5 place-items-center rounded-full bg-brand text-white">
                            <Check className="size-3" strokeWidth={3.5} />
                          </motion.span>
                        )}
                      </motion.button>
                    );
                  })}
                </div>
              </div>
            )}

            <div className="pb-safe absolute inset-x-0 bottom-0 bg-gradient-to-t from-white via-white to-transparent px-6 pb-5 pt-8">
              <Button size="lg" className="w-full" onClick={() => (step === 1 ? setStep(2) : finish())}>
                {step === 1 ? 'Продолжить' : (
                  <>
                    <MapPin className="size-5" /> Открыть карту мира
                  </>
                )}
              </Button>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}
