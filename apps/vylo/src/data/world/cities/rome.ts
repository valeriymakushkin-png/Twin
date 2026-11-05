import type { CityPack } from '../types';
import { free, level, makeDay, makePlace } from './_kit.ts';

const P = makePlace('rome');
const D = makeDay('rome');
const CITY = 'TOLaK1QxOWM';
const FOUNTAIN = 'R71bfM2BZiI';
const RUINS = 'lUO-BjCiZEA';
const STREET = 'TyIOmiwFEts';
const FOOD = 'VhlLC2eNSuo';

const pack: CityPack = {
  country: 'IT',
  city: 'rome',
  places: [
    P('pantheon', 'attraction', 41.8986, 12.4769, CITY, 4.8, 152000, ['history', 'architecture'], {
      ru: ['Пантеон', 'Храм всех богов II века с самым большим в мире неармированным бетонным куполом и 9-метровым окулусом; здесь похоронен Рафаэль.', 'Вход платный с 2023 года и по времени — берите билет онлайн; в дождь посмотрите, как вода падает через окулус.'],
      en: ['Pantheon', 'A 2nd-century temple to all the gods with the world’s largest unreinforced concrete dome and a 9 m oculus; Raphael is buried here.', 'Entry has been ticketed since 2023 — book a time slot online; in rain, watch the water fall through the oculus.'],
      es: ['Panteón', 'Un templo del siglo II a todos los dioses con la mayor cúpula de hormigón sin armar del mundo y un óculo de 9 m; aquí está enterrado Rafael.', 'Desde 2023 la entrada es de pago con hora: compra online; si llueve, mira caer el agua por el óculo.'],
      de: ['Pantheon', 'Ein Tempel aller Götter aus dem 2. Jh. mit der größten unbewehrten Betonkuppel der Welt und einem 9-m-Opaion; hier ist Raffael begraben.', 'Seit 2023 kostet der Eintritt mit Zeitfenster – online buchen; bei Regen fällt das Wasser durchs Opaion.'],
      fr: ['Panthéon', 'Un temple du IIe siècle à tous les dieux, avec la plus grande coupole en béton non armé du monde et un oculus de 9 m ; Raphaël y est inhumé.', 'Entrée payante avec créneau depuis 2023, réservez en ligne ; sous la pluie, regardez l’eau tomber par l’oculus.'],
      it: ['Pantheon', 'Un tempio del II secolo a tutti gli dèi con la più grande cupola in calcestruzzo non armato al mondo e un oculo di 9 m; qui è sepolto Raffaello.', 'Dal 2023 l’ingresso è a pagamento con orario: compra online; se piove guarda l’acqua cadere dall’oculo.'],
    }, { hours: '09:00–19:00' }),
    P('roman-forum', 'attraction', 41.8925, 12.4853, RUINS, 4.7, 98000, ['history', 'unesco'], {
      ru: ['Римский форум и Палатин', 'Центр Древнего Рима: храмы, триумфальные арки, Курия и Палатинский холм с дворцами императоров и видом на Форум.', 'Билет общий с Колизеем на 24 часа; поднимитесь на террасы Палатина ради вида сверху.'],
      en: ['Roman Forum and Palatine', 'The heart of ancient Rome: temples, triumphal arches, the Curia and the Palatine Hill with imperial palaces and a view over the Forum.', 'The ticket is shared with the Colosseum for 24 hours; climb to the Palatine terraces for the view.'],
      es: ['Foro Romano y Palatino', 'El corazón de la Roma antigua: templos, arcos de triunfo, la Curia y el Palatino con palacios imperiales y vista al Foro.', 'La entrada es conjunta con el Coliseo durante 24 h; sube a las terrazas del Palatino por la vista.'],
      de: ['Forum Romanum und Palatin', 'Das Herz des antiken Rom: Tempel, Triumphbögen, die Kurie und der Palatin mit Kaiserpalästen und Blick aufs Forum.', 'Das Ticket gilt 24 Stunden zusammen mit dem Kolosseum; auf die Palatin-Terrassen steigen.'],
      fr: ['Forum romain et Palatin', 'Le cœur de la Rome antique : temples, arcs de triomphe, la Curie et le Palatin avec palais impériaux et vue sur le Forum.', 'Billet commun avec le Colisée valable 24 h ; montez aux terrasses du Palatin pour la vue.'],
      it: ['Foro Romano e Palatino', 'Il cuore della Roma antica: templi, archi trionfali, la Curia e il Palatino con i palazzi imperiali e la vista sul Foro.', 'Biglietto unico con il Colosseo valido 24 ore; sali alle terrazze del Palatino per la vista.'],
    }, { hours: '09:00–19:00' }),
    P('vatican-museums', 'attraction', 41.9065, 12.4536, CITY, 4.6, 127000, ['art', 'museums', 'history'], {
      ru: ['Музеи Ватикана и Сикстинская капелла', 'Одно из крупнейших собраний мира: станцы Рафаэля, Галерея карт и в конце — Сикстинская капелла с фресками Микеланджело.', 'Бронируйте на официальном сайте на первое время утром; в капелле нельзя фотографировать, плечи и колени закрыты.'],
      en: ['Vatican Museums and Sistine Chapel', 'One of the world’s greatest collections: Raphael’s Rooms, the Gallery of Maps and, at the end, the Sistine Chapel with Michelangelo’s frescoes.', 'Book the earliest slot on the official site; no photos in the chapel, shoulders and knees covered.'],
      es: ['Museos Vaticanos y Capilla Sixtina', 'Una de las mayores colecciones del mundo: las Estancias de Rafael, la Galería de los Mapas y, al final, la Sixtina de Miguel Ángel.', 'Reserva el primer turno en la web oficial; sin fotos en la capilla, hombros y rodillas cubiertos.'],
      de: ['Vatikanische Museen und Sixtinische Kapelle', 'Eine der größten Sammlungen der Welt: Raffaels Stanzen, die Galerie der Landkarten und zum Schluss die Sixtinische Kapelle mit Michelangelos Fresken.', 'Den frühesten Termin auf der offiziellen Website buchen; in der Kapelle keine Fotos, Schultern und Knie bedeckt.'],
      fr: ['Musées du Vatican et chapelle Sixtine', 'L’une des plus grandes collections au monde : chambres de Raphaël, galerie des Cartes et, pour finir, la Sixtine de Michel-Ange.', 'Réservez le premier créneau sur le site officiel ; photos interdites dans la chapelle, épaules et genoux couverts.'],
      it: ['Musei Vaticani e Cappella Sistina', 'Una delle collezioni più grandi del mondo: le Stanze di Raffaello, la Galleria delle Carte geografiche e infine la Sistina di Michelangelo.', 'Prenota il primo turno sul sito ufficiale; niente foto in cappella, spalle e ginocchia coperte.'],
    }, { hours: '08:00–19:00' }),
    P('st-peters-basilica', 'attraction', 41.9022, 12.4539, CITY, 4.8, 141000, ['architecture', 'history', 'views'], {
      ru: ['Собор Святого Петра', 'Главный храм католического мира с «Пьетой» Микеланджело и куполом, на который можно подняться — 551 ступень или лифт плюс 320.', 'Вход в собор бесплатный через досмотр; купол открывается рано утром — поднимитесь до жары.'],
      en: ['St Peter’s Basilica', 'The Catholic world’s main church with Michelangelo’s Pietà and a dome you can climb — 551 steps, or a lift plus 320.', 'Entry is free after security; the dome opens early — climb before the heat.'],
      es: ['Basílica de San Pedro', 'La iglesia principal del mundo católico con la Piedad de Miguel Ángel y una cúpula a la que se sube: 551 escalones, o ascensor más 320.', 'La entrada es gratuita tras el control; la cúpula abre temprano, sube antes del calor.'],
      de: ['Petersdom', 'Die Hauptkirche der katholischen Welt mit Michelangelos Pietà und einer Kuppel zum Besteigen – 551 Stufen oder Lift plus 320.', 'Eintritt frei nach der Kontrolle; die Kuppel öffnet früh – vor der Hitze hinauf.'],
      fr: ['Basilique Saint-Pierre', 'La grande église du monde catholique, avec la Pietà de Michel-Ange et une coupole accessible : 551 marches, ou ascenseur puis 320.', 'Entrée gratuite après le contrôle ; la coupole ouvre tôt, montez avant la chaleur.'],
      it: ['Basilica di San Pietro', 'La chiesa principale del mondo cattolico con la Pietà di Michelangelo e una cupola su cui salire: 551 gradini, o ascensore più 320.', 'Ingresso gratuito dopo i controlli; la cupola apre presto, sali prima del caldo.'],
    }, { spot: 'insta', price: free, hours: '07:00–19:00' }),
    P('castel-sant-angelo', 'attraction', 41.9031, 12.4663, CITY, 4.7, 69000, ['history', 'views'], {
      ru: ['Замок Святого Ангела', 'Мавзолей императора Адриана, ставший папской крепостью; с верхней террасы — один из лучших видов на собор Святого Петра и Тибр.', 'Пройдите к замку по мосту Сант-Анджело с ангелами Бернини.'],
      en: ['Castel Sant’Angelo', 'Emperor Hadrian’s mausoleum turned papal fortress; its top terrace offers one of the best views of St Peter’s and the Tiber.', 'Approach over Ponte Sant’Angelo, lined with Bernini’s angels.'],
      es: ['Castillo de Sant’Angelo', 'El mausoleo del emperador Adriano convertido en fortaleza papal; su terraza ofrece una de las mejores vistas de San Pedro y el Tíber.', 'Llega por el Ponte Sant’Angelo con los ángeles de Bernini.'],
      de: ['Engelsburg', 'Das Mausoleum Kaiser Hadrians, später päpstliche Festung; von der Dachterrasse einer der schönsten Blicke auf den Petersdom und den Tiber.', 'Über die Engelsbrücke mit Berninis Engeln hingehen.'],
      fr: ['Château Saint-Ange', 'Le mausolée de l’empereur Hadrien devenu forteresse pontificale ; sa terrasse offre l’une des plus belles vues sur Saint-Pierre et le Tibre.', 'Arrivez par le pont Saint-Ange et ses anges du Bernin.'],
      it: ['Castel Sant’Angelo', 'Il mausoleo dell’imperatore Adriano diventato fortezza papale; dalla terrazza una delle viste migliori su San Pietro e il Tevere.', 'Arriva da Ponte Sant’Angelo con gli angeli del Bernini.'],
    }, { hours: '09:00–19:30' }),
    P('piazza-navona', 'attraction', 41.8992, 12.4731, FOUNTAIN, 4.7, 108000, ['architecture', 'city', 'photo'], {
      ru: ['Пьяцца Навона', 'Площадь на месте стадиона Домициана с фонтаном Четырёх рек Бернини, уличными художниками и барочной церковью Борромини.', 'Кафе на самой площади дорогие — выпейте кофе в соседних переулках.'],
      en: ['Piazza Navona', 'A square on the site of Domitian’s stadium with Bernini’s Fountain of the Four Rivers, street artists and Borromini’s Baroque church.', 'Cafés on the square are pricey — have coffee in the side streets.'],
      es: ['Piazza Navona', 'Una plaza sobre el estadio de Domiciano con la Fuente de los Cuatro Ríos de Bernini, artistas callejeros y la iglesia barroca de Borromini.', 'Los cafés de la plaza son caros: toma el café en las calles laterales.'],
      de: ['Piazza Navona', 'Ein Platz auf dem Stadion Domitians mit Berninis Vierströmebrunnen, Straßenkünstlern und Borrominis Barockkirche.', 'Die Cafés am Platz sind teuer – Kaffee lieber in den Seitengassen.'],
      fr: ['Piazza Navona', 'Une place sur l’ancien stade de Domitien, avec la fontaine des Quatre-Fleuves du Bernin, des artistes de rue et l’église baroque de Borromini.', 'Les cafés de la place sont chers : buvez votre café dans les ruelles.'],
      it: ['Piazza Navona', 'Una piazza sullo stadio di Domiziano con la Fontana dei Quattro Fiumi del Bernini, artisti di strada e la chiesa barocca del Borromini.', 'I caffè sulla piazza sono cari: prendi il caffè nelle vie laterali.'],
    }, { spot: 'insta', price: free, hours: 'always' }),
    P('borghese-gallery', 'attraction', 41.9142, 12.4921, CITY, 4.8, 33700, ['art', 'museums', 'gardens'], {
      ru: ['Галерея Боргезе', 'Вилла кардинала Боргезе со скульптурами Бернини («Аполлон и Дафна», «Похищение Прозерпины»), Караваджо и Тицианом.', 'Вход строго по брони на 2-часовой слот; после — прогуляйтесь по парку виллы к террасе Пинчо.'],
      en: ['Borghese Gallery', 'Cardinal Borghese’s villa with Bernini’s sculptures (Apollo and Daphne, the Rape of Proserpina), Caravaggio and Titian.', 'Entry only with a booked two-hour slot; afterwards walk through the villa park to the Pincio terrace.'],
      es: ['Galería Borghese', 'La villa del cardenal Borghese con esculturas de Bernini (Apolo y Dafne, el Rapto de Proserpina), Caravaggio y Tiziano.', 'Solo con reserva de turno de 2 horas; después pasea por el parque hasta el Pincio.'],
      de: ['Galleria Borghese', 'Die Villa von Kardinal Borghese mit Skulpturen Berninis (Apoll und Daphne, Raub der Proserpina), Caravaggio und Tizian.', 'Eintritt nur mit gebuchtem 2-Stunden-Slot; danach durch den Park zur Pincio-Terrasse.'],
      fr: ['Galerie Borghèse', 'La villa du cardinal Borghèse avec les sculptures du Bernin (Apollon et Daphné, l’Enlèvement de Proserpine), Caravage et Titien.', 'Entrée uniquement sur réservation d’un créneau de 2 h ; ensuite, traversez le parc jusqu’au Pincio.'],
      it: ['Galleria Borghese', 'La villa del cardinale Borghese con le sculture del Bernini (Apollo e Dafne, il Ratto di Proserpina), Caravaggio e Tiziano.', 'Ingresso solo con prenotazione di 2 ore; dopo passeggia nel parco fino al Pincio.'],
    }, { hours: '09:00–19:00', address: 'Piazzale Scipione Borghese 5' }),
    P('trastevere', 'attraction', 41.8897, 12.4692, STREET, 4.7, 21800, ['city', 'oldtown', 'nightlife'], {
      ru: ['Трастевере', 'Район за Тибром с увитыми плющом домами, мощёными переулками и золотыми мозаиками базилики Санта-Мария-ин-Трастевере.', 'Самая атмосфера — вечером, когда открываются траттории и бары.'],
      en: ['Trastevere', 'The district across the Tiber with ivy-covered houses, cobbled lanes and the golden mosaics of Santa Maria in Trastevere.', 'It’s at its best in the evening, when the trattorias and bars open.'],
      es: ['Trastevere', 'El barrio al otro lado del Tíber con casas cubiertas de hiedra, callejones empedrados y los mosaicos dorados de Santa Maria in Trastevere.', 'Lo mejor es por la tarde-noche, cuando abren trattorias y bares.'],
      de: ['Trastevere', 'Das Viertel jenseits des Tibers mit efeubewachsenen Häusern, Kopfsteingassen und den goldenen Mosaiken von Santa Maria in Trastevere.', 'Am schönsten abends, wenn Trattorien und Bars öffnen.'],
      fr: ['Trastevere', 'Le quartier au-delà du Tibre, maisons couvertes de lierre, ruelles pavées et mosaïques dorées de Santa Maria in Trastevere.', 'Il prend vie le soir, à l’ouverture des trattorias et des bars.'],
      it: ['Trastevere', 'Il rione oltre il Tevere con case coperte d’edera, vicoli acciottolati e i mosaici dorati di Santa Maria in Trastevere.', 'Dà il meglio la sera, quando aprono trattorie e bar.'],
    }, { spot: 'insta', price: free }),
    P('capitoline-museums', 'attraction', 41.8929, 12.4825, RUINS, 4.7, 26800, ['museums', 'history', 'art'], {
      ru: ['Капитолийские музеи', 'Старейшие публичные музеи мира на площади Микеланджело: Капитолийская волчица, конная статуя Марка Аврелия и терраса с видом на Форум.', 'Не пропустите переход Табуларий — из его окон виден весь Форум.'],
      en: ['Capitoline Museums', 'The world’s oldest public museums on Michelangelo’s piazza: the Capitoline Wolf, the equestrian Marcus Aurelius and a terrace over the Forum.', 'Don’t miss the Tabularium passage — its windows frame the whole Forum.'],
      es: ['Museos Capitolinos', 'Los museos públicos más antiguos del mundo en la plaza de Miguel Ángel: la Loba Capitolina, el Marco Aurelio ecuestre y una terraza sobre el Foro.', 'No te pierdas el paso del Tabularium: sus ventanas enmarcan el Foro.'],
      de: ['Kapitolinische Museen', 'Die ältesten öffentlichen Museen der Welt an Michelangelos Platz: Kapitolinische Wölfin, Reiterstandbild Mark Aurels und eine Terrasse über dem Forum.', 'Den Tabularium-Gang nicht verpassen – seine Fenster rahmen das ganze Forum.'],
      fr: ['Musées du Capitole', 'Les plus anciens musées publics du monde sur la place de Michel-Ange : la Louve, le Marc Aurèle équestre et une terrasse sur le Forum.', 'Ne manquez pas le passage du Tabularium : ses fenêtres cadrent tout le Forum.'],
      it: ['Musei Capitolini', 'I musei pubblici più antichi del mondo sulla piazza di Michelangelo: la Lupa, il Marco Aurelio equestre e una terrazza sul Foro.', 'Non perdere la galleria del Tabularium: dalle finestre si vede tutto il Foro.'],
    }, { hours: '09:30–19:30', address: 'Piazza del Campidoglio' }),
    P('appian-way', 'nature', 41.8562, 12.5148, RUINS, 4.7, 15400, ['history', 'nature', 'hiking'], {
      ru: ['Аппиева дорога и катакомбы', 'Древняя римская дорога с оригинальной брусчаткой, гробницами и пиниями; вдоль неё — катакомбы Святого Каллиста и Святого Себастьяна.', 'Лучше взять велосипед напрокат у ворот парка; по воскресеньям дорога закрыта для машин.'],
      en: ['Appian Way and Catacombs', 'The ancient Roman road with original paving stones, tombs and umbrella pines; along it are the catacombs of St Callixtus and St Sebastian.', 'Rent a bike at the park gate; on Sundays the road is closed to cars.'],
      es: ['Vía Apia y catacumbas', 'La antigua calzada romana con su empedrado original, tumbas y pinos; a lo largo están las catacumbas de San Calixto y San Sebastián.', 'Alquila bici en la entrada del parque; los domingos la vía se cierra al tráfico.'],
      de: ['Via Appia und Katakomben', 'Die antike Römerstraße mit Originalpflaster, Gräbern und Pinien; an ihr liegen die Katakomben von San Callisto und San Sebastiano.', 'Am Parkeingang ein Fahrrad leihen; sonntags ist die Straße autofrei.'],
      fr: ['Voie Appienne et catacombes', 'L’antique voie romaine aux pavés d’origine, tombeaux et pins parasols ; elle longe les catacombes de Saint-Calixte et Saint-Sébastien.', 'Louez un vélo à l’entrée du parc ; le dimanche, la voie est fermée aux voitures.'],
      it: ['Via Appia e catacombe', 'L’antica strada romana con il basolato originale, tombe e pini; lungo il percorso le catacombe di San Callisto e San Sebastiano.', 'Noleggia una bici all’ingresso del parco; la domenica la via è chiusa alle auto.'],
    }, { spot: 'hidden', price: free }),

    P('la-pergola', 'food', 41.9183, 12.4486, FOOD, 4.7, 2100, ['food', 'luxury', 'views', 'romance'], {
      ru: ['La Pergola', 'Ресторан Хайнца Бека на крыше отеля Rome Cavalieri с панорамой Рима; единственные в городе три звезды MICHELIN (гид 2026).', 'Бронируйте за месяц, дресс-код — пиджак; попробуйте фирменные фаготтелли «Карбонара».'],
      en: ['La Pergola', 'Heinz Beck’s restaurant on the Rome Cavalieri rooftop with a panorama of Rome; the city’s only three MICHELIN stars (2026 guide).', 'Book a month ahead, jackets required; try the signature fagottelli “Carbonara”.'],
      es: ['La Pergola', 'El restaurante de Heinz Beck en la azotea del Rome Cavalieri con panorámica de Roma; las únicas tres estrellas MICHELIN de la ciudad (guía 2026).', 'Reserva con un mes, se exige chaqueta; prueba los fagottelli “Carbonara”.'],
      de: ['La Pergola', 'Heinz Becks Restaurant auf dem Dach des Rome Cavalieri mit Rom-Panorama; die einzigen drei MICHELIN-Sterne der Stadt (Guide 2026).', 'Einen Monat vorher buchen, Sakkopflicht; die Fagottelli „Carbonara“ probieren.'],
      fr: ['La Pergola', 'Le restaurant de Heinz Beck sur le toit du Rome Cavalieri, panorama sur Rome ; les seules trois étoiles MICHELIN de la ville (guide 2026).', 'Réservez un mois avant, veste exigée ; goûtez les fagottelli « Carbonara ».'],
      it: ['La Pergola', 'Il ristorante di Heinz Beck sul tetto del Rome Cavalieri con panorama su Roma; le uniche tre stelle MICHELIN della città (guida 2026).', 'Prenota con un mese d’anticipo, giacca obbligatoria; prova i fagottelli “Carbonara”.'],
    }, { price: level(3), michelin: { award: 'star3', year: 2026 }, address: 'Via Alberto Cadlolo 101', menu: [
      ['Fagottelli “La Pergola”', undefined, 'фаготтелли с начинкой в стиле карбонары|filled pasta parcels in the style of carbonara|fagottelli rellenos al estilo carbonara|gefüllte Fagottelli nach Carbonara-Art|fagottelli farcis façon carbonara|fagottelli ripieni alla carbonara'],
      ['Menu degustazione', undefined, 'дегустационный сет|tasting menu|menú degustación|Degustationsmenü|menu dégustation|menù degustazione'],
    ] }),
    P('armando-al-pantheon', 'food', 41.8991, 12.4762, FOOD, 4.6, 7300, ['food'], {
      ru: ['Armando al Pantheon', 'Семейная траттория с 1961 года в двух шагах от Пантеона: классика римской кухни — карбонара, качо э пепе, абаккьо.', 'Столиков мало — бронируйте заранее, особенно на обед.'],
      en: ['Armando al Pantheon', 'A family trattoria since 1961 steps from the Pantheon: Roman classics — carbonara, cacio e pepe, abbacchio.', 'Few tables — book ahead, especially for lunch.'],
      es: ['Armando al Pantheon', 'Una trattoria familiar desde 1961 a pasos del Panteón: clásicos romanos como carbonara, cacio e pepe y abbacchio.', 'Hay pocas mesas: reserva, sobre todo a mediodía.'],
      de: ['Armando al Pantheon', 'Eine Familientrattoria seit 1961, wenige Schritte vom Pantheon: römische Klassiker – Carbonara, Cacio e Pepe, Abbacchio.', 'Wenige Tische – vorher buchen, besonders mittags.'],
      fr: ['Armando al Pantheon', 'Une trattoria familiale depuis 1961 à deux pas du Panthéon : classiques romains — carbonara, cacio e pepe, abbacchio.', 'Peu de tables : réservez, surtout le midi.'],
      it: ['Armando al Pantheon', 'Una trattoria di famiglia dal 1961 a due passi dal Pantheon: classici romani, carbonara, cacio e pepe, abbacchio.', 'Pochi tavoli: prenota, soprattutto a pranzo.'],
    }, { price: level(2), address: 'Salita de’ Crescenzi 31', menu: [
      ['Spaghetti alla carbonara', undefined, 'спагетти с гуанчале, яйцом и пекорино|spaghetti with guanciale, egg and pecorino|espaguetis con guanciale, huevo y pecorino|Spaghetti mit Guanciale, Ei und Pecorino|spaghetti au guanciale, œuf et pecorino|spaghetti con guanciale, uovo e pecorino'],
      ['Abbacchio al forno', undefined, 'запечённый молочный ягнёнок|roast milk-fed lamb|cordero lechal al horno|gebratenes Milchlamm|agneau de lait rôti|abbacchio al forno'],
    ] }),
    P('felice-a-testaccio', 'food', 41.878, 12.4756, FOOD, 4.5, 8600, ['food'], {
      ru: ['Felice a Testaccio', 'Траттория в рабочем квартале Тестаччо, где тоннарелли качо э пепе перемешивают прямо у стола.', 'Бронируйте; традиционные блюда дня меняются в зависимости от дня недели.'],
      en: ['Felice a Testaccio', 'A trattoria in working-class Testaccio where tonnarelli cacio e pepe is tossed right at your table.', 'Book ahead; traditional dishes of the day rotate through the week.'],
      es: ['Felice a Testaccio', 'Una trattoria en el barrio obrero de Testaccio donde los tonnarelli cacio e pepe se mezclan en la mesa.', 'Reserva; los platos del día tradicionales cambian según el día.'],
      de: ['Felice a Testaccio', 'Eine Trattoria im Arbeiterviertel Testaccio, wo die Tonnarelli Cacio e Pepe am Tisch gemischt werden.', 'Vorher buchen; traditionelle Tagesgerichte wechseln je nach Wochentag.'],
      fr: ['Felice a Testaccio', 'Une trattoria du quartier populaire de Testaccio où les tonnarelli cacio e pepe sont mélangés à table.', 'Réservez ; les plats du jour traditionnels changent selon le jour.'],
      it: ['Felice a Testaccio', 'Una trattoria nel quartiere popolare di Testaccio dove i tonnarelli cacio e pepe si mantecano al tavolo.', 'Prenota; i piatti del giorno tradizionali cambiano in base al giorno.'],
    }, { price: level(2), address: 'Via Mastro Giorgio 29', menu: [
      ['Tonnarelli cacio e pepe', undefined, 'паста с пекорино и чёрным перцем|pasta with pecorino and black pepper|pasta con pecorino y pimienta negra|Pasta mit Pecorino und schwarzem Pfeffer|pâtes au pecorino et poivre noir|pasta con pecorino e pepe nero'],
      ['Carciofi alla romana', undefined, 'артишоки по-римски с мятой|Roman-style artichokes with mint|alcachofas a la romana con menta|Artischocken auf römische Art mit Minze|artichauts à la romaine à la menthe|carciofi alla romana con mentuccia'],
    ] }),
    P('trapizzino', 'food', 41.8915, 12.4694, FOOD, 4.5, 4100, ['food', 'streetfood'], {
      ru: ['Trapizzino (Трастевере)', 'Римский стритфуд: треугольный «кармашек» из пиццы-тесте с начинкой из классических тушёных блюд — курица по-охотничьи, тефтели, рубец.', 'Идеальный перекус перед вечерней прогулкой; закажите пару разных и супли.'],
      en: ['Trapizzino (Trastevere)', 'Roman street food: a triangle pocket of pizza dough filled with classic stews — chicken cacciatore, meatballs, tripe.', 'A perfect snack before an evening walk; order a couple of fillings and a supplì.'],
      es: ['Trapizzino (Trastevere)', 'Comida callejera romana: un triángulo de masa de pizza relleno de guisos clásicos —pollo a la cazadora, albóndigas, callos.', 'Ideal antes del paseo nocturno; pide un par de rellenos y un supplì.'],
      de: ['Trapizzino (Trastevere)', 'Römisches Streetfood: eine dreieckige Pizzateigtasche mit klassischen Schmorgerichten – Huhn Cacciatore, Fleischbällchen, Kutteln.', 'Ideal vor dem Abendspaziergang; zwei Füllungen und ein Supplì bestellen.'],
      fr: ['Trapizzino (Trastevere)', 'Street food romaine : une poche triangulaire de pâte à pizza garnie de plats mijotés — poulet chasseur, boulettes, tripes.', 'Parfait avant la balade du soir ; prenez deux garnitures et un supplì.'],
      it: ['Trapizzino (Trastevere)', 'Street food romano: un triangolo di pizza bianca farcito con i classici in umido, pollo alla cacciatora, polpette, trippa.', 'Perfetto prima della passeggiata serale; prendine due diversi e un supplì.'],
    }, { price: level(1), address: 'Piazza Trilussa 46', menu: [
      ['Trapizzino pollo alla cacciatora', undefined, 'карман из теста с курицей по-охотничьи|pizza pocket with chicken cacciatore|bolsillo de pizza con pollo a la cazadora|Pizzatasche mit Huhn Cacciatore|poche de pizza au poulet chasseur|tasca di pizza con pollo alla cacciatora'],
      ['Supplì', undefined, 'жареный рисовый шарик с моцареллой|fried rice ball with mozzarella|croqueta de arroz con mozzarella|frittierte Reiskugel mit Mozzarella|boulette de riz frite à la mozzarella|crocchetta di riso con mozzarella'],
    ] }),
    P('supplizio', 'food', 41.8962, 12.4687, FOOD, 4.6, 3200, ['food', 'streetfood'], {
      ru: ['Supplizio', 'Крошечная лавка, посвящённая супли — римским жареным рисовым шарикам с тянущейся моцареллой, — классическим и авторским.', 'Берите классический супли и один с «качо э пепе».'],
      en: ['Supplizio', 'A tiny shop devoted to supplì — Roman fried rice balls with stretchy mozzarella — classic and creative.', 'Get a classic supplì and a cacio e pepe one.'],
      es: ['Supplizio', 'Una diminuta tienda dedicada al supplì, croqueta romana de arroz con mozzarella fundida, clásicos y de autor.', 'Pide un supplì clásico y uno de cacio e pepe.'],
      de: ['Supplizio', 'Ein winziger Laden nur für Supplì – römische frittierte Reiskugeln mit ziehendem Mozzarella –, klassisch und kreativ.', 'Ein klassisches Supplì und eins mit Cacio e Pepe nehmen.'],
      fr: ['Supplizio', 'Une minuscule boutique dédiée au supplì, boulette de riz frite romaine à la mozzarella filante, classique ou créatif.', 'Prenez un supplì classique et un cacio e pepe.'],
      it: ['Supplizio', 'Una piccolissima bottega dedicata al supplì, classici e creativi, con la mozzarella filante.', 'Prendi un supplì classico e uno cacio e pepe.'],
    }, { price: level(1), address: 'Via dei Banchi Vecchi 143', menu: [
      ['Supplì classico', undefined, 'рисовый шарик с томатом и моцареллой|rice ball with tomato and mozzarella|supplì de tomate y mozzarella|Reiskugel mit Tomate und Mozzarella|supplì tomate-mozzarella|supplì al pomodoro e mozzarella'],
      ['Supplì cacio e pepe', undefined, 'рисовый шарик с пекорино и перцем|rice ball with pecorino and pepper|supplì de pecorino y pimienta|Reiskugel mit Pecorino und Pfeffer|supplì pecorino et poivre|supplì cacio e pepe'],
    ] }),
    P('sant-eustachio', 'food', 41.8983, 12.4752, FOOD, 4.5, 11200, ['food'], {
      ru: ['Sant’Eustachio Il Caffè', 'Кофейня 1938 года у Пантеона: эспрессо на дровяной обжарке и пышная «gran caffè» с секретной пенкой.', 'Пейте стоя у стойки, как римляне, — так дешевле. Кофе подают уже с сахаром; попросите «amaro», если без.'],
      en: ['Sant’Eustachio Il Caffè', 'A 1938 café near the Pantheon: wood-roasted espresso and the frothy “gran caffè” with its secret crema.', 'Drink standing at the bar like Romans — it’s cheaper. Coffee comes sweetened; ask for “amaro” if not.'],
      es: ['Sant’Eustachio Il Caffè', 'Un café de 1938 junto al Panteón: espresso tostado con leña y el espumoso “gran caffè” de crema secreta.', 'Tómalo de pie en la barra como los romanos, es más barato. Viene azucarado; pide “amaro” si no.'],
      de: ['Sant’Eustachio Il Caffè', 'Ein Café von 1938 nahe dem Pantheon: holzgerösteter Espresso und der schaumige „Gran Caffè“ mit geheimer Crema.', 'Wie Römer an der Bar im Stehen trinken – günstiger. Der Kaffee kommt gesüßt; sonst „amaro“ sagen.'],
      fr: ['Sant’Eustachio Il Caffè', 'Un café de 1938 près du Panthéon : espresso torréfié au bois et « gran caffè » mousseux à la crème secrète.', 'Buvez au comptoir comme les Romains, c’est moins cher. Il est servi sucré ; demandez « amaro » sinon.'],
      it: ['Sant’Eustachio Il Caffè', 'Un caffè del 1938 vicino al Pantheon: espresso tostato a legna e il cremoso “gran caffè” dalla crema segreta.', 'Bevilo al banco come i romani, costa meno. Arriva già zuccherato: chiedi “amaro” se no.'],
    }, { price: level(1), address: 'Piazza di S. Eustachio 82', menu: [
      ['Gran caffè', undefined, 'фирменный эспрессо с густой пенкой|house espresso with thick crema|espresso de la casa con crema espesa|Haus-Espresso mit dicker Crema|espresso maison à la crème épaisse|espresso della casa con crema densa'],
      ['Granita di caffè con panna', undefined, 'кофейная гранита со сливками|coffee granita with whipped cream|granizado de café con nata|Kaffeegranita mit Sahne|granité au café et chantilly|granita di caffè con panna'],
    ] }),
    P('antico-forno-roscioli', 'food', 41.8937, 12.4728, FOOD, 4.6, 5600, ['food'], {
      ru: ['Antico Forno Roscioli', 'Пекарня у Кампо-де-Фьори: римская пицца бьянка и пицца на развес с томатом, а также булки и печенье.', 'Пицца продаётся кусками на вес — покажите, сколько отрезать.'],
      en: ['Antico Forno Roscioli', 'A bakery near Campo de’ Fiori: Roman pizza bianca and pizza by weight with tomato, plus breads and biscuits.', 'Pizza is sold by weight — show how big a slice you want.'],
      es: ['Antico Forno Roscioli', 'Una panadería junto a Campo de’ Fiori: pizza bianca romana y pizza al peso con tomate, además de panes y galletas.', 'La pizza se vende al peso: indica el tamaño del trozo.'],
      de: ['Antico Forno Roscioli', 'Eine Bäckerei nahe Campo de’ Fiori: römische Pizza Bianca und Pizza nach Gewicht mit Tomate, dazu Brot und Gebäck.', 'Pizza gibt es nach Gewicht – zeigen, wie groß das Stück sein soll.'],
      fr: ['Antico Forno Roscioli', 'Une boulangerie près du Campo de’ Fiori : pizza bianca romaine et pizza à la tomate au poids, pains et biscuits.', 'La pizza se vend au poids : montrez la taille de la part.'],
      it: ['Antico Forno Roscioli', 'Un forno vicino a Campo de’ Fiori: pizza bianca romana e pizza al taglio rossa, pane e biscotti.', 'La pizza si vende a peso: indica quanto tagliare.'],
    }, { price: level(1), address: 'Via dei Chiavari 34', menu: [
      ['Pizza bianca', undefined, 'римская лепёшка с оливковым маслом и солью|Roman flatbread with olive oil and salt|pan plano romano con aceite y sal|römisches Fladenbrot mit Olivenöl und Salz|pizza blanche à l’huile d’olive et sel|pizza bianca con olio e sale'],
      ['Pizza rossa', undefined, 'пицца с томатом на развес|tomato pizza by weight|pizza de tomate al peso|Tomatenpizza nach Gewicht|pizza à la tomate au poids|pizza rossa al taglio'],
    ] }),
    P('da-cesare-al-casaletto', 'food', 41.8696, 12.4442, FOOD, 4.5, 6100, ['food'], {
      ru: ['Da Cesare al Casaletto', 'Траттория в районе Монтеверде у конечной трамвая 8: жареные закуски (фриттини), паста и вино с хорошей картой.', 'Попробуйте жареные фрикадельки из отварной говядины (polpette di bollito), а по четвергам — ньокки.'],
      en: ['Da Cesare al Casaletto', 'A trattoria in Monteverde at the end of tram 8: fried starters (fritti), pasta and a good wine list.', 'Try the polpette di bollito, and gnocchi on Thursdays.'],
      es: ['Da Cesare al Casaletto', 'Una trattoria en Monteverde al final del tranvía 8: fritos, pasta y buena carta de vinos.', 'Prueba las polpette di bollito, y los ñoquis los jueves.'],
      de: ['Da Cesare al Casaletto', 'Eine Trattoria in Monteverde an der Endstation der Tram 8: Frittiertes, Pasta und eine gute Weinkarte.', 'Die Polpette di Bollito probieren, donnerstags Gnocchi.'],
      fr: ['Da Cesare al Casaletto', 'Une trattoria à Monteverde au terminus du tram 8 : fritures, pâtes et belle carte des vins.', 'Goûtez les polpette di bollito, et les gnocchis le jeudi.'],
      it: ['Da Cesare al Casaletto', 'Una trattoria a Monteverde al capolinea del tram 8: fritti, pasta e una buona carta dei vini.', 'Prova le polpette di bollito, e gli gnocchi il giovedì.'],
    }, { price: level(2), address: 'Via del Casaletto 45', menu: [
      ['Polpette di bollito', undefined, 'жареные фрикадельки из отварной говядины|fried meatballs of boiled beef|albóndigas fritas de carne hervida|frittierte Fleischbällchen aus Siedfleisch|boulettes frites de bœuf bouilli|polpette fritte di bollito'],
      ['Gnocchi (giovedì)', undefined, 'картофельные ньокки по четвергам|potato gnocchi on Thursdays|ñoquis de patata los jueves|Kartoffelgnocchi donnerstags|gnocchis de pommes de terre le jeudi|gnocchi di patate il giovedì'],
    ] }),
    P('pasticceria-regoli', 'food', 41.8957, 12.5025, FOOD, 4.6, 5300, ['food'], {
      ru: ['Pasticceria Regoli', 'Кондитерская с 1916 года у Эсквилина, известная римским мариттоццо — сдобной булочкой со взбитыми сливками.', 'Идеальный завтрак: мариттоццо и капучино у стойки по соседству.'],
      en: ['Pasticceria Regoli', 'A pastry shop since 1916 near the Esquiline, known for the Roman maritozzo — a sweet bun split and filled with whipped cream.', 'A perfect breakfast: maritozzo and a cappuccino at the bar next door.'],
      es: ['Pasticceria Regoli', 'Una pastelería desde 1916 junto al Esquilino, famosa por el maritozzo romano, bollo relleno de nata.', 'Desayuno perfecto: maritozzo y capuchino en la barra de al lado.'],
      de: ['Pasticceria Regoli', 'Eine Konditorei seit 1916 am Esquilin, bekannt für den römischen Maritozzo – ein süßes Brötchen mit Schlagsahne.', 'Perfektes Frühstück: Maritozzo und Cappuccino an der Bar nebenan.'],
      fr: ['Pasticceria Regoli', 'Une pâtisserie depuis 1916 près de l’Esquilin, réputée pour le maritozzo romain, brioche fourrée de crème fouettée.', 'Petit-déjeuner parfait : maritozzo et cappuccino au comptoir voisin.'],
      it: ['Pasticceria Regoli', 'Una pasticceria dal 1916 vicino all’Esquilino, famosa per il maritozzo con la panna.', 'Colazione perfetta: maritozzo e cappuccino al bancone accanto.'],
    }, { price: level(1), address: 'Via dello Statuto 60', menu: [
      ['Maritozzo con la panna', undefined, 'сдобная булочка со взбитыми сливками|sweet bun with whipped cream|bollo con nata montada|süßes Brötchen mit Schlagsahne|brioche à la crème fouettée|maritozzo con la panna'],
      ['Crostata di visciole', undefined, 'тарт с вишней|sour-cherry tart|tarta de guindas|Sauerkirschtarte|tarte aux griottes|crostata di visciole'],
    ] }),
    P('panattoni-ai-marmi', 'food', 41.8858, 12.4719, FOOD, 4.4, 5900, ['food', 'nightlife'], {
      ru: ['Panattoni «Ai Marmi»', 'Шумная пиццерия в Трастевере с мраморными столами («морги»): тонкая хрустящая римская пицца из дровяной печи и жареные закуски.', 'Работает только вечером; закажите супли и жареную треску-баккалу перед пиццей.'],
      en: ['Panattoni “Ai Marmi”', 'A loud Trastevere pizzeria with marble tables (“the morgue”): thin, crisp Roman pizza from a wood oven and fried starters.', 'Evenings only; order supplì and fried salt cod before the pizza.'],
      es: ['Panattoni “Ai Marmi”', 'Una ruidosa pizzería de Trastevere con mesas de mármol (“la morgue”): pizza romana fina y crujiente de horno de leña y fritos.', 'Solo de noche; pide supplì y bacalao frito antes de la pizza.'],
      de: ['Panattoni „Ai Marmi“', 'Eine laute Pizzeria in Trastevere mit Marmortischen („die Leichenhalle“): dünne, knusprige römische Pizza aus dem Holzofen und Frittiertes.', 'Nur abends; Supplì und frittierten Stockfisch vor der Pizza bestellen.'],
      fr: ['Panattoni « Ai Marmi »', 'Une pizzeria bruyante du Trastevere aux tables de marbre (« la morgue ») : pizza romaine fine et croustillante au feu de bois et fritures.', 'Le soir seulement ; prenez supplì et morue frite avant la pizza.'],
      it: ['Panattoni “Ai Marmi”', 'Una rumorosa pizzeria di Trastevere con i tavoli di marmo (“l’obitorio”): pizza romana sottile e croccante al forno a legna e fritti.', 'Solo la sera; prendi supplì e baccalà prima della pizza.'],
    }, { price: level(1), address: 'Viale di Trastevere 53', menu: [
      ['Pizza margherita', undefined, 'тонкая римская маргарита|thin Roman margherita|margarita romana fina|dünne römische Margherita|margherita romaine fine|margherita romana sottile'],
      ['Filetto di baccalà', undefined, 'жареное филе солёной трески|fried salt-cod fillet|filete de bacalao frito|frittiertes Stockfischfilet|filet de morue frit|filetto di baccalà fritto'],
    ] }),
  ],
  routes: [
    D(['=colosseum', 'roman-forum', 'capitoline-museums', 'armando-al-pantheon', 'pantheon', 'piazza-navona', '=trevi', '=rome-spanish-steps', '=rome-roscioli'],
      'Колизей, Форум, Пантеон и фонтан Треви|Colosseum, Forum, Pantheon and Trevi|Coliseo, Foro, Panteón y Fontana di Trevi|Kolosseum, Forum, Pantheon und Trevi|Colisée, Forum, Panthéon et Trevi|Colosseo, Foro, Pantheon e Trevi'),
    D(['vatican-museums', 'st-peters-basilica', '=rome-pizzarium-bonci', 'castel-sant-angelo', 'trastevere', '=rome-da-enzo-al-29'],
      'Ватикан, замок Святого Ангела и Трастевере|The Vatican, Castel Sant’Angelo and Trastevere|El Vaticano, Sant’Angelo y Trastevere|Vatikan, Engelsburg und Trastevere|Le Vatican, le château Saint-Ange et le Trastevere|Vaticano, Castel Sant’Angelo e Trastevere'),
    D(['sant-eustachio', 'borghese-gallery', '=rome-pincio-terrace', '=rome-aventine-keyhole', '=rome-mercato-testaccio', 'appian-way', 'la-pergola'],
      'Боргезе, Авентин и Аппиева дорога|Borghese, the Aventine and the Appian Way|Borghese, el Aventino y la Vía Apia|Borghese, Aventin und Via Appia|Borghèse, l’Aventin et la voie Appienne|Borghese, Aventino e Appia Antica'),
  ],
};

export default pack;
