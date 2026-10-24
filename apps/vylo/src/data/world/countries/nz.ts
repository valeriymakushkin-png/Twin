import type { CountryPack } from '../types';

const pack: CountryPack = {
  country: {
    code: 'NZ',
    region: 'oceania',
    image: 'tu92JGw2YJM',
    theme: { accent: '#065f46', accent2: '#38bdf8', motif: 'peaks' },
    fromMoscow: { hours: 25, direct: false },
    visa: { regime: 'required', days: 90, cost: { kind: 'from', amount: 341, currency: 'NZD' }, validity: 'sixMonths',
            docs: ['form', 'photo', 'finance', 'employment', 'itinerary', 'returnTicket', 'homeTies'], notes: [] },
    text: {
      ru: {
        tagline: 'Фьорды и вулканы, гейзеры, Средиземье и культура маори',
        description: 'Новая Зеландия — две вытянутые зелёные ленты на краю света, где за один день можно увидеть ледник, вулкан, гейзер и пустынный пляж. Здесь снимали «Властелина колец», придумали банджи-джампинг и бережно хранят культуру маори — от хака до хаңи, мяса, запечённого в земле.',
        howToGet: 'Прямых рейсов из Москвы нет: самый быстрый вариант — через Дубай рейсом Emirates в Окленд, также летают через Доху, Гонконг, Сингапур или с пересадками в Азии и Австралии; в пути 24–30 часов. Визу оформляют онлайн на сайте Immigration New Zealand заранее. По стране удобнее всего путешествовать на арендованной машине или кемпере (движение левостороннее), между островами — паромы через пролив Кука и внутренние рейсы Air New Zealand.',
        tips: [
          'Российские Visa и Mastercard здесь не работают, а бесконтактная оплата повсеместна: везите доллары или евро на обмен и оформите заранее карту зарубежного банка.',
          'Расстояния обманчивы: горные дороги извилисты, поэтому закладывайте в маршрут больше времени и не ездите ночью по незнакомым трассам.',
          'На границе строгий биоконтроль: декларируйте любую еду, а обувь для походов везите чистой — за незадекларированные продукты штрафуют.',
        ],
        guide: {
          title: 'Новая Зеландия за 12 дней',
          sections: [
            { title: 'Когда ехать', body: 'Сезоны противоположны нашим. Лето, с декабря по февраль, — время долгих дней, пляжей и походов, но и самых высоких цен. Март и апрель с золотыми виноградниками и меньшим числом туристов многие считают лучшим временем. С июня по август в Квинстауне открываются горнолыжные склоны, а весна, с сентября по ноябрь, — это водопады в полную силу и ягнята на пастбищах.' },
            { title: 'Маршрут на 12 дней', body: 'Начните с двух дней в Окленде: вулкан Маунт-Иден, Скай-Тауэр и паром на винный остров Вайхеке. Затем три часа на машине до Роторуа — гейзеры, термальные озёра, деревня маори и ужин хаңи; по дороге можно заехать в Хоббитон. Дальше перелёт на Южный остров, в Квинстаун: пять дней на гондолу, катер по Милфорд-Саунду, озеро Моке и дорогу в Гленорки.' },
            { title: 'Что попробовать', body: 'Главное блюдо маори — хаңи: мясо и овощи, томлённые в земляной печи на горячих камнях. Попробуйте баранину и оленину, мидии с зелёными краями, фиш-энд-чипс у моря и пироги в любой пекарне. На десерт — «Павлова» с киви и мороженое hokey pokey с карамельной крошкой. Вина региона Мальборо, особенно совиньон блан, и пино нуар из Центрального Отаго известны на весь мир.' },
            { title: 'Деньги, связь и транспорт', body: 'Валюта — новозеландский доллар (NZD). Российские карты не работают, а многие кафе принимают только карты, поэтому позаботьтесь о карте иностранного банка и держите немного наличных. SIM-карты One NZ, Spark и 2degrees продают в аэропорту, работает и eSIM, но в горах связь пропадает. Самый удобный способ путешествовать — арендованная машина или кемпер, автобусы InterCity связывают крупные города.' },
          ],
        },
      },
      en: {
        tagline: 'Fiords and volcanoes, geysers, Middle-earth and Māori culture',
        description: 'New Zealand is two long green ribbons at the edge of the world, where a single day can bring a glacier, a volcano, a geyser and an empty beach. This is where The Lord of the Rings was filmed and bungy jumping was invented, and where Māori culture is lovingly kept alive, from the haka to the hāngī, food cooked in the earth.',
        howToGet: 'There are no direct flights from Moscow: the fastest option is Emirates via Dubai to Auckland, with other routes via Doha, Hong Kong or Singapore or with connections in Asia and Australia, taking 24–30 hours in total. The visa is applied for online with Immigration New Zealand well in advance. Getting around is easiest by rental car or campervan (traffic drives on the left), with ferries across Cook Strait and Air New Zealand domestic flights between the islands.',
        tips: [
          'Russian-issued Visa and Mastercard cards don’t work here and contactless payment is everywhere, so bring dollars or euros to exchange and get a foreign bank card in advance.',
          'Distances are deceptive: mountain roads are winding, so allow more time in your plans and avoid driving unfamiliar roads at night.',
          'Biosecurity at the border is strict: declare any food and bring your hiking boots clean, as undeclared produce means a fine.',
        ],
        guide: {
          title: 'New Zealand in 12 days',
          sections: [
            { title: 'When to go', body: 'The seasons are the opposite of the northern hemisphere. Summer, December to February, means long days, beaches and hikes, but also the highest prices. Many consider March and April, with golden vineyards and fewer visitors, the best time of all. From June to August Queenstown’s ski fields open, and spring, September to November, brings waterfalls at full force and lambs in the paddocks.' },
            { title: 'A 12-day route', body: 'Start with two days in Auckland: the Mount Eden volcano, the Sky Tower and a ferry to the wine island of Waiheke. Then drive three hours to Rotorua for geysers, thermal lakes, a Māori village and a hāngī dinner, stopping at Hobbiton on the way. Next, fly to the South Island and Queenstown for five days of the gondola, a cruise on Milford Sound, Moke Lake and the road to Glenorchy.' },
            { title: 'What to eat', body: 'The great Māori dish is the hāngī: meat and vegetables slow-cooked in an earth oven over hot stones. Try lamb and venison, green-lipped mussels, fish and chips by the sea and a pie from any bakery. For dessert, a pavlova with kiwifruit and hokey pokey ice cream with crunchy honeycomb. Marlborough wines, especially sauvignon blanc, and pinot noir from Central Otago are world-famous.' },
            { title: 'Money, SIM cards and transport', body: 'The currency is the New Zealand dollar (NZD). Russian cards don’t work and many cafés take cards only, so arrange a foreign bank card and keep a little cash. SIM cards from One NZ, Spark and 2degrees are sold at the airport and eSIMs work too, but coverage drops in the mountains. A rental car or campervan is the easiest way to travel, and InterCity buses link the main towns.' },
          ],
        },
      },
      es: {
        tagline: 'Fiordos y volcanes, géiseres, la Tierra Media y la cultura maorí',
        description: 'Nueva Zelanda son dos largas cintas verdes en el fin del mundo, donde en un solo día puedes ver un glaciar, un volcán, un géiser y una playa desierta. Aquí se rodó El Señor de los Anillos, se inventó el puenting y se cuida la cultura maorí, desde el haka hasta el hāngī, la comida cocinada bajo tierra.',
        howToGet: 'No hay vuelos directos desde Moscú: la opción más rápida es Emirates vía Dubái hasta Auckland, y también hay rutas por Doha, Hong Kong o Singapur o con escalas en Asia y Australia, con 24–30 horas de viaje. El visado se solicita en línea en la web de Immigration New Zealand con antelación. Lo más cómodo para moverse es un coche o una autocaravana de alquiler (se conduce por la izquierda), y entre las islas hay ferris por el estrecho de Cook y vuelos internos de Air New Zealand.',
        tips: [
          'Las tarjetas Visa y Mastercard emitidas en Rusia no funcionan aquí y el pago sin contacto está en todas partes: lleva dólares o euros para cambiar y consigue antes una tarjeta de un banco extranjero.',
          'Las distancias engañan: las carreteras de montaña son sinuosas, así que calcula más tiempo y evita conducir de noche por rutas desconocidas.',
          'El control de bioseguridad en la frontera es estricto: declara cualquier alimento y lleva las botas de montaña limpias, porque los productos no declarados se multan.',
        ],
        guide: {
          title: 'Nueva Zelanda en 12 días',
          sections: [
            { title: 'Cuándo ir', body: 'Las estaciones van al revés que en Europa. El verano, de diciembre a febrero, trae días largos, playas y caminatas, pero también los precios más altos. Muchos consideran marzo y abril, con viñedos dorados y menos turistas, la mejor época. De junio a agosto abren las pistas de esquí de Queenstown, y la primavera, de septiembre a noviembre, trae cascadas en plena fuerza y corderos en los prados.' },
            { title: 'Ruta de 12 días', body: 'Empieza con dos días en Auckland: el volcán Mount Eden, la Sky Tower y un ferri a la isla vinícola de Waiheke. Después, tres horas en coche hasta Rotorua para ver géiseres, lagos termales, una aldea maorí y cenar un hāngī, con parada en Hobbiton por el camino. Luego vuela a la Isla Sur, a Queenstown, para cinco días de teleférico, crucero por Milford Sound, el lago Moke y la carretera a Glenorchy.' },
            { title: 'Qué probar', body: 'El gran plato maorí es el hāngī: carne y verduras cocinadas lentamente en un horno de tierra sobre piedras calientes. Prueba el cordero y el venado, los mejillones de labio verde, el fish and chips junto al mar y un pastel de carne en cualquier panadería. De postre, una pavlova con kiwi y helado hokey pokey con trocitos de caramelo. Los vinos de Marlborough, sobre todo el sauvignon blanc, y el pinot noir de Central Otago son famosos en todo el mundo.' },
            { title: 'Dinero, móvil y transporte', body: 'La moneda es el dólar neozelandés (NZD). Las tarjetas rusas no funcionan y muchos cafés solo aceptan tarjeta, así que consigue una de un banco extranjero y guarda algo de efectivo. Las SIM de One NZ, Spark y 2degrees se venden en el aeropuerto y la eSIM también funciona, aunque en la montaña se pierde la cobertura. Lo más práctico es viajar en coche o autocaravana de alquiler, y los autobuses InterCity unen las principales ciudades.' },
          ],
        },
      },
      de: {
        tagline: 'Fjorde und Vulkane, Geysire, Mittelerde und Māori-Kultur',
        description: 'Neuseeland besteht aus zwei langen grünen Bändern am Ende der Welt, wo du an einem einzigen Tag Gletscher, Vulkan, Geysir und menschenleeren Strand sehen kannst. Hier wurde „Der Herr der Ringe“ gedreht und das Bungeespringen erfunden, und hier wird die Kultur der Māori gepflegt – vom Haka bis zum Hāngī, im Erdofen gegartem Essen.',
        howToGet: 'Direktflüge ab Moskau gibt es nicht: Am schnellsten geht es mit Emirates über Dubai nach Auckland, weitere Routen führen über Doha, Hongkong oder Singapur oder mit Umstiegen in Asien und Australien – insgesamt 24–30 Stunden. Das Visum wird rechtzeitig online bei Immigration New Zealand beantragt. Unterwegs bist du am bequemsten mit Mietwagen oder Campervan (Linksverkehr), zwischen den Inseln verkehren Fähren über die Cookstraße und Inlandsflüge von Air New Zealand.',
        tips: [
          'In Russland ausgegebene Visa- und Mastercard-Karten funktionieren hier nicht, und kontaktloses Bezahlen ist überall üblich: Nimm Dollar oder Euro zum Tauschen mit und besorg dir vorab eine Karte einer ausländischen Bank.',
          'Die Entfernungen täuschen: Bergstraßen sind kurvenreich, plane also mehr Zeit ein und fahr nachts nicht auf unbekannten Strecken.',
          'Die Biosicherheitskontrolle an der Grenze ist streng: Deklariere jedes Lebensmittel und bring saubere Wanderschuhe mit, denn für nicht angemeldete Produkte gibt es Bußgelder.',
        ],
        guide: {
          title: 'Neuseeland in 12 Tagen',
          sections: [
            { title: 'Reisezeit', body: 'Die Jahreszeiten sind umgekehrt. Der Sommer von Dezember bis Februar bringt lange Tage, Strände und Wanderungen, aber auch die höchsten Preise. Viele halten März und April mit goldenen Weinbergen und weniger Besuchern für die beste Zeit. Von Juni bis August öffnen die Skigebiete um Queenstown, und im Frühling, von September bis November, rauschen die Wasserfälle mit voller Kraft und Lämmer stehen auf den Weiden.' },
            { title: 'Route für 12 Tage', body: 'Beginne mit zwei Tagen in Auckland: der Vulkan Mount Eden, der Sky Tower und eine Fähre zur Weininsel Waiheke. Dann drei Stunden Fahrt nach Rotorua – Geysire, Thermalseen, ein Māori-Dorf und ein Hāngī-Abendessen, unterwegs ein Abstecher nach Hobbiton. Anschließend fliegst du auf die Südinsel nach Queenstown: fünf Tage mit Gondel, Bootstour auf dem Milford Sound, Moke Lake und der Straße nach Glenorchy.' },
            { title: 'Was du probieren solltest', body: 'Das große Māori-Gericht ist das Hāngī: Fleisch und Gemüse, langsam im Erdofen über heißen Steinen gegart. Probier Lamm und Hirsch, Grünlippmuscheln, Fish and Chips am Meer und einen Pie aus jeder Bäckerei. Zum Nachtisch gibt es Pavlova mit Kiwi und Hokey-Pokey-Eis mit knusprigen Karamellstückchen. Weine aus Marlborough, vor allem Sauvignon Blanc, und Pinot Noir aus Central Otago sind weltberühmt.' },
            { title: 'Geld, Handy und Verkehr', body: 'Die Währung ist der Neuseeland-Dollar (NZD). Russische Karten funktionieren nicht, und viele Cafés nehmen nur Karten, also kümmere dich um eine Karte einer ausländischen Bank und behalte etwas Bargeld. SIM-Karten von One NZ, Spark und 2degrees gibt es am Flughafen, eSIMs funktionieren ebenfalls, in den Bergen fällt das Netz aber aus. Am bequemsten reist du mit Mietwagen oder Campervan, InterCity-Busse verbinden die größeren Städte.' },
          ],
        },
      },
      fr: {
        tagline: 'Fjords et volcans, geysers, Terre du Milieu et culture maorie',
        description: 'La Nouvelle-Zélande, ce sont deux longs rubans verts au bout du monde, où une seule journée peut réunir un glacier, un volcan, un geyser et une plage déserte. C’est ici qu’ont été tournés « Le Seigneur des anneaux » et qu’est né le saut à l’élastique, et la culture maorie y reste bien vivante, du haka au hāngī, ce repas cuit sous la terre.',
        howToGet: 'Il n’existe aucun vol direct depuis Moscou : le plus rapide est Emirates via Dubaï jusqu’à Auckland, d’autres itinéraires passent par Doha, Hong Kong ou Singapour ou par l’Asie et l’Australie, pour 24 à 30 heures de voyage. Le visa se demande en ligne auprès d’Immigration New Zealand bien à l’avance. Sur place, le plus pratique est la voiture ou le camping-car de location (on roule à gauche), avec des ferrys sur le détroit de Cook et des vols intérieurs Air New Zealand entre les îles.',
        tips: [
          'Les cartes Visa et Mastercard émises en Russie ne fonctionnent pas ici et le paiement sans contact est partout : emportez des dollars ou des euros à changer et procurez-vous à l’avance une carte d’une banque étrangère.',
          'Les distances sont trompeuses : les routes de montagne sont sinueuses, prévoyez donc plus de temps et évitez de conduire de nuit sur des routes inconnues.',
          'Le contrôle de biosécurité à la frontière est strict : déclarez toute nourriture et apportez des chaussures de randonnée propres, car les produits non déclarés sont passibles d’amende.',
        ],
        guide: {
          title: 'La Nouvelle-Zélande en 12 jours',
          sections: [
            { title: 'Quand partir', body: 'Les saisons sont inversées. L’été, de décembre à février, offre de longues journées, des plages et des randonnées, mais aussi les prix les plus élevés. Beaucoup jugent mars et avril, avec leurs vignes dorées et moins de visiteurs, comme la meilleure période. De juin à août, les domaines skiables de Queenstown ouvrent, et le printemps, de septembre à novembre, apporte des cascades à plein débit et des agneaux dans les prés.' },
            { title: 'Itinéraire de 12 jours', body: 'Commencez par deux jours à Auckland : le volcan Mount Eden, la Sky Tower et un ferry pour l’île viticole de Waiheke. Puis trois heures de route jusqu’à Rotorua pour les geysers, les lacs thermaux, un village maori et un dîner hāngī, avec un détour par Hobbiton en chemin. Envolez-vous ensuite pour l’île du Sud et Queenstown : cinq jours entre télécabine, croisière sur le Milford Sound, lac Moke et route de Glenorchy.' },
            { title: 'Que goûter', body: 'Le grand plat maori est le hāngī : viandes et légumes cuits lentement dans un four de terre sur des pierres brûlantes. Goûtez l’agneau et le cerf, les moules à lèvres vertes, le fish and chips face à la mer et une tourte dans n’importe quelle boulangerie. Au dessert, une pavlova aux kiwis et une glace hokey pokey aux éclats de caramel. Les vins de Marlborough, surtout le sauvignon blanc, et le pinot noir du Central Otago sont réputés dans le monde entier.' },
            { title: 'Argent, téléphone et transports', body: 'La monnaie est le dollar néo-zélandais (NZD). Les cartes russes ne fonctionnent pas et bien des cafés n’acceptent que la carte : prévoyez une carte d’une banque étrangère et un peu de liquide. Les cartes SIM One NZ, Spark et 2degrees se vendent à l’aéroport et l’eSIM fonctionne aussi, mais le réseau disparaît en montagne. La voiture ou le camping-car de location reste le plus pratique, et les bus InterCity relient les grandes villes.' },
          ],
        },
      },
      it: {
        tagline: 'Fiordi e vulcani, geyser, la Terra di Mezzo e la cultura maori',
        description: 'La Nuova Zelanda sono due lunghi nastri verdi ai confini del mondo, dove in un solo giorno puoi vedere un ghiacciaio, un vulcano, un geyser e una spiaggia deserta. Qui è stato girato Il Signore degli Anelli, è nato il bungee jumping e si custodisce la cultura maori, dalla haka allo hāngī, il cibo cotto sottoterra.',
        howToGet: 'Non ci sono voli diretti da Mosca: l’opzione più rapida è Emirates via Dubai fino ad Auckland, ma si vola anche via Doha, Hong Kong o Singapore o con scali in Asia e Australia, per 24–30 ore di viaggio. Il visto si richiede online sul sito di Immigration New Zealand con anticipo. Per spostarsi conviene l’auto o il camper a noleggio (si guida a sinistra), mentre tra le isole ci sono i traghetti sullo stretto di Cook e i voli interni di Air New Zealand.',
        tips: [
          'Le carte Visa e Mastercard emesse in Russia qui non funzionano e il contactless è ovunque: porta dollari o euro da cambiare e procurati in anticipo una carta di una banca estera.',
          'Le distanze ingannano: le strade di montagna sono tortuose, quindi calcola più tempo e non guidare di notte su strade che non conosci.',
          'Il controllo di biosicurezza alla frontiera è severo: dichiara qualsiasi alimento e porta scarponi da trekking puliti, perché i prodotti non dichiarati si pagano con una multa.',
        ],
        guide: {
          title: 'La Nuova Zelanda in 12 giorni',
          sections: [
            { title: 'Quando andare', body: 'Le stagioni sono invertite rispetto all’Europa. L’estate, da dicembre a febbraio, porta giornate lunghe, spiagge ed escursioni, ma anche i prezzi più alti. Molti considerano marzo e aprile, con i vigneti dorati e meno turisti, il periodo migliore. Da giugno ad agosto aprono le piste da sci di Queenstown, e la primavera, da settembre a novembre, regala cascate impetuose e agnellini nei pascoli.' },
            { title: 'Itinerario di 12 giorni', body: 'Inizia con due giorni ad Auckland: il vulcano Mount Eden, la Sky Tower e un traghetto per l’isola del vino Waiheke. Poi tre ore d’auto fino a Rotorua per geyser, laghi termali, un villaggio maori e una cena hāngī, con sosta a Hobbiton lungo la strada. Infine vola sull’Isola del Sud, a Queenstown, per cinque giorni tra cabinovia, crociera sul Milford Sound, il lago Moke e la strada per Glenorchy.' },
            { title: 'Cosa assaggiare', body: 'Il grande piatto maori è lo hāngī: carne e verdure cotte lentamente in un forno di terra su pietre roventi. Prova agnello e cervo, le cozze dal labbro verde, il fish and chips in riva al mare e una pie in qualsiasi panetteria. Per dessert, una pavlova con kiwi e il gelato hokey pokey con pezzetti di caramello croccante. I vini di Marlborough, soprattutto il sauvignon blanc, e il pinot nero del Central Otago sono famosi in tutto il mondo.' },
            { title: 'Soldi, telefono e trasporti', body: 'La valuta è il dollaro neozelandese (NZD). Le carte russe non funzionano e molti caffè accettano solo carte, quindi procurati una carta di una banca estera e tieni un po’ di contanti. Le SIM di One NZ, Spark e 2degrees si vendono in aeroporto e funziona anche l’eSIM, ma in montagna il segnale sparisce. Il modo più comodo per viaggiare è l’auto o il camper a noleggio, mentre i bus InterCity collegano le città principali.' },
          ],
        },
      },
    },
  },
  cities: [
    {
      id: 'auckland', lat: -36.8485, lng: 174.7633, image: 'PTdVqYSyQzQ', gallery: ['a43GxgO3ld4', 'PTdVqYSyQzQ'],
      rating: 4.6, reviews: 11250, tags: ['city', 'volcanoes', 'islands', 'wine'], months: [1, 2, 3, 4, 11, 12], budgetPerDay: 150, currency: 'NZD',
      language: 'en', timezone: 'UTC+12', zoom: 10, theme: { accent: '#1e3a8a', accent2: '#0ea5e9', motif: 'waves' },
      text: {
        ru: { name: 'Окленд', tagline: 'Город парусов на пятидесяти вулканах', description: 'Крупнейший город страны стоит на перешейке между двумя гаванями и полусотней потухших вулканов, а в его марине яхт больше, чем где-либо ещё на душу населения. Отсюда полчаса на пароме до винного острова Вайхеке и час до диких чёрных пляжей западного побережья.', tips: ['Оплачивайте автобусы, паромы и поезда картой AT HOP или бесконтактной банковской картой — так дешевле, чем разовые билеты.', 'Поднимитесь хотя бы на один вулкан — Маунт-Иден или Ван-Три-Хилл: виды на обе гавани бесплатны.'], gettingThere: 'Из аэропорта Окленда до центра идёт автобус SkyDrive (бывший SkyBus) — около 45 минут; на такси выходит 30–40 минут в зависимости от пробок.' },
        en: { name: 'Auckland', tagline: 'City of sails on fifty volcanoes', description: 'The country’s largest city sits on an isthmus between two harbours and some fifty extinct volcanoes, and its marina holds more yachts per head than almost anywhere. From here it is half an hour by ferry to the wine island of Waiheke and an hour to the wild black-sand beaches of the west coast.', tips: ['Pay for buses, ferries and trains with an AT HOP card or a contactless bank card, which is cheaper than single tickets.', 'Climb at least one volcano, Mount Eden or One Tree Hill, for free views over both harbours.'], gettingThere: 'From Auckland Airport an express bus runs to the centre in about 45 minutes; a taxi takes 30–40 minutes depending on traffic.' },
        es: { name: 'Auckland', tagline: 'La ciudad de las velas sobre cincuenta volcanes', description: 'La mayor ciudad del país se asienta en un istmo entre dos bahías y medio centenar de volcanes extintos, y su puerto deportivo tiene más yates por habitante que casi ningún otro. Desde aquí hay media hora en ferri a la isla vinícola de Waiheke y una hora a las salvajes playas de arena negra de la costa oeste.', tips: ['Paga autobuses, ferris y trenes con la tarjeta AT HOP o con tarjeta bancaria sin contacto: sale más barato que los billetes sueltos.', 'Sube al menos a un volcán, Mount Eden o One Tree Hill: las vistas a las dos bahías son gratis.'], gettingThere: 'Desde el aeropuerto de Auckland un autobús exprés llega al centro en unos 45 minutos; en taxi se tarda 30–40 minutos según el tráfico.' },
        de: { name: 'Auckland', tagline: 'Stadt der Segel auf fünfzig Vulkanen', description: 'Die größte Stadt des Landes liegt auf einer Landenge zwischen zwei Häfen und rund fünfzig erloschenen Vulkanen, und in ihrer Marina liegen mehr Jachten pro Kopf als fast irgendwo sonst. Von hier sind es eine halbe Stunde mit der Fähre zur Weininsel Waiheke und eine Stunde zu den wilden schwarzen Stränden der Westküste.', tips: ['Bezahl Busse, Fähren und Züge mit der AT-HOP-Karte oder kontaktloser Bankkarte – das ist günstiger als Einzeltickets.', 'Steig auf mindestens einen Vulkan, Mount Eden oder One Tree Hill: Der Blick auf beide Häfen ist gratis.'], gettingThere: 'Vom Flughafen Auckland fährt ein Expressbus in etwa 45 Minuten ins Zentrum; mit dem Taxi dauert es je nach Verkehr 30–40 Minuten.' },
        fr: { name: 'Auckland', tagline: 'La ville des voiles sur cinquante volcans', description: 'La plus grande ville du pays s’étend sur un isthme entre deux rades et une cinquantaine de volcans éteints, et sa marina compte plus de voiliers par habitant que presque partout ailleurs. De là, il faut une demi-heure de ferry jusqu’à l’île viticole de Waiheke et une heure jusqu’aux plages sauvages de sable noir de la côte ouest.', tips: ['Payez bus, ferrys et trains avec la carte AT HOP ou une carte bancaire sans contact : c’est moins cher que les billets à l’unité.', 'Grimpez au moins sur un volcan, Mount Eden ou One Tree Hill : la vue sur les deux rades est gratuite.'], gettingThere: 'Depuis l’aéroport d’Auckland, un bus express rejoint le centre en 45 minutes environ ; en taxi, comptez 30 à 40 minutes selon la circulation.' },
        it: { name: 'Auckland', tagline: 'La città delle vele su cinquanta vulcani', description: 'La città più grande del Paese sorge su un istmo tra due baie e una cinquantina di vulcani spenti, e il suo porto turistico conta più yacht per abitante di quasi ogni altro luogo. Da qui bastano mezz’ora di traghetto per l’isola del vino Waiheke e un’ora per le selvagge spiagge di sabbia nera della costa ovest.', tips: ['Paga bus, traghetti e treni con la carta AT HOP o con una carta bancaria contactless: costa meno dei biglietti singoli.', 'Sali almeno su un vulcano, Mount Eden o One Tree Hill: la vista sulle due baie è gratuita.'], gettingThere: 'Dall’aeroporto di Auckland un bus espresso arriva in centro in circa 45 minuti; in taxi servono 30–40 minuti a seconda del traffico.' },
      },
    },
    {
      id: 'queenstown', lat: -45.0312, lng: 168.6626, image: 'tu92JGw2YJM', gallery: ['tu92JGw2YJM'],
      rating: 4.8, reviews: 13600, tags: ['adventure', 'mountains', 'lakes', 'ski'], months: [1, 2, 3, 4, 7, 8, 12], budgetPerDay: 170, currency: 'NZD',
      language: 'en', timezone: 'UTC+12', zoom: 10, theme: { accent: '#0c4a6e', accent2: '#a5f3fc', motif: 'peaks' },
      text: {
        ru: { name: 'Квинстаун', tagline: 'Мировая столица адреналина на берегу горного озера', description: 'Городок на берегу ледникового озера Уакатипу в окружении хребта Ремаркаблс — родина коммерческого банджи-джампинга и центр всех приключений Южного острова. Летом здесь ходят в походы и катаются на джетботах, зимой — на лыжах, а круглый год ездят к фьорду Милфорд-Саунд.', tips: ['Для поездки в Милфорд-Саунд выбирайте тур с перелётом в одну сторону: дорога занимает около четырёх часов, но и сама по себе очень красива.', 'Бронируйте жильё и прокат машин заранее: в пиковые месяцы и в лыжный сезон всё разбирают.'], gettingThere: 'Аэропорт Квинстауна в 15 минутах от центра, сюда летают рейсы из Окленда (около 2 часов) и Сиднея с Мельбурном. Городские автобусы Orbus довозят до центра за 20–25 минут.' },
        en: { name: 'Queenstown', tagline: 'The world’s adrenaline capital on an alpine lake', description: 'This small town on glacial Lake Wakatipu, ringed by the Remarkables range, is the birthplace of commercial bungy jumping and the hub of every South Island adventure. In summer people hike and ride jet boats, in winter they ski, and all year round they head to the fiord of Milford Sound.', tips: ['For Milford Sound, consider a tour that flies one way: the drive takes about four hours, though it is spectacular in itself.', 'Book accommodation and rental cars early, as they sell out in the peak months and the ski season.'], gettingThere: 'Queenstown Airport is 15 minutes from the centre, with flights from Auckland (about 2 hours) as well as Sydney and Melbourne. Orbus city buses reach town in 20–25 minutes.' },
        es: { name: 'Queenstown', tagline: 'La capital mundial de la adrenalina junto a un lago alpino', description: 'Este pueblo a orillas del lago glaciar Wakatipu, rodeado por la cordillera de los Remarkables, es la cuna del puenting comercial y el centro de todas las aventuras de la Isla Sur. En verano se hace senderismo y se navega en lancha a reacción, en invierno se esquía y todo el año se sale hacia el fiordo de Milford Sound.', tips: ['Para ir a Milford Sound, valora una excursión con vuelo en un sentido: la carretera lleva unas cuatro horas, aunque es espectacular en sí misma.', 'Reserva pronto alojamiento y coche de alquiler, porque en temporada alta y de esquí se agotan.'], gettingThere: 'El aeropuerto de Queenstown está a 15 minutos del centro y recibe vuelos de Auckland (unas 2 horas), Sídney y Melbourne. Los autobuses urbanos Orbus llegan al centro en 20–25 minutos.' },
        de: { name: 'Queenstown', tagline: 'Die Welthauptstadt des Adrenalins an einem Bergsee', description: 'Der kleine Ort am Gletschersee Wakatipu, umringt von der Bergkette der Remarkables, ist die Wiege des kommerziellen Bungeespringens und Drehkreuz aller Abenteuer der Südinsel. Im Sommer wird gewandert und Jetboot gefahren, im Winter Ski gefahren, und das ganze Jahr über geht es zum Fjord Milford Sound.', tips: ['Für Milford Sound lohnt eine Tour mit Flug in eine Richtung: Die Fahrt dauert etwa vier Stunden, ist aber schon für sich spektakulär.', 'Buch Unterkunft und Mietwagen früh, in der Hauptsaison und im Skiwinter ist alles ausgebucht.'], gettingThere: 'Der Flughafen Queenstown liegt 15 Minuten vom Zentrum, Flüge gibt es ab Auckland (etwa 2 Stunden) sowie ab Sydney und Melbourne. Die Stadtbusse von Orbus fahren in 20–25 Minuten ins Zentrum.' },
        fr: { name: 'Queenstown', tagline: 'La capitale mondiale de l’adrénaline au bord d’un lac alpin', description: 'Cette petite ville sur le lac glaciaire Wakatipu, cernée par la chaîne des Remarkables, est le berceau du saut à l’élastique commercial et le centre de toutes les aventures de l’île du Sud. L’été, on randonne et l’on file en jet-boat, l’hiver on skie, et toute l’année on part vers le fjord de Milford Sound.', tips: ['Pour Milford Sound, pensez à une excursion avec un trajet en avion : la route prend environ quatre heures, même si elle est spectaculaire en soi.', 'Réservez tôt hébergement et voiture de location : en haute saison et pendant l’hiver, tout est complet.'], gettingThere: 'L’aéroport de Queenstown est à 15 minutes du centre, avec des vols depuis Auckland (2 heures environ), Sydney et Melbourne. Les bus urbains Orbus rejoignent le centre en 20 à 25 minutes.' },
        it: { name: 'Queenstown', tagline: 'La capitale mondiale dell’adrenalina su un lago alpino', description: 'Questa cittadina sul lago glaciale Wakatipu, circondata dalla catena dei Remarkables, è la culla del bungee jumping commerciale e il centro di tutte le avventure dell’Isola del Sud. D’estate si fanno trekking e giri in jet boat, d’inverno si scia e tutto l’anno si parte per il fiordo di Milford Sound.', tips: ['Per Milford Sound valuta un’escursione con volo in una direzione: la strada richiede circa quattro ore, anche se è spettacolare di per sé.', 'Prenota presto alloggio e auto a noleggio, perché in alta stagione e durante la stagione sciistica va tutto esaurito.'], gettingThere: 'L’aeroporto di Queenstown è a 15 minuti dal centro, con voli da Auckland (circa 2 ore), Sydney e Melbourne. I bus urbani Orbus arrivano in centro in 20–25 minuti.' },
      },
    },
    {
      id: 'rotorua', lat: -38.1368, lng: 176.2497, image: 'BGJgp2H8bM0', gallery: ['kHnVNXzaEmw', '0DRR9edmcSA', '1pkzze1RGm4', '1DLdLYKCQOs'],
      rating: 4.6, reviews: 8920, tags: ['volcanoes', 'culture', 'spa', 'lakes'], months: [1, 2, 3, 4, 10, 11, 12], budgetPerDay: 120, currency: 'NZD',
      language: 'en', timezone: 'UTC+12', zoom: 10, theme: { accent: '#78350f', accent2: '#2dd4bf', motif: 'sun' },
      text: {
        ru: { name: 'Роторуа', tagline: 'Гейзеры, кипящие озёра и сердце культуры маори', description: 'Город на берегу одноимённого озера стоит прямо на геотермальном поле: из-под земли бьют гейзеры, бурлят грязевые котлы, а в воздухе чувствуется запах серы. Это и главный центр культуры маори — здесь можно увидеть хаку, резьбу по дереву и попробовать ужин хаңи.', tips: ['Запах серы быстро перестаёт замечаться, а серебряные украшения лучше снять перед купанием в термальных источниках — они темнеют.', 'Хоббитон находится в часе езды на север — удобно совместить с дорогой из Окленда.'], gettingThere: 'Из Окленда до Роторуа около 3 часов на машине или автобусе InterCity; местный аэропорт принимает рейсы Air New Zealand из Окленда, Веллингтона и Крайстчерча.' },
        en: { name: 'Rotorua', tagline: 'Geysers, boiling lakes and the heart of Māori culture', description: 'This lakeside town sits right on a geothermal field: geysers erupt from the ground, mud pools bubble and the air carries a whiff of sulphur. It is also the great centre of Māori culture, where you can watch a haka, see wood carving and sit down to a hāngī dinner.', tips: ['You soon stop noticing the sulphur smell, but take off silver jewellery before soaking in thermal pools, as it tarnishes.', 'Hobbiton is an hour’s drive north, an easy stop on the road from Auckland.'], gettingThere: 'Rotorua is about 3 hours from Auckland by car or InterCity bus, and the local airport has Air New Zealand flights from Auckland, Wellington and Christchurch.' },
        es: { name: 'Rotorua', tagline: 'Géiseres, lagos hirvientes y el corazón de la cultura maorí', description: 'Esta ciudad junto al lago del mismo nombre se asienta sobre un campo geotérmico: los géiseres brotan del suelo, las pozas de lodo borbotean y en el aire flota olor a azufre. Es también el gran centro de la cultura maorí, donde puedes ver un haka, la talla en madera y probar una cena hāngī.', tips: ['El olor a azufre se deja de notar enseguida, pero quítate las joyas de plata antes de bañarte en aguas termales porque se oscurecen.', 'Hobbiton está a una hora en coche hacia el norte, una parada fácil en el camino desde Auckland.'], gettingThere: 'Rotorua está a unas 3 horas de Auckland en coche o en autobús InterCity, y su aeropuerto recibe vuelos de Air New Zealand desde Auckland, Wellington y Christchurch.' },
        de: { name: 'Rotorua', tagline: 'Geysire, kochende Seen und das Herz der Māori-Kultur', description: 'Die Stadt am gleichnamigen See liegt direkt auf einem Thermalfeld: Geysire schießen aus dem Boden, Schlammtöpfe blubbern, und in der Luft liegt Schwefelgeruch. Sie ist auch das Zentrum der Māori-Kultur, wo du einen Haka erlebst, Holzschnitzkunst siehst und ein Hāngī-Abendessen probierst.', tips: ['Den Schwefelgeruch bemerkst du bald nicht mehr, Silberschmuck solltest du vor dem Bad in Thermalquellen aber ablegen – er läuft an.', 'Hobbiton liegt eine Autostunde nördlich und passt gut auf die Strecke von Auckland.'], gettingThere: 'Von Auckland sind es etwa 3 Stunden mit dem Auto oder InterCity-Bus, der örtliche Flughafen hat Air-New-Zealand-Flüge aus Auckland, Wellington und Christchurch.' },
        fr: { name: 'Rotorua', tagline: 'Geysers, lacs bouillonnants et cœur de la culture maorie', description: 'Cette ville au bord du lac du même nom est posée sur un champ géothermique : les geysers jaillissent du sol, les mares de boue bouillonnent et l’air sent le soufre. C’est aussi le grand centre de la culture maorie, où l’on assiste à un haka, admire la sculpture sur bois et partage un dîner hāngī.', tips: ['On oublie vite l’odeur de soufre, mais retirez vos bijoux en argent avant de vous baigner dans les sources chaudes, car ils noircissent.', 'Hobbiton est à une heure de route au nord, une étape facile sur la route depuis Auckland.'], gettingThere: 'Rotorua est à 3 heures environ d’Auckland en voiture ou en bus InterCity, et son aéroport reçoit des vols Air New Zealand depuis Auckland, Wellington et Christchurch.' },
        it: { name: 'Rotorua', tagline: 'Geyser, laghi bollenti e il cuore della cultura maori', description: 'Questa città sull’omonimo lago sorge proprio su un campo geotermico: i geyser eruttano dal suolo, le pozze di fango ribollono e nell’aria c’è odore di zolfo. È anche il grande centro della cultura maori, dove puoi assistere a una haka, vedere l’intaglio del legno e provare una cena hāngī.', tips: ['L’odore di zolfo smetti presto di notarlo, ma togli i gioielli d’argento prima di immergerti nelle acque termali perché si anneriscono.', 'Hobbiton è a un’ora d’auto verso nord, una tappa comoda sulla strada da Auckland.'], gettingThere: 'Rotorua dista circa 3 ore da Auckland in auto o con i bus InterCity, e l’aeroporto locale ha voli Air New Zealand da Auckland, Wellington e Christchurch.' },
      },
    },
  ],
  places: [
    // Auckland
    {
      id: 'auckland-sky-tower', city: 'auckland', category: 'attraction', lat: -36.8485, lng: 174.7622, image: 'a43GxgO3ld4',
      rating: 4.5, reviews: 28600, tags: ['views', 'architecture', 'adventure'], price: { kind: 'from', amount: 35, currency: 'NZD' }, hours: '09:30–20:00',
      address: 'Corner Victoria Street & Federal Street, Auckland 1010',
      text: {
        ru: { name: 'Скай-Тауэр', description: 'Телебашня высотой 328 метров — самая высокая отдельно стоящая постройка Южного полушария. Со смотровых площадок видно обе гавани и вулканы, а самые смелые прыгают вниз на тросе SkyJump или гуляют по внешнему карнизу.', tip: 'Поднимайтесь перед закатом и оставайтесь до темноты, когда зажигаются огни города и гавани.' },
        en: { name: 'Sky Tower', description: 'At 328 metres this is the tallest freestanding structure in the southern hemisphere. Its observation decks look out over both harbours and the volcanoes, and the brave can drop off on the SkyJump cable or walk around the outside ledge.', tip: 'Go up before sunset and stay until dark, when the city and harbour lights come on.' },
        es: { name: 'Sky Tower', description: 'Con 328 metros, es la estructura exenta más alta del hemisferio sur. Desde sus miradores se ven las dos bahías y los volcanes, y los más valientes saltan con el cable del SkyJump o pasean por la cornisa exterior.', tip: 'Sube antes del atardecer y quédate hasta que oscurezca, cuando se encienden las luces de la ciudad y del puerto.' },
        de: { name: 'Sky Tower', description: 'Mit 328 Metern ist er das höchste freistehende Bauwerk der Südhalbkugel. Von den Aussichtsdecks blickst du auf beide Häfen und die Vulkane, und Mutige springen am SkyJump-Seil hinab oder laufen über den Außensims.', tip: 'Fahr vor Sonnenuntergang hinauf und bleib bis zur Dunkelheit, wenn Stadt und Hafen zu leuchten beginnen.' },
        fr: { name: 'Sky Tower', description: 'Avec ses 328 mètres, c’est la plus haute structure autoportante de l’hémisphère sud. Ses plateformes d’observation dominent les deux rades et les volcans, et les plus audacieux sautent au bout du câble du SkyJump ou font le tour de la corniche extérieure.', tip: 'Montez avant le coucher du soleil et restez jusqu’à la nuit, quand s’allument les lumières de la ville et du port.' },
        it: { name: 'Sky Tower', description: 'Con i suoi 328 metri è la struttura autoportante più alta dell’emisfero australe. Dalle terrazze panoramiche si vedono le due baie e i vulcani, e i più coraggiosi si lanciano con il cavo dello SkyJump o camminano sul cornicione esterno.', tip: 'Sali prima del tramonto e resta fino al buio, quando si accendono le luci della città e del porto.' },
      },
    },
    {
      id: 'auckland-mount-eden', city: 'auckland', category: 'nature', spot: 'insta', lat: -36.8767, lng: 174.7639, image: 'PTdVqYSyQzQ',
      rating: 4.8, reviews: 14900, tags: ['volcanoes', 'views', 'sunset', 'photo'], price: { kind: 'free' }, hours: 'always',
      address: '250 Mount Eden Road, Mount Eden, Auckland 1024',
      text: {
        ru: { name: 'Маунт-Иден (Маунгавау)', description: 'Самая высокая природная точка Окленда — потухший вулкан с идеальным 50-метровым кратером, священный для маори. С вершины открывается круговая панорама на центр, гавани и соседние вулканы.', tip: 'Встаньте у северного края кратера на закате: Скай-Тауэр и деловой центр оказываются прямо за чашей кратера.' },
        en: { name: 'Mount Eden (Maungawhau)', description: 'Auckland’s highest natural point is an extinct volcano with a perfect 50-metre-deep crater, sacred to Māori. The summit offers a 360-degree panorama of the centre, the harbours and the neighbouring volcanoes.', tip: 'Stand at the northern rim of the crater at sunset, so the Sky Tower and the city centre line up right behind the crater bowl.' },
        es: { name: 'Mount Eden (Maungawhau)', description: 'El punto natural más alto de Auckland es un volcán extinto con un cráter perfecto de 50 metros de profundidad, sagrado para los maoríes. Desde la cima hay una panorámica de 360 grados del centro, las bahías y los volcanes vecinos.', tip: 'Ponte en el borde norte del cráter al atardecer: la Sky Tower y el centro quedan justo detrás de la hondonada.' },
        de: { name: 'Mount Eden (Maungawhau)', description: 'Aucklands höchster natürlicher Punkt ist ein erloschener Vulkan mit einem perfekten, 50 Meter tiefen Krater, der den Māori heilig ist. Vom Gipfel hast du ein 360-Grad-Panorama über Zentrum, Häfen und die Nachbarvulkane.', tip: 'Stell dich bei Sonnenuntergang an den Nordrand des Kraters, dann liegen Sky Tower und Zentrum direkt hinter der Kratermulde.' },
        fr: { name: 'Mount Eden (Maungawhau)', description: 'Le point naturel le plus haut d’Auckland est un volcan éteint au cratère parfait de 50 mètres de profondeur, sacré pour les Maoris. Le sommet offre un panorama à 360 degrés sur le centre, les rades et les volcans voisins.', tip: 'Placez-vous sur le bord nord du cratère au coucher du soleil : la Sky Tower et le centre se retrouvent juste derrière la cuvette.' },
        it: { name: 'Mount Eden (Maungawhau)', description: 'Il punto naturale più alto di Auckland è un vulcano spento con un cratere perfetto profondo 50 metri, sacro per i maori. Dalla cima si gode un panorama a 360 gradi sul centro, sulle baie e sui vulcani vicini.', tip: 'Mettiti sul bordo nord del cratere al tramonto: la Sky Tower e il centro si allineano proprio dietro la conca.' },
      },
    },
    {
      id: 'auckland-waiheke-island', city: 'auckland', category: 'nature', lat: -36.7930, lng: 175.0870, image: 'PTdVqYSyQzQ',
      rating: 4.7, reviews: 9800, tags: ['islands', 'wine', 'beaches'], price: { kind: 'from', amount: 50, currency: 'NZD' }, hours: 'always',
      address: 'Matiatia Wharf, Waiheke Island 1081',
      text: {
        ru: { name: 'Остров Вайхеке', description: 'Холмистый остров в заливе Хаураки с тремя десятками виноделен, оливковыми рощами и спокойными пляжами в 40 минутах на пароме от центра. Здесь делают отличные красные вина бордоского стиля и сира.', tip: 'Купите на пристани проездной на автобус Waiheke Explorer или возьмите электровелосипед и объезжайте винодельни по одной.' },
        en: { name: 'Waiheke Island', description: 'A hilly island in the Hauraki Gulf with some thirty wineries, olive groves and calm beaches, 40 minutes by ferry from the centre. It is known for excellent Bordeaux-style reds and syrah.', tip: 'Buy a hop-on hop-off bus pass at the wharf or hire an e-bike and tour the wineries one by one.' },
        es: { name: 'Isla Waiheke', description: 'Una isla de colinas en el golfo de Hauraki con una treintena de bodegas, olivares y playas tranquilas, a 40 minutos en ferri del centro. Es famosa por sus excelentes tintos al estilo de Burdeos y su syrah.', tip: 'Compra en el muelle un pase de autobús turístico o alquila una bici eléctrica y recorre las bodegas una a una.' },
        de: { name: 'Waiheke Island', description: 'Eine hügelige Insel im Hauraki Gulf mit rund dreißig Weingütern, Olivenhainen und ruhigen Stränden, 40 Fährminuten vom Zentrum entfernt. Bekannt ist sie für hervorragende Rotweine im Bordeaux-Stil und Syrah.', tip: 'Kauf am Anleger einen Hop-on-hop-off-Buspass oder leih dir ein E-Bike und klapper die Weingüter nacheinander ab.' },
        fr: { name: 'Île de Waiheke', description: 'Une île vallonnée du golfe d’Hauraki avec une trentaine de domaines viticoles, des oliveraies et des plages calmes, à 40 minutes de ferry du centre. Elle est réputée pour ses excellents rouges de style bordelais et sa syrah.', tip: 'Achetez au quai un pass de bus touristique ou louez un vélo électrique pour faire le tour des domaines un à un.' },
        it: { name: 'Isola di Waiheke', description: 'Un’isola collinare nel golfo di Hauraki con una trentina di cantine, uliveti e spiagge tranquille, a 40 minuti di traghetto dal centro. È nota per gli ottimi rossi in stile bordolese e il syrah.', tip: 'Compra al molo un pass per il bus turistico o noleggia una e-bike e visita le cantine una alla volta.' },
      },
    },
    {
      id: 'auckland-karekare-beach', city: 'auckland', category: 'nature', spot: 'hidden', lat: -36.9878, lng: 174.4747, image: 'a43GxgO3ld4',
      rating: 4.7, reviews: 1900, tags: ['beaches', 'waterfalls', 'nature'], price: { kind: 'free' }, hours: 'always',
      address: 'Karekare Road, Karekare, Auckland 0772',
      text: {
        ru: { name: 'Пляж Карекаре', description: 'Дикий пляж чёрного вулканического песка у подножия поросших лесом скал на западном побережье, где снимали фильм «Пианино». В пяти минутах ходьбы от парковки прячется водопад Карекаре.', tip: 'Езжайте на машине через хребет Уаитакере — около часа от центра; в океане здесь сильные течения, поэтому купаться стоит только у флажков спасателей.' },
        en: { name: 'Karekare Beach', description: 'A wild black-sand beach beneath forested cliffs on the west coast, where the film The Piano was shot. A five-minute walk from the car park hides the Karekare Falls.', tip: 'Drive over the Waitākere Ranges, about an hour from the centre; currents are strong here, so swim only between the lifeguard flags.' },
        es: { name: 'Playa de Karekare', description: 'Una salvaje playa de arena negra bajo acantilados boscosos en la costa oeste, donde se rodó la película El piano. A cinco minutos a pie del aparcamiento se esconde la cascada de Karekare.', tip: 'Llega en coche cruzando la sierra de Waitākere, a una hora del centro; las corrientes son fuertes, así que báñate solo entre las banderas de los socorristas.' },
        de: { name: 'Karekare Beach', description: 'Ein wilder schwarzer Sandstrand unter bewaldeten Klippen an der Westküste, an dem der Film „Das Piano“ gedreht wurde. Fünf Gehminuten vom Parkplatz versteckt sich der Karekare-Wasserfall.', tip: 'Fahr mit dem Auto über die Waitākere Ranges, etwa eine Stunde vom Zentrum; die Strömungen sind stark, bade also nur zwischen den Flaggen der Rettungsschwimmer.' },
        fr: { name: 'Plage de Karekare', description: 'Une plage sauvage de sable noir au pied de falaises boisées sur la côte ouest, où fut tourné le film « La Leçon de piano ». À cinq minutes à pied du parking se cache la cascade de Karekare.', tip: 'Venez en voiture par les Waitākere Ranges, à une heure environ du centre ; les courants sont forts, ne vous baignez qu’entre les drapeaux des sauveteurs.' },
        it: { name: 'Spiaggia di Karekare', description: 'Una selvaggia spiaggia di sabbia nera sotto scogliere boscose sulla costa ovest, dove è stato girato il film Lezioni di piano. A cinque minuti a piedi dal parcheggio si nasconde la cascata di Karekare.', tip: 'Arriva in auto attraverso le Waitākere Ranges, a circa un’ora dal centro; le correnti sono forti, quindi fai il bagno solo tra le bandiere dei bagnini.' },
      },
    },
    {
      id: 'auckland-fish-market', city: 'auckland', category: 'food', lat: -36.8435, lng: 174.7563, image: 'a43GxgO3ld4',
      rating: 4.3, reviews: 3600, tags: ['market', 'food'], price: { kind: 'level', level: 2 },
      address: '22–32 Jellicoe Street, Freemans Bay, Auckland 1010',
      text: {
        ru: { name: 'Рыбный рынок Окленда', description: 'Рыбный рынок в квартале Уинъярд у набережной, где продают свежий улов залива Хаураки и готовят фиш-энд-чипс, устрицы, мидии и суши. Рядом — пешеходная набережная с яхтами и ресторанами.', tip: 'Возьмите фиш-энд-чипс из тарахики или снэппера и устройтесь на скамейке у воды — классический оклендский обед.' },
        en: { name: 'Auckland Fish Market', description: 'A fish market in the waterfront Wynyard Quarter selling the fresh Hauraki Gulf catch and serving fish and chips, oysters, mussels and sushi. Next door is a promenade lined with yachts and restaurants.', tip: 'Order fish and chips made with tarakihi or snapper and grab a bench by the water for a classic Auckland lunch.' },
        es: { name: 'Mercado de pescado de Auckland', description: 'Un mercado de pescado en el barrio portuario de Wynyard que vende la captura fresca del golfo de Hauraki y sirve fish and chips, ostras, mejillones y sushi. Al lado hay un paseo con yates y restaurantes.', tip: 'Pide fish and chips de tarakihi o pargo y siéntate en un banco junto al agua: un almuerzo clásico de Auckland.' },
        de: { name: 'Auckland Fish Market', description: 'Ein Fischmarkt im Hafenviertel Wynyard Quarter mit frischem Fang aus dem Hauraki Gulf, Fish and Chips, Austern, Muscheln und Sushi. Nebenan verläuft eine Promenade mit Jachten und Restaurants.', tip: 'Bestell Fish and Chips aus Tarakihi oder Snapper und setz dich auf eine Bank am Wasser – ein klassisches Mittagessen in Auckland.' },
        fr: { name: 'Marché aux poissons d’Auckland', description: 'Un marché aux poissons dans le quartier portuaire de Wynyard qui vend la pêche fraîche du golfe d’Hauraki et sert fish and chips, huîtres, moules et sushis. À côté s’étire une promenade bordée de voiliers et de restaurants.', tip: 'Commandez un fish and chips de tarakihi ou de vivaneau et installez-vous sur un banc au bord de l’eau pour un déjeuner typique d’Auckland.' },
        it: { name: 'Mercato del pesce di Auckland', description: 'Un mercato del pesce nel quartiere portuale di Wynyard che vende il pescato fresco del golfo di Hauraki e serve fish and chips, ostriche, cozze e sushi. Accanto c’è una passeggiata con yacht e ristoranti.', tip: 'Ordina fish and chips di tarakihi o dentice e siediti su una panchina in riva all’acqua: un pranzo classico di Auckland.' },
      },
    },
    // Queenstown
    {
      id: 'queenstown-skyline-gondola', city: 'queenstown', category: 'attraction', lat: -45.0311, lng: 168.6567, image: 'tu92JGw2YJM',
      rating: 4.7, reviews: 21400, tags: ['views', 'adventure', 'mountains'], price: { kind: 'from', amount: 55, currency: 'NZD' }, hours: '09:00–21:00',
      address: '53 Brecon Street, Queenstown 9300',
      text: {
        ru: { name: 'Гондола Skyline', description: 'Одна из самых крутых канатных дорог Южного полушария поднимает на гору Бобс-Пик, откуда видно весь Квинстаун, озеро Уакатипу и хребет Ремаркаблс. Наверху — трасса для спуска на тележках-люжах, ресторан и старт параглайдеров.', tip: 'Возьмите билет с несколькими спусками на люже и оставайтесь до заката: солнце садится прямо за горами над озером.' },
        en: { name: 'Skyline Gondola', description: 'One of the steepest cable cars in the southern hemisphere climbs Bob’s Peak, with views over all of Queenstown, Lake Wakatipu and the Remarkables. At the top are a luge track, a restaurant and the paragliding launch.', tip: 'Buy a ticket with several luge rides and stay for sunset, when the sun drops behind the mountains over the lake.' },
        es: { name: 'Teleférico Skyline', description: 'Uno de los teleféricos más empinados del hemisferio sur sube a Bob’s Peak, con vistas a todo Queenstown, al lago Wakatipu y a los Remarkables. Arriba hay una pista de luge, un restaurante y el punto de salida de los parapentes.', tip: 'Compra un billete con varias bajadas en luge y quédate al atardecer, cuando el sol se pone tras las montañas sobre el lago.' },
        de: { name: 'Skyline Gondola', description: 'Eine der steilsten Seilbahnen der Südhalbkugel führt auf den Bob’s Peak mit Blick über ganz Queenstown, den Lake Wakatipu und die Remarkables. Oben warten eine Rodelbahn, ein Restaurant und der Startplatz der Gleitschirmflieger.', tip: 'Kauf ein Ticket mit mehreren Rodelfahrten und bleib zum Sonnenuntergang, wenn die Sonne hinter den Bergen über dem See versinkt.' },
        fr: { name: 'Télécabine Skyline', description: 'L’un des téléphériques les plus raides de l’hémisphère sud grimpe au Bob’s Peak, avec vue sur tout Queenstown, le lac Wakatipu et les Remarkables. Au sommet vous attendent une piste de luge, un restaurant et l’aire de décollage des parapentes.', tip: 'Prenez un billet avec plusieurs descentes en luge et restez pour le coucher du soleil, quand l’astre disparaît derrière les montagnes au-dessus du lac.' },
        it: { name: 'Cabinovia Skyline', description: 'Una delle funivie più ripide dell’emisfero australe sale sul Bob’s Peak, con vista su tutta Queenstown, sul lago Wakatipu e sui Remarkables. In cima ci sono una pista di slittino, un ristorante e il decollo dei parapendii.', tip: 'Prendi un biglietto con più discese in slittino e resta per il tramonto, quando il sole cala dietro le montagne sopra il lago.' },
      },
    },
    {
      id: 'queenstown-milford-sound', city: 'queenstown', category: 'nature', lat: -44.6414, lng: 167.8974, image: 'tu92JGw2YJM',
      rating: 4.9, reviews: 32800, tags: ['fjords', 'waterfalls', 'unesco', 'cruise'], price: { kind: 'from', amount: 90, currency: 'NZD' }, hours: '08:00–17:00',
      address: 'Milford Sound, Fiordland National Park 9679',
      text: {
        ru: { name: 'Фьорд Милфорд-Саунд', description: 'Узкий фьорд в национальном парке Фьордленд, где отвесные скалы и пик Митре поднимаются прямо из воды на 1,7 км, а с обрывов срываются сотни водопадов. Редьярд Киплинг называл его восьмым чудом света.', tip: 'Не бойтесь дождя: именно в ливень на скалах появляются тысячи временных водопадов — это самое впечатляющее зрелище.' },
        en: { name: 'Milford Sound', description: 'A narrow fiord in Fiordland National Park where sheer cliffs and Mitre Peak rise 1.7 km straight out of the water and hundreds of waterfalls tumble from the walls. Rudyard Kipling called it the eighth wonder of the world.', tip: 'Don’t fear the rain: a downpour brings out thousands of temporary waterfalls on the cliffs, the most spectacular sight of all.' },
        es: { name: 'Milford Sound', description: 'Un estrecho fiordo en el Parque Nacional de Fiordland donde acantilados verticales y el pico Mitre se alzan 1,7 km sobre el agua y cientos de cascadas se desploman por las paredes. Rudyard Kipling lo llamó la octava maravilla del mundo.', tip: 'No temas a la lluvia: con un aguacero aparecen miles de cascadas temporales en los acantilados, el espectáculo más impresionante.' },
        de: { name: 'Milford Sound', description: 'Ein schmaler Fjord im Fiordland-Nationalpark, in dem steile Felswände und der Mitre Peak 1,7 km direkt aus dem Wasser ragen und Hunderte Wasserfälle herabstürzen. Rudyard Kipling nannte ihn das achte Weltwunder.', tip: 'Keine Angst vor Regen: Bei einem Wolkenbruch entstehen Tausende temporäre Wasserfälle an den Felsen – der eindrucksvollste Anblick überhaupt.' },
        fr: { name: 'Milford Sound', description: 'Un fjord étroit du parc national de Fiordland, où des falaises à pic et le Mitre Peak s’élèvent à 1,7 km au-dessus de l’eau et où des centaines de cascades dévalent les parois. Rudyard Kipling y voyait la huitième merveille du monde.', tip: 'Ne craignez pas la pluie : une averse fait apparaître des milliers de cascades éphémères sur les falaises, le spectacle le plus saisissant.' },
        it: { name: 'Milford Sound', description: 'Uno stretto fiordo nel Parco nazionale di Fiordland dove pareti a picco e il Mitre Peak si alzano per 1,7 km direttamente dall’acqua e centinaia di cascate precipitano dalle rocce. Rudyard Kipling lo definì l’ottava meraviglia del mondo.', tip: 'Non temere la pioggia: con un acquazzone compaiono migliaia di cascate temporanee sulle pareti, lo spettacolo più impressionante.' },
      },
    },
    {
      id: 'queenstown-glenorchy-wharf', city: 'queenstown', category: 'attraction', spot: 'insta', lat: -44.8510, lng: 168.3870, image: 'tu92JGw2YJM',
      rating: 4.8, reviews: 4300, tags: ['photo', 'lakes', 'mountains'], price: { kind: 'free' }, hours: 'always',
      address: 'Mull Street, Glenorchy 9372',
      text: {
        ru: { name: 'Красный сарай в Гленорки', description: 'Крошечный красный лодочный сарай на причале деревни Гленорки у северной оконечности озера Уакатипу на фоне заснеженных гор. Дорога сюда из Квинстауна считается одной из самых живописных в стране.', tip: 'Приезжайте на рассвете в безветренную погоду: сарай и горы отражаются в зеркальной воде, а снимать лучше с конца деревянного причала.' },
        en: { name: 'Glenorchy red shed', description: 'A tiny red boatshed on the wharf at Glenorchy village, at the northern tip of Lake Wakatipu, set against snowy peaks. The drive here from Queenstown is one of the most scenic in the country.', tip: 'Come at sunrise on a windless day, when the shed and the mountains are mirrored in the still water, and shoot from the end of the wooden jetty.' },
        es: { name: 'Cobertizo rojo de Glenorchy', description: 'Un diminuto cobertizo rojo para barcas en el muelle del pueblo de Glenorchy, en el extremo norte del lago Wakatipu, con montañas nevadas detrás. La carretera desde Queenstown es una de las más bonitas del país.', tip: 'Ven al amanecer en un día sin viento, cuando el cobertizo y las montañas se reflejan en el agua quieta, y dispara desde el final del embarcadero de madera.' },
        de: { name: 'Rote Hütte von Glenorchy', description: 'Ein winziger roter Bootsschuppen am Steg des Dorfes Glenorchy an der Nordspitze des Lake Wakatipu vor schneebedeckten Gipfeln. Die Fahrt von Queenstown hierher gilt als eine der schönsten des Landes.', tip: 'Komm bei Sonnenaufgang an einem windstillen Tag, wenn sich Hütte und Berge im glatten Wasser spiegeln, und fotografier vom Ende des Holzstegs.' },
        fr: { name: 'Cabane rouge de Glenorchy', description: 'Une minuscule cabane à bateaux rouge sur le quai du village de Glenorchy, à la pointe nord du lac Wakatipu, sur fond de sommets enneigés. La route depuis Queenstown compte parmi les plus belles du pays.', tip: 'Venez au lever du soleil par temps calme, quand la cabane et les montagnes se reflètent dans l’eau immobile, et photographiez depuis le bout de la jetée en bois.' },
        it: { name: 'Capanno rosso di Glenorchy', description: 'Un minuscolo capanno rosso per barche sul molo del villaggio di Glenorchy, all’estremità nord del lago Wakatipu, con le vette innevate alle spalle. La strada da Queenstown è tra le più panoramiche del Paese.', tip: 'Vieni all’alba in una giornata senza vento, quando capanno e montagne si specchiano nell’acqua immobile, e scatta dalla fine del pontile di legno.' },
      },
    },
    {
      id: 'queenstown-moke-lake', city: 'queenstown', category: 'nature', spot: 'hidden', lat: -44.9970, lng: 168.5720, image: 'tu92JGw2YJM',
      rating: 4.8, reviews: 1700, tags: ['lakes', 'hiking', 'mountains'], price: { kind: 'free' }, hours: 'always',
      address: 'Moke Lake Road, Arthurs Point, Queenstown 9371',
      text: {
        ru: { name: 'Озеро Моке', description: 'Тихое горное озеро в долине среди голых холмов всего в 15 минутах от Квинстауна, о котором знают в основном местные. Вокруг идёт лёгкая кольцевая тропа длиной около 6 км.', tip: 'Сверните с дороги на Гленорки на гравийную Moke Lake Road; ранним утром озеро бывает идеально гладким, а на берегу есть простой кемпинг.' },
        en: { name: 'Moke Lake', description: 'A quiet mountain lake in a valley of bare hills just 15 minutes from Queenstown, known mostly to locals. An easy loop track of about 6 km runs around it.', tip: 'Turn off the Glenorchy road onto the gravel Moke Lake Road; early in the morning the lake is often perfectly still, and there is a basic campsite on the shore.' },
        es: { name: 'Lago Moke', description: 'Un tranquilo lago de montaña en un valle de colinas desnudas a solo 15 minutos de Queenstown, conocido sobre todo por los locales. Lo rodea un sendero circular fácil de unos 6 km.', tip: 'Desvíate de la carretera de Glenorchy por la pista de grava Moke Lake Road; a primera hora el lago suele estar como un espejo, y en la orilla hay un camping sencillo.' },
        de: { name: 'Moke Lake', description: 'Ein stiller Bergsee in einem Tal kahler Hügel, nur 15 Minuten von Queenstown entfernt und vor allem Einheimischen bekannt. Ein leichter Rundweg von etwa 6 km führt um ihn herum.', tip: 'Bieg von der Straße nach Glenorchy auf die Schotterstraße Moke Lake Road ab; frühmorgens ist der See oft spiegelglatt, und am Ufer gibt es einen einfachen Campingplatz.' },
        fr: { name: 'Lac Moke', description: 'Un paisible lac de montagne dans une vallée aux collines nues, à seulement 15 minutes de Queenstown, connu surtout des habitants. Un sentier en boucle facile d’environ 6 km en fait le tour.', tip: 'Quittez la route de Glenorchy pour la piste gravillonnée Moke Lake Road ; tôt le matin, le lac est souvent parfaitement lisse, et un camping rudimentaire borde la rive.' },
        it: { name: 'Lago Moke', description: 'Un tranquillo lago di montagna in una valle di colline spoglie a soli 15 minuti da Queenstown, noto soprattutto ai residenti. Un facile sentiero ad anello di circa 6 km lo circonda.', tip: 'Lascia la strada per Glenorchy e prendi lo sterrato Moke Lake Road; al mattino presto il lago è spesso perfettamente liscio, e sulla riva c’è un campeggio essenziale.' },
      },
    },
    {
      id: 'queenstown-fergburger', city: 'queenstown', category: 'food', lat: -45.0331, lng: 168.6595, image: 'tu92JGw2YJM',
      rating: 4.5, reviews: 26500, tags: ['food', 'streetfood'], price: { kind: 'level', level: 2 }, hours: '08:00–04:00',
      address: '42 Shotover Street, Queenstown 9300',
      text: {
        ru: { name: 'Fergburger', description: 'Самая знаменитая бургерная Новой Зеландии работает с 2001 года почти круглосуточно, и очередь к окну не исчезает даже глубокой ночью. Огромные булки пекут в собственной пекарне по соседству.', tip: 'Закажите по телефону или в окне заранее и прогуляйтесь к озеру; классика — Fergburger с говядиной или Little Lamby с бараниной.' },
        en: { name: 'Fergburger', description: 'New Zealand’s most famous burger joint has been open almost round the clock since 2001, and the queue at the window never disappears, even late at night. The giant buns come from its own bakery next door.', tip: 'Order ahead by phone or at the window and stroll to the lake while you wait; the classics are the beef Fergburger and the lamb Little Lamby.' },
        es: { name: 'Fergburger', description: 'La hamburguesería más famosa de Nueva Zelanda abre casi las 24 horas desde 2001, y la cola ante la ventanilla no desaparece ni de madrugada. Los enormes panes salen de su propia panadería de al lado.', tip: 'Pide por teléfono o en la ventanilla con antelación y da un paseo hasta el lago; los clásicos son la Fergburger de ternera y la Little Lamby de cordero.' },
        de: { name: 'Fergburger', description: 'Neuseelands berühmtester Burgerladen hat seit 2001 fast rund um die Uhr geöffnet, und die Schlange am Fenster verschwindet selbst spät in der Nacht nicht. Die riesigen Brötchen stammen aus der eigenen Bäckerei nebenan.', tip: 'Bestell vorab telefonisch oder am Fenster und spazier in der Wartezeit zum See; Klassiker sind der Rindfleisch-Fergburger und der Little Lamby mit Lamm.' },
        fr: { name: 'Fergburger', description: 'Le burger le plus célèbre de Nouvelle-Zélande est ouvert presque 24 heures sur 24 depuis 2001, et la file devant le guichet ne disparaît jamais, même tard dans la nuit. Les énormes pains sortent de sa propre boulangerie voisine.', tip: 'Commandez à l’avance par téléphone ou au guichet et allez flâner au bord du lac ; les classiques sont le Fergburger au bœuf et le Little Lamby à l’agneau.' },
        it: { name: 'Fergburger', description: 'La paninoteca di hamburger più famosa della Nuova Zelanda è aperta quasi 24 ore su 24 dal 2001, e la coda davanti alla finestrella non sparisce nemmeno a notte fonda. I panini giganti arrivano dal suo forno accanto.', tip: 'Ordina in anticipo al telefono o alla finestrella e fai due passi fino al lago; i classici sono il Fergburger di manzo e il Little Lamby di agnello.' },
      },
    },
    // Rotorua
    {
      id: 'rotorua-wai-o-tapu', city: 'rotorua', category: 'nature', lat: -38.3560, lng: 176.3690, image: 'BGJgp2H8bM0',
      rating: 4.7, reviews: 15200, tags: ['volcanoes', 'nature', 'photo'], price: { kind: 'from', amount: 45, currency: 'NZD' }, hours: '08:30–17:00',
      address: '201 Waiotapu Loop Road, Rotorua 3073',
      text: {
        ru: { name: 'Вай-О-Тапу', description: 'Самое красочное геотермальное поле страны: оранжево-бирюзовый Шампанский бассейн, ядовито-зелёное озеро, кипящие грязевые котлы и кратеры, выстланные серой. Каждое утро здесь извергается гейзер Леди Нокс.', tip: 'Приезжайте к 10:00 к гейзеру Леди Нокс — он стоит в паре километров от основного входа, а затем обходите тропы парка.' },
        en: { name: 'Wai-O-Tapu', description: 'The country’s most colourful geothermal park: the orange-and-turquoise Champagne Pool, a toxic-green lake, boiling mud pools and sulphur-lined craters. The Lady Knox Geyser erupts here every morning.', tip: 'Arrive by 10:00 for the Lady Knox Geyser, a couple of kilometres from the main entrance, then walk the park trails.' },
        es: { name: 'Wai-O-Tapu', description: 'El parque geotérmico más colorido del país: la Champagne Pool naranja y turquesa, un lago verde venenoso, pozas de lodo hirviente y cráteres tapizados de azufre. El géiser Lady Knox entra en erupción cada mañana.', tip: 'Llega antes de las 10:00 para ver el géiser Lady Knox, a un par de kilómetros de la entrada principal, y luego recorre los senderos del parque.' },
        de: { name: 'Wai-O-Tapu', description: 'Der farbenprächtigste Thermalpark des Landes: der orange-türkise Champagne Pool, ein giftgrüner See, kochende Schlammtöpfe und schwefelgesäumte Krater. Jeden Morgen bricht hier der Lady-Knox-Geysir aus.', tip: 'Sei bis 10:00 Uhr am Lady-Knox-Geysir, ein paar Kilometer vom Haupteingang entfernt, und lauf danach die Parkwege ab.' },
        fr: { name: 'Wai-O-Tapu', description: 'Le parc géothermique le plus coloré du pays : la Champagne Pool orange et turquoise, un lac vert toxique, des mares de boue bouillonnante et des cratères tapissés de soufre. Le geyser Lady Knox y entre en éruption chaque matin.', tip: 'Arrivez avant 10 h pour le geyser Lady Knox, à quelques kilomètres de l’entrée principale, puis parcourez les sentiers du parc.' },
        it: { name: 'Wai-O-Tapu', description: 'Il parco geotermico più colorato del Paese: la Champagne Pool arancione e turchese, un lago verde acido, pozze di fango bollente e crateri foderati di zolfo. Il geyser Lady Knox erutta qui ogni mattina.', tip: 'Arriva entro le 10:00 per il geyser Lady Knox, a un paio di chilometri dall’ingresso principale, poi percorri i sentieri del parco.' },
      },
    },
    {
      id: 'rotorua-te-puia', city: 'rotorua', category: 'attraction', lat: -38.1630, lng: 176.2530, image: '0DRR9edmcSA',
      rating: 4.6, reviews: 11800, tags: ['culture', 'volcanoes', 'history'], price: { kind: 'from', amount: 75, currency: 'NZD' }, hours: '08:30–17:00',
      address: 'Hemo Road, Rotorua 3010',
      text: {
        ru: { name: 'Те-Пуиа и гейзер Похуту', description: 'Геотермальная долина Факареварева с гейзером Похуту, крупнейшим в Южном полушарии, который бьёт на высоту до 30 метров по нескольку раз в час. Здесь же работают школы маорийской резьбы и ткачества и проходят концерты с хакой.', tip: 'Приходите на вечернюю программу с ужином хаңи и ночным видом на подсвеченный гейзер.' },
        en: { name: 'Te Puia and Pōhutu Geyser', description: 'The Whakarewarewa geothermal valley with Pōhutu, the largest geyser in the southern hemisphere, which shoots up to 30 metres high several times an hour. Māori carving and weaving schools work here and there are cultural shows with a haka.', tip: 'Come for the evening programme with a hāngī dinner and a night view of the illuminated geyser.' },
        es: { name: 'Te Puia y el géiser Pōhutu', description: 'El valle geotérmico de Whakarewarewa con Pōhutu, el mayor géiser del hemisferio sur, que se dispara hasta 30 metros varias veces por hora. Aquí funcionan escuelas maoríes de talla y tejido, y hay espectáculos culturales con haka.', tip: 'Ven al programa nocturno con cena hāngī y vista del géiser iluminado.' },
        de: { name: 'Te Puia und der Pōhutu-Geysir', description: 'Das Thermaltal Whakarewarewa mit dem Pōhutu, dem größten Geysir der Südhalbkugel, der mehrmals pro Stunde bis zu 30 Meter hoch schießt. Hier arbeiten Māori-Schulen für Schnitzkunst und Weberei, und es gibt Kulturshows mit Haka.', tip: 'Komm zum Abendprogramm mit Hāngī-Essen und nächtlichem Blick auf den beleuchteten Geysir.' },
        fr: { name: 'Te Puia et le geyser Pōhutu', description: 'La vallée géothermique de Whakarewarewa avec Pōhutu, le plus grand geyser de l’hémisphère sud, qui jaillit jusqu’à 30 mètres plusieurs fois par heure. On y trouve des écoles maories de sculpture et de tissage, et des spectacles culturels avec haka.', tip: 'Venez pour le programme du soir avec dîner hāngī et vue nocturne sur le geyser illuminé.' },
        it: { name: 'Te Puia e il geyser Pōhutu', description: 'La valle geotermica di Whakarewarewa con il Pōhutu, il geyser più grande dell’emisfero australe, che spruzza fino a 30 metri più volte all’ora. Qui ci sono scuole maori di intaglio e tessitura e spettacoli culturali con la haka.', tip: 'Vieni per il programma serale con cena hāngī e vista notturna sul geyser illuminato.' },
      },
    },
    {
      id: 'rotorua-redwoods-treewalk', city: 'rotorua', category: 'nature', spot: 'insta', lat: -38.1580, lng: 176.2720, image: 'kHnVNXzaEmw',
      rating: 4.7, reviews: 9300, tags: ['photo', 'nature', 'hiking'], price: { kind: 'from', amount: 39, currency: 'NZD' }, hours: '09:00–22:30',
      address: '1 Long Mile Road, Whakarewarewa, Rotorua 3010',
      text: {
        ru: { name: 'Redwoods Treewalk', description: 'Подвесные мостики длиной около 700 метров, натянутые между стволами столетних калифорнийских секвой в лесу Факареварева. После заката на деревьях зажигаются дизайнерские фонари Дэвида Трабриджа.', tip: 'Приходите вскоре после наступления темноты: самые эффектные кадры получаются с моста, где фонари-«коконы» висят на фоне секвой.' },
        en: { name: 'Redwoods Treewalk', description: 'Suspension bridges some 700 metres long strung between century-old Californian redwoods in the Whakarewarewa Forest. After sunset, lanterns by designer David Trubridge light up in the trees.', tip: 'Come shortly after dark: the best shots are from the bridges where the cocoon-like lanterns hang against the redwoods.' },
        es: { name: 'Redwoods Treewalk', description: 'Pasarelas colgantes de unos 700 metros tendidas entre secuoyas californianas centenarias en el bosque de Whakarewarewa. Al anochecer se encienden en los árboles los faroles del diseñador David Trubridge.', tip: 'Ven poco después de que oscurezca: las mejores fotos salen desde los puentes donde los faroles con forma de capullo cuelgan frente a las secuoyas.' },
        de: { name: 'Redwoods Treewalk', description: 'Rund 700 Meter Hängebrücken, gespannt zwischen hundertjährigen kalifornischen Mammutbäumen im Whakarewarewa Forest. Nach Sonnenuntergang leuchten in den Bäumen die Laternen des Designers David Trubridge.', tip: 'Komm kurz nach Einbruch der Dunkelheit: Die besten Bilder gelingen von den Brücken, an denen die kokonartigen Laternen vor den Redwoods hängen.' },
        fr: { name: 'Redwoods Treewalk', description: 'Quelque 700 mètres de passerelles suspendues entre des séquoias californiens centenaires dans la forêt de Whakarewarewa. Après le coucher du soleil, des lanternes du designer David Trubridge s’allument dans les arbres.', tip: 'Venez peu après la tombée de la nuit : les plus belles photos se prennent depuis les passerelles où les lanternes en forme de cocon se détachent sur les séquoias.' },
        it: { name: 'Redwoods Treewalk', description: 'Circa 700 metri di ponti sospesi tesi tra sequoie californiane secolari nella foresta di Whakarewarewa. Dopo il tramonto, sugli alberi si accendono le lanterne del designer David Trubridge.', tip: 'Vieni poco dopo il buio: gli scatti migliori si fanno dai ponti dove le lanterne a forma di bozzolo pendono davanti alle sequoie.' },
      },
    },
    {
      id: 'rotorua-kerosene-creek', city: 'rotorua', category: 'nature', spot: 'hidden', lat: -38.3233, lng: 176.3870, image: '1pkzze1RGm4',
      rating: 4.5, reviews: 2100, tags: ['spa', 'nature', 'waterfalls'], price: { kind: 'free' }, hours: 'always',
      address: 'Old Waiotapu Road, Rotorua 3073',
      text: {
        ru: { name: 'Керосин-Крик', description: 'Тёплый ручей в лесу, который питают горячие источники, с небольшим водопадом и природной купальней. Это бесплатная альтернатива платным термальным спа, куда ездят в основном местные.', tip: 'Сверните с трассы SH5 на гравийную Old Waiotapu Road, пройдите пять минут от парковки; не погружайте голову в воду — в геотермальных источниках бывает опасная амёба.' },
        en: { name: 'Kerosene Creek', description: 'A warm forest stream fed by hot springs, with a small waterfall and a natural bathing pool. It is a free alternative to the paid thermal spas, visited mostly by locals.', tip: 'Turn off State Highway 5 onto gravel Old Waiotapu Road and walk five minutes from the car park; keep your head above water, as geothermal pools can harbour a dangerous amoeba.' },
        es: { name: 'Kerosene Creek', description: 'Un arroyo templado en el bosque, alimentado por fuentes termales, con una pequeña cascada y una poza natural para bañarse. Es la alternativa gratuita a los spas termales de pago y la frecuentan sobre todo los locales.', tip: 'Desvíate de la carretera SH5 por la pista de grava Old Waiotapu Road y camina cinco minutos desde el aparcamiento; no metas la cabeza bajo el agua, porque en las aguas geotermales puede haber una ameba peligrosa.' },
        de: { name: 'Kerosene Creek', description: 'Ein warmer, von heißen Quellen gespeister Waldbach mit kleinem Wasserfall und natürlichem Badebecken. Er ist die kostenlose Alternative zu den Thermalbädern und wird vor allem von Einheimischen besucht.', tip: 'Bieg vom State Highway 5 auf die Schotterstraße Old Waiotapu Road ab und geh fünf Minuten vom Parkplatz; halt den Kopf über Wasser, denn in Thermalgewässern kann eine gefährliche Amöbe leben.' },
        fr: { name: 'Kerosene Creek', description: 'Un ruisseau tiède en forêt, alimenté par des sources chaudes, avec une petite cascade et un bassin naturel. C’est l’alternative gratuite aux spas thermaux payants, fréquentée surtout par les habitants.', tip: 'Quittez la State Highway 5 pour la piste gravillonnée Old Waiotapu Road, puis marchez cinq minutes depuis le parking ; gardez la tête hors de l’eau, car les eaux géothermiques peuvent abriter une amibe dangereuse.' },
        it: { name: 'Kerosene Creek', description: 'Un ruscello tiepido nel bosco, alimentato da sorgenti calde, con una piccola cascata e una pozza naturale. È l’alternativa gratuita alle spa termali a pagamento, frequentata soprattutto dai residenti.', tip: 'Lascia la State Highway 5 per lo sterrato Old Waiotapu Road e cammina cinque minuti dal parcheggio; tieni la testa fuori dall’acqua, perché nelle acque geotermiche può vivere un’ameba pericolosa.' },
      },
    },
    {
      id: 'rotorua-eat-streat', city: 'rotorua', category: 'food', lat: -38.1360, lng: 176.2522, image: '1DLdLYKCQOs',
      rating: 4.4, reviews: 3400, tags: ['food', 'nightlife'], price: { kind: 'level', level: 2 },
      address: 'Tutanekai Street, Rotorua 3010',
      text: {
        ru: { name: 'Eat Streat', description: 'Пешеходная часть улицы Тутанекаи под стеклянной крышей у озера, где подряд стоят рестораны и бары, а пол подогревается геотермальным теплом. Здесь пробуют местную баранину, морепродукты и крафтовое пиво.', tip: 'Вечером сядьте за столик на улице — даже в прохладную погоду тёплый пол и обогреватели делают ужин на воздухе приятным.' },
        en: { name: 'Eat Streat', description: 'A pedestrian stretch of Tutanekai Street near the lake under a glass roof, lined with restaurants and bars and warmed by geothermally heated paving. It is the place to try local lamb, seafood and craft beer.', tip: 'Take an outdoor table in the evening: even on cool nights the warm floor and heaters make dining outside a pleasure.' },
        es: { name: 'Eat Streat', description: 'Un tramo peatonal de Tutanekai Street junto al lago, bajo un techo de cristal, lleno de restaurantes y bares y con el suelo calentado por energía geotérmica. Es el sitio para probar cordero local, marisco y cerveza artesanal.', tip: 'Por la noche busca mesa en la calle: incluso con fresco, el suelo templado y las estufas hacen agradable cenar al aire libre.' },
        de: { name: 'Eat Streat', description: 'Ein Fußgängerabschnitt der Tutanekai Street nahe dem See unter einem Glasdach, voller Restaurants und Bars und mit geothermisch beheiztem Boden. Hier probierst du heimisches Lamm, Meeresfrüchte und Craft-Bier.', tip: 'Setz dich abends draußen hin: Selbst bei kühlem Wetter machen der warme Boden und die Heizstrahler das Essen im Freien angenehm.' },
        fr: { name: 'Eat Streat', description: 'Un tronçon piéton de Tutanekai Street près du lac, sous un toit de verre, bordé de restaurants et de bars et au sol chauffé par la géothermie. C’est l’endroit pour goûter l’agneau local, les fruits de mer et la bière artisanale.', tip: 'Le soir, prenez une table dehors : même par temps frais, le sol tiède et les chauffages rendent le dîner en plein air agréable.' },
        it: { name: 'Eat Streat', description: 'Un tratto pedonale di Tutanekai Street vicino al lago, sotto un tetto di vetro, pieno di ristoranti e bar e con il pavimento riscaldato dal calore geotermico. È il posto giusto per assaggiare agnello locale, frutti di mare e birra artigianale.', tip: 'La sera prendi un tavolo all’aperto: anche con il fresco, il pavimento tiepido e le stufe rendono piacevole cenare fuori.' },
      },
    },
    {
      "id": "auckland-ponsonby-central",
      "city": "auckland",
      "category": "food",
      "lat": -36.8574,
      "lng": 174.7437,
      "image": "a43GxgO3ld4",
      "rating": 4.4,
      "reviews": 3900,
      "tags": [
        "food",
        "streetfood",
        "city"
      ],
      "price": {
        "kind": "level",
        "level": 2
      },
      "hours": "08:00–23:00",
      "address": "136–148 Ponsonby Road, Ponsonby, Auckland 1011",
      "text": {
        "ru": {
          "name": "Ponsonby Central",
          "description": "Двор с рестораном-лавками в квартале Понсонби, где под одной крышей работают мини-кухни со всего мира: от тайской лапши до новозеландских пирогов. Вечером тут шумно и людно, а на веранде играет музыка.",
          "tip": "Возьмите в разных лавках по одному блюду и сядьте за общий стол во дворе. Лучше приходить в будни до 19:00 или в субботу днём; платите картой."
        },
        "en": {
          "name": "Ponsonby Central",
          "description": "A courtyard food hall in the Ponsonby district where mini kitchens from around the world share one roof, from Thai noodles to Kiwi pies. It is lively and loud in the evening, with music on the terrace.",
          "tip": "Pick one dish from several stalls and sit at a shared courtyard table. Come on a weekday before 19:00 or on a Saturday afternoon; pay by card."
        },
        "es": {
          "name": "Ponsonby Central",
          "description": "Un patio con mercado gastronómico en el barrio de Ponsonby, donde cocinas pequeñas de todo el mundo comparten techo, desde fideos tailandeses hasta empanadas neozelandesas. Por la noche es animado y ruidoso, con música en la terraza.",
          "tip": "Pide un plato en varios puestos y siéntate en una mesa compartida del patio. Ve entre semana antes de las 19:00 o un sábado por la tarde; se paga con tarjeta."
        },
        "de": {
          "name": "Ponsonby Central",
          "description": "Eine Markthalle mit Innenhof im Stadtteil Ponsonby, in der kleine Küchen aus aller Welt unter einem Dach arbeiten, von Thai-Nudeln bis zu neuseeländischen Pies. Abends ist es lebhaft und laut, auf der Terrasse spielt Musik.",
          "tip": "Nimm von mehreren Ständen je ein Gericht und setz dich an einen der Gemeinschaftstische im Hof. Komm unter der Woche vor 19:00 Uhr oder samstagnachmittags; bezahlt wird mit Karte."
        },
        "fr": {
          "name": "Ponsonby Central",
          "description": "Un food hall avec cour dans le quartier de Ponsonby, où de petites cuisines du monde entier partagent le même toit, des nouilles thaïes aux pies néo-zélandaises. Le soir, c’est animé et bruyant, avec de la musique sur la terrasse.",
          "tip": "Prenez un plat à plusieurs stands et installez-vous à une table partagée dans la cour. Venez en semaine avant 19 h ou le samedi après-midi ; paiement par carte."
        },
        "it": {
          "name": "Ponsonby Central",
          "description": "Un food hall con cortile nel quartiere di Ponsonby, dove piccole cucine di tutto il mondo condividono lo stesso tetto, dai noodle thailandesi alle pie neozelandesi. La sera è vivace e rumoroso, con musica in terrazza.",
          "tip": "Prendi un piatto da più banchi e siediti a un tavolo condiviso nel cortile. Vieni in settimana prima delle 19:00 o il sabato pomeriggio; si paga con carta."
        }
      }
    },
    {
      "id": "auckland-la-cigale-french-market",
      "city": "auckland",
      "category": "food",
      "lat": -36.859,
      "lng": 174.7785,
      "image": "a43GxgO3ld4",
      "rating": 4.5,
      "reviews": 2800,
      "tags": [
        "market",
        "food",
        "streetfood"
      ],
      "price": {
        "kind": "level",
        "level": 1
      },
      "hours": "Sat 09:00–14:00, Sun 09:00–13:00",
      "address": "69 St Georges Bay Road, Parnell, Auckland 1052",
      "text": {
        "ru": {
          "name": "Французский рынок La Cigale",
          "description": "Выходной рынок в Парнелле: сыры, багеты, круассаны, свежие овощи, устрицы и кофе. Продавцы раскладывают товар под навесом, а покупатели завтракают прямо на месте.",
          "tip": "Приходите в субботу к 10 утра: к этому времени всё в наличии, а толпа ещё небольшая. Попробуйте свежие круассаны и кофе, платите картой или наличными."
        },
        "en": {
          "name": "La Cigale French Market",
          "description": "A weekend market in Parnell with cheese, baguettes, croissants, fresh vegetables, oysters and coffee. Vendors set up under a canopy while shoppers have breakfast on the spot.",
          "tip": "Go on Saturday around 10:00, when everything is stocked and the crowd is still modest. Try the fresh croissants and coffee; cards and cash both work."
        },
        "es": {
          "name": "Mercado francés La Cigale",
          "description": "Un mercado de fin de semana en Parnell con quesos, baguettes, cruasanes, verduras frescas, ostras y café. Los vendedores montan sus puestos bajo un toldo y los visitantes desayunan allí mismo.",
          "tip": "Ve el sábado hacia las 10:00, cuando hay de todo y aún no hay mucha gente. Prueba los cruasanes recién hechos y el café; se acepta tarjeta y efectivo."
        },
        "de": {
          "name": "La Cigale French Market",
          "description": "Ein Wochenendmarkt in Parnell mit Käse, Baguette, Croissants, frischem Gemüse, Austern und Kaffee. Die Händler bauen unter einem Dach auf, und die Besucher frühstücken gleich vor Ort.",
          "tip": "Komm samstags gegen 10:00, wenn alles da ist und der Andrang noch gering. Probier frische Croissants und Kaffee; Karte und Bargeld werden akzeptiert."
        },
        "fr": {
          "name": "Marché français La Cigale",
          "description": "Un marché du week-end à Parnell avec fromages, baguettes, croissants, légumes frais, huîtres et café. Les vendeurs s’installent sous un auvent et les visiteurs prennent leur petit-déjeuner sur place.",
          "tip": "Venez le samedi vers 10 h, quand tout est en stock et que la foule est encore modeste. Goûtez les croissants frais et le café ; cartes et espèces sont acceptées."
        },
        "it": {
          "name": "Mercato francese La Cigale",
          "description": "Un mercato del weekend a Parnell con formaggi, baguette, croissant, verdure fresche, ostriche e caffè. I venditori si sistemano sotto una tettoia e i visitatori fanno colazione sul posto.",
          "tip": "Vai il sabato verso le 10:00, quando c’è tutto e la folla è ancora contenuta. Assaggia i croissant freschi e il caffè; si pagano carte e contanti."
        }
      }
    },
    {
      "id": "auckland-depot-eatery",
      "city": "auckland",
      "category": "food",
      "lat": -36.8486,
      "lng": 174.7627,
      "image": "a43GxgO3ld4",
      "rating": 4.5,
      "reviews": 5100,
      "tags": [
        "food",
        "streetfood"
      ],
      "price": {
        "kind": "level",
        "level": 2
      },
      "hours": "07:00–23:00",
      "address": "86 Federal Street, Auckland CBD 1010",
      "text": {
        "ru": {
          "name": "Depot Eatery & Oyster Bar",
          "description": "Популярное место шеф-повара Эла Брауна рядом со Скай-Тауэр, где подают устриц, жареную рыбу и блюда на углях в простом интерьере. Заказы приносят на разделяемых тарелках, а бронирований здесь не принимают.",
          "tip": "Берите блюда на троих: фирменные булочки с устрицами и «Глаз Тарара» (рыба на углях) уходят первыми. Записывайтесь в очередь у входа в 17:30, платить можно картой."
        },
        "en": {
          "name": "Depot Eatery & Oyster Bar",
          "description": "Chef Al Brown’s casual spot by the Sky Tower serves oysters, grilled fish and charcoal dishes in a simple room. Food comes on sharing plates and bookings are not taken.",
          "tip": "Order dishes for the table: the oysters and the charcoal fish go first. Put your name down at the door by 17:30; pay by card."
        },
        "es": {
          "name": "Depot Eatery & Oyster Bar",
          "description": "El local informal del chef Al Brown junto a la Sky Tower sirve ostras, pescado a la parrilla y platos al carbón en una sala sencilla. La comida llega en platos para compartir y no se aceptan reservas.",
          "tip": "Pide platos para compartir: las ostras y el pescado al carbón se agotan primero. Apúntate en la puerta hacia las 17:30; se paga con tarjeta."
        },
        "de": {
          "name": "Depot Eatery & Oyster Bar",
          "description": "Das ungezwungene Lokal von Koch Al Brown neben dem Sky Tower serviert Austern, gegrillten Fisch und Holzkohlegerichte in einem schlichten Raum. Das Essen kommt auf Tellern zum Teilen, Reservierungen gibt es nicht.",
          "tip": "Bestell Gerichte für den ganzen Tisch: Austern und Holzkohlefisch sind zuerst weg. Trag dich gegen 17:30 an der Tür in die Liste ein; bezahlt wird mit Karte."
        },
        "fr": {
          "name": "Depot Eatery & Oyster Bar",
          "description": "L’adresse décontractée du chef Al Brown près de la Sky Tower sert huîtres, poisson grillé et plats au charbon dans une salle simple. Les plats arrivent à partager et l’on ne réserve pas.",
          "tip": "Commandez des plats pour la table : les huîtres et le poisson au charbon partent en premier. Inscrivez-vous à l’entrée vers 17 h 30 ; paiement par carte."
        },
        "it": {
          "name": "Depot Eatery & Oyster Bar",
          "description": "Il locale informale dello chef Al Brown accanto alla Sky Tower serve ostriche, pesce alla griglia e piatti al carbone in una sala semplice. I piatti arrivano da condividere e non si prenota.",
          "tip": "Ordina piatti per tutto il tavolo: ostriche e pesce al carbone finiscono per primi. Metti il nome in lista all’ingresso verso le 17:30; si paga con carta."
        }
      }
    },
    {
      "id": "auckland-giapo",
      "city": "auckland",
      "category": "food",
      "lat": -36.8446,
      "lng": 174.7673,
      "image": "a43GxgO3ld4",
      "rating": 4.6,
      "reviews": 3200,
      "tags": [
        "food",
        "streetfood"
      ],
      "price": {
        "kind": "from",
        "amount": 9,
        "currency": "NZD"
      },
      "hours": "12:00–22:00",
      "address": "Fort Lane, Auckland CBD 1010",
      "text": {
        "ru": {
          "name": "Giapo",
          "description": "Лавка мороженого, известная необычными рожками с декором из шоколада, глазури и съедобных мелочей. Авторские вкусы меняются сезонно, а фирменные рожки больше похожи на скульптуры.",
          "tip": "Спросите у продавца вкус дня и возьмите рожок с шоколадной глазурью; очередь меньше будним днём после обеда. Платите картой."
        },
        "en": {
          "name": "Giapo",
          "description": "An ice-cream shop famed for outlandish cones decorated with chocolate, glaze and edible bits. Signature flavours change with the season, and the showpiece cones look like sculptures.",
          "tip": "Ask the server for the flavour of the day and add a chocolate-glazed cone; the queue is shorter on weekday afternoons. Pay by card."
        },
        "es": {
          "name": "Giapo",
          "description": "Una heladería famosa por sus cucuruchos extravagantes decorados con chocolate, glaseado y detalles comestibles. Los sabores de autor cambian con la estación y los cucuruchos estrella parecen esculturas.",
          "tip": "Pregunta por el sabor del día y añade un cucurucho con cobertura de chocolate; la cola es más corta entre semana por la tarde. Se paga con tarjeta."
        },
        "de": {
          "name": "Giapo",
          "description": "Eine Eisdiele, die für ihre ausgefallenen Waffeln mit Schokolade, Glasur und essbaren Verzierungen bekannt ist. Die Hausspezialitäten wechseln mit den Jahreszeiten, und die Prachtstücke sehen aus wie Skulpturen.",
          "tip": "Frag nach der Sorte des Tages und nimm die Waffel mit Schokoglasur dazu; werktags am Nachmittag ist die Schlange kürzer. Bezahlt wird mit Karte."
        },
        "fr": {
          "name": "Giapo",
          "description": "Un glacier réputé pour ses cornets extravagants décorés de chocolat, de glaçage et de détails comestibles. Les parfums maison changent avec les saisons et les cornets vedettes ressemblent à des sculptures.",
          "tip": "Demandez le parfum du jour et ajoutez un cornet glacé au chocolat ; la file est plus courte en semaine l’après-midi. Paiement par carte."
        },
        "it": {
          "name": "Giapo",
          "description": "Una gelateria famosa per i coni stravaganti decorati con cioccolato, glassa e dettagli commestibili. I gusti d’autore cambiano con le stagioni e i coni più scenografici sembrano sculture.",
          "tip": "Chiedi il gusto del giorno e aggiungi un cono con glassa al cioccolato; la coda è più corta nei pomeriggi feriali. Si paga con carta."
        }
      }
    },
    {
      "id": "auckland-rangitoto-summit",
      "city": "auckland",
      "category": "nature",
      "spot": "insta",
      "lat": -36.7855,
      "lng": 174.8605,
      "image": "PTdVqYSyQzQ",
      "rating": 4.7,
      "reviews": 4800,
      "tags": [
        "volcanoes",
        "views",
        "hiking",
        "photo"
      ],
      "price": {
        "kind": "from",
        "amount": 40,
        "currency": "NZD"
      },
      "hours": "06:00–17:00",
      "address": "Rangitoto Island, Hauraki Gulf",
      "text": {
        "ru": {
          "name": "Вершина острова Рангитото",
          "description": "Молодой вулкан в заливе Хаураки, возникший около 600 лет назад: чёрные лавовые поля и лес поморских деревьев. С вершины открывается вид на Окленд, острова и залив.",
          "tip": "Поднимайтесь по тропе от причала около часа и снимайте у лавового поля с видом на город. Берите воду, закрытую обувь и шапку: тени нет. Паром идёт от Даунтауна, оплата картой."
        },
        "en": {
          "name": "Rangitoto summit",
          "description": "A young volcano in the Hauraki Gulf, born around 600 years ago, with black lava fields and a pōhutukawa forest. From the top you can see Auckland, the islands and the gulf.",
          "tip": "Hike up from the wharf in about an hour and shoot at the lava field with the city behind you. Bring water, closed shoes and a hat, as there is little shade. The ferry leaves from Downtown; pay by card."
        },
        "es": {
          "name": "Cumbre de Rangitoto",
          "description": "Un volcán joven en el golfo de Hauraki, nacido hace unos 600 años, con campos de lava negra y un bosque de pōhutukawa. Desde la cima se ven Auckland, las islas y el golfo.",
          "tip": "Sube desde el muelle en una hora y haz fotos en el campo de lava con la ciudad al fondo. Lleva agua, calzado cerrado y gorra, porque hay poca sombra. El ferri sale de Downtown; se paga con tarjeta."
        },
        "de": {
          "name": "Gipfel von Rangitoto",
          "description": "Ein junger Vulkan im Hauraki-Golf, vor rund 600 Jahren entstanden, mit schwarzen Lavafeldern und einem Pōhutukawa-Wald. Vom Gipfel siehst du Auckland, die Inseln und den Golf.",
          "tip": "Wander vom Anleger in etwa einer Stunde hinauf und fotografier am Lavafeld mit der Stadt im Hintergrund. Nimm Wasser, feste Schuhe und Kappe mit, es gibt kaum Schatten. Die Fähre fährt ab Downtown; bezahlt wird mit Karte."
        },
        "fr": {
          "name": "Sommet de Rangitoto",
          "description": "Un jeune volcan du golfe de Hauraki, apparu il y a environ 600 ans, avec des champs de lave noire et une forêt de pōhutukawa. Du sommet, on voit Auckland, les îles et le golfe.",
          "tip": "Montez depuis le quai en une heure environ et photographiez au champ de lave avec la ville en arrière-plan. Emportez eau, chaussures fermées et chapeau, car il y a peu d’ombre. Le ferry part de Downtown ; paiement par carte."
        },
        "it": {
          "name": "Vetta di Rangitoto",
          "description": "Un giovane vulcano nel golfo di Hauraki, nato circa 600 anni fa, con campi di lava nera e una foresta di pōhutukawa. Dalla cima si vedono Auckland, le isole e il golfo.",
          "tip": "Sali dal molo in circa un’ora e scatta al campo di lava con la città alle spalle. Porta acqua, scarpe chiuse e cappello, perché c’è poca ombra. Il traghetto parte da Downtown; si paga con carta."
        }
      }
    },
    {
      "id": "auckland-piha-lion-rock",
      "city": "auckland",
      "category": "nature",
      "spot": "insta",
      "lat": -36.9524,
      "lng": 174.4686,
      "image": "a43GxgO3ld4",
      "rating": 4.8,
      "reviews": 7600,
      "tags": [
        "beaches",
        "surf",
        "photo",
        "views"
      ],
      "price": {
        "kind": "free"
      },
      "hours": "always",
      "address": "Marine Parade South, Piha, Auckland 0772",
      "text": {
        "ru": {
          "name": "Скала Лайон-Рок в Пихе",
          "description": "Скала в форме льва возвышается над чёрным вулканическим песком пляжа Пиха на западном берегу. Это место сёрферов и самый узнаваемый вид западного побережья Окленда.",
          "tip": "Приезжайте утром или за час до заката: поднимитесь на тропу к смотровой и снимайте скалу на фоне волн. Купайтесь только между флагами спасателей — на Пихе мощные течения. Дорога от города занимает около часа."
        },
        "en": {
          "name": "Lion Rock at Piha",
          "description": "A lion-shaped rock rises above the black volcanic sand of Piha beach on the west coast. It is a surfers’ spot and the best-known view of Auckland’s wild coast.",
          "tip": "Come in the morning or an hour before sunset: walk the track to the lookout and shoot the rock against the waves. Swim only between the lifeguard flags, as Piha has strong currents. The drive from the city takes about an hour."
        },
        "es": {
          "name": "Lion Rock de Piha",
          "description": "Una roca con forma de león se alza sobre la arena volcánica negra de la playa de Piha, en la costa oeste. Es un lugar de surfistas y la vista más conocida de la costa salvaje de Auckland.",
          "tip": "Ve por la mañana o una hora antes del atardecer: sube por el sendero al mirador y fotografía la roca con las olas de fondo. Báñate solo entre las banderas de los socorristas, porque en Piha hay corrientes fuertes. El trayecto desde la ciudad dura una hora."
        },
        "de": {
          "name": "Lion Rock in Piha",
          "description": "Ein löwenförmiger Fels erhebt sich über dem schwarzen Vulkansand des Piha Beach an der Westküste. Er ist ein Surfertreff und die bekannteste Ansicht der wilden Küste von Auckland.",
          "tip": "Komm am Morgen oder eine Stunde vor Sonnenuntergang: Geh auf dem Pfad zum Aussichtspunkt und fotografier den Fels vor den Wellen. Bade nur zwischen den Flaggen der Rettungsschwimmer, denn in Piha gibt es starke Strömungen. Die Fahrt von der Stadt dauert etwa eine Stunde."
        },
        "fr": {
          "name": "Lion Rock à Piha",
          "description": "Un rocher en forme de lion domine le sable volcanique noir de la plage de Piha, sur la côte ouest. C’est un spot de surf et la vue la plus connue de la côte sauvage d’Auckland.",
          "tip": "Venez le matin ou une heure avant le coucher du soleil : montez par le sentier jusqu’au belvédère et photographiez le rocher devant les vagues. Ne vous baignez qu’entre les drapeaux des sauveteurs, car les courants sont forts à Piha. Comptez une heure de route depuis la ville."
        },
        "it": {
          "name": "Lion Rock a Piha",
          "description": "Una roccia a forma di leone si erge sulla sabbia vulcanica nera della spiaggia di Piha, sulla costa occidentale. È un luogo per surfisti e la vista più nota della costa selvaggia di Auckland.",
          "tip": "Vai al mattino o un’ora prima del tramonto: sali lungo il sentiero fino al belvedere e fotografa la roccia contro le onde. Fai il bagno solo tra le bandiere dei bagnini, perché a Piha ci sono forti correnti. Il viaggio dalla città dura circa un’ora."
        }
      }
    },
    {
      "id": "queenstown-joes-garage",
      "city": "queenstown",
      "category": "food",
      "lat": -45.0337,
      "lng": 168.6592,
      "image": "tu92JGw2YJM",
      "rating": 4.5,
      "reviews": 3400,
      "tags": [
        "food",
        "streetfood"
      ],
      "price": {
        "kind": "level",
        "level": 2
      },
      "hours": "07:00–16:00",
      "address": "Searle Lane, Queenstown 9300",
      "text": {
        "ru": {
          "name": "Joe’s Garage",
          "description": "Небольшое кафе в переулке в центре стало первым, где в городе начали варить хороший кофе, и до сих пор остаётся любимым у местных. Сэндвичи, завтраки и выпечка подаются в уютном зале с деревянными столами.",
          "tip": "Закажите завтрак с яйцами и флэт-уайт и приходите до 9 утра, чтобы не стоять в очереди. Платите картой, места внутри мало — в хорошую погоду берите кофе на вынос."
        },
        "en": {
          "name": "Joe’s Garage",
          "description": "This small café in a lane in the centre was among the first in town to serve good coffee and is still a local favourite. Sandwiches, breakfasts and pastries come in a cosy room with wooden tables.",
          "tip": "Order the egg breakfast and a flat white and come before 9:00 to skip the queue. Pay by card; space is tight, so take your coffee away in good weather."
        },
        "es": {
          "name": "Joe’s Garage",
          "description": "Esta pequeña cafetería en un callejón del centro fue una de las primeras de la ciudad en servir buen café y sigue siendo la favorita de los locales. Los sándwiches, desayunos y bollería se sirven en una sala acogedora con mesas de madera.",
          "tip": "Pide el desayuno con huevos y un flat white, y llega antes de las 9:00 para evitar la cola. Se paga con tarjeta; hay poco sitio, así que con buen tiempo llévate el café."
        },
        "de": {
          "name": "Joe’s Garage",
          "description": "Das kleine Café in einer Gasse im Zentrum gehörte zu den ersten der Stadt mit gutem Kaffee und ist bis heute bei Einheimischen beliebt. Sandwiches, Frühstück und Gebäck gibt es in einem gemütlichen Raum mit Holztischen.",
          "tip": "Bestell das Eierfrühstück und einen Flat White und komm vor 9:00 Uhr, um der Schlange zu entgehen. Bezahlt wird mit Karte; drinnen ist es eng, bei gutem Wetter nimm den Kaffee mit."
        },
        "fr": {
          "name": "Joe’s Garage",
          "description": "Ce petit café d’une ruelle du centre a été l’un des premiers de la ville à servir du bon café et reste une valeur sûre pour les habitants. Sandwichs, petits-déjeuners et viennoiseries sont servis dans une salle chaleureuse aux tables en bois.",
          "tip": "Commandez le petit-déjeuner aux œufs et un flat white, et venez avant 9 h pour éviter la queue. Paiement par carte ; la salle est petite, prenez votre café à emporter quand il fait beau."
        },
        "it": {
          "name": "Joe’s Garage",
          "description": "Questo piccolo caffè in un vicolo del centro è stato tra i primi della città a servire un buon caffè ed è ancora amato dai locali. Panini, colazioni e dolci arrivano in una sala accogliente con tavoli di legno.",
          "tip": "Ordina la colazione con le uova e un flat white e vieni prima delle 9:00 per evitare la coda. Si paga con carta; c’è poco spazio, con bel tempo prendi il caffè da asporto."
        }
      }
    },
    {
      "id": "queenstown-patagonia-chocolates",
      "city": "queenstown",
      "category": "food",
      "lat": -45.0343,
      "lng": 168.6609,
      "image": "tu92JGw2YJM",
      "rating": 4.6,
      "reviews": 4100,
      "tags": [
        "food",
        "lakes"
      ],
      "price": {
        "kind": "from",
        "amount": 6,
        "currency": "NZD"
      },
      "hours": "09:00–21:00",
      "address": "50 Beach Street, Queenstown 9300",
      "text": {
        "ru": {
          "name": "Patagonia Chocolates",
          "description": "Шоколадная лавка с видом на озеро Вакатипу, где готовят шоколад и мороженое вручную. Здесь пьют густой горячий шоколад и едят пончики с тёмной шоколадной глазурью.",
          "tip": "Возьмите горячий шоколад и трюфели и сядьте на набережной с видом на воду. Днём приходите вне часа пик (14:00–16:00); платить можно картой."
        },
        "en": {
          "name": "Patagonia Chocolates",
          "description": "A chocolate shop with a view of Lake Wakatipu where chocolate and ice cream are made by hand. Locals come for thick hot chocolate and doughnuts with dark chocolate glaze.",
          "tip": "Get a hot chocolate and truffles and sit on the waterfront facing the lake. Visit outside the peak, between 14:00 and 16:00; pay by card."
        },
        "es": {
          "name": "Patagonia Chocolates",
          "description": "Una chocolatería con vistas al lago Wakatipu donde el chocolate y el helado se hacen a mano. Se viene a por chocolate caliente espeso y donuts con cobertura de chocolate negro.",
          "tip": "Pide un chocolate caliente y trufas y siéntate en el paseo junto al lago. Ve fuera de la hora punta, entre las 14:00 y las 16:00; se paga con tarjeta."
        },
        "de": {
          "name": "Patagonia Chocolates",
          "description": "Ein Schokoladengeschäft mit Blick auf den Lake Wakatipu, in dem Schokolade und Eis von Hand gemacht werden. Man kommt für dicke heiße Schokolade und Doughnuts mit dunkler Schokoglasur.",
          "tip": "Hol dir eine heiße Schokolade und Trüffel und setz dich an die Uferpromenade mit Blick auf den See. Komm außerhalb der Stoßzeit, zwischen 14:00 und 16:00 Uhr; bezahlt wird mit Karte."
        },
        "fr": {
          "name": "Patagonia Chocolates",
          "description": "Une chocolaterie avec vue sur le lac Wakatipu, où chocolat et glaces sont faits à la main. On y vient pour le chocolat chaud épais et les beignets au glaçage au chocolat noir.",
          "tip": "Prenez un chocolat chaud et des truffes et asseyez-vous sur le front de lac. Venez hors de l’heure de pointe, entre 14 h et 16 h ; paiement par carte."
        },
        "it": {
          "name": "Patagonia Chocolates",
          "description": "Una cioccolateria con vista sul lago Wakatipu dove cioccolato e gelato sono fatti a mano. Si viene per la cioccolata calda densa e le ciambelle con glassa di cioccolato fondente.",
          "tip": "Prendi una cioccolata calda e dei tartufi e siediti sul lungolago. Vai fuori dall’ora di punta, tra le 14:00 e le 16:00; si paga con carta."
        }
      }
    },
    {
      "id": "queenstown-fergbaker",
      "city": "queenstown",
      "category": "food",
      "lat": -45.0329,
      "lng": 168.6594,
      "image": "tu92JGw2YJM",
      "rating": 4.6,
      "reviews": 6500,
      "tags": [
        "food",
        "streetfood"
      ],
      "price": {
        "kind": "level",
        "level": 1
      },
      "hours": "06:00–04:00",
      "address": "40 Shotover Street, Queenstown 9300",
      "text": {
        "ru": {
          "name": "Fergbaker",
          "description": "Пекарня при знаменитой бургерной Fergburger работает почти круглосуточно и печёт пироги, булочки и сэндвичи. Это то, что здесь берут с собой на тропу или после ночной гулянки.",
          "tip": "Возьмите пирог с бараниной или сладкий пончик и приходите утром — очередь почти не стоит. Платите картой; наличные тоже подойдут."
        },
        "en": {
          "name": "Fergbaker",
          "description": "The bakery attached to the famous Fergburger bakes pies, rolls and sandwiches almost around the clock. It is what locals grab for the trail or after a night out.",
          "tip": "Try a lamb pie or a sweet doughnut and come in the morning, when there is hardly a queue. Pay by card; cash works as well."
        },
        "es": {
          "name": "Fergbaker",
          "description": "La panadería junto a la famosa Fergburger hornea pasteles salados, bollos y sándwiches casi las 24 horas. Es lo que los locales compran para la ruta o después de salir de fiesta.",
          "tip": "Prueba el pastel de cordero o un donut dulce y ve por la mañana, cuando casi no hay cola. Se paga con tarjeta; el efectivo también vale."
        },
        "de": {
          "name": "Fergbaker",
          "description": "Die Bäckerei neben dem berühmten Fergburger backt fast rund um die Uhr Pies, Brötchen und Sandwiches. Einheimische holen sich hier etwas für den Wanderweg oder nach einer durchzechten Nacht.",
          "tip": "Probier den Lammpie oder einen süßen Doughnut und komm morgens, wenn kaum jemand ansteht. Bezahlt wird mit Karte, Bargeld geht auch."
        },
        "fr": {
          "name": "Fergbaker",
          "description": "La boulangerie attenante au célèbre Fergburger cuit tourtes, petits pains et sandwichs presque jour et nuit. Les habitants y prennent de quoi manger pour la randonnée ou après une soirée.",
          "tip": "Goûtez la tourte à l’agneau ou un beignet sucré et venez le matin, quand il y a à peine de file. Paiement par carte ; les espèces passent aussi."
        },
        "it": {
          "name": "Fergbaker",
          "description": "Il forno accanto al celebre Fergburger sforna pie, panini e sandwich quasi giorno e notte. È ciò che i locali prendono per il sentiero o dopo una serata fuori.",
          "tip": "Assaggia la pie all’agnello o una ciambella dolce e vieni al mattino, quando c’è poca coda. Si paga con carta; va bene anche il contante."
        }
      }
    },
    {
      "id": "queenstown-botswana-butchery",
      "city": "queenstown",
      "category": "food",
      "lat": -45.0338,
      "lng": 168.6615,
      "image": "tu92JGw2YJM",
      "rating": 4.6,
      "reviews": 2700,
      "tags": [
        "food",
        "luxury",
        "lakes"
      ],
      "price": {
        "kind": "level",
        "level": 3
      },
      "hours": "17:00–23:00",
      "address": "Steamer Wharf, 88 Beach Street, Queenstown 9300",
      "text": {
        "ru": {
          "name": "Botswana Butchery",
          "description": "Один из самых известных ресторанов города на пристани Steamer Wharf, где подают стейки, дичь и морепродукты из местных хозяйств и лучшее новозеландское вино. Из окон открывается вид на озеро и горы.",
          "tip": "Закажите стейк из мраморной говядины и бокал пино-нуар из Централ-Отаго. Столик на вечер бронируйте за несколько дней, к закату — ещё раньше; платить можно картой."
        },
        "en": {
          "name": "Botswana Butchery",
          "description": "One of the city’s best-known restaurants on Steamer Wharf serves steaks, game and seafood from local farms along with top New Zealand wines. Windows frame the lake and mountains.",
          "tip": "Order the marbled beef steak and a glass of Central Otago pinot noir. Book a few days ahead for dinner, and earlier for sunset; pay by card."
        },
        "es": {
          "name": "Botswana Butchery",
          "description": "Uno de los restaurantes más conocidos de la ciudad, en Steamer Wharf, sirve carnes, caza y mariscos de granjas locales con los mejores vinos neozelandeses. Las ventanas enmarcan el lago y las montañas.",
          "tip": "Pide el filete de ternera con vetas y una copa de pinot noir de Central Otago. Reserva la cena con unos días de antelación y antes aún si quieres ver el atardecer; se paga con tarjeta."
        },
        "de": {
          "name": "Botswana Butchery",
          "description": "Eines der bekanntesten Restaurants der Stadt am Steamer Wharf serviert Steaks, Wild und Meeresfrüchte von lokalen Höfen sowie erstklassige neuseeländische Weine. Die Fenster rahmen See und Berge.",
          "tip": "Bestell das marmorierte Rindersteak und ein Glas Pinot Noir aus Central Otago. Reserviere das Abendessen einige Tage vorher, für den Sonnenuntergang noch früher; bezahlt wird mit Karte."
        },
        "fr": {
          "name": "Botswana Butchery",
          "description": "L’un des restaurants les plus connus de la ville, sur Steamer Wharf, sert steaks, gibier et fruits de mer de fermes locales avec les meilleurs vins néo-zélandais. Les fenêtres encadrent le lac et les montagnes.",
          "tip": "Commandez le steak de bœuf persillé et un verre de pinot noir du Central Otago. Réservez quelques jours à l’avance, et plus tôt pour le coucher du soleil ; paiement par carte."
        },
        "it": {
          "name": "Botswana Butchery",
          "description": "Uno dei ristoranti più noti della città, a Steamer Wharf, serve bistecche, selvaggina e pesce di aziende locali insieme ai migliori vini neozelandesi. Le finestre inquadrano il lago e le montagne.",
          "tip": "Ordina la bistecca di manzo marezzata e un calice di pinot nero del Central Otago. Prenota la cena con qualche giorno di anticipo, e prima ancora per il tramonto; si paga con carta."
        }
      }
    },
    {
      "id": "queenstown-hill-time-walk",
      "city": "queenstown",
      "category": "nature",
      "spot": "insta",
      "lat": -45.0228,
      "lng": 168.6728,
      "image": "tu92JGw2YJM",
      "rating": 4.7,
      "reviews": 3900,
      "tags": [
        "hiking",
        "views",
        "mountains",
        "photo"
      ],
      "price": {
        "kind": "free"
      },
      "hours": "always",
      "address": "Belfast Terrace, Queenstown 9300",
      "text": {
        "ru": {
          "name": "Вершина Queenstown Hill",
          "description": "Тропа Time Walk за полтора часа поднимается к площадке на холме над городом. Сверху видны озеро Вакатипу, пики Рекордс и хребет Рим-Рок.",
          "tip": "Выходите за час до заката и снимайте на верхней площадке с видом на озеро; для кадра встаньте у каменной композиции Time Walk. Берите куртку и фонарь для спуска."
        },
        "en": {
          "name": "Queenstown Hill summit",
          "description": "The Time Walk track climbs for about ninety minutes to a lookout above town. From the top you can see Lake Wakatipu, the Remarkables and the Cecil Peak.",
          "tip": "Set off an hour before sunset and shoot at the top lookout facing the lake; stand by the stone Time Walk installation for your frame. Bring a jacket and a torch for the descent."
        },
        "es": {
          "name": "Cima de Queenstown Hill",
          "description": "El sendero Time Walk sube durante unos noventa minutos hasta un mirador sobre la ciudad. Desde arriba se ven el lago Wakatipu, The Remarkables y Cecil Peak.",
          "tip": "Sal una hora antes del atardecer y haz las fotos en el mirador de arriba mirando al lago; colócate junto a la instalación de piedra del Time Walk. Lleva chaqueta y linterna para bajar."
        },
        "de": {
          "name": "Gipfel Queenstown Hill",
          "description": "Der Time-Walk-Pfad steigt in rund neunzig Minuten zu einem Aussichtspunkt über der Stadt an. Oben siehst du den Lake Wakatipu, die Remarkables und den Cecil Peak.",
          "tip": "Brich eine Stunde vor Sonnenuntergang auf und fotografier am oberen Aussichtspunkt mit Blick zum See; stell dich neben die steinerne Time-Walk-Installation. Nimm Jacke und Taschenlampe für den Abstieg mit."
        },
        "fr": {
          "name": "Sommet de Queenstown Hill",
          "description": "Le sentier Time Walk grimpe pendant environ quatre-vingt-dix minutes jusqu’à un belvédère au-dessus de la ville. Du sommet, on voit le lac Wakatipu, The Remarkables et le Cecil Peak.",
          "tip": "Partez une heure avant le coucher du soleil et photographiez au belvédère du sommet face au lac ; placez-vous près de l’installation en pierre du Time Walk. Prenez une veste et une lampe pour la descente."
        },
        "it": {
          "name": "Cima di Queenstown Hill",
          "description": "Il sentiero Time Walk sale per circa novanta minuti fino a un belvedere sopra la città. Dalla cima si vedono il lago Wakatipu, i Remarkables e il Cecil Peak.",
          "tip": "Parti un’ora prima del tramonto e scatta dal belvedere in cima verso il lago; mettiti vicino all’installazione in pietra del Time Walk. Porta una giacca e una torcia per la discesa."
        }
      }
    },
    {
      "id": "queenstown-arrowtown-autumn-avenue",
      "city": "queenstown",
      "category": "attraction",
      "spot": "insta",
      "lat": -44.9401,
      "lng": 168.831,
      "image": "tu92JGw2YJM",
      "rating": 4.7,
      "reviews": 5200,
      "tags": [
        "history",
        "photo",
        "gardens"
      ],
      "price": {
        "kind": "free"
      },
      "hours": "always",
      "address": "Buckingham Street, Arrowtown 9302",
      "text": {
        "ru": {
          "name": "Осенняя аллея в Эрроутауне",
          "description": "Исторический посёлок золотоискателей в 20 км от Квинстауна с аллеей вязов и клёнов, которая в апреле-мае становится золотой и красной. Деревянные домики и лавки сохранились с XIX века.",
          "tip": "Приезжайте в конце апреля, рано утром: встаньте посреди аллеи и подбросьте листья, пусть фотограф снимает с низкой точки. Одевайтесь тепло — в долине прохладно."
        },
        "en": {
          "name": "Arrowtown autumn avenue",
          "description": "A historic gold-rush village 20 km from Queenstown with an avenue of elms and maples that turns gold and red in April and May. Wooden cottages and shops date from the 19th century.",
          "tip": "Come in late April, early in the morning: stand in the middle of the avenue and toss some leaves while your photographer shoots from a low angle. Dress warmly, as the valley is cool."
        },
        "es": {
          "name": "Avenida otoñal de Arrowtown",
          "description": "Un histórico pueblo de la fiebre del oro a 20 km de Queenstown con una avenida de olmos y arces que en abril y mayo se vuelve dorada y roja. Las casitas y tiendas de madera datan del siglo XIX.",
          "tip": "Ve a finales de abril, a primera hora: colócate en medio de la avenida y lanza unas hojas mientras te fotografían desde abajo. Abrígate, el valle es fresco."
        },
        "de": {
          "name": "Herbstallee in Arrowtown",
          "description": "Ein historisches Goldgräberdorf 20 km von Queenstown mit einer Allee aus Ulmen und Ahornen, die im April und Mai gold und rot leuchtet. Holzhäuschen und Läden stammen aus dem 19. Jahrhundert.",
          "tip": "Komm Ende April früh am Morgen: Stell dich mitten in die Allee und wirf etwas Laub in die Luft, während dein Fotograf aus der Froschperspektive fotografiert. Zieh dich warm an, im Tal ist es kühl."
        },
        "fr": {
          "name": "Allée d’automne d’Arrowtown",
          "description": "Un village historique de la ruée vers l’or à 20 km de Queenstown, avec une allée d’ormes et d’érables qui devient dorée et rouge en avril et mai. Les maisons et boutiques en bois datent du XIXe siècle.",
          "tip": "Venez fin avril, tôt le matin : placez-vous au milieu de l’allée et lancez quelques feuilles pendant que votre photographe cadre en contre-plongée. Habillez-vous chaudement, la vallée est fraîche."
        },
        "it": {
          "name": "Viale autunnale di Arrowtown",
          "description": "Un villaggio storico della corsa all’oro a 20 km da Queenstown con un viale di olmi e aceri che ad aprile e maggio diventa dorato e rosso. Casette e negozi in legno risalgono all’Ottocento.",
          "tip": "Vieni a fine aprile, di mattina presto: mettiti in mezzo al viale e lancia qualche foglia mentre il fotografo scatta dal basso. Vestiti caldo, la valle è fresca."
        }
      }
    },
    {
      "id": "rotorua-fat-dog-cafe",
      "city": "rotorua",
      "category": "food",
      "lat": -38.1385,
      "lng": 176.2501,
      "image": "1DLdLYKCQOs",
      "rating": 4.6,
      "reviews": 2800,
      "tags": [
        "food",
        "city"
      ],
      "price": {
        "kind": "level",
        "level": 2
      },
      "hours": "07:00–15:00",
      "address": "1161 Arawa Street, Rotorua 3010",
      "text": {
        "ru": {
          "name": "Fat Dog Cafe",
          "description": "Яркое кафе с огромными порциями завтраков и сладких блюд в центре Роторуа. Фирменные «бенедикты» и оладьи с беконом ставят в очередь даже в будни.",
          "tip": "Закажите бенедикт с беконом и свежий кофе, а приходите до 9 утра или после 11. Платить можно картой."
        },
        "en": {
          "name": "Fat Dog Cafe",
          "description": "A colourful café in central Rotorua with huge breakfast portions and sweet dishes. Its eggs Benedict and bacon pancakes make a queue even on weekdays.",
          "tip": "Order the bacon Benedict and a fresh coffee, and come before 9:00 or after 11:00. Pay by card."
        },
        "es": {
          "name": "Fat Dog Cafe",
          "description": "Una cafetería colorida en el centro de Rotorua con enormes raciones de desayuno y platos dulces. Sus huevos Benedict y las tortitas con beicon provocan cola incluso entre semana.",
          "tip": "Pide los huevos Benedict con beicon y un café recién hecho, y llega antes de las 9:00 o después de las 11:00. Se paga con tarjeta."
        },
        "de": {
          "name": "Fat Dog Cafe",
          "description": "Ein buntes Café im Zentrum von Rotorua mit riesigen Frühstücksportionen und süßen Gerichten. Die Eggs Benedict und die Pancakes mit Speck sorgen auch werktags für Schlangen.",
          "tip": "Bestell die Eggs Benedict mit Speck und einen frischen Kaffee und komm vor 9:00 oder nach 11:00 Uhr. Bezahlt wird mit Karte."
        },
        "fr": {
          "name": "Fat Dog Cafe",
          "description": "Un café coloré du centre de Rotorua, aux portions de petit-déjeuner énormes et aux plats sucrés. Ses œufs Bénédicte et ses pancakes au bacon font la queue même en semaine.",
          "tip": "Commandez les œufs Bénédicte au bacon et un café frais, et venez avant 9 h ou après 11 h. Paiement par carte."
        },
        "it": {
          "name": "Fat Dog Cafe",
          "description": "Un caffè colorato nel centro di Rotorua con porzioni enormi di colazione e piatti dolci. Le uova alla Benedict e i pancake con pancetta creano coda anche nei giorni feriali.",
          "tip": "Ordina le uova alla Benedict con pancetta e un caffè fresco, e vieni prima delle 9:00 o dopo le 11:00. Si paga con carta."
        }
      }
    },
    {
      "id": "rotorua-night-market",
      "city": "rotorua",
      "category": "food",
      "lat": -38.1372,
      "lng": 176.2502,
      "image": "1DLdLYKCQOs",
      "rating": 4.4,
      "reviews": 2300,
      "tags": [
        "market",
        "streetfood",
        "food"
      ],
      "price": {
        "kind": "level",
        "level": 1
      },
      "hours": "Thu 17:00–21:00",
      "address": "Tutanekai Street, Rotorua 3010",
      "text": {
        "ru": {
          "name": "Ночной рынок на Тутанекай-стрит",
          "description": "Еженедельный вечерний рынок, на который улица Тутанекай превращается по четвергам: десятки киосков с едой из разных стран, музыка и ремесленные лавки. Здесь едят жареные пельмени, кукурузу и местные сладости.",
          "tip": "Приходите в четверг к 18:00, пока не заняты столики, и берите по одному блюду в разных ларьках. Берите наличные: часть киосков не принимает карты."
        },
        "en": {
          "name": "Tutanekai Street Night Market",
          "description": "On Thursdays Tutanekai Street turns into a weekly evening market with dozens of food stalls from many countries, music and craft stands. People eat fried dumplings, corn and local sweets here.",
          "tip": "Arrive around 18:00 on Thursday before the tables fill, and take one dish from several stalls. Bring cash, as some stalls don’t take cards."
        },
        "es": {
          "name": "Mercado nocturno de Tutanekai Street",
          "description": "Los jueves, Tutanekai Street se convierte en un mercado semanal de noche con decenas de puestos de comida de muchos países, música y artesanía. Aquí se comen empanadillas fritas, maíz y dulces locales.",
          "tip": "Llega el jueves hacia las 18:00, antes de que se llenen las mesas, y pide un plato en varios puestos. Lleva efectivo, porque algunos puestos no aceptan tarjeta."
        },
        "de": {
          "name": "Nachtmarkt in der Tutanekai Street",
          "description": "Donnerstags verwandelt sich die Tutanekai Street in einen wöchentlichen Abendmarkt mit Dutzenden Essensständen aus vielen Ländern, Musik und Handwerk. Es gibt gebratene Teigtaschen, Mais und lokale Süßigkeiten.",
          "tip": "Komm donnerstags gegen 18:00 Uhr, bevor die Tische voll sind, und nimm von mehreren Ständen je ein Gericht. Hab Bargeld dabei, manche Stände nehmen keine Karten."
        },
        "fr": {
          "name": "Marché nocturne de Tutanekai Street",
          "description": "Le jeudi, Tutanekai Street devient un marché nocturne hebdomadaire avec des dizaines de stands de cuisine de nombreux pays, de la musique et de l’artisanat. On y mange des raviolis frits, du maïs et des douceurs locales.",
          "tip": "Arrivez le jeudi vers 18 h, avant que les tables ne se remplissent, et prenez un plat à plusieurs stands. Gardez des espèces, certains stands n’acceptent pas la carte."
        },
        "it": {
          "name": "Mercato notturno di Tutanekai Street",
          "description": "Il giovedì Tutanekai Street diventa un mercato serale settimanale con decine di bancarelle di cibo di molti Paesi, musica e artigianato. Qui si mangiano ravioli fritti, mais e dolci locali.",
          "tip": "Arriva il giovedì verso le 18:00, prima che i tavoli si riempiano, e prendi un piatto da più bancarelle. Porta contanti, perché alcune bancarelle non accettano carte."
        }
      }
    },
    {
      "id": "rotorua-mitai-hangi",
      "city": "rotorua",
      "category": "food",
      "lat": -38.1175,
      "lng": 176.2425,
      "image": "0DRR9edmcSA",
      "rating": 4.7,
      "reviews": 6200,
      "tags": [
        "food",
        "culture",
        "history"
      ],
      "price": {
        "kind": "from",
        "amount": 120,
        "currency": "NZD"
      },
      "hours": "17:00–21:30",
      "address": "196 Fairy Springs Road, Rotorua 3015",
      "text": {
        "ru": {
          "name": "Хаку и хангi в Mitai",
          "description": "Вечер в маорийской деревне: приветственная церемония, показ воинского танца хака и ужин хангi, приготовленный в земляной печи. Мясо и овощи томятся несколько часов на горячих камнях.",
          "tip": "Бронируйте за несколько дней и выбирайте вечерний тур, чтобы увидеть, как достают хангi. Приходите за 15 минут, возьмите куртку, платите картой."
        },
        "en": {
          "name": "Mitai Māori Village hāngi",
          "description": "An evening in a Māori village: a welcome ceremony, a haka performance and a hāngi dinner cooked in an earth oven. Meat and vegetables steam for hours on hot stones.",
          "tip": "Book a few days ahead and choose the evening tour to watch the hāngi being lifted. Arrive 15 minutes early, bring a jacket and pay by card."
        },
        "es": {
          "name": "Hāngi en Mitai Māori Village",
          "description": "Una velada en una aldea maorí: ceremonia de bienvenida, espectáculo de haka y cena hāngi cocinada en un horno de tierra. La carne y las verduras se cuecen durante horas sobre piedras calientes.",
          "tip": "Reserva con unos días de antelación y elige el tour de la noche para ver cómo se saca el hāngi. Llega 15 minutos antes, lleva chaqueta y paga con tarjeta."
        },
        "de": {
          "name": "Hāngi im Mitai Māori Village",
          "description": "Ein Abend in einem Māori-Dorf: Begrüßungszeremonie, Haka-Vorführung und ein Hāngi-Abendessen aus dem Erdofen. Fleisch und Gemüse garen stundenlang auf heißen Steinen.",
          "tip": "Buche einige Tage vorher und wähl die Abendtour, um zu sehen, wie der Hāngi geöffnet wird. Sei 15 Minuten früher da, nimm eine Jacke mit und zahl mit Karte."
        },
        "fr": {
          "name": "Hāngi au Mitai Māori Village",
          "description": "Une soirée dans un village maori : cérémonie d’accueil, démonstration de haka et dîner hāngi cuit au four en terre. Viande et légumes mijotent des heures sur des pierres chaudes.",
          "tip": "Réservez quelques jours à l’avance et choisissez la visite du soir pour voir sortir le hāngi. Arrivez 15 minutes avant, prenez une veste et payez par carte."
        },
        "it": {
          "name": "Hāngi al Mitai Māori Village",
          "description": "Una serata in un villaggio māori: cerimonia di benvenuto, esibizione di haka e cena hāngi cotta nel forno di terra. Carne e verdure cuociono per ore su pietre roventi.",
          "tip": "Prenota qualche giorno prima e scegli il tour serale per vedere l’apertura dell’hāngi. Arriva 15 minuti prima, porta una giacca e paga con carta."
        }
      }
    },
    {
      "id": "rotorua-pig-and-whistle",
      "city": "rotorua",
      "category": "food",
      "lat": -38.1394,
      "lng": 176.2491,
      "image": "1DLdLYKCQOs",
      "rating": 4.3,
      "reviews": 2500,
      "tags": [
        "food",
        "history",
        "nightlife"
      ],
      "price": {
        "kind": "level",
        "level": 2
      },
      "hours": "11:00–23:00",
      "address": "1182 Haupapa Street, Rotorua 3010",
      "text": {
        "ru": {
          "name": "Pig & Whistle",
          "description": "Паб в здании бывшего полицейского участка 1940 года с живой музыкой, крафтовым пивом и сытной едой. Внутри сохранились камеры и старые стойки.",
          "tip": "Возьмите пиво местного пивоваренного завода и стейк или фиш-энд-чипс, а на вечер приходите ради живой музыки. Платите картой."
        },
        "en": {
          "name": "Pig & Whistle",
          "description": "A pub in the former 1940 police station with live music, craft beer and hearty food. The cells and old counters are still inside.",
          "tip": "Try a local craft beer and a steak or fish and chips, and come in the evening for the live music. Pay by card."
        },
        "es": {
          "name": "Pig & Whistle",
          "description": "Un pub en la antigua comisaría de 1940 con música en vivo, cerveza artesanal y platos contundentes. Dentro se conservan las celdas y los viejos mostradores.",
          "tip": "Prueba una cerveza artesanal local y un filete o fish and chips, y ven por la noche por la música en directo. Se paga con tarjeta."
        },
        "de": {
          "name": "Pig & Whistle",
          "description": "Ein Pub in der ehemaligen Polizeiwache von 1940 mit Livemusik, Craft-Bier und deftigem Essen. Drinnen sind noch die Zellen und alte Tresen erhalten.",
          "tip": "Probier ein lokales Craft-Bier und ein Steak oder Fish and Chips, und komm abends wegen der Livemusik. Bezahlt wird mit Karte."
        },
        "fr": {
          "name": "Pig & Whistle",
          "description": "Un pub dans l’ancien commissariat de 1940, avec musique live, bière artisanale et plats copieux. Les cellules et les vieux comptoirs sont toujours là.",
          "tip": "Goûtez une bière artisanale locale et un steak ou un fish and chips, et venez le soir pour la musique live. Paiement par carte."
        },
        "it": {
          "name": "Pig & Whistle",
          "description": "Un pub nell’ex stazione di polizia del 1940 con musica dal vivo, birra artigianale e piatti sostanziosi. All’interno restano le celle e i vecchi banconi.",
          "tip": "Assaggia una birra artigianale locale e una bistecca o un fish and chips, e vieni la sera per la musica dal vivo. Si paga con carta."
        }
      }
    },
    {
      "id": "rotorua-hobbiton",
      "city": "rotorua",
      "category": "attraction",
      "spot": "insta",
      "lat": -37.8722,
      "lng": 175.6831,
      "image": "BGJgp2H8bM0",
      "rating": 4.8,
      "reviews": 28900,
      "tags": [
        "photo",
        "culture",
        "gardens"
      ],
      "price": {
        "kind": "from",
        "amount": 120,
        "currency": "NZD"
      },
      "hours": "09:00–17:00",
      "address": "501 Buckland Road, Matamata 3472",
      "text": {
        "ru": {
          "name": "Деревня Хоббитон",
          "description": "Съёмочная площадка «Властелина колец» и «Хоббита» среди зелёных холмов Матамата: круглые двери нор, ухоженные сады и таверна «Зелёный дракон». Экскурсии длятся около двух часов.",
          "tip": "Бронируйте билет заранее и выбирайте утренний слот. Для фото встаньте у круглой двери дома Бэггинс, поверните голову к камере и попросите снимать чуть снизу. Расстояние от Роторуа — около 1 часа езды."
        },
        "en": {
          "name": "Hobbiton Movie Set",
          "description": "The Lord of the Rings and The Hobbit set among the green hills of Matamata: round hobbit doors, tidy gardens and the Green Dragon Inn. Tours last around two hours.",
          "tip": "Book ahead and pick a morning slot. For your shot, stand at the round door of Bag End, turn to the camera and ask for a slightly low angle. It is about an hour’s drive from Rotorua."
        },
        "es": {
          "name": "Set de Hobbiton",
          "description": "El escenario de El Señor de los Anillos y El Hobbit entre las verdes colinas de Matamata: puertas redondas, jardines cuidados y la posada Green Dragon. Las visitas duran unas dos horas.",
          "tip": "Reserva con antelación y elige un turno de mañana. Para la foto, colócate en la puerta redonda de Bolsón Cerrado, mira a la cámara y pide un ángulo algo bajo. Está a una hora en coche desde Rotorua."
        },
        "de": {
          "name": "Hobbiton Movie Set",
          "description": "Die Kulisse von Der Herr der Ringe und Der Hobbit in den grünen Hügeln von Matamata: runde Hobbit-Türen, gepflegte Gärten und das Green Dragon Inn. Die Führungen dauern etwa zwei Stunden.",
          "tip": "Buche im Voraus und wähl ein Zeitfenster am Vormittag. Stell dich für das Foto an die runde Tür von Beutelsend, schau in die Kamera und bitte um einen leicht tiefen Winkel. Von Rotorua sind es etwa eine Stunde Fahrt."
        },
        "fr": {
          "name": "Décor de Hobbiton",
          "description": "Le décor du Seigneur des anneaux et du Hobbit au milieu des collines vertes de Matamata : portes rondes, jardins soignés et auberge du Dragon vert. Les visites durent environ deux heures.",
          "tip": "Réservez à l’avance et choisissez un créneau le matin. Pour la photo, placez-vous devant la porte ronde de Cul-de-Sac, tournez-vous vers l’objectif et demandez un angle légèrement bas. Comptez une heure de route depuis Rotorua."
        },
        "it": {
          "name": "Set di Hobbiton",
          "description": "Il set del Signore degli Anelli e dello Hobbit tra le verdi colline di Matamata: porte rotonde, giardini curati e la locanda del Drago Verde. Le visite durano circa due ore.",
          "tip": "Prenota in anticipo e scegli un turno mattutino. Per la foto, mettiti davanti alla porta rotonda di Casa Baggins, girati verso la fotocamera e chiedi un’angolazione leggermente dal basso. Da Rotorua è circa un’ora di auto."
        }
      }
    },
    {
      "id": "rotorua-government-gardens",
      "city": "rotorua",
      "category": "attraction",
      "spot": "insta",
      "lat": -38.1403,
      "lng": 176.2561,
      "image": "0DRR9edmcSA",
      "rating": 4.6,
      "reviews": 5700,
      "tags": [
        "gardens",
        "architecture",
        "history",
        "photo"
      ],
      "price": {
        "kind": "free"
      },
      "hours": "always",
      "address": "Hinemaru Street, Rotorua 3010",
      "text": {
        "ru": {
          "name": "Правительственные сады и Bath House",
          "description": "Парк у озера Роторуа с живописным зданием Bath House в стиле тюдор 1908 года, розарием и газонами. Рядом поднимается пар от горячих источников.",
          "tip": "Снимайте утром при мягком свете, пока нет людей: встаньте на ступенях здания Bath House и повернитесь к камере в полоборота. Ищите дымок источников на заднем плане."
        },
        "en": {
          "name": "Government Gardens and the Bath House",
          "description": "A park by Lake Rotorua with the picturesque Tudor-style Bath House of 1908, a rose garden and lawns. Steam from hot springs rises nearby.",
          "tip": "Shoot in the morning in soft light before the crowds: stand on the Bath House steps and turn half to the camera. Look for the steam of the springs in the background."
        },
        "es": {
          "name": "Government Gardens y Bath House",
          "description": "Un parque junto al lago Rotorua con el pintoresco edificio de estilo Tudor de 1908, un rosal y céspedes. Cerca sube el vapor de las aguas termales.",
          "tip": "Haz fotos por la mañana con luz suave, antes de la gente: colócate en las escaleras del Bath House y gírate medio hacia la cámara. Busca el vapor de las fuentes al fondo."
        },
        "de": {
          "name": "Government Gardens und Bath House",
          "description": "Ein Park am Lake Rotorua mit dem malerischen Bath House im Tudorstil von 1908, einem Rosengarten und Rasenflächen. In der Nähe steigt Dampf aus heißen Quellen auf.",
          "tip": "Fotografier am Morgen im weichen Licht, bevor die Besucher kommen: Stell dich auf die Stufen des Bath House und dreh dich halb zur Kamera. Such im Hintergrund den Dampf der Quellen."
        },
        "fr": {
          "name": "Government Gardens et Bath House",
          "description": "Un parc au bord du lac Rotorua avec le pittoresque Bath House de style Tudor de 1908, une roseraie et des pelouses. Près de là, la vapeur des sources chaudes s’élève.",
          "tip": "Photographiez le matin dans une lumière douce avant la foule : placez-vous sur les marches du Bath House et tournez-vous à demi vers l’objectif. Cherchez la vapeur des sources à l’arrière-plan."
        },
        "it": {
          "name": "Government Gardens e Bath House",
          "description": "Un parco sul lago Rotorua con il pittoresco Bath House in stile Tudor del 1908, un roseto e prati. Poco distante sale il vapore delle sorgenti calde.",
          "tip": "Scatta al mattino con luce morbida, prima della folla: mettiti sui gradini del Bath House e girati a metà verso l’obiettivo. Cerca il vapore delle sorgenti sullo sfondo."
        }
      }
    },
  ],
};

export default pack;
