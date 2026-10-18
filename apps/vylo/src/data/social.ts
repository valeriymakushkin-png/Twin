import type { Guide, Meetup, Review, Story, User } from './types';

export const users: User[] = [
  { id: 'alex', name: 'Алекс Чен', handle: 'alexchen', avatar: '1507003211169-0a1dd7228f2d', home: 'Бангкок, Таиланд', bio: 'Путешествую по миру — одно место за раз. Природа, еда, культура.', trips: 42, places: 128, followers: 1240, countries: ['TH', 'ID', 'VN', 'JP', 'GE', 'TR', 'PT', 'FR', 'IT', 'MV', 'LK', 'AE'], verified: true, style: ['Природа', 'Еда'] },
  { id: 'sophie', name: 'Софи Мартен', handle: 'sophie.wanders', avatar: '1494790108377-be9c29b29330', home: 'Лиссабон, Португалия', bio: 'Пишу гиды по скрытым местам Азии. Кофе > сон.', trips: 37, places: 214, followers: 8900, countries: ['VN', 'TH', 'JP', 'PT', 'ES', 'FR', 'IT', 'GR', 'ID', 'KH', 'LA'], verified: true, style: ['Фото', 'Гиды'] },
  { id: 'maria', name: 'Мария Волкова', handle: 'masha.travels', avatar: '1438761681033-6461ffad8d80', home: 'Москва → Бали', bio: 'Дизайнер на удалёнке. Третий год живу между Бали и Тбилиси.', trips: 25, places: 96, followers: 3100, countries: ['ID', 'GE', 'TR', 'AE', 'TH', 'AM', 'RS', 'ME'], style: ['Номады', 'Сёрф'] },
  { id: 'kenji', name: 'Кэндзи Ито', handle: 'kenji.ito', avatar: '1500648767791-00dcc994a43e', home: 'Киото, Япония', bio: 'Покажу Киото, которого нет в путеводителях.', trips: 19, places: 74, followers: 2200, countries: ['JP', 'KR', 'TW', 'VN', 'TH', 'US'], verified: true, style: ['Культура', 'Еда'] },
  { id: 'lena', name: 'Лена Ким', handle: 'lenakim', avatar: '1534528741775-53994a69daeb', home: 'Сеул, Корея', bio: 'Хайкинг, горы и самые красивые рассветы.', trips: 31, places: 102, followers: 4700, countries: ['KR', 'JP', 'CH', 'IS', 'NO', 'PE', 'NP', 'NZ'], style: ['Горы', 'Треккинг'] },
  { id: 'david', name: 'Давид Беридзе', handle: 'david.tbs', avatar: '1506794778202-cad84cf45f1d', home: 'Тбилиси, Грузия', bio: 'Винодел и гид по Кахетии. Приезжайте в гости.', trips: 14, places: 58, followers: 1900, countries: ['GE', 'AM', 'TR', 'IT', 'FR'], style: ['Вино', 'Еда'] },
  { id: 'anna', name: 'Анна Лебедева', handle: 'annaleb', avatar: '1544005313-94ddf0286df2', home: 'Санкт-Петербург', bio: 'Соло-путешественница. 40 стран и не собираюсь останавливаться.', trips: 48, places: 187, followers: 12400, countries: ['TH', 'VN', 'ID', 'LK', 'IN', 'TR', 'GE', 'AE', 'EG', 'MA', 'PT', 'ES'], verified: true, style: ['Соло', 'Бюджет'] },
  { id: 'tom', name: 'Том Уокер', handle: 'tomwalks', avatar: '1472099645785-5658abf4ff4e', home: 'Лондон, Великобритания', bio: 'Бэкпекер. Ищу компанию для треков.', trips: 22, places: 66, followers: 870, countries: ['GB', 'PE', 'CO', 'MX', 'TH', 'VN'], style: ['Бэкпекинг'] },
  { id: 'nina', name: 'Нина Сато', handle: 'ninasato', avatar: '1517841905240-472988babdf9', home: 'Токио, Япония', bio: 'Фотограф. Ловлю свет в городах и горах.', trips: 28, places: 141, followers: 15200, countries: ['JP', 'IS', 'NO', 'CH', 'IT', 'GR'], verified: true, style: ['Фото'] },
  { id: 'max', name: 'Макс Орлов', handle: 'max.orlov', avatar: '1539571696357-5a69c17a67c6', home: 'Дубай, ОАЭ', bio: 'Кайт, дайвинг и всё, что связано с океаном.', trips: 33, places: 89, followers: 2600, countries: ['AE', 'MV', 'EG', 'LK', 'ID', 'TH', 'PH'], style: ['Дайвинг', 'Кайт'] },
  { id: 'eva', name: 'Ева Рохас', handle: 'evarojas', avatar: '1524504388940-b1c1722653e1', home: 'Лима, Перу', bio: 'Гид по Андам и Священной долине.', trips: 17, places: 63, followers: 1400, countries: ['PE', 'BO', 'CL', 'AR', 'BR', 'CO'], style: ['Треккинг', 'История'] },
  { id: 'zara', name: 'Зара Ахмед', handle: 'zara.a', avatar: '1531123897727-8f129e1688ce', home: 'Стамбул, Турция', bio: 'Кулинарные туры и рынки Стамбула.', trips: 20, places: 77, followers: 3300, countries: ['TR', 'GE', 'AE', 'MA', 'IT', 'GR'], style: ['Еда', 'Рынки'] },
];

