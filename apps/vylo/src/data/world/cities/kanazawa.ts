import type { CityPack } from '../types';
import { free, level, makeDay, makePlace } from './_kit.ts';

const P = makePlace('kanazawa');
const D = makeDay('kanazawa');
const LAKE = 'JZLRYpmlXN8';
const BRIDGE = 'orxRf0zkve8';
const HOUSE = 'Ceoe097UzzQ';
const MARKET = 'wq1WKhJBvqA';
const STREET = 'DUVv9W2mfSI';

const pack: CityPack = {
  country: 'JP',
  city: 'kanazawa',
  places: [
    P('kenrokuen', 'nature', 36.5621, 136.6626, LAKE, 4.7, 38000, ['gardens', 'history', 'photo'], {
      ru: ['Кэнрокуэн', 'Один из трёх великих садов Японии: пруды, мостики, каменный фонарь Котодзи на двух ножках и вековые сосны.', 'С ноября по март сосны подвязывают верёвками «юкицури», чтобы ветви не ломались под снегом, — это символ зимней Канадзавы.'],
      en: ['Kenroku-en', 'One of Japan’s three great gardens: ponds, little bridges, the two-legged Kotoji stone lantern and ancient pines.', 'From November to March the pines are tied with “yukitsuri” ropes so snow won’t snap the branches — Kanazawa’s winter symbol.'],
      es: ['Kenroku-en', 'Uno de los tres grandes jardines de Japón: estanques, puentecillos, la linterna de piedra Kotoji de dos patas y pinos centenarios.', 'De noviembre a marzo atan los pinos con cuerdas «yukitsuri» para que la nieve no rompa las ramas: el símbolo del invierno en Kanazawa.'],
      de: ['Kenroku-en', 'Einer der drei großen Gärten Japans: Teiche, Brückchen, die zweibeinige Steinlaterne Kotoji und uralte Kiefern.', 'Von November bis März werden die Kiefern mit „Yukitsuri“-Seilen gestützt, damit Schnee die Äste nicht bricht – Kanazawas Wintersymbol.'],
      fr: ['Kenroku-en', 'L’un des trois grands jardins du Japon : étangs, petits ponts, la lanterne de pierre Kotoji à deux pieds et des pins séculaires.', 'De novembre à mars, les pins sont haubanés de cordes « yukitsuri » pour que la neige ne casse pas les branches : le symbole de l’hiver à Kanazawa.'],
      it: ['Kenroku-en', 'Uno dei tre grandi giardini del Giappone: stagni, ponticelli, la lanterna di pietra Kotoji a due piedi e pini secolari.', 'Da novembre a marzo i pini vengono legati con le funi «yukitsuri» perché la neve non spezzi i rami: il simbolo dell’inverno a Kanazawa.'],
    }, { spot: 'insta', price: level(1) }),
    P('kanazawa-castle', 'attraction', 36.565, 136.6597, HOUSE, 4.4, 19000, ['castles', 'history', 'gardens'], {
      ru: ['Парк замка Канадзава', 'Бывший замок клана Маэда: ворота Исикава-мон, восстановленные башни Хиси-ягура со светлыми стенами и сад Гёкусэн-инмару.', 'Парк бесплатный; платно — только вход внутрь восстановленных построек.'],
      en: ['Kanazawa Castle Park', 'The former Maeda clan castle: the Ishikawa-mon gate, the rebuilt pale-walled Hishi Yagura turrets and Gyokusen-inmaru garden.', 'The park is free; only the rebuilt interiors charge a fee.'],
      es: ['Parque del Castillo de Kanazawa', 'El antiguo castillo del clan Maeda: la puerta Ishikawa-mon, las torres reconstruidas Hishi Yagura de muros claros y el jardín Gyokusen-inmaru.', 'El parque es gratis; solo se paga por entrar en los edificios reconstruidos.'],
      de: ['Burgpark Kanazawa', 'Die einstige Burg des Maeda-Clans: das Ishikawa-mon-Tor, die wiederaufgebauten hellen Hishi-Yagura-Türme und der Gyokusen-inmaru-Garten.', 'Der Park ist frei; nur die rekonstruierten Innenräume kosten Eintritt.'],
      fr: ['Parc du château de Kanazawa', 'L’ancien château du clan Maeda : la porte Ishikawa-mon, les tourelles reconstruites Hishi Yagura aux murs clairs et le jardin Gyokusen-inmaru.', 'Le parc est gratuit ; seuls les intérieurs reconstruits sont payants.'],
      it: ['Parco del castello di Kanazawa', 'L’antico castello del clan Maeda: la porta Ishikawa-mon, le torrette ricostruite Hishi Yagura dalle pareti chiare e il giardino Gyokusen-inmaru.', 'Il parco è gratuito; si pagano solo gli interni ricostruiti.'],
    }, { price: free }),
    P('higashi-chaya', 'attraction', 36.5726, 136.6667, STREET, 4.5, 31000, ['oldtown', 'history', 'culture'], {
      ru: ['Хигаси-Тяя', 'Квартал гейш 1820 года с деревянными чайными домами и решётками; чайный дом Сима открыт как музей.', 'Приходите рано утром или вечером — днём улица забита туристами.'],
      en: ['Higashi Chaya', 'An 1820 geisha district of wooden lattice-fronted teahouses; the Shima teahouse is open as a museum.', 'Come early morning or in the evening — by day the street is packed.'],
      es: ['Higashi Chaya', 'Un barrio de geishas de 1820 con casas de té de madera y celosías; la casa Shima abre como museo.', 'Ve temprano o al anochecer: de día la calle está abarrotada.'],
      de: ['Higashi Chaya', 'Ein Geisha-Viertel von 1820 mit hölzernen Teehäusern und Gitterfassaden; das Teehaus Shima ist als Museum geöffnet.', 'Früh morgens oder abends kommen – tagsüber ist die Straße voll.'],
      fr: ['Higashi Chaya', 'Un quartier de geishas de 1820 aux maisons de thé en bois et treillis ; la maison Shima se visite comme musée.', 'Venez tôt le matin ou le soir : en journée, la rue est bondée.'],
      it: ['Higashi Chaya', 'Un quartiere di geishe del 1820 con case da tè in legno e grate; la casa da tè Shima è aperta come museo.', 'Vieni al mattino presto o la sera: di giorno la via è affollata.'],
    }, { spot: 'insta', price: free }),
    P('21st-century-museum', 'attraction', 36.5608, 136.6582, HOUSE, 4.4, 24000, ['art', 'museums', 'architecture'], {
      ru: ['Музей современного искусства XXI века', 'Круглое стеклянное здание бюро SANAA с «Бассейном» Леандро Эрлиха, где люди будто стоят под водой.', 'Чтобы спуститься «под воду» бассейна, нужен билет на выставку; посмотреть сверху можно бесплатно.'],
      en: ['21st Century Museum of Contemporary Art', 'SANAA’s round glass building with Leandro Erlich’s “Swimming Pool”, where people seem to stand underwater.', 'Going “under” the pool needs an exhibition ticket; looking from above is free.'],
      es: ['Museo de Arte Contemporáneo del Siglo XXI', 'El edificio circular de cristal de SANAA con la «Piscina» de Leandro Erlich, donde la gente parece estar bajo el agua.', 'Para bajar «bajo el agua» hace falta entrada a la exposición; verla desde arriba es gratis.'],
      de: ['21st Century Museum of Contemporary Art', 'SANAAs runder Glasbau mit Leandro Erlichs „Swimming Pool“, in dem Menschen unter Wasser zu stehen scheinen.', 'Um „unter“ den Pool zu gehen, braucht man ein Ausstellungsticket; von oben schauen ist frei.'],
      fr: ['Musée d’art contemporain du XXIe siècle', 'Le bâtiment de verre circulaire de SANAA avec la « Piscine » de Leandro Erlich, où les gens semblent sous l’eau.', 'Descendre « sous » la piscine exige un billet d’exposition ; la voir d’en haut est gratuit.'],
      it: ['Museo d’arte contemporanea del XXI secolo', 'L’edificio circolare di vetro di SANAA con la «Piscina» di Leandro Erlich, dove la gente sembra stare sott’acqua.', 'Per scendere «sotto» la piscina serve il biglietto della mostra; da sopra si guarda gratis.'],
    }, { spot: 'insta', price: level(1), address: '1-2-1 Hirosaka' }),
    P('nagamachi', 'attraction', 36.5626, 136.6503, STREET, 4.4, 12000, ['history', 'oldtown'], {
      ru: ['Нагамати (квартал самураев)', 'Улочки с глиняными стенами и каналами, где жили самураи клана Маэда; в доме Номура — маленький сад.', 'Зимой стены укрывают соломенными циновками «комо» — красиво и фотогенично.'],
      en: ['Nagamachi samurai district', 'Lanes of earthen walls and canals where Maeda samurai lived; the Nomura house has a small jewel of a garden.', 'In winter the walls are wrapped in straw “komo” mats — pretty and photogenic.'],
      es: ['Nagamachi, barrio samurái', 'Callejas de muros de barro y canales donde vivían los samuráis Maeda; la casa Nomura tiene un pequeño jardín precioso.', 'En invierno cubren los muros con esteras de paja «komo»: muy fotogénico.'],
      de: ['Samuraiviertel Nagamachi', 'Gassen mit Lehmmauern und Kanälen, in denen Maeda-Samurai lebten; das Haus Nomura hat einen kleinen Juwelengarten.', 'Im Winter werden die Mauern mit Strohmatten („Komo“) umhüllt – sehr fotogen.'],
      fr: ['Quartier samouraï de Nagamachi', 'Des ruelles de murs en terre et de canaux où vivaient les samouraïs Maeda ; la maison Nomura a un petit jardin bijou.', 'L’hiver, les murs sont protégés par des nattes de paille « komo » : très photogénique.'],
      it: ['Quartiere samurai di Nagamachi', 'Vicoli di mura di terra e canali dove vivevano i samurai Maeda; la casa Nomura ha un piccolo giardino gioiello.', 'D’inverno le mura vengono avvolte in stuoie di paglia «komo»: molto fotogenico.'],
    }, { price: free }),
    P('myoryuji', 'attraction', 36.5545, 136.651, HOUSE, 4.4, 6100, ['temples', 'history'], {
      ru: ['Мёрю-дзи («храм ниндзя»)', 'Храм XVII века с ловушками, потайными лестницами и ложными дверями — на случай нападения на правителя.', 'Пускают только на экскурсии по записи — бронируйте заранее по телефону или онлайн.'],
      en: ['Myōryū-ji (“Ninja Temple”)', 'A 17th-century temple full of traps, hidden staircases and false doors in case the lord was attacked.', 'Entry is by guided tour only — book ahead by phone or online.'],
      es: ['Myōryū-ji («templo ninja»)', 'Un templo del siglo XVII lleno de trampas, escaleras ocultas y puertas falsas por si atacaban al señor.', 'Solo se visita en tour guiado: reserva antes por teléfono o en línea.'],
      de: ['Myōryū-ji („Ninja-Tempel“)', 'Ein Tempel aus dem 17. Jh. voller Fallen, versteckter Treppen und falscher Türen für den Fall eines Angriffs auf den Fürsten.', 'Nur mit Führung – vorher telefonisch oder online buchen.'],
      fr: ['Myōryū-ji (« temple ninja »)', 'Un temple du XVIIe siècle truffé de pièges, d’escaliers cachés et de fausses portes en cas d’attaque du seigneur.', 'Visite guidée uniquement : réservez par téléphone ou en ligne.'],
      it: ['Myōryū-ji («tempio ninja»)', 'Un tempio del XVII secolo pieno di trappole, scale nascoste e porte finte in caso di attacco al signore.', 'Solo visite guidate: prenota per telefono o online.'],
    }, { price: level(1) }),
    P('kazuemachi', 'attraction', 36.57, 136.6645, STREET, 4.5, 5600, ['oldtown', 'photo'], {
      ru: ['Кадзуэмати', 'Маленький квартал гейш вдоль реки Асано: ряд деревянных домов у воды, особенно красивый в сумерках.', 'Перейдите мост Накано-хаси — лучший вид на набережную.'],
      en: ['Kazuemachi', 'A small geisha quarter along the Asano River: a row of wooden houses by the water, loveliest at dusk.', 'Cross the Naka-no-hashi bridge for the best view of the riverfront.'],
      es: ['Kazuemachi', 'Un pequeño barrio de geishas junto al río Asano: una hilera de casas de madera junto al agua, preciosa al anochecer.', 'Cruza el puente Naka-no-hashi para la mejor vista de la orilla.'],
      de: ['Kazuemachi', 'Ein kleines Geisha-Viertel am Asano-Fluss: eine Reihe Holzhäuser am Wasser, am schönsten in der Dämmerung.', 'Über die Naka-no-hashi-Brücke gehen – bester Blick aufs Ufer.'],
      fr: ['Kazuemachi', 'Un petit quartier de geishas le long de l’Asano : une rangée de maisons de bois au bord de l’eau, superbe au crépuscule.', 'Traversez le pont Naka-no-hashi pour la plus belle vue sur la rive.'],
      it: ['Kazuemachi', 'Un piccolo quartiere di geishe lungo il fiume Asano: una fila di case di legno sull’acqua, bellissima al tramonto.', 'Attraversa il ponte Naka-no-hashi per la vista migliore sulla riva.'],
    }, { spot: 'insta', price: free }),
    P('nishi-chaya', 'attraction', 36.5545, 136.648, STREET, 4.2, 3900, ['oldtown', 'culture'], {
      ru: ['Ниси-Тяя', 'Самый тихий из трёх кварталов гейш Канадзавы — пара улиц с чайными домами за рекой Сай.', 'Удобно совместить с храмом ниндзя Мёрю-дзи по соседству.'],
      en: ['Nishi Chaya', 'The quietest of Kanazawa’s three geisha quarters — a couple of teahouse streets across the Sai River.', 'Easy to combine with nearby Myōryū-ji, the Ninja Temple.'],
      es: ['Nishi Chaya', 'El más tranquilo de los tres barrios de geishas de Kanazawa: un par de calles de casas de té al otro lado del río Sai.', 'Se combina fácil con el cercano templo ninja Myōryū-ji.'],
      de: ['Nishi Chaya', 'Das ruhigste der drei Geisha-Viertel Kanazawas – ein paar Teehausstraßen jenseits des Sai-Flusses.', 'Gut mit dem nahen Ninja-Tempel Myōryū-ji kombinierbar.'],
      fr: ['Nishi Chaya', 'Le plus calme des trois quartiers de geishas de Kanazawa : deux rues de maisons de thé de l’autre côté de la Sai.', 'Facile à combiner avec le temple ninja Myōryū-ji tout proche.'],
      it: ['Nishi Chaya', 'Il più tranquillo dei tre quartieri di geishe di Kanazawa: un paio di vie di case da tè oltre il fiume Sai.', 'Facile da abbinare al vicino tempio ninja Myōryū-ji.'],
    }, { price: free }),
    P('dt-suzuki-museum', 'attraction', 36.556, 136.662, LAKE, 4.5, 3100, ['museums', 'architecture'], {
      ru: ['Музей Д. Т. Судзуки', 'Минималистичный музей Ёсио Танигути в честь философа, открывшего дзэн Западу; главное — «Сад водного зеркала».', 'Сядьте в павильоне у воды и посидите в тишине — для этого музей и задуман.'],
      en: ['D. T. Suzuki Museum', 'Yoshio Taniguchi’s minimalist museum to the philosopher who introduced Zen to the West; its heart is the Water Mirror Garden.', 'Sit in the pavilion by the water in silence — that’s what it’s designed for.'],
      es: ['Museo D. T. Suzuki', 'El museo minimalista de Yoshio Taniguchi dedicado al filósofo que dio a conocer el zen en Occidente; su corazón es el Jardín Espejo de Agua.', 'Siéntate en silencio en el pabellón junto al agua: para eso está pensado.'],
      de: ['D.-T.-Suzuki-Museum', 'Yoshio Taniguchis minimalistisches Museum für den Philosophen, der den Zen in den Westen brachte; Herzstück ist der Wasserspiegelgarten.', 'Im Pavillon am Wasser still sitzen – dafür ist es gemacht.'],
      fr: ['Musée D. T. Suzuki', 'Le musée minimaliste de Yoshio Taniguchi consacré au philosophe qui fit connaître le zen en Occident ; son cœur est le jardin du Miroir d’eau.', 'Asseyez-vous en silence dans le pavillon au bord de l’eau : il est fait pour cela.'],
      it: ['Museo D. T. Suzuki', 'Il museo minimalista di Yoshio Taniguchi dedicato al filosofo che portò lo zen in Occidente; il cuore è il Giardino dello specchio d’acqua.', 'Siediti in silenzio nel padiglione sull’acqua: è pensato per questo.'],
    }, { spot: 'hidden', price: level(1) }),
    P('oyama-shrine', 'attraction', 36.5653, 136.655, HOUSE, 4.3, 7300, ['temples', 'architecture', 'photo'], {
      ru: ['Святилище Ояма', 'Святилище основателя клана Маэда с необычными воротами 1875 года: голландский проект и витражи наверху.', 'Вечером витражи в воротах подсвечивают.'],
      en: ['Oyama Shrine', 'The shrine of the Maeda clan founder, with an unusual 1875 gate of Dutch design topped by stained glass.', 'In the evening the stained glass in the gate is lit up.'],
      es: ['Santuario Oyama', 'El santuario del fundador del clan Maeda, con una insólita puerta de 1875 de diseño holandés coronada por vidrieras.', 'Por la noche iluminan las vidrieras de la puerta.'],
      de: ['Oyama-Schrein', 'Der Schrein des Maeda-Gründers mit einem ungewöhnlichen Tor von 1875 nach niederländischem Entwurf, oben mit Buntglas.', 'Abends wird das Buntglas im Tor beleuchtet.'],
      fr: ['Sanctuaire Oyama', 'Le sanctuaire du fondateur du clan Maeda, avec une étonnante porte de 1875 de conception hollandaise coiffée de vitraux.', 'Le soir, les vitraux de la porte sont illuminés.'],
      it: ['Santuario Oyama', 'Il santuario del fondatore del clan Maeda, con un’insolita porta del 1875 di progetto olandese sormontata da vetrate.', 'La sera le vetrate della porta vengono illuminate.'],
    }, { spot: 'insta', price: free }),
    P('tsuzumi-gate', 'attraction', 36.578, 136.648, STREET, 4.5, 15000, ['architecture', 'photo'], {
      ru: ['Ворота Цудзуми у вокзала', 'Деревянные ворота в форме барабанов цудзуми и стеклянный купол «Мотэнаси» перед вокзалом Канадзавы.', 'Лучший кадр — снизу между двумя «барабанами».'],
      en: ['Tsuzumi Gate at the station', 'A wooden gate shaped like tsuzumi hand drums and the glass Motenashi dome in front of Kanazawa Station.', 'The best shot is from below, between the two “drums”.'],
      es: ['Puerta Tsuzumi de la estación', 'Una puerta de madera en forma de tambores tsuzumi y la cúpula de cristal Motenashi frente a la estación de Kanazawa.', 'La mejor foto se hace desde abajo, entre los dos «tambores».'],
      de: ['Tsuzumi-Tor am Bahnhof', 'Ein Holztor in Form von Tsuzumi-Handtrommeln und die gläserne Motenashi-Kuppel vor dem Bahnhof Kanazawa.', 'Das beste Foto gelingt von unten zwischen den beiden „Trommeln“.'],
      fr: ['Porte Tsuzumi de la gare', 'Une porte de bois en forme de tambours tsuzumi et le dôme de verre Motenashi devant la gare de Kanazawa.', 'La meilleure photo se prend d’en bas, entre les deux « tambours ».'],
      it: ['Porta Tsuzumi della stazione', 'Una porta di legno a forma di tamburi tsuzumi e la cupola di vetro Motenashi davanti alla stazione di Kanazawa.', 'La foto migliore si scatta dal basso, tra i due «tamburi».'],
    }, { spot: 'insta', price: free }),
    P('yasue-gold-leaf-museum', 'attraction', 36.5741, 136.6632, HOUSE, 4.3, 2400, ['museums', 'art'], {
      ru: ['Музей сусального золота Ясуэ', 'Единственный в Японии музей, посвящённый сусальному золоту: как мастера раскатывают золото до толщины в десятитысячные доли миллиметра.', 'После музея загляните в лавки с золотыми сувенирами в Хигаси-Тяя.'],
      en: ['Yasue Gold Leaf Museum', 'Japan’s only museum devoted to gold leaf: how craftsmen beat gold down to a ten-thousandth of a millimetre.', 'Afterwards browse the gold-leaf shops in Higashi Chaya.'],
      es: ['Museo del Pan de Oro Yasue', 'El único museo de Japón dedicado al pan de oro: cómo los artesanos baten el oro hasta diezmilésimas de milímetro.', 'Después mira las tiendas de pan de oro de Higashi Chaya.'],
      de: ['Yasue-Blattgoldmuseum', 'Japans einziges Museum zum Blattgold: wie Handwerker Gold bis auf Zehntausendstel Millimeter ausschlagen.', 'Danach durch die Blattgoldläden in Higashi Chaya bummeln.'],
      fr: ['Musée de la feuille d’or Yasue', 'Le seul musée du Japon consacré à la feuille d’or : comment les artisans battent l’or jusqu’au dix-millième de millimètre.', 'Ensuite, flânez dans les boutiques de feuille d’or de Higashi Chaya.'],
      it: ['Museo della foglia d’oro Yasue', 'L’unico museo del Giappone dedicato alla foglia d’oro: come gli artigiani battono l’oro fino a decimillesimi di millimetro.', 'Dopo, curiosa nei negozi di foglia d’oro di Higashi Chaya.'],
    }, { price: level(1) }),
    P('utatsuyama-temples', 'attraction', 36.5735, 136.6705, HOUSE, 4.4, 1800, ['temples', 'oldtown'], {
      ru: ['Храмы Утацуяма', 'Тихий храмовый квартал на склоне холма за Хигаси-Тяя: десятки небольших храмов и каменные лестницы.', 'Почти без туристов даже в сезон — спокойная прогулка на час.'],
      en: ['Utatsuyama temple district', 'A quiet hillside temple quarter behind Higashi Chaya: dozens of small temples and stone stairways.', 'Almost no tourists even in high season — a peaceful hour’s walk.'],
      es: ['Templos de Utatsuyama', 'Un tranquilo barrio de templos en la ladera tras Higashi Chaya: decenas de templos pequeños y escaleras de piedra.', 'Casi sin turistas incluso en temporada alta: un paseo sereno de una hora.'],
      de: ['Tempelviertel Utatsuyama', 'Ein stilles Tempelviertel am Hang hinter Higashi Chaya: Dutzende kleine Tempel und Steintreppen.', 'Selbst in der Hochsaison kaum Touristen – ein ruhiger Spaziergang von einer Stunde.'],
      fr: ['Quartier des temples d’Utatsuyama', 'Un paisible quartier de temples à flanc de colline derrière Higashi Chaya : des dizaines de petits temples et d’escaliers de pierre.', 'Presque sans touristes même en haute saison : une heure de promenade sereine.'],
      it: ['Quartiere dei templi di Utatsuyama', 'Un tranquillo quartiere di templi sulla collina dietro Higashi Chaya: decine di piccoli templi e scalinate di pietra.', 'Quasi senza turisti anche in alta stagione: un’ora di passeggiata serena.'],
    }, { price: free }),
    P('natadera', 'attraction', 36.3455, 136.426, BRIDGE, 4.5, 6800, ['temples', 'nature'], {
      ru: ['Храм Ната-дэра', 'Храм, основанный в 717 году, среди причудливых скал с пещерами и лесенками; осенью — море красных клёнов.', 'Едут электричкой до Авадзу и автобусом — закладывайте полдня.'],
      en: ['Natadera Temple', 'A temple founded in 717 among strange rock formations with caves and stairways; in autumn a sea of red maples.', 'Go by train to Awazu then bus — allow half a day.'],
      es: ['Templo Natadera', 'Un templo fundado en 717 entre extrañas formaciones rocosas con cuevas y escaleras; en otoño, un mar de arces rojos.', 'Se va en tren hasta Awazu y luego autobús: reserva medio día.'],
      de: ['Tempel Natadera', 'Ein 717 gegründeter Tempel zwischen bizarren Felsen mit Höhlen und Treppen; im Herbst ein Meer aus rotem Ahorn.', 'Mit dem Zug nach Awazu und dann Bus – einen halben Tag einplanen.'],
      fr: ['Temple Natadera', 'Un temple fondé en 717 parmi d’étranges rochers creusés de grottes et d’escaliers ; à l’automne, une mer d’érables rouges.', 'Train jusqu’à Awazu puis bus : comptez une demi-journée.'],
      it: ['Tempio Natadera', 'Un tempio fondato nel 717 tra strane formazioni rocciose con grotte e scalette; in autunno un mare di aceri rossi.', 'Si va in treno fino ad Awazu e poi in bus: calcola mezza giornata.'],
    }, { spot: 'hidden', price: level(1) }),
    P('omicho-market', 'food', 36.5716, 136.6566, MARKET, 4.3, 29000, ['food', 'market'], {
      ru: ['Рынок Омитё', '«Кухня Канадзавы» с XVIII века: около 170 лавок с крабами, креветками амаэби, устрицами и кафе с кайсэн-доном.', 'Приходите до 11 утра; многие лавки закрываются к 17:00.'],
      en: ['Ōmichō Market', '“Kanazawa’s kitchen” since the 18th century: about 170 stalls of crab, sweet amaebi shrimp and oysters, plus kaisendon cafés.', 'Come before 11 am; many stalls close by 5 pm.'],
      es: ['Mercado Ōmichō', '«La cocina de Kanazawa» desde el siglo XVIII: unos 170 puestos de cangrejo, gamba dulce amaebi y ostras, y cafés de kaisendon.', 'Ve antes de las 11; muchos puestos cierran hacia las 17:00.'],
      de: ['Ōmichō-Markt', '„Kanazawas Küche“ seit dem 18. Jh.: rund 170 Stände mit Krabben, süßen Amaebi-Garnelen, Austern und Kaisendon-Lokalen.', 'Vor 11 Uhr kommen; viele Stände schließen gegen 17 Uhr.'],
      fr: ['Marché Ōmichō', '« La cuisine de Kanazawa » depuis le XVIIIe siècle : environ 170 étals de crabe, crevettes douces amaebi, huîtres et comptoirs de kaisendon.', 'Venez avant 11 h ; beaucoup d’étals ferment vers 17 h.'],
      it: ['Mercato Ōmichō', '«La cucina di Kanazawa» dal XVIII secolo: circa 170 banchi di granchi, gamberi dolci amaebi, ostriche e locali di kaisendon.', 'Vieni prima delle 11; molti banchi chiudono verso le 17.'],
    }, { price: level(2), menu: [
      ['Kaisendon', undefined, 'рис с ассорти морепродуктов|rice bowl with mixed seafood|bol de arroz con marisco variado|Reisschale mit Meeresfrüchten|bol de riz aux fruits de mer|ciotola di riso con frutti di mare misti'],
      ['Grilled oysters', undefined, 'устрицы на гриле|grilled oysters|ostras a la parrilla|gegrillte Austern|huîtres grillées|ostriche alla griglia'],
    ] }),
    P('morimori-sushi', 'food', 36.5712, 136.656, MARKET, 4.3, 7100, ['food'], {
      ru: ['Моримори-суси (Омитё)', 'Кайтэн-суси у рынка Омитё с рыбой Японского моря: нодогуро, амаэби, жёлтохвост бури.', 'Обязательно попробуйте нодогуро — жирного «чёрногорлого» окуня.'],
      en: ['Morimori Sushi (Ōmichō)', 'Conveyor-belt sushi by Ōmichō Market with Sea of Japan fish: nodoguro, amaebi, buri yellowtail.', 'Don’t miss nodoguro — the rich “blackthroat” sea perch.'],
      es: ['Morimori Sushi (Ōmichō)', 'Sushi en cinta junto al mercado Ōmichō con pescado del mar de Japón: nodoguro, amaebi, buri.', 'No te pierdas el nodoguro, la grasa «perca de garganta negra».'],
      de: ['Morimori Sushi (Ōmichō)', 'Laufband-Sushi am Ōmichō-Markt mit Fisch aus dem Japanischen Meer: Nodoguro, Amaebi, Buri-Gelbschwanz.', 'Nodoguro probieren – den fetten „Schwarzkehl“-Barsch.'],
      fr: ['Morimori Sushi (Ōmichō)', 'Sushis sur tapis près du marché Ōmichō, poissons de la mer du Japon : nodoguro, amaebi, sériole buri.', 'Ne manquez pas le nodoguro, la perche « gorge noire » si grasse.'],
      it: ['Morimori Sushi (Ōmichō)', 'Sushi al nastro vicino al mercato Ōmichō con pesce del Mar del Giappone: nodoguro, amaebi, ricciola buri.', 'Non perdere il nodoguro, il grasso persico «gola nera».'],
    }, { price: level(2), menu: [
      ['Nodoguro nigiri', undefined, 'нигири с нодогуро|blackthroat seaperch nigiri|nigiri de nodoguro|Nodoguro-Nigiri|nigiri de nodoguro|nigiri di nodoguro'],
      ['Amaebi', undefined, 'сладкие креветки|sweet shrimp|gamba dulce|süße Garnelen|crevettes douces|gamberi dolci'],
    ] }),
    P('akadama-oden', 'food', 36.559, 136.654, STREET, 4.3, 2300, ['food', 'nightlife'], {
      ru: ['Акадама (оден)', 'Старинная оден-лавка в Катамати (с 1927 года): канадзавский оден с ракушками бай, кругляшами из рыбы и «кани-мэн» — крабом в панцире.', 'Кани-мэн бывает только зимой, в сезон крабов.'],
      en: ['Akadama (oden)', 'A long-running oden house in Katamachi (since 1927): Kanazawa-style oden with bai whelks, fish cakes and “kani-men” — crab in its shell.', 'Kani-men appears only in winter, during crab season.'],
      es: ['Akadama (oden)', 'Una veterana casa de oden en Katamachi (desde 1927): oden de Kanazawa con caracolas bai, pasteles de pescado y «kani-men», cangrejo en su caparazón.', 'El kani-men solo aparece en invierno, en temporada de cangrejo.'],
      de: ['Akadama (Oden)', 'Ein altes Oden-Lokal in Katamachi (seit 1927): Oden nach Kanazawa-Art mit Bai-Wellhornschnecken, Fischkuchen und „Kani-men“ – Krabbe in der Schale.', 'Kani-men gibt es nur im Winter, zur Krabbensaison.'],
      fr: ['Akadama (oden)', 'Une maison d’oden de Katamachi (depuis 1927) : oden de Kanazawa aux bulots bai, galettes de poisson et « kani-men », crabe dans sa carapace.', 'Le kani-men n’apparaît qu’en hiver, à la saison du crabe.'],
      it: ['Akadama (oden)', 'Una storica casa di oden a Katamachi (dal 1927): oden di Kanazawa con lumache bai, polpette di pesce e «kani-men», granchio nel guscio.', 'Il kani-men c’è solo d’inverno, nella stagione dei granchi.'],
    }, { price: level(2), menu: [
      ['Kanazawa oden', undefined, 'ассорти одена на бульоне|assorted oden in broth|surtido de oden en caldo|gemischtes Oden in Brühe|assortiment d’oden au bouillon|oden misto in brodo'],
      ['Kani-men', undefined, 'краб в панцире (зимой)|crab served in its shell (winter)|cangrejo en su caparazón (invierno)|Krabbe in der Schale (Winter)|crabe dans sa carapace (hiver)|granchio nel guscio (inverno)'],
    ] }),
    P('kuroyuri-oden', 'food', 36.5778, 136.648, STREET, 4.2, 3400, ['food'], {
      ru: ['Куроюри (вокзал)', 'Оден-бар в торговой галерее вокзала Канадзавы: тот же местный оден, удобно перед поездом.', 'Возьмите сет с оденом и рисом — быстрый и сытный обед.'],
      en: ['Kuroyuri (station)', 'An oden bar in the Kanazawa Station arcade: the same local oden, handy before a train.', 'Get the set with oden and rice — a quick, filling lunch.'],
      es: ['Kuroyuri (estación)', 'Un bar de oden en la galería de la estación de Kanazawa: el mismo oden local, práctico antes del tren.', 'Pide el menú con oden y arroz: comida rápida y contundente.'],
      de: ['Kuroyuri (Bahnhof)', 'Eine Oden-Bar in der Bahnhofspassage von Kanazawa: dasselbe lokale Oden, praktisch vor dem Zug.', 'Das Set mit Oden und Reis nehmen – schnell und sättigend.'],
      fr: ['Kuroyuri (gare)', 'Un bar à oden dans la galerie de la gare de Kanazawa : le même oden local, pratique avant le train.', 'Prenez le menu oden et riz : rapide et copieux.'],
      it: ['Kuroyuri (stazione)', 'Un bar di oden nella galleria della stazione di Kanazawa: lo stesso oden locale, comodo prima del treno.', 'Prendi il set con oden e riso: veloce e sostanzioso.'],
    }, { price: level(1), address: 'Kanazawa Station, Anto', menu: [
      ['Oden set', undefined, 'сет одена с рисом|oden set with rice|menú de oden con arroz|Oden-Set mit Reis|menu oden et riz|set di oden con riso'],
      ['Bai-gai', undefined, 'ракушка бай в бульоне|bai whelk in broth|caracola bai en caldo|Bai-Schnecke in Brühe|bulot bai au bouillon|lumaca bai in brodo'],
    ] }),
    P('champion-curry', 'food', 36.5768, 136.642, STREET, 4.1, 3100, ['food'], {
      ru: ['Champion’s Curry', 'Сеть канадзавского карри с 1961 года: густой тёмный соус на стальной тарелке, котлета и капуста; едят вилкой.', 'Это местная «народная» еда — быстро, сытно и недорого.'],
      en: ['Champion’s Curry', 'A Kanazawa-curry chain since 1961: thick dark sauce on a steel plate with a cutlet and shredded cabbage, eaten with a fork.', 'A local comfort food — quick, filling and cheap.'],
      es: ['Champion’s Curry', 'Una cadena de curry de Kanazawa desde 1961: salsa espesa y oscura en plato de acero con filete empanado y col, se come con tenedor.', 'Comida popular local: rápida, contundente y barata.'],
      de: ['Champion’s Curry', 'Eine Kanazawa-Curry-Kette seit 1961: dicke dunkle Soße auf Stahlteller mit Schnitzel und Kohl, mit der Gabel gegessen.', 'Lokales Wohlfühlessen – schnell, sättigend und günstig.'],
      fr: ['Champion’s Curry', 'Une chaîne de curry de Kanazawa depuis 1961 : sauce épaisse et sombre sur assiette en acier, escalope et chou râpé, à la fourchette.', 'Un plat réconfortant local : rapide, copieux et bon marché.'],
      it: ['Champion’s Curry', 'Una catena di curry di Kanazawa dal 1961: salsa densa e scura su piatto d’acciaio con cotoletta e cavolo, da mangiare con la forchetta.', 'Cibo locale di conforto: veloce, sostanzioso ed economico.'],
    }, { price: level(1), menu: [
      ['L-size katsu curry', undefined, 'карри с котлетой|curry with pork cutlet|curry con filete empanado|Curry mit Schnitzel|curry à l’escalope panée|curry con cotoletta'],
      ['Sausage curry', undefined, 'карри с сосисками|curry with sausages|curry con salchichas|Curry mit Würstchen|curry aux saucisses|curry con salsicce'],
    ] }),
    P('jiyuken-kanazawa', 'food', 36.572, 136.666, STREET, 4.2, 1900, ['food', 'history'], {
      ru: ['Дзиюкэн (Хигаси-Тяя)', 'Западная кухня в квартале гейш с 1909 года: омурайсу, рис с говядиной в демиглясе и котлеты.', 'Хороший недорогой обед посреди прогулки по Хигаси-Тяя.'],
      en: ['Jiyuken (Higashi Chaya)', 'Western-style cooking in the geisha quarter since 1909: omurice, hayashi rice and cutlets.', 'A good, inexpensive lunch midway through Higashi Chaya.'],
      es: ['Jiyuken (Higashi Chaya)', 'Cocina de estilo occidental en el barrio de geishas desde 1909: omurice, hayashi rice y filetes empanados.', 'Un buen almuerzo barato a mitad de Higashi Chaya.'],
      de: ['Jiyuken (Higashi Chaya)', 'Westlich inspirierte Küche im Geisha-Viertel seit 1909: Omurice, Hayashi-Reis und Schnitzel.', 'Ein gutes, günstiges Mittagessen mitten in Higashi Chaya.'],
      fr: ['Jiyuken (Higashi Chaya)', 'Cuisine à l’occidentale dans le quartier des geishas depuis 1909 : omurice, riz hayashi et escalopes.', 'Un bon déjeuner bon marché au cœur de Higashi Chaya.'],
      it: ['Jiyuken (Higashi Chaya)', 'Cucina all’occidentale nel quartiere delle geishe dal 1909: omurice, riso hayashi e cotolette.', 'Un buon pranzo economico nel mezzo di Higashi Chaya.'],
    }, { price: level(1), menu: [
      ['Omurice', undefined, 'омлет на жареном рисе|omelette over fried rice|tortilla sobre arroz frito|Omelett auf Bratreis|omelette sur riz sauté|frittata su riso saltato'],
      ['Hayashi rice', undefined, 'рис с говядиной в демиглясе|rice with beef in demi-glace|arroz con ternera en demi-glace|Reis mit Rind in Demi-glace|riz au bœuf sauce demi-glace|riso con manzo in demi-glace'],
    ] }),
    P('hakuichi', 'food', 36.5725, 136.667, STREET, 4.3, 6400, ['food', 'photo'], {
      ru: ['Хакуити (мороженое с золотом)', 'Лавка производителя сусального золота в Хигаси-Тяя, где мягкое мороженое накрывают целым листом золота.', 'Ешьте на улице аккуратно — лист легко сдувает ветром.'],
      en: ['Hakuichi (gold-leaf ice cream)', 'A gold-leaf maker’s shop in Higashi Chaya where soft-serve is wrapped in a whole sheet of gold.', 'Eat it carefully outdoors — the breeze can lift the leaf.'],
      es: ['Hakuichi (helado con oro)', 'La tienda de un fabricante de pan de oro en Higashi Chaya donde cubren el helado suave con una lámina entera de oro.', 'Cómelo con cuidado fuera: el viento levanta la lámina.'],
      de: ['Hakuichi (Blattgold-Eis)', 'Der Laden eines Blattgoldherstellers in Higashi Chaya, wo Softeis in ein ganzes Goldblatt gehüllt wird.', 'Draußen vorsichtig essen – der Wind hebt das Blatt leicht an.'],
      fr: ['Hakuichi (glace à la feuille d’or)', 'La boutique d’un fabricant de feuille d’or à Higashi Chaya, où la glace à l’italienne est enveloppée d’une feuille d’or entière.', 'Mangez-la prudemment dehors : le vent soulève la feuille.'],
      it: ['Hakuichi (gelato con foglia d’oro)', 'Il negozio di un produttore di foglia d’oro a Higashi Chaya dove il gelato soft viene avvolto in un intero foglio d’oro.', 'Mangialo con attenzione all’aperto: il vento solleva la foglia.'],
    }, { spot: 'insta', price: level(2), menu: [
      ['Gold-leaf soft-serve', undefined, 'мороженое под листом золота|soft-serve wrapped in gold leaf|helado suave cubierto de oro|Softeis in Blattgold|glace à l’italienne à la feuille d’or|gelato soft avvolto nella foglia d’oro'],
      ['Matcha with gold', undefined, 'маття с золотыми хлопьями|matcha with gold flakes|matcha con copos de oro|Matcha mit Goldflocken|matcha aux paillettes d’or|matcha con scaglie d’oro'],
    ] }),
    P('morihachi', 'food', 36.5705, 136.66, HOUSE, 4.4, 1500, ['food', 'history'], {
      ru: ['Морихати', 'Кондитерский дом с 1625 года, поставлявший сладости клану Маэда; знаменит прессованными сухими сладостями «Тёсэйдэн».', 'В чайной при магазине подают маття с сезонной вагаси.'],
      en: ['Morihachi', 'A confectioner since 1625 that supplied the Maeda clan, famous for its pressed dry sweets “Chōseiden”.', 'The shop’s tea room serves matcha with a seasonal wagashi.'],
      es: ['Morihachi', 'Una confitería desde 1625 que abastecía al clan Maeda, famosa por sus dulces secos prensados «Chōseiden».', 'En su salón de té sirven matcha con un wagashi de temporada.'],
      de: ['Morihachi', 'Eine Konditorei seit 1625, Hoflieferant des Maeda-Clans, berühmt für die gepressten Trockensüßigkeiten „Chōseiden“.', 'Im Teeraum des Ladens gibt es Matcha mit saisonalem Wagashi.'],
      fr: ['Morihachi', 'Un confiseur depuis 1625, fournisseur du clan Maeda, célèbre pour ses douceurs sèches pressées « Chōseiden ».', 'Le salon de thé de la boutique sert un matcha avec un wagashi de saison.'],
      it: ['Morihachi', 'Una pasticceria dal 1625, fornitrice del clan Maeda, famosa per i dolci secchi pressati «Chōseiden».', 'Nella sala da tè del negozio servono matcha con un wagashi di stagione.'],
    }, { price: level(1), menu: [
      ['Chōseiden', undefined, 'сухие прессованные сладости|pressed dry sweets|dulces secos prensados|gepresste Trockensüßigkeiten|douceurs sèches pressées|dolci secchi pressati'],
      ['Matcha and namagashi', undefined, 'маття с сезонной сладостью|matcha with a seasonal sweet|matcha con dulce de temporada|Matcha mit Saison-Süßigkeit|matcha et douceur de saison|matcha con dolce di stagione'],
    ] }),
    P('tsubajin', 'food', 36.553, 136.652, LAKE, 4.5, 900, ['food', 'history', 'romance'], {
      ru: ['Цубадзин', 'Рёотэй с 1752 года на холме Тэрамати над рекой Сай: кухня Кага, в том числе дзибуни — утка в густом соусе с клёцками.', 'Бронируйте заранее и просите комнату с видом на реку и горы.'],
      en: ['Tsubajin', 'A ryōtei since 1752 on the Teramachi hill above the Sai River: Kaga cuisine, including jibuni — duck in a thick sauce with dumplings.', 'Book ahead and ask for a room facing the river and mountains.'],
      es: ['Tsubajin', 'Un ryōtei desde 1752 en la colina de Teramachi sobre el río Sai: cocina de Kaga, como el jibuni, pato en salsa espesa con buñuelos.', 'Reserva y pide una sala con vistas al río y las montañas.'],
      de: ['Tsubajin', 'Ein Ryōtei seit 1752 auf dem Teramachi-Hügel über dem Sai: Kaga-Küche, darunter Jibuni – Ente in dicker Soße mit Klößchen.', 'Vorher buchen und nach einem Raum mit Blick auf Fluss und Berge fragen.'],
      fr: ['Tsubajin', 'Un ryōtei depuis 1752 sur la colline de Teramachi au-dessus de la Sai : cuisine de Kaga, dont le jibuni, canard en sauce épaisse avec quenelles.', 'Réservez et demandez une salle face à la rivière et aux montagnes.'],
      it: ['Tsubajin', 'Un ryōtei dal 1752 sulla collina di Teramachi sopra il fiume Sai: cucina di Kaga, tra cui il jibuni, anatra in salsa densa con gnocchetti.', 'Prenota e chiedi una sala con vista su fiume e monti.'],
    }, { price: level(3), menu: [
      ['Jibuni', undefined, 'утка в густом соусе с клёцками|duck in thick sauce with dumplings|pato en salsa espesa con buñuelos|Ente in dicker Soße mit Klößchen|canard en sauce épaisse et quenelles|anatra in salsa densa con gnocchetti'],
      ['Kaga kaiseki', undefined, 'кайсэки кухни Кага|Kaga-style kaiseki|kaiseki de Kaga|Kaiseki nach Kaga-Art|kaiseki de Kaga|kaiseki di Kaga'],
    ] }),
    P('hachiban-ramen', 'food', 36.5772, 136.6475, STREET, 4.0, 2800, ['food'], {
      ru: ['Хатибан рамэн', 'Сеть из Исикавы с 1967 года: рамэн с горой овощей и фирменной рыбной лепёшкой с цифрой «8».', 'Возьмите «ясай-рамэн» на солёном бульоне — классика сети.'],
      en: ['Hachiban Ramen', 'An Ishikawa chain since 1967: ramen piled with vegetables and its signature fish cake marked with an “8”.', 'Order the salt-broth yasai ramen — the chain’s classic.'],
      es: ['Hachiban Ramen', 'Una cadena de Ishikawa desde 1967: ramen con montaña de verduras y su pastelito de pescado con un «8».', 'Pide el yasai ramen de caldo de sal, el clásico de la cadena.'],
      de: ['Hachiban Ramen', 'Eine Kette aus Ishikawa seit 1967: Ramen mit Gemüseberg und dem typischen Fischkuchen mit einer „8“.', 'Yasai-Ramen mit Salzbrühe bestellen – der Klassiker der Kette.'],
      fr: ['Hachiban Ramen', 'Une chaîne d’Ishikawa depuis 1967 : ramen garni de légumes et sa galette de poisson marquée d’un « 8 ».', 'Commandez le yasai ramen au bouillon salé, le classique de la chaîne.'],
      it: ['Hachiban Ramen', 'Una catena di Ishikawa dal 1967: ramen con montagne di verdure e la tipica polpetta di pesce con un «8».', 'Ordina lo yasai ramen al brodo di sale, il classico della catena.'],
    }, { price: level(1), menu: [
      ['Yasai ramen', undefined, 'рамэн с овощами|vegetable ramen|ramen de verduras|Gemüse-Ramen|ramen aux légumes|ramen alle verdure'],
      ['Gyoza', undefined, 'гёдза|gyoza|gyoza|Gyoza|gyoza|gyoza'],
    ] }),
  ],
  routes: [
    D(['kenrokuen', 'kanazawa-castle', 'omicho-market', 'oyama-shrine', 'nagamachi', 'myoryuji', 'nishi-chaya', 'tsubajin'],
      'Кэнрокуэн, замок, рынок Омитё и самураи|Kenroku-en, the castle, Ōmichō Market and the samurai|Kenroku-en, el castillo, el mercado Ōmichō y los samuráis|Kenroku-en, Burg, Ōmichō-Markt und Samurai|Kenroku-en, le château, le marché Ōmichō et les samouraïs|Kenroku-en, il castello, il mercato Ōmichō e i samurai'),
    D(['21st-century-museum', 'dt-suzuki-museum', 'higashi-chaya', 'jiyuken-kanazawa', 'hakuichi', 'kazuemachi', 'morihachi', 'akadama-oden'],
      'Современное искусство, дзэн и кварталы гейш|Contemporary art, Zen and the geisha quarters|Arte contemporáneo, zen y barrios de geishas|Moderne Kunst, Zen und Geisha-Viertel|Art contemporain, zen et quartiers de geishas|Arte contemporanea, zen e quartieri delle geishe'),
    D(['utatsuyama-temples', 'yasue-gold-leaf-museum', 'tsuzumi-gate', 'kuroyuri-oden', 'natadera', 'champion-curry'],
      'Тихие храмы, золото и скалы Ната-дэры|Quiet temples, gold leaf and the rocks of Natadera|Templos tranquilos, pan de oro y las rocas de Natadera|Stille Tempel, Blattgold und die Felsen von Natadera|Temples paisibles, feuille d’or et rochers de Natadera|Templi tranquilli, foglia d’oro e le rocce di Natadera'),
  ],
};

export default pack;
