import type { CityPack } from '../types';
import { level, makeDay, makePlace } from './_kit.ts';

const P = makePlace('venice');
const D = makeDay('venice');
const CITY = 'McH4ksbcCyE';
const RIALTO = '5GVy9JS9usY';
const SANMARCO = 'eJ61aOqe7Lo';
const BURANO = 'DYb-pCHnubE';

const pack: CityPack = {
  country: 'IT',
  city: 'venice',
  places: [
    P('doges-palace', 'attraction', 45.4337, 12.3404, SANMARCO, 4.7, 61000, ['history', 'architecture', 'art'], {
      ru: ['Дворец дожей', 'Готический дворец правителей Венецианской республики: Зал Большого совета с «Раем» Тинторетто, тюрьмы и Мост вздохов изнутри.', 'Билет на время берите онлайн; экскурсия «Тайные маршруты» показывает камеру Казановы.'],
      en: ['Doge’s Palace', 'The Gothic palace of the Venetian Republic’s rulers: the Great Council Hall with Tintoretto’s Paradise, the prisons and the Bridge of Sighs from inside.', 'Book a timed ticket online; the “Secret Itineraries” tour shows Casanova’s cell.'],
      es: ['Palacio Ducal', 'El palacio gótico de los gobernantes de la República de Venecia: el Salón del Gran Consejo con el Paraíso de Tintoretto, las prisiones y el Puente de los Suspiros por dentro.', 'Compra entrada con hora online; la visita “Itinerarios secretos” muestra la celda de Casanova.'],
      de: ['Dogenpalast', 'Der gotische Palast der Herrscher der Republik Venedig: Saal des Großen Rates mit Tintorettos Paradies, Gefängnisse und die Seufzerbrücke von innen.', 'Zeitticket online buchen; die Führung „Geheime Wege“ zeigt Casanovas Zelle.'],
      fr: ['Palais des Doges', 'Le palais gothique des dirigeants de la République de Venise : salle du Grand Conseil et Paradis du Tintoret, prisons et pont des Soupirs vu de l’intérieur.', 'Billet horodaté en ligne ; la visite « Itinéraires secrets » montre la cellule de Casanova.'],
      it: ['Palazzo Ducale', 'Il palazzo gotico dei dogi: la Sala del Maggior Consiglio con il Paradiso di Tintoretto, le prigioni e il Ponte dei Sospiri dall’interno.', 'Prenota online l’orario; gli “Itinerari segreti” mostrano la cella di Casanova.'],
    }, { hours: '09:00–18:00', address: 'Piazza San Marco 1' }),
    P('grand-canal', 'attraction', 45.438, 12.333, RIALTO, 4.8, 39000, ['views', 'architecture', 'photo'], {
      ru: ['Гранд-канал на вапоретто №1', 'Главная «улица» Венеции: на медленном вапоретто линии 1 от вокзала до Сан-Марко проплывают мимо десятков дворцов и под мостом Риальто.', 'Садитесь на нос или корму у вокзала; поездка займёт около 40 минут.'],
      en: ['Grand Canal on vaporetto 1', 'Venice’s main “street”: the slow line 1 vaporetto from the station to San Marco glides past dozens of palaces and under the Rialto Bridge.', 'Grab a bow or stern seat at the station; the ride takes about 40 minutes.'],
      es: ['El Gran Canal en el vaporetto 1', 'La “calle” principal de Venecia: el lento vaporetto 1 de la estación a San Marcos pasa ante decenas de palacios y bajo el Rialto.', 'Coge sitio en proa o popa en la estación; el trayecto dura unos 40 minutos.'],
      de: ['Canal Grande mit Vaporetto 1', 'Venedigs Hauptstraße: Die langsame Linie 1 vom Bahnhof nach San Marco gleitet an Dutzenden Palästen vorbei und unter der Rialtobrücke hindurch.', 'Am Bahnhof einen Platz vorn oder hinten sichern; die Fahrt dauert etwa 40 Minuten.'],
      fr: ['Le Grand Canal en vaporetto 1', 'La grande « rue » de Venise : le lent vaporetto 1 de la gare à San Marco longe des dizaines de palais et passe sous le Rialto.', 'Prenez une place à l’avant ou à l’arrière à la gare ; environ 40 minutes.'],
      it: ['Canal Grande con il vaporetto 1', 'La “strada” principale di Venezia: la lenta linea 1 dalla stazione a San Marco scorre davanti a decine di palazzi e sotto il Rialto.', 'Prendi posto a prua o a poppa in stazione; circa 40 minuti.'],
    }, { spot: 'insta' }),
    P('gallerie-accademia', 'attraction', 45.4311, 12.3282, CITY, 4.6, 19000, ['art', 'museums'], {
      ru: ['Галерея Академии', 'Главное собрание венецианской живописи: Беллини, Джорджоне («Гроза»), Тициан, Тинторетто, Веронезе и Карпаччо.', 'Не пропустите огромный «Пир в доме Левия» Веронезе.'],
      en: ['Gallerie dell’Accademia', 'The great collection of Venetian painting: Bellini, Giorgione (The Tempest), Titian, Tintoretto, Veronese and Carpaccio.', 'Don’t miss Veronese’s huge Feast in the House of Levi.'],
      es: ['Galerías de la Academia', 'La gran colección de pintura veneciana: Bellini, Giorgione (La tempestad), Tiziano, Tintoretto, Veronés y Carpaccio.', 'No te pierdas el enorme Banquete en casa de Leví de Veronés.'],
      de: ['Gallerie dell’Accademia', 'Die große Sammlung venezianischer Malerei: Bellini, Giorgione (Das Gewitter), Tizian, Tintoretto, Veronese und Carpaccio.', 'Veroneses riesiges Gastmahl im Hause Levi nicht verpassen.'],
      fr: ['Gallerie dell’Accademia', 'La grande collection de peinture vénitienne : Bellini, Giorgione (La Tempête), Titien, Tintoret, Véronèse et Carpaccio.', 'Ne manquez pas l’immense Repas chez Lévi de Véronèse.'],
      it: ['Gallerie dell’Accademia', 'La grande raccolta di pittura veneziana: Bellini, Giorgione (La Tempesta), Tiziano, Tintoretto, Veronese e Carpaccio.', 'Non perdere l’enorme Convito in casa di Levi di Veronese.'],
    }, { hours: '08:15–19:15' }),
    P('peggy-guggenheim', 'attraction', 45.4309, 12.3315, CITY, 4.7, 22000, ['art', 'museums', 'gardens'], {
      ru: ['Коллекция Пегги Гуггенхайм', 'Искусство XX века — Пикассо, Поллок, Магритт, Кандинский — в одноэтажном дворце на Гранд-канале с садом скульптур.', 'Терраса у воды — одно из лучших мест для фото канала.'],
      en: ['Peggy Guggenheim Collection', '20th-century art — Picasso, Pollock, Magritte, Kandinsky — in a single-storey palazzo on the Grand Canal with a sculpture garden.', 'The waterside terrace is one of the best canal photo spots.'],
      es: ['Colección Peggy Guggenheim', 'Arte del siglo XX —Picasso, Pollock, Magritte, Kandinsky— en un palacio de una planta sobre el Gran Canal con jardín de esculturas.', 'La terraza sobre el agua es de las mejores fotos del canal.'],
      de: ['Peggy Guggenheim Collection', 'Kunst des 20. Jh. – Picasso, Pollock, Magritte, Kandinsky – in einem eingeschossigen Palazzo am Canal Grande mit Skulpturengarten.', 'Die Terrasse am Wasser ist einer der besten Fotospots am Kanal.'],
      fr: ['Collection Peggy Guggenheim', 'L’art du XXe siècle — Picasso, Pollock, Magritte, Kandinsky — dans un palais de plain-pied sur le Grand Canal avec jardin de sculptures.', 'La terrasse sur l’eau offre l’une des plus belles photos du canal.'],
      it: ['Collezione Peggy Guggenheim', 'Arte del Novecento —Picasso, Pollock, Magritte, Kandinsky— in un palazzo a un piano sul Canal Grande con giardino di sculture.', 'La terrazza sull’acqua è uno dei punti migliori per fotografare il canale.'],
    }, { hours: '10:00–18:00', address: 'Dorsoduro 701' }),
    P('frari', 'attraction', 45.4368, 12.3263, CITY, 4.7, 9800, ['art', 'history'], {
      ru: ['Базилика Фрари', 'Огромная францисканская церковь в Сан-Поло с «Вознесением Девы Марии» Тициана над алтарём и гробницей самого Тициана.', 'Встаньте у входа в хор — «Ассунта» Тициана видна в арке как в раме.'],
      en: ['Frari Basilica', 'A vast Franciscan church in San Polo with Titian’s Assumption over the altar and Titian’s own tomb.', 'Stand at the choir entrance — Titian’s Assunta is framed by the arch.'],
      es: ['Basílica de los Frari', 'Una enorme iglesia franciscana en San Polo con la Asunción de Tiziano sobre el altar y la tumba del propio Tiziano.', 'Colócate en la entrada del coro: la Asunta queda enmarcada en el arco.'],
      de: ['Frari-Basilika', 'Eine gewaltige Franziskanerkirche in San Polo mit Tizians Assunta über dem Altar und Tizians eigenem Grab.', 'Am Choreingang stehen – die Assunta erscheint im Bogen wie gerahmt.'],
      fr: ['Basilique des Frari', 'Une immense église franciscaine à San Polo, avec l’Assomption du Titien au-dessus de l’autel et le tombeau du Titien.', 'Placez-vous à l’entrée du chœur : l’Assunta est encadrée par l’arc.'],
      it: ['Basilica dei Frari', 'Un’enorme chiesa francescana a San Polo con l’Assunta di Tiziano sull’altare e la tomba di Tiziano.', 'Mettiti all’ingresso del coro: l’Assunta appare incorniciata dall’arco.'],
    }, { hours: '09:00–18:00' }),
    P('san-giorgio-maggiore', 'attraction', 45.4292, 12.3433, SANMARCO, 4.8, 12000, ['views', 'architecture'], {
      ru: ['Сан-Джорджо-Маджоре', 'Церковь Палладио на острове напротив площади Сан-Марко; с колокольни (есть лифт) — лучший вид на Венецию без толп.', 'Вапоретто №2 от Сан-Дзаккариа идёт 3 минуты.'],
      en: ['San Giorgio Maggiore', 'Palladio’s church on the island facing St Mark’s; its bell tower (with a lift) gives the best crowd-free view of Venice.', 'Vaporetto 2 from San Zaccaria takes three minutes.'],
      es: ['San Giorgio Maggiore', 'La iglesia de Palladio en la isla frente a San Marcos; su campanario (con ascensor) da la mejor vista de Venecia sin multitudes.', 'El vaporetto 2 desde San Zaccaria tarda tres minutos.'],
      de: ['San Giorgio Maggiore', 'Palladios Kirche auf der Insel gegenüber San Marco; ihr Campanile (mit Lift) bietet den besten Blick auf Venedig ohne Gedränge.', 'Vaporetto 2 ab San Zaccaria braucht drei Minuten.'],
      fr: ['San Giorgio Maggiore', 'L’église de Palladio sur l’île face à Saint-Marc ; son campanile (avec ascenseur) offre la plus belle vue de Venise sans foule.', 'Le vaporetto 2 depuis San Zaccaria met trois minutes.'],
      it: ['San Giorgio Maggiore', 'La chiesa del Palladio sull’isola di fronte a San Marco; il campanile (con ascensore) offre la vista migliore su Venezia senza folla.', 'Il vaporetto 2 da San Zaccaria impiega tre minuti.'],
    }, { spot: 'insta' }),
    P('murano', 'attraction', 45.458, 12.353, BURANO, 4.5, 26000, ['art', 'shopping', 'islands'], {
      ru: ['Мурано', 'Остров стеклодувов: мастерские с демонстрациями, Музей стекла и каналы с цветными домами.', 'Покупайте стекло со знаком «Vetro Artistico Murano» — так меньше риска нарваться на подделку.'],
      en: ['Murano', 'The glassblowers’ island: workshops with demonstrations, the Glass Museum and canals of colourful houses.', 'Buy glass with the “Vetro Artistico Murano” mark to avoid fakes.'],
      es: ['Murano', 'La isla de los sopladores de vidrio: talleres con demostraciones, el Museo del Vidrio y canales de casas de colores.', 'Compra vidrio con la marca “Vetro Artistico Murano” para evitar imitaciones.'],
      de: ['Murano', 'Die Insel der Glasbläser: Werkstätten mit Vorführungen, Glasmuseum und Kanäle mit bunten Häusern.', 'Glas mit dem Zeichen „Vetro Artistico Murano“ kaufen, um Fälschungen zu meiden.'],
      fr: ['Murano', 'L’île des souffleurs de verre : ateliers avec démonstrations, musée du Verre et canaux bordés de maisons colorées.', 'Achetez du verre portant la marque « Vetro Artistico Murano » pour éviter les contrefaçons.'],
      it: ['Murano', 'L’isola dei vetrai: fornaci con dimostrazioni, il Museo del Vetro e canali di case colorate.', 'Compra vetro con il marchio “Vetro Artistico Murano” per evitare imitazioni.'],
    }),
    P('torcello', 'nature', 45.4977, 12.4185, BURANO, 4.6, 6300, ['history', 'islands', 'nature'], {
      ru: ['Торчелло', 'Почти безлюдный остров лагуны, где начиналась Венеция: собор Санта-Мария-Ассунта VII века с золотыми византийскими мозаиками.', 'Совместите с Бурано — от него 5 минут на вапоретто №9.'],
      en: ['Torcello', 'An almost empty lagoon island where Venice began: the 7th-century Santa Maria Assunta cathedral with golden Byzantine mosaics.', 'Pair it with Burano — five minutes away on vaporetto 9.'],
      es: ['Torcello', 'Una isla de la laguna casi vacía donde empezó Venecia: la catedral de Santa Maria Assunta del siglo VII con mosaicos bizantinos dorados.', 'Combínala con Burano, a cinco minutos en el vaporetto 9.'],
      de: ['Torcello', 'Eine fast menschenleere Laguneninsel, auf der Venedig begann: die Kathedrale Santa Maria Assunta aus dem 7. Jh. mit goldenen byzantinischen Mosaiken.', 'Mit Burano verbinden – fünf Minuten mit Vaporetto 9.'],
      fr: ['Torcello', 'Une île presque déserte de la lagune où Venise est née : la cathédrale Santa Maria Assunta du VIIe siècle et ses mosaïques byzantines dorées.', 'À combiner avec Burano, à cinq minutes en vaporetto 9.'],
      it: ['Torcello', 'Un’isola della laguna quasi deserta dove nacque Venezia: la cattedrale di Santa Maria Assunta del VII secolo con mosaici bizantini dorati.', 'Abbinala a Burano, a cinque minuti con il vaporetto 9.'],
    }, { spot: 'hidden' }),
    P('libreria-acqua-alta', 'attraction', 45.438, 12.342, CITY, 4.5, 21000, ['photo', 'shopping'], {
      ru: ['Libreria Acqua Alta', 'Книжный магазин, где книги лежат в гондоле и ваннах на случай наводнения, а во дворе — лестница из старых томов с видом на канал.', 'Утром при открытии очередь меньше; не забудьте купить хотя бы открытку.'],
      en: ['Libreria Acqua Alta', 'A bookshop where books sit in a gondola and bathtubs in case of floods, and a staircase of old volumes in the yard looks over a canal.', 'The queue is shorter at opening; buy at least a postcard.'],
      es: ['Libreria Acqua Alta', 'Una librería donde los libros están en una góndola y bañeras por si hay inundación, y en el patio hay una escalera de tomos viejos con vista al canal.', 'A la apertura hay menos cola; compra al menos una postal.'],
      de: ['Libreria Acqua Alta', 'Eine Buchhandlung, in der Bücher wegen Hochwassers in einer Gondel und Badewannen liegen; im Hof eine Treppe aus alten Bänden mit Kanalblick.', 'Zur Öffnung ist die Schlange kürzer; wenigstens eine Postkarte kaufen.'],
      fr: ['Libreria Acqua Alta', 'Une librairie où les livres sont rangés dans une gondole et des baignoires contre les crues, et dont la cour a un escalier de vieux volumes face au canal.', 'Moins de file à l’ouverture ; achetez au moins une carte postale.'],
      it: ['Libreria Acqua Alta', 'Una libreria dove i libri stanno in una gondola e nelle vasche contro l’acqua alta, e nel cortile una scala di vecchi volumi guarda il canale.', 'All’apertura c’è meno coda; compra almeno una cartolina.'],
    }, { spot: 'hidden', hours: '09:00–19:15', address: 'Calle Lunga Santa Maria Formosa 5176B' }),
    P('jewish-ghetto', 'attraction', 45.4447, 12.326, CITY, 4.6, 8700, ['history', 'oldtown'], {
      ru: ['Еврейское гетто', 'Первое в мире гетто (1516) в Каннареджо: высокие дома, пять исторических синагог и тихая площадь Кампо-дель-Гетто-Нуово.', 'Синагоги показывают на экскурсиях Еврейского музея; по субботам закрыто.'],
      en: ['Jewish Ghetto', 'The world’s first ghetto (1516) in Cannaregio: tall houses, five historic synagogues and the quiet Campo del Ghetto Nuovo.', 'The synagogues are shown on Jewish Museum tours; closed on Saturdays.'],
      es: ['Gueto judío', 'El primer gueto del mundo (1516) en Cannaregio: casas altas, cinco sinagogas históricas y el tranquilo Campo del Ghetto Nuovo.', 'Las sinagogas se ven con las visitas del Museo Judío; cierra los sábados.'],
      de: ['Jüdisches Ghetto', 'Das erste Ghetto der Welt (1516) in Cannaregio: hohe Häuser, fünf historische Synagogen und der stille Campo del Ghetto Nuovo.', 'Die Synagogen zeigt das Jüdische Museum bei Führungen; samstags geschlossen.'],
      fr: ['Ghetto juif', 'Le premier ghetto du monde (1516) à Cannaregio : hautes maisons, cinq synagogues historiques et le paisible Campo del Ghetto Nuovo.', 'Les synagogues se visitent avec le Musée juif ; fermé le samedi.'],
      it: ['Ghetto ebraico', 'Il primo ghetto del mondo (1516) a Cannaregio: case alte, cinque sinagoghe storiche e il tranquillo Campo del Ghetto Nuovo.', 'Le sinagoghe si visitano con il Museo Ebraico; chiuso il sabato.'],
    }, { spot: 'hidden' }),

    P('glam', 'food', 45.4412, 12.3284, CITY, 4.7, 900, ['food', 'luxury'], {
      ru: ['Glam Enrico Bartolini', 'Ресторан в палаццо Венарт на Гранд-канале: современная кухня из продуктов лагуны и Венето; две звезды MICHELIN (гид Италии 2026).', 'Летом ужинайте в саду палаццо; бронируйте заранее.'],
      en: ['Glam Enrico Bartolini', 'A restaurant in Palazzo Venart on the Grand Canal: modern cooking from lagoon and Veneto produce; two MICHELIN stars (Italy guide 2026).', 'In summer dine in the palazzo garden; book ahead.'],
      es: ['Glam Enrico Bartolini', 'Un restaurante en el Palazzo Venart sobre el Gran Canal: cocina moderna con producto de la laguna y del Véneto; dos estrellas MICHELIN (guía Italia 2026).', 'En verano cena en el jardín; reserva.'],
      de: ['Glam Enrico Bartolini', 'Ein Restaurant im Palazzo Venart am Canal Grande: moderne Küche mit Produkten aus Lagune und Venetien; zwei MICHELIN-Sterne (Guide Italien 2026).', 'Im Sommer im Garten des Palazzo essen; vorher buchen.'],
      fr: ['Glam Enrico Bartolini', 'Un restaurant du Palazzo Venart sur le Grand Canal : cuisine moderne des produits de la lagune et de Vénétie ; deux étoiles MICHELIN (guide Italie 2026).', 'L’été, dînez au jardin ; réservez.'],
      it: ['Glam Enrico Bartolini', 'Un ristorante a Palazzo Venart sul Canal Grande: cucina moderna con prodotti della laguna e del Veneto; due stelle MICHELIN (guida Italia 2026).', 'D’estate cena in giardino; prenota.'],
    }, { price: level(3), michelin: { award: 'star2', year: 2026 }, address: 'Santa Croce 1961', menu: [
      ['Tasting menu', undefined, 'дегустационный сет из продуктов лагуны|tasting menu of lagoon produce|menú degustación de la laguna|Degustationsmenü aus der Lagune|menu dégustation de la lagune|menù degustazione della laguna'],
      ['Wine pairing', undefined, 'винное сопровождение|wine pairing|maridaje de vinos|Weinbegleitung|accord mets-vins|abbinamento vini'],
    ] }),
    P('harrys-bar', 'food', 45.4329, 12.3369, SANMARCO, 4.3, 7100, ['food', 'history', 'nightlife'], {
      ru: ['Harry’s Bar', 'Легендарный бар 1931 года, где придумали коктейль «Беллини» и карпаччо; здесь бывали Хемингуэй и Чаплин.', 'Дорого, но «Беллини» у стойки — ритуал для многих гостей города.'],
      en: ['Harry’s Bar', 'The legendary 1931 bar where the Bellini cocktail and carpaccio were invented; Hemingway and Chaplin drank here.', 'Pricey, but a Bellini at the bar is a ritual for many visitors.'],
      es: ['Harry’s Bar', 'El legendario bar de 1931 donde nacieron el Bellini y el carpaccio; aquí bebieron Hemingway y Chaplin.', 'Caro, pero un Bellini en la barra es un ritual para muchos.'],
      de: ['Harry’s Bar', 'Die legendäre Bar von 1931, in der Bellini und Carpaccio erfunden wurden; Hemingway und Chaplin tranken hier.', 'Teuer, aber ein Bellini an der Bar ist für viele ein Ritual.'],
      fr: ['Harry’s Bar', 'Le bar légendaire de 1931 où furent inventés le Bellini et le carpaccio ; Hemingway et Chaplin y buvaient.', 'Cher, mais un Bellini au comptoir est un rituel pour beaucoup.'],
      it: ['Harry’s Bar', 'Il leggendario bar del 1931 dove sono nati il Bellini e il carpaccio; qui bevevano Hemingway e Chaplin.', 'Caro, ma un Bellini al banco è un rito per molti.'],
    }, { price: level(3), address: 'Calle Vallaresso 1323', menu: [
      ['Bellini', undefined, 'коктейль из персикового пюре и просекко|white peach purée and prosecco cocktail|cóctel de puré de melocotón y prosecco|Cocktail aus Pfirsichpüree und Prosecco|cocktail purée de pêche blanche et prosecco|cocktail di purea di pesca e prosecco'],
      ['Carpaccio', undefined, 'тонко нарезанная сырая говядина с соусом|thin-sliced raw beef with sauce|carne cruda en finas lonchas con salsa|hauchdünnes rohes Rind mit Sauce|bœuf cru finement tranché et sauce|manzo crudo affettato sottile con salsa'],
    ] }),
    P('all-arco', 'food', 45.4385, 12.3345, RIALTO, 4.7, 3200, ['food', 'streetfood'], {
      ru: ['All’Arco', 'Крошечный бакаро у рынка Риальто, где отец и сын делают чикетти — венецианские бутерброды-закуски — из утреннего улова.', 'Стоя у стойки с бокалом «омбры» (вина); работает до обеда, приходите пораньше.'],
      en: ['All’Arco', 'A tiny bacaro by the Rialto market where father and son make cicchetti — Venetian small bites — from the morning catch.', 'Stand at the counter with an “ombra” of wine; it closes mid-afternoon, so come early.'],
      es: ['All’Arco', 'Un diminuto bacaro junto al mercado de Rialto donde padre e hijo preparan cicchetti, bocados venecianos, con la pesca de la mañana.', 'De pie en la barra con una “ombra” de vino; cierra a media tarde.'],
      de: ['All’Arco', 'Ein winziger Bacaro am Rialtomarkt, in dem Vater und Sohn Cicchetti – venezianische Häppchen – aus dem Morgenfang machen.', 'Am Tresen mit einer „Ombra“ Wein stehen; schließt am Nachmittag, früh kommen.'],
      fr: ['All’Arco', 'Un minuscule bacaro près du marché du Rialto où père et fils préparent des cicchetti, bouchées vénitiennes, avec la pêche du matin.', 'Debout au comptoir avec une « ombra » de vin ; ferme l’après-midi, venez tôt.'],
      it: ['All’Arco', 'Un minuscolo bacaro vicino al mercato di Rialto dove padre e figlio preparano cicchetti con il pescato del mattino.', 'In piedi al banco con un’ombra di vino; chiude nel pomeriggio, vieni presto.'],
    }, { price: level(1), address: 'San Polo 436', menu: [
      ['Cicchetti', undefined, 'венецианские закуски на хлебе|Venetian bites on bread|bocados venecianos sobre pan|venezianische Häppchen auf Brot|bouchées vénitiennes sur pain|cicchetti su pane'],
      ['Ombra', undefined, 'бокал домашнего вина|glass of house wine|copa de vino de la casa|Glas Hauswein|verre de vin maison|bicchiere di vino della casa'],
    ] }),
    P('antiche-carampane', 'food', 45.4383, 12.333, RIALTO, 4.5, 2600, ['food'], {
      ru: ['Antiche Carampane', 'Рыбная траттория, спрятанная в переулках Сан-Поло: жареная рыба фритто мисто, паста с морепродуктами и сарде ин саор.', 'Бронируйте; без карты найти сложно — табличка гласит «без пиццы и лазаньи».'],
      en: ['Antiche Carampane', 'A seafood trattoria hidden in the lanes of San Polo: fritto misto, seafood pasta and sarde in saor.', 'Book ahead; it’s hard to find without a map — the sign warns “no pizza, no lasagne”.'],
      es: ['Antiche Carampane', 'Una trattoria de pescado escondida en las callejuelas de San Polo: fritto misto, pasta con marisco y sarde in saor.', 'Reserva; difícil de encontrar sin mapa: el cartel avisa “sin pizza ni lasaña”.'],
      de: ['Antiche Carampane', 'Eine Fischtrattoria versteckt in den Gassen von San Polo: Fritto misto, Pasta mit Meeresfrüchten und Sarde in Saor.', 'Reservieren; ohne Karte schwer zu finden – das Schild warnt „keine Pizza, keine Lasagne“.'],
      fr: ['Antiche Carampane', 'Une trattoria de poisson cachée dans les ruelles de San Polo : fritto misto, pâtes aux fruits de mer et sarde in saor.', 'Réservez ; difficile à trouver sans plan, l’enseigne prévient « ni pizza ni lasagnes ».'],
      it: ['Antiche Carampane', 'Una trattoria di pesce nascosta tra le calli di San Polo: fritto misto, pasta ai frutti di mare e sarde in saor.', 'Prenota; difficile da trovare senza mappa, il cartello avverte “no pizza, no lasagne”.'],
    }, { price: level(2), address: 'San Polo 1911', menu: [
      ['Sarde in saor', undefined, 'сардины в сладко-кислом луке|sardines in sweet-and-sour onions|sardinas en cebolla agridulce|Sardinen in süßsauren Zwiebeln|sardines aux oignons aigres-doux|sarde in saor'],
      ['Fritto misto', undefined, 'жареное ассорти из рыбы и морепродуктов|mixed fried seafood|fritura mixta de pescado|frittierte Meeresfrüchte|friture de poissons|fritto misto di mare'],
    ] }),
    P('osteria-alle-testiere', 'food', 45.4378, 12.3412, CITY, 4.6, 2300, ['food'], {
      ru: ['Osteria alle Testiere', 'Крошечная остерия на 22 места в Кастелло: рыба с рынка Риальто, меню меняется каждый день.', 'Два вечерних сеанса и обед — бронируйте за несколько дней.'],
      en: ['Osteria alle Testiere', 'A tiny 22-seat osteria in Castello: fish from the Rialto market, with a menu that changes daily.', 'Two evening sittings plus lunch — book a few days ahead.'],
      es: ['Osteria alle Testiere', 'Una diminuta osteria de 22 plazas en Castello: pescado del mercado de Rialto y carta diaria.', 'Dos turnos de cena y almuerzo: reserva con días.'],
      de: ['Osteria alle Testiere', 'Eine winzige Osteria mit 22 Plätzen in Castello: Fisch vom Rialtomarkt, die Karte wechselt täglich.', 'Zwei Abendsitzungen plus Mittag – einige Tage vorher buchen.'],
      fr: ['Osteria alle Testiere', 'Une minuscule osteria de 22 couverts à Castello : poisson du marché du Rialto, carte qui change chaque jour.', 'Deux services le soir et le midi : réservez quelques jours avant.'],
      it: ['Osteria alle Testiere', 'Una piccola osteria da 22 coperti a Castello: pesce del mercato di Rialto, menù che cambia ogni giorno.', 'Due turni la sera più il pranzo: prenota qualche giorno prima.'],
    }, { price: level(3), address: 'Castello 5801', menu: [
      ['Pesce del giorno', undefined, 'рыба дня с рынка|fish of the day from the market|pescado del día|Fisch des Tages vom Markt|poisson du jour du marché|pesce del giorno dal mercato'],
      ['Gnocchetti con calamaretti', undefined, 'ньокетти с маленькими кальмарами|gnocchetti with baby squid|ñoquis con calamarcitos|Gnocchetti mit kleinen Kalmaren|gnocchetti aux petits calamars|gnocchetti con calamaretti'],
    ] }),
    P('trattoria-da-romano', 'food', 45.4853, 12.417, BURANO, 4.4, 4600, ['food', 'history'], {
      ru: ['Trattoria da Romano (Бурано)', 'Траттория с 1920 года на Бурано, увешанная картинами художников-гостей; знаменита ризотто «ди гò» на бульоне из лагунного бычка.', 'Ризотто готовят минимум на двоих; бронируйте обед.'],
      en: ['Trattoria da Romano (Burano)', 'A trattoria since 1920 on Burano, hung with paintings by artist guests; famous for risotto di gò made with lagoon goby broth.', 'The risotto is for at least two; book lunch.'],
      es: ['Trattoria da Romano (Burano)', 'Una trattoria desde 1920 en Burano llena de cuadros de artistas clientes; famosa por el risotto di gò con caldo de gobio de la laguna.', 'El risotto es para dos como mínimo; reserva el almuerzo.'],
      de: ['Trattoria da Romano (Burano)', 'Eine Trattoria seit 1920 auf Burano voller Bilder von Künstlergästen; berühmt für das Risotto di gò mit Lagunengrundel-Brühe.', 'Das Risotto gibt es ab zwei Personen; mittags reservieren.'],
      fr: ['Trattoria da Romano (Burano)', 'Une trattoria depuis 1920 à Burano, couverte de tableaux d’artistes clients ; célèbre pour son risotto di gò au bouillon de gobie de la lagune.', 'Le risotto est pour deux minimum ; réservez le déjeuner.'],
      it: ['Trattoria da Romano (Burano)', 'Una trattoria dal 1920 a Burano piena di quadri di artisti ospiti; famosa per il risotto di gò al brodo di ghiozzo.', 'Il risotto è minimo per due; prenota il pranzo.'],
    }, { price: level(2), address: 'Via Baldassarre Galuppi 221, Burano', menu: [
      ['Risotto di gò', undefined, 'ризотто на бульоне из лагунного бычка|risotto in lagoon goby broth|risotto con caldo de gobio|Risotto mit Grundelbrühe|risotto au bouillon de gobie|risotto al brodo di ghiozzo'],
      ['Moeche fritte', undefined, 'жареные мягкие крабы (сезон весна и осень)|fried soft-shell crabs (spring and autumn)|cangrejos de muda fritos (primavera y otoño)|frittierte Butterkrebse (Frühling und Herbst)|crabes mous frits (printemps et automne)|moeche fritte (primavera e autunno)'],
    ] }),
    P('gelateria-nico', 'food', 45.4297, 12.3264, CITY, 4.5, 4800, ['food'], {
      ru: ['Gelateria Nico', 'Кафе-мороженое 1937 года на набережной Заттере, где придумали «джандуйотто» — брикет шоколадно-орехового мороженого во взбитых сливках.', 'Ешьте джандуйотто на понтоне над каналом Джудекка.'],
      en: ['Gelateria Nico', 'A 1937 ice-cream café on the Zattere where the gianduiotto was born — a slab of chocolate-hazelnut ice cream drowned in whipped cream.', 'Eat it on the pontoon over the Giudecca canal.'],
      es: ['Gelateria Nico', 'Una heladería de 1937 en las Zattere donde nació el gianduiotto, bloque de helado de chocolate y avellana con nata.', 'Cómelo en el pontón sobre el canal de la Giudecca.'],
      de: ['Gelateria Nico', 'Eine Eisdiele von 1937 an den Zattere, Geburtsort des Gianduiotto – ein Block Nougateis in Schlagsahne.', 'Auf dem Ponton über dem Giudecca-Kanal essen.'],
      fr: ['Gelateria Nico', 'Un glacier de 1937 sur les Zattere, berceau du gianduiotto, pavé de glace chocolat-noisette noyé de chantilly.', 'Dégustez-le sur le ponton face au canal de la Giudecca.'],
      it: ['Gelateria Nico', 'Una gelateria del 1937 alle Zattere dove è nato il gianduiotto, mattonella di gelato al gianduia affogata nella panna.', 'Gustalo sul pontile sul canale della Giudecca.'],
    }, { price: level(1), address: 'Fondamenta Zattere 922', menu: [
      ['Gianduiotto', undefined, 'шоколадно-ореховое мороженое со взбитыми сливками|chocolate-hazelnut ice cream with whipped cream|helado de gianduia con nata|Nougateis mit Schlagsahne|glace gianduja et chantilly|gelato al gianduia con panna'],
      ['Gelato', undefined, 'мороженое на выбор|ice cream of your choice|helado a elegir|Eis nach Wahl|glace au choix|gelato a scelta'],
    ] }),
    P('al-merca', 'food', 45.4387, 12.3349, RIALTO, 4.6, 3600, ['food', 'nightlife'], {
      ru: ['Al Mercà', 'Барное окошко размером со шкаф на площади у рынка Риальто: спритц, бокал вина и мини-панини; венецианцы пьют стоя прямо на площади.', 'Лучшее время — ранний вечер; попробуйте спритц с апероль или селект.'],
      en: ['Al Mercà', 'A cupboard-sized bar hatch on a square by the Rialto market: spritz, a glass of wine and mini panini; Venetians drink standing in the square.', 'Early evening is best; try a spritz with Aperol or Select.'],
      es: ['Al Mercà', 'Una ventanilla de bar del tamaño de un armario junto al mercado de Rialto: spritz, copa de vino y minipanini; se bebe de pie en la plaza.', 'Mejor a primera hora de la tarde; prueba un spritz con Aperol o Select.'],
      de: ['Al Mercà', 'Eine schrankgroße Barluke an einem Platz beim Rialtomarkt: Spritz, ein Glas Wein und Mini-Panini; Venezianer trinken im Stehen auf dem Platz.', 'Am frühen Abend am besten; Spritz mit Aperol oder Select probieren.'],
      fr: ['Al Mercà', 'Un comptoir grand comme un placard sur une place près du marché du Rialto : spritz, verre de vin et mini-panini ; on boit debout sur la place.', 'Idéal en début de soirée ; spritz à l’Aperol ou au Select.'],
      it: ['Al Mercà', 'Un bancone grande come un armadio in un campo vicino al mercato di Rialto: spritz, un’ombra e panini mignon; si beve in piedi nel campo.', 'Meglio al tramonto; prova uno spritz Aperol o Select.'],
    }, { price: level(1), address: 'Campo Cesare Battisti, San Polo 213', menu: [
      ['Spritz', undefined, 'апероль или селект, просекко и содовая|Aperol or Select, prosecco and soda|Aperol o Select, prosecco y soda|Aperol oder Select, Prosecco und Soda|Aperol ou Select, prosecco et eau gazeuse|Aperol o Select, prosecco e soda'],
      ['Panino mignon', undefined, 'мини-бутерброд|mini sandwich|minibocadillo|Mini-Brötchen|mini-sandwich|panino mignon'],
    ] }),
    P('pasticceria-dal-mas', 'food', 45.443, 12.322, CITY, 4.5, 3900, ['food'], {
      ru: ['Pasticceria Dal Mas', 'Кондитерская с 1906 года у вокзала в Каннареджо: корнетто, венецианское печенье «баиколи» и шоколад.', 'Удобный завтрак по пути от вокзала: корнетто и капучино у стойки.'],
      en: ['Pasticceria Dal Mas', 'A pastry shop since 1906 near the station in Cannaregio: cornetti, Venetian baicoli biscuits and chocolate.', 'An easy breakfast on the way from the station: cornetto and cappuccino at the bar.'],
      es: ['Pasticceria Dal Mas', 'Una pastelería desde 1906 junto a la estación en Cannaregio: cornetti, galletas venecianas baicoli y chocolate.', 'Desayuno fácil al salir de la estación: cornetto y capuchino en la barra.'],
      de: ['Pasticceria Dal Mas', 'Eine Konditorei seit 1906 nahe dem Bahnhof in Cannaregio: Cornetti, venezianische Baicoli-Kekse und Schokolade.', 'Bequemes Frühstück auf dem Weg vom Bahnhof: Cornetto und Cappuccino an der Bar.'],
      fr: ['Pasticceria Dal Mas', 'Une pâtisserie depuis 1906 près de la gare à Cannaregio : cornetti, biscuits vénitiens baicoli et chocolat.', 'Petit-déjeuner facile en sortant de la gare : cornetto et cappuccino au comptoir.'],
      it: ['Pasticceria Dal Mas', 'Una pasticceria dal 1906 vicino alla stazione a Cannaregio: cornetti, baicoli e cioccolato.', 'Colazione comoda uscendo dalla stazione: cornetto e cappuccino al banco.'],
    }, { price: level(1), address: 'Rio Terà Lista di Spagna 150', menu: [
      ['Cornetto', undefined, 'итальянский круассан|Italian croissant|cruasán italiano|italienisches Croissant|croissant italien|cornetto'],
      ['Baicoli', undefined, 'венецианское сухое печенье|Venetian dry biscuits|galletas secas venecianas|venezianische Zwiebackkekse|biscuits secs vénitiens|baicoli veneziani'],
    ] }),
    P('cantine-del-vino-gia-schiavi', 'food', 45.43, 12.326, CITY, 4.6, 5100, ['food', 'nightlife'], {
      ru: ['Cantine del Vino già Schiavi', 'Семейный винный бар напротив старой верфи гондол Скуэро-ди-Сан-Тровазо: десятки чикетти на витрине и вино за пару евро.', 'Возьмите чикетти и бокал и встаньте у канала — напротив чинят гондолы.'],
      en: ['Cantine del Vino già Schiavi', 'A family wine bar opposite the old San Trovaso gondola yard: dozens of cicchetti on the counter and wine for a couple of euros.', 'Take cicchetti and a glass to the canal edge — gondolas are repaired opposite.'],
      es: ['Cantine del Vino già Schiavi', 'Un bar de vinos familiar frente al viejo astillero de góndolas de San Trovaso: decenas de cicchetti y vino por un par de euros.', 'Llévate cicchetti y una copa al canal: enfrente reparan góndolas.'],
      de: ['Cantine del Vino già Schiavi', 'Eine Familien-Weinbar gegenüber der alten Gondelwerft San Trovaso: Dutzende Cicchetti und Wein für ein paar Euro.', 'Cicchetti und ein Glas an den Kanal mitnehmen – gegenüber werden Gondeln repariert.'],
      fr: ['Cantine del Vino già Schiavi', 'Un bar à vin familial face au vieux chantier de gondoles de San Trovaso : des dizaines de cicchetti et du vin pour quelques euros.', 'Emportez cicchetti et verre au bord du canal : on répare des gondoles en face.'],
      it: ['Cantine del Vino già Schiavi', 'Un bar à vin di famiglia di fronte allo squero di San Trovaso: decine di cicchetti al banco e vino a pochi euro.', 'Porta cicchetti e bicchiere sul canale: di fronte riparano le gondole.'],
    }, { price: level(1), address: 'Dorsoduro 992', menu: [
      ['Cicchetti', undefined, 'бутерброды-закуски с баккалой, тунцом и др.|bites with baccalà, tuna and more|bocados de bacalao, atún y más|Häppchen mit Baccalà, Thunfisch u. a.|bouchées à la morue, au thon et plus|cicchetti con baccalà, tonno e altro'],
      ['Ombra di vino', undefined, 'бокал вина|glass of wine|copa de vino|Glas Wein|verre de vin|ombra di vino'],
    ] }),
  ],
  routes: [
    D(['doges-palace', '=venice-st-marks-basilica', 'libreria-acqua-alta', 'osteria-alle-testiere', '=venice-scala-contarini-del-bovolo', '=venice-rialto-bridge', 'al-merca', 'harrys-bar'],
      'Сан-Марко, Дворец дожей и Риальто|San Marco, the Doge’s Palace and Rialto|San Marcos, el Palacio Ducal y Rialto|San Marco, Dogenpalast und Rialto|Saint-Marc, palais des Doges et Rialto|San Marco, Palazzo Ducale e Rialto'),
    D(['=venice-rialto-market', 'frari', 'all-arco', 'gallerie-accademia', '=venice-ponte-dell-accademia', 'peggy-guggenheim', 'gelateria-nico', 'antiche-carampane'],
      'Сан-Поло и Дорсодуро: Тициан и Гуггенхайм|San Polo and Dorsoduro: Titian and Guggenheim|San Polo y Dorsoduro: Tiziano y Guggenheim|San Polo und Dorsoduro: Tizian und Guggenheim|San Polo et Dorsoduro : Titien et Guggenheim|San Polo e Dorsoduro: Tiziano e Guggenheim'),
    D(['pasticceria-dal-mas', 'jewish-ghetto', 'murano', '=venice-burano', 'trattoria-da-romano', 'torcello', 'glam'],
      'Острова лагуны: Мурано, Бурано, Торчелло|Lagoon islands: Murano, Burano, Torcello|Islas de la laguna: Murano, Burano, Torcello|Laguneninseln: Murano, Burano, Torcello|Îles de la lagune : Murano, Burano, Torcello|Isole della laguna: Murano, Burano, Torcello'),
  ],
};

export default pack;
