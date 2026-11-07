import type { CityPack } from '../types';
import { free, level, makeDay, makePlace } from './_kit.ts';

const P = makePlace('yokohama');
const D = makeDay('yokohama');
const NIGHT = '6abEDi5YszQ';
const GATE = '9PJ6Cmi--j4';
const TEMPLE = 'z4wpA4uY7_Y';
const CROWD = '4ZZLUEzJAsI';
const BLUE = 'z2C9acfjvws';

const pack: CityPack = {
  country: 'JP',
  city: 'yokohama',
  places: [
    P('minato-mirai-21', 'attraction', 35.456, 139.632, NIGHT, 4.5, 34000, ['views', 'nightlife', 'photo'], {
      ru: ['Минато-Мирай 21', 'Набережный район небоскрёбов на месте старых доков: колесо обозрения Cosmo Clock 21, парки и променады.', 'Вечером пройдитесь по набережной от Красных складов к колесу — лучшие огни города.'],
      en: ['Minato Mirai 21', 'A waterfront district of towers on the site of old docks: the Cosmo Clock 21 Ferris wheel, parks and promenades.', 'In the evening walk the waterfront from the Red Brick Warehouses to the wheel — the city’s best lights.'],
      es: ['Minato Mirai 21', 'Un barrio de rascacielos junto al mar sobre antiguos muelles: la noria Cosmo Clock 21, parques y paseos.', 'Por la noche camina del Almacén de Ladrillo Rojo a la noria: las mejores luces de la ciudad.'],
      de: ['Minato Mirai 21', 'Ein Hochhausviertel am Wasser auf alten Docks: das Riesenrad Cosmo Clock 21, Parks und Promenaden.', 'Abends vom Roten Backsteinlager zum Riesenrad gehen – die schönsten Lichter der Stadt.'],
      fr: ['Minato Mirai 21', 'Un quartier de tours en bord de mer sur d’anciens docks : grande roue Cosmo Clock 21, parcs et promenades.', 'Le soir, longez le front de mer des entrepôts en brique rouge jusqu’à la roue : les plus belles lumières.'],
      it: ['Minato Mirai 21', 'Un quartiere di grattacieli sul mare al posto dei vecchi moli: la ruota Cosmo Clock 21, parchi e passeggiate.', 'La sera cammina dai Magazzini di mattoni rossi alla ruota: le luci più belle della città.'],
    }, { spot: 'insta', price: free }),
    P('sankeien', 'nature', 35.416, 139.662, TEMPLE, 4.6, 12000, ['gardens', 'history', 'architecture'], {
      ru: ['Сад Санкэйэн', 'Сад шёлкового магната Хары Санкэя (1906) с перевезёнными сюда историческими зданиями, включая трёхъярусную пагоду XV века из Киото.', 'Пагода над прудом особенно хороша весной в сакуре и в ноябре.'],
      en: ['Sankeien Garden', 'Silk magnate Hara Sankei’s garden (1906) with historic buildings moved here, including a 15th-century three-storey pagoda from Kyoto.', 'The pagoda above the pond is loveliest in cherry season and in November.'],
      es: ['Jardín Sankeien', 'El jardín del magnate de la seda Hara Sankei (1906), con edificios históricos trasladados, entre ellos una pagoda de tres pisos del siglo XV de Kioto.', 'La pagoda sobre el estanque luce más en primavera y en noviembre.'],
      de: ['Sankeien-Garten', 'Der Garten des Seidenmagnaten Hara Sankei (1906) mit hierher versetzten historischen Bauten, darunter eine dreistöckige Pagode aus dem 15. Jh. aus Kyōto.', 'Die Pagode über dem Teich ist zur Kirschblüte und im November am schönsten.'],
      fr: ['Jardin Sankeien', 'Le jardin du magnat de la soie Hara Sankei (1906), avec des bâtiments historiques déplacés, dont une pagode à trois étages du XVe siècle venue de Kyoto.', 'La pagode au-dessus de l’étang est plus belle aux cerisiers et en novembre.'],
      it: ['Giardino Sankeien', 'Il giardino del magnate della seta Hara Sankei (1906) con edifici storici trasferiti qui, tra cui una pagoda a tre piani del XV secolo da Kyoto.', 'La pagoda sullo stagno dà il meglio coi ciliegi e a novembre.'],
    }, { spot: 'insta', price: level(1) }),
    P('kanteibyo', 'attraction', 35.443, 139.6455, TEMPLE, 4.4, 9800, ['temples', 'photo'], {
      ru: ['Храм Кантэйбё', 'Яркий китайский храм полководца Гуань Юя в сердце Чайнатауна — с резьбой, золотом и драконами на крыше.', 'Вечером храм подсвечивают — красивее, чем днём.'],
      en: ['Kanteibyō Temple', 'A vivid Chinese temple to the general Guan Yu in the heart of Chinatown, with carvings, gold and dragons on the roof.', 'It’s lit up in the evening — prettier than by day.'],
      es: ['Templo Kanteibyō', 'Un vistoso templo chino al general Guan Yu en el corazón del barrio chino, con tallas, oro y dragones en el tejado.', 'Por la noche se ilumina: más bonito que de día.'],
      de: ['Kanteibyō-Tempel', 'Ein farbenprächtiger chinesischer Tempel für den Feldherrn Guan Yu mitten im Chinatown, mit Schnitzereien, Gold und Drachen auf dem Dach.', 'Abends beleuchtet – schöner als tagsüber.'],
      fr: ['Temple Kanteibyō', 'Un temple chinois éclatant dédié au général Guan Yu au cœur du quartier chinois, sculptures, or et dragons sur le toit.', 'Illuminé le soir : plus beau que de jour.'],
      it: ['Tempio Kanteibyō', 'Un vivace tempio cinese al generale Guan Yu nel cuore di Chinatown, con intagli, oro e draghi sul tetto.', 'La sera è illuminato: più bello che di giorno.'],
    }, { spot: 'insta', price: free }),
    P('yokohama-chinatown', 'attraction', 35.4433, 139.6458, GATE, 4.3, 52000, ['streetfood', 'culture', 'shopping'], {
      ru: ['Чайнатаун Иокогамы', 'Крупнейший китайский квартал Японии: десять ворот, сотни ресторанов и лавок уличной еды.', 'Пробуйте понемногу в лавках — большие сеты в ресторанах на улице часто туристические.'],
      en: ['Yokohama Chinatown', 'Japan’s largest Chinatown: ten gates and hundreds of restaurants and street-food stalls.', 'Graze at the stalls — the big set menus on the main street are often tourist traps.'],
      es: ['Barrio chino de Yokohama', 'El mayor barrio chino de Japón: diez puertas y cientos de restaurantes y puestos callejeros.', 'Picotea en los puestos: los grandes menús de la calle principal suelen ser para turistas.'],
      de: ['Chinatown Yokohama', 'Japans größtes Chinatown: zehn Tore und Hunderte Restaurants und Garküchen.', 'An den Ständen probieren – die großen Menüs an der Hauptstraße sind oft Touristenfallen.'],
      fr: ['Quartier chinois de Yokohama', 'Le plus grand quartier chinois du Japon : dix portes et des centaines de restaurants et d’échoppes.', 'Grignotez aux étals : les grands menus de la rue principale sont souvent des pièges à touristes.'],
      it: ['Chinatown di Yokohama', 'La più grande Chinatown del Giappone: dieci porte e centinaia di ristoranti e banchi di cibo di strada.', 'Assaggia ai banchi: i grandi menu sulla via principale sono spesso trappole per turisti.'],
    }, { spot: 'insta', price: free }),
    P('yamashita-park', 'nature', 35.4458, 139.651, NIGHT, 4.4, 23000, ['gardens', 'history', 'views'], {
      ru: ['Парк Ямасита и «Хикава-мару»', 'Приморский парк, насыпанный на обломках землетрясения 1923 года; у причала — лайнер «Хикава-мару» 1930 года, ставший музеем.', 'Поднимитесь на борт «Хикава-мару» — каюты и салоны 1930-х сохранились.'],
      en: ['Yamashita Park and Hikawa Maru', 'A seafront park built on rubble from the 1923 earthquake; moored alongside is the 1930 liner Hikawa Maru, now a museum.', 'Go aboard the Hikawa Maru — its 1930s cabins and lounges survive.'],
      es: ['Parque Yamashita y el Hikawa Maru', 'Un parque marítimo construido sobre escombros del terremoto de 1923; atracado al lado, el transatlántico Hikawa Maru de 1930, hoy museo.', 'Sube a bordo del Hikawa Maru: se conservan sus camarotes y salones de los años treinta.'],
      de: ['Yamashita-Park und Hikawa Maru', 'Ein Uferpark auf dem Schutt des Erdbebens von 1923; daneben liegt der Liner Hikawa Maru von 1930, heute Museum.', 'An Bord der Hikawa Maru gehen – Kabinen und Salons der 1930er sind erhalten.'],
      fr: ['Parc Yamashita et Hikawa Maru', 'Un parc en bord de mer bâti sur les décombres du séisme de 1923 ; à quai, le paquebot Hikawa Maru de 1930, devenu musée.', 'Montez à bord du Hikawa Maru : cabines et salons des années 1930 sont intacts.'],
      it: ['Parco Yamashita e Hikawa Maru', 'Un parco sul mare costruito sulle macerie del terremoto del 1923; ormeggiato accanto, il transatlantico Hikawa Maru del 1930, oggi museo.', 'Sali a bordo dell’Hikawa Maru: cabine e saloni anni Trenta sono intatti.'],
    }, { price: free }),
    P('osanbashi-pier', 'attraction', 35.451, 139.647, NIGHT, 4.5, 15000, ['architecture', 'views', 'sunset'], {
      ru: ['Пирс Осамбаси', 'Международный морской терминал 2002 года с волнистой деревянной крышей-палубой, открытой для прогулок круглые сутки.', 'Лучший бесплатный вид на огни Минато-Мирай — отсюда после заката.'],
      en: ['Ōsanbashi Pier', 'The 2002 international passenger terminal with an undulating wooden roof deck open to walkers around the clock.', 'The best free view of the Minato Mirai lights is from here after sunset.'],
      es: ['Muelle Ōsanbashi', 'La terminal internacional de pasajeros de 2002, con una cubierta-tejado ondulada de madera abierta a los paseantes a todas horas.', 'La mejor vista gratis de las luces de Minato Mirai es desde aquí al anochecer.'],
      de: ['Ōsanbashi-Pier', 'Das internationale Passagierterminal von 2002 mit welligem Holz-Dachdeck, rund um die Uhr für Spaziergänger offen.', 'Der beste kostenlose Blick auf die Lichter von Minato Mirai nach Sonnenuntergang.'],
      fr: ['Jetée d’Ōsanbashi', 'Le terminal international de 2002, au toit-pont ondulant en bois ouvert aux promeneurs jour et nuit.', 'La plus belle vue gratuite sur les lumières de Minato Mirai, après le coucher du soleil.'],
      it: ['Molo Ōsanbashi', 'Il terminal passeggeri internazionale del 2002, con un tetto-ponte ondulato di legno aperto a tutte le ore.', 'La migliore vista gratuita sulle luci di Minato Mirai, dopo il tramonto.'],
    }, { spot: 'insta', price: free }),
    P('red-brick-warehouse', 'attraction', 35.4527, 139.6428, NIGHT, 4.3, 37000, ['shopping', 'history', 'architecture'], {
      ru: ['Красные кирпичные склады', 'Портовые склады начала XX века, переделанные в магазины, кафе и площадь для ярмарок — зимой здесь рождественский рынок.', 'Посмотрите расписание событий: на площади часто проходят фестивали еды.'],
      en: ['Red Brick Warehouse', 'Early-20th-century port warehouses turned into shops, cafés and an event square — with a Christmas market in winter.', 'Check the events calendar: the square often hosts food festivals.'],
      es: ['Almacén de Ladrillo Rojo', 'Almacenes portuarios de principios del siglo XX convertidos en tiendas, cafés y una plaza de eventos, con mercado navideño en invierno.', 'Mira la agenda: en la plaza suele haber festivales gastronómicos.'],
      de: ['Rotes Backsteinlagerhaus', 'Hafenspeicher vom Anfang des 20. Jh., umgebaut zu Läden, Cafés und Eventplatz – im Winter mit Weihnachtsmarkt.', 'Den Veranstaltungskalender prüfen: Oft gibt es Food-Festivals.'],
      fr: ['Entrepôts en brique rouge', 'Des entrepôts portuaires du début du XXe siècle devenus boutiques, cafés et place d’événements, avec marché de Noël l’hiver.', 'Consultez l’agenda : la place accueille souvent des festivals culinaires.'],
      it: ['Magazzini di mattoni rossi', 'Magazzini portuali di inizio Novecento trasformati in negozi, caffè e piazza per eventi, con mercatino di Natale d’inverno.', 'Controlla il calendario: la piazza ospita spesso festival gastronomici.'],
    }, { price: free }),
    P('cupnoodles-museum', 'attraction', 35.4555, 139.639, NIGHT, 4.4, 26000, ['museums'], {
      ru: ['Музей Cup Noodles', 'Музей изобретателя лапши быстрого приготовления Момофуку Андо: можно собрать и упаковать свою «чашку лапши».', 'Билет на «Мою чашку лапши» берите сразу у входа — места разбирают.'],
      en: ['Cupnoodles Museum', 'A museum to instant-noodle inventor Momofuku Andō where you can design and pack your own cup of noodles.', 'Get your “My Cupnoodles Factory” slot at the entrance — places go fast.'],
      es: ['Museo Cupnoodles', 'Un museo del inventor de los fideos instantáneos, Momofuku Andō, donde diseñas y empaquetas tu propio vaso de fideos.', 'Coge turno para «My Cupnoodles Factory» al entrar: se agotan.'],
      de: ['Cupnoodles Museum', 'Ein Museum für den Instantnudel-Erfinder Momofuku Andō, in dem man seinen eigenen Nudelbecher gestaltet und verpackt.', 'Den Slot für die „My Cupnoodles Factory“ gleich am Eingang holen – schnell weg.'],
      fr: ['Musée Cupnoodles', 'Un musée consacré à Momofuku Andō, inventeur des nouilles instantanées, où l’on crée et emballe son propre pot.', 'Réservez votre créneau « My Cupnoodles Factory » dès l’entrée : ça part vite.'],
      it: ['Museo Cupnoodles', 'Un museo dedicato a Momofuku Andō, inventore dei noodle istantanei, dove crei e confezioni la tua tazza di noodle.', 'Prenota subito all’ingresso il turno per «My Cupnoodles Factory»: va a ruba.'],
    }, { price: level(1) }),
    P('sky-garden', 'attraction', 35.4547, 139.6314, NIGHT, 4.4, 14000, ['views'], {
      ru: ['Sky Garden (Landmark Tower)', 'Смотровая площадка на 69-м этаже Yokohama Landmark Tower: гавань, Токийский залив и в ясный день Фудзи.', 'Приходите к закату — Фудзи на фоне оранжевого неба видна чаще зимой.'],
      en: ['Sky Garden (Landmark Tower)', 'An observation deck on the 69th floor of Yokohama Landmark Tower: the harbour, Tokyo Bay and, on clear days, Fuji.', 'Come at sunset — Fuji against an orange sky is likeliest in winter.'],
      es: ['Sky Garden (Landmark Tower)', 'Un mirador en la planta 69 de la Yokohama Landmark Tower: el puerto, la bahía de Tokio y, en días claros, el Fuji.', 'Ven al atardecer: el Fuji sobre cielo naranja se ve más en invierno.'],
      de: ['Sky Garden (Landmark Tower)', 'Eine Aussichtsetage im 69. Stock des Yokohama Landmark Tower: Hafen, Bucht von Tokio und bei klarer Sicht der Fuji.', 'Zum Sonnenuntergang kommen – Fuji vor orangem Himmel sieht man am ehesten im Winter.'],
      fr: ['Sky Garden (Landmark Tower)', 'Un observatoire au 69e étage de la Yokohama Landmark Tower : le port, la baie de Tokyo et, par temps clair, le Fuji.', 'Venez au coucher du soleil : le Fuji sur ciel orangé se voit surtout l’hiver.'],
      it: ['Sky Garden (Landmark Tower)', 'Un osservatorio al 69° piano della Yokohama Landmark Tower: il porto, la baia di Tokyo e, nelle giornate limpide, il Fuji.', 'Vieni al tramonto: il Fuji sul cielo arancione si vede soprattutto d’inverno.'],
    }, { price: level(2) }),
    P('air-cabin', 'attraction', 35.452, 139.632, NIGHT, 4.3, 7900, ['views', 'photo'], {
      ru: ['Yokohama Air Cabin', 'Городская канатная дорога 2021 года над водой от станции Сакурагитё к району Красных складов.', 'Возьмите билет туда-обратно и прокатитесь второй раз после заката.'],
      en: ['Yokohama Air Cabin', 'A 2021 urban ropeway over the water from Sakuragichō Station to the Red Brick Warehouse area.', 'Buy a return ticket and ride again after sunset.'],
      es: ['Yokohama Air Cabin', 'Un teleférico urbano de 2021 sobre el agua desde la estación de Sakuragichō hasta los Almacenes de Ladrillo Rojo.', 'Compra ida y vuelta y repite tras la puesta de sol.'],
      de: ['Yokohama Air Cabin', 'Eine städtische Seilbahn von 2021 übers Wasser vom Bahnhof Sakuragichō zu den Roten Backsteinlagern.', 'Hin- und Rückfahrt kaufen und nach Sonnenuntergang noch einmal fahren.'],
      fr: ['Yokohama Air Cabin', 'Un téléphérique urbain de 2021 au-dessus de l’eau, de la gare de Sakuragichō aux entrepôts en brique rouge.', 'Prenez un aller-retour et refaites-le après le coucher du soleil.'],
      it: ['Yokohama Air Cabin', 'Una funivia urbana del 2021 sull’acqua dalla stazione di Sakuragichō ai Magazzini di mattoni rossi.', 'Prendi andata e ritorno e rifallo dopo il tramonto.'],
    }, { spot: 'insta', price: level(1) }),
    P('yamate-bluff', 'attraction', 35.439, 139.652, BLUE, 4.4, 8800, ['history', 'architecture', 'views'], {
      ru: ['Холм Ямате', 'Тихий холм бывшего квартала иностранцев: открытые бесплатно западные особняки, иностранное кладбище и парк Harbor View с видом на мост Бэй-Бридж.', 'Особняки открыты бесплатно; к Рождеству их украшают в стилях разных стран.'],
      en: ['Yamate Bluff', 'The quiet hill of the old foreign quarter: free-to-enter Western mansions, the Foreign General Cemetery and Harbor View Park overlooking the Bay Bridge.', 'The mansions are free; at Christmas each is decorated in a different country’s style.'],
      es: ['Colina de Yamate', 'La tranquila colina del antiguo barrio extranjero: mansiones occidentales gratuitas, el cementerio de extranjeros y el parque Harbor View con vistas al Bay Bridge.', 'Las mansiones son gratis; en Navidad cada una se decora al estilo de un país.'],
      de: ['Yamate-Hügel', 'Der stille Hügel des alten Ausländerviertels: kostenlose westliche Villen, der Ausländerfriedhof und der Harbor View Park mit Blick auf die Bay Bridge.', 'Die Villen sind frei; zu Weihnachten ist jede im Stil eines anderen Landes geschmückt.'],
      fr: ['Colline de Yamate', 'La paisible colline de l’ancien quartier étranger : demeures occidentales gratuites, cimetière des étrangers et parc Harbor View face au Bay Bridge.', 'Les demeures sont gratuites ; à Noël, chacune est décorée à la mode d’un pays.'],
      it: ['Collina di Yamate', 'La tranquilla collina dell’antico quartiere straniero: ville occidentali gratuite, il cimitero degli stranieri e l’Harbor View Park sul Bay Bridge.', 'Le ville sono gratuite; a Natale ognuna è decorata nello stile di un Paese diverso.'],
    }, { spot: 'hidden', price: free }),
    P('marine-tower', 'attraction', 35.444, 139.6505, NIGHT, 4.2, 9900, ['views', 'architecture'], {
      ru: ['Башня Marine Tower', 'Башня-маяк 1961 года высотой 106 м у парка Ямасита; после реконструкции 2022 года — новая смотровая площадка.', 'Билет дешевле, чем в Landmark Tower, а вид на гавань ближе.'],
      en: ['Yokohama Marine Tower', 'A 106 m lighthouse-tower from 1961 by Yamashita Park, with a new observation deck since its 2022 renovation.', 'Cheaper than the Landmark Tower, with a closer harbour view.'],
      es: ['Yokohama Marine Tower', 'Una torre-faro de 106 m de 1961 junto al parque Yamashita, con nuevo mirador desde su renovación de 2022.', 'Más barata que la Landmark Tower y con el puerto más cerca.'],
      de: ['Yokohama Marine Tower', 'Ein 106 m hoher Leuchtturm-Turm von 1961 am Yamashita-Park, mit neuem Aussichtsdeck seit der Renovierung 2022.', 'Günstiger als der Landmark Tower, mit näherem Hafenblick.'],
      fr: ['Yokohama Marine Tower', 'Une tour-phare de 106 m (1961) près du parc Yamashita, avec un nouvel observatoire depuis sa rénovation de 2022.', 'Moins chère que la Landmark Tower, avec une vue plus proche du port.'],
      it: ['Yokohama Marine Tower', 'Una torre-faro di 106 m del 1961 vicino al parco Yamashita, con nuovo osservatorio dopo il restauro del 2022.', 'Costa meno della Landmark Tower e il porto è più vicino.'],
    }, { price: level(1) }),
    P('shin-yokohama-ramen-museum', 'food', 35.508, 139.617, CROWD, 4.3, 22000, ['food', 'history', 'museums'], {
      ru: ['Музей рамэна Син-Ёкогама', 'Первый в мире «фуд-тематический парк» (1994): улица Токио 1958 года и филиалы знаменитых рамэн-лавок со всей Японии.', 'Берите мини-порции — так удастся попробовать три-четыре региональных рамэна.'],
      en: ['Shin-Yokohama Rāmen Museum', 'The world’s first food theme park (1994): a 1958 Tokyo street and branches of famous ramen shops from all over Japan.', 'Order mini bowls so you can try three or four regional ramens.'],
      es: ['Museo del Ramen de Shin-Yokohama', 'El primer parque temático gastronómico del mundo (1994): una calle de Tokio de 1958 y sucursales de famosos ramen de todo Japón.', 'Pide cuencos mini para probar tres o cuatro ramen regionales.'],
      de: ['Shin-Yokohama Rāmen Museum', 'Der erste Food-Themenpark der Welt (1994): eine Tokioter Straße von 1958 und Filialen berühmter Ramen-Läden aus ganz Japan.', 'Mini-Schüsseln bestellen, um drei oder vier regionale Ramen zu probieren.'],
      fr: ['Musée du ramen de Shin-Yokohama', 'Le premier parc à thème culinaire du monde (1994) : une rue de Tokyo de 1958 et des succursales de ramen célèbres de tout le Japon.', 'Prenez des mini-bols pour goûter trois ou quatre ramen régionaux.'],
      it: ['Museo del ramen di Shin-Yokohama', 'Il primo parco a tema gastronomico al mondo (1994): una via di Tokyo del 1958 e filiali di famosi ramen da tutto il Giappone.', 'Ordina le mini-ciotole per assaggiare tre o quattro ramen regionali.'],
    }, { spot: 'insta', price: level(1), menu: [
      ['Mini ramen', undefined, 'мини-порция рамэна|mini ramen bowl|cuenco mini de ramen|Mini-Ramen|mini-bol de ramen|mini ciotola di ramen'],
      ['Regular ramen', undefined, 'обычная порция рамэна|regular ramen bowl|cuenco normal de ramen|normale Ramen-Schüssel|bol de ramen normal|ciotola di ramen normale'],
    ] }),
    P('yoshimuraya', 'food', 35.465, 139.618, CROWD, 4.2, 11000, ['food', 'history'], {
      ru: ['Ёсимурая', 'Лавка, где в 1974 году родился «иэкэй»-рамэн: свино-соевый бульон, толстая лапша, шпинат и листы нори.', 'При заказе выбирают жёсткость лапши, жирность и крепость бульона.'],
      en: ['Yoshimuraya', 'The shop where “iekei” ramen was born in 1974: pork-and-soy broth, thick noodles, spinach and nori sheets.', 'You choose noodle firmness, oiliness and strength when ordering.'],
      es: ['Yoshimuraya', 'El local donde nació en 1974 el ramen «iekei»: caldo de cerdo y soja, fideos gruesos, espinacas y láminas de nori.', 'Al pedir eliges la firmeza del fideo, la grasa y la intensidad.'],
      de: ['Yoshimuraya', 'Der Laden, in dem 1974 der „Iekei“-Ramen entstand: Schweine-Soja-Brühe, dicke Nudeln, Spinat und Nori.', 'Beim Bestellen wählt man Nudelfestigkeit, Fettgehalt und Würze.'],
      fr: ['Yoshimuraya', 'L’échoppe où est né en 1974 le ramen « iekei » : bouillon porc-soja, grosses nouilles, épinards et feuilles de nori.', 'À la commande, on choisit fermeté, gras et intensité.'],
      it: ['Yoshimuraya', 'Il locale dove nel 1974 è nato il ramen «iekei»: brodo di maiale e soia, noodle spessi, spinaci e fogli di nori.', 'Ordinando scegli consistenza dei noodle, grassezza e intensità.'],
    }, { price: level(1), menu: [
      ['Iekei ramen', undefined, 'рамэн на свино-соевом бульоне|pork-and-soy broth ramen|ramen de caldo de cerdo y soja|Ramen in Schwein-Soja-Brühe|ramen au bouillon porc-soja|ramen in brodo di maiale e soia'],
      ['Extra nori', undefined, 'дополнительные листы нори|extra nori sheets|nori extra|extra Nori|nori supplémentaire|nori extra'],
    ] }),
    P('kiyoken', 'food', 35.466, 139.6235, CROWD, 4.3, 6500, ['food', 'history'], {
      ru: ['Киёкэн (главный магазин)', 'Компания с 1908 года, сделавшая шумай символом Иокогамы; её «шумай-бэнто» — классика вокзальной еды.', 'Купите шумай-бэнто в поезд — его продают на всех вокзалах Иокогамы.'],
      en: ['Kiyōken (main store)', 'A company since 1908 that made shūmai Yokohama’s symbol; its shūmai bentō is a classic of station food.', 'Buy a shūmai bentō for the train — it’s sold at every Yokohama station.'],
      es: ['Kiyōken (tienda principal)', 'Una empresa desde 1908 que convirtió el shūmai en símbolo de Yokohama; su shūmai bentō es un clásico de estación.', 'Compra un shūmai bentō para el tren: lo venden en todas las estaciones de Yokohama.'],
      de: ['Kiyōken (Stammhaus)', 'Ein Unternehmen seit 1908, das Shūmai zum Symbol Yokohamas machte; sein Shūmai-Bentō ist ein Bahnhofsklassiker.', 'Ein Shūmai-Bentō für den Zug kaufen – an jedem Bahnhof Yokohamas erhältlich.'],
      fr: ['Kiyōken (boutique principale)', 'Une maison fondée en 1908 qui a fait du shūmai le symbole de Yokohama ; son shūmai bentō est un classique des gares.', 'Achetez un shūmai bentō pour le train : vendu dans toutes les gares de Yokohama.'],
      it: ['Kiyōken (negozio principale)', 'Un’azienda dal 1908 che ha reso lo shūmai simbolo di Yokohama; il suo shūmai bentō è un classico da stazione.', 'Compra uno shūmai bentō per il treno: si vende in tutte le stazioni di Yokohama.'],
    }, { price: level(1), menu: [
      ['Shūmai', undefined, 'паровые пельмени шумай со свининой и гребешком|steamed pork-and-scallop dumplings|shūmai al vapor de cerdo y vieira|gedämpfte Shūmai mit Schwein und Jakobsmuschel|shūmai vapeur porc-saint-jacques|shūmai al vapore di maiale e capesante'],
      ['Shūmai bentō', undefined, 'бэнто с шумай|shūmai lunch box|bentō de shūmai|Shūmai-Bentō|bentō de shūmai|bentō di shūmai'],
    ] }),
    P('manchinro', 'food', 35.4435, 139.646, GATE, 4.2, 4200, ['food', 'history'], {
      ru: ['Мантинро', 'Кантонский ресторан Чайнатауна с 1892 года — один из старейших: дим-самы на обед и классика юга Китая.', 'Обеденные дим-самы — хороший способ попробовать много блюд недорого.'],
      en: ['Manchinrō', 'A Cantonese restaurant in Chinatown since 1892, one of the oldest: dim sum at lunch and southern Chinese classics.', 'Lunchtime dim sum is a good, affordable way to try many dishes.'],
      es: ['Manchinrō', 'Un restaurante cantonés del barrio chino desde 1892, de los más antiguos: dim sum a mediodía y clásicos del sur de China.', 'El dim sum de mediodía es una forma barata de probar mucho.'],
      de: ['Manchinrō', 'Ein kantonesisches Restaurant im Chinatown seit 1892, eines der ältesten: mittags Dim Sum und südchinesische Klassiker.', 'Dim Sum am Mittag – günstig viele Gerichte probieren.'],
      fr: ['Manchinrō', 'Un restaurant cantonais du quartier chinois depuis 1892, parmi les plus anciens : dim sum le midi et classiques du sud de la Chine.', 'Les dim sum du midi permettent de goûter beaucoup à petit prix.'],
      it: ['Manchinrō', 'Un ristorante cantonese della Chinatown dal 1892, tra i più antichi: dim sum a pranzo e classici della Cina meridionale.', 'I dim sum del pranzo sono un modo economico per assaggiare molto.'],
    }, { price: level(2), menu: [
      ['Dim sum', undefined, 'ассорти дим-самов|assorted dim sum|dim sum variado|gemischte Dim Sum|assortiment de dim sum|dim sum misti'],
      ['Char siu', undefined, 'кантонская свинина в глазури|Cantonese glazed roast pork|cerdo asado glaseado cantonés|kantonesisch glasierter Schweinebraten|porc laqué cantonais|maiale arrosto laccato alla cantonese'],
    ] }),
    P('edosei', 'food', 35.443, 139.6465, CROWD, 4.2, 5100, ['food', 'streetfood'], {
      ru: ['Эдосэй', 'Лавка Чайнатауна с огромными паровыми булочками-бутаман размером почти с ладонь.', 'Одной булочки хватает как на перекус — берите на двоих.'],
      en: ['Edosei', 'A Chinatown shop selling giant steamed butaman buns nearly the size of your palm.', 'One bun is a full snack — share between two.'],
      es: ['Edosei', 'Una tienda del barrio chino con enormes bollos al vapor butaman casi del tamaño de la mano.', 'Un bollo es un tentempié completo: compártelo.'],
      de: ['Edosei', 'Ein Chinatown-Laden mit riesigen gedämpften Butaman-Brötchen fast so groß wie eine Handfläche.', 'Ein Brötchen ist ein ganzer Snack – zu zweit teilen.'],
      fr: ['Edosei', 'Une boutique du quartier chinois vendant d’énormes petits pains vapeur butaman presque grands comme la main.', 'Un pain suffit pour un en-cas : partagez-le.'],
      it: ['Edosei', 'Un negozio della Chinatown con giganteschi panini al vapore butaman grandi quasi come una mano.', 'Un panino è già uno spuntino: dividilo in due.'],
    }, { price: level(1), menu: [
      ['Butaman', undefined, 'большая паровая булочка со свининой|giant steamed pork bun|bollo grande al vapor de cerdo|großes gedämpftes Schweinefleischbrötchen|grand petit pain vapeur au porc|grande panino al vapore col maiale'],
      ['Assorted buns', undefined, 'булочки с разными начинками|buns with assorted fillings|bollos con rellenos variados|Brötchen mit verschiedenen Füllungen|petits pains aux garnitures variées|panini con ripieni assortiti'],
    ] }),
    P('kaseiro', 'food', 35.4433, 139.6452, GATE, 4.3, 3800, ['food', 'luxury'], {
      ru: ['Касэйро', 'Ресторан пекинской кухни в Чайнатауне с 1939 года, известный пекинской уткой.', 'Пекинскую утку лучше заказать заранее и прийти компанией.'],
      en: ['Kaseirō', 'A Beijing-cuisine restaurant in Chinatown since 1939, known for its Peking duck.', 'Order the Peking duck in advance and come as a group.'],
      es: ['Kaseirō', 'Un restaurante de cocina pequinesa en el barrio chino desde 1939, conocido por su pato laqueado.', 'Encarga el pato con antelación y ve en grupo.'],
      de: ['Kaseirō', 'Ein Restaurant mit Pekinger Küche im Chinatown seit 1939, bekannt für Pekingente.', 'Die Pekingente vorbestellen und mit mehreren kommen.'],
      fr: ['Kaseirō', 'Un restaurant de cuisine pékinoise du quartier chinois depuis 1939, réputé pour son canard laqué.', 'Commandez le canard à l’avance et venez à plusieurs.'],
      it: ['Kaseirō', 'Un ristorante di cucina pechinese della Chinatown dal 1939, noto per l’anatra laccata.', 'Ordina l’anatra in anticipo e vieni in gruppo.'],
    }, { price: level(3), menu: [
      ['Peking duck', undefined, 'утка по-пекински|Peking duck|pato laqueado|Pekingente|canard laqué|anatra laccata'],
      ['Course menu', undefined, 'сет-меню из нескольких блюд|multi-course set menu|menú de varios platos|mehrgängiges Menü|menu en plusieurs plats|menu di più portate'],
    ] }),
    P('hotel-new-grand', 'food', 35.4453, 139.6497, NIGHT, 4.5, 4900, ['food', 'history', 'romance'], {
      ru: ['Hotel New Grand (The Café)', 'Отель 1927 года напротив парка Ямасита — считается родиной дории, спагетти «Наполитан» и пудинга «а-ля мод».', 'Закажите дорию с морепродуктами — блюдо придумали здесь для гостя отеля.'],
      en: ['Hotel New Grand (The Café)', 'A 1927 hotel facing Yamashita Park, credited with inventing doria, spaghetti Napolitan and pudding à la mode.', 'Order the seafood doria — it was created here for a hotel guest.'],
      es: ['Hotel New Grand (The Café)', 'Un hotel de 1927 frente al parque Yamashita, considerado cuna del doria, los espaguetis Napolitan y el pudding à la mode.', 'Pide el doria de marisco: se inventó aquí para un huésped.'],
      de: ['Hotel New Grand (The Café)', 'Ein Hotel von 1927 gegenüber dem Yamashita-Park, das als Geburtsort von Doria, Spaghetti Napolitan und Pudding à la mode gilt.', 'Meeresfrüchte-Doria bestellen – sie wurde hier für einen Hotelgast erfunden.'],
      fr: ['Hotel New Grand (The Café)', 'Un hôtel de 1927 face au parc Yamashita, réputé berceau du doria, des spaghettis Napolitan et du pudding à la mode.', 'Commandez le doria aux fruits de mer : il a été inventé ici pour un client.'],
      it: ['Hotel New Grand (The Café)', 'Un hotel del 1927 davanti al parco Yamashita, considerato la culla del doria, degli spaghetti Napolitan e del pudding à la mode.', 'Ordina il doria ai frutti di mare: è nato qui per un ospite dell’hotel.'],
    }, { price: level(3), menu: [
      ['Seafood doria', undefined, 'запечённый рис с морепродуктами и бешамелью|baked rice with seafood and béchamel|arroz gratinado con marisco y bechamel|überbackener Reis mit Meeresfrüchten und Béchamel|riz gratiné aux fruits de mer et béchamel|riso gratinato con frutti di mare e besciamella'],
      ['Pudding à la mode', undefined, 'пудинг с фруктами и мороженым|pudding with fruit and ice cream|pudin con fruta y helado|Pudding mit Obst und Eis|pudding aux fruits et glace|budino con frutta e gelato'],
    ] }),
    P('noge', 'food', 35.447, 139.629, CROWD, 4.3, 8700, ['food', 'nightlife'], {
      ru: ['Ногэ', 'Квартал сотен маленьких идзакай и баров у станции Сакурагитё — место, где ужинают местные, а не туристы.', 'Переходите из бара в бар: по паре блюд и напитку в каждом.'],
      en: ['Noge', 'A quarter of hundreds of tiny izakaya and bars by Sakuragichō Station — where locals, not tourists, eat out.', 'Bar-hop: a couple of dishes and a drink in each.'],
      es: ['Noge', 'Un barrio de cientos de diminutas izakayas y bares junto a la estación de Sakuragichō, donde cenan los locales.', 'Ve de bar en bar: un par de platos y una bebida en cada uno.'],
      de: ['Noge', 'Ein Viertel mit Hunderten winziger Izakayas und Bars am Bahnhof Sakuragichō – hier essen Einheimische, nicht Touristen.', 'Von Bar zu Bar ziehen: in jeder ein paar Gerichte und ein Getränk.'],
      fr: ['Noge', 'Un quartier de centaines de minuscules izakaya et bars près de la gare de Sakuragichō, où dînent les habitants.', 'Faites la tournée : deux plats et un verre dans chaque bar.'],
      it: ['Noge', 'Un quartiere di centinaia di minuscoli izakaya e bar vicino alla stazione di Sakuragichō, dove mangiano i locali.', 'Fai il giro dei bar: un paio di piatti e un drink in ognuno.'],
    }, { spot: 'hidden', price: level(2), menu: [
      ['Yakitori', undefined, 'шашлычки якитори|grilled chicken skewers|brochetas de pollo|Hähnchenspieße|brochettes de poulet|spiedini di pollo'],
      ['Highball', undefined, 'хайбол с виски и содовой|whisky highball|highball de whisky|Whisky-Highball|highball au whisky|highball al whisky'],
    ] }),
    P('kirin-brewery', 'food', 35.494, 139.665, CROWD, 4.4, 4600, ['food'], {
      ru: ['Пивоварня Kirin (Иокогама)', 'Завод Kirin в Намамуги с экскурсией по производству и дегустацией свежего пива в конце.', 'Экскурсии по предварительной записи на сайте.'],
      en: ['Kirin Brewery Yokohama', 'Kirin’s Namamugi plant, with a brewing tour and a tasting of fresh beer at the end.', 'Tours need advance online booking.'],
      es: ['Cervecería Kirin de Yokohama', 'La planta de Kirin en Namamugi, con visita a la elaboración y cata de cerveza fresca al final.', 'Las visitas requieren reserva online.'],
      de: ['Kirin-Brauerei Yokohama', 'Kirins Werk in Namamugi mit Brauereiführung und Verkostung von frischem Bier am Ende.', 'Führungen vorab online buchen.'],
      fr: ['Brasserie Kirin de Yokohama', 'L’usine Kirin de Namamugi, avec visite du brassage et dégustation de bière fraîche à la fin.', 'Visites sur réservation en ligne.'],
      it: ['Birrificio Kirin di Yokohama', 'Lo stabilimento Kirin di Namamugi, con visita alla produzione e degustazione di birra fresca alla fine.', 'Le visite si prenotano online.'],
    }, { price: level(1), menu: [
      ['Ichiban Shibori tasting', undefined, 'дегустация свежего пива|fresh beer tasting|cata de cerveza fresca|Verkostung von frischem Bier|dégustation de bière fraîche|degustazione di birra fresca'],
      ['Soft drink for drivers', undefined, 'безалкогольный напиток для водителей|soft drink for drivers|refresco para conductores|Softdrink für Fahrer|boisson sans alcool pour conducteurs|bibita analcolica per chi guida'],
    ] }),
    P('bills-akarenga', 'food', 35.4527, 139.643, NIGHT, 4.2, 5800, ['food'], {
      ru: ['bills (Красные склады)', 'Кафе австралийского шефа Билла Грейнджера на втором этаже кирпичного склада с видом на гавань.', 'Возьмите рикоттовые панкейки — фирменное блюдо сети.'],
      en: ['bills (Red Brick Warehouse)', 'Australian chef Bill Granger’s café on the first floor of the brick warehouse, with harbour views.', 'Get the ricotta hotcakes — the chain’s signature.'],
      es: ['bills (Almacén de Ladrillo Rojo)', 'El café del chef australiano Bill Granger en la primera planta del almacén de ladrillo, con vistas al puerto.', 'Pide las tortitas de ricotta, la especialidad.'],
      de: ['bills (Rotes Backsteinlager)', 'Das Café des australischen Kochs Bill Granger im ersten Stock des Backsteinlagers mit Hafenblick.', 'Die Ricotta-Pancakes nehmen – das Markenzeichen.'],
      fr: ['bills (entrepôt en brique rouge)', 'Le café du chef australien Bill Granger au premier étage de l’entrepôt en brique, vue sur le port.', 'Prenez les pancakes à la ricotta, la spécialité.'],
      it: ['bills (Magazzino di mattoni rossi)', 'Il caffè dello chef australiano Bill Granger al primo piano del magazzino di mattoni, con vista sul porto.', 'Prendi i pancake alla ricotta, la specialità.'],
    }, { price: level(2), menu: [
      ['Ricotta hotcakes', undefined, 'панкейки с рикоттой|ricotta hotcakes|tortitas de ricotta|Ricotta-Pancakes|pancakes à la ricotta|pancake alla ricotta'],
      ['Full Aussie breakfast', undefined, 'полный австралийский завтрак|full Aussie breakfast|desayuno australiano completo|australisches Frühstück|petit-déjeuner australien complet|colazione australiana completa'],
    ] }),
  ],
  routes: [
    D(['yamate-bluff', 'kanteibyo', 'yokohama-chinatown', 'manchinro', 'yamashita-park', 'marine-tower', 'hotel-new-grand', 'osanbashi-pier'],
      'Холм Ямате, Чайнатаун и ночной пирс Осамбаси|Yamate Bluff, Chinatown and Ōsanbashi Pier at night|La colina de Yamate, el barrio chino y el muelle Ōsanbashi de noche|Yamate-Hügel, Chinatown und Ōsanbashi-Pier bei Nacht|La colline de Yamate, le quartier chinois et la jetée d’Ōsanbashi de nuit|La collina di Yamate, Chinatown e il molo Ōsanbashi di notte'),
    D(['cupnoodles-museum', 'red-brick-warehouse', 'bills-akarenga', 'air-cabin', 'minato-mirai-21', 'sky-garden', 'noge'],
      'Минато-Мирай: музей лапши, склады и закат с 69-го этажа|Minato Mirai: noodle museum, warehouses and sunset from the 69th floor|Minato Mirai: museo de fideos, almacenes y atardecer desde la planta 69|Minato Mirai: Nudelmuseum, Lagerhäuser und Sonnenuntergang aus dem 69. Stock|Minato Mirai : musée des nouilles, entrepôts et coucher de soleil au 69e étage|Minato Mirai: museo dei noodle, magazzini e tramonto dal 69° piano'),
    D(['sankeien', 'kiyoken', 'kirin-brewery', 'shin-yokohama-ramen-museum'],
      'Сад Санкэйэн, шумай, пиво и музей рамэна|Sankeien garden, shūmai, beer and the ramen museum|El jardín Sankeien, shūmai, cerveza y el museo del ramen|Sankeien-Garten, Shūmai, Bier und das Ramen-Museum|Le jardin Sankeien, les shūmai, la bière et le musée du ramen|Il giardino Sankeien, gli shūmai, la birra e il museo del ramen'),
  ],
};

export default pack;
