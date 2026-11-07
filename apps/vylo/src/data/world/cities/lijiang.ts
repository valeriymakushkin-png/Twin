import type { CityPack } from '../types';
import { free, level, makeDay, makePlace } from './_kit.ts';

const P = makePlace('lijiang');
const D = makeDay('lijiang');
const PAGODA = 'VHw-2w8zPFY';
const LAKE = 'tu11CNXjE94';
const PILLARS = 'y6-8_sxnYw4';
const BLUE = '5p8eqgVIwcQ';
const YULONG = 'hRe0XzM4Pgk';
const STREET = '-qPjPOWVah0';

const pack: CityPack = {
  country: 'CN',
  city: 'lijiang',
  places: [
    P('old-town', 'attraction', 26.8716, 100.2336, STREET, 4.4, 38000, ['oldtown', 'unesco', 'culture'], {
      ru: ['Старый город Даянь', 'Город народа наси (ЮНЕСКО, 1997) из черепичных крыш, каменных мостиков и каналов, по которым бежит вода из Озера Чёрного дракона. Стены у города нет: по легенде, иероглиф рода правителей Му в рамке превратился бы в «ловушку».', 'Утром до 9 улицы пустые — лучшее время для прогулки и фото.'],
      en: ['Dayan Old Town', 'A Naxi town (UNESCO, 1997) of tiled roofs, stone bridges and canals fed by Black Dragon Pool. It has no wall: legend says the ruling Mu family’s character inside a frame would become “trapped”.', 'Before 9 am the streets are empty — the best time to walk and shoot.'],
      es: ['Ciudad vieja de Dayan', 'Una ciudad naxi (UNESCO, 1997) de tejados, puentes de piedra y canales alimentados por el Estanque del Dragón Negro. No tiene muralla: según la leyenda, el carácter de la familia Mu dentro de un marco significaría «atrapado».', 'Antes de las 9 las calles están vacías: el mejor momento para pasear y fotografiar.'],
      de: ['Altstadt Dayan', 'Eine Naxi-Stadt (UNESCO, 1997) mit Ziegeldächern, Steinbrücken und Kanälen aus dem Schwarzer-Drachen-Teich. Eine Mauer gibt es nicht: Das Zeichen der Herrscherfamilie Mu im Rahmen hieße der Legende nach „gefangen“.', 'Vor 9 Uhr sind die Gassen leer – die beste Zeit zum Bummeln und Fotografieren.'],
      fr: ['Vieille ville de Dayan', 'Une ville naxi (UNESCO, 1997) de toits de tuiles, ponts de pierre et canaux alimentés par l’étang du Dragon noir. Pas de rempart : selon la légende, le caractère des Mu dans un cadre signifierait « piégé ».', 'Avant 9 h, les rues sont vides : le meilleur moment pour flâner et photographier.'],
      it: ['Città vecchia di Dayan', 'Una città naxi (UNESCO, 1997) di tetti in tegole, ponti di pietra e canali alimentati dallo Stagno del Drago Nero. Non ha mura: secondo la leggenda, il carattere della famiglia Mu dentro una cornice diventerebbe «intrappolato».', 'Prima delle 9 le vie sono vuote: il momento migliore per camminare e fotografare.'],
    }, { spot: 'insta', price: free }),
    P('black-dragon-pool', 'nature', 26.884, 100.233, PILLARS, 4.6, 21000, ['gardens', 'views', 'photo'], {
      ru: ['Озеро Чёрного дракона', 'Парк у родника с павильоном Дэюэлоу и мраморным мостом, за которыми в ясный день встаёт заснеженная гора Юйлун, — главная открытка Лицзяна.', 'Ясное утро даёт лучший шанс увидеть гору без облаков.'],
      en: ['Black Dragon Pool', 'A spring-fed park with the Deyue Pavilion and a marble bridge, backed on clear days by snowy Jade Dragon Mountain — Lijiang’s classic postcard.', 'A clear morning gives the best chance of a cloud-free mountain.'],
      es: ['Estanque del Dragón Negro', 'Un parque junto a un manantial con el pabellón Deyue y un puente de mármol, con la nevada montaña del Dragón de Jade detrás en días claros: la postal de Lijiang.', 'Una mañana despejada da la mejor ocasión de ver la montaña sin nubes.'],
      de: ['Schwarzer-Drachen-Teich', 'Ein Quellpark mit dem Deyue-Pavillon und einer Marmorbrücke, an klaren Tagen vor dem verschneiten Jadedrachenberg – Lijiangs klassische Postkarte.', 'Ein klarer Morgen bietet die besten Chancen auf einen wolkenfreien Berg.'],
      fr: ['Étang du Dragon noir', 'Un parc autour d’une source avec le pavillon Deyue et un pont de marbre, devant la montagne enneigée du Dragon de jade par temps clair : la carte postale de Lijiang.', 'Un matin dégagé offre la meilleure chance de voir la montagne sans nuages.'],
      it: ['Stagno del Drago Nero', 'Un parco attorno a una sorgente con il padiglione Deyue e un ponte di marmo, davanti alla montagna innevata del Drago di Giada nei giorni limpidi: la cartolina di Lijiang.', 'Una mattina limpida dà la migliore occasione di vedere la montagna senza nuvole.'],
    }, { spot: 'insta' }),
    P('wangu-tower', 'attraction', 26.8705, 100.2295, PAGODA, 4.4, 9600, ['views', 'architecture'], {
      ru: ['Башня Вангу на Львиной горке', 'Деревянная башня высотой 33 м над старым городом: сверху — море черепичных крыш и гора Юйлун на горизонте.', 'Приходите на закате, когда крыши становятся медными.'],
      en: ['Wangu Tower on Lion Hill', 'A 33 m wooden tower above the old town: from the top, a sea of tiled roofs and Jade Dragon Mountain on the horizon.', 'Come at sunset, when the roofs turn copper.'],
      es: ['Torre Wangu en la Colina del León', 'Una torre de madera de 33 m sobre la ciudad vieja: desde arriba, un mar de tejados y la montaña del Dragón de Jade al fondo.', 'Ve al atardecer, cuando los tejados se vuelven cobrizos.'],
      de: ['Wangu-Turm auf dem Löwenhügel', 'Ein 33 m hoher Holzturm über der Altstadt: oben ein Meer aus Ziegeldächern und der Jadedrachenberg am Horizont.', 'Zum Sonnenuntergang kommen, wenn die Dächer kupfern leuchten.'],
      fr: ['Tour Wangu sur la colline du Lion', 'Une tour de bois de 33 m au-dessus de la vieille ville : en haut, une mer de toits et la montagne du Dragon de jade à l’horizon.', 'Venez au coucher du soleil, quand les toits deviennent cuivrés.'],
      it: ['Torre Wangu sulla Collina del Leone', 'Una torre di legno di 33 m sopra la città vecchia: dall’alto un mare di tetti e la montagna del Drago di Giada all’orizzonte.', 'Vieni al tramonto, quando i tetti diventano ramati.'],
    }, { spot: 'insta', price: level(1) }),
    P('mu-mansion', 'attraction', 26.869, 100.2345, STREET, 4.3, 11000, ['history', 'architecture'], {
      ru: ['Резиденция Му', 'Дворец правителей Му, которые управляли Лицзяном несколько веков — от династии Юань до Цин; восстановлен после землетрясения 1996 года.', 'Пройдите сквозной путь до задних павильонов на склоне — оттуда вид на старый город.'],
      en: ['Mu Mansion', 'The palace of the Mu chieftains, who ruled Lijiang for centuries from the Yuan to the Qing dynasty; rebuilt after the 1996 earthquake.', 'Walk through to the rear pavilions on the slope — they overlook the old town.'],
      es: ['Mansión Mu', 'El palacio de los jefes Mu, que gobernaron Lijiang durante siglos, de la dinastía Yuan a la Qing; reconstruido tras el terremoto de 1996.', 'Atraviésalo hasta los pabellones traseros de la ladera: dominan la ciudad vieja.'],
      de: ['Mu-Residenz', 'Der Palast der Mu-Fürsten, die Lijiang jahrhundertelang von der Yuan- bis zur Qing-Zeit regierten; nach dem Erdbeben 1996 wiederaufgebaut.', 'Bis zu den hinteren Pavillons am Hang gehen – sie überblicken die Altstadt.'],
      fr: ['Résidence des Mu', 'Le palais des chefs Mu, qui gouvernèrent Lijiang pendant des siècles, des Yuan aux Qing ; reconstruit après le séisme de 1996.', 'Traversez jusqu’aux pavillons du fond sur la pente : ils dominent la vieille ville.'],
      it: ['Residenza Mu', 'Il palazzo dei capi Mu, che governarono Lijiang per secoli, dalla dinastia Yuan alla Qing; ricostruito dopo il terremoto del 1996.', 'Attraversalo fino ai padiglioni sul pendio: dominano la città vecchia.'],
    }, { price: level(2) }),
    P('jade-dragon-snow-mountain', 'nature', 27.105, 100.198, YULONG, 4.6, 26000, ['mountains', 'views', 'adventure'], {
      ru: ['Снежная гора Юйлун', 'Цепь из 13 вершин высотой до 5596 м в 30 км от города; канатная дорога поднимает в ледниковый парк на 4506 м.', 'Высота серьёзная: двигайтесь медленно, кислородные баллоны продают внизу. Билеты на канатку ограничены — бронируйте заранее.'],
      en: ['Jade Dragon Snow Mountain', 'A range of 13 peaks up to 5,596 m, 30 km from town; a cable car lifts you to the glacier park at 4,506 m.', 'The altitude is serious: move slowly, oxygen canisters are sold below. Cable-car tickets are limited — book ahead.'],
      es: ['Montaña Nevada del Dragón de Jade', 'Una cadena de 13 picos de hasta 5596 m a 30 km de la ciudad; un teleférico sube al parque glaciar a 4506 m.', 'La altitud es seria: muévete despacio, abajo venden oxígeno. Los billetes del teleférico son limitados: reserva.'],
      de: ['Jadedrachen-Schneeberg', 'Eine Kette aus 13 Gipfeln bis 5596 m, 30 km von der Stadt; eine Seilbahn bringt Sie zum Gletscherpark auf 4506 m.', 'Die Höhe ist ernst: langsam bewegen, unten gibt es Sauerstoffdosen. Seilbahntickets sind begrenzt – vorab buchen.'],
      fr: ['Montagne enneigée du Dragon de jade', 'Une chaîne de 13 sommets culminant à 5 596 m, à 30 km de la ville ; un téléphérique monte au parc du glacier à 4 506 m.', 'L’altitude est sérieuse : bougez lentement, on vend de l’oxygène en bas. Les billets du téléphérique sont limités : réservez.'],
      it: ['Montagna innevata del Drago di Giada', 'Una catena di 13 cime fino a 5596 m, a 30 km dalla città; una funivia porta al parco del ghiacciaio a 4506 m.', 'L’altitudine è seria: muoviti piano, in basso vendono ossigeno. I biglietti della funivia sono limitati: prenota.'],
    }, { spot: 'insta', price: level(3) }),
    P('blue-moon-valley', 'nature', 27.074, 100.232, BLUE, 4.7, 19000, ['lakes', 'nature', 'photo'], {
      ru: ['Долина Голубой луны', 'Каскад бирюзовых озёр из ледниковой воды у подножия горы Юйлун; в солнечный день вода светится голубым.', 'Цвет ярче всего в солнечный полдень; в облачную погоду вода темнее.'],
      en: ['Blue Moon Valley', 'A cascade of turquoise lakes of glacier water at the foot of Jade Dragon Mountain; on a sunny day the water glows blue.', 'The colour is brightest at sunny midday; under cloud the water looks darker.'],
      es: ['Valle de la Luna Azul', 'Una cascada de lagos turquesa de agua glaciar al pie de la montaña del Dragón de Jade; con sol, el agua brilla azul.', 'El color es más intenso a mediodía con sol; nublado, el agua se ve más oscura.'],
      de: ['Blaumondtal', 'Eine Kaskade türkiser Seen aus Gletscherwasser am Fuß des Jadedrachenbergs; bei Sonne leuchtet das Wasser blau.', 'Am kräftigsten ist die Farbe mittags bei Sonne; bei Wolken wirkt das Wasser dunkler.'],
      fr: ['Vallée de la Lune bleue', 'Une cascade de lacs turquoise d’eau glaciaire au pied de la montagne du Dragon de jade ; au soleil, l’eau brille de bleu.', 'La couleur est la plus vive à midi par soleil ; sous les nuages, l’eau paraît plus sombre.'],
      it: ['Valle della Luna Blu', 'Una cascata di laghi turchesi d’acqua glaciale ai piedi della montagna del Drago di Giada; col sole l’acqua brilla di blu.', 'Il colore è più vivo a mezzogiorno col sole; con le nuvole l’acqua sembra più scura.'],
    }, { spot: 'insta', price: level(1) }),
    P('impression-lijiang', 'attraction', 27.059, 100.242, YULONG, 4.6, 8900, ['culture', 'mountains'], {
      ru: ['Шоу «Впечатление Лицзяна»', 'Дневное шоу Чжан Имоу на открытой сцене на высоте около 3100 м: сотни местных жителей разных народностей поют и скачут на конях на фоне снежной горы.', 'Шоу идёт днём под открытым небом — возьмите очки, крем и тёплую куртку.'],
      en: ['Impression Lijiang show', 'Zhang Yimou’s daytime show on an open-air stage at about 3,100 m: hundreds of locals of different ethnic groups sing and ride horses against the snowy peak.', 'It runs in the daytime outdoors — bring sunglasses, sunscreen and a warm jacket.'],
      es: ['Espectáculo Impression Lijiang', 'El espectáculo diurno de Zhang Yimou en un escenario al aire libre a unos 3100 m: cientos de vecinos de varias etnias cantan y montan a caballo ante el pico nevado.', 'Es de día y al aire libre: lleva gafas, crema y una chaqueta.'],
      de: ['Show „Impression Lijiang“', 'Zhang Yimous Tagesshow auf einer Freilichtbühne auf etwa 3100 m: Hunderte Einheimische verschiedener Volksgruppen singen und reiten vor dem Schneegipfel.', 'Sie läuft tagsüber im Freien – Sonnenbrille, Sonnencreme und warme Jacke mitnehmen.'],
      fr: ['Spectacle Impression Lijiang', 'Le spectacle de jour de Zhang Yimou sur une scène en plein air vers 3 100 m : des centaines d’habitants de diverses ethnies chantent et chevauchent devant le pic enneigé.', 'C’est en plein jour et en plein air : lunettes, crème solaire et veste chaude.'],
      it: ['Spettacolo Impression Lijiang', 'Lo spettacolo diurno di Zhang Yimou su un palco all’aperto a circa 3100 m: centinaia di abitanti di diverse etnie cantano e cavalcano davanti alla vetta innevata.', 'È di giorno e all’aperto: porta occhiali, crema solare e una giacca calda.'],
    }, { price: level(3) }),
    P('baisha', 'attraction', 26.9465, 100.2055, STREET, 4.4, 6100, ['oldtown', 'art', 'history'], {
      ru: ['Деревня Байша', 'Старая столица правителей Му до переезда в Даянь: тихие улицы и фрески эпохи Мин, где смешаны буддийские, даосские и тибетские сюжеты.', 'Здесь можно взять напрокат велосипед и доехать до Шухэ по полям.'],
      en: ['Baisha Village', 'The Mu rulers’ old seat before they moved to Dayan: quiet streets and Ming-era murals mixing Buddhist, Taoist and Tibetan themes.', 'Rent a bike here and ride through the fields to Shuhe.'],
      es: ['Aldea de Baisha', 'La antigua sede de los Mu antes de mudarse a Dayan: calles tranquilas y murales Ming que mezclan temas budistas, taoístas y tibetanos.', 'Alquila una bici y ve a Shuhe entre campos.'],
      de: ['Dorf Baisha', 'Der alte Sitz der Mu vor dem Umzug nach Dayan: ruhige Gassen und Wandmalereien der Ming-Zeit mit buddhistischen, daoistischen und tibetischen Motiven.', 'Hier ein Fahrrad leihen und durch die Felder nach Shuhe fahren.'],
      fr: ['Village de Baisha', 'L’ancien siège des Mu avant leur installation à Dayan : rues paisibles et fresques Ming mêlant thèmes bouddhistes, taoïstes et tibétains.', 'Louez un vélo ici et rejoignez Shuhe à travers champs.'],
      it: ['Villaggio di Baisha', 'L’antica sede dei Mu prima del trasferimento a Dayan: vie tranquille e affreschi Ming che mescolano temi buddhisti, taoisti e tibetani.', 'Noleggia una bici e pedala tra i campi fino a Shuhe.'],
    }, { spot: 'hidden', price: level(1) }),
    P('shuhe', 'attraction', 26.922, 100.208, LAKE, 4.4, 14000, ['oldtown', 'culture'], {
      ru: ['Старый город Шухэ', 'Одно из древнейших поселений наси на Чайно-лошадином пути, спокойнее Даяня: ручьи, мост Цинлун эпохи Мин и дворы-гостевые дома.', 'Вечером здесь тише и уютнее, чем в Даяне, — хорошо для ужина.'],
      en: ['Shuhe Old Town', 'One of the oldest Naxi settlements on the Tea Horse Road and calmer than Dayan: streams, the Ming-era Qinglong Bridge and courtyard guesthouses.', 'Evenings here are quieter and cosier than in Dayan — good for dinner.'],
      es: ['Ciudad vieja de Shuhe', 'Uno de los asentamientos naxi más antiguos del Camino del Té y los Caballos, más tranquilo que Dayan: arroyos, el puente Qinglong de época Ming y casas de huéspedes con patio.', 'De noche es más tranquilo y acogedor que Dayan: bueno para cenar.'],
      de: ['Altstadt Shuhe', 'Eine der ältesten Naxi-Siedlungen an der Tee-Pferde-Straße, ruhiger als Dayan: Bäche, die Qinglong-Brücke aus der Ming-Zeit und Hofpensionen.', 'Abends ruhiger und gemütlicher als Dayan – gut zum Abendessen.'],
      fr: ['Vieille ville de Shuhe', 'L’un des plus anciens villages naxi de la route du Thé et des Chevaux, plus calme que Dayan : ruisseaux, pont Qinglong d’époque Ming et maisons d’hôtes à cour.', 'Le soir, plus calme et chaleureux que Dayan : idéal pour dîner.'],
      it: ['Città vecchia di Shuhe', 'Uno dei più antichi insediamenti naxi sulla Via del Tè e dei Cavalli, più tranquillo di Dayan: ruscelli, il ponte Qinglong di epoca Ming e pensioni a corte.', 'La sera è più quieta e accogliente di Dayan: ottima per cena.'],
    }, { price: free }),
    P('tiger-leaping-gorge', 'nature', 27.187, 100.095, LAKE, 4.7, 9800, ['canyon', 'hiking', 'adventure'], {
      ru: ['Ущелье Прыгающего тигра', 'Река Цзиньша прорывается между хребтами Юйлун и Хаба — одно из глубочайших ущелий мира; по легенде, тигр перепрыгнул его по камню в самом узком месте.', 'Верхняя тропа — 2 дня с ночёвкой в гостевом доме; на смотровую у камня можно доехать за день из Лицзяна.'],
      en: ['Tiger Leaping Gorge', 'The Jinsha River bursts between the Jade Dragon and Haba ranges — one of the world’s deepest gorges; legend says a tiger leapt it via a rock at the narrowest point.', 'The High Trail takes 2 days with a guesthouse night; the rock viewpoint is a day trip from Lijiang.'],
      es: ['Garganta del Salto del Tigre', 'El río Jinsha irrumpe entre las cordilleras del Dragón de Jade y Haba, una de las gargantas más profundas del mundo; la leyenda dice que un tigre la saltó por una roca en el punto más estrecho.', 'El sendero alto lleva 2 días con noche en casa de huéspedes; el mirador de la roca es excursión de un día.'],
      de: ['Tigersprungschlucht', 'Der Jinsha bricht zwischen Jadedrachen- und Haba-Massiv hindurch – eine der tiefsten Schluchten der Welt; der Legende nach sprang ein Tiger an der engsten Stelle über einen Felsen.', 'Der High Trail dauert 2 Tage mit Übernachtung; der Felsaussichtspunkt ist ein Tagesausflug.'],
      fr: ['Gorges du Saut du tigre', 'Le Jinsha se fraie un passage entre les massifs du Dragon de jade et de Haba, l’une des gorges les plus profondes du monde ; la légende dit qu’un tigre l’a franchie d’un bond via un rocher.', 'Le sentier haut se fait en 2 jours avec nuit en maison d’hôtes ; le belvédère du rocher, en excursion d’une journée.'],
      it: ['Gola del Salto della Tigre', 'Il fiume Jinsha irrompe tra i massicci del Drago di Giada e di Haba, una delle gole più profonde del mondo; la leggenda dice che una tigre la saltò su una roccia nel punto più stretto.', 'Il sentiero alto richiede 2 giorni con notte in pensione; il belvedere della roccia è una gita di un giorno.'],
    }, { spot: 'insta', price: level(2) }),
    P('lashi-lake', 'nature', 26.88, 100.135, LAKE, 4.2, 5200, ['lakes', 'wildlife', 'nature'], {
      ru: ['Озеро Лашихай', 'Горное озеро-заповедник к западу от города: прогулки на лодках, конные тропы по старому Чайно-лошадиному пути, зимой — перелётные птицы.', 'С октября по март на озере зимуют тысячи птиц — возьмите бинокль.'],
      en: ['Lashi Lake', 'A protected highland lake west of town: boat trips, horse trails along the old Tea Horse Road and migratory birds in winter.', 'From October to March thousands of birds winter here — bring binoculars.'],
      es: ['Lago Lashi', 'Un lago de montaña protegido al oeste de la ciudad: paseos en barca, rutas a caballo por el antiguo Camino del Té y los Caballos y aves migratorias en invierno.', 'De octubre a marzo invernan aquí miles de aves: lleva prismáticos.'],
      de: ['Lashi-See', 'Ein geschützter Hochlandsee westlich der Stadt: Bootsfahrten, Reitwege auf der alten Tee-Pferde-Straße und im Winter Zugvögel.', 'Von Oktober bis März überwintern hier Tausende Vögel – ein Fernglas mitnehmen.'],
      fr: ['Lac Lashi', 'Un lac de montagne protégé à l’ouest de la ville : balades en barque, sentiers à cheval sur l’ancienne route du Thé et des Chevaux, oiseaux migrateurs en hiver.', 'D’octobre à mars, des milliers d’oiseaux hivernent ici : prenez des jumelles.'],
      it: ['Lago Lashi', 'Un lago d’altura protetto a ovest della città: giri in barca, sentieri a cavallo sull’antica Via del Tè e dei Cavalli e uccelli migratori d’inverno.', 'Da ottobre a marzo qui svernano migliaia di uccelli: porta il binocolo.'],
    }, { price: level(2) }),
    P('yuhu-village', 'attraction', 27.004, 100.213, YULONG, 4.4, 2600, ['culture', 'history', 'mountains'], {
      ru: ['Деревня Юйху', 'Каменная деревня наси у подножия горы Юйлун, где в 1920–40-е годы жил исследователь и ботаник Джозеф Рок; его дом теперь музей.', 'От деревни открывается один из лучших видов на гору без толп.'],
      en: ['Yuhu Village', 'A stone Naxi village at the foot of Jade Dragon Mountain where explorer-botanist Joseph Rock lived in the 1920s–40s; his house is now a museum.', 'The village has one of the best crowd-free views of the mountain.'],
      es: ['Aldea de Yuhu', 'Una aldea naxi de piedra al pie de la montaña del Dragón de Jade donde vivió en los años 1920–40 el explorador y botánico Joseph Rock; su casa es hoy museo.', 'Desde la aldea hay una de las mejores vistas de la montaña sin gente.'],
      de: ['Dorf Yuhu', 'Ein steinernes Naxi-Dorf am Fuß des Jadedrachenbergs, in dem Forscher und Botaniker Joseph Rock in den 1920er–40er Jahren lebte; sein Haus ist heute ein Museum.', 'Vom Dorf hat man einen der besten Bergblicke ohne Gedränge.'],
      fr: ['Village de Yuhu', 'Un village naxi de pierre au pied de la montagne du Dragon de jade où vécut dans les années 1920–40 l’explorateur-botaniste Joseph Rock ; sa maison est un musée.', 'Le village offre l’une des plus belles vues sur la montagne, sans foule.'],
      it: ['Villaggio di Yuhu', 'Un villaggio naxi di pietra ai piedi della montagna del Drago di Giada dove visse negli anni 1920–40 l’esploratore e botanico Joseph Rock; la sua casa è oggi un museo.', 'Dal villaggio c’è una delle migliori viste sulla montagna, senza folla.'],
    }, { spot: 'hidden', price: level(1) }),
    P('a-ma-yi', 'food', 26.8728, 100.236, STREET, 4.4, 4800, ['food', 'culture'], {
      ru: ['Амаи — кухня наси', 'Один из старейших ресторанов Лицзяна в тихом переулке старого города: вяленые рёбрышки, жареная рыба по-насийски и дикие грибы.', 'Сюда идут ради настоящей кухни наси, а не баров — садитесь во дворике.'],
      en: ['Amayi Naxi Restaurant', 'One of Lijiang’s oldest restaurants, in a quiet old-town lane: dried spare ribs, Naxi-style roast fish and wild mushrooms.', 'Come for real Naxi cooking rather than bars — sit in the courtyard.'],
      es: ['Amayi, cocina naxi', 'Uno de los restaurantes más antiguos de Lijiang, en una calleja tranquila: costillas curadas, pescado asado al estilo naxi y setas silvestres.', 'Ven por la auténtica cocina naxi, no por los bares: siéntate en el patio.'],
      de: ['Amayi – Naxi-Küche', 'Eines der ältesten Restaurants Lijiangs in einer ruhigen Altstadtgasse: getrocknete Rippchen, gebratener Fisch nach Naxi-Art und Wildpilze.', 'Hier geht es um echte Naxi-Küche statt Bars – im Hof sitzen.'],
      fr: ['Amayi, cuisine naxi', 'L’un des plus anciens restaurants de Lijiang, dans une ruelle calme : travers séchés, poisson grillé à la naxi et champignons sauvages.', 'On vient pour la vraie cuisine naxi plutôt que les bars : asseyez-vous dans la cour.'],
      it: ['Amayi, cucina naxi', 'Uno dei ristoranti più antichi di Lijiang, in un vicolo tranquillo: costine essiccate, pesce arrosto alla naxi e funghi selvatici.', 'Si viene per la vera cucina naxi, non per i bar: siediti nel cortile.'],
    }, { price: level(2), menu: [
      ['Dried spare ribs', undefined, 'вяленые свиные рёбрышки|dried pork spare ribs|costillas de cerdo curadas|getrocknete Schweinerippchen|travers de porc séchés|costine di maiale essiccate'],
      ['Naxi roast fish', undefined, 'жареная рыба по-насийски|Naxi-style roast fish|pescado asado naxi|gebratener Fisch nach Naxi-Art|poisson grillé à la naxi|pesce arrosto alla naxi'],
      ['Wild mushrooms', undefined, 'дикие грибы|wild mushrooms|setas silvestres|Wildpilze|champignons sauvages|funghi selvatici'],
    ] }),
    P('a-po-rib-hotpot', 'food', 26.8705, 100.2365, PAGODA, 4.5, 3700, ['food'], {
      ru: ['Ах По — хого из вяленых рёбер', 'Хого из вяленых свиных рёбер — главное блюдо Лицзяна; это заведение в старом городе на переулке Чжэньсин хорошо оценивают на Trip.com.', 'Сначала едят рёбра, потом в бульон бросают овощи и картофель.'],
      en: ['Ah Po cured rib hotpot', 'Cured pork rib hotpot is Lijiang’s signature dish; this old-town place on Zhenxing Lane is well rated on Trip.com.', 'Eat the ribs first, then drop vegetables and potatoes into the broth.'],
      es: ['Ah Po, hotpot de costillas curadas', 'El hotpot de costillas de cerdo curadas es el plato de Lijiang; este local de la ciudad vieja en la calleja Zhenxing está bien valorado en Trip.com.', 'Primero las costillas, después verduras y patatas al caldo.'],
      de: ['Ah Po – Hotpot mit gepökelten Rippchen', 'Hotpot mit gepökelten Schweinerippchen ist Lijiangs Spezialität; dieses Altstadtlokal in der Zhenxing-Gasse ist auf Trip.com gut bewertet.', 'Erst die Rippchen essen, dann Gemüse und Kartoffeln in die Brühe geben.'],
      fr: ['Ah Po, fondue aux travers salés', 'La fondue aux travers de porc salés est le plat de Lijiang ; cette adresse de la vieille ville, ruelle Zhenxing, est bien notée sur Trip.com.', 'Mangez d’abord les travers, puis ajoutez légumes et pommes de terre au bouillon.'],
      it: ['Ah Po, hotpot di costine salate', 'L’hotpot di costine di maiale salate è il piatto di Lijiang; questo locale della città vecchia nel vicolo Zhenxing è ben recensito su Trip.com.', 'Prima le costine, poi verdure e patate nel brodo.'],
    }, { price: level(2), menu: [
      ['Cured pork rib hotpot', undefined, 'хого из вяленых свиных рёбер|cured pork rib hotpot|hotpot de costillas curadas|Hotpot mit gepökelten Rippchen|fondue aux travers salés|hotpot di costine salate'],
      ['Potatoes and greens', undefined, 'картофель и зелень в бульон|potatoes and greens for the broth|patatas y verduras para el caldo|Kartoffeln und Grünzeug für die Brühe|pommes de terre et verdure pour le bouillon|patate e verdure per il brodo'],
    ] }),
    P('naxi-baba', 'food', 26.872, 100.233, STREET, 4.2, 6200, ['streetfood'], {
      ru: ['Насийская баба', 'Слоёная лепёшка наси, обжаренная до хруста, — сладкая с мёдом или солёная с ветчиной; продаётся на каждом углу старого города.', 'Берите прямо со сковороды, пока горячая и хрустит.'],
      en: ['Naxi baba', 'The Naxi layered flatbread fried until crisp — sweet with honey or savoury with ham; sold on every corner of the old town.', 'Get it straight off the pan, hot and crunchy.'],
      es: ['Baba naxi', 'El pan plano hojaldrado naxi frito hasta crujir, dulce con miel o salado con jamón; se vende en cada esquina de la ciudad vieja.', 'Cómpralo recién salido de la sartén, caliente y crujiente.'],
      de: ['Naxi Baba', 'Das geschichtete Fladenbrot der Naxi, knusprig gebraten – süß mit Honig oder herzhaft mit Schinken; an jeder Ecke der Altstadt.', 'Direkt aus der Pfanne nehmen, heiß und knusprig.'],
      fr: ['Baba naxi', 'La galette feuilletée naxi frite jusqu’à être croustillante, sucrée au miel ou salée au jambon ; vendue à chaque coin de la vieille ville.', 'Prenez-la à la sortie de la poêle, chaude et croustillante.'],
      it: ['Baba naxi', 'La focaccia sfogliata naxi fritta fino a diventare croccante, dolce col miele o salata col prosciutto; si vende a ogni angolo della città vecchia.', 'Prendila appena tolta dalla padella, calda e croccante.'],
    }, { price: level(1), menu: [
      ['Sweet baba', undefined, 'сладкая баба с мёдом|sweet baba with honey|baba dulce con miel|süßes Baba mit Honig|baba sucré au miel|baba dolce al miele'],
      ['Ham baba', undefined, 'солёная баба с юньнаньской ветчиной|savoury baba with Yunnan ham|baba salado con jamón de Yunnan|herzhaftes Baba mit Yunnan-Schinken|baba salé au jambon du Yunnan|baba salato con prosciutto dello Yunnan'],
    ] }),
    P('chicken-pea-jelly', 'food', 26.8712, 100.2342, STREET, 4.1, 2800, ['streetfood'], {
      ru: ['Цзидоу ляньфэнь', 'Местное желе из бобов цзидоу: летом его едят холодным с острой заправкой, зимой — обжаренным кусочками.', 'Летом берите холодное — освежает после прогулки по жаре.'],
      en: ['Jidou liangfen (bean jelly)', 'A local jelly made from jidou beans: eaten cold with a spicy dressing in summer and pan-fried in cubes in winter.', 'In summer take the cold version — refreshing after a hot walk.'],
      es: ['Jidou liangfen (gelatina de judía)', 'Una gelatina local de judías jidou: fría con aliño picante en verano y frita en dados en invierno.', 'En verano, la fría: refresca tras un paseo con calor.'],
      de: ['Jidou Liangfen (Bohnengelee)', 'Ein lokales Gelee aus Jidou-Bohnen: im Sommer kalt mit scharfem Dressing, im Winter in Würfeln gebraten.', 'Im Sommer die kalte Version – erfrischend nach einem heißen Spaziergang.'],
      fr: ['Jidou liangfen (gelée de haricot)', 'Une gelée locale de haricots jidou : froide avec une sauce épicée l’été, poêlée en dés l’hiver.', 'L’été, prenez la version froide : rafraîchissante après une balade.'],
      it: ['Jidou liangfen (gelatina di fagioli)', 'Una gelatina locale di fagioli jidou: fredda con condimento piccante d’estate e saltata a cubetti d’inverno.', 'D’estate prendi quella fredda: rinfresca dopo una passeggiata al caldo.'],
    }, { price: level(1), menu: [
      ['Cold bean jelly', undefined, 'холодное желе с острой заправкой|cold jelly with spicy dressing|gelatina fría con aliño picante|kaltes Gelee mit scharfem Dressing|gelée froide sauce épicée|gelatina fredda con condimento piccante'],
      ['Fried bean jelly', undefined, 'обжаренное желе кусочками|pan-fried jelly cubes|dados de gelatina fritos|gebratene Geleewürfel|dés de gelée poêlés|cubetti di gelatina saltati'],
    ] }),
    P('zhongyi-market', 'food', 26.869, 100.2385, PAGODA, 4.3, 3100, ['market', 'food', 'streetfood'], {
      ru: ['Рынок Чжунъи', 'Настоящий городской рынок рядом со старым городом: горы грибов, овощи, специи, свежая баба и простые закусочные.', 'Утром выбор больше всего; летом здесь продают дикие грибы.'],
      en: ['Zhongyi Market', 'A real city market next to the old town: mounds of mushrooms, vegetables, spices, fresh baba and simple eateries.', 'The choice is best in the morning; in summer wild mushrooms are on sale.'],
      es: ['Mercado Zhongyi', 'Un auténtico mercado junto a la ciudad vieja: montañas de setas, verduras, especias, baba recién hecho y comedores sencillos.', 'Por la mañana hay más variedad; en verano venden setas silvestres.'],
      de: ['Zhongyi-Markt', 'Ein echter Stadtmarkt neben der Altstadt: Berge von Pilzen, Gemüse, Gewürze, frisches Baba und einfache Garküchen.', 'Morgens ist die Auswahl am größten; im Sommer gibt es Wildpilze.'],
      fr: ['Marché Zhongyi', 'Un vrai marché à côté de la vieille ville : montagnes de champignons, légumes, épices, baba frais et cantines simples.', 'Le choix est meilleur le matin ; l’été, on y vend des champignons sauvages.'],
      it: ['Mercato Zhongyi', 'Un vero mercato cittadino accanto alla città vecchia: montagne di funghi, verdure, spezie, baba fresco e semplici trattorie.', 'Al mattino la scelta è migliore; d’estate si vendono funghi selvatici.'],
    }, { spot: 'hidden', price: level(1), menu: [
      ['Market snacks', undefined, 'простые закуски рынка|simple market snacks|tentempiés del mercado|einfache Marktsnacks|en-cas du marché|snack del mercato'],
      ['Fresh baba', undefined, 'свежая баба|fresh baba|baba recién hecho|frisches Baba|baba frais|baba fresco'],
    ] }),
    P('yak-hotpot', 'food', 26.8745, 100.237, YULONG, 4.2, 2400, ['food'], {
      ru: ['Хого из мяса яка', 'В Лицзяне много ресторанов хого из мяса яка — нежирного и ароматного мяса горных пастбищ; бульон обычно мягкий, не острый.', 'После дня в горах сытный горячий бульон — то, что нужно.'],
      en: ['Yak meat hotpot', 'Lijiang has plenty of yak hotpot restaurants — lean, flavourful meat from high pastures; the broth is usually mild, not spicy.', 'After a day in the mountains, a hearty hot broth is just right.'],
      es: ['Hotpot de carne de yak', 'En Lijiang abundan los restaurantes de hotpot de yak, carne magra y sabrosa de pastos altos; el caldo suele ser suave, no picante.', 'Tras un día en la montaña, un caldo caliente es lo ideal.'],
      de: ['Yakfleisch-Hotpot', 'In Lijiang gibt es viele Yak-Hotpot-Lokale – mageres, aromatisches Fleisch von Hochweiden; die Brühe ist meist mild, nicht scharf.', 'Nach einem Tag in den Bergen ist eine kräftige heiße Brühe genau richtig.'],
      fr: ['Fondue au yak', 'Lijiang compte beaucoup de restaurants de fondue au yak, viande maigre et parfumée des hauts pâturages ; le bouillon est en général doux, pas épicé.', 'Après une journée en montagne, un bouillon chaud tombe à pic.'],
      it: ['Hotpot di carne di yak', 'A Lijiang ci sono molti ristoranti di hotpot di yak, carne magra e saporita dei pascoli alti; il brodo è di solito delicato, non piccante.', 'Dopo una giornata in montagna, un brodo caldo è l’ideale.'],
    }, { price: level(2), menu: [
      ['Yak hotpot', undefined, 'хого с мясом яка|yak meat hotpot|hotpot de yak|Yak-Hotpot|fondue au yak|hotpot di yak'],
      ['Yunnan greens', undefined, 'юньнаньская зелень|Yunnan greens|verduras de Yunnan|Yunnan-Grünzeug|légumes du Yunnan|verdure dello Yunnan'],
    ] }),
    P('wild-mushroom-hotpot', 'food', 26.876, 100.235, LAKE, 4.3, 2100, ['food'], {
      ru: ['Хого из диких грибов (июнь–сентябрь)', 'В сезон дождей рестораны Лицзяна варят хого из десятков видов диких юньнаньских грибов — главный летний деликатес провинции.', 'Ешьте грибы, только когда официант скажет, что они готовы: их варят по таймеру.'],
      en: ['Wild mushroom hotpot (June–September)', 'In the rainy season Lijiang restaurants make hotpot from dozens of kinds of wild Yunnan mushrooms — the province’s top summer delicacy.', 'Eat the mushrooms only when the waiter says they’re done: they’re cooked on a timer.'],
      es: ['Hotpot de setas silvestres (junio–septiembre)', 'En la temporada de lluvias los restaurantes de Lijiang preparan hotpot con decenas de setas silvestres de Yunnan, el gran manjar estival.', 'Come las setas solo cuando el camarero diga que están listas: se cuecen con temporizador.'],
      de: ['Wildpilz-Hotpot (Juni–September)', 'In der Regenzeit kochen Lijiangs Restaurants Hotpot aus Dutzenden Wildpilzarten Yunnans – die Sommerdelikatesse der Provinz.', 'Pilze erst essen, wenn die Bedienung sagt, sie seien fertig: Sie garen nach Timer.'],
      fr: ['Fondue aux champignons sauvages (juin–septembre)', 'À la saison des pluies, les restaurants de Lijiang préparent une fondue avec des dizaines de champignons sauvages du Yunnan, le grand délice d’été.', 'Ne mangez les champignons que quand le serveur dit qu’ils sont prêts : la cuisson est minutée.'],
      it: ['Hotpot di funghi selvatici (giugno–settembre)', 'Nella stagione delle piogge i ristoranti di Lijiang preparano hotpot con decine di funghi selvatici dello Yunnan, la grande prelibatezza estiva.', 'Mangia i funghi solo quando il cameriere dice che sono pronti: si cuociono con il timer.'],
    }, { price: level(3), menu: [
      ['Wild mushroom hotpot', undefined, 'хого из диких грибов|wild mushroom hotpot|hotpot de setas silvestres|Wildpilz-Hotpot|fondue aux champignons sauvages|hotpot di funghi selvatici'],
      ['Chicken broth', undefined, 'куриный бульон-основа|chicken broth base|caldo de pollo|Hühnerbrühe als Basis|bouillon de poule|brodo di pollo'],
    ] }),
    P('flower-cakes', 'food', 26.8722, 100.2318, PAGODA, 4.2, 3300, ['food', 'shopping'], {
      ru: ['Цветочные пирожные', 'Юньнаньские сяньхуабин — слоёные пирожки с начинкой из лепестков роз; их пекут прямо в лавках старого города.', 'Свежие тёплые пирожки вкуснее упакованных — смотрите, где пекут при вас.'],
      en: ['Flower cakes', 'Yunnan xianhuabing — flaky pastries filled with rose petals, baked right in old-town shops.', 'Fresh warm ones beat the packaged kind — look for shops baking in front of you.'],
      es: ['Pasteles de flores', 'Los xianhuabing de Yunnan, pastelitos hojaldrados rellenos de pétalos de rosa, horneados en las tiendas de la ciudad vieja.', 'Los recién hechos ganan a los envasados: busca dónde hornean a la vista.'],
      de: ['Blütenkuchen', 'Yunnans Xianhuabing – Blätterteigküchlein mit Rosenblättern, direkt in den Altstadtläden gebacken.', 'Frisch und warm schmecken sie besser als verpackt – auf Läden achten, die vor Ort backen.'],
      fr: ['Gâteaux aux fleurs', 'Les xianhuabing du Yunnan, petits feuilletés fourrés aux pétales de rose, cuits dans les boutiques de la vieille ville.', 'Tièdes et frais, ils valent mieux qu’emballés : cherchez les boutiques qui cuisent devant vous.'],
      it: ['Dolci ai fiori', 'Gli xianhuabing dello Yunnan, sfogliatine ripiene di petali di rosa, sfornati nelle botteghe della città vecchia.', 'Freschi e tiepidi battono quelli confezionati: cerca chi li sforna davanti a te.'],
    }, { price: level(1), menu: [
      ['Rose flower cake', undefined, 'пирожок с лепестками роз|rose petal pastry|pastelito de pétalos de rosa|Rosenblüten-Gebäck|feuilleté aux pétales de rose|sfogliatina ai petali di rosa'],
      ['Yunnan tea', undefined, 'юньнаньский чай|Yunnan tea|té de Yunnan|Yunnan-Tee|thé du Yunnan|tè dello Yunnan'],
    ] }),
    P('yunnan-coffee', 'food', 26.9215, 100.2085, LAKE, 4.4, 1800, ['food', 'nomads'], {
      ru: ['Юньнаньский кофе в Шухэ', 'Юньнань выращивает почти весь кофе Китая; в тихих двориках Шухэ кофейни варят местные зёрна из Пуэра и Баошаня.', 'Спросите зёрна «из Юньнани» — бариста с гордостью расскажут о ферме.'],
      en: ['Yunnan coffee in Shuhe', 'Yunnan grows nearly all of China’s coffee; in Shuhe’s quiet courtyards cafés brew local beans from Pu’er and Baoshan.', 'Ask for Yunnan beans — baristas will proudly tell you about the farm.'],
      es: ['Café de Yunnan en Shuhe', 'Yunnan cultiva casi todo el café de China; en los patios tranquilos de Shuhe los cafés preparan granos locales de Pu’er y Baoshan.', 'Pide granos de Yunnan: el barista te hablará con orgullo de la finca.'],
      de: ['Yunnan-Kaffee in Shuhe', 'Yunnan baut fast den ganzen Kaffee Chinas an; in Shuhes stillen Höfen brühen Cafés lokale Bohnen aus Pu’er und Baoshan.', 'Nach Yunnan-Bohnen fragen – die Baristas erzählen stolz von der Farm.'],
      fr: ['Café du Yunnan à Shuhe', 'Le Yunnan produit presque tout le café de Chine ; dans les cours calmes de Shuhe, les cafés servent des grains locaux de Pu’er et Baoshan.', 'Demandez des grains du Yunnan : les baristas parlent fièrement de la ferme.'],
      it: ['Caffè dello Yunnan a Shuhe', 'Lo Yunnan coltiva quasi tutto il caffè della Cina; nei cortili tranquilli di Shuhe i caffè preparano chicchi locali di Pu’er e Baoshan.', 'Chiedi chicchi dello Yunnan: i baristi ti racconteranno con orgoglio della piantagione.'],
    }, { price: level(1), menu: [
      ['Pour-over Yunnan coffee', undefined, 'юньнаньский кофе пуровер|Yunnan pour-over|café de Yunnan de filtro|Yunnan-Filterkaffee|café filtre du Yunnan|caffè filtro dello Yunnan'],
      ['Flower cake', undefined, 'цветочный пирожок|flower cake|pastel de flores|Blütenkuchen|gâteau aux fleurs|dolce ai fiori'],
    ] }),
    P('steam-pot-chicken', 'food', 26.877, 100.24, PAGODA, 4.2, 1500, ['food'], {
      ru: ['Цигоцзи — курица в паровом горшке', 'Юньнаньская классика: курицу томят в глиняном горшке с трубкой в центре, и бульон собирается из одного пара — чистый и насыщенный; подают во многих ресторанах Лицзяна.', 'Бульон пьют первым, пока горячий; курицу едят после.'],
      en: ['Qiguoji — steam-pot chicken', 'A Yunnan classic: chicken cooked in a clay pot with a central spout, its broth formed by steam alone — clear and rich; served at many Lijiang restaurants.', 'Drink the broth first while it’s hot, then eat the chicken.'],
      es: ['Qiguoji, pollo en olla de vapor', 'Un clásico de Yunnan: pollo en olla de barro con chimenea central, cuyo caldo se forma solo con vapor, claro e intenso; se sirve en muchos restaurantes de Lijiang.', 'Bebe primero el caldo, caliente, y luego come el pollo.'],
      de: ['Qiguoji – Huhn aus dem Dampftopf', 'Ein Yunnan-Klassiker: Huhn im Tontopf mit Dampfrohr in der Mitte, die Brühe entsteht nur aus Dampf – klar und kräftig; in vielen Lokalen Lijiangs.', 'Erst die heiße Brühe trinken, dann das Huhn essen.'],
      fr: ['Qiguoji, poulet à la marmite vapeur', 'Un classique du Yunnan : poulet cuit dans une marmite en terre à cheminée centrale, son bouillon né de la seule vapeur, clair et riche ; servi dans beaucoup de restaurants de Lijiang.', 'Buvez d’abord le bouillon bien chaud, puis mangez le poulet.'],
      it: ['Qiguoji, pollo nella pentola a vapore', 'Un classico dello Yunnan: pollo cotto in una pentola di terracotta con camino centrale, con brodo fatto solo dal vapore, limpido e ricco; servito in molti ristoranti di Lijiang.', 'Bevi prima il brodo caldo, poi mangia il pollo.'],
    }, { price: level(2), menu: [
      ['Steam-pot chicken', undefined, 'курица в паровом горшке|steam-pot chicken|pollo en olla de vapor|Huhn aus dem Dampftopf|poulet à la marmite vapeur|pollo nella pentola a vapore'],
      ['Yunnan ham', undefined, 'юньнаньская ветчина|Yunnan ham|jamón de Yunnan|Yunnan-Schinken|jambon du Yunnan|prosciutto dello Yunnan'],
    ] }),
  ],
  routes: [
    D(['naxi-baba', 'old-town', 'mu-mansion', 'wangu-tower', 'a-ma-yi', 'black-dragon-pool', 'chicken-pea-jelly', 'a-po-rib-hotpot'],
      'Старый город Даянь, резиденция Му и Озеро Чёрного дракона|Dayan Old Town, Mu Mansion and Black Dragon Pool|La ciudad vieja de Dayan, la Mansión Mu y el Estanque del Dragón Negro|Altstadt Dayan, Mu-Residenz und Schwarzer-Drachen-Teich|La vieille ville de Dayan, la résidence des Mu et l’étang du Dragon noir|La città vecchia di Dayan, la Residenza Mu e lo Stagno del Drago Nero'),
    D(['jade-dragon-snow-mountain', 'blue-moon-valley', 'impression-lijiang', 'yuhu-village', 'baisha', 'shuhe', 'yunnan-coffee', 'yak-hotpot'],
      'Гора Юйлун, долина Голубой луны, Байша и Шухэ|Jade Dragon Mountain, Blue Moon Valley, Baisha and Shuhe|La montaña del Dragón de Jade, el Valle de la Luna Azul, Baisha y Shuhe|Jadedrachenberg, Blaumondtal, Baisha und Shuhe|La montagne du Dragon de jade, la vallée de la Lune bleue, Baisha et Shuhe|La montagna del Drago di Giada, la Valle della Luna Blu, Baisha e Shuhe'),
    D(['zhongyi-market', 'tiger-leaping-gorge', 'lashi-lake', 'steam-pot-chicken'],
      'Рынок, ущелье Прыгающего тигра и озеро Лашихай|The market, Tiger Leaping Gorge and Lashi Lake|El mercado, la Garganta del Salto del Tigre y el lago Lashi|Markt, Tigersprungschlucht und Lashi-See|Le marché, les gorges du Saut du tigre et le lac Lashi|Il mercato, la Gola del Salto della Tigre e il lago Lashi'),
  ],
};

export default pack;
