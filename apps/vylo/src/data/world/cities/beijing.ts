import type { CityPack } from '../types';
import { free, level, makeDay, makePlace } from './_kit.ts';

const P = makePlace('beijing');
const D = makeDay('beijing');
const PALACE = '2RGwK0NDLv8';
const ROOFS = 'hXMLU0KjdAs';
const TEMPLE = 'MbEr7b5qzwM';
const HEAVEN = '0xn9T2cEigE';
const WALL = 'HCcp8MIAZ8o';
const FOOD = 'hvQSBIbsTdA';

const pack: CityPack = {
  country: 'CN',
  city: 'beijing',
  places: [
    P('tiananmen-square', 'attraction', 39.9055, 116.3976, PALACE, 4.5, 41000, ['history', 'architecture'], {
      ru: ['Площадь Тяньаньмэнь', 'Огромная площадь перед воротами Запретного города с памятником Народным героям и мавзолеем; на рассвете здесь поднимают флаг.', 'Вход по предварительной онлайн-брони и с паспортом, на входе досмотр — оставьте время.'],
      en: ['Tiananmen Square', 'A vast square before the gate of the Forbidden City, with the Monument to the People’s Heroes and the mausoleum; the flag is raised at dawn.', 'Entry needs an advance online booking and your passport, with a security check — allow time.'],
      es: ['Plaza de Tiananmén', 'Una plaza inmensa ante la puerta de la Ciudad Prohibida, con el Monumento a los Héroes del Pueblo y el mausoleo; al amanecer se iza la bandera.', 'Se entra con reserva online previa y pasaporte, con control de seguridad: calcula tiempo.'],
      de: ['Platz des Himmlischen Friedens', 'Ein riesiger Platz vor dem Tor der Verbotenen Stadt mit dem Denkmal für die Volkshelden und dem Mausoleum; bei Sonnenaufgang wird die Flagge gehisst.', 'Zutritt mit vorheriger Online-Reservierung und Reisepass, mit Sicherheitskontrolle – Zeit einplanen.'],
      fr: ['Place Tian’anmen', 'Une place immense devant la porte de la Cité interdite, avec le monument aux Héros du peuple et le mausolée ; le drapeau est hissé à l’aube.', 'Entrée sur réservation en ligne et passeport, avec contrôle de sécurité : prévoyez du temps.'],
      it: ['Piazza Tienanmen', 'Un’enorme piazza davanti alla porta della Città Proibita, con il Monumento agli Eroi del Popolo e il mausoleo; all’alba si issa la bandiera.', 'Si entra con prenotazione online e passaporto, con controllo di sicurezza: calcola tempo.'],
    }, { price: free }),
    P('national-museum', 'attraction', 39.905, 116.401, PALACE, 4.6, 19000, ['museums', 'history'], {
      ru: ['Национальный музей Китая', 'Один из крупнейших музеев мира на восточной стороне Тяньаньмэнь: бронза, нефрит, фарфор и история страны от древности.', 'Вход бесплатный по брони с паспортом; в понедельник закрыто.'],
      en: ['National Museum of China', 'One of the world’s largest museums, on the east side of Tiananmen: bronzes, jade, porcelain and the country’s history from antiquity.', 'Free entry with a booking and passport; closed on Mondays.'],
      es: ['Museo Nacional de China', 'Uno de los mayores museos del mundo, en el lado este de Tiananmén: bronces, jade, porcelana e historia del país desde la Antigüedad.', 'Entrada gratuita con reserva y pasaporte; cierra los lunes.'],
      de: ['Chinesisches Nationalmuseum', 'Eines der größten Museen der Welt an der Ostseite des Tian’anmen: Bronzen, Jade, Porzellan und Landesgeschichte seit der Antike.', 'Eintritt frei mit Reservierung und Reisepass; montags geschlossen.'],
      fr: ['Musée national de Chine', 'L’un des plus grands musées du monde, à l’est de Tian’anmen : bronzes, jades, porcelaines et histoire du pays depuis l’Antiquité.', 'Entrée gratuite sur réservation avec passeport ; fermé le lundi.'],
      it: ['Museo nazionale della Cina', 'Uno dei più grandi musei del mondo, sul lato est di Tienanmen: bronzi, giade, porcellane e la storia del Paese dall’antichità.', 'Ingresso gratuito con prenotazione e passaporto; chiuso il lunedì.'],
    }, { price: free }),
    P('shichahai', 'attraction', 39.94, 116.385, ROOFS, 4.5, 23000, ['oldtown', 'nightlife', 'lakes'], {
      ru: ['Шичахай и Хоухай', 'Три озера в старом городе с хутунами, мостом Иньдинцяо, барами у воды, а зимой — катком на льду.', 'Возьмите велорикшу по хутунам, но договоритесь о цене заранее.'],
      en: ['Shichahai and Houhai', 'Three lakes in the old city with hutongs, the Yinding Bridge, waterside bars and ice skating in winter.', 'Take a rickshaw through the hutongs, but agree the price first.'],
      es: ['Shichahai y Houhai', 'Tres lagos en la ciudad vieja con hutongs, el puente Yinding, bares junto al agua y patinaje sobre hielo en invierno.', 'Recorre los hutongs en bicitaxi, pero acuerda el precio antes.'],
      de: ['Shichahai und Houhai', 'Drei Seen in der Altstadt mit Hutongs, der Yinding-Brücke, Bars am Wasser und Eislaufen im Winter.', 'Mit der Rikscha durch die Hutongs fahren, aber vorher den Preis ausmachen.'],
      fr: ['Shichahai et Houhai', 'Trois lacs dans la vieille ville avec hutongs, pont Yinding, bars au bord de l’eau et patinage l’hiver.', 'Faites un tour des hutongs en pousse-pousse, mais fixez le prix avant.'],
      it: ['Shichahai e Houhai', 'Tre laghi nella città vecchia con hutong, il ponte Yinding, bar sull’acqua e pattinaggio d’inverno.', 'Fai un giro degli hutong in risciò, ma concorda prima il prezzo.'],
    }, { spot: 'insta', price: free }),
    P('nanluoguxiang', 'attraction', 39.937, 116.403, ROOFS, 4.1, 26000, ['oldtown', 'shopping', 'streetfood'], {
      ru: ['Наньлогусян', 'Хутун длиной около 800 м, которому около 700 лет: лавки, кафе и уличная еда, а в боковых переулках — тихие старые дворы.', 'Сворачивайте в боковые хутуны — там меньше людей и настоящий старый Пекин.'],
      en: ['Nanluoguxiang', 'A hutong about 800 m long and some 700 years old: shops, cafés and street food, with quiet old courtyards in the side lanes.', 'Turn into the side hutongs — fewer people and the real old Beijing.'],
      es: ['Nanluoguxiang', 'Un hutong de unos 800 m y unos 700 años: tiendas, cafés y comida callejera, con patios antiguos tranquilos en las callejas laterales.', 'Métete en los hutongs laterales: menos gente y el viejo Pekín de verdad.'],
      de: ['Nanluoguxiang', 'Ein rund 800 m langer, etwa 700 Jahre alter Hutong: Läden, Cafés und Streetfood, in den Seitengassen stille alte Höfe.', 'In die Seitenhutongs abbiegen – weniger Leute, echtes altes Peking.'],
      fr: ['Nanluoguxiang', 'Un hutong d’environ 800 m, vieux de quelque 700 ans : boutiques, cafés et street food, avec de vieilles cours calmes dans les ruelles.', 'Prenez les hutongs latéraux : moins de monde, le vrai vieux Pékin.'],
      it: ['Nanluoguxiang', 'Un hutong di circa 800 m e circa 700 anni: negozi, caffè e cibo di strada, con vecchi cortili tranquilli nei vicoli laterali.', 'Infilati negli hutong laterali: meno gente e la vera vecchia Pechino.'],
    }, { price: free }),
    P('beihai-park', 'nature', 39.9255, 116.3895, ROOFS, 4.6, 21000, ['gardens', 'history', 'lakes'], {
      ru: ['Парк Бэйхай', 'Императорский сад у озера с Белой дагобой 1651 года на острове Цюнхуа и павильонами вдоль воды.', 'Возьмите лодку на озере и поднимитесь к дагобе — вид на Запретный город.'],
      en: ['Beihai Park', 'An imperial lakeside garden with the White Dagoba of 1651 on Jade Flower Island and pavilions along the water.', 'Rent a boat and climb up to the dagoba for a view of the Forbidden City.'],
      es: ['Parque Beihai', 'Un jardín imperial junto al lago con la Dagoba Blanca de 1651 en la isla de la Flor de Jade y pabellones junto al agua.', 'Alquila una barca y sube a la dagoba: vista de la Ciudad Prohibida.'],
      de: ['Beihai-Park', 'Ein kaiserlicher Seegarten mit der Weißen Dagoba von 1651 auf der Jadeblumeninsel und Pavillons am Wasser.', 'Ein Boot mieten und zur Dagoba hinaufsteigen – Blick auf die Verbotene Stadt.'],
      fr: ['Parc Beihai', 'Un jardin impérial au bord du lac avec le Dagoba blanc de 1651 sur l’île de la Fleur de jade et des pavillons au fil de l’eau.', 'Louez une barque et montez au dagoba : vue sur la Cité interdite.'],
      it: ['Parco Beihai', 'Un giardino imperiale sul lago con la Dagoba Bianca del 1651 sull’Isola del Fiore di Giada e padiglioni sull’acqua.', 'Noleggia una barca e sali alla dagoba: vista sulla Città Proibita.'],
    }, { spot: 'insta', price: level(1) }),
    P('jinshanling', 'attraction', 40.6763, 117.234, WALL, 4.8, 9800, ['hiking', 'history', 'unesco'], {
      ru: ['Великая стена Цзиньшаньлин', 'Участок стены эпохи Мин (1570-е) в горах с частично отреставрированными башнями — меньше людей, чем в Бадалине и Мутяньюе.', 'Это 2–2,5 часа от Пекина; на рассвете и закате здесь лучшие фото стены.'],
      en: ['Jinshanling Great Wall', 'A Ming-era stretch (1570s) in the mountains with partly restored towers — far fewer people than Badaling or Mutianyu.', 'It’s 2–2.5 hours from Beijing; sunrise and sunset give the best Wall photos.'],
      es: ['Gran Muralla de Jinshanling', 'Un tramo de la dinastía Ming (década de 1570) en las montañas con torres en parte restauradas: mucha menos gente que en Badaling o Mutianyu.', 'Está a 2–2,5 horas de Pekín; amanecer y atardecer dan las mejores fotos.'],
      de: ['Große Mauer bei Jinshanling', 'Ein Ming-Abschnitt (1570er) in den Bergen mit teils restaurierten Türmen – viel weniger Menschen als in Badaling oder Mutianyu.', '2–2,5 Stunden ab Peking; Sonnenauf- und -untergang bringen die besten Fotos.'],
      fr: ['Grande Muraille de Jinshanling', 'Un tronçon Ming (années 1570) dans les montagnes aux tours en partie restaurées : bien moins de monde qu’à Badaling ou Mutianyu.', 'À 2 h–2 h 30 de Pékin ; lever et coucher du soleil donnent les plus belles photos.'],
      it: ['Grande Muraglia di Jinshanling', 'Un tratto Ming (anni 1570) tra i monti con torri in parte restaurate: molta meno gente che a Badaling o Mutianyu.', 'A 2–2,5 ore da Pechino; alba e tramonto regalano le foto migliori.'],
    }, { spot: 'hidden', price: level(1) }),
    P('798-art-district', 'attraction', 39.984, 116.495, TEMPLE, 4.4, 17000, ['art', 'architecture'], {
      ru: ['Арт-район 798', 'Бывшие заводские корпуса 1950-х в баухаус-стиле, построенные при участии ГДР, а теперь — галереи, мастерские и кафе.', 'Начните с центра UCCA — самой известной галереи района.'],
      en: ['798 Art District', 'Former 1950s Bauhaus-style factory halls built with East German help, now galleries, studios and cafés.', 'Start with the UCCA Center — the district’s best-known gallery.'],
      es: ['Distrito de Arte 798', 'Antiguas naves industriales de los años cincuenta de estilo Bauhaus, construidas con ayuda de la RDA, hoy galerías, estudios y cafés.', 'Empieza por el UCCA Center, la galería más conocida del distrito.'],
      de: ['Kunstbezirk 798', 'Ehemalige Bauhaus-Fabrikhallen aus den 1950ern, mit DDR-Hilfe gebaut, heute Galerien, Ateliers und Cafés.', 'Mit dem UCCA Center beginnen – der bekanntesten Galerie des Viertels.'],
      fr: ['Quartier artistique 798', 'D’anciennes usines des années 1950 de style Bauhaus, bâties avec l’aide de la RDA, devenues galeries, ateliers et cafés.', 'Commencez par l’UCCA Center, la galerie la plus connue du quartier.'],
      it: ['Distretto artistico 798', 'Ex capannoni industriali anni Cinquanta in stile Bauhaus, costruiti con l’aiuto della DDR, oggi gallerie, studi e caffè.', 'Inizia dall’UCCA Center, la galleria più nota del distretto.'],
    }, { spot: 'insta', price: free }),
    P('olympic-park', 'attraction', 39.9929, 116.3965, TEMPLE, 4.4, 24000, ['architecture', 'photo'], {
      ru: ['Олимпийский парк («Птичье гнездо»)', 'Стадион «Птичье гнездо» и «Водный куб» — арены Олимпиад 2008 и 2022 годов; вечером их подсвечивают.', 'Приходите после заката: подсветка стадиона — главное шоу парка.'],
      en: ['Olympic Park (Bird’s Nest)', 'The Bird’s Nest stadium and the Water Cube — venues of the 2008 and 2022 Olympics, lit up in the evening.', 'Come after sunset: the stadium lighting is the park’s main show.'],
      es: ['Parque Olímpico (Nido de Pájaro)', 'El estadio Nido de Pájaro y el Cubo de Agua, sedes de los Juegos de 2008 y 2022, iluminados por la noche.', 'Ve tras la puesta de sol: la iluminación del estadio es el espectáculo.'],
      de: ['Olympiapark (Vogelnest)', 'Das Vogelnest-Stadion und der Wasserwürfel – Spielstätten der Olympischen Spiele 2008 und 2022, abends beleuchtet.', 'Nach Sonnenuntergang kommen: Die Stadionbeleuchtung ist die Hauptshow.'],
      fr: ['Parc olympique (Nid d’oiseau)', 'Le stade du Nid d’oiseau et le Cube d’eau, sites des Jeux de 2008 et 2022, illuminés le soir.', 'Venez après le coucher du soleil : l’éclairage du stade est le clou du parc.'],
      it: ['Parco olimpico (Nido d’Uccello)', 'Lo stadio Nido d’Uccello e il Cubo d’Acqua, sedi delle Olimpiadi 2008 e 2022, illuminati la sera.', 'Vieni dopo il tramonto: l’illuminazione dello stadio è lo spettacolo.'],
    }, { price: free }),
    P('ming-tombs', 'attraction', 40.301, 116.244, TEMPLE, 4.3, 9900, ['history', 'unesco'], {
      ru: ['Гробницы династии Мин', 'Долина с усыпальницами 13 императоров Мин (ЮНЕСКО): мавзолей Чанлин и Священная дорога со статуями животных и чиновников.', 'Удобно совместить с поездкой на Великую стену в Мутяньюй.'],
      en: ['Ming Tombs', 'A valley holding the tombs of 13 Ming emperors (UNESCO): the Changling mausoleum and the Sacred Way lined with stone animals and officials.', 'Easy to combine with a trip to the Great Wall at Mutianyu.'],
      es: ['Tumbas Ming', 'Un valle con las tumbas de 13 emperadores Ming (UNESCO): el mausoleo Changling y la Vía Sagrada con animales y funcionarios de piedra.', 'Se combina fácil con la Gran Muralla en Mutianyu.'],
      de: ['Ming-Gräber', 'Ein Tal mit den Gräbern von 13 Ming-Kaisern (UNESCO): das Changling-Mausoleum und der Heilige Weg mit Steintieren und Beamten.', 'Gut mit einem Ausflug zur Großen Mauer in Mutianyu kombinierbar.'],
      fr: ['Tombeaux des Ming', 'Une vallée abritant les tombeaux de 13 empereurs Ming (UNESCO) : le mausolée Changling et la Voie sacrée bordée d’animaux et de mandarins de pierre.', 'Facile à combiner avec la Grande Muraille à Mutianyu.'],
      it: ['Tombe Ming', 'Una valle con le tombe di 13 imperatori Ming (UNESCO): il mausoleo Changling e la Via Sacra con animali e funzionari di pietra.', 'Si abbina bene alla Grande Muraglia di Mutianyu.'],
    }, { price: level(1) }),
    P('prince-gong-mansion', 'attraction', 39.937, 116.386, ROOFS, 4.4, 16000, ['history', 'gardens', 'architecture'], {
      ru: ['Дворец князя Гуна', 'Крупнейшая сохранившаяся княжеская усадьба эпохи Цин с садом, гротами и театральным залом; когда-то принадлежала вельможе Хэшэню.', 'Билеты лучше брать онлайн заранее — в выходные их разбирают.'],
      en: ['Prince Gong’s Mansion', 'The largest surviving Qing princely mansion, with a garden, grottoes and a theatre hall; it once belonged to the official Heshen.', 'Buy tickets online in advance — weekends sell out.'],
      es: ['Mansión del Príncipe Gong', 'La mayor mansión principesca Qing conservada, con jardín, grutas y teatro; perteneció al alto funcionario Heshen.', 'Compra entradas online con antelación: el fin de semana se agotan.'],
      de: ['Palast des Prinzen Gong', 'Der größte erhaltene Prinzenpalast der Qing-Zeit mit Garten, Grotten und Theatersaal; einst Besitz des Würdenträgers Heshen.', 'Tickets vorab online kaufen – am Wochenende ausverkauft.'],
      fr: ['Résidence du prince Gong', 'La plus grande résidence princière Qing conservée, avec jardin, grottes et salle de théâtre ; elle appartint au mandarin Heshen.', 'Achetez en ligne à l’avance : le week-end, c’est complet.'],
      it: ['Residenza del principe Gong', 'La più grande residenza principesca Qing conservata, con giardino, grotte e sala teatrale; appartenne al funzionario Heshen.', 'Compra online in anticipo: nel weekend va esaurito.'],
    }, { price: level(1) }),
    P('yuanmingyuan', 'nature', 40.008, 116.298, TEMPLE, 4.4, 14000, ['history', 'gardens', 'lakes'], {
      ru: ['Юаньминъюань (Старый летний дворец)', 'Огромный императорский парк, разрушенный британскими и французскими войсками в 1860 году; руины европейских павильонов среди озёр.', 'Возьмите билет в зону руин Сиянлоу — это главное зрелище парка.'],
      en: ['Yuanmingyuan (Old Summer Palace)', 'A vast imperial park destroyed by British and French troops in 1860; ruins of European-style pavilions among the lakes.', 'Get the ticket for the Xiyanglou ruins — the park’s main sight.'],
      es: ['Yuanmingyuan (Antiguo Palacio de Verano)', 'Un inmenso parque imperial destruido por tropas británicas y francesas en 1860; ruinas de pabellones europeos entre lagos.', 'Compra la entrada a las ruinas de Xiyanglou, lo más impresionante.'],
      de: ['Yuanmingyuan (Alter Sommerpalast)', 'Ein riesiger Kaiserpark, 1860 von britischen und französischen Truppen zerstört; Ruinen europäischer Pavillons zwischen Seen.', 'Das Ticket für die Xiyanglou-Ruinen nehmen – der Höhepunkt des Parks.'],
      fr: ['Yuanmingyuan (ancien palais d’Été)', 'Un immense parc impérial détruit par les troupes britanniques et françaises en 1860 ; ruines de pavillons à l’européenne entre les lacs.', 'Prenez le billet des ruines de Xiyanglou, le clou du parc.'],
      it: ['Yuanmingyuan (Antico Palazzo d’Estate)', 'Un immenso parco imperiale distrutto dalle truppe britanniche e francesi nel 1860; rovine di padiglioni europei tra i laghi.', 'Prendi il biglietto per le rovine di Xiyanglou, il clou del parco.'],
    }, { price: level(1) }),
    P('drum-and-bell-towers', 'attraction', 39.941, 116.394, ROOFS, 4.3, 9200, ['history', 'architecture'], {
      ru: ['Барабанная и Колокольная башни', 'Две башни, по которым когда-то отсчитывали время в городе; на Барабанной несколько раз в день играют на больших барабанах.', 'Подгадайте к выступлению барабанщиков — оно идёт по расписанию.'],
      en: ['Drum and Bell Towers', 'Two towers that once kept time for the city; drummers perform on the great drums several times a day.', 'Time your visit for a drum show — it runs on a schedule.'],
      es: ['Torres del Tambor y de la Campana', 'Dos torres que marcaban la hora de la ciudad; en la del Tambor tocan los grandes tambores varias veces al día.', 'Ajusta la visita a un espectáculo de tambores: siguen un horario.'],
      de: ['Trommel- und Glockenturm', 'Zwei Türme, die einst die Zeit der Stadt angaben; auf dem Trommelturm wird mehrmals täglich getrommelt.', 'Den Besuch auf eine Trommelvorführung legen – sie folgen einem Plan.'],
      fr: ['Tours du Tambour et de la Cloche', 'Deux tours qui donnaient jadis l’heure à la ville ; des tambours y résonnent plusieurs fois par jour.', 'Calez votre visite sur une démonstration de tambours, selon un horaire.'],
      it: ['Torri del Tamburo e della Campana', 'Due torri che un tempo scandivano l’ora della città; sui grandi tamburi si suona più volte al giorno.', 'Fai coincidere la visita con uno spettacolo di tamburi, a orario fisso.'],
    }, { price: level(1) }),
    P('fayuan-temple', 'attraction', 39.884, 116.365, TEMPLE, 4.4, 2900, ['temples', 'history'], {
      ru: ['Храм Фаюаньсы', 'Старейший буддийский храм в черте города, основанный в 645 году; здесь работает Буддийская академия, а в апреле цветёт сирень.', 'Тихий храм без толп — монахи здесь живут и учатся.'],
      en: ['Fayuan Temple', 'The oldest Buddhist temple within the city, founded in 645; it houses a Buddhist academy, and lilacs bloom in April.', 'A quiet temple without crowds — monks live and study here.'],
      es: ['Templo Fayuan', 'El templo budista más antiguo de la ciudad, fundado en 645; alberga una academia budista y en abril florecen las lilas.', 'Un templo tranquilo sin multitudes: aquí viven y estudian monjes.'],
      de: ['Fayuan-Tempel', 'Der älteste buddhistische Tempel innerhalb der Stadt, gegründet 645; mit buddhistischer Akademie, im April blüht Flieder.', 'Ein ruhiger Tempel ohne Massen – hier leben und studieren Mönche.'],
      fr: ['Temple Fayuan', 'Le plus ancien temple bouddhiste intra-muros, fondé en 645 ; il abrite une académie bouddhique, et les lilas fleurissent en avril.', 'Un temple paisible sans foule : des moines y vivent et étudient.'],
      it: ['Tempio Fayuan', 'Il più antico tempio buddhista in città, fondato nel 645; ospita un’accademia buddhista e ad aprile fioriscono i lillà.', 'Un tempio tranquillo senza folla: qui vivono e studiano i monaci.'],
    }, { spot: 'hidden', price: level(1) }),
    P('xin-rong-ji', 'food', 39.954, 116.458, FOOD, 4.6, 1600, ['food', 'luxury'], {
      ru: ['Xin Rong Ji (Синьюань Наньлу)', 'Ресторан кухни Тайчжоу (провинция Чжэцзян) с морепродуктами Восточно-Китайского моря и очень точной классической подачей.', 'Бронируйте заранее; обед проще получить, чем ужин.'],
      en: ['Xin Rong Ji (Xinyuan South Road)', 'A Taizhou (Zhejiang) cuisine restaurant built on East China Sea seafood and very precise classic cooking.', 'Book ahead; lunch is easier to get than dinner.'],
      es: ['Xin Rong Ji (Xinyuan South Road)', 'Un restaurante de cocina de Taizhou (Zhejiang) basado en marisco del mar de China Oriental y una cocina clásica muy precisa.', 'Reserva con antelación; el almuerzo es más fácil.'],
      de: ['Xin Rong Ji (Xinyuan South Road)', 'Ein Restaurant mit Taizhou-Küche (Zhejiang) auf Basis von Meeresfrüchten aus dem Ostchinesischen Meer und sehr präziser klassischer Küche.', 'Vorher buchen; mittags ist es leichter.'],
      fr: ['Xin Rong Ji (Xinyuan South Road)', 'Un restaurant de cuisine de Taizhou (Zhejiang) fondé sur les fruits de mer de la mer de Chine orientale et une cuisine classique très précise.', 'Réservez à l’avance ; le déjeuner est plus facile.'],
      it: ['Xin Rong Ji (Xinyuan South Road)', 'Un ristorante di cucina di Taizhou (Zhejiang) basato sui frutti di mare del Mar Cinese Orientale e su una cucina classica precisissima.', 'Prenota in anticipo; il pranzo è più facile.'],
    }, { price: level(3), address: 'Xinyuan South Road, Chaoyang', michelin: { award: 'star3', year: 2027 }, menu: [
      ['Taizhou seafood', undefined, 'морепродукты в стиле Тайчжоу|Taizhou-style seafood|marisco al estilo de Taizhou|Meeresfrüchte nach Taizhou-Art|fruits de mer à la mode de Taizhou|frutti di mare alla Taizhou'],
      ['Tasting menu', undefined, 'дегустационное меню|tasting menu|menú degustación|Degustationsmenü|menu dégustation|menu degustazione'],
    ] }),
    P('kings-joy', 'food', 39.948, 116.414, TEMPLE, 4.6, 1900, ['food', 'luxury', 'romance'], {
      ru: ['King’s Joy', 'Изысканный вегетарианский ресторан в хутуне Удаоин напротив храма Юнхэгун: овощи, грибы и тофу в дегустационных сетах.', 'Бронируйте за несколько недель — столы разбирают быстро.'],
      en: ['King’s Joy', 'A refined vegetarian restaurant in Wudaoying Hutong opposite the Lama Temple: vegetables, mushrooms and tofu in tasting menus.', 'Book a few weeks ahead — tables go fast.'],
      es: ['King’s Joy', 'Un refinado restaurante vegetariano en el hutong Wudaoying, frente al Templo de los Lamas: verduras, setas y tofu en menús degustación.', 'Reserva con semanas: las mesas vuelan.'],
      de: ['King’s Joy', 'Ein feines vegetarisches Restaurant im Wudaoying-Hutong gegenüber dem Lamatempel: Gemüse, Pilze und Tofu in Degustationsmenüs.', 'Einige Wochen vorher buchen – die Tische sind schnell weg.'],
      fr: ['King’s Joy', 'Un restaurant végétarien raffiné dans le hutong Wudaoying, face au temple des Lamas : légumes, champignons et tofu en menus dégustation.', 'Réservez quelques semaines avant : les tables partent vite.'],
      it: ['King’s Joy', 'Un raffinato ristorante vegetariano nell’hutong Wudaoying di fronte al Tempio dei Lama: verdure, funghi e tofu in menu degustazione.', 'Prenota qualche settimana prima: i tavoli vanno a ruba.'],
    }, { price: level(3), address: '2 Wudaoying Hutong, Dongcheng', michelin: { award: 'star2', year: 2027 }, menu: [
      ['Vegetarian tasting menu', undefined, 'вегетарианское дегустационное меню|vegetarian tasting menu|menú degustación vegetariano|vegetarisches Degustationsmenü|menu dégustation végétarien|menu degustazione vegetariano'],
      ['Seasonal mushrooms', undefined, 'блюда из сезонных грибов|seasonal mushroom dishes|platos de setas de temporada|saisonale Pilzgerichte|plats de champignons de saison|piatti di funghi di stagione'],
    ] }),
    P('da-dong', 'food', 39.933, 116.43, FOOD, 4.4, 11000, ['food', 'history'], {
      ru: ['Da Dong (Наньсиньцан)', 'Ресторан шефа Дун Чжэньсяна, прославивший менее жирную утку по-пекински; один из залов — в старых зернохранилищах эпохи Мин.', 'Утку нарезают у стола — закажите половину на двоих.'],
      en: ['Da Dong (Nanxincang)', 'Chef Dong Zhenxiang’s restaurant, famous for a leaner Peking duck; one branch sits in old Ming-dynasty granaries.', 'The duck is carved at the table — a half is plenty for two.'],
      es: ['Da Dong (Nanxincang)', 'El restaurante del chef Dong Zhenxiang, famoso por un pato pekinés menos graso; una sede está en antiguos graneros Ming.', 'Trinchan el pato en la mesa: medio basta para dos.'],
      de: ['Da Dong (Nanxincang)', 'Das Restaurant von Küchenchef Dong Zhenxiang, berühmt für eine magere Pekingente; eine Filiale liegt in alten Ming-Speichern.', 'Die Ente wird am Tisch tranchiert – eine halbe reicht für zwei.'],
      fr: ['Da Dong (Nanxincang)', 'Le restaurant du chef Dong Zhenxiang, célèbre pour un canard laqué moins gras ; une adresse occupe d’anciens greniers Ming.', 'Le canard est découpé à table : une moitié suffit pour deux.'],
      it: ['Da Dong (Nanxincang)', 'Il ristorante dello chef Dong Zhenxiang, famoso per un’anatra laccata meno grassa; una sede è in antichi granai Ming.', 'L’anatra si taglia al tavolo: mezza basta per due.'],
    }, { price: level(3), menu: [
      ['Peking duck', undefined, 'утка по-пекински с блинчиками|Peking duck with pancakes|pato pekinés con crepes|Pekingente mit Pfannkuchen|canard laqué et crêpes|anatra laccata con crespelle'],
      ['Braised sea cucumber', undefined, 'тушёный трепанг|braised sea cucumber|cohombro de mar estofado|geschmorte Seegurke|holothurie braisée|oloturia brasata'],
    ] }),
    P('jinding-xuan', 'food', 39.948, 116.417, TEMPLE, 4.2, 6800, ['food'], {
      ru: ['Цзиньдинсюань', 'Большой кантонский ресторан дим-самов у храма Юнхэгун — шумно, быстро и недорого.', 'Заказывайте по бланку: отметьте сяолунбао, ча-шао-бао и креветочные хар-гоу.'],
      en: ['Jin Ding Xuan', 'A big Cantonese dim sum hall by the Lama Temple — loud, quick and cheap.', 'Order on the form: tick xiaolongbao, char siu bao and har gow.'],
      es: ['Jin Ding Xuan', 'Un gran salón cantonés de dim sum junto al Templo de los Lamas: ruidoso, rápido y barato.', 'Pide en la hoja: marca xiaolongbao, char siu bao y har gow.'],
      de: ['Jin Ding Xuan', 'Eine große kantonesische Dim-Sum-Halle am Lamatempel – laut, schnell und günstig.', 'Auf dem Zettel bestellen: Xiaolongbao, Char Siu Bao und Har Gow ankreuzen.'],
      fr: ['Jin Ding Xuan', 'Une grande salle de dim sum cantonais près du temple des Lamas : bruyant, rapide et bon marché.', 'Commandez sur la fiche : cochez xiaolongbao, char siu bao et har gow.'],
      it: ['Jin Ding Xuan', 'Una grande sala cantonese di dim sum vicino al Tempio dei Lama: rumorosa, veloce ed economica.', 'Ordina sul modulo: spunta xiaolongbao, char siu bao e har gow.'],
    }, { price: level(1), menu: [
      ['Har gow', undefined, 'креветочные пельмени хар-гоу|shrimp dumplings|empanadillas de gamba|Garnelenteigtaschen|raviolis aux crevettes|ravioli di gamberi'],
      ['Char siu bao', undefined, 'паровые булочки со свининой ча-шао|steamed barbecue pork buns|bollos al vapor de cerdo asado|gedämpfte Char-Siu-Brötchen|brioches vapeur au porc laqué|panini al vapore col maiale arrosto'],
    ] }),
    P('yaoji-chaogan', 'food', 39.94, 116.395, ROOFS, 4.2, 5900, ['food', 'streetfood', 'history'], {
      ru: ['Яоцзи Чаогань', 'Народная закусочная у Барабанной башни с чаогань — пекинским рагу из печени и кишок — и паровыми баоцзы; в 2011 году сюда заходил Джо Байден.', 'Чаогань по традиции едят без ложки, прихлёбывая из миски.'],
      en: ['Yaoji Chaogan', 'A no-frills eatery by the Drum Tower serving chaogan — Beijing’s liver-and-intestine stew — and steamed baozi; Joe Biden ate here in 2011.', 'Chaogan is traditionally slurped from the bowl, without a spoon.'],
      es: ['Yaoji Chaogan', 'Una casa de comidas sencilla junto a la Torre del Tambor con chaogan, guiso pekinés de hígado e intestinos, y baozi al vapor; Joe Biden comió aquí en 2011.', 'El chaogan se sorbe del cuenco, sin cuchara.'],
      de: ['Yaoji Chaogan', 'Ein schlichtes Lokal am Trommelturm mit Chaogan – Pekinger Leber-Darm-Eintopf – und gedämpften Baozi; Joe Biden aß hier 2011.', 'Chaogan schlürft man traditionell aus der Schale, ohne Löffel.'],
      fr: ['Yaoji Chaogan', 'Une gargote près de la tour du Tambour servant le chaogan, ragoût pékinois de foie et d’intestins, et des baozi vapeur ; Joe Biden y a mangé en 2011.', 'Le chaogan se boit à même le bol, sans cuillère.'],
      it: ['Yaoji Chaogan', 'Una trattoria semplice vicino alla Torre del Tamburo con il chaogan, stufato pechinese di fegato e trippa, e baozi al vapore; Joe Biden ci mangiò nel 2011.', 'Il chaogan si sorseggia dalla ciotola, senza cucchiaio.'],
    }, { price: level(1), menu: [
      ['Chaogan', undefined, 'густое рагу из свиной печени и кишок|thick pork liver and intestine stew|guiso espeso de hígado e intestino de cerdo|dicker Schweineleber-Darm-Eintopf|ragoût épais de foie et d’intestins de porc|stufato denso di fegato e trippa di maiale'],
      ['Baozi', undefined, 'паровые пирожки со свининой|steamed pork buns|bollos al vapor de cerdo|gedämpfte Schweinefleischtaschen|brioches vapeur au porc|panini al vapore col maiale'],
    ] }),
    P('dong-lai-shun', 'food', 39.914, 116.411, FOOD, 4.2, 7400, ['food', 'history'], {
      ru: ['Дунлайшунь', 'Мусульманский ресторан с 1903 года, где баранину тонко нарезают и варят в медном самоваре-хого.', 'Обмакивайте баранину в кунжутный соус — так едят в Пекине.'],
      en: ['Dong Lai Shun', 'A Muslim restaurant since 1903 where thinly sliced lamb is cooked in a copper chimney hot pot.', 'Dip the lamb in sesame sauce — the Beijing way.'],
      es: ['Dong Lai Shun', 'Un restaurante musulmán desde 1903 donde el cordero en lonchas finas se cuece en una olla de cobre con chimenea.', 'Moja el cordero en salsa de sésamo, al estilo pekinés.'],
      de: ['Dong Lai Shun', 'Ein muslimisches Restaurant seit 1903, in dem dünn geschnittenes Lamm im kupfernen Kamin-Feuertopf gegart wird.', 'Das Lamm in Sesamsoße tunken – auf Pekinger Art.'],
      fr: ['Dong Lai Shun', 'Un restaurant musulman depuis 1903 où l’agneau en fines tranches cuit dans une marmite en cuivre à cheminée.', 'Trempez l’agneau dans la sauce au sésame, à la pékinoise.'],
      it: ['Dong Lai Shun', 'Un ristorante musulmano dal 1903 dove l’agnello a fettine sottili cuoce in una pentola di rame a camino.', 'Intingi l’agnello nella salsa di sesamo, alla pechinese.'],
    }, { price: level(2), menu: [
      ['Copper-pot lamb hot pot', undefined, 'баранина в медном хого|lamb in a copper hot pot|cordero en olla de cobre|Lamm im Kupfer-Feuertopf|agneau en marmite de cuivre|agnello nella pentola di rame'],
      ['Sesame sauce', undefined, 'кунжутный соус для макания|sesame dipping sauce|salsa de sésamo|Sesam-Dip|sauce au sésame|salsa al sesamo'],
    ] }),
    P('jubaoyuan', 'food', 39.884, 116.362, FOOD, 4.4, 8100, ['food'], {
      ru: ['Цзюйбаоюань (Нюцзе)', 'Халяльный ресторан медного хого на мусульманской улице Нюцзе, куда местные стоят в очереди за свежей бараниной.', 'Приходите до 17:00 или поздно вечером — иначе очередь на час.'],
      en: ['Jubaoyuan (Niujie)', 'A halal copper hot-pot restaurant on Muslim Niujie street, where locals queue for fresh lamb.', 'Come before 5 pm or late in the evening, or face an hour’s queue.'],
      es: ['Jubaoyuan (Niujie)', 'Un restaurante halal de olla de cobre en la calle musulmana de Niujie, donde los locales hacen cola por cordero fresco.', 'Ve antes de las 17:00 o tarde, o tendrás una hora de cola.'],
      de: ['Jubaoyuan (Niujie)', 'Ein Halal-Kupferfeuertopf-Restaurant in der muslimischen Niujie-Straße, wo Einheimische für frisches Lamm anstehen.', 'Vor 17 Uhr oder spät abends kommen, sonst eine Stunde Schlange.'],
      fr: ['Jubaoyuan (Niujie)', 'Un restaurant halal de fondue en cuivre dans la rue musulmane de Niujie, où les habitants font la queue pour l’agneau frais.', 'Venez avant 17 h ou tard le soir, sinon une heure de queue.'],
      it: ['Jubaoyuan (Niujie)', 'Un ristorante halal di pentola di rame nella via musulmana di Niujie, dove i locali fanno la fila per l’agnello fresco.', 'Vieni prima delle 17 o la sera tardi, o farai un’ora di fila.'],
    }, { spot: 'hidden', price: level(2), menu: [
      ['Lamb hot pot', undefined, 'хого с бараниной|lamb hot pot|olla de cordero|Lamm-Feuertopf|fondue d’agneau|pentola di agnello'],
      ['Sesame flatbread', undefined, 'кунжутные лепёшки шаобин|sesame flatbread|pan plano de sésamo|Sesamfladen|galette au sésame|focaccia al sesamo'],
    ] }),
    P('duyichu', 'food', 39.896, 116.397, PALACE, 4.1, 6200, ['food', 'history'], {
      ru: ['Дуичу', 'Закусочная на улице Цяньмэнь с 1738 года, знаменитая шаомаем — открытыми пельменями с бараниной или свининой.', 'Удобный обед между Тяньаньмэнь и Храмом Неба.'],
      en: ['Duyichu', 'An eatery on Qianmen Street since 1738, famous for shaomai — open-topped dumplings filled with lamb or pork.', 'A handy lunch between Tiananmen and the Temple of Heaven.'],
      es: ['Duyichu', 'Una casa de comidas en la calle Qianmen desde 1738, famosa por el shaomai, empanadillas abiertas de cordero o cerdo.', 'Un almuerzo práctico entre Tiananmén y el Templo del Cielo.'],
      de: ['Duyichu', 'Ein Lokal in der Qianmen-Straße seit 1738, berühmt für Shaomai – oben offene Teigtaschen mit Lamm oder Schwein.', 'Praktisches Mittagessen zwischen Tian’anmen und Himmelstempel.'],
      fr: ['Duyichu', 'Une gargote de la rue Qianmen depuis 1738, célèbre pour ses shaomai, raviolis ouverts à l’agneau ou au porc.', 'Un déjeuner pratique entre Tian’anmen et le temple du Ciel.'],
      it: ['Duyichu', 'Una trattoria in via Qianmen dal 1738, famosa per gli shaomai, ravioli aperti di agnello o maiale.', 'Un pranzo comodo tra Tienanmen e il Tempio del Cielo.'],
    }, { price: level(1), menu: [
      ['Shaomai', undefined, 'открытые пельмени шаомай|open-topped shaomai dumplings|shaomai abiertos|offene Shaomai-Teigtaschen|shaomai ouverts|shaomai aperti'],
      ['Three-delicacy shaomai', undefined, 'шаомай с тремя начинками|shaomai with three delicacies|shaomai de tres delicias|Shaomai mit drei Köstlichkeiten|shaomai aux trois délices|shaomai ai tre sapori'],
    ] }),
    P('great-leap-brewing', 'food', 39.938, 116.401, ROOFS, 4.4, 3400, ['food', 'nightlife'], {
      ru: ['Great Leap Brewing (Доуцзяо хутун)', 'Первая крафтовая пивоварня Пекина (2010) во дворике старого хутуна: пиво с китайскими специями и чаем.', 'Попробуйте пиво с сычуаньским перцем — местная фирменная идея.'],
      en: ['Great Leap Brewing (Doujiao Hutong)', 'Beijing’s first craft brewery (2010) in an old hutong courtyard: beers with Chinese spices and tea.', 'Try the beer with Sichuan pepper — a house signature idea.'],
      es: ['Great Leap Brewing (hutong Doujiao)', 'La primera cervecería artesana de Pekín (2010), en un patio de hutong: cervezas con especias chinas y té.', 'Prueba la cerveza con pimienta de Sichuan, idea de la casa.'],
      de: ['Great Leap Brewing (Doujiao-Hutong)', 'Pekings erste Craft-Brauerei (2010) in einem alten Hutong-Hof: Biere mit chinesischen Gewürzen und Tee.', 'Das Bier mit Sichuanpfeffer probieren – eine Hausidee.'],
      fr: ['Great Leap Brewing (hutong Doujiao)', 'La première brasserie artisanale de Pékin (2010), dans une cour de hutong : bières aux épices chinoises et au thé.', 'Goûtez la bière au poivre du Sichuan, idée maison.'],
      it: ['Great Leap Brewing (hutong Doujiao)', 'Il primo birrificio artigianale di Pechino (2010), nel cortile di un vecchio hutong: birre con spezie cinesi e tè.', 'Prova la birra al pepe di Sichuan, idea della casa.'],
    }, { price: level(2), menu: [
      ['Honey Ma Gold', undefined, 'пиво с мёдом и сычуаньским перцем|ale with honey and Sichuan pepper|cerveza con miel y pimienta de Sichuan|Ale mit Honig und Sichuanpfeffer|bière au miel et poivre du Sichuan|birra con miele e pepe di Sichuan'],
      ['Tasting flight', undefined, 'дегустационный сет|tasting flight|degustación|Probierset|planche de dégustation|degustazione'],
    ] }),
    P('lao-ciqikou-douzhi', 'food', 39.893, 116.411, HEAVEN, 4.0, 4700, ['food', 'history'], {
      ru: ['Лао Цыцикоу Доучжи', 'Старая пекинская закусочная у северных ворот Храма Неба с доучжи — кисловатым напитком из ферментированной фасоли мунг — и хрустящими кольцами цзяоцюань.', 'Доучжи — вкус на любителя; закажите маленькую порцию на пробу.'],
      en: ['Lao Ciqikou Douzhi', 'An old Beijing eatery by the Temple of Heaven’s north gate with douzhi — a sour drink of fermented mung beans — and crisp jiaoquan rings.', 'Douzhi is an acquired taste; order a small one to try.'],
      es: ['Lao Ciqikou Douzhi', 'Una vieja casa pekinesa junto a la puerta norte del Templo del Cielo con douzhi, bebida agria de judía mungo fermentada, y aros crujientes jiaoquan.', 'El douzhi es un sabor adquirido: pide uno pequeño para probar.'],
      de: ['Lao Ciqikou Douzhi', 'Ein altes Pekinger Lokal am Nordtor des Himmelstempels mit Douzhi – säuerlichem Getränk aus fermentierten Mungbohnen – und knusprigen Jiaoquan-Ringen.', 'Douzhi ist gewöhnungsbedürftig; eine kleine Portion zum Probieren.'],
      fr: ['Lao Ciqikou Douzhi', 'Une vieille adresse pékinoise près de la porte nord du temple du Ciel : douzhi, boisson aigre de haricots mungo fermentés, et anneaux croustillants jiaoquan.', 'Le douzhi déroute : prenez-en un petit pour goûter.'],
      it: ['Lao Ciqikou Douzhi', 'Una vecchia trattoria pechinese vicino alla porta nord del Tempio del Cielo con il douzhi, bevanda acidula di fagioli mungo fermentati, e anelli croccanti jiaoquan.', 'Il douzhi è un gusto da scoprire: prendine uno piccolo per provare.'],
    }, { price: level(1), menu: [
      ['Douzhi', undefined, 'кисловатый напиток из ферментированной фасоли|sour fermented mung-bean drink|bebida agria de judía mungo|säuerliches Mungbohnengetränk|boisson aigre de haricot mungo|bevanda acidula di fagioli mungo'],
      ['Jiaoquan', undefined, 'хрустящие жареные кольца из теста|crisp fried dough rings|aros de masa frita crujientes|knusprige frittierte Teigringe|anneaux de pâte frits croustillants|anelli di pasta fritti croccanti'],
    ] }),
    P('wenyu-cheese', 'food', 39.9375, 116.403, ROOFS, 4.2, 5100, ['food', 'streetfood'], {
      ru: ['Wenyu Nailao (Наньлогусян)', 'Лавка пекинского молочного десерта найлао — нежного творожного пудинга из молока и рисового вина.', 'Берите классический найлао или с красной фасолью — подают холодным.'],
      en: ['Wenyu Nailao (Nanluoguxiang)', 'A shop for Beijing nailao — a delicate set milk pudding made with rice wine.', 'Get the classic or red-bean nailao — served chilled.'],
      es: ['Wenyu Nailao (Nanluoguxiang)', 'Una tienda de nailao pekinés, delicado pudin de leche cuajada con vino de arroz.', 'Pide el clásico o el de judía roja: se sirve frío.'],
      de: ['Wenyu Nailao (Nanluoguxiang)', 'Ein Laden für Pekinger Nailao – zarten gestockten Milchpudding mit Reiswein.', 'Den klassischen oder den mit roten Bohnen nehmen – gekühlt serviert.'],
      fr: ['Wenyu Nailao (Nanluoguxiang)', 'Une échoppe de nailao pékinois, délicat flan de lait caillé au vin de riz.', 'Prenez le classique ou celui aux haricots rouges, servi frais.'],
      it: ['Wenyu Nailao (Nanluoguxiang)', 'Un negozio di nailao pechinese, delicato budino di latte rappreso con vino di riso.', 'Prendi il classico o quello ai fagioli rossi, servito freddo.'],
    }, { price: level(1), menu: [
      ['Nailao', undefined, 'молочный пудинг найлао|set milk pudding|pudin de leche cuajada|gestockter Milchpudding|flan de lait caillé|budino di latte rappreso'],
      ['Red-bean nailao', undefined, 'найлао с красной фасолью|nailao with red beans|nailao con judía roja|Nailao mit roten Bohnen|nailao aux haricots rouges|nailao ai fagioli rossi'],
    ] }),
  ],
  routes: [
    D(['tiananmen-square', '=beijing-forbidden-city', '=beijing-jingshan-park', '=beijing-siji-minfu-roast-duck', 'beihai-park', 'shichahai', 'drum-and-bell-towers', 'yaoji-chaogan', 'great-leap-brewing'],
      'Тяньаньмэнь, Запретный город, озёра и хутуны|Tiananmen, the Forbidden City, the lakes and the hutongs|Tiananmén, la Ciudad Prohibida, los lagos y los hutongs|Tian’anmen, Verbotene Stadt, Seen und Hutongs|Tian’anmen, la Cité interdite, les lacs et les hutongs|Tienanmen, la Città Proibita, i laghi e gli hutong'),
    D(['=beijing-mutianyu-great-wall', 'jinding-xuan', '=beijing-lama-temple-yonghegong', 'nanluoguxiang', 'wenyu-cheese', 'kings-joy'],
      'Великая стена Мутяньюй и храм Юнхэгун|The Great Wall at Mutianyu and the Lama Temple|La Gran Muralla en Mutianyu y el Templo de los Lamas|Die Große Mauer bei Mutianyu und der Lamatempel|La Grande Muraille à Mutianyu et le temple des Lamas|La Grande Muraglia a Mutianyu e il Tempio dei Lama'),
    D(['lao-ciqikou-douzhi', '=beijing-temple-of-heaven', 'duyichu', '=beijing-summer-palace-seventeen-arch', 'yuanmingyuan', 'da-dong'],
      'Храм Неба, Летний дворец и утка по-пекински|The Temple of Heaven, the Summer Palace and Peking duck|El Templo del Cielo, el Palacio de Verano y el pato pekinés|Himmelstempel, Sommerpalast und Pekingente|Le temple du Ciel, le palais d’Été et le canard laqué|Il Tempio del Cielo, il Palazzo d’Estate e l’anatra laccata'),
  ],
};

export default pack;