export const userById = (id: string) => users.find((u) => u.id === id);

export const meetups: Meetup[] = [
  { id: 'm-uluwatu', title: 'Закат на Улувату', kind: 'sunset', destinationId: 'bali', placeName: 'Храм Улувату', lat: -8.8291, lng: 115.0849, image: '1544644181-1484b3fdfc62', startsInHours: 5, durationHours: 3, hostId: 'maria', attendeeIds: ['alex', 'anna', 'tom', 'sophie', 'max'], capacity: 20, description: 'Встречаемся у входа в храм, смотрим кечак и идём ужинать в варунг на Паданг-Паданг. Байки — можно подкинуть.', price: 'Бесплатно' },
  { id: 'm-coffee-cm', title: 'Кофе и коворкинг', kind: 'cowork', destinationId: 'bangkok', placeName: 'Too Fast To Sleep, Бангкок', lat: 13.7276, lng: 100.5314, image: '1497366216548-37526070297c', startsInHours: 20, durationHours: 4, hostId: 'alex', attendeeIds: ['maria', 'tom', 'nina'], capacity: 12, description: 'Работаем вместе, обмениваемся лайфхаками про визы и симки. После — обед в соседнем фуд-корте.' },
  { id: 'm-kelingking', title: 'Хайкинг к Келингкингу', kind: 'hike', destinationId: 'bali', placeName: 'Нуса Пенида', lat: -8.7509, lng: 115.4744, image: '1573790387438-4da905039392', startsInHours: 44, durationHours: 8, hostId: 'tom', attendeeIds: ['lena', 'anna', 'max', 'maria', 'sophie', 'kenji', 'eva', 'zara'], capacity: 16, description: 'Утренний фастбот из Санура в 7:30, спуск к пляжу и снорклинг с мантами. Общий транспорт делим.', price: '~$35 за лодку' },
  { id: 'm-fushimi', title: 'Ночная прогулка по Фусими Инари', kind: 'tour', destinationId: 'kyoto', placeName: 'Фусими Инари', lat: 34.9671, lng: 135.7727, image: '1478436127897-769e1b3f0f36', startsInHours: 28, durationHours: 3, hostId: 'kenji', attendeeIds: ['nina', 'sophie', 'lena'], capacity: 10, description: 'Поднимаемся на гору Инари в сумерках, когда фонари зажигаются, а толпы уходят. Расскажу легенды о лисах-кицунэ.' },
  { id: 'm-wine', title: 'Винный вечер в старом городе', kind: 'food', destinationId: 'tbilisi', placeName: 'Винный бар 8000 Vintages', lat: 41.6932, lng: 44.8072, image: '1510812431401-41d2bd2722f3', startsInHours: 9, durationHours: 3, hostId: 'david', attendeeIds: ['maria', 'zara', 'anna', 'alex'], capacity: 14, description: 'Дегустация квеври-вин из Кахетии и разговоры о том, куда поехать в горы.', price: '45 GEL' },
  { id: 'm-street', title: 'Стрит-фуд тур по Чайнатауну', kind: 'food', destinationId: 'bangkok', placeName: 'Яоварат, Бангкок', lat: 13.7408, lng: 100.5098, image: '1555217851-6141535bd771', startsInHours: 31, durationHours: 3, hostId: 'anna', attendeeIds: ['tom', 'max'], capacity: 8, description: '10 точек стрит-фуда: устричный омлет, свиные булочки, манго со сладким рисом. Приходите голодными.' },
  { id: 'm-balloons', title: 'Рассвет с шарами', kind: 'sunset', destinationId: 'cappadocia', placeName: 'Love Valley', lat: 38.6589, lng: 34.8235, image: '1570939274717-7eda259b50ed', startsInHours: 60, durationHours: 2, hostId: 'zara', attendeeIds: ['nina', 'lena', 'eva', 'david'], capacity: 25, description: 'Встречаем рассвет на холме над долиной — сотни шаров на уровне глаз. Термосы с чаем беру на себя.' },
  { id: 'm-dive', title: 'Дайв с мантами', kind: 'tour', destinationId: 'maldives', placeName: 'Маафуши', lat: 3.9425, lng: 73.4906, image: '1586861203927-800a5acdcc4d', startsInHours: 72, durationHours: 6, hostId: 'max', attendeeIds: ['alex', 'anna'], capacity: 8, description: 'Два погружения на станции чистки мантов. Нужен сертификат OW, остальным — снорклинг.', price: '$120' },
  { id: 'm-lisbon', title: 'Фаду и закат в Алфаме', kind: 'party', destinationId: 'lisbon', placeName: 'Мирадоуру Санта-Лузия', lat: 38.7118, lng: -9.1302, image: '1555881400-74d7acaacd8b', startsInHours: 16, durationHours: 4, hostId: 'sophie', attendeeIds: ['zara', 'tom', 'eva', 'kenji', 'nina'], capacity: 15, description: 'Закат на смотровой, потом маленький фаду-дом, где поют соседи. Без туристических шоу.' },
  { id: 'm-alps', title: 'Трек к водопадам Лаутербруннена', kind: 'hike', destinationId: 'alps', placeName: 'Лаутербруннен', lat: 46.5935, lng: 7.9091, image: '1527668752968-14dc70a27c95', startsInHours: 96, durationHours: 7, hostId: 'lena', attendeeIds: ['tom', 'nina'], capacity: 10, description: 'Средний по сложности маршрут 14 км через Венген к Мюррену. Обед на альпийской ферме.' },
];

