import type { CityPack } from '../types';
import { free, level, makeDay, makePlace } from './_kit.ts';

const P = makePlace('munich');
const D = makeDay('munich');
const CITY = 'JKbR4DucAS4';
const SQUARE = 'H-7zZBodgpM';
const PARK = 'cT9EKPMDYPk';
const OLYMPIA = 'l4vEQ1npo4o';
const ALT = 'nddZnHYL_CI';
const CHURCH = 'Qaa58mXlp5E';
const BEER = 'n7koTmsbxb8';

const pack: CityPack = {
  country: 'DE',
  city: 'munich',
  places: [
    P('residenz', 'attraction', 48.141, 11.5786, ALT, 4.7, 31000, ['history', 'castles', 'museums'], {
      ru: ['Мюнхенская резиденция', 'Крупнейший городской дворец Германии — резиденция баварских правителей: Антиквариум эпохи Ренессанса, 130 залов и Сокровищница.', 'Аудиогид бесплатный; заложите 2–3 часа, включая Сокровищницу.'],
      en: ['Munich Residenz', 'Germany’s largest city palace, seat of Bavaria’s rulers: the Renaissance Antiquarium, 130 rooms and the Treasury.', 'The audio guide is free; allow 2–3 hours including the Treasury.'],
      es: ['Residencia de Múnich', 'El mayor palacio urbano de Alemania, sede de los gobernantes bávaros: el Antiquarium renacentista, 130 salas y el Tesoro.', 'La audioguía es gratis; dedica 2–3 horas con el Tesoro.'],
      de: ['Residenz München', 'Deutschlands größtes Stadtschloss, Sitz der bayerischen Herrscher: Antiquarium der Renaissance, 130 Räume und die Schatzkammer.', 'Der Audioguide ist gratis; 2–3 Stunden inklusive Schatzkammer einplanen.'],
      fr: ['Résidence de Munich', 'Le plus grand palais urbain d’Allemagne, siège des souverains bavarois : Antiquarium Renaissance, 130 salles et Trésor.', 'Audioguide gratuit ; comptez 2–3 heures avec le Trésor.'],
      it: ['Residenza di Monaco', 'Il più grande palazzo cittadino della Germania, sede dei sovrani bavaresi: l’Antiquarium rinascimentale, 130 sale e il Tesoro.', 'L’audioguida è gratuita; calcola 2–3 ore con il Tesoro.'],
    }, { hours: '09:00–18:00', address: 'Residenzstraße 1' }),
    P('frauenkirche', 'attraction', 48.1386, 11.5733, SQUARE, 4.6, 31000, ['architecture', 'history'], {
      ru: ['Фрауэнкирхе', 'Кафедральный собор XV века с двумя башнями под «луковичными» куполами — символ Мюнхена; у входа — легендарный «след дьявола».', 'Найдите на полу у входа «Teufelstritt» — отпечаток ноги дьявола.'],
      en: ['Frauenkirche', 'The 15th-century cathedral with twin onion-domed towers — Munich’s symbol; by the entrance is the legendary “Devil’s Footprint”.', 'Find the Teufelstritt footprint on the floor by the entrance.'],
      es: ['Frauenkirche', 'La catedral del siglo XV con dos torres de cúpulas bulbosas, símbolo de Múnich; en la entrada, la legendaria “huella del diablo”.', 'Busca la Teufelstritt en el suelo junto a la entrada.'],
      de: ['Frauenkirche', 'Der Dom aus dem 15. Jh. mit zwei Zwiebeltürmen – Münchens Wahrzeichen; am Eingang der legendäre Teufelstritt.', 'Den Teufelstritt im Boden am Eingang suchen.'],
      fr: ['Frauenkirche', 'La cathédrale du XVe aux deux tours à bulbes, symbole de Munich ; à l’entrée, la légendaire « empreinte du diable ».', 'Cherchez la Teufelstritt au sol près de l’entrée.'],
      it: ['Frauenkirche', 'La cattedrale del Quattrocento con le due torri a cipolla, simbolo di Monaco; all’ingresso la leggendaria “impronta del diavolo”.', 'Cerca la Teufelstritt sul pavimento vicino all’ingresso.'],
    }, { price: free, hours: '08:00–20:00' }),
    P('nymphenburg', 'attraction', 48.1583, 11.5033, PARK, 4.7, 38000, ['castles', 'gardens'], {
      ru: ['Дворец Нимфенбург', 'Летняя резиденция Виттельсбахов с «Галереей красавиц» Людвига I, музеем карет и огромным парком с павильонами и каналами.', 'Парк бесплатный; возьмите комбинированный билет, чтобы увидеть павильон Амалиенбург.'],
      en: ['Nymphenburg Palace', 'The Wittelsbachs’ summer residence with Ludwig I’s Gallery of Beauties, a carriage museum and a vast park of pavilions and canals.', 'The park is free; get the combo ticket to see the Amalienburg pavilion.'],
      es: ['Palacio de Nymphenburg', 'La residencia de verano de los Wittelsbach con la Galería de Bellezas de Luis I, museo de carruajes y un enorme parque con pabellones y canales.', 'El parque es gratis; entrada combinada para ver Amalienburg.'],
      de: ['Schloss Nymphenburg', 'Die Sommerresidenz der Wittelsbacher mit Ludwigs I. Schönheitengalerie, Marstallmuseum und riesigem Park mit Pavillons und Kanälen.', 'Der Park ist gratis; mit Kombiticket die Amalienburg ansehen.'],
      fr: ['Château de Nymphenburg', 'La résidence d’été des Wittelsbach : galerie des Beautés de Louis Ier, musée des carrosses et immense parc de pavillons et canaux.', 'Parc gratuit ; billet combiné pour voir l’Amalienburg.'],
      it: ['Castello di Nymphenburg', 'La residenza estiva dei Wittelsbach con la Galleria delle Bellezze di Ludovico I, il museo delle carrozze e un enorme parco con padiglioni e canali.', 'Il parco è gratuito; biglietto cumulativo per l’Amalienburg.'],
    }, { spot: 'insta', hours: '09:00–18:00' }),
    P('english-garden', 'nature', 48.16, 11.59, PARK, 4.8, 61000, ['nature', 'gardens'], {
      ru: ['Английский сад', 'Один из крупнейших городских парков мира: луга вдоль Изара, японский чайный домик, ротонда Моноптерос и пивной сад у Китайской башни.', 'С холма Моноптерос — лучший вид на шпили центра.'],
      en: ['English Garden', 'One of the world’s largest city parks: meadows along the Isar, a Japanese teahouse, the Monopteros temple and the Chinese Tower beer garden.', 'The Monopteros hill has the best view of the city spires.'],
      es: ['Jardín Inglés', 'Uno de los mayores parques urbanos del mundo: praderas junto al Isar, una casa de té japonesa, el templete Monopteros y la cervecería de la Torre China.', 'Desde la colina del Monopteros, la mejor vista de las torres.'],
      de: ['Englischer Garten', 'Einer der größten Stadtparks der Welt: Wiesen an der Isar, japanisches Teehaus, Monopteros und der Biergarten am Chinesischen Turm.', 'Vom Monopteros-Hügel der beste Blick auf die Türme der Stadt.'],
      fr: ['Jardin anglais', 'L’un des plus grands parcs urbains du monde : prairies le long de l’Isar, maison de thé japonaise, temple Monopteros et Biergarten de la Tour chinoise.', 'La colline du Monopteros offre la plus belle vue sur les clochers.'],
      it: ['Giardino inglese', 'Uno dei più grandi parchi urbani del mondo: prati lungo l’Isar, una casa da tè giapponese, il Monopteros e il biergarten della Torre cinese.', 'Dalla collina del Monopteros la vista migliore sui campanili.'],
    }, { price: free, hours: 'always' }),
    P('alte-pinakothek', 'attraction', 48.1482, 11.57, ALT, 4.7, 17000, ['art', 'museums'], {
      ru: ['Старая пинакотека', 'Одна из старейших картинных галерей мира: Дюрер, Рубенс, Рембрандт, Рафаэль и Леонардо в здании XIX века.', 'По воскресеньям вход за 1 евро; рядом — Новая пинакотека и Пинакотека модерна.'],
      en: ['Alte Pinakothek', 'One of the world’s oldest picture galleries: Dürer, Rubens, Rembrandt, Raphael and Leonardo in a 19th-century building.', 'Sundays cost €1; the Pinakothek der Moderne is next door.'],
      es: ['Alte Pinakothek', 'Una de las pinacotecas más antiguas del mundo: Durero, Rubens, Rembrandt, Rafael y Leonardo en un edificio del siglo XIX.', 'Los domingos cuesta 1 €; al lado, la Pinakothek der Moderne.'],
      de: ['Alte Pinakothek', 'Eine der ältesten Gemäldegalerien der Welt: Dürer, Rubens, Rembrandt, Raffael und Leonardo in einem Bau des 19. Jh.', 'Sonntags 1 € Eintritt; nebenan die Pinakothek der Moderne.'],
      fr: ['Alte Pinakothek', 'L’une des plus anciennes pinacothèques du monde : Dürer, Rubens, Rembrandt, Raphaël et Léonard dans un bâtiment du XIXe.', 'Le dimanche, 1 € ; la Pinakothek der Moderne est à côté.'],
      it: ['Alte Pinakothek', 'Una delle pinacoteche più antiche del mondo: Dürer, Rubens, Rembrandt, Raffaello e Leonardo in un edificio ottocentesco.', 'La domenica costa 1 €; accanto la Pinakothek der Moderne.'],
    }, { hours: '10:00–18:00', address: 'Barer Straße 27' }),
    P('deutsches-museum', 'attraction', 48.1299, 11.5834, CITY, 4.7, 45000, ['museums', 'history'], {
      ru: ['Немецкий музей', 'Один из крупнейших музеев науки и техники мира на острове на Изаре: самолёты, корабли, шахта и физические опыты.', 'Невозможно обойти за день — выберите 3–4 зала заранее.'],
      en: ['Deutsches Museum', 'One of the world’s largest science and technology museums, on an island in the Isar: aircraft, ships, a mine and physics demos.', 'Impossible in a day — pick 3–4 halls in advance.'],
      es: ['Deutsches Museum', 'Uno de los mayores museos de ciencia y técnica del mundo, en una isla del Isar: aviones, barcos, una mina y experimentos.', 'Imposible verlo en un día: elige 3–4 salas antes.'],
      de: ['Deutsches Museum', 'Eines der größten Technikmuseen der Welt auf einer Isarinsel: Flugzeuge, Schiffe, ein Bergwerk und Physikvorführungen.', 'An einem Tag nicht zu schaffen – vorher 3–4 Hallen auswählen.'],
      fr: ['Deutsches Museum', 'L’un des plus grands musées des sciences et techniques au monde, sur une île de l’Isar : avions, navires, mine et démonstrations.', 'Impossible en un jour : choisissez 3–4 salles à l’avance.'],
      it: ['Deutsches Museum', 'Uno dei più grandi musei della scienza e della tecnica al mondo, su un’isola dell’Isar: aerei, navi, una miniera e dimostrazioni.', 'Impossibile in un giorno: scegli prima 3–4 sale.'],
    }, { hours: '09:00–17:00', address: 'Museumsinsel 1' }),
    P('bmw-welt', 'attraction', 48.177, 11.556, OLYMPIA, 4.6, 52000, ['architecture', 'museums'], {
      ru: ['BMW Welt и музей BMW', 'Футуристический выставочный центр BMW с бесплатным входом и музей-«чаша» с историей марки рядом с Олимпийским парком.', 'BMW Welt бесплатен; музей — по билету.'],
      en: ['BMW Welt and BMW Museum', 'BMW’s futuristic, free showroom and the bowl-shaped museum of the brand’s history next to the Olympic Park.', 'BMW Welt is free; the museum is ticketed.'],
      es: ['BMW Welt y Museo BMW', 'El futurista centro de exposiciones gratuito de BMW y el museo en forma de cuenco junto al Parque Olímpico.', 'BMW Welt es gratis; el museo es de pago.'],
      de: ['BMW Welt und BMW Museum', 'Die futuristische, kostenlose Erlebniswelt von BMW und das schüsselförmige Markenmuseum neben dem Olympiapark.', 'BMW Welt ist gratis; das Museum kostet.'],
      fr: ['BMW Welt et musée BMW', 'Le centre d’exposition futuriste et gratuit de BMW et le musée en forme de bol près du parc olympique.', 'BMW Welt est gratuit ; le musée est payant.'],
      it: ['BMW Welt e Museo BMW', 'Il futuristico showroom gratuito di BMW e il museo a forma di ciotola accanto al Parco olimpico.', 'BMW Welt è gratuito; il museo è a pagamento.'],
    }, { hours: '09:00–18:00', address: 'Am Olympiapark 1' }),
    P('alter-peter', 'attraction', 48.1364, 11.5759, SQUARE, 4.7, 26000, ['views', 'history'], {
      ru: ['Церковь Святого Петра (Альтер Петер)', 'Старейшая приходская церковь Мюнхена; 306 ступеней ведут на башню с лучшим видом на Мариенплац и, в ясную погоду, Альпы.', 'Поднимайтесь к 11:00 — увидите Глокеншпиль на Ратуше сверху.'],
      en: ['St Peter’s Church (Alter Peter)', 'Munich’s oldest parish church; 306 steps climb the tower to the best view of Marienplatz and, on clear days, the Alps.', 'Climb before 11:00 to watch the Glockenspiel from above.'],
      es: ['Iglesia de San Pedro (Alter Peter)', 'La parroquia más antigua de Múnich; 306 escalones suben a la torre con la mejor vista de Marienplatz y, si está despejado, los Alpes.', 'Sube antes de las 11:00 para ver el Glockenspiel desde arriba.'],
      de: ['St. Peter (Alter Peter)', 'Münchens älteste Pfarrkirche; 306 Stufen führen auf den Turm mit dem besten Blick auf den Marienplatz und bei Föhn auf die Alpen.', 'Vor 11 Uhr hinauf, um das Glockenspiel von oben zu sehen.'],
      fr: ['Église Saint-Pierre (Alter Peter)', 'La plus ancienne paroisse de Munich ; 306 marches mènent à la tour, meilleure vue sur Marienplatz et par temps clair sur les Alpes.', 'Montez avant 11 h pour voir le Glockenspiel d’en haut.'],
      it: ['Chiesa di San Pietro (Alter Peter)', 'La parrocchia più antica di Monaco; 306 gradini salgono alla torre con la vista migliore su Marienplatz e, col sereno, sulle Alpi.', 'Sali prima delle 11 per vedere il Glockenspiel dall’alto.'],
    }, { spot: 'insta', hours: '09:00–19:30' }),
    P('dachau-memorial', 'attraction', 48.27, 11.4683, ALT, 4.7, 21000, ['history', 'museums'], {
      ru: ['Мемориал концлагеря Дахау', 'Первый нацистский концлагерь (1933), в 20 км от Мюнхена; сегодня — мемориал и музей.', 'Вход бесплатный; S2 до Дахау и автобус 726; заложите полдня.'],
      en: ['Dachau Concentration Camp Memorial', 'The first Nazi concentration camp (1933), 20 km from Munich; today a memorial and museum.', 'Free entry; S2 to Dachau then bus 726; allow half a day.'],
      es: ['Memorial del campo de Dachau', 'El primer campo de concentración nazi (1933), a 20 km de Múnich; hoy memorial y museo.', 'Entrada gratuita; S2 a Dachau y bus 726; dedica medio día.'],
      de: ['KZ-Gedenkstätte Dachau', 'Das erste NS-Konzentrationslager (1933), 20 km von München; heute Gedenkstätte und Museum.', 'Eintritt frei; S2 nach Dachau, dann Bus 726; einen halben Tag einplanen.'],
      fr: ['Mémorial du camp de Dachau', 'Le premier camp de concentration nazi (1933), à 20 km de Munich ; aujourd’hui mémorial et musée.', 'Entrée gratuite ; S2 jusqu’à Dachau puis bus 726 ; comptez une demi-journée.'],
      it: ['Memoriale del campo di Dachau', 'Il primo campo di concentramento nazista (1933), a 20 km da Monaco; oggi memoriale e museo.', 'Ingresso gratuito; S2 fino a Dachau e bus 726; calcola mezza giornata.'],
    }, { price: free, hours: '09:00–17:00' }),
    P('odeonsplatz', 'attraction', 48.1424, 11.5774, ALT, 4.7, 24000, ['architecture', 'history'], {
      ru: ['Одеонсплац и Фельдхеррнхалле', 'Парадная площадь с флорентийской лоджией Фельдхеррнхалле и жёлтой барочной Театинеркирхе у входа в Хофгартен.', 'Пройдите через Хофгартен — тихий сад с павильоном Дианы.'],
      en: ['Odeonsplatz and the Feldherrnhalle', 'A grand square with the Florentine-style Feldherrnhalle loggia and the yellow Baroque Theatine Church at the gate of the Hofgarten.', 'Walk through the Hofgarten — a quiet garden with the Diana Temple.'],
      es: ['Odeonsplatz y Feldherrnhalle', 'Una plaza señorial con la logia florentina Feldherrnhalle y la iglesia barroca amarilla de los Teatinos junto al Hofgarten.', 'Pasea por el Hofgarten, un jardín tranquilo con el templete de Diana.'],
      de: ['Odeonsplatz und Feldherrnhalle', 'Ein Prachtplatz mit der florentinischen Feldherrnhalle und der gelben barocken Theatinerkirche am Eingang des Hofgartens.', 'Durch den Hofgarten mit dem Dianatempel spazieren.'],
      fr: ['Odeonsplatz et Feldherrnhalle', 'Une place majestueuse avec la loggia florentine Feldherrnhalle et l’église baroque jaune des Théatins à l’entrée du Hofgarten.', 'Traversez le Hofgarten et son temple de Diane.'],
      it: ['Odeonsplatz e Feldherrnhalle', 'Una piazza monumentale con la loggia fiorentina Feldherrnhalle e la gialla chiesa barocca dei Teatini all’ingresso dell’Hofgarten.', 'Attraversa l’Hofgarten con il tempietto di Diana.'],
    }, { spot: 'insta', price: free, hours: 'always' }),

    P('tantris', 'food', 48.168, 11.587, CITY, 4.7, 2100, ['food', 'luxury', 'history'], {
      ru: ['Tantris', 'Легендарный ресторан высокой кухни в Швабинге 1971 года в узнаваемом интерьере в красно-оранжевой гамме; одно из главных имён немецкой гастрономии.', 'Бронируйте заранее; винный погреб — один из лучших в стране.'],
      en: ['Tantris', 'A legendary 1971 fine-dining restaurant in Schwabing with its iconic red-orange interior; one of the great names of German gastronomy.', 'Book ahead; the wine cellar is among the country’s best.'],
      es: ['Tantris', 'Un legendario restaurante de alta cocina de 1971 en Schwabing con su icónico interior rojo-naranja; uno de los grandes nombres de la gastronomía alemana.', 'Reserva con antelación; su bodega está entre las mejores del país.'],
      de: ['Tantris', 'Ein legendäres Gourmetrestaurant von 1971 in Schwabing mit ikonischem rot-orangem Interieur; einer der großen Namen der deutschen Gastronomie.', 'Früh reservieren; der Weinkeller zählt zu den besten des Landes.'],
      fr: ['Tantris', 'Un restaurant gastronomique légendaire de 1971 à Schwabing, intérieur rouge-orange iconique ; l’un des grands noms de la gastronomie allemande.', 'Réservez à l’avance ; la cave compte parmi les meilleures du pays.'],
      it: ['Tantris', 'Un leggendario ristorante gourmet del 1971 a Schwabing con l’iconico interno rosso-arancio; uno dei grandi nomi della gastronomia tedesca.', 'Prenota in anticipo; la cantina è tra le migliori del paese.'],
    }, { price: level(3), address: 'Johann-Fichte-Straße 7', menu: [
      ['Tasting menu', undefined, 'дегустационный сет|tasting menu|menú degustación|Degustationsmenü|menu dégustation|menù degustazione'],
      ['Wine pairing', undefined, 'винное сопровождение|wine pairing|maridaje de vinos|Weinbegleitung|accord mets-vins|abbinamento vini'],
    ] }),
    P('augustiner-braeustuben', 'food', 48.1395, 11.542, BEER, 4.6, 12000, ['food', 'history'], {
      ru: ['Augustiner Bräustuben', 'Пивной ресторан при самой старой пивоварне Мюнхена «Августинер»: из окон видны конюшни ломовых лошадей; огромные порции баварской классики.', 'Закажите свиную рульку или «шайфле» и Хеллес из бочки.'],
      en: ['Augustiner Bräustuben', 'A beer hall at Munich’s oldest brewery, Augustiner, overlooking the dray-horse stables; huge portions of Bavarian classics.', 'Order pork knuckle or Schäufele with Helles from the barrel.'],
      es: ['Augustiner Bräustuben', 'Una cervecería en la cervecera más antigua de Múnich, Augustiner, junto a los establos de los caballos de tiro; raciones enormes de clásicos bávaros.', 'Pide codillo o Schäufele con Helles de barril.'],
      de: ['Augustiner Bräustuben', 'Ein Bierlokal in Münchens ältester Brauerei Augustiner mit Blick auf die Brauereirösser; riesige Portionen bayerischer Klassiker.', 'Schweinshaxe oder Schäufele mit Helles vom Holzfass bestellen.'],
      fr: ['Augustiner Bräustuben', 'Une brasserie à la plus ancienne brasserie de Munich, Augustiner, avec vue sur les écuries des chevaux de trait ; portions énormes de classiques bavarois.', 'Prenez jarret de porc ou Schäufele et une Helles au fût.'],
      it: ['Augustiner Bräustuben', 'Una birreria nel birrificio più antico di Monaco, Augustiner, con vista sulle stalle dei cavalli da tiro; porzioni enormi di classici bavaresi.', 'Ordina stinco o Schäufele con una Helles alla spina.'],
    }, { price: level(2), address: 'Landsberger Straße 19', menu: [
      ['Schweinshaxe', undefined, 'запечённая свиная рулька|roast pork knuckle|codillo asado|Schweinshaxe|jarret de porc rôti|stinco di maiale arrosto'],
      ['Augustiner Helles', undefined, 'светлое пиво из деревянной бочки|pale lager from the wooden barrel|cerveza rubia de barril de madera|Helles vom Holzfass|blonde au fût de bois|birra chiara dalla botte di legno'],
    ] }),
    P('andechser-am-dom', 'food', 48.138, 11.5737, SQUARE, 4.5, 6200, ['food'], {
      ru: ['Andechser am Dom', 'Пивной ресторан у стен Фрауэнкирхе с пивом монастыря Андекс и баварскими блюдами; терраса с видом на собор.', 'Попробуйте монастырское тёмное пиво «Doppelbock» и жаркое.'],
      en: ['Andechser am Dom', 'A beer restaurant by the Frauenkirche walls serving Andechs monastery beer and Bavarian food; a terrace facing the cathedral.', 'Try the monastery Doppelbock and a roast.'],
      es: ['Andechser am Dom', 'Un restaurante cervecero junto a la Frauenkirche con cerveza del monasterio de Andechs y comida bávara; terraza frente a la catedral.', 'Prueba la Doppelbock del monasterio y un asado.'],
      de: ['Andechser am Dom', 'Ein Bierlokal an der Frauenkirche mit Andechser Klosterbier und bayerischer Küche; Terrasse mit Domblick.', 'Den Kloster-Doppelbock und einen Braten probieren.'],
      fr: ['Andechser am Dom', 'Un restaurant à bière au pied de la Frauenkirche : bière du monastère d’Andechs et cuisine bavaroise ; terrasse face à la cathédrale.', 'Goûtez la Doppelbock du monastère et un rôti.'],
      it: ['Andechser am Dom', 'Un ristorante della birra accanto alla Frauenkirche con birra del monastero di Andechs e cucina bavarese; terrazza sulla cattedrale.', 'Prova la Doppelbock del monastero e un arrosto.'],
    }, { price: level(2), address: 'Weinstraße 7a', menu: [
      ['Schweinebraten', undefined, 'баварское жаркое из свинины|Bavarian roast pork|asado de cerdo bávaro|Schweinebraten|rôti de porc bavarois|arrosto di maiale bavarese'],
      ['Andechser Doppelbock', undefined, 'тёмное крепкое монастырское пиво|strong dark monastery beer|cerveza negra fuerte del monasterio|dunkler Kloster-Doppelbock|bière brune forte du monastère|birra scura forte del monastero'],
    ] }),
    P('dallmayr', 'food', 48.1394, 11.5773, ALT, 4.6, 14000, ['food', 'shopping', 'history'], {
      ru: ['Dallmayr', 'Деликатесный дом 1700 года у Мариенплац: кофе, обжаренный на глазах, шоколад, деликатесы и кафе-бистро.', 'Купите кофе «Prodomo» с собой и посмотрите на фонтан и фарфоровые банки.'],
      en: ['Dallmayr', 'A delicatessen house from 1700 by Marienplatz: coffee roasted on site, chocolate, fine foods and a café-bistro.', 'Buy some Prodomo coffee and admire the fountain and porcelain jars.'],
      es: ['Dallmayr', 'Una tienda de delicatessen de 1700 junto a Marienplatz: café tostado allí, chocolate, delicias y un café-bistró.', 'Compra café Prodomo y mira la fuente y los tarros de porcelana.'],
      de: ['Dallmayr', 'Ein Delikatessenhaus von 1700 am Marienplatz: hauseigene Kaffeerösterei, Schokolade, Feinkost und ein Café-Bistro.', 'Prodomo-Kaffee kaufen und Brunnen und Porzellangefäße bewundern.'],
      fr: ['Dallmayr', 'Une maison d’épicerie fine de 1700 près de Marienplatz : café torréfié sur place, chocolat, délices et café-bistrot.', 'Achetez du café Prodomo et admirez la fontaine et les pots en porcelaine.'],
      it: ['Dallmayr', 'Una gastronomia del 1700 vicino a Marienplatz: caffè tostato sul posto, cioccolato, specialità e un caffè-bistrot.', 'Compra il caffè Prodomo e ammira la fontana e i vasi di porcellana.'],
    }, { price: level(2), address: 'Dienerstraße 14–15', menu: [
      ['Prodomo coffee', undefined, 'фирменный кофе|house coffee|café de la casa|Hauskaffee|café maison|caffè della casa'],
      ['Weißwurst', undefined, 'белые баварские колбаски|Bavarian white sausages|salchichas blancas bávaras|Weißwürste|saucisses blanches bavaroises|salsicce bianche bavaresi'],
    ] }),
    P('cafe-luitpold', 'food', 48.1432, 11.5756, ALT, 4.4, 5900, ['food', 'history'], {
      ru: ['Café Luitpold', 'Кондитерская-кафе 1888 года с пальмовым двориком под стеклянной крышей: торты, пралине и завтраки.', 'Хороший завтрак перед Старой пинакотекой и Резиденцией.'],
      en: ['Café Luitpold', 'An 1888 café-patisserie with a palm courtyard under a glass roof: cakes, pralines and breakfasts.', 'A good breakfast before the Alte Pinakothek and the Residenz.'],
      es: ['Café Luitpold', 'Una cafetería-pastelería de 1888 con patio de palmeras bajo cristal: tartas, bombones y desayunos.', 'Buen desayuno antes de la Alte Pinakothek y la Residencia.'],
      de: ['Café Luitpold', 'Ein Kaffeehaus mit Konditorei von 1888 und Palmengarten unter Glasdach: Torten, Pralinen und Frühstück.', 'Gutes Frühstück vor Alter Pinakothek und Residenz.'],
      fr: ['Café Luitpold', 'Un café-pâtisserie de 1888 avec patio de palmiers sous verrière : gâteaux, pralines et petits-déjeuners.', 'Bon petit-déjeuner avant l’Alte Pinakothek et la Résidence.'],
      it: ['Café Luitpold', 'Un caffè-pasticceria del 1888 con cortile di palme sotto un tetto di vetro: torte, praline e colazioni.', 'Ottima colazione prima dell’Alte Pinakothek e della Residenza.'],
    }, { price: level(2), address: 'Brienner Straße 11', menu: [
      ['Breakfast', undefined, 'завтрак|breakfast|desayuno|Frühstück|petit-déjeuner|colazione'],
      ['Prinzregententorte', undefined, 'баварский слоёный шоколадный торт|Bavarian layered chocolate cake|tarta bávara de capas de chocolate|Prinzregententorte|gâteau bavarois au chocolat en couches|torta bavarese a strati al cioccolato'],
    ] }),
    P('zum-franziskaner', 'food', 48.1403, 11.578, ALT, 4.4, 9100, ['food', 'history'], {
      ru: ['Zum Franziskaner', 'Традиционный баварский ресторан с XIV века у Резиденции, известный белыми колбасками «вайсвурст» с кренделем и сладкой горчицей.', 'Вайсвурст по традиции едят до полудня — приходите на поздний завтрак.'],
      en: ['Zum Franziskaner', 'A traditional Bavarian restaurant dating back to the 14th century near the Residenz, known for Weisswurst with pretzel and sweet mustard.', 'By tradition Weisswurst is eaten before noon — come for a late breakfast.'],
      es: ['Zum Franziskaner', 'Un restaurante bávaro tradicional con raíces en el siglo XIV junto a la Residencia, famoso por la Weisswurst con pretzel y mostaza dulce.', 'Por tradición la Weisswurst se come antes del mediodía.'],
      de: ['Zum Franziskaner', 'Ein traditionsreiches bayerisches Wirtshaus mit Wurzeln im 14. Jh. nahe der Residenz, bekannt für Weißwürste mit Breze und süßem Senf.', 'Weißwürste isst man traditionell vor zwölf – zum späten Frühstück kommen.'],
      fr: ['Zum Franziskaner', 'Une auberge bavaroise traditionnelle aux origines du XIVe près de la Résidence, célèbre pour ses Weisswurst, bretzel et moutarde douce.', 'Par tradition, la Weisswurst se mange avant midi.'],
      it: ['Zum Franziskaner', 'Un’osteria bavarese tradizionale con radici nel Trecento vicino alla Residenza, famosa per le Weisswurst con brezel e senape dolce.', 'Per tradizione le Weisswurst si mangiano prima di mezzogiorno.'],
    }, { price: level(2), address: 'Residenzstraße 9', menu: [
      ['Weißwurst-Frühstück', undefined, 'белые колбаски с кренделем, сладкой горчицей и пивом|white sausages with pretzel, sweet mustard and beer|salchichas blancas con pretzel, mostaza dulce y cerveza|Weißwürste mit Breze, süßem Senf und Weißbier|saucisses blanches, bretzel, moutarde douce et bière|salsicce bianche con brezel, senape dolce e birra'],
      ['Obatzda', undefined, 'баварская сырная паста с паприкой|Bavarian cheese spread with paprika|crema bávara de queso con pimentón|Obatzda|fromage bavarois au paprika|crema bavarese di formaggio alla paprika'],
    ] }),
    P('ratskeller', 'food', 48.1376, 11.5757, SQUARE, 4.3, 12000, ['food', 'history'], {
      ru: ['Ratskeller München', 'Ресторан в сводчатых подвалах Новой ратуши на Мариенплац: баварская и франконская кухня и вино в расписных залах.', 'Удобно поесть сразу после Глокеншпиля.'],
      en: ['Ratskeller München', 'A restaurant in the vaulted cellars of the New Town Hall on Marienplatz: Bavarian and Franconian cooking and wine in painted halls.', 'Handy right after the Glockenspiel.'],
      es: ['Ratskeller München', 'Un restaurante en las bodegas abovedadas del Nuevo Ayuntamiento en Marienplatz: cocina bávara y franconia y vino en salas pintadas.', 'Práctico justo después del Glockenspiel.'],
      de: ['Ratskeller München', 'Ein Restaurant in den Gewölbekellern des Neuen Rathauses am Marienplatz: bayerische und fränkische Küche und Wein in bemalten Sälen.', 'Praktisch direkt nach dem Glockenspiel.'],
      fr: ['Ratskeller München', 'Un restaurant dans les caves voûtées du nouvel hôtel de ville sur Marienplatz : cuisine bavaroise et franconienne et vins dans des salles peintes.', 'Pratique juste après le Glockenspiel.'],
      it: ['Ratskeller München', 'Un ristorante nelle cantine a volta del Nuovo Municipio in Marienplatz: cucina bavarese e francone e vino in sale dipinte.', 'Comodo subito dopo il Glockenspiel.'],
    }, { price: level(2), address: 'Marienplatz 8', menu: [
      ['Nürnberger Rostbratwürste', undefined, 'жареные нюрнбергские колбаски с капустой|grilled Nuremberg sausages with sauerkraut|salchichas de Núremberg con chucrut|Nürnberger Rostbratwürste mit Kraut|saucisses de Nuremberg et choucroute|salsicce di Norimberga con crauti'],
      ['Franconian wine', undefined, 'франконское вино|Franconian wine|vino de Franconia|Frankenwein|vin de Franconie|vino della Franconia'],
    ] }),
    P('chinesischer-turm', 'food', 48.1527, 11.5918, PARK, 4.4, 26000, ['food', 'nightlife'], {
      ru: ['Пивной сад у Китайской башни', 'Второй по величине пивной сад Мюнхена (около 7000 мест) в Английском саду у пагоды; по выходным играет духовой оркестр.', 'Можно приносить свою еду — пиво берите здесь; кружку сдают за залог.'],
      en: ['Chinese Tower Beer Garden', 'Munich’s second-largest beer garden (about 7,000 seats) by the pagoda in the English Garden; a brass band plays at weekends.', 'You can bring your own food — buy the beer here; mugs carry a deposit.'],
      es: ['Cervecería de la Torre China', 'La segunda mayor cervecería al aire libre de Múnich (unas 7000 plazas) junto a la pagoda del Jardín Inglés; los fines de semana toca una banda.', 'Puedes traer comida; la cerveza se compra aquí y la jarra lleva fianza.'],
      de: ['Biergarten am Chinesischen Turm', 'Münchens zweitgrößter Biergarten (etwa 7000 Plätze) an der Pagode im Englischen Garten; am Wochenende Blasmusik.', 'Eigene Brotzeit mitbringen ist erlaubt – Bier hier kaufen; auf den Krug gibt es Pfand.'],
      fr: ['Biergarten de la Tour chinoise', 'Le deuxième Biergarten de Munich (environ 7 000 places) près de la pagode du Jardin anglais ; fanfare le week-end.', 'On peut apporter son repas ; la bière s’achète sur place, chope consignée.'],
      it: ['Biergarten della Torre cinese', 'Il secondo biergarten di Monaco (circa 7000 posti) accanto alla pagoda nel Giardino inglese; nel weekend suona la banda.', 'Puoi portare il tuo cibo; la birra si compra qui e il boccale ha la cauzione.'],
    }, { price: level(1), address: 'Englischer Garten 3', menu: [
      ['Maß', undefined, 'литровая кружка пива|one-litre beer mug|jarra de un litro|Maß Bier|chope d’un litre|boccale da un litro'],
      ['Steckerlfisch', undefined, 'рыба на палочке, жаренная на углях|fish grilled on a stick|pescado asado en palo|Steckerlfisch|poisson grillé sur bâton|pesce allo spiedo'],
    ] }),
    P('hirschgarten', 'food', 48.1488, 11.51, PARK, 4.5, 21000, ['food', 'wildlife'], {
      ru: ['Королевский Хиршгартен', 'Крупнейший пивной сад мира (около 8000 мест) рядом с Нимфенбургом; в вольере рядом гуляют олени.', 'Удобно пообедать после дворца Нимфенбург — 15 минут пешком.'],
      en: ['Königlicher Hirschgarten', 'The world’s largest beer garden (about 8,000 seats) near Nymphenburg; deer roam an enclosure next to it.', 'Handy for lunch after Nymphenburg Palace — a 15-minute walk.'],
      es: ['Königlicher Hirschgarten', 'La mayor cervecería al aire libre del mundo (unas 8000 plazas) junto a Nymphenburg; al lado pasean ciervos en un cercado.', 'Práctico para comer tras el palacio de Nymphenburg, a 15 minutos.'],
      de: ['Königlicher Hirschgarten', 'Der größte Biergarten der Welt (etwa 8000 Plätze) nahe Nymphenburg; im Gehege nebenan grasen Hirsche.', 'Praktisch zum Mittagessen nach Schloss Nymphenburg – 15 Minuten zu Fuß.'],
      fr: ['Königlicher Hirschgarten', 'Le plus grand Biergarten du monde (environ 8 000 places) près de Nymphenburg ; des cerfs vivent dans un enclos voisin.', 'Pratique pour déjeuner après Nymphenburg, à 15 minutes à pied.'],
      it: ['Königlicher Hirschgarten', 'Il biergarten più grande del mondo (circa 8000 posti) vicino a Nymphenburg; accanto un recinto di cervi.', 'Comodo per pranzo dopo Nymphenburg, a 15 minuti a piedi.'],
    }, { price: level(1), address: 'Hirschgarten 1', menu: [
      ['Brezn', undefined, 'большой баварский крендель|large Bavarian pretzel|pretzel bávaro grande|große Breze|grand bretzel bavarois|grande brezel bavarese'],
      ['Hendl', undefined, 'половина курицы-гриль|half a roast chicken|medio pollo asado|halbes Hendl|demi-poulet rôti|mezzo pollo arrosto'],
    ] }),
    P('brenner', 'food', 48.1385, 11.581, ALT, 4.4, 5600, ['food'], {
      ru: ['Brenner Grill', 'Ресторан в бывших королевских конюшнях на Максимилианштрассе с открытым грилем, пастой и высокими сводами.', 'Стильное место для ужина после шопинга на Максимилианштрассе.'],
      en: ['Brenner Grill', 'A restaurant in former royal stables on Maximilianstraße with an open grill, pasta and soaring vaults.', 'A stylish dinner spot after shopping on Maximilianstraße.'],
      es: ['Brenner Grill', 'Un restaurante en antiguas caballerizas reales de Maximilianstraße con parrilla abierta, pasta y altas bóvedas.', 'Un sitio con estilo para cenar tras las compras.'],
      de: ['Brenner Grill', 'Ein Restaurant in ehemaligen königlichen Stallungen an der Maximilianstraße mit offenem Grill, Pasta und hohen Gewölben.', 'Ein stilvoller Ort fürs Abendessen nach dem Shopping.'],
      fr: ['Brenner Grill', 'Un restaurant dans d’anciennes écuries royales de la Maximilianstraße, gril ouvert, pâtes et hautes voûtes.', 'Une adresse chic pour dîner après le shopping.'],
      it: ['Brenner Grill', 'Un ristorante nelle ex scuderie reali di Maximilianstraße con griglia a vista, pasta e alte volte.', 'Un posto elegante per cenare dopo lo shopping.'],
    }, { price: level(2), address: 'Maximilianstraße 15', menu: [
      ['Grilled steak', undefined, 'стейк с гриля|grilled steak|filete a la parrilla|Steak vom Grill|steak grillé|bistecca alla griglia'],
      ['Pasta', undefined, 'паста|pasta|pasta|Pasta|pâtes|pasta'],
    ] }),
  ],
  routes: [
    D(['frauenkirche', '=munich-marienplatz', 'alter-peter', '=munich-viktualienmarkt', '=munich-asamkirche', 'residenz', 'odeonsplatz', '=munich-hofbraeuhaus'],
      'Мариенплац, Резиденция и Хофбройхаус|Marienplatz, the Residenz and the Hofbräuhaus|Marienplatz, la Residencia y la Hofbräuhaus|Marienplatz, Residenz und Hofbräuhaus|Marienplatz, la Résidence et la Hofbräuhaus|Marienplatz, la Residenza e l’Hofbräuhaus'),
    D(['cafe-luitpold', 'alte-pinakothek', 'english-garden', '=munich-eisbachwelle', 'chinesischer-turm', 'deutsches-museum', 'tantris'],
      'Пинакотека, Английский сад и серферы на Айсбахе|The Pinakothek, the English Garden and Eisbach surfers|La Pinakothek, el Jardín Inglés y los surfistas del Eisbach|Pinakothek, Englischer Garten und Eisbach-Surfer|La Pinakothek, le Jardin anglais et les surfeurs de l’Eisbach|La Pinakothek, il Giardino inglese e i surfisti dell’Eisbach'),
    D(['nymphenburg', 'hirschgarten', 'bmw-welt', '=munich-olympiaberg', '=munich-augustiner-keller'],
      'Нимфенбург, BMW и Олимпийский парк|Nymphenburg, BMW and the Olympic Park|Nymphenburg, BMW y el Parque Olímpico|Nymphenburg, BMW und Olympiapark|Nymphenburg, BMW et le parc olympique|Nymphenburg, BMW e il Parco olimpico'),
  ],
};

export default pack;
