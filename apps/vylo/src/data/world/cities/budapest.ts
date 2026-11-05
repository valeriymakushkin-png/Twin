import type { CityPack } from '../types';
import { free, level, makeDay, makePlace } from './_kit.ts';

const P = makePlace('budapest');
const D = makeDay('budapest');
const CITY = 'i8NM4BScWNc';
const CASTLE = 'DbexUC7KreY';
const BASTION = 'xLA9M-mbbRc';
const CAFE = 'GNByPHgWbww';
const PARLIAMENT = 'llD91DqyPV8';
const HILLS = 'L0wvgPQR158';
const MARKET = 'ew1AUTbbuoE';
const BATH = 'j2J0piigG_I';

const pack: CityPack = {
  country: 'HU',
  city: 'budapest',
  places: [
    P('st-stephens-basilica', 'attraction', 47.5009, 19.0539, PARLIAMENT, 4.7, 61000, ['architecture', 'history', 'views'], {
      ru: ['Базилика Святого Иштвана', 'Крупнейший храм Будапешта высотой 96 м — как и парламент; внутри хранится мощевик «Святая десница», с купола — круговой вид на город.', 'На смотровую площадку купола есть лифт; вечером на площади перед базиликой уютные кафе.'],
      en: ['St Stephen’s Basilica', 'Budapest’s largest church, 96 m tall — the same as Parliament; it holds the Holy Right Hand relic, and its dome gives a 360° city view.', 'There’s a lift to the dome terrace; the square in front has cosy cafés in the evening.'],
      es: ['Basílica de San Esteban', 'La mayor iglesia de Budapest, de 96 m como el Parlamento; guarda la reliquia de la Santa Diestra y su cúpula ofrece vistas de 360°.', 'Hay ascensor a la cúpula; por la noche la plaza tiene cafés acogedores.'],
      de: ['St.-Stephans-Basilika', 'Budapests größte Kirche, 96 m hoch wie das Parlament; sie birgt die Reliquie der Heiligen Rechten, die Kuppel bietet einen Rundblick.', 'Zur Kuppelterrasse fährt ein Lift; abends gemütliche Cafés auf dem Platz.'],
      fr: ['Basilique Saint-Étienne', 'La plus grande église de Budapest, haute de 96 m comme le Parlement ; elle garde la relique de la Sainte Dextre et sa coupole offre une vue à 360°.', 'Un ascenseur mène à la coupole ; le soir, la place a des cafés chaleureux.'],
      it: ['Basilica di Santo Stefano', 'La chiesa più grande di Budapest, alta 96 m come il Parlamento; custodisce la reliquia della Santa Destra e dalla cupola si vede tutta la città.', 'C’è un ascensore per la cupola; la sera la piazza ha caffè accoglienti.'],
    }, { spot: 'insta', hours: '09:00–19:00' }),
    P('dohany-synagogue', 'attraction', 47.496, 19.0607, CITY, 4.7, 41000, ['history', 'architecture'], {
      ru: ['Синагога на улице Дохань', 'Крупнейшая синагога Европы (1859) в мавританском стиле; во дворе — мемориальное «Дерево жизни» в память о жертвах Холокоста.', 'Плечи и колени должны быть закрыты; по субботам и еврейским праздникам закрыто.'],
      en: ['Dohány Street Synagogue', 'Europe’s largest synagogue (1859) in Moorish style; in the courtyard the “Tree of Life” remembers victims of the Holocaust.', 'Cover shoulders and knees; closed on Saturdays and Jewish holidays.'],
      es: ['Sinagoga de la calle Dohány', 'La mayor sinagoga de Europa (1859), de estilo morisco; en el patio, el “Árbol de la Vida” recuerda a las víctimas del Holocausto.', 'Hombros y rodillas cubiertos; cierra sábados y fiestas judías.'],
      de: ['Synagoge in der Dohány-Straße', 'Europas größte Synagoge (1859) im maurischen Stil; im Hof erinnert der „Lebensbaum“ an die Opfer des Holocaust.', 'Schultern und Knie bedecken; samstags und an jüdischen Feiertagen geschlossen.'],
      fr: ['Synagogue de la rue Dohány', 'La plus grande synagogue d’Europe (1859), de style mauresque ; dans la cour, l’« Arbre de vie » rend hommage aux victimes de la Shoah.', 'Épaules et genoux couverts ; fermé le samedi et les fêtes juives.'],
      it: ['Sinagoga di via Dohány', 'La sinagoga più grande d’Europa (1859), in stile moresco; nel cortile l’“Albero della vita” ricorda le vittime della Shoah.', 'Spalle e ginocchia coperte; chiusa il sabato e nelle feste ebraiche.'],
    }, { hours: '10:00–18:00', address: 'Dohány utca 2' }),
    P('heroes-square', 'attraction', 47.515, 19.0778, CITY, 4.6, 52000, ['history', 'architecture'], {
      ru: ['Площадь Героев', 'Монументальная площадь в конце проспекта Андраши с колонной архангела Гавриила и статуями вождей мадьяр и королей Венгрии.', 'Доедьте по старейшей ветке метро континента — линии M1 под Андраши.'],
      en: ['Heroes’ Square', 'A monumental square at the end of Andrássy Avenue with the Archangel Gabriel column and statues of Magyar chieftains and Hungarian kings.', 'Ride there on the continent’s oldest metro line, M1 under Andrássy.'],
      es: ['Plaza de los Héroes', 'Una plaza monumental al final de la avenida Andrássy con la columna del arcángel Gabriel y estatuas de jefes magiares y reyes húngaros.', 'Llega en la línea de metro más antigua del continente, la M1 bajo Andrássy.'],
      de: ['Heldenplatz', 'Ein monumentaler Platz am Ende der Andrássy út mit der Säule des Erzengels Gabriel und Statuen magyarischer Stammesführer und ungarischer Könige.', 'Mit der ältesten U-Bahn des Kontinents hinfahren, der M1 unter der Andrássy.'],
      fr: ['Place des Héros', 'Une place monumentale au bout de l’avenue Andrássy avec la colonne de l’archange Gabriel et les statues des chefs magyars et rois de Hongrie.', 'Venez-y par la plus ancienne ligne de métro du continent, la M1 sous Andrássy.'],
      it: ['Piazza degli Eroi', 'Una piazza monumentale in fondo al viale Andrássy con la colonna dell’arcangelo Gabriele e le statue dei capi magiari e dei re d’Ungheria.', 'Arriva con la linea di metro più antica del continente, la M1 sotto Andrássy.'],
    }, { price: free, hours: 'always' }),
    P('state-opera', 'attraction', 47.5025, 19.0583, CAFE, 4.8, 21000, ['architecture', 'culture'], {
      ru: ['Венгерская государственная опера', 'Неоренессансный театр 1884 года на проспекте Андраши после масштабной реставрации: золото, фрески и одна из лучших акустик Европы.', 'Днём проводят экскурсии с мини-концертом; билеты на спектакли здесь дешевле, чем в Вене.'],
      en: ['Hungarian State Opera', 'An 1884 neo-Renaissance opera house on Andrássy Avenue, freshly restored: gilding, frescoes and some of Europe’s best acoustics.', 'Daytime tours include a mini-concert; performance tickets cost less than in Vienna.'],
      es: ['Ópera Estatal de Hungría', 'Un teatro neorrenacentista de 1884 en la avenida Andrássy, recién restaurado: oro, frescos y una de las mejores acústicas de Europa.', 'De día hay visitas con minicocierto; las entradas son más baratas que en Viena.'],
      de: ['Ungarische Staatsoper', 'Ein neorenaissancistisches Opernhaus von 1884 an der Andrássy út, frisch restauriert: Gold, Fresken und eine der besten Akustiken Europas.', 'Tagsüber Führungen mit Minikonzert; Karten sind günstiger als in Wien.'],
      fr: ['Opéra d’État de Hongrie', 'Un opéra néo-Renaissance de 1884 sur l’avenue Andrássy, fraîchement restauré : dorures, fresques et l’une des meilleures acoustiques d’Europe.', 'Visites diurnes avec mini-concert ; les places sont moins chères qu’à Vienne.'],
      it: ['Opera di Stato ungherese', 'Un teatro neorinascimentale del 1884 sul viale Andrássy, appena restaurato: ori, affreschi e una delle migliori acustiche d’Europa.', 'Di giorno visite con mini-concerto; i biglietti costano meno che a Vienna.'],
    }, { spot: 'insta', address: 'Andrássy út 22' }),
    P('gellert-baths', 'attraction', 47.4838, 19.0521, BATH, 4.4, 38000, ['spa', 'architecture'], {
      ru: ['Купальни Геллерт', 'Термальные купальни в стиле модерн (1918) с мозаиками, колоннами и стеклянной крышей над крытым бассейном.', 'Возьмите шлёпанцы и полотенце; купальни входят в отель, который реконструируют, — проверьте режим работы на сайте.'],
      en: ['Gellért Baths', 'Art Nouveau thermal baths (1918) with mosaics, columns and a glass roof over the indoor pool.', 'Bring flip-flops and a towel; the adjoining hotel is under renovation — check opening times online.'],
      es: ['Baños Gellért', 'Baños termales modernistas (1918) con mosaicos, columnas y techo de cristal sobre la piscina cubierta.', 'Lleva chanclas y toalla; el hotel anexo está en obras: consulta horarios online.'],
      de: ['Gellért-Bad', 'Jugendstil-Thermalbad (1918) mit Mosaiken, Säulen und Glasdach über dem Hallenbad.', 'Badeschlappen und Handtuch mitbringen; das angrenzende Hotel wird renoviert – Öffnungszeiten online prüfen.'],
      fr: ['Bains Gellért', 'Des bains thermaux Art nouveau (1918) aux mosaïques, colonnes et verrière au-dessus de la piscine couverte.', 'Prenez tongs et serviette ; l’hôtel attenant est en travaux, vérifiez les horaires en ligne.'],
      it: ['Terme Gellért', 'Terme liberty (1918) con mosaici, colonne e un tetto di vetro sopra la piscina coperta.', 'Porta ciabatte e asciugamano; l’hotel annesso è in ristrutturazione, controlla gli orari online.'],
    }, { hours: '09:00–19:00', address: 'Kelenhegyi út 4' }),
    P('szimpla-kert', 'attraction', 47.497, 19.0633, CITY, 4.6, 52000, ['nightlife', 'art'], {
      ru: ['Szimpla Kert', 'Первый и самый знаменитый «руин-бар» в заброшенном доме Еврейского квартала: разношёрстная мебель, ванна-диван и десятки комнат.', 'Днём здесь спокойно можно осмотреться, по воскресеньям утром — фермерский рынок.'],
      en: ['Szimpla Kert', 'The first and most famous “ruin bar” in a derelict building in the Jewish Quarter: mismatched furniture, a bathtub sofa and dozens of rooms.', 'By day you can look around in peace; on Sunday mornings there’s a farmers’ market.'],
      es: ['Szimpla Kert', 'El primer y más famoso “ruin bar”, en un edificio abandonado del Barrio Judío: muebles dispares, una bañera-sofá y decenas de salas.', 'De día se visita tranquilo; los domingos por la mañana hay mercado de productores.'],
      de: ['Szimpla Kert', 'Die erste und berühmteste „Ruinenbar“ in einem verfallenen Haus im jüdischen Viertel: zusammengewürfelte Möbel, ein Badewannensofa und Dutzende Räume.', 'Tagsüber in Ruhe umsehen; sonntagmorgens Bauernmarkt.'],
      fr: ['Szimpla Kert', 'Le premier et plus célèbre « ruin bar », dans un immeuble délabré du quartier juif : meubles dépareillés, canapé-baignoire et des dizaines de salles.', 'En journée, on visite au calme ; le dimanche matin, marché fermier.'],
      it: ['Szimpla Kert', 'Il primo e più famoso “ruin bar”, in un palazzo abbandonato del quartiere ebraico: mobili spaiati, una vasca-divano e decine di stanze.', 'Di giorno si visita con calma; la domenica mattina c’è il mercato contadino.'],
    }, { spot: 'insta', price: free, address: 'Kazinczy utca 14' }),
    P('margaret-island', 'nature', 47.527, 19.047, HILLS, 4.7, 47000, ['nature', 'gardens'], {
      ru: ['Остров Маргит', 'Парковый остров посреди Дуная: беговая дорожка 5 км, японский сад, музыкальный фонтан, руины монастыря и купальни.', 'Возьмите напрокат велосипед или электросамокат у южного въезда.'],
      en: ['Margaret Island', 'A park island in the Danube: a 5 km running track, a Japanese garden, a musical fountain, convent ruins and pools.', 'Rent a bike or e-scooter at the southern entrance.'],
      es: ['Isla Margarita', 'Una isla-parque en el Danubio: pista de 5 km, jardín japonés, fuente musical, ruinas de un convento y piscinas.', 'Alquila bici o patinete en la entrada sur.'],
      de: ['Margareteninsel', 'Eine Parkinsel in der Donau: 5-km-Laufbahn, Japanischer Garten, Musikbrunnen, Klosterruinen und Bäder.', 'Am Südeingang Fahrrad oder E-Scooter leihen.'],
      fr: ['Île Marguerite', 'Une île-parc sur le Danube : piste de 5 km, jardin japonais, fontaine musicale, ruines de couvent et piscines.', 'Louez un vélo ou une trottinette à l’entrée sud.'],
      it: ['Isola Margherita', 'Un’isola-parco sul Danubio: pista da 5 km, giardino giapponese, fontana musicale, rovine di un convento e piscine.', 'Noleggia bici o monopattino all’ingresso sud.'],
    }, { price: free, hours: 'always' }),
    P('shoes-on-the-danube', 'attraction', 47.504, 19.045, PARLIAMENT, 4.7, 31000, ['history'], {
      ru: ['«Туфли на набережной Дуная»', 'Мемориал из 60 пар чугунных туфель у реки — в память о евреях, расстрелянных здесь нилашистами в 1944–1945 годах.', 'Тихое место в нескольких минутах от парламента; многие оставляют свечи и цветы.'],
      en: ['Shoes on the Danube Bank', 'A memorial of 60 pairs of iron shoes by the river, honouring Jews shot here by the Arrow Cross in 1944–45.', 'A quiet spot minutes from Parliament; many leave candles and flowers.'],
      es: ['Zapatos a la orilla del Danubio', 'Un memorial de 60 pares de zapatos de hierro junto al río, en recuerdo de los judíos fusilados aquí por la Cruz Flechada en 1944–45.', 'Un lugar sereno a minutos del Parlamento; muchos dejan velas y flores.'],
      de: ['Schuhe am Donauufer', 'Ein Mahnmal aus 60 Paar eisernen Schuhen am Fluss, zum Gedenken an Juden, die hier 1944–45 von den Pfeilkreuzlern erschossen wurden.', 'Ein stiller Ort wenige Minuten vom Parlament; viele legen Kerzen und Blumen nieder.'],
      fr: ['Chaussures au bord du Danube', 'Un mémorial de 60 paires de chaussures en fonte au bord du fleuve, en hommage aux Juifs fusillés ici par les Croix fléchées en 1944–45.', 'Un lieu recueilli à quelques minutes du Parlement ; on y dépose bougies et fleurs.'],
      it: ['Scarpe sulla riva del Danubio', 'Un memoriale di 60 paia di scarpe in ghisa sul fiume, in ricordo degli ebrei fucilati qui dalle Croci frecciate nel 1944–45.', 'Un luogo raccolto a pochi minuti dal Parlamento; molti lasciano candele e fiori.'],
    }, { price: free, hours: 'always' }),
    P('house-of-terror', 'attraction', 47.5068, 19.0653, CITY, 4.5, 33000, ['history', 'museums'], {
      ru: ['Дом террора', 'Музей в бывшем штабе нилашистов и коммунистической тайной полиции на Андраши: экспозиция о двух диктатурах XX века и подвальные камеры.', 'Тяжёлая, но важная экспозиция; аудиогид стоит взять.'],
      en: ['House of Terror', 'A museum in the former headquarters of the Arrow Cross and the communist secret police on Andrássy: two 20th-century dictatorships and basement cells.', 'Heavy but important; the audio guide is worth it.'],
      es: ['Casa del Terror', 'Un museo en la antigua sede de la Cruz Flechada y la policía secreta comunista en Andrássy: dos dictaduras del siglo XX y celdas en el sótano.', 'Duro pero importante; merece la pena la audioguía.'],
      de: ['Haus des Terrors', 'Ein Museum im ehemaligen Sitz der Pfeilkreuzler und der kommunistischen Geheimpolizei an der Andrássy: zwei Diktaturen des 20. Jh. und Kellerzellen.', 'Schwer, aber wichtig; der Audioguide lohnt sich.'],
      fr: ['Maison de la Terreur', 'Un musée dans l’ancien siège des Croix fléchées et de la police secrète communiste sur Andrássy : deux dictatures du XXe et cellules au sous-sol.', 'Éprouvant mais important ; l’audioguide vaut le coup.'],
      it: ['Casa del Terrore', 'Un museo nell’ex sede delle Croci frecciate e della polizia segreta comunista su Andrássy: due dittature del Novecento e celle nei sotterranei.', 'Duro ma importante; vale l’audioguida.'],
    }, { hours: '10:00–18:00', address: 'Andrássy út 60' }),
    P('vajdahunyad-castle', 'attraction', 47.515, 19.082, CASTLE, 4.6, 39000, ['architecture', 'castles', 'photo'], {
      ru: ['Замок Вайдахуняд', 'Сказочный замок в Городском парке, собранный из копий знаменитых венгерских зданий разных эпох; зимой рядом работает каток.', 'Лучший кадр — с другого берега пруда; внутри — Музей сельского хозяйства.'],
      en: ['Vajdahunyad Castle', 'A fairy-tale castle in City Park built from copies of famous Hungarian buildings of different eras; in winter an ice rink opens beside it.', 'The best shot is from across the pond; it houses the Agriculture Museum.'],
      es: ['Castillo de Vajdahunyad', 'Un castillo de cuento en el Parque de la Ciudad hecho con copias de edificios húngaros de distintas épocas; en invierno hay pista de hielo al lado.', 'La mejor foto, desde el otro lado del estanque; dentro está el Museo de Agricultura.'],
      de: ['Burg Vajdahunyad', 'Eine Märchenburg im Stadtwäldchen aus Kopien berühmter ungarischer Bauten verschiedener Epochen; im Winter Eisbahn daneben.', 'Das beste Foto vom anderen Teichufer; drinnen das Landwirtschaftsmuseum.'],
      fr: ['Château de Vajdahunyad', 'Un château de conte au Bois de la Ville, assemblage de copies d’édifices hongrois de diverses époques ; patinoire à côté l’hiver.', 'La plus belle photo depuis l’autre rive de l’étang ; il abrite le musée de l’Agriculture.'],
      it: ['Castello di Vajdahunyad', 'Un castello da fiaba nel Parco cittadino fatto di copie di edifici ungheresi di varie epoche; d’inverno accanto c’è la pista di pattinaggio.', 'La foto migliore dall’altra riva del laghetto; ospita il Museo dell’Agricoltura.'],
    }, { spot: 'insta', price: free }),

    P('stand', 'food', 47.5004, 19.0596, CITY, 4.8, 1800, ['food', 'luxury'], {
      ru: ['Stand', 'Ресторан шефов Тамаша Селла и Сабины Сулло: венгерская классика — гуляш, лечо, рыбный суп — в современной высокой кухне; две звезды MICHELIN (гид Венгрии 2025).', 'Бронируйте; рядом их же бистро Stand25 — проще и дешевле.'],
      en: ['Stand', 'Chefs Tamás Széll and Szabina Szulló’s restaurant: Hungarian classics — goulash, lecsó, fish soup — as modern fine dining; two MICHELIN stars (Hungary guide 2025).', 'Book ahead; their Stand25 bistro is simpler and cheaper.'],
      es: ['Stand', 'El restaurante de Tamás Széll y Szabina Szulló: clásicos húngaros —gulash, lecsó, sopa de pescado— en alta cocina moderna; dos estrellas MICHELIN (guía Hungría 2025).', 'Reserva; su bistró Stand25 es más sencillo y barato.'],
      de: ['Stand', 'Das Restaurant von Tamás Széll und Szabina Szulló: ungarische Klassiker – Gulasch, Lecsó, Fischsuppe – als moderne Spitzenküche; zwei MICHELIN-Sterne (Guide Ungarn 2025).', 'Vorher buchen; ihr Bistro Stand25 ist einfacher und günstiger.'],
      fr: ['Stand', 'Le restaurant de Tamás Széll et Szabina Szulló : classiques hongrois — goulache, lecsó, soupe de poisson — en haute cuisine moderne ; deux étoiles MICHELIN (guide Hongrie 2025).', 'Réservez ; leur bistrot Stand25 est plus simple et moins cher.'],
      it: ['Stand', 'Il ristorante di Tamás Széll e Szabina Szulló: classici ungheresi —gulasch, lecsó, zuppa di pesce— in chiave alta cucina; due stelle MICHELIN (guida Ungheria 2025).', 'Prenota; il loro bistrot Stand25 è più semplice ed economico.'],
    }, { price: level(3), michelin: { award: 'star2', year: 2025 }, address: 'Székely Mihály utca 2', menu: [
      ['Tasting menu', undefined, 'дегустационный сет венгерской кухни|Hungarian tasting menu|menú degustación húngaro|ungarisches Degustationsmenü|menu dégustation hongrois|menù degustazione ungherese'],
      ['Tokaji pairing', undefined, 'сопровождение венгерскими винами, включая токай|Hungarian wine pairing incl. Tokaji|maridaje húngaro con Tokaji|ungarische Weinbegleitung mit Tokajer|accords vins hongrois dont tokaji|abbinamento vini ungheresi con Tokaji'],
    ] }),
    P('frici-papa', 'food', 47.5003, 19.0622, MARKET, 4.4, 9800, ['food'], {
      ru: ['Frici Papa', 'Простой и очень недорогой венгерский ресторан в центре: гуляш, паприкаш из курицы, фаршированный перец.', 'Порции большие, цены низкие — хорошее место попробовать базовую венгерскую кухню.'],
      en: ['Frici Papa', 'A simple, very cheap Hungarian restaurant downtown: goulash, chicken paprikash, stuffed peppers.', 'Big portions, low prices — a good place to try everyday Hungarian food.'],
      es: ['Frici Papa', 'Un restaurante húngaro sencillo y muy barato en el centro: gulash, paprikash de pollo y pimientos rellenos.', 'Raciones grandes y precios bajos: ideal para probar la cocina húngara diaria.'],
      de: ['Frici Papa', 'Ein einfaches, sehr günstiges ungarisches Lokal im Zentrum: Gulasch, Hühnerpaprikasch, gefüllte Paprika.', 'Große Portionen, kleine Preise – gut für ungarische Alltagsküche.'],
      fr: ['Frici Papa', 'Un restaurant hongrois simple et très bon marché au centre : goulache, poulet au paprika, poivrons farcis.', 'Grosses portions, petits prix : parfait pour la cuisine hongroise du quotidien.'],
      it: ['Frici Papa', 'Un ristorante ungherese semplice ed economicissimo in centro: gulasch, pollo alla paprika, peperoni ripieni.', 'Porzioni grandi e prezzi bassi: ottimo per la cucina ungherese di tutti i giorni.'],
    }, { price: level(1), address: 'Király utca 55', menu: [
      ['Gulyásleves', undefined, 'суп-гуляш с говядиной и паприкой|goulash soup with beef and paprika|sopa gulash de ternera y pimentón|Gulaschsuppe mit Rind und Paprika|soupe goulache au bœuf et paprika|zuppa gulasch di manzo e paprika'],
      ['Csirkepaprikás', undefined, 'курица в сметанно-паприковом соусе с галушками|chicken in paprika-sour-cream sauce with dumplings|pollo en salsa de pimentón y nata con ñoquis|Hühnerpaprikasch mit Nockerln|poulet au paprika et crème, spätzle|pollo alla paprika con gnocchetti'],
    ] }),
    P('retro-langos', 'food', 47.5084, 19.0573, MARKET, 4.6, 5600, ['food', 'streetfood'], {
      ru: ['Retro Lángos Büfé', 'Окошко у метро «Арань Янош», где жарят лангош — венгерскую лепёшку из дрожжевого теста — со сметаной, сыром и чесноком.', 'Классика — «sajtos-tejfölös» со сметаной и сыром; натрите чесноком.'],
      en: ['Retro Lángos Büfé', 'A hatch by Arany János metro frying lángos — Hungarian yeast flatbread — with sour cream, cheese and garlic.', 'The classic is “sajtos-tejfölös” with sour cream and cheese; add garlic.'],
      es: ['Retro Lángos Büfé', 'Una ventanilla junto al metro Arany János que fríe lángos, pan frito húngaro, con nata agria, queso y ajo.', 'El clásico es “sajtos-tejfölös”, con nata agria y queso; añade ajo.'],
      de: ['Retro Lángos Büfé', 'Ein Fenster an der Metro Arany János, das Lángos frittiert – ungarisches Hefefladenbrot – mit Sauerrahm, Käse und Knoblauch.', 'Klassisch „sajtos-tejfölös“ mit Sauerrahm und Käse; Knoblauch dazu.'],
      fr: ['Retro Lángos Büfé', 'Un guichet près du métro Arany János qui frit le lángos, galette hongroise à la levure, avec crème aigre, fromage et ail.', 'Le classique : « sajtos-tejfölös », crème aigre et fromage ; ajoutez l’ail.'],
      it: ['Retro Lángos Büfé', 'Uno sportello vicino alla metro Arany János che frigge il lángos, focaccia ungherese lievitata, con panna acida, formaggio e aglio.', 'Il classico è “sajtos-tejfölös” con panna acida e formaggio; aggiungi l’aglio.'],
    }, { price: level(1), address: 'Bajcsy-Zsilinszky út 25', menu: [
      ['Sajtos-tejfölös lángos', undefined, 'лангош со сметаной и сыром|lángos with sour cream and cheese|lángos con nata agria y queso|Lángos mit Sauerrahm und Käse|lángos crème aigre et fromage|lángos con panna acida e formaggio'],
      ['Fokhagymás lángos', undefined, 'лангош с чесноком|garlic lángos|lángos con ajo|Knoblauch-Lángos|lángos à l’ail|lángos all’aglio'],
    ] }),
    P('hungarikum-bisztro', 'food', 47.5055, 19.048, PARLIAMENT, 4.8, 7300, ['food'], {
      ru: ['Hungarikum Bisztró', 'Маленькое семейное бистро в пяти минутах от парламента: домашняя венгерская кухня, токайские вина и тёплый приём.', 'Мест мало — бронируйте; закажите паприкаш и штрудель.'],
      en: ['Hungarikum Bisztró', 'A small family bistro five minutes from Parliament: home-style Hungarian cooking, Tokaji wines and a warm welcome.', 'Few tables — book; order paprikash and strudel.'],
      es: ['Hungarikum Bisztró', 'Un pequeño bistró familiar a cinco minutos del Parlamento: cocina húngara casera, vinos de Tokaj y trato cálido.', 'Pocas mesas: reserva; pide paprikash y strudel.'],
      de: ['Hungarikum Bisztró', 'Ein kleines Familienbistro fünf Minuten vom Parlament: hausgemachte ungarische Küche, Tokajer und herzlicher Empfang.', 'Wenige Tische – reservieren; Paprikasch und Strudel bestellen.'],
      fr: ['Hungarikum Bisztró', 'Un petit bistrot familial à cinq minutes du Parlement : cuisine hongroise maison, vins de Tokaj et accueil chaleureux.', 'Peu de tables : réservez ; prenez paprikash et strudel.'],
      it: ['Hungarikum Bisztró', 'Un piccolo bistrot di famiglia a cinque minuti dal Parlamento: cucina ungherese casalinga, vini di Tokaj e accoglienza calorosa.', 'Pochi tavoli: prenota; ordina paprikash e strudel.'],
    }, { price: level(2), address: 'Steindl Imre utca 13', menu: [
      ['Paprikás csirke', undefined, 'курица-паприкаш|chicken paprikash|paprikash de pollo|Hühnerpaprikasch|poulet au paprika|pollo alla paprika'],
      ['Rétes', undefined, 'венгерский штрудель|Hungarian strudel|strudel húngaro|ungarischer Strudel|strudel hongrois|strudel ungherese'],
    ] }),
    P('ruszwurm', 'food', 47.5023, 19.0328, BASTION, 4.5, 9100, ['food', 'history'], {
      ru: ['Ruszwurm', 'Старейшая кондитерская Будапешта (1827) в Крепостном квартале с бидермейерской мебелью: торт «Добош», «Эстерхази» и кремеш.', 'Крошечный зал быстро заполняется — пирожные можно взять с собой.'],
      en: ['Ruszwurm', 'Budapest’s oldest café-patisserie (1827) in the Castle District with Biedermeier furniture: Dobos torte, Esterházy torte and krémes.', 'The tiny room fills fast — cakes are available to take away.'],
      es: ['Ruszwurm', 'La pastelería más antigua de Budapest (1827), en el Barrio del Castillo, con muebles Biedermeier: tarta Dobos, Esterházy y krémes.', 'La salita se llena rápido: puedes llevarte los pasteles.'],
      de: ['Ruszwurm', 'Budapests älteste Konditorei (1827) im Burgviertel mit Biedermeiermöbeln: Dobostorte, Esterházytorte und Krémes.', 'Der winzige Raum ist schnell voll – Kuchen gibt es auch zum Mitnehmen.'],
      fr: ['Ruszwurm', 'La plus vieille pâtisserie de Budapest (1827), dans le quartier du Château, mobilier Biedermeier : gâteau Dobos, Esterházy et krémes.', 'La petite salle se remplit vite : gâteaux à emporter possibles.'],
      it: ['Ruszwurm', 'La pasticceria più antica di Budapest (1827) nel quartiere del Castello, con mobili Biedermeier: torta Dobos, Esterházy e krémes.', 'La saletta si riempie presto: i dolci si possono portare via.'],
    }, { price: level(1), address: 'Szentháromság utca 7', menu: [
      ['Dobos torta', undefined, 'слоёный торт с шоколадным кремом и карамелью|layered torte with chocolate cream and caramel|tarta de capas con crema de chocolate y caramelo|Schichttorte mit Schokocreme und Karamell|gâteau à étages crème chocolat et caramel|torta a strati con crema al cioccolato e caramello'],
      ['Krémes', undefined, 'пирожное с заварным кремом между слоёного теста|custard slice in puff pastry|milhojas de crema|Cremeschnitte|mille-feuille à la crème|millefoglie alla crema'],
    ] }),
    P('molnars-kurtoskalacs', 'food', 47.4925, 19.054, MARKET, 4.5, 4300, ['food', 'streetfood'], {
      ru: ['Molnár’s Kürtőskalács', 'Лавка на улице Ваци, где на углях пекут кюртёшкалач — трубочку из теста с сахарной корочкой — с корицей, орехами или кокосом.', 'Ешьте тёплым, отрывая спиралью.'],
      en: ['Molnár’s Kürtőskalács', 'A shop on Váci Street baking kürtőskalács over coals — a chimney cake with a sugar crust — with cinnamon, walnut or coconut.', 'Eat it warm, unravelling the spiral.'],
      es: ['Molnár’s Kürtőskalács', 'Una tienda en la calle Váci que hornea kürtőskalács a la brasa, pastel-chimenea con costra de azúcar y canela, nuez o coco.', 'Cómelo tibio, desenrollando la espiral.'],
      de: ['Molnár’s Kürtőskalács', 'Ein Laden in der Váci utca, der Baumstriezel über Glut backt – mit Zuckerkruste und Zimt, Walnuss oder Kokos.', 'Warm essen und die Spirale abwickeln.'],
      fr: ['Molnár’s Kürtőskalács', 'Une boutique de la rue Váci qui cuit sur braise le kürtőskalács, gâteau-cheminée caramélisé, à la cannelle, aux noix ou à la noix de coco.', 'À manger tiède en déroulant la spirale.'],
      it: ['Molnár’s Kürtőskalács', 'Un negozio in via Váci che cuoce sulla brace il kürtőskalács, dolce a camino con crosta di zucchero, alla cannella, noci o cocco.', 'Mangialo tiepido svolgendo la spirale.'],
    }, { price: level(1), address: 'Váci utca 31', menu: [
      ['Kürtőskalács with cinnamon', undefined, 'трубочка из теста с корицей|chimney cake with cinnamon|pastel chimenea con canela|Baumstriezel mit Zimt|gâteau-cheminée à la cannelle|dolce a camino alla cannella'],
      ['Kürtőskalács with walnut', undefined, 'трубочка с грецким орехом|chimney cake with walnut|pastel chimenea con nuez|Baumstriezel mit Walnuss|gâteau-cheminée aux noix|dolce a camino alle noci'],
    ] }),
    P('belvarosi-disznotoros', 'food', 47.493, 19.0568, MARKET, 4.6, 4900, ['food', 'streetfood'], {
      ru: ['Belvárosi Disznótoros', 'Мясная закусочная в центре: колбасы, кровяная колбаса, жареная свинина и квашеная капуста — едят стоя у высоких столов.', 'Хороший быстрый обед: колбаса с горчицей, капустой и хлебом.'],
      en: ['Belvárosi Disznótoros', 'A butcher’s eatery downtown: sausages, blood sausage, roast pork and sauerkraut, eaten standing at high tables.', 'A good quick lunch: sausage with mustard, sauerkraut and bread.'],
      es: ['Belvárosi Disznótoros', 'Una charcutería-comedor en el centro: salchichas, morcilla, cerdo asado y chucrut, de pie en mesas altas.', 'Un buen almuerzo rápido: salchicha con mostaza, chucrut y pan.'],
      de: ['Belvárosi Disznótoros', 'Ein Metzgerimbiss im Zentrum: Würste, Blutwurst, Schweinebraten und Sauerkraut, im Stehen an Stehtischen.', 'Gutes schnelles Mittagessen: Wurst mit Senf, Sauerkraut und Brot.'],
      fr: ['Belvárosi Disznótoros', 'Une boucherie-comptoir au centre : saucisses, boudin, rôti de porc et choucroute, à manger debout.', 'Un bon déjeuner rapide : saucisse, moutarde, choucroute et pain.'],
      it: ['Belvárosi Disznótoros', 'Una macelleria-tavola calda in centro: salsicce, sanguinaccio, arrosto di maiale e crauti, da mangiare in piedi.', 'Un buon pranzo veloce: salsiccia con senape, crauti e pane.'],
    }, { price: level(1), address: 'Károlyi utca 17', menu: [
      ['Kolbász', undefined, 'жареная колбаса с горчицей|grilled sausage with mustard|salchicha a la plancha con mostaza|gegrillte Wurst mit Senf|saucisse grillée et moutarde|salsiccia alla griglia con senape'],
      ['Sült hurka', undefined, 'жареная кровяная или ливерная колбаса|fried blood or liver sausage|morcilla o embutido de hígado frito|gebratene Blut- oder Leberwurst|boudin noir ou blanc grillé|sanguinaccio o salsiccia di fegato fritti'],
    ] }),
    P('mazel-tov', 'food', 47.4995, 19.064, CITY, 4.5, 13000, ['food', 'nightlife'], {
      ru: ['Mazel Tov', 'Ближневосточный ресторан в бывшем полуразрушенном доме Еврейского квартала, превращённом в зелёный двор под стеклянной крышей.', 'Шакшука, хумус и шаурма на тарелке; вечером бронируйте.'],
      en: ['Mazel Tov', 'A Middle Eastern restaurant in a former half-ruined building in the Jewish Quarter, turned into a leafy courtyard under a glass roof.', 'Shakshuka, hummus and shawarma plates; book in the evening.'],
      es: ['Mazel Tov', 'Un restaurante de Oriente Medio en un antiguo edificio en ruinas del Barrio Judío, convertido en un patio verde bajo techo de cristal.', 'Shakshuka, hummus y platos de shawarma; reserva por la noche.'],
      de: ['Mazel Tov', 'Ein nahöstliches Restaurant in einem einst halb verfallenen Haus im jüdischen Viertel, heute ein grüner Hof unter Glasdach.', 'Shakshuka, Hummus und Shawarma-Teller; abends reservieren.'],
      fr: ['Mazel Tov', 'Un restaurant moyen-oriental dans un ancien immeuble à moitié en ruine du quartier juif, devenu cour verdoyante sous verrière.', 'Chakchouka, houmous et assiettes de chawarma ; réservez le soir.'],
      it: ['Mazel Tov', 'Un ristorante mediorientale in un ex palazzo semidiroccato del quartiere ebraico, trasformato in cortile verde sotto un tetto di vetro.', 'Shakshuka, hummus e piatti di shawarma; prenota la sera.'],
    }, { price: level(2), address: 'Akácfa utca 47', menu: [
      ['Shakshuka', undefined, 'яйца, тушённые в томатах с перцем|eggs poached in tomato and pepper|huevos en salsa de tomate y pimiento|Eier in Tomaten-Paprika-Sauce|œufs pochés à la tomate et aux poivrons|uova in salsa di pomodoro e peperoni'],
      ['Hummus plate', undefined, 'хумус с питой|hummus with pita|hummus con pita|Hummus mit Pita|houmous et pita|hummus con pita'],
    ] }),
    P('for-sale-pub', 'food', 47.489, 19.059, MARKET, 4.4, 11000, ['food'], {
      ru: ['For Sale Pub', 'Паб у Центрального рынка, где стены и потолок увешаны записками гостей, а пол усыпан ореховой скорлупой; огромные порции гуляша в котелках.', 'Арахис бесплатно, скорлупу бросают на пол — так принято.'],
      en: ['For Sale Pub', 'A pub by the Great Market Hall with walls and ceiling covered in guests’ notes and a floor strewn with peanut shells; huge goulash in kettles.', 'Peanuts are free and the shells go on the floor — that’s the custom.'],
      es: ['For Sale Pub', 'Un pub junto al Mercado Central con paredes y techo llenos de notas de clientes y el suelo cubierto de cáscaras de cacahuete; gulash enorme en caldero.', 'Los cacahuetes son gratis y las cáscaras van al suelo: es costumbre.'],
      de: ['For Sale Pub', 'Ein Pub an der Großen Markthalle mit Wänden und Decke voller Gästezettel und einem Boden voller Erdnussschalen; riesiges Gulasch im Kessel.', 'Erdnüsse gratis, die Schalen kommen auf den Boden – so ist es Brauch.'],
      fr: ['For Sale Pub', 'Un pub près de la grande halle, murs et plafond couverts de mots de clients, sol jonché de coques de cacahuètes ; goulache géante en chaudron.', 'Les cacahuètes sont gratuites, les coques vont par terre : c’est la coutume.'],
      it: ['For Sale Pub', 'Un pub vicino al Mercato Centrale con pareti e soffitto coperti di biglietti dei clienti e pavimento pieno di gusci di arachidi; gulasch enorme nel paiolo.', 'Le arachidi sono gratis e i gusci finiscono per terra: è l’usanza.'],
    }, { price: level(2), address: 'Vámház körút 2', menu: [
      ['Bogrács gulyás', undefined, 'гуляш в котелке|goulash in a kettle|gulash en caldero|Kesselgulasch|goulache au chaudron|gulasch nel paiolo'],
      ['Halászlé', undefined, 'острая венгерская уха с паприкой|spicy Hungarian fisherman’s soup|sopa de pescador húngara picante|scharfe ungarische Fischersuppe|soupe du pêcheur hongroise épicée|zuppa del pescatore ungherese piccante'],
    ] }),
    P('bors-gasztrobar', 'food', 47.4975, 19.0635, CITY, 4.8, 6200, ['food', 'streetfood'], {
      ru: ['Bors GasztroBár', 'Крошечная закусочная на улице Казинци: необычные супы дня и горячие багеты с придумками; очередь вечером, но движется быстро.', 'Возьмите суп дня и багет на улице перед барами Еврейского квартала.'],
      en: ['Bors GasztroBár', 'A tiny eatery on Kazinczy Street: inventive soups of the day and hot creative baguettes; an evening queue that moves fast.', 'Grab the soup of the day and a baguette before the Jewish Quarter bars.'],
      es: ['Bors GasztroBár', 'Un diminuto local en la calle Kazinczy: sopas del día creativas y baguettes calientes; cola por la noche que avanza rápido.', 'Toma la sopa del día y una baguette antes de los bares del Barrio Judío.'],
      de: ['Bors GasztroBár', 'Ein winziger Imbiss in der Kazinczy utca: kreative Tagessuppen und heiße Baguettes; abends Schlange, die schnell geht.', 'Tagessuppe und Baguette vor den Bars im jüdischen Viertel.'],
      fr: ['Bors GasztroBár', 'Une minuscule adresse rue Kazinczy : soupes du jour inventives et baguettes chaudes ; file le soir, mais rapide.', 'Soupe du jour et baguette avant les bars du quartier juif.'],
      it: ['Bors GasztroBár', 'Un minuscolo locale in via Kazinczy: zuppe del giorno creative e baguette calde; coda la sera, ma scorre veloce.', 'Prendi zuppa del giorno e baguette prima dei bar del quartiere ebraico.'],
    }, { price: level(1), address: 'Kazinczy utca 10', menu: [
      ['Soup of the day', undefined, 'суп дня|soup of the day|sopa del día|Tagessuppe|soupe du jour|zuppa del giorno'],
      ['Grilled baguette', undefined, 'горячий багет с начинкой|hot filled baguette|baguette caliente rellena|heißes belegtes Baguette|baguette chaude garnie|baguette calda farcita'],
    ] }),
  ],
  routes: [
    D(['=budapest-buda-castle', '=budapest-fishermans-bastion', 'ruszwurm', '=budapest-gellert-hill-citadella', 'gellert-baths', 'for-sale-pub'],
      'Буда: Крепость, Рыбацкий бастион и купальни|Buda: the Castle, Fisherman’s Bastion and baths|Buda: el Castillo, el Bastión y los baños|Buda: Burg, Fischerbastei und Bäder|Buda : le Château, le Bastion et les bains|Buda: Castello, Bastione e terme'),
    D(['=budapest-parliament', 'shoes-on-the-danube', 'hungarikum-bisztro', 'st-stephens-basilica', 'state-opera', 'house-of-terror', 'retro-langos', 'stand'],
      'Пешт: парламент, базилика и проспект Андраши|Pest: Parliament, the Basilica and Andrássy|Pest: el Parlamento, la Basílica y Andrássy|Pest: Parlament, Basilika und Andrássy|Pest : Parlement, basilique et Andrássy|Pest: Parlamento, Basilica e Andrássy'),
    D(['heroes-square', 'vajdahunyad-castle', '=budapest-szechenyi-baths', 'frici-papa', 'dohany-synagogue', 'bors-gasztrobar', 'mazel-tov', 'szimpla-kert'],
      'Купальни Сечени и Еврейский квартал|Széchenyi Baths and the Jewish Quarter|Baños Széchenyi y Barrio Judío|Széchenyi-Bad und jüdisches Viertel|Bains Széchenyi et quartier juif|Terme Széchenyi e quartiere ebraico'),
  ],
};

export default pack;
