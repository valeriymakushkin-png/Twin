import type { CityPack } from '../types';
import { free, level, makeDay, makePlace } from './_kit.ts';

const P = makePlace('naha');
const D = makeDay('naha');
const BEACH = 'TobwPjWaBnw';
const STREET = 'RHd0VtC0bLw';
const BRIDGE = 'jdNPbtVP3ok';
const SHURI = 'tR0M8LJ5Dxc';
const SAND = 'oxle6lKEGhk';
const TEMPLE = '1twczdE1zlE';

const pack: CityPack = {
  country: 'JP',
  city: 'naha',
  places: [
    P('shurijo', 'attraction', 26.217, 127.7195, SHURI, 4.4, 32000, ['castles', 'history', 'unesco'], {
      ru: ['Замок Сюри', 'Резиденция королей Рюкю на холме над Нахой, объект ЮНЕСКО; главный зал Сэйдэн, сгоревший в 2019 году, восстановлен и открывается для посетителей 23 ноября 2026 года.', 'Ворота Сюрэймон и стены можно осмотреть бесплатно; на внутренние залы нужен билет.'],
      en: ['Shuri Castle', 'The Ryukyu kings’ residence on a hill above Naha, a UNESCO site; the Seiden main hall, which burned in 2019, has been rebuilt and opens to visitors on 23 November 2026.', 'The Shureimon gate and walls are free to see; the inner halls need a ticket.'],
      es: ['Castillo de Shuri', 'La residencia de los reyes de Ryukyu en una colina sobre Naha, Patrimonio UNESCO; el salón principal Seiden, que ardió en 2019, ha sido reconstruido y abre al público el 23 de noviembre de 2026.', 'La puerta Shureimon y las murallas se ven gratis; los salones interiores requieren entrada.'],
      de: ['Burg Shuri', 'Die Residenz der Ryūkyū-Könige auf einem Hügel über Naha, UNESCO-Welterbe; die 2019 abgebrannte Haupthalle Seiden wurde wiederaufgebaut und öffnet am 23. November 2026 für Besucher.', 'Shureimon-Tor und Mauern sind frei zugänglich; die inneren Hallen kosten Eintritt.'],
      fr: ['Château de Shuri', 'La résidence des rois de Ryūkyū sur une colline dominant Naha, classée à l’UNESCO ; le pavillon principal Seiden, incendié en 2019, a été reconstruit et ouvre au public le 23 novembre 2026.', 'La porte Shureimon et les remparts se visitent librement ; les salles intérieures sont payantes.'],
      it: ['Castello di Shuri', 'La residenza dei re delle Ryukyu su un colle sopra Naha, sito UNESCO; la sala principale Seiden, bruciata nel 2019, è stata ricostruita e apre ai visitatori il 23 novembre 2026.', 'La porta Shureimon e le mura si vedono gratis; le sale interne richiedono il biglietto.'],
    }, { spot: 'insta', price: level(1) }),
    P('kokusai-dori', 'attraction', 26.215, 127.686, STREET, 4.1, 41000, ['shopping', 'nightlife', 'streetfood'], {
      ru: ['Кокусай-дори', 'Главная улица Нахи длиной около 1,6 км: сувениры, ремёсла, бары с живой музыкой и окинавская еда.', 'Самое интересное — в переулках-аркадах, уходящих от улицы к рынку Макиси.'],
      en: ['Kokusai-dōri', 'Naha’s main street, about 1.6 km long: souvenirs, crafts, live-music bars and Okinawan food.', 'The best bits are in the covered arcades branching off towards Makishi market.'],
      es: ['Kokusai-dōri', 'La calle principal de Naha, de unos 1,6 km: recuerdos, artesanía, bares con música en vivo y comida de Okinawa.', 'Lo mejor está en las galerías cubiertas que salen hacia el mercado Makishi.'],
      de: ['Kokusai-dōri', 'Nahas Hauptstraße, rund 1,6 km lang: Souvenirs, Kunsthandwerk, Livemusik-Bars und Okinawa-Küche.', 'Das Beste liegt in den überdachten Arkaden Richtung Makishi-Markt.'],
      fr: ['Kokusai-dōri', 'La grande rue de Naha, longue d’environ 1,6 km : souvenirs, artisanat, bars avec musique live et cuisine d’Okinawa.', 'Le meilleur se trouve dans les galeries couvertes vers le marché Makishi.'],
      it: ['Kokusai-dōri', 'La via principale di Naha, lunga circa 1,6 km: souvenir, artigianato, bar con musica dal vivo e cibo di Okinawa.', 'Il meglio è nelle gallerie coperte che portano al mercato Makishi.'],
    }, { price: free }),
    P('tsuboya-pottery', 'attraction', 26.213, 127.692, STREET, 4.3, 7800, ['art', 'oldtown', 'shopping'], {
      ru: ['Улица гончаров Цубоя', 'Квартал керамики ятимун с 1682 года: мастерские, лавки и музей керамики вдоль мощёной улочки.', 'Сойдите с главной улицы в переулок Цубоя-сугэй — там старые печи и каменные стены.'],
      en: ['Tsuboya Pottery Street', 'A quarter of yachimun ceramics since 1682: workshops, shops and a pottery museum along a stone-paved lane.', 'Step off the main lane into the side alleys to find old kilns and stone walls.'],
      es: ['Calle de la cerámica de Tsuboya', 'Un barrio de cerámica yachimun desde 1682: talleres, tiendas y un museo a lo largo de una calleja empedrada.', 'Métete en los callejones laterales: hay hornos antiguos y muros de piedra.'],
      de: ['Töpferstraße Tsuboya', 'Ein Viertel der Yachimun-Keramik seit 1682: Werkstätten, Läden und ein Keramikmuseum an einer gepflasterten Gasse.', 'In die Seitengassen abbiegen – dort alte Brennöfen und Steinmauern.'],
      fr: ['Rue des potiers de Tsuboya', 'Un quartier de céramique yachimun depuis 1682 : ateliers, boutiques et musée le long d’une ruelle pavée.', 'Prenez les ruelles latérales pour trouver vieux fours et murs de pierre.'],
      it: ['Via della ceramica di Tsuboya', 'Un quartiere della ceramica yachimun dal 1682: botteghe, negozi e un museo lungo un vicolo lastricato.', 'Infilati nei vicoli laterali: forni antichi e muri di pietra.'],
    }, { price: free }),
    P('shikinaen', 'nature', 26.204, 127.714, TEMPLE, 4.5, 6100, ['gardens', 'history', 'unesco'], {
      ru: ['Сад Сикинаэн', 'Загородная вилла королей Рюкю (1799) с садом вокруг пруда, каменными мостами и китайским павильоном; объект ЮНЕСКО.', 'Тихое место без толп — хорошо после замка Сюри.'],
      en: ['Shikinaen Garden', 'The Ryukyu kings’ country villa (1799), with a pond garden, stone bridges and a Chinese pavilion; a UNESCO site.', 'A quiet, uncrowded place — good after Shuri Castle.'],
      es: ['Jardín Shikinaen', 'La villa de recreo de los reyes de Ryukyu (1799), con jardín de estanque, puentes de piedra y un pabellón chino; Patrimonio UNESCO.', 'Un lugar tranquilo y sin gente: ideal tras el castillo de Shuri.'],
      de: ['Shikinaen-Garten', 'Die Landvilla der Ryūkyū-Könige (1799) mit Teichgarten, Steinbrücken und chinesischem Pavillon; UNESCO-Welterbe.', 'Ein ruhiger Ort ohne Gedränge – gut nach der Burg Shuri.'],
      fr: ['Jardin Shikinaen', 'La villa de campagne des rois de Ryūkyū (1799), jardin d’étang, ponts de pierre et pavillon chinois ; site UNESCO.', 'Un lieu calme et peu fréquenté, idéal après le château de Shuri.'],
      it: ['Giardino Shikinaen', 'La villa di campagna dei re delle Ryukyu (1799), con giardino a stagno, ponti di pietra e un padiglione cinese; sito UNESCO.', 'Un luogo tranquillo e poco affollato, ottimo dopo il castello di Shuri.'],
    }, { price: level(1) }),
    P('tamaudun', 'attraction', 26.2185, 127.715, TEMPLE, 4.3, 4200, ['history', 'unesco'], {
      ru: ['Мавзолей Тамаудун', 'Каменный королевский мавзолей Рюкю 1501 года, вырубленный в скале; объект ЮНЕСКО в пяти минутах от замка Сюри.', 'Небольшой музей у входа объясняет погребальные обычаи Окинавы.'],
      en: ['Tamaudun Mausoleum', 'The Ryukyu royal stone mausoleum of 1501, carved into the rock; a UNESCO site five minutes from Shuri Castle.', 'A small museum at the entrance explains Okinawan burial customs.'],
      es: ['Mausoleo Tamaudun', 'El mausoleo real de piedra de Ryukyu de 1501, tallado en la roca; Patrimonio UNESCO a cinco minutos del castillo de Shuri.', 'Un pequeño museo en la entrada explica las costumbres funerarias de Okinawa.'],
      de: ['Mausoleum Tamaudun', 'Das steinerne Königsmausoleum der Ryūkyū von 1501, in den Fels gehauen; UNESCO-Welterbe fünf Minuten von der Burg Shuri.', 'Ein kleines Museum am Eingang erklärt Okinawas Bestattungsbräuche.'],
      fr: ['Mausolée Tamaudun', 'Le mausolée royal de pierre de Ryūkyū (1501), taillé dans la roche ; site UNESCO à cinq minutes du château de Shuri.', 'Un petit musée à l’entrée explique les coutumes funéraires d’Okinawa.'],
      it: ['Mausoleo Tamaudun', 'Il mausoleo reale di pietra delle Ryukyu del 1501, scavato nella roccia; sito UNESCO a cinque minuti dal castello di Shuri.', 'Un piccolo museo all’ingresso spiega le usanze funebri di Okinawa.'],
    }, { price: level(1) }),
    P('naminoue-shrine', 'attraction', 26.2215, 127.672, SAND, 4.4, 9800, ['temples', 'beaches', 'photo'], {
      ru: ['Святилище Наминоуэ', 'Святилище на скале прямо над городским пляжем Наминоуэ — единственным пляжем в Нахе.', 'Лучший кадр — с моста над пляжем: святилище на утёсе над водой.'],
      en: ['Naminoue Shrine', 'A shrine on a cliff right above Naminoue, the only beach in Naha.', 'The best shot is from the bridge above the beach: the shrine on its cliff over the water.'],
      es: ['Santuario Naminoue', 'Un santuario en un acantilado justo encima de Naminoue, la única playa de Naha.', 'La mejor foto se hace desde el puente sobre la playa: el santuario sobre el agua.'],
      de: ['Naminoue-Schrein', 'Ein Schrein auf einer Klippe direkt über Naminoue, dem einzigen Strand Nahas.', 'Das beste Foto von der Brücke über dem Strand: der Schrein auf der Klippe überm Wasser.'],
      fr: ['Sanctuaire Naminoue', 'Un sanctuaire sur une falaise juste au-dessus de Naminoue, la seule plage de Naha.', 'La meilleure photo se prend du pont au-dessus de la plage : le sanctuaire sur sa falaise.'],
      it: ['Santuario Naminoue', 'Un santuario su una scogliera proprio sopra Naminoue, l’unica spiaggia di Naha.', 'La foto migliore è dal ponte sopra la spiaggia: il santuario sulla rupe sull’acqua.'],
    }, { spot: 'insta', price: free }),
    P('fukushuen', 'nature', 26.2175, 127.68, TEMPLE, 4.4, 3700, ['gardens'], {
      ru: ['Сад Фукусюэн', 'Китайский сад 1992 года в честь дружбы Нахи с Фучжоу: пагода, водопад, пруд с карпами и мостики.', 'Вход свободный, а людей обычно мало — тихая пауза в центре.'],
      en: ['Fukushūen Garden', 'A 1992 Chinese garden marking Naha’s friendship with Fuzhou: a pagoda, waterfall, carp pond and bridges.', 'Entry is free and it’s rarely busy — a quiet pause in the centre.'],
      es: ['Jardín Fukushūen', 'Un jardín chino de 1992 por la amistad de Naha con Fuzhou: pagoda, cascada, estanque de carpas y puentes.', 'La entrada es gratis y rara vez hay gente: una pausa tranquila.'],
      de: ['Fukushūen-Garten', 'Ein chinesischer Garten von 1992 zur Freundschaft Nahas mit Fuzhou: Pagode, Wasserfall, Karpfenteich und Brücken.', 'Eintritt frei und selten voll – eine ruhige Pause im Zentrum.'],
      fr: ['Jardin Fukushūen', 'Un jardin chinois de 1992 célébrant l’amitié de Naha avec Fuzhou : pagode, cascade, étang à carpes et ponts.', 'Entrée gratuite et rarement bondé : une pause calme au centre.'],
      it: ['Giardino Fukushūen', 'Un giardino cinese del 1992 per l’amicizia di Naha con Fuzhou: pagoda, cascata, stagno di carpe e ponti.', 'Ingresso gratuito e quasi mai affollato: una pausa tranquilla in centro.'],
    }, { spot: 'hidden', price: free }),
    P('okinawa-prefectural-museum', 'attraction', 26.227, 127.696, TEMPLE, 4.5, 6600, ['museums', 'history', 'art'], {
      ru: ['Музей префектуры Окинава', 'Музей истории и искусства в Оморомати: от древних культур островов до королевства Рюкю, войны и современного искусства.', 'Начните с исторического зала — после него Окинава становится понятнее.'],
      en: ['Okinawa Prefectural Museum', 'A museum of history and art in Omoromachi: from the islands’ ancient cultures to the Ryukyu Kingdom, the war and contemporary art.', 'Start with the history hall — Okinawa makes more sense afterwards.'],
      es: ['Museo de la Prefectura de Okinawa', 'Un museo de historia y arte en Omoromachi: de las culturas antiguas de las islas al reino de Ryukyu, la guerra y el arte actual.', 'Empieza por la sala de historia: después Okinawa se entiende mejor.'],
      de: ['Präfekturmuseum Okinawa', 'Ein Museum für Geschichte und Kunst in Omoromachi: von den alten Inselkulturen über das Ryūkyū-Königreich und den Krieg bis zur Gegenwartskunst.', 'Mit dem Geschichtssaal beginnen – danach versteht man Okinawa besser.'],
      fr: ['Musée préfectoral d’Okinawa', 'Un musée d’histoire et d’art à Omoromachi : des cultures anciennes des îles au royaume de Ryūkyū, à la guerre et à l’art contemporain.', 'Commencez par la salle d’histoire : Okinawa devient plus clair ensuite.'],
      it: ['Museo della prefettura di Okinawa', 'Un museo di storia e arte a Omoromachi: dalle antiche culture delle isole al regno delle Ryukyu, alla guerra e all’arte contemporanea.', 'Inizia dalla sala di storia: dopo Okinawa si capisce meglio.'],
    }, { price: level(1) }),
    P('churaumi-aquarium', 'attraction', 26.6942, 127.8779, BEACH, 4.6, 61000, ['wildlife', 'museums'], {
      ru: ['Аквариум Тюраюми', 'Один из крупнейших аквариумов мира на севере острова: китовые акулы и манты в огромном резервуаре «Море Куросио».', 'Это 2 часа от Нахи — выезжайте рано и совместите с мостом Кори.'],
      en: ['Churaumi Aquarium', 'One of the world’s largest aquariums, in the north of the island: whale sharks and manta rays in the huge “Kuroshio Sea” tank.', 'It’s two hours from Naha — leave early and pair it with Kōri Bridge.'],
      es: ['Acuario Churaumi', 'Uno de los mayores acuarios del mundo, en el norte de la isla: tiburones ballena y mantas en el enorme tanque «Mar de Kuroshio».', 'Está a dos horas de Naha: sal temprano y combínalo con el puente de Kōri.'],
      de: ['Churaumi-Aquarium', 'Eines der größten Aquarien der Welt im Norden der Insel: Walhaie und Mantas im riesigen „Kuroshio-Meer“-Becken.', 'Zwei Stunden ab Naha – früh losfahren und mit der Kōri-Brücke verbinden.'],
      fr: ['Aquarium de Churaumi', 'L’un des plus grands aquariums du monde, au nord de l’île : requins-baleines et raies manta dans l’immense bassin « mer de Kuroshio ».', 'À deux heures de Naha : partez tôt et combinez avec le pont de Kōri.'],
      it: ['Acquario di Churaumi', 'Uno dei più grandi acquari del mondo, nel nord dell’isola: squali balena e mante nell’enorme vasca «Mare di Kuroshio».', 'È a due ore da Naha: parti presto e abbinalo al ponte di Kōri.'],
    }, { spot: 'insta', price: level(2) }),
    P('sefa-utaki', 'attraction', 26.173, 127.827, BRIDGE, 4.5, 9900, ['history', 'nature', 'unesco'], {
      ru: ['Сэфа-утаки', 'Самое священное место королевства Рюкю — лесной алтарь с треугольным проходом между скал и видом на остров Кудака; объект ЮНЕСКО.', 'Это святыня, а не парк: не шумите и не заходите за ограждения.'],
      en: ['Sēfa-utaki', 'The Ryukyu Kingdom’s most sacred site — a forest shrine with a triangular passage between rocks and a view of Kudaka Island; a UNESCO site.', 'It’s a sanctuary, not a park: keep quiet and stay behind the barriers.'],
      es: ['Sēfa-utaki', 'El lugar más sagrado del reino de Ryukyu: un santuario en el bosque con un paso triangular entre rocas y vista a la isla de Kudaka; Patrimonio UNESCO.', 'Es un santuario, no un parque: guarda silencio y no cruces las barreras.'],
      de: ['Sēfa-utaki', 'Die heiligste Stätte des Ryūkyū-Königreichs – ein Waldheiligtum mit dreieckigem Felsdurchgang und Blick auf die Insel Kudaka; UNESCO-Welterbe.', 'Ein Heiligtum, kein Park: leise sein und hinter den Absperrungen bleiben.'],
      fr: ['Sēfa-utaki', 'Le lieu le plus sacré du royaume de Ryūkyū : un sanctuaire forestier au passage triangulaire entre deux rochers, vue sur l’île de Kudaka ; site UNESCO.', 'C’est un sanctuaire, pas un parc : restez discret et derrière les barrières.'],
      it: ['Sēfa-utaki', 'Il luogo più sacro del regno delle Ryukyu: un santuario nel bosco con un passaggio triangolare tra le rocce e vista sull’isola di Kudaka; sito UNESCO.', 'È un santuario, non un parco: fai silenzio e resta dietro le transenne.'],
    }, { price: level(1) }),
    P('kouri-island', 'nature', 26.695, 128.023, BRIDGE, 4.6, 22000, ['islands', 'beaches', 'photo'], {
      ru: ['Остров Кори', 'Двухкилометровый мост над бирюзовым морем ведёт на маленький остров с пляжами и скалами в форме сердца на пляже Тину.', 'Скалы-сердце видны только с определённой точки на пляже Тину — с моря.'],
      en: ['Kōri Island', 'A 2 km bridge over turquoise sea leads to a small island with beaches and the heart-shaped rocks of Tinu Beach.', 'The heart shape only shows from a certain spot on Tinu Beach, looking out to sea.'],
      es: ['Isla de Kōri', 'Un puente de 2 km sobre el mar turquesa lleva a una islita con playas y las rocas en forma de corazón de la playa Tinu.', 'El corazón solo se ve desde cierto punto de la playa Tinu, mirando al mar.'],
      de: ['Insel Kōri', 'Eine 2 km lange Brücke über türkisfarbenes Meer führt auf eine kleine Insel mit Stränden und den herzförmigen Felsen am Tinu-Strand.', 'Die Herzform zeigt sich nur von einer bestimmten Stelle am Tinu-Strand aus.'],
      fr: ['Île de Kōri', 'Un pont de 2 km sur une mer turquoise mène à une petite île aux plages et aux rochers en forme de cœur de la plage de Tinu.', 'Le cœur n’apparaît que d’un certain endroit de la plage de Tinu, face à la mer.'],
      it: ['Isola di Kōri', 'Un ponte di 2 km sul mare turchese porta a un’isoletta con spiagge e le rocce a forma di cuore della spiaggia di Tinu.', 'Il cuore si vede solo da un punto preciso della spiaggia di Tinu, guardando il mare.'],
    }, { spot: 'insta', price: free }),
    P('cape-manzamo', 'nature', 26.505, 127.85, BEACH, 4.4, 14000, ['views', 'nature'], {
      ru: ['Мыс Мандзамо', 'Скала на западном побережье, похожая на хобот слона, над прозрачной водой и коралловым рифом.', 'Лучше всего утром или к закату; от парковки — 5 минут по тропе.'],
      en: ['Cape Manzamo', 'A west-coast cliff shaped like an elephant’s trunk above clear water and coral reef.', 'Best in the morning or at sunset; a 5-minute path from the car park.'],
      es: ['Cabo Manzamo', 'Un acantilado de la costa oeste con forma de trompa de elefante sobre aguas claras y arrecife de coral.', 'Mejor por la mañana o al atardecer; a 5 minutos a pie del aparcamiento.'],
      de: ['Kap Manzamo', 'Eine Klippe an der Westküste in Form eines Elefantenrüssels über klarem Wasser und Korallenriff.', 'Am besten morgens oder zum Sonnenuntergang; 5 Minuten vom Parkplatz.'],
      fr: ['Cap Manzamo', 'Une falaise de la côte ouest en forme de trompe d’éléphant, au-dessus d’une eau claire et d’un récif corallien.', 'Idéal le matin ou au coucher du soleil ; à 5 minutes du parking.'],
      it: ['Capo Manzamo', 'Una scogliera della costa ovest a forma di proboscide d’elefante sopra acque limpide e barriera corallina.', 'Il meglio al mattino o al tramonto; a 5 minuti dal parcheggio.'],
    }, { spot: 'insta', price: level(1) }),
    P('american-village', 'attraction', 26.316, 127.757, SAND, 4.2, 19000, ['shopping', 'sunset', 'nightlife'], {
      ru: ['Американ-Виллидж (Тятан)', 'Пёстрый район у моря в Тятане: магазины, кафе, колесо обозрения и пляж Сансет на закат.', 'Приезжайте к закату — пляж Сансет назван не случайно.'],
      en: ['American Village (Chatan)', 'A colourful seaside district in Chatan: shops, cafés, a Ferris wheel and Sunset Beach.', 'Come for sunset — Sunset Beach lives up to its name.'],
      es: ['American Village (Chatan)', 'Un barrio colorido junto al mar en Chatan: tiendas, cafés, una noria y Sunset Beach.', 'Ve al atardecer: Sunset Beach hace honor a su nombre.'],
      de: ['American Village (Chatan)', 'Ein buntes Viertel am Meer in Chatan: Läden, Cafés, ein Riesenrad und der Sunset Beach.', 'Zum Sonnenuntergang kommen – der Sunset Beach trägt seinen Namen zu Recht.'],
      fr: ['American Village (Chatan)', 'Un quartier coloré au bord de la mer à Chatan : boutiques, cafés, grande roue et Sunset Beach.', 'Venez au coucher du soleil : Sunset Beach porte bien son nom.'],
      it: ['American Village (Chatan)', 'Un quartiere colorato sul mare a Chatan: negozi, caffè, una ruota panoramica e la Sunset Beach.', 'Vieni al tramonto: la Sunset Beach merita il nome.'],
    }, { spot: 'insta', price: free }),
    P('zamami-island', 'nature', 26.229, 127.303, BEACH, 4.7, 7600, ['islands', 'beaches', 'diving'], {
      ru: ['Остров Дзамами (Кэрама)', 'Остров национального парка Кэрама в часе на скоростном пароме: пляж Фурудзамами с прозрачной водой, черепахи и киты зимой.', 'С января по март отсюда ходят лодки на наблюдение за горбатыми китами.'],
      en: ['Zamami Island (Kerama)', 'An island in the Kerama national park an hour away by fast ferry: Furuzamami Beach’s clear water, turtles and whales in winter.', 'From January to March whale-watching boats leave from here for humpbacks.'],
      es: ['Isla de Zamami (Kerama)', 'Una isla del parque nacional de Kerama a una hora en ferri rápido: el agua clara de Furuzamami, tortugas y ballenas en invierno.', 'De enero a marzo salen barcos para ver ballenas jorobadas.'],
      de: ['Insel Zamami (Kerama)', 'Eine Insel im Kerama-Nationalpark eine Stunde per Schnellfähre: klares Wasser am Furuzamami-Strand, Schildkröten und im Winter Wale.', 'Von Januar bis März fahren Boote zur Buckelwal-Beobachtung.'],
      fr: ['Île de Zamami (Kerama)', 'Une île du parc national de Kerama à une heure de ferry rapide : l’eau limpide de Furuzamami, tortues et baleines en hiver.', 'De janvier à mars, des bateaux partent observer les baleines à bosse.'],
      it: ['Isola di Zamami (Kerama)', 'Un’isola del parco nazionale di Kerama a un’ora di traghetto veloce: l’acqua limpida di Furuzamami, tartarughe e balene d’inverno.', 'Da gennaio a marzo partono barche per avvistare le megattere.'],
    }, { spot: 'insta', price: level(2) }),
    P('makishi-public-market', 'food', 26.214, 127.689, STREET, 4.2, 15000, ['food', 'market'], {
      ru: ['Общественный рынок Макиси', '«Кухня Нахи»: на первом этаже — рыба, морепродукты и мясо, а наверху купленное вам приготовят в кафе.', 'Спросите про «моти-агэ» — так называют готовку купленного внизу за небольшую плату.'],
      en: ['Makishi Public Market', '“Naha’s kitchen”: fish, seafood and meat on the ground floor, and upstairs cafés will cook what you buy.', 'Ask for “mochiage” — having what you bought cooked upstairs for a small fee.'],
      es: ['Mercado Público Makishi', '«La cocina de Naha»: pescado, marisco y carne en la planta baja, y arriba te cocinan lo que compras.', 'Pide «mochiage»: que te cocinen arriba lo comprado por un pequeño precio.'],
      de: ['Öffentlicher Markt Makishi', '„Nahas Küche“: Fisch, Meeresfrüchte und Fleisch im Erdgeschoss, oben bereiten Lokale das Gekaufte zu.', 'Nach „Mochiage“ fragen – das Zubereiten des Gekauften gegen kleine Gebühr.'],
      fr: ['Marché public Makishi', '« La cuisine de Naha » : poissons, fruits de mer et viande au rez-de-chaussée, et à l’étage on cuisine ce que vous achetez.', 'Demandez le « mochiage » : faire cuire vos achats à l’étage pour une petite somme.'],
      it: ['Mercato pubblico Makishi', '«La cucina di Naha»: pesce, frutti di mare e carne al piano terra, e di sopra ti cucinano ciò che compri.', 'Chiedi il «mochiage»: farti cucinare di sopra ciò che hai comprato per poco.'],
    }, { price: level(2), menu: [
      ['Fresh sashimi', undefined, 'свежее сасими из местной рыбы|fresh local sashimi|sashimi local fresco|frisches lokales Sashimi|sashimi local frais|sashimi locale fresco'],
      ['Grilled lobster', undefined, 'омар на гриле|grilled spiny lobster|langosta a la parrilla|gegrillte Languste|langouste grillée|aragosta alla griglia'],
    ] }),
    P('shuri-soba', 'food', 26.2175, 127.7175, SHURI, 4.4, 3400, ['food'], {
      ru: ['Сюри-соба', 'Маленькая лавка окинавской собы у замка Сюри: пшеничная лапша в лёгком бульоне со свининой.', 'Работает днём и закрывается, когда кончается лапша, — приходите до часа дня.'],
      en: ['Shuri Soba', 'A small Okinawa soba shop near Shuri Castle: wheat noodles in a light broth with pork.', 'Open at lunchtime and closes when the noodles run out — come before 1 pm.'],
      es: ['Shuri Soba', 'Un pequeño local de soba de Okinawa junto al castillo de Shuri: fideos de trigo en caldo ligero con cerdo.', 'Abre a mediodía y cierra al acabarse los fideos: ve antes de la 13:00.'],
      de: ['Shuri Soba', 'Ein kleiner Okinawa-Soba-Laden nahe der Burg Shuri: Weizennudeln in leichter Brühe mit Schweinefleisch.', 'Mittags geöffnet, schließt, wenn die Nudeln aus sind – vor 13 Uhr kommen.'],
      fr: ['Shuri Soba', 'Une petite échoppe de soba d’Okinawa près du château de Shuri : nouilles de blé en bouillon léger, porc.', 'Ouvert le midi, ferme quand il n’y a plus de nouilles : venez avant 13 h.'],
      it: ['Shuri Soba', 'Un piccolo locale di soba di Okinawa vicino al castello di Shuri: noodle di grano in brodo leggero con maiale.', 'Apre a pranzo e chiude a noodle finiti: vieni prima delle 13.'],
    }, { price: level(1), menu: [
      ['Okinawa soba', undefined, 'пшеничная лапша со свининой в бульоне|wheat noodles with pork in broth|fideos de trigo con cerdo en caldo|Weizennudeln mit Schwein in Brühe|nouilles de blé au porc en bouillon|noodle di grano con maiale in brodo'],
      ['Jūshī', undefined, 'окинавский рис с добавками|Okinawan seasoned rice|arroz sazonado de Okinawa|gewürzter Okinawa-Reis|riz assaisonné d’Okinawa|riso condito di Okinawa'],
    ] }),
    P('yunangi', 'food', 26.214, 127.6815, STREET, 4.4, 4300, ['food'], {
      ru: ['Юнанги', 'Ресторан домашней окинавской кухни с 1970 года в Кумодзи: рафутэ, гоя-тямпуру и другие блюда острова.', 'Возьмите обеденный сет «юнанги-тэйсёку» — в нём пробуешь всего понемногу.'],
      en: ['Yūnangi', 'A home-style Okinawan restaurant in Kumoji since 1970: rafute, gōya champurū and other island dishes.', 'Get the Yūnangi set lunch to taste a bit of everything.'],
      es: ['Yūnangi', 'Un restaurante de cocina casera de Okinawa en Kumoji desde 1970: rafute, gōya champurū y otros platos de la isla.', 'Pide el menú del día Yūnangi para probar un poco de todo.'],
      de: ['Yūnangi', 'Ein Lokal mit Okinawa-Hausmannskost in Kumoji seit 1970: Rafute, Gōya Champurū und andere Inselgerichte.', 'Das Yūnangi-Mittagsset nehmen – von allem ein bisschen.'],
      fr: ['Yūnangi', 'Un restaurant de cuisine familiale d’Okinawa à Kumoji depuis 1970 : rafute, gōya champurū et autres plats de l’île.', 'Prenez le menu du midi Yūnangi pour goûter un peu de tout.'],
      it: ['Yūnangi', 'Un ristorante di cucina casalinga di Okinawa a Kumoji dal 1970: rafute, gōya champurū e altri piatti dell’isola.', 'Prendi il set pranzo Yūnangi per assaggiare un po’ di tutto.'],
    }, { price: level(2), menu: [
      ['Rafute', undefined, 'свиная грудинка, тушённая в авамори|pork belly braised in awamori|panceta guisada en awamori|in Awamori geschmorter Schweinebauch|poitrine de porc braisée à l’awamori|pancetta brasata nell’awamori'],
      ['Gōya champurū', undefined, 'жареная горькая тыква с тофу и яйцом|bitter melon stir-fry with tofu and egg|salteado de melón amargo con tofu y huevo|Bittermelone mit Tofu und Ei|melon amer sauté au tofu et à l’œuf|melone amaro saltato con tofu e uovo'],
    ] }),
    P('urizun', 'food', 26.2185, 127.703, STREET, 4.4, 3100, ['food', 'nightlife'], {
      ru: ['Уридзун', 'Идзакая с 1972 года с огромным выбором авамори — окинавского дистиллята; фирменная закуска — «дуру-тэн» из таро.', 'Попросите сравнить несколько видов авамори разной выдержки.'],
      en: ['Urizun', 'An izakaya since 1972 with a vast awamori list — Okinawa’s distilled spirit; the signature snack is taro “dūru-ten”.', 'Ask to compare a few awamori of different ages.'],
      es: ['Urizun', 'Una izakaya desde 1972 con enorme carta de awamori, el destilado de Okinawa; su tapa estrella es el «dūru-ten» de taro.', 'Pide comparar varios awamori de distinta crianza.'],
      de: ['Urizun', 'Eine Izakaya seit 1972 mit riesiger Awamori-Auswahl – Okinawas Brand; die typische Vorspeise ist Taro-„Dūru-ten“.', 'Einige Awamori verschiedenen Alters vergleichen.'],
      fr: ['Urizun', 'Un izakaya depuis 1972 à l’immense carte d’awamori, l’eau-de-vie d’Okinawa ; l’en-cas phare est le « dūru-ten » de taro.', 'Demandez à comparer quelques awamori d’âges différents.'],
      it: ['Urizun', 'Un izakaya dal 1972 con una lunghissima carta di awamori, il distillato di Okinawa; lo stuzzichino tipico è il «dūru-ten» di taro.', 'Chiedi di confrontare alcuni awamori di età diverse.'],
    }, { price: level(2), menu: [
      ['Dūru-ten', undefined, 'жареные крокеты из таро|fried taro croquettes|croquetas de taro fritas|frittierte Taro-Kroketten|croquettes de taro frites|crocchette di taro fritte'],
      ['Awamori tasting', undefined, 'дегустация авамори|awamori tasting|cata de awamori|Awamori-Verkostung|dégustation d’awamori|degustazione di awamori'],
    ] }),
    P('steakhouse-88', 'food', 26.2155, 127.6735, STREET, 4.2, 6800, ['food', 'history'], {
      ru: ['Steak House 88', 'Стейк-хаус с 1955 года — символ послевоенной «стейковой культуры» Окинавы, когда здесь стояли американские базы.', 'Окинавский обычай — закончить вечер стейком; здесь он доступнее, чем на материке.'],
      en: ['Steak House 88', 'A steakhouse since 1955 — a symbol of Okinawa’s post-war “steak culture” from the US-base era.', 'Okinawans like to end a night out with a steak; here it’s cheaper than on the mainland.'],
      es: ['Steak House 88', 'Un asador desde 1955, símbolo de la «cultura del filete» de Okinawa en la posguerra de las bases estadounidenses.', 'En Okinawa se cierra la noche con un filete; aquí es más barato que en la península.'],
      de: ['Steak House 88', 'Ein Steakhaus seit 1955 – Symbol der Nachkriegs-„Steakkultur“ Okinawas aus der Zeit der US-Stützpunkte.', 'Man beschließt den Abend gern mit Steak; hier ist es günstiger als auf dem Festland.'],
      fr: ['Steak House 88', 'Un steakhouse depuis 1955, symbole de la « culture du steak » d’Okinawa née après-guerre avec les bases américaines.', 'À Okinawa, on finit la soirée par un steak ; ici, c’est moins cher qu’ailleurs au Japon.'],
      it: ['Steak House 88', 'Una steakhouse dal 1955, simbolo della «cultura della bistecca» di Okinawa nata nel dopoguerra delle basi americane.', 'A Okinawa si chiude la serata con una bistecca; qui costa meno che nel resto del Giappone.'],
    }, { price: level(2), menu: [
      ['Tenderloin steak', undefined, 'стейк из вырезки|tenderloin steak|solomillo|Filetsteak|steak de filet|filetto'],
      ['Taco rice', undefined, 'тако-райс|taco rice|taco rice|Taco-Reis|taco rice|taco rice'],
    ] }),
    P('pork-tamago-onigiri', 'food', 26.2135, 127.6895, STREET, 4.4, 7200, ['food', 'streetfood'], {
      ru: ['Pork Tamago Onigiri (главная лавка)', 'Окинавский «сэндвич» из риса и нори с ломтиком консервированной свинины и омлетом — главный завтрак острова.', 'С утра очередь, но заказ готовят быстро.'],
      en: ['Pork Tamago Onigiri (main shop)', 'Okinawa’s rice-and-nori “sandwich” with a slice of canned pork and omelette — the island’s favourite breakfast.', 'There’s a morning queue, but orders come fast.'],
      es: ['Pork Tamago Onigiri (local principal)', 'El «sándwich» de arroz y nori de Okinawa con una loncha de cerdo en lata y tortilla: el desayuno favorito de la isla.', 'Por la mañana hay cola, pero lo preparan rápido.'],
      de: ['Pork Tamago Onigiri (Stammladen)', 'Okinawas Reis-Nori-„Sandwich“ mit einer Scheibe Dosenfleisch und Omelett – das Lieblingsfrühstück der Insel.', 'Morgens Schlange, aber die Bestellung kommt schnell.'],
      fr: ['Pork Tamago Onigiri (boutique principale)', 'Le « sandwich » riz-nori d’Okinawa avec une tranche de porc en conserve et une omelette : le petit-déjeuner préféré de l’île.', 'File le matin, mais c’est rapide.'],
      it: ['Pork Tamago Onigiri (negozio principale)', 'Il «panino» di riso e nori di Okinawa con una fetta di carne in scatola e frittata: la colazione preferita dell’isola.', 'Al mattino c’è fila, ma sono veloci.'],
    }, { price: level(1), menu: [
      ['Pork tamago', undefined, 'рис с свининой и омлетом в нори|rice with pork and omelette in nori|arroz con cerdo y tortilla en nori|Reis mit Schwein und Omelett in Nori|riz, porc et omelette en nori|riso con maiale e frittata nel nori'],
      ['Gōya tempura version', undefined, 'вариант с темпурой из горькой тыквы|version with bitter melon tempura|versión con tempura de melón amargo|Variante mit Bittermelonen-Tempura|version au tempura de melon amer|versione con tempura di melone amaro'],
    ] }),
    P('king-tacos', 'food', 26.456, 127.918, SAND, 4.3, 6900, ['food'], {
      ru: ['King Tacos (Кин)', 'Лавка в городе Кин, где в 1980-х придумали тако-райс — начинку тако на рисе с сыром и салатом.', 'Порции огромные — одной хватает на двоих.'],
      en: ['King Tacos (Kin)', 'A shop in Kin town, where taco rice — taco filling over rice with cheese and lettuce — was invented in the 1980s.', 'Portions are huge — one can feed two.'],
      es: ['King Tacos (Kin)', 'Un local en Kin, donde en los años ochenta nació el taco rice: relleno de taco sobre arroz con queso y lechuga.', 'Las raciones son enormes: una da para dos.'],
      de: ['King Tacos (Kin)', 'Ein Laden im Ort Kin, wo in den 1980ern Taco-Reis erfunden wurde – Taco-Füllung auf Reis mit Käse und Salat.', 'Riesige Portionen – eine reicht für zwei.'],
      fr: ['King Tacos (Kin)', 'Une échoppe à Kin, où le taco rice — garniture de taco sur riz, fromage et laitue — fut inventé dans les années 1980.', 'Portions énormes : une suffit pour deux.'],
      it: ['King Tacos (Kin)', 'Un locale a Kin, dove negli anni Ottanta nacque il taco rice: ripieno di taco su riso con formaggio e lattuga.', 'Porzioni enormi: una basta per due.'],
    }, { price: level(1), menu: [
      ['Taco rice with cheese and vegetables', undefined, 'тако-райс с сыром и овощами|taco rice with cheese and vegetables|taco rice con queso y verduras|Taco-Reis mit Käse und Gemüse|taco rice fromage et légumes|taco rice con formaggio e verdure'],
      ['Tacos', undefined, 'тако|tacos|tacos|Tacos|tacos|tacos'],
    ] }),
    P('blue-seal', 'food', 26.259, 127.721, SAND, 4.3, 8300, ['food'], {
      ru: ['Blue Seal (Макиминато)', 'Главный магазин окинавского мороженого, появившегося в 1948 году для американских баз: вкусы бэни-имо и сикуваса.', 'Попробуйте фиолетовый бэни-имо — сладкий батат.'],
      en: ['Blue Seal (Makiminato)', 'The flagship of Okinawa’s ice cream, born in 1948 for the US bases: flavours like beni-imo and shīkwāsā.', 'Try the purple beni-imo — sweet potato.'],
      es: ['Blue Seal (Makiminato)', 'La tienda insignia del helado de Okinawa, nacido en 1948 para las bases de EE. UU.: sabores como beni-imo y shīkwāsā.', 'Prueba el morado beni-imo, de boniato.'],
      de: ['Blue Seal (Makiminato)', 'Der Stammladen von Okinawas Eiscreme, 1948 für die US-Stützpunkte entstanden: Sorten wie Beni-imo und Shīkwāsā.', 'Das lila Beni-imo probieren – Süßkartoffel.'],
      fr: ['Blue Seal (Makiminato)', 'Le vaisseau amiral de la glace d’Okinawa, née en 1948 pour les bases américaines : parfums beni-imo et shīkwāsā.', 'Goûtez le beni-imo violet, à la patate douce.'],
      it: ['Blue Seal (Makiminato)', 'Il negozio principale del gelato di Okinawa, nato nel 1948 per le basi USA: gusti come beni-imo e shīkwāsā.', 'Prova il viola beni-imo, alla patata dolce.'],
    }, { price: level(1), menu: [
      ['Beni-imo', undefined, 'мороженое из фиолетового батата|purple sweet-potato ice cream|helado de boniato morado|Eis aus lila Süßkartoffel|glace à la patate douce violette|gelato di patata dolce viola'],
      ['Shīkwāsā sherbet', undefined, 'щербет из окинавского лайма|Okinawan lime sherbet|sorbete de lima de Okinawa|Okinawa-Limetten-Sorbet|sorbet au citron vert d’Okinawa|sorbetto di lime di Okinawa'],
    ] }),
    P('kishimoto-shokudo', 'food', 26.655, 127.896, BEACH, 4.4, 5600, ['food', 'history'], {
      ru: ['Кисимото Сёкудо', 'Лавка окинавской собы в Мотобу с 1905 года: лапшу по-прежнему делают на щёлоке из золы.', 'Удобный обед рядом с аквариумом Тюраюми; меню из двух позиций.'],
      en: ['Kishimoto Shokudō', 'An Okinawa soba shop in Motobu since 1905, still making noodles with wood-ash lye.', 'A handy lunch near the Churaumi aquarium; the menu has just two items.'],
      es: ['Kishimoto Shokudō', 'Un local de soba de Okinawa en Motobu desde 1905, que aún hace los fideos con lejía de ceniza.', 'Un almuerzo cómodo cerca del acuario Churaumi; la carta tiene dos platos.'],
      de: ['Kishimoto Shokudō', 'Ein Okinawa-Soba-Laden in Motobu seit 1905, der die Nudeln noch mit Holzaschenlauge herstellt.', 'Ein praktisches Mittagessen nahe dem Churaumi-Aquarium; nur zwei Gerichte.'],
      fr: ['Kishimoto Shokudō', 'Une échoppe de soba d’Okinawa à Motobu depuis 1905, qui fait encore ses nouilles à la lessive de cendre.', 'Un déjeuner pratique près de l’aquarium de Churaumi ; deux plats seulement.'],
      it: ['Kishimoto Shokudō', 'Un locale di soba di Okinawa a Motobu dal 1905, che fa ancora i noodle con la liscivia di cenere.', 'Un pranzo comodo vicino all’acquario di Churaumi; solo due piatti.'],
    }, { price: level(1), menu: [
      ['Okinawa soba', undefined, 'окинавская соба со свининой|Okinawa soba with pork|soba de Okinawa con cerdo|Okinawa-Soba mit Schwein|soba d’Okinawa au porc|soba di Okinawa col maiale'],
      ['Jūshī', undefined, 'окинавский рис с добавками|Okinawan seasoned rice|arroz sazonado de Okinawa|gewürzter Okinawa-Reis|riz assaisonné d’Okinawa|riso condito di Okinawa'],
    ] }),
    P('arakaki-zenzai', 'food', 26.655, 127.882, BEACH, 4.4, 2800, ['food'], {
      ru: ['Аракаки Дзэндзай-я', 'Лавка в Мотобу, где подают окинавский дзэндзай — гору колотого льда над сладкой фасолью в сиропе.', 'Идеально после аквариума в жаркий день.'],
      en: ['Arakaki Zenzai-ya', 'A Motobu shop serving Okinawan zenzai — a mound of shaved ice over sweet beans in syrup.', 'Perfect after the aquarium on a hot day.'],
      es: ['Arakaki Zenzai-ya', 'Un local de Motobu que sirve el zenzai de Okinawa: una montaña de hielo raspado sobre judías dulces en almíbar.', 'Perfecto tras el acuario en un día caluroso.'],
      de: ['Arakaki Zenzai-ya', 'Ein Laden in Motobu mit Okinawa-Zenzai – einem Berg geschabten Eises über süßen Bohnen in Sirup.', 'Perfekt nach dem Aquarium an einem heißen Tag.'],
      fr: ['Arakaki Zenzai-ya', 'Une échoppe de Motobu servant le zenzai d’Okinawa : une montagne de glace pilée sur des haricots sucrés au sirop.', 'Parfait après l’aquarium par une journée chaude.'],
      it: ['Arakaki Zenzai-ya', 'Un locale di Motobu che serve lo zenzai di Okinawa: una montagna di ghiaccio tritato su fagioli dolci in sciroppo.', 'Perfetto dopo l’acquario in una giornata calda.'],
    }, { price: level(1) }),
  ],
  routes: [
    D(['pork-tamago-onigiri', 'shurijo', 'shuri-soba', 'tamaudun', 'shikinaen', 'tsuboya-pottery', 'makishi-public-market', 'kokusai-dori'],
      'Замок Сюри, сады королей и рынок Макиси|Shuri Castle, the royal gardens and Makishi market|El castillo de Shuri, los jardines reales y el mercado Makishi|Burg Shuri, die Königsgärten und der Makishi-Markt|Le château de Shuri, les jardins royaux et le marché Makishi|Il castello di Shuri, i giardini reali e il mercato Makishi'),
    D(['cape-manzamo', 'churaumi-aquarium', 'kishimoto-shokudo', 'arakaki-zenzai', 'kouri-island', 'king-tacos', 'american-village'],
      'Север Окинавы: мыс Мандзамо, Тюраюми и остров Кори|Northern Okinawa: Cape Manzamo, Churaumi and Kōri Island|El norte de Okinawa: cabo Manzamo, Churaumi y la isla de Kōri|Nord-Okinawa: Kap Manzamo, Churaumi und die Insel Kōri|Le nord d’Okinawa : cap Manzamo, Churaumi et l’île de Kōri|Il nord di Okinawa: capo Manzamo, Churaumi e l’isola di Kōri'),
    D(['sefa-utaki', 'yunangi', 'fukushuen', 'naminoue-shrine', 'okinawa-prefectural-museum', 'blue-seal', 'urizun'],
      'Священная Сэфа-утаки, пляж Наминоуэ и авамори|Sacred Sēfa-utaki, Naminoue beach and awamori|La sagrada Sēfa-utaki, la playa de Naminoue y el awamori|Das heilige Sēfa-utaki, der Naminoue-Strand und Awamori|Le sacré Sēfa-utaki, la plage de Naminoue et l’awamori|La sacra Sēfa-utaki, la spiaggia di Naminoue e l’awamori'),
  ],
};

export default pack;
