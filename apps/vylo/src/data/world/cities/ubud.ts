import type { CityPack } from '../types';
import { fixed, free, level, makeDay, makePlace } from './_kit.ts';

const P = makePlace('ubud');
const D = makeDay('ubud');
const CITY = '-2WlTWZLnRc';
const RICE = 'jN9JnZ-SyVc';
const RIDGE = 'mkaYBa6KfaU';
const TEMPLE = '7DC9OBymfys';
const WATER = 'FlQeHeTPClU';
const CAVE = 'UXhECwQEHQA';
const FOOD = 'jLc0YzYveNU';
const FOOD2 = 'ZviThYf6Uj0';
const DINE = 'ny03bU2bars';

const pack: CityPack = {
  country: 'ID',
  city: 'ubud',
  places: [
    P('ubud-palace', 'attraction', -8.5069, 115.2633, TEMPLE, 4.4, 21400, ['culture', 'history', 'architecture'], {
      ru: ['Дворец Убуда (Пури Сарен Агунг)', 'Резиденция королевской семьи Убуда в самом центре: резные ворота, дворики и павильоны. Вечером здесь показывают танцы легонг и баронг.', 'Билеты на вечерний танец продают у входа днём; приходите за 20 минут, чтобы сесть ближе.'],
      en: ['Ubud Palace (Puri Saren Agung)', 'The Ubud royal family’s residence right in the centre: carved gates, courtyards and pavilions. Legong and barong dances are performed here in the evening.', 'Tickets for the evening dance are sold at the gate in the daytime; arrive 20 minutes early for a closer seat.'],
      es: ['Palacio de Ubud (Puri Saren Agung)', 'La residencia de la familia real de Ubud en pleno centro: puertas talladas, patios y pabellones. Por la noche hay danzas legong y barong.', 'Las entradas para la danza se venden en la puerta de día; llega 20 minutos antes para sentarte cerca.'],
      de: ['Palast von Ubud (Puri Saren Agung)', 'Die Residenz der Königsfamilie von Ubud mitten im Zentrum: geschnitzte Tore, Höfe und Pavillons. Abends werden Legong- und Barong-Tänze aufgeführt.', 'Tickets für den Abendtanz gibt es tagsüber am Tor; 20 Minuten früher kommen für einen Platz vorn.'],
      fr: ['Palais d’Ubud (Puri Saren Agung)', 'La résidence de la famille royale d’Ubud en plein centre : portes sculptées, cours et pavillons. Danses legong et barong le soir.', 'Billets du spectacle vendus à l’entrée en journée ; arrivez 20 minutes avant pour être devant.'],
      it: ['Palazzo di Ubud (Puri Saren Agung)', 'La residenza della famiglia reale di Ubud in pieno centro: portali scolpiti, cortili e padiglioni. La sera si danzano legong e barong.', 'I biglietti per la danza si comprano all’ingresso di giorno; arriva 20 minuti prima per sederti vicino.'],
    }, { price: free, address: 'Jl. Raya Ubud' }),
    P('goa-gajah', 'attraction', -8.5234, 115.2869, CAVE, 4.3, 16800, ['temples', 'history'], {
      ru: ['Гоа Гаджа (Слоновья пещера)', 'Святилище IX–XI веков: вход в пещеру в виде пасти демона, древние купальни и тропа вниз к ручью с руинами.', 'Саронг выдают при входе; спуститесь к ручью — там тише и прохладнее.'],
      en: ['Goa Gajah (Elephant Cave)', 'A 9th–11th-century sanctuary: a cave entrance carved as a demon’s mouth, ancient bathing pools and a path down to a stream with ruins.', 'A sarong is provided at the entrance; walk down to the stream, it’s quieter and cooler.'],
      es: ['Goa Gajah (Cueva del Elefante)', 'Un santuario de los siglos IX–XI: entrada a la cueva tallada como la boca de un demonio, baños antiguos y un sendero al arroyo con ruinas.', 'Te prestan un sarong en la entrada; baja al arroyo, es más tranquilo y fresco.'],
      de: ['Goa Gajah (Elefantenhöhle)', 'Ein Heiligtum aus dem 9.–11. Jh.: ein Höhleneingang als Dämonenmaul, alte Badebecken und ein Pfad hinunter zum Bach mit Ruinen.', 'Einen Sarong gibt es am Eingang; zum Bach hinuntergehen – ruhiger und kühler.'],
      fr: ['Goa Gajah (grotte de l’Éléphant)', 'Un sanctuaire des IXe–XIe siècles : entrée de grotte en gueule de démon, bassins anciens et sentier vers un ruisseau et ses ruines.', 'Un sarong est fourni à l’entrée ; descendez au ruisseau, plus calme et plus frais.'],
      it: ['Goa Gajah (Grotta dell’Elefante)', 'Un santuario dei secoli IX–XI: ingresso della grotta scolpito come bocca di demone, antiche vasche e un sentiero fino al ruscello con rovine.', 'Il sarong si riceve all’ingresso; scendi al ruscello, è più tranquillo e fresco.'],
    }, { price: fixed(50000, 'IDR'), hours: '08:00–17:00' }),
    P('arma-museum', 'attraction', -8.5195, 115.2632, TEMPLE, 4.5, 3600, ['art', 'museums', 'gardens'], {
      ru: ['Музей ARMA', 'Музей и культурный центр в Пенгосекане: балийская живопись от классического стиля камасан до XX века, сад и уроки танца и гамелана.', 'Расписание мастер-классов (танец, резьба, плетение подношений) уточните на ресепшене.'],
      en: ['ARMA Museum', 'A museum and cultural centre in Pengosekan: Balinese painting from classical Kamasan style to the 20th century, a garden and dance and gamelan lessons.', 'Check the workshop schedule (dance, carving, offering-weaving) at reception.'],
      es: ['Museo ARMA', 'Museo y centro cultural en Pengosekan: pintura balinesa del estilo clásico kamasan al siglo XX, jardín y clases de danza y gamelán.', 'Consulta en recepción el horario de talleres (danza, talla, ofrendas).'],
      de: ['ARMA-Museum', 'Museum und Kulturzentrum in Pengosekan: balinesische Malerei vom klassischen Kamasan-Stil bis ins 20. Jh., ein Garten sowie Tanz- und Gamelan-Kurse.', 'Den Workshop-Plan (Tanz, Schnitzen, Opfergaben flechten) an der Rezeption erfragen.'],
      fr: ['Musée ARMA', 'Musée et centre culturel à Pengosekan : peinture balinaise du style classique kamasan au XXe siècle, jardin, cours de danse et de gamelan.', 'Demandez le planning des ateliers (danse, sculpture, offrandes) à l’accueil.'],
      it: ['Museo ARMA', 'Museo e centro culturale a Pengosekan: pittura balinese dallo stile classico kamasan al Novecento, un giardino e lezioni di danza e gamelan.', 'Chiedi alla reception il calendario dei laboratori (danza, intaglio, offerte).'],
    }, { hours: '09:00–18:00', address: 'Jl. Raya Pengosekan' }),
    P('neka-museum', 'attraction', -8.4908, 115.2483, TEMPLE, 4.6, 2500, ['art', 'museums'], {
      ru: ['Художественный музей Нека', 'Несколько павильонов с лучшей коллекцией балийского искусства: от традиционной живописи до работ европейцев, живших на Бали.', 'Самый интересный зал — с работами Арье Смита и Вальтера Шписа.'],
      en: ['Neka Art Museum', 'Several pavilions holding a fine collection of Balinese art, from traditional painting to works by Europeans who lived on Bali.', 'The highlight is the hall with Arie Smit and Walter Spies.'],
      es: ['Museo de Arte Neka', 'Varios pabellones con una gran colección de arte balinés, de la pintura tradicional a obras de europeos que vivieron en Bali.', 'Lo mejor: la sala con Arie Smit y Walter Spies.'],
      de: ['Neka Art Museum', 'Mehrere Pavillons mit einer feinen Sammlung balinesischer Kunst – von traditioneller Malerei bis zu Werken von Europäern, die auf Bali lebten.', 'Höhepunkt ist der Saal mit Arie Smit und Walter Spies.'],
      fr: ['Musée d’art Neka', 'Plusieurs pavillons et une belle collection d’art balinais, de la peinture traditionnelle aux œuvres d’Européens ayant vécu à Bali.', 'Le clou : la salle Arie Smit et Walter Spies.'],
      it: ['Museo d’arte Neka', 'Diversi padiglioni con una ricca collezione di arte balinese, dalla pittura tradizionale alle opere di europei vissuti a Bali.', 'Il meglio: la sala con Arie Smit e Walter Spies.'],
    }, { hours: '09:00–17:00', address: 'Jl. Raya Sanggingan' }),
    P('pura-gunung-lebah', 'attraction', -8.5031, 115.2545, TEMPLE, 4.6, 1900, ['temples', 'nature'], {
      ru: ['Храм Пура Гунунг Лебах', 'Тихий храм у слияния двух рек в ущелье Чампухан, с которого начинается тропа по хребту.', 'Зайдите на рассвете перед прогулкой по хребту — почти никого нет.'],
      en: ['Pura Gunung Lebah', 'A quiet temple at the confluence of two rivers in the Campuhan gorge, where the ridge walk begins.', 'Stop by at dawn before the ridge walk — hardly anyone is there.'],
      es: ['Pura Gunung Lebah', 'Un templo tranquilo en la confluencia de dos ríos en la garganta de Campuhan, donde empieza el paseo por la cresta.', 'Ven al amanecer antes del paseo: casi no hay nadie.'],
      de: ['Pura Gunung Lebah', 'Ein stiller Tempel am Zusammenfluss zweier Flüsse in der Campuhan-Schlucht, wo der Ridge Walk beginnt.', 'Im Morgengrauen vor dem Ridge Walk vorbeischauen – kaum jemand da.'],
      fr: ['Pura Gunung Lebah', 'Un temple paisible au confluent de deux rivières dans la gorge de Campuhan, au départ de la balade sur la crête.', 'Passez à l’aube avant la crête : presque personne.'],
      it: ['Pura Gunung Lebah', 'Un tempio tranquillo alla confluenza di due fiumi nella gola di Campuhan, dove inizia la passeggiata sul crinale.', 'Passa all’alba prima del crinale: quasi nessuno.'],
    }, { spot: 'hidden', price: free }),
    P('pura-taman-ayun', 'attraction', -8.5416, 115.1726, TEMPLE, 4.6, 14900, ['temples', 'unesco', 'gardens'], {
      ru: ['Храм Пура Таман Аюн', 'Королевский храм XVII века в Менгви, окружённый рвом с водой, с ярусными башнями-меру; входит в объект ЮНЕСКО «Культурный ландшафт Бали».', 'Во внутренний двор не пускают, но вдоль ограды видно все меру.'],
      en: ['Pura Taman Ayun', 'A 17th-century royal temple in Mengwi ringed by a moat, with tiered meru towers; part of the UNESCO Cultural Landscape of Bali.', 'The inner courtyard is closed, but you see every meru from along the wall.'],
      es: ['Pura Taman Ayun', 'Un templo real del siglo XVII en Mengwi rodeado de un foso, con torres meru escalonadas; parte del Paisaje Cultural de Bali (UNESCO).', 'El patio interior está cerrado, pero desde el muro se ven todos los meru.'],
      de: ['Pura Taman Ayun', 'Ein königlicher Tempel aus dem 17. Jh. in Mengwi mit Wassergraben und gestuften Meru-Türmen; Teil der UNESCO-Kulturlandschaft Bali.', 'Der Innenhof ist gesperrt, aber entlang der Mauer sieht man alle Merus.'],
      fr: ['Pura Taman Ayun', 'Un temple royal du XVIIe siècle à Mengwi entouré de douves, avec ses tours meru étagées ; partie du Paysage culturel de Bali (UNESCO).', 'La cour intérieure est fermée, mais on voit tous les meru le long du mur.'],
      it: ['Pura Taman Ayun', 'Un tempio reale del XVII secolo a Mengwi circondato da un fossato, con torri meru a più tetti; parte del Paesaggio culturale di Bali (UNESCO).', 'Il cortile interno è chiuso, ma lungo il muro si vedono tutti i meru.'],
    }, { hours: '08:00–18:00' }),
    P('jatiluwih', 'nature', -8.3703, 115.131, RICE, 4.6, 12300, ['unesco', 'nature', 'hiking', 'views'], {
      ru: ['Рисовые террасы Джатилувих', 'Самые большие террасы Бали у подножия вулкана Батукару, орошаемые древней системой субак — часть объекта ЮНЕСКО. Тише и просторнее, чем Тегаллаланг.', 'Пройдите один из размеченных маршрутов по межам (от 30 минут до 2 часов); около полутора часов езды от Убуда.'],
      en: ['Jatiluwih Rice Terraces', 'Bali’s largest terraces below Mount Batukaru, watered by the ancient subak system — part of the UNESCO site. Quieter and wider than Tegallalang.', 'Walk one of the marked trails along the dykes (30 minutes to 2 hours); about 1.5 hours’ drive from Ubud.'],
      es: ['Terrazas de arroz de Jatiluwih', 'Las mayores terrazas de Bali al pie del Batukaru, regadas por el antiguo sistema subak, parte del sitio UNESCO. Más tranquilas y amplias que Tegallalang.', 'Recorre uno de los senderos marcados (de 30 minutos a 2 horas); a hora y media de Ubud.'],
      de: ['Reisterrassen Jatiluwih', 'Balis größte Terrassen unter dem Batukaru, bewässert vom uralten Subak-System – Teil der UNESCO-Stätte. Ruhiger und weiter als Tegallalang.', 'Einen markierten Weg über die Dämme gehen (30 Min. bis 2 Std.); ca. 1,5 Std. Fahrt ab Ubud.'],
      fr: ['Rizières de Jatiluwih', 'Les plus vastes terrasses de Bali au pied du Batukaru, irriguées par l’antique système subak, partie du site UNESCO. Plus calmes et plus larges que Tegallalang.', 'Suivez un sentier balisé sur les diguettes (30 min à 2 h) ; à environ 1 h 30 d’Ubud.'],
      it: ['Terrazze di riso di Jatiluwih', 'Le terrazze più vaste di Bali ai piedi del Batukaru, irrigate dall’antico sistema subak, parte del sito UNESCO. Più tranquille e ampie di Tegallalang.', 'Percorri un sentiero segnato sugli argini (da 30 minuti a 2 ore); circa 1 ora e mezza da Ubud.'],
    }, { spot: 'insta', hours: '08:00–18:00' }),
    P('tukad-cepung', 'nature', -8.4385, 115.388, WATER, 4.5, 6800, ['waterfalls', 'photo', 'adventure'], {
      ru: ['Водопад Тукад Чепунг', 'Водопад внутри узкого каньона в Бангли: утром солнечные лучи пробиваются сквозь щель в скале прямо в водяную пыль.', 'Лучший свет — примерно с 9 до 11 утра в сухой сезон; обувь промокнет.'],
      en: ['Tukad Cepung Waterfall', 'A waterfall inside a narrow canyon in Bangli: in the morning sunbeams pierce a gap in the rock straight into the spray.', 'Best light is roughly 9–11 am in the dry season; your shoes will get wet.'],
      es: ['Cascada Tukad Cepung', 'Una cascada dentro de un cañón estrecho en Bangli: por la mañana los rayos de sol entran por una grieta hasta el agua pulverizada.', 'La mejor luz, de 9 a 11 h aprox. en temporada seca; te mojarás los zapatos.'],
      de: ['Wasserfall Tukad Cepung', 'Ein Wasserfall in einer engen Schlucht in Bangli: morgens fallen Sonnenstrahlen durch einen Felsspalt direkt in die Gischt.', 'Bestes Licht etwa 9–11 Uhr in der Trockenzeit; die Schuhe werden nass.'],
      fr: ['Cascade de Tukad Cepung', 'Une cascade dans un étroit canyon à Bangli : le matin, des rayons de soleil percent une fente de la roche jusque dans les embruns.', 'Meilleure lumière vers 9 h–11 h en saison sèche ; vos chaussures seront mouillées.'],
      it: ['Cascata Tukad Cepung', 'Una cascata in uno stretto canyon a Bangli: al mattino i raggi del sole entrano da una fessura nella roccia fin nella nebbiolina.', 'Luce migliore circa 9–11 nella stagione secca; le scarpe si bagneranno.'],
    }, { spot: 'insta', hours: '08:00–17:00' }),
    P('kanto-lampo', 'nature', -8.5302, 115.3228, WATER, 4.5, 9900, ['waterfalls', 'photo'], {
      ru: ['Водопад Канто Лампо', 'Невысокий водопад, стекающий по ступенчатой скале, в 20 минутах от Убуда — популярное место для фото.', 'Приходите к открытию — позже выстраивается очередь на фото на камне.'],
      en: ['Kanto Lampo Waterfall', 'A low waterfall cascading over stepped rock, 20 minutes from Ubud — a popular photo spot.', 'Come at opening — later there is a queue for photos on the rock.'],
      es: ['Cascada Kanto Lampo', 'Una cascada baja que cae por roca escalonada, a 20 minutos de Ubud: un punto muy fotografiado.', 'Llega a la apertura: después hay cola para la foto en la roca.'],
      de: ['Wasserfall Kanto Lampo', 'Ein niedriger Wasserfall über gestuften Fels, 20 Minuten von Ubud – ein beliebter Fotospot.', 'Zur Öffnung kommen – später gibt es eine Schlange fürs Foto auf dem Fels.'],
      fr: ['Cascade de Kanto Lampo', 'Une cascade basse dévalant une roche en gradins, à 20 minutes d’Ubud : un spot photo prisé.', 'Venez à l’ouverture : ensuite, file d’attente pour la photo sur le rocher.'],
      it: ['Cascata Kanto Lampo', 'Una cascata bassa che scende su roccia a gradini, a 20 minuti da Ubud: un luogo molto fotografato.', 'Vieni all’apertura: dopo c’è la fila per la foto sulla roccia.'],
    }, { spot: 'insta', hours: '06:00–18:00' }),
    P('mount-batur', 'nature', -8.242, 115.375, RIDGE, 4.6, 15100, ['volcanoes', 'hiking', 'views', 'adventure'], {
      ru: ['Рассвет на вулкане Батур', 'Действующий вулкан высотой 1717 м: подъём ночью около двух часов, на вершине — рассвет над кальдерой, озером и вулканом Агунг.', 'Трансфер из Убуда около 2:00; подниматься нужно с местным гидом, возьмите тёплую кофту и фонарик.'],
      en: ['Mount Batur sunrise', 'An active 1,717 m volcano: a night climb of about two hours to watch sunrise over the caldera, the lake and Mount Agung.', 'Pick-up from Ubud is around 2 am; climb with a local guide and bring a warm layer and a torch.'],
      es: ['Amanecer en el monte Batur', 'Un volcán activo de 1717 m: subida nocturna de unas dos horas para ver amanecer sobre la caldera, el lago y el Agung.', 'Recogida en Ubud hacia las 2:00; sube con guía local y lleva abrigo y linterna.'],
      de: ['Sonnenaufgang am Batur', 'Ein aktiver Vulkan von 1717 m: rund zwei Stunden Nachtaufstieg für den Sonnenaufgang über Caldera, See und Agung.', 'Abholung in Ubud gegen 2 Uhr; mit lokalem Guide aufsteigen, warme Jacke und Stirnlampe mitnehmen.'],
      fr: ['Lever de soleil sur le Batur', 'Un volcan actif de 1 717 m : environ deux heures de montée de nuit pour voir le jour se lever sur la caldeira, le lac et l’Agung.', 'Départ d’Ubud vers 2 h ; montée avec un guide local, prévoyez une polaire et une lampe.'],
      it: ['Alba sul monte Batur', 'Un vulcano attivo di 1717 m: circa due ore di salita notturna per l’alba sulla caldera, il lago e l’Agung.', 'Partenza da Ubud verso le 2; si sale con guida locale, porta una felpa e una torcia.'],
    }),

    P('locavore-nxt', 'food', -8.4906, 115.2455, DINE, 4.7, 1100, ['food', 'luxury'], {
      ru: ['Locavore NXT', 'Преемник знаменитого ресторана Locavore: дегустационный сет из продуктов Индонезии, своя ферма, ферментация и подход «без отходов».', 'Бронируйте за несколько недель; сет идёт 3–4 часа, сообщите заранее об ограничениях в еде.'],
      en: ['Locavore NXT', 'The successor to the famed Locavore: a tasting menu of Indonesian produce with its own farm, fermentation and a zero-waste approach.', 'Book weeks ahead; the menu runs 3–4 hours — flag dietary needs in advance.'],
      es: ['Locavore NXT', 'El sucesor del célebre Locavore: menú degustación de producto indonesio con huerto propio, fermentación y enfoque de residuo cero.', 'Reserva con semanas de antelación; dura 3–4 horas, avisa de restricciones.'],
      de: ['Locavore NXT', 'Der Nachfolger des berühmten Locavore: ein Degustationsmenü aus indonesischen Produkten mit eigener Farm, Fermentation und Zero-Waste-Ansatz.', 'Wochen vorher buchen; das Menü dauert 3–4 Stunden – Unverträglichkeiten vorab melden.'],
      fr: ['Locavore NXT', 'Le successeur du célèbre Locavore : menu dégustation de produits indonésiens, ferme maison, fermentation et démarche zéro déchet.', 'Réservez des semaines à l’avance ; le menu dure 3 à 4 h, signalez vos restrictions.'],
      it: ['Locavore NXT', 'L’erede del celebre Locavore: menù degustazione di prodotti indonesiani con fattoria propria, fermentazione e approccio zero sprechi.', 'Prenota con settimane d’anticipo; dura 3–4 ore, segnala le intolleranze.'],
    }, { price: level(3), address: 'Jl. Raya Lungsiakan, Kedewatan', menu: [
      ['Tasting menu', undefined, 'дегустационный сет из местных продуктов|tasting menu of local produce|menú degustación de producto local|Degustationsmenü aus lokalen Produkten|menu dégustation de produits locaux|menù degustazione di prodotti locali'],
      ['Plant-based tasting', undefined, 'растительный дегустационный сет|plant-based tasting menu|menú degustación vegetal|pflanzliches Degustationsmenü|menu dégustation végétal|menù degustazione vegetale'],
    ] }),
    P('mozaic', 'food', -8.4935, 115.2496, DINE, 4.6, 1700, ['food', 'luxury', 'romance'], {
      ru: ['Mozaic', 'Ресторан шефа Криса Саланса в Сангингане: французская техника и балийские продукты, ужин в тропическом саду.', 'Выбирайте столик в саду; есть вегетарианский дегустационный сет.'],
      en: ['Mozaic', 'Chef Chris Salans’ restaurant in Sanggingan: French technique with Balinese produce, dinner in a tropical garden.', 'Ask for a garden table; there is a vegetarian tasting menu.'],
      es: ['Mozaic', 'El restaurante del chef Chris Salans en Sanggingan: técnica francesa con producto balinés, cena en un jardín tropical.', 'Pide mesa en el jardín; hay menú degustación vegetariano.'],
      de: ['Mozaic', 'Das Restaurant von Chris Salans in Sanggingan: französische Technik mit balinesischen Produkten, Dinner im Tropengarten.', 'Nach einem Gartentisch fragen; es gibt ein vegetarisches Menü.'],
      fr: ['Mozaic', 'Le restaurant du chef Chris Salans à Sanggingan : technique française et produits balinais, dîner dans un jardin tropical.', 'Demandez une table au jardin ; il existe un menu végétarien.'],
      it: ['Mozaic', 'Il ristorante dello chef Chris Salans a Sanggingan: tecnica francese e prodotti balinesi, cena in un giardino tropicale.', 'Chiedi un tavolo in giardino; c’è un menù vegetariano.'],
    }, { price: level(3), address: 'Jl. Raya Sanggingan', menu: [
      ['Tasting menu', undefined, 'дегустационный сет|tasting menu|menú degustación|Degustationsmenü|menu dégustation|menù degustazione'],
      ['Vegetarian tasting', undefined, 'вегетарианский сет|vegetarian tasting menu|menú degustación vegetariano|vegetarisches Degustationsmenü|menu dégustation végétarien|menù degustazione vegetariano'],
    ] }),
    P('hujan-locale', 'food', -8.5049, 115.2617, DINE, 4.6, 3300, ['food'], {
      ru: ['Hujan Locale', 'Ресторан шефа Уилла Мейрика в колониальном доме: современная индонезийская и юго-восточноазиатская кухня и хорошие коктейли.', 'Попробуйте говядину ренданг и коктейли с местными специями; лучше бронировать на ужин.'],
      en: ['Hujan Locale', 'Chef Will Meyrick’s restaurant in a colonial house: modern Indonesian and Southeast Asian cooking and good cocktails.', 'Try the beef rendang and the spice cocktails; book for dinner.'],
      es: ['Hujan Locale', 'El restaurante del chef Will Meyrick en una casa colonial: cocina indonesia y del sudeste asiático moderna y buenos cócteles.', 'Prueba el rendang de ternera y los cócteles con especias; reserva para cenar.'],
      de: ['Hujan Locale', 'Will Meyricks Restaurant in einem Kolonialhaus: moderne indonesische und südostasiatische Küche, gute Cocktails.', 'Das Rindfleisch-Rendang und die Gewürzcocktails probieren; abends reservieren.'],
      fr: ['Hujan Locale', 'Le restaurant du chef Will Meyrick dans une maison coloniale : cuisine indonésienne et d’Asie du Sud-Est moderne, bons cocktails.', 'Goûtez le rendang de bœuf et les cocktails aux épices ; réservez le soir.'],
      it: ['Hujan Locale', 'Il ristorante dello chef Will Meyrick in una casa coloniale: cucina indonesiana e del Sud-est asiatico moderna e buoni cocktail.', 'Prova il rendang di manzo e i cocktail alle spezie; prenota per cena.'],
    }, { price: level(2), address: 'Jl. Sriwedari 5', menu: [
      ['Beef Rendang', undefined, 'говядина, томлённая в кокосе и специях|beef slow-cooked in coconut and spices|ternera guisada en coco y especias|in Kokos und Gewürzen geschmortes Rind|bœuf mijoté au coco et aux épices|manzo stufato al cocco e spezie'],
      ['Nasi Goreng', undefined, 'жареный рис по-индонезийски|Indonesian fried rice|arroz frito indonesio|indonesischer Bratreis|riz frit indonésien|riso fritto indonesiano'],
    ] }),
    P('room4dessert', 'food', -8.4885, 115.2474, DINE, 4.6, 1400, ['food', 'luxury'], {
      ru: ['Room4Dessert', 'Десертный бар кондитера Уилла Голдфарба: дегустация из нескольких десертов с травами из собственного сада и коктейли.', 'Идеально после ужина — приходите к 21:00 и бронируйте заранее.'],
      en: ['Room4Dessert', 'Pastry chef Will Goldfarb’s dessert bar: a multi-course dessert tasting with herbs from its own garden, plus cocktails.', 'Perfect after dinner — come around 9 pm and book ahead.'],
      es: ['Room4Dessert', 'El bar de postres del pastelero Will Goldfarb: degustación de varios postres con hierbas de su huerto y cócteles.', 'Perfecto después de cenar: ven hacia las 21:00 y reserva.'],
      de: ['Room4Dessert', 'Die Dessertbar des Pâtissiers Will Goldfarb: ein mehrgängiges Dessertmenü mit Kräutern aus dem eigenen Garten und Cocktails.', 'Ideal nach dem Abendessen – gegen 21 Uhr kommen und vorab buchen.'],
      fr: ['Room4Dessert', 'Le bar à desserts du pâtissier Will Goldfarb : dégustation de plusieurs desserts aux herbes du jardin et cocktails.', 'Parfait après le dîner : venez vers 21 h et réservez.'],
      it: ['Room4Dessert', 'Il dessert bar del pasticcere Will Goldfarb: degustazione di più dolci con erbe dell’orto e cocktail.', 'Perfetto dopo cena: vieni verso le 21 e prenota.'],
    }, { price: level(3), address: 'Jl. Raya Sanggingan', menu: [
      ['Dessert tasting', undefined, 'дегустация десертов|dessert tasting menu|degustación de postres|Dessert-Degustation|dégustation de desserts|degustazione di dessert'],
      ['Dessert cocktails', undefined, 'коктейли в пару к десертам|cocktails paired with desserts|cócteles para los postres|Cocktails passend zu den Desserts|cocktails accordés aux desserts|cocktail abbinati ai dessert'],
    ] }),
    P('murnis-warung', 'food', -8.5037, 115.2551, FOOD, 4.4, 2900, ['food', 'views'], {
      ru: ['Murni’s Warung', 'Одно из первых кафе Убуда (с 1974 года) на ярусах над рекой у моста Чампухан: балийская кухня и вид в джунгли.', 'Попросите стол на нижнем ярусе над рекой; закажите наси кампур.'],
      en: ['Murni’s Warung', 'One of Ubud’s first cafés (since 1974), on terraces above the river by Campuhan bridge: Balinese food with a jungle view.', 'Ask for a lower-level table over the river; try nasi campur.'],
      es: ['Murni’s Warung', 'Uno de los primeros cafés de Ubud (desde 1974), en terrazas sobre el río junto al puente de Campuhan: cocina balinesa con vista a la selva.', 'Pide mesa abajo, sobre el río; prueba el nasi campur.'],
      de: ['Murni’s Warung', 'Eines der ersten Cafés in Ubud (seit 1974), auf Terrassen über dem Fluss an der Campuhan-Brücke: balinesisches Essen mit Dschungelblick.', 'Nach einem Tisch unten am Fluss fragen; Nasi Campur probieren.'],
      fr: ['Murni’s Warung', 'L’un des premiers cafés d’Ubud (depuis 1974), en terrasses au-dessus de la rivière près du pont de Campuhan : cuisine balinaise vue jungle.', 'Demandez une table en bas, au-dessus de l’eau ; goûtez le nasi campur.'],
      it: ['Murni’s Warung', 'Uno dei primi caffè di Ubud (dal 1974), su terrazze sopra il fiume al ponte di Campuhan: cucina balinese con vista giungla.', 'Chiedi un tavolo in basso sul fiume; prova il nasi campur.'],
    }, { price: level(2), address: 'Jl. Raya Campuhan', menu: [
      ['Nasi Campur', undefined, 'рис с ассорти балийских закусок|rice with a mix of Balinese sides|arroz con surtido balinés|Reis mit balinesischen Beilagen|riz et assortiment balinais|riso con assaggi balinesi'],
      ['Sate Lilit', undefined, 'балийский сатай из рубленой рыбы на лемонграссе|Balinese minced-fish satay on lemongrass|satay balinés de pescado en citronela|balinesisches Fisch-Satay am Zitronengras|satay balinais de poisson sur citronnelle|satay balinese di pesce sulla citronella'],
    ] }),
    P('sari-organik', 'food', -8.497, 115.259, RICE, 4.5, 4100, ['food', 'nature'], {
      ru: ['Sari Organik', 'Кафе посреди рисовых полей, куда ведёт пешая тропа Субак Джуву: блюда из урожая собственного органического огорода.', 'Дорога пешком от Джалан Раи Убуд ~20 минут по межам — приятная прогулка сама по себе.'],
      en: ['Sari Organik', 'A café in the middle of rice fields reached by the Subak Juwuk walking path, cooking from its own organic garden.', 'The walk from Jalan Raya Ubud is about 20 minutes along the dykes — a lovely stroll in itself.'],
      es: ['Sari Organik', 'Un café en medio de arrozales al que se llega por el sendero de Subak Juwuk, con cocina de su huerto ecológico.', 'El paseo desde Jalan Raya Ubud dura unos 20 minutos entre arrozales: un placer en sí.'],
      de: ['Sari Organik', 'Ein Café mitten in Reisfeldern, erreichbar über den Fußweg Subak Juwuk, mit Gerichten aus dem eigenen Biogarten.', 'Der Weg ab Jalan Raya Ubud dauert ca. 20 Minuten über die Dämme – schon ein Spaziergang für sich.'],
      fr: ['Sari Organik', 'Un café au milieu des rizières, accessible par le sentier de Subak Juwuk, qui cuisine son potager bio.', 'Depuis Jalan Raya Ubud, environ 20 minutes à pied sur les diguettes : une jolie balade en soi.'],
      it: ['Sari Organik', 'Un caffè in mezzo alle risaie raggiungibile dal sentiero di Subak Juwuk, con piatti dell’orto biologico.', 'Da Jalan Raya Ubud sono circa 20 minuti a piedi sugli argini: una bella passeggiata.'],
    }, { spot: 'hidden', price: level(1), address: 'Subak Juwuk Manis', menu: [
      ['Nasi Goreng Organik', undefined, 'жареный рис с овощами с огорода|fried rice with garden vegetables|arroz frito con verduras del huerto|Bratreis mit Gartengemüse|riz frit aux légumes du potager|riso fritto con verdure dell’orto'],
      ['Fresh juice', undefined, 'свежевыжатый сок|fresh-pressed juice|zumo natural|frisch gepresster Saft|jus pressé|succo spremuto'],
    ] }),
    P('clear-cafe', 'food', -8.5085, 115.264, FOOD2, 4.4, 5200, ['food', 'nomads'], {
      ru: ['Clear Café', 'Просторное кафе в стиле «дерево и бамбук», где снимают обувь у входа: смузи, салаты, азиатские и западные блюда, много веганских.', 'Хорошее место для обеда в жару; на втором этаже есть низкие столики с подушками.'],
      en: ['Clear Café', 'A spacious wood-and-bamboo café where you leave your shoes at the door: smoothies, salads, Asian and Western dishes, many vegan.', 'A good lunch spot in the heat; upstairs has low cushion tables.'],
      es: ['Clear Café', 'Un amplio café de madera y bambú donde se dejan los zapatos en la entrada: batidos, ensaladas, platos asiáticos y occidentales, muchos veganos.', 'Buen sitio para comer con calor; arriba hay mesas bajas con cojines.'],
      de: ['Clear Café', 'Ein großzügiges Holz-und-Bambus-Café, Schuhe bleiben am Eingang: Smoothies, Salate, asiatische und westliche Gerichte, viele vegan.', 'Gut fürs Mittagessen in der Hitze; oben gibt es niedrige Kissentische.'],
      fr: ['Clear Café', 'Un vaste café en bois et bambou où l’on laisse ses chaussures à l’entrée : smoothies, salades, plats asiatiques et occidentaux, beaucoup de vegan.', 'Idéal pour déjeuner à la chaleur ; à l’étage, tables basses à coussins.'],
      it: ['Clear Café', 'Un ampio caffè in legno e bambù dove si lasciano le scarpe all’ingresso: frullati, insalate, piatti asiatici e occidentali, molti vegani.', 'Ottimo per pranzo col caldo; al piano di sopra tavolini bassi con cuscini.'],
    }, { price: level(2), address: 'Jl. Hanoman 8', menu: [
      ['Smoothie bowl', undefined, 'смузи-боул с фруктами|fruit smoothie bowl|bol de batido con fruta|Smoothie-Bowl mit Obst|smoothie bowl aux fruits|smoothie bowl alla frutta'],
      ['Gado-Gado', undefined, 'овощи с арахисовым соусом|vegetables with peanut sauce|verduras con salsa de cacahuete|Gemüse mit Erdnusssauce|légumes sauce cacahuète|verdure con salsa di arachidi'],
    ] }),
    P('sayuri-healing-food', 'food', -8.513, 115.2665, FOOD2, 4.6, 3100, ['food', 'spa'], {
      ru: ['Sayuri Healing Food', 'Растительное кафе с сыроедческими и веганскими блюдами и десертами; при кафе проходят кулинарные классы.', 'Попробуйте сыроедческий торт и тёмпе-бургер.'],
      en: ['Sayuri Healing Food', 'A plant-based café with raw and vegan dishes and desserts; it also runs cooking classes.', 'Try a raw cake and the tempeh burger.'],
      es: ['Sayuri Healing Food', 'Un café vegetal con platos y postres crudiveganos; también da clases de cocina.', 'Prueba una tarta cruda y la hamburguesa de tempeh.'],
      de: ['Sayuri Healing Food', 'Ein pflanzliches Café mit Rohkost-, veganen Gerichten und Desserts; es gibt auch Kochkurse.', 'Einen Raw Cake und den Tempeh-Burger probieren.'],
      fr: ['Sayuri Healing Food', 'Un café végétal aux plats et desserts crus et vegan ; il propose aussi des cours de cuisine.', 'Goûtez un gâteau cru et le burger au tempeh.'],
      it: ['Sayuri Healing Food', 'Un caffè vegetale con piatti e dolci crudisti e vegani; organizza anche corsi di cucina.', 'Prova una torta cruda e il burger di tempeh.'],
    }, { price: level(2), address: 'Jl. Sukma Kesuma', menu: [
      ['Tempeh burger', undefined, 'бургер с темпе|tempeh burger|hamburguesa de tempeh|Tempeh-Burger|burger au tempeh|burger di tempeh'],
      ['Raw cake', undefined, 'сыроедческий торт|raw vegan cake|tarta crudivegana|roher veganer Kuchen|gâteau cru vegan|torta crudista vegana'],
    ] }),
    P('ibu-mangku', 'food', -8.4868, 115.2453, FOOD, 4.5, 6400, ['food', 'streetfood'], {
      ru: ['Nasi Ayam Kedewatan Ibu Mangku', 'Легендарное место в деревне Кедеватан с одним блюдом — балийским наси айям: рис с курицей несколькими способами, сатаем и острым самбалом.', 'Работает с утра; самбал очень острый — попросите отдельно.'],
      en: ['Nasi Ayam Kedewatan Ibu Mangku', 'A legendary one-dish spot in Kedewatan village serving Balinese nasi ayam: rice with chicken cooked several ways, satay and fiery sambal.', 'Open from the morning; the sambal is very hot — ask for it on the side.'],
      es: ['Nasi Ayam Kedewatan Ibu Mangku', 'Un local legendario de un solo plato en el pueblo de Kedewatan: nasi ayam balinés, arroz con pollo de varias formas, satay y sambal picante.', 'Abre por la mañana; el sambal pica mucho, pídelo aparte.'],
      de: ['Nasi Ayam Kedewatan Ibu Mangku', 'Ein legendärer Ein-Gericht-Laden im Dorf Kedewatan: balinesisches Nasi Ayam, Reis mit Huhn auf mehrere Arten, Satay und scharfem Sambal.', 'Ab morgens geöffnet; das Sambal ist sehr scharf – separat bestellen.'],
      fr: ['Nasi Ayam Kedewatan Ibu Mangku', 'Une adresse légendaire à plat unique au village de Kedewatan : nasi ayam balinais, riz et poulet de plusieurs façons, satay et sambal relevé.', 'Ouvert dès le matin ; le sambal est très fort, demandez-le à part.'],
      it: ['Nasi Ayam Kedewatan Ibu Mangku', 'Un locale leggendario a piatto unico nel villaggio di Kedewatan: nasi ayam balinese, riso con pollo in più modi, satay e sambal piccante.', 'Apre dal mattino; il sambal è molto piccante, chiedilo a parte.'],
    }, { price: level(1), address: 'Jl. Raya Kedewatan', menu: [
      ['Es Teh', undefined, 'холодный сладкий чай|sweet iced tea|té helado dulce|süßer Eistee|thé glacé sucré|tè freddo dolce'],
      ['Nasi Ayam Campur', 35000, 'рис с курицей, сатаем и самбалом|rice with chicken, satay and sambal|arroz con pollo, satay y sambal|Reis mit Huhn, Satay und Sambal|riz, poulet, satay et sambal|riso con pollo, satay e sambal'],
    ] }),
    P('bridges', 'food', -8.5039, 115.2549, DINE, 4.5, 2400, ['food', 'romance', 'views'], {
      ru: ['Bridges Bali', 'Ресторан на нескольких террасах у моста Чампухан с видом на реку и джунгли: европейская кухня с балийскими акцентами и винная карта.', 'Самые красивые столики — у перил над ущельем; на закате бывает «счастливый час».'],
      en: ['Bridges Bali', 'A multi-level restaurant by Campuhan bridge overlooking the river and jungle: European cooking with Balinese touches and a wine list.', 'The best tables are along the rail above the gorge; there’s a sunset happy hour.'],
      es: ['Bridges Bali', 'Un restaurante en varios niveles junto al puente de Campuhan con vista al río y la selva: cocina europea con toques balineses y carta de vinos.', 'Las mejores mesas, junto a la barandilla sobre la garganta; hay happy hour al atardecer.'],
      de: ['Bridges Bali', 'Ein Restaurant auf mehreren Ebenen an der Campuhan-Brücke mit Blick auf Fluss und Dschungel: europäische Küche mit balinesischen Akzenten und Weinkarte.', 'Die besten Tische stehen am Geländer über der Schlucht; zum Sonnenuntergang gibt es Happy Hour.'],
      fr: ['Bridges Bali', 'Un restaurant sur plusieurs niveaux près du pont de Campuhan, vue rivière et jungle : cuisine européenne aux accents balinais et carte des vins.', 'Les meilleures tables longent la rambarde au-dessus de la gorge ; happy hour au coucher du soleil.'],
      it: ['Bridges Bali', 'Un ristorante su più livelli al ponte di Campuhan con vista su fiume e giungla: cucina europea con tocchi balinesi e carta dei vini.', 'I tavoli migliori sono lungo la ringhiera sulla gola; al tramonto c’è l’happy hour.'],
    }, { price: level(3), address: 'Jl. Raya Campuhan', menu: [
      ['Crispy Duck', undefined, 'хрустящая утка|crispy duck|pato crujiente|knusprige Ente|canard croustillant|anatra croccante'],
      ['Sunset cocktails', undefined, 'коктейли на закате|sunset cocktails|cócteles al atardecer|Sonnenuntergangs-Cocktails|cocktails au coucher du soleil|cocktail al tramonto'],
    ] }),
    P('seniman-coffee', 'food', -8.5045, 115.262, CITY, 4.6, 3800, ['food', 'nomads'], {
      ru: ['Seniman Coffee Studio', 'Обжарщики и кофейня в центре Убуда: зерно с балийских и индонезийских ферм, альтернативные способы заваривания, мебель от местных мастеров.', 'Попросите пуровер с зерном из Кинтамани — это кофе с соседних склонов Батура.'],
      en: ['Seniman Coffee Studio', 'A roastery and café in central Ubud: beans from Balinese and Indonesian farms, alternative brews and furniture by local makers.', 'Ask for a pour-over of Kintamani beans — coffee from the slopes near Batur.'],
      es: ['Seniman Coffee Studio', 'Tostador y café en el centro de Ubud: grano de fincas balinesas e indonesias, métodos alternativos y muebles de artesanos locales.', 'Pide un pour-over de grano de Kintamani, café de las laderas del Batur.'],
      de: ['Seniman Coffee Studio', 'Rösterei und Café im Zentrum von Ubud: Bohnen von balinesischen und indonesischen Farmen, alternative Brühmethoden und Möbel lokaler Handwerker.', 'Einen Pour-over mit Kintamani-Bohnen bestellen – Kaffee von den Hängen am Batur.'],
      fr: ['Seniman Coffee Studio', 'Torréfacteur et café au centre d’Ubud : grains de fermes balinaises et indonésiennes, méthodes douces et mobilier d’artisans locaux.', 'Demandez un pour-over de Kintamani, café des pentes voisines du Batur.'],
      it: ['Seniman Coffee Studio', 'Torrefazione e caffè nel centro di Ubud: chicchi da fattorie balinesi e indonesiane, estrazioni alternative e arredi di artigiani locali.', 'Chiedi un pour-over di Kintamani, caffè dalle pendici del Batur.'],
    }, { price: level(1), address: 'Jl. Sriwedari 5', menu: [
      ['Kintamani pour-over', undefined, 'пуровер из балийского зерна|pour-over of Balinese beans|pour-over de grano balinés|Pour-over aus balinesischen Bohnen|pour-over de grains balinais|pour-over di chicchi balinesi'],
      ['Es Kopi Susu', undefined, 'холодный кофе с молоком и пальмовым сахаром|iced coffee with milk and palm sugar|café frío con leche y azúcar de palma|Eiskaffee mit Milch und Palmzucker|café glacé au lait et sucre de palme|caffè freddo con latte e zucchero di palma'],
    ] }),
  ],
  routes: [
    D(['pura-gunung-lebah', '=ubud-campuhan-ridge', 'neka-museum', '=ubud-warung-ibu-oka', 'ubud-palace', '=ubud-taman-saraswati', '=ubud-monkey-forest', 'hujan-locale'],
      'Хребет Чампухан, дворец и лес обезьян|Campuhan Ridge, the palace and Monkey Forest|La cresta de Campuhan, el palacio y el bosque de monos|Campuhan-Grat, Palast und Affenwald|Crête de Campuhan, palais et forêt des singes|Crinale di Campuhan, palazzo e foresta delle scimmie'),
    D(['tukad-cepung', '=ubud-tirta-empul', '=ubud-gunung-kawi', '=ubud-tegalalang-swing', 'clear-cafe', 'arma-museum', 'mozaic'],
      'Водопад в каньоне, священные источники и террасы|Canyon waterfall, holy springs and rice terraces|Cascada en el cañón, manantiales sagrados y terrazas|Schluchtwasserfall, heilige Quellen und Reisterrassen|Cascade du canyon, sources sacrées et rizières|Cascata nel canyon, sorgenti sacre e terrazze'),
    D(['goa-gajah', 'pura-taman-ayun', 'jatiluwih', 'ibu-mangku', 'locavore-nxt', 'room4dessert'],
      'Пещера Гоа Гаджа, королевский храм и Джатилувих|Goa Gajah, a royal temple and Jatiluwih|Goa Gajah, un templo real y Jatiluwih|Goa Gajah, ein Königstempel und Jatiluwih|Goa Gajah, un temple royal et Jatiluwih|Goa Gajah, un tempio reale e Jatiluwih'),
  ],
};

export default pack;
