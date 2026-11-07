import type { CityPack } from '../types';
import { free, level, makeDay, makePlace } from './_kit.ts';

const P = makePlace('suzhou');
const D = makeDay('suzhou');
const CANAL = '0R2rHjjKWxM';
const GARDEN = 'NWmqsTVPw1I';
const HOUSES = 'esWU7m1_5mo';
const AERIAL = 'iiIIpAqE2Ao';
const TOWN = 'qqLUhlev8j4';

const pack: CityPack = {
  country: 'CN',
  city: 'suzhou',
  places: [
    P('humble-administrators-garden', 'nature', 31.324, 120.629, AERIAL, 4.6, 39000, ['gardens', 'unesco', 'history'], {
      ru: ['Сад Скромного управителя (Чжочжэн)', 'Крупнейший классический сад Сучжоу (1509) — пруды, павильоны, мостики и лотосы; объект ЮНЕСКО.', 'Приходите к открытию: к 10 утра дорожки заполняются группами.'],
      en: ['Humble Administrator’s Garden (Zhuozheng)', 'Suzhou’s largest classical garden (1509) — ponds, pavilions, little bridges and lotuses; a UNESCO site.', 'Come at opening: by 10 am the paths fill with groups.'],
      es: ['Jardín del Administrador Humilde (Zhuozheng)', 'El mayor jardín clásico de Suzhou (1509): estanques, pabellones, puentecillos y lotos; Patrimonio UNESCO.', 'Ve a la apertura: a las 10 los senderos se llenan de grupos.'],
      de: ['Garten des bescheidenen Beamten (Zhuozheng)', 'Suzhous größter klassischer Garten (1509) – Teiche, Pavillons, Brückchen und Lotus; UNESCO-Welterbe.', 'Zur Öffnung kommen: ab 10 Uhr füllen sich die Wege mit Gruppen.'],
      fr: ['Jardin de l’Humble Administrateur (Zhuozheng)', 'Le plus grand jardin classique de Suzhou (1509) : étangs, pavillons, petits ponts et lotus ; site UNESCO.', 'Venez à l’ouverture : dès 10 h, les allées se remplissent de groupes.'],
      it: ['Giardino dell’Umile Amministratore (Zhuozheng)', 'Il più grande giardino classico di Suzhou (1509): stagni, padiglioni, ponticelli e fiori di loto; sito UNESCO.', 'Vieni all’apertura: alle 10 i vialetti si riempiono di gruppi.'],
    }, { spot: 'insta', price: level(2) }),
    P('lingering-garden', 'nature', 31.317, 120.59, GARDEN, 4.6, 21000, ['gardens', 'unesco', 'architecture'], {
      ru: ['Сад Люйюань («Сад, где медлят»)', 'Сад династии Мин с крытыми галереями, окнами-рамами и знаменитым камнем «Облачная вершина» высотой больше 6 м.', 'Ищите «рамы» в стенах — каждое окно обрамляет свою картину сада.'],
      en: ['Lingering Garden (Liuyuan)', 'A Ming-dynasty garden of covered galleries, framed windows and the famous “Cloud-Capped Peak” rock over 6 m tall.', 'Look for the window frames — each one frames its own picture of the garden.'],
      es: ['Jardín de la Permanencia (Liuyuan)', 'Un jardín Ming de galerías cubiertas, ventanas-marco y la famosa roca «Pico Coronado de Nubes» de más de 6 m.', 'Busca las ventanas: cada una enmarca su propio cuadro del jardín.'],
      de: ['Garten des Verweilens (Liuyuan)', 'Ein Ming-Garten mit überdachten Galerien, Rahmenfenstern und dem berühmten über 6 m hohen Fels „Wolkengipfel“.', 'Auf die Fensterrahmen achten – jedes rahmt ein eigenes Gartenbild.'],
      fr: ['Jardin persistant (Liuyuan)', 'Un jardin Ming aux galeries couvertes, fenêtres-cadres et au célèbre rocher « Pic couronné de nuages » de plus de 6 m.', 'Cherchez les fenêtres : chacune encadre son tableau du jardin.'],
      it: ['Giardino del Persistere (Liuyuan)', 'Un giardino Ming di gallerie coperte, finestre-cornice e la famosa roccia «Picco coronato di nubi» alta oltre 6 m.', 'Cerca le finestre: ognuna incornicia il suo quadro del giardino.'],
    }, { spot: 'insta', price: level(1) }),
    P('master-of-nets-garden', 'nature', 31.299, 120.631, GARDEN, 4.6, 14000, ['gardens', 'unesco'], {
      ru: ['Сад Мастера сетей (Ваншиюань)', 'Самый маленький и самый изящный из классических садов: всё вокруг одного пруда; в тёплый сезон здесь бывают вечерние программы с традиционной музыкой.', 'Расписание вечерних программ меняется — уточните его на месте или на сайте сада.'],
      en: ['Master of the Nets Garden (Wangshi)', 'The smallest and most refined classical garden, all around one pond; in the warm season it hosts evening programmes of traditional music.', 'Evening programme schedules change — check on site or on the garden’s website.'],
      es: ['Jardín del Maestro de las Redes (Wangshi)', 'El más pequeño y refinado de los jardines clásicos, todo en torno a un estanque; en temporada cálida hay programas nocturnos de música tradicional.', 'Los horarios nocturnos cambian: consúltalos allí o en la web del jardín.'],
      de: ['Garten des Meisters der Netze (Wangshi)', 'Der kleinste und feinste der klassischen Gärten, ganz um einen Teich; in der warmen Saison gibt es Abendprogramme mit traditioneller Musik.', 'Die Abendtermine ändern sich – vor Ort oder auf der Website des Gartens nachsehen.'],
      fr: ['Jardin du Maître des filets (Wangshi)', 'Le plus petit et le plus raffiné des jardins classiques, tout autour d’un étang ; à la belle saison, programmes du soir de musique traditionnelle.', 'Les horaires du soir changent : vérifiez sur place ou sur le site du jardin.'],
      it: ['Giardino del Maestro delle Reti (Wangshi)', 'Il più piccolo e raffinato dei giardini classici, tutto attorno a uno stagno; nella stagione calda ci sono programmi serali di musica tradizionale.', 'Gli orari serali cambiano: verifica sul posto o sul sito del giardino.'],
    }, { spot: 'hidden', price: level(1) }),
    P('suzhou-museum', 'attraction', 31.323, 120.628, AERIAL, 4.7, 22000, ['museums', 'architecture', 'art'], {
      ru: ['Сучжоуский музей', 'Здание И. М. Пэя (2006) — белые стены, серые геометрические крыши и сад-«картина» из каменных пластин — с коллекцией искусства Сучжоу.', 'Вход бесплатный по брони с паспортом; бронируйте за несколько дней.'],
      en: ['Suzhou Museum', 'I. M. Pei’s building (2006) — white walls, grey geometric roofs and a “painting” garden of stone slabs — with a collection of Suzhou art.', 'Free with a booking and passport; reserve a few days ahead.'],
      es: ['Museo de Suzhou', 'El edificio de I. M. Pei (2006), muros blancos, tejados geométricos grises y un jardín-«pintura» de lajas, con una colección de arte de Suzhou.', 'Gratis con reserva y pasaporte; reserva con días de antelación.'],
      de: ['Suzhou-Museum', 'I. M. Peis Bau (2006) – weiße Wände, graue geometrische Dächer und ein „Gemälde“-Garten aus Steinplatten – mit Suzhou-Kunst.', 'Eintritt frei mit Reservierung und Reisepass; einige Tage vorher buchen.'],
      fr: ['Musée de Suzhou', 'Le bâtiment d’I. M. Pei (2006) — murs blancs, toits gris géométriques et jardin-« peinture » de dalles de pierre — avec une collection d’art de Suzhou.', 'Gratuit sur réservation avec passeport ; réservez quelques jours avant.'],
      it: ['Museo di Suzhou', 'L’edificio di I. M. Pei (2006) — muri bianchi, tetti grigi geometrici e un giardino-«dipinto» di lastre di pietra — con una collezione d’arte di Suzhou.', 'Gratuito con prenotazione e passaporto; prenota qualche giorno prima.'],
    }, { spot: 'insta', price: free }),
    P('pingjiang-road', 'attraction', 31.315, 120.633, CANAL, 4.5, 26000, ['oldtown', 'photo'], {
      ru: ['Улица Пинцзян', 'Старинная улица вдоль канала с белыми домами, мостиками, чайными и лавками — одна из самых сохранных в старом городе.', 'Вечером здесь спокойнее, а фонари отражаются в воде.'],
      en: ['Pingjiang Road', 'An old canal-side street of whitewashed houses, little bridges, teahouses and shops — one of the best preserved in the old town.', 'It’s calmer in the evening, with lanterns reflected in the water.'],
      es: ['Calle Pingjiang', 'Una antigua calle junto al canal con casas encaladas, puentecillos, casas de té y tiendas, de las mejor conservadas.', 'Al anochecer es más tranquila y los farolillos se reflejan en el agua.'],
      de: ['Pingjiang Road', 'Eine alte Kanalstraße mit weißen Häusern, Brückchen, Teehäusern und Läden – eine der besterhaltenen der Altstadt.', 'Abends ruhiger, Laternen spiegeln sich im Wasser.'],
      fr: ['Rue Pingjiang', 'Une vieille rue au bord du canal, maisons blanchies, petits ponts, maisons de thé et boutiques, parmi les mieux préservées.', 'Plus calme le soir, lanternes reflétées dans l’eau.'],
      it: ['Pingjiang Road', 'Un’antica via sul canale con case imbiancate, ponticelli, case da tè e botteghe, tra le meglio conservate.', 'La sera è più tranquilla, con le lanterne riflesse nell’acqua.'],
    }, { spot: 'insta', price: free }),
    P('shantang-street', 'attraction', 31.322, 120.603, HOUSES, 4.3, 18000, ['oldtown', 'streetfood', 'shopping'], {
      ru: ['Улица Шаньтан', '«Первая улица Сучжоу», проложенная в IX веке вдоль канала к холму Тигра; вечером горят красные фонари и плавают лодки.', 'Прокатитесь на лодке по каналу Шаньтан вечером.'],
      en: ['Shantang Street', '“Suzhou’s first street”, laid out in the 9th century along a canal to Tiger Hill; at night red lanterns glow and boats glide past.', 'Take a boat along the Shantang canal in the evening.'],
      es: ['Calle Shantang', 'La «primera calle de Suzhou», trazada en el siglo IX junto a un canal hacia la Colina del Tigre; de noche brillan farolillos rojos y pasan barcas.', 'Da un paseo en barca por el canal de Shantang al anochecer.'],
      de: ['Shantang-Straße', '„Suzhous erste Straße“, im 9. Jh. entlang eines Kanals zum Tigerhügel angelegt; abends leuchten rote Laternen, Boote gleiten vorbei.', 'Abends mit dem Boot über den Shantang-Kanal fahren.'],
      fr: ['Rue Shantang', 'La « première rue de Suzhou », tracée au IXe siècle le long d’un canal vers la colline du Tigre ; le soir, lanternes rouges et barques.', 'Faites un tour en barque sur le canal de Shantang le soir.'],
      it: ['Via Shantang', 'La «prima via di Suzhou», tracciata nel IX secolo lungo un canale fino alla Collina della Tigre; di sera lanterne rosse e barche.', 'Fai un giro in barca sul canale di Shantang la sera.'],
    }, { spot: 'insta', price: free }),
    P('tiger-hill', 'attraction', 31.337, 120.578, HOUSES, 4.4, 17000, ['history', 'temples', 'gardens'], {
      ru: ['Холм Тигра', 'Холм с «падающей» пагодой Юньянь 961 года — она наклонена больше чем на 3 градуса — и легендарной гробницей правителя У.', 'Пагода «падает» уже больше тысячи лет — её удерживают укреплённым фундаментом.'],
      en: ['Tiger Hill', 'A hill with the leaning Yunyan Pagoda of 961 — tilted more than 3 degrees — and the legendary tomb of the king of Wu.', 'The pagoda has been “falling” for over a thousand years — a reinforced base holds it.'],
      es: ['Colina del Tigre', 'Una colina con la inclinada pagoda Yunyan del 961, más de 3 grados, y la legendaria tumba del rey de Wu.', 'La pagoda lleva más de mil años «cayéndose»: la sujeta un cimiento reforzado.'],
      de: ['Tigerhügel', 'Ein Hügel mit der schiefen Yunyan-Pagode von 961 – über 3 Grad geneigt – und dem legendären Grab des Königs von Wu.', 'Die Pagode „fällt“ seit über tausend Jahren – ein verstärktes Fundament hält sie.'],
      fr: ['Colline du Tigre', 'Une colline avec la pagode penchée de Yunyan (961), inclinée de plus de 3 degrés, et le tombeau légendaire du roi de Wu.', 'La pagode « tombe » depuis plus de mille ans : des fondations renforcées la tiennent.'],
      it: ['Collina della Tigre', 'Una collina con la pagoda pendente di Yunyan del 961, inclinata di oltre 3 gradi, e la leggendaria tomba del re di Wu.', 'La pagoda «cade» da oltre mille anni: la regge una fondazione rinforzata.'],
    }, { price: level(1) }),
    P('lion-grove-garden', 'nature', 31.323, 120.626, GARDEN, 4.4, 16000, ['gardens', 'unesco'], {
      ru: ['Сад Львиной рощи', 'Сад 1342 года с огромным лабиринтом из пористых камней озера Тайху, напоминающих львов; в нём бывал император Цяньлун.', 'Детям нравится лабиринт — дорожки водят по кругу через гроты.'],
      en: ['Lion Grove Garden', 'A garden of 1342 with a huge maze of porous Taihu rocks said to resemble lions; the Qianlong emperor visited it.', 'Kids love the maze — paths loop through grottoes.'],
      es: ['Jardín del Bosque del León', 'Un jardín de 1342 con un enorme laberinto de rocas porosas del lago Taihu que recuerdan leones; lo visitó el emperador Qianlong.', 'A los niños les encanta el laberinto: los senderos dan vueltas por grutas.'],
      de: ['Löwenwaldgarten', 'Ein Garten von 1342 mit riesigem Labyrinth aus porösen Taihu-Steinen, die Löwen ähneln sollen; Kaiser Qianlong besuchte ihn.', 'Kinder lieben das Labyrinth – die Wege führen durch Grotten im Kreis.'],
      fr: ['Jardin de la Forêt du lion', 'Un jardin de 1342 avec un immense labyrinthe de pierres poreuses du lac Taihu évoquant des lions ; l’empereur Qianlong le visita.', 'Les enfants adorent le labyrinthe : les sentiers tournent dans les grottes.'],
      it: ['Giardino del Boschetto del Leone', 'Un giardino del 1342 con un enorme labirinto di rocce porose del lago Taihu simili a leoni; lo visitò l’imperatore Qianlong.', 'Ai bambini piace il labirinto: i sentieri girano tra le grotte.'],
    }, { price: level(1) }),
    P('hanshan-temple', 'attraction', 31.311, 120.566, HOUSES, 4.2, 9800, ['temples', 'history'], {
      ru: ['Храм Ханьшань', 'Буддийский храм у Кленового моста, прославленный стихотворением Чжан Цзи «Ночная стоянка у Кленового моста» с колоколом в полночь.', 'В новогоднюю ночь здесь бьют в колокол 108 раз.'],
      en: ['Hanshan Temple', 'A Buddhist temple by Maple Bridge, made famous by Zhang Ji’s poem “Night Mooring by Maple Bridge” and its midnight bell.', 'On New Year’s Eve the bell is struck 108 times.'],
      es: ['Templo Hanshan', 'Un templo budista junto al Puente del Arce, famoso por el poema de Zhang Ji «Anclado de noche junto al Puente del Arce» y su campana de medianoche.', 'En Nochevieja la campana suena 108 veces.'],
      de: ['Hanshan-Tempel', 'Ein buddhistischer Tempel an der Ahornbrücke, berühmt durch Zhang Jis Gedicht „Nachts vor Anker an der Ahornbrücke“ und seine Mitternachtsglocke.', 'In der Silvesternacht wird die Glocke 108-mal geschlagen.'],
      fr: ['Temple Hanshan', 'Un temple bouddhiste près du pont des Érables, rendu célèbre par le poème de Zhang Ji « Mouillage nocturne au pont des Érables » et sa cloche de minuit.', 'La nuit du Nouvel An, on frappe la cloche 108 fois.'],
      it: ['Tempio Hanshan', 'Un tempio buddhista vicino al Ponte degli Aceri, reso celebre dalla poesia di Zhang Ji «Ormeggio notturno al Ponte degli Aceri» e dalla sua campana di mezzanotte.', 'A Capodanno la campana suona 108 volte.'],
    }, { price: level(1) }),
    P('tongli', 'attraction', 31.16, 120.72, TOWN, 4.4, 12000, ['oldtown', 'photo'], {
      ru: ['Водный городок Тунли', 'Городок на островах между каналами с 49 старыми мостиками и садом Туйсы (ЮНЕСКО).', 'Пройдите через три моста — по местному обычаю это приносит счастье.'],
      en: ['Tongli water town', 'A town on islands between canals with 49 old bridges and the Tuisi Garden (UNESCO).', 'Walk across the Three Bridges — local custom says it brings happiness.'],
      es: ['Pueblo de agua de Tongli', 'Un pueblo sobre islas entre canales con 49 viejos puentes y el Jardín Tuisi (UNESCO).', 'Cruza los Tres Puentes: la costumbre dice que trae felicidad.'],
      de: ['Wasserstadt Tongli', 'Eine Stadt auf Inseln zwischen Kanälen mit 49 alten Brücken und dem Tuisi-Garten (UNESCO).', 'Über die Drei Brücken gehen – das soll Glück bringen.'],
      fr: ['Bourg d’eau de Tongli', 'Un bourg sur des îles entre les canaux, avec 49 vieux ponts et le jardin Tuisi (UNESCO).', 'Traversez les Trois Ponts : la coutume dit que cela porte bonheur.'],
      it: ['Città d’acqua di Tongli', 'Una cittadina su isole tra i canali con 49 vecchi ponti e il Giardino Tuisi (UNESCO).', 'Attraversa i Tre Ponti: l’usanza dice che porta felicità.'],
    }, { spot: 'insta', price: level(2) }),
    P('zhouzhuang', 'attraction', 31.117, 120.847, TOWN, 4.2, 13000, ['oldtown', 'photo'], {
      ru: ['Водный городок Чжоучжуан', 'Самый известный водный город Цзяннани с парными мостами Шуанцяо, домами богатых купцов и лодочниками-певцами.', 'Приезжайте к вечеру, когда уходят группы и зажигаются фонари.'],
      en: ['Zhouzhuang water town', 'The best-known water town of Jiangnan, with the paired Twin Bridges, wealthy merchants’ houses and singing boatmen.', 'Arrive towards evening, when the groups leave and lanterns come on.'],
      es: ['Pueblo de agua de Zhouzhuang', 'El pueblo de agua más famoso de Jiangnan, con los Puentes Gemelos, casas de ricos mercaderes y barqueros que cantan.', 'Llega al atardecer, cuando se van los grupos y se encienden los farolillos.'],
      de: ['Wasserstadt Zhouzhuang', 'Die bekannteste Wasserstadt Jiangnans mit den Zwillingsbrücken, Häusern reicher Kaufleute und singenden Bootsleuten.', 'Gegen Abend kommen, wenn die Gruppen gehen und die Laternen angehen.'],
      fr: ['Bourg d’eau de Zhouzhuang', 'Le bourg d’eau le plus célèbre du Jiangnan, avec ses ponts jumeaux, maisons de riches marchands et bateliers chanteurs.', 'Arrivez en fin de journée, quand les groupes partent et les lanternes s’allument.'],
      it: ['Città d’acqua di Zhouzhuang', 'La città d’acqua più famosa del Jiangnan, con i Ponti Gemelli, case di ricchi mercanti e barcaioli che cantano.', 'Arriva verso sera, quando partono i gruppi e si accendono le lanterne.'],
    }, { price: level(2) }),
    P('panmen-gate', 'attraction', 31.293, 120.608, CANAL, 4.4, 6200, ['history', 'architecture'], {
      ru: ['Ворота Паньмэнь', 'Единственные сохранившиеся в Китае водно-сухопутные городские ворота (1351): проход для людей и шлюз для лодок рядом.', 'Рядом пагода Жуйгуан и горбатый мост Учэнь — тихий уголок старого города.'],
      en: ['Panmen Gate', 'China’s only surviving combined land-and-water city gate (1351): a passage for people with a lock for boats beside it.', 'Nearby are Ruiguang Pagoda and the humpbacked Wumen Bridge — a quiet corner of the old town.'],
      es: ['Puerta Panmen', 'La única puerta de ciudad terrestre y acuática conservada en China (1351): paso para personas y esclusa para barcas al lado.', 'Cerca están la pagoda Ruiguang y el puente jorobado Wumen: un rincón tranquilo.'],
      de: ['Panmen-Tor', 'Chinas einziges erhaltenes kombiniertes Land- und Wassertor (1351): Durchgang für Menschen, daneben eine Schleuse für Boote.', 'In der Nähe die Ruiguang-Pagode und die Wumen-Buckelbrücke – eine stille Ecke der Altstadt.'],
      fr: ['Porte Panmen', 'La seule porte de ville terrestre et fluviale conservée en Chine (1351) : passage piéton et écluse pour bateaux côte à côte.', 'Tout près, la pagode Ruiguang et le pont en dos d’âne Wumen : un coin paisible.'],
      it: ['Porta Panmen', 'L’unica porta cittadina di terra e d’acqua conservata in Cina (1351): passaggio pedonale e chiusa per le barche accanto.', 'Vicino la pagoda Ruiguang e il ponte a schiena d’asino Wumen: un angolo tranquillo.'],
    }, { spot: 'hidden', price: level(1) }),
    P('song-he-lou', 'food', 31.311, 120.623, HOUSES, 4.2, 6800, ['food', 'history'], {
      ru: ['Сунхэлоу', 'Знаменитый ресторан сучжоуской кухни на улице Гуаньцянь, ведущий историю с XVIII века; главное блюдо — окунь-«белка» в кисло-сладком соусе.', 'Рыбу подают целиком — закажите на двоих-троих.'],
      en: ['Songhelou', 'A famous Suzhou-cuisine restaurant on Guanqian Street tracing its history to the 18th century; the star is “squirrel” mandarin fish in sweet-and-sour sauce.', 'The fish comes whole — order it for two or three.'],
      es: ['Songhelou', 'Un famoso restaurante de cocina de Suzhou en la calle Guanqian con historia desde el siglo XVIII; su plato estrella es el pez mandarín «ardilla» agridulce.', 'El pescado llega entero: pídelo para dos o tres.'],
      de: ['Songhelou', 'Ein berühmtes Suzhou-Restaurant in der Guanqian-Straße mit Geschichte seit dem 18. Jh.; der Star ist „Eichhörnchen“-Mandarinfisch süßsauer.', 'Der Fisch kommt im Ganzen – für zwei oder drei bestellen.'],
      fr: ['Songhelou', 'Un célèbre restaurant de cuisine de Suzhou rue Guanqian, dont l’histoire remonte au XVIIIe siècle ; la vedette est la perche mandarine « écureuil » aigre-douce.', 'Le poisson arrive entier : pour deux ou trois.'],
      it: ['Songhelou', 'Un famoso ristorante di cucina di Suzhou in via Guanqian con una storia dal XVIII secolo; il piatto forte è il pesce mandarino «scoiattolo» in agrodolce.', 'Il pesce arriva intero: ordinalo per due o tre.'],
    }, { price: level(2), menu: [
      ['Squirrel mandarin fish', undefined, 'окунь-«белка» в кисло-сладком соусе|“squirrel” mandarin fish in sweet-and-sour sauce|pez mandarín «ardilla» agridulce|„Eichhörnchen“-Mandarinfisch süßsauer|perche mandarine « écureuil » aigre-douce|pesce mandarino «scoiattolo» in agrodolce'],
      ['Braised pork', undefined, 'тушёная свинина по-сучжоуски|Suzhou-style braised pork|cerdo guisado de Suzhou|Schmorfleisch nach Suzhou-Art|porc braisé de Suzhou|maiale brasato alla Suzhou'],
    ] }),
    P('de-yue-lou', 'food', 31.3115, 120.6215, HOUSES, 4.1, 4300, ['food', 'history'], {
      ru: ['Дэюэлоу', 'Старинный ресторан сучжоуской кухни на улице Гуаньцянь: речная рыба, креветки и сезонные блюда Цзяннани.', 'Осенью закажите блюда с мохнаторуким крабом.'],
      en: ['Deyuelou', 'A long-established Suzhou-cuisine restaurant on Guanqian Street: river fish, shrimp and seasonal Jiangnan dishes.', 'In autumn order the hairy-crab dishes.'],
      es: ['Deyuelou', 'Un veterano restaurante de cocina de Suzhou en la calle Guanqian: pescado de río, gambas y platos de temporada de Jiangnan.', 'En otoño pide los platos de cangrejo peludo.'],
      de: ['Deyuelou', 'Ein alteingesessenes Suzhou-Restaurant in der Guanqian-Straße: Flussfisch, Garnelen und saisonale Jiangnan-Gerichte.', 'Im Herbst die Wollhandkrabben-Gerichte bestellen.'],
      fr: ['Deyuelou', 'Un vieux restaurant de cuisine de Suzhou rue Guanqian : poisson de rivière, crevettes et plats de saison du Jiangnan.', 'À l’automne, commandez les plats au crabe chinois.'],
      it: ['Deyuelou', 'Uno storico ristorante di cucina di Suzhou in via Guanqian: pesce di fiume, gamberi e piatti di stagione del Jiangnan.', 'In autunno ordina i piatti di granchio cinese.'],
    }, { price: level(2), menu: [
      ['River shrimp', undefined, 'речные креветки|river shrimp|gambas de río|Flussgarnelen|crevettes de rivière|gamberi di fiume'],
      ['Hairy crab (autumn)', undefined, 'мохнаторукий краб (осенью)|hairy crab (autumn)|cangrejo peludo (otoño)|Wollhandkrabbe (Herbst)|crabe chinois (automne)|granchio cinese (autunno)'],
    ] }),
    P('tong-de-xing', 'food', 31.303, 120.628, CANAL, 4.3, 5100, ['food'], {
      ru: ['Тундэсин', 'Лапшичная сучжоуской лапши у улицы Шицюань: тонкая лапша в прозрачном или тёмном бульоне с отдельными добавками.', 'Добавки подают на отдельных тарелочках — выбирайте 2–3 вида.'],
      en: ['Tongdexing', 'A Suzhou-noodle shop near Shiquan Street: fine noodles in clear or dark broth with toppings on the side.', 'Toppings come on little plates — pick two or three.'],
      es: ['Tongdexing', 'Un local de fideos de Suzhou cerca de la calle Shiquan: fideos finos en caldo claro u oscuro con acompañamientos aparte.', 'Los acompañamientos llegan en platitos: elige dos o tres.'],
      de: ['Tongdexing', 'Ein Suzhou-Nudelladen nahe der Shiquan-Straße: feine Nudeln in klarer oder dunkler Brühe, Toppings extra.', 'Toppings kommen auf Tellerchen – zwei oder drei wählen.'],
      fr: ['Tongdexing', 'Une échoppe de nouilles de Suzhou près de la rue Shiquan : nouilles fines en bouillon clair ou foncé, garnitures à part.', 'Les garnitures arrivent en coupelles : choisissez-en deux ou trois.'],
      it: ['Tongdexing', 'Un locale di noodle di Suzhou vicino a via Shiquan: noodle sottili in brodo chiaro o scuro, condimenti a parte.', 'I condimenti arrivano in piattini: scegline due o tre.'],
    }, { price: level(1), menu: [
      ['Suzhou noodles in clear broth', undefined, 'лапша в прозрачном бульоне|noodles in clear broth|fideos en caldo claro|Nudeln in klarer Brühe|nouilles en bouillon clair|noodle in brodo chiaro'],
      ['Braised pork topping', undefined, 'добавка — тушёная свинина|braised pork topping|acompañamiento de cerdo guisado|Topping Schmorfleisch|garniture de porc braisé|condimento di maiale brasato'],
    ] }),
    P('zhu-hong-xing', 'food', 31.31, 120.615, CANAL, 4.1, 4600, ['food', 'history'], {
      ru: ['Чжу Хунсин', 'Лапшичная с 1938 года, где сучжоуцы завтракают лапшой с томлёной свининой.', 'Утренняя лапша — местный ритуал; приходите до 9 утра.'],
      en: ['Zhu Hongxing', 'A noodle house since 1938 where Suzhou people breakfast on noodles with braised pork.', 'Morning noodles are a local ritual; come before 9 am.'],
      es: ['Zhu Hongxing', 'Una casa de fideos desde 1938 donde los de Suzhou desayunan fideos con cerdo guisado.', 'Los fideos del desayuno son un ritual local; ve antes de las 9.'],
      de: ['Zhu Hongxing', 'Ein Nudelhaus seit 1938, in dem Suzhouer Nudeln mit Schmorfleisch frühstücken.', 'Nudeln am Morgen sind ein lokales Ritual; vor 9 Uhr kommen.'],
      fr: ['Zhu Hongxing', 'Une maison de nouilles depuis 1938 où les habitants petit-déjeunent de nouilles au porc braisé.', 'Les nouilles du matin sont un rituel local ; venez avant 9 h.'],
      it: ['Zhu Hongxing', 'Una casa di noodle dal 1938 dove gli abitanti fanno colazione con noodle al maiale brasato.', 'I noodle del mattino sono un rito locale; vieni prima delle 9.'],
    }, { price: level(1), menu: [
      ['Mènròu miàn', undefined, 'лапша с томлёной свининой|noodles with slow-braised pork|fideos con cerdo guisado lento|Nudeln mit geschmortem Schwein|nouilles au porc mijoté|noodle con maiale brasato'],
      ['Shrimp noodles', undefined, 'лапша с речными креветками|noodles with river shrimp|fideos con gambas de río|Nudeln mit Flussgarnelen|nouilles aux crevettes de rivière|noodle con gamberi di fiume'],
    ] }),
    P('huang-tian-yuan', 'food', 31.311, 120.622, HOUSES, 4.2, 3900, ['food', 'history'], {
      ru: ['Хуантяньюань', 'Кондитерская с 1821 года, где делают сучжоуские рисовые сладости из клейкого риса — с бобовой пастой, кунжутом и цветами османтуса.', 'Набор ассорти — хороший сувенир на день-два.'],
      en: ['Huangtianyuan', 'A sweet shop since 1821 making Suzhou glutinous-rice cakes — with bean paste, sesame and osmanthus.', 'An assorted box makes a good souvenir for a day or two.'],
      es: ['Huangtianyuan', 'Una dulcería desde 1821 que hace pasteles de arroz glutinoso de Suzhou, con pasta de judía, sésamo y osmanto.', 'Una caja surtida es buen recuerdo para un par de días.'],
      de: ['Huangtianyuan', 'Ein Süßwarenladen seit 1821 mit Suzhouer Klebreiskuchen – mit Bohnenpaste, Sesam und Osmanthus.', 'Eine gemischte Schachtel ist ein gutes Mitbringsel für ein, zwei Tage.'],
      fr: ['Huangtianyuan', 'Une confiserie depuis 1821 préparant les gâteaux de riz gluant de Suzhou, à la pâte de haricot, au sésame et à l’osmanthe.', 'Une boîte assortie fait un bon souvenir pour un ou deux jours.'],
      it: ['Huangtianyuan', 'Una pasticceria dal 1821 che prepara i dolci di riso glutinoso di Suzhou, con pasta di fagioli, sesamo e osmanto.', 'Una scatola assortita è un buon souvenir per uno o due giorni.'],
    }, { price: level(1), menu: [
      ['Glutinous rice cakes', undefined, 'сладости из клейкого риса|glutinous rice cakes|pasteles de arroz glutinoso|Klebreiskuchen|gâteaux de riz gluant|dolci di riso glutinoso'],
      ['Osmanthus cake', undefined, 'пирожное с цветами османтуса|osmanthus cake|pastel de osmanto|Osmanthus-Kuchen|gâteau à l’osmanthe|dolce all’osmanto'],
    ] }),
    P('cai-zhi-zhai', 'food', 31.311, 120.6225, HOUSES, 4.0, 2700, ['food', 'history', 'shopping'], {
      ru: ['Цайчжичжай', 'Сучжоуская кондитерская с 1870 года: конфеты с кедровыми орешками, засахаренные фрукты и другие традиционные сладости.', 'Возьмите конфеты с кедровыми орешками — их визитная карточка.'],
      en: ['Caizhizhai', 'A Suzhou confectioner since 1870: pine-nut candy, candied fruit and other traditional sweets.', 'Get the pine-nut candy — their signature.'],
      es: ['Caizhizhai', 'Una confitería de Suzhou desde 1870: caramelos de piñones, frutas confitadas y otros dulces tradicionales.', 'Llévate los caramelos de piñones, su especialidad.'],
      de: ['Caizhizhai', 'Ein Suzhouer Konditor seit 1870: Pinienkernbonbons, kandierte Früchte und andere traditionelle Süßigkeiten.', 'Die Pinienkernbonbons nehmen – ihr Aushängeschild.'],
      fr: ['Caizhizhai', 'Une confiserie de Suzhou depuis 1870 : bonbons aux pignons, fruits confits et autres douceurs traditionnelles.', 'Prenez les bonbons aux pignons, leur spécialité.'],
      it: ['Caizhizhai', 'Una confetteria di Suzhou dal 1870: caramelle ai pinoli, frutta candita e altri dolci tradizionali.', 'Prendi le caramelle ai pinoli, la loro specialità.'],
    }, { price: level(1), menu: [
      ['Pine-nut candy', undefined, 'конфеты с кедровыми орешками|pine-nut candy|caramelo de piñones|Pinienkernbonbons|bonbons aux pignons|caramelle ai pinoli'],
      ['Candied fruit', undefined, 'засахаренные фрукты|candied fruit|fruta confitada|kandierte Früchte|fruits confits|frutta candita'],
    ] }),
    P('wumen-renjia', 'food', 31.3235, 120.6255, GARDEN, 4.3, 3200, ['food', 'romance'], {
      ru: ['Умэнь Жэньцзя', 'Ресторан сучжоуской кухни в старом доме с двориком рядом с садом Львиной рощи — удобно пообедать между садами.', 'Попробуйте местные блюда с креветками и сезонными овощами.'],
      en: ['Wumen Renjia', 'A Suzhou-cuisine restaurant in an old courtyard house next to Lion Grove Garden — handy for lunch between gardens.', 'Try the local shrimp and seasonal vegetable dishes.'],
      es: ['Wumen Renjia', 'Un restaurante de cocina de Suzhou en una vieja casa con patio junto al Jardín del Bosque del León, práctico entre jardines.', 'Prueba los platos locales de gambas y verduras de temporada.'],
      de: ['Wumen Renjia', 'Ein Suzhou-Restaurant in einem alten Hofhaus neben dem Löwenwaldgarten – praktisch zwischen den Gärten.', 'Die lokalen Gerichte mit Garnelen und Saisongemüse probieren.'],
      fr: ['Wumen Renjia', 'Un restaurant de cuisine de Suzhou dans une vieille maison à cour près du jardin de la Forêt du lion, pratique entre deux jardins.', 'Goûtez les plats locaux aux crevettes et légumes de saison.'],
      it: ['Wumen Renjia', 'Un ristorante di cucina di Suzhou in una vecchia casa a corte accanto al Giardino del Boschetto del Leone, comodo tra un giardino e l’altro.', 'Prova i piatti locali con gamberi e verdure di stagione.'],
    }, { price: level(2), menu: [
      ['Stir-fried river shrimp', undefined, 'жареные речные креветки|stir-fried river shrimp|gambas de río salteadas|gebratene Flussgarnelen|crevettes de rivière sautées|gamberi di fiume saltati'],
      ['Seasonal greens', undefined, 'сезонные овощи|seasonal greens|verduras de temporada|Saisongemüse|légumes de saison|verdure di stagione'],
    ] }),
    P('lu-gao-jian', 'food', 31.3112, 120.6228, HOUSES, 4.0, 2300, ['food', 'history'], {
      ru: ['Лу Гаоцзянь', 'Мясная лавка, работающая с эпохи Цин, со сладкой сучжоуской свининой цзянчжи-жоу, которую томят с сахаром и красным дрожжевым рисом.', 'Возьмите немного навынос и съешьте с булочкой — так перекусывают местные.'],
      en: ['Lu Gaojian', 'A meat shop going since the Qing dynasty, famous for sweet Suzhou jiangzhi rou — pork braised with sugar and red yeast rice.', 'Take a little to go and eat it in a bun — the local snack.'],
      es: ['Lu Gaojian', 'Una charcutería desde la dinastía Qing famosa por el jiangzhi rou de Suzhou, cerdo dulce guisado con azúcar y arroz de levadura roja.', 'Llévate un poco y cómelo en un bollo, como los locales.'],
      de: ['Lu Gaojian', 'Ein Fleischladen seit der Qing-Zeit, berühmt für süßes Suzhouer Jiangzhi Rou – Schwein, geschmort mit Zucker und rotem Hefereis.', 'Etwas mitnehmen und im Brötchen essen – der lokale Snack.'],
      fr: ['Lu Gaojian', 'Une charcuterie depuis les Qing, célèbre pour le jiangzhi rou de Suzhou, porc sucré braisé au sucre et au riz rouge fermenté.', 'Prenez-en un peu à emporter, dans un petit pain, comme les locaux.'],
      it: ['Lu Gaojian', 'Una salumeria dall’epoca Qing famosa per il jiangzhi rou di Suzhou, maiale dolce brasato con zucchero e riso rosso fermentato.', 'Prendine un po’ da asporto e mangialo in un panino, come i locali.'],
    }, { price: level(1), menu: [
      ['Jiangzhi rou', undefined, 'сладкая красная томлёная свинина|sweet red braised pork|cerdo rojo guisado dulce|süßes rot geschmortes Schwein|porc rouge braisé sucré|maiale rosso brasato dolce'],
      ['Sauced duck', undefined, 'утка в соусе|sauced duck|pato en salsa|Ente in Soße|canard en sauce|anatra in salsa'],
    ] }),
    P('pingtan-teahouse', 'food', 31.316, 120.633, CANAL, 4.4, 2900, ['food', 'culture'], {
      ru: ['Чайная с пинтанем на улице Пинцзян', 'Чайные на улице Пинцзян, где под чай с семечками исполняют пинтань — сучжоуские сказы и баллады под пипу и саньсянь.', 'Даже без знания языка мелодия и мимика сказителей завораживают.'],
      en: ['Pingtan teahouse on Pingjiang Road', 'Teahouses on Pingjiang Road where pingtan — Suzhou storytelling and ballads to the pipa and sanxian — is performed over tea and seeds.', 'Even without the language, the music and the performers’ expressions are captivating.'],
      es: ['Casa de té con pingtan en Pingjiang', 'Casas de té en la calle Pingjiang donde se interpreta pingtan, narración y baladas de Suzhou con pipa y sanxian, entre té y pipas.', 'Aun sin el idioma, la música y la mímica cautivan.'],
      de: ['Pingtan-Teehaus in der Pingjiang Road', 'Teehäuser in der Pingjiang Road, in denen Pingtan – Suzhouer Erzählkunst und Balladen zu Pipa und Sanxian – bei Tee und Kernen gespielt wird.', 'Auch ohne Sprache fesseln Musik und Mimik.'],
      fr: ['Maison de thé avec pingtan rue Pingjiang', 'Des maisons de thé de la rue Pingjiang où l’on joue le pingtan, récits et ballades de Suzhou au pipa et au sanxian, autour d’un thé et de graines.', 'Même sans comprendre, la musique et les mimiques captivent.'],
      it: ['Casa da tè con pingtan su Pingjiang Road', 'Case da tè su Pingjiang Road dove si esegue il pingtan, narrazione e ballate di Suzhou con pipa e sanxian, tra tè e semi.', 'Anche senza la lingua, musica ed espressioni incantano.'],
    }, { spot: 'hidden', price: level(1), menu: [
      ['Green tea', undefined, 'зелёный чай|green tea|té verde|grüner Tee|thé vert|tè verde'],
      ['Melon seeds and snacks', undefined, 'семечки и закуски к чаю|melon seeds and tea snacks|pipas y tapas para el té|Kerne und Teesnacks|graines et en-cas|semi e stuzzichini'],
    ] }),
    P('yangcheng-lake-crab', 'food', 31.43, 120.79, TOWN, 4.4, 5600, ['food', 'lakes'], {
      ru: ['Крабы озера Янчэн', 'Озеро к востоку от Сучжоу, знаменитое мохнаторукими крабами: с конца сентября по декабрь их едят в ресторанах на берегу.', 'Самки вкуснее в октябре, самцы — в ноябре; так говорят местные.'],
      en: ['Yangcheng Lake hairy crab', 'A lake east of Suzhou famous for hairy crabs: from late September to December they’re eaten at lakeside restaurants.', 'Locals say females are best in October, males in November.'],
      es: ['Cangrejo del lago Yangcheng', 'Un lago al este de Suzhou famoso por el cangrejo peludo: de finales de septiembre a diciembre se come en restaurantes de la orilla.', 'Dicen los locales que las hembras son mejores en octubre y los machos en noviembre.'],
      de: ['Wollhandkrabben vom Yangcheng-See', 'Ein See östlich von Suzhou, berühmt für Wollhandkrabben: Ende September bis Dezember isst man sie in Uferlokalen.', 'Einheimische sagen: Weibchen im Oktober, Männchen im November.'],
      fr: ['Crabe du lac Yangcheng', 'Un lac à l’est de Suzhou célèbre pour ses crabes chinois : de fin septembre à décembre, on les mange dans les restaurants de la rive.', 'Selon les habitants, les femelles sont meilleures en octobre, les mâles en novembre.'],
      it: ['Granchio del lago Yangcheng', 'Un lago a est di Suzhou famoso per il granchio cinese: da fine settembre a dicembre si mangia nei ristoranti sulla riva.', 'I locali dicono che le femmine sono migliori a ottobre, i maschi a novembre.'],
    }, { price: level(3), menu: [
      ['Steamed hairy crab', undefined, 'мохнаторукий краб на пару|steamed hairy crab|cangrejo peludo al vapor|gedämpfte Wollhandkrabbe|crabe chinois vapeur|granchio cinese al vapore'],
      ['Crab roe noodles', undefined, 'лапша с крабовой икрой|noodles with crab roe|fideos con huevas de cangrejo|Nudeln mit Krabbenrogen|nouilles au corail de crabe|noodle con uova di granchio'],
    ] }),
  ],
  routes: [
    D(['humble-administrators-garden', 'suzhou-museum', 'lion-grove-garden', 'wumen-renjia', 'pingjiang-road', 'huang-tian-yuan', 'pingtan-teahouse', 'song-he-lou'],
      'Сад Чжочжэн, музей Пэя и улица Пинцзян|The Humble Administrator’s Garden, Pei’s museum and Pingjiang Road|El Jardín del Administrador Humilde, el museo de Pei y la calle Pingjiang|Zhuozheng-Garten, Peis Museum und Pingjiang Road|Le jardin de l’Humble Administrateur, le musée de Pei et la rue Pingjiang|Il Giardino dell’Umile Amministratore, il museo di Pei e Pingjiang Road'),
    D(['zhu-hong-xing', 'lingering-garden', 'tiger-hill', 'shantang-street', 'hanshan-temple', 'master-of-nets-garden', 'tong-de-xing', 'de-yue-lou'],
      'Сад Люйюань, холм Тигра и улица Шаньтан|The Lingering Garden, Tiger Hill and Shantang Street|El Jardín de la Permanencia, la Colina del Tigre y la calle Shantang|Garten des Verweilens, Tigerhügel und Shantang-Straße|Le jardin persistant, la colline du Tigre et la rue Shantang|Il Giardino del Persistere, la Collina della Tigre e via Shantang'),
    D(['panmen-gate', 'tongli', 'zhouzhuang', 'yangcheng-lake-crab'],
      'Водные городки Тунли и Чжоучжуан|The water towns of Tongli and Zhouzhuang|Los pueblos de agua de Tongli y Zhouzhuang|Die Wasserstädte Tongli und Zhouzhuang|Les bourgs d’eau de Tongli et Zhouzhuang|Le città d’acqua di Tongli e Zhouzhuang'),
  ],
};

export default pack;
