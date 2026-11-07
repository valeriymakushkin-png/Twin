import type { CityPack } from '../types';
import { free, level, makeDay, makePlace } from './_kit.ts';

const P = makePlace('shanghai');
const D = makeDay('shanghai');
const BUND = 'BLNs1ZtrQs4';
const SKYLINE = 'mnyJEvSLtvk';
const FOOD = 'PCmAFda86IY';
const STREET = 'JQGIWtz5EQY';
const TOWER = 'qiZMto1l5Tk';
const GARDEN = 'PZWa0yCbJHQ';

const pack: CityPack = {
  country: 'CN',
  city: 'shanghai',
  places: [
    P('nanjing-road', 'attraction', 31.235, 121.475, SKYLINE, 4.3, 38000, ['shopping', 'nightlife'], {
      ru: ['Улица Нанкин-лу', 'Главная торговая улица Шанхая: пешеходная часть от Народной площади к Набережной, неон, универмаги 1920–30-х годов.', 'Идите вечером в сторону Бунда — улица выводит прямо к набережной в огнях.'],
      en: ['Nanjing Road', 'Shanghai’s main shopping street: a pedestrian stretch from People’s Square to the Bund, neon and 1920s–30s department stores.', 'Walk it in the evening towards the Bund — it leads straight to the lit-up waterfront.'],
      es: ['Calle de Nankín', 'La principal calle comercial de Shanghái: un tramo peatonal de la Plaza del Pueblo al Bund, neón y grandes almacenes de los años veinte y treinta.', 'Recórrela al anochecer hacia el Bund: desemboca en el malecón iluminado.'],
      de: ['Nanjing Road', 'Shanghais Haupteinkaufsstraße: eine Fußgängerzone vom Volksplatz zum Bund, Neon und Kaufhäuser der 1920er–30er.', 'Abends Richtung Bund gehen – sie führt direkt zur beleuchteten Uferpromenade.'],
      fr: ['Rue de Nankin', 'La grande rue commerçante de Shanghai : un tronçon piéton de la place du Peuple au Bund, néons et grands magasins des années 1920–30.', 'Parcourez-la le soir vers le Bund : elle mène droit au quai illuminé.'],
      it: ['Nanjing Road', 'La principale via dello shopping di Shanghai: un tratto pedonale da Piazza del Popolo al Bund, neon e grandi magazzini anni Venti-Trenta.', 'Percorrila la sera verso il Bund: porta dritta al lungofiume illuminato.'],
    }, { spot: 'insta', price: free }),
    P('peoples-square-museum', 'attraction', 31.2285, 121.4755, SKYLINE, 4.6, 21000, ['museums', 'art', 'history'], {
      ru: ['Шанхайский музей (Народная площадь)', 'Музей в здании в форме древнего треножника-дин: бронза, керамика, каллиграфия и живопись — одно из лучших собраний Китая.', 'Вход бесплатный по брони с паспортом; приходите к открытию.'],
      en: ['Shanghai Museum (People’s Square)', 'A museum in a building shaped like an ancient ding vessel: bronzes, ceramics, calligraphy and painting — one of China’s finest collections.', 'Free entry with a booking and passport; come at opening.'],
      es: ['Museo de Shanghái (Plaza del Pueblo)', 'Un museo con forma de antiguo trípode ding: bronces, cerámica, caligrafía y pintura, una de las mejores colecciones de China.', 'Entrada gratuita con reserva y pasaporte; ve a la apertura.'],
      de: ['Shanghai-Museum (Volksplatz)', 'Ein Museum in Form eines alten Ding-Dreifußes: Bronzen, Keramik, Kalligrafie und Malerei – eine der besten Sammlungen Chinas.', 'Eintritt frei mit Reservierung und Reisepass; zur Öffnung kommen.'],
      fr: ['Musée de Shanghai (place du Peuple)', 'Un musée en forme d’ancien tripode ding : bronzes, céramiques, calligraphie et peinture, l’une des plus belles collections de Chine.', 'Entrée gratuite sur réservation avec passeport ; venez à l’ouverture.'],
      it: ['Museo di Shanghai (Piazza del Popolo)', 'Un museo a forma di antico tripode ding: bronzi, ceramiche, calligrafia e pittura, una delle migliori collezioni della Cina.', 'Ingresso gratuito con prenotazione e passaporto; vieni all’apertura.'],
    }, { price: free }),
    P('jade-buddha-temple', 'attraction', 31.242, 121.445, GARDEN, 4.4, 14000, ['temples', 'history'], {
      ru: ['Храм Нефритового Будды', 'Буддийский храм с двумя нефритовыми статуями Будды, привезёнными из Бирмы в 1882 году.', 'Нефритовый Будда стоит в отдельном зале — на него нужен небольшой доплатный билет.'],
      en: ['Jade Buddha Temple', 'A Buddhist temple with two jade Buddha statues brought from Burma in 1882.', 'The seated Jade Buddha is in a separate hall with a small extra ticket.'],
      es: ['Templo del Buda de Jade', 'Un templo budista con dos estatuas de Buda de jade traídas de Birmania en 1882.', 'El Buda de jade está en una sala aparte con un pequeño suplemento.'],
      de: ['Jadebuddha-Tempel', 'Ein buddhistischer Tempel mit zwei Jadebuddha-Statuen, 1882 aus Burma gebracht.', 'Der sitzende Jadebuddha steht in einer eigenen Halle mit kleinem Zusatzticket.'],
      fr: ['Temple du Bouddha de jade', 'Un temple bouddhiste abritant deux statues de Bouddha en jade rapportées de Birmanie en 1882.', 'Le Bouddha assis est dans une salle à part, avec un petit supplément.'],
      it: ['Tempio del Buddha di Giada', 'Un tempio buddhista con due statue del Buddha in giada portate dalla Birmania nel 1882.', 'Il Buddha seduto è in una sala a parte con un piccolo supplemento.'],
    }, { price: level(1) }),
    P('jingan-temple', 'attraction', 31.2235, 121.4455, GARDEN, 4.4, 17000, ['temples', 'photo'], {
      ru: ['Храм Цзинъань', 'Буддийский храм с золотыми крышами посреди небоскрёбов Нанкинского проспекта — один из самых узнаваемых кадров города.', 'Лучший кадр — с противоположной стороны улицы, вместе с высотками.'],
      en: ['Jing’an Temple', 'A Buddhist temple with golden roofs among the towers of West Nanjing Road — one of the city’s signature shots.', 'The best shot is from across the street, with the high-rises behind.'],
      es: ['Templo Jing’an', 'Un templo budista de tejados dorados entre los rascacielos de Nanjing Oeste, una de las fotos más reconocibles.', 'La mejor foto se hace desde la acera de enfrente, con los rascacielos.'],
      de: ['Jing’an-Tempel', 'Ein buddhistischer Tempel mit goldenen Dächern zwischen den Türmen der West Nanjing Road – eines der typischen Motive.', 'Das beste Foto von der anderen Straßenseite, mit den Hochhäusern.'],
      fr: ['Temple Jing’an', 'Un temple bouddhiste aux toits dorés entre les tours de Nanjing Ouest, l’une des images emblématiques de la ville.', 'La meilleure photo se prend du trottoir d’en face, avec les tours.'],
      it: ['Tempio Jing’an', 'Un tempio buddhista dai tetti dorati tra le torri di Nanjing Ovest, una delle immagini simbolo.', 'La foto migliore è dal marciapiede opposto, coi grattacieli dietro.'],
    }, { spot: 'insta', price: level(1) }),
    P('xintiandi', 'attraction', 31.219, 121.475, STREET, 4.4, 23000, ['oldtown', 'nightlife', 'architecture'], {
      ru: ['Синьтяньди', 'Отреставрированный квартал старых домов шикумэнь с ресторанами и барами; здесь же музей Первого съезда КПК.', 'Вечером здесь оживлённо, а днём — спокойная прогулка по переулкам.'],
      en: ['Xintiandi', 'A restored quarter of old shikumen houses with restaurants and bars, also home to the site of the First Party Congress.', 'Lively in the evening, a calm lane walk by day.'],
      es: ['Xintiandi', 'Un barrio restaurado de viejas casas shikumen con restaurantes y bares, donde está también el museo del Primer Congreso del Partido.', 'Animado por la noche, un paseo tranquilo de día.'],
      de: ['Xintiandi', 'Ein restauriertes Viertel alter Shikumen-Häuser mit Restaurants und Bars, auch mit der Gedenkstätte des Ersten Parteitags.', 'Abends lebhaft, tagsüber ein ruhiger Gassenbummel.'],
      fr: ['Xintiandi', 'Un quartier restauré de vieilles maisons shikumen avec restaurants et bars, où se trouve aussi le site du premier congrès du Parti.', 'Animé le soir, une promenade calme le jour.'],
      it: ['Xintiandi', 'Un quartiere restaurato di vecchie case shikumen con ristoranti e bar, sede anche del sito del Primo congresso del Partito.', 'Vivace la sera, una passeggiata tranquilla di giorno.'],
    }, { price: free }),
    P('former-french-concession', 'attraction', 31.213, 121.448, STREET, 4.6, 12000, ['oldtown', 'architecture', 'photo'], {
      ru: ['Улица Аньфу и бывшая Французская концессия', 'Тенистые улицы под платанами с особняками 1920–30-х годов, кофейнями и бутиками — самый «европейский» Шанхай.', 'Возьмите велосипед в прокате и катайтесь по Аньфу, Юйюань и Фусин — особенно осенью.'],
      en: ['Anfu Road and the former French Concession', 'Shady plane-tree streets lined with 1920s–30s villas, coffee shops and boutiques — Shanghai at its most European.', 'Grab a share bike and ride Anfu, Yuyuan and Fuxing roads — loveliest in autumn.'],
      es: ['Calle Anfu y la antigua Concesión Francesa', 'Calles sombreadas por plátanos con villas de los años veinte y treinta, cafeterías y boutiques: el Shanghái más europeo.', 'Coge una bici compartida y recorre Anfu, Yuyuan y Fuxing, mejor en otoño.'],
      de: ['Anfu Road und ehemalige Französische Konzession', 'Schattige Platanenstraßen mit Villen der 1920er–30er, Cafés und Boutiquen – Shanghai von seiner europäischsten Seite.', 'Ein Leihrad nehmen und Anfu, Yuyuan und Fuxing Road fahren – am schönsten im Herbst.'],
      fr: ['Rue Anfu et ancienne Concession française', 'Des rues ombragées de platanes, villas des années 1920–30, cafés et boutiques : le Shanghai le plus européen.', 'Prenez un vélo en libre-service et sillonnez Anfu, Yuyuan et Fuxing, surtout à l’automne.'],
      it: ['Anfu Road e l’ex Concessione francese', 'Vie ombreggiate da platani con ville anni Venti-Trenta, caffè e boutique: la Shanghai più europea.', 'Prendi una bici condivisa e gira per Anfu, Yuyuan e Fuxing, meglio in autunno.'],
    }, { spot: 'insta', price: free }),
    P('m50', 'attraction', 31.25, 121.45, STREET, 4.2, 8700, ['art', 'architecture'], {
      ru: ['Арт-квартал M50', 'Бывшие текстильные фабрики на берегу реки Сучжоу (Моганьшань-лу, 50), где теперь галереи и мастерские художников, а рядом — стена с граффити.', 'Пройдите вдоль Моганьшань-лу — граффити-стена тянется почти на квартал.'],
      en: ['M50 Art District', 'Former textile mills on Suzhou Creek (50 Moganshan Road), now galleries and artists’ studios, with a graffiti wall nearby.', 'Walk along Moganshan Road — the graffiti wall runs nearly a block.'],
      es: ['Distrito artístico M50', 'Antiguas fábricas textiles junto al arroyo Suzhou (Moganshan Road 50), hoy galerías y estudios, con un muro de grafitis al lado.', 'Camina por Moganshan Road: el muro de grafitis ocupa casi una manzana.'],
      de: ['Kunstviertel M50', 'Ehemalige Textilfabriken am Suzhou Creek (Moganshan Road 50), heute Galerien und Ateliers, daneben eine Graffitiwand.', 'Die Moganshan Road entlanggehen – die Graffitiwand zieht sich fast einen Block lang.'],
      fr: ['Quartier artistique M50', 'D’anciennes filatures au bord de la rivière Suzhou (50 Moganshan Road), devenues galeries et ateliers, avec un mur de graffitis à côté.', 'Longez Moganshan Road : le mur de graffitis court sur presque un pâté de maisons.'],
      it: ['Distretto artistico M50', 'Ex filande sul torrente Suzhou (Moganshan Road 50), oggi gallerie e atelier, con un muro di graffiti accanto.', 'Cammina lungo Moganshan Road: il muro di graffiti corre per quasi un isolato.'],
    }, { price: free }),
    P('power-station-of-art', 'attraction', 31.207, 121.495, TOWER, 4.4, 7600, ['art', 'museums', 'architecture'], {
      ru: ['Power Station of Art', 'Первый государственный музей современного искусства Китая (2012) в здании бывшей электростанции с высокой трубой у реки Хуанпу.', 'Здесь проходит Шанхайская биеннале — проверьте выставки на сайте.'],
      en: ['Power Station of Art', 'China’s first state-run contemporary art museum (2012), in a former power station with a tall chimney on the Huangpu.', 'It hosts the Shanghai Biennale — check the exhibitions online.'],
      es: ['Power Station of Art', 'El primer museo estatal de arte contemporáneo de China (2012), en una antigua central eléctrica con alta chimenea junto al Huangpu.', 'Acoge la Bienal de Shanghái: mira las exposiciones online.'],
      de: ['Power Station of Art', 'Chinas erstes staatliches Museum für zeitgenössische Kunst (2012) in einem ehemaligen Kraftwerk mit hohem Schornstein am Huangpu.', 'Hier findet die Shanghai-Biennale statt – Ausstellungen online prüfen.'],
      fr: ['Power Station of Art', 'Le premier musée public d’art contemporain de Chine (2012), dans une ancienne centrale à haute cheminée sur le Huangpu.', 'Il accueille la Biennale de Shanghai : consultez les expositions en ligne.'],
      it: ['Power Station of Art', 'Il primo museo statale d’arte contemporanea della Cina (2012), in un’ex centrale con alta ciminiera sullo Huangpu.', 'Ospita la Biennale di Shanghai: controlla le mostre online.'],
    }, { price: level(1) }),
    P('west-bund', 'attraction', 31.183, 121.46, TOWER, 4.5, 6300, ['art', 'museums', 'views'], {
      ru: ['Вест-Бунд', 'Набережная Хуанпу на месте старых доков и аэродрома с музеями искусства, включая Long Museum, и длинной прогулочной дорожкой.', 'Возьмите велосипед — набережная тянется на несколько километров.'],
      en: ['West Bund', 'A Huangpu riverside on the site of old docks and an airfield, with art museums including the Long Museum and a long promenade.', 'Take a bike — the waterfront runs for several kilometres.'],
      es: ['West Bund', 'Una ribera del Huangpu sobre antiguos muelles y un aeródromo, con museos de arte como el Long Museum y un largo paseo.', 'Ve en bici: el paseo se extiende varios kilómetros.'],
      de: ['West Bund', 'Ein Huangpu-Ufer auf alten Docks und einem Flugfeld mit Kunstmuseen wie dem Long Museum und einer langen Promenade.', 'Ein Rad nehmen – die Promenade zieht sich über Kilometer.'],
      fr: ['West Bund', 'Une rive du Huangpu sur d’anciens docks et un aérodrome, avec des musées d’art dont le Long Museum et une longue promenade.', 'Prenez un vélo : la promenade s’étire sur plusieurs kilomètres.'],
      it: ['West Bund', 'Un lungofiume dello Huangpu su vecchi moli e un aeroporto, con musei d’arte tra cui il Long Museum e una lunga passeggiata.', 'Prendi una bici: il lungofiume si estende per chilometri.'],
    }, { price: level(1) }),
    P('oriental-pearl-tower', 'attraction', 31.2397, 121.4998, TOWER, 4.3, 52000, ['views', 'architecture'], {
      ru: ['Телебашня «Восточная жемчужина»', 'Башня 1994 года высотой 468 м с шарами-«жемчужинами» в Луцзяцзуе; в одной из сфер — смотровая площадка со стеклянным полом.', 'Если хочется выше — по соседству Шанхайская башня со смотровой на 118-м этаже.'],
      en: ['Oriental Pearl Tower', 'A 468 m tower from 1994 with “pearl” spheres in Lujiazui; one sphere has a glass-floored observation deck.', 'For a higher view, the Shanghai Tower next door has a deck on the 118th floor.'],
      es: ['Torre Perla Oriental', 'Una torre de 468 m de 1994 con esferas «perla» en Lujiazui; una tiene mirador con suelo de cristal.', 'Si quieres más altura, al lado está la Shanghai Tower con mirador en la planta 118.'],
      de: ['Oriental Pearl Tower', 'Ein 468 m hoher Turm von 1994 mit „Perlen“-Kugeln in Lujiazui; eine hat ein Deck mit Glasboden.', 'Höher geht es nebenan im Shanghai Tower mit Deck im 118. Stock.'],
      fr: ['Tour de la Perle de l’Orient', 'Une tour de 468 m (1994) aux sphères « perles » à Lujiazui ; l’une a un belvédère au plancher de verre.', 'Pour plus de hauteur, la Shanghai Tower voisine a un observatoire au 118e étage.'],
      it: ['Torre della Perla d’Oriente', 'Una torre di 468 m del 1994 con sfere «perla» a Lujiazui; una ha un osservatorio col pavimento di vetro.', 'Per salire più in alto, accanto c’è la Shanghai Tower con osservatorio al 118° piano.'],
    }, { spot: 'insta', price: level(2) }),
    P('zhujiajiao', 'attraction', 31.11, 121.056, GARDEN, 4.3, 18000, ['oldtown', 'history', 'photo'], {
      ru: ['Водный городок Чжуцзяцзяо', 'Старинный город на каналах в часе езды от центра: каменный мост Фаншэн 1571 года, лодки и лавки вдоль воды.', 'Едьте на метро (линия 17) и приходите утром — к обеду здесь много групп.'],
      en: ['Zhujiajiao water town', 'An old canal town an hour from the centre: the stone Fangsheng Bridge of 1571, boats and shops along the water.', 'Take Metro Line 17 and arrive in the morning — groups pour in by midday.'],
      es: ['Pueblo de agua de Zhujiajiao', 'Un antiguo pueblo de canales a una hora del centro: el puente de piedra Fangsheng de 1571, barcas y tiendas junto al agua.', 'Ve en la línea 17 del metro y llega por la mañana: a mediodía llegan los grupos.'],
      de: ['Wasserstadt Zhujiajiao', 'Eine alte Kanalstadt eine Stunde vom Zentrum: die Steinbrücke Fangsheng von 1571, Boote und Läden am Wasser.', 'Mit der Metrolinie 17 fahren und morgens ankommen – mittags kommen die Gruppen.'],
      fr: ['Bourg d’eau de Zhujiajiao', 'Une vieille ville de canaux à une heure du centre : le pont de pierre Fangsheng de 1571, barques et boutiques au bord de l’eau.', 'Prenez la ligne 17 du métro et arrivez le matin : les groupes affluent à midi.'],
      it: ['Città d’acqua di Zhujiajiao', 'Un’antica città di canali a un’ora dal centro: il ponte di pietra Fangsheng del 1571, barche e botteghe sull’acqua.', 'Prendi la linea 17 della metro e arriva al mattino: a mezzogiorno arrivano i gruppi.'],
    }, { spot: 'insta', price: free }),
    P('1933-laoyangfang', 'attraction', 31.256, 121.488, STREET, 4.3, 5400, ['architecture', 'photo'], {
      ru: ['1933 Лаоянфан', 'Бывшая бойня 1933 года в стиле ар-деко: бетонный лабиринт пандусов, мостиков и лестниц, теперь — креативное пространство.', 'Пустые пандусы — отличная фотолокация; приходите в будни.'],
      en: ['1933 Laoyangfang', 'A former 1933 Art Deco slaughterhouse: a concrete maze of ramps, bridges and stairs, now a creative space.', 'The empty ramps make a great photo spot; come on a weekday.'],
      es: ['1933 Laoyangfang', 'Un antiguo matadero art déco de 1933: un laberinto de hormigón de rampas, puentes y escaleras, hoy espacio creativo.', 'Las rampas vacías son un gran escenario de fotos; ve entre semana.'],
      de: ['1933 Laoyangfang', 'Ein ehemaliger Art-déco-Schlachthof von 1933: ein Betonlabyrinth aus Rampen, Brücken und Treppen, heute Kreativraum.', 'Die leeren Rampen sind ein tolles Fotomotiv; werktags kommen.'],
      fr: ['1933 Laoyangfang', 'Un ancien abattoir Art déco de 1933 : un labyrinthe de béton fait de rampes, passerelles et escaliers, devenu espace créatif.', 'Les rampes vides font un superbe décor photo ; venez en semaine.'],
      it: ['1933 Laoyangfang', 'Un ex mattatoio Art Déco del 1933: un labirinto di cemento di rampe, passerelle e scale, oggi spazio creativo.', 'Le rampe vuote sono un ottimo set fotografico; vieni in settimana.'],
    }, { spot: 'hidden', price: free }),
    P('tang-court', 'food', 31.2185, 121.4745, FOOD, 4.6, 1300, ['food', 'luxury'], {
      ru: ['T’ang Court (The Langham, Синьтяньди)', 'Кантонский ресторан отеля The Langham: дим-самы на обед и классические блюда кантонской кухни вечером.', 'Обеденные дим-самы — самый доступный способ попробовать уровень ресторана.'],
      en: ['T’ang Court (The Langham, Xintiandi)', 'The Langham’s Cantonese restaurant: dim sum at lunch and classic Cantonese dishes in the evening.', 'Lunchtime dim sum is the most affordable way to try it.'],
      es: ['T’ang Court (The Langham, Xintiandi)', 'El restaurante cantonés del hotel The Langham: dim sum al mediodía y clásicos cantoneses por la noche.', 'El dim sum de mediodía es la forma más asequible de probarlo.'],
      de: ['T’ang Court (The Langham, Xintiandi)', 'Das kantonesische Restaurant des Langham: mittags Dim Sum, abends kantonesische Klassiker.', 'Dim Sum am Mittag ist der günstigste Weg, es zu probieren.'],
      fr: ['T’ang Court (The Langham, Xintiandi)', 'Le restaurant cantonais du Langham : dim sum le midi et grands classiques cantonais le soir.', 'Les dim sum du midi sont le moyen le plus abordable d’y goûter.'],
      it: ['T’ang Court (The Langham, Xintiandi)', 'Il ristorante cantonese del Langham: dim sum a pranzo e classici cantonesi la sera.', 'I dim sum del pranzo sono il modo più economico per provarlo.'],
    }, { price: level(3), address: 'The Langham Shanghai Xintiandi, 99 Madang Road', michelin: { award: 'star2', year: 2026 }, menu: [
      ['Dim sum', undefined, 'ассорти дим-самов|assorted dim sum|dim sum variado|gemischte Dim Sum|assortiment de dim sum|dim sum misti'],
      ['Cantonese roast meats', undefined, 'кантонское жареное мясо|Cantonese roast meats|asados cantoneses|kantonesischer Braten|rôtis cantonais|arrosti cantonesi'],
    ] }),
    P('lost-heaven-bund', 'food', 31.234, 121.488, BUND, 4.4, 5200, ['food', 'romance'], {
      ru: ['Lost Heaven (Бунд)', 'Ресторан кухни Юньнани и народов юго-запада Китая в атмосферном зале у Набережной: грибы, травы, пряные салаты.', 'Попробуйте блюда с юньнаньскими грибами — их здесь много в сезон.'],
      en: ['Lost Heaven (Bund)', 'A restaurant of Yunnan and southwest Chinese folk cooking in an atmospheric room near the Bund: mushrooms, herbs and spicy salads.', 'Try the Yunnan mushroom dishes — plentiful in season.'],
      es: ['Lost Heaven (Bund)', 'Un restaurante de cocina de Yunnan y de los pueblos del suroeste de China en una sala con encanto junto al Bund: setas, hierbas y ensaladas picantes.', 'Prueba los platos de setas de Yunnan, abundantes en temporada.'],
      de: ['Lost Heaven (Bund)', 'Ein Restaurant mit Küche Yunnans und der Völker Südwestchinas in stimmungsvollem Raum am Bund: Pilze, Kräuter, scharfe Salate.', 'Die Yunnan-Pilzgerichte probieren – in der Saison reichlich.'],
      fr: ['Lost Heaven (Bund)', 'Un restaurant de cuisine du Yunnan et des peuples du sud-ouest de la Chine, dans une salle pleine de charme près du Bund : champignons, herbes, salades épicées.', 'Goûtez les plats aux champignons du Yunnan, nombreux en saison.'],
      it: ['Lost Heaven (Bund)', 'Un ristorante di cucina dello Yunnan e dei popoli del sud-ovest della Cina, in una sala suggestiva vicino al Bund: funghi, erbe e insalate piccanti.', 'Prova i piatti ai funghi dello Yunnan, abbondanti in stagione.'],
    }, { price: level(2), address: '17 Yan’an East Road', menu: [
      ['Yunnan mushrooms', undefined, 'юньнаньские дикие грибы|Yunnan wild mushrooms|setas silvestres de Yunnan|wilde Yunnan-Pilze|champignons sauvages du Yunnan|funghi selvatici dello Yunnan'],
      ['Dai-style salad', undefined, 'пряный салат по-дайски|spicy Dai-style salad|ensalada picante al estilo dai|scharfer Salat nach Dai-Art|salade épicée à la dai|insalata piccante alla dai'],
    ] }),
    P('lao-zheng-xing', 'food', 31.2355, 121.48, FOOD, 4.2, 4600, ['food', 'history'], {
      ru: ['Лао Чжэн Син', 'Ресторан с 1862 года, классика шанхайской кухни бэньбан: жареные речные креветки и тушённая в сладком соусе свинина.', 'Здесь едят большими компаниями — берите несколько блюд на стол.'],
      en: ['Lao Zheng Xing', 'A restaurant since 1862, a classic of Shanghainese benbang cooking: crisp river shrimp and pork belly braised in sweet soy.', 'Locals eat here in groups — order several dishes to share.'],
      es: ['Lao Zheng Xing', 'Un restaurante desde 1862, clásico de la cocina benbang de Shanghái: gambas de río crujientes y panceta guisada en soja dulce.', 'Aquí se come en grupo: pide varios platos para compartir.'],
      de: ['Lao Zheng Xing', 'Ein Restaurant seit 1862, Klassiker der Shanghaier Benbang-Küche: knusprige Flussgarnelen und in süßer Soja geschmorter Schweinebauch.', 'Man isst hier in Gruppen – mehrere Gerichte zum Teilen bestellen.'],
      fr: ['Lao Zheng Xing', 'Un restaurant depuis 1862, classique de la cuisine benbang de Shanghai : crevettes de rivière croustillantes et poitrine de porc braisée au soja sucré.', 'On y mange en groupe : commandez plusieurs plats à partager.'],
      it: ['Lao Zheng Xing', 'Un ristorante dal 1862, classico della cucina benbang di Shanghai: gamberi di fiume croccanti e pancetta brasata in soia dolce.', 'Qui si mangia in gruppo: ordina più piatti da condividere.'],
    }, { price: level(2), address: '556 Fuzhou Road', menu: [
      ['Oil-fried river shrimp', undefined, 'речные креветки, обжаренные в масле|oil-fried river shrimp|gambas de río fritas|in Öl gebratene Flussgarnelen|crevettes de rivière sautées|gamberi di fiume saltati'],
      ['Hongshao rou', undefined, 'свинина, тушённая в сладком соевом соусе|pork belly braised in sweet soy|panceta guisada en soja dulce|in süßer Soja geschmorter Schweinebauch|porc braisé au soja sucré|pancetta brasata in soia dolce'],
    ] }),
    P('fu-chun-xiaolong', 'food', 31.2215, 121.44, FOOD, 4.2, 6200, ['food'], {
      ru: ['Фу Чунь Сяолун', 'Старая шанхайская закусочная с сяолунбао — пельменями с бульоном внутри — и шэнцзянами на улице Юйюань.', 'Надкусите сяолунбао сбоку и выпейте бульон, прежде чем есть.'],
      en: ['Fu Chun Xiaolong', 'An old Shanghai eatery on Yuyuan Road serving xiaolongbao — soup dumplings — and shengjian buns.', 'Nibble a hole in the side and sip the broth before eating.'],
      es: ['Fu Chun Xiaolong', 'Una vieja casa de comidas de Shanghái en Yuyuan Road con xiaolongbao, empanadillas con caldo, y shengjian.', 'Muerde un lado y sorbe el caldo antes de comer.'],
      de: ['Fu Chun Xiaolong', 'Ein altes Shanghaier Lokal in der Yuyuan Road mit Xiaolongbao – Suppenteigtaschen – und Shengjian.', 'Seitlich anbeißen und die Brühe trinken, bevor man isst.'],
      fr: ['Fu Chun Xiaolong', 'Une vieille gargote de Yuyuan Road servant des xiaolongbao, raviolis à soupe, et des shengjian.', 'Croquez un petit trou sur le côté et buvez le bouillon d’abord.'],
      it: ['Fu Chun Xiaolong', 'Una vecchia trattoria di Yuyuan Road con xiaolongbao, ravioli in brodo, e shengjian.', 'Mordi un lato e sorseggia il brodo prima di mangiare.'],
    }, { price: level(1), address: '650 Yuyuan Road', menu: [
      ['Xiaolongbao', undefined, 'пельмени с бульоном внутри|soup dumplings|empanadillas con caldo|Suppenteigtaschen|raviolis à soupe|ravioli in brodo'],
      ['Shengjian bao', undefined, 'жареные снизу булочки со свининой|pan-fried pork buns|bollos de cerdo a la plancha|gebratene Schweinefleischbrötchen|brioches au porc poêlées|panini di maiale in padella'],
    ] }),
    P('a-niang-noodles', 'food', 31.216, 121.468, FOOD, 4.3, 3900, ['food'], {
      ru: ['А Нян Мянь', 'Крошечная лапшичная на улице Сынань с фирменной лапшой с жёлтым горбылём в рыбном бульоне.', 'Мест мало — будьте готовы делить стол с соседями.'],
      en: ['A Niang Noodles', 'A tiny noodle shop on Sinan Road famous for yellow croaker noodles in fish broth.', 'Seats are few — expect to share a table.'],
      es: ['A Niang Noodles', 'Un diminuto local de fideos en Sinan Road famoso por los fideos con corvina amarilla en caldo de pescado.', 'Hay pocos sitios: prepárate para compartir mesa.'],
      de: ['A Niang Noodles', 'Ein winziger Nudelladen in der Sinan Road, berühmt für Nudeln mit Gelbem Umberfisch in Fischbrühe.', 'Wenige Plätze – man teilt den Tisch.'],
      fr: ['A Niang Noodles', 'Une minuscule échoppe de nouilles rue Sinan, célèbre pour ses nouilles au tambour jaune en bouillon de poisson.', 'Peu de places : on partage la table.'],
      it: ['A Niang Noodles', 'Un minuscolo locale di noodle in Sinan Road famoso per i noodle con ombrina gialla in brodo di pesce.', 'Pochi posti: si divide il tavolo.'],
    }, { price: level(1), address: '36 Sinan Road', menu: [
      ['Yellow croaker noodles', undefined, 'лапша с жёлтым горбылём|noodles with yellow croaker|fideos con corvina amarilla|Nudeln mit Gelbem Umberfisch|nouilles au tambour jaune|noodle con ombrina gialla'],
      ['Pork chop noodles', undefined, 'лапша со свиной отбивной|noodles with pork chop|fideos con chuleta de cerdo|Nudeln mit Schweinekotelett|nouilles à la côtelette de porc|noodle con braciola di maiale'],
    ] }),
    P('lanxin', 'food', 31.224, 121.463, STREET, 4.3, 3100, ['food'], {
      ru: ['Ланьсинь', 'Маленький семейный ресторан на улице Цзиньсянь с домашней шанхайской кухней — любимое место местных.', 'Бронируйте или приходите к открытию — зал на несколько столов.'],
      en: ['Lanxin', 'A small family restaurant on Jinxian Road serving home-style Shanghainese food — a locals’ favourite.', 'Book or come at opening — the room has only a few tables.'],
      es: ['Lanxin', 'Un pequeño restaurante familiar en Jinxian Road con cocina casera de Shanghái, favorito de los locales.', 'Reserva o ve a la apertura: tiene pocas mesas.'],
      de: ['Lanxin', 'Ein kleines Familienrestaurant in der Jinxian Road mit Shanghaier Hausmannskost – bei Einheimischen beliebt.', 'Reservieren oder zur Öffnung kommen – nur wenige Tische.'],
      fr: ['Lanxin', 'Un petit restaurant familial rue Jinxian, cuisine maison shanghaïenne, adoré des habitants.', 'Réservez ou venez à l’ouverture : peu de tables.'],
      it: ['Lanxin', 'Un piccolo ristorante familiare in Jinxian Road con cucina casalinga di Shanghai, amato dai locali.', 'Prenota o vieni all’apertura: pochi tavoli.'],
    }, { price: level(2), address: '130 Jinxian Road', menu: [
      ['Hongshao rou', undefined, 'свинина в сладком соевом соусе|braised pork belly|panceta guisada|geschmorter Schweinebauch|porc braisé|pancetta brasata'],
      ['Smoked fish', undefined, 'шанхайская «копчёная» рыба|Shanghai-style smoked fish|pescado ahumado de Shanghái|Räucherfisch nach Shanghai-Art|poisson fumé de Shanghai|pesce affumicato alla Shanghai'],
    ] }),
    P('shen-da-cheng', 'food', 31.236, 121.48, FOOD, 4.2, 4300, ['food', 'history'], {
      ru: ['Шэнь Да Чэн', 'Кондитерская на Нанкин-лу с 1875 года: шанхайские рисовые сладости, весенние зелёные шарики цинтуань и пирожки.', 'Весной берите цинтуань с бобовой пастой — сезонная классика.'],
      en: ['Shen Da Cheng', 'A sweet shop on Nanjing Road since 1875: Shanghai rice cakes, spring qingtuan green rice balls and pastries.', 'In spring get qingtuan with bean paste — a seasonal classic.'],
      es: ['Shen Da Cheng', 'Una dulcería en la calle de Nankín desde 1875: pasteles de arroz de Shanghái, bolas verdes qingtuan de primavera y bollería.', 'En primavera pide qingtuan con pasta de judía, clásico de temporada.'],
      de: ['Shen Da Cheng', 'Ein Süßwarenladen an der Nanjing Road seit 1875: Shanghaier Reiskuchen, grüne Frühlings-Qingtuan und Gebäck.', 'Im Frühling Qingtuan mit Bohnenpaste nehmen – ein Saisonklassiker.'],
      fr: ['Shen Da Cheng', 'Une pâtisserie de la rue de Nankin depuis 1875 : gâteaux de riz shanghaïens, boulettes vertes qingtuan de printemps et pâtisseries.', 'Au printemps, prenez des qingtuan à la pâte de haricot.'],
      it: ['Shen Da Cheng', 'Una pasticceria su Nanjing Road dal 1875: dolci di riso di Shanghai, palline verdi qingtuan primaverili e paste.', 'In primavera prendi i qingtuan con pasta di fagioli, classico di stagione.'],
    }, { price: level(1), address: '636 East Nanjing Road', menu: [
      ['Qingtuan', undefined, 'зелёные рисовые шарики с бобовой пастой|green rice balls with bean paste|bolas verdes de arroz con judía|grüne Reisbällchen mit Bohnenpaste|boulettes de riz vertes au haricot|palline di riso verdi con fagioli'],
      ['Tiaotou gao', undefined, 'шанхайские рисовые пирожные|Shanghai rice cakes|pasteles de arroz de Shanghái|Shanghaier Reiskuchen|gâteaux de riz shanghaïens|dolcetti di riso di Shanghai'],
    ] }),
    P('da-hu-chun', 'food', 31.234, 121.486, FOOD, 4.2, 4100, ['food', 'history'], {
      ru: ['Да Ху Чунь', 'Лавка шэнцзянов с 1932 года: жаренные снизу булочки со свининой на более пышном тесте, чем у конкурентов.', 'Отличный завтрак перед прогулкой по Бунду.'],
      en: ['Da Hu Chun', 'A shengjian shop since 1932: pan-fried pork buns on a fluffier dough than its rivals’.', 'A great breakfast before walking the Bund.'],
      es: ['Da Hu Chun', 'Un local de shengjian desde 1932: bollos de cerdo a la plancha con una masa más esponjosa que la competencia.', 'Un gran desayuno antes de pasear por el Bund.'],
      de: ['Da Hu Chun', 'Ein Shengjian-Laden seit 1932: gebratene Schweinefleischbrötchen auf fluffigerem Teig als bei der Konkurrenz.', 'Ein tolles Frühstück vor dem Bund-Spaziergang.'],
      fr: ['Da Hu Chun', 'Une échoppe de shengjian depuis 1932 : brioches au porc poêlées sur une pâte plus moelleuse que chez les concurrents.', 'Un excellent petit-déjeuner avant le Bund.'],
      it: ['Da Hu Chun', 'Un locale di shengjian dal 1932: panini di maiale in padella su un impasto più soffice dei rivali.', 'Un’ottima colazione prima del Bund.'],
    }, { price: level(1), address: '136 Middle Sichuan Road', menu: [
      ['Shengjian bao', undefined, 'жаренные снизу булочки со свининой|pan-fried pork buns|bollos de cerdo a la plancha|gebratene Schweinefleischbrötchen|brioches au porc poêlées|panini di maiale in padella'],
      ['Curry beef soup', undefined, 'суп с говядиной и карри|curry beef soup|sopa de ternera al curry|Curry-Rindfleischsuppe|soupe de bœuf au curry|zuppa di manzo al curry'],
    ] }),
    P('old-jesse', 'food', 31.204, 121.44, STREET, 4.3, 3600, ['food'], {
      ru: ['Old Jesse (Лао Цзиши)', 'Шумный ресторан домашней шанхайской кухни на улице Тяньпин, куда ходят местные семьи.', 'Бронируйте ужин заранее — без брони очередь.'],
      en: ['Old Jesse (Lao Jishi)', 'A noisy home-style Shanghainese restaurant on Tianping Road, popular with local families.', 'Book dinner ahead — without a booking there’s a queue.'],
      es: ['Old Jesse (Lao Jishi)', 'Un ruidoso restaurante de cocina casera de Shanghái en Tianping Road, popular entre familias locales.', 'Reserva la cena: sin reserva hay cola.'],
      de: ['Old Jesse (Lao Jishi)', 'Ein lautes Lokal mit Shanghaier Hausmannskost in der Tianping Road, beliebt bei Familien.', 'Abendessen vorab buchen – ohne Reservierung Schlange.'],
      fr: ['Old Jesse (Lao Jishi)', 'Un restaurant bruyant de cuisine familiale shanghaïenne rue Tianping, prisé des familles locales.', 'Réservez le dîner : sans réservation, il y a la queue.'],
      it: ['Old Jesse (Lao Jishi)', 'Un rumoroso ristorante di cucina casalinga di Shanghai in Tianping Road, amato dalle famiglie locali.', 'Prenota la cena: senza prenotazione c’è fila.'],
    }, { spot: 'hidden', price: level(2), menu: [
      ['Hongshao rou', undefined, 'свинина в сладком соевом соусе|braised pork belly|panceta guisada|geschmorter Schweinebauch|porc braisé|pancetta brasata'],
      ['Shanghai home-style dishes', undefined, 'домашние шанхайские блюда|Shanghai home-style dishes|platos caseros de Shanghái|Shanghaier Hausmannskost|plats familiaux shanghaïens|piatti casalinghi di Shanghai'],
    ] }),
    P('huanghe-road', 'food', 31.2365, 121.4705, SKYLINE, 4.2, 9200, ['food', 'nightlife'], {
      ru: ['Улица Хуанхэ-лу', 'Ресторанная улица у Народной площади, где жива ностальгия по Шанхаю 1990-х; после сериала Вонга Карвая «Расцвет» (2023) здесь снова многолюдно.', 'Берите шэнцзяны и крабовые блюда в старых ресторанах по обе стороны улицы.'],
      en: ['Huanghe Road', 'A restaurant street by People’s Square steeped in 1990s Shanghai nostalgia; after Wong Kar-wai’s series “Blossoms Shanghai” (2023) it’s busy again.', 'Try shengjian and crab dishes in the old restaurants on both sides.'],
      es: ['Calle Huanghe', 'Una calle de restaurantes junto a la Plaza del Pueblo con nostalgia del Shanghái de los noventa; tras la serie de Wong Kar-wai «Blossoms Shanghai» (2023) vuelve a llenarse.', 'Prueba shengjian y platos de cangrejo en los viejos restaurantes.'],
      de: ['Huanghe Road', 'Eine Restaurantstraße am Volksplatz voller Nostalgie nach dem Shanghai der 1990er; seit Wong Kar-wais Serie „Blossoms Shanghai“ (2023) wieder voll.', 'In den alten Lokalen Shengjian und Krabbengerichte probieren.'],
      fr: ['Rue Huanghe', 'Une rue de restaurants près de la place du Peuple, nostalgique du Shanghai des années 1990 ; depuis la série de Wong Kar-wai « Blossoms Shanghai » (2023), elle revit.', 'Goûtez shengjian et plats de crabe dans les vieux restaurants.'],
      it: ['Huanghe Road', 'Una via di ristoranti vicino a Piazza del Popolo carica di nostalgia per la Shanghai anni Novanta; dopo la serie di Wong Kar-wai «Blossoms Shanghai» (2023) è di nuovo piena.', 'Prova shengjian e piatti di granchio nei vecchi ristoranti.'],
    }, { spot: 'insta', price: level(2), menu: [
      ['Shengjian bao', undefined, 'жаренные снизу булочки со свининой|pan-fried pork buns|bollos de cerdo a la plancha|gebratene Schweinefleischbrötchen|brioches au porc poêlées|panini di maiale in padella'],
      ['Crab dishes', undefined, 'блюда из краба|crab dishes|platos de cangrejo|Krabbengerichte|plats de crabe|piatti di granchio'],
    ] }),
    P('ye-shanghai', 'food', 31.22, 121.475, STREET, 4.3, 3800, ['food', 'romance'], {
      ru: ['Ye Shanghai (Синьтяньди)', 'Ресторан шанхайской классики в интерьере 1930-х годов в квартале Синьтяньди.', 'Хороший выбор для спокойного ужина перед прогулкой по Синьтяньди.'],
      en: ['Ye Shanghai (Xintiandi)', 'A restaurant of Shanghainese classics in a 1930s-style room in Xintiandi.', 'A good choice for a calm dinner before a stroll round Xintiandi.'],
      es: ['Ye Shanghai (Xintiandi)', 'Un restaurante de clásicos de Shanghái con decoración de los años treinta en Xintiandi.', 'Buena opción para una cena tranquila antes de pasear por Xintiandi.'],
      de: ['Ye Shanghai (Xintiandi)', 'Ein Restaurant mit Shanghaier Klassikern in einem Raum im Stil der 1930er in Xintiandi.', 'Gut für ein ruhiges Abendessen vor einem Bummel durch Xintiandi.'],
      fr: ['Ye Shanghai (Xintiandi)', 'Un restaurant de classiques shanghaïens dans un décor années 1930 à Xintiandi.', 'Un bon choix pour un dîner calme avant de flâner à Xintiandi.'],
      it: ['Ye Shanghai (Xintiandi)', 'Un ristorante di classici di Shanghai in una sala in stile anni Trenta a Xintiandi.', 'Una buona scelta per una cena tranquilla prima di passeggiare a Xintiandi.'],
    }, { price: level(2), menu: [
      ['Drunken chicken', undefined, 'курица в рисовом вине|chicken marinated in rice wine|pollo marinado en vino de arroz|in Reiswein eingelegtes Huhn|poulet mariné au vin de riz|pollo marinato nel vino di riso'],
      ['Hongshao rou', undefined, 'свинина в сладком соевом соусе|braised pork belly|panceta guisada|geschmorter Schweinebauch|porc braisé|pancetta brasata'],
    ] }),
  ],
  routes: [
    D(['=shanghai-yu-garden', '=shanghai-nanxiang-bun-shop', 'peoples-square-museum', 'nanjing-road', 'shen-da-cheng', '=shanghai-the-bund', 'lost-heaven-bund'],
      'Сад Юйюань, Нанкин-лу и Набережная в огнях|Yu Garden, Nanjing Road and the Bund lit up|El Jardín Yu, la calle de Nankín y el Bund iluminado|Yu-Garten, Nanjing Road und der beleuchtete Bund|Le jardin Yu, la rue de Nankin et le Bund illuminé|Il Giardino Yu, Nanjing Road e il Bund illuminato'),
    D(['jade-buddha-temple', 'm50', 'jingan-temple', 'fu-chun-xiaolong', '=shanghai-wukang-road-mansion', 'former-french-concession', '=shanghai-tianzifang', 'tang-court', 'xintiandi'],
      'Храмы, Французская концессия и Синьтяньди|Temples, the French Concession and Xintiandi|Templos, la Concesión Francesa y Xintiandi|Tempel, Französische Konzession und Xintiandi|Temples, Concession française et Xintiandi|Templi, la Concessione francese e Xintiandi'),
    D(['da-hu-chun', 'zhujiajiao', 'power-station-of-art', 'west-bund', 'oriental-pearl-tower', '=shanghai-tower', 'old-jesse'],
      'Водный городок Чжуцзяцзяо, Вест-Бунд и небоскрёбы Пудуна|Zhujiajiao water town, the West Bund and Pudong’s towers|El pueblo de agua de Zhujiajiao, el West Bund y las torres de Pudong|Wasserstadt Zhujiajiao, West Bund und die Türme von Pudong|Le bourg d’eau de Zhujiajiao, le West Bund et les tours de Pudong|Zhujiajiao, il West Bund e le torri di Pudong'),
  ],
};

export default pack;
