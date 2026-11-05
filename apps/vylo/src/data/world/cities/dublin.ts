import type { CityPack } from '../types';
import { free, level, makeDay, makePlace } from './_kit.ts';

const P = makePlace('dublin');
const D = makeDay('dublin');
const CITY = 'jwyDVMPKYMk';
const TRINITY = 'NgU7IJ5XuyY';
const GUINNESS = 'S5F-2r4s9FM';
const DOORS = 'L0Vb6i6Rzk4';
const LIBRARY = 'doNYFn2XMdY';
const FOOD = 'PmUcA_mfZ7Y';
const PUB = 'NL2ORrGh8KM';

const pack: CityPack = {
  country: 'IE',
  city: 'dublin',
  places: [
    P('st-patricks-cathedral', 'attraction', 53.3395, -6.2715, LIBRARY, 4.6, 21000, ['history', 'architecture'], {
      ru: ['Собор Святого Патрика', 'Крупнейший собор Ирландии (XIII век), где деканом был Джонатан Свифт — автор «Путешествий Гулливера»; он здесь и похоронен.', 'Найдите «Дверь примирения» с прорубленным отверстием — отсюда выражение «chance your arm».'],
      en: ['St Patrick’s Cathedral', 'Ireland’s largest cathedral (13th century), where Jonathan Swift, author of Gulliver’s Travels, was dean and is buried.', 'Find the Door of Reconciliation with its hole — the origin of “chance your arm”.'],
      es: ['Catedral de San Patricio', 'La mayor catedral de Irlanda (siglo XIII), donde Jonathan Swift, autor de Los viajes de Gulliver, fue deán y está enterrado.', 'Busca la Puerta de la Reconciliación con su agujero, origen de “chance your arm”.'],
      de: ['St Patrick’s Cathedral', 'Irlands größte Kathedrale (13. Jh.), in der Jonathan Swift, Autor von Gullivers Reisen, Dekan war und begraben ist.', 'Die Tür der Versöhnung mit ihrem Loch suchen – Ursprung von „chance your arm“.'],
      fr: ['Cathédrale Saint-Patrick', 'La plus grande cathédrale d’Irlande (XIIIe), où Jonathan Swift, auteur des Voyages de Gulliver, fut doyen et repose.', 'Cherchez la porte de la Réconciliation et son trou, origine de « chance your arm ».'],
      it: ['Cattedrale di San Patrizio', 'La più grande cattedrale d’Irlanda (XIII secolo), dove Jonathan Swift, autore dei Viaggi di Gulliver, fu decano ed è sepolto.', 'Cerca la Porta della Riconciliazione col suo foro, origine di “chance your arm”.'],
    }, { hours: '09:30–17:00' }),
    P('christ-church', 'attraction', 53.3434, -6.271, LIBRARY, 4.6, 14000, ['history', 'architecture'], {
      ru: ['Собор Крайст-Черч', 'Средневековый собор XI века с огромной криптой, где хранятся мумифицированные кот и крыса, застрявшие в органной трубе.', 'В крипте есть кафе; по билету доступна и экскурсия на колокольню.'],
      en: ['Christ Church Cathedral', 'An 11th-century medieval cathedral with a huge crypt holding a mummified cat and rat once stuck in an organ pipe.', 'There’s a café in the crypt; a bell-tower tour is available with the ticket.'],
      es: ['Catedral de Christ Church', 'Una catedral medieval del siglo XI con una enorme cripta donde están momificados un gato y una rata atrapados en un tubo de órgano.', 'En la cripta hay café; también se puede subir al campanario.'],
      de: ['Christ Church Cathedral', 'Eine mittelalterliche Kathedrale aus dem 11. Jh. mit riesiger Krypta, in der eine mumifizierte Katze und Ratte aus einer Orgelpfeife liegen.', 'In der Krypta gibt es ein Café; Glockenturmführung mit dem Ticket möglich.'],
      fr: ['Cathédrale Christ Church', 'Une cathédrale médiévale du XIe avec une immense crypte où reposent un chat et un rat momifiés, coincés jadis dans un tuyau d’orgue.', 'Un café dans la crypte ; visite du clocher possible avec le billet.'],
      it: ['Cattedrale di Christ Church', 'Una cattedrale medievale dell’XI secolo con un’enorme cripta dove si trovano un gatto e un topo mummificati rimasti in una canna d’organo.', 'Nella cripta c’è un caffè; col biglietto si può salire al campanile.'],
    }, { hours: '09:30–17:00' }),
    P('dublin-castle', 'attraction', 53.3429, -6.2674, CITY, 4.4, 26000, ['history', 'museums'], {
      ru: ['Дублинский замок и библиотека Честера Битти', 'Бывший центр британской власти в Ирландии с парадными залами; в саду — бесплатная библиотека Честера Битти с древними манускриптами всего мира.', 'Библиотека Честера Битти бесплатна и одна из лучших в Европе — не пропустите.'],
      en: ['Dublin Castle and the Chester Beatty', 'The former seat of British rule in Ireland with state apartments; in its garden the free Chester Beatty library of ancient manuscripts from around the world.', 'The Chester Beatty is free and one of Europe’s finest — don’t miss it.'],
      es: ['Castillo de Dublín y la Chester Beatty', 'La antigua sede del poder británico en Irlanda con salones de gala; en su jardín, la biblioteca gratuita Chester Beatty con manuscritos antiguos de todo el mundo.', 'La Chester Beatty es gratis y de las mejores de Europa: no te la pierdas.'],
      de: ['Dublin Castle und Chester Beatty', 'Der ehemalige Sitz britischer Herrschaft in Irland mit Prunkräumen; im Garten die kostenlose Chester Beatty Library mit alten Handschriften aus aller Welt.', 'Die Chester Beatty ist gratis und eine der besten Europas – nicht verpassen.'],
      fr: ['Château de Dublin et Chester Beatty', 'L’ancien siège du pouvoir britannique en Irlande, appartements d’apparat ; dans son jardin, la bibliothèque gratuite Chester Beatty de manuscrits anciens du monde entier.', 'La Chester Beatty est gratuite et l’une des plus belles d’Europe : à ne pas manquer.'],
      it: ['Castello di Dublino e Chester Beatty', 'L’ex sede del potere britannico in Irlanda con appartamenti di Stato; nel giardino la biblioteca gratuita Chester Beatty di antichi manoscritti da tutto il mondo.', 'La Chester Beatty è gratuita e tra le migliori d’Europa: non perderla.'],
    }, { hours: '09:45–17:45', address: 'Dame Street' }),
    P('kilmainham-gaol', 'attraction', 53.3419, -6.3095, CITY, 4.7, 23000, ['history', 'museums'], {
      ru: ['Тюрьма Килмейнхем', 'Тюрьма, где держали и казнили лидеров Пасхального восстания 1916 года; ключевое место истории борьбы Ирландии за независимость.', 'Только экскурсии по времени — бронируйте заранее, места разбирают.'],
      en: ['Kilmainham Gaol', 'The prison where leaders of the 1916 Easter Rising were held and executed; a key site in Ireland’s fight for independence.', 'Timed guided tours only — book ahead, they sell out.'],
      es: ['Cárcel de Kilmainham', 'La prisión donde se encarceló y ejecutó a los líderes del Alzamiento de Pascua de 1916; lugar clave de la independencia irlandesa.', 'Solo visitas guiadas con hora: reserva, se agotan.'],
      de: ['Kilmainham Gaol', 'Das Gefängnis, in dem die Anführer des Osteraufstands 1916 inhaftiert und hingerichtet wurden; ein Schlüsselort des irischen Unabhängigkeitskampfes.', 'Nur Führungen mit Zeitfenster – früh buchen, oft ausverkauft.'],
      fr: ['Prison de Kilmainham', 'La prison où furent détenus et exécutés les chefs de l’insurrection de Pâques 1916 ; un lieu clé de la lutte pour l’indépendance.', 'Uniquement en visite guidée horodatée : réservez, c’est souvent complet.'],
      it: ['Carcere di Kilmainham', 'La prigione dove furono detenuti e giustiziati i leader della Rivolta di Pasqua del 1916; luogo chiave dell’indipendenza irlandese.', 'Solo visite guidate a orario: prenota, vanno esaurite.'],
    }, { hours: '09:30–17:30', address: 'Inchicore Road' }),
    P('epic-museum', 'attraction', 53.3486, -6.248, CITY, 4.8, 15000, ['museums', 'history'], {
      ru: ['Музей ирландской эмиграции EPIC', 'Интерактивный музей в сводчатых складах CHQ о 10 миллионах ирландцев, уехавших по миру, и о том, что они изменили.', 'Возьмите «паспорт» на входе и ставьте штампы в каждом зале.'],
      en: ['EPIC The Irish Emigration Museum', 'An interactive museum in the vaulted CHQ warehouse about the 10 million Irish who emigrated and what they changed.', 'Pick up a “passport” at the entrance and stamp it in each gallery.'],
      es: ['EPIC, Museo de la Emigración Irlandesa', 'Un museo interactivo en los almacenes abovedados del CHQ sobre los 10 millones de irlandeses que emigraron y lo que cambiaron.', 'Coge un “pasaporte” en la entrada y sella en cada sala.'],
      de: ['EPIC Irish Emigration Museum', 'Ein interaktives Museum in den Gewölben des CHQ über die 10 Millionen ausgewanderten Iren und was sie bewirkten.', 'Am Eingang einen „Pass“ nehmen und in jeder Galerie stempeln.'],
      fr: ['EPIC, musée de l’émigration irlandaise', 'Un musée interactif dans les entrepôts voûtés du CHQ sur les 10 millions d’Irlandais émigrés et ce qu’ils ont changé.', 'Prenez un « passeport » à l’entrée et tamponnez-le dans chaque salle.'],
      it: ['EPIC, Museo dell’emigrazione irlandese', 'Un museo interattivo nei magazzini a volta del CHQ sui 10 milioni di irlandesi emigrati e su ciò che hanno cambiato.', 'Prendi un “passaporto” all’ingresso e timbralo in ogni sala.'],
    }, { hours: '10:00–18:45', address: 'CHQ, Custom House Quay' }),
    P('national-museum-archaeology', 'attraction', 53.3404, -6.255, TRINITY, 4.7, 12000, ['museums', 'history'], {
      ru: ['Национальный музей археологии', 'Бесплатный музей с кельтским золотом, Ардахской чашей и «болотными людьми» — телами железного века из торфяников.', 'Вход бесплатный; рядом — Национальная галерея, тоже бесплатно.'],
      en: ['National Museum of Archaeology', 'A free museum of Celtic gold, the Ardagh Chalice and the “bog bodies” — Iron Age bodies preserved in peat.', 'Entry is free; the National Gallery nearby is free too.'],
      es: ['Museo Nacional de Arqueología', 'Un museo gratuito con oro celta, el Cáliz de Ardagh y los “cuerpos del pantano” de la Edad del Hierro.', 'Entrada gratuita; la Galería Nacional, al lado, también.'],
      de: ['National Museum of Archaeology', 'Ein kostenloses Museum mit keltischem Gold, dem Ardagh-Kelch und den „Moorleichen“ der Eisenzeit.', 'Eintritt frei; die National Gallery nebenan ebenfalls.'],
      fr: ['Musée national d’archéologie', 'Un musée gratuit : or celtique, calice d’Ardagh et « hommes des tourbières » de l’âge du fer.', 'Entrée libre ; la National Gallery voisine aussi.'],
      it: ['Museo nazionale di archeologia', 'Un museo gratuito con oro celtico, il Calice di Ardagh e i “corpi delle torbiere” dell’età del ferro.', 'Ingresso gratuito; anche la vicina National Gallery.'],
    }, { price: free, hours: '10:00–17:00', address: 'Kildare Street' }),
    P('st-stephens-green', 'nature', 53.3382, -6.2591, DOORS, 4.7, 41000, ['gardens', 'nature'], {
      ru: ['Сент-Стивенс-Грин', 'Викторианский парк в центре с прудом, утками, мостиками и памятниками; в начале Графтон-стрит.', 'Хорошее место для пикника между музеями и шопингом на Графтон-стрит.'],
      en: ['St Stephen’s Green', 'A Victorian park in the centre with a pond, ducks, little bridges and memorials, at the top of Grafton Street.', 'A good picnic spot between the museums and Grafton Street shopping.'],
      es: ['St Stephen’s Green', 'Un parque victoriano en el centro con estanque, patos, puentecillos y monumentos, al final de Grafton Street.', 'Buen sitio de pícnic entre museos y las tiendas de Grafton Street.'],
      de: ['St Stephen’s Green', 'Ein viktorianischer Park im Zentrum mit Teich, Enten, Brücken und Denkmälern am Ende der Grafton Street.', 'Guter Picknickplatz zwischen Museen und Grafton Street.'],
      fr: ['St Stephen’s Green', 'Un parc victorien au centre avec étang, canards, petits ponts et monuments, au bout de Grafton Street.', 'Parfait pour pique-niquer entre musées et shopping sur Grafton Street.'],
      it: ['St Stephen’s Green', 'Un parco vittoriano in centro con laghetto, anatre, ponticelli e monumenti, in cima a Grafton Street.', 'Ottimo per un picnic tra musei e shopping su Grafton Street.'],
    }, { price: free, hours: '07:30–dusk' }),
    P('howth', 'nature', 53.379, -6.067, CITY, 4.8, 22000, ['hiking', 'views', 'nature'], {
      ru: ['Хоут и тропа по скалам', 'Рыбацкий посёлок на полуострове в 30 минутах на электричке DART: тропа вдоль обрывов к маяку Бейли, тюлени в гавани и рыбные лавки.', 'Петля по скалам — 2–3 часа; надевайте нормальную обувь, тропа местами узкая.'],
      en: ['Howth and the cliff walk', 'A fishing village on a peninsula 30 minutes away by DART: a clifftop path to the Baily lighthouse, seals in the harbour and fish shops.', 'The cliff loop takes 2–3 hours; wear proper shoes, the path is narrow in places.'],
      es: ['Howth y el sendero de los acantilados', 'Un pueblo pesquero en una península a 30 minutos en DART: sendero por los acantilados hasta el faro Baily, focas en el puerto y pescaderías.', 'La ruta circular dura 2–3 horas; lleva buen calzado.'],
      de: ['Howth und der Klippenweg', 'Ein Fischerdorf auf einer Halbinsel, 30 Minuten mit der DART: Klippenpfad zum Baily-Leuchtturm, Robben im Hafen und Fischläden.', 'Die Klippenrunde dauert 2–3 Stunden; gutes Schuhwerk, der Weg ist teils schmal.'],
      fr: ['Howth et le sentier des falaises', 'Un village de pêcheurs sur une presqu’île à 30 minutes en DART : sentier des falaises jusqu’au phare de Baily, phoques au port et poissonneries.', 'La boucle prend 2 à 3 heures ; bonnes chaussures, le sentier est étroit par endroits.'],
      it: ['Howth e il sentiero delle scogliere', 'Un villaggio di pescatori su una penisola a 30 minuti con la DART: sentiero sulle scogliere fino al faro Baily, foche nel porto e pescherie.', 'L’anello richiede 2–3 ore; scarpe adatte, il sentiero è stretto a tratti.'],
    }, { spot: 'insta', price: free }),
    P('jameson-distillery', 'attraction', 53.3483, -6.2772, GUINNESS, 4.6, 26000, ['history', 'food'], {
      ru: ['Винокурня Jameson на Боу-стрит', 'Бывшая винокурня 1780 года в Смитфилде: экскурсия о тройной перегонке ирландского виски и дегустация.', 'Бронируйте тур с дегустацией разных выдержек; рядом — паб-бар внутри.'],
      en: ['Jameson Distillery Bow St.', 'The 1780 former distillery in Smithfield: a tour on triple-distilled Irish whiskey and a tasting.', 'Book a tour with a tasting of different ages; there’s a bar inside.'],
      es: ['Destilería Jameson Bow St.', 'La antigua destilería de 1780 en Smithfield: visita sobre el whiskey irlandés de triple destilación y cata.', 'Reserva un tour con cata de distintas añadas; dentro hay un bar.'],
      de: ['Jameson Distillery Bow St.', 'Die ehemalige Brennerei von 1780 in Smithfield: Führung zum dreifach destillierten Irish Whiskey mit Verkostung.', 'Eine Tour mit Verkostung verschiedener Jahrgänge buchen; drinnen eine Bar.'],
      fr: ['Distillerie Jameson Bow St.', 'L’ancienne distillerie de 1780 à Smithfield : visite sur le whiskey irlandais triplement distillé et dégustation.', 'Réservez une visite avec dégustation de différents âges ; bar sur place.'],
      it: ['Distilleria Jameson Bow St.', 'L’ex distilleria del 1780 a Smithfield: visita sul whiskey irlandese a tripla distillazione e degustazione.', 'Prenota un tour con degustazione di diverse annate; dentro c’è un bar.'],
    }, { address: 'Bow Street, Smithfield' }),
    P('phoenix-park', 'nature', 53.3559, -6.3298, CITY, 4.8, 37000, ['nature', 'wildlife', 'gardens'], {
      ru: ['Феникс-парк', 'Один из крупнейших городских парков Европы: стадо диких ланей, резиденция президента Ирландии, зоопарк и аллеи для велосипедов.', 'Лани чаще всего пасутся у Папского креста; возьмите велосипед у главных ворот.'],
      en: ['Phoenix Park', 'One of Europe’s largest city parks: a herd of wild fallow deer, the Irish president’s residence, the zoo and cycling avenues.', 'The deer usually graze near the Papal Cross; rent a bike at the main gate.'],
      es: ['Phoenix Park', 'Uno de los mayores parques urbanos de Europa: una manada de gamos salvajes, la residencia del presidente, el zoo y avenidas para bici.', 'Los gamos suelen pastar cerca de la Cruz Papal; alquila bici en la entrada.'],
      de: ['Phoenix Park', 'Einer der größten Stadtparks Europas: eine wilde Damhirschherde, die Residenz des irischen Präsidenten, der Zoo und Radalleen.', 'Die Hirsche grasen meist am Papal Cross; am Haupttor Räder leihen.'],
      fr: ['Phoenix Park', 'L’un des plus grands parcs urbains d’Europe : un troupeau de daims sauvages, la résidence du président, le zoo et des allées cyclables.', 'Les daims paissent souvent près de la Croix papale ; louez un vélo à l’entrée.'],
      it: ['Phoenix Park', 'Uno dei più grandi parchi urbani d’Europa: un branco di daini selvatici, la residenza del presidente, lo zoo e viali ciclabili.', 'I daini pascolano spesso vicino alla Croce papale; noleggia una bici all’ingresso.'],
    }, { spot: 'hidden', price: free, hours: 'always' }),

    P('patrick-guilbaud', 'food', 53.3389, -6.2533, FOOD, 4.7, 1400, ['food', 'luxury'], {
      ru: ['Restaurant Patrick Guilbaud', 'Французская высокая кухня из ирландских продуктов с 1981 года в гостинице Merrion; две звезды MICHELIN (гид Великобритании и Ирландии 2026).', 'Обеденный сет заметно доступнее ужина; бронируйте.'],
      en: ['Restaurant Patrick Guilbaud', 'French haute cuisine from Irish produce since 1981, at the Merrion Hotel; two MICHELIN stars (GB & Ireland guide 2026).', 'The lunch menu is much more affordable than dinner; book ahead.'],
      es: ['Restaurant Patrick Guilbaud', 'Alta cocina francesa con producto irlandés desde 1981 en el hotel Merrion; dos estrellas MICHELIN (guía Reino Unido e Irlanda 2026).', 'El menú de mediodía es bastante más asequible; reserva.'],
      de: ['Restaurant Patrick Guilbaud', 'Französische Haute Cuisine aus irischen Produkten seit 1981 im Merrion Hotel; zwei MICHELIN-Sterne (Guide GB & Irland 2026).', 'Das Mittagsmenü ist deutlich günstiger; reservieren.'],
      fr: ['Restaurant Patrick Guilbaud', 'Haute cuisine française de produits irlandais depuis 1981, à l’hôtel Merrion ; deux étoiles MICHELIN (guide Grande-Bretagne et Irlande 2026).', 'Le menu déjeuner est bien plus abordable ; réservez.'],
      it: ['Restaurant Patrick Guilbaud', 'Alta cucina francese con prodotti irlandesi dal 1981 all’hotel Merrion; due stelle MICHELIN (guida Gran Bretagna e Irlanda 2026).', 'Il menù pranzo è molto più accessibile; prenota.'],
    }, { price: level(3), michelin: { award: 'star2', year: 2026 }, address: '21 Upper Merrion Street', menu: [
      ['Tasting menu', undefined, 'дегустационный сет|tasting menu|menú degustación|Degustationsmenü|menu dégustation|menù degustazione'],
      ['Lunch menu', undefined, 'обеденный сет|lunch menu|menú de mediodía|Mittagsmenü|menu déjeuner|menù pranzo'],
    ] }),
    P('chapter-one', 'food', 53.3536, -6.2638, FOOD, 4.8, 2000, ['food', 'luxury'], {
      ru: ['Chapter One by Mickael Viljanen', 'Ресторан в подвале Дома писателей на площади Парнелл: смелая современная кухня шефа Микаэля Вильянена; две звезды MICHELIN (гид 2026).', 'Бронирование открывается за несколько месяцев; есть обеденный сет.'],
      en: ['Chapter One by Mickael Viljanen', 'A restaurant in the basement of the Writers’ Museum building on Parnell Square: bold modern cooking by Mickael Viljanen; two MICHELIN stars (2026 guide).', 'Bookings open months ahead; there’s a lunch menu.'],
      es: ['Chapter One by Mickael Viljanen', 'Un restaurante en el sótano del edificio del Museo de los Escritores en Parnell Square: cocina moderna y audaz de Mickael Viljanen; dos estrellas MICHELIN (guía 2026).', 'Las reservas se abren con meses; hay menú de mediodía.'],
      de: ['Chapter One by Mickael Viljanen', 'Ein Restaurant im Keller des Schriftstellermuseum-Gebäudes am Parnell Square: mutige moderne Küche von Mickael Viljanen; zwei MICHELIN-Sterne (Guide 2026).', 'Reservierungen öffnen Monate vorher; es gibt ein Mittagsmenü.'],
      fr: ['Chapter One by Mickael Viljanen', 'Un restaurant au sous-sol du bâtiment du musée des Écrivains, Parnell Square : cuisine moderne audacieuse de Mickael Viljanen ; deux étoiles MICHELIN (guide 2026).', 'Réservations ouvertes des mois à l’avance ; menu déjeuner disponible.'],
      it: ['Chapter One by Mickael Viljanen', 'Un ristorante nel seminterrato dell’edificio del Museo degli scrittori a Parnell Square: cucina moderna audace di Mickael Viljanen; due stelle MICHELIN (guida 2026).', 'Le prenotazioni aprono mesi prima; c’è un menù pranzo.'],
    }, { price: level(3), michelin: { award: 'star2', year: 2026 }, address: '18–19 Parnell Square', menu: [
      ['Tasting menu', undefined, 'дегустационный сет|tasting menu|menú degustación|Degustationsmenü|menu dégustation|menù degustazione'],
      ['Lunch menu', undefined, 'обеденный сет|lunch menu|menú de mediodía|Mittagsmenü|menu déjeuner|menù pranzo'],
    ] }),
    P('woollen-mills', 'food', 53.3463, -6.2638, CITY, 4.4, 4800, ['food', 'views'], {
      ru: ['The Woollen Mills', 'Ресторан у моста Хапенни в здании бывшей шерстяной лавки, где когда-то работал Джеймс Джойс: ирландская кухня и терраса на крыше.', 'На крыше — вид на Лиффи и мост; хорошо для обеда.'],
      en: ['The Woollen Mills', 'A restaurant by the Ha’penny Bridge in a former woollen shop where James Joyce once worked: Irish food and a rooftop terrace.', 'The rooftop overlooks the Liffey and the bridge; good for lunch.'],
      es: ['The Woollen Mills', 'Un restaurante junto al Ha’penny Bridge en una antigua lanería donde trabajó James Joyce: cocina irlandesa y terraza en la azotea.', 'La azotea mira al Liffey y al puente; bien para comer.'],
      de: ['The Woollen Mills', 'Ein Restaurant an der Ha’penny Bridge in einem ehemaligen Wollgeschäft, in dem James Joyce einst arbeitete: irische Küche und Dachterrasse.', 'Vom Dach Blick auf Liffey und Brücke; gut zum Mittagessen.'],
      fr: ['The Woollen Mills', 'Un restaurant près du Ha’penny Bridge dans une ancienne lainerie où travailla James Joyce : cuisine irlandaise et rooftop.', 'Le toit domine la Liffey et le pont ; idéal à midi.'],
      it: ['The Woollen Mills', 'Un ristorante vicino all’Ha’penny Bridge in un ex negozio di lana dove lavorò James Joyce: cucina irlandese e terrazza sul tetto.', 'Il tetto guarda il Liffey e il ponte; ottimo a pranzo.'],
    }, { price: level(2), address: '42 Ormond Quay Lower', menu: [
      ['Fish and chips', undefined, 'рыба с картофелем фри|fish and chips|pescado con patatas|Fish and Chips|fish and chips|fish and chips'],
      ['Irish stew', undefined, 'ирландское рагу из баранины|Irish lamb stew|estofado irlandés de cordero|irischer Lammeintopf|ragoût irlandais d’agneau|stufato irlandese di agnello'],
    ] }),
    P('queen-of-tarts', 'food', 53.3438, -6.2675, FOOD, 4.5, 6800, ['food'], {
      ru: ['Queen of Tarts', 'Уютное кафе у Дублинского замка с домашними тартами, сконами и полными ирландскими завтраками.', 'Идеальный завтрак перед замком и Крайст-Черч; попробуйте тарт с ревенем.'],
      en: ['Queen of Tarts', 'A cosy café by Dublin Castle with homemade tarts, scones and full Irish breakfasts.', 'A perfect breakfast before the castle and Christ Church; try a rhubarb tart.'],
      es: ['Queen of Tarts', 'Un café acogedor junto al Castillo de Dublín con tartas caseras, scones y desayunos irlandeses completos.', 'Desayuno perfecto antes del castillo; prueba la tarta de ruibarbo.'],
      de: ['Queen of Tarts', 'Ein gemütliches Café beim Dublin Castle mit hausgemachten Tartes, Scones und Full Irish Breakfast.', 'Perfektes Frühstück vor Burg und Christ Church; Rhabarbertarte probieren.'],
      fr: ['Queen of Tarts', 'Un café chaleureux près du château de Dublin : tartes maison, scones et petits-déjeuners irlandais complets.', 'Petit-déjeuner parfait avant le château ; goûtez la tarte à la rhubarbe.'],
      it: ['Queen of Tarts', 'Un caffè accogliente vicino al castello con crostate fatte in casa, scones e colazioni irlandesi complete.', 'Colazione perfetta prima del castello; prova la crostata al rabarbaro.'],
    }, { price: level(1), address: 'Cork Hill, Dame Street', menu: [
      ['Full Irish breakfast', undefined, 'полный ирландский завтрак|full Irish breakfast|desayuno irlandés completo|Full Irish Breakfast|petit-déjeuner irlandais complet|colazione irlandese completa'],
      ['Scone with jam and cream', undefined, 'скон с джемом и сливками|scone with jam and cream|scone con mermelada y nata|Scone mit Marmelade und Sahne|scone, confiture et crème|scone con marmellata e panna'],
    ] }),
    P('murphys-ice-cream', 'food', 53.3423, -6.2614, FOOD, 4.7, 3900, ['food'], {
      ru: ['Murphy’s Ice Cream', 'Мороженое из полуострова Дингл из молока коров породы керри: вкусы с морской солью Дингла, ирландским виски и бурым хлебом.', 'Попробуйте «Dingle Sea Salt» и «Brown Bread».'],
      en: ['Murphy’s Ice Cream', 'Ice cream from the Dingle peninsula made with Kerry cow milk: Dingle sea salt, Irish whiskey and brown bread flavours.', 'Try “Dingle Sea Salt” and “Brown Bread”.'],
      es: ['Murphy’s Ice Cream', 'Helado de la península de Dingle con leche de vaca Kerry: sabores de sal marina de Dingle, whiskey irlandés y pan integral.', 'Prueba “Dingle Sea Salt” y “Brown Bread”.'],
      de: ['Murphy’s Ice Cream', 'Eis von der Halbinsel Dingle aus Kerry-Kuhmilch: Sorten wie Dingle-Meersalz, Irish Whiskey und Brown Bread.', '„Dingle Sea Salt“ und „Brown Bread“ probieren.'],
      fr: ['Murphy’s Ice Cream', 'Une glace de la péninsule de Dingle au lait de vache Kerry : sel marin de Dingle, whiskey irlandais, pain complet.', 'Goûtez « Dingle Sea Salt » et « Brown Bread ».'],
      it: ['Murphy’s Ice Cream', 'Gelato della penisola di Dingle con latte di mucca Kerry: gusti sale marino di Dingle, whiskey irlandese e pane integrale.', 'Prova “Dingle Sea Salt” e “Brown Bread”.'],
    }, { price: level(1), address: '27 Wicklow Street', menu: [
      ['Dingle Sea Salt', undefined, 'мороженое с морской солью Дингла|Dingle sea salt ice cream|helado de sal marina de Dingle|Eis mit Dingle-Meersalz|glace au sel marin de Dingle|gelato al sale marino di Dingle'],
      ['Brown Bread', undefined, 'мороженое со вкусом ирландского бурого хлеба|Irish brown bread ice cream|helado de pan integral irlandés|Eis mit irischem Brown Bread|glace au pain complet irlandais|gelato al pane integrale irlandese'],
    ] }),
    P('the-long-hall', 'food', 53.3419, -6.265, PUB, 4.7, 5300, ['food', 'nightlife', 'history'], {
      ru: ['The Long Hall', 'Викторианский паб 1766 года с зеркалами, резным деревом и люстрами — одна из лучших пинт «Гиннесса» в городе.', 'Закажите пинту и посидите в дальнем зале — он тише.'],
      en: ['The Long Hall', 'A Victorian pub dating from 1766 with mirrors, carved wood and chandeliers — one of the city’s best pints of Guinness.', 'Order a pint and sit in the back room — it’s quieter.'],
      es: ['The Long Hall', 'Un pub victoriano de 1766 con espejos, madera tallada y lámparas: una de las mejores pintas de Guinness de la ciudad.', 'Pide una pinta y siéntate en la sala del fondo, más tranquila.'],
      de: ['The Long Hall', 'Ein viktorianischer Pub von 1766 mit Spiegeln, Holzschnitzereien und Kronleuchtern – eines der besten Guinness der Stadt.', 'Ein Pint bestellen und im hinteren Raum sitzen – ruhiger.'],
      fr: ['The Long Hall', 'Un pub victorien de 1766, miroirs, boiseries sculptées et lustres : l’une des meilleures pintes de Guinness de la ville.', 'Commandez une pinte et installez-vous au fond, plus calme.'],
      it: ['The Long Hall', 'Un pub vittoriano del 1766 con specchi, legni intagliati e lampadari: una delle migliori pinte di Guinness in città.', 'Ordina una pinta e siediti nella sala in fondo, più tranquilla.'],
    }, { price: level(1), address: '51 South Great George’s Street', menu: [
      ['Pint of Guinness', undefined, 'пинта «Гиннесса»|pint of Guinness|pinta de Guinness|Pint Guinness|pinte de Guinness|pinta di Guinness'],
      ['Irish whiskey', undefined, 'ирландский виски|Irish whiskey|whiskey irlandés|Irish Whiskey|whiskey irlandais|whiskey irlandese'],
    ] }),
    P('bunsen', 'food', 53.3408, -6.2594, FOOD, 4.6, 5100, ['food'], {
      ru: ['Bunsen', 'Бургерная с меню на визитке: всего несколько бургеров и картофель, но каждый — из ирландской говядины и сделан идеально.', 'Возьмите чизбургер с картошкой «shoestring»; очередь бывает в обед.'],
      en: ['Bunsen', 'A burger joint with a menu the size of a business card: a few burgers and fries, each made from Irish beef and done right.', 'Get the cheeseburger with shoestring fries; there’s often a lunch queue.'],
      es: ['Bunsen', 'Una hamburguesería con carta del tamaño de una tarjeta: pocas hamburguesas y patatas, todas de vacuno irlandés y bien hechas.', 'Pide la cheeseburger con patatas finas; a mediodía hay cola.'],
      de: ['Bunsen', 'Ein Burgerladen mit Visitenkarten-Menü: wenige Burger und Pommes, alle aus irischem Rind und auf den Punkt.', 'Cheeseburger mit Shoestring-Pommes nehmen; mittags oft Schlange.'],
      fr: ['Bunsen', 'Un burger à la carte grande comme une carte de visite : quelques burgers et frites, tous au bœuf irlandais et parfaitement faits.', 'Prenez le cheeseburger et les frites allumettes ; souvent la queue le midi.'],
      it: ['Bunsen', 'Un locale di burger con menù grande come un biglietto da visita: pochi burger e patatine, tutti di manzo irlandese e fatti a regola d’arte.', 'Prendi il cheeseburger con patatine sottili; a pranzo spesso c’è coda.'],
    }, { price: level(1), address: '3–4 South Anne Street', menu: [
      ['Cheeseburger', undefined, 'чизбургер из ирландской говядины|Irish beef cheeseburger|hamburguesa con queso de vacuno irlandés|Cheeseburger aus irischem Rind|cheeseburger au bœuf irlandais|cheeseburger di manzo irlandese'],
      ['Shoestring fries', undefined, 'тонкий картофель фри|shoestring fries|patatas finas|dünne Pommes|frites allumettes|patatine sottili'],
    ] }),
    P('the-fumbally', 'food', 53.3367, -6.2735, CITY, 4.5, 2900, ['food', 'nomads'], {
      ru: ['The Fumbally', 'Просторное кафе в квартале Либертис из местных продуктов: сезонные обеды, выпечка и кофе; по средам — ужины.', 'Хорошее место для обеда между соборами и пивоварней Гиннесс.'],
      en: ['The Fumbally', 'A roomy café in the Liberties cooking local produce: seasonal lunches, bakes and coffee; dinners on Wednesdays.', 'A good lunch stop between the cathedrals and the Guinness Storehouse.'],
      es: ['The Fumbally', 'Un amplio café en The Liberties con producto local: almuerzos de temporada, bollería y café; cenas los miércoles.', 'Buena parada para comer entre las catedrales y la Guinness Storehouse.'],
      de: ['The Fumbally', 'Ein geräumiges Café in den Liberties mit lokalen Produkten: saisonales Mittagessen, Gebäck und Kaffee; mittwochs Dinner.', 'Guter Mittagsstopp zwischen den Kathedralen und dem Guinness Storehouse.'],
      fr: ['The Fumbally', 'Un grand café du quartier des Liberties aux produits locaux : déjeuners de saison, pâtisseries et café ; dîners le mercredi.', 'Bonne pause déjeuner entre les cathédrales et la Guinness Storehouse.'],
      it: ['The Fumbally', 'Un ampio caffè nelle Liberties con prodotti locali: pranzi di stagione, dolci e caffè; cene il mercoledì.', 'Ottima sosta pranzo tra le cattedrali e la Guinness Storehouse.'],
    }, { price: level(1), address: 'Fumbally Lane', menu: [
      ['Seasonal lunch plate', undefined, 'сезонное блюдо дня|seasonal lunch plate|plato de temporada|saisonaler Mittagsteller|assiette de saison|piatto di stagione'],
      ['Flat white', undefined, 'флэт уайт|flat white|flat white|Flat White|flat white|flat white'],
    ] }),
    P('beshoff-bros-howth', 'food', 53.3893, -6.0672, FOOD, 4.5, 3800, ['food', 'streetfood'], {
      ru: ['Beshoff Bros (Хоут)', 'Семейная рыбная закусочная в гавани Хоута: треска и пикша в кляре со свежей картошкой — рыба прямо с причала.', 'Ешьте на пирсе, но берегитесь чаек!'],
      en: ['Beshoff Bros (Howth)', 'A family fish-and-chip shop on Howth harbour: battered cod and haddock with fresh chips, fish straight off the pier.', 'Eat on the pier — but watch out for the gulls!'],
      es: ['Beshoff Bros (Howth)', 'Un fish and chips familiar en el puerto de Howth: bacalao y eglefino rebozados con patatas, pescado recién desembarcado.', 'Cómelo en el muelle, ¡pero cuidado con las gaviotas!'],
      de: ['Beshoff Bros (Howth)', 'Ein Familien-Fish-and-Chips am Hafen von Howth: Kabeljau und Schellfisch im Teig mit frischen Pommes, Fisch direkt vom Pier.', 'Am Pier essen – aber Vorsicht vor den Möwen!'],
      fr: ['Beshoff Bros (Howth)', 'Un fish and chips familial sur le port de Howth : cabillaud et églefin en beignet, frites fraîches, poisson du quai.', 'Mangez sur la jetée, mais attention aux mouettes !'],
      it: ['Beshoff Bros (Howth)', 'Un fish and chips di famiglia al porto di Howth: merluzzo ed eglefino in pastella con patatine fresche, pesce appena sbarcato.', 'Mangia sul molo, ma attento ai gabbiani!'],
    }, { price: level(1), address: '12 West Pier, Howth', menu: [
      ['Cod and chips', undefined, 'треска в кляре с картофелем|battered cod and chips|bacalao rebozado con patatas|Kabeljau im Teig mit Pommes|cabillaud en beignet et frites|merluzzo in pastella con patatine'],
      ['Scampi', undefined, 'жареные лангустины|breaded scampi|cigalas rebozadas|panierte Scampi|scampi panés|scampi impanati'],
    ] }),
  ],
  routes: [
    D(['=dublin-trinity-long-room', '=dublin-georgian-doors-merrion-square', 'national-museum-archaeology', 'st-stephens-green', 'bunsen', 'dublin-castle', 'the-long-hall', 'patrick-guilbaud'],
      'Тринити-колледж, музеи и Дублинский замок|Trinity College, museums and Dublin Castle|Trinity College, museos y el Castillo de Dublín|Trinity College, Museen und Dublin Castle|Trinity College, musées et château de Dublin|Trinity College, musei e Castello di Dublino'),
    D(['queen-of-tarts', 'christ-church', 'st-patricks-cathedral', '=dublin-marshs-library', 'the-fumbally', '=dublin-guinness-storehouse', 'kilmainham-gaol', '=dublin-brazen-head'],
      'Соборы, «Гиннесс» и тюрьма Килмейнхем|Cathedrals, Guinness and Kilmainham Gaol|Catedrales, Guinness y la cárcel de Kilmainham|Kathedralen, Guinness und Kilmainham Gaol|Cathédrales, Guinness et prison de Kilmainham|Cattedrali, Guinness e carcere di Kilmainham'),
    D(['howth', 'beshoff-bros-howth', 'epic-museum', '=dublin-hapenny-bridge', 'murphys-ice-cream', 'jameson-distillery', 'chapter-one'],
      'Скалы Хоута, музей EPIC и виски Jameson|Howth cliffs, EPIC and Jameson whiskey|Acantilados de Howth, EPIC y whiskey Jameson|Klippen von Howth, EPIC und Jameson|Falaises de Howth, EPIC et whiskey Jameson|Scogliere di Howth, EPIC e whiskey Jameson'),
  ],
};

export default pack;
