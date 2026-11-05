import type { CityPack } from '../types';
import { free, level, makeDay, makePlace } from './_kit.ts';

const P = makePlace('copenhagen');
const D = makeDay('copenhagen');
const HARBOUR = 'X0R8lTMUplY';
const CITY = 'yNNa5rEIcF8';
const GREEN = 'UAxCHln587Q';
const TIVOLI = '4RTy9UXw3Ns';
const CASTLE = '8AleSscP-j0';
const FOOD = 'mIkLJoeENCc';
const TOWER = 'LRQw9JvVBws';
const CHURCH = 'RNI0ZvG_l14';

const pack: CityPack = {
  country: 'DK',
  city: 'copenhagen',
  places: [
    P('rosenborg-castle', 'attraction', 55.6858, 12.5773, CASTLE, 4.7, 27000, ['castles', 'history', 'gardens'], {
      ru: ['Замок Розенборг', 'Ренессансный замок Кристиана IV в Королевском саду; в подвальной сокровищнице хранятся датские королевские регалии.', 'Королевский сад вокруг бесплатный — хорош для пикника.'],
      en: ['Rosenborg Castle', 'Christian IV’s Renaissance castle in the King’s Garden; the basement treasury holds the Danish Crown Jewels.', 'The King’s Garden around it is free — great for a picnic.'],
      es: ['Castillo de Rosenborg', 'El castillo renacentista de Cristián IV en el Jardín del Rey; en el sótano, el tesoro con las joyas de la Corona danesa.', 'El Jardín del Rey es gratis: ideal para un pícnic.'],
      de: ['Schloss Rosenborg', 'Christians IV. Renaissanceschloss im Königsgarten; in der Schatzkammer im Keller die dänischen Kronjuwelen.', 'Der Königsgarten ringsum ist frei – ideal zum Picknicken.'],
      fr: ['Château de Rosenborg', 'Le château Renaissance de Christian IV dans le Jardin du roi ; au sous-sol, le trésor des joyaux de la Couronne danoise.', 'Le Jardin du roi est gratuit, parfait pour pique-niquer.'],
      it: ['Castello di Rosenborg', 'Il castello rinascimentale di Cristiano IV nel Giardino del Re; nel sotterraneo il tesoro con i gioielli della Corona danese.', 'Il Giardino del Re è gratuito: perfetto per un picnic.'],
    }, { hours: '10:00–17:00', address: 'Øster Voldgade 4A' }),
    P('christiansborg', 'attraction', 55.6761, 12.5806, CITY, 4.6, 19000, ['history', 'architecture', 'views'], {
      ru: ['Дворец Кристиансборг', 'Здание парламента, Верховного суда и королевских приёмных залов на острове Слотсхольмен; в башне — бесплатная смотровая площадка.', 'Башня — самая высокая в городе и бесплатная; утром очередь короче.'],
      en: ['Christiansborg Palace', 'Home to Parliament, the Supreme Court and the royal reception rooms on Slotsholmen; its tower has a free viewing platform.', 'The tower is the city’s tallest and free; mornings have shorter queues.'],
      es: ['Palacio de Christiansborg', 'Sede del Parlamento, el Supremo y los salones reales de recepción en Slotsholmen; su torre tiene un mirador gratuito.', 'La torre es la más alta de la ciudad y gratis; por la mañana hay menos cola.'],
      de: ['Schloss Christiansborg', 'Sitz von Parlament, Oberstem Gericht und königlichen Empfangsräumen auf Slotsholmen; im Turm eine kostenlose Aussichtsplattform.', 'Der Turm ist der höchste der Stadt und gratis; morgens kürzere Schlange.'],
      fr: ['Palais de Christiansborg', 'Siège du Parlement, de la Cour suprême et des salons de réception royaux sur Slotsholmen ; sa tour a un belvédère gratuit.', 'La tour est la plus haute de la ville et gratuite ; moins d’attente le matin.'],
      it: ['Palazzo di Christiansborg', 'Sede del Parlamento, della Corte suprema e delle sale reali di rappresentanza a Slotsholmen; la torre ha una terrazza gratuita.', 'La torre è la più alta della città e gratuita; al mattino meno coda.'],
    }, { spot: 'insta', hours: '10:00–17:00' }),
    P('little-mermaid', 'attraction', 55.6929, 12.5993, HARBOUR, 4.1, 66000, ['photo', 'history'], {
      ru: ['Русалочка', 'Бронзовая статуя 1913 года по сказке Андерсена на камне у набережной Лангелиние — маленькая, но самая узнаваемая в Дании.', 'Приходите рано утром или совместите с прогулкой по крепости Кастеллет рядом.'],
      en: ['The Little Mermaid', 'A 1913 bronze from Andersen’s tale on a rock by the Langelinie promenade — small, but Denmark’s most famous statue.', 'Come early or pair it with a walk round the Kastellet fortress next door.'],
      es: ['La Sirenita', 'Una estatua de bronce de 1913 del cuento de Andersen sobre una roca en el paseo Langelinie: pequeña, pero la más famosa de Dinamarca.', 'Ve temprano o combínala con un paseo por el Kastellet.'],
      de: ['Kleine Meerjungfrau', 'Eine Bronzefigur von 1913 nach Andersens Märchen auf einem Stein an der Langelinie – klein, aber Dänemarks berühmteste Statue.', 'Früh kommen oder mit einem Rundgang durchs Kastell verbinden.'],
      fr: ['La Petite Sirène', 'Un bronze de 1913 tiré du conte d’Andersen, sur un rocher de la promenade Langelinie : petit, mais la statue la plus célèbre du Danemark.', 'Venez tôt ou combinez avec une balade au Kastellet voisin.'],
      it: ['La Sirenetta', 'Un bronzo del 1913 dalla fiaba di Andersen su uno scoglio della passeggiata Langelinie: piccolo, ma la statua più famosa della Danimarca.', 'Vieni presto o abbinala a un giro del Kastellet accanto.'],
    }, { spot: 'insta', price: free, hours: 'always' }),
    P('christiania', 'attraction', 55.6736, 12.6, GREEN, 4.4, 38000, ['culture', 'art'], {
      ru: ['Христиания', 'Самоуправляемая «вольная община» с 1971 года в бывших казармах: граффити, самодельные дома, кафе и мастерские у озёр.', 'Не фотографируйте на улице Пушер-стрит — это строгое правило жителей.'],
      en: ['Christiania', 'A self-governing “free town” since 1971 in former barracks: graffiti, self-built houses, cafés and workshops by the lakes.', 'No photos on Pusher Street — a strict rule of residents.'],
      es: ['Christiania', 'Una “ciudad libre” autogestionada desde 1971 en antiguos cuarteles: grafitis, casas autoconstruidas, cafés y talleres junto a los lagos.', 'No hagas fotos en Pusher Street: norma estricta de los vecinos.'],
      de: ['Christiania', 'Eine selbstverwaltete „Freistadt“ seit 1971 in ehemaligen Kasernen: Graffiti, selbst gebaute Häuser, Cafés und Werkstätten an den Seen.', 'Keine Fotos in der Pusher Street – eine strikte Regel der Bewohner.'],
      fr: ['Christiania', 'Une « ville libre » autogérée depuis 1971 dans d’anciennes casernes : graffitis, maisons autoconstruites, cafés et ateliers au bord des lacs.', 'Pas de photos dans Pusher Street : règle stricte des habitants.'],
      it: ['Christiania', 'Una “città libera” autogestita dal 1971 in ex caserme: graffiti, case autocostruite, caffè e laboratori sui laghi.', 'Niente foto in Pusher Street: regola severa dei residenti.'],
    }, { spot: 'hidden', price: free }),
    P('glyptotek', 'attraction', 55.6726, 12.5719, CITY, 4.7, 17000, ['art', 'museums'], {
      ru: ['Новая глиптотека Карлсберга', 'Музей пивовара Карла Якобсена: античная скульптура, Роден, французские импрессионисты и Зимний сад с пальмами под стеклянным куполом.', 'По последним средам месяца вход бесплатный; кафе в Зимнем саду — отличное место для паузы.'],
      en: ['Ny Carlsberg Glyptotek', 'Brewer Carl Jacobsen’s museum: ancient sculpture, Rodin, French Impressionists and a palm-filled Winter Garden under a glass dome.', 'Free on the last Wednesday of the month; the Winter Garden café is a great pause.'],
      es: ['Ny Carlsberg Glyptotek', 'El museo del cervecero Carl Jacobsen: escultura antigua, Rodin, impresionistas franceses y un Jardín de Invierno con palmeras bajo cúpula.', 'El último miércoles de mes es gratis; el café del Jardín de Invierno es ideal.'],
      de: ['Ny Carlsberg Glyptotek', 'Das Museum des Brauers Carl Jacobsen: antike Skulptur, Rodin, französische Impressionisten und ein Palmen-Wintergarten unter Glaskuppel.', 'Am letzten Mittwoch im Monat gratis; das Café im Wintergarten lädt zur Pause.'],
      fr: ['Ny Carlsberg Glyptotek', 'Le musée du brasseur Carl Jacobsen : sculpture antique, Rodin, impressionnistes français et jardin d’hiver aux palmiers sous coupole.', 'Gratuit le dernier mercredi du mois ; le café du jardin d’hiver est idéal.'],
      it: ['Ny Carlsberg Glyptotek', 'Il museo del birraio Carl Jacobsen: scultura antica, Rodin, impressionisti francesi e un giardino d’inverno con palme sotto la cupola.', 'Gratis l’ultimo mercoledì del mese; il caffè nel giardino d’inverno è perfetto.'],
    }, { hours: '10:00–17:00', address: 'Dantes Plads 7' }),
    P('smk', 'attraction', 55.6888, 12.5783, CITY, 4.6, 14000, ['art', 'museums'], {
      ru: ['Национальная галерея Дании (SMK)', 'Главный художественный музей страны: золотой век датской живописи, Матисс, Мунк и современный корпус, соединённый стеклянной галереей.', 'Постоянная экспозиция бесплатна; напротив — Розенборг и Королевский сад.'],
      en: ['National Gallery of Denmark (SMK)', 'The country’s main art museum: the Danish Golden Age, Matisse, Munch and a modern wing linked by a glass gallery.', 'The permanent collection is free; Rosenborg and the King’s Garden are opposite.'],
      es: ['Galería Nacional de Dinamarca (SMK)', 'El principal museo de arte del país: la Edad de Oro danesa, Matisse, Munch y un ala moderna unida por una galería de cristal.', 'La colección permanente es gratis; enfrente, Rosenborg y el Jardín del Rey.'],
      de: ['Statens Museum for Kunst (SMK)', 'Dänemarks wichtigstes Kunstmuseum: dänisches Goldenes Zeitalter, Matisse, Munch und ein moderner Flügel mit Glasgalerie.', 'Die Dauerausstellung ist gratis; gegenüber Rosenborg und Königsgarten.'],
      fr: ['Galerie nationale du Danemark (SMK)', 'Le grand musée d’art du pays : âge d’or danois, Matisse, Munch et une aile moderne reliée par une galerie vitrée.', 'Collection permanente gratuite ; Rosenborg et le Jardin du roi en face.'],
      it: ['Galleria nazionale di Danimarca (SMK)', 'Il principale museo d’arte del paese: Età d’oro danese, Matisse, Munch e un’ala moderna collegata da una galleria di vetro.', 'La collezione permanente è gratuita; di fronte Rosenborg e il Giardino del Re.'],
    }, { price: free, hours: '10:00–18:00', address: 'Sølvgade 48–50' }),
    P('church-of-our-saviour', 'attraction', 55.6728, 12.5941, TOWER, 4.6, 16000, ['views', 'architecture', 'adventure'], {
      ru: ['Церковь Спасителя', 'Барочная церковь в Кристиансхавне со спиральным шпилем, по наружной лестнице которого поднимаются 400 ступеней к золотому шару.', 'Последние 150 ступеней снаружи — в ветреную погоду закрывают; бронируйте время онлайн.'],
      en: ['Church of Our Saviour', 'A Baroque church in Christianshavn with a corkscrew spire whose outside staircase climbs 400 steps to a golden globe.', 'The last 150 steps are outdoors — closed in high wind; book a time slot online.'],
      es: ['Iglesia de Nuestro Salvador', 'Una iglesia barroca en Christianshavn con aguja en espiral cuya escalera exterior sube 400 peldaños hasta un globo dorado.', 'Los últimos 150 son exteriores: cierra con viento; reserva hora online.'],
      de: ['Erlöserkirche', 'Eine Barockkirche in Christianshavn mit Korkenzieherturm, dessen Außentreppe 400 Stufen zu einer goldenen Kugel führt.', 'Die letzten 150 Stufen sind außen – bei Sturm gesperrt; Zeitfenster online buchen.'],
      fr: ['Église de Notre-Sauveur', 'Une église baroque de Christianshavn à la flèche en tire-bouchon dont l’escalier extérieur monte 400 marches jusqu’à un globe doré.', 'Les 150 dernières marches sont dehors, fermées par grand vent ; réservez en ligne.'],
      it: ['Chiesa del Nostro Salvatore', 'Una chiesa barocca a Christianshavn con guglia a cavatappi la cui scala esterna sale 400 gradini fino a un globo dorato.', 'Gli ultimi 150 gradini sono all’esterno, chiusi col vento forte; prenota online.'],
    }, { spot: 'insta', hours: '09:30–19:30', address: 'Sankt Annæ Gade 29' }),
    P('kastellet', 'nature', 55.6913, 12.5945, GREEN, 4.6, 21000, ['history', 'nature'], {
      ru: ['Крепость Кастеллет', 'Звёздообразная крепость XVII века с валами, рвами и красными казармами — до сих пор действующая военная база и любимое место прогулок.', 'Обойдите по валу — круг около 2 км с видом на ветряную мельницу.'],
      en: ['Kastellet', 'A star-shaped 17th-century fortress with ramparts, moats and red barracks — still an active military base and a favourite walk.', 'Walk the rampart loop — about 2 km, with a view of the windmill.'],
      es: ['Kastellet', 'Una fortaleza en forma de estrella del siglo XVII con murallas, fosos y cuarteles rojos, aún base militar y paseo favorito.', 'Recorre el anillo de la muralla, unos 2 km con vista al molino.'],
      de: ['Kastellet', 'Eine sternförmige Festung aus dem 17. Jh. mit Wällen, Gräben und roten Kasernen – noch aktiver Militärstützpunkt und beliebter Spazierweg.', 'Die Wallrunde gehen – etwa 2 km mit Blick auf die Windmühle.'],
      fr: ['Kastellet', 'Une forteresse en étoile du XVIIe, remparts, douves et casernes rouges ; toujours base militaire et promenade appréciée.', 'Faites le tour des remparts, environ 2 km avec vue sur le moulin.'],
      it: ['Kastellet', 'Una fortezza a stella del Seicento con bastioni, fossati e caserme rosse, ancora base militare e passeggiata amata.', 'Percorri l’anello dei bastioni, circa 2 km con vista sul mulino.'],
    }, { price: free, hours: '06:00–22:00' }),
    P('louisiana', 'attraction', 55.969, 12.5426, GREEN, 4.8, 22000, ['art', 'museums', 'views'], {
      ru: ['Музей Луизиана', 'Музей современного искусства на берегу пролива Эресунн в 35 км от города: Джакометти, Кусама, Хокни и сад скульптур с видом на Швецию.', 'Поезд до станции Хумлебек и 10 минут пешком; совместите с замком Кронборг дальше на север.'],
      en: ['Louisiana Museum', 'A modern art museum on the Øresund shore 35 km from town: Giacometti, Kusama, Hockney and a sculpture park looking across to Sweden.', 'Train to Humlebæk and a 10-minute walk; pair it with Kronborg further north.'],
      es: ['Museo Louisiana', 'Un museo de arte moderno junto al Øresund, a 35 km: Giacometti, Kusama, Hockney y un jardín de esculturas frente a Suecia.', 'Tren a Humlebæk y 10 minutos a pie; combínalo con Kronborg más al norte.'],
      de: ['Louisiana Museum', 'Ein Museum moderner Kunst am Öresund, 35 km außerhalb: Giacometti, Kusama, Hockney und ein Skulpturenpark mit Blick nach Schweden.', 'Zug nach Humlebæk und 10 Minuten zu Fuß; mit Kronborg weiter nördlich verbinden.'],
      fr: ['Musée Louisiana', 'Un musée d’art moderne au bord de l’Øresund à 35 km : Giacometti, Kusama, Hockney et un parc de sculptures face à la Suède.', 'Train jusqu’à Humlebæk puis 10 minutes à pied ; à combiner avec Kronborg plus au nord.'],
      it: ['Museo Louisiana', 'Un museo d’arte moderna sull’Øresund a 35 km: Giacometti, Kusama, Hockney e un parco di sculture con vista sulla Svezia.', 'Treno fino a Humlebæk e 10 minuti a piedi; abbinalo a Kronborg più a nord.'],
    }, { spot: 'insta', hours: '11:00–22:00', address: 'Gl. Strandvej 13, Humlebæk' }),
    P('copenhill', 'attraction', 55.6826, 12.6215, CITY, 4.6, 9100, ['adventure', 'views', 'architecture'], {
      ru: ['CopenHill', 'Мусоросжигательный завод с горнолыжным склоном, тропой и скалодромом на крыше по проекту бюро BIG — с вершины вид на гавань.', 'Пешая тропа на крышу бесплатна; лыжи — по записи в любое время года.'],
      en: ['CopenHill', 'A waste-to-energy plant by BIG with a ski slope, hiking trail and climbing wall on its roof — and a harbour view from the top.', 'The hiking trail up is free; skiing is bookable all year round.'],
      es: ['CopenHill', 'Una planta de valorización de residuos de BIG con pista de esquí, sendero y rocódromo en la cubierta, y vistas al puerto desde arriba.', 'El sendero a la cima es gratis; el esquí se reserva todo el año.'],
      de: ['CopenHill', 'Eine Müllverbrennungsanlage von BIG mit Skipiste, Wanderweg und Kletterwand auf dem Dach – oben Blick über den Hafen.', 'Der Wanderweg hinauf ist gratis; Skifahren ganzjährig buchbar.'],
      fr: ['CopenHill', 'Une usine de valorisation des déchets signée BIG avec piste de ski, sentier et mur d’escalade sur le toit, vue sur le port au sommet.', 'Le sentier jusqu’au sommet est gratuit ; ski réservable toute l’année.'],
      it: ['CopenHill', 'Un termovalorizzatore firmato BIG con pista da sci, sentiero e parete d’arrampicata sul tetto, e vista sul porto dalla cima.', 'Il sentiero in cima è gratuito; lo sci si prenota tutto l’anno.'],
    }, { spot: 'hidden', price: free, address: 'Vindmøllevej 6' }),

    P('kadeau', 'food', 55.6732, 12.5888, FOOD, 4.8, 900, ['food', 'luxury'], {
      ru: ['Kadeau', 'Ресторан в Кристиансхавне, вдохновлённый природой острова Борнхольм: ферменты, соления и морепродукты; повышен до трёх звёзд MICHELIN в гиде Северных стран 2026.', 'Бронирование открывается заранее и быстро разбирается.'],
      en: ['Kadeau', 'A Christianshavn restaurant inspired by the island of Bornholm: ferments, pickles and seafood; promoted to three MICHELIN stars in the Nordic guide 2026.', 'Bookings open well ahead and fill fast.'],
      es: ['Kadeau', 'Un restaurante en Christianshavn inspirado en la isla de Bornholm: fermentados, encurtidos y marisco; ascendido a tres estrellas MICHELIN en la guía nórdica 2026.', 'Las reservas se abren con antelación y vuelan.'],
      de: ['Kadeau', 'Ein Restaurant in Christianshavn, inspiriert von der Insel Bornholm: Fermente, Eingelegtes und Meeresfrüchte; im Nordic-Guide 2026 auf drei MICHELIN-Sterne befördert.', 'Reservierungen öffnen früh und sind schnell vergeben.'],
      fr: ['Kadeau', 'Un restaurant de Christianshavn inspiré de l’île de Bornholm : fermentations, pickles et produits de la mer ; promu trois étoiles MICHELIN au guide nordique 2026.', 'Les réservations ouvrent tôt et partent vite.'],
      it: ['Kadeau', 'Un ristorante a Christianshavn ispirato all’isola di Bornholm: fermentati, sottaceti e frutti di mare; promosso a tre stelle MICHELIN nella guida nordica 2026.', 'Le prenotazioni aprono presto e finiscono in fretta.'],
    }, { price: level(3), michelin: { award: 'star3', year: 2026 }, address: 'Wildersgade 10A', menu: [
      ['Tasting menu', undefined, 'дегустационный сет «Борнхольм»|Bornholm-inspired tasting menu|menú degustación inspirado en Bornholm|Degustationsmenü inspiriert von Bornholm|menu dégustation inspiré de Bornholm|menù degustazione ispirato a Bornholm'],
      ['Juice pairing', undefined, 'безалкогольное сопровождение из соков|non-alcoholic juice pairing|maridaje sin alcohol de zumos|alkoholfreie Saftbegleitung|accord de jus sans alcool|abbinamento analcolico di succhi'],
    ] }),
    P('alchemist', 'food', 55.693, 12.611, FOOD, 4.7, 1500, ['food', 'luxury', 'art'], {
      ru: ['Alchemist', 'Иммерсивный ресторан Расмуса Мунка на Рефсхалеёэне: около 50 «впечатлений» под проекциями купола-планетария; две звезды MICHELIN (гид Северных стран 2026).', 'Ужин длится около 5–6 часов; бронируйте сильно заранее.'],
      en: ['Alchemist', 'Rasmus Munk’s immersive restaurant on Refshaleøen: around 50 “impressions” under a planetarium-like dome; two MICHELIN stars (Nordic guide 2026).', 'Dinner lasts about 5–6 hours; book far ahead.'],
      es: ['Alchemist', 'El restaurante inmersivo de Rasmus Munk en Refshaleøen: unas 50 “impresiones” bajo una cúpula tipo planetario; dos estrellas MICHELIN (guía nórdica 2026).', 'La cena dura 5–6 horas; reserva con mucha antelación.'],
      de: ['Alchemist', 'Rasmus Munks immersives Restaurant auf Refshaleøen: rund 50 „Impressionen“ unter einer Planetariumskuppel; zwei MICHELIN-Sterne (Nordic-Guide 2026).', 'Das Dinner dauert 5–6 Stunden; sehr früh buchen.'],
      fr: ['Alchemist', 'Le restaurant immersif de Rasmus Munk à Refshaleøen : une cinquantaine d’« impressions » sous un dôme façon planétarium ; deux étoiles MICHELIN (guide nordique 2026).', 'Le dîner dure 5 à 6 heures ; réservez très tôt.'],
      it: ['Alchemist', 'Il ristorante immersivo di Rasmus Munk a Refshaleøen: circa 50 “impressioni” sotto una cupola da planetario; due stelle MICHELIN (guida nordica 2026).', 'La cena dura 5–6 ore; prenota con largo anticipo.'],
    }, { price: level(3), michelin: { award: 'star2', year: 2026 }, address: 'Refshalevej 173C', menu: [
      ['Holistic Cuisine', undefined, 'иммерсивный сет из ~50 впечатлений|immersive menu of ~50 impressions|menú inmersivo de unas 50 impresiones|immersives Menü aus ~50 Impressionen|menu immersif d’environ 50 impressions|menù immersivo di circa 50 impressioni'],
      ['Wine pairing', undefined, 'винное сопровождение|wine pairing|maridaje de vinos|Weinbegleitung|accord mets-vins|abbinamento vini'],
    ] }),
    P('reffen', 'food', 55.6935, 12.608, HARBOUR, 4.5, 14000, ['food', 'streetfood', 'nightlife'], {
      ru: ['Reffen', 'Рынок уличной еды из контейнеров на бывшей верфи Рефсхалеёэн: кухни всего мира, бары и шезлонги у воды на закате.', 'Работает с весны по осень; добирайтесь на гаванском автобусе-катере.'],
      en: ['Reffen', 'A street-food market of shipping containers on the former Refshaleøen shipyard: world cuisines, bars and waterside loungers at sunset.', 'Open spring to autumn; get there on the harbour bus boat.'],
      es: ['Reffen', 'Un mercado de comida callejera en contenedores en el antiguo astillero de Refshaleøen: cocinas del mundo, bares y tumbonas junto al agua al atardecer.', 'Abre de primavera a otoño; llega en el barco-bus del puerto.'],
      de: ['Reffen', 'Ein Streetfood-Markt aus Containern auf der ehemaligen Werft Refshaleøen: Küchen der Welt, Bars und Liegen am Wasser bei Sonnenuntergang.', 'Von Frühling bis Herbst; mit dem Hafenbus-Boot hin.'],
      fr: ['Reffen', 'Un marché de street food en conteneurs sur l’ancien chantier de Refshaleøen : cuisines du monde, bars et transats au bord de l’eau au couchant.', 'Ouvert du printemps à l’automne ; venez en bateau-bus.'],
      it: ['Reffen', 'Un mercato di street food in container sull’ex cantiere di Refshaleøen: cucine del mondo, bar e sdraio sull’acqua al tramonto.', 'Aperto da primavera ad autunno; arriva con il battello-bus del porto.'],
    }, { price: level(1), address: 'Refshalevej 167', menu: [
      ['Street food', undefined, 'уличная еда со всего мира|street food from around the world|comida callejera del mundo|Streetfood aus aller Welt|street food du monde entier|street food da tutto il mondo'],
      ['Craft beer', undefined, 'крафтовое пиво|craft beer|cerveza artesana|Craft-Bier|bière artisanale|birra artigianale'],
    ] }),
    P('juno-the-bakery', 'food', 55.699, 12.58, FOOD, 4.7, 4800, ['food'], {
      ru: ['Juno the Bakery', 'Крошечная пекарня в Эстербро, ради кардамонных булочек которой утром выстраивается очередь вдоль улицы.', 'Приходите к открытию — булочки разбирают к полудню; работает не каждый день.'],
      en: ['Juno the Bakery', 'A tiny Østerbro bakery whose cardamom buns draw a morning queue down the street.', 'Come at opening — buns sell out by noon; not open every day.'],
      es: ['Juno the Bakery', 'Una diminuta panadería en Østerbro cuyos bollos de cardamomo provocan colas por la mañana.', 'Ve a la apertura: se agotan a mediodía; no abre todos los días.'],
      de: ['Juno the Bakery', 'Eine winzige Bäckerei in Østerbro, deren Kardamomschnecken morgens eine Schlange auf die Straße ziehen.', 'Zur Öffnung kommen – mittags ausverkauft; nicht täglich geöffnet.'],
      fr: ['Juno the Bakery', 'Une minuscule boulangerie d’Østerbro dont les brioches à la cardamome créent une file le matin.', 'Venez à l’ouverture, épuisé à midi ; pas ouvert tous les jours.'],
      it: ['Juno the Bakery', 'Un minuscolo forno a Østerbro i cui panini al cardamomo creano la coda al mattino.', 'Arriva all’apertura: finiscono entro mezzogiorno; non apre tutti i giorni.'],
    }, { price: level(1), address: 'Århusgade 48', menu: [
      ['Cardamom bun', undefined, 'булочка с кардамоном|cardamom bun|bollo de cardamomo|Kardamomschnecke|brioche à la cardamome|girella al cardamomo'],
      ['Sourdough', undefined, 'хлеб на закваске|sourdough bread|pan de masa madre|Sauerteigbrot|pain au levain|pane a lievito madre'],
    ] }),
    P('johns-hotdog-deli', 'food', 55.6728, 12.5655, FOOD, 4.6, 6900, ['food', 'streetfood'], {
      ru: ['John’s Hotdog Deli', 'Будка у Центрального вокзала с, по мнению многих, лучшим датским хот-догом: свиная сосиска, ремулад, жареный и свежий лук, огурцы.', 'Закажите «Johns Classic» и шоколадное молоко Cocio, как датчане.'],
      en: ['John’s Hotdog Deli', 'A stand by Central Station with what many call Denmark’s best hot dog: pork sausage, remoulade, crispy and raw onion, pickles.', 'Order the “Johns Classic” with a Cocio chocolate milk, Danish style.'],
      es: ['John’s Hotdog Deli', 'Un puesto junto a la Estación Central con lo que muchos llaman el mejor perrito danés: salchicha de cerdo, remoulade, cebolla frita y cruda, pepinillos.', 'Pide el “Johns Classic” con un batido de chocolate Cocio.'],
      de: ['John’s Hotdog Deli', 'Ein Stand am Hauptbahnhof mit dem für viele besten dänischen Hotdog: Schweinewurst, Remoulade, Röst- und frische Zwiebeln, Gurken.', 'Den „Johns Classic“ mit Cocio-Schokomilch bestellen.'],
      fr: ['John’s Hotdog Deli', 'Un kiosque près de la gare centrale avec, pour beaucoup, le meilleur hot-dog danois : saucisse de porc, rémoulade, oignons frits et crus, cornichons.', 'Prenez le « Johns Classic » et un lait chocolaté Cocio.'],
      it: ['John’s Hotdog Deli', 'Un chiosco vicino alla Stazione Centrale con quello che molti chiamano il miglior hot dog danese: salsiccia di maiale, remoulade, cipolla fritta e cruda, cetrioli.', 'Ordina il “Johns Classic” con un latte al cioccolato Cocio.'],
    }, { price: level(1), address: 'Bernstorffsgade 5', menu: [
      ['Johns Classic', undefined, 'хот-дог с ремуладом, луком и огурцами|hot dog with remoulade, onions and pickles|perrito con remoulade, cebolla y pepinillos|Hotdog mit Remoulade, Zwiebeln und Gurken|hot-dog rémoulade, oignons et cornichons|hot dog con remoulade, cipolle e cetrioli'],
      ['Cocio', undefined, 'датское шоколадное молоко|Danish chocolate milk|batido de chocolate danés|dänische Schokomilch|lait chocolaté danois|latte al cioccolato danese'],
    ] }),
    P('aamanns-1921', 'food', 55.6837, 12.5807, FOOD, 4.6, 3600, ['food'], {
      ru: ['Aamanns 1921', 'Ресторан смёрребрёда — датских открытых бутербродов на ржаном хлебе — в историческом доме у Королевского сада; классика и сезонные версии.', 'Возьмите 2–3 смёрребрёда на человека, включая сельдь и жареную камбалу; к ним — шнапс.'],
      en: ['Aamanns 1921', 'A smørrebrød restaurant — Danish open sandwiches on rye — in a historic building near the King’s Garden, classic and seasonal.', 'Order 2–3 per person, including herring and fried plaice; add a snaps.'],
      es: ['Aamanns 1921', 'Un restaurante de smørrebrød —sándwiches abiertos daneses sobre centeno— en un edificio histórico junto al Jardín del Rey, clásicos y de temporada.', 'Pide 2–3 por persona, con arenque y platija frita; acompaña con un snaps.'],
      de: ['Aamanns 1921', 'Ein Smørrebrød-Restaurant – dänische belegte Roggenbrote – in einem historischen Haus beim Königsgarten, klassisch und saisonal.', '2–3 pro Person bestellen, mit Hering und gebratener Scholle; dazu ein Schnaps.'],
      fr: ['Aamanns 1921', 'Un restaurant de smørrebrød, tartines danoises sur pain de seigle, dans une maison historique près du Jardin du roi, classiques et de saison.', 'Prenez-en 2–3 par personne, dont hareng et plie frite ; avec un snaps.'],
      it: ['Aamanns 1921', 'Un ristorante di smørrebrød, tartine danesi su pane di segale, in un edificio storico vicino al Giardino del Re, classiche e di stagione.', 'Ordinane 2–3 a testa, con aringa e platessa fritta; con uno snaps.'],
    }, { price: level(2), address: 'Niels Hemmingsens Gade 19–21', menu: [
      ['Marinated herring', undefined, 'маринованная сельдь на ржаном хлебе|marinated herring on rye|arenque marinado sobre centeno|eingelegter Hering auf Roggenbrot|hareng mariné sur seigle|aringa marinata su segale'],
      ['Fried plaice', undefined, 'жареная камбала с ремуладом|fried plaice with remoulade|platija frita con remoulade|gebratene Scholle mit Remoulade|plie frite et rémoulade|platessa fritta con remoulade'],
    ] }),
    P('koedbyens-fiskebar', 'food', 55.6688, 12.5609, FOOD, 4.5, 3900, ['food', 'nightlife'], {
      ru: ['Kødbyens Fiskebar', 'Рыбный бар в бывшем мясном цехе Кёдбюен: устрицы, рыба и морепродукты северных морей, натуральные вина.', 'Вечером вокруг оживает весь квартал Кёдбюен с барами.'],
      en: ['Kødbyens Fiskebar', 'A fish bar in a former butchery in the Meatpacking District: oysters, Nordic fish and seafood, natural wines.', 'In the evening the whole Kødbyen area comes alive with bars.'],
      es: ['Kødbyens Fiskebar', 'Un bar de pescado en una antigua carnicería del Meatpacking: ostras, pescado y marisco nórdico, vinos naturales.', 'Por la noche todo Kødbyen se llena de bares.'],
      de: ['Kødbyens Fiskebar', 'Eine Fischbar in einer ehemaligen Schlachterei im Kødbyen: Austern, nordischer Fisch und Meeresfrüchte, Naturweine.', 'Abends belebt sich das ganze Kødbyen mit Bars.'],
      fr: ['Kødbyens Fiskebar', 'Un bar à poisson dans une ancienne boucherie du quartier de Kødbyen : huîtres, poissons et fruits de mer nordiques, vins nature.', 'Le soir, tout Kødbyen s’anime de bars.'],
      it: ['Kødbyens Fiskebar', 'Un bar di pesce in un’ex macelleria del Kødbyen: ostriche, pesce e frutti di mare nordici, vini naturali.', 'La sera tutto il Kødbyen si anima di bar.'],
    }, { price: level(3), address: 'Flæsketorvet 100', menu: [
      ['Oysters', undefined, 'устрицы|oysters|ostras|Austern|huîtres|ostriche'],
      ['Fish of the day', undefined, 'рыба дня|fish of the day|pescado del día|Fisch des Tages|poisson du jour|pesce del giorno'],
    ] }),
    P('mother', 'food', 55.669, 12.56, FOOD, 4.5, 6700, ['food'], {
      ru: ['Mother', 'Пиццерия в Кёдбюен с пиццей на закваске из дровяной печи и террасой бывшего мясного квартала.', 'По выходным здесь популярный бранч; вечером бронируйте.'],
      en: ['Mother', 'A Meatpacking District pizzeria serving sourdough pizza from a wood oven, with a terrace in the old meat market.', 'Weekend brunch is popular; book in the evening.'],
      es: ['Mother', 'Una pizzería en el Meatpacking con pizza de masa madre al horno de leña y terraza en el antiguo mercado de carne.', 'El brunch del fin de semana es popular; reserva por la noche.'],
      de: ['Mother', 'Eine Pizzeria im Kødbyen mit Sauerteigpizza aus dem Holzofen und Terrasse im alten Fleischmarkt.', 'Am Wochenende beliebter Brunch; abends reservieren.'],
      fr: ['Mother', 'Une pizzeria de Kødbyen : pizza au levain cuite au feu de bois, terrasse dans l’ancien marché à la viande.', 'Brunch prisé le week-end ; réservez le soir.'],
      it: ['Mother', 'Una pizzeria nel Kødbyen con pizza a lievito madre al forno a legna e terrazza nell’ex mercato della carne.', 'Brunch del weekend molto amato; prenota la sera.'],
    }, { price: level(2), address: 'Høkerboderne 9–15', menu: [
      ['Sourdough pizza', undefined, 'пицца на закваске|sourdough pizza|pizza de masa madre|Sauerteigpizza|pizza au levain|pizza a lievito madre'],
      ['Weekend brunch', undefined, 'бранч по выходным|weekend brunch|brunch de fin de semana|Wochenend-Brunch|brunch du week-end|brunch del weekend'],
    ] }),
    P('gasoline-grill', 'food', 55.683, 12.58, FOOD, 4.6, 6800, ['food', 'streetfood'], {
      ru: ['Gasoline Grill', 'Бургерная, начинавшаяся на бывшей автозаправке: короткое меню, органическая говядина и бургеры, которые заканчиваются к вечеру.', 'Работает до тех пор, пока не кончится фарш; приходите к обеду.'],
      en: ['Gasoline Grill', 'A burger joint that started in a former petrol station: a short menu, organic beef and burgers that sell out by evening.', 'Open until the meat runs out; come for lunch.'],
      es: ['Gasoline Grill', 'Una hamburguesería que nació en una antigua gasolinera: carta corta, vacuno ecológico y hamburguesas que se agotan por la tarde.', 'Abre hasta que se acaba la carne; ve a mediodía.'],
      de: ['Gasoline Grill', 'Ein Burgerladen, der in einer ehemaligen Tankstelle begann: kurze Karte, Bio-Rind und Burger, die bis zum Abend ausverkauft sind.', 'Geöffnet, bis das Fleisch aus ist; mittags kommen.'],
      fr: ['Gasoline Grill', 'Un burger né dans une ancienne station-service : carte courte, bœuf bio et burgers épuisés avant le soir.', 'Ouvert jusqu’à épuisement de la viande ; venez à midi.'],
      it: ['Gasoline Grill', 'Un locale di hamburger nato in un ex distributore: menù corto, manzo biologico e burger che finiscono entro sera.', 'Aperto finché c’è carne; vieni a pranzo.'],
    }, { price: level(1), address: 'Landgreven 10', menu: [
      ['Gasoline burger', undefined, 'фирменный бургер|signature burger|hamburguesa de la casa|Signature-Burger|burger signature|burger della casa'],
      ['Fries', undefined, 'картофель фри|fries|patatas fritas|Pommes|frites|patatine'],
    ] }),
    P('paludan-bogcafe', 'food', 55.68, 12.57, CITY, 4.4, 7200, ['food', 'nomads'], {
      ru: ['Paludan Bogcafé', 'Книжное кафе в Латинском квартале у университета: стены книжных полок до потолка, завтраки, бранч и недорогие обеды.', 'Хорошее место для завтрака перед прогулкой по Стрёгет.'],
      en: ['Paludan Bogcafé', 'A book café in the Latin Quarter by the university: floor-to-ceiling shelves, breakfasts, brunch and inexpensive lunches.', 'A good breakfast stop before strolling Strøget.'],
      es: ['Paludan Bogcafé', 'Un café-librería en el Barrio Latino junto a la universidad: estanterías hasta el techo, desayunos, brunch y comidas baratas.', 'Buen desayuno antes de pasear por Strøget.'],
      de: ['Paludan Bogcafé', 'Ein Buchcafé im Lateinerviertel nahe der Uni: Regale bis zur Decke, Frühstück, Brunch und günstige Mittagessen.', 'Gutes Frühstück vor einem Bummel über die Strøget.'],
      fr: ['Paludan Bogcafé', 'Un café-librairie du Quartier latin près de l’université : étagères jusqu’au plafond, petits-déjeuners, brunch et déjeuners abordables.', 'Bon petit-déjeuner avant de flâner sur Strøget.'],
      it: ['Paludan Bogcafé', 'Un caffè-libreria nel Quartiere Latino vicino all’università: scaffali fino al soffitto, colazioni, brunch e pranzi economici.', 'Ottima colazione prima di passeggiare sullo Strøget.'],
    }, { price: level(1), address: 'Fiolstræde 10–12', menu: [
      ['Brunch plate', undefined, 'тарелка бранча|brunch plate|plato de brunch|Brunch-Teller|assiette brunch|piatto brunch'],
      ['Coffee', undefined, 'кофе|coffee|café|Kaffee|café|caffè'],
    ] }),
  ],
  routes: [
    D(['=copenhagen-nyhavn', '=copenhagen-amalienborg-marble-church', 'kastellet', 'little-mermaid', 'aamanns-1921', 'rosenborg-castle', 'smk', '=copenhagen-round-tower', 'kadeau'],
      'Нюхавн, Амалиенборг, Русалочка и Розенборг|Nyhavn, Amalienborg, the Mermaid and Rosenborg|Nyhavn, Amalienborg, la Sirenita y Rosenborg|Nyhavn, Amalienborg, Meerjungfrau und Rosenborg|Nyhavn, Amalienborg, la Sirène et Rosenborg|Nyhavn, Amalienborg, la Sirenetta e Rosenborg'),
    D(['juno-the-bakery', 'christiansborg', 'church-of-our-saviour', 'christiania', 'reffen', 'copenhill', 'alchemist'],
      'Кристиансборг, Христиания и Рефсхалеёэн|Christiansborg, Christiania and Refshaleøen|Christiansborg, Christiania y Refshaleøen|Christiansborg, Christiania und Refshaleøen|Christiansborg, Christiania et Refshaleøen|Christiansborg, Christiania e Refshaleøen'),
    D(['=copenhagen-kronborg', 'louisiana', 'gasoline-grill', 'glyptotek', '=copenhagen-tivoli', 'koedbyens-fiskebar'],
      'Замок Гамлета, музей Луизиана и Тиволи|Hamlet’s castle, Louisiana and Tivoli|El castillo de Hamlet, Louisiana y Tívoli|Hamlets Schloss, Louisiana und Tivoli|Le château d’Hamlet, Louisiana et Tivoli|Il castello di Amleto, Louisiana e Tivoli'),
  ],
};

export default pack;
