import type { CountryPack } from '../types';

const pack: CountryPack = {
  country: {
    code: 'PF',
    region: 'oceania',
    image: 'LXNSgedt1jM',
    theme: { accent: '#0e7490', accent2: '#f43f5e', motif: 'waves' },
    fromMoscow: { hours: 28, direct: false },
    visa: { regime: 'required', days: 90, cost: { kind: 'fixed', amount: 9, currency: 'EUR' }, plusFee: true, validity: 'sixMonths',
            docs: ['form', 'photo', 'insurance', 'booking', 'returnTicket', 'finance'], notes: [] },
    text: {
      ru: {
        tagline: 'Бирюзовые лагуны, бунгало над водой и цветы тиаре',
        description: 'Французская Полинезия — 118 островов посреди Тихого океана, рассыпанных на площади размером с Западную Европу. Здесь изумрудные вулканические пики поднимаются из лагун невероятных оттенков синего, а вас встречают ожерельем из цветов тиаре и словом «иа ора на».',
        howToGet: 'Это один из самых далёких уголков планеты: из Москвы обычно летят с пересадками в Азии до Токио, откуда Air Tahiti Nui выполняет прямые рейсы в Папеэте, — в пути около 28–35 часов; маршруты через Париж, Лос-Анджелес или Окленд требуют транзитных виз. Для въезда нужна отдельная краткосрочная виза во французские заморские территории — её оформляют через France-Visas и визовый центр. Между островами летает Air Tahiti, а с Таити на Муреа за полчаса доходят паромы Aremiti и Terevau.',
        tips: [
          'Российские Visa и Mastercard здесь не работают: везите евро — их легко обменять на тихоокеанские франки в аэропорту и банках, а на небольших островах держите запас наличных.',
          'Купите авиапропуск Air Tahiti Pass, если хотите посетить несколько островов, — это выгоднее, чем отдельные билеты.',
          'Полинезийцы приветливы и неторопливы: здоровайтесь словом «иа ора на», не торгуйтесь на рынках и не заходите на частную землю у марае без разрешения.',
        ],
        guide: {
          title: 'Французская Полинезия за 10 дней',
          sections: [
            { title: 'Когда ехать', body: 'Лучшее время — сухой сезон с мая по октябрь: около 25–28 °C, меньше влажности, спокойное море и ясные дни для полётов между островами. С ноября по апрель жарче и дождливее, бывают тропические штормы, но цены ниже. С июля по октябрь к островам приплывают горбатые киты, а в июле на Таити проходит фестиваль Хеива с танцами, гонками на пирогах и состязаниями по переноске фруктов.' },
            { title: 'Маршрут на 10 дней', body: 'Начните с двух дней на Таити: рынок Папеэте, ужин у фургончиков на площади Ваиэте, мыс Венеры и волна Теахупоо. Затем полчаса на пароме до Муреа на три дня: смотровая площадка Бельведер, бухта Кука, отмель со скатами и древние марае в долине Опунуху. Финал — перелёт на Бора-Бора на четыре-пять дней: бунгало над водой, тур по лагуне и закат на пляже Матира.' },
            { title: 'Что попробовать', body: 'Главное блюдо — пуассон крю: сырой тунец в лаймовом соке с кокосовым молоком и овощами. Попробуйте полинезийский ужин ахимаа, запечённый в земляной печи, хлебное дерево, фафару и местную ваниль с острова Таха. Вечером идите к фургончикам-рулоттам: там подают шаумэн, стейки и французские блинчики. Запивайте всё соками и ромом с завода Manutea на Муреа или пивом Hinano.' },
            { title: 'Деньги, связь и транспорт', body: 'Валюта — тихоокеанский франк (XPF), его курс привязан к евро. Российские карты не работают, поэтому везите евро наличными и меняйте их в банках и аэропорту Фааа. Цены высокие, особенно на маленьких островах, поэтому продукты дешевле покупать в супермаркетах. SIM-карты Vini продают в аэропорту. Между островами летают самолёты Air Tahiti, на Таити и Муреа удобно арендовать машину или скутер.' },
          ],
        },
      },
      en: {
        tagline: 'Turquoise lagoons, overwater bungalows and tiare flowers',
        description: 'French Polynesia is 118 islands in the middle of the Pacific, scattered over an area the size of Western Europe. Emerald volcanic peaks rise from lagoons in impossible shades of blue, and you are welcomed with a garland of tiare flowers and a warm “ia ora na”.',
        howToGet: 'This is one of the most remote corners of the planet: from Moscow you usually connect through Asia to Tokyo, where Air Tahiti Nui flies direct to Papeete, for about 28–35 hours in total; routes via Paris, Los Angeles or Auckland require transit visas. Entry requires a separate short-stay visa for the French overseas territories, applied for through France-Visas and a visa centre. Air Tahiti flies between the islands, and Aremiti and Terevau ferries cross from Tahiti to Moorea in half an hour.',
        tips: [
          'Russian-issued Visa and Mastercard cards don’t work here, so bring euros, which are easily changed into Pacific francs at the airport and banks, and keep a cash reserve on the smaller islands.',
          'Get an Air Tahiti Pass if you plan to visit several islands, as it works out cheaper than separate tickets.',
          'Polynesians are friendly and unhurried: greet people with “ia ora na”, don’t haggle at markets and don’t enter private land around a marae without permission.',
        ],
        guide: {
          title: 'French Polynesia in 10 days',
          sections: [
            { title: 'When to go', body: 'The best time is the dry season from May to October: around 25–28 °C, lower humidity, calm seas and clear days for flights between the islands. From November to April it is hotter and wetter, with occasional tropical storms, but prices are lower. Humpback whales visit from July to October, and in July Tahiti hosts the Heiva festival, with dancing, outrigger canoe races and fruit-carrying contests.' },
            { title: 'A 10-day route', body: 'Start with two days on Tahiti: Papeete market, dinner at the food trucks on Place Vaiete, Point Venus and the Teahupo’o wave. Then take the half-hour ferry to Moorea for three days of the Belvedere lookout, Cook’s Bay, the stingray sandbank and the ancient marae of the Opunohu valley. Finish with a flight to Bora Bora for four or five days of overwater bungalows, a lagoon tour and sunset on Matira Beach.' },
            { title: 'What to eat', body: 'The signature dish is poisson cru: raw tuna in lime juice with coconut milk and vegetables. Try a Polynesian ahima’a feast cooked in an earth oven, breadfruit, fafaru and the local vanilla from Taha’a. In the evening head to the roulottes, food trucks serving chow mein, steaks and French crêpes. Wash it all down with juices and rum from the Manutea distillery on Moorea or a Hinano beer.' },
            { title: 'Money, SIM cards and transport', body: 'The currency is the Pacific franc (XPF), pegged to the euro. Russian cards don’t work, so bring euros in cash and change them at banks and Faa’a Airport. Prices are high, especially on the small islands, so groceries are cheapest in supermarkets. Vini SIM cards are sold at the airport. Air Tahiti planes link the islands, and on Tahiti and Moorea renting a car or scooter is the easiest option.' },
          ],
        },
      },
      es: {
        tagline: 'Lagunas turquesa, bungalós sobre el agua y flores de tiaré',
        description: 'La Polinesia Francesa son 118 islas en medio del Pacífico, repartidas en un área del tamaño de Europa occidental. Picos volcánicos esmeralda surgen de lagunas de azules imposibles, y te reciben con un collar de flores de tiaré y un cálido «ia ora na».',
        howToGet: 'Es uno de los rincones más remotos del planeta: desde Moscú se suele volar con escalas en Asia hasta Tokio, desde donde Air Tahiti Nui vuela directo a Papeete, con unas 28–35 horas de viaje; las rutas por París, Los Ángeles o Auckland exigen visados de tránsito. Para entrar hace falta un visado de corta estancia específico para los territorios franceses de ultramar, que se tramita en France-Visas y un centro de visados. Air Tahiti vuela entre las islas, y los ferris Aremiti y Terevau cruzan de Tahití a Moorea en media hora.',
        tips: [
          'Las tarjetas Visa y Mastercard emitidas en Rusia no funcionan aquí: lleva euros, que se cambian fácilmente por francos del Pacífico en el aeropuerto y los bancos, y guarda reservas de efectivo en las islas pequeñas.',
          'Hazte con un Air Tahiti Pass si piensas visitar varias islas: sale más barato que los billetes sueltos.',
          'Los polinesios son amables y sin prisas: saluda con «ia ora na», no regatees en los mercados y no entres sin permiso en terrenos privados junto a un marae.',
        ],
        guide: {
          title: 'Polinesia Francesa en 10 días',
          sections: [
            { title: 'Cuándo ir', body: 'La mejor época es la estación seca, de mayo a octubre: unos 25–28 °C, menos humedad, mar en calma y días despejados para volar entre islas. De noviembre a abril hace más calor y llueve más, con alguna tormenta tropical, pero los precios bajan. Las ballenas jorobadas llegan de julio a octubre, y en julio Tahití celebra el festival Heiva, con danzas, regatas de piraguas y concursos de transporte de fruta.' },
            { title: 'Ruta de 10 días', body: 'Empieza con dos días en Tahití: el mercado de Papeete, cena en los food trucks de la plaza Vaiete, la Punta Venus y la ola de Teahupo’o. Después, media hora de ferri hasta Moorea para tres días con el mirador del Belvédère, la bahía de Cook, el banco de arena de las rayas y los antiguos marae del valle de Opunohu. Termina volando a Bora Bora para cuatro o cinco días de bungalós sobre el agua, excursión por la laguna y atardecer en la playa Matira.' },
            { title: 'Qué probar', body: 'El plato estrella es el poisson cru: atún crudo en zumo de lima con leche de coco y verduras. Prueba un banquete polinesio ahima’a cocinado en un horno de tierra, el fruto del pan, el fafaru y la vainilla local de Taha’a. Por la noche ve a las roulottes, food trucks que sirven chow mein, filetes y crepes francesas. Acompáñalo todo con zumos y ron de la destilería Manutea de Moorea o con una cerveza Hinano.' },
            { title: 'Dinero, móvil y transporte', body: 'La moneda es el franco del Pacífico (XPF), vinculado al euro. Las tarjetas rusas no funcionan, así que lleva euros en efectivo y cámbialos en bancos y en el aeropuerto de Faa’a. Los precios son altos, sobre todo en las islas pequeñas, por lo que la comida sale más barata en los supermercados. Las SIM de Vini se venden en el aeropuerto. Los aviones de Air Tahiti unen las islas, y en Tahití y Moorea lo más cómodo es alquilar coche o scooter.' },
          ],
        },
      },
      de: {
        tagline: 'Türkise Lagunen, Overwater-Bungalows und Tiare-Blüten',
        description: 'Französisch-Polynesien besteht aus 118 Inseln mitten im Pazifik, verstreut über eine Fläche so groß wie Westeuropa. Smaragdgrüne Vulkangipfel ragen aus Lagunen in unglaublichen Blautönen, und man empfängt dich mit einem Kranz aus Tiare-Blüten und einem herzlichen „Ia ora na“.',
        howToGet: 'Dies ist einer der entlegensten Orte der Erde: Ab Moskau fliegst du meist mit Umstiegen in Asien nach Tokio, von wo Air Tahiti Nui direkt nach Papeete fliegt – insgesamt etwa 28–35 Stunden; Routen über Paris, Los Angeles oder Auckland erfordern Transitvisa. Für die Einreise brauchst du ein eigenes Kurzzeitvisum für die französischen Überseegebiete, das über France-Visas und ein Visazentrum beantragt wird. Air Tahiti fliegt zwischen den Inseln, die Fähren von Aremiti und Terevau bringen dich in einer halben Stunde von Tahiti nach Moorea.',
        tips: [
          'In Russland ausgegebene Visa- und Mastercard-Karten funktionieren hier nicht: Nimm Euro mit, die du am Flughafen und bei Banken leicht in Pazifik-Franc tauschst, und halte auf kleinen Inseln Bargeld bereit.',
          'Besorg dir einen Air Tahiti Pass, wenn du mehrere Inseln besuchen willst – das ist günstiger als Einzeltickets.',
          'Polynesier sind freundlich und gelassen: Grüß mit „Ia ora na“, feilsch nicht auf Märkten und betritt Privatland rund um ein Marae nicht ohne Erlaubnis.',
        ],
        guide: {
          title: 'Französisch-Polynesien in 10 Tagen',
          sections: [
            { title: 'Reisezeit', body: 'Am besten reist du in der Trockenzeit von Mai bis Oktober: etwa 25–28 °C, weniger Feuchtigkeit, ruhige See und klare Tage für Flüge zwischen den Inseln. Von November bis April ist es heißer und regnerischer, gelegentlich ziehen Tropenstürme auf, dafür sind die Preise niedriger. Von Juli bis Oktober kommen Buckelwale, und im Juli feiert Tahiti das Heiva-Festival mit Tänzen, Auslegerkanu-Rennen und Früchtetragewettbewerben.' },
            { title: 'Route für 10 Tage', body: 'Beginne mit zwei Tagen auf Tahiti: Markt von Papeete, Abendessen an den Foodtrucks auf der Place Vaiete, Point Venus und die Welle von Teahupo’o. Dann bringt dich die Fähre in einer halben Stunde nach Moorea – drei Tage mit Belvedere-Aussichtspunkt, Cook’s Bay, der Rochen-Sandbank und den alten Marae im Opunohu-Tal. Zum Schluss fliegst du für vier bis fünf Tage nach Bora Bora: Overwater-Bungalow, Lagunentour und Sonnenuntergang am Matira Beach.' },
            { title: 'Was du probieren solltest', body: 'Das typische Gericht ist Poisson cru: roher Thunfisch in Limettensaft mit Kokosmilch und Gemüse. Probier ein polynesisches Ahima’a-Festmahl aus dem Erdofen, Brotfrucht, Fafaru und die Vanille von Taha’a. Abends geht es zu den Roulottes, Foodtrucks mit Chow Mein, Steaks und französischen Crêpes. Dazu passen Säfte und Rum der Manutea-Destillerie auf Moorea oder ein Hinano-Bier.' },
            { title: 'Geld, Handy und Verkehr', body: 'Die Währung ist der Pazifik-Franc (XPF), der an den Euro gekoppelt ist. Russische Karten funktionieren nicht, also nimm Euro in bar mit und tausch sie bei Banken und am Flughafen Faa’a. Die Preise sind hoch, besonders auf kleinen Inseln, Lebensmittel kaufst du am günstigsten im Supermarkt. SIM-Karten von Vini gibt es am Flughafen. Flugzeuge von Air Tahiti verbinden die Inseln, auf Tahiti und Moorea mietest du am besten Auto oder Roller.' },
          ],
        },
      },
      fr: {
        tagline: 'Lagons turquoise, bungalows sur pilotis et fleurs de tiaré',
        description: 'La Polynésie française, ce sont 118 îles au milieu du Pacifique, dispersées sur une surface grande comme l’Europe de l’Ouest. Des pitons volcaniques émeraude surgissent de lagons aux bleus irréels, et l’on vous accueille avec un collier de fleurs de tiaré et un chaleureux « ia ora na ».',
        howToGet: 'C’est l’un des coins les plus reculés de la planète : depuis Moscou, on passe généralement par l’Asie jusqu’à Tokyo, d’où Air Tahiti Nui dessert Papeete sans escale, soit 28 à 35 heures de voyage ; les itinéraires via Paris, Los Angeles ou Auckland exigent des visas de transit. L’entrée nécessite un visa de court séjour spécifique aux collectivités françaises d’outre-mer, à demander sur France-Visas et en centre de visas. Air Tahiti relie les îles, et les ferrys Aremiti et Terevau rallient Moorea depuis Tahiti en une demi-heure.',
        tips: [
          'Les cartes Visa et Mastercard émises en Russie ne fonctionnent pas ici : emportez des euros, faciles à changer en francs Pacifique à l’aéroport et dans les banques, et gardez une réserve d’espèces dans les petites îles.',
          'Prenez un Air Tahiti Pass si vous comptez visiter plusieurs îles : il revient moins cher que des billets séparés.',
          'Les Polynésiens sont accueillants et jamais pressés : saluez d’un « ia ora na », ne marchandez pas sur les marchés et n’entrez pas sans autorisation sur les terres privées autour d’un marae.',
        ],
        guide: {
          title: 'La Polynésie française en 10 jours',
          sections: [
            { title: 'Quand partir', body: 'La meilleure période est la saison sèche, de mai à octobre : 25 à 28 °C, moins d’humidité, une mer calme et un ciel clair pour les vols entre les îles. De novembre à avril, il fait plus chaud et plus humide, avec parfois des dépressions tropicales, mais les prix baissent. Les baleines à bosse arrivent de juillet à octobre, et en juillet Tahiti célèbre le Heiva, avec danses, courses de pirogues et concours de porteurs de fruits.' },
            { title: 'Itinéraire de 10 jours', body: 'Commencez par deux jours à Tahiti : le marché de Papeete, un dîner aux roulottes de la place Vaiete, la pointe Vénus et la vague de Teahupo’o. Prenez ensuite le ferry pour Moorea, à une demi-heure, pour trois jours entre le belvédère, la baie de Cook, le banc de sable des raies et les anciens marae de la vallée d’Opunohu. Terminez par un vol pour Bora Bora : quatre ou cinq jours de bungalow sur pilotis, de tour du lagon et de coucher de soleil sur la plage de Matira.' },
            { title: 'Que goûter', body: 'Le plat emblématique est le poisson cru : thon cru au citron vert, lait de coco et légumes. Goûtez un ahima’a polynésien cuit au four enterré, le uru, le fafaru et la vanille locale de Taha’a. Le soir, filez aux roulottes, ces camions-restaurants qui servent chow mein, steaks et crêpes françaises. Accompagnez le tout des jus et du rhum de la distillerie Manutea à Moorea ou d’une bière Hinano.' },
            { title: 'Argent, téléphone et transports', body: 'La monnaie est le franc Pacifique (XPF), arrimé à l’euro. Les cartes russes ne fonctionnent pas : emportez des euros en espèces et changez-les dans les banques et à l’aéroport de Faa’a. Les prix sont élevés, surtout dans les petites îles, et les courses reviennent moins cher au supermarché. Les cartes SIM Vini se vendent à l’aéroport. Les avions d’Air Tahiti relient les îles, et à Tahiti comme à Moorea le plus simple est de louer une voiture ou un scooter.' },
          ],
        },
      },
      it: {
        tagline: 'Lagune turchesi, bungalow sull’acqua e fiori di tiaré',
        description: 'La Polinesia francese conta 118 isole in mezzo al Pacifico, sparse su un’area grande come l’Europa occidentale. Picchi vulcanici color smeraldo emergono da lagune di azzurri impossibili, e ti accolgono con una ghirlanda di fiori di tiaré e un caloroso «ia ora na».',
        howToGet: 'È uno degli angoli più remoti del pianeta: da Mosca di solito si vola con scali in Asia fino a Tokyo, da dove Air Tahiti Nui vola diretta a Papeete, per circa 28–35 ore di viaggio; le rotte via Parigi, Los Angeles o Auckland richiedono visti di transito. Per entrare serve un visto di breve durata specifico per i territori francesi d’oltremare, da richiedere tramite France-Visas e un centro visti. Air Tahiti vola tra le isole, e i traghetti Aremiti e Terevau collegano Tahiti a Moorea in mezz’ora.',
        tips: [
          'Le carte Visa e Mastercard emesse in Russia qui non funzionano: porta euro, che si cambiano facilmente in franchi del Pacifico in aeroporto e in banca, e tieni una riserva di contanti sulle isole più piccole.',
          'Prendi un Air Tahiti Pass se vuoi visitare più isole: conviene rispetto ai biglietti singoli.',
          'I polinesiani sono cordiali e mai di fretta: saluta con «ia ora na», non contrattare ai mercati e non entrare senza permesso nei terreni privati intorno a un marae.',
        ],
        guide: {
          title: 'La Polinesia francese in 10 giorni',
          sections: [
            { title: 'Quando andare', body: 'Il periodo migliore è la stagione secca, da maggio a ottobre: circa 25–28 °C, meno umidità, mare calmo e giornate limpide per i voli tra le isole. Da novembre ad aprile fa più caldo e piove di più, con qualche tempesta tropicale, ma i prezzi scendono. Da luglio a ottobre arrivano le megattere, e a luglio Tahiti celebra il festival Heiva, con danze, regate di piroghe e gare di trasporto della frutta.' },
            { title: 'Itinerario di 10 giorni', body: 'Inizia con due giorni a Tahiti: il mercato di Papeete, una cena ai food truck di place Vaiete, la Pointe Vénus e l’onda di Teahupo’o. Poi mezz’ora di traghetto fino a Moorea per tre giorni tra il belvedere, la baia di Cook, il banco di sabbia delle razze e gli antichi marae della valle di Opunohu. Chiudi volando a Bora Bora per quattro o cinque giorni di bungalow sull’acqua, giro della laguna e tramonto sulla spiaggia di Matira.' },
            { title: 'Cosa assaggiare', body: 'Il piatto simbolo è il poisson cru: tonno crudo nel succo di lime con latte di cocco e verdure. Prova un banchetto polinesiano ahima’a cotto nel forno di terra, il frutto dell’albero del pane, il fafaru e la vaniglia locale di Taha’a. La sera vai alle roulottes, i food truck che servono chow mein, bistecche e crêpe francesi. Accompagna tutto con i succhi e il rum della distilleria Manutea di Moorea o con una birra Hinano.' },
            { title: 'Soldi, telefono e trasporti', body: 'La valuta è il franco del Pacifico (XPF), agganciato all’euro. Le carte russe non funzionano, quindi porta euro in contanti e cambiali in banca e all’aeroporto di Faa’a. I prezzi sono alti, soprattutto sulle isole piccole, e la spesa conviene farla al supermercato. Le SIM di Vini si vendono in aeroporto. Gli aerei di Air Tahiti collegano le isole, e a Tahiti e Moorea conviene noleggiare un’auto o uno scooter.' },
          ],
        },
      },
    },
  },
  cities: [
    {
      id: 'tahiti', lat: -17.5516, lng: -149.5585, image: 'rMYNmn7PttY', gallery: ['eF1h1HP7Tvo', 'EUFPvipu16A', 'oXucCF6tep0'],
      rating: 4.5, reviews: 5340, tags: ['surf', 'culture', 'market', 'beaches'], months: [5, 6, 7, 8, 9, 10], budgetPerDay: 200, currency: 'XPF',
      language: 'fr', timezone: 'UTC-10', zoom: 10, theme: { accent: '#065f46', accent2: '#fb7185', motif: 'palms' },
      text: {
        ru: { name: 'Таити и Папеэте', tagline: 'Чёрные пляжи, рынок цветов и легендарная волна Теахупоо', description: 'Таити — самый большой остров Полинезии и её ворота: в портовом Папеэте шумит крытый рынок, а вечерами на набережной открываются фургончики с едой. За городом — пляжи чёрного вулканического песка, водопады в зелёных долинах и деревня Теахупоо с одной из самых опасных волн мира.', tips: ['Объехать остров по кольцевой дороге можно за день — берите машину напрокат и выезжайте пораньше.', 'Рынок Папеэте оживлённее всего ранним утром, а по воскресеньям работает только до полудня.'], gettingThere: 'Международный аэропорт Фааа находится в 5 километрах от Папеэте: до центра 15 минут на такси или автобусе. Здесь же пересадка на внутренние рейсы Air Tahiti.' },
        en: { name: 'Tahiti and Papeete', tagline: 'Black-sand beaches, a flower market and the legendary Teahupo’o wave', description: 'Tahiti is the largest island of Polynesia and its gateway: in the port town of Papeete the covered market bustles, and in the evening food trucks open on the waterfront. Beyond the city lie black volcanic beaches, waterfalls in green valleys and the village of Teahupo’o with one of the world’s most dangerous waves.', tips: ['You can drive the coastal ring road around the island in a day, so rent a car and set off early.', 'Papeete market is liveliest early in the morning, and on Sundays it is open only until midday.'], gettingThere: 'Faa’a International Airport is 5 kilometres from Papeete, 15 minutes by taxi or bus to the centre. It is also where you connect to Air Tahiti domestic flights.' },
        es: { name: 'Tahití y Papeete', tagline: 'Playas de arena negra, un mercado de flores y la legendaria ola de Teahupo’o', description: 'Tahití es la isla más grande de la Polinesia y su puerta de entrada: en la ciudad portuaria de Papeete bulle el mercado cubierto y por la noche abren los food trucks del paseo marítimo. Fuera de la ciudad hay playas de arena volcánica negra, cascadas en valles verdes y el pueblo de Teahupo’o, con una de las olas más peligrosas del mundo.', tips: ['La carretera de circunvalación de la isla se recorre en un día: alquila coche y sal temprano.', 'El mercado de Papeete está más animado a primera hora, y los domingos solo abre hasta mediodía.'], gettingThere: 'El aeropuerto internacional de Faa’a está a 5 kilómetros de Papeete, a 15 minutos del centro en taxi o autobús. Allí mismo se enlaza con los vuelos internos de Air Tahiti.' },
        de: { name: 'Tahiti und Papeete', tagline: 'Schwarze Strände, ein Blumenmarkt und die legendäre Welle Teahupo’o', description: 'Tahiti ist die größte Insel Polynesiens und ihr Tor zur Welt: In der Hafenstadt Papeete herrscht in der Markthalle reges Treiben, abends öffnen an der Uferpromenade die Foodtrucks. Außerhalb der Stadt warten schwarze Vulkanstrände, Wasserfälle in grünen Tälern und das Dorf Teahupo’o mit einer der gefährlichsten Wellen der Welt.', tips: ['Die Ringstraße um die Insel schaffst du an einem Tag – miete ein Auto und brich früh auf.', 'Der Markt von Papeete ist frühmorgens am lebhaftesten, sonntags hat er nur bis Mittag geöffnet.'], gettingThere: 'Der internationale Flughafen Faa’a liegt 5 Kilometer von Papeete entfernt, mit Taxi oder Bus sind es 15 Minuten ins Zentrum. Hier steigst du auch in die Inlandsflüge von Air Tahiti um.' },
        fr: { name: 'Tahiti et Papeete', tagline: 'Plages de sable noir, marché aux fleurs et vague mythique de Teahupo’o', description: 'Tahiti est la plus grande île de Polynésie et sa porte d’entrée : à Papeete, le marché couvert s’anime dès l’aube et, le soir, les roulottes s’installent sur le front de mer. Au-delà de la ville s’étendent des plages de sable volcanique noir, des cascades au fond de vallées verdoyantes et le village de Teahupo’o, avec l’une des vagues les plus dangereuses du monde.', tips: ['La route de ceinture fait le tour de l’île en une journée : louez une voiture et partez tôt.', 'Le marché de Papeete est le plus animé tôt le matin, et le dimanche il n’ouvre que jusqu’à midi.'], gettingThere: 'L’aéroport international de Faa’a est à 5 kilomètres de Papeete, à 15 minutes du centre en taxi ou en bus. C’est aussi là que l’on prend les vols intérieurs d’Air Tahiti.' },
        it: { name: 'Tahiti e Papeete', tagline: 'Spiagge nere, un mercato dei fiori e la leggendaria onda di Teahupo’o', description: 'Tahiti è l’isola più grande della Polinesia e la sua porta d’ingresso: nella città portuale di Papeete il mercato coperto è sempre animato e la sera sul lungomare aprono i food truck. Fuori città ci sono spiagge di sabbia vulcanica nera, cascate in valli verdissime e il villaggio di Teahupo’o, con una delle onde più pericolose del mondo.', tips: ['La strada costiera che fa il giro dell’isola si percorre in un giorno: noleggia un’auto e parti presto.', 'Il mercato di Papeete è più vivace al mattino presto, e la domenica è aperto solo fino a mezzogiorno.'], gettingThere: 'L’aeroporto internazionale di Faa’a è a 5 chilometri da Papeete, a 15 minuti dal centro in taxi o autobus. Qui si prendono anche i voli interni di Air Tahiti.' },
      },
    },
    {
      id: 'bora-bora', lat: -16.5004, lng: -151.7415, image: 'LXNSgedt1jM', gallery: ['TOvYrc0D9y4', 'maJQ-Gl7E3M', '1VfhkiBVhM0', 'oSIoto5nhqU'],
      rating: 4.9, reviews: 12780, tags: ['luxury', 'romance', 'islands', 'diving'], months: [5, 6, 7, 8, 9, 10], budgetPerDay: 350, currency: 'XPF',
      language: 'fr', timezone: 'UTC-10', zoom: 12, theme: { accent: '#0284c7', accent2: '#2dd4bf', motif: 'waves' },
      text: {
        ru: { name: 'Бора-Бора', tagline: 'Жемчужина Тихого океана: лагуна, Отеману и бунгало над водой', description: 'Остров с двуглавой вершиной Отеману окружён кольцом моту — коралловых островков — и лагуной всех оттенков бирюзы. Именно здесь появились первые бунгало над водой, и сюда едут в медовый месяц со всего мира.', tips: ['Даже если живёте не в бунгало, лагуну стоит увидеть с воды: туры со снорклингом среди скатов и рифовых акул — главное развлечение острова.', 'Еда на курортах очень дорогая — поищите снэки и супермаркеты в главном посёлке Ваитапе.'], gettingThere: 'Самолёт Air Tahiti летит с Таити около 50 минут; аэропорт Бора-Бора стоит на моту Муте, откуда до главного острова и отелей доставляют катерами.' },
        en: { name: 'Bora Bora', tagline: 'Pearl of the Pacific: the lagoon, Otemanu and overwater bungalows', description: 'This island crowned by the twin-peaked Mount Otemanu is ringed by motu, small coral islets, and a lagoon in every shade of turquoise. The first overwater bungalows were built here, and honeymooners come from all over the world.', tips: ['Even if you are not staying in a bungalow, see the lagoon from the water: snorkelling tours among rays and reef sharks are the island’s main attraction.', 'Resort food is very expensive, so look for snack bars and supermarkets in the main village of Vaitape.'], gettingThere: 'Air Tahiti flies from Tahiti in about 50 minutes; Bora Bora airport sits on Motu Mute, from where boats take you to the main island and the hotels.' },
        es: { name: 'Bora Bora', tagline: 'La perla del Pacífico: la laguna, el Otemanu y bungalós sobre el agua', description: 'Esta isla coronada por el monte Otemanu, de doble cima, está rodeada por motus, islotes de coral, y por una laguna de todos los tonos de turquesa. Aquí se construyeron los primeros bungalós sobre el agua, y llegan parejas de luna de miel de todo el mundo.', tips: ['Aunque no te alojes en un bungaló, ve la laguna desde el agua: las excursiones de esnórquel entre rayas y tiburones de arrecife son el gran atractivo de la isla.', 'La comida de los resorts es carísima: busca snacks y supermercados en el pueblo principal, Vaitape.'], gettingThere: 'Air Tahiti vuela desde Tahití en unos 50 minutos; el aeropuerto de Bora Bora está en el motu Mute, desde donde las lanchas te llevan a la isla principal y a los hoteles.' },
        de: { name: 'Bora Bora', tagline: 'Perle des Pazifiks: Lagune, Otemanu und Overwater-Bungalows', description: 'Die Insel mit dem doppelgipfligen Mount Otemanu ist von Motus, kleinen Koralleninseln, und einer Lagune in allen Türkistönen umgeben. Hier entstanden die ersten Overwater-Bungalows, und Hochzeitspaare reisen aus aller Welt an.', tips: ['Auch wenn du nicht im Bungalow wohnst, solltest du die Lagune vom Wasser aus sehen: Schnorcheltouren zwischen Rochen und Riffhaien sind das Highlight der Insel.', 'Essen in den Resorts ist sehr teuer – such nach Snackbars und Supermärkten im Hauptort Vaitape.'], gettingThere: 'Air Tahiti fliegt in etwa 50 Minuten von Tahiti; der Flughafen Bora Bora liegt auf dem Motu Mute, von wo Boote zur Hauptinsel und zu den Hotels fahren.' },
        fr: { name: 'Bora Bora', tagline: 'Perle du Pacifique : le lagon, l’Otemanu et les bungalows sur pilotis', description: 'Couronnée par le mont Otemanu et ses deux sommets, l’île est cernée de motu, petits îlots coralliens, et d’un lagon décliné dans toutes les nuances de turquoise. C’est ici qu’ont été construits les premiers bungalows sur pilotis, et les jeunes mariés y affluent du monde entier.', tips: ['Même sans loger en bungalow, découvrez le lagon depuis l’eau : les sorties snorkeling parmi les raies et les requins de récif sont la grande attraction de l’île.', 'Les repas dans les hôtels sont très chers : cherchez les snacks et les supérettes du village principal, Vaitape.'], gettingThere: 'Air Tahiti relie Tahiti en 50 minutes environ ; l’aéroport de Bora Bora se trouve sur le motu Mute, d’où des navettes maritimes rejoignent l’île principale et les hôtels.' },
        it: { name: 'Bora Bora', tagline: 'Perla del Pacifico: la laguna, l’Otemanu e i bungalow sull’acqua', description: 'Quest’isola coronata dal monte Otemanu a due punte è circondata da motu, piccoli isolotti corallini, e da una laguna in tutte le sfumature del turchese. Qui sono nati i primi bungalow sull’acqua, e le coppie in luna di miele arrivano da tutto il mondo.', tips: ['Anche se non alloggi in un bungalow, guarda la laguna dall’acqua: le uscite di snorkeling tra razze e squali di barriera sono l’attrazione principale dell’isola.', 'Il cibo nei resort è carissimo: cerca snack bar e supermercati nel villaggio principale di Vaitape.'], gettingThere: 'Air Tahiti vola da Tahiti in circa 50 minuti; l’aeroporto di Bora Bora si trova sul motu Mute, da dove le barche portano all’isola principale e agli hotel.' },
      },
    },
    {
      id: 'moorea', lat: -17.5388, lng: -149.8295, image: 'oXucCF6tep0', gallery: ['CcoALq4fGDw', 'rMYNmn7PttY', 'eF1h1HP7Tvo'],
      rating: 4.8, reviews: 6950, tags: ['hiking', 'nature', 'diving', 'views'], months: [5, 6, 7, 8, 9, 10], budgetPerDay: 220, currency: 'XPF',
      language: 'fr', timezone: 'UTC-10', zoom: 11, theme: { accent: '#15803d', accent2: '#38bdf8', motif: 'peaks' },
      text: {
        ru: { name: 'Муреа', tagline: 'Остров-сердце с зубчатыми пиками и двумя заливами', description: 'В получасе на пароме от Таити лежит Муреа — остров в форме сердца с острыми вулканическими пиками, ананасовыми плантациями и двумя глубокими бухтами, Кука и Опунуху. Он спокойнее и доступнее Бора-Бора, а лагуна здесь ничуть не хуже.', tips: ['Арендуйте машину или скутер прямо у паромного причала: кольцевая дорога вокруг острова — всего около 60 км.', 'С июля по октябрь выходите на лодке смотреть горбатых китов — их часто видно прямо у рифа.'], gettingThere: 'Паромы Aremiti и Terevau идут из порта Папеэте до Ваиаре около 30–45 минут несколько раз в день; есть и короткий перелёт Air Tahiti.' },
        en: { name: 'Moorea', tagline: 'The heart-shaped island of jagged peaks and twin bays', description: 'Half an hour by ferry from Tahiti lies Moorea, a heart-shaped island of sharp volcanic peaks, pineapple plantations and two deep bays, Cook’s Bay and Opunohu Bay. It is calmer and more affordable than Bora Bora, and its lagoon is every bit as beautiful.', tips: ['Rent a car or scooter right at the ferry dock: the ring road around the island is only about 60 km.', 'From July to October take a boat out to see humpback whales, often visible just off the reef.'], gettingThere: 'Aremiti and Terevau ferries run from Papeete harbour to Vaiare in 30–45 minutes several times a day, and there is also a short Air Tahiti flight.' },
        es: { name: 'Moorea', tagline: 'La isla corazón de picos dentados y dos bahías', description: 'A media hora en ferri de Tahití está Moorea, una isla con forma de corazón, de afilados picos volcánicos, plantaciones de piña y dos profundas bahías, la de Cook y la de Opunohu. Es más tranquila y asequible que Bora Bora, y su laguna no tiene nada que envidiarle.', tips: ['Alquila coche o scooter en el mismo muelle del ferri: la carretera que rodea la isla mide solo unos 60 km.', 'De julio a octubre sal en barco a ver ballenas jorobadas, que a menudo se ven junto al arrecife.'], gettingThere: 'Los ferris Aremiti y Terevau van del puerto de Papeete a Vaiare en 30–45 minutos varias veces al día, y también hay un vuelo corto de Air Tahiti.' },
        de: { name: 'Moorea', tagline: 'Die Herzinsel mit Zackengipfeln und zwei Buchten', description: 'Eine halbe Stunde mit der Fähre von Tahiti entfernt liegt Moorea, eine herzförmige Insel mit spitzen Vulkangipfeln, Ananasplantagen und zwei tiefen Buchten, Cook’s Bay und Opunohu Bay. Sie ist ruhiger und erschwinglicher als Bora Bora, und ihre Lagune steht ihr in nichts nach.', tips: ['Miete Auto oder Roller direkt am Fähranleger: Die Ringstraße um die Insel ist nur etwa 60 km lang.', 'Von Juli bis Oktober lohnt eine Bootstour zu den Buckelwalen, die oft direkt vor dem Riff auftauchen.'], gettingThere: 'Die Fähren von Aremiti und Terevau fahren mehrmals täglich in 30–45 Minuten vom Hafen Papeete nach Vaiare, außerdem gibt es einen kurzen Flug mit Air Tahiti.' },
        fr: { name: 'Moorea', tagline: 'L’île cœur aux pics dentelés et aux deux baies', description: 'À une demi-heure de ferry de Tahiti, Moorea dessine un cœur hérissé de pics volcaniques, d’ananeraies et de deux baies profondes, celles de Cook et d’Opunohu. Plus calme et plus abordable que Bora Bora, elle n’a rien à lui envier côté lagon.', tips: ['Louez une voiture ou un scooter dès le quai du ferry : la route de ceinture ne fait qu’une soixantaine de kilomètres.', 'De juillet à octobre, partez en bateau observer les baleines à bosse, souvent visibles juste devant le récif.'], gettingThere: 'Les ferrys Aremiti et Terevau relient le port de Papeete à Vaiare en 30 à 45 minutes plusieurs fois par jour, et un court vol Air Tahiti existe aussi.' },
        it: { name: 'Moorea', tagline: 'L’isola a forma di cuore con picchi frastagliati e due baie', description: 'A mezz’ora di traghetto da Tahiti si trova Moorea, un’isola a forma di cuore con aguzzi picchi vulcanici, piantagioni di ananas e due baie profonde, quella di Cook e quella di Opunohu. È più tranquilla e accessibile di Bora Bora, e la sua laguna non è da meno.', tips: ['Noleggia auto o scooter direttamente al molo del traghetto: la strada che gira l’isola è lunga solo una sessantina di chilometri.', 'Da luglio a ottobre esci in barca a vedere le megattere, spesso visibili proprio davanti alla barriera.'], gettingThere: 'I traghetti Aremiti e Terevau collegano il porto di Papeete a Vaiare in 30–45 minuti più volte al giorno, e c’è anche un breve volo Air Tahiti.' },
      },
    },
  ],
  places: [
    // Tahiti
    {
      id: 'tahiti-pointe-venus', city: 'tahiti', category: 'attraction', lat: -17.4960, lng: -149.4950, image: 'rMYNmn7PttY',
      rating: 4.5, reviews: 3900, tags: ['beaches', 'history', 'sunset'], price: { kind: 'free' }, hours: 'always',
      address: 'Pointe Vénus, Mahina 98709',
      text: {
        ru: { name: 'Мыс Венеры', description: 'Мыс с маяком 1867 года и пляжем чёрного вулканического песка, где в 1769 году Джеймс Кук наблюдал прохождение Венеры по диску Солнца. Отсюда открывается вид на зубчатый силуэт Муреа.', tip: 'Приезжайте к закату: солнце садится за Муреа, а чёрный песок блестит в последних лучах.' },
        en: { name: 'Point Venus', description: 'A headland with an 1867 lighthouse and a black volcanic beach where James Cook observed the transit of Venus across the Sun in 1769. It looks out on the jagged silhouette of Moorea.', tip: 'Come for sunset, when the sun drops behind Moorea and the black sand glistens in the last light.' },
        es: { name: 'Punta Venus', description: 'Un cabo con un faro de 1867 y una playa de arena volcánica negra donde James Cook observó en 1769 el tránsito de Venus por delante del Sol. Desde aquí se ve la silueta dentada de Moorea.', tip: 'Ven al atardecer, cuando el sol se pone tras Moorea y la arena negra brilla con la última luz.' },
        de: { name: 'Point Venus', description: 'Eine Landspitze mit einem Leuchtturm von 1867 und einem schwarzen Vulkanstrand, an dem James Cook 1769 den Venustransit vor der Sonne beobachtete. Von hier siehst du die zackige Silhouette von Moorea.', tip: 'Komm zum Sonnenuntergang, wenn die Sonne hinter Moorea versinkt und der schwarze Sand im letzten Licht glänzt.' },
        fr: { name: 'Pointe Vénus', description: 'Un cap avec un phare de 1867 et une plage de sable volcanique noir, d’où James Cook observa le transit de Vénus devant le Soleil en 1769. La vue porte sur la silhouette dentelée de Moorea.', tip: 'Venez au coucher du soleil, quand l’astre disparaît derrière Moorea et que le sable noir scintille dans la dernière lumière.' },
        it: { name: 'Pointe Vénus', description: 'Un promontorio con un faro del 1867 e una spiaggia di sabbia vulcanica nera, da cui nel 1769 James Cook osservò il transito di Venere davanti al Sole. Da qui si vede il profilo frastagliato di Moorea.', tip: 'Vieni al tramonto, quando il sole cala dietro Moorea e la sabbia nera brilla nell’ultima luce.' },
      },
    },
    {
      id: 'tahiti-teahupoo', city: 'tahiti', category: 'nature', spot: 'insta', lat: -17.8470, lng: -149.2670, image: 'rMYNmn7PttY',
      rating: 4.7, reviews: 2600, tags: ['surf', 'photo', 'adventure'], price: { kind: 'from', amount: 5000, currency: 'XPF' }, hours: 'always',
      address: 'Route de Teahupoo, Taiarapu-Ouest 98723',
      text: {
        ru: { name: 'Волна Теахупоо', description: 'Деревня в конце дороги на полуострове Таиарапу, напротив которой над мелким рифом встаёт одна из самых мощных и опасных волн планеты. Здесь прошли соревнования по сёрфингу Олимпиады-2024.', tip: 'Возьмите лодку у причала в конце дороги: с канала рядом с волной получаются кадры, где сёрфер скользит внутри стеклянной трубы.' },
        en: { name: 'Teahupo’o wave', description: 'A village at the end of the road on the Taiarapu peninsula, facing one of the most powerful and dangerous waves on the planet as it rears over a shallow reef. It hosted the surfing events of the 2024 Olympics.', tip: 'Take a boat from the jetty at the end of the road: from the channel beside the wave you get shots of surfers gliding inside the glassy tube.' },
        es: { name: 'Ola de Teahupo’o', description: 'Un pueblo al final de la carretera en la península de Taiarapu, frente al que se alza sobre un arrecife poco profundo una de las olas más potentes y peligrosas del planeta. Aquí se celebró el surf de los Juegos Olímpicos de 2024.', tip: 'Toma una lancha en el muelle del final de la carretera: desde el canal junto a la ola salen fotos de surfistas deslizándose dentro del tubo cristalino.' },
        de: { name: 'Welle von Teahupo’o', description: 'Ein Dorf am Ende der Straße auf der Halbinsel Taiarapu, vor dem sich über einem flachen Riff eine der kraftvollsten und gefährlichsten Wellen der Welt auftürmt. Hier fanden die Surfwettbewerbe der Olympischen Spiele 2024 statt.', tip: 'Nimm am Anleger am Straßenende ein Boot: Vom Kanal neben der Welle gelingen Bilder von Surfern, die durch die gläserne Röhre gleiten.' },
        fr: { name: 'Vague de Teahupo’o', description: 'Un village au bout de la route, sur la presqu’île de Taiarapu, face auquel se dresse au-dessus d’un récif peu profond l’une des vagues les plus puissantes et dangereuses de la planète. Elle a accueilli les épreuves de surf des Jeux olympiques de 2024.', tip: 'Prenez un bateau au ponton du bout de la route : depuis la passe voisine de la vague, on photographie les surfeurs glissant dans le tube cristallin.' },
        it: { name: 'Onda di Teahupo’o', description: 'Un villaggio in fondo alla strada sulla penisola di Taiarapu, davanti al quale si alza su una barriera poco profonda una delle onde più potenti e pericolose del pianeta. Qui si sono svolte le gare di surf delle Olimpiadi 2024.', tip: 'Prendi una barca al pontile in fondo alla strada: dal canale accanto all’onda si scattano foto dei surfisti che scivolano dentro il tubo cristallino.' },
      },
    },
    {
      id: 'tahiti-grotte-de-maraa', city: 'tahiti', category: 'nature', spot: 'hidden', lat: -17.7440, lng: -149.5770, image: 'eF1h1HP7Tvo',
      rating: 4.3, reviews: 1700, tags: ['nature', 'gardens', 'lakes'], price: { kind: 'free' }, hours: 'always',
      address: 'Route de ceinture, Paea 98711',
      text: {
        ru: { name: 'Грот Мараа', description: 'Пещеры под скалой, увитой папоротниками, у кольцевой дороги на западном берегу Таити: в глубине гротов стоят тихие озерца с прохладной пресной водой. Туристы обычно проезжают мимо, не замечая указателя.', tip: 'Ищите небольшую парковку у дороги в районе Паэа, на 28-м километре от Папеэте; короткая тропа через сад приведёт к пещерам.' },
        en: { name: 'Maraa Grotto', description: 'Caves beneath a fern-draped cliff beside the coastal road on Tahiti’s west coast, with still pools of cool fresh water deep inside. Most visitors drive straight past without noticing the sign.', tip: 'Look for the small roadside car park in Paea, around kilometre 28 from Papeete; a short path through a garden leads to the caves.' },
        es: { name: 'Gruta de Maraa', description: 'Cuevas bajo un acantilado cubierto de helechos junto a la carretera costera de la costa oeste de Tahití, con tranquilos estanques de agua dulce y fresca en su interior. La mayoría de los visitantes pasa de largo sin ver el cartel.', tip: 'Busca el pequeño aparcamiento junto a la carretera en Paea, hacia el kilómetro 28 desde Papeete; un breve sendero por un jardín lleva a las cuevas.' },
        de: { name: 'Grotte von Maraa', description: 'Höhlen unter einer farnbewachsenen Felswand an der Küstenstraße im Westen Tahitis, in deren Tiefe stille Becken mit kühlem Süßwasser liegen. Die meisten fahren am Schild vorbei, ohne es zu bemerken.', tip: 'Such den kleinen Parkplatz an der Straße in Paea, etwa bei Kilometer 28 ab Papeete; ein kurzer Weg durch einen Garten führt zu den Höhlen.' },
        fr: { name: 'Grotte de Maraa', description: 'Des grottes sous une falaise couverte de fougères, le long de la route de ceinture sur la côte ouest de Tahiti, abritant au fond des bassins d’eau douce et fraîche. La plupart des visiteurs passent devant sans voir le panneau.', tip: 'Repérez le petit parking en bord de route à Paea, vers le PK 28 depuis Papeete ; un court sentier à travers un jardin mène aux grottes.' },
        it: { name: 'Grotta di Maraa', description: 'Grotte sotto una parete coperta di felci lungo la strada costiera sulla costa ovest di Tahiti, con tranquille pozze d’acqua dolce e fresca al loro interno. La maggior parte dei visitatori passa oltre senza notare il cartello.', tip: 'Cerca il piccolo parcheggio a bordo strada a Paea, verso il chilometro 28 da Papeete; un breve sentiero attraverso un giardino porta alle grotte.' },
      },
    },
    {
      id: 'tahiti-papeete-market', city: 'tahiti', category: 'food', lat: -17.5370, lng: -149.5665, image: 'eF1h1HP7Tvo',
      rating: 4.3, reviews: 6100, tags: ['market', 'food', 'culture'], price: { kind: 'level', level: 1 }, hours: '05:00–17:00',
      address: 'Rue du 22 Septembre 1914, Papeete 98714',
      text: {
        ru: { name: 'Рынок Папеэте', description: 'Двухэтажный крытый рынок в центре столицы: внизу — фрукты, рыба, ваниль и гирлянды из цветов тиаре, наверху — ткани парео, жемчуг и поделки. Здесь же продают пуассон крю и полинезийские сладости.', tip: 'Приходите к открытию, когда приносят свежие цветы, и попробуйте пуассон крю в одном из прилавков с едой на первом этаже.' },
        en: { name: 'Papeete Market', description: 'A two-storey covered market in the heart of the capital: downstairs fruit, fish, vanilla and tiare garlands, upstairs pareo fabrics, pearls and crafts. Poisson cru and Polynesian sweets are sold here too.', tip: 'Arrive at opening time when the fresh flowers come in, and try poisson cru at one of the food stalls on the ground floor.' },
        es: { name: 'Mercado de Papeete', description: 'Un mercado cubierto de dos plantas en el corazón de la capital: abajo fruta, pescado, vainilla y guirnaldas de tiaré; arriba telas de pareo, perlas y artesanía. También se vende poisson cru y dulces polinesios.', tip: 'Llega a la hora de apertura, cuando traen las flores frescas, y prueba el poisson cru en uno de los puestos de comida de la planta baja.' },
        de: { name: 'Markt von Papeete', description: 'Eine zweistöckige Markthalle im Herzen der Hauptstadt: unten Obst, Fisch, Vanille und Tiare-Kränze, oben Pareo-Stoffe, Perlen und Kunsthandwerk. Auch Poisson cru und polynesische Süßigkeiten gibt es hier.', tip: 'Komm zur Öffnung, wenn die frischen Blumen eintreffen, und probier Poisson cru an einem der Essensstände im Erdgeschoss.' },
        fr: { name: 'Marché de Papeete', description: 'Un marché couvert sur deux niveaux au cœur de la capitale : en bas les fruits, le poisson, la vanille et les colliers de tiaré, en haut les paréos, les perles et l’artisanat. On y trouve aussi du poisson cru et des douceurs polynésiennes.', tip: 'Venez à l’ouverture, à l’arrivée des fleurs fraîches, et goûtez le poisson cru à l’un des stands du rez-de-chaussée.' },
        it: { name: 'Mercato di Papeete', description: 'Un mercato coperto su due piani nel cuore della capitale: sotto frutta, pesce, vaniglia e ghirlande di tiaré, sopra stoffe per pareo, perle e artigianato. Qui si vendono anche il poisson cru e i dolci polinesiani.', tip: 'Arriva all’apertura, quando portano i fiori freschi, e assaggia il poisson cru in uno dei banchi di cibo al piano terra.' },
      },
    },
    {
      id: 'tahiti-roulottes-vaiete', city: 'tahiti', category: 'food', lat: -17.5355, lng: -149.5690, image: 'EUFPvipu16A',
      rating: 4.3, reviews: 3300, tags: ['streetfood', 'food', 'nightlife'], price: { kind: 'level', level: 2 }, hours: '18:00–23:00',
      address: 'Place Vaiete, Papeete 98714',
      text: {
        ru: { name: 'Фургончики на площади Ваиэте', description: 'Каждый вечер на набережной Папеэте выстраиваются фургончики-рулотты: здесь готовят пуассон крю, шаумэн, стейки, пиццу и французские блинчики. Местные приходят сюда семьями, а за столиками — вид на порт.', tip: 'Попробуйте блинчики с местной ванилью или кокосом на десерт; по воскресеньям фургончиков меньше.' },
        en: { name: 'Place Vaiete food trucks', description: 'Every evening the roulottes line up on Papeete’s waterfront, cooking poisson cru, chow mein, steaks, pizza and French crêpes. Locals come with their families, and the tables look out over the harbour.', tip: 'Try a crêpe with local vanilla or coconut for dessert; there are fewer trucks on Sundays.' },
        es: { name: 'Food trucks de la plaza Vaiete', description: 'Cada noche las roulottes se alinean en el paseo marítimo de Papeete y preparan poisson cru, chow mein, filetes, pizza y crepes francesas. Los vecinos vienen en familia, y las mesas miran al puerto.', tip: 'Prueba de postre una crepe con vainilla local o coco; los domingos hay menos furgonetas.' },
        de: { name: 'Foodtrucks auf der Place Vaiete', description: 'Jeden Abend reihen sich an der Uferpromenade von Papeete die Roulottes auf und bereiten Poisson cru, Chow Mein, Steaks, Pizza und französische Crêpes zu. Einheimische kommen mit der Familie, von den Tischen blickst du auf den Hafen.', tip: 'Probier zum Nachtisch einen Crêpe mit heimischer Vanille oder Kokos; sonntags sind weniger Wagen da.' },
        fr: { name: 'Roulottes de la place Vaiete', description: 'Chaque soir, les roulottes s’alignent sur le front de mer de Papeete pour servir poisson cru, chow mein, steaks, pizzas et crêpes. Les familles locales s’y retrouvent, et les tables donnent sur le port.', tip: 'Goûtez en dessert une crêpe à la vanille locale ou à la noix de coco ; le dimanche, les roulottes sont moins nombreuses.' },
        it: { name: 'Roulottes di place Vaiete', description: 'Ogni sera sul lungomare di Papeete si allineano le roulottes, che cucinano poisson cru, chow mein, bistecche, pizza e crêpe francesi. I residenti vengono in famiglia e i tavoli guardano il porto.', tip: 'Per dessert prova una crêpe con vaniglia locale o cocco; la domenica i furgoni sono meno.' },
      },
    },
    // Bora Bora
    {
      id: 'bora-bora-lagoon', city: 'bora-bora', category: 'nature', lat: -16.4950, lng: -151.7050, image: 'TOvYrc0D9y4',
      rating: 4.9, reviews: 14200, tags: ['diving', 'islands', 'cruise', 'wildlife'], price: { kind: 'from', amount: 9000, currency: 'XPF' }, hours: '08:00–17:00',
      address: 'Lagon de Bora Bora, Bora Bora 98730',
      text: {
        ru: { name: 'Лагуна Бора-Бора', description: 'Огромная лагуна, окружённая кольцом моту, считается одной из красивейших в мире: на мелководье плавают скаты и рифовые акулы, а коралловые сады начинаются в нескольких метрах от лодки. Над всем этим возвышается вершина Отеману.', tip: 'Выбирайте тур на традиционной пироге с остановками для снорклинга и обедом на моту — так вы увидите лагуну с разных сторон.' },
        en: { name: 'Bora Bora Lagoon', description: 'This vast lagoon ringed by motu is counted among the most beautiful in the world: rays and reef sharks glide through the shallows and coral gardens begin a few metres from the boat. Above it all rises the peak of Otemanu.', tip: 'Choose a tour by traditional outrigger with snorkelling stops and lunch on a motu, so you see the lagoon from every side.' },
        es: { name: 'Laguna de Bora Bora', description: 'Esta enorme laguna rodeada de motus está considerada una de las más bellas del mundo: rayas y tiburones de arrecife nadan en las aguas someras y los jardines de coral empiezan a pocos metros de la barca. Sobre todo ello se alza el pico Otemanu.', tip: 'Elige una excursión en piragua tradicional con paradas de esnórquel y almuerzo en un motu, para ver la laguna desde todos sus lados.' },
        de: { name: 'Lagune von Bora Bora', description: 'Die riesige, von Motus umringte Lagune gilt als eine der schönsten der Welt: Rochen und Riffhaie gleiten durchs flache Wasser, Korallengärten beginnen wenige Meter vom Boot. Über allem thront der Gipfel des Otemanu.', tip: 'Wähl eine Tour im traditionellen Auslegerkanu mit Schnorchelstopps und Mittagessen auf einem Motu – so siehst du die Lagune von allen Seiten.' },
        fr: { name: 'Lagon de Bora Bora', description: 'Cet immense lagon cerné de motu compte parmi les plus beaux du monde : raies et requins de récif glissent dans les hauts-fonds, et les jardins de corail commencent à quelques mètres du bateau. Au-dessus de tout se dresse le sommet de l’Otemanu.', tip: 'Choisissez un tour en pirogue traditionnelle avec arrêts snorkeling et déjeuner sur un motu, pour découvrir le lagon sous tous ses angles.' },
        it: { name: 'Laguna di Bora Bora', description: 'Questa vasta laguna cinta da motu è considerata tra le più belle del mondo: razze e squali di barriera scivolano nelle acque basse e i giardini di corallo iniziano a pochi metri dalla barca. Su tutto domina la vetta dell’Otemanu.', tip: 'Scegli un giro in piroga tradizionale con soste di snorkeling e pranzo su un motu, per vedere la laguna da ogni lato.' },
      },
    },
    {
      id: 'bora-bora-matira-beach', city: 'bora-bora', category: 'nature', spot: 'insta', lat: -16.5390, lng: -151.7300, image: 'maJQ-Gl7E3M',
      rating: 4.8, reviews: 7400, tags: ['beaches', 'sunset', 'photo'], price: { kind: 'free' }, hours: 'always',
      address: 'Pointe Matira, Bora Bora 98730',
      text: {
        ru: { name: 'Пляж Матира', description: 'Единственный большой общественный пляж Бора-Бора на южной оконечности острова: белый песок, пальмы и мелкая прозрачная вода, по которой можно далеко уйти пешком.', tip: 'На закате встаньте у кромки воды на мысе Матира: солнце садится за моту, а пальмы и лагуна окрашиваются в розовый.' },
        en: { name: 'Matira Beach', description: 'Bora Bora’s only large public beach, at the southern tip of the island: white sand, palm trees and shallow clear water you can wade far out into.', tip: 'At sunset stand at the water’s edge on Matira Point, as the sun sinks behind the motu and the palms and lagoon turn pink.' },
        es: { name: 'Playa Matira', description: 'La única gran playa pública de Bora Bora, en el extremo sur de la isla: arena blanca, palmeras y agua transparente y poco profunda por la que se puede caminar muy lejos.', tip: 'Al atardecer colócate en la orilla de la punta Matira: el sol se pone tras los motus y las palmeras y la laguna se tiñen de rosa.' },
        de: { name: 'Matira Beach', description: 'Der einzige große öffentliche Strand Bora Boras an der Südspitze der Insel: weißer Sand, Palmen und flaches, klares Wasser, in das du weit hineinwaten kannst.', tip: 'Stell dich bei Sonnenuntergang an die Wasserkante der Matira-Spitze, wenn die Sonne hinter den Motus versinkt und Palmen und Lagune rosa leuchten.' },
        fr: { name: 'Plage de Matira', description: 'La seule grande plage publique de Bora Bora, à la pointe sud de l’île : sable blanc, cocotiers et eau limpide si peu profonde qu’on peut s’avancer très loin à pied.', tip: 'Au coucher du soleil, placez-vous au bord de l’eau à la pointe Matira : le soleil disparaît derrière les motu et cocotiers et lagon virent au rose.' },
        it: { name: 'Spiaggia di Matira', description: 'L’unica grande spiaggia pubblica di Bora Bora, sulla punta meridionale dell’isola: sabbia bianca, palme e acqua bassa e limpida in cui si cammina molto al largo.', tip: 'Al tramonto mettiti sulla battigia della punta Matira: il sole cala dietro i motu e palme e laguna si tingono di rosa.' },
      },
    },
    {
      id: 'bora-bora-fitiiu-cannons', city: 'bora-bora', category: 'attraction', spot: 'hidden', lat: -16.5150, lng: -151.7190, image: '1VfhkiBVhM0',
      rating: 4.4, reviews: 900, tags: ['history', 'views', 'hiking'], price: { kind: 'free' }, hours: 'always',
      address: 'Pointe Fitiiu, Bora Bora 98730',
      text: {
        ru: { name: 'Американские пушки на мысе Фитииу', description: 'Во время Второй мировой войны на Бора-Бора стояла американская база, и на холмах до сих пор сохранились огромные береговые орудия. С позиции на мысе Фитииу открывается редкий вид на лагуну сверху.', tip: 'Поднимитесь пешком по крутой тропе от кольцевой дороги на восточном берегу или запишитесь на тур на внедорожнике, который заезжает к пушкам.' },
        en: { name: 'Fitiiu Point WWII cannons', description: 'During the Second World War Bora Bora was home to a US base, and huge coastal guns still stand in the hills. The gun position on Fitiiu Point offers a rare view down over the lagoon.', tip: 'Hike up the steep track from the ring road on the east coast or join a 4x4 tour that stops at the guns.' },
        es: { name: 'Cañones de la punta Fitiiu', description: 'Durante la Segunda Guerra Mundial Bora Bora albergó una base estadounidense, y en las colinas aún quedan enormes cañones costeros. La posición de la punta Fitiiu ofrece una rara vista de la laguna desde lo alto.', tip: 'Sube a pie por el empinado sendero que parte de la carretera de la costa este o apúntate a una excursión en 4x4 que para en los cañones.' },
        de: { name: 'Kanonen am Point Fitiiu', description: 'Im Zweiten Weltkrieg hatte Bora Bora einen US-Stützpunkt, und in den Hügeln stehen noch heute riesige Küstengeschütze. Die Stellung am Point Fitiiu bietet einen seltenen Blick von oben auf die Lagune.', tip: 'Wander den steilen Pfad von der Ringstraße an der Ostküste hinauf oder buch eine 4x4-Tour, die bei den Kanonen hält.' },
        fr: { name: 'Canons de la pointe Fitiiu', description: 'Pendant la Seconde Guerre mondiale, Bora Bora abritait une base américaine, et d’énormes canons côtiers trônent encore sur les collines. La position de la pointe Fitiiu offre une rare vue plongeante sur le lagon.', tip: 'Montez à pied par le sentier raide qui part de la route de ceinture sur la côte est, ou rejoignez un tour en 4x4 qui s’arrête aux canons.' },
        it: { name: 'Cannoni di Pointe Fitiiu', description: 'Durante la Seconda guerra mondiale Bora Bora ospitava una base americana, e sulle colline restano ancora enormi cannoni costieri. La postazione di Pointe Fitiiu offre una rara vista dall’alto sulla laguna.', tip: 'Sali a piedi per il ripido sentiero che parte dalla strada costiera est oppure partecipa a un tour in 4x4 che si ferma ai cannoni.' },
      },
    },
    {
      id: 'bora-bora-bloody-marys', city: 'bora-bora', category: 'food', lat: -16.5245, lng: -151.7450, image: 'CcoALq4fGDw',
      rating: 4.4, reviews: 5200, tags: ['food', 'history'], price: { kind: 'level', level: 3 },
      address: 'Povai Bay, Bora Bora 98730',
      text: {
        ru: { name: 'Bloody Mary’s', description: 'Легендарный ресторан под соломенной крышей с песчаным полом, открытый в 1979 году: свежую рыбу выбирают прямо на льду у входа, а на доске при входе — имена знаменитых гостей.', tip: 'Ресторан бесплатно забирает гостей из большинства отелей — уточните при бронировании; закажите рыбу махи-махи на гриле.' },
        en: { name: 'Bloody Mary’s', description: 'A legendary thatched restaurant with a sand floor, open since 1979: you choose fresh fish on ice at the entrance, and a board outside lists its famous guests.', tip: 'The restaurant offers free pick-up from most hotels, so ask when booking; order the grilled mahi-mahi.' },
        es: { name: 'Bloody Mary’s', description: 'Un legendario restaurante con techo de paja y suelo de arena, abierto en 1979: el pescado fresco se elige sobre hielo en la entrada, y un cartel fuera recoge los nombres de sus clientes famosos.', tip: 'El restaurante recoge gratis a los clientes en la mayoría de los hoteles, pregúntalo al reservar; pide el mahi-mahi a la parrilla.' },
        de: { name: 'Bloody Mary’s', description: 'Ein legendäres Restaurant mit Strohdach und Sandboden, geöffnet seit 1979: Den frischen Fisch suchst du am Eingang auf Eis aus, und eine Tafel draußen verzeichnet berühmte Gäste.', tip: 'Das Restaurant holt Gäste bei den meisten Hotels kostenlos ab – frag bei der Reservierung nach; bestell den gegrillten Mahi-Mahi.' },
        fr: { name: 'Bloody Mary’s', description: 'Un restaurant légendaire au toit de chaume et au sol de sable, ouvert en 1979 : on choisit son poisson frais sur la glace à l’entrée, et un panneau dehors affiche les noms de ses célèbres clients.', tip: 'Le restaurant vient chercher gratuitement ses clients dans la plupart des hôtels, demandez-le à la réservation ; commandez le mahi-mahi grillé.' },
        it: { name: 'Bloody Mary’s', description: 'Un leggendario ristorante con tetto di paglia e pavimento di sabbia, aperto nel 1979: il pesce fresco si sceglie sul ghiaccio all’ingresso, e un cartello fuori elenca gli ospiti famosi.', tip: 'Il ristorante passa a prendere gratis i clienti nella maggior parte degli hotel, chiedilo alla prenotazione; ordina il mahi-mahi alla griglia.' },
      },
    },
    {
      id: 'bora-bora-motu-tapu', city: 'bora-bora', category: 'nature', lat: -16.4930, lng: -151.7720, image: 'oSIoto5nhqU',
      rating: 4.7, reviews: 2300, tags: ['islands', 'beaches', 'romance'], price: { kind: 'from', amount: 9000, currency: 'XPF' }, hours: '08:00–17:00',
      address: 'Motu Tapu, Bora Bora 98730',
      text: {
        ru: { name: 'Моту Тапу', description: 'Крошечный островок с пальмами у западного края рифа, когда-то принадлежавший королевской семье, — самый фотографируемый моту Бора-Бора. На него высаживаются во время туров по лагуне.', tip: 'Попросите гида тура по лагуне сделать остановку на Моту Тапу утром, когда напротив освещена вершина Отеману.' },
        en: { name: 'Motu Tapu', description: 'A tiny palm-covered islet on the western edge of the reef, once reserved for royalty and now the most photographed motu in Bora Bora. Lagoon tours land here.', tip: 'Ask your lagoon-tour guide to stop at Motu Tapu in the morning, when the peak of Otemanu opposite is in full light.' },
        es: { name: 'Motu Tapu', description: 'Un diminuto islote de palmeras en el borde occidental del arrecife, antaño reservado a la realeza y hoy el motu más fotografiado de Bora Bora. Las excursiones por la laguna desembarcan aquí.', tip: 'Pide al guía de la excursión que pare en Motu Tapu por la mañana, cuando el pico Otemanu de enfrente está bien iluminado.' },
        de: { name: 'Motu Tapu', description: 'Eine winzige Palmeninsel am Westrand des Riffs, einst dem Königshaus vorbehalten und heute das meistfotografierte Motu Bora Boras. Lagunentouren legen hier an.', tip: 'Bitte den Guide deiner Lagunentour, morgens am Motu Tapu zu halten, wenn der Gipfel des Otemanu gegenüber voll im Licht steht.' },
        fr: { name: 'Motu Tapu', description: 'Un minuscule îlot de cocotiers au bord ouest du récif, jadis réservé à la royauté et aujourd’hui le motu le plus photographié de Bora Bora. Les tours du lagon y accostent.', tip: 'Demandez à votre guide de faire halte au Motu Tapu le matin, quand l’Otemanu en face est en pleine lumière.' },
        it: { name: 'Motu Tapu', description: 'Un minuscolo isolotto di palme sul bordo occidentale della barriera, un tempo riservato ai reali e oggi il motu più fotografato di Bora Bora. I giri della laguna sbarcano qui.', tip: 'Chiedi alla guida del giro in laguna di fermarsi a Motu Tapu al mattino, quando la vetta dell’Otemanu di fronte è in piena luce.' },
      },
    },
    // Moorea
    {
      id: 'moorea-belvedere', city: 'moorea', category: 'attraction', spot: 'insta', lat: -17.5400, lng: -149.8270, image: 'oXucCF6tep0',
      rating: 4.8, reviews: 5100, tags: ['views', 'photo', 'mountains'], price: { kind: 'free' }, hours: 'always',
      address: 'Route des Ananas, Opunohu 98728',
      text: {
        ru: { name: 'Смотровая площадка Бельведер', description: 'Площадка высоко в долине Опунуху, откуда видны сразу обе бухты — Кука и Опунуху — и разделяющая их гора Роту. Дорога сюда идёт мимо ананасовых плантаций.', tip: 'Приезжайте утром, пока над вершинами не собрались облака, и снимайте с левого края площадки — так в кадр попадают обе бухты и пик Роту.' },
        en: { name: 'Belvedere Lookout', description: 'A lookout high in the Opunohu valley with a view over both bays, Cook’s and Opunohu, and Mount Rotui between them. The road up passes pineapple plantations.', tip: 'Come in the morning before clouds gather over the peaks and shoot from the left side of the platform, so both bays and Rotui fit in the frame.' },
        es: { name: 'Mirador del Belvédère', description: 'Un mirador en lo alto del valle de Opunohu con vistas a las dos bahías, la de Cook y la de Opunohu, y al monte Rotui que las separa. La carretera de subida pasa entre plantaciones de piña.', tip: 'Ven por la mañana, antes de que las nubes cubran las cumbres, y dispara desde el lado izquierdo del mirador para encuadrar las dos bahías y el Rotui.' },
        de: { name: 'Aussichtspunkt Belvedere', description: 'Ein Aussichtspunkt hoch im Opunohu-Tal mit Blick auf beide Buchten, Cook’s Bay und Opunohu Bay, und den Mount Rotui dazwischen. Die Straße hinauf führt an Ananasplantagen vorbei.', tip: 'Komm morgens, bevor sich Wolken über den Gipfeln sammeln, und fotografier von der linken Seite der Plattform, dann passen beide Buchten und der Rotui ins Bild.' },
        fr: { name: 'Belvédère de Moorea', description: 'Un point de vue perché dans la vallée d’Opunohu, qui embrasse les deux baies, celles de Cook et d’Opunohu, et le mont Rotui qui les sépare. La route qui y monte traverse les champs d’ananas.', tip: 'Venez le matin, avant que les nuages ne coiffent les sommets, et cadrez depuis le côté gauche de la plateforme pour réunir les deux baies et le Rotui.' },
        it: { name: 'Belvedere di Moorea', description: 'Un punto panoramico in alto nella valle di Opunohu, con vista su entrambe le baie, di Cook e di Opunohu, e sul monte Rotui che le separa. La strada che sale attraversa le piantagioni di ananas.', tip: 'Vieni al mattino, prima che le nuvole coprano le vette, e scatta dal lato sinistro della piazzola per inquadrare le due baie e il Rotui.' },
      },
    },
    {
      id: 'moorea-cooks-bay', city: 'moorea', category: 'nature', lat: -17.5000, lng: -149.8180, image: 'CcoALq4fGDw',
      rating: 4.7, reviews: 3800, tags: ['nature', 'mountains', 'kayak'], price: { kind: 'free' }, hours: 'always',
      address: 'Baie de Cook, Paopao 98728',
      text: {
        ru: { name: 'Бухта Кука', description: 'Глубокая бухта, глубоко врезающаяся в остров между зелёными пиками, — одна из самых живописных в Тихом океане. На её берегах стоит деревня Паопао с рыбным рынком и маленьким портом.', tip: 'Возьмите каяк или паддлборд в одном из прибрежных отелей и выходите на воду на рассвете, когда бухта совершенно спокойна.' },
        en: { name: 'Cook’s Bay', description: 'A deep bay cutting far into the island between green peaks, one of the most scenic in the Pacific. On its shore stands the village of Paopao with a fish market and a small harbour.', tip: 'Rent a kayak or paddleboard at one of the shoreline hotels and head out at sunrise, when the bay is perfectly still.' },
        es: { name: 'Bahía de Cook', description: 'Una profunda bahía que se adentra en la isla entre picos verdes, una de las más pintorescas del Pacífico. En su orilla está el pueblo de Paopao, con un mercado de pescado y un pequeño puerto.', tip: 'Alquila un kayak o una tabla de pádel en uno de los hoteles de la orilla y sal al agua al amanecer, cuando la bahía está totalmente en calma.' },
        de: { name: 'Cook’s Bay', description: 'Eine tiefe Bucht, die sich zwischen grünen Gipfeln weit in die Insel schneidet – eine der malerischsten im Pazifik. An ihrem Ufer liegt das Dorf Paopao mit Fischmarkt und kleinem Hafen.', tip: 'Leih dir bei einem der Uferhotels ein Kajak oder SUP und paddle bei Sonnenaufgang los, wenn die Bucht spiegelglatt ist.' },
        fr: { name: 'Baie de Cook', description: 'Une baie profonde qui s’enfonce loin dans l’île entre des pics verdoyants, l’une des plus belles du Pacifique. Sur sa rive se trouve le village de Paopao, avec son marché aux poissons et son petit port.', tip: 'Louez un kayak ou un paddle dans l’un des hôtels du bord de l’eau et partez au lever du soleil, quand la baie est parfaitement calme.' },
        it: { name: 'Baia di Cook', description: 'Una baia profonda che si insinua nell’isola tra picchi verdi, tra le più scenografiche del Pacifico. Sulla riva sorge il villaggio di Paopao, con un mercato del pesce e un piccolo porto.', tip: 'Noleggia un kayak o un SUP in uno degli hotel sulla riva e parti all’alba, quando la baia è perfettamente immobile.' },
      },
    },
    {
      id: 'moorea-stingray-sandbank', city: 'moorea', category: 'nature', lat: -17.4890, lng: -149.8780, image: 'oXucCF6tep0',
      rating: 4.7, reviews: 4600, tags: ['wildlife', 'diving', 'islands'], price: { kind: 'from', amount: 7000, currency: 'XPF' }, hours: '08:00–16:00',
      address: 'Motu Fareone, Haapiti 98728',
      text: {
        ru: { name: 'Отмель со скатами', description: 'Песчаная отмель в лагуне у северо-западного побережья, где по пояс в воде к вам подплывают хвостоколы и чёрнопёрые рифовые акулы. Это главное приключение Муреа.', tip: 'Выбирайте тур с обедом на соседнем моту и берите маску: в нескольких метрах от отмели начинаются коралловые сады.' },
        en: { name: 'Stingray sandbank', description: 'A sandbank in the lagoon off the north-west coast where, standing waist-deep, you are approached by stingrays and blacktip reef sharks. It is Moorea’s signature adventure.', tip: 'Choose a tour with lunch on a nearby motu and bring a mask, as coral gardens begin a few metres from the sandbank.' },
        es: { name: 'Banco de arena de las rayas', description: 'Un banco de arena en la laguna frente a la costa noroeste donde, con el agua por la cintura, se te acercan rayas y tiburones de puntas negras. Es la gran aventura de Moorea.', tip: 'Elige una excursión con almuerzo en un motu cercano y lleva gafas de buceo: a pocos metros del banco empiezan los jardines de coral.' },
        de: { name: 'Rochen-Sandbank', description: 'Eine Sandbank in der Lagune vor der Nordwestküste, wo dir hüfttief im Wasser Stachelrochen und Schwarzspitzen-Riffhaie entgegenschwimmen. Das ist Mooreas Abenteuer schlechthin.', tip: 'Wähl eine Tour mit Mittagessen auf einem nahen Motu und nimm eine Maske mit, denn wenige Meter von der Sandbank beginnen Korallengärten.' },
        fr: { name: 'Banc de sable des raies', description: 'Un banc de sable dans le lagon au large de la côte nord-ouest où, de l’eau jusqu’à la taille, raies pastenagues et requins à pointes noires viennent à votre rencontre. C’est l’aventure phare de Moorea.', tip: 'Choisissez une sortie avec déjeuner sur un motu voisin et emportez un masque : les jardins de corail commencent à quelques mètres du banc.' },
        it: { name: 'Banco di sabbia delle razze', description: 'Un banco di sabbia nella laguna al largo della costa nord-ovest dove, con l’acqua alla vita, ti si avvicinano razze e squali pinna nera. È l’avventura simbolo di Moorea.', tip: 'Scegli un’escursione con pranzo su un motu vicino e porta la maschera: a pochi metri dal banco iniziano i giardini di corallo.' },
      },
    },
    {
      id: 'moorea-marae-titiroa', city: 'moorea', category: 'attraction', spot: 'hidden', lat: -17.5360, lng: -149.8290, image: 'eF1h1HP7Tvo',
      rating: 4.5, reviews: 1100, tags: ['history', 'culture', 'hiking'], price: { kind: 'free' }, hours: 'always',
      address: 'Vallée d’Opunohu, Moorea 98728',
      text: {
        ru: { name: 'Марае Титироа', description: 'Каменные платформы древних полинезийских святилищ, скрытые в тени огромных каштанов мапе в долине Опунуху. Здесь проходили церемонии, а рядом сохранились площадки для стрельбы из лука.', tip: 'Остановитесь по дороге к Бельведеру у указателя «Marae Titiroa» и пройдите по лесной тропе — большинство туристов проезжает мимо.' },
        en: { name: 'Marae Titiroa', description: 'Stone platforms of ancient Polynesian sanctuaries hidden in the shade of giant mape chestnut trees in the Opunohu valley. Ceremonies were held here, and archery platforms survive nearby.', tip: 'Stop at the “Marae Titiroa” sign on the way up to the Belvedere and follow the forest path, as most visitors drive straight past.' },
        es: { name: 'Marae Titiroa', description: 'Plataformas de piedra de antiguos santuarios polinesios ocultas a la sombra de enormes castaños mape en el valle de Opunohu. Aquí se celebraban ceremonias, y cerca se conservan plataformas de tiro con arco.', tip: 'Para junto al cartel «Marae Titiroa» de camino al Belvédère y sigue el sendero del bosque: la mayoría de los turistas pasa de largo.' },
        de: { name: 'Marae Titiroa', description: 'Steinplattformen alter polynesischer Heiligtümer, versteckt im Schatten riesiger Mape-Kastanienbäume im Opunohu-Tal. Hier fanden Zeremonien statt, und in der Nähe sind Bogenschieß-Plattformen erhalten.', tip: 'Halt auf dem Weg zum Belvedere am Schild „Marae Titiroa“ und folg dem Waldpfad – die meisten fahren einfach vorbei.' },
        fr: { name: 'Marae Titiroa', description: 'Des plateformes de pierre d’anciens sanctuaires polynésiens cachées à l’ombre d’immenses châtaigniers mape dans la vallée d’Opunohu. On y célébrait des cérémonies, et des plateformes de tir à l’arc subsistent à proximité.', tip: 'Arrêtez-vous au panneau « Marae Titiroa » en montant au belvédère et suivez le sentier forestier : la plupart des visiteurs passent sans s’arrêter.' },
        it: { name: 'Marae Titiroa', description: 'Piattaforme di pietra di antichi santuari polinesiani nascoste all’ombra di enormi castagni mape nella valle di Opunohu. Qui si svolgevano cerimonie, e vicino si conservano le piattaforme per il tiro con l’arco.', tip: 'Fermati al cartello «Marae Titiroa» salendo verso il belvedere e segui il sentiero nel bosco: la maggior parte dei visitatori tira dritto.' },
      },
    },
    {
      id: 'moorea-manutea-distillery', city: 'moorea', category: 'food', lat: -17.5050, lng: -149.8550, image: 'CcoALq4fGDw',
      rating: 4.3, reviews: 1600, tags: ['food', 'wine'], price: { kind: 'free' }, hours: '08:30–16:30',
      address: 'Opunohu, Moorea 98728',
      text: {
        ru: { name: 'Завод соков и рома Manutea', description: 'Фабрика в бухте Опунуху, где из местных ананасов, грейпфрутов и манго делают соки Rotui, а также ром и ликёры. В магазине при заводе устраивают бесплатную дегустацию.', tip: 'Попробуйте ананасовый ликёр и ром с ванилью и возьмите с собой бутылку — в отелях их продают втрое дороже.' },
        en: { name: 'Manutea juice and rum factory', description: 'A factory on Opunohu Bay that turns local pineapples, grapefruit and mangoes into Rotui juices, as well as rum and liqueurs. The factory shop offers free tastings.', tip: 'Try the pineapple liqueur and vanilla rum and take a bottle home, as hotels sell them for three times the price.' },
        es: { name: 'Fábrica de zumos y ron Manutea', description: 'Una fábrica en la bahía de Opunohu que convierte piñas, pomelos y mangos locales en los zumos Rotui, además de ron y licores. En la tienda de la fábrica hay degustación gratuita.', tip: 'Prueba el licor de piña y el ron con vainilla y llévate una botella: en los hoteles cuestan el triple.' },
        de: { name: 'Saft- und Rumfabrik Manutea', description: 'Eine Fabrik an der Opunohu Bay, die heimische Ananas, Grapefruits und Mangos zu Rotui-Säften sowie zu Rum und Likören verarbeitet. Im Werksladen gibt es kostenlose Verkostungen.', tip: 'Probier den Ananaslikör und den Vanillerum und nimm eine Flasche mit – in den Hotels kosten sie das Dreifache.' },
        fr: { name: 'Distillerie Manutea', description: 'Une usine sur la baie d’Opunohu qui transforme ananas, pamplemousses et mangues locaux en jus Rotui, ainsi qu’en rhums et liqueurs. La boutique de l’usine propose une dégustation gratuite.', tip: 'Goûtez la liqueur d’ananas et le rhum à la vanille et emportez une bouteille : les hôtels les vendent trois fois plus cher.' },
        it: { name: 'Distilleria Manutea', description: 'Una fabbrica sulla baia di Opunohu che trasforma ananas, pompelmi e manghi locali nei succhi Rotui, oltre che in rum e liquori. Nel negozio della fabbrica c’è una degustazione gratuita.', tip: 'Assaggia il liquore all’ananas e il rum alla vaniglia e portane a casa una bottiglia: negli hotel costano il triplo.' },
      },
    },
    {
      "id": "tahiti-les-trois-brasseurs",
      "city": "tahiti",
      "category": "food",
      "lat": -17.5362,
      "lng": -149.569,
      "image": "EUFPvipu16A",
      "rating": 4.2,
      "reviews": 2400,
      "tags": [
        "food",
        "nightlife"
      ],
      "price": {
        "kind": "level",
        "level": 2
      },
      "hours": "11:00–23:00",
      "address": "Boulevard Pomare, Papeete",
      "text": {
        "ru": {
          "name": "Les Trois Brasseurs",
          "description": "Пивоваренный ресторан на набережной Папеэте с собственным пивом и сытной кухней: от рыбы до запечённых мяса и пиццы. Вечером на открытой террасе шумно и весело.",
          "tip": "Закажите дегустационный набор пива и poisson cru (сырую рыбу в кокосовом молоке). Приходите в пятницу до 19:00, чтобы занять столик на террасе; платите картой или в тихоокеанских франках."
        },
        "en": {
          "name": "Les Trois Brasseurs",
          "description": "A brewpub on the Papeete waterfront with its own beer and hearty food, from fish to roasts and pizza. The open terrace is lively in the evening.",
          "tip": "Order the beer tasting set and poisson cru (raw fish in coconut milk). Come on Friday before 19:00 to claim a terrace table; pay by card or in Pacific francs."
        },
        "es": {
          "name": "Les Trois Brasseurs",
          "description": "Una cervecería con restaurante en el paseo marítimo de Papeete, con cerveza propia y platos contundentes, del pescado a los asados y la pizza. Por la noche la terraza al aire libre está muy animada.",
          "tip": "Pide la cata de cervezas y poisson cru (pescado crudo en leche de coco). Ve el viernes antes de las 19:00 para coger mesa en la terraza; se paga con tarjeta o en francos del Pacífico."
        },
        "de": {
          "name": "Les Trois Brasseurs",
          "description": "Ein Brauhaus an der Uferpromenade von Papeete mit eigenem Bier und deftiger Küche, von Fisch über Braten bis Pizza. Abends ist die offene Terrasse lebhaft.",
          "tip": "Bestell das Bier-Probierset und Poisson cru (roher Fisch in Kokosmilch). Komm freitags vor 19:00 Uhr, um einen Terrassentisch zu bekommen; bezahlt wird mit Karte oder in Pazifik-Franc."
        },
        "fr": {
          "name": "Les Trois Brasseurs",
          "description": "Une brasserie sur le front de mer de Papeete, avec sa bière maison et une cuisine copieuse, du poisson aux rôtis en passant par la pizza. Le soir, la terrasse en plein air est animée.",
          "tip": "Commandez la dégustation de bières et le poisson cru (poisson cru au lait de coco). Venez le vendredi avant 19 h pour avoir une table en terrasse ; paiement par carte ou en francs Pacifique."
        },
        "it": {
          "name": "Les Trois Brasseurs",
          "description": "Un brewpub sul lungomare di Papeete con birra propria e cucina sostanziosa, dal pesce agli arrosti e alla pizza. La sera la terrazza all’aperto è vivace.",
          "tip": "Ordina l’assaggio di birre e il poisson cru (pesce crudo nel latte di cocco). Vieni il venerdì prima delle 19:00 per avere un tavolo in terrazza; si paga con carta o in franchi del Pacifico."
        }
      }
    },
    {
      "id": "tahiti-le-belvedere",
      "city": "tahiti",
      "category": "food",
      "lat": -17.5775,
      "lng": -149.599,
      "image": "eF1h1HP7Tvo",
      "rating": 4.5,
      "reviews": 1800,
      "tags": [
        "food",
        "views",
        "romance"
      ],
      "price": {
        "kind": "level",
        "level": 3
      },
      "hours": "12:00–14:00, 18:30–21:30",
      "address": "Route du Belvédère, Punaauia",
      "text": {
        "ru": {
          "name": "Le Belvédère",
          "description": "Ресторан на склоне горы над Папеэте и Пунаауйей, где подают французскую и тихоокеанскую кухню с видом на лагуну и остров Муреа. Это излюбленное место для особых вечеров и свадеб.",
          "tip": "Закажите стол на веранде на закат за несколько дней и добирайтесь на такси или аренде: дорога серпантином. Берите куртку — вечером прохладнее, платите картой."
        },
        "en": {
          "name": "Le Belvédère",
          "description": "A hillside restaurant above Papeete and Punaauia serving French and Pacific cooking with a view over the lagoon and Moorea. It is a favourite for special evenings and weddings.",
          "tip": "Reserve a veranda table for sunset a few days ahead and arrive by taxi or rental car, as the road winds. Bring a jacket, since evenings are cooler, and pay by card."
        },
        "es": {
          "name": "Le Belvédère",
          "description": "Un restaurante en la ladera sobre Papeete y Punaauia con cocina francesa y del Pacífico y vistas a la laguna y a Moorea. Es un clásico para veladas especiales y bodas.",
          "tip": "Reserva con unos días una mesa en la veranda para el atardecer y llega en taxi o coche de alquiler, porque la carretera tiene muchas curvas. Lleva chaqueta, pues por la noche refresca; se paga con tarjeta."
        },
        "de": {
          "name": "Le Belvédère",
          "description": "Ein Restaurant am Hang über Papeete und Punaauia, das französische und pazifische Küche mit Blick auf die Lagune und Moorea serviert. Es ist beliebt für besondere Abende und Hochzeiten.",
          "tip": "Reserviere einige Tage vorher einen Veranda-Tisch zum Sonnenuntergang und komm mit Taxi oder Mietwagen, denn die Straße ist kurvig. Nimm eine Jacke mit, abends wird es kühler; bezahlt wird mit Karte."
        },
        "fr": {
          "name": "Le Belvédère",
          "description": "Un restaurant à flanc de colline au-dessus de Papeete et de Punaauia, qui sert une cuisine française et polynésienne avec vue sur le lagon et Moorea. C’est une adresse prisée pour les soirées spéciales et les mariages.",
          "tip": "Réservez quelques jours à l’avance une table sur la véranda pour le coucher du soleil et venez en taxi ou en voiture de location, la route est sinueuse. Prenez une veste, le soir est plus frais ; paiement par carte."
        },
        "it": {
          "name": "Le Belvédère",
          "description": "Un ristorante sul pendio sopra Papeete e Punaauia che serve cucina francese e del Pacifico con vista sulla laguna e su Moorea. È una scelta amata per le serate speciali e i matrimoni.",
          "tip": "Prenota qualche giorno prima un tavolo in veranda per il tramonto e arriva in taxi o in auto a noleggio, perché la strada è tortuosa. Porta una giacca, la sera è più fresca; si paga con carta."
        }
      }
    },
    {
      "id": "tahiti-arahoho-blowhole",
      "city": "tahiti",
      "category": "nature",
      "spot": "insta",
      "lat": -17.519,
      "lng": -149.39,
      "image": "rMYNmn7PttY",
      "rating": 4.5,
      "reviews": 2200,
      "tags": [
        "nature",
        "photo",
        "roadtrip"
      ],
      "price": {
        "kind": "free"
      },
      "hours": "always",
      "address": "Route de ceinture, Tiarei",
      "text": {
        "ru": {
          "name": "Гейзер Арахохо",
          "description": "Природный фонтан на восточном побережье Таити: во время прибоя вода вырывается из базальтовой трубы и взлетает над дорогой. Рядом — чёрный песчаный пляж и водопады.",
          "tip": "Приезжайте в прилив и при сильной волне и снимайте с безопасной площадки; одежда легко намокает. Не подходите к самому краю, а добираться лучше на арендованном автомобиле."
        },
        "en": {
          "name": "Arahoho Blowhole",
          "description": "A natural fountain on Tahiti’s east coast where, in heavy surf, water shoots up from a basalt tube above the road. A black-sand beach and waterfalls are nearby.",
          "tip": "Come at high tide with a strong swell and shoot from the safe platform; clothes get wet easily. Don’t stand at the edge, and travel by rental car."
        },
        "es": {
          "name": "Chorro de Arahoho",
          "description": "Una fuente natural en la costa este de Tahití donde, con el oleaje fuerte, el agua sale disparada por un tubo de basalto sobre la carretera. Cerca hay una playa de arena negra y cascadas.",
          "tip": "Ve con marea alta y mucho oleaje y haz las fotos desde la plataforma segura; la ropa se moja fácilmente. No te acerques al borde y viaja en coche de alquiler."
        },
        "de": {
          "name": "Arahoho-Blasloch",
          "description": "Eine natürliche Fontäne an der Ostküste Tahitis, bei der bei starker Brandung Wasser aus einer Basaltröhre über die Straße schießt. In der Nähe liegen ein Strand mit schwarzem Sand und Wasserfälle.",
          "tip": "Komm bei Flut und starkem Wellengang und fotografier von der sicheren Plattform; die Kleidung wird leicht nass. Stell dich nicht an den Rand und reise mit dem Mietwagen an."
        },
        "fr": {
          "name": "Souffleur d’Arahoho",
          "description": "Une fontaine naturelle de la côte est de Tahiti où, par forte houle, l’eau jaillit d’un tube de basalte au-dessus de la route. Une plage de sable noir et des cascades se trouvent à proximité.",
          "tip": "Venez à marée haute avec une forte houle et photographiez depuis la plateforme sécurisée ; les vêtements se mouillent vite. Ne vous approchez pas du bord et venez en voiture de location."
        },
        "it": {
          "name": "Soffione di Arahoho",
          "description": "Una fontana naturale sulla costa orientale di Tahiti dove, con il mare mosso, l’acqua schizza da un tubo di basalto sopra la strada. Poco distante ci sono una spiaggia di sabbia nera e cascate.",
          "tip": "Vai con l’alta marea e il mare grosso e scatta dalla piattaforma sicura; i vestiti si bagnano facilmente. Non avvicinarti al bordo e raggiungi il posto in auto a noleggio."
        }
      }
    },
    {
      "id": "tahiti-faarumai-waterfalls",
      "city": "tahiti",
      "category": "nature",
      "spot": "insta",
      "lat": -17.5233,
      "lng": -149.3733,
      "image": "eF1h1HP7Tvo",
      "rating": 4.4,
      "reviews": 1700,
      "tags": [
        "waterfalls",
        "jungle",
        "photo"
      ],
      "price": {
        "kind": "free"
      },
      "hours": "08:00–17:00",
      "address": "Route de ceinture, Arue",
      "text": {
        "ru": {
          "name": "Водопады Фаарумаи",
          "description": "Три водопада в тропическом ущелье на северо-востоке Таити: к самому высокому ведёт короткая тропа через влажный лес и ручьи. Вода падает с 80-метровой высоты.",
          "tip": "Снимайте у основания, встав в потоке тумана. Обувь с хорошим протектором и дождевик пригодятся: тропа скользкая, а после дождя подниматься небезопасно."
        },
        "en": {
          "name": "Faarumai waterfalls",
          "description": "Three waterfalls in a tropical gorge in north-east Tahiti, with the tallest reached by a short trail through damp forest and streams. The water falls from around 80 metres.",
          "tip": "Shoot at the base, standing in the mist. Shoes with good grip and a rain jacket help, as the trail is slippery and unsafe after rain."
        },
        "es": {
          "name": "Cascadas de Faarumai",
          "description": "Tres cascadas en un barranco tropical del noreste de Tahití; a la más alta se llega por un corto sendero a través de bosque húmedo y arroyos. El agua cae desde unos 80 metros.",
          "tip": "Haz las fotos en la base, dentro de la bruma. Unas botas con buen agarre y un chubasquero ayudan: el sendero resbala y tras la lluvia no es seguro."
        },
        "de": {
          "name": "Faarumai-Wasserfälle",
          "description": "Drei Wasserfälle in einer tropischen Schlucht im Nordosten Tahitis; zum höchsten führt ein kurzer Weg durch feuchten Wald und über Bäche. Das Wasser fällt aus rund 80 Metern.",
          "tip": "Fotografier am Fuß, mitten im Sprühnebel. Schuhe mit gutem Profil und eine Regenjacke sind hilfreich, der Weg ist rutschig und nach Regen unsicher."
        },
        "fr": {
          "name": "Cascades de Faarumai",
          "description": "Trois cascades dans un ravin tropical du nord-est de Tahiti ; la plus haute est accessible par un court sentier à travers la forêt humide et les ruisseaux. L’eau tombe d’environ 80 mètres.",
          "tip": "Photographiez au pied, dans les embruns. Des chaussures antidérapantes et un imperméable aident : le sentier est glissant et dangereux après la pluie."
        },
        "it": {
          "name": "Cascate di Faarumai",
          "description": "Tre cascate in una gola tropicale nel nord-est di Tahiti; la più alta si raggiunge con un breve sentiero tra foresta umida e ruscelli. L’acqua cade da circa 80 metri.",
          "tip": "Scatta alla base, in mezzo alla nebbia d’acqua. Scarpe con buona aderenza e un k-way aiutano: il sentiero è scivoloso e dopo la pioggia non è sicuro."
        }
      }
    },
    {
      "id": "bora-bora-yacht-club",
      "city": "bora-bora",
      "category": "food",
      "lat": -16.5185,
      "lng": -151.7415,
      "image": "CcoALq4fGDw",
      "rating": 4.4,
      "reviews": 3400,
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
      "address": "Vaitape, Bora Bora",
      "text": {
        "ru": {
          "name": "Bora Bora Yacht Club",
          "description": "Ресторан у причала Вайтапе, куда заходят яхтсмены и приезжают местные: свежая рыба, поке и холодное пиво с видом на лагуну и гору Отеману. Это один из немногих мест на острове, где можно поесть недорого.",
          "tip": "Закажите тунца на гриле или poisson cru и садитесь на террасе на закате. Платите картой; приезжайте до 19:00, пока есть свободные столики."
        },
        "en": {
          "name": "Bora Bora Yacht Club",
          "description": "A restaurant by the Vaitape pier where sailors and locals eat: fresh fish, poke and cold beer with a view over the lagoon and Mount Otemanu. One of the few places on the island where a meal is affordable.",
          "tip": "Order the grilled tuna or poisson cru and sit on the terrace at sunset. Pay by card; arrive before 19:00 while tables are free."
        },
        "es": {
          "name": "Bora Bora Yacht Club",
          "description": "Un restaurante junto al muelle de Vaitape donde comen navegantes y locales: pescado fresco, poke y cerveza fría con vistas a la laguna y al monte Otemanu. Uno de los pocos sitios de la isla donde se come a buen precio.",
          "tip": "Pide el atún a la parrilla o el poisson cru y siéntate en la terraza al atardecer. Se paga con tarjeta; llega antes de las 19:00, mientras quedan mesas."
        },
        "de": {
          "name": "Bora Bora Yacht Club",
          "description": "Ein Restaurant an der Anlegestelle von Vaitape, in dem Segler und Einheimische essen: frischer Fisch, Poke und kaltes Bier mit Blick auf die Lagune und den Mount Otemanu. Einer der wenigen Orte der Insel, an denen man günstig isst.",
          "tip": "Bestell den gegrillten Thunfisch oder Poisson cru und setz dich zum Sonnenuntergang auf die Terrasse. Bezahlt wird mit Karte; komm vor 19:00 Uhr, solange Tische frei sind."
        },
        "fr": {
          "name": "Bora Bora Yacht Club",
          "description": "Un restaurant près de l’embarcadère de Vaitape où mangent plaisanciers et habitants : poisson frais, poke et bière fraîche avec vue sur le lagon et le mont Otemanu. L’un des rares endroits de l’île où l’on mange à prix raisonnable.",
          "tip": "Commandez le thon grillé ou le poisson cru et installez-vous sur la terrasse au coucher du soleil. Paiement par carte ; arrivez avant 19 h tant qu’il reste des tables."
        },
        "it": {
          "name": "Bora Bora Yacht Club",
          "description": "Un ristorante vicino al molo di Vaitape dove mangiano velisti e locali: pesce fresco, poke e birra fredda con vista sulla laguna e sul monte Otemanu. Uno dei pochi posti dell’isola dove si mangia a prezzi accessibili.",
          "tip": "Ordina il tonno alla griglia o il poisson cru e siediti in terrazza al tramonto. Si paga con carta; arriva prima delle 19:00, finché ci sono tavoli liberi."
        }
      }
    },
    {
      "id": "bora-bora-villa-mahana",
      "city": "bora-bora",
      "category": "food",
      "lat": -16.537,
      "lng": -151.7335,
      "image": "CcoALq4fGDw",
      "rating": 4.7,
      "reviews": 900,
      "tags": [
        "food",
        "luxury",
        "romance"
      ],
      "price": {
        "kind": "level",
        "level": 3
      },
      "hours": "19:00–22:00",
      "address": "Pointe Matira, Bora Bora",
      "text": {
        "ru": {
          "name": "Villa Mahana",
          "description": "Небольшой ресторан в вилле на мысе Матира, где шеф готовит современную французскую кухню с полинезийскими вкусами. В зале всего несколько столов, а сервис камерный.",
          "tip": "Столик нужно бронировать за 2–3 недели и приходить к 19:00. Выберите дегустационное меню с рыбой и вином, платите картой; смените пляжную одежду на лёгкую вечернюю."
        },
        "en": {
          "name": "Villa Mahana",
          "description": "A small villa restaurant on Matira Point where the chef cooks modern French food with Polynesian flavours. Only a few tables are set, and the service is intimate.",
          "tip": "Reserve two to three weeks ahead and arrive at 19:00. Pick the tasting menu with fish and wine and pay by card; swap beachwear for light evening clothes."
        },
        "es": {
          "name": "Villa Mahana",
          "description": "Un pequeño restaurante en una villa de Matira Point donde el chef prepara cocina francesa moderna con sabores polinesios. Solo hay unas pocas mesas y el servicio es íntimo.",
          "tip": "Reserva con dos o tres semanas y llega a las 19:00. Elige el menú degustación con pescado y vino y paga con tarjeta; cambia la ropa de playa por una ligera de noche."
        },
        "de": {
          "name": "Villa Mahana",
          "description": "Ein kleines Villa-Restaurant auf Matira Point, in dem der Koch moderne französische Küche mit polynesischen Aromen zubereitet. Es sind nur wenige Tische gedeckt, der Service ist persönlich.",
          "tip": "Reserviere zwei bis drei Wochen im Voraus und komm um 19:00 Uhr. Wähl das Degustationsmenü mit Fisch und Wein und zahl mit Karte; tausch die Strandkleidung gegen leichte Abendgarderobe."
        },
        "fr": {
          "name": "Villa Mahana",
          "description": "Un petit restaurant dans une villa de la pointe Matira, où le chef prépare une cuisine française moderne aux saveurs polynésiennes. Seules quelques tables sont dressées et le service est intime.",
          "tip": "Réservez deux à trois semaines à l’avance et arrivez à 19 h. Choisissez le menu dégustation avec poisson et vin et payez par carte ; troquez la tenue de plage contre une tenue légère de soirée."
        },
        "it": {
          "name": "Villa Mahana",
          "description": "Un piccolo ristorante in una villa a Punta Matira dove lo chef prepara cucina francese moderna con sapori polinesiani. Ci sono pochi tavoli e il servizio è intimo.",
          "tip": "Prenota due o tre settimane prima e arriva alle 19:00. Scegli il menù degustazione con pesce e vino e paga con carta; cambia l’abbigliamento da spiaggia con uno leggero da sera."
        }
      }
    },
    {
      "id": "bora-bora-snack-matira",
      "city": "bora-bora",
      "category": "food",
      "lat": -16.538,
      "lng": -151.7295,
      "image": "maJQ-Gl7E3M",
      "rating": 4.4,
      "reviews": 2200,
      "tags": [
        "food",
        "beaches",
        "streetfood"
      ],
      "price": {
        "kind": "level",
        "level": 1
      },
      "hours": "10:00–17:00",
      "address": "Plage de Matira, Bora Bora",
      "text": {
        "ru": {
          "name": "Snack Matira",
          "description": "Пляжная закусочная на песке Матира: сэндвичи, поке, рыбные тако и тропические коктейли. Столы стоят прямо у воды, а официанты разносят заказ босиком.",
          "tip": "Возьмите поке с тунцом и ледяной сок из свежих фруктов и садитесь в тени под пальмой. Платите наличными в тихоокеанских франках — карту принимают не всегда."
        },
        "en": {
          "name": "Snack Matira",
          "description": "A beach snack bar on the sands of Matira with sandwiches, poke, fish tacos and tropical cocktails. Tables stand at the water’s edge and servers deliver orders barefoot.",
          "tip": "Order tuna poke and an iced fresh-fruit juice and sit in the shade of a palm. Pay cash in Pacific francs, as cards are not always accepted."
        },
        "es": {
          "name": "Snack Matira",
          "description": "Un chiringuito de playa sobre la arena de Matira con sándwiches, poke, tacos de pescado y cócteles tropicales. Las mesas están junto al agua y los camareros sirven descalzos.",
          "tip": "Pide poke de atún y un zumo helado de fruta fresca y siéntate a la sombra de una palmera. Paga en efectivo en francos del Pacífico, porque no siempre aceptan tarjeta."
        },
        "de": {
          "name": "Snack Matira",
          "description": "Eine Strandbude am Sand von Matira mit Sandwiches, Poke, Fischtacos und tropischen Cocktails. Die Tische stehen am Wasser, und die Bedienung serviert barfuß.",
          "tip": "Bestell Thunfisch-Poke und einen eisgekühlten Frischfruchtsaft und setz dich in den Schatten einer Palme. Zahl bar in Pazifik-Franc, Karten werden nicht immer akzeptiert."
        },
        "fr": {
          "name": "Snack Matira",
          "description": "Un snack de plage sur le sable de Matira avec sandwichs, poke, tacos de poisson et cocktails tropicaux. Les tables sont au bord de l’eau et le service se fait pieds nus.",
          "tip": "Commandez un poke de thon et un jus de fruits frais glacé et asseyez-vous à l’ombre d’un palmier. Payez en espèces en francs Pacifique, la carte n’est pas toujours acceptée."
        },
        "it": {
          "name": "Snack Matira",
          "description": "Uno snack bar sulla sabbia di Matira con panini, poke, tacos di pesce e cocktail tropicali. I tavoli sono sulla riva e il servizio è a piedi nudi.",
          "tip": "Ordina un poke di tonno e un succo di frutta fresca ghiacciato e siediti all’ombra di una palma. Paga in contanti in franchi del Pacifico, perché non sempre accettano carte."
        }
      }
    },
    {
      "id": "bora-bora-mount-otemanu",
      "city": "bora-bora",
      "category": "nature",
      "spot": "insta",
      "lat": -16.503,
      "lng": -151.754,
      "image": "LXNSgedt1jM",
      "rating": 4.9,
      "reviews": 8700,
      "tags": [
        "mountains",
        "views",
        "photo"
      ],
      "price": {
        "kind": "free"
      },
      "hours": "always",
      "address": "Vaitape, Bora Bora",
      "text": {
        "ru": {
          "name": "Гора Отеману",
          "description": "Базальтовый пик в 727 метров — вулканическое ядро острова и главный символ Бора-Бора. Он виден почти отовсюду, а лучше всего — с воды и со стороны Матиры.",
          "tip": "Снимайте на рассвете с пляжа Матира или с лодки в лагуне, когда пик не прячется в облаках; поднимайтесь в кадр по пояс в воде. Саму гору не штурмуйте: подъём опасен."
        },
        "en": {
          "name": "Mount Otemanu",
          "description": "A 727 m basalt peak, the volcanic core of the island and the symbol of Bora Bora. It is visible almost everywhere, best from the water and from the Matira side.",
          "tip": "Shoot at dawn from Matira beach or from a lagoon boat, when the peak hasn’t vanished into cloud; stand waist-deep in the water for the frame. Don’t try to climb the mountain, as it is dangerous."
        },
        "es": {
          "name": "Monte Otemanu",
          "description": "Un pico basáltico de 727 m, el núcleo volcánico de la isla y el símbolo de Bora Bora. Se ve casi desde todas partes, mejor desde el agua y desde el lado de Matira.",
          "tip": "Haz las fotos al amanecer desde la playa de Matira o desde un barco en la laguna, cuando el pico no se esconde entre nubes; métete en el agua hasta la cintura para el encuadre. No intentes escalar la montaña: es peligroso."
        },
        "de": {
          "name": "Mount Otemanu",
          "description": "Ein 727 m hoher Basaltgipfel, der vulkanische Kern der Insel und das Wahrzeichen von Bora Bora. Er ist fast überall zu sehen, am schönsten vom Wasser und von der Matira-Seite.",
          "tip": "Fotografier bei Sonnenaufgang vom Strand Matira oder von einem Lagunenboot, wenn der Gipfel nicht in Wolken steckt; stell dich dafür bis zur Hüfte ins Wasser. Versuch nicht, den Berg zu besteigen, das ist gefährlich."
        },
        "fr": {
          "name": "Mont Otemanu",
          "description": "Un pic de basalte de 727 m, noyau volcanique de l’île et symbole de Bora Bora. Il est visible presque partout, surtout depuis l’eau et du côté de Matira.",
          "tip": "Photographiez à l’aube depuis la plage de Matira ou depuis un bateau dans le lagon, quand le pic n’est pas dans les nuages ; mettez-vous dans l’eau jusqu’à la taille pour le cadre. N’essayez pas d’escalader la montagne, c’est dangereux."
        },
        "it": {
          "name": "Monte Otemanu",
          "description": "Un picco di basalto di 727 m, il nucleo vulcanico dell’isola e il simbolo di Bora Bora. Si vede quasi da ogni parte, meglio dall’acqua e dal lato di Matira.",
          "tip": "Scatta all’alba dalla spiaggia di Matira o da una barca in laguna, quando la cima non è nascosta dalle nuvole; entra in acqua fino alla vita per l’inquadratura. Non tentare di scalare la montagna: è pericoloso."
        }
      }
    },
    {
      "id": "bora-bora-matira-point",
      "city": "bora-bora",
      "category": "nature",
      "spot": "insta",
      "lat": -16.5465,
      "lng": -151.7289,
      "image": "maJQ-Gl7E3M",
      "rating": 4.7,
      "reviews": 3800,
      "tags": [
        "beaches",
        "sunset",
        "photo"
      ],
      "price": {
        "kind": "free"
      },
      "hours": "always",
      "address": "Pointe Matira, Bora Bora",
      "text": {
        "ru": {
          "name": "Мыс Матира",
          "description": "Южная оконечность острова с узкой песчаной косой, где с двух сторон плещется лагуна. Вдали видны бунгало на воде и силуэт Отеману.",
          "tip": "Приходите на закате: идите по песку до самой оконечности и встаньте спиной к камере лицом к лагуне. Берите лёгкую светлую одежду и обувь для берега."
        },
        "en": {
          "name": "Matira Point",
          "description": "The southern tip of the island with a narrow sand spit and the lagoon lapping on both sides. Overwater bungalows and the silhouette of Otemanu show in the distance.",
          "tip": "Come at sunset: walk along the sand to the very tip and stand with your back to the camera facing the lagoon. Wear light, pale clothes and shoes for the shore."
        },
        "es": {
          "name": "Pointe Matira",
          "description": "La punta sur de la isla, con una lengua de arena estrecha bañada por la laguna a ambos lados. A lo lejos se ven los bungalós sobre el agua y la silueta del Otemanu.",
          "tip": "Ve al atardecer: camina por la arena hasta la misma punta y colócate de espaldas a la cámara mirando a la laguna. Lleva ropa clara y ligera y calzado para la orilla."
        },
        "de": {
          "name": "Matira Point",
          "description": "Die Südspitze der Insel mit einer schmalen Sandzunge, an die die Lagune von beiden Seiten schlägt. In der Ferne sieht man Überwasserbungalows und die Silhouette des Otemanu.",
          "tip": "Komm zum Sonnenuntergang: Geh über den Sand bis zur äußersten Spitze und stell dich mit dem Rücken zur Kamera Richtung Lagune. Trag leichte, helle Kleidung und Schuhe fürs Ufer."
        },
        "fr": {
          "name": "Pointe Matira",
          "description": "L’extrémité sud de l’île, avec une étroite langue de sable léchée par le lagon des deux côtés. Au loin se dessinent les bungalows sur pilotis et la silhouette de l’Otemanu.",
          "tip": "Venez au coucher du soleil : marchez sur le sable jusqu’au bout et placez-vous de dos face au lagon. Portez des vêtements légers et clairs et des chaussures pour le rivage."
        },
        "it": {
          "name": "Punta Matira",
          "description": "L’estremità meridionale dell’isola, con una stretta lingua di sabbia lambita dalla laguna su entrambi i lati. In lontananza si vedono i bungalow sull’acqua e la sagoma dell’Otemanu.",
          "tip": "Vai al tramonto: cammina sulla sabbia fino alla punta e mettiti di spalle all’obiettivo, rivolto alla laguna. Indossa abiti leggeri e chiari e scarpe da riva."
        }
      }
    },
    {
      "id": "moorea-alfredos",
      "city": "moorea",
      "category": "food",
      "lat": -17.512,
      "lng": -149.826,
      "image": "CcoALq4fGDw",
      "rating": 4.3,
      "reviews": 1600,
      "tags": [
        "food",
        "views"
      ],
      "price": {
        "kind": "level",
        "level": 2
      },
      "hours": "11:00–21:30",
      "address": "Route de ceinture, Pao Pao (Cook’s Bay)",
      "text": {
        "ru": {
          "name": "Alfredo’s",
          "description": "Давний ресторан на берегу бухты Кука, где подают итальянскую и полинезийскую кухню — пасту, пиццу и свежую рыбу. С террасы виден хребет Муреа и яхты в заливе.",
          "tip": "Закажите рыбу дня или пасту с морепродуктами и садитесь на террасе. Бронь не обязательна, но на закате лучше подстраховаться; платите картой."
        },
        "en": {
          "name": "Alfredo’s",
          "description": "A long-running restaurant on Cook’s Bay serving Italian and Polynesian food: pasta, pizza and fresh fish. The terrace looks out on Moorea’s ridges and the yachts in the bay.",
          "tip": "Order the fish of the day or seafood pasta and sit on the terrace. Booking isn’t required but is wise at sunset; pay by card."
        },
        "es": {
          "name": "Alfredo’s",
          "description": "Un restaurante de siempre en la bahía de Cook que sirve cocina italiana y polinesia: pasta, pizza y pescado fresco. La terraza da a las crestas de Moorea y a los yates de la bahía.",
          "tip": "Pide el pescado del día o la pasta con marisco y siéntate en la terraza. No hace falta reservar, pero conviene al atardecer; se paga con tarjeta."
        },
        "de": {
          "name": "Alfredo’s",
          "description": "Ein alteingesessenes Restaurant an der Cook’s Bay mit italienischer und polynesischer Küche: Pasta, Pizza und frischer Fisch. Die Terrasse blickt auf Mooreas Bergkämme und die Yachten in der Bucht.",
          "tip": "Bestell den Fisch des Tages oder Meeresfrüchte-Pasta und setz dich auf die Terrasse. Eine Reservierung ist nicht nötig, zum Sonnenuntergang aber ratsam; bezahlt wird mit Karte."
        },
        "fr": {
          "name": "Alfredo’s",
          "description": "Un restaurant historique de la baie de Cook, qui sert une cuisine italienne et polynésienne : pâtes, pizza et poisson frais. La terrasse donne sur les crêtes de Moorea et les voiliers de la baie.",
          "tip": "Commandez le poisson du jour ou les pâtes aux fruits de mer et installez-vous en terrasse. Pas besoin de réserver, mais mieux vaut le faire au coucher du soleil ; paiement par carte."
        },
        "it": {
          "name": "Alfredo’s",
          "description": "Un ristorante storico sulla baia di Cook che serve cucina italiana e polinesiana: pasta, pizza e pesce fresco. La terrazza guarda le creste di Moorea e le barche a vela nella baia.",
          "tip": "Ordina il pesce del giorno o la pasta ai frutti di mare e siediti in terrazza. Non serve prenotare, ma al tramonto conviene; si paga con carta."
        }
      }
    },
    {
      "id": "moorea-les-tipaniers",
      "city": "moorea",
      "category": "food",
      "lat": -17.542,
      "lng": -149.91,
      "image": "CcoALq4fGDw",
      "rating": 4.4,
      "reviews": 1900,
      "tags": [
        "food",
        "beaches",
        "sunset"
      ],
      "price": {
        "kind": "level",
        "level": 2
      },
      "hours": "12:00–21:00",
      "address": "Pointe Hauru, Moorea",
      "text": {
        "ru": {
          "name": "Les Tipaniers",
          "description": "Пляжный ресторан у мыса Хаура с итальянской и тихоокеанской кухней: пицца из дровяной печи, паста и тунец. Столы стоят прямо под пальмами, а на закате отсюда виден остров Таити.",
          "tip": "Возьмите пиццу или тунец на гриле и займите место у воды на закате. Платите картой или наличными в тихоокеанских франках; выбирайте будни, когда тише."
        },
        "en": {
          "name": "Les Tipaniers",
          "description": "A beach restaurant at Hauru Point with Italian and Pacific cooking: wood-fired pizza, pasta and tuna. Tables sit under palms, and at sunset Tahiti shows on the horizon.",
          "tip": "Choose pizza or grilled tuna and take a seat by the water at sunset. Pay by card or cash in Pacific francs; pick a weekday for a quieter time."
        },
        "es": {
          "name": "Les Tipaniers",
          "description": "Un restaurante de playa en Hauru Point con cocina italiana y del Pacífico: pizza al horno de leña, pasta y atún. Las mesas están bajo las palmeras y al atardecer se ve Tahití en el horizonte.",
          "tip": "Pide pizza o atún a la parrilla y siéntate junto al agua al atardecer. Se paga con tarjeta o en efectivo en francos del Pacífico; elige un día laborable para ir con calma."
        },
        "de": {
          "name": "Les Tipaniers",
          "description": "Ein Strandrestaurant an der Hauru Point mit italienischer und pazifischer Küche: Holzofenpizza, Pasta und Thunfisch. Die Tische stehen unter Palmen, und bei Sonnenuntergang zeigt sich Tahiti am Horizont.",
          "tip": "Nimm Pizza oder gegrillten Thunfisch und setz dich zum Sonnenuntergang ans Wasser. Bezahlt wird mit Karte oder bar in Pazifik-Franc; wähl einen Werktag für mehr Ruhe."
        },
        "fr": {
          "name": "Les Tipaniers",
          "description": "Un restaurant de plage à la pointe Hauru, avec une cuisine italienne et du Pacifique : pizza au feu de bois, pâtes et thon. Les tables sont sous les palmiers et, au coucher du soleil, Tahiti se dessine à l’horizon.",
          "tip": "Choisissez la pizza ou le thon grillé et installez-vous au bord de l’eau au coucher du soleil. Paiement par carte ou en espèces en francs Pacifique ; préférez un jour de semaine pour plus de calme."
        },
        "it": {
          "name": "Les Tipaniers",
          "description": "Un ristorante sulla spiaggia a Punta Hauru con cucina italiana e del Pacifico: pizza al forno a legna, pasta e tonno. I tavoli sono sotto le palme e al tramonto all’orizzonte si vede Tahiti.",
          "tip": "Scegli la pizza o il tonno alla griglia e siediti in riva all’acqua al tramonto. Si paga con carta o in contanti in franchi del Pacifico; scegli un giorno feriale per più calma."
        }
      }
    },
    {
      "id": "moorea-vaiare-roulottes",
      "city": "moorea",
      "category": "food",
      "lat": -17.526,
      "lng": -149.784,
      "image": "EUFPvipu16A",
      "rating": 4.2,
      "reviews": 1100,
      "tags": [
        "streetfood",
        "food",
        "market"
      ],
      "price": {
        "kind": "level",
        "level": 1
      },
      "hours": "10:00–20:00",
      "address": "Embarcadère de Vaiare, Moorea",
      "text": {
        "ru": {
          "name": "Рулотты у пристани Вайяре",
          "description": "Несколько уличных фургончиков у причала, где паромы привозят людей с Таити. Подают жареную рыбу, китайскую лапшу, сэндвичи и сладкие блинчики за скромную цену.",
          "tip": "Берите жареную рыбу или чоу-мейн с собой и ешьте на причале в ожидании парома. Берите наличные в тихоокеанских франках; к вечеру выбор меньше."
        },
        "en": {
          "name": "Vaiare ferry quay roulottes",
          "description": "A handful of food trucks by the quay where ferries bring people from Tahiti. They sell fried fish, Chinese noodles, sandwiches and sweet crêpes at modest prices.",
          "tip": "Take fried fish or chow mein to go and eat on the quay while waiting for the ferry. Bring cash in Pacific francs; the choice shrinks towards evening."
        },
        "es": {
          "name": "Roulottes del muelle de Vaiare",
          "description": "Un puñado de food trucks junto al muelle donde los ferris traen gente desde Tahití. Venden pescado frito, fideos chinos, sándwiches y crepes dulces a precios modestos.",
          "tip": "Pide pescado frito o chow mein para llevar y cómelo en el muelle mientras esperas el ferri. Lleva efectivo en francos del Pacífico; por la tarde hay menos variedad."
        },
        "de": {
          "name": "Roulottes am Fähranleger Vaiare",
          "description": "Eine Handvoll Foodtrucks am Anleger, an dem die Fähren Menschen aus Tahiti bringen. Sie verkaufen gebratenen Fisch, chinesische Nudeln, Sandwiches und süße Crêpes zu bescheidenen Preisen.",
          "tip": "Hol dir gebratenen Fisch oder Chow Mein zum Mitnehmen und iss auf dem Kai, während du auf die Fähre wartest. Bring Bargeld in Pazifik-Franc mit; gegen Abend schrumpft die Auswahl."
        },
        "fr": {
          "name": "Roulottes du quai de Vaiare",
          "description": "Quelques food trucks près du quai où les ferries amènent des passagers de Tahiti. Ils vendent poisson frit, nouilles chinoises, sandwichs et crêpes sucrées à petit prix.",
          "tip": "Prenez du poisson frit ou du chow mein à emporter et mangez sur le quai en attendant le ferry. Prévoyez des espèces en francs Pacifique ; le choix se réduit en fin de journée."
        },
        "it": {
          "name": "Roulotte del molo di Vaiare",
          "description": "Una manciata di food truck vicino al molo dove i traghetti portano la gente da Tahiti. Vendono pesce fritto, noodle cinesi, panini e crêpe dolci a prezzi modici.",
          "tip": "Prendi pesce fritto o chow mein da asporto e mangia sul molo aspettando il traghetto. Porta contanti in franchi del Pacifico; verso sera la scelta si riduce."
        }
      }
    },
    {
      "id": "moorea-opunohu-bay",
      "city": "moorea",
      "category": "nature",
      "spot": "insta",
      "lat": -17.507,
      "lng": -149.85,
      "image": "oXucCF6tep0",
      "rating": 4.8,
      "reviews": 4400,
      "tags": [
        "mountains",
        "views",
        "photo",
        "kayak"
      ],
      "price": {
        "kind": "free"
      },
      "hours": "always",
      "address": "Baie d’Opunohu, Moorea",
      "text": {
        "ru": {
          "name": "Бухта Опунохо",
          "description": "Зелёная бухта с острыми вулканическими пиками Роти и Мауа Роа, одна из самых красивых панорам Муреа. На берегу — пальмовые рощи, полуразрушенные марае и тихая вода для каяков.",
          "tip": "Приезжайте на рассвете или в сумерки, когда пики мягко освещены; фотографу лучше встать на берегу и снимать с воды. Берите каяк или стоячую доску для отражений."
        },
        "en": {
          "name": "Opunohu Bay",
          "description": "A green bay beneath the sharp volcanic peaks of Rotui and Mauaroa, one of the loveliest panoramas on Moorea. Palm groves, ruined marae and calm water for kayaks fill the shore.",
          "tip": "Come at dawn or dusk when the peaks are softly lit; the photographer should stand on the shore and shoot from the water’s edge. Bring a kayak or paddleboard for reflections."
        },
        "es": {
          "name": "Bahía de Opunohu",
          "description": "Una bahía verde bajo los afilados picos volcánicos de Rotui y Mauaroa, uno de los panoramas más bellos de Moorea. En la orilla hay palmerales, marae en ruinas y agua tranquila para kayaks.",
          "tip": "Ve al amanecer o al anochecer, cuando los picos están suavemente iluminados; quien fotografía debe ponerse en la orilla y disparar al borde del agua. Lleva un kayak o una tabla de paddle para los reflejos."
        },
        "de": {
          "name": "Opunohu-Bucht",
          "description": "Eine grüne Bucht unter den scharfen Vulkangipfeln von Rotui und Mauaroa, eines der schönsten Panoramen Mooreas. Palmenhaine, Marae-Ruinen und ruhiges Wasser für Kajaks säumen das Ufer.",
          "tip": "Komm bei Morgen- oder Abenddämmerung, wenn die Gipfel sanft beleuchtet sind; der Fotograf sollte am Ufer stehen und vom Wasserrand aus fotografieren. Nimm ein Kajak oder Paddleboard für Spiegelungen mit."
        },
        "fr": {
          "name": "Baie d’Opunohu",
          "description": "Une baie verte au pied des pics volcaniques acérés du Rotui et du Mauaroa, l’un des plus beaux panoramas de Moorea. Palmeraies, marae en ruine et eaux calmes pour les kayaks bordent le rivage.",
          "tip": "Venez à l’aube ou au crépuscule quand les pics sont doucement éclairés ; le photographe se place sur la rive et tire depuis le bord de l’eau. Prenez un kayak ou un paddle pour les reflets."
        },
        "it": {
          "name": "Baia di Opunohu",
          "description": "Una baia verde ai piedi degli aguzzi picchi vulcanici di Rotui e Mauaroa, uno dei panorami più belli di Moorea. Sulla riva ci sono palmeti, marae in rovina e acque calme per i kayak.",
          "tip": "Vieni all’alba o al crepuscolo, quando i picchi sono illuminati dolcemente; il fotografo dovrebbe stare sulla riva e scattare dal bordo dell’acqua. Porta un kayak o una tavola da paddle per i riflessi."
        }
      }
    },
    {
      "id": "moorea-temae-beach",
      "city": "moorea",
      "category": "nature",
      "spot": "insta",
      "lat": -17.505,
      "lng": -149.761,
      "image": "oXucCF6tep0",
      "rating": 4.6,
      "reviews": 2600,
      "tags": [
        "beaches",
        "sunset",
        "photo"
      ],
      "price": {
        "kind": "free"
      },
      "hours": "always",
      "address": "Plage de Temae, Moorea",
      "text": {
        "ru": {
          "name": "Пляж Темае",
          "description": "Длинный публичный пляж с белым песком и мелкой лагуной рядом с аэропортом Муреа. Отсюда на закате виден силуэт острова Таити, а в воде отражаются облака.",
          "tip": "Приходите на закате и встаньте по щиколотку в воду лицом к Таити, пока самолёты не заходят на посадку. Берите полотенце и сандалии — дно местами каменистое."
        },
        "en": {
          "name": "Temae Beach",
          "description": "A long public beach with white sand and a shallow lagoon beside Moorea airport. At sunset the silhouette of Tahiti shows from here and clouds reflect in the water.",
          "tip": "Come at sunset and stand ankle-deep in the water facing Tahiti, while no planes are landing. Bring a towel and sandals, as the bottom is rocky in places."
        },
        "es": {
          "name": "Playa de Temae",
          "description": "Una larga playa pública de arena blanca y laguna poco profunda junto al aeropuerto de Moorea. Al atardecer desde aquí se ve la silueta de Tahití y las nubes se reflejan en el agua.",
          "tip": "Ve al atardecer y colócate con el agua a los tobillos mirando a Tahití, cuando no aterricen aviones. Lleva toalla y sandalias, porque el fondo es rocoso en algunos tramos."
        },
        "de": {
          "name": "Temae Beach",
          "description": "Ein langer öffentlicher Strand mit weißem Sand und flacher Lagune neben dem Flughafen von Moorea. Bei Sonnenuntergang zeichnet sich hier die Silhouette Tahitis ab, und Wolken spiegeln sich im Wasser.",
          "tip": "Komm zum Sonnenuntergang und stell dich knöcheltief ins Wasser mit Blick auf Tahiti, solange keine Flugzeuge landen. Nimm Handtuch und Sandalen mit, der Grund ist stellenweise steinig."
        },
        "fr": {
          "name": "Plage de Temae",
          "description": "Une longue plage publique de sable blanc et de lagon peu profond, à côté de l’aéroport de Moorea. Au coucher du soleil, on y voit la silhouette de Tahiti et les nuages se reflètent dans l’eau.",
          "tip": "Venez au coucher du soleil et placez-vous dans l’eau jusqu’aux chevilles face à Tahiti, quand aucun avion n’atterrit. Prenez serviette et sandales, le fond est rocheux par endroits."
        },
        "it": {
          "name": "Spiaggia di Temae",
          "description": "Una lunga spiaggia pubblica di sabbia bianca e laguna poco profonda accanto all’aeroporto di Moorea. Al tramonto da qui si vede la sagoma di Tahiti e le nuvole si riflettono nell’acqua.",
          "tip": "Vieni al tramonto e mettiti con l’acqua alle caviglie rivolto verso Tahiti, quando non atterrano aerei. Porta un telo e dei sandali, perché il fondo in certi punti è roccioso."
        }
      }
    },
  ],
};

export default pack;
