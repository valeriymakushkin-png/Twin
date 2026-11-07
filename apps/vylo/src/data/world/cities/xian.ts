import type { CityPack } from '../types';
import { free, level, makeDay, makePlace } from './_kit.ts';

const P = makePlace('xian');
const D = makeDay('xian');
const ARMY = 'UqSNn_KoDA4';
const TOWER = 'Ot6BtYvXGLk';
const WARRIORS = 'FnNIDG9k8Ag';
const FACE = 'gUtcrNunbCM';
const WALL = 'nRrYOD3IBYI';

const pack: CityPack = {
  country: 'CN',
  city: 'xian',
  places: [
    P('terracotta-army', 'attraction', 34.3853, 109.2785, ARMY, 4.8, 61000, ['history', 'unesco', 'museums'], {
      ru: ['Терракотовая армия', 'Тысячи глиняных воинов в натуральную величину, охранявших гробницу императора Цинь Шихуанди (III век до н. э.); их нашли крестьяне в 1974 году. Объект ЮНЕСКО.', 'Начните с ямы № 1 — там стоят ряды восстановленных воинов, — а потом идите в ямы № 2 и 3.'],
      en: ['Terracotta Army', 'Thousands of life-size clay warriors guarding the tomb of the emperor Qin Shi Huang (3rd century BC), found by farmers in 1974. A UNESCO site.', 'Start with Pit 1 and its rows of restored warriors, then go on to Pits 2 and 3.'],
      es: ['Guerreros de Terracota', 'Miles de guerreros de arcilla a tamaño real que custodiaban la tumba del emperador Qin Shi Huang (siglo III a. C.), hallados por campesinos en 1974. Patrimonio UNESCO.', 'Empieza por el foso 1, con sus filas de guerreros restaurados, y sigue con los fosos 2 y 3.'],
      de: ['Terrakotta-Armee', 'Tausende lebensgroße Tonkrieger, die das Grab des Kaisers Qin Shi Huang (3. Jh. v. Chr.) bewachten, 1974 von Bauern entdeckt. UNESCO-Welterbe.', 'Mit Grube 1 und ihren Reihen restaurierter Krieger beginnen, dann zu den Gruben 2 und 3.'],
      fr: ['Armée de terre cuite', 'Des milliers de guerriers d’argile grandeur nature gardant le tombeau de l’empereur Qin Shi Huang (IIIe siècle av. J.-C.), découverts par des paysans en 1974. Site UNESCO.', 'Commencez par la fosse 1 et ses rangées de guerriers restaurés, puis les fosses 2 et 3.'],
      it: ['Esercito di terracotta', 'Migliaia di guerrieri d’argilla a grandezza naturale a guardia della tomba dell’imperatore Qin Shi Huang (III sec. a.C.), trovati da contadini nel 1974. Sito UNESCO.', 'Inizia dalla fossa 1 con le file di guerrieri restaurati, poi passa alle fosse 2 e 3.'],
    }, { spot: 'insta', price: level(2) }),
    P('city-wall', 'attraction', 34.259, 108.947, WALL, 4.7, 42000, ['history', 'architecture', 'photo'], {
      ru: ['Городская стена Сианя', 'Самая сохранная крепостная стена Китая эпохи Мин — почти 14 км по периметру; наверху можно взять велосипед и объехать центр.', 'Поднимайтесь у Южных ворот Юннинмэнь к вечеру — подсветка башен очень красивая.'],
      en: ['Xi’an City Wall', 'China’s best-preserved Ming-era city wall — almost 14 km round; on top you can rent a bike and ride around the centre.', 'Go up at Yongning (South) Gate towards evening — the lit towers are beautiful.'],
      es: ['Muralla de Xi’an', 'La muralla Ming mejor conservada de China, de casi 14 km de perímetro; arriba se alquilan bicis para rodear el centro.', 'Sube por la Puerta Sur Yongning al atardecer: las torres iluminadas son preciosas.'],
      de: ['Stadtmauer von Xi’an', 'Chinas am besten erhaltene Stadtmauer der Ming-Zeit – fast 14 km lang; oben kann man Räder mieten und das Zentrum umrunden.', 'Gegen Abend am Südtor Yongning hinauf – die beleuchteten Türme sind wunderschön.'],
      fr: ['Remparts de Xi’an', 'Les remparts Ming les mieux conservés de Chine, près de 14 km de tour ; en haut, on loue un vélo pour faire le tour du centre.', 'Montez à la porte Sud Yongning en fin de journée : les tours illuminées sont superbes.'],
      it: ['Mura di Xi’an', 'Le mura Ming meglio conservate della Cina, quasi 14 km di perimetro; in cima si noleggia una bici per girare il centro.', 'Sali dalla Porta Sud Yongning verso sera: le torri illuminate sono bellissime.'],
    }, { spot: 'insta', price: level(2) }),
    P('bell-tower', 'attraction', 34.261, 108.942, TOWER, 4.5, 29000, ['history', 'architecture'], {
      ru: ['Колокольная башня', 'Башня 1384 года в самом центре города на перекрёстке четырёх главных улиц; вечером она сияет подсветкой.', 'Лучший кадр — сверху с террасы торгового центра напротив, когда башня светится.'],
      en: ['Bell Tower', 'A tower of 1384 in the very centre, at the crossing of the four main streets; it glows with lights in the evening.', 'The best shot is from the terrace of the mall opposite when the tower is lit.'],
      es: ['Torre de la Campana', 'Una torre de 1384 en pleno centro, en el cruce de las cuatro calles principales; de noche resplandece.', 'La mejor foto se hace desde la terraza del centro comercial de enfrente, con la torre iluminada.'],
      de: ['Glockenturm', 'Ein Turm von 1384 mitten im Zentrum an der Kreuzung der vier Hauptstraßen; abends leuchtet er.', 'Das beste Foto von der Terrasse der Mall gegenüber, wenn der Turm beleuchtet ist.'],
      fr: ['Tour de la Cloche', 'Une tour de 1384 en plein centre, au croisement des quatre grandes rues ; elle s’illumine le soir.', 'La meilleure photo se prend de la terrasse du centre commercial d’en face, tour illuminée.'],
      it: ['Torre della Campana', 'Una torre del 1384 nel cuore della città, all’incrocio delle quattro vie principali; la sera si illumina.', 'La foto migliore è dalla terrazza del centro commerciale di fronte, con la torre accesa.'],
    }, { spot: 'insta', price: level(1) }),
    P('drum-tower', 'attraction', 34.262, 108.939, TOWER, 4.4, 17000, ['history', 'architecture'], {
      ru: ['Барабанная башня', 'Парная Колокольной башня эпохи Мин с огромными барабанами; за ней начинается Мусульманский квартал.', 'Внутри по расписанию бывают выступления барабанщиков.'],
      en: ['Drum Tower', 'The Ming-era twin of the Bell Tower with huge drums; the Muslim Quarter begins behind it.', 'Drum performances are held inside on a schedule.'],
      es: ['Torre del Tambor', 'La gemela Ming de la Torre de la Campana, con enormes tambores; tras ella empieza el barrio musulmán.', 'Dentro hay actuaciones de tambores según horario.'],
      de: ['Trommelturm', 'Das Ming-zeitliche Gegenstück zum Glockenturm mit riesigen Trommeln; dahinter beginnt das Muslimviertel.', 'Drinnen gibt es Trommelvorführungen nach Plan.'],
      fr: ['Tour du Tambour', 'La jumelle Ming de la tour de la Cloche, aux énormes tambours ; derrière commence le quartier musulman.', 'Des démonstrations de tambours ont lieu selon un horaire.'],
      it: ['Torre del Tamburo', 'La gemella Ming della Torre della Campana, con enormi tamburi; dietro inizia il quartiere musulmano.', 'All’interno ci sono esibizioni di tamburi a orario.'],
    }, { price: level(1) }),
    P('great-mosque', 'attraction', 34.264, 108.938, FACE, 4.5, 9800, ['history', 'architecture'], {
      ru: ['Большая мечеть Сианя', 'Мечеть в китайском стиле — без куполов, с пагодой вместо минарета и тихими дворами; нынешние постройки — эпохи Мин.', 'Одевайтесь закрыто; в молельный зал немусульман не пускают, но дворы открыты.'],
      en: ['Great Mosque of Xi’an', 'A mosque in Chinese style — no domes, a pagoda instead of a minaret and quiet courtyards; the present buildings are Ming-era.', 'Dress modestly; non-Muslims can’t enter the prayer hall, but the courtyards are open.'],
      es: ['Gran Mezquita de Xi’an', 'Una mezquita de estilo chino, sin cúpulas, con una pagoda en lugar de minarete y patios tranquilos; los edificios actuales son Ming.', 'Viste con recato; la sala de oración no es para no musulmanes, pero los patios sí.'],
      de: ['Große Moschee von Xi’an', 'Eine Moschee im chinesischen Stil – ohne Kuppeln, mit Pagode statt Minarett und stillen Höfen; die heutigen Bauten stammen aus der Ming-Zeit.', 'Bedeckt kleiden; die Gebetshalle ist Muslimen vorbehalten, die Höfe sind offen.'],
      fr: ['Grande mosquée de Xi’an', 'Une mosquée de style chinois, sans coupoles, avec une pagode en guise de minaret et des cours paisibles ; les bâtiments actuels datent des Ming.', 'Tenue couverte ; la salle de prière est réservée aux musulmans, mais les cours sont ouvertes.'],
      it: ['Grande moschea di Xi’an', 'Una moschea in stile cinese, senza cupole, con una pagoda al posto del minareto e cortili tranquilli; gli edifici attuali sono Ming.', 'Vestiti coprendoti; la sala di preghiera è riservata ai musulmani, i cortili sono aperti.'],
    }, { spot: 'hidden', price: level(1) }),
    P('big-wild-goose-pagoda', 'attraction', 34.219, 108.964, TOWER, 4.5, 26000, ['temples', 'history', 'unesco'], {
      ru: ['Большая пагода диких гусей', 'Пагода 652 года, построенная для сутр, которые монах Сюаньцзан привёз из Индии; вечером на площади перед ней — шоу фонтанов.', 'Приходите к вечеру: после пагоды идите на соседнюю аллею Датан Бусэчэн.'],
      en: ['Big Wild Goose Pagoda', 'A pagoda of 652, built for the sutras the monk Xuanzang brought from India; in the evening the square in front hosts a fountain show.', 'Come towards evening, then walk on to the nearby Datang Everbright City boulevard.'],
      es: ['Gran Pagoda de la Oca Salvaje', 'Una pagoda del 652, levantada para los sutras que el monje Xuanzang trajo de la India; al anochecer la plaza delantera tiene espectáculo de fuentes.', 'Ve al atardecer y sigue luego por el cercano bulevar Datang Everbright City.'],
      de: ['Große Wildganspagode', 'Eine Pagode von 652, gebaut für die Sutras, die der Mönch Xuanzang aus Indien mitbrachte; abends gibt es auf dem Platz davor eine Brunnenshow.', 'Gegen Abend kommen und dann zum nahen Boulevard Datang Everbright City weitergehen.'],
      fr: ['Grande pagode de l’Oie sauvage', 'Une pagode de 652, construite pour les sutras que le moine Xuanzang rapporta d’Inde ; le soir, la place devant accueille un spectacle de fontaines.', 'Venez en fin de journée, puis continuez sur le boulevard Datang Everbright City.'],
      it: ['Grande Pagoda dell’Oca Selvatica', 'Una pagoda del 652, costruita per i sutra che il monaco Xuanzang portò dall’India; la sera la piazza davanti ospita uno spettacolo di fontane.', 'Vieni verso sera e prosegui poi sul vicino viale Datang Everbright City.'],
    }, { spot: 'insta', price: level(1) }),
    P('shaanxi-history-museum', 'attraction', 34.225, 108.956, WARRIORS, 4.7, 21000, ['museums', 'history', 'art'], {
      ru: ['Исторический музей провинции Шэньси', 'Одно из лучших собраний древностей Китая: бронза, золото и фрески эпохи Тан, терракотовые фигурки.', 'Бесплатные билеты по брони разбирают быстро — бронируйте за несколько дней.'],
      en: ['Shaanxi History Museum', 'One of China’s finest collections of antiquities: bronzes, gold and Tang-era murals, terracotta figures.', 'The free booked tickets go fast — reserve a few days ahead.'],
      es: ['Museo de Historia de Shaanxi', 'Una de las mejores colecciones de antigüedades de China: bronces, oro y frescos Tang, figuras de terracota.', 'Las entradas gratuitas con reserva vuelan: reserva con días de antelación.'],
      de: ['Historisches Museum Shaanxi', 'Eine der besten Antikensammlungen Chinas: Bronzen, Gold und Wandmalereien der Tang-Zeit, Terrakottafiguren.', 'Die kostenlosen Tickets sind schnell weg – einige Tage vorher reservieren.'],
      fr: ['Musée d’histoire du Shaanxi', 'L’une des plus belles collections d’antiquités de Chine : bronzes, or et fresques Tang, figurines de terre cuite.', 'Les billets gratuits sur réservation partent vite : réservez quelques jours avant.'],
      it: ['Museo di storia dello Shaanxi', 'Una delle migliori collezioni di antichità della Cina: bronzi, oro e affreschi Tang, statuette di terracotta.', 'I biglietti gratuiti su prenotazione finiscono presto: prenota qualche giorno prima.'],
    }, { price: free }),
    P('small-wild-goose-pagoda', 'attraction', 34.24, 108.938, TOWER, 4.4, 7800, ['temples', 'history', 'unesco'], {
      ru: ['Малая пагода диких гусей', 'Пагода 707 года в тихом парке Сианьского музея; землетрясения отломили её верхушку, но она стоит больше 1300 лет.', 'Парк и музей бесплатные — хорошее место отдохнуть от толп.'],
      en: ['Small Wild Goose Pagoda', 'A pagoda of 707 in the quiet park of the Xi’an Museum; earthquakes broke off its top, but it has stood for over 1,300 years.', 'The park and museum are free — a good escape from the crowds.'],
      es: ['Pequeña Pagoda de la Oca Salvaje', 'Una pagoda del 707 en el tranquilo parque del Museo de Xi’an; los terremotos le quebraron la punta, pero lleva más de 1300 años en pie.', 'El parque y el museo son gratis: buen refugio frente a las multitudes.'],
      de: ['Kleine Wildganspagode', 'Eine Pagode von 707 im stillen Park des Xi’an-Museums; Erdbeben brachen ihre Spitze ab, doch sie steht seit über 1300 Jahren.', 'Park und Museum sind kostenlos – eine gute Flucht vor den Massen.'],
      fr: ['Petite pagode de l’Oie sauvage', 'Une pagode de 707 dans le parc paisible du musée de Xi’an ; des séismes ont brisé son sommet, mais elle tient depuis plus de 1 300 ans.', 'Parc et musée gratuits : un bon refuge loin des foules.'],
      it: ['Piccola Pagoda dell’Oca Selvatica', 'Una pagoda del 707 nel tranquillo parco del Museo di Xi’an; i terremoti ne hanno spezzato la cima, ma è in piedi da oltre 1300 anni.', 'Parco e museo sono gratuiti: un buon rifugio dalla folla.'],
    }, { spot: 'hidden', price: free }),
    P('huaqing-palace', 'attraction', 34.362, 109.211, FACE, 4.3, 14000, ['history', 'gardens', 'spa'], {
      ru: ['Дворец Хуацин', 'Танский дворец с горячими источниками у горы Лишань, связанный с историей императора Сюаньцзуна и красавицы Ян Гуйфэй.', 'Удобно совместить с Терракотовой армией — они по одну сторону от города.'],
      en: ['Huaqing Palace', 'A Tang hot-spring palace at the foot of Mount Li, tied to the story of Emperor Xuanzong and the beauty Yang Guifei.', 'Easy to combine with the Terracotta Army — they’re on the same side of the city.'],
      es: ['Palacio Huaqing', 'Un palacio Tang de aguas termales al pie del monte Li, ligado a la historia del emperador Xuanzong y la bella Yang Guifei.', 'Se combina fácil con los Guerreros de Terracota: están del mismo lado.'],
      de: ['Huaqing-Palast', 'Ein Tang-Thermalpalast am Fuß des Berges Li, verbunden mit der Geschichte von Kaiser Xuanzong und der Schönheit Yang Guifei.', 'Gut mit der Terrakotta-Armee kombinierbar – gleiche Seite der Stadt.'],
      fr: ['Palais Huaqing', 'Un palais thermal Tang au pied du mont Li, lié à l’histoire de l’empereur Xuanzong et de la belle Yang Guifei.', 'Facile à combiner avec l’armée de terre cuite, du même côté de la ville.'],
      it: ['Palazzo Huaqing', 'Un palazzo termale Tang ai piedi del monte Li, legato alla storia dell’imperatore Xuanzong e della bella Yang Guifei.', 'Si abbina all’Esercito di terracotta: stanno dallo stesso lato della città.'],
    }, { price: level(2) }),
    P('mount-huashan', 'nature', 34.475, 110.085, FACE, 4.7, 18000, ['mountains', 'hiking', 'adventure'], {
      ru: ['Гора Хуашань', 'Одна из пяти священных гор даосизма с отвесными гранитными пиками, крутыми лестницами и знаменитой «тропой из досок» над пропастью.', 'Поднимайтесь на канатной дороге; на тропу из досок выдают страховку, но это для тех, кто не боится высоты.'],
      en: ['Mount Huashan', 'One of Taoism’s five sacred mountains, with sheer granite peaks, steep stairways and the famous plank walk over the abyss.', 'Ride the cable car up; the plank walk comes with a harness, but it’s only for those with a head for heights.'],
      es: ['Monte Huashan', 'Una de las cinco montañas sagradas del taoísmo, con picos de granito verticales, escaleras empinadas y el famoso sendero de tablas sobre el abismo.', 'Sube en teleférico; en el sendero de tablas dan arnés, pero solo es para quien no tenga vértigo.'],
      de: ['Berg Huashan', 'Einer der fünf heiligen Berge des Taoismus mit senkrechten Granitgipfeln, steilen Treppen und dem berühmten Plankenweg über dem Abgrund.', 'Mit der Seilbahn hinauf; am Plankenweg gibt es einen Gurt, aber nur für Schwindelfreie.'],
      fr: ['Mont Huashan', 'L’une des cinq montagnes sacrées du taoïsme : pics de granit à pic, escaliers abrupts et célèbre chemin de planches au-dessus du vide.', 'Montez en téléphérique ; le chemin de planches se fait harnaché, mais seulement sans vertige.'],
      it: ['Monte Huashan', 'Uno dei cinque monti sacri del taoismo, con picchi di granito a strapiombo, scale ripide e il famoso sentiero di assi sul vuoto.', 'Sali in funivia; sul sentiero di assi c’è l’imbracatura, ma è solo per chi non soffre di vertigini.'],
    }, { spot: 'insta', price: level(3) }),
    P('datang-everbright-city', 'attraction', 34.212, 108.964, TOWER, 4.5, 23000, ['nightlife', 'photo', 'culture'], {
      ru: ['Аллея Датан Бусэчэн', 'Пешеходный бульвар к югу от Большой пагоды: вечером — огни, танские костюмы, уличные представления и танцы.', 'Приходите после заката — днём здесь почти пусто.'],
      en: ['Datang Everbright City', 'A pedestrian boulevard south of the Big Wild Goose Pagoda: in the evening, lights, Tang costumes, street shows and dancing.', 'Come after sunset — by day it’s almost empty.'],
      es: ['Datang Everbright City', 'Un bulevar peatonal al sur de la Gran Pagoda: de noche, luces, trajes Tang, espectáculos callejeros y baile.', 'Ve tras la puesta de sol: de día está casi vacío.'],
      de: ['Datang Everbright City', 'Ein Fußgängerboulevard südlich der Großen Wildganspagode: abends Lichter, Tang-Kostüme, Straßenshows und Tanz.', 'Nach Sonnenuntergang kommen – tagsüber ist es fast leer.'],
      fr: ['Datang Everbright City', 'Un boulevard piéton au sud de la Grande pagode : le soir, lumières, costumes Tang, spectacles de rue et danses.', 'Venez après le coucher du soleil : le jour, c’est presque vide.'],
      it: ['Datang Everbright City', 'Un viale pedonale a sud della Grande Pagoda: la sera luci, costumi Tang, spettacoli di strada e danze.', 'Vieni dopo il tramonto: di giorno è quasi vuoto.'],
    }, { spot: 'insta', price: free }),
    P('beilin-museum', 'attraction', 34.254, 108.952, FACE, 4.5, 8100, ['museums', 'art', 'history'], {
      ru: ['Музей «Лес стел» (Бэйлинь)', 'Собрание из тысяч каменных стел с текстами классиков и образцами каллиграфии великих мастеров за последние две тысячи лет.', 'Рядом улица Шуюаньмэнь с лавками кистей, туши и бумаги.'],
      en: ['Forest of Steles (Beilin Museum)', 'A collection of thousands of stone steles carved with the classics and calligraphy by the great masters over two thousand years.', 'Next door, Shuyuanmen street sells brushes, ink and paper.'],
      es: ['Bosque de Estelas (Museo Beilin)', 'Una colección de miles de estelas de piedra con los clásicos y caligrafía de los grandes maestros de dos mil años.', 'Al lado, la calle Shuyuanmen vende pinceles, tinta y papel.'],
      de: ['Stelenwald (Beilin-Museum)', 'Eine Sammlung Tausender Steinstelen mit Klassikertexten und Kalligrafie großer Meister aus zwei Jahrtausenden.', 'Nebenan verkauft die Shuyuanmen-Straße Pinsel, Tusche und Papier.'],
      fr: ['Forêt de stèles (musée Beilin)', 'Une collection de milliers de stèles gravées des classiques et de la calligraphie des grands maîtres sur deux mille ans.', 'À côté, la rue Shuyuanmen vend pinceaux, encre et papier.'],
      it: ['Foresta delle stele (Museo Beilin)', 'Una collezione di migliaia di stele di pietra con i classici e la calligrafia dei grandi maestri in duemila anni.', 'Accanto, via Shuyuanmen vende pennelli, inchiostro e carta.'],
    }, { price: level(1) }),
    P('muslim-quarter', 'food', 34.263, 108.94, TOWER, 4.3, 45000, ['food', 'streetfood', 'nightlife'], {
      ru: ['Мусульманский квартал (Хуэйминь-цзе)', 'Квартал народа хуэй за Барабанной башней: шашлык из баранины, жоу-цзя-мо, хурма в лепёшках, суп ангелу и сладости.', 'Самые вкусные лавки — в переулках в стороне от главной улицы.'],
      en: ['Muslim Quarter (Huimin Street)', 'The Hui quarter behind the Drum Tower: lamb skewers, roujiamo, persimmon cakes, yangrou paomo and sweets.', 'The best stalls are in the side lanes away from the main drag.'],
      es: ['Barrio musulmán (calle Huimin)', 'El barrio hui tras la Torre del Tambor: brochetas de cordero, roujiamo, pasteles de caqui, paomo de cordero y dulces.', 'Los mejores puestos están en las callejas laterales.'],
      de: ['Muslimviertel (Huimin-Straße)', 'Das Hui-Viertel hinter dem Trommelturm: Lammspieße, Roujiamo, Kakifladen, Paomo und Süßes.', 'Die besten Stände liegen in den Seitengassen abseits der Hauptstraße.'],
      fr: ['Quartier musulman (rue Huimin)', 'Le quartier hui derrière la tour du Tambour : brochettes d’agneau, roujiamo, galettes au kaki, paomo et douceurs.', 'Les meilleurs étals sont dans les ruelles latérales.'],
      it: ['Quartiere musulmano (via Huimin)', 'Il quartiere hui dietro la Torre del Tamburo: spiedini d’agnello, roujiamo, tortine di cachi, paomo e dolci.', 'I banchi migliori sono nei vicoli laterali.'],
    }, { spot: 'insta', price: level(1), menu: [
      ['Lamb skewers', undefined, 'шашлычки из баранины с зирой|lamb skewers with cumin|brochetas de cordero con comino|Lammspieße mit Kreuzkümmel|brochettes d’agneau au cumin|spiedini d’agnello al cumino'],
      ['Persimmon cake', undefined, 'жареная лепёшка из хурмы|fried persimmon cake|pastel frito de caqui|frittierter Kakifladen|galette de kaki frite|tortina fritta di cachi'],
    ] }),
    P('tongshengxiang', 'food', 34.261, 108.9405, TOWER, 4.2, 6900, ['food', 'history'], {
      ru: ['Туншэнсян (паомо)', 'Ресторан с 1920 года у Колокольной башни, знаменитый ян-жоу паомо — супом с бараниной, в который сами крошите лепёшку.', 'Крошите лепёшку как можно мельче — так её готовят правильно.'],
      en: ['Tongshengxiang (paomo)', 'A restaurant by the Bell Tower since 1920, famous for yangrou paomo — lamb soup into which you crumble flatbread yourself.', 'Break the bread as small as you can — that’s the proper way.'],
      es: ['Tongshengxiang (paomo)', 'Un restaurante junto a la Torre de la Campana desde 1920, famoso por el paomo de cordero, sopa en la que desmigas tú el pan.', 'Desmiga el pan lo más fino posible: así se hace bien.'],
      de: ['Tongshengxiang (Paomo)', 'Ein Restaurant am Glockenturm seit 1920, berühmt für Yangrou Paomo – Lammsuppe, in die man selbst Fladenbrot bröckelt.', 'Das Brot so klein wie möglich zerbröseln – so gehört es sich.'],
      fr: ['Tongshengxiang (paomo)', 'Un restaurant près de la tour de la Cloche depuis 1920, célèbre pour le paomo à l’agneau, soupe où l’on émiette soi-même la galette.', 'Émiettez la galette le plus finement possible : c’est la règle.'],
      it: ['Tongshengxiang (paomo)', 'Un ristorante vicino alla Torre della Campana dal 1920, famoso per il paomo d’agnello, zuppa in cui sbricioli tu la focaccia.', 'Sbriciola la focaccia il più fine possibile: è così che si fa.'],
    }, { price: level(1), menu: [
      ['Yangrou paomo', undefined, 'суп с бараниной и накрошенной лепёшкой|lamb soup with crumbled flatbread|sopa de cordero con pan desmigado|Lammsuppe mit zerbröseltem Fladenbrot|soupe d’agneau à la galette émiettée|zuppa d’agnello con focaccia sbriciolata'],
      ['Pickled garlic', undefined, 'маринованный чеснок к супу|pickled garlic on the side|ajos encurtidos|eingelegter Knoblauch|ail mariné|aglio sottaceto'],
    ] }),
    P('lao-sun-jia', 'food', 34.259, 108.962, TOWER, 4.2, 5400, ['food', 'history'], {
      ru: ['Лао Сунь Цзя', 'Ещё один старейший мастер паомо — с 1898 года — с говяжьим и бараньим супом в большом зале.', 'Сравните паомо здесь и в Туншэнсяне — у каждого свой бульон.'],
      en: ['Lao Sun Jia', 'Another veteran of paomo — since 1898 — serving beef and lamb versions in a big dining hall.', 'Compare the paomo here and at Tongshengxiang — each has its own broth.'],
      es: ['Lao Sun Jia', 'Otro veterano del paomo, desde 1898, con versiones de ternera y cordero en un gran comedor.', 'Compara el paomo de aquí y el de Tongshengxiang: cada uno tiene su caldo.'],
      de: ['Lao Sun Jia', 'Ein weiterer Paomo-Veteran – seit 1898 – mit Rind- und Lammvariante in einem großen Speisesaal.', 'Paomo hier und bei Tongshengxiang vergleichen – jeder hat seine Brühe.'],
      fr: ['Lao Sun Jia', 'Un autre vétéran du paomo, depuis 1898, au bœuf ou à l’agneau, dans une grande salle.', 'Comparez le paomo d’ici et celui de Tongshengxiang : chacun son bouillon.'],
      it: ['Lao Sun Jia', 'Un altro veterano del paomo, dal 1898, con versioni di manzo e agnello in una grande sala.', 'Confronta il paomo di qui e quello di Tongshengxiang: ognuno ha il suo brodo.'],
    }, { price: level(1), menu: [
      ['Beef paomo', undefined, 'говяжий суп с лепёшкой|beef soup with crumbled bread|sopa de ternera con pan desmigado|Rindersuppe mit Brot|soupe de bœuf à la galette|zuppa di manzo con focaccia'],
      ['Lamb paomo', undefined, 'бараний суп с лепёшкой|lamb soup with crumbled bread|sopa de cordero con pan desmigado|Lammsuppe mit Brot|soupe d’agneau à la galette|zuppa d’agnello con focaccia'],
    ] }),
    P('jia-san-guantang-bao', 'food', 34.263, 108.939, TOWER, 4.1, 7600, ['food', 'streetfood'], {
      ru: ['Цзя Сань (гуаньтан-бао)', 'Известная лавка Мусульманского квартала с паровыми пирожками с говядиной или бараниной и бульоном внутри.', 'Сначала надкусите и выпейте бульон, потом ешьте пирожок.'],
      en: ['Jia San (guantang bao)', 'A well-known Muslim Quarter shop with steamed buns of beef or lamb holding broth inside.', 'Bite, sip the broth first, then eat the bun.'],
      es: ['Jia San (guantang bao)', 'Una conocida tienda del barrio musulmán con bollitos al vapor de ternera o cordero rellenos de caldo.', 'Muerde, sorbe el caldo y luego come el bollito.'],
      de: ['Jia San (Guantang Bao)', 'Ein bekannter Laden im Muslimviertel mit gedämpften Teigtaschen mit Rind oder Lamm und Brühe innen.', 'Anbeißen, zuerst die Brühe trinken, dann essen.'],
      fr: ['Jia San (guantang bao)', 'Une adresse réputée du quartier musulman : petits pains vapeur au bœuf ou à l’agneau remplis de bouillon.', 'Croquez, buvez d’abord le bouillon, puis mangez.'],
      it: ['Jia San (guantang bao)', 'Un noto negozio del quartiere musulmano con panini al vapore di manzo o agnello ripieni di brodo.', 'Mordi, sorseggia prima il brodo, poi mangia.'],
    }, { price: level(1), menu: [
      ['Beef soup buns', undefined, 'пирожки с говядиной и бульоном|beef soup dumplings|bollitos de ternera con caldo|Rindfleisch-Suppenteigtaschen|petits pains à soupe au bœuf|ravioli in brodo di manzo'],
      ['Lamb soup buns', undefined, 'пирожки с бараниной и бульоном|lamb soup dumplings|bollitos de cordero con caldo|Lamm-Suppenteigtaschen|petits pains à soupe à l’agneau|ravioli in brodo d’agnello'],
    ] }),
    P('wei-jia-liangpi', 'food', 34.258, 108.945, WALL, 4.1, 6100, ['food', 'streetfood'], {
      ru: ['Вэй Цзя Лянпи', 'Сианьская сеть, где подают лянпи — холодную лапшу из пшеничного крахмала с чили-маслом и уксусом — и жоу-цзя-мо.', 'Классический обед по-сианьски: лянпи, жоу-цзя-мо и бутылка соды «Бинфэн».'],
      en: ['Wei Jia Liangpi', 'A Xi’an chain serving liangpi — cold wheat-starch noodles with chilli oil and vinegar — and roujiamo.', 'The classic Xi’an lunch: liangpi, roujiamo and a bottle of Bingfeng soda.'],
      es: ['Wei Jia Liangpi', 'Una cadena de Xi’an con liangpi, fideos fríos de almidón de trigo con aceite de chile y vinagre, y roujiamo.', 'El almuerzo clásico de Xi’an: liangpi, roujiamo y un refresco Bingfeng.'],
      de: ['Wei Jia Liangpi', 'Eine Kette aus Xi’an mit Liangpi – kalten Weizenstärkenudeln mit Chiliöl und Essig – und Roujiamo.', 'Das klassische Xi’an-Mittagessen: Liangpi, Roujiamo und eine Flasche Bingfeng-Limo.'],
      fr: ['Wei Jia Liangpi', 'Une chaîne de Xi’an servant le liangpi, nouilles froides d’amidon de blé à l’huile pimentée et au vinaigre, et le roujiamo.', 'Le déjeuner classique de Xi’an : liangpi, roujiamo et une limonade Bingfeng.'],
      it: ['Wei Jia Liangpi', 'Una catena di Xi’an con il liangpi, noodle freddi di amido di grano con olio piccante e aceto, e il roujiamo.', 'Il pranzo classico di Xi’an: liangpi, roujiamo e una bibita Bingfeng.'],
    }, { price: level(1), menu: [
      ['Liangpi', undefined, 'холодная лапша с чили-маслом|cold noodles with chilli oil|fideos fríos con aceite de chile|kalte Nudeln mit Chiliöl|nouilles froides à l’huile pimentée|noodle freddi con olio piccante'],
      ['Roujiamo', undefined, 'лепёшка с тушёной свининой|flatbread with braised pork|pan plano con cerdo guisado|Fladenbrot mit Schmorfleisch|galette au porc braisé|focaccia con maiale brasato'],
    ] }),
    P('de-fa-chang', 'food', 34.2615, 108.9425, TOWER, 4.1, 4300, ['food', 'history'], {
      ru: ['Дэфачан', 'Ресторан у Колокольной башни с 1936 года, знаменитый «банкетом из пельменей»: десятки видов цзяоцзы разной формы и начинки.', 'Берите банкет на компанию — так попробуете больше всего.'],
      en: ['De Fa Chang', 'A restaurant by the Bell Tower since 1936, famous for its “dumpling banquet”: dozens of jiaozi of different shapes and fillings.', 'Order the banquet as a group to try the most.'],
      es: ['De Fa Chang', 'Un restaurante junto a la Torre de la Campana desde 1936, famoso por su «banquete de empanadillas»: decenas de jiaozi distintos.', 'Pide el banquete en grupo para probar más.'],
      de: ['De Fa Chang', 'Ein Restaurant am Glockenturm seit 1936, berühmt für sein „Teigtaschen-Bankett“: Dutzende Jiaozi verschiedener Formen und Füllungen.', 'Das Bankett in der Gruppe bestellen, um am meisten zu probieren.'],
      fr: ['De Fa Chang', 'Un restaurant près de la tour de la Cloche depuis 1936, célèbre pour son « banquet de raviolis » : des dizaines de jiaozi de formes et garnitures différentes.', 'Prenez le banquet à plusieurs pour goûter un maximum.'],
      it: ['De Fa Chang', 'Un ristorante vicino alla Torre della Campana dal 1936, famoso per il «banchetto di ravioli»: decine di jiaozi di forme e ripieni diversi.', 'Ordina il banchetto in gruppo per assaggiarne di più.'],
    }, { price: level(2), menu: [
      ['Dumpling banquet', undefined, 'банкет из десятков видов пельменей|banquet of dozens of dumplings|banquete de decenas de empanadillas|Bankett aus Dutzenden Teigtaschen|banquet de dizaines de raviolis|banchetto di decine di ravioli'],
      ['Steamed jiaozi', undefined, 'паровые пельмени цзяоцзы|steamed jiaozi|jiaozi al vapor|gedämpfte Jiaozi|jiaozi vapeur|jiaozi al vapore'],
    ] }),
    P('fanji-roujiamo', 'food', 34.255, 108.944, WALL, 4.2, 5200, ['food', 'streetfood', 'history'], {
      ru: ['Фань Цзи (жоу-цзя-мо)', 'Старейшая лавка лачжи-жоу-цзя-мо — свинины, томлённой в специях, в хрустящей лепёшке — работает с первой половины XX века.', 'Попросите «чунь шоу» — постное мясо, или «фэй шоу» — с жирком.'],
      en: ['Fan Ji (roujiamo)', 'A long-running shop for lazhi roujiamo — pork stewed in spices inside a crisp flatbread — trading since the early 20th century.', 'Ask for lean (“chun shou”) or with a little fat (“fei shou”).'],
      es: ['Fan Ji (roujiamo)', 'Un histórico local de roujiamo lazhi, cerdo guisado con especias en pan crujiente, abierto desde principios del siglo XX.', 'Pide magro («chun shou») o con algo de grasa («fei shou»).'],
      de: ['Fan Ji (Roujiamo)', 'Ein traditionsreicher Laden für Lazhi-Roujiamo – in Gewürzen geschmortes Schweinefleisch im knusprigen Fladen – seit dem frühen 20. Jh.', 'Mager („chun shou“) oder mit etwas Fett („fei shou“) bestellen.'],
      fr: ['Fan Ji (roujiamo)', 'Une vieille échoppe de roujiamo lazhi, porc mijoté aux épices dans une galette croustillante, ouverte depuis le début du XXe siècle.', 'Demandez maigre (« chun shou ») ou un peu gras (« fei shou »).'],
      it: ['Fan Ji (roujiamo)', 'Una storica bottega di roujiamo lazhi, maiale stufato alle spezie in focaccia croccante, attiva dall’inizio del Novecento.', 'Chiedi magro («chun shou») o con un po’ di grasso («fei shou»).'],
    }, { price: level(1), menu: [
      ['Lazhi roujiamo', undefined, 'лепёшка с томлёной свининой|flatbread with spiced braised pork|pan con cerdo guisado en especias|Fladen mit gewürztem Schmorfleisch|galette au porc mijoté aux épices|focaccia con maiale stufato alle spezie'],
      ['Egg roujiamo', undefined, 'жоу-цзя-мо с яйцом|roujiamo with egg|roujiamo con huevo|Roujiamo mit Ei|roujiamo à l’œuf|roujiamo con uovo'],
    ] }),
    P('yongxingfang', 'food', 34.2645, 108.959, WALL, 4.2, 9700, ['food', 'streetfood', 'culture'], {
      ru: ['Юнсинфан', 'Ремесленно-гастрономический квартал у городской стены с закусками со всей провинции Шэньси; здесь пьют рисовое вино и разбивают чашки «на удачу».', 'Попробуйте «шуай вань цзю» — выпить и разбить глиняную чашку о стену.'],
      en: ['Yongxingfang', 'A food-and-craft quarter by the city wall with snacks from all over Shaanxi; here people drink rice wine and smash the bowls “for luck”.', 'Try “shuai wan jiu” — drink, then smash the clay bowl against the wall.'],
      es: ['Yongxingfang', 'Un barrio de comida y artesanía junto a la muralla con tapas de toda la provincia de Shaanxi; aquí se bebe vino de arroz y se rompen los cuencos «para la suerte».', 'Prueba el «shuai wan jiu»: bebe y estrella el cuenco de barro contra la pared.'],
      de: ['Yongxingfang', 'Ein Food- und Handwerksviertel an der Stadtmauer mit Snacks aus ganz Shaanxi; man trinkt Reiswein und zerschlägt die Schalen „für das Glück“.', '„Shuai Wan Jiu“ probieren – trinken und die Tonschale an die Wand werfen.'],
      fr: ['Yongxingfang', 'Un quartier gourmand et artisanal près des remparts, avec des en-cas de tout le Shaanxi ; on y boit du vin de riz et on brise les bols « pour la chance ».', 'Essayez le « shuai wan jiu » : buvez, puis brisez le bol en terre contre le mur.'],
      it: ['Yongxingfang', 'Un quartiere di cibo e artigianato vicino alle mura con snack da tutto lo Shaanxi; si beve vino di riso e si rompono le ciotole «per fortuna».', 'Prova lo «shuai wan jiu»: bevi e rompi la ciotola di terracotta contro il muro.'],
    }, { spot: 'insta', price: level(1), menu: [
      ['Shuai wan jiu', undefined, 'рисовое вино в глиняной чашке, которую разбивают|rice wine in a clay bowl you smash|vino de arroz en cuenco que se rompe|Reiswein in einer Tonschale zum Zerschlagen|vin de riz dans un bol qu’on brise|vino di riso in una ciotola da rompere'],
      ['Shaanxi snacks', undefined, 'закуски провинции Шэньси|Shaanxi regional snacks|tapas de Shaanxi|Snacks aus Shaanxi|en-cas du Shaanxi|snack dello Shaanxi'],
    ] }),
    P('sajinqiao', 'food', 34.265, 108.931, FACE, 4.3, 4900, ['food', 'streetfood'], {
      ru: ['Улица Сацзиньцяо', 'Мусульманская улица еды западнее Хуэйминь-цзе, куда ходят сами горожане: меньше туристов, ниже цены.', 'Ищите шашлык на углях и лапшу с бараниной — здесь их готовят при вас.'],
      en: ['Sajinqiao street', 'A Muslim food street west of Huimin Street where locals eat: fewer tourists, lower prices.', 'Look for charcoal lamb skewers and lamb noodles made in front of you.'],
      es: ['Calle Sajinqiao', 'Una calle de comida musulmana al oeste de Huimin donde comen los locales: menos turistas, precios más bajos.', 'Busca brochetas a la brasa y fideos de cordero hechos al momento.'],
      de: ['Sajinqiao-Straße', 'Eine muslimische Essstraße westlich der Huimin-Straße, wo Einheimische essen: weniger Touristen, niedrigere Preise.', 'Nach Holzkohle-Lammspießen und Lammnudeln suchen, frisch zubereitet.'],
      fr: ['Rue Sajinqiao', 'Une rue gourmande musulmane à l’ouest de Huimin, où mangent les habitants : moins de touristes, prix plus bas.', 'Cherchez les brochettes d’agneau au charbon et les nouilles à l’agneau minute.'],
      it: ['Via Sajinqiao', 'Una via del cibo musulmana a ovest di Huimin, dove mangiano i locali: meno turisti, prezzi più bassi.', 'Cerca spiedini d’agnello alla brace e noodle d’agnello fatti al momento.'],
    }, { spot: 'hidden', price: level(1), menu: [
      ['Charcoal lamb skewers', undefined, 'шашлык из баранины на углях|charcoal-grilled lamb skewers|brochetas de cordero a la brasa|Lammspieße vom Holzkohlegrill|brochettes d’agneau au charbon|spiedini d’agnello alla brace'],
      ['Lamb noodles', undefined, 'лапша с бараниной|noodles with lamb|fideos con cordero|Nudeln mit Lamm|nouilles à l’agneau|noodle con agnello'],
    ] }),
    P('tang-dynasty-show', 'food', 34.23, 108.955, TOWER, 4.2, 5800, ['food', 'culture', 'nightlife'], {
      ru: ['Ужин-шоу «Династия Тан»', 'Ресторан-театр, где с конца 1980-х показывают музыку и танцы эпохи Тан под ужин из пельменей или европейских блюд.', 'Бронируйте место ближе к сцене; можно взять билет только на шоу.'],
      en: ['Tang Dynasty dinner show', 'A theatre restaurant that since the late 1980s has staged Tang-era music and dance over a dumpling or Western dinner.', 'Book a seat near the stage; show-only tickets are available.'],
      es: ['Cena espectáculo «Dinastía Tang»', 'Un restaurante-teatro que desde finales de los ochenta presenta música y danza Tang con cena de empanadillas u occidental.', 'Reserva cerca del escenario; hay entradas solo para el espectáculo.'],
      de: ['Dinnershow „Tang-Dynastie“', 'Ein Theaterrestaurant, das seit den späten 1980ern Musik und Tanz der Tang-Zeit zu einem Teigtaschen- oder westlichen Abendessen zeigt.', 'Einen Platz nahe der Bühne buchen; es gibt auch reine Showtickets.'],
      fr: ['Dîner-spectacle « dynastie Tang »', 'Un restaurant-théâtre qui présente depuis la fin des années 1980 musique et danses Tang autour d’un dîner de raviolis ou occidental.', 'Réservez près de la scène ; billets spectacle seul possibles.'],
      it: ['Cena spettacolo «Dinastia Tang»', 'Un ristorante-teatro che dalla fine degli anni Ottanta propone musica e danze Tang con cena di ravioli o occidentale.', 'Prenota vicino al palco; ci sono biglietti solo spettacolo.'],
    }, { price: level(3), menu: [
      ['Dumpling dinner', undefined, 'ужин из пельменей|dumpling dinner|cena de empanadillas|Teigtaschen-Abendessen|dîner de raviolis|cena di ravioli'],
      ['Show only', undefined, 'билет только на шоу|show-only ticket|entrada solo espectáculo|nur Show|spectacle seul|solo spettacolo'],
    ] }),
  ],
  routes: [
    D(['terracotta-army', 'huaqing-palace', 'de-fa-chang', 'bell-tower', 'drum-tower', 'great-mosque', 'jia-san-guantang-bao', 'muslim-quarter'],
      'Терракотовая армия, Колокольная башня и Мусульманский квартал|The Terracotta Army, the Bell Tower and the Muslim Quarter|Guerreros de Terracota, Torre de la Campana y barrio musulmán|Terrakotta-Armee, Glockenturm und Muslimviertel|Armée de terre cuite, tour de la Cloche et quartier musulman|Esercito di terracotta, Torre della Campana e quartiere musulmano'),
    D(['city-wall', 'beilin-museum', 'fanji-roujiamo', 'small-wild-goose-pagoda', 'shaanxi-history-museum', 'big-wild-goose-pagoda', 'tang-dynasty-show', 'datang-everbright-city'],
      'На велосипеде по стене, пагоды и танский вечер|Cycling the wall, the pagodas and a Tang evening|En bici por la muralla, las pagodas y una noche Tang|Mit dem Rad auf der Mauer, Pagoden und ein Tang-Abend|À vélo sur les remparts, les pagodes et une soirée Tang|In bici sulle mura, le pagode e una serata Tang'),
    D(['tongshengxiang', 'mount-huashan', 'yongxingfang', 'sajinqiao'],
      'Гора Хуашань и вечер в квартале еды|Mount Huashan and an evening food crawl|El monte Huashan y una noche de tapas|Berg Huashan und ein abendlicher Food-Bummel|Le mont Huashan et une soirée gourmande|Il monte Huashan e una serata di street food'),
  ],
};

export default pack;
