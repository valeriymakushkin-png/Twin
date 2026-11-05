import type { CityPack } from '../types';
import { free, level, makeDay, makePlace } from './_kit.ts';

const P = makePlace('madrid');
const D = makeDay('madrid');
const CITY = 'vfB2rQhHFj8';
const PALACE = 'GsMQ8mhqb6A';
const PARK = '9gZOFOok6CI';
const FOOD = 'By4WtkRygLQ';
const STREET = 'mZg0f7xA0Vo';
const TEMPLE = 'xURysKa9PMs';

const pack: CityPack = {
  country: 'ES',
  city: 'madrid',
  places: [
    P('prado', 'attraction', 40.4138, -3.6921, PALACE, 4.8, 102000, ['art', 'museums'], {
      ru: ['Музей Прадо', 'Одна из величайших коллекций живописи мира: «Менины» Веласкеса, «Чёрные картины» Гойи, «Сад земных наслаждений» Босха.', 'Последние два часа перед закрытием вход бесплатный, но очередь длинная; заложите на музей полдня.'],
      en: ['Prado Museum', 'One of the world’s great painting collections: Velázquez’s Las Meninas, Goya’s Black Paintings, Bosch’s Garden of Earthly Delights.', 'The last two hours are free, but the queue is long; allow half a day.'],
      es: ['Museo del Prado', 'Una de las grandes pinacotecas del mundo: Las Meninas de Velázquez, las Pinturas negras de Goya y El jardín de las delicias del Bosco.', 'Las dos últimas horas son gratis, con cola larga; dedica media jornada.'],
      de: ['Prado', 'Eine der größten Gemäldesammlungen der Welt: Velázquez’ Las Meninas, Goyas Schwarze Bilder, Boschs Garten der Lüste.', 'Die letzten zwei Stunden sind gratis, aber mit langer Schlange; einen halben Tag einplanen.'],
      fr: ['Musée du Prado', 'L’une des plus grandes collections de peinture au monde : les Ménines de Velázquez, les Peintures noires de Goya, le Jardin des délices de Bosch.', 'Gratuit les deux dernières heures, mais longue file ; comptez une demi-journée.'],
      it: ['Museo del Prado', 'Una delle più grandi pinacoteche del mondo: Las Meninas di Velázquez, le Pitture nere di Goya, il Giardino delle delizie di Bosch.', 'Le ultime due ore sono gratis ma con lunga coda; calcola mezza giornata.'],
    }, { hours: '10:00–20:00', address: 'Paseo del Prado' }),
    P('reina-sofia', 'attraction', 40.408, -3.6946, CITY, 4.6, 54000, ['art', 'museums'], {
      ru: ['Музей королевы Софии', 'Искусство XX века в бывшей больнице у вокзала Аточа: «Герника» Пикассо, Дали и Миро; стеклянные лифты снаружи здания.', 'Вход бесплатный по вечерам большинства дней и в воскресенье днём — уточните часы на сайте.'],
      en: ['Reina Sofía Museum', '20th-century art in a former hospital by Atocha station: Picasso’s Guernica, Dalí and Miró, with glass lifts outside.', 'Entry is free on most evenings and on Sunday afternoons — check the hours online.'],
      es: ['Museo Reina Sofía', 'Arte del siglo XX en un antiguo hospital junto a Atocha: el Guernica de Picasso, Dalí y Miró, con ascensores de cristal en la fachada.', 'Gratis la mayoría de las tardes y el domingo por la tarde: consulta horarios.'],
      de: ['Museo Reina Sofía', 'Kunst des 20. Jh. in einem ehemaligen Krankenhaus am Bahnhof Atocha: Picassos Guernica, Dalí und Miró, mit gläsernen Außenaufzügen.', 'An den meisten Abenden und sonntagnachmittags gratis – Zeiten online prüfen.'],
      fr: ['Musée Reina Sofía', 'L’art du XXe siècle dans un ancien hôpital près d’Atocha : Guernica de Picasso, Dalí et Miró, ascenseurs vitrés en façade.', 'Gratuit la plupart des soirs et le dimanche après-midi ; vérifiez les horaires.'],
      it: ['Museo Reina Sofía', 'Arte del Novecento in un ex ospedale vicino ad Atocha: Guernica di Picasso, Dalí e Miró, con ascensori di vetro in facciata.', 'Gratis quasi tutte le sere e la domenica pomeriggio: controlla gli orari.'],
    }, { hours: '10:00–21:00', address: 'Calle de Santa Isabel 52' }),
    P('thyssen', 'attraction', 40.4161, -3.6948, PALACE, 4.7, 35000, ['art', 'museums'], {
      ru: ['Музей Тиссена-Борнемисы', 'Бывшая частная коллекция, заполняющая пробелы Прадо: от ранних итальянцев до импрессионистов, экспрессионистов и поп-арта.', 'Идите сверху вниз — так коллекция идёт хронологически.'],
      en: ['Thyssen-Bornemisza Museum', 'A former private collection that fills the Prado’s gaps: from early Italians to Impressionists, Expressionists and pop art.', 'Go top floor down — the collection runs chronologically.'],
      es: ['Museo Thyssen-Bornemisza', 'Una antigua colección privada que completa el Prado: de los primitivos italianos a impresionistas, expresionistas y pop art.', 'Recórrelo de arriba abajo: va en orden cronológico.'],
      de: ['Museo Thyssen-Bornemisza', 'Eine ehemalige Privatsammlung, die die Lücken des Prado füllt: von frühen Italienern bis zu Impressionisten, Expressionisten und Pop-Art.', 'Von oben nach unten gehen – die Sammlung ist chronologisch.'],
      fr: ['Musée Thyssen-Bornemisza', 'Une ancienne collection privée qui comble les lacunes du Prado : des primitifs italiens aux impressionnistes, expressionnistes et pop art.', 'Parcourez-le de haut en bas, l’ordre est chronologique.'],
      it: ['Museo Thyssen-Bornemisza', 'Un’ex collezione privata che completa il Prado: dai primitivi italiani a impressionisti, espressionisti e pop art.', 'Visitalo dall’alto in basso: è in ordine cronologico.'],
    }, { hours: '10:00–19:00', address: 'Paseo del Prado 8' }),
    P('puerta-del-sol', 'attraction', 40.4169, -3.7035, CITY, 4.4, 99000, ['city', 'history'], {
      ru: ['Пуэрта-дель-Соль', 'Сердце Мадрида: часы, под которые испанцы встречают Новый год, статуя медведя с земляничным деревом и «нулевой километр» дорог Испании.', 'Найдите табличку «Kilómetro Cero» на тротуаре перед зданием с часами.'],
      en: ['Puerta del Sol', 'The heart of Madrid: the clock Spaniards ring in the New Year by, the Bear and Strawberry Tree statue and “Kilometre Zero” of Spain’s roads.', 'Find the Kilómetro Cero plaque on the pavement in front of the clock building.'],
      es: ['Puerta del Sol', 'El corazón de Madrid: el reloj de las campanadas, la estatua del Oso y el Madroño y el Kilómetro Cero de las carreteras.', 'Busca la placa del Kilómetro Cero frente al edificio del reloj.'],
      de: ['Puerta del Sol', 'Das Herz Madrids: die Uhr, zu der Spanien ins neue Jahr läutet, die Statue des Bären mit dem Erdbeerbaum und der Kilometer null der Straßen.', 'Die Plakette Kilómetro Cero vor dem Uhrengebäude suchen.'],
      fr: ['Puerta del Sol', 'Le cœur de Madrid : l’horloge des douze coups du Nouvel An, la statue de l’Ours et de l’Arbousier et le kilomètre zéro des routes espagnoles.', 'Cherchez la plaque Kilómetro Cero devant le bâtiment de l’horloge.'],
      it: ['Puerta del Sol', 'Il cuore di Madrid: l’orologio del Capodanno spagnolo, la statua dell’Orso e del Corbezzolo e il chilometro zero delle strade.', 'Cerca la targa Kilómetro Cero davanti all’edificio dell’orologio.'],
    }, { price: free, hours: 'always' }),
    P('gran-via', 'attraction', 40.4203, -3.7058, STREET, 4.6, 61000, ['architecture', 'shopping', 'city'], {
      ru: ['Гран-Виа', 'Бродвей Мадрида: здания начала XX века, театры мюзиклов и магазины; символ — купол здания Метрополис с крылатой Победой.', 'Самый известный вид на Метрополис — с террасы Círculo de Bellas Artes или Plaza de España.'],
      en: ['Gran Vía', 'Madrid’s Broadway: early-20th-century buildings, musical theatres and shops; its icon is the Metrópolis building’s dome with a winged Victory.', 'The classic view of the Metrópolis is from the Círculo de Bellas Artes rooftop.'],
      es: ['Gran Vía', 'El Broadway madrileño: edificios de principios del siglo XX, teatros de musicales y tiendas; su icono, la cúpula del Metrópolis con la Victoria alada.', 'La vista clásica del Metrópolis es desde la azotea del Círculo de Bellas Artes.'],
      de: ['Gran Vía', 'Madrids Broadway: Bauten des frühen 20. Jh., Musicaltheater und Läden; Wahrzeichen ist die Kuppel des Metrópolis mit der geflügelten Victoria.', 'Der klassische Blick auf das Metrópolis bietet die Dachterrasse des Círculo de Bellas Artes.'],
      fr: ['Gran Vía', 'Le Broadway madrilène : immeubles du début du XXe, théâtres de comédies musicales et boutiques ; son emblème, le dôme du Metrópolis et sa Victoire ailée.', 'La vue classique sur le Metrópolis se prend du toit du Círculo de Bellas Artes.'],
      it: ['Gran Vía', 'La Broadway di Madrid: palazzi del primo Novecento, teatri di musical e negozi; il simbolo è la cupola del Metrópolis con la Vittoria alata.', 'La vista classica sul Metrópolis è dalla terrazza del Círculo de Bellas Artes.'],
    }, { spot: 'insta', price: free }),
    P('almudena-cathedral', 'attraction', 40.4157, -3.7144, PALACE, 4.5, 38000, ['architecture', 'history'], {
      ru: ['Собор Альмудена', 'Кафедральный собор напротив Королевского дворца, строившийся более ста лет и освящённый в 1993 году; с купола — вид на дворец и Каса-де-Кампо.', 'Вход в собор бесплатный; на купол — отдельный билет через музей собора.'],
      en: ['Almudena Cathedral', 'The cathedral facing the Royal Palace, built over more than a century and consecrated in 1993; its dome looks over the palace and the Casa de Campo.', 'The cathedral is free; the dome is ticketed via the cathedral museum.'],
      es: ['Catedral de la Almudena', 'La catedral frente al Palacio Real, construida durante más de un siglo y consagrada en 1993; desde la cúpula se ve el palacio y la Casa de Campo.', 'La entrada al templo es gratis; la cúpula se visita con el museo.'],
      de: ['Almudena-Kathedrale', 'Die Kathedrale gegenüber dem Königspalast, über ein Jahrhundert gebaut und 1993 geweiht; die Kuppel blickt auf Palast und Casa de Campo.', 'Die Kathedrale ist gratis; die Kuppel kostet über das Domuseum.'],
      fr: ['Cathédrale de l’Almudena', 'La cathédrale face au palais royal, bâtie pendant plus d’un siècle et consacrée en 1993 ; sa coupole domine le palais et la Casa de Campo.', 'La cathédrale est gratuite ; la coupole se visite via le musée.'],
      it: ['Cattedrale dell’Almudena', 'La cattedrale di fronte al Palazzo Reale, costruita in oltre un secolo e consacrata nel 1993; dalla cupola si vedono il palazzo e la Casa de Campo.', 'La cattedrale è gratuita; la cupola si visita con il museo.'],
    }, { price: free, hours: '10:00–20:30' }),
    P('el-rastro', 'attraction', 40.4087, -3.7075, STREET, 4.4, 41000, ['market', 'shopping'], {
      ru: ['Эль-Растро', 'Огромный воскресный блошиный рынок в Ла-Латине: антиквариат, винтаж, ремесленные лавки; после него мадридцы идут на вермут в таверны.', 'Только по воскресеньям и праздникам с утра до ~15:00; следите за карманами.'],
      en: ['El Rastro', 'A huge Sunday flea market in La Latina: antiques, vintage and craft stalls; afterwards Madrileños go for vermouth in the taverns.', 'Sundays and holidays only, morning to about 3 pm; mind your pockets.'],
      es: ['El Rastro', 'El gran mercadillo dominical de La Latina: antigüedades, vintage y artesanía; después, vermú en las tabernas.', 'Solo domingos y festivos, por la mañana hasta las 15:00; cuidado con los bolsillos.'],
      de: ['El Rastro', 'Ein riesiger Sonntagsflohmarkt in La Latina: Antiquitäten, Vintage und Kunsthandwerk; danach geht man zum Wermut in die Tavernen.', 'Nur sonntags und feiertags vormittags bis etwa 15 Uhr; auf Taschen achten.'],
      fr: ['El Rastro', 'Un immense marché aux puces dominical à La Latina : antiquités, vintage et artisanat ; ensuite, vermouth dans les tavernes.', 'Dimanche et jours fériés seulement, le matin jusqu’à 15 h ; attention aux poches.'],
      it: ['El Rastro', 'Un enorme mercato delle pulci domenicale a La Latina: antiquariato, vintage e artigianato; poi vermut nelle taverne.', 'Solo domenica e festivi, la mattina fino alle 15 circa; attenzione alle tasche.'],
    }, { price: free }),
    P('barrio-de-las-letras', 'attraction', 40.414, -3.6983, STREET, 4.6, 14000, ['oldtown', 'history', 'nightlife'], {
      ru: ['Квартал литераторов (Баррио-де-лас-Летрас)', 'Квартал, где жили Сервантес, Лопе де Вега и Кеведо: цитаты на мостовой, старые таверны и площадь Санта-Ана.', 'Вечером здесь лучшие бары для тапас — пройдите по улице Уэртас.'],
      en: ['Barrio de las Letras', 'The quarter where Cervantes, Lope de Vega and Quevedo lived: quotes set in the pavement, old taverns and Plaza de Santa Ana.', 'In the evening it has the best tapas bars — stroll Calle de las Huertas.'],
      es: ['Barrio de las Letras', 'El barrio donde vivieron Cervantes, Lope de Vega y Quevedo: citas en el suelo, tabernas antiguas y la plaza de Santa Ana.', 'Por la noche tiene los mejores bares de tapas: pasea por la calle Huertas.'],
      de: ['Barrio de las Letras', 'Das Viertel, in dem Cervantes, Lope de Vega und Quevedo lebten: Zitate im Pflaster, alte Tavernen und die Plaza de Santa Ana.', 'Abends die besten Tapasbars – die Calle de las Huertas entlang.'],
      fr: ['Barrio de las Letras', 'Le quartier où vécurent Cervantes, Lope de Vega et Quevedo : citations dans le pavé, vieilles tavernes et place Santa Ana.', 'Le soir, les meilleurs bars à tapas : flânez rue des Huertas.'],
      it: ['Barrio de las Letras', 'Il quartiere dove vissero Cervantes, Lope de Vega e Quevedo: citazioni nel selciato, vecchie taverne e plaza de Santa Ana.', 'La sera ha i migliori bar di tapas: passeggia in calle de las Huertas.'],
    }, { spot: 'hidden', price: free }),
    P('toledo', 'attraction', 39.8628, -4.0273, PALACE, 4.8, 51000, ['history', 'unesco', 'oldtown'], {
      ru: ['Толедо', 'Город трёх культур на холме над рекой Тахо в 33 минутах на скоростном поезде: собор, синагоги, мечеть и картины Эль Греко; объект ЮНЕСКО.', 'Скоростной поезд Avant от Аточи; лучший вид на город — со смотровой Мирадор-дель-Валье.'],
      en: ['Toledo', 'The city of three cultures on a hill above the Tagus, 33 minutes by fast train: a cathedral, synagogues, a mosque and El Greco paintings; UNESCO-listed.', 'Avant fast train from Atocha; the best view is from the Mirador del Valle.'],
      es: ['Toledo', 'La ciudad de las tres culturas sobre el Tajo, a 33 minutos en tren rápido: catedral, sinagogas, mezquita y El Greco; Patrimonio UNESCO.', 'Tren Avant desde Atocha; la mejor vista, desde el Mirador del Valle.'],
      de: ['Toledo', 'Die Stadt der drei Kulturen auf einem Hügel über dem Tajo, 33 Minuten mit dem Schnellzug: Kathedrale, Synagogen, Moschee und El Greco; UNESCO-Welterbe.', 'Schnellzug Avant ab Atocha; bester Blick vom Mirador del Valle.'],
      fr: ['Tolède', 'La ville des trois cultures sur une colline au-dessus du Tage, à 33 minutes en train rapide : cathédrale, synagogues, mosquée et Greco ; patrimoine UNESCO.', 'Train rapide Avant depuis Atocha ; plus belle vue depuis le Mirador del Valle.'],
      it: ['Toledo', 'La città delle tre culture su un colle sopra il Tago, a 33 minuti di treno veloce: cattedrale, sinagoghe, moschea e El Greco; patrimonio UNESCO.', 'Treno veloce Avant da Atocha; la vista migliore dal Mirador del Valle.'],
    }, { spot: 'insta' }),
    P('bernabeu', 'attraction', 40.4531, -3.6883, CITY, 4.7, 88000, ['city', 'architecture'], {
      ru: ['Стадион Сантьяго Бернабеу', 'Домашний стадион «Реала» после масштабной реконструкции с выдвижным полем; тур включает музей трофеев, раздевалки и выход к полю.', 'Билеты на тур дешевле онлайн; в дни матчей тур сокращён.'],
      en: ['Santiago Bernabéu Stadium', 'Real Madrid’s home after a major rebuild with a retractable pitch; the tour covers the trophy museum, dressing rooms and the pitch side.', 'Tour tickets are cheaper online; on match days the tour is shortened.'],
      es: ['Estadio Santiago Bernabéu', 'El estadio del Real Madrid tras su gran reforma con césped retráctil; el tour incluye el museo de trofeos, vestuarios y la banda.', 'Las entradas son más baratas online; en días de partido el tour se acorta.'],
      de: ['Estadio Santiago Bernabéu', 'Die Heimat von Real Madrid nach großem Umbau mit einfahrbarem Rasen; die Tour zeigt Trophäenmuseum, Kabinen und Spielfeldrand.', 'Tourtickets online günstiger; an Spieltagen verkürzt.'],
      fr: ['Stade Santiago Bernabéu', 'Le stade du Real Madrid après une grande rénovation avec pelouse rétractable ; la visite inclut le musée des trophées, les vestiaires et le bord du terrain.', 'Billets moins chers en ligne ; visite raccourcie les jours de match.'],
      it: ['Stadio Santiago Bernabéu', 'La casa del Real Madrid dopo una grande ristrutturazione con campo retrattile; il tour include museo dei trofei, spogliatoi e bordo campo.', 'Biglietti più economici online; nei giorni di partita il tour è ridotto.'],
    }, { address: 'Avenida de Concha Espina 1' }),

    P('diverxo', 'food', 40.4566, -3.6924, FOOD, 4.6, 4300, ['food', 'luxury'], {
      ru: ['DiverXO', 'Ресторан Давида Муньоса — самый смелый в Испании: фьюжн азиатской и испанской кухни в театральной подаче; три звезды MICHELIN (гид Испании 2026).', 'Бронирование открывается заранее и разбирается за минуты; ужин длится около 3–4 часов.'],
      en: ['DiverXO', 'Dabiz Muñoz’s restaurant, Spain’s boldest: Asian-Spanish fusion served as theatre; three MICHELIN stars (Spain guide 2026).', 'Bookings open in advance and go in minutes; dinner lasts around 3–4 hours.'],
      es: ['DiverXO', 'El restaurante de Dabiz Muñoz, el más atrevido de España: fusión asiático-española con puesta en escena teatral; tres estrellas MICHELIN (guía España 2026).', 'Las reservas se abren con antelación y vuelan; la cena dura 3–4 horas.'],
      de: ['DiverXO', 'Dabiz Muñoz’ Restaurant, Spaniens kühnstes: asiatisch-spanische Fusion als Theater; drei MICHELIN-Sterne (Guide Spanien 2026).', 'Reservierungen öffnen vorab und sind in Minuten weg; das Dinner dauert 3–4 Stunden.'],
      fr: ['DiverXO', 'Le restaurant de Dabiz Muñoz, le plus audacieux d’Espagne : fusion hispano-asiatique mise en scène ; trois étoiles MICHELIN (guide Espagne 2026).', 'Les réservations ouvrent à l’avance et partent en minutes ; le dîner dure 3 à 4 h.'],
      it: ['DiverXO', 'Il ristorante di Dabiz Muñoz, il più audace di Spagna: fusion asiatico-spagnola in scena teatrale; tre stelle MICHELIN (guida Spagna 2026).', 'Le prenotazioni aprono in anticipo e finiscono in minuti; la cena dura 3–4 ore.'],
    }, { price: level(3), michelin: { award: 'star3', year: 2026 }, address: 'Calle del Padre Damián 23', menu: [
      ['Tasting menu', undefined, 'большой дегустационный сет|long tasting menu|gran menú degustación|großes Degustationsmenü|grand menu dégustation|grande menù degustazione'],
      ['Wine pairing', undefined, 'винное сопровождение|wine pairing|maridaje de vinos|Weinbegleitung|accord mets-vins|abbinamento vini'],
    ] }),
    P('coque', 'food', 40.4316, -3.6917, FOOD, 4.7, 2100, ['food', 'luxury'], {
      ru: ['Coque', 'Ресторан братьев Сандовал: ужин переходит из бара в винный погреб, кухню и зал; две звезды MICHELIN и зелёная звезда (гид Испании 2026).', 'Ужин-путешествие по зданию занимает весь вечер; бронируйте заранее.'],
      en: ['Coque', 'The Sandoval brothers’ restaurant: dinner moves from the bar to the wine cellar, the kitchen and the dining room; two MICHELIN stars plus a Green Star (Spain guide 2026).', 'The journey through the building takes the whole evening; book ahead.'],
      es: ['Coque', 'El restaurante de los hermanos Sandoval: la cena recorre bar, bodega, cocina y sala; dos estrellas MICHELIN y estrella verde (guía España 2026).', 'El recorrido ocupa toda la noche; reserva con antelación.'],
      de: ['Coque', 'Das Restaurant der Brüder Sandoval: Das Dinner führt von der Bar in den Weinkeller, die Küche und den Saal; zwei MICHELIN-Sterne und ein Grüner Stern (Guide Spanien 2026).', 'Die Reise durchs Haus dauert den ganzen Abend; vorher buchen.'],
      fr: ['Coque', 'Le restaurant des frères Sandoval : le dîner passe du bar à la cave, à la cuisine puis à la salle ; deux étoiles MICHELIN et une étoile verte (guide Espagne 2026).', 'Le parcours dure toute la soirée ; réservez.'],
      it: ['Coque', 'Il ristorante dei fratelli Sandoval: la cena passa dal bar alla cantina, alla cucina e alla sala; due stelle MICHELIN e stella verde (guida Spagna 2026).', 'Il percorso dura tutta la sera; prenota.'],
    }, { price: level(3), michelin: { award: 'star2', year: 2026 }, address: 'Calle del Marqués de Riscal 11', menu: [
      ['Tasting menu', undefined, 'дегустационный сет-прогулка по ресторану|tasting menu that moves through the restaurant|menú degustación itinerante|Degustationsmenü als Rundgang|menu dégustation itinérant|menù degustazione itinerante'],
      ['Cochinillo', undefined, 'запечённый молочный поросёнок|roast suckling pig|cochinillo asado|Spanferkel|cochon de lait rôti|maialino da latte arrosto'],
    ] }),
    P('casa-lucio', 'food', 40.4116, -3.7088, FOOD, 4.4, 9300, ['food', 'history'], {
      ru: ['Casa Lucio', 'Таверна на улице Кава-Баха, прославившая «уэвос рóтос» — жареную картошку с яичницей, которую разрезают прямо на тарелке; её посещали короли и звёзды.', 'Обязательно «huevos estrellados»; бронируйте на обед или ужин.'],
      en: ['Casa Lucio', 'A Cava Baja tavern famous for huevos rotos — fried potatoes topped with fried eggs broken over them at the table; kings and stars have dined here.', 'Order the huevos estrellados; book for lunch or dinner.'],
      es: ['Casa Lucio', 'La taberna de la Cava Baja famosa por los huevos rotos —patatas fritas con huevos que se rompen en la mesa—; han comido aquí reyes y estrellas.', 'Imprescindibles los huevos estrellados; reserva.'],
      de: ['Casa Lucio', 'Eine Taverne in der Cava Baja, berühmt für Huevos rotos – Bratkartoffeln mit Spiegeleiern, am Tisch aufgebrochen; Könige und Stars aßen hier.', 'Huevos estrellados bestellen; mittags oder abends reservieren.'],
      fr: ['Casa Lucio', 'Une taverne de la Cava Baja célèbre pour les huevos rotos, frites et œufs au plat crevés à table ; rois et stars y ont dîné.', 'Commandez les huevos estrellados ; réservez.'],
      it: ['Casa Lucio', 'Una taverna in Cava Baja famosa per gli huevos rotos, patate fritte con uova rotte al tavolo; ci hanno mangiato re e star.', 'Ordina gli huevos estrellados; prenota.'],
    }, { price: level(2), address: 'Calle Cava Baja 35', menu: [
      ['Huevos estrellados', undefined, 'картофель фри с разбитой яичницей|fries with broken fried eggs|huevos estrellados con patatas|Pommes mit aufgebrochenen Spiegeleiern|frites et œufs au plat crevés|patatine con uova rotte'],
      ['Callos a la madrileña', undefined, 'рубец по-мадридски|Madrid-style tripe stew|callos a la madrileña|Kutteln nach Madrider Art|tripes à la madrilène|trippa alla madrilena'],
    ] }),
    P('el-brillante', 'food', 40.408, -3.6941, FOOD, 4.1, 21000, ['food', 'streetfood'], {
      ru: ['El Brillante', 'Бар у вокзала Аточа, знаменитый «бокадильо де каламарес» — багетом с жареными кольцами кальмара; работает с раннего утра.', 'Идеальный перекус между Прадо и Королевой Софией.'],
      en: ['El Brillante', 'A bar by Atocha station famous for the bocadillo de calamares — a baguette stuffed with fried squid rings; open from early morning.', 'The perfect bite between the Prado and the Reina Sofía.'],
      es: ['El Brillante', 'El bar junto a Atocha famoso por su bocadillo de calamares; abre desde muy temprano.', 'El tentempié perfecto entre el Prado y el Reina Sofía.'],
      de: ['El Brillante', 'Eine Bar am Bahnhof Atocha, berühmt für das Bocadillo de calamares – Baguette mit frittierten Tintenfischringen; ab frühmorgens geöffnet.', 'Der perfekte Snack zwischen Prado und Reina Sofía.'],
      fr: ['El Brillante', 'Un bar près de la gare d’Atocha célèbre pour le bocadillo de calamares, baguette garnie d’anneaux de calmar frits ; ouvert dès l’aube.', 'Le parfait en-cas entre le Prado et le Reina Sofía.'],
      it: ['El Brillante', 'Un bar vicino alla stazione di Atocha famoso per il bocadillo de calamares, baguette con anelli di calamaro fritti; aperto dal primo mattino.', 'Lo spuntino perfetto tra Prado e Reina Sofía.'],
    }, { price: level(1), address: 'Plaza del Emperador Carlos V 8', menu: [
      ['Bocadillo de calamares', undefined, 'багет с жареными кальмарами|baguette with fried squid|bocadillo de calamares|Baguette mit frittiertem Tintenfisch|baguette aux calmars frits|panino con calamari fritti'],
      ['Caña', undefined, 'маленькое пиво|small draught beer|caña|kleines Bier|petite bière|birra piccola'],
    ] }),
    P('la-venencia', 'food', 40.4153, -3.6993, STREET, 4.6, 4800, ['food', 'nightlife', 'history'], {
      ru: ['La Venencia', 'Хересный бар, не менявшийся с 1930-х: только херес из бочек, мел для счёта на стойке, запрет на фото и чаевые.', 'Попросите «fino» или «manzanilla» с оливками и мохамой; не фотографируйте — таковы правила.'],
      en: ['La Venencia', 'A sherry bar unchanged since the 1930s: only cask sherry, tabs chalked on the counter, and no photos or tips.', 'Ask for a fino or manzanilla with olives and mojama; don’t take photos — house rules.'],
      es: ['La Venencia', 'Un bar de jerez sin cambios desde los años 30: solo jerez de barril, cuentas a tiza en la barra y prohibido hacer fotos y dar propina.', 'Pide un fino o una manzanilla con aceitunas y mojama; nada de fotos.'],
      de: ['La Venencia', 'Eine Sherrybar, unverändert seit den 1930ern: nur Sherry vom Fass, Rechnung mit Kreide auf dem Tresen, keine Fotos und kein Trinkgeld.', 'Fino oder Manzanilla mit Oliven und Mojama bestellen; keine Fotos – Hausregel.'],
      fr: ['La Venencia', 'Un bar à xérès inchangé depuis les années 1930 : xérès au tonneau, ardoise à la craie sur le comptoir, ni photos ni pourboires.', 'Demandez un fino ou une manzanilla avec olives et mojama ; pas de photos.'],
      it: ['La Venencia', 'Un bar di sherry immutato dagli anni Trenta: solo sherry di botte, conto col gesso sul banco, niente foto né mance.', 'Chiedi un fino o una manzanilla con olive e mojama; niente foto, è la regola.'],
    }, { spot: 'hidden', price: level(1), address: 'Calle de Echegaray 7', menu: [
      ['Fino', undefined, 'сухой херес|dry sherry|fino|trockener Sherry|xérès fino|sherry secco'],
      ['Mojama', undefined, 'вяленое филе тунца|cured tuna loin|mojama de atún|luftgetrocknetes Thunfischfilet|longe de thon séchée|tonno essiccato'],
    ] }),
    P('lhardy', 'food', 40.4167, -3.7012, CITY, 4.4, 5200, ['food', 'history'], {
      ru: ['Lhardy', 'Ресторан и кулинария с 1839 года у Пуэрта-дель-Соль: внизу можно налить себе консоме из серебряного самовара, наверху — мадридский косидо.', 'Попробуйте консоме «из самовара» у стойки на первом этаже.'],
      en: ['Lhardy', 'A restaurant and deli since 1839 near Puerta del Sol: downstairs you pour your own consommé from a silver urn, upstairs Madrid cocido is served.', 'Try the consommé from the urn at the ground-floor counter.'],
      es: ['Lhardy', 'Restaurante y tienda desde 1839 junto a Sol: abajo te sirves el consomé del samovar de plata; arriba, cocido madrileño.', 'Prueba el consomé del samovar en la planta baja.'],
      de: ['Lhardy', 'Restaurant und Feinkost seit 1839 nahe der Puerta del Sol: unten zapft man Consommé aus einem Silberkessel, oben gibt es Madrider Cocido.', 'Die Consommé aus dem Silberkessel unten am Tresen probieren.'],
      fr: ['Lhardy', 'Restaurant et traiteur depuis 1839 près de la Puerta del Sol : en bas, on se sert le consommé au samovar d’argent ; en haut, cocido madrilène.', 'Goûtez le consommé du samovar au comptoir du rez-de-chaussée.'],
      it: ['Lhardy', 'Ristorante e gastronomia dal 1839 vicino a Puerta del Sol: al piano terra ci si serve il consommé dal samovar d’argento, sopra il cocido madrileño.', 'Prova il consommé dal samovar al banco del piano terra.'],
    }, { price: level(3), address: 'Carrera de San Jerónimo 8', menu: [
      ['Cocido madrileño', undefined, 'мадридское рагу из нута, мяса и овощей|Madrid chickpea, meat and vegetable stew|cocido madrileño|Madrider Kichererbseneintopf|pot-au-feu madrilène aux pois chiches|bollito madrileno con ceci'],
      ['Consomé', undefined, 'консоме из серебряного самовара|consommé from the silver urn|consomé del samovar|Consommé aus dem Silberkessel|consommé du samovar|consommé dal samovar'],
    ] }),
    P('casa-alberto', 'food', 40.4141, -3.6993, STREET, 4.4, 7800, ['food', 'history'], {
      ru: ['Casa Alberto', 'Таверна 1827 года в доме, где Сервантес писал часть «Дон Кихота»: вермут из крана, рубец, фрикадельки и крокеты.', 'Начните с вермута и крокет у цинковой стойки, потом садитесь за стол.'],
      en: ['Casa Alberto', 'An 1827 tavern in the house where Cervantes wrote part of Don Quixote: vermouth on tap, tripe, meatballs and croquetas.', 'Start with vermouth and croquetas at the zinc bar, then sit down.'],
      es: ['Casa Alberto', 'Una taberna de 1827 en la casa donde Cervantes escribió parte del Quijote: vermú de grifo, callos, albóndigas y croquetas.', 'Empieza con vermú y croquetas en la barra de zinc.'],
      de: ['Casa Alberto', 'Eine Taverne von 1827 im Haus, in dem Cervantes einen Teil des Don Quijote schrieb: Wermut vom Hahn, Kutteln, Fleischbällchen und Croquetas.', 'Mit Wermut und Croquetas an der Zinktheke beginnen.'],
      fr: ['Casa Alberto', 'Une taverne de 1827 dans la maison où Cervantes écrivit une partie de Don Quichotte : vermouth à la pression, tripes, boulettes et croquetas.', 'Commencez par vermouth et croquetas au comptoir en zinc.'],
      it: ['Casa Alberto', 'Una taverna del 1827 nella casa dove Cervantes scrisse parte del Don Chisciotte: vermut alla spina, trippa, polpette e crocchette.', 'Inizia con vermut e crocchette al bancone di zinco.'],
    }, { price: level(2), address: 'Calle de las Huertas 18', menu: [
      ['Vermut de grifo', undefined, 'вермут из крана|vermouth on tap|vermú de grifo|Wermut vom Hahn|vermouth à la pression|vermut alla spina'],
      ['Albóndigas', undefined, 'тефтели в соусе|meatballs in sauce|albóndigas en salsa|Fleischbällchen in Sauce|boulettes en sauce|polpette al sugo'],
    ] }),
    P('casa-del-abuelo', 'food', 40.4163, -3.7019, STREET, 4.4, 13000, ['food', 'history'], {
      ru: ['La Casa del Abuelo', 'Бар с 1906 года, где готовят креветки в шипящем чесночном масле «гамбас аль ахильо» и наливают сладкое домашнее вино.', 'Креветки + бокал «вино дель абуэло» — так здесь заказывают.'],
      en: ['La Casa del Abuelo', 'A bar since 1906 serving sizzling garlic prawns — gambas al ajillo — with its sweet house wine.', 'Prawns plus a glass of “vino del abuelo” is the classic order.'],
      es: ['La Casa del Abuelo', 'Un bar desde 1906 con gambas al ajillo chisporroteantes y su vino dulce de la casa.', 'Gambas y un chato de vino del abuelo: el pedido clásico.'],
      de: ['La Casa del Abuelo', 'Eine Bar seit 1906 mit brutzelnden Knoblauchgarnelen – Gambas al ajillo – und süßem Hauswein.', 'Garnelen und ein Glas „Vino del Abuelo“ – die klassische Bestellung.'],
      fr: ['La Casa del Abuelo', 'Un bar depuis 1906 qui sert des crevettes grésillantes à l’ail, gambas al ajillo, et son vin doux maison.', 'Crevettes et un verre de « vino del abuelo » : la commande classique.'],
      it: ['La Casa del Abuelo', 'Un bar dal 1906 con gamberi all’aglio sfrigolanti, gambas al ajillo, e il suo vino dolce della casa.', 'Gamberi e un bicchiere di “vino del abuelo”: l’ordine classico.'],
    }, { price: level(2), address: 'Calle de la Victoria 12', menu: [
      ['Gambas al ajillo', undefined, 'креветки в чесночном масле|prawns in garlic oil|gambas al ajillo|Garnelen in Knoblauchöl|crevettes à l’ail|gamberi all’aglio'],
      ['Vino del abuelo', undefined, 'сладкое домашнее вино|sweet house wine|vino dulce de la casa|süßer Hauswein|vin doux maison|vino dolce della casa'],
    ] }),
    P('sala-de-despiece', 'food', 40.437, -3.7001, CITY, 4.5, 5100, ['food'], {
      ru: ['Sala de Despiece', 'Тапас-бар на «гастрономической улице» Понсано, оформленный как мясная лавка: продукты подают на разделочной бумаге и режут у стойки.', 'Садитесь у стойки и смотрите, как готовят; бронирования почти нет.'],
      en: ['Sala de Despiece', 'A tapas bar on foodie Calle Ponzano styled as a butcher’s shop: dishes come on butcher paper and are cut at the counter.', 'Sit at the bar to watch the cooks; bookings are rare.'],
      es: ['Sala de Despiece', 'Un bar de tapas en la calle Ponzano decorado como una carnicería: los platos llegan en papel de carnicero y se cortan en la barra.', 'Siéntate en la barra a ver cocinar; casi no hay reservas.'],
      de: ['Sala de Despiece', 'Eine Tapasbar in der Calle Ponzano im Stil einer Metzgerei: Gerichte kommen auf Metzgerpapier und werden an der Theke geschnitten.', 'An der Bar sitzen und zusehen; kaum Reservierungen.'],
      fr: ['Sala de Despiece', 'Un bar à tapas de la rue Ponzano façon boucherie : plats servis sur papier de boucher et découpés au comptoir.', 'Asseyez-vous au comptoir pour voir cuisiner ; peu de réservations.'],
      it: ['Sala de Despiece', 'Un bar di tapas in calle Ponzano in stile macelleria: i piatti arrivano su carta da macellaio e si tagliano al banco.', 'Siediti al bancone per vedere i cuochi; le prenotazioni sono rare.'],
    }, { price: level(2), address: 'Calle de Ponzano 11', menu: [
      ['Rolex', undefined, 'фирменный ролл из тонко нарезанного мяса|signature roll of thin-sliced meat|rollito estrella de carne fina|Signature-Röllchen aus dünnem Fleisch|roulé signature de viande fine|rotolino signature di carne sottile'],
      ['Tartar', undefined, 'тартар|tartare|tartar|Tatar|tartare|tartare'],
    ] }),
    P('el-riojano', 'food', 40.4167, -3.706, CITY, 4.5, 3900, ['food', 'history'], {
      ru: ['Pastelería El Riojano', 'Кондитерская 1855 года на Калье-Майор, где когда-то пекли для королевского двора: «бартолильос», торреха и шоколад в старинном зале.', 'Утром — горячий шоколад и выпечка в зале с витринами XIX века.'],
      en: ['Pastelería El Riojano', 'An 1855 pastry shop on Calle Mayor that once baked for the royal court: bartolillos, torrijas and hot chocolate in a period salon.', 'Have morning hot chocolate and pastries in the 19th-century salon.'],
      es: ['Pastelería El Riojano', 'Una pastelería de 1855 en la calle Mayor que surtía a la Casa Real: bartolillos, torrijas y chocolate en un salón de época.', 'Por la mañana, chocolate y bollería en su salón del XIX.'],
      de: ['Pastelería El Riojano', 'Eine Konditorei von 1855 in der Calle Mayor, einst Hoflieferant: Bartolillos, Torrijas und heiße Schokolade im historischen Salon.', 'Morgens heiße Schokolade und Gebäck im Salon aus dem 19. Jh.'],
      fr: ['Pastelería El Riojano', 'Une pâtisserie de 1855 rue Mayor, fournisseur de la cour : bartolillos, torrijas et chocolat chaud dans un salon d’époque.', 'Le matin, chocolat et pâtisseries dans le salon du XIXe.'],
      it: ['Pastelería El Riojano', 'Una pasticceria del 1855 in calle Mayor, fornitrice della corte: bartolillos, torrijas e cioccolata in un salone d’epoca.', 'La mattina cioccolata e dolci nel salone ottocentesco.'],
    }, { price: level(1), address: 'Calle Mayor 10', menu: [
      ['Torrija', undefined, 'испанский «гренок» в молоке и сахаре|Spanish milk-soaked French toast|torrija|spanischer Arme Ritter|pain perdu espagnol|torrija spagnola'],
      ['Chocolate', undefined, 'густой горячий шоколад|thick hot chocolate|chocolate a la taza|dicke heiße Schokolade|chocolat chaud épais|cioccolata densa'],
    ] }),
  ],
  routes: [
    D(['=madrid-chocolateria-san-gines', 'puerta-del-sol', '=madrid-plaza-mayor', '=madrid-royal-palace', 'almudena-cathedral', 'casa-lucio', '=madrid-templo-de-debod', 'gran-via', 'casa-del-abuelo'],
      'Австрийский Мадрид, дворец и закат у храма Дебод|Habsburg Madrid, the palace and sunset at Debod|El Madrid de los Austrias, el palacio y Debod|Habsburger Madrid, Palast und Sonnenuntergang am Debod|Madrid des Habsbourg, le palais et Debod au couchant|Madrid asburgica, il palazzo e Debod al tramonto'),
    D(['prado', '=madrid-retiro-crystal-palace', 'el-brillante', 'reina-sofia', 'barrio-de-las-letras', 'la-venencia', 'casa-alberto'],
      'Прадо, Ретиро и квартал литераторов|The Prado, Retiro and Barrio de las Letras|El Prado, el Retiro y el Barrio de las Letras|Prado, Retiro und Barrio de las Letras|Le Prado, le Retiro et le Barrio de las Letras|Prado, Retiro e Barrio de las Letras'),
    D(['el-riojano', 'thyssen', 'lhardy', 'bernabeu', 'sala-de-despiece', 'diverxo'],
      'Тиссен, Бернабеу и ужин в DiverXO|The Thyssen, the Bernabéu and dinner at DiverXO|El Thyssen, el Bernabéu y cena en DiverXO|Thyssen, Bernabéu und Dinner im DiverXO|Le Thyssen, le Bernabéu et dîner au DiverXO|Thyssen, Bernabéu e cena da DiverXO'),
  ],
};

export default pack;
