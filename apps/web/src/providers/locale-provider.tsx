'use client';

import { useEffect } from 'react';
import { isLocale } from '@mascot/shared';
import { detectLocale, useLocaleStore } from '@/lib/i18n';
import { useProfile } from '@/lib/queries';
import { getWebApp } from '@/lib/telegram';

/**
 * Resolves the UI language on the client: saved choice → account setting (server) →
 * Telegram client language → browser. SSR renders English; the switch happens before
 * the auth splash ends, so app screens never flash in the wrong language.
 */
export function LocaleProvider() {
  const setLocale = useLocaleStore((s) => s.setLocale);
  const { data: profile } = useProfile(false);

  useEffect(() => {
    setLocale(detectLocale(getWebApp()?.initDataUnsafe.user?.language_code), false);
  }, [setLocale]);

  // An explicit choice made on another device wins once the profile arrives.
  useEffect(() => {
    if (isLocale(profile?.locale) && profile.locale !== useLocaleStore.getState().locale) setLocale(profile.locale);
  }, [profile?.locale, setLocale]);

  return null;
}