export const guides: Guide[] = [
  {
    id: 'g-vietnam',
    title: '10 скрытых мест Вьетнама',
    subtitle: 'Без толп и туристических автобусов',
    authorId: 'sophie',
    destinationId: 'halong',
    image: '1528127269322-539801943592',
    likes: 2140,
    readMins: 7,
    placeIds: ['lanha', 'sungsot'],
    sections: [
      { title: 'Бухта Лан Ха вместо Халонга', body: 'Те же известняковые острова, но в 5 раз меньше лодок. Берите двухдневный круиз из Катба и обязательно каяк на рассвете.' },
      { title: 'Ха Жанг на мотоцикле', body: 'Петля Ха Жанг — 350 км серпантинов вдоль китайской границы. Если не водите — наймите easy rider, это недорого.' },
      { title: 'Хойан ночью', body: 'После 21:00 тургруппы уходят, а фонарики остаются. Возьмите велосипед и уезжайте к рисовым полям Тра Кюэ на рассвете.' },
    ],
  },
  {
    id: 'g-japan',
    title: 'Полный гид по Японии',
    subtitle: 'Маршрут на 14 дней: Токио — Киото — Осака',
    authorId: 'kenji',
    destinationId: 'tokyo',
    image: '1490806843957-31f4c9a91c65',
    likes: 5310,
    readMins: 12,
    placeIds: ['shibuya', 'sensoji', 'fushimi', 'arashiyama', 'ichiran'],
    sections: [
      { title: 'Токио: 5 дней', body: 'Асакуса и Сэнсо-дзи утром, Сибуя и Харадзюку днём, ночной Синдзюку. Один день — на Камакуру или Никко.' },
      { title: 'Киото: 4 дня', body: 'Фусими Инари на рассвете, Арасияма, Гион вечером. Живите в рёкане хотя бы одну ночь.' },
      { title: 'Транспорт', body: 'JR Pass подорожал — считайте маршрут. Для Токио — Киото — Осака часто выгоднее отдельные билеты на синкансэн.' },
    ],
  },
  {
    id: 'g-bali',
    title: 'Бали для номадов',
    subtitle: 'Где жить, работать и сёрфить',
    authorId: 'maria',
    destinationId: 'bali',
    image: '1518548419970-58e3b4079ab2',
    likes: 3870,
    readMins: 9,
    placeIds: ['canggu-cafe', 'tegallalang', 'uluwatu', 'locavore'],
    sections: [
      { title: 'Районы', body: 'Чангу — тусовка и кафе, Убуд — йога и джунгли, Улувату — сёрф и тишина. Начните с месяца в Чангу.' },
      { title: 'Связь и коворкинги', body: 'Telkomsel — лучшее покрытие. Коворкинги: Outpost, BWork, Tropical Nomad.' },
      { title: 'Визы', body: 'e-VOA на 30 дней с продлением ещё на 30. Для длинных историй — B211A через агента.' },
    ],
  },
  {
    id: 'g-georgia',
    title: 'Грузия за 7 дней',
    subtitle: 'Тбилиси, Кахетия и Казбеги',
    authorId: 'david',
    destinationId: 'tbilisi',
    image: '1565008576549-57569a49371d',
    likes: 1960,
    readMins: 6,
    placeIds: ['abanotubani', 'barbarestan'],
    sections: [
      { title: 'Тбилиси', body: 'Старый город, серные бани, Фабрика и рынок Сухой мост по выходным.' },
      { title: 'Кахетия', body: 'Сигнахи, монастырь Бодбе, винные погреба в Телави. Остановитесь у местной семьи.' },
      { title: 'Казбеги', body: 'Военно-Грузинская дорога, Гергети и Троица на рассвете. В октябре — золото листвы.' },
    ],
  },
  {
    id: 'g-iceland',
    title: 'Охота за северным сиянием',
    subtitle: 'Когда, где и как фотографировать',
    authorId: 'nina',
    destinationId: 'iceland',
    image: '1531366936337-7c912a4589a7',
    likes: 4420,
    readMins: 8,
    placeIds: ['kirkjufell', 'bluelagoon'],
    sections: [
      { title: 'Когда', body: 'С сентября по март, при KP-индексе от 3 и ясном небе. Следите за прогнозом облачности на vedur.is.' },
      { title: 'Где', body: 'Подальше от Рейкьявика: Тингвеллир, Киркьюфетль, Йокульсаурлоун.' },
      { title: 'Настройки камеры', body: 'Штатив, ISO 1600–3200, диафрагма f/2.8, выдержка 5–15 секунд, ручной фокус на бесконечность.' },
    ],
  },
  {
    id: 'g-lisbon',
    title: 'Лиссабон как местный',
    subtitle: 'Мирадоуру, тасканы и фаду',
    authorId: 'sophie',
    destinationId: 'lisbon',
    image: '1513735492246-483525079686',
    likes: 1730,
    readMins: 5,
    placeIds: ['senhora', 'pasteis', 'belem'],
    sections: [
      { title: 'Смотровые', body: 'Сеньора-ду-Монти на закате, Санта-Катарина с гитаристами, Граса с кофе.' },
      { title: 'Еда', body: 'Бифана в Конфейтария, паштел в Белене, морепродукты в Cervejaria Ramiro.' },
    ],
  },
];

