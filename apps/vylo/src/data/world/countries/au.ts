import type { CountryPack } from '../types';

const pack: CountryPack = {
  country: {
    code: 'AU',
    region: 'oceania',
    image: '5IHB76yDsQM',
    theme: { accent: '#c2410c', accent2: '#0ea5e9', motif: 'sun' },
    fromMoscow: { hours: 22, direct: false },
    visa: { regime: 'required', days: 90, cost: { kind: 'fixed', amount: 200, currency: 'AUD' }, validity: 'stay',
            docs: ['form', 'photo', 'finance', 'employment', 'itinerary', 'returnTicket', 'homeTies'], notes: [] },
    text: {
      ru: {
        tagline: 'Оперный театр и коралловый риф, кенгуру и бесконечные пляжи',
        description: 'Австралия — целый континент, где мегаполисы с кофейной культурой соседствуют с красной пустыней, тропическими лесами и самым большим коралловым рифом планеты. Здесь лето приходится на наш Новый год, серфинг — национальная религия, а коалы и кенгуру живут буквально за городской чертой.',
        howToGet: 'Прямых рейсов из Москвы нет: обычно летят через Дубай, Доху или Абу-Даби, реже через Пекин, Гуанчжоу или Бангкок — вся дорога занимает 20–24 часа. Туристическую визу (Visitor, subclass 600) оформляют онлайн через ImmiAccount заранее, рассмотрение может занять несколько недель. Расстояния внутри страны огромные, поэтому между городами летают Qantas, Virgin Australia и Jetstar, а по побережью удобно путешествовать на арендованной машине — движение левостороннее.',
        tips: [
          'Российские Visa и Mastercard здесь не работают, а наличные принимают всё реже: везите доллары или евро на обмен и заранее оформите карту зарубежного банка — почти везде платят бесконтактно.',
          'В Сиднее и Мельбурне проезд оплачивают бесконтактной картой или картами Opal и myki, а для поездок по побережью лучше арендовать машину и помнить о левостороннем движении.',
          'Купайтесь только между красно-жёлтыми флажками спасателей, а в тропиках Квинсленда с ноября по май — в защитных костюмах из-за медуз.',
        ],
        guide: {
          title: 'Австралия за 12 дней',
          sections: [
            { title: 'Когда ехать', body: 'Сезоны здесь перевёрнуты: лето длится с декабря по февраль, зима — с июня по август. Сидней и Мельбурн лучше всего весной и осенью, в сентябре — ноябре и марте — мае, когда тепло, но не жарко. На тропический север, к Кэрнсу и рифу, стоит ехать в сухой сезон с мая по октябрь: с ноября по апрель там жарко, влажно, бывают циклоны и появляются опасные медузы.' },
            { title: 'Маршрут на 12 дней', body: 'Начните с четырёх дней в Сиднее: Оперный театр, прогулка по мосту Харбор-Бридж, паром в Мэнли и тропа от Бонди до Куги, плюс день в Голубых горах. Затем перелёт в Мельбурн на три дня — улочки с граффити, кофейни, рынок королевы Виктории и пляжи залива. Финал — пять дней в Кэрнсе: выход на катере к Большому Барьерному рифу, древний лес Дейнтри и канатная дорога в Куранду.' },
            { title: 'Что попробовать', body: 'Австралия — страна отличного кофе: закажите флэт-уайт в любой мельбурнской кофейне. Попробуйте мясные пироги, барбекю на общественных грилях в парках, морских раков и баррамунди, а на десерт — торт «Павлова» и пирожные ламингтон. Вина из долин Хантер и Ярра не уступают европейским, а пасту Vegemite на тосте стоит попробовать хотя бы раз — с тонким слоем масла.' },
            { title: 'Деньги, связь и транспорт', body: 'Валюта — австралийский доллар (AUD). Российские карты не работают, а многие кафе вообще не принимают наличные, поэтому заранее позаботьтесь о карте иностранного банка и держите немного налички для рынков. Местную SIM-карту Telstra, Optus или Vodafone продают в аэропорту и супермаркетах, работает и eSIM. Между городами выгоднее летать лоукостами, а в городах ездить на метро, трамваях и паромах.' },
          ],
        },
      },
      en: {
        tagline: 'An opera house and a coral reef, kangaroos and endless beaches',
        description: 'Australia is a whole continent where coffee-mad cities sit beside red desert, rainforest and the largest coral reef on the planet. Summer falls at New Year, surfing is a national religion, and koalas and kangaroos live just beyond the city limits.',
        howToGet: 'There are no direct flights from Moscow: most travellers connect in Dubai, Doha or Abu Dhabi, less often in Beijing, Guangzhou or Bangkok, and the journey takes 20–24 hours. The tourist visa (Visitor, subclass 600) is applied for online through ImmiAccount well in advance, and processing can take several weeks. Distances are vast, so Qantas, Virgin Australia and Jetstar fly between cities, while a rental car is the best way to explore the coast; traffic drives on the left.',
        tips: [
          'Russian-issued Visa and Mastercard cards don’t work here and cash is accepted less and less, so bring dollars or euros to exchange and get a foreign bank card in advance, as contactless payment is used almost everywhere.',
          'In Sydney and Melbourne you pay fares with a contactless card or with Opal and myki cards, and for coastal trips it is best to rent a car and remember to drive on the left.',
          'Swim only between the red and yellow lifeguard flags, and in tropical Queensland wear a stinger suit from November to May because of jellyfish.',
        ],
        guide: {
          title: 'Australia in 12 days',
          sections: [
            { title: 'When to go', body: 'The seasons are reversed: summer runs from December to February and winter from June to August. Sydney and Melbourne are at their best in spring and autumn, September to November and March to May, when it is warm but not hot. Head to the tropical north, Cairns and the reef, in the dry season from May to October: from November to April it is hot and humid, cyclones can strike and dangerous jellyfish appear.' },
            { title: 'A 12-day route', body: 'Start with four days in Sydney: the Opera House, a walk across the Harbour Bridge, the ferry to Manly and the Bondi to Coogee coastal walk, plus a day in the Blue Mountains. Then fly to Melbourne for three days of graffiti laneways, cafés, the Queen Victoria Market and the beaches of the bay. Finish with five days in Cairns: a boat trip to the Great Barrier Reef, the ancient Daintree rainforest and the cableway to Kuranda.' },
            { title: 'What to eat', body: 'Australia is a land of great coffee, so order a flat white in any Melbourne café. Try meat pies, a barbecue on the free public grills in the parks, Moreton Bay bugs and barramundi, and for dessert a pavlova and lamingtons. Wines from the Hunter and Yarra valleys rival Europe’s best, and Vegemite on toast is worth trying at least once, spread very thinly over butter.' },
            { title: 'Money, SIM cards and transport', body: 'The currency is the Australian dollar (AUD). Russian cards don’t work and many cafés don’t take cash at all, so arrange a foreign bank card in advance and keep a little cash for markets. Local SIM cards from Telstra, Optus or Vodafone are sold at the airport and in supermarkets, and eSIMs work too. Between cities low-cost flights are the best value, while in town you get around by metro, tram and ferry.' },
          ],
        },
      },
      es: {
        tagline: 'Una ópera y un arrecife de coral, canguros y playas sin fin',
        description: 'Australia es todo un continente donde ciudades cafeteras conviven con el desierto rojo, la selva tropical y el mayor arrecife de coral del planeta. El verano llega en Año Nuevo, el surf es religión nacional y los koalas y canguros viven a las afueras de las ciudades.',
        howToGet: 'No hay vuelos directos desde Moscú: lo habitual es hacer escala en Dubái, Doha o Abu Dabi, y con menos frecuencia en Pekín, Cantón o Bangkok, con 20–24 horas de viaje. El visado de turista (Visitor, subclass 600) se tramita en línea con ImmiAccount con antelación, y la resolución puede tardar varias semanas. Las distancias son enormes, así que entre ciudades vuelan Qantas, Virgin Australia y Jetstar, y para recorrer la costa lo mejor es alquilar un coche; se conduce por la izquierda.',
        tips: [
          'Las tarjetas Visa y Mastercard emitidas en Rusia no funcionan aquí y el efectivo se acepta cada vez menos: lleva dólares o euros para cambiar y consigue antes una tarjeta de un banco extranjero, porque casi todo se paga sin contacto.',
          'En Sídney y Melbourne el transporte se paga con tarjeta sin contacto o con las tarjetas Opal y myki, y para recorrer la costa conviene alquilar coche y recordar que se circula por la izquierda.',
          'Báñate solo entre las banderas rojas y amarillas de los socorristas, y en el Queensland tropical usa traje protector de noviembre a mayo por las medusas.',
        ],
        guide: {
          title: 'Australia en 12 días',
          sections: [
            { title: 'Cuándo ir', body: 'Las estaciones están invertidas: el verano va de diciembre a febrero y el invierno de junio a agosto. Sídney y Melbourne lucen mejor en primavera y otoño, de septiembre a noviembre y de marzo a mayo, cuando hace calor sin agobiar. Al norte tropical, a Cairns y al arrecife, conviene ir en la estación seca, de mayo a octubre: de noviembre a abril hace calor húmedo, puede haber ciclones y aparecen medusas peligrosas.' },
            { title: 'Ruta de 12 días', body: 'Empieza con cuatro días en Sídney: la Ópera, un paseo por el Harbour Bridge, el ferri a Manly y el sendero costero de Bondi a Coogee, más un día en las Montañas Azules. Luego vuela a Melbourne para tres días de callejones con grafitis, cafeterías, el mercado Queen Victoria y las playas de la bahía. Termina con cinco días en Cairns: una salida en barco a la Gran Barrera de Coral, la antigua selva de Daintree y el teleférico a Kuranda.' },
            { title: 'Qué probar', body: 'Australia es tierra de buen café: pide un flat white en cualquier cafetería de Melbourne. Prueba los meat pies, una barbacoa en las parrillas públicas de los parques, las cigalas Moreton Bay bugs y el barramundi, y de postre una pavlova y unos lamingtons. Los vinos de los valles de Hunter y Yarra no tienen nada que envidiar a los europeos, y la Vegemite sobre una tostada merece probarse al menos una vez, en capa muy fina sobre mantequilla.' },
            { title: 'Dinero, móvil y transporte', body: 'La moneda es el dólar australiano (AUD). Las tarjetas rusas no funcionan y muchos cafés no aceptan efectivo, así que consigue antes una tarjeta de un banco extranjero y guarda algo de efectivo para los mercados. Las SIM locales de Telstra, Optus o Vodafone se venden en el aeropuerto y en supermercados, y la eSIM también funciona. Entre ciudades salen más a cuenta los vuelos low cost, y dentro de ellas el metro, el tranvía y los ferris.' },
          ],
        },
      },
      de: {
        tagline: 'Opernhaus und Korallenriff, Kängurus und endlose Strände',
        description: 'Australien ist ein ganzer Kontinent, in dem kaffeeverliebte Großstädte neben roter Wüste, Regenwald und dem größten Korallenriff der Erde liegen. Der Sommer fällt auf Neujahr, Surfen ist Nationalreligion, und Koalas und Kängurus leben gleich hinter der Stadtgrenze.',
        howToGet: 'Direktflüge ab Moskau gibt es nicht: Meist steigst du in Dubai, Doha oder Abu Dhabi um, seltener in Peking, Guangzhou oder Bangkok – die Reise dauert 20–24 Stunden. Das Touristenvisum (Visitor, subclass 600) wird rechtzeitig online über ImmiAccount beantragt, die Bearbeitung kann mehrere Wochen dauern. Die Entfernungen sind riesig, daher fliegen Qantas, Virgin Australia und Jetstar zwischen den Städten, und die Küste erkundest du am besten mit dem Mietwagen – es herrscht Linksverkehr.',
        tips: [
          'In Russland ausgegebene Visa- und Mastercard-Karten funktionieren hier nicht, und Bargeld wird immer seltener angenommen: Nimm Dollar oder Euro zum Tauschen mit und besorg dir vorab eine Karte einer ausländischen Bank, denn fast überall wird kontaktlos bezahlt.',
          'In Sydney und Melbourne zahlst du Fahrten mit kontaktloser Karte oder mit Opal- und myki-Karten, und für Küstentouren mietest du am besten ein Auto – denk an den Linksverkehr.',
          'Bade nur zwischen den rot-gelben Flaggen der Rettungsschwimmer und trag im tropischen Queensland von November bis Mai wegen der Quallen einen Schutzanzug.',
        ],
        guide: {
          title: 'Australien in 12 Tagen',
          sections: [
            { title: 'Reisezeit', body: 'Die Jahreszeiten sind umgekehrt: Sommer ist von Dezember bis Februar, Winter von Juni bis August. Sydney und Melbourne sind im Frühling und Herbst am schönsten, von September bis November und von März bis Mai, wenn es warm, aber nicht heiß ist. In den tropischen Norden, nach Cairns und ans Riff, reist du am besten in der Trockenzeit von Mai bis Oktober: Von November bis April ist es heiß und schwül, es drohen Zyklone und gefährliche Quallen.' },
            { title: 'Route für 12 Tage', body: 'Beginne mit vier Tagen in Sydney: Opernhaus, ein Spaziergang über die Harbour Bridge, die Fähre nach Manly und der Küstenweg von Bondi nach Coogee, dazu ein Tag in den Blue Mountains. Dann fliegst du für drei Tage nach Melbourne – Graffiti-Gassen, Cafés, der Queen Victoria Market und die Strände der Bucht. Zum Schluss fünf Tage Cairns: eine Bootstour zum Great Barrier Reef, der uralte Daintree-Regenwald und die Seilbahn nach Kuranda.' },
            { title: 'Was du probieren solltest', body: 'Australien ist ein Land großartigen Kaffees: Bestell in jedem Café in Melbourne einen Flat White. Probier Meat Pies, ein Barbecue auf den kostenlosen Grills in den Parks, Moreton Bay Bugs und Barramundi und zum Nachtisch Pavlova und Lamingtons. Weine aus dem Hunter und dem Yarra Valley stehen europäischen in nichts nach, und Vegemite auf Toast solltest du einmal probieren – hauchdünn auf Butter.' },
            { title: 'Geld, Handy und Verkehr', body: 'Die Währung ist der Australische Dollar (AUD). Russische Karten funktionieren nicht, und viele Cafés nehmen gar kein Bargeld an, also kümmere dich vorab um eine Karte einer ausländischen Bank und behalte etwas Bargeld für Märkte. SIM-Karten von Telstra, Optus oder Vodafone gibt es am Flughafen und im Supermarkt, eSIMs funktionieren ebenfalls. Zwischen den Städten sind Billigflüge am günstigsten, in den Städten fährst du mit Metro, Tram und Fähre.' },
          ],
        },
      },
      fr: {
        tagline: 'Un opéra et un récif corallien, des kangourous et des plages sans fin',
        description: 'L’Australie est un continent entier où des métropoles accros au café côtoient le désert rouge, la forêt tropicale et le plus grand récif corallien de la planète. L’été tombe au Nouvel An, le surf est une religion nationale et koalas et kangourous vivent aux portes des villes.',
        howToGet: 'Il n’existe aucun vol direct depuis Moscou : on passe le plus souvent par Dubaï, Doha ou Abou Dhabi, plus rarement par Pékin, Canton ou Bangkok, pour 20 à 24 heures de voyage. Le visa touristique (Visitor, subclass 600) se demande en ligne sur ImmiAccount bien à l’avance, et son traitement peut prendre plusieurs semaines. Les distances sont immenses : Qantas, Virgin Australia et Jetstar relient les villes, et la voiture de location reste idéale pour explorer la côte ; on roule à gauche.',
        tips: [
          'Les cartes Visa et Mastercard émises en Russie ne fonctionnent pas ici et l’argent liquide est de moins en moins accepté : emportez des dollars ou des euros à changer et procurez-vous à l’avance une carte d’une banque étrangère, car on paie presque partout sans contact.',
          'À Sydney et à Melbourne, les transports se paient par carte sans contact ou avec les cartes Opal et myki, et pour longer la côte mieux vaut louer une voiture en gardant à l’esprit la conduite à gauche.',
          'Ne vous baignez qu’entre les drapeaux rouge et jaune des sauveteurs, et dans le Queensland tropical portez une combinaison anti-méduses de novembre à mai.',
        ],
        guide: {
          title: 'L’Australie en 12 jours',
          sections: [
            { title: 'Quand partir', body: 'Les saisons sont inversées : l’été dure de décembre à février et l’hiver de juin à août. Sydney et Melbourne sont au mieux au printemps et à l’automne, de septembre à novembre et de mars à mai, quand il fait doux sans être torride. Pour le nord tropical, Cairns et le récif, visez la saison sèche de mai à octobre : de novembre à avril, il fait chaud et humide, les cyclones menacent et des méduses dangereuses apparaissent.' },
            { title: 'Itinéraire de 12 jours', body: 'Commencez par quatre jours à Sydney : l’Opéra, une marche sur le Harbour Bridge, le ferry pour Manly et le sentier côtier de Bondi à Coogee, plus une journée dans les Blue Mountains. Envolez-vous ensuite pour Melbourne, trois jours entre ruelles couvertes de graffitis, cafés, Queen Victoria Market et plages de la baie. Terminez par cinq jours à Cairns : sortie en bateau sur la Grande Barrière de corail, forêt ancienne de la Daintree et téléphérique jusqu’à Kuranda.' },
            { title: 'Que goûter', body: 'L’Australie est le pays du bon café : commandez un flat white dans n’importe quel café de Melbourne. Goûtez les meat pies, un barbecue sur les grils publics gratuits des parcs, les cigales de mer Moreton Bay bugs et le barramundi, puis au dessert une pavlova et des lamingtons. Les vins des vallées Hunter et Yarra rivalisent avec les européens, et la Vegemite sur une tartine mérite d’être goûtée au moins une fois, en couche très fine sur du beurre.' },
            { title: 'Argent, téléphone et transports', body: 'La monnaie est le dollar australien (AUD). Les cartes russes ne fonctionnent pas et bien des cafés refusent le liquide : prévoyez à l’avance une carte d’une banque étrangère et gardez un peu d’espèces pour les marchés. Les cartes SIM Telstra, Optus ou Vodafone se vendent à l’aéroport et en supermarché, et l’eSIM fonctionne aussi. Entre les villes, les vols low cost sont les plus avantageux ; en ville, on circule en métro, en tram et en ferry.' },
          ],
        },
      },
      it: {
        tagline: 'Un teatro dell’opera e una barriera corallina, canguri e spiagge infinite',
        description: 'L’Australia è un intero continente dove metropoli innamorate del caffè convivono con il deserto rosso, la foresta pluviale e la più grande barriera corallina del pianeta. L’estate arriva a Capodanno, il surf è una religione nazionale e koala e canguri vivono appena fuori città.',
        howToGet: 'Non ci sono voli diretti da Mosca: di solito si fa scalo a Dubai, Doha o Abu Dhabi, più di rado a Pechino, Canton o Bangkok, per 20–24 ore di viaggio. Il visto turistico (Visitor, subclass 600) si richiede online tramite ImmiAccount con largo anticipo, e l’esame può richiedere diverse settimane. Le distanze sono enormi, quindi tra le città volano Qantas, Virgin Australia e Jetstar, mentre per esplorare la costa conviene l’auto a noleggio; si guida a sinistra.',
        tips: [
          'Le carte Visa e Mastercard emesse in Russia qui non funzionano e i contanti sono accettati sempre meno: porta dollari o euro da cambiare e procurati in anticipo una carta di una banca estera, perché quasi ovunque si paga contactless.',
          'A Sydney e Melbourne i mezzi si pagano con carta contactless o con le tessere Opal e myki, e per girare la costa conviene noleggiare un’auto ricordando la guida a sinistra.',
          'Fai il bagno solo tra le bandiere rosse e gialle dei bagnini e nel Queensland tropicale, da novembre a maggio, indossa una muta antimeduse.',
        ],
        guide: {
          title: 'L’Australia in 12 giorni',
          sections: [
            { title: 'Quando andare', body: 'Le stagioni sono invertite: l’estate va da dicembre a febbraio e l’inverno da giugno ad agosto. Sydney e Melbourne danno il meglio in primavera e autunno, da settembre a novembre e da marzo a maggio, quando fa caldo ma non troppo. Al nord tropicale, a Cairns e alla barriera, conviene andare nella stagione secca da maggio a ottobre: da novembre ad aprile fa caldo umido, possono arrivare cicloni e compaiono meduse pericolose.' },
            { title: 'Itinerario di 12 giorni', body: 'Inizia con quattro giorni a Sydney: l’Opera House, una passeggiata sull’Harbour Bridge, il traghetto per Manly e il sentiero costiero da Bondi a Coogee, più una giornata nelle Blue Mountains. Poi vola a Melbourne per tre giorni tra vicoli coperti di graffiti, caffè, il Queen Victoria Market e le spiagge della baia. Chiudi con cinque giorni a Cairns: un’uscita in barca sulla Grande Barriera Corallina, l’antica foresta del Daintree e la funivia per Kuranda.' },
            { title: 'Cosa assaggiare', body: 'L’Australia è la patria del buon caffè: ordina un flat white in qualsiasi locale di Melbourne. Prova le meat pie, un barbecue sulle griglie pubbliche gratuite dei parchi, le cicale di mare Moreton Bay bug e il barramundi, e per dessert una pavlova e i lamington. I vini delle valli Hunter e Yarra non hanno nulla da invidiare a quelli europei, e la Vegemite sul pane tostato va provata almeno una volta, in uno strato sottilissimo sul burro.' },
            { title: 'Soldi, telefono e trasporti', body: 'La valuta è il dollaro australiano (AUD). Le carte russe non funzionano e molti caffè non accettano contanti, quindi procurati in anticipo una carta di una banca estera e tieni qualche contante per i mercati. Le SIM locali Telstra, Optus o Vodafone si vendono in aeroporto e nei supermercati, e funziona anche l’eSIM. Tra le città conviene volare low cost, mentre in città ci si muove in metro, tram e traghetto.' },
          ],
        },
      },
    },
  },
  cities: [
    {
      id: 'sydney', lat: -33.8688, lng: 151.2093, image: 'MVXxn9w4ofk', gallery: ['5IHB76yDsQM', 'I2jJd5mN07I', '3HuDT9sC29U', '8Zfp8dqi2VA'],
      rating: 4.8, reviews: 21480, tags: ['city', 'beaches', 'architecture', 'surf'], months: [3, 4, 5, 9, 10, 11], budgetPerDay: 180, currency: 'AUD',
      language: 'en', timezone: 'UTC+10', zoom: 11, theme: { accent: '#0369a1', accent2: '#f8fafc', motif: 'waves' },
      text: {
        ru: { name: 'Сидней', tagline: 'Паруса Оперы, мост-«вешалка» и серферы Бонди', description: 'Самый известный город Австралии раскинулся вокруг одной из красивейших гаваней мира, где белые паруса Оперного театра смотрят на арку Харбор-Бриджа. Паромы здесь — обычный транспорт, а до океанских пляжей Бонди и Мэнли — полчаса от делового центра.', tips: ['Катайтесь на городских паромах: маршрут от Серкулар-Ки до Мэнли — лучшая и самая дешёвая морская прогулка в городе.', 'По воскресеньям суммарная плата за проезд на весь день ограничена небольшим лимитом — удобный день для дальних поездок.'], gettingThere: 'Из аэропорта Кингсфорд-Смит поезд Airport Link довозит до центра за 15 минут; поездка дороже обычной из-за станционного сбора, а автобус 420 до Бонди-Джанкшен и такси — альтернатива.' },
        en: { name: 'Sydney', tagline: 'Opera House sails, the Coathanger bridge and Bondi surfers', description: 'Australia’s most famous city wraps around one of the world’s most beautiful harbours, where the white sails of the Opera House face the arch of the Harbour Bridge. Ferries are everyday transport here, and the ocean beaches of Bondi and Manly are half an hour from the business district.', tips: ['Ride the city ferries: the route from Circular Quay to Manly is the best and cheapest harbour cruise in town.', 'On Sundays the total daily fare is capped at a low amount, which makes it a good day for longer trips.'], gettingThere: 'From Kingsford Smith Airport the Airport Link train reaches the centre in 15 minutes; it costs more than a normal fare because of the station access fee, and bus 420 to Bondi Junction or a taxi are alternatives.' },
        es: { name: 'Sídney', tagline: 'Las velas de la Ópera, el puente «percha» y los surfistas de Bondi', description: 'La ciudad más famosa de Australia rodea uno de los puertos más bellos del mundo, donde las velas blancas de la Ópera miran al arco del Harbour Bridge. Aquí los ferris son transporte cotidiano, y las playas oceánicas de Bondi y Manly quedan a media hora del centro de negocios.', tips: ['Súbete a los ferris urbanos: la ruta de Circular Quay a Manly es el mejor y más barato paseo por la bahía.', 'Los domingos el gasto diario en transporte tiene un tope bajo, así que es buen día para trayectos largos.'], gettingThere: 'Desde el aeropuerto Kingsford Smith, el tren Airport Link llega al centro en 15 minutos; cuesta más que un billete normal por la tasa de estación, y el autobús 420 a Bondi Junction o el taxi son alternativas.' },
        de: { name: 'Sydney', tagline: 'Opernsegel, die „Kleiderbügel“-Brücke und Surfer in Bondi', description: 'Australiens berühmteste Stadt umschließt einen der schönsten Naturhäfen der Welt, wo die weißen Segel des Opernhauses auf den Bogen der Harbour Bridge blicken. Fähren sind hier ganz normaler Nahverkehr, und die Ozeanstrände von Bondi und Manly liegen eine halbe Stunde vom Geschäftsviertel entfernt.', tips: ['Fahr mit den Stadtfähren: Die Strecke von Circular Quay nach Manly ist die schönste und günstigste Hafenrundfahrt.', 'Sonntags ist der Tagesfahrpreis auf einen niedrigen Betrag gedeckelt – ideal für weitere Ausflüge.'], gettingThere: 'Vom Flughafen Kingsford Smith fährt der Airport-Link-Zug in 15 Minuten ins Zentrum; wegen der Stationsgebühr kostet er mehr als ein normales Ticket, Alternativen sind Bus 420 nach Bondi Junction oder ein Taxi.' },
        fr: { name: 'Sydney', tagline: 'Les voiles de l’Opéra, le pont « cintre » et les surfeurs de Bondi', description: 'La ville la plus célèbre d’Australie s’enroule autour de l’une des plus belles rades du monde, où les voiles blanches de l’Opéra font face à l’arche du Harbour Bridge. Ici, le ferry est un transport du quotidien, et les plages océanes de Bondi et Manly sont à une demi-heure du quartier d’affaires.', tips: ['Prenez les ferrys urbains : la ligne de Circular Quay à Manly est la plus belle et la moins chère des croisières dans la baie.', 'Le dimanche, le coût total des trajets de la journée est plafonné à un petit montant, idéal pour les longues excursions.'], gettingThere: 'Depuis l’aéroport Kingsford Smith, le train Airport Link rejoint le centre en 15 minutes ; il coûte plus cher qu’un trajet normal à cause de la taxe de gare, et le bus 420 vers Bondi Junction ou le taxi sont des alternatives.' },
        it: { name: 'Sydney', tagline: 'Le vele dell’Opera, il ponte «attaccapanni» e i surfisti di Bondi', description: 'La città più famosa d’Australia avvolge uno dei porti naturali più belli del mondo, dove le vele bianche dell’Opera House guardano l’arco dell’Harbour Bridge. Qui il traghetto è un mezzo quotidiano e le spiagge oceaniche di Bondi e Manly sono a mezz’ora dal centro degli affari.', tips: ['Prendi i traghetti urbani: la linea da Circular Quay a Manly è la crociera nella baia più bella ed economica.', 'La domenica la spesa giornaliera per i mezzi ha un tetto basso, perfetto per le gite più lunghe.'], gettingThere: 'Dall’aeroporto Kingsford Smith il treno Airport Link arriva in centro in 15 minuti; costa più di un biglietto normale per la tassa di stazione, e il bus 420 per Bondi Junction o il taxi sono alternative.' },
      },
    },
    {
      id: 'melbourne', lat: -37.8136, lng: 144.9631, image: 'GDBlMe5z4hc', gallery: ['DymAJNbEsu4', 'hSLon2ZFdP8', '7pq_V5KGHCc', '_EjoYAfTIpM'],
      rating: 4.7, reviews: 17350, tags: ['city', 'art', 'food', 'culture'], months: [3, 4, 10, 11, 12], budgetPerDay: 160, currency: 'AUD',
      language: 'en', timezone: 'UTC+10', zoom: 11, theme: { accent: '#1f2937', accent2: '#eab308', motif: 'grid' },
      text: {
        ru: { name: 'Мельбурн', tagline: 'Кофейная столица: граффити, трамваи и улочки-лейнвеи', description: 'Мельбурн — культурная и гастрономическая столица Австралии, где лучший в стране кофе варят в крошечных кофейнях узких улочек-лейнвеев. Город викторианских аркад, бесплатных трамваев в центре, уличного искусства и спортивных стадионов умещает за день все четыре времени года.', tips: ['Трамваи в пределах центральной зоны Free Tram Zone бесплатные — ищите знаки на остановках.', 'Погода меняется по несколько раз в день: даже летом держите под рукой куртку.'], gettingThere: 'Из аэропорта Тулламарин автобус SkyBus идёт до станции Southern Cross около 30 минут. Из Сиднея лететь около 1 ч 30 мин.' },
        en: { name: 'Melbourne', tagline: 'Coffee capital: graffiti, trams and hidden laneways', description: 'Melbourne is Australia’s cultural and culinary capital, where the country’s best coffee is brewed in tiny cafés tucked into narrow laneways. A city of Victorian arcades, free trams in the centre, street art and sports stadiums, it can fit all four seasons into one day.', tips: ['Trams within the central Free Tram Zone cost nothing, so look for the signs at the stops.', 'The weather changes several times a day, so keep a jacket handy even in summer.'], gettingThere: 'From Tullamarine Airport the SkyBus reaches Southern Cross Station in about 30 minutes. The flight from Sydney takes around 1 hour 30 minutes.' },
        es: { name: 'Melbourne', tagline: 'La capital del café: grafitis, tranvías y callejones secretos', description: 'Melbourne es la capital cultural y gastronómica de Australia, donde el mejor café del país se prepara en diminutas cafeterías escondidas en estrechos callejones. Ciudad de galerías victorianas, tranvías gratuitos en el centro, arte urbano y estadios, es capaz de reunir las cuatro estaciones en un solo día.', tips: ['Los tranvías dentro de la Free Tram Zone del centro son gratis: busca las señales en las paradas.', 'El tiempo cambia varias veces al día, así que lleva una chaqueta a mano incluso en verano.'], gettingThere: 'Desde el aeropuerto de Tullamarine, el SkyBus llega a la estación Southern Cross en unos 30 minutos. El vuelo desde Sídney dura alrededor de 1 h 30 min.' },
        de: { name: 'Melbourne', tagline: 'Kaffeehauptstadt: Graffiti, Trams und versteckte Laneways', description: 'Melbourne ist Australiens Kultur- und Genusshauptstadt, wo der beste Kaffee des Landes in winzigen Cafés in schmalen Gassen gebrüht wird. Die Stadt der viktorianischen Arkaden, kostenlosen Trams im Zentrum, Street-Art und Sportstadien bringt alle vier Jahreszeiten in einem Tag unter.', tips: ['Innerhalb der Free Tram Zone im Zentrum fährst du kostenlos Tram – achte auf die Schilder an den Haltestellen.', 'Das Wetter wechselt mehrmals am Tag, nimm also selbst im Sommer eine Jacke mit.'], gettingThere: 'Vom Flughafen Tullamarine fährt der SkyBus in etwa 30 Minuten zur Southern Cross Station. Der Flug ab Sydney dauert rund 1 Stunde 30 Minuten.' },
        fr: { name: 'Melbourne', tagline: 'Capitale du café : graffitis, tramways et ruelles secrètes', description: 'Melbourne est la capitale culturelle et gourmande de l’Australie, où le meilleur café du pays est préparé dans de minuscules cafés nichés au fond d’étroites ruelles. Ville d’arcades victoriennes, de tramways gratuits dans le centre, de street art et de stades, elle peut connaître les quatre saisons en une seule journée.', tips: ['Les tramways sont gratuits dans la Free Tram Zone du centre : repérez les panneaux aux arrêts.', 'Le temps change plusieurs fois par jour : gardez une veste à portée de main, même l’été.'], gettingThere: 'Depuis l’aéroport de Tullamarine, le SkyBus rejoint la gare de Southern Cross en 30 minutes environ. Le vol depuis Sydney dure environ 1 h 30.' },
        it: { name: 'Melbourne', tagline: 'Capitale del caffè: graffiti, tram e vicoli nascosti', description: 'Melbourne è la capitale culturale e gastronomica dell’Australia, dove il miglior caffè del Paese si prepara in minuscoli locali nascosti negli stretti vicoli. Città di gallerie vittoriane, tram gratuiti in centro, street art e stadi, riesce a concentrare tutte e quattro le stagioni in un solo giorno.', tips: ['I tram nella Free Tram Zone del centro sono gratuiti: cerca i cartelli alle fermate.', 'Il tempo cambia più volte al giorno, quindi tieni a portata di mano una giacca anche d’estate.'], gettingThere: 'Dall’aeroporto di Tullamarine lo SkyBus arriva alla stazione Southern Cross in circa 30 minuti. Il volo da Sydney dura circa 1 ora e 30 minuti.' },
      },
    },
    {
      id: 'cairns', lat: -16.9186, lng: 145.7781, image: 'X9TEqJWmM6Q', gallery: ['0pYgTNaYeeY', 'X9TEqJWmM6Q'],
      rating: 4.7, reviews: 9640, tags: ['diving', 'jungle', 'islands', 'unesco'], months: [5, 6, 7, 8, 9, 10], budgetPerDay: 150, currency: 'AUD',
      language: 'en', timezone: 'UTC+10', zoom: 9, theme: { accent: '#0d9488', accent2: '#22d3ee', motif: 'palms' },
      text: {
        ru: { name: 'Кэрнс и Большой Барьерный риф', tagline: 'Ворота к рифу и древнейшему тропическому лесу планеты', description: 'Тропический Кэрнс — главная база для выходов к Большому Барьерному рифу, крупнейшей коралловой системе Земли. На севере начинается влажный лес Дейнтри, которому больше 100 миллионов лет, — там джунгли буквально спускаются к пляжам.', tips: ['Для снорклинга выбирайте туры на внешний риф: кораллы там ярче, а вода прозрачнее, чем у прибрежных островов.', 'В городе нет морского пляжа для купания — вместо него бесплатная лагуна-бассейн на набережной Эспланада.'], gettingThere: 'Международный аэропорт Кэрнса в 10 минутах езды от центра, туда летают прямые рейсы из Сиднея (около 3 часов) и Мельбурна (около 3 ч 30 мин).' },
        en: { name: 'Cairns and the Great Barrier Reef', tagline: 'Gateway to the reef and the planet’s oldest rainforest', description: 'Tropical Cairns is the main base for trips to the Great Barrier Reef, the largest coral system on Earth. To the north begins the Daintree, a rainforest more than 100 million years old, where the jungle runs right down to the beaches.', tips: ['For snorkelling choose outer-reef tours: the coral is more colourful and the water clearer than around the inshore islands.', 'The city has no swimming beach, but there is a free lagoon pool on the Esplanade instead.'], gettingThere: 'Cairns International Airport is a 10-minute drive from the centre, with direct flights from Sydney (about 3 hours) and Melbourne (about 3 hours 30 minutes).' },
        es: { name: 'Cairns y la Gran Barrera de Coral', tagline: 'Puerta al arrecife y a la selva más antigua del planeta', description: 'La tropical Cairns es la base principal para salir a la Gran Barrera de Coral, el mayor sistema coralino de la Tierra. Al norte empieza Daintree, una selva de más de 100 millones de años donde la jungla baja literalmente hasta las playas.', tips: ['Para hacer esnórquel elige excursiones al arrecife exterior: el coral es más vivo y el agua más clara que junto a las islas costeras.', 'La ciudad no tiene playa para bañarse, pero a cambio hay una laguna-piscina gratuita en la Esplanade.'], gettingThere: 'El aeropuerto internacional de Cairns está a 10 minutos en coche del centro, con vuelos directos desde Sídney (unas 3 horas) y Melbourne (unas 3 h 30 min).' },
        de: { name: 'Cairns und das Great Barrier Reef', tagline: 'Tor zum Riff und zum ältesten Regenwald der Erde', description: 'Das tropische Cairns ist der wichtigste Ausgangspunkt für Touren zum Great Barrier Reef, dem größten Korallensystem der Erde. Im Norden beginnt der Daintree, ein über 100 Millionen Jahre alter Regenwald, in dem der Dschungel bis an die Strände reicht.', tips: ['Zum Schnorcheln wähle Touren zum äußeren Riff: Dort sind die Korallen farbiger und das Wasser klarer als an den küstennahen Inseln.', 'Einen Badestrand hat die Stadt nicht, dafür gibt es an der Esplanade eine kostenlose Lagune zum Schwimmen.'], gettingThere: 'Der internationale Flughafen Cairns liegt 10 Autominuten vom Zentrum entfernt, Direktflüge gibt es ab Sydney (etwa 3 Stunden) und Melbourne (etwa 3 Stunden 30 Minuten).' },
        fr: { name: 'Cairns et la Grande Barrière de corail', tagline: 'Porte du récif et de la plus ancienne forêt tropicale du monde', description: 'La tropicale Cairns est la grande base de départ vers la Grande Barrière de corail, le plus vaste système corallien de la Terre. Au nord commence la Daintree, une forêt humide de plus de 100 millions d’années, où la jungle descend jusqu’aux plages.', tips: ['Pour le snorkeling, choisissez les sorties vers le récif extérieur : le corail y est plus coloré et l’eau plus limpide qu’autour des îles côtières.', 'La ville n’a pas de plage où se baigner, mais un lagon-piscine gratuit l’attend sur l’Esplanade.'], gettingThere: 'L’aéroport international de Cairns est à 10 minutes en voiture du centre, avec des vols directs depuis Sydney (3 heures environ) et Melbourne (3 h 30 environ).' },
        it: { name: 'Cairns e la Grande Barriera Corallina', tagline: 'Porta della barriera e della foresta più antica del pianeta', description: 'La tropicale Cairns è la base principale per le uscite sulla Grande Barriera Corallina, il più grande sistema di coralli della Terra. A nord inizia il Daintree, una foresta pluviale di oltre 100 milioni di anni dove la giungla scende fino alle spiagge.', tips: ['Per lo snorkeling scegli le escursioni sulla barriera esterna: i coralli sono più colorati e l’acqua più limpida che vicino alle isole costiere.', 'In città non c’è una spiaggia balneabile, ma sull’Esplanade trovi una laguna-piscina gratuita.'], gettingThere: 'L’aeroporto internazionale di Cairns è a 10 minuti d’auto dal centro, con voli diretti da Sydney (circa 3 ore) e Melbourne (circa 3 ore e 30 minuti).' },
      },
    },
  ],
  places: [
    // Sydney
    {
      id: 'sydney-opera-house', city: 'sydney', category: 'attraction', lat: -33.8568, lng: 151.2153, image: 'MVXxn9w4ofk',
      rating: 4.8, reviews: 96500, tags: ['architecture', 'unesco', 'views'], hours: '09:00–17:00',
      address: 'Bennelong Point, Sydney NSW 2000',
      text: {
        ru: { name: 'Сиднейский оперный театр', description: 'Белые «паруса» датского архитектора Йорна Утзона, открытые в 1973 году, стали символом континента и объектом ЮНЕСКО. Внутри — несколько залов, где идут опера, балет и концерты, а набережная вокруг открыта круглосуточно.', tip: 'Запишитесь на часовую экскурсию по залам или возьмите билет на любой спектакль — это лучший способ увидеть интерьеры.' },
        en: { name: 'Sydney Opera House', description: 'The white “sails” designed by Danish architect Jørn Utzon opened in 1973 and became a symbol of the continent and a UNESCO site. Inside are several halls for opera, ballet and concerts, while the promenade around it is open round the clock.', tip: 'Book the one-hour tour of the halls or a ticket to any performance, which is the best way to see the interiors.' },
        es: { name: 'Ópera de Sídney', description: 'Las «velas» blancas del arquitecto danés Jørn Utzon se inauguraron en 1973 y se convirtieron en símbolo del continente y patrimonio de la UNESCO. Dentro hay varias salas de ópera, ballet y conciertos, y el paseo que la rodea está abierto a todas horas.', tip: 'Reserva la visita guiada de una hora por las salas o una entrada a cualquier función: es la mejor forma de ver los interiores.' },
        de: { name: 'Sydney Opera House', description: 'Die weißen „Segel“ des dänischen Architekten Jørn Utzon wurden 1973 eröffnet und zum Symbol des Kontinents und zum UNESCO-Welterbe. Innen gibt es mehrere Säle für Oper, Ballett und Konzerte, die Promenade rundherum ist rund um die Uhr zugänglich.', tip: 'Buch die einstündige Führung durch die Säle oder ein Ticket für eine beliebige Vorstellung – so siehst du die Innenräume am besten.' },
        fr: { name: 'Opéra de Sydney', description: 'Les « voiles » blanches de l’architecte danois Jørn Utzon, inaugurées en 1973, sont devenues le symbole du continent et un site de l’UNESCO. On y trouve plusieurs salles d’opéra, de ballet et de concert, et la promenade qui l’entoure est ouverte jour et nuit.', tip: 'Réservez la visite guidée d’une heure ou un billet pour n’importe quel spectacle : c’est la meilleure façon de découvrir les intérieurs.' },
        it: { name: 'Opera House di Sydney', description: 'Le «vele» bianche dell’architetto danese Jørn Utzon, inaugurate nel 1973, sono diventate il simbolo del continente e patrimonio UNESCO. All’interno ci sono diverse sale per opera, balletto e concerti, mentre la passeggiata intorno è aperta giorno e notte.', tip: 'Prenota la visita guidata di un’ora o un biglietto per qualsiasi spettacolo: è il modo migliore per vedere gli interni.' },
      },
    },
    {
      id: 'sydney-harbour-bridge', city: 'sydney', category: 'attraction', lat: -33.8523, lng: 151.2108, image: '3HuDT9sC29U',
      rating: 4.8, reviews: 41200, tags: ['views', 'architecture', 'adventure'], price: { kind: 'free' }, hours: 'always',
      address: 'Sydney Harbour Bridge, Sydney NSW 2000',
      text: {
        ru: { name: 'Харбор-Бридж', description: 'Стальная арка 1932 года, которую сиднейцы ласково зовут «вешалкой», соединяет центр с Северным берегом. По пешеходной дорожке на восточной стороне можно бесплатно пройти над гаванью с видом на Оперу.', tip: 'Поднимитесь на смотровую площадку в южном пилоне или, для смелых, по самой арке с гидом BridgeClimb.' },
        en: { name: 'Sydney Harbour Bridge', description: 'This 1932 steel arch, nicknamed the Coathanger by locals, links the centre with the North Shore. The footpath on its eastern side lets you walk across the harbour for free with views of the Opera House.', tip: 'Climb to the lookout in the south-east pylon or, if you dare, scale the arch itself with a BridgeClimb guide.' },
        es: { name: 'Harbour Bridge', description: 'Este arco de acero de 1932, al que los vecinos llaman cariñosamente «la percha», une el centro con la orilla norte. Su acera del lado este permite cruzar la bahía gratis con vistas a la Ópera.', tip: 'Sube al mirador del pilón sureste o, si te atreves, escala el propio arco con un guía de BridgeClimb.' },
        de: { name: 'Sydney Harbour Bridge', description: 'Der Stahlbogen von 1932, von den Einheimischen liebevoll „Kleiderbügel“ genannt, verbindet das Zentrum mit der North Shore. Über den Fußweg auf der Ostseite überquerst du den Hafen kostenlos mit Blick aufs Opernhaus.', tip: 'Steig auf den Aussichtspunkt im südöstlichen Pylon oder, wenn du dich traust, mit einem BridgeClimb-Guide auf den Bogen selbst.' },
        fr: { name: 'Harbour Bridge', description: 'Cette arche d’acier de 1932, que les habitants surnomment affectueusement « le cintre », relie le centre à la rive nord. Son trottoir côté est permet de traverser la baie gratuitement avec vue sur l’Opéra.', tip: 'Montez au belvédère du pylône sud-est ou, si vous l’osez, gravissez l’arche elle-même avec un guide BridgeClimb.' },
        it: { name: 'Harbour Bridge', description: 'Questo arco d’acciaio del 1932, che i residenti chiamano affettuosamente «l’attaccapanni», collega il centro alla North Shore. Il marciapiede sul lato est permette di attraversare la baia gratis con vista sull’Opera House.', tip: 'Sali al belvedere del pilone sud-est o, se te la senti, scala l’arco stesso con una guida di BridgeClimb.' },
      },
    },
    {
      id: 'sydney-bondi-icebergs', city: 'sydney', category: 'attraction', spot: 'insta', lat: -33.8950, lng: 151.2745, image: 'OHlYxAWPlZM',
      rating: 4.8, reviews: 18700, tags: ['photo', 'beaches', 'surf'], price: { kind: 'free' }, hours: 'always',
      address: '1 Notts Avenue, Bondi Beach NSW 2026',
      people: ["kKMJimDBQBY","1lz_Kmqe-JY"],
      text: {
        ru: { name: 'Бассейн Bondi Icebergs', description: 'Морской бассейн с океанской водой, о бортик которого разбиваются волны, работает на южном краю пляжа Бонди с начала XX века. Отсюда же начинается прибрежная тропа до Куги.', tip: 'Снимайте сверху, с Нотс-авеню над бассейном, рано утром: волны перехлёстывают бортик, а солнце встаёт над океаном.' },
        en: { name: 'Bondi Icebergs pool', description: 'This ocean pool, where waves crash over the edge, has sat at the southern end of Bondi Beach since the early 20th century. The coastal walk to Coogee starts right here.', tip: 'Shoot from Notts Avenue above the pool early in the morning, when the waves spill over the edge and the sun rises over the ocean.' },
        es: { name: 'Piscina Bondi Icebergs', description: 'Esta piscina de agua de mar, cuyo borde baten las olas, ocupa el extremo sur de la playa de Bondi desde principios del siglo XX. Aquí mismo empieza el sendero costero hasta Coogee.', tip: 'Fotografíala desde Notts Avenue, sobre la piscina, temprano por la mañana: las olas saltan el borde y el sol sale sobre el océano.' },
        de: { name: 'Bondi Icebergs Pool', description: 'Das Meerwasserbecken, über dessen Rand die Wellen schlagen, liegt seit Anfang des 20. Jahrhunderts am Südende des Bondi Beach. Hier beginnt auch der Küstenweg nach Coogee.', tip: 'Fotografier frühmorgens von der Notts Avenue oberhalb des Beckens, wenn die Wellen über den Rand schwappen und die Sonne über dem Ozean aufgeht.' },
        fr: { name: 'Piscine Bondi Icebergs', description: 'Ce bassin d’eau de mer, dont les vagues franchissent le rebord, occupe l’extrémité sud de la plage de Bondi depuis le début du XXe siècle. C’est aussi le départ du sentier côtier vers Coogee.', tip: 'Photographiez-la depuis Notts Avenue, au-dessus du bassin, tôt le matin, quand les vagues débordent et que le soleil se lève sur l’océan.' },
        it: { name: 'Piscina Bondi Icebergs', description: 'Questa piscina di acqua di mare, sul cui bordo si infrangono le onde, si trova all’estremità sud di Bondi Beach dall’inizio del Novecento. Da qui parte anche il sentiero costiero per Coogee.', tip: 'Scatta da Notts Avenue, sopra la piscina, al mattino presto, quando le onde scavalcano il bordo e il sole sorge sull’oceano.' },
      },
    },
    {
      id: 'sydney-wendys-secret-garden', city: 'sydney', category: 'nature', spot: 'hidden', lat: -33.8436, lng: 151.2068, image: '5IHB76yDsQM',
      rating: 4.7, reviews: 3900, tags: ['gardens', 'views', 'romance'], price: { kind: 'free' }, hours: 'always',
      address: 'Lavender Street, Lavender Bay NSW 2060',
      text: {
        ru: { name: 'Тайный сад Венди', description: 'Пышный сад на склоне над заливом Лавендер-Бей, который Венди Уайтли, вдова художника Бретта Уайтли, превратила из заброшенного пустыря в уголок со скамейками, скульптурами и видом на мост.', tip: 'Доезжайте на поезде до станции Милсонс-Пойнт и идите вдоль железной дороги к Лавендер-стрит; вход — с лестницы у дома Уайтли.' },
        en: { name: 'Wendy’s Secret Garden', description: 'A lush hillside garden above Lavender Bay that Wendy Whiteley, widow of the artist Brett Whiteley, turned from a derelict railway lot into a haven of benches, sculptures and bridge views.', tip: 'Take the train to Milsons Point and walk along the railway to Lavender Street; the way in is down the steps by the Whiteley house.' },
        es: { name: 'Jardín secreto de Wendy', description: 'Un frondoso jardín en la ladera sobre Lavender Bay que Wendy Whiteley, viuda del pintor Brett Whiteley, transformó de un solar abandonado del ferrocarril en un rincón de bancos, esculturas y vistas al puente.', tip: 'Ve en tren hasta Milsons Point y camina junto a las vías hasta Lavender Street; se entra por las escaleras junto a la casa Whiteley.' },
        de: { name: 'Wendy’s Secret Garden', description: 'Ein üppiger Hanggarten über der Lavender Bay, den Wendy Whiteley, die Witwe des Malers Brett Whiteley, von einer verwahrlosten Bahnbrache in einen Ort mit Bänken, Skulpturen und Brückenblick verwandelt hat.', tip: 'Fahr mit dem Zug bis Milsons Point und geh an den Gleisen entlang zur Lavender Street; der Zugang führt über die Treppe am Whiteley-Haus.' },
        fr: { name: 'Jardin secret de Wendy', description: 'Un jardin luxuriant à flanc de colline au-dessus de Lavender Bay, que Wendy Whiteley, veuve du peintre Brett Whiteley, a transformé d’un terrain ferroviaire abandonné en un havre de bancs, de sculptures et de vues sur le pont.', tip: 'Prenez le train jusqu’à Milsons Point et longez la voie ferrée jusqu’à Lavender Street ; on entre par l’escalier près de la maison Whiteley.' },
        it: { name: 'Giardino segreto di Wendy', description: 'Un rigoglioso giardino in collina sopra Lavender Bay che Wendy Whiteley, vedova del pittore Brett Whiteley, ha trasformato da un terreno ferroviario abbandonato in un rifugio di panchine, sculture e vista sul ponte.', tip: 'Prendi il treno fino a Milsons Point e cammina lungo la ferrovia fino a Lavender Street; si entra dalla scalinata accanto alla casa Whiteley.' },
      },
    },
    {
      id: 'sydney-harrys-cafe-de-wheels', city: 'sydney', category: 'food', lat: -33.8695, lng: 151.2218, image: 'I2jJd5mN07I',
      rating: 4.3, reviews: 7600, tags: ['streetfood', 'food', 'history'], price: { kind: 'level', level: 1 }, hours: '08:30–01:00',
      address: 'Cowper Wharf Roadway, Woolloomooloo NSW 2011',
      text: {
        ru: { name: 'Harry’s Café de Wheels', description: 'Легендарный киоск с мясными пирогами на пристани Вуллумулу работает с 1938 года и кормил моряков, таксистов и мировых знаменитостей. Фирменное блюдо — «Тигр»: пирог с гороховым пюре, картофельным пюре и подливкой.', tip: 'Ешьте пирог у воды, с видом на военные корабли и старую пристань Finger Wharf, а оттуда пройдите пешком через Ботанический сад к Опере.' },
        en: { name: 'Harry’s Café de Wheels', description: 'This legendary pie cart on the Woolloomooloo wharf has been serving sailors, cabbies and world celebrities since 1938. The signature dish is the Tiger: a meat pie topped with mushy peas, mashed potato and gravy.', tip: 'Eat your pie by the water, looking out at the naval ships and the old Finger Wharf, then walk through the Botanic Garden to the Opera House.' },
        es: { name: 'Harry’s Café de Wheels', description: 'Este legendario puesto de pasteles de carne en el muelle de Woolloomooloo da de comer a marineros, taxistas y famosos de todo el mundo desde 1938. Su especialidad es el Tiger: pastel de carne con puré de guisantes, puré de patata y salsa.', tip: 'Cómete el pastel junto al agua, mirando los buques de la Armada y el viejo Finger Wharf, y luego cruza a pie el Jardín Botánico hasta la Ópera.' },
        de: { name: 'Harry’s Café de Wheels', description: 'Der legendäre Pie-Wagen am Kai von Woolloomooloo versorgt seit 1938 Seeleute, Taxifahrer und Weltstars. Spezialität ist der Tiger: eine Fleischpastete mit Erbsenbrei, Kartoffelpüree und Bratensoße.', tip: 'Iss deine Pastete am Wasser mit Blick auf die Marineschiffe und den alten Finger Wharf und spazier danach durch den Botanischen Garten zum Opernhaus.' },
        fr: { name: 'Harry’s Café de Wheels', description: 'Ce légendaire camion à tourtes du quai de Woolloomooloo régale marins, chauffeurs de taxi et célébrités du monde entier depuis 1938. Sa spécialité, le Tiger : une tourte à la viande garnie de purée de petits pois, de purée de pommes de terre et de sauce.', tip: 'Dégustez votre tourte au bord de l’eau, face aux navires de la marine et au vieux Finger Wharf, puis rejoignez l’Opéra à pied par le Jardin botanique.' },
        it: { name: 'Harry’s Café de Wheels', description: 'Questo leggendario chiosco di pasticci di carne sul molo di Woolloomooloo sfama marinai, tassisti e celebrità di tutto il mondo dal 1938. La specialità è il Tiger: pasticcio di carne con purè di piselli, purè di patate e sugo.', tip: 'Mangia il tuo pasticcio in riva all’acqua, davanti alle navi della Marina e al vecchio Finger Wharf, poi raggiungi l’Opera House a piedi attraverso l’Orto botanico.' },
      },
    },
    // Melbourne
    {
      id: 'melbourne-flinders-street-station', city: 'melbourne', category: 'attraction', lat: -37.8183, lng: 144.9671, image: 'DymAJNbEsu4',
      rating: 4.6, reviews: 23800, tags: ['architecture', 'history', 'city'], price: { kind: 'free' }, hours: 'always',
      address: 'Flinders Street, Melbourne VIC 3000',
      text: {
        ru: { name: 'Вокзал Флиндерс-стрит', description: 'Охристое здание вокзала 1910 года с медным куполом и рядом часов над входом — главный ориентир Мельбурна. Напротив раскинулась площадь Федерации, а через дорогу — собор Святого Павла.', tip: 'Фраза «встретимся под часами» здесь классика: часы над входом показывают время отправления ближайших поездов по линиям.' },
        en: { name: 'Flinders Street Station', description: 'The ochre 1910 station building with its copper dome and row of clocks over the entrance is Melbourne’s main landmark. Federation Square lies opposite and St Paul’s Cathedral across the road.', tip: '“Meet me under the clocks” is a local classic: the clocks above the entrance show the departure times of the next trains on each line.' },
        es: { name: 'Estación de Flinders Street', description: 'El edificio ocre de la estación, de 1910, con su cúpula de cobre y la fila de relojes sobre la entrada, es el gran emblema de Melbourne. Enfrente se abre Federation Square y al otro lado de la calle, la catedral de San Pablo.', tip: '«Nos vemos bajo los relojes» es un clásico local: los relojes de la entrada marcan la salida de los próximos trenes de cada línea.' },
        de: { name: 'Flinders Street Station', description: 'Das ockerfarbene Bahnhofsgebäude von 1910 mit Kupferkuppel und einer Reihe Uhren über dem Eingang ist Melbournes Wahrzeichen. Gegenüber liegt der Federation Square, auf der anderen Straßenseite die St Paul’s Cathedral.', tip: '„Treffen wir uns unter den Uhren“ ist hier ein Klassiker: Die Uhren über dem Eingang zeigen die Abfahrtszeiten der nächsten Züge jeder Linie.' },
        fr: { name: 'Gare de Flinders Street', description: 'Le bâtiment ocre de la gare, de 1910, avec son dôme de cuivre et sa rangée d’horloges au-dessus de l’entrée, est le grand repère de Melbourne. En face s’étend Federation Square, et de l’autre côté de la rue la cathédrale Saint-Paul.', tip: '« On se retrouve sous les horloges » est un classique local : les horloges de l’entrée indiquent l’heure de départ des prochains trains de chaque ligne.' },
        it: { name: 'Stazione di Flinders Street', description: 'L’edificio color ocra della stazione, del 1910, con la cupola di rame e la fila di orologi sopra l’ingresso, è il simbolo di Melbourne. Di fronte si apre Federation Square e dall’altra parte della strada la cattedrale di San Paolo.', tip: '«Ci vediamo sotto gli orologi» è un classico locale: gli orologi sopra l’ingresso indicano la partenza dei prossimi treni di ogni linea.' },
      },
    },
    {
      id: 'melbourne-royal-botanic-gardens', city: 'melbourne', category: 'nature', lat: -37.8304, lng: 144.9796, image: '_EjoYAfTIpM',
      rating: 4.8, reviews: 31500, tags: ['gardens', 'nature', 'lakes'], price: { kind: 'free' }, hours: '07:30–17:30',
      address: 'Birdwood Avenue, Melbourne VIC 3004',
      text: {
        ru: { name: 'Королевский ботанический сад', description: 'Почти 40 гектаров газонов, озёр и коллекций растений со всего мира в нескольких минутах от центра. Здесь гнездятся чёрные лебеди, а с холмов открываются виды на небоскрёбы.', tip: 'Пройдите вдоль Тан — беговой дорожки вокруг сада длиной 3,8 км, где тренируется половина города.' },
        en: { name: 'Royal Botanic Gardens Victoria', description: 'Almost 40 hectares of lawns, lakes and plant collections from around the world, minutes from the centre. Black swans nest here and the hills offer views of the skyscrapers.', tip: 'Walk the Tan, the 3.8 km running track around the gardens where half the city trains.' },
        es: { name: 'Real Jardín Botánico', description: 'Casi 40 hectáreas de praderas, lagos y colecciones de plantas de todo el mundo a pocos minutos del centro. Aquí anidan cisnes negros y desde las colinas se ven los rascacielos.', tip: 'Recorre el Tan, la pista de 3,8 km alrededor del jardín donde entrena media ciudad.' },
        de: { name: 'Königlicher Botanischer Garten', description: 'Fast 40 Hektar Rasenflächen, Seen und Pflanzensammlungen aus aller Welt, nur Minuten vom Zentrum entfernt. Hier nisten Trauerschwäne, und von den Hügeln blickst du auf die Wolkenkratzer.', tip: 'Lauf oder spazier über den Tan, die 3,8 km lange Laufstrecke rund um den Garten, auf der die halbe Stadt trainiert.' },
        fr: { name: 'Jardin botanique royal', description: 'Près de 40 hectares de pelouses, de lacs et de collections de plantes du monde entier, à quelques minutes du centre. Des cygnes noirs y nichent et les collines offrent des vues sur les gratte-ciel.', tip: 'Parcourez le Tan, la piste de 3,8 km autour du jardin où s’entraîne la moitié de la ville.' },
        it: { name: 'Giardino botanico reale', description: 'Quasi 40 ettari di prati, laghi e collezioni di piante da tutto il mondo, a pochi minuti dal centro. Qui nidificano i cigni neri e dalle colline si vedono i grattacieli.', tip: 'Percorri il Tan, la pista di 3,8 km intorno al giardino dove si allena mezza città.' },
      },
    },
    {
      id: 'melbourne-hosier-lane', city: 'melbourne', category: 'attraction', spot: 'insta', lat: -37.8166, lng: 144.9691, image: 'GDBlMe5z4hc',
      rating: 4.5, reviews: 15400, tags: ['art', 'photo', 'city'], price: { kind: 'free' }, hours: 'always',
      address: 'Hosier Lane, Melbourne VIC 3000',
      people: ["0sPIEU1nOP0"],
      text: {
        ru: { name: 'Хозиер-лейн', description: 'Мощёный переулок напротив площади Федерации от земли до крыш покрыт граффити и стрит-артом, которые обновляются почти каждую неделю. Это самая известная из мельбурнских улочек-лейнвеев.', tip: 'Приходите утром в будний день, пока нет толп, и снимайте вдоль переулка от Флиндерс-стрит — так стены с обеих сторон уходят в перспективу.' },
        en: { name: 'Hosier Lane', description: 'This cobbled lane opposite Federation Square is covered from ground to rooftop in graffiti and street art that changes almost every week. It is the most famous of Melbourne’s laneways.', tip: 'Come on a weekday morning before the crowds and shoot down the lane from Flinders Street, so the walls on both sides recede into perspective.' },
        es: { name: 'Hosier Lane', description: 'Este callejón empedrado frente a Federation Square está cubierto del suelo al tejado de grafitis y arte urbano que cambian casi cada semana. Es el más famoso de los callejones de Melbourne.', tip: 'Ven un día laborable por la mañana, antes de las multitudes, y fotografía el callejón desde Flinders Street para que las paredes se pierdan en perspectiva.' },
        de: { name: 'Hosier Lane', description: 'Die gepflasterte Gasse gegenüber dem Federation Square ist vom Boden bis zum Dach mit Graffiti und Street-Art bedeckt, die sich fast jede Woche ändern. Sie ist die berühmteste von Melbournes Laneways.', tip: 'Komm an einem Werktagmorgen vor dem Andrang und fotografier die Gasse von der Flinders Street aus, damit die Wände beidseitig in die Tiefe laufen.' },
        fr: { name: 'Hosier Lane', description: 'Cette ruelle pavée face à Federation Square est couverte du sol jusqu’aux toits de graffitis et de street art qui changent presque chaque semaine. C’est la plus célèbre des ruelles de Melbourne.', tip: 'Venez un matin de semaine avant la foule et photographiez la ruelle depuis Flinders Street, pour que les murs des deux côtés fuient en perspective.' },
        it: { name: 'Hosier Lane', description: 'Questo vicolo acciottolato di fronte a Federation Square è coperto da terra fino ai tetti di graffiti e street art che cambiano quasi ogni settimana. È il più famoso dei vicoli di Melbourne.', tip: 'Vieni la mattina di un giorno feriale, prima della folla, e scatta lungo il vicolo da Flinders Street, così i muri su entrambi i lati fuggono in prospettiva.' },
      },
    },
    {
      id: 'melbourne-abbotsford-convent', city: 'melbourne', category: 'attraction', spot: 'hidden', lat: -37.8023, lng: 145.0040, image: 'hSLon2ZFdP8',
      rating: 4.6, reviews: 4200, tags: ['history', 'art', 'gardens'], price: { kind: 'free' }, hours: '07:30–22:00',
      address: '1 St Heliers Street, Abbotsford VIC 3067',
      text: {
        ru: { name: 'Монастырь Эбботсфорд', description: 'Бывший женский монастырь XIX века на берегу реки Ярра превратился в арт-квартал со студиями художников, кафе, садами и выходными рынками. Туристы сюда почти не доезжают, а местные проводят здесь целые воскресенья.', tip: 'Доберитесь трамваем до Виктория-стрит или на поезде до станции Victoria Park и зайдите в соседнюю ферму Collingwood Children’s Farm.' },
        en: { name: 'Abbotsford Convent', description: 'This 19th-century former convent on the Yarra River has become an arts precinct of artists’ studios, cafés, gardens and weekend markets. Few tourists make it here, but locals spend whole Sundays on its grounds.', tip: 'Take the tram to Victoria Street or the train to Victoria Park station, and pop into the neighbouring Collingwood Children’s Farm.' },
        es: { name: 'Abbotsford Convent', description: 'Este antiguo convento del siglo XIX a orillas del río Yarra se ha convertido en un barrio artístico con estudios, cafés, jardines y mercados de fin de semana. Pocos turistas llegan, pero los vecinos pasan aquí domingos enteros.', tip: 'Ve en tranvía hasta Victoria Street o en tren hasta la estación Victoria Park, y asómate a la vecina granja Collingwood Children’s Farm.' },
        de: { name: 'Abbotsford Convent', description: 'Das ehemalige Kloster aus dem 19. Jahrhundert am Yarra River ist heute ein Kunstviertel mit Ateliers, Cafés, Gärten und Wochenendmärkten. Touristen verirren sich selten hierher, Einheimische verbringen hier ganze Sonntage.', tip: 'Fahr mit der Tram zur Victoria Street oder mit dem Zug bis Victoria Park und schau auch auf der benachbarten Collingwood Children’s Farm vorbei.' },
        fr: { name: 'Couvent d’Abbotsford', description: 'Cet ancien couvent du XIXe siècle au bord de la Yarra est devenu un quartier artistique d’ateliers, de cafés, de jardins et de marchés du week-end. Peu de touristes s’y aventurent, mais les habitants y passent des dimanches entiers.', tip: 'Venez en tram jusqu’à Victoria Street ou en train jusqu’à la gare de Victoria Park, et faites un tour à la ferme voisine Collingwood Children’s Farm.' },
        it: { name: 'Abbotsford Convent', description: 'Questo ex convento ottocentesco sul fiume Yarra è diventato un quartiere artistico con atelier, caffè, giardini e mercatini del fine settimana. Pochi turisti ci arrivano, ma i residenti ci passano intere domeniche.', tip: 'Arriva in tram fino a Victoria Street o in treno fino alla stazione Victoria Park, e fai un salto alla vicina fattoria Collingwood Children’s Farm.' },
      },
    },
    {
      id: 'melbourne-queen-victoria-market', city: 'melbourne', category: 'food', lat: -37.8076, lng: 144.9568, image: '7pq_V5KGHCc',
      rating: 4.5, reviews: 39800, tags: ['market', 'food', 'history'], price: { kind: 'level', level: 1 }, hours: '06:00–15:00',
      address: '513 Elizabeth Street, Melbourne VIC 3000',
      text: {
        ru: { name: 'Рынок королевы Виктории', description: 'Крупнейший открытый рынок южного полушария работает с 1878 года: мясной и рыбный павильоны, деликатесы, фермерские овощи и ряды сувениров. В летние среды по вечерам здесь проходит ночной рынок уличной еды.', tip: 'Рынок закрыт по понедельникам и средам; попробуйте горячие пончики с джемом из фургона American Doughnut Kitchen — он здесь с 1950 года.' },
        en: { name: 'Queen Victoria Market', description: 'The largest open-air market in the southern hemisphere has been trading since 1878, with meat and fish halls, a deli hall, farm produce and souvenir stalls. On summer Wednesday evenings it hosts a street-food night market.', tip: 'The market is closed on Mondays and Wednesdays; try the hot jam doughnuts from the American Doughnut Kitchen van, here since 1950.' },
        es: { name: 'Mercado Queen Victoria', description: 'El mayor mercado al aire libre del hemisferio sur funciona desde 1878, con naves de carne y pescado, delicatessen, productos de granja y puestos de recuerdos. Los miércoles de verano por la noche acoge un mercado nocturno de comida callejera.', tip: 'El mercado cierra los lunes y miércoles; prueba los donuts calientes rellenos de mermelada de la furgoneta American Doughnut Kitchen, aquí desde 1950.' },
        de: { name: 'Queen Victoria Market', description: 'Der größte Freiluftmarkt der Südhalbkugel besteht seit 1878 – mit Fleisch- und Fischhallen, Feinkost, Erzeugnissen von Bauernhöfen und Souvenirständen. An Sommer-Mittwochabenden findet hier ein Nachtmarkt mit Streetfood statt.', tip: 'Montags und mittwochs ist geschlossen; probier die heißen Marmeladen-Donuts vom Wagen der American Doughnut Kitchen, der seit 1950 hier steht.' },
        fr: { name: 'Queen Victoria Market', description: 'Le plus grand marché en plein air de l’hémisphère sud existe depuis 1878, avec halles à viande et à poisson, épiceries fines, produits fermiers et étals de souvenirs. Les mercredis soir d’été, il accueille un marché nocturne de cuisine de rue.', tip: 'Le marché est fermé le lundi et le mercredi ; goûtez les beignets chauds à la confiture du camion American Doughnut Kitchen, présent depuis 1950.' },
        it: { name: 'Queen Victoria Market', description: 'Il più grande mercato all’aperto dell’emisfero australe è attivo dal 1878, con padiglioni di carne e pesce, gastronomia, prodotti delle fattorie e bancarelle di souvenir. Il mercoledì sera d’estate ospita un mercato notturno di cibo di strada.', tip: 'Il mercato è chiuso il lunedì e il mercoledì; assaggia le ciambelle calde alla marmellata del furgone American Doughnut Kitchen, qui dal 1950.' },
      },
    },
    // Cairns
    {
      id: 'cairns-green-island', city: 'cairns', category: 'nature', lat: -16.7590, lng: 145.9720, image: '0pYgTNaYeeY',
      rating: 4.6, reviews: 12800, tags: ['diving', 'islands', 'beaches', 'unesco'], price: { kind: 'from', amount: 110, currency: 'AUD' }, hours: '08:30–17:30',
      address: 'Green Island National Park, QLD 4871',
      text: {
        ru: { name: 'Остров Грин и Большой Барьерный риф', description: 'Коралловый остров, окружённый рифом и тропическим лесом, в 45 минутах на катере от Кэрнса. Здесь можно поплавать с маской среди черепах и рыб, прокатиться на лодке со стеклянным дном и пройтись по лесной тропе.', tip: 'Берите самый ранний катер: до прибытия основных групп вода спокойнее, а черепахи чаще подплывают к пляжу.' },
        en: { name: 'Green Island and the Great Barrier Reef', description: 'A coral cay ringed by reef and rainforest, 45 minutes by boat from Cairns. You can snorkel among turtles and fish, ride a glass-bottom boat and walk the forest boardwalk.', tip: 'Take the earliest boat: before the main groups arrive the water is calmer and turtles come closer to the beach.' },
        es: { name: 'Isla Green y la Gran Barrera', description: 'Un cayo de coral rodeado de arrecife y selva tropical, a 45 minutos en barco de Cairns. Puedes hacer esnórquel entre tortugas y peces, subir a un barco con fondo de cristal y recorrer la pasarela del bosque.', tip: 'Coge el primer barco: antes de que lleguen los grupos el agua está más tranquila y las tortugas se acercan más a la playa.' },
        de: { name: 'Green Island und das Great Barrier Reef', description: 'Eine von Riff und Regenwald umgebene Koralleninsel, 45 Bootsminuten von Cairns entfernt. Hier schnorchelst du zwischen Schildkröten und Fischen, fährst im Glasbodenboot und spazierst über den Waldsteg.', tip: 'Nimm das erste Boot: Bevor die großen Gruppen ankommen, ist das Wasser ruhiger und die Schildkröten kommen näher an den Strand.' },
        fr: { name: 'Green Island et la Grande Barrière', description: 'Une caye corallienne entourée de récif et de forêt tropicale, à 45 minutes de bateau de Cairns. On y fait du snorkeling parmi les tortues et les poissons, on embarque sur un bateau à fond de verre et l’on suit la passerelle en forêt.', tip: 'Prenez le premier bateau : avant l’arrivée des groupes, l’eau est plus calme et les tortues s’approchent davantage de la plage.' },
        it: { name: 'Green Island e la Grande Barriera', description: 'Un isolotto corallino circondato da barriera e foresta pluviale, a 45 minuti di barca da Cairns. Puoi fare snorkeling tra tartarughe e pesci, salire su una barca dal fondo di vetro e percorrere la passerella nella foresta.', tip: 'Prendi la prima barca: prima dell’arrivo dei gruppi l’acqua è più calma e le tartarughe si avvicinano di più alla spiaggia.' },
      },
    },
    {
      id: 'cairns-skyrail-kuranda', city: 'cairns', category: 'attraction', lat: -16.8460, lng: 145.6930, image: 'X9TEqJWmM6Q',
      rating: 4.6, reviews: 10400, tags: ['jungle', 'views', 'unesco'], price: { kind: 'from', amount: 70, currency: 'AUD' }, hours: '09:00–17:15',
      address: 'Cnr Captain Cook Highway & Cairns Western Arterial Road, Smithfield QLD 4878',
      text: {
        ru: { name: 'Канатная дорога Skyrail в Куранду', description: 'Гондолы 7,5-километровой канатной дороги плывут над кронами влажного тропического леса из списка ЮНЕСКО к горной деревне Куранда с рынками и бабочковым садом. С промежуточных станций идут тропы к водопадам Бэррон.', tip: 'Туда поднимайтесь на Skyrail, а обратно спускайтесь на старинном поезде Kuranda Scenic Railway через ущелье — так увидите обе стороны гор.' },
        en: { name: 'Skyrail to Kuranda', description: 'The gondolas of this 7.5 km cableway glide over the canopy of UNESCO-listed rainforest to the mountain village of Kuranda, with its markets and butterfly sanctuary. Trails lead from the mid-stations to Barron Falls.', tip: 'Ride the Skyrail up and come back down on the historic Kuranda Scenic Railway through the gorge, so you see both sides of the range.' },
        es: { name: 'Skyrail a Kuranda', description: 'Las góndolas de este teleférico de 7,5 km planean sobre las copas de una selva tropical declarada patrimonio de la UNESCO hasta el pueblo de montaña de Kuranda, con sus mercados y su santuario de mariposas. Desde las estaciones intermedias salen senderos a las cataratas Barron.', tip: 'Sube en el Skyrail y baja en el histórico tren Kuranda Scenic Railway por el desfiladero: así verás las dos vertientes de la sierra.' },
        de: { name: 'Skyrail nach Kuranda', description: 'Die Gondeln der 7,5 km langen Seilbahn schweben über das Kronendach des UNESCO-geschützten Regenwalds zum Bergdorf Kuranda mit Märkten und Schmetterlingshaus. Von den Mittelstationen führen Pfade zu den Barron Falls.', tip: 'Fahr mit der Skyrail hinauf und mit der historischen Kuranda Scenic Railway durch die Schlucht zurück, dann siehst du beide Seiten des Gebirges.' },
        fr: { name: 'Skyrail jusqu’à Kuranda', description: 'Les télécabines de ce téléphérique de 7,5 km survolent la canopée d’une forêt tropicale classée à l’UNESCO jusqu’au village de montagne de Kuranda, ses marchés et son sanctuaire de papillons. Des sentiers partent des stations intermédiaires vers les chutes Barron.', tip: 'Montez en Skyrail et redescendez par le train historique Kuranda Scenic Railway à travers la gorge, pour voir les deux versants de la chaîne.' },
        it: { name: 'Skyrail per Kuranda', description: 'Le cabine di questa funivia di 7,5 km scivolano sopra le chiome di una foresta pluviale patrimonio UNESCO fino al villaggio di montagna di Kuranda, con i suoi mercati e il santuario delle farfalle. Dalle stazioni intermedie partono sentieri verso le cascate Barron.', tip: 'Sali con lo Skyrail e scendi con lo storico treno Kuranda Scenic Railway attraverso la gola, così vedi entrambi i versanti.' },
      },
    },
    {
      id: 'cairns-cape-tribulation', city: 'cairns', category: 'nature', spot: 'insta', lat: -16.0870, lng: 145.4650, image: 'X9TEqJWmM6Q',
      rating: 4.8, reviews: 6900, tags: ['jungle', 'beaches', 'photo', 'unesco'], price: { kind: 'free' }, hours: 'always',
      address: 'Cape Tribulation Road, Cape Tribulation QLD 4873',
      text: {
        ru: { name: 'Мыс Трибьюлейшн', description: 'Единственное место на Земле, где два объекта ЮНЕСКО — влажный лес Дейнтри и Большой Барьерный риф — встречаются на одном пляже. Мангры, пальмы и белый песок уходят дугой вдоль бирюзового моря.', tip: 'Поднимитесь по дощатой тропе Kulki Boardwalk к смотровой точке над пляжем утром, когда солнце освещает изгиб бухты.' },
        en: { name: 'Cape Tribulation', description: 'The only place on Earth where two UNESCO sites, the Daintree Rainforest and the Great Barrier Reef, meet on the same beach. Mangroves, palms and white sand curve along a turquoise sea.', tip: 'Follow the Kulki Boardwalk to the lookout above the beach in the morning, when the sun lights up the curve of the bay.' },
        es: { name: 'Cabo Tribulation', description: 'El único lugar de la Tierra donde dos sitios de la UNESCO, la selva de Daintree y la Gran Barrera de Coral, se encuentran en la misma playa. Manglares, palmeras y arena blanca se curvan junto a un mar turquesa.', tip: 'Sigue la pasarela Kulki Boardwalk hasta el mirador sobre la playa por la mañana, cuando el sol ilumina la curva de la bahía.' },
        de: { name: 'Cape Tribulation', description: 'Der einzige Ort der Erde, an dem zwei UNESCO-Stätten, der Daintree-Regenwald und das Great Barrier Reef, am selben Strand aufeinandertreffen. Mangroven, Palmen und weißer Sand ziehen sich im Bogen am türkisfarbenen Meer entlang.', tip: 'Geh morgens über den Kulki Boardwalk zum Aussichtspunkt über dem Strand, wenn die Sonne den Bogen der Bucht ausleuchtet.' },
        fr: { name: 'Cap Tribulation', description: 'Le seul endroit au monde où deux sites de l’UNESCO, la forêt de la Daintree et la Grande Barrière de corail, se rencontrent sur une même plage. Mangroves, palmiers et sable blanc s’incurvent le long d’une mer turquoise.', tip: 'Suivez le Kulki Boardwalk jusqu’au belvédère au-dessus de la plage le matin, quand le soleil éclaire la courbe de la baie.' },
        it: { name: 'Capo Tribulation', description: 'L’unico luogo sulla Terra in cui due siti UNESCO, la foresta del Daintree e la Grande Barriera Corallina, si incontrano sulla stessa spiaggia. Mangrovie, palme e sabbia bianca si piegano ad arco lungo un mare turchese.', tip: 'Segui la passerella Kulki Boardwalk fino al belvedere sopra la spiaggia al mattino, quando il sole illumina la curva della baia.' },
      },
    },
    {
      id: 'cairns-crystal-cascades', city: 'cairns', category: 'nature', spot: 'hidden', lat: -16.9580, lng: 145.6830, image: 'X9TEqJWmM6Q',
      rating: 4.6, reviews: 2900, tags: ['waterfalls', 'jungle', 'hiking'], price: { kind: 'free' }, hours: 'always',
      address: 'Redlynch Intake Road, Redlynch QLD 4870',
      text: {
        ru: { name: 'Кристал-Каскейдс', description: 'Цепочка прозрачных горных купален и небольших водопадов в джунглях в 20 минутах от центра Кэрнса. Здесь купаются местные, когда в море сезон медуз.', tip: 'Езжайте на машине или такси до конца Redlynch Intake Road и пройдите по бетонной тропе вдоль ручья; на камнях бывает скользко.' },
        en: { name: 'Crystal Cascades', description: 'A string of clear mountain swimming holes and small waterfalls in the jungle, 20 minutes from central Cairns. This is where locals swim when the sea is in stinger season.', tip: 'Drive or take a taxi to the end of Redlynch Intake Road and follow the paved path along the creek; the rocks can be slippery.' },
        es: { name: 'Crystal Cascades', description: 'Una cadena de pozas cristalinas y pequeñas cascadas en plena selva, a 20 minutos del centro de Cairns. Aquí se bañan los vecinos cuando el mar está en temporada de medusas.', tip: 'Ve en coche o taxi hasta el final de Redlynch Intake Road y sigue el camino pavimentado junto al arroyo; las rocas pueden resbalar.' },
        de: { name: 'Crystal Cascades', description: 'Eine Kette klarer Bergbadebecken und kleiner Wasserfälle im Dschungel, 20 Minuten vom Zentrum Cairns entfernt. Hier baden die Einheimischen, wenn im Meer Quallensaison ist.', tip: 'Fahr mit dem Auto oder Taxi bis zum Ende der Redlynch Intake Road und folge dem befestigten Weg am Bach; die Felsen können rutschig sein.' },
        fr: { name: 'Crystal Cascades', description: 'Un chapelet de vasques limpides et de petites cascades en pleine jungle, à 20 minutes du centre de Cairns. C’est là que les habitants se baignent quand la mer est en saison des méduses.', tip: 'Allez en voiture ou en taxi jusqu’au bout de Redlynch Intake Road et suivez le chemin bétonné le long du ruisseau ; les rochers peuvent être glissants.' },
        it: { name: 'Crystal Cascades', description: 'Una serie di limpide piscine naturali e piccole cascate nella giungla, a 20 minuti dal centro di Cairns. È qui che i residenti fanno il bagno quando il mare è in stagione di meduse.', tip: 'Arriva in auto o in taxi fino in fondo a Redlynch Intake Road e segui il sentiero lastricato lungo il torrente; le rocce possono essere scivolose.' },
      },
    },
    {
      id: 'cairns-rustys-market', city: 'cairns', category: 'food', lat: -16.9230, lng: 145.7745, image: '0pYgTNaYeeY',
      rating: 4.5, reviews: 5800, tags: ['market', 'food', 'streetfood'], price: { kind: 'level', level: 1 }, hours: '05:00–18:00',
      address: '57–89 Grafton Street, Cairns City QLD 4870',
      text: {
        ru: { name: 'Рынок Rusty’s', description: 'Крытый фермерский рынок в центре Кэрнса с конца 1970-х: тропические фрукты, которых не найти в супермаркетах, свежие соки, кофе с плато Атертон и азиатская уличная еда.', tip: 'Рынок работает только с пятницы по воскресенье; попробуйте манго, рамбутаны и мангустины и холодный кокос прямо у прилавка.' },
        en: { name: 'Rusty’s Market', description: 'A covered farmers’ market in central Cairns since the late 1970s, selling tropical fruit you won’t find in supermarkets, fresh juices, coffee from the Atherton Tablelands and Asian street food.', tip: 'The market opens only from Friday to Sunday; try mangoes, rambutans and mangosteens and a chilled coconut straight from the stall.' },
        es: { name: 'Mercado Rusty’s', description: 'Un mercado de agricultores cubierto en el centro de Cairns desde finales de los años setenta, con frutas tropicales que no encontrarás en el súper, zumos frescos, café de la meseta de Atherton y comida callejera asiática.', tip: 'Solo abre de viernes a domingo; prueba mangos, rambutanes y mangostanes y un coco frío en el mismo puesto.' },
        de: { name: 'Rusty’s Market', description: 'Ein überdachter Bauernmarkt im Zentrum von Cairns seit Ende der 1970er-Jahre mit tropischen Früchten, die es im Supermarkt nicht gibt, frischen Säften, Kaffee aus den Atherton Tablelands und asiatischem Streetfood.', tip: 'Geöffnet ist nur von Freitag bis Sonntag; probier Mangos, Rambutans und Mangostanen und eine gekühlte Kokosnuss direkt am Stand.' },
        fr: { name: 'Rusty’s Market', description: 'Un marché fermier couvert au centre de Cairns depuis la fin des années 1970, avec des fruits tropicaux introuvables en supermarché, des jus frais, du café des Atherton Tablelands et de la cuisine de rue asiatique.', tip: 'Le marché n’ouvre que du vendredi au dimanche ; goûtez mangues, ramboutans et mangoustans, et une noix de coco fraîche directement à l’étal.' },
        it: { name: 'Rusty’s Market', description: 'Un mercato contadino coperto nel centro di Cairns dalla fine degli anni Settanta, con frutta tropicale introvabile al supermercato, succhi freschi, caffè degli Atherton Tablelands e cibo di strada asiatico.', tip: 'Apre solo dal venerdì alla domenica; assaggia mango, rambutan e mangostani e un cocco fresco direttamente al banco.' },
      },
    },
    {
      "id": "sydney-chinatown-dixon-street",
      "city": "sydney",
      "category": "food",
      "lat": -33.8788,
      "lng": 151.2035,
      "image": "I2jJd5mN07I",
      "rating": 4.4,
      "reviews": 9800,
      "tags": [
        "streetfood",
        "food",
        "city"
      ],
      "price": {
        "kind": "level",
        "level": 1
      },
      "hours": "11:00–23:00",
      "address": "Dixon Street, Haymarket NSW 2000",
      "text": {
        "ru": {
          "name": "Китайский квартал на Диксон-стрит",
          "description": "Пешеходная улица Диксон-стрит под красными фонарями — сердце сиднейского Чайна-тауна: дим-самы, жареная утка, лапша ручной вытяжки и десерты из манго. Сюда приходят поесть и студенты, и местные семьи.",
          "tip": "Берите дим-самы на обед: в будни до 15:00 набор из корзинок стоит дешевле, чем вечером. Столик на вечер пятницы и субботы лучше занять до 18:30, а платить можно картой почти везде."
        },
        "en": {
          "name": "Chinatown on Dixon Street",
          "description": "The pedestrian Dixon Street under its red lanterns is the heart of Sydney’s Chinatown, packed with dim sum, roast duck, hand-pulled noodles and mango desserts. Students and local families eat here side by side.",
          "tip": "Go for dim sum at lunch, when weekday baskets cost less than at dinner. On Friday and Saturday nights grab a table before 18:30; almost everyone takes cards."
        },
        "es": {
          "name": "Chinatown de Dixon Street",
          "description": "La calle peatonal Dixon Street, bajo sus faroles rojos, es el corazón del Chinatown de Sídney: dim sum, pato asado, fideos estirados a mano y postres de mango. Estudiantes y familias del barrio comen aquí codo con codo.",
          "tip": "Ve a por dim sum a mediodía, cuando los cestos entre semana salen más baratos que por la noche. Los viernes y sábados busca mesa antes de las 18:30; casi todos aceptan tarjeta."
        },
        "de": {
          "name": "Chinatown an der Dixon Street",
          "description": "Die Fußgängerzone Dixon Street unter roten Laternen ist das Herz von Sydneys Chinatown: Dim Sum, Entenbraten, handgezogene Nudeln und Mangodesserts. Studierende und Familien aus der Gegend essen hier Seite an Seite.",
          "tip": "Komm mittags zum Dim Sum, da sind die Körbchen unter der Woche günstiger als abends. Freitag- und samstagabends sicherst du dir vor 18:30 einen Tisch; fast überall geht Kartenzahlung."
        },
        "fr": {
          "name": "Chinatown de Dixon Street",
          "description": "La rue piétonne Dixon Street, sous ses lanternes rouges, est le cœur du Chinatown de Sydney : dim sum, canard laqué, nouilles étirées à la main et desserts à la mangue. Étudiants et familles du quartier y mangent côte à côte.",
          "tip": "Venez pour les dim sum à midi, quand les paniers en semaine coûtent moins cher que le soir. Les vendredis et samedis, prenez une table avant 18 h 30 ; presque partout, la carte est acceptée."
        },
        "it": {
          "name": "Chinatown di Dixon Street",
          "description": "La via pedonale Dixon Street, sotto le lanterne rosse, è il cuore della Chinatown di Sydney: dim sum, anatra arrosto, spaghetti tirati a mano e dessert al mango. Studenti e famiglie del quartiere mangiano qui fianco a fianco.",
          "tip": "Vai a pranzo per i dim sum: in settimana i cestini costano meno che a cena. Il venerdì e il sabato sera prendi posto prima delle 18:30; quasi ovunque si paga con carta."
        }
      }
    },
    {
      "id": "sydney-quay-restaurant",
      "city": "sydney",
      "category": "food",
      "lat": -33.8587,
      "lng": 151.21,
      "image": "MVXxn9w4ofk",
      "rating": 4.7,
      "reviews": 2300,
      "tags": [
        "food",
        "luxury",
        "views"
      ],
      "price": {
        "kind": "level",
        "level": 3
      },
      "hours": "18:00–22:00",
      "address": "Overseas Passenger Terminal, 5 Hickson Road, The Rocks NSW 2000",
      "text": {
        "ru": {
          "name": "Quay",
          "description": "Один из самых известных ресторанов Австралии на втором этаже пассажирского терминала: из окон видны Оперный театр и мост Харбор-Бридж. Современная австралийская кухня и знаменитый десерт «Снежное яйцо».",
          "tip": "Столик бронируют за 2–3 недели, а к окну — ещё раньше. Закажите дегустационное меню на вечер, чтобы увидеть и закат, и огни моста; оплата картой, дресс-код — smart casual."
        },
        "en": {
          "name": "Quay",
          "description": "One of Australia’s best-known restaurants sits on the upper level of the Overseas Passenger Terminal, with the Opera House and Harbour Bridge outside the windows. Modern Australian cooking and the famous Snow Egg dessert.",
          "tip": "Book two to three weeks ahead, and earlier still for a window seat. Choose the tasting menu for dinner to catch both sunset and the lit-up bridge; pay by card, and dress smart casual."
        },
        "es": {
          "name": "Quay",
          "description": "Uno de los restaurantes más conocidos de Australia ocupa la planta alta de la terminal de pasajeros, con la Ópera y el Harbour Bridge al otro lado de las ventanas. Cocina australiana moderna y su célebre postre Snow Egg.",
          "tip": "Reserva con dos o tres semanas de antelación, y antes aún si quieres mesa junto a la ventana. Elige el menú degustación de la cena para ver el atardecer y el puente iluminado; se paga con tarjeta y el código es smart casual."
        },
        "de": {
          "name": "Quay",
          "description": "Eines der bekanntesten Restaurants Australiens liegt im Obergeschoss des Passagierterminals, mit Opernhaus und Harbour Bridge vor den Fenstern. Moderne australische Küche und das berühmte Dessert Snow Egg.",
          "tip": "Reserviere zwei bis drei Wochen im Voraus, für einen Fensterplatz noch früher. Nimm abends das Degustationsmenü, dann siehst du Sonnenuntergang und die beleuchtete Brücke; bezahlt wird mit Karte, Dresscode ist Smart Casual."
        },
        "fr": {
          "name": "Quay",
          "description": "L’un des restaurants les plus réputés d’Australie occupe l’étage du terminal des passagers, avec l’Opéra et le Harbour Bridge derrière les vitres. Cuisine australienne moderne et célèbre dessert Snow Egg.",
          "tip": "Réservez deux à trois semaines à l’avance, et plus tôt encore pour une table côté fenêtre. Prenez le menu dégustation du dîner pour voir le coucher de soleil et le pont illuminé ; paiement par carte, tenue smart casual."
        },
        "it": {
          "name": "Quay",
          "description": "Uno dei ristoranti più noti d’Australia occupa il piano alto del terminal passeggeri, con l’Opera House e l’Harbour Bridge oltre i vetri. Cucina australiana moderna e il celebre dessert Snow Egg.",
          "tip": "Prenota due o tre settimane prima, e ancora prima se vuoi un tavolo vicino alla finestra. Scegli il menù degustazione della cena per vedere il tramonto e il ponte illuminato; si paga con carta, dress code smart casual."
        }
      }
    },
    {
      "id": "sydney-doyles-watsons-bay",
      "city": "sydney",
      "category": "food",
      "lat": -33.8441,
      "lng": 151.2831,
      "image": "I2jJd5mN07I",
      "rating": 4.5,
      "reviews": 6400,
      "tags": [
        "food",
        "views",
        "history"
      ],
      "price": {
        "kind": "level",
        "level": 2
      },
      "hours": "11:30–21:30",
      "address": "11 Marine Parade, Watsons Bay NSW 2030",
      "text": {
        "ru": {
          "name": "Doyles on the Beach",
          "description": "Семейный рыбный ресторан в бухте Уотсонс-Бэй работает с 1885 года и подаёт рыбу с картошкой и свежие морепродукты на фоне панорамы города. Сюда добираются на пароме от Серкьюлар-Ки.",
          "tip": "Берите фиш-энд-чипс в киоске на пляже, если не хочется ждать столик, и ешьте на песке с видом на небоскрёбы. Паром до Уотсонс-Бэй идёт от Серкьюлар-Ки около 25 минут; платите картой."
        },
        "en": {
          "name": "Doyles on the Beach",
          "description": "This family-run seafood restaurant on Watsons Bay has been serving fish and chips and fresh seafood since 1885, with the city skyline across the water. Most visitors arrive by ferry from Circular Quay.",
          "tip": "If you don’t want to wait for a table, grab fish and chips from the takeaway kiosk and eat on the sand facing the skyline. The ferry from Circular Quay takes about 25 minutes; pay by card."
        },
        "es": {
          "name": "Doyles on the Beach",
          "description": "Este restaurante familiar de marisco en Watsons Bay sirve pescado frito con patatas y marisco fresco desde 1885, con el perfil de la ciudad al otro lado del agua. La mayoría llega en ferri desde Circular Quay.",
          "tip": "Si no quieres esperar mesa, pide el fish and chips en el quiosco para llevar y cómelo en la arena frente a los rascacielos. El ferri desde Circular Quay tarda unos 25 minutos; se paga con tarjeta."
        },
        "de": {
          "name": "Doyles on the Beach",
          "description": "Das familiengeführte Fischrestaurant in der Watsons Bay serviert seit 1885 Fish and Chips und frische Meeresfrüchte, mit der Skyline der Stadt gegenüber. Die meisten kommen mit der Fähre vom Circular Quay.",
          "tip": "Willst du nicht auf einen Tisch warten, hol dir Fish and Chips am Imbissfenster und iss auf dem Sand mit Blick auf die Skyline. Die Fähre ab Circular Quay braucht etwa 25 Minuten; bezahlt wird mit Karte."
        },
        "fr": {
          "name": "Doyles on the Beach",
          "description": "Ce restaurant de fruits de mer familial de Watsons Bay sert fish and chips et produits de la mer frais depuis 1885, avec la silhouette de la ville en face. La plupart des visiteurs arrivent en ferry depuis Circular Quay.",
          "tip": "Pour éviter l’attente, prenez un fish and chips au kiosque à emporter et mangez sur le sable face aux gratte-ciel. Le ferry depuis Circular Quay dure environ 25 minutes ; paiement par carte."
        },
        "it": {
          "name": "Doyles on the Beach",
          "description": "Questo ristorante di pesce a conduzione familiare a Watsons Bay serve fish and chips e frutti di mare freschi dal 1885, con lo skyline della città di fronte. La maggior parte dei visitatori arriva in traghetto da Circular Quay.",
          "tip": "Se non vuoi aspettare un tavolo, prendi il fish and chips al chiosco da asporto e mangia sulla sabbia davanti allo skyline. Il traghetto da Circular Quay impiega circa 25 minuti; si paga con carta."
        }
      }
    },
    {
      "id": "sydney-gelato-messina",
      "city": "sydney",
      "category": "food",
      "lat": -33.8786,
      "lng": 151.2201,
      "image": "I2jJd5mN07I",
      "rating": 4.6,
      "reviews": 5200,
      "tags": [
        "food",
        "streetfood"
      ],
      "price": {
        "kind": "from",
        "amount": 7,
        "currency": "AUD"
      },
      "hours": "12:00–23:00",
      "address": "241 Victoria Street, Darlinghurst NSW 2010",
      "text": {
        "ru": {
          "name": "Gelato Messina",
          "description": "Сиднейская сеть джелато выросла из крошечной лавки в Дарлингхерсте, где всё делают вручную: от пасты фисташек до карамели. Каждую неделю появляются новые «специальные» вкусы по мотивам десертов.",
          "tip": "Придите в будний вечер — по выходным очередь выстраивается на улицу. Спросите вкус недели, а за небольшую доплату возьмите стаканчик в хрустящей вафле; оплата картой."
        },
        "en": {
          "name": "Gelato Messina",
          "description": "Sydney’s gelato chain grew out of a tiny shop in Darlinghurst where everything is made by hand, from pistachio paste to caramel. New weekly specials are modelled on classic desserts.",
          "tip": "Come on a weekday evening, as the queue runs out the door at weekends. Ask for the flavour of the week and pay a little extra for a crisp waffle cone; card payments only need a tap."
        },
        "es": {
          "name": "Gelato Messina",
          "description": "La cadena de helados de Sídney nació en una pequeña tienda de Darlinghurst donde todo se hace a mano, desde la pasta de pistacho hasta el caramelo. Cada semana salen sabores especiales inspirados en postres clásicos.",
          "tip": "Ve entre semana por la tarde, porque los fines de semana la cola sale a la calle. Pregunta por el sabor de la semana y paga un poco más por el cucurucho crujiente; se paga con tarjeta."
        },
        "de": {
          "name": "Gelato Messina",
          "description": "Sydneys Eiskette ist aus einem winzigen Laden in Darlinghurst gewachsen, in dem alles von Hand entsteht, von der Pistazienpaste bis zum Karamell. Jede Woche gibt es neue Spezialsorten nach dem Vorbild klassischer Desserts.",
          "tip": "Komm an einem Wochentagabend, am Wochenende reicht die Schlange bis auf die Straße. Frag nach der Sorte der Woche und zahl etwas mehr für die knusprige Waffel; bezahlt wird mit Karte."
        },
        "fr": {
          "name": "Gelato Messina",
          "description": "La chaîne de glaces de Sydney est née d’une minuscule boutique de Darlinghurst où tout est fait à la main, de la pâte de pistache au caramel. Chaque semaine, de nouveaux parfums spéciaux s’inspirent de desserts classiques.",
          "tip": "Venez en soirée en semaine, car le week-end la file déborde sur le trottoir. Demandez le parfum de la semaine et ajoutez un peu pour le cornet croustillant ; paiement par carte."
        },
        "it": {
          "name": "Gelato Messina",
          "description": "La catena di gelati di Sydney è nata da un piccolo negozio di Darlinghurst dove tutto è fatto a mano, dalla pasta di pistacchio al caramello. Ogni settimana arrivano gusti speciali ispirati ai dolci classici.",
          "tip": "Vieni in una sera feriale: nel weekend la coda arriva fino in strada. Chiedi il gusto della settimana e paga un po’ di più per il cono croccante; si paga con carta."
        }
      }
    },
    {
      "id": "sydney-bondi-beach",
      "city": "sydney",
      "category": "nature",
      "spot": "insta",
      "lat": -33.8908,
      "lng": 151.2743,
      "image": "OHlYxAWPlZM",
      "rating": 4.7,
      "reviews": 41000,
      "tags": [
        "beaches",
        "surf",
        "photo"
      ],
      "price": {
        "kind": "free"
      },
      "hours": "always",
      "address": "Campbell Parade, Bondi Beach NSW 2026",
      "people": [
        "dRFCsd2Q3Sc"
      ],
      "text": {
        "ru": {
          "name": "Пляж Бонди",
          "description": "Самый известный городской пляж Австралии: золотой песок, сёрферы и спасатели в красно-жёлтой форме. Утром здесь тренируются и плавают, вечером собирается весь район.",
          "tip": "Снимайте на рассвете у кромки воды: встаньте боком к океану, пусть волна лижет ступни, и попросите снимать с низкой точки. Берите лёгкую одежду, а флаги спасателей — хороший фон для кадра."
        },
        "en": {
          "name": "Bondi Beach",
          "description": "Australia’s most famous city beach has golden sand, surfers and lifeguards in red and yellow. In the morning people train and swim; in the evening the whole neighbourhood gathers.",
          "tip": "Shoot at sunrise at the water’s edge: stand side-on to the ocean, let the wave touch your feet and ask your photographer to crouch low. Wear something light, and the lifeguard flags make a good backdrop."
        },
        "es": {
          "name": "Playa de Bondi",
          "description": "La playa urbana más famosa de Australia: arena dorada, surfistas y socorristas de rojo y amarillo. Por la mañana se entrena y se nada; al atardecer se reúne todo el barrio.",
          "tip": "Fotografía al amanecer en la orilla: ponte de lado al océano, deja que la ola te roce los pies y pide que disparen desde abajo. Lleva ropa ligera; las banderas de los socorristas hacen buen fondo."
        },
        "de": {
          "name": "Bondi Beach",
          "description": "Australiens berühmtester Stadtstrand mit goldenem Sand, Surfern und Rettungsschwimmern in Rot und Gelb. Morgens wird trainiert und geschwommen, abends trifft sich das ganze Viertel.",
          "tip": "Fotografier bei Sonnenaufgang am Wasserrand: Stell dich seitlich zum Ozean, lass die Welle deine Füße umspülen und bitte deinen Fotografen, tief in die Hocke zu gehen. Trag Leichtes; die Flaggen der Rettungsschwimmer geben einen guten Hintergrund."
        },
        "fr": {
          "name": "Plage de Bondi",
          "description": "La plage urbaine la plus célèbre d’Australie : sable doré, surfeurs et sauveteurs en rouge et jaune. Le matin, on s’entraîne et on nage ; le soir, tout le quartier s’y retrouve.",
          "tip": "Photographiez au lever du soleil au bord de l’eau : placez-vous de profil face à l’océan, laissez la vague effleurer vos pieds et demandez une prise de vue en contre-plongée. Portez des vêtements légers ; les drapeaux des sauveteurs font un joli fond."
        },
        "it": {
          "name": "Spiaggia di Bondi",
          "description": "La spiaggia cittadina più famosa d’Australia: sabbia dorata, surfisti e bagnini in rosso e giallo. Al mattino ci si allena e si nuota, la sera si ritrova tutto il quartiere.",
          "tip": "Scatta all’alba sul bagnasciuga: mettiti di profilo verso l’oceano, lascia che l’onda ti sfiori i piedi e chiedi di fotografare dal basso. Indossa qualcosa di leggero; le bandiere dei bagnini fanno un bello sfondo."
        }
      }
    },
    {
      "id": "sydney-harbour-ferry",
      "city": "sydney",
      "category": "attraction",
      "spot": "insta",
      "lat": -33.8614,
      "lng": 151.2112,
      "image": "MVXxn9w4ofk",
      "rating": 4.8,
      "reviews": 22500,
      "tags": [
        "cruise",
        "views",
        "photo"
      ],
      "price": {
        "kind": "from",
        "amount": 9,
        "currency": "AUD"
      },
      "hours": "06:00–23:30",
      "address": "Circular Quay wharves, Circular Quay NSW 2000",
      "people": [
        "sF--9wBTWYM"
      ],
      "text": {
        "ru": {
          "name": "Паром Серкьюлар-Ки — Мэнли",
          "description": "Обычный городской паром за цену билета на транспорт проходит мимо Оперного театра и под мостом Харбор-Бридж. Путь до Мэнли занимает около получаса.",
          "tip": "Садитесь на правый по ходу борт на верхней палубе, чтобы Оперный театр был за спиной. Самый мягкий свет — за час до заката; оплата картой Opal или бесконтактной банковской картой."
        },
        "en": {
          "name": "Circular Quay to Manly ferry",
          "description": "An ordinary commuter ferry for the price of a transport fare glides past the Opera House and under the Harbour Bridge. The trip to Manly takes about half an hour.",
          "tip": "Sit on the upper deck and stand at the rail as you pass the Opera House so it frames your shoulder. The softest light comes an hour before sunset; pay with an Opal card or a contactless bank card."
        },
        "es": {
          "name": "Ferri de Circular Quay a Manly",
          "description": "Un ferri de cercanías corriente, por el precio de un billete de transporte, pasa junto a la Ópera y bajo el Harbour Bridge. El trayecto a Manly dura unos treinta minutos.",
          "tip": "Sube a la cubierta superior y colócate en la barandilla al pasar frente a la Ópera para que quede a tu espalda. La luz más suave llega una hora antes del atardecer; paga con tarjeta Opal o sin contacto."
        },
        "de": {
          "name": "Fähre Circular Quay – Manly",
          "description": "Eine gewöhnliche Pendlerfähre zum Preis eines Fahrscheins gleitet am Opernhaus vorbei und unter der Harbour Bridge hindurch. Die Fahrt nach Manly dauert rund eine halbe Stunde.",
          "tip": "Geh aufs Oberdeck und stell dich ans Geländer, wenn ihr am Opernhaus vorbeifahrt, sodass es hinter deiner Schulter steht. Das weichste Licht gibt es eine Stunde vor Sonnenuntergang; bezahlt wird mit Opal-Karte oder kontaktloser Bankkarte."
        },
        "fr": {
          "name": "Ferry Circular Quay – Manly",
          "description": "Un simple ferry de banlieue, au prix d’un ticket de transport, passe devant l’Opéra et sous le Harbour Bridge. La traversée jusqu’à Manly dure environ une demi-heure.",
          "tip": "Montez sur le pont supérieur et placez-vous au bastingage quand vous longez l’Opéra pour l’avoir derrière l’épaule. La lumière la plus douce arrive une heure avant le coucher du soleil ; payez avec une carte Opal ou sans contact."
        },
        "it": {
          "name": "Traghetto Circular Quay – Manly",
          "description": "Un normale traghetto per pendolari, al prezzo di un biglietto dei mezzi, passa davanti all’Opera House e sotto l’Harbour Bridge. La traversata fino a Manly dura circa mezz’ora.",
          "tip": "Sali sul ponte superiore e mettiti alla ringhiera quando passi davanti all’Opera House, così resta dietro la tua spalla. La luce più morbida arriva un’ora prima del tramonto; paga con carta Opal o carta contactless."
        }
      }
    },
    {
      "id": "melbourne-pellegrinis-espresso-bar",
      "city": "melbourne",
      "category": "food",
      "lat": -37.812,
      "lng": 144.9695,
      "image": "7pq_V5KGHCc",
      "rating": 4.6,
      "reviews": 4300,
      "tags": [
        "food",
        "history"
      ],
      "price": {
        "kind": "level",
        "level": 1
      },
      "hours": "08:00–20:00",
      "address": "66 Bourke Street, Melbourne VIC 3000",
      "text": {
        "ru": {
          "name": "Pellegrini’s Espresso Bar",
          "description": "Итальянский эспрессо-бар с барными стульями и зеркальной стойкой работает на Бурк-стрит с 1954 года и почти не изменился. Здесь пьют кофе, едят домашние лазанью и болоньезе и пересказывают новости.",
          "tip": "Закажите лазанью или пасту дня и завершите всё кофе у стойки, где можно сидеть на старых табуретах. В обед бывает очередь, поэтому приходите к 11:30; оплата только картой или наличными без чаевых."
        },
        "en": {
          "name": "Pellegrini’s Espresso Bar",
          "description": "This Italian espresso bar with its mirrored counter and bar stools has stood on Bourke Street since 1954 and has barely changed. People come for coffee, home-style lasagne and bolognese, and a bit of gossip.",
          "tip": "Order the lasagne or the pasta of the day and finish with a coffee at the counter, on the old stools. There is a lunchtime queue, so arrive by 11:30; no tipping is expected."
        },
        "es": {
          "name": "Pellegrini’s Espresso Bar",
          "description": "Este bar de espresso italiano, con su mostrador de espejos y sus taburetes, está en Bourke Street desde 1954 y apenas ha cambiado. Se viene a tomar café, lasaña y boloñesa caseras y a charlar un rato.",
          "tip": "Pide la lasaña o la pasta del día y termina con un café en la barra, sentado en los viejos taburetes. A mediodía hay cola, así que llega a las 11:30; no se espera propina."
        },
        "de": {
          "name": "Pellegrini’s Espresso Bar",
          "description": "Die italienische Espressobar mit Spiegeltresen und Barhockern steht seit 1954 in der Bourke Street und hat sich kaum verändert. Man kommt für Kaffee, hausgemachte Lasagne und Bolognese und ein bisschen Tratsch.",
          "tip": "Bestell die Lasagne oder die Tagespasta und trink danach einen Kaffee am Tresen auf den alten Hockern. Mittags gibt es eine Schlange, komm also bis 11:30; Trinkgeld wird nicht erwartet."
        },
        "fr": {
          "name": "Pellegrini’s Espresso Bar",
          "description": "Ce bar à espresso italien, avec son comptoir à miroirs et ses tabourets, occupe Bourke Street depuis 1954 et a à peine changé. On y vient pour le café, la lasagne et la bolognaise maison, et pour bavarder.",
          "tip": "Commandez la lasagne ou les pâtes du jour et finissez par un café au comptoir, sur les vieux tabourets. Il y a de la queue à midi, arrivez donc avant 11 h 30 ; le pourboire n’est pas attendu."
        },
        "it": {
          "name": "Pellegrini’s Espresso Bar",
          "description": "Questo bar espresso italiano, con il bancone a specchi e gli sgabelli, è in Bourke Street dal 1954 e non è quasi cambiato. Ci si viene per il caffè, la lasagna e il ragù fatti in casa e due chiacchiere.",
          "tip": "Ordina la lasagna o la pasta del giorno e chiudi con un caffè al bancone, sui vecchi sgabelli. A pranzo c’è coda, quindi arriva entro le 11:30; la mancia non è attesa."
        }
      }
    },
    {
      "id": "melbourne-brunetti-lygon-street",
      "city": "melbourne",
      "category": "food",
      "lat": -37.7995,
      "lng": 144.9667,
      "image": "7pq_V5KGHCc",
      "rating": 4.4,
      "reviews": 7100,
      "tags": [
        "food",
        "streetfood"
      ],
      "price": {
        "kind": "level",
        "level": 2
      },
      "hours": "06:30–23:00",
      "address": "380 Lygon Street, Carlton VIC 3053",
      "text": {
        "ru": {
          "name": "Brunetti на Лайгон-стрит",
          "description": "Итальянская кондитерская-кафе в «Маленькой Италии» Карлтона с витринами пирожных, канноли, джелато и свежим эспрессо. Это любимое место местных для утреннего кофе и воскресных десертов.",
          "tip": "Возьмите канноли с рикоттой и капучино, а потом пройдитесь по Лайгон-стрит до сквера Ардсли. Лучше приходить до 10 утра или поздно вечером; можно платить картой."
        },
        "en": {
          "name": "Brunetti on Lygon Street",
          "description": "This Italian pastry café in Carlton’s Little Italy has cabinets of cakes, cannoli, gelato and fresh espresso. Locals favour it for morning coffee and Sunday sweets.",
          "tip": "Order a ricotta cannolo and a cappuccino, then stroll down Lygon Street. Come before 10:00 or late in the evening; cards are accepted."
        },
        "es": {
          "name": "Brunetti en Lygon Street",
          "description": "Esta pastelería-café italiana en la Pequeña Italia de Carlton tiene vitrinas con pasteles, cannoli, helado y espresso recién hecho. Los vecinos la prefieren para el café de la mañana y los dulces del domingo.",
          "tip": "Pide un cannolo de ricota y un capuchino y luego pasea por Lygon Street. Ve antes de las 10:00 o ya tarde por la noche; se acepta tarjeta."
        },
        "de": {
          "name": "Brunetti an der Lygon Street",
          "description": "Das italienische Konditorei-Café im Little Italy von Carlton hat Vitrinen voller Torten, Cannoli, Eis und frischem Espresso. Einheimische kommen für den Morgenkaffee und für Süßes am Sonntag.",
          "tip": "Bestell ein Cannolo mit Ricotta und einen Cappuccino und spazier dann die Lygon Street entlang. Komm vor 10:00 Uhr oder spät am Abend; Karten werden akzeptiert."
        },
        "fr": {
          "name": "Brunetti sur Lygon Street",
          "description": "Ce café-pâtisserie italien du Little Italy de Carlton propose des vitrines de gâteaux, de cannoli, de glaces et un espresso tout frais. Les habitants l’adorent pour le café du matin et les douceurs du dimanche.",
          "tip": "Commandez un cannolo à la ricotta et un cappuccino, puis flânez dans Lygon Street. Venez avant 10 h ou tard le soir ; les cartes sont acceptées."
        },
        "it": {
          "name": "Brunetti in Lygon Street",
          "description": "Questa pasticceria-caffè italiana nella Little Italy di Carlton ha vetrine di dolci, cannoli, gelato ed espresso fresco. È amata dai locali per il caffè del mattino e i dolci della domenica.",
          "tip": "Ordina un cannolo alla ricotta e un cappuccino, poi passeggia lungo Lygon Street. Vieni prima delle 10:00 o a sera tardi; si accettano carte."
        }
      }
    },
    {
      "id": "melbourne-degraves-street",
      "city": "melbourne",
      "category": "food",
      "lat": -37.8174,
      "lng": 144.9665,
      "image": "7pq_V5KGHCc",
      "rating": 4.5,
      "reviews": 8900,
      "tags": [
        "food",
        "city"
      ],
      "price": {
        "kind": "level",
        "level": 2
      },
      "hours": "07:00–22:00",
      "address": "Degraves Street, Melbourne VIC 3000",
      "text": {
        "ru": {
          "name": "Улица Дегрейвс",
          "description": "Узкий крытый переулок напротив вокзала Флиндерс-стрит стал символом кофейной культуры Мельбурна. Столики стоят прямо на брусчатке, а бариста варят флэт-уайт, который местные считают лучшим в стране.",
          "tip": "Закажите флэт-уайт и тост с авокадо и садитесь на уличные стулья; в 9 утра людно, зато после 14:00 спокойнее. Платите картой — наличные почти не нужны."
        },
        "en": {
          "name": "Degraves Street",
          "description": "This narrow laneway opposite Flinders Street Station has become a symbol of Melbourne’s coffee culture. Tables spill onto the cobbles, and baristas pour flat whites that locals rate among the best in the country.",
          "tip": "Order a flat white and avocado toast and take a seat at the street tables; it is busy at 9:00 but calmer after 14:00. Pay by card, as cash is hardly needed."
        },
        "es": {
          "name": "Degraves Street",
          "description": "Este estrecho callejón frente a la estación Flinders Street es un símbolo de la cultura cafetera de Melbourne. Las mesas se extienden sobre los adoquines y los baristas sirven flat whites que los locales cuentan entre los mejores del país.",
          "tip": "Pide un flat white y una tostada de aguacate y siéntate en las mesas de la calle; a las 9:00 hay mucha gente, pero después de las 14:00 se está más tranquilo. Paga con tarjeta, casi no hace falta efectivo."
        },
        "de": {
          "name": "Degraves Street",
          "description": "Die schmale Gasse gegenüber der Flinders Street Station ist zum Symbol der Kaffeekultur Melbournes geworden. Die Tische stehen auf dem Kopfsteinpflaster, und die Baristas servieren Flat Whites, die Einheimische zu den besten des Landes zählen.",
          "tip": "Bestell einen Flat White und Avocadotoast und setz dich an die Straßentische; um 9:00 ist es voll, nach 14:00 ruhiger. Bezahl mit Karte, Bargeld braucht man kaum."
        },
        "fr": {
          "name": "Degraves Street",
          "description": "Cette étroite ruelle en face de la gare de Flinders Street est devenue un symbole de la culture du café de Melbourne. Les tables débordent sur les pavés et les baristas servent des flat whites que les habitants comptent parmi les meilleurs du pays.",
          "tip": "Commandez un flat white et un toast à l’avocat et installez-vous aux tables de la rue ; il y a du monde à 9 h, mais c’est plus calme après 14 h. Payez par carte, les espèces servent à peine."
        },
        "it": {
          "name": "Degraves Street",
          "description": "Questo stretto vicolo di fronte alla stazione di Flinders Street è diventato il simbolo della cultura del caffè di Melbourne. I tavolini invadono i sampietrini e i barista preparano flat white che i locali considerano tra i migliori del Paese.",
          "tip": "Ordina un flat white e un toast con avocado e siediti ai tavoli in strada; alle 9:00 c’è folla, dopo le 14:00 è più tranquillo. Paga con carta, il contante serve a poco."
        }
      }
    },
    {
      "id": "melbourne-flower-drum",
      "city": "melbourne",
      "category": "food",
      "lat": -37.8114,
      "lng": 144.9707,
      "image": "7pq_V5KGHCc",
      "rating": 4.6,
      "reviews": 2600,
      "tags": [
        "food",
        "luxury"
      ],
      "price": {
        "kind": "level",
        "level": 3
      },
      "hours": "12:00–15:00, 18:00–23:00",
      "address": "17 Market Lane, Melbourne VIC 3000",
      "text": {
        "ru": {
          "name": "Flower Drum",
          "description": "Знаменитый кантонский ресторан в переулке Чайна-тауна работает с 1975 года и считается одним из лучших китайских в Австралии. Подают пекинскую утку, морепродукты и дим-самы в строгой атмосфере с белыми скатертями.",
          "tip": "Закажите утку заранее при бронировании столика и доверьтесь советам официантов по морепродуктам. Заведите бронь за неделю и приходите в smart casual; платить можно картой."
        },
        "en": {
          "name": "Flower Drum",
          "description": "This celebrated Cantonese restaurant in a Chinatown lane has been open since 1975 and is considered one of the best Chinese restaurants in Australia. It serves Peking duck, seafood and dim sum in a formal, white-tablecloth setting.",
          "tip": "Order the duck when you book and ask the waiters for seafood advice. Reserve a week ahead and dress smart casual; cards are accepted."
        },
        "es": {
          "name": "Flower Drum",
          "description": "Este célebre restaurante cantonés en un callejón del Chinatown abrió en 1975 y se considera uno de los mejores chinos de Australia. Sirve pato laqueado, marisco y dim sum en un ambiente formal con manteles blancos.",
          "tip": "Pide el pato al reservar y deja que los camareros te aconsejen sobre el marisco. Reserva con una semana de antelación y vístete smart casual; se acepta tarjeta."
        },
        "de": {
          "name": "Flower Drum",
          "description": "Das berühmte kantonesische Restaurant in einer Gasse des Chinatowns gibt es seit 1975 und gilt als eines der besten chinesischen Lokale Australiens. Es serviert Pekingente, Meeresfrüchte und Dim Sum in förmlichem Ambiente mit weißen Tischdecken.",
          "tip": "Bestell die Ente schon bei der Reservierung und lass dich bei den Meeresfrüchten vom Service beraten. Reserviere eine Woche im Voraus und kleide dich Smart Casual; Kartenzahlung ist möglich."
        },
        "fr": {
          "name": "Flower Drum",
          "description": "Ce célèbre restaurant cantonais d’une ruelle de Chinatown est ouvert depuis 1975 et passe pour l’un des meilleurs restaurants chinois d’Australie. On y sert canard laqué, fruits de mer et dim sum dans un cadre formel aux nappes blanches.",
          "tip": "Commandez le canard dès la réservation et demandez conseil au personnel pour les fruits de mer. Réservez une semaine à l’avance, tenue smart casual ; les cartes sont acceptées."
        },
        "it": {
          "name": "Flower Drum",
          "description": "Questo celebre ristorante cantonese in un vicolo di Chinatown è aperto dal 1975 ed è considerato uno dei migliori ristoranti cinesi d’Australia. Serve anatra alla pechinese, pesce e dim sum in un ambiente formale con tovaglie bianche.",
          "tip": "Ordina l’anatra al momento della prenotazione e fatti consigliare dai camerieri sul pesce. Prenota una settimana prima e vestiti smart casual; si accettano carte."
        }
      }
    },
    {
      "id": "melbourne-block-arcade",
      "city": "melbourne",
      "category": "attraction",
      "spot": "insta",
      "lat": -37.8157,
      "lng": 144.9638,
      "image": "DymAJNbEsu4",
      "rating": 4.7,
      "reviews": 9300,
      "tags": [
        "architecture",
        "history",
        "photo"
      ],
      "price": {
        "kind": "free"
      },
      "hours": "08:00–18:00",
      "address": "282 Collins Street, Melbourne VIC 3000",
      "text": {
        "ru": {
          "name": "Пассаж Block Arcade",
          "description": "Викторианский пассаж 1892 года с мозаичным полом, стеклянной крышей и витринами лавок. Внутри работает чайный салон Hopetoun Tea Rooms.",
          "tip": "Снимайте под центральным куполом: встаньте на мозаику и попросите фотографа присесть, чтобы в кадр вошёл стеклянный свод. Приходите около 9 утра, пока нет толпы; вход свободный."
        },
        "en": {
          "name": "Block Arcade",
          "description": "This Victorian arcade from 1892 has a mosaic floor, a glass roof and old shop windows. The Hopetoun Tea Rooms sit inside.",
          "tip": "Shoot under the central dome: stand on the mosaic and ask your photographer to crouch so the glass vault fills the frame. Go around 9:00, before the crowds; entry is free."
        },
        "es": {
          "name": "Block Arcade",
          "description": "Esta galería victoriana de 1892 tiene suelo de mosaico, techo de cristal y escaparates antiguos. Dentro se encuentra el salón de té Hopetoun Tea Rooms.",
          "tip": "Fotografía bajo la cúpula central: ponte sobre el mosaico y pide que disparen desde abajo para que la bóveda de cristal llene el encuadre. Ve hacia las 9:00, antes de las multitudes; la entrada es gratuita."
        },
        "de": {
          "name": "Block Arcade",
          "description": "Die viktorianische Passage von 1892 hat einen Mosaikboden, ein Glasdach und alte Schaufenster. Im Inneren liegt der Teesalon Hopetoun Tea Rooms.",
          "tip": "Fotografier unter der zentralen Kuppel: Stell dich auf das Mosaik und bitte deinen Fotografen, sich hinzuhocken, damit das Glasgewölbe ins Bild kommt. Geh gegen 9:00, vor dem Andrang; der Eintritt ist frei."
        },
        "fr": {
          "name": "Block Arcade",
          "description": "Cette galerie victorienne de 1892 possède un sol en mosaïque, une verrière et d’anciennes vitrines. Le salon de thé Hopetoun Tea Rooms s’y trouve.",
          "tip": "Photographiez sous la coupole centrale : placez-vous sur la mosaïque et demandez une prise de vue en contre-plongée pour que la voûte de verre remplisse le cadre. Venez vers 9 h, avant la foule ; l’entrée est gratuite."
        },
        "it": {
          "name": "Block Arcade",
          "description": "Questa galleria vittoriana del 1892 ha un pavimento a mosaico, un tetto di vetro e vecchie vetrine. All’interno si trova la sala da tè Hopetoun Tea Rooms.",
          "tip": "Scatta sotto la cupola centrale: mettiti sul mosaico e chiedi di fotografare dal basso così la volta di vetro riempie l’inquadratura. Vai verso le 9:00, prima della folla; l’ingresso è gratuito."
        }
      }
    },
    {
      "id": "melbourne-brighton-beach-boxes",
      "city": "melbourne",
      "category": "nature",
      "spot": "insta",
      "lat": -37.9139,
      "lng": 144.9863,
      "image": "GDBlMe5z4hc",
      "rating": 4.6,
      "reviews": 6100,
      "tags": [
        "beaches",
        "photo",
        "sunset"
      ],
      "price": {
        "kind": "free"
      },
      "hours": "always",
      "address": "Esplanade, Brighton VIC 3186",
      "text": {
        "ru": {
          "name": "Пляжные домики Брайтона",
          "description": "Ряд из 82 разноцветных деревянных кабинок для переодевания у залива Порт-Филлип — один из самых узнаваемых образов Мельбурна. Добраться можно на поезде и пешком от станции Брайтон-Бич.",
          "tip": "Лучше всего приходить на закате или на рассвете, когда небо розовеет за кабинками: встаньте перед одной из дверей и повернитесь в профиль. Домики частные, так что внутрь не заходите."
        },
        "en": {
          "name": "Brighton Beach Boxes",
          "description": "A row of 82 brightly painted wooden bathing boxes on Port Phillip Bay is one of Melbourne’s most recognisable images. You can reach it by train and a short walk from Brighton Beach station.",
          "tip": "Come at sunrise or sunset when the sky turns pink behind the huts: stand in front of one door, turned in profile. The boxes are private, so don’t step inside."
        },
        "es": {
          "name": "Casetas de playa de Brighton",
          "description": "Una hilera de 82 casetas de madera pintadas de colores en la bahía de Port Phillip es una de las imágenes más reconocibles de Melbourne. Se llega en tren y con un corto paseo desde la estación de Brighton Beach.",
          "tip": "Ve al amanecer o al atardecer, cuando el cielo se tiñe de rosa tras las casetas: ponte delante de una puerta, de perfil. Son privadas, así que no entres."
        },
        "de": {
          "name": "Brighton Beach Boxes",
          "description": "Eine Reihe von 82 bunt bemalten Badehäuschen aus Holz an der Port Phillip Bay gehört zu den bekanntesten Bildern Melbournes. Du erreichst sie mit dem Zug und einem kurzen Fußweg von der Station Brighton Beach.",
          "tip": "Komm bei Sonnenaufgang oder Sonnenuntergang, wenn sich der Himmel hinter den Hütten rosa färbt: Stell dich im Profil vor eine Tür. Die Boxen sind privat, geh also nicht hinein."
        },
        "fr": {
          "name": "Cabines de plage de Brighton",
          "description": "Une rangée de 82 cabines de bain en bois aux couleurs vives sur la baie de Port Phillip est l’une des images les plus reconnaissables de Melbourne. On y accède en train puis à pied depuis la gare de Brighton Beach.",
          "tip": "Venez au lever ou au coucher du soleil, quand le ciel rosit derrière les cabines : placez-vous devant une porte, de profil. Elles sont privées, n’y entrez pas."
        },
        "it": {
          "name": "Cabine di Brighton Beach",
          "description": "Una fila di 82 cabine in legno dai colori vivaci sulla baia di Port Phillip è una delle immagini più riconoscibili di Melbourne. Si raggiunge in treno e con una breve passeggiata dalla stazione di Brighton Beach.",
          "tip": "Vai all’alba o al tramonto, quando il cielo diventa rosa dietro le cabine: mettiti davanti a una porta, di profilo. Sono private, quindi non entrare."
        }
      }
    },
    {
      "id": "cairns-night-markets",
      "city": "cairns",
      "category": "food",
      "lat": -16.9215,
      "lng": 145.7766,
      "image": "0pYgTNaYeeY",
      "rating": 4.2,
      "reviews": 5800,
      "tags": [
        "market",
        "streetfood",
        "shopping"
      ],
      "price": {
        "kind": "level",
        "level": 1
      },
      "hours": "16:30–23:00",
      "address": "71–75 The Esplanade, Cairns QLD 4870",
      "text": {
        "ru": {
          "name": "Ночные рынки Кэрнса",
          "description": "Крытый рынок на набережной с едой разных стран, массажем и сувенирами. Здесь можно перекусить азиатскими блюдами, а потом купить подарки из австралийской шерсти и опала.",
          "tip": "Ужинайте у стоек в дальней части, где ценники ниже, чем у входа, и приходите после 18:00 — к этому времени открыто всё. Платить можно картой, но у ларьков с мелочью выручит наличность."
        },
        "en": {
          "name": "Cairns Night Markets",
          "description": "This covered market on the Esplanade has food from many countries, massage and souvenirs. You can eat Asian dishes and then buy gifts of Australian wool and opal.",
          "tip": "Eat at the stalls at the back, where prices are lower than by the entrance, and arrive after 18:00 when everything is open. Cards work, but cash helps at the smaller stalls."
        },
        "es": {
          "name": "Mercado nocturno de Cairns",
          "description": "Este mercado cubierto del paseo marítimo reúne comida de muchos países, masajes y recuerdos. Puedes cenar platos asiáticos y luego comprar regalos de lana y ópalo australianos.",
          "tip": "Cena en los puestos del fondo, donde los precios son más bajos que en la entrada, y llega después de las 18:00, cuando todo está abierto. Se acepta tarjeta, pero el efectivo ayuda en los puestos pequeños."
        },
        "de": {
          "name": "Cairns Night Markets",
          "description": "Der überdachte Markt an der Esplanade bietet Essen aus vielen Ländern, Massagen und Souvenirs. Du kannst asiatisch essen und danach Geschenke aus australischer Wolle und Opal kaufen.",
          "tip": "Iss an den Ständen im hinteren Bereich, dort sind die Preise niedriger als am Eingang, und komm nach 18:00, wenn alles geöffnet hat. Karten werden akzeptiert, an kleinen Ständen hilft Bargeld."
        },
        "fr": {
          "name": "Marché nocturne de Cairns",
          "description": "Ce marché couvert de l’Esplanade propose des plats de nombreux pays, des massages et des souvenirs. On peut y dîner asiatique puis acheter des cadeaux en laine et en opale d’Australie.",
          "tip": "Dînez aux stands du fond, où les prix sont plus bas qu’à l’entrée, et arrivez après 18 h quand tout est ouvert. Les cartes passent, mais les espèces aident aux petits stands."
        },
        "it": {
          "name": "Mercato notturno di Cairns",
          "description": "Questo mercato coperto sull’Esplanade offre cibo di molti Paesi, massaggi e souvenir. Puoi cenare con piatti asiatici e poi comprare regali di lana e opale australiani.",
          "tip": "Mangia alle bancarelle in fondo, dove i prezzi sono più bassi che all’ingresso, e arriva dopo le 18:00 quando tutto è aperto. Le carte funzionano, ma il contante aiuta alle bancarelle più piccole."
        }
      }
    },
    {
      "id": "cairns-prawn-star",
      "city": "cairns",
      "category": "food",
      "lat": -16.923,
      "lng": 145.7805,
      "image": "0pYgTNaYeeY",
      "rating": 4.5,
      "reviews": 4700,
      "tags": [
        "food",
        "views",
        "cruise"
      ],
      "price": {
        "kind": "level",
        "level": 2
      },
      "hours": "12:00–21:00",
      "address": "Marlin Marina, Pier Point Road, Cairns QLD 4870",
      "text": {
        "ru": {
          "name": "Prawn Star",
          "description": "Плавучий ресторан на старом креветочном траулере в марине Марлин: сырые и варёные креветки, лангусты и устрицы подают прямо на палубе. Вокруг на воде покачиваются яхты, а закат красит бухту.",
          "tip": "Закажите креветки с пивом на палубе на закате и просите отваренные, но ещё тёплые. Столики заканчиваются быстро, поэтому приходите к 17:00; платить можно картой."
        },
        "en": {
          "name": "Prawn Star",
          "description": "A floating restaurant on an old prawn trawler in Marlin Marina serves cooked prawns, lobsters and oysters right on deck. Yachts bob around and the sunset paints the harbour.",
          "tip": "Order prawns and a beer on deck at sunset and ask for the freshly cooked, still warm ones. Seats go quickly, so arrive by 17:00; cards are accepted."
        },
        "es": {
          "name": "Prawn Star",
          "description": "Un restaurante flotante en un viejo barco camaronero de la Marlin Marina sirve gambas cocidas, langostas y ostras sobre la cubierta. Los veleros se mecen alrededor y el atardecer tiñe el puerto.",
          "tip": "Pide gambas y una cerveza en cubierta al atardecer y que sean recién cocidas y aún tibias. Las mesas vuelan, así que llega a las 17:00; se acepta tarjeta."
        },
        "de": {
          "name": "Prawn Star",
          "description": "Ein schwimmendes Restaurant auf einem alten Garnelenkutter in der Marlin Marina serviert gekochte Garnelen, Langusten und Austern direkt an Deck. Ringsum schaukeln Yachten, und der Sonnenuntergang färbt den Hafen.",
          "tip": "Bestell Garnelen und ein Bier an Deck zum Sonnenuntergang und frag nach den frisch gekochten, noch warmen. Die Plätze sind schnell weg, komm also bis 17:00; Kartenzahlung ist möglich."
        },
        "fr": {
          "name": "Prawn Star",
          "description": "Un restaurant flottant sur un ancien chalutier à crevettes de la Marlin Marina sert crevettes cuites, langoustes et huîtres directement sur le pont. Les yachts se balancent autour et le coucher de soleil colore le port.",
          "tip": "Commandez des crevettes et une bière sur le pont au coucher du soleil et demandez-les fraîchement cuites, encore tièdes. Les places partent vite, arrivez avant 17 h ; paiement par carte."
        },
        "it": {
          "name": "Prawn Star",
          "description": "Un ristorante galleggiante su un vecchio peschereccio di gamberi alla Marlin Marina serve gamberi cotti, aragoste e ostriche direttamente sul ponte. Intorno ondeggiano gli yacht e il tramonto tinge il porto.",
          "tip": "Ordina gamberi e una birra sul ponte al tramonto e chiedi quelli appena cotti, ancora tiepidi. I posti finiscono presto, quindi arriva entro le 17:00; si paga con carta."
        }
      }
    },
    {
      "id": "cairns-ochre-restaurant",
      "city": "cairns",
      "category": "food",
      "lat": -16.9236,
      "lng": 145.7799,
      "image": "0pYgTNaYeeY",
      "rating": 4.5,
      "reviews": 2900,
      "tags": [
        "food",
        "luxury",
        "culture"
      ],
      "price": {
        "kind": "level",
        "level": 3
      },
      "hours": "12:00–14:30, 18:00–22:00",
      "address": "1 Pier Point Road, Cairns QLD 4870",
      "text": {
        "ru": {
          "name": "Ochre Restaurant",
          "description": "Ресторан у пристани известен тем, что готовит из местных продуктов: крокодил, кенгуру, барамунди и туземные травы и ягоды. Подают также дегустационное меню с вином.",
          "tip": "Возьмите дегустационное меню «Австралийские вкусы», чтобы попробовать понемногу крокодила, кенгуру и рыбу. Бронируйте столик на ужин заранее; оплата картой."
        },
        "en": {
          "name": "Ochre Restaurant",
          "description": "This restaurant by the marina is known for cooking with native ingredients: crocodile, kangaroo, barramundi and bush herbs and berries. It also offers a tasting menu with wine.",
          "tip": "Choose the tasting menu to sample a little crocodile, kangaroo and fish. Book dinner ahead; cards are accepted."
        },
        "es": {
          "name": "Ochre Restaurant",
          "description": "Este restaurante junto a la marina es conocido por cocinar con ingredientes autóctonos: cocodrilo, canguro, barramundi y hierbas y bayas del bush. También ofrece un menú degustación con vino.",
          "tip": "Elige el menú degustación para probar un poco de cocodrilo, canguro y pescado. Reserva la cena con antelación; se acepta tarjeta."
        },
        "de": {
          "name": "Ochre Restaurant",
          "description": "Das Restaurant an der Marina ist bekannt für die Küche mit einheimischen Zutaten: Krokodil, Känguru, Barramundi sowie Kräuter und Beeren aus dem Busch. Es gibt auch ein Degustationsmenü mit Wein.",
          "tip": "Nimm das Degustationsmenü, um ein bisschen Krokodil, Känguru und Fisch zu probieren. Reserviere das Abendessen im Voraus; Kartenzahlung ist möglich."
        },
        "fr": {
          "name": "Ochre Restaurant",
          "description": "Ce restaurant près de la marina est connu pour sa cuisine aux ingrédients locaux : crocodile, kangourou, barramundi, herbes et baies du bush. Il propose aussi un menu dégustation avec vin.",
          "tip": "Choisissez le menu dégustation pour goûter un peu de crocodile, de kangourou et de poisson. Réservez le dîner à l’avance ; paiement par carte."
        },
        "it": {
          "name": "Ochre Restaurant",
          "description": "Il ristorante vicino alla marina è noto per cucinare con ingredienti locali: coccodrillo, canguro, barramundi, erbe e bacche del bush. Offre anche un menù degustazione con vino.",
          "tip": "Scegli il menù degustazione per assaggiare un po’ di coccodrillo, canguro e pesce. Prenota la cena in anticipo; si accettano carte."
        }
      }
    },
    {
      "id": "cairns-esplanade-lagoon",
      "city": "cairns",
      "category": "nature",
      "spot": "insta",
      "lat": -16.9249,
      "lng": 145.7781,
      "image": "0pYgTNaYeeY",
      "rating": 4.6,
      "reviews": 12400,
      "tags": [
        "beaches",
        "photo",
        "sunset"
      ],
      "price": {
        "kind": "free"
      },
      "hours": "06:00–21:00",
      "address": "The Esplanade, Cairns QLD 4870",
      "text": {
        "ru": {
          "name": "Лагуна на набережной Кэрнса",
          "description": "Бесплатный бассейн с морской водой на берегу залива — место, где в Кэрнсе все купаются и загорают, потому что в море плавать мешают медузы и крокодилы. Вокруг пальмы, газоны и гриль-площадки.",
          "tip": "Снимайте вечером с западной стороны, когда за лагуной заходит солнце, а в воде отражаются пальмы. Возьмите панаму и крем, а на закате приходите на набережную."
        },
        "en": {
          "name": "Cairns Esplanade Lagoon",
          "description": "This free saltwater pool on the shore of the bay is where Cairns swims and sunbathes, because the sea itself has stingers and crocodiles. Palms, lawns and barbecue areas surround it.",
          "tip": "Shoot in the evening from the west side, when the sun sets behind the lagoon and the palms reflect in the water. Bring a sun hat and sunscreen, and come to the promenade at sunset."
        },
        "es": {
          "name": "Laguna del paseo marítimo de Cairns",
          "description": "Esta piscina de agua salada gratuita junto a la bahía es donde Cairns se baña y toma el sol, porque el mar tiene medusas y cocodrilos. La rodean palmeras, césped y zonas de barbacoa.",
          "tip": "Fotografía por la tarde desde el lado oeste, cuando el sol se pone tras la laguna y las palmeras se reflejan en el agua. Lleva sombrero y protector solar, y ven al paseo al atardecer."
        },
        "de": {
          "name": "Esplanade Lagoon Cairns",
          "description": "Das kostenlose Salzwasserbecken am Ufer der Bucht ist der Ort, an dem Cairns badet und sonnt, denn im Meer lauern Quallen und Krokodile. Palmen, Rasenflächen und Grillplätze säumen es.",
          "tip": "Fotografier abends von der Westseite, wenn die Sonne hinter der Lagune untergeht und sich die Palmen im Wasser spiegeln. Nimm Sonnenhut und Sonnencreme mit und komm zum Sonnenuntergang auf die Promenade."
        },
        "fr": {
          "name": "Lagon de l’Esplanade de Cairns",
          "description": "Cette piscine d’eau salée gratuite au bord de la baie est l’endroit où Cairns se baigne et bronze, car la mer abrite méduses et crocodiles. Palmiers, pelouses et zones de barbecue l’entourent.",
          "tip": "Photographiez en soirée depuis le côté ouest, quand le soleil se couche derrière le lagon et que les palmiers se reflètent dans l’eau. Prenez chapeau et crème solaire, et venez sur la promenade au coucher du soleil."
        },
        "it": {
          "name": "Laguna dell’Esplanade di Cairns",
          "description": "Questa piscina di acqua salata gratuita in riva alla baia è il posto dove Cairns nuota e prende il sole, perché in mare ci sono meduse e coccodrilli. È circondata da palme, prati e aree barbecue.",
          "tip": "Scatta di sera dal lato ovest, quando il sole tramonta dietro la laguna e le palme si specchiano nell’acqua. Porta cappello e crema solare, e vieni sulla passeggiata al tramonto."
        }
      }
    },
    {
      "id": "cairns-palm-cove-jetty",
      "city": "cairns",
      "category": "nature",
      "spot": "insta",
      "lat": -16.7475,
      "lng": 145.67,
      "image": "0pYgTNaYeeY",
      "rating": 4.7,
      "reviews": 5400,
      "tags": [
        "beaches",
        "photo",
        "sunset"
      ],
      "price": {
        "kind": "free"
      },
      "hours": "always",
      "address": "Williams Esplanade, Palm Cove QLD 4879",
      "text": {
        "ru": {
          "name": "Пирс Палм-Ков",
          "description": "Деревянный пирс в тихом курортном посёлке в 25 км к северу от Кэрнса, где по берегу растут кайепутовые деревья. На рассвете здесь пусто, а вода спокойна.",
          "tip": "Приходите в рассветные часы: встаньте в конце пирса и поверните лицо к горизонту, а фотографу скажите снимать сзади. Из-за медуз с ноября по май купайтесь только в защитном костюме."
        },
        "en": {
          "name": "Palm Cove jetty",
          "description": "A wooden jetty in a quiet resort village 25 km north of Cairns, lined by paperbark trees. At sunrise it is empty and the water is calm.",
          "tip": "Come at sunrise: stand at the end of the jetty facing the horizon and ask your photographer to shoot from behind. Because of jellyfish from November to May, swim only in a stinger suit."
        },
        "es": {
          "name": "Embarcadero de Palm Cove",
          "description": "Un embarcadero de madera en un tranquilo pueblo turístico a 25 km al norte de Cairns, bordeado de paperbarks. Al amanecer está vacío y el agua en calma.",
          "tip": "Ve al amanecer: colócate al final del embarcadero mirando al horizonte y pide que te fotografíen por detrás. Por las medusas, de noviembre a mayo báñate solo con traje protector."
        },
        "de": {
          "name": "Palm Cove Jetty",
          "description": "Ein Holzsteg in einem ruhigen Urlaubsort 25 km nördlich von Cairns, gesäumt von Papierrindenbäumen. Bei Sonnenaufgang ist er leer und das Wasser glatt.",
          "tip": "Komm zum Sonnenaufgang: Stell dich ans Ende des Stegs mit Blick zum Horizont und lass dich von hinten fotografieren. Wegen der Quallen badest du von November bis Mai nur im Schutzanzug."
        },
        "fr": {
          "name": "Jetée de Palm Cove",
          "description": "Une jetée en bois dans un village de villégiature tranquille à 25 km au nord de Cairns, bordée de mélaleuques. Au lever du soleil, elle est déserte et l’eau est calme.",
          "tip": "Venez au lever du soleil : placez-vous au bout de la jetée face à l’horizon et demandez une photo prise de dos. À cause des méduses, de novembre à mai, ne vous baignez qu’en combinaison anti-méduses."
        },
        "it": {
          "name": "Molo di Palm Cove",
          "description": "Un molo di legno in un tranquillo villaggio turistico a 25 km a nord di Cairns, fiancheggiato da alberi di paperbark. All’alba è vuoto e l’acqua è calma.",
          "tip": "Vieni all’alba: mettiti in fondo al molo di fronte all’orizzonte e fatti fotografare da dietro. A causa delle meduse, da novembre a maggio nuota solo con la muta anti-meduse."
        }
      }
    },
    {
      "id": "cairns-mossman-gorge",
      "city": "cairns",
      "category": "nature",
      "lat": -16.4707,
      "lng": 145.3314,
      "image": "X9TEqJWmM6Q",
      "rating": 4.7,
      "reviews": 7300,
      "tags": [
        "jungle",
        "nature",
        "culture",
        "unesco"
      ],
      "price": {
        "kind": "free"
      },
      "hours": "08:00–17:00",
      "address": "Mossman Gorge Road, Mossman Gorge QLD 4873",
      "text": {
        "ru": {
          "name": "Ущелье Моссман",
          "description": "Прозрачная река среди древнего тропического леса Дейнтри к северу от Кэрнса, на земле народа кукужаланджи. Тропы уходят к смотровым площадкам и к купальням под тенью деревьев.",
          "tip": "Оставьте машину у центра для посетителей и садитесь на шаттл до входа. Берите обувь без скольжения, плавки на тропу к реке и приходите утром, пока жарко не стало."
        },
        "en": {
          "name": "Mossman Gorge",
          "description": "A crystal-clear river runs through the ancient Daintree rainforest north of Cairns, on the land of the Kuku Yalanji people. Trails lead to lookouts and to shaded swimming spots.",
          "tip": "Leave the car at the visitor centre and take the shuttle to the entrance. Wear shoes with grip, bring swimwear for the river track, and come in the morning before it heats up."
        },
        "es": {
          "name": "Garganta de Mossman",
          "description": "Un río cristalino atraviesa la antigua selva de Daintree al norte de Cairns, en tierras del pueblo kuku yalanji. Los senderos llevan a miradores y a pozas con sombra para bañarse.",
          "tip": "Deja el coche en el centro de visitantes y toma el autobús lanzadera hasta la entrada. Lleva calzado con buen agarre, bañador para el sendero del río y ve por la mañana, antes del calor."
        },
        "de": {
          "name": "Mossman Gorge",
          "description": "Ein kristallklarer Fluss durchfließt den uralten Daintree-Regenwald nördlich von Cairns, auf dem Land der Kuku Yalanji. Wege führen zu Aussichtspunkten und zu schattigen Badestellen.",
          "tip": "Lass das Auto am Besucherzentrum und nimm den Shuttle zum Eingang. Trag Schuhe mit Profil, pack Badesachen für den Flussweg ein und komm morgens, bevor es heiß wird."
        },
        "fr": {
          "name": "Gorges de Mossman",
          "description": "Une rivière cristalline traverse l’antique forêt tropicale de Daintree au nord de Cairns, sur les terres du peuple Kuku Yalanji. Des sentiers mènent à des belvédères et à des coins de baignade ombragés.",
          "tip": "Laissez la voiture au centre d’accueil et prenez la navette jusqu’à l’entrée. Portez des chaussures antidérapantes, prenez un maillot pour le sentier de la rivière et venez le matin avant la chaleur."
        },
        "it": {
          "name": "Gola di Mossman",
          "description": "Un fiume cristallino attraversa l’antica foresta pluviale di Daintree a nord di Cairns, sulle terre del popolo Kuku Yalanji. I sentieri portano ai punti panoramici e a pozze ombreggiate dove fare il bagno.",
          "tip": "Lascia l’auto al centro visitatori e prendi la navetta fino all’ingresso. Porta scarpe con buona aderenza, il costume per il sentiero del fiume e vai al mattino, prima del caldo."
        }
      }
    },
  ],
};

export default pack;
