import type { CityPack } from '../types';
import { free, level, makeDay, makePlace } from './_kit.ts';

const P = makePlace('london');
const D = makeDay('london');
const CITY = 'PRQpl-3xD6c';
const BRIDGE = 'KC_r3vvO-zE';
const MUSEUM = 'dC7UwJRNAgs';
const WESTMINSTER = 'KE8uJQj3Ag4';
const STREET = 'a36DH9cCeUI';
const FOOD = 'AxkSp6GmJvk';

const pack: CityPack = {
  country: 'GB',
  city: 'london',
  places: [
    P('tower-of-london', 'attraction', 51.5081, -0.0759, BRIDGE, 4.6, 95000, ['history', 'castles', 'unesco'], {
      ru: ['Лондонский Тауэр', 'Крепость XI века на Темзе — королевский дворец, тюрьма и сокровищница с коронными драгоценностями; объект ЮНЕСКО.', 'Сразу идите к драгоценностям короны, пока нет очереди, а потом присоединитесь к бесплатной экскурсии бифитера.'],
      en: ['Tower of London', 'An 11th-century fortress on the Thames — royal palace, prison and treasury holding the Crown Jewels; a UNESCO site.', 'Head straight to the Crown Jewels before the queue builds, then join a free Yeoman Warder tour.'],
      es: ['Torre de Londres', 'Una fortaleza del siglo XI junto al Támesis —palacio real, prisión y tesoro con las Joyas de la Corona—; Patrimonio UNESCO.', 'Ve directo a las Joyas de la Corona antes de la cola y luego únete a una visita gratuita de un beefeater.'],
      de: ['Tower of London', 'Eine Festung aus dem 11. Jh. an der Themse – Königspalast, Gefängnis und Schatzkammer der Kronjuwelen; UNESCO-Welterbe.', 'Zuerst zu den Kronjuwelen, bevor die Schlange wächst, dann eine kostenlose Beefeater-Führung mitmachen.'],
      fr: ['Tour de Londres', 'Une forteresse du XIe siècle sur la Tamise — palais royal, prison et trésor des joyaux de la Couronne ; patrimoine UNESCO.', 'Filez aux joyaux de la Couronne avant la file, puis suivez une visite gratuite d’un Yeoman Warder.'],
      it: ['Torre di Londra', 'Una fortezza dell’XI secolo sul Tamigi —palazzo reale, prigione e tesoro dei Gioielli della Corona—; patrimonio UNESCO.', 'Vai subito ai Gioielli della Corona prima della coda, poi unisciti al tour gratuito di uno Yeoman Warder.'],
    }, { hours: '09:00–17:30' }),
    P('westminster-abbey', 'attraction', 51.4993, -0.1273, WESTMINSTER, 4.7, 52000, ['history', 'architecture', 'unesco'], {
      ru: ['Вестминстерское аббатство', 'Готическое аббатство, где коронуют британских монархов с 1066 года; здесь похоронены Ньютон, Дарвин и Чосер.', 'Билеты дешевле онлайн; по воскресеньям открыто только для служб.'],
      en: ['Westminster Abbey', 'The Gothic abbey where British monarchs have been crowned since 1066; Newton, Darwin and Chaucer are buried here.', 'Tickets are cheaper online; on Sundays it is open for worship only.'],
      es: ['Abadía de Westminster', 'La abadía gótica donde se corona a los monarcas británicos desde 1066; aquí yacen Newton, Darwin y Chaucer.', 'Las entradas son más baratas online; los domingos solo abre para el culto.'],
      de: ['Westminster Abbey', 'Die gotische Abtei, in der seit 1066 britische Monarchen gekrönt werden; Newton, Darwin und Chaucer sind hier begraben.', 'Online sind Tickets günstiger; sonntags nur zu Gottesdiensten geöffnet.'],
      fr: ['Abbaye de Westminster', 'L’abbaye gothique où sont couronnés les souverains britanniques depuis 1066 ; Newton, Darwin et Chaucer y reposent.', 'Billets moins chers en ligne ; le dimanche, ouverte seulement pour les offices.'],
      it: ['Abbazia di Westminster', 'L’abbazia gotica dove dal 1066 si incoronano i sovrani britannici; qui riposano Newton, Darwin e Chaucer.', 'I biglietti costano meno online; la domenica è aperta solo per le funzioni.'],
    }, { hours: '09:30–15:30' }),
    P('st-pauls', 'attraction', 51.5138, -0.0984, CITY, 4.7, 41000, ['architecture', 'history', 'views'], {
      ru: ['Собор Святого Павла', 'Барочный собор Кристофера Рена с одним из крупнейших куполов в мире; 528 ступеней ведут к Шепчущей и Золотой галереям.', 'Шепните у стены Шепчущей галереи — собеседник на другой стороне услышит. С Золотой галереи — вид на Сити.'],
      en: ['St Paul’s Cathedral', 'Christopher Wren’s Baroque cathedral with one of the world’s largest domes; 528 steps lead to the Whispering and Golden Galleries.', 'Whisper along the Whispering Gallery wall and someone across can hear you. The Golden Gallery overlooks the City.'],
      es: ['Catedral de San Pablo', 'La catedral barroca de Christopher Wren con una de las mayores cúpulas del mundo; 528 escalones llevan a las galerías de los Susurros y Dorada.', 'Susurra junto al muro de la Galería de los Susurros y te oirán al otro lado. La Dorada mira a la City.'],
      de: ['St Paul’s Cathedral', 'Christopher Wrens Barockkathedrale mit einer der größten Kuppeln der Welt; 528 Stufen führen zur Flüster- und zur Goldenen Galerie.', 'An der Wand der Flüstergalerie flüstern – gegenüber hört man es. Die Goldene Galerie blickt über die City.'],
      fr: ['Cathédrale Saint-Paul', 'La cathédrale baroque de Christopher Wren, l’une des plus grandes coupoles au monde ; 528 marches mènent aux galeries des Murmures et Dorée.', 'Murmurez contre le mur de la galerie des Murmures : on vous entend en face. La galerie Dorée domine la City.'],
      it: ['Cattedrale di Saint Paul', 'La cattedrale barocca di Christopher Wren con una delle cupole più grandi del mondo; 528 gradini portano alle gallerie dei Sussurri e Dorata.', 'Sussurra lungo il muro della Galleria dei Sussurri: dall’altra parte ti sentono. La Dorata guarda la City.'],
    }, { hours: '08:30–16:00' }),
    P('national-gallery', 'attraction', 51.5089, -0.1283, MUSEUM, 4.8, 63000, ['art', 'museums'], {
      ru: ['Национальная галерея', 'Бесплатный музей на Трафальгарской площади: Ван Эйк, Леонардо, Тёрнер, «Подсолнухи» Ван Гога и импрессионисты.', 'Вход бесплатный; по пятницам галерея работает до вечера.'],
      en: ['National Gallery', 'A free museum on Trafalgar Square: Van Eyck, Leonardo, Turner, Van Gogh’s Sunflowers and the Impressionists.', 'Entry is free; it stays open late on Fridays.'],
      es: ['National Gallery', 'Un museo gratuito en Trafalgar Square: Van Eyck, Leonardo, Turner, los Girasoles de Van Gogh y los impresionistas.', 'La entrada es gratis; los viernes abre hasta tarde.'],
      de: ['National Gallery', 'Ein kostenloses Museum am Trafalgar Square: Van Eyck, Leonardo, Turner, Van Goghs Sonnenblumen und die Impressionisten.', 'Eintritt frei; freitags länger geöffnet.'],
      fr: ['National Gallery', 'Un musée gratuit sur Trafalgar Square : Van Eyck, Léonard, Turner, les Tournesols de Van Gogh et les impressionnistes.', 'Entrée libre ; nocturne le vendredi.'],
      it: ['National Gallery', 'Un museo gratuito a Trafalgar Square: Van Eyck, Leonardo, Turner, i Girasoli di Van Gogh e gli impressionisti.', 'Ingresso gratuito; il venerdì apre fino a sera.'],
    }, { price: free, hours: '10:00–18:00', address: 'Trafalgar Square' }),
    P('tate-modern', 'attraction', 51.5076, -0.0994, MUSEUM, 4.6, 72000, ['art', 'museums', 'views'], {
      ru: ['Тейт Модерн', 'Музей современного искусства в бывшей электростанции на южном берегу; с террасы 10-го этажа — вид на собор Святого Павла и Темзу.', 'Постоянная коллекция бесплатна; потом перейдите по мосту Миллениум к собору.'],
      en: ['Tate Modern', 'A modern art museum in a former power station on the South Bank; the 10th-floor terrace looks out over St Paul’s and the Thames.', 'The permanent collection is free; then cross the Millennium Bridge to St Paul’s.'],
      es: ['Tate Modern', 'Un museo de arte moderno en una antigua central eléctrica de la orilla sur; la terraza de la planta 10 mira a San Pablo y el Támesis.', 'La colección permanente es gratis; luego cruza el puente del Milenio hasta San Pablo.'],
      de: ['Tate Modern', 'Ein Museum für moderne Kunst in einem ehemaligen Kraftwerk an der South Bank; die Terrasse im 10. Stock blickt auf St Paul’s und die Themse.', 'Die Dauerausstellung ist gratis; danach über die Millennium Bridge zu St Paul’s.'],
      fr: ['Tate Modern', 'Un musée d’art moderne dans une ancienne centrale électrique de la South Bank ; la terrasse du 10e étage domine Saint-Paul et la Tamise.', 'Collection permanente gratuite ; traversez ensuite le Millennium Bridge vers Saint-Paul.'],
      it: ['Tate Modern', 'Un museo d’arte moderna in un’ex centrale elettrica sulla South Bank; la terrazza al 10° piano guarda Saint Paul e il Tamigi.', 'La collezione permanente è gratuita; poi attraversa il Millennium Bridge fino a Saint Paul.'],
    }, { price: free, hours: '10:00–18:00', address: 'Bankside' }),
    P('buckingham-palace', 'attraction', 51.5014, -0.1419, WESTMINSTER, 4.5, 158000, ['history', 'architecture'], {
      ru: ['Букингемский дворец', 'Лондонская резиденция монарха; смена караула проходит утром по расписанию, а летом открыты парадные залы.', 'Расписание смены караула меняется — проверьте на сайте; займите место у ограды минут за 30.'],
      en: ['Buckingham Palace', 'The monarch’s London residence; the Changing of the Guard takes place on scheduled mornings, and the State Rooms open in summer.', 'The guard-change schedule varies — check online; get a spot by the railings 30 minutes early.'],
      es: ['Palacio de Buckingham', 'La residencia londinense del monarca; el cambio de guardia es por la mañana según calendario y en verano abren los salones de Estado.', 'El calendario del cambio de guardia varía, consúltalo; colócate junto a la verja 30 minutos antes.'],
      de: ['Buckingham Palace', 'Die Londoner Residenz des Monarchen; die Wachablösung findet an festen Vormittagen statt, im Sommer sind die State Rooms geöffnet.', 'Der Plan der Wachablösung ändert sich – online prüfen; 30 Minuten vorher an den Zaun stellen.'],
      fr: ['Palais de Buckingham', 'La résidence londonienne du monarque ; la relève de la garde a lieu certains matins et les salons d’apparat ouvrent l’été.', 'Le calendrier de la relève varie, vérifiez en ligne ; placez-vous aux grilles 30 minutes avant.'],
      it: ['Buckingham Palace', 'La residenza londinese del sovrano; il cambio della guardia avviene in mattine stabilite e d’estate aprono le State Rooms.', 'Il calendario del cambio varia, controlla online; mettiti alla cancellata 30 minuti prima.'],
    }, { spot: 'insta', price: free }),
    P('natural-history-museum', 'attraction', 51.4967, -0.1764, MUSEUM, 4.7, 98000, ['museums', 'architecture'], {
      ru: ['Музей естественной истории', 'Бесплатный музей в романском «соборе природы» с синим китом под потолком главного зала, динозаврами и залом землетрясений.', 'Приходите к открытию в 10:00 — к полудню очереди и толпы детей.'],
      en: ['Natural History Museum', 'A free museum in a Romanesque “cathedral of nature”, with a blue whale over the main hall, dinosaurs and an earthquake gallery.', 'Arrive at 10:00 opening — by noon there are queues and school groups.'],
      es: ['Museo de Historia Natural', 'Un museo gratuito en una “catedral de la naturaleza” románica, con una ballena azul en el gran salón, dinosaurios y una sala de terremotos.', 'Llega a la apertura a las 10:00: a mediodía hay colas y grupos escolares.'],
      de: ['Natural History Museum', 'Ein kostenloses Museum in einer romanischen „Kathedrale der Natur“ mit einem Blauwal über der Haupthalle, Dinosauriern und Erdbebensaal.', 'Zur Öffnung um 10:00 kommen – mittags Schlangen und Schulklassen.'],
      fr: ['Muséum d’histoire naturelle', 'Un musée gratuit dans une « cathédrale de la nature » romane : baleine bleue au-dessus du hall, dinosaures et salle des séismes.', 'Arrivez à l’ouverture à 10 h : à midi, files et groupes scolaires.'],
      it: ['Museo di storia naturale', 'Un museo gratuito in una romanica “cattedrale della natura”, con una balenottera azzurra sulla sala principale, dinosauri e una sala dei terremoti.', 'Arriva all’apertura alle 10: a mezzogiorno code e scolaresche.'],
    }, { price: free, hours: '10:00–17:50', address: 'Cromwell Road' }),
    P('sky-garden', 'attraction', 51.5113, -0.0836, CITY, 4.6, 46000, ['views', 'gardens', 'sunset'], {
      ru: ['Sky Garden', 'Бесплатный сад-оранжерея на 35–37 этажах небоскрёба «Уоки-Токи» с видом на Тауэр, Шард и Темзу.', 'Бесплатные слоты открываются на сайте заранее и быстро заканчиваются; бронируйте на закат.'],
      en: ['Sky Garden', 'A free glass-house garden on floors 35–37 of the “Walkie-Talkie” tower with views of the Tower, the Shard and the Thames.', 'Free slots are released online ahead and go fast; book for sunset.'],
      es: ['Sky Garden', 'Un jardín acristalado gratuito en las plantas 35–37 del “Walkie-Talkie” con vistas a la Torre, el Shard y el Támesis.', 'Los turnos gratuitos salen online con antelación y vuelan; reserva al atardecer.'],
      de: ['Sky Garden', 'Ein kostenloser Glasgarten im 35.–37. Stock des „Walkie-Talkie“ mit Blick auf Tower, Shard und Themse.', 'Gratis-Slots werden vorab online freigegeben und sind schnell weg; zum Sonnenuntergang buchen.'],
      fr: ['Sky Garden', 'Un jardin sous verrière gratuit aux 35e–37e étages du « Walkie-Talkie », vue sur la Tour, le Shard et la Tamise.', 'Les créneaux gratuits ouvrent en ligne et partent vite ; réservez au coucher du soleil.'],
      it: ['Sky Garden', 'Un giardino sotto vetro gratuito ai piani 35–37 del “Walkie-Talkie” con vista su Torre, Shard e Tamigi.', 'Gli slot gratuiti escono online in anticipo e finiscono presto; prenota al tramonto.'],
    }, { spot: 'insta', price: free, address: '1 Sky Garden Walk' }),
    P('kew-gardens', 'nature', 51.4787, -0.2956, CITY, 4.7, 41000, ['gardens', 'nature', 'unesco'], {
      ru: ['Королевские ботанические сады Кью', 'Огромный ботанический сад на западе Лондона с викторианскими оранжереями, тропой по кронам деревьев и китайской пагодой; объект ЮНЕСКО.', 'Заложите полдня; удобнее всего доехать на метро District line до Kew Gardens.'],
      en: ['Kew Gardens', 'A vast botanic garden in west London with Victorian glasshouses, a treetop walkway and a Chinese pagoda; a UNESCO site.', 'Allow half a day; the District line to Kew Gardens station is easiest.'],
      es: ['Kew Gardens', 'Un enorme jardín botánico al oeste de Londres con invernaderos victorianos, pasarela entre copas y una pagoda china; Patrimonio UNESCO.', 'Dedica medio día; lo más fácil es la District line hasta Kew Gardens.'],
      de: ['Kew Gardens', 'Ein riesiger botanischer Garten im Westen Londons mit viktorianischen Gewächshäusern, Baumwipfelpfad und chinesischer Pagode; UNESCO-Welterbe.', 'Einen halben Tag einplanen; am einfachsten mit der District Line bis Kew Gardens.'],
      fr: ['Jardins de Kew', 'Un immense jardin botanique à l’ouest de Londres, serres victoriennes, passerelle dans les cimes et pagode chinoise ; patrimoine UNESCO.', 'Comptez une demi-journée ; la District line jusqu’à Kew Gardens est le plus simple.'],
      it: ['Kew Gardens', 'Un enorme orto botanico a ovest di Londra con serre vittoriane, passerella tra le chiome e una pagoda cinese; patrimonio UNESCO.', 'Calcola mezza giornata; la District line fino a Kew Gardens è la via più semplice.'],
    }, { hours: '10:00–18:00' }),
    P('camden-market', 'attraction', 51.5413, -0.1466, STREET, 4.5, 66000, ['market', 'shopping', 'food'], {
      ru: ['Камден-маркет', 'Лабиринт рынков у Риджентс-канала: винтаж, ремесленные лавки, альтернативная мода и десятки стритфуд-прилавков.', 'Отсюда 15 минут пешком вдоль канала до холма Примроуз — на закат.'],
      en: ['Camden Market', 'A maze of markets by Regent’s Canal: vintage, craft stalls, alternative fashion and dozens of street-food counters.', 'From here it’s 15 minutes on foot to Primrose Hill for sunset.'],
      es: ['Camden Market', 'Un laberinto de mercados junto al Regent’s Canal: vintage, artesanía, moda alternativa y decenas de puestos de comida.', 'Desde aquí son 15 minutos a pie hasta Primrose Hill para el atardecer.'],
      de: ['Camden Market', 'Ein Labyrinth aus Märkten am Regent’s Canal: Vintage, Kunsthandwerk, alternative Mode und Dutzende Streetfood-Stände.', 'Von hier 15 Minuten zu Fuß zum Primrose Hill für den Sonnenuntergang.'],
      fr: ['Camden Market', 'Un dédale de marchés le long du Regent’s Canal : vintage, artisanat, mode alternative et des dizaines de stands de street food.', 'De là, 15 minutes à pied jusqu’à Primrose Hill pour le coucher du soleil.'],
      it: ['Camden Market', 'Un labirinto di mercati sul Regent’s Canal: vintage, artigianato, moda alternativa e decine di banchi di street food.', 'Da qui 15 minuti a piedi fino a Primrose Hill per il tramonto.'],
    }, { price: free, hours: '10:00–18:00' }),

    P('core', 'food', 51.5118, -0.2036, FOOD, 4.8, 1900, ['food', 'luxury'], {
      ru: ['Core by Clare Smyth', 'Ресторан Клэр Смит в Ноттинг-Хилле: британские продукты на уровне высокой кухни — от знаменитой «картофелины» с икрой до ягнёнка; три звезды MICHELIN (гид 2026).', 'Бронирование открывается за несколько месяцев; дресс-код — смарт-кэжуал.'],
      en: ['Core by Clare Smyth', 'Clare Smyth’s Notting Hill restaurant: British produce at haute-cuisine level — from the famous “potato and roe” to lamb; three MICHELIN stars (2026 guide).', 'Bookings open months ahead; dress smart-casual.'],
      es: ['Core by Clare Smyth', 'El restaurante de Clare Smyth en Notting Hill: producto británico de alta cocina, de su famosa “patata con huevas” al cordero; tres estrellas MICHELIN (guía 2026).', 'Las reservas abren con meses de antelación; vestimenta smart-casual.'],
      de: ['Core by Clare Smyth', 'Clare Smyths Restaurant in Notting Hill: britische Produkte auf Haute-Cuisine-Niveau – von der berühmten „Kartoffel mit Rogen“ bis zum Lamm; drei MICHELIN-Sterne (Guide 2026).', 'Reservierungen öffnen Monate im Voraus; Smart Casual.'],
      fr: ['Core by Clare Smyth', 'Le restaurant de Clare Smyth à Notting Hill : produits britanniques en haute cuisine, de la fameuse « pomme de terre et œufs de truite » à l’agneau ; trois étoiles MICHELIN (guide 2026).', 'Les réservations ouvrent des mois à l’avance ; tenue smart-casual.'],
      it: ['Core by Clare Smyth', 'Il ristorante di Clare Smyth a Notting Hill: prodotti britannici in chiave alta cucina, dalla celebre “patata e uova” all’agnello; tre stelle MICHELIN (guida 2026).', 'Le prenotazioni aprono mesi prima; abbigliamento smart-casual.'],
    }, { price: level(3), michelin: { award: 'star3', year: 2026 }, address: '92 Kensington Park Road', menu: [
      ['Potato and roe', undefined, 'запечённый картофель Шарлотта с икрой форели|baked Charlotte potato with trout roe|patata Charlotte con huevas de trucha|Charlotte-Kartoffel mit Forellenrogen|pomme de terre Charlotte et œufs de truite|patata Charlotte con uova di trota'],
      ['Core Classics menu', undefined, 'сет из фирменных блюд|menu of signature dishes|menú de platos emblemáticos|Menü der Signature-Gerichte|menu des plats signature|menù dei piatti iconici'],
    ] }),
    P('st-john', 'food', 51.5203, -0.1016, FOOD, 4.5, 3100, ['food'], {
      ru: ['St. JOHN', 'Ресторан Фергюса Хендерсона в бывшей коптильне у Смитфилдского рынка, прославивший британскую кухню «от носа до хвоста»; одна звезда MICHELIN (гид 2026).', 'Обязательно — жареный костный мозг с салатом из петрушки и пончики с заварным кремом в баре.'],
      en: ['St. JOHN', 'Fergus Henderson’s restaurant in a former smokehouse near Smithfield Market, famous for British nose-to-tail cooking; one MICHELIN star (2026 guide).', 'Must-orders: roast bone marrow with parsley salad, and custard doughnuts at the bar.'],
      es: ['St. JOHN', 'El restaurante de Fergus Henderson en un antiguo ahumadero junto al mercado de Smithfield, famoso por la cocina británica “del morro a la cola”; una estrella MICHELIN (guía 2026).', 'Imprescindibles: tuétano asado con ensalada de perejil y donuts de crema en la barra.'],
      de: ['St. JOHN', 'Fergus Hendersons Restaurant in einer ehemaligen Räucherei am Smithfield Market, berühmt für britische Nose-to-Tail-Küche; ein MICHELIN-Stern (Guide 2026).', 'Pflicht: gerösteter Knochenmark mit Petersiliensalat und Pudding-Donuts an der Bar.'],
      fr: ['St. JOHN', 'Le restaurant de Fergus Henderson dans un ancien fumoir près du marché de Smithfield, célèbre pour la cuisine britannique « du groin à la queue » ; une étoile MICHELIN (guide 2026).', 'Incontournables : moelle rôtie et salade de persil, et beignets à la crème au bar.'],
      it: ['St. JOHN', 'Il ristorante di Fergus Henderson in un’ex affumicatoio vicino al mercato di Smithfield, famoso per la cucina britannica “dal naso alla coda”; una stella MICHELIN (guida 2026).', 'Da ordinare: midollo arrosto con insalata di prezzemolo e bomboloni alla crema al bar.'],
    }, { price: level(2), michelin: { award: 'star1', year: 2026 }, address: '26 St John Street', menu: [
      ['Roast bone marrow & parsley salad', undefined, 'жареный костный мозг с салатом из петрушки|roast bone marrow with parsley salad|tuétano asado con ensalada de perejil|gerösteter Knochenmark mit Petersiliensalat|moelle rôtie et salade de persil|midollo arrosto con insalata di prezzemolo'],
      ['Custard doughnut', undefined, 'пончик с заварным кремом|custard-filled doughnut|donut relleno de crema|Donut mit Vanillecreme|beignet à la crème pâtissière|bombolone alla crema'],
    ] }),
    P('dishoom-covent-garden', 'food', 51.5124, -0.1269, FOOD, 4.7, 21500, ['food'], {
      ru: ['Dishoom (Ковент-Гарден)', 'Ресторан в стиле старых иранских кафе Бомбея: завтраки с наан-роллом с беконом, дал, бирьяни и чай чай.', 'На завтрак и до 18:00 можно бронировать; вечером — живая очередь с чаем на улице.'],
      en: ['Dishoom (Covent Garden)', 'A restaurant in the style of Bombay’s old Irani cafés: bacon naan roll breakfasts, black dal, biryani and chai.', 'Bookable for breakfast and until 6 pm; in the evening there’s a walk-in queue with chai served outside.'],
      es: ['Dishoom (Covent Garden)', 'Un restaurante al estilo de los viejos cafés iraníes de Bombay: desayunos con naan de bacon, dal negro, biryani y chai.', 'Se reserva para desayunar y hasta las 18:00; por la noche hay cola con chai en la calle.'],
      de: ['Dishoom (Covent Garden)', 'Ein Restaurant im Stil der alten Irani-Cafés Bombays: Frühstück mit Bacon-Naan-Roll, schwarzem Dal, Biryani und Chai.', 'Frühstück und bis 18 Uhr reservierbar; abends Schlange mit Chai draußen.'],
      fr: ['Dishoom (Covent Garden)', 'Un restaurant inspiré des vieux cafés iraniens de Bombay : petits-déjeuners au naan au bacon, dal noir, biryani et chai.', 'Réservable au petit-déjeuner et jusqu’à 18 h ; le soir, file avec chai servi dehors.'],
      it: ['Dishoom (Covent Garden)', 'Un ristorante nello stile dei vecchi caffè iraniani di Bombay: colazioni con naan al bacon, dal nero, biryani e chai.', 'Prenotabile a colazione e fino alle 18; la sera c’è la coda con il chai servito fuori.'],
    }, { price: level(2), address: '12 Upper St Martin’s Lane', menu: [
      ['Bacon naan roll', undefined, 'наан с беконом, сливочным сыром и чатни|naan with bacon, cream cheese and chutney|naan con bacon, queso crema y chutney|Naan mit Bacon, Frischkäse und Chutney|naan au bacon, fromage frais et chutney|naan con bacon, formaggio fresco e chutney'],
      ['House black daal', undefined, 'чёрный дал, томлёный сутки|black dal simmered for 24 hours|dal negro cocinado 24 horas|24 Stunden geköchelter schwarzer Dal|dal noir mijoté 24 heures|dal nero cotto 24 ore'],
      ['Chicken ruby', undefined, 'карри с курицей тикка|chicken tikka curry|curry de pollo tikka|Hähnchen-Tikka-Curry|curry de poulet tikka|curry di pollo tikka'],
    ] }),
    P('padella', 'food', 51.5054, -0.0907, FOOD, 4.6, 12800, ['food'], {
      ru: ['Padella (Боро)', 'Паста ручной работы у Боро-маркета по доступным ценам; очередь ради пичи качо э пепе уже легендарна.', 'Приходите к открытию или встаньте в виртуальную очередь через приложение и погуляйте по рынку.'],
      en: ['Padella (Borough)', 'Handmade pasta at friendly prices by Borough Market; the queue for pici cacio e pepe is legendary.', 'Come at opening or join the virtual queue in the app and browse the market.'],
      es: ['Padella (Borough)', 'Pasta artesanal a buen precio junto a Borough Market; la cola por los pici cacio e pepe es legendaria.', 'Llega a la apertura o únete a la cola virtual desde la app y pasea por el mercado.'],
      de: ['Padella (Borough)', 'Handgemachte Pasta zu fairen Preisen am Borough Market; die Schlange für Pici Cacio e Pepe ist legendär.', 'Zur Öffnung kommen oder per App in die virtuelle Schlange und über den Markt schlendern.'],
      fr: ['Padella (Borough)', 'Des pâtes faites main à prix doux près de Borough Market ; la file pour les pici cacio e pepe est légendaire.', 'Venez à l’ouverture ou inscrivez-vous à la file virtuelle via l’appli et flânez au marché.'],
      it: ['Padella (Borough)', 'Pasta fatta a mano a prezzi onesti accanto a Borough Market; la coda per i pici cacio e pepe è leggendaria.', 'Arriva all’apertura o mettiti in coda virtuale con l’app e gira il mercato.'],
    }, { price: level(1), address: '6 Southwark Street', menu: [
      ['Pici cacio e pepe', undefined, 'толстые спагетти с пекорино и перцем|thick spaghetti with pecorino and pepper|pici con pecorino y pimienta|dicke Spaghetti mit Pecorino und Pfeffer|gros spaghetti au pecorino et poivre|pici cacio e pepe'],
      ['Pappardelle with beef shin ragù', undefined, 'паппарделле с рагу из говяжьей голяшки|pappardelle with beef shin ragù|pappardelle con ragú de morcillo|Pappardelle mit Rinderhachse-Ragù|pappardelle au ragù de jarret de bœuf|pappardelle al ragù di stinco'],
    ] }),
    P('kiln', 'food', 51.5123, -0.135, FOOD, 4.6, 4300, ['food'], {
      ru: ['Kiln (Сохо)', 'Тайская кухня с гриля и глиняных горшков у открытой кухни: острые северные блюда, лапша и рыба на углях.', 'Садитесь за стойку у огня; бронь только на большие компании, остальным — живая очередь.'],
      en: ['Kiln (Soho)', 'Thai cooking from grills and clay pots at an open kitchen: fiery northern dishes, noodles and fish over coals.', 'Sit at the counter by the fire; bookings only for groups, otherwise walk in.'],
      es: ['Kiln (Soho)', 'Cocina tailandesa de parrilla y ollas de barro en cocina abierta: platos picantes del norte, fideos y pescado a la brasa.', 'Siéntate en la barra junto al fuego; solo se reserva para grupos.'],
      de: ['Kiln (Soho)', 'Thailändische Küche von Grill und Tontöpfen an der offenen Küche: scharfe nordthailändische Gerichte, Nudeln und Fisch über Kohle.', 'Am Tresen am Feuer sitzen; reserviert wird nur für Gruppen.'],
      fr: ['Kiln (Soho)', 'Cuisine thaïe au gril et en pots d’argile devant la cuisine ouverte : plats du nord relevés, nouilles et poisson sur la braise.', 'Asseyez-vous au comptoir près du feu ; réservation pour les groupes seulement.'],
      it: ['Kiln (Soho)', 'Cucina thai alla griglia e in pentole di terracotta davanti alla cucina aperta: piatti piccanti del nord, noodle e pesce alla brace.', 'Siediti al bancone vicino al fuoco; si prenota solo per gruppi.'],
    }, { price: level(2), address: '58 Brewer Street', menu: [
      ['Clay pot baked glass noodles', undefined, 'стеклянная лапша, запечённая в глиняном горшке|glass noodles baked in a clay pot|fideos de cristal al horno en olla de barro|im Tontopf gebackene Glasnudeln|nouilles de verre cuites en pot d’argile|noodle di vetro al forno in terracotta'],
      ['Grilled chicken & larb', undefined, 'курица на углях и острый ларб|grilled chicken and spicy larb|pollo a la brasa y larb picante|Grillhähnchen und scharfer Larb|poulet grillé et larb épicé|pollo alla brace e larb piccante'],
    ] }),
    P('bao-soho', 'food', 51.5134, -0.1355, FOOD, 4.5, 5800, ['food', 'streetfood'], {
      ru: ['BAO (Сохо)', 'Тайваньские пышные булочки бао с начинками и закуски в маленьком минималистичном зале.', 'Классическая бао со свининой и жареный куриный бао — хит; очередь движется быстро.'],
      en: ['BAO (Soho)', 'Taiwanese fluffy bao buns and small plates in a small, minimalist room.', 'The classic pork bao and the fried chicken bao are the hits; the queue moves fast.'],
      es: ['BAO (Soho)', 'Bollos bao taiwaneses esponjosos y platillos en un pequeño local minimalista.', 'El bao clásico de cerdo y el de pollo frito son los favoritos; la cola avanza rápido.'],
      de: ['BAO (Soho)', 'Taiwanesische fluffige Bao-Buns und kleine Teller in einem kleinen, minimalistischen Raum.', 'Klassisches Schweine-Bao und Fried-Chicken-Bao sind die Hits; die Schlange geht schnell.'],
      fr: ['BAO (Soho)', 'Des bao taïwanais moelleux et petites assiettes dans une petite salle minimaliste.', 'Le bao classique au porc et le bao poulet frit sont les stars ; la file avance vite.'],
      it: ['BAO (Soho)', 'Panini bao taiwanesi soffici e piattini in una piccola sala minimalista.', 'Il bao classico al maiale e quello al pollo fritto sono i preferiti; la coda scorre veloce.'],
    }, { price: level(1), address: '53 Lexington Street', menu: [
      ['Classic bao', undefined, 'бао с томлёной свининой и арахисовой крошкой|bao with braised pork and peanut powder|bao de cerdo guisado y cacahuete|Bao mit geschmortem Schwein und Erdnusspulver|bao au porc braisé et poudre de cacahuète|bao con maiale brasato e granella di arachidi'],
      ['Fried chicken bao', undefined, 'бао с жареной курицей|fried chicken bao|bao de pollo frito|Fried-Chicken-Bao|bao au poulet frit|bao al pollo fritto'],
    ] }),
    P('hawksmoor-spitalfields', 'food', 51.5206, -0.076, FOOD, 4.6, 6900, ['food'], {
      ru: ['Hawksmoor (Спиталфилдс)', 'Британский стейкхаус: говядина от фермеров травяного откорма, выдержанная и зажаренная на углях, плюс сильный коктейльный бар.', 'По воскресеньям — ростбиф; бронируйте на вечер.'],
      en: ['Hawksmoor (Spitalfields)', 'A British steakhouse: grass-fed, dry-aged beef from farmers, cooked over charcoal, plus a strong cocktail bar.', 'Sunday roast on Sundays; book for dinner.'],
      es: ['Hawksmoor (Spitalfields)', 'Un asador británico: vacuno de pasto madurado y hecho a la brasa, más una buena coctelería.', 'Los domingos hay asado dominical; reserva para cenar.'],
      de: ['Hawksmoor (Spitalfields)', 'Ein britisches Steakhaus: grasgefüttertes, trocken gereiftes Rind vom Holzkohlegrill, dazu eine starke Cocktailbar.', 'Sonntags Sunday Roast; abends reservieren.'],
      fr: ['Hawksmoor (Spitalfields)', 'Un steakhouse britannique : bœuf nourri à l’herbe, maturé, cuit au charbon, et un excellent bar à cocktails.', 'Rôti le dimanche ; réservez le soir.'],
      it: ['Hawksmoor (Spitalfields)', 'Una steakhouse britannica: manzo da pascolo frollato e cotto alla brace, più un ottimo cocktail bar.', 'La domenica c’è il Sunday roast; prenota a cena.'],
    }, { price: level(3), address: '157A Commercial Street', menu: [
      ['Bone-in sirloin', undefined, 'стейк сирлойн на кости|bone-in sirloin steak|lomo bajo con hueso|Sirloin am Knochen|faux-filet avec os|controfiletto con osso'],
      ['Triple-cooked chips', undefined, 'картофель, обжаренный трижды|triple-cooked chips|patatas cocinadas tres veces|dreifach gegarte Pommes|frites cuites trois fois|patatine cotte tre volte'],
    ] }),
    P('rules', 'food', 51.511, -0.1236, FOOD, 4.5, 8300, ['food', 'history'], {
      ru: ['Rules', 'Старейший ресторан Лондона (1798) в Ковент-Гардене: красный бархат, картины, британская дичь и пудинги.', 'Сезон дичи — с августа по январь; попробуйте стейк-энд-кидни-пай или стики-тоффи пудинг.'],
      en: ['Rules', 'London’s oldest restaurant (1798) in Covent Garden: red velvet, paintings, British game and puddings.', 'Game season runs August to January; try steak and kidney pie or sticky toffee pudding.'],
      es: ['Rules', 'El restaurante más antiguo de Londres (1798) en Covent Garden: terciopelo rojo, cuadros, caza británica y pudines.', 'La temporada de caza va de agosto a enero; prueba el pastel de carne y riñones o el sticky toffee pudding.'],
      de: ['Rules', 'Londons ältestes Restaurant (1798) in Covent Garden: roter Samt, Gemälde, britisches Wild und Puddings.', 'Wildsaison August bis Januar; Steak and Kidney Pie oder Sticky Toffee Pudding probieren.'],
      fr: ['Rules', 'Le plus vieux restaurant de Londres (1798) à Covent Garden : velours rouge, tableaux, gibier britannique et puddings.', 'Saison du gibier d’août à janvier ; goûtez la steak and kidney pie ou le sticky toffee pudding.'],
      it: ['Rules', 'Il ristorante più antico di Londra (1798) a Covent Garden: velluto rosso, quadri, selvaggina britannica e pudding.', 'Stagione della selvaggina da agosto a gennaio; prova la steak and kidney pie o lo sticky toffee pudding.'],
    }, { price: level(3), address: '35 Maiden Lane', menu: [
      ['Steak & kidney pie', undefined, 'пирог с говядиной и почками|beef and kidney pie|pastel de ternera y riñones|Rind-und-Nieren-Pastete|tourte bœuf et rognons|torta di manzo e rognone'],
      ['Sticky toffee pudding', undefined, 'финиковый пудинг с ирисковым соусом|date pudding with toffee sauce|pudin de dátiles con salsa toffee|Dattelpudding mit Toffeesauce|pudding aux dattes sauce caramel|budino di datteri con salsa mou'],
    ] }),
    P('the-wolseley', 'food', 51.5074, -0.1408, FOOD, 4.4, 7600, ['food', 'history'], {
      ru: ['The Wolseley', 'Гранд-кафе в бывшем автосалоне 1920-х на Пикадилли: мраморные колонны, чёрно-золотые своды и классические европейские завтраки.', 'Лучшее время — завтрак: яйца Бенедикт, венские булочки и кофе.'],
      en: ['The Wolseley', 'A grand café in a 1920s car showroom on Piccadilly: marble pillars, black-and-gold vaults and classic European breakfasts.', 'Breakfast is the best time: eggs Benedict, viennoiserie and coffee.'],
      es: ['The Wolseley', 'Un gran café en un concesionario de coches de los años 20 en Piccadilly: columnas de mármol, bóvedas negras y doradas y desayunos europeos clásicos.', 'Lo mejor es el desayuno: huevos Benedict, bollería y café.'],
      de: ['The Wolseley', 'Ein Grand Café in einem Autosalon der 1920er an der Piccadilly: Marmorsäulen, schwarz-goldene Gewölbe und klassisches europäisches Frühstück.', 'Am besten zum Frühstück: Eggs Benedict, Viennoiserie und Kaffee.'],
      fr: ['The Wolseley', 'Un grand café dans un ancien showroom automobile des années 1920 sur Piccadilly : colonnes de marbre, voûtes noir et or et petits-déjeuners européens.', 'Le meilleur moment : le petit-déjeuner, œufs Bénédicte, viennoiseries et café.'],
      it: ['The Wolseley', 'Un grand café in un ex salone d’auto degli anni Venti su Piccadilly: colonne di marmo, volte nere e oro e colazioni europee classiche.', 'Il momento migliore è la colazione: uova alla Benedict, viennoiserie e caffè.'],
    }, { price: level(2), address: '160 Piccadilly', menu: [
      ['Eggs Benedict', undefined, 'яйца Бенедикт|eggs Benedict|huevos Benedict|Eggs Benedict|œufs Bénédicte|uova alla Benedict'],
      ['Viennoiserie basket', undefined, 'корзинка венской выпечки|basket of Viennese pastries|cesta de bollería|Korb mit Wiener Gebäck|corbeille de viennoiseries|cestino di viennoiserie'],
    ] }),
  ],
  routes: [
    D(['the-wolseley', 'buckingham-palace', 'westminster-abbey', '=london-westminster-bridge', 'dishoom-covent-garden', 'national-gallery', 'rules'],
      'Букингем, Вестминстер и Ковент-Гарден|Buckingham, Westminster and Covent Garden|Buckingham, Westminster y Covent Garden|Buckingham, Westminster und Covent Garden|Buckingham, Westminster et Covent Garden|Buckingham, Westminster e Covent Garden'),
    D(['tower-of-london', '=london-tower-bridge', '=london-borough-market', 'tate-modern', 'st-pauls', '=london-leadenhall-market', 'sky-garden', 'st-john'],
      'Тауэр, Боро-маркет, Тейт и Сити|The Tower, Borough Market, Tate and the City|La Torre, Borough Market, la Tate y la City|Tower, Borough Market, Tate und City|La Tour, Borough Market, la Tate et la City|La Torre, Borough Market, la Tate e la City'),
    D(['natural-history-museum', '=london-british-museum', 'bao-soho', 'camden-market', '=london-primrose-hill', 'core'],
      'Музеи, Камден и закат на Примроуз-Хилл|Museums, Camden and sunset on Primrose Hill|Museos, Camden y atardecer en Primrose Hill|Museen, Camden und Sonnenuntergang am Primrose Hill|Musées, Camden et coucher de soleil sur Primrose Hill|Musei, Camden e tramonto a Primrose Hill'),
  ],
};

export default pack;
