import type { CityPack } from '../types';
import { free, level, makeDay, makePlace } from './_kit.ts';

const P = makePlace('tokyo');
const D = makeDay('tokyo');
const CITY = 'DGsqL2j028E';
const TEMPLE = 'BlZCXBa3maE';
const NEON = 'X07Gu03-a00';
const MARKET = 'c8ioq1LH_mI';
const STREET = 'JMD0K-kCJ5I';
const RAMEN = '5x8dUGe-7Fo';

const pack: CityPack = {
  country: 'JP',
  city: 'tokyo',
  places: [
    P('skytree', 'attraction', 35.7101, 139.8107, CITY, 4.5, 98000, ['architecture', 'photo'], {
      ru: ['Токио Скайтри', 'Телебашня высотой 634 м (2012) — самая высокая в мире; смотровые площадки на 350 и 450 м.', 'Покупайте билет онлайн; ясным зимним утром отсюда видна Фудзи.'],
      en: ['Tokyo Skytree', 'A 634 m broadcasting tower (2012) — the tallest in the world — with decks at 350 and 450 m.', 'Buy tickets online; on clear winter mornings you can see Mount Fuji.'],
      es: ['Tokyo Skytree', 'Una torre de 634 m (2012), la más alta del mundo, con miradores a 350 y 450 m.', 'Compra la entrada online; las mañanas claras de invierno se ve el Fuji.'],
      de: ['Tokyo Skytree', 'Ein 634 m hoher Sendeturm (2012) – der höchste der Welt – mit Decks in 350 und 450 m Höhe.', 'Tickets online kaufen; an klaren Wintermorgen sieht man den Fuji.'],
      fr: ['Tokyo Skytree', 'Une tour de 634 m (2012), la plus haute du monde, avec des belvédères à 350 et 450 m.', 'Achetez en ligne ; par matin clair d’hiver, on voit le Fuji.'],
      it: ['Tokyo Skytree', 'Una torre di 634 m (2012), la più alta del mondo, con terrazze a 350 e 450 m.', 'Compra il biglietto online; nelle mattine limpide d’inverno si vede il Fuji.'],
    }, { spot: 'insta', price: level(2), hours: '10:00–22:00', address: '1-1-2 Oshiage, Sumida' }),
    P('teamlab-planets', 'attraction', 35.6492, 139.7898, NEON, 4.6, 41000, ['art', 'photo'], {
      ru: ['teamLab Planets', 'Музей цифрового искусства в Тоёсу, где идёшь босиком по воде среди света, зеркал и цветов.', 'Наденьте шорты или брюки, которые легко закатать: в одном зале вода по колено.'],
      en: ['teamLab Planets', 'A digital art museum in Toyosu where you walk barefoot through water among light, mirrors and flowers.', 'Wear shorts or trousers you can roll up — one room has knee-deep water.'],
      es: ['teamLab Planets', 'Un museo de arte digital en Toyosu donde caminas descalzo por el agua entre luces, espejos y flores.', 'Lleva pantalón corto o que se pueda remangar: en una sala el agua llega a la rodilla.'],
      de: ['teamLab Planets', 'Ein Museum für digitale Kunst in Toyosu: barfuß durch Wasser, Licht, Spiegel und Blumen.', 'Shorts oder hochkrempelbare Hosen tragen – in einem Raum steht das Wasser knietief.'],
      fr: ['teamLab Planets', 'Un musée d’art numérique à Toyosu où l’on marche pieds nus dans l’eau parmi lumières, miroirs et fleurs.', 'Portez un short ou un pantalon qui se retrousse : une salle a de l’eau jusqu’aux genoux.'],
      it: ['teamLab Planets', 'Un museo d’arte digitale a Toyosu dove si cammina scalzi nell’acqua tra luci, specchi e fiori.', 'Indossa pantaloncini o pantaloni arrotolabili: in una sala l’acqua arriva al ginocchio.'],
    }, { spot: 'insta', price: level(2), address: '6-1-16 Toyosu, Koto' }),
    P('tokyo-national-museum', 'attraction', 35.7188, 139.7765, TEMPLE, 4.6, 26000, ['museums', 'history', 'art'], {
      ru: ['Токийский национальный музей', 'Старейший музей Японии (1872) в парке Уэно: самурайские доспехи, мечи, свитки и гравюры укиё-э.', 'Загляните в тихую Галерею сокровищ Хорюдзи. В понедельник закрыто.'],
      en: ['Tokyo National Museum', 'Japan’s oldest museum (1872) in Ueno Park: samurai armour, swords, scrolls and ukiyo-e prints.', 'Don’t miss the quiet Gallery of Hōryū-ji Treasures. Closed on Mondays.'],
      es: ['Museo Nacional de Tokio', 'El museo más antiguo de Japón (1872), en el parque Ueno: armaduras samuráis, espadas, rollos y grabados ukiyo-e.', 'No te pierdas la tranquila Galería de Tesoros de Hōryū-ji. Cierra los lunes.'],
      de: ['Nationalmuseum Tokio', 'Japans ältestes Museum (1872) im Ueno-Park: Samurai-Rüstungen, Schwerter, Rollbilder und Ukiyo-e.', 'Die ruhige Galerie der Hōryū-ji-Schätze nicht verpassen. Montags geschlossen.'],
      fr: ['Musée national de Tokyo', 'Le plus ancien musée du Japon (1872), au parc d’Ueno : armures de samouraï, sabres, rouleaux et estampes ukiyo-e.', 'Ne manquez pas la paisible galerie des trésors du Hōryū-ji. Fermé le lundi.'],
      it: ['Museo nazionale di Tokyo', 'Il museo più antico del Giappone (1872), nel parco di Ueno: armature samurai, spade, rotoli e stampe ukiyo-e.', 'Non perdere la tranquilla Galleria dei tesori dello Hōryū-ji. Chiuso il lunedì.'],
    }, { price: level(1), hours: '09:30–17:00', address: '13-9 Uenokoen, Taito' }),
    P('imperial-palace-east-gardens', 'nature', 35.6852, 139.7528, TEMPLE, 4.4, 21000, ['history', 'nature'], {
      ru: ['Восточные сады Императорского дворца', 'Бывшая внутренняя часть замка Эдо: каменные стены, основание главной башни и японский сад Ниномару.', 'Вход бесплатный; закрыто по понедельникам и пятницам.'],
      en: ['Imperial Palace East Gardens', 'The former inner grounds of Edo Castle: stone walls, the base of the main keep and the Ninomaru Japanese garden.', 'Free entry; closed on Mondays and Fridays.'],
      es: ['Jardines Orientales del Palacio Imperial', 'El antiguo recinto interior del castillo de Edo: murallas, la base del torreón y el jardín japonés Ninomaru.', 'Entrada gratuita; cierra lunes y viernes.'],
      de: ['Ostgärten des Kaiserpalasts', 'Das einstige Innere der Burg Edo: Steinmauern, das Fundament des Hauptturms und der Ninomaru-Garten.', 'Eintritt frei; montags und freitags geschlossen.'],
      fr: ['Jardins est du palais impérial', 'L’ancienne enceinte intérieure du château d’Edo : murailles, socle du donjon et jardin japonais Ninomaru.', 'Entrée libre ; fermé les lundis et vendredis.'],
      it: ['Giardini orientali del Palazzo imperiale', 'L’antico recinto interno del castello di Edo: mura di pietra, la base del mastio e il giardino Ninomaru.', 'Ingresso gratuito; chiuso lunedì e venerdì.'],
    }, { price: free, hours: '09:00–16:00' }),
    P('shinjuku-gyoen', 'nature', 35.6852, 139.71, CITY, 4.6, 52000, ['nature', 'photo'], {
      ru: ['Синдзюку Гёэн', 'Бывший императорский сад на 58 га с французской, английской и японской частями и примерно тысячей сакур.', 'Алкоголь сюда проносить нельзя; в понедельник сад обычно закрыт.'],
      en: ['Shinjuku Gyoen', 'A 58-hectare former imperial garden with French, English and Japanese sections and about a thousand cherry trees.', 'Alcohol isn’t allowed in; the garden usually closes on Mondays.'],
      es: ['Shinjuku Gyoen', 'Un antiguo jardín imperial de 58 ha con zonas francesa, inglesa y japonesa y cerca de mil cerezos.', 'No se permite entrar alcohol; suele cerrar los lunes.'],
      de: ['Shinjuku Gyoen', 'Ein 58 ha großer ehemaliger Kaisergarten mit französischem, englischem und japanischem Teil und rund tausend Kirschbäumen.', 'Alkohol ist verboten; montags meist geschlossen.'],
      fr: ['Shinjuku Gyoen', 'Un ancien jardin impérial de 58 ha, avec parties française, anglaise et japonaise et un millier de cerisiers.', 'L’alcool est interdit ; généralement fermé le lundi.'],
      it: ['Shinjuku Gyoen', 'Un ex giardino imperiale di 58 ettari con parti francese, inglese e giapponese e circa mille ciliegi.', 'Vietato portare alcolici; di solito chiuso il lunedì.'],
    }, { spot: 'insta', price: level(1), hours: '09:00–17:30' }),
    P('takeshita-street', 'attraction', 35.6715, 139.7031, STREET, 4.2, 47000, ['shopping', 'streetfood'], {
      ru: ['Улица Такэсита', 'Пешеходная улица Харадзюку с каваии-модой, блинчиками-крепами и радужными сладостями.', 'Приходите в будний день утром — в выходные здесь не протолкнуться.'],
      en: ['Takeshita Street', 'Harajuku’s pedestrian lane of kawaii fashion, crêpes and rainbow sweets.', 'Come on a weekday morning — weekends are shoulder to shoulder.'],
      es: ['Calle Takeshita', 'La calle peatonal de Harajuku con moda kawaii, crepes y dulces arcoíris.', 'Ve un día laborable por la mañana: el fin de semana no cabe un alfiler.'],
      de: ['Takeshita-Straße', 'Harajukus Fußgängergasse voller Kawaii-Mode, Crêpes und Regenbogen-Süßigkeiten.', 'Werktags am Vormittag kommen – am Wochenende ist es brechend voll.'],
      fr: ['Rue Takeshita', 'La rue piétonne de Harajuku : mode kawaii, crêpes et douceurs arc-en-ciel.', 'Venez un matin en semaine : le week-end, c’est bondé.'],
      it: ['Via Takeshita', 'La via pedonale di Harajuku tra moda kawaii, crêpe e dolci arcobaleno.', 'Vieni un mattino feriale: nel weekend è stracolma.'],
    }, { spot: 'insta', price: free }),
    P('akihabara', 'attraction', 35.6984, 139.7731, NEON, 4.4, 39000, ['shopping', 'nightlife'], {
      ru: ['Акихабара', 'Квартал электроники, аниме и манги: многоэтажные магазины фигурок, ретро-игры и мейд-кафе.', 'Ретро-приставки и картриджи ищите в небольших лавках на верхних этажах.'],
      en: ['Akihabara', 'The electronics, anime and manga district: multi-storey figure shops, retro games and maid cafés.', 'Hunt for retro consoles and cartridges in the small shops on upper floors.'],
      es: ['Akihabara', 'El barrio de la electrónica, el anime y el manga: tiendas de figuras de varias plantas, juegos retro y maid cafés.', 'Busca consolas y cartuchos retro en las tiendas pequeñas de los pisos altos.'],
      de: ['Akihabara', 'Das Viertel für Elektronik, Anime und Manga: mehrstöckige Figurenläden, Retro-Games und Maid-Cafés.', 'Retro-Konsolen und Module findet man in kleinen Läden in den oberen Etagen.'],
      fr: ['Akihabara', 'Le quartier de l’électronique, de l’anime et du manga : boutiques de figurines sur plusieurs étages, jeux rétro et maid cafés.', 'Cherchez consoles et cartouches rétro dans les petites boutiques des étages.'],
      it: ['Akihabara', 'Il quartiere di elettronica, anime e manga: negozi di figure su più piani, giochi retrò e maid café.', 'Cerca console e cartucce retrò nei piccoli negozi ai piani alti.'],
    }, { price: free }),
    P('golden-gai', 'attraction', 35.6938, 139.7049, NEON, 4.4, 18000, ['nightlife', 'history'], {
      ru: ['Голдэн-Гай', 'Шесть узких переулков Синдзюку с примерно двумя сотнями крошечных баров на 5–8 мест.', 'Во многих барах берут плату за место; ищите таблички «no cover charge».'],
      en: ['Golden Gai', 'Six narrow Shinjuku alleys packed with about two hundred tiny bars seating five to eight.', 'Many bars charge a seating fee; look for “no cover charge” signs.'],
      es: ['Golden Gai', 'Seis callejones de Shinjuku con unos doscientos bares diminutos de cinco a ocho plazas.', 'Muchos cobran por sentarse; busca carteles de “no cover charge”.'],
      de: ['Golden Gai', 'Sechs enge Gassen in Shinjuku mit rund zweihundert winzigen Bars für fünf bis acht Gäste.', 'Viele Bars verlangen eine Sitzgebühr; auf „no cover charge“-Schilder achten.'],
      fr: ['Golden Gai', 'Six ruelles de Shinjuku avec quelque deux cents bars minuscules de cinq à huit places.', 'Beaucoup facturent la place ; cherchez les panneaux « no cover charge ».'],
      it: ['Golden Gai', 'Sei vicoli di Shinjuku con circa duecento minuscoli bar da cinque-otto posti.', 'Molti fanno pagare il coperto; cerca i cartelli “no cover charge”.'],
    }, { spot: 'insta', price: level(2) }),
    P('tmg-observatory', 'attraction', 35.6896, 139.6917, CITY, 4.4, 33000, ['photo', 'architecture'], {
      ru: ['Смотровые площадки мэрии Токио', 'Бесплатные смотровые залы на 202 м в здании мэрии Кэндзо Тангэ; в ясный день видна Фудзи.', 'Вечером на фасад здания проецируют световое шоу — смотрите с площади перед ним.'],
      en: ['Tokyo Metropolitan Government Observatories', 'Free observation decks at 202 m in Kenzo Tange’s city hall; on clear days Fuji is visible.', 'In the evening a light show is projected onto the façade — watch from the plaza.'],
      es: ['Miradores del Gobierno Metropolitano', 'Miradores gratuitos a 202 m en el ayuntamiento de Kenzo Tange; en días claros se ve el Fuji.', 'Por la noche proyectan un espectáculo de luz en la fachada: míralo desde la plaza.'],
      de: ['Aussichtsetagen des Rathauses', 'Kostenlose Aussichtsetagen in 202 m Höhe in Kenzo Tanges Rathaus; bei klarer Sicht sieht man den Fuji.', 'Abends wird eine Lichtshow auf die Fassade projiziert – vom Platz aus ansehen.'],
      fr: ['Observatoires de la mairie de Tokyo', 'Des belvédères gratuits à 202 m dans la mairie de Kenzo Tange ; par temps clair, on voit le Fuji.', 'Le soir, un spectacle lumineux est projeté sur la façade : regardez-le depuis la place.'],
      it: ['Osservatori del Municipio di Tokyo', 'Terrazze gratuite a 202 m nel municipio di Kenzo Tange; nelle giornate limpide si vede il Fuji.', 'La sera sulla facciata viene proiettato uno spettacolo di luci: guardalo dalla piazza.'],
    }, { spot: 'insta', price: free, address: '2-8-1 Nishi-Shinjuku' }),
    P('hamarikyu', 'nature', 35.6599, 139.7635, TEMPLE, 4.4, 15000, ['nature', 'history'], {
      ru: ['Сад Хамарикю', 'Сад сёгунов эпохи Эдо с прудом, куда заходит морская вода, и чайным домиком на острове посреди небоскрёбов.', 'Выпейте маття со сладостью в чайном домике Накадзима; отсюда ходит речной трамвай в Асакусу.'],
      en: ['Hamarikyu Gardens', 'An Edo-period shogun’s garden with a seawater tidal pond and an island teahouse among skyscrapers.', 'Have matcha and a sweet at the Nakajima teahouse; a water bus runs to Asakusa.'],
      es: ['Jardines Hamarikyu', 'Un jardín de los shogunes del periodo Edo con estanque de agua de mar y casa de té en una isla entre rascacielos.', 'Toma un matcha con dulce en la casa de té Nakajima; de aquí sale un barco a Asakusa.'],
      de: ['Hamarikyu-Gärten', 'Ein Shogun-Garten der Edo-Zeit mit Gezeitenteich aus Meerwasser und Teehaus auf einer Insel zwischen Hochhäusern.', 'Im Teehaus Nakajima Matcha mit Süßigkeit trinken; ein Wasserbus fährt nach Asakusa.'],
      fr: ['Jardins Hamarikyu', 'Un jardin de shogun de l’époque d’Edo, avec un étang d’eau de mer et une maison de thé sur une île au pied des gratte-ciel.', 'Prenez un matcha et une douceur à la maison de thé Nakajima ; un bateau-bus part pour Asakusa.'],
      it: ['Giardini Hamarikyu', 'Un giardino degli shogun del periodo Edo con stagno di acqua di mare e casa da tè su un’isola tra i grattacieli.', 'Prendi un matcha con dolcetto alla casa da tè Nakajima; da qui parte un battello per Asakusa.'],
    }, { price: level(1), hours: '09:00–17:00' }),
    P('nezu-shrine', 'attraction', 35.7202, 139.7608, TEMPLE, 4.5, 9800, ['history', 'photo'], {
      ru: ['Святилище Нэдзу', 'Синтоистское святилище с постройками 1706 года и коридором из маленьких красных ворот-тории; весной цветут азалии.', 'Тоннель тории здесь почти пустой — спокойная альтернатива Фусими Инари.'],
      en: ['Nezu Shrine', 'A Shinto shrine with buildings from 1706 and a corridor of small red torii; azaleas bloom in spring.', 'The torii tunnel is nearly empty — a calm alternative to Fushimi Inari.'],
      es: ['Santuario Nezu', 'Un santuario sintoísta con edificios de 1706 y un pasillo de pequeños torii rojos; en primavera florecen las azaleas.', 'El túnel de torii está casi vacío: una alternativa tranquila a Fushimi Inari.'],
      de: ['Nezu-Schrein', 'Ein Shintō-Schrein mit Bauten von 1706 und einem Gang aus kleinen roten Torii; im Frühling blühen Azaleen.', 'Der Torii-Tunnel ist fast leer – eine ruhige Alternative zu Fushimi Inari.'],
      fr: ['Sanctuaire Nezu', 'Un sanctuaire shintō aux bâtiments de 1706 et à l’allée de petits torii rouges ; azalées au printemps.', 'Le tunnel de torii est presque désert : une alternative paisible à Fushimi Inari.'],
      it: ['Santuario Nezu', 'Un santuario shintoista con edifici del 1706 e un corridoio di piccoli torii rossi; in primavera fioriscono le azalee.', 'Il tunnel di torii è quasi vuoto: un’alternativa tranquilla a Fushimi Inari.'],
    }, { spot: 'hidden', price: free }),
    P('gotokuji', 'attraction', 35.6489, 139.6474, TEMPLE, 4.5, 8600, ['history', 'photo'], {
      ru: ['Храм Готокудзи', 'Буддийский храм в Сэтагае, который считают родиной манэки-нэко: тысячи белых кошек с поднятой лапкой.', 'Фигурку кошки можно купить в храмовой лавке и оставить у алтаря с желанием.'],
      en: ['Gōtoku-ji', 'A Setagaya Buddhist temple said to be the birthplace of the maneki-neko: thousands of white beckoning cats.', 'Buy a cat figurine at the temple shop and leave it by the altar with a wish.'],
      es: ['Templo Gōtoku-ji', 'Un templo budista de Setagaya considerado la cuna del maneki-neko: miles de gatos blancos que saludan.', 'Compra un gatito en la tienda del templo y déjalo junto al altar con un deseo.'],
      de: ['Gōtoku-ji', 'Ein buddhistischer Tempel in Setagaya, der als Geburtsort der Maneki-neko gilt: Tausende weiße Winkekatzen.', 'Im Tempelladen eine Katzenfigur kaufen und mit einem Wunsch am Altar lassen.'],
      fr: ['Temple Gōtoku-ji', 'Un temple bouddhiste de Setagaya réputé berceau du maneki-neko : des milliers de chats blancs qui font signe.', 'Achetez un chat à la boutique du temple et laissez-le près de l’autel avec un vœu.'],
      it: ['Tempio Gōtoku-ji', 'Un tempio buddhista di Setagaya ritenuto la culla del maneki-neko: migliaia di gatti bianchi che salutano.', 'Compra un gattino al negozio del tempio e lascialo all’altare con un desiderio.'],
    }, { spot: 'insta', price: free, hours: '06:00–17:00' }),
    P('den', 'food', 35.673, 139.712, STREET, 4.6, 1300, ['food', 'romance'], {
      ru: ['Den', 'Игривая современная японская кухня шефа Дзайю Хасэгавы в Дзингумаэ — с юмором, но на сезонных продуктах.', 'Бронируйте за 1–2 месяца; меню только дегустационное.'],
      en: ['Den', 'Chef Zaiyu Hasegawa’s playful modern Japanese cooking in Jingumae — witty, but built on seasonal produce.', 'Book one to two months ahead; tasting menu only.'],
      es: ['Den', 'La cocina japonesa moderna y divertida del chef Zaiyu Hasegawa en Jingumae, con humor y producto de temporada.', 'Reserva con uno o dos meses; solo menú degustación.'],
      de: ['Den', 'Die verspielte moderne japanische Küche von Zaiyu Hasegawa in Jingumae – witzig, aber saisonal.', 'Ein bis zwei Monate vorher buchen; nur Degustationsmenü.'],
      fr: ['Den', 'La cuisine japonaise moderne et ludique du chef Zaiyu Hasegawa à Jingumae, pleine d’humour mais de saison.', 'Réservez un à deux mois à l’avance ; menu dégustation uniquement.'],
      it: ['Den', 'La cucina giapponese moderna e giocosa dello chef Zaiyu Hasegawa a Jingumae, ironica ma di stagione.', 'Prenota con uno o due mesi d’anticipo; solo menu degustazione.'],
    }, { price: level(3), address: '2-3-18 Jingumae, Shibuya', michelin: { award: 'star2', year: 2026 }, menu: [
      ['DFC (Dentucky Fried Chicken)', undefined, 'фаршированное куриное крылышко в коробке|stuffed chicken wing served in a box|alita de pollo rellena servida en caja|gefüllter Hähnchenflügel in der Box|aile de poulet farcie servie en boîte|aletta di pollo ripiena servita in scatola'],
      ['Garden salad', undefined, 'салат из десятков сезонных овощей|salad of dozens of seasonal vegetables|ensalada con decenas de verduras de temporada|Salat aus Dutzenden Saisongemüsen|salade de dizaines de légumes de saison|insalata di decine di verdure di stagione'],
    ] }),
    P('narisawa', 'food', 35.672, 139.723, CITY, 4.6, 1100, ['food', 'romance'], {
      ru: ['Narisawa', 'Кухня Ёсихиро Нарисавы «сатояма» — о японских лесах, полях и побережьях, в элегантном зале Минами-Аояма.', 'Хлеб здесь поднимается и выпекается прямо на столе — следите за ним с начала ужина.'],
      en: ['Narisawa', 'Yoshihiro Narisawa’s “satoyama” cuisine about Japan’s forests, fields and coasts, in an elegant Minami-Aoyama room.', 'The bread rises and bakes at your table — watch it from the start of the meal.'],
      es: ['Narisawa', 'La cocina «satoyama» de Yoshihiro Narisawa sobre los bosques, campos y costas de Japón, en una sala elegante de Minami-Aoyama.', 'El pan sube y se hornea en tu mesa: obsérvalo desde el principio.'],
      de: ['Narisawa', 'Yoshihiro Narisawas „Satoyama“-Küche über Japans Wälder, Felder und Küsten in einem eleganten Raum in Minami-Aoyama.', 'Das Brot geht am Tisch auf und wird dort gebacken – von Anfang an zusehen.'],
      fr: ['Narisawa', 'La cuisine « satoyama » de Yoshihiro Narisawa, sur les forêts, champs et côtes du Japon, dans une salle élégante de Minami-Aoyama.', 'Le pain lève et cuit à table : observez-le dès le début du repas.'],
      it: ['Narisawa', 'La cucina «satoyama» di Yoshihiro Narisawa su boschi, campi e coste del Giappone, in un’elegante sala di Minami-Aoyama.', 'Il pane lievita e cuoce al tavolo: guardalo fin dall’inizio.'],
    }, { price: level(3), address: '2-6-15 Minami-Aoyama, Minato', michelin: { award: 'star2', year: 2026 }, menu: [
      ['Bread of the Forest', undefined, 'хлеб, который поднимается и печётся на столе|bread that rises and bakes at the table|pan que sube y se hornea en la mesa|Brot, das am Tisch aufgeht und backt|pain qui lève et cuit à table|pane che lievita e cuoce al tavolo'],
      ['Satoyama Scenery', undefined, 'закуска-пейзаж из лесных продуктов|edible landscape of forest ingredients|paisaje comestible de ingredientes del bosque|essbare Landschaft aus Waldzutaten|paysage comestible d’ingrédients de la forêt|paesaggio commestibile di ingredienti del bosco'],
    ] }),
    P('florilege', 'food', 35.66, 139.74, CITY, 4.7, 900, ['food', 'romance'], {
      ru: ['Florilège', 'Французско-японская кухня Хироясу Каватэ за стойкой вокруг открытой кухни в Азабудай Хиллз.', 'Садитесь ближе к центру стойки — вся работа повара будет перед вами.'],
      en: ['Florilège', 'Hiroyasu Kawate’s French-Japanese cooking at a counter around an open kitchen in Azabudai Hills.', 'Ask for the middle of the counter — the whole kitchen plays out in front of you.'],
      es: ['Florilège', 'La cocina franco-japonesa de Hiroyasu Kawate en una barra alrededor de la cocina abierta, en Azabudai Hills.', 'Pide el centro de la barra: tendrás toda la cocina delante.'],
      de: ['Florilège', 'Hiroyasu Kawates französisch-japanische Küche an einem Tresen rund um die offene Küche in den Azabudai Hills.', 'Nach der Mitte des Tresens fragen – die ganze Küche spielt sich vor Ihnen ab.'],
      fr: ['Florilège', 'La cuisine franco-japonaise d’Hiroyasu Kawate, servie au comptoir autour de la cuisine ouverte, à Azabudai Hills.', 'Demandez le centre du comptoir : toute la cuisine se joue devant vous.'],
      it: ['Florilège', 'La cucina franco-giapponese di Hiroyasu Kawate, al bancone attorno alla cucina a vista, negli Azabudai Hills.', 'Chiedi il centro del bancone: avrai tutta la cucina davanti.'],
    }, { price: level(3), address: 'Azabudai Hills, Minato', michelin: { award: 'star2', year: 2026 }, menu: [
      ['Sustainability', undefined, 'карпаччо из выдержанной говядины отслуживших молочных коров|aged beef from retired dairy cows|carne madurada de vacas lecheras retiradas|gereiftes Rind von ausgedienten Milchkühen|bœuf maturé de vaches laitières de réforme|manzo frollato di vacche da latte a riposo'],
      ['Seasonal tasting menu', undefined, 'сезонное дегустационное меню|seasonal tasting menu|menú degustación de temporada|saisonales Degustationsmenü|menu dégustation de saison|menu degustazione stagionale'],
    ] }),
    P('sushi-dai', 'food', 35.6455, 139.785, MARKET, 4.5, 5200, ['food', 'market'], {
      ru: ['Sushi Dai', 'Легендарная суши-стойка на оптовом рынке Тоёсу: сет омакасэ из свежайшей утренней рыбы.', 'Очередь занимают ещё до рассвета; в дни, когда рынок закрыт (воскресенье и часть сред), не работает.'],
      en: ['Sushi Dai', 'The legendary sushi counter in Toyosu wholesale market: an omakase set of the freshest morning fish.', 'People queue before dawn; it closes on market holidays (Sundays and some Wednesdays).'],
      es: ['Sushi Dai', 'La legendaria barra de sushi del mercado mayorista de Toyosu: un omakase con el pescado más fresco de la mañana.', 'Se hace cola antes del amanecer; cierra los días sin mercado (domingos y algunos miércoles).'],
      de: ['Sushi Dai', 'Der legendäre Sushi-Tresen im Großmarkt Toyosu: ein Omakase-Set mit dem frischesten Morgenfisch.', 'Man steht vor Sonnenaufgang an; an Markt-Ruhetagen (sonntags, manche Mittwoche) geschlossen.'],
      fr: ['Sushi Dai', 'Le comptoir de sushis légendaire du marché de gros de Toyosu : un omakase avec le poisson le plus frais du matin.', 'On fait la queue avant l’aube ; fermé les jours sans marché (dimanches et certains mercredis).'],
      it: ['Sushi Dai', 'Il leggendario bancone di sushi del mercato all’ingrosso di Toyosu: un omakase col pesce più fresco del mattino.', 'Si fa la fila prima dell’alba; chiuso nei giorni di mercato chiuso (domeniche e alcuni mercoledì).'],
    }, { price: level(2), address: 'Toyosu Market, Building 6', menu: [
      ['Omakase set', undefined, 'сет нигири на выбор повара|chef’s choice nigiri set|selección de nigiris del chef|Nigiri-Auswahl des Kochs|assortiment de nigiris du chef|selezione di nigiri dello chef'],
      ['Extra nigiri', undefined, 'дополнительные нигири на ваш выбор|extra nigiri of your choice|nigiris extra a elegir|zusätzliche Nigiri nach Wahl|nigiris supplémentaires au choix|nigiri extra a scelta'],
    ] }),
    P('tsunahachi', 'food', 35.6913, 139.7036, STREET, 4.3, 6800, ['food'], {
      ru: ['Цунахати', 'Темпурная в Синдзюку, работающая с 1920-х: креветки и овощи в хрустящем кляре на кунжутном масле.', 'Обеденный сет заметно дешевле ужина, а за стойкой видно, как жарят.'],
      en: ['Tsunahachi', 'A Shinjuku tempura house running since the 1920s: prawns and vegetables in crisp batter fried in sesame oil.', 'The lunch set is much cheaper than dinner, and the counter lets you watch the frying.'],
      es: ['Tsunahachi', 'Una casa de tempura de Shinjuku abierta desde los años veinte: gambas y verduras en rebozado crujiente con aceite de sésamo.', 'El menú del mediodía es mucho más barato; desde la barra ves cómo fríen.'],
      de: ['Tsunahachi', 'Ein Tempura-Haus in Shinjuku seit den 1920ern: Garnelen und Gemüse in knusprigem Teig, in Sesamöl frittiert.', 'Das Mittagsset ist viel günstiger, und am Tresen sieht man beim Frittieren zu.'],
      fr: ['Tsunahachi', 'Une maison de tempura de Shinjuku ouverte depuis les années 1920 : crevettes et légumes en pâte croustillante frits à l’huile de sésame.', 'Le menu du midi est bien moins cher, et au comptoir on voit la friture.'],
      it: ['Tsunahachi', 'Una casa di tempura di Shinjuku aperta dagli anni Venti: gamberi e verdure in pastella croccante fritti in olio di sesamo.', 'Il set del pranzo costa molto meno; al bancone vedi friggere.'],
    }, { price: level(2), address: '3-31-8 Shinjuku', menu: [
      ['Tempura zen', undefined, 'сет темпуры с рисом и супом|tempura set with rice and soup|menú de tempura con arroz y sopa|Tempura-Set mit Reis und Suppe|plateau de tempura avec riz et soupe|set di tempura con riso e zuppa'],
      ['Ten-don', undefined, 'темпура на рисе под соусом|tempura over rice with sauce|tempura sobre arroz con salsa|Tempura auf Reis mit Soße|tempura sur riz nappé de sauce|tempura su riso con salsa'],
    ] }),
    P('kanda-matsuya', 'food', 35.6966, 139.7699, TEMPLE, 4.4, 4300, ['food', 'history'], {
      ru: ['Канда Мацуя', 'Собная с 1884 года в деревянном доме 1925 года: гречневая лапша ручной работы и атмосфера старого Токио.', 'Попробуйте холодную мори-собу и допейте отвар соба-ю в конце.'],
      en: ['Kanda Matsuya', 'A soba house since 1884 in a 1925 wooden building: handmade buckwheat noodles and old-Tokyo atmosphere.', 'Try cold mori soba and finish with the soba-yu cooking water.'],
      es: ['Kanda Matsuya', 'Una casa de soba desde 1884 en un edificio de madera de 1925: fideos de alforfón artesanos y ambiente del viejo Tokio.', 'Prueba el mori soba frío y termina con el soba-yu, el agua de cocción.'],
      de: ['Kanda Matsuya', 'Ein Soba-Lokal seit 1884 in einem Holzhaus von 1925: handgemachte Buchweizennudeln und Alt-Tokio-Flair.', 'Kalte Mori-Soba probieren und mit Soba-yu, dem Kochwasser, abschließen.'],
      fr: ['Kanda Matsuya', 'Une maison de soba depuis 1884, dans un bâtiment en bois de 1925 : nouilles de sarrasin artisanales et ambiance du vieux Tokyo.', 'Goûtez les mori soba froides et finissez par le soba-yu, l’eau de cuisson.'],
      it: ['Kanda Matsuya', 'Una casa di soba dal 1884 in un edificio di legno del 1925: spaghetti di grano saraceno fatti a mano e atmosfera della vecchia Tokyo.', 'Prova le mori soba fredde e chiudi con il soba-yu, l’acqua di cottura.'],
    }, { price: level(1), address: '1-13 Kanda-Sudacho, Chiyoda', menu: [
      ['Mori soba', undefined, 'холодная соба с соусом для макания|cold soba with dipping sauce|soba fría con salsa para mojar|kalte Soba mit Dip|soba froides à tremper|soba fredde da intingere'],
      ['Kamo nanban soba', undefined, 'горячая соба с уткой и луком|hot soba with duck and leek|soba caliente con pato y puerro|heiße Soba mit Ente und Lauch|soba chaudes au canard et poireau|soba calde con anatra e porro'],
    ] }),
    P('asakusa-imahan', 'food', 35.7128, 139.7929, TEMPLE, 4.4, 5600, ['food', 'history'], {
      ru: ['Асакуса Имахан', 'Сукияки с 1895 года: мраморную говядину вагю готовят на столе при вас, макая в сырое яйцо.', 'Обеденные сеты стоят заметно меньше ужина.'],
      en: ['Asakusa Imahan', 'Sukiyaki since 1895: marbled wagyu cooked at your table and dipped in raw egg.', 'Lunch sets cost noticeably less than dinner.'],
      es: ['Asakusa Imahan', 'Sukiyaki desde 1895: wagyu veteado cocinado en tu mesa y mojado en huevo crudo.', 'Los menús de mediodía cuestan bastante menos que la cena.'],
      de: ['Asakusa Imahan', 'Sukiyaki seit 1895: marmoriertes Wagyu, am Tisch gegart und in rohes Ei getaucht.', 'Mittagssets kosten deutlich weniger als das Abendessen.'],
      fr: ['Asakusa Imahan', 'Le sukiyaki depuis 1895 : wagyu persillé cuit à table et trempé dans l’œuf cru.', 'Les menus du midi coûtent nettement moins cher que le dîner.'],
      it: ['Asakusa Imahan', 'Sukiyaki dal 1895: wagyu marmorizzato cotto al tavolo e intinto nell’uovo crudo.', 'I set del pranzo costano molto meno della cena.'],
    }, { price: level(3), address: '3-1-12 Nishi-Asakusa, Taito', menu: [
      ['Sukiyaki', undefined, 'вагю в сладком соусе с тофу и овощами|wagyu in sweet sauce with tofu and vegetables|wagyu en salsa dulce con tofu y verduras|Wagyu in süßer Soße mit Tofu und Gemüse|wagyu en sauce sucrée, tofu et légumes|wagyu in salsa dolce con tofu e verdure'],
      ['Shabu-shabu', undefined, 'тонкие ломтики вагю в бульоне|thin wagyu slices swished in broth|lonchas finas de wagyu en caldo|dünne Wagyu-Scheiben in Brühe|fines tranches de wagyu dans un bouillon|fettine sottili di wagyu nel brodo'],
    ] }),
    P('fuunji', 'food', 35.6866, 139.6966, RAMEN, 4.5, 9100, ['food', 'streetfood'], {
      ru: ['Фуундзи', 'Культовая цукэмэн-лавка у Синдзюку: толстая лапша и густой бульон из курицы и рыбы для макания.', 'Заказ через автомат у входа; очередь движется быстро.'],
      en: ['Fuunji', 'A cult tsukemen shop near Shinjuku: thick noodles dipped into a dense chicken-and-fish broth.', 'Order from the ticket machine by the door; the queue moves fast.'],
      es: ['Fuunji', 'Un local de tsukemen de culto cerca de Shinjuku: fideos gruesos para mojar en un caldo espeso de pollo y pescado.', 'Se pide en la máquina de la entrada; la cola avanza rápido.'],
      de: ['Fuunji', 'Ein Kult-Tsukemen-Laden nahe Shinjuku: dicke Nudeln zum Tunken in dichte Hühner-Fisch-Brühe.', 'Am Ticketautomaten an der Tür bestellen; die Schlange geht schnell.'],
      fr: ['Fuunji', 'Une échoppe de tsukemen culte près de Shinjuku : grosses nouilles à tremper dans un bouillon épais de poulet et poisson.', 'On commande au distributeur à l’entrée ; la file avance vite.'],
      it: ['Fuunji', 'Un locale di tsukemen di culto vicino a Shinjuku: noodle spessi da intingere in un brodo denso di pollo e pesce.', 'Si ordina al distributore all’ingresso; la fila scorre veloce.'],
    }, { price: level(1), address: '2-14-3 Yoyogi, Shibuya', menu: [
      ['Tokusei tsukemen', undefined, 'цукэмэн со всеми добавками|tsukemen with all the toppings|tsukemen con todos los ingredientes|Tsukemen mit allen Toppings|tsukemen avec toutes les garnitures|tsukemen con tutti i condimenti'],
      ['Ramen', undefined, 'рамэн в том же бульоне|ramen in the same broth|ramen en el mismo caldo|Ramen in derselben Brühe|ramen dans le même bouillon|ramen nello stesso brodo'],
    ] }),
    P('afuri-ebisu', 'food', 35.6481, 139.709, RAMEN, 4.3, 7400, ['food', 'streetfood'], {
      ru: ['Afuri Эбису', 'Первая лавка сети Afuri: лёгкий куриный рамэн с цитрусом юдзу; есть веганский вариант.', 'Возьмите юдзу-сио — с ним сеть и стала знаменитой.'],
      en: ['Afuri Ebisu', 'The original Afuri shop: light chicken ramen with yuzu citrus, plus a vegan version.', 'Get the yuzu shio — the bowl that made the chain famous.'],
      es: ['Afuri Ebisu', 'El local original de Afuri: ramen ligero de pollo con cítrico yuzu, y versión vegana.', 'Pide el yuzu shio, el cuenco que hizo famosa a la cadena.'],
      de: ['Afuri Ebisu', 'Der erste Afuri-Laden: leichte Hühner-Ramen mit Yuzu-Zitrus, auch vegan.', 'Yuzu-Shio nehmen – die Schüssel, die die Kette berühmt machte.'],
      fr: ['Afuri Ebisu', 'La boutique d’origine d’Afuri : ramen léger au poulet et au yuzu, avec une version végane.', 'Prenez le yuzu shio, le bol qui a fait la réputation de la chaîne.'],
      it: ['Afuri Ebisu', 'Il primo locale Afuri: ramen leggero di pollo con agrume yuzu, anche in versione vegana.', 'Prendi lo yuzu shio, la ciotola che ha reso famosa la catena.'],
    }, { price: level(1), address: '1-1-7 Ebisu, Shibuya', menu: [
      ['Yuzu shio ramen', undefined, 'солёный рамэн с юдзу|salt ramen with yuzu|ramen de sal con yuzu|Salz-Ramen mit Yuzu|ramen au sel et au yuzu|ramen al sale con yuzu'],
      ['Vegan ramen', undefined, 'веганский рамэн на овощном бульоне|vegan ramen in vegetable broth|ramen vegano en caldo de verduras|veganer Ramen in Gemüsebrühe|ramen végane au bouillon de légumes|ramen vegano in brodo vegetale'],
    ] }),
    P('harajuku-gyoza-ro', 'food', 35.6694, 139.7078, STREET, 4.3, 6100, ['food', 'streetfood'], {
      ru: ['Харадзюку Гёдза-ро', 'Простая и недорогая лавка, где делают только гёдза — жареные или варёные, с чесноком или без.', 'Закажите по тарелке жареных и варёных и огурцы с мисо.'],
      en: ['Harajuku Gyoza-ro', 'A simple, cheap spot serving only gyoza — fried or boiled, with or without garlic.', 'Order a plate each of fried and boiled, plus cucumber with miso.'],
      es: ['Harajuku Gyoza-ro', 'Un local sencillo y barato que solo sirve gyoza, fritas o hervidas, con o sin ajo.', 'Pide un plato de fritas, otro de hervidas y pepino con miso.'],
      de: ['Harajuku Gyoza-ro', 'Ein schlichtes, günstiges Lokal nur mit Gyoza – gebraten oder gekocht, mit oder ohne Knoblauch.', 'Je einen Teller gebratene und gekochte bestellen, dazu Gurke mit Miso.'],
      fr: ['Harajuku Gyoza-ro', 'Une adresse simple et bon marché qui ne sert que des gyoza, grillés ou bouillis, avec ou sans ail.', 'Prenez une assiette de chaque et du concombre au miso.'],
      it: ['Harajuku Gyoza-ro', 'Un locale semplice ed economico che serve solo gyoza, fritti o bolliti, con o senza aglio.', 'Ordina un piatto di fritti, uno di bolliti e cetriolo con miso.'],
    }, { price: level(1), address: '6-2-4 Jingumae, Shibuya', menu: [
      ['Yaki gyoza', undefined, 'жареные гёдза|pan-fried gyoza|gyoza a la plancha|gebratene Gyoza|gyoza grillés|gyoza alla piastra'],
      ['Sui gyoza', undefined, 'варёные гёдза|boiled gyoza|gyoza hervidas|gekochte Gyoza|gyoza bouillis|gyoza bolliti'],
    ] }),
    P('toraya-akasaka', 'food', 35.6766, 139.7303, TEMPLE, 4.5, 2400, ['food', 'history'], {
      ru: ['Toraya Акасака', 'Флагман кондитерского дома Toraya, основанного в Киото в XVI веке: ёкан, сезонные вагаси и кафе на верхнем этаже.', 'Купите маленькие ёканы в подарок — они долго хранятся.'],
      en: ['Toraya Akasaka', 'The flagship of Toraya, a confectioner founded in Kyoto in the 16th century: yōkan, seasonal wagashi and a café upstairs.', 'Pick up mini yōkan as gifts — they keep for a long time.'],
      es: ['Toraya Akasaka', 'La tienda insignia de Toraya, confitería fundada en Kioto en el siglo XVI: yōkan, wagashi de temporada y un café arriba.', 'Compra mini yōkan para regalar: se conservan mucho tiempo.'],
      de: ['Toraya Akasaka', 'Das Stammhaus von Toraya, einer im 16. Jh. in Kyōto gegründeten Konditorei: Yōkan, saisonale Wagashi und oben ein Café.', 'Mini-Yōkan als Mitbringsel kaufen – sie halten lange.'],
      fr: ['Toraya Akasaka', 'La boutique phare de Toraya, confiserie fondée à Kyoto au XVIe siècle : yōkan, wagashi de saison et café à l’étage.', 'Achetez des mini-yōkan à offrir : ils se conservent longtemps.'],
      it: ['Toraya Akasaka', 'Il negozio principale di Toraya, pasticceria fondata a Kyoto nel XVI secolo: yōkan, wagashi di stagione e caffè al piano superiore.', 'Compra dei mini yōkan da regalare: si conservano a lungo.'],
    }, { price: level(2), address: '4-9-22 Akasaka, Minato', menu: [
      ['Yōkan “Yoru no Ume”', undefined, 'тёмный ёкан из бобов адзуки|dark azuki bean yōkan|yōkan oscuro de judía azuki|dunkler Azukibohnen-Yōkan|yōkan noir aux haricots azuki|yōkan scuro di fagioli azuki'],
      ['Matcha with namagashi', undefined, 'маття с сезонной сладостью|matcha with a seasonal sweet|matcha con dulce de temporada|Matcha mit Saison-Süßigkeit|matcha et douceur de saison|matcha con dolce di stagione'],
    ] }),
  ],
  routes: [
    D(['=sensoji', 'skytree', '=nakamise', 'tokyo-national-museum', 'nezu-shrine', '=tokyo-yanaka-ginza', 'asakusa-imahan'],
      'Асакуса, Скайтри, Уэно и старый Янака|Asakusa, Skytree, Ueno and old Yanaka|Asakusa, Skytree, Ueno y el viejo Yanaka|Asakusa, Skytree, Ueno und das alte Yanaka|Asakusa, Skytree, Ueno et le vieux Yanaka|Asakusa, Skytree, Ueno e la vecchia Yanaka'),
    D(['sushi-dai', 'teamlab-planets', 'hamarikyu', 'imperial-palace-east-gardens', 'kanda-matsuya', 'akihabara', '=tokyo-zojoji-tokyo-tower', 'florilege'],
      'Рынок Тоёсу, teamLab, Императорский дворец и Акихабара|Toyosu market, teamLab, the Imperial Palace and Akihabara|Mercado de Toyosu, teamLab, Palacio Imperial y Akihabara|Toyosu-Markt, teamLab, Kaiserpalast und Akihabara|Marché de Toyosu, teamLab, palais impérial et Akihabara|Mercato di Toyosu, teamLab, Palazzo imperiale e Akihabara'),
    D(['=tokyo-meiji-jingu-torii', 'takeshita-street', 'harajuku-gyoza-ro', '=shibuya', 'shinjuku-gyoen', 'tmg-observatory', 'tsunahachi', 'golden-gai'],
      'Мэйдзи Дзингу, Харадзюку, Сибуя и Синдзюку|Meiji Jingu, Harajuku, Shibuya and Shinjuku|Meiji Jingu, Harajuku, Shibuya y Shinjuku|Meiji Jingu, Harajuku, Shibuya und Shinjuku|Meiji Jingu, Harajuku, Shibuya et Shinjuku|Meiji Jingu, Harajuku, Shibuya e Shinjuku'),
  ],
};

export default pack;
