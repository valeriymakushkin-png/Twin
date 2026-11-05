import type { CityPack } from '../types';
import { free, level, makeDay, makePlace } from './_kit.ts';

const P = makePlace('barcelona');
const D = makeDay('barcelona');
const CITY = 'j4eJ3gXlVQ0';
const STREET = 'pm3O5KxWKtw';
const PARK = 'X4wcsMoc73o';
const GAUDI = 'tI8uk_EcJIA';

const pack: CityPack = {
  country: 'ES',
  city: 'barcelona',
  places: [
    P('cathedral', 'attraction', 41.384, 2.1762, STREET, 4.7, 61400, ['architecture', 'history', 'oldtown'], {
      ru: ['Барселонский собор', 'Готический собор в сердце Готического квартала с крытой галереей, где живут 13 белых гусей, и крышей, на которую можно подняться на лифте.', 'Плечи и колени должны быть закрыты; поднимитесь на крышу — вид на старый город.'],
      en: ['Barcelona Cathedral', 'The Gothic cathedral at the heart of the Gothic Quarter, with a cloister home to 13 white geese and a roof you can reach by lift.', 'Cover shoulders and knees; take the lift to the roof for a view over the old town.'],
      es: ['Catedral de Barcelona', 'La catedral gótica en el corazón del Barrio Gótico, con un claustro donde viven 13 ocas blancas y una azotea accesible en ascensor.', 'Hombros y rodillas cubiertos; sube a la azotea para ver el casco antiguo.'],
      de: ['Kathedrale von Barcelona', 'Die gotische Kathedrale im Herzen des Barri Gòtic mit einem Kreuzgang, in dem 13 weiße Gänse leben, und einem Dach, das man per Lift erreicht.', 'Schultern und Knie bedecken; mit dem Lift aufs Dach – Blick über die Altstadt.'],
      fr: ['Cathédrale de Barcelone', 'La cathédrale gothique au cœur du Barri Gòtic, avec un cloître où vivent 13 oies blanches et un toit accessible en ascenseur.', 'Épaules et genoux couverts ; montez sur le toit pour la vue sur la vieille ville.'],
      it: ['Cattedrale di Barcellona', 'La cattedrale gotica nel cuore del Barri Gòtic, con un chiostro dove vivono 13 oche bianche e un tetto raggiungibile in ascensore.', 'Spalle e ginocchia coperte; sali sul tetto per la vista sulla città vecchia.'],
    }, { hours: '09:30–18:30' }),
    P('casa-mila', 'attraction', 41.3953, 2.162, GAUDI, 4.6, 78200, ['architecture', 'art', 'unesco'], {
      ru: ['Каса Мила (Ла Педрера)', 'Жилой дом Гауди с волнистым каменным фасадом и крышей, где стоят трубы-«воины»; объект ЮНЕСКО.', 'Возьмите билет на вечерний сеанс — крыша с подсветкой и проекциями особенно красива.'],
      en: ['Casa Milà (La Pedrera)', 'Gaudí’s apartment building with a rippling stone façade and a rooftop of “warrior” chimneys; a UNESCO site.', 'Book an evening visit — the lit-up roof with projections is especially beautiful.'],
      es: ['Casa Milà (La Pedrera)', 'El edificio de viviendas de Gaudí con fachada ondulada de piedra y una azotea de chimeneas “guerreras”; Patrimonio UNESCO.', 'Reserva la visita nocturna: la azotea iluminada con proyecciones es preciosa.'],
      de: ['Casa Milà (La Pedrera)', 'Gaudís Wohnhaus mit welliger Steinfassade und einem Dach voller „Krieger“-Schornsteine; UNESCO-Welterbe.', 'Einen Abendbesuch buchen – das beleuchtete Dach mit Projektionen ist besonders schön.'],
      fr: ['Casa Milà (La Pedrera)', 'L’immeuble de Gaudí à la façade de pierre ondulante et au toit de cheminées « guerriers » ; patrimoine UNESCO.', 'Réservez la visite du soir : le toit illuminé avec projections est superbe.'],
      it: ['Casa Milà (La Pedrera)', 'Il palazzo di Gaudí con facciata in pietra ondulata e un tetto di camini “guerrieri”; patrimonio UNESCO.', 'Prenota la visita serale: il tetto illuminato con proiezioni è bellissimo.'],
    }, { spot: 'insta', hours: '09:00–20:30', address: 'Passeig de Gràcia 92' }),
    P('palau-musica', 'attraction', 41.3876, 2.1753, STREET, 4.8, 33600, ['architecture', 'art', 'unesco'], {
      ru: ['Дворец каталонской музыки', 'Концертный зал в стиле модерн (1908) Доменека-и-Монтанера с витражным световым куполом; объект ЮНЕСКО.', 'Лучший способ увидеть зал — прийти на концерт; днём проводят экскурсии по времени.'],
      en: ['Palau de la Música Catalana', 'Domènech i Montaner’s 1908 Modernista concert hall with a stained-glass skylight dome; a UNESCO site.', 'The best way to see it is at a concert; timed guided tours run in the daytime.'],
      es: ['Palau de la Música Catalana', 'La sala de conciertos modernista de Domènech i Montaner (1908) con su claraboya de vidrieras; Patrimonio UNESCO.', 'Lo mejor es verla en un concierto; de día hay visitas guiadas con hora.'],
      de: ['Palau de la Música Catalana', 'Domènech i Montaners modernistischer Konzertsaal von 1908 mit Buntglas-Oberlicht; UNESCO-Welterbe.', 'Am schönsten bei einem Konzert; tagsüber gibt es Führungen mit Zeitfenster.'],
      fr: ['Palau de la Música Catalana', 'La salle de concert moderniste de Domènech i Montaner (1908) et sa verrière en vitraux ; patrimoine UNESCO.', 'Le mieux est d’y venir pour un concert ; visites guidées horodatées en journée.'],
      it: ['Palau de la Música Catalana', 'La sala da concerti modernista di Domènech i Montaner (1908) con il lucernario a vetrate; patrimonio UNESCO.', 'Il modo migliore per vederla è un concerto; di giorno visite guidate a orario.'],
    }, { address: 'Carrer Palau de la Música 4–6' }),
    P('santa-maria-del-mar', 'attraction', 41.3837, 2.182, STREET, 4.8, 21900, ['architecture', 'history'], {
      ru: ['Санта-Мария-дель-Мар', 'Каталонская готика XIV века в квартале Борн, построенная на деньги моряков и портовых грузчиков; простор и свет внутри поражают.', 'Летом можно подняться на крышу с экскурсией; вечером здесь часто играют концерты.'],
      en: ['Santa Maria del Mar', '14th-century Catalan Gothic in El Born, built with money from sailors and dockers; the space and light inside are striking.', 'In summer you can tour the roof; evening concerts are frequent.'],
      es: ['Santa Maria del Mar', 'Gótico catalán del siglo XIV en el Born, construido con dinero de marineros y estibadores; impresionan el espacio y la luz.', 'En verano hay visitas a la azotea; por la noche suele haber conciertos.'],
      de: ['Santa Maria del Mar', 'Katalanische Gotik aus dem 14. Jh. in El Born, bezahlt von Seeleuten und Hafenarbeitern; Weite und Licht im Inneren beeindrucken.', 'Im Sommer gibt es Dachführungen; abends oft Konzerte.'],
      fr: ['Santa Maria del Mar', 'Gothique catalan du XIVe siècle dans le Born, financé par marins et dockers ; l’espace et la lumière intérieure saisissent.', 'L’été, visites du toit ; concerts fréquents le soir.'],
      it: ['Santa Maria del Mar', 'Gotico catalano del XIV secolo nel Born, costruito con i soldi di marinai e scaricatori; impressionano spazio e luce.', 'D’estate visite al tetto; la sera spesso concerti.'],
    }, { hours: '10:00–20:30' }),
    P('picasso-museum', 'attraction', 41.3852, 2.1809, STREET, 4.5, 39800, ['art', 'museums'], {
      ru: ['Музей Пикассо', 'Пять средневековых дворцов на улице Монткада с ранними работами Пикассо и его серией «Менины» по Веласкесу.', 'По четвергам вечером и в первое воскресенье месяца вход бесплатный, но билет нужно взять онлайн.'],
      en: ['Picasso Museum', 'Five medieval palaces on Carrer de Montcada with Picasso’s early work and his Las Meninas series after Velázquez.', 'Thursday evenings and the first Sunday of the month are free, but book online.'],
      es: ['Museo Picasso', 'Cinco palacios medievales en la calle Montcada con la obra temprana de Picasso y su serie Las Meninas.', 'Jueves por la tarde y primer domingo de mes gratis, con reserva online.'],
      de: ['Picasso-Museum', 'Fünf mittelalterliche Paläste in der Carrer de Montcada mit Picassos Frühwerk und seiner Las-Meninas-Serie nach Velázquez.', 'Donnerstagabends und am ersten Sonntag im Monat gratis, aber online buchen.'],
      fr: ['Musée Picasso', 'Cinq palais médiévaux de la rue Montcada avec les œuvres de jeunesse de Picasso et sa série des Ménines d’après Velázquez.', 'Gratuit le jeudi soir et le premier dimanche du mois, sur réservation en ligne.'],
      it: ['Museo Picasso', 'Cinque palazzi medievali in Carrer de Montcada con le opere giovanili di Picasso e la serie Las Meninas da Velázquez.', 'Gratis il giovedì sera e la prima domenica del mese, con prenotazione online.'],
    }, { hours: '10:00–19:00', address: 'Carrer de Montcada 15–23' }),
    P('mnac', 'attraction', 41.3685, 2.1534, PARK, 4.7, 32700, ['art', 'museums', 'views'], {
      ru: ['Национальный музей искусства Каталонии (MNAC)', 'Дворец на Монжуике с лучшей в мире коллекцией романских фресок; с его ступеней открывается вид на весь город.', 'После музея спуститесь к Волшебному фонтану — расписание шоу смотрите на сайте города.'],
      en: ['National Art Museum of Catalonia (MNAC)', 'A palace on Montjuïc with the world’s finest collection of Romanesque murals; its steps look out over the whole city.', 'Afterwards head down to the Magic Fountain — check the city website for show times.'],
      es: ['Museu Nacional d’Art de Catalunya (MNAC)', 'Un palacio en Montjuïc con la mejor colección de pintura mural románica del mundo; desde sus escaleras se ve toda la ciudad.', 'Después baja a la Font Màgica; consulta los horarios en la web municipal.'],
      de: ['Katalanisches Nationalkunstmuseum (MNAC)', 'Ein Palast auf dem Montjuïc mit der weltbesten Sammlung romanischer Wandmalerei; von seinen Stufen blickt man über die Stadt.', 'Danach zum Magischen Brunnen – Showzeiten auf der Stadtwebsite.'],
      fr: ['Musée national d’art de Catalogne (MNAC)', 'Un palais sur Montjuïc abritant la plus belle collection de peintures murales romanes ; ses marches dominent toute la ville.', 'Descendez ensuite à la Fontaine magique ; horaires sur le site de la ville.'],
      it: ['Museo nazionale d’arte della Catalogna (MNAC)', 'Un palazzo sul Montjuïc con la più bella collezione di affreschi romanici al mondo; dalle sue scale si vede tutta la città.', 'Poi scendi alla Fontana Magica; orari sul sito del comune.'],
    }, { spot: 'insta', hours: '10:00–18:00' }),
    P('barceloneta-beach', 'nature', 41.3784, 2.1925, CITY, 4.4, 51000, ['beaches', 'sunset'], {
      ru: ['Пляж Барселонета', 'Городской пляж рядом с рыбацким кварталом: набережная, чирингито, волейбол и закат над портом.', 'Не оставляйте вещи без присмотра; потом поужинайте рисом в квартале Барселонета.'],
      en: ['Barceloneta Beach', 'The city beach by the old fishing quarter: promenade, beach bars, volleyball and sunset over the port.', 'Never leave belongings unattended; then have rice for dinner in Barceloneta.'],
      es: ['Playa de la Barceloneta', 'La playa urbana junto al antiguo barrio pescador: paseo, chiringuitos, vóley y atardecer sobre el puerto.', 'No dejes tus cosas solas; después cena un arroz en la Barceloneta.'],
      de: ['Strand Barceloneta', 'Der Stadtstrand am alten Fischerviertel: Promenade, Strandbars, Volleyball und Sonnenuntergang über dem Hafen.', 'Sachen nie unbeaufsichtigt lassen; danach Reisgericht in Barceloneta essen.'],
      fr: ['Plage de la Barceloneta', 'La plage urbaine près de l’ancien quartier des pêcheurs : promenade, paillotes, volley et coucher de soleil sur le port.', 'Ne laissez jamais vos affaires ; ensuite, un riz pour dîner à la Barceloneta.'],
      it: ['Spiaggia della Barceloneta', 'La spiaggia cittadina accanto all’antico quartiere dei pescatori: lungomare, chiringuitos, pallavolo e tramonto sul porto.', 'Non lasciare mai le tue cose; poi cena con un riso alla Barceloneta.'],
    }, { price: free, hours: 'always' }),
    P('sant-pau', 'attraction', 41.4115, 2.1745, GAUDI, 4.7, 27300, ['architecture', 'unesco', 'gardens'], {
      ru: ['Комплекс Сан-Пау', 'Бывшая больница — модерновый «город» павильонов Доменека-и-Монтанера с мозаиками, садами и подземными галереями; объект ЮНЕСКО.', 'Удобно совместить с Саграда Фамилией: от неё 10 минут пешком по проспекту Гауди.'],
      en: ['Sant Pau Recinte Modernista', 'A former hospital — a Modernista “city” of Domènech i Montaner pavilions with mosaics, gardens and underground tunnels; a UNESCO site.', 'Pair it with the Sagrada Família, 10 minutes away along Avinguda de Gaudí.'],
      es: ['Recinto Modernista de Sant Pau', 'Un antiguo hospital: una “ciudad” modernista de pabellones de Domènech i Montaner con mosaicos, jardines y túneles; Patrimonio UNESCO.', 'Combínalo con la Sagrada Família, a 10 minutos por la avenida Gaudí.'],
      de: ['Recinte Modernista de Sant Pau', 'Ein ehemaliges Krankenhaus – eine modernistische „Stadt“ aus Pavillons von Domènech i Montaner mit Mosaiken, Gärten und Tunneln; UNESCO-Welterbe.', 'Mit der Sagrada Família verbinden, 10 Minuten entlang der Avinguda de Gaudí.'],
      fr: ['Ensemble moderniste de Sant Pau', 'Un ancien hôpital : une « ville » moderniste de pavillons de Domènech i Montaner, mosaïques, jardins et tunnels ; patrimoine UNESCO.', 'À combiner avec la Sagrada Família, à 10 minutes par l’avenue Gaudí.'],
      it: ['Recinte Modernista de Sant Pau', 'Un ex ospedale: una “città” modernista di padiglioni di Domènech i Montaner con mosaici, giardini e tunnel; patrimonio UNESCO.', 'Abbinalo alla Sagrada Família, a 10 minuti lungo l’Avinguda de Gaudí.'],
    }, { spot: 'hidden', hours: '09:30–18:30' }),
    P('tibidabo', 'nature', 41.4225, 2.1187, PARK, 4.6, 34100, ['views', 'mountains', 'sunset'], {
      ru: ['Гора Тибидабо', 'Самая высокая точка над городом (512 м) с храмом Святого Сердца и старинным парком аттракционов; вид на всю Барселону и море.', 'Поднимайтесь на фуникулёре Cuca de Llum или автобусе T2A; вечером в ясный день виден весь берег.'],
      en: ['Tibidabo', 'The highest point above the city (512 m) with the Sacred Heart church and a vintage amusement park; views over all Barcelona and the sea.', 'Ride the Cuca de Llum funicular or the T2A bus; on clear evenings you see the whole coast.'],
      es: ['Tibidabo', 'El punto más alto sobre la ciudad (512 m) con el templo del Sagrado Corazón y un parque de atracciones histórico; vistas a toda Barcelona y el mar.', 'Sube en el funicular Cuca de Llum o el bus T2A; en tardes claras se ve toda la costa.'],
      de: ['Tibidabo', 'Der höchste Punkt über der Stadt (512 m) mit der Herz-Jesu-Kirche und einem historischen Freizeitpark; Blick über Barcelona und das Meer.', 'Mit der Standseilbahn Cuca de Llum oder dem Bus T2A hinauf; an klaren Abenden sieht man die ganze Küste.'],
      fr: ['Tibidabo', 'Le point culminant de la ville (512 m) avec l’église du Sacré-Cœur et un parc d’attractions d’époque ; vue sur tout Barcelone et la mer.', 'Montez par le funiculaire Cuca de Llum ou le bus T2A ; par temps clair, toute la côte est visible.'],
      it: ['Tibidabo', 'Il punto più alto sulla città (512 m) con il tempio del Sacro Cuore e un luna park storico; vista su tutta Barcellona e il mare.', 'Sali con la funicolare Cuca de Llum o il bus T2A; nelle sere limpide si vede tutta la costa.'],
    }, { spot: 'insta' }),
    P('montserrat', 'nature', 41.5934, 1.8378, PARK, 4.8, 48900, ['mountains', 'hiking', 'views'], {
      ru: ['Монтсеррат', 'Монастырь в зубчатых скалах в часе от города: Чёрная Мадонна, хор мальчиков Эсколания и фуникулёры к горным тропам.', 'Поезд R5 с площади Испании + зубчатая дорога или канатка; комбинированный билет «Trans Montserrat» выгоднее.'],
      en: ['Montserrat', 'A monastery among jagged peaks an hour from the city: the Black Madonna, the Escolania boys’ choir and funiculars up to mountain trails.', 'Take the R5 train from Plaça d’Espanya plus the rack railway or cable car; the “Trans Montserrat” combo ticket saves money.'],
      es: ['Montserrat', 'Un monasterio entre picos dentados a una hora de la ciudad: la Moreneta, la Escolania y funiculares hacia senderos de montaña.', 'Tren R5 desde Plaça d’Espanya más cremallera o teleférico; el billete “Trans Montserrat” sale más barato.'],
      de: ['Montserrat', 'Ein Kloster zwischen gezackten Gipfeln eine Stunde von der Stadt: die Schwarze Madonna, der Knabenchor Escolania und Standseilbahnen zu Bergpfaden.', 'Zug R5 ab Plaça d’Espanya plus Zahnradbahn oder Seilbahn; das Kombiticket „Trans Montserrat“ spart Geld.'],
      fr: ['Montserrat', 'Un monastère parmi des pics dentelés à une heure de la ville : la Vierge noire, la chorale Escolania et des funiculaires vers les sentiers.', 'Train R5 depuis Plaça d’Espanya puis crémaillère ou téléphérique ; le billet « Trans Montserrat » est plus avantageux.'],
      it: ['Montserrat', 'Un monastero tra picchi frastagliati a un’ora dalla città: la Madonna Nera, il coro Escolania e funicolari verso i sentieri.', 'Treno R5 da Plaça d’Espanya più cremagliera o funivia; il biglietto “Trans Montserrat” conviene.'],
    }),

    P('disfrutar', 'food', 41.3878, 2.1534, CITY, 4.8, 3100, ['food', 'luxury'], {
      ru: ['Disfrutar', 'Авангардный ресторан трёх выходцев из El Bulli — Орьоля Кастро, Эдуарда Шатруха и Матеу Касаньяса: длинный игровой сет с сюрпризами; три звезды MICHELIN (гид 2026).', 'Бронирование открывается заранее и разбирается быстро — следите за сайтом; ужин длится около 3–4 часов.'],
      en: ['Disfrutar', 'The avant-garde restaurant of El Bulli alumni Castro, Casañas and Xatruch: a long playful tasting menu full of surprises; three MICHELIN stars (2026 guide).', 'Bookings open well ahead and go fast — watch the website; dinner takes about 3–4 hours.'],
      es: ['Disfrutar', 'El restaurante vanguardista de Castro, Casañas y Xatruch, formados en El Bulli: un largo menú lúdico lleno de sorpresas; tres estrellas MICHELIN (guía 2026).', 'Las reservas se abren con antelación y vuelan: vigila la web; la cena dura 3–4 horas.'],
      de: ['Disfrutar', 'Das Avantgarde-Restaurant der El-Bulli-Schüler Castro, Casañas und Xatruch: ein langes, verspieltes Menü voller Überraschungen; drei MICHELIN-Sterne (Guide 2026).', 'Reservierungen öffnen früh und sind schnell weg – Website beobachten; das Dinner dauert 3–4 Stunden.'],
      fr: ['Disfrutar', 'Le restaurant avant-gardiste de Castro, Casañas et Xatruch, anciens d’El Bulli : un long menu ludique plein de surprises ; trois étoiles MICHELIN (guide 2026).', 'Les réservations ouvrent tôt et partent vite, surveillez le site ; le dîner dure 3 à 4 heures.'],
      it: ['Disfrutar', 'Il ristorante d’avanguardia di Castro, Casañas e Xatruch, ex El Bulli: un lungo menù giocoso pieno di sorprese; tre stelle MICHELIN (guida 2026).', 'Le prenotazioni aprono presto e finiscono subito: tieni d’occhio il sito; la cena dura 3–4 ore.'],
    }, { price: level(3), michelin: { award: 'star3', year: 2026 }, address: 'Carrer de Villarroel 163', menu: [
      ['Festival menu', undefined, 'большой дегустационный сет|the full tasting menu|el gran menú degustación|das große Degustationsmenü|le grand menu dégustation|il grande menù degustazione'],
      ['Panchino with caviar', undefined, 'воздушный пончик с икрой и сметаной|airy bun with caviar and sour cream|panchino de caviar y crema agria|luftiges Brötchen mit Kaviar und Sauerrahm|petit pain soufflé au caviar et crème|panino soffice con caviale e panna acida'],
    ] }),
    P('lasarte', 'food', 41.394, 2.163, CITY, 4.7, 1900, ['food', 'luxury'], {
      ru: ['Lasarte', 'Ресторан Мартина Берасатеги в отеле Monument под руководством шефа Паоло Казагранде; первые в Барселоне три звезды MICHELIN, подтверждены в гиде 2026.', 'Классика высокой кухни Страны Басков; закажите сет с винным сопровождением.'],
      en: ['Lasarte', 'Martín Berasategui’s restaurant at the Monument Hotel, run by chef Paolo Casagrande; Barcelona’s first three-MICHELIN-star restaurant, confirmed in the 2026 guide.', 'Basque-rooted haute cuisine; go for the tasting menu with wine pairing.'],
      es: ['Lasarte', 'El restaurante de Martín Berasategui en el hotel Monument, con el chef Paolo Casagrande; el primer tres estrellas MICHELIN de Barcelona, confirmado en la guía 2026.', 'Alta cocina de raíz vasca; pide el menú con maridaje.'],
      de: ['Lasarte', 'Martín Berasateguis Restaurant im Hotel Monument unter Küchenchef Paolo Casagrande; Barcelonas erstes Drei-Sterne-Haus, im Guide 2026 bestätigt.', 'Haute Cuisine mit baskischen Wurzeln; das Menü mit Weinbegleitung nehmen.'],
      fr: ['Lasarte', 'Le restaurant de Martín Berasategui à l’hôtel Monument, mené par le chef Paolo Casagrande ; premier trois étoiles MICHELIN de Barcelone, confirmé au guide 2026.', 'Haute cuisine aux racines basques ; optez pour le menu avec accords mets-vins.'],
      it: ['Lasarte', 'Il ristorante di Martín Berasategui all’hotel Monument, guidato dallo chef Paolo Casagrande; il primo tre stelle MICHELIN di Barcellona, confermato nella guida 2026.', 'Alta cucina dalle radici basche; scegli il menù con abbinamento vini.'],
    }, { price: level(3), michelin: { award: 'star3', year: 2026 }, address: 'Carrer de Mallorca 259', menu: [
      ['Tasting menu', undefined, 'дегустационный сет|tasting menu|menú degustación|Degustationsmenü|menu dégustation|menù degustazione'],
      ['Wine pairing', undefined, 'винное сопровождение|wine pairing|maridaje de vinos|Weinbegleitung|accord mets-vins|abbinamento vini'],
    ] }),
    P('bar-tomas', 'food', 41.399, 2.131, STREET, 4.4, 5600, ['food', 'streetfood'], {
      ru: ['Bar Tomàs de Sarrià', 'Простой бар в районе Саррья, которого многие барселонцы считают лучшим местом для патас бравас — с чесночным и острым соусом.', 'Закажите бравас «mixtas» с обоими соусами и пиво; в выходные бывает очередь.'],
      en: ['Bar Tomàs de Sarrià', 'A no-frills bar in Sarrià that many locals rank as the best for patatas bravas — with garlic and spicy sauces.', 'Order bravas “mixtas” with both sauces and a beer; expect a queue at weekends.'],
      es: ['Bar Tomàs de Sarrià', 'Un bar sencillo en Sarrià que muchos barceloneses consideran el mejor para patatas bravas, con alioli y salsa picante.', 'Pide bravas mixtas con las dos salsas y una caña; los fines de semana hay cola.'],
      de: ['Bar Tomàs de Sarrià', 'Eine schlichte Bar in Sarrià, die viele Einheimische für die besten Patatas Bravas halten – mit Knoblauch- und scharfer Sauce.', 'Bravas „mixtas“ mit beiden Saucen und ein Bier bestellen; am Wochenende Schlange.'],
      fr: ['Bar Tomàs de Sarrià', 'Un bar sans chichis à Sarrià que beaucoup d’habitants jugent le meilleur pour les patatas bravas, sauces à l’ail et piquante.', 'Prenez les bravas « mixtas » aux deux sauces et une bière ; file le week-end.'],
      it: ['Bar Tomàs de Sarrià', 'Un bar semplice a Sarrià che molti locali considerano il migliore per le patatas bravas, con salsa all’aglio e piccante.', 'Ordina le bravas “mixtas” con entrambe le salse e una birra; nel weekend c’è coda.'],
    }, { price: level(1), address: 'Carrer Major de Sarrià 49', menu: [
      ['Patatas bravas mixtas', undefined, 'картофель с чесночным и острым соусом|potatoes with garlic and spicy sauce|patatas con alioli y salsa brava|Kartoffeln mit Knoblauch- und scharfer Sauce|pommes de terre ail et sauce piquante|patate con salsa all’aglio e piccante'],
      ['Caña', undefined, 'небольшое разливное пиво|small draught beer|caña de cerveza|kleines Bier vom Fass|petite bière pression|birra piccola alla spina'],
    ] }),
    P('el-xampanyet', 'food', 41.3845, 2.1813, STREET, 4.5, 8700, ['food', 'nightlife'], {
      ru: ['El Xampanyet', 'Тапас-бар 1929 года в изразцах напротив музея Пикассо: домашнее игристое «xampanyet», анчоусы и консервы.', 'Стоячие места у стойки — так и задумано; приходите к открытию.'],
      en: ['El Xampanyet', 'A tiled 1929 tapas bar opposite the Picasso Museum: house sparkling “xampanyet”, anchovies and tinned seafood.', 'It’s mostly standing at the bar — that’s the point; come at opening.'],
      es: ['El Xampanyet', 'Un bar de tapas de 1929 con azulejos frente al Museo Picasso: “xampanyet” de la casa, anchoas y conservas.', 'Se está de pie en la barra, como debe ser; llega a la apertura.'],
      de: ['El Xampanyet', 'Eine gekachelte Tapasbar von 1929 gegenüber dem Picasso-Museum: hauseigener Schaumwein „Xampanyet“, Sardellen und Konserven.', 'Meist steht man am Tresen – so gehört es sich; zur Öffnung kommen.'],
      fr: ['El Xampanyet', 'Un bar à tapas carrelé de 1929 face au musée Picasso : pétillant maison « xampanyet », anchois et conserves.', 'On y reste debout au comptoir, c’est le principe ; venez à l’ouverture.'],
      it: ['El Xampanyet', 'Un bar di tapas piastrellato del 1929 di fronte al Museo Picasso: spumante della casa “xampanyet”, acciughe e conserve.', 'Si sta in piedi al bancone, è il bello; arriva all’apertura.'],
    }, { price: level(2), address: 'Carrer de Montcada 22', menu: [
      ['Xampanyet', undefined, 'домашнее игристое вино|house sparkling wine|espumoso de la casa|hauseigener Schaumwein|pétillant maison|spumante della casa'],
      ['Anxoves', undefined, 'анчоусы в масле|anchovies in oil|anchoas en aceite|Sardellen in Öl|anchois à l’huile|acciughe sott’olio'],
    ] }),
    P('quimet-quimet', 'food', 41.3742, 2.1641, STREET, 4.5, 8100, ['food'], {
      ru: ['Quimet & Quimet', 'Крошечный семейный бар в Побле-Сек со стенами из бутылок: монтадитос — бутерброды с консервированными морепродуктами, сыром и соусами.', 'Работает днём и ранним вечером; закажите монтадито с лососем, йогуртом и трюфельным мёдом.'],
      en: ['Quimet & Quimet', 'A tiny family bar in Poble-sec with walls of bottles: montaditos — small toasts with tinned seafood, cheese and sauces.', 'Open lunchtime and early evening; order the salmon, yoghurt and truffle honey montadito.'],
      es: ['Quimet & Quimet', 'Un diminuto bar familiar en el Poble-sec con paredes de botellas: montaditos de conservas, queso y salsas.', 'Abre a mediodía y primera hora de la tarde; pide el de salmón, yogur y miel trufada.'],
      de: ['Quimet & Quimet', 'Eine winzige Familienbar in Poble-sec mit Flaschenwänden: Montaditos – kleine Brote mit Konservenmeeresfrüchten, Käse und Saucen.', 'Mittags und am frühen Abend geöffnet; das Montadito mit Lachs, Joghurt und Trüffelhonig bestellen.'],
      fr: ['Quimet & Quimet', 'Un minuscule bar familial du Poble-sec aux murs de bouteilles : montaditos, tartines de conserves de la mer, fromage et sauces.', 'Ouvert le midi et en début de soirée ; prenez le montadito saumon, yaourt et miel truffé.'],
      it: ['Quimet & Quimet', 'Un minuscolo bar di famiglia a Poble-sec con pareti di bottiglie: montaditos, crostini con conserve di mare, formaggi e salse.', 'Aperto a pranzo e nel primo pomeriggio; ordina il montadito salmone, yogurt e miele al tartufo.'],
    }, { price: level(2), address: 'Carrer del Poeta Cabanyes 25', menu: [
      ['Montadito de salmón, yogur y miel trufada', undefined, 'тост с лососем, йогуртом и трюфельным мёдом|toast with salmon, yoghurt and truffle honey|montadito de salmón, yogur y miel trufada|Brot mit Lachs, Joghurt und Trüffelhonig|tartine saumon, yaourt et miel truffé|crostino salmone, yogurt e miele al tartufo'],
      ['Vermut', undefined, 'вермут на розлив|vermouth on tap|vermut de grifo|Wermut vom Fass|vermouth à la pression|vermut alla spina'],
    ] }),
    P('la-cova-fumada', 'food', 41.379, 2.1897, STREET, 4.5, 6200, ['food'], {
      ru: ['La Cova Fumada', 'Семейная таверна в Барселонете без вывески, где, по местной легенде, придумали «бомбу» — шар из картофеля и мяса с острым и чесночным соусами.', 'Работает днём; приходите к открытию и закажите бомбу, сардины и артишоки на гриле.'],
      en: ['La Cova Fumada', 'A family tavern in Barceloneta with no sign, where local legend says the “bomba” was invented — a potato-and-meat ball with spicy and garlic sauces.', 'Daytime only; come at opening for a bomba, sardines and grilled artichokes.'],
      es: ['La Cova Fumada', 'Una taberna familiar sin cartel en la Barceloneta donde, según la leyenda, nació la bomba, de patata y carne con salsa picante y alioli.', 'Solo de día; llega a la apertura y pide bomba, sardinas y alcachofas a la plancha.'],
      de: ['La Cova Fumada', 'Eine Familientaverne ohne Schild in Barceloneta, wo der Legende nach die „Bomba“ erfunden wurde – eine Kartoffel-Fleisch-Kugel mit scharfer und Knoblauchsauce.', 'Nur tagsüber; zur Öffnung kommen und Bomba, Sardinen und gegrillte Artischocken bestellen.'],
      fr: ['La Cova Fumada', 'Une taverne familiale sans enseigne à la Barceloneta où, dit-on, fut inventée la « bomba », boule pomme de terre-viande aux sauces piquante et à l’ail.', 'En journée seulement ; venez à l’ouverture pour bomba, sardines et artichauts grillés.'],
      it: ['La Cova Fumada', 'Una taverna di famiglia senza insegna alla Barceloneta dove, secondo la leggenda, è nata la “bomba”, palla di patate e carne con salse piccante e all’aglio.', 'Solo di giorno; arriva all’apertura e ordina bomba, sardine e carciofi alla piastra.'],
    }, { price: level(1), address: 'Carrer del Baluard 56', menu: [
      ['Bomba', undefined, 'картофельный шар с мясом и двумя соусами|potato-and-meat ball with two sauces|bomba de patata y carne con dos salsas|Kartoffel-Fleisch-Kugel mit zwei Saucen|boule de pommes de terre et viande, deux sauces|bomba di patate e carne con due salse'],
      ['Sardinas a la plancha', undefined, 'сардины на гриле|grilled sardines|sardinas a la plancha|gegrillte Sardinen|sardines grillées|sardine alla piastra'],
    ] }),
    P('cerveceria-catalana', 'food', 41.392, 2.1612, STREET, 4.5, 21400, ['food'], {
      ru: ['Cervecería Catalana', 'Шумный тапас-бар в Эшампле с длинной стойкой: монтадитос, крокеты, кальмары и хамон; один из самых популярных у местных и туристов.', 'Столики бронируются, у стойки — живая очередь; обед — лучшее время.'],
      en: ['Cervecería Catalana', 'A buzzing Eixample tapas bar with a long counter: montaditos, croquetas, squid and ham; hugely popular with locals and visitors.', 'Tables are bookable, the bar is first come first served; lunch is the best time.'],
      es: ['Cervecería Catalana', 'Un animado bar de tapas del Eixample con larga barra: montaditos, croquetas, calamares y jamón; muy popular entre locales y visitantes.', 'Las mesas se reservan, la barra va por orden de llegada; el almuerzo es el mejor momento.'],
      de: ['Cervecería Catalana', 'Eine trubelige Tapasbar im Eixample mit langem Tresen: Montaditos, Croquetas, Tintenfisch und Schinken; bei Einheimischen und Gästen sehr beliebt.', 'Tische sind reservierbar, der Tresen nicht; mittags ist die beste Zeit.'],
      fr: ['Cervecería Catalana', 'Un bar à tapas animé de l’Eixample au long comptoir : montaditos, croquetas, calamars et jambon ; très prisé des habitants et visiteurs.', 'Les tables se réservent, le comptoir non ; le midi est idéal.'],
      it: ['Cervecería Catalana', 'Un vivace bar di tapas dell’Eixample con un lungo bancone: montaditos, crocchette, calamari e prosciutto; amatissimo da locali e turisti.', 'I tavoli si prenotano, il bancone no; il pranzo è il momento migliore.'],
    }, { price: level(2), address: 'Carrer de Mallorca 236', menu: [
      ['Croquetas de jamón', undefined, 'крокеты с хамоном|ham croquettes|croquetas de jamón|Schinkenkroketten|croquettes au jambon|crocchette di prosciutto'],
      ['Calamares a la andaluza', undefined, 'жареные кальмары|fried squid|calamares fritos|frittierter Tintenfisch|calamars frits|calamari fritti'],
      ['Pan con tomate', undefined, 'хлеб с томатом и оливковым маслом|bread with tomato and olive oil|pan con tomate y aceite|Brot mit Tomate und Olivenöl|pain à la tomate et huile d’olive|pane con pomodoro e olio'],
    ] }),
    P('can-sole', 'food', 41.3794, 2.1902, STREET, 4.4, 4300, ['food', 'history'], {
      ru: ['Can Solé', 'Ресторан в Барселонете с 1903 года: паэлья, чёрный рис с чернилами каракатицы и рыбные блюда в старинном зале с фото знаменитостей.', 'Рис готовят на двоих и дольше 20 минут — закажите сразу.'],
      en: ['Can Solé', 'A Barceloneta restaurant since 1903: paella, black rice with cuttlefish ink and seafood in an old dining room lined with celebrity photos.', 'Rice dishes serve two and take over 20 minutes — order right away.'],
      es: ['Can Solé', 'Restaurante de la Barceloneta desde 1903: paella, arroz negro y pescado en un comedor antiguo con fotos de famosos.', 'Los arroces son para dos y tardan más de 20 minutos: pídelos al llegar.'],
      de: ['Can Solé', 'Ein Restaurant in Barceloneta seit 1903: Paella, schwarzer Reis mit Sepiatinte und Fisch in einem alten Saal voller Promifotos.', 'Reisgerichte sind für zwei und brauchen über 20 Minuten – gleich bestellen.'],
      fr: ['Can Solé', 'Un restaurant de la Barceloneta depuis 1903 : paella, riz noir à l’encre de seiche et poissons dans une salle ancienne aux photos de célébrités.', 'Les riz sont pour deux et demandent plus de 20 minutes : commandez tout de suite.'],
      it: ['Can Solé', 'Un ristorante della Barceloneta dal 1903: paella, riso nero al nero di seppia e pesce in una sala antica piena di foto di celebrità.', 'I risi sono per due e richiedono più di 20 minuti: ordinali subito.'],
    }, { price: level(2), address: 'Carrer de Sant Carles 4', menu: [
      ['Paella de marisco', undefined, 'паэлья с морепродуктами (на двоих)|seafood paella (for two)|paella de marisco (para dos)|Meeresfrüchte-Paella (für zwei)|paella aux fruits de mer (pour deux)|paella di mare (per due)'],
      ['Arròs negre', undefined, 'чёрный рис с чернилами каракатицы|black rice with cuttlefish ink|arroz negro con tinta de sepia|schwarzer Reis mit Sepiatinte|riz noir à l’encre de seiche|riso nero al nero di seppia'],
    ] }),
    P('7-portes', 'food', 41.3825, 2.1832, STREET, 4.3, 14200, ['food', 'history'], {
      ru: ['7 Portes', 'Ресторан с 1836 года у старого порта с семью дверями, бронзовыми табличками знаменитых гостей и рисовыми блюдами — от паэльи до «arròs parellada».', 'Попробуйте «arròs parellada» — паэлью, где всё уже очищено от костей и панцирей.'],
      en: ['7 Portes', 'A restaurant since 1836 by the old port with seven doors, brass plaques of famous guests and rice dishes — from paella to “arròs parellada”.', 'Try the arròs parellada — a paella where everything is already shelled and boned.'],
      es: ['7 Portes', 'Restaurante desde 1836 junto al puerto viejo, con siete puertas, placas de clientes famosos y arroces, de la paella al arròs parellada.', 'Prueba el arròs parellada, una paella ya sin cáscaras ni espinas.'],
      de: ['7 Portes', 'Ein Restaurant seit 1836 am alten Hafen mit sieben Türen, Messingschildern berühmter Gäste und Reisgerichten – von Paella bis „Arròs Parellada“.', 'Arròs Parellada probieren – eine Paella, bei der schon alles ausgelöst ist.'],
      fr: ['7 Portes', 'Un restaurant depuis 1836 près du vieux port, sept portes, plaques de cuivre des hôtes célèbres et riz, de la paella à l’« arròs parellada ».', 'Goûtez l’arròs parellada, une paella déjà décortiquée et désossée.'],
      it: ['7 Portes', 'Un ristorante dal 1836 vicino al porto vecchio con sette porte, targhe in ottone degli ospiti famosi e risi, dalla paella all’“arròs parellada”.', 'Prova l’arròs parellada, una paella già sgusciata e disossata.'],
    }, { price: level(2), address: 'Passeig d’Isabel II 14', menu: [
      ['Arròs parellada', undefined, 'паэлья, где всё очищено от костей и панцирей|paella with everything shelled and boned|paella sin cáscaras ni huesos|Paella ganz ohne Schalen und Knochen|paella décortiquée et désossée|paella già sgusciata e disossata'],
      ['Crema catalana', undefined, 'каталонский крем с карамельной корочкой|Catalan custard with burnt sugar|crema catalana|katalanische Creme mit Karamellkruste|crème catalane|crema catalana'],
    ] }),
    P('bar-del-pla', 'food', 41.3846, 2.1797, STREET, 4.5, 5200, ['food', 'nightlife'], {
      ru: ['Bar del Pla', 'Современный тапас-бар в Борне с каталонской классикой и сезонными блюдами, натуральными винами и вермутом.', 'Обязательно — крокеты и «бикини» с трюфелем; бронируйте на вечер.'],
      en: ['Bar del Pla', 'A modern El Born tapas bar with Catalan classics, seasonal plates, natural wines and vermouth.', 'Don’t miss the croquetas and the truffle “bikini”; book for the evening.'],
      es: ['Bar del Pla', 'Un bar de tapas moderno en el Born con clásicos catalanes, platos de temporada, vinos naturales y vermut.', 'No te pierdas las croquetas y el bikini trufado; reserva por la noche.'],
      de: ['Bar del Pla', 'Eine moderne Tapasbar in El Born mit katalanischen Klassikern, saisonalen Tellern, Naturweinen und Wermut.', 'Croquetas und das Trüffel-„Bikini“ nicht verpassen; abends reservieren.'],
      fr: ['Bar del Pla', 'Un bar à tapas moderne du Born : classiques catalans, assiettes de saison, vins nature et vermouth.', 'Ne manquez pas les croquetas et le « bikini » à la truffe ; réservez le soir.'],
      it: ['Bar del Pla', 'Un moderno bar di tapas nel Born con classici catalani, piatti di stagione, vini naturali e vermut.', 'Da non perdere crocchette e “bikini” al tartufo; prenota la sera.'],
    }, { price: level(2), address: 'Carrer de Montcada 2', menu: [
      ['Bikini de trufa', undefined, 'тёплый сэндвич с ветчиной, сыром и трюфелем|toasted ham-and-cheese sandwich with truffle|bikini de jamón, queso y trufa|getoastetes Schinken-Käse-Sandwich mit Trüffel|croque jambon-fromage à la truffe|toast prosciutto e formaggio al tartufo'],
      ['Croquetas', undefined, 'крокеты дня|croquettes of the day|croquetas del día|Kroketten des Tages|croquettes du jour|crocchette del giorno'],
    ] }),
  ],
  routes: [
    D(['=sagrada', 'sant-pau', 'casa-mila', 'cerveceria-catalana', '=barcelona-casa-batllo', '=parkguell', '=barcelona-bunkers-del-carmel', 'lasarte'],
      'Гауди: Саграда, Педрера и парк Гуэль|Gaudí: Sagrada Família, La Pedrera and Park Güell|Gaudí: Sagrada Família, La Pedrera y el Park Güell|Gaudí: Sagrada Família, La Pedrera und Park Güell|Gaudí : Sagrada Família, la Pedrera et le parc Güell|Gaudí: Sagrada Família, La Pedrera e Park Güell'),
    D(['=barcelona-la-boqueria', 'cathedral', '=barcelona-pont-del-bisbe', 'palau-musica', 'picasso-museum', 'el-xampanyet', 'santa-maria-del-mar', 'barceloneta-beach', 'can-sole'],
      'Готический квартал, Борн и пляж|Gothic Quarter, El Born and the beach|Barrio Gótico, el Born y la playa|Gotisches Viertel, El Born und der Strand|Quartier gothique, le Born et la plage|Quartiere Gotico, il Born e la spiaggia'),
    D(['mnac', '=barcelona-mossen-costa-llobera', 'quimet-quimet', 'tibidabo', 'bar-tomas', 'disfrutar'],
      'Монжуик, Тибидабо и ужин в Disfrutar|Montjuïc, Tibidabo and dinner at Disfrutar|Montjuïc, el Tibidabo y cena en Disfrutar|Montjuïc, Tibidabo und Dinner im Disfrutar|Montjuïc, le Tibidabo et dîner au Disfrutar|Montjuïc, Tibidabo e cena da Disfrutar'),
  ],
};

export default pack;
