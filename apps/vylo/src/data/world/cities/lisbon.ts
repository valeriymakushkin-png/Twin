import type { CityPack } from '../types';
import { free, level, makeDay, makePlace } from './_kit.ts';

const P = makePlace('lisbon');
const D = makeDay('lisbon');
const CITY = 'ljhCEaHYWJ8';
const BELEM = 'RxVCWvDvfs4';
const TILES = 'r_ShROkN3E8';
const SQUARE = 'UIIwSB8q3mo';
const FOOD = 'jj0x3RKPfUY';
const ALFAMA = 'tnGO-GCfH4Y';
const VIEW = 'kfVxX0vt3Xc';

const pack: CityPack = {
  country: 'PT',
  city: 'lisbon',
  places: [
    P('jeronimos', 'attraction', 38.6979, -9.2068, BELEM, 4.7, 78000, ['architecture', 'history', 'unesco'], {
      ru: ['Монастырь Жеронимуш', 'Шедевр мануэлино XVI века в Белене, построенный на доходы от морской торговли; здесь похоронен Васко да Гама. Объект ЮНЕСКО.', 'Церковь бесплатна, клуатр — по билету; приходите к открытию, к полудню очередь огромная.'],
      en: ['Jerónimos Monastery', 'A 16th-century Manueline masterpiece in Belém built on spice-trade wealth; Vasco da Gama is buried here. A UNESCO site.', 'The church is free, the cloister ticketed; arrive at opening — by noon the queue is huge.'],
      es: ['Monasterio de los Jerónimos', 'Una obra maestra manuelina del siglo XVI en Belém, pagada con el comercio de especias; aquí yace Vasco da Gama. Patrimonio UNESCO.', 'La iglesia es gratis, el claustro de pago; llega a la apertura, a mediodía la cola es enorme.'],
      de: ['Hieronymitenkloster', 'Ein manuelinisches Meisterwerk des 16. Jh. in Belém, finanziert aus dem Gewürzhandel; hier ruht Vasco da Gama. UNESCO-Welterbe.', 'Die Kirche ist frei, der Kreuzgang kostet; zur Öffnung kommen – mittags ist die Schlange riesig.'],
      fr: ['Monastère des Hiéronymites', 'Un chef-d’œuvre manuélin du XVIe à Belém, financé par le commerce des épices ; Vasco de Gama y repose. Patrimoine UNESCO.', 'L’église est gratuite, le cloître payant ; venez à l’ouverture, à midi la file est énorme.'],
      it: ['Monastero dos Jerónimos', 'Un capolavoro manuelino del Cinquecento a Belém, finanziato dal commercio delle spezie; qui riposa Vasco da Gama. Patrimonio UNESCO.', 'La chiesa è gratuita, il chiostro a pagamento; arriva all’apertura, a mezzogiorno la coda è enorme.'],
    }, { spot: 'insta', hours: '09:30–18:00' }),
    P('castelo-sao-jorge', 'attraction', 38.7139, -9.1335, ALFAMA, 4.6, 89000, ['history', 'castles', 'views'], {
      ru: ['Замок Святого Георгия', 'Мавританская крепость на высшем холме старого города: стены, павлины в садах и самый широкий вид на Лиссабон и Тежу.', 'Поднимитесь пешком через Алфаму или на автобусе 737; на закате на стенах особенно красиво.'],
      en: ['São Jorge Castle', 'A Moorish fortress on the old town’s highest hill: ramparts, peacocks in the gardens and the widest view over Lisbon and the Tagus.', 'Walk up through Alfama or take bus 737; the walls are loveliest at sunset.'],
      es: ['Castillo de San Jorge', 'Una fortaleza morisca en la colina más alta del casco antiguo: murallas, pavos reales y la vista más amplia sobre Lisboa y el Tajo.', 'Sube a pie por Alfama o en el bus 737; al atardecer las murallas lucen más.'],
      de: ['Castelo de São Jorge', 'Eine maurische Festung auf dem höchsten Hügel der Altstadt: Mauern, Pfauen in den Gärten und der weiteste Blick über Lissabon und den Tejo.', 'Zu Fuß durch die Alfama oder mit Bus 737 hinauf; bei Sonnenuntergang am schönsten.'],
      fr: ['Château Saint-Georges', 'Une forteresse maure sur la plus haute colline de la vieille ville : remparts, paons dans les jardins et la plus vaste vue sur Lisbonne et le Tage.', 'Montez à pied par l’Alfama ou en bus 737 ; les remparts sont superbes au couchant.'],
      it: ['Castello di São Jorge', 'Una fortezza moresca sul colle più alto della città vecchia: mura, pavoni nei giardini e la vista più ampia su Lisbona e il Tago.', 'Sali a piedi dall’Alfama o con il bus 737; al tramonto le mura sono bellissime.'],
    }, { hours: '09:00–21:00' }),
    P('lx-factory', 'attraction', 38.7034, -9.1784, CITY, 4.5, 41000, ['art', 'shopping', 'food'], {
      ru: ['LX Factory', 'Бывший текстильный комплекс под мостом 25 Апреля: книжный Ler Devagar с велосипедом под потолком, стрит-арт, дизайнерские лавки и кафе.', 'По воскресеньям — рынок LX Market; загляните в книжный, даже если не читаете по-португальски.'],
      en: ['LX Factory', 'A former textile complex under the 25 de Abril Bridge: the Ler Devagar bookshop with a bicycle under the ceiling, street art, design shops and cafés.', 'Sundays bring the LX Market; visit the bookshop even if you don’t read Portuguese.'],
      es: ['LX Factory', 'Un antiguo complejo textil bajo el puente 25 de Abril: la librería Ler Devagar con una bici en el techo, arte urbano, tiendas de diseño y cafés.', 'Los domingos hay LX Market; entra a la librería aunque no leas portugués.'],
      de: ['LX Factory', 'Ein ehemaliger Textilkomplex unter der Brücke des 25. April: die Buchhandlung Ler Devagar mit Fahrrad unter der Decke, Street Art, Designläden und Cafés.', 'Sonntags gibt es den LX Market; die Buchhandlung lohnt auch ohne Portugiesisch.'],
      fr: ['LX Factory', 'Un ancien complexe textile sous le pont du 25-Avril : la librairie Ler Devagar et son vélo au plafond, street art, boutiques de design et cafés.', 'Le dimanche, LX Market ; entrez dans la librairie même sans lire le portugais.'],
      it: ['LX Factory', 'Un ex complesso tessile sotto il ponte 25 de Abril: la libreria Ler Devagar con una bici al soffitto, street art, negozi di design e caffè.', 'La domenica c’è l’LX Market; entra in libreria anche se non leggi il portoghese.'],
    }, { spot: 'insta', price: free }),
    P('maat', 'attraction', 38.6957, -9.1924, CITY, 4.5, 22000, ['art', 'architecture', 'views'], {
      ru: ['MAAT', 'Музей искусства, архитектуры и технологий в волнообразном здании на берегу Тежу; по его крыше можно гулять бесплатно.', 'Поднимитесь на крышу на закате — вид на мост 25 Апреля.'],
      en: ['MAAT', 'The Museum of Art, Architecture and Technology in a wave-shaped building on the Tagus; you can walk over its roof for free.', 'Go up on the roof at sunset — view of the 25 de Abril Bridge.'],
      es: ['MAAT', 'El Museo de Arte, Arquitectura y Tecnología en un edificio ondulado junto al Tajo; su cubierta se recorre gratis.', 'Sube a la cubierta al atardecer: vista al puente 25 de Abril.'],
      de: ['MAAT', 'Das Museum für Kunst, Architektur und Technologie in einem wellenförmigen Bau am Tejo; über das Dach kann man kostenlos laufen.', 'Bei Sonnenuntergang aufs Dach – Blick auf die Brücke des 25. April.'],
      fr: ['MAAT', 'Le musée d’art, d’architecture et de technologie dans un bâtiment en vague au bord du Tage ; on marche gratuitement sur son toit.', 'Montez sur le toit au couchant : vue sur le pont du 25-Avril.'],
      it: ['MAAT', 'Il Museo di arte, architettura e tecnologia in un edificio a onda sul Tago; il tetto è percorribile gratis.', 'Sali sul tetto al tramonto: vista sul ponte 25 de Abril.'],
    }, { spot: 'insta', hours: '10:00–19:00' }),
    P('pena-palace', 'attraction', 38.7876, -9.3906, CITY, 4.7, 94000, ['castles', 'history', 'unesco', 'gardens'], {
      ru: ['Дворец Пена в Синтре', 'Яркий романтический дворец XIX века на вершине горы в Синтре в часе от Лиссабона; вокруг — парк с туманными лесами. Объект ЮНЕСКО.', 'Поезд с вокзала Росиу до Синтры, затем автобус; билет на время берите онлайн.'],
      en: ['Pena Palace, Sintra', 'A colourful 19th-century Romantic palace on a hilltop in Sintra, an hour from Lisbon, in a park of misty woods. A UNESCO site.', 'Train from Rossio to Sintra, then a bus; buy a timed ticket online.'],
      es: ['Palacio da Pena, Sintra', 'Un colorido palacio romántico del siglo XIX en lo alto de Sintra, a una hora de Lisboa, rodeado de bosques con niebla. Patrimonio UNESCO.', 'Tren desde Rossio a Sintra y luego bus; compra entrada con hora online.'],
      de: ['Palácio da Pena, Sintra', 'Ein farbenfroher romantischer Palast des 19. Jh. auf einem Gipfel in Sintra, eine Stunde von Lissabon, in einem Park nebliger Wälder. UNESCO-Welterbe.', 'Zug ab Rossio nach Sintra, dann Bus; Zeitticket online kaufen.'],
      fr: ['Palais de Pena, Sintra', 'Un palais romantique coloré du XIXe au sommet d’une colline de Sintra, à une heure de Lisbonne, dans un parc de forêts brumeuses. Patrimoine UNESCO.', 'Train depuis Rossio jusqu’à Sintra puis bus ; billet horodaté en ligne.'],
      it: ['Palazzo da Pena, Sintra', 'Un colorato palazzo romantico ottocentesco in cima a un colle di Sintra, a un’ora da Lisbona, in un parco di boschi nebbiosi. Patrimonio UNESCO.', 'Treno da Rossio a Sintra, poi bus; biglietto a orario online.'],
    }, { spot: 'insta', hours: '09:30–18:30' }),
    P('gulbenkian', 'attraction', 38.7375, -9.1545, CITY, 4.8, 21000, ['art', 'museums', 'gardens'], {
      ru: ['Музей Галуста Гульбенкяна', 'Частная коллекция нефтяного магната — от египетских древностей до Рембрандта и украшений Лалика — в модернистском здании с садом.', 'После музея прогуляйтесь по саду с прудами — одному из самых тихих мест города.'],
      en: ['Calouste Gulbenkian Museum', 'An oil magnate’s private collection — from Egyptian antiquities to Rembrandt and Lalique jewellery — in a modernist building with a garden.', 'Afterwards stroll the garden’s ponds — one of the city’s calmest spots.'],
      es: ['Museo Calouste Gulbenkian', 'La colección privada de un magnate del petróleo —de antigüedades egipcias a Rembrandt y joyas de Lalique— en un edificio moderno con jardín.', 'Después pasea por el jardín con estanques, uno de los rincones más tranquilos.'],
      de: ['Museu Calouste Gulbenkian', 'Die Privatsammlung eines Ölmagnaten – von ägyptischen Altertümern bis Rembrandt und Lalique-Schmuck – in einem modernen Bau mit Garten.', 'Danach durch den Garten mit Teichen spazieren – einer der ruhigsten Orte der Stadt.'],
      fr: ['Musée Calouste Gulbenkian', 'La collection privée d’un magnat du pétrole, des antiquités égyptiennes à Rembrandt et aux bijoux de Lalique, dans un bâtiment moderniste avec jardin.', 'Ensuite, flânez au jardin et ses bassins, l’un des lieux les plus calmes.'],
      it: ['Museo Calouste Gulbenkian', 'La collezione privata di un magnate del petrolio, dalle antichità egizie a Rembrandt e ai gioielli di Lalique, in un edificio modernista con giardino.', 'Poi passeggia nel giardino con i laghetti, uno degli angoli più tranquilli.'],
    }, { hours: '10:00–18:00', address: 'Avenida de Berna 45A' }),
    P('santa-justa-lift', 'attraction', 38.7121, -9.1394, TILES, 4.3, 48000, ['architecture', 'views'], {
      ru: ['Лифт Санта-Жушта', 'Неоготический чугунный лифт 1902 года, соединяющий Байшу с Шиаду; наверху — смотровая площадка.', 'Очередь вниз огромная — дойдите до площадки наверху пешком через Шиаду и заплатите только за вход на террасу.'],
      en: ['Santa Justa Lift', 'A 1902 neo-Gothic cast-iron lift linking the Baixa with Chiado; a viewing platform at the top.', 'The queue below is huge — walk up through Chiado and pay only for the top terrace.'],
      es: ['Elevador de Santa Justa', 'Un elevador neogótico de hierro de 1902 que une la Baixa con el Chiado; arriba hay un mirador.', 'La cola abajo es enorme: sube a pie por el Chiado y paga solo la terraza.'],
      de: ['Elevador de Santa Justa', 'Ein neugotischer Gusseisenaufzug von 1902 zwischen Baixa und Chiado; oben eine Aussichtsplattform.', 'Unten ist die Schlange riesig – durch den Chiado hinaufgehen und nur die Terrasse bezahlen.'],
      fr: ['Ascenseur de Santa Justa', 'Un ascenseur néogothique en fonte de 1902 reliant la Baixa au Chiado ; belvédère au sommet.', 'La file en bas est énorme : montez à pied par le Chiado et payez seulement la terrasse.'],
      it: ['Elevador de Santa Justa', 'Un ascensore neogotico in ghisa del 1902 che collega la Baixa al Chiado; in cima una terrazza panoramica.', 'La coda sotto è enorme: sali a piedi dal Chiado e paga solo la terrazza.'],
    }, { spot: 'insta', hours: '07:30–23:00' }),
    P('bairro-alto', 'attraction', 38.713, -9.145, ALFAMA, 4.4, 30000, ['nightlife', 'oldtown'], {
      ru: ['Байру-Алту', 'Квартал узких улочек на холме: днём тихий и сонный, ночью — сотни крошечных баров, где пьют прямо на улице, и фаду-дома.', 'Вечером начните со смотровой площадки Сан-Педру-де-Алкантара по соседству.'],
      en: ['Bairro Alto', 'A hilltop warren of narrow lanes: sleepy by day, by night hundreds of tiny bars with drinking in the street, plus fado houses.', 'Start the evening at the nearby São Pedro de Alcântara viewpoint.'],
      es: ['Bairro Alto', 'Un laberinto de callejuelas en lo alto: tranquilo de día, de noche cientos de bares diminutos donde se bebe en la calle, y casas de fado.', 'Empieza la noche en el mirador de São Pedro de Alcântara, al lado.'],
      de: ['Bairro Alto', 'Ein Gassengewirr auf dem Hügel: tagsüber verschlafen, nachts Hunderte winziger Bars mit Trinken auf der Straße, dazu Fado-Häuser.', 'Den Abend am nahen Miradouro São Pedro de Alcântara beginnen.'],
      fr: ['Bairro Alto', 'Un dédale de ruelles sur la colline : endormi le jour, la nuit des centaines de petits bars où l’on boit dans la rue, et des maisons de fado.', 'Commencez la soirée au belvédère voisin de São Pedro de Alcântara.'],
      it: ['Bairro Alto', 'Un dedalo di vicoli in collina: sonnolento di giorno, di notte centinaia di minuscoli bar dove si beve in strada, e case di fado.', 'Inizia la serata al vicino belvedere di São Pedro de Alcântara.'],
    }, { price: free }),
    P('oceanario', 'attraction', 38.7635, -9.0937, CITY, 4.7, 87000, ['wildlife', 'museums'], {
      ru: ['Океанариум Лиссабона', 'Один из крупнейших океанариумов Европы в Парке Наций: огромный центральный аквариум с акулами и рыбами-лунами и экосистемы четырёх океанов.', 'Доберитесь на метро до Oriente; рядом — канатная дорога вдоль реки.'],
      en: ['Lisbon Oceanarium', 'One of Europe’s largest aquariums, in Parque das Nações: a huge central tank with sharks and sunfish and four ocean habitats.', 'Take the metro to Oriente; a riverside cable car is nearby.'],
      es: ['Oceanario de Lisboa', 'Uno de los mayores acuarios de Europa en el Parque das Nações: un gran tanque central con tiburones y peces luna y cuatro hábitats oceánicos.', 'Metro hasta Oriente; al lado hay un teleférico junto al río.'],
      de: ['Ozeanarium Lissabon', 'Eines der größten Aquarien Europas im Parque das Nações: ein riesiges Zentralbecken mit Haien und Mondfischen und vier Ozeanlandschaften.', 'Mit der Metro bis Oriente; nebenan eine Seilbahn am Fluss.'],
      fr: ['Océanarium de Lisbonne', 'L’un des plus grands aquariums d’Europe, au Parque das Nações : un immense bassin central avec requins et poissons-lunes et quatre habitats océaniques.', 'Métro jusqu’à Oriente ; un téléphérique longe la rivière à côté.'],
      it: ['Oceanario di Lisbona', 'Uno dei più grandi acquari d’Europa nel Parque das Nações: una vasca centrale enorme con squali e pesci luna e quattro habitat oceanici.', 'Metro fino a Oriente; accanto una funivia lungo il fiume.'],
    }, { hours: '10:00–20:00' }),
    P('se-cathedral', 'attraction', 38.7099, -9.1334, ALFAMA, 4.5, 33000, ['history', 'architecture'], {
      ru: ['Кафедральный собор Се', 'Старейший храм Лиссабона (XII век), похожий на крепость, с романскими башнями; мимо него проходит трамвай 28.', 'Подождите трамвай 28 у собора — классический кадр Лиссабона.'],
      en: ['Lisbon Cathedral (Sé)', 'Lisbon’s oldest church (12th century), fortress-like with Romanesque towers; tram 28 rattles past.', 'Wait for tram 28 by the cathedral — the classic Lisbon shot.'],
      es: ['Catedral de Lisboa (Sé)', 'La iglesia más antigua de Lisboa (siglo XII), con aspecto de fortaleza y torres románicas; el tranvía 28 pasa por delante.', 'Espera al tranvía 28 junto a la catedral: la foto clásica de Lisboa.'],
      de: ['Kathedrale von Lissabon (Sé)', 'Lissabons älteste Kirche (12. Jh.), festungsartig mit romanischen Türmen; die Tram 28 rattert vorbei.', 'Bei der Kathedrale auf die Tram 28 warten – das klassische Lissabon-Foto.'],
      fr: ['Cathédrale de Lisbonne (Sé)', 'La plus vieille église de Lisbonne (XIIe), aux airs de forteresse et tours romanes ; le tram 28 passe devant.', 'Attendez le tram 28 devant la cathédrale : la photo classique de Lisbonne.'],
      it: ['Cattedrale di Lisbona (Sé)', 'La chiesa più antica di Lisbona (XII secolo), simile a una fortezza con torri romaniche; davanti passa il tram 28.', 'Aspetta il tram 28 davanti alla cattedrale: la foto classica di Lisbona.'],
    }, { price: free, hours: '09:30–19:00' }),

    P('belcanto', 'food', 38.7104, -9.1416, FOOD, 4.7, 2200, ['food', 'luxury'], {
      ru: ['Belcanto', 'Ресторан Жозе Авильеша в Шиаду: португальская кухня, переосмысленная на уровне высокой гастрономии; две звезды MICHELIN (гид 2026).', 'Попробуйте фирменный «Mergulho no mar» — рыба с морскими водорослями; бронируйте заранее.'],
      en: ['Belcanto', 'José Avillez’s restaurant in Chiado: Portuguese cuisine reimagined at fine-dining level; two MICHELIN stars (2026 guide).', 'Try the signature “Mergulho no mar” — fish with sea flavours; book ahead.'],
      es: ['Belcanto', 'El restaurante de José Avillez en el Chiado: cocina portuguesa reinterpretada en alta gastronomía; dos estrellas MICHELIN (guía 2026).', 'Prueba el emblemático “Mergulho no mar”, pescado con sabores marinos; reserva.'],
      de: ['Belcanto', 'José Avillez’ Restaurant im Chiado: portugiesische Küche auf Fine-Dining-Niveau neu gedacht; zwei MICHELIN-Sterne (Guide 2026).', 'Das Signature-Gericht „Mergulho no mar“ – Fisch mit Meeresaromen – probieren; vorher buchen.'],
      fr: ['Belcanto', 'Le restaurant de José Avillez au Chiado : cuisine portugaise réinventée en haute gastronomie ; deux étoiles MICHELIN (guide 2026).', 'Goûtez le signature « Mergulho no mar », poisson aux saveurs marines ; réservez.'],
      it: ['Belcanto', 'Il ristorante di José Avillez nel Chiado: cucina portoghese reinterpretata in chiave alta; due stelle MICHELIN (guida 2026).', 'Prova il piatto simbolo “Mergulho no mar”, pesce ai sapori di mare; prenota.'],
    }, { price: level(3), michelin: { award: 'star2', year: 2026 }, address: 'Largo de São Carlos 10', menu: [
      ['Tasting menu', undefined, 'дегустационный сет|tasting menu|menú degustación|Degustationsmenü|menu dégustation|menù degustazione'],
      ['Mergulho no mar', undefined, 'рыба с водорослями и морскими вкусами|fish with seaweed and sea flavours|pescado con algas y sabores marinos|Fisch mit Algen und Meeresaromen|poisson, algues et saveurs marines|pesce con alghe e sapori di mare'],
    ] }),
    P('manteigaria', 'food', 38.7108, -9.144, FOOD, 4.7, 21000, ['food'], {
      ru: ['Manteigaria (Шиаду)', 'Лавка, где пастел-де-ната пекут на глазах у покупателей весь день; многие лиссабонцы считают их лучшими в городе.', 'Ешьте тёплым, посыпав корицей; когда выходит новая партия, звонит колокольчик.'],
      en: ['Manteigaria (Chiado)', 'A shop baking pastéis de nata in front of you all day; many Lisboetas rate them the city’s best.', 'Eat them warm with cinnamon; a bell rings when a fresh batch comes out.'],
      es: ['Manteigaria (Chiado)', 'Una tienda que hornea pastéis de nata a la vista todo el día; muchos lisboetas los consideran los mejores.', 'Cómelos tibios con canela; suena una campana cuando sale una hornada.'],
      de: ['Manteigaria (Chiado)', 'Ein Laden, der den ganzen Tag vor den Augen der Kunden Pastéis de Nata backt; viele Lissabonner halten sie für die besten.', 'Warm mit Zimt essen; eine Glocke läutet bei jeder frischen Ladung.'],
      fr: ['Manteigaria (Chiado)', 'Une boutique qui cuit des pastéis de nata sous vos yeux toute la journée ; beaucoup de Lisboètes les jugent les meilleurs.', 'Mangez-les tièdes à la cannelle ; une cloche sonne à chaque fournée.'],
      it: ['Manteigaria (Chiado)', 'Un negozio che sforna pastéis de nata a vista tutto il giorno; per molti lisbonesi sono i migliori.', 'Mangiali tiepidi con la cannella; una campanella suona a ogni infornata.'],
    }, { price: level(1), address: 'Rua do Loreto 2', menu: [
      ['Pastel de nata', undefined, 'португальская корзиночка с заварным кремом|Portuguese custard tart|pastel de nata portugués|portugiesisches Puddingtörtchen|flan pâtissier portugais|tortina portoghese alla crema'],
      ['Bica', undefined, 'лиссабонский эспрессо|Lisbon espresso|espresso lisboeta|Lissabonner Espresso|espresso lisboète|espresso lisbonese'],
    ] }),
    P('taberna-rua-das-flores', 'food', 38.7099, -9.1435, FOOD, 4.6, 5600, ['food'], {
      ru: ['Taberna da Rua das Flores', 'Маленькая таверна в Шиаду с меню на грифельной доске: петиски — португальские закуски — из рынка дня; бронирования нет.', 'Впишитесь в лист ожидания и погуляйте по Шиаду — вам позвонят.'],
      en: ['Taberna da Rua das Flores', 'A small Chiado tavern with a chalkboard menu of petiscos — Portuguese small plates — from the day’s market; no bookings.', 'Put your name on the waiting list and stroll Chiado — they’ll call you.'],
      es: ['Taberna da Rua das Flores', 'Una pequeña taberna del Chiado con carta en pizarra de petiscos —tapas portuguesas— del mercado del día; sin reservas.', 'Apúntate en la lista de espera y pasea por el Chiado: te llaman.'],
      de: ['Taberna da Rua das Flores', 'Eine kleine Taverne im Chiado mit Tafelmenü aus Petiscos – portugiesischen kleinen Gerichten – vom Markt des Tages; keine Reservierung.', 'Auf die Warteliste setzen lassen und durch den Chiado bummeln – man ruft an.'],
      fr: ['Taberna da Rua das Flores', 'Une petite taverne du Chiado au menu sur ardoise : petiscos, petites assiettes portugaises du marché du jour ; sans réservation.', 'Inscrivez-vous sur la liste d’attente et flânez dans le Chiado : on vous appelle.'],
      it: ['Taberna da Rua das Flores', 'Una piccola taverna del Chiado con menù alla lavagna di petiscos, piattini portoghesi del mercato del giorno; niente prenotazioni.', 'Mettiti in lista d’attesa e passeggia nel Chiado: ti chiamano.'],
    }, { price: level(2), address: 'Rua das Flores 103', menu: [
      ['Petiscos do dia', undefined, 'португальские закуски дня|Portuguese small plates of the day|petiscos del día|portugiesische Tagesgerichte in kleinen Portionen|petites assiettes portugaises du jour|piattini portoghesi del giorno'],
      ['Prego', undefined, 'булочка со стейком и чесноком|steak sandwich with garlic|bocadillo de filete con ajo|Steak-Brötchen mit Knoblauch|sandwich au steak et à l’ail|panino con bistecca e aglio'],
    ] }),
    P('o-velho-eurico', 'food', 38.713, -9.1355, ALFAMA, 4.6, 3900, ['food'], {
      ru: ['O Velho Eurico', 'Шумная таверна у подножия замка, которую молодые владельцы сохранили в духе старого «таско»: классика лиссабонской кухни за общими столами.', 'Бронируйте; закажите треску «à Brás» и тушёную свинину по-алентежански.'],
      en: ['O Velho Eurico', 'A lively tavern below the castle kept by its young owners in the spirit of an old tasca: Lisbon classics at shared tables.', 'Book ahead; order bacalhau à Brás and Alentejo-style pork.'],
      es: ['O Velho Eurico', 'Una animada taberna bajo el castillo que sus jóvenes dueños mantienen como una vieja tasca: clásicos lisboetas en mesas compartidas.', 'Reserva; pide bacalao à Brás y cerdo a la alentejana.'],
      de: ['O Velho Eurico', 'Eine lebhafte Taverne unterhalb der Burg, von jungen Besitzern im Geist einer alten Tasca geführt: Lissabonner Klassiker an Gemeinschaftstischen.', 'Reservieren; Bacalhau à Brás und Schwein nach Alentejo-Art bestellen.'],
      fr: ['O Velho Eurico', 'Une taverne animée sous le château, tenue par de jeunes patrons dans l’esprit d’une vieille tasca : classiques lisboètes à tables partagées.', 'Réservez ; prenez le bacalhau à Brás et le porc à l’alentejane.'],
      it: ['O Velho Eurico', 'Una vivace taverna sotto il castello che i giovani titolari mantengono nello spirito di una vecchia tasca: classici lisbonesi a tavoli condivisi.', 'Prenota; ordina il bacalhau à Brás e il maiale all’alentejana.'],
    }, { price: level(2), address: 'Largo de São Cristóvão 3', menu: [
      ['Bacalhau à Brás', undefined, 'треска с картофелем-соломкой и яйцом|salt cod with shoestring potatoes and egg|bacalao con patatas paja y huevo|Stockfisch mit Strohkartoffeln und Ei|morue, pommes paille et œuf|baccalà con patate a fiammifero e uovo'],
      ['Carne de porco à alentejana', undefined, 'свинина с моллюсками и картофелем|pork with clams and potatoes|cerdo con almejas y patatas|Schwein mit Venusmuscheln und Kartoffeln|porc aux palourdes et pommes de terre|maiale con vongole e patate'],
    ] }),
    P('ze-da-mouraria', 'food', 38.7157, -9.1356, ALFAMA, 4.5, 5100, ['food'], {
      ru: ['Zé da Mouraria', 'Народная столовая в квартале Моурария, открытая только днём: огромные порции жареной трески с нутом — одна на двоих.', 'Порции рассчитаны на двоих — заказывайте одну; приходите к открытию.'],
      en: ['Zé da Mouraria', 'A lunch-only canteen in Mouraria with huge portions — grilled salt cod with chickpeas easily feeds two.', 'Portions are for two — order one; come at opening.'],
      es: ['Zé da Mouraria', 'Un comedor popular de la Mouraria que solo abre a mediodía, con raciones enormes: bacalao asado con garbanzos para dos.', 'Las raciones son para dos; llega a la apertura.'],
      de: ['Zé da Mouraria', 'Eine Mittagskantine in der Mouraria mit riesigen Portionen – gegrillter Stockfisch mit Kichererbsen reicht für zwei.', 'Portionen sind für zwei – eine bestellen; zur Öffnung kommen.'],
      fr: ['Zé da Mouraria', 'Une cantine populaire de la Mouraria ouverte le midi, aux portions énormes : morue grillée aux pois chiches pour deux.', 'Les portions sont pour deux ; venez à l’ouverture.'],
      it: ['Zé da Mouraria', 'Una mensa popolare della Mouraria aperta solo a pranzo, con porzioni enormi: baccalà alla griglia con ceci per due.', 'Le porzioni sono per due; arriva all’apertura.'],
    }, { price: level(1), address: 'Rua João do Outeiro 24', menu: [
      ['Bacalhau assado com grão', undefined, 'запечённая треска с нутом|roast salt cod with chickpeas|bacalao asado con garbanzos|gebratener Stockfisch mit Kichererbsen|morue rôtie aux pois chiches|baccalà arrosto con ceci'],
      ['Arroz de pato', undefined, 'запечённый рис с уткой|baked duck rice|arroz de pato al horno|Entenreis aus dem Ofen|riz au canard au four|riso al forno con anatra'],
    ] }),
    P('sol-e-pesca', 'food', 38.7069, -9.145, FOOD, 4.6, 3100, ['food', 'nightlife'], {
      ru: ['Sol e Pesca', 'Бывший рыболовный магазин на Розовой улице, ставший баром рыбных консервов: банки сардин и осьминога подают с хлебом и вином.', 'Выберите банку на стене — её откроют и подадут с хлебом; хорошо перед прогулкой по ночному Кайш-ду-Содре.'],
      en: ['Sol e Pesca', 'A former fishing-tackle shop on Pink Street turned tinned-fish bar: tins of sardines and octopus served with bread and wine.', 'Pick a tin from the wall — it’s opened and served with bread; a good start to a night in Cais do Sodré.'],
      es: ['Sol e Pesca', 'Una antigua tienda de pesca en la Rua Cor-de-Rosa convertida en bar de conservas: latas de sardinas y pulpo con pan y vino.', 'Elige una lata de la pared y te la sirven con pan; buen inicio para la noche en Cais do Sodré.'],
      de: ['Sol e Pesca', 'Ein ehemaliger Angelladen in der Pink Street, heute Fischkonservenbar: Dosen mit Sardinen und Oktopus zu Brot und Wein.', 'Eine Dose von der Wand wählen – sie wird geöffnet und mit Brot serviert; guter Start in die Nacht in Cais do Sodré.'],
      fr: ['Sol e Pesca', 'Une ancienne boutique de pêche de la Pink Street devenue bar à conserves : sardines et poulpe en boîte avec pain et vin.', 'Choisissez une boîte au mur, servie ouverte avec du pain ; bon début de soirée à Cais do Sodré.'],
      it: ['Sol e Pesca', 'Un ex negozio di pesca sulla Pink Street diventato bar di conserve ittiche: scatolette di sardine e polpo con pane e vino.', 'Scegli una scatoletta dalla parete, te la servono con il pane; ottimo inizio di serata a Cais do Sodré.'],
    }, { spot: 'hidden', price: level(1), address: 'Rua Nova do Carvalho 44', menu: [
      ['Sardinhas em conserva', undefined, 'сардины в масле из банки с хлебом|tinned sardines in oil with bread|sardinas en conserva con pan|Ölsardinen aus der Dose mit Brot|sardines en boîte avec pain|sardine in scatola con pane'],
      ['Polvo em azeite', undefined, 'осьминог в оливковом масле|octopus in olive oil|pulpo en aceite de oliva|Oktopus in Olivenöl|poulpe à l’huile d’olive|polpo sott’olio'],
    ] }),
    P('cervejaria-trindade', 'food', 38.7118, -9.1426, TILES, 4.3, 14000, ['food', 'history'], {
      ru: ['Cervejaria Trindade', 'Пивной ресторан в бывшей монастырской трапезной XIII века с азулежу XIX века: морепродукты, стейки и пиво.', 'Попросите столик в главном зале с изразцами; попробуйте креветки с чесноком.'],
      en: ['Cervejaria Trindade', 'A beer hall in a former 13th-century convent refectory with 19th-century azulejos: seafood, steaks and beer.', 'Ask for the tiled main hall; try the garlic prawns.'],
      es: ['Cervejaria Trindade', 'Una cervecería en el antiguo refectorio de un convento del siglo XIII con azulejos del XIX: marisco, filetes y cerveza.', 'Pide mesa en el salón principal con azulejos; prueba las gambas al ajillo.'],
      de: ['Cervejaria Trindade', 'Ein Bierlokal im ehemaligen Refektorium eines Klosters aus dem 13. Jh. mit Azulejos aus dem 19. Jh.: Meeresfrüchte, Steaks und Bier.', 'Nach dem gekachelten Hauptsaal fragen; Knoblauchgarnelen probieren.'],
      fr: ['Cervejaria Trindade', 'Une brasserie dans l’ancien réfectoire d’un couvent du XIIIe aux azulejos du XIXe : fruits de mer, steaks et bière.', 'Demandez la grande salle carrelée ; goûtez les crevettes à l’ail.'],
      it: ['Cervejaria Trindade', 'Una birreria nell’ex refettorio di un convento del XIII secolo con azulejos ottocenteschi: frutti di mare, bistecche e birra.', 'Chiedi la sala principale con le piastrelle; prova i gamberi all’aglio.'],
    }, { price: level(2), address: 'Rua Nova da Trindade 20C', menu: [
      ['Gambas ao alho', undefined, 'креветки с чесноком|garlic prawns|gambas al ajillo|Knoblauchgarnelen|crevettes à l’ail|gamberi all’aglio'],
      ['Bife à Trindade', undefined, 'фирменный стейк с яйцом и картофелем|house steak with egg and fries|filete de la casa con huevo y patatas|Haus-Steak mit Ei und Pommes|steak maison, œuf et frites|bistecca della casa con uovo e patatine'],
    ] }),
    P('a-cevicheria', 'food', 38.7166, -9.1489, FOOD, 4.5, 6300, ['food'], {
      ru: ['A Cevicheria', 'Перуанско-португальский ресторан шефа Кико Мартинша в Принсипи-Реал с гигантским осьминогом под потолком: севиче из португальской рыбы.', 'Бронирования нет — в очереди наливают писко-сауэр; приходите к открытию.'],
      en: ['A Cevicheria', 'Chef Kiko Martins’s Peruvian-Portuguese spot in Príncipe Real with a giant octopus on the ceiling: ceviche from Portuguese fish.', 'No bookings — pisco sours are poured in the queue; come at opening.'],
      es: ['A Cevicheria', 'El local peruano-portugués del chef Kiko Martins en Príncipe Real con un pulpo gigante en el techo: ceviche de pescado portugués.', 'Sin reservas: en la cola sirven pisco sour; llega a la apertura.'],
      de: ['A Cevicheria', 'Kiko Martins’ peruanisch-portugiesisches Lokal in Príncipe Real mit riesigem Oktopus an der Decke: Ceviche aus portugiesischem Fisch.', 'Keine Reservierung – in der Schlange gibt es Pisco Sour; zur Öffnung kommen.'],
      fr: ['A Cevicheria', 'L’adresse péruvo-portugaise du chef Kiko Martins à Príncipe Real, pieuvre géante au plafond : ceviche de poissons portugais.', 'Sans réservation : pisco sour servi dans la file ; venez à l’ouverture.'],
      it: ['A Cevicheria', 'Il locale peruviano-portoghese dello chef Kiko Martins a Príncipe Real con un polpo gigante al soffitto: ceviche di pesce portoghese.', 'Niente prenotazioni: in coda servono pisco sour; arriva all’apertura.'],
    }, { price: level(2), address: 'Rua Dom Pedro V 129', menu: [
      ['Ceviche', undefined, 'севиче из португальской рыбы|ceviche of Portuguese fish|ceviche de pescado portugués|Ceviche aus portugiesischem Fisch|ceviche de poisson portugais|ceviche di pesce portoghese'],
      ['Pisco sour', undefined, 'коктейль писко-сауэр|pisco sour cocktail|pisco sour|Pisco Sour|pisco sour|pisco sour'],
    ] }),
    P('martinho-da-arcada', 'food', 38.7081, -9.1357, SQUARE, 4.3, 6400, ['food', 'history'], {
      ru: ['Martinho da Arcada', 'Старейшее кафе Лиссабона (1782) под аркадами Праса-ду-Комерсиу; здесь был любимый столик поэта Фернандо Пессоа.', 'Возьмите бику и пастел-де-ната у стойки — так дешевле, чем в ресторанном зале.'],
      en: ['Martinho da Arcada', 'Lisbon’s oldest café (1782) under the arcades of Praça do Comércio; poet Fernando Pessoa had his favourite table here.', 'Have a bica and a pastel de nata at the counter — cheaper than the dining room.'],
      es: ['Martinho da Arcada', 'El café más antiguo de Lisboa (1782) bajo los soportales de la Praça do Comércio; aquí tenía su mesa el poeta Fernando Pessoa.', 'Toma una bica y un pastel de nata en la barra, más barato que en el comedor.'],
      de: ['Martinho da Arcada', 'Lissabons ältestes Café (1782) unter den Arkaden der Praça do Comércio; hier hatte Dichter Fernando Pessoa seinen Lieblingstisch.', 'Bica und Pastel de Nata am Tresen – günstiger als im Speisesaal.'],
      fr: ['Martinho da Arcada', 'Le plus vieux café de Lisbonne (1782) sous les arcades de la Praça do Comércio ; le poète Fernando Pessoa y avait sa table.', 'Prenez une bica et un pastel de nata au comptoir, moins cher qu’en salle.'],
      it: ['Martinho da Arcada', 'Il caffè più antico di Lisbona (1782) sotto i portici di Praça do Comércio; qui aveva il suo tavolo il poeta Fernando Pessoa.', 'Prendi una bica e un pastel de nata al banco, costa meno che in sala.'],
    }, { price: level(1), address: 'Praça do Comércio 3', menu: [
      ['Bica', undefined, 'лиссабонский эспрессо|Lisbon espresso|espresso lisboeta|Lissabonner Espresso|espresso lisboète|espresso lisbonese'],
      ['Pastel de nata', undefined, 'корзиночка с заварным кремом|custard tart|pastel de nata|Puddingtörtchen|flan pâtissier|tortina alla crema'],
    ] }),
  ],
  routes: [
    D(['martinho-da-arcada', '=lisbon-praca-do-comercio', 'se-cathedral', '=lisbon-miradouro-santa-luzia', 'castelo-sao-jorge', 'ze-da-mouraria', '=lisbon-miradouro-senhora-do-monte', 'o-velho-eurico'],
      'Байша, Алфама и замок Святого Георгия|Baixa, Alfama and São Jorge Castle|Baixa, Alfama y el castillo de San Jorge|Baixa, Alfama und Castelo de São Jorge|Baixa, Alfama et château Saint-Georges|Baixa, Alfama e il castello di São Jorge'),
    D(['=lisbon-pasteis-de-belem', 'jeronimos', '=belem', 'maat', 'lx-factory', '=lisbon-time-out-market', 'belcanto'],
      'Белен, MAAT и LX Factory|Belém, MAAT and LX Factory|Belém, el MAAT y LX Factory|Belém, MAAT und LX Factory|Belém, le MAAT et LX Factory|Belém, il MAAT e LX Factory'),
    D(['manteigaria', 'santa-justa-lift', 'gulbenkian', 'a-cevicheria', 'bairro-alto', 'taberna-rua-das-flores'],
      'Шиаду, Гульбенкян и вечерний Байру-Алту|Chiado, the Gulbenkian and Bairro Alto by night|Chiado, la Gulbenkian y el Bairro Alto de noche|Chiado, Gulbenkian und Bairro Alto bei Nacht|Chiado, la Gulbenkian et le Bairro Alto la nuit|Chiado, il Gulbenkian e il Bairro Alto di sera'),
  ],
};

export default pack;