export const guideById = (id: string) => guides.find((g) => g.id === id);

export const reviews: Review[] = [
  { id: 'r1', targetId: 'phiphi', authorId: 'alex', rating: 5, text: 'Невероятный вид! Подъём занимает 30 минут, но он того стоит. Приходите на рассвете — будете почти одни.', daysAgo: 2, likes: 48, photos: ['1519451241324-20b4ea2c4220'] },
  { id: 'r2', targetId: 'bali', authorId: 'maria', rating: 5, text: 'Третий год здесь и до сих пор влюблена. Совет: уезжайте на север — Сидемен и Мундук совсем другой Бали.', daysAgo: 5, likes: 112 },
  { id: 'r3', targetId: 'uluwatu', authorId: 'anna', rating: 5, text: 'Кечак на закате — мурашки! Обезьяна утащила у соседа очки, будьте внимательны 🙈', daysAgo: 1, likes: 31, photos: ['1544644181-1484b3fdfc62'] },
  { id: 'r4', targetId: 'tokyo', authorId: 'nina', rating: 5, text: 'Город, в котором можно жить вечно. Ночная Сибуя с крыши Shibuya Sky — лучший вид.', daysAgo: 3, likes: 87 },
  { id: 'r5', targetId: 'fushimi', authorId: 'kenji', rating: 5, text: 'Поднимитесь выше перекрёстка Ёцуцудзи — 90% туристов разворачиваются раньше.', daysAgo: 7, likes: 140 },
  { id: 'r6', targetId: 'tbilisi', authorId: 'david', rating: 5, text: 'Мой город 💛 Обязательно попробуйте хачапури по-аджарски в Сакхачапуре №1.', daysAgo: 4, likes: 56 },
  { id: 'r7', targetId: 'kelingking', authorId: 'tom', rating: 4, text: 'Спуск жёсткий, обязательно кроссовки. Но пляж внизу — лучший в Азии.', daysAgo: 6, likes: 22 },
  { id: 'r8', targetId: 'cappadocia', authorId: 'zara', rating: 5, text: 'Полёт перенесли два раза из-за ветра, но третий рассвет того стоил. Берите запасные дни!', daysAgo: 9, likes: 64, photos: ['1570939274717-7eda259b50ed'] },
  { id: 'r9', targetId: 'lisbon', authorId: 'sophie', rating: 5, text: 'Лучший город Европы для жизни. Мирадоуру Граса — мой ежедневный ритуал с кофе.', daysAgo: 2, likes: 73 },
  { id: 'r10', targetId: 'maldives', authorId: 'max', rating: 5, text: 'Манты, черепахи и рифовые акулы в одном погружении. Маафуши — отличная база.', daysAgo: 11, likes: 39 },
  { id: 'r11', targetId: 'santorini', authorId: 'nina', rating: 4, text: 'Красиво до слёз, но в Ии на закате толпа. Имеровигли — мой выбор.', daysAgo: 14, likes: 58 },
  { id: 'r12', targetId: 'tegallalang', authorId: 'lena', rating: 5, text: 'В 7 утра здесь только туман и фермеры. Качели — ловушка для туристов, пропустите.', daysAgo: 8, likes: 27 },
  { id: 'r13', targetId: 'iceland', authorId: 'lena', rating: 5, text: 'Сияние увидели на третью ночь у Киркьюфетля. Тёплая одежда и терпение!', daysAgo: 20, likes: 91 },
  { id: 'r14', targetId: 'istanbul', authorId: 'zara', rating: 5, text: 'Возьмите паром до Кадыкёя на закате — лучший бюджетный круиз в мире.', daysAgo: 3, likes: 44 },
];

