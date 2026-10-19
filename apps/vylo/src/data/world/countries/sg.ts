import type { CountryPack } from '../types';

const pack: CountryPack = {
  country: {
    code: 'SG',
    region: 'sea',
    image: '17IW7yH4U2o',
    theme: { accent: '#0d9488', accent2: '#ef4444', motif: 'grid' },
    fromMoscow: { hours: 14, direct: false },
    text: {
      ru: {
        tagline: 'Город-сад будущего: супердеревья, хокер-центры и острова',
        description: 'Сингапур — крошечное государство на экваторе, где небоскрёбы оплетены тропической зеленью, а в соседних кварталах живут китайские, малайские и индийские традиции. Здесь чисто, безопасно и очень вкусно: за ужином в хокер-центре можно попробовать блюдо со звездой Мишлен за несколько долларов.',
        howToGet: 'Прямых рейсов из Москвы нет: обычно летят с пересадкой в Дубае, Дохе, Стамбуле, Бангкоке или Гонконге — в пути 13–16 часов. Аэропорт Чанги с водопадом Jewel соединён с городом метро MRT; по Сингапуру удобно ездить на метро и автобусах, а для такси есть Grab и Gojek. До Сентозы доходят пешком, на монорельсе или по канатной дороге.',
        tips: [
          'Российские Visa и Mastercard здесь не работают: везите доллары или евро на обмен в лицензированные обменники торговых центров, а карты UnionPay принимают очень широко.',
          'Для метро и автобусов купите карту EZ-Link или Singapore Tourist Pass и пополняйте её наличными в автоматах на станциях.',
          'Штрафы здесь реальны: в метро нельзя есть и пить, жевательную резинку запрещено ввозить, а переходить дорогу нужно только по переходу.',
        ],
        guide: {
          title: 'Сингапур за 4 дня',
          sections: [
            { title: 'Когда ехать', body: 'Сингапур лежит в полутора сотнях километров от экватора, поэтому круглый год днём около +31 °C и высокая влажность. Суше всего с февраля по апрель, а с ноября по январь северо-восточный муссон приносит затяжные ливни. Зато в январе или феврале Чайнатаун украшают к Китайскому Новому году, а осенью по улицам Марина-Бэй проносится ночная гонка Формулы-1. Зонт пригодится в любой сезон.' },
            { title: 'Маршрут на 4 дня', body: 'День первый — Марина-Бэй: сады Gardens by the Bay, вечернее шоу супердеревьев и вид на залив с Marina Bay Sands. День второй — Чайнатаун, Литл-Индия и Кампонг-Гелам с мечетью Султана и муралами Хаджи-лейн. Третий день отдайте Сентозе с пляжами, Universal Studios и фортом Силосо. В четвёртый — Ботанический сад с орхидеями, квартал Тионг Бару и ночное сафари.' },
            { title: 'Что попробовать', body: 'Главная кухня страны — в хокер-центрах вроде Lau Pa Sat, Maxwell и Old Airport Road. Закажите курицу с рисом по-хайнаньски, острую лаксу на кокосовом молоке, жареную лапшу чар квей теоу и сатай на углях. Краб в соусе чили лучше есть в рыбных ресторанах на Ист-Кост. Утро начните по-местному: тосты с кокосовым джемом кайя, яйца всмятку и крепкий кофе копи.' },
            { title: 'Деньги, связь и транспорт', body: 'Валюта — сингапурский доллар (SGD), и цены здесь одни из самых высоких в Азии. Карты российских банков не работают, поэтому берите наличные доллары или евро и меняйте их в лицензированных обменниках. Сим-карты Singtel, StarHub и M1 продают в аэропорту Чанги по паспорту. Метро MRT покрывает весь город и ходит примерно до полуночи, а Grab и Gojek выручат поздно вечером.' },
          ],
        },
      },
      en: {
        tagline: 'A garden city of the future: supertrees, hawker centres and islands',
        description: 'Singapore is a tiny equatorial nation where skyscrapers are draped in tropical greenery and Chinese, Malay and Indian traditions live side by side in neighbouring districts. It is clean, safe and delicious: dinner at a hawker centre can include a Michelin-starred dish for a few dollars.',
        howToGet: 'There are no direct flights from Moscow: the usual connections are via Dubai, Doha, Istanbul, Bangkok or Hong Kong, 13–16 hours in total. Changi Airport, home to the Jewel waterfall, is linked to the city by the MRT; getting around Singapore is easy by metro and bus, with Grab and Gojek for taxis. Sentosa can be reached on foot, by monorail or by cable car.',
        tips: [
          'Russian-issued Visa and Mastercard cards don’t work here, so bring dollars or euros to exchange at licensed money changers in shopping centres; UnionPay is very widely accepted.',
          'For the metro and buses, buy an EZ-Link card or a Singapore Tourist Pass and top it up with cash at station machines.',
          'Fines are real here: no eating or drinking on the metro, no bringing in chewing gum, and cross the road only at crossings.',
        ],
        guide: {
          title: 'Singapore in 4 days',
          sections: [
            { title: 'When to go', body: 'Singapore lies about 140 kilometres from the equator, so daytime temperatures hover around 31 °C all year with high humidity. February to April is the driest stretch, while from November to January the northeast monsoon brings long downpours. In January or February Chinatown dresses up for Chinese New Year, and in autumn the Formula 1 night race roars through the streets of Marina Bay. An umbrella is useful in any season.' },
            { title: 'A 4-day route', body: 'Day one is Marina Bay: Gardens by the Bay, the evening supertree show and the view over the bay from Marina Bay Sands. Day two covers Chinatown, Little India and Kampong Glam with the Sultan Mosque and the murals of Haji Lane. Give day three to Sentosa, with its beaches, Universal Studios and Fort Siloso. On day four visit the Botanic Gardens and their orchids, the Tiong Bahru neighbourhood and the Night Safari.' },
            { title: 'What to eat', body: 'The nation’s real cuisine lives in hawker centres such as Lau Pa Sat, Maxwell and Old Airport Road. Order Hainanese chicken rice, spicy coconut laksa, char kway teow fried noodles and charcoal-grilled satay. Chilli crab is best at the seafood restaurants on the East Coast. Start the day the local way with kaya toast, soft-boiled eggs and strong kopi coffee.' },
            { title: 'Money, SIM cards and transport', body: 'The currency is the Singapore dollar (SGD), and prices are among the highest in Asia. Russian bank cards don’t work, so bring cash in dollars or euros and exchange it at licensed money changers. Singtel, StarHub and M1 SIM cards are sold at Changi Airport on presentation of your passport. The MRT covers the whole city and runs until around midnight, and Grab and Gojek come to the rescue late at night.' },
          ],
        },
      },
      es: {
        tagline: 'Una ciudad jardín del futuro: superárboles, hawker centres e islas',
        description: 'Singapur es un pequeño país ecuatorial donde los rascacielos se cubren de vegetación tropical y las tradiciones china, malaya e india conviven en barrios vecinos. Es limpio, seguro y delicioso: una cena en un hawker centre puede incluir un plato con estrella Michelin por unos pocos dólares.',
        howToGet: 'No hay vuelos directos desde Moscú: lo habitual es hacer escala en Dubái, Doha, Estambul, Bangkok o Hong Kong, con 13–16 horas de viaje en total. El aeropuerto de Changi, con la cascada del Jewel, está conectado con la ciudad por el MRT; moverse por Singapur en metro y autobús es fácil, y para los taxis están Grab y Gojek. A Sentosa se llega a pie, en monorraíl o en teleférico.',
        tips: [
          'Las tarjetas Visa y Mastercard emitidas en Rusia no funcionan aquí: lleva dólares o euros para cambiar en las casas de cambio autorizadas de los centros comerciales; UnionPay se acepta muy ampliamente.',
          'Para el metro y los autobuses compra una tarjeta EZ-Link o un Singapore Tourist Pass y recárgala en efectivo en las máquinas de las estaciones.',
          'Las multas van en serio: no se puede comer ni beber en el metro, está prohibido entrar chicle y la calle se cruza solo por los pasos de peatones.',
        ],
        guide: {
          title: 'Singapur en 4 días',
          sections: [
            { title: 'Cuándo ir', body: 'Singapur está a unos 140 kilómetros del ecuador, así que durante todo el año ronda los 31 °C de día con mucha humedad. De febrero a abril es la época más seca, mientras que de noviembre a enero el monzón del noreste trae lluvias prolongadas. En enero o febrero Chinatown se engalana para el Año Nuevo chino, y en otoño la carrera nocturna de Fórmula 1 recorre las calles de Marina Bay. El paraguas sirve en cualquier estación.' },
            { title: 'Ruta de 4 días', body: 'El primer día, Marina Bay: Gardens by the Bay, el espectáculo nocturno de los superárboles y la vista de la bahía desde Marina Bay Sands. El segundo, Chinatown, Little India y Kampong Glam, con la mezquita del Sultán y los murales de Haji Lane. Dedica el tercero a Sentosa, con sus playas, Universal Studios y el fuerte Siloso. El cuarto, el Jardín Botánico y sus orquídeas, el barrio de Tiong Bahru y el Night Safari.' },
            { title: 'Qué probar', body: 'La verdadera cocina del país está en hawker centres como Lau Pa Sat, Maxwell u Old Airport Road. Pide arroz con pollo hainanés, laksa picante con leche de coco, fideos salteados char kway teow y satay a la brasa. El cangrejo al chile se disfruta mejor en las marisquerías de la East Coast. Empieza el día como los locales: tostadas con mermelada de coco kaya, huevos pasados por agua y café kopi bien cargado.' },
            { title: 'Dinero, móvil y transporte', body: 'La moneda es el dólar de Singapur (SGD) y los precios están entre los más altos de Asia. Las tarjetas de bancos rusos no funcionan, así que lleva efectivo en dólares o euros y cámbialo en casas de cambio autorizadas. Las SIM de Singtel, StarHub y M1 se venden en el aeropuerto de Changi con el pasaporte. El MRT cubre toda la ciudad y funciona hasta cerca de medianoche, y Grab y Gojek te salvan a última hora.' },
          ],
        },
      },
      de: {
        tagline: 'Gartenstadt der Zukunft: Supertrees, Hawker Centres und Inseln',
        description: 'Singapur ist ein winziger Staat am Äquator, in dem Wolkenkratzer von tropischem Grün überwuchert sind und chinesische, malaiische und indische Traditionen in benachbarten Vierteln leben. Es ist sauber, sicher und köstlich: Im Hawker Centre bekommst du ein Gericht mit Michelin-Stern für ein paar Dollar.',
        howToGet: 'Direktflüge ab Moskau gibt es nicht: Üblich ist ein Umstieg in Dubai, Doha, Istanbul, Bangkok oder Hongkong, insgesamt 13–16 Stunden. Der Flughafen Changi mit dem Jewel-Wasserfall ist per MRT mit der Stadt verbunden; in Singapur kommst du bequem mit Metro und Bus voran, für Taxis gibt es Grab und Gojek. Nach Sentosa gelangst du zu Fuß, mit der Einschienenbahn oder per Seilbahn.',
        tips: [
          'In Russland ausgegebene Visa- und Mastercard-Karten funktionieren hier nicht – nimm Dollar oder Euro mit und tausche sie bei lizenzierten Wechselstuben in Einkaufszentren; UnionPay wird sehr breit akzeptiert.',
          'Für Metro und Busse kaufst du eine EZ-Link-Karte oder einen Singapore Tourist Pass und lädst ihn an den Automaten in den Stationen mit Bargeld auf.',
          'Die Strafen sind ernst gemeint: In der Metro wird nicht gegessen oder getrunken, Kaugummi darf nicht eingeführt werden, und über die Straße geht es nur am Überweg.',
        ],
        guide: {
          title: 'Singapur in 4 Tagen',
          sections: [
            { title: 'Reisezeit', body: 'Singapur liegt etwa 140 Kilometer vom Äquator entfernt, tagsüber sind es das ganze Jahr rund 31 °C bei hoher Luftfeuchtigkeit. Am trockensten ist es von Februar bis April, von November bis Januar bringt der Nordostmonsun lange Regengüsse. Im Januar oder Februar schmückt sich Chinatown für das chinesische Neujahr, und im Herbst donnert das Formel-1-Nachtrennen durch die Straßen von Marina Bay. Ein Schirm ist zu jeder Jahreszeit nützlich.' },
            { title: 'Route für 4 Tage', body: 'Tag eins gehört Marina Bay: Gardens by the Bay, die abendliche Supertree-Show und der Blick über die Bucht vom Marina Bay Sands. Tag zwei führt nach Chinatown, Little India und Kampong Glam mit der Sultan-Moschee und den Wandbildern der Haji Lane. Den dritten Tag widmest du Sentosa mit Stränden, Universal Studios und Fort Siloso. Am vierten folgen der Botanische Garten mit seinen Orchideen, das Viertel Tiong Bahru und die Night Safari.' },
            { title: 'Was du probieren solltest', body: 'Die echte Küche des Landes findest du in Hawker Centres wie Lau Pa Sat, Maxwell und Old Airport Road. Bestell Hainan-Hühnerreis, scharfe Laksa mit Kokosmilch, gebratene Char-Kway-Teow-Nudeln und Satay vom Holzkohlegrill. Chilikrabbe isst man am besten in den Fischrestaurants an der East Coast. Beginne den Tag wie die Einheimischen mit Kaya-Toast, weichen Eiern und starkem Kopi-Kaffee.' },
            { title: 'Geld, Handy und Verkehr', body: 'Die Währung ist der Singapur-Dollar (SGD), die Preise gehören zu den höchsten Asiens. Russische Bankkarten funktionieren nicht, also nimm Bargeld in Dollar oder Euro mit und tausche es bei lizenzierten Wechselstuben. SIM-Karten von Singtel, StarHub und M1 gibt es am Flughafen Changi gegen Vorlage des Passes. Die MRT deckt die ganze Stadt ab und fährt bis etwa Mitternacht, spätabends helfen Grab und Gojek.' },
          ],
        },
      },
      fr: {
        tagline: 'Une cité-jardin du futur : supertrees, hawker centres et îles',
        description: 'Singapour est un minuscule État équatorial où les gratte-ciel sont drapés de verdure tropicale et où les traditions chinoises, malaises et indiennes cohabitent dans des quartiers voisins. Propre, sûre et savoureuse, la ville permet de dîner dans un hawker centre d’un plat étoilé au Michelin pour quelques dollars.',
        howToGet: 'Il n’existe pas de vol direct depuis Moscou : on passe généralement par Dubaï, Doha, Istanbul, Bangkok ou Hong Kong, soit 13 à 16 heures de trajet. L’aéroport de Changi, avec la cascade du Jewel, est relié à la ville par le MRT ; on circule facilement en métro et en bus, et Grab et Gojek font office de taxis. Sentosa se rejoint à pied, en monorail ou en téléphérique.',
        tips: [
          'Les cartes Visa et Mastercard émises en Russie ne fonctionnent pas ici : emportez des dollars ou des euros à changer dans les bureaux de change agréés des centres commerciaux ; UnionPay est très largement accepté.',
          'Pour le métro et les bus, achetez une carte EZ-Link ou un Singapore Tourist Pass et rechargez-le en espèces aux automates des stations.',
          'Les amendes sont bien réelles : interdiction de manger et de boire dans le métro, d’importer du chewing-gum, et l’on ne traverse qu’aux passages piétons.',
        ],
        guide: {
          title: 'Singapour en 4 jours',
          sections: [
            { title: 'Quand partir', body: 'Singapour se trouve à quelque 140 kilomètres de l’équateur : toute l’année, il fait environ 31 °C le jour avec une forte humidité. Février à avril est la période la plus sèche, tandis que de novembre à janvier la mousson du nord-est apporte de longues averses. En janvier ou février, Chinatown se pare pour le Nouvel An chinois, et à l’automne le Grand Prix de Formule 1 nocturne file dans les rues de Marina Bay. Un parapluie sert en toute saison.' },
            { title: 'Itinéraire de 4 jours', body: 'Premier jour à Marina Bay : Gardens by the Bay, le spectacle nocturne des supertrees et la vue sur la baie depuis Marina Bay Sands. Le deuxième, Chinatown, Little India et Kampong Glam, avec la mosquée du Sultan et les fresques de Haji Lane. Consacrez le troisième à Sentosa, ses plages, Universal Studios et le fort Siloso. Le quatrième, place au Jardin botanique et à ses orchidées, au quartier de Tiong Bahru et au Night Safari.' },
            { title: 'Que goûter', body: 'La vraie cuisine du pays se trouve dans les hawker centres comme Lau Pa Sat, Maxwell ou Old Airport Road. Commandez le riz au poulet hainanais, le laksa pimenté au lait de coco, les nouilles sautées char kway teow et les satay grillés au charbon. Le crabe au piment se déguste plutôt dans les restaurants de fruits de mer de l’East Coast. Commencez la journée à la locale avec des toasts au kaya, des œufs mollets et un kopi bien serré.' },
            { title: 'Argent, téléphone et transports', body: 'La monnaie est le dollar de Singapour (SGD), et les prix comptent parmi les plus élevés d’Asie. Les cartes des banques russes ne fonctionnent pas : prévoyez des dollars ou des euros en espèces à changer dans les bureaux agréés. Les cartes SIM Singtel, StarHub et M1 se vendent à l’aéroport de Changi sur présentation du passeport. Le MRT couvre toute la ville et circule jusque vers minuit ; tard le soir, Grab et Gojek prennent le relais.' },
          ],
        },
      },
      it: {
        tagline: 'Una città giardino del futuro: supertree, hawker centre e isole',
        description: 'Singapore è un minuscolo Stato equatoriale dove i grattacieli sono avvolti dal verde tropicale e le tradizioni cinesi, malesi e indiane convivono in quartieri vicini. È pulita, sicura e golosa: una cena in un hawker centre può includere un piatto stellato Michelin per pochi dollari.',
        howToGet: 'Non ci sono voli diretti da Mosca: di solito si fa scalo a Dubai, Doha, Istanbul, Bangkok o Hong Kong, per 13–16 ore complessive. L’aeroporto di Changi, con la cascata del Jewel, è collegato alla città dalla MRT; muoversi a Singapore in metro e autobus è semplice, e per i taxi ci sono Grab e Gojek. Sentosa si raggiunge a piedi, in monorotaia o in funivia.',
        tips: [
          'Le carte Visa e Mastercard emesse in Russia qui non funzionano: porta dollari o euro da cambiare nei cambiavalute autorizzati dei centri commerciali; UnionPay è accettata quasi ovunque.',
          'Per metro e autobus compra una carta EZ-Link o un Singapore Tourist Pass e ricaricala in contanti alle macchinette delle stazioni.',
          'Le multe sono serie: in metro non si mangia né si beve, è vietato portare chewing gum e la strada si attraversa solo sulle strisce.',
        ],
        guide: {
          title: 'Singapore in 4 giorni',
          sections: [
            { title: 'Quando andare', body: 'Singapore si trova a circa 140 chilometri dall’equatore, quindi tutto l’anno di giorno ci sono circa 31 °C e tanta umidità. Il periodo più secco va da febbraio ad aprile, mentre da novembre a gennaio il monsone di nord-est porta lunghi acquazzoni. A gennaio o febbraio Chinatown si veste a festa per il Capodanno cinese e in autunno il Gran Premio notturno di Formula 1 sfreccia per le strade di Marina Bay. L’ombrello serve in ogni stagione.' },
            { title: 'Itinerario di 4 giorni', body: 'Il primo giorno è per Marina Bay: Gardens by the Bay, lo spettacolo serale dei supertree e la vista sulla baia dal Marina Bay Sands. Il secondo tocca Chinatown, Little India e Kampong Glam, con la moschea del Sultano e i murales di Haji Lane. Dedica il terzo a Sentosa, tra spiagge, Universal Studios e Fort Siloso. Il quarto, Giardino botanico con le orchidee, il quartiere di Tiong Bahru e il Night Safari.' },
            { title: 'Cosa assaggiare', body: 'La vera cucina del Paese vive negli hawker centre come Lau Pa Sat, Maxwell e Old Airport Road. Ordina il riso con pollo alla hainanese, la laksa piccante al latte di cocco, i noodles saltati char kway teow e il satay alla brace. Il granchio al peperoncino si gusta meglio nei ristoranti di pesce della East Coast. Inizia la giornata come la gente del posto: toast al kaya, uova alla coque e un kopi bello forte.' },
            { title: 'Soldi, telefono e trasporti', body: 'La valuta è il dollaro di Singapore (SGD) e i prezzi sono tra i più alti dell’Asia. Le carte delle banche russe non funzionano, quindi porta contanti in dollari o euro e cambiali nei cambiavalute autorizzati. Le SIM di Singtel, StarHub e M1 si comprano all’aeroporto di Changi presentando il passaporto. La MRT copre tutta la città e funziona fino a mezzanotte circa; a tarda sera ci sono Grab e Gojek.' },
          ],
        },
      },
    },
  },
  cities: [
    {
      id: 'sentosa', lat: 1.2494, lng: 103.8303, image: 'cQgIFWY9MO4', gallery: [],
      rating: 4.5, reviews: 9640, tags: ['beaches', 'islands', 'adventure', 'nightlife'], months: [2, 3, 4, 5, 6, 7, 8], budgetPerDay: 150, currency: 'SGD',
      language: 'en', timezone: 'UTC+8', zoom: 13, theme: { accent: '#0284c7', accent2: '#facc15', motif: 'waves' },
      text: {
        ru: { name: 'Сентоза', tagline: 'Остров развлечений: пляжи, Universal Studios и старые форты', description: 'Бывший военный остров у южного берега Сингапура превратился в большой курорт: три пляжа с пальмами, парк Universal Studios, океанариум, канатная дорога и форт времён Второй мировой. Сюда приезжают на целый день или остаются на пару ночей в отеле у моря.', tips: ['С материка проще всего дойти пешком по крытому променаду Sentosa Boardwalk от торгового центра VivoCity, а по самому острову бесплатно ходят автобусы.', 'К закату перебирайтесь на пляж Силосо: солнце садится над морем с кораблями на рейде, а в пляжных барах начинается музыка.'], gettingThere: 'От станции метро HarbourFront до острова 10–15 минут пешком по променаду, можно доехать на монорельсе Sentosa Express или прилететь по канатной дороге с горы Фабер. Из аэропорта Чанги — около 30 минут на Grab.' },
        en: { name: 'Sentosa', tagline: 'Island of fun: beaches, Universal Studios and old forts', description: 'This former military island off Singapore’s south coast has become a sprawling resort with three palm-lined beaches, Universal Studios, an aquarium, a cable car and a Second World War fort. People come for a full day or stay a couple of nights by the sea.', tips: ['The easiest way over from the mainland is on foot along the covered Sentosa Boardwalk from VivoCity mall, and free buses run around the island itself.', 'Head to Siloso Beach for sunset, when the sun sinks over a sea dotted with anchored ships and the beach bars turn up the music.'], gettingThere: 'From HarbourFront MRT station it is a 10–15-minute walk along the boardwalk, or take the Sentosa Express monorail or the cable car from Mount Faber. From Changi Airport it is about 30 minutes by Grab.' },
        es: { name: 'Sentosa', tagline: 'La isla de la diversión: playas, Universal Studios y viejos fuertes', description: 'Esta antigua isla militar frente a la costa sur de Singapur se ha convertido en un gran complejo turístico con tres playas de palmeras, Universal Studios, un acuario, un teleférico y un fuerte de la Segunda Guerra Mundial. Se viene a pasar el día o a quedarse un par de noches junto al mar.', tips: ['Desde la isla principal lo más fácil es cruzar a pie por el paseo cubierto Sentosa Boardwalk desde el centro comercial VivoCity; dentro de la isla circulan autobuses gratuitos.', 'Al atardecer ve a la playa de Siloso: el sol se pone sobre un mar salpicado de barcos fondeados y en los chiringuitos empieza la música.'], gettingThere: 'Desde la estación de MRT HarbourFront son 10–15 minutos a pie por el paseo, o puedes tomar el monorraíl Sentosa Express o el teleférico desde el monte Faber. Desde el aeropuerto de Changi, unos 30 minutos en Grab.' },
        de: { name: 'Sentosa', tagline: 'Insel des Vergnügens: Strände, Universal Studios und alte Forts', description: 'Die einstige Militärinsel vor Singapurs Südküste ist heute ein weitläufiges Resort mit drei palmengesäumten Stränden, Universal Studios, einem Aquarium, einer Seilbahn und einem Fort aus dem Zweiten Weltkrieg. Man kommt für einen ganzen Tag oder bleibt ein paar Nächte am Meer.', tips: ['Vom Festland gehst du am einfachsten zu Fuß über den überdachten Sentosa Boardwalk ab dem Einkaufszentrum VivoCity; auf der Insel selbst fahren kostenlose Busse.', 'Zum Sonnenuntergang geht es an den Siloso Beach: Die Sonne versinkt über einem Meer voller ankernder Schiffe, und in den Strandbars beginnt die Musik.'], gettingThere: 'Von der MRT-Station HarbourFront sind es 10–15 Gehminuten über den Boardwalk, alternativ nimmst du die Einschienenbahn Sentosa Express oder die Seilbahn vom Mount Faber. Vom Flughafen Changi dauert es etwa 30 Minuten per Grab.' },
        fr: { name: 'Sentosa', tagline: 'L’île des loisirs : plages, Universal Studios et vieux forts', description: 'Cette ancienne île militaire au large de la côte sud de Singapour est devenue un vaste lieu de villégiature avec trois plages bordées de palmiers, Universal Studios, un aquarium, un téléphérique et un fort de la Seconde Guerre mondiale. On y vient pour la journée ou pour quelques nuits au bord de la mer.', tips: ['Depuis l’île principale, le plus simple est de traverser à pied par la promenade couverte Sentosa Boardwalk depuis le centre commercial VivoCity ; sur l’île, des bus gratuits circulent.', 'Au coucher du soleil, rejoignez la plage de Siloso : le soleil plonge dans une mer constellée de navires au mouillage et la musique démarre dans les bars de plage.'], gettingThere: 'Depuis la station de MRT HarbourFront, comptez 10 à 15 minutes à pied par la promenade, ou prenez le monorail Sentosa Express ou le téléphérique du mont Faber. Depuis l’aéroport de Changi, environ 30 minutes en Grab.' },
        it: { name: 'Sentosa', tagline: 'L’isola del divertimento: spiagge, Universal Studios e vecchi forti', description: 'Questa ex isola militare al largo della costa meridionale di Singapore è diventata un grande resort con tre spiagge orlate di palme, Universal Studios, un acquario, una funivia e un forte della Seconda guerra mondiale. Si viene per una giornata intera o per un paio di notti in riva al mare.', tips: ['Dall’isola principale il modo più semplice è attraversare a piedi la passerella coperta Sentosa Boardwalk dal centro commerciale VivoCity; sull’isola girano autobus gratuiti.', 'Al tramonto spostati sulla spiaggia di Siloso: il sole cala su un mare punteggiato di navi alla fonda e nei bar sulla spiaggia parte la musica.'], gettingThere: 'Dalla stazione MRT HarbourFront sono 10–15 minuti a piedi lungo la passerella, oppure prendi la monorotaia Sentosa Express o la funivia dal Mount Faber. Dall’aeroporto di Changi, circa 30 minuti in Grab.' },
      },
    },
  ],
  places: [
    {
      id: 'sentosa-universal-studios', city: 'sentosa', category: 'attraction', lat: 1.254, lng: 103.8238, image: 'cQgIFWY9MO4',
      rating: 4.6, reviews: 61500, tags: ['adventure', 'photo'],
      address: '8 Sentosa Gateway, Resorts World Sentosa, Singapore 098269',
      text: {
        ru: { name: 'Universal Studios Singapore', description: 'Единственный парк Universal в Юго-Восточной Азии: семь тематических зон от Голливуда и Древнего Египта до «Шрека» и Парка юрского периода. Главные хиты — аттракцион «Трансформеры» и двойные американские горки Battlestar Galactica.', tip: 'Приходите к открытию и сразу идите на самые популярные аттракционы; в будни очереди заметно короче, чем в выходные.' },
        en: { name: 'Universal Studios Singapore', description: 'Southeast Asia’s only Universal park, with seven themed zones from Hollywood and Ancient Egypt to Shrek’s Far Far Away and Jurassic Park. The big hits are the Transformers ride and the Battlestar Galactica duelling roller coasters.', tip: 'Arrive at opening time and head straight for the most popular rides; queues are much shorter on weekdays than at weekends.' },
        es: { name: 'Universal Studios Singapore', description: 'El único parque Universal del Sudeste Asiático, con siete zonas temáticas que van de Hollywood y el Antiguo Egipto a Shrek y Parque Jurásico. Los grandes éxitos son la atracción de Transformers y las montañas rusas gemelas Battlestar Galactica.', tip: 'Llega a la hora de apertura y ve directo a las atracciones más populares; entre semana las colas son mucho más cortas que el fin de semana.' },
        de: { name: 'Universal Studios Singapore', description: 'Der einzige Universal-Park Südostasiens mit sieben Themenwelten von Hollywood und dem Alten Ägypten bis zu Shrek und Jurassic Park. Die großen Hits sind die Transformers-Fahrt und die Duell-Achterbahnen Battlestar Galactica.', tip: 'Sei zur Öffnung da und geh direkt zu den beliebtesten Fahrgeschäften; unter der Woche sind die Schlangen deutlich kürzer als am Wochenende.' },
        fr: { name: 'Universal Studios Singapore', description: 'Le seul parc Universal d’Asie du Sud-Est, avec sept zones thématiques, d’Hollywood et l’Égypte ancienne à Shrek et Jurassic Park. Les grands succès sont l’attraction Transformers et les montagnes russes jumelles Battlestar Galactica.', tip: 'Arrivez à l’ouverture et filez vers les attractions les plus prisées ; en semaine, les files sont bien plus courtes que le week-end.' },
        it: { name: 'Universal Studios Singapore', description: 'L’unico parco Universal del Sud-est asiatico, con sette aree tematiche che vanno da Hollywood e dall’Antico Egitto a Shrek e Jurassic Park. I grandi successi sono l’attrazione dei Transformers e le montagne russe gemelle Battlestar Galactica.', tip: 'Arriva all’apertura e vai subito alle attrazioni più gettonate; nei giorni feriali le code sono molto più brevi che nel weekend.' },
      },
    },
    {
      id: 'sentosa-siloso-beach', city: 'sentosa', category: 'nature', lat: 1.2557, lng: 103.8118, image: 'cQgIFWY9MO4',
      rating: 4.4, reviews: 17800, tags: ['beaches', 'sunset', 'nightlife'], price: { kind: 'free' }, hours: 'always',
      address: 'Siloso Beach Walk, Sentosa, Singapore',
      text: {
        ru: { name: 'Пляж Силосо', description: 'Самый оживлённый пляж острова: белый песок, пальмы, площадки для пляжного волейбола и бары с музыкой. Купаться здесь можно круглый год — вода около +29 °C.', tip: 'Возьмите напрокат каяк или сап, а на закат займите столик в баре у кромки воды.' },
        en: { name: 'Siloso Beach', description: 'The island’s liveliest beach, with white sand, palms, beach-volleyball courts and bars with music. You can swim here all year round, with the water at about 29 °C.', tip: 'Rent a kayak or paddleboard, then grab a table at a waterfront bar for sunset.' },
        es: { name: 'Playa de Siloso', description: 'La playa más animada de la isla: arena blanca, palmeras, pistas de vóley playa y bares con música. Aquí se puede nadar todo el año, con el agua a unos 29 °C.', tip: 'Alquila un kayak o una tabla de paddle surf y, al atardecer, coge mesa en un bar junto al agua.' },
        de: { name: 'Siloso Beach', description: 'Der lebhafteste Strand der Insel mit weißem Sand, Palmen, Beachvolleyballfeldern und Bars mit Musik. Baden kannst du hier das ganze Jahr, das Wasser hat rund 29 °C.', tip: 'Leih dir ein Kajak oder ein SUP-Board und sichere dir zum Sonnenuntergang einen Tisch in einer Bar am Wasser.' },
        fr: { name: 'Plage de Siloso', description: 'La plage la plus animée de l’île : sable blanc, palmiers, terrains de beach-volley et bars en musique. On s’y baigne toute l’année dans une eau à environ 29 °C.', tip: 'Louez un kayak ou un paddle, puis prenez une table dans un bar au bord de l’eau pour le coucher du soleil.' },
        it: { name: 'Spiaggia di Siloso', description: 'La spiaggia più vivace dell’isola: sabbia bianca, palme, campi da beach volley e bar con musica. Si fa il bagno tutto l’anno, con l’acqua a circa 29 °C.', tip: 'Noleggia un kayak o un SUP e al tramonto prendi un tavolo in un bar sul bagnasciuga.' },
      },
    },
    {
      id: 'sentosa-palawan-suspension-bridge', city: 'sentosa', category: 'nature', spot: 'insta', lat: 1.2489, lng: 103.8225, image: 'cQgIFWY9MO4',
      rating: 4.5, reviews: 8900, tags: ['photo', 'beaches', 'views'], price: { kind: 'free' },
      address: 'Palawan Beach, Sentosa, Singapore',
      text: {
        ru: { name: 'Подвесной мост на пляже Палаван', description: 'Раскачивающийся мост с пляжа Палаван ведёт на крошечный островок, который здесь называют самой южной точкой континентальной Азии. На островке стоят две деревянные смотровые башни.', tip: 'Поднимитесь на башню рано утром и снимайте мост сверху, пока на нём нет людей: в кадре будут бирюзовая лагуна и пальмы.' },
        en: { name: 'Palawan Beach Suspension Bridge', description: 'A swaying bridge from Palawan Beach leads to a tiny islet billed here as the southernmost point of continental Asia. Two wooden lookout towers stand on the islet.', tip: 'Climb a tower early in the morning and shoot the bridge from above before anyone is on it, with the turquoise lagoon and palms in the frame.' },
        es: { name: 'Puente colgante de Palawan', description: 'Un puente que se balancea sobre el agua lleva desde la playa de Palawan a un islote diminuto que aquí presentan como el punto más meridional de Asia continental. En él se alzan dos torres-mirador de madera.', tip: 'Sube a una torre temprano por la mañana y fotografía el puente desde arriba antes de que llegue gente, con la laguna turquesa y las palmeras en el encuadre.' },
        de: { name: 'Hängebrücke am Palawan Beach', description: 'Eine schwankende Brücke führt vom Palawan Beach zu einem winzigen Inselchen, das hier als südlichster Punkt des asiatischen Festlands beworben wird. Darauf stehen zwei hölzerne Aussichtstürme.', tip: 'Steig frühmorgens auf einen Turm und fotografiere die Brücke von oben, solange noch niemand darauf ist – mit türkiser Lagune und Palmen im Bild.' },
        fr: { name: 'Pont suspendu de Palawan', description: 'Un pont qui tangue relie la plage de Palawan à un minuscule îlot présenté ici comme le point le plus méridional de l’Asie continentale. Deux tours d’observation en bois s’y dressent.', tip: 'Montez dans une tour tôt le matin et photographiez le pont d’en haut avant l’arrivée des visiteurs, avec le lagon turquoise et les palmiers dans le cadre.' },
        it: { name: 'Ponte sospeso di Palawan', description: 'Un ponte oscillante collega la spiaggia di Palawan a un minuscolo isolotto presentato qui come il punto più meridionale dell’Asia continentale. Sull’isolotto si ergono due torri panoramiche in legno.', tip: 'Sali su una torre al mattino presto e fotografa il ponte dall’alto prima che arrivi gente, con la laguna turchese e le palme nell’inquadratura.' },
      },
    },
    {
      id: 'sentosa-fort-siloso', city: 'sentosa', category: 'attraction', spot: 'hidden', lat: 1.2594, lng: 103.8076, image: 'cQgIFWY9MO4',
      rating: 4.5, reviews: 5200, tags: ['history', 'views', 'museums'], price: { kind: 'free' }, hours: '10:00–18:00',
      address: 'Siloso Road, Sentosa, Singapore 099981',
      text: {
        ru: { name: 'Форт Силосо', description: 'Единственный сохранившийся береговой форт Сингапура: пушки, подземные тоннели и экспозиция о падении города в 1942 году. Многие доходят только до пляжа и даже не подозревают о нём.', tip: 'Поднимитесь на Fort Siloso Skywalk — одиннадцатиэтажную башню и висячую тропу над кронами деревьев с видом на гавань; вход бесплатный.' },
        en: { name: 'Fort Siloso', description: 'Singapore’s only surviving coastal fort, with guns, underground tunnels and an exhibition on the fall of Singapore in 1942. Many visitors stop at the beach and never realise it is there.', tip: 'Go up the Fort Siloso Skywalk, an 11-storey tower and treetop walkway with views over the harbour; entry is free.' },
        es: { name: 'Fuerte Siloso', description: 'El único fuerte costero que se conserva en Singapur, con cañones, túneles subterráneos y una exposición sobre la caída de la ciudad en 1942. Muchos se quedan en la playa sin saber que existe.', tip: 'Sube al Fort Siloso Skywalk, una torre de 11 plantas con pasarela sobre las copas de los árboles y vistas al puerto; la entrada es gratuita.' },
        de: { name: 'Fort Siloso', description: 'Singapurs einziges erhaltenes Küstenfort mit Geschützen, unterirdischen Tunneln und einer Ausstellung über den Fall Singapurs 1942. Viele bleiben am Strand und ahnen nicht, dass es existiert.', tip: 'Fahr hinauf zum Fort Siloso Skywalk, einem elfstöckigen Turm mit Baumwipfelpfad und Blick über den Hafen; der Eintritt ist frei.' },
        fr: { name: 'Fort Siloso', description: 'Le seul fort côtier subsistant à Singapour, avec ses canons, ses tunnels souterrains et une exposition sur la chute de la ville en 1942. Beaucoup s’arrêtent à la plage sans soupçonner son existence.', tip: 'Montez au Fort Siloso Skywalk, une tour de 11 étages prolongée d’une passerelle au-dessus de la canopée, avec vue sur le port ; l’entrée est gratuite.' },
        it: { name: 'Fort Siloso', description: 'L’unico forte costiero superstite di Singapore, con cannoni, tunnel sotterranei e una mostra sulla caduta della città nel 1942. Molti si fermano alla spiaggia senza sapere che esiste.', tip: 'Sali sul Fort Siloso Skywalk, una torre di 11 piani con passerella tra le chiome degli alberi e vista sul porto; l’ingresso è gratuito.' },
      },
    },
    {
      id: 'sentosa-malaysian-food-street', city: 'sentosa', category: 'food', lat: 1.2565, lng: 103.8199, image: 'cQgIFWY9MO4',
      rating: 4.2, reviews: 6300, tags: ['streetfood', 'food'], price: { kind: 'level', level: 1 },
      address: '8 Sentosa Gateway, Resorts World Sentosa, Singapore 098269',
      text: {
        ru: { name: 'Malaysian Food Street', description: 'Крытая улица, стилизованная под старые малайзийские кварталы, у входа в Universal Studios: здесь готовят уличные блюда Пенанга, Куала-Лумпура и Малакки. Самое недорогое место для обеда на Сентозе.', tip: 'Закажите чар квей теоу, наси лемак и пенный чай тех тарик — и обходите меню ресторанов в парке.' },
        en: { name: 'Malaysian Food Street', description: 'A covered street styled after old Malaysian neighbourhoods by the entrance to Universal Studios, serving street dishes from Penang, Kuala Lumpur and Malacca. It is the most affordable lunch spot on Sentosa.', tip: 'Order char kway teow, nasi lemak and frothy teh tarik, and skip the restaurants inside the park.' },
        es: { name: 'Malaysian Food Street', description: 'Una calle cubierta que recrea los antiguos barrios malasios junto a la entrada de Universal Studios, con platos callejeros de Penang, Kuala Lumpur y Malaca. Es el sitio más económico para comer en Sentosa.', tip: 'Pide char kway teow, nasi lemak y un espumoso teh tarik, y olvídate de los restaurantes del parque.' },
        de: { name: 'Malaysian Food Street', description: 'Eine überdachte Straße im Stil alter malaysischer Viertel am Eingang der Universal Studios, mit Straßengerichten aus Penang, Kuala Lumpur und Malakka. Hier isst du auf Sentosa am günstigsten zu Mittag.', tip: 'Bestell Char Kway Teow, Nasi Lemak und schaumigen Teh Tarik und lass die Restaurants im Park links liegen.' },
        fr: { name: 'Malaysian Food Street', description: 'Une rue couverte reconstituant les anciens quartiers malaisiens, à l’entrée d’Universal Studios, où l’on sert des plats de rue de Penang, Kuala Lumpur et Malacca. C’est l’adresse la plus abordable de Sentosa pour déjeuner.', tip: 'Commandez un char kway teow, un nasi lemak et un teh tarik bien mousseux, et évitez les restaurants du parc.' },
        it: { name: 'Malaysian Food Street', description: 'Una strada coperta che ricrea i vecchi quartieri malesi accanto all’ingresso degli Universal Studios, con piatti di strada di Penang, Kuala Lumpur e Malacca. È il posto più economico per pranzare a Sentosa.', tip: 'Ordina char kway teow, nasi lemak e un teh tarik schiumoso, e lascia perdere i ristoranti del parco.' },
      },
    },
  ],
};

export default pack;
