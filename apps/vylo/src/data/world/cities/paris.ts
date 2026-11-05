import type { CityPack } from '../types';
import { free, level, makeDay, makePlace } from './_kit.ts';

const P = makePlace('paris');
const D = makeDay('paris');
const CITY = 'CpC1qZBNrzQ';
const MUSEUM = 'LKvq2nRQGEE';
const TOWER = '0ocN7t9BiG8';
const BISTRO = 'yzh7B-9sOhc';
const STREET = 'lRJuL6ADBWI';
const BRIDGE = 'Eoe2qqBb4y0';
const HILL = 'KIvp_ZwY7ys';

const pack: CityPack = {
  country: 'FR',
  city: 'paris',
  places: [
    P('notre-dame', 'attraction', 48.853, 2.3499, CITY, 4.8, 61200, ['architecture', 'history', 'unesco'], {
      ru: ['Собор Нотр-Дам', 'Готический собор XII–XIV веков на острове Сите, вновь открытый в декабре 2024 года после реставрации после пожара 2019-го.', 'Вход в собор бесплатный; очередь меньше утром в будни. На башни — отдельный билет по времени.'],
      en: ['Notre-Dame Cathedral', 'The 12th–14th-century Gothic cathedral on Île de la Cité, reopened in December 2024 after restoration following the 2019 fire.', 'Entry to the cathedral is free; the queue is shortest on weekday mornings. The towers need a separate timed ticket.'],
      es: ['Catedral de Notre-Dame', 'La catedral gótica de los siglos XII–XIV en la Île de la Cité, reabierta en diciembre de 2024 tras la restauración por el incendio de 2019.', 'La entrada a la catedral es gratuita; menos cola entre semana por la mañana. Las torres requieren entrada aparte con hora.'],
      de: ['Kathedrale Notre-Dame', 'Die gotische Kathedrale aus dem 12.–14. Jh. auf der Île de la Cité, nach der Restaurierung infolge des Brandes von 2019 im Dezember 2024 wiedereröffnet.', 'Der Eintritt ist frei; morgens unter der Woche ist die Schlange am kürzesten. Für die Türme gibt es ein eigenes Zeitticket.'],
      fr: ['Cathédrale Notre-Dame', 'La cathédrale gothique des XIIe–XIVe siècles sur l’île de la Cité, rouverte en décembre 2024 après la restauration consécutive à l’incendie de 2019.', 'L’entrée est gratuite ; moins d’attente en semaine le matin. Les tours demandent un billet horodaté à part.'],
      it: ['Cattedrale di Notre-Dame', 'La cattedrale gotica dei secoli XII–XIV sull’Île de la Cité, riaperta a dicembre 2024 dopo il restauro seguito all’incendio del 2019.', 'L’ingresso è gratuito; meno coda nei giorni feriali al mattino. Le torri richiedono un biglietto a orario a parte.'],
    }, { price: free }),
    P('sainte-chapelle', 'attraction', 48.8554, 2.345, MUSEUM, 4.8, 33100, ['architecture', 'history', 'photo'], {
      ru: ['Сент-Шапель', 'Королевская капелла XIII века с 15 витражами высотой около 15 метров — в солнечный день верхний зал словно светится изнутри.', 'Приходите в солнечный полдень и бронируйте время онлайн; вход через досмотр Дворца правосудия.'],
      en: ['Sainte-Chapelle', 'A 13th-century royal chapel with 15 stained-glass windows about 15 m tall — on a sunny day the upper chapel seems lit from within.', 'Come around a sunny midday and book a time slot online; entry is through the Palais de Justice security check.'],
      es: ['Sainte-Chapelle', 'Una capilla real del siglo XIII con 15 vidrieras de unos 15 m: en un día soleado la capilla alta parece iluminada desde dentro.', 'Ven a mediodía con sol y reserva hora online; se entra por el control del Palacio de Justicia.'],
      de: ['Sainte-Chapelle', 'Eine königliche Kapelle aus dem 13. Jh. mit 15 rund 15 m hohen Glasfenstern – an sonnigen Tagen scheint die Oberkapelle von innen zu leuchten.', 'An einem sonnigen Mittag kommen und online ein Zeitfenster buchen; Einlass über die Kontrolle des Justizpalasts.'],
      fr: ['Sainte-Chapelle', 'Une chapelle royale du XIIIe siècle aux 15 verrières d’environ 15 m : par beau temps, la chapelle haute semble éclairée de l’intérieur.', 'Venez vers midi par grand soleil et réservez un créneau en ligne ; accès par le contrôle du Palais de justice.'],
      it: ['Sainte-Chapelle', 'Una cappella reale del XIII secolo con 15 vetrate alte circa 15 m: in una giornata di sole la cappella alta sembra illuminata da dentro.', 'Vieni a mezzogiorno con il sole e prenota l’orario online; si entra dal controllo del Palazzo di Giustizia.'],
    }, { spot: 'insta', hours: '09:00–19:00' }),
    P('musee-dorsay', 'attraction', 48.86, 2.3266, MUSEUM, 4.8, 98400, ['art', 'museums'], {
      ru: ['Музей Орсе', 'Импрессионисты и постимпрессионисты — Моне, Ренуар, Ван Гог, Дега — в здании бывшего вокзала с огромными часами над Сеной.', 'Начните с 5-го этажа (импрессионисты), пока там мало людей; по четвергам музей работает до вечера.'],
      en: ['Musée d’Orsay', 'Impressionist and post-Impressionist art — Monet, Renoir, Van Gogh, Degas — in a former railway station with giant clocks over the Seine.', 'Start on the 5th floor (the Impressionists) while it’s quiet; it stays open late on Thursdays.'],
      es: ['Museo de Orsay', 'Impresionistas y posimpresionistas —Monet, Renoir, Van Gogh, Degas— en una antigua estación con enormes relojes sobre el Sena.', 'Empieza por la 5.ª planta (impresionistas) mientras está tranquila; los jueves abre hasta tarde.'],
      de: ['Musée d’Orsay', 'Impressionisten und Postimpressionisten – Monet, Renoir, Van Gogh, Degas – in einem ehemaligen Bahnhof mit riesigen Uhren über der Seine.', 'Im 5. Stock (Impressionisten) beginnen, solange es ruhig ist; donnerstags länger geöffnet.'],
      fr: ['Musée d’Orsay', 'Impressionnistes et postimpressionnistes — Monet, Renoir, Van Gogh, Degas — dans une ancienne gare aux horloges géantes sur la Seine.', 'Commencez par le 5e étage (les impressionnistes) tant qu’il est calme ; nocturne le jeudi.'],
      it: ['Museo d’Orsay', 'Impressionisti e postimpressionisti —Monet, Renoir, Van Gogh, Degas— in un’ex stazione con enormi orologi sulla Senna.', 'Comincia dal 5° piano (impressionisti) finché è tranquillo; il giovedì apre fino a sera.'],
    }, { hours: '09:30–18:00', address: 'Esplanade Valéry Giscard d’Estaing' }),
    P('orangerie', 'attraction', 48.8638, 2.3227, MUSEUM, 4.7, 26300, ['art', 'museums'], {
      ru: ['Музей Оранжери', 'Небольшой музей в саду Тюильри с двумя овальными залами, где по кругу висят огромные «Кувшинки» Моне.', 'Хватит часа; утром в овальных залах тихо — можно посидеть на скамье в центре.'],
      en: ['Musée de l’Orangerie', 'A small museum in the Tuileries with two oval rooms wrapped in Monet’s huge Water Lilies.', 'An hour is enough; in the morning the oval rooms are quiet enough to sit on the central bench.'],
      es: ['Museo de la Orangerie', 'Un pequeño museo en las Tullerías con dos salas ovaladas rodeadas por los enormes Nenúfares de Monet.', 'Basta una hora; por la mañana las salas están tranquilas para sentarse en el banco central.'],
      de: ['Musée de l’Orangerie', 'Ein kleines Museum in den Tuilerien mit zwei ovalen Sälen, umhüllt von Monets riesigen Seerosen.', 'Eine Stunde reicht; morgens ist es in den ovalen Sälen ruhig genug für die Bank in der Mitte.'],
      fr: ['Musée de l’Orangerie', 'Un petit musée aux Tuileries avec deux salles ovales entièrement habillées des immenses Nymphéas de Monet.', 'Une heure suffit ; le matin, les salles ovales sont assez calmes pour s’asseoir au centre.'],
      it: ['Museo dell’Orangerie', 'Un piccolo museo alle Tuileries con due sale ovali avvolte dalle enormi Ninfee di Monet.', 'Basta un’ora; al mattino le sale ovali sono abbastanza tranquille da sedersi sulla panca centrale.'],
    }, { hours: '09:00–18:00', address: 'Jardin des Tuileries' }),
    P('arc-de-triomphe', 'attraction', 48.8738, 2.295, CITY, 4.7, 52900, ['history', 'views'], {
      ru: ['Триумфальная арка', 'Арка в честь побед Наполеона в центре площади Звезды; с крыши видно 12 лучей-проспектов и Елисейские Поля.', 'К арке ведёт подземный переход — не переходите кольцо поверху. Лучший вид — на закате.'],
      en: ['Arc de Triomphe', 'The arch honouring Napoleon’s victories at the centre of Place de l’Étoile; from the roof you see 12 avenues radiating out and the Champs-Élysées.', 'Use the underground passage — never cross the roundabout on foot. Best at sunset.'],
      es: ['Arco del Triunfo', 'El arco en honor a las victorias de Napoleón en la Place de l’Étoile; desde la azotea se ven las 12 avenidas y los Campos Elíseos.', 'Usa el paso subterráneo, no cruces la rotonda. Mejor al atardecer.'],
      de: ['Arc de Triomphe', 'Der Bogen zu Ehren von Napoleons Siegen mitten auf der Place de l’Étoile; vom Dach sieht man 12 Avenuen und die Champs-Élysées.', 'Die Unterführung nehmen – nie den Kreisverkehr zu Fuß queren. Am schönsten bei Sonnenuntergang.'],
      fr: ['Arc de Triomphe', 'L’arc célébrant les victoires de Napoléon au centre de la place de l’Étoile ; du toit, on voit les 12 avenues et les Champs-Élysées.', 'Prenez le passage souterrain, ne traversez jamais le rond-point. Idéal au coucher du soleil.'],
      it: ['Arco di Trionfo', 'L’arco in onore delle vittorie di Napoleone al centro di Place de l’Étoile; dal tetto si vedono 12 viali e gli Champs-Élysées.', 'Usa il sottopassaggio, mai attraversare la rotonda. Meglio al tramonto.'],
    }, { spot: 'insta', hours: '10:00–23:00' }),
    P('versailles', 'attraction', 48.8049, 2.1204, CITY, 4.6, 168000, ['history', 'architecture', 'gardens', 'unesco'], {
      ru: ['Версальский дворец', 'Резиденция Людовика XIV с Зеркальной галереей, покоями королей и садами Ленотра длиной в километры; объект ЮНЕСКО.', 'Едьте на поезде RER C или из Сен-Лазара, приходите к открытию и закладывайте целый день; в понедельник дворец закрыт.'],
      en: ['Palace of Versailles', 'Louis XIV’s residence with the Hall of Mirrors, the royal apartments and Le Nôtre’s kilometres of gardens; a UNESCO site.', 'Take the RER C or a train from Saint-Lazare, arrive at opening and allow a full day; closed on Mondays.'],
      es: ['Palacio de Versalles', 'La residencia de Luis XIV con la Galería de los Espejos, los aposentos reales y kilómetros de jardines de Le Nôtre; Patrimonio UNESCO.', 'Ve en RER C o tren desde Saint-Lazare, llega a la apertura y dedica el día; cierra los lunes.'],
      de: ['Schloss Versailles', 'Die Residenz Ludwigs XIV. mit Spiegelsaal, Königsgemächern und kilometerlangen Gärten von Le Nôtre; UNESCO-Welterbe.', 'Mit dem RER C oder ab Saint-Lazare fahren, zur Öffnung da sein und einen ganzen Tag einplanen; montags geschlossen.'],
      fr: ['Château de Versailles', 'La résidence de Louis XIV avec la galerie des Glaces, les appartements royaux et les kilomètres de jardins de Le Nôtre ; patrimoine UNESCO.', 'Prenez le RER C ou le train depuis Saint-Lazare, arrivez à l’ouverture et comptez la journée ; fermé le lundi.'],
      it: ['Reggia di Versailles', 'La residenza di Luigi XIV con la Galleria degli Specchi, gli appartamenti reali e i chilometri di giardini di Le Nôtre; patrimonio UNESCO.', 'Prendi la RER C o il treno da Saint-Lazare, arriva all’apertura e dedica la giornata; chiusa il lunedì.'],
    }, { hours: '09:00–18:30' }),
    P('pantheon', 'attraction', 48.8462, 2.3464, CITY, 4.6, 29500, ['history', 'architecture'], {
      ru: ['Пантеон', 'Неоклассический храм в Латинском квартале, где покоятся Вольтер, Гюго, Мария Кюри и другие великие французы; под куполом — маятник Фуко.', 'С апреля по октябрь можно подняться на колоннаду купола — вид на крыши Парижа.'],
      en: ['Panthéon', 'A neoclassical temple in the Latin Quarter where Voltaire, Hugo, Marie Curie and other great French figures rest; Foucault’s pendulum swings under the dome.', 'From April to October you can climb to the dome’s colonnade for a view over Paris rooftops.'],
      es: ['Panteón', 'Un templo neoclásico en el Barrio Latino donde descansan Voltaire, Hugo, Marie Curie y otras grandes figuras; bajo la cúpula oscila el péndulo de Foucault.', 'De abril a octubre se sube a la columnata de la cúpula: vistas sobre los tejados.'],
      de: ['Panthéon', 'Ein klassizistischer Tempel im Quartier Latin, in dem Voltaire, Hugo, Marie Curie und andere große Franzosen ruhen; unter der Kuppel schwingt Foucaults Pendel.', 'Von April bis Oktober kann man zur Kolonnade der Kuppel hinauf – Blick über die Dächer.'],
      fr: ['Panthéon', 'Un temple néoclassique du Quartier latin où reposent Voltaire, Hugo, Marie Curie et d’autres grandes figures ; le pendule de Foucault oscille sous le dôme.', 'D’avril à octobre, montez à la colonnade du dôme pour la vue sur les toits.'],
      it: ['Pantheon di Parigi', 'Un tempio neoclassico nel Quartiere Latino dove riposano Voltaire, Hugo, Marie Curie e altri grandi francesi; sotto la cupola oscilla il pendolo di Foucault.', 'Da aprile a ottobre si sale al colonnato della cupola: vista sui tetti.'],
    }, { hours: '10:00–18:00' }),
    P('luxembourg-gardens', 'nature', 48.8462, 2.3372, STREET, 4.8, 54700, ['gardens', 'nature'], {
      ru: ['Люксембургский сад', 'Любимый парк парижан у Сената: фонтан Медичи, лодочки на пруду, зелёные стулья и шахматисты под каштанами.', 'Возьмите стул к большому бассейну — так здесь отдыхают местные.'],
      en: ['Luxembourg Gardens', 'Parisians’ favourite park by the Senate: the Medici Fountain, toy sailboats on the pond, green chairs and chess players under the chestnuts.', 'Pull a chair up to the big pond — that’s how locals relax.'],
      es: ['Jardines de Luxemburgo', 'El parque favorito de los parisinos junto al Senado: la fuente Médici, barquitos en el estanque, sillas verdes y ajedrecistas bajo los castaños.', 'Acerca una silla al gran estanque: así descansan los locales.'],
      de: ['Jardin du Luxembourg', 'Der Lieblingspark der Pariser am Senat: Medici-Brunnen, Spielzeugboote auf dem Teich, grüne Stühle und Schachspieler unter Kastanien.', 'Einen Stuhl ans große Becken ziehen – so entspannen die Einheimischen.'],
      fr: ['Jardin du Luxembourg', 'Le parc préféré des Parisiens près du Sénat : fontaine Médicis, voiliers sur le bassin, chaises vertes et joueurs d’échecs sous les marronniers.', 'Installez une chaise près du grand bassin, comme les habitants.'],
      it: ['Giardini del Lussemburgo', 'Il parco preferito dei parigini accanto al Senato: fontana dei Medici, barchette sulla vasca, sedie verdi e scacchisti sotto i castagni.', 'Avvicina una sedia alla grande vasca: così si rilassano i parigini.'],
    }, { price: free, hours: '07:30–20:30' }),
    P('canal-saint-martin', 'attraction', 48.871, 2.3655, STREET, 4.5, 9800, ['city', 'photo'], {
      ru: ['Канал Сен-Мартен', 'Канал с железными мостиками, шлюзами и платанами в 10-м округе: кофейни, книжные и пикники на набережной по вечерам.', 'В тёплый вечер возьмите вино и сыр и сядьте на набережной, как местные.'],
      en: ['Canal Saint-Martin', 'A canal of iron footbridges, locks and plane trees in the 10th arrondissement: cafés, bookshops and evening picnics on the quays.', 'On a warm evening bring wine and cheese and sit on the quay like the locals.'],
      es: ['Canal Saint-Martin', 'Un canal con pasarelas de hierro, esclusas y plátanos en el distrito 10: cafés, librerías y pícnics nocturnos en los muelles.', 'En una tarde cálida trae vino y queso y siéntate en el muelle como los locales.'],
      de: ['Canal Saint-Martin', 'Ein Kanal mit eisernen Fußbrücken, Schleusen und Platanen im 10. Arrondissement: Cafés, Buchläden und abendliche Picknicks am Ufer.', 'An warmen Abenden Wein und Käse mitbringen und wie die Einheimischen am Kai sitzen.'],
      fr: ['Canal Saint-Martin', 'Un canal aux passerelles en fer, écluses et platanes dans le 10e : cafés, librairies et pique-niques du soir sur les quais.', 'Par une soirée douce, apportez vin et fromage et asseyez-vous sur le quai comme les habitants.'],
      it: ['Canal Saint-Martin', 'Un canale con passerelle in ferro, chiuse e platani nel 10° arrondissement: caffè, librerie e picnic serali sulle banchine.', 'In una sera calda porta vino e formaggio e siediti sulla banchina come i parigini.'],
    }, { spot: 'hidden', price: free }),
    P('pere-lachaise', 'nature', 48.8614, 2.3933, STREET, 4.6, 21400, ['history', 'nature'], {
      ru: ['Кладбище Пер-Лашез', 'Огромное тенистое кладбище-парк с аллеями и надгробиями-скульптурами, где похоронены Шопен, Эдит Пиаф, Оскар Уайльд и Джим Моррисон.', 'Скачайте карту у входа или в приложении — без неё легко заблудиться.'],
      en: ['Père Lachaise Cemetery', 'A vast, shady park-like cemetery of sculpted tombs where Chopin, Édith Piaf, Oscar Wilde and Jim Morrison are buried.', 'Grab a map at the entrance or in an app — it’s easy to get lost.'],
      es: ['Cementerio del Père-Lachaise', 'Un enorme cementerio-parque sombreado con tumbas esculpidas donde yacen Chopin, Édith Piaf, Oscar Wilde y Jim Morrison.', 'Coge un mapa en la entrada o en una app: es fácil perderse.'],
      de: ['Friedhof Père Lachaise', 'Ein riesiger, schattiger Parkfriedhof mit Skulpturengräbern, auf dem Chopin, Édith Piaf, Oscar Wilde und Jim Morrison liegen.', 'Am Eingang oder per App eine Karte nehmen – man verläuft sich leicht.'],
      fr: ['Cimetière du Père-Lachaise', 'Un immense cimetière-parc ombragé aux tombes sculptées où reposent Chopin, Édith Piaf, Oscar Wilde et Jim Morrison.', 'Prenez un plan à l’entrée ou une appli : on s’y perd facilement.'],
      it: ['Cimitero del Père-Lachaise', 'Un enorme cimitero-parco ombroso con tombe scolpite dove riposano Chopin, Édith Piaf, Oscar Wilde e Jim Morrison.', 'Prendi una mappa all’ingresso o in un’app: è facile perdersi.'],
    }, { price: free, hours: '08:00–18:00' }),

    P('arpege', 'food', 48.8556, 2.3165, BISTRO, 4.6, 1300, ['food', 'luxury'], {
      ru: ['Arpège', 'Ресторан Алена Пассара, построенный вокруг овощей с его собственных огородов; три звезды MICHELIN в гиде 2026 года.', 'Бронируйте за несколько недель; обед дешевле ужина, но всё равно это один из самых дорогих столов Парижа.'],
      en: ['Arpège', 'Alain Passard’s restaurant built around vegetables from his own gardens; three MICHELIN stars in the 2026 guide.', 'Book weeks ahead; lunch costs less than dinner, but it remains one of Paris’s priciest tables.'],
      es: ['Arpège', 'El restaurante de Alain Passard construido en torno a las verduras de sus propios huertos; tres estrellas MICHELIN en la guía 2026.', 'Reserva con semanas de antelación; el almuerzo es más barato que la cena, pero sigue siendo de las mesas más caras de París.'],
      de: ['Arpège', 'Alain Passards Restaurant rund um Gemüse aus eigenen Gärten; drei MICHELIN-Sterne im Guide 2026.', 'Wochen vorher buchen; mittags günstiger als abends, aber einer der teuersten Tische von Paris.'],
      fr: ['Arpège', 'Le restaurant d’Alain Passard construit autour des légumes de ses potagers ; trois étoiles MICHELIN au guide 2026.', 'Réservez des semaines à l’avance ; le déjeuner coûte moins cher que le dîner, mais la table reste parmi les plus chères de Paris.'],
      it: ['Arpège', 'Il ristorante di Alain Passard costruito attorno alle verdure dei suoi orti; tre stelle MICHELIN nella guida 2026.', 'Prenota con settimane d’anticipo; il pranzo costa meno della cena, ma resta tra i tavoli più cari di Parigi.'],
    }, { price: level(3), michelin: { award: 'star3', year: 2026 }, address: '84 Rue de Varenne', menu: [
      ['Menu du jardin', undefined, 'дегустационный сет из овощей с огородов шефа|tasting menu of vegetables from the chef’s gardens|menú degustación de verduras de sus huertos|Degustationsmenü mit Gemüse aus den Gärten des Chefs|menu dégustation des légumes des potagers du chef|menù degustazione di verdure dagli orti dello chef'],
      ['Tarte aux pommes bouquet de roses', undefined, 'яблочный тарт в виде букета роз|apple tart shaped as a bouquet of roses|tarta de manzana en forma de ramo de rosas|Apfeltarte als Rosenstrauß|tarte aux pommes en bouquet de roses|crostata di mele a bouquet di rose'],
    ] }),
    P('le-cinq', 'food', 48.8687, 2.3007, BISTRO, 4.7, 1900, ['food', 'luxury', 'romance'], {
      ru: ['Le Cinq', 'Ресторан отеля Four Seasons George V с шефом Кристианом Ле Скером: классическая французская кухня в золотом зале; три звезды MICHELIN в гиде 2026 года.', 'Строгий дресс-код: мужчинам — пиджак. Попробуйте фирменные гратинированные спагетти.'],
      en: ['Le Cinq', 'The Four Seasons George V restaurant under chef Christian Le Squer: classic French cooking in a gilded room; three MICHELIN stars in the 2026 guide.', 'Smart dress code — jackets for men. Try the signature gratinated spaghetti.'],
      es: ['Le Cinq', 'El restaurante del Four Seasons George V con el chef Christian Le Squer: cocina francesa clásica en un salón dorado; tres estrellas MICHELIN en la guía 2026.', 'Código de vestimenta formal: chaqueta para hombres. Prueba sus espaguetis gratinados.'],
      de: ['Le Cinq', 'Das Restaurant des Four Seasons George V mit Küchenchef Christian Le Squer: klassische französische Küche im vergoldeten Saal; drei MICHELIN-Sterne im Guide 2026.', 'Eleganter Dresscode – Sakko für Herren. Die überbackenen Spaghetti probieren.'],
      fr: ['Le Cinq', 'Le restaurant du Four Seasons George V avec le chef Christian Le Squer : grande cuisine française dans une salle dorée ; trois étoiles MICHELIN au guide 2026.', 'Tenue soignée, veste pour les messieurs. Goûtez les spaghetti gratinés signature.'],
      it: ['Le Cinq', 'Il ristorante del Four Seasons George V con lo chef Christian Le Squer: cucina francese classica in una sala dorata; tre stelle MICHELIN nella guida 2026.', 'Dress code elegante, giacca per gli uomini. Prova gli spaghetti gratinati signature.'],
    }, { price: level(3), michelin: { award: 'star3', year: 2026 }, address: '31 Avenue George V', menu: [
      ['Menu dégustation', undefined, 'дегустационный сет|tasting menu|menú degustación|Degustationsmenü|menu dégustation|menù degustazione'],
      ['Spaghetti gratinés', undefined, 'гратинированные спагетти с трюфелем и ветчиной|gratinated spaghetti with truffle and ham|espaguetis gratinados con trufa y jamón|überbackene Spaghetti mit Trüffel und Schinken|spaghetti gratinés à la truffe et au jambon|spaghetti gratinati con tartufo e prosciutto'],
    ] }),
    P('bouillon-chartier', 'food', 48.872, 2.3434, BISTRO, 4.3, 47800, ['food', 'history'], {
      ru: ['Bouillon Chartier', 'Народная столовая 1896 года с зеркалами и деревянными шкафчиками: простые французские блюда по очень низким ценам, официанты пишут счёт на скатерти.', 'Бронирования нет — очередь движется быстро; закажите яйцо под майонезом и конфи из утки.'],
      en: ['Bouillon Chartier', 'A working-class dining hall from 1896 with mirrors and wooden cabinets: simple French dishes at very low prices, and waiters write the bill on the tablecloth.', 'No bookings — the queue moves fast; order œuf mayonnaise and duck confit.'],
      es: ['Bouillon Chartier', 'Un comedor popular de 1896 con espejos y armarios de madera: platos franceses sencillos a precios muy bajos y la cuenta escrita en el mantel.', 'Sin reservas, la cola avanza rápido; pide huevo con mayonesa y confit de pato.'],
      de: ['Bouillon Chartier', 'Ein Volksspeisesaal von 1896 mit Spiegeln und Holzschränkchen: einfache französische Gerichte zu sehr niedrigen Preisen, die Rechnung steht auf der Tischdecke.', 'Keine Reservierung – die Schlange geht schnell; Œuf mayonnaise und Entenconfit bestellen.'],
      fr: ['Bouillon Chartier', 'Un bouillon populaire de 1896, miroirs et casiers en bois : plats français simples à tout petit prix, addition écrite sur la nappe.', 'Pas de réservation, la file avance vite ; prenez l’œuf mayonnaise et le confit de canard.'],
      it: ['Bouillon Chartier', 'Una sala popolare del 1896 con specchi e armadietti in legno: piatti francesi semplici a prezzi bassissimi e il conto scritto sulla tovaglia.', 'Niente prenotazioni, la coda scorre veloce; ordina uovo con maionese e confit d’anatra.'],
    }, { price: level(1), address: '7 Rue du Faubourg Montmartre', menu: [
      ['Œuf mayonnaise', undefined, 'яйцо под домашним майонезом|egg with homemade mayonnaise|huevo con mayonesa casera|Ei mit hausgemachter Mayonnaise|œuf dur et mayonnaise maison|uovo con maionese fatta in casa'],
      ['Confit de canard', undefined, 'утиная ножка конфи с картофелем|duck leg confit with potatoes|muslo de pato confitado con patatas|Entenkeulen-Confit mit Kartoffeln|confit de canard et pommes de terre|coscia d’anatra confit con patate'],
      ['Escargots', undefined, 'улитки в чесночном масле|snails in garlic butter|caracoles en mantequilla de ajo|Schnecken in Knoblauchbutter|escargots au beurre d’ail|lumache al burro all’aglio'],
    ] }),
    P('du-pain-et-des-idees', 'food', 48.871, 2.3631, BISTRO, 4.6, 6900, ['food'], {
      ru: ['Du Pain et des Idées', 'Пекарня в лавке XIX века у канала Сен-Мартен: знаменитые улитки-слойки с фисташкой и шоколадом и хлеб «Pain des amis».', 'Выходные — выходные и у пекарни: работает по будням. Приходите с утра, пока улитки не разобрали.'],
      en: ['Du Pain et des Idées', 'A bakery in a 19th-century shop near Canal Saint-Martin: famous pistachio-chocolate escargot pastries and the “Pain des amis” loaf.', 'It opens on weekdays only. Come in the morning before the escargots sell out.'],
      es: ['Du Pain et des Idées', 'Una panadería en una tienda del siglo XIX junto al canal Saint-Martin: famosos caracoles de pistacho y chocolate y el pan “Pain des amis”.', 'Abre solo entre semana. Ve por la mañana antes de que se agoten.'],
      de: ['Du Pain et des Idées', 'Eine Bäckerei in einem Laden aus dem 19. Jh. am Canal Saint-Martin: berühmte Pistazien-Schoko-Schnecken und das Brot „Pain des amis“.', 'Nur unter der Woche geöffnet. Morgens kommen, bevor die Schnecken weg sind.'],
      fr: ['Du Pain et des Idées', 'Une boulangerie dans une boutique du XIXe près du canal Saint-Martin : célèbres escargots pistache-chocolat et « Pain des amis ».', 'Ouverte en semaine seulement. Venez le matin avant la rupture des escargots.'],
      it: ['Du Pain et des Idées', 'Una panetteria in una bottega ottocentesca vicino al Canal Saint-Martin: celebri girelle pistacchio-cioccolato e il pane “Pain des amis”.', 'Apre solo nei giorni feriali. Vieni al mattino prima che finiscano.'],
    }, { price: level(1), address: '34 Rue Yves Toudic', menu: [
      ['Escargot pistache-chocolat', undefined, 'слойка-улитка с фисташкой и шоколадом|pistachio-chocolate pastry swirl|caracol de hojaldre de pistacho y chocolate|Pistazien-Schoko-Schnecke|escargot feuilleté pistache-chocolat|girella sfogliata pistacchio e cioccolato'],
      ['Pain des amis', undefined, 'фирменный хлеб на закваске|signature sourdough loaf|pan de masa madre de la casa|hauseigenes Sauerteigbrot|pain au levain maison|pagnotta a lievito madre della casa'],
    ] }),
    P('breizh-cafe', 'food', 48.8605, 2.3624, BISTRO, 4.5, 9200, ['food'], {
      ru: ['Breizh Café', 'Бретонская блинная в Маре: гречневые галеты с ветчиной, сыром и яйцом, сладкие крепы с солёной карамелью и бретонский сидр.', 'Закажите «complète» и чашку сидра; днём лучше бронировать.'],
      en: ['Breizh Café', 'A Breton crêperie in the Marais: buckwheat galettes with ham, cheese and egg, sweet crêpes with salted caramel and Breton cider.', 'Order the “complète” with a bowl of cider; book for lunch.'],
      es: ['Breizh Café', 'Una crepería bretona en el Marais: galettes de trigo sarraceno con jamón, queso y huevo, crepes de caramelo salado y sidra bretona.', 'Pide la “complète” con un tazón de sidra; reserva para comer.'],
      de: ['Breizh Café', 'Eine bretonische Crêperie im Marais: Buchweizengaletten mit Schinken, Käse und Ei, süße Crêpes mit Salzkaramell und bretonischer Cidre.', 'Die „complète“ mit einer Schale Cidre bestellen; mittags reservieren.'],
      fr: ['Breizh Café', 'Une crêperie bretonne dans le Marais : galettes de sarrasin jambon-fromage-œuf, crêpes au caramel au beurre salé et cidre breton.', 'Prenez la complète et une bolée de cidre ; réservez le midi.'],
      it: ['Breizh Café', 'Una crêperie bretone nel Marais: galette di grano saraceno con prosciutto, formaggio e uovo, crêpe al caramello salato e sidro bretone.', 'Ordina la “complète” con una tazza di sidro; prenota a pranzo.'],
    }, { price: level(2), address: '109 Rue Vieille du Temple', menu: [
      ['Galette complète', undefined, 'гречневая галета с ветчиной, сыром и яйцом|buckwheat galette with ham, cheese and egg|galette de sarraceno con jamón, queso y huevo|Buchweizengalette mit Schinken, Käse und Ei|galette jambon, fromage, œuf|galette con prosciutto, formaggio e uovo'],
      ['Crêpe caramel beurre salé', undefined, 'креп с солёной карамелью|crêpe with salted-butter caramel|crepe de caramelo salado|Crêpe mit Salzbutterkaramell|crêpe au caramel au beurre salé|crêpe al caramello salato'],
      ['Cidre brut', undefined, 'бретонский сухой сидр|dry Breton cider|sidra bretona seca|trockener bretonischer Cidre|cidre breton brut|sidro bretone secco'],
    ] }),
    P('berthillon', 'food', 48.8517, 2.3567, BISTRO, 4.5, 8100, ['food'], {
      ru: ['Berthillon', 'Легендарное мороженое и сорбеты на острове Сен-Луи с 1954 года; их же продают и соседние кафе острова.', 'Летом в августе лавка может закрываться на отпуск; попробуйте солёную карамель и чёрный шоколад.'],
      en: ['Berthillon', 'Legendary ice cream and sorbets on Île Saint-Louis since 1954, also sold by neighbouring cafés on the island.', 'It may close for holidays in August; try salted caramel and dark chocolate.'],
      es: ['Berthillon', 'Helados y sorbetes legendarios en la Île Saint-Louis desde 1954, que también venden los cafés vecinos de la isla.', 'Puede cerrar en agosto por vacaciones; prueba caramelo salado y chocolate negro.'],
      de: ['Berthillon', 'Legendäres Eis und Sorbets auf der Île Saint-Louis seit 1954, auch in benachbarten Cafés der Insel erhältlich.', 'Im August teils Betriebsferien; Salzkaramell und Zartbitterschokolade probieren.'],
      fr: ['Berthillon', 'Glaces et sorbets légendaires sur l’île Saint-Louis depuis 1954, aussi vendus par les cafés voisins de l’île.', 'Peut fermer en août ; goûtez caramel au beurre salé et chocolat noir.'],
      it: ['Berthillon', 'Gelati e sorbetti leggendari sull’Île Saint-Louis dal 1954, venduti anche dai caffè vicini dell’isola.', 'Ad agosto può chiudere per ferie; prova caramello salato e cioccolato fondente.'],
    }, { price: level(1), address: '29–31 Rue Saint-Louis en l’Île', menu: [
      ['Caramel au beurre salé', undefined, 'мороженое с солёной карамелью|salted-butter caramel ice cream|helado de caramelo salado|Salzbutterkaramell-Eis|glace caramel au beurre salé|gelato al caramello salato'],
      ['Sorbet framboise', undefined, 'малиновый сорбет|raspberry sorbet|sorbete de frambuesa|Himbeersorbet|sorbet framboise|sorbetto al lampone'],
    ] }),
    P('relais-de-l-entrecote', 'food', 48.8547, 2.3325, BISTRO, 4.4, 15300, ['food'], {
      ru: ['Le Relais de l’Entrecôte', 'Здесь одно блюдо: салат с орехами, затем стейк-антрекот с секретным зелёным соусом и картошкой фри — и вторая порция приносится сама.', 'Бронирования нет: приходите к открытию; оставьте место для профитролей.'],
      en: ['Le Relais de l’Entrecôte', 'One set menu: walnut salad, then sirloin steak with a secret green sauce and fries — and a second helping arrives on its own.', 'No bookings — come at opening; save room for profiteroles.'],
      es: ['Le Relais de l’Entrecôte', 'Un único menú: ensalada con nueces, entrecot con salsa verde secreta y patatas fritas, y la segunda ración llega sola.', 'Sin reservas: llega a la apertura y deja sitio para los profiteroles.'],
      de: ['Le Relais de l’Entrecôte', 'Ein einziges Menü: Walnusssalat, dann Entrecôte mit geheimer grüner Sauce und Pommes – die zweite Portion kommt von selbst.', 'Keine Reservierung – zur Öffnung kommen; Platz für Profiteroles lassen.'],
      fr: ['Le Relais de l’Entrecôte', 'Un menu unique : salade aux noix, puis entrecôte à la sauce secrète et frites — la seconde portion arrive d’elle-même.', 'Sans réservation : venez à l’ouverture et gardez de la place pour les profiteroles.'],
      it: ['Le Relais de l’Entrecôte', 'Un menù unico: insalata con noci, poi entrecôte con salsa verde segreta e patatine, e la seconda porzione arriva da sola.', 'Niente prenotazioni: arriva all’apertura e lascia spazio ai profiteroles.'],
    }, { price: level(2), address: '20 Rue Saint-Benoît', menu: [
      ['Entrecôte frites', undefined, 'стейк с секретным соусом и картошкой фри|steak with secret sauce and fries|entrecot con salsa secreta y patatas|Entrecôte mit Geheimsauce und Pommes|entrecôte sauce secrète et frites|entrecôte con salsa segreta e patatine'],
      ['Profiteroles', undefined, 'профитроли с горячим шоколадом|profiteroles with hot chocolate sauce|profiteroles con chocolate caliente|Profiteroles mit heißer Schokolade|profiteroles au chocolat chaud|profiteroles al cioccolato caldo'],
    ] }),
    P('chez-janou', 'food', 48.8565, 2.3672, BISTRO, 4.5, 6200, ['food'], {
      ru: ['Chez Janou', 'Прованское бистро у площади Вогезов с террасой и большой картой пастиса; известен огромной миской шоколадного мусса.', 'Шоколадный мусс приносят в общей миске — берите сколько хотите. Вечером бронируйте.'],
      en: ['Chez Janou', 'A Provençal bistro by Place des Vosges with a terrace and a long pastis list; famous for its giant bowl of chocolate mousse.', 'The mousse comes in a shared bowl — help yourself. Book for dinner.'],
      es: ['Chez Janou', 'Un bistró provenzal junto a la Place des Vosges con terraza y gran carta de pastís; famoso por su enorme bol de mousse de chocolate.', 'La mousse llega en un bol para servirse a gusto. Reserva para cenar.'],
      de: ['Chez Janou', 'Ein provenzalisches Bistro an der Place des Vosges mit Terrasse und langer Pastis-Karte; berühmt für die riesige Schüssel Mousse au Chocolat.', 'Die Mousse kommt in einer Schüssel zum Selbstnehmen. Abends reservieren.'],
      fr: ['Chez Janou', 'Un bistrot provençal près de la place des Vosges, terrasse et longue carte de pastis ; célèbre pour son saladier de mousse au chocolat.', 'La mousse arrive en saladier, servez-vous. Réservez le soir.'],
      it: ['Chez Janou', 'Un bistrot provenzale vicino a Place des Vosges con terrazza e lunga lista di pastis; famoso per la grande ciotola di mousse al cioccolato.', 'La mousse arriva in una ciotola da cui servirsi. Prenota a cena.'],
    }, { price: level(2), address: '2 Rue Roger Verlomme', menu: [
      ['Ratatouille', undefined, 'прованское овощное рагу|Provençal vegetable stew|pisto provenzal|provenzalischer Gemüseeintopf|ratatouille provençale|stufato di verdure provenzale'],
      ['Mousse au chocolat', undefined, 'шоколадный мусс в общей миске|chocolate mousse from a shared bowl|mousse de chocolate en bol para compartir|Mousse au Chocolat aus der Schüssel|mousse au chocolat au saladier|mousse al cioccolato dalla ciotola'],
    ] }),
    P('pierre-herme', 'food', 48.8513, 2.3325, BISTRO, 4.6, 5400, ['food'], {
      ru: ['Pierre Hermé (Бонапарт)', 'Бутик одного из самых известных кондитеров Франции: макаронс и пирожное «Испахан» — роза, личи и малина.', 'Возьмите коробку макаронс с собой и съешьте в Люксембургском саду в пяти минутах.'],
      en: ['Pierre Hermé (Bonaparte)', 'The boutique of one of France’s best-known pastry chefs: macarons and the Ispahan — rose, lychee and raspberry.', 'Take a box of macarons to the Luxembourg Gardens five minutes away.'],
      es: ['Pierre Hermé (Bonaparte)', 'La tienda de uno de los pasteleros más famosos de Francia: macarons y el Ispahan, de rosa, lichi y frambuesa.', 'Llévate una caja de macarons a los jardines de Luxemburgo, a cinco minutos.'],
      de: ['Pierre Hermé (Bonaparte)', 'Die Boutique eines der bekanntesten Pâtissiers Frankreichs: Macarons und das Ispahan – Rose, Litschi, Himbeere.', 'Eine Schachtel Macarons in den Jardin du Luxembourg mitnehmen, fünf Minuten entfernt.'],
      fr: ['Pierre Hermé (Bonaparte)', 'La boutique de l’un des pâtissiers les plus connus de France : macarons et Ispahan rose-litchi-framboise.', 'Emportez une boîte de macarons au Luxembourg, à cinq minutes.'],
      it: ['Pierre Hermé (Bonaparte)', 'La boutique di uno dei pasticceri più noti di Francia: macaron e l’Ispahan a rosa, litchi e lampone.', 'Porta una scatola di macaron ai Giardini del Lussemburgo, a cinque minuti.'],
    }, { price: level(2), address: '72 Rue Bonaparte', menu: [
      ['Macaron Ispahan', undefined, 'макаронс с розой, личи и малиной|rose, lychee and raspberry macaron|macaron de rosa, lichi y frambuesa|Macaron mit Rose, Litschi und Himbeere|macaron rose, litchi, framboise|macaron rosa, litchi e lampone'],
      ['Macaron Mogador', undefined, 'макаронс с маракуйей и молочным шоколадом|passion fruit and milk chocolate macaron|macaron de maracuyá y chocolate con leche|Macaron mit Maracuja und Milchschokolade|macaron fruit de la passion et chocolat au lait|macaron frutto della passione e cioccolato al latte'],
    ] }),
    P('le-train-bleu', 'food', 48.8447, 2.3737, BISTRO, 4.4, 9700, ['food', 'history', 'romance'], {
      ru: ['Le Train Bleu', 'Ресторан 1901 года на вокзале Лионский: позолота, росписи с видами городов, по которым шёл поезд на Ривьеру, и классическая французская кухня.', 'Даже если не ужинаете — выпейте кофе в баре и посмотрите на потолки.'],
      en: ['Le Train Bleu', 'A 1901 restaurant inside Gare de Lyon: gilding, murals of the towns on the line to the Riviera and classic French cooking.', 'Even without dinner, have a coffee in the bar and look up at the ceilings.'],
      es: ['Le Train Bleu', 'Un restaurante de 1901 en la estación de Lyon: dorados, murales de las ciudades de la línea a la Riviera y cocina francesa clásica.', 'Aunque no cenes, toma un café en el bar y mira los techos.'],
      de: ['Le Train Bleu', 'Ein Restaurant von 1901 im Gare de Lyon: Vergoldungen, Wandbilder der Städte an der Strecke zur Riviera und klassische französische Küche.', 'Auch ohne Dinner: in der Bar einen Kaffee trinken und an die Decken schauen.'],
      fr: ['Le Train Bleu', 'Un restaurant de 1901 en gare de Lyon : dorures, fresques des villes de la ligne vers la Riviera et grande cuisine française classique.', 'Même sans dîner, prenez un café au bar et levez les yeux.'],
      it: ['Le Train Bleu', 'Un ristorante del 1901 nella Gare de Lyon: dorature, affreschi delle città sulla linea per la Riviera e cucina francese classica.', 'Anche senza cenare, prendi un caffè al bar e guarda i soffitti.'],
    }, { price: level(3), address: 'Gare de Lyon, Place Louis-Armand', menu: [
      ['Gigot d’agneau', undefined, 'запечённая баранья нога, нарезаемая у стола|roast leg of lamb carved at the table|pierna de cordero trinchada en la mesa|am Tisch tranchierte Lammkeule|gigot d’agneau découpé en salle|cosciotto d’agnello tagliato al tavolo'],
      ['Baba au rhum', undefined, 'ромовая баба|rum baba|babá al ron|Rum-Baba|baba au rhum|babà al rum'],
    ] }),
  ],
  routes: [
    D(['notre-dame', 'sainte-chapelle', '=louvre', '=paris-angelina', 'orangerie', '=paris-pont-alexandre-iii', '=eiffel', '=paris-trocadero', 'le-cinq'],
      'Сите, Лувр и Эйфелева башня|Île de la Cité, the Louvre and the Eiffel Tower|La Cité, el Louvre y la torre Eiffel|Île de la Cité, Louvre und Eiffelturm|La Cité, le Louvre et la tour Eiffel|La Cité, il Louvre e la Tour Eiffel'),
    D(['=paris-cafe-de-flore', 'musee-dorsay', 'relais-de-l-entrecote', 'luxembourg-gardens', 'pantheon', 'berthillon', 'chez-janou'],
      'Левый берег, Орсе и Маре|Left Bank, Orsay and the Marais|Rive Gauche, Orsay y el Marais|Rive Gauche, Orsay und Marais|Rive gauche, Orsay et le Marais|Rive Gauche, Orsay e il Marais'),
    D(['du-pain-et-des-idees', 'canal-saint-martin', '=paris-sacre-coeur-montmartre', 'bouillon-chartier', 'pere-lachaise', 'arpege'],
      'Канал Сен-Мартен, Монмартр и Пер-Лашез|Canal Saint-Martin, Montmartre and Père Lachaise|Canal Saint-Martin, Montmartre y Père-Lachaise|Canal Saint-Martin, Montmartre und Père Lachaise|Canal Saint-Martin, Montmartre et Père-Lachaise|Canal Saint-Martin, Montmartre e Père-Lachaise'),
  ],
};

export default pack;
