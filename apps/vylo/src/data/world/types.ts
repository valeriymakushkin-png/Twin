/**
 * Authoring format for the world catalogue: one file per country under `src/data/world/countries/`,
 * default-exporting a `CountryPack`. Facts and the texts in all six languages live side by side so a
 * country is written (and reviewed) in one place; `scripts/build-world.mts` validates every pack and
 * splits it into a facts module plus one lazily loaded text module per language.
 *
 * Rules the build enforces:
 *  - ids are lowercase slugs (`a-z`, digits, `-`); place ids are prefixed with their city id;
 *  - photos are Unsplash photo ids (the 11-character tail of unsplash.com/photos/…-<ID>);
 *  - every city has ≥ 4 places, including ≥ 1 `spot: 'insta'` and ≥ 1 `spot: 'hidden'`;
 *  - places lie within 150 km of their city;
 *  - every text exists in ru, en, es, de, fr, it; only `ru` may contain Cyrillic.
 */
import type { Locale } from '@/i18n/config';
import type { PlaceCategory, Price, TagKey, Theme, VisaInfo } from '../types';

export type L<T> = Record<Locale, T>;

export type Region = 'europe' | 'sea' | 'asia' | 'mideast' | 'caucasus' | 'africa' | 'americas' | 'oceania' | 'russia';

/** `insta` — where the best photos are taken; `hidden` — a lesser-known gem most visitors miss. */
export type Spot = 'insta' | 'hidden';

export interface CountryText {
  /** ≤ 70 characters */
  tagline: string;
  /** 2–3 sentences */
  description: string;
  /** How to get there from Russia (direct flights or usual hubs, flight time) and how to move around */
  howToGet: string;
  /** Practical tips: money and cards, transport, etiquette */
  tips: [string, string, string];
  /** A short guidebook: four sections of 50–90 words */
  guide: { title: string; sections: [GuideSection, GuideSection, GuideSection, GuideSection] };
}

export interface GuideSection {
  title: string;
  body: string;
}

export interface CityText {
  name: string;
  /** ≤ 70 characters */
  tagline: string;
  /** 2–3 sentences */
  description: string;
  tips: [string, string];
  /** From the airport / station into town, or how to reach it from the capital */
  gettingThere: string;
}

export interface PlaceText {
  name: string;
  /** 1–2 sentences */
  description: string;
  /** Best time or angle for photos, how to find a hidden spot, what to order… */
  tip?: string;
}

export interface CountryPack {
  country: {
    /** ISO 3166-1 alpha-2 */
    code: string;
    region: Region;
    /** Hero photo (Unsplash id) */
    image: string;
    theme: Theme;
    /** Typical flight from Moscow */
    fromMoscow: { hours: number; direct: boolean };
    /** Entry rules for Russian passport holders; omit only for countries already in `data/visa.ts` */
    visa?: Omit<VisaInfo, 'code'>;
    text: L<CountryText>;
  };
  cities: {
    id: string;
    lat: number;
    lng: number;
    image: string;
    gallery: string[];
    rating: number;
    reviews: number;
    tags: TagKey[];
    months: number[];
    /** USD per day for a mid-range traveller */
    budgetPerDay: number;
    /** ISO 4217 */
    currency: string;
    /** ISO 639-1 */
    language: string;
    /** e.g. "UTC+1" */
    timezone: string;
    /** Map zoom that frames the city, 9–13 */
    zoom: number;
    theme: Theme;
    text: L<CityText>;
  }[];
  places: {
    id: string;
    /** City id — one of this pack's cities or an existing destination in the same country */
    city: string;
    category: PlaceCategory;
    spot?: Spot;
    lat: number;
    lng: number;
    image: string;
    rating: number;
    reviews: number;
    tags: TagKey[];
    price?: Price;
    hours?: string;
    /** Street address in the local Latin spelling */
    address?: string;
    text: L<PlaceText>;
  }[];
}

/** What the app bundles about a country; its texts are loaded per language. */
export type CountryFacts = Omit<CountryPack['country'], 'text' | 'visa'>;

export interface WorldText {
  countries: Record<string, CountryText>;
  cities: Record<string, CityText>;
  places: Record<string, PlaceText>;
}
