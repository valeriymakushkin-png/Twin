import type { Guide, Meetup, Review, Story, User } from './types';

/**
 * Demo community. Avatars are generated from seeds (no photos of real people), and every text —
 * names, bios, reviews, meetup descriptions — comes from the content pack of the current language.
 */
export const USER_IDS = ['alex', 'sophie', 'maria', 'kenji', 'lena', 'david', 'anna', 'tom', 'nina', 'max', 'eva', 'zara'] as const;
export type UserId = (typeof USER_IDS)[number];

export const users: (User & { id: UserId })[] = [
  { id: 'alex', avatar: 'alex-7', homeCountry: 'TH', trips: 42, places: 128, followers: 1240, countries: ['TH', 'ID', 'VN', 'JP', 'GE', 'TR', 'PT', 'FR', 'IT', 'MV', 'LK', 'AE'], verified: true, style: ['nature', 'food'] },
  { id: 'sophie', avatar: 'sophie-3', homeCountry: 'PT', trips: 37, places: 214, followers: 8900, countries: ['VN', 'TH', 'JP', 'PT', 'ES', 'FR', 'IT', 'GR', 'ID', 'KH', 'LA'], verified: true, style: ['photo', 'culture'] },
  { id: 'maria', avatar: 'maria-11', homeCountry: 'RU', trips: 25, places: 96, followers: 3100, countries: ['ID', 'GE', 'TR', 'AE', 'TH', 'AM', 'RS', 'ME'], style: ['nomads', 'surf'] },
  { id: 'kenji', avatar: 'kenji-5', homeCountry: 'JP', trips: 19, places: 74, followers: 2200, countries: ['JP', 'KR', 'TW', 'VN', 'TH', 'US'], verified: true, style: ['culture', 'food'] },
  { id: 'lena', avatar: 'lena-2', homeCountry: 'KR', trips: 31, places: 102, followers: 4700, countries: ['KR', 'JP', 'CH', 'IS', 'NO', 'PE', 'NP', 'NZ'], style: ['mountains', 'trekking'] },
  { id: 'david', avatar: 'david-9', homeCountry: 'GE', trips: 14, places: 58, followers: 1900, countries: ['GE', 'AM', 'TR', 'IT', 'FR'], style: ['wine', 'food'] },
  { id: 'anna', avatar: 'anna-4', homeCountry: 'RU', trips: 48, places: 187, followers: 12400, countries: ['TH', 'VN', 'ID', 'LK', 'IN', 'TR', 'GE', 'AE', 'EG', 'MA', 'PT', 'ES', 'RU'], verified: true, style: ['adventure', 'culture'] },
  { id: 'tom', avatar: 'tom-8', homeCountry: 'GB', trips: 22, places: 66, followers: 870, countries: ['GB', 'PE', 'CO', 'MX', 'TH', 'VN'], style: ['hiking', 'adventure'] },
  { id: 'nina', avatar: 'nina-6', homeCountry: 'JP', trips: 28, places: 141, followers: 15200, countries: ['JP', 'IS', 'NO', 'CH', 'IT', 'GR'], verified: true, style: ['photo', 'aurora'] },
  { id: 'max', avatar: 'max-12', homeCountry: 'AE', trips: 33, places: 89, followers: 2600, countries: ['AE', 'MV', 'EG', 'LK', 'ID', 'TH', 'PH'], style: ['diving', 'beaches'] },
  { id: 'eva', avatar: 'eva-1', homeCountry: 'PE', trips: 17, places: 63, followers: 1400, countries: ['PE', 'BO', 'CL', 'AR', 'BR', 'CO'], style: ['trekking', 'history'] },
  { id: 'zara', avatar: 'zara-10', homeCountry: 'TR', trips: 20, places: 77, followers: 3300, countries: ['TR', 'GE', 'AE', 'MA', 'IT', 'GR'], style: ['food', 'market'] },
];

export const userById = (id: string) => users.find((u) => u.id === id);

export const MEETUP_IDS = ['m-uluwatu', 'm-cowork', 'm-kelingking', 'm-fushimi', 'm-wine', 'm-street', 'm-balloons', 'm-dive', 'm-lisbon', 'm-alps', 'm-baikal', 'm-marrakech'] as const;
export type MeetupId = (typeof MEETUP_IDS)[number];

