import type { CityPack } from '../types';
import { free, level, makeDay, makePlace } from './_kit.ts';

const P = makePlace('nanjing');
const D = makeDay('nanjing');
const SKYLINE = 'g_C8w1QBca0';
const TOWER = 'Kzn7APqg8kM';
const QINHUAI = 'QuQqTJKusLc';
const PURPLE = '5aZXydEVg8E';
const LINGGU = 'xyIA0tRwpX4';

const pack: CityPack = {
  country: 'CN',
  city: 'nanjing',
  places: [
    P('sun-yat-sen-mausoleum', 'attraction', 32.064, 118.848, PURPLE, 4.7, 36000, ['history', 'architecture', 'views'], {
      ru: ['Мавзолей Сунь Ятсена', 'Мавзолей основателя Китайской Республики (1926–1929) на склоне Пурпурной горы: 392 ступени ведут к залу с синей черепицей и видом на леса.', 'Вход бесплатный по брони; главный зал в понедельник закрыт.'],
      en: ['Sun Yat-sen Mausoleum', 'The mausoleum of the Republic of China’s founder (1926–1929) on Purple Mountain: 392 steps lead to a blue-tiled hall overlooking forest.', 'Free with a booking; the main hall is closed on Mondays.'],
      es: ['Mausoleo de Sun Yat-sen', 'El mausoleo del fundador de la República de China (1926–1929) en la Montaña Púrpura: 392 escalones suben a un salón de tejas azules con vistas al bosque.', 'Gratis con reserva; el salón principal cierra los lunes.'],
      de: ['Sun-Yat-sen-Mausoleum', 'Das Mausoleum des Gründers der Republik China (1926–1929) am Purpurberg: 392 Stufen führen zu einer Halle mit blauen Ziegeln über dem Wald.', 'Eintritt frei mit Reservierung; die Haupthalle ist montags geschlossen.'],
      fr: ['Mausolée de Sun Yat-sen', 'Le mausolée du fondateur de la République de Chine (1926–1929) sur la Montagne pourpre : 392 marches mènent à une salle aux tuiles bleues dominant la forêt.', 'Gratuit sur réservation ; la salle principale ferme le lundi.'],
      it: ['Mausoleo di Sun Yat-sen', 'Il mausoleo del fondatore della Repubblica di Cina (1926–1929) sulla Montagna Viola: 392 gradini salgono a una sala dalle tegole blu sopra il bosco.', 'Gratuito con prenotazione; la sala principale chiude il lunedì.'],
    }, { spot: 'insta', price: free }),
    P('ming-xiaoling', 'attraction', 32.058, 118.833, PURPLE, 4.6, 21000, ['history', 'unesco', 'photo'], {
      ru: ['Гробница Мин Сяолин', 'Гробница императора Хунъу, основателя династии Мин (ЮНЕСКО): Священная дорога с каменными слонами, верблюдами и чиновниками, осенью — в золоте гинкго и клёнов.', 'Осенью приходите к Священной дороге рано утром — свет мягкий, людей мало.'],
      en: ['Ming Xiaoling Mausoleum', 'The tomb of the Hongwu emperor, founder of the Ming dynasty (UNESCO): a Sacred Way of stone elephants, camels and officials, golden with ginkgo and maple in autumn.', 'In autumn reach the Sacred Way early — soft light and few people.'],
      es: ['Mausoleo Ming Xiaoling', 'La tumba del emperador Hongwu, fundador de la dinastía Ming (UNESCO): un Camino Sagrado de elefantes, camellos y funcionarios de piedra, dorado de ginkgos y arces en otoño.', 'En otoño llega temprano al Camino Sagrado: luz suave y poca gente.'],
      de: ['Ming-Xiaoling-Mausoleum', 'Das Grab des Hongwu-Kaisers, Gründer der Ming-Dynastie (UNESCO): ein Geisterweg mit steinernen Elefanten, Kamelen und Beamten, im Herbst golden von Ginkgo und Ahorn.', 'Im Herbst früh am Geisterweg sein – weiches Licht, wenige Leute.'],
      fr: ['Mausolée Ming Xiaoling', 'Le tombeau de l’empereur Hongwu, fondateur des Ming (UNESCO) : une Voie sacrée d’éléphants, chameaux et fonctionnaires de pierre, dorée de ginkgos et d’érables à l’automne.', 'À l’automne, arrivez tôt sur la Voie sacrée : lumière douce et peu de monde.'],
      it: ['Mausoleo Ming Xiaoling', 'La tomba dell’imperatore Hongwu, fondatore dei Ming (UNESCO): una Via Sacra di elefanti, cammelli e funzionari di pietra, dorata di ginkgo e aceri in autunno.', 'In autunno arriva presto alla Via Sacra: luce morbida e poca gente.'],
    }, { spot: 'insta', price: level(2) }),
    P('linggu-temple', 'attraction', 32.062, 118.864, LINGGU, 4.5, 11000, ['temples', 'architecture', 'nature'], {
      ru: ['Храм Лингу и Безбалочный зал', 'Лесной храмовый комплекс на Пурпурной горе: Безбалочный зал 1381 года сложен целиком из кирпича, без единой деревянной балки; рядом — девятиярусная пагода Лингу.', 'Поднимитесь на пагоду — сверху видны леса Пурпурной горы до горизонта.'],
      en: ['Linggu Temple and the Beamless Hall', 'A forest temple complex on Purple Mountain: the Beamless Hall of 1381 is built entirely of brick without a single wooden beam; nearby stands the nine-storey Linggu Pagoda.', 'Climb the pagoda — Purple Mountain’s forests stretch to the horizon.'],
      es: ['Templo Linggu y Salón sin Vigas', 'Un complejo de templos en el bosque de la Montaña Púrpura: el Salón sin Vigas de 1381 es todo de ladrillo, sin una sola viga de madera; cerca, la pagoda Linggu de nueve pisos.', 'Sube a la pagoda: los bosques de la montaña llegan al horizonte.'],
      de: ['Linggu-Tempel und Balkenlose Halle', 'Ein Waldtempel am Purpurberg: Die Balkenlose Halle von 1381 ist ganz aus Ziegeln, ohne einen Holzbalken; daneben die neunstöckige Linggu-Pagode.', 'Auf die Pagode steigen – die Wälder des Purpurbergs reichen bis zum Horizont.'],
      fr: ['Temple Linggu et salle sans poutres', 'Un ensemble de temples en forêt sur la Montagne pourpre : la salle sans poutres de 1381, toute en brique, sans une poutre de bois ; tout près, la pagode Linggu à neuf étages.', 'Montez à la pagode : les forêts de la montagne s’étendent à l’horizon.'],
      it: ['Tempio Linggu e Sala senza Travi', 'Un complesso templare nel bosco della Montagna Viola: la Sala senza Travi del 1381 è tutta in mattoni, senza una trave di legno; vicino, la pagoda Linggu a nove piani.', 'Sali sulla pagoda: i boschi della montagna arrivano all’orizzonte.'],
    }, { price: level(1) }),
    P('meiling-palace', 'attraction', 32.0535, 118.838, PURPLE, 4.4, 9300, ['architecture', 'history', 'photo'], {
      ru: ['Дворец Мэйлин', 'Вилла 1930-х годов Чан Кайши и Сун Мэйлин на Пурпурной горе; осенью платаны вокруг неё желтеют, и сверху аллеи похожи на золотое ожерелье.', '«Ожерелье» видно только сверху — его снимают с дронов; внутри посмотрите комнаты 1930-х.'],
      en: ['Meiling Palace', 'The 1930s villa of Chiang Kai-shek and Soong Mei-ling on Purple Mountain; in autumn the plane trees around it turn gold, and from above the avenues look like a golden necklace.', 'The autumn “necklace” shows from above — inside, see the 1930s rooms.'],
      es: ['Palacio Meiling', 'La villa de los años 30 de Chiang Kai-shek y Soong Mei-ling en la Montaña Púrpura; en otoño los plátanos amarillean y desde arriba las avenidas parecen un collar dorado.', 'El «collar» otoñal se ve desde arriba; dentro, las salas de los años 30.'],
      de: ['Meiling-Palast', 'Die Villa von Chiang Kai-shek und Soong Mei-ling aus den 1930ern am Purpurberg; im Herbst werden die Platanen golden, von oben wirken die Alleen wie eine goldene Halskette.', 'Die Herbst-„Halskette“ sieht man von oben – drinnen die Räume der 1930er.'],
      fr: ['Palais Meiling', 'La villa des années 1930 de Tchang Kaï-chek et Song Meiling sur la Montagne pourpre ; à l’automne, les platanes dorent et, vues d’en haut, les allées forment un collier d’or.', 'Le « collier » d’automne se voit d’en haut ; à l’intérieur, les pièces des années 1930.'],
      it: ['Palazzo Meiling', 'La villa anni ’30 di Chiang Kai-shek e Soong Mei-ling sulla Montagna Viola; in autunno i platani diventano dorati e dall’alto i viali sembrano una collana d’oro.', 'La «collana» autunnale si vede dall’alto; dentro, le stanze anni ’30.'],
    }, { price: level(2) }),
    P('qinhuai-confucius-temple', 'attraction', 32.021, 118.788, QINHUAI, 4.4, 41000, ['history', 'nightlife', 'cruise'], {
      ru: ['Храм Конфуция и река Циньхуай', 'Храм Фуцзымяо (впервые построен в 1034 году) на берегу реки Циньхуай; рядом — Цзяннаньский экзаменационный двор, а вечером по реке ходят лодки с фонарями.', 'Возьмите вечернюю лодку — река в огнях красивее всего после заката.'],
      en: ['Confucius Temple and the Qinhuai River', 'The Fuzimiao temple (first built in 1034) on the Qinhuai River, next to the Jiangnan Imperial Examination Hall; in the evening lantern-lit boats glide along the river.', 'Take an evening boat — the river is loveliest lit up after sunset.'],
      es: ['Templo de Confucio y río Qinhuai', 'El templo Fuzimiao (construido por primera vez en 1034) junto al río Qinhuai y el Salón de Exámenes Imperiales de Jiangnan; de noche pasan barcas con farolillos.', 'Toma una barca nocturna: el río es más bonito iluminado tras el atardecer.'],
      de: ['Konfuziustempel und Qinhuai-Fluss', 'Der Fuzimiao-Tempel (erstmals 1034 erbaut) am Qinhuai, neben der Kaiserlichen Prüfungshalle von Jiangnan; abends gleiten Laternenboote über den Fluss.', 'Ein Abendboot nehmen – der Fluss ist nach Sonnenuntergang beleuchtet am schönsten.'],
      fr: ['Temple de Confucius et rivière Qinhuai', 'Le temple Fuzimiao (bâti pour la première fois en 1034) au bord de la Qinhuai, près de la salle des examens impériaux du Jiangnan ; le soir, des barques à lanternes glissent sur l’eau.', 'Prenez une barque le soir : la rivière illuminée est plus belle après le coucher du soleil.'],
      it: ['Tempio di Confucio e fiume Qinhuai', 'Il tempio Fuzimiao (costruito la prima volta nel 1034) sul fiume Qinhuai, accanto alla Sala degli esami imperiali del Jiangnan; la sera scivolano barche con lanterne.', 'Prendi una barca la sera: il fiume illuminato è più bello dopo il tramonto.'],
    }, { spot: 'insta', price: free }),
    P('zhonghua-gate', 'attraction', 32.0125, 118.7795, SKYLINE, 4.5, 13000, ['history', 'architecture', 'castles'], {
      ru: ['Ворота Чжунхуамэнь и городская стена', 'Крупнейшие ворота минской городской стены (1366–1393) с тремя внутренними дворами-«кувшинами», где могли укрыться тысячи солдат; сохранилось больше 25 км стены — одна из самых длинных городских стен мира.', 'Поднимитесь на стену и пройдите по ней — на кирпичах видны клейма мастеров XIV века.'],
      en: ['Zhonghua Gate and the City Wall', 'The largest gate of the Ming city wall (1366–1393), with three inner “jar” courtyards that could shelter thousands of soldiers; over 25 km of wall survives — one of the world’s longest city walls.', 'Walk along the top — the bricks bear 14th-century makers’ stamps.'],
      es: ['Puerta Zhonghua y la muralla', 'La mayor puerta de la muralla Ming (1366–1393), con tres patios interiores «tinaja» capaces de cobijar a miles de soldados; quedan más de 25 km de muralla, de las más largas del mundo.', 'Camina por arriba: los ladrillos llevan sellos de artesanos del siglo XIV.'],
      de: ['Zhonghua-Tor und Stadtmauer', 'Das größte Tor der Ming-Stadtmauer (1366–1393) mit drei inneren „Krug“-Höfen für Tausende Soldaten; über 25 km Mauer sind erhalten – eine der längsten Stadtmauern der Welt.', 'Oben entlanggehen – die Ziegel tragen Stempel der Hersteller aus dem 14. Jh.'],
      fr: ['Porte Zhonghua et rempart', 'La plus grande porte du rempart Ming (1366–1393), avec trois cours intérieures « jarres » pouvant abriter des milliers de soldats ; plus de 25 km de muraille subsistent, l’une des plus longues du monde.', 'Marchez au sommet : les briques portent les marques des artisans du XIVe siècle.'],
      it: ['Porta Zhonghua e mura', 'La porta più grande delle mura Ming (1366–1393), con tre cortili interni «a giara» che potevano ospitare migliaia di soldati; restano oltre 25 km di mura, tra le più lunghe al mondo.', 'Cammina in cima: i mattoni portano i marchi degli artigiani del XIV secolo.'],
    }, { price: level(1) }),
    P('ganxi-mansion', 'attraction', 32.02, 118.781, QINHUAI, 4.4, 4100, ['history', 'architecture', 'museums'], {
      ru: ['Усадьба Гань Си', 'Огромная частная усадьба эпохи Цин с анфиладой дворов — по преданию, «99 с половиной комнат»; внутри Музей народных промыслов Нанкина с вырезанием из бумаги и вышивкой.', 'Здесь почти нет групп — тихая альтернатива шумному Фуцзымяо.'],
      en: ['Ganxi Mansion', 'A vast Qing-era private residence of interlinked courtyards — legend says “99 and a half rooms”; inside is the Nanjing Folk Museum with paper-cutting and embroidery.', 'Hardly any tour groups — a quiet alternative to busy Fuzimiao.'],
      es: ['Mansión Ganxi', 'Una enorme residencia privada Qing de patios encadenados, según la leyenda «99 habitaciones y media»; dentro, el Museo de Artes Populares de Nanjing con papel recortado y bordado.', 'Apenas hay grupos: alternativa tranquila al bullicioso Fuzimiao.'],
      de: ['Ganxi-Residenz', 'Ein riesiger privater Wohnsitz der Qing-Zeit mit verbundenen Höfen – angeblich „99 ½ Zimmer“; darin das Volkskunstmuseum Nanjing mit Scherenschnitt und Stickerei.', 'Kaum Reisegruppen – eine ruhige Alternative zum vollen Fuzimiao.'],
      fr: ['Résidence de Gan Xi', 'Une vaste demeure privée d’époque Qing aux cours en enfilade, « 99 pièces et demie » selon la légende ; elle abrite le musée des Arts populaires de Nankin, papiers découpés et broderies.', 'Presque pas de groupes : une alternative calme au Fuzimiao bondé.'],
      it: ['Residenza Ganxi', 'Una vasta residenza privata Qing di cortili in sequenza, secondo la leggenda «99 stanze e mezza»; dentro, il Museo del Folklore di Nanchino con carta ritagliata e ricami.', 'Quasi nessun gruppo: un’alternativa tranquilla al caotico Fuzimiao.'],
    }, { spot: 'hidden' }),
    P('xuanwu-lake', 'nature', 32.074, 118.796, TOWER, 4.5, 19000, ['lakes', 'gardens', 'views'], {
      ru: ['Озеро Сюаньу', 'Большое озеро с островками и мостами у самой городской стены; вечером над водой горят небоскрёбы, включая башню Цзыфэн.', 'Пройдите участок стены Тайчэн над озером — оттуда лучший вид на воду и город.'],
      en: ['Xuanwu Lake', 'A large lake of islets and bridges right by the city wall; at night the towers, including Zifeng Tower, glow over the water.', 'Walk the Taicheng stretch of wall above the lake — the best view of water and city.'],
      es: ['Lago Xuanwu', 'Un gran lago con islotes y puentes junto a la muralla; de noche brillan sobre el agua los rascacielos, incluida la torre Zifeng.', 'Recorre el tramo de muralla de Taicheng sobre el lago: la mejor vista.'],
      de: ['Xuanwu-See', 'Ein großer See mit Inselchen und Brücken direkt an der Stadtmauer; nachts leuchten die Hochhäuser, darunter der Zifeng Tower, über dem Wasser.', 'Den Taicheng-Abschnitt der Mauer über dem See gehen – der beste Blick auf See und Stadt.'],
      fr: ['Lac Xuanwu', 'Un grand lac d’îlots et de ponts au pied du rempart ; la nuit, les tours, dont la Zifeng, brillent au-dessus de l’eau.', 'Marchez sur le tronçon de Taicheng au-dessus du lac : la plus belle vue sur l’eau et la ville.'],
      it: ['Lago Xuanwu', 'Un grande lago con isolette e ponti accanto alle mura; di notte i grattacieli, tra cui la Zifeng Tower, brillano sull’acqua.', 'Percorri il tratto di mura di Taicheng sopra il lago: la vista migliore su acqua e città.'],
    }, { spot: 'insta', price: free }),
    P('jiming-temple', 'attraction', 32.0645, 118.7955, LINGGU, 4.5, 15000, ['temples', 'history', 'photo'], {
      ru: ['Храм Цзимин', 'Один из старейших буддийских храмов Нанкина, основанный в VI веке, с жёлтыми стенами и пагодой; весной дорога к нему утопает в цветущей сакуре.', 'Сакура на улице Цзиминсы цветёт в конце марта — приходите к 7 утра ради фото без толп.'],
      en: ['Jiming Temple', 'One of Nanjing’s oldest Buddhist temples, founded in the 6th century, with yellow walls and a pagoda; in spring the road to it is smothered in cherry blossom.', 'The cherries on Jimingsi Road bloom in late March — come at 7 am for crowd-free photos.'],
      es: ['Templo Jiming', 'Uno de los templos budistas más antiguos de Nanjing, fundado en el siglo VI, con muros amarillos y pagoda; en primavera la calle que lleva a él se cubre de cerezos en flor.', 'Los cerezos de Jimingsi Road florecen a finales de marzo: ve a las 7 para fotos sin gente.'],
      de: ['Jiming-Tempel', 'Einer der ältesten buddhistischen Tempel Nanjings, im 6. Jh. gegründet, mit gelben Mauern und Pagode; im Frühling versinkt die Straße dorthin in Kirschblüten.', 'Die Kirschen an der Jimingsi Road blühen Ende März – um 7 Uhr kommen für Fotos ohne Gedränge.'],
      fr: ['Temple Jiming', 'L’un des plus anciens temples bouddhistes de Nankin, fondé au VIe siècle, murs jaunes et pagode ; au printemps, la rue qui y mène croule sous les cerisiers en fleurs.', 'Les cerisiers de la rue Jimingsi fleurissent fin mars : venez à 7 h pour des photos sans foule.'],
      it: ['Tempio Jiming', 'Uno dei più antichi templi buddhisti di Nanchino, fondato nel VI secolo, con mura gialle e pagoda; in primavera la via che vi conduce è sommersa dai ciliegi in fiore.', 'I ciliegi di Jimingsi Road fioriscono a fine marzo: vieni alle 7 per foto senza folla.'],
    }, { spot: 'insta', price: level(1) }),
    P('nanjing-museum', 'attraction', 32.041, 118.8245, SKYLINE, 4.8, 23000, ['museums', 'history', 'art'], {
      ru: ['Нанкинский музей', 'Один из старейших и крупнейших музеев Китая (основан в 1933 году): нефрит, фарфор, бронза и целая улица времён Республики под крышей.', 'Вход бесплатный по брони с паспортом; в понедельник закрыт. Заложите полдня.'],
      en: ['Nanjing Museum', 'One of China’s oldest and largest museums (founded in 1933): jade, porcelain, bronzes and a whole Republic-era street indoors.', 'Free with a booking and passport; closed on Mondays. Allow half a day.'],
      es: ['Museo de Nanjing', 'Uno de los museos más antiguos y grandes de China (fundado en 1933): jade, porcelana, bronces y toda una calle de la época republicana bajo techo.', 'Gratis con reserva y pasaporte; cierra los lunes. Reserva medio día.'],
      de: ['Nanjing-Museum', 'Eines der ältesten und größten Museen Chinas (gegründet 1933): Jade, Porzellan, Bronzen und eine ganze Straße aus der Republikzeit unter Dach.', 'Eintritt frei mit Reservierung und Reisepass; montags geschlossen. Einen halben Tag einplanen.'],
      fr: ['Musée de Nankin', 'L’un des plus anciens et plus grands musées de Chine (fondé en 1933) : jades, porcelaines, bronzes et toute une rue d’époque républicaine sous toit.', 'Gratuit sur réservation avec passeport ; fermé le lundi. Prévoyez une demi-journée.'],
      it: ['Museo di Nanchino', 'Uno dei musei più antichi e grandi della Cina (fondato nel 1933): giade, porcellane, bronzi e un’intera via dell’epoca repubblicana al coperto.', 'Gratuito con prenotazione e passaporto; chiuso il lunedì. Calcola mezza giornata.'],
    }, { price: free }),
    P('massacre-memorial', 'attraction', 32.036, 118.744, SKYLINE, 4.9, 19000, ['history', 'museums'], {
      ru: ['Мемориал жертв Нанкинской резни', 'Мемориальный музей (открыт в 1985 году) в память о жертвах массовых убийств, совершённых японскими войсками в Нанкине в 1937–1938 годах. Тяжёлое и очень важное место.', 'Вход бесплатный по брони с паспортом; в понедельник закрыт. Внутри принято соблюдать тишину.'],
      en: ['Nanjing Massacre Memorial Hall', 'A memorial museum (opened in 1985) to the victims of the mass killings by Japanese troops in Nanjing in 1937–1938. Harrowing and deeply important.', 'Free with a booking and passport; closed on Mondays. Silence is expected inside.'],
      es: ['Memorial de la Masacre de Nanjing', 'Un museo memorial (abierto en 1985) dedicado a las víctimas de las matanzas de las tropas japonesas en Nanjing en 1937–1938. Duro y muy importante.', 'Gratis con reserva y pasaporte; cierra los lunes. Dentro se guarda silencio.'],
      de: ['Gedenkhalle des Massakers von Nanjing', 'Ein Gedenkmuseum (eröffnet 1985) für die Opfer der Massenmorde japanischer Truppen in Nanjing 1937–1938. Bedrückend und sehr wichtig.', 'Eintritt frei mit Reservierung und Reisepass; montags geschlossen. Drinnen herrscht Stille.'],
      fr: ['Mémorial du massacre de Nankin', 'Un musée mémorial (ouvert en 1985) dédié aux victimes des massacres commis par les troupes japonaises à Nankin en 1937–1938. Éprouvant et essentiel.', 'Gratuit sur réservation avec passeport ; fermé le lundi. Le silence est de rigueur.'],
      it: ['Memoriale del massacro di Nanchino', 'Un museo memoriale (aperto nel 1985) dedicato alle vittime delle stragi delle truppe giapponesi a Nanchino nel 1937–1938. Duro e profondamente importante.', 'Gratuito con prenotazione e passaporto; chiuso il lunedì. All’interno si osserva il silenzio.'],
    }, { price: free }),
    P('presidential-palace', 'attraction', 32.045, 118.796, SKYLINE, 4.5, 21000, ['history', 'architecture', 'gardens'], {
      ru: ['Президентский дворец', 'Комплекс, который был резиденцией наместников Цин, дворцом Небесного царства тайпинов, а в 1912 году — местом, где Сунь Ятсен вступил в должность временного президента.', 'Не пропустите сад Сюй в западной части — классический сад с прудом и павильонами.'],
      en: ['Presidential Palace', 'A complex that served as the Qing viceroys’ residence, the palace of the Taiping Heavenly Kingdom and, in 1912, the place where Sun Yat-sen took office as provisional president.', 'Don’t miss the Xu Garden in the west — a classical garden of pond and pavilions.'],
      es: ['Palacio Presidencial', 'Un complejo que fue residencia de los virreyes Qing, palacio del Reino Celestial Taiping y, en 1912, el lugar donde Sun Yat-sen asumió como presidente provisional.', 'No te pierdas el jardín Xu al oeste: un jardín clásico de estanque y pabellones.'],
      de: ['Präsidentenpalast', 'Ein Komplex, der Residenz der Qing-Vizekönige, Palast des Taiping-Himmelreichs und 1912 Ort von Sun Yat-sens Amtsantritt als provisorischer Präsident war.', 'Den Xu-Garten im Westen nicht verpassen – ein klassischer Garten mit Teich und Pavillons.'],
      fr: ['Palais présidentiel', 'Un ensemble qui fut résidence des vice-rois Qing, palais du Royaume céleste des Taiping et, en 1912, lieu de l’investiture de Sun Yat-sen comme président provisoire.', 'Ne manquez pas le jardin Xu à l’ouest : un jardin classique d’étang et de pavillons.'],
      it: ['Palazzo Presidenziale', 'Un complesso che fu residenza dei viceré Qing, palazzo del Regno Celeste dei Taiping e, nel 1912, luogo dell’insediamento di Sun Yat-sen come presidente provvisorio.', 'Non perderti il giardino Xu a ovest: un giardino classico con stagno e padiglioni.'],
    }, { price: level(2) }),
    P('niushou-mountain', 'attraction', 31.918, 118.742, LINGGU, 4.6, 12000, ['temples', 'architecture', 'nature'], {
      ru: ['Гора Нюшоу и дворец Фодин', 'Гора «Бычья голова» на юге города с подземным дворцом Фодин (2015) — огромным буддийским залом под куполом, где хранится реликвия теменной кости Будды.', 'Купол Фодина огромен внутри — поднимите голову в главном зале.'],
      en: ['Niushou Mountain and Usnisha Palace', 'The “Ox Head” mountain south of the city with the underground Usnisha Palace (2015) — a vast domed Buddhist hall holding a relic of the Buddha’s parietal bone.', 'The dome is vast inside — look up in the main hall.'],
      es: ['Montaña Niushou y Palacio Usnisha', 'La montaña «Cabeza de Buey» al sur con el Palacio Usnisha subterráneo (2015), una enorme sala budista bajo cúpula que guarda una reliquia del hueso parietal de Buda.', 'La cúpula es inmensa: mira arriba en la sala principal.'],
      de: ['Niushou-Berg und Usnisha-Palast', 'Der „Ochsenkopf“-Berg im Süden mit dem unterirdischen Usnisha-Palast (2015) – einer riesigen buddhistischen Kuppelhalle mit einer Reliquie von Buddhas Scheitelbein.', 'Die Kuppel ist innen gewaltig – in der Haupthalle nach oben schauen.'],
      fr: ['Mont Niushou et palais Usnisha', 'La montagne « Tête de bœuf » au sud, avec le palais souterrain d’Usnisha (2015), immense salle bouddhiste sous coupole abritant une relique de l’os pariétal du Bouddha.', 'La coupole est immense : levez les yeux dans la grande salle.'],
      it: ['Monte Niushou e Palazzo Usnisha', 'Il monte «Testa di Bue» a sud con il Palazzo Usnisha sotterraneo (2015), un’enorme sala buddhista a cupola che custodisce una reliquia dell’osso parietale del Buddha.', 'La cupola è immensa: guarda in alto nella sala principale.'],
    }, { price: level(3) }),
    P('yihe-road', 'attraction', 32.064, 118.766, TOWER, 4.4, 3800, ['architecture', 'history', 'photo'], {
      ru: ['Квартал Ихэлу', 'Тихий район особняков 1930-х годов под платанами, где жили политики и посольства времён Республики; часть вилл открыта как кафе и музеи.', 'Гуляйте без маршрута — таблички у ворот рассказывают, кто жил в каждом доме.'],
      en: ['Yihe Road district', 'A quiet district of 1930s mansions under plane trees, home to Republic-era politicians and embassies; some villas are open as cafés and museums.', 'Wander without a plan — plaques at the gates tell who lived in each house.'],
      es: ['Barrio de Yihe Road', 'Un barrio tranquilo de mansiones de los años 30 bajo plátanos, hogar de políticos y embajadas de la época republicana; algunas villas son cafés y museos.', 'Pasea sin rumbo: las placas de las puertas cuentan quién vivió en cada casa.'],
      de: ['Viertel Yihe Road', 'Ein ruhiges Viertel mit Villen der 1930er unter Platanen, einst Sitz von Politikern und Botschaften der Republikzeit; manche Villen sind Cafés und Museen.', 'Ohne Plan bummeln – Schilder an den Toren verraten, wer in welchem Haus lebte.'],
      fr: ['Quartier de Yihe Road', 'Un quartier calme de demeures des années 1930 sous les platanes, où vivaient politiciens et ambassades de l’époque républicaine ; certaines villas sont des cafés et musées.', 'Flânez sans plan : les plaques aux portails racontent qui habitait chaque maison.'],
      it: ['Quartiere di Yihe Road', 'Un quartiere tranquillo di ville anni ’30 sotto i platani, dimora di politici e ambasciate dell’epoca repubblicana; alcune ville sono caffè e musei.', 'Passeggia senza meta: le targhe ai cancelli raccontano chi abitava ogni casa.'],
    }, { spot: 'hidden', price: free }),
    P('yangtze-bridge', 'attraction', 32.11, 118.736, SKYLINE, 4.5, 8700, ['architecture', 'history', 'views'], {
      ru: ['Нанкинский мост через Янцзы', 'Двухъярусный автомобильно-железнодорожный мост 1968 года — первый, который Китай спроектировал и построил сам; на мостовых башнях — скульптуры с красными знамёнами.', 'Поднимитесь на смотровую в южной башне — оттуда видна вся Янцзы.'],
      en: ['Nanjing Yangtze River Bridge', 'A 1968 double-deck road-and-rail bridge — the first China designed and built on its own; its towers carry sculptures with red banners.', 'Go up to the lookout in the south tower — the whole Yangtze opens up.'],
      es: ['Puente de Nanjing sobre el Yangtsé', 'Un puente de dos pisos para coches y trenes de 1968, el primero que China diseñó y construyó por sí misma; sus torres llevan esculturas con banderas rojas.', 'Sube al mirador de la torre sur: se abre todo el Yangtsé.'],
      de: ['Nanjinger Jangtsebrücke', 'Eine doppelstöckige Straßen- und Eisenbahnbrücke von 1968 – die erste, die China selbst entwarf und baute; ihre Türme tragen Skulpturen mit roten Fahnen.', 'Zur Aussicht im Südturm hinauf – der ganze Jangtse liegt vor Ihnen.'],
      fr: ['Pont de Nankin sur le Yangtsé', 'Un pont rail-route à deux niveaux de 1968, le premier que la Chine conçut et construisit seule ; ses tours portent des sculptures aux drapeaux rouges.', 'Montez au belvédère de la tour sud : tout le Yangtsé s’ouvre devant vous.'],
      it: ['Ponte di Nanchino sullo Yangtze', 'Un ponte stradale e ferroviario a due piani del 1968, il primo che la Cina progettò e costruì da sola; le sue torri portano sculture con bandiere rosse.', 'Sali al belvedere della torre sud: si apre tutto lo Yangtze.'],
    }, { price: level(1) }),
    P('nanjing-impressions', 'food', 32.0215, 118.7895, QINHUAI, 4.4, 14000, ['food', 'culture'], {
      ru: ['Нанкин Дапайдан (Nanjing Impressions)', 'Сеть ресторанов нанкинской кухни, основанная в 1994 году, в интерьерах в духе Нанкина времён Республики, с официантами в старинной одежде; филиал у Фуцзымяо — самый популярный.', 'Очередь здесь бывает на сотни номеров — берите номерок заранее или приходите к открытию.'],
      en: ['Nanjing Impressions (Nanjing Dapaidang)', 'A Nanjing-cuisine chain founded in 1994, with Republic-era Nanjing décor and waiters in period dress; the branch by Fuzimiao is the most popular.', 'Queues can run to hundreds of numbers — take a ticket early or come at opening.'],
      es: ['Nanjing Impressions (Nanjing Dapaidang)', 'Una cadena de cocina de Nanjing fundada en 1994, con ambientación del Nanjing republicano y camareros vestidos de época; el local junto a Fuzimiao es el más popular.', 'La cola llega a cientos de números: coge número pronto o ve a la apertura.'],
      de: ['Nanjing Impressions (Nanjing Dapaidang)', 'Eine Kette mit Nanjing-Küche, gegründet 1994, im Dekor des republikanischen Nanjing mit Kellnern in historischer Kleidung; die Filiale am Fuzimiao ist die beliebteste.', 'Die Schlange reicht bis zu Hunderten Nummern – früh eine Nummer ziehen oder zur Öffnung kommen.'],
      fr: ['Nanjing Impressions (Nanjing Dapaidang)', 'Une chaîne de cuisine de Nankin fondée en 1994, au décor du Nankin républicain et aux serveurs en costume d’époque ; l’adresse près du Fuzimiao est la plus courue.', 'La file peut compter des centaines de numéros : prenez un ticket tôt ou venez à l’ouverture.'],
      it: ['Nanjing Impressions (Nanjing Dapaidang)', 'Una catena di cucina di Nanchino fondata nel 1994, con arredi della Nanchino repubblicana e camerieri in abiti d’epoca; la sede vicino al Fuzimiao è la più amata.', 'La coda arriva a centinaia di numeri: prendi il numero presto o vieni all’apertura.'],
    }, { price: level(2), menu: [
      ['Salted duck', undefined, 'нанкинская солёная утка|Nanjing salted duck|pato salado de Nanjing|Nanjinger Salzente|canard salé de Nankin|anatra salata di Nanchino'],
      ['Duck blood vermicelli soup', undefined, 'суп с утиной кровью и вермишелью|duck blood and vermicelli soup|sopa de sangre de pato y fideos|Entenblut-Glasnudelsuppe|soupe au sang de canard et vermicelles|zuppa di sangue d’anatra e vermicelli'],
      ['Soup dumplings', undefined, 'танбао — пельмени с бульоном|soup dumplings|empanadillas de sopa|Suppenteigtaschen|raviolis à soupe|ravioli in brodo'],
    ] }),
    P('wan-qing-lou', 'food', 32.022, 118.788, QINHUAI, 4.3, 5200, ['food', 'history'], {
      ru: ['Ваньцинлоу — закуски Циньхуая', 'Ресторан у Фуцзымяо, специализирующийся на «восьми чудесах Циньхуая» — наборе традиционных нанкинских закусок, а также на курице соломкой и жареных пельменях готе с говядиной.', 'Возьмите сет закусок — так за раз попробуете всё понемногу.'],
      en: ['Wan Qing Lou — Qinhuai snacks', 'A restaurant by Fuzimiao specialising in the “Qinhuai delicacies” — a set of traditional Nanjing snacks — plus shredded chicken and beef pot-stickers.', 'Order the snack set — you’ll try a little of everything at once.'],
      es: ['Wan Qing Lou, tentempiés del Qinhuai', 'Un restaurante junto a Fuzimiao especializado en las «delicias del Qinhuai», un surtido de tentempiés tradicionales, además de pollo deshebrado y empanadillas de ternera a la plancha.', 'Pide el surtido: probarás un poco de todo.'],
      de: ['Wan Qing Lou – Qinhuai-Snacks', 'Ein Restaurant am Fuzimiao, spezialisiert auf die „Qinhuai-Delikatessen“ – traditionelle Nanjinger Snacks – sowie gezupftes Huhn und Rindfleisch-Guotie.', 'Das Snack-Set bestellen – so probiert man von allem etwas.'],
      fr: ['Wan Qing Lou, en-cas du Qinhuai', 'Un restaurant près du Fuzimiao spécialisé dans les « délices du Qinhuai », assortiment d’en-cas traditionnels de Nankin, ainsi que poulet effiloché et raviolis grillés au bœuf.', 'Commandez l’assortiment : vous goûterez un peu de tout.'],
      it: ['Wan Qing Lou, snack del Qinhuai', 'Un ristorante vicino al Fuzimiao specializzato nelle «delizie del Qinhuai», un assortimento di snack tradizionali di Nanchino, oltre a pollo sfilacciato e guotie di manzo.', 'Ordina l’assortimento: assaggerai un po’ di tutto.'],
    }, { price: level(2), menu: [
      ['Qinhuai snack set', undefined, 'сет закусок Циньхуая|Qinhuai snack set|surtido del Qinhuai|Qinhuai-Snack-Set|assortiment du Qinhuai|assortimento del Qinhuai'],
      ['Beef pot-stickers', undefined, 'жареные пельмени готе с говядиной|beef pot-stickers|empanadillas de ternera a la plancha|Rindfleisch-Guotie|raviolis grillés au bœuf|guotie di manzo'],
    ] }),
    P('lvliuju', 'food', 32.033, 118.792, LINGGU, 4.3, 6100, ['food', 'history'], {
      ru: ['Люйлюцзюй — вегетарианская кухня с 1912 года', 'Старейший нанкинский бренд вегетарианской кухни, основанный в 1912 году; славится вегетарианской «жареной уткой» из соевой плёнки и закусками.', 'Вегетарианская «утка» здесь — блюдо-визитка, попробуйте даже если едите мясо.'],
      en: ['Lvliuju — vegetarian since 1912', 'A time-honoured Nanjing vegetarian brand founded in 1912, known for its vegetarian “roast duck” made of tofu skin, and its snacks.', 'The vegetarian “duck” is the signature — try it even if you eat meat.'],
      es: ['Lvliuju, vegetariano desde 1912', 'Una veterana marca vegetariana de Nanjing fundada en 1912, conocida por su «pato asado» vegetariano de piel de tofu y sus tentempiés.', 'El «pato» vegetariano es la especialidad: pruébalo aunque comas carne.'],
      de: ['Lvliuju – vegetarisch seit 1912', 'Eine traditionsreiche vegetarische Marke Nanjings von 1912, bekannt für vegetarische „Bratente“ aus Tofuhaut und Snacks.', 'Die vegetarische „Ente“ ist das Aushängeschild – auch für Fleischesser.'],
      fr: ['Lvliuju, végétarien depuis 1912', 'Une vieille maison végétarienne de Nankin fondée en 1912, connue pour son « canard rôti » végétarien en peau de tofu et ses en-cas.', 'Le « canard » végétarien est la spécialité : goûtez-le même si vous mangez de la viande.'],
      it: ['Lvliuju, vegetariano dal 1912', 'Uno storico marchio vegetariano di Nanchino fondato nel 1912, noto per la sua «anatra arrosto» vegetariana di pelle di tofu e i suoi snack.', 'L’«anatra» vegetariana è il piatto simbolo: provala anche se mangi carne.'],
    }, { price: level(2), menu: [
      ['Vegetarian roast duck', undefined, 'вегетарианская «утка» из соевой плёнки|vegetarian “duck” of tofu skin|«pato» vegetariano de piel de tofu|vegetarische „Ente“ aus Tofuhaut|« canard » végétarien en peau de tofu|«anatra» vegetariana di pelle di tofu'],
      ['Vegetarian buns', undefined, 'вегетарианские баоцзы|vegetarian buns|bollos vegetarianos|vegetarische Baozi|brioches végétariennes|panini vegetariani'],
    ] }),
    P('han-fuxing', 'food', 32.066, 118.77, PURPLE, 4.3, 5800, ['food', 'history'], {
      ru: ['Хань Фусин — солёная утка', 'Старинная лавка солёной утки, работающая с эпохи поздней Цин; нанкинская яньшуйя — нежная, светлая, с тонким вкусом. Филиалы на улицах Чанбай и Хубэй.', 'Попросите разрубить полутушку на кусочки — продавцы делают это мгновенно.'],
      en: ['Han Fuxing — salted duck', 'An old salted-duck shop going since the late Qing; Nanjing yanshuiya is tender, pale and delicate. Branches on Changbai Street and Hubei Road.', 'Ask for half a duck chopped into pieces — they do it in seconds.'],
      es: ['Han Fuxing, pato salado', 'Una vieja tienda de pato salado desde finales de la dinastía Qing; el yanshuiya de Nanjing es tierno, claro y delicado. Locales en Changbai Street y Hubei Road.', 'Pide medio pato troceado: lo cortan en segundos.'],
      de: ['Han Fuxing – Salzente', 'Ein alter Salzenten-Laden seit der späten Qing-Zeit; Nanjinger Yanshuiya ist zart, hell und fein. Filialen an der Changbai Street und Hubei Road.', 'Eine halbe Ente in Stücke hacken lassen – geht in Sekunden.'],
      fr: ['Han Fuxing, canard salé', 'Une vieille boutique de canard salé depuis la fin des Qing ; le yanshuiya de Nankin est tendre, pâle et délicat. Adresses rue Changbai et Hubei Road.', 'Demandez un demi-canard découpé : c’est fait en quelques secondes.'],
      it: ['Han Fuxing, anatra salata', 'Una vecchia bottega di anatra salata dalla tarda epoca Qing; lo yanshuiya di Nanchino è tenero, chiaro e delicato. Sedi in Changbai Street e Hubei Road.', 'Chiedi mezza anatra a pezzi: lo fanno in pochi secondi.'],
    }, { price: level(1), menu: [
      ['Yanshuiya', undefined, 'нанкинская солёная утка|Nanjing salted duck|pato salado de Nanjing|Nanjinger Salzente|canard salé de Nankin|anatra salata di Nanchino'],
      ['Duck gizzards', undefined, 'утиные желудочки|duck gizzards|mollejas de pato|Entenmägen|gésiers de canard|ventrigli d’anatra'],
    ] }),
    P('duck-blood-soup', 'food', 32.043, 118.785, SKYLINE, 4.3, 7200, ['food', 'streetfood'], {
      ru: ['Суп с утиной кровью и вермишелью', 'Главный уличный суп Нанкина: прозрачный утиный бульон с крахмальной вермишелью, утиной кровью, печенью, желудочками и тофу-пуфами; его варят в закусочных по всему центру.', 'Добавьте ложку перечного масла и кинзу — так едят местные.'],
      en: ['Duck blood and vermicelli soup', 'Nanjing’s signature street soup: clear duck broth with glass noodles, duck blood, liver, gizzards and tofu puffs; served at eateries all over the centre.', 'Add a spoonful of chilli oil and coriander — the local way.'],
      es: ['Sopa de sangre de pato y fideos', 'La sopa callejera de Nanjing: caldo claro de pato con fideos de cristal, sangre, hígado, mollejas y tofu frito; se sirve por todo el centro.', 'Añade una cucharada de aceite de chile y cilantro, como los locales.'],
      de: ['Entenblut-Glasnudelsuppe', 'Nanjings typische Straßensuppe: klare Entenbrühe mit Glasnudeln, Entenblut, Leber, Mägen und Tofu-Puffs; überall im Zentrum zu haben.', 'Einen Löffel Chiliöl und Koriander dazu – so essen es Einheimische.'],
      fr: ['Soupe au sang de canard et vermicelles', 'La soupe de rue emblématique de Nankin : bouillon clair de canard, vermicelles de verre, sang, foie, gésiers et tofu frit ; servie partout dans le centre.', 'Ajoutez une cuillère d’huile pimentée et de la coriandre, à la locale.'],
      it: ['Zuppa di sangue d’anatra e vermicelli', 'La zuppa di strada simbolo di Nanchino: brodo chiaro d’anatra con vermicelli di vetro, sangue, fegato, ventrigli e tofu fritto; servita in tutto il centro.', 'Aggiungi un cucchiaio d’olio piccante e coriandolo, alla maniera locale.'],
    }, { price: level(1), menu: [
      ['Duck blood vermicelli soup', undefined, 'суп с утиной кровью и вермишелью|duck blood vermicelli soup|sopa de sangre de pato con fideos|Entenblut-Glasnudelsuppe|soupe au sang de canard|zuppa di sangue d’anatra'],
      ['Duck-oil shaobing', undefined, 'лепёшка на утином жире|duck-fat sesame cake|torta de sésamo con grasa de pato|Sesamfladen mit Entenschmalz|galette au sésame et graisse de canard|focaccina al sesamo con grasso d’anatra'],
    ] }),
    P('tangbao', 'food', 32.044, 118.78, SKYLINE, 4.3, 6400, ['food', 'streetfood'], {
      ru: ['Танбао — пельмени с бульоном', 'Нанкинские танбао с тонким тестом и горячим бульоном внутри; осенью — с крабовой икрой. Классика завтрака в районе Синьцзекоу.', 'Сначала надкусите и выпейте бульон через трубочку или ложку — иначе обожжётесь.'],
      en: ['Tangbao — soup dumplings', 'Nanjing tangbao with thin wrappers and hot broth inside; in autumn, with crab roe. A breakfast classic around Xinjiekou.', 'Bite a hole and sip the broth first — or you’ll get burned.'],
      es: ['Tangbao, empanadillas de sopa', 'Los tangbao de Nanjing, de masa fina y caldo caliente dentro; en otoño, con huevas de cangrejo. Un clásico del desayuno en Xinjiekou.', 'Muerde un agujero y sorbe el caldo primero, o te quemarás.'],
      de: ['Tangbao – Suppenteigtaschen', 'Nanjinger Tangbao mit dünnem Teig und heißer Brühe innen; im Herbst mit Krabbenrogen. Ein Frühstücksklassiker rund um Xinjiekou.', 'Erst ein Loch beißen und die Brühe trinken – sonst verbrennt man sich.'],
      fr: ['Tangbao, raviolis à soupe', 'Les tangbao de Nankin, pâte fine et bouillon brûlant à l’intérieur ; à l’automne, au corail de crabe. Un classique du petit-déjeuner autour de Xinjiekou.', 'Croquez un trou et aspirez d’abord le bouillon, sinon gare aux brûlures.'],
      it: ['Tangbao, ravioli in brodo', 'I tangbao di Nanchino, sfoglia sottile e brodo bollente dentro; in autunno con uova di granchio. Un classico della colazione a Xinjiekou.', 'Mordi un buchino e sorseggia prima il brodo, o ti scotti.'],
    }, { price: level(1), menu: [
      ['Pork tangbao', undefined, 'танбао со свининой|pork soup dumplings|empanadillas de sopa de cerdo|Suppenteigtaschen mit Schwein|raviolis à soupe au porc|ravioli in brodo di maiale'],
      ['Crab roe tangbao (autumn)', undefined, 'танбао с крабовой икрой (осенью)|crab roe soup dumplings (autumn)|con huevas de cangrejo (otoño)|mit Krabbenrogen (Herbst)|au corail de crabe (automne)|con uova di granchio (autunno)'],
    ] }),
    P('shiziqiao', 'food', 32.07, 118.775, TOWER, 4.2, 9800, ['streetfood', 'nightlife'], {
      ru: ['Улица еды Шицзыцяо', 'Пешеходная улица еды у Хунань-лу: десятки лавок с солёной уткой, танбао, шашлычками, раками и сладостями; вечером особенно оживлённо.', 'Летом попробуйте раков сяолунся — Нанкин их обожает.'],
      en: ['Shiziqiao food street', 'A pedestrian food street off Hunan Road: dozens of stalls with salted duck, tangbao, skewers, crayfish and sweets; liveliest in the evening.', 'In summer try xiaolongxia crayfish — Nanjing loves them.'],
      es: ['Calle de comida Shiziqiao', 'Una calle peatonal de comida junto a Hunan Road: decenas de puestos con pato salado, tangbao, brochetas, cangrejos de río y dulces; más animada de noche.', 'En verano prueba los cangrejos de río xiaolongxia: Nanjing los adora.'],
      de: ['Essensstraße Shiziqiao', 'Eine Fußgänger-Essensstraße an der Hunan Road: Dutzende Stände mit Salzente, Tangbao, Spießen, Flusskrebsen und Süßem; abends am lebhaftesten.', 'Im Sommer Xiaolongxia-Flusskrebse probieren – Nanjing liebt sie.'],
      fr: ['Rue gourmande Shiziqiao', 'Une rue piétonne gourmande près de Hunan Road : des dizaines d’échoppes de canard salé, tangbao, brochettes, écrevisses et douceurs ; très animée le soir.', 'L’été, goûtez les écrevisses xiaolongxia : Nankin en raffole.'],
      it: ['Via del cibo Shiziqiao', 'Una via pedonale del cibo vicino a Hunan Road: decine di banchi con anatra salata, tangbao, spiedini, gamberi di fiume e dolci; più vivace la sera.', 'D’estate prova i gamberi di fiume xiaolongxia: Nanchino li adora.'],
    }, { price: level(1), menu: [
      ['Spicy crayfish (summer)', undefined, 'острые раки сяолунся (летом)|spicy crayfish (summer)|cangrejos de río picantes (verano)|scharfe Flusskrebse (Sommer)|écrevisses épicées (été)|gamberi di fiume piccanti (estate)'],
      ['Skewers', undefined, 'шашлычки|skewers|brochetas|Spieße|brochettes|spiedini'],
    ] }),
    P('laomendong-snacks', 'food', 32.0145, 118.7875, QINHUAI, 4.3, 8600, ['streetfood', 'oldtown'], {
      ru: ['Закуски квартала Лаомэньдун', 'Восстановленный старый квартал у ворот Чжунхуамэнь с серыми домами, лавками закусок, чаем и сладостями из клейкого риса.', 'Здесь спокойнее, чем у Фуцзымяо, — хорошее место для обеда.'],
      en: ['Laomendong snacks', 'A restored old quarter by Zhonghua Gate with grey houses, snack shops, tea and glutinous-rice sweets.', 'It’s calmer than Fuzimiao — a good place for lunch.'],
      es: ['Tentempiés de Laomendong', 'Un barrio antiguo restaurado junto a la puerta Zhonghua con casas grises, tiendas de tentempiés, té y dulces de arroz glutinoso.', 'Es más tranquilo que Fuzimiao: buen sitio para comer.'],
      de: ['Snacks in Laomendong', 'Ein restauriertes Altstadtviertel am Zhonghua-Tor mit grauen Häusern, Snackläden, Tee und Klebreis-Süßem.', 'Ruhiger als der Fuzimiao – ein guter Ort fürs Mittagessen.'],
      fr: ['En-cas de Laomendong', 'Un vieux quartier restauré près de la porte Zhonghua, maisons grises, échoppes d’en-cas, thé et douceurs au riz gluant.', 'Plus calme que le Fuzimiao : un bon endroit pour déjeuner.'],
      it: ['Snack di Laomendong', 'Un vecchio quartiere restaurato vicino a Porta Zhonghua con case grigie, botteghe di snack, tè e dolci di riso glutinoso.', 'È più tranquillo del Fuzimiao: un buon posto per pranzo.'],
    }, { price: level(1), menu: [
      ['Osmanthus rice cake', undefined, 'рисовые сладости с османтусом|osmanthus rice cake|pastel de arroz con osmanto|Osmanthus-Reiskuchen|gâteau de riz à l’osmanthe|dolce di riso all’osmanto'],
      ['Wonton soup', undefined, 'суп с вонтонами|wonton soup|sopa de wonton|Wan-Tan-Suppe|soupe de wontons|zuppa di wonton'],
    ] }),
    P('duck-oil-shaobing', 'food', 32.0205, 118.785, QINHUAI, 4.2, 3100, ['streetfood'], {
      ru: ['Лепёшки на утином жире', 'Слоёные лепёшки с кунжутом, которые пекут на утином жире, — любимый нанкинский перекус к супу с утиной кровью.', 'Берите прямо из печи — остывшие теряют хруст.'],
      en: ['Duck-fat sesame cakes', 'Flaky sesame cakes baked with duck fat — Nanjing’s favourite partner to duck blood soup.', 'Get them straight from the oven — they lose their crunch as they cool.'],
      es: ['Tortas de sésamo con grasa de pato', 'Tortas hojaldradas de sésamo horneadas con grasa de pato, la pareja favorita de la sopa de sangre de pato.', 'Cómpralas recién salidas del horno: frías pierden lo crujiente.'],
      de: ['Sesamfladen mit Entenschmalz', 'Blättrige Sesamfladen mit Entenfett gebacken – Nanjings liebste Beilage zur Entenblutsuppe.', 'Direkt aus dem Ofen nehmen – kalt verlieren sie ihre Knusprigkeit.'],
      fr: ['Galettes au sésame et graisse de canard', 'Des galettes feuilletées au sésame cuites à la graisse de canard, compagnes préférées de la soupe au sang de canard.', 'Prenez-les à la sortie du four : refroidies, elles perdent leur croustillant.'],
      it: ['Focaccine al sesamo con grasso d’anatra', 'Focaccine sfogliate al sesamo cotte con grasso d’anatra, le compagne preferite della zuppa di sangue d’anatra.', 'Prendile appena sfornate: fredde perdono la croccantezza.'],
    }, { price: level(1), menu: [
      ['Duck-oil shaobing', undefined, 'лепёшка на утином жире|duck-fat sesame cake|torta de sésamo con grasa de pato|Sesamfladen mit Entenschmalz|galette au sésame et graisse de canard|focaccina al sesamo con grasso d’anatra'],
      ['Sweet shaobing', undefined, 'сладкая лепёшка|sweet sesame cake|torta dulce de sésamo|süßer Sesamfladen|galette sucrée au sésame|focaccina dolce al sesamo'],
    ] }),
    P('gaochun-crab', 'food', 31.29, 118.92, LINGGU, 4.4, 2800, ['food', 'lakes'], {
      ru: ['Крабы озера Гучэн в Гаочуне', 'Район Гаочунь на юге Нанкина славится мохнаторукими крабами озера Гучэн; осенью здесь проходит крабовый фестиваль, а рестораны у озера подают крабов на пару.', 'Сезон — с конца сентября по ноябрь; вне его поездка того не стоит.'],
      en: ['Gucheng Lake crab in Gaochun', 'Gaochun district in southern Nanjing is famous for Gucheng Lake hairy crabs; an autumn crab festival is held here, and lakeside restaurants serve them steamed.', 'The season runs from late September to November; outside it the trip isn’t worth it.'],
      es: ['Cangrejo del lago Gucheng en Gaochun', 'El distrito de Gaochun, al sur de Nanjing, es famoso por el cangrejo peludo del lago Gucheng; en otoño hay festival y los restaurantes de la orilla lo sirven al vapor.', 'La temporada va de finales de septiembre a noviembre; fuera de ella no compensa.'],
      de: ['Wollhandkrabben vom Gucheng-See in Gaochun', 'Der Bezirk Gaochun im Süden Nanjings ist berühmt für Wollhandkrabben vom Gucheng-See; im Herbst gibt es ein Krabbenfest, Uferlokale servieren sie gedämpft.', 'Saison ist Ende September bis November; außerhalb lohnt sich die Fahrt nicht.'],
      fr: ['Crabe du lac Gucheng à Gaochun', 'Le district de Gaochun, au sud de Nankin, est réputé pour les crabes chinois du lac Gucheng ; une fête du crabe a lieu à l’automne et les restaurants du lac les servent vapeur.', 'La saison va de fin septembre à novembre ; hors saison, le trajet n’en vaut pas la peine.'],
      it: ['Granchio del lago Gucheng a Gaochun', 'Il distretto di Gaochun, a sud di Nanchino, è famoso per il granchio cinese del lago Gucheng; in autunno si tiene una festa del granchio e i ristoranti sul lago lo servono al vapore.', 'La stagione va da fine settembre a novembre; fuori stagione il viaggio non vale.'],
    }, { price: level(3), menu: [
      ['Steamed hairy crab', undefined, 'мохнаторукий краб на пару|steamed hairy crab|cangrejo peludo al vapor|gedämpfte Wollhandkrabbe|crabe chinois vapeur|granchio cinese al vapore'],
      ['Crab roe tofu', undefined, 'тофу с крабовой икрой|crab roe tofu|tofu con huevas de cangrejo|Tofu mit Krabbenrogen|tofu au corail de crabe|tofu con uova di granchio'],
    ] }),
  ],
  routes: [
    D(['tangbao', 'sun-yat-sen-mausoleum', 'linggu-temple', 'ming-xiaoling', 'meiling-palace', 'nanjing-museum', 'presidential-palace', 'lvliuju'],
      'Пурпурная гора: мавзолеи Сунь Ятсена и Мин Сяолин|Purple Mountain: the Sun Yat-sen and Ming Xiaoling mausoleums|La Montaña Púrpura: los mausoleos de Sun Yat-sen y Ming Xiaoling|Purpurberg: Sun-Yat-sen- und Ming-Xiaoling-Mausoleum|La Montagne pourpre : mausolées de Sun Yat-sen et Ming Xiaoling|La Montagna Viola: i mausolei di Sun Yat-sen e Ming Xiaoling'),
    D(['duck-oil-shaobing', 'zhonghua-gate', 'laomendong-snacks', 'ganxi-mansion', 'qinhuai-confucius-temple', 'wan-qing-lou', 'nanjing-impressions'],
      'Городская стена, старый юг и огни Циньхуая|The city wall, the old south and the Qinhuai lights|La muralla, el viejo sur y las luces del Qinhuai|Stadtmauer, alter Süden und die Lichter des Qinhuai|Le rempart, le vieux sud et les lumières de la Qinhuai|Le mura, il vecchio sud e le luci del Qinhuai'),
    D(['massacre-memorial', 'duck-blood-soup', 'yihe-road', 'han-fuxing', 'yangtze-bridge', 'jiming-temple', 'xuanwu-lake', 'shiziqiao'],
      'Мемориал, Ихэлу, мост через Янцзы и озеро Сюаньу|The memorial, Yihe Road, the Yangtze Bridge and Xuanwu Lake|El memorial, Yihe Road, el puente del Yangtsé y el lago Xuanwu|Gedenkhalle, Yihe Road, Jangtsebrücke und Xuanwu-See|Le mémorial, Yihe Road, le pont du Yangtsé et le lac Xuanwu|Il memoriale, Yihe Road, il ponte sullo Yangtze e il lago Xuanwu'),
  ],
};

export default pack;
