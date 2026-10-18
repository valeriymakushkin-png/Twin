export type PlaceCategory = 'attraction' | 'food' | 'hotel' | 'nature';

export type MapFilter = 'all' | PlaceCategory | 'meetups';

export interface Destination {
  id: string;
  name: string;
  country: string;
  /** ISO 3166-1 alpha-2 */
  countryCode: string;
  lat: number;
  lng: number;
  /** Unsplash photo id (without the `photo-` prefix) */
  image: string;
  gallery: string[];
  rating: number;
  reviews: number;
  tagline: string;
  description: string;
  tags: string[];
  bestTime: string;
  budgetPerDay: number;
  currency: string;
  language: string;
  timezone: string;
  tips: string[];
  /** Initial zoom when flying to it on the map */
  zoom?: number;
}

export interface Place {
  id: string;
  destinationId: string;
  name: string;
  category: PlaceCategory;
  lat: number;
  lng: number;
  image: string;
  gallery: string[];
  rating: number;
  reviews: number;
  tags: string[];
  description: string;
  price?: string;
  hours?: string;
  tips: string[];
}

export type MeetupKind = 'sunset' | 'coffee' | 'hike' | 'food' | 'party' | 'cowork' | 'tour';

export interface Meetup {
  id: string;
  title: string;
  kind: MeetupKind;
  destinationId: string;
  placeName: string;
  lat: number;
  lng: number;
  image: string;
  /** Hours from "now" — keeps demo meetups always upcoming */
  startsInHours: number;
  durationHours: number;
  hostId: string;
  attendeeIds: string[];
  capacity: number;
  description: string;
  price?: string;
  createdByMe?: boolean;
  /** Absolute start for user-created meetups */
  startsAt?: string;
}

export interface User {
  id: string;
  name: string;
  handle: string;
  avatar: string;
  home: string;
  bio: string;
  trips: number;
  places: number;
  followers: number;
  countries: string[];
  verified?: boolean;
  style: string[];
}

export interface Guide {
  id: string;
  title: string;
  subtitle: string;
  authorId: string;
  destinationId: string;
  image: string;
  likes: number;
  readMins: number;
  placeIds: string[];
  sections: { title: string; body: string }[];
}

export interface Review {
  id: string;
  targetId: string;
  authorId: string;
  rating: number;
  text: string;
  daysAgo: number;
  photos?: string[];
  likes: number;
}

export interface Story {
  id: string;
  userId: string;
  image: string;
  location: string;
  caption: string;
}

export type VisaRegime = 'free' | 'evisa' | 'voa' | 'eta' | 'required';

export interface VisaInfo {
  code: string;
  regime: VisaRegime;
  /** Allowed stay in days (0 = depends on visa) */
  days: number;
  title: string;
  cost: string;
  validity: string;
  how: string;
  docs: string[];
  notes: string[];
}
