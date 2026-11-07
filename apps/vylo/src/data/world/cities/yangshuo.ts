import type { CityPack } from '../types';
import { free, level, makeDay, makePlace } from './_kit.ts';

const P = makePlace('yangshuo');
const D = makeDay('yangshuo');
const RIVER = 'aQlWS8hsyPI';
const HILL = '3f1eju2iB4U';
const SUNRISE = 'vG6-pbX7024';
const BEAMS = 'krXds7HmmjE';
const TERRACE = '_75I7lCDgY8';
const FIELDS = '5Lfqrir0mko';

const pack: CityPack = {
  country: 'CN',
  city: 'yangshuo',
  places: [
    P('li-river-cruise', 'nature', 25.15, 110.42, BEAMS, 4.5, 26000, ['cruise', 'views', 'nature'], {
      ru: ['Круиз по реке Ли из Гуйлиня', 'Около 4 часов на теплоходе от Гуйлиня до Яншо среди карстовых пиков, бамбука и рыбаков на бамбуковых плотах.', 'Садитесь на верхнюю палубу; самый знаменитый вид — у Синпина, тот, что на купюре в 20 юаней.'],
      en: ['Li River cruise from Guilin', 'About 4 hours by boat from Guilin to Yangshuo among karst peaks, bamboo and fishermen on bamboo rafts.', 'Sit on the upper deck; the most famous view is near Xingping — the one on the 20-yuan note.'],
      es: ['Crucero por el río Li desde Guilin', 'Unas 4 horas en barco de Guilin a Yangshuo entre picos kársticos, bambú y pescadores en balsas de bambú.', 'Siéntate en la cubierta superior; la vista más famosa, cerca de Xingping, es la del billete de 20 yuanes.'],
      de: ['Li-Fluss-Fahrt ab Guilin', 'Rund 4 Stunden per Schiff von Guilin nach Yangshuo zwischen Karstgipfeln, Bambus und Fischern auf Bambusflößen.', 'Aufs Oberdeck setzen; der berühmteste Blick bei Xingping ist der auf dem 20-Yuan-Schein.'],
      fr: ['Croisière sur la Li depuis Guilin', 'Environ 4 heures de bateau de Guilin à Yangshuo, entre pitons karstiques, bambous et pêcheurs sur radeaux de bambou.', 'Installez-vous sur le pont supérieur ; la vue la plus célèbre, près de Xingping, est celle du billet de 20 yuans.'],
      it: ['Crociera sul fiume Li da Guilin', 'Circa 4 ore di battello da Guilin a Yangshuo tra picchi carsici, bambù e pescatori sulle zattere di bambù.', 'Siediti sul ponte superiore; la vista più famosa, vicino a Xingping, è quella della banconota da 20 yuan.'],
    }, { spot: 'insta', price: level(3) }),
    P('reed-flute-cave', 'attraction', 25.308, 110.278, BEAMS, 4.3, 18000, ['nature', 'photo'], {
      ru: ['Пещера Тростниковой флейты (Гуйлинь)', 'Карстовая пещера с подсвеченными сталактитами и надписями на стенах, оставленными посетителями ещё в эпоху Тан.', 'Внутри влажно и скользко — нужна удобная обувь.'],
      en: ['Reed Flute Cave (Guilin)', 'A karst cave of illuminated stalactites with wall inscriptions left by visitors as far back as the Tang dynasty.', 'It’s damp and slippery inside — wear good shoes.'],
      es: ['Cueva de la Flauta de Caña (Guilin)', 'Una cueva kárstica de estalactitas iluminadas con inscripciones dejadas por visitantes ya en la dinastía Tang.', 'Dentro hay humedad y resbala: lleva buen calzado.'],
      de: ['Schilfrohrflötenhöhle (Guilin)', 'Eine Karsthöhle mit beleuchteten Tropfsteinen und Wandinschriften von Besuchern schon aus der Tang-Zeit.', 'Drinnen feucht und rutschig – gute Schuhe tragen.'],
      fr: ['Grotte de la Flûte de roseau (Guilin)', 'Une grotte karstique aux stalactites illuminées, avec des inscriptions laissées par des visiteurs dès la dynastie Tang.', 'Humide et glissante : prévoyez de bonnes chaussures.'],
      it: ['Grotta del Flauto di canna (Guilin)', 'Una grotta carsica di stalattiti illuminate con iscrizioni lasciate dai visitatori già in epoca Tang.', 'Dentro è umido e scivoloso: scarpe buone.'],
    }, { price: level(2) }),
    P('elephant-trunk-hill', 'nature', 25.269, 110.297, RIVER, 4.3, 21000, ['nature', 'photo'], {
      ru: ['Холм Хобот слона (Гуйлинь)', 'Символ Гуйлиня: карстовый холм над рекой Ли, похожий на слона, опустившего хобот в воду.', 'Лучший вид — с противоположного берега или с бамбукового плота вечером.'],
      en: ['Elephant Trunk Hill (Guilin)', 'Guilin’s symbol: a karst hill over the Li River that looks like an elephant dipping its trunk into the water.', 'The best view is from the opposite bank or from a bamboo raft in the evening.'],
      es: ['Colina de la Trompa de Elefante (Guilin)', 'El símbolo de Guilin: una colina kárstica sobre el río Li que parece un elefante metiendo la trompa en el agua.', 'La mejor vista es desde la otra orilla o en balsa al atardecer.'],
      de: ['Elefantenrüsselhügel (Guilin)', 'Guilins Wahrzeichen: ein Karsthügel am Li-Fluss, der wie ein Elefant aussieht, der den Rüssel ins Wasser taucht.', 'Der beste Blick vom gegenüberliegenden Ufer oder abends vom Bambusfloß.'],
      fr: ['Colline de la Trompe d’éléphant (Guilin)', 'Le symbole de Guilin : une colline karstique sur la Li qui ressemble à un éléphant plongeant sa trompe dans l’eau.', 'La plus belle vue est depuis l’autre rive ou en radeau le soir.'],
      it: ['Collina della Proboscide dell’Elefante (Guilin)', 'Il simbolo di Guilin: una collina carsica sul fiume Li che sembra un elefante con la proboscide nell’acqua.', 'La vista migliore è dalla riva opposta o in zattera la sera.'],
    }, { spot: 'insta', price: level(1) }),
    P('longji-rice-terraces', 'nature', 25.75, 110.12, TERRACE, 4.7, 16000, ['nature', 'hiking', 'photo'], {
      ru: ['Рисовые террасы Лунцзи', 'Террасы, которые веками вырезали на склонах гор народы чжуан и яо; деревни Пинъань и Дачжай с видовыми точками.', 'Самые красивые — в конце мая (вода) и в конце сентября — октябре (золотой рис).'],
      en: ['Longji Rice Terraces', 'Terraces carved into the mountainsides over centuries by the Zhuang and Yao peoples; the villages of Ping’an and Dazhai have lookouts.', 'Loveliest in late May (water) and late September–October (golden rice).'],
      es: ['Terrazas de arroz de Longji', 'Terrazas talladas en las laderas durante siglos por los pueblos zhuang y yao; las aldeas de Ping’an y Dazhai tienen miradores.', 'Lo más bonito: finales de mayo (agua) y finales de septiembre–octubre (arroz dorado).'],
      de: ['Reisterrassen von Longji', 'Terrassen, über Jahrhunderte von den Zhuang und Yao in die Berghänge gehauen; Aussichtspunkte in Ping’an und Dazhai.', 'Am schönsten Ende Mai (Wasser) und Ende September–Oktober (goldener Reis).'],
      fr: ['Rizières en terrasses de Longji', 'Des terrasses taillées dans les montagnes depuis des siècles par les Zhuang et les Yao ; belvédères à Ping’an et Dazhai.', 'Plus belles fin mai (eau) et de fin septembre à octobre (riz doré).'],
      it: ['Terrazze di riso di Longji', 'Terrazze scavate nei monti nei secoli dai popoli zhuang e yao; belvedere nei villaggi di Ping’an e Dazhai.', 'Il meglio a fine maggio (acqua) e tra fine settembre e ottobre (riso dorato).'],
    }, { spot: 'insta', price: level(2) }),
    P('impression-liu-sanjie', 'attraction', 24.776, 110.499, SUNRISE, 4.4, 14000, ['culture', 'nightlife'], {
      ru: ['Шоу «Впечатление: Лю Саньцзе»', 'Вечернее шоу под открытым небом на реке Ли, поставленное Чжаном Имоу, с сотнями исполнителей на фоне подсвеченных карстовых гор.', 'Места в центре трибуны стоят дороже, но вид там лучше.'],
      en: ['Impression Liu Sanjie', 'An open-air evening show on the Li River directed by Zhang Yimou, with hundreds of performers against floodlit karst peaks.', 'Central seats cost more but have the better view.'],
      es: ['Impression Liu Sanjie', 'Un espectáculo nocturno al aire libre sobre el río Li dirigido por Zhang Yimou, con cientos de artistas ante picos kársticos iluminados.', 'Los asientos centrales cuestan más pero se ve mejor.'],
      de: ['Impression Liu Sanjie', 'Eine Freilichtshow am Abend auf dem Li-Fluss, inszeniert von Zhang Yimou, mit Hunderten Darstellern vor beleuchteten Karstgipfeln.', 'Mittlere Plätze kosten mehr, bieten aber die bessere Sicht.'],
      fr: ['Impression Liu Sanjie', 'Un spectacle nocturne en plein air sur la Li, mis en scène par Zhang Yimou, avec des centaines d’artistes devant des pitons éclairés.', 'Les places centrales sont plus chères mais mieux placées.'],
      it: ['Impression Liu Sanjie', 'Uno spettacolo serale all’aperto sul fiume Li firmato da Zhang Yimou, con centinaia di artisti davanti ai picchi carsici illuminati.', 'I posti centrali costano di più ma si vede meglio.'],
    }, { price: level(2) }),
    P('silver-cave', 'attraction', 24.633, 110.433, BEAMS, 4.3, 7800, ['nature'], {
      ru: ['Серебряная пещера', 'Большая карстовая пещера к югу от Яншо с «серебряными» кристаллическими натёками и подсвеченными залами.', 'Удобно совместить с поездкой в Фули или вдоль реки Ли.'],
      en: ['Silver Cave', 'A large karst cave south of Yangshuo with “silver” crystal formations and lit halls.', 'Easy to combine with a trip to Fuli or along the Li River.'],
      es: ['Cueva de Plata', 'Una gran cueva kárstica al sur de Yangshuo con formaciones cristalinas «plateadas» y salas iluminadas.', 'Se combina con una visita a Fuli o al río Li.'],
      de: ['Silberhöhle', 'Eine große Karsthöhle südlich von Yangshuo mit „silbernen“ Kristallformationen und beleuchteten Hallen.', 'Gut mit Fuli oder einer Tour am Li-Fluss kombinierbar.'],
      fr: ['Grotte d’Argent', 'Une grande grotte karstique au sud de Yangshuo, aux concrétions cristallines « d’argent » et salles éclairées.', 'Facile à combiner avec Fuli ou la Li.'],
      it: ['Grotta d’Argento', 'Una grande grotta carsica a sud di Yangshuo con formazioni cristalline «d’argento» e sale illuminate.', 'Si abbina bene a Fuli o al fiume Li.'],
    }, { price: level(2) }),
    P('big-banyan-tree', 'nature', 24.73, 110.465, FIELDS, 4.0, 4600, ['nature'], {
      ru: ['Большой баньян', 'Огромный баньян возрастом больше тысячи лет у реки Цзиньбао по дороге к Лунной горе.', 'Хорошая остановка на велосипедной прогулке по Десятимильной галерее.'],
      en: ['Big Banyan Tree', 'A huge banyan more than a thousand years old by the Jinbao River on the way to Moon Hill.', 'A good stop on a bike ride along the Ten-Mile Gallery.'],
      es: ['Gran Baniano', 'Un enorme baniano de más de mil años junto al río Jinbao, camino de la Colina de la Luna.', 'Buena parada en una ruta en bici por la Galería de Diez Millas.'],
      de: ['Großer Banyanbaum', 'Ein riesiger, über tausend Jahre alter Banyanbaum am Jinbao-Fluss auf dem Weg zum Mondberg.', 'Ein guter Halt auf einer Radtour durch die Zehn-Meilen-Galerie.'],
      fr: ['Grand Banian', 'Un immense banian de plus de mille ans au bord de la rivière Jinbao, sur la route de la colline de la Lune.', 'Une bonne halte lors d’une balade à vélo sur la Galerie des dix milles.'],
      it: ['Grande Baniano', 'Un enorme baniano di oltre mille anni sul fiume Jinbao, sulla strada per la Collina della Luna.', 'Una buona sosta in bici lungo la Galleria delle Dieci Miglia.'],
    }, { price: level(1) }),
    P('fuli-ancient-town', 'attraction', 24.802, 110.564, RIVER, 4.2, 3900, ['oldtown', 'art'], {
      ru: ['Древний городок Фули', 'Старый городок на реке Ли, известный мастерскими расписных вееров, каменными улочками и тишиной.', 'Купите веер прямо у мастера — их расписывают при вас.'],
      en: ['Fuli ancient town', 'An old town on the Li River known for its painted-fan workshops, stone lanes and quiet.', 'Buy a fan straight from the painter — they’re painted in front of you.'],
      es: ['Pueblo antiguo de Fuli', 'Un viejo pueblo junto al río Li conocido por sus talleres de abanicos pintados, callejas de piedra y calma.', 'Compra un abanico al pintor: lo pinta delante de ti.'],
      de: ['Altstadt Fuli', 'Ein altes Städtchen am Li-Fluss, bekannt für Werkstätten bemalter Fächer, Steingassen und Ruhe.', 'Einen Fächer direkt beim Maler kaufen – er wird vor einem bemalt.'],
      fr: ['Bourg ancien de Fuli', 'Un vieux bourg sur la Li connu pour ses ateliers d’éventails peints, ses ruelles de pierre et son calme.', 'Achetez un éventail au peintre : il le peint devant vous.'],
      it: ['Antico borgo di Fuli', 'Un vecchio borgo sul fiume Li noto per i laboratori di ventagli dipinti, i vicoli di pietra e la quiete.', 'Compra un ventaglio dal pittore: lo dipinge davanti a te.'],
    }, { spot: 'hidden', price: free }),
    P('ten-mile-gallery', 'nature', 24.756, 110.472, FIELDS, 4.5, 8300, ['nature', 'roadtrip', 'photo'], {
      ru: ['Десятимильная галерея', 'Дорога от Яншо к Лунной горе между карстовыми пиками и полями — самый популярный маршрут для велосипеда и электроскутера.', 'Возьмите велосипед в городе и едьте утром, пока не жарко.'],
      en: ['Ten-Mile Gallery', 'The road from Yangshuo to Moon Hill between karst peaks and fields — the favourite route by bike or e-scooter.', 'Rent a bike in town and ride in the morning before the heat.'],
      es: ['Galería de Diez Millas', 'La carretera de Yangshuo a la Colina de la Luna entre picos kársticos y campos, la ruta favorita en bici o patinete eléctrico.', 'Alquila una bici en el pueblo y sal por la mañana antes del calor.'],
      de: ['Zehn-Meilen-Galerie', 'Die Straße von Yangshuo zum Mondberg zwischen Karstgipfeln und Feldern – die beliebteste Strecke per Rad oder E-Roller.', 'Im Ort ein Rad mieten und morgens vor der Hitze fahren.'],
      fr: ['Galerie des dix milles', 'La route de Yangshuo à la colline de la Lune entre pitons et champs, l’itinéraire favori à vélo ou en scooter électrique.', 'Louez un vélo en ville et partez le matin avant la chaleur.'],
      it: ['Galleria delle Dieci Miglia', 'La strada da Yangshuo alla Collina della Luna tra picchi carsici e campi, il percorso preferito in bici o scooter elettrico.', 'Noleggia una bici in paese e parti al mattino prima del caldo.'],
    }, { spot: 'insta', price: free }),
    P('jiuxian-village', 'attraction', 24.782, 110.413, FIELDS, 4.4, 2900, ['oldtown', 'history'], {
      ru: ['Деревня Цзюсянь', 'Деревня эпохи Мин и Цин на реке Юйлун со старыми домами из серого кирпича, часть которых превращена в гостиницы.', 'Тихое место для прогулки после сплава по Юйлуну.'],
      en: ['Jiuxian village', 'A Ming and Qing village on the Yulong River with old grey-brick houses, some turned into guesthouses.', 'A quiet walk after rafting the Yulong.'],
      es: ['Aldea de Jiuxian', 'Una aldea de las dinastías Ming y Qing junto al río Yulong, con viejas casas de ladrillo gris, algunas convertidas en hospederías.', 'Un paseo tranquilo tras bajar el Yulong en balsa.'],
      de: ['Dorf Jiuxian', 'Ein Dorf der Ming- und Qing-Zeit am Yulong-Fluss mit alten grauen Ziegelhäusern, teils zu Gästehäusern umgebaut.', 'Ein ruhiger Spaziergang nach der Floßfahrt auf dem Yulong.'],
      fr: ['Village de Jiuxian', 'Un village des Ming et des Qing sur la Yulong, aux vieilles maisons de brique grise dont certaines sont devenues des maisons d’hôtes.', 'Une balade calme après la descente de la Yulong en radeau.'],
      it: ['Villaggio di Jiuxian', 'Un villaggio Ming e Qing sul fiume Yulong con vecchie case di mattoni grigi, alcune trasformate in pensioni.', 'Una passeggiata tranquilla dopo la discesa dello Yulong in zattera.'],
    }, { spot: 'hidden', price: free }),
    P('xie-dajie-beer-fish', 'food', 24.778, 110.495, RIVER, 4.2, 8100, ['food'], {
      ru: ['Пивная рыба у Се Дацзе', 'Одно из самых известных мест в Яншо для пицзюйюй — рыбы из реки Ли, тушённой в местном пиве с помидорами и перцем.', 'Цену рыбы считают по весу — уточните её до готовки.'],
      en: ['Xie Dajie Beer Fish', 'One of Yangshuo’s best-known spots for pijiu yu — Li River fish braised in local beer with tomatoes and chilli.', 'Fish is priced by weight — confirm the price before it’s cooked.'],
      es: ['Pescado a la cerveza de Xie Dajie', 'Uno de los lugares más conocidos de Yangshuo para el pijiu yu: pescado del río Li guisado en cerveza local con tomate y chile.', 'El pescado se cobra al peso: confirma el precio antes de cocinarlo.'],
      de: ['Bierfisch bei Xie Dajie', 'Eine der bekanntesten Adressen in Yangshuo für Pijiu Yu – Li-Fluss-Fisch, in lokalem Bier mit Tomaten und Chili geschmort.', 'Der Fisch wird nach Gewicht berechnet – den Preis vor dem Kochen klären.'],
      fr: ['Poisson à la bière de Xie Dajie', 'L’une des adresses les plus connues de Yangshuo pour le pijiu yu : poisson de la Li braisé à la bière locale, tomates et piment.', 'Le poisson est vendu au poids : faites confirmer le prix avant la cuisson.'],
      it: ['Pesce alla birra di Xie Dajie', 'Uno dei locali più noti di Yangshuo per il pijiu yu: pesce del fiume Li brasato nella birra locale con pomodoro e peperoncino.', 'Il pesce si paga a peso: chiedi il prezzo prima della cottura.'],
    }, { price: level(2), menu: [
      ['Pijiu yu', undefined, 'рыба, тушённая в пиве|fish braised in beer|pescado guisado en cerveza|in Bier geschmorter Fisch|poisson braisé à la bière|pesce brasato nella birra'],
      ['Tianluo niang', undefined, 'фаршированные речные улитки|stuffed river snails|caracoles de río rellenos|gefüllte Flussschnecken|escargots de rivière farcis|lumache di fiume ripiene'],
    ] }),
    P('pure-lotus', 'food', 24.779, 110.492, RIVER, 4.6, 2400, ['food'], {
      ru: ['Pure Lotus (вегетарианский)', 'Лучший вегетарианский ресторан Яншо в тихом зале: овощное карри, тушёные баклажаны и постная «рыба в пиве».', 'Хорошее место, если вы не едите мясо: здесь всё без него.'],
      en: ['Pure Lotus (vegetarian)', 'Yangshuo’s best vegetarian restaurant in a quiet room: vegetable curry, braised aubergine and a meat-free “beer fish”.', 'A safe choice if you don’t eat meat: nothing here contains it.'],
      es: ['Pure Lotus (vegetariano)', 'El mejor vegetariano de Yangshuo en una sala tranquila: curry de verduras, berenjena estofada y un «pescado a la cerveza» sin carne.', 'Elección segura si no comes carne: aquí nada la lleva.'],
      de: ['Pure Lotus (vegetarisch)', 'Yangshuos bestes vegetarisches Restaurant in ruhigem Raum: Gemüsecurry, geschmorte Aubergine und ein fleischloser „Bierfisch“.', 'Eine sichere Wahl ohne Fleisch: Hier enthält nichts welches.'],
      fr: ['Pure Lotus (végétarien)', 'Le meilleur végétarien de Yangshuo, dans une salle paisible : curry de légumes, aubergine braisée et « poisson à la bière » sans viande.', 'Un choix sûr si vous ne mangez pas de viande : rien n’en contient.'],
      it: ['Pure Lotus (vegetariano)', 'Il miglior vegetariano di Yangshuo, in una sala tranquilla: curry di verdure, melanzane brasate e un «pesce alla birra» senza carne.', 'Scelta sicura se non mangi carne: qui non ce n’è.'],
    }, { spot: 'hidden', price: level(1), menu: [
      ['Vegetable curry', undefined, 'овощное карри|vegetable curry|curry de verduras|Gemüsecurry|curry de légumes|curry di verdure'],
      ['Braised aubergine', undefined, 'тушёные баклажаны|braised aubergine|berenjena estofada|geschmorte Aubergine|aubergine braisée|melanzane brasate'],
    ] }),
    P('cloud-9', 'food', 24.7785, 110.4955, RIVER, 4.2, 2900, ['food', 'nightlife'], {
      ru: ['Cloud 9 (Западная улица)', 'Ресторан на Западной улице с китайскими и европейскими блюдами и хорошим выбором вегетарианских.', 'Сядьте на балкон над улицей — вечером оттуда видно всю жизнь Западной улицы.'],
      en: ['Cloud 9 (West Street)', 'A West Street restaurant with Chinese and Western dishes and good vegetarian options.', 'Sit on the balcony over the street — in the evening you see all of West Street’s life.'],
      es: ['Cloud 9 (calle Oeste)', 'Un restaurante en la calle Oeste con platos chinos y occidentales y buenas opciones vegetarianas.', 'Siéntate en el balcón sobre la calle: por la noche se ve toda su vida.'],
      de: ['Cloud 9 (West Street)', 'Ein Restaurant in der West Street mit chinesischen und westlichen Gerichten und guter vegetarischer Auswahl.', 'Auf den Balkon über der Straße setzen – abends sieht man das ganze Treiben.'],
      fr: ['Cloud 9 (rue de l’Ouest)', 'Un restaurant de la rue de l’Ouest aux plats chinois et occidentaux, avec de bonnes options végétariennes.', 'Installez-vous au balcon : le soir, toute la rue s’anime sous vos yeux.'],
      it: ['Cloud 9 (West Street)', 'Un ristorante su West Street con piatti cinesi e occidentali e buone opzioni vegetariane.', 'Siediti sul balcone sulla via: la sera vedi tutta la vita di West Street.'],
    }, { price: level(2), menu: [
      ['Beer fish', undefined, 'рыба в пиве|beer fish|pescado a la cerveza|Bierfisch|poisson à la bière|pesce alla birra'],
      ['Stuffed tofu', undefined, 'фаршированный тофу|stuffed tofu|tofu relleno|gefüllter Tofu|tofu farci|tofu ripieno'],
    ] }),
    P('yangshuo-cooking-school', 'food', 24.756, 110.458, FIELDS, 4.7, 2100, ['food', 'culture'], {
      ru: ['Кулинарная школа в Яншо', 'Мастер-класс в деревенском доме: поход на рынок и готовка местных блюд — фаршированных овощей «нян», пивной рыбы, курицы с имбирём.', 'Записывайтесь заранее; в стоимость входит обед из того, что приготовили.'],
      en: ['Yangshuo cooking class', 'A class in a village house: a market visit, then cooking local dishes — stuffed “niang” vegetables, beer fish and ginger chicken.', 'Book ahead; lunch from what you cook is included.'],
      es: ['Clase de cocina en Yangshuo', 'Una clase en una casa de aldea: visita al mercado y cocina de platos locales, verduras rellenas «niang», pescado a la cerveza y pollo al jengibre.', 'Reserva antes; el almuerzo con lo cocinado está incluido.'],
      de: ['Kochkurs in Yangshuo', 'Ein Kurs in einem Dorfhaus: Marktbesuch und Kochen lokaler Gerichte – gefülltes „Niang“-Gemüse, Bierfisch und Ingwerhuhn.', 'Vorher buchen; das Mittagessen aus dem Gekochten ist inbegriffen.'],
      fr: ['Cours de cuisine à Yangshuo', 'Un cours dans une maison de village : marché, puis cuisine de plats locaux — légumes farcis « niang », poisson à la bière, poulet au gingembre.', 'Réservez ; le déjeuner de ce que vous cuisinez est inclus.'],
      it: ['Corso di cucina a Yangshuo', 'Un corso in una casa di villaggio: mercato e cucina di piatti locali — verdure ripiene «niang», pesce alla birra, pollo allo zenzero.', 'Prenota; il pranzo con ciò che cucini è incluso.'],
    }, { price: level(2), menu: [
      ['Stuffed vegetables (niang)', undefined, 'овощи, фаршированные мясом|vegetables stuffed with pork|verduras rellenas de cerdo|mit Schwein gefülltes Gemüse|légumes farcis au porc|verdure ripiene di maiale'],
      ['Ginger chicken', undefined, 'курица с имбирём|ginger chicken|pollo al jengibre|Ingwerhuhn|poulet au gingembre|pollo allo zenzero'],
    ] }),
    P('chongshan-mifen', 'food', 25.28, 110.29, RIVER, 4.1, 5300, ['food', 'streetfood'], {
      ru: ['Гуйлиньская рисовая лапша (Чуншань Мифэнь)', 'Гуйлиньская сеть рисовой лапши: мифэнь с тушёной говядиной, хрустящей свининой, арахисом и маринованной фасолью.', 'Добавьте ложку бульона и чили со стойки — сюда приходят за этим сочетанием.'],
      en: ['Guilin rice noodles (Chongshan Mifen)', 'A Guilin rice-noodle chain: mifen with braised beef, crisp pork, peanuts and pickled beans.', 'Add a ladle of broth and chilli from the counter — that’s the combination people come for.'],
      es: ['Fideos de arroz de Guilin (Chongshan Mifen)', 'Una cadena de fideos de arroz de Guilin: mifen con ternera guisada, cerdo crujiente, cacahuetes y judías encurtidas.', 'Añade caldo y chile del mostrador: esa combinación es la clave.'],
      de: ['Guilin-Reisnudeln (Chongshan Mifen)', 'Eine Reisnudelkette aus Guilin: Mifen mit geschmortem Rind, knusprigem Schwein, Erdnüssen und eingelegten Bohnen.', 'Eine Kelle Brühe und Chili von der Theke dazu – genau dafür kommt man.'],
      fr: ['Nouilles de riz de Guilin (Chongshan Mifen)', 'Une chaîne de nouilles de riz de Guilin : mifen au bœuf braisé, porc croustillant, cacahuètes et haricots marinés.', 'Ajoutez une louche de bouillon et du piment au comptoir : c’est la clé.'],
      it: ['Noodle di riso di Guilin (Chongshan Mifen)', 'Una catena di noodle di riso di Guilin: mifen con manzo brasato, maiale croccante, arachidi e fagioli sottaceto.', 'Aggiungi brodo e peperoncino dal bancone: è questa la combinazione.'],
    }, { price: level(1), menu: [
      ['Guilin mifen', undefined, 'рисовая лапша с говядиной и арахисом|rice noodles with beef and peanuts|fideos de arroz con ternera y cacahuetes|Reisnudeln mit Rind und Erdnüssen|nouilles de riz au bœuf et cacahuètes|noodle di riso con manzo e arachidi'],
      ['Guoshao mifen', undefined, 'лапша с хрустящей свининой|rice noodles with crisp pork|fideos de arroz con cerdo crujiente|Reisnudeln mit knusprigem Schwein|nouilles de riz au porc croustillant|noodle di riso con maiale croccante'],
    ] }),
    P('gongcheng-youcha', 'food', 24.833, 110.828, FIELDS, 4.4, 1900, ['food', 'culture'], {
      ru: ['Масляный чай юча в Гунчэне', 'Уезд Гунчэн славится ючей — чаем, который толкут с имбирём, обжаривают в масле и подают с воздушным рисом и арахисом.', 'Его пьют несколько чашек подряд — хозяева будут подливать.'],
      en: ['Gongcheng youcha (oil tea)', 'Gongcheng county is famous for youcha — tea pounded with ginger, fried in oil and served with puffed rice and peanuts.', 'It’s drunk several cups in a row — hosts keep topping you up.'],
      es: ['Youcha de Gongcheng (té de aceite)', 'El condado de Gongcheng es famoso por el youcha: té machacado con jengibre, frito en aceite y servido con arroz inflado y cacahuetes.', 'Se beben varias tazas seguidas: el anfitrión rellena.'],
      de: ['Youcha aus Gongcheng (Öltee)', 'Der Kreis Gongcheng ist berühmt für Youcha – Tee, mit Ingwer zerstoßen, in Öl geröstet und mit Puffreis und Erdnüssen serviert.', 'Man trinkt mehrere Tassen nacheinander – der Gastgeber schenkt nach.'],
      fr: ['Youcha de Gongcheng (thé à l’huile)', 'Le district de Gongcheng est réputé pour le youcha : thé pilé au gingembre, revenu à l’huile et servi avec riz soufflé et cacahuètes.', 'On en boit plusieurs tasses : l’hôte ressert.'],
      it: ['Youcha di Gongcheng (tè all’olio)', 'La contea di Gongcheng è famosa per lo youcha: tè pestato con zenzero, saltato nell’olio e servito con riso soffiato e arachidi.', 'Se ne bevono più tazze di fila: l’ospite ne versa ancora.'],
    }, { price: level(1), menu: [
      ['Youcha', undefined, 'чай, обжаренный с имбирём в масле|tea fried with ginger in oil|té frito con jengibre en aceite|in Öl mit Ingwer gerösteter Tee|thé revenu au gingembre dans l’huile|tè saltato con zenzero nell’olio'],
      ['Puffed rice and peanuts', undefined, 'воздушный рис и арахис к чаю|puffed rice and peanuts to add|arroz inflado y cacahuetes|Puffreis und Erdnüsse dazu|riz soufflé et cacahuètes|riso soffiato e arachidi'],
    ] }),
    P('zhengyang-street', 'food', 25.28, 110.293, RIVER, 4.0, 7700, ['food', 'streetfood', 'nightlife'], {
      ru: ['Пешеходная улица Чжэнъян (Гуйлинь)', 'Вечерняя улица в центре Гуйлиня с лавками уличной еды: рисовая лапша, улитки и шашлычки.', 'Отсюда пешком до холма Хобот слона и подсвеченных пагод на озёрах.'],
      en: ['Zhengyang pedestrian street (Guilin)', 'An evening street in central Guilin lined with food stalls: rice noodles, river snails and skewers.', 'From here it’s a walk to Elephant Trunk Hill and the lit pagodas on the lakes.'],
      es: ['Calle peatonal Zhengyang (Guilin)', 'Una calle nocturna en el centro de Guilin con puestos de comida: fideos de arroz, caracoles de río y brochetas.', 'Desde aquí se va a pie a la Colina de la Trompa de Elefante y las pagodas iluminadas.'],
      de: ['Fußgängerstraße Zhengyang (Guilin)', 'Eine Abendstraße im Zentrum Guilins mit Garküchen: Reisnudeln, Flussschnecken und Spieße.', 'Von hier zu Fuß zum Elefantenrüsselhügel und den beleuchteten Pagoden an den Seen.'],
      fr: ['Rue piétonne Zhengyang (Guilin)', 'Une rue du soir au centre de Guilin bordée d’étals : nouilles de riz, escargots de rivière et brochettes.', 'D’ici, on rejoint à pied la colline de la Trompe d’éléphant et les pagodes illuminées.'],
      it: ['Via pedonale Zhengyang (Guilin)', 'Una via serale nel centro di Guilin piena di banchi: noodle di riso, lumache di fiume e spiedini.', 'Da qui si va a piedi alla Collina della Proboscide e alle pagode illuminate sui laghi.'],
    }, { price: level(1), menu: [
      ['River snails', undefined, 'речные улитки в остром соусе|river snails in spicy sauce|caracoles de río picantes|Flussschnecken in scharfer Soße|escargots de rivière épicés|lumache di fiume piccanti'],
      ['Skewers', undefined, 'шашлычки на гриле|grilled skewers|brochetas a la parrilla|gegrillte Spieße|brochettes grillées|spiedini alla griglia'],
    ] }),
    P('le-votre', 'food', 24.7783, 110.4958, RIVER, 4.0, 1800, ['food', 'history'], {
      ru: ['Le Vôtre (Западная улица)', 'Французский ресторан в старинном здании на Западной улице с деревянными балками и двором.', 'Хорошая смена кухни после нескольких дней острого.'],
      en: ['Le Vôtre (West Street)', 'A French restaurant in an old building on West Street with wooden beams and a courtyard.', 'A good change after a few days of spicy food.'],
      es: ['Le Vôtre (calle Oeste)', 'Un restaurante francés en un edificio antiguo de la calle Oeste con vigas de madera y patio.', 'Un buen cambio tras varios días de picante.'],
      de: ['Le Vôtre (West Street)', 'Ein französisches Restaurant in einem alten Gebäude in der West Street mit Holzbalken und Innenhof.', 'Eine gute Abwechslung nach ein paar Tagen Scharfem.'],
      fr: ['Le Vôtre (rue de l’Ouest)', 'Un restaurant français dans un vieux bâtiment de la rue de l’Ouest, poutres de bois et cour.', 'Un bon changement après quelques jours de piquant.'],
      it: ['Le Vôtre (West Street)', 'Un ristorante francese in un vecchio edificio di West Street con travi di legno e cortile.', 'Un buon cambio dopo qualche giorno di piccante.'],
    }, { price: level(2) }),
    P('secret-garden-jiuxian', 'food', 24.7825, 110.4135, FIELDS, 4.5, 900, ['food', 'romance'], {
      ru: ['Secret Garden (Цзюсянь)', 'Ресторан бутик-гостиницы в отреставрированных старых домах деревни Цзюсянь с садом и видом на горы.', 'Спокойный ужин в деревне после дня на реке Юйлун.'],
      en: ['Secret Garden (Jiuxian)', 'The restaurant of a boutique guesthouse in restored old houses of Jiuxian village, with a garden and mountain views.', 'A calm village dinner after a day on the Yulong River.'],
      es: ['Secret Garden (Jiuxian)', 'El restaurante de una hospedería boutique en casas antiguas restauradas de Jiuxian, con jardín y vistas a las montañas.', 'Una cena tranquila en la aldea tras un día en el río Yulong.'],
      de: ['Secret Garden (Jiuxian)', 'Das Restaurant eines Boutique-Gästehauses in restaurierten alten Häusern von Jiuxian mit Garten und Bergblick.', 'Ein ruhiges Abendessen im Dorf nach einem Tag am Yulong.'],
      fr: ['Secret Garden (Jiuxian)', 'Le restaurant d’une maison d’hôtes de charme dans de vieilles maisons restaurées de Jiuxian, jardin et vue sur les montagnes.', 'Un dîner calme au village après une journée sur la Yulong.'],
      it: ['Secret Garden (Jiuxian)', 'Il ristorante di una pensione boutique in vecchie case restaurate di Jiuxian, con giardino e vista sui monti.', 'Una cena tranquilla in villaggio dopo una giornata sullo Yulong.'],
    }, { price: level(2) }),
    P('mountain-retreat', 'food', 24.749, 110.427, SUNRISE, 4.5, 1200, ['food', 'nature'], {
      ru: ['Ресторан Yangshuo Mountain Retreat', 'Терраса загородного отеля прямо на берегу реки Юйлун с видом на карстовые горы.', 'Приходите к закату — горы над рекой становятся розовыми.'],
      en: ['Yangshuo Mountain Retreat restaurant', 'The terrace of a countryside hotel right on the Yulong River, facing the karst peaks.', 'Come for sunset, when the peaks over the river turn pink.'],
      es: ['Restaurante del Yangshuo Mountain Retreat', 'La terraza de un hotel rural a orillas del río Yulong, frente a los picos kársticos.', 'Ven al atardecer, cuando los picos se tiñen de rosa.'],
      de: ['Restaurant des Yangshuo Mountain Retreat', 'Die Terrasse eines Landhotels direkt am Yulong mit Blick auf die Karstgipfel.', 'Zum Sonnenuntergang kommen, wenn die Gipfel rosa leuchten.'],
      fr: ['Restaurant du Yangshuo Mountain Retreat', 'La terrasse d’un hôtel de campagne au bord de la Yulong, face aux pitons karstiques.', 'Venez au coucher du soleil, quand les pitons rosissent.'],
      it: ['Ristorante dello Yangshuo Mountain Retreat', 'La terrazza di un hotel di campagna sullo Yulong, davanti ai picchi carsici.', 'Vieni al tramonto, quando i picchi si tingono di rosa.'],
    }, { spot: 'insta', price: level(2) }),
  ],
  routes: [
    D(['li-river-cruise', 'cloud-9', '=yangshuo-west-street', 'xie-dajie-beer-fish', 'impression-liu-sanjie'],
      'Круиз по реке Ли, Западная улица и вечернее шоу|The Li River cruise, West Street and the evening show|Crucero por el río Li, la calle Oeste y el espectáculo nocturno|Li-Fluss-Fahrt, West Street und die Abendshow|Croisière sur la Li, rue de l’Ouest et spectacle du soir|Crociera sul fiume Li, West Street e lo spettacolo serale'),
    D(['=yangshuo-morning-market', 'ten-mile-gallery', 'big-banyan-tree', '=yangshuo-moon-hill', '=yangshuo-yulong-farmhouse-lunch', '=yangshuo-dragon-bridge-yulong', '=yangshuo-yulong-river', 'jiuxian-village', 'secret-garden-jiuxian'],
      'На велосипеде: Лунная гора и река Юйлун|By bike: Moon Hill and the Yulong River|En bici: la Colina de la Luna y el río Yulong|Mit dem Rad: Mondberg und Yulong-Fluss|À vélo : la colline de la Lune et la Yulong|In bici: la Collina della Luna e il fiume Yulong'),
    D(['=yangshuo-xianggong-hill', '=yangshuo-xingping-ancient-town', '=yangshuo-li-river-xingping', '=yangshuo-beer-fish-xingping', 'fuli-ancient-town', 'silver-cave', 'pure-lotus'],
      'Рассвет на Сянгуншань, Синпин и пещера|Sunrise at Xianggong Hill, Xingping and a cave|Amanecer en Xianggong, Xingping y una cueva|Sonnenaufgang am Xianggong, Xingping und eine Höhle|Lever de soleil à Xianggong, Xingping et une grotte|Alba a Xianggong, Xingping e una grotta'),
  ],
};

export default pack;