export const meetups: (Meetup & { id: MeetupId })[] = [
  { id: 'm-uluwatu', kind: 'sunset', destinationId: 'bali', lat: -8.8291, lng: 115.0849, image: 'yKjURf1u7EY', startsInHours: 5, durationHours: 3, hostId: 'maria', attendeeIds: ['alex', 'anna', 'tom', 'sophie', 'max'], capacity: 20, price: { kind: 'free' } },
  { id: 'm-cowork', kind: 'cowork', destinationId: 'bangkok', lat: 13.7276, lng: 100.5314, image: '1sG6QJubO9Q', startsInHours: 20, durationHours: 4, hostId: 'alex', attendeeIds: ['maria', 'tom', 'nina'], capacity: 12, price: { kind: 'free' } },
  { id: 'm-kelingking', kind: 'hike', destinationId: 'bali', lat: -8.7509, lng: 115.4744, image: '9PakI9j885k', startsInHours: 44, durationHours: 8, hostId: 'tom', attendeeIds: ['lena', 'anna', 'max', 'maria', 'sophie', 'kenji', 'eva', 'zara'], capacity: 16, price: { kind: 'fixed', amount: 35, currency: 'USD' } },
  { id: 'm-fushimi', kind: 'tour', destinationId: 'kyoto', lat: 34.9671, lng: 135.7727, image: 'VulPpt46fXk', startsInHours: 28, durationHours: 3, hostId: 'kenji', attendeeIds: ['nina', 'sophie', 'lena'], capacity: 10, price: { kind: 'free' } },
  { id: 'm-wine', kind: 'food', destinationId: 'tbilisi', lat: 41.6932, lng: 44.8072, image: 'b-eGDk5_gPo', startsInHours: 9, durationHours: 3, hostId: 'david', attendeeIds: ['maria', 'zara', 'anna', 'alex'], capacity: 14, price: { kind: 'fixed', amount: 45, currency: 'GEL' } },
  { id: 'm-street', kind: 'food', destinationId: 'bangkok', lat: 13.7408, lng: 100.5098, image: 'H9ZhJTDNyKE', startsInHours: 31, durationHours: 3, hostId: 'anna', attendeeIds: ['tom', 'max'], capacity: 8, price: { kind: 'free' } },
  { id: 'm-balloons', kind: 'sunset', destinationId: 'cappadocia', lat: 38.6589, lng: 34.8235, image: 'OIbcmFyMDbo', startsInHours: 60, durationHours: 2, hostId: 'zara', attendeeIds: ['nina', 'lena', 'eva', 'david'], capacity: 25, price: { kind: 'free' } },
  { id: 'm-dive', kind: 'tour', destinationId: 'maldives', lat: 3.9425, lng: 73.4906, image: 'KenpE6DO1l0', startsInHours: 72, durationHours: 6, hostId: 'max', attendeeIds: ['alex', 'anna'], capacity: 8, price: { kind: 'fixed', amount: 120, currency: 'USD' } },
  { id: 'm-lisbon', kind: 'party', destinationId: 'lisbon', lat: 38.7118, lng: -9.1302, image: 'tnGO-GCfH4Y', startsInHours: 16, durationHours: 4, hostId: 'sophie', attendeeIds: ['zara', 'tom', 'eva', 'kenji', 'nina'], capacity: 15, price: { kind: 'free' } },
  { id: 'm-alps', kind: 'hike', destinationId: 'alps', lat: 46.5935, lng: 7.9091, image: 'Um9FWEEf3Vk', startsInHours: 96, durationHours: 7, hostId: 'lena', attendeeIds: ['tom', 'nina'], capacity: 10, price: { kind: 'free' } },
  { id: 'm-baikal', kind: 'tour', destinationId: 'baikal', lat: 53.1503, lng: 107.3434, image: '6KCnl-EgbiU', startsInHours: 120, durationHours: 6, hostId: 'anna', attendeeIds: ['maria', 'lena', 'tom'], capacity: 12, price: { kind: 'fixed', amount: 3500, currency: 'RUB' } },
  { id: 'm-marrakech', kind: 'food', destinationId: 'marrakech', lat: 31.6258, lng: -7.9891, image: '9_xnKWRZWzU', startsInHours: 52, durationHours: 3, hostId: 'zara', attendeeIds: ['sophie', 'max', 'david'], capacity: 10, price: { kind: 'fixed', amount: 150, currency: 'MAD' } },
];

export const GUIDE_IDS = ['g-vietnam', 'g-japan', 'g-bali', 'g-georgia', 'g-iceland', 'g-lisbon', 'g-baikal', 'g-kyoto'] as const;
export type GuideId = (typeof GUIDE_IDS)[number];

