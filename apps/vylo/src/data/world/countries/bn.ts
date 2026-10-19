import type { CountryPack } from '../types';

const pack: CountryPack = {
  country: {
    code: 'BN',
    region: 'sea',
    image: 'GBfpHcGhacc',
    theme: { accent: '#ca8a04', accent2: '#166534', motif: 'domes' },
    fromMoscow: { hours: 15, direct: false },
    visa: { regime: 'free', days: 14, cost: { kind: 'free' }, validity: 'sixMonths', docs: ['returnTicket'], notes: [] },
    text: {
      ru: {
        tagline: 'Золотые купола султаната и нетронутые джунгли Борнео',
        description: 'Бруней — крошечный и очень богатый султанат на севере Борнео: мечети с золотыми куполами, деревня на сваях, где живут тысячи людей, и почти не тронутые джунгли, занимающие большую часть страны. Здесь тихо, чисто и безопасно, а туристов меньше, чем где-либо в регионе.',
        howToGet: 'Прямых рейсов из Москвы нет: удобнее всего лететь через Дубай — оттуда в Бандар-Сери-Бегаван летает Royal Brunei Airlines, — либо через Сингапур, Куала-Лумпур или Бангкок; в пути 14–17 часов. Страна маленькая: по столице ездят на автобусах и такси через приложение Dart, а в округ Темубронг ведёт 30-километровый мост через залив.',
        tips: [
          'Российские Visa и Mastercard не работают: берите доллары или евро на обмен, а также сингапурские доллары — они ходят наравне с брунейскими по курсу один к одному.',
          'Такси мало и они дороги, поэтому установите Dart — местный сервис вызова машин с понятными ценами.',
          'Продажа алкоголя запрещена, в пятницу с 12 до 14 часов всё закрыто на молитву, а в мечетях и на улицах стоит одеваться скромно — с закрытыми плечами и коленями.',
        ],
        guide: {
          title: 'Бруней за 4 дня',
          sections: [
            { title: 'Когда ехать', body: 'Климат экваториальный: круглый год около +30 °C и высокая влажность. Самые сухие месяцы — с февраля по апрель, а с октября по январь ливни идут чаще, но обычно короткие. В июле страна празднует день рождения султана с парадами и иллюминацией, а после окончания Рамадана дворец Истана Нурул Иман на три дня открывает двери для всех желающих — султан лично встречает гостей.' },
            { title: 'Маршрут на 4 дня', body: 'Два дня в столице: мечеть Омара Али Сайфуддина на закате, водная деревня Кампонг Айер на лодке-такси, Музей королевских регалий и ночной рынок Гадонг. Затем поездка в Темубронг по новому мосту: на лодке-лонгботе вверх по реке в национальный парк Улу Темубронг, подъём на подвесную тропу над кронами на рассвете и ночь в эко-лодже или деревне Сумбилинг.' },
            { title: 'Что попробовать', body: 'Национальное блюдо — амбуят: клейкая масса из крахмала саговой пальмы, которую накручивают на бамбуковые палочки и макают в кислый соус чакалап. Попробуйте наси катох — рис с жареной курицей и самбалом, который здесь едят в любое время, сатай и роти на ночных рынках, а также сладкие кумпанги и свежие тропические соки, которые заменяют здесь любые коктейли.' },
            { title: 'Деньги, связь и транспорт', body: 'Валюта — брунейский доллар (BND), привязанный к сингапурскому. Карты российских банков не работают, поэтому везите наличные и меняйте их в банках или обменниках торговых центров. Сим-карты DST и Progresif продают в аэропорту по паспорту. Перед прилётом заполните электронную карту прибытия. Общественного транспорта мало: выручают Dart, лодки-такси через реку и аренда машины. Немусульмане могут ввезти небольшое количество алкоголя, задекларировав его.' },
          ],
        },
      },
      en: {
        tagline: 'The sultanate’s golden domes and Borneo’s untouched jungle',
        description: 'Brunei is a tiny and very wealthy sultanate on northern Borneo, with golden-domed mosques, a stilt village home to thousands of people and near-pristine rainforest covering most of the country. It is quiet, clean and safe, and sees fewer tourists than anywhere else in the region.',
        howToGet: 'There are no direct flights from Moscow: the easiest route is via Dubai, from where Royal Brunei Airlines flies to Bandar Seri Begawan, or via Singapore, Kuala Lumpur or Bangkok, 14–17 hours in total. The country is small: in the capital use buses and taxis booked through the Dart app, and a 30-kilometre bridge across the bay leads to Temburong district.',
        tips: [
          'Russian-issued Visa and Mastercard cards don’t work, so bring dollars or euros to exchange, plus Singapore dollars, which circulate at par with the Brunei dollar.',
          'Taxis are scarce and expensive, so install Dart, the local ride-hailing app with clear prices.',
          'Alcohol sales are banned, everything closes for Friday prayers from 12:00 to 14:00, and in mosques and on the streets dress modestly with shoulders and knees covered.',
        ],
        guide: {
          title: 'Brunei in 4 days',
          sections: [
            { title: 'When to go', body: 'The climate is equatorial, around 30 °C and humid all year. The driest months are February to April, while from October to January downpours are more frequent but usually brief. In July the country celebrates the Sultan’s birthday with parades and illuminations, and after Ramadan the Istana Nurul Iman palace opens its doors to everyone for three days, with the Sultan greeting guests in person.' },
            { title: 'A 4-day route', body: 'Spend two days in the capital: the Omar Ali Saifuddien Mosque at sunset, the Kampong Ayer water village by water taxi, the Royal Regalia Museum and the Gadong night market. Then cross the new bridge to Temburong: ride a longboat upriver into Ulu Temburong National Park, climb the canopy walkway at dawn and spend the night in an eco-lodge or in Sumbiling village.' },
            { title: 'What to eat', body: 'The national dish is ambuyat, a sticky mass of sago palm starch twirled onto bamboo sticks and dipped in a sour cacah sauce. Try nasi katok, rice with fried chicken and sambal eaten at any hour, satay and roti at the night markets, plus sweet kuih and fresh tropical juices, which stand in for cocktails here.' },
            { title: 'Money, SIM cards and transport', body: 'The currency is the Brunei dollar (BND), pegged to the Singapore dollar. Russian bank cards don’t work, so bring cash and exchange it at banks or shopping-mall money changers. DST and Progresif SIM cards are sold at the airport on presentation of your passport. Complete the electronic arrival card before you fly. Public transport is limited, so rely on Dart, water taxis across the river and car hire. Non-Muslims may bring in a small amount of alcohol if they declare it.' },
          ],
        },
      },
      es: {
        tagline: 'Las cúpulas doradas del sultanato y la selva virgen de Borneo',
        description: 'Brunéi es un sultanato diminuto y muy rico en el norte de Borneo: mezquitas con cúpulas doradas, una aldea sobre pilotes donde viven miles de personas y una selva casi intacta que cubre la mayor parte del país. Es tranquilo, limpio y seguro, y recibe menos turistas que cualquier otro lugar de la región.',
        howToGet: 'No hay vuelos directos desde Moscú: lo más cómodo es volar vía Dubái, desde donde Royal Brunei Airlines llega a Bandar Seri Begawan, o vía Singapur, Kuala Lumpur o Bangkok, con 14–17 horas de viaje. El país es pequeño: en la capital se usan autobuses y taxis pedidos por la app Dart, y un puente de 30 kilómetros sobre la bahía lleva al distrito de Temburong.',
        tips: [
          'Las Visa y Mastercard emitidas en Rusia no funcionan: lleva dólares o euros para cambiar y también dólares de Singapur, que circulan a la par con el dólar de Brunéi.',
          'Hay pocos taxis y son caros: instala Dart, la app local de vehículos con conductor con precios claros.',
          'La venta de alcohol está prohibida, los viernes de 12:00 a 14:00 todo cierra por la oración, y en mezquitas y calles conviene vestir con recato, con hombros y rodillas cubiertos.',
        ],
        guide: {
          title: 'Brunéi en 4 días',
          sections: [
            { title: 'Cuándo ir', body: 'El clima es ecuatorial: unos 30 °C y mucha humedad todo el año. Los meses más secos van de febrero a abril, y de octubre a enero los chaparrones son más frecuentes, aunque suelen ser breves. En julio el país celebra el cumpleaños del sultán con desfiles e iluminaciones, y tras el Ramadán el palacio Istana Nurul Iman abre sus puertas a todo el mundo durante tres días, con el sultán recibiendo en persona a los visitantes.' },
            { title: 'Ruta de 4 días', body: 'Dos días en la capital: la mezquita de Omar Ali Saifuddien al atardecer, la aldea flotante de Kampong Ayer en taxi acuático, el Museo de las Regalías Reales y el mercado nocturno de Gadong. Después, cruza el nuevo puente hasta Temburong: remonta el río en lancha hasta el parque nacional de Ulu Temburong, sube a la pasarela sobre las copas al amanecer y duerme en un ecolodge o en el pueblo de Sumbiling.' },
            { title: 'Qué probar', body: 'El plato nacional es el ambuyat, una masa pegajosa de almidón de palma de sagú que se enrolla en palillos de bambú y se moja en una salsa ácida llamada cacah. Prueba el nasi katok, arroz con pollo frito y sambal que se come a cualquier hora, el satay y el roti de los mercados nocturnos, los dulces kuih y los zumos tropicales recién hechos, que aquí sustituyen a los cócteles.' },
            { title: 'Dinero, móvil y transporte', body: 'La moneda es el dólar de Brunéi (BND), vinculado al de Singapur. Las tarjetas de bancos rusos no funcionan, así que lleva efectivo y cámbialo en bancos o casas de cambio de centros comerciales. Las SIM de DST y Progresif se venden en el aeropuerto con el pasaporte. Rellena la tarjeta electrónica de llegada antes del vuelo. El transporte público es escaso: recurre a Dart, a los taxis acuáticos y al alquiler de coche. Los no musulmanes pueden entrar una pequeña cantidad de alcohol declarándola.' },
          ],
        },
      },
      de: {
        tagline: 'Die goldenen Kuppeln des Sultanats und Borneos unberührter Dschungel',
        description: 'Brunei ist ein winziges, sehr reiches Sultanat im Norden Borneos: Moscheen mit goldenen Kuppeln, ein Pfahldorf mit Tausenden Bewohnern und nahezu unberührter Regenwald, der den Großteil des Landes bedeckt. Es ist ruhig, sauber und sicher – und hat weniger Touristen als jeder andere Ort der Region.',
        howToGet: 'Direktflüge ab Moskau gibt es nicht: Am bequemsten fliegst du über Dubai, von wo Royal Brunei Airlines nach Bandar Seri Begawan fliegt, oder über Singapur, Kuala Lumpur oder Bangkok, insgesamt 14–17 Stunden. Das Land ist klein: In der Hauptstadt fährst du Bus oder Taxi über die App Dart, und eine 30 Kilometer lange Brücke über die Bucht führt in den Distrikt Temburong.',
        tips: [
          'In Russland ausgegebene Visa- und Mastercard-Karten funktionieren nicht – nimm Dollar oder Euro zum Tauschen mit und dazu Singapur-Dollar, die eins zu eins mit dem Brunei-Dollar gelten.',
          'Taxis sind rar und teuer, installiere daher Dart, den lokalen Fahrdienst mit klaren Preisen.',
          'Der Verkauf von Alkohol ist verboten, freitags von 12 bis 14 Uhr schließt alles zum Gebet, und in Moscheen und auf der Straße kleidest du dich besser dezent mit bedeckten Schultern und Knien.',
        ],
        guide: {
          title: 'Brunei in 4 Tagen',
          sections: [
            { title: 'Reisezeit', body: 'Das Klima ist äquatorial: ganzjährig rund 30 °C und hohe Luftfeuchtigkeit. Am trockensten sind Februar bis April, von Oktober bis Januar regnet es häufiger, meist aber nur kurz. Im Juli feiert das Land den Geburtstag des Sultans mit Paraden und Illuminationen, und nach dem Ramadan öffnet der Palast Istana Nurul Iman drei Tage lang für alle – der Sultan empfängt die Gäste persönlich.' },
            { title: 'Route für 4 Tage', body: 'Zwei Tage in der Hauptstadt: die Omar-Ali-Saifuddien-Moschee bei Sonnenuntergang, das Wasserdorf Kampong Ayer per Wassertaxi, das Royal Regalia Museum und der Nachtmarkt Gadong. Dann über die neue Brücke nach Temburong: per Langboot flussaufwärts in den Nationalpark Ulu Temburong, im Morgengrauen auf den Baumkronenpfad und eine Nacht in einer Eco-Lodge oder im Dorf Sumbiling.' },
            { title: 'Was du probieren solltest', body: 'Das Nationalgericht ist Ambuyat, eine klebrige Masse aus Sagopalmenstärke, die man auf Bambusstäbchen wickelt und in die saure Soße Cacah tunkt. Probier Nasi Katok, Reis mit frittiertem Huhn und Sambal, den man zu jeder Tageszeit isst, Satay und Roti auf den Nachtmärkten sowie süße Kuih und frische Tropensäfte, die hier Cocktails ersetzen.' },
            { title: 'Geld, Handy und Verkehr', body: 'Die Währung ist der Brunei-Dollar (BND), an den Singapur-Dollar gekoppelt. Russische Bankkarten funktionieren nicht, also nimm Bargeld mit und tausche es bei Banken oder Wechselstuben in Einkaufszentren. SIM-Karten von DST und Progresif gibt es am Flughafen gegen Vorlage des Passes. Füll vor dem Flug die elektronische Ankunftskarte aus. Öffentlicher Verkehr ist dünn: Nutze Dart, Wassertaxis über den Fluss und Mietwagen. Nichtmuslime dürfen eine kleine Menge Alkohol einführen, wenn sie sie anmelden.' },
          ],
        },
      },
      fr: {
        tagline: 'Les coupoles dorées du sultanat et la jungle intacte de Bornéo',
        description: 'Brunei est un minuscule sultanat très riche du nord de Bornéo : mosquées à coupoles dorées, village sur pilotis abritant des milliers d’habitants et forêt quasi vierge couvrant la majeure partie du pays. Calme, propre et sûr, il accueille moins de touristes que n’importe quel autre pays de la région.',
        howToGet: 'Il n’y a pas de vol direct depuis Moscou : le plus simple est de passer par Dubaï, d’où Royal Brunei Airlines dessert Bandar Seri Begawan, ou par Singapour, Kuala Lumpur ou Bangkok, soit 14 à 17 heures de trajet. Le pays est petit : dans la capitale, on circule en bus ou en taxi réservé via l’application Dart, et un pont de 30 kilomètres au-dessus de la baie mène au district de Temburong.',
        tips: [
          'Les cartes Visa et Mastercard émises en Russie ne fonctionnent pas : emportez des dollars ou des euros à changer, ainsi que des dollars de Singapour, acceptés à parité avec le dollar de Brunei.',
          'Les taxis sont rares et chers : installez Dart, le service local de VTC aux tarifs clairs.',
          'La vente d’alcool est interdite, tout ferme le vendredi de 12 h à 14 h pour la prière, et dans les mosquées comme dans la rue, mieux vaut une tenue sobre couvrant épaules et genoux.',
        ],
        guide: {
          title: 'Brunei en 4 jours',
          sections: [
            { title: 'Quand partir', body: 'Le climat est équatorial : environ 30 °C et une forte humidité toute l’année. Les mois les plus secs vont de février à avril, tandis que d’octobre à janvier les averses sont plus fréquentes, mais généralement brèves. En juillet, le pays fête l’anniversaire du sultan avec défilés et illuminations, et après le ramadan le palais Istana Nurul Iman ouvre ses portes à tous pendant trois jours, le sultan accueillant lui-même les visiteurs.' },
            { title: 'Itinéraire de 4 jours', body: 'Deux jours dans la capitale : la mosquée Omar Ali Saifuddien au coucher du soleil, le village sur l’eau de Kampong Ayer en bateau-taxi, le musée des Regalia royaux et le marché de nuit de Gadong. Traversez ensuite le nouveau pont jusqu’à Temburong : remontez la rivière en pirogue jusqu’au parc national d’Ulu Temburong, grimpez sur la passerelle de canopée à l’aube et passez la nuit dans un écolodge ou au village de Sumbiling.' },
            { title: 'Que goûter', body: 'Le plat national est l’ambuyat, une pâte gluante d’amidon de sagoutier que l’on enroule sur des baguettes de bambou avant de la tremper dans une sauce acidulée, le cacah. Goûtez le nasi katok, riz au poulet frit et au sambal servi à toute heure, le satay et le roti des marchés de nuit, ainsi que les douceurs kuih et les jus tropicaux frais, qui remplacent ici les cocktails.' },
            { title: 'Argent, téléphone et transports', body: 'La monnaie est le dollar de Brunei (BND), arrimé au dollar de Singapour. Les cartes des banques russes ne fonctionnent pas : prévoyez des espèces à changer dans les banques ou les bureaux de change des centres commerciaux. Les cartes SIM DST et Progresif se vendent à l’aéroport sur présentation du passeport. Remplissez la carte d’arrivée électronique avant le vol. Les transports publics sont rares : misez sur Dart, les bateaux-taxis et la location de voiture. Les non-musulmans peuvent importer un peu d’alcool en le déclarant.' },
          ],
        },
      },
      it: {
        tagline: 'Le cupole dorate del sultanato e la giungla intatta del Borneo',
        description: 'Il Brunei è un minuscolo e ricchissimo sultanato nel nord del Borneo: moschee dalle cupole dorate, un villaggio su palafitte abitato da migliaia di persone e una foresta pluviale quasi intatta che copre gran parte del Paese. È tranquillo, pulito e sicuro, e accoglie meno turisti di qualunque altro luogo della regione.',
        howToGet: 'Non ci sono voli diretti da Mosca: la soluzione più comoda è passare da Dubai, da dove Royal Brunei Airlines vola a Bandar Seri Begawan, oppure da Singapore, Kuala Lumpur o Bangkok, per 14–17 ore complessive. Il Paese è piccolo: nella capitale ci si muove in autobus o in taxi prenotati con l’app Dart, e un ponte di 30 chilometri sulla baia porta al distretto di Temburong.',
        tips: [
          'Le carte Visa e Mastercard emesse in Russia non funzionano: porta dollari o euro da cambiare e anche dollari di Singapore, accettati alla pari con il dollaro del Brunei.',
          'I taxi sono pochi e cari, quindi installa Dart, il servizio locale di auto con conducente a prezzi chiari.',
          'La vendita di alcolici è vietata, il venerdì dalle 12 alle 14 tutto chiude per la preghiera, e in moschea e per strada conviene vestirsi in modo sobrio, coprendo spalle e ginocchia.',
        ],
        guide: {
          title: 'Il Brunei in 4 giorni',
          sections: [
            { title: 'Quando andare', body: 'Il clima è equatoriale: circa 30 °C e molta umidità tutto l’anno. I mesi più secchi vanno da febbraio ad aprile, mentre da ottobre a gennaio gli acquazzoni sono più frequenti ma di solito brevi. A luglio il Paese festeggia il compleanno del sultano con parate e luminarie, e dopo il Ramadan il palazzo Istana Nurul Iman apre le porte a tutti per tre giorni, con il sultano che accoglie personalmente gli ospiti.' },
            { title: 'Itinerario di 4 giorni', body: 'Due giorni nella capitale: la moschea di Omar Ali Saifuddien al tramonto, il villaggio sull’acqua di Kampong Ayer in taxi d’acqua, il Royal Regalia Museum e il mercato notturno di Gadong. Poi attraversa il nuovo ponte verso Temburong: risali il fiume in longboat fino al parco nazionale di Ulu Temburong, sali sulla passerella tra le chiome all’alba e trascorri la notte in un ecolodge o nel villaggio di Sumbiling.' },
            { title: 'Cosa assaggiare', body: 'Il piatto nazionale è l’ambuyat, una massa appiccicosa di amido di palma da sago che si arrotola su bastoncini di bambù e si intinge in una salsa acidula, il cacah. Prova il nasi katok, riso con pollo fritto e sambal che si mangia a ogni ora, satay e roti nei mercati notturni, i dolcetti kuih e i succhi tropicali freschi, che qui sostituiscono i cocktail.' },
            { title: 'Soldi, telefono e trasporti', body: 'La valuta è il dollaro del Brunei (BND), agganciato a quello di Singapore. Le carte delle banche russe non funzionano, quindi porta contanti e cambiali in banca o nei cambiavalute dei centri commerciali. Le SIM di DST e Progresif si comprano in aeroporto con il passaporto. Compila la carta d’arrivo elettronica prima del volo. I mezzi pubblici sono scarsi: affidati a Dart, ai taxi d’acqua e all’auto a noleggio. I non musulmani possono introdurre una piccola quantità di alcolici dichiarandola.' },
          ],
        },
      },
    },
  },
  cities: [
    {
      id: 'bandar-seri-begawan', lat: 4.9031, lng: 114.9398, image: 'GBfpHcGhacc', gallery: ['zUvPhMmUIAc'],
      rating: 4.4, reviews: 3860, tags: ['culture', 'architecture', 'market', 'history'], months: [2, 3, 4, 5, 6, 7], budgetPerDay: 70, currency: 'BND',
      language: 'ms', timezone: 'UTC+8', zoom: 12, theme: { accent: '#a16207', accent2: '#0f766e', motif: 'domes' },
      text: {
        ru: { name: 'Бандар-Сери-Бегаван', tagline: 'Золотые мечети и водная деревня на сваях', description: 'Неспешная столица султаната на реке Бруней: над лагуной сияет мечеть Омара Али Сайфуддина, а напротив, прямо на воде, раскинулась Кампонг Айер — крупнейшая деревня на сваях в мире. Вечером город собирается на ночном рынке Гадонг.', tips: ['Лодку-такси через реку ловите у пристани на набережной и обговорите цену до посадки.', 'В мечети неверующих пускают вне времени молитв; в четверг они закрыты для туристов.'], gettingThere: 'Международный аэропорт в 10–15 минутах от центра на такси или машине Dart.' },
        en: { name: 'Bandar Seri Begawan', tagline: 'Golden mosques and a water village on stilts', description: 'The sultanate’s unhurried capital sits on the Brunei River: the Omar Ali Saifuddien Mosque gleams above its lagoon, and opposite, right on the water, sprawls Kampong Ayer, the world’s largest stilt village. In the evening the city gathers at the Gadong night market.', tips: ['Hail a water taxi across the river at the waterfront jetty and agree the price before boarding.', 'Non-Muslims may visit mosques outside prayer times; they are closed to tourists on Thursdays.'], gettingThere: 'The international airport is 10–15 minutes from the centre by taxi or a Dart car.' },
        es: { name: 'Bandar Seri Begawan', tagline: 'Mezquitas doradas y una aldea sobre pilotes', description: 'La pausada capital del sultanato se asienta a orillas del río Brunéi: la mezquita de Omar Ali Saifuddien brilla sobre su laguna y, enfrente, sobre el agua, se extiende Kampong Ayer, la mayor aldea sobre pilotes del mundo. Al anochecer, la ciudad se reúne en el mercado nocturno de Gadong.', tips: ['Para cruzar el río, toma un taxi acuático en el muelle del paseo y acuerda el precio antes de subir.', 'Los no musulmanes pueden visitar las mezquitas fuera de las horas de oración; los jueves cierran al turismo.'], gettingThere: 'El aeropuerto internacional está a 10–15 minutos del centro en taxi o con un coche de Dart.' },
        de: { name: 'Bandar Seri Begawan', tagline: 'Goldene Moscheen und ein Wasserdorf auf Stelzen', description: 'Die gemächliche Hauptstadt des Sultanats liegt am Brunei River: Über ihrer Lagune glänzt die Omar-Ali-Saifuddien-Moschee, gegenüber erstreckt sich direkt auf dem Wasser Kampong Ayer, das größte Pfahldorf der Welt. Abends trifft sich die Stadt auf dem Nachtmarkt Gadong.', tips: ['Wassertaxis über den Fluss findest du am Anleger an der Uferpromenade – handle den Preis vor dem Einsteigen aus.', 'Nichtmuslime dürfen Moscheen außerhalb der Gebetszeiten besuchen; donnerstags sind sie für Touristen geschlossen.'], gettingThere: 'Der internationale Flughafen liegt 10–15 Minuten vom Zentrum entfernt, per Taxi oder mit einem Dart-Wagen.' },
        fr: { name: 'Bandar Seri Begawan', tagline: 'Mosquées dorées et village sur pilotis', description: 'La paisible capitale du sultanat borde la rivière Brunei : la mosquée Omar Ali Saifuddien scintille au-dessus de son lagon et, en face, à même l’eau, s’étend Kampong Ayer, le plus grand village sur pilotis du monde. Le soir, la ville se retrouve au marché de nuit de Gadong.', tips: ['Hélez un bateau-taxi à l’embarcadère du front de rivière et convenez du prix avant de monter.', 'Les non-musulmans visitent les mosquées en dehors des heures de prière ; elles sont fermées aux touristes le jeudi.'], gettingThere: 'L’aéroport international est à 10–15 minutes du centre en taxi ou en voiture Dart.' },
        it: { name: 'Bandar Seri Begawan', tagline: 'Moschee dorate e un villaggio sull’acqua su palafitte', description: 'La placida capitale del sultanato sorge sul fiume Brunei: la moschea di Omar Ali Saifuddien brilla sopra la sua laguna e di fronte, sull’acqua, si allarga Kampong Ayer, il più grande villaggio su palafitte del mondo. La sera la città si ritrova al mercato notturno di Gadong.', tips: ['Il taxi d’acqua per attraversare il fiume si prende al molo sul lungofiume: concorda il prezzo prima di salire.', 'I non musulmani possono visitare le moschee fuori dagli orari di preghiera; il giovedì sono chiuse ai turisti.'], gettingThere: 'L’aeroporto internazionale è a 10–15 minuti dal centro in taxi o con un’auto Dart.' },
      },
    },
    {
      id: 'temburong', lat: 4.709, lng: 115.072, image: 'yQ8cH4QkU-U', gallery: [],
      rating: 4.7, reviews: 1940, tags: ['jungle', 'nature', 'adventure', 'wildlife'], months: [2, 3, 4, 5, 6, 7, 8], budgetPerDay: 110, currency: 'BND',
      language: 'ms', timezone: 'UTC+8', zoom: 10, theme: { accent: '#14532d', accent2: '#a3e635', motif: 'palms' },
      text: {
        ru: { name: 'Темубронг', tagline: 'Первобытные джунгли и подвесная тропа над кронами', description: 'Отрезанный от остальной страны округ, где почти весь лес остаётся девственным: здесь находится национальный парк Улу Темубронг с реками, водопадами и подвесной тропой на высоте 50 метров. Добраться стало просто после открытия моста через залив Бруней.', tips: ['В парк Улу Темубронг пускают только с лицензированным туром — бронируйте его заранее, обычно с ночёвкой в лодже.', 'Возьмите репеллент, дождевик и обувь, которую не жалко намочить: от пиявок спасают противомоскитные гетры.'], gettingThere: 'Из столицы около 40 минут на машине по мосту Султана Хаджи Омара Али Сайфуддина до городка Бангар, дальше — дорога и лодка вверх по реке.' },
        en: { name: 'Temburong', tagline: 'Primeval jungle and a canopy walkway above the trees', description: 'A district cut off from the rest of the country where almost all the forest remains virgin, home to Ulu Temburong National Park with its rivers, waterfalls and a canopy walkway 50 metres up. Getting there became easy once the bridge across Brunei Bay opened.', tips: ['Ulu Temburong can only be visited on a licensed tour, usually with a night in a lodge, so book ahead.', 'Bring repellent, a rain jacket and shoes you don’t mind soaking; leech socks are a lifesaver.'], gettingThere: 'From the capital it is about 40 minutes by car across the Sultan Haji Omar Ali Saifuddien Bridge to the town of Bangar, then road and longboat upriver.' },
        es: { name: 'Temburong', tagline: 'Selva primigenia y una pasarela sobre las copas', description: 'Un distrito separado del resto del país donde casi todo el bosque sigue siendo virgen, con el parque nacional de Ulu Temburong, sus ríos, cascadas y una pasarela a 50 metros de altura. Llegar es sencillo desde que se abrió el puente sobre la bahía de Brunéi.', tips: ['A Ulu Temburong solo se entra con un tour autorizado, normalmente con noche en un lodge: resérvalo con antelación.', 'Lleva repelente, chubasquero y calzado que puedas mojar; los calcetines antisanguijuelas son una bendición.'], gettingThere: 'Desde la capital hay unos 40 minutos en coche por el puente Sultan Haji Omar Ali Saifuddien hasta el pueblo de Bangar, y luego carretera y lancha río arriba.' },
        de: { name: 'Temburong', tagline: 'Urwald und ein Baumkronenpfad hoch über den Wipfeln', description: 'Ein vom Rest des Landes abgetrennter Distrikt, dessen Wald fast vollständig unberührt ist – mit dem Nationalpark Ulu Temburong, Flüssen, Wasserfällen und einem Baumkronenpfad in 50 Metern Höhe. Seit die Brücke über die Brunei-Bucht offen ist, ist die Anreise einfach.', tips: ['Ulu Temburong darf nur mit lizenzierter Tour besucht werden, meist mit Übernachtung in einer Lodge – buche vorab.', 'Nimm Mückenschutz, Regenjacke und Schuhe mit, die nass werden dürfen; Blutegelsocken sind Gold wert.'], gettingThere: 'Von der Hauptstadt sind es etwa 40 Autominuten über die Sultan-Haji-Omar-Ali-Saifuddien-Brücke bis zum Städtchen Bangar, dann weiter per Straße und Langboot flussaufwärts.' },
        fr: { name: 'Temburong', tagline: 'Jungle primaire et passerelle au-dessus de la canopée', description: 'Un district séparé du reste du pays où la forêt est presque entièrement vierge, avec le parc national d’Ulu Temburong, ses rivières, ses cascades et une passerelle à 50 mètres de haut. L’accès est devenu simple depuis l’ouverture du pont sur la baie de Brunei.', tips: ['Ulu Temburong ne se visite qu’avec une excursion agréée, généralement avec une nuit en lodge : réservez à l’avance.', 'Prévoyez répulsif, imperméable et chaussures qui peuvent être mouillées ; les chaussettes anti-sangsues sont précieuses.'], gettingThere: 'Depuis la capitale, comptez environ 40 minutes de voiture par le pont Sultan Haji Omar Ali Saifuddien jusqu’à la bourgade de Bangar, puis route et pirogue en remontant la rivière.' },
        it: { name: 'Temburong', tagline: 'Giungla primordiale e una passerella sopra le chiome', description: 'Un distretto separato dal resto del Paese in cui quasi tutta la foresta è vergine, con il parco nazionale di Ulu Temburong, i suoi fiumi, le cascate e una passerella a 50 metri d’altezza. Arrivarci è facile da quando è stato aperto il ponte sulla baia del Brunei.', tips: ['A Ulu Temburong si entra solo con un tour autorizzato, di solito con notte in un lodge: prenota in anticipo.', 'Porta repellente, giacca impermeabile e scarpe che si possano bagnare; le calze anti-sanguisughe sono preziose.'], gettingThere: 'Dalla capitale ci vogliono circa 40 minuti d’auto sul ponte Sultan Haji Omar Ali Saifuddien fino alla cittadina di Bangar, poi strada e longboat risalendo il fiume.' },
      },
    },
  ],
  places: [
    // Bandar Seri Begawan
    {
      id: 'bandar-seri-begawan-omar-ali-mosque', city: 'bandar-seri-begawan', category: 'attraction', spot: 'insta', lat: 4.8895, lng: 114.9389, image: 'GBfpHcGhacc',
      rating: 4.8, reviews: 8900, tags: ['architecture', 'photo', 'sunset'], price: { kind: 'free' },
      address: 'Jalan Stoney, Bandar Seri Begawan BS8711',
      text: {
        ru: { name: 'Мечеть Омара Али Сайфуддина', description: 'Белоснежная мечеть 1958 года с куполом, покрытым чистым золотом, стоит у искусственной лагуны, где покачивается каменная копия королевской баржи XVI века.', tip: 'Снимайте с дальнего берега лагуны в синий час после заката: подсвеченный купол и минарет отражаются в неподвижной воде.' },
        en: { name: 'Omar Ali Saifuddien Mosque', description: 'A snow-white mosque from 1958 with a dome clad in pure gold, set beside an artificial lagoon where a stone replica of a 16th-century royal barge floats.', tip: 'Shoot from the far side of the lagoon during the blue hour after sunset, when the lit dome and minaret are mirrored in the still water.' },
        es: { name: 'Mezquita de Omar Ali Saifuddien', description: 'Una mezquita blanquísima de 1958 con una cúpula revestida de oro puro, junto a una laguna artificial donde flota una réplica en piedra de una barcaza real del siglo XVI.', tip: 'Fotografíala desde la orilla opuesta de la laguna en la hora azul tras el atardecer: la cúpula iluminada y el minarete se reflejan en el agua quieta.' },
        de: { name: 'Omar-Ali-Saifuddien-Moschee', description: 'Eine schneeweiße Moschee von 1958 mit einer Kuppel aus reinem Gold an einer künstlichen Lagune, in der eine steinerne Nachbildung einer königlichen Barke aus dem 16. Jahrhundert liegt.', tip: 'Fotografiere vom gegenüberliegenden Ufer der Lagune zur blauen Stunde nach Sonnenuntergang – beleuchtete Kuppel und Minarett spiegeln sich im stillen Wasser.' },
        fr: { name: 'Mosquée Omar Ali Saifuddien', description: 'Une mosquée d’un blanc immaculé datant de 1958, à la coupole couverte d’or pur, au bord d’un lagon artificiel où flotte une réplique en pierre d’une barge royale du XVIe siècle.', tip: 'Photographiez-la depuis la rive opposée du lagon à l’heure bleue, après le coucher du soleil : coupole illuminée et minaret se reflètent dans l’eau immobile.' },
        it: { name: 'Moschea di Omar Ali Saifuddien', description: 'Una moschea candida del 1958 con una cupola rivestita d’oro puro, accanto a una laguna artificiale dove galleggia una replica in pietra di una chiatta reale del XVI secolo.', tip: 'Scatta dalla sponda opposta della laguna nell’ora blu dopo il tramonto: cupola illuminata e minareto si specchiano nell’acqua ferma.' },
      },
    },
    {
      id: 'bandar-seri-begawan-kampong-ayer', city: 'bandar-seri-begawan', category: 'attraction', lat: 4.886, lng: 114.942, image: 'zUvPhMmUIAc',
      rating: 4.5, reviews: 5200, tags: ['culture', 'history', 'architecture'], price: { kind: 'free' }, hours: 'always',
      address: 'Kampong Ayer, Brunei River, Bandar Seri Begawan',
      text: {
        ru: { name: 'Водная деревня Кампонг Айер', description: 'Город на сваях с тысячелетней историей: десятки деревень, соединённых деревянными мостками, со своими школами, мечетями и пожарной частью на лодках.', tip: 'Начните с Культурной галереи Кампонг Айер на берегу, а затем пройдитесь по мосткам — многие жители рады пригласить гостей на чай.' },
        en: { name: 'Kampong Ayer water village', description: 'A town on stilts with a thousand years of history: dozens of villages linked by wooden boardwalks, with their own schools, mosques and a fire brigade on boats.', tip: 'Start at the Kampong Ayer Cultural and Tourism Gallery on the bank, then wander the boardwalks; many residents are happy to invite visitors in for tea.' },
        es: { name: 'Aldea acuática de Kampong Ayer', description: 'Una ciudad sobre pilotes con mil años de historia: decenas de aldeas unidas por pasarelas de madera, con sus propias escuelas, mezquitas y bomberos en barca.', tip: 'Empieza por la Galería Cultural de Kampong Ayer, en la orilla, y luego recorre las pasarelas: muchos vecinos invitan encantados a un té.' },
        de: { name: 'Wasserdorf Kampong Ayer', description: 'Eine Stadt auf Stelzen mit tausendjähriger Geschichte: Dutzende Dörfer, verbunden durch Holzstege, mit eigenen Schulen, Moscheen und einer Feuerwehr auf Booten.', tip: 'Beginne in der Kampong Ayer Cultural and Tourism Gallery am Ufer und schlendere dann über die Stege – viele Bewohner laden Gäste gern zum Tee ein.' },
        fr: { name: 'Village sur l’eau de Kampong Ayer', description: 'Une ville sur pilotis vieille de mille ans : des dizaines de villages reliés par des passerelles de bois, avec leurs écoles, leurs mosquées et leurs pompiers en bateau.', tip: 'Commencez par la galerie culturelle de Kampong Ayer, sur la rive, puis flânez sur les passerelles : bien des habitants invitent volontiers à prendre le thé.' },
        it: { name: 'Villaggio sull’acqua di Kampong Ayer', description: 'Una città su palafitte con mille anni di storia: decine di villaggi collegati da passerelle di legno, con scuole, moschee e vigili del fuoco in barca.', tip: 'Comincia dalla Kampong Ayer Cultural and Tourism Gallery sulla riva, poi passeggia sulle passerelle: molti abitanti invitano volentieri a prendere un tè.' },
      },
    },
    {
      id: 'bandar-seri-begawan-royal-regalia', city: 'bandar-seri-begawan', category: 'attraction', lat: 4.8908, lng: 114.9405, image: 'GBfpHcGhacc',
      rating: 4.5, reviews: 4100, tags: ['museums', 'history'], price: { kind: 'free' }, hours: '09:00–17:00',
      address: 'Jalan Sultan, Bandar Seri Begawan BS8611',
      text: {
        ru: { name: 'Музей королевских регалий', description: 'Музей под куполом в центре города с золотой колесницей коронации, короной, троном и подарками султану со всего мира.', tip: 'Обувь оставляют у входа, а фотографировать можно только в главном зале с колесницей.' },
        en: { name: 'Royal Regalia Museum', description: 'A domed museum in the city centre displaying the golden coronation chariot, the crown, the throne and gifts presented to the Sultan from around the world.', tip: 'Shoes are left at the entrance, and photography is allowed only in the main hall with the chariot.' },
        es: { name: 'Museo de las Regalías Reales', description: 'Un museo con cúpula en el centro que expone la carroza dorada de la coronación, la corona, el trono y regalos al sultán de todo el mundo.', tip: 'Los zapatos se dejan en la entrada y solo se pueden hacer fotos en la sala principal, la de la carroza.' },
        de: { name: 'Royal Regalia Museum', description: 'Ein Kuppelmuseum im Zentrum mit dem goldenen Krönungswagen, Krone, Thron und Geschenken an den Sultan aus aller Welt.', tip: 'Die Schuhe bleiben am Eingang, fotografieren darfst du nur in der Haupthalle mit dem Wagen.' },
        fr: { name: 'Musée des Regalia royaux', description: 'Un musée à coupole au centre-ville qui expose le char doré du couronnement, la couronne, le trône et des cadeaux offerts au sultan du monde entier.', tip: 'Les chaussures restent à l’entrée, et les photos ne sont autorisées que dans la grande salle du char.' },
        it: { name: 'Royal Regalia Museum', description: 'Un museo con cupola in centro che espone il carro dorato dell’incoronazione, la corona, il trono e i doni ricevuti dal sultano da tutto il mondo.', tip: 'Le scarpe si lasciano all’ingresso e si può fotografare solo nella sala principale con il carro.' },
      },
    },
    {
      id: 'bandar-seri-begawan-proboscis-cruise', city: 'bandar-seri-begawan', category: 'nature', spot: 'hidden', lat: 4.87, lng: 114.97, image: 'zUvPhMmUIAc',
      rating: 4.6, reviews: 1900, tags: ['wildlife', 'cruise', 'sunset'],
      address: 'Brunei River mangroves, Bandar Seri Begawan',
      text: {
        ru: { name: 'Носачи в мангровых зарослях', description: 'В двадцати минутах на лодке от центра в мангровых протоках реки Бруней живут носачи — эндемичные обезьяны Борнео с огромными носами. По пути видно дворец султана Истана Нурул Иман.', tip: 'Договоритесь с водителем лодки-такси на пристани у набережной около 17:00 — к закату носачи выходят кормиться на край мангров.' },
        en: { name: 'Proboscis monkeys in the mangroves', description: 'Twenty minutes by boat from the centre, the mangrove channels of the Brunei River are home to proboscis monkeys, Borneo’s big-nosed endemic primates. On the way you pass the Sultan’s Istana Nurul Iman palace.', tip: 'Strike a deal with a water-taxi driver at the waterfront jetty around 5 p.m.; towards sunset the monkeys come out to feed at the mangrove edge.' },
        es: { name: 'Monos narigudos en los manglares', description: 'A veinte minutos en barca del centro, en los canales de manglar del río Brunéi viven los monos narigudos, primates endémicos de Borneo. Por el camino se ve el palacio del sultán, Istana Nurul Iman.', tip: 'Acuerda el paseo con un taxista acuático en el muelle del paseo hacia las 17:00: al atardecer los monos salen a comer al borde del manglar.' },
        de: { name: 'Nasenaffen in den Mangroven', description: 'Zwanzig Bootsminuten vom Zentrum leben in den Mangrovenkanälen des Brunei River Nasenaffen, Borneos endemische Primaten mit riesigen Nasen. Unterwegs siehst du den Sultanspalast Istana Nurul Iman.', tip: 'Verhandle gegen 17 Uhr am Anleger der Uferpromenade mit einem Wassertaxifahrer – zum Sonnenuntergang kommen die Affen zum Fressen an den Mangrovenrand.' },
        fr: { name: 'Nasiques dans la mangrove', description: 'À vingt minutes de bateau du centre, les chenaux de mangrove de la rivière Brunei abritent des nasiques, singes au long nez endémiques de Bornéo. En chemin, on longe le palais du sultan, l’Istana Nurul Iman.', tip: 'Négociez avec un bateau-taxi à l’embarcadère du front de rivière vers 17 heures : au coucher du soleil, les nasiques viennent se nourrir en lisière de mangrove.' },
        it: { name: 'Nasiche tra le mangrovie', description: 'A venti minuti di barca dal centro, nei canali di mangrovie del fiume Brunei vivono le nasiche, scimmie dal grande naso endemiche del Borneo. Lungo il tragitto si vede il palazzo del sultano, l’Istana Nurul Iman.', tip: 'Accordati con un taxi d’acqua al molo del lungofiume verso le 17: al tramonto le nasiche escono a mangiare al margine delle mangrovie.' },
      },
    },
    {
      id: 'bandar-seri-begawan-gadong-night-market', city: 'bandar-seri-begawan', category: 'food', lat: 4.905, lng: 114.917, image: 'zUvPhMmUIAc',
      rating: 4.4, reviews: 6300, tags: ['streetfood', 'market', 'food'], price: { kind: 'level', level: 1 }, hours: '16:00–22:00',
      address: 'Jalan Pasar Gadong, Bandar Seri Begawan',
      text: {
        ru: { name: 'Ночной рынок Гадонг', description: 'Самый популярный ночной рынок страны: сотни лотков с наси катох, сатаем, жареной рыбой, ярко-зелёными сладостями и свежими соками в пакетах.', tip: 'Берите наси катох в обёртке из бумаги — это самый дешёвый и любимый ужин брунейцев — и сок из сахарного тростника с лаймом.' },
        en: { name: 'Gadong Night Market', description: 'The country’s most popular night market, with hundreds of stalls selling nasi katok, satay, grilled fish, bright green sweets and fresh juices in bags.', tip: 'Grab paper-wrapped nasi katok, Brunei’s cheapest and best-loved dinner, and a sugarcane juice with lime.' },
        es: { name: 'Mercado nocturno de Gadong', description: 'El mercado nocturno más popular del país, con cientos de puestos de nasi katok, satay, pescado a la brasa, dulces de un verde intenso y zumos frescos en bolsa.', tip: 'Pide nasi katok envuelto en papel, la cena más barata y querida de Brunéi, y un zumo de caña con lima.' },
        de: { name: 'Nachtmarkt Gadong', description: 'Der beliebteste Nachtmarkt des Landes mit Hunderten Ständen für Nasi Katok, Satay, gegrillten Fisch, knallgrüne Süßigkeiten und frische Säfte im Beutel.', tip: 'Nimm Nasi Katok im Papier – das günstigste und beliebteste Abendessen Bruneis – und dazu Zuckerrohrsaft mit Limette.' },
        fr: { name: 'Marché de nuit de Gadong', description: 'Le marché de nuit le plus populaire du pays : des centaines d’étals de nasi katok, de satay, de poisson grillé, de douceurs vert vif et de jus frais servis en sachet.', tip: 'Prenez un nasi katok emballé dans du papier, le dîner le moins cher et le plus apprécié de Brunei, et un jus de canne au citron vert.' },
        it: { name: 'Mercato notturno di Gadong', description: 'Il mercato notturno più popolare del Paese, con centinaia di banchi di nasi katok, satay, pesce alla griglia, dolci verde brillante e succhi freschi in sacchetto.', tip: 'Prendi il nasi katok incartato, la cena più economica e amata del Brunei, e un succo di canna con lime.' },
      },
    },
    // Temburong
    {
      id: 'temburong-ulu-temburong-park', city: 'temburong', category: 'nature', lat: 4.548, lng: 115.155, image: 'yQ8cH4QkU-U',
      rating: 4.8, reviews: 2600, tags: ['jungle', 'hiking', 'views'],
      address: 'Ulu Temburong National Park, Batang Duri, Temburong',
      text: {
        ru: { name: 'Национальный парк Улу Темубронг', description: 'Нетронутый дождевой лес, куда добираются на длинной лодке по реке Темубронг. Главное приключение — подъём на алюминиевые башни подвесной тропы на высоте около 50 метров над кронами.', tip: 'Поднимайтесь на тропу на рассвете: туман лежит между кронами, а из леса слышны гиббоны и птицы-носороги.' },
        en: { name: 'Ulu Temburong National Park', description: 'Pristine rainforest reached by longboat up the Temburong River. The highlight is climbing the aluminium towers of the canopy walkway, some 50 metres above the treetops.', tip: 'Climb the walkway at dawn, when mist lies between the crowns and gibbons and hornbills call from the forest.' },
        es: { name: 'Parque Nacional Ulu Temburong', description: 'Selva virgen a la que se llega en lancha alargada remontando el río Temburong. Lo mejor es subir a las torres de aluminio de la pasarela, a unos 50 metros sobre las copas.', tip: 'Sube a la pasarela al amanecer, cuando la niebla queda entre las copas y se oyen gibones y cálaos en la selva.' },
        de: { name: 'Nationalpark Ulu Temburong', description: 'Unberührter Regenwald, den man per Langboot über den Temburong River erreicht. Höhepunkt ist der Aufstieg auf die Aluminiumtürme des Baumkronenpfads, rund 50 Meter über den Wipfeln.', tip: 'Steig im Morgengrauen hinauf, wenn Nebel zwischen den Kronen hängt und Gibbons und Nashornvögel im Wald rufen.' },
        fr: { name: 'Parc national d’Ulu Temburong', description: 'Une forêt pluviale intacte que l’on rejoint en pirogue par la rivière Temburong. Le clou de la visite : grimper sur les tours en aluminium de la passerelle de canopée, à quelque 50 mètres au-dessus des arbres.', tip: 'Montez sur la passerelle à l’aube, quand la brume s’étire entre les cimes et que gibbons et calaos se font entendre.' },
        it: { name: 'Parco nazionale di Ulu Temburong', description: 'Foresta pluviale incontaminata che si raggiunge in longboat risalendo il fiume Temburong. Il momento clou è la salita sulle torri di alluminio della passerella, a circa 50 metri sopra le chiome.', tip: 'Sali sulla passerella all’alba, quando la nebbia si posa tra le chiome e dalla foresta arrivano i richiami di gibboni e buceri.' },
      },
    },
    {
      id: 'temburong-river-longboat', city: 'temburong', category: 'nature', lat: 4.58, lng: 115.15, image: 'yQ8cH4QkU-U',
      rating: 4.6, reviews: 1300, tags: ['adventure', 'jungle', 'kayak'],
      address: 'Batang Duri jetty, Temburong',
      text: {
        ru: { name: 'Лонгбот по реке Темубронг', description: 'Узкие деревянные лодки ибанских лодочников поднимаются по порогам реки сквозь джунгли — это единственная дорога в сердце парка и отдельное приключение.', tip: 'Садитесь ближе к корме и упакуйте вещи в гермомешок: на перекатах лодку окатывает водой.' },
        en: { name: 'Temburong River by longboat', description: 'Narrow wooden boats steered by Iban boatmen climb the river rapids through the jungle; it is the only way into the heart of the park and an adventure in itself.', tip: 'Sit towards the stern and pack your things in a dry bag, as the boat gets splashed on the rapids.' },
        es: { name: 'Río Temburong en lancha', description: 'Estrechas barcas de madera guiadas por barqueros iban remontan los rápidos del río a través de la selva: es el único camino al corazón del parque y una aventura en sí misma.', tip: 'Siéntate hacia la popa y mete tus cosas en una bolsa estanca: en los rápidos la barca se moja.' },
        de: { name: 'Mit dem Langboot auf dem Temburong', description: 'Schmale Holzboote, gesteuert von Iban-Bootsleuten, kämpfen sich durch die Stromschnellen des Flusses im Dschungel – der einzige Weg ins Herz des Parks und ein Abenteuer für sich.', tip: 'Setz dich eher nach hinten und pack deine Sachen in einen Trockenbeutel – in den Stromschnellen spritzt es ordentlich.' },
        fr: { name: 'La Temburong en pirogue', description: 'D’étroites pirogues de bois menées par des bateliers iban remontent les rapides de la rivière à travers la jungle : c’est le seul accès au cœur du parc, et une aventure en soi.', tip: 'Asseyez-vous plutôt à l’arrière et rangez vos affaires dans un sac étanche : dans les rapides, la pirogue est éclaboussée.' },
        it: { name: 'Il fiume Temburong in longboat', description: 'Strette barche di legno guidate da barcaioli iban risalgono le rapide del fiume attraverso la giungla: è l’unica via per il cuore del parco e un’avventura a sé.', tip: 'Siediti verso poppa e metti le tue cose in una sacca stagna: sulle rapide la barca si bagna.' },
      },
    },
    {
      id: 'temburong-bridge', city: 'temburong', category: 'attraction', spot: 'insta', lat: 4.88, lng: 115.04, image: 'yQ8cH4QkU-U',
      rating: 4.6, reviews: 2200, tags: ['architecture', 'views', 'roadtrip'], price: { kind: 'free' }, hours: 'always',
      address: 'Sultan Haji Omar Ali Saifuddien Bridge, Brunei Bay',
      text: {
        ru: { name: 'Мост Султана Хаджи Омара Али Сайфуддина', description: 'Тридцатикилометровый мост над заливом Бруней и мангровыми лесами, открытый в 2020 году, соединил столицу с Темубронгом. Его вантовые пилоны видны издалека.', tip: 'Останавливаться на мосту нельзя, поэтому снимайте с пассажирского сиденья на рассвете, когда пилоны встают из тумана над мангровыми лесами.' },
        en: { name: 'Sultan Haji Omar Ali Saifuddien Bridge', description: 'A thirty-kilometre bridge over Brunei Bay and its mangrove forests, opened in 2020, linking the capital with Temburong. Its cable-stayed pylons are visible from afar.', tip: 'Stopping on the bridge is not allowed, so shoot from the passenger seat at dawn, when the pylons rise from the mist above the mangroves.' },
        es: { name: 'Puente Sultan Haji Omar Ali Saifuddien', description: 'Un puente de treinta kilómetros sobre la bahía de Brunéi y sus manglares, inaugurado en 2020, que une la capital con Temburong. Sus pilones atirantados se ven desde lejos.', tip: 'No se puede parar en el puente: fotografía desde el asiento del copiloto al amanecer, cuando los pilones emergen de la niebla sobre los manglares.' },
        de: { name: 'Sultan-Haji-Omar-Ali-Saifuddien-Brücke', description: 'Eine 30 Kilometer lange Brücke über die Brunei-Bucht und ihre Mangrovenwälder, 2020 eröffnet, die die Hauptstadt mit Temburong verbindet. Ihre Schrägseilpylone sind von Weitem zu sehen.', tip: 'Anhalten ist auf der Brücke verboten – fotografiere vom Beifahrersitz im Morgengrauen, wenn die Pylone aus dem Nebel über den Mangroven ragen.' },
        fr: { name: 'Pont Sultan Haji Omar Ali Saifuddien', description: 'Un pont de trente kilomètres au-dessus de la baie de Brunei et de ses mangroves, ouvert en 2020, qui relie la capitale à Temburong. Ses pylônes à haubans se voient de loin.', tip: 'L’arrêt est interdit sur le pont : photographiez depuis le siège passager à l’aube, quand les pylônes émergent de la brume au-dessus des mangroves.' },
        it: { name: 'Ponte Sultan Haji Omar Ali Saifuddien', description: 'Un ponte di trenta chilometri sulla baia del Brunei e le sue mangrovie, aperto nel 2020, che collega la capitale a Temburong. I suoi piloni strallati si vedono da lontano.', tip: 'Sul ponte non ci si può fermare: scatta dal sedile del passeggero all’alba, quando i piloni emergono dalla nebbia sopra le mangrovie.' },
      },
    },
    {
      id: 'temburong-sumbiling', city: 'temburong', category: 'nature', spot: 'hidden', lat: 4.62, lng: 115.14, image: 'yQ8cH4QkU-U',
      rating: 4.6, reviews: 600, tags: ['jungle', 'culture', 'nature'],
      address: 'Kampong Sumbiling Lama, Batang Duri, Temburong',
      text: {
        ru: { name: 'Эко-деревня Сумбилинг', description: 'Небольшая община на берегу реки, где можно переночевать в бамбуковых домиках, поплавать на камерах по течению и поужинать блюдами ибанской кухни, приготовленными в бамбуке.', tip: 'Бронируйте ночёвку заранее через местных туроператоров: в деревню довозят от Бангара, а вечером на реке видно светлячков.' },
        en: { name: 'Sumbiling Eco Village', description: 'A small riverside community where you can sleep in bamboo huts, float downstream on inner tubes and dine on Iban dishes cooked in bamboo.', tip: 'Book your stay ahead through local operators, who drive you in from Bangar; in the evening fireflies glow along the river.' },
        es: { name: 'Ecoaldea de Sumbiling', description: 'Una pequeña comunidad junto al río donde se duerme en cabañas de bambú, se baja la corriente en flotador y se cena cocina iban preparada dentro del bambú.', tip: 'Reserva con antelación a través de operadores locales, que te recogen en Bangar; al anochecer se ven luciérnagas sobre el río.' },
        de: { name: 'Öko-Dorf Sumbiling', description: 'Eine kleine Gemeinschaft am Fluss, in der man in Bambushütten übernachtet, auf Reifen flussabwärts treibt und Iban-Gerichte isst, die in Bambus gegart werden.', tip: 'Buch die Übernachtung vorab über lokale Veranstalter, die dich in Bangar abholen; abends leuchten Glühwürmchen am Fluss.' },
        fr: { name: 'Écovillage de Sumbiling', description: 'Une petite communauté au bord de la rivière où l’on dort dans des huttes en bambou, se laisse dériver sur une bouée et dîne de plats iban cuits dans le bambou.', tip: 'Réservez à l’avance auprès d’opérateurs locaux, qui viennent vous chercher à Bangar ; le soir, des lucioles scintillent au-dessus de la rivière.' },
        it: { name: 'Eco-villaggio di Sumbiling', description: 'Una piccola comunità sul fiume dove si dorme in capanne di bambù, ci si lascia trasportare dalla corrente su una camera d’aria e si cenano piatti iban cotti nel bambù.', tip: 'Prenota in anticipo tramite operatori locali, che ti vengono a prendere a Bangar; la sera sul fiume brillano le lucciole.' },
      },
    },
  ],
};

export default pack;
