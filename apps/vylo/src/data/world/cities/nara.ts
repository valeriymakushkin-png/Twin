import type { CityPack } from '../types';
import { free, level, makeDay, makePlace } from './_kit.ts';

const P = makePlace('nara');
const D = makeDay('nara');
const HALL = 'E5DntJqsDDA';
const DEER = 'D-yZxa_G6wU';
const ARCH = 'tEOhkLuqmUI';
const POND = '_APaWUG0_5I';
const LANTERNS = 'm1mivztt7Zs';
const ROOF = 'sv8Z0Q_Uz3c';

const pack: CityPack = {
  country: 'JP',
  city: 'nara',
  places: [
    P('todaiji', 'attraction', 34.689, 135.8398, HALL, 4.7, 52000, ['temples', 'history', 'unesco'], {
      ru: ['Тодай-дзи', 'Зал Большого Будды — одно из крупнейших деревянных зданий мира — с 15-метровой бронзовой статуей VIII века.', 'За статуей есть колонна с отверстием размером с ноздрю Будды: считается, что пролезть сквозь него — к удаче.'],
      en: ['Tōdai-ji', 'The Great Buddha Hall, one of the world’s largest wooden buildings, housing a 15 m bronze Buddha from the 8th century.', 'Behind the statue a pillar has a hole the size of the Buddha’s nostril — squeezing through is said to bring luck.'],
      es: ['Tōdai-ji', 'El Salón del Gran Buda, uno de los mayores edificios de madera del mundo, con un Buda de bronce de 15 m del siglo VIII.', 'Tras la estatua, un pilar tiene un agujero del tamaño de la nariz del Buda: pasar por él trae suerte.'],
      de: ['Tōdai-ji', 'Die Halle des Großen Buddha, eines der größten Holzgebäude der Welt, mit einer 15 m hohen Bronzestatue aus dem 8. Jh.', 'Hinter der Statue hat eine Säule ein Loch so groß wie Buddhas Nasenloch – wer hindurchkriecht, soll Glück haben.'],
      fr: ['Tōdai-ji', 'Le pavillon du Grand Bouddha, l’un des plus grands édifices en bois du monde, abritant un Bouddha de bronze de 15 m du VIIIe siècle.', 'Derrière la statue, un pilier est percé d’un trou de la taille de la narine du Bouddha : s’y faufiler porterait chance.'],
      it: ['Tōdai-ji', 'La Sala del Grande Buddha, uno dei più grandi edifici in legno del mondo, con un Buddha di bronzo di 15 m dell’VIII secolo.', 'Dietro la statua un pilastro ha un foro grande come la narice del Buddha: passarci porta fortuna.'],
    }, { spot: 'insta', price: level(1) }),
    P('nara-park', 'nature', 34.6851, 135.843, DEER, 4.7, 61000, ['wildlife', 'nature', 'photo'], {
      ru: ['Парк Нара и олени', 'Огромный парк между храмами, где свободно живут больше тысячи оленей — их считают посланниками богов.', 'Печенье для оленей сикасэнбэй продают в парке; поклонитесь — многие олени кланяются в ответ.'],
      en: ['Nara Park and its deer', 'A vast park between the temples where more than a thousand deer roam freely — they’re seen as messengers of the gods.', 'Deer crackers (shika senbei) are sold in the park; bow, and many deer bow back.'],
      es: ['Parque de Nara y sus ciervos', 'Un enorme parque entre templos donde viven libres más de mil ciervos, considerados mensajeros de los dioses.', 'Las galletas para ciervos (shika senbei) se venden en el parque; haz una reverencia y muchos te la devuelven.'],
      de: ['Nara-Park und seine Hirsche', 'Ein riesiger Park zwischen den Tempeln, in dem über tausend Hirsche frei leben – sie gelten als Götterboten.', 'Hirschcracker (Shika Senbei) gibt es im Park; verbeugen Sie sich – viele Hirsche verbeugen sich zurück.'],
      fr: ['Parc de Nara et ses cerfs', 'Un immense parc entre les temples où plus d’un millier de cerfs vivent en liberté, considérés comme messagers des dieux.', 'Les biscuits pour cerfs (shika senbei) se vendent dans le parc ; saluez, beaucoup de cerfs saluent en retour.'],
      it: ['Parco di Nara e i suoi cervi', 'Un enorme parco tra i templi dove vivono liberi più di mille cervi, considerati messaggeri degli dèi.', 'I cracker per cervi (shika senbei) si vendono nel parco; inchinati e molti cervi ricambiano.'],
    }, { spot: 'insta', price: free }),
    P('kasuga-taisha', 'attraction', 34.6812, 135.8484, LANTERNS, 4.6, 24000, ['temples', 'history', 'unesco'], {
      ru: ['Касуга-тайся', 'Святилище, основанное в 768 году, с алыми галереями и около трёх тысяч каменных и бронзовых фонарей.', 'В феврале и 14–15 августа на праздниках Мандоро зажигают все фонари сразу.'],
      en: ['Kasuga Taisha', 'A shrine founded in 768, with vermilion corridors and about three thousand stone and bronze lanterns.', 'At the Mantōrō festivals in February and on 14–15 August every lantern is lit at once.'],
      es: ['Kasuga Taisha', 'Un santuario fundado en 768, con galerías bermellón y unos tres mil faroles de piedra y bronce.', 'En los festivales Mantōrō de febrero y del 14–15 de agosto se encienden todos a la vez.'],
      de: ['Kasuga Taisha', 'Ein 768 gegründeter Schrein mit zinnoberroten Gängen und rund dreitausend Stein- und Bronzelaternen.', 'Bei den Mantōrō-Festen im Februar und am 14.–15. August brennen alle Laternen zugleich.'],
      fr: ['Kasuga Taisha', 'Un sanctuaire fondé en 768, aux galeries vermillon et à quelque trois mille lanternes de pierre et de bronze.', 'Lors des fêtes Mantōrō de février et des 14–15 août, toutes les lanternes sont allumées.'],
      it: ['Kasuga Taisha', 'Un santuario fondato nel 768, con gallerie vermiglio e circa tremila lanterne di pietra e bronzo.', 'Alle feste Mantōrō di febbraio e del 14–15 agosto si accendono tutte insieme.'],
    }, { spot: 'insta', price: level(1) }),
    P('kofukuji', 'attraction', 34.683, 135.8317, ROOF, 4.5, 21000, ['temples', 'history', 'museums'], {
      ru: ['Кофуку-дзи', 'Храм рода Фудзивара VIII века; в Музее национальных сокровищ хранится трёхликий шестирукий Асура.', 'Пятиярусная пагода с 2023 года на многолетней реставрации и закрыта лесами — зато музей открыт.'],
      en: ['Kōfuku-ji', 'The Fujiwara clan’s 8th-century temple; its National Treasure Museum holds the three-faced, six-armed Ashura.', 'The five-storey pagoda has been under a multi-year restoration in scaffolding since 2023 — the museum is open.'],
      es: ['Kōfuku-ji', 'El templo del clan Fujiwara del siglo VIII; su Museo de Tesoros Nacionales guarda el Ashura de tres rostros y seis brazos.', 'La pagoda de cinco pisos está en una larga restauración con andamios desde 2023; el museo sí abre.'],
      de: ['Kōfuku-ji', 'Der Tempel des Fujiwara-Clans aus dem 8. Jh.; im Nationalschatzmuseum steht der dreigesichtige, sechsarmige Ashura.', 'Die fünfstöckige Pagode ist seit 2023 für eine mehrjährige Restaurierung eingerüstet – das Museum ist offen.'],
      fr: ['Kōfuku-ji', 'Le temple du clan Fujiwara (VIIIe siècle) ; son musée des Trésors nationaux abrite l’Ashura à trois visages et six bras.', 'La pagode à cinq étages est sous échafaudage depuis 2023 pour une longue restauration ; le musée reste ouvert.'],
      it: ['Kōfuku-ji', 'Il tempio del clan Fujiwara dell’VIII secolo; il Museo dei tesori nazionali custodisce l’Ashura a tre volti e sei braccia.', 'La pagoda a cinque piani è in restauro pluriennale coperta da impalcature dal 2023; il museo è aperto.'],
    }, { price: level(1) }),
    P('isuien', 'nature', 34.6861, 135.8357, POND, 4.6, 5200, ['gardens', 'history'], {
      ru: ['Сад Исуйэн', 'Сад эпохи Мэйдзи, «заимствующий» вид: ворота Тодай-дзи и холмы Вакакуса как часть пейзажа за прудом.', 'Выпейте маття в чайном домике с видом на сад.'],
      en: ['Isuien Garden', 'A Meiji-era garden that “borrows” its view: Tōdai-ji’s gate and the Wakakusa hills become part of the scene beyond the pond.', 'Have matcha in the teahouse overlooking the garden.'],
      es: ['Jardín Isuien', 'Un jardín Meiji que «toma prestado» el paisaje: la puerta de Tōdai-ji y las colinas Wakakusa forman parte de la escena tras el estanque.', 'Toma un matcha en la casa de té con vistas al jardín.'],
      de: ['Isuien-Garten', 'Ein Meiji-Garten mit „geborgter Landschaft“: Tōdai-jis Tor und die Wakakusa-Hügel gehören zum Bild hinter dem Teich.', 'Im Teehaus mit Gartenblick einen Matcha trinken.'],
      fr: ['Jardin Isuien', 'Un jardin de l’ère Meiji qui « emprunte » son paysage : la porte du Tōdai-ji et les collines de Wakakusa prolongent l’étang.', 'Prenez un matcha dans la maison de thé face au jardin.'],
      it: ['Giardino Isuien', 'Un giardino Meiji che «prende in prestito» il paesaggio: la porta del Tōdai-ji e i colli Wakakusa entrano nella scena oltre lo stagno.', 'Prendi un matcha nella casa da tè affacciata sul giardino.'],
    }, { spot: 'insta', price: level(1) }),
    P('yoshikien', 'nature', 34.6858, 135.835, POND, 4.6, 3300, ['gardens'], {
      ru: ['Сад Ёсикиэн', 'Три сада в одном — моховый, прудовый и чайный — по соседству с Исуйэном и почти без туристов.', 'Иностранцам вход бесплатный — покажите паспорт.'],
      en: ['Yoshikien Garden', 'Three gardens in one — moss, pond and tea garden — next door to Isuien and almost free of tourists.', 'Entry is free for foreign visitors — show your passport.'],
      es: ['Jardín Yoshikien', 'Tres jardines en uno —de musgo, de estanque y de té— junto al Isuien y casi sin turistas.', 'Para extranjeros la entrada es gratis: enseña el pasaporte.'],
      de: ['Yoshikien-Garten', 'Drei Gärten in einem – Moos-, Teich- und Teegarten – gleich neben dem Isuien und fast ohne Touristen.', 'Für ausländische Gäste kostenlos – Reisepass zeigen.'],
      fr: ['Jardin Yoshikien', 'Trois jardins en un — de mousse, d’étang et de thé — voisin de l’Isuien et presque sans touristes.', 'Entrée gratuite pour les visiteurs étrangers : montrez votre passeport.'],
      it: ['Giardino Yoshikien', 'Tre giardini in uno — di muschio, di stagno e del tè — accanto all’Isuien e quasi senza turisti.', 'Ingresso gratuito per i visitatori stranieri: mostra il passaporto.'],
    }, { spot: 'hidden', price: free }),
    P('naramachi', 'attraction', 34.678, 135.829, ROOF, 4.4, 8700, ['oldtown', 'history', 'shopping'], {
      ru: ['Нарамати', 'Старый купеческий квартал с узкими улочками, домами-матия с решётчатыми фасадами, кафе и лавками ремёсел.', 'Загляните в бесплатный дом Коси-но иэ — внутри видно, как жили купцы.'],
      en: ['Naramachi', 'The old merchant quarter of narrow lanes, lattice-fronted machiya, cafés and craft shops.', 'Step into the free Kōshi-no-ie house to see how merchants lived.'],
      es: ['Naramachi', 'El antiguo barrio de comerciantes de callejas estrechas, machiya de celosías, cafés y tiendas de artesanía.', 'Entra en la casa gratuita Kōshi-no-ie para ver cómo vivían los comerciantes.'],
      de: ['Naramachi', 'Das alte Kaufmannsviertel mit engen Gassen, Machiya mit Gitterfassaden, Cafés und Handwerksläden.', 'Ins kostenlose Haus Kōshi-no-ie schauen, um zu sehen, wie Kaufleute lebten.'],
      fr: ['Naramachi', 'Le vieux quartier marchand aux ruelles étroites, machiya à façades en treillis, cafés et boutiques d’artisans.', 'Entrez dans la maison gratuite Kōshi-no-ie pour voir comment vivaient les marchands.'],
      it: ['Naramachi', 'L’antico quartiere mercantile di vicoli stretti, machiya con facciate a graticcio, caffè e botteghe artigiane.', 'Entra nella casa gratuita Kōshi-no-ie per vedere come vivevano i mercanti.'],
    }, { price: free }),
    P('nigatsudo', 'attraction', 34.6893, 135.8436, HALL, 4.7, 9100, ['temples', 'views', 'sunset'], {
      ru: ['Нигацу-до', 'Зал Тодай-дзи на склоне холма с деревянной верандой, откуда открывается вид на крыши храмов и город.', 'Приходите к закату — вход свободный, а в марте здесь проходит огненный ритуал Омидзутори.'],
      en: ['Nigatsu-dō', 'A Tōdai-ji hall on the hillside with a wooden veranda looking over the temple roofs and the city.', 'Come for sunset — entry is free, and in March it hosts the fiery Omizutori ritual.'],
      es: ['Nigatsu-dō', 'Un salón de Tōdai-ji en la ladera con una terraza de madera sobre los tejados de los templos y la ciudad.', 'Ven al atardecer: es gratis, y en marzo acoge el ritual de fuego Omizutori.'],
      de: ['Nigatsu-dō', 'Eine Halle des Tōdai-ji am Hang mit hölzerner Veranda über den Tempeldächern und der Stadt.', 'Zum Sonnenuntergang kommen – Eintritt frei; im März findet das Feuerritual Omizutori statt.'],
      fr: ['Nigatsu-dō', 'Un pavillon du Tōdai-ji à flanc de colline, dont la véranda en bois domine les toits des temples et la ville.', 'Venez au coucher du soleil : c’est gratuit, et en mars s’y tient le rituel de feu Omizutori.'],
      it: ['Nigatsu-dō', 'Una sala del Tōdai-ji sulla collina con una veranda di legno sui tetti dei templi e sulla città.', 'Vieni al tramonto: è gratuito, e a marzo ospita il rito di fuoco Omizutori.'],
    }, { spot: 'insta', price: free }),
    P('mount-wakakusa', 'nature', 34.687, 135.851, DEER, 4.5, 5600, ['hiking', 'views', 'nature'], {
      ru: ['Гора Вакакуса', 'Травяной холм над парком с панорамой Нары; вечером отсюда видны огни города.', 'Открыт с весны до начала зимы; в конце января склон поджигают на празднике Ямаяки.'],
      en: ['Mount Wakakusa', 'A grassy hill above the park with a panorama of Nara; in the evening the city lights spread below.', 'Open from spring to early winter; in late January the slope is set alight for the Yamayaki festival.'],
      es: ['Monte Wakakusa', 'Una colina de hierba sobre el parque con panorámica de Nara; al anochecer se ven las luces de la ciudad.', 'Abre de primavera a principios de invierno; a finales de enero se quema la ladera en el festival Yamayaki.'],
      de: ['Berg Wakakusa', 'Ein Grashügel über dem Park mit Panorama auf Nara; abends liegen die Lichter der Stadt darunter.', 'Vom Frühling bis Frühwinter geöffnet; Ende Januar wird der Hang beim Yamayaki-Fest abgebrannt.'],
      fr: ['Mont Wakakusa', 'Une colline herbeuse au-dessus du parc avec panorama sur Nara ; le soir, les lumières de la ville s’étalent en bas.', 'Ouvert du printemps au début de l’hiver ; fin janvier, la pente est embrasée pour la fête Yamayaki.'],
      it: ['Monte Wakakusa', 'Una collina erbosa sopra il parco con panorama su Nara; la sera si vedono le luci della città.', 'Aperto dalla primavera all’inizio dell’inverno; a fine gennaio il pendio viene incendiato per la festa Yamayaki.'],
    }, { price: level(1) }),
    P('horyuji', 'attraction', 34.6142, 135.7343, ROOF, 4.6, 12000, ['temples', 'history', 'unesco'], {
      ru: ['Хорю-дзи', 'Храм принца Сётоку с древнейшими сохранившимися деревянными постройками в мире (конец VII века); первый японский объект ЮНЕСКО.', 'Едет электричка JR до станции Хорюдзи и 20 минут пешком; выделите полдня.'],
      en: ['Hōryū-ji', 'Prince Shōtoku’s temple with the world’s oldest surviving wooden buildings (late 7th century); among Japan’s first UNESCO sites.', 'Take the JR train to Hōryūji Station and walk 20 minutes; allow half a day.'],
      es: ['Hōryū-ji', 'El templo del príncipe Shōtoku, con los edificios de madera más antiguos conservados del mundo (finales del siglo VII); de los primeros sitios UNESCO de Japón.', 'Tren JR hasta la estación Hōryūji y 20 minutos a pie; reserva medio día.'],
      de: ['Hōryū-ji', 'Prinz Shōtokus Tempel mit den ältesten erhaltenen Holzbauten der Welt (spätes 7. Jh.); eine der ersten UNESCO-Stätten Japans.', 'Mit der JR bis Bahnhof Hōryūji und 20 Minuten zu Fuß; einen halben Tag einplanen.'],
      fr: ['Hōryū-ji', 'Le temple du prince Shōtoku, aux plus anciens bâtiments en bois conservés au monde (fin du VIIe siècle) ; parmi les premiers sites UNESCO du Japon.', 'Train JR jusqu’à la gare de Hōryūji puis 20 minutes à pied ; comptez une demi-journée.'],
      it: ['Hōryū-ji', 'Il tempio del principe Shōtoku, con i più antichi edifici in legno conservati al mondo (fine VII secolo); tra i primi siti UNESCO del Giappone.', 'Treno JR fino alla stazione di Hōryūji e 20 minuti a piedi; calcola mezza giornata.'],
    }, { price: level(2) }),
    P('yakushiji', 'attraction', 34.6684, 135.7845, ROOF, 4.5, 7200, ['temples', 'history', 'unesco'], {
      ru: ['Якуси-дзи', 'Храм VII–VIII веков с Восточной пагодой 730 года, вновь открытой после большой реставрации в 2020-х.', 'Его легко совместить с соседним Тосёдай-дзи — между ними 10 минут пешком.'],
      en: ['Yakushi-ji', 'A 7th–8th-century temple with an East Pagoda from 730, reopened after a major restoration in the 2020s.', 'Pair it with neighbouring Tōshōdai-ji — they’re a 10-minute walk apart.'],
      es: ['Yakushi-ji', 'Un templo de los siglos VII–VIII con una Pagoda Este de 730, reabierta tras una gran restauración en los años 2020.', 'Combínalo con el vecino Tōshōdai-ji: están a 10 minutos a pie.'],
      de: ['Yakushi-ji', 'Ein Tempel aus dem 7.–8. Jh. mit einer Ostpagode von 730, nach großer Restaurierung in den 2020ern wieder offen.', 'Mit dem benachbarten Tōshōdai-ji verbinden – 10 Minuten zu Fuß.'],
      fr: ['Yakushi-ji', 'Un temple des VIIe–VIIIe siècles, à la pagode Est de 730 rouverte après une grande restauration dans les années 2020.', 'Combinez-le avec le Tōshōdai-ji voisin, à 10 minutes à pied.'],
      it: ['Yakushi-ji', 'Un tempio del VII–VIII secolo con la Pagoda Est del 730, riaperta dopo un grande restauro negli anni Venti.', 'Abbinalo al vicino Tōshōdai-ji: 10 minuti a piedi.'],
    }, { price: level(1) }),
    P('toshodaiji', 'attraction', 34.6757, 135.7848, ROOF, 4.5, 5100, ['temples', 'history', 'unesco'], {
      ru: ['Тосёдай-дзи', 'Храм, основанный в 759 году китайским монахом Гандзином, который ослеп за годы попыток доплыть до Японии.', 'Тихий храм с соснами — хорош после многолюдного центра.'],
      en: ['Tōshōdai-ji', 'A temple founded in 759 by the Chinese monk Ganjin, who went blind during years of attempts to sail to Japan.', 'A quiet temple among pines — a good break after the busy centre.'],
      es: ['Tōshōdai-ji', 'Un templo fundado en 759 por el monje chino Ganjin, que quedó ciego en sus años de intentos de llegar a Japón.', 'Un templo tranquilo entre pinos, ideal tras el centro abarrotado.'],
      de: ['Tōshōdai-ji', 'Ein 759 vom chinesischen Mönch Ganjin gegründeter Tempel; er erblindete in den Jahren seiner Versuche, nach Japan zu segeln.', 'Ein ruhiger Tempel unter Kiefern – gut nach dem vollen Zentrum.'],
      fr: ['Tōshōdai-ji', 'Un temple fondé en 759 par le moine chinois Ganjin, devenu aveugle au fil de ses tentatives pour gagner le Japon.', 'Un temple paisible parmi les pins, idéal après le centre animé.'],
      it: ['Tōshōdai-ji', 'Un tempio fondato nel 759 dal monaco cinese Ganjin, diventato cieco negli anni di tentativi di raggiungere il Giappone.', 'Un tempio tranquillo tra i pini, ideale dopo il centro affollato.'],
    }, { spot: 'hidden', price: level(1) }),
    P('nara-national-museum', 'attraction', 34.683, 135.837, HALL, 4.5, 6800, ['museums', 'art', 'history'], {
      ru: ['Национальный музей Нары', 'Музей буддийского искусства в здании 1894 года и новых корпусах; осенью проходит знаменитая выставка сокровищ Сёсоин.', 'Выставка Сёсоин идёт с конца октября до середины ноября — билеты лучше брать заранее.'],
      en: ['Nara National Museum', 'A museum of Buddhist art in an 1894 building and newer wings; each autumn it hosts the famous Shōsōin treasures exhibition.', 'The Shōsōin show runs from late October to mid-November — book tickets ahead.'],
      es: ['Museo Nacional de Nara', 'Un museo de arte budista en un edificio de 1894 y alas nuevas; cada otoño acoge la famosa exposición de tesoros del Shōsōin.', 'La muestra del Shōsōin va de finales de octubre a mediados de noviembre: compra antes.'],
      de: ['Nationalmuseum Nara', 'Ein Museum buddhistischer Kunst in einem Bau von 1894 und neueren Flügeln; jeden Herbst die berühmte Shōsōin-Schatzausstellung.', 'Die Shōsōin-Schau läuft Ende Oktober bis Mitte November – Tickets vorab kaufen.'],
      fr: ['Musée national de Nara', 'Un musée d’art bouddhique dans un bâtiment de 1894 et des ailes récentes ; chaque automne, la célèbre exposition des trésors du Shōsōin.', 'L’exposition du Shōsōin dure de fin octobre à mi-novembre : réservez.'],
      it: ['Museo nazionale di Nara', 'Un museo di arte buddhista in un edificio del 1894 e ali nuove; ogni autunno la celebre mostra dei tesori dello Shōsōin.', 'La mostra dello Shōsōin va da fine ottobre a metà novembre: prenota.'],
    }, { price: level(1) }),
    P('akordu', 'food', 34.6866, 135.8361, HALL, 4.7, 600, ['food', 'luxury', 'romance'], {
      ru: ['akordu', 'Ресторан шефа Хироси Кавасимы в двух шагах от Тодай-дзи: авторская кухня из продуктов Нары; название по-баскски значит «воспоминания».', 'Только по предварительной брони; обед проще получить, чем ужин.'],
      en: ['akordu', 'Chef Hiroshi Kawashima’s restaurant a short walk from Tōdai-ji: creative cooking with Nara produce; the name is Basque for “memories”.', 'Reservations only; lunch is easier to get than dinner.'],
      es: ['akordu', 'El restaurante del chef Hiroshi Kawashima a pocos pasos de Tōdai-ji: cocina creativa con producto de Nara; el nombre significa «recuerdos» en euskera.', 'Solo con reserva; el almuerzo es más fácil de conseguir que la cena.'],
      de: ['akordu', 'Das Restaurant von Küchenchef Hiroshi Kawashima nahe Tōdai-ji: kreative Küche mit Produkten aus Nara; der Name ist baskisch für „Erinnerungen“.', 'Nur mit Reservierung; mittags ist leichter ein Platz zu bekommen.'],
      fr: ['akordu', 'Le restaurant du chef Hiroshi Kawashima, à deux pas du Tōdai-ji : cuisine créative aux produits de Nara ; son nom signifie « souvenirs » en basque.', 'Sur réservation uniquement ; le déjeuner est plus facile à obtenir.'],
      it: ['akordu', 'Il ristorante dello chef Hiroshi Kawashima a due passi dal Tōdai-ji: cucina creativa con prodotti di Nara; il nome in basco significa «ricordi».', 'Solo su prenotazione; il pranzo è più facile da ottenere della cena.'],
    }, { price: level(3), address: '70-1-3-1 Suimoncho', michelin: { award: 'star2', year: 2026 }, menu: [
      ['Lunch tasting menu', undefined, 'дегустационное меню на обед|lunch tasting menu|menú degustación de mediodía|Mittags-Degustationsmenü|menu dégustation du déjeuner|menu degustazione a pranzo'],
      ['Dinner tasting menu', undefined, 'дегустационное меню на ужин|dinner tasting menu|menú degustación de cena|Abend-Degustationsmenü|menu dégustation du dîner|menu degustazione a cena'],
    ] }),
    P('nakatanidou', 'food', 34.6826, 135.8268, DEER, 4.5, 14000, ['food', 'streetfood'], {
      ru: ['Накатанидо', 'Лавка моти, известная «скоростным» толчением: мастера бьют рисовое тесто молотами под крики — это шоу.', 'Возьмите тёплый ёмоги-моти с полынью, бобовой пастой и соевой мукой.'],
      en: ['Nakatanidou', 'A mochi shop famous for “high-speed” pounding: the makers hammer rice dough with mallets amid shouts — quite a show.', 'Get a warm yomogi mochi with mugwort, bean paste and soybean flour.'],
      es: ['Nakatanidou', 'Una tienda de mochi famosa por su machacado «a alta velocidad»: golpean la masa de arroz con mazos entre gritos, todo un espectáculo.', 'Pide un yomogi mochi tibio con artemisa, pasta de judía y harina de soja.'],
      de: ['Nakatanidou', 'Ein Mochi-Laden, berühmt für „Hochgeschwindigkeits“-Stampfen: Reisteig wird unter Rufen mit Holzhämmern geschlagen – eine Show.', 'Einen warmen Yomogi-Mochi mit Beifuß, Bohnenpaste und Sojamehl nehmen.'],
      fr: ['Nakatanidou', 'Une boutique de mochi célèbre pour son pilage « à grande vitesse » : on frappe la pâte de riz au maillet en criant, un vrai spectacle.', 'Prenez un yomogi mochi tiède à l’armoise, pâte de haricot et farine de soja.'],
      it: ['Nakatanidou', 'Un negozio di mochi famoso per la battitura «ad alta velocità»: martellano l’impasto di riso tra le grida, un vero spettacolo.', 'Prendi un yomogi mochi tiepido con artemisia, pasta di fagioli e farina di soia.'],
    }, { spot: 'insta', price: level(1), address: '29 Hashimotocho', menu: [
      ['Yomogi mochi', undefined, 'моти с полынью и бобовой пастой|mugwort mochi with bean paste|mochi de artemisa con pasta de judía|Beifuß-Mochi mit Bohnenpaste|mochi à l’armoise et pâte de haricot|mochi all’artemisia con pasta di fagioli'],
      ['Kinako', undefined, 'посыпка из соевой муки|roasted soybean flour coating|cobertura de harina de soja tostada|Überzug aus geröstetem Sojamehl|enrobage de farine de soja grillée|copertura di farina di soia tostata'],
    ] }),
    P('hiraso', 'food', 34.681, 135.83, ROOF, 4.3, 2600, ['food', 'history'], {
      ru: ['Хирасо', 'Старая лавка у пруда Сарусава, где делают какиноха-дзуси — суши со скумбрией или лососем, завёрнутые в лист хурмы.', 'Купите коробку в дорогу — лист сохраняет суши свежими.'],
      en: ['Hiraso', 'An old shop by Sarusawa Pond making kakinoha-zushi — mackerel or salmon sushi wrapped in persimmon leaves.', 'Buy a box for the road — the leaf keeps the sushi fresh.'],
      es: ['Hiraso', 'Una vieja tienda junto al estanque Sarusawa que hace kakinoha-zushi: sushi de caballa o salmón envuelto en hojas de caqui.', 'Compra una caja para el camino: la hoja mantiene el sushi fresco.'],
      de: ['Hiraso', 'Ein alter Laden am Sarusawa-Teich mit Kakinoha-zushi – Makrelen- oder Lachs-Sushi in Kakiblättern.', 'Eine Schachtel für unterwegs kaufen – das Blatt hält das Sushi frisch.'],
      fr: ['Hiraso', 'Une vieille boutique près de l’étang Sarusawa qui prépare le kakinoha-zushi : sushi au maquereau ou au saumon enveloppé de feuilles de kaki.', 'Prenez une boîte pour la route : la feuille garde le sushi frais.'],
      it: ['Hiraso', 'Un vecchio negozio sullo stagno Sarusawa che prepara il kakinoha-zushi: sushi di sgombro o salmone avvolto in foglie di cachi.', 'Compra una scatola per il viaggio: la foglia mantiene fresco il sushi.'],
    }, { price: level(1), menu: [
      ['Kakinoha-zushi', undefined, 'суши в листе хурмы|sushi wrapped in persimmon leaf|sushi envuelto en hoja de caqui|Sushi im Kakiblatt|sushi en feuille de kaki|sushi in foglia di cachi'],
      ['Chagayu', undefined, 'рисовая каша на чае|rice porridge cooked in tea|gachas de arroz al té|Reisbrei in Tee gekocht|bouillie de riz au thé|porridge di riso al tè'],
    ] }),
    P('kamameshi-shizuka', 'food', 34.6853, 135.8353, POND, 4.3, 3800, ['food'], {
      ru: ['Камамэси Сидзука', 'Рис, приготовленный в отдельном чугунном горшочке с курицей, морепродуктами или овощами, — у парка рядом с Исуйэном.', 'Камамэси готовят под заказ около 20 минут; поджаристая корочка на дне — самое вкусное.'],
      en: ['Kamameshi Shizuka', 'Rice cooked in its own little iron pot with chicken, seafood or vegetables — by the park near Isuien.', 'Each pot is cooked to order in about 20 minutes; the crispy crust at the bottom is the best part.'],
      es: ['Kamameshi Shizuka', 'Arroz cocinado en su propia ollita de hierro con pollo, marisco o verduras, junto al parque cerca del Isuien.', 'Cada olla se hace al momento en unos 20 minutos; la costra tostada del fondo es lo mejor.'],
      de: ['Kamameshi Shizuka', 'Reis im eigenen kleinen Eisentopf mit Hähnchen, Meeresfrüchten oder Gemüse – am Park nahe dem Isuien.', 'Jeder Topf wird in etwa 20 Minuten frisch gegart; die knusprige Kruste am Boden ist das Beste.'],
      fr: ['Kamameshi Shizuka', 'Du riz cuit dans sa petite marmite en fonte avec poulet, fruits de mer ou légumes, près du parc et de l’Isuien.', 'Chaque marmite cuit à la commande en 20 minutes environ ; la croûte grillée du fond est le meilleur.'],
      it: ['Kamameshi Shizuka', 'Riso cotto nella sua pentolina di ferro con pollo, frutti di mare o verdure, vicino al parco e all’Isuien.', 'Ogni pentola si cuoce al momento in circa 20 minuti; la crosticina sul fondo è la parte migliore.'],
    }, { price: level(2), menu: [
      ['Kamameshi', undefined, 'рис в чугунном горшочке|rice cooked in an iron pot|arroz en olla de hierro|Reis im Eisentopf|riz cuit en marmite de fonte|riso nella pentola di ferro'],
      ['Seafood kamameshi', undefined, 'камамэси с морепродуктами|seafood kamameshi|kamameshi de marisco|Kamameshi mit Meeresfrüchten|kamameshi aux fruits de mer|kamameshi ai frutti di mare'],
    ] }),
    P('kasuga-ninai-chaya', 'food', 34.6815, 135.8455, LANTERNS, 4.3, 1900, ['food', 'history'], {
      ru: ['Касуга Нинай-тяя', 'Чайный дом на территории Касуга-тайся, где подают манъё-гаю — рисовую кашу с сезонными травами, как в древних стихах.', 'Хорошая лёгкая трапеза посреди прогулки по святилищу.'],
      en: ['Kasuga Ninai Chaya', 'A teahouse in the Kasuga Taisha grounds serving man’yō-gayu — rice porridge with seasonal herbs, as in ancient poems.', 'A light, gentle meal halfway through a shrine walk.'],
      es: ['Kasuga Ninai Chaya', 'Una casa de té en el recinto de Kasuga Taisha que sirve man’yō-gayu, gachas de arroz con hierbas de temporada como en los poemas antiguos.', 'Una comida ligera a mitad de paseo por el santuario.'],
      de: ['Kasuga Ninai Chaya', 'Ein Teehaus auf dem Gelände des Kasuga Taisha mit Man’yō-gayu – Reisbrei mit Saisonkräutern wie in alten Gedichten.', 'Ein leichtes Essen mitten im Schreinspaziergang.'],
      fr: ['Kasuga Ninai Chaya', 'Une maison de thé dans l’enceinte du Kasuga Taisha servant le man’yō-gayu, bouillie de riz aux herbes de saison comme dans les poèmes anciens.', 'Un repas léger au milieu de la promenade au sanctuaire.'],
      it: ['Kasuga Ninai Chaya', 'Una casa da tè nel recinto del Kasuga Taisha che serve il man’yō-gayu, porridge di riso con erbe di stagione come negli antichi poemi.', 'Un pasto leggero a metà della passeggiata al santuario.'],
    }, { price: level(1), menu: [
      ['Man’yō-gayu', undefined, 'рисовая каша с сезонными травами|rice porridge with seasonal herbs|gachas de arroz con hierbas de temporada|Reisbrei mit Saisonkräutern|bouillie de riz aux herbes de saison|porridge di riso con erbe di stagione'],
      ['Matcha and sweet', undefined, 'маття со сладостью|matcha with a sweet|matcha con dulce|Matcha mit Süßigkeit|matcha et douceur|matcha con dolcetto'],
    ] }),
    P('mizuya-chaya', 'food', 34.6845, 135.847, ARCH, 4.4, 2400, ['food', 'photo'], {
      ru: ['Мидзуя-тяя', 'Чайный домик под соломенной крышей у ручья между Касуга-тайся и Тодай-дзи — особенно красив осенью среди клёнов.', 'Летом закажите какигори — колотый лёд с сиропом маття.'],
      en: ['Mizuya Chaya', 'A thatched teahouse by a stream between Kasuga Taisha and Tōdai-ji — especially pretty among the autumn maples.', 'In summer order kakigōri — shaved ice with matcha syrup.'],
      es: ['Mizuya Chaya', 'Una casa de té con tejado de paja junto a un arroyo entre Kasuga Taisha y Tōdai-ji, preciosa entre los arces de otoño.', 'En verano pide kakigōri, hielo raspado con sirope de matcha.'],
      de: ['Mizuya Chaya', 'Ein strohgedecktes Teehaus am Bach zwischen Kasuga Taisha und Tōdai-ji – besonders schön im Herbstahorn.', 'Im Sommer Kakigōri bestellen – geschabtes Eis mit Matcha-Sirup.'],
      fr: ['Mizuya Chaya', 'Une maison de thé au toit de chaume au bord d’un ruisseau, entre Kasuga Taisha et Tōdai-ji, superbe parmi les érables d’automne.', 'L’été, commandez un kakigōri, glace pilée au sirop de matcha.'],
      it: ['Mizuya Chaya', 'Una casa da tè dal tetto di paglia su un ruscello tra Kasuga Taisha e Tōdai-ji, bellissima tra gli aceri d’autunno.', 'D’estate ordina il kakigōri, ghiaccio tritato con sciroppo di matcha.'],
    }, { spot: 'insta', price: level(1), menu: [
      ['Kakigōri', undefined, 'колотый лёд с сиропом|shaved ice with syrup|hielo raspado con sirope|geschabtes Eis mit Sirup|glace pilée au sirop|ghiaccio tritato con sciroppo'],
      ['Udon', undefined, 'удон в бульоне|udon in broth|udon en caldo|Udon in Brühe|udon en bouillon|udon in brodo'],
    ] }),
    P('mahoroba-daibutsu-purin', 'food', 34.6823, 135.8263, DEER, 4.3, 2200, ['food'], {
      ru: ['Mahoroba Daibutsu Purin', 'Нарский пудинг в стеклянных баночках с изображением Большого Будды на крышке — популярный сувенир.', 'Классический — с карамелью; есть сезонные вкусы.'],
      en: ['Mahoroba Daibutsu Purin', 'Nara’s pudding in little glass jars with the Great Buddha on the lid — a favourite souvenir.', 'The classic has caramel; there are seasonal flavours too.'],
      es: ['Mahoroba Daibutsu Purin', 'El pudin de Nara en tarritos de cristal con el Gran Buda en la tapa, un recuerdo muy popular.', 'El clásico lleva caramelo; también hay sabores de temporada.'],
      de: ['Mahoroba Daibutsu Purin', 'Naras Pudding in Gläschen mit dem Großen Buddha auf dem Deckel – ein beliebtes Mitbringsel.', 'Der Klassiker mit Karamell; dazu Saisonsorten.'],
      fr: ['Mahoroba Daibutsu Purin', 'Le pudding de Nara en petits pots de verre avec le Grand Bouddha sur le couvercle, un souvenir apprécié.', 'Le classique est au caramel ; il existe des parfums de saison.'],
      it: ['Mahoroba Daibutsu Purin', 'Il budino di Nara in vasetti di vetro col Grande Buddha sul coperchio, un souvenir molto amato.', 'Il classico è al caramello; ci sono anche gusti di stagione.'],
    }, { price: level(1), menu: [
      ['Daibutsu purin', undefined, 'пудинг с карамелью|caramel custard pudding|pudin de caramelo|Karamellpudding|crème caramel|budino al caramello'],
      ['Seasonal purin', undefined, 'сезонный пудинг|seasonal pudding|pudin de temporada|Saisonpudding|pudding de saison|budino di stagione'],
    ] }),
    P('edogawa-naramachi', 'food', 34.6795, 135.8285, ROOF, 4.3, 1600, ['food', 'history'], {
      ru: ['Эдогава (Нарамати)', 'Угорь унаги на гриле в старом доме-матия квартала Нарамати: комнаты с татами и внутренним садиком.', 'Возьмите хицумабуси — угорь на рисе, который в конце заливают бульоном.'],
      en: ['Edogawa (Naramachi)', 'Grilled unagi eel in an old Naramachi machiya: tatami rooms and an inner garden.', 'Order hitsumabushi — eel over rice, finished with broth poured over.'],
      es: ['Edogawa (Naramachi)', 'Anguila unagi a la parrilla en una vieja machiya de Naramachi: salas de tatami y un jardín interior.', 'Pide hitsumabushi: anguila sobre arroz que al final se riega con caldo.'],
      de: ['Edogawa (Naramachi)', 'Gegrillter Unagi-Aal in einem alten Machiya in Naramachi: Tatami-Räume und ein Innengarten.', 'Hitsumabushi bestellen – Aal auf Reis, zum Schluss mit Brühe übergossen.'],
      fr: ['Edogawa (Naramachi)', 'Anguille unagi grillée dans une vieille machiya de Naramachi : salles tatami et jardin intérieur.', 'Prenez le hitsumabushi : anguille sur riz, finie avec un bouillon versé dessus.'],
      it: ['Edogawa (Naramachi)', 'Anguilla unagi alla griglia in una vecchia machiya di Naramachi: sale con tatami e un giardino interno.', 'Ordina l’hitsumabushi: anguilla su riso, da finire versando il brodo.'],
    }, { price: level(3), menu: [
      ['Unajū', undefined, 'угорь на рисе в лакированной коробке|eel over rice in a lacquer box|anguila sobre arroz en caja lacada|Aal auf Reis in Lackbox|anguille sur riz en boîte laquée|anguilla su riso in scatola laccata'],
      ['Hitsumabushi', undefined, 'угорь на рисе с бульоном|eel rice finished with broth|arroz con anguila y caldo|Aalreis mit Brühe|riz à l’anguille et bouillon|riso con anguilla e brodo'],
    ] }),
    P('nara-hotel', 'food', 34.6807, 135.8355, HALL, 4.5, 3300, ['food', 'history', 'romance'], {
      ru: ['Отель Нара (ресторан «Микаса»)', 'Классический отель 1909 года по проекту Тацуно Кинго, автора Токийского вокзала: старинный зал ресторана и чайная гостиная.', 'Даже без ночёвки можно пообедать или выпить чай с видом на сад.'],
      en: ['Nara Hotel (Mikasa restaurant)', 'A classic 1909 hotel designed by Tatsuno Kingo, architect of Tokyo Station: a period dining room and a tea lounge.', 'Even without staying you can have lunch or tea with a garden view.'],
      es: ['Nara Hotel (restaurante Mikasa)', 'Un hotel clásico de 1909 diseñado por Tatsuno Kingo, autor de la estación de Tokio: comedor de época y salón de té.', 'Aunque no te alojes, puedes comer o tomar el té con vistas al jardín.'],
      de: ['Nara Hotel (Restaurant Mikasa)', 'Ein klassisches Hotel von 1909, entworfen von Tatsuno Kingo, dem Architekten des Bahnhofs Tokio: historischer Speisesaal und Teelounge.', 'Auch ohne Übernachtung kann man mittagessen oder Tee mit Gartenblick trinken.'],
      fr: ['Nara Hotel (restaurant Mikasa)', 'Un hôtel classique de 1909 dessiné par Tatsuno Kingo, l’architecte de la gare de Tokyo : salle à manger d’époque et salon de thé.', 'Même sans y loger, on peut déjeuner ou prendre le thé face au jardin.'],
      it: ['Nara Hotel (ristorante Mikasa)', 'Un hotel classico del 1909 progettato da Tatsuno Kingo, architetto della stazione di Tokyo: sala da pranzo d’epoca e salotto del tè.', 'Anche senza dormirci puoi pranzare o prendere il tè con vista sul giardino.'],
    }, { price: level(3), menu: [
      ['Western set lunch', undefined, 'европейский обед из нескольких блюд|Western-style set lunch|menú de almuerzo occidental|westliches Mittagsmenü|déjeuner à l’occidentale|pranzo all’occidentale'],
      ['Afternoon tea', undefined, 'послеобеденный чай|afternoon tea|té de la tarde|Afternoon Tea|thé de l’après-midi|tè del pomeriggio'],
    ] }),
    P('mentouan', 'food', 34.6804, 135.8298, ROOF, 4.3, 3100, ['food'], {
      ru: ['Мэнтоан', 'Удонная у пруда Сарусава с «кинтяку-кицунэ»: огромный мешочек из жареного тофу, внутри которого спрятан удон.', 'Разрежьте мешочек палочками прямо в бульоне — так задумано.'],
      en: ['Mentōan', 'An udon shop near Sarusawa Pond serving “kinchaku kitsune”: a giant fried-tofu pouch with udon hidden inside.', 'Cut the pouch open with your chopsticks in the broth — that’s the idea.'],
      es: ['Mentōan', 'Un local de udon junto al estanque Sarusawa con «kinchaku kitsune»: una enorme bolsa de tofu frito con udon dentro.', 'Abre la bolsa con los palillos en el caldo: esa es la gracia.'],
      de: ['Mentōan', 'Ein Udon-Laden am Sarusawa-Teich mit „Kinchaku Kitsune“: ein riesiger frittierter Tofubeutel, in dem Udon steckt.', 'Den Beutel mit den Stäbchen in der Brühe aufschneiden – so ist es gedacht.'],
      fr: ['Mentōan', 'Une échoppe d’udon près de l’étang Sarusawa servant le « kinchaku kitsune » : une énorme bourse de tofu frit cachant des udon.', 'Ouvrez la bourse aux baguettes dans le bouillon : c’est le principe.'],
      it: ['Mentōan', 'Un locale di udon vicino allo stagno Sarusawa con il «kinchaku kitsune»: un enorme sacchetto di tofu fritto con dentro gli udon.', 'Apri il sacchetto con le bacchette nel brodo: è così che si fa.'],
    }, { price: level(1), menu: [
      ['Kinchaku kitsune udon', undefined, 'удон в мешочке из жареного тофу|udon inside a fried-tofu pouch|udon dentro de una bolsa de tofu frito|Udon im frittierten Tofubeutel|udon dans une bourse de tofu frit|udon in un sacchetto di tofu fritto'],
      ['Curry udon', undefined, 'удон с карри|curry udon|udon al curry|Curry-Udon|udon au curry|udon al curry'],
    ] }),
  ],
  routes: [
    D(['nara-park', 'todaiji', 'nigatsudo', 'kasuga-ninai-chaya', 'kasuga-taisha', 'mizuya-chaya', 'mount-wakakusa', 'akordu'],
      'Олени, Большой Будда и тысячи фонарей Касуги|The deer, the Great Buddha and Kasuga’s thousands of lanterns|Los ciervos, el Gran Buda y los miles de faroles de Kasuga|Die Hirsche, der Große Buddha und Kasugas tausend Laternen|Les cerfs, le Grand Bouddha et les milliers de lanternes de Kasuga|I cervi, il Grande Buddha e le migliaia di lanterne di Kasuga'),
    D(['kofukuji', 'nara-national-museum', 'isuien', 'yoshikien', 'kamameshi-shizuka', 'nakatanidou', 'naramachi', 'edogawa-naramachi'],
      'Кофуку-дзи, сады у парка и старый Нарамати|Kōfuku-ji, the gardens by the park and old Naramachi|Kōfuku-ji, los jardines junto al parque y el viejo Naramachi|Kōfuku-ji, die Gärten am Park und das alte Naramachi|Kōfuku-ji, les jardins du parc et le vieux Naramachi|Kōfuku-ji, i giardini del parco e la vecchia Naramachi'),
    D(['toshodaiji', 'yakushiji', 'horyuji', 'mentouan', 'nara-hotel'],
      'Древнейшие храмы: Тосёдай-дзи, Якуси-дзи и Хорю-дзи|The oldest temples: Tōshōdai-ji, Yakushi-ji and Hōryū-ji|Los templos más antiguos: Tōshōdai-ji, Yakushi-ji y Hōryū-ji|Die ältesten Tempel: Tōshōdai-ji, Yakushi-ji und Hōryū-ji|Les plus vieux temples : Tōshōdai-ji, Yakushi-ji et Hōryū-ji|I templi più antichi: Tōshōdai-ji, Yakushi-ji e Hōryū-ji'),
  ],
};

export default pack;
