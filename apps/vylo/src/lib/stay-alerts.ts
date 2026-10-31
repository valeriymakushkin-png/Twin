'use client';

import { translate } from '@/i18n';
import { LOCALE_META, type Locale } from '@/i18n/config';
import { countryName } from './countries';
import { dueStays } from './notifications';
import { todayKey } from './utils';
import { useVisaPrefs } from '@/store/visa';

const KEY = 'vylo-stay-alerts-v1';

/** System notification for stays that are ending, at most once a day per stay, when the traveller has opted in. */
export function fireStayAlerts(locale: Locale) {
  try {
    const prefs = useVisaPrefs.getState();
    if (!prefs.remind || typeof Notification === 'undefined' || Notification.permission !== 'granted') return;
    const sent: Record<string, string> = JSON.parse(localStorage.getItem(KEY) ?? '{}');
    const today = todayKey();
    for (const d of dueStays(prefs, locale)) {
      if (sent[d.id] === today) continue;
      const name = countryName(d.country, locale);
      new Notification(translate(locale, d.left < 1 ? 'stay.noticeOver' : 'stay.noticeTitle', { country: name }), {
        body: d.left < 1 ? translate(locale, 'stay.noticeOverText') : translate(locale, 'stay.noticeText', { count: d.left, date: new Date(`${d.leaveBy}T00:00:00`).toLocaleDateString(LOCALE_META[locale].bcp47, { day: 'numeric', month: 'long' }) }),
        tag: `vylo-stay-${d.id}`,
      });
      sent[d.id] = today;
    }
    localStorage.setItem(KEY, JSON.stringify(sent));
  } catch {
    /* notifications are best effort */
  }
}
