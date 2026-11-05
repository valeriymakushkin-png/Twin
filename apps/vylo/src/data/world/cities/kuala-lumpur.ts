import type { CityPack } from '../types';
import { free, level, makeDay, makePlace } from './_kit.ts';

const P = makePlace('kuala-lumpur');
const D = makeDay('kuala-lumpur');
const CITY = 'cU--Bse0gIY';
const PARK = 'vH9z9d6Mbd8';
const FOOD = 'owL3ThreT9g';
const OLD = 'PqE1B5FENoU';
const MERDEKA = 'vqxnSwBhN0Y';
const TEMPLE = 'hR_bbhMbiTo';

const pack: CityPack = {
  country: 'MY',
  city: 'kuala-lumpur',
  places: [
    P('kl-tower', 'attraction', 3.1528, 101.7038, CITY, 4.5, 41200, ['views', 'city'], {
      ru: ['Телебашня Менара KL', 'Телебашня на холме в лесном заповеднике: открытая площадка Sky Deck и стеклянный «Sky Box» на высоте около 300 м.', 'Приходите за полчаса до заката — увидите город днём и в огнях.'],
      en: ['Menara KL Tower', 'A telecom tower on a forested hill with the open-air Sky Deck and a glass Sky Box around 300 m up.', 'Arrive half an hour before sunset to see the city by day and lit up.'],
      es: ['Torre Menara KL', 'Una torre de telecomunicaciones en una colina con bosque: el Sky Deck al aire libre y la Sky Box de cristal a unos 300 m.', 'Llega media hora antes del atardecer para verla de día y con luces.'],
      de: ['Menara KL Tower', 'Ein Fernsehturm auf einem bewaldeten Hügel mit offenem Sky Deck und gläserner Sky Box in rund 300 m Höhe.', 'Eine halbe Stunde vor Sonnenuntergang kommen – Stadt bei Tag und im Lichtermeer.'],
      fr: ['Tour Menara KL', 'Une tour de télécommunications sur une colline boisée, avec le Sky Deck en plein air et la Sky Box vitrée à environ 300 m.', 'Arrivez une demi-heure avant le coucher du soleil pour voir la ville de jour et illuminée.'],
      it: ['Torre Menara KL', 'Una torre delle telecomunicazioni su una collina boscosa, con lo Sky Deck all’aperto e la Sky Box di vetro a circa 300 m.', 'Arriva mezz’ora prima del tramonto per vedere la città di giorno e illuminata.'],
    }, { hours: '09:00–22:00', address: '2 Jalan Punchak' }),
    P('islamic-arts-museum', 'attraction', 3.142, 101.6901, MERDEKA, 4.7, 9800, ['museums', 'art', 'architecture'], {
      ru: ['Музей исламского искусства', 'Одна из лучших коллекций исламского искусства в мире: рукописи Корана, модели мечетей, ткани и расписные купола залов.', 'Не пропустите зал моделей великих мечетей и восстановленную османскую комнату.'],
      en: ['Islamic Arts Museum Malaysia', 'One of the world’s finest Islamic art collections: Quran manuscripts, mosque models, textiles and painted domes.', 'Don’t miss the hall of great-mosque models and the restored Ottoman room.'],
      es: ['Museo de Artes Islámicas', 'Una de las mejores colecciones de arte islámico del mundo: manuscritos del Corán, maquetas de mezquitas, tejidos y cúpulas pintadas.', 'No te pierdas la sala de maquetas de grandes mezquitas y la sala otomana restaurada.'],
      de: ['Museum für Islamische Kunst', 'Eine der besten Sammlungen islamischer Kunst weltweit: Koranhandschriften, Moscheemodelle, Textilien und bemalte Kuppeln.', 'Den Saal der Moscheemodelle und das restaurierte osmanische Zimmer nicht verpassen.'],
      fr: ['Musée des Arts islamiques', 'L’une des plus belles collections d’art islamique au monde : manuscrits du Coran, maquettes de mosquées, textiles et coupoles peintes.', 'Ne manquez pas la salle des maquettes de grandes mosquées et la pièce ottomane restaurée.'],
      it: ['Museo delle Arti islamiche', 'Una delle più belle collezioni d’arte islamica al mondo: manoscritti del Corano, modellini di moschee, tessuti e cupole dipinte.', 'Non perdere la sala dei modellini di grandi moschee e la stanza ottomana restaurata.'],
    }, { hours: '09:30–18:00', address: 'Jalan Lembah Perdana' }),
    P('national-mosque', 'attraction', 3.1416, 101.6918, TEMPLE, 4.5, 15800, ['architecture', 'culture'], {
      ru: ['Национальная мечеть (Масджид Негара)', 'Модернистская мечеть 1965 года с крышей-звездой из 18 лучей и 73-метровым минаретом.', 'Туристов пускают вне времени молитв; на входе выдают накидки.'],
      en: ['National Mosque (Masjid Negara)', 'A 1965 modernist mosque with an 18-point star roof and a 73 m minaret.', 'Visitors are welcome outside prayer times; robes are lent at the door.'],
      es: ['Mezquita Nacional (Masjid Negara)', 'Una mezquita modernista de 1965 con un techo en estrella de 18 puntas y un minarete de 73 m.', 'Se visita fuera de los horarios de oración; prestan túnicas en la entrada.'],
      de: ['Nationalmoschee (Masjid Negara)', 'Eine modernistische Moschee von 1965 mit einem 18-zackigen Sterndach und 73 m hohem Minarett.', 'Besuch außerhalb der Gebetszeiten; Umhänge gibt es am Eingang.'],
      fr: ['Mosquée nationale (Masjid Negara)', 'Une mosquée moderniste de 1965 au toit en étoile à 18 branches et au minaret de 73 m.', 'Visite hors des heures de prière ; des robes sont prêtées à l’entrée.'],
      it: ['Moschea nazionale (Masjid Negara)', 'Una moschea modernista del 1965 con un tetto a stella a 18 punte e un minareto di 73 m.', 'Si visita fuori dagli orari di preghiera; all’ingresso prestano le tuniche.'],
    }, { price: free }),
    P('perdana-botanical-garden', 'nature', 3.144, 101.685, PARK, 4.6, 14600, ['gardens', 'nature'], {
      ru: ['Ботанический сад Пердана', 'Старейший парк города у озера с орхидеями, гибискусами и тенистыми дорожками — зелёная пауза рядом с музеями.', 'Утром здесь прохладно и пусто; рядом парк птиц.'],
      en: ['Perdana Botanical Garden', 'The city’s oldest park around a lake, with orchid and hibiscus gardens and shady paths — a green break near the museums.', 'Mornings are cool and quiet; the bird park is next door.'],
      es: ['Jardín Botánico Perdana', 'El parque más antiguo de la ciudad junto a un lago, con orquídeas, hibiscos y senderos sombreados, una pausa verde junto a los museos.', 'Por la mañana está fresco y tranquilo; al lado está el parque de aves.'],
      de: ['Botanischer Garten Perdana', 'Der älteste Park der Stadt an einem See mit Orchideen- und Hibiskusgärten und schattigen Wegen – eine grüne Pause bei den Museen.', 'Morgens kühl und ruhig; der Vogelpark liegt nebenan.'],
      fr: ['Jardin botanique Perdana', 'Le plus ancien parc de la ville autour d’un lac, jardins d’orchidées et d’hibiscus, allées ombragées : une pause verte près des musées.', 'Le matin, frais et calme ; le parc aux oiseaux est à côté.'],
      it: ['Giardino botanico Perdana', 'Il parco più antico della città attorno a un lago, con orchidee, ibischi e viali ombreggiati: una pausa verde vicino ai musei.', 'Al mattino è fresco e tranquillo; accanto c’è il parco degli uccelli.'],
    }, { price: free, hours: '07:00–20:00' }),
    P('sri-mahamariamman', 'attraction', 3.144, 101.6969, TEMPLE, 4.5, 8900, ['temples', 'culture'], {
      ru: ['Храм Шри Махамариамман', 'Старейший действующий индуистский храм Куала-Лумпура (1873) у Чайнатауна: пятиярусная башня с 228 фигурами божеств.', 'Обувь оставьте у входа за символическую плату.'],
      en: ['Sri Mahamariamman Temple', 'Kuala Lumpur’s oldest working Hindu temple (1873) by Chinatown: a five-tier gopuram with 228 deities.', 'Leave shoes at the entrance for a small fee.'],
      es: ['Templo Sri Mahamariamman', 'El templo hindú en uso más antiguo de Kuala Lumpur (1873), junto a Chinatown: un gopuram de cinco niveles con 228 deidades.', 'Deja el calzado en la entrada por una pequeña tarifa.'],
      de: ['Sri-Mahamariamman-Tempel', 'Kuala Lumpurs ältester aktiver Hindutempel (1873) bei Chinatown: ein fünfstufiger Gopuram mit 228 Gottheiten.', 'Schuhe am Eingang gegen kleine Gebühr abgeben.'],
      fr: ['Temple Sri Mahamariamman', 'Le plus ancien temple hindou en activité de Kuala Lumpur (1873), près de Chinatown : un gopuram à cinq niveaux et 228 divinités.', 'Laissez vos chaussures à l’entrée contre une petite somme.'],
      it: ['Tempio Sri Mahamariamman', 'Il più antico tempio indù attivo di Kuala Lumpur (1873), vicino a Chinatown: un gopuram a cinque livelli con 228 divinità.', 'Lascia le scarpe all’ingresso per una piccola cifra.'],
    }, { price: free, address: '163 Jalan Tun H S Lee' }),
    P('masjid-jamek', 'attraction', 3.1488, 101.6957, MERDEKA, 4.5, 11300, ['architecture', 'history', 'photo'], {
      ru: ['Мечеть Джамек', 'Мечеть 1909 года в мавританском стиле на слиянии рек Кланг и Гомбак — месте, где родился город; вечером «Река жизни» подсвечена голубым.', 'Снимайте с набережной после заката, когда включают туман и подсветку.'],
      en: ['Masjid Jamek', 'A 1909 Moorish-style mosque where the Klang and Gombak rivers meet — the spot the city was born; at night the River of Life glows blue.', 'Shoot from the riverside after dark, when the mist and lights come on.'],
      es: ['Masjid Jamek', 'Una mezquita morisca de 1909 en la confluencia de los ríos Klang y Gombak, donde nació la ciudad; de noche el “Río de la Vida” brilla en azul.', 'Fotografía desde la orilla de noche, con la niebla y las luces.'],
      de: ['Masjid Jamek', 'Eine Moschee im maurischen Stil von 1909 am Zusammenfluss von Klang und Gombak – der Geburtsort der Stadt; nachts leuchtet der „River of Life“ blau.', 'Nach Einbruch der Dunkelheit vom Ufer fotografieren, wenn Nebel und Licht angehen.'],
      fr: ['Masjid Jamek', 'Une mosquée de style mauresque (1909) au confluent du Klang et du Gombak, là où la ville est née ; la nuit, la « River of Life » s’illumine de bleu.', 'Photographiez depuis la berge la nuit, avec brume et lumières.'],
      it: ['Masjid Jamek', 'Una moschea in stile moresco del 1909 alla confluenza di Klang e Gombak, dove nacque la città; di notte il “River of Life” si tinge di blu.', 'Scatta dalla riva dopo il tramonto, con nebbia e luci accese.'],
    }, { spot: 'insta', price: free }),
    P('bukit-bintang', 'attraction', 3.1466, 101.711, CITY, 4.4, 36700, ['shopping', 'nightlife', 'food'], {
      ru: ['Букит-Бинтанг', 'Главный торговый и ночной район: Pavilion, Lot 10, массажные салоны и уличная еда до глубокой ночи.', 'Пройдите крытым пешеходным мостом от KLCC — прохладно и быстро.'],
      en: ['Bukit Bintang', 'The main shopping and nightlife district: Pavilion, Lot 10, massage parlours and street food late into the night.', 'Walk the covered skybridge from KLCC — cool and quick.'],
      es: ['Bukit Bintang', 'El gran barrio de compras y noche: Pavilion, Lot 10, masajes y comida callejera hasta tarde.', 'Ve por la pasarela cubierta desde KLCC: fresca y rápida.'],
      de: ['Bukit Bintang', 'Das Haupt-Shopping- und Nachtviertel: Pavilion, Lot 10, Massagesalons und Streetfood bis spät.', 'Über den überdachten Skybridge von KLCC laufen – kühl und schnell.'],
      fr: ['Bukit Bintang', 'Le grand quartier du shopping et de la nuit : Pavilion, Lot 10, salons de massage et cuisine de rue jusque tard.', 'Empruntez la passerelle couverte depuis KLCC : au frais et rapide.'],
      it: ['Bukit Bintang', 'Il quartiere principale di shopping e vita notturna: Pavilion, Lot 10, centri massaggi e street food fino a tardi.', 'Usa la passerella coperta da KLCC: fresca e veloce.'],
    }, { price: free }),
    P('aquaria-klcc', 'attraction', 3.1535, 101.7124, PARK, 4.4, 27400, ['wildlife', 'nature'], {
      ru: ['Океанариум Aquaria KLCC', 'Океанариум под конференц-центром KLCC с 90-метровым подводным тоннелем, акулами и скатами.', 'Хорош на жаркий или дождливый день; с детьми — обязательно.'],
      en: ['Aquaria KLCC', 'An aquarium beneath the KLCC convention centre with a 90 m underwater tunnel, sharks and rays.', 'Great on a hot or rainy day, and a must with kids.'],
      es: ['Aquaria KLCC', 'Un acuario bajo el centro de convenciones KLCC con un túnel submarino de 90 m, tiburones y rayas.', 'Ideal en un día caluroso o lluvioso, y con niños.'],
      de: ['Aquaria KLCC', 'Ein Aquarium unter dem KLCC-Kongresszentrum mit 90-m-Unterwassertunnel, Haien und Rochen.', 'Ideal an heißen oder regnerischen Tagen, mit Kindern ein Muss.'],
      fr: ['Aquaria KLCC', 'Un aquarium sous le centre des congrès KLCC avec un tunnel sous-marin de 90 m, requins et raies.', 'Parfait par temps chaud ou pluvieux, incontournable avec des enfants.'],
      it: ['Aquaria KLCC', 'Un acquario sotto il centro congressi KLCC con un tunnel subacqueo di 90 m, squali e razze.', 'Perfetto in una giornata calda o piovosa, imperdibile con i bambini.'],
    }, { hours: '10:00–20:00' }),
    P('saloma-bridge', 'attraction', 3.16, 101.7075, CITY, 4.5, 7600, ['photo', 'views', 'nightlife'], {
      ru: ['Мост Салома', 'Пешеходный мост над рекой Кланг между Кампунг-Бару и KLCC; ночью он переливается подсветкой, а за ним — башни Петронас.', 'Лучший кадр — сразу после заката, когда небо ещё синее.'],
      en: ['Saloma Link Bridge', 'A footbridge over the Klang River between Kampung Baru and KLCC; at night it shimmers with lights against the Petronas Towers.', 'Best frame is just after sunset while the sky is still blue.'],
      es: ['Puente Saloma', 'Una pasarela sobre el río Klang entre Kampung Baru y KLCC; de noche brilla con luces frente a las Torres Petronas.', 'El mejor encuadre es justo tras el atardecer, con el cielo aún azul.'],
      de: ['Saloma-Brücke', 'Eine Fußgängerbrücke über den Klang zwischen Kampung Baru und KLCC; nachts schimmert sie vor den Petronas Towers.', 'Das beste Bild direkt nach Sonnenuntergang, solange der Himmel blau ist.'],
      fr: ['Pont Saloma', 'Une passerelle sur la rivière Klang entre Kampung Baru et KLCC ; la nuit, elle scintille devant les tours Petronas.', 'Le plus beau cadrage juste après le coucher du soleil, ciel encore bleu.'],
      it: ['Ponte Saloma', 'Una passerella sul fiume Klang tra Kampung Baru e KLCC; di notte brilla di luci davanti alle Petronas.', 'L’inquadratura migliore subito dopo il tramonto, col cielo ancora blu.'],
    }, { spot: 'insta', price: free, hours: 'always' }),
    P('kampung-baru', 'attraction', 3.165, 101.702, OLD, 4.3, 5200, ['culture', 'food', 'history'], {
      ru: ['Кампунг-Бару', 'Малайская деревня деревянных домов на сваях в тени небоскрёбов — последний такой квартал в центре города.', 'Приходите утром на наси лемак или вечером в Рамадан на базар.'],
      en: ['Kampung Baru', 'A Malay village of wooden stilt houses in the shadow of skyscrapers — the last of its kind in the city centre.', 'Come in the morning for nasi lemak, or for the Ramadan bazaar in the evening.'],
      es: ['Kampung Baru', 'Una aldea malaya de casas de madera sobre pilotes a la sombra de los rascacielos, la última de su tipo en el centro.', 'Ven por la mañana a por nasi lemak o en Ramadán al bazar nocturno.'],
      de: ['Kampung Baru', 'Ein malaiisches Dorf aus hölzernen Pfahlhäusern im Schatten der Wolkenkratzer – das letzte seiner Art im Zentrum.', 'Morgens zum Nasi Lemak kommen oder abends im Ramadan zum Basar.'],
      fr: ['Kampung Baru', 'Un village malais de maisons en bois sur pilotis à l’ombre des gratte-ciel, le dernier du genre en centre-ville.', 'Venez le matin pour le nasi lemak, ou au bazar du ramadan le soir.'],
      it: ['Kampung Baru', 'Un villaggio malese di case di legno su palafitte all’ombra dei grattacieli, l’ultimo del genere in centro.', 'Vieni al mattino per il nasi lemak o la sera al bazar del Ramadan.'],
    }, { spot: 'hidden', price: free }),

    P('dewakan', 'food', 3.1576, 101.719, FOOD, 4.8, 900, ['food', 'luxury', 'views'], {
      ru: ['Dewakan', 'Единственный в Малайзии ресторан с двумя звёздами Мишлен (гид 2027) и зелёной звездой: шеф Даррен Тео готовит из малайзийских лесных и морских продуктов на 48-м этаже.', 'Бронируйте место у окна — ужин проходит на фоне башен Петронас.'],
      en: ['Dewakan', 'Malaysia’s only two-MICHELIN-star restaurant (2027 guide), also with a Green Star: chef Darren Teoh cooks Malaysian forest and sea produce on the 48th floor.', 'Ask for a window table — dinner comes with the Petronas Towers.'],
      es: ['Dewakan', 'El único restaurante de Malasia con dos estrellas MICHELIN (guía 2027) y Estrella Verde: el chef Darren Teoh cocina producto de bosque y mar malasio en la planta 48.', 'Pide mesa junto a la ventana: la cena viene con las Torres Petronas.'],
      de: ['Dewakan', 'Malaysias einziges Restaurant mit zwei MICHELIN-Sternen (Guide 2027) und Grünem Stern: Darren Teoh kocht mit Wald- und Meeresprodukten im 48. Stock.', 'Einen Fensterplatz verlangen – zum Essen gibt es die Petronas Towers.'],
      fr: ['Dewakan', 'Le seul deux étoiles MICHELIN de Malaisie (guide 2027), aussi Étoile Verte : le chef Darren Teoh cuisine forêt et mer malaisiennes au 48e étage.', 'Demandez une table en fenêtre : le dîner se fait face aux tours Petronas.'],
      it: ['Dewakan', 'L’unico due stelle MICHELIN della Malesia (guida 2027), anche Stella Verde: lo chef Darren Teoh cucina prodotti di foresta e mare malesi al 48° piano.', 'Chiedi un tavolo alla finestra: la cena è con vista sulle Petronas.'],
    }, { price: level(3), michelin: { award: 'star2', year: 2027 }, address: 'Naza Tower, Level 48, 10 Persiaran KLCC' }),
    P('dc-by-darren-chin', 'food', 3.1392, 101.6293, FOOD, 4.7, 1100, ['food', 'luxury'], {
      ru: ['DC. by Darren Chin', 'Французская кухня с азиатскими акцентами в районе TTDI; одна звезда Мишлен в гиде 2027.', 'Ехать на такси около 20 минут от центра — бронируйте ужин заранее.'],
      en: ['DC. by Darren Chin', 'French cooking with Asian accents in the TTDI neighbourhood; one MICHELIN star in the 2027 guide.', 'About 20 minutes by taxi from the centre — book dinner ahead.'],
      es: ['DC. by Darren Chin', 'Cocina francesa con acentos asiáticos en el barrio de TTDI; una estrella MICHELIN en la guía 2027.', 'A unos 20 minutos en taxi del centro: reserva la cena.'],
      de: ['DC. by Darren Chin', 'Französische Küche mit asiatischen Akzenten im Viertel TTDI; ein MICHELIN-Stern im Guide 2027.', 'Etwa 20 Taximinuten vom Zentrum – Abendessen vorab buchen.'],
      fr: ['DC. by Darren Chin', 'Cuisine française aux accents asiatiques dans le quartier de TTDI ; une étoile MICHELIN au guide 2027.', 'À environ 20 minutes de taxi du centre : réservez le dîner.'],
      it: ['DC. by Darren Chin', 'Cucina francese con accenti asiatici nel quartiere TTDI; una stella MICHELIN nella guida 2027.', 'Circa 20 minuti di taxi dal centro: prenota la cena.'],
    }, { price: level(3), michelin: { award: 'star1', year: 2027 }, address: 'Taman Tun Dr Ismail' }),
    P('yut-kee', 'food', 3.1585, 101.6977, FOOD, 4.3, 9600, ['food', 'history'], {
      ru: ['Yut Kee', 'Хайнаньский копитиам с 1928 года: тосты с кайей, свиной рулет и хайнаньская свиная котлета — завтрак старого Куала-Лумпура.', 'Свиной рулет готовят ограниченно, обычно по выходным, — приходите пораньше.'],
      en: ['Yut Kee', 'A Hainanese kopitiam since 1928: kaya toast, roast pork roll and Hainanese chop — old Kuala Lumpur’s breakfast.', 'The roast pork roll is limited, usually at weekends — come early.'],
      es: ['Yut Kee', 'Un kopitiam hainanés desde 1928: tostada de kaya, rollo de cerdo asado y chuleta hainanesa, el desayuno del viejo Kuala Lumpur.', 'El rollo de cerdo es limitado, sobre todo en fin de semana: ven temprano.'],
      de: ['Yut Kee', 'Ein hainanesisches Kopitiam seit 1928: Kaya-Toast, Schweinebraten-Rolle und Hainan-Kotelett – das Frühstück des alten KL.', 'Die Braten-Rolle gibt es begrenzt, meist am Wochenende – früh kommen.'],
      fr: ['Yut Kee', 'Un kopitiam hainanais depuis 1928 : toast au kaya, roulé de porc rôti et côtelette hainanaise, le petit-déjeuner du vieux Kuala Lumpur.', 'Le roulé de porc est limité, surtout le week-end : venez tôt.'],
      it: ['Yut Kee', 'Un kopitiam hainanese dal 1928: toast al kaya, rotolo di maiale arrosto e cotoletta hainanese, la colazione della vecchia Kuala Lumpur.', 'Il rotolo di maiale è limitato, di solito nel weekend: vieni presto.'],
    }, { price: level(1), address: '1 Jalan Kamunting', menu: [
      ['Roti Babi', 14, 'жареный хлеб с начинкой из свинины и краба|fried bread stuffed with pork and crab|pan frito relleno de cerdo y cangrejo|frittiertes Brot mit Schwein und Krabbe|pain frit farci porc-crabe|pane fritto ripieno di maiale e granchio'],
      ['Kaya Toast', 4, 'тост с кокосовым джемом и маслом|toast with coconut jam and butter|tostada con mermelada de coco y mantequilla|Toast mit Kokosmarmelade und Butter|toast confiture de coco et beurre|toast con marmellata di cocco e burro'],
      ['Hainanese Chicken Chop', 18, 'куриная отбивная в соусе по-хайнаньски|Hainanese-style chicken chop|chuleta de pollo hainanesa|Hähnchenschnitzel nach Hainan-Art|escalope de poulet hainanaise|cotoletta di pollo hainanese'],
    ] }),
    P('sek-yuen', 'food', 3.1395, 101.713, FOOD, 4.3, 3900, ['food', 'history'], {
      ru: ['Sek Yuen', 'Кантонский ресторан с 1948 года, где до сих пор готовят на дровах: утка с восемью сокровищами и рыба на пару.', 'Закажите заранее утку «Пат Пу Ап» — её готовят несколько часов.'],
      en: ['Sek Yuen', 'A Cantonese restaurant since 1948 still cooking over firewood: eight-treasure duck and steamed fish.', 'Pre-order the Pat Poh Ngap duck — it takes hours.'],
      es: ['Sek Yuen', 'Un restaurante cantonés desde 1948 que aún cocina con leña: pato de los ocho tesoros y pescado al vapor.', 'Encarga con antelación el pato Pat Poh Ngap: tarda horas.'],
      de: ['Sek Yuen', 'Ein kantonesisches Restaurant seit 1948, das noch mit Brennholz kocht: Acht-Schätze-Ente und gedämpfter Fisch.', 'Die Pat-Poh-Ngap-Ente vorbestellen – sie braucht Stunden.'],
      fr: ['Sek Yuen', 'Un restaurant cantonais depuis 1948 qui cuisine encore au feu de bois : canard aux huit trésors et poisson vapeur.', 'Commandez à l’avance le canard Pat Poh Ngap : il demande des heures.'],
      it: ['Sek Yuen', 'Un ristorante cantonese dal 1948 che cucina ancora a legna: anatra degli otto tesori e pesce al vapore.', 'Ordina in anticipo l’anatra Pat Poh Ngap: richiede ore.'],
    }, { price: level(2), address: '315 Jalan Pudu', menu: [
      ['Pat Poh Ngap', 90, 'утка с восемью начинками|eight-treasure stuffed duck|pato relleno de ocho tesoros|mit acht Schätzen gefüllte Ente|canard farci aux huit trésors|anatra ripiena degli otto tesori'],
      ['Steamed fish', 60, 'рыба на пару с имбирём|steamed fish with ginger|pescado al vapor con jengibre|gedämpfter Fisch mit Ingwer|poisson vapeur au gingembre|pesce al vapore con zenzero'],
    ] }),
    P('wong-mei-kee', 'food', 3.1389, 101.7145, FOOD, 4.3, 3100, ['food', 'streetfood'], {
      ru: ['Wong Mei Kee', 'Лавка жареной свинины «сиу юк» с хрустящей, как стекло, шкуркой — её разбирают к полудню.', 'Приходите к открытию: после 13:00 часто уже ничего нет.'],
      en: ['Wong Mei Kee', 'A siu yuk roast pork shop with glass-crisp crackling that sells out by midday.', 'Come at opening — it is often gone after 1 pm.'],
      es: ['Wong Mei Kee', 'Una tienda de cerdo asado siu yuk con piel crujiente como cristal que se agota a mediodía.', 'Ven a la apertura: a partir de las 13:00 suele no quedar.'],
      de: ['Wong Mei Kee', 'Ein Siu-Yuk-Laden mit glasknuspriger Schweinekruste, mittags meist ausverkauft.', 'Zur Öffnung kommen – nach 13 Uhr ist oft nichts mehr da.'],
      fr: ['Wong Mei Kee', 'Une échoppe de porc rôti siu yuk à la couenne croustillante comme du verre, épuisée dès midi.', 'Venez à l’ouverture : après 13 h, souvent plus rien.'],
      it: ['Wong Mei Kee', 'Una bottega di maiale arrosto siu yuk con cotenna croccante come vetro, esaurita entro mezzogiorno.', 'Vieni all’apertura: dopo le 13 spesso non c’è più.'],
    }, { price: level(1), address: '30 Jalan Nyonya, Pudu', menu: [
      ['Siu Yuk', 18, 'свиная грудинка с хрустящей шкуркой|roast pork belly with crisp crackling|panceta asada con piel crujiente|Schweinebauch mit Kruste|poitrine de porc rôtie croustillante|pancetta arrosto con cotenna croccante'],
      ['Char Siu', 16, 'свинина в медовой глазури|honey-glazed barbecued pork|cerdo glaseado con miel|Schwein mit Honigglasur|porc laqué au miel|maiale laccato al miele'],
    ] }),
    P('kim-lian-kee', 'food', 3.1438, 101.6977, FOOD, 4.1, 5800, ['food', 'streetfood'], {
      ru: ['Kim Lian Kee', 'Родина «хоккиен ми» по-куалалумпурски с 1927 года: толстая лапша в тёмном соевом соусе со шкварками.', 'Попросите добавить шкварок — они главная изюминка.'],
      en: ['Kim Lian Kee', 'Home of KL-style Hokkien mee since 1927: thick noodles in dark soy with crispy lard.', 'Ask for extra crispy lard — it’s the point.'],
      es: ['Kim Lian Kee', 'La cuna del Hokkien mee al estilo de Kuala Lumpur desde 1927: fideos gruesos en soja oscura con chicharrones.', 'Pide chicharrones extra: son la gracia.'],
      de: ['Kim Lian Kee', 'Die Heimat des Hokkien Mee nach KL-Art seit 1927: dicke Nudeln in dunkler Soja mit knusprigem Schmalz.', 'Extra Grieben verlangen – darum geht es.'],
      fr: ['Kim Lian Kee', 'Le berceau du Hokkien mee façon Kuala Lumpur depuis 1927 : grosses nouilles au soja foncé et lardons croustillants.', 'Demandez un supplément de lardons croustillants : c’est tout l’intérêt.'],
      it: ['Kim Lian Kee', 'La patria dell’Hokkien mee alla Kuala Lumpur dal 1927: noodle spessi in soia scura con ciccioli croccanti.', 'Chiedi ciccioli in più: sono il punto forte.'],
    }, { price: level(1), address: '49 Jalan Petaling', menu: [
      ['Hokkien Mee', 15, 'толстая лапша в тёмном соевом соусе|thick noodles in dark soy|fideos gruesos en soja oscura|dicke Nudeln in dunkler Soja|grosses nouilles au soja foncé|noodle spessi in soia scura'],
      ['Sang Har Mee', 45, 'лапша с крупными речными креветками|noodles with giant river prawns|fideos con langostinos de río|Nudeln mit Riesen-Flussgarnelen|nouilles aux grosses crevettes de rivière|noodle con gamberi di fiume giganti'],
    ] }),
    P('madam-kwans', 'food', 3.158, 101.712, FOOD, 4.1, 8600, ['food'], {
      ru: ['Madam Kwan’s', 'Надёжная малайзийская классика в Suria KLCC: наси лемак, наси бокси и рендан — удобно перед вечерней прогулкой к башням.', 'Наси лемак здесь подают с курицей рендан — попросите самбал «поострее».'],
      en: ['Madam Kwan’s', 'Reliable Malaysian classics in Suria KLCC: nasi lemak, nasi bojari and rendang — handy before an evening at the towers.', 'Their nasi lemak comes with chicken rendang; ask for the sambal hotter.'],
      es: ['Madam Kwan’s', 'Clásicos malasios fiables en Suria KLCC: nasi lemak, nasi bojari y rendang, práctico antes de ver las torres de noche.', 'Su nasi lemak lleva pollo rendang; pide el sambal más picante.'],
      de: ['Madam Kwan’s', 'Verlässliche malaysische Klassiker im Suria KLCC: Nasi Lemak, Nasi Bojari und Rendang – praktisch vor dem Abend an den Türmen.', 'Ihr Nasi Lemak kommt mit Hühnchen-Rendang; Sambal schärfer verlangen.'],
      fr: ['Madam Kwan’s', 'Des classiques malaisiens fiables à Suria KLCC : nasi lemak, nasi bojari et rendang, pratique avant la soirée aux tours.', 'Leur nasi lemak est servi avec un rendang de poulet ; demandez le sambal plus relevé.'],
      it: ['Madam Kwan’s', 'Classici malesi affidabili al Suria KLCC: nasi lemak, nasi bojari e rendang, comodo prima della serata alle torri.', 'Il loro nasi lemak arriva con pollo rendang; chiedi il sambal più piccante.'],
    }, { price: level(2), address: 'Suria KLCC, Level 4', menu: [
      ['Nasi Lemak', 29, 'кокосовый рис с самбалом и курицей рендан|coconut rice, sambal and chicken rendang|arroz de coco, sambal y pollo rendang|Kokosreis, Sambal und Hühnchen-Rendang|riz coco, sambal et rendang de poulet|riso al cocco, sambal e pollo rendang'],
      ['Beef Rendang', 32, 'говядина, томлённая в кокосе и специях|beef slow-cooked in coconut and spices|ternera guisada en coco y especias|in Kokos und Gewürzen geschmortes Rind|bœuf mijoté coco et épices|manzo stufato in cocco e spezie'],
      ['Cendol', 12, 'десерт из льда, кокоса и пальмового сахара|shaved ice, coconut and palm sugar|hielo, coco y azúcar de palma|Eis, Kokos und Palmzucker|glace pilée, coco et sucre de palme|ghiaccio, cocco e zucchero di palma'],
    ] }),
    P('nasi-lemak-wanjo', 'food', 3.1652, 101.7015, FOOD, 4.2, 7100, ['food', 'streetfood'], {
      ru: ['Nasi Lemak Wanjo', 'Легендарный наси лемак Кампунг-Бару: собираете тарелку сами — курица, кальмары, рендан, яйцо и самбал.', 'Работает с утра до поздней ночи; самая вкусная — жареная курица «аям горенг».'],
      en: ['Nasi Lemak Wanjo', 'Kampung Baru’s legendary nasi lemak: build your own plate — fried chicken, squid, rendang, egg and sambal.', 'Open from morning till late; the ayam goreng fried chicken is the star.'],
      es: ['Nasi Lemak Wanjo', 'El legendario nasi lemak de Kampung Baru: arma tu plato con pollo frito, calamar, rendang, huevo y sambal.', 'Abre de la mañana a la noche; el pollo frito ayam goreng es la estrella.'],
      de: ['Nasi Lemak Wanjo', 'Kampung Barus legendäres Nasi Lemak: Teller selbst zusammenstellen – Brathähnchen, Tintenfisch, Rendang, Ei und Sambal.', 'Von morgens bis spät geöffnet; das Ayam Goreng ist der Star.'],
      fr: ['Nasi Lemak Wanjo', 'Le légendaire nasi lemak de Kampung Baru : composez votre assiette — poulet frit, calamar, rendang, œuf et sambal.', 'Ouvert du matin à tard ; le poulet frit ayam goreng est la vedette.'],
      it: ['Nasi Lemak Wanjo', 'Il leggendario nasi lemak di Kampung Baru: componi il piatto con pollo fritto, calamari, rendang, uovo e sambal.', 'Aperto dal mattino a tarda notte; la star è il pollo fritto ayam goreng.'],
    }, { price: level(1), address: 'Jalan Raja Muda Musa, Kampung Baru', menu: [
      ['Nasi Lemak Ayam Goreng', 14, 'кокосовый рис с жареной курицей|coconut rice with fried chicken|arroz de coco con pollo frito|Kokosreis mit Brathähnchen|riz coco et poulet frit|riso al cocco con pollo fritto'],
      ['Sambal Sotong', 9, 'кальмар в остром самбале|squid in spicy sambal|calamar en sambal picante|Tintenfisch in scharfem Sambal|calamar au sambal épicé|calamari in sambal piccante'],
    ] }),
    P('limapulo', 'food', 3.1565, 101.6957, FOOD, 4.4, 2700, ['food'], {
      ru: ['LimaPulo', 'Домашняя кухня баба-ньонья (перанаканская) по рецептам бабушки шефа в старом шопхаусе у Джалан Дорайсами.', 'Закажите аям понг-те и десерт пулут хитам.'],
      en: ['LimaPulo', 'Baba-Nyonya (Peranakan) home cooking from the chef’s grandmother’s recipes in an old shophouse off Jalan Doraisamy.', 'Order ayam pongteh and the pulut hitam dessert.'],
      es: ['LimaPulo', 'Cocina casera baba-nyonya (peranakan) con recetas de la abuela del chef en una vieja shophouse junto a Jalan Doraisamy.', 'Pide ayam pongteh y el postre pulut hitam.'],
      de: ['LimaPulo', 'Baba-Nyonya-(Peranakan-)Hausmannskost nach Großmutters Rezepten in einem alten Shophouse an der Jalan Doraisamy.', 'Ayam Pongteh und das Dessert Pulut Hitam bestellen.'],
      fr: ['LimaPulo', 'Cuisine familiale baba-nyonya (peranakan) d’après les recettes de la grand-mère du chef, dans une vieille shophouse près de Jalan Doraisamy.', 'Commandez l’ayam pongteh et le dessert pulut hitam.'],
      it: ['LimaPulo', 'Cucina casalinga baba-nyonya (peranakan) con le ricette della nonna dello chef, in una vecchia shophouse vicino a Jalan Doraisamy.', 'Ordina l’ayam pongteh e il dolce pulut hitam.'],
    }, { price: level(2), address: '50 Jalan Doraisamy', menu: [
      ['Ayam Pongteh', 26, 'курица, тушённая с ферментированными бобами|chicken braised with fermented beans|pollo guisado con soja fermentada|mit fermentierten Bohnen geschmortes Huhn|poulet braisé aux haricots fermentés|pollo brasato con fagioli fermentati'],
      ['Pulut Hitam', 10, 'пудинг из чёрного риса с кокосом|black rice pudding with coconut|pudin de arroz negro con coco|Schwarzreis-Pudding mit Kokos|pudding de riz noir au coco|budino di riso nero al cocco'],
    ] }),
    P('atmosphere-360', 'food', 3.1529, 101.7039, CITY, 4.2, 4800, ['food', 'views', 'romance'], {
      ru: ['Atmosphere 360', 'Вращающийся ресторан на Менара KL: буфет с малайскими и интернациональными блюдами и полный оборот над городом примерно за час.', 'Бронируйте ужин на закат — вход на башню включён в стоимость.'],
      en: ['Atmosphere 360', 'The revolving restaurant atop Menara KL: a buffet of Malaysian and international dishes and a full turn over the city in about an hour.', 'Book the sunset dinner — tower entry is included.'],
      es: ['Atmosphere 360', 'El restaurante giratorio de la Menara KL: bufé malasio e internacional y una vuelta completa sobre la ciudad en una hora.', 'Reserva la cena del atardecer: la entrada a la torre está incluida.'],
      de: ['Atmosphere 360', 'Das Drehrestaurant auf dem Menara KL: Buffet mit malaysischen und internationalen Gerichten, eine volle Runde über der Stadt in etwa einer Stunde.', 'Das Sonnenuntergangs-Dinner buchen – der Turmeintritt ist inklusive.'],
      fr: ['Atmosphere 360', 'Le restaurant tournant de la Menara KL : buffet malaisien et international, un tour complet de la ville en une heure environ.', 'Réservez le dîner au coucher du soleil : l’accès à la tour est inclus.'],
      it: ['Atmosphere 360', 'Il ristorante girevole della Menara KL: buffet malese e internazionale e un giro completo sulla città in circa un’ora.', 'Prenota la cena al tramonto: l’ingresso alla torre è incluso.'],
    }, { price: level(3), address: 'Menara KL, 2 Jalan Punchak' }),
  ],
  routes: [
    D(['=kuala-lumpur-merdeka-square', 'masjid-jamek', '=kuala-lumpur-central-market', 'kim-lian-kee', 'sri-mahamariamman', '=kuala-lumpur-kwai-chai-hong', '=kuala-lumpur-petronas-towers', '=kuala-lumpur-klcc-park', 'madam-kwans'],
      'Старый город, Чайнатаун и башни Петронас|Old town, Chinatown and the Petronas Towers|Ciudad vieja, Chinatown y las Torres Petronas|Altstadt, Chinatown und die Petronas Towers|Vieille ville, Chinatown et tours Petronas|Città vecchia, Chinatown e Torri Petronas'),
    D(['=kuala-lumpur-batu-caves', 'yut-kee', 'national-mosque', 'islamic-arts-museum', 'perdana-botanical-garden', 'kl-tower', 'dewakan'],
      'Пещеры Бату, музеи и город с телебашни|Batu Caves, museums and the view from KL Tower|Cuevas de Batu, museos y la vista desde la torre|Batu Caves, Museen und Blick vom KL Tower|Grottes de Batu, musées et vue de la tour|Grotte di Batu, musei e vista dalla torre'),
    D(['nasi-lemak-wanjo', 'kampung-baru', 'saloma-bridge', 'aquaria-klcc', '=kuala-lumpur-lot-10-hutong', 'bukit-bintang', '=kuala-lumpur-thean-hou-temple', '=kuala-lumpur-jalan-alor'],
      'Малайская деревня, Букит-Бинтанг и Джалан-Алор|Malay village, Bukit Bintang and Jalan Alor|Aldea malaya, Bukit Bintang y Jalan Alor|Malaiisches Dorf, Bukit Bintang und Jalan Alor|Village malais, Bukit Bintang et Jalan Alor|Villaggio malese, Bukit Bintang e Jalan Alor'),
  ],
};

export default pack;
