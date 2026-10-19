import type { CountryPack } from '../types';

const pack: CountryPack = {
  country: {
    code: 'KR',
    region: 'asia',
    image: 'DBGb21xevAA',
    theme: { accent: '#7c3aed', accent2: '#0ea5e9', motif: 'lanterns' },
    fromMoscow: { hours: 13, direct: false },
    text: {
      ru: {
        tagline: 'K-поп и дворцы, храмы у моря и вулканический остров Чеджу',
        description: 'Южная Корея умеет удивлять контрастами: неоновые кварталы Сеула соседствуют с дворцами династии Чосон, а в Пусане буддийский храм стоит прямо на прибрежных скалах. Добавьте к этому быстрые поезда, огненную кухню, уютные кафе на каждом углу и вулканический остров Чеджу.',
        howToGet: 'Прямых регулярных рейсов из Москвы нет: удобнее всего лететь с пересадкой в Ташкенте, Алматы, Пекине, Стамбуле или Дубае — в пути 12–16 часов, а из Владивостока до Сеула около двух часов. По стране быстрее всего на скоростных поездах KTX (Сеул — Пусан около 2 ч 30 мин), на Чеджу летают Korean Air, Jeju Air и T’way, а в городах есть метро и автобусы, которые оплачиваются картой T-money.',
        tips: [
          'Российские Visa и Mastercard здесь не работают: везите доллары или евро и меняйте их в обменниках района Мёндон в Сеуле, где курс лучше, а карты UnionPay принимают многие банкоматы.',
          'Google Карты здесь почти бесполезны для маршрутов — ставьте Naver Map или KakaoMap, а такси вызывайте через Kakao T.',
          'Наливайте старшим и принимайте рюмку двумя руками, не втыкайте палочки в рис и не пишите имена красной ручкой.',
        ],
        guide: {
          title: 'Корея за 10 дней',
          sections: [
            { title: 'Когда ехать', body: 'Лучшее время — весна и осень. В начале апреля по всей стране цветёт вишня, а в октябре–ноябре горы и дворцы окрашивают клёны. Лето жаркое и влажное, в конце июня и июле идут муссонные дожди, зато в июле–августе в Пусане разгар пляжного сезона. Зимой в Сеуле бывает до −10 °C и сухо, в горах работают горнолыжные курорты, а на Чеджу заметно мягче.' },
            { title: 'Маршрут на 10 дней', body: 'Четыре дня в Сеуле: дворец Кёнбоккун, ханок-деревня Пукчхон, гора Намсан, вечерние Мёндон и Хондэ. Затем KTX в Пусан на три дня — разноцветный Камчхон, пляж Хэундэ, храм Хэдон Ёнгунса и рыбный рынок Чагальчхи. Финал — часовой перелёт на Чеджу: рассвет на Сонсан Ильчхульбоне, подъём на Халласан, водопады у моря и тропы Олле вдоль побережья.' },
            { title: 'Что попробовать', body: 'Корейское барбекю из свиной грудинки самгёпсаль, пибимпап, острые рисовые клёцки ттокпокки и жареная курица с пивом — чимэк — это классика. В Пусане ешьте свиной суп тэджи кукпап и свежую рыбу хве прямо на рынке, на Чеджу — чёрную свинину хык твэджи и сладкие мандарины ханрабон. Кимчи и десятки закусок панчхан подают бесплатно и подкладывают по просьбе.' },
            { title: 'Деньги, связь и транспорт', body: 'Валюта — вона (KRW). Карты российских банков не работают, поэтому берите наличные доллары или евро и меняйте их в городских обменниках. Купите транспортную карту T-money в любом магазине у дома: ею платят в метро, автобусах и даже в такси. Сим-карты и eSIM продают в аэропорту Инчхон, а интернет и Wi-Fi есть практически везде, включая метро.' },
          ],
        },
      },
      en: {
        tagline: 'K-pop and palaces, seaside temples and volcanic Jeju',
        description: 'South Korea thrives on contrast: Seoul’s neon districts stand beside the palaces of the Joseon dynasty, and in Busan a Buddhist temple clings to the coastal rocks. Add fast trains, fiery food, cosy cafés on every corner and the volcanic island of Jeju.',
        howToGet: 'There are no regular direct flights from Moscow: the most convenient connections are via Tashkent, Almaty, Beijing, Istanbul or Dubai, 12–16 hours in total, while Vladivostok to Seoul takes about two hours. Within the country the KTX high-speed train is the fastest option (Seoul to Busan in about 2 hours 30 minutes), Korean Air, Jeju Air and T’way fly to Jeju, and cities have metros and buses paid with a T-money card.',
        tips: [
          'Russian-issued Visa and Mastercard cards don’t work here, so bring dollars or euros and exchange them at the money changers in Seoul’s Myeongdong, which offer better rates; many ATMs accept UnionPay.',
          'Google Maps is nearly useless for directions here, so install Naver Map or KakaoMap and book taxis with Kakao T.',
          'Pour drinks for your elders and accept a glass with both hands, don’t stick your chopsticks upright in rice and never write names in red ink.',
        ],
        guide: {
          title: 'Korea in 10 days',
          sections: [
            { title: 'When to go', body: 'Spring and autumn are the best times. In early April cherry blossom covers the country, and in October and November maples colour the mountains and palaces. Summer is hot and humid, with monsoon rains in late June and July, but July and August are peak beach season in Busan. In winter Seoul can drop to −10 °C with dry air, ski resorts open in the mountains, and Jeju stays noticeably milder.' },
            { title: 'A 10-day route', body: 'Spend four days in Seoul: Gyeongbokgung Palace, the Bukchon hanok village, Namsan and evenings in Myeongdong and Hongdae. Then take the KTX to Busan for three days of colourful Gamcheon, Haeundae Beach, Haedong Yonggungsa temple and Jagalchi fish market. Finish with an hour’s flight to Jeju: sunrise on Seongsan Ilchulbong, a climb up Hallasan, seaside waterfalls and the Olle trails along the coast.' },
            { title: 'What to eat', body: 'Korean barbecue with samgyeopsal pork belly, bibimbap, spicy tteokbokki rice cakes and fried chicken with beer, known as chimaek, are the classics. In Busan eat dwaeji gukbap pork soup and fresh hoe raw fish right at the market; on Jeju, black pork and sweet hallabong tangerines. Kimchi and dozens of banchan side dishes come free and are refilled on request.' },
            { title: 'Money, SIM cards and transport', body: 'The currency is the won (KRW). Russian bank cards don’t work, so bring cash in dollars or euros and exchange it at money changers in town. Buy a T-money transport card at any convenience store: it pays for metro, buses and even taxis. SIM cards and eSIMs are sold at Incheon Airport, and internet and Wi-Fi are available almost everywhere, including the metro.' },
          ],
        },
      },
      es: {
        tagline: 'K-pop y palacios, templos junto al mar y la volcánica Jeju',
        description: 'Corea del Sur vive de contrastes: los barrios de neón de Seúl conviven con los palacios de la dinastía Joseon, y en Busan un templo budista se aferra a las rocas de la costa. Súmale trenes rápidos, una cocina picante, cafés acogedores en cada esquina y la isla volcánica de Jeju.',
        howToGet: 'No hay vuelos directos regulares desde Moscú: lo más cómodo es hacer escala en Taskent, Almaty, Pekín, Estambul o Dubái, con 12–16 horas de viaje, mientras que de Vladivostok a Seúl hay unas dos horas. Dentro del país lo más rápido es el tren de alta velocidad KTX (Seúl–Busan en unas 2 h 30 min); Korean Air, Jeju Air y T’way vuelan a Jeju, y las ciudades tienen metro y autobuses que se pagan con la tarjeta T-money.',
        tips: [
          'Las tarjetas Visa y Mastercard emitidas en Rusia no funcionan aquí: lleva dólares o euros y cámbialos en las casas de cambio de Myeongdong, en Seúl, que dan mejor tipo; muchos cajeros aceptan UnionPay.',
          'Google Maps casi no sirve para rutas aquí: instala Naver Map o KakaoMap y pide los taxis con Kakao T.',
          'Sirve la bebida a los mayores y recibe el vaso con las dos manos, no claves los palillos en el arroz y nunca escribas nombres con tinta roja.',
        ],
        guide: {
          title: 'Corea en 10 días',
          sections: [
            { title: 'Cuándo ir', body: 'La primavera y el otoño son las mejores épocas. A principios de abril los cerezos florecen por todo el país, y en octubre y noviembre los arces tiñen montañas y palacios. El verano es caluroso y húmedo, con lluvias monzónicas a finales de junio y en julio, aunque julio y agosto son plena temporada de playa en Busan. En invierno Seúl puede bajar a −10 °C con aire seco, abren las estaciones de esquí y Jeju se mantiene más templada.' },
            { title: 'Ruta de 10 días', body: 'Cuatro días en Seúl: el palacio Gyeongbokgung, la aldea de hanok de Bukchon, el monte Namsan y las noches de Myeongdong y Hongdae. Después, KTX a Busan para tres días entre el colorido Gamcheon, la playa de Haeundae, el templo Haedong Yonggungsa y el mercado de pescado de Jagalchi. Termina con una hora de vuelo a Jeju: amanecer en Seongsan Ilchulbong, subida al Hallasan, cascadas junto al mar y los senderos Olle por la costa.' },
            { title: 'Qué probar', body: 'La barbacoa coreana de panceta samgyeopsal, el bibimbap, los picantes tteokbokki de pasta de arroz y el pollo frito con cerveza, el llamado chimaek, son los clásicos. En Busan come sopa de cerdo dwaeji gukbap y pescado crudo hoe en el propio mercado; en Jeju, cerdo negro y las dulces mandarinas hallabong. El kimchi y decenas de guarniciones banchan son gratis y se rellenan a petición.' },
            { title: 'Dinero, móvil y transporte', body: 'La moneda es el won (KRW). Las tarjetas de bancos rusos no funcionan, así que lleva efectivo en dólares o euros y cámbialo en casas de cambio de la ciudad. Compra una tarjeta T-money en cualquier tienda de conveniencia: sirve para metro, autobuses e incluso taxis. Las SIM y eSIM se venden en el aeropuerto de Incheon, y hay internet y wifi casi en todas partes, metro incluido.' },
          ],
        },
      },
      de: {
        tagline: 'K-Pop und Paläste, Tempel am Meer und die Vulkaninsel Jeju',
        description: 'Südkorea lebt von Kontrasten: Seouls Neonviertel liegen neben den Palästen der Joseon-Dynastie, und in Busan klammert sich ein buddhistischer Tempel an die Küstenfelsen. Dazu kommen schnelle Züge, feurige Küche, gemütliche Cafés an jeder Ecke und die Vulkaninsel Jeju.',
        howToGet: 'Regelmäßige Direktflüge ab Moskau gibt es nicht: Am bequemsten steigst du in Taschkent, Almaty, Peking, Istanbul oder Dubai um, insgesamt 12–16 Stunden, von Wladiwostok nach Seoul sind es rund zwei Stunden. Im Land ist der Hochgeschwindigkeitszug KTX am schnellsten (Seoul–Busan etwa 2 Stunden 30 Minuten), Korean Air, Jeju Air und T’way fliegen nach Jeju, und in den Städten fahren Metro und Busse, die du mit der T-money-Karte bezahlst.',
        tips: [
          'In Russland ausgegebene Visa- und Mastercard-Karten funktionieren hier nicht – nimm Dollar oder Euro mit und tausche sie bei den Wechselstuben im Seouler Viertel Myeongdong mit besseren Kursen; viele Geldautomaten akzeptieren UnionPay.',
          'Google Maps taugt hier kaum für Routen – installiere Naver Map oder KakaoMap und bestell Taxis über Kakao T.',
          'Schenk Älteren ein und nimm das Glas mit beiden Händen entgegen, steck keine Stäbchen in den Reis und schreib Namen nie mit roter Tinte.',
        ],
        guide: {
          title: 'Korea in 10 Tagen',
          sections: [
            { title: 'Reisezeit', body: 'Frühling und Herbst sind die beste Zeit. Anfang April blühen im ganzen Land die Kirschbäume, im Oktober und November färben Ahornbäume Berge und Paläste. Der Sommer ist heiß und schwül, Ende Juni und im Juli fällt Monsunregen, dafür ist im Juli und August in Busan Hochsaison am Strand. Im Winter wird es in Seoul bis −10 °C kalt und trocken, in den Bergen öffnen Skigebiete, auf Jeju bleibt es deutlich milder.' },
            { title: 'Route für 10 Tage', body: 'Vier Tage Seoul: der Palast Gyeongbokgung, das Hanok-Dorf Bukchon, der Namsan und Abende in Myeongdong und Hongdae. Dann mit dem KTX für drei Tage nach Busan – das bunte Gamcheon, der Haeundae Beach, der Tempel Haedong Yonggungsa und der Fischmarkt Jagalchi. Zum Schluss eine Flugstunde nach Jeju: Sonnenaufgang auf dem Seongsan Ilchulbong, Aufstieg auf den Hallasan, Wasserfälle am Meer und die Olle-Wege entlang der Küste.' },
            { title: 'Was du probieren solltest', body: 'Koreanisches Barbecue mit Schweinebauch Samgyeopsal, Bibimbap, scharfe Reiskuchen Tteokbokki und Brathähnchen mit Bier – Chimaek genannt – sind die Klassiker. In Busan isst du Schweinesuppe Dwaeji Gukbap und rohen Fisch Hoe direkt auf dem Markt, auf Jeju schwarzes Schwein und süße Hallabong-Mandarinen. Kimchi und Dutzende Beilagen namens Banchan gibt es gratis und auf Wunsch nachgefüllt.' },
            { title: 'Geld, Handy und Verkehr', body: 'Die Währung ist der Won (KRW). Russische Bankkarten funktionieren nicht, also nimm Bargeld in Dollar oder Euro mit und tausche es in Wechselstuben in der Stadt. Kauf eine T-money-Karte in jedem Convenience Store: Damit zahlst du Metro, Busse und sogar Taxis. SIM-Karten und eSIMs gibt es am Flughafen Incheon, Internet und WLAN fast überall, auch in der Metro.' },
          ],
        },
      },
      fr: {
        tagline: 'K-pop et palais, temples face à la mer et l’île volcanique de Jeju',
        description: 'La Corée du Sud vit de contrastes : les quartiers néon de Séoul côtoient les palais de la dynastie Joseon, et à Busan un temple bouddhiste s’accroche aux rochers du littoral. Ajoutez des trains rapides, une cuisine pimentée, des cafés douillets à chaque coin de rue et l’île volcanique de Jeju.',
        howToGet: 'Il n’existe pas de vol direct régulier depuis Moscou : le plus pratique est de passer par Tachkent, Almaty, Pékin, Istanbul ou Dubaï, soit 12 à 16 heures de trajet, tandis que Vladivostok–Séoul prend environ deux heures. Sur place, le train à grande vitesse KTX est le plus rapide (Séoul–Busan en 2 h 30 environ), Korean Air, Jeju Air et T’way desservent Jeju, et les villes ont métros et bus payables avec la carte T-money.',
        tips: [
          'Les cartes Visa et Mastercard émises en Russie ne fonctionnent pas ici : emportez des dollars ou des euros à changer dans les bureaux de change de Myeongdong, à Séoul, qui offrent de meilleurs taux ; de nombreux distributeurs acceptent UnionPay.',
          'Google Maps est presque inutile pour les itinéraires ici : installez Naver Map ou KakaoMap et commandez vos taxis avec Kakao T.',
          'Servez à boire aux aînés et recevez le verre à deux mains, ne plantez pas vos baguettes dans le riz et n’écrivez jamais un nom à l’encre rouge.',
        ],
        guide: {
          title: 'La Corée en 10 jours',
          sections: [
            { title: 'Quand partir', body: 'Le printemps et l’automne sont les meilleures saisons. Début avril, les cerisiers fleurissent dans tout le pays, et en octobre et novembre les érables colorent montagnes et palais. L’été est chaud et humide, avec des pluies de mousson fin juin et en juillet, mais juillet et août marquent la haute saison balnéaire à Busan. L’hiver, Séoul descend jusqu’à −10 °C par temps sec, les stations de ski ouvrent en montagne et Jeju reste nettement plus douce.' },
            { title: 'Itinéraire de 10 jours', body: 'Quatre jours à Séoul : le palais Gyeongbokgung, le village de hanok de Bukchon, le mont Namsan et les soirées de Myeongdong et Hongdae. Puis KTX pour Busan, trois jours entre le coloré Gamcheon, la plage de Haeundae, le temple Haedong Yonggungsa et le marché aux poissons de Jagalchi. Finale après une heure de vol à Jeju : lever du soleil sur le Seongsan Ilchulbong, ascension du Hallasan, cascades au bord de la mer et sentiers Olle le long de la côte.' },
            { title: 'Que goûter', body: 'Le barbecue coréen de poitrine de porc samgyeopsal, le bibimbap, les galettes de riz pimentées tteokbokki et le poulet frit accompagné de bière, le chimaek, sont des classiques. À Busan, goûtez la soupe de porc dwaeji gukbap et le poisson cru hoe directement au marché ; à Jeju, le porc noir et les mandarines sucrées hallabong. Le kimchi et des dizaines de banchan, petits accompagnements, sont offerts et resservis sur demande.' },
            { title: 'Argent, téléphone et transports', body: 'La monnaie est le won (KRW). Les cartes des banques russes ne fonctionnent pas : prévoyez des dollars ou des euros en espèces à changer en ville. Achetez une carte T-money dans n’importe quelle supérette : elle sert dans le métro, les bus et même les taxis. Cartes SIM et eSIM se vendent à l’aéroport d’Incheon, et internet et Wi-Fi sont disponibles presque partout, métro compris.' },
          ],
        },
      },
      it: {
        tagline: 'K-pop e palazzi, templi sul mare e la vulcanica Jeju',
        description: 'La Corea del Sud vive di contrasti: i quartieri al neon di Seul convivono con i palazzi della dinastia Joseon, e a Busan un tempio buddhista è aggrappato agli scogli della costa. Aggiungi treni veloci, una cucina infuocata, caffè accoglienti a ogni angolo e l’isola vulcanica di Jeju.',
        howToGet: 'Non ci sono voli diretti regolari da Mosca: la soluzione più comoda è uno scalo a Tashkent, Almaty, Pechino, Istanbul o Dubai, per 12–16 ore complessive, mentre da Vladivostok a Seul bastano circa due ore. Nel Paese il treno ad alta velocità KTX è il più rapido (Seul–Busan in circa 2 ore e 30 minuti), Korean Air, Jeju Air e T’way volano a Jeju, e in città ci sono metro e autobus pagabili con la carta T-money.',
        tips: [
          'Le carte Visa e Mastercard emesse in Russia qui non funzionano: porta dollari o euro e cambiali nei cambiavalute di Myeongdong, a Seul, che offrono tassi migliori; molti bancomat accettano UnionPay.',
          'Google Maps qui è quasi inutile per i percorsi: installa Naver Map o KakaoMap e chiama i taxi con Kakao T.',
          'Versa da bere ai più anziani e ricevi il bicchiere con due mani, non piantare le bacchette nel riso e non scrivere mai nomi con l’inchiostro rosso.',
        ],
        guide: {
          title: 'La Corea in 10 giorni',
          sections: [
            { title: 'Quando andare', body: 'Primavera e autunno sono i periodi migliori. A inizio aprile i ciliegi fioriscono in tutto il Paese, e a ottobre e novembre gli aceri colorano montagne e palazzi. L’estate è calda e umida, con piogge monsoniche a fine giugno e a luglio, ma luglio e agosto sono l’alta stagione balneare a Busan. D’inverno Seul può scendere a −10 °C con aria secca, in montagna aprono le piste da sci e Jeju resta decisamente più mite.' },
            { title: 'Itinerario di 10 giorni', body: 'Quattro giorni a Seul: il palazzo Gyeongbokgung, il villaggio di hanok di Bukchon, il monte Namsan e le serate a Myeongdong e Hongdae. Poi KTX per Busan, tre giorni tra il colorato Gamcheon, la spiaggia di Haeundae, il tempio Haedong Yonggungsa e il mercato del pesce di Jagalchi. Gran finale con un’ora di volo a Jeju: alba sul Seongsan Ilchulbong, salita all’Hallasan, cascate sul mare e i sentieri Olle lungo la costa.' },
            { title: 'Cosa assaggiare', body: 'Il barbecue coreano di pancetta samgyeopsal, il bibimbap, i piccanti tteokbokki di pasta di riso e il pollo fritto con la birra, il cosiddetto chimaek, sono i classici. A Busan mangia la zuppa di maiale dwaeji gukbap e il pesce crudo hoe direttamente al mercato; a Jeju, il maiale nero e i dolci mandarini hallabong. Kimchi e decine di contorni banchan sono gratuiti e vengono riempiti su richiesta.' },
            { title: 'Soldi, telefono e trasporti', body: 'La valuta è il won (KRW). Le carte delle banche russe non funzionano, quindi porta contanti in dollari o euro e cambiali nei cambiavalute in città. Compra una carta T-money in qualsiasi minimarket: vale per metro, autobus e perfino taxi. SIM ed eSIM si comprano all’aeroporto di Incheon, e internet e Wi-Fi ci sono quasi ovunque, metro compresa.' },
          ],
        },
      },
    },
  },
  cities: [
    {
      id: 'busan', lat: 35.1796, lng: 129.0756, image: 'KpIgjFZmp0E', gallery: ['kV_pofy830E', 'IhjRrbNQ_bQ', 'mLKkqlqFiZ4', 'KU7KNPltACE'],
      rating: 4.7, reviews: 11380, tags: ['beaches', 'city', 'temples', 'streetfood'], months: [4, 5, 6, 9, 10], budgetPerDay: 75, currency: 'KRW',
      language: 'ko', timezone: 'UTC+9', zoom: 11, theme: { accent: '#0369a1', accent2: '#f472b6', motif: 'waves' },
      text: {
        ru: { name: 'Пусан', tagline: 'Портовый город: пляжи, храм на скалах и разноцветный Камчхон', description: 'Второй город Кореи раскинулся между горами и морем: здесь городские пляжи, рыбные рынки, буддийские храмы на прибрежных скалах и кварталы пастельных домиков на склонах. Пусан проще и расслабленнее Сеула, а морепродукты здесь лучшие в стране.', tips: ['Город вытянут вдоль побережья, поэтому планируйте дни по районам: Нампхо и Камчхон в один день, Хэундэ и храм Хэдон Ёнгунса — в другой.', 'Карта T-money из Сеула работает и в пусанском метро, и в автобусах.'], gettingThere: 'Из Сеула KTX довозит до вокзала Пусан за 2 ч 15 мин – 2 ч 40 мин. Из аэропорта Кимхэ в центр — лёгкое метро и пересадка на линию 2 или автобус-лимузин.' },
        en: { name: 'Busan', tagline: 'A port city of beaches, a cliffside temple and colourful Gamcheon', description: 'Korea’s second city sprawls between mountains and sea, with city beaches, fish markets, Buddhist temples on the coastal rocks and hillside neighbourhoods of pastel houses. Busan is simpler and more relaxed than Seoul, and its seafood is the best in the country.', tips: ['The city stretches along the coast, so plan your days by area: Nampo and Gamcheon on one day, Haeundae and Haedong Yonggungsa temple on another.', 'A T-money card from Seoul also works on Busan’s metro and buses.'], gettingThere: 'The KTX from Seoul reaches Busan Station in 2 hours 15 minutes to 2 hours 40 minutes. From Gimhae Airport, take the light rail and change to metro line 2, or ride a limousine bus into the centre.' },
        es: { name: 'Busan', tagline: 'Una ciudad portuaria de playas, un templo en el acantilado y el colorido Gamcheon', description: 'La segunda ciudad de Corea se extiende entre montañas y mar, con playas urbanas, mercados de pescado, templos budistas sobre las rocas de la costa y barrios de casitas pastel en las laderas. Busan es más sencilla y relajada que Seúl, y su marisco es el mejor del país.', tips: ['La ciudad se alarga junto a la costa, así que organiza los días por zonas: Nampo y Gamcheon un día, Haeundae y el templo Haedong Yonggungsa otro.', 'La tarjeta T-money de Seúl también sirve en el metro y los autobuses de Busan.'], gettingThere: 'El KTX desde Seúl llega a la estación de Busan en 2 h 15 min–2 h 40 min. Desde el aeropuerto de Gimhae, tren ligero con transbordo a la línea 2 del metro o autobús limusina hasta el centro.' },
        de: { name: 'Busan', tagline: 'Hafenstadt mit Stränden, einem Tempel am Fels und dem bunten Gamcheon', description: 'Koreas zweitgrößte Stadt erstreckt sich zwischen Bergen und Meer: Stadtstrände, Fischmärkte, buddhistische Tempel auf Küstenfelsen und Hangviertel voller Pastellhäuschen. Busan ist unkomplizierter und entspannter als Seoul, und die Meeresfrüchte sind die besten des Landes.', tips: ['Die Stadt zieht sich lang an der Küste entlang – plane die Tage nach Vierteln: Nampo und Gamcheon an einem Tag, Haeundae und den Tempel Haedong Yonggungsa an einem anderen.', 'Die T-money-Karte aus Seoul funktioniert auch in Busans Metro und Bussen.'], gettingThere: 'Der KTX ab Seoul erreicht den Bahnhof Busan in 2 Stunden 15 Minuten bis 2 Stunden 40 Minuten. Vom Flughafen Gimhae fährst du mit der Stadtbahn und steigst in die Metrolinie 2 um, oder du nimmst einen Limousinenbus ins Zentrum.' },
        fr: { name: 'Busan', tagline: 'Ville portuaire : plages, temple sur la falaise et Gamcheon multicolore', description: 'La deuxième ville de Corée s’étale entre montagnes et mer, avec ses plages urbaines, ses marchés aux poissons, ses temples bouddhistes sur les rochers du littoral et ses quartiers de maisons pastel à flanc de colline. Plus simple et plus détendue que Séoul, Busan sert les meilleurs fruits de mer du pays.', tips: ['La ville s’étire le long de la côte : organisez vos journées par quartier, Nampo et Gamcheon un jour, Haeundae et le temple Haedong Yonggungsa un autre.', 'La carte T-money achetée à Séoul fonctionne aussi dans le métro et les bus de Busan.'], gettingThere: 'Le KTX depuis Séoul rejoint la gare de Busan en 2 h 15 à 2 h 40. Depuis l’aéroport de Gimhae, prenez le métro léger puis la ligne 2, ou un bus limousine jusqu’au centre.' },
        it: { name: 'Busan', tagline: 'Una città portuale di spiagge, un tempio sugli scogli e il colorato Gamcheon', description: 'La seconda città della Corea si distende tra montagne e mare, con spiagge urbane, mercati del pesce, templi buddhisti sugli scogli e quartieri di casette color pastello sulle colline. Busan è più semplice e rilassata di Seul, e il suo pesce è il migliore del Paese.', tips: ['La città si allunga lungo la costa, quindi organizza le giornate per zone: Nampo e Gamcheon un giorno, Haeundae e il tempio Haedong Yonggungsa un altro.', 'La carta T-money di Seul funziona anche sulla metro e sugli autobus di Busan.'], gettingThere: 'Il KTX da Seul arriva alla stazione di Busan in 2 ore e 15 minuti–2 ore e 40 minuti. Dall’aeroporto di Gimhae si prende la metropolitana leggera con cambio sulla linea 2, oppure un bus limousine fino al centro.' },
      },
    },
    {
      id: 'jeju', lat: 33.3846, lng: 126.5535, image: 'im8qk20M2kc', gallery: ['xFQ0xywW5g4', 'OoxcY9BIQQ8'],
      rating: 4.7, reviews: 9260, tags: ['islands', 'volcanoes', 'hiking', 'beaches'], months: [4, 5, 6, 9, 10], budgetPerDay: 80, currency: 'KRW',
      language: 'ko', timezone: 'UTC+9', zoom: 10, theme: { accent: '#15803d', accent2: '#f97316', motif: 'peaks' },
      text: {
        ru: { name: 'Чеджу', tagline: 'Вулканический остров: кратеры, водопады у моря и мандарины', description: 'Остров к югу от материка, целиком созданный вулканом Халласан, — природное наследие ЮНЕСКО с застывшими лавовыми берегами, кратерами и водопадами, падающими прямо в океан. Здесь мягкий климат, мандариновые сады, ныряльщицы хэнё и пешие тропы Олле вокруг всего острова.', tips: ['Удобнее всего путешествовать по острову на машине или на такси на целый день, хотя автобусы ходят ко всем главным местам.', 'Погода на Чеджу меняется быстро, а на Халласане всегда прохладнее — берите ветровку даже летом.'], gettingThere: 'Из сеульского аэропорта Кимпхо лететь около 1 ч 10 мин, из Пусана — около часа; аэропорт находится в городе Чеджу на севере острова, до Согвипхо на юге около часа на автобусе или такси.' },
        en: { name: 'Jeju', tagline: 'A volcanic island of craters, seaside waterfalls and tangerines', description: 'An island south of the mainland built entirely by the Hallasan volcano, it is a UNESCO natural heritage site of frozen lava shores, craters and waterfalls tumbling straight into the ocean. The climate is mild, with tangerine orchards, haenyeo women divers and the Olle walking trails circling the island.', tips: ['A car or a full-day taxi is the easiest way to explore, though buses do reach all the main sights.', 'Jeju’s weather changes fast and Hallasan is always cooler, so pack a windbreaker even in summer.'], gettingThere: 'Flights from Seoul’s Gimpo Airport take about 1 hour 10 minutes and from Busan about an hour; the airport is in Jeju City in the north, about an hour by bus or taxi from Seogwipo in the south.' },
        es: { name: 'Jeju', tagline: 'Una isla volcánica de cráteres, cascadas junto al mar y mandarinas', description: 'Esta isla al sur de la península, formada por completo por el volcán Hallasan, es patrimonio natural de la UNESCO, con costas de lava petrificada, cráteres y cascadas que caen directamente al océano. Tiene un clima suave, huertos de mandarinos, las buceadoras haenyeo y los senderos Olle que rodean toda la isla.', tips: ['Lo más cómodo es recorrer la isla en coche o en taxi por día completo, aunque los autobuses llegan a todos los lugares principales.', 'El tiempo en Jeju cambia rápido y en el Hallasan siempre hace más fresco: lleva cortavientos incluso en verano.'], gettingThere: 'El vuelo desde el aeropuerto de Gimpo, en Seúl, dura 1 h 10 min y desde Busan alrededor de una hora; el aeropuerto está en la ciudad de Jeju, al norte, a una hora en autobús o taxi de Seogwipo, al sur.' },
        de: { name: 'Jeju', tagline: 'Vulkaninsel mit Kratern, Wasserfällen am Meer und Mandarinen', description: 'Die Insel südlich des Festlands, ganz vom Vulkan Hallasan geformt, ist UNESCO-Naturerbe mit erstarrten Lavaküsten, Kratern und Wasserfällen, die direkt ins Meer stürzen. Das Klima ist mild, es gibt Mandarinenhaine, die Haenyeo-Taucherinnen und die Olle-Wanderwege rund um die Insel.', tips: ['Am bequemsten erkundest du die Insel mit dem Auto oder einem Taxi für den ganzen Tag, auch wenn Busse alle Hauptsehenswürdigkeiten anfahren.', 'Das Wetter auf Jeju wechselt schnell, und am Hallasan ist es immer kühler – pack auch im Sommer eine Windjacke ein.'], gettingThere: 'Ab Seoul-Gimpo fliegst du etwa 1 Stunde 10 Minuten, ab Busan rund eine Stunde; der Flughafen liegt in Jeju-Stadt im Norden, nach Seogwipo im Süden ist es etwa eine Stunde mit Bus oder Taxi.' },
        fr: { name: 'Jeju', tagline: 'Une île volcanique de cratères, cascades marines et mandarines', description: 'Cette île au sud de la péninsule, entièrement façonnée par le volcan Hallasan, est inscrite au patrimoine naturel de l’UNESCO : côtes de lave figée, cratères et cascades qui plongent directement dans l’océan. Le climat y est doux, avec des vergers de mandariniers, les plongeuses haenyeo et les sentiers Olle qui font le tour de l’île.', tips: ['Le plus pratique est de circuler en voiture ou en taxi à la journée, même si les bus desservent tous les grands sites.', 'La météo change vite à Jeju et il fait toujours plus frais sur le Hallasan : prévoyez un coupe-vent, même en été.'], gettingThere: 'Le vol depuis l’aéroport de Gimpo, à Séoul, dure environ 1 h 10, et une heure environ depuis Busan ; l’aéroport se trouve à Jeju-ville, au nord, à une heure de bus ou de taxi de Seogwipo, au sud.' },
        it: { name: 'Jeju', tagline: 'Un’isola vulcanica di crateri, cascate sul mare e mandarini', description: 'Quest’isola a sud della penisola, interamente plasmata dal vulcano Hallasan, è patrimonio naturale UNESCO, con coste di lava solidificata, crateri e cascate che precipitano direttamente nell’oceano. Il clima è mite, tra agrumeti di mandarini, le pescatrici in apnea haenyeo e i sentieri Olle che fanno il giro dell’isola.', tips: ['Il modo più comodo per girare l’isola è in auto o in taxi a giornata, anche se gli autobus raggiungono tutti i luoghi principali.', 'A Jeju il tempo cambia in fretta e sull’Hallasan fa sempre più fresco: porta una giacca a vento anche d’estate.'], gettingThere: 'Il volo dall’aeroporto di Gimpo, a Seul, dura circa 1 ora e 10 minuti e da Busan circa un’ora; l’aeroporto è a Jeju City, a nord, a circa un’ora di autobus o taxi da Seogwipo, a sud.' },
      },
    },
  ],
  places: [
    // Busan
    {
      id: 'busan-haedong-yonggungsa', city: 'busan', category: 'attraction', lat: 35.1884, lng: 129.2233, image: 'IhjRrbNQ_bQ',
      rating: 4.6, reviews: 26700, tags: ['temples', 'views', 'sunset'], price: { kind: 'free' }, hours: '05:00–19:00',
      address: '86 Yongang-gil, Gijang-eup, Gijang-gun, Busan',
      text: {
        ru: { name: 'Храм Хэдон Ёнгунса', description: 'Буддийский храм, основанный в XIV веке прямо на прибрежных скалах: волны бьются у подножия пагод, а к главному залу спускаются по 108 ступеням. Один из немногих храмов Кореи, стоящих у самого моря.', tip: 'Приезжайте на рассвете — храм обращён на восток, и солнце встаёт прямо над морем.' },
        en: { name: 'Haedong Yonggungsa Temple', description: 'A Buddhist temple founded in the 14th century right on the coastal rocks: waves crash below its pagodas, and 108 steps lead down to the main hall. It is one of the few temples in Korea set directly beside the sea.', tip: 'Come at sunrise: the temple faces east and the sun rises straight out of the sea.' },
        es: { name: 'Templo Haedong Yonggungsa', description: 'Un templo budista fundado en el siglo XIV sobre las mismas rocas de la costa: las olas rompen al pie de sus pagodas y 108 escalones bajan hasta la sala principal. Es uno de los pocos templos de Corea situados junto al mar.', tip: 'Ven al amanecer: el templo mira al este y el sol sale directamente del mar.' },
        de: { name: 'Tempel Haedong Yonggungsa', description: 'Ein im 14. Jahrhundert direkt auf die Küstenfelsen gebauter buddhistischer Tempel: Unter den Pagoden brechen die Wellen, 108 Stufen führen hinab zur Haupthalle. Einer der wenigen Tempel Koreas direkt am Meer.', tip: 'Komm zum Sonnenaufgang – der Tempel blickt nach Osten, und die Sonne steigt direkt aus dem Meer.' },
        fr: { name: 'Temple Haedong Yonggungsa', description: 'Un temple bouddhiste fondé au XIVe siècle à même les rochers du littoral : les vagues se brisent au pied de ses pagodes et 108 marches descendent jusqu’au pavillon principal. C’est l’un des rares temples de Corée bâtis au bord de la mer.', tip: 'Venez au lever du soleil : le temple fait face à l’est et le soleil surgit directement de la mer.' },
        it: { name: 'Tempio Haedong Yonggungsa', description: 'Un tempio buddhista fondato nel XIV secolo direttamente sugli scogli della costa: le onde si infrangono sotto le pagode e 108 gradini scendono fino alla sala principale. È uno dei pochi templi della Corea affacciati sul mare.', tip: 'Vieni all’alba: il tempio guarda a est e il sole sorge direttamente dal mare.' },
      },
    },
    {
      id: 'busan-haeundae-beach', city: 'busan', category: 'nature', lat: 35.1587, lng: 129.1604, image: 'kV_pofy830E',
      rating: 4.5, reviews: 33100, tags: ['beaches', 'city', 'views'], price: { kind: 'free' }, hours: 'always',
      address: 'Haeundae Beach, U-dong, Haeundae-gu, Busan',
      text: {
        ru: { name: 'Пляж Хэундэ', description: 'Самый знаменитый пляж Кореи: полтора километра песка на фоне небоскрёбов, летом с тысячами зонтиков, а зимой с фестивалем огней. Рядом начинаются прогулочная тропа по мысу Тонбэк и рельсовая дорога Blueline Park.', tip: 'Прокатитесь на ярких капсулах Sky Capsule от станции Мипхо до Чхонсапхо — вдоль самого берега и с лучшими видами на море.' },
        en: { name: 'Haeundae Beach', description: 'Korea’s most famous beach: 1.5 kilometres of sand backed by skyscrapers, with thousands of parasols in summer and a light festival in winter. Nearby start the Dongbaek Island coastal walk and the Blueline Park coastal railway.', tip: 'Ride the colourful Sky Capsules from Mipo to Cheongsapo, which run right along the shore with the best sea views.' },
        es: { name: 'Playa de Haeundae', description: 'La playa más famosa de Corea: kilómetro y medio de arena con rascacielos al fondo, miles de sombrillas en verano y un festival de luces en invierno. Muy cerca empiezan el paseo costero de la isla Dongbaek y el tren litoral de Blueline Park.', tip: 'Súbete a las coloridas Sky Capsules de Mipo a Cheongsapo, que avanzan pegadas a la orilla con las mejores vistas al mar.' },
        de: { name: 'Haeundae Beach', description: 'Koreas berühmtester Strand: anderthalb Kilometer Sand vor Wolkenkratzern, im Sommer mit Tausenden Sonnenschirmen, im Winter mit einem Lichterfestival. Gleich daneben beginnen der Küstenweg auf der Insel Dongbaek und die Küstenbahn des Blueline Park.', tip: 'Fahr mit den bunten Sky Capsules von Mipo nach Cheongsapo – direkt am Ufer entlang und mit dem schönsten Meerblick.' },
        fr: { name: 'Plage de Haeundae', description: 'La plage la plus célèbre de Corée : un kilomètre et demi de sable adossé aux gratte-ciel, avec des milliers de parasols l’été et un festival de lumières l’hiver. Tout près commencent la promenade côtière de l’île Dongbaek et le train littoral du Blueline Park.', tip: 'Montez dans les Sky Capsules colorées de Mipo à Cheongsapo, qui longent le rivage avec les plus belles vues sur la mer.' },
        it: { name: 'Spiaggia di Haeundae', description: 'La spiaggia più famosa della Corea: un chilometro e mezzo di sabbia con i grattacieli alle spalle, migliaia di ombrelloni d’estate e un festival di luci d’inverno. Lì vicino partono la passeggiata costiera dell’isola di Dongbaek e il trenino litoraneo del Blueline Park.', tip: 'Sali sulle colorate Sky Capsule da Mipo a Cheongsapo, che corrono lungo la riva con le viste più belle sul mare.' },
      },
    },
    {
      id: 'busan-gamcheon-culture-village', city: 'busan', category: 'attraction', spot: 'insta', lat: 35.0975, lng: 129.0106, image: 'KpIgjFZmp0E',
      rating: 4.5, reviews: 28900, tags: ['photo', 'art', 'views'], price: { kind: 'free' }, hours: 'always',
      address: '203 Gamnae 2-ro, Saha-gu, Busan',
      text: {
        ru: { name: 'Деревня культуры Камчхон', description: 'Бывший квартал беженцев на склоне горы, который художники превратили в лабиринт разноцветных домиков, муралов и арт-инсталляций. Его называют корейским Санторини.', tip: 'Главный кадр — со скамейки со статуями Маленького принца и Лиса над всей деревней; приходите к 9 утра, пока нет очереди.' },
        en: { name: 'Gamcheon Culture Village', description: 'A former refugee quarter on a hillside that artists have turned into a maze of colourful houses, murals and art installations. It is often called Korea’s Santorini.', tip: 'The signature shot is from the bench with the Little Prince and Fox statues overlooking the village; arrive by 9 a.m. before a queue forms.' },
        es: { name: 'Aldea Cultural de Gamcheon', description: 'Un antiguo barrio de refugiados en la ladera de una colina que los artistas han convertido en un laberinto de casitas de colores, murales e instalaciones. La llaman el Santorini de Corea.', tip: 'La foto estrella se hace desde el banco con las estatuas del Principito y el Zorro sobre la aldea; llega antes de las 9 para evitar la cola.' },
        de: { name: 'Gamcheon Culture Village', description: 'Ein einstiges Flüchtlingsviertel am Hang, das Künstler in ein Labyrinth aus bunten Häuschen, Wandbildern und Installationen verwandelt haben. Man nennt es das Santorini Koreas.', tip: 'Das Motiv schlechthin bietet die Bank mit den Statuen des Kleinen Prinzen und des Fuchses über dem Dorf; sei vor 9 Uhr da, bevor sich eine Schlange bildet.' },
        fr: { name: 'Village culturel de Gamcheon', description: 'Un ancien quartier de réfugiés à flanc de colline, transformé par des artistes en labyrinthe de maisonnettes colorées, de fresques et d’installations. On le surnomme le Santorin coréen.', tip: 'La photo incontournable se prend depuis le banc du Petit Prince et du Renard qui domine le village ; arrivez avant 9 heures, avant la file d’attente.' },
        it: { name: 'Villaggio culturale di Gamcheon', description: 'Un ex quartiere di rifugiati sul fianco di una collina che gli artisti hanno trasformato in un labirinto di casette colorate, murales e installazioni. Lo chiamano la Santorini della Corea.', tip: 'Lo scatto simbolo si fa dalla panchina con le statue del Piccolo Principe e della Volpe affacciata sul villaggio; arriva entro le 9, prima che si formi la coda.' },
      },
    },
    {
      id: 'busan-huinnyeoul-village', city: 'busan', category: 'attraction', spot: 'hidden', lat: 35.0786, lng: 129.0446, image: 'mLKkqlqFiZ4',
      rating: 4.5, reviews: 6100, tags: ['views', 'oldtown', 'hiking'], price: { kind: 'free' }, hours: 'always',
      address: 'Huinnyeoul-gil, Yeongseon-dong, Yeongdo-gu, Busan',
      text: {
        ru: { name: 'Деревня культуры Хуинёуль', description: 'Белые домики на краю обрыва острова Ёндо, глядящие прямо на море и корабли на рейде. Узкие переулки с кафе спускаются к прибрежной тропе Чоллён, а туристов здесь куда меньше, чем в Камчхоне.', tip: 'Доезжайте автобусом от Нампходона за 15 минут, спуститесь к тропе Чоллён и найдите туннель-арку, в которой море обрамлено, как в рамке.' },
        en: { name: 'Huinnyeoul Culture Village', description: 'White houses on the cliff edge of Yeongdo Island, gazing out at the sea and anchored ships. Narrow lanes of cafés lead down to the Jeoryeong coastal trail, and there are far fewer tourists than in Gamcheon.', tip: 'Take a 15-minute bus from Nampo-dong, walk down to the Jeoryeong trail and find the tunnel arch that frames the sea like a picture.' },
        es: { name: 'Aldea Cultural de Huinnyeoul', description: 'Casitas blancas al borde del acantilado de la isla de Yeongdo, mirando al mar y a los barcos fondeados. Callejones estrechos con cafés bajan hasta el sendero costero de Jeoryeong, y hay muchos menos turistas que en Gamcheon.', tip: 'Llega en autobús desde Nampo-dong en 15 minutos, baja al sendero de Jeoryeong y busca el túnel en arco que enmarca el mar como un cuadro.' },
        de: { name: 'Huinnyeoul Culture Village', description: 'Weiße Häuser am Klippenrand der Insel Yeongdo mit Blick auf das Meer und die ankernden Schiffe. Schmale Gassen mit Cafés führen hinab zum Küstenweg Jeoryeong, und es sind weit weniger Touristen unterwegs als in Gamcheon.', tip: 'Fahr in 15 Minuten mit dem Bus ab Nampo-dong, steig zum Jeoryeong-Weg hinab und such den Tunnelbogen, der das Meer wie ein Bild einrahmt.' },
        fr: { name: 'Village culturel de Huinnyeoul', description: 'Des maisons blanches au bord de la falaise de l’île de Yeongdo, tournées vers la mer et les navires au mouillage. D’étroites ruelles bordées de cafés descendent vers le sentier côtier de Jeoryeong, et l’on y croise bien moins de touristes qu’à Gamcheon.', tip: 'Venez en 15 minutes de bus depuis Nampo-dong, descendez vers le sentier de Jeoryeong et cherchez l’arche du tunnel qui encadre la mer comme un tableau.' },
        it: { name: 'Villaggio culturale di Huinnyeoul', description: 'Casette bianche sul ciglio della scogliera dell’isola di Yeongdo, affacciate sul mare e sulle navi alla fonda. Stretti vicoli pieni di caffè scendono fino al sentiero costiero di Jeoryeong, e i turisti sono molti meno che a Gamcheon.', tip: 'Arriva in 15 minuti di autobus da Nampo-dong, scendi al sentiero di Jeoryeong e cerca l’arco del tunnel che incornicia il mare come un quadro.' },
      },
    },
    {
      id: 'busan-jagalchi-market', city: 'busan', category: 'food', lat: 35.0966, lng: 129.0306, image: 'KpIgjFZmp0E',
      rating: 4.3, reviews: 21400, tags: ['market', 'food'], price: { kind: 'level', level: 2 },
      address: '52 Jagalchihaean-ro, Jung-gu, Busan',
      text: {
        ru: { name: 'Рыбный рынок Чагальчхи', description: 'Крупнейший рыбный рынок Кореи на набережной порта: аквариумы с крабами, осьминогами и морскими ушками, а на улице — торговки-аджуммы с дневным уловом.', tip: 'Выберите морепродукты на первом этаже и поднимитесь на второй — там их за небольшую плату приготовят или нарежут как хве.' },
        en: { name: 'Jagalchi Fish Market', description: 'Korea’s largest fish market on the harbour front, with tanks of crabs, octopus and abalone, and ajumma vendors selling the day’s catch outside.', tip: 'Choose your seafood on the ground floor and head upstairs, where it will be cooked or sliced as hoe for a small fee.' },
        es: { name: 'Mercado de pescado de Jagalchi', description: 'El mayor mercado de pescado de Corea, junto al puerto, con peceras de cangrejos, pulpos y orejas de mar, y vendedoras ajumma ofreciendo la pesca del día en la calle.', tip: 'Elige el marisco en la planta baja y sube a la primera, donde por un pequeño precio te lo cocinan o te lo cortan como hoe.' },
        de: { name: 'Fischmarkt Jagalchi', description: 'Koreas größter Fischmarkt an der Hafenpromenade mit Becken voller Krabben, Oktopusse und Seeohren, draußen verkaufen Ajumma-Händlerinnen den Tagesfang.', tip: 'Such dir die Meeresfrüchte im Erdgeschoss aus und geh nach oben – dort werden sie gegen eine kleine Gebühr zubereitet oder als Hoe aufgeschnitten.' },
        fr: { name: 'Marché aux poissons de Jagalchi', description: 'Le plus grand marché aux poissons de Corée, sur le front du port, avec ses bassins de crabes, poulpes et ormeaux, et dehors les marchandes ajumma qui vendent la pêche du jour.', tip: 'Choisissez vos fruits de mer au rez-de-chaussée et montez à l’étage, où on vous les cuisine ou les tranche en hoe pour une somme modique.' },
        it: { name: 'Mercato del pesce di Jagalchi', description: 'Il più grande mercato del pesce della Corea, sul fronte del porto, con vasche di granchi, polpi e abaloni, e fuori le venditrici ajumma con il pescato del giorno.', tip: 'Scegli il pesce al piano terra e sali al primo piano, dove con una piccola spesa te lo cucinano o te lo tagliano come hoe.' },
      },
    },
    // Jeju
    {
      id: 'jeju-seongsan-ilchulbong', city: 'jeju', category: 'nature', lat: 33.4581, lng: 126.9425, image: 'im8qk20M2kc',
      rating: 4.7, reviews: 31800, tags: ['volcanoes', 'unesco', 'views', 'hiking'], price: { kind: 'fixed', amount: 5000, currency: 'KRW' },
      address: 'Ilchul-ro, Seongsan-eup, Seogwipo, Jeju',
      text: {
        ru: { name: 'Сонсан Ильчхульбон', description: '«Пик восхода солнца» — туфовый конус, поднявшийся из моря около пяти тысяч лет назад, с огромным травянистым кратером на вершине. Подъём по лестнице занимает 20–30 минут.', tip: 'Поднимайтесь к рассвету, а потом спуститесь к берегу у подножия, где ныряльщицы хэнё показывают свой промысел и продают свежие морепродукты.' },
        en: { name: 'Seongsan Ilchulbong', description: '“Sunrise Peak” is a tuff cone that rose from the sea about five thousand years ago, crowned by a huge grassy crater. The climb up the stairs takes 20–30 minutes.', tip: 'Climb for sunrise, then head down to the shore at its foot, where haenyeo women divers demonstrate their craft and sell fresh seafood.' },
        es: { name: 'Seongsan Ilchulbong', description: 'El «Pico del Amanecer» es un cono de toba que emergió del mar hace unos cinco mil años, coronado por un enorme cráter cubierto de hierba. La subida por las escaleras lleva 20–30 minutos.', tip: 'Sube al amanecer y después baja a la orilla al pie del cono, donde las buceadoras haenyeo muestran su oficio y venden marisco fresco.' },
        de: { name: 'Seongsan Ilchulbong', description: 'Der „Sonnenaufgangsgipfel“ ist ein Tuffkegel, der vor etwa fünftausend Jahren aus dem Meer emporstieg, gekrönt von einem riesigen grasbewachsenen Krater. Der Aufstieg über Treppen dauert 20–30 Minuten.', tip: 'Steig zum Sonnenaufgang hinauf und geh danach zum Ufer am Fuß des Kegels, wo die Haenyeo-Taucherinnen ihr Handwerk zeigen und frische Meeresfrüchte verkaufen.' },
        fr: { name: 'Seongsan Ilchulbong', description: 'Le « pic du Lever du soleil » est un cône de tuf surgi de la mer il y a environ cinq mille ans, couronné d’un immense cratère herbeux. La montée par les escaliers prend 20 à 30 minutes.', tip: 'Montez pour le lever du soleil, puis descendez vers le rivage au pied du cône, où les plongeuses haenyeo font une démonstration de leur métier et vendent des fruits de mer frais.' },
        it: { name: 'Seongsan Ilchulbong', description: 'Il «Picco dell’alba» è un cono di tufo emerso dal mare circa cinquemila anni fa, coronato da un enorme cratere erboso. La salita lungo le scale richiede 20–30 minuti.', tip: 'Sali per l’alba, poi scendi sulla riva ai suoi piedi, dove le pescatrici haenyeo mostrano il loro mestiere e vendono frutti di mare freschi.' },
      },
    },
    {
      id: 'jeju-hallasan', city: 'jeju', category: 'nature', lat: 33.3617, lng: 126.5292, image: 'im8qk20M2kc',
      rating: 4.8, reviews: 14700, tags: ['hiking', 'mountains', 'volcanoes', 'nature'], price: { kind: 'free' },
      address: 'Hallasan National Park, 2070-61 1100-ro, Jeju',
      text: {
        ru: { name: 'Гора Халласан', description: 'Высочайшая вершина Южной Кореи (1947 м) — спящий вулкан с кратерным озером Пэнноктам на макушке. Подъём и спуск по тропам Сонпханак или Кванымса занимает 8–9 часов.', tip: 'На маршруты к вершине нужна бесплатная онлайн-регистрация заранее; выходите до восьми утра, потому что к середине дня промежуточный пункт закрывают для подъёма.' },
        en: { name: 'Hallasan', description: 'South Korea’s highest peak (1,947 m) is a dormant volcano with the Baengnokdam crater lake at its summit. The round trip on the Seongpanak or Gwaneumsa trails takes 8–9 hours.', tip: 'The summit trails require free online registration in advance; set off before 8 a.m., because the midway checkpoint closes to climbers by midday.' },
        es: { name: 'Monte Hallasan', description: 'La cima más alta de Corea del Sur (1947 m) es un volcán dormido con el lago de cráter Baengnokdam en lo alto. La ida y vuelta por los senderos de Seongpanak o Gwaneumsa lleva 8–9 horas.', tip: 'Los senderos a la cumbre requieren un registro gratuito en línea con antelación; sal antes de las ocho, porque a mediodía cierran el punto de control intermedio a quienes suben.' },
        de: { name: 'Hallasan', description: 'Südkoreas höchster Gipfel (1947 m) ist ein schlafender Vulkan mit dem Kratersee Baengnokdam an der Spitze. Hin und zurück dauern die Wege Seongpanak oder Gwaneumsa 8–9 Stunden.', tip: 'Für die Gipfelwege musst du dich vorab kostenlos online registrieren; brich vor 8 Uhr auf, denn gegen Mittag schließt der Kontrollpunkt auf halber Strecke für den Aufstieg.' },
        fr: { name: 'Mont Hallasan', description: 'Le plus haut sommet de Corée du Sud (1 947 m) est un volcan endormi coiffé du lac de cratère Baengnokdam. L’aller-retour par les sentiers de Seongpanak ou de Gwaneumsa demande 8 à 9 heures.', tip: 'Les sentiers du sommet exigent une inscription gratuite en ligne à l’avance ; partez avant 8 heures, car le point de contrôle à mi-parcours ferme la montée vers midi.' },
        it: { name: 'Monte Hallasan', description: 'La vetta più alta della Corea del Sud (1947 m) è un vulcano dormiente con il lago craterico Baengnokdam in cima. Andata e ritorno sui sentieri Seongpanak o Gwaneumsa richiedono 8–9 ore.', tip: 'Per i sentieri verso la vetta serve una registrazione online gratuita in anticipo; parti prima delle 8, perché verso mezzogiorno il punto di controllo a metà percorso chiude la salita.' },
      },
    },
    {
      id: 'jeju-jeongbang-falls', city: 'jeju', category: 'nature', spot: 'insta', lat: 33.2449, lng: 126.5717, image: 'im8qk20M2kc',
      rating: 4.5, reviews: 12600, tags: ['waterfalls', 'photo', 'nature'],
      address: '37 Chilsimni-ro 214beon-gil, Seogwipo, Jeju',
      text: {
        ru: { name: 'Водопад Чонбан', description: '23-метровый водопад в Согвипхо, который падает прямо в море с базальтовых скал, — один из немногих таких в Азии.', tip: 'Спуститесь по лестнице к чёрным валунам у самой воды: оттуда в кадр помещаются и струи водопада, и волны; лучший свет — во второй половине дня.' },
        en: { name: 'Jeongbang Falls', description: 'A 23-metre waterfall in Seogwipo that plunges straight into the sea from basalt cliffs, one of the few of its kind in Asia.', tip: 'Take the stairs down to the black boulders at the water’s edge to frame both the falls and the waves; the light is best in the afternoon.' },
        es: { name: 'Cascada de Jeongbang', description: 'Una cascada de 23 metros en Seogwipo que cae directamente al mar desde acantilados de basalto, una de las pocas así en Asia.', tip: 'Baja por las escaleras hasta las rocas negras junto al agua para encuadrar la cascada y las olas; la mejor luz es por la tarde.' },
        de: { name: 'Jeongbang-Wasserfall', description: 'Ein 23 Meter hoher Wasserfall in Seogwipo, der von Basaltklippen direkt ins Meer stürzt – einer der wenigen dieser Art in Asien.', tip: 'Steig die Treppe hinab zu den schwarzen Felsbrocken am Wasser, dann hast du Wasserfall und Wellen im Bild; das beste Licht ist am Nachmittag.' },
        fr: { name: 'Cascade de Jeongbang', description: 'Une cascade de 23 mètres à Seogwipo qui tombe directement dans la mer depuis des falaises de basalte, l’une des rares de ce type en Asie.', tip: 'Descendez l’escalier jusqu’aux rochers noirs au bord de l’eau pour cadrer à la fois la chute et les vagues ; la lumière est plus belle l’après-midi.' },
        it: { name: 'Cascata di Jeongbang', description: 'Una cascata di 23 metri a Seogwipo che precipita direttamente in mare da scogliere di basalto, una delle poche del genere in Asia.', tip: 'Scendi le scale fino ai massi neri sul bagnasciuga per inquadrare sia la cascata sia le onde; la luce migliore è nel pomeriggio.' },
      },
    },
    {
      id: 'jeju-stone-park', city: 'jeju', category: 'attraction', spot: 'hidden', lat: 33.4469, lng: 126.6627, image: 'OoxcY9BIQQ8',
      rating: 4.5, reviews: 3900, tags: ['culture', 'history', 'nature'],
      address: '2023 Namjo-ro, Jocheon-eup, Jeju',
      text: {
        ru: { name: 'Каменный парк Чеджу', description: 'Огромный парк-музей среди леса, посвящённый вулканическому камню и мифам острова: сотни статуй-хранителей тольхарубан, каменные стелы и традиционная деревня из базальта. Туристические автобусы сюда заезжают редко.', tip: 'Он в 30 минутах езды от аэропорта, по дороге на восток острова; выделите на прогулку по всем маршрутам не меньше двух часов.' },
        en: { name: 'Jeju Stone Park', description: 'A vast forest park and museum devoted to volcanic stone and the island’s myths: hundreds of dol hareubang guardian statues, stone stelae and a traditional basalt village. Tour buses rarely stop here.', tip: 'It is 30 minutes’ drive from the airport on the way to the east of the island; allow at least two hours to walk all the routes.' },
        es: { name: 'Parque de Piedra de Jeju', description: 'Un enorme parque-museo en el bosque dedicado a la piedra volcánica y a los mitos de la isla: cientos de estatuas guardianas dol hareubang, estelas de piedra y una aldea tradicional de basalto. Los autobuses turísticos rara vez paran aquí.', tip: 'Está a 30 minutos en coche del aeropuerto, camino del este de la isla; reserva al menos dos horas para recorrer todas las rutas.' },
        de: { name: 'Jeju Stone Park', description: 'Ein riesiger Waldpark mit Museum, der dem Vulkangestein und den Mythen der Insel gewidmet ist: Hunderte Wächterstatuen Dol Hareubang, Steinstelen und ein traditionelles Basaltdorf. Reisebusse halten hier selten.', tip: 'Er liegt 30 Autominuten vom Flughafen auf dem Weg in den Osten der Insel; plane mindestens zwei Stunden für alle Rundwege ein.' },
        fr: { name: 'Parc de pierre de Jeju', description: 'Un vaste parc-musée en pleine forêt consacré à la pierre volcanique et aux mythes de l’île : des centaines de statues gardiennes dol hareubang, des stèles et un village traditionnel en basalte. Les cars de touristes s’y arrêtent rarement.', tip: 'Il se trouve à 30 minutes de route de l’aéroport, en direction de l’est de l’île ; comptez au moins deux heures pour parcourir tous les circuits.' },
        it: { name: 'Parco della pietra di Jeju', description: 'Un vasto parco-museo nel bosco dedicato alla pietra vulcanica e ai miti dell’isola: centinaia di statue guardiane dol hareubang, stele di pietra e un villaggio tradizionale in basalto. I pullman turistici ci si fermano di rado.', tip: 'Dista 30 minuti d’auto dall’aeroporto, sulla strada per l’est dell’isola; calcola almeno due ore per percorrere tutti gli itinerari.' },
      },
    },
    {
      id: 'jeju-dongmun-market', city: 'jeju', category: 'food', lat: 33.5121, lng: 126.5262, image: 'xFQ0xywW5g4',
      rating: 4.3, reviews: 15200, tags: ['market', 'streetfood', 'food'], price: { kind: 'level', level: 1 },
      address: '20 Gwandeok-ro 14-gil, Jeju',
      text: {
        ru: { name: 'Рынок Тонмун', description: 'Старейший постоянный рынок острова в центре города Чеджу: мандарины ханрабон, сушёная рыба, морские деликатесы, а вечером — ночной рынок с уличной едой.', tip: 'Приходите после шести вечера на ночной рынок и попробуйте шашлычки из чёрной свинины и свежевыжатый сок ханрабона.' },
        en: { name: 'Dongmun Market', description: 'The island’s oldest permanent market in the centre of Jeju City: hallabong tangerines, dried fish and seafood delicacies, plus a night market of street food in the evening.', tip: 'Come after 6 p.m. for the night market and try black pork skewers and freshly squeezed hallabong juice.' },
        es: { name: 'Mercado de Dongmun', description: 'El mercado permanente más antiguo de la isla, en el centro de la ciudad de Jeju: mandarinas hallabong, pescado seco y delicias del mar, y por la noche un mercado nocturno de comida callejera.', tip: 'Ven después de las seis para el mercado nocturno y prueba las brochetas de cerdo negro y el zumo recién exprimido de hallabong.' },
        de: { name: 'Dongmun-Markt', description: 'Der älteste ständige Markt der Insel im Zentrum von Jeju-Stadt: Hallabong-Mandarinen, getrockneter Fisch und Meeresdelikatessen, abends dazu ein Nachtmarkt mit Straßenessen.', tip: 'Komm nach 18 Uhr zum Nachtmarkt und probier Spieße vom schwarzen Schwein und frisch gepressten Hallabong-Saft.' },
        fr: { name: 'Marché de Dongmun', description: 'Le plus ancien marché permanent de l’île, au centre de Jeju-ville : mandarines hallabong, poisson séché et délices de la mer, avec le soir un marché de nuit de cuisine de rue.', tip: 'Venez après 18 heures pour le marché de nuit et goûtez les brochettes de porc noir et le jus de hallabong fraîchement pressé.' },
        it: { name: 'Mercato di Dongmun', description: 'Il mercato permanente più antico dell’isola, nel centro di Jeju City: mandarini hallabong, pesce essiccato e prelibatezze di mare, e la sera un mercato notturno di cibo di strada.', tip: 'Vieni dopo le 18 per il mercato notturno e assaggia gli spiedini di maiale nero e il succo di hallabong appena spremuto.' },
      },
    },
  ],
};

export default pack;
