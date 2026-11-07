import type { CityPack } from '../types';
import { free, level, makeDay, makePlace } from './_kit.ts';

const P = makePlace('fukuoka');
const D = makeDay('fukuoka');
const HARBOR = 'mLj-3CrsEC4';
const RIVER = 'Si4k9aNcr1c';
const OHORI = 'L_GSQ5N8IU0';
const MARKET = 'kNyxT2yUIoc';
const TENJIN = 'V46fgZZLJCY';
const HILL = 'busmtYFDR70';

const pack: CityPack = {
  country: 'JP',
  city: 'fukuoka',
  places: [
    P('ohori-park', 'nature', 33.586, 130.376, OHORI, 4.5, 26000, ['nature', 'gardens'], {
      ru: ['Парк Охори', 'Большое озеро в центре с двухкилометровой дорожкой вокруг, островками, мостиками и японским садом.', 'Возьмите напрокат лодку-лебедя или пробегитесь по кругу с местными утром.'],
      en: ['Ōhori Park', 'A big lake in the centre with a 2 km path around it, islets, bridges and a Japanese garden.', 'Rent a swan boat or join the locals jogging the loop in the morning.'],
      es: ['Parque Ōhori', 'Un gran lago en el centro con un camino de 2 km alrededor, islotes, puentes y un jardín japonés.', 'Alquila una barca cisne o corre la vuelta con los locales por la mañana.'],
      de: ['Ōhori-Park', 'Ein großer See im Zentrum mit 2 km Rundweg, Inselchen, Brücken und japanischem Garten.', 'Ein Schwanentretboot mieten oder morgens mit Einheimischen die Runde joggen.'],
      fr: ['Parc Ōhori', 'Un grand lac au centre, avec un sentier de 2 km, des îlots, des ponts et un jardin japonais.', 'Louez un pédalo-cygne ou faites le tour en courant avec les habitants le matin.'],
      it: ['Parco Ōhori', 'Un grande lago in centro con un percorso di 2 km, isolotti, ponti e un giardino giapponese.', 'Noleggia un pedalò a cigno o corri il giro con i locali al mattino.'],
    }, { spot: 'insta', price: free }),
    P('fukuoka-castle-ruins', 'attraction', 33.5845, 130.383, HILL, 4.3, 15000, ['castles', 'history'], {
      ru: ['Руины замка Фукуока', 'Мощные каменные стены замка XVII века в парке Майдзуру; с основания главной башни — вид на город.', 'В конце марта здесь один из главных праздников сакуры города с вечерней подсветкой.'],
      en: ['Fukuoka Castle ruins', 'Massive 17th-century stone walls in Maizuru Park; the base of the main keep has a city view.', 'In late March it hosts one of the city’s main cherry-blossom festivals, lit up at night.'],
      es: ['Ruinas del castillo de Fukuoka', 'Enormes murallas del siglo XVII en el parque Maizuru; desde la base del torreón hay vista de la ciudad.', 'A finales de marzo acoge una de las grandes fiestas de cerezos, iluminada de noche.'],
      de: ['Burgruinen Fukuoka', 'Mächtige Steinmauern aus dem 17. Jh. im Maizuru-Park; vom Fundament des Hauptturms Blick auf die Stadt.', 'Ende März eines der wichtigsten Kirschblütenfeste der Stadt, abends beleuchtet.'],
      fr: ['Ruines du château de Fukuoka', 'D’imposantes murailles du XVIIe dans le parc Maizuru ; depuis le socle du donjon, vue sur la ville.', 'Fin mars, l’une des grandes fêtes des cerisiers de la ville, illuminée le soir.'],
      it: ['Rovine del castello di Fukuoka', 'Imponenti mura del XVII secolo nel parco Maizuru; dalla base del mastio vista sulla città.', 'A fine marzo una delle principali feste dei ciliegi, illuminata la sera.'],
    }, { price: free }),
    P('kushida-shrine', 'attraction', 33.593, 130.4105, TENJIN, 4.4, 13000, ['temples', 'culture'], {
      ru: ['Святилище Кусида', 'Главное святилище Хакаты (VIII век), центр июльского праздника Ямакаса; круглый год здесь стоит огромная украшенная повозка.', 'Посмотрите повозку-кадзари-ямакаса высотой с несколько этажей.'],
      en: ['Kushida Shrine', 'Hakata’s main shrine (8th century), heart of the July Yamakasa festival; a towering decorated float stands here all year.', 'Look up at the multi-storey kazari-yamakasa float.'],
      es: ['Santuario Kushida', 'El santuario principal de Hakata (siglo VIII), corazón del festival Yamakasa de julio; todo el año expone una enorme carroza decorada.', 'Mira la carroza kazari-yamakasa, alta como varios pisos.'],
      de: ['Kushida-Schrein', 'Hakatas Hauptschrein (8. Jh.), Herz des Yamakasa-Festes im Juli; ganzjährig steht hier ein riesiger geschmückter Festwagen.', 'Den mehrstöckigen Kazari-Yamakasa-Wagen ansehen.'],
      fr: ['Sanctuaire Kushida', 'Le grand sanctuaire de Hakata (VIIIe siècle), cœur de la fête Yamakasa de juillet ; un char décoré géant y est exposé toute l’année.', 'Admirez le char kazari-yamakasa haut de plusieurs étages.'],
      it: ['Santuario Kushida', 'Il santuario principale di Hakata (VIII secolo), cuore della festa Yamakasa di luglio; tutto l’anno vi si trova un enorme carro decorato.', 'Guarda il carro kazari-yamakasa alto più piani.'],
    }, { price: free }),
    P('tochoji', 'attraction', 33.596, 130.411, TENJIN, 4.4, 7400, ['temples', 'history'], {
      ru: ['Тотё-дзи', 'Храм, основанный монахом Кукаем в 806 году, с крупнейшей в Японии сидячей деревянной статуей Будды (около 10 м).', 'Под статуей есть тёмный проход «ад и рай» — идите, держась за перила.'],
      en: ['Tōchō-ji', 'A temple founded by the monk Kūkai in 806, with Japan’s largest seated wooden Buddha (about 10 m).', 'Beneath the statue is a pitch-dark “hell and paradise” passage — follow the handrail.'],
      es: ['Tōchō-ji', 'Un templo fundado por el monje Kūkai en 806, con el mayor Buda sedente de madera de Japón (unos 10 m).', 'Bajo la estatua hay un pasillo a oscuras «infierno y paraíso»: sigue la barandilla.'],
      de: ['Tōchō-ji', 'Ein 806 vom Mönch Kūkai gegründeter Tempel mit Japans größtem sitzendem Holzbuddha (rund 10 m).', 'Unter der Statue führt ein stockdunkler „Hölle-und-Paradies“-Gang – am Geländer entlang.'],
      fr: ['Tōchō-ji', 'Un temple fondé par le moine Kūkai en 806, abritant le plus grand Bouddha assis en bois du Japon (environ 10 m).', 'Sous la statue, un couloir obscur « enfer et paradis » : suivez la rampe.'],
      it: ['Tōchō-ji', 'Un tempio fondato dal monaco Kūkai nell’806, con il più grande Buddha seduto in legno del Giappone (circa 10 m).', 'Sotto la statua c’è un passaggio buio «inferno e paradiso»: segui il corrimano.'],
    }, { price: level(1) }),
    P('shofukuji', 'attraction', 33.598, 130.412, TENJIN, 4.3, 3900, ['temples', 'history'], {
      ru: ['Сёфуку-дзи', 'Первый дзэн-храм Японии, основанный монахом Эйсаем в 1195 году; тихие дорожки между стенами и мхом.', 'Внутренние залы закрыты, но прогулка по территории — спокойная пауза в шумной Хакате.'],
      en: ['Shōfuku-ji', 'Japan’s first Zen temple, founded by the monk Eisai in 1195; quiet paths between walls and moss.', 'The halls are closed, but a walk round the grounds is a calm pause in busy Hakata.'],
      es: ['Shōfuku-ji', 'El primer templo zen de Japón, fundado por el monje Eisai en 1195; senderos tranquilos entre muros y musgo.', 'Los salones están cerrados, pero pasear por el recinto es una pausa serena.'],
      de: ['Shōfuku-ji', 'Japans erster Zen-Tempel, 1195 vom Mönch Eisai gegründet; stille Wege zwischen Mauern und Moos.', 'Die Hallen sind geschlossen, aber ein Gang übers Gelände ist eine ruhige Pause im lauten Hakata.'],
      fr: ['Shōfuku-ji', 'Le premier temple zen du Japon, fondé par le moine Eisai en 1195 ; allées paisibles entre murs et mousse.', 'Les pavillons sont fermés, mais la promenade est une pause calme dans Hakata animée.'],
      it: ['Shōfuku-ji', 'Il primo tempio zen del Giappone, fondato dal monaco Eisai nel 1195; vialetti tranquilli tra muri e muschio.', 'Le sale sono chiuse, ma passeggiare nel recinto è una pausa serena nella vivace Hakata.'],
    }, { spot: 'hidden', price: free }),
    P('canal-city', 'attraction', 33.5897, 130.411, RIVER, 4.2, 31000, ['shopping', 'nightlife'], {
      ru: ['Canal City Hakata', 'Торговый комплекс вокруг искусственного канала с музыкальными фонтанами и этажом рамэн-лавок со всей Японии.', 'Фонтанное шоу идёт каждые полчаса, вечером — со светом.'],
      en: ['Canal City Hakata', 'A shopping complex around an artificial canal with musical fountains and a floor of ramen shops from all over Japan.', 'The fountain show runs every half hour, with lights in the evening.'],
      es: ['Canal City Hakata', 'Un complejo comercial en torno a un canal artificial con fuentes musicales y una planta de ramen de todo Japón.', 'El espectáculo de fuentes es cada media hora, con luces por la noche.'],
      de: ['Canal City Hakata', 'Ein Einkaufskomplex um einen künstlichen Kanal mit Musikbrunnen und einer Etage voller Ramen-Läden aus ganz Japan.', 'Die Brunnenshow läuft halbstündlich, abends mit Licht.'],
      fr: ['Canal City Hakata', 'Un complexe commercial autour d’un canal artificiel, avec fontaines musicales et un étage de ramen de tout le Japon.', 'Le spectacle de fontaines a lieu toutes les demi-heures, en lumière le soir.'],
      it: ['Canal City Hakata', 'Un complesso commerciale attorno a un canale artificiale con fontane musicali e un piano di ramen da tutto il Giappone.', 'Lo spettacolo delle fontane è ogni mezz’ora, la sera con le luci.'],
    }, { price: free }),
    P('fukuoka-tower', 'attraction', 33.5933, 130.3515, HARBOR, 4.3, 22000, ['views', 'architecture'], {
      ru: ['Башня Фукуока', 'Зеркальная башня высотой 234 м у моря в районе Момоти со смотровой площадкой на 123 м.', 'После заката спуститесь на пляж Момоти — башня подсвечивается разными цветами.'],
      en: ['Fukuoka Tower', 'A 234 m mirrored tower by the sea in Momochi with an observation deck at 123 m.', 'After sunset walk down to Momochi beach — the tower lights up in changing colours.'],
      es: ['Torre de Fukuoka', 'Una torre espejada de 234 m junto al mar en Momochi, con mirador a 123 m.', 'Tras la puesta de sol baja a la playa de Momochi: la torre se ilumina de colores.'],
      de: ['Fukuoka Tower', 'Ein 234 m hoher verspiegelter Turm am Meer in Momochi mit Aussichtsdeck in 123 m.', 'Nach Sonnenuntergang zum Momochi-Strand gehen – der Turm leuchtet in wechselnden Farben.'],
      fr: ['Tour de Fukuoka', 'Une tour miroir de 234 m au bord de la mer à Momochi, observatoire à 123 m.', 'Après le coucher du soleil, descendez à la plage de Momochi : la tour change de couleurs.'],
      it: ['Torre di Fukuoka', 'Una torre a specchio di 234 m sul mare a Momochi con osservatorio a 123 m.', 'Dopo il tramonto scendi alla spiaggia di Momochi: la torre si illumina di colori.'],
    }, { spot: 'insta', price: level(2) }),
    P('acros-fukuoka', 'attraction', 33.5915, 130.401, TENJIN, 4.4, 9800, ['architecture', 'gardens', 'photo'], {
      ru: ['ACROS Fukuoka', 'Здание 1995 года со ступенчатым садом: фасад со стороны парка — зелёные террасы-холм, по которым можно подняться.', 'Сад-ступени открыт днём и бесплатен; наверху — вид на Тэндзин.'],
      en: ['ACROS Fukuoka', 'A 1995 building with a “Step Garden”: the park-side façade is a hill of green terraces you can climb.', 'The Step Garden is open by day and free; the top looks over Tenjin.'],
      es: ['ACROS Fukuoka', 'Un edificio de 1995 con un «jardín escalonado»: la fachada hacia el parque es una colina de terrazas verdes que se puede subir.', 'El jardín abre de día y es gratis; desde arriba se ve Tenjin.'],
      de: ['ACROS Fukuoka', 'Ein Gebäude von 1995 mit „Step Garden“: Die Parkfassade ist ein Hügel aus grünen Terrassen zum Hinaufsteigen.', 'Der Step Garden ist tagsüber offen und gratis; oben Blick über Tenjin.'],
      fr: ['ACROS Fukuoka', 'Un bâtiment de 1995 au « jardin en gradins » : la façade côté parc est une colline de terrasses vertes à gravir.', 'Le jardin est ouvert le jour et gratuit ; du haut, vue sur Tenjin.'],
      it: ['ACROS Fukuoka', 'Un edificio del 1995 con lo «Step Garden»: la facciata sul parco è una collina di terrazze verdi da salire.', 'Il giardino è aperto di giorno e gratuito; dall’alto si vede Tenjin.'],
    }, { spot: 'insta', price: free }),
    P('dazaifu-tenmangu', 'attraction', 33.5215, 130.5349, HILL, 4.5, 39000, ['temples', 'history', 'gardens'], {
      ru: ['Дадзайфу Тэммангу', 'Святилище учёного Сугавары-но Митидзанэ, покровителя учёбы; вокруг — около шести тысяч сливовых деревьев.', 'Сливы цветут в феврале; к святилищу ведёт улица со сладостями умэгаэ-моти.'],
      en: ['Dazaifu Tenmangū', 'The shrine of the scholar Sugawara no Michizane, patron of learning, surrounded by some six thousand plum trees.', 'The plums bloom in February; the approach is lined with umegae-mochi sweet shops.'],
      es: ['Dazaifu Tenmangū', 'El santuario del erudito Sugawara no Michizane, patrón del estudio, rodeado de unos seis mil ciruelos.', 'Los ciruelos florecen en febrero; la calle de acceso está llena de dulcerías de umegae-mochi.'],
      de: ['Dazaifu Tenmangū', 'Der Schrein des Gelehrten Sugawara no Michizane, Schutzpatron des Lernens, umgeben von rund sechstausend Pflaumenbäumen.', 'Die Pflaumen blühen im Februar; der Zugang ist von Umegae-Mochi-Läden gesäumt.'],
      fr: ['Dazaifu Tenmangū', 'Le sanctuaire du lettré Sugawara no Michizane, patron des études, entouré de quelque six mille pruniers.', 'Les pruniers fleurissent en février ; l’allée d’accès est bordée de boutiques d’umegae-mochi.'],
      it: ['Dazaifu Tenmangū', 'Il santuario dello studioso Sugawara no Michizane, patrono dello studio, circondato da circa seimila susini.', 'I susini fioriscono a febbraio; il viale d’accesso è pieno di negozi di umegae-mochi.'],
    }, { spot: 'insta', price: free }),
    P('kyushu-national-museum', 'attraction', 33.5185, 130.5385, HILL, 4.5, 11000, ['museums', 'history', 'architecture'], {
      ru: ['Национальный музей Кюсю', 'Музей 2005 года в волнообразном стеклянном здании о связях Японии с Азией; соединён со святилищем Дадзайфу тоннелем с эскалаторами.', 'Пройдите через радужный тоннель-эскалатор от святилища.'],
      en: ['Kyushu National Museum', 'A 2005 museum in a wave-shaped glass building about Japan’s ties with Asia, linked to Dazaifu shrine by an escalator tunnel.', 'Walk through the rainbow-lit escalator tunnel from the shrine.'],
      es: ['Museo Nacional de Kyushu', 'Un museo de 2005 en un edificio de cristal ondulado sobre los lazos de Japón con Asia, unido al santuario de Dazaifu por un túnel de escaleras mecánicas.', 'Atraviesa el túnel de escaleras iluminado con arcoíris desde el santuario.'],
      de: ['Nationalmuseum Kyūshū', 'Ein Museum von 2005 in einem wellenförmigen Glasbau über Japans Beziehungen zu Asien, mit dem Dazaifu-Schrein durch einen Rolltreppentunnel verbunden.', 'Durch den regenbogenbeleuchteten Rolltreppentunnel vom Schrein gehen.'],
      fr: ['Musée national de Kyūshū', 'Un musée de 2005 dans un bâtiment de verre ondulé, consacré aux liens du Japon avec l’Asie, relié au sanctuaire de Dazaifu par un tunnel d’escalators.', 'Empruntez le tunnel d’escalators arc-en-ciel depuis le sanctuaire.'],
      it: ['Museo nazionale del Kyushu', 'Un museo del 2005 in un edificio di vetro ondulato sui legami del Giappone con l’Asia, collegato al santuario di Dazaifu da un tunnel di scale mobili.', 'Percorri il tunnel di scale mobili illuminato ad arcobaleno dal santuario.'],
    }, { price: level(1) }),
    P('nanzoin', 'attraction', 33.621, 130.577, HILL, 4.5, 9100, ['temples', 'photo'], {
      ru: ['Нандзо-ин', 'Храм в Сасагури с гигантским бронзовым лежащим Буддой длиной 41 м — одной из крупнейших бронзовых статуй мира.', 'Едут электричкой JR до станции Кидо-Нандзоин-маэ, около 25 минут от Хакаты.'],
      en: ['Nanzō-in', 'A temple in Sasaguri with a giant 41 m bronze reclining Buddha, one of the largest bronze statues in the world.', 'Take the JR to Kidō-Nanzōin-mae, about 25 minutes from Hakata.'],
      es: ['Nanzō-in', 'Un templo en Sasaguri con un gigantesco Buda yacente de bronce de 41 m, una de las mayores estatuas de bronce del mundo.', 'Tren JR hasta Kidō-Nanzōin-mae, unos 25 minutos desde Hakata.'],
      de: ['Nanzō-in', 'Ein Tempel in Sasaguri mit einem riesigen 41 m langen liegenden Bronzebuddha, einer der größten Bronzestatuen der Welt.', 'Mit der JR bis Kidō-Nanzōin-mae, etwa 25 Minuten ab Hakata.'],
      fr: ['Nanzō-in', 'Un temple de Sasaguri avec un gigantesque Bouddha couché en bronze de 41 m, l’une des plus grandes statues de bronze au monde.', 'Train JR jusqu’à Kidō-Nanzōin-mae, à 25 minutes de Hakata.'],
      it: ['Nanzō-in', 'Un tempio a Sasaguri con un gigantesco Buddha disteso di bronzo di 41 m, una delle statue in bronzo più grandi al mondo.', 'Treno JR fino a Kidō-Nanzōin-mae, circa 25 minuti da Hakata.'],
    }, { spot: 'insta', price: free }),
    P('futamigaura', 'nature', 33.646, 130.186, HARBOR, 4.6, 7800, ['beaches', 'sunset', 'photo'], {
      ru: ['Футамигаура (Итосима)', 'Две «супружеские» скалы в море, связанные священной верёвкой, с белыми воротами тории на пляже — место для заката.', 'Вдоль побережья Итосимы много кафе с видом на море — удобно на машине.'],
      en: ['Futamigaura (Itoshima)', 'Two “wedded rocks” in the sea joined by a sacred rope, with a white torii on the beach — a sunset spot.', 'The Itoshima coast is lined with sea-view cafés — easiest by car.'],
      es: ['Futamigaura (Itoshima)', 'Dos «rocas casadas» en el mar unidas por una cuerda sagrada, con un torii blanco en la playa: lugar de atardecer.', 'La costa de Itoshima está llena de cafés frente al mar; mejor en coche.'],
      de: ['Futamigaura (Itoshima)', 'Zwei „vermählte Felsen“ im Meer, durch ein heiliges Seil verbunden, mit weißem Torii am Strand – ein Sonnenuntergangsort.', 'An der Itoshima-Küste reihen sich Cafés mit Meerblick – am besten mit dem Auto.'],
      fr: ['Futamigaura (Itoshima)', 'Deux « rochers mariés » dans la mer reliés par une corde sacrée, avec un torii blanc sur la plage : un spot de coucher de soleil.', 'La côte d’Itoshima aligne des cafés face à la mer : plus simple en voiture.'],
      it: ['Futamigaura (Itoshima)', 'Due «rocce sposate» nel mare unite da una corda sacra, con un torii bianco sulla spiaggia: un posto da tramonto.', 'La costa di Itoshima è piena di caffè sul mare: più facile in auto.'],
    }, { spot: 'insta', price: free }),
    P('nokonoshima', 'nature', 33.628, 130.306, HARBOR, 4.4, 8600, ['islands', 'gardens', 'nature'], {
      ru: ['Остров Нокономисима', 'Остров в 10 минутах на пароме от Мэйнохамы с цветочным парком — нанохана весной, космеи осенью — и видом на залив.', 'Проверьте, что цветёт в месяц поездки, — поля меняются по сезонам.'],
      en: ['Nokonoshima Island', 'An island 10 minutes by ferry from Meinohama with a flower park — rapeseed in spring, cosmos in autumn — and bay views.', 'Check what’s in bloom for your month — the fields change with the seasons.'],
      es: ['Isla de Nokonoshima', 'Una isla a 10 minutos en ferri desde Meinohama con un parque de flores —colza en primavera, cosmos en otoño— y vistas a la bahía.', 'Mira qué florece en tu mes: los campos cambian con las estaciones.'],
      de: ['Insel Nokonoshima', 'Eine Insel 10 Fährminuten von Meinohama mit Blumenpark – Raps im Frühling, Kosmeen im Herbst – und Buchtblick.', 'Prüfen, was im Reisemonat blüht – die Felder wechseln mit den Jahreszeiten.'],
      fr: ['Île de Nokonoshima', 'Une île à 10 minutes de ferry de Meinohama, avec un parc floral — colza au printemps, cosmos à l’automne — et vue sur la baie.', 'Vérifiez ce qui fleurit pendant votre mois : les champs changent avec les saisons.'],
      it: ['Isola di Nokonoshima', 'Un’isola a 10 minuti di traghetto da Meinohama con un parco fiorito — colza in primavera, cosmee in autunno — e vista sulla baia.', 'Controlla cosa fiorisce nel tuo mese: i campi cambiano con le stagioni.'],
    }, { price: level(1) }),
    P('nakasu-yatai', 'food', 33.5925, 130.406, RIVER, 4.3, 21000, ['food', 'streetfood', 'nightlife'], {
      ru: ['Ятай на Накасу', 'Ряд вечерних уличных ларьков вдоль реки Нака: рамэн, якитори, одэн и пиво за стойкой на восемь человек.', 'Открываются около 18:00; в дождь и сильный ветер часть не работает.'],
      en: ['Nakasu yatai', 'A row of evening street stalls along the Naka River: ramen, yakitori, oden and beer at counters for eight.', 'They open around 6 pm; some close in rain or strong wind.'],
      es: ['Yatai de Nakasu', 'Una hilera de puestos nocturnos junto al río Naka: ramen, yakitori, oden y cerveza en barras para ocho.', 'Abren hacia las 18:00; con lluvia o viento fuerte algunos no montan.'],
      de: ['Yatai in Nakasu', 'Eine Reihe abendlicher Garküchen am Naka-Fluss: Ramen, Yakitori, Oden und Bier an Tresen für acht.', 'Sie öffnen gegen 18 Uhr; bei Regen oder Sturm bleiben manche zu.'],
      fr: ['Yatai de Nakasu', 'Une rangée d’échoppes du soir le long de la Naka : ramen, yakitori, oden et bière au comptoir pour huit.', 'Ouverture vers 18 h ; certaines ferment par pluie ou grand vent.'],
      it: ['Yatai di Nakasu', 'Una fila di chioschi serali lungo il fiume Naka: ramen, yakitori, oden e birra a banconi da otto.', 'Aprono verso le 18; con pioggia o vento forte alcuni restano chiusi.'],
    }, { spot: 'insta', price: level(1), menu: [
      ['Hakata ramen', undefined, 'тонкоцу-рамэн с тонкой лапшой|tonkotsu ramen with thin noodles|ramen tonkotsu de fideos finos|Tonkotsu-Ramen mit dünnen Nudeln|ramen tonkotsu aux nouilles fines|ramen tonkotsu con noodle sottili'],
      ['Yakitori', undefined, 'шашлычки якитори|grilled skewers|brochetas a la parrilla|gegrillte Spieße|brochettes grillées|spiedini alla griglia'],
    ] }),
    P('ichiran-honsha', 'food', 33.5934, 130.4062, RIVER, 4.3, 17000, ['food'], {
      ru: ['Ичиран, главный ресторан', 'Главный ресторан сети тонкоцу-рамэна из Фукуоки: едят в отдельных кабинках, а остроту и жирность выбирают в анкете.', 'Отметьте в анкете «каэдама» — добавку лапши можно заказать кнопкой.'],
      en: ['Ichiran Head Store', 'The flagship of Fukuoka’s tonkotsu ramen chain: you eat in solo booths and choose spice and richness on a form.', 'Mark “kaedama” on the form — you can order extra noodles with a button.'],
      es: ['Ichiran, local principal', 'El local insignia de la cadena de ramen tonkotsu de Fukuoka: se come en cubículos individuales y eliges picante y grasa en un formulario.', 'Marca «kaedama»: puedes pedir más fideos con un botón.'],
      de: ['Ichiran-Stammhaus', 'Das Flaggschiff der Tonkotsu-Ramen-Kette aus Fukuoka: Man isst in Einzelkabinen und wählt Schärfe und Fettgehalt auf einem Zettel.', '„Kaedama“ ankreuzen – Extranudeln bestellt man per Knopf.'],
      fr: ['Ichiran, maison mère', 'Le vaisseau amiral de la chaîne de ramen tonkotsu de Fukuoka : on mange dans des box individuels et l’on choisit piquant et richesse sur un formulaire.', 'Cochez « kaedama » : on commande un supplément de nouilles par bouton.'],
      it: ['Ichiran, sede principale', 'Il locale principale della catena di ramen tonkotsu di Fukuoka: si mangia in box singoli e si scelgono piccantezza e grassezza su un modulo.', 'Segna «kaedama»: puoi ordinare altri noodle con un pulsante.'],
    }, { price: level(1), menu: [
      ['Tonkotsu ramen', undefined, 'рамэн на свином бульоне|pork-bone broth ramen|ramen de caldo de hueso de cerdo|Ramen in Schweineknochenbrühe|ramen au bouillon d’os de porc|ramen in brodo d’ossa di maiale'],
      ['Kaedama', undefined, 'добавка лапши|extra noodles|ración extra de fideos|Extranudeln|supplément de nouilles|noodle extra'],
    ] }),
    P('shin-shin', 'food', 33.59, 130.3985, TENJIN, 4.4, 9200, ['food', 'nightlife'], {
      ru: ['ShinShin (Тэндзин)', 'Любимая местными хакатская рамэн-лавка: сливочный тонкоцу и очень тонкая лапша; работает допоздна.', 'Закажите лапшу «катамэн» — твёрдой, как едят в Хакате.'],
      en: ['ShinShin (Tenjin)', 'A locals’ favourite Hakata ramen shop: creamy tonkotsu and very thin noodles; open late.', 'Order your noodles “katamen” — firm, as Hakata likes them.'],
      es: ['ShinShin (Tenjin)', 'Un ramen de Hakata favorito de los locales: tonkotsu cremoso y fideos muy finos; abre hasta tarde.', 'Pide los fideos «katamen», firmes, como en Hakata.'],
      de: ['ShinShin (Tenjin)', 'Ein Hakata-Ramen-Laden, den Einheimische lieben: cremiges Tonkotsu und sehr dünne Nudeln; bis spät geöffnet.', 'Die Nudeln „katamen“ bestellen – fest, wie man sie in Hakata mag.'],
      fr: ['ShinShin (Tenjin)', 'Un ramen de Hakata adoré des habitants : tonkotsu crémeux et nouilles très fines ; ouvert tard.', 'Demandez des nouilles « katamen », fermes, comme à Hakata.'],
      it: ['ShinShin (Tenjin)', 'Un ramen di Hakata amato dai locali: tonkotsu cremoso e noodle sottilissimi; aperto fino a tardi.', 'Ordina i noodle «katamen», sodi, come piacciono a Hakata.'],
    }, { price: level(1), menu: [
      ['Hakata ramen', undefined, 'хакатский рамэн|Hakata-style ramen|ramen de Hakata|Ramen nach Hakata-Art|ramen de Hakata|ramen di Hakata'],
      ['Fried rice', undefined, 'жареный рис|fried rice|arroz frito|gebratener Reis|riz sauté|riso saltato'],
    ] }),
    P('hakata-issou', 'food', 33.5895, 130.4245, RIVER, 4.5, 6900, ['food'], {
      ru: ['Хаката Иссо', 'Рамэн-лавка у восточного выхода вокзала Хаката с густым пенистым тонкоцу — его называют «капучино».', 'Очередь почти всегда, но двигается быстро.'],
      en: ['Hakata Issou', 'A ramen shop by Hakata Station’s east exit with thick, frothy tonkotsu nicknamed the “cappuccino”.', 'There’s almost always a queue, but it moves quickly.'],
      es: ['Hakata Issou', 'Un ramen junto a la salida este de la estación de Hakata con tonkotsu espeso y espumoso al que llaman «capuchino».', 'Casi siempre hay cola, pero avanza rápido.'],
      de: ['Hakata Issou', 'Ein Ramen-Laden am Ostausgang des Bahnhofs Hakata mit dickem, schaumigem Tonkotsu, „Cappuccino“ genannt.', 'Fast immer Schlange, aber sie geht schnell.'],
      fr: ['Hakata Issou', 'Un ramen près de la sortie est de la gare de Hakata, au tonkotsu épais et mousseux surnommé « cappuccino ».', 'Presque toujours une file, mais elle avance vite.'],
      it: ['Hakata Issou', 'Un ramen vicino all’uscita est della stazione di Hakata con tonkotsu denso e spumoso detto «cappuccino».', 'Quasi sempre c’è fila, ma scorre veloce.'],
    }, { price: level(1), menu: [
      ['Ramen', undefined, 'пенистый тонкоцу-рамэн|frothy tonkotsu ramen|ramen tonkotsu espumoso|schaumiger Tonkotsu-Ramen|ramen tonkotsu mousseux|ramen tonkotsu spumoso'],
      ['Ajitama', undefined, 'маринованное яйцо|marinated soft egg|huevo marinado|mariniertes Ei|œuf mariné|uovo marinato'],
    ] }),
    P('rakutenchi-motsunabe', 'food', 33.5905, 130.399, TENJIN, 4.2, 5300, ['food'], {
      ru: ['Ракутэнти (моцунабэ)', 'Ресторан моцунабэ — фукуокского горячего котла с говяжьими потрохами, капустой и чесночным луком на бульоне.', 'В конце в бульон добавляют лапшу тямпон — не отказывайтесь.'],
      en: ['Rakutenchi (motsunabe)', 'A motsunabe restaurant — Fukuoka’s hot pot of beef offal, cabbage and garlic chives in broth.', 'At the end champon noodles go into the broth — don’t skip them.'],
      es: ['Rakutenchi (motsunabe)', 'Un restaurante de motsunabe, la olla de Fukuoka con casquería de ternera, col y cebollino de ajo en caldo.', 'Al final se añaden fideos champon al caldo: no te los saltes.'],
      de: ['Rakutenchi (Motsunabe)', 'Ein Motsunabe-Lokal – Fukuokas Eintopf aus Rinderinnereien, Kohl und Knoblauch-Schnittlauch in Brühe.', 'Zum Schluss kommen Champon-Nudeln in die Brühe – nicht auslassen.'],
      fr: ['Rakutenchi (motsunabe)', 'Un restaurant de motsunabe, la fondue de Fukuoka aux abats de bœuf, chou et ciboule chinoise.', 'À la fin, on ajoute des nouilles champon au bouillon : ne les ratez pas.'],
      it: ['Rakutenchi (motsunabe)', 'Un ristorante di motsunabe, la pentola di Fukuoka con frattaglie di manzo, cavolo ed erba cipollina all’aglio in brodo.', 'Alla fine si aggiungono i noodle champon al brodo: non saltarli.'],
    }, { price: level(2), menu: [
      ['Motsunabe', undefined, 'котёл с потрохами и капустой|offal hot pot with cabbage|olla de casquería con col|Innereien-Eintopf mit Kohl|fondue d’abats au chou|pentola di frattaglie con cavolo'],
      ['Champon finish', undefined, 'лапша в остатки бульона|noodles cooked in the leftover broth|fideos en el caldo final|Nudeln in der Restbrühe|nouilles dans le reste du bouillon|noodle nel brodo rimasto'],
    ] }),
    P('mizutaki-nagano', 'food', 33.5965, 130.408, TENJIN, 4.5, 2400, ['food', 'history'], {
      ru: ['Мидзутаки Нагано', 'Ресторан с 1930-х, где готовят мидзутаки — хакатский котёл с курицей в мутном сливочном бульоне.', 'Начните с чашки чистого бульона — так здесь принято.'],
      en: ['Mizutaki Nagano', 'A restaurant since the 1930s making mizutaki — Hakata’s chicken hot pot in a cloudy, creamy broth.', 'Start with a cup of the plain broth — that’s the custom here.'],
      es: ['Mizutaki Nagano', 'Un restaurante desde los años treinta que hace mizutaki, la olla de pollo de Hakata en caldo turbio y cremoso.', 'Empieza con una taza del caldo solo: es la costumbre.'],
      de: ['Mizutaki Nagano', 'Ein Lokal seit den 1930ern mit Mizutaki – Hakatas Hühnereintopf in trüber, cremiger Brühe.', 'Mit einer Tasse purer Brühe beginnen – so ist es hier Brauch.'],
      fr: ['Mizutaki Nagano', 'Un restaurant des années 1930 préparant le mizutaki, la fondue de poulet de Hakata au bouillon trouble et crémeux.', 'Commencez par une tasse de bouillon nature : c’est l’usage.'],
      it: ['Mizutaki Nagano', 'Un ristorante dagli anni Trenta che prepara il mizutaki, la pentola di pollo di Hakata in brodo torbido e cremoso.', 'Inizia con una tazza di brodo semplice: è l’usanza.'],
    }, { price: level(2), menu: [
      ['Mizutaki', undefined, 'куриный котёл в сливочном бульоне|chicken hot pot in creamy broth|olla de pollo en caldo cremoso|Hühnereintopf in cremiger Brühe|fondue de poulet au bouillon crémeux|pentola di pollo in brodo cremoso'],
      ['Zōsui', undefined, 'рисовая каша на остатках бульона|rice porridge from the leftover broth|gachas de arroz con el caldo|Reisbrei aus der Restbrühe|riz mijoté dans le reste du bouillon|riso cotto nel brodo rimasto'],
    ] }),
    P('ganso-mentaiju', 'food', 33.5935, 130.404, RIVER, 4.4, 8900, ['food'], {
      ru: ['Гансо Хаката Мэнтайдзю', 'Ресторан у реки в Накасу с мэнтайдзю — коробкой риса с целой икрой минтая мэнтайко в фирменном соусе; работает с раннего утра.', 'Отличный ранний завтрак: открывается около 7 утра.'],
      en: ['Ganso Hakata Mentaiju', 'A Nakasu riverside restaurant serving mentaijū — a box of rice topped with a whole spicy pollock roe in house sauce; open from early morning.', 'A great early breakfast: it opens around 7 am.'],
      es: ['Ganso Hakata Mentaiju', 'Un restaurante junto al río en Nakasu con mentaijū: caja de arroz con una hueva de abadejo picante entera y salsa de la casa; abre muy temprano.', 'Un gran desayuno temprano: abre hacia las 7.'],
      de: ['Ganso Hakata Mentaiju', 'Ein Lokal am Fluss in Nakasu mit Mentaijū – Reisbox mit ganzem scharfem Seelachsrogen in Haussoße; ab frühmorgens offen.', 'Ein tolles frühes Frühstück: Öffnung gegen 7 Uhr.'],
      fr: ['Ganso Hakata Mentaiju', 'Un restaurant au bord de la rivière à Nakasu servant le mentaijū : boîte de riz avec une poche entière d’œufs de lieu épicés, sauce maison ; ouvert dès l’aube.', 'Un excellent petit-déjeuner matinal : ouverture vers 7 h.'],
      it: ['Ganso Hakata Mentaiju', 'Un ristorante sul fiume a Nakasu con il mentaijū: scatola di riso con un’intera sacca di uova di merluzzo piccanti e salsa della casa; aperto dall’alba.', 'Ottima colazione presto: apre verso le 7.'],
    }, { price: level(2), menu: [
      ['Mentaijū', undefined, 'рис с икрой минтая в коробке|rice box with spicy pollock roe|caja de arroz con hueva de abadejo|Reisbox mit scharfem Seelachsrogen|boîte de riz aux œufs de lieu épicés|scatola di riso con uova di merluzzo piccanti'],
      ['Mentai tsukemen', undefined, 'цукэмэн с соусом из мэнтайко|dipping noodles in mentaiko sauce|fideos para mojar en salsa de mentaiko|Tunknudeln in Mentaiko-Soße|nouilles à tremper sauce mentaiko|noodle da intingere in salsa di mentaiko'],
    ] }),
    P('tetsunabe-gyoza', 'food', 33.5935, 130.413, TENJIN, 4.3, 3300, ['food', 'nightlife'], {
      ru: ['Хаката Гион Тэцунабэ', 'Маленькая гёдза-лавка, где крошечные гёдза подают шипящими прямо на чугунной сковороде.', 'Работает вечером; гёдза хорошо идут с холодным пивом.'],
      en: ['Hakata Gion Tetsunabe', 'A small gyoza bar serving bite-sized dumplings sizzling in the cast-iron pan they’re cooked in.', 'Opens in the evening; the gyoza go perfectly with a cold beer.'],
      es: ['Hakata Gion Tetsunabe', 'Un pequeño bar de gyoza que sirve gyoza de un bocado chisporroteando en la sartén de hierro.', 'Abre por la tarde-noche; van perfectas con cerveza fría.'],
      de: ['Hakata Gion Tetsunabe', 'Eine kleine Gyoza-Bar mit mundgerechten Teigtaschen, die brutzelnd in der Gusseisenpfanne serviert werden.', 'Abends geöffnet; dazu passt kaltes Bier.'],
      fr: ['Hakata Gion Tetsunabe', 'Un petit bar à gyoza servant des bouchées grésillantes dans la poêle en fonte de cuisson.', 'Ouvert le soir ; parfait avec une bière fraîche.'],
      it: ['Hakata Gion Tetsunabe', 'Un piccolo bar di gyoza che serve bocconcini sfrigolanti nella padella di ghisa in cui cuociono.', 'Apre la sera; perfetti con una birra fredda.'],
    }, { price: level(1), menu: [
      ['Tetsunabe gyoza', undefined, 'гёдза на чугунной сковороде|gyoza in a cast-iron pan|gyoza en sartén de hierro|Gyoza aus der Gusseisenpfanne|gyoza en poêle de fonte|gyoza in padella di ghisa'],
      ['Tebasaki', undefined, 'жареные куриные крылышки|fried chicken wings|alitas de pollo fritas|frittierte Hähnchenflügel|ailes de poulet frites|alette di pollo fritte'],
    ] }),
    P('yanagibashi-market', 'food', 33.586, 130.404, MARKET, 4.3, 5600, ['food', 'market'], {
      ru: ['Рынок Янагибаси Рэнго', '«Кухня Хакаты» — узкая крытая улочка рыбных и продуктовых лавок, где можно позавтракать морепродуктами.', 'Многие лавки закрываются к середине дня — приходите утром.'],
      en: ['Yanagibashi Rengō Market', '“Hakata’s kitchen” — a narrow covered lane of fish and food stalls where you can breakfast on seafood.', 'Many stalls close by mid-afternoon — come in the morning.'],
      es: ['Mercado Yanagibashi Rengō', '«La cocina de Hakata»: una estrecha calle cubierta de puestos de pescado donde desayunar marisco.', 'Muchos cierran a media tarde: ve por la mañana.'],
      de: ['Yanagibashi-Rengō-Markt', '„Hakatas Küche“ – eine schmale überdachte Gasse voller Fisch- und Lebensmittelstände, wo man Meeresfrüchte frühstücken kann.', 'Viele Stände schließen am frühen Nachmittag – morgens kommen.'],
      fr: ['Marché Yanagibashi Rengō', '« La cuisine de Hakata » : une ruelle couverte d’étals de poisson où l’on petit-déjeune de fruits de mer.', 'Beaucoup d’étals ferment en milieu d’après-midi : venez le matin.'],
      it: ['Mercato Yanagibashi Rengō', '«La cucina di Hakata»: un vicolo coperto di banchi di pesce dove fare colazione a base di mare.', 'Molti banchi chiudono a metà pomeriggio: vieni al mattino.'],
    }, { price: level(2), menu: [
      ['Kaisendon', undefined, 'рис с морепродуктами|seafood rice bowl|bol de arroz con marisco|Reisschale mit Meeresfrüchten|bol de riz aux fruits de mer|ciotola di riso ai frutti di mare'],
      ['Mentaiko', undefined, 'острая икра минтая|spicy pollock roe|hueva de abadejo picante|scharfer Seelachsrogen|œufs de lieu épicés|uova di merluzzo piccanti'],
    ] }),
    P('kasanoya-umegae', 'food', 33.5205, 130.533, HILL, 4.4, 4700, ['food', 'streetfood'], {
      ru: ['Касаноя (умэгаэ-моти)', 'Старая лавка на улице к святилищу Дадзайфу, где жарят умэгаэ-моти — рисовые лепёшки с бобовой пастой и оттиском цветка сливы.', 'Берите горячими с вафельницы — так они хрустят снаружи.'],
      en: ['Kasanoya (umegae-mochi)', 'An old shop on the approach to Dazaifu shrine grilling umegae-mochi — rice cakes filled with bean paste, stamped with a plum blossom.', 'Get them hot off the iron — that’s when they’re crisp outside.'],
      es: ['Kasanoya (umegae-mochi)', 'Una vieja tienda en la calle al santuario de Dazaifu que asa umegae-mochi: pastelitos de arroz con pasta de judía y una flor de ciruelo marcada.', 'Cómelos recién salidos del molde: crujen por fuera.'],
      de: ['Kasanoya (Umegae-Mochi)', 'Ein alter Laden am Weg zum Dazaifu-Schrein, der Umegae-Mochi grillt – Reiskuchen mit Bohnenpaste und eingeprägter Pflaumenblüte.', 'Frisch vom Eisen nehmen – dann sind sie außen knusprig.'],
      fr: ['Kasanoya (umegae-mochi)', 'Une vieille échoppe sur l’allée du sanctuaire de Dazaifu grillant des umegae-mochi : galettes de riz fourrées au haricot, frappées d’une fleur de prunier.', 'Prenez-les tout chauds : croustillants dehors.'],
      it: ['Kasanoya (umegae-mochi)', 'Un vecchio negozio sul viale del santuario di Dazaifu che griglia gli umegae-mochi: tortini di riso ripieni di fagioli con un fiore di susino impresso.', 'Prendili caldi dalla piastra: croccanti fuori.'],
    }, { price: level(1), menu: [
      ['Umegae-mochi', undefined, 'жареная рисовая лепёшка с бобовой пастой|grilled rice cake with bean paste|pastelito de arroz asado con pasta de judía|gegrillter Reiskuchen mit Bohnenpaste|galette de riz grillée au haricot|tortino di riso grigliato con fagioli'],
      ['Matcha set', undefined, 'маття с моти в чайной|matcha with mochi in the tea room|matcha con mochi en el salón|Matcha mit Mochi im Teeraum|matcha et mochi au salon|matcha con mochi nella sala da tè'],
    ] }),
    P('ippudo-daimyo', 'food', 33.5885, 130.3935, TENJIN, 4.3, 7100, ['food', 'history'], {
      ru: ['Ippudo Дайме (первый ресторан)', 'Самый первый Ippudo, открытый в Фукуоке в 1985 году, — отсюда сеть разошлась по миру.', 'Сравните «сиромару» (классика) и «акамару» (с пастой мисо и чесночным маслом).'],
      en: ['Ippudo Daimyō (the original)', 'The very first Ippudo, opened in Fukuoka in 1985 — the chain spread worldwide from here.', 'Compare the “Shiromaru” classic with the “Akamaru” with miso paste and garlic oil.'],
      es: ['Ippudo Daimyō (el original)', 'El primer Ippudo, abierto en Fukuoka en 1985: desde aquí la cadena se extendió por el mundo.', 'Compara el clásico «Shiromaru» con el «Akamaru» de pasta de miso y aceite de ajo.'],
      de: ['Ippudo Daimyō (das Original)', 'Das allererste Ippudo, 1985 in Fukuoka eröffnet – von hier ging die Kette in die Welt.', 'Den Klassiker „Shiromaru“ mit dem „Akamaru“ mit Miso-Paste und Knoblauchöl vergleichen.'],
      fr: ['Ippudo Daimyō (l’original)', 'Le tout premier Ippudo, ouvert à Fukuoka en 1985 : la chaîne s’est répandue dans le monde depuis ici.', 'Comparez le classique « Shiromaru » et l’« Akamaru » à la pâte de miso et à l’huile d’ail.'],
      it: ['Ippudo Daimyō (l’originale)', 'Il primissimo Ippudo, aperto a Fukuoka nel 1985: da qui la catena si è diffusa nel mondo.', 'Confronta il classico «Shiromaru» con l’«Akamaru» con pasta di miso e olio all’aglio.'],
    }, { price: level(1), menu: [
      ['Shiromaru Motoaji', undefined, 'классический тонкоцу-рамэн|classic tonkotsu ramen|ramen tonkotsu clásico|klassischer Tonkotsu-Ramen|ramen tonkotsu classique|ramen tonkotsu classico'],
      ['Akamaru Shinaji', undefined, 'тонкоцу с мисо-пастой и чесночным маслом|tonkotsu with miso paste and garlic oil|tonkotsu con pasta de miso y aceite de ajo|Tonkotsu mit Miso-Paste und Knoblauchöl|tonkotsu à la pâte de miso et huile d’ail|tonkotsu con pasta di miso e olio all’aglio'],
    ] }),
    P('starbucks-dazaifu', 'food', 33.5205, 130.532, HILL, 4.4, 9800, ['food', 'architecture', 'photo'], {
      ru: ['Starbucks Дадзайфу Омотэсандо', 'Кофейня Кэнго Кумы на пути к святилищу: интерьер из тысяч переплетённых деревянных брусков.', 'Лучший кадр — от входа вглубь, по «тоннелю» из брусков.'],
      en: ['Starbucks Dazaifu Omotesandō', 'Kengo Kuma’s coffee shop on the shrine approach: an interior of thousands of interlocking wooden sticks.', 'The best shot is from the entrance looking down the “tunnel” of sticks.'],
      es: ['Starbucks Dazaifu Omotesandō', 'La cafetería de Kengo Kuma en la calle del santuario: un interior de miles de listones de madera entrelazados.', 'La mejor foto es desde la entrada mirando el «túnel» de listones.'],
      de: ['Starbucks Dazaifu Omotesandō', 'Kengo Kumas Café am Schreinweg: ein Inneres aus Tausenden ineinandergreifenden Holzstäben.', 'Das beste Foto vom Eingang in den „Tunnel“ aus Stäben hinein.'],
      fr: ['Starbucks Dazaifu Omotesandō', 'Le café de Kengo Kuma sur l’allée du sanctuaire : un intérieur de milliers de baguettes de bois entrecroisées.', 'La meilleure photo se prend de l’entrée, dans le « tunnel » de baguettes.'],
      it: ['Starbucks Dazaifu Omotesandō', 'Il caffè di Kengo Kuma sul viale del santuario: un interno di migliaia di listelli di legno intrecciati.', 'La foto migliore è dall’ingresso verso il «tunnel» di listelli.'],
    }, { spot: 'insta', price: level(1) }),
  ],
  routes: [
    D(['ganso-mentaiju', 'shofukuji', 'tochoji', 'kushida-shrine', 'canal-city', 'ichiran-honsha', 'acros-fukuoka', 'nakasu-yatai'],
      'Старая Хаката: храмы, святилище Кусида и вечерние ятай|Old Hakata: temples, Kushida Shrine and evening yatai|La vieja Hakata: templos, el santuario Kushida y yatai al anochecer|Altes Hakata: Tempel, Kushida-Schrein und abendliche Yatai|Le vieux Hakata : temples, sanctuaire Kushida et yatai du soir|La vecchia Hakata: templi, santuario Kushida e yatai serali'),
    D(['yanagibashi-market', 'ohori-park', 'fukuoka-castle-ruins', 'ippudo-daimyo', 'fukuoka-tower', 'rakutenchi-motsunabe'],
      'Рынок, парк Охори, замок и башня у моря|The market, Ōhori Park, the castle and the seaside tower|El mercado, el parque Ōhori, el castillo y la torre junto al mar|Markt, Ōhori-Park, Burg und Turm am Meer|Le marché, le parc Ōhori, le château et la tour en bord de mer|Il mercato, il parco Ōhori, il castello e la torre sul mare'),
    D(['dazaifu-tenmangu', 'kyushu-national-museum', 'kasanoya-umegae', 'starbucks-dazaifu', 'nanzoin', 'mizutaki-nagano'],
      'Дадзайфу, музей Кюсю и лежащий Будда|Dazaifu, the Kyushu museum and the reclining Buddha|Dazaifu, el museo de Kyushu y el Buda yacente|Dazaifu, das Kyūshū-Museum und der liegende Buddha|Dazaifu, le musée de Kyūshū et le Bouddha couché|Dazaifu, il museo del Kyushu e il Buddha disteso'),
  ],
};

export default pack;