export const stories: Story[] = [
  { id: 's1', userId: 'maria', image: '1518548419970-58e3b4079ab2', location: 'Чангу, Бали', caption: 'Утренний сёрф и кокос 🥥' },
  { id: 's2', userId: 'kenji', image: '1493976040374-85c8e12f0c0e', location: 'Киото', caption: 'Осень начинается в храмах' },
  { id: 's3', userId: 'nina', image: '1531366936337-7c912a4589a7', location: 'Исландия', caption: 'KP 6 этой ночью!' },
  { id: 's4', userId: 'anna', image: '1528181304800-259b08848526', location: 'Бангкок', caption: 'Ват Пхо до толп' },
  { id: 's5', userId: 'zara', image: '1570939274717-7eda259b50ed', location: 'Каппадокия', caption: '150 шаров сегодня 🎈' },
  { id: 's6', userId: 'lena', image: '1464822759023-fed622ff2c3b', location: 'Альпы', caption: 'Вершина взята' },
  { id: 's7', userId: 'max', image: '1514282401047-d79a71a590e8', location: 'Мальдивы', caption: 'Манта на 2 метра!' },
  { id: 's8', userId: 'david', image: '1565008576549-57569a49371d', location: 'Тбилиси', caption: 'Ртвели в Кахетии 🍇' },
];
