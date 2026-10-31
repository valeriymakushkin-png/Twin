'use client';

import { useEffect, useState } from 'react';
import { overrides } from '@/data/catalog';
import { phraseLoaders } from '@/data/phrases';
import type { PhrasePack } from '@/data/phrases/types';
import { useCatalogVersion } from '@/i18n/use';

const cache = new Map<string, PhrasePack>();

/** The bundled pack for a language (loaded on demand), or null while loading / when there is none. */
export function usePack(lang: string): { pack: PhrasePack | null; missing: boolean } {
  const [pack, setPack] = useState<PhrasePack | null>(() => cache.get(lang) ?? null);
  const loader = phraseLoaders[lang];
  useEffect(() => {
    const hit = cache.get(lang);
    if (hit) return setPack(hit);
    setPack(null);
    if (!loader) return;
    let live = true;
    void loader().then((m) => {
      cache.set(lang, m.default);
      if (live) setPack(m.default);
    });
    return () => {
      live = false;
    };
  }, [lang, loader]);
  return { pack, missing: !loader };
}

/** The pack with the team's corrections from the admin panel applied. */
export function useEditedPack(lang: string) {
  const { pack, missing } = usePack(lang);
  const version = useCatalogVersion();
  if (!pack) return { pack: null, missing };
  void version;
  const edits = overrides().settings.phrases?.[lang];
  if (!edits) return { pack, missing };
  const text = { ...pack.text };
  const roman = pack.roman ? { ...pack.roman } : undefined;
  for (const [id, e] of Object.entries(edits)) {
    if (e.text) text[id as keyof typeof text] = e.text;
    if (e.roman && roman) roman[id as keyof typeof roman] = e.roman;
  }
  return { pack: { ...pack, text, roman }, missing };
}

/** Speak the text with the device's voice for the language; false when the device has none. */
export function speak(text: string, tag: string): boolean {
  if (typeof speechSynthesis === 'undefined') return false;
  const base = tag.slice(0, 2).toLowerCase();
  const voices = speechSynthesis.getVoices();
  const voice = voices.find((v) => v.lang.replace('_', '-').toLowerCase() === tag.toLowerCase()) ?? voices.find((v) => v.lang.toLowerCase().startsWith(base));
  // Some browsers load voices lazily and report none the first time; trust the language tag then.
  if (!voice && voices.length > 0) return false;
  const u = new SpeechSynthesisUtterance(text);
  u.lang = tag;
  if (voice) u.voice = voice;
  u.rate = 0.9;
  speechSynthesis.cancel();
  speechSynthesis.speak(u);
  return true;
}
