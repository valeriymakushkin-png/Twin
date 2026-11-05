import type { CityPack } from '../types';
import { fixed, free, level, makeDay, makePlace } from './_kit.ts';

const P = makePlace('hanoi');
const D = makeDay('hanoi');
const CITY = '9yZXHpXOqXs';
const CAFE = 'XZyRED8aWgU';
const FOOD = 'UtbUQWxElVs';
const CITADEL = 'sPYdUvB5-KA';
const LAKE = '1HMVwLwjIVU';
const TEMPLE = 'gf9TIp5JQKw';

const pack: CityPack = {
  country: 'VN',
  city: 'hanoi',
  places: [
    P('ho-chi-minh-mausoleum', 'attraction', 21.0368, 105.8346, CITADEL, 4.5, 26400, ['history', 'architecture'], {
      ru: ['Мавзолей Хо Ши Мина', 'Строгий гранитный мавзолей на площади Бадинь, где в 1945 году была провозглашена независимость Вьетнама; рядом дом на сваях, где жил Хо Ши Мин.', 'Открыт только утром и не каждый день; одежда закрытая, фотографировать внутри нельзя.'],
      en: ['Ho Chi Minh Mausoleum', 'A stern granite mausoleum on Ba Dinh Square, where Vietnam’s independence was declared in 1945; nearby is the stilt house where Ho Chi Minh lived.', 'Open mornings only and not every day; cover up, and no photos inside.'],
      es: ['Mausoleo de Ho Chi Minh', 'Un sobrio mausoleo de granito en la plaza Ba Dinh, donde se proclamó la independencia en 1945; cerca está la casa sobre pilotes de Ho Chi Minh.', 'Solo abre por la mañana y no todos los días; ropa que cubra y sin fotos dentro.'],
      de: ['Ho-Chi-Minh-Mausoleum', 'Ein strenges Granitmausoleum am Ba-Dinh-Platz, wo 1945 die Unabhängigkeit ausgerufen wurde; daneben das Pfahlhaus, in dem Ho Chi Minh lebte.', 'Nur vormittags und nicht täglich geöffnet; bedeckte Kleidung, drinnen keine Fotos.'],
      fr: ['Mausolée de Hô Chi Minh', 'Un austère mausolée de granit sur la place Ba Dinh, où l’indépendance fut proclamée en 1945 ; tout près, la maison sur pilotis de Hô Chi Minh.', 'Ouvert le matin seulement et pas tous les jours ; tenue couvrante, pas de photos à l’intérieur.'],
      it: ['Mausoleo di Ho Chi Minh', 'Un severo mausoleo di granito in piazza Ba Dinh, dove nel 1945 fu proclamata l’indipendenza; vicino c’è la casa su palafitte di Ho Chi Minh.', 'Apre solo al mattino e non tutti i giorni; vestiti coprenti e niente foto dentro.'],
    }, { price: free, hours: '07:30–10:30' }),
    P('one-pillar-pagoda', 'attraction', 21.0359, 105.8336, TEMPLE, 4.3, 14200, ['temples', 'history'], {
      ru: ['Пагода на одном столбе', 'Крошечное святилище XI века в виде цветка лотоса на единственной колонне посреди пруда — один из символов Ханоя.', 'Совместите с мавзолеем: пагода в пяти минутах ходьбы.'],
      en: ['One Pillar Pagoda', 'A tiny 11th-century shrine shaped like a lotus on a single column in a pond — one of Hanoi’s symbols.', 'Pair it with the mausoleum, five minutes’ walk away.'],
      es: ['Pagoda del Pilar Único', 'Un diminuto santuario del siglo XI con forma de loto sobre una sola columna en un estanque, símbolo de Hanói.', 'Combínala con el mausoleo, a cinco minutos a pie.'],
      de: ['Einsäulenpagode', 'Ein winziger Schrein aus dem 11. Jahrhundert in Form einer Lotusblüte auf einer einzigen Säule im Teich – ein Wahrzeichen Hanois.', 'Mit dem Mausoleum verbinden, fünf Gehminuten entfernt.'],
      fr: ['Pagode au Pilier unique', 'Un minuscule sanctuaire du XIe siècle en forme de lotus sur une seule colonne au milieu d’un bassin, emblème de Hanoï.', 'À combiner avec le mausolée, à cinq minutes à pied.'],
      it: ['Pagoda a pilastro unico', 'Un minuscolo santuario dell’XI secolo a forma di loto su una sola colonna in uno stagno, simbolo di Hanoi.', 'Abbinala al mausoleo, a cinque minuti a piedi.'],
    }, { price: free }),
    P('tran-quoc-pagoda', 'attraction', 21.048, 105.8368, TEMPLE, 4.5, 16800, ['temples', 'sunset', 'lakes'], {
      ru: ['Пагода Чанкуок', 'Старейшая пагода Ханоя (VI век) на островке Западного озера: 11-ярусная красная башня отражается в воде.', 'Лучший свет — на закате с дамбы Тханьньен.'],
      en: ['Tran Quoc Pagoda', 'Hanoi’s oldest pagoda (6th century) on an islet in West Lake, its 11-tier red tower mirrored in the water.', 'Best light is at sunset from Thanh Nien causeway.'],
      es: ['Pagoda Tran Quoc', 'La pagoda más antigua de Hanói (siglo VI), en un islote del Lago del Oeste; su torre roja de 11 pisos se refleja en el agua.', 'La mejor luz es al atardecer desde la calzada Thanh Nien.'],
      de: ['Tran-Quoc-Pagode', 'Hanois älteste Pagode (6. Jahrhundert) auf einer Insel im Westsee; der rote elfstöckige Turm spiegelt sich im Wasser.', 'Das schönste Licht gibt es bei Sonnenuntergang vom Thanh-Nien-Damm.'],
      fr: ['Pagode Tran Quoc', 'La plus ancienne pagode de Hanoï (VIe siècle), sur un îlot du lac de l’Ouest ; sa tour rouge à 11 niveaux se reflète dans l’eau.', 'Plus belle lumière au coucher du soleil depuis la digue Thanh Nien.'],
      it: ['Pagoda Tran Quoc', 'La pagoda più antica di Hanoi (VI secolo), su un isolotto del Lago dell’Ovest; la torre rossa a 11 piani si specchia nell’acqua.', 'Luce migliore al tramonto dalla diga Thanh Nien.'],
    }, { spot: 'insta', price: free }),
    P('hoa-lo-prison', 'attraction', 21.0253, 105.8466, CITADEL, 4.5, 21600, ['history', 'museums'], {
      ru: ['Тюрьма Хоало', 'Французская колониальная тюрьма, позже — «Ханой Хилтон» для американских лётчиков; сегодня сильный музей о двух эпохах.', 'Возьмите аудиогид — без него многое ускользает.'],
      en: ['Hoa Lo Prison', 'A French colonial jail, later the “Hanoi Hilton” for American pilots; today a powerful museum of both eras.', 'Get the audio guide — much is lost without it.'],
      es: ['Prisión de Hoa Lo', 'Una cárcel colonial francesa, luego el “Hanoi Hilton” de pilotos estadounidenses; hoy un museo impactante de ambas épocas.', 'Coge la audioguía: sin ella se pierde mucho.'],
      de: ['Hoa-Lo-Gefängnis', 'Ein französisches Kolonialgefängnis, später das „Hanoi Hilton“ für US-Piloten; heute ein eindringliches Museum beider Epochen.', 'Den Audioguide nehmen – ohne ihn entgeht vieles.'],
      fr: ['Prison de Hoa Lo', 'Une prison coloniale française, puis le « Hanoi Hilton » des pilotes américains ; aujourd’hui un musée saisissant sur les deux époques.', 'Prenez l’audioguide, indispensable.'],
      it: ['Prigione di Hoa Lo', 'Un carcere coloniale francese, poi l’“Hanoi Hilton” dei piloti americani; oggi un museo intenso sulle due epoche.', 'Prendi l’audioguida: senza si perde molto.'],
    }, { price: fixed(50000, 'VND'), hours: '08:00–17:00', address: '1 Hoa Lo' }),
    P('museum-of-ethnology', 'attraction', 21.0405, 105.7985, CITY, 4.6, 9100, ['museums', 'culture'], {
      ru: ['Музей этнологии Вьетнама', 'Лучший музей страны о 54 народах Вьетнама: в саду стоят настоящие дома — общинный дом банар, гробницы джарай и длинный дом эде.', 'Отведите минимум два часа; в понедельник закрыто.'],
      en: ['Vietnam Museum of Ethnology', 'The country’s best museum on Vietnam’s 54 peoples; real houses stand in its garden — a Bahnar communal house, Jarai tombs and an Ede longhouse.', 'Allow at least two hours; closed Mondays.'],
      es: ['Museo de Etnología de Vietnam', 'El mejor museo del país sobre sus 54 pueblos; en el jardín hay casas reales: una casa comunal bahnar, tumbas jarai y una casa larga ede.', 'Dedica al menos dos horas; cierra los lunes.'],
      de: ['Völkerkundemuseum Vietnam', 'Das beste Museum über Vietnams 54 Völker; im Garten stehen echte Häuser – ein Bahnar-Gemeinschaftshaus, Jarai-Gräber und ein Ede-Langhaus.', 'Mindestens zwei Stunden einplanen; montags geschlossen.'],
      fr: ['Musée d’ethnographie du Vietnam', 'Le meilleur musée du pays sur ses 54 peuples ; dans le jardin, de vraies maisons : maison commune bahnar, tombes jarai, maison longue ede.', 'Comptez au moins deux heures ; fermé le lundi.'],
      it: ['Museo di etnologia del Vietnam', 'Il miglior museo del paese sui suoi 54 popoli; in giardino ci sono case vere: casa comune bahnar, tombe jarai e casa lunga ede.', 'Calcola almeno due ore; chiuso il lunedì.'],
    }, { price: fixed(40000, 'VND'), hours: '08:30–17:30' }),
    P('st-josephs-cathedral', 'attraction', 21.0287, 105.8489, CITY, 4.4, 15900, ['architecture', 'history'], {
      ru: ['Собор Святого Иосифа', 'Неоготический собор 1886 года, похожий на Нотр-Дам, с кафе вокруг площади, где пьют чай с лимоном на маленьких табуретках.', 'Посидите с «чя чань» (чай с лимоном) напротив входа — это ханойский ритуал.'],
      en: ['St Joseph’s Cathedral', 'An 1886 neo-Gothic cathedral that echoes Notre-Dame, ringed by cafés where locals sip lemon tea on tiny stools.', 'Sit with a trà chanh (lemon tea) facing the doors — a Hanoi ritual.'],
      es: ['Catedral de San José', 'Una catedral neogótica de 1886 que recuerda a Notre-Dame, rodeada de cafés donde se toma té con limón en taburetes diminutos.', 'Siéntate con un trà chanh frente a la puerta: un ritual de Hanói.'],
      de: ['St.-Josephs-Kathedrale', 'Eine neogotische Kathedrale von 1886, die an Notre-Dame erinnert, umringt von Cafés mit Zitronentee auf Mini-Hockern.', 'Mit einem Trà chanh gegenüber dem Portal sitzen – ein Hanoier Ritual.'],
      fr: ['Cathédrale Saint-Joseph', 'Une cathédrale néogothique de 1886 qui rappelle Notre-Dame, entourée de cafés où l’on boit du thé au citron sur de minuscules tabourets.', 'Prenez un trà chanh face au portail : un rituel hanoïen.'],
      it: ['Cattedrale di San Giuseppe', 'Una cattedrale neogotica del 1886 che ricorda Notre-Dame, circondata da caffè dove si beve tè al limone su sgabellini.', 'Siediti con un trà chanh davanti al portale: un rito di Hanoi.'],
    }, { price: free }),
    P('opera-house', 'attraction', 21.0245, 105.8576, CITY, 4.6, 12300, ['architecture', 'art'], {
      ru: ['Ханойский оперный театр', 'Копия парижской Гранд-опера 1911 года — жемчужина французского квартала; внутрь попадают на спектакли и экскурсии.', 'Спектакль «Lune» или «Teh Dar» — красивый повод зайти вечером.'],
      en: ['Hanoi Opera House', 'A 1911 echo of the Paris Opéra and the jewel of the French Quarter; you get inside for shows and tours.', 'An evening performance is the best way in.'],
      es: ['Ópera de Hanói', 'Un eco de 1911 de la Ópera de París y joya del barrio francés; se entra con funciones y visitas guiadas.', 'Una función por la tarde-noche es la mejor forma de entrar.'],
      de: ['Opernhaus Hanoi', 'Eine Nachbildung der Pariser Oper von 1911 und das Juwel des Französischen Viertels; hinein kommt man zu Vorstellungen und Führungen.', 'Eine Abendvorstellung ist der schönste Weg hinein.'],
      fr: ['Opéra de Hanoï', 'Un écho de 1911 à l’Opéra de Paris, joyau du quartier français ; on y entre pour un spectacle ou une visite.', 'Un spectacle du soir est la meilleure façon d’y entrer.'],
      it: ['Teatro dell’Opera di Hanoi', 'Un’eco del 1911 dell’Opéra di Parigi e gioiello del Quartiere francese; si entra per spettacoli e visite.', 'Uno spettacolo serale è il modo migliore per entrare.'],
    }, { address: '1 Trang Tien' }),
    P('west-lake', 'nature', 21.0583, 105.825, LAKE, 4.5, 11700, ['lakes', 'sunset', 'food'], {
      ru: ['Западное озеро (Хо Тэй)', 'Самое большое озеро Ханоя с 17-километровой набережной: велосипеды, лодки-лебеди и кафе на закате.', 'Возьмите напрокат велосипед и попробуйте «бань том» — креветочные оладьи у пагоды Чанкуок.'],
      en: ['West Lake (Ho Tay)', 'Hanoi’s largest lake with a 17 km shore path: bikes, swan boats and sunset cafés.', 'Rent a bike and try bánh tôm, shrimp fritters, near Tran Quoc Pagoda.'],
      es: ['Lago del Oeste (Ho Tay)', 'El mayor lago de Hanói con 17 km de orilla: bicis, barcas-cisne y cafés al atardecer.', 'Alquila una bici y prueba el bánh tôm, buñuelos de gamba, junto a la pagoda Tran Quoc.'],
      de: ['Westsee (Ho Tay)', 'Hanois größter See mit 17 km Uferweg: Fahrräder, Schwanenboote und Cafés bei Sonnenuntergang.', 'Ein Rad mieten und an der Tran-Quoc-Pagode Bánh tôm (Garnelenküchlein) probieren.'],
      fr: ['Lac de l’Ouest (Ho Tay)', 'Le plus grand lac de Hanoï, 17 km de rives : vélos, pédalos-cygnes et cafés au coucher du soleil.', 'Louez un vélo et goûtez le bánh tôm, beignets de crevettes, près de la pagode Tran Quoc.'],
      it: ['Lago dell’Ovest (Ho Tay)', 'Il lago più grande di Hanoi con 17 km di sponda: bici, pedalò a cigno e caffè al tramonto.', 'Noleggia una bici e prova il bánh tôm, frittelle di gamberi, vicino alla pagoda Tran Quoc.'],
    }, { price: free, hours: 'always' }),
    P('dong-xuan-market', 'attraction', 21.0382, 105.8495, FOOD, 4.1, 13900, ['market', 'shopping', 'food'], {
      ru: ['Рынок Донгсуан', 'Крупнейший крытый рынок Старого квартала: ткани, сушёные фрукты, кофе; вечером по выходным вокруг него ночной рынок.', 'Еда — в задней части рынка: попробуйте «бун ок» (суп с улитками).'],
      en: ['Dong Xuan Market', 'The Old Quarter’s biggest covered market: fabrics, dried fruit, coffee; on weekend evenings a night market spreads around it.', 'The food stalls are at the back — try bún ốc, snail noodle soup.'],
      es: ['Mercado Dong Xuan', 'El mayor mercado cubierto del Barrio Antiguo: telas, fruta seca, café; las noches de fin de semana lo rodea un mercado nocturno.', 'La comida está al fondo: prueba el bún ốc, sopa de fideos con caracoles.'],
      de: ['Dong-Xuan-Markt', 'Der größte überdachte Markt der Altstadt: Stoffe, Trockenobst, Kaffee; an Wochenendabenden umgibt ihn ein Nachtmarkt.', 'Die Essstände sind hinten – Bún ốc, Schneckennudelsuppe, probieren.'],
      fr: ['Marché Dong Xuan', 'Le plus grand marché couvert du Vieux Quartier : tissus, fruits secs, café ; le week-end, un marché de nuit l’entoure.', 'La cuisine est au fond : goûtez le bún ốc, soupe de nouilles aux escargots.'],
      it: ['Mercato Dong Xuan', 'Il più grande mercato coperto del Quartiere vecchio: stoffe, frutta secca, caffè; nei weekend la sera lo circonda un mercato notturno.', 'Il cibo è sul retro: prova il bún ốc, zuppa di noodle con lumache.'],
    }, { price: free }),
    P('water-puppet-theatre', 'attraction', 21.0317, 105.8534, CITY, 4.4, 19200, ['culture', 'art'], {
      ru: ['Театр кукол на воде Тханглонг', 'Тысячелетнее искусство дельты Красной реки: куклы «танцуют» по воде под живой оркестр и пение чео.', 'Билеты на вечерние показы раскупают — берите днём в кассе у озера Хоанкьем.'],
      en: ['Thang Long Water Puppet Theatre', 'A thousand-year-old art of the Red River Delta: puppets dance across the water to a live orchestra and chèo singing.', 'Evening shows sell out — buy at the box office by Hoan Kiem Lake earlier in the day.'],
      es: ['Teatro de marionetas sobre agua Thang Long', 'Un arte milenario del delta del río Rojo: marionetas que bailan sobre el agua con orquesta en vivo y canto chèo.', 'Las funciones nocturnas se agotan: compra en taquilla junto al lago Hoan Kiem por la mañana.'],
      de: ['Wasserpuppentheater Thang Long', 'Eine tausendjährige Kunst des Roten-Fluss-Deltas: Puppen tanzen über das Wasser zu Live-Orchester und Chèo-Gesang.', 'Abendvorstellungen sind schnell ausverkauft – tagsüber an der Kasse am Hoan-Kiem-See kaufen.'],
      fr: ['Théâtre de marionnettes sur l’eau Thang Long', 'Un art millénaire du delta du fleuve Rouge : marionnettes dansant sur l’eau au son d’un orchestre et du chant chèo.', 'Les séances du soir affichent complet : achetez au guichet près du lac Hoan Kiem dans la journée.'],
      it: ['Teatro delle marionette sull’acqua Thang Long', 'Un’arte millenaria del delta del Fiume Rosso: marionette che danzano sull’acqua con orchestra dal vivo e canto chèo.', 'Gli spettacoli serali vanno esauriti: compra in biglietteria vicino al lago Hoan Kiem in giornata.'],
    }, { address: '57B Dinh Tien Hoang' }),

    P('gia', 'food', 21.0281, 105.8361, FOOD, 4.7, 700, ['food', 'luxury'], {
      ru: ['Gia', 'Шеф Сам Тран переосмысляет вьетнамские продукты и ферментацию в дегустационном сете; одна звезда Мишлен 2026.', 'Сет меняется по сезонам; попросите сочетание с вьетнамскими настойками.'],
      en: ['Gia', 'Chef Sam Tran reimagines Vietnamese produce and ferments in a tasting menu; one MICHELIN star in 2026.', 'The menu turns with the seasons; ask for the Vietnamese spirits pairing.'],
      es: ['Gia', 'La chef Sam Tran reinterpreta productos y fermentos vietnamitas en un menú degustación; una estrella MICHELIN en 2026.', 'El menú cambia con la estación; pide el maridaje con licores vietnamitas.'],
      de: ['Gia', 'Chefin Sam Tran interpretiert vietnamesische Produkte und Fermente in einem Degustationsmenü neu; ein MICHELIN-Stern 2026.', 'Das Menü wechselt saisonal; nach der Begleitung mit vietnamesischen Spirituosen fragen.'],
      fr: ['Gia', 'La cheffe Sam Tran réinvente produits et fermentations vietnamiens dans un menu dégustation ; une étoile MICHELIN en 2026.', 'Le menu suit les saisons ; demandez l’accord avec des alcools vietnamiens.'],
      it: ['Gia', 'La chef Sam Tran reinterpreta prodotti e fermentazioni vietnamiti in un menu degustazione; una stella MICHELIN nel 2026.', 'Il menu segue le stagioni; chiedi l’abbinamento con distillati vietnamiti.'],
    }, { price: level(3), michelin: { award: 'star1', year: 2026 }, address: '61 Van Mieu' }),
    P('tam-vi', 'food', 21.0303, 105.8364, FOOD, 4.6, 2100, ['food'], {
      ru: ['Tầm Vị', 'Северовьетнамская домашняя кухня в интерьере старого дома с деревянными ставнями; одна звезда Мишлен 2026 и доступные цены.', 'Закажите несколько блюд на всех: тушёную рыбу в глиняном горшке и суп с крабом.'],
      en: ['Tầm Vị', 'Northern Vietnamese home cooking in an old house with wooden shutters; one MICHELIN star in 2026 at gentle prices.', 'Share several dishes: clay-pot braised fish and crab soup.'],
      es: ['Tầm Vị', 'Cocina casera del norte de Vietnam en una casa antigua con contraventanas de madera; una estrella MICHELIN en 2026 a precios amables.', 'Comparte varios platos: pescado guisado en olla de barro y sopa de cangrejo.'],
      de: ['Tầm Vị', 'Nordvietnamesische Hausmannskost in einem alten Haus mit Holzläden; ein MICHELIN-Stern 2026 zu moderaten Preisen.', 'Mehrere Gerichte teilen: Fisch aus dem Tontopf und Krabbensuppe.'],
      fr: ['Tầm Vị', 'Cuisine familiale du nord du Vietnam dans une vieille maison à volets de bois ; une étoile MICHELIN en 2026 à prix doux.', 'Partagez plusieurs plats : poisson braisé en pot de terre et soupe de crabe.'],
      it: ['Tầm Vị', 'Cucina casalinga del nord del Vietnam in una vecchia casa con scuri di legno; una stella MICHELIN nel 2026 a prezzi gentili.', 'Condividi più piatti: pesce brasato in coccio e zuppa di granchio.'],
    }, { price: level(2), michelin: { award: 'star1', year: 2026 }, address: '4B Yen The', menu: [
      ['Cá kho tộ', 180000, 'рыба, томлённая в глиняном горшке|fish braised in a clay pot|pescado guisado en olla de barro|Fisch im Tontopf geschmort|poisson braisé en pot de terre|pesce brasato nel coccio'],
      ['Canh cua rau đay', 90000, 'суп с речным крабом и джутом|freshwater crab and jute leaf soup|sopa de cangrejo de río con yute|Süßwasserkrabben-Suppe mit Jute|soupe de crabe d’eau douce au jute|zuppa di granchio di fiume con iuta'],
      ['Đậu phụ chiên', 70000, 'жареный тофу с травами|fried tofu with herbs|tofu frito con hierbas|gebratener Tofu mit Kräutern|tofu frit aux herbes|tofu fritto con erbe'],
    ] }),
    P('hibana-by-koki', 'food', 21.0242, 105.8563, FOOD, 4.7, 400, ['food', 'luxury'], {
      ru: ['Hibana by Koki', 'Японский теппан-омакасе в отеле Capella Hanoi: всего несколько мест у гриля и рыба с утреннего рейса из Японии; одна звезда Мишлен 2026.', 'Мест мало — бронируйте заранее; удобно совместить с вечером в Оперном театре.'],
      en: ['Hibana by Koki', 'A Japanese teppan omakase at Capella Hanoi: a few seats at the grill and fish flown in from Japan; one MICHELIN star in 2026.', 'Seats are few, book early; it pairs well with an evening at the Opera House.'],
      es: ['Hibana by Koki', 'Un omakase japonés de teppan en el Capella Hanoi: pocas plazas frente a la plancha y pescado traído de Japón; una estrella MICHELIN en 2026.', 'Hay pocas plazas: reserva pronto; combina con una noche en la Ópera.'],
      de: ['Hibana by Koki', 'Ein japanisches Teppan-Omakase im Capella Hanoi: wenige Plätze am Grill und Fisch aus Japan; ein MICHELIN-Stern 2026.', 'Wenige Plätze, früh buchen; passt gut zu einem Abend in der Oper.'],
      fr: ['Hibana by Koki', 'Un omakase japonais au teppan au Capella Hanoi : quelques places face au gril et poisson venu du Japon ; une étoile MICHELIN en 2026.', 'Peu de places, réservez tôt ; idéal avant une soirée à l’Opéra.'],
      it: ['Hibana by Koki', 'Un omakase giapponese al teppan al Capella Hanoi: pochi posti alla piastra e pesce dal Giappone; una stella MICHELIN nel 2026.', 'Pochi posti, prenota presto; perfetto con una serata all’Opera.'],
    }, { price: level(3), michelin: { award: 'star1', year: 2026 }, address: 'Capella Hanoi, 11 Le Phung Hieu' }),
    P('pho-10-ly-quoc-su', 'food', 21.0306, 105.849, FOOD, 4.3, 14600, ['food', 'streetfood'], {
      ru: ['Phở 10 Lý Quốc Sư', 'Классический ханойский фо с говядиной в прозрачном пряном бульоне; Bib Gourmand в гиде 2026.', 'Возьмите «тай-нам» — микс тонко нарезанной сырой и отварной говядины; приходите на завтрак.'],
      en: ['Phở 10 Lý Quốc Sư', 'Classic Hanoi beef phở in a clear, spiced broth; Bib Gourmand in the 2026 guide.', 'Order tái nạm — rare and brisket beef together; come for breakfast.'],
      es: ['Phở 10 Lý Quốc Sư', 'El phở de ternera clásico de Hanói, con caldo claro y especiado; Bib Gourmand en la guía 2026.', 'Pide tái nạm, ternera poco hecha y falda juntas; ven a desayunar.'],
      de: ['Phở 10 Lý Quốc Sư', 'Klassisches Hanoier Rindfleisch-Phở in klarer, gewürzter Brühe; Bib Gourmand im Guide 2026.', 'Tái nạm bestellen – rohes und gekochtes Rind gemischt; zum Frühstück kommen.'],
      fr: ['Phở 10 Lý Quốc Sư', 'Le phở au bœuf classique de Hanoï, bouillon clair et épicé ; Bib Gourmand au guide 2026.', 'Commandez le tái nạm, bœuf saignant et poitrine ; venez au petit-déjeuner.'],
      it: ['Phở 10 Lý Quốc Sư', 'Il classico phở di manzo di Hanoi in brodo chiaro e speziato; Bib Gourmand nella guida 2026.', 'Ordina il tái nạm, manzo al sangue e punta insieme; vieni a colazione.'],
    }, { price: level(1), michelin: { award: 'bib', year: 2026 }, address: '10 Ly Quoc Su', menu: [
      ['Phở bò tái nạm', 75000, 'фо с сырой и отварной говядиной|phở with rare beef and brisket|phở con ternera poco hecha y falda|Phở mit rohem Rind und Brust|phở bœuf saignant et poitrine|phở con manzo al sangue e punta'],
      ['Phở bò chín', 70000, 'фо с отварной говядиной|phở with well-done beef|phở con ternera cocida|Phở mit gegartem Rind|phở au bœuf bien cuit|phở con manzo ben cotto'],
      ['Quẩy', 10000, 'жареные палочки из теста к супу|fried dough sticks for the soup|churros para mojar en la sopa|Teigstangen zum Eintunken|bâtonnets frits à tremper|bastoncini fritti da intingere'],
    ] }),
    P('bun-cha-ta', 'food', 21.0335, 105.854, FOOD, 4.4, 4300, ['food', 'streetfood'], {
      ru: ['Bún Chả Ta', 'Бун ча — свинина на углях в кисло-сладком соусе с рисовой лапшой и зеленью; Bib Gourmand.', 'Добавьте «нем куа бе» — жареные рулетики с крабом.'],
      en: ['Bún Chả Ta', 'Bún chả — charcoal-grilled pork in a sweet-sour broth with rice noodles and herbs; Bib Gourmand.', 'Add nem cua bể, crisp crab spring rolls.'],
      es: ['Bún Chả Ta', 'Bún chả: cerdo a la brasa en caldo agridulce con fideos de arroz y hierbas; Bib Gourmand.', 'Añade nem cua bể, rollitos crujientes de cangrejo.'],
      de: ['Bún Chả Ta', 'Bún chả – über Holzkohle gegrilltes Schwein in süßsaurer Brühe mit Reisnudeln und Kräutern; Bib Gourmand.', 'Dazu Nem cua bể, knusprige Krabben-Frühlingsrollen.'],
      fr: ['Bún Chả Ta', 'Bún chả : porc grillé au charbon dans un bouillon aigre-doux, vermicelles de riz et herbes ; Bib Gourmand.', 'Ajoutez des nem cua bể, rouleaux croustillants au crabe.'],
      it: ['Bún Chả Ta', 'Bún chả: maiale alla brace in brodo agrodolce con vermicelli di riso ed erbe; Bib Gourmand.', 'Aggiungi i nem cua bể, involtini croccanti di granchio.'],
    }, { price: level(1), michelin: { award: 'bib', year: 2026 }, address: '21 Nguyen Huu Huan', menu: [
      ['Bún chả', 70000, 'свинина на углях с лапшой и травами|grilled pork with rice noodles and herbs|cerdo a la brasa con fideos y hierbas|gegrilltes Schwein mit Reisnudeln|porc grillé, vermicelles et herbes|maiale alla brace con vermicelli ed erbe'],
      ['Nem cua bể', 35000, 'хрустящий рулет с крабом|crisp crab spring roll|rollito crujiente de cangrejo|knusprige Krabbenrolle|rouleau croustillant au crabe|involtino croccante di granchio'],
    ] }),
    P('pho-khoi-hoi', 'food', 21.0365, 105.8472, FOOD, 4.3, 3100, ['food', 'streetfood'], {
      ru: ['Phở Khôi Hói', 'Маленькая фо-шная в Старом квартале с густым, насыщенным бульоном; Bib Gourmand в 2026 году.', 'Здесь едят быстро и за общими столами — лучше не в обеденный пик.'],
      en: ['Phở Khôi Hói', 'A small Old Quarter phở shop with a deep, rich broth; Bib Gourmand in 2026.', 'Meals are quick at shared tables — avoid the lunch peak.'],
      es: ['Phở Khôi Hói', 'Un pequeño local de phở del Barrio Antiguo con un caldo intenso; Bib Gourmand en 2026.', 'Se come rápido en mesas compartidas: evita la hora punta del almuerzo.'],
      de: ['Phở Khôi Hói', 'Ein kleiner Phở-Laden in der Altstadt mit kräftiger Brühe; Bib Gourmand 2026.', 'Man isst schnell an Gemeinschaftstischen – die Mittagsspitze meiden.'],
      fr: ['Phở Khôi Hói', 'Une petite échoppe de phở du Vieux Quartier au bouillon profond ; Bib Gourmand en 2026.', 'On mange vite à des tables partagées : évitez le rush de midi.'],
      it: ['Phở Khôi Hói', 'Un piccolo locale di phở del Quartiere vecchio con brodo intenso; Bib Gourmand nel 2026.', 'Si mangia veloce a tavoli condivisi: evita il picco di pranzo.'],
    }, { price: level(1), michelin: { award: 'bib', year: 2026 }, address: '50 Hang Vai', menu: [
      ['Phở bò tái', 60000, 'фо с тонко нарезанной говядиной|phở with thin-sliced rare beef|phở con ternera fina poco hecha|Phở mit dünnem rohem Rind|phở au bœuf saignant émincé|phở con manzo crudo a fette sottili'],
      ['Phở bò sốt vang', 70000, 'фо с говядиной, тушённой в вине|phở with wine-braised beef|phở con ternera al vino|Phở mit in Wein geschmortem Rind|phở au bœuf braisé au vin|phở con manzo brasato al vino'],
    ] }),
    P('tuyet-bun-cha-34', 'food', 21.0425, 105.8467, FOOD, 4.4, 2600, ['food', 'streetfood'], {
      ru: ['Tuyết Bún Chả 34', 'Бун ча, который хозяйка жарит на углях прямо у входа: котлетки и грудинка в прохладном соусе-бульоне; Bib Gourmand 2026.', 'Работает днём — приходите к обеду, к вечеру мясо заканчивается.'],
      en: ['Tuyết Bún Chả 34', 'Bún chả grilled over charcoal at the door: patties and pork belly in a cool dipping broth; Bib Gourmand 2026.', 'Open by day — come for lunch, the meat runs out by evening.'],
      es: ['Tuyết Bún Chả 34', 'Bún chả a la brasa en la misma puerta: albóndigas y panceta en un caldo frío para mojar; Bib Gourmand 2026.', 'Abre de día: ven a comer, por la tarde se acaba la carne.'],
      de: ['Tuyết Bún Chả 34', 'Bún chả direkt am Eingang über Holzkohle gegrillt: Frikadellen und Bauch in kühler Dipbrühe; Bib Gourmand 2026.', 'Nur tagsüber – zum Mittagessen kommen, abends ist das Fleisch weg.'],
      fr: ['Tuyết Bún Chả 34', 'Bún chả grillé au charbon sur le pas de la porte : boulettes et poitrine dans un bouillon froid ; Bib Gourmand 2026.', 'Ouvert la journée : venez déjeuner, la viande manque le soir.'],
      it: ['Tuyết Bún Chả 34', 'Bún chả grigliato alla brace sull’uscio: polpette e pancetta in brodo freddo per intingere; Bib Gourmand 2026.', 'Aperto di giorno: vieni a pranzo, la sera la carne finisce.'],
    }, { price: level(1), michelin: { award: 'bib', year: 2026 }, address: '34 Hang Than', menu: [
      ['Bún chả', 60000, 'свиные котлетки и грудинка с лапшой|pork patties and belly with noodles|albóndigas y panceta con fideos|Frikadellen und Bauch mit Nudeln|boulettes et poitrine, vermicelles|polpette e pancetta con vermicelli'],
      ['Nem rán', 15000, 'жареный рулет со свининой|fried pork spring roll|rollito frito de cerdo|frittierte Frühlingsrolle|nem frit au porc|involtino fritto di maiale'],
    ] }),
    P('banh-mi-25', 'food', 21.0365, 105.8487, CAFE, 4.5, 11200, ['food', 'streetfood'], {
      ru: ['Bánh Mì 25', 'Популярная лавка баньми в Старом квартале: хрустящий багет с паштетом, мясом, зеленью и чили, есть вегетарианские версии.', 'Ешьте сразу, пока багет горячий; острое — по желанию.'],
      en: ['Bánh Mì 25', 'A popular Old Quarter bánh mì shop: crackly baguette with pâté, meats, herbs and chilli, plus vegetarian versions.', 'Eat it at once while the bread is hot; chilli on request.'],
      es: ['Bánh Mì 25', 'Un bánh mì popular del Barrio Antiguo: baguette crujiente con paté, carnes, hierbas y chile; también vegetariano.', 'Cómelo al momento, con el pan caliente; picante a elección.'],
      de: ['Bánh Mì 25', 'Ein beliebter Bánh-mì-Laden in der Altstadt: knuspriges Baguette mit Pastete, Fleisch, Kräutern und Chili, auch vegetarisch.', 'Sofort essen, solange das Brot warm ist; Chili nach Wunsch.'],
      fr: ['Bánh Mì 25', 'Une adresse de bánh mì populaire du Vieux Quartier : baguette croustillante, pâté, viandes, herbes et piment, versions végétariennes aussi.', 'À manger tout de suite, pain chaud ; piment à la demande.'],
      it: ['Bánh Mì 25', 'Un bánh mì molto amato nel Quartiere vecchio: baguette croccante con paté, carni, erbe e peperoncino, anche vegetariano.', 'Mangialo subito, col pane caldo; peperoncino a richiesta.'],
    }, { price: level(1), address: '25 Hang Ca', menu: [
      ['Bánh mì thập cẩm', 40000, 'багет со всем: паштет, ветчина, свинина|baguette with everything: pâté, ham, pork|baguette completa: paté, jamón, cerdo|Baguette mit allem: Pastete, Schinken, Schwein|baguette complète : pâté, jambon, porc|baguette completa: paté, prosciutto, maiale'],
      ['Bánh mì chay', 35000, 'вегетарианский баньми|vegetarian bánh mì|bánh mì vegetariano|vegetarisches Bánh mì|bánh mì végétarien|bánh mì vegetariano'],
    ] }),
    P('xoi-yen', 'food', 21.0332, 105.8537, FOOD, 4.2, 6800, ['food', 'streetfood'], {
      ru: ['Xôi Yến', 'Клейкий рис «шой» с начинками: курица, сосиска, жареный лук и мунг — сытный ханойский завтрак и ужин.', 'Берите «шой сео» с маш-пастой и жареным луком.'],
      en: ['Xôi Yến', 'Sticky rice (xôi) with toppings — chicken, sausage, fried shallots and mung bean — a filling Hanoi breakfast or supper.', 'Go for xôi xéo with mung bean and crispy shallots.'],
      es: ['Xôi Yến', 'Arroz glutinoso (xôi) con toppings —pollo, salchicha, chalota frita y judía mungo—: desayuno o cena contundente.', 'Pide xôi xéo con judía mungo y chalota crujiente.'],
      de: ['Xôi Yến', 'Klebreis (Xôi) mit Toppings – Huhn, Wurst, Röstzwiebeln und Mungbohne – ein sättigendes Frühstück oder Abendessen.', 'Xôi xéo mit Mungbohnen und Röstschalotten wählen.'],
      fr: ['Xôi Yến', 'Riz gluant (xôi) garni — poulet, saucisse, échalotes frites, haricot mungo — petit-déjeuner ou souper copieux.', 'Prenez le xôi xéo aux haricots mungo et échalotes croustillantes.'],
      it: ['Xôi Yến', 'Riso glutinoso (xôi) con condimenti — pollo, salsiccia, scalogno fritto e fagioli mungo — colazione o cena sostanziosa.', 'Prendi lo xôi xéo con fagioli mungo e scalogno croccante.'],
    }, { price: level(1), address: '35B Nguyen Huu Huan', menu: [
      ['Xôi xéo', 35000, 'рис с маш-пастой и жареным луком|sticky rice with mung bean and shallots|arroz con mungo y chalota|Klebreis mit Mungbohne und Schalotten|riz gluant, mungo et échalotes|riso con mungo e scalogno'],
      ['Xôi gà', 50000, 'клейкий рис с курицей|sticky rice with chicken|arroz glutinoso con pollo|Klebreis mit Huhn|riz gluant au poulet|riso glutinoso con pollo'],
    ] }),
    P('cafe-dinh', 'food', 21.032, 105.8531, CAFE, 4.5, 3900, ['food', 'views'], {
      ru: ['Café Đinh', 'Крошечное кафе на втором этаже с видом на озеро Хоанкьем от семьи создателя яичного кофе.', 'Закажите «ка-фе чынг» — кофе с взбитым желтком — и шоколадную версию.'],
      en: ['Café Đinh', 'A tiny upstairs café over Hoan Kiem Lake run by the family behind egg coffee.', 'Order cà phê trứng, coffee with whipped yolk, and the chocolate version.'],
      es: ['Café Đinh', 'Un diminuto café en un primer piso sobre el lago Hoan Kiem, de la familia que inventó el café con huevo.', 'Pide cà phê trứng, café con yema batida, y la versión de chocolate.'],
      de: ['Café Đinh', 'Ein winziges Café im ersten Stock am Hoan-Kiem-See, geführt von der Familie hinter dem Eierkaffee.', 'Cà phê trứng, Kaffee mit geschlagenem Eigelb, und die Schokoladenversion bestellen.'],
      fr: ['Café Đinh', 'Un minuscule café à l’étage sur le lac Hoan Kiem, tenu par la famille à l’origine du café à l’œuf.', 'Commandez le cà phê trứng, café au jaune d’œuf battu, et sa version chocolat.'],
      it: ['Café Đinh', 'Un minuscolo caffè al primo piano sul lago Hoan Kiem, gestito dalla famiglia del caffè all’uovo.', 'Ordina il cà phê trứng, caffè con tuorlo montato, e la versione al cioccolato.'],
    }, { price: level(1), address: '13 Dinh Tien Hoang (1st floor)', menu: [
      ['Cà phê trứng', 35000, 'кофе со взбитым желтком|coffee with whipped egg yolk|café con yema batida|Kaffee mit geschlagenem Eigelb|café au jaune d’œuf battu|caffè con tuorlo montato'],
      ['Ca cao trứng', 40000, 'какао со взбитым желтком|cocoa with whipped egg yolk|cacao con yema batida|Kakao mit Eigelbschaum|cacao au jaune d’œuf battu|cacao con tuorlo montato'],
    ] }),
    P('bun-bo-nam-bo', 'food', 21.0331, 105.8466, FOOD, 4.4, 8400, ['food', 'streetfood'], {
      ru: ['Bún Bò Nam Bộ Bà Đạt', 'Тёплый салат из рисовой лапши с говядиной, арахисом, жареным луком и травами в сладком рыбном соусе.', 'Перемешайте всё до дна миски, прежде чем есть.'],
      en: ['Bún Bò Nam Bộ Bà Đạt', 'A warm rice-noodle salad with beef, peanuts, fried shallots and herbs in sweet fish sauce.', 'Toss everything to the bottom of the bowl before eating.'],
      es: ['Bún Bò Nam Bộ Bà Đạt', 'Una ensalada templada de fideos de arroz con ternera, cacahuetes, chalota frita y hierbas en salsa de pescado dulce.', 'Mezcla todo hasta el fondo antes de comer.'],
      de: ['Bún Bò Nam Bộ Bà Đạt', 'Ein warmer Reisnudelsalat mit Rind, Erdnüssen, Röstschalotten und Kräutern in süßer Fischsauce.', 'Vor dem Essen alles bis zum Schalenboden durchmischen.'],
      fr: ['Bún Bò Nam Bộ Bà Đạt', 'Une salade tiède de vermicelles au bœuf, cacahuètes, échalotes frites et herbes, sauce poisson sucrée.', 'Mélangez jusqu’au fond du bol avant de manger.'],
      it: ['Bún Bò Nam Bộ Bà Đạt', 'Un’insalata tiepida di vermicelli con manzo, arachidi, scalogno fritto ed erbe in salsa di pesce dolce.', 'Mescola tutto fino in fondo prima di mangiare.'],
    }, { price: level(1), address: '67 Hang Dieu', menu: [
      ['Bún bò Nam Bộ', 70000, 'лапша с говядиной, арахисом и травами|noodles with beef, peanuts and herbs|fideos con ternera, cacahuete y hierbas|Nudeln mit Rind, Erdnuss und Kräutern|vermicelles, bœuf, cacahuètes et herbes|vermicelli con manzo, arachidi ed erbe'],
      ['Nem chua', 20000, 'ферментированная свинина в листьях|fermented pork in leaves|cerdo fermentado en hojas|fermentiertes Schwein in Blättern|porc fermenté en feuilles|maiale fermentato in foglie'],
    ] }),
  ],
  routes: [
    D(['=hanoi-hoan-kiem-lake', '=hanoi-ngoc-son-temple', 'st-josephs-cathedral', 'hoa-lo-prison', 'bun-cha-ta', 'opera-house', 'cafe-dinh', 'water-puppet-theatre', '=hanoi-ta-hien-beer-street'],
      'Озеро Хоанкьем и французский квартал|Hoan Kiem Lake and the French Quarter|El lago Hoan Kiem y el barrio francés|Hoan-Kiem-See und Französisches Viertel|Lac Hoan Kiem et quartier français|Lago Hoan Kiem e Quartiere francese'),
    D(['ho-chi-minh-mausoleum', 'one-pillar-pagoda', '=hanoi-thang-long-citadel', 'tam-vi', '=hanoi-temple-of-literature', 'tran-quoc-pagoda', 'west-lake', 'gia'],
      'Императорский Ханой и Западное озеро|Imperial Hanoi and West Lake|Hanói imperial y el Lago del Oeste|Kaiserliches Hanoi und Westsee|Hanoï impérial et lac de l’Ouest|Hanoi imperiale e Lago dell’Ovest'),
    D(['pho-10-ly-quoc-su', 'dong-xuan-market', '=hanoi-long-bien-bridge', '=hanoi-train-street', 'bun-bo-nam-bo', 'museum-of-ethnology', 'hibana-by-koki'],
      'Старый квартал, рынки и музей народов|Old Quarter, markets and the peoples’ museum|Barrio Antiguo, mercados y museo de los pueblos|Altstadt, Märkte und Völkerkundemuseum|Vieux Quartier, marchés et musée des peuples|Quartiere vecchio, mercati e museo dei popoli'),
  ],
};

export default pack;
