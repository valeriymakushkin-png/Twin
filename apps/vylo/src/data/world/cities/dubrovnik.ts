import type { CityPack } from '../types';
import { free, level, makeDay, makePlace } from './_kit.ts';

const P = makePlace('dubrovnik');
const D = makeDay('dubrovnik');
const WALLS = 'wB8HlOlUfI4';
const VIEW = 'RvDc461s1EI';
const STREET = 'QkEL0HqhPJo';
const MARKET = '2LYaM3bf2KI';
const OLD = 'vqXJDFrXdQ8';
const SEA = 'r_oGgTE4OEs';
const CLIFF = 'w3qXq7g-wcA';

const pack: CityPack = {
  country: 'HR',
  city: 'dubrovnik',
  places: [
    P('rectors-palace', 'attraction', 42.6403, 18.1105, OLD, 4.5, 11000, ['history', 'architecture', 'museums'], {
      ru: ['Княжеский дворец', 'Готико-ренессансный дворец ректоров Дубровницкой республики с аркадным двором; сегодня — Культурно-исторический музей.', 'Летом во дворе проходят концерты Дубровницкого фестиваля.'],
      en: ['Rector’s Palace', 'The Gothic-Renaissance palace of the Republic of Ragusa’s rectors with an arcaded courtyard; today the Cultural History Museum.', 'In summer the courtyard hosts Dubrovnik Summer Festival concerts.'],
      es: ['Palacio del Rector', 'El palacio gótico-renacentista de los rectores de la República de Ragusa con patio porticado; hoy, Museo de Historia Cultural.', 'En verano el patio acoge conciertos del Festival de Dubrovnik.'],
      de: ['Rektorenpalast', 'Der gotisch-renaissancezeitliche Palast der Rektoren der Republik Ragusa mit Arkadenhof; heute Kulturhistorisches Museum.', 'Im Sommer Konzerte des Festivals im Innenhof.'],
      fr: ['Palais des Recteurs', 'Le palais gothico-Renaissance des recteurs de la République de Raguse et sa cour à arcades ; aujourd’hui musée d’histoire culturelle.', 'L’été, la cour accueille des concerts du festival de Dubrovnik.'],
      it: ['Palazzo dei Rettori', 'Il palazzo gotico-rinascimentale dei rettori della Repubblica di Ragusa con cortile porticato; oggi Museo di storia culturale.', 'D’estate il cortile ospita i concerti del Festival di Dubrovnik.'],
    }, { hours: '09:00–18:00' }),
    P('franciscan-monastery', 'attraction', 42.642, 18.1074, OLD, 4.5, 9600, ['history', 'architecture'], {
      ru: ['Францисканский монастырь', 'Монастырь у ворот Пиле с романским клуатром и одной из старейших действующих аптек Европы (1317).', 'Купите в аптеке кремы по старинным монастырским рецептам.'],
      en: ['Franciscan Monastery', 'A monastery by the Pile Gate with a Romanesque cloister and one of Europe’s oldest working pharmacies (1317).', 'Buy creams made to old monastic recipes in the pharmacy.'],
      es: ['Monasterio Franciscano', 'Un monasterio junto a la Puerta de Pile con claustro románico y una de las farmacias en funcionamiento más antiguas de Europa (1317).', 'Compra cremas de recetas monásticas en la farmacia.'],
      de: ['Franziskanerkloster', 'Ein Kloster am Pile-Tor mit romanischem Kreuzgang und einer der ältesten noch tätigen Apotheken Europas (1317).', 'In der Apotheke Cremes nach alten Klosterrezepten kaufen.'],
      fr: ['Monastère franciscain', 'Un monastère près de la porte Pile avec cloître roman et l’une des plus vieilles pharmacies en activité d’Europe (1317).', 'Achetez des crèmes aux recettes monastiques à la pharmacie.'],
      it: ['Monastero francescano', 'Un monastero presso Porta Pile con chiostro romanico e una delle farmacie più antiche d’Europa ancora attive (1317).', 'Compra creme da antiche ricette monastiche in farmacia.'],
    }, { hours: '09:00–18:00', address: 'Placa 2' }),
    P('cathedral', 'attraction', 42.64, 18.1102, OLD, 4.5, 8200, ['history', 'art'], {
      ru: ['Собор Вознесения Девы Марии', 'Барочный собор, построенный после землетрясения 1667 года; в сокровищнице — реликварии святого Влаха, покровителя города.', 'Вход бесплатный; сокровищница по билету.'],
      en: ['Cathedral of the Assumption', 'A Baroque cathedral built after the 1667 earthquake; its treasury holds reliquaries of St Blaise, the city’s patron.', 'Entry is free; the treasury is ticketed.'],
      es: ['Catedral de la Asunción', 'Una catedral barroca construida tras el terremoto de 1667; su tesoro guarda relicarios de San Blas, patrón de la ciudad.', 'Entrada gratuita; el tesoro es de pago.'],
      de: ['Kathedrale Mariä Himmelfahrt', 'Eine Barockkathedrale nach dem Erdbeben von 1667; die Schatzkammer birgt Reliquiare des hl. Blasius, des Stadtpatrons.', 'Eintritt frei; Schatzkammer kostet.'],
      fr: ['Cathédrale de l’Assomption', 'Une cathédrale baroque bâtie après le séisme de 1667 ; son trésor abrite les reliquaires de saint Blaise, patron de la ville.', 'Entrée libre ; trésor payant.'],
      it: ['Cattedrale dell’Assunta', 'Una cattedrale barocca costruita dopo il terremoto del 1667; il tesoro custodisce i reliquiari di San Biagio, patrono della città.', 'Ingresso gratuito; il tesoro è a pagamento.'],
    }, { price: free }),
    P('sponza-palace', 'attraction', 42.6413, 18.1103, STREET, 4.6, 6400, ['history', 'architecture'], {
      ru: ['Дворец Спонза', 'Дворец XVI века — бывшая таможня и монетный двор, переживший землетрясение 1667 года; внутри — Государственный архив и мемориал защитникам города.', 'Двор открыт бесплатно — загляните с площади Лужа.'],
      en: ['Sponza Palace', 'A 16th-century palace — the former customs house and mint — that survived the 1667 earthquake; it houses the State Archives and a memorial to the city’s defenders.', 'The courtyard is free — step in from Luža Square.'],
      es: ['Palacio Sponza', 'Un palacio del siglo XVI —antigua aduana y casa de la moneda— que sobrevivió al terremoto de 1667; alberga el Archivo Estatal y un memorial a los defensores.', 'El patio es gratis: entra desde la plaza Luža.'],
      de: ['Sponza-Palast', 'Ein Palast aus dem 16. Jh. – einst Zollhaus und Münze –, der das Erdbeben von 1667 überstand; heute Staatsarchiv und Gedenkraum für die Verteidiger.', 'Der Hof ist frei – vom Luža-Platz aus hineingehen.'],
      fr: ['Palais Sponza', 'Un palais du XVIe — ancienne douane et hôtel des monnaies — qui a survécu au séisme de 1667 ; il abrite les Archives d’État et un mémorial aux défenseurs.', 'La cour est libre d’accès depuis la place Luža.'],
      it: ['Palazzo Sponza', 'Un palazzo del Cinquecento, ex dogana e zecca, sopravvissuto al terremoto del 1667; ospita l’Archivio di Stato e un memoriale ai difensori.', 'Il cortile è gratuito: entra da piazza Luža.'],
    }, { price: free }),
    P('dominican-monastery', 'attraction', 42.6424, 18.1112, OLD, 4.6, 3100, ['history', 'art', 'gardens'], {
      ru: ['Доминиканский монастырь', 'Монастырь у ворот Плоче с готическим клуатром среди апельсиновых деревьев и музеем картин дубровницкой школы, включая Тициана.', 'Тихое место, мало кто доходит; хороший перерыв от толп Страдуна.'],
      en: ['Dominican Monastery', 'A monastery by the Ploče Gate with a Gothic cloister among orange trees and a museum of Dubrovnik-school painting, including a Titian.', 'Quiet and little visited — a break from the Stradun crowds.'],
      es: ['Monasterio Dominico', 'Un monasterio junto a la Puerta de Ploče con claustro gótico entre naranjos y un museo de pintura de la escuela de Dubrovnik, con un Tiziano.', 'Tranquilo y poco visitado: un respiro del Stradun.'],
      de: ['Dominikanerkloster', 'Ein Kloster am Ploče-Tor mit gotischem Kreuzgang zwischen Orangenbäumen und einem Museum der Dubrovniker Malschule samt Tizian.', 'Ruhig und wenig besucht – eine Pause vom Trubel der Stradun.'],
      fr: ['Monastère dominicain', 'Un monastère près de la porte Ploče, cloître gothique parmi les orangers et musée de peinture de l’école de Dubrovnik, dont un Titien.', 'Calme et peu fréquenté : une pause loin du Stradun.'],
      it: ['Monastero domenicano', 'Un monastero presso Porta Ploče con chiostro gotico tra gli aranci e un museo di pittura della scuola di Dubrovnik, con un Tiziano.', 'Tranquillo e poco visitato: una pausa dalla folla dello Stradun.'],
    }, { spot: 'hidden', hours: '09:00–18:00' }),
    P('war-photo-limited', 'attraction', 42.6413, 18.1086, STREET, 4.8, 3900, ['history', 'museums', 'art'], {
      ru: ['Галерея War Photo Limited', 'Галерея военной фотожурналистики в старом городе, включая постоянную экспозицию о войне в Югославии и осаде Дубровника 1991–1992 годов.', 'Тяжёлая, но сильная выставка — заложите час.'],
      en: ['War Photo Limited', 'A gallery of war photojournalism in the old town, including a permanent exhibit on the Yugoslav wars and the 1991–92 siege of Dubrovnik.', 'Heavy but powerful — allow an hour.'],
      es: ['War Photo Limited', 'Una galería de fotoperiodismo de guerra en el casco antiguo, con una exposición permanente sobre las guerras yugoslavas y el asedio de 1991–92.', 'Dura pero potente: dedica una hora.'],
      de: ['War Photo Limited', 'Eine Galerie für Kriegsfotojournalismus in der Altstadt mit Dauerausstellung zu den Jugoslawienkriegen und der Belagerung 1991–92.', 'Schwer, aber eindrucksvoll – eine Stunde einplanen.'],
      fr: ['War Photo Limited', 'Une galerie de photojournalisme de guerre dans la vieille ville, avec une exposition permanente sur les guerres de Yougoslavie et le siège de 1991–92.', 'Éprouvant mais fort ; comptez une heure.'],
      it: ['War Photo Limited', 'Una galleria di fotogiornalismo di guerra nella città vecchia, con una mostra permanente sulle guerre jugoslave e l’assedio del 1991–92.', 'Dura ma potente: calcola un’ora.'],
    }, { hours: '10:00–22:00', address: 'Antuninska 6' }),
    P('cavtat', 'nature', 42.581, 18.218, SEA, 4.7, 9800, ['beaches', 'oldtown', 'views'], {
      ru: ['Цавтат', 'Тихий городок на полуострове в 20 км к югу: набережная с пальмами, мавзолей Рачича работы Мештровича и тропа вокруг мыса с купанием со скал.', 'Самый красивый путь — на катере из старой гавани Дубровника (около 45 минут).'],
      en: ['Cavtat', 'A quiet peninsula town 20 km south: a palm-lined waterfront, Meštrović’s Račić Mausoleum and a cape path with rock swimming.', 'The prettiest way there is by boat from Dubrovnik’s old harbour (about 45 minutes).'],
      es: ['Cavtat', 'Un tranquilo pueblo en una península a 20 km al sur: paseo con palmeras, el mausoleo Račić de Meštrović y un sendero por el cabo con baño en rocas.', 'Lo más bonito es llegar en barco desde el puerto viejo (unos 45 minutos).'],
      de: ['Cavtat', 'Ein ruhiges Halbinselstädtchen 20 km südlich: Palmenpromenade, Meštrovićs Račić-Mausoleum und ein Kapweg mit Baden von den Felsen.', 'Am schönsten per Boot ab Dubrovniks Althafen (etwa 45 Minuten).'],
      fr: ['Cavtat', 'Une paisible petite ville sur une presqu’île à 20 km au sud : front de mer aux palmiers, mausolée Račić de Meštrović et sentier du cap avec baignade dans les rochers.', 'Le plus beau est d’y aller en bateau depuis le vieux port (environ 45 minutes).'],
      it: ['Cavtat', 'Una tranquilla cittadina su una penisola a 20 km a sud: lungomare con palme, il mausoleo Račić di Meštrović e un sentiero sul capo con bagni dagli scogli.', 'Il modo più bello è in barca dal porto vecchio (circa 45 minuti).'],
    }, { spot: 'hidden', price: free }),
    P('lopud', 'nature', 42.683, 17.94, SEA, 4.7, 5200, ['beaches', 'islands'], {
      ru: ['Остров Лопуд (Элафиты)', 'Безмашинный остров Элафитского архипелага: монастырь, тропа через холм к песчаному пляжу Шунь с мелкой бирюзовой водой.', 'Паром «Jadrolinija» из порта Груж идёт около часа; от причала до Шуня — 30 минут пешком.'],
      en: ['Lopud (Elaphiti Islands)', 'A car-free Elaphiti island: a monastery and a path over the hill to Šunj, a sandy beach with shallow turquoise water.', 'The Jadrolinija ferry from Gruž takes about an hour; Šunj is a 30-minute walk from the dock.'],
      es: ['Lopud (islas Elafiti)', 'Una isla sin coches de las Elafiti: un monasterio y un sendero por la colina hasta Šunj, playa de arena con agua turquesa poco profunda.', 'El ferry de Jadrolinija desde Gruž tarda una hora; Šunj está a 30 minutos a pie.'],
      de: ['Lopud (Elaphiten)', 'Eine autofreie Elaphiten-Insel: ein Kloster und ein Weg über den Hügel zum Sandstrand Šunj mit flachem türkisem Wasser.', 'Die Jadrolinija-Fähre ab Gruž braucht etwa eine Stunde; Šunj liegt 30 Gehminuten vom Hafen.'],
      fr: ['Lopud (îles Élaphites)', 'Une île sans voitures des Élaphites : un monastère et un chemin par la colline jusqu’à Šunj, plage de sable aux eaux turquoise peu profondes.', 'Le ferry Jadrolinija depuis Gruž met environ une heure ; Šunj est à 30 minutes à pied du port.'],
      it: ['Lopud (isole Elafiti)', 'Un’isola senz’auto delle Elafiti: un monastero e un sentiero sulla collina fino a Šunj, spiaggia di sabbia con acqua turchese bassa.', 'Il traghetto Jadrolinija da Gruž impiega circa un’ora; Šunj è a 30 minuti a piedi dal molo.'],
    }, { spot: 'insta' }),
    P('ston-walls', 'attraction', 42.838, 17.698, WALLS, 4.7, 7600, ['history', 'hiking', 'views'], {
      ru: ['Стены Стона', 'Оборонительные стены XIV века длиной более 5 км — одни из самых длинных в Европе — над соляными промыслами в часе езды от Дубровника.', 'Подъём по стенам крутой — идите утром; потом попробуйте устриц Мали-Стона.'],
      en: ['Walls of Ston', '14th-century defensive walls over 5 km long — among Europe’s longest — above the salt pans an hour from Dubrovnik.', 'The wall climb is steep — go in the morning; then try Mali Ston oysters.'],
      es: ['Murallas de Ston', 'Murallas del siglo XIV de más de 5 km, de las más largas de Europa, sobre las salinas a una hora de Dubrovnik.', 'La subida es empinada: ve por la mañana; luego prueba las ostras de Mali Ston.'],
      de: ['Mauern von Ston', 'Verteidigungsmauern aus dem 14. Jh., über 5 km lang – unter den längsten Europas – über den Salinen, eine Stunde von Dubrovnik.', 'Der Aufstieg ist steil – morgens gehen; danach Austern aus Mali Ston.'],
      fr: ['Murailles de Ston', 'Des remparts du XIVe siècle de plus de 5 km, parmi les plus longs d’Europe, au-dessus des salines à une heure de Dubrovnik.', 'La montée est raide, allez-y le matin ; puis goûtez les huîtres de Mali Ston.'],
      it: ['Mura di Ston', 'Mura difensive del Trecento lunghe oltre 5 km, tra le più lunghe d’Europa, sopra le saline a un’ora da Dubrovnik.', 'La salita è ripida: vai al mattino; poi assaggia le ostriche di Mali Ston.'],
    }, { spot: 'insta', hours: '08:00–19:00' }),
    P('trsteno-arboretum', 'nature', 42.712, 17.975, VIEW, 4.5, 4300, ['gardens', 'nature'], {
      ru: ['Дендропарк Трстено', 'Ренессансный сад дубровницкой знати XV века над морем: аллеи, фонтан Нептуна, акведук и экзотические деревья; здесь снимали сады Королевской Гавани.', 'Хорошо совместить с поездкой в Стон — он по пути.'],
      en: ['Trsteno Arboretum', 'A 15th-century Renaissance garden of Ragusan nobles above the sea: avenues, a Neptune fountain, an aqueduct and exotic trees; used as King’s Landing gardens on screen.', 'Pair it with the trip to Ston — it’s on the way.'],
      es: ['Arboreto de Trsteno', 'Un jardín renacentista del siglo XV de la nobleza ragusea sobre el mar: paseos, fuente de Neptuno, acueducto y árboles exóticos; se rodaron aquí los jardines de Desembarco del Rey.', 'Combínalo con Ston: está de camino.'],
      de: ['Arboretum Trsteno', 'Ein Renaissancegarten des Ragusaner Adels aus dem 15. Jh. über dem Meer: Alleen, Neptunbrunnen, Aquädukt und exotische Bäume; Drehort der Gärten von Königsmund.', 'Mit dem Ausflug nach Ston verbinden – liegt auf dem Weg.'],
      fr: ['Arboretum de Trsteno', 'Un jardin Renaissance du XVe de la noblesse ragusaine au-dessus de la mer : allées, fontaine de Neptune, aqueduc et arbres exotiques ; décor des jardins de Port-Réal.', 'À combiner avec Ston, sur la route.'],
      it: ['Arboreto di Trsteno', 'Un giardino rinascimentale del Quattrocento della nobiltà ragusea sul mare: viali, fontana di Nettuno, acquedotto e alberi esotici; set dei giardini di Approdo del Re.', 'Abbinalo a Ston: è sulla strada.'],
    }, { hours: '08:00–19:00' }),

    P('restaurant-360', 'food', 42.6418, 18.1115, WALLS, 4.6, 1700, ['food', 'luxury', 'views', 'romance'], {
      ru: ['360 Dubrovnik', 'Ресторан высокой кухни прямо на городских стенах над старой гаванью: столы на крепостной стене и вид на закат.', 'Просите столик на стене у края; бронируйте за несколько недель летом.'],
      en: ['360 Dubrovnik', 'A fine-dining restaurant right on the city walls above the old harbour: tables on the rampart and sunset views.', 'Ask for a wall-edge table; book weeks ahead in summer.'],
      es: ['360 Dubrovnik', 'Un restaurante de alta cocina sobre las murallas, encima del puerto viejo: mesas en la muralla y vistas al atardecer.', 'Pide mesa al borde de la muralla; en verano reserva con semanas.'],
      de: ['360 Dubrovnik', 'Ein Fine-Dining-Restaurant direkt auf der Stadtmauer über dem Althafen: Tische auf dem Wall und Blick in den Sonnenuntergang.', 'Nach einem Tisch an der Mauerkante fragen; im Sommer Wochen vorher buchen.'],
      fr: ['360 Dubrovnik', 'Un restaurant gastronomique sur les remparts au-dessus du vieux port : tables sur la muraille et vue au couchant.', 'Demandez une table au bord du rempart ; l’été, réservez des semaines avant.'],
      it: ['360 Dubrovnik', 'Un ristorante gourmet sulle mura sopra il porto vecchio: tavoli sul bastione e vista al tramonto.', 'Chiedi un tavolo sul bordo delle mura; d’estate prenota settimane prima.'],
    }, { price: level(3), address: 'Ul. Svetog Dominika bb', menu: [
      ['Tasting menu', undefined, 'дегустационный сет|tasting menu|menú degustación|Degustationsmenü|menu dégustation|menù degustazione'],
      ['Adriatic fish', undefined, 'адриатическая рыба|Adriatic fish|pescado del Adriático|Adriafisch|poisson de l’Adriatique|pesce dell’Adriatico'],
    ] }),
    P('nautika', 'food', 42.6415, 18.1048, WALLS, 4.5, 2400, ['food', 'views', 'romance'], {
      ru: ['Nautika', 'Ресторан у ворот Пиле с террасами над морем и видом на крепости Ловриенац и Бокар: адриатическая рыба и далматинские вина.', 'Лучшие столики — на нижней террасе на закате; бронируйте.'],
      en: ['Nautika', 'A restaurant by the Pile Gate with terraces over the sea facing the Lovrijenac and Bokar forts: Adriatic fish and Dalmatian wines.', 'The best tables are on the lower terrace at sunset; book ahead.'],
      es: ['Nautika', 'Un restaurante junto a la Puerta de Pile con terrazas sobre el mar frente a los fuertes Lovrijenac y Bokar: pescado del Adriático y vinos dálmatas.', 'Las mejores mesas, en la terraza baja al atardecer; reserva.'],
      de: ['Nautika', 'Ein Restaurant am Pile-Tor mit Terrassen über dem Meer und Blick auf die Festungen Lovrijenac und Bokar: Adriafisch und dalmatinische Weine.', 'Die besten Tische auf der unteren Terrasse zum Sonnenuntergang; reservieren.'],
      fr: ['Nautika', 'Un restaurant près de la porte Pile, terrasses sur la mer face aux forts Lovrijenac et Bokar : poissons de l’Adriatique et vins dalmates.', 'Les meilleures tables sur la terrasse basse au couchant ; réservez.'],
      it: ['Nautika', 'Un ristorante presso Porta Pile con terrazze sul mare di fronte ai forti Lovrijenac e Bokar: pesce dell’Adriatico e vini dalmati.', 'I tavoli migliori sulla terrazza bassa al tramonto; prenota.'],
    }, { price: level(3), address: 'Brsalje 3', menu: [
      ['Grilled Adriatic fish', undefined, 'адриатическая рыба на гриле|grilled Adriatic fish|pescado del Adriático a la parrilla|gegrillter Adriafisch|poisson de l’Adriatique grillé|pesce dell’Adriatico alla griglia'],
      ['Ston oysters', undefined, 'устрицы из Стона|Ston oysters|ostras de Ston|Austern aus Ston|huîtres de Ston|ostriche di Ston'],
    ] }),
    P('taj-mahal', 'food', 42.6405, 18.109, MARKET, 4.6, 6900, ['food'], {
      ru: ['Taj Mahal', 'Боснийская кухня в старом городе: чевапи, бурек, «бегова чорба» и долма в уютном зале с восточными коврами.', 'Порции большие — берите чевапи с лепёшкой и каймаком на двоих.'],
      en: ['Taj Mahal', 'Bosnian cooking in the old town: ćevapi, burek, begova čorba soup and dolma in a cosy room with oriental rugs.', 'Portions are big — share ćevapi with flatbread and kajmak.'],
      es: ['Taj Mahal', 'Cocina bosnia en el casco antiguo: ćevapi, burek, sopa begova čorba y dolma en un salón acogedor con alfombras orientales.', 'Raciones grandes: comparte ćevapi con pan y kajmak.'],
      de: ['Taj Mahal', 'Bosnische Küche in der Altstadt: Ćevapi, Burek, Begova-Čorba-Suppe und Dolma in einem gemütlichen Raum mit Orientteppichen.', 'Große Portionen – Ćevapi mit Fladenbrot und Kajmak teilen.'],
      fr: ['Taj Mahal', 'Cuisine bosnienne dans la vieille ville : ćevapi, burek, soupe begova čorba et dolma dans une salle chaleureuse aux tapis orientaux.', 'Grosses portions : partagez ćevapi, galette et kajmak.'],
      it: ['Taj Mahal', 'Cucina bosniaca nella città vecchia: ćevapi, burek, zuppa begova čorba e dolma in una sala accogliente con tappeti orientali.', 'Porzioni grandi: dividi ćevapi con pane e kajmak.'],
    }, { price: level(2), address: 'Nikole Gučetića 2', menu: [
      ['Ćevapi', undefined, 'колбаски из фарша с лепёшкой и луком|minced-meat sausages with flatbread and onion|ćevapi con pan y cebolla|Ćevapi mit Fladenbrot und Zwiebeln|ćevapi, galette et oignons|ćevapi con pane e cipolla'],
      ['Begova čorba', undefined, 'боснийский суп с курицей и окрой|Bosnian chicken and okra soup|sopa bosnia de pollo y okra|bosnische Hühner-Okra-Suppe|soupe bosnienne au poulet et gombo|zuppa bosniaca di pollo e okra'],
    ] }),
    P('dubravka-1836', 'food', 42.642, 18.1046, WALLS, 4.3, 5600, ['food', 'views'], {
      ru: ['Dubravka 1836', 'Кафе-ресторан на площадке у ворот Пиле с террасой над морем и видом на крепость Ловриенац: завтраки, пицца, рыба.', 'Хорошо для завтрака с видом до начала прогулки по стенам.'],
      en: ['Dubravka 1836', 'A café-restaurant by the Pile Gate with a sea terrace facing Lovrijenac Fortress: breakfasts, pizza and fish.', 'Good for a breakfast with a view before walking the walls.'],
      es: ['Dubravka 1836', 'Un café-restaurante junto a la Puerta de Pile con terraza sobre el mar frente a Lovrijenac: desayunos, pizza y pescado.', 'Bien para desayunar con vistas antes de recorrer las murallas.'],
      de: ['Dubravka 1836', 'Ein Café-Restaurant am Pile-Tor mit Meeresterrasse gegenüber der Festung Lovrijenac: Frühstück, Pizza und Fisch.', 'Gut für ein Frühstück mit Aussicht vor der Mauerrunde.'],
      fr: ['Dubravka 1836', 'Un café-restaurant près de la porte Pile, terrasse sur la mer face à Lovrijenac : petits-déjeuners, pizzas et poisson.', 'Idéal pour un petit-déjeuner avec vue avant les remparts.'],
      it: ['Dubravka 1836', 'Un caffè-ristorante presso Porta Pile con terrazza sul mare di fronte al Lovrijenac: colazioni, pizza e pesce.', 'Ottimo per colazione con vista prima delle mura.'],
    }, { price: level(2), address: 'Brsalje 1', menu: [
      ['Breakfast', undefined, 'завтрак с видом на море|breakfast with a sea view|desayuno con vistas al mar|Frühstück mit Meerblick|petit-déjeuner vue mer|colazione vista mare'],
      ['Black risotto', undefined, 'чёрное ризотто с каракатицей|black cuttlefish risotto|risotto negro de sepia|schwarzes Sepiarisotto|risotto noir à la seiche|risotto nero di seppia'],
    ] }),
    P('barba', 'food', 42.641, 18.108, STREET, 4.6, 4700, ['food', 'streetfood'], {
      ru: ['Barba', 'Маленький бар рыбного стритфуда в старом городе: бургер с осьминогом, жареные креветки и анчоусы в бумажном кульке.', 'Попробуйте фирменный осьминог-бургер — недорогой обед в дорогом городе.'],
      en: ['Barba', 'A small seafood street-food bar in the old town: octopus burger, fried shrimp and anchovies in a paper cone.', 'Try the signature octopus burger — an affordable lunch in a pricey town.'],
      es: ['Barba', 'Un pequeño bar de street food marinero en el casco antiguo: hamburguesa de pulpo, gambas y boquerones fritos en cucurucho.', 'Prueba la hamburguesa de pulpo: comida asequible en una ciudad cara.'],
      de: ['Barba', 'Eine kleine Seafood-Streetfood-Bar in der Altstadt: Oktopusburger, frittierte Garnelen und Sardellen in der Papiertüte.', 'Den Oktopusburger probieren – ein günstiges Mittagessen in einer teuren Stadt.'],
      fr: ['Barba', 'Un petit bar de street food marine dans la vieille ville : burger au poulpe, crevettes et anchois frits en cornet.', 'Goûtez le burger au poulpe signature, un déjeuner abordable dans une ville chère.'],
      it: ['Barba', 'Un piccolo bar di street food di mare nella città vecchia: burger di polpo, gamberi e alici fritte nel cartoccio.', 'Prova il burger di polpo: un pranzo economico in una città cara.'],
    }, { price: level(1), address: 'Boškovićeva 5', menu: [
      ['Octopus burger', undefined, 'бургер с осьминогом|octopus burger|hamburguesa de pulpo|Oktopusburger|burger au poulpe|burger di polpo'],
      ['Fried anchovies', undefined, 'жареные анчоусы в кульке|fried anchovies in a cone|boquerones fritos en cucurucho|frittierte Sardellen in der Tüte|anchois frits en cornet|alici fritte nel cartoccio'],
    ] }),
    P('azur', 'food', 42.6397, 18.112, OLD, 4.6, 3600, ['food'], {
      ru: ['Azur', 'Ресторан на тихой улочке у южной стены: азиатско-средиземноморская кухня — пельмени, карри, тартар из тунца.', 'Хорошая смена далматинской кухни; столики на ступенях — бронируйте.'],
      en: ['Azur', 'A restaurant on a quiet lane by the southern wall: Asian-Mediterranean cooking — dumplings, curries, tuna tartare.', 'A nice change from Dalmatian food; tables sit on the steps — book.'],
      es: ['Azur', 'Un restaurante en una callejuela tranquila junto a la muralla sur: cocina asiático-mediterránea, dumplings, currys y tartar de atún.', 'Un buen cambio de la cocina dálmata; mesas en la escalinata: reserva.'],
      de: ['Azur', 'Ein Restaurant in einer ruhigen Gasse an der Südmauer: asiatisch-mediterrane Küche – Dumplings, Currys, Thunfischtatar.', 'Eine schöne Abwechslung zur dalmatinischen Küche; Tische auf den Stufen – reservieren.'],
      fr: ['Azur', 'Un restaurant dans une ruelle tranquille près du rempart sud : cuisine asiatico-méditerranéenne, raviolis, currys, tartare de thon.', 'Un bon changement de la cuisine dalmate ; tables sur les marches, réservez.'],
      it: ['Azur', 'Un ristorante in un vicolo tranquillo presso le mura sud: cucina asiatico-mediterranea, ravioli, curry, tartare di tonno.', 'Un bel cambio dalla cucina dalmata; tavoli sui gradini, prenota.'],
    }, { price: level(2), address: 'Pobijana 10', menu: [
      ['Dumplings', undefined, 'азиатские пельмени|Asian dumplings|dumplings asiáticos|asiatische Teigtaschen|raviolis asiatiques|ravioli asiatici'],
      ['Tuna tartare', undefined, 'тартар из тунца|tuna tartare|tartar de atún|Thunfischtatar|tartare de thon|tartare di tonno'],
    ] }),
    P('dolce-vita', 'food', 42.6412, 18.108, STREET, 4.5, 4200, ['food'], {
      ru: ['Dolce Vita', 'Кафе-мороженое в переулке у Страдуна с большим выбором вкусов и далматинскими сладостями.', 'Возьмите шарик мороженого и прогуляйтесь по Страдуну.'],
      en: ['Dolce Vita', 'A gelateria in a lane off the Stradun with a long list of flavours and Dalmatian sweets.', 'Get a scoop and stroll the Stradun.'],
      es: ['Dolce Vita', 'Una heladería en una callejuela junto al Stradun con muchos sabores y dulces dálmatas.', 'Coge una bola y pasea por el Stradun.'],
      de: ['Dolce Vita', 'Eine Eisdiele in einer Gasse an der Stradun mit vielen Sorten und dalmatinischen Süßigkeiten.', 'Eine Kugel nehmen und die Stradun entlangschlendern.'],
      fr: ['Dolce Vita', 'Un glacier dans une ruelle près du Stradun, nombreux parfums et douceurs dalmates.', 'Prenez une boule et flânez sur le Stradun.'],
      it: ['Dolce Vita', 'Una gelateria in un vicolo vicino allo Stradun con tanti gusti e dolci dalmati.', 'Prendi una pallina e passeggia sullo Stradun.'],
    }, { price: level(1), address: 'Nalješkovićeva 1A', menu: [
      ['Gelato', undefined, 'мороженое на выбор|gelato of your choice|helado a elegir|Eis nach Wahl|glace au choix|gelato a scelta'],
      ['Rožata', undefined, 'дубровницкий крем-карамель|Dubrovnik custard pudding|flan de Dubrovnik|Dubrovniker Karamellpudding|crème caramel de Dubrovnik|rožata di Dubrovnik'],
    ] }),
    P('bota-sare', 'food', 42.8387, 17.6985, MARKET, 4.5, 3900, ['food', 'views'], {
      ru: ['Bota Šare (Стон)', 'Ресторан в Стоне у подножия стен, где подают устриц и мидий из соседнего залива Мали-Стон.', 'Устрицы Мали-Стона лучше всего с осени по весну; после — прогулка по стенам.'],
      en: ['Bota Šare (Ston)', 'A Ston restaurant below the walls serving oysters and mussels from neighbouring Mali Ston bay.', 'Mali Ston oysters are best from autumn to spring; walk the walls afterwards.'],
      es: ['Bota Šare (Ston)', 'Un restaurante de Ston al pie de las murallas con ostras y mejillones de la bahía de Mali Ston.', 'Las ostras de Mali Ston son mejores de otoño a primavera; después, las murallas.'],
      de: ['Bota Šare (Ston)', 'Ein Restaurant in Ston unter den Mauern mit Austern und Muscheln aus der Bucht von Mali Ston.', 'Austern aus Mali Ston am besten von Herbst bis Frühling; danach auf die Mauern.'],
      fr: ['Bota Šare (Ston)', 'Un restaurant de Ston au pied des remparts servant huîtres et moules de la baie de Mali Ston.', 'Les huîtres de Mali Ston sont meilleures de l’automne au printemps ; puis les remparts.'],
      it: ['Bota Šare (Ston)', 'Un ristorante a Ston sotto le mura con ostriche e cozze della baia di Mali Ston.', 'Le ostriche di Mali Ston sono migliori da autunno a primavera; poi le mura.'],
    }, { price: level(2), address: 'Ston', menu: [
      ['Mali Ston oysters', undefined, 'устрицы Мали-Стона|Mali Ston oysters|ostras de Mali Ston|Austern aus Mali Ston|huîtres de Mali Ston|ostriche di Mali Ston'],
      ['Mussels buzara', undefined, 'мидии в белом вине с чесноком|mussels in white wine and garlic|mejillones a la buzara|Muscheln Buzara in Weißwein und Knoblauch|moules buzara au vin blanc et ail|cozze alla buzara'],
    ] }),
    P('konoba-dubrava', 'food', 42.656, 18.118, VIEW, 4.6, 3100, ['food', 'views'], {
      ru: ['Konoba Dubrava', 'Деревенская таверна в Босанке у горы Срдж: телятина и осьминог «пéка» — томлёные под железным колпаком в углях.', 'Пеку надо заказать заранее (готовится ~2 часа); удобно после заката на Срдже.'],
      en: ['Konoba Dubrava', 'A village tavern in Bosanka near Mount Srđ: veal and octopus “peka” — slow-cooked under an iron bell in embers.', 'Order the peka in advance (about two hours); handy after sunset on Srđ.'],
      es: ['Konoba Dubrava', 'Una taberna de pueblo en Bosanka junto al monte Srđ: ternera y pulpo a la “peka”, cocinados bajo campana de hierro en las brasas.', 'Pide la peka con antelación (unas dos horas); ideal tras el atardecer en Srđ.'],
      de: ['Konoba Dubrava', 'Eine Dorftaverne in Bosanka am Srđ: Kalb und Oktopus „Peka“ – unter einer Eisenglocke in Glut geschmort.', 'Peka vorab bestellen (etwa zwei Stunden); praktisch nach dem Sonnenuntergang am Srđ.'],
      fr: ['Konoba Dubrava', 'Une taverne de village à Bosanka près du mont Srđ : veau et poulpe « peka », mijotés sous cloche de fer dans les braises.', 'Commandez la peka à l’avance (environ deux heures) ; pratique après le coucher de soleil sur le Srđ.'],
      it: ['Konoba Dubrava', 'Un’osteria di paese a Bosanka vicino al monte Srđ: vitello e polpo “peka”, cotti lentamente sotto una campana di ferro nella brace.', 'Ordina la peka in anticipo (circa due ore); comoda dopo il tramonto sul Srđ.'],
    }, { price: level(2), address: 'Bosanka', menu: [
      ['Veal peka', undefined, 'телятина с картофелем под колпаком|veal and potatoes under the bell|ternera con patatas a la peka|Kalb mit Kartoffeln unter der Glocke|veau et pommes de terre sous cloche|vitello e patate sotto la campana'],
      ['Octopus peka', undefined, 'осьминог под колпаком|octopus under the bell|pulpo a la peka|Oktopus unter der Glocke|poulpe sous cloche|polpo sotto la campana'],
    ] }),
    P('pantarul', 'food', 42.662, 18.078, SEA, 4.6, 2400, ['food'], {
      ru: ['Pantarul', 'Бистро в районе Лапад, куда ходят местные: современная далматинская кухня из продуктов рынка, домашний хлеб.', 'Хорошо, если живёте в Лападе; бронируйте ужин.'],
      en: ['Pantarul', 'A Lapad bistro where locals eat: modern Dalmatian cooking from market produce and homemade bread.', 'Handy if you stay in Lapad; book for dinner.'],
      es: ['Pantarul', 'Un bistró en Lapad donde comen los locales: cocina dálmata moderna con producto de mercado y pan casero.', 'Práctico si te alojas en Lapad; reserva para cenar.'],
      de: ['Pantarul', 'Ein Bistro in Lapad, in dem Einheimische essen: moderne dalmatinische Küche vom Markt und hausgemachtes Brot.', 'Praktisch, wenn man in Lapad wohnt; abends reservieren.'],
      fr: ['Pantarul', 'Un bistrot de Lapad fréquenté par les habitants : cuisine dalmate moderne du marché et pain maison.', 'Pratique si vous logez à Lapad ; réservez le soir.'],
      it: ['Pantarul', 'Un bistrot a Lapad frequentato dai locali: cucina dalmata moderna con prodotti del mercato e pane fatto in casa.', 'Comodo se alloggi a Lapad; prenota a cena.'],
    }, { price: level(2), address: 'Kralja Tomislava 1', menu: [
      ['Pašticada', undefined, 'далматинская говядина, томлённая в вине и черносливе|Dalmatian beef braised in wine and prunes|pašticada dálmata|dalmatinischer Schmorbraten in Wein und Pflaumen|bœuf braisé dalmate au vin et pruneaux|pašticada dalmata'],
      ['Homemade bread', undefined, 'домашний хлеб|homemade bread|pan casero|hausgemachtes Brot|pain maison|pane fatto in casa'],
    ] }),
  ],
  routes: [
    D(['=dubrovnik-city-walls', '=dubrovnik-fort-lovrijenac', 'franciscan-monastery', '=dubrovnik-stradun', 'barba', 'rectors-palace', 'cathedral', '=dubrovnik-buza-bar', 'restaurant-360'],
      'Стены, Страдун и закат в Буже|The walls, the Stradun and sunset at Buža|Las murallas, el Stradun y atardecer en Buža|Mauern, Stradun und Sonnenuntergang in der Buža|Les remparts, le Stradun et le couchant à Buža|Le mura, lo Stradun e il tramonto al Buža'),
    D(['dubravka-1836', '=dubrovnik-lokrum', 'taj-mahal', 'sponza-palace', 'war-photo-limited', 'dominican-monastery', '=dubrovnik-mount-srd', 'konoba-dubrava'],
      'Остров Локрум, старый город и гора Срдж|Lokrum, the old town and Mount Srđ|Lokrum, el casco antiguo y el monte Srđ|Lokrum, Altstadt und Srđ|Lokrum, la vieille ville et le mont Srđ|Lokrum, la città vecchia e il monte Srđ'),
    D(['trsteno-arboretum', 'ston-walls', 'bota-sare', '=dubrovnik-banje-beach', 'dolce-vita', 'nautika'],
      'Трстено, стены и устрицы Стона, пляж Баня|Trsteno, Ston’s walls and oysters, Banje beach|Trsteno, las murallas y ostras de Ston, playa Banje|Trsteno, Mauern und Austern von Ston, Banje-Strand|Trsteno, remparts et huîtres de Ston, plage de Banje|Trsteno, mura e ostriche di Ston, spiaggia di Banje'),
  ],
};

export default pack;
