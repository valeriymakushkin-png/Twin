import type { CityPack } from '../types';
import { free, level, makeDay, makePlace } from './_kit.ts';

const P = makePlace('kamakura');
const D = makeDay('kamakura');
const BUDDHA = 'GVFRiWLcOC4';
const FACE = 'ULdivG2zs4s';
const CROWD = 'Im7TZkbsTrg';
const PALMS = 'dCJcyhhXDGU';
const COAST = 'y22_u9GR_P0';

const pack: CityPack = {
  country: 'JP',
  city: 'kamakura',
  places: [
    P('kotokuin-daibutsu', 'attraction', 35.3167, 139.5359, BUDDHA, 4.6, 46000, ['temples', 'history', 'photo'], {
      ru: ['Большой Будда (Котоку-ин)', 'Бронзовый Будда Амида высотой 13,35 м (1252 год), стоящий под открытым небом с тех пор, как цунами 1498 года смыло его зал.', 'За небольшую плату можно зайти внутрь статуи.'],
      en: ['Great Buddha (Kōtoku-in)', 'A 13.35 m bronze Amida Buddha (1252), standing in the open air since a tsunami in 1498 washed away its hall.', 'For a small fee you can step inside the statue.'],
      es: ['Gran Buda (Kōtoku-in)', 'Un Buda Amida de bronce de 13,35 m (1252), al aire libre desde que un tsunami de 1498 se llevó su templo.', 'Por un pequeño precio puedes entrar en la estatua.'],
      de: ['Großer Buddha (Kōtoku-in)', 'Ein 13,35 m hoher Amida-Buddha aus Bronze (1252), der unter freiem Himmel steht, seit ein Tsunami 1498 seine Halle fortspülte.', 'Gegen eine kleine Gebühr kann man in die Statue hinein.'],
      fr: ['Grand Bouddha (Kōtoku-in)', 'Un Bouddha Amida en bronze de 13,35 m (1252), en plein air depuis qu’un tsunami de 1498 a emporté son pavillon.', 'Pour quelques yens, on peut entrer dans la statue.'],
      it: ['Grande Buddha (Kōtoku-in)', 'Un Buddha Amida di bronzo alto 13,35 m (1252), all’aperto da quando uno tsunami del 1498 ne spazzò via la sala.', 'Con un piccolo biglietto puoi entrare nella statua.'],
    }, { spot: 'insta', price: level(1) }),
    P('hasedera', 'attraction', 35.3125, 139.5332, FACE, 4.6, 32000, ['temples', 'views', 'gardens'], {
      ru: ['Хасэ-дэра', 'Храм на склоне над морем с девятиметровой деревянной статуей одиннадцатиликой Каннон, пещерой Бэнтэн и тропой гортензий.', 'С террасы у главного зала — вид на весь залив Юигахама.'],
      en: ['Hase-dera', 'A hillside temple above the sea with a nine-metre wooden statue of eleven-headed Kannon, the Benten cave and a hydrangea path.', 'The terrace by the main hall overlooks the whole of Yuigahama Bay.'],
      es: ['Hase-dera', 'Un templo en la ladera sobre el mar con una estatua de madera de nueve metros de Kannon de once cabezas, la cueva Benten y un sendero de hortensias.', 'La terraza junto al salón principal domina toda la bahía de Yuigahama.'],
      de: ['Hase-dera', 'Ein Hangtempel über dem Meer mit einer neun Meter hohen Holzstatue der elfköpfigen Kannon, der Benten-Höhle und einem Hortensienweg.', 'Von der Terrasse an der Haupthalle überblickt man die Bucht von Yuigahama.'],
      fr: ['Hase-dera', 'Un temple à flanc de colline au-dessus de la mer, avec une Kannon à onze têtes en bois de neuf mètres, la grotte de Benten et un chemin d’hortensias.', 'La terrasse du pavillon principal domine toute la baie de Yuigahama.'],
      it: ['Hase-dera', 'Un tempio sulla collina sopra il mare con una statua lignea di nove metri della Kannon a undici teste, la grotta di Benten e un sentiero di ortensie.', 'Dalla terrazza della sala principale si vede tutta la baia di Yuigahama.'],
    }, { spot: 'insta', price: level(1) }),
    P('tsurugaoka-hachimangu', 'attraction', 35.326, 139.5565, CROWD, 4.5, 41000, ['temples', 'history'], {
      ru: ['Цуругаока Хатиман-гу', 'Главное святилище Камакуры, перенесённое сюда первым сёгуном Минамото-но Ёритомо в 1180 году; к нему ведёт аллея Данкадзура.', 'Весной аллея Данкадзура утопает в сакуре.'],
      en: ['Tsurugaoka Hachimangū', 'Kamakura’s main shrine, moved here in 1180 by the first shogun Minamoto no Yoritomo; the Dankazura avenue leads up to it.', 'In spring the Dankazura avenue is buried in cherry blossom.'],
      es: ['Tsurugaoka Hachimangū', 'El santuario principal de Kamakura, trasladado aquí en 1180 por el primer shogun Minamoto no Yoritomo; la avenida Dankazura conduce a él.', 'En primavera la avenida Dankazura se cubre de cerezos.'],
      de: ['Tsurugaoka Hachimangū', 'Kamakuras Hauptschrein, 1180 vom ersten Shogun Minamoto no Yoritomo hierher verlegt; die Dankazura-Allee führt hinauf.', 'Im Frühling versinkt die Dankazura-Allee in Kirschblüten.'],
      fr: ['Tsurugaoka Hachimangū', 'Le grand sanctuaire de Kamakura, transféré ici en 1180 par le premier shogun Minamoto no Yoritomo ; l’allée Dankazura y mène.', 'Au printemps, l’allée Dankazura disparaît sous les cerisiers.'],
      it: ['Tsurugaoka Hachimangū', 'Il santuario principale di Kamakura, spostato qui nel 1180 dal primo shogun Minamoto no Yoritomo; il viale Dankazura vi conduce.', 'In primavera il viale Dankazura sparisce sotto i ciliegi.'],
    }, { price: free }),
    P('komachi-dori', 'attraction', 35.32, 139.552, CROWD, 4.2, 18000, ['shopping', 'streetfood'], {
      ru: ['Улица Комати-дори', 'Пешеходная торговая улица от станции к святилищу: уличная еда, сладости и ремёсла.', 'Ешьте у лавки — на ходу здесь есть не принято.'],
      en: ['Komachi-dōri', 'The pedestrian shopping street from the station to the shrine: street food, sweets and crafts.', 'Eat at the stall — eating while walking is frowned upon here.'],
      es: ['Calle Komachi-dōri', 'La calle comercial peatonal de la estación al santuario: comida callejera, dulces y artesanía.', 'Come junto al puesto: aquí está mal visto comer caminando.'],
      de: ['Komachi-dōri', 'Die Fußgänger-Einkaufsstraße vom Bahnhof zum Schrein: Streetfood, Süßes und Kunsthandwerk.', 'Am Stand essen – im Gehen zu essen ist hier verpönt.'],
      fr: ['Komachi-dōri', 'La rue piétonne commerçante de la gare au sanctuaire : street food, douceurs et artisanat.', 'Mangez près de l’échoppe : manger en marchant est mal vu ici.'],
      it: ['Komachi-dōri', 'La via pedonale dei negozi dalla stazione al santuario: cibo di strada, dolci e artigianato.', 'Mangia vicino al banco: qui mangiare camminando è malvisto.'],
    }, { price: free }),
    P('hokokuji', 'attraction', 35.3195, 139.5655, PALMS, 4.6, 14000, ['temples', 'nature', 'photo'], {
      ru: ['Хококу-дзи', 'Дзэн-храм с рощей из примерно двух тысяч стволов бамбука мосо и чайным домиком внутри неё.', 'Возьмите билет с маття — пить чай с видом на бамбук и есть главная идея.'],
      en: ['Hōkoku-ji', 'A Zen temple with a grove of some two thousand mōsō bamboo stems and a teahouse inside it.', 'Get the ticket with matcha — tea with a bamboo view is the whole point.'],
      es: ['Hōkoku-ji', 'Un templo zen con un bosque de unos dos mil bambúes mōsō y una casa de té dentro.', 'Compra la entrada con matcha: tomar té mirando el bambú es la gracia.'],
      de: ['Hōkoku-ji', 'Ein Zen-Tempel mit einem Hain aus rund zweitausend Mōsō-Bambusstämmen und einem Teehaus darin.', 'Das Ticket mit Matcha nehmen – Tee mit Bambusblick ist der eigentliche Sinn.'],
      fr: ['Hōkoku-ji', 'Un temple zen avec une bambouseraie d’environ deux mille tiges de bambou mōsō et une maison de thé au milieu.', 'Prenez le billet avec matcha : boire le thé face aux bambous, tout est là.'],
      it: ['Hōkoku-ji', 'Un tempio zen con un boschetto di circa duemila canne di bambù mōsō e una casa da tè al suo interno.', 'Prendi il biglietto con matcha: il tè con vista sul bambù è il punto.'],
    }, { spot: 'insta', price: level(1) }),
    P('engakuji', 'attraction', 35.3373, 139.547, FACE, 4.5, 11000, ['temples', 'history'], {
      ru: ['Энгаку-дзи', 'Один из главных дзэн-храмов Камакуры (1282) в Кита-Камакуре: огромные ворота Санмон и зал реликвий — национальное сокровище.', 'Храм прямо у станции Кита-Камакура — хорошее начало дня.'],
      en: ['Engaku-ji', 'One of Kamakura’s great Zen temples (1282) in Kita-Kamakura: a huge Sanmon gate and a relic hall that’s a National Treasure.', 'It’s right by Kita-Kamakura Station — a good start to the day.'],
      es: ['Engaku-ji', 'Uno de los grandes templos zen de Kamakura (1282), en Kita-Kamakura: una enorme puerta Sanmon y un relicario que es Tesoro Nacional.', 'Está junto a la estación de Kita-Kamakura: buen comienzo del día.'],
      de: ['Engaku-ji', 'Einer der großen Zen-Tempel Kamakuras (1282) in Kita-Kamakura: riesiges Sanmon-Tor und eine Reliquienhalle als Nationalschatz.', 'Direkt am Bahnhof Kita-Kamakura – ein guter Tagesstart.'],
      fr: ['Engaku-ji', 'L’un des grands temples zen de Kamakura (1282), à Kita-Kamakura : immense porte Sanmon et pavillon des reliques classé Trésor national.', 'Juste à côté de la gare de Kita-Kamakura : un bon début de journée.'],
      it: ['Engaku-ji', 'Uno dei grandi templi zen di Kamakura (1282), a Kita-Kamakura: un’enorme porta Sanmon e una sala delle reliquie Tesoro nazionale.', 'È proprio accanto alla stazione di Kita-Kamakura: ottimo inizio di giornata.'],
    }, { price: level(1) }),
    P('kenchoji', 'attraction', 35.3335, 139.556, FACE, 4.5, 9600, ['temples', 'hiking', 'history'], {
      ru: ['Кэнтё-дзи', 'Первый в Японии монастырь для обучения дзэн (1253), с садом и тропой к святилищу Хансобо на горе.', 'Поднимитесь к Хансобо по лестнице — в ясный день видна Фудзи.'],
      en: ['Kenchō-ji', 'Japan’s first Zen training monastery (1253), with a garden and a trail up to Hansōbō shrine on the hill.', 'Climb the stairs to Hansōbō — on clear days you can see Fuji.'],
      es: ['Kenchō-ji', 'El primer monasterio de formación zen de Japón (1253), con jardín y un sendero hasta el santuario Hansōbō en el monte.', 'Sube la escalera hasta Hansōbō: en días claros se ve el Fuji.'],
      de: ['Kenchō-ji', 'Japans erstes Zen-Ausbildungskloster (1253) mit Garten und Pfad zum Schrein Hansōbō auf dem Hügel.', 'Die Treppen zum Hansōbō steigen – bei klarer Sicht sieht man den Fuji.'],
      fr: ['Kenchō-ji', 'Le premier monastère de formation zen du Japon (1253), avec un jardin et un sentier vers le sanctuaire Hansōbō sur la colline.', 'Grimpez l’escalier jusqu’à Hansōbō : par temps clair, on voit le Fuji.'],
      it: ['Kenchō-ji', 'Il primo monastero di formazione zen del Giappone (1253), con giardino e sentiero fino al santuario Hansōbō sul colle.', 'Sali le scale fino a Hansōbō: nelle giornate limpide si vede il Fuji.'],
    }, { price: level(1) }),
    P('meigetsuin', 'attraction', 35.3372, 139.551, PALMS, 4.5, 8700, ['temples', 'gardens', 'photo'], {
      ru: ['Мэйгэцу-ин', '«Храм гортензий» в Кита-Камакуре с круглым окном «окно просветления», за которым виден сад.', 'В июне — пик гортензий; задний сад с окном открывают только весной и осенью.'],
      en: ['Meigetsu-in', 'The “hydrangea temple” in Kita-Kamakura, with a round “window of enlightenment” framing the garden.', 'Hydrangeas peak in June; the rear garden behind the window opens only in spring and autumn.'],
      es: ['Meigetsu-in', 'El «templo de las hortensias» de Kita-Kamakura, con una ventana redonda «de la iluminación» que enmarca el jardín.', 'Las hortensias culminan en junio; el jardín trasero tras la ventana abre solo en primavera y otoño.'],
      de: ['Meigetsu-in', 'Der „Hortensientempel“ in Kita-Kamakura mit einem runden „Fenster der Erleuchtung“, das den Garten rahmt.', 'Hortensien blühen im Juni am schönsten; der Garten hinter dem Fenster öffnet nur im Frühling und Herbst.'],
      fr: ['Meigetsu-in', 'Le « temple des hortensias » de Kita-Kamakura, avec une fenêtre ronde « de l’éveil » qui encadre le jardin.', 'Les hortensias culminent en juin ; le jardin derrière la fenêtre n’ouvre qu’au printemps et en automne.'],
      it: ['Meigetsu-in', 'Il «tempio delle ortensie» di Kita-Kamakura, con una finestra rotonda «dell’illuminazione» che incornicia il giardino.', 'Le ortensie sono al culmine a giugno; il giardino dietro la finestra apre solo in primavera e autunno.'],
    }, { spot: 'insta', price: level(1) }),
    P('zeniarai-benten', 'attraction', 35.3255, 139.542, CROWD, 4.4, 12000, ['temples', 'culture'], {
      ru: ['Дзэниараи Бэнтэн', 'Святилище в пещере за туннелем в скале, где монеты и купюры моют в роднике — считается, что деньги приумножатся.', 'Возьмите у входа корзинку, положите деньги и полейте их водой ковшиком.'],
      en: ['Zeniarai Benten', 'A cave shrine reached through a rock tunnel where people wash coins and notes in a spring, believing the money will multiply.', 'Take a basket at the entrance, put your money in and pour water over it with a ladle.'],
      es: ['Zeniarai Benten', 'Un santuario en una cueva, tras un túnel en la roca, donde se lavan monedas y billetes en un manantial para que se multipliquen.', 'Coge una cestita a la entrada, mete el dinero y échale agua con el cazo.'],
      de: ['Zeniarai Benten', 'Ein Höhlenschrein hinter einem Felstunnel, wo man Münzen und Scheine im Quellwasser wäscht, damit sich das Geld vermehrt.', 'Am Eingang ein Körbchen nehmen, Geld hineinlegen und mit der Kelle Wasser darübergießen.'],
      fr: ['Zeniarai Benten', 'Un sanctuaire troglodyte, au bout d’un tunnel dans la roche, où l’on lave pièces et billets dans une source pour qu’ils se multiplient.', 'Prenez un panier à l’entrée, mettez-y l’argent et versez-y l’eau avec la louche.'],
      it: ['Zeniarai Benten', 'Un santuario in una grotta, oltre un tunnel nella roccia, dove si lavano monete e banconote in una sorgente perché si moltiplichino.', 'Prendi un cestino all’ingresso, mettici i soldi e versa l’acqua col mestolo.'],
    }, { spot: 'hidden', price: free }),
    P('kamakurakokomae', 'attraction', 35.3067, 139.5003, COAST, 4.4, 9800, ['photo', 'beaches'], {
      ru: ['Переезд у Камакура-Кококомаэ', 'Железнодорожный переезд Эноден на фоне моря — знаменитый кадр из заставки популярного аниме.', 'Не выходите на проезжую часть ради фото и уважайте жителей — здесь живая улица.'],
      en: ['Kamakurakōkōmae crossing', 'An Enoden level crossing with the sea behind — a famous shot from a popular anime opening.', 'Don’t step into the road for photos and respect the residents — it’s a living street.'],
      es: ['Paso a nivel de Kamakurakōkōmae', 'Un paso a nivel del Enoden con el mar detrás, plano famoso de la apertura de un anime popular.', 'No te metas en la calzada por la foto y respeta a los vecinos: es una calle con vida.'],
      de: ['Bahnübergang Kamakurakōkōmae', 'Ein Enoden-Bahnübergang vor dem Meer – berühmtes Motiv aus dem Vorspann eines beliebten Anime.', 'Für Fotos nicht auf die Fahrbahn treten und Rücksicht auf die Anwohner nehmen.'],
      fr: ['Passage à niveau de Kamakurakōkōmae', 'Un passage à niveau de l’Enoden face à la mer, plan célèbre du générique d’un anime populaire.', 'Ne descendez pas sur la chaussée pour la photo et respectez les riverains.'],
      it: ['Passaggio a livello di Kamakurakōkōmae', 'Un passaggio a livello dell’Enoden col mare alle spalle, inquadratura famosa della sigla di un anime popolare.', 'Non scendere in strada per la foto e rispetta i residenti: è una via vissuta.'],
    }, { spot: 'insta', price: free }),
    P('yuigahama', 'nature', 35.3105, 139.5435, COAST, 4.3, 8100, ['beaches'], {
      ru: ['Пляж Юигахама', 'Широкий песчаный пляж в 15 минутах ходьбы от центра; летом — пляжные домики, зимой — сёрферы и вид на Фудзи.', 'Купальный сезон с пляжными домиками — только июль и август.'],
      en: ['Yuigahama Beach', 'A wide sandy beach 15 minutes’ walk from the centre; beach huts in summer, surfers and Fuji views in winter.', 'The swimming season with beach huts is July and August only.'],
      es: ['Playa de Yuigahama', 'Una amplia playa de arena a 15 minutos a pie del centro; chiringuitos en verano, surfistas y vistas del Fuji en invierno.', 'La temporada de baño con chiringuitos es solo julio y agosto.'],
      de: ['Yuigahama-Strand', 'Ein breiter Sandstrand 15 Gehminuten vom Zentrum; im Sommer Strandhütten, im Winter Surfer und Fuji-Blick.', 'Die Badesaison mit Strandhütten ist nur Juli und August.'],
      fr: ['Plage de Yuigahama', 'Une large plage de sable à 15 minutes à pied du centre ; paillotes l’été, surfeurs et vue sur le Fuji l’hiver.', 'La saison de baignade avec paillotes, c’est juillet et août seulement.'],
      it: ['Spiaggia di Yuigahama', 'Un’ampia spiaggia di sabbia a 15 minuti a piedi dal centro; d’estate i chioschi, d’inverno surfisti e vista sul Fuji.', 'La stagione balneare con i chioschi è solo luglio e agosto.'],
    }, { price: free }),
    P('daibutsu-hiking-course', 'nature', 35.324, 139.539, BUDDHA, 4.4, 4200, ['hiking', 'nature'], {
      ru: ['Тропа Дайбуцу', 'Лесная тропа около 3 км по холмам от Кита-Камакуры к Большому Будде мимо святилища Дзэниараи Бэнтэн.', 'После дождя корни скользкие — нужна обувь с протектором.'],
      en: ['Daibutsu Hiking Course', 'A roughly 3 km forest trail over the hills from Kita-Kamakura to the Great Buddha, past Zeniarai Benten.', 'After rain the roots are slippery — wear shoes with grip.'],
      es: ['Sendero Daibutsu', 'Un sendero forestal de unos 3 km por las colinas de Kita-Kamakura al Gran Buda, pasando por Zeniarai Benten.', 'Tras la lluvia las raíces resbalan: lleva calzado con agarre.'],
      de: ['Daibutsu-Wanderweg', 'Ein rund 3 km langer Waldweg über die Hügel von Kita-Kamakura zum Großen Buddha, vorbei am Zeniarai Benten.', 'Nach Regen sind die Wurzeln rutschig – Schuhe mit Profil tragen.'],
      fr: ['Sentier du Daibutsu', 'Un sentier forestier d’environ 3 km par les collines, de Kita-Kamakura au Grand Bouddha, via Zeniarai Benten.', 'Après la pluie, les racines glissent : prévoyez des chaussures crantées.'],
      it: ['Sentiero del Daibutsu', 'Un sentiero nel bosco di circa 3 km sulle colline da Kita-Kamakura al Grande Buddha, passando per Zeniarai Benten.', 'Dopo la pioggia le radici scivolano: servono scarpe con grip.'],
    }, { spot: 'hidden', price: free }),
    P('enoshima-shrine', 'attraction', 35.3, 139.481, PALMS, 4.4, 15000, ['temples', 'islands'], {
      ru: ['Святилище Эносима', 'Три святилища богини Бэндзайтэн на острове Эносима, соединённом с берегом мостом; к ним ведут лестницы и эскалаторы.', 'Эскалаторы «Эскар» платные, но экономят силы на крутых лестницах.'],
      en: ['Enoshima Shrine', 'Three shrines to the goddess Benzaiten on Enoshima, an island linked to the shore by a bridge, reached by stairs or escalators.', 'The paid “Escar” escalators save your legs on the steep stairs.'],
      es: ['Santuario de Enoshima', 'Tres santuarios de la diosa Benzaiten en Enoshima, isla unida a la costa por un puente, a los que se sube por escaleras o escaleras mecánicas.', 'Las escaleras mecánicas «Escar» son de pago, pero ahorran piernas.'],
      de: ['Enoshima-Schrein', 'Drei Schreine der Göttin Benzaiten auf Enoshima, einer per Brücke verbundenen Insel, erreichbar über Treppen oder Rolltreppen.', 'Die kostenpflichtigen „Escar“-Rolltreppen schonen die Beine.'],
      fr: ['Sanctuaire d’Enoshima', 'Trois sanctuaires de la déesse Benzaiten sur Enoshima, île reliée à la côte par un pont, accessibles par escaliers ou escalators.', 'Les escalators payants « Escar » épargnent vos jambes.'],
      it: ['Santuario di Enoshima', 'Tre santuari della dea Benzaiten su Enoshima, isola collegata alla costa da un ponte, raggiungibili a piedi o con scale mobili.', 'Le scale mobili a pagamento «Escar» risparmiano le gambe.'],
    }, { price: free }),
    P('enoshima-sea-candle', 'attraction', 35.2995, 139.48, PALMS, 4.3, 9200, ['views', 'gardens'], {
      ru: ['Маяк Sea Candle', 'Смотровой маяк на вершине Эносимы в саду Сэмюэла Кокинга: 360° на залив Сагами и, в ясный день, Фудзи.', 'Зимними вечерами сад и маяк украшают иллюминацией.'],
      en: ['Enoshima Sea Candle', 'An observation lighthouse atop Enoshima in the Samuel Cocking Garden: 360° over Sagami Bay and, on clear days, Fuji.', 'On winter evenings the garden and lighthouse are illuminated.'],
      es: ['Faro Sea Candle', 'Un faro mirador en lo alto de Enoshima, en el jardín Samuel Cocking: 360° sobre la bahía de Sagami y, en días claros, el Fuji.', 'Las noches de invierno el jardín y el faro se iluminan.'],
      de: ['Enoshima Sea Candle', 'Ein Aussichtsleuchtturm auf Enoshima im Samuel-Cocking-Garten: 360° über die Sagami-Bucht und bei klarer Sicht den Fuji.', 'An Winterabenden sind Garten und Turm beleuchtet.'],
      fr: ['Phare Sea Candle', 'Un phare-belvédère au sommet d’Enoshima, dans le jardin Samuel Cocking : 360° sur la baie de Sagami et, par temps clair, le Fuji.', 'Les soirs d’hiver, le jardin et le phare sont illuminés.'],
      it: ['Faro Sea Candle', 'Un faro panoramico in cima a Enoshima nel giardino Samuel Cocking: 360° sulla baia di Sagami e, nelle giornate limpide, il Fuji.', 'Nelle sere d’inverno giardino e faro sono illuminati.'],
    }, { spot: 'insta', price: level(1) }),
    P('enoshima-iwaya', 'nature', 35.296, 139.476, COAST, 4.2, 7100, ['nature', 'adventure'], {
      ru: ['Пещеры Ивая', 'Пещеры, вымытые морем на дальней стороне Эносимы, где идут со свечой мимо древних статуй.', 'Спуститься к ним можно по лестнице мимо скал с видом на океан — назад можно уплыть на лодке.'],
      en: ['Iwaya Caves', 'Sea-worn caves on the far side of Enoshima, explored by candlelight past ancient statues.', 'Steps lead down past ocean-view rocks; you can return by boat.'],
      es: ['Cuevas Iwaya', 'Cuevas excavadas por el mar en el extremo de Enoshima, que se recorren con vela entre estatuas antiguas.', 'Se baja por escaleras entre rocas sobre el océano; se puede volver en barca.'],
      de: ['Iwaya-Höhlen', 'Vom Meer ausgewaschene Höhlen auf der Rückseite Enoshimas, die man mit Kerze an alten Statuen vorbei erkundet.', 'Treppen führen an Felsen mit Meerblick hinab; zurück geht es auch per Boot.'],
      fr: ['Grottes d’Iwaya', 'Des grottes creusées par la mer à l’autre bout d’Enoshima, qu’on explore à la bougie parmi de vieilles statues.', 'Des marches descendent le long des rochers face à l’océan ; retour possible en bateau.'],
      it: ['Grotte di Iwaya', 'Grotte scavate dal mare sul lato opposto di Enoshima, da esplorare a lume di candela tra antiche statue.', 'Le scale scendono tra rocce sull’oceano; si può tornare in barca.'],
    }, { price: level(1) }),
    P('hachinoki', 'food', 35.334, 139.553, FACE, 4.4, 1900, ['food'], {
      ru: ['Хатиноки', 'Ресторан сёдзин-рёри — постной буддийской кухни — у Кэнтё-дзи: тофу, кунжут и сезонные овощи в изящной подаче.', 'Хороший обед между храмами Кита-Камакуры; бронируйте в выходные.'],
      en: ['Hachinoki', 'A shōjin-ryōri restaurant — Buddhist vegetarian cuisine — near Kenchō-ji: tofu, sesame and seasonal vegetables, beautifully served.', 'A fine lunch between the Kita-Kamakura temples; book at weekends.'],
      es: ['Hachinoki', 'Un restaurante de shōjin-ryōri —cocina vegetariana budista— cerca de Kenchō-ji: tofu, sésamo y verduras de temporada con bella presentación.', 'Un buen almuerzo entre templos de Kita-Kamakura; reserva en fin de semana.'],
      de: ['Hachinoki', 'Ein Shōjin-Ryōri-Restaurant – buddhistisch-vegetarische Küche – nahe Kenchō-ji: Tofu, Sesam und Saisongemüse, schön angerichtet.', 'Ein feines Mittagessen zwischen den Tempeln; am Wochenende reservieren.'],
      fr: ['Hachinoki', 'Un restaurant de shōjin-ryōri, cuisine végétarienne bouddhique, près du Kenchō-ji : tofu, sésame et légumes de saison joliment servis.', 'Un beau déjeuner entre les temples de Kita-Kamakura ; réservez le week-end.'],
      it: ['Hachinoki', 'Un ristorante di shōjin-ryōri, cucina vegetariana buddhista, vicino al Kenchō-ji: tofu, sesamo e verdure di stagione serviti con grazia.', 'Un ottimo pranzo tra i templi di Kita-Kamakura; prenota nel weekend.'],
    }, { price: level(2), menu: [
      ['Shōjin set', undefined, 'постный буддийский обед|Buddhist vegetarian set|menú vegetariano budista|buddhistisches vegetarisches Menü|menu végétarien bouddhique|menu vegetariano buddhista'],
      ['Goma-dōfu', undefined, 'кунжутный «тофу»|sesame tofu|tofu de sésamo|Sesamtofu|tofu au sésame|tofu di sesamo'],
    ] }),
    P('toshimaya', 'food', 35.3175, 139.553, CROWD, 4.5, 6200, ['food', 'history'], {
      ru: ['Тосимая', 'Кондитерская с эпохи Мэйдзи, придумавшая «Хато сабурэ» — песочное печенье в форме голубя, символ Камакуры.', 'Печенье хорошо хранится — лучший сувенир из Камакуры.'],
      en: ['Toshimaya', 'A confectioner since the Meiji era that created “Hato Sablé” — dove-shaped butter biscuits, a Kamakura symbol.', 'The biscuits keep well — Kamakura’s best souvenir.'],
      es: ['Toshimaya', 'Una confitería de la era Meiji que creó el «Hato Sablé», galletas de mantequilla con forma de paloma, símbolo de Kamakura.', 'Las galletas aguantan bien: el mejor recuerdo de Kamakura.'],
      de: ['Toshimaya', 'Eine Konditorei aus der Meiji-Zeit, die das „Hato Sablé“ erfand – Butterkekse in Taubenform, ein Symbol Kamakuras.', 'Die Kekse halten gut – das beste Mitbringsel aus Kamakura.'],
      fr: ['Toshimaya', 'Une confiserie de l’ère Meiji, créatrice du « Hato Sablé », sablé au beurre en forme de colombe, symbole de Kamakura.', 'Les biscuits se conservent bien : le meilleur souvenir de Kamakura.'],
      it: ['Toshimaya', 'Una pasticceria dell’era Meiji che ha creato l’«Hato Sablé», biscotto al burro a forma di colomba, simbolo di Kamakura.', 'I biscotti si conservano bene: il miglior souvenir di Kamakura.'],
    }, { price: level(1), menu: [
      ['Hato Sablé', undefined, 'песочное печенье-голубь|dove-shaped butter biscuit|galleta de mantequilla con forma de paloma|Butterkeks in Taubenform|sablé en forme de colombe|biscotto al burro a forma di colomba'],
      ['Seasonal wagashi', undefined, 'сезонная японская сладость|seasonal Japanese sweet|dulce japonés de temporada|saisonale japanische Süßigkeit|douceur japonaise de saison|dolce giapponese di stagione'],
    ] }),
    P('beniya-kurumicco', 'food', 35.322, 139.555, CROWD, 4.4, 3100, ['food'], {
      ru: ['Камакура Бэния', 'Кондитерская, знаменитая «Курумикко» — печеньем с грецкими орехами в карамели между слоями масляного теста.', 'Курумикко часто раскупают к обеду — приходите с утра.'],
      en: ['Kamakura Beniya', 'A confectioner famous for “Kurumicco” — walnuts in caramel sandwiched in buttery pastry.', 'Kurumicco often sells out by midday — come in the morning.'],
      es: ['Kamakura Beniya', 'Una confitería famosa por el «Kurumicco»: nueces en caramelo entre capas de masa mantecosa.', 'El Kurumicco suele agotarse a mediodía: ve por la mañana.'],
      de: ['Kamakura Beniya', 'Eine Konditorei, berühmt für „Kurumicco“ – Walnüsse in Karamell zwischen Butterteig.', 'Kurumicco ist oft mittags ausverkauft – morgens kommen.'],
      fr: ['Kamakura Beniya', 'Une confiserie célèbre pour le « Kurumicco » : noix au caramel prises dans une pâte au beurre.', 'Le Kurumicco est souvent épuisé à midi : venez le matin.'],
      it: ['Kamakura Beniya', 'Una pasticceria famosa per il «Kurumicco»: noci al caramello tra strati di pasta al burro.', 'Il Kurumicco spesso finisce entro mezzogiorno: vieni al mattino.'],
    }, { price: level(1), menu: [
      ['Kurumicco', undefined, 'печенье с орехами в карамели|walnut-caramel biscuit|galleta de nuez y caramelo|Walnuss-Karamell-Gebäck|biscuit noix-caramel|biscotto noci e caramello'],
      ['Amandicco', undefined, 'печенье с миндалём|almond biscuit|galleta de almendra|Mandelgebäck|biscuit aux amandes|biscotto alle mandorle'],
    ] }),
    P('tsuruya-unagi', 'food', 35.313, 139.544, CROWD, 4.4, 1700, ['food', 'history'], {
      ru: ['Цуруя', 'Старая угрёвая у Юигахамы, работающая с довоенных лет; её любил писатель Ясунари Кавабата.', 'Бронируйте — мест немного, а угорь готовят под заказ.'],
      en: ['Tsuruya', 'An old eel house near Yuigahama going since before the war, a favourite of the writer Yasunari Kawabata.', 'Book ahead — seats are few and the eel is grilled to order.'],
      es: ['Tsuruya', 'Una vieja casa de anguila cerca de Yuigahama, abierta desde antes de la guerra; era la favorita del escritor Yasunari Kawabata.', 'Reserva: hay pocas mesas y la anguila se asa al momento.'],
      de: ['Tsuruya', 'Ein altes Aal-Lokal nahe Yuigahama aus der Vorkriegszeit, Lieblingslokal des Schriftstellers Yasunari Kawabata.', 'Reservieren – wenige Plätze, der Aal wird frisch gegrillt.'],
      fr: ['Tsuruya', 'Une vieille maison d’anguille près de Yuigahama, ouverte depuis avant-guerre, chère à l’écrivain Yasunari Kawabata.', 'Réservez : peu de places, et l’anguille est grillée à la commande.'],
      it: ['Tsuruya', 'Una vecchia casa dell’anguilla vicino a Yuigahama, aperta da prima della guerra, amata dallo scrittore Yasunari Kawabata.', 'Prenota: pochi posti, e l’anguilla si griglia al momento.'],
    }, { price: level(3), menu: [
      ['Unajū', undefined, 'угорь на рисе в коробке|eel over rice in a lacquer box|anguila sobre arroz en caja lacada|Aal auf Reis in Lackbox|anguille sur riz en boîte laquée|anguilla su riso in scatola laccata'],
      ['Kimo-sui', undefined, 'суп с печенью угря|eel liver soup|sopa de hígado de anguila|Aalleber-Suppe|soupe au foie d’anguille|zuppa di fegato d’anguilla'],
    ] }),
    P('kaikoan-hasedera', 'food', 35.3124, 139.5328, FACE, 4.3, 2100, ['food', 'views'], {
      ru: ['Кайкоан (Хасэ-дэра)', 'Ресторан на территории Хасэ-дэры с видом на залив: лёгкие обеды и сладости прямо в храме.', 'Садитесь у окна — внизу весь пляж Юигахама.'],
      en: ['Kaikōan (Hase-dera)', 'A restaurant inside Hase-dera with a bay view: light lunches and sweets right in the temple.', 'Sit by the window — the whole of Yuigahama beach is below.'],
      es: ['Kaikōan (Hase-dera)', 'Un restaurante dentro de Hase-dera con vistas a la bahía: comidas ligeras y dulces en el propio templo.', 'Siéntate junto a la ventana: abajo está toda la playa de Yuigahama.'],
      de: ['Kaikōan (Hase-dera)', 'Ein Restaurant im Hase-dera mit Buchtblick: leichte Mittagsgerichte und Süßes direkt im Tempel.', 'Am Fenster sitzen – darunter liegt der ganze Yuigahama-Strand.'],
      fr: ['Kaikōan (Hase-dera)', 'Un restaurant dans l’enceinte du Hase-dera avec vue sur la baie : déjeuners légers et douceurs au cœur du temple.', 'Asseyez-vous près de la fenêtre : toute la plage de Yuigahama est en bas.'],
      it: ['Kaikōan (Hase-dera)', 'Un ristorante dentro lo Hase-dera con vista sulla baia: pranzi leggeri e dolci nel tempio stesso.', 'Siediti alla finestra: sotto c’è tutta la spiaggia di Yuigahama.'],
    }, { spot: 'insta', price: level(1) }),
    P('bills-shichirigahama', 'food', 35.306, 139.511, COAST, 4.2, 6900, ['food', 'beaches', 'romance'], {
      ru: ['bills Ситиригахама', 'Первое кафе австралийского шефа Билла Грейнджера за пределами Австралии (2008) с видом на океан; знаменито рикоттовыми панкейками.', 'На закате столики у окна — самые красивые; в выходные бронируйте.'],
      en: ['bills Shichirigahama', 'Australian chef Bill Granger’s first café outside Australia (2008), facing the ocean; famous for ricotta hotcakes.', 'Window tables at sunset are the prettiest; book at weekends.'],
      es: ['bills Shichirigahama', 'El primer café del chef australiano Bill Granger fuera de Australia (2008), frente al océano; famoso por sus tortitas de ricotta.', 'Las mesas junto a la ventana al atardecer son las mejores; reserva en fin de semana.'],
      de: ['bills Shichirigahama', 'Das erste Café des australischen Kochs Bill Granger außerhalb Australiens (2008) mit Meerblick; berühmt für Ricotta-Pancakes.', 'Fenstertische zum Sonnenuntergang sind die schönsten; am Wochenende reservieren.'],
      fr: ['bills Shichirigahama', 'Le premier café du chef australien Bill Granger hors d’Australie (2008), face à l’océan ; célèbre pour ses pancakes à la ricotta.', 'Les tables en fenêtre au coucher du soleil sont les plus belles ; réservez le week-end.'],
      it: ['bills Shichirigahama', 'Il primo caffè dello chef australiano Bill Granger fuori dall’Australia (2008), sull’oceano; famoso per i pancake alla ricotta.', 'I tavoli alla finestra al tramonto sono i più belli; prenota nel weekend.'],
    }, { price: level(2), menu: [
      ['Ricotta hotcakes', undefined, 'панкейки с рикоттой, бананом и медовым маслом|ricotta hotcakes with banana and honeycomb butter|tortitas de ricotta con plátano y mantequilla de miel|Ricotta-Pancakes mit Banane und Honigbutter|pancakes ricotta, banane et beurre au miel|pancake alla ricotta con banana e burro al miele'],
      ['Scrambled eggs', undefined, 'фирменная яичница-скрэмбл|signature scrambled eggs|huevos revueltos de la casa|Rührei nach Hausart|œufs brouillés maison|uova strapazzate della casa'],
    ] }),
    P('renbai-market', 'food', 35.3175, 139.55, CROWD, 4.2, 2400, ['food', 'market'], {
      ru: ['Фермерский рынок Камакуры (Рэнбай)', 'Крытый рынок у станции, где с 1928 года фермеры продают «камакурские овощи», а рядом пекарни и кофе.', 'Приходите утром: к полудню многие прилавки пустеют.'],
      en: ['Kamakura Farmers’ Market (Renbai)', 'A covered market by the station where farmers have sold “Kamakura vegetables” since 1928, with bakeries and coffee nearby.', 'Come in the morning — many stalls are bare by noon.'],
      es: ['Mercado de agricultores de Kamakura (Renbai)', 'Un mercado cubierto junto a la estación donde los agricultores venden «verduras de Kamakura» desde 1928, con panaderías y café cerca.', 'Ve por la mañana: a mediodía muchos puestos están vacíos.'],
      de: ['Bauernmarkt Kamakura (Renbai)', 'Ein überdachter Markt am Bahnhof, auf dem Bauern seit 1928 „Kamakura-Gemüse“ verkaufen, mit Bäckereien und Kaffee daneben.', 'Morgens kommen – mittags sind viele Stände leer.'],
      fr: ['Marché des producteurs de Kamakura (Renbai)', 'Un marché couvert près de la gare où les paysans vendent depuis 1928 les « légumes de Kamakura », avec boulangeries et café à côté.', 'Venez le matin : à midi, beaucoup d’étals sont vides.'],
      it: ['Mercato contadino di Kamakura (Renbai)', 'Un mercato coperto vicino alla stazione dove dal 1928 i contadini vendono le «verdure di Kamakura», con forni e caffè accanto.', 'Vieni al mattino: a mezzogiorno molti banchi sono vuoti.'],
    }, { spot: 'hidden', price: level(1) }),
    P('vivement-dimanche', 'food', 35.3195, 139.552, CROWD, 4.4, 1600, ['food'], {
      ru: ['Café Vivement Dimanche', 'Маленькая кофейня в переулке у Комати-дори, работающая с 1990-х, — свежая обжарка и уютный зал.', 'Спокойная пауза вдали от толпы на главной улице.'],
      en: ['Café Vivement Dimanche', 'A small coffee house in a lane off Komachi-dōri, running since the 1990s — fresh roasts and a cosy room.', 'A calm pause away from the crowds on the main street.'],
      es: ['Café Vivement Dimanche', 'Un pequeño café en un callejón junto a Komachi-dōri, abierto desde los noventa: tueste fresco y sala acogedora.', 'Una pausa tranquila lejos del gentío de la calle principal.'],
      de: ['Café Vivement Dimanche', 'Ein kleines Kaffeehaus in einer Seitengasse der Komachi-dōri seit den 1990ern – frische Röstung und gemütlicher Raum.', 'Eine ruhige Pause abseits der Menge auf der Hauptstraße.'],
      fr: ['Café Vivement Dimanche', 'Un petit café dans une ruelle de Komachi-dōri, ouvert depuis les années 1990 : torréfaction fraîche et salle cosy.', 'Une pause calme loin de la foule de la rue principale.'],
      it: ['Café Vivement Dimanche', 'Una piccola caffetteria in un vicolo di Komachi-dōri, aperta dagli anni Novanta: tostatura fresca e sala accogliente.', 'Una pausa tranquilla lontano dalla folla della via principale.'],
    }, { price: level(1) }),
    P('shirasuya-koshigoe', 'food', 35.308, 139.493, COAST, 4.3, 3700, ['food'], {
      ru: ['Сирасуя (Косигоэ)', 'Ресторан у рыбацкого порта Косигоэ, где подают сирасу-дон — рис с мальками сардины, варёными или сырыми.', 'Сырые сирасу бывают не всегда: с 1 января до середины марта лов закрыт.'],
      en: ['Shirasuya (Koshigoe)', 'A restaurant by Koshigoe fishing port serving shirasu-don — rice topped with baby sardines, boiled or raw.', 'Raw shirasu isn’t always available: fishing is closed from 1 January to mid-March.'],
      es: ['Shirasuya (Koshigoe)', 'Un restaurante junto al puerto pesquero de Koshigoe con shirasu-don: arroz con alevines de sardina, cocidos o crudos.', 'El shirasu crudo no siempre hay: la pesca cierra del 1 de enero a mediados de marzo.'],
      de: ['Shirasuya (Koshigoe)', 'Ein Lokal am Fischerhafen Koshigoe mit Shirasu-don – Reis mit jungen Sardinen, gekocht oder roh.', 'Rohe Shirasu gibt es nicht immer: Vom 1. Januar bis Mitte März ruht die Fischerei.'],
      fr: ['Shirasuya (Koshigoe)', 'Un restaurant près du port de pêche de Koshigoe servant le shirasu-don : riz garni d’alevins de sardine, cuits ou crus.', 'Le shirasu cru n’est pas toujours là : la pêche ferme du 1er janvier à mi-mars.'],
      it: ['Shirasuya (Koshigoe)', 'Un ristorante vicino al porto peschereccio di Koshigoe con lo shirasu-don: riso con bianchetti di sardina, bolliti o crudi.', 'Lo shirasu crudo non c’è sempre: la pesca è chiusa dal 1° gennaio a metà marzo.'],
    }, { price: level(2), menu: [
      ['Nama-shirasu-don', undefined, 'рис с сырыми мальками|rice with raw whitebait|arroz con alevines crudos|Reis mit rohen Jungfischen|riz aux alevins crus|riso con bianchetti crudi'],
      ['Kama-age shirasu-don', undefined, 'рис с варёными мальками|rice with boiled whitebait|arroz con alevines cocidos|Reis mit gekochten Jungfischen|riz aux alevins cuits|riso con bianchetti bolliti'],
    ] }),
    P('tobicho-enoshima', 'food', 35.2995, 139.4815, PALMS, 4.2, 6600, ['food'], {
      ru: ['Тобиттё (Эносима)', 'Популярный ресторан морепродуктов на острове Эносима: сирасу-дон, кайсэн-дон и жареная рыба.', 'Очередь начинается до открытия — возьмите номерок у входа.'],
      en: ['Tobicchō (Enoshima)', 'A popular seafood restaurant on Enoshima: shirasu-don, kaisendon and fried fish.', 'The queue starts before opening — take a number at the door.'],
      es: ['Tobicchō (Enoshima)', 'Un popular restaurante de marisco en Enoshima: shirasu-don, kaisendon y pescado frito.', 'La cola empieza antes de abrir: coge número en la puerta.'],
      de: ['Tobicchō (Enoshima)', 'Ein beliebtes Fischlokal auf Enoshima: Shirasu-don, Kaisendon und frittierter Fisch.', 'Die Schlange beginnt vor Öffnung – an der Tür eine Nummer ziehen.'],
      fr: ['Tobicchō (Enoshima)', 'Un restaurant de fruits de mer très prisé à Enoshima : shirasu-don, kaisendon et poisson frit.', 'La file se forme avant l’ouverture : prenez un numéro à la porte.'],
      it: ['Tobicchō (Enoshima)', 'Un ristorante di pesce molto amato su Enoshima: shirasu-don, kaisendon e pesce fritto.', 'La fila inizia prima dell’apertura: prendi il numero alla porta.'],
    }, { price: level(2), menu: [
      ['Shirasu-don', undefined, 'рис с мальками сардины|rice with baby sardines|arroz con alevines de sardina|Reis mit jungen Sardinen|riz aux alevins de sardine|riso con bianchetti'],
      ['Kaisendon', undefined, 'рис с ассорти морепродуктов|mixed seafood rice bowl|bol de arroz con marisco|Reisschale mit Meeresfrüchten|bol de riz aux fruits de mer|ciotola di riso ai frutti di mare'],
    ] }),
    P('uomitei-enoshima', 'food', 35.297, 139.4775, COAST, 4.2, 2700, ['food', 'views'], {
      ru: ['Уомитэй (Эносима)', 'Старая закусочная на скалах дальней стороны Эносимы с открытой террасой над морем: тубояки — тюрбо на гриле в раковине.', 'Хорошая остановка перед спуском к пещерам Ивая.'],
      en: ['Uomitei (Enoshima)', 'An old eatery on the cliffs at the far end of Enoshima with an open terrace over the sea: tsuboyaki — turban shell grilled in its shell.', 'A good stop before heading down to the Iwaya Caves.'],
      es: ['Uomitei (Enoshima)', 'Una vieja casa de comidas en los acantilados al final de Enoshima, con terraza abierta sobre el mar: tsuboyaki, caracola asada en su concha.', 'Buena parada antes de bajar a las cuevas Iwaya.'],
      de: ['Uomitei (Enoshima)', 'Ein altes Lokal auf den Klippen am Ende Enoshimas mit offener Terrasse überm Meer: Tsuboyaki – Turbanschnecke in der Schale gegrillt.', 'Ein guter Halt vor dem Abstieg zu den Iwaya-Höhlen.'],
      fr: ['Uomitei (Enoshima)', 'Une vieille gargote sur les falaises au bout d’Enoshima, terrasse ouverte sur la mer : tsuboyaki, turbo grillé dans sa coquille.', 'Une bonne halte avant de descendre aux grottes d’Iwaya.'],
      it: ['Uomitei (Enoshima)', 'Una vecchia trattoria sulle scogliere in fondo a Enoshima, con terrazza aperta sul mare: tsuboyaki, turbante grigliato nel guscio.', 'Una buona sosta prima di scendere alle grotte di Iwaya.'],
    }, { spot: 'insta', price: level(2), menu: [
      ['Sazae tsuboyaki', undefined, 'морская улитка, запечённая в раковине|turban shell grilled in its shell|caracola asada en su concha|Turbanschnecke in der Schale gegrillt|turbo grillé dans sa coquille|turbante grigliato nel guscio'],
      ['Shirasu-don', undefined, 'рис с мальками сардины|rice with baby sardines|arroz con alevines de sardina|Reis mit jungen Sardinen|riz aux alevins de sardine|riso con bianchetti'],
    ] }),
  ],
  routes: [
    D(['engakuji', 'meigetsuin', 'kenchoji', 'hachinoki', 'tsurugaoka-hachimangu', 'toshimaya', 'komachi-dori', 'hokokuji', 'tsuruya-unagi'],
      'Дзэн-храмы Кита-Камакуры, святилище и бамбук|Kita-Kamakura’s Zen temples, the shrine and the bamboo|Templos zen de Kita-Kamakura, el santuario y el bambú|Zen-Tempel in Kita-Kamakura, der Schrein und der Bambus|Temples zen de Kita-Kamakura, le sanctuaire et le bambou|Templi zen di Kita-Kamakura, il santuario e il bambù'),
    D(['daibutsu-hiking-course', 'zeniarai-benten', 'kotokuin-daibutsu', 'hasedera', 'kaikoan-hasedera', 'yuigahama', 'kamakurakokomae', 'bills-shichirigahama'],
      'Тропа к Большому Будде, Хасэ-дэра и море|The trail to the Great Buddha, Hase-dera and the sea|El sendero al Gran Buda, Hase-dera y el mar|Der Pfad zum Großen Buddha, Hase-dera und das Meer|Le sentier du Grand Bouddha, le Hase-dera et la mer|Il sentiero al Grande Buddha, lo Hase-dera e il mare'),
    D(['renbai-market', 'beniya-kurumicco', 'shirasuya-koshigoe', 'enoshima-shrine', 'enoshima-sea-candle', 'enoshima-iwaya', 'uomitei-enoshima', 'tobicho-enoshima'],
      'Рынок, сирасу и остров Эносима|The market, shirasu and Enoshima island|El mercado, el shirasu y la isla de Enoshima|Markt, Shirasu und die Insel Enoshima|Le marché, le shirasu et l’île d’Enoshima|Il mercato, lo shirasu e l’isola di Enoshima'),
  ],
};

export default pack;
