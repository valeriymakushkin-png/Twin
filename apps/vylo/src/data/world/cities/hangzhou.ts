import type { CityPack } from '../types';
import { free, level, makeDay, makePlace } from './_kit.ts';

const P = makePlace('hangzhou');
const D = makeDay('hangzhou');
const LAKE = 'CyvoE5akJuE';
const BRIDGE = 'NQJBkCU9v6o';
const PAGODA = 'AGjPYeN2Hlo';
const TEA = 'QwV0ePw6gjY';
const COUPLE = '5MoCOeiujc4';

const pack: CityPack = {
  country: 'CN',
  city: 'hangzhou',
  places: [
    P('su-causeway', 'nature', 30.247, 120.144, BRIDGE, 4.7, 31000, ['lakes', 'nature', 'photo'], {
      ru: ['Дамба Су', 'Почти трёхкилометровая дамба через озеро Сиху, насыпанная при поэте-губернаторе Су Ши в XI веке, с шестью мостами и ивами.', 'Пройдите её утром, пока туман лежит на воде.'],
      en: ['Su Causeway', 'A nearly 3 km causeway across West Lake, built under the poet-governor Su Shi in the 11th century, with six bridges and willows.', 'Walk it in the morning while the mist lies on the water.'],
      es: ['Calzada Su', 'Una calzada de casi 3 km sobre el Lago del Oeste, construida bajo el poeta y gobernador Su Shi en el siglo XI, con seis puentes y sauces.', 'Recórrela por la mañana, con la niebla sobre el agua.'],
      de: ['Su-Damm', 'Ein fast 3 km langer Damm über den Westsee, im 11. Jh. unter dem Dichter-Gouverneur Su Shi angelegt, mit sechs Brücken und Weiden.', 'Morgens gehen, wenn Nebel über dem Wasser liegt.'],
      fr: ['Digue Su', 'Une digue de près de 3 km sur le lac de l’Ouest, construite au XIe siècle sous le poète-gouverneur Su Shi, avec six ponts et des saules.', 'Parcourez-la le matin, quand la brume couvre l’eau.'],
      it: ['Diga Su', 'Una diga di quasi 3 km sul Lago dell’Ovest, costruita nell’XI secolo sotto il poeta-governatore Su Shi, con sei ponti e salici.', 'Percorrila al mattino, con la nebbia sull’acqua.'],
    }, { spot: 'insta', price: free }),
    P('bai-causeway-broken-bridge', 'nature', 30.26, 120.154, LAKE, 4.6, 24000, ['lakes', 'photo'], {
      ru: ['Дамба Бай и Сломанный мост', 'Дамба поэта Бо Цзюйи с Сломанным мостом — местом встречи героев легенды о Белой змее; зимой снег «ломает» мост на фото.', 'Начинайте прогулку по озеру отсюда — дамба ведёт на остров Гушань.'],
      en: ['Bai Causeway and Broken Bridge', 'The poet Bai Juyi’s causeway with the Broken Bridge, where the lovers of the White Snake legend met; in winter snow seems to “break” it.', 'Start your lake walk here — the causeway leads to Gushan island.'],
      es: ['Calzada Bai y Puente Roto', 'La calzada del poeta Bai Juyi con el Puente Roto, donde se conocieron los amantes de la leyenda de la Serpiente Blanca; en invierno la nieve parece «romperlo».', 'Empieza aquí el paseo: la calzada lleva a la isla de Gushan.'],
      de: ['Bai-Damm und Zerbrochene Brücke', 'Der Damm des Dichters Bai Juyi mit der Zerbrochenen Brücke, wo sich die Liebenden der Legende der Weißen Schlange trafen; im Winter scheint Schnee sie zu „brechen“.', 'Den Seespaziergang hier beginnen – der Damm führt zur Insel Gushan.'],
      fr: ['Digue Bai et pont Brisé', 'La digue du poète Bai Juyi et le pont Brisé, où se rencontrèrent les amants de la légende du Serpent blanc ; l’hiver, la neige semble le « briser ».', 'Commencez ici la promenade : la digue mène à l’île de Gushan.'],
      it: ['Diga Bai e Ponte Spezzato', 'La diga del poeta Bai Juyi con il Ponte Spezzato, dove si incontrarono gli amanti della leggenda del Serpente Bianco; d’inverno la neve sembra «spezzarlo».', 'Inizia qui la passeggiata: la diga porta all’isola di Gushan.'],
    }, { price: free }),
    P('leifeng-pagoda', 'attraction', 30.231, 120.149, PAGODA, 4.4, 26000, ['temples', 'views', 'history'], {
      ru: ['Пагода Лэйфэн', 'Пагода на южном берегу Сиху, восстановленная в 2002 году над руинами X века; по легенде под ней заточили Белую змею.', 'Поднимитесь к закату — с верхнего яруса всё озеро видно в золотом свете.'],
      en: ['Leifeng Pagoda', 'A pagoda on West Lake’s south shore, rebuilt in 2002 over 10th-century ruins; legend says the White Snake was imprisoned beneath it.', 'Go up at sunset — the whole lake glows gold from the top tier.'],
      es: ['Pagoda Leifeng', 'Una pagoda en la orilla sur del Lago del Oeste, reconstruida en 2002 sobre ruinas del siglo X; la leyenda dice que bajo ella se encerró a la Serpiente Blanca.', 'Sube al atardecer: desde arriba todo el lago brilla dorado.'],
      de: ['Leifeng-Pagode', 'Eine Pagode am Südufer des Westsees, 2002 über Ruinen aus dem 10. Jh. wiederaufgebaut; der Legende nach wurde darunter die Weiße Schlange gefangen gehalten.', 'Zum Sonnenuntergang hinauf – von oben glüht der ganze See golden.'],
      fr: ['Pagode Leifeng', 'Une pagode sur la rive sud du lac, reconstruite en 2002 sur des ruines du Xe siècle ; selon la légende, le Serpent blanc y fut emprisonné.', 'Montez au coucher du soleil : tout le lac s’embrase depuis le sommet.'],
      it: ['Pagoda Leifeng', 'Una pagoda sulla riva sud del lago, ricostruita nel 2002 sulle rovine del X secolo; la leggenda vuole che vi fosse imprigionato il Serpente Bianco.', 'Sali al tramonto: dall’ultimo piano tutto il lago si tinge d’oro.'],
    }, { spot: 'insta', price: level(1) }),
    P('lingyin-temple', 'attraction', 30.242, 120.101, COUPLE, 4.6, 33000, ['temples', 'history'], {
      ru: ['Храм Линъинь и скала Фэйлайфэн', 'Один из крупнейших буддийских храмов Китая (основан в 326 году) и скала Фэйлайфэн с сотнями резных Будд X–XIV веков.', 'Приходите к открытию; билет на скалу и в храм покупаются отдельно.'],
      en: ['Lingyin Temple and Feilai Feng', 'One of China’s largest Buddhist temples (founded in 326) and the Feilai Feng cliff with hundreds of Buddhas carved in the 10th–14th centuries.', 'Come at opening; the cliff and the temple have separate tickets.'],
      es: ['Templo Lingyin y Feilai Feng', 'Uno de los mayores templos budistas de China (fundado en 326) y el peñasco Feilai Feng con cientos de budas tallados entre los siglos X y XIV.', 'Ve a la apertura; el peñasco y el templo tienen entradas distintas.'],
      de: ['Lingyin-Tempel und Feilai Feng', 'Einer der größten buddhistischen Tempel Chinas (gegründet 326) und der Fels Feilai Feng mit Hunderten im 10.–14. Jh. gemeißelten Buddhas.', 'Zur Öffnung kommen; Fels und Tempel haben getrennte Tickets.'],
      fr: ['Temple Lingyin et Feilai Feng', 'L’un des plus grands temples bouddhistes de Chine (fondé en 326) et la falaise de Feilai Feng aux centaines de bouddhas sculptés du Xe au XIVe siècle.', 'Venez à l’ouverture ; falaise et temple ont des billets séparés.'],
      it: ['Tempio Lingyin e Feilai Feng', 'Uno dei maggiori templi buddhisti della Cina (fondato nel 326) e la rupe di Feilai Feng con centinaia di Buddha scolpiti tra X e XIV secolo.', 'Vieni all’apertura; rupe e tempio hanno biglietti separati.'],
    }, { price: level(1) }),
    P('three-pools', 'nature', 30.242, 120.144, LAKE, 4.5, 15000, ['lakes', 'islands', 'photo'], {
      ru: ['Три пруда, отражающие луну', 'Остров Сяоинчжоу посреди Сиху с тремя каменными пагодами в воде — их изображение есть на купюре в 1 юань.', 'Попасть на остров можно только на прогулочной лодке с берега.'],
      en: ['Three Pools Mirroring the Moon', 'Xiaoyingzhou island in the middle of West Lake with three stone pagodas in the water — they appear on the 1-yuan note.', 'You can only reach the island by tour boat from the shore.'],
      es: ['Tres Estanques que Reflejan la Luna', 'La isla de Xiaoyingzhou en medio del lago con tres pagodas de piedra en el agua, que aparecen en el billete de 1 yuan.', 'Solo se llega a la isla en barco desde la orilla.'],
      de: ['Drei Teiche, die den Mond spiegeln', 'Die Insel Xiaoyingzhou mitten im Westsee mit drei Steinpagoden im Wasser – sie sind auf dem 1-Yuan-Schein abgebildet.', 'Die Insel erreicht man nur per Ausflugsboot vom Ufer.'],
      fr: ['Trois étangs reflétant la lune', 'L’île de Xiaoyingzhou au milieu du lac, avec trois pagodes de pierre dans l’eau, figurant sur le billet d’un yuan.', 'On n’y accède qu’en bateau d’excursion depuis la rive.'],
      it: ['Tre stagni che riflettono la luna', 'L’isola di Xiaoyingzhou in mezzo al lago con tre pagode di pietra nell’acqua, raffigurate sulla banconota da 1 yuan.', 'Si raggiunge solo in battello dalla riva.'],
    }, { spot: 'insta', price: level(2) }),
    P('longjing-village', 'nature', 30.229, 120.121, TEA, 4.5, 11000, ['nature', 'hiking', 'culture'], {
      ru: ['Деревня Лунцзин', 'Чайная деревня на холмах за озером, давшая имя знаменитому зелёному чаю: плантации террасами, источник Лунцзин и чайные дома.', 'Весной (март–апрель) видно, как чай собирают и обжаривают вручную в котлах.'],
      en: ['Longjing village', 'The hillside tea village behind the lake that gave its name to the famous green tea: terraced plantations, the Dragon Well spring and teahouses.', 'In spring (March–April) you can watch tea being picked and pan-roasted by hand.'],
      es: ['Aldea de Longjing', 'La aldea del té en las colinas tras el lago que dio nombre al famoso té verde: plantaciones en terrazas, el manantial del Pozo del Dragón y casas de té.', 'En primavera (marzo–abril) se ve recoger y tostar el té a mano.'],
      de: ['Dorf Longjing', 'Das Teedorf in den Hügeln hinter dem See, das dem berühmten grünen Tee den Namen gab: Terrassenplantagen, die Drachenbrunnen-Quelle und Teehäuser.', 'Im Frühling (März–April) sieht man, wie Tee von Hand gepflückt und im Wok geröstet wird.'],
      fr: ['Village de Longjing', 'Le village du thé dans les collines derrière le lac, qui a donné son nom au célèbre thé vert : plantations en terrasses, source du Puits du dragon et maisons de thé.', 'Au printemps (mars–avril), on voit cueillir et torréfier le thé à la main.'],
      it: ['Villaggio di Longjing', 'Il villaggio del tè sulle colline dietro il lago che ha dato il nome al famoso tè verde: piantagioni a terrazze, la sorgente del Pozzo del Drago e case da tè.', 'In primavera (marzo–aprile) si vede raccogliere e tostare il tè a mano.'],
    }, { spot: 'insta', price: free }),
    P('meijiawu', 'nature', 30.212, 120.114, TEA, 4.5, 6800, ['nature', 'culture'], {
      ru: ['Чайная деревня Мэйцзяу', 'Тихая долина с чайными террасами и семейными чайными, где можно выпить свежего Лунцзина и пообедать по-деревенски.', 'Здесь меньше туристов, чем в самой деревне Лунцзин.'],
      en: ['Meijiawu tea village', 'A quiet valley of tea terraces and family teahouses where you can drink fresh Longjing and have a country lunch.', 'Fewer tourists here than in Longjing village itself.'],
      es: ['Aldea del té de Meijiawu', 'Un valle tranquilo de terrazas de té y casas familiares donde tomar Longjing fresco y comer al estilo rural.', 'Hay menos turistas que en la propia aldea de Longjing.'],
      de: ['Teedorf Meijiawu', 'Ein stilles Tal mit Teeterrassen und Familienteehäusern, wo man frischen Longjing trinkt und ländlich zu Mittag isst.', 'Weniger Touristen als im Dorf Longjing selbst.'],
      fr: ['Village de thé de Meijiawu', 'Une vallée tranquille de terrasses de thé et de maisons de thé familiales, pour un Longjing frais et un déjeuner campagnard.', 'Moins de touristes qu’au village de Longjing.'],
      it: ['Villaggio del tè di Meijiawu', 'Una valle tranquilla di terrazze di tè e case da tè familiari dove bere Longjing fresco e pranzare alla contadina.', 'Meno turisti che nel villaggio di Longjing.'],
    }, { spot: 'hidden', price: free }),
    P('hefang-street', 'attraction', 30.242, 120.169, COUPLE, 4.1, 21000, ['oldtown', 'shopping', 'streetfood'], {
      ru: ['Улица Хэфан', 'Отреставрированная старая торговая улица у холма Ушань с аптеками традиционной медицины, лавками чая и уличными сладостями.', 'Загляните в старинную аптеку Хуцинъюйтан — интерьеры XIX века.'],
      en: ['Hefang Street', 'A restored old shopping street below Wushan hill with traditional pharmacies, tea shops and street sweets.', 'Step into the Huqingyutang pharmacy — 19th-century interiors.'],
      es: ['Calle Hefang', 'Una antigua calle comercial restaurada bajo la colina Wushan con boticas tradicionales, tiendas de té y dulces callejeros.', 'Entra en la botica Huqingyutang: interiores del siglo XIX.'],
      de: ['Hefang-Straße', 'Eine restaurierte alte Einkaufsstraße am Wushan-Hügel mit traditionellen Apotheken, Teeläden und Straßensüßigkeiten.', 'In die Apotheke Huqingyutang schauen – Interieur aus dem 19. Jh.'],
      fr: ['Rue Hefang', 'Une vieille rue commerçante restaurée au pied de la colline Wushan, avec pharmacies traditionnelles, boutiques de thé et douceurs de rue.', 'Entrez dans la pharmacie Huqingyutang : intérieurs du XIXe siècle.'],
      it: ['Via Hefang', 'Una vecchia via commerciale restaurata sotto il colle Wushan con farmacie tradizionali, negozi di tè e dolci di strada.', 'Entra nella farmacia Huqingyutang: interni ottocenteschi.'],
    }, { price: free }),
    P('gongchen-bridge', 'attraction', 30.32, 120.144, BRIDGE, 4.4, 8700, ['history', 'unesco', 'oldtown'], {
      ru: ['Мост Гунчэнь и Великий канал', 'Каменный мост 1631 года через Великий канал (ЮНЕСКО) — южный конец водного пути из Пекина; вокруг старый квартал с музеями ремёсел.', 'Вечером прокатитесь по каналу на водном автобусе.'],
      en: ['Gongchen Bridge and the Grand Canal', 'A stone bridge of 1631 over the Grand Canal (UNESCO) — the southern end of the waterway from Beijing — in an old quarter with craft museums.', 'In the evening ride the canal on a water bus.'],
      es: ['Puente Gongchen y el Gran Canal', 'Un puente de piedra de 1631 sobre el Gran Canal (UNESCO), el extremo sur de la vía de agua desde Pekín, en un barrio antiguo con museos de oficios.', 'Por la tarde recorre el canal en autobús acuático.'],
      de: ['Gongchen-Brücke und Kaiserkanal', 'Eine Steinbrücke von 1631 über den Kaiserkanal (UNESCO) – das Südende der Wasserstraße aus Peking – in einem alten Viertel mit Handwerksmuseen.', 'Abends mit dem Wasserbus über den Kanal fahren.'],
      fr: ['Pont Gongchen et Grand Canal', 'Un pont de pierre de 1631 sur le Grand Canal (UNESCO), extrémité sud de la voie d’eau venue de Pékin, dans un vieux quartier aux musées d’artisanat.', 'Le soir, parcourez le canal en bateau-bus.'],
      it: ['Ponte Gongchen e Canale Imperiale', 'Un ponte di pietra del 1631 sul Canale Imperiale (UNESCO), estremità sud della via d’acqua da Pechino, in un vecchio quartiere con musei dell’artigianato.', 'La sera fai un giro sul canale col battello-bus.'],
    }, { spot: 'hidden', price: free }),
    P('xixi-wetland', 'nature', 30.27, 120.07, LAKE, 4.4, 14000, ['nature', 'lakes', 'wildlife'], {
      ru: ['Водно-болотный парк Сиси', 'Городской парк протоков, прудов и деревень на воде к западу от центра; по нему возят на электролодках.', 'Возьмите лодку — пешком видна лишь малая часть парка.'],
      en: ['Xixi Wetland Park', 'An urban park of channels, ponds and water villages west of the centre, toured by electric boat.', 'Take a boat — on foot you see only a small part.'],
      es: ['Humedal de Xixi', 'Un parque urbano de canales, estanques y aldeas sobre el agua al oeste del centro, recorrido en barca eléctrica.', 'Toma una barca: a pie se ve solo una parte pequeña.'],
      de: ['Feuchtgebiet Xixi', 'Ein Stadtpark aus Kanälen, Teichen und Wasserdörfern westlich des Zentrums, per Elektroboot erkundet.', 'Ein Boot nehmen – zu Fuß sieht man nur einen kleinen Teil.'],
      fr: ['Zone humide de Xixi', 'Un parc urbain de canaux, étangs et villages sur l’eau à l’ouest du centre, visité en bateau électrique.', 'Prenez un bateau : à pied, on n’en voit qu’une petite partie.'],
      it: ['Zona umida di Xixi', 'Un parco urbano di canali, stagni e villaggi sull’acqua a ovest del centro, visitato in barca elettrica.', 'Prendi una barca: a piedi se ne vede solo una piccola parte.'],
    }, { price: level(1) }),
    P('tea-museum', 'attraction', 30.235, 120.129, TEA, 4.4, 5200, ['museums', 'culture'], {
      ru: ['Национальный музей чая Китая', 'Бесплатный музей среди чайных плантаций у Лунцзина: история чая, утварь и чайные церемонии разных народов.', 'В музее можно попробовать чай — хорошая пауза по дороге в деревню.'],
      en: ['China National Tea Museum', 'A free museum among the tea fields near Longjing: tea history, utensils and tea ceremonies of different peoples.', 'You can taste tea here — a nice pause on the way to the village.'],
      es: ['Museo Nacional del Té de China', 'Un museo gratuito entre plantaciones cerca de Longjing: historia del té, utensilios y ceremonias de distintos pueblos.', 'Aquí se puede catar té: buena pausa camino de la aldea.'],
      de: ['Chinesisches Nationales Teemuseum', 'Ein kostenloses Museum zwischen Teefeldern bei Longjing: Teegeschichte, Utensilien und Teezeremonien verschiedener Völker.', 'Hier kann man Tee probieren – eine schöne Pause auf dem Weg ins Dorf.'],
      fr: ['Musée national du thé de Chine', 'Un musée gratuit au milieu des théiers près de Longjing : histoire du thé, ustensiles et cérémonies de différents peuples.', 'On peut y déguster du thé : une jolie pause sur la route du village.'],
      it: ['Museo nazionale del tè della Cina', 'Un museo gratuito tra le piantagioni vicino a Longjing: storia del tè, utensili e cerimonie di popoli diversi.', 'Qui si può assaggiare il tè: una bella pausa verso il villaggio.'],
    }, { price: free }),
    P('liuhe-pagoda', 'attraction', 30.2, 120.129, PAGODA, 4.4, 7600, ['temples', 'views', 'history'], {
      ru: ['Пагода Шести гармоний (Люхэта)', 'Пагода 970 года на холме над рекой Цяньтан, построенная, чтобы усмирить её знаменитый приливный вал.', 'Поднимитесь наверх — вид на реку и мост Цяньтан.'],
      en: ['Six Harmonies Pagoda (Liuhe)', 'A pagoda of 970 on a hill above the Qiantang River, built to calm its famous tidal bore.', 'Climb to the top for views of the river and the Qiantang bridge.'],
      es: ['Pagoda de las Seis Armonías (Liuhe)', 'Una pagoda del 970 en una colina sobre el río Qiantang, construida para calmar su famoso macareo.', 'Sube arriba: vistas del río y el puente de Qiantang.'],
      de: ['Pagode der Sechs Harmonien (Liuhe)', 'Eine Pagode von 970 auf einem Hügel über dem Qiantang, gebaut, um dessen berühmte Flutwelle zu besänftigen.', 'Nach oben steigen – Blick auf Fluss und Qiantang-Brücke.'],
      fr: ['Pagode des Six Harmonies (Liuhe)', 'Une pagode de 970 sur une colline au-dessus de la Qiantang, bâtie pour apaiser son célèbre mascaret.', 'Montez au sommet : vue sur le fleuve et le pont de Qiantang.'],
      it: ['Pagoda delle Sei Armonie (Liuhe)', 'Una pagoda del 970 su un colle sopra il fiume Qiantang, costruita per placarne la famosa onda di marea.', 'Sali in cima: vista sul fiume e sul ponte del Qiantang.'],
    }, { price: level(1) }),
    P('ru-yuan', 'food', 30.256, 120.129, TEA, 4.7, 700, ['food', 'luxury', 'romance'], {
      ru: ['Ru Yuan', 'Ресторан в Ханчжоуском ботаническом саду: изысканная кухня Чжэцзяна из сезонных продуктов в зале с видом на зелень; первые 2★ в Ханчжоу.', 'Бронь открывается заранее и быстро заканчивается — планируйте за пару месяцев.'],
      en: ['Ru Yuan', 'A restaurant in the Hangzhou Botanical Garden: refined Zhejiang cooking of seasonal produce in a room facing the greenery; the city’s first two-star.', 'Bookings open in advance and go fast — plan a couple of months ahead.'],
      es: ['Ru Yuan', 'Un restaurante en el Jardín Botánico de Hangzhou: refinada cocina de Zhejiang de temporada en una sala abierta al verde; el primer dos estrellas de la ciudad.', 'Las reservas abren con antelación y vuelan: planifica con un par de meses.'],
      de: ['Ru Yuan', 'Ein Restaurant im Botanischen Garten Hangzhou: feine Zhejiang-Küche mit Saisonprodukten in einem Raum mit Blick ins Grüne; der erste Zwei-Sterne-Betrieb der Stadt.', 'Reservierungen öffnen früh und sind schnell weg – zwei Monate vorher planen.'],
      fr: ['Ru Yuan', 'Un restaurant dans le jardin botanique de Hangzhou : cuisine raffinée du Zhejiang de saison, salle ouverte sur la verdure ; le premier deux-étoiles de la ville.', 'Les réservations ouvrent tôt et partent vite : prévoyez deux mois.'],
      it: ['Ru Yuan', 'Un ristorante nell’Orto botanico di Hangzhou: raffinata cucina dello Zhejiang con prodotti di stagione in una sala sul verde; il primo due stelle della città.', 'Le prenotazioni aprono presto e finiscono subito: pianifica due mesi prima.'],
    }, { price: level(3), address: '11 Yuquan Road, Xihu', michelin: { award: 'star2', year: 2026 }, menu: [
      ['Seasonal tasting menu', undefined, 'сезонное дегустационное меню|seasonal tasting menu|menú degustación de temporada|saisonales Degustationsmenü|menu dégustation de saison|menu degustazione stagionale'],
      ['Zhejiang classics', undefined, 'классика кухни Чжэцзяна|Zhejiang classics|clásicos de Zhejiang|Zhejiang-Klassiker|classiques du Zhejiang|classici dello Zhejiang'],
    ] }),
    P('lou-wai-lou', 'food', 30.253, 120.146, LAKE, 4.2, 9800, ['food', 'history', 'views'], {
      ru: ['Лоувайлоу', 'Ресторан с 1848 года на острове Гушань у самой воды — классика ханчжоуской кухни: рыба Сиху в уксусном соусе и свинина Дунпо.', 'Садитесь у окна на озеро; лучше прийти в обед, вечером — очередь.'],
      en: ['Lou Wai Lou', 'A restaurant since 1848 on Gushan island right by the water — Hangzhou classics: West Lake fish in vinegar sauce and Dongpo pork.', 'Sit by a lake window; lunch is easier than dinner.'],
      es: ['Lou Wai Lou', 'Un restaurante desde 1848 en la isla de Gushan junto al agua, con clásicos de Hangzhou: pescado del Lago del Oeste en salsa de vinagre y cerdo Dongpo.', 'Siéntate junto a la ventana al lago; el almuerzo es más fácil.'],
      de: ['Lou Wai Lou', 'Ein Restaurant seit 1848 auf der Insel Gushan direkt am Wasser – Hangzhou-Klassiker: Westsee-Fisch in Essigsoße und Dongpo-Schweinefleisch.', 'Am Seefenster sitzen; mittags ist es leichter als abends.'],
      fr: ['Lou Wai Lou', 'Un restaurant depuis 1848 sur l’île de Gushan au bord de l’eau : classiques de Hangzhou, poisson du lac sauce vinaigrée et porc Dongpo.', 'Asseyez-vous côté lac ; le déjeuner est plus facile.'],
      it: ['Lou Wai Lou', 'Un ristorante dal 1848 sull’isola di Gushan a filo d’acqua: classici di Hangzhou, pesce del Lago dell’Ovest in salsa all’aceto e maiale Dongpo.', 'Siediti alla finestra sul lago; a pranzo è più facile.'],
    }, { price: level(2), menu: [
      ['West Lake vinegar fish', undefined, 'рыба в кисло-сладком уксусном соусе|fish in sweet vinegar sauce|pescado en salsa de vinagre dulce|Fisch in süßer Essigsoße|poisson sauce vinaigrée sucrée|pesce in salsa agrodolce all’aceto'],
      ['Dongpo pork', undefined, 'томлёная свиная грудинка Дунпо|slow-braised Dongpo pork belly|panceta Dongpo guisada|geschmorter Dongpo-Schweinebauch|poitrine de porc Dongpo mijotée|pancetta Dongpo brasata'],
    ] }),
    P('zhiweiguan', 'food', 30.252, 120.168, COUPLE, 4.1, 7100, ['food', 'history'], {
      ru: ['Чживэйгуань', 'Ханчжоуская закусочная с 1913 года у Сиху: сяолунбао, «кошачьи ушки» и другие местные закуски.', 'Удобно перекусить между озером и улицей Хэфан.'],
      en: ['Zhiweiguan', 'A Hangzhou eatery near West Lake since 1913: xiaolongbao, “cat’s ear” pasta and other local snacks.', 'A handy snack stop between the lake and Hefang Street.'],
      es: ['Zhiweiguan', 'Una casa de comidas de Hangzhou junto al lago desde 1913: xiaolongbao, pasta «orejas de gato» y otras tapas locales.', 'Parada práctica entre el lago y la calle Hefang.'],
      de: ['Zhiweiguan', 'Ein Hangzhou-Lokal am Westsee seit 1913: Xiaolongbao, „Katzenohren“-Pasta und andere lokale Snacks.', 'Praktischer Snackstopp zwischen See und Hefang-Straße.'],
      fr: ['Zhiweiguan', 'Une adresse de Hangzhou près du lac depuis 1913 : xiaolongbao, pâtes « oreilles de chat » et autres en-cas locaux.', 'Une pause pratique entre le lac et la rue Hefang.'],
      it: ['Zhiweiguan', 'Una trattoria di Hangzhou vicino al lago dal 1913: xiaolongbao, pasta «orecchie di gatto» e altri snack locali.', 'Una sosta comoda tra il lago e via Hefang.'],
    }, { price: level(1), menu: [
      ['Xiaolongbao', undefined, 'пельмени с бульоном|soup dumplings|empanadillas con caldo|Suppenteigtaschen|raviolis à soupe|ravioli in brodo'],
      ['Cat’s-ear pasta', undefined, 'жареные «кошачьи ушки» из теста|“cat’s ear” pasta stir-fry|pasta «orejas de gato» salteada|gebratene „Katzenohren“-Pasta|pâtes « oreilles de chat » sautées|pasta «orecchie di gatto» saltata'],
    ] }),
    P('grandmas-home', 'food', 30.258, 120.165, COUPLE, 4.1, 8200, ['food'], {
      ru: ['Вайпоцзя (Grandma’s Home)', 'Ханчжоуская сеть домашней кухни с 1998 года — недорого и вкусно; в выходные очереди с электронными номерками.', 'Возьмите номерок и погуляйте рядом — уведомление придёт на телефон.'],
      en: ['Waipojia (Grandma’s Home)', 'A Hangzhou chain of home-style cooking since 1998 — cheap and tasty; weekends bring queues with electronic numbers.', 'Take a number and stroll nearby — a notice comes to your phone.'],
      es: ['Waipojia (Grandma’s Home)', 'Una cadena de Hangzhou de cocina casera desde 1998, barata y sabrosa; el fin de semana hay colas con número electrónico.', 'Coge número y pasea cerca: el aviso llega al móvil.'],
      de: ['Waipojia (Grandma’s Home)', 'Eine Hangzhou-Kette mit Hausmannskost seit 1998 – günstig und lecker; am Wochenende Schlangen mit elektronischer Nummer.', 'Eine Nummer ziehen und in der Nähe bummeln – die Nachricht kommt aufs Handy.'],
      fr: ['Waipojia (Grandma’s Home)', 'Une chaîne de Hangzhou de cuisine familiale depuis 1998, bon marché et savoureuse ; le week-end, file avec ticket électronique.', 'Prenez un numéro et flânez : l’alerte arrive sur votre téléphone.'],
      it: ['Waipojia (Grandma’s Home)', 'Una catena di Hangzhou di cucina casalinga dal 1998, economica e gustosa; nel weekend code con numero elettronico.', 'Prendi il numero e passeggia vicino: l’avviso arriva sul telefono.'],
    }, { price: level(1), menu: [
      ['Grandma’s braised pork', undefined, 'тушёная свинина по-домашнему|home-style braised pork|cerdo guisado casero|geschmortes Schwein nach Hausart|porc braisé maison|maiale brasato della nonna'],
      ['Green tea chicken', undefined, 'курица с зелёным чаем|green tea chicken|pollo al té verde|Grüntee-Huhn|poulet au thé vert|pollo al tè verde'],
    ] }),
    P('kuiyuanguan', 'food', 30.25, 120.169, COUPLE, 4.2, 4900, ['food', 'history'], {
      ru: ['Куйюаньгуань', 'Лапшичная с 1867 года, знаменитая «пянь-эр чуань» — лапшой с маринованными овощами, побегами бамбука и свининой.', 'Попробуйте и лапшу с угрём и креветками — вторая фирменная миска.'],
      en: ['Kuiyuanguan', 'A noodle house since 1867, famous for “pian’er chuan” — noodles with pickled greens, bamboo shoots and pork.', 'Try the eel-and-shrimp noodles too — the other signature bowl.'],
      es: ['Kuiyuanguan', 'Una casa de fideos desde 1867, famosa por el «pian’er chuan»: fideos con verdura encurtida, brotes de bambú y cerdo.', 'Prueba también los fideos de anguila y gamba, el otro cuenco estrella.'],
      de: ['Kuiyuanguan', 'Ein Nudelhaus seit 1867, berühmt für „Pian’er Chuan“ – Nudeln mit eingelegtem Gemüse, Bambussprossen und Schwein.', 'Auch die Aal-Garnelen-Nudeln probieren – die zweite Spezialität.'],
      fr: ['Kuiyuanguan', 'Une maison de nouilles depuis 1867, célèbre pour le « pian’er chuan » : nouilles aux légumes marinés, pousses de bambou et porc.', 'Goûtez aussi les nouilles anguille-crevettes, l’autre spécialité.'],
      it: ['Kuiyuanguan', 'Una casa di noodle dal 1867, famosa per il «pian’er chuan»: noodle con verdure sottaceto, germogli di bambù e maiale.', 'Prova anche i noodle con anguilla e gamberi, l’altra specialità.'],
    }, { price: level(1), menu: [
      ['Pian’er chuan', undefined, 'лапша с овощами, бамбуком и свининой|noodles with greens, bamboo and pork|fideos con verdura, bambú y cerdo|Nudeln mit Gemüse, Bambus und Schwein|nouilles légumes, bambou et porc|noodle con verdure, bambù e maiale'],
      ['Eel and shrimp noodles', undefined, 'лапша с угрём и креветками|eel and shrimp noodles|fideos con anguila y gambas|Nudeln mit Aal und Garnelen|nouilles anguille et crevettes|noodle con anguilla e gamberi'],
    ] }),
    P('green-tea-restaurant', 'food', 30.26, 120.13, TEA, 4.1, 7400, ['food'], {
      ru: ['Green Tea Restaurant', 'Сеть, основанная в Ханчжоу, с недорогой кухней Цзяннани в зелёных интерьерах; один из залов — у Сиху.', 'Возьмите курицу с чаем и запечённый хлеб — классика сети.'],
      en: ['Green Tea Restaurant', 'A chain founded in Hangzhou with affordable Jiangnan cooking in leafy interiors; one branch is by West Lake.', 'Get the tea chicken and the baked bread — the chain’s classics.'],
      es: ['Green Tea Restaurant', 'Una cadena fundada en Hangzhou con cocina de Jiangnan asequible en interiores verdes; una sede está junto al lago.', 'Pide el pollo al té y el pan horneado, sus clásicos.'],
      de: ['Green Tea Restaurant', 'Eine in Hangzhou gegründete Kette mit günstiger Jiangnan-Küche in grünen Räumen; eine Filiale liegt am Westsee.', 'Teehuhn und gebackenes Brot nehmen – die Klassiker der Kette.'],
      fr: ['Green Tea Restaurant', 'Une chaîne née à Hangzhou, cuisine du Jiangnan abordable dans un décor végétal ; une adresse est au bord du lac.', 'Prenez le poulet au thé et le pain cuit au four, les classiques.'],
      it: ['Green Tea Restaurant', 'Una catena nata a Hangzhou con cucina del Jiangnan economica in ambienti verdi; una sede è sul lago.', 'Prendi il pollo al tè e il pane al forno, i classici.'],
    }, { price: level(1), menu: [
      ['Green tea roast chicken', undefined, 'курица, запечённая с чаем|chicken roasted with tea|pollo asado con té|mit Tee gebratenes Huhn|poulet rôti au thé|pollo arrosto al tè'],
      ['Baked bread', undefined, 'запечённый хлеб «Мяньбао»|baked bread|pan horneado|gebackenes Brot|pain cuit au four|pane al forno'],
    ] }),
    P('shanwaishan', 'food', 30.257, 120.131, TEA, 4.2, 3900, ['food', 'history'], {
      ru: ['Шаньвайшань', 'Ресторан ханчжоуской кухни с 1919 года у Нефритового источника и ботанического сада.', 'Хороший обед после Линъиня — по пути обратно к озеру.'],
      en: ['Shanwaishan', 'A Hangzhou-cuisine restaurant since 1919 by the Jade Spring and the botanical garden.', 'A good lunch after Lingyin, on the way back to the lake.'],
      es: ['Shanwaishan', 'Un restaurante de cocina de Hangzhou desde 1919 junto al Manantial de Jade y el jardín botánico.', 'Buen almuerzo tras Lingyin, camino del lago.'],
      de: ['Shanwaishan', 'Ein Restaurant mit Hangzhou-Küche seit 1919 an der Jadequelle und dem Botanischen Garten.', 'Ein gutes Mittagessen nach Lingyin auf dem Rückweg zum See.'],
      fr: ['Shanwaishan', 'Un restaurant de cuisine de Hangzhou depuis 1919, près de la source de Jade et du jardin botanique.', 'Un bon déjeuner après Lingyin, en revenant vers le lac.'],
      it: ['Shanwaishan', 'Un ristorante di cucina di Hangzhou dal 1919 vicino alla Sorgente di Giada e all’orto botanico.', 'Un buon pranzo dopo Lingyin, tornando verso il lago.'],
    }, { price: level(2), menu: [
      ['Longjing shrimp', undefined, 'речные креветки с чаем Лунцзин|river shrimp with Longjing tea|gambas de río con té Longjing|Flussgarnelen mit Longjing-Tee|crevettes de rivière au thé Longjing|gamberi di fiume al tè Longjing'],
      ['Beggar’s chicken', undefined, 'курица «нищего», запечённая в глине|“beggar’s chicken” baked in clay|«pollo del mendigo» al barro|„Bettlerhuhn“ in Lehm gebacken|« poulet du mendiant » cuit en argile|«pollo del mendicante» cotto nell’argilla'],
    ] }),
    P('xinfeng-xiaochi', 'food', 30.255, 120.17, COUPLE, 4.0, 5600, ['food', 'streetfood'], {
      ru: ['Синьфэн Сяочи', 'Местная сеть дешёвых закусок, куда ханчжоусцы ходят завтракать: вонтоны с креветкой и паровые пирожки.', 'Отличный ранний завтрак — открывается рано утром.'],
      en: ['Xinfeng Xiaochi', 'A local chain of cheap snacks where Hangzhou people go for breakfast: shrimp wontons and steamed buns.', 'A great early breakfast — it opens early.'],
      es: ['Xinfeng Xiaochi', 'Una cadena local de tapas baratas donde desayunan los de Hangzhou: wontons de gamba y bollos al vapor.', 'Un gran desayuno temprano: abre pronto.'],
      de: ['Xinfeng Xiaochi', 'Eine lokale Kette für günstige Snacks, in der die Hangzhouer frühstücken: Garnelen-Wan-Tans und gedämpfte Brötchen.', 'Ein tolles frühes Frühstück – öffnet früh.'],
      fr: ['Xinfeng Xiaochi', 'Une chaîne locale d’en-cas bon marché où les habitants prennent leur petit-déjeuner : wontons aux crevettes et petits pains vapeur.', 'Un excellent petit-déjeuner matinal : ouvert tôt.'],
      it: ['Xinfeng Xiaochi', 'Una catena locale di snack economici dove gli abitanti fanno colazione: wonton di gamberi e panini al vapore.', 'Un’ottima colazione presto: apre di buon’ora.'],
    }, { price: level(1), menu: [
      ['Shrimp wontons', undefined, 'вонтоны с креветкой в бульоне|shrimp wontons in broth|wontons de gamba en caldo|Garnelen-Wan-Tans in Brühe|wontons aux crevettes en bouillon|wonton di gamberi in brodo'],
      ['Steamed pork buns', undefined, 'паровые пирожки со свининой|steamed pork buns|bollos de cerdo al vapor|gedämpfte Schweinefleischbrötchen|petits pains vapeur au porc|panini al vapore col maiale'],
    ] }),
    P('longjing-farmhouse', 'food', 30.228, 120.12, TEA, 4.3, 3100, ['food', 'nature'], {
      ru: ['Чайные фермы Лунцзина', 'Семейные чайные во дворах деревни Лунцзин: свежий чай этого года и деревенские блюда, например креветки с листьями Лунцзина.', 'Договоритесь о цене чая заранее — её считают за чашку или за грамм.'],
      en: ['Longjing tea farmhouses', 'Family teahouses in the courtyards of Longjing village: this year’s fresh tea and country dishes such as shrimp with Longjing leaves.', 'Agree the tea price first — it’s by the cup or by the gram.'],
      es: ['Casas de té de Longjing', 'Casas de té familiares en los patios de la aldea de Longjing: té fresco del año y platos rurales, como gambas con hojas de Longjing.', 'Acuerda antes el precio del té: por taza o por gramo.'],
      de: ['Teehöfe in Longjing', 'Familienteehäuser in den Höfen des Dorfes Longjing: frischer Tee des Jahres und Landgerichte wie Garnelen mit Longjing-Blättern.', 'Den Teepreis vorher klären – pro Tasse oder pro Gramm.'],
      fr: ['Fermes à thé de Longjing', 'Des maisons de thé familiales dans les cours du village de Longjing : thé frais de l’année et plats campagnards, comme les crevettes aux feuilles de Longjing.', 'Convenez du prix du thé avant : à la tasse ou au gramme.'],
      it: ['Case del tè di Longjing', 'Case da tè familiari nei cortili del villaggio di Longjing: tè fresco dell’anno e piatti di campagna, come i gamberi con foglie di Longjing.', 'Concorda prima il prezzo del tè: a tazza o a grammo.'],
    }, { spot: 'insta', price: level(2), menu: [
      ['Fresh Longjing tea', undefined, 'свежий чай Лунцзин|fresh Longjing tea|té Longjing fresco|frischer Longjing-Tee|thé Longjing frais|tè Longjing fresco'],
      ['Farmhouse lunch', undefined, 'деревенский обед|farmhouse lunch|comida casera rural|ländliches Mittagessen|déjeuner fermier|pranzo contadino'],
    ] }),
    P('jin-sha', 'food', 30.255, 120.14, LAKE, 4.5, 1800, ['food', 'luxury', 'romance'], {
      ru: ['Jin Sha (Four Seasons у Сиху)', 'Китайский ресторан отеля Four Seasons в садах у озера: кухня Ханчжоу и кантонская классика в павильонах у пруда.', 'Попросите столик с видом на пруд — вечером особенно красиво.'],
      en: ['Jin Sha (Four Seasons at West Lake)', 'The Four Seasons’ Chinese restaurant in lakeside gardens: Hangzhou cuisine and Cantonese classics in pavilions by a pond.', 'Ask for a pond-view table — especially lovely in the evening.'],
      es: ['Jin Sha (Four Seasons en el Lago del Oeste)', 'El restaurante chino del Four Seasons en jardines junto al lago: cocina de Hangzhou y clásicos cantoneses en pabellones junto a un estanque.', 'Pide mesa con vista al estanque: precioso de noche.'],
      de: ['Jin Sha (Four Seasons am Westsee)', 'Das chinesische Restaurant des Four Seasons in Seegärten: Hangzhou-Küche und kantonesische Klassiker in Pavillons am Teich.', 'Nach einem Tisch mit Teichblick fragen – abends besonders schön.'],
      fr: ['Jin Sha (Four Seasons au lac de l’Ouest)', 'Le restaurant chinois du Four Seasons dans des jardins au bord du lac : cuisine de Hangzhou et classiques cantonais dans des pavillons près d’un étang.', 'Demandez une table face à l’étang, superbe le soir.'],
      it: ['Jin Sha (Four Seasons al Lago dell’Ovest)', 'Il ristorante cinese del Four Seasons nei giardini sul lago: cucina di Hangzhou e classici cantonesi in padiglioni sullo stagno.', 'Chiedi un tavolo con vista sullo stagno: bellissimo la sera.'],
    }, { price: level(3), menu: [
      ['Dongpo pork', undefined, 'томлёная свиная грудинка Дунпо|slow-braised Dongpo pork|cerdo Dongpo guisado|geschmortes Dongpo-Schwein|porc Dongpo mijoté|maiale Dongpo brasato'],
      ['Dim sum lunch', undefined, 'дим-самы на обед|dim sum lunch|dim sum de mediodía|Dim-Sum-Mittagessen|dim sum du midi|dim sum a pranzo'],
    ] }),
  ],
  routes: [
    D(['bai-causeway-broken-bridge', 'lou-wai-lou', 'su-causeway', 'three-pools', 'leifeng-pagoda', 'hefang-street', 'kuiyuanguan'],
      'Вокруг Сиху: дамбы, острова и пагода Лэйфэн|Around West Lake: causeways, islands and Leifeng Pagoda|Alrededor del Lago del Oeste: calzadas, islas y la pagoda Leifeng|Rund um den Westsee: Dämme, Inseln und Leifeng-Pagode|Autour du lac de l’Ouest : digues, îles et pagode Leifeng|Intorno al Lago dell’Ovest: dighe, isole e pagoda Leifeng'),
    D(['lingyin-temple', 'longjing-village', 'longjing-farmhouse', 'tea-museum', 'meijiawu', 'liuhe-pagoda', 'ru-yuan'],
      'Храм Линъинь и чайные холмы Лунцзин|Lingyin Temple and the Longjing tea hills|El templo Lingyin y las colinas del té Longjing|Lingyin-Tempel und die Teehügel von Longjing|Le temple Lingyin et les collines de thé de Longjing|Il tempio Lingyin e le colline del tè di Longjing'),
    D(['xinfeng-xiaochi', 'xixi-wetland', 'green-tea-restaurant', 'gongchen-bridge', 'zhiweiguan', 'jin-sha'],
      'Водный парк Сиси и Великий канал|Xixi Wetland and the Grand Canal|El humedal de Xixi y el Gran Canal|Feuchtgebiet Xixi und Kaiserkanal|La zone humide de Xixi et le Grand Canal|La zona umida di Xixi e il Canale Imperiale'),
  ],
};

export default pack;
