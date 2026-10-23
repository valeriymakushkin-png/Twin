/**
 * Locale-free catalogue types. Everything a traveller reads (names, descriptions, tips) lives in the
 * per-language content packs under `src/content`; these records only carry facts and keys.
 */

export type PlaceCategory = 'attraction' | 'food' | 'hotel' | 'nature';

export type MapFilter = 'all' | PlaceCategory | 'meetups';

export type TagKey =
  | 'beaches' | 'culture' | 'surf' | 'nomads' | 'nature' | 'diving' | 'city' | 'food' | 'nightlife' | 'history'
  | 'temples' | 'views' | 'sunset' | 'hiking' | 'photo' | 'romance' | 'cruise' | 'kayak' | 'architecture' | 'art'
  | 'shopping' | 'desert' | 'wine' | 'mountains' | 'trekking' | 'roadtrip' | 'aurora' | 'safari' | 'wildlife'
  | 'adventure' | 'spa' | 'winter' | 'ski' | 'lakes' | 'volcanoes' | 'market' | 'streetfood' | 'luxury' | 'unesco'
  | 'islands' | 'gardens' | 'museums' | 'waterfalls' | 'canyon' | 'castles' | 'oldtown' | 'jungle' | 'fjords';

/** Decorative motif drawn behind a destination's content in its accent colour. */
export type Motif = 'waves' | 'palms' | 'peaks' | 'grid' | 'torii' | 'dunes' | 'tiles' | 'aurora' | 'sun' | 'domes' | 'balloons' | 'mosaic' | 'snow' | 'lanterns';

export interface Theme {
  accent: string;
  accent2: string;
  motif: Motif;
}

export interface Destination {
  id: string;
  /** ISO 3166-1 alpha-2 */
  countryCode: string;
  lat: number;
  lng: number;
  /** Unsplash photo id */
  image: string;
  gallery: string[];
  rating: number;
  reviews: number;
  tags: TagKey[];
  /** Best months to visit, 1–12 */
  months: number[];
  budgetPerDay: number;
  currency: string;
  /** ISO 639-1 code of the main language */
  language: string;
  timezone: string;
  zoom: number;
  theme: Theme;
}

export type Price =
  | { kind: 'free' }
  | { kind: 'fixed'; amount: number; currency: string }
  | { kind: 'from'; amount: number; currency: string; per?: 'night' }
  | { kind: 'level'; level: 1 | 2 | 3 };

export interface Place {
  id: string;
  destinationId: string;
  category: PlaceCategory;
  lat: number;
  lng: number;
  image: string;
  rating: number;
  reviews: number;
  tags: TagKey[];
  price?: Price;
  /** "HH:MM–HH:MM" or "always" */
  hours?: string;
  /** Photo spot or a lesser-known gem */
  spot?: 'insta' | 'hidden';
  /** Street address in the local Latin spelling */
  address?: string;
}

export type MeetupKind = 'sunset' | 'coffee' | 'hike' | 'food' | 'party' | 'cowork' | 'tour';

export interface Meetup {
  id: string;
  kind: MeetupKind;
  destinationId: string;
  lat: number;
  lng: number;
  image: string;
  /** Hours from "now" — keeps demo meetups always upcoming */
  startsInHours: number;
  durationHours: number;
  hostId: string;
  attendeeIds: string[];
  capacity: number;
  price?: Price;
  /** Set for meetups the user created; they carry their own text */
  createdByMe?: boolean;
  startsAt?: string;
  title?: string;
  placeName?: string;
  description?: string;
  private?: boolean;
}

export interface User {
  id: string;
  /** Seed for the generated avatar */
  avatar: string;
  homeCountry: string;
  trips: number;
  places: number;
  followers: number;
  countries: string[];
  verified?: boolean;
  style: TagKey[];
}

export interface Guide {
  id: string;
  authorId: string;
  destinationId: string;
  image: string;
  likes: number;
  readMins: number;
  placeIds: string[];
  /** Exclusive to Vylo Plus — the first section stays readable as a preview */
  plus?: boolean;
}

export interface Review {
  id: string;
  targetId: string;
  authorId: string;
  rating: number;
  daysAgo: number;
  photos?: string[];
  likes: number;
  /** Only for reviews the user wrote */
  text?: string;
}

export interface Story {
  id: string;
  userId: string;
  image: string;
}

export type VisaRegime = 'free' | 'voa' | 'eta' | 'evisa' | 'required' | 'schengen' | 'domestic' | 'eu' | 'banned';

export type VisaDoc =
  | 'passport' | 'internalPassport' | 'returnTicket' | 'booking' | 'insurance' | 'insurance30k' | 'form' | 'photo'
  | 'finance' | 'itinerary' | 'employment' | 'tdac' | 'evoa' | 'touristLevy' | 'imuga' | 'eta' | 'mdac' | 'etravel'
  | 'dviajeros' | 'ds160' | 'homeTies' | 'evisa' | 'idCard' | 'heldVisa' | 'yellowFever';

export type VisaNote =
  | 'thRules' | 'thExtend' | 'idEcd' | 'vnEvisa' | 'jpCards' | 'schengenTime' | 'cnPilot' | 'lkScam' | 'egSinai'
  | 'amInternal' | 'kzInternal' | 'uzRegistration' | 'usInterview' | 'gbBiometrics' | 'ilQuestions' | 'tr180'
  | 'ae180' | 'kr180' | 'sgTransit' | 'joPass' | 'domestic' | 'isConsulate';

export type PassportValidity = 'sixMonths' | 'threeMonths' | 'threeMonthsSchengen' | 'stay' | 'p120' | 'none';

export interface VisaInfo {
  code: string;
  regime: VisaRegime;
  /** Allowed stay in days (0 = depends on the visa) */
  days: number;
  cost: Price;
  /** A visa-centre fee comes on top */
  plusFee?: boolean;
  /** Visa-free stay is a pilot programme */
  pilot?: boolean;
  validity: PassportValidity;
  docs: VisaDoc[];
  notes: VisaNote[];
}
