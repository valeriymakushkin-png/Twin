import type { CityPack } from '../types';
import { free, level, makeDay, makePlace } from './_kit.ts';

const P = makePlace('chongqing');
const D = makeDay('chongqing');
const BRIDGE = 'AZd8cnWO_iI';
const STREET = 'uBm_4JK4C0w';
const CAVE = 'PoFNeom7HC4';
const TOWER = 'jq-y5j1VU4g';
const NEON = 'nAhr3mPcQx8';

const pack: CityPack = {
  country: 'CN',
  city: 'chongqing',
  places: [
    P('hongyadong', 'attraction', 29.5636, 106.5793, CAVE, 4.5, 42000, ['architecture', 'nightlife', 'photo'], {
      ru: ['Хунъядун', 'Комплекс домов на сваях, прилепившийся к скале над рекой Цзялин: 11 этажей лавок и кафе, а с сумерками — тысячи огней.', 'Лучший вид — с моста Цяньсимэнь или с противоположного берега.'],
      en: ['Hongyadong', 'A complex of stilt houses clinging to a cliff above the Jialing River: 11 floors of shops and cafés, lit by thousands of lights from dusk.', 'The best view is from Qianximen Bridge or the opposite bank.'],
      es: ['Hongyadong', 'Un complejo de casas sobre pilotes pegado a un acantilado sobre el río Jialing: 11 pisos de tiendas y cafés, iluminados con miles de luces al anochecer.', 'La mejor vista, desde el puente Qianximen o la otra orilla.'],
      de: ['Hongyadong', 'Ein Komplex von Stelzenhäusern an einer Klippe über dem Jialing: 11 Etagen mit Läden und Cafés, ab der Dämmerung von Tausenden Lichtern erleuchtet.', 'Der beste Blick: von der Qianximen-Brücke oder vom anderen Ufer.'],
      fr: ['Hongyadong', 'Un ensemble de maisons sur pilotis accroché à une falaise au-dessus du Jialing : 11 étages de boutiques et cafés, illuminés de milliers de lumières dès le crépuscule.', 'La meilleure vue : depuis le pont Qianximen ou la rive opposée.'],
      it: ['Hongyadong', 'Un complesso di case su palafitte aggrappato a una rupe sul fiume Jialing: 11 piani di negozi e caffè, illuminati da migliaia di luci al crepuscolo.', 'La vista migliore: dal ponte Qianximen o dalla riva opposta.'],
    }, { spot: 'insta', price: free }),
    P('jiefangbei', 'attraction', 29.5573, 106.5772, NEON, 4.4, 28000, ['city', 'history', 'shopping'], {
      ru: ['Цзефанбэй', 'Памятник Освобождения высотой 27,5 м — бывший мемориал победы в войне с Японией — в окружении небоскрёбов и торговых улиц самого центра.', 'Отсюда пешком 10–15 минут до Хунъядуна и канатной дороги.'],
      en: ['Jiefangbei', 'The 27.5 m Liberation Monument — originally a memorial to victory over Japan — ringed by towers and shopping streets in the very centre.', 'Hongyadong and the cableway are a 10–15-minute walk away.'],
      es: ['Jiefangbei', 'El Monumento a la Liberación de 27,5 m, antes memorial de la victoria sobre Japón, rodeado de rascacielos y calles comerciales en pleno centro.', 'Hongyadong y el teleférico están a 10–15 minutos a pie.'],
      de: ['Jiefangbei', 'Das 27,5 m hohe Befreiungsdenkmal – ursprünglich ein Denkmal für den Sieg über Japan – inmitten von Hochhäusern und Einkaufsstraßen im Zentrum.', 'Hongyadong und die Seilbahn liegen 10–15 Gehminuten entfernt.'],
      fr: ['Jiefangbei', 'Le monument de la Libération de 27,5 m, à l’origine mémorial de la victoire sur le Japon, entouré de tours et de rues commerçantes en plein centre.', 'Hongyadong et le téléphérique sont à 10–15 minutes à pied.'],
      it: ['Jiefangbei', 'Il Monumento alla Liberazione di 27,5 m, in origine memoriale della vittoria sul Giappone, tra grattacieli e vie dello shopping in pieno centro.', 'Hongyadong e la funivia sono a 10–15 minuti a piedi.'],
    }, { price: free }),
    P('yangtze-cableway', 'attraction', 29.5555, 106.585, BRIDGE, 4.4, 19000, ['views', 'city', 'photo'], {
      ru: ['Канатная дорога через Янцзы', 'Вагончик 1987 года пересекает Янцзы на высоте над рекой — около 1,2 км за несколько минут с видом на небоскрёбы полуострова.', 'Очередь меньше рано утром; вечером вид в огнях, но очередь длиннее.'],
      en: ['Yangtze River Cableway', 'A 1987 cable car crossing the Yangtze high above the water — about 1.2 km in a few minutes, with views of the peninsula’s towers.', 'The queue is shorter early in the morning; evenings are lit up but busier.'],
      es: ['Teleférico del Yangtsé', 'Una cabina de 1987 que cruza el Yangtsé sobre el agua: unos 1,2 km en pocos minutos con vistas a los rascacielos de la península.', 'Hay menos cola temprano; de noche hay luces, pero más espera.'],
      de: ['Jangtse-Seilbahn', 'Eine Seilbahn von 1987, die hoch über den Jangtse fährt – rund 1,2 km in wenigen Minuten mit Blick auf die Hochhäuser der Halbinsel.', 'Früh am Morgen ist die Schlange kürzer; abends beleuchtet, aber voller.'],
      fr: ['Téléphérique du Yangtsé', 'Une cabine de 1987 qui franchit le Yangtsé au-dessus de l’eau : environ 1,2 km en quelques minutes, vue sur les tours de la péninsule.', 'Moins de queue tôt le matin ; le soir c’est illuminé mais plus chargé.'],
      it: ['Funivia sullo Yangtze', 'Una cabina del 1987 che attraversa lo Yangtze in alto sull’acqua: circa 1,2 km in pochi minuti con vista sui grattacieli della penisola.', 'Meno coda la mattina presto; la sera è illuminata ma più affollata.'],
    }, { spot: 'insta', price: level(1) }),
    P('liziba-monorail', 'attraction', 29.5507, 106.5354, TOWER, 4.4, 16000, ['city', 'photo'], {
      ru: ['Станция Лицзыба', 'Поезд монорельса линии 2 проезжает прямо сквозь жилой дом — станция встроена в его этажи. Символ «8D-города».', 'Смотровая площадка под станцией — ждите поезд, они идут каждые несколько минут.'],
      en: ['Liziba Station', 'The Line 2 monorail runs straight through a residential building — the station is built into its floors. A symbol of the “8D city”.', 'Use the viewing platform below the station — trains come every few minutes.'],
      es: ['Estación Liziba', 'El monorraíl de la línea 2 atraviesa un edificio de viviendas: la estación está dentro de sus pisos. Símbolo de la «ciudad 8D».', 'Ve al mirador bajo la estación: pasan trenes cada pocos minutos.'],
      de: ['Station Liziba', 'Die Einschienenbahn der Linie 2 fährt mitten durch ein Wohnhaus – die Station ist in seine Etagen gebaut. Symbol der „8D-Stadt“.', 'Von der Aussichtsplattform unter der Station schauen – Züge kommen alle paar Minuten.'],
      fr: ['Station Liziba', 'Le monorail de la ligne 2 traverse un immeuble d’habitation : la station est intégrée à ses étages. Symbole de la « ville 8D ».', 'Allez sur la plateforme sous la station : un train passe toutes les quelques minutes.'],
      it: ['Stazione Liziba', 'La monorotaia della linea 2 attraversa un palazzo residenziale: la stazione è dentro i suoi piani. Simbolo della «città 8D».', 'Vai alla piattaforma sotto la stazione: i treni passano ogni pochi minuti.'],
    }, { spot: 'insta', price: free }),
    P('ciqikou', 'attraction', 29.5799, 106.4514, STREET, 4.2, 24000, ['oldtown', 'streetfood', 'history'], {
      ru: ['Старый город Цыцикоу', 'Бывший порт фарфора на реке Цзялин с улочками эпох Мин и Цин, чайными, лавками закусок и храмом Баолунь.', 'Главная улица забита в выходные — сверните в боковые переулки.'],
      en: ['Ciqikou Ancient Town', 'A former porcelain port on the Jialing River with Ming- and Qing-era lanes, teahouses, snack stalls and Baolun Temple.', 'The main street is packed at weekends — duck into the side lanes.'],
      es: ['Pueblo antiguo de Ciqikou', 'Un antiguo puerto de porcelana en el río Jialing con callejas Ming y Qing, casas de té, puestos de tentempiés y el templo Baolun.', 'La calle principal se llena los fines de semana: métete en las callejas.'],
      de: ['Altstadt Ciqikou', 'Ein früherer Porzellanhafen am Jialing mit Gassen aus Ming- und Qing-Zeit, Teehäusern, Snackständen und dem Baolun-Tempel.', 'Die Hauptstraße ist am Wochenende voll – in die Seitengassen ausweichen.'],
      fr: ['Vieux bourg de Ciqikou', 'Un ancien port de la porcelaine sur le Jialing, avec ruelles Ming et Qing, maisons de thé, échoppes de snacks et temple Baolun.', 'La rue principale est bondée le week-end : prenez les ruelles latérales.'],
      it: ['Antica città di Ciqikou', 'Un ex porto della porcellana sul fiume Jialing con vicoli Ming e Qing, case da tè, banchi di snack e il tempio Baolun.', 'La via principale è piena nel weekend: infilati nei vicoli laterali.'],
    }, { price: free }),
    P('chaotianmen', 'attraction', 29.567, 106.588, BRIDGE, 4.3, 14000, ['views', 'city', 'architecture'], {
      ru: ['Чаотяньмэнь', 'Мыс, где сливаются Янцзы и Цзялин — видно, как встречаются вода двух цветов; над ним небоскрёбы Raffles City с горизонтальным «мостом-кристаллом».', 'Отсюда отходят вечерние речные круизы по двум рекам.'],
      en: ['Chaotianmen', 'The point where the Yangtze and Jialing meet — you can see the two colours of water merge; above it rise the Raffles City towers with their horizontal “Crystal” skybridge.', 'Evening river cruises on both rivers leave from here.'],
      es: ['Chaotianmen', 'El cabo donde se unen el Yangtsé y el Jialing: se ven mezclarse aguas de dos colores; encima, las torres de Raffles City con su «Cristal» horizontal.', 'De aquí salen los cruceros nocturnos por los dos ríos.'],
      de: ['Chaotianmen', 'Die Landspitze, an der Jangtse und Jialing zusammenfließen – zwei Wasserfarben treffen sich; darüber die Raffles-City-Türme mit der waagrechten „Crystal“-Brücke.', 'Von hier starten abendliche Flussfahrten auf beiden Flüssen.'],
      fr: ['Chaotianmen', 'La pointe où se rejoignent le Yangtsé et le Jialing : on voit se mêler deux couleurs d’eau ; au-dessus, les tours de Raffles City et leur « Crystal » horizontal.', 'Les croisières du soir sur les deux fleuves partent d’ici.'],
      it: ['Chaotianmen', 'La punta dove si incontrano lo Yangtze e il Jialing: si vedono mescolarsi acque di due colori; sopra, le torri di Raffles City con il «Crystal» orizzontale.', 'Da qui partono le crociere serali sui due fiumi.'],
    }, { price: free }),
    P('eling-park', 'nature', 29.5506, 106.53, TOWER, 4.4, 8800, ['views', 'gardens', 'art'], {
      ru: ['Парк Элин и Элин Эрчан', 'Парк на высшей точке полуострова Юйчжун с башней-смотровой на обе реки, а рядом — Элин Эрчан, бывшая типография, превращённая в квартал кафе и мастерских.', 'Поднимитесь на башню в парке — оттуда видны обе реки сразу.'],
      en: ['Eling Park and Eling No. 2 Factory', 'A park on the Yuzhong peninsula’s highest point with a lookout tower over both rivers, and next door Eling No. 2 Factory, an old printing works turned into cafés and studios.', 'Climb the park’s tower — both rivers are visible at once.'],
      es: ['Parque Eling y Fábrica n.º 2', 'Un parque en el punto más alto de la península de Yuzhong con torre-mirador sobre los dos ríos y, al lado, la Fábrica n.º 2 de Eling, vieja imprenta convertida en cafés y talleres.', 'Sube a la torre del parque: se ven los dos ríos a la vez.'],
      de: ['Eling-Park und Fabrik Nr. 2', 'Ein Park auf dem höchsten Punkt der Halbinsel Yuzhong mit Aussichtsturm über beide Flüsse, daneben die Eling-Fabrik Nr. 2, eine alte Druckerei mit Cafés und Ateliers.', 'Auf den Turm im Park steigen – beide Flüsse auf einmal sehen.'],
      fr: ['Parc Eling et usine n° 2', 'Un parc au point culminant de la péninsule de Yuzhong avec une tour-belvédère sur les deux fleuves, et à côté l’usine n° 2 d’Eling, ancienne imprimerie devenue cafés et ateliers.', 'Montez à la tour du parc : on voit les deux fleuves à la fois.'],
      it: ['Parco Eling e Fabbrica n. 2', 'Un parco sul punto più alto della penisola di Yuzhong con una torre panoramica sui due fiumi e, accanto, la Fabbrica n. 2 di Eling, vecchia tipografia diventata caffè e studi.', 'Sali sulla torre del parco: si vedono i due fiumi insieme.'],
    }, { spot: 'hidden', price: free }),
    P('shancheng-alley', 'attraction', 29.553, 106.576, STREET, 4.4, 6100, ['oldtown', 'views', 'photo'], {
      ru: ['Переулок Шаньчэн', 'Старинная лестничная улочка на склоне над Янцзы: старые дома, крошечные кафе и деревянные мостки вдоль скалы.', 'Спускайтесь сверху вниз — так легче и виды на реку открываются постепенно.'],
      en: ['Shancheng Alley', 'An old stepped lane on the slope above the Yangtze: old houses, tiny cafés and wooden walkways along the cliff.', 'Walk it from the top down — easier on the legs, with river views opening up as you go.'],
      es: ['Callejón Shancheng', 'Una vieja calle de escaleras en la ladera sobre el Yangtsé: casas antiguas, cafés diminutos y pasarelas de madera junto al acantilado.', 'Recórrela de arriba abajo: cuesta menos y las vistas al río se abren poco a poco.'],
      de: ['Shancheng-Gasse', 'Eine alte Treppengasse am Hang über dem Jangtse: alte Häuser, winzige Cafés und Holzstege an der Felswand.', 'Von oben nach unten gehen – leichter, und der Flussblick öffnet sich nach und nach.'],
      fr: ['Ruelle Shancheng', 'Une vieille ruelle en escaliers sur la pente au-dessus du Yangtsé : vieilles maisons, cafés minuscules et passerelles de bois le long de la falaise.', 'Descendez-la depuis le haut : moins fatigant, et la vue sur le fleuve s’ouvre peu à peu.'],
      it: ['Vicolo Shancheng', 'Un vecchio vicolo a gradini sul pendio sopra lo Yangtze: case antiche, minuscoli caffè e passerelle di legno lungo la rupe.', 'Percorrilo dall’alto in basso: meno fatica e la vista sul fiume si apre man mano.'],
    }, { spot: 'hidden', price: free }),
    P('three-gorges-museum', 'attraction', 29.5617, 106.5497, TOWER, 4.6, 12000, ['museums', 'history'], {
      ru: ['Музей Трёх ущелий', 'Большой музей истории Чунцина и ущелий Янцзы: панорамы затопленных ущелий, бронза царства Ба и история города во время войны.', 'Вход бесплатный по паспорту; в понедельник музей обычно закрыт.'],
      en: ['Three Gorges Museum', 'A large museum of Chongqing and the Yangtze gorges: panoramas of the flooded gorges, Ba kingdom bronzes and the city’s wartime history.', 'Free with a passport; usually closed on Mondays.'],
      es: ['Museo de las Tres Gargantas', 'Un gran museo de Chongqing y las gargantas del Yangtsé: panoramas de las gargantas inundadas, bronces del reino Ba e historia de la ciudad en la guerra.', 'Gratis con pasaporte; suele cerrar los lunes.'],
      de: ['Drei-Schluchten-Museum', 'Ein großes Museum zu Chongqing und den Jangtse-Schluchten: Panoramen der gefluteten Schluchten, Bronzen des Ba-Reiches und die Kriegsgeschichte der Stadt.', 'Eintritt frei mit Reisepass; montags meist geschlossen.'],
      fr: ['Musée des Trois-Gorges', 'Un grand musée sur Chongqing et les gorges du Yangtsé : panoramas des gorges englouties, bronzes du royaume de Ba et histoire de la ville en guerre.', 'Gratuit avec passeport ; fermé en général le lundi.'],
      it: ['Museo delle Tre Gole', 'Un grande museo su Chongqing e le gole dello Yangtze: panorami delle gole sommerse, bronzi del regno di Ba e la storia della città in guerra.', 'Gratuito con passaporto; di solito chiuso il lunedì.'],
    }, { price: free }),
    P('great-hall', 'attraction', 29.5622, 106.5524, TOWER, 4.5, 9700, ['architecture', 'history'], {
      ru: ['Большой зал народных собраний', 'Здание 1954 года с куполом в духе пекинского Храма Неба — стоит прямо напротив Музея Трёх ущелий.', 'Лучший кадр — с площади между залом и музеем, вечером здание подсвечено.'],
      en: ['Great Hall of the People', 'A 1954 building with a dome in the spirit of Beijing’s Temple of Heaven, directly opposite the Three Gorges Museum.', 'The best shot is from the square between the hall and the museum; it’s lit up at night.'],
      es: ['Gran Salón del Pueblo', 'Un edificio de 1954 con cúpula al estilo del Templo del Cielo de Pekín, justo frente al Museo de las Tres Gargantas.', 'La mejor foto, desde la plaza entre el salón y el museo; de noche se ilumina.'],
      de: ['Große Halle des Volkes', 'Ein Bau von 1954 mit einer Kuppel im Stil des Pekinger Himmelstempels, direkt gegenüber dem Drei-Schluchten-Museum.', 'Das beste Foto vom Platz zwischen Halle und Museum; abends beleuchtet.'],
      fr: ['Grand Palais du Peuple', 'Un édifice de 1954 à coupole dans l’esprit du temple du Ciel de Pékin, juste en face du musée des Trois-Gorges.', 'La meilleure photo se prend depuis la place entre le palais et le musée ; illuminé le soir.'],
      it: ['Grande Sala del Popolo', 'Un edificio del 1954 con una cupola in stile Tempio del Cielo di Pechino, proprio di fronte al Museo delle Tre Gole.', 'La foto migliore dalla piazza tra sala e museo; di sera è illuminata.'],
    }, { price: level(1) }),
    P('nanshan-viewpoint', 'nature', 29.548, 106.598, BRIDGE, 4.4, 9100, ['views', 'sunset', 'photo'], {
      ru: ['Смотровая площадка «Одно дерево» на Наньшане', 'Площадка на горе Наньшань за Янцзы, откуда весь полуостров Юйчжун в огнях как на ладони.', 'Приезжайте к сумеркам на такси — к закрытию площадки обратно уехать сложнее.'],
      en: ['Nanshan “One Tree” viewpoint', 'A platform on Nanshan across the Yangtze with the whole lit-up Yuzhong peninsula spread below.', 'Take a taxi up for dusk — getting back near closing time is harder.'],
      es: ['Mirador «Un Árbol» de Nanshan', 'Un mirador en el monte Nanshan, al otro lado del Yangtsé, con toda la península de Yuzhong iluminada a tus pies.', 'Sube en taxi al anochecer: al cierre cuesta más volver.'],
      de: ['Aussichtspunkt „Ein Baum“ am Nanshan', 'Eine Plattform am Nanshan jenseits des Jangtse mit der ganzen beleuchteten Halbinsel Yuzhong zu Füßen.', 'Zur Dämmerung mit dem Taxi hinauf – kurz vor Schluss ist die Rückfahrt schwieriger.'],
      fr: ['Belvédère « Un arbre » du Nanshan', 'Une plateforme sur le mont Nanshan, de l’autre côté du Yangtsé, avec toute la péninsule de Yuzhong illuminée à vos pieds.', 'Montez en taxi au crépuscule : au moment de la fermeture, le retour est plus difficile.'],
      it: ['Belvedere «Un albero» del Nanshan', 'Una piattaforma sul monte Nanshan oltre lo Yangtze con tutta la penisola di Yuzhong illuminata ai tuoi piedi.', 'Sali in taxi al crepuscolo: verso la chiusura tornare è più difficile.'],
    }, { spot: 'insta', price: level(1) }),
    P('wulong-karst', 'nature', 29.437, 107.798, TOWER, 4.7, 15000, ['nature', 'canyon', 'unesco'], {
      ru: ['Карст Улун — Три природных моста', 'Три гигантские каменные арки над ущельем — часть объекта ЮНЕСКО «Южно-китайский карст»; здесь снимали «Трансформеров» и «Проклятие золотого цветка».', 'Это день: около 3 часов на машине или поезд до Улуна, затем автобус парка.'],
      en: ['Wulong Karst — Three Natural Bridges', 'Three giant stone arches over a gorge — part of the UNESCO “South China Karst” site; “Transformers” and “Curse of the Golden Flower” were filmed here.', 'It’s a full day: about 3 hours by road, or a train to Wulong then the park bus.'],
      es: ['Karst de Wulong: Tres Puentes Naturales', 'Tres arcos de piedra gigantes sobre una garganta, parte del sitio UNESCO «Karst del Sur de China»; aquí se rodaron «Transformers» y «La maldición de la flor dorada».', 'Es un día entero: unas 3 horas por carretera, o tren a Wulong y bus del parque.'],
      de: ['Wulong-Karst – Drei Naturbrücken', 'Drei riesige Steinbögen über einer Schlucht – Teil des UNESCO-Welterbes „Südchinesischer Karst“; hier wurden „Transformers“ und „Der Fluch der goldenen Blume“ gedreht.', 'Ein ganzer Tag: etwa 3 Stunden Straße oder Zug nach Wulong, dann Parkbus.'],
      fr: ['Karst de Wulong — Trois Ponts naturels', 'Trois arches de pierre géantes au-dessus d’une gorge, partie du site UNESCO « Karst de Chine du Sud » ; on y a tourné « Transformers » et « La Cité interdite ».', 'Comptez une journée : environ 3 h de route, ou train jusqu’à Wulong puis bus du parc.'],
      it: ['Carsismo di Wulong — Tre Ponti Naturali', 'Tre enormi archi di pietra su una gola, parte del sito UNESCO «Carsismo della Cina meridionale»; qui sono stati girati «Transformers» e «La città proibita».', 'Serve una giornata: circa 3 ore di strada, o treno per Wulong e poi bus del parco.'],
    }, { spot: 'insta', price: level(3) }),
    P('dazu-rock-carvings', 'attraction', 29.749, 105.801, TOWER, 4.7, 8600, ['unesco', 'art', 'history'], {
      ru: ['Скальные рельефы Дацзу', 'Тысячи буддийских, даосских и конфуцианских скульптур IX–XIII веков в скалах (ЮНЕСКО); на Баодиншане — золотая Гуаньинь с «тысячей рук».', 'Около 1,5–2 часов на машине; начните с Баодиншаня — там главные рельефы.'],
      en: ['Dazu Rock Carvings', 'Thousands of Buddhist, Taoist and Confucian sculptures of the 9th–13th centuries in the cliffs (UNESCO); Baodingshan has the golden Thousand-Hand Guanyin.', 'About 1.5–2 hours by road; start with Baodingshan, home of the main carvings.'],
      es: ['Tallas rupestres de Dazu', 'Miles de esculturas budistas, taoístas y confucianas de los siglos IX–XIII en la roca (UNESCO); en Baodingshan está la Guanyin dorada de las Mil Manos.', 'Unas 1,5–2 horas por carretera; empieza por Baodingshan, donde están las principales.'],
      de: ['Felsskulpturen von Dazu', 'Tausende buddhistische, daoistische und konfuzianische Skulpturen aus dem 9.–13. Jh. im Fels (UNESCO); am Baodingshan die goldene Tausendhändige Guanyin.', 'Etwa 1,5–2 Stunden Fahrt; mit dem Baodingshan beginnen – dort sind die wichtigsten.'],
      fr: ['Sculptures rupestres de Dazu', 'Des milliers de sculptures bouddhistes, taoïstes et confucéennes des IXe–XIIIe siècles dans la falaise (UNESCO) ; au Baodingshan, la Guanyin dorée aux mille bras.', 'Environ 1 h 30–2 h de route ; commencez par le Baodingshan, qui réunit les principales.'],
      it: ['Sculture rupestri di Dazu', 'Migliaia di sculture buddhiste, taoiste e confuciane dei secoli IX–XIII nella roccia (UNESCO); a Baodingshan la Guanyin dorata dalle mille mani.', 'Circa 1,5–2 ore di strada; comincia da Baodingshan, dove ci sono le principali.'],
    }, { price: level(3) }),
    P('peijie-hotpot', 'food', 29.5634, 106.5788, CAVE, 4.5, 21000, ['food', 'nightlife'], {
      ru: ['Пэйцзе — старый хого', 'Одна из самых популярных сетей чунцинского хого; бульон, по словам основательницы, по рецепту бабушки. Один из филиалов — прямо в Хунъядуне.', 'Очередь вечером может быть на часы — приходите к открытию или берите номерок заранее.'],
      en: ['Peijie Old Hotpot', 'One of the most popular Chongqing hotpot chains; the founder says the broth is her grandmother’s recipe. One branch is right inside Hongyadong.', 'Evening queues can run for hours — come at opening or take a ticket early.'],
      es: ['Peijie Old Hotpot', 'Una de las cadenas de hotpot de Chongqing más populares; según la fundadora, el caldo es la receta de su abuela. Hay un local dentro de Hongyadong.', 'La cola nocturna puede durar horas: ve a la apertura o coge número pronto.'],
      de: ['Peijie Old Hotpot', 'Eine der beliebtesten Hotpot-Ketten Chongqings; laut Gründerin ist die Brühe das Rezept ihrer Großmutter. Eine Filiale liegt direkt in Hongyadong.', 'Abends kann man Stunden warten – zur Öffnung kommen oder früh eine Nummer ziehen.'],
      fr: ['Peijie Old Hotpot', 'L’une des chaînes de fondue de Chongqing les plus populaires ; selon la fondatrice, le bouillon est la recette de sa grand-mère. Une adresse est dans Hongyadong même.', 'Le soir, l’attente peut durer des heures : venez à l’ouverture ou prenez un ticket tôt.'],
      it: ['Peijie Old Hotpot', 'Una delle catene di hotpot di Chongqing più amate; secondo la fondatrice il brodo è la ricetta della nonna. Una sede è dentro Hongyadong.', 'La sera si può aspettare ore: vieni all’apertura o prendi il numero presto.'],
    }, { price: level(2), menu: [
      ['Máodǔ', undefined, 'говяжий рубец — классика хого|beef tripe — the hotpot classic|callos de ternera, el clásico|Rinderpansen – der Klassiker|panse de bœuf, le classique|trippa di manzo, il classico'],
      ['Yācháng', undefined, 'утиные кишочки|duck intestines|intestino de pato|Entendarm|intestins de canard|intestino d’anatra'],
      ['Beef in spicy broth', undefined, 'говядина в остром бульоне|beef in spicy broth|ternera en caldo picante|Rind in scharfer Brühe|bœuf en bouillon épicé|manzo in brodo piccante'],
    ] }),
    P('qinma-hotpot', 'food', 29.556, 106.575, NEON, 4.2, 6400, ['food'], {
      ru: ['Цинь Ма — хого', 'Старая чунцинская сеть хого с густым говяжьим жиром в бульоне и котлом-«утка-мандаринка» — острая и мягкая половины.', 'Если не любите очень остро, просите юаньян-го — котёл на две половины.'],
      en: ['Qinma Hotpot', 'An established Chongqing hotpot chain with rich beef-tallow broth and the “yuanyang” pot — a spicy half and a mild half.', 'If you don’t like it very hot, ask for a yuanyang pot with two halves.'],
      es: ['Qinma Hotpot', 'Una veterana cadena de hotpot de Chongqing con caldo de sebo de ternera y la olla «yuanyang», mitad picante y mitad suave.', 'Si no te gusta muy picante, pide la olla yuanyang de dos mitades.'],
      de: ['Qinma Hotpot', 'Eine alteingesessene Hotpot-Kette Chongqings mit kräftiger Rindertalg-Brühe und dem „Yuanyang“-Topf – halb scharf, halb mild.', 'Wer es nicht sehr scharf mag, bestellt den Yuanyang-Topf mit zwei Hälften.'],
      fr: ['Qinma Hotpot', 'Une chaîne de fondue établie de Chongqing au bouillon de suif de bœuf et à la marmite « yuanyang », moitié épicée, moitié douce.', 'Si vous ne supportez pas le très épicé, demandez la marmite yuanyang à deux compartiments.'],
      it: ['Qinma Hotpot', 'Una storica catena di hotpot di Chongqing con brodo al sego di manzo e la pentola «yuanyang», metà piccante e metà delicata.', 'Se non ami il molto piccante, chiedi la pentola yuanyang a due metà.'],
    }, { price: level(2), menu: [
      ['Yuanyang pot', undefined, 'котёл «юаньян» — острая и мягкая половины|yuanyang pot, spicy and mild halves|olla yuanyang, picante y suave|Yuanyang-Topf, scharf und mild|marmite yuanyang, épicée et douce|pentola yuanyang, piccante e delicata'],
      ['Máodǔ', undefined, 'говяжий рубец|beef tripe|callos de ternera|Rinderpansen|panse de bœuf|trippa di manzo'],
    ] }),
    P('huashi-wanza', 'food', 29.555, 106.576, STREET, 4.4, 7300, ['food', 'streetfood'], {
      ru: ['Хуаши — лапша ваньцза', 'Знаменитая лапшичная у Цзефанбэя: ваньцза-мянь — лапша с разваренным горохом и острым мясным фаршем, щедрые порции.', 'Местные едят лапшу на завтрак — приходите утром, как чунцинцы.'],
      en: ['Huashi Wanza Noodles', 'A famous noodle shop near Jiefangbei: wanza mian — noodles with mushy peas and spicy minced pork, in generous portions.', 'Locals eat noodles for breakfast — come in the morning like a Chongqinger.'],
      es: ['Fideos Wanza Huashi', 'Un famoso local de fideos cerca de Jiefangbei: wanza mian, fideos con guisantes deshechos y carne picada picante, en raciones generosas.', 'Los locales desayunan fideos: ve por la mañana como uno de ellos.'],
      de: ['Huashi Wanza-Nudeln', 'Ein berühmter Nudelladen nahe Jiefangbei: Wanza Mian – Nudeln mit zerkochten Erbsen und scharfem Hackfleisch, großzügige Portionen.', 'Einheimische essen Nudeln zum Frühstück – morgens kommen wie sie.'],
      fr: ['Nouilles wanza Huashi', 'Une échoppe de nouilles célèbre près de Jiefangbei : wanza mian, nouilles aux pois fondants et porc haché épicé, en portions généreuses.', 'Les habitants mangent des nouilles au petit-déjeuner : venez le matin comme eux.'],
      it: ['Noodle wanza Huashi', 'Un famoso locale di noodle vicino a Jiefangbei: wanza mian, noodle con piselli sfatti e carne trita piccante, porzioni generose.', 'I locali mangiano noodle a colazione: vieni al mattino come loro.'],
    }, { price: level(1), menu: [
      ['Wanza mian', undefined, 'лапша с горохом и острым фаршем|noodles with peas and spicy minced pork|fideos con guisantes y carne picada picante|Nudeln mit Erbsen und scharfem Hack|nouilles aux pois et porc haché épicé|noodle con piselli e carne trita piccante'],
      ['Xiaomian', undefined, 'сяомянь — острая лапша с маслом чили|xiaomian — spicy chilli-oil noodles|xiaomian, fideos picantes con aceite de chile|Xiaomian – scharfe Chiliöl-Nudeln|xiaomian, nouilles à l’huile pimentée|xiaomian, noodle all’olio di peperoncino'],
    ] }),
    P('pangmei-noodles', 'food', 29.553, 106.551, STREET, 4.3, 5200, ['food', 'streetfood'], {
      ru: ['Пан Мэй — лапшичная', 'Известная лапшичная на улице Чжуншань-3 у Лянлукоу, считается одной из лучших в городе; славится говяжьей лапшой и смешанной — говядина с потрохами.', 'Если остро — просите «вэй ла», немного острого.'],
      en: ['Pangmei Noodles', 'A well-known noodle shop on Zhongshan 3rd Road near Lianglukou, counted among the city’s best; famous for beef noodles and the mixed beef-and-intestine bowl.', 'If it’s too hot, ask for “wei la” — a little spicy.'],
      es: ['Fideos Pangmei', 'Un conocido local de fideos en Zhongshan 3rd Road junto a Lianglukou, entre los mejores de la ciudad; famoso por los fideos de ternera y el mixto de ternera e intestino.', 'Si pica demasiado, pide «wei la», poco picante.'],
      de: ['Pangmei-Nudeln', 'Ein bekannter Nudelladen an der Zhongshan 3rd Road bei Lianglukou, einer der besten der Stadt; berühmt für Rindfleischnudeln und die gemischte Schale mit Rind und Darm.', 'Zu scharf? „Wei la“ verlangen – ein bisschen scharf.'],
      fr: ['Nouilles Pangmei', 'Une échoppe connue sur Zhongshan 3rd Road près de Lianglukou, parmi les meilleures de la ville ; célèbre pour ses nouilles au bœuf et le bol mixte bœuf-tripes.', 'Trop épicé ? Demandez « wei la », un peu épicé.'],
      it: ['Noodle Pangmei', 'Un noto locale di noodle su Zhongshan 3rd Road vicino a Lianglukou, tra i migliori della città; famoso per i noodle al manzo e la ciotola mista manzo e trippa.', 'Troppo piccante? Chiedi «wei la», poco piccante.'],
    }, { price: level(1), menu: [
      ['Beef noodles', undefined, 'лапша с тушёной говядиной|braised beef noodles|fideos con ternera guisada|Nudeln mit Schmorrind|nouilles au bœuf braisé|noodle con manzo brasato'],
      ['Beef and intestine noodles', undefined, 'лапша с говядиной и потрохами|beef and intestine noodles|fideos de ternera e intestino|Nudeln mit Rind und Darm|nouilles bœuf et tripes|noodle con manzo e trippa'],
    ] }),
    P('haoyoulai', 'food', 29.557, 106.5745, NEON, 4.3, 8900, ['food', 'streetfood'], {
      ru: ['Хаоюлай — суаньлафэнь', 'Знаменитая закусочная на улице Баи у Цзефанбэя с суаньлафэнь — кисло-острой лапшой из батата с арахисом и зеленью.', 'Добавьте фэйчан — тушёные свиные кишки — так едят местные.'],
      en: ['Haoyoulai hot-and-sour noodles', 'A famous eatery on Bayi Road by Jiefangbei for suanlafen — hot-and-sour sweet-potato noodles with peanuts and herbs.', 'Add feichang — braised pork intestine — as locals do.'],
      es: ['Haoyoulai, fideos agripicantes', 'Un famoso local en la calle Bayi junto a Jiefangbei de suanlafen: fideos de boniato agripicantes con cacahuetes y hierbas.', 'Añade feichang, intestino de cerdo guisado, como los locales.'],
      de: ['Haoyoulai Sauer-scharf-Nudeln', 'Ein berühmtes Lokal an der Bayi-Straße bei Jiefangbei für Suanlafen – sauer-scharfe Süßkartoffelnudeln mit Erdnüssen und Kräutern.', 'Feichang dazunehmen – geschmorten Schweinedarm – wie die Einheimischen.'],
      fr: ['Haoyoulai, nouilles aigres-piquantes', 'Une adresse célèbre rue Bayi près de Jiefangbei pour le suanlafen : nouilles de patate douce aigres-piquantes aux cacahuètes et herbes.', 'Ajoutez du feichang, intestin de porc braisé, comme les habitants.'],
      it: ['Haoyoulai, noodle agro-piccanti', 'Un famoso locale su via Bayi vicino a Jiefangbei per il suanlafen: noodle di patata dolce agro-piccanti con arachidi ed erbe.', 'Aggiungi il feichang, intestino di maiale brasato, come i locali.'],
    }, { price: level(1), menu: [
      ['Suanlafen', undefined, 'кисло-острая лапша из батата|hot-and-sour sweet-potato noodles|fideos de boniato agripicantes|sauer-scharfe Süßkartoffelnudeln|nouilles de patate douce aigres-piquantes|noodle di patata dolce agro-piccanti'],
      ['Feichang suanlafen', undefined, 'то же с тушёными свиными кишками|with braised pork intestine|con intestino de cerdo guisado|mit geschmortem Schweinedarm|à l’intestin de porc braisé|con intestino di maiale brasato'],
    ] }),
    P('bayi-food-street', 'food', 29.558, 106.575, NEON, 4.1, 11000, ['streetfood', 'nightlife'], {
      ru: ['Улица закусок Баи', '«Улица вкусной еды» у Цзефанбэя: шашлычки, острые вонтоны чаошоу, клейкие шарики танъюань и десерты со льдом.', 'Ходите по чуть-чуть: одна порция на двоих — и к следующему прилавку.'],
      en: ['Bayi Road snack street', 'The “good eats street” by Jiefangbei: skewers, spicy chaoshou wontons, glutinous tangyuan and iced desserts.', 'Graze: share one portion and move on to the next stall.'],
      es: ['Calle de tentempiés Bayi', 'La «calle de la buena comida» junto a Jiefangbei: brochetas, wontons picantes chaoshou, tangyuan de arroz glutinoso y postres helados.', 'Picotea: una ración para dos y al siguiente puesto.'],
      de: ['Snackstraße Bayi', 'Die „Straße des guten Essens“ bei Jiefangbei: Spieße, scharfe Chaoshou-Wantans, Klebreisbällchen Tangyuan und Eisdesserts.', 'Häppchenweise: eine Portion teilen und weiter zum nächsten Stand.'],
      fr: ['Rue des snacks Bayi', 'La « rue de la bonne bouffe » près de Jiefangbei : brochettes, wontons épicés chaoshou, boulettes tangyuan et desserts glacés.', 'Grignotez : une portion à deux, puis le stand suivant.'],
      it: ['Via degli snack Bayi', 'La «via del buon cibo» vicino a Jiefangbei: spiedini, wonton piccanti chaoshou, palline di riso tangyuan e dolci ghiacciati.', 'Assaggia: una porzione in due e poi al banco successivo.'],
    }, { price: level(1), menu: [
      ['Hongyou chaoshou', undefined, 'вонтоны в остром красном масле|wontons in red chilli oil|wontons en aceite de chile|Wantans in rotem Chiliöl|wontons à l’huile pimentée|wonton in olio di peperoncino'],
      ['Tangyuan', undefined, 'клейкие рисовые шарики с начинкой|filled glutinous rice balls|bolitas de arroz glutinoso rellenas|gefüllte Klebreisbällchen|boulettes de riz gluant fourrées|palline di riso glutinoso ripiene'],
      ['Skewers', undefined, 'шашлычки|skewers|brochetas|Spieße|brochettes|spiedini'],
    ] }),
    P('chen-mahua', 'food', 29.5795, 106.452, STREET, 4.2, 6900, ['food', 'shopping'], {
      ru: ['Чэнь Махуа в Цыцикоу', 'Самый известный бренд махуа — хрустящих жгутиков из теста — в старом городе Цыцикоу; вкусы от сладкого до мала, остро-онемелого.', 'Попробуйте вкус «мала» — он неожиданно хорош к чаю.'],
      en: ['Chen Mahua at Ciqikou', 'The best-known brand of mahua — crunchy twisted dough sticks — in Ciqikou old town; flavours from sweet to mala, spicy and numbing.', 'Try the mala flavour — surprisingly good with tea.'],
      es: ['Chen Mahua en Ciqikou', 'La marca más conocida de mahua, trenzas crujientes de masa, en el pueblo antiguo de Ciqikou; sabores de dulce a mala, picante y adormecedor.', 'Prueba el sabor mala: va sorprendentemente bien con el té.'],
      de: ['Chen Mahua in Ciqikou', 'Die bekannteste Marke für Mahua – knusprige gedrehte Teigstangen – in der Altstadt Ciqikou; von süß bis Mala, scharf und betäubend.', 'Die Mala-Sorte probieren – überraschend gut zum Tee.'],
      fr: ['Chen Mahua à Ciqikou', 'La marque de mahua la plus connue — torsades de pâte croustillantes — dans le vieux bourg de Ciqikou ; du sucré au mala, piquant et engourdissant.', 'Goûtez le mala : étonnamment bon avec le thé.'],
      it: ['Chen Mahua a Ciqikou', 'Il marchio più noto di mahua, treccine croccanti di pasta, nella città vecchia di Ciqikou; gusti dal dolce al mala, piccante e formicolante.', 'Prova il gusto mala: sorprendentemente buono col tè.'],
    }, { price: level(1), menu: [
      ['Mahua', undefined, 'хрустящие жгутики из теста|crunchy twisted dough sticks|trenzas de masa crujientes|knusprige Teigzöpfe|torsades de pâte croustillantes|treccine di pasta croccanti'],
      ['Mala mahua', undefined, 'махуа со вкусом «мала»|mala-flavoured mahua|mahua sabor mala|Mahua mit Mala-Geschmack|mahua au goût mala|mahua al gusto mala'],
    ] }),
    P('yangji-longfu', 'food', 29.576, 106.531, NEON, 4.4, 9800, ['food'], {
      ru: ['Янцзи Лунфу', 'Популярный ресторан чунцинской кухни с интерьером в стиле старого города — хорошее место, чтобы попробовать местные блюда без хого.', 'Зовите компанию: блюда большие, их удобно делить на всех.'],
      en: ['Yangji Longfu', 'A popular Chongqing-cuisine restaurant with an old-town-style interior — a good place to try local dishes beyond hotpot.', 'Bring a group: dishes are big and made for sharing.'],
      es: ['Yangji Longfu', 'Un popular restaurante de cocina de Chongqing con interiorismo de ciudad antigua, buen sitio para probar platos locales más allá del hotpot.', 'Ve en grupo: los platos son grandes y para compartir.'],
      de: ['Yangji Longfu', 'Ein beliebtes Restaurant mit Chongqing-Küche im Altstadt-Stil – gut, um lokale Gerichte jenseits des Hotpots zu probieren.', 'In der Gruppe kommen: große Gerichte zum Teilen.'],
      fr: ['Yangji Longfu', 'Un restaurant populaire de cuisine de Chongqing au décor de vieille ville, idéal pour goûter les plats locaux au-delà de la fondue.', 'Venez en groupe : les plats sont copieux et à partager.'],
      it: ['Yangji Longfu', 'Un popolare ristorante di cucina di Chongqing con interni in stile città vecchia, ottimo per provare piatti locali oltre all’hotpot.', 'Vieni in gruppo: i piatti sono grandi e da condividere.'],
    }, { price: level(2) }),
    P('air-raid-hotpot', 'food', 29.558, 106.57, CAVE, 4.3, 4200, ['food', 'history'], {
      ru: ['Хого в бомбоубежище', 'Во время войны 1938–1943 годов Чунцин изрыли бомбоубежищами; теперь в некоторых тоннелях работают хого-рестораны — прохладно и атмосферно.', 'Летом в тоннеле прохладнее, чем на улице, — отличный способ спастись от жары.'],
      en: ['Hotpot in an air-raid shelter', 'During the bombing of 1938–1943 Chongqing was riddled with shelters; today some tunnels house hotpot restaurants — cool and atmospheric.', 'In summer the tunnel is cooler than the street — a great escape from the heat.'],
      es: ['Hotpot en un refugio antiaéreo', 'Durante los bombardeos de 1938–1943 Chongqing se llenó de refugios; hoy algunos túneles albergan restaurantes de hotpot, frescos y con ambiente.', 'En verano el túnel está más fresco que la calle: buena escapada del calor.'],
      de: ['Hotpot im Luftschutzbunker', 'Während der Bombardierungen 1938–1943 wurde Chongqing von Bunkern durchzogen; heute sind in manchen Tunneln Hotpot-Lokale – kühl und stimmungsvoll.', 'Im Sommer ist es im Tunnel kühler als draußen – eine gute Flucht vor der Hitze.'],
      fr: ['Fondue dans un abri antiaérien', 'Pendant les bombardements de 1938–1943, Chongqing s’est couverte d’abris ; aujourd’hui certains tunnels abritent des restaurants de fondue, frais et pleins d’ambiance.', 'L’été, le tunnel est plus frais que la rue : idéal pour fuir la chaleur.'],
      it: ['Hotpot in un rifugio antiaereo', 'Durante i bombardamenti del 1938–1943 Chongqing si riempì di rifugi; oggi in alcuni tunnel ci sono ristoranti di hotpot, freschi e suggestivi.', 'D’estate nel tunnel fa più fresco che in strada: ottima fuga dal caldo.'],
    }, { spot: 'hidden', price: level(2), menu: [
      ['Mala hotpot', undefined, 'острый хого мала|mala hotpot|hotpot mala|Mala-Hotpot|fondue mala|hotpot mala'],
      ['Máodǔ', undefined, 'говяжий рубец|beef tripe|callos de ternera|Rinderpansen|panse de bœuf|trippa di manzo'],
    ] }),
    P('gele-laziji', 'food', 29.565, 106.405, STREET, 4.2, 3800, ['food'], {
      ru: ['Лацзыцзи на горе Гэлэшань', 'Гора Гэлэшань — родина лацзыцзи: кусочки жареной курицы, спрятанные в горе сушёного перца и сычуаньского перца; вдоль дороги много ресторанов.', 'Перец не едят — ищите в нём кусочки курицы палочками.'],
      en: ['Laziji on Gele Mountain', 'Gele Mountain is the birthplace of laziji: crispy chicken bits hidden in a heap of dried chillies and Sichuan pepper; the road is lined with restaurants.', 'You don’t eat the chillies — fish out the chicken with chopsticks.'],
      es: ['Laziji en el monte Gele', 'El monte Gele es la cuna del laziji: trocitos de pollo crujiente escondidos en un montón de guindillas secas y pimienta de Sichuan; hay muchos restaurantes en la carretera.', 'Las guindillas no se comen: busca el pollo con palillos.'],
      de: ['Laziji am Gele-Berg', 'Der Gele-Berg ist die Heimat des Laziji: knusprige Hühnerstückchen in einem Berg aus getrockneten Chilis und Sichuanpfeffer; entlang der Straße viele Lokale.', 'Die Chilis isst man nicht – das Huhn mit Stäbchen herausfischen.'],
      fr: ['Laziji au mont Gele', 'Le mont Gele est le berceau du laziji : bouchées de poulet croustillant cachées dans un tas de piments secs et de poivre du Sichuan ; la route est bordée de restaurants.', 'On ne mange pas les piments : repêchez le poulet avec les baguettes.'],
      it: ['Laziji sul monte Gele', 'Il monte Gele è la culla del laziji: bocconcini di pollo croccante nascosti in un mucchio di peperoncini secchi e pepe di Sichuan; lungo la strada molti ristoranti.', 'I peperoncini non si mangiano: pesca il pollo con le bacchette.'],
    }, { price: level(2), menu: [
      ['Laziji', undefined, 'курица в горе сушёного перца|chicken in a heap of dried chillies|pollo entre guindillas secas|Huhn im Chiliberg|poulet dans une montagne de piments|pollo tra i peperoncini secchi'],
      ['Maoxuewang', undefined, 'маосюэван — острое рагу с кровяным тофу|maoxuewang — spicy stew with blood tofu|maoxuewang, guiso picante con tofu de sangre|Maoxuewang – scharfer Eintopf mit Bluttofu|maoxuewang, ragoût épicé au tofu de sang|maoxuewang, stufato piccante con tofu di sangue'],
    ] }),
  ],
  routes: [
    D(['huashi-wanza', 'jiefangbei', 'shancheng-alley', 'yangtze-cableway', 'bayi-food-street', 'chaotianmen', 'hongyadong', 'peijie-hotpot'],
      'Полуостров Юйчжун: лапша, канатная дорога и огни Хунъядуна|The Yuzhong peninsula: noodles, the cableway and Hongyadong’s lights|La península de Yuzhong: fideos, teleférico y las luces de Hongyadong|Halbinsel Yuzhong: Nudeln, Seilbahn und die Lichter von Hongyadong|La péninsule de Yuzhong : nouilles, téléphérique et lumières de Hongyadong|La penisola di Yuzhong: noodle, funivia e le luci di Hongyadong'),
    D(['pangmei-noodles', 'three-gorges-museum', 'great-hall', 'haoyoulai', 'liziba-monorail', 'eling-park', 'ciqikou', 'chen-mahua', 'gele-laziji'],
      'Музей Трёх ущелий, монорельс сквозь дом и Цыцикоу|The Three Gorges Museum, the monorail through a building and Ciqikou|El Museo de las Tres Gargantas, el monorraíl que cruza un edificio y Ciqikou|Drei-Schluchten-Museum, die Bahn durchs Haus und Ciqikou|Le musée des Trois-Gorges, le monorail à travers l’immeuble et Ciqikou|Il Museo delle Tre Gole, la monorotaia nel palazzo e Ciqikou'),
    D(['dazu-rock-carvings', 'yangji-longfu', 'nanshan-viewpoint', 'air-raid-hotpot'],
      'Рельефы Дацзу и ночной Чунцин с горы Наньшань|The Dazu carvings and night-time Chongqing from Nanshan|Las tallas de Dazu y Chongqing de noche desde Nanshan|Die Dazu-Skulpturen und Chongqing bei Nacht vom Nanshan|Les sculptures de Dazu et Chongqing la nuit depuis le Nanshan|Le sculture di Dazu e Chongqing di notte dal Nanshan'),
  ],
};

export default pack;
