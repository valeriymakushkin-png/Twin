import type { DestinationId } from '@/data/destinations';
import type { PlaceId } from '@/data/places';
import type { GuideId, MeetupId, ReviewId, StoryId, UserId } from '@/data/social';

export interface DestinationText {
  name: string;
  tagline: string;
  description: string;
  tips: [string, string];
}

export interface PlaceText {
  name: string;
  description: string;
  tip?: string;
}

export interface GuideText {
  title: string;
  subtitle: string;
  sections: [{ title: string; body: string }, { title: string; body: string }, { title: string; body: string }];
}

/**
 * Everything a traveller reads about the catalogue, in one language. Keyed by the catalogue's id
 * unions, so a missing or misspelled entry is a type error rather than a blank card.
 */
export interface ContentPack {
  destinations: Record<DestinationId, DestinationText>;
  places: Record<PlaceId, PlaceText>;
  users: Record<UserId, { name: string; home: string; bio: string }>;
  meetups: Record<MeetupId, { title: string; placeName: string; description: string }>;
  guides: Record<GuideId, GuideText>;
  reviews: Record<ReviewId, string>;
  stories: Record<StoryId, string>;
}
