import type { Place, Price } from './types';

const fixed = (amount: number, currency: string): Price => ({ kind: 'fixed', amount, currency });
const from = (amount: number, currency: string, per?: 'night'): Price => ({ kind: 'from', amount, currency, per });
const free: Price = { kind: 'free' };
const level = (l: 1 | 2 | 3): Price => ({ kind: 'level', level: l });

export const PLACE_IDS = [
  'uluwatu', 'tegallalang', 'kelingking', 'ulundanu', 'nookbali',
  'mayabay', 'phiphiview', 'railay',
  'watarun', 'yaowarat', 'chaophraya',
  'shibuya', 'sensoji', 'nakamise', 'ramentokyo',
  'fushimi', 'arashiyama', 'kinkakuji',
  'lanha', 'titop',
  'gyeongbokgung', 'bukchon', 'namsan',
  'gardensbay', 'mbs', 'spectra',
  'ninearch', 'sigiriya', 'kandyella',
  'maafushi', 'sonevajani', 'bolifushi',
  'burj', 'lahbab', 'dubaifountain',
  'treasury', 'siq', 'wadirum',
  'jemaa', 'majorelle', 'koutoubia', 'souks',
  'tablemountain', 'boulders', 'lionshead',
  'hagiasophia', 'galata', 'kahvalti',
  'goreme', 'lovevalley', 'cavesuites',
  'belem', 'tram28', 'alfama',
  'oia', 'firaoia', 'imerovigli',
  'eiffel', 'louvre', 'bistro',
  'colosseum', 'trevi',
  'sagrada', 'parkguell', 'eixample',
  'charlesbridge', 'praguecastle', 'malastrana',
  'lauterbrunnen', 'matterhorn', 'riffelsee', 'wengen',
  'kirkjufell', 'bluelagoon',
  'narikala', 'oldtbilisi', 'abanotubani',
  'brooklynbridge', 'centralpark',
  'citadel', 'rainbowmtn', 'incatrail',
  'cristo', 'sugarloaf',
  'olkhon', 'shamanka',
  'avachinsky', 'tolbachik', 'gorely',
  'katun',
  'hermitage', 'spilledblood', 'peterhof',
  'rosakhutor',
  'shipwrecks', 'teriberkavillage',
  'sulak', 'gamsutl',
] as const;

export type PlaceId = (typeof PLACE_IDS)[number];

type P = Place & { id: PlaceId };

