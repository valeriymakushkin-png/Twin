import type { CityPack } from '../types';
import { free, level, makeDay, makePlace } from './_kit.ts';

const P = makePlace('ho-chi-minh-city');
const D = makeDay('ho-chi-minh-city');
const CITY = 'aVbSvuJTUxA';
const STREET = 'xoPP0JV8i20';
const FOOD = 'UtbUQWxElVs';
const NIGHT = 'FDhXNHZbA9I';
const PAGODA = 'n7q0WYfmQLo';
const CHURCH = 'VzDKykXWxg4';

const pack: CityPack = {
  country: 'VN',
  city: 'ho-chi-minh-city',
  places: [
    P('independence-palace', 'attraction', 10.777, 106.6953, CITY, 4.4, 29800, ['history', 'architecture'], {
      ru: ['Дворец Независимости', 'Модернистский дворец президента Южного Вьетнама: в 1975 году в его ворота въехал танк, и война закончилась. Внутри — залы 1960-х и бункер.', 'Спуститесь в подвальный командный бункер с картами и рациями.'],
      en: ['Independence Palace', 'South Vietnam’s modernist presidential palace: a tank rolled through its gates in 1975 and the war ended. Inside are 1960s halls and a bunker.', 'Go down to the basement command bunker with its maps and radios.'],
      es: ['Palacio de la Independencia', 'El palacio presidencial modernista de Vietnam del Sur: en 1975 un tanque cruzó sus puertas y acabó la guerra. Dentro, salas de los 60 y un búnker.', 'Baja al búnker de mando del sótano con mapas y radios.'],
      de: ['Unabhängigkeitspalast', 'Der modernistische Präsidentenpalast Südvietnams: 1975 fuhr ein Panzer durch das Tor und der Krieg endete. Innen Säle der 1960er und ein Bunker.', 'In den Kommandobunker im Keller mit Karten und Funkgeräten hinabsteigen.'],
      fr: ['Palais de l’Indépendance', 'Le palais présidentiel moderniste du Sud-Vietnam : en 1975 un char en franchit les grilles et la guerre prit fin. Salles des années 1960 et bunker.', 'Descendez au bunker de commandement avec ses cartes et radios.'],
      it: ['Palazzo dell’Indipendenza', 'Il palazzo presidenziale modernista del Vietnam del Sud: nel 1975 un carro armato ne sfondò i cancelli e la guerra finì. Sale anni ’60 e un bunker.', 'Scendi nel bunker di comando con mappe e radio.'],
    }, { hours: '08:00–17:00', address: '135 Nam Ky Khoi Nghia' }),
    P('saigon-opera-house', 'attraction', 10.7765, 106.7031, CITY, 4.5, 12900, ['architecture', 'art'], {
      ru: ['Сайгонский оперный театр', 'Французский театр 1900 года в стиле «бель-эпок» на Донгкхой; вечерами здесь идут шоу «A O Show» и «Teh Dar» с бамбуковым цирком.', 'Билеты на шоу дешевле в кассе днём.'],
      en: ['Saigon Opera House', 'A 1900 Belle Époque French theatre on Dong Khoi, home to the bamboo-circus shows A O Show and Teh Dar in the evenings.', 'Show tickets are cheaper at the box office during the day.'],
      es: ['Ópera de Saigón', 'Un teatro francés Belle Époque de 1900 en Dong Khoi, con los espectáculos de circo de bambú A O Show y Teh Dar por la noche.', 'Las entradas son más baratas en taquilla durante el día.'],
      de: ['Oper Saigon', 'Ein französisches Belle-Époque-Theater von 1900 an der Dong Khoi, abends mit den Bambuszirkus-Shows A O Show und Teh Dar.', 'Tickets sind tagsüber an der Kasse günstiger.'],
      fr: ['Opéra de Saïgon', 'Un théâtre français Belle Époque de 1900 sur Dong Khoi, avec le soir les spectacles de cirque en bambou A O Show et Teh Dar.', 'Billets moins chers au guichet en journée.'],
      it: ['Teatro dell’Opera di Saigon', 'Un teatro francese Belle Époque del 1900 su Dong Khoi, la sera con gli spettacoli di circo di bambù A O Show e Teh Dar.', 'I biglietti costano meno in biglietteria di giorno.'],
    }, { address: '7 Cong Truong Lam Son' }),
    P('nguyen-hue', 'attraction', 10.774, 106.7038, NIGHT, 4.5, 24600, ['city', 'nightlife', 'photo'], {
      ru: ['Пешеходная улица Нгуенхюэ', 'Широкий бульвар от мэрии к реке: вечером тут гуляет весь город, поют фонтаны, а над ним — «кафе-апартаменты».', 'Приходите после заката, когда подсвечивают мэрию.'],
      en: ['Nguyen Hue Walking Street', 'A broad boulevard from City Hall to the river where the whole city strolls at night, fountains play and café-apartments rise above.', 'Come after sunset, when City Hall is floodlit.'],
      es: ['Calle peatonal Nguyen Hue', 'Un amplio bulevar del Ayuntamiento al río donde pasea toda la ciudad de noche, con fuentes y edificios de cafés.', 'Ven tras la puesta de sol, con el Ayuntamiento iluminado.'],
      de: ['Fußgängerzone Nguyen Hue', 'Ein breiter Boulevard vom Rathaus zum Fluss, auf dem abends die ganze Stadt flaniert, mit Fontänen und Café-Apartments.', 'Nach Sonnenuntergang kommen, wenn das Rathaus angestrahlt ist.'],
      fr: ['Rue piétonne Nguyen Hue', 'Un large boulevard de l’hôtel de ville au fleuve où toute la ville flâne le soir, fontaines et immeubles de cafés.', 'Venez après le coucher du soleil, l’hôtel de ville illuminé.'],
      it: ['Via pedonale Nguyen Hue', 'Un ampio viale dal Municipio al fiume dove la sera passeggia tutta la città, con fontane e palazzi di caffè.', 'Vieni dopo il tramonto, con il Municipio illuminato.'],
    }, { price: free, hours: 'always' }),
    P('bitexco-skydeck', 'attraction', 10.7717, 106.7044, CITY, 4.3, 9800, ['views', 'city'], {
      ru: ['Смотровая Bitexco Saigon Skydeck', 'Площадка на 49-м этаже башни-«бутона лотоса» с видом на изгиб реки Сайгон.', 'Вместо билета можно взять коктейль в баре EON выше этажом — вид почти тот же.'],
      en: ['Bitexco Saigon Skydeck', 'A 49th-floor deck in the lotus-bud tower overlooking the bend of the Saigon River.', 'Instead of a ticket, have a drink at EON one floor up — almost the same view.'],
      es: ['Bitexco Saigon Skydeck', 'Un mirador en la planta 49 de la torre “capullo de loto” sobre el meandro del río Saigón.', 'En vez de entrada, toma algo en EON un piso más arriba: casi la misma vista.'],
      de: ['Bitexco Saigon Skydeck', 'Eine Plattform im 49. Stock des „Lotusknospen“-Turms mit Blick auf die Flussbiegung des Saigon.', 'Statt eines Tickets einen Drink im EON ein Stockwerk höher – fast derselbe Blick.'],
      fr: ['Bitexco Saigon Skydeck', 'Une terrasse au 49e étage de la tour « bouton de lotus » face au méandre de la rivière Saïgon.', 'Au lieu d’un billet, prenez un verre à l’EON un étage au-dessus : vue presque identique.'],
      it: ['Bitexco Saigon Skydeck', 'Una terrazza al 49° piano della torre “bocciolo di loto” sull’ansa del fiume Saigon.', 'Invece del biglietto prendi un drink all’EON un piano sopra: vista quasi uguale.'],
    }, { hours: '09:30–21:30' }),
    P('thien-hau-temple', 'attraction', 10.7531, 106.6612, PAGODA, 4.5, 6300, ['temples', 'culture', 'photo'], {
      ru: ['Храм Тхьенхау', 'Кантонский храм богини моря XVIII века в Чолоне: керамические фигуры на крыше и гигантские спирали благовоний под потолком.', 'Снимайте лучи света сквозь дым спиралей утром.'],
      en: ['Thien Hau Temple', 'An 18th-century Cantonese temple to the sea goddess in Cholon: ceramic figures on the roof and giant incense coils hanging overhead.', 'Shoot the morning light through the smoke of the coils.'],
      es: ['Templo Thien Hau', 'Un templo cantonés del siglo XVIII a la diosa del mar en Cholon: figuras de cerámica en el tejado y enormes espirales de incienso.', 'Fotografía la luz de la mañana entre el humo de las espirales.'],
      de: ['Thien-Hau-Tempel', 'Ein kantonesischer Tempel der Meeresgöttin aus dem 18. Jahrhundert in Cholon: Keramikfiguren auf dem Dach und riesige Räucherspiralen.', 'Morgens das Licht durch den Rauch der Spiralen fotografieren.'],
      fr: ['Temple Thien Hau', 'Un temple cantonais du XVIIIe siècle dédié à la déesse de la mer à Cholon : figurines de céramique sur le toit et spirales d’encens géantes.', 'Photographiez la lumière du matin dans la fumée des spirales.'],
      it: ['Tempio Thien Hau', 'Un tempio cantonese del XVIII secolo alla dea del mare a Cholon: figure di ceramica sul tetto e enormi spirali d’incenso.', 'Fotografa la luce del mattino nel fumo delle spirali.'],
    }, { spot: 'insta', price: free, address: '710 Nguyen Trai, District 5' }),
    P('binh-tay-market', 'attraction', 10.7495, 106.6511, STREET, 4.2, 9700, ['market', 'food', 'culture'], {
      ru: ['Рынок Биньтэй', 'Главный оптовый рынок Чолона (Чайнатауна) в здании 1930 года с часовой башней и внутренним двором.', 'На фуд-корте внутри попробуйте «хутьеу» — суп с лапшой по-кхмерски.'],
      en: ['Binh Tay Market', 'Cholon’s main wholesale market in a 1930 building with a clock tower and inner courtyard.', 'At the food stalls inside, try hủ tiếu noodle soup.'],
      es: ['Mercado Binh Tay', 'El gran mercado mayorista de Cholon, en un edificio de 1930 con torre del reloj y patio interior.', 'En los puestos de comida prueba la sopa de fideos hủ tiếu.'],
      de: ['Binh-Tay-Markt', 'Cholons wichtigster Großmarkt in einem Bau von 1930 mit Uhrturm und Innenhof.', 'An den Essständen innen Hủ-tiếu-Nudelsuppe probieren.'],
      fr: ['Marché Binh Tay', 'Le grand marché de gros de Cholon, dans un bâtiment de 1930 avec tour d’horloge et cour intérieure.', 'Aux stands intérieurs, goûtez la soupe de nouilles hủ tiếu.'],
      it: ['Mercato Binh Tay', 'Il grande mercato all’ingrosso di Cholon, in un edificio del 1930 con torre dell’orologio e cortile.', 'Ai banchi interni prova la zuppa di noodle hủ tiếu.'],
    }, { price: free }),
    P('fine-arts-museum', 'attraction', 10.7698, 106.6993, CITY, 4.4, 6900, ['museums', 'art', 'architecture'], {
      ru: ['Музей изобразительных искусств', 'Жёлтый особняк китайского магната 1930-х с витражами и плиткой; внутри — вьетнамский лак, пропагандистский плакат и тямская скульптура.', 'Сам особняк фотогеничен не меньше коллекции — загляните на лестницу.'],
      en: ['Fine Arts Museum', 'A yellow 1930s mansion of a Chinese tycoon with stained glass and tiles, holding Vietnamese lacquer, propaganda posters and Cham sculpture.', 'The mansion is as photogenic as the art — don’t miss the staircase.'],
      es: ['Museo de Bellas Artes', 'Una mansión amarilla de un magnate chino de los años 30 con vidrieras y azulejos: laca vietnamita, carteles de propaganda y escultura cham.', 'La casa es tan fotogénica como la colección: no te pierdas la escalera.'],
      de: ['Museum der Schönen Künste', 'Eine gelbe Villa eines chinesischen Magnaten aus den 1930ern mit Buntglas und Fliesen: vietnamesischer Lack, Propagandaplakate und Cham-Skulpturen.', 'Die Villa ist so fotogen wie die Kunst – das Treppenhaus nicht verpassen.'],
      fr: ['Musée des Beaux-Arts', 'Une demeure jaune d’un magnat chinois des années 1930, vitraux et carreaux : laque vietnamienne, affiches de propagande et sculpture cham.', 'La maison est aussi photogénique que la collection : ne manquez pas l’escalier.'],
      it: ['Museo di Belle Arti', 'Una villa gialla di un magnate cinese degli anni ’30 con vetrate e piastrelle: lacca vietnamita, manifesti di propaganda e scultura cham.', 'La villa è fotogenica quanto la collezione: non perdere lo scalone.'],
    }, { hours: '08:00–17:00', address: '97A Pho Duc Chinh' }),
    P('tan-dinh-church', 'attraction', 10.7883, 106.6905, CHURCH, 4.5, 8800, ['architecture', 'photo'], {
      ru: ['Розовая церковь Тандинь', 'Ярко-розовая неоготическая церковь 1876 года — самое «инстаграмное» здание Сайгона.', 'Лучший кадр — с противоположной стороны улицы Хайбачынг утром.'],
      en: ['Tan Dinh Pink Church', 'A bright pink 1876 neo-Gothic church — Saigon’s most photographed facade.', 'The best frame is from across Hai Ba Trung street in the morning.'],
      es: ['Iglesia rosa de Tan Dinh', 'Una iglesia neogótica rosa intenso de 1876, la fachada más fotografiada de Saigón.', 'El mejor encuadre es desde el otro lado de Hai Ba Trung por la mañana.'],
      de: ['Rosa Kirche Tan Dinh', 'Eine knallrosa neogotische Kirche von 1876 – Saigons meistfotografierte Fassade.', 'Das beste Bild gelingt morgens von der anderen Seite der Hai Ba Trung.'],
      fr: ['Église rose de Tan Dinh', 'Une église néogothique rose vif de 1876, la façade la plus photographiée de Saïgon.', 'Le meilleur cadrage : depuis le trottoir d’en face sur Hai Ba Trung, le matin.'],
      it: ['Chiesa rosa di Tan Dinh', 'Una chiesa neogotica rosa acceso del 1876, la facciata più fotografata di Saigon.', 'L’inquadratura migliore è dall’altro lato di Hai Ba Trung al mattino.'],
    }, { spot: 'insta', price: free, address: '289 Hai Ba Trung' }),
    P('cu-chi-tunnels', 'attraction', 11.1437, 106.4627, CITY, 4.5, 31400, ['history', 'adventure'], {
      ru: ['Туннели Кучи', 'Подземный город партизан длиной больше 200 км: можно проползти по расширенному для туристов участку и увидеть ловушки и подземные кухни.', 'Езжайте в Бенжинь (а не Бендыок) — там меньше людей; дорога около 1,5 часа.'],
      en: ['Cu Chi Tunnels', 'A guerrilla underground city over 200 km long: crawl a section widened for visitors and see traps and hidden kitchens.', 'Go to Ben Dinh rather than Ben Duoc for fewer crowds; about 1.5 hours each way.'],
      es: ['Túneles de Cu Chi', 'Una ciudad subterránea guerrillera de más de 200 km: recorre un tramo ensanchado para visitantes y ve trampas y cocinas ocultas.', 'Hay menos gente en Ben Dinh que en Ben Duoc; unas 1,5 horas por trayecto.'],
      de: ['Tunnel von Cu Chi', 'Eine unterirdische Guerillastadt von über 200 km: durch einen für Besucher erweiterten Abschnitt kriechen, Fallen und versteckte Küchen sehen.', 'Ben Dinh statt Ben Duoc wählen – weniger Andrang; etwa 1,5 Stunden pro Weg.'],
      fr: ['Tunnels de Cu Chi', 'Une ville souterraine de guérilla de plus de 200 km : rampez dans une section élargie, voyez pièges et cuisines cachées.', 'Ben Dinh est moins fréquenté que Ben Duoc ; environ 1 h 30 de trajet.'],
      it: ['Tunnel di Cu Chi', 'Una città sotterranea della guerriglia lunga oltre 200 km: striscia in un tratto allargato e vedi trappole e cucine nascoste.', 'Ben Dinh è meno affollato di Ben Duoc; circa 1 ora e mezza per tratta.'],
    }, { hours: '07:00–17:00' }),
    P('city-museum', 'attraction', 10.776, 106.6996, CITY, 4.4, 5200, ['museums', 'history', 'photo'], {
      ru: ['Музей Хошимина', 'Неоклассический дворец 1890 года, где рассказывают историю Сайгона; молодожёны съезжаются сюда на свадебные фотосессии.', 'Подойдите к винтовой лестнице и в сад с военной техникой во дворе.'],
      en: ['Ho Chi Minh City Museum', 'An 1890 neoclassical palace telling Saigon’s story; newlyweds flock here for wedding shoots.', 'Head for the spiral staircase and the courtyard of old military hardware.'],
      es: ['Museo de Ciudad Ho Chi Minh', 'Un palacio neoclásico de 1890 que cuenta la historia de Saigón; los recién casados vienen a hacerse fotos.', 'Busca la escalera de caracol y el patio con material militar.'],
      de: ['Museum Ho-Chi-Minh-Stadt', 'Ein neoklassizistischer Palast von 1890 zur Geschichte Saigons; Brautpaare kommen hier zum Fotoshooting.', 'Zur Wendeltreppe und in den Hof mit alter Militärtechnik gehen.'],
      fr: ['Musée de Hô-Chi-Minh-Ville', 'Un palais néoclassique de 1890 qui raconte Saïgon ; les jeunes mariés y viennent faire leurs photos.', 'Allez voir l’escalier en colimaçon et la cour au matériel militaire.'],
      it: ['Museo di Ho Chi Minh City', 'Un palazzo neoclassico del 1890 che racconta Saigon; gli sposi vengono qui per le foto di nozze.', 'Cerca la scala a chiocciola e il cortile con i mezzi militari.'],
    }, { hours: '08:00–17:00', address: '65 Ly Tu Trong' }),

    P('anan-saigon', 'food', 10.7714, 106.7038, FOOD, 4.6, 1900, ['food', 'nightlife'], {
      ru: ['Ănăn Saigon', 'Шеф Питер Куонг Франклин переосмысляет уличную еду Сайгона в узком доме у старого рынка; одна звезда Мишлен 2026.', 'Возьмите «баньми за 100 долларов» с фуа-гра — или более скромный сет; на крыше бар Nhậu Nhậu.'],
      en: ['Ănăn Saigon', 'Chef Peter Cuong Franklin reinvents Saigon street food in a narrow house by the old market; one MICHELIN star in 2026.', 'Try the famous luxury bánh mì or a lighter set; the rooftop bar Nhậu Nhậu is upstairs.'],
      es: ['Ănăn Saigon', 'El chef Peter Cuong Franklin reinventa la comida callejera de Saigón en una casa estrecha junto al viejo mercado; una estrella MICHELIN en 2026.', 'Prueba el famoso bánh mì de lujo o un menú más ligero; arriba está el bar Nhậu Nhậu.'],
      de: ['Ănăn Saigon', 'Chef Peter Cuong Franklin interpretiert Saigons Streetfood in einem schmalen Haus am alten Markt neu; ein MICHELIN-Stern 2026.', 'Das berühmte Luxus-Bánh-mì oder ein leichteres Menü probieren; oben ist die Bar Nhậu Nhậu.'],
      fr: ['Ănăn Saigon', 'Le chef Peter Cuong Franklin réinvente la cuisine de rue de Saïgon dans une maison étroite près du vieux marché ; une étoile MICHELIN en 2026.', 'Goûtez le fameux bánh mì de luxe ou un menu plus léger ; bar Nhậu Nhậu sur le toit.'],
      it: ['Ănăn Saigon', 'Lo chef Peter Cuong Franklin reinventa lo street food di Saigon in una casa stretta vicino al vecchio mercato; una stella MICHELIN nel 2026.', 'Prova il famoso bánh mì di lusso o un menu più leggero; sopra c’è il bar Nhậu Nhậu.'],
    }, { price: level(3), michelin: { award: 'star1', year: 2026 }, address: '89 Ton That Dam' }),
    P('banh-xeo-46a', 'food', 10.7907, 106.6913, FOOD, 4.1, 9200, ['food', 'streetfood'], {
      ru: ['Bánh Xèo 46A', 'Огромные хрустящие блинчики из рисовой муки с куркумой, креветками и свининой; заворачивают в листья горчицы и салата. В подборке Bib Gourmand гида Мишлен.', 'Отломите кусок, заверните в зелень и макайте в рыбный соус.'],
      en: ['Bánh Xèo 46A', 'Giant crisp turmeric rice crêpes with prawns and pork, wrapped in mustard and lettuce leaves; on the MICHELIN Bib Gourmand list.', 'Tear off a piece, wrap it in greens and dip in fish sauce.'],
      es: ['Bánh Xèo 46A', 'Enormes crepes crujientes de arroz con cúrcuma, gambas y cerdo, envueltos en hojas de mostaza y lechuga; Bib Gourmand MICHELIN.', 'Arranca un trozo, envuélvelo en hojas y mójalo en salsa de pescado.'],
      de: ['Bánh Xèo 46A', 'Riesige knusprige Kurkuma-Reispfannkuchen mit Garnelen und Schwein, in Senf- und Salatblätter gewickelt; MICHELIN Bib Gourmand.', 'Ein Stück abbrechen, in Grün wickeln und in Fischsauce tunken.'],
      fr: ['Bánh Xèo 46A', 'D’immenses crêpes de riz croustillantes au curcuma, crevettes et porc, roulées dans des feuilles de moutarde et de laitue ; Bib Gourmand MICHELIN.', 'Prenez un morceau, roulez-le dans les feuilles et trempez dans la sauce poisson.'],
      it: ['Bánh Xèo 46A', 'Enormi crêpe croccanti di riso alla curcuma con gamberi e maiale, avvolte in foglie di senape e lattuga; Bib Gourmand MICHELIN.', 'Stacca un pezzo, avvolgilo nelle foglie e intingi nella salsa di pesce.'],
    }, { price: level(1), michelin: { award: 'bib', year: 2026 }, address: '46A Dinh Cong Trang', menu: [
      ['Bánh xèo', 130000, 'хрустящий блинчик с креветками и свининой|crisp crêpe with prawns and pork|crepe crujiente de gambas y cerdo|knuspriger Pfannkuchen mit Garnelen und Schwein|crêpe croustillante crevettes-porc|crêpe croccante con gamberi e maiale'],
      ['Gỏi cuốn', 25000, 'свежие рулетики в рисовой бумаге|fresh rice-paper rolls|rollitos frescos de papel de arroz|frische Reispapierrollen|rouleaux de printemps frais|involtini freschi di carta di riso'],
    ] }),
    P('pho-le', 'food', 10.757, 106.6786, FOOD, 4.3, 8100, ['food', 'streetfood'], {
      ru: ['Phở Lệ', 'Сайгонский фо в Чолоне: бульон слаще и ароматнее ханойского, с ростками сои и тайским базиликом; в подборке Bib Gourmand.', 'Возьмите «тай-нам-гау-бо-вьен» — всё сразу, и добавьте лайм.'],
      en: ['Phở Lệ', 'Saigon-style phở in Cholon: a sweeter, more aromatic broth than Hanoi’s, with bean sprouts and Thai basil; on the Bib Gourmand list.', 'Order the combo with rare beef, brisket and meatballs, plus lime.'],
      es: ['Phở Lệ', 'Phở al estilo de Saigón en Cholon: caldo más dulce y aromático que el de Hanói, con brotes de soja y albahaca thai; Bib Gourmand.', 'Pide el combinado de ternera, falda y albóndigas, con lima.'],
      de: ['Phở Lệ', 'Phở nach Saigoner Art in Cholon: süßere, aromatischere Brühe als in Hanoi, mit Sojasprossen und Thai-Basilikum; Bib Gourmand.', 'Die Kombination aus rohem Rind, Brust und Bällchen bestellen, dazu Limette.'],
      fr: ['Phở Lệ', 'Phở façon Saïgon à Cholon : bouillon plus doux et parfumé qu’à Hanoï, pousses de soja et basilic thaï ; Bib Gourmand.', 'Prenez le mélange bœuf saignant, poitrine et boulettes, avec du citron vert.'],
      it: ['Phở Lệ', 'Phở in stile Saigon a Cholon: brodo più dolce e aromatico di quello di Hanoi, con germogli di soia e basilico thai; Bib Gourmand.', 'Prendi il misto di manzo crudo, punta e polpette, con lime.'],
    }, { price: level(1), michelin: { award: 'bib', year: 2026 }, address: '413 Nguyen Trai, District 5', menu: [
      ['Phở đặc biệt', 95000, 'фо «всё включено»: говядина, грудинка, фрикадельки|phở special: rare beef, brisket, meatballs|phở especial: ternera, falda y albóndigas|Phở spezial: Rind, Brust, Bällchen|phở spécial : bœuf, poitrine, boulettes|phở speciale: manzo, punta, polpette'],
      ['Phở tái', 80000, 'фо с сырой говядиной|phở with rare beef|phở con ternera poco hecha|Phở mit rohem Rind|phở au bœuf saignant|phở con manzo al sangue'],
    ] }),
    P('com-tam-ba-ghien', 'food', 10.7984, 106.6739, FOOD, 4.2, 7700, ['food', 'streetfood'], {
      ru: ['Cơm Tấm Ba Ghiền', 'Знаменитый «ком там» — рис из дроблёных зёрен с гигантской свиной отбивной на углях, яичным суфле и шкуркой.', 'Порция большая — одной хватает на двоих; работает с утра.'],
      en: ['Cơm Tấm Ba Ghiền', 'Famous cơm tấm — broken rice with a giant charcoal pork chop, egg meatloaf and shredded pork skin.', 'Portions are huge — one can feed two; open from the morning.'],
      es: ['Cơm Tấm Ba Ghiền', 'El famoso cơm tấm: arroz partido con una chuleta de cerdo gigante a la brasa, pastel de huevo y piel de cerdo.', 'Raciones enormes, una sirve para dos; abre desde la mañana.'],
      de: ['Cơm Tấm Ba Ghiền', 'Berühmtes Cơm tấm – Bruchreis mit riesigem Holzkohle-Kotelett, Eierfleischkuchen und Schweinehaut.', 'Riesige Portionen – eine reicht für zwei; ab morgens geöffnet.'],
      fr: ['Cơm Tấm Ba Ghiền', 'Le fameux cơm tấm : riz brisé, énorme côte de porc au charbon, flan aux œufs et couenne émincée.', 'Portions énormes, une suffit pour deux ; ouvert dès le matin.'],
      it: ['Cơm Tấm Ba Ghiền', 'Il famoso cơm tấm: riso spezzato con una braciola di maiale gigante alla brace, sformato d’uovo e cotenna.', 'Porzioni enormi, una basta per due; aperto dal mattino.'],
    }, { price: level(1), address: '84 Dang Van Ngu, Phu Nhuan', menu: [
      ['Cơm tấm sườn', 75000, 'рис с отбивной на углях|broken rice with grilled pork chop|arroz partido con chuleta a la brasa|Bruchreis mit gegrilltem Kotelett|riz brisé, côte de porc grillée|riso spezzato con braciola alla brace'],
      ['Cơm tấm đặc biệt', 105000, 'всё сразу: отбивная, суфле, шкурка, яйцо|the works: chop, egg loaf, skin, fried egg|completo: chuleta, pastel, piel y huevo|alles: Kotelett, Eierkuchen, Haut, Spiegelei|complet : côte, flan, couenne, œuf|completo: braciola, sformato, cotenna, uovo'],
    ] }),
    P('cuc-gach-quan', 'food', 10.7921, 106.6911, FOOD, 4.4, 6400, ['food', 'architecture'], {
      ru: ['Cục Gạch Quán', 'Домашняя вьетнамская кухня в двух старых виллах, обставленных деревенской мебелью и посудой бабушкиного времени.', 'Закажите тофу с лемонграссом и рыбу в карамельном соусе в глиняном горшке.'],
      en: ['Cục Gạch Quán', 'Vietnamese home cooking in two old villas furnished with country furniture and grandmother-era crockery.', 'Order lemongrass tofu and caramel fish in a clay pot.'],
      es: ['Cục Gạch Quán', 'Cocina casera vietnamita en dos villas antiguas con muebles rústicos y vajilla de época.', 'Pide tofu con limoncillo y pescado al caramelo en olla de barro.'],
      de: ['Cục Gạch Quán', 'Vietnamesische Hausmannskost in zwei alten Villen mit Landhausmöbeln und Geschirr aus Großmutters Zeiten.', 'Zitronengras-Tofu und Karamellfisch im Tontopf bestellen.'],
      fr: ['Cục Gạch Quán', 'Cuisine familiale vietnamienne dans deux vieilles villas, meubles campagnards et vaisselle d’antan.', 'Commandez le tofu à la citronnelle et le poisson au caramel en pot de terre.'],
      it: ['Cục Gạch Quán', 'Cucina casalinga vietnamita in due vecchie ville con mobili di campagna e stoviglie d’altri tempi.', 'Ordina il tofu alla citronella e il pesce al caramello nel coccio.'],
    }, { price: level(2), address: '10 Dang Tat', menu: [
      ['Đậu hũ chiên sả', 85000, 'тофу с лемонграссом и чили|tofu with lemongrass and chilli|tofu con limoncillo y chile|Tofu mit Zitronengras und Chili|tofu citronnelle-piment|tofu con citronella e peperoncino'],
      ['Cá kho tộ', 165000, 'рыба в карамельном соусе в горшке|caramelised fish in a clay pot|pescado caramelizado en olla de barro|karamellisierter Fisch im Tontopf|poisson caramélisé en pot de terre|pesce caramellato nel coccio'],
    ] }),
    P('secret-garden', 'food', 10.7745, 106.6977, NIGHT, 4.4, 7300, ['food', 'views'], {
      ru: ['Secret Garden', 'Ресторан на крыше старого жилого дома: путь через лестницу с бельём на верёвках, наверху — сад и домашние блюда.', 'Поднимайтесь пешком на 5-й этаж — это часть атмосферы; вечером прохладнее.'],
      en: ['Secret Garden', 'A rooftop restaurant atop an old apartment block: you climb past hanging laundry to a garden and home-style dishes.', 'Walk up to the 5th floor — it’s part of the charm; evenings are cooler.'],
      es: ['Secret Garden', 'Un restaurante en la azotea de un viejo bloque: subes entre ropa tendida hasta un jardín con platos caseros.', 'Sube a pie al 5.º piso, es parte del encanto; por la noche hace más fresco.'],
      de: ['Secret Garden', 'Ein Dachrestaurant auf einem alten Wohnblock: Man steigt vorbei an Wäsche zu einem Garten mit Hausmannskost.', 'Zu Fuß in den 5. Stock steigen – gehört dazu; abends ist es kühler.'],
      fr: ['Secret Garden', 'Un restaurant sur le toit d’un vieil immeuble : on monte entre le linge suspendu jusqu’à un jardin et des plats familiaux.', 'Montez à pied au 5e étage, ça fait partie du charme ; plus frais le soir.'],
      it: ['Secret Garden', 'Un ristorante sul tetto di un vecchio palazzo: si sale tra i panni stesi fino a un giardino e piatti casalinghi.', 'Sali a piedi al 5° piano, fa parte del fascino; la sera è più fresco.'],
    }, { price: level(2), address: '158 Pasteur (rooftop)', menu: [
      ['Gà nướng lá chanh', 145000, 'курица на гриле с листьями лайма|grilled chicken with lime leaves|pollo a la parrilla con hojas de lima|gegrilltes Huhn mit Limettenblättern|poulet grillé aux feuilles de combava|pollo grigliato con foglie di lime'],
      ['Rau muống xào tỏi', 65000, 'водяной шпинат с чесноком|morning glory with garlic|espinaca de agua con ajo|Wasserspinat mit Knoblauch|liseron d’eau à l’ail|spinacio d’acqua all’aglio'],
    ] }),
    P('lunch-lady', 'food', 10.7896, 106.7008, FOOD, 4.2, 3800, ['food', 'streetfood'], {
      ru: ['The Lunch Lady (Nguyễn Thị Thanh)', 'Уличная кухня, прославленная Энтони Бурдэном: каждый день недели хозяйка варит новый суп — от бун бо Хюэ до хутьеу.', 'Работает днём; спросите, какой суп сегодня.'],
      en: ['The Lunch Lady (Nguyễn Thị Thanh)', 'A street kitchen made famous by Anthony Bourdain: each day of the week brings a different soup, from bún bò Huế to hủ tiếu.', 'Daytime only; ask which soup is on today.'],
      es: ['The Lunch Lady (Nguyễn Thị Thanh)', 'Una cocina callejera que hizo famosa Anthony Bourdain: cada día de la semana una sopa distinta, del bún bò Huế al hủ tiếu.', 'Solo de día; pregunta qué sopa toca hoy.'],
      de: ['The Lunch Lady (Nguyễn Thị Thanh)', 'Eine Straßenküche, berühmt durch Anthony Bourdain: an jedem Wochentag eine andere Suppe, von Bún bò Huế bis Hủ tiếu.', 'Nur tagsüber; fragen, welche Suppe es heute gibt.'],
      fr: ['The Lunch Lady (Nguyễn Thị Thanh)', 'Une cuisine de rue rendue célèbre par Anthony Bourdain : chaque jour une soupe différente, du bún bò Huế au hủ tiếu.', 'En journée seulement ; demandez la soupe du jour.'],
      it: ['The Lunch Lady (Nguyễn Thị Thanh)', 'Una cucina di strada resa famosa da Anthony Bourdain: ogni giorno una zuppa diversa, dal bún bò Huế allo hủ tiếu.', 'Solo di giorno; chiedi qual è la zuppa di oggi.'],
    }, { price: level(1), address: '23 Hoang Sa', menu: [
      ['Soup of the day', 50000, 'суп дня (меняется по дням недели)|soup of the day (changes daily)|sopa del día (cambia cada día)|Suppe des Tages (wechselt täglich)|soupe du jour (change chaque jour)|zuppa del giorno (cambia ogni giorno)'],
      ['Gỏi cuốn', 30000, 'свежие рулетики с креветкой|fresh prawn rolls|rollitos frescos de gamba|frische Garnelenrollen|rouleaux frais aux crevettes|involtini freschi di gamberi'],
    ] }),
    P('oc-dao', 'food', 10.7678, 106.688, FOOD, 4.2, 4600, ['food', 'streetfood', 'nightlife'], {
      ru: ['Ốc Đào', 'Сайгонская «улиточная»: десятки видов моллюсков в соусах — от тамаринда до кокоса с чесноком. Местный вечерний ритуал под пиво.', 'Закажите «ок хыонг» в соусе из солёного желтка и мидии в тамаринде.'],
      en: ['Ốc Đào', 'A Saigon snail house: dozens of shellfish in sauces from tamarind to garlic-coconut — the local evening ritual with beer.', 'Get ốc hương in salted-egg sauce and clams in tamarind.'],
      es: ['Ốc Đào', 'Una casa de caracoles de Saigón: decenas de moluscos en salsas de tamarindo o coco con ajo, el ritual nocturno con cerveza.', 'Pide ốc hương en salsa de yema salada y almejas al tamarindo.'],
      de: ['Ốc Đào', 'Ein Saigoner Schneckenlokal: Dutzende Muscheln und Schnecken in Saucen von Tamarinde bis Knoblauch-Kokos – das abendliche Ritual zum Bier.', 'Ốc hương in Salzeigelb-Sauce und Muscheln in Tamarinde bestellen.'],
      fr: ['Ốc Đào', 'Une maison d’escargots saïgonnaise : des dizaines de coquillages en sauces, du tamarin au coco-ail, le rituel du soir avec une bière.', 'Prenez des ốc hương sauce jaune d’œuf salé et des palourdes au tamarin.'],
      it: ['Ốc Đào', 'Un locale di lumache di Saigon: decine di molluschi in salse dal tamarindo al cocco-aglio, il rito serale con birra.', 'Prendi ốc hương in salsa di tuorlo salato e vongole al tamarindo.'],
    }, { price: level(1), address: '212B/C79 Nguyen Trai, District 1', menu: [
      ['Ốc hương trứng muối', 120000, 'улитки в соусе из солёного желтка|sea snails in salted-egg sauce|caracoles de mar en salsa de yema salada|Meeresschnecken in Salzeigelb-Sauce|bulots sauce jaune d’œuf salé|lumache di mare in salsa di tuorlo salato'],
      ['Nghêu xào me', 80000, 'моллюски в тамариндовом соусе|clams in tamarind sauce|almejas en salsa de tamarindo|Muscheln in Tamarindensauce|palourdes sauce tamarin|vongole in salsa di tamarindo'],
    ] }),
    P('the-workshop', 'food', 10.7738, 106.7044, NIGHT, 4.5, 5400, ['food', 'nomads'], {
      ru: ['The Workshop Coffee', 'Специалти-кофейня в лофте старого здания: обжарка на месте, вьетнамская арабика и робуста, большие окна.', 'Попробуйте вьетнамскую робусту в «пхине» или cold brew — хорошая пауза после прогулки.'],
      en: ['The Workshop Coffee', 'A specialty coffee loft in an old building: on-site roasting, Vietnamese arabica and robusta, big windows.', 'Try Vietnamese robusta through a phin or a cold brew — a good break mid-walk.'],
      es: ['The Workshop Coffee', 'Un loft de café de especialidad en un edificio antiguo: tueste propio, arábica y robusta vietnamitas, grandes ventanales.', 'Prueba robusta vietnamita en phin o un cold brew: buena pausa del paseo.'],
      de: ['The Workshop Coffee', 'Ein Specialty-Coffee-Loft in einem alten Haus: eigene Röstung, vietnamesischer Arabica und Robusta, große Fenster.', 'Vietnamesischen Robusta aus dem Phin oder Cold Brew probieren – gute Pause.'],
      fr: ['The Workshop Coffee', 'Un loft de café de spécialité dans un vieil immeuble : torréfaction sur place, arabica et robusta vietnamiens, grandes fenêtres.', 'Goûtez le robusta vietnamien au phin ou un cold brew : bonne pause.'],
      it: ['The Workshop Coffee', 'Un loft di caffè specialty in un vecchio palazzo: tostatura in sede, arabica e robusta vietnamiti, grandi finestre.', 'Prova la robusta vietnamita col phin o un cold brew: ottima pausa.'],
    }, { price: level(2), address: '27 Ngo Duc Ke (2nd floor)', menu: [
      ['Cà phê sữa đá', 60000, 'кофе со льдом и сгущёнкой|iced coffee with condensed milk|café con hielo y leche condensada|Eiskaffee mit Kondensmilch|café glacé au lait concentré|caffè freddo con latte condensato'],
      ['Cold brew', 75000, 'кофе холодного заваривания|cold brew coffee|café cold brew|Cold-Brew-Kaffee|café infusé à froid|caffè cold brew'],
    ] }),
    P('propaganda', 'food', 10.7798, 106.6993, NIGHT, 4.4, 6100, ['food', 'art'], {
      ru: ['Propaganda Bistro', 'Бистро с яркими росписями в духе вьетнамских плакатов: современные версии классики — фреш-ролы, бун и салаты.', 'Хорошее место для обеда у Нотр-Дама; возьмите ассорти рулетиков.'],
      en: ['Propaganda Bistro', 'A bistro painted in bold Vietnamese-poster murals serving modern takes on the classics — fresh rolls, bún and salads.', 'A good lunch near Notre-Dame; get the roll platter.'],
      es: ['Propaganda Bistro', 'Un bistró con murales al estilo de los carteles vietnamitas: versiones modernas de clásicos, rollitos, bún y ensaladas.', 'Buena comida cerca de Notre-Dame; pide el surtido de rollitos.'],
      de: ['Propaganda Bistro', 'Ein Bistro mit Wandbildern im Stil vietnamesischer Plakate: moderne Klassiker – frische Rollen, Bún und Salate.', 'Gut fürs Mittagessen nahe Notre-Dame; die Rollen-Platte nehmen.'],
      fr: ['Propaganda Bistro', 'Un bistrot aux fresques façon affiches vietnamiennes : classiques revisités, rouleaux frais, bún et salades.', 'Bon déjeuner près de Notre-Dame ; prenez l’assortiment de rouleaux.'],
      it: ['Propaganda Bistro', 'Un bistrot con murales in stile manifesti vietnamiti: classici rivisitati, involtini freschi, bún e insalate.', 'Ottimo pranzo vicino a Notre-Dame; prendi il misto di involtini.'],
    }, { price: level(2), address: '21 Han Thuyen', menu: [
      ['Fresh roll platter', 150000, 'ассорти свежих рулетиков|platter of fresh rolls|surtido de rollitos frescos|Platte frischer Rollen|assortiment de rouleaux frais|tagliere di involtini freschi'],
      ['Bún chả Saigon style', 135000, 'лапша со свининой на гриле|grilled pork with noodles|cerdo a la parrilla con fideos|gegrilltes Schwein mit Nudeln|porc grillé et vermicelles|maiale grigliato con vermicelli'],
    ] }),
  ],
  routes: [
    D(['=ho-chi-minh-city-notre-dame-basilica', '=ho-chi-minh-city-post-office', 'independence-palace', 'secret-garden', '=ho-chi-minh-city-war-remnants-museum', 'nguyen-hue', 'anan-saigon'],
      'Колониальный Сайгон и история войны|Colonial Saigon and the war’s story|El Saigón colonial y la historia de la guerra|Koloniales Saigon und Kriegsgeschichte|Saïgon colonial et histoire de la guerre|Saigon coloniale e storia della guerra'),
    D(['cu-chi-tunnels', 'com-tam-ba-ghien', 'tan-dinh-church', '=ho-chi-minh-city-jade-emperor-pagoda', 'lunch-lady', '=ho-chi-minh-city-landmark-81-skyview', 'cuc-gach-quan'],
      'Туннели Кучи и пагоды|The Cu Chi Tunnels and pagodas|Los túneles de Cu Chi y las pagodas|Die Tunnel von Cu Chi und Pagoden|Les tunnels de Cu Chi et les pagodes|I tunnel di Cu Chi e le pagode'),
    D(['pho-le', 'binh-tay-market', 'thien-hau-temple', '=ho-chi-minh-city-ben-thanh-market', 'fine-arts-museum', 'the-workshop', 'bitexco-skydeck', '=ho-chi-minh-city-vinh-khanh'],
      'Чолон, рынки и город с высоты|Cholon, markets and the city from above|Cholon, mercados y la ciudad desde arriba|Cholon, Märkte und die Stadt von oben|Cholon, marchés et la ville vue d’en haut|Cholon, mercati e la città dall’alto'),
  ],
};

export default pack;
