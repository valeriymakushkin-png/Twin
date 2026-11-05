import type { CityPack } from '../types';
import { free, level, makeDay, makePlace } from './_kit.ts';

const P = makePlace('singapore');
const D = makeDay('singapore');
const CITY = '17IW7yH4U2o';
const GARDEN = 's3i02B7qiVA';
const FOOD = 'hCzo6BRAjoA';
const STREET = 'nG8NDxZBSOc';
const TEMPLE = 'x3-LwgmXX64';

const pack: CityPack = {
  country: 'SG',
  city: 'singapore',
  places: [
    P('sri-mariamman-temple', 'attraction', 1.2826, 103.8453, TEMPLE, 4.6, 9600, ['temples', 'culture'], {
      ru: ['Храм Шри Мариамман', 'Старейший индуистский храм Сингапура (1827) посреди Чайнатауна: башня-гопурам с сотнями ярких фигур богов.', 'Разуйтесь у входа; плечи и колени должны быть закрыты.'],
      en: ['Sri Mariamman Temple', 'Singapore’s oldest Hindu temple (1827) in the middle of Chinatown, its gopuram tower crowded with brightly painted deities.', 'Shoes off at the door; cover shoulders and knees.'],
      es: ['Templo Sri Mariamman', 'El templo hindú más antiguo de Singapur (1827), en pleno Chinatown, con una torre gopuram repleta de deidades de colores.', 'Descálzate en la entrada; hombros y rodillas cubiertos.'],
      de: ['Sri-Mariamman-Tempel', 'Singapurs ältester Hindutempel (1827) mitten in Chinatown, sein Gopuram-Turm voller bunt bemalter Gottheiten.', 'Schuhe am Eingang ausziehen; Schultern und Knie bedecken.'],
      fr: ['Temple Sri Mariamman', 'Le plus ancien temple hindou de Singapour (1827), en plein Chinatown, avec un gopuram couvert de divinités colorées.', 'Retirez vos chaussures ; épaules et genoux couverts.'],
      it: ['Tempio Sri Mariamman', 'Il più antico tempio indù di Singapore (1827), nel cuore di Chinatown, con un gopuram affollato di divinità colorate.', 'Togli le scarpe all’ingresso; spalle e ginocchia coperte.'],
    }, { price: free, address: '244 South Bridge Rd' }),
    P('fort-canning-tree-tunnel', 'nature', 1.2939, 103.846, GARDEN, 4.5, 8700, ['photo', 'gardens', 'history'], {
      ru: ['Форт Каннинг и «Древесный тоннель»', 'Холм-парк с историей от малайских султанов до британских бункеров; винтовая лестница-тоннель снизу смотрит в зелёный купол деревьев.', 'Для кадра встаньте внизу тоннеля и снимайте вверх, лучше рано утром без очереди.'],
      en: ['Fort Canning and the Tree Tunnel', 'A hilltop park with history from Malay sultans to British bunkers; its spiral stair tunnel looks up into a green dome of trees.', 'Shoot upward from the bottom of the tunnel, early in the morning before the queue.'],
      es: ['Fort Canning y el Túnel del Árbol', 'Un parque en una colina con historia desde los sultanes malayos hasta los búnkeres británicos; su túnel de escalera mira a una cúpula verde.', 'Fotografía hacia arriba desde abajo, temprano antes de la cola.'],
      de: ['Fort Canning und der Baumtunnel', 'Ein Hügelpark mit Geschichte von malaiischen Sultanen bis zu britischen Bunkern; der Wendeltreppen-Tunnel blickt in eine grüne Baumkuppel.', 'Von unten nach oben fotografieren, früh morgens vor der Schlange.'],
      fr: ['Fort Canning et le tunnel végétal', 'Un parc sur une colline, des sultans malais aux bunkers britanniques ; son tunnel d’escalier en spirale s’ouvre sur une coupole d’arbres.', 'Photographiez vers le haut depuis le bas, tôt le matin avant la file.'],
      it: ['Fort Canning e il tunnel degli alberi', 'Un parco sulla collina dai sultani malesi ai bunker britannici; la scala a spirale del tunnel guarda in una cupola di alberi.', 'Scatta verso l’alto dal fondo, la mattina presto prima della coda.'],
    }, { spot: 'insta', price: free, hours: 'always' }),
    P('national-gallery', 'attraction', 1.2903, 103.8515, CITY, 4.7, 12800, ['museums', 'art', 'architecture'], {
      ru: ['Национальная галерея Сингапура', 'Крупнейшее собрание искусства Юго-Восточной Азии в бывших зданиях Верховного суда и мэрии; с крыши вид на залив Марина.', 'Заканчивайте визит в саду на крыше — вечером там зажигается город.'],
      en: ['National Gallery Singapore', 'The largest collection of Southeast Asian art, housed in the former Supreme Court and City Hall; its rooftop overlooks Marina Bay.', 'End your visit in the rooftop garden as the city lights up.'],
      es: ['National Gallery Singapore', 'La mayor colección de arte del Sudeste Asiático, en el antiguo Tribunal Supremo y el Ayuntamiento; la azotea mira a Marina Bay.', 'Termina en el jardín de la azotea cuando se ilumina la ciudad.'],
      de: ['National Gallery Singapore', 'Die größte Sammlung südostasiatischer Kunst im einstigen Obersten Gericht und Rathaus; vom Dach blickt man auf die Marina Bay.', 'Im Dachgarten enden, wenn die Stadt zu leuchten beginnt.'],
      fr: ['National Gallery Singapore', 'La plus grande collection d’art d’Asie du Sud-Est, dans l’ancienne Cour suprême et l’hôtel de ville ; le toit domine Marina Bay.', 'Finissez au jardin sur le toit quand la ville s’illumine.'],
      it: ['National Gallery Singapore', 'La più grande collezione d’arte del Sud-est asiatico, nell’ex Corte suprema e nel municipio; dal tetto si vede Marina Bay.', 'Chiudi la visita nel giardino sul tetto quando la città si accende.'],
    }, { hours: '10:00–19:00', address: '1 St Andrew’s Rd' }),
    P('artscience-museum', 'attraction', 1.2863, 103.8593, CITY, 4.5, 11400, ['museums', 'art', 'architecture'], {
      ru: ['Музей ArtScience', 'Здание-лотос у залива Марина: иммерсивная выставка Future World от teamLab и меняющиеся экспозиции на стыке искусства и науки.', 'Билеты на teamLab дешевле онлайн и с выбором времени.'],
      en: ['ArtScience Museum', 'A lotus-shaped building on Marina Bay with teamLab’s immersive Future World and rotating shows at the meeting point of art and science.', 'teamLab tickets are cheaper online with a timed slot.'],
      es: ['ArtScience Museum', 'Un edificio en forma de loto en Marina Bay con el inmersivo Future World de teamLab y exposiciones entre arte y ciencia.', 'Las entradas de teamLab son más baratas online con horario.'],
      de: ['ArtScience Museum', 'Ein lotusförmiges Gebäude an der Marina Bay mit teamLabs immersivem Future World und wechselnden Schauen zwischen Kunst und Wissenschaft.', 'teamLab-Tickets sind online mit Zeitfenster günstiger.'],
      fr: ['ArtScience Museum', 'Un bâtiment en forme de lotus sur Marina Bay, avec Future World de teamLab et des expositions entre art et science.', 'Les billets teamLab sont moins chers en ligne avec créneau.'],
      it: ['ArtScience Museum', 'Un edificio a forma di loto su Marina Bay con il Future World immersivo di teamLab e mostre tra arte e scienza.', 'I biglietti teamLab costano meno online con fascia oraria.'],
    }, { hours: '10:00–19:00' }),
    P('little-india', 'attraction', 1.3066, 103.8518, STREET, 4.5, 15300, ['culture', 'market', 'food'], {
      ru: ['Литл-Индия', 'Квартал с гирляндами жасмина, лавками специй и тканей, храмом Шри Вирамакалиамман и Tekka Centre, где готовят бирьяни и доса.', 'Приходите вечером, когда открывается круглосуточный Mustafa Centre и улицы оживают.'],
      en: ['Little India', 'A district of jasmine garlands, spice and fabric shops, the Sri Veeramakaliamman temple and Tekka Centre, cooking biryani and dosa.', 'Come in the evening, when the 24-hour Mustafa Centre buzzes and the streets come alive.'],
      es: ['Little India', 'Un barrio de guirnaldas de jazmín, tiendas de especias y telas, el templo Sri Veeramakaliamman y el Tekka Centre con biryani y dosa.', 'Ven por la tarde-noche, cuando el Mustafa Centre 24 h y las calles se animan.'],
      de: ['Little India', 'Ein Viertel mit Jasmingirlanden, Gewürz- und Stoffläden, dem Sri-Veeramakaliamman-Tempel und dem Tekka Centre mit Biryani und Dosa.', 'Abends kommen, wenn das 24-Stunden-Mustafa-Centre und die Straßen aufleben.'],
      fr: ['Little India', 'Un quartier de guirlandes de jasmin, d’épices et de tissus, avec le temple Sri Veeramakaliamman et le Tekka Centre, biryani et dosa.', 'Venez le soir, quand le Mustafa Centre ouvert 24 h et les rues s’animent.'],
      it: ['Little India', 'Un quartiere di ghirlande di gelsomino, spezie e stoffe, con il tempio Sri Veeramakaliamman e il Tekka Centre tra biryani e dosa.', 'Vieni la sera, quando il Mustafa Centre aperto 24 h e le strade si animano.'],
    }, { price: free }),
    P('henderson-waves', 'nature', 1.2756, 103.8155, GARDEN, 4.6, 7900, ['hiking', 'views', 'photo'], {
      ru: ['Мост Henderson Waves', 'Самый высокий пешеходный мост города: деревянная «волна» на 36 м над лесом на тропе Southern Ridges.', 'После 19:00 мост подсвечивают — идеально к концу прогулки от Mount Faber.'],
      en: ['Henderson Waves', 'The city’s highest footbridge: a wooden wave 36 m above the forest on the Southern Ridges trail.', 'It is lit after 7 pm — finish a walk from Mount Faber here.'],
      es: ['Henderson Waves', 'El puente peatonal más alto de la ciudad: una ola de madera a 36 m sobre el bosque en la ruta Southern Ridges.', 'Se ilumina a partir de las 19:00: termina aquí el paseo desde Mount Faber.'],
      de: ['Henderson Waves', 'Die höchste Fußgängerbrücke der Stadt: eine Holzwelle 36 m über dem Wald auf dem Southern-Ridges-Weg.', 'Ab 19 Uhr beleuchtet – ideal als Ende einer Wanderung vom Mount Faber.'],
      fr: ['Henderson Waves', 'La plus haute passerelle de la ville : une vague de bois à 36 m au-dessus de la forêt, sur le sentier Southern Ridges.', 'Illuminée après 19 h : finissez ici une balade depuis Mount Faber.'],
      it: ['Henderson Waves', 'La passerella più alta della città: un’onda di legno a 36 m sopra la foresta sul sentiero Southern Ridges.', 'Si illumina dopo le 19: chiudi qui la camminata dal Mount Faber.'],
    }, { spot: 'insta', price: free, hours: 'always' }),
    P('singapore-zoo', 'nature', 1.4043, 103.793, GARDEN, 4.6, 54200, ['wildlife', 'nature'], {
      ru: ['Сингапурский зоопарк', 'Один из лучших «открытых» зоопарков мира: орангутаны гуляют над головами, а вольеры спрятаны в тропическом лесу у водохранилища.', 'Приезжайте к открытию и останьтесь на соседнее «Ночное сафари».'],
      en: ['Singapore Zoo', 'One of the world’s great open zoos: orangutans swing overhead and enclosures hide in rainforest by a reservoir.', 'Arrive at opening and stay on for the neighbouring Night Safari.'],
      es: ['Zoo de Singapur', 'Uno de los mejores zoos abiertos del mundo: orangutanes sobre tu cabeza y recintos escondidos en la selva junto a un embalse.', 'Llega a la apertura y quédate al Night Safari vecino.'],
      de: ['Singapore Zoo', 'Einer der besten offenen Zoos der Welt: Orang-Utans schwingen über den Köpfen, Gehege liegen im Regenwald an einem Stausee.', 'Zur Öffnung kommen und für die benachbarte Night Safari bleiben.'],
      fr: ['Zoo de Singapour', 'L’un des plus beaux zoos ouverts du monde : orangs-outans au-dessus des têtes et enclos cachés dans la forêt près d’un réservoir.', 'Arrivez à l’ouverture et restez pour le Night Safari voisin.'],
      it: ['Zoo di Singapore', 'Uno dei migliori zoo aperti del mondo: oranghi sopra la testa e recinti nascosti nella foresta vicino a un bacino.', 'Arriva all’apertura e resta per il vicino Night Safari.'],
    }, { hours: '08:30–18:00' }),
    P('clarke-quay', 'attraction', 1.2906, 103.8465, CITY, 4.4, 21700, ['nightlife', 'food', 'cruise'], {
      ru: ['Кларк-Ки', 'Отреставрированные склады на реке Сингапур: бары, рестораны и отправная точка речных прогулок на бамбуковых бамбот-лодках.', 'Возьмите вечерний речной круиз — он проходит мимо Мерлайона к заливу.'],
      en: ['Clarke Quay', 'Restored riverside godowns on the Singapore River: bars, restaurants and the starting point for bumboat river trips.', 'Take an evening river cruise past the Merlion into the bay.'],
      es: ['Clarke Quay', 'Almacenes restaurados junto al río Singapur: bares, restaurantes y salida de los paseos en bumboat.', 'Haz un crucero al atardecer pasando el Merlion hasta la bahía.'],
      de: ['Clarke Quay', 'Restaurierte Lagerhäuser am Singapore River: Bars, Restaurants und Start der Bumboat-Flussfahrten.', 'Eine abendliche Flussfahrt vorbei am Merlion in die Bucht machen.'],
      fr: ['Clarke Quay', 'D’anciens entrepôts restaurés au bord de la rivière Singapour : bars, restaurants et départ des balades en bumboat.', 'Faites une croisière du soir jusqu’à la baie en passant le Merlion.'],
      it: ['Clarke Quay', 'Magazzini restaurati sul fiume Singapore: bar, ristoranti e partenza delle gite in bumboat.', 'Fai una crociera serale oltre il Merlion fino alla baia.'],
    }, { price: free }),
    P('chinatown-pagoda-street', 'attraction', 1.284, 103.8443, STREET, 4.4, 18900, ['culture', 'market', 'shopping'], {
      ru: ['Чайнатаун и Пагода-стрит', 'Улицы шопхаусов с фонарями, сувенирными лавками и Музеем наследия Чайнатауна в бывших тесных квартирах первых переселенцев.', 'Ближе к вечеру загляните на фуд-стрит Смит-стрит.'],
      en: ['Chinatown and Pagoda Street', 'Shophouse streets strung with lanterns, souvenir stalls and the Chinatown Heritage Centre in the cramped homes of early migrants.', 'Towards evening, head for the Smith Street food stalls.'],
      es: ['Chinatown y Pagoda Street', 'Calles de shophouses con farolillos, tiendas de recuerdos y el Chinatown Heritage Centre en las casas de los primeros inmigrantes.', 'Al atardecer ve a los puestos de comida de Smith Street.'],
      de: ['Chinatown und Pagoda Street', 'Shophouse-Gassen mit Laternen, Souvenirständen und dem Chinatown Heritage Centre in den engen Wohnungen früher Einwanderer.', 'Gegen Abend zu den Essständen in der Smith Street.'],
      fr: ['Chinatown et Pagoda Street', 'Des rues de shophouses à lanternes, des échoppes et le Chinatown Heritage Centre dans les logis exigus des premiers migrants.', 'En fin de journée, filez vers les stands de Smith Street.'],
      it: ['Chinatown e Pagoda Street', 'Vie di shophouse con lanterne, souvenir e il Chinatown Heritage Centre nelle case anguste dei primi migranti.', 'Verso sera vai alle bancarelle di Smith Street.'],
    }, { price: free }),
    P('raffles-hotel', 'attraction', 1.2949, 103.8545, CITY, 4.6, 9200, ['history', 'architecture'], {
      ru: ['Отель Raffles', 'Белоснежный колониальный отель 1887 года — легенда Сингапура и родина коктейля «Сингапурский слинг» в Long Bar.', 'Галереи и двор открыты для гостей; в Long Bar скорлупу арахиса принято бросать на пол.'],
      en: ['Raffles Hotel', 'A white colonial hotel from 1887, a Singapore legend and birthplace of the Singapore Sling at the Long Bar.', 'The arcades and courtyard are open to visitors; at the Long Bar peanut shells go on the floor.'],
      es: ['Raffles Hotel', 'Un hotel colonial blanco de 1887, leyenda de Singapur y cuna del Singapore Sling en el Long Bar.', 'Las galerías y el patio son visitables; en el Long Bar las cáscaras de cacahuete van al suelo.'],
      de: ['Raffles Hotel', 'Ein weißes Kolonialhotel von 1887, Singapurs Legende und Geburtsort des Singapore Sling in der Long Bar.', 'Arkaden und Innenhof sind zugänglich; in der Long Bar wirft man Erdnussschalen auf den Boden.'],
      fr: ['Raffles Hotel', 'Un hôtel colonial blanc de 1887, légende de Singapour et berceau du Singapore Sling au Long Bar.', 'Galeries et cour sont accessibles ; au Long Bar, les coques d’arachide vont par terre.'],
      it: ['Raffles Hotel', 'Un hotel coloniale bianco del 1887, leggenda di Singapore e patria del Singapore Sling al Long Bar.', 'Gallerie e cortile sono visitabili; al Long Bar i gusci di arachidi finiscono a terra.'],
    }, { address: '1 Beach Rd' }),

    P('odette', 'food', 1.2904, 103.8516, FOOD, 4.8, 1800, ['food', 'luxury'], {
      ru: ['Odette', 'Современная французская кухня шефа Жюльена Ройе в Национальной галерее — три звезды Мишлен в гиде 2026.', 'Бронь открывается заранее и разбирается быстро; обеденный сет немного доступнее.'],
      en: ['Odette', 'Chef Julien Royer’s modern French cooking at the National Gallery — three MICHELIN stars in the 2026 guide.', 'Bookings open well ahead and go fast; lunch is a little more accessible.'],
      es: ['Odette', 'La cocina francesa moderna del chef Julien Royer en la National Gallery: tres estrellas MICHELIN en la guía 2026.', 'Las reservas se abren con antelación y vuelan; el almuerzo es algo más asequible.'],
      de: ['Odette', 'Julien Royers moderne französische Küche in der National Gallery – drei MICHELIN-Sterne im Guide 2026.', 'Reservierungen öffnen früh und sind schnell weg; mittags etwas günstiger.'],
      fr: ['Odette', 'La cuisine française moderne du chef Julien Royer à la National Gallery : trois étoiles MICHELIN dans le guide 2026.', 'Les réservations ouvrent tôt et partent vite ; le déjeuner est un peu plus accessible.'],
      it: ['Odette', 'La cucina francese moderna dello chef Julien Royer alla National Gallery: tre stelle MICHELIN nella guida 2026.', 'Le prenotazioni aprono presto e finiscono subito; il pranzo è un po’ più accessibile.'],
    }, { price: level(3), michelin: { award: 'star3', year: 2026 }, address: '1 St Andrew’s Rd, #01-04' }),
    P('les-amis', 'food', 1.3061, 103.8318, FOOD, 4.7, 1500, ['food', 'luxury', 'wine'], {
      ru: ['Les Amis', 'Классический французский ресторан на Орчард-роуд с одной из лучших винных карт Азии; три звезды Мишлен 2026.', 'Попросите сомелье подобрать бокалы к сету — винная карта огромная.'],
      en: ['Les Amis', 'A classic French restaurant on Orchard Road with one of Asia’s great wine lists; three MICHELIN stars in 2026.', 'Let the sommelier pair glasses with the menu — the list is huge.'],
      es: ['Les Amis', 'Un clásico francés en Orchard Road con una de las mejores cartas de vinos de Asia; tres estrellas MICHELIN en 2026.', 'Deja que el sumiller marida copas con el menú: la carta es enorme.'],
      de: ['Les Amis', 'Ein klassisch französisches Restaurant an der Orchard Road mit einer der besten Weinkarten Asiens; drei MICHELIN-Sterne 2026.', 'Den Sommelier Weine zum Menü wählen lassen – die Karte ist riesig.'],
      fr: ['Les Amis', 'Un classique français sur Orchard Road avec l’une des plus belles cartes des vins d’Asie ; trois étoiles MICHELIN en 2026.', 'Laissez le sommelier accorder les verres au menu : la carte est immense.'],
      it: ['Les Amis', 'Un classico francese su Orchard Road con una delle migliori carte dei vini d’Asia; tre stelle MICHELIN nel 2026.', 'Lascia che il sommelier abbini i calici al menu: la carta è enorme.'],
    }, { price: level(3), michelin: { award: 'star3', year: 2026 }, address: '1 Scotts Rd, Shaw Centre #01-16' }),
    P('zen', 'food', 1.2797, 103.841, FOOD, 4.7, 900, ['food', 'luxury'], {
      ru: ['Zén', 'Скандинавский ресторан от команды Frantzén в шопхаусе на Букит-Пасох: ужин проходит на трёх этажах; три звезды Мишлен 2026.', 'Это вечер на 3–4 часа; бронируйте за месяцы.'],
      en: ['Zén', 'The Frantzén team’s Nordic restaurant in a Bukit Pasoh shophouse, the meal moving across three floors; three MICHELIN stars in 2026.', 'Allow 3–4 hours and book months ahead.'],
      es: ['Zén', 'El restaurante nórdico del equipo Frantzén en una shophouse de Bukit Pasoh, con la cena repartida en tres plantas; tres estrellas MICHELIN en 2026.', 'Calcula 3–4 horas y reserva con meses.'],
      de: ['Zén', 'Das nordische Restaurant des Frantzén-Teams in einem Shophouse an der Bukit Pasoh, das Essen zieht über drei Etagen; drei MICHELIN-Sterne 2026.', '3–4 Stunden einplanen und Monate vorher buchen.'],
      fr: ['Zén', 'Le restaurant nordique de l’équipe Frantzén dans une shophouse de Bukit Pasoh, le repas se déroulant sur trois étages ; trois étoiles MICHELIN en 2026.', 'Comptez 3 à 4 heures et réservez des mois à l’avance.'],
      it: ['Zén', 'Il ristorante nordico del team Frantzén in una shophouse di Bukit Pasoh, con la cena su tre piani; tre stelle MICHELIN nel 2026.', 'Calcola 3–4 ore e prenota con mesi di anticipo.'],
    }, { price: level(3), michelin: { award: 'star3', year: 2026 }, address: '41 Bukit Pasoh Rd' }),
    P('hill-street-tai-hwa', 'food', 1.3052, 103.8628, FOOD, 4.4, 5600, ['food', 'streetfood'], {
      ru: ['Hill Street Tai Hwa Pork Noodle', 'Уличный прилавок со звездой Мишлен в каждом издании гида с 2016 года, включая 2026: лапша со свининой в уксусно-чили заправке.', 'Очередь бывает до часа — приходите к открытию утром; закрыто по понедельникам.'],
      en: ['Hill Street Tai Hwa Pork Noodle', 'A hawker stall that has held a MICHELIN star in every edition since 2016, 2026 included: minced pork noodles in vinegar-chilli dressing.', 'The queue can reach an hour — come at morning opening; closed Mondays.'],
      es: ['Hill Street Tai Hwa Pork Noodle', 'Un puesto callejero con estrella MICHELIN en todas las ediciones desde 2016, 2026 incluida: fideos con cerdo picado en aliño de vinagre y chile.', 'La cola llega a una hora: ven a la apertura de la mañana; cierra los lunes.'],
      de: ['Hill Street Tai Hwa Pork Noodle', 'Ein Hawker-Stand mit MICHELIN-Stern in jeder Ausgabe seit 2016, 2026 inklusive: Nudeln mit Hackfleisch in Essig-Chili-Dressing.', 'Die Schlange dauert bis zu einer Stunde – zur Öffnung morgens kommen; montags zu.'],
      fr: ['Hill Street Tai Hwa Pork Noodle', 'Un stand de hawker étoilé MICHELIN dans chaque édition depuis 2016, 2026 compris : nouilles au porc haché, sauce vinaigre-piment.', 'Jusqu’à une heure d’attente : venez à l’ouverture le matin ; fermé le lundi.'],
      it: ['Hill Street Tai Hwa Pork Noodle', 'Un banco hawker con stella MICHELIN in ogni edizione dal 2016, 2026 compresa: noodle al maiale macinato con condimento aceto e peperoncino.', 'La coda arriva a un’ora: vieni all’apertura del mattino; chiuso il lunedì.'],
    }, { price: level(1), michelin: { award: 'star1', year: 2026 }, address: '466 Crawford Lane, #01-12', menu: [
      ['Bak Chor Mee (dry)', 8, 'лапша с фаршем, печенью и уксусом|minced pork noodles with liver and vinegar|fideos con cerdo picado, hígado y vinagre|Nudeln mit Hackfleisch, Leber und Essig|nouilles au porc haché, foie et vinaigre|noodle con maiale macinato, fegato e aceto'],
      ['Bak Chor Mee (large)', 10, 'большая порция с пельменями|large bowl with dumplings|ración grande con empanadillas|große Portion mit Teigtaschen|grande portion avec raviolis|porzione grande con ravioli'],
    ] }),
    P('candlenut', 'food', 1.3046, 103.81, FOOD, 4.5, 3400, ['food'], {
      ru: ['Candlenut', 'Перанаканская (нонья) кухня шефа Малкольма Ли в Дэмпси — первый перанаканский ресторан со звездой Мишлен (звезда в гиде 2025).', 'Возьмите «ah-ma-kase» — сет из любимых блюд шефа; обязательно буах-келуак.'],
      en: ['Candlenut', 'Chef Malcolm Lee’s Peranakan (Nonya) cooking at Dempsey — the first Peranakan restaurant to win a MICHELIN star (starred in the 2025 guide).', 'Order the “ah-ma-kase” chef’s selection, and don’t skip the buah keluak.'],
      es: ['Candlenut', 'La cocina peranakan (nonya) del chef Malcolm Lee en Dempsey, el primer peranakan con estrella MICHELIN (estrella en la guía 2025).', 'Pide el “ah-ma-kase” del chef y no te saltes el buah keluak.'],
      de: ['Candlenut', 'Malcolm Lees Peranakan-(Nonya-)Küche in Dempsey – das erste Peranakan-Restaurant mit MICHELIN-Stern (Stern im Guide 2025).', 'Das „Ah-ma-kase“-Menü bestellen und Buah Keluak nicht auslassen.'],
      fr: ['Candlenut', 'La cuisine peranakan (nyonya) du chef Malcolm Lee à Dempsey, premier peranakan étoilé MICHELIN (étoile au guide 2025).', 'Prenez l’« ah-ma-kase » du chef et ne manquez pas le buah keluak.'],
      it: ['Candlenut', 'La cucina peranakan (nonya) dello chef Malcolm Lee a Dempsey, il primo peranakan stellato MICHELIN (stella nella guida 2025).', 'Ordina l’“ah-ma-kase” dello chef e non saltare il buah keluak.'],
    }, { price: level(3), michelin: { award: 'star1', year: 2025 }, address: '17A Dempsey Rd', menu: [
      ['Ayam Buah Keluak', undefined, 'курица с чёрным орехом келуак|chicken with black keluak nut|pollo con nuez keluak negra|Huhn mit schwarzer Keluak-Nuss|poulet à la noix noire keluak|pollo con noce nera keluak'],
      ['Kueh Pie Tee', undefined, 'хрустящие «шляпки» с овощами|crisp pastry cups with vegetables|cestitas crujientes de verduras|knusprige Teigtörtchen mit Gemüse|petites coupes croustillantes aux légumes|cestini croccanti alle verdure'],
    ] }),
    P('burnt-ends', 'food', 1.3049, 103.8108, FOOD, 4.6, 2600, ['food', 'nightlife'], {
      ru: ['Burnt Ends', 'Австралийский барбекю-ресторан Дэйва Пинта: дровяные печи и гриль на виду у барной стойки; звезда Мишлен в гиде 2025.', 'Сядьте у стойки и закажите бургер «Sanger» — его готовят не каждый день.'],
      en: ['Burnt Ends', 'Dave Pynt’s Australian barbecue restaurant: wood ovens and grills in full view of the counter; one MICHELIN star in the 2025 guide.', 'Sit at the counter and ask for the “Sanger” burger.'],
      es: ['Burnt Ends', 'La barbacoa australiana de Dave Pynt: hornos de leña y parrillas a la vista de la barra; una estrella MICHELIN en la guía 2025.', 'Siéntate en la barra y pide la hamburguesa “Sanger”.'],
      de: ['Burnt Ends', 'Dave Pynts australisches Barbecue: Holzöfen und Grills direkt vor dem Tresen; ein MICHELIN-Stern im Guide 2025.', 'Am Tresen sitzen und nach dem „Sanger“-Burger fragen.'],
      fr: ['Burnt Ends', 'Le barbecue australien de Dave Pynt : fours à bois et grils face au comptoir ; une étoile MICHELIN au guide 2025.', 'Installez-vous au comptoir et demandez le burger « Sanger ».'],
      it: ['Burnt Ends', 'Il barbecue australiano di Dave Pynt: forni a legna e griglie davanti al bancone; una stella MICHELIN nella guida 2025.', 'Siediti al bancone e chiedi il burger “Sanger”.'],
    }, { price: level(3), michelin: { award: 'star1', year: 2025 }, address: '7 Dempsey Rd' }),
    P('song-fa-bak-kut-teh', 'food', 1.2878, 103.8467, FOOD, 4.4, 12800, ['food', 'streetfood'], {
      ru: ['Song Fa Bak Kut Teh', 'Бак-кут-те по-теочжоуски: свиные рёбрышки в прозрачном перечно-чесночном бульоне, который подливают бесплатно.', 'Добавьте ютяо (жареные палочки из теста) и макайте их в бульон.'],
      en: ['Song Fa Bak Kut Teh', 'Teochew-style bak kut teh: pork ribs in a clear peppery garlic broth that is topped up for free.', 'Add youtiao (fried dough sticks) to dunk in the broth.'],
      es: ['Song Fa Bak Kut Teh', 'Bak kut teh al estilo teochew: costillas de cerdo en un caldo claro de pimienta y ajo que rellenan gratis.', 'Añade youtiao (churros chinos) para mojar en el caldo.'],
      de: ['Song Fa Bak Kut Teh', 'Bak Kut Teh nach Teochew-Art: Schweinerippchen in klarer Pfeffer-Knoblauch-Brühe, die kostenlos nachgefüllt wird.', 'Youtiao (frittierte Teigstangen) zum Eintunken dazunehmen.'],
      fr: ['Song Fa Bak Kut Teh', 'Bak kut teh façon teochew : travers de porc dans un bouillon clair poivre-ail resservi gratuitement.', 'Ajoutez des youtiao (bâtonnets frits) à tremper dans le bouillon.'],
      it: ['Song Fa Bak Kut Teh', 'Bak kut teh in stile teochew: costine di maiale in un brodo chiaro al pepe e aglio, rabboccato gratis.', 'Aggiungi youtiao (bastoncini fritti) da intingere nel brodo.'],
    }, { price: level(1), address: '11 New Bridge Rd, #01-01', menu: [
      ['Pork Ribs Soup', 11, 'рёбрышки в перечном бульоне|pork ribs in peppery broth|costillas en caldo de pimienta|Rippchen in Pfefferbrühe|travers en bouillon poivré|costine in brodo al pepe'],
      ['Braised Pig Trotter', 9, 'тушёная свиная ножка|braised pork trotter|manita de cerdo guisada|geschmorter Schweinsfuß|pied de porc braisé|zampetto di maiale brasato'],
      ['You Tiao', 2, 'жареные палочки из теста|fried dough sticks|churros chinos fritos|frittierte Teigstangen|bâtonnets de pâte frits|bastoncini di pasta fritti'],
    ] }),
    P('tian-tian-chicken-rice', 'food', 1.2803, 103.8448, FOOD, 4.3, 9800, ['food', 'streetfood'], {
      ru: ['Tian Tian Hainanese Chicken Rice', 'Самый знаменитый прилавок курицы с рисом в фуд-корте Maxwell: нежная отварная курица и рис на курином бульоне.', 'Обязательно с тремя соусами — чили, имбирём и тёмным соевым.'],
      en: ['Tian Tian Hainanese Chicken Rice', 'The most famous chicken rice stall at Maxwell Food Centre: silky poached chicken and rice cooked in chicken stock.', 'Have it with all three sauces — chilli, ginger and dark soy.'],
      es: ['Tian Tian Hainanese Chicken Rice', 'El puesto de arroz con pollo más famoso del Maxwell Food Centre: pollo escalfado sedoso y arroz cocido en caldo.', 'Tómalo con las tres salsas: chile, jengibre y soja oscura.'],
      de: ['Tian Tian Hainanese Chicken Rice', 'Der berühmteste Chicken-Rice-Stand im Maxwell Food Centre: zart pochiertes Huhn und in Hühnerbrühe gegarter Reis.', 'Mit allen drei Saucen – Chili, Ingwer und dunkle Soja.'],
      fr: ['Tian Tian Hainanese Chicken Rice', 'Le stand de riz au poulet le plus célèbre du Maxwell Food Centre : poulet poché soyeux et riz cuit au bouillon.', 'Avec les trois sauces : piment, gingembre et soja foncé.'],
      it: ['Tian Tian Hainanese Chicken Rice', 'Il banco di riso al pollo più famoso del Maxwell Food Centre: pollo bollito morbidissimo e riso cotto nel brodo.', 'Con tutte e tre le salse: peperoncino, zenzero e soia scura.'],
    }, { price: level(1), address: 'Maxwell Food Centre, #01-10', menu: [
      ['Chicken Rice', 6, 'курица с рисом на бульоне|poached chicken with stock-cooked rice|pollo escalfado con arroz al caldo|pochiertes Huhn mit Brühreis|poulet poché, riz au bouillon|pollo bollito con riso al brodo'],
      ['Chicken (half)', 18, 'половина курицы на компанию|half a chicken to share|medio pollo para compartir|halbes Huhn zum Teilen|demi-poulet à partager|mezzo pollo da dividere'],
    ] }),
    P('zam-zam', 'food', 1.3022, 103.859, FOOD, 4.2, 7400, ['food', 'streetfood'], {
      ru: ['Zam Zam', 'Индийско-мусульманская закусочная с 1908 года напротив мечети Султана: мурта­бак — огромная лепёшка с начинкой — тут легенда.', 'Возьмите муртабак с бараниной и карри для макания.'],
      en: ['Zam Zam', 'An Indian-Muslim eatery opposite Sultan Mosque since 1908, legendary for murtabak — a giant stuffed griddle bread.', 'Get the mutton murtabak with curry for dipping.'],
      es: ['Zam Zam', 'Un local indio-musulmán frente a la mezquita del Sultán desde 1908, legendario por el murtabak, un pan relleno gigante.', 'Pide el murtabak de cordero con curry para mojar.'],
      de: ['Zam Zam', 'Ein indisch-muslimisches Lokal gegenüber der Sultan-Moschee seit 1908, legendär für Murtabak – riesiges gefülltes Pfannenbrot.', 'Murtabak mit Hammel und Curry zum Dippen bestellen.'],
      fr: ['Zam Zam', 'Une gargote indo-musulmane face à la mosquée du Sultan depuis 1908, célèbre pour le murtabak, galette farcie géante.', 'Prenez le murtabak au mouton avec du curry à tremper.'],
      it: ['Zam Zam', 'Un locale indiano-musulmano di fronte alla Sultan Mosque dal 1908, leggendario per il murtabak, pane ripieno gigante.', 'Prendi il murtabak di montone con curry per intingere.'],
    }, { price: level(1), address: '697 North Bridge Rd', menu: [
      ['Mutton Murtabak', 9, 'лепёшка с бараниной и луком|griddle bread stuffed with mutton|pan relleno de cordero|Pfannenbrot mit Hammel|galette farcie au mouton|pane ripieno di montone'],
      ['Chicken Biryani', 9, 'бирьяни с курицей|chicken biryani|biryani de pollo|Hähnchen-Biryani|biryani au poulet|biryani di pollo'],
      ['Teh Tarik', 2, '«тянутый» чай с молоком|pulled milk tea|té con leche “estirado”|„gezogener“ Milchtee|thé au lait « tiré »|tè al latte “tirato”'],
    ] }),
    P('328-katong-laksa', 'food', 1.3055, 103.9046, FOOD, 4.2, 6100, ['food', 'streetfood'], {
      ru: ['328 Katong Laksa', 'Лакса по-катонговски: кокосово-креветочный суп с короткой лапшой, которую едят одной ложкой, без палочек.', 'Добавьте отак — рыбную пасту, запечённую в банановом листе.'],
      en: ['328 Katong Laksa', 'Katong-style laksa: coconut-prawn soup with short-cut noodles eaten with a spoon alone, no chopsticks.', 'Add otah — spiced fish paste grilled in banana leaf.'],
      es: ['328 Katong Laksa', 'Laksa al estilo de Katong: sopa de coco y gambas con fideos cortos que se come solo con cuchara.', 'Añade otah: pasta de pescado especiada asada en hoja de plátano.'],
      de: ['328 Katong Laksa', 'Laksa nach Katong-Art: Kokos-Garnelen-Suppe mit kurzen Nudeln, die man nur mit dem Löffel isst.', 'Otah dazunehmen – gewürzte Fischpaste im Bananenblatt.'],
      fr: ['328 Katong Laksa', 'Laksa façon Katong : soupe coco-crevettes aux nouilles courtes qui se mange à la cuillère, sans baguettes.', 'Ajoutez de l’otah, pâte de poisson épicée grillée en feuille de bananier.'],
      it: ['328 Katong Laksa', 'Laksa in stile Katong: zuppa di cocco e gamberi con noodle corti da mangiare col solo cucchiaio.', 'Aggiungi l’otah, pasta di pesce speziata grigliata nella foglia di banano.'],
    }, { price: level(1), address: '51 East Coast Rd', menu: [
      ['Katong Laksa', 7, 'кокосовый суп с креветками и лапшой|coconut prawn noodle soup|sopa de coco y gambas con fideos|Kokos-Garnelen-Nudelsuppe|soupe de nouilles coco-crevettes|zuppa di noodle cocco e gamberi'],
      ['Otah', 2, 'рыбная паста в банановом листе|fish paste in banana leaf|pasta de pescado en hoja de plátano|Fischpaste im Bananenblatt|pâte de poisson en feuille de bananier|pasta di pesce in foglia di banano'],
    ] }),
    P('newton-food-centre', 'food', 1.312, 103.8395, FOOD, 4.1, 21300, ['food', 'streetfood', 'nightlife'], {
      ru: ['Newton Food Centre', 'Вечерний фуд-корт под открытым небом: сатай, краб в чили, барбекю-скат и сок сахарного тростника.', 'Цены уточняйте до заказа морепродуктов — их считают на вес.'],
      en: ['Newton Food Centre', 'An open-air evening hawker centre: satay, chilli crab, barbecued stingray and sugarcane juice.', 'Confirm the price before ordering seafood — it is sold by weight.'],
      es: ['Newton Food Centre', 'Un hawker al aire libre para la noche: satay, cangrejo al chile, raya a la parrilla y zumo de caña.', 'Confirma el precio antes de pedir marisco: se vende al peso.'],
      de: ['Newton Food Centre', 'Ein Open-Air-Hawker-Zentrum für den Abend: Satay, Chili-Krabbe, gegrillter Rochen und Zuckerrohrsaft.', 'Vor der Bestellung von Meeresfrüchten den Preis klären – sie werden nach Gewicht berechnet.'],
      fr: ['Newton Food Centre', 'Un hawker centre en plein air pour le soir : satay, crabe au piment, raie grillée et jus de canne.', 'Faites confirmer le prix des fruits de mer avant de commander : ils sont au poids.'],
      it: ['Newton Food Centre', 'Un hawker centre all’aperto per la sera: satay, granchio al peperoncino, razza alla griglia e succo di canna.', 'Chiedi il prezzo prima di ordinare frutti di mare: si pagano a peso.'],
    }, { price: level(1), hours: '17:00–02:00', menu: [
      ['Satay (10 sticks)', 10, 'шашлычки с арахисовым соусом|satay skewers with peanut sauce|brochetas con salsa de cacahuete|Spieße mit Erdnusssauce|brochettes sauce cacahuète|spiedini con salsa di arachidi'],
      ['BBQ Stingray', 18, 'скат на гриле с самбалом|grilled stingray with sambal|raya a la parrilla con sambal|gegrillter Rochen mit Sambal|raie grillée au sambal|razza alla griglia con sambal'],
      ['Sugarcane Juice', 3, 'свежий сок сахарного тростника|fresh sugarcane juice|zumo de caña fresco|frischer Zuckerrohrsaft|jus de canne frais|succo di canna fresco'],
    ] }),
  ],
  routes: [
    D(['chinatown-pagoda-street', 'sri-mariamman-temple', '=singapore-buddha-tooth-relic-temple', 'tian-tian-chicken-rice', '=singapore-merlion-park', '=gardensbay', '=singapore-lau-pa-sat'],
      'Чайнатаун, Мерлайон и сады у залива|Chinatown, the Merlion and Gardens by the Bay|Chinatown, el Merlion y Gardens by the Bay|Chinatown, Merlion und Gardens by the Bay|Chinatown, le Merlion et Gardens by the Bay|Chinatown, il Merlion e Gardens by the Bay'),
    D(['raffles-hotel', 'national-gallery', 'zam-zam', '=singapore-sultan-mosque', '=singapore-haji-lane', 'little-india', 'clarke-quay', 'song-fa-bak-kut-teh'],
      'Колониальный центр, Кампонг-Гелам и Литл-Индия|Colonial core, Kampong Glam and Little India|Centro colonial, Kampong Glam y Little India|Kolonialviertel, Kampong Glam und Little India|Cœur colonial, Kampong Glam et Little India|Centro coloniale, Kampong Glam e Little India'),
    D(['singapore-zoo', '=singapore-botanic-gardens', 'candlenut', 'henderson-waves', 'artscience-museum', 'newton-food-centre'],
      'Зоопарк, ботанический сад и тропа над лесом|Zoo, Botanic Gardens and a walk above the forest|Zoo, Jardín Botánico y paseo sobre el bosque|Zoo, Botanischer Garten und Weg über dem Wald|Zoo, jardin botanique et balade au-dessus de la forêt|Zoo, Giardino botanico e passeggiata sulla foresta'),
  ],
};

export default pack;
