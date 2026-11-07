import type { CityPack } from '../types';
import { free, level, makeDay, makePlace } from './_kit.ts';

const P = makePlace('sapporo');
const D = makeDay('sapporo');
const CITY = 'DrfaYs9MEx8';
const PARK = 'SytV83JCreU';
const NIGHT = 'wEgL4zGNhpE';
const FOOD = 'cBQ89ZlR-C0';
const SHRINE = 'Faf6l41Y3mg';
const POND = 'BF2MbkNKBEk';

const pack: CityPack = {
  country: 'JP',
  city: 'sapporo',
  places: [
    P('clock-tower', 'attraction', 43.0625, 141.3536, CITY, 4.0, 22000, ['history', 'architecture'], {
      ru: ['Часовая башня Саппоро', 'Деревянный зал 1878 года Сельскохозяйственной школы Саппоро с часами, которые идут с 1881 года, — символ города.', 'Лучший кадр — со второго этажа здания через дорогу.'],
      en: ['Sapporo Clock Tower', 'The 1878 wooden drill hall of Sapporo Agricultural College, its clock ticking since 1881 — the city’s symbol.', 'The best shot is from the first-floor terrace across the street.'],
      es: ['Torre del Reloj de Sapporo', 'El salón de madera de 1878 de la Escuela de Agricultura de Sapporo, con un reloj que funciona desde 1881: símbolo de la ciudad.', 'La mejor foto se hace desde la terraza del edificio de enfrente.'],
      de: ['Uhrturm Sapporo', 'Die hölzerne Exerzierhalle der Landwirtschaftsschule Sapporo von 1878, deren Uhr seit 1881 tickt – das Wahrzeichen der Stadt.', 'Das beste Foto gelingt von der Terrasse gegenüber.'],
      fr: ['Tour de l’Horloge de Sapporo', 'La salle d’exercice en bois (1878) du collège agricole de Sapporo, dont l’horloge tourne depuis 1881 : le symbole de la ville.', 'La meilleure photo se prend depuis la terrasse d’en face.'],
      it: ['Torre dell’orologio di Sapporo', 'La sala d’armi in legno (1878) della Scuola agraria di Sapporo, con un orologio che funziona dal 1881: il simbolo della città.', 'La foto migliore si scatta dalla terrazza di fronte.'],
    }, { price: level(1) }),
    P('tv-tower', 'attraction', 43.0611, 141.3564, NIGHT, 4.2, 18000, ['views', 'photo'], {
      ru: ['Телебашня Саппоро', 'Башня 1957 года в восточном конце парка Одори со смотровой площадкой на 90 м — весь парк как на ладони.', 'Зимой во время Снежного фестиваля отсюда видны все скульптуры.'],
      en: ['Sapporo TV Tower', 'A 1957 tower at the east end of Odori Park with a 90 m deck — the whole park laid out below.', 'During the winter Snow Festival you can see every sculpture from here.'],
      es: ['Torre de TV de Sapporo', 'Una torre de 1957 al este del parque Odori con mirador a 90 m: todo el parque a tus pies.', 'En el Festival de la Nieve se ven todas las esculturas desde aquí.'],
      de: ['Fernsehturm Sapporo', 'Ein Turm von 1957 am Ostende des Odori-Parks mit Deck in 90 m – der ganze Park liegt unter einem.', 'Zum Schneefestival sieht man von hier alle Skulpturen.'],
      fr: ['Tour de télévision de Sapporo', 'Une tour de 1957 au bout est du parc Odori, belvédère à 90 m : tout le parc à vos pieds.', 'Pendant le festival de la neige, on voit toutes les sculptures.'],
      it: ['Torre della TV di Sapporo', 'Una torre del 1957 all’estremità est del parco Odori con terrazza a 90 m: tutto il parco ai tuoi piedi.', 'Durante il Festival della neve da qui si vedono tutte le sculture.'],
    }, { spot: 'insta', price: level(1) }),
    P('susukino', 'attraction', 43.0556, 141.353, NIGHT, 4.2, 15000, ['nightlife', 'food'], {
      ru: ['Сусукино', 'Главный ночной квартал к северу от Токио: неоновый перекрёсток с вывеской виски Nikka, бары, рамэн и караоке.', 'Ночь здесь принято заканчивать рамэном или «симэ-парфе».'],
      en: ['Susukino', 'The biggest nightlife district north of Tokyo: the neon crossing with the Nikka whisky sign, bars, ramen and karaoke.', 'Locals end the night with ramen or a “shime parfait”.'],
      es: ['Susukino', 'El mayor barrio nocturno al norte de Tokio: el cruce de neón con el cartel del whisky Nikka, bares, ramen y karaoke.', 'Aquí la noche se cierra con ramen o un «shime parfait».'],
      de: ['Susukino', 'Das größte Ausgehviertel nördlich von Tokio: die Neon-Kreuzung mit dem Nikka-Whisky-Schild, Bars, Ramen und Karaoke.', 'Man beendet die Nacht mit Ramen oder einem „Shime-Parfait“.'],
      fr: ['Susukino', 'Le plus grand quartier nocturne au nord de Tokyo : le carrefour au néon du whisky Nikka, bars, ramen et karaoké.', 'On finit la nuit par un ramen ou un « shime parfait ».'],
      it: ['Susukino', 'Il più grande quartiere notturno a nord di Tokyo: l’incrocio al neon con l’insegna del whisky Nikka, bar, ramen e karaoke.', 'Qui la notte si chiude con un ramen o uno «shime parfait».'],
    }, { spot: 'insta', price: free }),
    P('beer-museum', 'attraction', 43.0716, 141.3687, PARK, 4.3, 21000, ['history', 'museums'], {
      ru: ['Музей пива Саппоро', 'Единственный в Японии музей пива в краснокирпичном здании 1890 года — история старейшей японской пивной марки (1876).', 'Вход бесплатный; в конце — дегустационный сет из трёх сортов за небольшие деньги.'],
      en: ['Sapporo Beer Museum', 'Japan’s only beer museum, in an 1890 red-brick building, telling the story of Japan’s oldest beer brand (1876).', 'Entry is free; finish with a cheap three-beer tasting set.'],
      es: ['Museo de la Cerveza de Sapporo', 'El único museo de la cerveza de Japón, en un edificio de ladrillo de 1890, con la historia de la marca más antigua del país (1876).', 'La entrada es gratis; termina con una cata barata de tres cervezas.'],
      de: ['Sapporo-Biermuseum', 'Japans einziges Biermuseum in einem roten Backsteinbau von 1890 – über Japans älteste Biermarke (1876).', 'Eintritt frei; zum Schluss ein günstiges Probierset mit drei Bieren.'],
      fr: ['Musée de la bière de Sapporo', 'Le seul musée de la bière du Japon, dans un bâtiment en brique de 1890, sur la plus ancienne marque du pays (1876).', 'Entrée gratuite ; terminez par une dégustation de trois bières à petit prix.'],
      it: ['Museo della birra di Sapporo', 'L’unico museo della birra del Giappone, in un edificio di mattoni del 1890, sulla marca più antica del Paese (1876).', 'Ingresso gratuito; chiudi con una degustazione economica di tre birre.'],
    }, { price: free, address: 'N7 E9, Higashi-ku' }),
    P('shiroi-koibito-park', 'attraction', 43.0886, 141.2715, PARK, 4.2, 17000, ['food', 'photo'], {
      ru: ['Парк Сирои Коибито', 'Шоколадная фабрика Ishiya в «английском» стиле, где делают знаменитое печенье Shiroi Koibito: видно конвейер и можно украсить своё печенье.', 'Мастер-класс по росписи печенья бронируйте заранее.'],
      en: ['Shiroi Koibito Park', 'Ishiya’s English-style chocolate factory where the famous Shiroi Koibito biscuits are made: watch the line and decorate your own.', 'Book the cookie-decorating workshop in advance.'],
      es: ['Shiroi Koibito Park', 'La fábrica de chocolate de Ishiya, de estilo inglés, donde hacen las famosas galletas Shiroi Koibito: ves la línea y decoras la tuya.', 'Reserva antes el taller de decoración de galletas.'],
      de: ['Shiroi Koibito Park', 'Ishiyas Schokoladenfabrik im englischen Stil, wo die berühmten Shiroi-Koibito-Kekse entstehen: Produktion ansehen und eigene verzieren.', 'Den Keks-Workshop vorher buchen.'],
      fr: ['Shiroi Koibito Park', 'La chocolaterie d’Ishiya, de style anglais, où l’on fabrique les célèbres biscuits Shiroi Koibito : chaîne visible et atelier de décoration.', 'Réservez l’atelier de décoration de biscuits.'],
      it: ['Shiroi Koibito Park', 'La fabbrica di cioccolato di Ishiya in stile inglese dove nascono i famosi biscotti Shiroi Koibito: vedi la produzione e decori il tuo.', 'Prenota in anticipo il laboratorio di decorazione.'],
    }, { spot: 'insta', price: level(1) }),
    P('hokkaido-university', 'nature', 43.077, 141.341, PARK, 4.5, 9800, ['nature', 'history', 'photo'], {
      ru: ['Университет Хоккайдо', 'Кампус бывшей Сельскохозяйственной школы (1876) в центре города: аллея гинкго, тополиная аллея и бюст профессора Кларка.', 'В конце октября — начале ноября аллея гинкго становится ярко-жёлтой.'],
      en: ['Hokkaido University', 'The campus of the former Agricultural College (1876) in the city centre: a ginkgo avenue, a poplar avenue and Professor Clark’s bust.', 'In late October to early November the ginkgo avenue turns bright yellow.'],
      es: ['Universidad de Hokkaido', 'El campus de la antigua Escuela de Agricultura (1876) en pleno centro: avenida de ginkgos, avenida de álamos y el busto del profesor Clark.', 'A finales de octubre y principios de noviembre los ginkgos se vuelven amarillos.'],
      de: ['Universität Hokkaido', 'Der Campus der früheren Landwirtschaftsschule (1876) mitten in der Stadt: Ginkgo-Allee, Pappelallee und die Büste von Professor Clark.', 'Ende Oktober bis Anfang November leuchtet die Ginkgo-Allee gelb.'],
      fr: ['Université de Hokkaido', 'Le campus de l’ancien collège agricole (1876) en centre-ville : allée de ginkgos, allée de peupliers et buste du professeur Clark.', 'Fin octobre-début novembre, l’allée de ginkgos devient jaune vif.'],
      it: ['Università di Hokkaido', 'Il campus dell’ex Scuola agraria (1876) in pieno centro: viale dei ginkgo, viale dei pioppi e il busto del professor Clark.', 'Tra fine ottobre e inizio novembre il viale dei ginkgo diventa giallo.'],
    }, { spot: 'insta', price: free }),
    P('okurayama', 'attraction', 43.0465, 141.2985, CITY, 4.4, 9200, ['views', 'winter'], {
      ru: ['Трамплин Окураяма', 'Олимпийский трамплин Игр 1972 года: кресельный подъёмник наверх, откуда видно, как прыгуны видят город.', 'Внизу — небольшой Музей зимних видов спорта с симуляторами.'],
      en: ['Ōkurayama Ski Jump', 'The 1972 Olympic ski jump: a chairlift to the top, where you see the city as the jumpers do.', 'At the foot is a small Winter Sports Museum with simulators.'],
      es: ['Trampolín de Ōkurayama', 'El trampolín olímpico de 1972: un telesilla sube a la cima, donde ves la ciudad como los saltadores.', 'Abajo hay un pequeño Museo de Deportes de Invierno con simuladores.'],
      de: ['Sprungschanze Ōkurayama', 'Die Olympiaschanze von 1972: per Sessellift nach oben, wo man die Stadt wie die Springer sieht.', 'Unten gibt es ein kleines Wintersportmuseum mit Simulatoren.'],
      fr: ['Tremplin d’Ōkurayama', 'Le tremplin olympique de 1972 : un télésiège monte au sommet, d’où l’on voit la ville comme les sauteurs.', 'En bas, un petit musée des sports d’hiver avec simulateurs.'],
      it: ['Trampolino di Ōkurayama', 'Il trampolino olimpico del 1972: una seggiovia porta in cima, da dove vedi la città come i saltatori.', 'Ai piedi c’è un piccolo Museo degli sport invernali con simulatori.'],
    }, { spot: 'insta', price: level(1) }),
    P('hitsujigaoka', 'attraction', 42.9989, 141.4006, PARK, 4.1, 11000, ['views', 'history'], {
      ru: ['Холм Хицудзигаока', 'Смотровой холм на юго-востоке города со статуей профессора Кларка, указывающей вдаль, — «Boys, be ambitious!».', 'Летом рядом пасутся овцы, а в ресторане при холме готовят дзингисукан.'],
      en: ['Hitsujigaoka Observation Hill', 'A viewing hill in the south-east of the city with Professor Clark’s statue pointing into the distance — “Boys, be ambitious!”.', 'Sheep graze nearby in summer, and the hill’s restaurant serves jingisukan.'],
      es: ['Colina de Hitsujigaoka', 'Una colina mirador al sureste con la estatua del profesor Clark señalando a lo lejos: «Boys, be ambitious!».', 'En verano pastan ovejas cerca y el restaurante sirve jingisukan.'],
      de: ['Aussichtshügel Hitsujigaoka', 'Ein Aussichtshügel im Südosten mit der Statue von Professor Clark, der in die Ferne zeigt – „Boys, be ambitious!“.', 'Im Sommer grasen Schafe, und das Restaurant serviert Jingisukan.'],
      fr: ['Colline de Hitsujigaoka', 'Une colline-belvédère au sud-est avec la statue du professeur Clark pointant au loin : « Boys, be ambitious! ».', 'L’été, des moutons paissent à côté et le restaurant sert du jingisukan.'],
      it: ['Collina di Hitsujigaoka', 'Una collina panoramica a sud-est con la statua del professor Clark che indica lontano: «Boys, be ambitious!».', 'D’estate pascolano le pecore e il ristorante serve jingisukan.'],
    }, { price: level(1) }),
    P('historical-village', 'attraction', 43.0485, 141.496, CITY, 4.4, 6300, ['history', 'museums', 'architecture'], {
      ru: ['Исторический посёлок Хоккайдо', 'Музей под открытым небом с более чем полусотней зданий эпохи освоения острова: лавки, школы, фермы и рыбацкие дома.', 'Летом по улицам ходит конка, зимой — сани.'],
      en: ['Historical Village of Hokkaido', 'An open-air museum of more than fifty buildings from the island’s settlement era: shops, schools, farms and fishing houses.', 'A horse-drawn tram runs in summer and a sleigh in winter.'],
      es: ['Pueblo Histórico de Hokkaido', 'Un museo al aire libre con más de cincuenta edificios de la época de colonización: tiendas, escuelas, granjas y casas de pescadores.', 'En verano circula un tranvía de caballos y en invierno un trineo.'],
      de: ['Historisches Dorf Hokkaido', 'Ein Freilichtmuseum mit über fünfzig Gebäuden aus der Pionierzeit der Insel: Läden, Schulen, Höfe und Fischerhäuser.', 'Im Sommer fährt eine Pferdebahn, im Winter ein Schlitten.'],
      fr: ['Village historique de Hokkaido', 'Un écomusée de plus de cinquante bâtiments de l’époque de la colonisation : boutiques, écoles, fermes et maisons de pêcheurs.', 'Un tram hippomobile circule l’été, un traîneau l’hiver.'],
      it: ['Villaggio storico di Hokkaido', 'Un museo all’aperto con oltre cinquanta edifici dell’epoca della colonizzazione: negozi, scuole, fattorie e case di pescatori.', 'D’estate gira un tram a cavalli, d’inverno una slitta.'],
    }, { price: level(1) }),
    P('jozankei-onsen', 'nature', 42.968, 141.163, POND, 4.4, 8700, ['spa', 'nature'], {
      ru: ['Онсэн Дзёдзанкэй', 'Курортный посёлок с горячими источниками в ущелье реки Тоёхира в часе езды: бесплатные ножные ванны и висячий мост Футами.', 'В начале–середине октября ущелье пылает осенними листьями.'],
      en: ['Jōzankei Onsen', 'A hot-spring town in the Toyohira River gorge an hour away: free foot baths and the Futami suspension bridge.', 'In early-to-mid October the gorge blazes with autumn colour.'],
      es: ['Jōzankei Onsen', 'Un pueblo termal en el desfiladero del río Toyohira, a una hora: baños de pies gratuitos y el puente colgante Futami.', 'A principios y mediados de octubre el desfiladero arde de colores.'],
      de: ['Jōzankei Onsen', 'Ein Thermalort in der Schlucht des Toyohira eine Stunde entfernt: kostenlose Fußbäder und die Hängebrücke Futami.', 'Anfang bis Mitte Oktober leuchtet die Schlucht in Herbstfarben.'],
      fr: ['Jōzankei Onsen', 'Un village thermal dans les gorges de la Toyohira, à une heure : bains de pieds gratuits et pont suspendu Futami.', 'Début-mi-octobre, la gorge s’embrase de couleurs.'],
      it: ['Jōzankei Onsen', 'Un paese termale nella gola del fiume Toyohira, a un’ora: pediluvi gratuiti e il ponte sospeso Futami.', 'Tra inizio e metà ottobre la gola si accende di colori.'],
    }, { spot: 'insta', price: free }),
    P('lake-shikotsu', 'nature', 42.774, 141.404, POND, 4.6, 7400, ['lakes', 'nature', 'volcanoes'], {
      ru: ['Озеро Сикоцу', 'Кальдерное озеро среди вулканов — второе по глубине в Японии и одно из самых прозрачных.', 'Зимой здесь проходит Ледовый фестиваль с голубыми ледяными скульптурами.'],
      en: ['Lake Shikotsu', 'A caldera lake among volcanoes — Japan’s second deepest and one of its clearest.', 'In winter it hosts an Ice Festival of blue ice sculptures.'],
      es: ['Lago Shikotsu', 'Un lago de caldera entre volcanes, el segundo más profundo de Japón y de los más transparentes.', 'En invierno acoge un Festival del Hielo con esculturas azules.'],
      de: ['Shikotsu-See', 'Ein Kratersee zwischen Vulkanen – Japans zweittiefster und einer der klarsten.', 'Im Winter gibt es ein Eisfestival mit blauen Eisskulpturen.'],
      fr: ['Lac Shikotsu', 'Un lac de caldeira entre volcans, le deuxième plus profond du Japon et l’un des plus limpides.', 'L’hiver, il accueille un festival de glace aux sculptures bleues.'],
      it: ['Lago Shikotsu', 'Un lago di caldera tra i vulcani, il secondo più profondo del Giappone e tra i più limpidi.', 'D’inverno ospita un Festival del ghiaccio con sculture blu.'],
    }, { spot: 'insta', price: free }),
    P('otaru-music-box-museum', 'attraction', 43.191, 141.01, PARK, 4.4, 19000, ['shopping', 'history'], {
      ru: ['Музей музыкальных шкатулок, Отару', 'Огромный магазин-музей шкатулок в каменном здании 1912 года; перед ним — паровые часы, которые свистят каждые 15 минут.', 'Вход бесплатный; на верхнем этаже — антикварные шкатулки.'],
      en: ['Otaru Music Box Museum', 'A huge music-box shop-museum in a 1912 stone building; in front, a steam clock whistles every 15 minutes.', 'Entry is free; antique music boxes are upstairs.'],
      es: ['Museo de Cajas de Música de Otaru', 'Una enorme tienda-museo de cajas de música en un edificio de piedra de 1912; delante, un reloj de vapor que silba cada 15 minutos.', 'La entrada es gratis; arriba hay cajas antiguas.'],
      de: ['Spieluhrenmuseum Otaru', 'Ein riesiges Spieluhren-Laden-Museum in einem Steinhaus von 1912; davor pfeift alle 15 Minuten eine Dampfuhr.', 'Eintritt frei; antike Spieluhren oben.'],
      fr: ['Musée des boîtes à musique d’Otaru', 'Une immense boutique-musée de boîtes à musique dans un bâtiment de pierre de 1912 ; devant, une horloge à vapeur siffle tous les quarts d’heure.', 'Entrée libre ; boîtes anciennes à l’étage.'],
      it: ['Museo dei carillon di Otaru', 'Un enorme negozio-museo di carillon in un edificio di pietra del 1912; davanti, un orologio a vapore fischia ogni 15 minuti.', 'Ingresso gratuito; carillon antichi al piano di sopra.'],
    }, { spot: 'insta', price: free }),
    P('garaku', 'food', 43.0577, 141.3548, FOOD, 4.4, 8600, ['food'], {
      ru: ['Суп-карри Garaku', 'Одна из самых известных суп-карри Саппоро: жидкий пряный бульон, куриная ножка и крупные овощи; бульон и остроту выбираете сами.', 'Очередь с открытия — запишитесь в листе ожидания у двери.'],
      en: ['Soup Curry Garaku', 'One of Sapporo’s best-known soup-curry houses: a thin spiced broth, chicken leg and big vegetables; you choose broth and spice level.', 'There’s a queue from opening — add your name to the list by the door.'],
      es: ['Soup Curry Garaku', 'Uno de los soup curry más conocidos de Sapporo: caldo especiado ligero, muslo de pollo y verduras grandes; eliges caldo y picante.', 'Hay cola desde la apertura: apúntate en la lista de la puerta.'],
      de: ['Soup Curry Garaku', 'Eines der bekanntesten Soup-Curry-Lokale Sapporos: dünne Würzbrühe, Hähnchenkeule und große Gemüsestücke; Brühe und Schärfe wählt man selbst.', 'Ab Öffnung gibt es eine Schlange – auf die Liste an der Tür eintragen.'],
      fr: ['Soup Curry Garaku', 'L’un des soup curry les plus connus de Sapporo : bouillon épicé léger, cuisse de poulet et gros légumes ; on choisit bouillon et piquant.', 'File dès l’ouverture : inscrivez-vous sur la liste à la porte.'],
      it: ['Soup Curry Garaku', 'Uno dei soup curry più noti di Sapporo: brodo speziato leggero, coscia di pollo e grandi verdure; scegli brodo e piccantezza.', 'C’è fila dall’apertura: segnati sulla lista alla porta.'],
    }, { price: level(1), address: 'Minami 2 Nishi 2, Chuo', menu: [
      ['Chicken leg soup curry', undefined, 'суп-карри с куриной ножкой|soup curry with chicken leg|soup curry con muslo de pollo|Soup Curry mit Hähnchenkeule|soup curry à la cuisse de poulet|soup curry con coscia di pollo'],
      ['Vegetable soup curry', undefined, 'суп-карри с овощами Хоккайдо|soup curry with Hokkaido vegetables|soup curry con verduras de Hokkaido|Soup Curry mit Hokkaido-Gemüse|soup curry aux légumes de Hokkaido|soup curry con verdure di Hokkaido'],
    ] }),
    P('suage-plus', 'food', 43.056, 141.351, FOOD, 4.4, 6900, ['food'], {
      ru: ['Suage+', 'Суп-карри, где овощи отдельно обжаривают и кладут сверху, а курицу подают на шпажке; уютный подвальный зал.', 'Добавьте к супу сыр моти — местные так любят.'],
      en: ['Suage+', 'A soup-curry house where vegetables are fried separately and piled on top and the chicken comes on a skewer; a cosy basement room.', 'Add mochi cheese to the soup — a local favourite.'],
      es: ['Suage+', 'Un soup curry donde las verduras se fríen aparte y van encima y el pollo llega en brocheta; un sótano acogedor.', 'Añade queso mochi a la sopa: favorito local.'],
      de: ['Suage+', 'Ein Soup-Curry-Lokal, in dem Gemüse separat frittiert und obenauf gelegt wird und das Hähnchen am Spieß kommt; gemütlicher Kellerraum.', 'Mochi-Käse in die Suppe – bei Einheimischen beliebt.'],
      fr: ['Suage+', 'Un soup curry où les légumes sont frits à part et posés dessus, le poulet servi en brochette ; une salle cosy en sous-sol.', 'Ajoutez du fromage mochi : un favori local.'],
      it: ['Suage+', 'Un soup curry dove le verdure sono fritte a parte e messe sopra e il pollo arriva allo spiedo; un accogliente seminterrato.', 'Aggiungi il formaggio mochi alla zuppa: un classico locale.'],
    }, { price: level(1), address: 'Minami 4 Nishi 5, Chuo', menu: [
      ['Skewered chicken soup curry', undefined, 'суп-карри с курицей на шпажке|soup curry with skewered chicken|soup curry con pollo en brocheta|Soup Curry mit Hähnchenspieß|soup curry au poulet en brochette|soup curry con spiedo di pollo'],
      ['Mochi cheese', undefined, 'добавка — сыр с моти|mochi and cheese topping|topping de mochi y queso|Mochi-Käse-Topping|garniture mochi-fromage|aggiunta di mochi e formaggio'],
    ] }),
    P('sumire-susukino', 'food', 43.0565, 141.3535, FOOD, 4.3, 9400, ['food', 'nightlife'], {
      ru: ['Сумирэ (Сусукино)', 'Легенда саппоросского мисо-рамэна с 1964 года: густой бульон под слоем жира, который держит суп горячим до последней ложки.', 'Осторожно с первым глотком — суп очень горячий.'],
      en: ['Sumire (Susukino)', 'A Sapporo miso-ramen legend since 1964: a dense broth under a layer of lard that keeps it piping hot to the last spoonful.', 'Careful with the first sip — it’s scalding.'],
      es: ['Sumire (Susukino)', 'Una leyenda del ramen de miso de Sapporo desde 1964: caldo denso bajo una capa de manteca que lo mantiene ardiendo hasta el final.', 'Cuidado con el primer sorbo: quema.'],
      de: ['Sumire (Susukino)', 'Eine Legende des Sapporo-Miso-Ramen seit 1964: dichte Brühe unter einer Schmalzschicht, die bis zum letzten Löffel heiß bleibt.', 'Vorsicht beim ersten Schluck – sehr heiß.'],
      fr: ['Sumire (Susukino)', 'Une légende du ramen au miso de Sapporo depuis 1964 : bouillon dense sous une couche de saindoux qui le garde brûlant jusqu’au bout.', 'Attention à la première gorgée : c’est brûlant.'],
      it: ['Sumire (Susukino)', 'Una leggenda del ramen al miso di Sapporo dal 1964: brodo denso sotto uno strato di strutto che lo tiene bollente fino all’ultimo.', 'Attento al primo sorso: scotta.'],
    }, { price: level(1), address: 'Minami 3 Nishi 3, Chuo', menu: [
      ['Miso ramen', undefined, 'мисо-рамэн|miso ramen|ramen de miso|Miso-Ramen|ramen au miso|ramen al miso'],
      ['Shoyu ramen', undefined, 'рамэн на соевом соусе|soy-sauce ramen|ramen de soja|Shoyu-Ramen|ramen à la sauce soja|ramen alla soia'],
    ] }),
    P('keyaki', 'food', 43.0535, 141.3525, FOOD, 4.3, 5800, ['food', 'nightlife'], {
      ru: ['Кэяки', 'Крошечная рамэн-лавка в Сусукино на десяток мест с насыщенным мисо-рамэном и горой овощей.', 'Очередь почти всегда, но движется быстро; работают до поздней ночи.'],
      en: ['Keyaki', 'A tiny Susukino ramen shop with about ten seats, serving rich miso ramen heaped with vegetables.', 'There’s nearly always a queue, but it moves fast; open late.'],
      es: ['Keyaki', 'Un diminuto local de ramen en Susukino con unas diez plazas y ramen de miso intenso con montaña de verduras.', 'Casi siempre hay cola, pero avanza rápido; abre hasta tarde.'],
      de: ['Keyaki', 'Ein winziger Ramen-Laden in Susukino mit rund zehn Plätzen und kräftigem Miso-Ramen mit Gemüseberg.', 'Fast immer eine Schlange, aber sie geht schnell; bis spät geöffnet.'],
      fr: ['Keyaki', 'Une minuscule échoppe de ramen à Susukino, une dizaine de places, pour un ramen au miso riche couvert de légumes.', 'Presque toujours une file, mais elle avance vite ; ouvert tard.'],
      it: ['Keyaki', 'Un minuscolo locale di ramen a Susukino con una decina di posti e ramen al miso ricco con una montagna di verdure.', 'Quasi sempre c’è fila, ma scorre veloce; aperto fino a tardi.'],
    }, { price: level(1), address: 'Minami 6 Nishi 3, Chuo', menu: [
      ['Miso ramen', undefined, 'мисо-рамэн с овощами|miso ramen with vegetables|ramen de miso con verduras|Miso-Ramen mit Gemüse|ramen au miso et légumes|ramen al miso con verdure'],
      ['Corn butter topping', undefined, 'добавка — кукуруза и масло|corn and butter topping|maíz y mantequilla|Mais-Butter-Topping|maïs et beurre|mais e burro'],
    ] }),
    P('menya-saimi', 'food', 43.034, 141.383, FOOD, 4.5, 4900, ['food'], {
      ru: ['Мэнъя Сайми', 'Мисо-рамэн, который годами возглавляет рейтинги Саппоро: насыщенный, но чистый вкус с ноткой имбиря.', 'Это не центр — от метро Мисоно минут десять пешком.'],
      en: ['Menya Saimi', 'Miso ramen that has topped Sapporo rankings for years: rich yet clean, with a hint of ginger.', 'It’s out of the centre — about ten minutes’ walk from Misono station.'],
      es: ['Menya Saimi', 'Un ramen de miso que lleva años en lo alto de los rankings de Sapporo: intenso pero limpio, con un toque de jengibre.', 'Está fuera del centro: a unos diez minutos a pie del metro Misono.'],
      de: ['Menya Saimi', 'Miso-Ramen, der seit Jahren Sapporos Ranglisten anführt: kräftig und doch klar, mit einem Hauch Ingwer.', 'Außerhalb des Zentrums – etwa zehn Minuten zu Fuß von der U-Bahn Misono.'],
      fr: ['Menya Saimi', 'Un ramen au miso en tête des classements de Sapporo depuis des années : riche mais net, avec une pointe de gingembre.', 'Hors du centre : une dizaine de minutes à pied du métro Misono.'],
      it: ['Menya Saimi', 'Un ramen al miso in cima alle classifiche di Sapporo da anni: ricco ma pulito, con un tocco di zenzero.', 'È fuori dal centro: una decina di minuti a piedi dalla metro Misono.'],
    }, { spot: 'hidden', price: level(1), address: 'Misono, Toyohira-ku', menu: [
      ['Miso ramen', undefined, 'мисо-рамэн|miso ramen|ramen de miso|Miso-Ramen|ramen au miso|ramen al miso'],
      ['Chāshū rice', undefined, 'рис со свининой тясю|rice with chāshū pork|arroz con chāshū|Reis mit Chāshū|riz au chāshū|riso con chāshū'],
    ] }),
    P('hanamaru-stellar', 'food', 43.0687, 141.3508, FOOD, 4.4, 7800, ['food'], {
      ru: ['Ханамару (Stellar Place)', 'Кайтэн-суси из рыбацкого Нэмуро на 6-м этаже Stellar Place у вокзала: свежайшая рыба Хоккайдо на ленте и под заказ.', 'Возьмите номерок в автомате у входа и погуляйте по ТЦ — ждать бывает час.'],
      en: ['Hanamaru (Stellar Place)', 'Conveyor-belt sushi from the fishing port of Nemuro on Stellar Place’s 6th floor by the station: superb Hokkaido fish on the belt and to order.', 'Take a ticket at the machine and browse the mall — the wait can be an hour.'],
      es: ['Hanamaru (Stellar Place)', 'Sushi en cinta del puerto pesquero de Nemuro, en la 6.ª planta de Stellar Place junto a la estación: pescado de Hokkaido excelente.', 'Saca número en la máquina y pasea por el centro comercial: la espera puede ser de una hora.'],
      de: ['Hanamaru (Stellar Place)', 'Laufband-Sushi aus dem Fischerhafen Nemuro im 6. Stock des Stellar Place am Bahnhof: hervorragender Hokkaido-Fisch vom Band und auf Bestellung.', 'Am Automaten eine Nummer ziehen und durchs Center bummeln – die Wartezeit kann eine Stunde sein.'],
      fr: ['Hanamaru (Stellar Place)', 'Sushis sur tapis du port de Nemuro, au 6e étage du Stellar Place près de la gare : excellent poisson de Hokkaido, au tapis ou à la commande.', 'Prenez un ticket à la machine et flânez : l’attente peut atteindre une heure.'],
      it: ['Hanamaru (Stellar Place)', 'Sushi al nastro dal porto di Nemuro al 6° piano dello Stellar Place vicino alla stazione: ottimo pesce di Hokkaido, al nastro e su ordinazione.', 'Prendi il numero al distributore e gira per il centro: l’attesa può essere di un’ora.'],
    }, { price: level(2), address: 'JR Tower Stellar Place 6F', menu: [
      ['Hokkaido nigiri', undefined, 'нигири из рыбы Хоккайдо|nigiri of Hokkaido fish|nigiris de pescado de Hokkaido|Nigiri mit Hokkaido-Fisch|nigiris de poisson de Hokkaido|nigiri di pesce di Hokkaido'],
      ['Uni and ikura gunkan', undefined, 'гункан с морским ежом и икрой|sea urchin and salmon roe gunkan|gunkan de erizo y huevas de salmón|Gunkan mit Seeigel und Lachsrogen|gunkan oursin et œufs de saumon|gunkan di riccio e uova di salmone'],
    ] }),
    P('kani-honke', 'food', 43.065, 141.353, FOOD, 4.3, 6100, ['food'], {
      ru: ['Кани Хонкэ', 'Крабовый ресторан у вокзала: камчатский, снежный и волосатый краб Хоккайдо в кайсэки из многих блюд, в кабинках с татами.', 'Обеденные сеты заметно дешевле ужина.'],
      en: ['Kani Honke', 'A crab restaurant near the station: king, snow and Hokkaido hairy crab in multi-course kaiseki, served in tatami rooms.', 'Lunch sets cost much less than dinner.'],
      es: ['Kani Honke', 'Un restaurante de cangrejo junto a la estación: cangrejo real, de las nieves y peludo de Hokkaido en kaiseki de varios platos, en salas de tatami.', 'Los menús de mediodía cuestan mucho menos.'],
      de: ['Kani Honke', 'Ein Krabbenrestaurant am Bahnhof: Königs-, Schnee- und Haarkrabbe in mehrgängigem Kaiseki, serviert in Tatami-Räumen.', 'Mittagssets kosten deutlich weniger.'],
      fr: ['Kani Honke', 'Un restaurant de crabe près de la gare : crabe royal, des neiges et crabe poilu de Hokkaido en kaiseki, dans des salons tatami.', 'Les menus du midi sont bien moins chers.'],
      it: ['Kani Honke', 'Un ristorante di granchio vicino alla stazione: granchio reale, delle nevi e peloso di Hokkaido in kaiseki di più portate, in sale con tatami.', 'I set del pranzo costano molto meno.'],
    }, { price: level(3), address: 'N3 W2, Chuo', menu: [
      ['Kani kaiseki', undefined, 'крабовый кайсэки|crab kaiseki|kaiseki de cangrejo|Krabben-Kaiseki|kaiseki de crabe|kaiseki di granchio'],
      ['Kegani', undefined, 'волосатый краб Хоккайдо|Hokkaido hairy crab|cangrejo peludo de Hokkaido|Hokkaido-Haarkrabbe|crabe poilu de Hokkaido|granchio peloso di Hokkaido'],
    ] }),
    P('rokkatei', 'food', 43.066, 141.348, CITY, 4.5, 7200, ['food', 'shopping'], {
      ru: ['Роккатэй (главный магазин)', 'Флагман кондитерской Хоккайдо у вокзала: знаменитые сэндвичи Marusei с изюмом и масляным кремом и кафе на втором этаже.', 'В кафе подают десерты, которых нет в магазине,.'],
      en: ['Rokkatei (main store)', 'The flagship of a Hokkaido confectioner near the station: famous Marusei raisin-butter-cream sandwiches and a first-floor café.', 'The café serves desserts you won’t find in the shop.'],
      es: ['Rokkatei (tienda principal)', 'La tienda insignia de una confitería de Hokkaido junto a la estación: los famosos Marusei de pasas y crema de mantequilla y un café arriba.', 'En el café sirven postres que no están en la tienda.'],
      de: ['Rokkatei (Stammhaus)', 'Das Stammhaus eines Hokkaido-Konditors am Bahnhof: berühmte Marusei-Sandwiches mit Rosinen-Buttercreme und ein Café im ersten Stock.', 'Im Café gibt es Desserts, die der Laden nicht verkauft.'],
      fr: ['Rokkatei (boutique principale)', 'Le vaisseau amiral d’un confiseur de Hokkaido près de la gare : célèbres Marusei raisin-crème au beurre et un café à l’étage.', 'Le café sert des desserts introuvables en boutique.'],
      it: ['Rokkatei (negozio principale)', 'Il negozio principale di una pasticceria di Hokkaido vicino alla stazione: i famosi Marusei con uvetta e crema al burro e un caffè al primo piano.', 'Il caffè serve dolci che in negozio non trovi.'],
    }, { price: level(1), address: 'N4 W6, Chuo', menu: [
      ['Marusei Butter Sandwich', undefined, 'печенье с изюмом и масляным кремом|biscuit with raisins and butter cream|galleta con pasas y crema de mantequilla|Keks mit Rosinen und Buttercreme|biscuit raisins et crème au beurre|biscotto con uvetta e crema al burro'],
      ['Café dessert', undefined, 'десерт из кафе|café dessert|postre del café|Café-Dessert|dessert du café|dolce del caffè'],
    ] }),
    P('kinotoya-bake', 'food', 43.0687, 141.3508, CITY, 4.4, 5100, ['food', 'streetfood'], {
      ru: ['Kinotoya Bake', 'Сырные тарталетки из сливочного сыра Хоккайдо, которые пекут при вас — хрустящая корзиночка и тёплый мягкий крем.', 'Ешьте сразу — пока тёплые, крем почти жидкий.'],
      en: ['Kinotoya Bake', 'Cheese tarts of Hokkaido cream cheese baked in front of you — a crisp shell and warm, soft filling.', 'Eat them straight away, while the filling is almost molten.'],
      es: ['Kinotoya Bake', 'Tartaletas de queso crema de Hokkaido horneadas delante de ti: base crujiente y relleno tibio y suave.', 'Cómelas al momento, con el relleno casi fundido.'],
      de: ['Kinotoya Bake', 'Käsetörtchen aus Hokkaido-Frischkäse, frisch vor einem gebacken – knuspriger Boden, warme weiche Füllung.', 'Sofort essen, solange die Füllung fast flüssig ist.'],
      fr: ['Kinotoya Bake', 'Tartelettes au cream cheese de Hokkaido cuites devant vous : fond croustillant, garniture tiède et fondante.', 'Mangez-les tout de suite, la garniture presque coulante.'],
      it: ['Kinotoya Bake', 'Tortine al formaggio cremoso di Hokkaido sfornate davanti a te: guscio croccante e ripieno tiepido e morbido.', 'Mangiale subito, col ripieno quasi fuso.'],
    }, { price: level(1), menu: [
      ['Baked cheese tart', undefined, 'тёплая сырная тарталетка|warm baked cheese tart|tartaleta de queso tibia|warmes Käsetörtchen|tartelette au fromage tiède|tortina al formaggio tiepida'],
      ['Soft-serve', undefined, 'мягкое мороженое из молока Хоккайдо|Hokkaido milk soft-serve|helado suave de leche de Hokkaido|Softeis aus Hokkaido-Milch|glace à l’italienne au lait de Hokkaido|gelato soft al latte di Hokkaido'],
    ] }),
    P('parfaiteria-pal', 'food', 43.0555, 141.3545, NIGHT, 4.4, 2900, ['food', 'nightlife'], {
      ru: ['Parfaiteria PaL', 'Ночное кафе в Сусукино, где подают «симэ-парфе» — сезонный парфе, которым в Саппоро принято завершать вечер.', 'Открывается вечером и работает допоздна; в выходные бывает очередь.'],
      en: ['Parfaiteria PaL', 'A late-night Susukino café serving “shime parfait” — the seasonal parfait Sapporo uses to round off an evening.', 'Opens in the evening and stays open late; weekends can have a queue.'],
      es: ['Parfaiteria PaL', 'Un café nocturno en Susukino con «shime parfait», el parfait de temporada con que en Sapporo se cierra la noche.', 'Abre por la tarde-noche hasta tarde; el fin de semana puede haber cola.'],
      de: ['Parfaiteria PaL', 'Ein Nachtcafé in Susukino mit „Shime-Parfait“ – dem Saison-Parfait, mit dem man in Sapporo den Abend beschließt.', 'Öffnet abends und hat lange auf; am Wochenende mit Schlange.'],
      fr: ['Parfaiteria PaL', 'Un café de nuit à Susukino servant le « shime parfait », le parfait de saison qui clôt la soirée à Sapporo.', 'Ouvre le soir jusque tard ; file possible le week-end.'],
      it: ['Parfaiteria PaL', 'Un caffè notturno a Susukino con lo «shime parfait», il parfait di stagione con cui a Sapporo si chiude la serata.', 'Apre la sera fino a tardi; nel weekend può esserci fila.'],
    }, { spot: 'insta', price: level(2), address: 'Minami 4 Nishi 2, Chuo', menu: [
      ['Seasonal parfait', undefined, 'сезонный парфе|seasonal parfait|parfait de temporada|Saison-Parfait|parfait de saison|parfait di stagione'],
      ['Pistachio parfait', undefined, 'парфе с фисташкой|pistachio parfait|parfait de pistacho|Pistazien-Parfait|parfait à la pistache|parfait al pistacchio'],
    ] }),
    P('curb-market', 'food', 43.0712, 141.3263, FOOD, 4.1, 12000, ['food', 'market'], {
      ru: ['Рынок Дзёгай (Curb Market)', 'Около шестидесяти лавок у оптового рынка: крабы, морские ежи, гребешки и кайсэн-дон на завтрак.', 'Приходите утром — к обеду многие лавки уже закрываются.'],
      en: ['Curb Market (Jōgai Shijō)', 'About sixty stalls by the wholesale market: crab, sea urchin, scallops and kaisendon for breakfast.', 'Come in the morning — many stalls close by lunchtime.'],
      es: ['Curb Market (Jōgai Shijō)', 'Unos sesenta puestos junto al mercado mayorista: cangrejo, erizo, vieiras y kaisendon para desayunar.', 'Ve por la mañana: muchos cierran hacia mediodía.'],
      de: ['Curb Market (Jōgai Shijō)', 'Rund sechzig Stände am Großmarkt: Krabben, Seeigel, Jakobsmuscheln und Kaisendon zum Frühstück.', 'Morgens kommen – viele Stände schließen gegen Mittag.'],
      fr: ['Curb Market (Jōgai Shijō)', 'Une soixantaine d’étals près du marché de gros : crabe, oursin, saint-jacques et kaisendon au petit-déjeuner.', 'Venez le matin : beaucoup ferment vers midi.'],
      it: ['Curb Market (Jōgai Shijō)', 'Una sessantina di banchi vicino al mercato all’ingrosso: granchio, ricci, capesante e kaisendon a colazione.', 'Vieni al mattino: molti chiudono verso mezzogiorno.'],
    }, { price: level(2), address: 'N11 W21, Chuo', menu: [
      ['Kaisendon', undefined, 'рис с ассорти морепродуктов|rice bowl topped with mixed seafood|bol de arroz con marisco variado|Reisschale mit Meeresfrüchten|bol de riz aux fruits de mer|ciotola di riso con frutti di mare misti'],
      ['Uni-don', undefined, 'рис с морским ежом|sea urchin rice bowl|bol de arroz con erizo|Reisschale mit Seeigel|bol de riz à l’oursin|ciotola di riso con ricci'],
    ] }),
  ],
  routes: [
    D(['=sapporo-nijo-market', 'clock-tower', '=sapporo-odori-park', 'tv-tower', 'garaku', 'hokkaido-university', 'rokkatei', 'beer-museum', '=sapporo-beer-garden'],
      'Часовая башня, парк Одори, университет и пивной музей|Clock Tower, Odori Park, the university and the Beer Museum|Torre del Reloj, parque Odori, la universidad y el Museo de la Cerveza|Uhrturm, Odori-Park, Universität und Biermuseum|Tour de l’Horloge, parc Odori, l’université et le musée de la bière|Torre dell’orologio, parco Odori, università e Museo della birra'),
    D(['curb-market', 'shiroi-koibito-park', '=sapporo-hokkaido-shrine', 'okurayama', 'suage-plus', '=sapporo-mount-moiwa', '=sapporo-daruma-jingisukan', 'susukino'],
      'Шоколадная фабрика, святилище, трамплин и ночная гора Моива|Chocolate factory, shrine, ski jump and Mount Moiwa by night|Fábrica de chocolate, santuario, trampolín y el monte Moiwa de noche|Schokofabrik, Schrein, Sprungschanze und der Moiwa bei Nacht|Chocolaterie, sanctuaire, tremplin et mont Moiwa de nuit|Fabbrica di cioccolato, santuario, trampolino e monte Moiwa di notte'),
    D(['=sapporo-otaru-canal', 'otaru-music-box-museum', 'hanamaru-stellar', 'kinotoya-bake', '=sapporo-moerenuma-park', 'kani-honke'],
      'Канал Отару, шкатулки и парк Моэрэнума|Otaru Canal, music boxes and Moerenuma Park|Canal de Otaru, cajas de música y parque Moerenuma|Otaru-Kanal, Spieluhren und Moerenuma-Park|Canal d’Otaru, boîtes à musique et parc Moerenuma|Canale di Otaru, carillon e parco Moerenuma'),
  ],
};

export default pack;
