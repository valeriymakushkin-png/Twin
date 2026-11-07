import type { CityPack } from '../types';
import { free, level, makeDay, makePlace } from './_kit.ts';

const P = makePlace('xiamen');
const D = makeDay('xiamen');
const BAY = 'Uu3ghGmzu1o';
const LANE = 'LemoVBKhgGA';
const GREEN = 'eoMYbcYw6Qc';

const pack: CityPack = {
  country: 'CN',
  city: 'xiamen',
  places: [
    P('gulangyu', 'attraction', 24.4475, 118.067, LANE, 4.6, 41000, ['islands', 'unesco', 'architecture'], {
      ru: ['Остров Гуланъюй', 'Остров без машин в 10 минутах на пароме: виллы XIX–XX веков бывшего международного поселения (ЮНЕСКО, 2017) и «остров фортепиано» — здесь больше всего пианино на жителя в Китае.', 'Билеты на туристический паром ограничены — покупайте заранее, особенно в выходные.'],
      en: ['Gulangyu Island', 'A car-free island 10 minutes away by ferry: 19th–20th-century villas of the former international settlement (UNESCO, 2017) and the “piano island”, with China’s most pianos per head.', 'Tourist ferry tickets are limited — buy ahead, especially at weekends.'],
      es: ['Isla de Gulangyu', 'Una isla sin coches a 10 minutos en ferri: villas de los siglos XIX–XX del antiguo asentamiento internacional (UNESCO, 2017) y la «isla del piano», con más pianos por habitante de China.', 'Los billetes del ferri turístico son limitados: cómpralos antes, sobre todo el fin de semana.'],
      de: ['Insel Gulangyu', 'Eine autofreie Insel, 10 Minuten per Fähre: Villen des 19./20. Jh. der früheren internationalen Siedlung (UNESCO, 2017) und die „Klavierinsel“ mit den meisten Klavieren pro Kopf in China.', 'Tickets für die Touristenfähre sind begrenzt – vorher kaufen, besonders am Wochenende.'],
      fr: ['Île de Gulangyu', 'Une île sans voitures à 10 minutes en ferry : villas des XIXe–XXe siècles de l’ancienne concession internationale (UNESCO, 2017) et « île du piano », qui compte le plus de pianos par habitant en Chine.', 'Les billets du ferry touristique sont limités : achetez-les à l’avance, surtout le week-end.'],
      it: ['Isola di Gulangyu', 'Un’isola senza auto a 10 minuti di traghetto: ville del XIX–XX secolo dell’ex insediamento internazionale (UNESCO, 2017) e l’«isola del pianoforte», con più pianoforti per abitante in Cina.', 'I biglietti del traghetto turistico sono limitati: comprali prima, soprattutto nel weekend.'],
    }, { spot: 'insta', price: level(1) }),
    P('sunlight-rock', 'nature', 24.446, 118.064, LANE, 4.4, 15000, ['views', 'islands'], {
      ru: ['Скала Солнечного света', 'Высшая точка Гуланъюя — 92,7 м: с вершины виден весь остров с красными крышами и небоскрёбы Сямэня через пролив.', 'Поднимайтесь утром до 10 — потом на узких ступенях очередь.'],
      en: ['Sunlight Rock', 'Gulangyu’s highest point at 92.7 m: from the top you see the whole red-roofed island and Xiamen’s towers across the strait.', 'Climb before 10 am — later the narrow steps queue up.'],
      es: ['Roca de la Luz del Sol', 'El punto más alto de Gulangyu, 92,7 m: desde arriba se ve toda la isla de tejados rojos y los rascacielos de Xiamen al otro lado.', 'Sube antes de las 10: después hay cola en los estrechos escalones.'],
      de: ['Sonnenlichtfelsen', 'Gulangyus höchster Punkt mit 92,7 m: oben sieht man die ganze Insel mit roten Dächern und Xiamens Hochhäuser jenseits der Meerenge.', 'Vor 10 Uhr hinauf – später staut es sich auf den schmalen Stufen.'],
      fr: ['Rocher de la Lumière du soleil', 'Le point culminant de Gulangyu, 92,7 m : en haut, toute l’île aux toits rouges et les tours de Xiamen de l’autre côté du détroit.', 'Montez avant 10 h : ensuite, les marches étroites sont bouchées.'],
      it: ['Roccia della Luce del Sole', 'Il punto più alto di Gulangyu, 92,7 m: dalla cima si vede tutta l’isola dai tetti rossi e i grattacieli di Xiamen oltre lo stretto.', 'Sali prima delle 10: dopo, sui gradini stretti si fa la coda.'],
    }, { spot: 'insta', price: level(2) }),
    P('shuzhuang-garden', 'nature', 24.442, 118.069, GREEN, 4.4, 9100, ['gardens', 'museums'], {
      ru: ['Сад Шучжуан и Музей фортепиано', 'Приморский сад 1913 года, построенный тайваньским купцом Линь Эрцзя; внутри — Музей фортепиано с редкими старинными инструментами.', 'Мостик над морем в саду — лучшее место для фото волн и скал.'],
      en: ['Shuzhuang Garden and Piano Museum', 'A seaside garden of 1913 built by Taiwanese merchant Lin Erjia; inside is the Piano Museum with rare antique instruments.', 'The garden’s bridge over the sea is the best spot to shoot waves and rocks.'],
      es: ['Jardín Shuzhuang y Museo del Piano', 'Un jardín junto al mar de 1913, obra del comerciante taiwanés Lin Erjia; dentro, el Museo del Piano con raros instrumentos antiguos.', 'El puente sobre el mar es el mejor sitio para fotografiar olas y rocas.'],
      de: ['Shuzhuang-Garten und Klaviermuseum', 'Ein Garten am Meer von 1913, angelegt vom taiwanischen Kaufmann Lin Erjia; darin das Klaviermuseum mit seltenen alten Instrumenten.', 'Die Brücke über dem Meer ist der beste Platz für Fotos von Wellen und Felsen.'],
      fr: ['Jardin Shuzhuang et musée du Piano', 'Un jardin marin de 1913, créé par le marchand taïwanais Lin Erjia ; à l’intérieur, le musée du Piano et ses instruments anciens rares.', 'Le pont sur la mer est le meilleur endroit pour photographier vagues et rochers.'],
      it: ['Giardino Shuzhuang e Museo del Pianoforte', 'Un giardino sul mare del 1913, opera del mercante taiwanese Lin Erjia; dentro c’è il Museo del Pianoforte con rari strumenti antichi.', 'Il ponte sul mare è il punto migliore per fotografare onde e scogli.'],
    }, { price: level(2) }),
    P('nanputuo', 'attraction', 24.441, 118.096, GREEN, 4.5, 22000, ['temples', 'history'], {
      ru: ['Храм Наньпутуо', 'Буддийский храм, основанный при династии Тан, у подножия пиков Улао; вход бесплатный, а за храмом тропа ведёт на холм с видом на город и море.', 'Поднимитесь по тропе за храмом — через 20 минут откроется вид на университет и залив.'],
      en: ['Nanputuo Temple', 'A Buddhist temple founded under the Tang dynasty at the foot of the Wulao peaks; entry is free, and a path behind it climbs to views over the city and sea.', 'Take the path behind the temple — in 20 minutes you overlook the university and the bay.'],
      es: ['Templo Nanputuo', 'Un templo budista fundado en la dinastía Tang al pie de los picos Wulao; la entrada es gratuita y un sendero detrás sube a vistas de la ciudad y el mar.', 'Toma el sendero tras el templo: en 20 minutos verás la universidad y la bahía.'],
      de: ['Nanputuo-Tempel', 'Ein buddhistischer Tempel aus der Tang-Zeit am Fuß der Wulao-Gipfel; Eintritt frei, ein Pfad dahinter führt zu Ausblicken über Stadt und Meer.', 'Den Pfad hinter dem Tempel nehmen – nach 20 Minuten blickt man auf Universität und Bucht.'],
      fr: ['Temple Nanputuo', 'Un temple bouddhiste fondé sous les Tang au pied des pics Wulao ; entrée gratuite, et un sentier derrière grimpe vers des vues sur la ville et la mer.', 'Prenez le sentier derrière le temple : en 20 minutes, vue sur l’université et la baie.'],
      it: ['Tempio Nanputuo', 'Un tempio buddhista fondato sotto i Tang ai piedi dei picchi Wulao; ingresso gratuito, e un sentiero dietro sale verso viste su città e mare.', 'Prendi il sentiero dietro il tempio: in 20 minuti vedi l’università e la baia.'],
    }, { price: free }),
    P('xiamen-university', 'attraction', 24.437, 118.095, GREEN, 4.6, 17000, ['architecture', 'photo'], {
      ru: ['Сямэньский университет', 'Университет, основанный в 1921 году Тан Ка Ки, считается одним из самых красивых кампусов Китая: здания с черепичными крышами, озеро и туннель Фужун, расписанный граффити студентов.', 'Туристов пускают только по предварительной брони и в определённые часы — проверьте заранее.'],
      en: ['Xiamen University', 'Founded in 1921 by Tan Kah Kee and counted among China’s most beautiful campuses: tile-roofed buildings, a lake and the Furong tunnel covered in student graffiti.', 'Visitors are admitted only by advance booking at set hours — check ahead.'],
      es: ['Universidad de Xiamen', 'Fundada en 1921 por Tan Kah Kee y considerada uno de los campus más bellos de China: edificios con tejados, un lago y el túnel Furong lleno de grafitis estudiantiles.', 'Solo se entra con reserva previa y en horas fijas: compruébalo antes.'],
      de: ['Universität Xiamen', '1921 von Tan Kah Kee gegründet und einer der schönsten Campus Chinas: Bauten mit Ziegeldächern, ein See und der Furong-Tunnel voller Studentengraffiti.', 'Besucher nur mit Voranmeldung zu festen Zeiten – vorher prüfen.'],
      fr: ['Université de Xiamen', 'Fondée en 1921 par Tan Kah Kee et réputée l’un des plus beaux campus de Chine : bâtiments à toits de tuiles, un lac et le tunnel Furong couvert de graffitis d’étudiants.', 'Visite uniquement sur réservation et à des heures fixes : vérifiez avant.'],
      it: ['Università di Xiamen', 'Fondata nel 1921 da Tan Kah Kee e considerata uno dei campus più belli della Cina: edifici con tetti di tegole, un lago e il tunnel Furong pieno di graffiti studenteschi.', 'Si entra solo su prenotazione e in orari fissi: verifica prima.'],
    }, { spot: 'insta', price: free }),
    P('huandao-road', 'attraction', 24.43, 118.13, BAY, 4.5, 13000, ['beaches', 'views', 'sunset'], {
      ru: ['Набережная Хуаньдао', 'Прибрежная дорога вдоль южного берега острова Сямэнь с велодорожкой, пляжами и видом на море; удобно ехать на велосипеде напрокат.', 'Возьмите велосипед у университета и катитесь на восток к закату.'],
      en: ['Huandao Road', 'A coastal road along the south shore of Xiamen Island with a cycle lane, beaches and sea views; easy on a rented bike.', 'Rent a bike near the university and ride east towards sunset.'],
      es: ['Paseo Huandao', 'Una carretera costera por la orilla sur de la isla de Xiamen con carril bici, playas y vistas al mar; fácil en bici de alquiler.', 'Alquila una bici junto a la universidad y pedalea hacia el este al atardecer.'],
      de: ['Huandao Road', 'Eine Küstenstraße am Südufer der Insel Xiamen mit Radweg, Stränden und Meerblick; bequem mit dem Leihrad.', 'Ein Rad bei der Universität leihen und gen Osten in den Sonnenuntergang fahren.'],
      fr: ['Route Huandao', 'Une route côtière le long de la rive sud de l’île de Xiamen, avec piste cyclable, plages et vue sur la mer ; facile à vélo de location.', 'Louez un vélo près de l’université et roulez vers l’est au coucher du soleil.'],
      it: ['Strada Huandao', 'Una strada costiera lungo la riva sud dell’isola di Xiamen con pista ciclabile, spiagge e vista mare; comoda in bici a noleggio.', 'Noleggia una bici vicino all’università e pedala verso est al tramonto.'],
    }, { spot: 'insta', price: free }),
    P('zhongshan-road', 'attraction', 24.456, 118.079, LANE, 4.3, 19000, ['oldtown', 'shopping', 'architecture'], {
      ru: ['Улица Чжуншань', 'Пешеходная улица старого Сямэня с галереями-цилоу 1920–30-х годов, лавками закусок и сувениров; заканчивается у набережной напротив Гуланъюя.', 'Вечером фасады подсвечены — прогуляйтесь до воды.'],
      en: ['Zhongshan Road', 'Old Xiamen’s pedestrian street of 1920s–30s qilou arcades, snack and souvenir shops; it ends at the waterfront opposite Gulangyu.', 'The façades are lit in the evening — walk down to the water.'],
      es: ['Calle Zhongshan', 'La calle peatonal del viejo Xiamen con soportales qilou de los años 1920–30 y tiendas de tentempiés y recuerdos; acaba en el paseo frente a Gulangyu.', 'De noche las fachadas se iluminan: baja hasta el agua.'],
      de: ['Zhongshan Road', 'Die Fußgängerstraße des alten Xiamen mit Qilou-Arkaden der 1920er–30er, Snack- und Souvenirläden; sie endet an der Uferpromenade gegenüber Gulangyu.', 'Abends sind die Fassaden beleuchtet – bis ans Wasser gehen.'],
      fr: ['Rue Zhongshan', 'La rue piétonne du vieux Xiamen aux arcades qilou des années 1920–30, boutiques de snacks et souvenirs ; elle finit sur le front de mer face à Gulangyu.', 'Le soir, les façades sont éclairées : descendez jusqu’à l’eau.'],
      it: ['Via Zhongshan', 'La via pedonale della vecchia Xiamen con portici qilou degli anni ’20–’30, negozi di snack e souvenir; finisce sul lungomare di fronte a Gulangyu.', 'La sera le facciate sono illuminate: scendi fino all’acqua.'],
    }, { price: free }),
    P('hulishan-fortress', 'attraction', 24.429, 118.111, BAY, 4.3, 7800, ['history', 'views'], {
      ru: ['Форт Хулишань', 'Береговая крепость 1890-х годов с огромной пушкой Круппа калибра 280 мм — одной из крупнейших сохранившихся береговых пушек XIX века.', 'С бастионов в ясную погоду видны острова в проливе.'],
      en: ['Hulishan Fortress', 'An 1890s coastal fort with a huge 280 mm Krupp gun — one of the largest surviving 19th-century coastal guns.', 'On clear days the ramparts show the islands out in the strait.'],
      es: ['Fortaleza Hulishan', 'Un fuerte costero de la década de 1890 con un enorme cañón Krupp de 280 mm, uno de los mayores cañones costeros del siglo XIX conservados.', 'Con buen tiempo, desde los bastiones se ven las islas del estrecho.'],
      de: ['Festung Hulishan', 'Ein Küstenfort aus den 1890ern mit einem gewaltigen 280-mm-Krupp-Geschütz – einem der größten erhaltenen Küstengeschütze des 19. Jh.', 'An klaren Tagen sieht man von den Wällen die Inseln in der Meerenge.'],
      fr: ['Fort de Hulishan', 'Un fort côtier des années 1890 avec un énorme canon Krupp de 280 mm, l’un des plus grands canons côtiers du XIXe siècle conservés.', 'Par temps clair, les remparts dévoilent les îles du détroit.'],
      it: ['Forte di Hulishan', 'Un forte costiero degli anni 1890 con un enorme cannone Krupp da 280 mm, tra i più grandi cannoni costieri dell’Ottocento conservati.', 'Nei giorni limpidi dai bastioni si vedono le isole nello stretto.'],
    }, { price: level(1) }),
    P('tianluokeng-tulou', 'attraction', 24.59, 117.059, GREEN, 4.6, 12000, ['unesco', 'architecture', 'history'], {
      ru: ['Тулоу Тяньлокэн', 'Знаменитая группа земляных крепостей-тулоу народа хакка — одна квадратная и четыре круглые, «четыре блюда и суп»; часть объекта ЮНЕСКО «Тулоу провинции Фуцзянь».', 'Это день: 2,5–3 часа на машине в одну сторону; сверху со смотровой площадки — главный кадр.'],
      en: ['Tianluokeng Tulou', 'A famous cluster of Hakka earthen tulou fortresses — one square and four round, “four dishes and a soup”; part of the UNESCO “Fujian Tulou” site.', 'A full day: 2.5–3 hours each way by road; the viewpoint above gives the classic shot.'],
      es: ['Tulou de Tianluokeng', 'Un famoso grupo de fortalezas de tierra tulou hakka, una cuadrada y cuatro redondas, «cuatro platos y una sopa»; parte del sitio UNESCO «Tulou de Fujian».', 'Es un día: 2,5–3 horas de ida por carretera; el mirador de arriba da la foto clásica.'],
      de: ['Tulou von Tianluokeng', 'Eine berühmte Gruppe von Hakka-Lehmburgen – eine quadratische und vier runde, „vier Gerichte und eine Suppe“; Teil des UNESCO-Welterbes „Fujian Tulou“.', 'Ein ganzer Tag: 2,5–3 Stunden pro Strecke; vom Aussichtspunkt oben gelingt das klassische Foto.'],
      fr: ['Tulou de Tianluokeng', 'Un célèbre groupe de forteresses de terre tulou hakka, une carrée et quatre rondes, « quatre plats et une soupe » ; partie du site UNESCO « Tulou du Fujian ».', 'Une journée entière : 2 h 30–3 h de route par trajet ; le belvédère offre la photo classique.'],
      it: ['Tulou di Tianluokeng', 'Un famoso gruppo di fortezze di terra tulou hakka, una quadrata e quattro rotonde, «quattro piatti e una zuppa»; parte del sito UNESCO «Tulou del Fujian».', 'Serve un giorno: 2,5–3 ore di strada per tratta; dal belvedere sopra si fa la foto classica.'],
    }, { spot: 'insta', price: level(2) }),
    P('jimei', 'attraction', 24.575, 118.105, BAY, 4.4, 8200, ['architecture', 'history'], {
      ru: ['Студгородок Цзимэй', 'Школы и колледжи, основанные филантропом Тан Ка Ки, в стиле «цзягэн»: европейские корпуса под китайскими крышами; в саду Аоюань — его могила и каменные рельефы.', 'Лучший вид на здания — с другого берега озера Лунчжоучи.'],
      en: ['Jimei School Village', 'Schools and colleges founded by philanthropist Tan Kah Kee in the “Jiageng” style — European blocks under Chinese roofs; Aoyuan Garden holds his tomb and stone carvings.', 'The best view of the buildings is from across Longzhou Pond.'],
      es: ['Villa escolar de Jimei', 'Escuelas fundadas por el filántropo Tan Kah Kee en estilo «Jiageng», bloques europeos bajo tejados chinos; el jardín Aoyuan guarda su tumba y relieves de piedra.', 'La mejor vista de los edificios, desde el otro lado del estanque Longzhou.'],
      de: ['Schuldorf Jimei', 'Schulen und Hochschulen des Philanthropen Tan Kah Kee im „Jiageng“-Stil – europäische Bauten unter chinesischen Dächern; der Aoyuan-Garten birgt sein Grab und Steinreliefs.', 'Der schönste Blick auf die Bauten von der anderen Seite des Longzhou-Teichs.'],
      fr: ['Village scolaire de Jimei', 'Écoles et collèges fondés par le philanthrope Tan Kah Kee dans le style « Jiageng » : bâtiments européens sous toits chinois ; le jardin Aoyuan abrite sa tombe et des reliefs de pierre.', 'La plus belle vue sur les bâtiments est de l’autre côté de l’étang Longzhou.'],
      it: ['Villaggio scolastico di Jimei', 'Scuole e college fondati dal filantropo Tan Kah Kee in stile «Jiageng», corpi europei sotto tetti cinesi; il giardino Aoyuan custodisce la sua tomba e rilievi in pietra.', 'La vista migliore sugli edifici è dall’altra sponda dello stagno Longzhou.'],
    }, { price: free }),
    P('shapowei', 'attraction', 24.445, 118.086, BAY, 4.3, 6400, ['art', 'nightlife', 'photo'], {
      ru: ['Шапоцвэй', 'Старая рыбацкая гавань в южной части города: лодки у причала, старые склады с галереями, кафе и барами, куда ходят сами сямэньцы.', 'Приходите к вечеру — гавань оживает, а в кафе у воды тише, чем на Чжуншань.'],
      en: ['Shapowei', 'An old fishing harbour in the south of the city: boats at the quay, old warehouses with galleries, cafés and bars where locals hang out.', 'Come in the evening — the harbour comes alive and waterside cafés are calmer than Zhongshan Road.'],
      es: ['Shapowei', 'Un viejo puerto pesquero en el sur de la ciudad: barcas en el muelle y antiguos almacenes con galerías, cafés y bares frecuentados por locales.', 'Ve al atardecer: el puerto cobra vida y los cafés junto al agua son más tranquilos que Zhongshan.'],
      de: ['Shapowei', 'Ein alter Fischerhafen im Süden der Stadt: Boote am Kai, alte Lagerhäuser mit Galerien, Cafés und Bars, in denen Einheimische sitzen.', 'Abends kommen – der Hafen erwacht, die Cafés am Wasser sind ruhiger als die Zhongshan Road.'],
      fr: ['Shapowei', 'Un vieux port de pêche au sud de la ville : barques à quai, anciens entrepôts devenus galeries, cafés et bars fréquentés par les habitants.', 'Venez en soirée : le port s’anime et les cafés au bord de l’eau sont plus calmes que la rue Zhongshan.'],
      it: ['Shapowei', 'Un vecchio porto di pescatori a sud della città: barche al molo, vecchi magazzini con gallerie, caffè e bar frequentati dagli abitanti.', 'Vieni in serata: il porto si anima e i caffè sull’acqua sono più tranquilli di via Zhongshan.'],
    }, { spot: 'hidden', price: free }),
    P('wanshi-botanical-garden', 'nature', 24.456, 118.103, GREEN, 4.6, 9300, ['gardens', 'nature'], {
      ru: ['Ботанический сад Ваньши', 'Большой сад на холмах в центре острова: тропический лес с туманом, сад кактусов и пальм, пруды и скальный храм Тайпинъянь.', 'В оранжерее «дождевого леса» включают туман — подождите его для фото.'],
      en: ['Wanshi Botanical Garden', 'A large hillside garden in the middle of the island: a misty rainforest, a cactus and palm garden, ponds and the Taipingyan rock temple.', 'The rainforest area switches on mist — wait for it for photos.'],
      es: ['Jardín Botánico Wanshi', 'Un gran jardín en las colinas del centro de la isla: selva con niebla, jardín de cactus y palmeras, estanques y el templo rupestre Taipingyan.', 'En la zona de selva activan niebla: espérala para las fotos.'],
      de: ['Botanischer Garten Wanshi', 'Ein großer Hanggarten mitten auf der Insel: nebliger Regenwald, Kakteen- und Palmengarten, Teiche und der Felsentempel Taipingyan.', 'Im Regenwaldbereich wird Nebel eingeschaltet – für Fotos darauf warten.'],
      fr: ['Jardin botanique de Wanshi', 'Un grand jardin à flanc de colline au centre de l’île : forêt tropicale brumeuse, jardin de cactus et palmiers, bassins et temple rupestre de Taipingyan.', 'Dans la forêt tropicale, on déclenche de la brume : attendez-la pour les photos.'],
      it: ['Giardino Botanico Wanshi', 'Un grande giardino collinare al centro dell’isola: foresta pluviale nebbiosa, giardino di cactus e palme, stagni e il tempio rupestre di Taipingyan.', 'Nell’area della foresta pluviale accendono la nebbia: aspettala per le foto.'],
    }, { price: level(1) }),
    P('yanyu', 'food', 24.489, 118.119, BAY, 4.7, 900, ['food', 'luxury'], {
      ru: ['Yanyu (Цзяхэ)', 'Ресторан утончённой фуцзяньской кухни в центре Синьцзин на улице Цзяхэ; одна звезда Michelin, одна из трёх в Сямэне.', 'Бронируйте заранее, особенно ужин в выходные.'],
      en: ['Yanyu (Jiahe Road)', 'A refined Fujian-cuisine restaurant in the Xinjing Center on Jiahe Road; one Michelin star, one of three in Xiamen.', 'Book ahead, especially for weekend dinners.'],
      es: ['Yanyu (Jiahe Road)', 'Un refinado restaurante de cocina de Fujian en el Xinjing Center de Jiahe Road; una estrella Michelin, una de las tres de Xiamen.', 'Reserva con antelación, sobre todo cenas de fin de semana.'],
      de: ['Yanyu (Jiahe Road)', 'Ein feines Restaurant mit Fujian-Küche im Xinjing Center an der Jiahe Road; ein Michelin-Stern, einer von dreien in Xiamen.', 'Vorab reservieren, besonders fürs Wochenende.'],
      fr: ['Yanyu (Jiahe Road)', 'Un restaurant raffiné de cuisine du Fujian au Xinjing Center, Jiahe Road ; une étoile Michelin, l’une des trois de Xiamen.', 'Réservez à l’avance, surtout le week-end.'],
      it: ['Yanyu (Jiahe Road)', 'Un raffinato ristorante di cucina del Fujian nel Xinjing Center di Jiahe Road; una stella Michelin, una delle tre di Xiamen.', 'Prenota in anticipo, soprattutto per il weekend.'],
    }, { price: level(3), address: '2F, Building A, Xinjing Center, 21 Jiahe Road, Siming', michelin: { award: 'star1', year: 2026 }, menu: [
      ['Fujian classics', undefined, 'классика фуцзяньской кухни|Fujian classics|clásicos de Fujian|Fujian-Klassiker|classiques du Fujian|classici del Fujian'],
      ['Seasonal seafood', undefined, 'сезонные морепродукты|seasonal seafood|marisco de temporada|saisonale Meeresfrüchte|fruits de mer de saison|frutti di mare di stagione'],
    ] }),
    P('hokklo', 'food', 24.492, 118.13, BAY, 4.7, 700, ['food', 'luxury'], {
      ru: ['Hokklo', 'Ресторан на 6-м этаже отеля Waldorf Astoria: современный взгляд на традиционную фуцзяньскую кухню; одна звезда Michelin.', 'Попросите столик у окна — вид на город сверху.'],
      en: ['Hokklo', 'A restaurant on the 6th floor of the Waldorf Astoria: a modern take on traditional Fujian cooking; one Michelin star.', 'Ask for a window table — the city spreads below.'],
      es: ['Hokklo', 'Un restaurante en la 6.ª planta del Waldorf Astoria: una visión moderna de la cocina tradicional de Fujian; una estrella Michelin.', 'Pide mesa junto a la ventana: la ciudad a tus pies.'],
      de: ['Hokklo', 'Ein Restaurant im 6. Stock des Waldorf Astoria: moderne Interpretation traditioneller Fujian-Küche; ein Michelin-Stern.', 'Nach einem Fenstertisch fragen – die Stadt liegt unter Ihnen.'],
      fr: ['Hokklo', 'Un restaurant au 6e étage du Waldorf Astoria : une lecture moderne de la cuisine traditionnelle du Fujian ; une étoile Michelin.', 'Demandez une table près de la fenêtre : la ville à vos pieds.'],
      it: ['Hokklo', 'Un ristorante al 6° piano del Waldorf Astoria: una lettura moderna della cucina tradizionale del Fujian; una stella Michelin.', 'Chiedi un tavolo alla finestra: la città sotto di te.'],
    }, { price: level(3), address: '6F, Waldorf Astoria Xiamen, 1 Lianhua North Road, Siming', michelin: { award: 'star1', year: 2026 }, menu: [
      ['Modern Fujian tasting menu', undefined, 'дегустационное меню современной фуцзяньской кухни|modern Fujian tasting menu|menú degustación de Fujian moderno|modernes Fujian-Degustationsmenü|menu dégustation Fujian moderne|menu degustazione del Fujian moderno'],
      ['Seasonal seafood', undefined, 'сезонные морепродукты|seasonal seafood|marisco de temporada|saisonale Meeresfrüchte|fruits de mer de saison|frutti di mare di stagione'],
    ] }),
    P('fleurs-et-festin', 'food', 24.457, 118.085, LANE, 4.6, 600, ['food', 'luxury', 'romance'], {
      ru: ['Fleurs Et Festin', 'Ресторан кухни Чаошань в трёхэтажном историческом здании в районе Сымин; одна звезда Michelin.', 'Чаошаньская кухня — это морепродукты и тушёное в соусе лу; спросите сезонные блюда.'],
      en: ['Fleurs Et Festin', 'A Chaoshan-cuisine restaurant in a three-storey historic building in Siming; one Michelin star.', 'Chaoshan cooking means seafood and lu-braised dishes; ask about seasonal plates.'],
      es: ['Fleurs Et Festin', 'Un restaurante de cocina de Chaoshan en un edificio histórico de tres plantas en Siming; una estrella Michelin.', 'La cocina de Chaoshan es marisco y guisos en salsa lu: pregunta por lo de temporada.'],
      de: ['Fleurs Et Festin', 'Ein Restaurant mit Chaoshan-Küche in einem dreistöckigen historischen Gebäude in Siming; ein Michelin-Stern.', 'Chaoshan-Küche heißt Meeresfrüchte und in Lu-Soße Geschmortes; nach Saisongerichten fragen.'],
      fr: ['Fleurs Et Festin', 'Un restaurant de cuisine de Chaoshan dans un bâtiment historique de trois étages à Siming ; une étoile Michelin.', 'La cuisine de Chaoshan, ce sont fruits de mer et braisés au lu : demandez les plats de saison.'],
      it: ['Fleurs Et Festin', 'Un ristorante di cucina di Chaoshan in un edificio storico di tre piani a Siming; una stella Michelin.', 'La cucina di Chaoshan è pesce e brasati in salsa lu: chiedi i piatti di stagione.'],
    }, { price: level(2), address: '16 Liaohua Road, Siming', michelin: { award: 'star1', year: 2026 }, menu: [
      ['Chaoshan lu-braised dishes', undefined, 'блюда, тушёные в соусе лу по-чаошаньски|Chaoshan lu-braised dishes|guisos en salsa lu de Chaoshan|in Lu-Soße Geschmortes nach Chaoshan-Art|braisés au lu de Chaoshan|brasati in salsa lu di Chaoshan'],
      ['Seasonal seafood', undefined, 'сезонные морепродукты|seasonal seafood|marisco de temporada|saisonale Meeresfrüchte|fruits de mer de saison|frutti di mare di stagione'],
    ] }),
    P('a-xi-xia-mian', 'food', 24.4575, 118.0835, LANE, 4.5, 2100, ['food', 'streetfood'], {
      ru: ['А Си — лапша с креветками', 'Лапшичная в старом городе, почти сто лет варящая лапшу с креветками по-старому: панцири и головы креветок обжаривают, толкут и варят часами. Bib Gourmand.', 'Бульон здесь главное — пейте его до дна.'],
      en: ['A Xi Xia Mian', 'An old-town noodle shop making prawn noodles the traditional way for almost a century: shells and heads are toasted, pounded and simmered for hours. Bib Gourmand.', 'The broth is the star — drink it to the bottom.'],
      es: ['A Xi Xia Mian', 'Un local de fideos de la ciudad vieja que lleva casi un siglo haciendo fideos con gamba a la antigua: caparazones y cabezas tostados, machacados y cocidos durante horas. Bib Gourmand.', 'El caldo es la estrella: bébetelo entero.'],
      de: ['A Xi Xia Mian', 'Ein Nudelladen in der Altstadt, der seit fast hundert Jahren Garnelennudeln traditionell kocht: Schalen und Köpfe werden geröstet, zerstoßen und stundenlang gekocht. Bib Gourmand.', 'Die Brühe ist der Star – bis zum Grund trinken.'],
      fr: ['A Xi Xia Mian', 'Une échoppe de la vieille ville qui prépare depuis près d’un siècle les nouilles aux crevettes à l’ancienne : carapaces et têtes grillées, pilées et mijotées des heures. Bib Gourmand.', 'Le bouillon est la vedette : buvez-le jusqu’au bout.'],
      it: ['A Xi Xia Mian', 'Un locale della città vecchia che da quasi un secolo prepara i noodle ai gamberi alla vecchia maniera: gusci e teste tostati, pestati e sobbolliti per ore. Bib Gourmand.', 'Il brodo è il protagonista: bevilo fino in fondo.'],
    }, { price: level(1), michelin: { award: 'bib', year: 2026 }, menu: [
      ['Xia mian', undefined, 'лапша в креветочном бульоне|noodles in prawn broth|fideos en caldo de gamba|Nudeln in Garnelenbrühe|nouilles au bouillon de crevettes|noodle in brodo di gamberi'],
      ['Extra prawns', undefined, 'добавка — очищенные креветки|extra peeled prawns|gambas peladas extra|extra geschälte Garnelen|crevettes décortiquées en plus|gamberi sgusciati extra'],
    ] }),
    P('ming-yue-xia-mian', 'food', 24.464, 118.095, LANE, 4.5, 1900, ['food', 'streetfood'], {
      ru: ['Минъюэ — лапша с креветками (Сяхэ)', 'Лапшичная в старом городе с историей больше 20 лет: бульон из сотен креветочных голов, с оранжевым маслом из креветочной икры и тёртым чесноком; сверху — креветки, креветочные шарики, чашу. Bib Gourmand.', 'Возьмите полную версию со всеми добавками — так видно, за что дали Bib.'],
      en: ['Ming Yue Xia Mian (Xiahe Road)', 'An old-town noodle shop of over 20 years: broth from hundreds of prawn heads, with orange tomalley oil and grated garlic; topped with prawns, prawn balls and char siu. Bib Gourmand.', 'Get the full bowl with all toppings — it shows why it earned the Bib.'],
      es: ['Ming Yue Xia Mian (Xiahe Road)', 'Un local de fideos con más de 20 años: caldo de cientos de cabezas de gamba, aceite naranja de coral y ajo rallado; con gambas, bolas de gamba y char siu. Bib Gourmand.', 'Pide el cuenco completo: así se entiende el Bib.'],
      de: ['Ming Yue Xia Mian (Xiahe Road)', 'Ein Nudelladen der Altstadt mit über 20 Jahren: Brühe aus Hunderten Garnelenköpfen, orangem Rogenöl und geriebenem Knoblauch; dazu Garnelen, Garnelenbällchen und Char Siu. Bib Gourmand.', 'Die volle Schale mit allem nehmen – dann versteht man den Bib.'],
      fr: ['Ming Yue Xia Mian (Xiahe Road)', 'Une échoppe de plus de 20 ans : bouillon de centaines de têtes de crevettes, huile orange de corail et ail râpé ; garni de crevettes, boulettes de crevette et char siu. Bib Gourmand.', 'Prenez le bol complet : vous comprendrez le Bib.'],
      it: ['Ming Yue Xia Mian (Xiahe Road)', 'Un locale di noodle con oltre 20 anni: brodo da centinaia di teste di gambero, olio arancione di corallo e aglio grattugiato; con gamberi, polpette di gambero e char siu. Bib Gourmand.', 'Prendi la ciotola completa: capirai il Bib.'],
    }, { price: level(1), michelin: { award: 'bib', year: 2026 }, menu: [
      ['Xia mian with everything', undefined, 'лапша с креветками, шариками и чашу|prawn noodles with prawns, balls and char siu|fideos con gambas, bolas y char siu|Garnelennudeln mit Bällchen und Char Siu|nouilles crevettes, boulettes et char siu|noodle con gamberi, polpette e char siu'],
      ['Prawn balls', undefined, 'креветочные шарики|prawn balls|bolas de gamba|Garnelenbällchen|boulettes de crevette|polpette di gamberi'],
    ] }),
    P('chen-xian-sen-sha-cha-mian', 'food', 24.58, 118.1, BAY, 4.4, 1500, ['food', 'streetfood'], {
      ru: ['Чэнь Сяньсэн — лапша шача', 'Лапша шача — главное блюдо Сямэня: насыщенный ореховый бульон на соусе шача с морепродуктами и потрохами на выбор. Эта лапшичная в Цзимэе — Bib Gourmand.', 'Выбирайте добавки сами из витрины — так здесь принято.'],
      en: ['Chen Xian Sen Sha Cha Mian', 'Sha cha noodles are Xiamen’s signature: a rich, nutty satay broth with your choice of seafood and offal. This Jimei shop is a Bib Gourmand.', 'Pick your toppings from the counter yourself — that’s the custom.'],
      es: ['Chen Xian Sen Sha Cha Mian', 'Los fideos sha cha son el plato de Xiamen: caldo de satay espeso y avellanado con marisco y casquería a elegir. Este local de Jimei es Bib Gourmand.', 'Elige tú los ingredientes del mostrador: así se hace.'],
      de: ['Chen Xian Sen Sha Cha Mian', 'Sha-Cha-Nudeln sind Xiamens Spezialität: kräftige, nussige Satay-Brühe mit Meeresfrüchten und Innereien nach Wahl. Dieser Laden in Jimei ist Bib Gourmand.', 'Die Zutaten selbst an der Theke aussuchen – so ist es üblich.'],
      fr: ['Chen Xian Sen Sha Cha Mian', 'Les nouilles sha cha sont le plat de Xiamen : un bouillon satay riche et noisette, fruits de mer et abats au choix. Cette échoppe de Jimei est Bib Gourmand.', 'Choisissez vous-même vos garnitures au comptoir : c’est l’usage.'],
      it: ['Chen Xian Sen Sha Cha Mian', 'I noodle sha cha sono il piatto di Xiamen: brodo satay ricco e nocciolato con frutti di mare e frattaglie a scelta. Questo locale di Jimei è Bib Gourmand.', 'Scegli tu i condimenti al banco: è l’usanza.'],
    }, { price: level(1), address: '131-3 Jiageng Road, Jimei', michelin: { award: 'bib', year: 2026 }, menu: [
      ['Sha cha mian', undefined, 'лапша в бульоне шача|noodles in sha cha satay broth|fideos en caldo sha cha|Nudeln in Sha-Cha-Brühe|nouilles au bouillon sha cha|noodle in brodo sha cha'],
      ['Seafood toppings', undefined, 'добавки из морепродуктов|seafood toppings|ingredientes de marisco|Meeresfrüchte-Toppings|garnitures de fruits de mer|condimenti di mare'],
    ] }),
    P('xian-xiong-qi', 'food', 24.472, 118.098, BAY, 4.4, 1300, ['food'], {
      ru: ['Сянь Сюнци', 'Ресторан рыбы и морепродуктов на улице Хоуцзяндай в районе Сымин — простой и честный, Bib Gourmand.', 'Спросите, что сегодня привезли с рынка, — меню зависит от улова.'],
      en: ['Xian Xiong Qi', 'A fish-and-seafood restaurant on Houjiangdai Road in Siming — simple and honest, a Bib Gourmand.', 'Ask what came from the market today — the menu follows the catch.'],
      es: ['Xian Xiong Qi', 'Un restaurante de pescado y marisco en Houjiangdai Road, Siming: sencillo y honesto, Bib Gourmand.', 'Pregunta qué llegó hoy del mercado: la carta sigue la pesca.'],
      de: ['Xian Xiong Qi', 'Ein Fisch- und Meeresfrüchte-Restaurant an der Houjiangdai Road in Siming – schlicht und ehrlich, Bib Gourmand.', 'Fragen, was heute vom Markt kam – die Karte folgt dem Fang.'],
      fr: ['Xian Xiong Qi', 'Un restaurant de poisson et fruits de mer sur Houjiangdai Road, à Siming : simple et honnête, Bib Gourmand.', 'Demandez l’arrivage du jour : la carte suit la pêche.'],
      it: ['Xian Xiong Qi', 'Un ristorante di pesce e frutti di mare su Houjiangdai Road a Siming: semplice e onesto, Bib Gourmand.', 'Chiedi cosa è arrivato oggi dal mercato: il menu segue il pescato.'],
    }, { price: level(2), michelin: { award: 'bib', year: 2026 }, menu: [
      ['Catch of the day', undefined, 'рыба дня|catch of the day|pesca del día|Fang des Tages|pêche du jour|pescato del giorno'],
      ['Local shellfish', undefined, 'местные моллюски|local shellfish|marisco local|lokale Muscheln|coquillages locaux|molluschi locali'],
    ] }),
    P('huangzehe', 'food', 24.4572, 118.0815, LANE, 4.2, 5600, ['food', 'history'], {
      ru: ['Хуан Цзэхэ — арахисовый суп', 'Старая закусочная с 1945 года на улице Чжуншань: сладкий арахисовый суп, где орехи разварены до мягкости, и рисовые цзунцзы с мясом.', 'Арахисовый суп с цзунцзы — классический сямэньский завтрак.'],
      en: ['Huangzehe peanut soup', 'An old eatery since 1945 on Zhongshan Road: sweet peanut soup with nuts cooked meltingly soft, and rice zongzi with pork.', 'Peanut soup with a zongzi is the classic Xiamen breakfast.'],
      es: ['Huangzehe, sopa de cacahuete', 'Un viejo local desde 1945 en la calle Zhongshan: sopa dulce de cacahuete cocido hasta deshacerse y zongzi de arroz con cerdo.', 'Sopa de cacahuete con zongzi: el desayuno clásico de Xiamen.'],
      de: ['Huangzehe Erdnusssuppe', 'Ein altes Lokal seit 1945 an der Zhongshan Road: süße Erdnusssuppe mit butterweich gekochten Nüssen und Reis-Zongzi mit Schwein.', 'Erdnusssuppe mit Zongzi ist das klassische Frühstück in Xiamen.'],
      fr: ['Huangzehe, soupe d’arachide', 'Une vieille échoppe depuis 1945 rue Zhongshan : soupe sucrée d’arachides fondantes et zongzi de riz au porc.', 'Soupe d’arachide et zongzi : le petit-déjeuner classique de Xiamen.'],
      it: ['Huangzehe, zuppa di arachidi', 'Un vecchio locale dal 1945 su via Zhongshan: zuppa dolce di arachidi cotte fino a sciogliersi e zongzi di riso con maiale.', 'Zuppa di arachidi e zongzi: la colazione classica di Xiamen.'],
    }, { price: level(1), menu: [
      ['Peanut soup', undefined, 'сладкий арахисовый суп|sweet peanut soup|sopa dulce de cacahuete|süße Erdnusssuppe|soupe d’arachide sucrée|zuppa dolce di arachidi'],
      ['Pork zongzi', undefined, 'цзунцзы с мясом|rice zongzi with pork|zongzi de arroz con cerdo|Reis-Zongzi mit Schwein|zongzi de riz au porc|zongzi di riso con maiale'],
    ] }),
    P('nanputuo-vegetarian', 'food', 24.4415, 118.0965, GREEN, 4.3, 4300, ['food', 'temples'], {
      ru: ['Вегетарианский ресторан Наньпутуо', 'Ресторан при храме Наньпутуо, известный буддийской вегетарианской кухней и выпечкой — сувенирным вегетарианским печеньем храма.', 'Купите коробку храмового печенья у выхода — классический подарок из Сямэня.'],
      en: ['Nanputuo Vegetarian Restaurant', 'The restaurant at Nanputuo Temple, known for Buddhist vegetarian cooking and the temple’s vegetarian biscuits.', 'Buy a box of the temple biscuits at the exit — a classic Xiamen gift.'],
      es: ['Restaurante vegetariano de Nanputuo', 'El restaurante del templo Nanputuo, conocido por su cocina vegetariana budista y las galletas vegetarianas del templo.', 'Compra una caja de galletas del templo a la salida: regalo clásico de Xiamen.'],
      de: ['Vegetarisches Restaurant Nanputuo', 'Das Restaurant am Nanputuo-Tempel, bekannt für buddhistische vegetarische Küche und die vegetarischen Tempelkekse.', 'Am Ausgang eine Schachtel Tempelkekse kaufen – ein klassisches Mitbringsel aus Xiamen.'],
      fr: ['Restaurant végétarien de Nanputuo', 'Le restaurant du temple Nanputuo, connu pour sa cuisine végétarienne bouddhiste et ses biscuits végétariens.', 'Achetez une boîte de biscuits du temple à la sortie : cadeau classique de Xiamen.'],
      it: ['Ristorante vegetariano di Nanputuo', 'Il ristorante del tempio Nanputuo, noto per la cucina vegetariana buddhista e i biscotti vegetariani del tempio.', 'Compra una scatola di biscotti del tempio all’uscita: regalo classico di Xiamen.'],
    }, { price: level(2), menu: [
      ['Buddhist vegetarian dishes', undefined, 'буддийские вегетарианские блюда|Buddhist vegetarian dishes|platos vegetarianos budistas|buddhistische vegetarische Gerichte|plats végétariens bouddhistes|piatti vegetariani buddhisti'],
      ['Temple vegetarian biscuits', undefined, 'храмовое вегетарианское печенье|temple vegetarian biscuits|galletas vegetarianas del templo|vegetarische Tempelkekse|biscuits végétariens du temple|biscotti vegetariani del tempio'],
    ] }),
    P('bashi-market', 'food', 24.4605, 118.081, LANE, 4.4, 5100, ['market', 'streetfood', 'food'], {
      ru: ['Восьмой рынок (Баши)', 'Старый морской рынок в переулках старого города: рыба, крабы и моллюски на тазах, а вокруг — лавки с местными закусками.', 'Приходите с утра — к полудню торговля стихает.'],
      en: ['No. 8 Market (Bashi)', 'An old seafood market in the old-town lanes: fish, crabs and shellfish in tubs, surrounded by local snack stalls.', 'Come in the morning — trading winds down by noon.'],
      es: ['Mercado n.º 8 (Bashi)', 'Un viejo mercado de marisco en las callejas del casco antiguo: pescado, cangrejos y moluscos en barreños, rodeado de puestos de tentempiés.', 'Ve por la mañana: a mediodía la actividad decae.'],
      de: ['Markt Nr. 8 (Bashi)', 'Ein alter Fischmarkt in den Altstadtgassen: Fisch, Krabben und Muscheln in Wannen, rundherum Stände mit lokalen Snacks.', 'Morgens kommen – gegen Mittag flaut der Handel ab.'],
      fr: ['Marché n° 8 (Bashi)', 'Un vieux marché aux fruits de mer dans les ruelles de la vieille ville : poissons, crabes et coquillages en bassines, entourés d’échoppes de snacks.', 'Venez le matin : l’activité retombe vers midi.'],
      it: ['Mercato n. 8 (Bashi)', 'Un vecchio mercato del pesce nei vicoli della città vecchia: pesci, granchi e molluschi nelle tinozze, circondati da banchi di snack.', 'Vieni al mattino: verso mezzogiorno il mercato si calma.'],
    }, { spot: 'hidden', price: level(1), menu: [
      ['Oyster omelette', undefined, 'омлет с устрицами|oyster omelette|tortilla de ostras|Austernomelett|omelette aux huîtres|frittata di ostriche'],
      ['Fish balls', undefined, 'рыбные шарики|fish balls|albóndigas de pescado|Fischbällchen|boulettes de poisson|polpette di pesce'],
    ] }),
    P('zengcuoan-snacks', 'food', 24.432, 118.121, BAY, 4.1, 12000, ['streetfood', 'nightlife'], {
      ru: ['Закуски деревни Цзэнцоань', 'Бывшая рыбацкая деревня у набережной Хуаньдао, теперь лабиринт лавок с закусками: омлеты с устрицами, лапша шача и тусунь-дун — холодец из морских червей.', 'Тусунь-дун звучит пугающе, но это местная классика — попробуйте хотя бы кусочек.'],
      en: ['Zengcuo’an village snacks', 'A former fishing village by Huandao Road, now a maze of snack stalls: oyster omelettes, sha cha noodles and tusun dong — sea-worm jelly.', 'Tusun dong sounds scary but it’s a local classic — try at least a bite.'],
      es: ['Tentempiés de la aldea de Zengcuo’an', 'Una antigua aldea pesquera junto al paseo Huandao, hoy un laberinto de puestos: tortillas de ostras, fideos sha cha y tusun dong, gelatina de gusanos marinos.', 'El tusun dong asusta, pero es un clásico local: prueba al menos un bocado.'],
      de: ['Snacks im Dorf Zengcuo’an', 'Ein früheres Fischerdorf an der Huandao Road, heute ein Gassengewirr voller Snackstände: Austernomelett, Sha-Cha-Nudeln und Tusun Dong – Meereswurm-Gelee.', 'Tusun Dong klingt gruselig, ist aber ein lokaler Klassiker – wenigstens probieren.'],
      fr: ['Snacks du village de Zengcuo’an', 'Un ancien village de pêcheurs près de la route Huandao, devenu un dédale d’échoppes : omelettes aux huîtres, nouilles sha cha et tusun dong, gelée de vers marins.', 'Le tusun dong fait peur, mais c’est un classique local : goûtez au moins une bouchée.'],
      it: ['Snack del villaggio di Zengcuo’an', 'Un ex villaggio di pescatori vicino alla strada Huandao, oggi un dedalo di banchi: frittate di ostriche, noodle sha cha e tusun dong, gelatina di vermi marini.', 'Il tusun dong spaventa, ma è un classico locale: assaggiane almeno un boccone.'],
    }, { price: level(1), menu: [
      ['Oyster omelette', undefined, 'омлет с устрицами|oyster omelette|tortilla de ostras|Austernomelett|omelette aux huîtres|frittata di ostriche'],
      ['Tusun dong', undefined, 'холодец из морских червей|sea-worm jelly|gelatina de gusanos marinos|Meereswurm-Gelee|gelée de vers marins|gelatina di vermi marini'],
      ['Sha cha mian', undefined, 'лапша шача|sha cha noodles|fideos sha cha|Sha-Cha-Nudeln|nouilles sha cha|noodle sha cha'],
    ] }),
  ],
  routes: [
    D(['huangzehe', 'gulangyu', 'sunlight-rock', 'shuzhuang-garden', 'a-xi-xia-mian', 'zhongshan-road', 'fleurs-et-festin'],
      'Остров Гуланъюй и старый Сямэнь|Gulangyu Island and old Xiamen|La isla de Gulangyu y el viejo Xiamen|Insel Gulangyu und das alte Xiamen|L’île de Gulangyu et le vieux Xiamen|L’isola di Gulangyu e la vecchia Xiamen'),
    D(['nanputuo', 'nanputuo-vegetarian', 'xiamen-university', 'shapowei', 'hulishan-fortress', 'huandao-road', 'zengcuoan-snacks', 'yanyu'],
      'Наньпутуо, университет и набережная Хуаньдао|Nanputuo, the university and Huandao Road|Nanputuo, la universidad y el paseo Huandao|Nanputuo, Universität und Huandao Road|Nanputuo, l’université et la route Huandao|Nanputuo, l’università e la strada Huandao'),
    D(['tianluokeng-tulou', 'jimei', 'chen-xian-sen-sha-cha-mian', 'hokklo'],
      'Тулоу Тяньлокэн и студгородок Цзимэй|Tianluokeng Tulou and Jimei School Village|Los tulou de Tianluokeng y la villa escolar de Jimei|Tulou von Tianluokeng und Schuldorf Jimei|Les tulou de Tianluokeng et le village scolaire de Jimei|I tulou di Tianluokeng e il villaggio scolastico di Jimei'),
  ],
};

export default pack;
