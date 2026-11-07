import type { CityPack } from '../types';
import { free, level, makeDay, makePlace } from './_kit.ts';

const P = makePlace('osaka');
const D = makeDay('osaka');
const CITY = 'WaHPhFveWLk';
const NEON = 'Jeu9kPj8qVY';
const SKY = 'dvBD4UvobSw';
const CASTLE = 'ijyiUzYh1Gg';
const STREET = 'IYV_ECGcXuk';
const TOWER = 'S2sQY-iOGYU';

const pack: CityPack = {
  country: 'JP',
  city: 'osaka',
  places: [
    P('shitennoji', 'attraction', 34.6536, 135.5164, CASTLE, 4.3, 14000, ['temples', 'history'], {
      ru: ['Ситэнно-дзи', 'Один из старейших храмов Японии, основанный принцем Сётоку в 593 году: пятиярусная пагода и тихие дворы.', '21-го и 22-го числа каждого месяца на территории проходит большой блошиный рынок.'],
      en: ['Shitennō-ji', 'One of Japan’s oldest temples, founded by Prince Shōtoku in 593: a five-storey pagoda and quiet courtyards.', 'On the 21st and 22nd of every month a big flea market fills the grounds.'],
      es: ['Shitennō-ji', 'Uno de los templos más antiguos de Japón, fundado por el príncipe Shōtoku en 593: pagoda de cinco pisos y patios tranquilos.', 'Los días 21 y 22 de cada mes hay un gran mercadillo en el recinto.'],
      de: ['Shitennō-ji', 'Einer der ältesten Tempel Japans, 593 von Prinz Shōtoku gegründet: fünfstöckige Pagode und stille Höfe.', 'Am 21. und 22. jedes Monats füllt ein großer Flohmarkt das Gelände.'],
      fr: ['Shitennō-ji', 'L’un des plus anciens temples du Japon, fondé par le prince Shōtoku en 593 : pagode à cinq étages et cours paisibles.', 'Les 21 et 22 de chaque mois, un grand marché aux puces envahit l’enceinte.'],
      it: ['Shitennō-ji', 'Uno dei templi più antichi del Giappone, fondato dal principe Shōtoku nel 593: pagoda a cinque piani e cortili tranquilli.', 'Il 21 e il 22 di ogni mese il recinto ospita un grande mercatino.'],
    }, { price: level(1) }),
    P('sumiyoshi-taisha', 'attraction', 34.6126, 135.493, CASTLE, 4.5, 16000, ['temples', 'history', 'photo'], {
      ru: ['Сумиёси-тайся', 'Одно из старейших святилищ страны с главными залами в древнем стиле сумиёси-дзукури и крутым красным мостом Сорихаси.', 'По мосту можно пройти — он очень крутой, держитесь за перила.'],
      en: ['Sumiyoshi Taisha', 'One of Japan’s oldest shrines, with main halls in the ancient sumiyoshi-zukuri style and the steep red Sorihashi bridge.', 'You can cross the bridge — it’s very steep, so hold the rail.'],
      es: ['Sumiyoshi Taisha', 'Uno de los santuarios más antiguos del país, con salas en el antiguo estilo sumiyoshi-zukuri y el empinado puente rojo Sorihashi.', 'Se puede cruzar el puente: es muy empinado, agárrate a la barandilla.'],
      de: ['Sumiyoshi Taisha', 'Einer der ältesten Schreine Japans mit Haupthallen im uralten Sumiyoshi-zukuri-Stil und der steilen roten Sorihashi-Brücke.', 'Man darf über die Brücke – sie ist sehr steil, am Geländer festhalten.'],
      fr: ['Sumiyoshi Taisha', 'L’un des plus anciens sanctuaires du Japon, aux pavillons de style sumiyoshi-zukuri et au pont rouge très arqué Sorihashi.', 'On peut traverser le pont : il est très raide, tenez la rampe.'],
      it: ['Sumiyoshi Taisha', 'Uno dei santuari più antichi del Giappone, con sale nell’antico stile sumiyoshi-zukuri e il ripido ponte rosso Sorihashi.', 'Si può attraversare il ponte: è ripidissimo, tieniti al corrimano.'],
    }, { spot: 'insta', price: free }),
    P('kaiyukan', 'attraction', 34.6545, 135.429, SKY, 4.5, 52000, ['wildlife', 'museums'], {
      ru: ['Аквариум Кайюкан', 'Один из крупнейших аквариумов мира: по спирали вокруг огромного резервуара «Тихий океан» с китовыми акулами.', 'Купите билет онлайн и приходите к открытию или вечером.'],
      en: ['Kaiyukan Aquarium', 'One of the world’s largest aquariums: you spiral down around a huge “Pacific Ocean” tank with whale sharks.', 'Buy tickets online and come at opening or in the evening.'],
      es: ['Acuario Kaiyukan', 'Uno de los mayores acuarios del mundo: se baja en espiral alrededor de un enorme tanque «Océano Pacífico» con tiburones ballena.', 'Compra la entrada online y ve a la apertura o por la tarde.'],
      de: ['Kaiyukan-Aquarium', 'Eines der größten Aquarien der Welt: spiralförmig um ein riesiges „Pazifik“-Becken mit Walhaien.', 'Tickets online kaufen und zur Öffnung oder abends kommen.'],
      fr: ['Aquarium Kaiyukan', 'L’un des plus grands aquariums du monde : on descend en spirale autour d’un immense bassin « océan Pacifique » avec des requins-baleines.', 'Achetez en ligne et venez à l’ouverture ou en soirée.'],
      it: ['Acquario Kaiyukan', 'Uno dei più grandi acquari del mondo: si scende a spirale attorno a un’enorme vasca «Oceano Pacifico» con squali balena.', 'Compra online e vieni all’apertura o la sera.'],
    }, { price: level(2), address: '1-1-10 Kaigandori, Minato' }),
    P('universal-studios-japan', 'attraction', 34.6654, 135.4323, SKY, 4.5, 140000, ['adventure', 'photo'], {
      ru: ['Universal Studios Japan', 'Тематический парк с зоной Super Nintendo World, где можно «пройти» уровень Марио, и миром Гарри Поттера.', 'Для Super Nintendo World часто нужен билет-пропуск по времени — берите его сразу.'],
      en: ['Universal Studios Japan', 'A theme park with Super Nintendo World, where you can play through a Mario level, and a Harry Potter area.', 'Super Nintendo World often needs a timed entry ticket — grab one early.'],
      es: ['Universal Studios Japan', 'Un parque temático con Super Nintendo World, donde “juegas” un nivel de Mario, y zona de Harry Potter.', 'Para Super Nintendo World suele hacer falta un pase con hora: consíguelo pronto.'],
      de: ['Universal Studios Japan', 'Ein Themenpark mit Super Nintendo World, wo man ein Mario-Level „spielt“, und einer Harry-Potter-Welt.', 'Für Super Nintendo World braucht man oft ein Zeitfenster-Ticket – früh sichern.'],
      fr: ['Universal Studios Japan', 'Un parc à thème avec Super Nintendo World, où l’on « joue » un niveau de Mario, et un univers Harry Potter.', 'Super Nintendo World exige souvent un billet horaire : prenez-le tôt.'],
      it: ['Universal Studios Japan', 'Un parco a tema con Super Nintendo World, dove “giochi” un livello di Mario, e un’area di Harry Potter.', 'Per Super Nintendo World serve spesso un biglietto a orario: prendilo presto.'],
    }, { price: level(3) }),
    P('abeno-harukas', 'attraction', 34.6458, 135.5135, TOWER, 4.5, 31000, ['views', 'photo'], {
      ru: ['Абэно Харукас 300', 'Небоскрёб высотой 300 м — один из самых высоких в Японии — со стеклянной смотровой площадкой на верхних этажах.', 'Приходите к закату: город загорается огнями прямо под вами.'],
      en: ['Abeno Harukas 300', 'A 300 m skyscraper, one of Japan’s tallest, with a glass-walled observatory on its top floors.', 'Go at sunset, when the city lights up beneath you.'],
      es: ['Abeno Harukas 300', 'Un rascacielos de 300 m, de los más altos de Japón, con mirador acristalado en las últimas plantas.', 'Ve al atardecer, cuando la ciudad se ilumina bajo tus pies.'],
      de: ['Abeno Harukas 300', 'Ein 300 m hoher Wolkenkratzer, einer der höchsten Japans, mit verglaster Aussichtsetage ganz oben.', 'Zum Sonnenuntergang kommen, wenn die Stadt unter einem aufleuchtet.'],
      fr: ['Abeno Harukas 300', 'Un gratte-ciel de 300 m, parmi les plus hauts du Japon, avec un observatoire vitré aux derniers étages.', 'Venez au coucher du soleil, quand la ville s’illumine sous vos pieds.'],
      it: ['Abeno Harukas 300', 'Un grattacielo di 300 m, tra i più alti del Giappone, con osservatorio vetrato agli ultimi piani.', 'Vieni al tramonto, quando la città si accende sotto di te.'],
    }, { spot: 'insta', price: level(2), address: '1-1-43 Abenosuji, Abeno' }),
    P('nakanoshima', 'attraction', 34.6929, 135.5034, CITY, 4.4, 12000, ['architecture', 'gardens', 'museums'], {
      ru: ['Остров Наканосима', 'Речной остров в центре: краснокирпичный Центральный общественный зал 1918 года, розарий и Музей искусства Наканосимы.', 'В мае и октябре в розарии цветут сотни сортов роз.'],
      en: ['Nakanoshima', 'A river island in the centre: the red-brick 1918 Central Public Hall, a rose garden and the Nakanoshima Museum of Art.', 'In May and October hundreds of rose varieties bloom in the garden.'],
      es: ['Nakanoshima', 'Una isla fluvial en el centro: el Salón Público Central de ladrillo rojo (1918), un rosaleda y el Museo de Arte de Nakanoshima.', 'En mayo y octubre florecen cientos de variedades de rosas.'],
      de: ['Nakanoshima', 'Eine Flussinsel im Zentrum: die rote Backstein-Stadthalle von 1918, ein Rosengarten und das Nakanoshima-Kunstmuseum.', 'Im Mai und Oktober blühen Hunderte Rosensorten.'],
      fr: ['Nakanoshima', 'Une île fluviale au centre : la salle publique centrale en brique rouge (1918), une roseraie et le musée d’Art de Nakanoshima.', 'En mai et octobre, des centaines de variétés de roses fleurissent.'],
      it: ['Nakanoshima', 'Un’isola fluviale in centro: la Sala pubblica centrale in mattoni rossi (1918), un roseto e il Museo d’arte di Nakanoshima.', 'A maggio e ottobre fioriscono centinaia di varietà di rose.'],
    }, { price: free }),
    P('tower-of-the-sun', 'attraction', 34.8094, 135.5323, SKY, 4.5, 15000, ['art', 'photo'], {
      ru: ['Башня Солнца', '70-метровая скульптура Таро Окамото с выставки «Экспо-70» в парке Банпаку; внутри — «Древо жизни».', 'Попасть внутрь можно только по предварительной записи на сайте.'],
      en: ['Tower of the Sun', 'Tarō Okamoto’s 70 m sculpture from Expo ’70 in Banpaku Park; inside stands the “Tree of Life”.', 'Going inside requires advance booking online.'],
      es: ['Torre del Sol', 'La escultura de 70 m de Tarō Okamoto de la Expo 70, en el parque Banpaku; dentro está el «Árbol de la Vida».', 'Para entrar hay que reservar online con antelación.'],
      de: ['Turm der Sonne', 'Tarō Okamotos 70 m hohe Skulptur der Expo ’70 im Banpaku-Park; innen steht der „Baum des Lebens“.', 'Für das Innere vorab online reservieren.'],
      fr: ['Tour du Soleil', 'La sculpture de 70 m de Tarō Okamoto pour l’Expo 70, au parc Banpaku ; à l’intérieur se dresse « l’Arbre de vie ».', 'L’intérieur se visite uniquement sur réservation en ligne.'],
      it: ['Torre del Sole', 'La scultura di 70 m di Tarō Okamoto dell’Expo ’70 nel parco Banpaku; all’interno l’«Albero della vita».', 'Per entrare serve prenotare online.'],
    }, { spot: 'insta', price: level(1) }),
    P('amerikamura', 'attraction', 34.6722, 135.4985, STREET, 4.1, 9800, ['shopping', 'nightlife'], {
      ru: ['Амэрикамура (Амэмура)', 'Молодёжный квартал Осаки: винтажные магазины, стрит-арт, кафе и площадь Треугольник — сердце местной уличной культуры.', 'Лучшее время — ближе к вечеру, когда открываются бары.'],
      en: ['Amerikamura (Amemura)', 'Osaka’s youth district: vintage stores, street art, cafés and Triangle Park, the heart of local street culture.', 'Best towards evening, when the bars open.'],
      es: ['Amerikamura (Amemura)', 'El barrio joven de Osaka: tiendas vintage, arte urbano, cafés y el parque Triángulo, corazón de la cultura callejera.', 'Mejor al atardecer, cuando abren los bares.'],
      de: ['Amerikamura (Amemura)', 'Osakas Jugendviertel: Vintage-Läden, Street-Art, Cafés und der Triangle Park als Herz der Straßenkultur.', 'Am besten gegen Abend, wenn die Bars öffnen.'],
      fr: ['Amerikamura (Amemura)', 'Le quartier jeune d’Osaka : friperies, street art, cafés et le Triangle Park, cœur de la culture de rue.', 'Idéal en fin de journée, à l’ouverture des bars.'],
      it: ['Amerikamura (Amemura)', 'Il quartiere giovane di Osaka: negozi vintage, street art, caffè e il Triangle Park, cuore della cultura di strada.', 'Meglio verso sera, quando aprono i bar.'],
    }, { price: free }),
    P('nakazakicho', 'attraction', 34.7076, 135.504, STREET, 4.3, 3900, ['oldtown', 'photo'], {
      ru: ['Накадзакитё', 'Квартал старых деревянных домов в двух шагах от небоскрёбов Умэды, уцелевший в войну; теперь в них кафе и лавки.', 'Хорошее место для кофе после Умэды — улочки тихие даже в выходные.'],
      en: ['Nakazakicho', 'A pocket of old wooden houses that survived the war, steps from Umeda’s towers, now full of cafés and shops.', 'A good coffee stop after Umeda — the lanes stay quiet even at weekends.'],
      es: ['Nakazakicho', 'Un rincón de casas de madera que sobrevivió a la guerra, a un paso de las torres de Umeda, hoy lleno de cafés y tiendas.', 'Buena parada para un café tras Umeda: callejas tranquilas incluso en fin de semana.'],
      de: ['Nakazakicho', 'Ein kriegsverschontes Viertel alter Holzhäuser direkt neben den Türmen von Umeda, heute voller Cafés und Läden.', 'Guter Kaffeestopp nach Umeda – die Gassen bleiben auch am Wochenende ruhig.'],
      fr: ['Nakazakicho', 'Un îlot de vieilles maisons en bois épargné par la guerre, à deux pas des tours d’Umeda, aujourd’hui plein de cafés et de boutiques.', 'Une bonne pause café après Umeda : les ruelles restent calmes, même le week-end.'],
      it: ['Nakazakicho', 'Un angolo di vecchie case di legno sopravvissute alla guerra, a due passi dalle torri di Umeda, oggi pieno di caffè e negozi.', 'Ottima sosta caffè dopo Umeda: vicoli tranquilli anche nel weekend.'],
    }, { spot: 'hidden', price: free }),
    P('tenjinbashisuji', 'attraction', 34.701, 135.512, STREET, 4.2, 11000, ['shopping', 'streetfood', 'market'], {
      ru: ['Тэндзимбаси-судзи', 'Самая длинная крытая торговая улица Японии — около 2,6 км лавок, закусочных и кафе рядом со святилищем Тэммангу.', 'Идите с севера на юг и пробуйте по пути крокеты и такояки.'],
      en: ['Tenjinbashisuji', 'Japan’s longest covered shopping street — about 2.6 km of shops, snack stalls and cafés near Tenmangū Shrine.', 'Walk north to south, snacking on croquettes and takoyaki.'],
      es: ['Tenjinbashisuji', 'La calle comercial cubierta más larga de Japón: unos 2,6 km de tiendas, puestos y cafés junto al santuario Tenmangū.', 'Recórrela de norte a sur probando croquetas y takoyaki.'],
      de: ['Tenjinbashisuji', 'Japans längste überdachte Einkaufsstraße – rund 2,6 km Läden, Imbisse und Cafés nahe dem Tenmangū-Schrein.', 'Von Nord nach Süd gehen und Kroketten und Takoyaki naschen.'],
      fr: ['Tenjinbashisuji', 'La plus longue rue commerçante couverte du Japon : environ 2,6 km de boutiques, d’en-cas et de cafés près du sanctuaire Tenmangū.', 'Parcourez-la du nord au sud en grignotant croquettes et takoyaki.'],
      it: ['Tenjinbashisuji', 'La via commerciale coperta più lunga del Giappone: circa 2,6 km di negozi, chioschi e caffè vicino al santuario Tenmangū.', 'Percorrila da nord a sud assaggiando crocchette e takoyaki.'],
    }, { price: free }),
    P('minoo-park', 'nature', 34.8536, 135.4718, CITY, 4.5, 21000, ['hiking', 'waterfalls', 'nature'], {
      ru: ['Парк Мино', 'Лесная тропа длиной 2,8 км вдоль ручья к 33-метровому водопаду; осенью ущелье становится красным от клёнов.', 'По дороге попробуйте момидзи-тэмпуру — жареные в кляре кленовые листья.'],
      en: ['Minoo Park', 'A 2.8 km forest trail along a stream to a 33 m waterfall; in autumn the gorge turns red with maples.', 'On the way try momiji tempura — maple leaves fried in batter.'],
      es: ['Parque Minoo', 'Un sendero de 2,8 km por el bosque junto a un arroyo hasta una cascada de 33 m; en otoño el desfiladero se vuelve rojo.', 'Por el camino prueba la momiji tempura, hojas de arce rebozadas.'],
      de: ['Minoo-Park', 'Ein 2,8 km langer Waldweg am Bach zu einem 33 m hohen Wasserfall; im Herbst färbt Ahorn die Schlucht rot.', 'Unterwegs Momiji-Tempura probieren – frittierte Ahornblätter.'],
      fr: ['Parc de Minoo', 'Un sentier forestier de 2,8 km le long d’un ruisseau jusqu’à une cascade de 33 m ; à l’automne, la gorge rougit d’érables.', 'En chemin, goûtez la momiji tempura, des feuilles d’érable frites.'],
      it: ['Parco di Minoo', 'Un sentiero di 2,8 km nel bosco lungo un torrente fino a una cascata di 33 m; in autunno la gola si tinge di rosso.', 'Lungo la strada prova la momiji tempura, foglie d’acero fritte in pastella.'],
    }, { spot: 'insta', price: free }),
    P('hajime', 'food', 34.6886, 135.4945, CITY, 4.6, 700, ['food', 'luxury', 'romance'], {
      ru: ['Hajime', 'Ресторан Хадзимэ Ёнэды, бывшего инженера: точная, почти научная авторская кухня о природе и земле.', 'Бронируйте заранее; меню одно, дегустационное.'],
      en: ['Hajime', 'The restaurant of former engineer Hajime Yoneda: precise, almost scientific cooking about nature and the earth.', 'Book well ahead; there’s a single tasting menu.'],
      es: ['Hajime', 'El restaurante del exingeniero Hajime Yoneda: cocina precisa, casi científica, sobre la naturaleza y la tierra.', 'Reserva con antelación; hay un único menú degustación.'],
      de: ['Hajime', 'Das Restaurant des ehemaligen Ingenieurs Hajime Yoneda: präzise, fast wissenschaftliche Küche über Natur und Erde.', 'Frühzeitig buchen; es gibt ein einziges Degustationsmenü.'],
      fr: ['Hajime', 'Le restaurant de l’ancien ingénieur Hajime Yoneda : une cuisine précise, presque scientifique, sur la nature et la terre.', 'Réservez tôt ; un seul menu dégustation.'],
      it: ['Hajime', 'Il ristorante dell’ex ingegnere Hajime Yoneda: cucina precisa, quasi scientifica, sulla natura e la terra.', 'Prenota con largo anticipo; c’è un solo menu degustazione.'],
    }, { price: level(3), address: 'Edobori, Nishi-ku', michelin: { award: 'star3', year: 2026 }, menu: [
      ['Chikyū (Earth)', undefined, 'съедобный пейзаж из десятков овощей и трав|edible landscape of dozens of vegetables and herbs|paisaje comestible de decenas de verduras y hierbas|essbare Landschaft aus Dutzenden Gemüsen und Kräutern|paysage comestible de dizaines de légumes et d’herbes|paesaggio commestibile di decine di verdure ed erbe'],
      ['Tasting menu', undefined, 'дегустационное меню|tasting menu|menú degustación|Degustationsmenü|menu dégustation|menu degustazione'],
    ] }),
    P('kani-doraku', 'food', 34.6688, 135.5017, NEON, 4.2, 12000, ['food', 'photo'], {
      ru: ['Кани Дораку', 'Главный ресторан крабовой сети на Дотомбори (с 1962 года) — тот самый с огромным шевелящимся крабом над входом.', 'Обеденные сеты дешевле; краб над входом — лучшее фото Дотомбори.'],
      en: ['Kani Doraku', 'The crab chain’s flagship on Dōtonbori (since 1962) — the one with the giant moving crab over the door.', 'Lunch sets are cheaper; the crab sign is Dōtonbori’s classic photo.'],
      es: ['Kani Doraku', 'El local insignia de la cadena de cangrejo en Dōtonbori (desde 1962), el del cangrejo gigante que se mueve sobre la puerta.', 'Los menús de mediodía son más baratos; el cangrejo es la foto clásica de Dōtonbori.'],
      de: ['Kani Doraku', 'Das Stammhaus der Krabbenkette am Dōtonbori (seit 1962) – das mit der riesigen beweglichen Krabbe über der Tür.', 'Mittagssets sind günstiger; die Krabbe ist das klassische Dōtonbori-Foto.'],
      fr: ['Kani Doraku', 'Le vaisseau amiral de la chaîne de crabe sur Dōtonbori (depuis 1962), celui au crabe géant animé au-dessus de la porte.', 'Les menus du midi sont moins chers ; le crabe est la photo classique de Dōtonbori.'],
      it: ['Kani Doraku', 'Il locale principale della catena di granchio su Dōtonbori (dal 1962), quello col granchio gigante che si muove sopra la porta.', 'I set del pranzo costano meno; il granchio è la foto classica di Dōtonbori.'],
    }, { spot: 'insta', price: level(3), address: '1-6-18 Dotonbori, Chuo', menu: [
      ['Kani kaiseki', undefined, 'крабовый сет из нескольких блюд|multi-course crab set|menú de cangrejo de varios platos|mehrgängiges Krabbenmenü|menu de crabe en plusieurs plats|menu di granchio di più portate'],
      ['Yaki-gani', undefined, 'жареные крабовые ноги|grilled crab legs|patas de cangrejo a la parrilla|gegrillte Krabbenbeine|pattes de crabe grillées|zampe di granchio alla griglia'],
    ] }),
    P('wanaka', 'food', 34.6662, 135.5036, NEON, 4.3, 8700, ['food', 'streetfood'], {
      ru: ['Ванака (такояки)', 'Главная лавка известной сети такояки у Сэннитимаэ: шарики с осьминогом, хрустящие снаружи и кремовые внутри.', 'Попробуйте «такосэн» — такояки между двумя рисовыми крекерами.'],
      en: ['Wanaka (takoyaki)', 'The main shop of a well-known takoyaki chain near Sennichimae: octopus balls crisp outside and creamy inside.', 'Try the “takosen” — takoyaki pressed between two rice crackers.'],
      es: ['Wanaka (takoyaki)', 'La tienda principal de una conocida cadena de takoyaki en Sennichimae: bolitas de pulpo crujientes por fuera y cremosas por dentro.', 'Prueba el «takosen»: takoyaki entre dos galletas de arroz.'],
      de: ['Wanaka (Takoyaki)', 'Der Hauptladen einer bekannten Takoyaki-Kette bei Sennichimae: Oktopusbällchen außen knusprig, innen cremig.', 'Das „Takosen“ probieren – Takoyaki zwischen zwei Reiscrackern.'],
      fr: ['Wanaka (takoyaki)', 'La boutique principale d’une chaîne de takoyaki réputée, près de Sennichimae : boulettes de poulpe croustillantes et fondantes.', 'Goûtez le « takosen » : des takoyaki entre deux crackers de riz.'],
      it: ['Wanaka (takoyaki)', 'Il negozio principale di una nota catena di takoyaki a Sennichimae: polpette di polpo croccanti fuori e cremose dentro.', 'Prova il «takosen»: takoyaki tra due cracker di riso.'],
    }, { price: level(1), address: '11-19 Sennichimae, Chuo', menu: [
      ['Takoyaki', undefined, 'шарики с осьминогом|octopus balls|bolitas de pulpo|Oktopusbällchen|boulettes de poulpe|polpette di polpo'],
      ['Takosen', undefined, 'такояки в рисовых крекерах|takoyaki in rice crackers|takoyaki en galletas de arroz|Takoyaki in Reiscrackern|takoyaki dans des crackers de riz|takoyaki nei cracker di riso'],
    ] }),
    P('rikuro-ojisan', 'food', 34.6666, 135.5011, STREET, 4.4, 9300, ['food'], {
      ru: ['Рикуро-одзисан', 'Пекарня воздушных японских чизкейков с изюмом на дне и клеймом «дядюшки» сверху; при выходе свежей партии звонит колокольчик.', 'Ешьте тёплым сразу или охлаждённым на следующий день — вкус разный.'],
      en: ['Rikuro Ojisan', 'A bakery of fluffy Japanese cheesecakes with raisins at the bottom and the “uncle” logo branded on top; a bell rings for each fresh batch.', 'Eat it warm straight away or chilled the next day — they taste different.'],
      es: ['Rikuro Ojisan', 'Una pastelería de esponjosas tartas de queso japonesas con pasas al fondo y el sello del «tío»; una campana suena con cada hornada.', 'Cómela templada al momento o fría al día siguiente: saben distinto.'],
      de: ['Rikuro Ojisan', 'Eine Bäckerei für fluffigen japanischen Käsekuchen mit Rosinen am Boden und eingebranntem „Onkel“-Logo; bei jedem frischen Blech läutet eine Glocke.', 'Warm sofort oder gekühlt am nächsten Tag essen – beides schmeckt anders.'],
      fr: ['Rikuro Ojisan', 'Une pâtisserie de cheesecakes japonais aériens, raisins au fond et logo de « l’oncle » marqué dessus ; une cloche sonne à chaque fournée.', 'Mangez-le tiède tout de suite ou froid le lendemain : le goût change.'],
      it: ['Rikuro Ojisan', 'Una pasticceria di soffici cheesecake giapponesi con uvetta sul fondo e il marchio dello «zio»; una campanella suona a ogni sfornata.', 'Mangiala tiepida subito o fredda il giorno dopo: il sapore cambia.'],
    }, { price: level(1), address: '3-2-28 Namba, Chuo', menu: [
      ['Cheesecake', undefined, 'японский чизкейк целиком|whole Japanese cheesecake|tarta de queso japonesa entera|ganzer japanischer Käsekuchen|cheesecake japonais entier|cheesecake giapponese intera'],
      ['Apple pie', undefined, 'яблочный пирог|apple pie|tarta de manzana|Apfelkuchen|tarte aux pommes|torta di mele'],
    ] }),
    P('hokkyokusei', 'food', 34.6715, 135.4988, STREET, 4.3, 6400, ['food', 'history'], {
      ru: ['Хоккёкусэй', 'Ресторан, который считается родиной омурайсу (1925): омлет поверх жареного риса в старом японском доме с садом.', 'Садитесь в комнату с татами у сада.'],
      en: ['Hokkyokusei', 'The restaurant credited with inventing omurice (1925): an omelette over fried rice in an old Japanese house with a garden.', 'Ask for a tatami room overlooking the garden.'],
      es: ['Hokkyokusei', 'El restaurante al que se atribuye el omurice (1925): tortilla sobre arroz frito en una vieja casa japonesa con jardín.', 'Pide una sala de tatami con vistas al jardín.'],
      de: ['Hokkyokusei', 'Das Lokal, das als Erfinder des Omurice gilt (1925): Omelett über gebratenem Reis in einem alten japanischen Haus mit Garten.', 'Nach einem Tatami-Raum mit Gartenblick fragen.'],
      fr: ['Hokkyokusei', 'Le restaurant à qui l’on attribue l’omurice (1925) : une omelette sur riz sauté, dans une vieille maison japonaise avec jardin.', 'Demandez une salle tatami donnant sur le jardin.'],
      it: ['Hokkyokusei', 'Il ristorante a cui si attribuisce l’omurice (1925): frittata su riso saltato in una vecchia casa giapponese con giardino.', 'Chiedi una stanza con tatami sul giardino.'],
    }, { price: level(1), address: '2-7-27 Nishishinsaibashi, Chuo', menu: [
      ['Chicken omurice', undefined, 'омлет на рисе с курицей и кетчупом|omelette over chicken ketchup rice|tortilla sobre arroz con pollo y kétchup|Omelett über Hähnchen-Ketchup-Reis|omelette sur riz au poulet et ketchup|frittata su riso al pollo e ketchup'],
      ['Beef omurice', undefined, 'омурайсу с говядиной|omurice with beef|omurice de ternera|Omurice mit Rind|omurice au bœuf|omurice al manzo'],
    ] }),
    P('jiyuken', 'food', 34.6663, 135.503, STREET, 4.1, 5200, ['food', 'history'], {
      ru: ['Дзиюкэн', 'Западная кухня с 1910 года в Намбе; фирменное карри уже перемешано с рисом и подаётся с сырым яйцом сверху.', 'Перемешайте яйцо с карри и добавьте соус из бутылочки на столе.'],
      en: ['Jiyuken', 'Western-style cooking in Namba since 1910; the signature curry comes already mixed into the rice with a raw egg on top.', 'Stir the egg in and add a splash of the sauce on the table.'],
      es: ['Jiyuken', 'Cocina de estilo occidental en Namba desde 1910; su curry estrella llega mezclado con el arroz y un huevo crudo encima.', 'Mezcla el huevo y añade un chorrito de la salsa de la mesa.'],
      de: ['Jiyuken', 'Westlich inspirierte Küche in Namba seit 1910; das berühmte Curry kommt schon mit dem Reis vermischt, mit rohem Ei obenauf.', 'Das Ei unterrühren und etwas von der Tischsoße dazugeben.'],
      fr: ['Jiyuken', 'Cuisine à l’occidentale à Namba depuis 1910 ; le curry signature arrive déjà mélangé au riz, un œuf cru dessus.', 'Mélangez l’œuf et ajoutez un trait de la sauce sur la table.'],
      it: ['Jiyuken', 'Cucina all’occidentale a Namba dal 1910; il curry simbolo arriva già mescolato al riso con un uovo crudo sopra.', 'Mescola l’uovo e aggiungi un goccio della salsa sul tavolo.'],
    }, { price: level(1), address: '3-1-34 Namba, Chuo', menu: [
      ['Meibutsu curry', undefined, 'рис, перемешанный с карри, и сырое яйцо|curry mixed into rice with a raw egg|arroz mezclado con curry y huevo crudo|mit Reis vermischtes Curry mit rohem Ei|riz mélangé au curry, œuf cru|riso mescolato al curry con uovo crudo'],
      ['Hayashi rice', undefined, 'рис с говядиной в демиглясе|rice with beef in demi-glace|arroz con ternera en demi-glace|Reis mit Rind in Demi-glace|riz au bœuf sauce demi-glace|riso con manzo in demi-glace'],
    ] }),
    P('kiji-umeda', 'food', 34.7053, 135.4896, SKY, 4.3, 4500, ['food'], {
      ru: ['Кидзи (Умэда Скай)', 'Окономияки в ретро-переулке Таками-кодзи в подвале Umeda Sky Building: капустные «блины» на плите прямо перед вами.', 'Хорошо совместить с закатом на смотровой площадке наверху.'],
      en: ['Kiji (Umeda Sky)', 'Okonomiyaki in the retro Takimi-koji alley under the Umeda Sky Building: cabbage pancakes on the griddle in front of you.', 'Pair it with sunset on the observatory upstairs.'],
      es: ['Kiji (Umeda Sky)', 'Okonomiyaki en el callejón retro Takimi-koji bajo el Umeda Sky Building: tortitas de col en la plancha delante de ti.', 'Combínalo con el atardecer en el mirador de arriba.'],
      de: ['Kiji (Umeda Sky)', 'Okonomiyaki in der Retro-Gasse Takimi-koji unter dem Umeda Sky Building: Kohlpfannkuchen auf der Platte vor einem.', 'Mit dem Sonnenuntergang auf der Aussichtsplattform kombinieren.'],
      fr: ['Kiji (Umeda Sky)', 'Okonomiyaki dans la ruelle rétro Takimi-koji sous l’Umeda Sky Building : galettes de chou sur la plaque devant vous.', 'À combiner avec le coucher de soleil à l’observatoire.'],
      it: ['Kiji (Umeda Sky)', 'Okonomiyaki nel vicolo retrò Takimi-koji sotto l’Umeda Sky Building: frittelle di cavolo sulla piastra davanti a te.', 'Abbinalo al tramonto sull’osservatorio di sopra.'],
    }, { price: level(1), address: 'Umeda Sky Building B1, Kita', menu: [
      ['Okonomiyaki', undefined, 'капустная лепёшка со свининой|cabbage pancake with pork|tortita de col con cerdo|Kohlpfannkuchen mit Schwein|galette de chou au porc|frittella di cavolo con maiale'],
      ['Modan-yaki', undefined, 'окономияки с лапшой|okonomiyaki with noodles|okonomiyaki con fideos|Okonomiyaki mit Nudeln|okonomiyaki aux nouilles|okonomiyaki con noodle'],
    ] }),
    P('endo-sushi', 'food', 34.687, 135.471, NEON, 4.4, 3100, ['food', 'market'], {
      ru: ['Эндо Суси', 'Суши-лавка с 1907 года на центральном оптовом рынке Осаки: нигири подают сетами по пять штук с самого утра.', 'Приходите до полудня — работает только в первой половине дня.'],
      en: ['Endo Sushi', 'A sushi shop since 1907 at Osaka’s central wholesale market, serving nigiri in sets of five from early morning.', 'Go before noon — it only opens in the first half of the day.'],
      es: ['Endo Sushi', 'Un local de sushi desde 1907 en el mercado mayorista central de Osaka, con nigiris en juegos de cinco desde muy temprano.', 'Ve antes del mediodía: solo abre por la mañana.'],
      de: ['Endo Sushi', 'Ein Sushi-Laden seit 1907 am Zentralgroßmarkt Osaka, Nigiri in Fünfersets ab dem frühen Morgen.', 'Vor Mittag kommen – geöffnet nur in der ersten Tageshälfte.'],
      fr: ['Endo Sushi', 'Une échoppe de sushis depuis 1907 au marché de gros central d’Osaka, nigiris servis par cinq dès l’aube.', 'Venez avant midi : ouvert seulement le matin.'],
      it: ['Endo Sushi', 'Un locale di sushi dal 1907 al mercato all’ingrosso centrale di Osaka, nigiri in set da cinque fin dall’alba.', 'Vai prima di mezzogiorno: apre solo la mattina.'],
    }, { price: level(2), address: 'Osaka Central Wholesale Market, Noda, Fukushima', menu: [
      ['Nigiri set (5 pieces)', undefined, 'сет из пяти нигири|set of five nigiri|juego de cinco nigiris|Set aus fünf Nigiri|assortiment de cinq nigiris|set di cinque nigiri'],
      ['Akadashi', undefined, 'суп на тёмном мисо|dark miso soup|sopa de miso oscuro|Suppe mit dunklem Miso|soupe au miso foncé|zuppa di miso scuro'],
    ] }),
    P('harijyu', 'food', 34.6686, 135.5024, NEON, 4.3, 3800, ['food', 'history'], {
      ru: ['Харидзю', 'Мясной ресторан с 1919 года на Дотомбори: сукияки и сябу-сябу из мраморной говядины в старинных комнатах.', 'На первом этаже есть кафе попроще с карри и котлетами из той же говядины.'],
      en: ['Harijyu', 'A beef house on Dōtonbori since 1919: sukiyaki and shabu-shabu of marbled wagyu in old-style rooms.', 'The ground-floor grill café serves cheaper curry and cutlets of the same beef.'],
      es: ['Harijyu', 'Una casa de carne en Dōtonbori desde 1919: sukiyaki y shabu-shabu de wagyu veteado en salas de estilo antiguo.', 'En la planta baja hay un café más sencillo con curry y filetes de la misma carne.'],
      de: ['Harijyu', 'Ein Rindfleischhaus am Dōtonbori seit 1919: Sukiyaki und Shabu-Shabu vom marmorierten Wagyu in Räumen alten Stils.', 'Im Erdgeschoss gibt es ein günstigeres Grill-Café mit Curry und Schnitzeln vom selben Rind.'],
      fr: ['Harijyu', 'Une maison de bœuf sur Dōtonbori depuis 1919 : sukiyaki et shabu-shabu de wagyu persillé dans des salons à l’ancienne.', 'Au rez-de-chaussée, un café-grill sert curry et escalopes du même bœuf, moins cher.'],
      it: ['Harijyu', 'Una casa della carne su Dōtonbori dal 1919: sukiyaki e shabu-shabu di wagyu marmorizzato in sale d’epoca.', 'Al piano terra un caffè-griglia serve curry e cotolette dello stesso manzo, più economici.'],
    }, { price: level(3), address: '1-9-17 Dotonbori, Chuo', menu: [
      ['Sukiyaki', undefined, 'сукияки из вагю|wagyu sukiyaki|sukiyaki de wagyu|Wagyu-Sukiyaki|sukiyaki de wagyu|sukiyaki di wagyu'],
      ['Shabu-shabu', undefined, 'сябу-сябу из вагю|wagyu shabu-shabu|shabu-shabu de wagyu|Wagyu-Shabu-Shabu|shabu-shabu de wagyu|shabu-shabu di wagyu'],
    ] }),
    P('kitahama-retro', 'food', 34.6924, 135.508, CITY, 4.3, 2800, ['food', 'architecture', 'romance'], {
      ru: ['Kitahama Retro', 'Британская чайная в кирпичном доме 1912 года у реки напротив Наканосимы: послеобеденный чай со сконами.', 'Внизу — лавка, наверху — зал; столики у окна на реку уходят первыми.'],
      en: ['Kitahama Retro', 'A British-style tea room in a 1912 brick building on the river facing Nakanoshima: afternoon tea with scones.', 'Shop downstairs, tea room upstairs; river-view tables go first.'],
      es: ['Kitahama Retro', 'Un salón de té británico en un edificio de ladrillo de 1912 junto al río, frente a Nakanoshima: té de la tarde con scones.', 'Tienda abajo, salón arriba; las mesas con vista al río vuelan.'],
      de: ['Kitahama Retro', 'Ein britischer Teesalon in einem Backsteinhaus von 1912 am Fluss gegenüber Nakanoshima: Afternoon Tea mit Scones.', 'Unten der Laden, oben der Salon; die Tische mit Flussblick sind zuerst weg.'],
      fr: ['Kitahama Retro', 'Un salon de thé à l’anglaise dans un immeuble en brique de 1912, au bord de la rivière face à Nakanoshima : afternoon tea et scones.', 'Boutique en bas, salon en haut ; les tables côté rivière partent vite.'],
      it: ['Kitahama Retro', 'Una sala da tè all’inglese in un edificio di mattoni del 1912 sul fiume, di fronte a Nakanoshima: tè del pomeriggio con scone.', 'Negozio sotto, sala sopra; i tavoli sul fiume vanno via per primi.'],
    }, { price: level(2), address: '1-1-26 Kitahama, Chuo', menu: [
      ['Afternoon tea', undefined, 'послеобеденный чай с закусками и сконами|afternoon tea with savouries and scones|té de la tarde con salados y scones|Afternoon Tea mit Häppchen und Scones|afternoon tea, salés et scones|tè del pomeriggio con salatini e scone'],
      ['Scones', undefined, 'сконы с джемом и сливками|scones with jam and cream|scones con mermelada y nata|Scones mit Marmelade und Sahne|scones, confiture et crème|scone con marmellata e panna'],
    ] }),
    P('ajinoya', 'food', 34.6668, 135.5035, NEON, 4.3, 3500, ['food', 'streetfood'], {
      ru: ['Адзиноя', 'Семейная окономияки у Сэннитимаэ: пышные осакские лепёшки и нэги-яки с зелёным луком, которые жарят на столе.', 'Вечером очередь, но столы освобождаются быстро.'],
      en: ['Ajinoya', 'A family okonomiyaki house near Sennichimae: fluffy Osaka-style pancakes and spring-onion negiyaki cooked at your table.', 'There’s a queue in the evening, but tables turn quickly.'],
      es: ['Ajinoya', 'Un okonomiyaki familiar en Sennichimae: tortitas esponjosas al estilo de Osaka y negiyaki de cebolleta hechos en la mesa.', 'Por la noche hay cola, pero las mesas rotan rápido.'],
      de: ['Ajinoya', 'Ein Familien-Okonomiyaki bei Sennichimae: fluffige Pfannkuchen nach Osaka-Art und Negiyaki mit Frühlingszwiebeln am Tisch gebraten.', 'Abends gibt es eine Schlange, aber die Tische wechseln schnell.'],
      fr: ['Ajinoya', 'Un okonomiyaki familial près de Sennichimae : galettes moelleuses à la mode d’Osaka et negiyaki à la ciboule cuits à table.', 'Queue le soir, mais les tables tournent vite.'],
      it: ['Ajinoya', 'Un okonomiyaki di famiglia a Sennichimae: frittelle soffici alla Osaka e negiyaki al cipollotto cotti al tavolo.', 'La sera c’è fila, ma i tavoli si liberano in fretta.'],
    }, { price: level(1), address: 'Sennichimae, Chuo', menu: [
      ['Okonomiyaki', undefined, 'осакская окономияки|Osaka-style okonomiyaki|okonomiyaki al estilo de Osaka|Okonomiyaki nach Osaka-Art|okonomiyaki à la mode d’Osaka|okonomiyaki alla Osaka'],
      ['Negiyaki', undefined, 'лепёшка с зелёным луком|spring-onion pancake|tortita de cebolleta|Frühlingszwiebel-Pfannkuchen|galette à la ciboule|frittella al cipollotto'],
    ] }),
  ],
  routes: [
    D(['=osaka-castle', 'kitahama-retro', 'nakanoshima', 'tenjinbashisuji', 'nakazakicho', '=osaka-umeda-sky-building', 'kiji-umeda'],
      'Замок Осака, Наканосима и закат над Умэдой|Osaka Castle, Nakanoshima and sunset over Umeda|Castillo de Osaka, Nakanoshima y atardecer en Umeda|Burg Osaka, Nakanoshima und Sonnenuntergang über Umeda|Château d’Osaka, Nakanoshima et coucher de soleil sur Umeda|Castello di Osaka, Nakanoshima e tramonto su Umeda'),
    D(['=osaka-kuromon-market', '=osaka-namba-yasaka-shrine', 'amerikamura', 'hokkyokusei', '=osaka-hozenji-yokocho', 'rikuro-ojisan', '=osaka-dotonbori', 'kani-doraku'],
      'Рынок Куромон, Намба и неоновый Дотомбори|Kuromon Market, Namba and neon Dōtonbori|Mercado Kuromon, Namba y el Dōtonbori de neón|Kuromon-Markt, Namba und das Neon-Dōtonbori|Marché Kuromon, Namba et Dōtonbori en néons|Mercato Kuromon, Namba e il Dōtonbori al neon'),
    D(['shitennoji', 'abeno-harukas', '=osaka-shinsekai-tsutenkaku', '=osaka-kushikatsu-daruma-shinsekai', 'sumiyoshi-taisha', 'kaiyukan', 'ajinoya'],
      'Ситэнно-дзи, Синсэкай, Сумиёси и аквариум|Shitennō-ji, Shinsekai, Sumiyoshi and the aquarium|Shitennō-ji, Shinsekai, Sumiyoshi y el acuario|Shitennō-ji, Shinsekai, Sumiyoshi und das Aquarium|Shitennō-ji, Shinsekai, Sumiyoshi et l’aquarium|Shitennō-ji, Shinsekai, Sumiyoshi e l’acquario'),
  ],
};

export default pack;
