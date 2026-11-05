import type { CityPack } from '../types';
import { free, level, makeDay, makePlace } from './_kit.ts';

const P = makePlace('brussels');
const D = makeDay('brussels');
const CITY = 'aYuCmRyOwaE';
const GALLERY = 'Ox9QeIBpiPQ';
const ARCH = '8BcYAgdo1Ac';
const FOOD = 'aHIZmepJIvk';
const SQUARE = 'biUOAGo75iw';
const HILL = 'bza7Ak4aHhk';
const NOUVEAU = 'ghItH5O7Kyk';

const pack: CityPack = {
  country: 'BE',
  city: 'brussels',
  places: [
    P('manneken-pis', 'attraction', 50.845, 4.35, SQUARE, 4.1, 98000, ['history', 'photo'], {
      ru: ['Писающий мальчик', 'Маленькая бронзовая статуя XVII века — символ брюссельского юмора; у него более тысячи костюмов, которые меняют по праздникам.', 'Гардероб мальчика выставлен в музее GardeRobe MannekenPis неподалёку.'],
      en: ['Manneken Pis', 'A small 17th-century bronze statue and emblem of Brussels humour; he owns over a thousand costumes, changed for festivities.', 'His wardrobe is on show at the nearby GardeRobe MannekenPis museum.'],
      es: ['Manneken Pis', 'Una pequeña estatua de bronce del siglo XVII, emblema del humor bruselense; tiene más de mil trajes que se cambian en fiestas.', 'Su vestuario se expone en el museo GardeRobe MannekenPis, cerca.'],
      de: ['Manneken Pis', 'Eine kleine Bronzestatue aus dem 17. Jh., Sinnbild Brüsseler Humors; er besitzt über tausend Kostüme, die zu Festen gewechselt werden.', 'Seine Garderobe zeigt das nahe Museum GardeRobe MannekenPis.'],
      fr: ['Manneken-Pis', 'Une petite statue de bronze du XVIIe, emblème de l’humour bruxellois ; il possède plus de mille costumes changés lors des fêtes.', 'Sa garde-robe est exposée au musée GardeRobe MannekenPis tout proche.'],
      it: ['Manneken Pis', 'Una piccola statua in bronzo del Seicento, simbolo dell’umorismo di Bruxelles; ha più di mille costumi che si cambiano nelle feste.', 'Il suo guardaroba è esposto nel vicino museo GardeRobe MannekenPis.'],
    }, { price: free, hours: 'always' }),
    P('magritte-museum', 'attraction', 50.8427, 4.3577, HILL, 4.5, 15000, ['art', 'museums'], {
      ru: ['Музей Магритта', 'Крупнейшая коллекция Рене Магритта — картины, рисунки и письма сюрреалиста — в составе Королевских музеев изящных искусств.', 'Комбинированный билет открывает и Музей старинного искусства с Брейгелем.'],
      en: ['Magritte Museum', 'The largest collection of René Magritte — the surrealist’s paintings, drawings and letters — part of the Royal Museums of Fine Arts.', 'A combo ticket also opens the Old Masters Museum with Bruegel.'],
      es: ['Museo Magritte', 'La mayor colección de René Magritte —pinturas, dibujos y cartas del surrealista—, parte de los Museos Reales de Bellas Artes.', 'La entrada combinada incluye el Museo Old Masters con Brueghel.'],
      de: ['Magritte-Museum', 'Die größte Sammlung von René Magritte – Gemälde, Zeichnungen und Briefe des Surrealisten – Teil der Königlichen Museen der Schönen Künste.', 'Ein Kombiticket öffnet auch das Old Masters Museum mit Bruegel.'],
      fr: ['Musée Magritte', 'La plus grande collection de René Magritte, toiles, dessins et lettres du surréaliste, au sein des Musées royaux des Beaux-Arts.', 'Le billet combiné ouvre aussi le musée Old Masters et ses Bruegel.'],
      it: ['Museo Magritte', 'La più grande collezione di René Magritte, dipinti, disegni e lettere del surrealista, parte dei Musei reali di belle arti.', 'Il biglietto combinato apre anche l’Old Masters Museum con Bruegel.'],
    }, { hours: '10:00–17:00', address: 'Place Royale 1' }),
    P('royal-palace', 'attraction', 50.8417, 4.362, CITY, 4.4, 22000, ['history', 'architecture'], {
      ru: ['Королевский дворец', 'Официальная резиденция короля Бельгии напротив Брюссельского парка; парадные залы открыты летом — с потолком из крыльев жуков-златок в Зеркальном зале.', 'Открыт для посещения обычно с конца июля до начала сентября, вход бесплатный.'],
      en: ['Royal Palace', 'The Belgian king’s official palace facing Brussels Park; the state rooms open in summer — including the Mirror Room ceiling made of jewel-beetle wings.', 'Usually open late July to early September, free entry.'],
      es: ['Palacio Real', 'El palacio oficial del rey de Bélgica frente al Parque de Bruselas; los salones abren en verano, incluido el techo de la Sala de los Espejos con alas de escarabajo.', 'Suele abrir de finales de julio a principios de septiembre, gratis.'],
      de: ['Königspalast', 'Der Amtspalast des belgischen Königs gegenüber dem Brüsseler Park; die Prunkräume öffnen im Sommer – mit der Spiegelsaaldecke aus Prachtkäferflügeln.', 'Meist Ende Juli bis Anfang September geöffnet, Eintritt frei.'],
      fr: ['Palais royal', 'Le palais officiel du roi des Belges face au parc de Bruxelles ; salons ouverts l’été, dont le plafond de la salle des Glaces en élytres de scarabées.', 'Généralement ouvert fin juillet–début septembre, entrée gratuite.'],
      it: ['Palazzo Reale', 'Il palazzo ufficiale del re del Belgio di fronte al Parco di Bruxelles; le sale aprono d’estate, compreso il soffitto della Sala degli Specchi fatto di elitre di coleotteri.', 'Di solito aperto da fine luglio a inizio settembre, ingresso gratuito.'],
    }, { price: free, address: 'Rue Brederode 16' }),
    P('comic-strip-center', 'attraction', 50.8512, 4.3592, NOUVEAU, 4.5, 18000, ['art', 'museums'], {
      ru: ['Бельгийский центр комиксов', 'Музей комиксов — от Тинтина и смурфиков до современных авторов — в модерновом здании бывшего склада тканей работы Виктора Орта.', 'Потом пройдите по маршруту настенных комиксов на фасадах города.'],
      en: ['Belgian Comic Strip Center', 'A comics museum — from Tintin and the Smurfs to today’s artists — in Victor Horta’s Art Nouveau former textile warehouse.', 'Then follow the Comic Book Route of murals on the city’s façades.'],
      es: ['Centro Belga del Cómic', 'Un museo del cómic —de Tintín y los Pitufos a autores actuales— en un antiguo almacén textil modernista de Victor Horta.', 'Luego sigue la Ruta del Cómic de murales en las fachadas.'],
      de: ['Belgisches Comiczentrum', 'Ein Comicmuseum – von Tim und Struppi und den Schlümpfen bis zu heutigen Zeichnern – in Victor Hortas Jugendstil-Textillager.', 'Danach der Comic-Route mit Wandbildern an den Fassaden folgen.'],
      fr: ['Centre belge de la bande dessinée', 'Un musée de la BD, de Tintin et les Schtroumpfs aux auteurs actuels, dans un ancien magasin de tissus Art nouveau de Victor Horta.', 'Suivez ensuite le parcours BD des fresques sur les façades.'],
      it: ['Centro belga del fumetto', 'Un museo del fumetto, da Tintin e i Puffi agli autori di oggi, in un ex magazzino tessile liberty di Victor Horta.', 'Poi segui il percorso dei murales a fumetti sulle facciate.'],
    }, { hours: '10:00–18:00', address: 'Rue des Sables 20' }),
    P('sablon', 'attraction', 50.8402, 4.3555, CITY, 4.6, 12000, ['shopping', 'architecture'], {
      ru: ['Площадь Саблон', 'Площадь антикваров и шоколатье у готической церкви Нотр-Дам-дю-Саблон; по выходным — антикварный рынок.', 'Через дорогу — маленький сад Пти-Саблон с 48 бронзовыми статуэтками цехов.'],
      en: ['Sablon', 'A square of antique dealers and chocolatiers by the Gothic church of Notre-Dame du Sablon; an antiques market at weekends.', 'Across the road the little Petit Sablon garden has 48 bronze guild statuettes.'],
      es: ['Sablon', 'Una plaza de anticuarios y chocolateros junto a la iglesia gótica de Notre-Dame du Sablon; mercado de antigüedades los fines de semana.', 'Enfrente, el jardincito del Petit Sablon con 48 estatuillas de gremios.'],
      de: ['Sablon', 'Ein Platz der Antiquitätenhändler und Chocolatiers an der gotischen Kirche Notre-Dame du Sablon; am Wochenende Antikmarkt.', 'Gegenüber der kleine Garten Petit Sablon mit 48 Zunftfiguren aus Bronze.'],
      fr: ['Le Sablon', 'Une place d’antiquaires et de chocolatiers près de l’église gothique Notre-Dame du Sablon ; marché d’antiquités le week-end.', 'En face, le petit jardin du Petit Sablon et ses 48 statuettes des corporations.'],
      it: ['Sablon', 'Una piazza di antiquari e cioccolatieri accanto alla chiesa gotica di Notre-Dame du Sablon; mercato dell’antiquariato nel weekend.', 'Di fronte il giardinetto del Petit Sablon con 48 statuette delle corporazioni.'],
    }, { price: free }),
    P('cathedral', 'attraction', 50.8478, 4.3602, CITY, 4.6, 16000, ['architecture', 'history'], {
      ru: ['Собор Святых Михаила и Гудулы', 'Готический собор XIII–XV веков на холме между Верхним и Нижним городом, где проходят королевские свадьбы; витражи XVI века.', 'Вход бесплатный; загляните в раскопанную романскую крипту.'],
      en: ['St Michael and St Gudula Cathedral', 'A 13th–15th-century Gothic cathedral on the slope between the upper and lower town, venue of royal weddings; 16th-century stained glass.', 'Entry is free; peek into the excavated Romanesque crypt.'],
      es: ['Catedral de San Miguel y Santa Gúdula', 'Una catedral gótica de los siglos XIII–XV entre la ciudad alta y baja, escenario de bodas reales; vidrieras del XVI.', 'Entrada gratuita; asómate a la cripta románica excavada.'],
      de: ['Kathedrale St. Michael und St. Gudula', 'Eine gotische Kathedrale aus dem 13.–15. Jh. zwischen Ober- und Unterstadt, Ort königlicher Hochzeiten; Glasfenster aus dem 16. Jh.', 'Eintritt frei; einen Blick in die ausgegrabene romanische Krypta werfen.'],
      fr: ['Cathédrale Saints-Michel-et-Gudule', 'Une cathédrale gothique des XIIIe–XVe entre haut et bas de la ville, lieu des mariages royaux ; vitraux du XVIe.', 'Entrée libre ; jetez un œil à la crypte romane mise au jour.'],
      it: ['Cattedrale dei Santi Michele e Gudula', 'Una cattedrale gotica del XIII–XV secolo tra città alta e bassa, sede dei matrimoni reali; vetrate del Cinquecento.', 'Ingresso gratuito; sbircia nella cripta romanica scavata.'],
    }, { price: free, hours: '08:30–18:00' }),
    P('parlamentarium', 'attraction', 50.8386, 4.3753, CITY, 4.6, 9700, ['museums', 'history'], {
      ru: ['Парламентариум', 'Бесплатный интерактивный центр Европарламента о том, как устроен Евросоюз и как он возник после войн XX века.', 'Вход бесплатный, мультимедийный гид на многих языках.'],
      en: ['Parlamentarium', 'The European Parliament’s free interactive centre on how the EU works and how it grew out of the 20th century’s wars.', 'Free entry, with a multimedia guide in many languages.'],
      es: ['Parlamentarium', 'El centro interactivo gratuito del Parlamento Europeo sobre cómo funciona la UE y cómo nació tras las guerras del siglo XX.', 'Entrada gratuita con guía multimedia en muchos idiomas.'],
      de: ['Parlamentarium', 'Das kostenlose interaktive Besucherzentrum des Europäischen Parlaments: wie die EU funktioniert und aus den Kriegen des 20. Jh. entstand.', 'Eintritt frei, Multimedia-Guide in vielen Sprachen.'],
      fr: ['Parlamentarium', 'Le centre interactif gratuit du Parlement européen sur le fonctionnement de l’UE et sa naissance après les guerres du XXe.', 'Entrée gratuite, guide multimédia en de nombreuses langues.'],
      it: ['Parlamentarium', 'Il centro interattivo gratuito del Parlamento europeo su come funziona l’UE e come è nata dalle guerre del Novecento.', 'Ingresso gratuito, guida multimediale in molte lingue.'],
    }, { price: free, hours: '09:30–18:00', address: 'Rue Wiertz 60' }),
    P('mim', 'attraction', 50.843, 4.3576, NOUVEAU, 4.6, 11000, ['museums', 'architecture', 'views'], {
      ru: ['Музей музыкальных инструментов (MIM)', 'Тысячи инструментов в модерновом здании бывшего универмага Old England; в наушниках слышно, как звучит каждый, а на крыше — кафе с видом.', 'Даже без музея поднимитесь в кафе на крыше — вид на весь Нижний город.'],
      en: ['Musical Instruments Museum (MIM)', 'Thousands of instruments in the Art Nouveau Old England department store; headphones let you hear each one, and the rooftop café has views.', 'Even without the museum, go up to the rooftop café for a view over the lower town.'],
      es: ['Museo de Instrumentos Musicales (MIM)', 'Miles de instrumentos en los antiguos almacenes modernistas Old England; con auriculares se oye cada uno, y el café de la azotea tiene vistas.', 'Aunque no entres, sube al café de la azotea por la vista.'],
      de: ['Musikinstrumentenmuseum (MIM)', 'Tausende Instrumente im Jugendstil-Kaufhaus Old England; per Kopfhörer hört man jedes, und das Dachcafé bietet Aussicht.', 'Auch ohne Museum ins Dachcafé – Blick über die Unterstadt.'],
      fr: ['Musée des instruments de musique (MIM)', 'Des milliers d’instruments dans les anciens magasins Art nouveau Old England ; un casque fait entendre chacun, et le café du toit a la vue.', 'Même sans musée, montez au café du toit pour la vue sur le bas de la ville.'],
      it: ['Museo degli strumenti musicali (MIM)', 'Migliaia di strumenti negli ex magazzini liberty Old England; con le cuffie si ascolta ognuno, e il caffè sul tetto ha vista.', 'Anche senza museo, sali al caffè sul tetto per la vista sulla città bassa.'],
    }, { spot: 'insta', hours: '09:30–17:00', address: 'Rue Montagne de la Cour 2' }),
    P('jeu-de-balle', 'attraction', 50.837, 4.345, CITY, 4.4, 9300, ['market', 'shopping'], {
      ru: ['Блошиный рынок на площади Жё-де-Баль', 'Ежедневный блошиный рынок в районе Мароль с XIX века: старые вещи, пластинки, комиксы и всё на свете — прямо на брусчатке.', 'Лучшие находки — рано утром; к обеду торговцы уступают в цене.'],
      en: ['Place du Jeu de Balle flea market', 'A daily flea market in the Marolles since the 19th century: old things, records, comics and everything else, laid out on the cobbles.', 'The best finds are early morning; by lunchtime sellers drop prices.'],
      es: ['Rastro de la Place du Jeu de Balle', 'Un mercadillo diario en los Marolles desde el siglo XIX: objetos antiguos, discos, cómics y de todo sobre los adoquines.', 'Lo mejor, temprano; a mediodía bajan los precios.'],
      de: ['Flohmarkt Place du Jeu de Balle', 'Ein täglicher Flohmarkt in den Marollen seit dem 19. Jh.: Altes, Platten, Comics und alles Mögliche auf dem Kopfsteinpflaster.', 'Die besten Funde frühmorgens; mittags werden die Preise gesenkt.'],
      fr: ['Marché aux puces du Jeu de Balle', 'Un marché aux puces quotidien dans les Marolles depuis le XIXe : vieilleries, vinyles, BD et tout le reste sur les pavés.', 'Les meilleures trouvailles tôt le matin ; vers midi, les prix baissent.'],
      it: ['Mercatino di Place du Jeu de Balle', 'Un mercatino delle pulci quotidiano nei Marolles dall’Ottocento: oggetti vecchi, dischi, fumetti e di tutto sui sampietrini.', 'Gli affari migliori di primo mattino; verso mezzogiorno i prezzi calano.'],
    }, { spot: 'hidden', price: free, hours: '06:00–14:00' }),
    P('koekelberg', 'attraction', 50.8667, 4.3172, CITY, 4.5, 14000, ['architecture', 'views'], {
      ru: ['Базилика Кукельберг', 'Одна из крупнейших церквей мира в стиле ар-деко; с галереи у купола — панорама Брюсселя до Атомиума.', 'Поднимитесь на панорамную террасу купола — есть лифт.'],
      en: ['Koekelberg Basilica', 'One of the world’s largest Art Deco churches; the gallery by the dome offers a panorama of Brussels out to the Atomium.', 'Go up to the dome’s panoramic terrace — there’s a lift.'],
      es: ['Basílica de Koekelberg', 'Una de las mayores iglesias art déco del mundo; desde la galería de la cúpula, panorámica de Bruselas hasta el Atomium.', 'Sube a la terraza panorámica de la cúpula: hay ascensor.'],
      de: ['Basilika Koekelberg', 'Eine der größten Art-déco-Kirchen der Welt; von der Galerie an der Kuppel Panorama über Brüssel bis zum Atomium.', 'Zur Panoramaterrasse der Kuppel fahren – mit Lift.'],
      fr: ['Basilique de Koekelberg', 'L’une des plus grandes églises Art déco du monde ; depuis la galerie du dôme, panorama sur Bruxelles jusqu’à l’Atomium.', 'Montez à la terrasse panoramique du dôme, ascenseur disponible.'],
      it: ['Basilica di Koekelberg', 'Una delle chiese art déco più grandi del mondo; dalla galleria della cupola panorama di Bruxelles fino all’Atomium.', 'Sali alla terrazza panoramica della cupola: c’è l’ascensore.'],
    }, { spot: 'insta', address: 'Parvis de la Basilique 1' }),

    P('fin-de-siecle', 'food', 50.8497, 4.3474, FOOD, 4.5, 7400, ['food'], {
      ru: ['Fin de Siècle', 'Шумный бельгийский ресторан без телефона и бронирования: стумп, карбонад по-фламандски на пиве и курица «Брюссельская».', 'Приходите к открытию в 18:00 — очередь собирается быстро; оплата часто только наличными.'],
      en: ['Fin de Siècle', 'A loud Belgian restaurant with no phone or bookings: stoemp, Flemish beer-braised carbonnade and Brussels-style chicken.', 'Arrive at 6 pm opening — the queue builds fast; often cash only.'],
      es: ['Fin de Siècle', 'Un ruidoso restaurante belga sin teléfono ni reservas: stoemp, carbonada flamenca a la cerveza y pollo a la bruselense.', 'Llega a la apertura a las 18:00: la cola crece rápido; a menudo solo efectivo.'],
      de: ['Fin de Siècle', 'Ein lautes belgisches Restaurant ohne Telefon und Reservierung: Stoemp, flämische Carbonnade in Bier und Huhn nach Brüsseler Art.', 'Zur Öffnung um 18 Uhr kommen – die Schlange wächst schnell; oft nur bar.'],
      fr: ['Fin de Siècle', 'Un restaurant belge bruyant sans téléphone ni réservation : stoemp, carbonade flamande à la bière et poulet à la bruxelloise.', 'Arrivez à l’ouverture à 18 h, la file grossit vite ; souvent espèces uniquement.'],
      it: ['Fin de Siècle', 'Un rumoroso ristorante belga senza telefono né prenotazioni: stoemp, carbonade fiamminga alla birra e pollo alla bruxellese.', 'Arriva all’apertura alle 18: la coda cresce in fretta; spesso solo contanti.'],
    }, { price: level(2), address: 'Rue des Chartreux 9', menu: [
      ['Carbonnade flamande', undefined, 'говядина, томлённая в бельгийском пиве|beef stewed in Belgian beer|ternera guisada en cerveza belga|in belgischem Bier geschmortes Rind|bœuf mijoté à la bière belge|manzo stufato nella birra belga'],
      ['Stoemp', undefined, 'пюре из картофеля с овощами и колбаской|potato-vegetable mash with sausage|puré de patata y verduras con salchicha|Kartoffel-Gemüse-Stampf mit Wurst|écrasé de pommes de terre aux légumes et saucisse|purè di patate e verdure con salsiccia'],
    ] }),
    P('noordzee', 'food', 50.8496, 4.3477, FOOD, 4.6, 11000, ['food', 'streetfood'], {
      ru: ['Noordzee / Mer du Nord', 'Рыбная лавка с уличными стойками у церкви Сент-Катрин: креветочные крокеты, рыбный суп, жареные моллюски и бокал белого.', 'Едят стоя у бочек на площади; обед — лучшее время.'],
      en: ['Noordzee / Mer du Nord', 'A fishmonger with street counters by Sainte-Catherine church: shrimp croquettes, fish soup, grilled shellfish and a glass of white.', 'You eat standing at barrels on the square; lunchtime is best.'],
      es: ['Noordzee / Mer du Nord', 'Una pescadería con barras en la calle junto a Sainte-Catherine: croquetas de camarón, sopa de pescado, marisco a la plancha y una copa de blanco.', 'Se come de pie junto a barriles en la plaza; mejor a mediodía.'],
      de: ['Noordzee / Mer du Nord', 'Ein Fischhändler mit Stehtischen an der Kirche Sainte-Catherine: Garnelenkroketten, Fischsuppe, gegrillte Meeresfrüchte und ein Glas Weißwein.', 'Gegessen wird im Stehen an Fässern auf dem Platz; mittags am besten.'],
      fr: ['Noordzee / Mer du Nord', 'Une poissonnerie avec comptoirs de rue près de l’église Sainte-Catherine : croquettes de crevettes, soupe de poisson, coquillages grillés et verre de blanc.', 'On mange debout autour de tonneaux sur la place ; idéal le midi.'],
      it: ['Noordzee / Mer du Nord', 'Una pescheria con banconi in strada vicino a Sainte-Catherine: crocchette di gamberetti, zuppa di pesce, frutti di mare alla piastra e un bicchiere di bianco.', 'Si mangia in piedi attorno alle botti in piazza; meglio a pranzo.'],
    }, { price: level(2), address: 'Rue Sainte-Catherine 45', menu: [
      ['Croquettes aux crevettes', undefined, 'крокеты с серыми креветками|grey shrimp croquettes|croquetas de camarón gris|Graugarnelenkroketten|croquettes aux crevettes grises|crocchette di gamberetti grigi'],
      ['Soupe de poisson', undefined, 'рыбный суп|fish soup|sopa de pescado|Fischsuppe|soupe de poisson|zuppa di pesce'],
    ] }),
    P('delirium-cafe', 'food', 50.8483, 4.354, FOOD, 4.4, 21000, ['food', 'nightlife'], {
      ru: ['Delirium Café', 'Бар в переулке у Гран-Плас, попавший в Книгу рекордов Гиннесса за ассортимент — более 2000 сортов пива; несколько этажей и подвалов.', 'Начните с бельгийских траппистов; вечером — живая музыка и толпа.'],
      en: ['Delirium Café', 'A bar in an alley off the Grand-Place that made the Guinness World Records for its range — over 2,000 beers; several floors and cellars.', 'Start with Belgian Trappists; evenings bring live music and crowds.'],
      es: ['Delirium Café', 'Un bar en un callejón junto a la Grand-Place que entró en el Libro Guinness por su oferta: más de 2000 cervezas; varias plantas y sótanos.', 'Empieza por las trapenses belgas; por la noche, música y gente.'],
      de: ['Delirium Café', 'Eine Bar in einer Gasse an der Grand-Place, im Guinness-Buch der Rekorde für über 2000 Biersorten; mehrere Etagen und Keller.', 'Mit belgischen Trappisten anfangen; abends Livemusik und Gedränge.'],
      fr: ['Delirium Café', 'Un bar d’une impasse près de la Grand-Place, au Livre Guinness des records pour plus de 2 000 bières ; plusieurs étages et caves.', 'Commencez par les trappistes belges ; le soir, musique et foule.'],
      it: ['Delirium Café', 'Un bar in un vicolo vicino alla Grand-Place, nel Guinness dei primati per oltre 2000 birre; più piani e cantine.', 'Inizia dalle trappiste belghe; la sera musica dal vivo e folla.'],
    }, { price: level(1), address: 'Impasse de la Fidélité 4', menu: [
      ['Delirium Tremens', undefined, 'фирменное бельгийское пиво с розовым слоном|signature Belgian ale with the pink elephant|cerveza belga del elefante rosa|belgisches Bier mit dem rosa Elefanten|bière belge à l’éléphant rose|birra belga con l’elefante rosa'],
      ['Trappist beer', undefined, 'пиво траппистов|Trappist beer|cerveza trapense|Trappistenbier|bière trappiste|birra trappista'],
    ] }),
    P('a-la-mort-subite', 'food', 50.8478, 4.3562, GALLERY, 4.4, 8900, ['food', 'history', 'nightlife'], {
      ru: ['À la Mort Subite', 'Пивное кафе 1928 года у Королевских галерей, давшее имя знаменитому гёзу и крику: зеркала, длинные скамьи и омлеты к пиву.', 'Закажите гёз или крик «Mort Subite» и бутерброд с «кип-кап».'],
      en: ['À la Mort Subite', 'A 1928 beer café by the Royal Galleries that gave its name to a famous gueuze and kriek: mirrors, long benches and omelettes with beer.', 'Order a Mort Subite gueuze or kriek and a tête pressée sandwich.'],
      es: ['À la Mort Subite', 'Un café cervecero de 1928 junto a las Galerías Reales que dio nombre a una famosa gueuze y kriek: espejos, bancos largos y tortillas.', 'Pide una gueuze o kriek Mort Subite y un bocadillo de cabeza de cerdo.'],
      de: ['À la Mort Subite', 'Ein Bierkaffee von 1928 an den Königlichen Galerien, Namensgeber eines berühmten Gueuze und Kriek: Spiegel, lange Bänke und Omeletts zum Bier.', 'Gueuze oder Kriek Mort Subite und ein Sülzebrot bestellen.'],
      fr: ['À la Mort Subite', 'Un café de 1928 près des Galeries royales qui a donné son nom à une célèbre gueuze et kriek : miroirs, longues banquettes et omelettes.', 'Prenez une gueuze ou kriek Mort Subite et une tartine de tête pressée.'],
      it: ['À la Mort Subite', 'Un caffè della birra del 1928 vicino alle Gallerie Reali che ha dato il nome a una famosa gueuze e kriek: specchi, lunghe panche e frittate.', 'Ordina una gueuze o kriek Mort Subite e un panino con testina.'],
    }, { price: level(1), address: 'Rue Montagne aux Herbes Potagères 7', menu: [
      ['Kriek', undefined, 'вишнёвое ламбик-пиво|cherry lambic beer|lambic de cereza|Kirsch-Lambic|bière lambic à la cerise|lambic alla ciliegia'],
      ['Omelette', undefined, 'омлет с ветчиной и сыром|ham-and-cheese omelette|tortilla de jamón y queso|Omelett mit Schinken und Käse|omelette jambon-fromage|frittata prosciutto e formaggio'],
    ] }),
    P('pierre-marcolini', 'food', 50.8401, 4.3557, CITY, 4.6, 5100, ['food', 'shopping'], {
      ru: ['Pierre Marcolini (Саблон)', 'Бутик шоколатье Пьера Марколини на площади Саблон: пралине, трюфели и макаронс в ювелирных витринах.', 'Возьмите коробку пралине с собой и сравните с соседними шоколатье на площади.'],
      en: ['Pierre Marcolini (Sablon)', 'Chocolatier Pierre Marcolini’s boutique on the Sablon: pralines, truffles and macarons in jewel-like displays.', 'Take a box of pralines and compare with the other chocolatiers on the square.'],
      es: ['Pierre Marcolini (Sablon)', 'La tienda del chocolatero Pierre Marcolini en el Sablon: pralinés, trufas y macarons en vitrinas de joyería.', 'Llévate una caja de pralinés y compara con los chocolateros vecinos.'],
      de: ['Pierre Marcolini (Sablon)', 'Die Boutique des Chocolatiers Pierre Marcolini am Sablon: Pralinen, Trüffel und Macarons in Schmuckvitrinen.', 'Eine Schachtel Pralinen mitnehmen und mit den Nachbar-Chocolatiers vergleichen.'],
      fr: ['Pierre Marcolini (Sablon)', 'La boutique du chocolatier Pierre Marcolini au Sablon : pralines, truffes et macarons en vitrines de joaillier.', 'Emportez une boîte de pralines et comparez avec les chocolatiers voisins.'],
      it: ['Pierre Marcolini (Sablon)', 'La boutique del cioccolatiere Pierre Marcolini al Sablon: praline, tartufi e macaron in vetrine da gioielleria.', 'Prendi una scatola di praline e confrontale con i cioccolatieri vicini.'],
    }, { price: level(2), address: 'Rue des Minimes 1', menu: [
      ['Pralines', undefined, 'бельгийские пралине|Belgian pralines|bombones belgas|belgische Pralinen|pralines belges|praline belghe'],
      ['Macarons', undefined, 'макаронс|macarons|macarons|Macarons|macarons|macaron'],
    ] }),
    P('wittamer', 'food', 50.8396, 4.3553, CITY, 4.5, 3900, ['food', 'history'], {
      ru: ['Wittamer', 'Кондитерская 1910 года на площади Саблон, поставщик бельгийского двора: пирожные, торты и шоколад; рядом — чайный салон.', 'Хорошо для завтрака: круассан и кофе в салоне на площади.'],
      en: ['Wittamer', 'A 1910 patisserie on the Sablon, supplier to the Belgian court: pastries, cakes and chocolate, with a tea room beside it.', 'Good for breakfast: croissant and coffee in the tea room on the square.'],
      es: ['Wittamer', 'Una pastelería de 1910 en el Sablon, proveedora de la corte belga: pasteles, tartas y chocolate, con salón de té.', 'Bien para desayunar: cruasán y café en el salón.'],
      de: ['Wittamer', 'Eine Konditorei von 1910 am Sablon, Hoflieferant: Gebäck, Torten und Schokolade, daneben ein Teesalon.', 'Gut zum Frühstück: Croissant und Kaffee im Teesalon am Platz.'],
      fr: ['Wittamer', 'Une pâtisserie de 1910 au Sablon, fournisseur de la cour de Belgique : pâtisseries, gâteaux et chocolats, avec salon de thé.', 'Parfait au petit-déjeuner : croissant et café au salon sur la place.'],
      it: ['Wittamer', 'Una pasticceria del 1910 al Sablon, fornitrice della corte belga: dolci, torte e cioccolato, con sala da tè accanto.', 'Ottimo a colazione: croissant e caffè nella sala sulla piazza.'],
    }, { price: level(2), address: 'Place du Grand Sablon 12', menu: [
      ['Croissant', undefined, 'круассан|croissant|cruasán|Croissant|croissant|croissant'],
      ['Pastry of the day', undefined, 'пирожное дня|pastry of the day|pastel del día|Gebäck des Tages|pâtisserie du jour|dolce del giorno'],
    ] }),
    P('le-pain-quotidien-dansaert', 'food', 50.849, 4.348, FOOD, 4.3, 3100, ['food'], {
      ru: ['Le Pain Quotidien (Дансар)', 'Первая пекарня знаменитой сети, открытая в Брюсселе в 1990 году на улице Дансар: общий длинный стол, хлеб на закваске и тартинки.', 'Закажите тартинку с авокадо или яйцом и бельгийские пасты к хлебу.'],
      en: ['Le Pain Quotidien (Dansaert)', 'The original bakery of the famous chain, opened in Brussels in 1990 on Rue Dansaert: a long communal table, sourdough and tartines.', 'Order a tartine with avocado or egg and the Belgian spreads for the bread.'],
      es: ['Le Pain Quotidien (Dansaert)', 'La panadería original de la famosa cadena, abierta en Bruselas en 1990 en la Rue Dansaert: mesa comunal, masa madre y tostas.', 'Pide una tosta de aguacate o huevo y las cremas belgas para untar.'],
      de: ['Le Pain Quotidien (Dansaert)', 'Die Ur-Bäckerei der bekannten Kette, 1990 in der Rue Dansaert eröffnet: langer Gemeinschaftstisch, Sauerteig und Tartines.', 'Eine Tartine mit Avocado oder Ei und belgische Aufstriche bestellen.'],
      fr: ['Le Pain Quotidien (Dansaert)', 'La boulangerie d’origine de la célèbre enseigne, ouverte en 1990 rue Dansaert : grande table commune, pain au levain et tartines.', 'Prenez une tartine avocat ou œuf et les pâtes à tartiner belges.'],
      it: ['Le Pain Quotidien (Dansaert)', 'Il forno originale della famosa catena, aperto nel 1990 in rue Dansaert: grande tavolo comune, pane a lievito madre e tartine.', 'Ordina una tartina con avocado o uovo e le creme belghe da spalmare.'],
    }, { price: level(2), address: 'Rue Antoine Dansaert 16', menu: [
      ['Tartine', undefined, 'тартинка на хлебе на закваске|open sandwich on sourdough|tosta de masa madre|belegtes Sauerteigbrot|tartine sur pain au levain|tartina su pane a lievito madre'],
      ['Belgian spreads', undefined, 'бельгийские пасты — шоколадная, спекулос|Belgian spreads — chocolate, speculoos|cremas belgas de chocolate y speculoos|belgische Aufstriche – Schokolade, Spekulatius|pâtes à tartiner belges, chocolat, spéculoos|creme belghe, cioccolato e speculoos'],
    ] }),
    P('frit-flagey', 'food', 50.8275, 4.372, FOOD, 4.5, 8200, ['food', 'streetfood'], {
      ru: ['Frit Flagey', 'Будка на площади Флажей в Иксель, за бельгийской картошкой фри к которой выстраивается очередь; дважды обжаренная, в бумажном кульке.', 'Возьмите с соусом андалуз или самурай; рядом пруды Иксель для прогулки.'],
      en: ['Frit Flagey', 'A kiosk on Place Flagey in Ixelles with a queue for its twice-fried Belgian fries in a paper cone.', 'Get andalouse or samurai sauce; the Ixelles ponds nearby make a nice stroll.'],
      es: ['Frit Flagey', 'Un quiosco en la Place Flagey de Ixelles con cola por sus patatas belgas fritas dos veces en cucurucho.', 'Pídelas con salsa andalouse o samurai; cerca, los estanques de Ixelles.'],
      de: ['Frit Flagey', 'Eine Bude an der Place Flagey in Ixelles mit Schlange für doppelt frittierte belgische Pommes in der Tüte.', 'Mit Andalouse- oder Samurai-Sauce; die Teiche von Ixelles liegen nah.'],
      fr: ['Frit Flagey', 'Une baraque place Flagey à Ixelles, la file pour ses frites belges cuites deux fois en cornet.', 'Prenez une sauce andalouse ou samouraï ; les étangs d’Ixelles sont tout près.'],
      it: ['Frit Flagey', 'Un chiosco in place Flagey a Ixelles con la coda per le patatine belghe fritte due volte nel cartoccio.', 'Prendile con salsa andalouse o samurai; vicino ci sono gli stagni di Ixelles.'],
    }, { price: level(1), address: 'Place Eugène Flagey', menu: [
      ['Frites', undefined, 'бельгийская картошка фри двойной обжарки|twice-fried Belgian fries|patatas belgas fritas dos veces|doppelt frittierte belgische Pommes|frites belges deux cuissons|patatine belghe fritte due volte'],
      ['Sauce andalouse', undefined, 'соус андалуз|andalouse sauce|salsa andalouse|Andalouse-Sauce|sauce andalouse|salsa andalouse'],
    ] }),
    P('nuetnigenough', 'food', 50.846, 4.348, FOOD, 4.6, 4300, ['food', 'nightlife'], {
      ru: ['Nüetnigenough', 'Крошечный бистро-бар с бельгийской кухней на пиве: карбонад, кролик в гёзе, мидии и длинная пивная карта.', 'Бронирования нет — придите к открытию или будьте готовы подождать с пивом.'],
      en: ['Nüetnigenough', 'A tiny bistro-bar of Belgian beer cooking: carbonnade, rabbit in gueuze, mussels and a long beer list.', 'No bookings — arrive at opening or wait with a beer.'],
      es: ['Nüetnigenough', 'Un diminuto bistró-bar de cocina belga a la cerveza: carbonada, conejo a la gueuze, mejillones y larga carta de cervezas.', 'Sin reservas: llega a la apertura o espera con una cerveza.'],
      de: ['Nüetnigenough', 'Eine winzige Bistro-Bar mit belgischer Bierküche: Carbonnade, Kaninchen in Gueuze, Muscheln und lange Bierkarte.', 'Keine Reservierung – zur Öffnung kommen oder mit Bier warten.'],
      fr: ['Nüetnigenough', 'Un minuscule bistrot-bar de cuisine belge à la bière : carbonade, lapin à la gueuze, moules et longue carte de bières.', 'Sans réservation : venez à l’ouverture ou patientez avec une bière.'],
      it: ['Nüetnigenough', 'Un minuscolo bistrot-bar di cucina belga alla birra: carbonade, coniglio alla gueuze, cozze e lunga lista di birre.', 'Niente prenotazioni: arriva all’apertura o aspetta con una birra.'],
    }, { price: level(2), address: 'Rue du Lombard 25', menu: [
      ['Lapin à la gueuze', undefined, 'кролик в пиве гёз|rabbit braised in gueuze|conejo a la gueuze|Kaninchen in Gueuze|lapin à la gueuze|coniglio alla gueuze'],
      ['Moules', undefined, 'мидии|mussels|mejillones|Muscheln|moules|cozze'],
    ] }),
    P('fleur-en-papier-dore', 'food', 50.8435, 4.3497, FOOD, 4.5, 3100, ['food', 'art', 'history'], {
      ru: ['La Fleur en Papier Doré', 'Кафе 1846 года, бывшее излюбленным местом сюрреалистов во главе с Магриттом: стены в рисунках и стихах, пиво и простая еда.', 'Тихий бар для пива после Манекен-Писа — он в пяти минутах.'],
      en: ['La Fleur en Papier Doré', 'An 1846 café that was the haunt of Magritte and the surrealists: walls covered in drawings and poems, beer and simple food.', 'A quiet bar for a beer after Manneken Pis, five minutes away.'],
      es: ['La Fleur en Papier Doré', 'Un café de 1846 frecuentado por Magritte y los surrealistas: paredes con dibujos y poemas, cerveza y comida sencilla.', 'Un bar tranquilo para una cerveza tras el Manneken Pis, a cinco minutos.'],
      de: ['La Fleur en Papier Doré', 'Ein Café von 1846, Treffpunkt von Magritte und den Surrealisten: Wände voller Zeichnungen und Gedichte, Bier und einfache Küche.', 'Eine ruhige Bar für ein Bier nach dem Manneken Pis, fünf Minuten entfernt.'],
      fr: ['La Fleur en Papier Doré', 'Un estaminet de 1846, repaire de Magritte et des surréalistes : murs couverts de dessins et poèmes, bière et cuisine simple.', 'Un bar calme pour une bière après le Manneken-Pis, à cinq minutes.'],
      it: ['La Fleur en Papier Doré', 'Un caffè del 1846 ritrovo di Magritte e dei surrealisti: pareti coperte di disegni e poesie, birra e cucina semplice.', 'Un bar tranquillo per una birra dopo il Manneken Pis, a cinque minuti.'],
    }, { spot: 'hidden', price: level(1), address: 'Rue des Alexiens 53', menu: [
      ['Belgian beer', undefined, 'бельгийское пиво|Belgian beer|cerveza belga|belgisches Bier|bière belge|birra belga'],
      ['Croque', undefined, 'горячий бутерброд с ветчиной и сыром|toasted ham-and-cheese sandwich|sándwich caliente de jamón y queso|Schinken-Käse-Toast|croque-monsieur|toast prosciutto e formaggio'],
    ] }),
  ],
  routes: [
    D(['=brussels-grand-place', '=brussels-galeries-saint-hubert', 'cathedral', 'comic-strip-center', 'noordzee', 'manneken-pis', 'fleur-en-papier-dore', 'fin-de-siecle'],
      'Гран-Плас, комиксы и Писающий мальчик|Grand-Place, comics and Manneken Pis|Grand-Place, cómics y el Manneken Pis|Grand-Place, Comics und Manneken Pis|Grand-Place, BD et Manneken-Pis|Grand-Place, fumetti e Manneken Pis'),
    D(['le-pain-quotidien-dansaert', '=brussels-mont-des-arts', 'magritte-museum', 'mim', 'nuetnigenough', 'royal-palace', 'sablon', 'pierre-marcolini', 'a-la-mort-subite'],
      'Монт-дез-Ар, Магритт и Саблон|Mont des Arts, Magritte and the Sablon|Mont des Arts, Magritte y el Sablon|Mont des Arts, Magritte und Sablon|Mont des Arts, Magritte et le Sablon|Mont des Arts, Magritte e il Sablon'),
    D(['wittamer', 'jeu-de-balle', 'frit-flagey', '=brussels-horta-museum', 'parlamentarium', '=brussels-cinquantenaire', '=brussels-chez-leon'],
      'Мароль, модерн Орта и европейский квартал|The Marolles, Horta’s Art Nouveau and the EU quarter|Los Marolles, el modernismo de Horta y el barrio europeo|Marollen, Hortas Jugendstil und Europaviertel|Les Marolles, l’Art nouveau d’Horta et le quartier européen|Marolles, il liberty di Horta e il quartiere europeo'),
  ],
};

export default pack;
