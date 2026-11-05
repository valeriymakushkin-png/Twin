import type { CityPack } from '../types';
import { free, level, makeDay, makePlace } from './_kit.ts';

const P = makePlace('edinburgh');
const D = makeDay('edinburgh');
const CITY = 'pBkSqJgv3A8';
const CASTLE = 'Y96OcAtUWw0';
const STREET = 'JtlIYs1yzqc';
const OLD = '1lHwRw6DFXw';
const HILL = 'PV4OFJN4Zy4';
const VILLAGE = 'Zp--Hi08-a0';
const CALTON = 'ktDODr-3tvY';
const LANE = 'S8nHMd5W49U';

const pack: CityPack = {
  country: 'GB',
  city: 'edinburgh',
  places: [
    P('royal-mile', 'attraction', 55.9497, -3.1907, OLD, 4.6, 52000, ['oldtown', 'history', 'shopping'], {
      ru: ['Королевская миля', 'Главная улица Старого города от Эдинбургского замка до дворца Холируд: узкие переулки-«клоузы», пабы, волынщики и магазины тартана.', 'Сворачивайте в клоузы — за аркой часто прячутся дворики с видом на Новый город.'],
      en: ['Royal Mile', 'The Old Town’s spine from Edinburgh Castle to Holyroodhouse: narrow “closes”, pubs, pipers and tartan shops.', 'Duck into the closes — courtyards with New Town views often hide behind the arches.'],
      es: ['Royal Mile', 'La columna del casco antiguo del Castillo a Holyroodhouse: estrechos “closes”, pubs, gaiteros y tiendas de tartán.', 'Métete en los closes: tras los arcos suele haber patios con vistas a la Ciudad Nueva.'],
      de: ['Royal Mile', 'Das Rückgrat der Altstadt vom Edinburgh Castle bis Holyroodhouse: enge „Closes“, Pubs, Dudelsackspieler und Tartanläden.', 'In die Closes abbiegen – hinter den Bögen verstecken sich oft Höfe mit Blick auf die Neustadt.'],
      fr: ['Royal Mile', 'L’épine dorsale de la vieille ville, du château à Holyroodhouse : étroites « closes », pubs, joueurs de cornemuse et boutiques de tartan.', 'Faufilez-vous dans les closes : derrière les arches se cachent des cours avec vue sur la New Town.'],
      it: ['Royal Mile', 'La spina dorsale della città vecchia dal castello a Holyroodhouse: stretti “close”, pub, suonatori di cornamusa e negozi di tartan.', 'Infilati nei close: dietro gli archi spesso ci sono cortili con vista sulla New Town.'],
    }, { spot: 'insta', price: free, hours: 'always' }),
    P('holyroodhouse', 'attraction', 55.9527, -3.1722, CASTLE, 4.6, 19000, ['castles', 'history'], {
      ru: ['Дворец Холируд', 'Официальная резиденция британского монарха в Шотландии в конце Королевской мили: покои Марии Стюарт и руины аббатства XII века.', 'Дворец закрывается во время визитов королевской семьи — проверьте даты.'],
      en: ['Palace of Holyroodhouse', 'The British monarch’s official residence in Scotland at the foot of the Royal Mile: Mary Queen of Scots’ chambers and a ruined 12th-century abbey.', 'It closes during royal visits — check dates.'],
      es: ['Palacio de Holyroodhouse', 'La residencia oficial del monarca británico en Escocia al final de la Royal Mile: los aposentos de María Estuardo y una abadía en ruinas del siglo XII.', 'Cierra durante las visitas reales: consulta fechas.'],
      de: ['Palace of Holyroodhouse', 'Die offizielle Residenz des britischen Monarchen in Schottland am Ende der Royal Mile: Gemächer Maria Stuarts und eine Abteiruine aus dem 12. Jh.', 'Bei königlichen Besuchen geschlossen – Termine prüfen.'],
      fr: ['Palais de Holyroodhouse', 'La résidence officielle du souverain britannique en Écosse au bas du Royal Mile : appartements de Marie Stuart et abbaye en ruine du XIIe.', 'Fermé lors des visites royales ; vérifiez les dates.'],
      it: ['Palazzo di Holyroodhouse', 'La residenza ufficiale del sovrano britannico in Scozia in fondo al Royal Mile: gli appartamenti di Maria Stuarda e un’abbazia in rovina del XII secolo.', 'Chiude durante le visite reali: controlla le date.'],
    }, { hours: '09:30–17:00' }),
    P('national-museum-scotland', 'attraction', 55.9469, -3.19, OLD, 4.8, 41000, ['museums', 'history'], {
      ru: ['Национальный музей Шотландии', 'Бесплатный музей от древних пиктов до овечки Долли; викторианский Большой зал под стеклянной крышей и терраса на крыше с видом на замок.', 'Поднимитесь на крышу (лифт в новом крыле) — бесплатный вид на замок.'],
      en: ['National Museum of Scotland', 'A free museum from the ancient Picts to Dolly the Sheep; a Victorian Grand Gallery under a glass roof and a rooftop terrace with castle views.', 'Take the lift in the new wing to the roof — a free castle view.'],
      es: ['Museo Nacional de Escocia', 'Un museo gratuito de los antiguos pictos a la oveja Dolly; una gran galería victoriana bajo techo de cristal y terraza con vistas al castillo.', 'Sube en ascensor a la azotea del ala nueva: vista gratis al castillo.'],
      de: ['National Museum of Scotland', 'Ein kostenloses Museum von den Pikten bis zum Schaf Dolly; eine viktorianische Grand Gallery unter Glasdach und eine Dachterrasse mit Burgblick.', 'Mit dem Lift im Neubau aufs Dach – kostenloser Burgblick.'],
      fr: ['Musée national d’Écosse', 'Un musée gratuit des Pictes à la brebis Dolly ; grande galerie victorienne sous verrière et terrasse sur le toit avec vue sur le château.', 'Prenez l’ascenseur de l’aile neuve jusqu’au toit : vue gratuite sur le château.'],
      it: ['Museo nazionale di Scozia', 'Un museo gratuito dagli antichi Pitti alla pecora Dolly; una Grand Gallery vittoriana sotto un tetto di vetro e una terrazza con vista sul castello.', 'Prendi l’ascensore nell’ala nuova fino al tetto: vista gratuita sul castello.'],
    }, { price: free, hours: '10:00–17:00', address: 'Chambers Street' }),
    P('scottish-national-gallery', 'attraction', 55.9509, -3.1959, CITY, 4.8, 21000, ['art', 'museums'], {
      ru: ['Национальная галерея Шотландии', 'Бесплатная галерея у подножия Маунда: Рафаэль, Тициан, Рембрандт и «Пастор на коньках» Реберна.', 'Вход бесплатный; потом пройдите по садам Принсес-стрит.'],
      en: ['Scottish National Gallery', 'A free gallery at the foot of the Mound: Raphael, Titian, Rembrandt and Raeburn’s Skating Minister.', 'Free entry; walk on through Princes Street Gardens afterwards.'],
      es: ['Galería Nacional Escocesa', 'Una galería gratuita al pie del Mound: Rafael, Tiziano, Rembrandt y el Pastor patinando de Raeburn.', 'Entrada gratis; luego pasea por los jardines de Princes Street.'],
      de: ['Scottish National Gallery', 'Eine kostenlose Galerie am Fuß des Mound: Raffael, Tizian, Rembrandt und Raeburns Eislaufender Pfarrer.', 'Eintritt frei; danach durch die Princes Street Gardens.'],
      fr: ['Galerie nationale d’Écosse', 'Une galerie gratuite au pied du Mound : Raphaël, Titien, Rembrandt et le Pasteur patinant de Raeburn.', 'Entrée gratuite ; continuez ensuite dans les jardins de Princes Street.'],
      it: ['Galleria nazionale scozzese', 'Una galleria gratuita ai piedi del Mound: Raffaello, Tiziano, Rembrandt e il Reverendo che pattina di Raeburn.', 'Ingresso gratuito; poi passeggia nei giardini di Princes Street.'],
    }, { price: free, hours: '10:00–17:00', address: 'The Mound' }),
    P('greyfriars-kirkyard', 'attraction', 55.9468, -3.1926, OLD, 4.6, 18000, ['history', 'photo'], {
      ru: ['Кладбище Грейфрайерс и Бобби', 'Старинное кладбище XVI века с надгробиями, вдохновлявшими имена в «Гарри Поттере»; у входа — статуя верного пса Бобби.', 'Ищите могилу «Thomas Riddell»; потрите нос Бобби на удачу.'],
      en: ['Greyfriars Kirkyard and Bobby', 'A 16th-century graveyard whose headstones inspired Harry Potter names; at the gate stands the statue of loyal Greyfriars Bobby.', 'Look for “Thomas Riddell”; rub Bobby’s nose for luck.'],
      es: ['Cementerio de Greyfriars y Bobby', 'Un cementerio del siglo XVI cuyas lápidas inspiraron nombres de Harry Potter; en la entrada, la estatua del fiel perro Bobby.', 'Busca “Thomas Riddell”; frota la nariz de Bobby para la suerte.'],
      de: ['Greyfriars Kirkyard und Bobby', 'Ein Friedhof aus dem 16. Jh., dessen Grabsteine Harry-Potter-Namen inspirierten; am Tor die Statue des treuen Hundes Bobby.', '„Thomas Riddell“ suchen; Bobbys Nase für Glück reiben.'],
      fr: ['Cimetière de Greyfriars et Bobby', 'Un cimetière du XVIe dont les tombes ont inspiré des noms d’Harry Potter ; à l’entrée, la statue du fidèle chien Bobby.', 'Cherchez « Thomas Riddell » ; frottez le nez de Bobby pour la chance.'],
      it: ['Cimitero di Greyfriars e Bobby', 'Un cimitero del Cinquecento le cui lapidi hanno ispirato nomi di Harry Potter; all’ingresso la statua del fedele cane Bobby.', 'Cerca “Thomas Riddell”; strofina il naso di Bobby per fortuna.'],
    }, { spot: 'hidden', price: free }),
    P('royal-yacht-britannia', 'attraction', 55.9822, -3.1774, CITY, 4.8, 23000, ['history', 'museums'], {
      ru: ['Королевская яхта «Британия»', 'Яхта, на которой королева Елизавета II путешествовала 44 года, пришвартованная в Лите: королевские каюты, кухня и чайная на палубе.', 'Выпейте чай со сконами в Royal Deck Tea Room на верхней палубе.'],
      en: ['Royal Yacht Britannia', 'The yacht Queen Elizabeth II sailed for 44 years, moored in Leith: royal cabins, the galley and a tea room on deck.', 'Have tea and scones in the Royal Deck Tea Room upstairs.'],
      es: ['Yate Real Britannia', 'El yate en el que viajó Isabel II durante 44 años, amarrado en Leith: camarotes reales, cocina y salón de té en cubierta.', 'Toma té con scones en el Royal Deck Tea Room.'],
      de: ['Königliche Jacht Britannia', 'Die Jacht, mit der Königin Elisabeth II. 44 Jahre reiste, liegt in Leith: königliche Kabinen, Kombüse und Teesalon an Deck.', 'Tee und Scones im Royal Deck Tea Room.'],
      fr: ['Yacht royal Britannia', 'Le yacht d’Élisabeth II pendant 44 ans, amarré à Leith : cabines royales, cuisine et salon de thé sur le pont.', 'Prenez thé et scones au Royal Deck Tea Room.'],
      it: ['Yacht reale Britannia', 'Lo yacht su cui la regina Elisabetta II viaggiò per 44 anni, ormeggiato a Leith: cabine reali, cucina e sala da tè sul ponte.', 'Prendi tè e scones nella Royal Deck Tea Room.'],
    }, { hours: '09:30–17:00', address: 'Ocean Terminal, Leith' }),
    P('camera-obscura', 'attraction', 55.9489, -3.1956, CASTLE, 4.4, 26000, ['museums', 'views'], {
      ru: ['Камера-обскура и мир иллюзий', 'Викторианская камера-обскура XIX века, проецирующая живую панораму города, и пять этажей оптических иллюзий.', 'Сеансы камеры-обскуры — каждые 20 минут, в ясную погоду картинка лучше.'],
      en: ['Camera Obscura & World of Illusions', 'A 19th-century Victorian camera obscura projecting a live city panorama, plus five floors of optical illusions.', 'Camera shows run every 20 minutes; the image is best on clear days.'],
      es: ['Camera Obscura y Mundo de Ilusiones', 'Una cámara oscura victoriana del siglo XIX que proyecta la ciudad en directo, y cinco plantas de ilusiones ópticas.', 'Hay sesiones cada 20 minutos; con cielo despejado se ve mejor.'],
      de: ['Camera Obscura & World of Illusions', 'Eine viktorianische Camera obscura aus dem 19. Jh. mit Live-Stadtpanorama und fünf Etagen optischer Täuschungen.', 'Vorführungen alle 20 Minuten; bei klarem Wetter am besten.'],
      fr: ['Camera Obscura & World of Illusions', 'Une camera obscura victorienne du XIXe qui projette la ville en direct, et cinq étages d’illusions d’optique.', 'Séances toutes les 20 minutes ; meilleure image par temps clair.'],
      it: ['Camera Obscura & World of Illusions', 'Una camera oscura vittoriana dell’Ottocento che proietta la città dal vivo, e cinque piani di illusioni ottiche.', 'Spettacoli ogni 20 minuti; con il sereno l’immagine è migliore.'],
    }, { hours: '09:00–22:00', address: 'Castlehill' }),
    P('st-giles-cathedral', 'attraction', 55.9495, -3.1908, OLD, 4.7, 24000, ['architecture', 'history'], {
      ru: ['Собор Святого Джайлса', 'Главный храм Шотландии с короной-шпилем на Королевской миле; внутри — готическая капелла ордена Чертополоха с резными ангелами-волынщиками.', 'Найдите среди резьбы капеллы Чертополоха ангела, играющего на волынке.'],
      en: ['St Giles’ Cathedral', 'Scotland’s main church with its crown spire on the Royal Mile; inside, the Gothic Thistle Chapel with carved angels including a bagpiper.', 'Look for the angel playing the bagpipes in the Thistle Chapel carvings.'],
      es: ['Catedral de St Giles', 'La iglesia principal de Escocia con aguja en forma de corona en la Royal Mile; dentro, la capilla gótica del Cardo con ángeles tallados, uno gaitero.', 'Busca el ángel que toca la gaita en la capilla del Cardo.'],
      de: ['St Giles’ Cathedral', 'Schottlands Hauptkirche mit Kronenturm an der Royal Mile; innen die gotische Distelkapelle mit geschnitzten Engeln, darunter ein Dudelsackspieler.', 'Den Dudelsack spielenden Engel in der Distelkapelle suchen.'],
      fr: ['Cathédrale Saint-Gilles', 'La grande église d’Écosse et sa flèche en couronne sur le Royal Mile ; à l’intérieur, la chapelle gothique du Chardon aux anges sculptés, dont un joueur de cornemuse.', 'Cherchez l’ange joueur de cornemuse dans la chapelle du Chardon.'],
      it: ['Cattedrale di St Giles', 'La chiesa principale di Scozia con la guglia a corona sul Royal Mile; dentro la cappella gotica del Cardo con angeli scolpiti, tra cui uno con la cornamusa.', 'Cerca l’angelo che suona la cornamusa nella cappella del Cardo.'],
    }, { price: free, hours: '10:00–18:00' }),
    P('scott-monument', 'attraction', 55.9524, -3.1933, CALTON, 4.6, 16000, ['views', 'history'], {
      ru: ['Монумент Вальтеру Скотту', 'Готический шпиль высотой 61 м в садах Принсес-стрит в честь автора «Айвенго»; 287 ступеней ведут на верхнюю галерею.', 'Лестница узкая, особенно наверху; вид на замок и Старый город того стоит.'],
      en: ['Scott Monument', 'A 61 m Gothic spire in Princes Street Gardens honouring the author of Ivanhoe; 287 steps lead to the top gallery.', 'The stair is narrow, especially near the top; the castle view is worth it.'],
      es: ['Monumento a Scott', 'Una aguja gótica de 61 m en los jardines de Princes Street en honor al autor de Ivanhoe; 287 escalones hasta la galería superior.', 'La escalera es estrecha arriba; la vista del castillo lo merece.'],
      de: ['Scott Monument', 'Ein 61 m hoher gotischer Turm in den Princes Street Gardens zu Ehren des Ivanhoe-Autors; 287 Stufen führen zur obersten Galerie.', 'Die Treppe ist oben eng; der Burgblick lohnt sich.'],
      fr: ['Monument à Walter Scott', 'Une flèche gothique de 61 m dans les jardins de Princes Street en l’honneur de l’auteur d’Ivanhoé ; 287 marches jusqu’à la galerie supérieure.', 'L’escalier est étroit en haut ; la vue sur le château vaut l’effort.'],
      it: ['Scott Monument', 'Una guglia gotica di 61 m nei giardini di Princes Street in onore dell’autore di Ivanhoe; 287 gradini fino alla galleria in cima.', 'La scala è stretta in alto; la vista sul castello ne vale la pena.'],
    }, { spot: 'insta', hours: '10:00–18:00' }),
    P('botanic-garden', 'nature', 55.9653, -3.2091, LANE, 4.8, 17000, ['gardens', 'nature'], {
      ru: ['Королевский ботанический сад', 'Бесплатный сад XVII века: каменистый сад, китайская горка, роща гигантских секвой и вид на силуэт города.', 'Вход в сад бесплатный; викторианские оранжереи на реконструкции — уточните.'],
      en: ['Royal Botanic Garden Edinburgh', 'A free 17th-century garden: rock garden, Chinese hillside, giant redwoods and a view of the city skyline.', 'The garden is free; the Victorian glasshouses are being restored — check.'],
      es: ['Real Jardín Botánico de Edimburgo', 'Un jardín gratuito del siglo XVII: jardín de rocalla, ladera china, secuoyas gigantes y vista del perfil de la ciudad.', 'Entrada gratuita; los invernaderos victorianos están en restauración.'],
      de: ['Royal Botanic Garden Edinburgh', 'Ein kostenloser Garten aus dem 17. Jh.: Steingarten, chinesischer Hang, Riesenmammutbäume und Blick auf die Skyline.', 'Der Garten ist gratis; die viktorianischen Gewächshäuser werden restauriert.'],
      fr: ['Jardin botanique royal d’Édimbourg', 'Un jardin gratuit du XVIIe : rocaille, colline chinoise, séquoias géants et vue sur la silhouette de la ville.', 'Jardin gratuit ; les serres victoriennes sont en restauration.'],
      it: ['Giardino botanico reale di Edimburgo', 'Un giardino gratuito del Seicento: giardino roccioso, collina cinese, sequoie giganti e vista sullo skyline.', 'Il giardino è gratuito; le serre vittoriane sono in restauro.'],
    }, { price: free, hours: '10:00–18:00', address: 'Arboretum Place' }),

    P('the-kitchin', 'food', 55.9773, -3.172, CITY, 4.7, 2300, ['food', 'luxury'], {
      ru: ['The Kitchin', 'Ресторан Тома Китчина в бывшем складе виски в порту Лит: «от природы к тарелке» из шотландских продуктов; одна звезда MICHELIN (гид 2026).', 'Обеденный сет доступнее; бронируйте за несколько недель.'],
      en: ['The Kitchin', 'Tom Kitchin’s restaurant in a former whisky warehouse in Leith: “from nature to plate” with Scottish produce; one MICHELIN star (2026 guide).', 'The lunch menu is more affordable; book weeks ahead.'],
      es: ['The Kitchin', 'El restaurante de Tom Kitchin en un antiguo almacén de whisky de Leith: “de la naturaleza al plato” con producto escocés; una estrella MICHELIN (guía 2026).', 'El menú de mediodía es más asequible; reserva con semanas.'],
      de: ['The Kitchin', 'Tom Kitchins Restaurant in einem ehemaligen Whiskylager in Leith: „von der Natur auf den Teller“ mit schottischen Produkten; ein MICHELIN-Stern (Guide 2026).', 'Das Mittagsmenü ist günstiger; Wochen vorher buchen.'],
      fr: ['The Kitchin', 'Le restaurant de Tom Kitchin dans un ancien entrepôt de whisky à Leith : « de la nature à l’assiette » avec des produits écossais ; une étoile MICHELIN (guide 2026).', 'Le menu déjeuner est plus abordable ; réservez des semaines avant.'],
      it: ['The Kitchin', 'Il ristorante di Tom Kitchin in un ex magazzino di whisky a Leith: “dalla natura al piatto” con prodotti scozzesi; una stella MICHELIN (guida 2026).', 'Il menù pranzo è più accessibile; prenota settimane prima.'],
    }, { price: level(3), michelin: { award: 'star1', year: 2026 }, address: '78 Commercial Quay, Leith', menu: [
      ['Tasting menu', undefined, 'дегустационный сет шотландских продуктов|tasting menu of Scottish produce|menú degustación de producto escocés|Degustationsmenü schottischer Produkte|menu dégustation de produits écossais|menù degustazione di prodotti scozzesi'],
      ['Lunch menu', undefined, 'обеденный сет|lunch menu|menú de mediodía|Mittagsmenü|menu déjeuner|menù pranzo'],
    ] }),
    P('martin-wishart', 'food', 55.9762, -3.17, CITY, 4.7, 1700, ['food', 'luxury'], {
      ru: ['Restaurant Martin Wishart', 'Ресторан на набережной Шор в Лите с современной французской кухней из шотландских продуктов; одна звезда MICHELIN (гид 2026).', 'Есть вегетарианский дегустационный сет; бронируйте.'],
      en: ['Restaurant Martin Wishart', 'A restaurant on The Shore in Leith serving modern French cooking with Scottish produce; one MICHELIN star (2026 guide).', 'There’s a vegetarian tasting menu; book ahead.'],
      es: ['Restaurant Martin Wishart', 'Un restaurante en The Shore de Leith con cocina francesa moderna y producto escocés; una estrella MICHELIN (guía 2026).', 'Hay menú degustación vegetariano; reserva.'],
      de: ['Restaurant Martin Wishart', 'Ein Restaurant an The Shore in Leith mit moderner französischer Küche aus schottischen Produkten; ein MICHELIN-Stern (Guide 2026).', 'Es gibt ein vegetarisches Degustationsmenü; reservieren.'],
      fr: ['Restaurant Martin Wishart', 'Un restaurant sur The Shore à Leith : cuisine française moderne et produits écossais ; une étoile MICHELIN (guide 2026).', 'Menu dégustation végétarien disponible ; réservez.'],
      it: ['Restaurant Martin Wishart', 'Un ristorante su The Shore a Leith con cucina francese moderna e prodotti scozzesi; una stella MICHELIN (guida 2026).', 'C’è un menù degustazione vegetariano; prenota.'],
    }, { price: level(3), michelin: { award: 'star1', year: 2026 }, address: '54 The Shore, Leith', menu: [
      ['Tasting menu', undefined, 'дегустационный сет|tasting menu|menú degustación|Degustationsmenü|menu dégustation|menù degustazione'],
      ['Vegetarian tasting', undefined, 'вегетарианский сет|vegetarian tasting menu|menú degustación vegetariano|vegetarisches Degustationsmenü|menu dégustation végétarien|menù degustazione vegetariano'],
    ] }),
    P('scran-and-scallie', 'food', 55.958, -3.208, LANE, 4.5, 3900, ['food'], {
      ru: ['The Scran & Scallie', 'Гастропаб в Стокбридже от команды The Kitchin: шотландская домашняя кухня — пирог с мясом, фиш-энд-чипс, хаггис; Bib Gourmand (гид 2026).', 'По воскресеньям — жаркое; рядом рынок Стокбриджа.'],
      en: ['The Scran & Scallie', 'A Stockbridge gastropub from the Kitchin team: Scottish home cooking — steak pie, fish and chips, haggis; Bib Gourmand (2026 guide).', 'Sunday roast on Sundays; Stockbridge Market is nearby.'],
      es: ['The Scran & Scallie', 'Un gastropub en Stockbridge del equipo de The Kitchin: cocina casera escocesa —pastel de carne, fish and chips, haggis—; Bib Gourmand (guía 2026).', 'Los domingos, asado; cerca está el mercado de Stockbridge.'],
      de: ['The Scran & Scallie', 'Ein Gastropub in Stockbridge vom Kitchin-Team: schottische Hausmannskost – Steak Pie, Fish and Chips, Haggis; Bib Gourmand (Guide 2026).', 'Sonntags Braten; der Stockbridge Market ist nah.'],
      fr: ['The Scran & Scallie', 'Un gastropub de Stockbridge par l’équipe du Kitchin : cuisine écossaise familiale, steak pie, fish and chips, haggis ; Bib Gourmand (guide 2026).', 'Rôti le dimanche ; marché de Stockbridge tout près.'],
      it: ['The Scran & Scallie', 'Un gastropub a Stockbridge del team del Kitchin: cucina casalinga scozzese, steak pie, fish and chips, haggis; Bib Gourmand (guida 2026).', 'La domenica arrosto; vicino il mercato di Stockbridge.'],
    }, { price: level(2), michelin: { award: 'bib', year: 2026 }, address: '1 Comely Bank Road', menu: [
      ['Steak pie', undefined, 'пирог с говядиной|steak pie|pastel de ternera|Rindfleischpastete|tourte au bœuf|torta di manzo'],
      ['Haggis, neeps and tatties', undefined, 'хаггис с брюквой и картофелем|haggis with swede and potatoes|haggis con nabo y patatas|Haggis mit Steckrübe und Kartoffeln|haggis, rutabaga et pommes de terre|haggis con rapa e patate'],
    ] }),
    P('the-witchery', 'food', 55.949, -3.1945, CASTLE, 4.6, 7200, ['food', 'romance', 'luxury'], {
      ru: ['The Witchery by the Castle', 'Готический ресторан XVI века у ворот замка: дубовые панели, гобелены, свечи и шотландская кухня — говядина, оленина, морепродукты.', 'Атмосфернее всего вечером; бронируйте.'],
      en: ['The Witchery by the Castle', 'A 16th-century Gothic dining room by the castle gates: oak panelling, tapestries, candles and Scottish beef, venison and seafood.', 'Most atmospheric in the evening; book ahead.'],
      es: ['The Witchery by the Castle', 'Un comedor gótico del siglo XVI junto a las puertas del castillo: paneles de roble, tapices, velas y ternera, venado y marisco escoceses.', 'Más atmosférico de noche; reserva.'],
      de: ['The Witchery by the Castle', 'Ein gotischer Speisesaal aus dem 16. Jh. am Burgtor: Eichentäfelung, Gobelins, Kerzen und schottisches Rind, Hirsch und Meeresfrüchte.', 'Abends am stimmungsvollsten; reservieren.'],
      fr: ['The Witchery by the Castle', 'Une salle gothique du XVIe près des portes du château : boiseries de chêne, tapisseries, bougies et bœuf, gibier et fruits de mer écossais.', 'Plus envoûtant le soir ; réservez.'],
      it: ['The Witchery by the Castle', 'Una sala gotica del Cinquecento presso le porte del castello: boiserie di quercia, arazzi, candele e manzo, cervo e frutti di mare scozzesi.', 'Più suggestivo la sera; prenota.'],
    }, { price: level(3), address: '352 Castlehill', menu: [
      ['Scottish beef', undefined, 'шотландская говядина|Scottish beef|ternera escocesa|schottisches Rind|bœuf écossais|manzo scozzese'],
      ['Venison', undefined, 'оленина|venison|venado|Hirsch|cerf|cervo'],
    ] }),
    P('ondine', 'food', 55.949, -3.192, OLD, 4.6, 4300, ['food'], {
      ru: ['Ondine', 'Рыбный ресторан с видом на Королевскую милю: устрицы, шотландские лангустины, мидии и фирменное блюдо — краб.', 'Есть доступный обеденный сет; садитесь у стойки с устрицами.'],
      en: ['Ondine', 'A seafood restaurant overlooking the Royal Mile: oysters, Scottish langoustines, mussels and crab.', 'There’s a good-value lunch menu; sit at the oyster bar.'],
      es: ['Ondine', 'Un restaurante de marisco con vistas a la Royal Mile: ostras, cigalas escocesas, mejillones y cangrejo.', 'Hay menú de mediodía asequible; siéntate en la barra de ostras.'],
      de: ['Ondine', 'Ein Seafood-Restaurant mit Blick auf die Royal Mile: Austern, schottische Kaisergranate, Muscheln und Krabbe.', 'Es gibt ein günstiges Mittagsmenü; an der Austernbar sitzen.'],
      fr: ['Ondine', 'Un restaurant de fruits de mer avec vue sur le Royal Mile : huîtres, langoustines écossaises, moules et crabe.', 'Menu déjeuner abordable ; asseyez-vous au bar à huîtres.'],
      it: ['Ondine', 'Un ristorante di pesce con vista sul Royal Mile: ostriche, scampi scozzesi, cozze e granchio.', 'C’è un menù pranzo conveniente; siediti al banco delle ostriche.'],
    }, { price: level(3), address: '2 George IV Bridge', menu: [
      ['Oysters', undefined, 'устрицы|oysters|ostras|Austern|huîtres|ostriche'],
      ['Scottish langoustines', undefined, 'шотландские лангустины|Scottish langoustines|cigalas escocesas|schottische Kaisergranate|langoustines écossaises|scampi scozzesi'],
    ] }),
    P('mums', 'food', 55.946, -3.1917, OLD, 4.5, 6100, ['food'], {
      ru: ['Mums Great Comfort Food', 'Кафе британской домашней еды у Грейфрайерс: сосиски с пюре, пироги и завтраки — порции «как у мамы».', 'Возьмите «bangers and mash» с подливкой; цены приятные.'],
      en: ['Mums Great Comfort Food', 'A café of British home cooking near Greyfriars: sausages and mash, pies and breakfasts — portions like mum makes.', 'Get bangers and mash with gravy; prices are friendly.'],
      es: ['Mums Great Comfort Food', 'Un café de comida casera británica junto a Greyfriars: salchichas con puré, pasteles y desayunos, raciones de mamá.', 'Pide bangers and mash con salsa; precios amables.'],
      de: ['Mums Great Comfort Food', 'Ein Café mit britischer Hausmannskost nahe Greyfriars: Würstchen mit Püree, Pies und Frühstück – Portionen wie bei Mama.', 'Bangers and Mash mit Bratensoße nehmen; faire Preise.'],
      fr: ['Mums Great Comfort Food', 'Un café de cuisine familiale britannique près de Greyfriars : saucisses-purée, tourtes et petits-déjeuners, portions de maman.', 'Prenez bangers and mash et sauce ; prix doux.'],
      it: ['Mums Great Comfort Food', 'Un caffè di cucina casalinga britannica vicino a Greyfriars: salsicce e purè, torte salate e colazioni, porzioni da mamma.', 'Prendi bangers and mash con sugo; prezzi onesti.'],
    }, { price: level(1), address: '4A Forrest Road', menu: [
      ['Bangers and mash', undefined, 'сосиски с пюре и подливкой|sausages with mash and gravy|salchichas con puré y salsa|Würstchen mit Püree und Soße|saucisses, purée et sauce|salsicce con purè e sugo'],
      ['Pie of the day', undefined, 'пирог дня|pie of the day|pastel del día|Pie des Tages|tourte du jour|torta del giorno'],
    ] }),
    P('devils-advocate', 'food', 55.9505, -3.1903, OLD, 4.6, 6300, ['food', 'nightlife'], {
      ru: ['The Devil’s Advocate', 'Бар в бывшей викторианской насосной станции в переулке Адвокатс-клоуз: сотни виски, коктейли и шотландская кухня.', 'Попросите бармена подобрать виски из разных регионов Шотландии.'],
      en: ['The Devil’s Advocate', 'A bar in a former Victorian pump house down Advocate’s Close: hundreds of whiskies, cocktails and Scottish food.', 'Ask the bartender for a flight of whiskies from different Scottish regions.'],
      es: ['The Devil’s Advocate', 'Un bar en una antigua estación de bombeo victoriana en Advocate’s Close: cientos de whiskies, cócteles y cocina escocesa.', 'Pide al barman una cata de whiskies de distintas regiones.'],
      de: ['The Devil’s Advocate', 'Eine Bar in einem ehemaligen viktorianischen Pumpenhaus in Advocate’s Close: Hunderte Whiskys, Cocktails und schottische Küche.', 'Den Barkeeper um eine Whisky-Probe aus verschiedenen Regionen bitten.'],
      fr: ['The Devil’s Advocate', 'Un bar dans une ancienne station de pompage victorienne d’Advocate’s Close : des centaines de whiskies, cocktails et cuisine écossaise.', 'Demandez une dégustation de whiskies de différentes régions.'],
      it: ['The Devil’s Advocate', 'Un bar in un’ex stazione di pompaggio vittoriana in Advocate’s Close: centinaia di whisky, cocktail e cucina scozzese.', 'Chiedi al barista una degustazione di whisky di diverse regioni.'],
    }, { spot: 'hidden', price: level(2), address: '9 Advocate’s Close', menu: [
      ['Whisky flight', undefined, 'дегустация шотландского виски|Scotch whisky flight|cata de whisky escocés|Scotch-Whisky-Probe|dégustation de scotch|degustazione di whisky scozzese'],
      ['Cocktails', undefined, 'коктейли|cocktails|cócteles|Cocktails|cocktails|cocktail'],
    ] }),
    P('lovecrumbs', 'food', 55.946, -3.199, CITY, 4.6, 2900, ['food'], {
      ru: ['Lovecrumbs', 'Кафе-кондитерская в Вест-Порт, где торты стоят прямо в старинном буфете: каждый день новые пироги и выпечка.', 'Хорошо для завтрака; торты разбирают к вечеру.'],
      en: ['Lovecrumbs', 'A cake café on West Port where cakes sit in an old dresser: new pies and bakes every day.', 'Good for breakfast; cakes sell out by evening.'],
      es: ['Lovecrumbs', 'Un café de tartas en West Port donde los pasteles se exponen en un viejo aparador: tartas nuevas cada día.', 'Bien para desayunar; se agotan por la tarde.'],
      de: ['Lovecrumbs', 'Ein Kuchencafé an der West Port, die Kuchen stehen in einer alten Anrichte: jeden Tag neue Torten und Gebäck.', 'Gut zum Frühstück; abends ist oft alles weg.'],
      fr: ['Lovecrumbs', 'Un café à gâteaux de West Port où les gâteaux trônent dans un vieux buffet : tartes et pâtisseries nouvelles chaque jour.', 'Idéal au petit-déjeuner ; tout part avant le soir.'],
      it: ['Lovecrumbs', 'Un caffè di torte a West Port dove i dolci stanno in una vecchia credenza: torte nuove ogni giorno.', 'Ottimo a colazione; finiscono entro sera.'],
    }, { price: level(1), address: '155 West Port', menu: [
      ['Cake of the day', undefined, 'торт дня|cake of the day|tarta del día|Kuchen des Tages|gâteau du jour|torta del giorno'],
      ['Tea', undefined, 'чай|tea|té|Tee|thé|tè'],
    ] }),
    P('cannonball', 'food', 55.9489, -3.1965, CASTLE, 4.4, 3800, ['food'], {
      ru: ['Cannonball', 'Ресторан и виски-бар в историческом доме у эспланады замка (в стене торчит пушечное ядро): современная шотландская кухня с хаггисом.', 'Найдите ядро в стене дома — от него название; обед — после замка.'],
      en: ['Cannonball', 'A restaurant and whisky bar in a historic house by the castle esplanade (with a cannonball lodged in the wall): modern Scottish cooking with haggis.', 'Spot the cannonball in the wall that gives it its name; lunch after the castle.'],
      es: ['Cannonball', 'Restaurante y bar de whisky en una casa histórica junto a la explanada del castillo (con una bala de cañón en el muro): cocina escocesa moderna con haggis.', 'Busca la bala de cañón en la pared; come tras el castillo.'],
      de: ['Cannonball', 'Restaurant und Whiskybar in einem historischen Haus an der Burg-Esplanade (mit Kanonenkugel in der Mauer): moderne schottische Küche mit Haggis.', 'Die namensgebende Kanonenkugel in der Wand suchen; Mittagessen nach der Burg.'],
      fr: ['Cannonball', 'Restaurant et bar à whisky dans une maison historique près de l’esplanade du château (un boulet est logé dans le mur) : cuisine écossaise moderne avec haggis.', 'Repérez le boulet dans le mur ; déjeunez après le château.'],
      it: ['Cannonball', 'Ristorante e whisky bar in una casa storica vicino alla spianata del castello (con una palla di cannone nel muro): cucina scozzese moderna con haggis.', 'Cerca la palla di cannone nel muro; pranza dopo il castello.'],
    }, { price: level(2), address: '356 Castlehill', menu: [
      ['Haggis bon bons', undefined, 'жареные шарики хаггиса с соусом из виски|fried haggis balls with whisky sauce|bolitas de haggis con salsa de whisky|frittierte Haggis-Bällchen mit Whiskysauce|bouchées de haggis frites, sauce whisky|polpette di haggis con salsa al whisky'],
      ['Cullen skink', undefined, 'суп из копчёной пикши и картофеля|smoked haddock and potato soup|sopa de eglefino ahumado y patata|Suppe aus geräuchertem Schellfisch und Kartoffeln|soupe d’églefin fumé et pommes de terre|zuppa di eglefino affumicato e patate'],
    ] }),
    P('the-dome', 'food', 55.9537, -3.1955, CITY, 4.5, 8100, ['food', 'architecture'], {
      ru: ['The Dome', 'Ресторан и бар в бывшем банке XIX века на Джордж-стрит под огромным стеклянным куполом; зимой — знаменитые рождественские украшения.', 'Даже без ужина выпейте коктейль в зале под куполом.'],
      en: ['The Dome', 'A restaurant and bar in a 19th-century former bank on George Street beneath a huge glass dome; famous Christmas decorations in winter.', 'Even without dinner, have a cocktail under the dome.'],
      es: ['The Dome', 'Restaurante y bar en un antiguo banco del siglo XIX en George Street bajo una enorme cúpula de cristal; decoración navideña famosa en invierno.', 'Aunque no cenes, toma un cóctel bajo la cúpula.'],
      de: ['The Dome', 'Restaurant und Bar in einer ehemaligen Bank aus dem 19. Jh. in der George Street unter einer riesigen Glaskuppel; berühmte Weihnachtsdeko im Winter.', 'Auch ohne Dinner einen Cocktail unter der Kuppel trinken.'],
      fr: ['The Dome', 'Restaurant et bar dans une ancienne banque du XIXe sur George Street sous une immense coupole de verre ; célèbres décorations de Noël l’hiver.', 'Même sans dîner, prenez un cocktail sous la coupole.'],
      it: ['The Dome', 'Ristorante e bar in un’ex banca ottocentesca su George Street sotto un’enorme cupola di vetro; famose decorazioni natalizie d’inverno.', 'Anche senza cenare, prendi un cocktail sotto la cupola.'],
    }, { price: level(3), address: '14 George Street', menu: [
      ['Scottish salmon', undefined, 'шотландский лосось|Scottish salmon|salmón escocés|schottischer Lachs|saumon écossais|salmone scozzese'],
      ['Afternoon tea', undefined, 'послеобеденный чай со сконами|afternoon tea with scones|té de la tarde con scones|Afternoon Tea mit Scones|afternoon tea et scones|tè del pomeriggio con scones'],
    ] }),
  ],
  routes: [
    D(['=edinburgh-castle', 'camera-obscura', 'cannonball', 'st-giles-cathedral', 'royal-mile', 'holyroodhouse', '=edinburgh-arthurs-seat', '=edinburgh-sheep-heid-inn'],
      'Замок, Королевская миля и Трон Артура|The Castle, the Royal Mile and Arthur’s Seat|El Castillo, la Royal Mile y Arthur’s Seat|Burg, Royal Mile und Arthur’s Seat|Le château, le Royal Mile et Arthur’s Seat|Il Castello, il Royal Mile e Arthur’s Seat'),
    D(['lovecrumbs', 'greyfriars-kirkyard', 'national-museum-scotland', '=edinburgh-victoria-street', 'ondine', 'scottish-national-gallery', 'scott-monument', '=edinburgh-calton-hill', 'the-dome'],
      'Музеи, Виктория-стрит и закат на Калтон-Хилл|Museums, Victoria Street and sunset on Calton Hill|Museos, Victoria Street y atardecer en Calton Hill|Museen, Victoria Street und Sonnenuntergang am Calton Hill|Musées, Victoria Street et coucher de soleil sur Calton Hill|Musei, Victoria Street e tramonto su Calton Hill'),
    D(['=edinburgh-dean-village', '=edinburgh-circus-lane', 'botanic-garden', 'scran-and-scallie', 'royal-yacht-britannia', 'the-kitchin'],
      'Дин-Виллидж, Стокбридж и порт Лит|Dean Village, Stockbridge and Leith|Dean Village, Stockbridge y Leith|Dean Village, Stockbridge und Leith|Dean Village, Stockbridge et Leith|Dean Village, Stockbridge e Leith'),
  ],
};

export default pack;
