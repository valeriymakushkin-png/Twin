import type { CityPack } from '../types';
import { free, level, makeDay, makePlace } from './_kit.ts';

const P = makePlace('seville');
const D = makeDay('seville');
const SQUARE = '9uBkoyfCgdQ';
const ALCAZAR = 'X_B3JwcYaMs';
const FOOD = 'XUn8_UscG0c';
const LANE = 'gr6c7vsUIBc';
const CATHEDRAL = 'tSs3IryfyoA';
const SETAS = '1gPmbk75wHA';

const pack: CityPack = {
  country: 'ES',
  city: 'seville',
  places: [
    P('maria-luisa-park', 'nature', 37.3758, -5.9887, SQUARE, 4.7, 41000, ['gardens', 'nature'], {
      ru: ['Парк Марии Луизы', 'Главный парк Севильи с прудами, фонтанами, изразцовыми скамьями и голубиной площадью; в нём стоит Площадь Испании.', 'Возьмите напрокат велосипед или карету у входа; в жару — тень под платанами.'],
      en: ['María Luisa Park', 'Seville’s main park of ponds, fountains, tiled benches and a pigeon square; the Plaza de España sits within it.', 'Rent a bike or a carriage at the gate; plane trees give shade in the heat.'],
      es: ['Parque de María Luisa', 'El gran parque de Sevilla con estanques, fuentes, bancos de azulejos y la plaza de las palomas; en él está la Plaza de España.', 'Alquila bici o coche de caballos; en el calor, sombra bajo los plátanos.'],
      de: ['Parque de María Luisa', 'Sevillas größter Park mit Teichen, Brunnen, Kachelbänken und Taubenplatz; darin liegt die Plaza de España.', 'Am Eingang Rad oder Kutsche mieten; Platanen spenden Schatten.'],
      fr: ['Parc María Luisa', 'Le grand parc de Séville, bassins, fontaines, bancs en azulejos et place aux pigeons ; la Plaza de España s’y trouve.', 'Louez un vélo ou une calèche à l’entrée ; ombre des platanes par forte chaleur.'],
      it: ['Parco di María Luisa', 'Il grande parco di Siviglia con laghetti, fontane, panchine di maioliche e la piazza dei piccioni; al suo interno la Plaza de España.', 'Noleggia bici o carrozza all’ingresso; all’ombra dei platani col caldo.'],
    }, { price: free, hours: '08:00–22:00' }),
    P('torre-del-oro', 'attraction', 37.3824, -5.9964, CATHEDRAL, 4.5, 31000, ['history', 'views'], {
      ru: ['Золотая башня', 'Двенадцатигранная альмохадская сторожевая башня XIII века на берегу Гвадалквивира, сегодня — небольшой морской музей с террасой.', 'Отсюда стартуют речные круизы; вечером башню красиво подсвечивают.'],
      en: ['Torre del Oro', 'A 12-sided 13th-century Almohad watchtower on the Guadalquivir, now a small naval museum with a terrace.', 'River cruises start here; the tower is beautifully lit at night.'],
      es: ['Torre del Oro', 'Una torre vigía almohade dodecagonal del siglo XIII junto al Guadalquivir, hoy pequeño museo naval con terraza.', 'De aquí salen los cruceros por el río; de noche luce iluminada.'],
      de: ['Torre del Oro', 'Ein zwölfeckiger almohadischer Wachturm aus dem 13. Jh. am Guadalquivir, heute ein kleines Marinemuseum mit Terrasse.', 'Hier starten Flussfahrten; nachts schön beleuchtet.'],
      fr: ['Torre del Oro', 'Une tour de guet almohade dodécagonale du XIIIe au bord du Guadalquivir, aujourd’hui petit musée naval avec terrasse.', 'Les croisières fluviales partent d’ici ; belle illumination le soir.'],
      it: ['Torre del Oro', 'Una torre di guardia almohade dodecagonale del Duecento sul Guadalquivir, oggi piccolo museo navale con terrazza.', 'Da qui partono le crociere sul fiume; la sera è illuminata.'],
    }, { spot: 'insta', hours: '09:30–18:45' }),
    P('barrio-santa-cruz', 'attraction', 37.3857, -5.9895, LANE, 4.7, 36000, ['oldtown', 'photo'], {
      ru: ['Квартал Санта-Крус', 'Бывший еврейский квартал: узкие белые переулки, дворики с апельсиновыми деревьями, изразцы и маленькие площади.', 'Потеряйтесь в переулках утром, до жары и групп; не пропустите площадь Доньи Эльвиры.'],
      en: ['Barrio Santa Cruz', 'The former Jewish quarter: narrow whitewashed lanes, patios with orange trees, tiles and little squares.', 'Get lost in the lanes in the morning, before the heat and the groups; don’t miss Plaza de Doña Elvira.'],
      es: ['Barrio de Santa Cruz', 'La antigua judería: callejuelas encaladas, patios con naranjos, azulejos y plazuelas.', 'Piérdete por la mañana, antes del calor y los grupos; no te pierdas la plaza de Doña Elvira.'],
      de: ['Barrio Santa Cruz', 'Das ehemalige jüdische Viertel: enge weiße Gassen, Patios mit Orangenbäumen, Fliesen und kleine Plätze.', 'Morgens vor Hitze und Gruppen durch die Gassen streifen; die Plaza de Doña Elvira nicht verpassen.'],
      fr: ['Quartier de Santa Cruz', 'L’ancienne juiverie : ruelles blanchies, patios aux orangers, azulejos et petites places.', 'Perdez-vous le matin, avant la chaleur et les groupes ; ne manquez pas la place de Doña Elvira.'],
      it: ['Barrio Santa Cruz', 'L’antico quartiere ebraico: vicoli imbiancati, patii con aranci, azulejos e piazzette.', 'Perditi al mattino, prima del caldo e dei gruppi; non perdere plaza de Doña Elvira.'],
    }, { spot: 'insta', price: free }),
    P('triana', 'attraction', 37.3842, -6.0044, FOOD, 4.7, 21000, ['culture', 'food', 'nightlife'], {
      ru: ['Триана', 'Район за рекой — родина фламенко, моряков и керамики: улица Бетис с видом на центр, мастерские азулежу и таверны.', 'Загляните в Центр керамики Трианы; вечером — фламенко в местных барах.'],
      en: ['Triana', 'The district across the river, home of flamenco, sailors and ceramics: Calle Betis with views of the centre, tile workshops and taverns.', 'Visit the Triana ceramics centre; in the evening there’s flamenco in local bars.'],
      es: ['Triana', 'El barrio al otro lado del río, cuna del flamenco, marineros y cerámica: la calle Betis con vistas, talleres de azulejos y tabernas.', 'Visita el Centro Cerámica Triana; por la noche, flamenco en bares del barrio.'],
      de: ['Triana', 'Das Viertel jenseits des Flusses, Heimat von Flamenco, Seefahrern und Keramik: Calle Betis mit Blick aufs Zentrum, Fliesenwerkstätten und Tavernen.', 'Das Keramikzentrum Triana besuchen; abends Flamenco in den Bars.'],
      fr: ['Triana', 'Le quartier de l’autre rive, berceau du flamenco, des marins et de la céramique : calle Betis face au centre, ateliers d’azulejos et tavernes.', 'Visitez le centre de céramique de Triana ; le soir, flamenco dans les bars.'],
      it: ['Triana', 'Il quartiere oltre il fiume, culla del flamenco, dei marinai e della ceramica: calle Betis con vista sul centro, laboratori di azulejos e taverne.', 'Visita il centro della ceramica di Triana; la sera flamenco nei bar.'],
    }, { price: free }),
    P('maestranza', 'attraction', 37.3864, -5.9989, CATHEDRAL, 4.5, 18000, ['history', 'architecture'], {
      ru: ['Арена Ла-Маэстранса', 'Одна из старейших арен Испании (XVIII век) с барочным фасадом цвета охры; аудиоэкскурсия ведёт на трибуны и в музей.', 'Экскурсия проходит и вне сезона корриды; найдите Королевские ворота.'],
      en: ['La Maestranza Bullring', 'One of Spain’s oldest bullrings (18th century) with an ochre Baroque façade; an audio tour takes you to the stands and museum.', 'Tours run outside the bullfight season too; look for the Prince’s Gate.'],
      es: ['Plaza de Toros de la Maestranza', 'Una de las plazas más antiguas de España (siglo XVIII), de fachada barroca ocre; la audioguía recorre gradas y museo.', 'Las visitas funcionan fuera de temporada; busca la Puerta del Príncipe.'],
      de: ['Stierkampfarena La Maestranza', 'Eine der ältesten Arenen Spaniens (18. Jh.) mit ockerfarbener Barockfassade; die Audiotour führt auf die Ränge und ins Museum.', 'Führungen auch außerhalb der Saison; nach der Puerta del Príncipe suchen.'],
      fr: ['Arènes de la Maestranza', 'L’une des plus anciennes arènes d’Espagne (XVIIIe), façade baroque ocre ; la visite audio mène aux gradins et au musée.', 'Visites possibles hors saison ; cherchez la porte du Prince.'],
      it: ['Arena della Maestranza', 'Una delle arene più antiche di Spagna (XVIII secolo) con facciata barocca ocra; l’audioguida porta sugli spalti e al museo.', 'Le visite si fanno anche fuori stagione; cerca la Porta del Principe.'],
    }, { hours: '09:30–19:30', address: 'Paseo de Cristóbal Colón 12' }),
    P('palacio-de-las-duenas', 'attraction', 37.3967, -5.9893, ALCAZAR, 4.6, 12000, ['architecture', 'gardens', 'history'], {
      ru: ['Дворец Дуэньяс', 'Дворец герцогов Альба XV–XVI веков с мудехарскими двориками, апельсиновым садом и коллекцией искусства; здесь родился поэт Антонио Мачадо.', 'Тихая альтернатива Алькасару — людей намного меньше.'],
      en: ['Palacio de las Dueñas', 'The Dukes of Alba’s 15th–16th-century palace with Mudéjar patios, an orange garden and an art collection; poet Antonio Machado was born here.', 'A quiet alternative to the Alcázar — far fewer people.'],
      es: ['Palacio de las Dueñas', 'El palacio de los duques de Alba de los siglos XV–XVI con patios mudéjares, jardín de naranjos y colección de arte; aquí nació Antonio Machado.', 'Una alternativa tranquila al Alcázar: mucha menos gente.'],
      de: ['Palacio de las Dueñas', 'Der Palast der Herzöge von Alba aus dem 15.–16. Jh. mit Mudéjar-Patios, Orangengarten und Kunstsammlung; hier wurde der Dichter Antonio Machado geboren.', 'Eine ruhige Alternative zum Alcázar – viel weniger Besucher.'],
      fr: ['Palais de las Dueñas', 'Le palais des ducs d’Albe des XVe–XVIe, patios mudéjars, jardin d’orangers et collection d’art ; le poète Antonio Machado y est né.', 'Une alternative paisible à l’Alcázar, beaucoup moins de monde.'],
      it: ['Palazzo de las Dueñas', 'Il palazzo dei duchi d’Alba del XV–XVI secolo con patii mudéjar, giardino di aranci e collezione d’arte; qui nacque il poeta Antonio Machado.', 'Un’alternativa tranquilla all’Alcázar: molta meno gente.'],
    }, { spot: 'hidden', hours: '10:00–18:00', address: 'Calle Dueñas 5' }),
    P('hospital-venerables', 'attraction', 37.3854, -5.9906, LANE, 4.6, 6900, ['art', 'history'], {
      ru: ['Госпиталь Венераблес', 'Барочный приют XVII века для престарелых священников в Санта-Крус с дворо-садом и коллекцией Веласкеса и Мурильо.', 'Церковь с фресками Вальдеса Леаля — главное сокровище; в квартале это тихое место.'],
      en: ['Hospital de los Venerables', 'A 17th-century Baroque home for elderly priests in Santa Cruz with a sunken courtyard and works by Velázquez and Murillo.', 'The church frescoes by Valdés Leal are the treasure; a quiet spot in the quarter.'],
      es: ['Hospital de los Venerables', 'Una residencia barroca del siglo XVII para sacerdotes ancianos en Santa Cruz con patio hundido y obras de Velázquez y Murillo.', 'La iglesia con frescos de Valdés Leal es la joya; un rincón tranquilo.'],
      de: ['Hospital de los Venerables', 'Ein barockes Heim für betagte Priester aus dem 17. Jh. in Santa Cruz mit abgesenktem Hof und Werken von Velázquez und Murillo.', 'Die Kirche mit Fresken von Valdés Leal ist der Schatz; ein ruhiger Ort im Viertel.'],
      fr: ['Hôpital des Vénérables', 'Une maison baroque du XVIIe pour prêtres âgés à Santa Cruz, patio en contrebas et œuvres de Velázquez et Murillo.', 'Les fresques de Valdés Leal dans l’église sont le trésor ; un lieu calme du quartier.'],
      it: ['Ospedale dei Venerabili', 'Una residenza barocca seicentesca per sacerdoti anziani a Santa Cruz con cortile ribassato e opere di Velázquez e Murillo.', 'La chiesa con gli affreschi di Valdés Leal è il gioiello; un angolo tranquillo.'],
    }, { hours: '10:00–19:00', address: 'Plaza de los Venerables 8' }),
    P('bellas-artes', 'attraction', 37.3934, -6.0016, ALCAZAR, 4.7, 11000, ['art', 'museums'], {
      ru: ['Музей изящных искусств Севильи', 'Второй по значению художественный музей Испании в бывшем монастыре: Мурильо, Сурбаран, Вальдес Леаль и Эль Греко.', 'Для граждан ЕС вход бесплатный; по воскресеньям на площади перед музеем — рынок картин.'],
      en: ['Museo de Bellas Artes de Sevilla', 'One of Spain’s top art museums in a former convent: Murillo, Zurbarán, Valdés Leal and El Greco.', 'Free for EU citizens; on Sundays a painters’ market fills the square outside.'],
      es: ['Museo de Bellas Artes de Sevilla', 'Una de las grandes pinacotecas de España en un antiguo convento: Murillo, Zurbarán, Valdés Leal y El Greco.', 'Gratis para ciudadanos de la UE; los domingos hay mercadillo de pintura en la plaza.'],
      de: ['Museo de Bellas Artes de Sevilla', 'Eines der wichtigsten Kunstmuseen Spaniens in einem ehemaligen Kloster: Murillo, Zurbarán, Valdés Leal und El Greco.', 'Für EU-Bürger gratis; sonntags Malermarkt auf dem Platz davor.'],
      fr: ['Musée des Beaux-Arts de Séville', 'L’un des grands musées d’art d’Espagne dans un ancien couvent : Murillo, Zurbarán, Valdés Leal et Greco.', 'Gratuit pour les citoyens de l’UE ; le dimanche, marché de peintres sur la place.'],
      it: ['Museo di Belle Arti di Siviglia', 'Uno dei grandi musei d’arte di Spagna in un ex convento: Murillo, Zurbarán, Valdés Leal e El Greco.', 'Gratis per i cittadini UE; la domenica mercatino di pittori nella piazza.'],
    }, { hours: '09:00–21:00', address: 'Plaza del Museo 9' }),
    P('casa-de-la-memoria', 'attraction', 37.3933, -5.991, LANE, 4.8, 9600, ['culture', 'nightlife'], {
      ru: ['Фламенко в Casa de la Memoria', 'Камерный зал во дворике старого дома, где каждый вечер выступают артисты фламенко — гитара, кант и танец без микрофонов.', 'Билеты на конкретный сеанс берите заранее; фотографировать во время шоу нельзя.'],
      en: ['Flamenco at Casa de la Memoria', 'An intimate hall in an old house’s courtyard with nightly flamenco — guitar, song and dance, unamplified.', 'Book a specific show in advance; no photos during the performance.'],
      es: ['Flamenco en la Casa de la Memoria', 'Una sala íntima en el patio de una casa antigua con flamenco cada noche: guitarra, cante y baile sin micrófonos.', 'Reserva la sesión con antelación; no se fotografía durante el espectáculo.'],
      de: ['Flamenco in der Casa de la Memoria', 'Ein intimer Saal im Innenhof eines alten Hauses mit allabendlichem Flamenco – Gitarre, Gesang und Tanz ohne Verstärker.', 'Eine bestimmte Vorstellung vorab buchen; während der Show keine Fotos.'],
      fr: ['Flamenco à la Casa de la Memoria', 'Une salle intime dans le patio d’une vieille maison, flamenco chaque soir : guitare, chant et danse sans micro.', 'Réservez la séance à l’avance ; pas de photos pendant le spectacle.'],
      it: ['Flamenco alla Casa de la Memoria', 'Una sala intima nel patio di una casa antica con flamenco ogni sera: chitarra, canto e ballo senza amplificazione.', 'Prenota lo spettacolo in anticipo; niente foto durante lo show.'],
    }, { address: 'Calle Cuna 6' }),
    P('italica', 'attraction', 37.4433, -6.0459, SQUARE, 4.6, 14000, ['history'], {
      ru: ['Италика', 'Руины римского города в 9 км от Севильи, где родились императоры Траян и Адриан: один из крупнейших амфитеатров империи и мозаики.', 'Автобус от станции Пласа-де-Армас; утром до жары — тени почти нет.'],
      en: ['Itálica', 'The ruins of a Roman city 9 km from Seville, birthplace of emperors Trajan and Hadrian: one of the empire’s largest amphitheatres and mosaics.', 'Bus from Plaza de Armas station; go in the morning before the heat — there’s little shade.'],
      es: ['Itálica', 'Las ruinas de una ciudad romana a 9 km de Sevilla, cuna de Trajano y Adriano: uno de los mayores anfiteatros del imperio y mosaicos.', 'Bus desde la estación de Plaza de Armas; ve por la mañana, hay poca sombra.'],
      de: ['Itálica', 'Die Ruinen einer Römerstadt 9 km von Sevilla, Geburtsort der Kaiser Trajan und Hadrian: eines der größten Amphitheater des Reichs und Mosaike.', 'Bus ab Plaza de Armas; morgens vor der Hitze gehen – kaum Schatten.'],
      fr: ['Italica', 'Les ruines d’une cité romaine à 9 km de Séville, patrie de Trajan et d’Hadrien : l’un des plus grands amphithéâtres de l’Empire et des mosaïques.', 'Bus depuis la gare de Plaza de Armas ; le matin avant la chaleur, peu d’ombre.'],
      it: ['Italica', 'Le rovine di una città romana a 9 km da Siviglia, patria di Traiano e Adriano: uno dei più grandi anfiteatri dell’impero e mosaici.', 'Bus dalla stazione di Plaza de Armas; vai al mattino, c’è poca ombra.'],
    }, { hours: '09:00–18:00', address: 'Santiponce' }),

    P('abantal', 'food', 37.3889, -5.9777, FOOD, 4.7, 1600, ['food', 'luxury'], {
      ru: ['Abantal', 'Ресторан современной андалусской кухни в районе Ла-Флорида с дегустационными сетами по сезону; одна звезда MICHELIN (гид Испании 2026).', 'Бронируйте; сет с андалусскими винами раскрывает регион.'],
      en: ['Abantal', 'A contemporary Andalusian restaurant in La Florida with seasonal tasting menus; one MICHELIN star (Spain guide 2026).', 'Book ahead; the Andalusian wine pairing shows off the region.'],
      es: ['Abantal', 'Un restaurante de cocina andaluza contemporánea en La Florida con menús degustación de temporada; una estrella MICHELIN (guía España 2026).', 'Reserva; el maridaje con vinos andaluces luce la región.'],
      de: ['Abantal', 'Ein Restaurant zeitgenössischer andalusischer Küche in La Florida mit saisonalen Menüs; ein MICHELIN-Stern (Guide Spanien 2026).', 'Reservieren; die andalusische Weinbegleitung zeigt die Region.'],
      fr: ['Abantal', 'Un restaurant de cuisine andalouse contemporaine à La Florida, menus dégustation de saison ; une étoile MICHELIN (guide Espagne 2026).', 'Réservez ; l’accord vins andalous met la région en valeur.'],
      it: ['Abantal', 'Un ristorante di cucina andalusa contemporanea a La Florida con menù degustazione stagionali; una stella MICHELIN (guida Spagna 2026).', 'Prenota; l’abbinamento con vini andalusi valorizza la regione.'],
    }, { price: level(3), michelin: { award: 'star1', year: 2026 }, address: 'Calle Alcalde José de la Bandera 7', menu: [
      ['Tasting menu', undefined, 'дегустационный сет|tasting menu|menú degustación|Degustationsmenü|menu dégustation|menù degustazione'],
      ['Andalusian wine pairing', undefined, 'сопровождение андалусскими винами|Andalusian wine pairing|maridaje andaluz|andalusische Weinbegleitung|accord vins andalous|abbinamento vini andalusi'],
    ] }),
    P('canabota', 'food', 37.3925, -5.9927, FOOD, 4.7, 2700, ['food'], {
      ru: ['Cañabota', 'Рыбный ресторан у площади Энкарнасьон с барной стойкой у гриля: рыба Атлантики и Средиземноморья на углях; одна звезда MICHELIN (гид Испании 2026).', 'Садитесь у стойки, чтобы видеть гриль; витрина с рыбой дня у входа.'],
      en: ['Cañabota', 'A seafood restaurant near Plaza de la Encarnación with a counter by the grill: Atlantic and Mediterranean fish over coals; one MICHELIN star (Spain guide 2026).', 'Sit at the counter to watch the grill; the fish of the day is displayed at the door.'],
      es: ['Cañabota', 'Un restaurante de pescado junto a la Encarnación con barra frente a la parrilla: pescado del Atlántico y el Mediterráneo a la brasa; una estrella MICHELIN (guía España 2026).', 'Siéntate en la barra para ver la parrilla; el pescado del día se expone en la entrada.'],
      de: ['Cañabota', 'Ein Fischrestaurant nahe der Plaza de la Encarnación mit Theke am Grill: Fisch aus Atlantik und Mittelmeer über Kohle; ein MICHELIN-Stern (Guide Spanien 2026).', 'An der Theke sitzen und dem Grill zusehen; der Tagesfang liegt am Eingang.'],
      fr: ['Cañabota', 'Un restaurant de poisson près de la place de l’Encarnación, comptoir face au gril : poissons de l’Atlantique et de Méditerranée à la braise ; une étoile MICHELIN (guide Espagne 2026).', 'Asseyez-vous au comptoir face au gril ; la pêche du jour est exposée à l’entrée.'],
      it: ['Cañabota', 'Un ristorante di pesce vicino a plaza de la Encarnación con bancone davanti alla griglia: pesce atlantico e mediterraneo alla brace; una stella MICHELIN (guida Spagna 2026).', 'Siediti al bancone per vedere la griglia; il pescato del giorno è esposto all’ingresso.'],
    }, { price: level(3), michelin: { award: 'star1', year: 2026 }, address: 'Calle Orfila 3', menu: [
      ['Grilled fish of the day', undefined, 'рыба дня на гриле|grilled fish of the day|pescado del día a la brasa|gegrillter Tagesfisch|poisson du jour grillé|pesce del giorno alla griglia'],
      ['Tasting menu', undefined, 'дегустационный сет из морепродуктов|seafood tasting menu|menú degustación marinero|Meeresfrüchte-Degustationsmenü|menu dégustation de la mer|menù degustazione di mare'],
    ] }),
    P('bodeguita-romero', 'food', 37.3861, -5.9976, FOOD, 4.5, 4700, ['food'], {
      ru: ['Bodeguita Romero', 'Таверна в Аренале, знаменитая монтадито «прингá» — булочка с рубленым мясом из косидо — и тапас андалусской классики.', 'Закажите прингá и сальморехо у стойки.'],
      en: ['Bodeguita Romero', 'A tavern in El Arenal famous for its pringá montadito — a roll of shredded meats from cocido — and Andalusian classic tapas.', 'Order the pringá and salmorejo at the bar.'],
      es: ['Bodeguita Romero', 'Una taberna del Arenal famosa por su montadito de pringá y tapas andaluzas clásicas.', 'Pide la pringá y un salmorejo en la barra.'],
      de: ['Bodeguita Romero', 'Eine Taverne im Arenal, berühmt für das Montadito de Pringá – Brötchen mit gezupftem Fleisch aus dem Cocido – und andalusische Tapas.', 'Pringá und Salmorejo an der Theke bestellen.'],
      fr: ['Bodeguita Romero', 'Une taverne de l’Arenal réputée pour son montadito de pringá, petit pain aux viandes effilochées du cocido, et ses tapas andalouses.', 'Prenez la pringá et un salmorejo au comptoir.'],
      it: ['Bodeguita Romero', 'Una taverna dell’Arenal famosa per il montadito de pringá, panino con le carni sfilacciate del cocido, e le tapas andaluse.', 'Ordina pringá e salmorejo al bancone.'],
    }, { price: level(1), address: 'Calle Harinas 10', menu: [
      ['Montadito de pringá', undefined, 'булочка с рубленым мясом из косидо|roll with shredded stew meats|montadito de pringá|Brötchen mit gezupftem Eintopffleisch|petit pain aux viandes de cocido effilochées|panino con carni sfilacciate di cocido'],
      ['Salmorejo', undefined, 'холодный томатный крем-суп|cold tomato cream soup|salmorejo|kalte Tomatencremesuppe|crème froide de tomate|crema fredda di pomodoro'],
    ] }),
    P('las-golondrinas', 'food', 37.3851, -6.0028, FOOD, 4.6, 6900, ['food'], {
      ru: ['Las Golondrinas', 'Семейный тапас-бар в Триане с изразцовыми стенами: грибы-шампиньоны на плитке с чесночным соусом и пунта-де-соломильо.', 'Обязательно «champiñones» и «punta de solomillo»; приходите к открытию.'],
      en: ['Las Golondrinas', 'A tiled family tapas bar in Triana: griddled mushrooms with garlic sauce and pork tenderloin tips.', 'Must-orders: champiñones and punta de solomillo; arrive at opening.'],
      es: ['Las Golondrinas', 'Un bar de tapas familiar con azulejos en Triana: champiñones a la plancha con alioli y punta de solomillo.', 'Imprescindibles: champiñones y punta de solomillo; llega a la apertura.'],
      de: ['Las Golondrinas', 'Eine gekachelte Familien-Tapasbar in Triana: gegrillte Champignons mit Knoblauchsauce und Schweinefiletspitzen.', 'Pflicht: Champiñones und Punta de Solomillo; zur Öffnung kommen.'],
      fr: ['Las Golondrinas', 'Un bar à tapas familial carrelé à Triana : champignons à la plancha sauce à l’ail et pointes de filet mignon.', 'Incontournables : champiñones et punta de solomillo ; venez à l’ouverture.'],
      it: ['Las Golondrinas', 'Un bar di tapas di famiglia piastrellato a Triana: funghi alla piastra con salsa all’aglio e punte di filetto di maiale.', 'Da ordinare: champiñones e punta de solomillo; arriva all’apertura.'],
    }, { price: level(1), address: 'Calle Antillano Campos 26', menu: [
      ['Champiñones a la plancha', undefined, 'шампиньоны на плитке с чесночным соусом|griddled mushrooms with garlic sauce|champiñones a la plancha con alioli|gegrillte Champignons mit Knoblauchsauce|champignons à la plancha sauce à l’ail|funghi alla piastra con salsa all’aglio'],
      ['Punta de solomillo', undefined, 'кончики свиной вырезки|pork tenderloin tips|punta de solomillo|Schweinefiletspitzen|pointes de filet mignon de porc|punte di filetto di maiale'],
    ] }),
    P('bar-las-teresas', 'food', 37.3856, -5.9905, LANE, 4.4, 5400, ['food', 'history'], {
      ru: ['Bar Las Teresas', 'Старинный бар 1870 года в квартале Санта-Крус с хамонами под потолком: иберийская ветчина, сыры и херес.', 'Закажите тарелку хамона и мансанилью у стойки.'],
      en: ['Bar Las Teresas', 'An 1870 bar in Santa Cruz with hams hanging from the ceiling: Iberian ham, cheeses and sherry.', 'Order a plate of ham and a manzanilla at the bar.'],
      es: ['Bar Las Teresas', 'Un bar de 1870 en Santa Cruz con jamones colgados del techo: ibérico, quesos y vino de Jerez.', 'Pide un plato de jamón y una manzanilla en la barra.'],
      de: ['Bar Las Teresas', 'Eine Bar von 1870 in Santa Cruz mit Schinken an der Decke: Ibérico-Schinken, Käse und Sherry.', 'Einen Teller Schinken und eine Manzanilla an der Theke bestellen.'],
      fr: ['Bar Las Teresas', 'Un bar de 1870 à Santa Cruz aux jambons suspendus : jambon ibérique, fromages et xérès.', 'Prenez une assiette de jambon et une manzanilla au comptoir.'],
      it: ['Bar Las Teresas', 'Un bar del 1870 a Santa Cruz con i prosciutti appesi al soffitto: iberico, formaggi e sherry.', 'Ordina un piatto di prosciutto e una manzanilla al bancone.'],
    }, { price: level(2), address: 'Calle Santa Teresa 2', menu: [
      ['Jamón ibérico', undefined, 'иберийский хамон|Iberian cured ham|jamón ibérico|Ibérico-Schinken|jambon ibérique|prosciutto iberico'],
      ['Manzanilla', undefined, 'сухой херес мансанилья|dry manzanilla sherry|manzanilla|trockener Manzanilla-Sherry|xérès manzanilla|sherry manzanilla'],
    ] }),
    P('confiteria-la-campana', 'food', 37.3934, -5.9958, ALCAZAR, 4.4, 9800, ['food', 'history'], {
      ru: ['Confitería La Campana', 'Кондитерская с 1885 года на площади Ла-Кампана: сладости «йемас», торты и мороженое в зале с зеркалами и изразцами.', 'Возьмите «yema» — сладость из желтков — и кофе у стойки.'],
      en: ['Confitería La Campana', 'A pastry shop since 1885 on Plaza de la Campana: yemas, cakes and ice cream in a room of mirrors and tiles.', 'Try a yema — an egg-yolk sweet — with coffee at the counter.'],
      es: ['Confitería La Campana', 'Una confitería desde 1885 en la plaza de la Campana: yemas, tartas y helados en un salón de espejos y azulejos.', 'Prueba una yema con un café en la barra.'],
      de: ['Confitería La Campana', 'Eine Konditorei seit 1885 an der Plaza de la Campana: Yemas, Torten und Eis in einem Raum voller Spiegel und Fliesen.', 'Eine Yema – Eigelbsüßigkeit – mit Kaffee an der Theke probieren.'],
      fr: ['Confitería La Campana', 'Une pâtisserie depuis 1885 place de la Campana : yemas, gâteaux et glaces dans une salle de miroirs et azulejos.', 'Goûtez une yema, douceur au jaune d’œuf, avec un café au comptoir.'],
      it: ['Confitería La Campana', 'Una pasticceria dal 1885 in plaza de la Campana: yemas, torte e gelati in una sala di specchi e azulejos.', 'Assaggia una yema, dolcetto al tuorlo, con un caffè al banco.'],
    }, { price: level(1), address: 'Calle Sierpes 1', menu: [
      ['Yemas', undefined, 'сладости из яичных желтков|egg-yolk sweets|yemas|Eigelbsüßigkeiten|douceurs au jaune d’œuf|dolcetti al tuorlo'],
      ['Café con leche', undefined, 'кофе с молоком|coffee with milk|café con leche|Milchkaffee|café au lait|caffè latte'],
    ] }),
    P('freiduria-puerta-de-la-carne', 'food', 37.3866, -5.9845, FOOD, 4.4, 5900, ['food', 'streetfood'], {
      ru: ['Freiduría Puerta de la Carne', 'Классическая севильская рыбная «фрейдурия»: жареная рыба на вес в бумажном кульке — кальмары, анчоусы, «адобо» из маринованной акулы.', 'Возьмите рыбу в кульке и пиво в соседнем баре — так здесь принято.'],
      en: ['Freiduría Puerta de la Carne', 'A classic Sevillian fried-fish shop: fish by weight in a paper cone — squid, anchovies and adobo marinated dogfish.', 'Take your cone of fish to the bar next door for a beer — that’s the custom.'],
      es: ['Freiduría Puerta de la Carne', 'Una freiduría sevillana clásica: pescado frito al peso en cartucho, calamares, boquerones y cazón en adobo.', 'Llévate el cartucho al bar de al lado con una cerveza: es la costumbre.'],
      de: ['Freiduría Puerta de la Carne', 'Eine klassische Sevillaner Fischbraterei: frittierter Fisch nach Gewicht in der Papiertüte – Tintenfisch, Sardellen und marinierter Hundshai.', 'Mit der Tüte ins Nachbarlokal auf ein Bier – so ist es Brauch.'],
      fr: ['Freiduría Puerta de la Carne', 'Une friterie de poisson sévillane classique : poisson au poids en cornet, calmars, anchois et cazón en adobo.', 'Emportez votre cornet au bar voisin avec une bière : c’est la coutume.'],
      it: ['Freiduría Puerta de la Carne', 'Una friggitoria sivigliana classica: pesce fritto a peso nel cartoccio, calamari, alici e palombo in adobo.', 'Porta il cartoccio nel bar accanto con una birra: è l’usanza.'],
    }, { price: level(1), address: 'Calle Santa María la Blanca 34', menu: [
      ['Cazón en adobo', undefined, 'маринованная жареная акула|marinated fried dogfish|cazón en adobo|marinierter frittierter Hundshai|cazón mariné frit|palombo marinato fritto'],
      ['Boquerones fritos', undefined, 'жареные анчоусы|fried anchovies|boquerones fritos|frittierte Sardellen|anchois frits|alici fritte'],
    ] }),
    P('abaceria-san-lorenzo', 'food', 37.3983, -5.9962, FOOD, 4.6, 3100, ['food', 'history'], {
      ru: ['Antigua Abacería de San Lorenzo', 'Бывшая бакалея в квартале Сан-Лоренсо, ставшая таверной: бочки вместо столов, андалусские сыры, хамон и домашние блюда.', 'Атмосферный и недорогой ужин; у местных пользуется любовью.'],
      en: ['Antigua Abacería de San Lorenzo', 'An old grocery in San Lorenzo turned tavern: barrels for tables, Andalusian cheeses, ham and home-style dishes.', 'An atmospheric, inexpensive dinner loved by locals.'],
      es: ['Antigua Abacería de San Lorenzo', 'Una antigua abacería de San Lorenzo convertida en taberna: barriles como mesas, quesos andaluces, jamón y guisos caseros.', 'Una cena con encanto y barata, muy querida por los vecinos.'],
      de: ['Antigua Abacería de San Lorenzo', 'Ein alter Krämerladen in San Lorenzo, heute Taverne: Fässer als Tische, andalusischer Käse, Schinken und Hausmannskost.', 'Ein stimmungsvolles, günstiges Abendessen, bei Einheimischen beliebt.'],
      fr: ['Antigua Abacería de San Lorenzo', 'Une ancienne épicerie de San Lorenzo devenue taverne : tonneaux en guise de tables, fromages andalous, jambon et plats maison.', 'Un dîner plein de charme et bon marché, adoré des habitants.'],
      it: ['Antigua Abacería de San Lorenzo', 'Un’antica drogheria di San Lorenzo diventata taverna: botti come tavoli, formaggi andalusi, prosciutto e piatti casalinghi.', 'Una cena suggestiva ed economica, amata dai sivigliani.'],
    }, { spot: 'hidden', price: level(1), address: 'Calle Teodosio 53', menu: [
      ['Quesos andaluces', undefined, 'андалусские сыры|Andalusian cheeses|quesos andaluces|andalusische Käse|fromages andalous|formaggi andalusi'],
      ['Guiso del día', undefined, 'домашнее рагу дня|home-style stew of the day|guiso del día|Eintopf des Tages|ragoût du jour|stufato del giorno'],
    ] }),
    P('la-brunilda', 'food', 37.3874, -5.9997, FOOD, 4.6, 6300, ['food'], {
      ru: ['La Brunilda', 'Современный тапас-бар в Аренале: авторские тапас — ризотто, тако, рыба дня — по доступным ценам; очередь к открытию.', 'Бронирования нет — приходите к открытию в 13:00 или 20:30.'],
      en: ['La Brunilda', 'A modern tapas bar in El Arenal: creative tapas — risotto, tacos, fish of the day — at fair prices; a queue at opening.', 'No bookings — arrive at the 1 pm or 8:30 pm opening.'],
      es: ['La Brunilda', 'Un bar de tapas moderno en el Arenal: tapas de autor —risotto, tacos, pescado del día— a buen precio; cola en la apertura.', 'Sin reservas: llega a las 13:00 o a las 20:30.'],
      de: ['La Brunilda', 'Eine moderne Tapasbar im Arenal: kreative Tapas – Risotto, Tacos, Tagesfisch – zu fairen Preisen; zur Öffnung Schlange.', 'Keine Reservierung – zur Öffnung um 13 oder 20:30 Uhr kommen.'],
      fr: ['La Brunilda', 'Un bar à tapas moderne de l’Arenal : tapas créatives, risotto, tacos, poisson du jour, à prix doux ; file à l’ouverture.', 'Sans réservation : venez à 13 h ou 20 h 30.'],
      it: ['La Brunilda', 'Un bar di tapas moderno all’Arenal: tapas creative, risotto, tacos, pesce del giorno, a prezzi onesti; coda all’apertura.', 'Niente prenotazioni: arriva alle 13 o alle 20:30.'],
    }, { price: level(2), address: 'Calle Galera 5', menu: [
      ['Risotto', undefined, 'ризотто дня|risotto of the day|risotto del día|Risotto des Tages|risotto du jour|risotto del giorno'],
      ['Fish of the day', undefined, 'рыба дня|fish of the day|pescado del día|Fisch des Tages|poisson du jour|pesce del giorno'],
    ] }),
    P('bar-el-comercio', 'food', 37.3914, -5.993, LANE, 4.5, 4100, ['food', 'history'], {
      ru: ['Bar El Comercio', 'Бар 1904 года с деревянной стойкой и изразцами, где с утра подают чуррос с густым горячим шоколадом.', 'Идеальный завтрак: чуррос с шоколадом у стойки.'],
      en: ['Bar El Comercio', 'A 1904 bar with a wooden counter and tiles serving churros with thick hot chocolate from the morning.', 'The perfect breakfast: churros and chocolate at the counter.'],
      es: ['Bar El Comercio', 'Un bar de 1904 con barra de madera y azulejos que sirve churros con chocolate espeso desde la mañana.', 'Desayuno perfecto: churros con chocolate en la barra.'],
      de: ['Bar El Comercio', 'Eine Bar von 1904 mit Holztresen und Fliesen, ab morgens Churros mit dicker heißer Schokolade.', 'Perfektes Frühstück: Churros mit Schokolade an der Theke.'],
      fr: ['Bar El Comercio', 'Un bar de 1904 au comptoir en bois et azulejos qui sert dès le matin churros et chocolat épais.', 'Petit-déjeuner parfait : churros et chocolat au comptoir.'],
      it: ['Bar El Comercio', 'Un bar del 1904 con bancone di legno e azulejos che serve dal mattino churros con cioccolata densa.', 'Colazione perfetta: churros e cioccolata al banco.'],
    }, { price: level(1), address: 'Calle Lineros 9', menu: [
      ['Churros con chocolate', undefined, 'чуррос с густым горячим шоколадом|churros with thick hot chocolate|churros con chocolate|Churros mit heißer Schokolade|churros et chocolat chaud|churros con cioccolata'],
      ['Tostada con tomate', undefined, 'тост с томатом и оливковым маслом|toast with tomato and olive oil|tostada con tomate y aceite|Toast mit Tomate und Olivenöl|tartine tomate et huile d’olive|pane tostato con pomodoro e olio'],
    ] }),
  ],
  routes: [
    D(['bar-el-comercio', '=seville-cathedral-giralda', '=seville-real-alcazar', 'barrio-santa-cruz', '=seville-callejon-del-agua', 'bar-las-teresas', 'hospital-venerables', 'casa-de-la-memoria', 'canabota'],
      'Собор, Алькасар, Санта-Крус и фламенко|The cathedral, the Alcázar, Santa Cruz and flamenco|La catedral, el Alcázar, Santa Cruz y flamenco|Kathedrale, Alcázar, Santa Cruz und Flamenco|La cathédrale, l’Alcázar, Santa Cruz et le flamenco|Cattedrale, Alcázar, Santa Cruz e flamenco'),
    D(['maria-luisa-park', '=seville-plaza-de-espana', 'freiduria-puerta-de-la-carne', 'torre-del-oro', 'maestranza', 'bodeguita-romero', 'triana', 'las-golondrinas'],
      'Площадь Испании, река и Триана|Plaza de España, the river and Triana|La Plaza de España, el río y Triana|Plaza de España, Fluss und Triana|Plaza de España, le fleuve et Triana|Plaza de España, il fiume e Triana'),
    D(['italica', 'la-brunilda', 'bellas-artes', 'confiteria-la-campana', 'palacio-de-las-duenas', '=seville-metropol-parasol', 'abantal'],
      'Италика, музей и закат на Сетас|Itálica, the museum and sunset on Las Setas|Itálica, el museo y atardecer en las Setas|Itálica, Museum und Sonnenuntergang auf Las Setas|Italica, le musée et coucher de soleil sur Las Setas|Italica, il museo e tramonto sulle Setas'),
  ],
};

export default pack;
