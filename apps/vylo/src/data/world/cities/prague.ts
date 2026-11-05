import type { CityPack } from '../types';
import { free, level, makeDay, makePlace } from './_kit.ts';

const P = makePlace('prague');
const D = makeDay('prague');
const CITY = '3Ovurn490hw';
const BRIDGE = '68cHAtrDd1M';
const CASTLE = '6En4WYsNYXM';
const STREET = 'yK_Uz7NGyu0';
const VIEW = 'uQ2ervqdEQo';

const pack: CityPack = {
  country: 'CZ',
  city: 'prague',
  places: [
    P('old-town-square', 'attraction', 50.0875, 14.4213, CITY, 4.8, 121000, ['oldtown', 'architecture', 'history'], {
      ru: ['Староместская площадь', 'Главная площадь Праги с Тынским храмом, ратушей, барочными домами и памятником Яну Гусу; зимой здесь рождественский рынок.', 'Поднимитесь на башню ратуши — с неё лучший вид на площадь и Тынский храм.'],
      en: ['Old Town Square', 'Prague’s main square with the Týn Church, the Town Hall, Baroque houses and the Jan Hus memorial; a Christmas market in winter.', 'Climb the Town Hall tower for the best view of the square and the Týn Church.'],
      es: ['Plaza de la Ciudad Vieja', 'La plaza principal de Praga con la iglesia de Týn, el Ayuntamiento, casas barrocas y el monumento a Jan Hus; mercado navideño en invierno.', 'Sube a la torre del Ayuntamiento para la mejor vista de la plaza y Týn.'],
      de: ['Altstädter Ring', 'Prags Hauptplatz mit Teynkirche, Rathaus, Barockhäusern und Jan-Hus-Denkmal; im Winter Weihnachtsmarkt.', 'Auf den Rathausturm steigen – bester Blick auf Platz und Teynkirche.'],
      fr: ['Place de la Vieille-Ville', 'La grande place de Prague : église de Týn, hôtel de ville, maisons baroques et monument à Jan Hus ; marché de Noël en hiver.', 'Montez à la tour de l’hôtel de ville pour la plus belle vue sur la place et Týn.'],
      it: ['Piazza della Città Vecchia', 'La piazza principale di Praga con la chiesa di Týn, il Municipio, case barocche e il monumento a Jan Hus; mercatino di Natale d’inverno.', 'Sali sulla torre del Municipio per la vista migliore sulla piazza e su Týn.'],
    }, { spot: 'insta', price: free, hours: 'always' }),
    P('astronomical-clock', 'attraction', 50.087, 14.4208, CITY, 4.4, 65000, ['history', 'architecture'], {
      ru: ['Пражские куранты (Орлой)', 'Средневековые астрономические часы 1410 года на стене ратуши: каждый час появляются апостолы, а Смерть звонит в колокольчик.', 'Шоу длится около 45 секунд — займите место за 10 минут до начала часа.'],
      en: ['Astronomical Clock (Orloj)', 'A medieval astronomical clock from 1410 on the Town Hall: every hour the apostles appear and Death rings a bell.', 'The show lasts about 45 seconds — get a spot 10 minutes before the hour.'],
      es: ['Reloj Astronómico (Orloj)', 'Un reloj astronómico medieval de 1410 en el Ayuntamiento: cada hora aparecen los apóstoles y la Muerte toca la campana.', 'El espectáculo dura unos 45 segundos: colócate 10 minutos antes.'],
      de: ['Astronomische Uhr (Orloj)', 'Eine mittelalterliche astronomische Uhr von 1410 am Rathaus: zur vollen Stunde erscheinen die Apostel und der Tod läutet.', 'Die Show dauert etwa 45 Sekunden – 10 Minuten vorher Platz suchen.'],
      fr: ['Horloge astronomique (Orloj)', 'Une horloge astronomique médiévale de 1410 sur l’hôtel de ville : chaque heure, les apôtres défilent et la Mort sonne la cloche.', 'Le spectacle dure environ 45 secondes : placez-vous 10 minutes avant.'],
      it: ['Orologio astronomico (Orloj)', 'Un orologio astronomico medievale del 1410 sul Municipio: ogni ora appaiono gli apostoli e la Morte suona la campana.', 'Lo spettacolo dura circa 45 secondi: prendi posto 10 minuti prima.'],
    }, { price: free }),
    P('josefov', 'attraction', 50.09, 14.418, STREET, 4.6, 24000, ['history', 'museums'], {
      ru: ['Йозефов — Еврейский квартал', 'Синагоги Староновая, Испанская и Пинкасова и Старое еврейское кладбище с тысячами надгробий в несколько слоёв.', 'Один билет Еврейского музея открывает несколько синагог и кладбище; по субботам и еврейским праздникам закрыто.'],
      en: ['Josefov — the Jewish Quarter', 'The Old-New, Spanish and Pinkas synagogues and the Old Jewish Cemetery with thousands of layered gravestones.', 'One Jewish Museum ticket covers several synagogues and the cemetery; closed on Saturdays and Jewish holidays.'],
      es: ['Josefov — el Barrio Judío', 'Las sinagogas Vieja-Nueva, Española y Pinkas y el Viejo Cementerio Judío con miles de lápidas superpuestas.', 'Una entrada del Museo Judío incluye varias sinagogas y el cementerio; cierra sábados y fiestas judías.'],
      de: ['Josefov – das jüdische Viertel', 'Die Altneu-, Spanische und Pinkas-Synagoge und der Alte Jüdische Friedhof mit Tausenden geschichteter Grabsteine.', 'Ein Ticket des Jüdischen Museums gilt für mehrere Synagogen und den Friedhof; samstags und an jüdischen Feiertagen geschlossen.'],
      fr: ['Josefov — le quartier juif', 'Les synagogues Vieille-Nouvelle, Espagnole et Pinkas et le vieux cimetière juif aux milliers de stèles superposées.', 'Un billet du Musée juif couvre plusieurs synagogues et le cimetière ; fermé le samedi et les fêtes juives.'],
      it: ['Josefov — il quartiere ebraico', 'Le sinagoghe Vecchia-Nuova, Spagnola e Pinkas e il Vecchio cimitero ebraico con migliaia di lapidi sovrapposte.', 'Un biglietto del Museo ebraico include varie sinagoghe e il cimitero; chiuso il sabato e nelle feste ebraiche.'],
    }, { hours: '09:00–18:00' }),
    P('vysehrad', 'attraction', 50.0645, 14.418, VIEW, 4.7, 32000, ['history', 'views'], {
      ru: ['Вышеград', 'Старинная крепость над Влтавой с базиликой Петра и Павла и кладбищем, где покоятся Дворжак, Сметана и Муха; тихие стены с видом на реку.', 'Отличное место для заката без толп; спуститесь потом к кубистическим домам у подножия.'],
      en: ['Vyšehrad', 'An old fortress above the Vltava with the Basilica of Sts Peter and Paul and the cemetery where Dvořák, Smetana and Mucha rest; quiet ramparts over the river.', 'A great crowd-free sunset spot; then walk down to the Cubist houses below.'],
      es: ['Vyšehrad', 'Una antigua fortaleza sobre el Moldava con la basílica de San Pedro y San Pablo y el cementerio de Dvořák, Smetana y Mucha; murallas tranquilas sobre el río.', 'Gran atardecer sin multitudes; luego baja a las casas cubistas.'],
      de: ['Vyšehrad', 'Eine alte Festung über der Moldau mit der Basilika St. Peter und Paul und dem Friedhof, auf dem Dvořák, Smetana und Mucha ruhen; ruhige Wälle über dem Fluss.', 'Toller Sonnenuntergang ohne Gedränge; danach zu den kubistischen Häusern hinunter.'],
      fr: ['Vyšehrad', 'Une ancienne forteresse au-dessus de la Vltava, basilique Saints-Pierre-et-Paul et cimetière de Dvořák, Smetana et Mucha ; remparts paisibles sur la rivière.', 'Parfait pour un coucher de soleil sans foule ; descendez ensuite vers les maisons cubistes.'],
      it: ['Vyšehrad', 'Un’antica fortezza sulla Moldava con la basilica dei Santi Pietro e Paolo e il cimitero dove riposano Dvořák, Smetana e Mucha; bastioni tranquilli sul fiume.', 'Ottimo tramonto senza folla; poi scendi alle case cubiste.'],
    }, { spot: 'hidden', price: free }),
    P('petrin-hill', 'nature', 50.0833, 14.395, VIEW, 4.7, 26000, ['views', 'gardens', 'hiking'], {
      ru: ['Петршин', 'Зелёный холм над Малой Страной с садами, розарием, зеркальным лабиринтом и смотровой башней — уменьшенной копией Эйфелевой.', 'Наверх — на фуникулёре от улицы Уезд (действует обычный билет на транспорт), вниз — пешком через сады.'],
      en: ['Petřín Hill', 'A green hill above Malá Strana with orchards, a rose garden, a mirror maze and a lookout tower modelled on the Eiffel Tower.', 'Go up by funicular from Újezd (a regular transport ticket works), walk down through the orchards.'],
      es: ['Colina de Petřín', 'Una colina verde sobre Malá Strana con huertos, rosaleda, laberinto de espejos y una torre mirador inspirada en la Eiffel.', 'Sube en el funicular desde Újezd (vale el billete de transporte) y baja a pie por los huertos.'],
      de: ['Petřín', 'Ein grüner Hügel über der Kleinseite mit Obstgärten, Rosengarten, Spiegellabyrinth und einem dem Eiffelturm nachempfundenen Aussichtsturm.', 'Mit der Standseilbahn ab Újezd hinauf (normales Fahrticket gilt), zu Fuß durch die Gärten hinunter.'],
      fr: ['Colline de Petřín', 'Une colline verte au-dessus de Malá Strana : vergers, roseraie, labyrinthe de miroirs et tour d’observation inspirée de la tour Eiffel.', 'Montez en funiculaire depuis Újezd (ticket de transport valable), descendez à pied par les vergers.'],
      it: ['Collina di Petřín', 'Una collina verde sopra Malá Strana con frutteti, roseto, labirinto di specchi e una torre panoramica ispirata alla Tour Eiffel.', 'Sali in funicolare da Újezd (vale il biglietto dei mezzi) e scendi a piedi tra i frutteti.'],
    }, { spot: 'insta', price: free }),
    P('strahov-monastery', 'attraction', 50.0863, 14.3893, CASTLE, 4.7, 18000, ['history', 'architecture'], {
      ru: ['Страговский монастырь', 'Премонстрантский монастырь над Градчанами с двумя барочными библиотечными залами — Богословским и Философским — с расписными потолками.', 'В залы смотрят от входа, но вид всё равно потрясающий; рядом монастырская пивоварня.'],
      en: ['Strahov Monastery', 'A Premonstratensian monastery above Hradčany with two Baroque library halls — Theological and Philosophical — under painted ceilings.', 'You view the halls from the doorway, but it’s still stunning; the monastery brewery is next door.'],
      es: ['Monasterio de Strahov', 'Un monasterio premonstratense sobre Hradčany con dos bibliotecas barrocas —Teológica y Filosófica— de techos pintados.', 'Las salas se ven desde la puerta, pero impresionan igual; al lado está la cervecería del monasterio.'],
      de: ['Kloster Strahov', 'Ein Prämonstratenserkloster über dem Hradschin mit zwei barocken Bibliothekssälen – Theologischer und Philosophischer Saal – mit bemalten Decken.', 'Man sieht die Säle von der Tür aus, trotzdem atemberaubend; nebenan die Klosterbrauerei.'],
      fr: ['Monastère de Strahov', 'Un monastère prémontré au-dessus de Hradčany avec deux bibliothèques baroques, théologique et philosophique, aux plafonds peints.', 'On voit les salles depuis le seuil, mais c’est saisissant ; la brasserie du monastère est à côté.'],
      it: ['Monastero di Strahov', 'Un monastero premostratense sopra Hradčany con due biblioteche barocche, Teologica e Filosofica, dai soffitti affrescati.', 'Le sale si guardano dalla soglia, ma restano spettacolari; accanto c’è il birrificio del monastero.'],
    }, { hours: '09:00–17:00' }),
    P('municipal-house', 'attraction', 50.0874, 14.428, CITY, 4.7, 17500, ['architecture', 'art'], {
      ru: ['Общественный дом (Обецни дум)', 'Шедевр чешского модерна 1912 года у Пороховой башни: концертный зал Сметаны, зал Мэра с росписями Альфонса Мухи и кафе.', 'Интерьеры показывают на экскурсиях; без экскурсии загляните в кафе — оно открыто всем.'],
      en: ['Municipal House (Obecní dům)', 'A 1912 masterpiece of Czech Art Nouveau by the Powder Tower: Smetana Hall, the Mayor’s Hall painted by Alfons Mucha and a café.', 'Interiors are shown on guided tours; otherwise step into the café, open to all.'],
      es: ['Casa Municipal (Obecní dům)', 'Una obra maestra del modernismo checo (1912) junto a la Torre de la Pólvora: la sala Smetana, el Salón del Alcalde pintado por Mucha y un café.', 'Los interiores se ven con visita guiada; si no, entra al café, abierto a todos.'],
      de: ['Gemeindehaus (Obecní dům)', 'Ein Meisterwerk des tschechischen Jugendstils von 1912 am Pulverturm: Smetana-Saal, der von Alfons Mucha ausgemalte Bürgermeistersaal und ein Café.', 'Innenräume bei Führungen; sonst ins Café gehen, das allen offensteht.'],
      fr: ['Maison municipale (Obecní dům)', 'Un chef-d’œuvre de l’Art nouveau tchèque (1912) près de la tour Poudrière : salle Smetana, salon du Maire peint par Mucha et un café.', 'Intérieurs en visite guidée ; sinon, entrez au café, ouvert à tous.'],
      it: ['Casa Municipale (Obecní dům)', 'Un capolavoro del liberty ceco del 1912 accanto alla Torre delle Polveri: la sala Smetana, la Sala del Sindaco dipinta da Mucha e un caffè.', 'Gli interni si vedono con visita guidata; altrimenti entra nel caffè, aperto a tutti.'],
    }, { address: 'Náměstí Republiky 5' }),
    P('wenceslas-square', 'attraction', 50.081, 14.428, CITY, 4.4, 59000, ['history', 'city', 'shopping'], {
      ru: ['Вацлавская площадь', 'Бульвар длиной 750 м с конной статуей святого Вацлава и Национальным музеем — место событий Бархатной революции 1989 года.', 'Зайдите в обновлённый Национальный музей наверху площади — с его купола вид на весь бульвар.'],
      en: ['Wenceslas Square', 'A 750 m boulevard with the equestrian statue of St Wenceslas and the National Museum — the stage of the 1989 Velvet Revolution.', 'Visit the renovated National Museum at the top — its dome looks down the whole boulevard.'],
      es: ['Plaza de Wenceslao', 'Un bulevar de 750 m con la estatua ecuestre de San Wenceslao y el Museo Nacional, escenario de la Revolución de Terciopelo de 1989.', 'Visita el renovado Museo Nacional arriba: desde su cúpula se ve todo el bulevar.'],
      de: ['Wenzelsplatz', 'Ein 750 m langer Boulevard mit dem Reiterstandbild des hl. Wenzel und dem Nationalmuseum – Schauplatz der Samtenen Revolution 1989.', 'Das renovierte Nationalmuseum oben besuchen – von der Kuppel blickt man über den Boulevard.'],
      fr: ['Place Venceslas', 'Un boulevard de 750 m avec la statue équestre de saint Venceslas et le Musée national, théâtre de la révolution de Velours de 1989.', 'Visitez le Musée national rénové en haut : de sa coupole, vue sur tout le boulevard.'],
      it: ['Piazza San Venceslao', 'Un viale di 750 m con la statua equestre di San Venceslao e il Museo Nazionale, teatro della Rivoluzione di velluto del 1989.', 'Visita il Museo Nazionale rinnovato in cima: dalla cupola si vede tutto il viale.'],
    }, { price: free, hours: 'always' }),
    P('dancing-house', 'attraction', 50.0755, 14.4141, VIEW, 4.4, 41000, ['architecture', 'views'], {
      ru: ['Танцующий дом', 'Деконструктивистское здание Фрэнка Гери и Владо Милунича (1996) на набережной, прозванное «Джинджер и Фред»; наверху — бар с террасой.', 'Поднимитесь в бар на крыше — за напиток вид на Влтаву и Град.'],
      en: ['Dancing House', 'Frank Gehry and Vlado Milunić’s deconstructivist building (1996) on the embankment, nicknamed “Ginger and Fred”; a rooftop bar on top.', 'Go up to the rooftop bar — the price of a drink buys a view of the Vltava and the Castle.'],
      es: ['Casa Danzante', 'El edificio deconstructivista de Frank Gehry y Vlado Milunić (1996) junto al río, apodado “Ginger y Fred”; arriba hay un bar con terraza.', 'Sube al bar de la azotea: por una bebida, vistas al Moldava y el Castillo.'],
      de: ['Tanzendes Haus', 'Frank Gehrys und Vlado Milunićs dekonstruktivistischer Bau (1996) am Ufer, „Ginger und Fred“ genannt; oben eine Dachbar.', 'In die Dachbar fahren – für einen Drink Blick auf Moldau und Burg.'],
      fr: ['Maison dansante', 'Le bâtiment déconstructiviste de Frank Gehry et Vlado Milunić (1996) sur le quai, surnommé « Ginger et Fred » ; bar en terrasse au sommet.', 'Montez au bar du toit : le prix d’un verre pour la vue sur la Vltava et le Château.'],
      it: ['Casa Danzante', 'L’edificio decostruttivista di Frank Gehry e Vlado Milunić (1996) sul lungofiume, detto “Ginger e Fred”; in cima un bar con terrazza.', 'Sali al bar sul tetto: con un drink, vista sulla Moldava e il Castello.'],
    }, { spot: 'insta', address: 'Jiráskovo náměstí 6' }),
    P('vrtba-garden', 'attraction', 50.0862, 14.404, CASTLE, 4.7, 4300, ['gardens', 'photo'], {
      ru: ['Сад Врбта', 'Маленький барочный сад-терраса XVIII века в Малой Стране со статуями, балюстрадами и видом на купол Святого Микулаша и Град.', 'Работает с апреля по октябрь; утром почти пусто.'],
      en: ['Vrtba Garden', 'A small 18th-century Baroque terrace garden in Malá Strana with statues, balustrades and a view of St Nicholas’s dome and the Castle.', 'Open April to October; nearly empty in the morning.'],
      es: ['Jardín Vrtba', 'Un pequeño jardín barroco en terrazas del siglo XVIII en Malá Strana con estatuas, balaustradas y vista a la cúpula de San Nicolás y el Castillo.', 'Abre de abril a octubre; por la mañana está casi vacío.'],
      de: ['Vrtba-Garten', 'Ein kleiner barocker Terrassengarten aus dem 18. Jh. auf der Kleinseite mit Statuen, Balustraden und Blick auf die Nikolauskuppel und die Burg.', 'Von April bis Oktober geöffnet; morgens fast leer.'],
      fr: ['Jardin Vrtba', 'Un petit jardin baroque en terrasses du XVIIIe à Malá Strana, statues, balustrades et vue sur le dôme de Saint-Nicolas et le Château.', 'Ouvert d’avril à octobre ; presque vide le matin.'],
      it: ['Giardino Vrtba', 'Un piccolo giardino barocco a terrazze del Settecento a Malá Strana con statue, balaustre e vista sulla cupola di San Nicola e sul Castello.', 'Aperto da aprile a ottobre; al mattino quasi vuoto.'],
    }, { spot: 'hidden', hours: '10:00–18:00', address: 'Karmelitská 25' }),

    P('field', 'food', 50.0912, 14.4214, CITY, 4.7, 1500, ['food', 'luxury'], {
      ru: ['Field', 'Ресторан в Старом Месте с современной чешской кухней из сезонных продуктов, лесных трав и ферментов; одна звезда MICHELIN (чешский гид 2025).', 'Есть обеденный сет — более доступный способ попробовать кухню; бронируйте.'],
      en: ['Field', 'An Old Town restaurant serving modern Czech cooking from seasonal produce, foraged herbs and ferments; one MICHELIN star (Czech guide 2025).', 'There’s a lunch menu — a more affordable way in; book ahead.'],
      es: ['Field', 'Un restaurante en la Ciudad Vieja con cocina checa moderna de temporada, hierbas silvestres y fermentados; una estrella MICHELIN (guía checa 2025).', 'Hay menú de mediodía, más asequible; reserva.'],
      de: ['Field', 'Ein Altstadt-Restaurant mit moderner tschechischer Küche aus saisonalen Produkten, Wildkräutern und Fermenten; ein MICHELIN-Stern (tschechischer Guide 2025).', 'Es gibt ein Mittagsmenü – der günstigere Einstieg; reservieren.'],
      fr: ['Field', 'Un restaurant de la Vieille Ville : cuisine tchèque moderne de saison, herbes sauvages et fermentations ; une étoile MICHELIN (guide tchèque 2025).', 'Un menu déjeuner permet d’y goûter à moindre coût ; réservez.'],
      it: ['Field', 'Un ristorante nella Città Vecchia con cucina ceca moderna di stagione, erbe spontanee e fermentati; una stella MICHELIN (guida ceca 2025).', 'C’è un menù pranzo, più accessibile; prenota.'],
    }, { price: level(3), michelin: { award: 'star1', year: 2025 }, address: 'U Milosrdných 12', menu: [
      ['Tasting menu', undefined, 'дегустационный сет|tasting menu|menú degustación|Degustationsmenü|menu dégustation|menù degustazione'],
      ['Lunch menu', undefined, 'обеденный сет|lunch menu|menú de mediodía|Mittagsmenü|menu déjeuner|menù pranzo'],
    ] }),
    P('la-degustation', 'food', 50.0905, 14.4241, CITY, 4.7, 1400, ['food', 'luxury'], {
      ru: ['La Degustation Bohême Bourgeoise', 'Дегустационный ресторан, переосмысляющий чешские рецепты XIX века из поваренной книги Марии Свободовой; одна звезда MICHELIN (чешский гид 2025).', 'Сет длинный — заложите вечер; винное сопровождение с чешскими и моравскими винами.'],
      en: ['La Degustation Bohême Bourgeoise', 'A tasting-menu restaurant reinterpreting 19th-century Czech recipes from Marie Svobodová’s cookbook; one MICHELIN star (Czech guide 2025).', 'The menu is long — plan the evening; pairings feature Czech and Moravian wines.'],
      es: ['La Degustation Bohême Bourgeoise', 'Un restaurante de menú degustación que reinterpreta recetas checas del siglo XIX del recetario de Marie Svobodová; una estrella MICHELIN (guía checa 2025).', 'El menú es largo: dedica la noche; maridaje con vinos checos y moravos.'],
      de: ['La Degustation Bohême Bourgeoise', 'Ein Degustationsrestaurant, das tschechische Rezepte des 19. Jh. aus dem Kochbuch von Marie Svobodová neu interpretiert; ein MICHELIN-Stern (tschechischer Guide 2025).', 'Das Menü ist lang – den Abend einplanen; Begleitung mit tschechischen und mährischen Weinen.'],
      fr: ['La Degustation Bohême Bourgeoise', 'Un restaurant de menu dégustation qui revisite les recettes tchèques du XIXe du livre de Marie Svobodová ; une étoile MICHELIN (guide tchèque 2025).', 'Le menu est long, prévoyez la soirée ; accords avec vins tchèques et moraves.'],
      it: ['La Degustation Bohême Bourgeoise', 'Un ristorante di menù degustazione che reinterpreta ricette ceche ottocentesche dal ricettario di Marie Svobodová; una stella MICHELIN (guida ceca 2025).', 'Il menù è lungo: dedica la serata; abbinamenti con vini cechi e moravi.'],
    }, { price: level(3), michelin: { award: 'star1', year: 2025 }, address: 'Haštalská 18', menu: [
      ['Tasting menu', undefined, 'дегустационный сет по старым чешским рецептам|tasting menu based on old Czech recipes|menú degustación de recetas checas antiguas|Degustationsmenü nach alten tschechischen Rezepten|menu dégustation de vieilles recettes tchèques|menù degustazione da antiche ricette ceche'],
      ['Czech & Moravian wine pairing', undefined, 'сопровождение чешскими и моравскими винами|Czech and Moravian wine pairing|maridaje de vinos checos y moravos|Begleitung mit tschechischen und mährischen Weinen|accords vins tchèques et moraves|abbinamento vini cechi e moravi'],
    ] }),
    P('u-zlateho-tygra', 'food', 50.0857, 14.4185, STREET, 4.5, 6200, ['food', 'nightlife', 'history'], {
      ru: ['U Zlatého tygra', 'Легендарная пивная в Старом Месте, где любил сидеть писатель Богумил Грабал; здесь наливают пилзнер из танков и подают простую закуску.', 'Мест мало и многие заняты завсегдатаями — приходите к открытию в 15:00.'],
      en: ['U Zlatého tygra', 'A legendary Old Town pub, a haunt of writer Bohumil Hrabal, pouring tank Pilsner with simple bar snacks.', 'Seats are few and many belong to regulars — come at the 3 pm opening.'],
      es: ['U Zlatého tygra', 'Una cervecería legendaria de la Ciudad Vieja, frecuentada por el escritor Bohumil Hrabal, que sirve Pilsner de tanque con tapas sencillas.', 'Hay pocos sitios y muchos son de habituales: llega a la apertura a las 15:00.'],
      de: ['U Zlatého tygra', 'Eine legendäre Altstadtkneipe, Stammlokal des Schriftstellers Bohumil Hrabal, mit Tankpilsner und einfachen Snacks.', 'Wenige Plätze, viele gehören Stammgästen – zur Öffnung um 15 Uhr kommen.'],
      fr: ['U Zlatého tygra', 'Une brasserie légendaire de la Vieille Ville, repaire de l’écrivain Bohumil Hrabal, qui sert de la Pilsner de tank et des en-cas simples.', 'Peu de places, souvent prises par les habitués : venez à l’ouverture à 15 h.'],
      it: ['U Zlatého tygra', 'Una birreria leggendaria della Città Vecchia, frequentata dallo scrittore Bohumil Hrabal, con Pilsner da tank e stuzzichini semplici.', 'Pochi posti, molti dei clienti abituali: arriva all’apertura alle 15.'],
    }, { price: level(1), address: 'Husova 17', menu: [
      ['Pilsner Urquell (tank)', undefined, 'нефильтрованный пилзнер из танка|unpasteurised tank Pilsner|Pilsner de tanque sin pasteurizar|unpasteurisiertes Tankpilsner|Pilsner de tank non pasteurisée|Pilsner da tank non pastorizzata'],
      ['Utopenci', undefined, 'маринованные колбаски с луком|pickled sausages with onion|salchichas en escabeche con cebolla|eingelegte Würste mit Zwiebeln|saucisses marinées aux oignons|salsicce marinate con cipolla'],
    ] }),
    P('nase-maso', 'food', 50.0905, 14.429, STREET, 4.7, 6800, ['food', 'streetfood'], {
      ru: ['Naše maso', 'Мясная лавка с прилавком, где на месте жарят бургеры, тефтели и сосиски из мяса чешских ферм; едят стоя.', 'Попробуйте «sekaná» — чешский мясной рулет — и пиво из холодильника.'],
      en: ['Naše maso', 'A butcher’s shop with a counter grilling burgers, meatloaf and sausages from Czech farm meat; you eat standing up.', 'Try sekaná — Czech meatloaf — with a beer from the fridge.'],
      es: ['Naše maso', 'Una carnicería con barra donde se hacen hamburguesas, pastel de carne y salchichas con carne de granjas checas; se come de pie.', 'Prueba la sekaná, pastel de carne checo, con una cerveza.'],
      de: ['Naše maso', 'Eine Metzgerei mit Theke, an der Burger, Hackbraten und Würste aus tschechischem Hoffleisch gebraten werden; man isst im Stehen.', 'Sekaná – tschechischen Hackbraten – mit einem Bier probieren.'],
      fr: ['Naše maso', 'Une boucherie avec comptoir où l’on grille burgers, pain de viande et saucisses de viande de fermes tchèques ; on mange debout.', 'Goûtez la sekaná, pain de viande tchèque, avec une bière.'],
      it: ['Naše maso', 'Una macelleria con bancone dove si cuociono burger, polpettone e salsicce di carne di fattorie ceche; si mangia in piedi.', 'Prova la sekaná, polpettone ceco, con una birra.'],
    }, { price: level(1), address: 'Dlouhá 39', menu: [
      ['Sekaná', undefined, 'чешский мясной рулет|Czech meatloaf|pastel de carne checo|tschechischer Hackbraten|pain de viande tchèque|polpettone ceco'],
      ['Cheeseburger', undefined, 'чизбургер из фермерской говядины|farm-beef cheeseburger|hamburguesa con queso de vacuno de granja|Cheeseburger vom Hofrind|cheeseburger au bœuf fermier|cheeseburger di manzo di fattoria'],
    ] }),
    P('kantyna', 'food', 50.081, 14.429, CITY, 4.6, 7400, ['food'], {
      ru: ['Kantýna', 'Мясной ресторан-столовая в бывшем здании банка у Вацлавской площади: выбираете у мясного прилавка, платите по карточке на выходе.', 'Тартар из говядины и свиная рулька — местные хиты; не потеряйте карточку заказа.'],
      en: ['Kantýna', 'A meat-centred canteen in a former bank by Wenceslas Square: order at the butcher’s counter and pay with your card on the way out.', 'Beef tartare and pork knuckle are the hits; don’t lose your order card.'],
      es: ['Kantýna', 'Un comedor carnívoro en un antiguo banco junto a la plaza de Wenceslao: pides en la carnicería y pagas con tu tarjeta al salir.', 'El tartar de ternera y el codillo son los favoritos; no pierdas la tarjeta.'],
      de: ['Kantýna', 'Eine Fleischkantine in einer ehemaligen Bank am Wenzelsplatz: an der Fleischtheke bestellen und beim Gehen mit der Karte bezahlen.', 'Rindertatar und Schweinshaxe sind die Hits; die Bestellkarte nicht verlieren.'],
      fr: ['Kantýna', 'Une cantine carnée dans une ancienne banque près de la place Venceslas : on commande au comptoir du boucher et on paie à la sortie avec sa carte.', 'Tartare de bœuf et jarret de porc sont les stars ; ne perdez pas votre carte.'],
      it: ['Kantýna', 'Una mensa di carne in un’ex banca vicino a piazza San Venceslao: si ordina al banco del macellaio e si paga con la tessera all’uscita.', 'Tartare di manzo e stinco sono i più amati; non perdere la tessera.'],
    }, { price: level(2), address: 'Politických vězňů 5', menu: [
      ['Tatarák', undefined, 'тартар из говядины с жареным хлебом и чесноком|beef tartare with fried bread and garlic|tartar de ternera con pan frito y ajo|Rindertatar mit geröstetem Brot und Knoblauch|tartare de bœuf, pain grillé et ail|tartare di manzo con pane fritto e aglio'],
      ['Vepřové koleno', undefined, 'запечённая свиная рулька|roast pork knuckle|codillo de cerdo asado|gebratene Schweinshaxe|jarret de porc rôti|stinco di maiale arrosto'],
    ] }),
    P('cafe-imperial', 'food', 50.0895, 14.433, CITY, 4.5, 8100, ['food', 'history'], {
      ru: ['Café Imperial', 'Кафе 1914 года, где стены и потолки целиком покрыты керамическими плитками в стиле ар-нуво; завтраки и чешская классика.', 'Хорошо для завтрака — интерьер лучше всего виден при дневном свете.'],
      en: ['Café Imperial', 'A 1914 café whose walls and ceilings are entirely covered in Art Nouveau ceramic tiles; breakfasts and Czech classics.', 'Ideal for breakfast — the interior shows best in daylight.'],
      es: ['Café Imperial', 'Un café de 1914 con paredes y techos cubiertos de cerámica modernista; desayunos y clásicos checos.', 'Ideal para desayunar: el interior luce mejor con luz de día.'],
      de: ['Café Imperial', 'Ein Café von 1914, dessen Wände und Decken ganz mit Jugendstil-Keramik bedeckt sind; Frühstück und tschechische Klassiker.', 'Ideal zum Frühstück – bei Tageslicht wirkt das Interieur am schönsten.'],
      fr: ['Café Imperial', 'Un café de 1914 aux murs et plafonds entièrement couverts de céramiques Art nouveau ; petits-déjeuners et classiques tchèques.', 'Idéal au petit-déjeuner : le décor se voit mieux à la lumière du jour.'],
      it: ['Café Imperial', 'Un caffè del 1914 con pareti e soffitti interamente rivestiti di ceramiche liberty; colazioni e classici cechi.', 'Ideale a colazione: l’interno si apprezza meglio alla luce del giorno.'],
    }, { price: level(2), address: 'Na Poříčí 15', menu: [
      ['Imperial breakfast', undefined, 'завтрак с яйцами, ветчиной и выпечкой|breakfast with eggs, ham and pastries|desayuno con huevos, jamón y bollería|Frühstück mit Eiern, Schinken und Gebäck|petit-déjeuner œufs, jambon et viennoiseries|colazione con uova, prosciutto e dolci'],
      ['Svíčková', undefined, 'говядина в сливочно-овощном соусе с кнедликами|beef in creamy vegetable sauce with dumplings|ternera en salsa cremosa de verduras con knedlíky|Rind in Rahm-Gemüse-Sauce mit Knödeln|bœuf sauce crémeuse aux légumes et knedlíky|manzo in salsa cremosa di verdure con canederli'],
    ] }),
    P('u-modre-kachnicky', 'food', 50.0866, 14.4055, STREET, 4.5, 3400, ['food', 'romance'], {
      ru: ['U Modré kachničky', 'Уютный ресторан в Малой Стране со сводчатыми расписными залами; специализация — утка и дичь по старочешским рецептам.', 'Закажите запечённую утку с красной капустой и кнедликами.'],
      en: ['U Modré kachničky', 'A cosy Malá Strana restaurant in vaulted painted rooms, specialising in duck and game from old Czech recipes.', 'Order the roast duck with red cabbage and dumplings.'],
      es: ['U Modré kachničky', 'Un acogedor restaurante de Malá Strana en salas abovedadas y pintadas, especializado en pato y caza de recetas checas antiguas.', 'Pide el pato asado con lombarda y knedlíky.'],
      de: ['U Modré kachničky', 'Ein gemütliches Restaurant auf der Kleinseite mit bemalten Gewölben, spezialisiert auf Ente und Wild nach alten tschechischen Rezepten.', 'Die Bratente mit Rotkraut und Knödeln bestellen.'],
      fr: ['U Modré kachničky', 'Un restaurant chaleureux de Malá Strana aux salles voûtées peintes, spécialisé dans le canard et le gibier de vieilles recettes tchèques.', 'Prenez le canard rôti, chou rouge et knedlíky.'],
      it: ['U Modré kachničky', 'Un accogliente ristorante di Malá Strana con sale a volta dipinte, specializzato in anatra e selvaggina da antiche ricette ceche.', 'Ordina l’anatra arrosto con cavolo rosso e canederli.'],
    }, { price: level(2), address: 'Nebovidská 6', menu: [
      ['Pečená kachna', undefined, 'запечённая утка с красной капустой и кнедликами|roast duck with red cabbage and dumplings|pato asado con lombarda y knedlíky|Bratente mit Rotkraut und Knödeln|canard rôti, chou rouge et knedlíky|anatra arrosto con cavolo rosso e canederli'],
      ['Game goulash', undefined, 'гуляш из дичи|game goulash|gulash de caza|Wildgulasch|goulash de gibier|gulasch di selvaggina'],
    ] }),
    P('eska', 'food', 50.0919, 14.4519, CITY, 4.6, 5200, ['food'], {
      ru: ['Eska (Карлин)', 'Ресторан и пекарня в бывшей фабрике в Карлине: чешские продукты, ферментация, хлеб из собственной печи и картофель, запечённый в золе.', 'Утром — завтраки с выпечкой, вечером — ужин; вокруг модный район Карлин.'],
      en: ['Eska (Karlín)', 'A restaurant and bakery in a former factory in Karlín: Czech produce, fermentation, bread from its own oven and potatoes baked in ash.', 'Pastry breakfasts in the morning, dinner at night; Karlín around it is a trendy district.'],
      es: ['Eska (Karlín)', 'Restaurante y panadería en una antigua fábrica de Karlín: producto checo, fermentados, pan de horno propio y patatas asadas en ceniza.', 'Desayunos de bollería por la mañana y cena por la noche; Karlín es un barrio de moda.'],
      de: ['Eska (Karlín)', 'Restaurant und Bäckerei in einer ehemaligen Fabrik in Karlín: tschechische Produkte, Fermentation, Brot aus eigenem Ofen und in Asche gebackene Kartoffeln.', 'Morgens Frühstück mit Gebäck, abends Dinner; Karlín ist ein angesagtes Viertel.'],
      fr: ['Eska (Karlín)', 'Restaurant et boulangerie dans une ancienne usine de Karlín : produits tchèques, fermentation, pain maison et pommes de terre cuites dans la cendre.', 'Petit-déjeuner viennoiseries le matin, dîner le soir ; Karlín est un quartier branché.'],
      it: ['Eska (Karlín)', 'Ristorante e panetteria in un’ex fabbrica a Karlín: prodotti cechi, fermentazione, pane del proprio forno e patate cotte nella cenere.', 'Colazioni con dolci al mattino, cena la sera; Karlín è un quartiere alla moda.'],
    }, { price: level(2), address: 'Pernerova 49', menu: [
      ['Potatoes baked in ash', undefined, 'картофель, запечённый в золе|potatoes baked in ash|patatas asadas en ceniza|in Asche gebackene Kartoffeln|pommes de terre cuites dans la cendre|patate cotte nella cenere'],
      ['Sourdough & cultured butter', undefined, 'хлеб на закваске с ферментированным маслом|sourdough with cultured butter|pan de masa madre con mantequilla fermentada|Sauerteigbrot mit Sauerrahmbutter|pain au levain et beurre de culture|pane a lievito madre con burro fermentato'],
    ] }),
    P('mlynec', 'food', 50.0852, 14.4135, BRIDGE, 4.6, 3600, ['food', 'views', 'romance'], {
      ru: ['Mlýnec', 'Ресторан на набережной у Карлова моста с видом на мост и Град: современная чешская и европейская кухня.', 'Просите столик у окна или на летней террасе — вид на Карлов мост на закате.'],
      en: ['Mlýnec', 'A riverside restaurant by Charles Bridge looking onto the bridge and the Castle: modern Czech and European cooking.', 'Ask for a window or summer-terrace table — Charles Bridge at sunset.'],
      es: ['Mlýnec', 'Un restaurante junto al río y el Puente de Carlos con vista al puente y el Castillo: cocina checa y europea moderna.', 'Pide mesa junto a la ventana o en la terraza de verano: el Puente de Carlos al atardecer.'],
      de: ['Mlýnec', 'Ein Restaurant am Ufer neben der Karlsbrücke mit Blick auf Brücke und Burg: moderne tschechische und europäische Küche.', 'Nach einem Fenster- oder Sommerterrassentisch fragen – Karlsbrücke bei Sonnenuntergang.'],
      fr: ['Mlýnec', 'Un restaurant au bord de l’eau près du pont Charles, vue sur le pont et le Château : cuisine tchèque et européenne moderne.', 'Demandez une table en fenêtre ou en terrasse l’été : le pont Charles au couchant.'],
      it: ['Mlýnec', 'Un ristorante sul fiume accanto al Ponte Carlo con vista sul ponte e sul Castello: cucina ceca ed europea moderna.', 'Chiedi un tavolo alla finestra o sulla terrazza estiva: il Ponte Carlo al tramonto.'],
    }, { price: level(3), address: 'Novotného lávka 9', menu: [
      ['Beef cheeks', undefined, 'томлёные говяжьи щёчки|braised beef cheeks|carrilleras de ternera estofadas|geschmorte Rinderbäckchen|joues de bœuf braisées|guance di manzo brasate'],
      ['Duck breast', undefined, 'утиная грудка|duck breast|pechuga de pato|Entenbrust|magret de canard|petto d’anatra'],
    ] }),
    P('cafe-slavia', 'food', 50.0814, 14.4135, BRIDGE, 4.3, 9700, ['food', 'history'], {
      ru: ['Café Slavia', 'Историческое кафе 1884 года напротив Национального театра с видом на Влтаву и Град; здесь собирались писатели и Вацлав Гавел.', 'Сядьте у окна на реку; закажите кофе и штрудель.'],
      en: ['Café Slavia', 'A historic 1884 café opposite the National Theatre overlooking the Vltava and the Castle; a haunt of writers and Václav Havel.', 'Sit by the river window; order coffee and strudel.'],
      es: ['Café Slavia', 'Un café histórico de 1884 frente al Teatro Nacional con vistas al Moldava y el Castillo; lo frecuentaban escritores y Václav Havel.', 'Siéntate junto a la ventana al río; pide café y strudel.'],
      de: ['Café Slavia', 'Ein historisches Café von 1884 gegenüber dem Nationaltheater mit Blick auf Moldau und Burg; Treffpunkt von Schriftstellern und Václav Havel.', 'Am Flussfenster sitzen; Kaffee und Strudel bestellen.'],
      fr: ['Café Slavia', 'Un café historique de 1884 face au Théâtre national, vue sur la Vltava et le Château ; repaire d’écrivains et de Václav Havel.', 'Asseyez-vous côté rivière ; café et strudel.'],
      it: ['Café Slavia', 'Un caffè storico del 1884 di fronte al Teatro Nazionale con vista sulla Moldava e il Castello; frequentato da scrittori e da Václav Havel.', 'Siediti alla finestra sul fiume; ordina caffè e strudel.'],
    }, { price: level(1), address: 'Smetanovo nábřeží 2', menu: [
      ['Jablečný závin', undefined, 'яблочный штрудель|apple strudel|strudel de manzana|Apfelstrudel|strudel aux pommes|strudel di mele'],
      ['Vídeňská káva', undefined, 'кофе по-венски со взбитыми сливками|Viennese coffee with whipped cream|café vienés con nata|Wiener Kaffee mit Schlagsahne|café viennois à la chantilly|caffè viennese con panna'],
    ] }),
  ],
  routes: [
    D(['old-town-square', 'astronomical-clock', 'josefov', '=prague-lokal-dlouha', 'municipal-house', 'wenceslas-square', '=charlesbridge', 'field'],
      'Старый город, Еврейский квартал и Карлов мост|Old Town, the Jewish Quarter and Charles Bridge|Ciudad Vieja, Barrio Judío y Puente de Carlos|Altstadt, jüdisches Viertel und Karlsbrücke|Vieille Ville, quartier juif et pont Charles|Città Vecchia, quartiere ebraico e Ponte Carlo'),
    D(['strahov-monastery', '=praguecastle', '=prague-st-vitus-cathedral', 'u-modre-kachnicky', 'vrtba-garden', '=prague-lennon-wall', 'mlynec'],
      'Пражский Град и Малая Страна|Prague Castle and Malá Strana|El Castillo de Praga y Malá Strana|Prager Burg und Kleinseite|Château de Prague et Malá Strana|Castello di Praga e Malá Strana'),
    D(['cafe-imperial', 'vysehrad', 'dancing-house', 'kantyna', '=prague-letna-viewpoint', 'la-degustation'],
      'Вышеград, Танцующий дом и Летна|Vyšehrad, the Dancing House and Letná|Vyšehrad, la Casa Danzante y Letná|Vyšehrad, Tanzendes Haus und Letná|Vyšehrad, la Maison dansante et Letná|Vyšehrad, la Casa Danzante e Letná'),
  ],
};

export default pack;