export const guides: (Guide & { id: GuideId })[] = [
  { id: 'g-vietnam', authorId: 'sophie', destinationId: 'halong', image: 'aQNHyIOwFZs', likes: 2140, readMins: 7, placeIds: ['lanha', 'titop'] },
  { id: 'g-japan', authorId: 'kenji', destinationId: 'tokyo', image: 'JMD0K-kCJ5I', likes: 5310, readMins: 12, placeIds: ['shibuya', 'sensoji', 'fushimi', 'arashiyama', 'ramentokyo'] },
  { id: 'g-bali', authorId: 'maria', destinationId: 'bali', image: 'jN9JnZ-SyVc', likes: 3870, readMins: 9, placeIds: ['nookbali', 'tegallalang', 'uluwatu', 'kelingking'] },
  { id: 'g-georgia', authorId: 'david', destinationId: 'tbilisi', image: 'b-eGDk5_gPo', likes: 1960, readMins: 6, placeIds: ['narikala', 'oldtbilisi', 'abanotubani'] },
  { id: 'g-iceland', authorId: 'nina', destinationId: 'iceland', image: 'spofKLaPkbI', likes: 4420, readMins: 8, placeIds: ['kirkjufell', 'bluelagoon'] },
  { id: 'g-lisbon', authorId: 'sophie', destinationId: 'lisbon', image: 'UIIwSB8q3mo', likes: 1730, readMins: 5, placeIds: ['alfama', 'tram28', 'belem'] },
  { id: 'g-baikal', authorId: 'anna', destinationId: 'baikal', image: '6KCnl-EgbiU', likes: 2980, readMins: 10, placeIds: ['olkhon', 'shamanka'], plus: true },
  { id: 'g-kyoto', authorId: 'kenji', destinationId: 'kyoto', image: 'wvl3rJa_Mk8', likes: 3650, readMins: 9, placeIds: ['kinkakuji', 'arashiyama', 'fushimi'], plus: true },
];

export const guideById = (id: string) => guides.find((g) => g.id === id);

export const REVIEW_IDS = ['r1', 'r2', 'r3', 'r4', 'r5', 'r6', 'r7', 'r8', 'r9', 'r10', 'r11', 'r12', 'r13', 'r14', 'r15', 'r16'] as const;
export type ReviewId = (typeof REVIEW_IDS)[number];

export const reviews: (Review & { id: ReviewId })[] = [
  { id: 'r1', targetId: 'phiphiview', authorId: 'alex', rating: 5, daysAgo: 2, likes: 48, photos: ['ZhhWKwgiFqU'] },
  { id: 'r2', targetId: 'bali', authorId: 'maria', rating: 5, daysAgo: 5, likes: 112 },
  { id: 'r3', targetId: 'uluwatu', authorId: 'anna', rating: 5, daysAgo: 1, likes: 31, photos: ['a19bFxDyeVI'] },
  { id: 'r4', targetId: 'tokyo', authorId: 'nina', rating: 5, daysAgo: 3, likes: 87 },
  { id: 'r5', targetId: 'fushimi', authorId: 'kenji', rating: 5, daysAgo: 7, likes: 140 },
  { id: 'r6', targetId: 'tbilisi', authorId: 'david', rating: 5, daysAgo: 4, likes: 56 },
  { id: 'r7', targetId: 'kelingking', authorId: 'tom', rating: 4, daysAgo: 6, likes: 22 },
  { id: 'r8', targetId: 'cappadocia', authorId: 'zara', rating: 5, daysAgo: 9, likes: 64, photos: ['GnqpSlWOO0A'] },
  { id: 'r9', targetId: 'lisbon', authorId: 'sophie', rating: 5, daysAgo: 2, likes: 73 },
  { id: 'r10', targetId: 'maldives', authorId: 'max', rating: 5, daysAgo: 11, likes: 39 },
  { id: 'r11', targetId: 'santorini', authorId: 'nina', rating: 4, daysAgo: 14, likes: 58 },
  { id: 'r12', targetId: 'tegallalang', authorId: 'lena', rating: 5, daysAgo: 8, likes: 27 },
  { id: 'r13', targetId: 'iceland', authorId: 'lena', rating: 5, daysAgo: 20, likes: 91 },
  { id: 'r14', targetId: 'istanbul', authorId: 'zara', rating: 5, daysAgo: 3, likes: 44 },
  { id: 'r15', targetId: 'baikal', authorId: 'anna', rating: 5, daysAgo: 12, likes: 102, photos: ['PChvdQjvTO4'] },
  { id: 'r16', targetId: 'petra', authorId: 'eva', rating: 5, daysAgo: 6, likes: 67 },
];

export const STORY_IDS = ['s1', 's2', 's3', 's4', 's5', 's6', 's7', 's8'] as const;
export type StoryId = (typeof STORY_IDS)[number];

export const stories: (Story & { id: StoryId })[] = [
  { id: 's1', userId: 'maria', image: 'FlQeHeTPClU' },
  { id: 's2', userId: 'kenji', image: 'wvl3rJa_Mk8' },
  { id: 's3', userId: 'nina', image: 'spofKLaPkbI' },
  { id: 's4', userId: 'anna', image: 'TilO4-6h3VA' },
  { id: 's5', userId: 'zara', image: 'SagXn7H6HFg' },
  { id: 's6', userId: 'lena', image: 'tDbCVk4bffM' },
  { id: 's7', userId: 'max', image: 'xPsFXsbXJRg' },
  { id: 's8', userId: 'david', image: 'aRkTWJzoZfg' },
];
