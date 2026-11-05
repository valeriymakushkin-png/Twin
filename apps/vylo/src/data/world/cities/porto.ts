import type { CityPack } from '../types';
import { free, level, makeDay, makePlace } from './_kit.ts';

const P = makePlace('porto');
const D = makeDay('porto');
const RIVER = 'mrYnmSZMUHM';
const MARKET = 'CDY7dR51_c8';
const CITY = 'Gq166GBSZ0U';
const VIEW = '7xiADv3VZ0k';
const GARDEN = 'Jc4LH4jZsjM';
const TILES = 'Owq7WrrOpAE';

const pack: CityPack = {
  country: 'PT',
  city: 'porto',
  places: [
    P('torre-dos-clerigos', 'attraction', 41.1456, -8.6146, CITY, 4.6, 52000, ['views', 'architecture'], {
      ru: ['Башня Клеригуш', 'Барочная колокольня XVIII века высотой 75 м — символ Порту; 240 ступеней ведут к круговому виду на черепичные крыши и Дору.', 'Возьмите билет на закатный слот онлайн.'],
      en: ['Clérigos Tower', 'An 18th-century Baroque bell tower, 75 m tall and Porto’s symbol; 240 steps lead to a 360° view over tiled roofs and the Douro.', 'Book a sunset slot online.'],
      es: ['Torre de los Clérigos', 'Un campanario barroco del siglo XVIII de 75 m, símbolo de Oporto; 240 escalones llevan a una vista de 360° sobre tejados y el Duero.', 'Reserva online la franja del atardecer.'],
      de: ['Torre dos Clérigos', 'Ein barocker Glockenturm aus dem 18. Jh., 75 m hoch und Portos Wahrzeichen; 240 Stufen führen zum Rundblick über Dächer und Douro.', 'Online ein Zeitfenster zum Sonnenuntergang buchen.'],
      fr: ['Tour des Clérigos', 'Un clocher baroque du XVIIIe de 75 m, symbole de Porto ; 240 marches mènent à une vue à 360° sur les toits et le Douro.', 'Réservez en ligne un créneau au coucher du soleil.'],
      it: ['Torre dos Clérigos', 'Un campanile barocco del Settecento alto 75 m, simbolo di Porto; 240 gradini portano a una vista a 360° su tetti e Douro.', 'Prenota online la fascia del tramonto.'],
    }, { spot: 'insta', hours: '09:00–23:00' }),
    P('sao-bento-station', 'attraction', 41.1456, -8.6105, TILES, 4.7, 41000, ['architecture', 'art', 'photo'], {
      ru: ['Вокзал Сан-Бенту', 'Действующий вокзал начала XX века, чей вестибюль покрыт 20 тысячами изразцов азулежу со сценами истории Португалии.', 'Вход бесплатный; утром в зале меньше людей и мягче свет.'],
      en: ['São Bento Station', 'A working early-20th-century station whose hall is covered in 20,000 azulejo tiles depicting Portuguese history.', 'Free to enter; mornings bring fewer people and softer light.'],
      es: ['Estación de São Bento', 'Una estación de principios del siglo XX en uso cuyo vestíbulo cubren 20 000 azulejos con escenas de la historia portuguesa.', 'Entrada libre; por la mañana hay menos gente y mejor luz.'],
      de: ['Bahnhof São Bento', 'Ein aktiver Bahnhof vom Anfang des 20. Jh., dessen Halle 20 000 Azulejos mit Szenen portugiesischer Geschichte bedecken.', 'Eintritt frei; morgens weniger Menschen und weicheres Licht.'],
      fr: ['Gare de São Bento', 'Une gare en activité du début du XXe dont le hall est couvert de 20 000 azulejos racontant l’histoire du Portugal.', 'Entrée libre ; moins de monde et plus belle lumière le matin.'],
      it: ['Stazione di São Bento', 'Una stazione in funzione del primo Novecento il cui atrio è coperto da 20 000 azulejos con scene della storia portoghese.', 'Ingresso libero; al mattino meno gente e luce più morbida.'],
    }, { spot: 'insta', price: free, hours: 'always' }),
    P('se-cathedral', 'attraction', 41.1428, -8.6112, CITY, 4.5, 33000, ['history', 'architecture', 'views'], {
      ru: ['Кафедральный собор Сé', 'Крепостеподобный собор XII века на высшей точке старого города: готический клуатр в азулежу и вид с террасы на Рибейру.', 'Терраса перед собором бесплатная — один из лучших видов на мост Луиш I.'],
      en: ['Porto Cathedral (Sé)', 'A fortress-like 12th-century cathedral on the old town’s highest point: a Gothic cloister in azulejos and a terrace view over Ribeira.', 'The terrace outside is free — one of the best views of the Luís I Bridge.'],
      es: ['Catedral de Oporto (Sé)', 'Una catedral del siglo XII con aspecto de fortaleza en lo alto del casco viejo: claustro gótico con azulejos y vista a la Ribeira.', 'La terraza es gratis: de las mejores vistas del puente Luís I.'],
      de: ['Kathedrale Sé', 'Eine festungsartige Kathedrale aus dem 12. Jh. auf dem höchsten Punkt der Altstadt: gotischer Kreuzgang mit Azulejos und Terrassenblick auf die Ribeira.', 'Die Terrasse davor ist gratis – einer der besten Blicke auf die Brücke Luís I.'],
      fr: ['Cathédrale de Porto (Sé)', 'Une cathédrale-forteresse du XIIe au point culminant de la vieille ville : cloître gothique en azulejos et terrasse sur la Ribeira.', 'La terrasse devant est gratuite, l’une des plus belles vues sur le pont Luís-Ier.'],
      it: ['Cattedrale di Porto (Sé)', 'Una cattedrale-fortezza del XII secolo nel punto più alto della città vecchia: chiostro gotico con azulejos e terrazza sulla Ribeira.', 'La terrazza davanti è gratuita: una delle viste migliori sul ponte Luís I.'],
    }, { hours: '09:00–18:30' }),
    P('palacio-da-bolsa', 'attraction', 41.1412, -8.6159, CITY, 4.6, 21000, ['history', 'architecture'], {
      ru: ['Дворец Биржи (Палацио-да-Болса)', 'Здание торговой палаты XIX века с роскошным Арабским залом в мавританском стиле, покрытым золотом.', 'Только экскурсии по времени; билет покупайте сразу по приходу.'],
      en: ['Palácio da Bolsa', 'The 19th-century stock exchange with a lavish gilded Moorish-style Arab Room.', 'Timed guided tours only; buy your slot as soon as you arrive.'],
      es: ['Palacio de la Bolsa', 'La bolsa de comercio del siglo XIX con el suntuoso Salón Árabe de estilo morisco cubierto de oro.', 'Solo visitas guiadas con hora; compra el turno al llegar.'],
      de: ['Palácio da Bolsa', 'Die Börse aus dem 19. Jh. mit dem prachtvoll vergoldeten Arabischen Saal im maurischen Stil.', 'Nur Führungen mit Zeitfenster; den Slot gleich bei Ankunft kaufen.'],
      fr: ['Palais de la Bourse', 'La bourse du XIXe et son somptueux salon arabe de style mauresque couvert d’or.', 'Visites guidées horodatées uniquement ; achetez votre créneau en arrivant.'],
      it: ['Palazzo della Borsa', 'La borsa ottocentesca con la sontuosa Sala Araba in stile moresco ricoperta d’oro.', 'Solo visite guidate a orario; compra il turno appena arrivi.'],
    }, { hours: '09:00–18:30', address: 'Rua Ferreira Borges' }),
    P('igreja-sao-francisco', 'attraction', 41.1408, -8.6157, CITY, 4.6, 16000, ['art', 'history'], {
      ru: ['Церковь Святого Франциска', 'Готическая церковь снаружи и барочный «золотой взрыв» внутри — резьба, покрытая сусальным золотом; в подвалах — катакомбы.', 'Внутри фотографировать нельзя; катакомбы с костницей — по тому же билету.'],
      en: ['Church of São Francisco', 'Gothic outside and a Baroque “explosion of gold” inside — carved wood covered in gold leaf; catacombs lie beneath.', 'No photos inside; the catacombs with the ossuary are on the same ticket.'],
      es: ['Iglesia de San Francisco', 'Gótica por fuera y una “explosión de oro” barroca por dentro, talla cubierta de pan de oro; debajo, catacumbas.', 'No se fotografía dentro; las catacumbas con osario van en la misma entrada.'],
      de: ['Kirche São Francisco', 'Außen gotisch, innen eine barocke „Goldexplosion“ – Schnitzwerk mit Blattgold; darunter Katakomben.', 'Drinnen keine Fotos; die Katakomben mit Beinhaus gehören zum Ticket.'],
      fr: ['Église São Francisco', 'Gothique dehors, « explosion d’or » baroque dedans : boiseries couvertes de feuille d’or ; catacombes en dessous.', 'Photos interdites ; les catacombes et l’ossuaire sont inclus dans le billet.'],
      it: ['Chiesa di San Francesco', 'Gotica fuori e un’“esplosione d’oro” barocca dentro, legno intagliato coperto di foglia d’oro; sotto le catacombe.', 'Niente foto dentro; le catacombe con l’ossario sono incluse nel biglietto.'],
    }, { hours: '09:00–19:00' }),
    P('port-wine-cellars', 'attraction', 41.134, -8.615, RIVER, 4.7, 31000, ['wine', 'history'], {
      ru: ['Портвейновые погреба Гайи', 'Погреба на левом берегу Дору в Вила-Нова-ди-Гая, где выдерживают портвейн: экскурсии по бочкам и дегустации у Taylor’s, Graham’s и других домов.', 'Бронируйте экскурсию с дегустацией; от Рибейры — пешком через нижний ярус моста.'],
      en: ['Port wine cellars of Gaia', 'Cellars on the Douro’s south bank in Vila Nova de Gaia where port ages: cask tours and tastings at Taylor’s, Graham’s and other houses.', 'Book a tour with tasting; walk over the bridge’s lower deck from Ribeira.'],
      es: ['Bodegas de oporto de Gaia', 'Bodegas en la orilla sur del Duero en Vila Nova de Gaia donde envejece el oporto: visitas y catas en Taylor’s, Graham’s y otras casas.', 'Reserva una visita con cata; cruza a pie por el tablero bajo del puente.'],
      de: ['Portweinkeller von Gaia', 'Keller am Südufer des Douro in Vila Nova de Gaia, wo Portwein reift: Fasskeller-Führungen und Verkostungen bei Taylor’s, Graham’s und anderen Häusern.', 'Eine Führung mit Verkostung buchen; von der Ribeira über das untere Brückendeck laufen.'],
      fr: ['Caves de porto de Gaia', 'Des caves sur la rive sud du Douro à Vila Nova de Gaia où vieillit le porto : visites des fûts et dégustations chez Taylor’s, Graham’s et d’autres maisons.', 'Réservez une visite avec dégustation ; traversez à pied par le tablier bas du pont.'],
      it: ['Cantine di porto di Gaia', 'Cantine sulla riva sud del Douro a Vila Nova de Gaia dove invecchia il porto: visite alle botti e degustazioni da Taylor’s, Graham’s e altre case.', 'Prenota una visita con degustazione; attraversa a piedi il ponte inferiore.'],
    }, { address: 'Vila Nova de Gaia' }),
    P('serralves', 'attraction', 41.1597, -8.6598, GARDEN, 4.6, 26000, ['art', 'museums', 'gardens'], {
      ru: ['Фонд Серралвеш', 'Музей современного искусства Алвару Сизы, розовая вилла ар-деко и огромный парк с подвесной тропой по кронам деревьев.', 'Заложите полдня; Treetop Walk в парке — изюминка.'],
      en: ['Serralves', 'Álvaro Siza’s contemporary art museum, a pink Art Deco villa and a vast park with a treetop walkway.', 'Allow half a day; the Treetop Walk is a highlight.'],
      es: ['Fundación de Serralves', 'El museo de arte contemporáneo de Álvaro Siza, una villa art déco rosa y un gran parque con pasarela entre las copas.', 'Dedica medio día; el Treetop Walk es lo mejor.'],
      de: ['Serralves', 'Álvaro Sizas Museum für zeitgenössische Kunst, eine rosa Art-déco-Villa und ein riesiger Park mit Baumwipfelpfad.', 'Einen halben Tag einplanen; der Treetop Walk ist ein Höhepunkt.'],
      fr: ['Fondation Serralves', 'Le musée d’art contemporain d’Álvaro Siza, une villa Art déco rose et un vaste parc avec passerelle dans les cimes.', 'Comptez une demi-journée ; le Treetop Walk est le clou.'],
      it: ['Fondazione Serralves', 'Il museo d’arte contemporanea di Álvaro Siza, una villa art déco rosa e un grande parco con passerella tra le chiome.', 'Calcola mezza giornata; il Treetop Walk è il pezzo forte.'],
    }, { hours: '10:00–19:00', address: 'Rua Dom João de Castro 210' }),
    P('foz-do-douro', 'nature', 41.15, -8.676, VIEW, 4.7, 18000, ['beaches', 'sunset', 'views'], {
      ru: ['Фош-ду-Дору', 'Место, где Дору впадает в Атлантику: маяк Фелгейраш, волны о мол, набережная и пляжи; сюда идёт исторический трамвай №1.', 'Доедьте на старом трамвае №1 вдоль реки; закат на молу — лучший в городе.'],
      en: ['Foz do Douro', 'Where the Douro meets the Atlantic: the Felgueiras lighthouse, waves crashing on the pier, a promenade and beaches; historic tram 1 runs here.', 'Ride vintage tram 1 along the river; the pier sunset is the city’s best.'],
      es: ['Foz do Douro', 'Donde el Duero llega al Atlántico: el faro de Felgueiras, olas contra el espigón, paseo y playas; aquí llega el tranvía histórico 1.', 'Ven en el viejo tranvía 1 junto al río; el atardecer en el espigón es el mejor.'],
      de: ['Foz do Douro', 'Wo der Douro in den Atlantik mündet: Leuchtturm Felgueiras, Wellen an der Mole, Promenade und Strände; die historische Tram 1 fährt hierher.', 'Mit der alten Tram 1 am Fluss entlang; der Sonnenuntergang an der Mole ist der beste.'],
      fr: ['Foz do Douro', 'Là où le Douro rejoint l’Atlantique : phare de Felgueiras, vagues sur la jetée, promenade et plages ; le tram historique 1 y mène.', 'Venez en vieux tram 1 le long du fleuve ; coucher de soleil inégalé sur la jetée.'],
      it: ['Foz do Douro', 'Dove il Douro incontra l’Atlantico: faro di Felgueiras, onde sul molo, lungomare e spiagge; ci arriva lo storico tram 1.', 'Arriva col vecchio tram 1 lungo il fiume; il tramonto sul molo è il migliore.'],
    }, { spot: 'insta', price: free }),
    P('carmo-church', 'attraction', 41.1474, -8.6162, TILES, 4.7, 21000, ['architecture', 'photo'], {
      ru: ['Церковь Кармо', 'Барочная церковь с огромным боковым фасадом из бело-синих азулежу; рядом — самый узкий дом Порту шириной около метра, разделяющий две церкви.', 'Найдите узкий домик между двумя церквями — его построили, чтобы монахи и монахини не общались.'],
      en: ['Carmo Church', 'A Baroque church with a huge side façade of blue-and-white azulejos; beside it Porto’s narrowest house, about a metre wide, separates two churches.', 'Spot the slim house between the two churches — built so monks and nuns couldn’t meet.'],
      es: ['Iglesia do Carmo', 'Una iglesia barroca con una enorme fachada lateral de azulejos azules y blancos; a su lado, la casa más estrecha de Oporto separa dos iglesias.', 'Busca la casita estrecha entre las dos iglesias: se hizo para separar monjes y monjas.'],
      de: ['Igreja do Carmo', 'Eine Barockkirche mit riesiger Seitenfassade aus blau-weißen Azulejos; daneben Portos schmalstes Haus, etwa ein Meter breit, zwischen zwei Kirchen.', 'Das schmale Haus zwischen den Kirchen suchen – gebaut, damit Mönche und Nonnen sich nicht trafen.'],
      fr: ['Église du Carmo', 'Une église baroque à l’immense façade latérale d’azulejos bleus et blancs ; à côté, la maison la plus étroite de Porto, large d’un mètre, sépare deux églises.', 'Repérez la maison étroite entre les deux églises, bâtie pour séparer moines et nonnes.'],
      it: ['Chiesa del Carmo', 'Una chiesa barocca con un’enorme facciata laterale di azulejos bianchi e blu; accanto la casa più stretta di Porto, larga circa un metro, separa due chiese.', 'Cerca la casetta stretta tra le due chiese: costruita perché monaci e monache non si incontrassero.'],
    }, { spot: 'insta', price: free }),
    P('douro-valley', 'nature', 41.191, -7.546, RIVER, 4.9, 21000, ['wine', 'nature', 'unesco', 'views'], {
      ru: ['Долина Дору (Пиньян)', 'Террасные виноградники портвейна над рекой — объект ЮНЕСКО — в 2 часах на поезде от Сан-Бенту; станция Пиньян в азулежу и винные кинты.', 'Поезд вдоль реки — сам по себе аттракцион; садитесь справа по ходу из Порту.'],
      en: ['Douro Valley (Pinhão)', 'Terraced port vineyards above the river — a UNESCO site — two hours by train from São Bento; the tiled Pinhão station and wine estates (quintas).', 'The riverside train is an attraction itself; sit on the right leaving Porto.'],
      es: ['Valle del Duero (Pinhão)', 'Viñedos en terrazas sobre el río, Patrimonio UNESCO, a dos horas en tren desde São Bento; la estación de azulejos de Pinhão y las quintas.', 'El tren junto al río ya es una atracción; siéntate a la derecha al salir de Oporto.'],
      de: ['Douro-Tal (Pinhão)', 'Terrassierte Portweinberge über dem Fluss – UNESCO-Welterbe – zwei Stunden mit dem Zug ab São Bento; der Azulejo-Bahnhof Pinhão und Weingüter (Quintas).', 'Die Bahnfahrt am Fluss ist selbst ein Erlebnis; ab Porto rechts sitzen.'],
      fr: ['Vallée du Douro (Pinhão)', 'Des vignobles de porto en terrasses au-dessus du fleuve, classés UNESCO, à deux heures de train de São Bento ; gare de Pinhão en azulejos et quintas.', 'Le train au bord du fleuve est une attraction ; asseyez-vous à droite au départ de Porto.'],
      it: ['Valle del Douro (Pinhão)', 'Vigneti a terrazze del porto sopra il fiume, patrimonio UNESCO, a due ore di treno da São Bento; la stazione di Pinhão con gli azulejos e le quintas.', 'Il treno lungo il fiume è già un’attrazione; siediti a destra partendo da Porto.'],
    }, { spot: 'insta' }),

    P('the-yeatman', 'food', 41.1355, -8.613, RIVER, 4.8, 2200, ['food', 'luxury', 'views', 'wine'], {
      ru: ['The Yeatman', 'Гастрономический ресторан одноимённого винного отеля в Гайе с панорамой на Порту и огромной картой португальских вин; две звезды MICHELIN (гид Португалии 2026).', 'Приходите к закату ради вида; бронируйте заранее.'],
      en: ['The Yeatman', 'The fine-dining restaurant of the namesake wine hotel in Gaia, with a panorama of Porto and a vast Portuguese wine list; two MICHELIN stars (Portugal guide 2026).', 'Come at sunset for the view; book ahead.'],
      es: ['The Yeatman', 'El restaurante gastronómico del hotel del vino homónimo en Gaia, con panorámica de Oporto y enorme carta de vinos portugueses; dos estrellas MICHELIN (guía Portugal 2026).', 'Ven al atardecer por la vista; reserva.'],
      de: ['The Yeatman', 'Das Gourmetrestaurant des gleichnamigen Weinhotels in Gaia mit Porto-Panorama und riesiger portugiesischer Weinkarte; zwei MICHELIN-Sterne (Guide Portugal 2026).', 'Zum Sonnenuntergang kommen; früh buchen.'],
      fr: ['The Yeatman', 'La table gastronomique de l’hôtel du vin éponyme à Gaia, panorama sur Porto et immense carte des vins portugais ; deux étoiles MICHELIN (guide Portugal 2026).', 'Venez au coucher du soleil pour la vue ; réservez.'],
      it: ['The Yeatman', 'Il ristorante gourmet dell’omonimo hotel del vino a Gaia, con panorama su Porto e una vasta carta di vini portoghesi; due stelle MICHELIN (guida Portogallo 2026).', 'Vieni al tramonto per la vista; prenota.'],
    }, { price: level(3), michelin: { award: 'star2', year: 2026 }, address: 'Rua do Choupelo, Vila Nova de Gaia', menu: [
      ['Tasting menu', undefined, 'дегустационный сет|tasting menu|menú degustación|Degustationsmenü|menu dégustation|menù degustazione'],
      ['Portuguese wine pairing', undefined, 'сопровождение португальскими винами|Portuguese wine pairing|maridaje de vinos portugueses|portugiesische Weinbegleitung|accord vins portugais|abbinamento vini portoghesi'],
    ] }),
    P('antiqvvm', 'food', 41.15, -8.627, GARDEN, 4.7, 1500, ['food', 'luxury', 'gardens'], {
      ru: ['Antiqvvm', 'Ресторан в садах Романтического музея над Дору с террасой и видом на реку; две звезды MICHELIN (гид Португалии 2026).', 'Летом ужинайте на террасе; рядом — сады Палацио-де-Кришталь.'],
      en: ['Antiqvvm', 'A restaurant in the gardens of the Romantic Museum above the Douro, with a terrace and river views; two MICHELIN stars (Portugal guide 2026).', 'Dine on the terrace in summer; the Crystal Palace gardens are next door.'],
      es: ['Antiqvvm', 'Un restaurante en los jardines del Museo Romántico sobre el Duero, con terraza y vistas al río; dos estrellas MICHELIN (guía Portugal 2026).', 'En verano cena en la terraza; al lado, los jardines del Palacio de Cristal.'],
      de: ['Antiqvvm', 'Ein Restaurant in den Gärten des Romantischen Museums über dem Douro mit Terrasse und Flussblick; zwei MICHELIN-Sterne (Guide Portugal 2026).', 'Im Sommer auf der Terrasse essen; nebenan die Gärten des Kristallpalasts.'],
      fr: ['Antiqvvm', 'Un restaurant dans les jardins du musée Romantique au-dessus du Douro, terrasse et vue sur le fleuve ; deux étoiles MICHELIN (guide Portugal 2026).', 'L’été, dînez en terrasse ; les jardins du Palais de cristal sont voisins.'],
      it: ['Antiqvvm', 'Un ristorante nei giardini del Museo Romantico sopra il Douro, con terrazza e vista sul fiume; due stelle MICHELIN (guida Portogallo 2026).', 'D’estate cena in terrazza; accanto i giardini del Palazzo di Cristallo.'],
    }, { price: level(3), michelin: { award: 'star2', year: 2026 }, address: 'Rua de Entre-Quintas 220', menu: [
      ['Tasting menu', undefined, 'дегустационный сет|tasting menu|menú degustación|Degustationsmenü|menu dégustation|menù degustazione'],
      ['Wine pairing', undefined, 'винное сопровождение|wine pairing|maridaje de vinos|Weinbegleitung|accord mets-vins|abbinamento vini'],
    ] }),
    P('conga', 'food', 41.1495, -8.608, MARKET, 4.4, 9300, ['food', 'streetfood'], {
      ru: ['Conga', 'Знаменитая закусочная бифан — булочки с тонкими ломтиками свинины, томлёными в остром соусе, — с 1976 года.', 'Закажите две бифаны и маленькое пиво «фино» — так едят местные.'],
      en: ['Conga', 'A famous bifana joint since 1976 — rolls of thin pork slices stewed in a spicy sauce.', 'Order two bifanas and a small “fino” beer, as locals do.'],
      es: ['Conga', 'Un famoso local de bifanas desde 1976: panecillos con finas lonchas de cerdo guisadas en salsa picante.', 'Pide dos bifanas y una caña “fino”, como los locales.'],
      de: ['Conga', 'Ein berühmter Bifana-Imbiss seit 1976 – Brötchen mit dünnen Schweinefleischscheiben in scharfer Sauce.', 'Zwei Bifanas und ein kleines „Fino“-Bier bestellen, wie die Einheimischen.'],
      fr: ['Conga', 'Une célèbre adresse de bifanas depuis 1976 : petits pains aux fines tranches de porc mijotées en sauce épicée.', 'Commandez deux bifanas et une petite bière « fino », comme les locaux.'],
      it: ['Conga', 'Un famoso locale di bifanas dal 1976: panini con fettine di maiale stufate in salsa piccante.', 'Ordina due bifanas e una birretta “fino”, come i locali.'],
    }, { price: level(1), address: 'Rua do Bonjardim 314', menu: [
      ['Bifana', undefined, 'булочка со свининой в остром соусе|pork sandwich in spicy sauce|bocadillo de cerdo en salsa picante|Schweinebrötchen in scharfer Sauce|sandwich au porc sauce épicée|panino al maiale in salsa piccante'],
      ['Fino', undefined, 'маленькое разливное пиво|small draught beer|caña pequeña|kleines Fassbier|petite bière pression|birra piccola alla spina'],
    ] }),
    P('casa-guedes', 'food', 41.147, -8.606, MARKET, 4.5, 11000, ['food', 'streetfood'], {
      ru: ['Casa Guedes', 'Закусочная на площади Повейрос, где сэндвич с медленно запечённой свининой подают с расплавленным сыром Серра-да-Эштрела.', 'Закажите «pernil com queijo da serra» — фирменный сэндвич.'],
      en: ['Casa Guedes', 'A snack bar on Praça dos Poveiros serving slow-roasted pork sandwiches with melted Serra da Estrela cheese.', 'Order the “pernil com queijo da serra” — the signature sandwich.'],
      es: ['Casa Guedes', 'Un bar en la Praça dos Poveiros con bocadillos de cerdo asado lentamente con queso Serra da Estrela fundido.', 'Pide el “pernil com queijo da serra”, el bocadillo estrella.'],
      de: ['Casa Guedes', 'Eine Imbissbar an der Praça dos Poveiros mit langsam gebratenem Schweinefleisch im Brötchen und geschmolzenem Serra-da-Estrela-Käse.', 'Das „Pernil com queijo da serra“ bestellen – das Signature-Sandwich.'],
      fr: ['Casa Guedes', 'Un snack de la Praça dos Poveiros : sandwich au porc rôti lentement et fromage Serra da Estrela fondu.', 'Commandez le « pernil com queijo da serra », le sandwich signature.'],
      it: ['Casa Guedes', 'Uno snack bar in Praça dos Poveiros con panini al maiale arrosto lento e formaggio Serra da Estrela fuso.', 'Ordina il “pernil com queijo da serra”, il panino simbolo.'],
    }, { price: level(1), address: 'Praça dos Poveiros 130', menu: [
      ['Pernil com queijo da serra', undefined, 'сэндвич с запечённой свининой и сыром Серра|roast pork sandwich with Serra cheese|bocadillo de cerdo con queso Serra|Schweinebraten-Brötchen mit Serra-Käse|sandwich porc rôti et fromage Serra|panino al maiale arrosto con formaggio Serra'],
      ['Vinho verde', undefined, 'молодое «зелёное» вино|young “green” wine|vino verde|junger Vinho Verde|vinho verde|vinho verde'],
    ] }),
    P('taberna-dos-mercadores', 'food', 41.1415, -8.614, RIVER, 4.6, 4900, ['food'], {
      ru: ['Taberna dos Mercadores', 'Крошечная таверна у Рибейры с рыбой и морепродуктами: рис с морепродуктами, осьминог, треска; около десятка столиков.', 'Бронируйте или приходите к открытию — мест очень мало.'],
      en: ['Taberna dos Mercadores', 'A tiny tavern near Ribeira serving fish and seafood: seafood rice, octopus, cod; about ten tables.', 'Book or arrive at opening — very few seats.'],
      es: ['Taberna dos Mercadores', 'Una diminuta taberna junto a la Ribeira con pescado y marisco: arroz de marisco, pulpo, bacalao; una decena de mesas.', 'Reserva o llega a la apertura: hay muy pocas mesas.'],
      de: ['Taberna dos Mercadores', 'Eine winzige Taverne nahe der Ribeira mit Fisch und Meeresfrüchten: Meeresfrüchtereis, Oktopus, Stockfisch; etwa zehn Tische.', 'Reservieren oder zur Öffnung kommen – sehr wenige Plätze.'],
      fr: ['Taberna dos Mercadores', 'Une minuscule taverne près de la Ribeira : riz aux fruits de mer, poulpe, morue ; une dizaine de tables.', 'Réservez ou venez à l’ouverture, très peu de places.'],
      it: ['Taberna dos Mercadores', 'Una minuscola taverna vicino alla Ribeira con pesce e frutti di mare: riso ai frutti di mare, polpo, baccalà; una decina di tavoli.', 'Prenota o arriva all’apertura: pochissimi posti.'],
    }, { price: level(2), address: 'Rua dos Mercadores 36', menu: [
      ['Arroz de marisco', undefined, 'рис с морепродуктами|seafood rice|arroz de marisco|Meeresfrüchtereis|riz aux fruits de mer|riso ai frutti di mare'],
      ['Polvo à lagareiro', undefined, 'запечённый осьминог с картофелем и маслом|roast octopus with potatoes and olive oil|pulpo asado con patatas y aceite|gebratener Oktopus mit Kartoffeln und Olivenöl|poulpe rôti, pommes de terre et huile|polpo arrosto con patate e olio'],
    ] }),
    P('manteigaria-porto', 'food', 41.1475, -8.6075, MARKET, 4.7, 9100, ['food'], {
      ru: ['Manteigaria (Порту)', 'Порту-филиал лиссабонской пастелерии: пастел-де-ната пекут на глазах весь день, колокольчик звонит при каждой свежей партии.', 'Ешьте тёплыми с корицей — идеальный завтрак у рынка Болау.'],
      en: ['Manteigaria (Porto)', 'The Porto branch of the Lisbon pastry shop: pastéis de nata baked in view all day, with a bell for each fresh batch.', 'Eat them warm with cinnamon — the perfect breakfast by the Bolhão market.'],
      es: ['Manteigaria (Oporto)', 'La sucursal en Oporto de la pastelería lisboeta: pastéis de nata horneados a la vista todo el día, con campana en cada hornada.', 'Cómelos tibios con canela: desayuno perfecto junto al Bolhão.'],
      de: ['Manteigaria (Porto)', 'Die Porto-Filiale der Lissabonner Konditorei: Pastéis de Nata den ganzen Tag vor den Augen gebacken, eine Glocke läutet bei jeder frischen Ladung.', 'Warm mit Zimt essen – das perfekte Frühstück am Bolhão-Markt.'],
      fr: ['Manteigaria (Porto)', 'L’antenne portuane de la pâtisserie lisboète : pastéis de nata cuits sous vos yeux, une cloche sonne à chaque fournée.', 'Mangez-les tièdes à la cannelle : petit-déjeuner parfait près du Bolhão.'],
      it: ['Manteigaria (Porto)', 'La sede di Porto della pasticceria lisbonese: pastéis de nata sfornati a vista tutto il giorno, una campanella a ogni infornata.', 'Mangiali tiepidi con la cannella: colazione perfetta vicino al Bolhão.'],
    }, { price: level(1), address: 'Rua de Alexandre Braga 24', menu: [
      ['Pastel de nata', undefined, 'корзиночка с заварным кремом|custard tart|pastel de nata|Puddingtörtchen|flan pâtissier portugais|tortina alla crema'],
      ['Galão', undefined, 'кофе с молоком в стакане|milky coffee in a glass|café con leche en vaso|Milchkaffee im Glas|café au lait en verre|caffellatte nel bicchiere'],
    ] }),
    P('adega-sao-nicolau', 'food', 41.1405, -8.6145, RIVER, 4.5, 4100, ['food'], {
      ru: ['Adega São Nicolau', 'Семейная таверна в переулке Рибейры: жареная мелкая рыба, осьминог и треска «à Gomes de Sá» по домашним рецептам.', 'Столы на улице с видом на реку — закажите жареного осьминога.'],
      en: ['Adega São Nicolau', 'A family tavern in a Ribeira lane: fried small fish, octopus and bacalhau à Gomes de Sá to home recipes.', 'Street tables look toward the river — order the fried octopus.'],
      es: ['Adega São Nicolau', 'Una taberna familiar en un callejón de la Ribeira: pescaíto frito, pulpo y bacalao à Gomes de Sá caseros.', 'Las mesas en la calle miran al río; pide el pulpo frito.'],
      de: ['Adega São Nicolau', 'Eine Familientaverne in einer Gasse der Ribeira: frittierte kleine Fische, Oktopus und Bacalhau à Gomes de Sá nach Hausrezept.', 'Die Tische draußen blicken zum Fluss – frittierten Oktopus bestellen.'],
      fr: ['Adega São Nicolau', 'Une taverne familiale dans une ruelle de la Ribeira : petite friture, poulpe et morue à Gomes de Sá maison.', 'Tables dehors vers le fleuve ; prenez le poulpe frit.'],
      it: ['Adega São Nicolau', 'Una taverna di famiglia in un vicolo della Ribeira: frittura di pesciolini, polpo e baccalà à Gomes de Sá casalinghi.', 'I tavoli fuori guardano il fiume; ordina il polpo fritto.'],
    }, { price: level(2), address: 'Rua de São Nicolau 1', menu: [
      ['Bacalhau à Gomes de Sá', undefined, 'запеканка из трески с картофелем и луком|salt cod baked with potatoes and onion|bacalao al horno con patata y cebolla|Stockfisch mit Kartoffeln und Zwiebeln überbacken|morue au four, pommes de terre et oignons|baccalà al forno con patate e cipolle'],
      ['Filetes de polvo', undefined, 'жареный осьминог в кляре|fried octopus fritters|filetes de pulpo fritos|frittierte Oktopusfilets|beignets de poulpe|filetti di polpo fritti'],
    ] }),
    P('cervejaria-gazela', 'food', 41.1462, -8.6067, MARKET, 4.5, 7600, ['food', 'streetfood'], {
      ru: ['Cervejaria Gazela', 'Крошечная пивная, прославившаяся «кашорринью» — хрустящей тонкой булкой с колбасой и сыром в остром соусе, нарезанной кусочками.', 'Берите кашорринью и пиво у стойки; очередь бывает в обед.'],
      en: ['Cervejaria Gazela', 'A tiny beer bar famous for its cachorrinho — a crisp thin roll with sausage and cheese in spicy sauce, cut into pieces.', 'Get a cachorrinho and a beer at the counter; there’s often a lunch queue.'],
      es: ['Cervejaria Gazela', 'Una diminuta cervecería famosa por su cachorrinho: panecillo fino y crujiente con salchicha y queso en salsa picante, cortado en trozos.', 'Pide un cachorrinho y una cerveza en la barra; a mediodía hay cola.'],
      de: ['Cervejaria Gazela', 'Eine winzige Bierbar, berühmt für ihr Cachorrinho – ein knuspriges dünnes Brötchen mit Wurst und Käse in scharfer Sauce, in Stücke geschnitten.', 'Cachorrinho und ein Bier an der Theke; mittags oft Schlange.'],
      fr: ['Cervejaria Gazela', 'Une minuscule brasserie célèbre pour son cachorrinho, fin pain croustillant à la saucisse et au fromage en sauce épicée, coupé en morceaux.', 'Prenez un cachorrinho et une bière au comptoir ; file à midi.'],
      it: ['Cervejaria Gazela', 'Una minuscola birreria famosa per il cachorrinho, panino sottile e croccante con salsiccia e formaggio in salsa piccante, tagliato a pezzi.', 'Prendi un cachorrinho e una birra al banco; a pranzo c’è coda.'],
    }, { price: level(1), address: 'Travessa Cimo de Vila 4', menu: [
      ['Cachorrinho', undefined, 'хрустящая булочка с колбасой, сыром и острым соусом|crispy roll with sausage, cheese and spicy sauce|panecillo con salchicha, queso y salsa picante|knuspriges Brötchen mit Wurst, Käse und scharfer Sauce|petit pain croustillant saucisse-fromage sauce épicée|panino croccante con salsiccia, formaggio e salsa piccante'],
      ['Super Bock', undefined, 'португальское пиво|Portuguese beer|cerveza portuguesa|portugiesisches Bier|bière portugaise|birra portoghese'],
    ] }),
    P('cafe-guarany', 'food', 41.1478, -8.611, CITY, 4.3, 6300, ['food', 'history'], {
      ru: ['Café Guarany', 'Кафе 1933 года на проспекте Алиадуш с росписями на тему индейцев гуарани; вечером — живая музыка.', 'Хорошо для кофе с пирожным или франсезиньи днём.'],
      en: ['Café Guarany', 'A 1933 café on Avenida dos Aliados with murals on the Guarani people; live music in the evening.', 'Good for coffee and cake, or a francesinha by day.'],
      es: ['Café Guarany', 'Un café de 1933 en la Avenida dos Aliados con murales sobre los guaraníes; música en directo por la noche.', 'Bien para café con pastel o una francesinha de día.'],
      de: ['Café Guarany', 'Ein Café von 1933 an der Avenida dos Aliados mit Wandbildern zum Volk der Guaraní; abends Livemusik.', 'Gut für Kaffee und Kuchen oder tagsüber eine Francesinha.'],
      fr: ['Café Guarany', 'Un café de 1933 sur l’avenue des Aliados aux fresques sur le peuple guarani ; musique live le soir.', 'Idéal pour café-gâteau ou une francesinha en journée.'],
      it: ['Café Guarany', 'Un caffè del 1933 su Avenida dos Aliados con murales sul popolo guaraní; musica dal vivo la sera.', 'Ottimo per caffè e dolce o una francesinha di giorno.'],
    }, { price: level(2), address: 'Avenida dos Aliados 85', menu: [
      ['Francesinha', undefined, 'сэндвич с мясом под сыром и пивным соусом|meat sandwich under cheese and beer sauce|sándwich de carne con queso y salsa de cerveza|Fleischsandwich mit Käse und Biersauce|sandwich à la viande nappé de fromage et sauce à la bière|panino di carne con formaggio e salsa alla birra'],
      ['Coffee and cake', undefined, 'кофе с пирожным|coffee and cake|café con pastel|Kaffee und Kuchen|café et gâteau|caffè e dolce'],
    ] }),
    P('vinologia', 'food', 41.1413, -8.6141, RIVER, 4.7, 2700, ['food', 'wine'], {
      ru: ['Vinologia', 'Маленький портвейновый бар у Рибейры с сотнями сортов от небольших производителей: дегустационные сеты с объяснениями.', 'Возьмите сет из 4 портвейнов разных стилей — tawny, ruby, colheita.'],
      en: ['Vinologia', 'A small port wine bar near Ribeira with hundreds of ports from small producers: tasting flights with explanations.', 'Order a flight of four styles — tawny, ruby, colheita.'],
      es: ['Vinologia', 'Un pequeño bar de oporto junto a la Ribeira con cientos de oportos de pequeños productores: catas comentadas.', 'Pide una cata de cuatro estilos: tawny, ruby, colheita.'],
      de: ['Vinologia', 'Eine kleine Portweinbar nahe der Ribeira mit Hunderten Ports kleiner Erzeuger: Probierflights mit Erklärungen.', 'Einen Flight mit vier Stilen bestellen – Tawny, Ruby, Colheita.'],
      fr: ['Vinologia', 'Un petit bar à porto près de la Ribeira, des centaines de portos de petits producteurs : dégustations commentées.', 'Prenez une dégustation de quatre styles : tawny, ruby, colheita.'],
      it: ['Vinologia', 'Un piccolo bar di porto vicino alla Ribeira con centinaia di porti di piccoli produttori: degustazioni spiegate.', 'Ordina una degustazione di quattro stili: tawny, ruby, colheita.'],
    }, { spot: 'hidden', price: level(2), address: 'Rua de São João 46', menu: [
      ['Port tasting flight', undefined, 'дегустация 4 портвейнов|flight of four ports|cata de cuatro oportos|Probe von vier Portweinen|dégustation de quatre portos|degustazione di quattro porti'],
      ['Cheese plate', undefined, 'тарелка португальских сыров|Portuguese cheese plate|tabla de quesos portugueses|portugiesische Käseplatte|assiette de fromages portugais|tagliere di formaggi portoghesi'],
    ] }),
  ],
  routes: [
    D(['=porto-cafe-majestic', '=porto-capela-das-almas', 'sao-bento-station', 'se-cathedral', 'cervejaria-gazela', 'torre-dos-clerigos', '=porto-livraria-lello', 'carmo-church', 'antiqvvm'],
      'Азулежу, Клеригуш и книжный Лелло|Azulejos, Clérigos and Livraria Lello|Azulejos, los Clérigos y Livraria Lello|Azulejos, Clérigos und Livraria Lello|Azulejos, les Clérigos et la Livraria Lello|Azulejos, Clérigos e Livraria Lello'),
    D(['palacio-da-bolsa', 'igreja-sao-francisco', '=porto-ribeira-luis-i-bridge', 'adega-sao-nicolau', 'port-wine-cellars', '=porto-jardim-do-morro', '=porto-serra-do-pilar', 'the-yeatman'],
      'Рибейра, мост Луиш I и портвейн в Гайе|Ribeira, the Luís I Bridge and port in Gaia|La Ribeira, el puente Luís I y el oporto en Gaia|Ribeira, Brücke Luís I und Portwein in Gaia|La Ribeira, le pont Luís-Ier et le porto à Gaia|Ribeira, ponte Luís I e porto a Gaia'),
    D(['manteigaria-porto', 'serralves', 'foz-do-douro', 'taberna-dos-mercadores', '=porto-palacio-de-cristal-gardens', 'vinologia', 'casa-guedes'],
      'Серралвеш, океан в Фош и сады Кришталь|Serralves, the ocean at Foz and Crystal Palace gardens|Serralves, el océano en Foz y los jardines de Cristal|Serralves, Ozean in Foz und Kristallpalast-Gärten|Serralves, l’océan à Foz et les jardins du Palais de cristal|Serralves, l’oceano a Foz e i giardini di Cristallo'),
  ],
};

export default pack;
