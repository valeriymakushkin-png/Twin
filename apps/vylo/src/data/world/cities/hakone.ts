import type { CityPack } from '../types';
import { free, level, makeDay, makePlace } from './_kit.ts';

const P = makePlace('hakone');
const D = makeDay('hakone');
const TORII = 'SBK40fdKbAg';
const VALLEY = '5kUgEAITlT4';
const SHIP = '-Jhkpa4lphQ';
const ROPEWAY = '_Byc5K8hcns';
const EGGS = 'UZ8U7jeIis4';

const pack: CityPack = {
  country: 'JP',
  city: 'hakone',
  places: [
    P('lake-ashi-cruise', 'attraction', 35.205, 139.025, SHIP, 4.4, 21000, ['lakes', 'cruise', 'views'], {
      ru: ['Круиз по озеру Аси', '«Пиратские» корабли ходят по кальдерному озеру между Тогэндаем, Хаконэ-мати и Мото-Хаконэ; в ясный день над водой видна Фудзи.', 'Садитесь по правому борту из Тогэндая — так Фудзи будет с вашей стороны.'],
      en: ['Lake Ashi cruise', '“Pirate ships” sail the caldera lake between Tōgendai, Hakone-machi and Moto-Hakone; on a clear day Fuji rises above the water.', 'Sit on the right side leaving Tōgendai to have Fuji on your side.'],
      es: ['Crucero por el lago Ashi', 'Los «barcos pirata» navegan por el lago de caldera entre Tōgendai, Hakone-machi y Moto-Hakone; en días claros el Fuji asoma sobre el agua.', 'Siéntate a estribor saliendo de Tōgendai para tener el Fuji de tu lado.'],
      de: ['Schifffahrt auf dem Ashi-See', '„Piratenschiffe“ fahren über den Kratersee zwischen Tōgendai, Hakone-machi und Moto-Hakone; bei klarer Sicht steht der Fuji über dem Wasser.', 'Ab Tōgendai rechts sitzen, dann ist der Fuji auf Ihrer Seite.'],
      fr: ['Croisière sur le lac Ashi', 'Des « bateaux pirates » sillonnent le lac de caldeira entre Tōgendai, Hakone-machi et Moto-Hakone ; par temps clair, le Fuji surgit au-dessus de l’eau.', 'Asseyez-vous à tribord au départ de Tōgendai pour avoir le Fuji de votre côté.'],
      it: ['Crociera sul lago Ashi', 'Le «navi pirata» solcano il lago di caldera tra Tōgendai, Hakone-machi e Moto-Hakone; nelle giornate limpide il Fuji si alza sull’acqua.', 'Siediti a destra partendo da Tōgendai per avere il Fuji dal tuo lato.'],
    }, { spot: 'insta', price: level(1) }),
    P('hakone-shrine', 'attraction', 35.2048, 139.0254, TORII, 4.6, 28000, ['temples', 'photo', 'lakes'], {
      ru: ['Святилище Хаконэ', 'Святилище VIII века в кедровом лесу на берегу Аси с красными «воротами мира» тории прямо в воде.', 'За фото у тории в воде стоят в очереди — приходите к 8 утра.'],
      en: ['Hakone Shrine', 'An 8th-century shrine in a cedar forest on Lake Ashi, with its red “Torii of Peace” standing in the water.', 'People queue for the photo at the lakeside torii — come by 8 am.'],
      es: ['Santuario de Hakone', 'Un santuario del siglo VIII en un bosque de cedros a orillas del Ashi, con su torii rojo «de la Paz» dentro del agua.', 'Hay cola para la foto en el torii del lago: ve antes de las 8.'],
      de: ['Hakone-Schrein', 'Ein Schrein aus dem 8. Jh. im Zedernwald am Ashi-See, mit dem roten „Friedenstorii“ im Wasser.', 'Für das Foto am Seetorii steht man an – bis 8 Uhr kommen.'],
      fr: ['Sanctuaire de Hakone', 'Un sanctuaire du VIIIe siècle dans une forêt de cèdres au bord du lac Ashi, avec son torii rouge « de la Paix » planté dans l’eau.', 'On fait la queue pour la photo au torii du lac : venez avant 8 h.'],
      it: ['Santuario di Hakone', 'Un santuario dell’VIII secolo in un bosco di cedri sul lago Ashi, con il torii rosso «della Pace» nell’acqua.', 'Per la foto al torii sul lago c’è fila: arriva entro le 8.'],
    }, { spot: 'insta', price: free }),
    P('owakudani', 'nature', 35.2442, 139.0197, VALLEY, 4.4, 33000, ['volcanoes', 'views', 'nature'], {
      ru: ['Овакудани', 'Вулканическая долина, образовавшаяся при извержении около 3000 лет назад: дымящиеся серные источники и вид на Фудзи.', 'При высокой концентрации вулканических газов доступ закрывают — проверьте статус в день поездки.'],
      en: ['Ōwakudani', 'A volcanic valley formed by an eruption about 3,000 years ago: steaming sulphur vents and views of Fuji.', 'Access closes when volcanic gas levels are high — check the status on the day.'],
      es: ['Ōwakudani', 'Un valle volcánico formado por una erupción hace unos 3000 años: fumarolas de azufre humeantes y vistas del Fuji.', 'Se cierra el acceso cuando los gases volcánicos son altos: comprueba el estado ese día.'],
      de: ['Ōwakudani', 'Ein vor rund 3000 Jahren bei einem Ausbruch entstandenes Vulkantal: dampfende Schwefelquellen und Blick auf den Fuji.', 'Bei hohen Vulkangaswerten wird der Zugang gesperrt – am Tag den Status prüfen.'],
      fr: ['Ōwakudani', 'Une vallée volcanique née d’une éruption il y a environ 3 000 ans : fumerolles soufrées et vue sur le Fuji.', 'L’accès ferme quand les gaz volcaniques sont élevés : vérifiez le jour même.'],
      it: ['Ōwakudani', 'Una valle vulcanica formatasi con un’eruzione circa 3000 anni fa: fumarole sulfuree e vista sul Fuji.', 'L’accesso chiude quando i gas vulcanici sono alti: controlla lo stato il giorno stesso.'],
    }, { spot: 'insta', price: free }),
    P('hakone-ropeway', 'attraction', 35.242, 139.035, ROPEWAY, 4.5, 18000, ['views', 'adventure'], {
      ru: ['Канатная дорога Хаконэ', 'Гондолы от Соундзана через дымящуюся Овакудани к озеру Аси — над жерлом с видом на Фудзи.', 'Входит в Hakone Freepass; в ветреную погоду дорогу временно останавливают.'],
      en: ['Hakone Ropeway', 'Gondolas from Sōunzan over steaming Ōwakudani down to Lake Ashi — right above the vents with Fuji in view.', 'Included in the Hakone Freepass; it pauses in strong wind.'],
      es: ['Teleférico de Hakone', 'Góndolas desde Sōunzan sobre el humeante Ōwakudani hasta el lago Ashi, justo encima de las fumarolas y con el Fuji a la vista.', 'Incluido en el Hakone Freepass; se detiene con viento fuerte.'],
      de: ['Hakone-Seilbahn', 'Gondeln von Sōunzan über das dampfende Ōwakudani hinunter zum Ashi-See – direkt über den Schloten mit Fuji-Blick.', 'Im Hakone Freepass enthalten; bei Sturm wird sie angehalten.'],
      fr: ['Téléphérique de Hakone', 'Des télécabines de Sōunzan au-dessus d’Ōwakudani fumant jusqu’au lac Ashi, juste au-dessus des fumerolles, Fuji en vue.', 'Inclus dans le Hakone Freepass ; arrêté par grand vent.'],
      it: ['Funivia di Hakone', 'Cabine da Sōunzan sopra la fumante Ōwakudani fino al lago Ashi, proprio sopra le fumarole con vista sul Fuji.', 'Inclusa nell’Hakone Freepass; si ferma col vento forte.'],
    }, { spot: 'insta', price: level(2) }),
    P('open-air-museum', 'attraction', 35.2445, 139.0503, VALLEY, 4.6, 24000, ['art', 'museums', 'gardens'], {
      ru: ['Музей под открытым небом Хаконэ', 'Скульптурный парк 1969 года на склоне гор: работы Мура, Родена и Нико де Сен-Фалль и павильон Пикассо с сотнями работ.', 'В парке есть бесплатная ванна для ног с горячей водой — передохните между залами.'],
      en: ['Hakone Open-Air Museum', 'A 1969 sculpture park on a mountainside: works by Moore, Rodin and Niki de Saint Phalle, plus a Picasso Pavilion with hundreds of pieces.', 'There’s a free hot-spring foot bath in the park — rest between galleries.'],
      es: ['Museo al Aire Libre de Hakone', 'Un parque de esculturas de 1969 en la ladera: obras de Moore, Rodin y Niki de Saint Phalle, y un Pabellón Picasso con cientos de piezas.', 'Hay un baño de pies termal gratuito en el parque: descansa entre salas.'],
      de: ['Hakone Open-Air Museum', 'Ein Skulpturenpark von 1969 am Berghang: Werke von Moore, Rodin und Niki de Saint Phalle sowie ein Picasso-Pavillon mit Hunderten Arbeiten.', 'Im Park gibt es ein kostenloses Thermal-Fußbad – zwischen den Hallen ausruhen.'],
      fr: ['Musée en plein air de Hakone', 'Un parc de sculptures de 1969 à flanc de montagne : Moore, Rodin, Niki de Saint Phalle et un pavillon Picasso de centaines d’œuvres.', 'Un bain de pieds thermal gratuit vous attend dans le parc entre deux galeries.'],
      it: ['Museo all’aperto di Hakone', 'Un parco di sculture del 1969 sul fianco del monte: opere di Moore, Rodin e Niki de Saint Phalle e un Padiglione Picasso con centinaia di pezzi.', 'Nel parco c’è un pediluvio termale gratuito: riposati tra le sale.'],
    }, { spot: 'insta', price: level(2), address: '1121 Ninotaira' }),
    P('pola-museum', 'attraction', 35.255, 139.043, VALLEY, 4.6, 7800, ['art', 'museums', 'nature'], {
      ru: ['Музей искусства Pola', 'Стеклянный музей в лесу Сэнгокухары с импрессионистами — Моне, Ренуар — и лесной тропой с инсталляциями.', 'Пройдите лесную тропу за музеем — особенно хороша осенью.'],
      en: ['Pola Museum of Art', 'A glass museum in the Sengokuhara forest with Impressionists — Monet, Renoir — and a woodland trail with installations.', 'Walk the forest trail behind the museum — lovely in autumn.'],
      es: ['Museo de Arte Pola', 'Un museo de cristal en el bosque de Sengokuhara con impresionistas —Monet, Renoir— y un sendero con instalaciones.', 'Recorre el sendero del bosque tras el museo: precioso en otoño.'],
      de: ['Pola Museum of Art', 'Ein Glasmuseum im Wald von Sengokuhara mit Impressionisten – Monet, Renoir – und einem Waldpfad mit Installationen.', 'Den Waldpfad hinter dem Museum gehen – herrlich im Herbst.'],
      fr: ['Musée d’art Pola', 'Un musée de verre dans la forêt de Sengokuhara avec des impressionnistes — Monet, Renoir — et un sentier forestier jalonné d’installations.', 'Suivez le sentier forestier derrière le musée : superbe à l’automne.'],
      it: ['Museo d’arte Pola', 'Un museo di vetro nel bosco di Sengokuhara con impressionisti — Monet, Renoir — e un sentiero nel bosco con installazioni.', 'Percorri il sentiero dietro il museo: bellissimo in autunno.'],
    }, { price: level(2) }),
    P('tozan-railway', 'attraction', 35.2329, 139.1046, ROPEWAY, 4.5, 9800, ['views', 'roadtrip'], {
      ru: ['Горная железная дорога Хаконэ', 'Поезд из Хаконэ-Юмото в Гору карабкается по крутым склонам, трижды меняя направление на зигзагах.', 'В конце июня — июле вдоль путей цветут гортензии, а вечером их подсвечивают.'],
      en: ['Hakone Tozan Railway', 'The train from Hakone-Yumoto to Gōra climbs steep slopes, reversing three times on switchbacks.', 'In late June and July hydrangeas bloom along the track and are lit up in the evening.'],
      es: ['Ferrocarril Hakone Tozan', 'El tren de Hakone-Yumoto a Gōra trepa pendientes empinadas y cambia tres veces de sentido en zigzags.', 'A finales de junio y en julio florecen hortensias junto a la vía, iluminadas por la noche.'],
      de: ['Hakone-Tozan-Bahn', 'Der Zug von Hakone-Yumoto nach Gōra erklimmt steile Hänge und wechselt an Spitzkehren dreimal die Richtung.', 'Ende Juni und im Juli blühen Hortensien an der Strecke und werden abends beleuchtet.'],
      fr: ['Chemin de fer Hakone Tozan', 'Le train de Hakone-Yumoto à Gōra gravit des pentes raides et change trois fois de sens sur des rebroussements.', 'Fin juin et en juillet, des hortensias fleurissent le long des voies, illuminés le soir.'],
      it: ['Ferrovia Hakone Tozan', 'Il treno da Hakone-Yumoto a Gōra sale ripidi pendii invertendo tre volte la marcia sui tornanti.', 'A fine giugno e luglio lungo i binari fioriscono le ortensie, illuminate la sera.'],
    }, { price: level(1) }),
    P('cedar-avenue', 'nature', 35.196, 139.027, TORII, 4.6, 6900, ['nature', 'history', 'hiking'], {
      ru: ['Кедровая аллея Старого Токайдо', 'Аллея из нескольких сотен кедров, посаженных в начале XVII века вдоль древней дороги Эдо — Киото.', 'Пройдите от Мото-Хаконэ до заставы Сэкисё — около 20 минут в тени.'],
      en: ['Old Tōkaidō Cedar Avenue', 'An avenue of several hundred cedars planted in the early 17th century along the ancient Edo–Kyoto highway.', 'Walk from Moto-Hakone to the Sekisho checkpoint — about 20 shady minutes.'],
      es: ['Avenida de cedros del Viejo Tōkaidō', 'Una avenida de varios cientos de cedros plantados a principios del siglo XVII en la antigua ruta Edo–Kioto.', 'Camina de Moto-Hakone al puesto de control Sekisho: unos 20 minutos a la sombra.'],
      de: ['Zedernallee des Alten Tōkaidō', 'Eine Allee aus mehreren hundert Zedern, gepflanzt Anfang des 17. Jh. an der alten Straße Edo–Kyōto.', 'Von Moto-Hakone zur Sekisho-Grenzstation gehen – etwa 20 schattige Minuten.'],
      fr: ['Allée de cèdres du vieux Tōkaidō', 'Une allée de plusieurs centaines de cèdres plantés au début du XVIIe siècle le long de l’ancienne route Edo–Kyoto.', 'Marchez de Moto-Hakone au poste de Sekisho : une vingtaine de minutes à l’ombre.'],
      it: ['Viale dei cedri del vecchio Tōkaidō', 'Un viale di diverse centinaia di cedri piantati all’inizio del XVII secolo lungo l’antica strada Edo–Kyoto.', 'Cammina da Moto-Hakone al posto di blocco Sekisho: circa 20 minuti all’ombra.'],
    }, { spot: 'hidden', price: free }),
    P('hakone-sekisho', 'attraction', 35.1918, 139.0245, TORII, 4.3, 9200, ['history', 'museums'], {
      ru: ['Застава Хаконэ Сэкисё', 'Восстановленная по старым планам застава эпохи Эдо, где досматривали путников на дороге Токайдо.', 'Поднимитесь на смотровую башню — вид на озеро Аси.'],
      en: ['Hakone Sekisho Checkpoint', 'An Edo-period checkpoint rebuilt from old plans, where travellers on the Tōkaidō were inspected.', 'Climb the lookout tower for a view over Lake Ashi.'],
      es: ['Puesto de control Hakone Sekisho', 'Un puesto de control del periodo Edo reconstruido según planos antiguos, donde se inspeccionaba a los viajeros del Tōkaidō.', 'Sube a la torre de vigía para ver el lago Ashi.'],
      de: ['Grenzstation Hakone Sekisho', 'Eine nach alten Plänen wiederaufgebaute Kontrollstation der Edo-Zeit, an der Reisende auf dem Tōkaidō kontrolliert wurden.', 'Auf den Wachturm steigen – Blick über den Ashi-See.'],
      fr: ['Poste de contrôle Hakone Sekisho', 'Un poste de contrôle d’Edo reconstruit d’après les plans anciens, où l’on inspectait les voyageurs du Tōkaidō.', 'Montez à la tour de guet pour la vue sur le lac Ashi.'],
      it: ['Posto di blocco Hakone Sekisho', 'Un posto di blocco del periodo Edo ricostruito sui piani antichi, dove si controllavano i viaggiatori del Tōkaidō.', 'Sali sulla torre di guardia per la vista sul lago Ashi.'],
    }, { price: level(1) }),
    P('gora-park', 'nature', 35.248, 139.047, VALLEY, 4.3, 8700, ['gardens'], {
      ru: ['Парк Гора', 'Регулярный парк во французском стиле 1914 года на склоне: фонтан, розарий, оранжерея и мастерские ремёсел.', 'С верхней террасы хорошо видны горы вокруг.'],
      en: ['Gōra Park', 'A 1914 French-style formal park on the slope: a fountain, rose garden, greenhouse and craft workshops.', 'The upper terrace has a fine view of the surrounding mountains.'],
      es: ['Parque Gōra', 'Un parque formal de estilo francés de 1914 en la ladera: fuente, rosaleda, invernadero y talleres de artesanía.', 'Desde la terraza alta hay buena vista de las montañas.'],
      de: ['Gōra-Park', 'Ein französischer Barockpark von 1914 am Hang: Brunnen, Rosengarten, Gewächshaus und Handwerkswerkstätten.', 'Von der oberen Terrasse schöner Blick auf die Berge.'],
      fr: ['Parc de Gōra', 'Un parc à la française de 1914 à flanc de colline : fontaine, roseraie, serre et ateliers d’artisanat.', 'La terrasse haute offre une belle vue sur les montagnes.'],
      it: ['Parco di Gōra', 'Un parco alla francese del 1914 sul pendio: fontana, roseto, serra e laboratori artigianali.', 'Dalla terrazza alta bella vista sui monti intorno.'],
    }, { price: level(1) }),
    P('tenzan-onsen', 'nature', 35.224, 139.095, VALLEY, 4.4, 6100, ['spa', 'nature'], {
      ru: ['Онсэн Тэндзан', 'Общественные горячие источники в Оку-Юмото с открытыми купальнями у горной реки — без ночёвки в рёкане.', 'Возьмите своё полотенце; от станции Хаконэ-Юмото ходит бесплатный автобус.'],
      en: ['Tenzan Onsen', 'A day-use hot spring in Oku-Yumoto with outdoor pools beside a mountain river — no ryokan stay needed.', 'Bring your own towel; a free bus runs from Hakone-Yumoto station.'],
      es: ['Tenzan Onsen', 'Unas termas de día en Oku-Yumoto con baños al aire libre junto a un río de montaña, sin alojarte en un ryokan.', 'Lleva toalla; hay autobús gratuito desde la estación de Hakone-Yumoto.'],
      de: ['Tenzan Onsen', 'Eine Tagestherme in Oku-Yumoto mit Freiluftbecken an einem Bergfluss – ohne Ryokan-Übernachtung.', 'Eigenes Handtuch mitbringen; ab Bahnhof Hakone-Yumoto fährt ein Gratisbus.'],
      fr: ['Tenzan Onsen', 'Des bains thermaux à la journée à Oku-Yumoto, bassins en plein air au bord d’une rivière, sans nuit en ryokan.', 'Apportez votre serviette ; un bus gratuit part de la gare de Hakone-Yumoto.'],
      it: ['Tenzan Onsen', 'Terme a ingresso giornaliero a Oku-Yumoto con vasche all’aperto lungo un torrente, senza dormire in ryokan.', 'Porta l’asciugamano; un bus gratuito parte dalla stazione di Hakone-Yumoto.'],
    }, { price: level(1) }),
    P('okada-museum', 'attraction', 35.237, 139.056, VALLEY, 4.5, 4300, ['art', 'museums'], {
      ru: ['Музей искусства Окада', 'Музей азиатской керамики и живописи с огромным панно богов ветра и грома на фасаде и кафе с ванной для ног.', 'Даже без музея можно посидеть в кафе у ванны для ног перед фасадом.'],
      en: ['Okada Museum of Art', 'A museum of Asian ceramics and painting with a huge Wind and Thunder Gods mural on its façade and a foot-bath café.', 'Even without the museum, sit at the foot-bath café in front of the façade.'],
      es: ['Museo de Arte Okada', 'Un museo de cerámica y pintura asiáticas con un enorme mural de los dioses del viento y el trueno en la fachada y un café con baño de pies.', 'Aunque no entres, siéntate en el café del baño de pies ante la fachada.'],
      de: ['Okada Museum of Art', 'Ein Museum für asiatische Keramik und Malerei mit riesigem Wind- und Donnergott-Wandbild an der Fassade und Fußbad-Café.', 'Auch ohne Museum ins Fußbad-Café vor der Fassade setzen.'],
      fr: ['Musée d’art Okada', 'Un musée de céramique et de peinture asiatiques avec une immense fresque des dieux du Vent et du Tonnerre en façade et un café-bain de pieds.', 'Même sans visiter, asseyez-vous au café-bain de pieds devant la façade.'],
      it: ['Museo d’arte Okada', 'Un museo di ceramica e pittura asiatiche con un enorme murale degli dèi del vento e del tuono in facciata e un caffè con pediluvio.', 'Anche senza museo, siediti al caffè con pediluvio davanti alla facciata.'],
    }, { spot: 'insta', price: level(2) }),
    P('yumoto-street', 'attraction', 35.2325, 139.104, ROPEWAY, 4.2, 7400, ['shopping', 'streetfood'], {
      ru: ['Улица Хаконэ-Юмото', 'Торговая улица у станции — ворота в Хаконэ: лавки сладостей, рыбных котлеток камабоко и онсэн-манджю.', 'Хорошее место купить сувениры в последний день.'],
      en: ['Hakone-Yumoto street', 'The shopping street by the station, gateway to Hakone: sweet shops, kamaboko fish cakes and onsen manjū.', 'A good place for souvenirs on your last day.'],
      es: ['Calle de Hakone-Yumoto', 'La calle comercial junto a la estación, puerta de Hakone: dulcerías, pasteles de pescado kamaboko y onsen manjū.', 'Buen sitio para recuerdos el último día.'],
      de: ['Straße von Hakone-Yumoto', 'Die Einkaufsstraße am Bahnhof, Tor nach Hakone: Süßwarenläden, Kamaboko-Fischkuchen und Onsen-Manjū.', 'Gut für Mitbringsel am letzten Tag.'],
      fr: ['Rue de Hakone-Yumoto', 'La rue commerçante de la gare, porte de Hakone : confiseries, galettes de poisson kamaboko et onsen manjū.', 'Idéal pour les souvenirs le dernier jour.'],
      it: ['Via di Hakone-Yumoto', 'La via dei negozi vicino alla stazione, porta di Hakone: dolcerie, polpette di pesce kamaboko e onsen manjū.', 'Ottima per i souvenir dell’ultimo giorno.'],
    }, { price: free }),
    P('mishima-skywalk', 'attraction', 35.143, 138.99, TORII, 4.4, 16000, ['views', 'photo'], {
      ru: ['Мисима Скайуок', 'Самый длинный пешеходный подвесной мост Японии (400 м, 2015) над лесным ущельем с видом на Фудзи и залив Суруга.', 'Утром Фудзи видна чаще, чем днём.'],
      en: ['Mishima Skywalk', 'Japan’s longest pedestrian suspension bridge (400 m, 2015) over a forested gorge with views of Fuji and Suruga Bay.', 'Fuji is more often visible in the morning.'],
      es: ['Mishima Skywalk', 'El puente colgante peatonal más largo de Japón (400 m, 2015) sobre un barranco boscoso con vistas al Fuji y la bahía de Suruga.', 'Por la mañana el Fuji se ve más a menudo.'],
      de: ['Mishima Skywalk', 'Japans längste Fußgänger-Hängebrücke (400 m, 2015) über einer Waldschlucht mit Blick auf Fuji und die Suruga-Bucht.', 'Morgens ist der Fuji öfter zu sehen.'],
      fr: ['Mishima Skywalk', 'La plus longue passerelle suspendue piétonne du Japon (400 m, 2015) au-dessus d’un ravin boisé, vue sur le Fuji et la baie de Suruga.', 'Le Fuji est plus souvent visible le matin.'],
      it: ['Mishima Skywalk', 'Il più lungo ponte sospeso pedonale del Giappone (400 m, 2015) su una gola boscosa, con vista sul Fuji e sulla baia di Suruga.', 'Al mattino il Fuji si vede più spesso.'],
    }, { spot: 'insta', price: level(2) }),
    P('gyoza-center', 'food', 35.248, 139.056, VALLEY, 4.2, 5200, ['food'], {
      ru: ['Hakone Gyoza Center', 'Популярная гёдза-лавка у Горы: десяток видов пельменей — жареные, варёные, в супе, с разными начинками.', 'В обед очередь — приходите к открытию или после 14:00.'],
      en: ['Hakone Gyoza Center', 'A popular gyoza house near Gōra: a dozen kinds of dumplings — fried, boiled, in soup, with different fillings.', 'There’s a queue at lunch — come at opening or after 2 pm.'],
      es: ['Hakone Gyoza Center', 'Un popular local de gyoza cerca de Gōra: una docena de variedades, a la plancha, hervidas o en sopa.', 'A mediodía hay cola: ve a la apertura o después de las 14:00.'],
      de: ['Hakone Gyoza Center', 'Ein beliebtes Gyoza-Lokal nahe Gōra: ein Dutzend Sorten – gebraten, gekocht, in Suppe, mit verschiedenen Füllungen.', 'Mittags Schlange – zur Öffnung oder nach 14 Uhr kommen.'],
      fr: ['Hakone Gyoza Center', 'Une adresse de gyoza prisée près de Gōra : une douzaine de sortes, grillés, bouillis ou en soupe.', 'File à midi : venez à l’ouverture ou après 14 h.'],
      it: ['Hakone Gyoza Center', 'Un locale di gyoza molto amato vicino a Gōra: una dozzina di varietà, alla piastra, bolliti o in brodo.', 'A pranzo c’è fila: vieni all’apertura o dopo le 14.'],
    }, { price: level(1), menu: [
      ['Yaki gyoza', undefined, 'жареные гёдза|pan-fried gyoza|gyoza a la plancha|gebratene Gyoza|gyoza grillés|gyoza alla piastra'],
      ['Sui gyoza', undefined, 'гёдза в бульоне|gyoza in soup|gyoza en sopa|Gyoza in Suppe|gyoza en soupe|gyoza in brodo'],
    ] }),
    P('tamura-ginkatsutei', 'food', 35.2465, 139.0512, VALLEY, 4.3, 4600, ['food'], {
      ru: ['Тамура Гинкацутэй', 'Ресторан в Горе со знаменитым «тофу-кацу-ни»: котлета из тофу с фаршем, томлённая с яйцом в глиняном горшке.', 'Очередь с открытия — запишитесь в лист и погуляйте по парку Гора.'],
      en: ['Tamura Ginkatsutei', 'A Gōra restaurant famous for “tofu katsu-ni”: tofu cutlet stuffed with minced meat, simmered with egg in a clay pot.', 'There’s a queue from opening — sign the list and stroll Gōra Park.'],
      es: ['Tamura Ginkatsutei', 'Un restaurante de Gōra famoso por su «tofu katsu-ni»: filete de tofu relleno de carne, guisado con huevo en olla de barro.', 'Hay cola desde la apertura: apúntate y pasea por el parque Gōra.'],
      de: ['Tamura Ginkatsutei', 'Ein Lokal in Gōra, berühmt für „Tofu Katsu-ni“: Tofuschnitzel mit Hackfüllung, mit Ei im Tontopf geschmort.', 'Ab Öffnung Schlange – in die Liste eintragen und durch den Gōra-Park bummeln.'],
      fr: ['Tamura Ginkatsutei', 'Un restaurant de Gōra célèbre pour son « tofu katsu-ni » : escalope de tofu farcie, mijotée à l’œuf dans une marmite en terre.', 'File dès l’ouverture : inscrivez-vous et flânez au parc de Gōra.'],
      it: ['Tamura Ginkatsutei', 'Un ristorante di Gōra famoso per il «tofu katsu-ni»: cotoletta di tofu ripiena di carne, stufata con l’uovo in pentola di terracotta.', 'C’è fila dall’apertura: segnati e passeggia nel parco di Gōra.'],
    }, { price: level(2), menu: [
      ['Tofu katsu-ni set', undefined, 'тофу-кацу, томлённое с яйцом|tofu cutlet simmered with egg|filete de tofu guisado con huevo|mit Ei geschmortes Tofuschnitzel|escalope de tofu mijotée à l’œuf|cotoletta di tofu stufata con uovo'],
      ['Rōsu katsu', undefined, 'свиная котлета из корейки|pork loin cutlet|filete empanado de lomo de cerdo|Schweinelachs-Schnitzel|escalope de longe de porc|cotoletta di lombo di maiale'],
    ] }),
    P('hatsuhana-soba', 'food', 35.232, 139.104, ROPEWAY, 4.3, 5400, ['food', 'history'], {
      ru: ['Хацухана', 'Собная у реки в Хаконэ-Юмото, работающая с 1930-х: гречневая лапша, замешанная на диком ямсе и яйце, без воды.', 'Возьмите «сэйро» с тёртым ямсом — фирменное блюдо.'],
      en: ['Hatsuhana', 'A riverside soba house in Hakone-Yumoto since the 1930s: buckwheat noodles kneaded with wild yam and egg, no water.', 'Get the seiro soba with grated yam — the house speciality.'],
      es: ['Hatsuhana', 'Una casa de soba junto al río en Hakone-Yumoto desde los años treinta: fideos de alforfón amasados con ñame silvestre y huevo, sin agua.', 'Pide el seiro soba con ñame rallado, la especialidad.'],
      de: ['Hatsuhana', 'Ein Soba-Haus am Fluss in Hakone-Yumoto seit den 1930ern: Buchweizennudeln mit wilder Yamswurzel und Ei geknetet, ohne Wasser.', 'Seiro-Soba mit geriebener Yamswurzel nehmen – die Spezialität.'],
      fr: ['Hatsuhana', 'Une maison de soba au bord de la rivière à Hakone-Yumoto depuis les années 1930 : nouilles de sarrasin pétries à l’igname sauvage et à l’œuf, sans eau.', 'Prenez les seiro soba à l’igname râpée, la spécialité.'],
      it: ['Hatsuhana', 'Una casa di soba sul fiume a Hakone-Yumoto dagli anni Trenta: spaghetti di grano saraceno impastati con igname selvatico e uovo, senz’acqua.', 'Prendi le seiro soba con igname grattugiato, la specialità.'],
    }, { price: level(1), menu: [
      ['Seiro soba with yam', undefined, 'холодная соба с тёртым ямсом|cold soba with grated yam|soba fría con ñame rallado|kalte Soba mit geriebener Yams|soba froides à l’igname râpée|soba fredde con igname grattugiato'],
      ['Tempura soba', undefined, 'соба с темпурой|soba with tempura|soba con tempura|Soba mit Tempura|soba et tempura|soba con tempura'],
    ] }),
    P('amazake-chaya', 'food', 35.199, 139.035, TORII, 4.5, 5800, ['food', 'history'], {
      ru: ['Амадзакэ-тяя', 'Чайный дом под соломенной крышей на Старом Токайдо, которым одна семья управляет около 400 лет: сладкий рисовый амадзакэ и моти.', 'Сюда приятно дойти пешком по старой каменной дороге от Мото-Хаконэ.'],
      en: ['Amazake-chaya', 'A thatched teahouse on the Old Tōkaidō run by one family for about 400 years: sweet rice amazake and mochi.', 'It’s lovely to reach on foot along the old stone-paved road from Moto-Hakone.'],
      es: ['Amazake-chaya', 'Una casa de té con techo de paja en el Viejo Tōkaidō que una familia lleva unos 400 años: amazake dulce de arroz y mochi.', 'Merece la pena llegar a pie por la vieja calzada desde Moto-Hakone.'],
      de: ['Amazake-chaya', 'Ein strohgedecktes Teehaus am Alten Tōkaidō, seit rund 400 Jahren in Familienhand: süßer Reis-Amazake und Mochi.', 'Schön zu Fuß über den alten Pflasterweg ab Moto-Hakone zu erreichen.'],
      fr: ['Amazake-chaya', 'Une maison de thé au toit de chaume sur le vieux Tōkaidō, tenue par la même famille depuis environ 400 ans : amazake de riz sucré et mochi.', 'Agréable à rejoindre à pied par l’ancienne voie pavée depuis Moto-Hakone.'],
      it: ['Amazake-chaya', 'Una casa da tè dal tetto di paglia sul vecchio Tōkaidō, gestita dalla stessa famiglia da circa 400 anni: amazake dolce di riso e mochi.', 'Bello arrivarci a piedi lungo l’antica strada lastricata da Moto-Hakone.'],
    }, { spot: 'insta', price: level(1), menu: [
      ['Amazake', undefined, 'тёплый сладкий напиток из риса|warm sweet rice drink|bebida dulce caliente de arroz|warmes süßes Reisgetränk|boisson chaude et sucrée de riz|bevanda calda e dolce di riso'],
      ['Chikara mochi', undefined, 'моти с соевой мукой или нори|mochi with soybean flour or nori|mochi con harina de soja o nori|Mochi mit Sojamehl oder Nori|mochi au kinako ou au nori|mochi con kinako o nori'],
    ] }),
    P('naraya-cafe', 'food', 35.2405, 139.0605, VALLEY, 4.4, 2900, ['food', 'spa'], {
      ru: ['Naraya Cafe', 'Кафе в Мияносите на месте старого рёкана: кофе и сладости с ванной для ног на террасе.', 'Опустите ноги в горячую воду, пока ждёте заказ.'],
      en: ['Naraya Cafe', 'A café in Miyanoshita on the site of an old ryokan: coffee and sweets with a foot bath on the terrace.', 'Soak your feet in the hot water while you wait for your order.'],
      es: ['Naraya Cafe', 'Un café en Miyanoshita en el solar de un antiguo ryokan: café y dulces con baño de pies en la terraza.', 'Mete los pies en el agua caliente mientras esperas.'],
      de: ['Naraya Cafe', 'Ein Café in Miyanoshita auf dem Gelände eines alten Ryokan: Kaffee und Süßes mit Fußbad auf der Terrasse.', 'Die Füße ins heiße Wasser halten, während man wartet.'],
      fr: ['Naraya Cafe', 'Un café de Miyanoshita sur le site d’un ancien ryokan : café et douceurs avec bain de pieds en terrasse.', 'Trempez vos pieds dans l’eau chaude en attendant la commande.'],
      it: ['Naraya Cafe', 'Un caffè a Miyanoshita sul sito di un vecchio ryokan: caffè e dolci con pediluvio in terrazza.', 'Immergi i piedi nell’acqua calda mentre aspetti.'],
    }, { spot: 'hidden', price: level(1) }),
    P('bakery-table', 'food', 35.202, 139.0255, SHIP, 4.3, 4100, ['food', 'lakes'], {
      ru: ['Bakery & Table Hakone', 'Пекарня у озера Аси в Мото-Хаконэ: внизу — десятки видов хлеба, на террасе — ванна для ног с видом на воду.', 'Возьмите булку внизу и съешьте её на террасе с ванной для ног.'],
      en: ['Bakery & Table Hakone', 'A bakery on Lake Ashi in Moto-Hakone: dozens of breads downstairs and a foot-bath terrace over the water.', 'Grab a bun downstairs and eat it on the foot-bath terrace.'],
      es: ['Bakery & Table Hakone', 'Una panadería junto al lago Ashi en Moto-Hakone: decenas de panes abajo y una terraza con baño de pies sobre el agua.', 'Compra un bollo abajo y cómetelo en la terraza con baño de pies.'],
      de: ['Bakery & Table Hakone', 'Eine Bäckerei am Ashi-See in Moto-Hakone: unten Dutzende Brotsorten, draußen eine Fußbad-Terrasse über dem Wasser.', 'Unten ein Brötchen holen und auf der Fußbad-Terrasse essen.'],
      fr: ['Bakery & Table Hakone', 'Une boulangerie au bord du lac Ashi à Moto-Hakone : des dizaines de pains en bas et une terrasse avec bain de pieds sur l’eau.', 'Prenez un pain en bas et mangez-le sur la terrasse au bain de pieds.'],
      it: ['Bakery & Table Hakone', 'Un forno sul lago Ashi a Moto-Hakone: decine di pani al piano terra e una terrazza con pediluvio sull’acqua.', 'Prendi un panino di sotto e mangialo sulla terrazza col pediluvio.'],
    }, { price: level(1) }),
    P('itoh-dining-nobu', 'food', 35.2475, 139.05, VALLEY, 4.5, 1800, ['food', 'romance', 'luxury'], {
      ru: ['Itoh Dining by Nobu', 'Тэппанъяки в Горе при участии шефа Нобу Мацухисы: вагю на плите перед вами и фирменные блюда Nobu.', 'Бронируйте место за стойкой у плиты — это главный спектакль.'],
      en: ['Itoh Dining by Nobu', 'Teppanyaki in Gōra with chef Nobu Matsuhisa: wagyu on the griddle in front of you plus Nobu signatures.', 'Book a seat at the griddle counter — that’s the show.'],
      es: ['Itoh Dining by Nobu', 'Teppanyaki en Gōra con el chef Nobu Matsuhisa: wagyu en la plancha delante de ti y clásicos de Nobu.', 'Reserva en la barra de la plancha: ese es el espectáculo.'],
      de: ['Itoh Dining by Nobu', 'Teppanyaki in Gōra mit Küchenchef Nobu Matsuhisa: Wagyu auf der Platte vor einem und Nobu-Klassiker.', 'Einen Platz am Grilltresen buchen – das ist die Show.'],
      fr: ['Itoh Dining by Nobu', 'Teppanyaki à Gōra avec le chef Nobu Matsuhisa : wagyu sur la plaque devant vous et plats signatures de Nobu.', 'Réservez au comptoir de la plaque : c’est là que tout se joue.'],
      it: ['Itoh Dining by Nobu', 'Teppanyaki a Gōra con lo chef Nobu Matsuhisa: wagyu sulla piastra davanti a te e piatti firma di Nobu.', 'Prenota al bancone della piastra: lo spettacolo è lì.'],
    }, { price: level(3), menu: [
      ['Wagyu teppanyaki', undefined, 'вагю на плите тэппан|wagyu cooked on the teppan|wagyu a la plancha teppan|Wagyu vom Teppan|wagyu cuit sur le teppan|wagyu cotto sul teppan'],
      ['Black cod miso', undefined, 'чёрная треска в мисо|black cod marinated in miso|bacalao negro al miso|Schwarzer Kabeljau in Miso|morue noire au miso|merluzzo nero al miso'],
    ] }),
    P('fujiya-hotel', 'food', 35.241, 139.06, VALLEY, 4.5, 4400, ['food', 'history', 'romance'], {
      ru: ['Отель Фудзия (главный ресторан)', 'Один из старейших западных отелей Японии (1878) с резным главным залом ресторана 1930 года.', 'Даже без ночёвки сюда приходят на обед и прогулку по старым коридорам и саду.'],
      en: ['Fujiya Hotel (main dining room)', 'One of Japan’s oldest Western-style hotels (1878), with a carved 1930 main dining room.', 'Even without staying, people come for lunch and a walk through the old corridors and garden.'],
      es: ['Hotel Fujiya (comedor principal)', 'Uno de los hoteles de estilo occidental más antiguos de Japón (1878), con un comedor tallado de 1930.', 'Aunque no te alojes, se viene a comer y a pasear por sus pasillos y jardín.'],
      de: ['Fujiya Hotel (Hauptspeisesaal)', 'Eines der ältesten Hotels westlichen Stils in Japan (1878) mit geschnitztem Speisesaal von 1930.', 'Auch ohne Übernachtung kommt man zum Mittagessen und Bummel durch Flure und Garten.'],
      fr: ['Fujiya Hotel (salle à manger)', 'L’un des plus anciens hôtels à l’occidentale du Japon (1878), avec une salle à manger sculptée de 1930.', 'Même sans y dormir, on vient déjeuner et flâner dans les vieux couloirs et le jardin.'],
      it: ['Fujiya Hotel (sala da pranzo)', 'Uno dei più antichi hotel in stile occidentale del Giappone (1878), con una sala da pranzo intagliata del 1930.', 'Anche senza dormirci si viene a pranzo e a passeggiare tra corridoi e giardino.'],
    }, { price: level(3) }),
    P('kuro-tamago', 'food', 35.244, 139.02, EGGS, 4.2, 9600, ['food', 'streetfood'], {
      ru: ['Чёрные яйца Овакудани', 'Яйца, сваренные в горячих источниках Овакудани: скорлупа чернеет от серы и железа. Говорят, каждое прибавляет семь лет жизни.', 'Продаются только здесь — съешьте сразу тёплыми, с солью.'],
      en: ['Ōwakudani black eggs', 'Eggs boiled in Ōwakudani’s hot springs: sulphur and iron turn the shells black. Each one is said to add seven years to your life.', 'Sold only here — eat them warm with salt.'],
      es: ['Huevos negros de Ōwakudani', 'Huevos cocidos en las fuentes termales de Ōwakudani: el azufre y el hierro ennegrecen la cáscara. Dicen que cada uno alarga la vida siete años.', 'Solo se venden aquí: cómelos templados con sal.'],
      de: ['Schwarze Eier von Ōwakudani', 'In den Quellen von Ōwakudani gekochte Eier: Schwefel und Eisen färben die Schale schwarz. Jedes soll das Leben um sieben Jahre verlängern.', 'Nur hier erhältlich – warm mit Salz essen.'],
      fr: ['Œufs noirs d’Ōwakudani', 'Des œufs cuits dans les sources d’Ōwakudani : le soufre et le fer noircissent la coquille. Chacun ajouterait sept ans de vie.', 'Vendus seulement ici : mangez-les tièdes avec du sel.'],
      it: ['Uova nere di Ōwakudani', 'Uova bollite nelle sorgenti di Ōwakudani: zolfo e ferro anneriscono il guscio. Si dice che ognuno allunghi la vita di sette anni.', 'Si vendono solo qui: mangiale tiepide col sale.'],
    }, { spot: 'insta', price: level(1) }),
    P('chimoto', 'food', 35.233, 139.1035, ROPEWAY, 4.4, 3300, ['food'], {
      ru: ['Тимото', 'Кондитерская у моста в Хаконэ-Юмото, знаменитая «юмоти» — нежными моти с кусочками ёкана и ароматом юдзу.', 'Юмоти хранятся недолго — берите на пару дней, не больше.'],
      en: ['Chimoto', 'A sweet shop by the bridge in Hakone-Yumoto, famous for “yumochi” — soft mochi with bits of yōkan and a hint of yuzu.', 'Yumochi doesn’t keep long — buy for a couple of days at most.'],
      es: ['Chimoto', 'Una dulcería junto al puente de Hakone-Yumoto, famosa por el «yumochi», mochi tierno con trocitos de yōkan y aroma de yuzu.', 'El yumochi dura poco: compra para un par de días como mucho.'],
      de: ['Chimoto', 'Ein Süßwarenladen an der Brücke in Hakone-Yumoto, berühmt für „Yumochi“ – zartes Mochi mit Yōkan-Stückchen und Yuzu-Note.', 'Yumochi hält nicht lange – höchstens für zwei Tage kaufen.'],
      fr: ['Chimoto', 'Une confiserie près du pont de Hakone-Yumoto, célèbre pour le « yumochi », mochi fondant aux éclats de yōkan parfumé au yuzu.', 'Le yumochi se garde peu : achetez pour deux jours au plus.'],
      it: ['Chimoto', 'Una pasticceria vicino al ponte di Hakone-Yumoto, famosa per lo «yumochi», mochi morbido con pezzetti di yōkan e profumo di yuzu.', 'Lo yumochi si conserva poco: compralo per un paio di giorni al massimo.'],
    }, { price: level(1) }),
  ],
  routes: [
    D(['tozan-railway', 'open-air-museum', 'gyoza-center', 'gora-park', 'hakone-ropeway', 'owakudani', 'kuro-tamago', 'lake-ashi-cruise', 'hakone-shrine'],
      'Кольцо Хаконэ: горный поезд, Овакудани и озеро Аси|The Hakone loop: mountain train, Ōwakudani and Lake Ashi|El circuito de Hakone: tren de montaña, Ōwakudani y lago Ashi|Die Hakone-Runde: Bergbahn, Ōwakudani und Ashi-See|La boucle de Hakone : train de montagne, Ōwakudani et lac Ashi|L’anello di Hakone: treno di montagna, Ōwakudani e lago Ashi'),
    D(['bakery-table', 'hakone-sekisho', 'cedar-avenue', 'amazake-chaya', 'pola-museum', 'naraya-cafe', 'fujiya-hotel'],
      'Старый Токайдо, кедры и музей в лесу|The Old Tōkaidō, cedars and a museum in the forest|El Viejo Tōkaidō, los cedros y un museo en el bosque|Der Alte Tōkaidō, Zedern und ein Museum im Wald|Le vieux Tōkaidō, les cèdres et un musée en forêt|Il vecchio Tōkaidō, i cedri e un museo nel bosco'),
    D(['tenzan-onsen', 'yumoto-street', 'hatsuhana-soba', 'chimoto', 'okada-museum', 'itoh-dining-nobu'],
      'Онсэн, Юмото и музей Окада|Onsen, Yumoto and the Okada Museum|Onsen, Yumoto y el Museo Okada|Onsen, Yumoto und das Okada-Museum|Onsen, Yumoto et le musée Okada|Onsen, Yumoto e il Museo Okada'),
  ],
};

export default pack;
