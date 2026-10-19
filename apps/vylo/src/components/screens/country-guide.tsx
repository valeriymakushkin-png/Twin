'use client';

import { motion } from 'framer-motion';
import { Clock, MapPin } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';
import { HeroPage } from '@/components/hero';
import { SpotStrip } from '@/components/screens/country-screen';
import { citiesIn, countryByCode, countryHref, destinationHref, placesInCountry } from '@/data/catalog';
import { useI18n } from '@/i18n/use';
import { flag } from '@/lib/countries';

/** The country guidebook as a long read: chapters, the cities to see and the best photo spots. */
export function CountryGuide({ code }: { code: string }) {
  const c = countryByCode(code);
  const { t, country, countryText, dest } = useI18n();
  const text = countryText(code);
  const name = country(code);

  useEffect(() => {
    if (text) document.title = `${text.guide.title} — Vylo`;
  }, [text]);

  if (!c || !text) return <div className="grid h-full place-items-center px-8 text-center text-muted">{t('country.noArticle')}</div>;
  const accent = c.theme.accent;
  const words = [text.description, ...text.guide.sections.map((s) => s.body)].join(' ').split(/\s+/).length;
  const spots = placesInCountry(code).filter((p) => p.spot);

  return (
    <HeroPage
      image={c.image}
      title={text.guide.title}
      theme={c.theme}
      heroHeight={360}
      overlay={
        <>
          <Link href={countryHref(code)} className="glass-dark inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold ring-1 ring-white/20">
            {flag(code)} {name}
          </Link>
          <h1 className="mt-2 text-[30px] font-bold leading-[1.08] tracking-[-0.035em]">{text.guide.title}</h1>
          <p className="mt-1.5 flex items-center gap-1.5 text-[13px] text-white/80">
            <Clock className="size-3.5" /> {t('common.readMins', { count: Math.max(2, Math.round(words / 180)) })}
          </p>
        </>
      }
    >
      <article className="px-5 pb-12 pt-7">
        <p className="text-[19px] font-semibold leading-snug tracking-[-0.01em]" style={{ color: accent }}>
          {text.tagline}
        </p>
        <p className="mt-3 text-[16px] leading-[1.7] text-ink-2">{text.description}</p>

        <nav className="mt-6 grid gap-1 rounded-[22px] bg-surface-2/70 p-2">
          {text.guide.sections.map((s, i) => (
            <a key={s.title} href={`#ch-${i}`} className="flex items-center gap-3 rounded-2xl px-3 py-2.5 text-[14px] font-semibold hover:bg-white">
              <span className="text-[12px] font-black" style={{ color: accent }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              {s.title}
            </a>
          ))}
        </nav>

        {text.guide.sections.map((s, i) => (
          <motion.section key={s.title} id={`ch-${i}`} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-9 scroll-mt-24">
            <p className="text-[12px] font-bold uppercase tracking-[0.14em]" style={{ color: accent }}>
              {t('country.chapter', { n: i + 1 })}
            </p>
            <h2 className="mt-1 text-[24px] font-bold leading-tight tracking-[-0.03em]">{s.title}</h2>
            <p className="mt-3 text-[16px] leading-[1.75] text-ink-2">{s.body}</p>
          </motion.section>
        ))}

        <section className="mt-10">
          <h2 className="text-[20px] font-bold tracking-[-0.02em]">{t('country.howToGet')}</h2>
          <p className="mt-2 text-[16px] leading-[1.7] text-ink-2">{text.howToGet}</p>
        </section>

        <section className="mt-10">
          <h2 className="text-[20px] font-bold tracking-[-0.02em]">{t('country.cities')}</h2>
          <div className="mt-3 grid gap-2">
            {citiesIn(code).map((d) => (
              <Link key={d.id} href={destinationHref(d.id)} className="press flex items-center gap-3 rounded-[20px] bg-white p-3 shadow-soft ring-1 ring-line-soft">
                <span className="grid size-10 shrink-0 place-items-center rounded-2xl" style={{ background: `${d.theme.accent}14`, color: d.theme.accent }}>
                  <MapPin className="size-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-[15px] font-semibold">{dest(d.id).name}</span>
                  <span className="block truncate text-[12px] text-muted">{dest(d.id).tagline}</span>
                </span>
              </Link>
            ))}
          </div>
        </section>
      </article>
      {spots.length > 0 && (
        <section className="-mt-4 pb-14">
          <h2 className="px-5 text-[20px] font-bold tracking-[-0.02em]">
            {t('country.insta')} · {t('country.hidden')}
          </h2>
          <SpotStrip items={spots} accent={accent} />
        </section>
      )}
    </HeroPage>
  );
}
