import type { CityPack } from '../types';
import { free, level, makeDay, makePlace } from './_kit.ts';

const P = makePlace('riga');
const D = makeDay('riga');
const CITY = 'I--CpSkGCJ8';
const SQUARE = 'iO0teyWPZPY';
const MARKET = 'mIzMPtWEtI0';
const CAFE = 'Qu8YraMHEhc';
const NOUVEAU = 'y6F9EhpSSg4';
const TOWER = 'tckNOQJGTHc';
const BOG = 'ja-OZIAmE4E';

const pack: CityPack = {
  country: 'LV',
  city: 'riga',
  places: [
    P('riga-cathedral', 'attraction', 56.949, 24.1047, TOWER, 4.6, 16000, ['history', 'architecture'], {
      ru: ['Домский собор', 'Крупнейший средневековый храм Прибалтики (1211) с одним из знаменитых органов XIX века; клуатр — самый старый в регионе.', 'Попадите на органный концерт — в сезон их дают почти каждый день.'],
      en: ['Riga Cathedral', 'The Baltics’ largest medieval church (1211) with a famous 19th-century organ; its cloister is the region’s oldest.', 'Catch an organ concert — in season there’s one almost daily.'],
      es: ['Catedral de Riga', 'La mayor iglesia medieval del Báltico (1211) con un famoso órgano del siglo XIX; su claustro es el más antiguo de la región.', 'Asiste a un concierto de órgano: en temporada hay casi a diario.'],
      de: ['Rigaer Dom', 'Die größte mittelalterliche Kirche des Baltikums (1211) mit einer berühmten Orgel aus dem 19. Jh.; der Kreuzgang ist der älteste der Region.', 'Ein Orgelkonzert besuchen – in der Saison fast täglich.'],
      fr: ['Cathédrale de Riga', 'La plus grande église médiévale des pays baltes (1211), avec un célèbre orgue du XIXe ; son cloître est le plus ancien de la région.', 'Assistez à un concert d’orgue, presque quotidien en saison.'],
      it: ['Duomo di Riga', 'La più grande chiesa medievale del Baltico (1211) con un celebre organo ottocentesco; il chiostro è il più antico della regione.', 'Assisti a un concerto d’organo: in stagione quasi ogni giorno.'],
    }, { hours: '10:00–18:00', address: 'Doma laukums 1' }),
    P('three-brothers', 'attraction', 56.9512, 24.1043, SQUARE, 4.5, 11000, ['architecture', 'history'], {
      ru: ['Три брата', 'Три соседних жилых дома XV–XVII веков на улице Мазā Пилс — старейшие в Риге; в одном из них — Музей архитектуры.', 'Самый старый — белый «старший брат» с узкими окнами.'],
      en: ['Three Brothers', 'Three neighbouring houses from the 15th–17th centuries on Mazā Pils street — Riga’s oldest; one holds the Museum of Architecture.', 'The oldest is the white “eldest brother” with narrow windows.'],
      es: ['Los Tres Hermanos', 'Tres casas vecinas de los siglos XV–XVII en la calle Mazā Pils, las más antiguas de Riga; una alberga el Museo de Arquitectura.', 'La más antigua es el blanco “hermano mayor” de ventanas estrechas.'],
      de: ['Drei Brüder', 'Drei benachbarte Wohnhäuser aus dem 15.–17. Jh. in der Mazā Pils iela – Rigas älteste; in einem das Architekturmuseum.', 'Das älteste ist der weiße „älteste Bruder“ mit schmalen Fenstern.'],
      fr: ['Les Trois Frères', 'Trois maisons voisines des XVe–XVIIe rue Mazā Pils, les plus anciennes de Riga ; l’une abrite le musée d’Architecture.', 'La plus ancienne est le « frère aîné » blanc aux fenêtres étroites.'],
      it: ['I Tre Fratelli', 'Tre case vicine del XV–XVII secolo in via Mazā Pils, le più antiche di Riga; una ospita il Museo di architettura.', 'La più antica è il bianco “fratello maggiore” dalle finestre strette.'],
    }, { spot: 'insta', price: free }),
    P('swedish-gate', 'attraction', 56.952, 24.1075, SQUARE, 4.5, 8100, ['history', 'oldtown', 'photo'], {
      ru: ['Шведские ворота', 'Единственные сохранившиеся ворота городской стены (1698) рядом с кривой улочкой и уцелевшим куском старой крепостной стены.', 'Рядом — Пороховая башня.'],
      en: ['Swedish Gate', 'The only surviving gate of the city wall (1698), next to a winding lane and a preserved stretch of the old wall.', 'The Powder Tower is nearby.'],
      es: ['Puerta Sueca', 'La única puerta conservada de la muralla (1698), junto a una calleja sinuosa y un tramo de la vieja muralla.', 'La Torre de la Pólvora está cerca.'],
      de: ['Schwedentor', 'Das einzige erhaltene Tor der Stadtmauer (1698) neben einer gewundenen Gasse und einem erhaltenen Mauerstück.', 'Der Pulverturm ist ganz in der Nähe.'],
      fr: ['Porte suédoise', 'La seule porte conservée des remparts (1698), près d’une ruelle sinueuse et d’un pan de la vieille muraille.', 'La tour Poudrière est toute proche.'],
      it: ['Porta Svedese', 'L’unica porta superstite delle mura (1698), accanto a un vicolo tortuoso e a un tratto delle vecchie mura.', 'La Torre delle Polveri è vicina.'],
    }, { spot: 'hidden', price: free, hours: 'always' }),
    P('riga-castle', 'attraction', 56.951, 24.1007, SQUARE, 4.4, 6600, ['castles', 'history'], {
      ru: ['Рижский замок', 'Замок Ливонского ордена XIV века на берегу Даугавы, сегодня резиденция президента Латвии и Национальный исторический музей.', 'Музей в замке недорогой; посмотрите на замок с набережной.'],
      en: ['Riga Castle', 'The 14th-century Livonian Order castle on the Daugava, now the Latvian president’s residence and the National History Museum.', 'The museum is inexpensive; view the castle from the riverside.'],
      es: ['Castillo de Riga', 'El castillo de la Orden Livonia del siglo XIV junto al Daugava, hoy residencia del presidente y Museo Nacional de Historia.', 'El museo es barato; contempla el castillo desde el río.'],
      de: ['Rigaer Schloss', 'Das Schloss des Livländischen Ordens aus dem 14. Jh. an der Düna, heute Präsidentensitz und Historisches Nationalmuseum.', 'Das Museum ist günstig; das Schloss vom Ufer aus betrachten.'],
      fr: ['Château de Riga', 'Le château de l’ordre Livonien du XIVe au bord de la Daugava, aujourd’hui résidence présidentielle et musée national d’Histoire.', 'Le musée est bon marché ; admirez le château depuis la rive.'],
      it: ['Castello di Riga', 'Il castello dell’Ordine di Livonia del Trecento sulla Daugava, oggi residenza del presidente e Museo nazionale di storia.', 'Il museo costa poco; ammira il castello dal lungofiume.'],
    }, { hours: '10:00–17:00', address: 'Pils laukums 3' }),
    P('art-nouveau-museum', 'attraction', 56.959, 24.108, NOUVEAU, 4.6, 7200, ['architecture', 'museums', 'art'], {
      ru: ['Рижский музей модерна', 'Квартира архитектора Константина Пекшенса в доме на улице Альберта, восстановленная в стиле 1903 года; винтовая лестница — один из лучших кадров Риги.', 'Сфотографируйте винтовую лестницу снизу — бесплатно, даже без билета в музей.'],
      en: ['Riga Art Nouveau Museum', 'Architect Konstantīns Pēkšēns’ apartment on Alberta iela restored in 1903 style; its spiral staircase is one of Riga’s best photos.', 'Photograph the spiral staircase from below — free, even without a museum ticket.'],
      es: ['Museo del Art Nouveau de Riga', 'El piso del arquitecto Konstantīns Pēkšēns en Alberta iela restaurado al estilo de 1903; su escalera de caracol es de las mejores fotos de Riga.', 'Fotografía la escalera desde abajo: gratis, incluso sin entrada.'],
      de: ['Jugendstilmuseum Riga', 'Die Wohnung des Architekten Konstantīns Pēkšēns in der Alberta iela im Stil von 1903 restauriert; die Wendeltreppe ist eines der besten Fotomotive Rigas.', 'Die Wendeltreppe von unten fotografieren – gratis, auch ohne Museumsticket.'],
      fr: ['Musée de l’Art nouveau de Riga', 'L’appartement de l’architecte Konstantīns Pēkšēns rue Alberta, restauré dans le style de 1903 ; son escalier en colimaçon est l’une des plus belles photos de Riga.', 'Photographiez l’escalier d’en bas, gratuitement, même sans billet.'],
      it: ['Museo dell’Art Nouveau di Riga', 'L’appartamento dell’architetto Konstantīns Pēkšēns in Alberta iela restaurato nello stile del 1903; la scala a chiocciola è una delle foto più belle di Riga.', 'Fotografa la scala dal basso: gratis, anche senza biglietto.'],
    }, { spot: 'insta', hours: '10:00–18:00', address: 'Alberta iela 12' }),
    P('national-library', 'attraction', 56.948, 24.0945, CITY, 4.6, 9400, ['architecture', 'views'], {
      ru: ['Национальная библиотека («Замок света»)', 'Стеклянная «гора» Гуннара Биркертса на левом берегу Даугавы с «Народной книжной полкой» в атриуме и смотровой на верхнем этаже.', 'Вход в атриум бесплатный; с верхних этажей — вид на Старый город через реку.'],
      en: ['National Library (“Castle of Light”)', 'Gunnar Birkerts’ glass “mountain” on the Daugava’s left bank with the People’s Bookshelf in the atrium and a top-floor viewpoint.', 'The atrium is free; the upper floors look across the river to the Old Town.'],
      es: ['Biblioteca Nacional (“Castillo de Luz”)', 'La “montaña” de cristal de Gunnar Birkerts en la orilla izquierda del Daugava, con la Estantería del Pueblo en el atrio y mirador arriba.', 'El atrio es gratis; desde arriba se ve el casco antiguo al otro lado del río.'],
      de: ['Nationalbibliothek („Schloss des Lichts“)', 'Gunnar Birkerts’ gläserner „Berg“ am linken Dünaufer mit dem Volksbücherregal im Atrium und Aussicht im obersten Stock.', 'Das Atrium ist gratis; oben Blick über den Fluss auf die Altstadt.'],
      fr: ['Bibliothèque nationale (« Château de lumière »)', 'La « montagne » de verre de Gunnar Birkerts sur la rive gauche de la Daugava, avec l’Étagère du peuple dans l’atrium et un belvédère au dernier étage.', 'L’atrium est gratuit ; vue sur la vieille ville depuis les étages.'],
      it: ['Biblioteca Nazionale (“Castello di luce”)', 'La “montagna” di vetro di Gunnar Birkerts sulla riva sinistra della Daugava, con lo Scaffale del popolo nell’atrio e un belvedere all’ultimo piano.', 'L’atrio è gratuito; dai piani alti vista sulla città vecchia oltre il fiume.'],
    }, { price: free, address: 'Mūkusalas iela 3' }),
    P('bastejkalns', 'nature', 56.953, 24.11, NOUVEAU, 4.7, 12000, ['gardens', 'nature'], {
      ru: ['Бастионная горка и городской канал', 'Парк на месте бывших бастионов вдоль городского канала с мостиками, водопадом и замочками влюблённых; летом — прогулки на лодках.', 'Прокатитесь на лодке по каналу — около часа, с видом на Старый город.'],
      en: ['Bastejkalns and the city canal', 'A park on former bastions along the city canal with footbridges, a waterfall and love locks; boat rides in summer.', 'Take a canal boat ride — about an hour with Old Town views.'],
      es: ['Bastejkalns y el canal', 'Un parque sobre antiguos bastiones junto al canal con pasarelas, una cascada y candados del amor; paseos en barca en verano.', 'Haz el paseo en barca por el canal, una hora con vistas.'],
      de: ['Bastejkalns und Stadtkanal', 'Ein Park auf ehemaligen Bastionen entlang des Stadtkanals mit Brücken, Wasserfall und Liebesschlössern; im Sommer Bootsfahrten.', 'Eine Kanalfahrt machen – etwa eine Stunde mit Altstadtblick.'],
      fr: ['Bastejkalns et canal de la ville', 'Un parc sur d’anciens bastions le long du canal, passerelles, cascade et cadenas d’amour ; balades en bateau l’été.', 'Faites le tour en bateau sur le canal, environ une heure.'],
      it: ['Bastejkalns e il canale', 'Un parco sugli antichi bastioni lungo il canale cittadino con ponticelli, una cascatella e lucchetti dell’amore; giri in barca d’estate.', 'Fai il giro in barca sul canale, circa un’ora con vista sulla città vecchia.'],
    }, { price: free, hours: 'always' }),
    P('jurmala', 'nature', 56.968, 23.77, BOG, 4.6, 24000, ['beaches', 'nature', 'architecture'], {
      ru: ['Юрмала', 'Курорт в 30 минутах на электричке: 30 км песчаного пляжа среди сосен, деревянные дачи начала XX века и пешеходная улица Йомас.', 'Электричка до станции Майори; летом берите полотенце — море мелкое и тёплое у берега.'],
      en: ['Jūrmala', 'A resort 30 minutes away by train: 30 km of sandy beach among pines, early-20th-century wooden villas and pedestrian Jomas iela.', 'Train to Majori station; in summer bring a towel — the sea is shallow by the shore.'],
      es: ['Jūrmala', 'Un balneario a 30 minutos en tren: 30 km de playa de arena entre pinos, villas de madera de principios del siglo XX y la peatonal Jomas iela.', 'Tren hasta Majori; en verano lleva toalla, el mar es poco profundo.'],
      de: ['Jūrmala', 'Ein Kurort 30 Minuten mit dem Zug: 30 km Sandstrand zwischen Kiefern, Holzvillen vom Anfang des 20. Jh. und die Fußgängerzone Jomas iela.', 'Zug bis Majori; im Sommer Handtuch mitnehmen – das Meer ist flach.'],
      fr: ['Jūrmala', 'Une station balnéaire à 30 minutes en train : 30 km de plage de sable parmi les pins, villas en bois du début du XXe et rue piétonne Jomas.', 'Train jusqu’à Majori ; l’été, prenez une serviette, la mer est peu profonde.'],
      it: ['Jūrmala', 'Una località balneare a 30 minuti di treno: 30 km di spiaggia sabbiosa tra i pini, ville in legno del primo Novecento e la pedonale Jomas iela.', 'Treno fino a Majori; d’estate porta l’asciugamano, il mare è basso.'],
    }, { spot: 'insta', price: free }),
    P('spikeri', 'attraction', 56.944, 24.117, MARKET, 4.4, 4100, ['art', 'history'], {
      ru: ['Квартал Спикери', 'Бывшие кирпичные склады XIX века у Центрального рынка, превращённые в творческий квартал с галереями и Музеем гетто и Холокоста.', 'Совместите с Центральным рынком — он по соседству.'],
      en: ['Spīķeri quarter', 'Former 19th-century brick warehouses by the Central Market turned creative quarter with galleries and the Riga Ghetto and Holocaust Museum.', 'Pair it with the Central Market next door.'],
      es: ['Barrio de Spīķeri', 'Antiguos almacenes de ladrillo del siglo XIX junto al Mercado Central convertidos en barrio creativo con galerías y el Museo del Gueto y del Holocausto.', 'Combínalo con el Mercado Central, al lado.'],
      de: ['Spīķeri-Viertel', 'Ehemalige Backsteinspeicher aus dem 19. Jh. am Zentralmarkt, heute Kreativviertel mit Galerien und dem Ghetto- und Holocaustmuseum.', 'Mit dem Zentralmarkt nebenan verbinden.'],
      fr: ['Quartier de Spīķeri', 'D’anciens entrepôts de brique du XIXe près du marché central devenus quartier créatif, galeries et musée du Ghetto et de la Shoah.', 'À combiner avec le marché central voisin.'],
      it: ['Quartiere Spīķeri', 'Ex magazzini in mattoni ottocenteschi vicino al Mercato Centrale diventati quartiere creativo con gallerie e il Museo del ghetto e dell’Olocausto.', 'Abbinalo al vicino Mercato Centrale.'],
    }, { spot: 'hidden', price: free }),
    P('national-museum-of-art', 'attraction', 56.9572, 24.112, NOUVEAU, 4.7, 9900, ['art', 'museums', 'architecture'], {
      ru: ['Латвийский национальный художественный музей', 'Дворцовое здание 1905 года с латвийской живописью от XIX века до наших дней и стеклянной крышей-террасой после реконструкции.', 'Поднимитесь на крышу-террасу — вид на парк и Эспланаду.'],
      en: ['Latvian National Museum of Art', 'A palatial 1905 building with Latvian painting from the 19th century to today and a glass rooftop terrace added in its renovation.', 'Go up to the rooftop terrace for a view over the park and Esplanade.'],
      es: ['Museo Nacional de Arte de Letonia', 'Un edificio palaciego de 1905 con pintura letona del siglo XIX a hoy y una terraza acristalada en la azotea tras su reforma.', 'Sube a la terraza: vistas al parque y la Esplanada.'],
      de: ['Lettisches Nationales Kunstmuseum', 'Ein palastartiger Bau von 1905 mit lettischer Malerei vom 19. Jh. bis heute und einer gläsernen Dachterrasse nach der Renovierung.', 'Auf die Dachterrasse gehen – Blick über Park und Esplanade.'],
      fr: ['Musée national d’art de Lettonie', 'Un édifice palatial de 1905, peinture lettone du XIXe à nos jours et terrasse vitrée sur le toit ajoutée lors de la rénovation.', 'Montez sur la terrasse : vue sur le parc et l’Esplanade.'],
      it: ['Museo nazionale d’arte lettone', 'Un edificio-palazzo del 1905 con pittura lettone dall’Ottocento a oggi e una terrazza vetrata sul tetto aggiunta col restauro.', 'Sali sulla terrazza: vista sul parco e sull’Esplanade.'],
    }, { hours: '10:00–18:00', address: 'Jaņa Rozentāla laukums 1' }),

    P('max-cekot-kitchen', 'food', 56.937, 24.087, CAFE, 4.8, 900, ['food', 'luxury'], {
      ru: ['Max Cekot Kitchen', 'Первый ресторан Латвии со звездой MICHELIN — в районе Торнякалнс за рекой: дегустационный сет из латвийских продуктов; одна звезда MICHELIN (гид Латвии 2026).', 'Бронируйте за несколько недель; ужин — около 3 часов.'],
      en: ['Max Cekot Kitchen', 'Latvia’s first MICHELIN-starred restaurant, in Torņakalns across the river: a tasting menu of Latvian produce; one MICHELIN star (Latvia guide 2026).', 'Book weeks ahead; dinner takes about three hours.'],
      es: ['Max Cekot Kitchen', 'El primer restaurante con estrella MICHELIN de Letonia, en Torņakalns al otro lado del río: menú degustación de producto letón; una estrella MICHELIN (guía Letonia 2026).', 'Reserva con semanas; la cena dura unas tres horas.'],
      de: ['Max Cekot Kitchen', 'Lettlands erstes Restaurant mit MICHELIN-Stern, in Torņakalns jenseits des Flusses: Degustationsmenü aus lettischen Produkten; ein MICHELIN-Stern (Guide Lettland 2026).', 'Wochen vorher buchen; das Dinner dauert etwa drei Stunden.'],
      fr: ['Max Cekot Kitchen', 'Le premier restaurant étoilé MICHELIN de Lettonie, à Torņakalns sur l’autre rive : menu dégustation de produits lettons ; une étoile MICHELIN (guide Lettonie 2026).', 'Réservez des semaines avant ; le dîner dure environ trois heures.'],
      it: ['Max Cekot Kitchen', 'Il primo ristorante stellato MICHELIN della Lettonia, a Torņakalns oltre il fiume: menù degustazione di prodotti lettoni; una stella MICHELIN (guida Lettonia 2026).', 'Prenota settimane prima; la cena dura circa tre ore.'],
    }, { price: level(3), michelin: { award: 'star1', year: 2026 }, menu: [
      ['Tasting menu', undefined, 'дегустационный сет из латвийских продуктов|tasting menu of Latvian produce|menú degustación de producto letón|Degustationsmenü aus lettischen Produkten|menu dégustation de produits lettons|menù degustazione di prodotti lettoni'],
      ['Wine pairing', undefined, 'винное сопровождение|wine pairing|maridaje de vinos|Weinbegleitung|accord mets-vins|abbinamento vini'],
    ] }),
    P('milda', 'food', 56.947, 24.108, SQUARE, 4.7, 4100, ['food'], {
      ru: ['Milda', 'Уютный ресторан латвийской кухни в Старом городе: серый горох со шпеком, сельдь с творогом, рыба Балтики и десерты из ржаного хлеба; Bib Gourmand (гид Латвии 2026).', 'Попробуйте «рупьмайзес кārtojums» — десерт из ржаного хлеба со сливками.'],
      en: ['Milda', 'A cosy Old Town restaurant of Latvian cooking: grey peas with bacon, herring with curd, Baltic fish and rye-bread desserts; Bib Gourmand (Latvia guide 2026).', 'Try the layered rye-bread dessert with cream.'],
      es: ['Milda', 'Un acogedor restaurante de cocina letona en el casco antiguo: guisantes grises con tocino, arenque con requesón, pescado báltico y postres de pan de centeno; Bib Gourmand (guía Letonia 2026).', 'Prueba el postre de pan de centeno con nata.'],
      de: ['Milda', 'Ein gemütliches Restaurant lettischer Küche in der Altstadt: graue Erbsen mit Speck, Hering mit Quark, Ostseefisch und Roggenbrot-Desserts; Bib Gourmand (Guide Lettland 2026).', 'Das geschichtete Roggenbrot-Dessert mit Sahne probieren.'],
      fr: ['Milda', 'Un restaurant chaleureux de cuisine lettone dans la vieille ville : pois gris au lard, hareng au fromage blanc, poissons de la Baltique et desserts au pain de seigle ; Bib Gourmand (guide Lettonie 2026).', 'Goûtez le dessert étagé au pain de seigle et crème.'],
      it: ['Milda', 'Un accogliente ristorante di cucina lettone nella città vecchia: piselli grigi con pancetta, aringa con ricotta, pesce del Baltico e dolci di pane di segale; Bib Gourmand (guida Lettonia 2026).', 'Prova il dolce a strati di pane di segale e panna.'],
    }, { price: level(2), michelin: { award: 'bib', year: 2026 }, menu: [
      ['Pelēkie zirņi ar speķi', undefined, 'серый горох со шпеком|grey peas with bacon|guisantes grises con tocino|graue Erbsen mit Speck|pois gris au lard|piselli grigi con pancetta'],
      ['Rupjmaizes kārtojums', undefined, 'десерт из ржаного хлеба со сливками и ягодами|rye-bread dessert with cream and berries|postre de pan de centeno con nata y bayas|Roggenbrot-Dessert mit Sahne und Beeren|dessert au pain de seigle, crème et baies|dolce di pane di segale con panna e frutti di bosco'],
    ] }),
    P('3-pavaru', 'food', 56.9505, 24.109, SQUARE, 4.6, 4300, ['food'], {
      ru: ['3 Pavāru («Три повара»)', 'Ресторан трёх шефов с открытой кухней в Старом городе: блюда собирают на тарелке у стола, как картины, из латвийских продуктов.', 'Сядьте у кухни — повара выходят к столам и рассказывают о блюдах.'],
      en: ['3 Pavāru (“Three Chefs”)', 'An open-kitchen restaurant of three chefs in the Old Town: dishes are plated tableside like paintings, from Latvian produce.', 'Sit near the kitchen — the chefs come out to explain the dishes.'],
      es: ['3 Pavāru (“Tres Cocineros”)', 'Un restaurante de tres chefs con cocina abierta en el casco antiguo: los platos se montan en la mesa como cuadros, con producto letón.', 'Siéntate cerca de la cocina: los chefs salen a explicar los platos.'],
      de: ['3 Pavāru („Drei Köche“)', 'Ein Restaurant von drei Köchen mit offener Küche in der Altstadt: Teller werden am Tisch wie Gemälde angerichtet, aus lettischen Produkten.', 'Nahe der Küche sitzen – die Köche erklären die Gerichte am Tisch.'],
      fr: ['3 Pavāru (« Trois Chefs »)', 'Un restaurant de trois chefs à cuisine ouverte dans la vieille ville : assiettes dressées à table comme des tableaux, produits lettons.', 'Asseyez-vous près de la cuisine : les chefs viennent présenter les plats.'],
      it: ['3 Pavāru (“Tre Cuochi”)', 'Un ristorante di tre chef con cucina a vista nella città vecchia: i piatti si impiattano al tavolo come quadri, con prodotti lettoni.', 'Siediti vicino alla cucina: gli chef vengono a spiegare i piatti.'],
    }, { price: level(3), address: 'Torņa iela 4', menu: [
      ['Chef’s plate', undefined, 'блюдо, собранное у стола|dish plated tableside|plato montado en la mesa|am Tisch angerichteter Teller|assiette dressée à table|piatto impiattato al tavolo'],
      ['Baltic fish', undefined, 'балтийская рыба|Baltic fish|pescado báltico|Ostseefisch|poisson de la Baltique|pesce del Baltico'],
    ] }),
    P('kalku-varti', 'food', 56.949, 24.109, SQUARE, 4.5, 3600, ['food', 'views'], {
      ru: ['Kaļķu Vārti', 'Ресторан современной латвийской кухни в Старом городе с панорамными окнами на улицу Калькю и террасой на крыше летом.', 'Летом поднимайтесь на террасу — вид на шпили Старого города.'],
      en: ['Kaļķu Vārti', 'A modern Latvian restaurant in the Old Town with panoramic windows onto Kaļķu street and a summer rooftop terrace.', 'In summer go up to the terrace for the Old Town spires.'],
      es: ['Kaļķu Vārti', 'Un restaurante de cocina letona moderna en el casco antiguo con ventanales a la calle Kaļķu y terraza en verano.', 'En verano sube a la terraza: vistas a las agujas.'],
      de: ['Kaļķu Vārti', 'Ein modernes lettisches Restaurant in der Altstadt mit Panoramafenstern zur Kaļķu iela und Dachterrasse im Sommer.', 'Im Sommer auf die Terrasse – Blick auf die Altstadttürme.'],
      fr: ['Kaļķu Vārti', 'Un restaurant letton moderne dans la vieille ville, baies sur la rue Kaļķu et terrasse sur le toit l’été.', 'L’été, montez sur la terrasse face aux flèches.'],
      it: ['Kaļķu Vārti', 'Un ristorante lettone moderno nella città vecchia con vetrate su via Kaļķu e terrazza sul tetto d’estate.', 'D’estate sali in terrazza: vista sulle guglie.'],
    }, { price: level(3), address: 'Kaļķu iela 11a', menu: [
      ['Latvian tasting', undefined, 'дегустация латвийской кухни|Latvian tasting menu|menú degustación letón|lettisches Degustationsmenü|menu dégustation letton|menù degustazione lettone'],
      ['Duck', undefined, 'утка|duck|pato|Ente|canard|anatra'],
    ] }),
    P('gutenbergs-rooftop', 'food', 56.9475, 24.1075, TOWER, 4.4, 3900, ['food', 'views'], {
      ru: ['Терраса Gutenbergs', 'Летняя терраса на крыше отеля у Домской площади с видом на шпили собора и Старого города.', 'Работает в тёплый сезон; лучше всего на закате с бокалом вина.'],
      en: ['Gutenbergs rooftop', 'A summer rooftop terrace on a hotel by Dome Square with views of the cathedral and Old Town spires.', 'Open in the warm season; best at sunset with a glass of wine.'],
      es: ['Terraza Gutenbergs', 'Una terraza de verano en la azotea de un hotel junto a la plaza de la Catedral con vistas a las agujas.', 'Abre en temporada cálida; mejor al atardecer con una copa.'],
      de: ['Dachterrasse Gutenbergs', 'Eine Sommer-Dachterrasse auf einem Hotel am Domplatz mit Blick auf Dom und Altstadttürme.', 'In der warmen Saison geöffnet; am schönsten zum Sonnenuntergang mit Wein.'],
      fr: ['Rooftop Gutenbergs', 'Une terrasse d’été sur le toit d’un hôtel près de la place du Dôme, vue sur les flèches de la cathédrale et de la vieille ville.', 'Ouverte à la belle saison ; idéale au coucher du soleil.'],
      it: ['Terrazza Gutenbergs', 'Una terrazza estiva sul tetto di un hotel vicino a piazza del Duomo con vista sulle guglie.', 'Aperta nella bella stagione; meglio al tramonto con un calice.'],
    }, { price: level(2), address: 'Doma laukums 1', menu: [
      ['Wine by the glass', undefined, 'вино по бокалам|wine by the glass|vino por copas|Wein glasweise|vin au verre|vino al calice'],
      ['Grilled dishes', undefined, 'блюда на гриле|grilled dishes|platos a la parrilla|Grillgerichte|grillades|piatti alla griglia'],
    ] }),
    P('fazenda-bazars', 'food', 56.959, 24.13, CAFE, 4.6, 3300, ['food'], {
      ru: ['Fazenda Bāzārs', 'Бистро в деревянном доме в тихом районе за Старым городом: домашняя латвийская и европейская кухня из фермерских продуктов.', 'Хорошо для неспешного обеда после квартала модерна.'],
      en: ['Fazenda Bāzārs', 'A bistro in a wooden house in a quiet district beyond the Old Town: home-style Latvian and European cooking from farm produce.', 'Good for a slow lunch after the Art Nouveau quarter.'],
      es: ['Fazenda Bāzārs', 'Un bistró en una casa de madera en un barrio tranquilo fuera del casco antiguo: cocina casera letona y europea con producto de granja.', 'Bien para comer sin prisa tras el barrio Art Nouveau.'],
      de: ['Fazenda Bāzārs', 'Ein Bistro in einem Holzhaus in einem ruhigen Viertel jenseits der Altstadt: hausgemachte lettische und europäische Küche aus Hofprodukten.', 'Gut für ein gemütliches Mittagessen nach dem Jugendstilviertel.'],
      fr: ['Fazenda Bāzārs', 'Un bistrot dans une maison en bois d’un quartier calme hors de la vieille ville : cuisine maison lettone et européenne de produits fermiers.', 'Idéal pour un déjeuner tranquille après le quartier Art nouveau.'],
      it: ['Fazenda Bāzārs', 'Un bistrot in una casa di legno in un quartiere tranquillo oltre la città vecchia: cucina casalinga lettone ed europea con prodotti di fattoria.', 'Ottimo per un pranzo tranquillo dopo il quartiere liberty.'],
    }, { price: level(2), address: 'Baznīcas iela 14', menu: [
      ['Lunch of the day', undefined, 'обед дня|lunch of the day|menú del día|Tagesgericht|plat du jour|pranzo del giorno'],
      ['Homemade cake', undefined, 'домашний торт|homemade cake|tarta casera|hausgemachter Kuchen|gâteau maison|torta fatta in casa'],
    ] }),
    P('pelmeni-xl', 'food', 56.948, 24.107, SQUARE, 4.2, 9800, ['food', 'streetfood'], {
      ru: ['Pelmeni XL', 'Недорогая столовая самообслуживания в Старом городе: пельмени и вареники десятков видов на вес со сметаной.', 'Накладываете сами и платите за вес — быстрый и дешёвый обед.'],
      en: ['Pelmeni XL', 'A cheap self-service canteen in the Old Town: dozens of kinds of dumplings by weight with sour cream.', 'Serve yourself and pay by weight — a quick, cheap lunch.'],
      es: ['Pelmeni XL', 'Un comedor autoservicio barato en el casco antiguo: decenas de tipos de dumplings al peso con nata agria.', 'Te sirves y pagas al peso: comida rápida y barata.'],
      de: ['Pelmeni XL', 'Eine günstige Selbstbedienungskantine in der Altstadt: Dutzende Teigtaschensorten nach Gewicht mit Schmand.', 'Selbst nehmen und nach Gewicht zahlen – schnell und günstig.'],
      fr: ['Pelmeni XL', 'Une cantine en libre-service bon marché dans la vieille ville : des dizaines de raviolis au poids avec crème aigre.', 'Servez-vous et payez au poids : déjeuner rapide et économique.'],
      it: ['Pelmeni XL', 'Una mensa self-service economica nella città vecchia: decine di tipi di ravioli a peso con panna acida.', 'Ti servi da solo e paghi a peso: pranzo veloce ed economico.'],
    }, { price: level(1), address: 'Kaļķu iela 7', menu: [
      ['Pelmeni', undefined, 'пельмени со сметаной|meat dumplings with sour cream|pelmeni con nata agria|Pelmeni mit Schmand|pelmeni à la crème aigre|pelmeni con panna acida'],
      ['Vareniki', undefined, 'вареники с картофелем или вишней|dumplings with potato or cherry|vareniki de patata o cereza|Wareniki mit Kartoffel oder Kirsche|vareniki pomme de terre ou cerise|vareniki di patate o ciliegie'],
    ] }),
    P('silkites-un-dillites', 'food', 56.944, 24.115, MARKET, 4.6, 2700, ['food', 'streetfood'], {
      ru: ['Siļķītes un Dillītes', 'Маленькое кафе внутри рыбного павильона Центрального рынка: свежая и копчёная рыба Балтики, уха и бутерброды с килькой.', 'Работает днём; возьмите уху и бутерброд со шпротами.'],
      en: ['Siļķītes un Dillītes', 'A small café inside the Central Market’s fish pavilion: fresh and smoked Baltic fish, fish soup and sprat sandwiches.', 'Daytime only; get fish soup and a sprat sandwich.'],
      es: ['Siļķītes un Dillītes', 'Un pequeño café dentro del pabellón de pescado del Mercado Central: pescado báltico fresco y ahumado, sopa y bocadillos de espadín.', 'Solo de día; pide sopa de pescado y bocadillo de espadines.'],
      de: ['Siļķītes un Dillītes', 'Ein kleines Café in der Fischhalle des Zentralmarkts: frischer und geräucherter Ostseefisch, Fischsuppe und Sprottenbrote.', 'Nur tagsüber; Fischsuppe und Sprottenbrot nehmen.'],
      fr: ['Siļķītes un Dillītes', 'Un petit café dans le pavillon aux poissons du marché central : poissons de la Baltique frais et fumés, soupe et tartines de sprats.', 'En journée ; prenez la soupe de poisson et une tartine de sprats.'],
      it: ['Siļķītes un Dillītes', 'Un piccolo caffè nel padiglione del pesce del Mercato Centrale: pesce del Baltico fresco e affumicato, zuppa e panini con spratti.', 'Solo di giorno; prendi la zuppa di pesce e un panino con spratti.'],
    }, { spot: 'hidden', price: level(1), address: 'Centrāltirgus, fish pavilion', menu: [
      ['Fish soup', undefined, 'уха|fish soup|sopa de pescado|Fischsuppe|soupe de poisson|zuppa di pesce'],
      ['Sprat sandwich', undefined, 'бутерброд со шпротами|sprat sandwich|bocadillo de espadines|Sprottenbrot|tartine de sprats|panino con spratti'],
    ] }),
    P('labietis', 'food', 56.9605, 24.123, CITY, 4.7, 2900, ['food', 'nightlife'], {
      ru: ['Labietis', 'Крафтовая пивоварня в бывшем заводском здании, варящая пиво по мотивам латвийских традиций — с травами, ягодами и мёдом.', 'Возьмите сет-дегустацию из 4–5 сортов.'],
      en: ['Labietis', 'A craft brewery in a former factory building brewing beers inspired by Latvian traditions — with herbs, berries and honey.', 'Order a tasting flight of 4–5 beers.'],
      es: ['Labietis', 'Una cervecería artesana en una antigua fábrica que elabora cervezas inspiradas en tradiciones letonas, con hierbas, bayas y miel.', 'Pide una cata de 4–5 cervezas.'],
      de: ['Labietis', 'Eine Craft-Brauerei in einem ehemaligen Fabrikgebäude mit Bieren nach lettischen Traditionen – mit Kräutern, Beeren und Honig.', 'Ein Probierset mit 4–5 Bieren bestellen.'],
      fr: ['Labietis', 'Une brasserie artisanale dans une ancienne usine, aux bières inspirées des traditions lettones, herbes, baies et miel.', 'Prenez une dégustation de 4–5 bières.'],
      it: ['Labietis', 'Un birrificio artigianale in un’ex fabbrica con birre ispirate alle tradizioni lettoni, con erbe, bacche e miele.', 'Ordina una degustazione di 4–5 birre.'],
    }, { price: level(1), address: 'Aristida Briāna iela 9', menu: [
      ['Tasting flight', undefined, 'дегустационный сет пива|beer tasting flight|cata de cervezas|Bier-Probierset|planche de dégustation|degustazione di birre'],
      ['Grey peas snack', undefined, 'закуска из серого гороха|grey pea snack|tapa de guisantes grises|Graue-Erbsen-Snack|en-cas de pois gris|stuzzichino di piselli grigi'],
    ] }),
    P('cafe-parunasim', 'food', 56.9488, 24.1035, TOWER, 4.6, 2400, ['food', 'romance'], {
      ru: ['Kafejnīca Parunāsim', 'Крошечное уютное кафе в переулке у Домского собора со старинной мебелью и садиком: кофе, пирожные и бальзам.', 'Летом садитесь в садик во дворе — одно из самых тихих мест Старого города.'],
      en: ['Kafejnīca Parunāsim', 'A tiny cosy café in a lane by the Dome Cathedral with antique furniture and a little garden: coffee, cakes and Black Balsam.', 'In summer sit in the courtyard garden — one of the Old Town’s quietest spots.'],
      es: ['Kafejnīca Parunāsim', 'Un diminuto café acogedor en un callejón junto a la catedral, con muebles antiguos y un jardincito: café, pasteles y bálsamo negro.', 'En verano siéntate en el jardín del patio, uno de los rincones más tranquilos.'],
      de: ['Kafejnīca Parunāsim', 'Ein winziges gemütliches Café in einer Gasse am Dom mit antiken Möbeln und kleinem Garten: Kaffee, Kuchen und Schwarzer Balsam.', 'Im Sommer im Hofgarten sitzen – einer der ruhigsten Orte der Altstadt.'],
      fr: ['Kafejnīca Parunāsim', 'Un minuscule café douillet dans une ruelle près du Dôme, meubles anciens et petit jardin : café, gâteaux et baume noir.', 'L’été, installez-vous dans le jardin de la cour, l’un des coins les plus calmes.'],
      it: ['Kafejnīca Parunāsim', 'Un minuscolo caffè accogliente in un vicolo vicino al Duomo, con mobili antichi e un giardinetto: caffè, dolci e balsamo nero.', 'D’estate siediti nel giardino del cortile, uno degli angoli più tranquilli.'],
    }, { spot: 'hidden', price: level(1), address: 'Mazā Pils iela 4', menu: [
      ['Coffee with Black Balsam', undefined, 'кофе с рижским бальзамом|coffee with Riga Black Balsam|café con bálsamo negro de Riga|Kaffee mit Rigaer Schwarzem Balsam|café au baume noir de Riga|caffè con balsamo nero di Riga'],
      ['Cake of the day', undefined, 'пирожное дня|cake of the day|pastel del día|Kuchen des Tages|gâteau du jour|torta del giorno'],
    ] }),
  ],
  routes: [
    D(['=riga-house-of-blackheads', '=riga-st-peters-tower', 'riga-cathedral', 'three-brothers', 'milda', 'swedish-gate', '=riga-cat-house', 'cafe-parunasim', '3-pavaru'],
      'Старая Рига: Ратушная площадь, Домский собор и Шведские ворота|Old Riga: Town Hall Square, the Dome and the Swedish Gate|Riga vieja: plaza del Ayuntamiento, catedral y Puerta Sueca|Altstadt Riga: Rathausplatz, Dom und Schwedentor|Vieille Riga : place de l’Hôtel-de-Ville, le Dôme et la porte suédoise|Riga vecchia: piazza del Municipio, Duomo e Porta Svedese'),
    D(['=riga-central-market', 'spikeri', 'national-library', 'riga-castle', 'pelmeni-xl', 'bastejkalns', '=riga-freedom-monument', 'max-cekot-kitchen'],
      'Центральный рынок, библиотека и бульвары|The Central Market, the library and the boulevards|El Mercado Central, la biblioteca y los bulevares|Zentralmarkt, Bibliothek und Boulevards|Le marché central, la bibliothèque et les boulevards|Il Mercato Centrale, la biblioteca e i viali'),
    D(['=riga-alberta-street', 'art-nouveau-museum', 'national-museum-of-art', 'fazenda-bazars', 'jurmala', 'labietis'],
      'Модерн на улице Альберта и пляж Юрмалы|Art Nouveau on Alberta iela and Jūrmala beach|Art Nouveau en Alberta iela y la playa de Jūrmala|Jugendstil in der Alberta iela und Strand von Jūrmala|Art nouveau rue Alberta et plage de Jūrmala|Liberty in Alberta iela e spiaggia di Jūrmala'),
  ],
};

export default pack;
