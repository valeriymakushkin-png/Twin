import type { CityPack } from '../types';
import { free, level, makeDay, makePlace } from './_kit.ts';

const P = makePlace('berlin');
const D = makeDay('berlin');
const CITY = 'E2FMrGuVrXc';
const GATE = 'mtfTz0FnwBw';
const TOWER = 'YKeal8S_9AM';
const BRIDGE = 'W3DXuWtZaOU';
const FOREST = 'kyC-WQf4x5c';
const FOOD = 'N6yxyryNmC0';
const CAFE = 'tQAP92Cpqj4';
const WALL = 'Z1QxuEkhXOs';

const pack: CityPack = {
  country: 'DE',
  city: 'berlin',
  places: [
    P('reichstag', 'attraction', 52.5186, 13.3762, GATE, 4.7, 62000, ['history', 'architecture', 'views'], {
      ru: ['Рейхстаг и стеклянный купол', 'Здание парламента Германии со стеклянным куполом Нормана Фостера: по спиральному пандусу поднимаются над залом заседаний к виду на Тиргартен.', 'Вход бесплатный, но только по предварительной регистрации на сайте Бундестага; возьмите паспорт.'],
      en: ['Reichstag and its glass dome', 'Germany’s parliament with Norman Foster’s glass dome: a spiral ramp climbs above the debating chamber to views over the Tiergarten.', 'Free, but only with advance registration on the Bundestag website; bring your passport.'],
      es: ['Reichstag y su cúpula de cristal', 'El Parlamento alemán con la cúpula de Norman Foster: una rampa en espiral sube sobre el hemiciclo con vistas al Tiergarten.', 'Gratis, pero solo con registro previo en la web del Bundestag; lleva pasaporte.'],
      de: ['Reichstag und Glaskuppel', 'Der Bundestag mit Norman Fosters Glaskuppel: Eine Spiralrampe führt über den Plenarsaal mit Blick über den Tiergarten.', 'Kostenlos, aber nur mit vorheriger Anmeldung auf der Bundestag-Website; Ausweis mitnehmen.'],
      fr: ['Reichstag et sa coupole de verre', 'Le Parlement allemand et la coupole de Norman Foster : une rampe en spirale monte au-dessus de l’hémicycle, vue sur le Tiergarten.', 'Gratuit, uniquement sur inscription préalable sur le site du Bundestag ; prenez votre passeport.'],
      it: ['Reichstag e la cupola di vetro', 'Il Parlamento tedesco con la cupola di Norman Foster: una rampa a spirale sale sopra l’aula con vista sul Tiergarten.', 'Gratuito, ma solo con registrazione anticipata sul sito del Bundestag; porta il passaporto.'],
    }, { price: free, hours: '08:00–00:00', address: 'Platz der Republik 1' }),
    P('neues-museum', 'attraction', 52.52, 13.3978, CITY, 4.7, 23000, ['museums', 'history', 'unesco'], {
      ru: ['Новый музей на Музейном острове', 'Египетская коллекция с бюстом Нефертити в здании, восстановленном Дэвидом Чипперфилдом; весь Музейный остров — объект ЮНЕСКО.', 'Билет по времени на Нефертити берите онлайн; часть Пергамского музея закрыта на реконструкцию до 2027 года.'],
      en: ['Neues Museum on Museum Island', 'The Egyptian collection with the bust of Nefertiti in a building restored by David Chipperfield; the whole Museum Island is UNESCO-listed.', 'Book a timed ticket online; part of the Pergamon Museum is closed for renovation until 2027.'],
      es: ['Neues Museum en la Isla de los Museos', 'La colección egipcia con el busto de Nefertiti en un edificio restaurado por David Chipperfield; toda la isla es Patrimonio UNESCO.', 'Reserva entrada con hora; parte del Museo de Pérgamo está cerrada por obras hasta 2027.'],
      de: ['Neues Museum auf der Museumsinsel', 'Die Ägyptische Sammlung mit der Büste der Nofretete in einem von David Chipperfield restaurierten Bau; die ganze Museumsinsel ist UNESCO-Welterbe.', 'Zeitticket online buchen; Teile des Pergamonmuseums sind bis 2027 wegen Sanierung geschlossen.'],
      fr: ['Neues Museum sur l’île aux Musées', 'La collection égyptienne et le buste de Néfertiti dans un bâtiment restauré par David Chipperfield ; toute l’île est classée UNESCO.', 'Billet horodaté en ligne ; une partie du Pergamon est fermée pour travaux jusqu’en 2027.'],
      it: ['Neues Museum sull’Isola dei Musei', 'La collezione egizia con il busto di Nefertiti in un edificio restaurato da David Chipperfield; tutta l’isola è patrimonio UNESCO.', 'Prenota online l’orario; parte del Pergamonmuseum è chiusa per lavori fino al 2027.'],
    }, { hours: '10:00–18:00', address: 'Bodestraße 1–3' }),
    P('holocaust-memorial', 'attraction', 52.5139, 13.3787, GATE, 4.6, 51000, ['history'], {
      ru: ['Мемориал убитым евреям Европы', 'Поле из 2711 бетонных стел разной высоты между Бранденбургскими воротами и Потсдамер-плац; под ним — информационный центр.', 'Пройдите вглубь лабиринта — ощущение меняется; информационный центр бесплатен.'],
      en: ['Memorial to the Murdered Jews of Europe', 'A field of 2,711 concrete stelae of varying heights between the Brandenburg Gate and Potsdamer Platz, with an information centre below.', 'Walk deep into the maze — the feeling changes; the information centre is free.'],
      es: ['Monumento a los judíos asesinados de Europa', 'Un campo de 2711 estelas de hormigón de alturas distintas entre la Puerta de Brandeburgo y Potsdamer Platz, con un centro de información debajo.', 'Adéntrate en el laberinto: la sensación cambia; el centro es gratuito.'],
      de: ['Denkmal für die ermordeten Juden Europas', 'Ein Feld aus 2711 Betonstelen unterschiedlicher Höhe zwischen Brandenburger Tor und Potsdamer Platz, darunter ein Ort der Information.', 'Tief ins Stelenfeld gehen – das Gefühl ändert sich; der Ort der Information ist kostenlos.'],
      fr: ['Mémorial aux Juifs assassinés d’Europe', 'Un champ de 2 711 stèles de béton de hauteurs variées entre la porte de Brandebourg et Potsdamer Platz, avec un centre d’information sous terre.', 'Avancez au cœur du labyrinthe : la sensation change ; le centre est gratuit.'],
      it: ['Memoriale per gli ebrei assassinati d’Europa', 'Un campo di 2711 stele di cemento di altezze diverse tra la Porta di Brandeburgo e Potsdamer Platz, con un centro informazioni sotterraneo.', 'Inoltrati nel labirinto: la sensazione cambia; il centro è gratuito.'],
    }, { price: free, hours: 'always' }),
    P('checkpoint-charlie', 'attraction', 52.5075, 13.3904, WALL, 4.1, 79000, ['history'], {
      ru: ['Чекпойнт Чарли', 'Бывший пограничный пункт между американским сектором и Восточным Берлином; сегодня — копия будки и открытая выставка о холодной войне.', 'Сама точка туристическая — интереснее бесплатная уличная выставка и музей «Чёрный ящик холодной войны».'],
      en: ['Checkpoint Charlie', 'The former crossing between the American sector and East Berlin; today a replica guardhouse and an outdoor Cold War exhibition.', 'The spot itself is touristy — the free open-air panels and the BlackBox Cold War exhibit are more rewarding.'],
      es: ['Checkpoint Charlie', 'El antiguo paso entre el sector estadounidense y Berlín Este; hoy, una réplica de la caseta y una exposición al aire libre sobre la Guerra Fría.', 'El sitio es turístico: interesan más los paneles gratuitos y la exposición BlackBox.'],
      de: ['Checkpoint Charlie', 'Der ehemalige Grenzübergang zwischen amerikanischem Sektor und Ost-Berlin; heute ein nachgebautes Wachhäuschen und eine Freiluftausstellung zum Kalten Krieg.', 'Der Ort ist touristisch – lohnender sind die freien Tafeln und die BlackBox Kalter Krieg.'],
      fr: ['Checkpoint Charlie', 'L’ancien point de passage entre le secteur américain et Berlin-Est ; aujourd’hui une réplique de la guérite et une exposition en plein air sur la guerre froide.', 'Le lieu est touristique : les panneaux gratuits et l’exposition BlackBox sont plus riches.'],
      it: ['Checkpoint Charlie', 'L’ex valico tra il settore americano e Berlino Est; oggi una replica del casotto e una mostra all’aperto sulla Guerra fredda.', 'Il punto è turistico: più interessanti i pannelli gratuiti e la mostra BlackBox.'],
    }, { price: free, hours: 'always' }),
    P('berlin-wall-memorial', 'attraction', 52.5351, 13.3903, WALL, 4.7, 26000, ['history', 'museums'], {
      ru: ['Мемориал Берлинской стены (Бернауэр-штрассе)', 'Единственный участок с сохранённой «полосой смерти», сторожевой вышкой и окнами, из которых люди прыгали на Запад; смотровая площадка над стеной.', 'Начните с центра документации — с его крыши видно всю пограничную полосу.'],
      en: ['Berlin Wall Memorial (Bernauer Strasse)', 'The only stretch with the preserved “death strip”, a watchtower and the windows people jumped from to the West; a viewing platform above the wall.', 'Start at the documentation centre — its roof shows the whole border strip.'],
      es: ['Memorial del Muro de Berlín (Bernauer Strasse)', 'El único tramo con la “franja de la muerte” conservada, una torre de vigilancia y las ventanas desde las que se saltaba al Oeste; mirador sobre el muro.', 'Empieza en el centro de documentación: desde su azotea se ve toda la franja.'],
      de: ['Gedenkstätte Berliner Mauer (Bernauer Straße)', 'Der einzige Abschnitt mit erhaltenem Todesstreifen, Wachturm und Fenstern, aus denen Menschen in den Westen sprangen; Aussichtsplattform über der Mauer.', 'Im Dokumentationszentrum beginnen – vom Dach sieht man den ganzen Grenzstreifen.'],
      fr: ['Mémorial du mur de Berlin (Bernauer Strasse)', 'Le seul tronçon avec la « bande de la mort » préservée, un mirador et les fenêtres d’où l’on sautait vers l’Ouest ; belvédère au-dessus du mur.', 'Commencez au centre de documentation : de son toit, toute la bande frontière.'],
      it: ['Memoriale del Muro (Bernauer Strasse)', 'L’unico tratto con la “striscia della morte” conservata, una torretta e le finestre da cui si saltava a Ovest; piattaforma panoramica sul muro.', 'Inizia dal centro di documentazione: dal tetto si vede tutta la striscia.'],
    }, { price: free, hours: '08:00–22:00', address: 'Bernauer Straße 111' }),
    P('charlottenburg-palace', 'attraction', 52.5209, 13.2957, CITY, 4.6, 24000, ['castles', 'gardens', 'history'], {
      ru: ['Дворец Шарлоттенбург', 'Крупнейший дворец Берлина в стиле барокко с роскошными залами Фридриха Великого и большим парком у реки Шпрее.', 'Парк бесплатный — даже без дворца прогуляйтесь к Бельведеру и мавзолею.'],
      en: ['Charlottenburg Palace', 'Berlin’s largest palace, Baroque, with Frederick the Great’s sumptuous rooms and a large park by the Spree.', 'The park is free — even without the palace, walk to the Belvedere and the mausoleum.'],
      es: ['Palacio de Charlottenburg', 'El mayor palacio de Berlín, barroco, con las salas de Federico el Grande y un gran parque junto al Spree.', 'El parque es gratis: aunque no entres, pasea hasta el Belvedere y el mausoleo.'],
      de: ['Schloss Charlottenburg', 'Berlins größtes Schloss, barock, mit den prächtigen Räumen Friedrichs des Großen und einem großen Park an der Spree.', 'Der Park ist frei – auch ohne Schloss zum Belvedere und Mausoleum spazieren.'],
      fr: ['Château de Charlottenbourg', 'Le plus grand palais de Berlin, baroque, avec les salons de Frédéric le Grand et un vaste parc au bord de la Spree.', 'Le parc est gratuit : même sans le château, marchez jusqu’au Belvédère et au mausolée.'],
      it: ['Castello di Charlottenburg', 'Il più grande palazzo di Berlino, barocco, con le sale di Federico il Grande e un grande parco sulla Sprea.', 'Il parco è gratuito: anche senza il castello, passeggia fino al Belvedere e al mausoleo.'],
    }, { hours: '10:00–17:30', address: 'Spandauer Damm 10–22' }),
    P('tempelhofer-feld', 'nature', 52.4735, 13.404, FOREST, 4.7, 36000, ['nature', 'city'], {
      ru: ['Поле Темпельхоф', 'Бывший аэропорт, ставший огромным парком: по взлётным полосам катаются на роликах, кайтах и велосипедах, на поле — огороды и пикники.', 'Возьмите велосипед — на полосах можно разогнаться; на закате особенно красиво.'],
      en: ['Tempelhofer Feld', 'A former airport turned vast park: people skate, kite-skate and cycle on the runways, with community gardens and picnics on the field.', 'Bring a bike — the runways are made for speed; sunsets are lovely.'],
      es: ['Tempelhofer Feld', 'Un antiguo aeropuerto convertido en parque enorme: patines, kites y bicis en las pistas, huertos y pícnics en el campo.', 'Lleva bici: las pistas invitan a correr; los atardeceres son preciosos.'],
      de: ['Tempelhofer Feld', 'Ein ehemaliger Flughafen, heute riesiger Park: Inlineskaten, Kiten und Radeln auf den Pisten, Gemeinschaftsgärten und Picknick auf dem Feld.', 'Ein Rad mitnehmen – auf den Pisten lässt sich Gas geben; schöne Sonnenuntergänge.'],
      fr: ['Tempelhofer Feld', 'Un ancien aéroport devenu immense parc : rollers, kites et vélos sur les pistes, jardins partagés et pique-niques sur le terrain.', 'Venez à vélo, les pistes invitent à la vitesse ; couchers de soleil superbes.'],
      it: ['Tempelhofer Feld', 'Un ex aeroporto diventato enorme parco: pattini, kite e bici sulle piste, orti comuni e picnic sul prato.', 'Porta la bici: le piste invitano alla velocità; tramonti bellissimi.'],
    }, { price: free, hours: '06:00–21:30' }),
    P('gendarmenmarkt', 'attraction', 52.5137, 13.3927, CITY, 4.7, 28000, ['architecture', 'city'], {
      ru: ['Жандарменмаркт', 'Одна из самых красивых площадей Берлина: Концертхаус Шинкеля между Французским и Немецким соборами; зимой — рождественский рынок.', 'Поднимитесь на смотровую галерею Французского собора.'],
      en: ['Gendarmenmarkt', 'One of Berlin’s finest squares: Schinkel’s Konzerthaus between the French and German Cathedrals; a Christmas market in winter.', 'Climb to the viewing gallery of the French Cathedral.'],
      es: ['Gendarmenmarkt', 'Una de las plazas más bellas de Berlín: el Konzerthaus de Schinkel entre las catedrales francesa y alemana; mercado navideño en invierno.', 'Sube a la galería mirador de la catedral francesa.'],
      de: ['Gendarmenmarkt', 'Einer der schönsten Plätze Berlins: Schinkels Konzerthaus zwischen Französischem und Deutschem Dom; im Winter Weihnachtsmarkt.', 'Auf die Aussichtsgalerie des Französischen Doms steigen.'],
      fr: ['Gendarmenmarkt', 'L’une des plus belles places de Berlin : le Konzerthaus de Schinkel entre les cathédrales française et allemande ; marché de Noël l’hiver.', 'Montez à la galerie panoramique de la cathédrale française.'],
      it: ['Gendarmenmarkt', 'Una delle piazze più belle di Berlino: la Konzerthaus di Schinkel tra il Duomo francese e quello tedesco; d’inverno mercatino di Natale.', 'Sali alla galleria panoramica del Duomo francese.'],
    }, { spot: 'insta', price: free, hours: 'always' }),
    P('topography-of-terror', 'attraction', 52.5067, 13.3837, WALL, 4.7, 27000, ['history', 'museums'], {
      ru: ['Топография террора', 'Бесплатный музей на месте штабов гестапо и СС: документы о системе нацистского террора; рядом — сохранившийся участок Стены.', 'Вход бесплатный; заложите 1,5–2 часа.'],
      en: ['Topography of Terror', 'A free museum on the site of the Gestapo and SS headquarters documenting the Nazi terror system; a surviving stretch of the Wall stands alongside.', 'Entry is free; allow 1.5–2 hours.'],
      es: ['Topografía del Terror', 'Un museo gratuito en el lugar de los cuarteles de la Gestapo y las SS sobre el sistema de terror nazi; al lado, un tramo del Muro.', 'Entrada gratuita; dedica 1,5–2 horas.'],
      de: ['Topographie des Terrors', 'Ein kostenloses Museum auf dem Gelände der Gestapo- und SS-Zentralen über das NS-Terrorsystem; daneben ein erhaltener Mauerabschnitt.', 'Eintritt frei; 1,5–2 Stunden einplanen.'],
      fr: ['Topographie de la terreur', 'Un musée gratuit sur le site des QG de la Gestapo et de la SS, sur le système de terreur nazi ; un tronçon du Mur subsiste à côté.', 'Entrée libre ; comptez 1 h 30 à 2 h.'],
      it: ['Topografia del terrore', 'Un museo gratuito sul sito dei quartieri generali di Gestapo e SS sul sistema del terrore nazista; accanto un tratto del Muro.', 'Ingresso gratuito; calcola 1,5–2 ore.'],
    }, { price: free, hours: '10:00–20:00', address: 'Niederkirchnerstraße 8' }),
    P('sanssouci', 'attraction', 52.4044, 13.0386, CITY, 4.7, 41000, ['castles', 'gardens', 'unesco'], {
      ru: ['Сан-Суси в Потсдаме', 'Летний дворец Фридриха Великого на виноградных террасах в 40 минутах от Берлина; огромный парк с дворцами и павильонами — объект ЮНЕСКО.', 'Электричка S7 или поезд RE1 до Потсдама, затем автобус; билет во дворец по времени.'],
      en: ['Sanssouci, Potsdam', 'Frederick the Great’s summer palace on vine terraces 40 minutes from Berlin; a huge park of palaces and pavilions, UNESCO-listed.', 'Take the S7 or RE1 to Potsdam, then a bus; palace entry is timed.'],
      es: ['Sanssouci, Potsdam', 'El palacio de verano de Federico el Grande sobre terrazas de viñas a 40 minutos de Berlín; un gran parque de palacios, Patrimonio UNESCO.', 'S7 o RE1 hasta Potsdam y luego bus; la entrada al palacio es con hora.'],
      de: ['Sanssouci, Potsdam', 'Das Sommerschloss Friedrichs des Großen auf Weinbergterrassen, 40 Minuten von Berlin; ein riesiger Park mit Schlössern und Pavillons, UNESCO-Welterbe.', 'S7 oder RE1 nach Potsdam, dann Bus; Schlosseinlass mit Zeitfenster.'],
      fr: ['Sanssouci, Potsdam', 'Le palais d’été de Frédéric le Grand sur des terrasses de vigne, à 40 minutes de Berlin ; un immense parc de palais et pavillons classé UNESCO.', 'S7 ou RE1 jusqu’à Potsdam puis bus ; entrée horodatée.'],
      it: ['Sanssouci, Potsdam', 'Il palazzo estivo di Federico il Grande su terrazze di vigne a 40 minuti da Berlino; un enorme parco di palazzi e padiglioni, patrimonio UNESCO.', 'S7 o RE1 fino a Potsdam, poi bus; ingresso al palazzo a orario.'],
    }, { spot: 'insta', hours: '10:00–17:30' }),

    P('rutz', 'food', 52.5302, 13.3842, FOOD, 4.7, 1500, ['food', 'luxury'], {
      ru: ['Rutz', 'Ресторан шефа Марко Мюллера в Митте: «природная» немецкая кухня с ферментацией и копчением; единственные в Берлине три звезды MICHELIN (гид Германии 2026).', 'Внизу — винный бар Rutz Zollhaus проще; сам ресторан бронируйте заранее.'],
      en: ['Rutz', 'Chef Marco Müller’s restaurant in Mitte: nature-led German cooking with fermenting and smoking; Berlin’s only three MICHELIN stars (Germany guide 2026).', 'The wine bar downstairs is simpler; book the restaurant well ahead.'],
      es: ['Rutz', 'El restaurante de Marco Müller en Mitte: cocina alemana ligada a la naturaleza, con fermentados y ahumados; las únicas tres estrellas MICHELIN de Berlín (guía Alemania 2026).', 'Abajo hay un bar de vinos más sencillo; reserva el restaurante con tiempo.'],
      de: ['Rutz', 'Marco Müllers Restaurant in Mitte: naturverbundene deutsche Küche mit Fermentieren und Räuchern; Berlins einzige drei MICHELIN-Sterne (Guide Deutschland 2026).', 'Unten die einfachere Weinbar; das Restaurant früh buchen.'],
      fr: ['Rutz', 'Le restaurant du chef Marco Müller à Mitte : cuisine allemande ancrée dans la nature, fermentations et fumaisons ; les seules trois étoiles MICHELIN de Berlin (guide Allemagne 2026).', 'Le bar à vin en bas est plus simple ; réservez le restaurant longtemps à l’avance.'],
      it: ['Rutz', 'Il ristorante dello chef Marco Müller a Mitte: cucina tedesca legata alla natura con fermentazioni e affumicature; le uniche tre stelle MICHELIN di Berlino (guida Germania 2026).', 'Al piano terra un wine bar più semplice; prenota il ristorante con anticipo.'],
    }, { price: level(3), michelin: { award: 'star3', year: 2026 }, address: 'Chausseestraße 8', menu: [
      ['Tasting menu', undefined, 'дегустационный сет|tasting menu|menú degustación|Degustationsmenü|menu dégustation|menù degustazione'],
      ['German wine pairing', undefined, 'сопровождение немецкими винами|German wine pairing|maridaje de vinos alemanes|deutsche Weinbegleitung|accords vins allemands|abbinamento vini tedeschi'],
    ] }),
    P('tim-raue', 'food', 52.5068, 13.3911, FOOD, 4.6, 2400, ['food', 'luxury'], {
      ru: ['Restaurant Tim Raue', 'Ресторан шефа Тима Рауэ у Чекпойнт Чарли: азиатская кухня — японская, тайская, китайская — в немецком прочтении; две звезды MICHELIN (гид Германии 2026).', 'Попробуйте обеденный сет — он доступнее ужина.'],
      en: ['Restaurant Tim Raue', 'Chef Tim Raue’s restaurant near Checkpoint Charlie: Asian cooking — Japanese, Thai, Chinese — through a German lens; two MICHELIN stars (Germany guide 2026).', 'Try the lunch menu — more affordable than dinner.'],
      es: ['Restaurant Tim Raue', 'El restaurante de Tim Raue junto al Checkpoint Charlie: cocina asiática —japonesa, tailandesa, china— con mirada alemana; dos estrellas MICHELIN (guía Alemania 2026).', 'Prueba el menú de mediodía, más asequible.'],
      de: ['Restaurant Tim Raue', 'Tim Raues Restaurant nahe Checkpoint Charlie: asiatische Küche – japanisch, thailändisch, chinesisch – aus deutscher Sicht; zwei MICHELIN-Sterne (Guide Deutschland 2026).', 'Das Mittagsmenü probieren – günstiger als abends.'],
      fr: ['Restaurant Tim Raue', 'Le restaurant de Tim Raue près de Checkpoint Charlie : cuisine asiatique — japonaise, thaïe, chinoise — vue par un chef allemand ; deux étoiles MICHELIN (guide Allemagne 2026).', 'Essayez le menu déjeuner, plus abordable.'],
      it: ['Restaurant Tim Raue', 'Il ristorante di Tim Raue vicino al Checkpoint Charlie: cucina asiatica —giapponese, thai, cinese— in chiave tedesca; due stelle MICHELIN (guida Germania 2026).', 'Prova il menù pranzo, più accessibile.'],
    }, { price: level(3), michelin: { award: 'star2', year: 2026 }, address: 'Rudi-Dutschke-Straße 26', menu: [
      ['Tasting menu', undefined, 'дегустационный сет азиатской кухни|Asian tasting menu|menú degustación asiático|asiatisches Degustationsmenü|menu dégustation asiatique|menù degustazione asiatico'],
      ['Wasabi langoustine', undefined, 'лангустин с васаби — фирменное блюдо|signature wasabi langoustine|cigala al wasabi, plato estrella|Wasabi-Kaisergranat, Signature-Gericht|langoustine au wasabi, plat signature|scampo al wasabi, piatto simbolo'],
    ] }),
    P('curry-36', 'food', 52.4935, 13.388, FOOD, 4.4, 15000, ['food', 'streetfood'], {
      ru: ['Curry 36', 'Культовая будка на Мерингдамм в Кройцберге с карривурстом — нарезанной колбасой в соусе с карри — и картошкой фри.', 'Закажите «ohne Darm» (без оболочки) — по-восточноберлински — и картошку с майонезом.'],
      en: ['Curry 36', 'A cult stand on Mehringdamm in Kreuzberg serving currywurst — sliced sausage in curry ketchup — with fries.', 'Order it “ohne Darm” (skinless) East Berlin-style, with fries and mayo.'],
      es: ['Curry 36', 'Un puesto de culto en Mehringdamm, Kreuzberg, con currywurst —salchicha en salsa de curry— y patatas fritas.', 'Pídela “ohne Darm” (sin piel), al estilo del Este, con patatas y mayonesa.'],
      de: ['Curry 36', 'Kultbude am Mehringdamm in Kreuzberg mit Currywurst und Pommes.', '„Ohne Darm“ nach Ost-Berliner Art bestellen, dazu Pommes Schranke.'],
      fr: ['Curry 36', 'Une baraque culte du Mehringdamm à Kreuzberg pour la currywurst, saucisse tranchée au ketchup au curry, et les frites.', 'Demandez-la « ohne Darm » (sans peau) à la mode de l’Est, avec frites et mayo.'],
      it: ['Curry 36', 'Un chiosco di culto sul Mehringdamm a Kreuzberg con currywurst, salsiccia a fette in ketchup al curry, e patatine.', 'Ordinala “ohne Darm” (senza budello) alla berlinese est, con patatine e maionese.'],
    }, { price: level(1), address: 'Mehringdamm 36', menu: [
      ['Currywurst', undefined, 'колбаса в соусе карри|sausage in curry ketchup|salchicha en salsa de curry|Currywurst|saucisse au ketchup au curry|salsiccia al ketchup al curry'],
      ['Pommes rot-weiß', undefined, 'картофель фри с кетчупом и майонезом|fries with ketchup and mayo|patatas con kétchup y mayonesa|Pommes rot-weiß|frites ketchup-mayo|patatine con ketchup e maionese'],
    ] }),
    P('burgermeister', 'food', 52.501, 13.4417, BRIDGE, 4.5, 17000, ['food', 'streetfood'], {
      ru: ['Burgermeister (Шлесишес Тор)', 'Бургерная в бывшем общественном туалете XIX века под эстакадой метро U1 в Кройцберге.', 'После — пройдитесь к мосту Обербаумбрюке на закате.'],
      en: ['Burgermeister (Schlesisches Tor)', 'A burger joint in a 19th-century former public toilet under the U1 elevated line in Kreuzberg.', 'Afterwards walk to the Oberbaum Bridge at sunset.'],
      es: ['Burgermeister (Schlesisches Tor)', 'Una hamburguesería en un antiguo urinario público del siglo XIX bajo el metro elevado U1 en Kreuzberg.', 'Después camina al puente Oberbaum al atardecer.'],
      de: ['Burgermeister (Schlesisches Tor)', 'Ein Burgerladen in einem ehemaligen Toilettenhäuschen aus dem 19. Jh. unter der Hochbahn U1 in Kreuzberg.', 'Danach zur Oberbaumbrücke zum Sonnenuntergang.'],
      fr: ['Burgermeister (Schlesisches Tor)', 'Un burger installé dans d’anciennes toilettes publiques du XIXe sous le métro aérien U1 à Kreuzberg.', 'Ensuite, marchez jusqu’au pont Oberbaum au coucher du soleil.'],
      it: ['Burgermeister (Schlesisches Tor)', 'Un locale di hamburger in un ex bagno pubblico ottocentesco sotto la sopraelevata U1 a Kreuzberg.', 'Poi cammina fino al ponte Oberbaum al tramonto.'],
    }, { price: level(1), address: 'Oberbaumstraße 8', menu: [
      ['Meisterburger', undefined, 'фирменный бургер с беконом и луком|house burger with bacon and onion|hamburguesa de la casa con bacon y cebolla|Haus-Burger mit Bacon und Zwiebeln|burger maison bacon et oignons|burger della casa con bacon e cipolla'],
      ['Chili cheese fries', undefined, 'картофель фри с чили и сыром|chilli cheese fries|patatas con chili y queso|Chili-Käse-Pommes|frites chili-fromage|patatine con chili e formaggio'],
    ] }),
    P('five-elephant', 'food', 52.4955, 13.4377, CAFE, 4.7, 4300, ['food', 'nomads'], {
      ru: ['Five Elephant (Кройцберг)', 'Обжарщики и кофейня в Кройцберге, известные кофе специальной обжарки и, пожалуй, лучшим чизкейком Берлина.', 'Возьмите чизкейк и фильтр-кофе; рядом — парк Гёрлитцер.'],
      en: ['Five Elephant (Kreuzberg)', 'A roastery-café in Kreuzberg known for specialty coffee and arguably Berlin’s best cheesecake.', 'Get the cheesecake and a filter coffee; Görlitzer Park is nearby.'],
      es: ['Five Elephant (Kreuzberg)', 'Un tostador y café en Kreuzberg famoso por su café de especialidad y quizá la mejor tarta de queso de Berlín.', 'Pide la tarta de queso y un café de filtro; al lado está el parque Görlitzer.'],
      de: ['Five Elephant (Kreuzberg)', 'Rösterei und Café in Kreuzberg, bekannt für Specialty Coffee und wohl Berlins besten Käsekuchen.', 'Käsekuchen und Filterkaffee nehmen; der Görlitzer Park ist nah.'],
      fr: ['Five Elephant (Kreuzberg)', 'Torréfacteur-café de Kreuzberg réputé pour son café de spécialité et peut-être le meilleur cheesecake de Berlin.', 'Cheesecake et café filtre ; le parc Görlitzer est tout près.'],
      it: ['Five Elephant (Kreuzberg)', 'Torrefazione-caffè a Kreuzberg nota per il caffè specialty e forse la miglior cheesecake di Berlino.', 'Prendi cheesecake e caffè filtro; vicino c’è il Görlitzer Park.'],
    }, { price: level(1), address: 'Reichenberger Straße 101', menu: [
      ['Cheesecake', undefined, 'чизкейк|cheesecake|tarta de queso|Käsekuchen|cheesecake|cheesecake'],
      ['Filter coffee', undefined, 'фильтр-кофе собственной обжарки|house-roasted filter coffee|café de filtro de tueste propio|Filterkaffee aus eigener Röstung|café filtre torréfié maison|caffè filtro di torrefazione propria'],
    ] }),
    P('zeit-fuer-brot', 'food', 52.5285, 13.4061, CAFE, 4.6, 8100, ['food'], {
      ru: ['Zeit für Brot (Митте)', 'Органическая пекарня с открытым цехом, где на глазах скручивают огромные булочки с корицей — «Zimtschnecke».', 'Булочки выходят тёплыми утром — лучший завтрак перед прогулкой по Митте.'],
      en: ['Zeit für Brot (Mitte)', 'An organic bakery with an open bakehouse where giant cinnamon rolls — Zimtschnecken — are rolled before your eyes.', 'The rolls come out warm in the morning — the best breakfast before exploring Mitte.'],
      es: ['Zeit für Brot (Mitte)', 'Una panadería ecológica con obrador a la vista donde se enrollan enormes rollos de canela, Zimtschnecken.', 'Salen calientes por la mañana: el mejor desayuno antes de recorrer Mitte.'],
      de: ['Zeit für Brot (Mitte)', 'Eine Bio-Bäckerei mit offener Backstube, in der riesige Zimtschnecken vor den Augen gerollt werden.', 'Morgens kommen sie warm aus dem Ofen – das beste Frühstück vor einem Mitte-Bummel.'],
      fr: ['Zeit für Brot (Mitte)', 'Une boulangerie bio au fournil ouvert où l’on roule sous vos yeux d’énormes roulés à la cannelle, les Zimtschnecken.', 'Ils sortent chauds le matin : le meilleur petit-déjeuner avant Mitte.'],
      it: ['Zeit für Brot (Mitte)', 'Un forno biologico a vista dove si arrotolano enormi girelle alla cannella, le Zimtschnecken.', 'Escono calde al mattino: la colazione migliore prima di girare Mitte.'],
    }, { price: level(1), address: 'Alte Schönhauser Straße 4', menu: [
      ['Zimtschnecke', undefined, 'булочка с корицей|cinnamon roll|rollo de canela|Zimtschnecke|roulé à la cannelle|girella alla cannella'],
      ['Sourdough bread', undefined, 'хлеб на закваске|sourdough bread|pan de masa madre|Sauerteigbrot|pain au levain|pane a lievito madre'],
    ] }),
    P('prater-garten', 'food', 52.5398, 13.4113, FOREST, 4.4, 9800, ['food', 'nightlife', 'history'], {
      ru: ['Prater Garten', 'Старейший пивной сад Берлина (1837) в Пренцлауэр-Берге под каштанами: пиво, брецели и сосиски за длинными столами.', 'Работает в тёплый сезон; рядом по воскресеньям — блошиный рынок в Мауэрпарке.'],
      en: ['Prater Garten', 'Berlin’s oldest beer garden (1837) in Prenzlauer Berg under chestnut trees: beer, pretzels and sausages at long tables.', 'Open in the warm season; Mauerpark’s Sunday flea market is nearby.'],
      es: ['Prater Garten', 'La cervecería al aire libre más antigua de Berlín (1837), en Prenzlauer Berg bajo castaños: cerveza, pretzels y salchichas en mesas largas.', 'Abre en temporada cálida; cerca, el rastro dominical del Mauerpark.'],
      de: ['Prater Garten', 'Berlins ältester Biergarten (1837) in Prenzlauer Berg unter Kastanien: Bier, Brezeln und Würste an langen Tischen.', 'In der warmen Jahreszeit geöffnet; sonntags Flohmarkt im nahen Mauerpark.'],
      fr: ['Prater Garten', 'Le plus vieux Biergarten de Berlin (1837) à Prenzlauer Berg, sous les marronniers : bière, bretzels et saucisses sur de longues tables.', 'Ouvert à la belle saison ; marché aux puces du Mauerpark le dimanche tout près.'],
      it: ['Prater Garten', 'Il biergarten più antico di Berlino (1837) a Prenzlauer Berg sotto i castagni: birra, brezel e salsicce su lunghi tavoli.', 'Aperto nella bella stagione; vicino il mercatino domenicale del Mauerpark.'],
    }, { price: level(1), address: 'Kastanienallee 7–9', menu: [
      ['Prater Pils', undefined, 'фирменное пиво|house beer|cerveza de la casa|Hausbier|bière maison|birra della casa'],
      ['Brezel & Bratwurst', undefined, 'брецель и жареная колбаса|pretzel and grilled sausage|pretzel y salchicha asada|Brezel und Bratwurst|bretzel et saucisse grillée|brezel e salsiccia alla griglia'],
    ] }),
    P('cafe-am-neuen-see', 'food', 52.5101, 13.3449, FOREST, 4.4, 12000, ['food', 'nature'], {
      ru: ['Café am Neuen See', 'Пивной сад и ресторан на берегу озера в парке Тиргартен: пицца из печи, пиво и прокат лодок.', 'Летом возьмите лодку на полчаса до или после обеда.'],
      en: ['Café am Neuen See', 'A lakeside beer garden and restaurant in the Tiergarten: wood-fired pizza, beer and rowing-boat hire.', 'In summer rent a boat for half an hour before or after lunch.'],
      es: ['Café am Neuen See', 'Una cervecería y restaurante junto al lago en el Tiergarten: pizza al horno, cerveza y alquiler de barcas.', 'En verano alquila una barca media hora antes o después de comer.'],
      de: ['Café am Neuen See', 'Biergarten und Restaurant am See im Tiergarten: Pizza aus dem Holzofen, Bier und Ruderbootverleih.', 'Im Sommer vor oder nach dem Essen ein Boot für eine halbe Stunde leihen.'],
      fr: ['Café am Neuen See', 'Un Biergarten et restaurant au bord du lac du Tiergarten : pizza au feu de bois, bière et location de barques.', 'L’été, louez une barque une demi-heure avant ou après le repas.'],
      it: ['Café am Neuen See', 'Un biergarten e ristorante sul lago nel Tiergarten: pizza al forno a legna, birra e noleggio barche.', 'D’estate noleggia una barca per mezz’ora prima o dopo pranzo.'],
    }, { price: level(2), address: 'Lichtensteinallee 2', menu: [
      ['Pizza', undefined, 'пицца из дровяной печи|wood-fired pizza|pizza al horno de leña|Pizza aus dem Holzofen|pizza au feu de bois|pizza al forno a legna'],
      ['Weißbier', undefined, 'пшеничное пиво|wheat beer|cerveza de trigo|Weißbier|bière blanche|birra di frumento'],
    ] }),
    P('claerchens-ballhaus', 'food', 52.5265, 13.3969, CAFE, 4.4, 7100, ['food', 'nightlife', 'history'], {
      ru: ['Clärchens Ballhaus', 'Танцевальный зал 1913 года в Митте с рестораном и садом; наверху — облупленный Зеркальный зал, по вечерам танцы.', 'Летом ужинайте в саду; уточните программу танцев на сайте.'],
      en: ['Clärchens Ballhaus', 'A 1913 dance hall in Mitte with a restaurant and garden; upstairs the faded Mirror Hall, with dancing in the evenings.', 'Dine in the garden in summer; check the dance programme online.'],
      es: ['Clärchens Ballhaus', 'Un salón de baile de 1913 en Mitte con restaurante y jardín; arriba, el desvaído Salón de los Espejos, con baile por la noche.', 'En verano cena en el jardín; consulta el programa de baile.'],
      de: ['Clärchens Ballhaus', 'Ein Tanzsaal von 1913 in Mitte mit Restaurant und Garten; oben der verblichene Spiegelsaal, abends wird getanzt.', 'Im Sommer im Garten essen; Tanzprogramm online prüfen.'],
      fr: ['Clärchens Ballhaus', 'Une salle de bal de 1913 à Mitte avec restaurant et jardin ; à l’étage, la salle des Miroirs défraîchie, et l’on danse le soir.', 'L’été, dînez au jardin ; consultez le programme de danse.'],
      it: ['Clärchens Ballhaus', 'Una sala da ballo del 1913 a Mitte con ristorante e giardino; al piano di sopra la sbiadita Sala degli Specchi, la sera si balla.', 'D’estate cena in giardino; controlla il programma di ballo.'],
    }, { price: level(2), address: 'Auguststraße 24', menu: [
      ['Schnitzel', undefined, 'шницель с картофельным салатом|schnitzel with potato salad|escalope con ensalada de patata|Schnitzel mit Kartoffelsalat|escalope et salade de pommes de terre|cotoletta con insalata di patate'],
      ['Flammkuchen', undefined, 'тонкий пирог со сметаной, луком и беконом|thin tart with crème fraîche, onion and bacon|tarta fina con nata, cebolla y bacon|Flammkuchen mit Speck und Zwiebeln|tarte flambée|tarte flambée con panna, cipolla e pancetta'],
    ] }),
    P('kadewe-food-hall', 'food', 52.5016, 13.3411, CITY, 4.6, 21000, ['food', 'shopping'], {
      ru: ['Гастрономический этаж KaDeWe', 'Шестой этаж старейшего универмага Берлина (1907): десятки прилавков с деликатесами и барами — устрицы, колбасы, сладости.', 'Перекусите прямо у стойки, а на седьмом этаже — фудкорт под стеклянной крышей.'],
      en: ['KaDeWe Food Hall', 'The sixth floor of Berlin’s oldest department store (1907): dozens of deli counters and bars — oysters, sausages, sweets.', 'Eat right at a counter; the seventh floor has a food court under a glass roof.'],
      es: ['Planta gourmet del KaDeWe', 'La sexta planta de los grandes almacenes más antiguos de Berlín (1907): decenas de mostradores y barras —ostras, embutidos, dulces.', 'Come en la barra; la séptima planta tiene un patio de comidas bajo cúpula de cristal.'],
      de: ['KaDeWe Feinschmeckeretage', 'Die sechste Etage von Berlins ältestem Kaufhaus (1907): Dutzende Feinkosttheken und Bars – Austern, Würste, Süßes.', 'Direkt an der Theke essen; im siebten Stock Food Court unter Glasdach.'],
      fr: ['Étage gourmet du KaDeWe', 'Le sixième étage du plus vieux grand magasin de Berlin (1907) : des dizaines de comptoirs et bars, huîtres, charcuteries, douceurs.', 'Mangez au comptoir ; au septième, food court sous verrière.'],
      it: ['Piano gastronomico del KaDeWe', 'Il sesto piano del più antico grande magazzino di Berlino (1907): decine di banchi gastronomici e bar, ostriche, salumi, dolci.', 'Mangia al banco; al settimo piano food court sotto un tetto di vetro.'],
    }, { price: level(2), address: 'Tauentzienstraße 21–24', menu: [
      ['Oysters', undefined, 'устрицы у стойки|oysters at the counter|ostras en la barra|Austern an der Theke|huîtres au comptoir|ostriche al banco'],
      ['German sausages', undefined, 'немецкие колбаски|German sausages|salchichas alemanas|deutsche Würste|saucisses allemandes|salsicce tedesche'],
    ] }),
  ],
  routes: [
    D(['reichstag', '=berlin-brandenburg-gate', 'holocaust-memorial', 'gendarmenmarkt', '=berlin-cafe-einstein', 'neues-museum', '=berlin-tv-tower', '=berlin-hackesche-hoefe', 'rutz'],
      'Рейхстаг, Бранденбургские ворота и Музейный остров|Reichstag, Brandenburg Gate and Museum Island|Reichstag, Puerta de Brandeburgo e Isla de los Museos|Reichstag, Brandenburger Tor und Museumsinsel|Reichstag, porte de Brandebourg et île aux Musées|Reichstag, Porta di Brandeburgo e Isola dei Musei'),
    D(['zeit-fuer-brot', 'berlin-wall-memorial', 'prater-garten', 'topography-of-terror', 'checkpoint-charlie', 'tim-raue'],
      'История Стены и холодной войны|The Wall and the Cold War|El Muro y la Guerra Fría|Mauer und Kalter Krieg|Le Mur et la guerre froide|Il Muro e la Guerra fredda'),
    D(['charlottenburg-palace', 'cafe-am-neuen-see', 'tempelhofer-feld', 'curry-36', '=berlin-east-side-gallery', '=berlin-oberbaum-bridge', 'burgermeister'],
      'Шарлоттенбург, Темпельхоф и Кройцберг|Charlottenburg, Tempelhof and Kreuzberg|Charlottenburg, Tempelhof y Kreuzberg|Charlottenburg, Tempelhof und Kreuzberg|Charlottenbourg, Tempelhof et Kreuzberg|Charlottenburg, Tempelhof e Kreuzberg'),
  ],
};

export default pack;
