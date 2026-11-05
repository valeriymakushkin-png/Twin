import type { CityPack } from '../types';
import { free, level, makeDay, makePlace } from './_kit.ts';

const P = makePlace('split');
const D = makeDay('split');
const RIVA = 'in6bTUrbAtQ';
const CITY = 'MScg-GJ-LBs';
const VIEW = 'fX0jFyBehjk';
const SEA = 'B67EI8U7LmU';
const PALACE = 'GbBFqSZH8EM';
const FORT = 'yxa1p9QNGzA';
const FOOD = '7JK14b4oyyc';

const pack: CityPack = {
  country: 'HR',
  city: 'split',
  places: [
    P('cathedral-st-domnius', 'attraction', 43.508, 16.4405, PALACE, 4.6, 21000, ['history', 'architecture', 'views'], {
      ru: ['Собор Святого Домния и колокольня', 'Мавзолей императора Диоклетиана, ставший собором, — одно из старейших зданий, используемых как собор; с романской колокольни — вид на город и острова.', 'Подъём на колокольню крутой, но вид того стоит; комбинированный билет включает крипту и баптистерий.'],
      en: ['Cathedral of St Domnius and bell tower', 'Emperor Diocletian’s mausoleum turned cathedral — among the oldest buildings in use as one; the Romanesque bell tower looks over the city and islands.', 'The tower climb is steep but worth it; a combo ticket includes the crypt and baptistery.'],
      es: ['Catedral de San Duje y campanario', 'El mausoleo de Diocleciano convertido en catedral, de los edificios más antiguos en uso como tal; desde el campanario románico se ven la ciudad y las islas.', 'La subida es empinada pero merece la pena; la entrada combinada incluye cripta y baptisterio.'],
      de: ['Kathedrale des hl. Domnius und Glockenturm', 'Diokletians Mausoleum, zur Kathedrale geworden – eines der ältesten so genutzten Gebäude; vom romanischen Turm Blick über Stadt und Inseln.', 'Der Aufstieg ist steil, lohnt sich aber; das Kombiticket umfasst Krypta und Baptisterium.'],
      fr: ['Cathédrale Saint-Domnius et clocher', 'Le mausolée de Dioclétien devenu cathédrale, parmi les plus anciens édifices utilisés comme tel ; du clocher roman, vue sur la ville et les îles.', 'La montée est raide mais vaut la peine ; billet combiné avec crypte et baptistère.'],
      it: ['Cattedrale di San Doimo e campanile', 'Il mausoleo di Diocleziano diventato cattedrale, tra gli edifici più antichi usati come tale; dal campanile romanico vista su città e isole.', 'La salita è ripida ma ne vale la pena; il biglietto cumulativo include cripta e battistero.'],
    }, { spot: 'insta', hours: '08:00–20:00' }),
    P('temple-of-jupiter', 'attraction', 43.5085, 16.4392, PALACE, 4.4, 7600, ['history', 'architecture'], {
      ru: ['Храм Юпитера', 'Римский храм IV века внутри дворца Диоклетиана, позже ставший баптистерием; у входа — египетский сфинкс без головы.', 'Пройдите узкий переулок к храму от Перистиля — минута ходьбы.'],
      en: ['Temple of Jupiter', 'A 4th-century Roman temple inside Diocletian’s Palace, later a baptistery; a headless Egyptian sphinx guards the entrance.', 'Take the narrow lane from the Peristyle — a minute’s walk.'],
      es: ['Templo de Júpiter', 'Un templo romano del siglo IV dentro del Palacio de Diocleciano, luego baptisterio; una esfinge egipcia sin cabeza custodia la entrada.', 'Toma el estrecho callejón desde el Peristilo: un minuto a pie.'],
      de: ['Jupitertempel', 'Ein römischer Tempel aus dem 4. Jh. im Diokletianpalast, später Baptisterium; eine kopflose ägyptische Sphinx bewacht den Eingang.', 'Die schmale Gasse vom Peristyl nehmen – eine Minute zu Fuß.'],
      fr: ['Temple de Jupiter', 'Un temple romain du IVe dans le palais de Dioclétien, devenu baptistère ; un sphinx égyptien sans tête garde l’entrée.', 'Prenez la ruelle étroite depuis le péristyle, à une minute.'],
      it: ['Tempio di Giove', 'Un tempio romano del IV secolo nel Palazzo di Diocleziano, poi battistero; una sfinge egizia senza testa ne guarda l’ingresso.', 'Prendi il vicolo stretto dal Peristilio: un minuto a piedi.'],
    }, { hours: '08:00–20:00' }),
    P('gregory-of-nin', 'attraction', 43.5098, 16.4403, PALACE, 4.6, 14000, ['history', 'art', 'photo'], {
      ru: ['Статуя Григория Нинского', 'Огромная бронзовая статуя средневекового епископа работы Ивана Мештровича у Золотых ворот дворца; по поверью, потёртый большой палец приносит удачу.', 'Потрите большой палец ноги статуи — он уже отполирован до блеска.'],
      en: ['Statue of Gregory of Nin', 'Ivan Meštrović’s huge bronze of the medieval bishop by the palace’s Golden Gate; rubbing his big toe is said to bring luck.', 'Rub the statue’s big toe — it’s already polished to a shine.'],
      es: ['Estatua de Gregorio de Nin', 'El enorme bronce de Ivan Meštrović del obispo medieval junto a la Puerta Dorada; frotar su dedo gordo trae suerte, dicen.', 'Frota el dedo gordo del pie: ya brilla de tanto uso.'],
      de: ['Statue des Gregor von Nin', 'Ivan Meštrovićs riesige Bronze des mittelalterlichen Bischofs am Goldenen Tor des Palastes; den großen Zeh zu reiben bringt Glück.', 'Den großen Zeh reiben – er ist schon blank poliert.'],
      fr: ['Statue de Grégoire de Nin', 'L’immense bronze d’Ivan Meštrović de l’évêque médiéval près de la Porte d’or ; frotter son gros orteil porterait chance.', 'Frottez le gros orteil de la statue, déjà poli à force.'],
      it: ['Statua di Gregorio di Nona', 'L’enorme bronzo di Ivan Meštrović del vescovo medievale presso la Porta Aurea; strofinargli l’alluce porterebbe fortuna.', 'Strofina l’alluce della statua: è già lucidato.'],
    }, { spot: 'insta', price: free, hours: 'always' }),
    P('narodni-trg', 'attraction', 43.509, 16.438, CITY, 4.6, 12000, ['oldtown', 'city'], {
      ru: ['Народная площадь (Пьяца)', 'Главная площадь средневекового Сплита за западной стеной дворца: венецианская ратуша, кафе и белый мрамор под ногами.', 'Отсюда удобно пройти к Рыбному рынку и набережной Рива.'],
      en: ['People’s Square (Pjaca)', 'Medieval Split’s main square outside the palace’s west wall: the Venetian town hall, cafés and white marble underfoot.', 'From here it’s a short walk to the fish market and the Riva.'],
      es: ['Plaza del Pueblo (Pjaca)', 'La plaza principal del Split medieval junto a la muralla oeste: el ayuntamiento veneciano, cafés y mármol blanco.', 'Desde aquí se llega en un paso al mercado de pescado y la Riva.'],
      de: ['Volksplatz (Pjaca)', 'Der Hauptplatz des mittelalterlichen Split vor der Westmauer des Palastes: venezianisches Rathaus, Cafés und weißer Marmor.', 'Von hier kurz zum Fischmarkt und zur Riva.'],
      fr: ['Place du Peuple (Pjaca)', 'La grand-place du Split médiéval devant le mur ouest du palais : hôtel de ville vénitien, cafés et marbre blanc.', 'De là, le marché aux poissons et la Riva sont tout près.'],
      it: ['Piazza del Popolo (Pjaca)', 'La piazza principale della Spalato medievale fuori dal muro ovest del palazzo: municipio veneziano, caffè e marmo bianco.', 'Da qui si raggiungono in un attimo la pescheria e la Riva.'],
    }, { price: free, hours: 'always' }),
    P('marjan-hill', 'nature', 43.509, 16.425, VIEW, 4.8, 21000, ['nature', 'hiking', 'views'], {
      ru: ['Холм Марьян', 'Лесопарк на полуострове над городом: лестница от Варош к смотровой Видилица, тропы через сосны к старинным часовням и бухтам.', 'Возьмите воду; до вершины Телеграфа — около 40 минут подъёма.'],
      en: ['Marjan Hill', 'A forest park on the peninsula above town: steps from Varoš to the Vidilica viewpoint, pine trails to old chapels and coves.', 'Bring water; the Telegrin summit is about a 40-minute climb.'],
      es: ['Colina de Marjan', 'Un parque forestal en la península sobre la ciudad: escaleras desde Varoš al mirador Vidilica y senderos entre pinos hasta ermitas y calas.', 'Lleva agua; a la cima Telegrin hay unos 40 minutos de subida.'],
      de: ['Marjan-Hügel', 'Ein Waldpark auf der Halbinsel über der Stadt: Stufen von Varoš zum Aussichtspunkt Vidilica, Pinienpfade zu alten Kapellen und Buchten.', 'Wasser mitnehmen; zum Gipfel Telegrin etwa 40 Minuten Aufstieg.'],
      fr: ['Colline de Marjan', 'Un parc forestier sur la presqu’île au-dessus de la ville : escaliers de Varoš au belvédère Vidilica, sentiers dans les pins vers chapelles et criques.', 'Prenez de l’eau ; le sommet Telegrin est à 40 minutes de montée.'],
      it: ['Collina di Marjan', 'Un parco forestale sulla penisola sopra la città: scalinata da Varoš al belvedere Vidilica, sentieri tra i pini verso cappelle e calette.', 'Porta acqua; alla cima Telegrin circa 40 minuti di salita.'],
    }, { price: free, hours: 'always' }),
    P('bacvice', 'nature', 43.502, 16.447, SEA, 4.4, 19000, ['beaches', 'sunset'], {
      ru: ['Пляж Бачвице', 'Песчаный городской пляж с мелкой водой в 10 минутах от дворца; здесь играют в пиципин — местную игру с мячом по колено в воде.', 'Вечером на пляже бары; утром — спокойно и тихо.'],
      en: ['Bačvice Beach', 'A sandy city beach with shallow water ten minutes from the palace; locals play picigin, a ball game in knee-deep water.', 'Bars open in the evening; mornings are calm.'],
      es: ['Playa de Bačvice', 'Una playa urbana de arena con agua poco profunda a diez minutos del palacio; aquí se juega al picigin con el agua por la rodilla.', 'Por la noche abren bares; las mañanas son tranquilas.'],
      de: ['Strand Bačvice', 'Ein sandiger Stadtstrand mit flachem Wasser zehn Minuten vom Palast; Einheimische spielen Picigin, ein Ballspiel im knietiefen Wasser.', 'Abends Bars; morgens ruhig.'],
      fr: ['Plage de Bačvice', 'Une plage urbaine de sable aux eaux peu profondes à dix minutes du palais ; on y joue au picigin, jeu de balle dans l’eau jusqu’aux genoux.', 'Bars le soir ; matinées calmes.'],
      it: ['Spiaggia di Bačvice', 'Una spiaggia cittadina sabbiosa con acqua bassa a dieci minuti dal palazzo; qui si gioca a picigin, gioco di palla con l’acqua alle ginocchia.', 'La sera aprono i bar; le mattine sono tranquille.'],
    }, { price: free, hours: 'always' }),
    P('mestrovic-gallery', 'attraction', 43.507, 16.419, VIEW, 4.7, 5900, ['art', 'museums', 'gardens'], {
      ru: ['Галерея Ивана Мештровича', 'Летняя вилла великого хорватского скульптора на склоне Марьяна с садом скульптур и видом на море.', 'Билет включает часовню Каштилац с его деревянными рельефами неподалёку.'],
      en: ['Ivan Meštrović Gallery', 'The great Croatian sculptor’s summer villa on Marjan’s slope with a sculpture garden and sea view.', 'The ticket includes the nearby Kaštilac chapel with his wooden reliefs.'],
      es: ['Galería Ivan Meštrović', 'La villa de verano del gran escultor croata en la ladera del Marjan, con jardín de esculturas y vistas al mar.', 'La entrada incluye la capilla Kaštilac cercana con sus relieves de madera.'],
      de: ['Galerie Ivan Meštrović', 'Die Sommervilla des großen kroatischen Bildhauers am Marjan-Hang mit Skulpturengarten und Meerblick.', 'Das Ticket schließt die nahe Kaštilac-Kapelle mit seinen Holzreliefs ein.'],
      fr: ['Galerie Ivan Meštrović', 'La villa d’été du grand sculpteur croate sur les pentes du Marjan, jardin de sculptures et vue mer.', 'Le billet inclut la chapelle Kaštilac voisine et ses reliefs en bois.'],
      it: ['Galleria Ivan Meštrović', 'La villa estiva del grande scultore croato sulle pendici del Marjan, con giardino di sculture e vista sul mare.', 'Il biglietto include la vicina cappella Kaštilac con i suoi rilievi lignei.'],
    }, { spot: 'hidden', hours: '09:00–19:00', address: 'Šetalište Ivana Meštrovića 46' }),
    P('kasjuni', 'nature', 43.505, 16.406, SEA, 4.6, 9600, ['beaches', 'nature'], {
      ru: ['Пляж Каштюни', 'Галечный пляж с прозрачной водой у подножия Марьяна в соснах — тише и чище центральных пляжей.', 'Добирайтесь пешком через Марьян или на автобусе №12; возьмите тапочки для гальки.'],
      en: ['Kašjuni Beach', 'A pebble beach with clear water at the foot of Marjan among pines — quieter and cleaner than the central beaches.', 'Walk over Marjan or take bus 12; bring water shoes for the pebbles.'],
      es: ['Playa de Kašjuni', 'Una playa de cantos con agua cristalina al pie del Marjan entre pinos, más tranquila que las del centro.', 'Ve a pie por el Marjan o en el bus 12; lleva escarpines.'],
      de: ['Strand Kašjuni', 'Ein Kieselstrand mit klarem Wasser am Fuß des Marjan zwischen Pinien – ruhiger und sauberer als die zentralen Strände.', 'Über den Marjan laufen oder Bus 12; Badeschuhe mitnehmen.'],
      fr: ['Plage de Kašjuni', 'Une plage de galets aux eaux claires au pied du Marjan, dans les pins : plus calme que les plages du centre.', 'À pied par le Marjan ou bus 12 ; prenez des chaussures d’eau.'],
      it: ['Spiaggia di Kašjuni', 'Una spiaggia di ciottoli con acqua limpida ai piedi del Marjan tra i pini, più tranquilla di quelle del centro.', 'A piedi dal Marjan o bus 12; porta scarpette da scoglio.'],
    }, { spot: 'insta', price: free, hours: 'always' }),
    P('trogir', 'attraction', 43.5168, 16.251, CITY, 4.8, 33000, ['oldtown', 'unesco', 'history'], {
      ru: ['Трогир', 'Средневековый город на островке в 30 минутах от Сплита — объект ЮНЕСКО: собор с порталом мастера Радована, крепость Камерленго и набережная с яхтами.', 'Автобус №37 или водное такси по Рива; поднимитесь на колокольню собора.'],
      en: ['Trogir', 'A medieval island town 30 minutes from Split — UNESCO-listed: a cathedral with Master Radovan’s portal, the Kamerlengo fortress and a yacht-lined waterfront.', 'Bus 37 or a boat from the Riva; climb the cathedral bell tower.'],
      es: ['Trogir', 'Una ciudad medieval en un islote a 30 minutos de Split, Patrimonio UNESCO: catedral con el portal del maestro Radovan, fortaleza Kamerlengo y paseo con yates.', 'Bus 37 o barco desde la Riva; sube al campanario de la catedral.'],
      de: ['Trogir', 'Eine mittelalterliche Inselstadt 30 Minuten von Split – UNESCO-Welterbe: Kathedrale mit dem Portal von Meister Radovan, Festung Kamerlengo und Jachtpromenade.', 'Bus 37 oder Boot ab der Riva; auf den Glockenturm der Kathedrale steigen.'],
      fr: ['Trogir', 'Une ville médiévale sur un îlot à 30 minutes de Split, classée UNESCO : cathédrale au portail de maître Radovan, forteresse Kamerlengo et quai bordé de yachts.', 'Bus 37 ou bateau depuis la Riva ; montez au clocher de la cathédrale.'],
      it: ['Traù (Trogir)', 'Una città medievale su un isolotto a 30 minuti da Spalato, patrimonio UNESCO: cattedrale con il portale di mastro Radovan, fortezza Kamerlengo e lungomare con yacht.', 'Bus 37 o barca dalla Riva; sali sul campanile della cattedrale.'],
    }, { spot: 'insta', price: free }),
    P('salona', 'attraction', 43.539, 16.483, FORT, 4.5, 4800, ['history'], {
      ru: ['Солин (античная Салона)', 'Руины столицы римской Далмации у Сплита: амфитеатр, базилики и некрополь среди оливковых деревьев; родина Диоклетиана рядом.', 'Здесь почти никого нет — удобно совместить с крепостью Клис.'],
      en: ['Salona (Solin)', 'Ruins of the capital of Roman Dalmatia near Split: an amphitheatre, basilicas and a necropolis among olive trees; Diocletian’s homeland.', 'Almost empty — pairs well with Klis Fortress.'],
      es: ['Salona (Solin)', 'Ruinas de la capital de la Dalmacia romana junto a Split: anfiteatro, basílicas y necrópolis entre olivos; tierra de Diocleciano.', 'Casi vacío: combínalo con la fortaleza de Klis.'],
      de: ['Salona (Solin)', 'Ruinen der Hauptstadt des römischen Dalmatien bei Split: Amphitheater, Basiliken und Nekropole zwischen Olivenbäumen; Diokletians Heimat.', 'Fast menschenleer – gut mit der Festung Klis kombinierbar.'],
      fr: ['Salone (Solin)', 'Les ruines de la capitale de la Dalmatie romaine près de Split : amphithéâtre, basiliques et nécropole parmi les oliviers ; terre natale de Dioclétien.', 'Presque désert ; à combiner avec la forteresse de Klis.'],
      it: ['Salona (Solin)', 'Le rovine della capitale della Dalmazia romana vicino a Spalato: anfiteatro, basiliche e necropoli tra gli ulivi; terra di Diocleziano.', 'Quasi deserto: abbinalo alla fortezza di Clissa.'],
    }, { spot: 'hidden', hours: '09:00–19:00' }),

    P('zoi', 'food', 43.5076, 16.4397, PALACE, 4.6, 2600, ['food', 'views', 'romance'], {
      ru: ['ZOI', 'Ресторан в стенах дворца Диоклетиана над набережной Рива с террасой: средиземноморская кухня из далматинских продуктов.', 'Просите столик на террасе с видом на Рива; бронируйте заранее.'],
      en: ['ZOI', 'A restaurant set in Diocletian’s Palace walls above the Riva with a terrace: Mediterranean cooking from Dalmatian produce.', 'Ask for a terrace table over the Riva; book ahead.'],
      es: ['ZOI', 'Un restaurante en las murallas del Palacio de Diocleciano sobre la Riva, con terraza: cocina mediterránea con producto dálmata.', 'Pide mesa en la terraza sobre la Riva; reserva.'],
      de: ['ZOI', 'Ein Restaurant in den Mauern des Diokletianpalasts über der Riva mit Terrasse: Mittelmeerküche aus dalmatinischen Produkten.', 'Nach einem Terrassentisch über der Riva fragen; reservieren.'],
      fr: ['ZOI', 'Un restaurant dans les murs du palais de Dioclétien au-dessus de la Riva, avec terrasse : cuisine méditerranéenne de produits dalmates.', 'Demandez une table en terrasse sur la Riva ; réservez.'],
      it: ['ZOI', 'Un ristorante nelle mura del Palazzo di Diocleziano sopra la Riva, con terrazza: cucina mediterranea con prodotti dalmati.', 'Chiedi un tavolo in terrazza sulla Riva; prenota.'],
    }, { price: level(3), address: 'Obala Hrvatskog narodnog preporoda 23', menu: [
      ['Adriatic fish', undefined, 'адриатическая рыба|Adriatic fish|pescado del Adriático|Adriafisch|poisson de l’Adriatique|pesce dell’Adriatico'],
      ['Tasting menu', undefined, 'дегустационный сет|tasting menu|menú degustación|Degustationsmenü|menu dégustation|menù degustazione'],
    ] }),
    P('bokeria', 'food', 43.5089, 16.4375, CITY, 4.6, 6900, ['food', 'wine'], {
      ru: ['Bokeria Kitchen & Wine', 'Шумный бистро-бар в старом городе в стиле рынка: далматинские продукты, паста, морепродукты и хорватские вина.', 'Вечером бронируйте; хорошая винная карта хорватских вин по бокалам.'],
      en: ['Bokeria Kitchen & Wine', 'A buzzy market-style bistro-bar in the old town: Dalmatian produce, pasta, seafood and Croatian wines.', 'Book for dinner; good Croatian wines by the glass.'],
      es: ['Bokeria Kitchen & Wine', 'Un animado bistró-bar estilo mercado en el casco antiguo: producto dálmata, pasta, marisco y vinos croatas.', 'Reserva para cenar; buenos vinos croatas por copas.'],
      de: ['Bokeria Kitchen & Wine', 'Ein lebhaftes Bistro im Marktstil in der Altstadt: dalmatinische Produkte, Pasta, Meeresfrüchte und kroatische Weine.', 'Abends reservieren; gute kroatische Weine glasweise.'],
      fr: ['Bokeria Kitchen & Wine', 'Un bistrot animé façon marché dans la vieille ville : produits dalmates, pâtes, fruits de mer et vins croates.', 'Réservez le soir ; bons vins croates au verre.'],
      it: ['Bokeria Kitchen & Wine', 'Un vivace bistrot in stile mercato nella città vecchia: prodotti dalmati, pasta, frutti di mare e vini croati.', 'Prenota la cena; buoni vini croati al calice.'],
    }, { price: level(2), address: 'Domaldova 8', menu: [
      ['Seafood pasta', undefined, 'паста с морепродуктами|seafood pasta|pasta con marisco|Pasta mit Meeresfrüchten|pâtes aux fruits de mer|pasta ai frutti di mare'],
      ['Croatian wine', undefined, 'хорватское вино по бокалам|Croatian wine by the glass|vino croata por copas|kroatischer Wein glasweise|vin croate au verre|vino croato al calice'],
    ] }),
    P('bobis', 'food', 43.508, 16.439, CITY, 4.3, 3900, ['food', 'streetfood'], {
      ru: ['Bobis (пекарня)', 'Местная сеть пекарен: бурек с сыром или мясом, круассаны и выпечка — так завтракают сплитчане.', 'Бурек с йогуртом — классический быстрый завтрак.'],
      en: ['Bobis (bakery)', 'A local bakery chain: burek with cheese or meat, croissants and pastries — how Split residents breakfast.', 'Burek with yoghurt is the classic quick breakfast.'],
      es: ['Bobis (panadería)', 'Una cadena local de panaderías: burek de queso o carne, cruasanes y bollería, así desayuna Split.', 'Burek con yogur: el desayuno rápido clásico.'],
      de: ['Bobis (Bäckerei)', 'Eine lokale Bäckereikette: Burek mit Käse oder Fleisch, Croissants und Gebäck – so frühstückt Split.', 'Burek mit Joghurt ist das klassische schnelle Frühstück.'],
      fr: ['Bobis (boulangerie)', 'Une chaîne locale de boulangeries : burek au fromage ou à la viande, croissants et viennoiseries, le petit-déjeuner des Splitois.', 'Burek et yaourt, le petit-déjeuner rapide classique.'],
      it: ['Bobis (panetteria)', 'Una catena locale di panetterie: burek al formaggio o alla carne, cornetti e dolci, la colazione di Spalato.', 'Burek con yogurt: la classica colazione veloce.'],
    }, { price: level(1), address: 'Marmontova', menu: [
      ['Burek sa sirom', undefined, 'слоёный пирог с сыром|cheese burek|burek de queso|Käse-Burek|burek au fromage|burek al formaggio'],
      ['Jogurt', undefined, 'питьевой йогурт|drinking yoghurt|yogur líquido|Trinkjoghurt|yaourt à boire|yogurt da bere'],
    ] }),
    P('uje-oil-bar', 'food', 43.5085, 16.4373, CITY, 4.6, 3600, ['food', 'wine'], {
      ru: ['Uje Oil Bar', 'Бар далматинского оливкового масла в старом городе: дегустации масел, закуски — сыр, прошутто, анчоусы — и местные вина.', 'Закажите дегустацию 3–4 масел с хлебом — хороший перекус.'],
      en: ['Uje Oil Bar', 'A Dalmatian olive-oil bar in the old town: oil tastings, small plates — cheese, prosciutto, anchovies — and local wines.', 'Order a tasting of 3–4 oils with bread — a great snack.'],
      es: ['Uje Oil Bar', 'Un bar de aceite de oliva dálmata en el casco antiguo: catas de aceite, tapas —queso, prosciutto, anchoas— y vinos locales.', 'Pide una cata de 3–4 aceites con pan: buen tentempié.'],
      de: ['Uje Oil Bar', 'Eine dalmatinische Olivenölbar in der Altstadt: Ölverkostungen, kleine Teller – Käse, Pršut, Sardellen – und lokale Weine.', 'Eine Probe von 3–4 Ölen mit Brot bestellen – ein guter Snack.'],
      fr: ['Uje Oil Bar', 'Un bar à huile d’olive dalmate dans la vieille ville : dégustations d’huiles, petites assiettes, fromage, prosciutto, anchois, et vins locaux.', 'Prenez une dégustation de 3–4 huiles avec du pain : en-cas parfait.'],
      it: ['Uje Oil Bar', 'Un bar dell’olio dalmata nella città vecchia: degustazioni di oli, piattini, formaggio, prosciutto, acciughe, e vini locali.', 'Ordina una degustazione di 3–4 oli con pane: ottimo spuntino.'],
    }, { price: level(2), address: 'Dominisova 3', menu: [
      ['Olive oil tasting', undefined, 'дегустация оливковых масел|olive oil tasting|cata de aceites|Olivenölverkostung|dégustation d’huiles d’olive|degustazione di oli'],
      ['Pršut and cheese', undefined, 'далматинский прошутто и сыр|Dalmatian prosciutto and cheese|jamón dálmata y queso|dalmatinischer Pršut und Käse|jambon dalmate et fromage|prosciutto dalmata e formaggio'],
    ] }),
    P('konoba-matejuska', 'food', 43.5083, 16.433, SEA, 4.6, 5400, ['food'], {
      ru: ['Konoba Matejuška', 'Маленькая коноба у рыбацкой гавани Матеюшка: рыба на гриле, осьминожий салат и чёрное ризотто.', 'Мест мало — бронируйте; рыбу дня выбирают с подноса.'],
      en: ['Konoba Matejuška', 'A small konoba by the Matejuška fishing harbour: grilled fish, octopus salad and black risotto.', 'Few tables — book; pick the fish of the day from the tray.'],
      es: ['Konoba Matejuška', 'Una pequeña konoba junto al puerto pesquero de Matejuška: pescado a la parrilla, ensalada de pulpo y risotto negro.', 'Pocas mesas: reserva; el pescado del día se elige de la bandeja.'],
      de: ['Konoba Matejuška', 'Eine kleine Konoba am Fischerhafen Matejuška: gegrillter Fisch, Oktopussalat und schwarzes Risotto.', 'Wenige Tische – reservieren; den Tagesfisch vom Tablett wählen.'],
      fr: ['Konoba Matejuška', 'Une petite konoba près du port de pêche de Matejuška : poisson grillé, salade de poulpe et risotto noir.', 'Peu de tables : réservez ; choisissez le poisson du jour sur le plateau.'],
      it: ['Konoba Matejuška', 'Una piccola konoba vicino al porticciolo di Matejuška: pesce alla griglia, insalata di polpo e risotto nero.', 'Pochi tavoli: prenota; il pesce del giorno si sceglie dal vassoio.'],
    }, { price: level(2), address: 'Tomića stine 3', menu: [
      ['Grilled fish', undefined, 'рыба на гриле|grilled fish|pescado a la parrilla|gegrillter Fisch|poisson grillé|pesce alla griglia'],
      ['Octopus salad', undefined, 'салат с осьминогом|octopus salad|ensalada de pulpo|Oktopussalat|salade de poulpe|insalata di polpo'],
    ] }),
    P('luka-ice-cream', 'food', 43.509, 16.437, CITY, 4.7, 4900, ['food'], {
      ru: ['Luka Ice Cream & Cakes', 'Мороженое и пирожные с необычными вкусами — инжир, лаванда, оливковое масло — из местных продуктов.', 'Попробуйте шарик с инжиром или лавандой.'],
      en: ['Luka Ice Cream & Cakes', 'Ice cream and cakes in unusual flavours — fig, lavender, olive oil — from local produce.', 'Try a scoop of fig or lavender.'],
      es: ['Luka Ice Cream & Cakes', 'Helados y pasteles de sabores insólitos —higo, lavanda, aceite de oliva— con producto local.', 'Prueba una bola de higo o lavanda.'],
      de: ['Luka Ice Cream & Cakes', 'Eis und Kuchen in ungewöhnlichen Sorten – Feige, Lavendel, Olivenöl – aus lokalen Zutaten.', 'Eine Kugel Feige oder Lavendel probieren.'],
      fr: ['Luka Ice Cream & Cakes', 'Glaces et gâteaux aux parfums originaux, figue, lavande, huile d’olive, de produits locaux.', 'Goûtez une boule figue ou lavande.'],
      it: ['Luka Ice Cream & Cakes', 'Gelati e dolci dai gusti insoliti, fico, lavanda, olio d’oliva, con prodotti locali.', 'Prova una pallina al fico o alla lavanda.'],
    }, { price: level(1), address: 'Svačićeva 2', menu: [
      ['Fig ice cream', undefined, 'мороженое с инжиром|fig ice cream|helado de higo|Feigeneis|glace à la figue|gelato al fico'],
      ['Lavender ice cream', undefined, 'мороженое с лавандой|lavender ice cream|helado de lavanda|Lavendeleis|glace à la lavande|gelato alla lavanda'],
    ] }),
    P('brasserie-on-7', 'food', 43.5074, 16.4382, RIVA, 4.4, 4100, ['food', 'views'], {
      ru: ['Brasserie on 7', 'Брассери прямо на набережной Рива: завтраки, салаты, паста и рыба с видом на гавань и паромы.', 'Хорошо для позднего завтрака или бокала вина на закате.'],
      en: ['Brasserie on 7', 'A brasserie right on the Riva: breakfasts, salads, pasta and fish with views of the harbour and ferries.', 'Good for a late breakfast or a sunset glass of wine.'],
      es: ['Brasserie on 7', 'Una brasserie en plena Riva: desayunos, ensaladas, pasta y pescado con vistas al puerto y los ferris.', 'Bien para un desayuno tardío o una copa al atardecer.'],
      de: ['Brasserie on 7', 'Eine Brasserie direkt an der Riva: Frühstück, Salate, Pasta und Fisch mit Blick auf Hafen und Fähren.', 'Gut für ein spätes Frühstück oder ein Glas Wein zum Sonnenuntergang.'],
      fr: ['Brasserie on 7', 'Une brasserie sur la Riva : petits-déjeuners, salades, pâtes et poisson face au port et aux ferries.', 'Idéal pour un brunch ou un verre au coucher du soleil.'],
      it: ['Brasserie on 7', 'Una brasserie sulla Riva: colazioni, insalate, pasta e pesce con vista sul porto e i traghetti.', 'Ottima per una colazione tardi o un calice al tramonto.'],
    }, { price: level(2), address: 'Obala Hrvatskog narodnog preporoda 7', menu: [
      ['Breakfast', undefined, 'завтрак|breakfast|desayuno|Frühstück|petit-déjeuner|colazione'],
      ['Grilled fish', undefined, 'рыба на гриле|grilled fish|pescado a la parrilla|gegrillter Fisch|poisson grillé|pesce alla griglia'],
    ] }),
    P('kantun-paulina', 'food', 43.5089, 16.4361, CITY, 4.7, 5200, ['food', 'streetfood'], {
      ru: ['Kantun Paulina', 'Крошечная закусочная в старом городе с чевапи в лепёшке «лепинья» с айваром и луком — дёшево и сытно.', 'Возьмите малую порцию чевапи с айваром — хватит на обед.'],
      en: ['Kantun Paulina', 'A tiny old-town counter serving ćevapi in lepinja flatbread with ajvar and onion — cheap and filling.', 'A small ćevapi with ajvar is enough for lunch.'],
      es: ['Kantun Paulina', 'Un diminuto mostrador del casco viejo con ćevapi en pan lepinja con ajvar y cebolla: barato y contundente.', 'Una ración pequeña de ćevapi con ajvar basta para comer.'],
      de: ['Kantun Paulina', 'Eine winzige Theke in der Altstadt mit Ćevapi im Lepinja-Fladen mit Ajvar und Zwiebeln – günstig und sättigend.', 'Eine kleine Portion Ćevapi mit Ajvar reicht fürs Mittagessen.'],
      fr: ['Kantun Paulina', 'Un minuscule comptoir de la vieille ville : ćevapi en pain lepinja, ajvar et oignon, pas cher et copieux.', 'Une petite portion de ćevapi à l’ajvar suffit pour déjeuner.'],
      it: ['Kantun Paulina', 'Un minuscolo bancone nella città vecchia con ćevapi nel pane lepinja con ajvar e cipolla: economico e saziante.', 'Una porzione piccola di ćevapi con ajvar basta per pranzo.'],
    }, { price: level(1), address: 'Matošića 1', menu: [
      ['Ćevapi u lepinji', undefined, 'колбаски из фарша в лепёшке с айваром|minced-meat sausages in flatbread with ajvar|ćevapi en pan con ajvar|Ćevapi im Fladenbrot mit Ajvar|ćevapi en galette à l’ajvar|ćevapi nel pane con ajvar'],
      ['Pljeskavica', undefined, 'балканская котлета в лепёшке|Balkan burger in flatbread|hamburguesa balcánica en pan|Balkan-Burger im Fladenbrot|burger des Balkans en galette|burger balcanico nel pane'],
    ] }),
    P('konoba-hvaranin', 'food', 43.5088, 16.4345, CITY, 4.6, 3100, ['food'], {
      ru: ['Konoba Hvaranin', 'Семейная таверна, где готовят по рецептам острова Хвар: паштицада, григада, рыбный «брудет» и домашнее вино.', 'Попросите «брудет» — далматинское рыбное рагу с полентой.'],
      en: ['Konoba Hvaranin', 'A family tavern cooking to Hvar island recipes: pašticada, grilled fish, brudet fish stew and house wine.', 'Ask for brudet — Dalmatian fish stew with polenta.'],
      es: ['Konoba Hvaranin', 'Una taberna familiar con recetas de la isla de Hvar: pašticada, pescado a la brasa, brudet y vino de la casa.', 'Pide el brudet, guiso dálmata de pescado con polenta.'],
      de: ['Konoba Hvaranin', 'Eine Familientaverne mit Rezepten der Insel Hvar: Pašticada, gegrillter Fisch, Fischeintopf Brudet und Hauswein.', 'Nach Brudet fragen – dalmatinischer Fischeintopf mit Polenta.'],
      fr: ['Konoba Hvaranin', 'Une taverne familiale aux recettes de l’île de Hvar : pašticada, poisson grillé, brudet et vin maison.', 'Demandez le brudet, ragoût dalmate de poisson et polenta.'],
      it: ['Konoba Hvaranin', 'Un’osteria di famiglia con ricette dell’isola di Lesina: pašticada, pesce alla griglia, brodetto e vino della casa.', 'Chiedi il brodetto dalmata di pesce con polenta.'],
    }, { price: level(2), address: 'Ban Mladenova 9', menu: [
      ['Brudet', undefined, 'далматинское рыбное рагу с полентой|Dalmatian fish stew with polenta|guiso de pescado dálmata con polenta|dalmatinischer Fischeintopf mit Polenta|ragoût de poisson dalmate et polenta|brodetto dalmata con polenta'],
      ['Pašticada', undefined, 'говядина, томлённая в вине и черносливе|beef braised in wine and prunes|ternera estofada al vino con ciruelas|Rinderschmorbraten in Wein und Pflaumen|bœuf braisé au vin et pruneaux|manzo brasato al vino e prugne'],
    ] }),
    P('dvor', 'food', 43.504, 16.46, SEA, 4.6, 3400, ['food', 'views', 'romance'], {
      ru: ['Dvor', 'Ресторан в саду над морем в районе Фируле: средиземноморская кухня, сосны и вид на остров Брач на закате.', 'Бронируйте столик у моря на закат; рядом — пляж Бачвице.'],
      en: ['Dvor', 'A garden restaurant above the sea in Firule: Mediterranean cooking, pines and a sunset view of Brač island.', 'Book a seaside table for sunset; Bačvice beach is nearby.'],
      es: ['Dvor', 'Un restaurante con jardín sobre el mar en Firule: cocina mediterránea, pinos y vistas a la isla de Brač al atardecer.', 'Reserva mesa junto al mar al atardecer; cerca está Bačvice.'],
      de: ['Dvor', 'Ein Gartenrestaurant über dem Meer in Firule: Mittelmeerküche, Pinien und Sonnenuntergang über Brač.', 'Einen Tisch am Meer zum Sonnenuntergang buchen; der Strand Bačvice ist nah.'],
      fr: ['Dvor', 'Un restaurant-jardin au-dessus de la mer à Firule : cuisine méditerranéenne, pins et coucher de soleil sur l’île de Brač.', 'Réservez une table face à la mer au couchant ; plage de Bačvice tout près.'],
      it: ['Dvor', 'Un ristorante-giardino sul mare a Firule: cucina mediterranea, pini e tramonto sull’isola di Brazza.', 'Prenota un tavolo sul mare al tramonto; vicino la spiaggia di Bačvice.'],
    }, { price: level(3), address: 'Put Firula 14', menu: [
      ['Fish of the day', undefined, 'рыба дня|fish of the day|pescado del día|Fisch des Tages|poisson du jour|pesce del giorno'],
      ['Black risotto', undefined, 'чёрное ризотто с каракатицей|black cuttlefish risotto|risotto negro de sepia|schwarzes Sepiarisotto|risotto noir à la seiche|risotto nero di seppia'],
    ] }),
  ],
  routes: [
    D(['bobis', '=split-diocletians-palace', '=split-peristyle', 'cathedral-st-domnius', 'temple-of-jupiter', 'gregory-of-nin', 'kantun-paulina', 'narodni-trg', 'zoi'],
      'Дворец Диоклетиана и старый город|Diocletian’s Palace and the old town|El Palacio de Diocleciano y el casco antiguo|Diokletianpalast und Altstadt|Le palais de Dioclétien et la vieille ville|Il Palazzo di Diocleziano e la città vecchia'),
    D(['=split-vidilica', 'marjan-hill', 'mestrovic-gallery', 'kasjuni', 'konoba-matejuska', 'luka-ice-cream', '=split-riva-promenade', 'bokeria'],
      'Холм Марьян, Мештрович и пляж Каштюни|Marjan Hill, Meštrović and Kašjuni beach|Colina de Marjan, Meštrović y la playa Kašjuni|Marjan, Meštrović und Strand Kašjuni|Colline de Marjan, Meštrović et plage de Kašjuni|Collina di Marjan, Meštrović e spiaggia di Kašjuni'),
    D(['=split-klis-fortress', 'salona', 'trogir', 'konoba-hvaranin', 'bacvice', 'dvor'],
      'Крепость Клис, Салона и Трогир|Klis Fortress, Salona and Trogir|La fortaleza de Klis, Salona y Trogir|Festung Klis, Salona und Trogir|Forteresse de Klis, Salone et Trogir|Fortezza di Clissa, Salona e Traù'),
  ],
};

export default pack;
