import type { CountryPack } from '../types';

const pack: CountryPack = {
  country: {
    code: 'FJ',
    region: 'oceania',
    image: 'MkSlXoYg0Vo',
    theme: { accent: '#0891b2', accent2: '#facc15', motif: 'palms' },
    fromMoscow: { hours: 22, direct: false },
    visa: { regime: 'free', days: 120, cost: { kind: 'free' }, validity: 'sixMonths', docs: ['returnTicket', 'booking', 'finance'], notes: [] },
    text: {
      ru: {
        tagline: '333 острова, коралловые лагуны и улыбчивое «була!»',
        description: 'Фиджи — архипелаг из 333 островов в южной части Тихого океана, где бирюзовые лагуны, коралловые рифы и пальмовые пляжи соседствуют с деревнями, живущими по старинным обычаям. Здесь вас встретят приветствием «була!», угостят каву и научат никуда не спешить по «фиджийскому времени».',
        howToGet: 'Прямых рейсов из Москвы нет: удобнее всего лететь с пересадкой в Гонконге, Сингапуре или Токио, откуда Fiji Airways летает прямо в Нади, либо через Сеул или Австралию; дорога занимает 20–26 часов. Россиянам виза не нужна до 4 месяцев. Между островами Мамануса и Ясава ходят быстроходные катамараны South Sea Cruises и Yasawa Flyer из порта Денарау, а по главному острову Вити-Леву ездят на автобусах, такси и арендованных машинах.',
        tips: [
          'Российские Visa и Mastercard здесь не работают: везите доллары США, евро или австралийские доллары на обмен в аэропорту Нади и банках, а карты UnionPay принимают лишь местами.',
          'Катамараны на острова из Денарау лучше бронировать заранее, а на удалённых островах наличных банкоматов нет — запаситесь фиджийскими долларами на Вити-Леву.',
          'В деревнях покрывайте плечи и колени, снимайте шляпу, не трогайте никого за голову и приносите в подарок корень кавы для церемонии севусеву.',
        ],
        guide: {
          title: 'Фиджи за 10 дней',
          sections: [
            { title: 'Когда ехать', body: 'Лучшее время — сухой сезон с мая по октябрь: солнечно, около 26–28 °C, мало дождей и спокойное море для снорклинга и переходов между островами. С ноября по апрель жарче и влажнее, бывают ливни и циклоны, зато меньше туристов и ниже цены. Подводная видимость особенно хороша зимой южного полушария, а в июле — августе на островах больше всего путешественников из Австралии и Новой Зеландии.' },
            { title: 'Маршрут на 10 дней', body: 'Прилетев в Нади, проведите два дня на главном острове: индуистский храм, сад орхидей «Спящий великан», грязевые ванны Сабето и пляж Натадола. Затем катамараном из Денарау отправляйтесь на острова Мамануса: плавучий бар Cloud 9, остров Монурики из фильма «Изгой» и снорклинг на рифах. Финал — три-четыре дня на островах Ясава с Голубой лагуной и пещерами Сава-и-Лау.' },
            { title: 'Что попробовать', body: 'Главное блюдо — кокода: сырая рыба, маринованная в лайме с кокосовым молоком, луком и перцем. Обязательно попадите на ужин лово, когда мясо, рыбу и корнеплоды запекают под землёй на раскалённых камнях. Из-за большой индийской общины здесь отличные карри и роти. На церемонии вас угостят кавой — землистым напитком из корня перца, слегка немеющим язык.' },
            { title: 'Деньги, связь и транспорт', body: 'Валюта — фиджийский доллар (FJD). Российские карты не работают, поэтому берите наличные доллары, евро или австралийские доллары и меняйте их в аэропорту Нади; на дальних островах платят наличными или картой с наценкой. SIM-карты Vodafone и Digicel продают прямо в аэропорту, но на маленьких островах связь слабая. Между островами ходят катамараны и летают гидросамолёты, на Вити-Леву — автобусы и такси.' },
          ],
        },
      },
      en: {
        tagline: '333 islands, coral lagoons and a smiling “bula!”',
        description: 'Fiji is an archipelago of 333 islands in the South Pacific, where turquoise lagoons, coral reefs and palm-fringed beaches sit beside villages that still keep their old customs. You will be greeted with “bula!”, offered kava and taught to slow down to “Fiji time”.',
        howToGet: 'There are no direct flights from Moscow: the easiest option is to connect in Hong Kong, Singapore or Tokyo, where Fiji Airways flies direct to Nadi, or via Seoul or Australia, 20–26 hours in total. Russians need no visa for up to 4 months. South Sea Cruises and Yasawa Flyer fast catamarans run from Port Denarau to the Mamanuca and Yasawa islands, while on the main island of Viti Levu you get around by bus, taxi or rental car.',
        tips: [
          'Russian-issued Visa and Mastercard cards don’t work here, so bring US dollars, euros or Australian dollars to exchange at Nadi Airport and banks; UnionPay is accepted only in places.',
          'Book catamarans from Denarau to the islands in advance, and stock up on Fijian dollars on Viti Levu, as the outer islands have no ATMs.',
          'In villages cover your shoulders and knees, take off your hat, never touch anyone’s head and bring kava root as a gift for the sevusevu ceremony.',
        ],
        guide: {
          title: 'Fiji in 10 days',
          sections: [
            { title: 'When to go', body: 'The best time is the dry season from May to October: sunny, around 26–28 °C, with little rain and calm seas for snorkelling and island hopping. From November to April it is hotter and more humid, with downpours and cyclones, but fewer visitors and lower prices. Underwater visibility is especially good in the southern winter, and in July and August the islands are busiest with Australians and New Zealanders.' },
            { title: 'A 10-day route', body: 'After landing in Nadi, spend two days on the main island: the Hindu temple, the Garden of the Sleeping Giant orchids, the Sabeto mud pools and Natadola Beach. Then take a catamaran from Denarau to the Mamanuca islands for the Cloud 9 floating bar, Monuriki island from the film Cast Away and reef snorkelling. Finish with three or four days in the Yasawa islands, with the Blue Lagoon and the Sawa-i-Lau caves.' },
            { title: 'What to eat', body: 'The national dish is kokoda: raw fish marinated in lime with coconut milk, onion and chilli. Don’t miss a lovo feast, when meat, fish and root vegetables are cooked underground on hot stones. Thanks to the large Indo-Fijian community the curries and roti are excellent. At a ceremony you will be offered kava, an earthy drink made from pepper root that leaves your tongue slightly numb.' },
            { title: 'Money, SIM cards and transport', body: 'The currency is the Fijian dollar (FJD). Russian cards don’t work, so bring cash in dollars, euros or Australian dollars and exchange it at Nadi Airport; on the outer islands you pay in cash or by card with a surcharge. Vodafone and Digicel SIM cards are sold right at the airport, but coverage is weak on the small islands. Catamarans and seaplanes link the islands, while buses and taxis serve Viti Levu.' },
          ],
        },
      },
      es: {
        tagline: '333 islas, lagunas de coral y un sonriente «¡bula!»',
        description: 'Fiyi es un archipiélago de 333 islas en el Pacífico Sur, donde lagunas turquesa, arrecifes de coral y playas con palmeras conviven con aldeas que conservan sus viejas costumbres. Te recibirán con un «¡bula!», te ofrecerán kava y te enseñarán a bajar el ritmo al «tiempo fiyiano».',
        howToGet: 'No hay vuelos directos desde Moscú: lo más sencillo es hacer escala en Hong Kong, Singapur o Tokio, desde donde Fiji Airways vuela directo a Nadi, o vía Seúl o Australia, con 20–26 horas de viaje. Los rusos no necesitan visado hasta 4 meses. Los catamaranes rápidos de South Sea Cruises y Yasawa Flyer salen de Port Denarau hacia las islas Mamanuca y Yasawa, y en la isla principal, Viti Levu, te mueves en autobús, taxi o coche de alquiler.',
        tips: [
          'Las tarjetas Visa y Mastercard emitidas en Rusia no funcionan aquí: lleva dólares estadounidenses, euros o dólares australianos para cambiar en el aeropuerto de Nadi y en bancos; UnionPay solo se acepta en algunos sitios.',
          'Reserva con antelación los catamaranes de Denarau a las islas y hazte con dólares fiyianos en Viti Levu, porque en las islas exteriores no hay cajeros.',
          'En las aldeas cúbrete hombros y rodillas, quítate el sombrero, no toques nunca la cabeza de nadie y lleva raíz de kava como regalo para la ceremonia sevusevu.',
        ],
        guide: {
          title: 'Fiyi en 10 días',
          sections: [
            { title: 'Cuándo ir', body: 'La mejor época es la estación seca, de mayo a octubre: sol, unos 26–28 °C, pocas lluvias y mar en calma para el esnórquel y los saltos entre islas. De noviembre a abril hace más calor y humedad, con chaparrones y ciclones, pero hay menos turistas y precios más bajos. La visibilidad bajo el agua es especialmente buena en el invierno austral, y en julio y agosto las islas se llenan de australianos y neozelandeses.' },
            { title: 'Ruta de 10 días', body: 'Al aterrizar en Nadi, dedica dos días a la isla principal: el templo hindú, las orquídeas del Jardín del Gigante Dormido, los baños de lodo de Sabeto y la playa de Natadola. Después toma un catamarán desde Denarau a las islas Mamanuca para el bar flotante Cloud 9, la isla Monuriki de la película Náufrago y el esnórquel en los arrecifes. Termina con tres o cuatro días en las Yasawa, con la Laguna Azul y las cuevas de Sawa-i-Lau.' },
            { title: 'Qué probar', body: 'El plato nacional es el kokoda: pescado crudo marinado en lima con leche de coco, cebolla y guindilla. No te pierdas un banquete lovo, en el que carne, pescado y tubérculos se cocinan bajo tierra sobre piedras calientes. Gracias a la gran comunidad indofiyiana, los curris y el roti son excelentes. En una ceremonia te ofrecerán kava, una bebida terrosa de raíz de pimienta que adormece ligeramente la lengua.' },
            { title: 'Dinero, móvil y transporte', body: 'La moneda es el dólar fiyiano (FJD). Las tarjetas rusas no funcionan, así que lleva efectivo en dólares, euros o dólares australianos y cámbialo en el aeropuerto de Nadi; en las islas exteriores se paga en efectivo o con tarjeta con recargo. Las SIM de Vodafone y Digicel se venden en el mismo aeropuerto, aunque en las islas pequeñas la cobertura es débil. Catamaranes e hidroaviones unen las islas, y en Viti Levu hay autobuses y taxis.' },
          ],
        },
      },
      de: {
        tagline: '333 Inseln, Korallenlagunen und ein strahlendes „Bula!“',
        description: 'Fidschi ist ein Archipel aus 333 Inseln im Südpazifik, wo türkisfarbene Lagunen, Korallenriffe und Palmenstrände neben Dörfern liegen, die ihre alten Bräuche bewahren. Man begrüßt dich mit „Bula!“, reicht dir Kava und bringt dir bei, nach „Fidschi-Zeit“ zu leben.',
        howToGet: 'Direktflüge ab Moskau gibt es nicht: Am einfachsten steigst du in Hongkong, Singapur oder Tokio um, von wo Fiji Airways direkt nach Nadi fliegt, oder reist über Seoul oder Australien – insgesamt 20–26 Stunden. Russen brauchen bis zu 4 Monate kein Visum. Die schnellen Katamarane von South Sea Cruises und Yasawa Flyer fahren ab Port Denarau zu den Mamanuca- und Yasawa-Inseln, auf der Hauptinsel Viti Levu bist du mit Bus, Taxi oder Mietwagen unterwegs.',
        tips: [
          'In Russland ausgegebene Visa- und Mastercard-Karten funktionieren hier nicht: Nimm US-Dollar, Euro oder Australische Dollar zum Tauschen am Flughafen Nadi und bei Banken mit; UnionPay wird nur vereinzelt akzeptiert.',
          'Buch die Katamarane von Denarau zu den Inseln im Voraus und deck dich auf Viti Levu mit Fidschi-Dollar ein, denn auf den äußeren Inseln gibt es keine Geldautomaten.',
          'Bedecke in Dörfern Schultern und Knie, nimm den Hut ab, berühre niemals jemandes Kopf und bring Kava-Wurzel als Gastgeschenk für die Sevusevu-Zeremonie mit.',
        ],
        guide: {
          title: 'Fidschi in 10 Tagen',
          sections: [
            { title: 'Reisezeit', body: 'Am besten reist du in der Trockenzeit von Mai bis Oktober: sonnig, etwa 26–28 °C, wenig Regen und ruhige See zum Schnorcheln und Inselhüpfen. Von November bis April ist es heißer und feuchter, mit Regengüssen und Zyklonen, dafür gibt es weniger Besucher und niedrigere Preise. Die Sicht unter Wasser ist im Südwinter besonders gut, und im Juli und August sind die Inseln voller Australier und Neuseeländer.' },
            { title: 'Route für 10 Tage', body: 'Nach der Landung in Nadi verbringst du zwei Tage auf der Hauptinsel: Hindu-Tempel, die Orchideen im Garden of the Sleeping Giant, die Schlammbäder von Sabeto und Natadola Beach. Dann geht es per Katamaran ab Denarau zu den Mamanuca-Inseln – zur schwimmenden Bar Cloud 9, zur Insel Monuriki aus dem Film „Cast Away“ und zum Schnorcheln an den Riffen. Zum Schluss drei bis vier Tage auf den Yasawas mit Blauer Lagune und den Höhlen von Sawa-i-Lau.' },
            { title: 'Was du probieren solltest', body: 'Das Nationalgericht ist Kokoda: roher Fisch, in Limette mit Kokosmilch, Zwiebeln und Chili mariniert. Verpass kein Lovo-Festmahl, bei dem Fleisch, Fisch und Wurzelgemüse unter der Erde auf heißen Steinen garen. Dank der großen indo-fidschianischen Gemeinschaft sind Currys und Roti ausgezeichnet. Bei einer Zeremonie bekommst du Kava, ein erdiges Getränk aus Pfefferwurzel, das die Zunge leicht betäubt.' },
            { title: 'Geld, Handy und Verkehr', body: 'Die Währung ist der Fidschi-Dollar (FJD). Russische Karten funktionieren nicht, also nimm Bargeld in Dollar, Euro oder Australischen Dollar mit und tausche es am Flughafen Nadi; auf den äußeren Inseln zahlst du bar oder per Karte mit Aufschlag. SIM-Karten von Vodafone und Digicel gibt es direkt am Flughafen, auf kleinen Inseln ist der Empfang aber schwach. Katamarane und Wasserflugzeuge verbinden die Inseln, auf Viti Levu fahren Busse und Taxis.' },
          ],
        },
      },
      fr: {
        tagline: '333 îles, lagons coralliens et un « bula ! » souriant',
        description: 'Les Fidji forment un archipel de 333 îles dans le Pacifique Sud, où lagons turquoise, récifs coralliens et plages bordées de palmiers côtoient des villages fidèles à leurs anciennes coutumes. On vous accueillera d’un « bula ! », on vous offrira du kava et l’on vous apprendra à vivre à l’« heure fidjienne ».',
        howToGet: 'Il n’existe aucun vol direct depuis Moscou : le plus simple est de passer par Hong Kong, Singapour ou Tokyo, d’où Fiji Airways dessert Nadi sans escale, ou par Séoul ou l’Australie, soit 20 à 26 heures de voyage. Les Russes n’ont pas besoin de visa jusqu’à 4 mois. Les catamarans rapides de South Sea Cruises et Yasawa Flyer partent de Port Denarau vers les îles Mamanuca et Yasawa, et sur l’île principale de Viti Levu on circule en bus, en taxi ou en voiture de location.',
        tips: [
          'Les cartes Visa et Mastercard émises en Russie ne fonctionnent pas ici : emportez des dollars américains, des euros ou des dollars australiens à changer à l’aéroport de Nadi et dans les banques ; UnionPay n’est accepté que par endroits.',
          'Réservez à l’avance les catamarans de Denarau vers les îles et faites le plein de dollars fidjiens sur Viti Levu, car les îles éloignées n’ont pas de distributeurs.',
          'Dans les villages, couvrez épaules et genoux, ôtez votre chapeau, ne touchez jamais la tête de quelqu’un et apportez une racine de kava en cadeau pour la cérémonie du sevusevu.',
        ],
        guide: {
          title: 'Les Fidji en 10 jours',
          sections: [
            { title: 'Quand partir', body: 'La meilleure période est la saison sèche, de mai à octobre : soleil, 26 à 28 °C, peu de pluie et une mer calme pour le snorkeling et les sauts d’île en île. De novembre à avril, il fait plus chaud et plus humide, avec des averses et des cyclones, mais moins de visiteurs et des prix plus bas. La visibilité sous-marine est particulièrement bonne pendant l’hiver austral, et en juillet et août les îles accueillent le plus d’Australiens et de Néo-Zélandais.' },
            { title: 'Itinéraire de 10 jours', body: 'À l’arrivée à Nadi, passez deux jours sur l’île principale : le temple hindou, les orchidées du Garden of the Sleeping Giant, les bains de boue de Sabeto et la plage de Natadola. Prenez ensuite un catamaran depuis Denarau pour les îles Mamanuca : le bar flottant Cloud 9, l’île de Monuriki du film « Seul au monde » et le snorkeling sur les récifs. Terminez par trois ou quatre jours aux Yasawa, avec le Blue Lagoon et les grottes de Sawa-i-Lau.' },
            { title: 'Que goûter', body: 'Le plat national est le kokoda : poisson cru mariné au citron vert avec lait de coco, oignon et piment. Ne manquez pas un festin lovo, où viandes, poissons et tubercules cuisent sous terre sur des pierres brûlantes. Grâce à l’importante communauté indo-fidjienne, currys et roti sont excellents. Lors d’une cérémonie, on vous servira du kava, une boisson terreuse à base de racine de poivrier qui engourdit légèrement la langue.' },
            { title: 'Argent, téléphone et transports', body: 'La monnaie est le dollar fidjien (FJD). Les cartes russes ne fonctionnent pas : emportez des dollars, des euros ou des dollars australiens en espèces et changez-les à l’aéroport de Nadi ; dans les îles éloignées, on paie en liquide ou par carte avec un supplément. Les cartes SIM Vodafone et Digicel se vendent à l’aéroport même, mais le réseau est faible sur les petites îles. Catamarans et hydravions relient les îles, et bus et taxis desservent Viti Levu.' },
          ],
        },
      },
      it: {
        tagline: '333 isole, lagune coralline e un sorridente «bula!»',
        description: 'Le Figi sono un arcipelago di 333 isole nel Pacifico meridionale, dove lagune turchesi, barriere coralline e spiagge orlate di palme convivono con villaggi che custodiscono le antiche usanze. Ti accoglieranno con un «bula!», ti offriranno la kava e ti insegneranno a rallentare secondo il «tempo figiano».',
        howToGet: 'Non ci sono voli diretti da Mosca: la soluzione più semplice è uno scalo a Hong Kong, Singapore o Tokyo, da dove Fiji Airways vola diretta a Nadi, oppure via Seul o l’Australia, per 20–26 ore di viaggio. Ai russi non serve il visto fino a 4 mesi. I catamarani veloci di South Sea Cruises e Yasawa Flyer partono da Port Denarau per le isole Mamanuca e Yasawa, mentre sull’isola principale, Viti Levu, ci si sposta in autobus, taxi o auto a noleggio.',
        tips: [
          'Le carte Visa e Mastercard emesse in Russia qui non funzionano: porta dollari statunitensi, euro o dollari australiani da cambiare all’aeroporto di Nadi e in banca; UnionPay è accettata solo in alcuni posti.',
          'Prenota in anticipo i catamarani da Denarau alle isole e fai scorta di dollari figiani su Viti Levu, perché sulle isole esterne non ci sono bancomat.',
          'Nei villaggi copri spalle e ginocchia, togli il cappello, non toccare mai la testa di nessuno e porta in dono una radice di kava per la cerimonia del sevusevu.',
        ],
        guide: {
          title: 'Le Figi in 10 giorni',
          sections: [
            { title: 'Quando andare', body: 'Il periodo migliore è la stagione secca, da maggio a ottobre: sole, circa 26–28 °C, poche piogge e mare calmo per lo snorkeling e i salti tra le isole. Da novembre ad aprile fa più caldo e umido, con acquazzoni e cicloni, ma ci sono meno turisti e prezzi più bassi. La visibilità sott’acqua è particolarmente buona nell’inverno australe, e a luglio e agosto le isole sono piene di australiani e neozelandesi.' },
            { title: 'Itinerario di 10 giorni', body: 'Atterrato a Nadi, dedica due giorni all’isola principale: il tempio induista, le orchidee del Garden of the Sleeping Giant, i bagni di fango di Sabeto e la spiaggia di Natadola. Poi prendi un catamarano da Denarau per le isole Mamanuca: il bar galleggiante Cloud 9, l’isola di Monuriki del film Cast Away e lo snorkeling sulle barriere. Chiudi con tre o quattro giorni alle Yasawa, con la Laguna Blu e le grotte di Sawa-i-Lau.' },
            { title: 'Cosa assaggiare', body: 'Il piatto nazionale è il kokoda: pesce crudo marinato nel lime con latte di cocco, cipolla e peperoncino. Non perderti un banchetto lovo, in cui carne, pesce e tuberi cuociono sottoterra su pietre roventi. Grazie alla grande comunità indo-figiana, curry e roti sono ottimi. Durante una cerimonia ti offriranno la kava, una bevanda terrosa a base di radice di pepe che intorpidisce leggermente la lingua.' },
            { title: 'Soldi, telefono e trasporti', body: 'La valuta è il dollaro figiano (FJD). Le carte russe non funzionano, quindi porta contanti in dollari, euro o dollari australiani e cambiali all’aeroporto di Nadi; sulle isole esterne si paga in contanti o con carta con sovrapprezzo. Le SIM di Vodafone e Digicel si vendono direttamente in aeroporto, ma sulle isole piccole il segnale è debole. Catamarani e idrovolanti collegano le isole, mentre su Viti Levu ci sono autobus e taxi.' },
          ],
        },
      },
    },
  },
  cities: [
    {
      id: 'nadi', lat: -17.7765, lng: 177.4356, image: 'rlhiN-6dxyo', gallery: ['sqrD447aTGw', 'MkSlXoYg0Vo', 'Xk0IA1QNomI'],
      rating: 4.4, reviews: 6120, tags: ['beaches', 'culture', 'gardens', 'spa'], months: [5, 6, 7, 8, 9, 10], budgetPerDay: 110, currency: 'FJD',
      language: 'en', timezone: 'UTC+12', zoom: 11, theme: { accent: '#b45309', accent2: '#10b981', motif: 'palms' },
      text: {
        ru: { name: 'Нади и Денарау', tagline: 'Ворота Фиджи: индуистский храм, орхидеи и грязевые ванны', description: 'Нади — оживлённый город у главного международного аэропорта страны, где индийские лавки соседствуют с рынками тропических фруктов. По соседству, на острове Денарау, стоят курортные отели и порт, откуда катамараны уходят на острова Мамануса и Ясава.', tips: ['Проведите здесь хотя бы день перед островами: в Нади дешевле купить SIM-карту, снять наличные и запастись солнцезащитным кремом.', 'Цены у таксистов обговаривайте заранее — в большинстве машин нет счётчиков.'], gettingThere: 'Международный аэропорт Нади в 15 минутах езды от центра города и в 25 минутах от Денарау; в зале прилёта есть стойки такси с фиксированными тарифами и автобусы отелей.' },
        en: { name: 'Nadi and Denarau', tagline: 'Fiji’s gateway: a Hindu temple, orchids and mud baths', description: 'Nadi is a busy town beside the country’s main international airport, where Indian shops stand next to tropical fruit markets. Next door, on Denarau Island, are the resort hotels and the marina from which catamarans leave for the Mamanuca and Yasawa islands.', tips: ['Spend at least a day here before the islands: Nadi is the cheapest place to buy a SIM card, get cash and stock up on sunscreen.', 'Agree taxi fares in advance, as most cars have no meters.'], gettingThere: 'Nadi International Airport is 15 minutes’ drive from the town centre and 25 minutes from Denarau; the arrivals hall has taxi desks with fixed fares and hotel shuttles.' },
        es: { name: 'Nadi y Denarau', tagline: 'La puerta de Fiyi: templo hindú, orquídeas y baños de lodo', description: 'Nadi es una ciudad animada junto al principal aeropuerto internacional del país, donde las tiendas indias conviven con mercados de fruta tropical. Al lado, en la isla de Denarau, están los hoteles resort y el puerto del que salen los catamaranes hacia las islas Mamanuca y Yasawa.', tips: ['Pasa aquí al menos un día antes de las islas: en Nadi es más barato comprar la SIM, sacar efectivo y hacerte con protector solar.', 'Acuerda el precio del taxi de antemano, porque la mayoría no lleva taxímetro.'], gettingThere: 'El aeropuerto internacional de Nadi está a 15 minutos en coche del centro y a 25 de Denarau; en la sala de llegadas hay mostradores de taxi con tarifas fijas y traslados de hotel.' },
        de: { name: 'Nadi und Denarau', tagline: 'Fidschis Tor: Hindu-Tempel, Orchideen und Schlammbäder', description: 'Nadi ist eine lebhafte Stadt am wichtigsten internationalen Flughafen des Landes, wo indische Läden neben Märkten mit tropischen Früchten stehen. Gleich nebenan auf Denarau Island liegen die Resorthotels und der Hafen, von dem die Katamarane zu den Mamanuca- und Yasawa-Inseln ablegen.', tips: ['Bleib vor den Inseln mindestens einen Tag hier: In Nadi kaufst du SIM-Karte, Bargeld und Sonnencreme am günstigsten.', 'Vereinbare Taxipreise vorab, denn die meisten Wagen haben kein Taxameter.'], gettingThere: 'Der internationale Flughafen Nadi liegt 15 Autominuten vom Stadtzentrum und 25 Minuten von Denarau entfernt; in der Ankunftshalle gibt es Taxischalter mit Festpreisen und Hotelshuttles.' },
        fr: { name: 'Nadi et Denarau', tagline: 'La porte des Fidji : temple hindou, orchidées et bains de boue', description: 'Nadi est une ville animée près du principal aéroport international du pays, où les boutiques indiennes côtoient les marchés de fruits tropicaux. Juste à côté, sur l’île de Denarau, se trouvent les hôtels-clubs et le port d’où partent les catamarans pour les îles Mamanuca et Yasawa.', tips: ['Passez au moins une journée ici avant les îles : c’est à Nadi qu’il est le moins cher d’acheter une carte SIM, de retirer du liquide et de faire le plein de crème solaire.', 'Négociez le prix du taxi à l’avance, car la plupart n’ont pas de compteur.'], gettingThere: 'L’aéroport international de Nadi est à 15 minutes en voiture du centre et à 25 minutes de Denarau ; le hall des arrivées compte des comptoirs de taxis à tarif fixe et des navettes d’hôtels.' },
        it: { name: 'Nadi e Denarau', tagline: 'La porta delle Figi: tempio induista, orchidee e bagni di fango', description: 'Nadi è una città vivace accanto al principale aeroporto internazionale del Paese, dove i negozi indiani convivono con i mercati di frutta tropicale. Accanto, sull’isola di Denarau, ci sono i resort e il porto da cui partono i catamarani per le isole Mamanuca e Yasawa.', tips: ['Fermati qui almeno un giorno prima delle isole: a Nadi costa meno comprare la SIM, prelevare contanti e fare scorta di crema solare.', 'Concorda prima il prezzo del taxi, perché la maggior parte non ha il tassametro.'], gettingThere: 'L’aeroporto internazionale di Nadi è a 15 minuti d’auto dal centro e a 25 da Denarau; nella sala arrivi ci sono banchi taxi a tariffa fissa e navette degli hotel.' },
      },
    },
    {
      id: 'mamanuca-yasawa', lat: -17.6800, lng: 177.1500, image: 'MkSlXoYg0Vo', gallery: ['Xk0IA1QNomI', 'sqrD447aTGw', 'rlhiN-6dxyo'],
      rating: 4.8, reviews: 8350, tags: ['islands', 'beaches', 'diving', 'romance'], months: [5, 6, 7, 8, 9, 10], budgetPerDay: 180, currency: 'FJD',
      language: 'en', timezone: 'UTC+12', zoom: 9, theme: { accent: '#0e7490', accent2: '#5eead4', motif: 'waves' },
      text: {
        ru: { name: 'Острова Мамануса и Ясава', tagline: 'Открыточные лагуны, плавучий бар и пещеры с подземным озером', description: 'Цепочка вулканических и коралловых островов к западу от Вити-Лева — это и есть Фиджи с открыток: белый песок, пальмы и бирюзовая вода. Ближние Мамануса славятся курортами и рифами, а дальние Ясава — дикими пляжами, деревнями и Голубой лагуной.', tips: ['Проездной Bula Pass на катамаран Yasawa Flyer позволяет перемещаться между островами в своём темпе.', 'Берите с собой наличные и аптечку: на большинстве островов нет ни банкоматов, ни аптек.'], gettingThere: 'Из порта Денарау катамараны идут до ближних островов Мамануса 30–90 минут, до Ясава — 2–5 часов; быстрее всего долететь на гидросамолёте или вертолёте из аэропорта Нади.' },
        en: { name: 'Mamanuca and Yasawa islands', tagline: 'Postcard lagoons, a floating bar and caves with a hidden pool', description: 'This chain of volcanic and coral islands west of Viti Levu is the Fiji of the postcards: white sand, palm trees and turquoise water. The nearby Mamanucas are known for resorts and reefs, the more remote Yasawas for wild beaches, villages and the Blue Lagoon.', tips: ['A Bula Pass for the Yasawa Flyer catamaran lets you hop between the islands at your own pace.', 'Bring cash and a first-aid kit, as most islands have neither ATMs nor pharmacies.'], gettingThere: 'From Port Denarau, catamarans take 30–90 minutes to the nearby Mamanucas and 2–5 hours to the Yasawas; the fastest way is a seaplane or helicopter from Nadi Airport.' },
        es: { name: 'Islas Mamanuca y Yasawa', tagline: 'Lagunas de postal, un bar flotante y cuevas con lago oculto', description: 'Esta cadena de islas volcánicas y coralinas al oeste de Viti Levu es la Fiyi de las postales: arena blanca, palmeras y agua turquesa. Las cercanas Mamanuca son famosas por sus resorts y arrecifes, y las más remotas Yasawa por sus playas salvajes, aldeas y la Laguna Azul.', tips: ['El Bula Pass del catamarán Yasawa Flyer te permite saltar de isla en isla a tu ritmo.', 'Lleva efectivo y un botiquín: la mayoría de las islas no tienen cajeros ni farmacias.'], gettingThere: 'Desde Port Denarau los catamaranes tardan de 30 a 90 minutos a las cercanas Mamanuca y de 2 a 5 horas a las Yasawa; lo más rápido es un hidroavión o un helicóptero desde el aeropuerto de Nadi.' },
        de: { name: 'Mamanuca- und Yasawa-Inseln', tagline: 'Postkartenlagunen, eine schwimmende Bar und Höhlen mit Grottensee', description: 'Die Kette vulkanischer Inseln und Koralleninseln westlich von Viti Levu ist das Fidschi der Postkarten: weißer Sand, Palmen und türkisfarbenes Wasser. Die nahen Mamanucas sind für Resorts und Riffe bekannt, die abgelegeneren Yasawas für wilde Strände, Dörfer und die Blaue Lagune.', tips: ['Mit dem Bula Pass für den Yasawa-Flyer-Katamaran hüpfst du in deinem eigenen Tempo von Insel zu Insel.', 'Nimm Bargeld und eine Reiseapotheke mit, denn auf den meisten Inseln gibt es weder Geldautomaten noch Apotheken.'], gettingThere: 'Von Port Denarau brauchen die Katamarane 30–90 Minuten zu den nahen Mamanucas und 2–5 Stunden zu den Yasawas; am schnellsten geht es mit Wasserflugzeug oder Hubschrauber ab Flughafen Nadi.' },
        fr: { name: 'Îles Mamanuca et Yasawa', tagline: 'Lagons de carte postale, bar flottant et grottes au lac caché', description: 'Ce chapelet d’îles volcaniques et coralliennes à l’ouest de Viti Levu, ce sont les Fidji des cartes postales : sable blanc, palmiers et eau turquoise. Les Mamanuca toutes proches sont réputées pour leurs hôtels et leurs récifs, les Yasawa plus lointaines pour leurs plages sauvages, leurs villages et le Blue Lagoon.', tips: ['Le Bula Pass du catamaran Yasawa Flyer permet de passer d’île en île à votre rythme.', 'Emportez du liquide et une trousse de secours : la plupart des îles n’ont ni distributeur ni pharmacie.'], gettingThere: 'Depuis Port Denarau, les catamarans mettent 30 à 90 minutes pour les Mamanuca et 2 à 5 heures pour les Yasawa ; le plus rapide reste l’hydravion ou l’hélicoptère depuis l’aéroport de Nadi.' },
        it: { name: 'Isole Mamanuca e Yasawa', tagline: 'Lagune da cartolina, un bar galleggiante e grotte con lago nascosto', description: 'Questa catena di isole vulcaniche e coralline a ovest di Viti Levu è la Figi delle cartoline: sabbia bianca, palme e acqua turchese. Le vicine Mamanuca sono note per resort e barriere coralline, le più remote Yasawa per spiagge selvagge, villaggi e la Laguna Blu.', tips: ['Il Bula Pass del catamarano Yasawa Flyer ti permette di saltare da un’isola all’altra con i tuoi tempi.', 'Porta contanti e un kit di pronto soccorso: sulla maggior parte delle isole non ci sono né bancomat né farmacie.'], gettingThere: 'Da Port Denarau i catamarani impiegano 30–90 minuti per le vicine Mamanuca e 2–5 ore per le Yasawa; il modo più rapido è un idrovolante o un elicottero dall’aeroporto di Nadi.' },
      },
    },
  ],
  places: [
    // Nadi
    {
      id: 'nadi-sri-siva-subramaniya-temple', city: 'nadi', category: 'attraction', lat: -17.8050, lng: 177.4180, image: 'rlhiN-6dxyo',
      rating: 4.6, reviews: 4100, tags: ['temples', 'culture', 'architecture'], hours: '05:30–19:00',
      address: 'Queens Road, Nadi',
      text: {
        ru: { name: 'Храм Шри Шива Субрамания', description: 'Крупнейший индуистский храм Южного полушария построен в дравидийском стиле мастерами из Индии: яркие резные башни, расписные потолки и статуи божеств. Он напоминает, что почти треть жителей Фиджи — потомки индийских переселенцев.', tip: 'На входе снимите обувь, оденьтесь так, чтобы покрыть плечи и колени, и не фотографируйте внутренние святилища.' },
        en: { name: 'Sri Siva Subramaniya Temple', description: 'The largest Hindu temple in the southern hemisphere was built in Dravidian style by craftsmen from India, with brightly carved towers, painted ceilings and statues of deities. It is a reminder that nearly a third of Fijians descend from Indian settlers.', tip: 'Take off your shoes at the entrance, cover your shoulders and knees and don’t photograph the inner shrines.' },
        es: { name: 'Templo Sri Siva Subramaniya', description: 'El mayor templo hindú del hemisferio sur lo levantaron en estilo dravídico artesanos llegados de la India, con torres de vivos colores talladas, techos pintados y estatuas de deidades. Recuerda que casi un tercio de los fiyianos desciende de colonos indios.', tip: 'Descálzate en la entrada, cúbrete hombros y rodillas y no fotografíes los santuarios interiores.' },
        de: { name: 'Sri-Siva-Subramaniya-Tempel', description: 'Der größte Hindu-Tempel der Südhalbkugel wurde von Handwerkern aus Indien im drawidischen Stil errichtet, mit bunt geschnitzten Türmen, bemalten Decken und Götterstatuen. Er erinnert daran, dass fast ein Drittel der Fidschianer von indischen Einwanderern abstammt.', tip: 'Zieh am Eingang die Schuhe aus, bedecke Schultern und Knie und fotografier die inneren Schreine nicht.' },
        fr: { name: 'Temple Sri Siva Subramaniya', description: 'Le plus grand temple hindou de l’hémisphère sud a été bâti dans le style dravidien par des artisans venus d’Inde, avec ses tours sculptées aux couleurs vives, ses plafonds peints et ses statues de divinités. Il rappelle que près d’un tiers des Fidjiens descendent de colons indiens.', tip: 'Déchaussez-vous à l’entrée, couvrez épaules et genoux et ne photographiez pas les sanctuaires intérieurs.' },
        it: { name: 'Tempio Sri Siva Subramaniya', description: 'Il più grande tempio induista dell’emisfero australe è stato costruito in stile dravidico da artigiani arrivati dall’India, con torri scolpite dai colori vivaci, soffitti dipinti e statue di divinità. Ricorda che quasi un terzo dei figiani discende da coloni indiani.', tip: 'Togli le scarpe all’ingresso, copri spalle e ginocchia e non fotografare i santuari interni.' },
      },
    },
    {
      id: 'nadi-garden-of-the-sleeping-giant', city: 'nadi', category: 'nature', lat: -17.7250, lng: 177.4950, image: 'rlhiN-6dxyo',
      rating: 4.5, reviews: 3700, tags: ['gardens', 'nature', 'photo'], hours: '09:00–17:00',
      address: 'Wailoko Road, Sabeto, Nadi',
      text: {
        ru: { name: 'Сад «Спящий великан»', description: 'Сад орхидей у подножия гор Сабето, напоминающих силуэт спящего человека, основал в 1977 году голливудский актёр Рэймонд Бёрр. Здесь растут сотни сортов орхидей, а дощатые тропы ведут через тропический лес к прудам с лилиями.', tip: 'Приезжайте утром, пока не жарко, и совместите визит с грязевыми ваннами Сабето в паре километров отсюда.' },
        en: { name: 'Garden of the Sleeping Giant', description: 'This orchid garden at the foot of the Sabeto mountains, whose outline resembles a sleeping man, was founded in 1977 by Hollywood actor Raymond Burr. Hundreds of orchid varieties grow here, and boardwalks lead through rainforest to lily ponds.', tip: 'Come in the morning before the heat and combine it with the Sabeto mud pools a couple of kilometres away.' },
        es: { name: 'Jardín del Gigante Dormido', description: 'Este jardín de orquídeas al pie de los montes Sabeto, cuya silueta recuerda a un hombre dormido, lo fundó en 1977 el actor de Hollywood Raymond Burr. Aquí crecen cientos de variedades de orquídeas, y las pasarelas cruzan la selva hasta estanques de nenúfares.', tip: 'Ven por la mañana, antes del calor, y combínalo con los baños de lodo de Sabeto, a un par de kilómetros.' },
        de: { name: 'Garden of the Sleeping Giant', description: 'Der Orchideengarten am Fuß der Sabeto-Berge, deren Umriss an einen schlafenden Mann erinnert, wurde 1977 vom Hollywood-Schauspieler Raymond Burr gegründet. Hier wachsen Hunderte Orchideensorten, und Holzstege führen durch den Regenwald zu Seerosenteichen.', tip: 'Komm morgens vor der Hitze und verbinde den Besuch mit den Schlammbädern von Sabeto ein paar Kilometer weiter.' },
        fr: { name: 'Jardin du Géant endormi', description: 'Ce jardin d’orchidées au pied des monts Sabeto, dont la silhouette évoque un homme endormi, a été fondé en 1977 par l’acteur hollywoodien Raymond Burr. Des centaines de variétés d’orchidées y poussent, et des passerelles traversent la forêt tropicale jusqu’à des bassins de nénuphars.', tip: 'Venez le matin avant la chaleur et combinez la visite avec les bains de boue de Sabeto, à deux kilomètres.' },
        it: { name: 'Giardino del Gigante Addormentato', description: 'Questo giardino di orchidee ai piedi dei monti Sabeto, il cui profilo ricorda un uomo addormentato, fu fondato nel 1977 dall’attore di Hollywood Raymond Burr. Qui crescono centinaia di varietà di orchidee e le passerelle attraversano la foresta pluviale fino a stagni di ninfee.', tip: 'Vieni al mattino, prima del caldo, e abbinalo ai bagni di fango di Sabeto a un paio di chilometri.' },
      },
    },
    {
      id: 'nadi-natadola-beach', city: 'nadi', category: 'nature', spot: 'insta', lat: -18.1080, lng: 177.3200, image: 'sqrD447aTGw',
      rating: 4.7, reviews: 3200, tags: ['beaches', 'photo', 'sunset'], price: { kind: 'free' }, hours: 'always',
      address: 'Natadola Bay, Coral Coast, Viti Levu',
      text: {
        ru: { name: 'Пляж Натадола', description: 'Длинная дуга белого песка с прозрачной водой, где можно купаться в любой прилив, — один из лучших пляжей главного острова. Местные жители предлагают здесь конные прогулки вдоль кромки воды.', tip: 'Снимайте на закате с южного конца пляжа, когда солнце садится в море, а всадники идут по мокрому песку.' },
        en: { name: 'Natadola Beach', description: 'A long arc of white sand and clear water where you can swim at any tide, one of the best beaches on the main island. Locals offer horse rides along the water’s edge.', tip: 'Shoot at sunset from the southern end of the beach, as the sun sinks into the sea and riders pass along the wet sand.' },
        es: { name: 'Playa de Natadola', description: 'Un largo arco de arena blanca y agua transparente donde puedes bañarte con cualquier marea, una de las mejores playas de la isla principal. Los vecinos ofrecen paseos a caballo por la orilla.', tip: 'Fotografía al atardecer desde el extremo sur de la playa, cuando el sol se hunde en el mar y los jinetes pasan por la arena mojada.' },
        de: { name: 'Natadola Beach', description: 'Ein langer Bogen aus weißem Sand und klarem Wasser, in dem du bei jeder Tide baden kannst – einer der schönsten Strände der Hauptinsel. Einheimische bieten Ausritte entlang der Wasserlinie an.', tip: 'Fotografier bei Sonnenuntergang vom Südende des Strandes, wenn die Sonne ins Meer sinkt und Reiter über den nassen Sand ziehen.' },
        fr: { name: 'Plage de Natadola', description: 'Un long arc de sable blanc et d’eau limpide où l’on se baigne à toute marée, l’une des plus belles plages de l’île principale. Les habitants proposent des balades à cheval au bord de l’eau.', tip: 'Photographiez au coucher du soleil depuis l’extrémité sud de la plage, quand le soleil plonge dans la mer et que les cavaliers longent le sable mouillé.' },
        it: { name: 'Spiaggia di Natadola', description: 'Un lungo arco di sabbia bianca e acqua limpida dove puoi fare il bagno con qualsiasi marea, una delle spiagge più belle dell’isola principale. I residenti offrono passeggiate a cavallo sul bagnasciuga.', tip: 'Scatta al tramonto dall’estremità sud della spiaggia, quando il sole cala nel mare e i cavalieri passano sulla sabbia bagnata.' },
      },
    },
    {
      id: 'nadi-sabeto-mud-pool', city: 'nadi', category: 'nature', spot: 'hidden', lat: -17.7300, lng: 177.4900, image: 'rlhiN-6dxyo',
      rating: 4.4, reviews: 2600, tags: ['spa', 'nature', 'culture'], price: { kind: 'from', amount: 35, currency: 'FJD' }, hours: '09:00–17:00',
      address: 'Wailoko Road, Sabeto, Nadi',
      text: {
        ru: { name: 'Грязевые ванны и горячие источники Сабето', description: 'Простая деревенская купальня в долине Сабето: сначала вы обмазываетесь целебной грязью, сохнете на солнце, а потом отмокаете в бассейнах с горячей геотермальной водой. Хозяйство ведёт местная община, и туристические автобусы здесь бывают редко.', tip: 'Возьмите такси из Нади (около 20 минут) и попросите водителя подождать; не берите светлый купальник — грязь отстирывается плохо.' },
        en: { name: 'Sabeto Mud Pool and Hot Springs', description: 'A simple village bathing spot in the Sabeto valley: you coat yourself in healing mud, let it dry in the sun, then soak in pools of hot geothermal water. It is run by the local community and tour buses rarely come by.', tip: 'Take a taxi from Nadi (about 20 minutes) and ask the driver to wait; skip the light-coloured swimsuit, as the mud doesn’t wash out easily.' },
        es: { name: 'Lodo y aguas termales de Sabeto', description: 'Un sencillo baño de aldea en el valle de Sabeto: te cubres de lodo curativo, dejas que se seque al sol y luego te sumerges en pozas de agua geotérmica caliente. Lo gestiona la comunidad local y rara vez llegan autobuses turísticos.', tip: 'Coge un taxi desde Nadi (unos 20 minutos) y pide al conductor que espere; no lleves bañador claro, porque el barro cuesta de quitar.' },
        de: { name: 'Schlammbad und heiße Quellen von Sabeto', description: 'Ein einfacher Dorfbadeplatz im Sabeto-Tal: Du reibst dich mit heilendem Schlamm ein, lässt ihn in der Sonne trocknen und weichst dann in Becken mit heißem Thermalwasser. Betrieben wird er von der Dorfgemeinschaft, Reisebusse kommen selten vorbei.', tip: 'Nimm ein Taxi aus Nadi (etwa 20 Minuten) und bitte den Fahrer zu warten; lass helle Badesachen zu Hause, der Schlamm wäscht sich schlecht aus.' },
        fr: { name: 'Bains de boue et sources chaudes de Sabeto', description: 'Un bain villageois tout simple dans la vallée de Sabeto : on s’enduit de boue bienfaisante, on la laisse sécher au soleil, puis on se prélasse dans des bassins d’eau géothermique chaude. Il est géré par la communauté locale et les cars de touristes y passent rarement.', tip: 'Prenez un taxi depuis Nadi (20 minutes environ) et demandez au chauffeur d’attendre ; évitez le maillot clair, la boue part mal au lavage.' },
        it: { name: 'Fanghi e sorgenti calde di Sabeto', description: 'Un semplice bagno di villaggio nella valle di Sabeto: ti spalmi di fango curativo, lo lasci asciugare al sole e poi ti immergi in vasche di acqua geotermica calda. È gestito dalla comunità locale e i pullman turistici passano di rado.', tip: 'Prendi un taxi da Nadi (circa 20 minuti) e chiedi all’autista di aspettarti; evita il costume chiaro, perché il fango si lava via a fatica.' },
      },
    },
    {
      id: 'nadi-municipal-market', city: 'nadi', category: 'food', lat: -17.8020, lng: 177.4175, image: 'rlhiN-6dxyo',
      rating: 4.2, reviews: 1800, tags: ['market', 'food', 'culture'], price: { kind: 'level', level: 1 }, hours: '06:00–17:00',
      address: 'Hospital Road, Nadi',
      text: {
        ru: { name: 'Муниципальный рынок Нади', description: 'Шумный крытый рынок, где фермеры продают папайю, ананасы, таро, специи для карри и связки корня кавы. Это лучший способ увидеть повседневную жизнь Фиджи и купить подарок для деревенской церемонии.', tip: 'Купите здесь пучок корня кавы яконы для севусеву и попробуйте свежую кокосовую воду; по воскресеньям рынок закрыт.' },
        en: { name: 'Nadi Municipal Market', description: 'A noisy covered market where farmers sell papaya, pineapples, taro, curry spices and bundles of kava root. It is the best window onto everyday Fijian life and the place to buy a gift for a village ceremony.', tip: 'Buy a bundle of yaqona kava root here for a sevusevu and try fresh coconut water; the market is closed on Sundays.' },
        es: { name: 'Mercado municipal de Nadi', description: 'Un ruidoso mercado cubierto donde los agricultores venden papaya, piña, taro, especias para curri y manojos de raíz de kava. Es la mejor ventana a la vida cotidiana de Fiyi y el lugar para comprar un regalo para una ceremonia en una aldea.', tip: 'Compra aquí un manojo de raíz de kava yaqona para el sevusevu y prueba agua de coco fresca; los domingos cierra.' },
        de: { name: 'Städtischer Markt von Nadi', description: 'Ein lauter überdachter Markt, auf dem Bauern Papaya, Ananas, Taro, Currygewürze und Bündel von Kava-Wurzeln verkaufen. Er ist das beste Fenster in den Alltag Fidschis und der Ort für ein Gastgeschenk zu einer Dorfzeremonie.', tip: 'Kauf hier ein Bündel Yaqona-Kava für das Sevusevu und probier frisches Kokoswasser; sonntags ist geschlossen.' },
        fr: { name: 'Marché municipal de Nadi', description: 'Un marché couvert bruyant où les paysans vendent papayes, ananas, taro, épices à curry et bottes de racines de kava. C’est la meilleure fenêtre sur la vie quotidienne fidjienne et l’endroit où acheter un cadeau pour une cérémonie au village.', tip: 'Achetez ici une botte de kava yaqona pour le sevusevu et goûtez une eau de coco fraîche ; le marché est fermé le dimanche.' },
        it: { name: 'Mercato municipale di Nadi', description: 'Un rumoroso mercato coperto dove i contadini vendono papaya, ananas, taro, spezie per il curry e mazzi di radice di kava. È la finestra migliore sulla vita quotidiana delle Figi e il posto dove comprare un dono per una cerimonia al villaggio.', tip: 'Compra qui un mazzo di radice di kava yaqona per il sevusevu e prova l’acqua di cocco fresca; la domenica è chiuso.' },
      },
    },
    // Mamanuca and Yasawa islands
    {
      id: 'mamanuca-yasawa-cloud-9', city: 'mamanuca-yasawa', category: 'food', spot: 'insta', lat: -17.7450, lng: 177.1280, image: 'Xk0IA1QNomI',
      rating: 4.6, reviews: 5400, tags: ['photo', 'nightlife', 'food', 'islands'], price: { kind: 'level', level: 3 }, hours: '10:00–17:00',
      address: 'Ro Ro Reef, Mamanuca Islands',
      text: {
        ru: { name: 'Плавучий бар Cloud 9', description: 'Двухэтажная деревянная платформа посреди рифа в бирюзовой лагуне, где готовят пиццу в дровяной печи, играет диджей и можно нырять с маской прямо с палубы.', tip: 'Лучший кадр — с верхней палубы на ступени, уходящие в бирюзовую воду; приезжайте первым рейсом, пока платформа не заполнилась.' },
        en: { name: 'Cloud 9 floating bar', description: 'A two-storey wooden platform on a reef in a turquoise lagoon, where wood-fired pizza comes out of the oven, a DJ plays and you can snorkel straight off the deck.', tip: 'The best shot is from the upper deck down to the steps leading into the turquoise water; take the first boat before the platform fills up.' },
        es: { name: 'Bar flotante Cloud 9', description: 'Una plataforma de madera de dos pisos sobre un arrecife en una laguna turquesa, donde sacan pizza del horno de leña, pincha un DJ y puedes hacer esnórquel desde la misma cubierta.', tip: 'La mejor foto se toma desde la cubierta superior hacia los escalones que bajan al agua turquesa; ve en el primer barco, antes de que se llene.' },
        de: { name: 'Schwimmende Bar Cloud 9', description: 'Eine zweistöckige Holzplattform auf einem Riff in einer türkisfarbenen Lagune, wo Pizza aus dem Holzofen kommt, ein DJ auflegt und du direkt vom Deck schnorcheln kannst.', tip: 'Das beste Bild gelingt vom Oberdeck hinunter auf die Stufen ins türkisfarbene Wasser; nimm das erste Boot, bevor sich die Plattform füllt.' },
        fr: { name: 'Bar flottant Cloud 9', description: 'Une plateforme en bois à deux étages posée sur un récif au milieu d’un lagon turquoise, où les pizzas sortent du four à bois, un DJ mixe et l’on fait du snorkeling directement depuis le pont.', tip: 'La plus belle photo se prend du pont supérieur vers les marches qui plongent dans l’eau turquoise ; venez par le premier bateau, avant que la plateforme ne se remplisse.' },
        it: { name: 'Bar galleggiante Cloud 9', description: 'Una piattaforma di legno a due piani su una barriera corallina in una laguna turchese, dove la pizza esce dal forno a legna, suona un DJ e puoi fare snorkeling direttamente dal ponte.', tip: 'Lo scatto migliore è dal ponte superiore verso i gradini che scendono nell’acqua turchese; arriva con la prima barca, prima che la piattaforma si riempia.' },
      },
    },
    {
      id: 'mamanuca-yasawa-monuriki', city: 'mamanuca-yasawa', category: 'nature', lat: -17.6106, lng: 177.0333, image: 'sqrD447aTGw',
      rating: 4.7, reviews: 2900, tags: ['islands', 'beaches', 'diving'], price: { kind: 'from', amount: 150, currency: 'FJD' }, hours: '09:00–17:00',
      address: 'Monuriki Island, Mamanuca Islands',
      text: {
        ru: { name: 'Остров Монурики', description: 'Необитаемый остров с зелёной вулканической вершиной и белым пляжем, где Том Хэнкс выживал в фильме «Изгой». Вокруг — рифы для снорклинга с черепахами и мантами.', tip: 'Попадают сюда только с лодочными турами с соседних островов; на пляже ищите самодельный мяч «Уилсон», который туристы оставляют в память о фильме.' },
        en: { name: 'Monuriki Island', description: 'An uninhabited island with a green volcanic peak and a white beach, where Tom Hanks fought to survive in Cast Away. Around it are reefs for snorkelling with turtles and manta rays.', tip: 'You can only get here on boat tours from the neighbouring islands; look on the beach for a homemade “Wilson” ball left by visitors in honour of the film.' },
        es: { name: 'Isla Monuriki', description: 'Una isla deshabitada con un pico volcánico verde y una playa blanca, donde Tom Hanks luchaba por sobrevivir en Náufrago. A su alrededor hay arrecifes para hacer esnórquel con tortugas y mantas.', tip: 'Solo se llega con excursiones en barco desde las islas vecinas; busca en la playa una pelota «Wilson» casera que dejan los visitantes en homenaje a la película.' },
        de: { name: 'Monuriki Island', description: 'Eine unbewohnte Insel mit grünem Vulkangipfel und weißem Strand, auf der Tom Hanks in „Cast Away“ ums Überleben kämpfte. Rundherum liegen Riffe zum Schnorcheln mit Schildkröten und Mantas.', tip: 'Hierher kommst du nur mit Bootstouren von den Nachbarinseln; such am Strand nach einem selbst gebastelten „Wilson“-Ball, den Besucher zu Ehren des Films hinterlassen.' },
        fr: { name: 'Île de Monuriki', description: 'Une île inhabitée au pic volcanique verdoyant et à la plage blanche, où Tom Hanks luttait pour survivre dans « Seul au monde ». Tout autour, des récifs invitent au snorkeling avec tortues et raies manta.', tip: 'On ne s’y rend qu’en excursion en bateau depuis les îles voisines ; cherchez sur la plage un ballon « Wilson » fabriqué par des visiteurs en hommage au film.' },
        it: { name: 'Isola di Monuriki', description: 'Un’isola disabitata con un verde picco vulcanico e una spiaggia bianca, dove Tom Hanks lottava per sopravvivere in Cast Away. Intorno ci sono barriere per lo snorkeling con tartarughe e mante.', tip: 'Ci si arriva solo con escursioni in barca dalle isole vicine; cerca sulla spiaggia un pallone «Wilson» fatto a mano lasciato dai visitatori in omaggio al film.' },
      },
    },
    {
      id: 'mamanuca-yasawa-blue-lagoon', city: 'mamanuca-yasawa', category: 'nature', lat: -16.9370, lng: 177.3670, image: 'MkSlXoYg0Vo',
      rating: 4.8, reviews: 3800, tags: ['islands', 'beaches', 'diving', 'romance'], price: { kind: 'free' }, hours: 'always',
      address: 'Nanuya Lailai Island, Yasawa Islands',
      text: {
        ru: { name: 'Голубая лагуна', description: 'Защищённая лагуна у острова Нануйя-Лайлай на севере архипелага Ясава, где снимали фильм «Голубая лагуна» 1980 года. Спокойная прозрачная вода, рифы у самого берега и белые пляжи словно созданы для снорклинга.', tip: 'Остановитесь на ночь в одном из эколоджей Ясава, чтобы застать лагуну утром, пока не пришли яхты.' },
        en: { name: 'Blue Lagoon', description: 'A sheltered lagoon off Nanuya Lailai island in the northern Yasawas, where the 1980 film The Blue Lagoon was shot. Calm clear water, reefs right off the shore and white beaches make it perfect for snorkelling.', tip: 'Stay overnight at one of the Yasawa eco-lodges to enjoy the lagoon in the morning before the yachts arrive.' },
        es: { name: 'Laguna Azul', description: 'Una laguna resguardada junto a la isla de Nanuya Lailai, en el norte de las Yasawa, donde se rodó la película El lago azul de 1980. Agua tranquila y transparente, arrecifes junto a la orilla y playas blancas la hacen perfecta para el esnórquel.', tip: 'Pasa la noche en uno de los ecolodges de las Yasawa para disfrutar de la laguna por la mañana, antes de que lleguen los yates.' },
        de: { name: 'Blaue Lagune', description: 'Eine geschützte Lagune vor der Insel Nanuya Lailai im Norden der Yasawas, in der 1980 der Film „Die blaue Lagune“ gedreht wurde. Ruhiges, klares Wasser, Riffe direkt vor dem Ufer und weiße Strände machen sie ideal zum Schnorcheln.', tip: 'Übernachte in einer der Eco-Lodges der Yasawas, um die Lagune morgens zu erleben, bevor die Jachten kommen.' },
        fr: { name: 'Blue Lagoon', description: 'Un lagon abrité au large de l’île de Nanuya Lailai, au nord des Yasawa, où fut tourné le film « Le Lagon bleu » en 1980. Eau calme et limpide, récifs au ras du rivage et plages blanches en font un spot parfait pour le snorkeling.', tip: 'Passez la nuit dans l’un des écolodges des Yasawa pour profiter du lagon le matin, avant l’arrivée des voiliers.' },
        it: { name: 'Laguna Blu', description: 'Una laguna riparata al largo dell’isola di Nanuya Lailai, nel nord delle Yasawa, dove nel 1980 fu girato il film Laguna blu. Acqua calma e limpida, coralli a ridosso della riva e spiagge bianche la rendono perfetta per lo snorkeling.', tip: 'Trascorri la notte in uno degli ecolodge delle Yasawa per goderti la laguna al mattino, prima dell’arrivo degli yacht.' },
      },
    },
    {
      id: 'mamanuca-yasawa-sawa-i-lau-caves', city: 'mamanuca-yasawa', category: 'nature', spot: 'hidden', lat: -16.8370, lng: 177.4690, image: 'MkSlXoYg0Vo',
      rating: 4.6, reviews: 1500, tags: ['adventure', 'islands', 'nature'], price: { kind: 'from', amount: 50, currency: 'FJD' }, hours: '09:00–16:00',
      address: 'Sawa-i-Lau Island, Yasawa Islands',
      text: {
        ru: { name: 'Пещеры Сава-и-Лау', description: 'Известняковые пещеры на крошечном острове в архипелаге Ясава, внутри которых под естественным световым окном плещется подземное озеро. Самые смелые ныряют под скалу во вторую, тёмную пещеру с древними петроглифами.', tip: 'Посещение организуют лоджи островов Ясава вместе с деревенским гидом; во вторую пещеру ныряйте только с ним и с фонариком.' },
        en: { name: 'Sawa-i-Lau Caves', description: 'Limestone caves on a tiny island in the Yasawa group, holding an underground pool beneath a natural skylight. The bold dive under the rock into a second, dark chamber with ancient petroglyphs.', tip: 'Visits are arranged by the Yasawa lodges with a village guide; only dive into the second cave with the guide and a torch.' },
        es: { name: 'Cuevas de Sawa-i-Lau', description: 'Cuevas de caliza en una diminuta isla del grupo Yasawa, con una laguna subterránea bajo un tragaluz natural. Los más atrevidos bucean bajo la roca hasta una segunda cámara oscura con antiguos petroglifos.', tip: 'Las visitas las organizan los alojamientos de las Yasawa con un guía de la aldea; bucea a la segunda cueva solo con él y con linterna.' },
        de: { name: 'Höhlen von Sawa-i-Lau', description: 'Kalksteinhöhlen auf einer winzigen Insel der Yasawa-Gruppe mit einem unterirdischen Becken unter einem natürlichen Oberlicht. Mutige tauchen unter dem Fels hindurch in eine zweite, dunkle Kammer mit uralten Felsritzungen.', tip: 'Besuche organisieren die Lodges der Yasawas mit einem Guide aus dem Dorf; tauch nur mit ihm und einer Lampe in die zweite Höhle.' },
        fr: { name: 'Grottes de Sawa-i-Lau', description: 'Des grottes calcaires sur un îlot de l’archipel des Yasawa, abritant un bassin souterrain sous une ouverture naturelle. Les plus audacieux plongent sous la roche vers une seconde salle obscure ornée de pétroglyphes anciens.', tip: 'Les visites sont organisées par les lodges des Yasawa avec un guide du village ; ne plongez vers la seconde grotte qu’avec lui et une lampe.' },
        it: { name: 'Grotte di Sawa-i-Lau', description: 'Grotte calcaree su un’isoletta dell’arcipelago delle Yasawa, con una pozza sotterranea sotto un lucernario naturale. I più audaci si immergono sotto la roccia per raggiungere una seconda camera buia con antichi petroglifi.', tip: 'Le visite le organizzano i lodge delle Yasawa con una guida del villaggio; immergiti verso la seconda grotta solo con lei e una torcia.' },
      },
    },
    {
      id: 'mamanuca-yasawa-beachcomber-island', city: 'mamanuca-yasawa', category: 'attraction', lat: -17.6720, lng: 177.2850, image: 'Xk0IA1QNomI',
      rating: 4.4, reviews: 2700, tags: ['islands', 'beaches', 'nightlife'], price: { kind: 'from', amount: 120, currency: 'FJD' }, hours: '09:00–17:00',
      address: 'Beachcomber Island, Mamanuca Islands',
      text: {
        ru: { name: 'Остров Бичкомбер', description: 'Крошечный песчаный остров, который можно обойти за десять минут, — одна из самых доступных точек Мамануса, куда ездят на день из Денарау. Здесь купаются, ныряют с маской, катаются на каяках и смотрят закат с бара на пляже.', tip: 'Берите тур на целый день с обедом и оставайтесь до последнего катамарана — закаты здесь одни из лучших на архипелаге.' },
        en: { name: 'Beachcomber Island', description: 'A tiny sandy island you can walk around in ten minutes, one of the most accessible spots in the Mamanucas and an easy day trip from Denarau. People come to swim, snorkel, kayak and watch the sunset from the beach bar.', tip: 'Book a full-day trip with lunch and stay for the last catamaran, as the sunsets here are among the best in the archipelago.' },
        es: { name: 'Isla Beachcomber', description: 'Una diminuta isla de arena que se rodea a pie en diez minutos, uno de los rincones más accesibles de las Mamanuca y una excursión fácil de un día desde Denarau. Se viene a nadar, hacer esnórquel, remar en kayak y ver el atardecer desde el bar de la playa.', tip: 'Reserva una excursión de día completo con almuerzo y quédate hasta el último catamarán: aquí se ven de los mejores atardeceres del archipiélago.' },
        de: { name: 'Beachcomber Island', description: 'Eine winzige Sandinsel, die du in zehn Minuten umrundest – einer der am leichtesten erreichbaren Orte der Mamanucas und ein einfacher Tagesausflug ab Denarau. Man kommt zum Baden, Schnorcheln, Kajakfahren und für den Sonnenuntergang an der Strandbar.', tip: 'Buch einen Ganztagesausflug mit Mittagessen und bleib bis zum letzten Katamaran – die Sonnenuntergänge gehören zu den schönsten des Archipels.' },
        fr: { name: 'Île de Beachcomber', description: 'Un îlot de sable dont on fait le tour à pied en dix minutes, l’un des coins les plus accessibles des Mamanuca et une excursion facile à la journée depuis Denarau. On y vient nager, faire du snorkeling et du kayak, et admirer le coucher du soleil depuis le bar de plage.', tip: 'Réservez une excursion à la journée avec déjeuner et restez jusqu’au dernier catamaran : les couchers de soleil y comptent parmi les plus beaux de l’archipel.' },
        it: { name: 'Isola di Beachcomber', description: 'Un’isoletta di sabbia che si gira a piedi in dieci minuti, uno degli angoli più accessibili delle Mamanuca e una facile gita in giornata da Denarau. Ci si viene per nuotare, fare snorkeling, andare in kayak e guardare il tramonto dal bar sulla spiaggia.', tip: 'Prenota una gita di un giorno intero con pranzo e resta fino all’ultimo catamarano: i tramonti qui sono tra i più belli dell’arcipelago.' },
      },
    },
    {
      "id": "nadi-bulaccino",
      "city": "nadi",
      "category": "food",
      "lat": -17.8036,
      "lng": 177.416,
      "image": "rlhiN-6dxyo",
      "rating": 4.4,
      "reviews": 1900,
      "tags": [
        "food",
        "city"
      ],
      "price": {
        "kind": "level",
        "level": 2
      },
      "hours": "07:00–17:00",
      "address": "Queens Road, Nadi",
      "text": {
        "ru": {
          "name": "Bulaccino",
          "description": "Любимое кафе местных и экспатов в центре Нади: свежий кофе, завтраки, сэндвичи и торты. Заходят сюда передохнуть от жары и подзарядить телефон.",
          "tip": "Закажите кофе со льдом и сэндвич на лёгкий завтрак и приходите до обеда — после 12:00 бывает людно. Платите картой или наличными в фиджийских долларах."
        },
        "en": {
          "name": "Bulaccino",
          "description": "A café in central Nadi popular with locals and expats, with fresh coffee, breakfasts, sandwiches and cakes. People drop in to cool off and recharge their phones.",
          "tip": "Order an iced coffee and a sandwich for a light breakfast, and come before lunch, as it gets busy after 12:00. Pay by card or in Fijian dollars."
        },
        "es": {
          "name": "Bulaccino",
          "description": "Una cafetería del centro de Nadi muy querida por locales y expatriados, con café recién hecho, desayunos, sándwiches y tartas. La gente entra a refrescarse y a cargar el móvil.",
          "tip": "Pide un café con hielo y un sándwich para un desayuno ligero, y ve antes de comer, porque después de las 12:00 se llena. Se paga con tarjeta o en dólares fiyianos."
        },
        "de": {
          "name": "Bulaccino",
          "description": "Ein Café im Zentrum von Nadi, beliebt bei Einheimischen und Expats, mit frischem Kaffee, Frühstück, Sandwiches und Kuchen. Man kommt, um sich abzukühlen und das Handy aufzuladen.",
          "tip": "Bestell einen Eiskaffee und ein Sandwich als leichtes Frühstück und komm vor dem Mittag, ab 12:00 Uhr wird es voll. Bezahlt wird mit Karte oder in Fidschi-Dollar."
        },
        "fr": {
          "name": "Bulaccino",
          "description": "Un café du centre de Nadi apprécié des habitants et des expatriés, avec café frais, petits-déjeuners, sandwichs et gâteaux. On y entre pour se rafraîchir et recharger son téléphone.",
          "tip": "Commandez un café glacé et un sandwich pour un petit-déjeuner léger, et venez avant le déjeuner, car c’est plein après 12 h. Paiement par carte ou en dollars fidjiens."
        },
        "it": {
          "name": "Bulaccino",
          "description": "Un caffè nel centro di Nadi amato da locali ed espatriati, con caffè fresco, colazioni, panini e torte. Ci si ferma per rinfrescarsi e ricaricare il telefono.",
          "tip": "Ordina un caffè freddo e un panino per una colazione leggera, e vieni prima di pranzo, perché dopo le 12:00 c’è affollamento. Si paga con carta o in dollari figiani."
        }
      }
    },
    {
      "id": "nadi-port-denarau-dining",
      "city": "nadi",
      "category": "food",
      "lat": -17.77,
      "lng": 177.383,
      "image": "sqrD447aTGw",
      "rating": 4.3,
      "reviews": 3100,
      "tags": [
        "food",
        "views",
        "cruise"
      ],
      "price": {
        "kind": "level",
        "level": 2
      },
      "hours": "07:00–22:00",
      "address": "Port Denarau Marina, Denarau Island, Nadi",
      "text": {
        "ru": {
          "name": "Рестораны Порт-Денарау",
          "description": "Набережная марины, откуда уходят катамараны на острова, заставлена кафе и ресторанами: от рыбы на гриле до пиццы и кокосового мороженого. Вечером здесь собираются, чтобы посмотреть на закат над яхтами.",
          "tip": "Закажите свежий кокоду (сырая рыба в кокосовом молоке) и столик у воды за час до заката. Платите картой; на закате лучше бронировать."
        },
        "en": {
          "name": "Port Denarau dining strip",
          "description": "The marina waterfront, from where catamarans leave for the islands, is lined with cafés and restaurants serving grilled fish, pizza and coconut ice cream. In the evening people gather to watch the sunset over the yachts.",
          "tip": "Order fresh kokoda (raw fish in coconut milk) and a table by the water an hour before sunset. Pay by card; booking is wise at sunset."
        },
        "es": {
          "name": "Restaurantes de Port Denarau",
          "description": "El paseo de la marina, de donde salen los catamaranes a las islas, está lleno de cafés y restaurantes con pescado a la parrilla, pizza y helado de coco. Por la noche la gente viene a ver la puesta de sol sobre los yates.",
          "tip": "Pide kokoda fresco (pescado crudo en leche de coco) y una mesa junto al agua una hora antes del atardecer. Se paga con tarjeta; conviene reservar para el atardecer."
        },
        "de": {
          "name": "Restaurantmeile Port Denarau",
          "description": "Die Marina-Promenade, von der die Katamarane zu den Inseln ablegen, ist gesäumt von Cafés und Restaurants mit gegrilltem Fisch, Pizza und Kokoseis. Abends kommen die Leute zum Sonnenuntergang über den Yachten.",
          "tip": "Bestell frisches Kokoda (roher Fisch in Kokosmilch) und einen Tisch am Wasser eine Stunde vor Sonnenuntergang. Bezahlt wird mit Karte; zum Sonnenuntergang lohnt eine Reservierung."
        },
        "fr": {
          "name": "Restaurants de Port Denarau",
          "description": "Le front de mer de la marina, d’où partent les catamarans vers les îles, est bordé de cafés et de restaurants servant poisson grillé, pizza et glace à la noix de coco. Le soir, on vient voir le coucher de soleil sur les yachts.",
          "tip": "Commandez un kokoda frais (poisson cru au lait de coco) et une table au bord de l’eau une heure avant le coucher du soleil. Paiement par carte ; mieux vaut réserver au coucher du soleil."
        },
        "it": {
          "name": "Ristoranti di Port Denarau",
          "description": "Il lungomare della marina, da cui partono i catamarani per le isole, è fiancheggiato da caffè e ristoranti con pesce alla griglia, pizza e gelato al cocco. La sera la gente viene a vedere il tramonto sugli yacht.",
          "tip": "Ordina un kokoda fresco (pesce crudo nel latte di cocco) e un tavolo sull’acqua un’ora prima del tramonto. Si paga con carta; al tramonto conviene prenotare."
        }
      }
    },
    {
      "id": "nadi-main-street-curry-houses",
      "city": "nadi",
      "category": "food",
      "lat": -17.8035,
      "lng": 177.417,
      "image": "rlhiN-6dxyo",
      "rating": 4.3,
      "reviews": 2100,
      "tags": [
        "streetfood",
        "food",
        "culture"
      ],
      "price": {
        "kind": "level",
        "level": 1
      },
      "hours": "08:00–20:00",
      "address": "Main Street, Nadi",
      "text": {
        "ru": {
          "name": "Карри-хаусы на Мейн-стрит",
          "description": "Центральная улица Нади — сердце индо-фиджийской кухни: в небольших столовых подают острые карри с роти, дхал и сладкие индийские десерты. Тут обедают местные работники и водители.",
          "tip": "Закажите карри с курицей или козлятиной с роти и чаем масала. Приходите на обед около 12:00, пока всё свежее, и берите наличные: чаще принимают только их."
        },
        "en": {
          "name": "Main Street curry houses",
          "description": "Nadi’s main street is the heart of Indo-Fijian cooking, with small canteens serving spicy curries with roti, dhal and sweet Indian desserts. Local workers and drivers lunch here.",
          "tip": "Order chicken or goat curry with roti and masala tea. Come for lunch around 12:00 while everything is fresh, and bring cash, as it is often the only option."
        },
        "es": {
          "name": "Casas de curry de Main Street",
          "description": "La calle principal de Nadi es el corazón de la cocina indofiyiana, con pequeños comedores que sirven curris picantes con roti, dhal y dulces indios. Aquí comen trabajadores y conductores locales.",
          "tip": "Pide curri de pollo o cabra con roti y té masala. Ve a comer hacia las 12:00, cuando todo está fresco, y lleva efectivo, porque a menudo es lo único que aceptan."
        },
        "de": {
          "name": "Curry-Lokale an der Main Street",
          "description": "Die Hauptstraße von Nadi ist das Herz der indo-fidschianischen Küche, mit kleinen Kantinen, die scharfe Currys mit Roti, Dhal und indische Süßigkeiten servieren. Einheimische Arbeiter und Fahrer essen hier zu Mittag.",
          "tip": "Bestell Hähnchen- oder Ziegencurry mit Roti und Masala-Tee. Komm gegen 12:00 zum Mittagessen, solange alles frisch ist, und hab Bargeld dabei, oft wird nur das akzeptiert."
        },
        "fr": {
          "name": "Restaurants de curry de Main Street",
          "description": "La rue principale de Nadi est le cœur de la cuisine indo-fidjienne, avec de petites cantines qui servent currys épicés avec roti, dhal et douceurs indiennes. Ouvriers et chauffeurs du coin y déjeunent.",
          "tip": "Commandez un curry de poulet ou de chèvre avec roti et un thé masala. Venez déjeuner vers 12 h, quand tout est frais, et gardez des espèces, car c’est souvent le seul moyen de paiement."
        },
        "it": {
          "name": "Locali di curry di Main Street",
          "description": "La via principale di Nadi è il cuore della cucina indo-figiana, con piccole mense che servono curry piccanti con roti, dhal e dolci indiani. Qui pranzano operai e autisti del posto.",
          "tip": "Ordina curry di pollo o di capra con roti e tè masala. Vieni a pranzo verso le 12:00, quando è tutto fresco, e porta contanti, perché spesso è l’unico metodo accettato."
        }
      }
    },
    {
      "id": "nadi-wailoaloa-beach",
      "city": "nadi",
      "category": "nature",
      "spot": "insta",
      "lat": -17.759,
      "lng": 177.428,
      "image": "sqrD447aTGw",
      "rating": 4.3,
      "reviews": 1400,
      "tags": [
        "beaches",
        "sunset",
        "photo"
      ],
      "price": {
        "kind": "free"
      },
      "hours": "always",
      "address": "Wailoaloa Beach Road, Nadi",
      "text": {
        "ru": {
          "name": "Пляж Вайлоалоа",
          "description": "Длинный пляж с тёмным песком у города, где по вечерам играют в футбол и регби, а закат красит залив в розовый и оранжевый. Рядом — небольшие кафе и бары.",
          "tip": "Приходите за час до заката и снимайте на мокром песке, когда отражается небо; фотографу лучше присесть. Купаться тут не рекомендуют — отлив мелкий и дно илистое."
        },
        "en": {
          "name": "Wailoaloa Beach",
          "description": "A long dark-sand beach by town where people play football and rugby in the evening and the sunset turns the bay pink and orange. Small cafés and bars line the road.",
          "tip": "Come an hour before sunset and shoot on the wet sand when it mirrors the sky; the photographer should crouch. Swimming is not recommended, as the tide is shallow and the bottom muddy."
        },
        "es": {
          "name": "Playa de Wailoaloa",
          "description": "Una larga playa de arena oscura junto a la ciudad donde por la tarde se juega al fútbol y al rugby y el atardecer tiñe la bahía de rosa y naranja. Hay pequeños cafés y bares junto a la carretera.",
          "tip": "Ve una hora antes del atardecer y haz las fotos sobre la arena mojada cuando refleja el cielo; quien fotografía debe agacharse. No se recomienda bañarse: con la marea baja el agua es poco profunda y el fondo fangoso."
        },
        "de": {
          "name": "Wailoaloa Beach",
          "description": "Ein langer dunkler Sandstrand am Stadtrand, an dem abends Fußball und Rugby gespielt werden und der Sonnenuntergang die Bucht rosa und orange färbt. Kleine Cafés und Bars säumen die Straße.",
          "tip": "Komm eine Stunde vor Sonnenuntergang und fotografier auf dem nassen Sand, wenn er den Himmel spiegelt; dein Fotograf sollte sich hinhocken. Zum Baden eignet sich der Strand nicht, bei Ebbe ist es flach und der Grund schlammig."
        },
        "fr": {
          "name": "Plage de Wailoaloa",
          "description": "Une longue plage de sable sombre près de la ville, où l’on joue au foot et au rugby le soir et où le coucher de soleil teinte la baie de rose et d’orange. De petits cafés et bars bordent la route.",
          "tip": "Venez une heure avant le coucher du soleil et photographiez sur le sable mouillé quand il reflète le ciel ; le photographe doit s’accroupir. La baignade n’est pas recommandée : à marée basse, l’eau est peu profonde et le fond vaseux."
        },
        "it": {
          "name": "Spiaggia di Wailoaloa",
          "description": "Una lunga spiaggia di sabbia scura vicino alla città dove la sera si gioca a calcio e a rugby e il tramonto tinge la baia di rosa e arancione. Piccoli caffè e bar costeggiano la strada.",
          "tip": "Vieni un’ora prima del tramonto e scatta sulla sabbia bagnata quando riflette il cielo; il fotografo dovrebbe accovacciarsi. Il bagno non è consigliato: con la bassa marea l’acqua è poco profonda e il fondo fangoso."
        }
      }
    },
    {
      "id": "nadi-vuda-lookout",
      "city": "nadi",
      "category": "nature",
      "spot": "insta",
      "lat": -17.669,
      "lng": 177.379,
      "image": "rlhiN-6dxyo",
      "rating": 4.4,
      "reviews": 900,
      "tags": [
        "views",
        "sunset",
        "photo"
      ],
      "price": {
        "kind": "free"
      },
      "hours": "always",
      "address": "Queens Road, Vuda",
      "text": {
        "ru": {
          "name": "Смотровая Вуда",
          "description": "Обзорная площадка рядом с портом Вуда-Пойнт: виден участок побережья, острова Маманука и закат. Люди останавливаются здесь по дороге на север.",
          "tip": "Приезжайте за час до заката и снимайте с видом на острова за спиной. Рядом есть небольшая стоянка; берите воду и защитный крем."
        },
        "en": {
          "name": "Vuda Lookout",
          "description": "A viewpoint near Vuda Point Marina with a stretch of coast, the Mamanuca islands and the sunset. People stop here on the way north.",
          "tip": "Come an hour before sunset and shoot with the islands behind you. There is a small parking spot nearby; bring water and sunscreen."
        },
        "es": {
          "name": "Mirador de Vuda",
          "description": "Un mirador cerca de la marina de Vuda Point con un tramo de costa, las islas Mamanuca y el atardecer. La gente se detiene aquí de camino al norte.",
          "tip": "Ve una hora antes del atardecer y haz las fotos con las islas a tu espalda. Hay un pequeño aparcamiento cerca; lleva agua y protector solar."
        },
        "de": {
          "name": "Vuda Lookout",
          "description": "Ein Aussichtspunkt nahe der Vuda Point Marina mit einem Küstenabschnitt, den Mamanuca-Inseln und dem Sonnenuntergang. Viele halten hier auf der Fahrt nach Norden.",
          "tip": "Komm eine Stunde vor Sonnenuntergang und fotografier mit den Inseln im Rücken. In der Nähe gibt es einen kleinen Parkplatz; nimm Wasser und Sonnencreme mit."
        },
        "fr": {
          "name": "Belvédère de Vuda",
          "description": "Un point de vue près de la marina de Vuda Point, avec un bout de côte, les îles Mamanuca et le coucher de soleil. On s’y arrête en allant vers le nord.",
          "tip": "Venez une heure avant le coucher du soleil et photographiez avec les îles dans le dos. Un petit parking se trouve à proximité ; prenez eau et crème solaire."
        },
        "it": {
          "name": "Belvedere di Vuda",
          "description": "Un punto panoramico vicino alla marina di Vuda Point con un tratto di costa, le isole Mamanuca e il tramonto. Ci si ferma qui andando verso nord.",
          "tip": "Vieni un’ora prima del tramonto e scatta con le isole alle spalle. Poco distante c’è un piccolo parcheggio; porta acqua e crema solare."
        }
      }
    },
    {
      "id": "mamanuca-yasawa-musket-cove-yacht-club",
      "city": "mamanuca-yasawa",
      "category": "food",
      "lat": -17.7737,
      "lng": 177.192,
      "image": "Xk0IA1QNomI",
      "rating": 4.5,
      "reviews": 1700,
      "tags": [
        "food",
        "islands",
        "cruise"
      ],
      "price": {
        "kind": "level",
        "level": 2
      },
      "hours": "08:00–22:00",
      "address": "Musket Cove Island Resort, Malolo Lailai",
      "text": {
        "ru": {
          "name": "Musket Cove Yacht Club",
          "description": "Бар и ресторан при старейшем яхт-клубе острова Малоло-Лаилаи, где собираются яхтсмены со всего мира. Подают свежую рыбу, бургеры и холодное пиво, а столики стоят у самой воды.",
          "tip": "Закажите рыбу дня и местное пиво Fiji Bitter в баре на причале, особенно на закате. Платите картой; на острове есть лодки до материка с вечера."
        },
        "en": {
          "name": "Musket Cove Yacht Club",
          "description": "The bar and restaurant of Malolo Lailai’s yacht club, where sailors from around the world gather. It serves fresh fish, burgers and cold beer, with tables right at the water.",
          "tip": "Order the fish of the day and a local Fiji Bitter at the jetty bar, especially at sunset. Pay by card; boats back to the mainland run in the evening."
        },
        "es": {
          "name": "Musket Cove Yacht Club",
          "description": "El bar y restaurante del club náutico de Malolo Lailai, donde se reúnen navegantes de todo el mundo. Sirve pescado fresco, hamburguesas y cerveza fría, con mesas junto al agua.",
          "tip": "Pide el pescado del día y una cerveza local Fiji Bitter en el bar del muelle, sobre todo al atardecer. Se paga con tarjeta; hay barcos de vuelta al continente por la tarde."
        },
        "de": {
          "name": "Musket Cove Yacht Club",
          "description": "Bar und Restaurant des Yachtclubs auf Malolo Lailai, wo sich Segler aus aller Welt treffen. Es gibt frischen Fisch, Burger und kaltes Bier, die Tische stehen direkt am Wasser.",
          "tip": "Bestell den Fisch des Tages und ein lokales Fiji Bitter an der Bar am Steg, besonders zum Sonnenuntergang. Bezahlt wird mit Karte; am Abend fahren Boote zurück zum Festland."
        },
        "fr": {
          "name": "Musket Cove Yacht Club",
          "description": "Le bar et restaurant du yacht-club de Malolo Lailai, où se retrouvent des plaisanciers du monde entier. On y sert poisson frais, burgers et bière fraîche, avec des tables au bord de l’eau.",
          "tip": "Commandez le poisson du jour et une Fiji Bitter locale au bar de la jetée, surtout au coucher du soleil. Paiement par carte ; des bateaux repartent vers le continent en soirée."
        },
        "it": {
          "name": "Musket Cove Yacht Club",
          "description": "Il bar e ristorante dello yacht club di Malolo Lailai, dove si ritrovano velisti da tutto il mondo. Serve pesce fresco, hamburger e birra fredda, con i tavoli proprio sull’acqua.",
          "tip": "Ordina il pesce del giorno e una birra locale Fiji Bitter al bar sul molo, soprattutto al tramonto. Si paga con carta; la sera partono barche per la terraferma."
        }
      }
    },
    {
      "id": "mamanuca-yasawa-blue-lagoon-lovo",
      "city": "mamanuca-yasawa",
      "category": "food",
      "lat": -16.943,
      "lng": 177.361,
      "image": "MkSlXoYg0Vo",
      "rating": 4.6,
      "reviews": 1300,
      "tags": [
        "food",
        "culture",
        "islands"
      ],
      "price": {
        "kind": "level",
        "level": 2
      },
      "hours": "18:00–21:30",
      "address": "Blue Lagoon Beach Resort, Nacula Island, Yasawa",
      "text": {
        "ru": {
          "name": "Ужин лово на Накуле",
          "description": "Вечерний фиджийский ужин лово, приготовленный в земляной печи, с песнями и танцем мека. Мясо, рыба, таро и кассава томятся несколько часов под листьями банана.",
          "tip": "Бронируйте ужин при заселении и приходите к началу — тогда увидите, как вынимают еду из печи. Платите картой в курорте; на остров идёт катамаран Yasawa Flyer."
        },
        "en": {
          "name": "Lovo night on Nacula",
          "description": "A Fijian lovo dinner cooked in an earth oven, with songs and a meke dance. Meat, fish, taro and cassava steam for hours under banana leaves.",
          "tip": "Book the dinner at check-in and arrive at the start to watch the food being lifted from the oven. Pay by card at the resort; the Yasawa Flyer catamaran serves the island."
        },
        "es": {
          "name": "Cena lovo en Nacula",
          "description": "Una cena fiyiana lovo cocinada en horno de tierra, con canciones y danza meke. La carne, el pescado, el taro y la yuca se cuecen durante horas bajo hojas de plátano.",
          "tip": "Reserva la cena al registrarte y llega al principio para ver cómo se saca la comida del horno. Se paga con tarjeta en el resort; a la isla llega el catamarán Yasawa Flyer."
        },
        "de": {
          "name": "Lovo-Abend auf Nacula",
          "description": "Ein fidschianisches Lovo-Abendessen aus dem Erdofen mit Gesang und Meke-Tanz. Fleisch, Fisch, Taro und Maniok garen stundenlang unter Bananenblättern.",
          "tip": "Buche das Abendessen beim Einchecken und sei pünktlich, um zu sehen, wie das Essen aus dem Ofen geholt wird. Bezahlt wird mit Karte im Resort; die Insel wird vom Katamaran Yasawa Flyer angefahren."
        },
        "fr": {
          "name": "Soirée lovo à Nacula",
          "description": "Un dîner fidjien lovo cuit au four en terre, avec chants et danse meke. Viande, poisson, taro et manioc mijotent des heures sous des feuilles de bananier.",
          "tip": "Réservez le dîner à l’arrivée et soyez là dès le début pour voir sortir les plats du four. Paiement par carte au resort ; le catamaran Yasawa Flyer dessert l’île."
        },
        "it": {
          "name": "Cena lovo a Nacula",
          "description": "Una cena figiana lovo cotta nel forno di terra, con canti e danza meke. Carne, pesce, taro e manioca cuociono per ore sotto foglie di banano.",
          "tip": "Prenota la cena al check-in e arriva all’inizio per vedere il cibo estratto dal forno. Si paga con carta al resort; l’isola è servita dal catamarano Yasawa Flyer."
        }
      }
    },
    {
      "id": "mamanuca-yasawa-beachcomber-buffet",
      "city": "mamanuca-yasawa",
      "category": "food",
      "lat": -17.6725,
      "lng": 177.2845,
      "image": "Xk0IA1QNomI",
      "rating": 4.2,
      "reviews": 1500,
      "tags": [
        "food",
        "islands",
        "beaches"
      ],
      "price": {
        "kind": "level",
        "level": 2
      },
      "hours": "12:00–14:00, 18:00–20:30",
      "address": "Beachcomber Island Resort, Mamanuca",
      "text": {
        "ru": {
          "name": "Общий обед на Beachcomber",
          "description": "Большая столовая на острове-курорте Бичкомбер, где за длинными столами подают фиджийские блюда: кокоду, рыбу на гриле, карри и тропические фрукты. Днём сюда приезжают на пляж и остаются на обед.",
          "tip": "Возьмите кокоду и фрукты и садитесь за общий стол, чтобы познакомиться с другими. Заказ обычно входит в дневной пакет; приезжайте утренним катамараном."
        },
        "en": {
          "name": "Beachcomber Island buffet",
          "description": "A big dining hall on the resort island of Beachcomber, with long tables serving Fijian dishes: kokoda, grilled fish, curry and tropical fruit. Day visitors come for the beach and stay for lunch.",
          "tip": "Take kokoda and fruit and sit at a shared table to meet other travellers. Lunch is usually included in the day pass; arrive on the morning catamaran."
        },
        "es": {
          "name": "Buffet de Beachcomber Island",
          "description": "Un gran comedor en la isla-resort de Beachcomber, con largas mesas y platos fiyianos: kokoda, pescado a la parrilla, curri y fruta tropical. Los visitantes de un día vienen a la playa y se quedan a comer.",
          "tip": "Pide kokoda y fruta y siéntate en una mesa compartida para conocer a otros viajeros. El almuerzo suele incluirse en el pase de día; llega en el catamarán de la mañana."
        },
        "de": {
          "name": "Buffet auf Beachcomber Island",
          "description": "Ein großer Speisesaal auf der Resortinsel Beachcomber, an langen Tischen gibt es fidschianische Gerichte: Kokoda, gegrillten Fisch, Curry und tropische Früchte. Tagesgäste kommen zum Strand und bleiben zum Mittagessen.",
          "tip": "Nimm Kokoda und Obst und setz dich an einen Gemeinschaftstisch, um andere Reisende kennenzulernen. Das Mittagessen ist meist im Tagespass enthalten; komm mit dem Vormittagskatamaran."
        },
        "fr": {
          "name": "Buffet de Beachcomber Island",
          "description": "Une grande salle à manger sur l’île-resort de Beachcomber, où de longues tables servent des plats fidjiens : kokoda, poisson grillé, curry et fruits tropicaux. Les visiteurs d’un jour viennent pour la plage et restent déjeuner.",
          "tip": "Prenez du kokoda et des fruits et asseyez-vous à une table partagée pour rencontrer d’autres voyageurs. Le déjeuner est en général inclus dans le pass journée ; arrivez par le catamaran du matin."
        },
        "it": {
          "name": "Buffet di Beachcomber Island",
          "description": "Una grande sala da pranzo sull’isola-resort di Beachcomber, con lunghi tavoli e piatti figiani: kokoda, pesce alla griglia, curry e frutta tropicale. I visitatori in giornata vengono per la spiaggia e restano a pranzo.",
          "tip": "Prendi kokoda e frutta e siediti a un tavolo condiviso per conoscere altri viaggiatori. Il pranzo di solito è incluso nel pass giornaliero; arriva con il catamarano del mattino."
        }
      }
    },
    {
      "id": "mamanuca-yasawa-mana-island-beach",
      "city": "mamanuca-yasawa",
      "category": "nature",
      "spot": "insta",
      "lat": -17.66,
      "lng": 177.099,
      "image": "MkSlXoYg0Vo",
      "rating": 4.7,
      "reviews": 2600,
      "tags": [
        "beaches",
        "islands",
        "photo"
      ],
      "price": {
        "kind": "free"
      },
      "hours": "always",
      "address": "Mana Island, Mamanuca",
      "text": {
        "ru": {
          "name": "Пляж острова Мана",
          "description": "Белый песок и бирюзовая лагуна на одном из самых красивых островов Маманука, где видны коралловые рифы и пальмы. Лучший вид открывается с западной части острова.",
          "tip": "Приезжайте утром, пока на пляже тихо, и снимайте по кромке воды в лёгкой одежде. Не забудьте маску для снорклинга — рифы начинаются в нескольких шагах от берега."
        },
        "en": {
          "name": "Mana Island beach",
          "description": "White sand and a turquoise lagoon on one of the loveliest Mamanuca islands, with coral reef and palms. The best views come from the west side of the island.",
          "tip": "Come in the morning while the beach is quiet and shoot along the waterline in light clothes. Pack a snorkel mask, as the reef starts a few steps from shore."
        },
        "es": {
          "name": "Playa de la isla Mana",
          "description": "Arena blanca y laguna turquesa en una de las islas más bonitas de las Mamanuca, con arrecife de coral y palmeras. Las mejores vistas están en el lado oeste de la isla.",
          "tip": "Ve por la mañana, cuando la playa está tranquila, y haz las fotos a lo largo de la orilla con ropa ligera. Lleva máscara de snorkel: el arrecife empieza a pocos pasos de la costa."
        },
        "de": {
          "name": "Strand auf Mana Island",
          "description": "Weißer Sand und eine türkisfarbene Lagune auf einer der schönsten Mamanuca-Inseln, mit Korallenriff und Palmen. Die besten Ausblicke bietet die Westseite der Insel.",
          "tip": "Komm morgens, solange der Strand ruhig ist, und fotografier in leichter Kleidung entlang der Wasserlinie. Pack eine Schnorchelmaske ein, das Riff beginnt wenige Schritte vom Ufer."
        },
        "fr": {
          "name": "Plage de l’île de Mana",
          "description": "Sable blanc et lagon turquoise sur l’une des plus belles îles Mamanuca, avec récif corallien et palmiers. Les plus beaux points de vue se trouvent du côté ouest de l’île.",
          "tip": "Venez le matin, quand la plage est calme, et photographiez le long de la ligne d’eau en tenue légère. Prenez un masque de snorkeling : le récif commence à quelques pas du rivage."
        },
        "it": {
          "name": "Spiaggia dell’isola di Mana",
          "description": "Sabbia bianca e laguna turchese su una delle isole più belle delle Mamanuca, con barriera corallina e palme. I punti di vista migliori sono sul lato ovest dell’isola.",
          "tip": "Vieni al mattino, quando la spiaggia è tranquilla, e scatta lungo il bagnasciuga con abiti leggeri. Porta la maschera da snorkeling: la barriera inizia a pochi passi dalla riva."
        }
      }
    },
    {
      "id": "mamanuca-yasawa-musket-cove-beach",
      "city": "mamanuca-yasawa",
      "category": "nature",
      "spot": "insta",
      "lat": -17.7745,
      "lng": 177.1905,
      "image": "Xk0IA1QNomI",
      "rating": 4.5,
      "reviews": 1100,
      "tags": [
        "beaches",
        "sunset",
        "photo",
        "islands"
      ],
      "price": {
        "kind": "free"
      },
      "hours": "always",
      "address": "Malolo Lailai, Mamanuca",
      "text": {
        "ru": {
          "name": "Пляж Маскет-Ков",
          "description": "Спокойный пляж на острове Малоло-Лаилаи с белым песком, пальмами и яхтами на якоре. На закате вода становится золотой, а на горизонте видны силуэты соседних островов.",
          "tip": "Приходите за час до заката и снимайте с причала с видом на яхты. Лучше всего выглядят светлая одежда и босые ноги на песке; вода на мели тёплая."
        },
        "en": {
          "name": "Musket Cove beach",
          "description": "A calm beach on Malolo Lailai with white sand, palms and yachts at anchor. At sunset the water turns golden and the neighbouring islands stand out as silhouettes.",
          "tip": "Come an hour before sunset and shoot from the jetty with the yachts behind you. Light clothes and bare feet on the sand look best; the shallows are warm."
        },
        "es": {
          "name": "Playa de Musket Cove",
          "description": "Una playa tranquila en Malolo Lailai con arena blanca, palmeras y yates fondeados. Al atardecer el agua se vuelve dorada y las islas vecinas se recortan como siluetas.",
          "tip": "Ve una hora antes del atardecer y haz las fotos desde el muelle con los yates detrás. Ropa clara y pies descalzos en la arena quedan mejor; el agua poco profunda es cálida."
        },
        "de": {
          "name": "Musket Cove Beach",
          "description": "Ein ruhiger Strand auf Malolo Lailai mit weißem Sand, Palmen und ankernden Yachten. Zum Sonnenuntergang wird das Wasser golden, und die Nachbarinseln zeichnen sich als Silhouetten ab.",
          "tip": "Komm eine Stunde vor Sonnenuntergang und fotografier vom Steg mit den Yachten im Hintergrund. Helle Kleidung und nackte Füße im Sand wirken am besten; das flache Wasser ist warm."
        },
        "fr": {
          "name": "Plage de Musket Cove",
          "description": "Une plage calme de Malolo Lailai, avec sable blanc, palmiers et yachts au mouillage. Au coucher du soleil, l’eau se dore et les îles voisines se découpent en silhouettes.",
          "tip": "Venez une heure avant le coucher du soleil et photographiez depuis la jetée avec les yachts derrière vous. Vêtements clairs et pieds nus sur le sable rendent mieux ; l’eau peu profonde est chaude."
        },
        "it": {
          "name": "Spiaggia di Musket Cove",
          "description": "Una spiaggia tranquilla a Malolo Lailai con sabbia bianca, palme e yacht all’ancora. Al tramonto l’acqua diventa dorata e le isole vicine si stagliano come sagome.",
          "tip": "Vieni un’ora prima del tramonto e scatta dal molo con gli yacht alle spalle. Abiti chiari e piedi nudi sulla sabbia rendono meglio; l’acqua bassa è calda."
        }
      }
    },
  ],
};

export default pack;
