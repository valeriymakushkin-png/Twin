import type { CityPack } from '../types';
import { fixed, free, level, makeDay, makePlace } from './_kit.ts';

const P = makePlace('bangkok');
const D = makeDay('bangkok');
// Photos: the city's own catalogue photos until dedicated ones are added in the admin console.
const TEMPLE = '5zyfWDX-NVo';
const CITY = '66yS6ZmJals';
const FOOD = 'k8dwH-poJ2c';
const MARKET = 'CF33GT7iM9c';

const pack: CityPack = {
  country: 'TH',
  city: 'bangkok',
  places: [
    // ——— Sights ———
    P('wat-saket', 'attraction', 13.7538, 100.5067, TEMPLE, 4.6, 18400, ['temples', 'views', 'sunset'], {
      ru: ['Золотая гора (Ват Сакет)', 'Храм на рукотворном холме: 344 ступени вдоль колоколов приводят к золотой ступе с круговым видом на старый Бангкок.', 'Поднимайтесь за час до заката — внизу как раз зажигается город.'],
      en: ['Golden Mount (Wat Saket)', 'A temple on a man-made hill: 344 steps past rows of bells lead to a golden stupa with a 360° view over old Bangkok.', 'Climb an hour before sunset, as the city lights come on below.'],
      es: ['Monte Dorado (Wat Saket)', 'Un templo sobre una colina artificial: 344 escalones entre campanas llevan a una estupa dorada con vistas de 360° del viejo Bangkok.', 'Sube una hora antes del atardecer, cuando se encienden las luces.'],
      de: ['Goldener Berg (Wat Saket)', 'Ein Tempel auf einem künstlichen Hügel: 344 Stufen vorbei an Glocken führen zu einem goldenen Stupa mit Rundblick über das alte Bangkok.', 'Eine Stunde vor Sonnenuntergang hinaufsteigen, wenn unten die Lichter angehen.'],
      fr: ['Mont d’Or (Wat Saket)', 'Un temple sur une colline artificielle : 344 marches bordées de cloches mènent à un stupa doré avec une vue à 360° sur le vieux Bangkok.', 'Montez une heure avant le coucher du soleil, quand la ville s’illumine.'],
      it: ['Monte d’Oro (Wat Saket)', 'Un tempio su una collina artificiale: 344 gradini tra file di campane portano a uno stupa dorato con vista a 360° sulla vecchia Bangkok.', 'Sali un’ora prima del tramonto, quando la città si accende.'],
    }, { spot: 'insta', price: fixed(100, 'THB'), hours: '07:00–19:00' }),
    P('jim-thompson-house', 'attraction', 13.7493, 100.5281, CITY, 4.5, 15200, ['architecture', 'art', 'history'], {
      ru: ['Дом Джима Томпсона', 'Шесть тиковых домов американского шёлкового магната в тропическом саду у канала — коллекция азиатского искусства и тайна его исчезновения.', 'Вход только с экскурсией; приходите с утра, пока прохладно.'],
      en: ['Jim Thompson House', 'Six teak houses of the American silk magnate in a tropical garden by a canal — an Asian art collection and the mystery of his disappearance.', 'Entry is by guided tour only; come in the morning while it’s cool.'],
      es: ['Casa de Jim Thompson', 'Seis casas de teca del magnate estadounidense de la seda en un jardín tropical junto a un canal: arte asiático y el misterio de su desaparición.', 'Solo se visita con guía; ven por la mañana, con fresco.'],
      de: ['Jim Thompson House', 'Sechs Teakhäuser des amerikanischen Seidenkönigs in einem Tropengarten am Kanal – asiatische Kunst und das Rätsel seines Verschwindens.', 'Nur mit Führung; am besten morgens, solange es kühl ist.'],
      fr: ['Maison de Jim Thompson', 'Six maisons en teck du magnat américain de la soie dans un jardin tropical au bord d’un canal : art asiatique et mystère de sa disparition.', 'Visite guidée uniquement ; venez le matin, à la fraîche.'],
      it: ['Casa di Jim Thompson', 'Sei case in teak del magnate americano della seta in un giardino tropicale sul canale: arte asiatica e il mistero della sua scomparsa.', 'Si visita solo con guida; vieni la mattina, col fresco.'],
    }, { price: fixed(200, 'THB'), hours: '10:00–18:00', address: '6 Soi Kasemsan 2, Rama I Rd' }),
    P('wat-benchamabophit', 'attraction', 13.7665, 100.5143, TEMPLE, 4.6, 9800, ['temples', 'architecture'], {
      ru: ['Мраморный храм (Ват Бенчамабопит)', 'Храм из каррарского мрамора с витражами — одна из самых изящных работ эпохи Рамы V; во дворе галерея из 52 статуй Будды.', 'Ранним утром монахи собирают подаяния прямо у ворот.'],
      en: ['Marble Temple (Wat Benchamabophit)', 'A temple of Carrara marble with stained glass, one of the finest works of the Rama V era; its cloister holds 52 Buddha images.', 'Early in the morning monks collect alms right at the gate.'],
      es: ['Templo de Mármol (Wat Benchamabophit)', 'Un templo de mármol de Carrara con vidrieras, de lo más elegante de la época de Rama V; su claustro guarda 52 budas.', 'A primera hora los monjes recogen limosnas en la puerta.'],
      de: ['Marmortempel (Wat Benchamabophit)', 'Ein Tempel aus Carrara-Marmor mit Buntglas, eines der schönsten Werke der Rama-V-Zeit; im Kreuzgang stehen 52 Buddhas.', 'Frühmorgens sammeln Mönche direkt am Tor Almosen.'],
      fr: ['Temple de marbre (Wat Benchamabophit)', 'Un temple en marbre de Carrare aux vitraux, l’un des plus raffinés de l’ère Rama V ; son cloître abrite 52 bouddhas.', 'Tôt le matin, les moines font l’aumône devant la porte.'],
      it: ['Tempio di marmo (Wat Benchamabophit)', 'Un tempio in marmo di Carrara con vetrate, tra i più eleganti dell’epoca di Rama V; il chiostro ospita 52 Buddha.', 'Al mattino presto i monaci raccolgono le offerte al cancello.'],
    }),
    P('chatuchak', 'attraction', 13.7998, 100.5506, MARKET, 4.5, 64200, ['market', 'shopping', 'food'], {
      ru: ['Рынок Чатучак', 'Огромный выходной рынок: больше 15 000 лавок с одеждой, керамикой, растениями, винтажем и уличной едой.', 'Работает в субботу и воскресенье; приезжайте к открытию на метро MRT Kamphaeng Phet.'],
      en: ['Chatuchak Weekend Market', 'A vast weekend market: over 15,000 stalls of clothes, ceramics, plants, vintage and street food.', 'Open Saturday and Sunday; arrive at opening via MRT Kamphaeng Phet.'],
      es: ['Mercado de Chatuchak', 'Un enorme mercado de fin de semana: más de 15 000 puestos de ropa, cerámica, plantas, objetos vintage y comida callejera.', 'Abre sábado y domingo; llega a primera hora en el MRT Kamphaeng Phet.'],
      de: ['Chatuchak-Wochenendmarkt', 'Ein riesiger Wochenendmarkt: über 15 000 Stände mit Kleidung, Keramik, Pflanzen, Vintage und Streetfood.', 'Samstags und sonntags; zur Öffnung mit der MRT bis Kamphaeng Phet fahren.'],
      fr: ['Marché de Chatuchak', 'Un immense marché du week-end : plus de 15 000 échoppes de vêtements, céramiques, plantes, vintage et cuisine de rue.', 'Ouvert samedi et dimanche ; arrivez à l’ouverture par le MRT Kamphaeng Phet.'],
      it: ['Mercato di Chatuchak', 'Un enorme mercato del weekend: oltre 15 000 bancarelle di abiti, ceramiche, piante, vintage e street food.', 'Aperto sabato e domenica; arriva all’apertura con la MRT Kamphaeng Phet.'],
    }, { price: free, hours: '09:00–18:00' }),
    P('lumphini-park', 'nature', 13.7307, 100.5418, CITY, 4.6, 52100, ['gardens', 'nature'], {
      ru: ['Парк Люмпини', 'Зелёное сердце делового Бангкока: озеро с лодками, беговые дорожки и огромные вараны, которые неспешно гуляют по газонам.', 'Лучшее время — с 16:00, когда спадает жара и начинается вечерняя аэробика.'],
      en: ['Lumphini Park', 'The green heart of business Bangkok: a lake with paddle boats, running tracks and huge monitor lizards strolling across the lawns.', 'Best after 4 pm, when the heat eases and the evening aerobics begin.'],
      es: ['Parque Lumphini', 'El corazón verde del Bangkok de negocios: lago con barcas, pistas para correr y enormes varanos paseando por el césped.', 'Mejor desde las 16:00, cuando baja el calor y empieza el aeróbic vespertino.'],
      de: ['Lumphini-Park', 'Das grüne Herz des Geschäftsviertels: ein See mit Tretbooten, Laufstrecken und riesige Warane, die über die Wiesen schlendern.', 'Am schönsten ab 16 Uhr, wenn die Hitze nachlässt und das Abend-Aerobic beginnt.'],
      fr: ['Parc Lumphini', 'Le poumon vert du quartier d’affaires : lac avec pédalos, pistes de course et énormes varans qui se promènent sur les pelouses.', 'Idéal après 16 h, quand la chaleur tombe et que l’aérobic du soir commence.'],
      it: ['Parco Lumphini', 'Il cuore verde della Bangkok degli affari: lago con pedalò, piste da corsa e grandi varani a spasso sui prati.', 'Meglio dopo le 16, quando il caldo cala e parte l’aerobica serale.'],
    }, { price: free, hours: '04:30–21:00' }),
    P('iconsiam', 'attraction', 13.7266, 100.5103, CITY, 4.6, 98400, ['shopping', 'food', 'architecture'], {
      ru: ['ICONSIAM', 'Торговый центр на берегу Чаупхраи с крытым «плавучим рынком» SookSiam, где собраны блюда и ремёсла со всех провинций Таиланда.', 'Приезжайте на бесплатном шаттл-пароме от пристани Sathorn к вечернему шоу фонтанов.'],
      en: ['ICONSIAM', 'A riverside mall on the Chao Phraya with SookSiam, an indoor “floating market” of food and crafts from every Thai province.', 'Take the free shuttle boat from Sathorn Pier and stay for the evening fountain show.'],
      es: ['ICONSIAM', 'Un centro comercial a orillas del Chao Phraya con SookSiam, un “mercado flotante” cubierto con comida y artesanía de todas las provincias.', 'Llega en el barco lanzadera gratuito desde el muelle Sathorn y quédate al espectáculo de fuentes.'],
      de: ['ICONSIAM', 'Ein Einkaufszentrum am Chao Phraya mit SookSiam, einem überdachten „schwimmenden Markt“ mit Essen und Handwerk aus allen Provinzen.', 'Mit dem kostenlosen Shuttleboot ab Sathorn Pier kommen und zur abendlichen Brunnenshow bleiben.'],
      fr: ['ICONSIAM', 'Un centre commercial au bord du Chao Phraya avec SookSiam, « marché flottant » couvert de plats et d’artisanat de toutes les provinces.', 'Venez par la navette fluviale gratuite depuis Sathorn Pier et restez pour le spectacle de fontaines.'],
      it: ['ICONSIAM', 'Un centro commerciale sul Chao Phraya con SookSiam, un “mercato galleggiante” coperto con cibo e artigianato di ogni provincia.', 'Arriva con la navetta gratuita dal molo Sathorn e resta per lo spettacolo delle fontane.'],
    }, { price: free, hours: '10:00–22:00' }),
    P('national-museum', 'attraction', 13.7578, 100.492, TEMPLE, 4.5, 7200, ['museums', 'history', 'culture'], {
      ru: ['Национальный музей Бангкока', 'Бывший дворец вице-короля: королевские погребальные колесницы, сокровища Сукхотаи и Аюттхаи и лучшая коллекция тайского искусства.', 'По средам и четвергам утром бывают бесплатные экскурсии волонтёров на английском.'],
      en: ['Bangkok National Museum', 'The former Front Palace: royal funeral chariots, treasures of Sukhothai and Ayutthaya and the finest collection of Thai art.', 'Volunteers lead free English tours on some weekday mornings.'],
      es: ['Museo Nacional de Bangkok', 'El antiguo Palacio Frontal: carrozas funerarias reales, tesoros de Sukhothai y Ayutthaya y la mejor colección de arte tailandés.', 'Algunas mañanas entre semana hay visitas gratuitas en inglés con voluntarios.'],
      de: ['Nationalmuseum Bangkok', 'Der einstige Vorderpalast: königliche Leichenwagen, Schätze aus Sukhothai und Ayutthaya und die beste Sammlung thailändischer Kunst.', 'An manchen Wochentagen gibt es morgens kostenlose englische Führungen von Freiwilligen.'],
      fr: ['Musée national de Bangkok', 'L’ancien Palais du Front : chars funéraires royaux, trésors de Sukhothaï et d’Ayutthaya et la plus belle collection d’art thaï.', 'Certains matins de semaine, des bénévoles guident gratuitement en anglais.'],
      it: ['Museo nazionale di Bangkok', 'L’antico Palazzo del Fronte: carri funebri reali, tesori di Sukhothai e Ayutthaya e la miglior collezione d’arte thai.', 'Alcune mattine feriali ci sono visite gratuite in inglese con volontari.'],
    }, { price: fixed(200, 'THB'), hours: '09:00–16:00' }),
    P('wat-traimit', 'attraction', 13.7378, 100.5136, TEMPLE, 4.5, 21300, ['temples', 'history'], {
      ru: ['Ват Траймит (Золотой Будда)', 'Здесь стоит пятиметровый Будда из чистого золота весом 5,5 тонны: веками его прятали под слоем штукатурки и нашли случайно в 1955 году.', 'Храм у входа в Чайнатаун — удобно начать с него прогулку по Яоварату.'],
      en: ['Wat Traimit (Golden Buddha)', 'Home to a five-metre Buddha of solid gold weighing 5.5 tonnes, hidden under plaster for centuries and found by chance in 1955.', 'It stands at the gateway to Chinatown — a good start for a Yaowarat walk.'],
      es: ['Wat Traimit (Buda de Oro)', 'Alberga un buda de oro macizo de cinco metros y 5,5 toneladas, oculto bajo yeso durante siglos y hallado por casualidad en 1955.', 'Está a la entrada de Chinatown: buen inicio para pasear por Yaowarat.'],
      de: ['Wat Traimit (Goldener Buddha)', 'Hier sitzt ein fünf Meter hoher Buddha aus massivem Gold, 5,5 Tonnen schwer, jahrhundertelang unter Gips versteckt und 1955 zufällig entdeckt.', 'Er liegt am Tor nach Chinatown – ein guter Start für einen Yaowarat-Bummel.'],
      fr: ['Wat Traimit (Bouddha d’or)', 'Il abrite un bouddha en or massif de cinq mètres et 5,5 tonnes, caché sous du plâtre pendant des siècles et découvert par hasard en 1955.', 'Il se trouve à l’entrée de Chinatown, idéal pour débuter une balade à Yaowarat.'],
      it: ['Wat Traimit (Buddha d’oro)', 'Custodisce un Buddha d’oro massiccio di cinque metri e 5,5 tonnellate, nascosto sotto lo stucco per secoli e ritrovato per caso nel 1955.', 'È all’ingresso di Chinatown: ottimo inizio per una passeggiata a Yaowarat.'],
    }, { price: fixed(100, 'THB'), hours: '08:00–17:00' }),
    P('erawan-shrine', 'attraction', 13.7445, 100.5404, CITY, 4.5, 23800, ['culture', 'city'], {
      ru: ['Святилище Эраван', 'Маленький храм четырёхликого Брахмы на шумном перекрёстке Ратчапрасонг: благовония, гирлянды и танцовщицы, которых нанимают в благодарность за исполненное желание.', 'Танцы идут весь день; фотографируйте без вспышки и не заходите в круг молящихся.'],
      en: ['Erawan Shrine', 'A small shrine to four-faced Brahma at the busy Ratchaprasong junction: incense, garlands and dancers hired to give thanks for wishes come true.', 'Dances run all day; no flash, and stay outside the circle of worshippers.'],
      es: ['Santuario de Erawan', 'Un pequeño santuario a Brahma de cuatro caras en el bullicioso cruce de Ratchaprasong: incienso, guirnaldas y bailarinas contratadas para agradecer deseos cumplidos.', 'Las danzas son todo el día; sin flash y fuera del círculo de fieles.'],
      de: ['Erawan-Schrein', 'Ein kleiner Schrein für den vierköpfigen Brahma an der lauten Ratchaprasong-Kreuzung: Räucherstäbchen, Girlanden und Tänzerinnen als Dank für erfüllte Wünsche.', 'Getanzt wird den ganzen Tag; ohne Blitz fotografieren und außerhalb des Betenden-Kreises bleiben.'],
      fr: ['Sanctuaire d’Erawan', 'Un petit sanctuaire du Brahma à quatre visages au carrefour animé de Ratchaprasong : encens, guirlandes et danseuses payées pour remercier d’un vœu exaucé.', 'Les danses durent toute la journée ; sans flash et en dehors du cercle des fidèles.'],
      it: ['Santuario di Erawan', 'Un piccolo santuario del Brahma a quattro volti all’incrocio caotico di Ratchaprasong: incenso, ghirlande e danzatrici pagate per ringraziare dei desideri esauditi.', 'Le danze vanno avanti tutto il giorno; niente flash e resta fuori dal cerchio dei fedeli.'],
    }, { price: free }),
    P('asiatique', 'attraction', 13.7044, 100.5031, CITY, 4.4, 61500, ['market', 'nightlife', 'views'], {
      ru: ['Asiatique The Riverfront', 'Ночной рынок в старых складах датской торговой компании: колесо обозрения над рекой, лавки, кафе и шоу.', 'Доберитесь бесплатным паромом от пристани Sathorn после 16:00.'],
      en: ['Asiatique The Riverfront', 'A night market in the old warehouses of a Danish trading company: a Ferris wheel over the river, stalls, cafés and shows.', 'Take the free ferry from Sathorn Pier after 4 pm.'],
      es: ['Asiatique The Riverfront', 'Un mercado nocturno en los viejos almacenes de una compañía danesa: noria sobre el río, puestos, cafés y espectáculos.', 'Llega en el ferry gratuito desde el muelle Sathorn a partir de las 16:00.'],
      de: ['Asiatique The Riverfront', 'Ein Nachtmarkt in den alten Lagerhäusern einer dänischen Handelsfirma: Riesenrad am Fluss, Stände, Cafés und Shows.', 'Ab 16 Uhr mit der kostenlosen Fähre ab Sathorn Pier.'],
      fr: ['Asiatique The Riverfront', 'Un marché de nuit dans les anciens entrepôts d’une compagnie danoise : grande roue sur le fleuve, échoppes, cafés et spectacles.', 'Prenez le ferry gratuit depuis Sathorn Pier après 16 h.'],
      it: ['Asiatique The Riverfront', 'Un mercato notturno nei vecchi magazzini di una compagnia danese: ruota panoramica sul fiume, bancarelle, caffè e spettacoli.', 'Prendi il traghetto gratuito dal molo Sathorn dopo le 16.'],
    }, { price: free, hours: '16:00–24:00' }),

    // ——— Where to eat ———
    P('sorn', 'food', 13.7244, 100.5689, FOOD, 4.8, 1900, ['food', 'luxury'], {
      ru: ['Sorn', 'Южнотайская кухня высокой пробы: дегустационный сет из продуктов маленьких ферм и рыбаков юга, рецепты бабушек — в ресторане с тремя звёздами Мишлен.', 'Бронируйте за 1–2 месяца на официальном сайте; дресс-код смарт-кэжуал.'],
      en: ['Sorn', 'Southern Thai cooking at its highest: a tasting menu built on small southern farms and fishermen and family recipes, in a three-MICHELIN-star restaurant.', 'Book 1–2 months ahead on the official site; smart casual.'],
      es: ['Sorn', 'Cocina del sur de Tailandia al más alto nivel: menú degustación con productos de pequeñas granjas y pescadores del sur y recetas familiares, con tres estrellas MICHELIN.', 'Reserva con 1–2 meses en la web oficial; smart casual.'],
      de: ['Sorn', 'Südthailändische Küche auf höchstem Niveau: ein Degustationsmenü aus Produkten kleiner Höfe und Fischer des Südens und Familienrezepten – drei MICHELIN-Sterne.', '1–2 Monate vorher auf der offiziellen Website buchen; Smart Casual.'],
      fr: ['Sorn', 'La cuisine du sud de la Thaïlande au sommet : menu dégustation de petites fermes et pêcheurs du sud et de recettes de famille, trois étoiles MICHELIN.', 'Réservez 1 à 2 mois à l’avance sur le site officiel ; tenue smart casual.'],
      it: ['Sorn', 'La cucina del sud della Thailandia al massimo livello: menu degustazione con prodotti di piccole fattorie e pescatori del sud e ricette di famiglia, tre stelle MICHELIN.', 'Prenota 1–2 mesi prima sul sito ufficiale; smart casual.'],
    }, { price: level(3), michelin: { award: 'star3', year: 2026 }, address: '56 Sukhumvit 26' }),
    P('suhring', 'food', 13.7135, 100.5419, FOOD, 4.8, 2300, ['food', 'luxury'], {
      ru: ['Sühring', 'Близнецы Томас и Матиас Зюринг готовят современную немецкую кухню в вилле 1970-х с садом; в гиде Мишлен 2026 ресторан получил третью звезду.', 'Возьмите «Brotzeit» — фирменную подачу хлеба и закусок; бронь за несколько недель.'],
      en: ['Sühring', 'Twins Thomas and Mathias Sühring cook modern German food in a 1970s villa with a garden; it earned its third MICHELIN star in the 2026 guide.', 'Don’t miss the “Brotzeit” bread course; book weeks ahead.'],
      es: ['Sühring', 'Los gemelos Thomas y Mathias Sühring cocinan cocina alemana moderna en una villa de los 70 con jardín; tercera estrella MICHELIN en la guía 2026.', 'No te pierdas el pase “Brotzeit” de panes; reserva con semanas.'],
      de: ['Sühring', 'Die Zwillinge Thomas und Mathias Sühring kochen moderne deutsche Küche in einer Villa aus den 1970ern mit Garten; im Guide 2026 kam der dritte MICHELIN-Stern.', 'Den „Brotzeit“-Gang nicht verpassen; Wochen im Voraus buchen.'],
      fr: ['Sühring', 'Les jumeaux Thomas et Mathias Sühring signent une cuisine allemande moderne dans une villa des années 1970 avec jardin ; troisième étoile MICHELIN dans le guide 2026.', 'Ne manquez pas le service « Brotzeit » ; réservez des semaines à l’avance.'],
      it: ['Sühring', 'I gemelli Thomas e Mathias Sühring cucinano tedesco moderno in una villa anni ’70 con giardino; terza stella MICHELIN nella guida 2026.', 'Non perdere la portata “Brotzeit” di pani; prenota con settimane di anticipo.'],
    }, { price: level(3), michelin: { award: 'star3', year: 2026 }, address: '10 Yen Akat Soi 3' }),
    P('gaggan', 'food', 13.7327, 100.568, FOOD, 4.7, 3100, ['food', 'luxury', 'nightlife'], {
      ru: ['Gaggan', 'Прогрессивная индийская кухня Гаггана Ананда — 20+ подач-сюрпризов, музыка и шоу за общим столом; в 2026 году одна звезда Мишлен.', 'Это вечер-представление часа на три; меню расшифровано эмодзи, спрашивайте у шефов, что за блюдо.'],
      en: ['Gaggan', 'Gaggan Anand’s progressive Indian cooking — 20-plus surprise courses, music and theatre at a chef’s counter; one MICHELIN star in 2026.', 'It is a three-hour show; the menu is written in emoji, so ask the chefs what each course is.'],
      es: ['Gaggan', 'La cocina india progresiva de Gaggan Anand: más de 20 pases sorpresa, música y teatro en barra; una estrella MICHELIN en 2026.', 'Es un espectáculo de unas tres horas; el menú está en emojis, pregunta a los cocineros.'],
      de: ['Gaggan', 'Gaggan Anands progressive indische Küche – über 20 Überraschungsgänge, Musik und Show am Chef’s Counter; ein MICHELIN-Stern 2026.', 'Ein dreistündiges Spektakel; die Karte besteht aus Emojis – die Köche erklären jeden Gang.'],
      fr: ['Gaggan', 'La cuisine indienne progressive de Gaggan Anand : plus de 20 services surprises, musique et spectacle au comptoir ; une étoile MICHELIN en 2026.', 'C’est un show de trois heures ; le menu est en émojis, demandez aux chefs.'],
      it: ['Gaggan', 'La cucina indiana progressiva di Gaggan Anand: oltre 20 portate a sorpresa, musica e spettacolo al bancone; una stella MICHELIN nel 2026.', 'È uno show di tre ore; il menu è in emoji, chiedi agli chef cosa arriva.'],
    }, { price: level(3), michelin: { award: 'star1', year: 2026 }, address: '68 Sukhumvit 31' }),
    P('nusara', 'food', 13.7459, 100.492, FOOD, 4.7, 1400, ['food', 'luxury', 'views'], {
      ru: ['Nusara', 'Камерный ресторан шефа Тона в честь его бабушки: классическая центральнотайская кухня и вид на Ват Пхо; одна звезда Мишлен 2026.', 'Перед ужином поднимитесь в бар на крыше — оттуда видно подсвеченный Ват Арун.'],
      en: ['Nusara', 'Chef Ton’s intimate tribute to his grandmother: classic central Thai cooking with a view of Wat Pho; one MICHELIN star in 2026.', 'Before dinner, head up to the rooftop bar for floodlit Wat Arun.'],
      es: ['Nusara', 'El íntimo homenaje del chef Ton a su abuela: cocina clásica del centro de Tailandia con vistas a Wat Pho; una estrella MICHELIN en 2026.', 'Antes de cenar sube a la terraza para ver Wat Arun iluminado.'],
      de: ['Nusara', 'Chef Tons intime Hommage an seine Großmutter: klassische zentralthailändische Küche mit Blick auf den Wat Pho; ein MICHELIN-Stern 2026.', 'Vor dem Essen in die Rooftop-Bar – mit Blick auf den beleuchteten Wat Arun.'],
      fr: ['Nusara', 'L’hommage intime du chef Ton à sa grand-mère : cuisine classique du centre de la Thaïlande face au Wat Pho ; une étoile MICHELIN en 2026.', 'Avant le dîner, montez au rooftop pour le Wat Arun illuminé.'],
      it: ['Nusara', 'L’omaggio intimo dello chef Ton alla nonna: cucina classica della Thailandia centrale con vista sul Wat Pho; una stella MICHELIN nel 2026.', 'Prima di cena sali al rooftop bar per il Wat Arun illuminato.'],
    }, { price: level(3), michelin: { award: 'star1', year: 2026 }, address: '336 Maharat Rd' }),
    P('r-haan', 'food', 13.7343, 100.5822, FOOD, 4.7, 1700, ['food', 'luxury'], {
      ru: ['R-Haan', 'Ресторан шефа Чумпола: сезонные сеты, которые проводят по всем регионам Таиланда, — две звезды Мишлен 2026.', 'Сет начинается с традиционного приветствия «кхао чае»; говорите о предпочтениях при брони.'],
      en: ['R-Haan', 'Chef Chumpol’s restaurant: seasonal menus that tour every region of Thailand — two MICHELIN stars in 2026.', 'Mention any dietary needs when you book; the meal opens with a royal-style welcome course.'],
      es: ['R-Haan', 'El restaurante del chef Chumpol: menús de temporada que recorren todas las regiones de Tailandia; dos estrellas MICHELIN en 2026.', 'Indica alergias al reservar; la comida abre con un pase de bienvenida de estilo real.'],
      de: ['R-Haan', 'Chef Chumpols Restaurant: saisonale Menüs, die durch alle Regionen Thailands führen – zwei MICHELIN-Sterne 2026.', 'Unverträglichkeiten bei der Buchung angeben; zum Auftakt gibt es einen Begrüßungsgang wie am Hof.'],
      fr: ['R-Haan', 'Le restaurant du chef Chumpol : menus de saison qui parcourent toutes les régions de Thaïlande, deux étoiles MICHELIN en 2026.', 'Signalez vos restrictions à la réservation ; le repas s’ouvre sur un amuse-bouche de cour.'],
      it: ['R-Haan', 'Il ristorante dello chef Chumpol: menu stagionali che attraversano tutte le regioni della Thailandia, due stelle MICHELIN nel 2026.', 'Segnala intolleranze alla prenotazione; si apre con un benvenuto in stile reale.'],
    }, { price: level(3), michelin: { award: 'star2', year: 2026 }, address: '131 Sukhumvit 53' }),
    P('nahm', 'food', 13.723, 100.5435, FOOD, 4.6, 1600, ['food', 'luxury'], {
      ru: ['Nahm', 'Ресторан в отеле COMO Metropolitan, где тайскую кухню готовят по старинным рецептам — острые карри, салаты и пряные соусы; одна звезда Мишлен.', 'В обед здесь есть более доступный сет — хороший способ познакомиться с кухней.'],
      en: ['Nahm', 'A restaurant at COMO Metropolitan cooking Thai food from heritage recipes — fiery curries, salads and relishes; one MICHELIN star.', 'The set lunch is a more affordable way in.'],
      es: ['Nahm', 'En el hotel COMO Metropolitan, cocina tailandesa de recetas antiguas: curris intensos, ensaladas y salsas especiadas; una estrella MICHELIN.', 'El menú del mediodía es la forma más asequible de probarlo.'],
      de: ['Nahm', 'Im COMO Metropolitan kocht man Thai-Küche nach alten Rezepten – scharfe Currys, Salate und würzige Dips; ein MICHELIN-Stern.', 'Das Mittagsmenü ist der günstigere Einstieg.'],
      fr: ['Nahm', 'Au COMO Metropolitan, une cuisine thaïe tirée de recettes anciennes : currys relevés, salades et condiments ; une étoile MICHELIN.', 'Le menu du déjeuner est l’entrée en matière la plus abordable.'],
      it: ['Nahm', 'Al COMO Metropolitan si cucina thai da ricette antiche: curry piccanti, insalate e salse speziate; una stella MICHELIN.', 'Il pranzo a menu fisso è il modo più accessibile per provarlo.'],
    }, { price: level(3), michelin: { award: 'star1', year: 2026 }, address: '27 South Sathorn Rd' }),
    P('bo-lan', 'food', 13.7246, 100.5793, FOOD, 4.6, 2100, ['food', 'luxury'], {
      ru: ['Bo.lan', 'Пара шефов Бо и Дилан готовят «медленную» тайскую кухню из фермерских продуктов и почти без отходов; одна звезда Мишлен 2026.', 'Сет подают «по-семейному» — все блюда сразу, как в тайском доме.'],
      en: ['Bo.lan', 'Chefs Bo and Dylan cook slow, near zero-waste Thai food from farm produce; one MICHELIN star in 2026.', 'The set is served family-style — all dishes at once, as in a Thai home.'],
      es: ['Bo.lan', 'Los chefs Bo y Dylan cocinan comida tailandesa lenta y casi sin desperdicio con producto de granja; una estrella MICHELIN en 2026.', 'El menú se sirve al estilo familiar: todos los platos a la vez, como en una casa thai.'],
      de: ['Bo.lan', 'Bo und Dylan kochen langsame, fast abfallfreie Thai-Küche aus Hofprodukten; ein MICHELIN-Stern 2026.', 'Das Menü kommt wie in einer thailändischen Familie – alle Gerichte zugleich.'],
      fr: ['Bo.lan', 'Les chefs Bo et Dylan cuisinent une cuisine thaïe lente, presque zéro déchet, de produits fermiers ; une étoile MICHELIN en 2026.', 'Le menu est servi à la thaïe, tous les plats en même temps.'],
      it: ['Bo.lan', 'Gli chef Bo e Dylan cucinano thai lento e quasi a zero sprechi con prodotti di fattoria; una stella MICHELIN nel 2026.', 'Il menu arriva in stile familiare, tutti i piatti insieme come in una casa thai.'],
    }, { price: level(3), michelin: { award: 'star1', year: 2026 }, address: '24 Sukhumvit 53' }),
    P('krua-apsorn', 'food', 13.756, 100.5016, FOOD, 4.5, 6900, ['food', 'streetfood'], {
      ru: ['Krua Apsorn', 'Семейная столовая, где когда-то готовили для королевской семьи: простые тайские блюда с крабом. Bib Gourmand в гиде 2026.', 'Берите омлет с крабом и краба в жёлтом карри; в обед бывает очередь.'],
      en: ['Krua Apsorn', 'A family canteen that once cooked for the royal household: simple Thai dishes, crab above all. Bib Gourmand in the 2026 guide.', 'Order the crab omelette and crab in yellow curry; expect a lunch queue.'],
      es: ['Krua Apsorn', 'Un comedor familiar que cocinó para la casa real: platos tailandeses sencillos, sobre todo cangrejo. Bib Gourmand en la guía 2026.', 'Pide la tortilla de cangrejo y el cangrejo al curry amarillo; a mediodía hay cola.'],
      de: ['Krua Apsorn', 'Eine Familienkantine, die einst für das Königshaus kochte: einfache Thai-Gerichte, vor allem mit Krabbe. Bib Gourmand im Guide 2026.', 'Krabbenomelett und Krabbe in gelbem Curry bestellen; mittags gibt es Schlangen.'],
      fr: ['Krua Apsorn', 'Une cantine familiale qui a cuisiné pour la maison royale : plats thaïs simples, surtout au crabe. Bib Gourmand dans le guide 2026.', 'Commandez l’omelette au crabe et le crabe au curry jaune ; file d’attente à midi.'],
      it: ['Krua Apsorn', 'Una mensa di famiglia che cucinava per la casa reale: piatti thai semplici, soprattutto granchio. Bib Gourmand nella guida 2026.', 'Ordina la frittata di granchio e il granchio al curry giallo; a pranzo c’è coda.'],
    }, { price: level(1), michelin: { award: 'bib', year: 2026 }, address: '169 Dinso Rd', menu: [
      ['Khai Jiao Pu (crab omelette)', 450, 'пышный омлет с крабовым мясом|fluffy omelette packed with crab|tortilla esponjosa con cangrejo|lockeres Omelett mit Krabbenfleisch|omelette moelleuse au crabe|frittata soffice con granchio'],
      ['Pu Phat Phrik Lueang', 480, 'краб с жёлтым перцем чили|crab stir-fried with yellow chilli|cangrejo salteado con chile amarillo|Krabbe mit gelbem Chili|crabe sauté au piment jaune|granchio saltato con peperoncino giallo'],
      ['Kaeng Khiao Wan Look Chin Pla', 180, 'зелёное карри с рыбными шариками|green curry with fish balls|curry verde con albóndigas de pescado|grünes Curry mit Fischbällchen|curry vert aux boulettes de poisson|curry verde con polpette di pesce'],
    ] }),
    P('wattana-panich', 'food', 13.7375, 100.5855, FOOD, 4.4, 5200, ['food', 'streetfood'], {
      ru: ['Wattana Panich', 'Говяжий суп с лапшой из огромного котла, бульон в котором, по словам хозяев, не выключают уже больше 50 лет.', 'Закажите большую миску с тушёной говядиной и фрикадельками; работает до вечера.'],
      en: ['Wattana Panich', 'Beef noodle soup from a giant pot whose broth, the family says, has been simmering for over 50 years.', 'Ask for the big bowl with stewed beef and meatballs; open until early evening.'],
      es: ['Wattana Panich', 'Sopa de fideos con ternera de una olla gigante cuyo caldo, según la familia, lleva más de 50 años al fuego.', 'Pide el tazón grande con ternera guisada y albóndigas; abre hasta media tarde-noche.'],
      de: ['Wattana Panich', 'Rindfleisch-Nudelsuppe aus einem Riesentopf, dessen Brühe laut Familie seit über 50 Jahren köchelt.', 'Die große Schale mit Schmorrind und Fleischbällchen bestellen; geöffnet bis zum frühen Abend.'],
      fr: ['Wattana Panich', 'Soupe de nouilles au bœuf tirée d’une marmite géante dont le bouillon, selon la famille, mijote depuis plus de 50 ans.', 'Demandez le grand bol au bœuf mijoté et boulettes ; ouvert jusqu’en début de soirée.'],
      it: ['Wattana Panich', 'Zuppa di noodle al manzo da una pentola gigante il cui brodo, dice la famiglia, sobbolle da oltre 50 anni.', 'Chiedi la ciotola grande con manzo stufato e polpette; aperto fino a sera presto.'],
    }, { price: level(1), address: '336 Ekkamai Rd', menu: [
      ['Kuay Tiew Nuea', 150, 'суп с говядиной и рисовой лапшой|beef noodle soup|sopa de fideos con ternera|Rindfleisch-Nudelsuppe|soupe de nouilles au bœuf|zuppa di noodle al manzo'],
      ['Nuea Toon (stewed beef)', 200, 'тушёная говядина в бульоне|stewed beef in broth|ternera guisada en caldo|Schmorrind in Brühe|bœuf mijoté en bouillon|manzo stufato in brodo'],
    ] }),
    P('mae-varee', 'food', 13.724, 100.585, FOOD, 4.5, 4100, ['food', 'streetfood'], {
      ru: ['Mae Varee', 'Самая известная в городе лавка манго с клейким рисом: спелое манго, рис на кокосовых сливках и хрустящая жареная бобовая крошка.', 'Возьмите порцию с собой — рядом станция BTS Thong Lo.'],
      en: ['Mae Varee', 'The city’s best-known mango sticky rice shop: ripe mango, rice in coconut cream and crunchy toasted mung beans.', 'Get it to go — BTS Thong Lo is right there.'],
      es: ['Mae Varee', 'La tienda de arroz glutinoso con mango más famosa de la ciudad: mango maduro, arroz en crema de coco y judías mungo crujientes.', 'Llévatelo: la estación BTS Thong Lo está al lado.'],
      de: ['Mae Varee', 'Der bekannteste Mango-Klebreis-Laden der Stadt: reife Mango, Reis in Kokoscreme und knusprige Mungbohnen.', 'Zum Mitnehmen – die BTS-Station Thong Lo ist gleich daneben.'],
      fr: ['Mae Varee', 'La boutique de riz gluant à la mangue la plus célèbre de la ville : mangue mûre, riz à la crème de coco et haricots mungo croquants.', 'À emporter : la station BTS Thong Lo est à côté.'],
      it: ['Mae Varee', 'Il negozio di riso glutinoso al mango più famoso della città: mango maturo, riso alla crema di cocco e fagioli mungo croccanti.', 'Prendilo da asporto: la BTS Thong Lo è lì accanto.'],
    }, { price: level(1), address: '1 Sukhumvit 55', menu: [
      ['Khao Niao Mamuang', 150, 'манго с клейким рисом на кокосовом молоке|mango with coconut sticky rice|mango con arroz glutinoso al coco|Mango mit Kokos-Klebreis|mangue et riz gluant au coco|mango con riso glutinoso al cocco'],
      ['Khao Niao Durian', 200, 'клейкий рис с дурианом (в сезон)|durian sticky rice (in season)|arroz glutinoso con durián (en temporada)|Klebreis mit Durian (saisonal)|riz gluant au durian (en saison)|riso glutinoso al durian (di stagione)'],
    ] }),
  ],
  routes: [
    D(['=bangkok-grand-palace', '=bangkok-wat-pho', 'krua-apsorn', 'wat-saket', '=bangkok-thip-samai'],
      'Остров Раттанакосин: дворец и храмы|Rattanakosin: palace and temples|Rattanakosin: palacio y templos|Rattanakosin: Palast und Tempel|Rattanakosin : palais et temples|Rattanakosin: palazzo e templi'),
    D(['national-museum', '=bangkok-wang-lang-market', '=watarun', 'wat-traimit', '=bangkok-talat-noi', '=yaowarat'],
      'Река, Ват Арун и Чайнатаун|The river, Wat Arun and Chinatown|El río, Wat Arun y Chinatown|Der Fluss, Wat Arun und Chinatown|Le fleuve, Wat Arun et Chinatown|Il fiume, Wat Arun e Chinatown'),
    D(['chatuchak', '=bangkok-or-tor-kor-market', 'jim-thompson-house', 'erawan-shrine', 'lumphini-park', '=bangkok-mahanakhon-skywalk', 'suhring'],
      'Современный Бангкок: рынки, парк и небоскрёбы|Modern Bangkok: markets, park and skyline|Bangkok moderno: mercados, parque y rascacielos|Modernes Bangkok: Märkte, Park und Skyline|Bangkok moderne : marchés, parc et gratte-ciel|Bangkok moderna: mercati, parco e grattacieli'),
  ],
};

export default pack;
