import type { CityPack } from '../types';
import { free, level, makeDay, makePlace } from './_kit.ts';

const P = makePlace('harbin');
const D = makeDay('harbin');
const CASTLE = 'HsqB3X2tiOA';
const FORT = '9N-vg1VRvwk';
const SCULPTURE = 'HjnrjKUUhlY';
const SOPHIA = '6xu5uCezzm0';
const THEATRE = 'S6Bl-8pVBvk';

const pack: CityPack = {
  country: 'CN',
  city: 'harbin',
  places: [
    P('central-street', 'attraction', 45.774, 126.617, SOPHIA, 4.6, 39000, ['architecture', 'history', 'shopping'], {
      ru: ['Центральная улица', 'Пешеходная улица 1898 года длиной около 1,4 км, вымощенная в 1924 году брусчаткой; вдоль неё — десятки зданий в стиле модерн, барокко и эклектики русского Харбина.', 'Брусчатка зимой скользкая — обувь с хорошей подошвой обязательна.'],
      en: ['Central Street', 'An 1898 pedestrian street about 1.4 km long, paved with setts in 1924; lined with dozens of Art Nouveau, Baroque and eclectic buildings of Russian Harbin.', 'The cobbles are slippery in winter — shoes with good grip are a must.'],
      es: ['Calle Central', 'Una calle peatonal de 1898 de unos 1,4 km, adoquinada en 1924, con decenas de edificios modernistas, barrocos y eclécticos del Harbin ruso.', 'Los adoquines resbalan en invierno: lleva calzado con buena suela.'],
      de: ['Zentralstraße', 'Eine Fußgängerstraße von 1898, rund 1,4 km lang, 1924 gepflastert; gesäumt von Dutzenden Jugendstil-, Barock- und Historismusbauten des russischen Harbin.', 'Das Pflaster ist im Winter glatt – Schuhe mit gutem Profil sind Pflicht.'],
      fr: ['Rue Centrale', 'Une rue piétonne de 1898 d’environ 1,4 km, pavée en 1924, bordée de dizaines d’immeubles Art nouveau, baroques et éclectiques du Harbin russe.', 'Les pavés glissent en hiver : de bonnes semelles sont indispensables.'],
      it: ['Via Centrale', 'Una via pedonale del 1898 lunga circa 1,4 km, lastricata nel 1924, con decine di edifici liberty, barocchi ed eclettici della Harbin russa.', 'D’inverno il selciato scivola: servono scarpe con buona suola.'],
    }, { spot: 'insta', price: free }),
    P('st-sophia', 'attraction', 45.7713, 126.6268, SOPHIA, 4.6, 33000, ['architecture', 'history', 'museums'], {
      ru: ['Собор Святой Софии', 'Крупнейший православный храм Дальнего Востока, построенный в 1923–1932 годах на месте деревянной церкви 1907 года; сейчас внутри музей архитектуры Харбина.', 'Вечером собор подсвечен — лучший кадр с площади перед входом.'],
      en: ['St. Sophia Cathedral', 'The largest Orthodox church in the Far East, built in 1923–1932 on the site of a 1907 wooden church; it now houses the Harbin architecture museum.', 'The cathedral is lit at night — the best shot is from the square in front.'],
      es: ['Catedral de Santa Sofía', 'La mayor iglesia ortodoxa del Lejano Oriente, construida en 1923–1932 en el lugar de una iglesia de madera de 1907; hoy alberga el museo de arquitectura de Harbin.', 'De noche se ilumina: la mejor foto, desde la plaza.'],
      de: ['Sophienkathedrale', 'Die größte orthodoxe Kirche Fernost, 1923–1932 anstelle einer Holzkirche von 1907 erbaut; heute beherbergt sie das Architekturmuseum Harbins.', 'Abends beleuchtet – das beste Foto vom Platz davor.'],
      fr: ['Cathédrale Sainte-Sophie', 'La plus grande église orthodoxe d’Extrême-Orient, bâtie en 1923–1932 à la place d’une église en bois de 1907 ; elle abrite le musée d’architecture de Harbin.', 'Elle est illuminée le soir : la meilleure photo se prend depuis la place.'],
      it: ['Cattedrale di Santa Sofia', 'La più grande chiesa ortodossa dell’Estremo Oriente, costruita nel 1923–1932 al posto di una chiesa di legno del 1907; oggi ospita il museo dell’architettura di Harbin.', 'Di sera è illuminata: la foto migliore dalla piazza davanti.'],
    }, { spot: 'insta', price: level(1) }),
    P('ice-snow-world', 'attraction', 45.7795, 126.56, CASTLE, 4.6, 28000, ['winter', 'art', 'photo'], {
      ru: ['Ледово-снежный мир', 'Зимний город из блоков льда реки Сунгари: замки, горки и башни с цветной подсветкой; работает примерно с конца декабря до конца февраля.', 'Приезжайте к закату — подсветка включается в сумерках; одевайтесь как на −25 °C.'],
      en: ['Ice and Snow World', 'A winter city built from Songhua River ice: castles, slides and towers lit in colour; open roughly from late December to late February.', 'Arrive at sunset — the lights come on at dusk; dress for −25 °C.'],
      es: ['Mundo de Hielo y Nieve', 'Una ciudad invernal hecha con hielo del río Songhua: castillos, toboganes y torres iluminados de colores; abre más o menos de finales de diciembre a finales de febrero.', 'Llega al atardecer: las luces se encienden al anochecer; vístete para −25 °C.'],
      de: ['Eis- und Schneewelt', 'Eine Winterstadt aus Eis des Songhua: Burgen, Rutschen und Türme in bunter Beleuchtung; geöffnet etwa Ende Dezember bis Ende Februar.', 'Zum Sonnenuntergang kommen – in der Dämmerung geht das Licht an; Kleidung für −25 °C.'],
      fr: ['Monde de glace et de neige', 'Une ville d’hiver en blocs de glace du Songhua : châteaux, toboggans et tours aux éclairages colorés ; ouvert environ de fin décembre à fin février.', 'Arrivez au coucher du soleil : les lumières s’allument au crépuscule ; habillez-vous pour −25 °C.'],
      it: ['Mondo di Ghiaccio e Neve', 'Una città invernale fatta col ghiaccio del fiume Songhua: castelli, scivoli e torri illuminati a colori; aperto circa da fine dicembre a fine febbraio.', 'Arriva al tramonto: le luci si accendono al crepuscolo; vestiti per −25 °C.'],
    }, { spot: 'insta', price: level(3) }),
    P('sun-island', 'nature', 45.788, 126.601, SCULPTURE, 4.4, 17000, ['winter', 'art', 'nature'], {
      ru: ['Остров Солнца', 'Большой парковый остров на Сунгари: летом — лужайки и озёра, зимой — выставка снежных скульптур.', 'Зимой можно перейти на остров прямо по льду реки от набережной.'],
      en: ['Sun Island', 'A large park island on the Songhua: lawns and lakes in summer, a snow sculpture expo in winter.', 'In winter you can walk to the island straight across the river ice from the embankment.'],
      es: ['Isla del Sol', 'Una gran isla-parque en el Songhua: praderas y lagos en verano, exposición de esculturas de nieve en invierno.', 'En invierno se puede cruzar a pie sobre el hielo del río desde el paseo.'],
      de: ['Sonneninsel', 'Eine große Parkinsel im Songhua: im Sommer Wiesen und Seen, im Winter eine Schneeskulpturen-Ausstellung.', 'Im Winter kann man vom Ufer direkt übers Flusseis zur Insel gehen.'],
      fr: ['Île du Soleil', 'Une grande île-parc sur le Songhua : pelouses et lacs l’été, exposition de sculptures de neige l’hiver.', 'L’hiver, on peut rejoindre l’île à pied sur la glace du fleuve depuis le quai.'],
      it: ['Isola del Sole', 'Una grande isola-parco sul Songhua: prati e laghi d’estate, mostra di sculture di neve d’inverno.', 'D’inverno si arriva all’isola a piedi sul ghiaccio del fiume dal lungofiume.'],
    }, { price: level(2) }),
    P('stalin-park', 'nature', 45.7797, 126.617, FORT, 4.4, 14000, ['views', 'history', 'winter'], {
      ru: ['Парк Сталина и Монумент борьбы с наводнением', 'Набережная Сунгари в конце Центральной улицы с колонной 1958 года в память о победе над наводнением 1957 года; зимой на льду реки катаются на санях и коньках.', 'Летом здесь гуляет весь город — приходите на закат над рекой.'],
      en: ['Stalin Park and Flood Control Monument', 'The Songhua embankment at the end of Central Street, with a 1958 column commemorating the fight against the 1957 flood; in winter people sled and skate on the river ice.', 'In summer the whole city strolls here — come for sunset over the river.'],
      es: ['Parque Stalin y Monumento contra la Inundación', 'El paseo del Songhua al final de la calle Central, con una columna de 1958 que recuerda la lucha contra la inundación de 1957; en invierno se patina y se va en trineo sobre el hielo.', 'En verano pasea toda la ciudad: ven al atardecer sobre el río.'],
      de: ['Stalin-Park und Hochwasserdenkmal', 'Die Songhua-Uferpromenade am Ende der Zentralstraße mit einer Säule von 1958 zur Erinnerung an den Kampf gegen die Flut von 1957; im Winter Schlitten und Schlittschuhe auf dem Eis.', 'Im Sommer flaniert die ganze Stadt hier – zum Sonnenuntergang über dem Fluss kommen.'],
      fr: ['Parc Staline et monument de la Crue', 'Le quai du Songhua au bout de la rue Centrale, avec une colonne de 1958 commémorant la lutte contre la crue de 1957 ; l’hiver, luge et patin sur la glace du fleuve.', 'L’été, toute la ville s’y promène : venez au coucher du soleil sur le fleuve.'],
      it: ['Parco Stalin e Monumento all’Alluvione', 'Il lungofiume del Songhua in fondo a via Centrale, con una colonna del 1958 in ricordo della lotta contro l’alluvione del 1957; d’inverno slitte e pattini sul ghiaccio del fiume.', 'D’estate passeggia tutta la città: vieni al tramonto sul fiume.'],
    }, { price: free }),
    P('grand-theatre', 'attraction', 45.7999, 126.5795, THEATRE, 4.7, 9200, ['architecture', 'art', 'photo'], {
      ru: ['Большой театр Харбина', 'Белое здание MAD Architects (2015), похожее на заснеженные холмы, среди водно-болотных угодий северного берега; по крыше можно подняться по пандусам.', 'Поднимитесь по наружным пандусам на смотровую — оттуда весь силуэт здания.'],
      en: ['Harbin Grand Theatre', 'A white building by MAD Architects (2015) shaped like snowy hills, set in wetlands on the north bank; ramps let you climb over the roof.', 'Walk up the outer ramps to the lookout — you’ll see the whole silhouette.'],
      es: ['Gran Teatro de Harbin', 'Un edificio blanco de MAD Architects (2015) con forma de colinas nevadas, entre humedales de la orilla norte; unas rampas suben por el tejado.', 'Sube por las rampas exteriores al mirador: verás toda la silueta.'],
      de: ['Großes Theater Harbin', 'Ein weißer Bau von MAD Architects (2015), geformt wie verschneite Hügel, im Feuchtgebiet am Nordufer; über Rampen gelangt man aufs Dach.', 'Die äußeren Rampen zur Aussicht hinaufgehen – dann sieht man die ganze Silhouette.'],
      fr: ['Grand Théâtre de Harbin', 'Un bâtiment blanc de MAD Architects (2015) en forme de collines enneigées, au milieu des zones humides de la rive nord ; des rampes montent sur le toit.', 'Montez par les rampes extérieures jusqu’au belvédère : vous verrez toute la silhouette.'],
      it: ['Gran Teatro di Harbin', 'Un edificio bianco di MAD Architects (2015) a forma di colline innevate, tra le zone umide della riva nord; rampe salgono sopra il tetto.', 'Sali sulle rampe esterne fino al belvedere: vedrai tutta la sagoma.'],
    }, { spot: 'insta', price: free }),
    P('siberian-tiger-park', 'nature', 45.817, 126.605, FORT, 4.3, 12000, ['wildlife', 'nature'], {
      ru: ['Парк амурских тигров', 'Крупнейший питомник амурских тигров: по вольерам возят на закрытых автобусах, тигры подходят вплотную.', 'Садитесь у окна по ходу движения — тигры часто лежат вдоль дороги.'],
      en: ['Siberian Tiger Park', 'The largest breeding centre for Siberian (Amur) tigers: closed buses drive through the enclosures and tigers come right up close.', 'Sit by a window on the direction-of-travel side — tigers often lie along the road.'],
      es: ['Parque del Tigre Siberiano', 'El mayor centro de cría de tigres siberianos (del Amur): autobuses cerrados recorren los recintos y los tigres se acercan mucho.', 'Siéntate en la ventanilla del lado de la marcha: los tigres suelen tumbarse junto al camino.'],
      de: ['Sibirischer Tigerpark', 'Das größte Zuchtzentrum für Sibirische (Amur-)Tiger: geschlossene Busse fahren durch die Gehege, die Tiger kommen ganz nah.', 'Am Fenster in Fahrtrichtung sitzen – Tiger liegen oft am Weg.'],
      fr: ['Parc des tigres de Sibérie', 'Le plus grand centre d’élevage de tigres de Sibérie (de l’Amour) : des bus fermés traversent les enclos et les tigres s’approchent tout près.', 'Asseyez-vous côté fenêtre dans le sens de la marche : les tigres se couchent souvent le long de la piste.'],
      it: ['Parco della Tigre Siberiana', 'Il più grande centro di allevamento di tigri siberiane (dell’Amur): bus chiusi attraversano i recinti e le tigri si avvicinano moltissimo.', 'Siediti al finestrino nel senso di marcia: le tigri spesso stanno lungo la strada.'],
    }, { price: level(3) }),
    P('laodaowai', 'attraction', 45.784, 126.647, SOPHIA, 4.3, 9600, ['architecture', 'oldtown', 'history'], {
      ru: ['Старый Даовай — «китайское барокко»', 'Квартал 1920-х годов, где китайские купцы строили европейские фасады с китайскими орнаментами — летучими мышами, пионами и монетами; во дворах — старые лавки и закусочные.', 'Заглядывайте во дворы за фасадами — там самое интересное.'],
      en: ['Old Daowai — “Chinese Baroque”', 'A 1920s quarter where Chinese merchants built European façades with Chinese motifs — bats, peonies and coins; old shops and eateries fill the courtyards.', 'Peek into the courtyards behind the façades — that’s where the charm is.'],
      es: ['Viejo Daowai, el «barroco chino»', 'Un barrio de los años 1920 donde mercaderes chinos levantaron fachadas europeas con motivos chinos, murciélagos, peonías y monedas; los patios están llenos de tiendas y comedores.', 'Asómate a los patios tras las fachadas: ahí está el encanto.'],
      de: ['Alt-Daowai – „chinesischer Barock“', 'Ein Viertel der 1920er, in dem chinesische Kaufleute europäische Fassaden mit chinesischen Motiven bauten – Fledermäuse, Pfingstrosen, Münzen; in den Höfen alte Läden und Garküchen.', 'In die Höfe hinter den Fassaden schauen – dort liegt der Reiz.'],
      fr: ['Vieux Daowai, le « baroque chinois »', 'Un quartier des années 1920 où des marchands chinois bâtirent des façades européennes ornées de motifs chinois — chauves-souris, pivoines, pièces ; les cours abritent vieilles boutiques et gargotes.', 'Jetez un œil dans les cours derrière les façades : c’est là qu’est le charme.'],
      it: ['Vecchia Daowai, il «barocco cinese»', 'Un quartiere degli anni ’20 dove i mercanti cinesi costruirono facciate europee con motivi cinesi, pipistrelli, peonie e monete; nei cortili vecchie botteghe e trattorie.', 'Sbircia nei cortili dietro le facciate: lì c’è il fascino.'],
    }, { spot: 'hidden', price: free }),
    P('unit-731-museum', 'attraction', 45.608, 126.633, FORT, 4.7, 8800, ['history', 'museums'], {
      ru: ['Музей отряда 731', 'Мемориальный музей на месте базы японского отряда 731, проводившего опыты бактериологического оружия над людьми в 1930–40-е годы. Тяжёлое, но важное место.', 'Вход бесплатный по брони с паспортом; в понедельник обычно закрыто.'],
      en: ['Unit 731 Museum', 'A memorial museum on the site of the base of Japan’s Unit 731, which carried out biological-weapons experiments on people in the 1930s–40s. Harrowing but important.', 'Free with a booking and passport; usually closed on Mondays.'],
      es: ['Museo de la Unidad 731', 'Un museo memorial en la antigua base de la Unidad 731 japonesa, que experimentó armas biológicas con personas en los años 1930–40. Duro pero importante.', 'Gratis con reserva y pasaporte; suele cerrar los lunes.'],
      de: ['Museum der Einheit 731', 'Ein Gedenkmuseum auf dem Gelände der japanischen Einheit 731, die in den 1930er–40er Jahren Experimente mit biologischen Waffen an Menschen durchführte. Bedrückend, aber wichtig.', 'Eintritt frei mit Reservierung und Reisepass; montags meist geschlossen.'],
      fr: ['Musée de l’unité 731', 'Un musée mémorial sur le site de la base de l’unité japonaise 731, qui mena dans les années 1930–40 des expériences d’armes biologiques sur des humains. Éprouvant mais important.', 'Gratuit sur réservation avec passeport ; fermé en général le lundi.'],
      it: ['Museo dell’Unità 731', 'Un museo memoriale sul sito della base dell’Unità 731 giapponese, che negli anni ’30–’40 condusse esperimenti di armi biologiche su persone. Duro ma importante.', 'Gratuito con prenotazione e passaporto; di solito chiuso il lunedì.'],
    }, { price: free }),
    P('jile-temple', 'attraction', 45.77, 126.662, FORT, 4.4, 7100, ['temples', 'history'], {
      ru: ['Храм Цзилэ', 'Крупнейший буддийский храм провинции Хэйлунцзян, основанный в 1924 году; рядом — семиярусная пагода Ципу.', 'В храм вход бесплатный; утром здесь звучат молитвы монахов.'],
      en: ['Jile Temple', 'The largest Buddhist temple in Heilongjiang, founded in 1924; next to it stands the seven-tier Qifu pagoda.', 'Entry is free; in the morning you can hear the monks chanting.'],
      es: ['Templo Jile', 'El mayor templo budista de Heilongjiang, fundado en 1924; a su lado se alza la pagoda de siete pisos.', 'La entrada es gratuita; por la mañana se oyen los cantos de los monjes.'],
      de: ['Jile-Tempel', 'Der größte buddhistische Tempel Heilongjiangs, gegründet 1924; daneben steht die siebenstöckige Pagode.', 'Eintritt frei; morgens hört man die Mönche rezitieren.'],
      fr: ['Temple Jile', 'Le plus grand temple bouddhiste du Heilongjiang, fondé en 1924 ; à côté se dresse la pagode à sept étages.', 'Entrée gratuite ; le matin, on entend les moines psalmodier.'],
      it: ['Tempio Jile', 'Il più grande tempio buddhista dello Heilongjiang, fondato nel 1924; accanto sorge la pagoda a sette piani.', 'Ingresso gratuito; al mattino si sentono i canti dei monaci.'],
    }, { price: free }),
    P('confucian-temple', 'attraction', 45.759, 126.68, FORT, 4.4, 4300, ['history', 'architecture'], {
      ru: ['Храм Конфуция', 'Самый большой храм Конфуция на северо-востоке Китая, построенный в 1926–1929 годах: красные залы, мраморные мостики и тишина.', 'Здесь почти нет туристов — хорошая пауза от толп Центральной улицы.'],
      en: ['Confucius Temple', 'The largest Confucius temple in northeast China, built in 1926–1929: red halls, marble bridges and silence.', 'There are hardly any tourists — a good break from the Central Street crowds.'],
      es: ['Templo de Confucio', 'El mayor templo de Confucio del noreste de China, construido en 1926–1929: salones rojos, puentes de mármol y silencio.', 'Apenas hay turistas: buen respiro de las multitudes de la calle Central.'],
      de: ['Konfuziustempel', 'Der größte Konfuziustempel Nordostchinas, 1926–1929 erbaut: rote Hallen, Marmorbrücken und Stille.', 'Kaum Touristen – eine gute Pause vom Trubel der Zentralstraße.'],
      fr: ['Temple de Confucius', 'Le plus grand temple de Confucius du nord-est de la Chine, bâti en 1926–1929 : salles rouges, ponts de marbre et silence.', 'Presque pas de touristes : une bonne pause loin de la foule de la rue Centrale.'],
      it: ['Tempio di Confucio', 'Il più grande tempio di Confucio della Cina nord-orientale, costruito nel 1926–1929: sale rosse, ponti di marmo e silenzio.', 'Quasi nessun turista: una buona pausa dalla folla di via Centrale.'],
    }, { spot: 'hidden', price: level(1) }),
    P('volga-manor', 'attraction', 45.62, 126.83, SOPHIA, 4.4, 6600, ['architecture', 'gardens', 'photo'], {
      ru: ['Усадьба «Волга»', 'Парк-усадьба в русском стиле за городом: деревянные дома, мельница и копия харбинской церкви Святого Николая, снесённой в 1966 году.', 'Зимой здесь особенно красиво — снег, купола и тишина.'],
      en: ['Volga Manor', 'A Russian-style estate park outside the city: wooden houses, a windmill and a replica of Harbin’s St. Nicholas Church, demolished in 1966.', 'It’s especially lovely in winter — snow, domes and silence.'],
      es: ['Finca Volga', 'Un parque-finca de estilo ruso a las afueras: casas de madera, un molino y una réplica de la iglesia de San Nicolás de Harbin, demolida en 1966.', 'En invierno es especialmente bonita: nieve, cúpulas y silencio.'],
      de: ['Wolga-Landgut', 'Ein Gutspark im russischen Stil außerhalb der Stadt: Holzhäuser, eine Windmühle und eine Nachbildung der 1966 abgerissenen Nikolaikirche Harbins.', 'Im Winter besonders schön – Schnee, Kuppeln und Stille.'],
      fr: ['Domaine Volga', 'Un parc-domaine de style russe hors de la ville : maisons en bois, moulin et réplique de l’église Saint-Nicolas de Harbin, démolie en 1966.', 'Particulièrement beau en hiver : neige, coupoles et silence.'],
      it: ['Tenuta Volga', 'Un parco-tenuta in stile russo fuori città: case di legno, un mulino e una replica della chiesa di San Nicola di Harbin, demolita nel 1966.', 'D’inverno è particolarmente bella: neve, cupole e silenzio.'],
    }, { spot: 'insta', price: level(2) }),
    P('lao-chu-jia', 'food', 45.768, 126.62, SOPHIA, 4.5, 8700, ['food', 'history'], {
      ru: ['Лао Чуцзя — родина гобаожоу', 'Ресторан, который ведут потомки Чжэн Синвэня — повара, придумавшего гобаожоу: хрустящую свинину в кисло-сладком соусе, ставшую символом Харбина. Очереди бывают длинными.', 'Гобаожоу едят сразу, пока корочка хрустит, — не ждите остальных блюд.'],
      en: ['Lao Chu Jia — home of guobaorou', 'A restaurant run by descendants of Zheng Xingwen, the cook who invented guobaorou: crispy pork in sweet-and-sour sauce, now a Harbin symbol. Queues can be long.', 'Eat the guobaorou right away while the crust is crisp — don’t wait for the other dishes.'],
      es: ['Lao Chu Jia, cuna del guobaorou', 'Un restaurante de los descendientes de Zheng Xingwen, el cocinero que inventó el guobaorou: cerdo crujiente en salsa agridulce, hoy símbolo de Harbin. Puede haber mucha cola.', 'Cómelo enseguida, mientras cruje: no esperes a los demás platos.'],
      de: ['Lao Chu Jia – Heimat des Guobaorou', 'Ein Restaurant der Nachfahren von Zheng Xingwen, dem Koch, der Guobaorou erfand: knuspriges Schweinefleisch süßsauer, heute ein Symbol Harbins. Die Schlangen können lang sein.', 'Guobaorou sofort essen, solange die Kruste knackt – nicht auf die anderen Gerichte warten.'],
      fr: ['Lao Chu Jia, berceau du guobaorou', 'Un restaurant tenu par les descendants de Zheng Xingwen, le cuisinier qui inventa le guobaorou : porc croustillant aigre-doux, devenu symbole de Harbin. La file peut être longue.', 'Mangez le guobaorou tout de suite, tant qu’il croustille : n’attendez pas les autres plats.'],
      it: ['Lao Chu Jia, la casa del guobaorou', 'Un ristorante gestito dai discendenti di Zheng Xingwen, il cuoco che inventò il guobaorou: maiale croccante in agrodolce, oggi simbolo di Harbin. Le code possono essere lunghe.', 'Mangia il guobaorou subito, finché è croccante: non aspettare gli altri piatti.'],
    }, { price: level(2), menu: [
      ['Guobaorou', undefined, 'хрустящая свинина в кисло-сладком соусе|crispy sweet-and-sour pork|cerdo crujiente agridulce|knuspriges Schwein süßsauer|porc croustillant aigre-doux|maiale croccante in agrodolce'],
      ['Northeastern stews', undefined, 'тушёные блюда северо-востока|Northeastern stews|guisos del noreste|Schmorgerichte aus dem Nordosten|ragoûts du Nord-Est|stufati del Nordest'],
    ] }),
    P('huamei', 'food', 45.7726, 126.6168, SOPHIA, 4.3, 9900, ['food', 'history'], {
      ru: ['Хуамэй — русская кухня с 1925 года', 'Один из старейших ресторанов западной кухни в Китае, открытый в 1925 году на Центральной улице: борщ, мясо в горшочке и квас в зале со старинным интерьером.', 'Мясо в горшочке — то, что здесь заказывают почти все.'],
      en: ['Huamei — Russian food since 1925', 'One of China’s oldest Western restaurants, opened in 1925 on Central Street: borscht, pot-roasted beef and kvass in a vintage dining room.', 'The pot-roasted beef is what almost everyone orders.'],
      es: ['Huamei, cocina rusa desde 1925', 'Uno de los restaurantes occidentales más antiguos de China, abierto en 1925 en la calle Central: borsch, ternera en puchero y kvas en un salón de época.', 'La ternera en puchero es lo que pide casi todo el mundo.'],
      de: ['Huamei – russische Küche seit 1925', 'Eines der ältesten westlichen Restaurants Chinas, 1925 an der Zentralstraße eröffnet: Borschtsch, Rindfleisch im Topf und Kwas in einem nostalgischen Saal.', 'Rindfleisch im Topf bestellen fast alle.'],
      fr: ['Huamei, cuisine russe depuis 1925', 'L’un des plus anciens restaurants occidentaux de Chine, ouvert en 1925 rue Centrale : bortsch, bœuf en pot et kvas dans une salle d’époque.', 'Le bœuf en pot, c’est ce que presque tout le monde commande.'],
      it: ['Huamei, cucina russa dal 1925', 'Uno dei più antichi ristoranti occidentali della Cina, aperto nel 1925 in via Centrale: borscht, manzo in pentola e kvas in una sala d’epoca.', 'Il manzo in pentola è ciò che ordinano quasi tutti.'],
    }, { price: level(2), menu: [
      ['Borscht', undefined, 'борщ|borscht|borsch|Borschtsch|bortsch|borscht'],
      ['Pot-roasted beef', undefined, 'говядина в горшочке|pot-roasted beef|ternera en puchero|Rindfleisch im Topf|bœuf en pot|manzo in pentola'],
      ['Kvass', undefined, 'квас|kvass|kvas|Kwas|kvas|kvas'],
    ] }),
    P('modern-ice-pop', 'food', 45.7733, 126.6174, SCULPTURE, 4.4, 11000, ['food', 'history', 'winter'], {
      ru: ['Мороженое «Модерн»', 'Сливочное эскимо отеля «Модерн» (1906) на Центральной улице — его едят прямо на улице даже в −20 °C, это харбинская традиция.', 'Зимой мороженое не тает — можно не спешить и сфотографироваться.'],
      en: ['Modern ice pop', 'The creamy ice pop of the Modern Hotel (1906) on Central Street — eaten outdoors even at −20 °C, a Harbin tradition.', 'In winter it doesn’t melt — no rush, take your photo.'],
      es: ['Polo del Modern', 'El polo cremoso del Hotel Modern (1906) en la calle Central: se come en la calle incluso a −20 °C, tradición de Harbin.', 'En invierno no se derrite: sin prisa para la foto.'],
      de: ['Modern-Eis am Stiel', 'Das sahnige Eis am Stiel des Modern Hotels (1906) an der Zentralstraße – man isst es draußen sogar bei −20 °C, eine Harbiner Tradition.', 'Im Winter schmilzt es nicht – in Ruhe ein Foto machen.'],
      fr: ['Esquimau du Modern', 'L’esquimau crémeux de l’hôtel Modern (1906) rue Centrale, qu’on mange dehors même à −20 °C : une tradition de Harbin.', 'L’hiver, il ne fond pas : prenez le temps de la photo.'],
      it: ['Ghiacciolo del Modern', 'Il ghiacciolo cremoso del Modern Hotel (1906) in via Centrale, che si mangia all’aperto anche a −20 °C: una tradizione di Harbin.', 'D’inverno non si scioglie: fai la foto con calma.'],
    }, { spot: 'insta', price: level(1), menu: [
      ['Milk ice pop', undefined, 'сливочное эскимо|creamy milk ice pop|polo de leche cremoso|sahniges Milcheis am Stiel|esquimau au lait|ghiacciolo al latte'],
      ['Kvass', undefined, 'квас|kvass|kvas|Kwas|kvas|kvas'],
    ] }),
    P('qiulin', 'food', 45.7575, 126.6445, SOPHIA, 4.3, 6100, ['food', 'history', 'shopping'], {
      ru: ['Чурин (Цюлинь) — колбаса и даляба', 'Торговый дом, основанный русским купцом Иваном Чуриным в 1900 году; здесь покупают харбинскую красную копчёную колбасу, огромный хлеб «даляба» и квас.', 'Колбаса и даляба — главный съедобный сувенир из Харбина.'],
      en: ['Churin (Qiulin) — sausage and dalieba', 'A trading house founded by Russian merchant Ivan Churin in 1900; buy Harbin red smoked sausage, the huge “dalieba” loaf and kvass here.', 'Sausage and dalieba are Harbin’s classic edible souvenir.'],
      es: ['Churin (Qiulin), salchicha y dalieba', 'Una casa comercial fundada por el mercader ruso Iván Churin en 1900; aquí se compran la salchicha roja ahumada de Harbin, el enorme pan «dalieba» y kvas.', 'Salchicha y dalieba: el recuerdo comestible clásico de Harbin.'],
      de: ['Tschurin (Qiulin) – Wurst und Dalieba', 'Ein Handelshaus, 1900 vom russischen Kaufmann Iwan Tschurin gegründet; hier gibt es Harbiner rote Räucherwurst, das riesige „Dalieba“-Brot und Kwas.', 'Wurst und Dalieba sind Harbins klassisches essbares Mitbringsel.'],
      fr: ['Tchourine (Qiulin), saucisse et dalieba', 'Une maison de commerce fondée par le marchand russe Ivan Tchourine en 1900 ; on y achète la saucisse rouge fumée de Harbin, l’énorme pain « dalieba » et du kvas.', 'Saucisse et dalieba : le souvenir comestible classique de Harbin.'],
      it: ['Churin (Qiulin), salsiccia e dalieba', 'Una casa commerciale fondata dal mercante russo Ivan Churin nel 1900; qui si comprano la salsiccia rossa affumicata di Harbin, l’enorme pane «dalieba» e il kvas.', 'Salsiccia e dalieba: il classico souvenir commestibile di Harbin.'],
    }, { price: level(1), menu: [
      ['Harbin red sausage', undefined, 'харбинская красная копчёная колбаса|Harbin red smoked sausage|salchicha roja ahumada de Harbin|Harbiner rote Räucherwurst|saucisse rouge fumée de Harbin|salsiccia rossa affumicata di Harbin'],
      ['Dalieba', undefined, 'даляба — большой круглый хлеб|dalieba — big round loaf|dalieba, gran pan redondo|Dalieba – großes rundes Brot|dalieba, grand pain rond|dalieba, grande pane rotondo'],
    ] }),
    P('dongfang-jiaozi-wang', 'food', 45.769, 126.63, FORT, 4.2, 5400, ['food'], {
      ru: ['Дунфан Цзяоцзы Ван', 'Харбинская сеть пельменных: цзяоцзы с десятками начинок — свинина с капустой, говядина, баранина, морепродукты.', 'Пельмени заказывают на вес — 1 лян это около 6 штук; на человека хватит 3–4 лян.'],
      en: ['Dongfang Jiaozi Wang', 'A Harbin dumpling chain: jiaozi with dozens of fillings — pork and cabbage, beef, lamb, seafood.', 'Dumplings are ordered by weight — 1 liang is about 6 pieces; 3–4 liang per person is plenty.'],
      es: ['Dongfang Jiaozi Wang', 'Una cadena de empanadillas de Harbin: jiaozi con decenas de rellenos, cerdo con col, ternera, cordero, marisco.', 'Se piden al peso: 1 liang son unas 6 piezas; 3–4 liang por persona bastan.'],
      de: ['Dongfang Jiaozi Wang', 'Eine Harbiner Teigtaschenkette: Jiaozi mit Dutzenden Füllungen – Schwein mit Kohl, Rind, Lamm, Meeresfrüchte.', 'Bestellt wird nach Gewicht – 1 Liang sind etwa 6 Stück; 3–4 Liang pro Person reichen.'],
      fr: ['Dongfang Jiaozi Wang', 'Une chaîne de raviolis de Harbin : jiaozi aux dizaines de farces — porc-chou, bœuf, agneau, fruits de mer.', 'On commande au poids : 1 liang ≈ 6 pièces ; 3–4 liang par personne suffisent.'],
      it: ['Dongfang Jiaozi Wang', 'Una catena di ravioli di Harbin: jiaozi con decine di ripieni, maiale e cavolo, manzo, agnello, frutti di mare.', 'Si ordinano a peso: 1 liang sono circa 6 pezzi; 3–4 liang a persona bastano.'],
    }, { price: level(1), menu: [
      ['Pork and cabbage jiaozi', undefined, 'цзяоцзы со свининой и капустой|pork and cabbage dumplings|jiaozi de cerdo y col|Jiaozi mit Schwein und Kohl|jiaozi porc-chou|jiaozi di maiale e cavolo'],
      ['Lamb jiaozi', undefined, 'цзяоцзы с бараниной|lamb dumplings|jiaozi de cordero|Jiaozi mit Lamm|jiaozi à l’agneau|jiaozi di agnello'],
    ] }),
    P('tieguo-dun', 'food', 45.762, 126.615, FORT, 4.3, 3900, ['food', 'winter'], {
      ru: ['Тегодунь — рагу в чугунном котле', 'Северо-восточное рагу из курицы, рыбы или рёбер с картофелем и кукурузой в огромном котле, встроенном в стол; по краю котла пекут кукурузные лепёшки.', 'Это блюдо на компанию: один котёл — на 3–4 человек.'],
      en: ['Tieguo dun — iron-pot stew', 'A Northeastern stew of chicken, fish or ribs with potato and corn in a huge pot built into the table; corn cakes bake on the rim.', 'It’s a group dish: one pot feeds 3–4.'],
      es: ['Tieguo dun, guiso en olla de hierro', 'Un guiso del noreste de pollo, pescado o costillas con patata y maíz en una enorme olla empotrada en la mesa; en el borde se hacen tortas de maíz.', 'Es para grupos: una olla da para 3–4.'],
      de: ['Tieguo Dun – Eintopf im Eisenkessel', 'Ein nordöstlicher Eintopf aus Huhn, Fisch oder Rippchen mit Kartoffeln und Mais in einem riesigen, in den Tisch eingelassenen Kessel; am Rand backen Maisfladen.', 'Ein Gruppengericht: ein Kessel für 3–4 Personen.'],
      fr: ['Tieguo dun, ragoût en marmite de fonte', 'Un ragoût du Nord-Est au poulet, poisson ou travers avec pommes de terre et maïs dans une énorme marmite encastrée dans la table ; des galettes de maïs cuisent sur le bord.', 'C’est un plat de groupe : une marmite pour 3–4.'],
      it: ['Tieguo dun, stufato nel paiolo di ghisa', 'Uno stufato del Nordest di pollo, pesce o costine con patate e mais in un enorme paiolo incassato nel tavolo; sul bordo cuociono focacce di mais.', 'È un piatto di gruppo: un paiolo per 3–4.'],
    }, { price: level(2), menu: [
      ['Iron-pot goose or chicken', undefined, 'рагу с гусем или курицей в котле|iron-pot goose or chicken stew|guiso de oca o pollo en olla de hierro|Gans- oder Hühnereintopf im Kessel|ragoût d’oie ou de poulet en marmite|stufato d’oca o pollo nel paiolo'],
      ['Corn cakes on the rim', undefined, 'кукурузные лепёшки на краю котла|corn cakes baked on the rim|tortas de maíz en el borde|Maisfladen am Kesselrand|galettes de maïs sur le bord|focacce di mais sul bordo'],
    ] }),
    P('winter-tanghulu', 'food', 45.775, 126.6165, SCULPTURE, 4.2, 4800, ['streetfood', 'winter'], {
      ru: ['Танхулу и мороженые груши', 'Зимой на улицах продают танхулу — фрукты в хрустящей карамели на шпажке — и мороженые груши, которые оттаивают в воде и становятся сочными.', 'Мороженую грушу опустите в холодную воду на 20–30 минут — так она оттает правильно.'],
      en: ['Tanghulu and frozen pears', 'In winter street stalls sell tanghulu — fruit in crunchy candy on a skewer — and frozen pears that thaw in water and turn juicy.', 'Soak a frozen pear in cold water for 20–30 minutes — that’s the right way to thaw it.'],
      es: ['Tanghulu y peras congeladas', 'En invierno los puestos venden tanghulu, fruta en caramelo crujiente en brocheta, y peras congeladas que se descongelan en agua y quedan jugosas.', 'Deja la pera en agua fría 20–30 minutos: así se descongela bien.'],
      de: ['Tanghulu und gefrorene Birnen', 'Im Winter verkaufen Stände Tanghulu – Obst in knuspriger Karamellhülle am Spieß – und gefrorene Birnen, die im Wasser auftauen und saftig werden.', 'Gefrorene Birne 20–30 Minuten in kaltes Wasser legen – so taut sie richtig.'],
      fr: ['Tanghulu et poires gelées', 'L’hiver, les étals vendent des tanghulu, fruits en caramel croquant sur pique, et des poires gelées qu’on dégèle dans l’eau pour les rendre juteuses.', 'Plongez la poire gelée 20–30 minutes dans l’eau froide : c’est la bonne façon de la dégeler.'],
      it: ['Tanghulu e pere ghiacciate', 'D’inverno le bancarelle vendono tanghulu, frutta in caramello croccante sullo spiedo, e pere ghiacciate che si scongelano in acqua e diventano succose.', 'Metti la pera in acqua fredda per 20–30 minuti: è il modo giusto di scongelarla.'],
    }, { price: level(1), menu: [
      ['Tanghulu', undefined, 'фрукты в карамели на шпажке|candied fruit skewer|brocheta de fruta caramelizada|kandierter Obstspieß|brochette de fruits caramélisés|spiedino di frutta caramellata'],
      ['Frozen pear', undefined, 'мороженая груша|frozen pear|pera congelada|gefrorene Birne|poire gelée|pera ghiacciata'],
    ] }),
    P('harbin-beer', 'food', 45.78, 126.62, FORT, 4.3, 5200, ['food', 'nightlife'], {
      ru: ['Харбинское пиво', 'Пиву «Харбин» больше века — его начали варить в 1900 году, это старейшая пивная марка Китая; летом у реки работают пивные и проходит пивной фестиваль.', 'Местные пьют пиво даже зимой, закусывая шашлыками и красной колбасой.'],
      en: ['Harbin beer', 'Harbin beer has been brewed since 1900 — China’s oldest beer brand; in summer riverside beer halls open and a beer festival takes place.', 'Locals drink beer even in winter, with skewers and red sausage.'],
      es: ['Cerveza de Harbin', 'La cerveza Harbin se elabora desde 1900, la marca más antigua de China; en verano abren cervecerías junto al río y hay un festival de la cerveza.', 'Los locales beben cerveza incluso en invierno, con brochetas y salchicha roja.'],
      de: ['Harbin-Bier', 'Harbin-Bier wird seit 1900 gebraut – Chinas älteste Biermarke; im Sommer öffnen Bierhallen am Fluss und es gibt ein Bierfestival.', 'Einheimische trinken Bier sogar im Winter, zu Spießen und roter Wurst.'],
      fr: ['Bière de Harbin', 'La bière Harbin est brassée depuis 1900, la plus ancienne marque de Chine ; l’été, des brasseries ouvrent au bord du fleuve et un festival de la bière a lieu.', 'Les habitants en boivent même l’hiver, avec brochettes et saucisse rouge.'],
      it: ['Birra di Harbin', 'La birra Harbin si produce dal 1900, il marchio più antico della Cina; d’estate aprono birrerie sul fiume e si tiene un festival della birra.', 'I locali bevono birra anche d’inverno, con spiedini e salsiccia rossa.'],
    }, { price: level(1), menu: [
      ['Fresh Harbin draught', undefined, 'свежее разливное харбинское|fresh Harbin draught|cerveza Harbin de barril|frisches Harbin vom Fass|Harbin à la pression|Harbin alla spina'],
      ['Skewers', undefined, 'шашлычки|skewers|brochetas|Spieße|brochettes|spiedini'],
    ] }),
    P('laodaowai-snacks', 'food', 45.7835, 126.646, SOPHIA, 4.2, 3400, ['streetfood', 'food'], {
      ru: ['Закусочные Старого Даовая', 'Во дворах «китайского барокко» работают старые харбинские закусочные: баоцзы, гобаожоу, мясо в соевом соусе и северо-восточные пельмени.', 'Ищите места, куда ходят пенсионеры района, — там самая домашняя еда.'],
      en: ['Old Daowai eateries', 'In the “Chinese Baroque” courtyards, old Harbin eateries serve baozi, guobaorou, soy-braised meats and Northeastern dumplings.', 'Look for places the neighbourhood’s retirees go — the most home-style food.'],
      es: ['Comedores del viejo Daowai', 'En los patios del «barroco chino» hay viejos comedores de Harbin con baozi, guobaorou, carnes en salsa de soja y empanadillas del noreste.', 'Busca los sitios donde comen los jubilados del barrio: la comida más casera.'],
      de: ['Garküchen in Alt-Daowai', 'In den Höfen des „chinesischen Barock“ servieren alte Harbiner Lokale Baozi, Guobaorou, in Sojasoße Geschmortes und nordöstliche Teigtaschen.', 'Lokale suchen, in die die Rentner des Viertels gehen – dort ist das Essen am hausgemachtesten.'],
      fr: ['Gargotes du vieux Daowai', 'Dans les cours du « baroque chinois », de vieilles gargotes de Harbin servent baozi, guobaorou, viandes braisées au soja et raviolis du Nord-Est.', 'Cherchez les adresses des retraités du quartier : la cuisine la plus familiale.'],
      it: ['Trattorie della vecchia Daowai', 'Nei cortili del «barocco cinese» vecchie trattorie di Harbin servono baozi, guobaorou, carni brasate alla soia e ravioli del Nordest.', 'Cerca i posti dove vanno i pensionati del quartiere: il cibo più casalingo.'],
    }, { price: level(1), menu: [
      ['Baozi', undefined, 'баоцзы на пару|steamed baozi|baozi al vapor|gedämpfte Baozi|baozi vapeur|baozi al vapore'],
      ['Soy-braised meats', undefined, 'мясо, тушёное в соевом соусе|soy-braised meats|carnes en salsa de soja|in Sojasoße Geschmortes|viandes braisées au soja|carni brasate alla soia'],
    ] }),
    P('yang-guofu-malatang', 'food', 45.765, 126.635, FORT, 4.1, 7600, ['food', 'streetfood'], {
      ru: ['Ян Гофу — малатан', 'Сеть малатана, начавшаяся в 2003 году под Харбином и разросшаяся по всему миру: сами набираете овощи, тофу и мясо из холодильника, платите по весу, а повар варит в остром или кунжутном бульоне.', 'По-харбински — с кунжутной пастой: попросите «ма цзян».'],
      en: ['Yang Guofu Malatang', 'A malatang chain that started near Harbin in 2003 and spread worldwide: pick vegetables, tofu and meat from the fridge, pay by weight, and the cook boils it in spicy or sesame broth.', 'Harbin-style means with sesame paste: ask for “ma jiang”.'],
      es: ['Yang Guofu Malatang', 'Una cadena de malatang nacida cerca de Harbin en 2003 y extendida por el mundo: eliges verduras, tofu y carne de la nevera, pagas al peso y lo cuecen en caldo picante o de sésamo.', 'Al estilo de Harbin, con pasta de sésamo: pide «ma jiang».'],
      de: ['Yang Guofu Malatang', 'Eine Malatang-Kette, 2003 bei Harbin gestartet und heute weltweit: Gemüse, Tofu und Fleisch aus dem Kühlschrank wählen, nach Gewicht zahlen, gekocht wird in scharfer oder Sesambrühe.', 'Harbiner Art heißt mit Sesampaste: nach „ma jiang“ fragen.'],
      fr: ['Yang Guofu Malatang', 'Une chaîne de malatang née près de Harbin en 2003 et répandue dans le monde : choisissez légumes, tofu et viande au frigo, payez au poids, et on cuit le tout en bouillon épicé ou au sésame.', 'À la mode de Harbin, avec pâte de sésame : demandez « ma jiang ».'],
      it: ['Yang Guofu Malatang', 'Una catena di malatang nata vicino a Harbin nel 2003 e diffusa nel mondo: scegli verdure, tofu e carne dal frigo, paghi a peso e cuociono tutto in brodo piccante o al sesamo.', 'Alla maniera di Harbin, con pasta di sesamo: chiedi «ma jiang».'],
    }, { price: level(1), menu: [
      ['Malatang with sesame paste', undefined, 'малатан с кунжутной пастой|malatang with sesame paste|malatang con pasta de sésamo|Malatang mit Sesampaste|malatang à la pâte de sésame|malatang con pasta di sesamo'],
      ['Spicy broth malatang', undefined, 'малатан в остром бульоне|malatang in spicy broth|malatang en caldo picante|Malatang in scharfer Brühe|malatang en bouillon épicé|malatang in brodo piccante'],
    ] }),
  ],
  routes: [
    D(['central-street', 'st-sophia', 'huamei', 'modern-ice-pop', 'stalin-park', 'sun-island', 'ice-snow-world', 'lao-chu-jia'],
      'Центральная улица, Святая София и Ледово-снежный мир|Central Street, St. Sophia and Ice and Snow World|La calle Central, Santa Sofía y el Mundo de Hielo y Nieve|Zentralstraße, Sophienkathedrale und Eis- und Schneewelt|La rue Centrale, Sainte-Sophie et le Monde de glace et de neige|Via Centrale, Santa Sofia e il Mondo di Ghiaccio e Neve'),
    D(['jile-temple', 'confucian-temple', 'laodaowai', 'laodaowai-snacks', 'qiulin', 'grand-theatre', 'tieguo-dun'],
      'Храмы, «китайское барокко» Даовая и Большой театр|Temples, Daowai’s “Chinese Baroque” and the Grand Theatre|Templos, el «barroco chino» de Daowai y el Gran Teatro|Tempel, Daowais „chinesischer Barock“ und das Große Theater|Temples, « baroque chinois » de Daowai et Grand Théâtre|Templi, il «barocco cinese» di Daowai e il Gran Teatro'),
    D(['siberian-tiger-park', 'dongfang-jiaozi-wang', 'unit-731-museum', 'volga-manor', 'yang-guofu-malatang'],
      'Амурские тигры, музей отряда 731 и усадьба «Волга»|Siberian tigers, the Unit 731 Museum and Volga Manor|Tigres siberianos, el Museo de la Unidad 731 y la finca Volga|Sibirische Tiger, Museum der Einheit 731 und Wolga-Landgut|Tigres de Sibérie, musée de l’unité 731 et domaine Volga|Tigri siberiane, Museo dell’Unità 731 e Tenuta Volga'),
  ],
};

export default pack;
