import type { Place } from './types';

type Seed = Omit<Place, 'gallery' | 'tips'> & { gallery?: string[]; tips?: string[] };

const seeds: Seed[] = [
  // Bali
  { id: 'uluwatu', destinationId: 'bali', name: 'Храм Улувату', category: 'attraction', lat: -8.8291, lng: 115.0849, image: '1544644181-1484b3fdfc62', rating: 4.8, reviews: 6210, tags: ['Храм', 'Закат', 'Скалы'], description: 'Храм XI века на 70-метровом обрыве над океаном. На закате здесь проходит танец кечак под гул прибоя.', price: '50 000 IDR', hours: '07:00 — 19:00', tips: ['Держите очки и телефон крепче — местные макаки очень ловкие.', 'Билеты на кечак продают с 17:00.'] },
  { id: 'tegallalang', destinationId: 'bali', name: 'Террасы Тегаллаланг', category: 'nature', lat: -8.4312, lng: 115.2793, image: '1555400038-63f5ba517a47', rating: 4.7, reviews: 8930, tags: ['Террасы', 'Фото', 'Убуд'], description: 'Каскад рисовых террас в джунглях к северу от Убуда, с качелями и кафе на склонах.', price: '25 000 IDR', hours: '08:00 — 18:00', tips: ['Приходите к 7:30 — туман и пустые тропинки.'] },
  { id: 'kelingking', destinationId: 'bali', name: 'Пляж Келингкинг', category: 'nature', lat: -8.7509, lng: 115.4744, image: '1573790387438-4da905039392', rating: 4.9, reviews: 7420, tags: ['Нуса Пенида', 'Вид', 'Хайкинг'], description: 'Скала в форме динозавра на Нуса Пениде и крутая тропа к одному из самых красивых пляжей Азии.', hours: 'Круглосуточно', tips: ['Спуск занимает ~40 минут: нужны кроссовки и вода.'] },
  { id: 'locavore', destinationId: 'bali', name: 'Locavore NXT', category: 'food', lat: -8.5069, lng: 115.2625, image: '1414235077428-338989a2e8c0', rating: 4.8, reviews: 1240, tags: ['Гастро', 'Сет', 'Убуд'], description: 'Дегустационный сет из местных продуктов — один из лучших ресторанов Азии.', price: '$$$', hours: '18:00 — 23:00' },
  { id: 'ayana', destinationId: 'bali', name: 'AYANA Resort', category: 'hotel', lat: -8.7838, lng: 115.1366, image: '1566073771259-6a8506099945', rating: 4.7, reviews: 3380, tags: ['Курорт', 'Rock Bar'], description: 'Курорт на скалах Джимбарана с легендарным Rock Bar над океаном.', price: 'от $320/ночь' },
  { id: 'canggu-cafe', destinationId: 'bali', name: 'Crate Café, Чангу', category: 'food', lat: -8.6508, lng: 115.1375, image: '1521017432531-fbd92d768814', rating: 4.6, reviews: 2870, tags: ['Завтраки', 'Номады'], description: 'Культовое кафе сёрферов и номадов: смузи-боулы, кофе и шумные завтраки.', price: '$', hours: '06:30 — 15:00' },

  // Phi Phi / Krabi
  { id: 'mayabay', destinationId: 'phiphi', name: 'Бухта Майя Бэй', category: 'nature', lat: 7.6779, lng: 98.7663, image: '1589394815804-964ed0be2eb5', rating: 4.8, reviews: 9850, tags: ['Пляж', 'Пхи-Пхи Ле'], description: 'Знаменитая бухта из фильма «Пляж» в окружении отвесных скал. Купание запрещено ради восстановления кораллов.', price: '400 THB', hours: '07:00 — 16:00' },
  { id: 'viewpoint', destinationId: 'phiphi', name: 'Смотровая Пхи-Пхи', category: 'attraction', lat: 7.7406, lng: 98.7758, image: '1519451241324-20b4ea2c4220', rating: 4.9, reviews: 5640, tags: ['Вид', 'Рассвет'], description: 'Вид на перешеек Тонсай с двумя бухтами — самая узнаваемая панорама Таиланда.', price: '50 THB' },
  { id: 'railay', destinationId: 'phiphi', name: 'Пляж Рейли', category: 'nature', lat: 8.0115, lng: 98.8378, image: '1504214208698-ea1916a2195a', rating: 4.8, reviews: 2400, tags: ['Пляж', 'Скалолазание'], description: 'Полуостров, куда можно попасть только на лодке: скалы, скалолазание и закаты на западном пляже.' },
  { id: 'zeavola', destinationId: 'phiphi', name: 'Zeavola Resort', category: 'hotel', lat: 7.7768, lng: 98.7686, image: '1582719478250-c89cae4dc85b', rating: 4.8, reviews: 1890, tags: ['Бунгало', 'Тишина'], description: 'Тиковые виллы у пляжа Лаэм Тонг на тихом севере острова.', price: 'от $260/ночь' },

  // Bangkok
  { id: 'watarun', destinationId: 'bangkok', name: 'Ват Арун', category: 'attraction', lat: 13.7437, lng: 100.4889, image: '1563492065599-3520f775eeed', rating: 4.7, reviews: 11200, tags: ['Храм', 'Река'], description: 'Храм Утренней Зари на берегу Чао Прайи, украшенный фарфоровой мозаикой.', price: '200 THB', hours: '08:00 — 18:00' },
  { id: 'jayfai', destinationId: 'bangkok', name: 'Jay Fai', category: 'food', lat: 13.7527, lng: 100.5045, image: '1559314809-0d155014e29e', rating: 4.6, reviews: 3100, tags: ['Стрит-фуд', 'Мишлен'], description: 'Уличная кухня со звездой Мишлен: легендарный омлет с крабом от шефа в лыжных очках.', price: '$$' },

  // Tokyo
  { id: 'shibuya', destinationId: 'tokyo', name: 'Перекрёсток Сибуя', category: 'attraction', lat: 35.6595, lng: 139.7005, image: '1542051841857-5f90071e7989', rating: 4.6, reviews: 14200, tags: ['Город', 'Неон'], description: 'Самый оживлённый пешеходный перекрёсток в мире. Лучший вид — со смотровой Shibuya Sky.' },
  { id: 'sensoji', destinationId: 'tokyo', name: 'Храм Сэнсо-дзи', category: 'attraction', lat: 35.7148, lng: 139.7967, image: '1536098561742-ca998e48cbcc', rating: 4.7, reviews: 12800, tags: ['Храм', 'Асакуса'], description: 'Старейший храм Токио с воротами Каминаримон и торговой улицей Накамисэ.', hours: '06:00 — 17:00' },
  { id: 'ichiran', destinationId: 'tokyo', name: 'Ichiran Ramen', category: 'food', lat: 35.6938, lng: 139.7034, image: '1569718212165-3a8278d5f624', rating: 4.5, reviews: 9800, tags: ['Рамен', '24/7'], description: 'Тонкоцу-рамен в индивидуальных кабинках — идеально после ночного Синдзюку.', price: '$', hours: 'Круглосуточно' },
  { id: 'parkhyatt', destinationId: 'tokyo', name: 'Park Hyatt Tokyo', category: 'hotel', lat: 35.6856, lng: 139.6907, image: '1571896349842-33c89424de2d', rating: 4.8, reviews: 2600, tags: ['Вид', 'Lost in Translation'], description: 'Отель из «Трудностей перевода» с баром на 52 этаже и видом на Фудзи.', price: 'от $650/ночь' },

  // Kyoto
  { id: 'fushimi', destinationId: 'kyoto', name: 'Фусими Инари', category: 'attraction', lat: 34.9671, lng: 135.7727, image: '1478436127897-769e1b3f0f36', rating: 4.9, reviews: 15400, tags: ['Тории', 'Хайкинг'], description: 'Тысячи оранжевых ворот тории, уходящих тропами на гору Инари.', price: 'Бесплатно', hours: 'Круглосуточно' },
  { id: 'arashiyama', destinationId: 'kyoto', name: 'Бамбуковая роща Арасияма', category: 'nature', lat: 35.017, lng: 135.6713, image: '1528360983277-13d401cdc186', rating: 4.6, reviews: 10200, tags: ['Бамбук', 'Прогулка'], description: 'Тропа среди 20-метровых стеблей бамбука, шелестящих на ветру.', price: 'Бесплатно' },

  // Halong
  { id: 'lanha', destinationId: 'halong', name: 'Бухта Лан Ха', category: 'nature', lat: 20.75, lng: 107.05, image: '1559592413-7cec4d0cae2b', rating: 4.8, reviews: 3200, tags: ['Каяки', 'Круиз'], description: 'Тихая соседка Халонга: лагуны, пещеры и плавучие деревни без толп.' },
  { id: 'sungsot', destinationId: 'halong', name: 'Пещера Сунг Сот', category: 'attraction', lat: 20.8556, lng: 107.0886, image: '1557750255-c76072a7aad1', rating: 4.5, reviews: 4100, tags: ['Пещера'], description: 'Одна из крупнейших пещер бухты с гигантскими залами и сталактитами.' },

  // Lisbon
  { id: 'belem', destinationId: 'lisbon', name: 'Башня Белен', category: 'attraction', lat: 38.6916, lng: -9.216, image: '1513735492246-483525079686', rating: 4.6, reviews: 13200, tags: ['История', 'Мануэлино'], description: 'Символ эпохи великих открытий на берегу Тежу.', price: '€8' },
  { id: 'pasteis', destinationId: 'lisbon', name: 'Pastéis de Belém', category: 'food', lat: 38.6975, lng: -9.2032, image: '1588535684040-2c6c4d4a4f6a', rating: 4.8, reviews: 21000, tags: ['Десерт', 'С 1837'], description: 'Та самая кондитерская, где пекут паштел-де-ната по секретному рецепту с 1837 года.', price: '$' },
  { id: 'senhora', destinationId: 'lisbon', name: 'Мирадоуру Сеньора-ду-Монти', category: 'attraction', lat: 38.7193, lng: -9.1326, image: '1555881400-74d7acaacd8b', rating: 4.8, reviews: 5400, tags: ['Вид', 'Закат'], description: 'Самая высокая смотровая площадка Лиссабона — лучшие закаты над крышами.', price: 'Бесплатно' },

  // Santorini
  { id: 'oia', destinationId: 'santorini', name: 'Деревня Ия', category: 'attraction', lat: 36.4618, lng: 25.3753, image: '1613395877344-13d4a8e0d49e', rating: 4.9, reviews: 16700, tags: ['Закат', 'Фото'], description: 'Белые дома и синие купола на краю кальдеры — открытка Санторини.' },
  { id: 'canaves', destinationId: 'santorini', name: 'Canaves Oia', category: 'hotel', lat: 36.4625, lng: 25.3744, image: '1520250497591-112f2f40a3f4', rating: 4.9, reviews: 1500, tags: ['Инфинити-бассейн'], description: 'Пещерные сьюты с бассейнами над кальдерой.', price: 'от $900/ночь' },

  // Istanbul & Cappadocia
  { id: 'hagiasophia', destinationId: 'istanbul', name: 'Айя-София', category: 'attraction', lat: 41.0086, lng: 28.9802, image: '1541432901042-2d8bd64b4a9b', rating: 4.8, reviews: 34000, tags: ['История', 'Архитектура'], description: 'Полторы тысячи лет истории под одним куполом.', price: '€25' },
  { id: 'karakoy', destinationId: 'istanbul', name: 'Karaköy Lokantası', category: 'food', lat: 41.0233, lng: 28.9782, image: '1504674900247-0877df9cc836', rating: 4.6, reviews: 4200, tags: ['Турецкая кухня', 'Мезе'], description: 'Классика стамбульской кухни в бирюзовом интерьере.', price: '$$' },
  { id: 'goreme', destinationId: 'cappadocia', name: 'Долина Гёреме', category: 'nature', lat: 38.6431, lng: 34.8289, image: '1641128324972-af3212f0f6bd', rating: 4.9, reviews: 8800, tags: ['Шары', 'Рассвет'], description: 'Столица воздушных шаров: каменные «дымоходы фей» и пещерные церкви.' },
  { id: 'museumhotel', destinationId: 'cappadocia', name: 'Museum Hotel', category: 'hotel', lat: 38.6329, lng: 34.8048, image: '1600240644455-3edc55c375fe', rating: 4.9, reviews: 1700, tags: ['Пещеры', 'Вид на шары'], description: 'Пещерный отель с бассейном и видом на сотни шаров на рассвете.', price: 'от $400/ночь' },

  // Tbilisi
  { id: 'abanotubani', destinationId: 'tbilisi', name: 'Абанотубани', category: 'attraction', lat: 41.6879, lng: 44.8107, image: '1561731216-c3a4d99437d5', rating: 4.6, reviews: 5100, tags: ['Бани', 'Старый город'], description: 'Квартал серных бань под кирпичными куполами у крепости Нарикала.' },
  { id: 'barbarestan', destinationId: 'tbilisi', name: 'Barbarestan', category: 'food', lat: 41.7105, lng: 44.8024, image: '1540189549336-e6e99c3679fe', rating: 4.8, reviews: 3900, tags: ['Грузинская кухня', 'Вино'], description: 'Рецепты из кулинарной книги княгини XIX века и прекрасная винная карта.', price: '$$' },

  // Dubai & Maldives
  { id: 'burj', destinationId: 'dubai', name: 'Бурдж-Халифа', category: 'attraction', lat: 25.1972, lng: 55.2744, image: '1546412414-e1885259563a', rating: 4.7, reviews: 41000, tags: ['Небоскрёб', 'Вид'], description: 'Самое высокое здание мира и смотровая на 148 этаже.', price: 'от 169 AED' },
  { id: 'desert', destinationId: 'dubai', name: 'Пустыня Аль-Мархум', category: 'nature', lat: 24.9657, lng: 55.5944, image: '1509316785289-025f5b846b35', rating: 4.8, reviews: 2200, tags: ['Сафари', 'Дюны'], description: 'Заповедные дюны для рассветного сафари, верблюдов и ужина под звёздами.' },
  { id: 'maafushi', destinationId: 'maldives', name: 'Остров Маафуши', category: 'nature', lat: 3.9425, lng: 73.4906, image: '1573843981267-be1999ff37cd', rating: 4.5, reviews: 3100, tags: ['Местный остров', 'Бюджет'], description: 'Самый популярный местный остров с бикини-пляжем и экскурсиями к мантам.' },
  { id: 'soneva', destinationId: 'maldives', name: 'Soneva Jani', category: 'hotel', lat: 5.7333, lng: 73.4167, image: '1540202404-a2f29016b523', rating: 4.9, reviews: 980, tags: ['Вилла над водой', 'Горка'], description: 'Виллы над лагуной с горками прямо в океан и открывающейся крышей для звёзд.', price: 'от $2400/ночь' },

  // Iceland, Paris, Rome, Alps, Peru, NYC, Sri Lanka
  { id: 'kirkjufell', destinationId: 'iceland', name: 'Гора Киркьюфетль', category: 'nature', lat: 64.9416, lng: -23.3058, image: '1476610182048-b716b8518aae', rating: 4.9, reviews: 4200, tags: ['Водопад', 'Сияние'], description: 'Самая фотографируемая гора Исландии с водопадом на переднем плане.' },
  { id: 'bluelagoon', destinationId: 'iceland', name: 'Голубая лагуна', category: 'attraction', lat: 63.8804, lng: -22.4495, image: '1520769945061-0a448c463865', rating: 4.5, reviews: 18000, tags: ['Термы', 'СПА'], description: 'Геотермальная лагуна молочно-голубого цвета посреди лавовых полей.', price: 'от €70' },
  { id: 'eiffel', destinationId: 'paris', name: 'Эйфелева башня', category: 'attraction', lat: 48.8584, lng: 2.2945, image: '1499856871958-5b9627545d1a', rating: 4.7, reviews: 52000, tags: ['Символ', 'Вид'], description: 'Каждый час после заката башня 5 минут мерцает тысячами огней.', price: 'от €14' },
  { id: 'colosseum', destinationId: 'rome', name: 'Колизей', category: 'attraction', lat: 41.8902, lng: 12.4922, image: '1552832230-c0197dd311b5', rating: 4.8, reviews: 61000, tags: ['История', 'ЮНЕСКО'], description: 'Амфитеатр на 50 000 зрителей — сердце Древнего Рима.', price: '€18' },
  { id: 'lauterbrunnen', destinationId: 'alps', name: 'Долина Лаутербруннен', category: 'nature', lat: 46.5935, lng: 7.9091, image: '1527668752968-14dc70a27c95', rating: 4.9, reviews: 6100, tags: ['Водопады', 'Треккинг'], description: 'Долина 72 водопадов — вдохновение для Ривенделла Толкина.' },
  { id: 'machu', destinationId: 'machupicchu', name: 'Цитадель Мачу-Пикчу', category: 'attraction', lat: -13.1631, lng: -72.545, image: '1587595431973-160d0d94add1', rating: 4.9, reviews: 23000, tags: ['Инки', 'ЮНЕСКО'], description: 'Город инков XV века, скрытый в облаках Анд.', price: '152 PEN' },
  { id: 'centralpark', destinationId: 'newyork', name: 'Центральный парк', category: 'nature', lat: 40.7829, lng: -73.9654, image: '1534430480872-3498386e7856', rating: 4.8, reviews: 140000, tags: ['Парк', 'Пикник'], description: '340 гектаров зелени посреди Манхэттена.', price: 'Бесплатно' },
  { id: 'ella', destinationId: 'srilanka', name: 'Девятиарочный мост', category: 'attraction', lat: 6.8768, lng: 81.0608, image: '1566296314736-6eaac1ca0cb9', rating: 4.7, reviews: 7200, tags: ['Поезд', 'Джунгли'], description: 'Колониальный мост среди чайных плантаций — приходите к проходу поезда.' },
];

export const places: Place[] = seeds.map((s) => ({ ...s, gallery: s.gallery ?? [], tips: s.tips ?? [] }));

export const placeById = (id: string) => places.find((p) => p.id === id);
export const placesIn = (destinationId: string) => places.filter((p) => p.destinationId === destinationId);

export const categoryMeta = {
  attraction: { label: 'Достопримечательности', short: 'Места', color: '#6366f1' },
  food: { label: 'Еда', short: 'Еда', color: '#f59e0b' },
  hotel: { label: 'Отели', short: 'Отели', color: '#0ea5e9' },
  nature: { label: 'Природа', short: 'Природа', color: '#10b981' },
} as const;