export const basePlaces: P[] = [
  // Bali
  { id: 'uluwatu', destinationId: 'bali', category: 'attraction', lat: -8.8291, lng: 115.0849, image: 'yKjURf1u7EY', rating: 4.8, reviews: 6210, tags: ['temples', 'sunset', 'views'], price: fixed(50000, 'IDR'), hours: '07:00–19:00' },
  { id: 'tegallalang', destinationId: 'bali', category: 'nature', lat: -8.4312, lng: 115.2793, image: '-2WlTWZLnRc', rating: 4.7, reviews: 8930, tags: ['nature', 'photo', 'hiking'], price: fixed(25000, 'IDR'), hours: '08:00–18:00' },
  { id: 'kelingking', destinationId: 'bali', category: 'nature', lat: -8.7509, lng: 115.4744, image: '9PakI9j885k', rating: 4.9, reviews: 7420, tags: ['beaches', 'views', 'hiking'], hours: 'always' },
  { id: 'ulundanu', destinationId: 'bali', category: 'attraction', lat: -8.2752, lng: 115.1668, image: 'UXhECwQEHQA', rating: 4.7, reviews: 5130, tags: ['temples', 'lakes', 'photo'], price: fixed(75000, 'IDR'), hours: '07:00–19:00' },
  { id: 'nookbali', destinationId: 'bali', category: 'food', lat: -8.656, lng: 115.1574, image: 'ny03bU2bars', rating: 4.6, reviews: 2870, tags: ['food', 'nomads'], price: level(2), hours: '07:30–23:00' },
  // Phi Phi & Krabi
  { id: 'mayabay', destinationId: 'phiphi', category: 'nature', lat: 7.6779, lng: 98.7663, image: '1QUUFuOsRk4', rating: 4.8, reviews: 9850, tags: ['beaches', 'islands'], price: fixed(400, 'THB'), hours: '07:00–16:00' },
  { id: 'phiphiview', destinationId: 'phiphi', category: 'attraction', lat: 7.7406, lng: 98.7758, image: 'ZhhWKwgiFqU', rating: 4.9, reviews: 5640, tags: ['views', 'sunset', 'hiking'], price: fixed(50, 'THB') },
  { id: 'railay', destinationId: 'phiphi', category: 'nature', lat: 8.0115, lng: 98.8378, image: 'nFLhhAxN1EE', rating: 4.8, reviews: 2400, tags: ['beaches', 'adventure'] },
  // Bangkok
  { id: 'watarun', destinationId: 'bangkok', category: 'attraction', lat: 13.7437, lng: 100.4889, image: 'Ar0Bfnx_UYI', rating: 4.7, reviews: 11200, tags: ['temples', 'history'], price: fixed(200, 'THB'), hours: '08:00–18:00' },
  { id: 'yaowarat', destinationId: 'bangkok', category: 'food', lat: 13.7408, lng: 100.5098, image: 'k8dwH-poJ2c', rating: 4.6, reviews: 8100, tags: ['streetfood', 'nightlife'], price: level(1), hours: '17:00–01:00' },
  { id: 'chaophraya', destinationId: 'bangkok', category: 'attraction', lat: 13.7259, lng: 100.5106, image: 'M5EYTUbmMgc', rating: 4.5, reviews: 4300, tags: ['cruise', 'views'], price: fixed(16, 'THB') },
  // Tokyo
  { id: 'shibuya', destinationId: 'tokyo', category: 'attraction', lat: 35.6595, lng: 139.7005, image: 'X07Gu03-a00', rating: 4.6, reviews: 14200, tags: ['city', 'nightlife', 'photo'], hours: 'always' },
  { id: 'sensoji', destinationId: 'tokyo', category: 'attraction', lat: 35.7148, lng: 139.7967, image: 'BlZCXBa3maE', rating: 4.7, reviews: 12800, tags: ['temples', 'history'], price: free, hours: '06:00–17:00' },
  { id: 'nakamise', destinationId: 'tokyo', category: 'food', lat: 35.7118, lng: 139.7963, image: 'c8ioq1LH_mI', rating: 4.5, reviews: 6400, tags: ['market', 'streetfood'], price: level(1), hours: '09:00–19:00' },
  { id: 'ramentokyo', destinationId: 'tokyo', category: 'food', lat: 35.6464, lng: 139.6533, image: '5x8dUGe-7Fo', rating: 4.7, reviews: 2300, tags: ['food'], price: level(1), hours: '11:00–23:00' },
  // Kyoto
  { id: 'fushimi', destinationId: 'kyoto', category: 'attraction', lat: 34.9671, lng: 135.7727, image: 'jVEH0yjv23c', rating: 4.9, reviews: 15400, tags: ['temples', 'hiking', 'photo'], price: free, hours: 'always' },
  { id: 'arashiyama', destinationId: 'kyoto', category: 'nature', lat: 35.017, lng: 135.6713, image: 'HmNssAygTlw', rating: 4.6, reviews: 10200, tags: ['nature', 'photo'], price: free, hours: 'always' },
  { id: 'kinkakuji', destinationId: 'kyoto', category: 'attraction', lat: 35.0394, lng: 135.7292, image: 'N5SG29ZSz_A', rating: 4.8, reviews: 13100, tags: ['temples', 'gardens', 'unesco'], price: fixed(500, 'JPY'), hours: '09:00–17:00' },
  // Ha Long
  { id: 'lanha', destinationId: 'halong', category: 'nature', lat: 20.75, lng: 107.05, image: '-HtfdIHSbsE', rating: 4.8, reviews: 3200, tags: ['kayak', 'cruise', 'islands'] },
  { id: 'titop', destinationId: 'halong', category: 'attraction', lat: 20.8586, lng: 107.087, image: '-0hW5I7eRJE', rating: 4.5, reviews: 4100, tags: ['views', 'beaches'] },
  // Seoul
  { id: 'gyeongbokgung', destinationId: 'seoul', category: 'attraction', lat: 37.5796, lng: 126.977, image: 'YshVTnd6iZ8', rating: 4.7, reviews: 16200, tags: ['history', 'culture'], price: fixed(3000, 'KRW'), hours: '09:00–18:00' },
  { id: 'bukchon', destinationId: 'seoul', category: 'attraction', lat: 37.5826, lng: 126.9831, image: '1zC9UAMO20o', rating: 4.5, reviews: 9800, tags: ['architecture', 'photo'], price: free },
  { id: 'namsan', destinationId: 'seoul', category: 'nature', lat: 37.5512, lng: 126.9882, image: 'AwlLYexpQhE', rating: 4.6, reviews: 11300, tags: ['views', 'hiking', 'sunset'] },
  // Singapore
  { id: 'gardensbay', destinationId: 'singapore', category: 'nature', lat: 1.2816, lng: 103.8636, image: 's3i02B7qiVA', rating: 4.8, reviews: 21400, tags: ['gardens', 'architecture'], price: free, hours: '05:00–02:00' },
  { id: 'mbs', destinationId: 'singapore', category: 'hotel', lat: 1.2834, lng: 103.8607, image: '72FN9uljLwA', rating: 4.6, reviews: 15600, tags: ['luxury', 'views'], price: from(700, 'SGD', 'night') },
  { id: 'spectra', destinationId: 'singapore', category: 'attraction', lat: 1.283, lng: 103.859, image: 'd9VkFbtL1ig', rating: 4.7, reviews: 7200, tags: ['nightlife', 'photo'], price: free, hours: '20:00–21:30' },
  // Sri Lanka
  { id: 'ninearch', destinationId: 'srilanka', category: 'attraction', lat: 6.8768, lng: 81.0608, image: '3R50kTNBKiE', rating: 4.7, reviews: 7200, tags: ['photo', 'hiking'], price: free },
  { id: 'sigiriya', destinationId: 'srilanka', category: 'attraction', lat: 7.957, lng: 80.7603, image: 'bfdshIHD5Y4', rating: 4.8, reviews: 9100, tags: ['history', 'unesco', 'views'], price: fixed(30, 'USD'), hours: '07:00–17:30' },
  { id: 'kandyella', destinationId: 'srilanka', category: 'attraction', lat: 6.9497, lng: 80.7891, image: 'uCXOO4NS22E', rating: 4.8, reviews: 5600, tags: ['roadtrip', 'views'], price: from(1000, 'LKR') },
  // Maldives
  { id: 'maafushi', destinationId: 'maldives', category: 'nature', lat: 3.9425, lng: 73.4906, image: 'KenpE6DO1l0', rating: 4.5, reviews: 3100, tags: ['beaches', 'diving'] },
  { id: 'sonevajani', destinationId: 'maldives', category: 'hotel', lat: 5.7333, lng: 73.4167, image: 'imQcNKOnLTA', rating: 4.9, reviews: 980, tags: ['luxury', 'romance'], price: from(2400, 'USD', 'night') },
  { id: 'bolifushi', destinationId: 'maldives', category: 'hotel', lat: 3.9746, lng: 73.396, image: 'Rpi8iqEEZyQ', rating: 4.8, reviews: 1240, tags: ['luxury', 'diving'], price: from(1100, 'USD', 'night') },
  // Dubai
  { id: 'burj', destinationId: 'dubai', category: 'attraction', lat: 25.1972, lng: 55.2744, image: 'Bu435tjPsvk', rating: 4.7, reviews: 41000, tags: ['views', 'architecture'], price: from(169, 'AED'), hours: '08:30–23:00' },
  { id: 'lahbab', destinationId: 'dubai', category: 'nature', lat: 24.95, lng: 55.62, image: 'RPkXbErNJow', rating: 4.8, reviews: 3600, tags: ['desert', 'adventure', 'sunset'] },
  { id: 'dubaifountain', destinationId: 'dubai', category: 'attraction', lat: 25.1955, lng: 55.274, image: 'lRCWtOEPwiY', rating: 4.8, reviews: 23000, tags: ['nightlife', 'photo'], price: free, hours: '18:00–23:00' },
  // Petra & Wadi Rum
  { id: 'treasury', destinationId: 'petra', category: 'attraction', lat: 30.3222, lng: 35.4516, image: 'k8-5bWDAklo', rating: 4.9, reviews: 12100, tags: ['history', 'unesco'], price: fixed(50, 'JOD'), hours: '06:00–18:00' },
  { id: 'siq', destinationId: 'petra', category: 'nature', lat: 30.3218, lng: 35.459, image: 'sYMgkKkHpGI', rating: 4.8, reviews: 6400, tags: ['canyon', 'hiking'] },
  { id: 'wadirum', destinationId: 'petra', category: 'nature', lat: 29.5759, lng: 35.4196, image: '5dL74UswYb0', rating: 4.9, reviews: 7900, tags: ['desert', 'adventure', 'sunset'] },
  // Marrakech
  { id: 'jemaa', destinationId: 'marrakech', category: 'attraction', lat: 31.6258, lng: -7.9891, image: '9_xnKWRZWzU', rating: 4.5, reviews: 18200, tags: ['market', 'streetfood', 'culture'], price: free, hours: 'always' },
  { id: 'majorelle', destinationId: 'marrakech', category: 'nature', lat: 31.6417, lng: -8.0033, image: 'RE-a-ILYDxg', rating: 4.6, reviews: 21400, tags: ['gardens', 'art'], price: fixed(165, 'MAD'), hours: '08:00–18:00' },
  { id: 'koutoubia', destinationId: 'marrakech', category: 'attraction', lat: 31.6237, lng: -7.9936, image: 'bzFHhYKdIa0', rating: 4.6, reviews: 9800, tags: ['architecture', 'history'] },
  { id: 'souks', destinationId: 'marrakech', category: 'attraction', lat: 31.6295, lng: -7.9866, image: 'zbPDL84kvRg', rating: 4.4, reviews: 7600, tags: ['market', 'shopping'], hours: '09:00–20:00' },
  // Cape Town
  { id: 'tablemountain', destinationId: 'capetown', category: 'nature', lat: -33.9628, lng: 18.4098, image: 'zrOjcQXAdvk', rating: 4.8, reviews: 19800, tags: ['views', 'hiking'], price: from(450, 'ZAR'), hours: '08:00–19:00' },
  { id: 'boulders', destinationId: 'capetown', category: 'nature', lat: -34.1975, lng: 18.4518, image: 'UjpEGHu8uNU', rating: 4.7, reviews: 11200, tags: ['wildlife', 'beaches'], price: fixed(190, 'ZAR'), hours: '08:00–17:00' },
  { id: 'lionshead', destinationId: 'capetown', category: 'nature', lat: -33.9353, lng: 18.3891, image: 'sg4SBLu2e48', rating: 4.9, reviews: 5400, tags: ['hiking', 'sunset', 'views'], price: free },
  // Istanbul
  { id: 'hagiasophia', destinationId: 'istanbul', category: 'attraction', lat: 41.0086, lng: 28.9802, image: 'JbWg7W953LY', rating: 4.8, reviews: 34000, tags: ['history', 'architecture'], price: fixed(25, 'EUR'), hours: '09:00–19:00' },
  { id: 'galata', destinationId: 'istanbul', category: 'attraction', lat: 41.0256, lng: 28.9741, image: 'KB1tO3RPZN8', rating: 4.6, reviews: 18900, tags: ['views', 'history'], price: fixed(30, 'EUR'), hours: '08:30–23:00' },
  { id: 'kahvalti', destinationId: 'istanbul', category: 'food', lat: 41.0103, lng: 28.953, image: 'NQkB9ohmb8s', rating: 4.7, reviews: 3100, tags: ['food'], price: level(2), hours: '08:00–15:00' },
  // Cappadocia
  { id: 'goreme', destinationId: 'cappadocia', category: 'nature', lat: 38.6431, lng: 34.8289, image: 'GnqpSlWOO0A', rating: 4.9, reviews: 8800, tags: ['adventure', 'sunset', 'photo'] },
  { id: 'lovevalley', destinationId: 'cappadocia', category: 'nature', lat: 38.6589, lng: 34.8235, image: 'OIbcmFyMDbo', rating: 4.8, reviews: 4200, tags: ['hiking', 'photo'], price: free },
  { id: 'cavesuites', destinationId: 'cappadocia', category: 'hotel', lat: 38.642, lng: 34.827, image: 'IEXMnKUTMvY', rating: 4.8, reviews: 2100, tags: ['luxury', 'views'], price: from(250, 'EUR', 'night') },
  // Lisbon
  { id: 'belem', destinationId: 'lisbon', category: 'attraction', lat: 38.6916, lng: -9.216, image: 'RxVCWvDvfs4', rating: 4.6, reviews: 13200, tags: ['history', 'unesco'], price: fixed(10, 'EUR'), hours: '10:00–18:30' },
  { id: 'tram28', destinationId: 'lisbon', category: 'attraction', lat: 38.7151, lng: -9.1361, image: 'r_ShROkN3E8', rating: 4.5, reviews: 9900, tags: ['city', 'views'], price: fixed(3.1, 'EUR'), hours: '07:00–22:00' },
  { id: 'alfama', destinationId: 'lisbon', category: 'attraction', lat: 38.7118, lng: -9.1302, image: 'tnGO-GCfH4Y', rating: 4.8, reviews: 7600, tags: ['views', 'sunset', 'architecture'], price: free },
  // Santorini
  { id: 'oia', destinationId: 'santorini', category: 'attraction', lat: 36.4618, lng: 25.3753, image: '_vA2q0-NroU', rating: 4.9, reviews: 16700, tags: ['sunset', 'photo', 'romance'], price: free },
  { id: 'firaoia', destinationId: 'santorini', category: 'nature', lat: 36.4167, lng: 25.4317, image: 'kxLpjhmI3t4', rating: 4.8, reviews: 3900, tags: ['hiking', 'views'], price: free },
  { id: 'imerovigli', destinationId: 'santorini', category: 'hotel', lat: 36.432, lng: 25.423, image: 'yB6WFHbkX40', rating: 4.8, reviews: 1700, tags: ['luxury', 'romance', 'views'], price: from(450, 'EUR', 'night') },
  // Paris
  { id: 'eiffel', destinationId: 'paris', category: 'attraction', lat: 48.8584, lng: 2.2945, image: '0ocN7t9BiG8', rating: 4.7, reviews: 52000, tags: ['views', 'romance'], price: from(15, 'EUR'), hours: '09:30–23:45' },
  { id: 'louvre', destinationId: 'paris', category: 'attraction', lat: 48.8606, lng: 2.3376, image: 'LKvq2nRQGEE', rating: 4.8, reviews: 61000, tags: ['museums', 'art'], price: fixed(22, 'EUR'), hours: '09:00–18:00' },
  { id: 'bistro', destinationId: 'paris', category: 'food', lat: 48.853, lng: 2.3499, image: 'yzh7B-9sOhc', rating: 4.5, reviews: 2600, tags: ['food', 'romance'], price: level(2), hours: '08:00–00:00' },
  // Rome
  { id: 'colosseum', destinationId: 'rome', category: 'attraction', lat: 41.8902, lng: 12.4922, image: 'lUO-BjCiZEA', rating: 4.8, reviews: 61000, tags: ['history', 'unesco'], price: fixed(18, 'EUR'), hours: '08:30–19:00' },
  { id: 'trevi', destinationId: 'rome', category: 'attraction', lat: 41.9009, lng: 12.4833, image: 'R71bfM2BZiI', rating: 4.8, reviews: 48000, tags: ['architecture', 'romance'], price: free, hours: 'always' },
  // Barcelona
  { id: 'sagrada', destinationId: 'barcelona', category: 'attraction', lat: 41.4036, lng: 2.1744, image: 'tI8uk_EcJIA', rating: 4.8, reviews: 72000, tags: ['architecture', 'unesco'], price: fixed(26, 'EUR'), hours: '09:00–20:00' },
  { id: 'parkguell', destinationId: 'barcelona', category: 'nature', lat: 41.4145, lng: 2.1527, image: 'X4wcsMoc73o', rating: 4.6, reviews: 39000, tags: ['gardens', 'views', 'art'], price: fixed(18, 'EUR'), hours: '09:30–19:30' },
  { id: 'eixample', destinationId: 'barcelona', category: 'attraction', lat: 41.3917, lng: 2.1649, image: 'pm3O5KxWKtw', rating: 4.6, reviews: 8800, tags: ['architecture', 'shopping'], price: free },
  // Prague
  { id: 'charlesbridge', destinationId: 'prague', category: 'attraction', lat: 50.0865, lng: 14.4114, image: '68cHAtrDd1M', rating: 4.8, reviews: 31000, tags: ['history', 'views'], price: free, hours: 'always' },
  { id: 'praguecastle', destinationId: 'prague', category: 'attraction', lat: 50.0911, lng: 14.4016, image: '6En4WYsNYXM', rating: 4.7, reviews: 27000, tags: ['history', 'architecture'], price: fixed(450, 'CZK'), hours: '09:00–17:00' },
  { id: 'malastrana', destinationId: 'prague', category: 'attraction', lat: 50.0875, lng: 14.4036, image: 'yK_Uz7NGyu0', rating: 4.7, reviews: 6100, tags: ['architecture', 'nightlife'], price: free },
  // Swiss Alps
  { id: 'lauterbrunnen', destinationId: 'alps', category: 'nature', lat: 46.5935, lng: 7.9091, image: 'Um9FWEEf3Vk', rating: 4.9, reviews: 6100, tags: ['waterfalls', 'trekking'] },
  { id: 'matterhorn', destinationId: 'alps', category: 'nature', lat: 45.9763, lng: 7.6586, image: 'JSeROcGUxkY', rating: 4.9, reviews: 9400, tags: ['mountains', 'ski', 'photo'] },
  { id: 'riffelsee', destinationId: 'alps', category: 'nature', lat: 45.9873, lng: 7.7554, image: 'tDbCVk4bffM', rating: 4.9, reviews: 2700, tags: ['lakes', 'hiking', 'photo'], price: from(78, 'CHF') },
  { id: 'wengen', destinationId: 'alps', category: 'attraction', lat: 46.6083, lng: 7.9225, image: 'vBrdcXqWa4Q', rating: 4.8, reviews: 3300, tags: ['mountains', 'views'] },
  // Iceland
  { id: 'kirkjufell', destinationId: 'iceland', category: 'nature', lat: 64.9416, lng: -23.3058, image: 'FvkQso3yiOk', rating: 4.9, reviews: 4200, tags: ['waterfalls', 'aurora', 'photo'] },
  { id: 'bluelagoon', destinationId: 'iceland', category: 'attraction', lat: 63.8804, lng: -22.4495, image: 'RS9cTuqI7oo', rating: 4.5, reviews: 18000, tags: ['spa'], price: from(11990, 'ISK'), hours: '08:00–22:00' },
  // Tbilisi
  { id: 'narikala', destinationId: 'tbilisi', category: 'attraction', lat: 41.6875, lng: 44.8086, image: 'aRkTWJzoZfg', rating: 4.7, reviews: 8800, tags: ['history', 'views', 'sunset'], price: free, hours: 'always' },
  { id: 'oldtbilisi', destinationId: 'tbilisi', category: 'attraction', lat: 41.6914, lng: 44.8081, image: 'b-eGDk5_gPo', rating: 4.7, reviews: 6200, tags: ['architecture', 'wine', 'food'] },
  { id: 'abanotubani', destinationId: 'tbilisi', category: 'attraction', lat: 41.6879, lng: 44.8107, image: 'ZTTjG9CS0c0', rating: 4.6, reviews: 5100, tags: ['spa', 'history'], price: from(50, 'GEL') },
  // New York
  { id: 'brooklynbridge', destinationId: 'newyork', category: 'attraction', lat: 40.7061, lng: -73.9969, image: 'e49sSs3zotM', rating: 4.8, reviews: 52000, tags: ['views', 'sunset', 'architecture'], price: free, hours: 'always' },
  { id: 'centralpark', destinationId: 'newyork', category: 'nature', lat: 40.7829, lng: -73.9654, image: '-cTrOFIF12Q', rating: 4.8, reviews: 140000, tags: ['gardens'], price: free, hours: '06:00–01:00' },
  // Machu Picchu
  { id: 'citadel', destinationId: 'machupicchu', category: 'attraction', lat: -13.1631, lng: -72.545, image: 'bDaqeARFTkA', rating: 4.9, reviews: 23000, tags: ['history', 'unesco'], price: fixed(152, 'PEN'), hours: '06:00–17:30' },
  { id: 'rainbowmtn', destinationId: 'machupicchu', category: 'nature', lat: -13.869, lng: -71.303, image: 'hjanvZlqoB8', rating: 4.7, reviews: 6100, tags: ['trekking', 'mountains', 'photo'], price: fixed(25, 'PEN') },
  { id: 'incatrail', destinationId: 'machupicchu', category: 'nature', lat: -13.2263, lng: -72.4972, image: 'rFESpq5MMTg', rating: 4.9, reviews: 3800, tags: ['trekking', 'history'], price: from(700, 'USD') },
  // Rio
  { id: 'cristo', destinationId: 'rio', category: 'attraction', lat: -22.9519, lng: -43.2105, image: 'RSvKa3Jg3Z8', rating: 4.8, reviews: 61000, tags: ['views', 'history'], price: from(100, 'BRL'), hours: '08:00–19:00' },
  { id: 'sugarloaf', destinationId: 'rio', category: 'nature', lat: -22.9486, lng: -43.1566, image: 'GTLJklnjn-E', rating: 4.8, reviews: 42000, tags: ['views', 'sunset'], price: fixed(195, 'BRL'), hours: '08:00–21:00' },
  // Baikal
  { id: 'olkhon', destinationId: 'baikal', category: 'nature', lat: 53.1503, lng: 107.3434, image: 'PChvdQjvTO4', rating: 4.9, reviews: 4100, tags: ['lakes', 'winter', 'photo'] },
  { id: 'shamanka', destinationId: 'baikal', category: 'attraction', lat: 53.2042, lng: 107.3367, image: 'p-ry6hbOt5M', rating: 4.8, reviews: 3600, tags: ['views', 'history', 'sunset'], price: free },
  // Kamchatka
  { id: 'avachinsky', destinationId: 'kamchatka', category: 'nature', lat: 53.2557, lng: 158.8302, image: 'fD7cXIFurSQ', rating: 4.9, reviews: 1500, tags: ['volcanoes', 'trekking'] },
  { id: 'tolbachik', destinationId: 'kamchatka', category: 'nature', lat: 55.83, lng: 160.33, image: 'bAym4VVqVJg', rating: 4.9, reviews: 900, tags: ['volcanoes', 'adventure', 'photo'] },
  { id: 'gorely', destinationId: 'kamchatka', category: 'nature', lat: 52.5586, lng: 158.03, image: 'l6ZxnA-gkuU', rating: 4.8, reviews: 1100, tags: ['volcanoes', 'hiking'] },
  // Altai
  { id: 'katun', destinationId: 'altai', category: 'nature', lat: 51.4119, lng: 86.0034, image: 'F9UqMqRL46k', rating: 4.8, reviews: 2300, tags: ['nature', 'roadtrip', 'adventure'] },
  // Saint Petersburg
  { id: 'hermitage', destinationId: 'spb', category: 'attraction', lat: 59.9398, lng: 30.3146, image: 'XJAGZNTbgcw', rating: 4.9, reviews: 41000, tags: ['museums', 'art', 'history'], price: fixed(500, 'RUB'), hours: '10:30–18:00' },
  { id: 'spilledblood', destinationId: 'spb', category: 'attraction', lat: 59.94, lng: 30.3289, image: 'vPFAPO_OCyI', rating: 4.8, reviews: 26000, tags: ['architecture', 'history'], price: fixed(500, 'RUB'), hours: '10:30–18:00' },
  { id: 'peterhof', destinationId: 'spb', category: 'attraction', lat: 59.8858, lng: 29.9086, image: 'DSSczRGcbKM', rating: 4.9, reviews: 33000, tags: ['gardens', 'history'], price: from(1000, 'RUB'), hours: '09:00–20:00' },
  // Sochi
  { id: 'rosakhutor', destinationId: 'sochi', category: 'nature', lat: 43.6697, lng: 40.297, image: '_TkC2wzea6E', rating: 4.7, reviews: 12400, tags: ['ski', 'mountains', 'hiking'], price: from(1500, 'RUB') },
  // Teriberka
  { id: 'shipwrecks', destinationId: 'teriberka', category: 'attraction', lat: 69.1647, lng: 35.1414, image: '-2hMdb_p_P0', rating: 4.6, reviews: 1800, tags: ['photo', 'aurora'], price: free },
  { id: 'teriberkavillage', destinationId: 'teriberka', category: 'nature', lat: 69.17, lng: 35.15, image: '0b282nqfZQg', rating: 4.7, reviews: 1300, tags: ['nature', 'winter'] },
  // Dagestan
  { id: 'sulak', destinationId: 'dagestan', category: 'nature', lat: 43.0186, lng: 46.8303, image: 'F3Ma7KseiZ4', rating: 4.9, reviews: 3100, tags: ['canyon', 'views', 'kayak'] },
  { id: 'gamsutl', destinationId: 'dagestan', category: 'attraction', lat: 42.2944, lng: 46.9367, image: 'BNwjMOa-g_A', rating: 4.8, reviews: 1400, tags: ['history', 'hiking', 'mountains'], price: free },
];


export const categoryColor = {
  attraction: '#6366f1',
  food: '#f59e0b',
  hotel: '#0ea5e9',
  nature: '#10b981',
} as const;
