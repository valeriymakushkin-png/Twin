import type { CityPack } from '../types';
import { free, level, makeDay, makePlace } from './_kit.ts';

const P = makePlace('vienna');
const D = makeDay('vienna');
const CITY = 'jGI8OoMRrBQ';
const MARKET = 'gq1c6eXoUQg';
const PALACE = 'Th2MisvdKr0';
const FOOD = '6pS-OzLPejY';
const CAFE = 'KsH8qFu73tU';
const SCHONBRUNN = 'POkjB2GJV7A';
const CATHEDRAL = 'lE3cGVC4XuI';
const CHURCH = 'IraVn9L24A0';

const pack: CityPack = {
  country: 'AT',
  city: 'vienna',
  places: [
    P('hofburg', 'attraction', 48.2066, 16.3655, PALACE, 4.6, 52000, ['history', 'architecture', 'museums'], {
      ru: ['Хофбург', 'Зимняя резиденция Габсбургов в центре Вены: императорские апартаменты, Музей Сиси и Серебряная кладовая под одним билетом.', 'Начните с Музея Сиси — он самый популярный; в зимнее утро меньше людей.'],
      en: ['Hofburg', 'The Habsburgs’ winter residence in central Vienna: the Imperial Apartments, the Sisi Museum and the Silver Collection on one ticket.', 'Start with the Sisi Museum — the most popular part; winter mornings are quieter.'],
      es: ['Hofburg', 'La residencia de invierno de los Habsburgo en el centro de Viena: apartamentos imperiales, Museo Sisi y Colección de Plata con una entrada.', 'Empieza por el Museo Sisi, el más visitado; las mañanas de invierno son más tranquilas.'],
      de: ['Hofburg', 'Die Winterresidenz der Habsburger im Zentrum Wiens: Kaiserappartements, Sisi Museum und Silberkammer mit einem Ticket.', 'Mit dem Sisi Museum beginnen – dem beliebtesten Teil; Wintermorgen sind ruhiger.'],
      fr: ['Hofburg', 'La résidence d’hiver des Habsbourg au centre de Vienne : appartements impériaux, musée Sissi et collection d’argenterie avec un seul billet.', 'Commencez par le musée Sissi, le plus visité ; les matins d’hiver sont plus calmes.'],
      it: ['Hofburg', 'La residenza invernale degli Asburgo nel centro di Vienna: Appartamenti imperiali, Museo di Sissi e Collezione d’argenteria con un solo biglietto.', 'Comincia dal Museo di Sissi, il più visitato; le mattine d’inverno sono più tranquille.'],
    }, { hours: '09:00–17:30', address: 'Michaelerkuppel' }),
    P('kunsthistorisches', 'attraction', 48.2038, 16.3617, PALACE, 4.8, 39000, ['art', 'museums', 'architecture'], {
      ru: ['Музей истории искусств', 'Одна из великих художественных коллекций мира: крупнейшее собрание Брейгеля, Вермеер, Рафаэль, Караваджо — во дворце с роскошной лестницей.', 'Выпейте кофе в кафе под куполом — одном из самых красивых в Вене.'],
      en: ['Kunsthistorisches Museum', 'One of the world’s great art collections: the largest group of Bruegels, Vermeer, Raphael, Caravaggio — in a palace with a sumptuous staircase.', 'Have coffee in the domed café — one of Vienna’s most beautiful.'],
      es: ['Museo de Historia del Arte', 'Una de las grandes colecciones del mundo: el mayor conjunto de Brueghel, Vermeer, Rafael, Caravaggio, en un palacio con una escalera suntuosa.', 'Toma un café bajo la cúpula, uno de los más bellos de Viena.'],
      de: ['Kunsthistorisches Museum', 'Eine der großen Kunstsammlungen der Welt: die größte Bruegel-Sammlung, Vermeer, Raffael, Caravaggio – in einem Palast mit prächtigem Treppenhaus.', 'Im Kuppelcafé Kaffee trinken – einem der schönsten Wiens.'],
      fr: ['Kunsthistorisches Museum', 'L’une des grandes collections d’art au monde : le plus grand ensemble de Bruegel, Vermeer, Raphaël, Caravage, dans un palais à l’escalier somptueux.', 'Prenez un café sous la coupole, l’un des plus beaux de Vienne.'],
      it: ['Kunsthistorisches Museum', 'Una delle grandi collezioni d’arte al mondo: il più grande nucleo di Bruegel, Vermeer, Raffaello, Caravaggio, in un palazzo con uno scalone sontuoso.', 'Prendi un caffè sotto la cupola, uno dei più belli di Vienna.'],
    }, { hours: '10:00–18:00', address: 'Maria-Theresien-Platz' }),
    P('albertina', 'attraction', 48.2047, 16.3681, PALACE, 4.7, 32000, ['art', 'museums'], {
      ru: ['Альбертина', 'Дворец Габсбургов с роскошными залами и коллекцией от «Зайца» Дюрера до Моне и Пикассо; с террасы — вид на Оперу.', 'Терраса у входа бесплатна — с неё лучший вид на Оперу и кафе «Захер».'],
      en: ['Albertina', 'A Habsburg palace with state rooms and a collection from Dürer’s Hare to Monet and Picasso; its terrace looks onto the Opera.', 'The terrace by the entrance is free — the best view of the Opera and Café Sacher.'],
      es: ['Albertina', 'Un palacio de los Habsburgo con salones de gala y una colección de la Liebre de Durero a Monet y Picasso; la terraza mira a la Ópera.', 'La terraza de la entrada es gratis: la mejor vista de la Ópera y el Café Sacher.'],
      de: ['Albertina', 'Ein Habsburgerpalais mit Prunkräumen und einer Sammlung von Dürers Feldhase bis Monet und Picasso; die Terrasse blickt auf die Oper.', 'Die Terrasse am Eingang ist gratis – bester Blick auf Oper und Café Sacher.'],
      fr: ['Albertina', 'Un palais des Habsbourg aux salons d’apparat et une collection du Lièvre de Dürer à Monet et Picasso ; la terrasse donne sur l’Opéra.', 'La terrasse de l’entrée est gratuite : la plus belle vue sur l’Opéra et le Café Sacher.'],
      it: ['Albertina', 'Un palazzo asburgico con sale di rappresentanza e una collezione dalla Lepre di Dürer a Monet e Picasso; la terrazza guarda l’Opera.', 'La terrazza all’ingresso è gratuita: la vista migliore sull’Opera e sul Café Sacher.'],
    }, { hours: '10:00–18:00', address: 'Albertinaplatz 1' }),
    P('state-opera', 'attraction', 48.203, 16.369, CITY, 4.8, 54000, ['architecture', 'culture'], {
      ru: ['Венская государственная опера', 'Одна из главных опер мира; кроме спектаклей, днём проводят экскурсии по залу и фойе.', 'Стоячие места продают онлайн в день спектакля по нескольку евро — смотрите правила на сайте оперы.'],
      en: ['Vienna State Opera', 'One of the world’s great opera houses; besides performances, there are daytime tours of the hall and foyers.', 'Standing places sell online on the day for a few euros — check the rules on the Opera website.'],
      es: ['Ópera Estatal de Viena', 'Uno de los grandes teatros de ópera del mundo; además de funciones, de día hay visitas a la sala y los foyers.', 'Las entradas de pie se venden online el mismo día por pocos euros; consulta las normas en la web.'],
      de: ['Wiener Staatsoper', 'Eines der großen Opernhäuser der Welt; neben Vorstellungen gibt es tagsüber Führungen durch Saal und Foyers.', 'Stehplätze gibt es am Tag online für wenige Euro – Regeln auf der Website der Oper prüfen.'],
      fr: ['Opéra d’État de Vienne', 'L’un des grands opéras du monde ; en plus des spectacles, visites de la salle et des foyers en journée.', 'Les places debout se vendent en ligne le jour même pour quelques euros ; voir les règles sur le site.'],
      it: ['Opera di Stato di Vienna', 'Uno dei grandi teatri d’opera del mondo; oltre agli spettacoli, di giorno visite alla sala e ai foyer.', 'I posti in piedi si vendono online il giorno stesso a pochi euro; controlla le regole sul sito.'],
    }, { spot: 'insta', address: 'Opernring 2' }),
    P('hundertwasserhaus', 'attraction', 48.2073, 16.394, CITY, 4.5, 45000, ['architecture', 'art', 'photo'], {
      ru: ['Дом Хундертвассера', 'Жилой дом-сказка с кривыми окнами, разноцветным фасадом и деревьями на крышах; внутрь не пускают, но напротив — торговая галерея Хундертвассер-Виллидж.', 'Рядом — музей Kunst Haus Wien, тоже по проекту Хундертвассера.'],
      en: ['Hundertwasserhaus', 'A fairy-tale apartment block with wonky windows, a multicoloured façade and trees on the roofs; closed inside, but Hundertwasser Village opposite is open.', 'Kunst Haus Wien nearby, also by Hundertwasser, is a museum you can enter.'],
      es: ['Casa Hundertwasser', 'Un bloque de viviendas de cuento con ventanas torcidas, fachada multicolor y árboles en los tejados; no se visita por dentro, pero enfrente está el Hundertwasser Village.', 'Cerca, el Kunst Haus Wien, también de Hundertwasser, sí se visita.'],
      de: ['Hundertwasserhaus', 'Ein märchenhaftes Wohnhaus mit schiefen Fenstern, bunter Fassade und Bäumen auf den Dächern; innen nicht zugänglich, gegenüber das Hundertwasser Village.', 'Das nahe Kunst Haus Wien, ebenfalls von Hundertwasser, ist ein Museum.'],
      fr: ['Maison Hundertwasser', 'Un immeuble de conte de fées aux fenêtres bancales, façade multicolore et arbres sur les toits ; fermé à la visite, mais le Hundertwasser Village en face est ouvert.', 'Le Kunst Haus Wien voisin, aussi de Hundertwasser, se visite.'],
      it: ['Hundertwasserhaus', 'Un condominio da favola con finestre storte, facciata multicolore e alberi sui tetti; non visitabile dentro, ma di fronte c’è lo Hundertwasser Village.', 'Vicino, il Kunst Haus Wien, sempre di Hundertwasser, è visitabile.'],
    }, { spot: 'insta', price: free, address: 'Kegelgasse 36–38' }),
    P('prater-riesenrad', 'attraction', 48.2166, 16.3959, CITY, 4.5, 58000, ['views', 'history'], {
      ru: ['Колесо обозрения в Пратере', 'Колесо 1897 года высотой около 65 м с деревянными кабинками — символ Вены; вокруг парк аттракционов и аллеи Пратера.', 'Поднимитесь на закате; потом прогуляйтесь по главной аллее Пратера.'],
      en: ['Prater Giant Ferris Wheel', 'An 1897 wheel about 65 m high with wooden cabins — a symbol of Vienna; around it an amusement park and the Prater avenues.', 'Ride at sunset; then walk the Prater’s main avenue.'],
      es: ['Noria del Prater', 'Una noria de 1897 de unos 65 m con cabinas de madera, símbolo de Viena; alrededor, un parque de atracciones y las avenidas del Prater.', 'Súbete al atardecer y luego pasea por la avenida principal del Prater.'],
      de: ['Wiener Riesenrad', 'Ein Riesenrad von 1897, etwa 65 m hoch, mit Holzwaggons – ein Wahrzeichen Wiens; ringsum Wurstelprater und Praterallee.', 'Bei Sonnenuntergang fahren; danach die Hauptallee entlang spazieren.'],
      fr: ['Grande roue du Prater', 'Une grande roue de 1897 d’environ 65 m aux cabines en bois, symbole de Vienne ; autour, un parc d’attractions et les allées du Prater.', 'Montez au coucher du soleil, puis flânez sur l’allée principale.'],
      it: ['Ruota panoramica del Prater', 'Una ruota del 1897 alta circa 65 m con cabine in legno, simbolo di Vienna; intorno un luna park e i viali del Prater.', 'Sali al tramonto; poi passeggia lungo il viale principale.'],
    }, { spot: 'insta', hours: '10:00–22:00' }),
    P('museumsquartier', 'attraction', 48.2033, 16.3586, CITY, 4.6, 41000, ['art', 'museums', 'city'], {
      ru: ['Музейный квартал (MQ)', 'Бывшие императорские конюшни, превращённые в квартал музеев: Леопольд-музей с крупнейшей коллекцией Шиле, MUMOK и дворы с лежаками.', 'Летним вечером дворы MQ — место встреч; лежаки «Enzi» бесплатны.'],
      en: ['MuseumsQuartier (MQ)', 'Former imperial stables turned museum district: the Leopold Museum with the largest Schiele collection, MUMOK and courtyards with loungers.', 'On summer evenings the MQ courtyards are a meeting place; the “Enzi” loungers are free.'],
      es: ['MuseumsQuartier (MQ)', 'Antiguas caballerizas imperiales convertidas en barrio de museos: el Leopold con la mayor colección de Schiele, el MUMOK y patios con tumbonas.', 'En las tardes de verano los patios del MQ son punto de encuentro; las tumbonas “Enzi” son gratis.'],
      de: ['MuseumsQuartier (MQ)', 'Ehemalige Hofstallungen, heute Museumsviertel: das Leopold Museum mit der größten Schiele-Sammlung, das MUMOK und Höfe mit Liegen.', 'An Sommerabenden sind die MQ-Höfe Treffpunkt; die „Enzis“ sind gratis.'],
      fr: ['MuseumsQuartier (MQ)', 'Les anciennes écuries impériales devenues quartier des musées : musée Leopold et sa grande collection Schiele, MUMOK et cours avec transats.', 'Les soirs d’été, les cours du MQ sont un lieu de rendez-vous ; les transats « Enzi » sont gratuits.'],
      it: ['MuseumsQuartier (MQ)', 'Le ex scuderie imperiali diventate quartiere dei musei: il Leopold con la più grande collezione di Schiele, il MUMOK e cortili con sdraio.', 'Nelle sere d’estate i cortili del MQ sono un punto d’incontro; le sdraio “Enzi” sono gratuite.'],
    }, { price: free, address: 'Museumsplatz 1' }),
    P('spanish-riding-school', 'attraction', 48.2079, 16.3664, PALACE, 4.5, 21000, ['history', 'culture'], {
      ru: ['Испанская школа верховой езды', 'Старейшая школа классической верховой езды с белыми липицианами в барочном Зимнем манеже Хофбурга.', 'Билет на утреннюю тренировку дешевле представления и даёт ту же атмосферу.'],
      en: ['Spanish Riding School', 'The oldest school of classical riding, with white Lipizzaner horses in the Hofburg’s Baroque Winter Riding Hall.', 'A morning-exercise ticket is cheaper than a performance and has the same atmosphere.'],
      es: ['Escuela Española de Equitación', 'La escuela de equitación clásica más antigua, con caballos lipizanos blancos en el barroco Picadero de Invierno del Hofburg.', 'Una entrada al entrenamiento matinal es más barata que el espectáculo y con el mismo ambiente.'],
      de: ['Spanische Hofreitschule', 'Die älteste Schule der klassischen Reitkunst mit weißen Lipizzanern in der barocken Winterreitschule der Hofburg.', 'Ein Ticket für die Morgenarbeit ist günstiger als eine Vorführung, die Stimmung dieselbe.'],
      fr: ['École espagnole d’équitation', 'La plus ancienne école d’équitation classique, avec ses lipizzans blancs dans le manège d’hiver baroque de la Hofburg.', 'Le billet pour l’entraînement du matin coûte moins cher qu’un spectacle, pour la même atmosphère.'],
      it: ['Scuola di equitazione spagnola', 'La più antica scuola di equitazione classica, con i lipizzani bianchi nel barocco maneggio d’inverno della Hofburg.', 'Il biglietto per l’allenamento del mattino costa meno dello spettacolo e l’atmosfera è la stessa.'],
    }, { address: 'Michaelerplatz 1' }),
    P('kahlenberg', 'nature', 48.2765, 16.3378, CITY, 4.6, 26000, ['views', 'hiking', 'wine'], {
      ru: ['Каленберг и виноградники', 'Холм Венского леса над городом с видом на Дунай и Вену; оттуда тропы спускаются через виноградники к деревням с винными тавернами-хойригерами.', 'Автобус 38A до вершины, вниз — пешком по маршруту Wiener Wanderweg 1 к Нусдорфу.'],
      en: ['Kahlenberg and the vineyards', 'A Vienna Woods hill above the city with a view over the Danube and Vienna; trails lead down through vineyards to villages of Heuriger wine taverns.', 'Bus 38A to the top, then walk down Wiener Wanderweg 1 to Nussdorf.'],
      es: ['Kahlenberg y los viñedos', 'Una colina del Bosque de Viena con vistas al Danubio y la ciudad; los senderos bajan entre viñedos hasta pueblos con tabernas Heuriger.', 'Bus 38A hasta la cima y baja a pie por el Wiener Wanderweg 1 hasta Nussdorf.'],
      de: ['Kahlenberg und Weinberge', 'Ein Wienerwald-Hügel über der Stadt mit Blick auf Donau und Wien; Wege führen durch Weinberge hinab zu Heurigen-Dörfern.', 'Mit dem Bus 38A hinauf, dann den Wiener Wanderweg 1 nach Nußdorf hinunter.'],
      fr: ['Kahlenberg et les vignobles', 'Une colline de la forêt viennoise dominant le Danube et la ville ; des sentiers descendent à travers les vignes vers les villages de Heuriger.', 'Bus 38A jusqu’au sommet, puis descente à pied par le Wiener Wanderweg 1 vers Nussdorf.'],
      it: ['Kahlenberg e i vigneti', 'Una collina del Bosco Viennese con vista sul Danubio e sulla città; i sentieri scendono tra i vigneti fino ai villaggi delle osterie Heuriger.', 'Bus 38A fino in cima, poi a piedi lungo il Wiener Wanderweg 1 fino a Nussdorf.'],
    }, { spot: 'hidden', price: free }),
    P('secession', 'attraction', 48.2006, 16.3657, CHURCH, 4.5, 14000, ['art', 'architecture'], {
      ru: ['Сецессион', 'Белый павильон 1898 года с золотым куполом из лавровых листьев — манифест венского модерна; в подвале — «Бетховенский фриз» Климта.', 'Совместите с рынком Нашмаркт — он прямо за зданием.'],
      en: ['Secession Building', 'An 1898 white pavilion with a golden dome of laurel leaves — the manifesto of Viennese Art Nouveau; Klimt’s Beethoven Frieze is in the basement.', 'Pair it with the Naschmarkt right behind.'],
      es: ['Edificio de la Secesión', 'Un pabellón blanco de 1898 con cúpula dorada de hojas de laurel, manifiesto del modernismo vienés; en el sótano, el Friso de Beethoven de Klimt.', 'Combínalo con el Naschmarkt, justo detrás.'],
      de: ['Secession', 'Ein weißer Pavillon von 1898 mit goldener Lorbeerkuppel – das Manifest des Wiener Jugendstils; im Untergeschoss Klimts Beethovenfries.', 'Mit dem Naschmarkt direkt dahinter verbinden.'],
      fr: ['Palais de la Sécession', 'Un pavillon blanc de 1898 à la coupole dorée de feuilles de laurier, manifeste de l’Art nouveau viennois ; au sous-sol, la Frise Beethoven de Klimt.', 'À combiner avec le Naschmarkt juste derrière.'],
      it: ['Palazzo della Secessione', 'Un padiglione bianco del 1898 con cupola dorata di foglie d’alloro, manifesto della Secessione viennese; nel seminterrato il Fregio di Beethoven di Klimt.', 'Abbinalo al Naschmarkt, proprio dietro.'],
    }, { spot: 'insta', hours: '10:00–18:00', address: 'Friedrichstraße 12' }),

    P('steirereck', 'food', 48.2047, 16.381, FOOD, 4.8, 2700, ['food', 'luxury', 'gardens'], {
      ru: ['Steirereck im Stadtpark', 'Ресторан семьи Райтбауэр в павильоне в Городском парке: австрийские продукты, тележка с десятками хлебов и сыров; три звезды MICHELIN (гид Австрии 2026).', 'Бронируйте за несколько недель; в том же здании есть более простой ресторан Meierei с завтраками.'],
      en: ['Steirereck im Stadtpark', 'The Reitbauer family’s restaurant in a Stadtpark pavilion: Austrian produce, a bread trolley and a cheese trolley; three MICHELIN stars (Austria guide 2026).', 'Book weeks ahead; the same building has the simpler Meierei with breakfasts.'],
      es: ['Steirereck im Stadtpark', 'El restaurante de la familia Reitbauer en un pabellón del Stadtpark: producto austriaco, carro de panes y de quesos; tres estrellas MICHELIN (guía de Austria 2026).', 'Reserva con semanas; en el mismo edificio está el sencillo Meierei con desayunos.'],
      de: ['Steirereck im Stadtpark', 'Das Restaurant der Familie Reitbauer in einem Pavillon im Stadtpark: österreichische Produkte, Brot- und Käsewagen; drei MICHELIN-Sterne (Guide Österreich 2026).', 'Wochen vorher buchen; im selben Haus die einfachere Meierei mit Frühstück.'],
      fr: ['Steirereck im Stadtpark', 'Le restaurant de la famille Reitbauer dans un pavillon du Stadtpark : produits autrichiens, chariots de pains et de fromages ; trois étoiles MICHELIN (guide Autriche 2026).', 'Réservez des semaines avant ; le même bâtiment abrite la Meierei, plus simple, pour le petit-déjeuner.'],
      it: ['Steirereck im Stadtpark', 'Il ristorante della famiglia Reitbauer in un padiglione dello Stadtpark: prodotti austriaci, carrello dei pani e dei formaggi; tre stelle MICHELIN (guida Austria 2026).', 'Prenota settimane prima; nello stesso edificio la più semplice Meierei per la colazione.'],
    }, { price: level(3), michelin: { award: 'star3', year: 2026 }, address: 'Am Heumarkt 2A', menu: [
      ['Tasting menu', undefined, 'дегустационный сет из австрийских продуктов|tasting menu of Austrian produce|menú degustación de producto austriaco|Degustationsmenü aus österreichischen Produkten|menu dégustation de produits autrichiens|menù degustazione di prodotti austriaci'],
      ['Bread trolley', undefined, 'тележка с десятками видов хлеба|trolley of dozens of breads|carro con decenas de panes|Brotwagen mit Dutzenden Sorten|chariot de dizaines de pains|carrello con decine di pani'],
    ] }),
    P('mraz-und-sohn', 'food', 48.2291, 16.3713, FOOD, 4.8, 900, ['food', 'luxury'], {
      ru: ['Mraz & Sohn', 'Семейный ресторан отца и сыновей в 20-м районе: смелая, игровая авторская кухня в непринуждённой обстановке; две звезды MICHELIN (гид Австрии 2026).', 'Едьте на трамвае — ресторан вне туристического центра; бронируйте.'],
      en: ['Mraz & Sohn', 'A father-and-sons restaurant in the 20th district: bold, playful creative cooking in a relaxed setting; two MICHELIN stars (Austria guide 2026).', 'Take the tram — it’s outside the tourist centre; book ahead.'],
      es: ['Mraz & Sohn', 'Un restaurante de padre e hijos en el distrito 20: cocina creativa, atrevida y lúdica en un ambiente relajado; dos estrellas MICHELIN (guía de Austria 2026).', 'Ve en tranvía, está fuera del centro turístico; reserva.'],
      de: ['Mraz & Sohn', 'Ein Familienrestaurant von Vater und Söhnen im 20. Bezirk: mutige, verspielte kreative Küche in entspannter Atmosphäre; zwei MICHELIN-Sterne (Guide Österreich 2026).', 'Mit der Straßenbahn hinfahren – außerhalb des Zentrums; reservieren.'],
      fr: ['Mraz & Sohn', 'Un restaurant père et fils dans le 20e arrondissement : cuisine créative audacieuse et ludique dans un cadre détendu ; deux étoiles MICHELIN (guide Autriche 2026).', 'Prenez le tram, c’est hors du centre touristique ; réservez.'],
      it: ['Mraz & Sohn', 'Un ristorante di padre e figli nel 20° distretto: cucina creativa audace e giocosa in un ambiente rilassato; due stelle MICHELIN (guida Austria 2026).', 'Prendi il tram, è fuori dal centro turistico; prenota.'],
    }, { price: level(3), michelin: { award: 'star2', year: 2026 }, address: 'Wallensteinstraße 59', menu: [
      ['Tasting menu', undefined, 'авторский дегустационный сет|creative tasting menu|menú degustación creativo|kreatives Degustationsmenü|menu dégustation créatif|menù degustazione creativo'],
      ['Wine pairing', undefined, 'винное сопровождение|wine pairing|maridaje de vinos|Weinbegleitung|accord mets-vins|abbinamento vini'],
    ] }),
    P('plachutta-wollzeile', 'food', 48.2088, 16.377, FOOD, 4.5, 15000, ['food'], {
      ru: ['Plachutta (Вольцайле)', 'Ресторан, где главное блюдо — тафельшпиц: отварная говядина в медной кастрюле с бульоном, яблочным хреном и жареным картофелем.', 'Сначала пьют бульон, потом едят мозговую косточку на хлебе и само мясо — официант подскажет порядок.'],
      en: ['Plachutta (Wollzeile)', 'A restaurant built around Tafelspitz: boiled beef served in a copper pot of broth with apple horseradish and fried potatoes.', 'Drink the broth first, then marrow on toast and the beef — the waiter will guide you.'],
      es: ['Plachutta (Wollzeile)', 'Un restaurante dedicado al Tafelspitz: ternera hervida en olla de cobre con su caldo, rábano picante con manzana y patatas fritas.', 'Primero el caldo, luego el tuétano en pan y la carne; el camarero te guía.'],
      de: ['Plachutta (Wollzeile)', 'Ein Restaurant rund um den Tafelspitz: im Kupfertopf mit Suppe serviert, dazu Apfelkren und Röstkartoffeln.', 'Zuerst die Suppe, dann das Markscheiben-Brot und das Fleisch – der Kellner erklärt die Reihenfolge.'],
      fr: ['Plachutta (Wollzeile)', 'Un restaurant dédié au Tafelspitz : bœuf bouilli servi en marmite de cuivre avec son bouillon, raifort aux pommes et pommes sautées.', 'D’abord le bouillon, puis la moelle sur pain et la viande : le serveur vous guide.'],
      it: ['Plachutta (Wollzeile)', 'Un ristorante dedicato al Tafelspitz: manzo bollito servito nella pentola di rame con il brodo, cren alle mele e patate arrosto.', 'Prima il brodo, poi il midollo sul pane e la carne: il cameriere ti guida.'],
    }, { price: level(2), address: 'Wollzeile 38', menu: [
      ['Tafelspitz', undefined, 'отварная говядина в бульоне с хреном и картофелем|boiled beef in broth with horseradish and potatoes|ternera hervida en caldo con rábano y patatas|Tafelspitz in Suppe mit Kren und Erdäpfeln|bœuf bouilli au bouillon, raifort et pommes|manzo bollito in brodo con cren e patate'],
      ['Apfelkren', undefined, 'хрен с яблоком|apple horseradish|rábano picante con manzana|Apfelkren|raifort aux pommes|cren alle mele'],
    ] }),
    P('cafe-sacher', 'food', 48.2039, 16.3696, CAFE, 4.3, 25000, ['food', 'history'], {
      ru: ['Café Sacher', 'Кафе отеля «Захер» напротив Оперы, где подают оригинальный торт «Захер» с абрикосовым джемом и несладкими сливками.', 'Очередь утром короче; торт можно взять с собой в деревянной коробке.'],
      en: ['Café Sacher', 'The Hotel Sacher café opposite the Opera, serving the original Sachertorte with apricot jam and unsweetened whipped cream.', 'The queue is shorter in the morning; you can take a cake away in a wooden box.'],
      es: ['Café Sacher', 'El café del Hotel Sacher frente a la Ópera, con la Sachertorte original de mermelada de albaricoque y nata sin azúcar.', 'Por la mañana hay menos cola; puedes llevarte la tarta en caja de madera.'],
      de: ['Café Sacher', 'Das Café des Hotel Sacher gegenüber der Oper mit der Original Sacher-Torte mit Marillenmarmelade und ungesüßtem Schlagobers.', 'Morgens ist die Schlange kürzer; die Torte gibt es auch in der Holzkiste zum Mitnehmen.'],
      fr: ['Café Sacher', 'Le café de l’hôtel Sacher face à l’Opéra, qui sert l’authentique Sachertorte à la confiture d’abricot et crème non sucrée.', 'File plus courte le matin ; le gâteau existe à emporter en boîte en bois.'],
      it: ['Café Sacher', 'Il caffè dell’Hotel Sacher di fronte all’Opera, con l’originale Sachertorte alla confettura di albicocche e panna non zuccherata.', 'Al mattino la coda è più corta; la torta si può portare via nella scatola di legno.'],
    }, { price: level(2), address: 'Philharmonikerstraße 4', menu: [
      ['Original Sacher-Torte', undefined, 'шоколадный торт с абрикосовым джемом и сливками|chocolate cake with apricot jam and cream|tarta de chocolate con albaricoque y nata|Schokoladentorte mit Marillenmarmelade und Obers|gâteau au chocolat, abricot et crème|torta al cioccolato con albicocche e panna'],
      ['Wiener Melange', undefined, 'кофе с молоком и молочной пенкой|coffee with milk and foam|café con leche y espuma|Kaffee mit Milch und Milchschaum|café au lait mousseux|caffè con latte e schiuma'],
    ] }),
    P('zum-schwarzen-kameel', 'food', 48.21, 16.3685, FOOD, 4.5, 6700, ['food', 'history'], {
      ru: ['Zum Schwarzen Kameel', 'Деликатесная лавка и бар с 1618 года в центре: крошечные бутерброды с ветчиной и хреном, бокал вина стоя у стойки; за стеной — ресторан в стиле модерн.', 'Возьмите бутерброд с варёной ветчиной и свежим хреном и бокал грюнер-вельтлинера.'],
      en: ['Zum Schwarzen Kameel', 'A deli and bar since 1618 in the centre: tiny sandwiches with ham and horseradish and a glass of wine at the counter; an Art Nouveau restaurant next door.', 'Order the cooked-ham sandwich with fresh horseradish and a glass of Grüner Veltliner.'],
      es: ['Zum Schwarzen Kameel', 'Una charcutería y bar desde 1618 en el centro: pequeños bocadillos de jamón y rábano y una copa de vino de pie; al lado, un restaurante modernista.', 'Pide el de jamón cocido con rábano fresco y un Grüner Veltliner.'],
      de: ['Zum Schwarzen Kameel', 'Ein Delikatessengeschäft mit Bar seit 1618 im Zentrum: kleine Brötchen mit Schinken und Kren und ein Glas Wein am Tresen; nebenan ein Jugendstilrestaurant.', 'Das Beinschinkenbrötchen mit frischem Kren und einen Grünen Veltliner bestellen.'],
      fr: ['Zum Schwarzen Kameel', 'Une épicerie fine et bar depuis 1618 au centre : petits sandwichs jambon-raifort et un verre de vin au comptoir ; restaurant Art nouveau à côté.', 'Prenez le sandwich jambon cuit et raifort frais et un Grüner Veltliner.'],
      it: ['Zum Schwarzen Kameel', 'Una gastronomia con bar dal 1618 in centro: piccoli panini con prosciutto e cren e un bicchiere di vino al banco; accanto un ristorante liberty.', 'Ordina il panino con prosciutto cotto e cren fresco e un Grüner Veltliner.'],
    }, { price: level(2), address: 'Bognergasse 5', menu: [
      ['Beinschinken mit Kren', undefined, 'бутерброд с варёной ветчиной и свежим хреном|cooked ham with fresh horseradish on bread|jamón cocido con rábano fresco|Beinschinken mit frischem Kren|jambon cuit et raifort frais|prosciutto cotto con cren fresco'],
      ['Grüner Veltliner', undefined, 'австрийское белое вино|Austrian white wine|vino blanco austriaco|österreichischer Weißwein|vin blanc autrichien|vino bianco austriaco'],
    ] }),
    P('trzesniewski', 'food', 48.2088, 16.37, FOOD, 4.5, 8100, ['food', 'streetfood'], {
      ru: ['Trześniewski', 'Венская закусочная с 1902 года: крошечные открытые бутерброды с намазками — яичной, с селёдкой, с паприкой — и маленькое пиво «пфифф».', 'Берите 3–4 разных бутерброда и пфифф — так здесь перекусывают венцы.'],
      en: ['Trześniewski', 'A Viennese snack bar since 1902: tiny open sandwiches with spreads — egg, herring, paprika — and a small “Pfiff” beer.', 'Take 3–4 different sandwiches and a Pfiff — the Viennese way to snack.'],
      es: ['Trześniewski', 'Un bar vienés desde 1902: diminutos montaditos con cremas —huevo, arenque, pimentón— y una cerveza pequeña “Pfiff”.', 'Pide 3–4 distintos y un Pfiff, como los vieneses.'],
      de: ['Trześniewski', 'Eine Wiener Brötchenbar seit 1902: winzige belegte Brötchen mit Aufstrichen – Ei, Hering, Paprika – und ein kleines Bier, der „Pfiff“.', '3–4 verschiedene Brötchen und einen Pfiff nehmen – so jausnen Wiener.'],
      fr: ['Trześniewski', 'Un snack viennois depuis 1902 : minuscules tartines à tartiner — œuf, hareng, paprika — et une petite bière « Pfiff ».', 'Prenez 3–4 tartines différentes et un Pfiff, à la viennoise.'],
      it: ['Trześniewski', 'Uno snack bar viennese dal 1902: minuscole tartine con creme spalmabili, uovo, aringa, paprika, e una birra piccola “Pfiff”.', 'Prendi 3–4 tartine diverse e un Pfiff, come i viennesi.'],
    }, { price: level(1), address: 'Dorotheergasse 1', menu: [
      ['Brötchen', undefined, 'открытые мини-бутерброды с намазками|small open sandwiches with spreads|montaditos con cremas|belegte Brötchen mit Aufstrichen|petites tartines à tartiner|tartine con creme spalmabili'],
      ['Pfiff', undefined, 'маленькое пиво 0,125 л|small 0.125 l beer|cerveza pequeña de 0,125 l|kleines Bier 0,125 l|petite bière de 12,5 cl|birra piccola da 0,125 l'],
    ] }),
    P('cafe-sperl', 'food', 48.2003, 16.3616, CAFE, 4.5, 7900, ['food', 'history'], {
      ru: ['Café Sperl', 'Классическая венская кофейня 1880 года с бильярдными столами, мраморными столиками и газетами на держателях; здесь снимали «Перед рассветом».', 'Закажите меланж и штрудель и посидите с газетой — так проводят время венцы.'],
      en: ['Café Sperl', 'A classic 1880 Viennese coffee house with billiard tables, marble tables and newspapers on holders; scenes of “Before Sunrise” were filmed here.', 'Order a Melange and strudel and linger over a newspaper, Viennese style.'],
      es: ['Café Sperl', 'Un café vienés clásico de 1880 con billares, mesas de mármol y periódicos en soportes; aquí se rodaron escenas de “Antes del amanecer”.', 'Pide un Melange y strudel y quédate con un periódico, al estilo vienés.'],
      de: ['Café Sperl', 'Ein klassisches Wiener Kaffeehaus von 1880 mit Billardtischen, Marmortischen und Zeitungen in Haltern; hier wurde „Before Sunrise“ gedreht.', 'Melange und Strudel bestellen und mit einer Zeitung verweilen – wie die Wiener.'],
      fr: ['Café Sperl', 'Un café viennois classique de 1880 : billards, tables de marbre et journaux sur porte-journaux ; des scènes de « Before Sunrise » y furent tournées.', 'Prenez un Melange et un strudel et attardez-vous avec un journal, à la viennoise.'],
      it: ['Café Sperl', 'Un classico caffè viennese del 1880 con biliardi, tavolini di marmo e giornali sui supporti; qui si girarono scene di “Prima dell’alba”.', 'Ordina un Melange e uno strudel e resta con un giornale, alla viennese.'],
    }, { price: level(1), address: 'Gumpendorfer Straße 11', menu: [
      ['Apfelstrudel', undefined, 'яблочный штрудель|apple strudel|strudel de manzana|Apfelstrudel|strudel aux pommes|strudel di mele'],
      ['Wiener Melange', undefined, 'кофе с молоком и пенкой|coffee with milk and foam|café con leche y espuma|Kaffee mit Milchschaum|café au lait mousseux|caffè con latte e schiuma'],
    ] }),
    P('gmoakeller', 'food', 48.2023, 16.378, FOOD, 4.5, 4300, ['food'], {
      ru: ['Gmoakeller', 'Венский трактир 1858 года в сводчатом подвале у Концертхауса: шницель, гуляш, печёночные кнедлики и австрийские вина.', 'Удобно поужинать перед концертом в Концертхаусе; бронируйте.'],
      en: ['Gmoakeller', 'An 1858 Viennese tavern in a vaulted cellar by the Konzerthaus: schnitzel, goulash, liver dumplings and Austrian wines.', 'Handy for dinner before a Konzerthaus concert; book ahead.'],
      es: ['Gmoakeller', 'Una taberna vienesa de 1858 en un sótano abovedado junto al Konzerthaus: schnitzel, gulash, albóndigas de hígado y vinos austriacos.', 'Práctico para cenar antes de un concierto; reserva.'],
      de: ['Gmoakeller', 'Ein Wiener Beisl von 1858 in einem Gewölbekeller beim Konzerthaus: Schnitzel, Gulasch, Leberknödel und österreichische Weine.', 'Praktisch fürs Abendessen vor einem Konzert; reservieren.'],
      fr: ['Gmoakeller', 'Une taverne viennoise de 1858 dans une cave voûtée près du Konzerthaus : schnitzel, goulache, quenelles de foie et vins autrichiens.', 'Pratique pour dîner avant un concert ; réservez.'],
      it: ['Gmoakeller', 'Un’osteria viennese del 1858 in una cantina a volta vicino al Konzerthaus: schnitzel, gulasch, canederli di fegato e vini austriaci.', 'Comodo per cenare prima di un concerto; prenota.'],
    }, { price: level(2), address: 'Am Heumarkt 25', menu: [
      ['Wiener Schnitzel', undefined, 'венский шницель из телятины|breaded veal Wiener schnitzel|escalope vienesa de ternera|Wiener Schnitzel vom Kalb|escalope viennoise de veau|cotoletta viennese di vitello'],
      ['Rindsgulasch', undefined, 'говяжий гуляш|beef goulash|gulash de ternera|Rindsgulasch|goulache de bœuf|gulasch di manzo'],
    ] }),
    P('mayer-am-pfarrplatz', 'food', 48.2558, 16.343, MARKET, 4.4, 4600, ['food', 'wine'], {
      ru: ['Mayer am Pfarrplatz', 'Хойригер — винная таверна винодела — в Хайлигенштадте, в доме, где в 1817 году жил Бетховен; в саду пьют молодое вино и едят из буфета.', 'Хойригер — это венская традиция: вино своего виноградника, холодные закуски и иногда музыка шраммель.'],
      en: ['Mayer am Pfarrplatz', 'A Heuriger — a winemaker’s tavern — in Heiligenstadt, in a house where Beethoven lived in 1817; young wine in the garden and food from the buffet.', 'The Heuriger is a Viennese tradition: the house’s own wine, cold cuts and sometimes Schrammel music.'],
      es: ['Mayer am Pfarrplatz', 'Un Heuriger —taberna de viticultor— en Heiligenstadt, en una casa donde vivió Beethoven en 1817; vino joven en el jardín y bufé.', 'El Heuriger es una tradición vienesa: vino de la casa, embutidos y a veces música Schrammel.'],
      de: ['Mayer am Pfarrplatz', 'Ein Heuriger in Heiligenstadt in einem Haus, in dem Beethoven 1817 wohnte; junger Wein im Garten und Essen vom Buffet.', 'Der Heurige ist Wiener Tradition: eigener Wein, kalte Jause und manchmal Schrammelmusik.'],
      fr: ['Mayer am Pfarrplatz', 'Un Heuriger, taverne de vigneron, à Heiligenstadt, dans une maison où vécut Beethoven en 1817 ; vin nouveau au jardin et buffet.', 'Le Heuriger est une tradition viennoise : vin maison, charcuterie et parfois musique Schrammel.'],
      it: ['Mayer am Pfarrplatz', 'Un Heuriger, osteria del vignaiolo, a Heiligenstadt, in una casa dove visse Beethoven nel 1817; vino giovane in giardino e buffet.', 'Lo Heuriger è una tradizione viennese: vino della casa, salumi e a volte musica Schrammel.'],
    }, { price: level(2), address: 'Pfarrplatz 2', menu: [
      ['Gemischter Satz', undefined, 'венское купажированное белое вино|Viennese field-blend white wine|vino blanco de mezcla vienés|Wiener Gemischter Satz|vin blanc d’assemblage viennois|vino bianco uvaggio viennese'],
      ['Heurigenbuffet', undefined, 'холодные закуски и жаркое из буфета|cold cuts and roasts from the buffet|embutidos y asados del bufé|Jause und Braten vom Buffet|charcuterie et rôtis au buffet|salumi e arrosti dal buffet'],
    ] }),
    P('gasthaus-poschl', 'food', 48.2066, 16.373, FOOD, 4.5, 3900, ['food'], {
      ru: ['Gasthaus Pöschl', 'Небольшой уютный трактир у тихой Францисканской площади на Вайбурггассе: шницель, тафельшпиц, сезонные блюда и австрийские вина.', 'Бронирования не всегда принимают — приходите пораньше вечером.'],
      en: ['Gasthaus Pöschl', 'A small, cosy tavern on a quiet square off Weihburggasse: schnitzel, Tafelspitz, seasonal dishes and Austrian wines.', 'Bookings aren’t always taken — come early in the evening.'],
      es: ['Gasthaus Pöschl', 'Una pequeña y acogedora taberna en una plaza tranquila junto a Weihburggasse: schnitzel, Tafelspitz, platos de temporada y vinos austriacos.', 'No siempre aceptan reservas: llega temprano por la noche.'],
      de: ['Gasthaus Pöschl', 'Ein kleines, gemütliches Gasthaus an einem ruhigen Platz bei der Weihburggasse: Schnitzel, Tafelspitz, saisonale Gerichte und österreichische Weine.', 'Reservierungen nicht immer möglich – abends früh kommen.'],
      fr: ['Gasthaus Pöschl', 'Une petite auberge chaleureuse sur une place tranquille près de la Weihburggasse : schnitzel, Tafelspitz, plats de saison et vins autrichiens.', 'Les réservations ne sont pas toujours prises : venez tôt le soir.'],
      it: ['Gasthaus Pöschl', 'Una piccola e accogliente osteria su una piazzetta tranquilla vicino alla Weihburggasse: schnitzel, Tafelspitz, piatti di stagione e vini austriaci.', 'Non sempre accettano prenotazioni: arriva presto la sera.'],
    }, { price: level(2), address: 'Weihburggasse 17', menu: [
      ['Wiener Schnitzel', undefined, 'венский шницель|Wiener schnitzel|escalope vienesa|Wiener Schnitzel|escalope viennoise|cotoletta viennese'],
      ['Kaiserschmarrn', undefined, 'рваный омлет-блин с изюмом и сливовым компотом|shredded pancake with raisins and plum compote|tortita troceada con pasas y compota de ciruela|Kaiserschmarrn mit Rosinen und Zwetschkenröster|crêpe déchirée aux raisins et compote de prunes|frittata dolce a pezzi con uvetta e composta di prugne'],
    ] }),
  ],
  routes: [
    D(['=vienna-cafe-central', 'hofburg', 'spanish-riding-school', '=vienna-stephansdom', 'trzesniewski', 'albertina', 'state-opera', '=vienna-figlmuller'],
      'Хофбург, собор Святого Стефана и Опера|The Hofburg, St Stephen’s and the Opera|El Hofburg, San Esteban y la Ópera|Hofburg, Stephansdom und Oper|La Hofburg, Saint-Étienne et l’Opéra|Hofburg, Santo Stefano e l’Opera'),
    D(['=vienna-schonbrunn', '=vienna-gloriette', '=vienna-naschmarkt', 'secession', 'kunsthistorisches', 'museumsquartier', 'plachutta-wollzeile'],
      'Шёнбрунн, Нашмаркт и музеи|Schönbrunn, the Naschmarkt and the museums|Schönbrunn, el Naschmarkt y los museos|Schönbrunn, Naschmarkt und Museen|Schönbrunn, le Naschmarkt et les musées|Schönbrunn, il Naschmarkt e i musei'),
    D(['cafe-sacher', '=vienna-karlskirche', '=vienna-belvedere', 'gmoakeller', 'hundertwasserhaus', 'prater-riesenrad', 'steirereck'],
      'Бельведер, Хундертвассер и Пратер|The Belvedere, Hundertwasser and the Prater|El Belvedere, Hundertwasser y el Prater|Belvedere, Hundertwasser und Prater|Le Belvédère, Hundertwasser et le Prater|Il Belvedere, Hundertwasser e il Prater'),
  ],
};

export default pack;
