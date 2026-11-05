import type { CityPack } from '../types';
import { level, makeDay, makePlace } from './_kit.ts';

const P = makePlace('florence');
const D = makeDay('florence');
const CITY = '47We_cJTwoU';
const DUOMO = 'QSHizbKavt8';
const BRIDGE = 'q7HbYWRxedY';
const VIEW = 'Q8iWZRHuYjg';
const FOOD = 'fgaGMFp7aI8';
const GARDEN = 'IACFJno2yCY';

const pack: CityPack = {
  country: 'IT',
  city: 'florence',
  places: [
    P('uffizi', 'attraction', 43.7678, 11.2553, CITY, 4.7, 88000, ['art', 'museums', 'history'], {
      ru: ['Галерея Уффици', 'Главный музей Ренессанса: «Рождение Венеры» и «Весна» Боттичелли, Леонардо, Микеланджело, Рафаэль и Караваджо.', 'Бронируйте время на официальном сайте; в первое воскресенье месяца вход бесплатный, но очередь огромная.'],
      en: ['Uffizi Gallery', 'The great Renaissance museum: Botticelli’s Birth of Venus and Primavera, Leonardo, Michelangelo, Raphael and Caravaggio.', 'Book a time slot on the official site; the first Sunday of the month is free but the queue is huge.'],
      es: ['Galería Uffizi', 'El gran museo del Renacimiento: El nacimiento de Venus y La primavera de Botticelli, Leonardo, Miguel Ángel, Rafael y Caravaggio.', 'Reserva hora en la web oficial; el primer domingo de mes es gratis pero con colas enormes.'],
      de: ['Uffizien', 'Das große Renaissancemuseum: Botticellis Geburt der Venus und Primavera, Leonardo, Michelangelo, Raffael und Caravaggio.', 'Zeitfenster auf der offiziellen Website buchen; am ersten Sonntag im Monat gratis, aber riesige Schlange.'],
      fr: ['Galerie des Offices', 'Le grand musée de la Renaissance : la Naissance de Vénus et le Printemps de Botticelli, Léonard, Michel-Ange, Raphaël et Caravage.', 'Réservez un créneau sur le site officiel ; gratuit le premier dimanche du mois, mais file énorme.'],
      it: ['Galleria degli Uffizi', 'Il grande museo del Rinascimento: la Nascita di Venere e la Primavera di Botticelli, Leonardo, Michelangelo, Raffaello e Caravaggio.', 'Prenota l’orario sul sito ufficiale; la prima domenica del mese è gratis ma la coda è enorme.'],
    }, { hours: '08:15–18:30' }),
    P('accademia', 'attraction', 43.7768, 11.2586, CITY, 4.6, 71000, ['art', 'museums'], {
      ru: ['Галерея Академии', 'Здесь стоит оригинал «Давида» Микеланджело высотой более 5 метров и его незаконченные «Пленники».', 'Берите первый утренний слот — у «Давида» ещё почти никого.'],
      en: ['Galleria dell’Accademia', 'Home to Michelangelo’s original David, over 5 m tall, and his unfinished Prisoners.', 'Take the first morning slot — almost nobody is at David yet.'],
      es: ['Galería de la Academia', 'Aquí está el David original de Miguel Ángel, de más de 5 m, y sus inacabados Prisioneros.', 'Reserva el primer turno: casi no hay nadie junto al David.'],
      de: ['Galleria dell’Accademia', 'Hier steht Michelangelos originaler David, über 5 m hoch, und seine unvollendeten Sklaven.', 'Den ersten Morgenslot nehmen – dann ist am David noch kaum jemand.'],
      fr: ['Galleria dell’Accademia', 'Ici se dresse le David original de Michel-Ange, haut de plus de 5 m, et ses Esclaves inachevés.', 'Prenez le premier créneau du matin : presque personne devant le David.'],
      it: ['Galleria dell’Accademia', 'Qui si trova il David originale di Michelangelo, alto oltre 5 metri, e i suoi Prigioni non finiti.', 'Prendi il primo turno del mattino: davanti al David non c’è quasi nessuno.'],
    }, { hours: '08:15–18:50', address: 'Via Ricasoli 58–60' }),
    P('palazzo-vecchio', 'attraction', 43.7693, 11.2563, DUOMO, 4.7, 47000, ['history', 'architecture', 'art'], {
      ru: ['Палаццо Веккьо', 'Ратуша Флоренции с башней на площади Синьории: Зал пятисот с фресками Вазари и залы Медичи; на площади — копия «Давида».', 'Поднимитесь на башню Арнольфо — вид на купол Дуомо вблизи.'],
      en: ['Palazzo Vecchio', 'Florence’s town hall with its tower on Piazza della Signoria: the Hall of the Five Hundred with Vasari’s frescoes and the Medici rooms; a copy of David outside.', 'Climb the Arnolfo tower for a close view of the Duomo.'],
      es: ['Palazzo Vecchio', 'El ayuntamiento de Florencia con su torre en la Piazza della Signoria: el Salón de los Quinientos con frescos de Vasari y las salas Médici; fuera, una copia del David.', 'Sube a la torre de Arnolfo para ver de cerca la cúpula.'],
      de: ['Palazzo Vecchio', 'Das Rathaus von Florenz mit Turm an der Piazza della Signoria: Saal der Fünfhundert mit Vasaris Fresken und die Medici-Räume; davor eine David-Kopie.', 'Auf den Arnolfo-Turm steigen – Domkuppel aus der Nähe.'],
      fr: ['Palazzo Vecchio', 'L’hôtel de ville de Florence et sa tour sur la piazza della Signoria : salle des Cinq-Cents aux fresques de Vasari et appartements des Médicis ; une copie du David devant.', 'Montez à la tour d’Arnolfo pour voir le dôme de près.'],
      it: ['Palazzo Vecchio', 'Il municipio di Firenze con la torre su piazza della Signoria: il Salone dei Cinquecento con gli affreschi del Vasari e i quartieri medicei; fuori la copia del David.', 'Sali sulla torre di Arnolfo per vedere la cupola da vicino.'],
    }, { hours: '09:00–19:00', address: 'Piazza della Signoria' }),
    P('santa-croce', 'attraction', 43.7686, 11.2622, DUOMO, 4.7, 33000, ['history', 'art', 'architecture'], {
      ru: ['Базилика Санта-Кроче', 'Францисканская базилика — «пантеон» Италии: гробницы Микеланджело, Галилея и Макиавелли, фрески Джотто и капелла Пацци Брунеллески.', 'Обойдите кожевенную школу за базиликой — там до сих пор работают мастера.'],
      en: ['Basilica of Santa Croce', 'The Franciscan basilica that is Italy’s pantheon: tombs of Michelangelo, Galileo and Machiavelli, Giotto frescoes and Brunelleschi’s Pazzi Chapel.', 'Visit the leather school behind it, where artisans still work.'],
      es: ['Basílica de Santa Croce', 'La basílica franciscana, panteón de Italia: tumbas de Miguel Ángel, Galileo y Maquiavelo, frescos de Giotto y la capilla Pazzi de Brunelleschi.', 'Visita la escuela de cuero detrás, donde aún trabajan artesanos.'],
      de: ['Basilika Santa Croce', 'Die Franziskanerbasilika als Pantheon Italiens: Gräber von Michelangelo, Galilei und Machiavelli, Giotto-Fresken und Brunelleschis Pazzi-Kapelle.', 'Die Lederschule dahinter besuchen, in der noch Handwerker arbeiten.'],
      fr: ['Basilique Santa Croce', 'La basilique franciscaine, panthéon de l’Italie : tombeaux de Michel-Ange, Galilée et Machiavel, fresques de Giotto et chapelle des Pazzi de Brunelleschi.', 'Visitez l’école du cuir derrière, où travaillent encore des artisans.'],
      it: ['Basilica di Santa Croce', 'La basilica francescana, pantheon d’Italia: tombe di Michelangelo, Galileo e Machiavelli, affreschi di Giotto e la Cappella Pazzi del Brunelleschi.', 'Visita la Scuola del Cuoio sul retro, dove lavorano ancora gli artigiani.'],
    }, { hours: '09:30–17:30' }),
    P('san-miniato', 'attraction', 43.7595, 11.265, VIEW, 4.8, 15000, ['views', 'history', 'sunset'], {
      ru: ['Сан-Миньято-аль-Монте', 'Романская церковь XI века над площадью Микеланджело с мраморным фасадом и одним из лучших видов на город; монахи поют григорианские хоралы вечером.', 'Приходите к вечерней службе с хоралами — время уточните у входа.'],
      en: ['San Miniato al Monte', 'An 11th-century Romanesque church above Piazzale Michelangelo with a marble façade and one of the best city views; monks sing Gregorian chant at vespers.', 'Come for vespers with chant — check the time at the door.'],
      es: ['San Miniato al Monte', 'Una iglesia románica del siglo XI sobre el Piazzale Michelangelo con fachada de mármol y de las mejores vistas; los monjes cantan gregoriano en vísperas.', 'Ven a vísperas con canto: consulta la hora en la entrada.'],
      de: ['San Miniato al Monte', 'Eine romanische Kirche aus dem 11. Jh. über dem Piazzale Michelangelo mit Marmorfassade und einem der besten Stadtblicke; Mönche singen zur Vesper gregorianisch.', 'Zur Vesper mit Gesang kommen – Uhrzeit am Eingang prüfen.'],
      fr: ['San Miniato al Monte', 'Une église romane du XIe au-dessus du Piazzale Michelangelo, façade de marbre et l’une des plus belles vues ; les moines chantent le grégorien aux vêpres.', 'Venez aux vêpres chantées ; horaire à l’entrée.'],
      it: ['San Miniato al Monte', 'Una chiesa romanica dell’XI secolo sopra il Piazzale Michelangelo con facciata di marmo e una delle viste migliori; i monaci cantano il gregoriano ai vespri.', 'Vieni ai vespri cantati: controlla l’orario all’ingresso.'],
    }, { spot: 'hidden' }),
    P('pitti-palace', 'attraction', 43.7651, 11.25, CITY, 4.6, 34000, ['art', 'museums', 'history'], {
      ru: ['Палаццо Питти', 'Огромный дворец Медичи за рекой: Палатинская галерея с Рафаэлем и Тицианом, королевские апартаменты и галерея современного искусства.', 'Комбинированный билет включает сады Боболи — оставьте на них время.'],
      en: ['Palazzo Pitti', 'The huge Medici palace across the river: the Palatine Gallery with Raphael and Titian, the royal apartments and a modern art gallery.', 'The combo ticket includes the Boboli Gardens — leave time for them.'],
      es: ['Palazzo Pitti', 'El enorme palacio Médici al otro lado del río: Galería Palatina con Rafael y Tiziano, apartamentos reales y galería de arte moderno.', 'La entrada combinada incluye los Jardines de Boboli: deja tiempo.'],
      de: ['Palazzo Pitti', 'Der riesige Medici-Palast jenseits des Flusses: Galleria Palatina mit Raffael und Tizian, Königsgemächer und Galerie moderner Kunst.', 'Das Kombiticket schließt den Boboli-Garten ein – Zeit dafür lassen.'],
      fr: ['Palais Pitti', 'L’immense palais des Médicis de l’autre côté du fleuve : galerie Palatine avec Raphaël et Titien, appartements royaux et galerie d’art moderne.', 'Le billet combiné inclut le jardin de Boboli : gardez du temps.'],
      it: ['Palazzo Pitti', 'L’enorme palazzo dei Medici oltrarno: Galleria Palatina con Raffaello e Tiziano, appartamenti reali e galleria d’arte moderna.', 'Il biglietto cumulativo include il Giardino di Boboli: lascia tempo.'],
    }, { hours: '08:15–18:30' }),
    P('bargello', 'attraction', 43.7704, 11.2582, CITY, 4.7, 12000, ['art', 'museums'], {
      ru: ['Музей Барджелло', 'Средневековая крепость-тюрьма с лучшей коллекцией скульптуры Ренессанса: «Давиды» Донателло и Верроккьо, ранний Микеланджело.', 'Здесь редко бывают толпы — хорошая пауза между Уффици и Дуомо.'],
      en: ['Bargello Museum', 'A medieval fortress-prison with the finest collection of Renaissance sculpture: Donatello’s and Verrocchio’s Davids, early Michelangelo.', 'Rarely crowded — a good break between the Uffizi and the Duomo.'],
      es: ['Museo del Bargello', 'Una fortaleza-prisión medieval con la mejor colección de escultura renacentista: los David de Donatello y Verrocchio y el primer Miguel Ángel.', 'Casi nunca está lleno: buena pausa entre los Uffizi y el Duomo.'],
      de: ['Bargello', 'Eine mittelalterliche Festung und Gefängnis mit der schönsten Sammlung von Renaissanceskulptur: Davids von Donatello und Verrocchio, früher Michelangelo.', 'Selten voll – gute Pause zwischen Uffizien und Dom.'],
      fr: ['Musée du Bargello', 'Une forteresse-prison médiévale abritant la plus belle collection de sculpture Renaissance : les David de Donatello et Verrocchio, le jeune Michel-Ange.', 'Rarement bondé : bonne pause entre les Offices et le Duomo.'],
      it: ['Museo del Bargello', 'Una fortezza-prigione medievale con la più bella raccolta di scultura rinascimentale: i David di Donatello e Verrocchio, il giovane Michelangelo.', 'Raramente affollato: una buona pausa tra Uffizi e Duomo.'],
    }, { spot: 'hidden', hours: '08:15–18:50', address: 'Via del Proconsolo 4' }),
    P('medici-chapels', 'attraction', 43.775, 11.2532, DUOMO, 4.6, 14000, ['art', 'history'], {
      ru: ['Капеллы Медичи', 'Усыпальница Медичи у Сан-Лоренцо: Капелла принцев из цветного мрамора и Новая сакристия Микеланджело со скульптурами «Утро», «Вечер», «День» и «Ночь».', 'Совместите с рынком Сан-Лоренцо по соседству.'],
      en: ['Medici Chapels', 'The Medici mausoleum at San Lorenzo: the Chapel of the Princes in coloured marble and Michelangelo’s New Sacristy with Dawn, Dusk, Day and Night.', 'Pair it with the San Lorenzo market next door.'],
      es: ['Capillas de los Médici', 'El mausoleo Médici en San Lorenzo: la Capilla de los Príncipes en mármoles de colores y la Sacristía Nueva de Miguel Ángel con la Aurora, el Crepúsculo, el Día y la Noche.', 'Combínalo con el mercado de San Lorenzo al lado.'],
      de: ['Medici-Kapellen', 'Das Medici-Mausoleum an San Lorenzo: die Fürstenkapelle aus farbigem Marmor und Michelangelos Neue Sakristei mit Morgen, Abend, Tag und Nacht.', 'Mit dem Markt von San Lorenzo nebenan verbinden.'],
      fr: ['Chapelles des Médicis', 'Le mausolée des Médicis à San Lorenzo : chapelle des Princes en marbres colorés et Nouvelle Sacristie de Michel-Ange avec l’Aurore, le Crépuscule, le Jour et la Nuit.', 'À combiner avec le marché de San Lorenzo voisin.'],
      it: ['Cappelle Medicee', 'Il mausoleo dei Medici a San Lorenzo: la Cappella dei Principi in marmi policromi e la Sagrestia Nuova di Michelangelo con Aurora, Crepuscolo, Giorno e Notte.', 'Abbinale al vicino mercato di San Lorenzo.'],
    }, { hours: '08:15–18:50' }),
    P('santa-maria-novella', 'attraction', 43.7745, 11.2493, DUOMO, 4.7, 22000, ['art', 'architecture'], {
      ru: ['Санта-Мария-Новелла', 'Доминиканская базилика с фасадом Альберти, «Троицей» Мазаччо и распятием Джотто; рядом — старинная аптека-парфюмерия монахов.', 'Загляните в Officina Profumo-Farmaceutica — одну из старейших аптек мира.'],
      en: ['Santa Maria Novella', 'A Dominican basilica with Alberti’s façade, Masaccio’s Trinity and Giotto’s crucifix; the monks’ historic pharmacy is next door.', 'Step into the Officina Profumo-Farmaceutica — one of the world’s oldest pharmacies.'],
      es: ['Santa Maria Novella', 'Una basílica dominica con fachada de Alberti, la Trinidad de Masaccio y el crucifijo de Giotto; al lado, la antigua farmacia de los monjes.', 'Entra en la Officina Profumo-Farmaceutica, de las farmacias más antiguas del mundo.'],
      de: ['Santa Maria Novella', 'Eine Dominikanerbasilika mit Albertis Fassade, Masaccios Dreifaltigkeit und Giottos Kruzifix; nebenan die historische Klosterapotheke.', 'In die Officina Profumo-Farmaceutica schauen – eine der ältesten Apotheken der Welt.'],
      fr: ['Santa Maria Novella', 'Une basilique dominicaine à la façade d’Alberti, avec la Trinité de Masaccio et le crucifix de Giotto ; à côté, l’ancienne pharmacie des moines.', 'Entrez dans l’Officina Profumo-Farmaceutica, l’une des plus vieilles pharmacies du monde.'],
      it: ['Santa Maria Novella', 'Una basilica domenicana con la facciata dell’Alberti, la Trinità di Masaccio e il crocifisso di Giotto; accanto l’antica farmacia dei frati.', 'Entra nell’Officina Profumo-Farmaceutica, una delle farmacie più antiche al mondo.'],
    }, { hours: '09:30–17:30' }),
    P('fiesole', 'nature', 43.8067, 11.2945, VIEW, 4.7, 11000, ['views', 'history', 'hiking'], {
      ru: ['Фьезоле', 'Городок на холме в 20 минутах от Флоренции: римский театр, этрусские стены и панорама долины Арно с куполом Дуомо.', 'Автобус №7 от площади Сан-Марко; вниз можно пройти пешком через оливковые рощи.'],
      en: ['Fiesole', 'A hilltown 20 minutes from Florence: a Roman theatre, Etruscan walls and a panorama of the Arno valley with the Duomo’s dome.', 'Bus 7 from Piazza San Marco; walk back down through olive groves.'],
      es: ['Fiesole', 'Un pueblo en la colina a 20 minutos de Florencia: teatro romano, murallas etruscas y panorámica del valle del Arno con la cúpula.', 'Bus 7 desde la Piazza San Marco; baja a pie entre olivos.'],
      de: ['Fiesole', 'Ein Hügelstädtchen 20 Minuten von Florenz: römisches Theater, etruskische Mauern und ein Panorama des Arnotals mit der Domkuppel.', 'Bus 7 ab Piazza San Marco; zu Fuß durch Olivenhaine zurück.'],
      fr: ['Fiesole', 'Un village perché à 20 minutes de Florence : théâtre romain, murailles étrusques et panorama sur la vallée de l’Arno et le dôme.', 'Bus 7 depuis la piazza San Marco ; redescendez à pied par les oliveraies.'],
      it: ['Fiesole', 'Un borgo in collina a 20 minuti da Firenze: teatro romano, mura etrusche e panorama della valle dell’Arno con la cupola.', 'Bus 7 da piazza San Marco; scendi a piedi tra gli ulivi.'],
    }, { spot: 'insta' }),

    P('enoteca-pinchiorri', 'food', 43.7697, 11.261, CITY, 4.7, 1300, ['food', 'luxury', 'wine'], {
      ru: ['Enoteca Pinchiorri', 'Ресторан Аннье Феолде и Джорджо Пинкьорри в палаццо XV века с одной из крупнейших винных коллекций Европы; три звезды MICHELIN (гид Италии 2025).', 'Строгий дресс-код, бронирование заранее; это один из самых дорогих ресторанов Италии.'],
      en: ['Enoteca Pinchiorri', 'Annie Féolde and Giorgio Pinchiorri’s restaurant in a 15th-century palazzo with one of Europe’s largest wine cellars; three MICHELIN stars (Italy guide 2025).', 'Formal dress code, book well ahead; one of Italy’s priciest restaurants.'],
      es: ['Enoteca Pinchiorri', 'El restaurante de Annie Féolde y Giorgio Pinchiorri en un palacio del siglo XV con una de las mayores bodegas de Europa; tres estrellas MICHELIN (guía Italia 2025).', 'Vestimenta formal y reserva con tiempo; de los más caros de Italia.'],
      de: ['Enoteca Pinchiorri', 'Das Restaurant von Annie Féolde und Giorgio Pinchiorri in einem Palazzo des 15. Jh. mit einem der größten Weinkeller Europas; drei MICHELIN-Sterne (Guide Italien 2025).', 'Formeller Dresscode, früh buchen; eines der teuersten Restaurants Italiens.'],
      fr: ['Enoteca Pinchiorri', 'Le restaurant d’Annie Féolde et Giorgio Pinchiorri dans un palais du XVe, avec l’une des plus grandes caves d’Europe ; trois étoiles MICHELIN (guide Italie 2025).', 'Tenue formelle, réservation longtemps à l’avance ; l’une des tables les plus chères d’Italie.'],
      it: ['Enoteca Pinchiorri', 'Il ristorante di Annie Féolde e Giorgio Pinchiorri in un palazzo del Quattrocento con una delle cantine più grandi d’Europa; tre stelle MICHELIN (guida Italia 2025).', 'Dress code formale, prenota con largo anticipo; uno dei ristoranti più cari d’Italia.'],
    }, { price: level(3), michelin: { award: 'star3', year: 2025 }, address: 'Via Ghibellina 87', menu: [
      ['Tasting menu', undefined, 'дегустационный сет|tasting menu|menú degustación|Degustationsmenü|menu dégustation|menù degustazione'],
      ['Wine pairing', undefined, 'вина из знаменитого погреба|wines from the famous cellar|vinos de la célebre bodega|Weine aus dem berühmten Keller|vins de la célèbre cave|vini dalla celebre cantina'],
    ] }),
    P('da-nerbone', 'food', 43.7765, 11.2533, FOOD, 4.6, 6900, ['food', 'streetfood'], {
      ru: ['Da Nerbone', 'Лавка 1872 года на первом этаже Центрального рынка: флорентийский лампредотто — сэндвич с тушёным сычугом и зелёным соусом.', 'Закажите «bagnato» — булку обмакнут в бульон; работает только днём.'],
      en: ['Da Nerbone', 'An 1872 stall on the ground floor of the Mercato Centrale: Florentine lampredotto — a sandwich of stewed tripe with green sauce.', 'Order it “bagnato”, with the bun dipped in broth; daytime only.'],
      es: ['Da Nerbone', 'Un puesto de 1872 en la planta baja del Mercato Centrale: el lampredotto florentino, bocadillo de callos guisados con salsa verde.', 'Pídelo “bagnato”, con el pan mojado en caldo; solo de día.'],
      de: ['Da Nerbone', 'Ein Stand von 1872 im Erdgeschoss des Mercato Centrale: florentinischer Lampredotto – Brötchen mit geschmortem Labmagen und grüner Sauce.', '„Bagnato“ bestellen – das Brötchen in Brühe getunkt; nur tagsüber.'],
      fr: ['Da Nerbone', 'Un comptoir de 1872 au rez-de-chaussée du Mercato Centrale : le lampredotto florentin, sandwich de caillette mijotée et sauce verte.', 'Demandez-le « bagnato », pain trempé dans le bouillon ; seulement en journée.'],
      it: ['Da Nerbone', 'Un banco del 1872 al piano terra del Mercato Centrale: il lampredotto, panino con trippa stufata e salsa verde.', 'Chiedilo “bagnato”; solo a pranzo.'],
    }, { price: level(1), address: 'Mercato Centrale, Piazza del Mercato Centrale', menu: [
      ['Panino col lampredotto', undefined, 'сэндвич с тушёным сычугом и зелёным соусом|stewed tripe sandwich with green sauce|bocadillo de callos con salsa verde|Labmagen-Brötchen mit grüner Sauce|sandwich de tripes et sauce verte|panino col lampredotto e salsa verde'],
      ['Bollito', undefined, 'сэндвич с отварной говядиной|boiled beef sandwich|bocadillo de carne hervida|Brötchen mit Siedfleisch|sandwich au bœuf bouilli|panino col bollito'],
    ] }),
    P('trattoria-sostanza', 'food', 43.7735, 11.247, FOOD, 4.5, 4300, ['food', 'history'], {
      ru: ['Trattoria Sostanza', 'Узкая траттория 1869 года с общими столами: курица в сливочном масле на сковороде и флорентийский стейк.', 'Знаменитый «пирог-безе» на десерт; бронируйте — мест очень мало.'],
      en: ['Trattoria Sostanza', 'A narrow 1869 trattoria with shared tables: chicken breast in butter served in the pan, and bistecca alla fiorentina.', 'The meringue cake is famous for dessert; book — seats are very few.'],
      es: ['Trattoria Sostanza', 'Una estrecha trattoria de 1869 con mesas compartidas: pollo a la mantequilla en sartén y bistecca alla fiorentina.', 'De postre, la famosa tarta de merengue; reserva, hay muy pocas plazas.'],
      de: ['Trattoria Sostanza', 'Eine schmale Trattoria von 1869 mit Gemeinschaftstischen: Hähnchenbrust in Butter in der Pfanne und Bistecca alla fiorentina.', 'Die Baisertorte zum Dessert ist berühmt; reservieren, es gibt nur wenige Plätze.'],
      fr: ['Trattoria Sostanza', 'Une étroite trattoria de 1869 aux tables partagées : blanc de poulet au beurre servi dans la poêle et bistecca alla fiorentina.', 'Le gâteau meringué est célèbre ; réservez, très peu de places.'],
      it: ['Trattoria Sostanza', 'Una stretta trattoria del 1869 con tavoli condivisi: petto di pollo al burro in padella e bistecca alla fiorentina.', 'Famosa la torta meringata; prenota, i posti sono pochissimi.'],
    }, { price: level(2), address: 'Via del Porcellana 25r', menu: [
      ['Petto di pollo al burro', undefined, 'куриная грудка в сливочном масле|chicken breast in butter|pechuga de pollo a la mantequilla|Hähnchenbrust in Butter|blanc de poulet au beurre|petto di pollo al burro'],
      ['Bistecca alla fiorentina', undefined, 'флорентийский стейк на кости (на вес)|Florentine T-bone steak (by weight)|chuletón florentino (al peso)|Florentiner T-Bone-Steak (nach Gewicht)|côte florentine (au poids)|bistecca alla fiorentina (a peso)'],
      ['Torta meringata', undefined, 'торт-безе|meringue cake|tarta de merengue|Baisertorte|gâteau meringué|torta meringata'],
    ] }),
    P('buca-mario', 'food', 43.772, 11.249, FOOD, 4.4, 5600, ['food', 'history'], {
      ru: ['Buca Mario', 'Ресторан с 1886 года в сводчатом подвале у Санта-Мария-Новелла: тосканская классика — риболлита, паппарделле с кабаном и бистекка.', 'Ужин в подвале с кирпичными сводами — одна из самых атмосферных трапез Флоренции.'],
      en: ['Buca Mario', 'A restaurant since 1886 in a vaulted cellar near Santa Maria Novella: Tuscan classics — ribollita, wild-boar pappardelle and bistecca.', 'Dinner under the brick vaults is one of Florence’s most atmospheric meals.'],
      es: ['Buca Mario', 'Restaurante desde 1886 en un sótano abovedado junto a Santa Maria Novella: clásicos toscanos como ribollita, pappardelle de jabalí y bistecca.', 'Cenar bajo las bóvedas de ladrillo es de lo más atmosférico de Florencia.'],
      de: ['Buca Mario', 'Ein Restaurant seit 1886 in einem Gewölbekeller bei Santa Maria Novella: toskanische Klassiker – Ribollita, Wildschwein-Pappardelle und Bistecca.', 'Ein Abendessen unter Ziegelgewölben – eines der stimmungsvollsten in Florenz.'],
      fr: ['Buca Mario', 'Un restaurant depuis 1886 dans une cave voûtée près de Santa Maria Novella : classiques toscans, ribollita, pappardelle au sanglier et bistecca.', 'Dîner sous les voûtes de brique, l’un des repas les plus atmosphériques de Florence.'],
      it: ['Buca Mario', 'Un ristorante dal 1886 in una cantina a volta vicino a Santa Maria Novella: classici toscani, ribollita, pappardelle al cinghiale e bistecca.', 'Cenare sotto le volte in mattoni è tra le esperienze più suggestive di Firenze.'],
    }, { price: level(3), address: 'Piazza degli Ottaviani 16r', menu: [
      ['Ribollita', undefined, 'тосканский суп из хлеба, фасоли и капусты|Tuscan bread, bean and kale soup|sopa toscana de pan, alubias y col|toskanische Brot-Bohnen-Kohl-Suppe|soupe toscane au pain, haricots et chou|ribollita toscana'],
      ['Pappardelle al cinghiale', undefined, 'паппарделле с рагу из кабана|pappardelle with wild-boar ragù|pappardelle con ragú de jabalí|Pappardelle mit Wildschweinragout|pappardelle au ragoût de sanglier|pappardelle al ragù di cinghiale'],
    ] }),
    P('gelateria-dei-neri', 'food', 43.768, 11.26, VIEW, 4.6, 7800, ['food'], {
      ru: ['Gelateria dei Neri', 'Любимое у местных мороженое у Санта-Кроче с большим выбором вкусов — от фисташки до мексиканского шоколада с перцем.', 'Попробуйте «Messicano» — шоколад с чили.'],
      en: ['Gelateria dei Neri', 'A locals’ favourite gelateria near Santa Croce with a long list of flavours — from pistachio to Mexican chilli chocolate.', 'Try the “Messicano” — chocolate with chilli.'],
      es: ['Gelateria dei Neri', 'La heladería favorita de los locales junto a Santa Croce, con muchos sabores, del pistacho al chocolate mexicano con chile.', 'Prueba el “Messicano”, chocolate con chile.'],
      de: ['Gelateria dei Neri', 'Eine Lieblings-Eisdiele der Einheimischen bei Santa Croce mit vielen Sorten – von Pistazie bis mexikanischer Chili-Schokolade.', 'Den „Messicano“ probieren – Schokolade mit Chili.'],
      fr: ['Gelateria dei Neri', 'Le glacier préféré des Florentins près de Santa Croce, aux nombreux parfums, de la pistache au chocolat mexicain pimenté.', 'Goûtez le « Messicano », chocolat au piment.'],
      it: ['Gelateria dei Neri', 'La gelateria amata dai fiorentini vicino a Santa Croce, con tanti gusti, dal pistacchio al cioccolato messicano piccante.', 'Prova il “Messicano”, cioccolato al peperoncino.'],
    }, { price: level(1), address: 'Via dei Neri 9r', menu: [
      ['Messicano', undefined, 'шоколад с чили|chocolate with chilli|chocolate con chile|Schokolade mit Chili|chocolat au piment|cioccolato al peperoncino'],
      ['Pistacchio', undefined, 'фисташковое мороженое|pistachio gelato|helado de pistacho|Pistazieneis|glace pistache|gelato al pistacchio'],
    ] }),
    P('i-fratellini', 'food', 43.7707, 11.2553, FOOD, 4.6, 6200, ['food', 'streetfood'], {
      ru: ['I’ Fratellini', 'Крошечное окошко с 1875 года в переулке у площади Синьории: маленькие панини с тосканскими начинками и бокал вина, который ставят на полку на стене.', 'Выберите 2–3 панини из списка и бокал кьянти — едят стоя на улице.'],
      en: ['I’ Fratellini', 'A tiny hatch since 1875 in a lane off Piazza della Signoria: small panini with Tuscan fillings and a glass of wine set on the wall shelf.', 'Pick 2–3 panini from the list and a glass of Chianti — eaten standing in the street.'],
      es: ['I’ Fratellini', 'Un diminuto ventanuco desde 1875 junto a la Piazza della Signoria: panini pequeños con rellenos toscanos y una copa de vino en el estante de la pared.', 'Elige 2–3 panini y un Chianti: se come de pie en la calle.'],
      de: ['I’ Fratellini', 'Eine winzige Luke seit 1875 in einer Gasse an der Piazza della Signoria: kleine Panini mit toskanischen Füllungen und ein Glas Wein auf dem Wandbrett.', '2–3 Panini und ein Glas Chianti wählen – im Stehen auf der Straße.'],
      fr: ['I’ Fratellini', 'Un minuscule guichet depuis 1875 dans une ruelle près de la piazza della Signoria : petits panini toscans et verre de vin posé sur l’étagère murale.', 'Choisissez 2–3 panini et un chianti, à manger debout dans la rue.'],
      it: ['I’ Fratellini', 'Un minuscolo sportello dal 1875 in un vicolo vicino a piazza della Signoria: panini toscani e un bicchiere di vino da appoggiare sulla mensola.', 'Scegli 2–3 panini e un Chianti, da gustare in piedi.'],
    }, { price: level(1), address: 'Via dei Cimatori 38r', menu: [
      ['Panino con finocchiona', undefined, 'панини с тосканской салями с фенхелем|panino with fennel salami|panino con salami de hinojo|Panino mit Fenchelsalami|panino au saucisson au fenouil|panino con finocchiona'],
      ['Bicchiere di Chianti', undefined, 'бокал кьянти|glass of Chianti|copa de Chianti|Glas Chianti|verre de chianti|bicchiere di Chianti'],
    ] }),
    P('trattoria-cammillo', 'food', 43.767, 11.25, BRIDGE, 4.4, 2900, ['food'], {
      ru: ['Trattoria Cammillo', 'Семейная траттория с 1945 года за Арно: тосканская кухня, жареные блюда и белые трюфели осенью.', 'Попробуйте жареные цветки цукини и тосканскую риболлиту.'],
      en: ['Trattoria Cammillo', 'A family trattoria since 1945 across the Arno: Tuscan cooking, fried dishes and white truffles in autumn.', 'Try the fried zucchini flowers and the Tuscan ribollita.'],
      es: ['Trattoria Cammillo', 'Una trattoria familiar desde 1945 al otro lado del Arno: cocina toscana, fritos y trufa blanca en otoño.', 'Prueba las flores de calabacín fritas y la ribollita toscana.'],
      de: ['Trattoria Cammillo', 'Eine Familientrattoria seit 1945 jenseits des Arno: toskanische Küche, Frittiertes und im Herbst weiße Trüffel.', 'Frittierte Zucchiniblüten und toskanische Ribollita probieren.'],
      fr: ['Trattoria Cammillo', 'Une trattoria familiale depuis 1945 sur l’autre rive de l’Arno : cuisine toscane, fritures et truffe blanche à l’automne.', 'Goûtez les fleurs de courgette frites et la ribollita toscane.'],
      it: ['Trattoria Cammillo', 'Una trattoria di famiglia dal 1945 oltrarno: cucina toscana, fritti e tartufo bianco in autunno.', 'Prova i fiori di zucca fritti e la ribollita.'],
    }, { price: level(2), address: 'Borgo San Jacopo 57r', menu: [
      ['Fiori di zucca fritti', undefined, 'жареные цветки цукини|fried zucchini flowers|flores de calabacín fritas|frittierte Zucchiniblüten|fleurs de courgette frites|fiori di zucca fritti'],
      ['Ribollita', undefined, 'тосканский суп из хлеба, фасоли и капусты|Tuscan bread, bean and kale soup|sopa toscana de pan, alubias y col|toskanische Brot-Bohnen-Kohl-Suppe|soupe toscane au pain, haricots et chou|ribollita toscana'],
    ] }),
    P('il-santo-bevitore', 'food', 43.7693, 11.2465, FOOD, 4.6, 4100, ['food', 'wine'], {
      ru: ['Il Santo Bevitore', 'Современная тосканская кухня и сильная винная карта в бывших сводчатых складах района Санто-Спирито.', 'Рядом его же винный бар Il Santino — аперитив перед ужином.'],
      en: ['Il Santo Bevitore', 'Modern Tuscan cooking and a strong wine list in former vaulted storerooms in the Santo Spirito district.', 'Its wine bar Il Santino next door is perfect for an aperitivo first.'],
      es: ['Il Santo Bevitore', 'Cocina toscana moderna y gran carta de vinos en antiguos almacenes abovedados del barrio de Santo Spirito.', 'Su vinoteca Il Santino, al lado, es ideal para el aperitivo.'],
      de: ['Il Santo Bevitore', 'Moderne toskanische Küche und starke Weinkarte in ehemaligen Gewölbelagern im Viertel Santo Spirito.', 'Die Weinbar Il Santino nebenan ist ideal für den Aperitivo.'],
      fr: ['Il Santo Bevitore', 'Cuisine toscane moderne et belle carte des vins dans d’anciens entrepôts voûtés du quartier de Santo Spirito.', 'Son bar à vin voisin, Il Santino, est parfait pour l’apéritif.'],
      it: ['Il Santo Bevitore', 'Cucina toscana moderna e un’ottima carta dei vini in ex magazzini a volta nel quartiere di Santo Spirito.', 'Il vicino wine bar Il Santino è perfetto per l’aperitivo.'],
    }, { price: level(2), address: 'Via di Santo Spirito 64–66r', menu: [
      ['Pici al ragù', undefined, 'толстые спагетти пичи с рагу|thick pici pasta with ragù|pici con ragú|Pici mit Ragù|pici au ragù|pici al ragù'],
      ['Tagliere di salumi', undefined, 'доска тосканских мясных деликатесов|board of Tuscan cured meats|tabla de embutidos toscanos|Brett mit toskanischer Wurst|planche de charcuterie toscane|tagliere di salumi toscani'],
    ] }),
    P('vini-e-vecchi-sapori', 'food', 43.7698, 11.2565, FOOD, 4.6, 5300, ['food'], {
      ru: ['Osteria Vini e Vecchi Sapori', 'Крошечная семейная остерия в двух шагах от площади Синьории с меню, написанным от руки: домашняя паста и тосканская классика.', 'Мест около 20 — приходите к открытию или бронируйте; по воскресеньям закрыто.'],
      en: ['Osteria Vini e Vecchi Sapori', 'A tiny family osteria steps from Piazza della Signoria with a handwritten menu: homemade pasta and Tuscan classics.', 'About 20 seats — come at opening or book; closed on Sundays.'],
      es: ['Osteria Vini e Vecchi Sapori', 'Una diminuta osteria familiar junto a la Piazza della Signoria con carta escrita a mano: pasta casera y clásicos toscanos.', 'Unas 20 plazas: llega a la apertura o reserva; cierra los domingos.'],
      de: ['Osteria Vini e Vecchi Sapori', 'Eine winzige Familien-Osteria nahe der Piazza della Signoria mit handgeschriebener Karte: hausgemachte Pasta und toskanische Klassiker.', 'Rund 20 Plätze – zur Öffnung kommen oder buchen; sonntags zu.'],
      fr: ['Osteria Vini e Vecchi Sapori', 'Une minuscule osteria familiale près de la piazza della Signoria, menu écrit à la main : pâtes maison et classiques toscans.', 'Une vingtaine de places : venez à l’ouverture ou réservez ; fermé le dimanche.'],
      it: ['Osteria Vini e Vecchi Sapori', 'Una piccola osteria di famiglia a due passi da piazza della Signoria con menù scritto a mano: pasta fatta in casa e classici toscani.', 'Una ventina di posti: arriva all’apertura o prenota; chiuso la domenica.'],
    }, { price: level(2), address: 'Via dei Magazzini 3r', menu: [
      ['Pasta fatta in casa', undefined, 'домашняя паста дня|homemade pasta of the day|pasta casera del día|hausgemachte Tagespasta|pâtes maison du jour|pasta fatta in casa del giorno'],
      ['Peposo', undefined, 'тосканская говядина, томлённая в вине с перцем|Tuscan beef stewed in wine with pepper|ternera toscana guisada en vino con pimienta|toskanisches Rind in Wein und Pfeffer geschmort|bœuf toscan mijoté au vin et poivre|peposo toscano'],
    ] }),
    P('la-menagere', 'food', 43.776, 11.2556, CITY, 4.4, 6800, ['food', 'shopping'], {
      ru: ['La Ménagère', 'Бывшая хозяйственная лавка 1896 года, ставшая кафе, рестораном, цветочным и дизайнерским магазином под одной крышей.', 'Хорошо для завтрака или кофе после Капелл Медичи.'],
      en: ['La Ménagère', 'An 1896 former housewares shop turned café, restaurant, florist and design store under one roof.', 'Good for breakfast or coffee after the Medici Chapels.'],
      es: ['La Ménagère', 'Una antigua tienda de menaje de 1896 convertida en café, restaurante, floristería y tienda de diseño bajo un mismo techo.', 'Bien para desayunar o tomar café tras las Capillas Médici.'],
      de: ['La Ménagère', 'Ein ehemaliges Haushaltswarengeschäft von 1896, heute Café, Restaurant, Blumen- und Designladen unter einem Dach.', 'Gut zum Frühstück oder Kaffee nach den Medici-Kapellen.'],
      fr: ['La Ménagère', 'Une ancienne quincaillerie de 1896 devenue café, restaurant, fleuriste et boutique de design sous un même toit.', 'Idéal pour un petit-déjeuner ou un café après les chapelles des Médicis.'],
      it: ['La Ménagère', 'Un ex negozio di casalinghi del 1896 diventato caffè, ristorante, fioraio e negozio di design sotto lo stesso tetto.', 'Ottimo per colazione o un caffè dopo le Cappelle Medicee.'],
    }, { price: level(2), address: 'Via de’ Ginori 8r', menu: [
      ['Breakfast', undefined, 'завтрак с выпечкой и кофе|breakfast with pastries and coffee|desayuno con bollería y café|Frühstück mit Gebäck und Kaffee|petit-déjeuner viennoiseries et café|colazione con dolci e caffè'],
      ['Cappuccino', undefined, 'капучино|cappuccino|capuchino|Cappuccino|cappuccino|cappuccino'],
    ] }),
  ],
  routes: [
    D(['la-menagere', '=florence-duomo', 'accademia', 'medici-chapels', 'da-nerbone', 'santa-maria-novella', '=florence-ponte-santa-trinita', 'i-fratellini', 'buca-mario'],
      'Дуомо, «Давид» и Сан-Лоренцо|The Duomo, David and San Lorenzo|El Duomo, el David y San Lorenzo|Dom, David und San Lorenzo|Le Duomo, le David et San Lorenzo|Duomo, David e San Lorenzo'),
    D(['uffizi', 'palazzo-vecchio', 'vini-e-vecchi-sapori', 'bargello', 'santa-croce', 'gelateria-dei-neri', '=florence-piazzale-michelangelo', 'san-miniato', 'enoteca-pinchiorri'],
      'Уффици, Санта-Кроче и закат на холме|The Uffizi, Santa Croce and sunset on the hill|Los Uffizi, Santa Croce y atardecer en la colina|Uffizien, Santa Croce und Sonnenuntergang|Les Offices, Santa Croce et coucher de soleil|Uffizi, Santa Croce e tramonto in collina'),
    D(['=florence-ponte-vecchio', 'pitti-palace', '=florence-boboli-gardens', 'trattoria-cammillo', 'fiesole', 'il-santo-bevitore'],
      'Ольтрарно, Питти и Фьезоле|Oltrarno, the Pitti and Fiesole|Oltrarno, el Pitti y Fiesole|Oltrarno, Pitti und Fiesole|Oltrarno, le palais Pitti et Fiesole|Oltrarno, Pitti e Fiesole'),
  ],
};

export default pack;
