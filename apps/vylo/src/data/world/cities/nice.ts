import type { CityPack } from '../types';
import { free, level, makeDay, makePlace } from './_kit.ts';

const P = makePlace('nice');
const D = makeDay('nice');
const CITY = 'gPLguDaVL5k';
const COAST = 'Fz5chaOGADE';
const HILL = 's3rbjJORCvI';
const EZE = '6jCNzTD-2no';
const MARKET = 'NNmpH8wDRfM';
const PORT = 'SlhcXuEsaI8';

const pack: CityPack = {
  country: 'FR',
  city: 'nice',
  places: [
    P('vieux-nice', 'attraction', 43.6966, 7.276, MARKET, 4.7, 41000, ['oldtown', 'food', 'photo'], {
      ru: ['Старая Ницца (Вьё-Нис)', 'Лабиринт узких улиц с охристыми домами, барочными церквями, лавками и бельём на верёвках между окнами у подножия Замкового холма.', 'Утром загляните на рынок Кур-Салея, вечером — в бары на площади Россетти.'],
      en: ['Old Nice (Vieux Nice)', 'A maze of narrow streets with ochre houses, Baroque churches, shops and washing strung between windows below Castle Hill.', 'Hit the Cours Saleya market in the morning and the bars of Place Rossetti at night.'],
      es: ['Niza vieja (Vieux Nice)', 'Un laberinto de callejuelas con casas ocre, iglesias barrocas, tiendas y ropa tendida bajo la colina del Castillo.', 'Por la mañana el mercado del Cours Saleya; de noche, los bares de la Place Rossetti.'],
      de: ['Altstadt von Nizza (Vieux Nice)', 'Ein Gassengewirr mit ockerfarbenen Häusern, Barockkirchen, Läden und Wäscheleinen unter dem Burgberg.', 'Morgens auf den Markt am Cours Saleya, abends in die Bars an der Place Rossetti.'],
      fr: ['Vieux-Nice', 'Un dédale de ruelles aux façades ocre, églises baroques, boutiques et linge entre les fenêtres au pied de la colline du Château.', 'Le matin, marché du cours Saleya ; le soir, bars de la place Rossetti.'],
      it: ['Nizza vecchia (Vieux Nice)', 'Un labirinto di vicoli con case color ocra, chiese barocche, botteghe e panni stesi sotto la collina del Castello.', 'Al mattino il mercato del Cours Saleya, la sera i bar di place Rossetti.'],
    }, { spot: 'insta', price: free }),
    P('musee-matisse', 'attraction', 43.7196, 7.2759, HILL, 4.4, 9800, ['art', 'museums'], {
      ru: ['Музей Матисса', 'Генуэзская вилла XVII века в оливковой роще на холме Симье с работами Анри Матисса, прожившего в Ницце почти 40 лет.', 'Рядом — римские руины и монастырь Симье, где похоронен Матисс.'],
      en: ['Matisse Museum', 'A 17th-century Genoese villa in an olive grove on Cimiez hill with works by Henri Matisse, who lived in Nice for nearly 40 years.', 'Roman ruins and the Cimiez monastery, where Matisse is buried, are next door.'],
      es: ['Museo Matisse', 'Una villa genovesa del siglo XVII en un olivar de la colina de Cimiez con obras de Matisse, que vivió en Niza casi 40 años.', 'Al lado, ruinas romanas y el monasterio de Cimiez, donde está enterrado Matisse.'],
      de: ['Musée Matisse', 'Eine genuesische Villa aus dem 17. Jh. in einem Olivenhain auf dem Cimiez-Hügel mit Werken von Henri Matisse, der fast 40 Jahre in Nizza lebte.', 'Nebenan römische Ruinen und das Kloster Cimiez, wo Matisse begraben ist.'],
      fr: ['Musée Matisse', 'Une villa génoise du XVIIe dans une oliveraie de Cimiez avec des œuvres d’Henri Matisse, qui vécut près de 40 ans à Nice.', 'À côté, les ruines romaines et le monastère de Cimiez où repose Matisse.'],
      it: ['Museo Matisse', 'Una villa genovese del Seicento in un uliveto sulla collina di Cimiez con opere di Henri Matisse, che visse a Nizza quasi 40 anni.', 'Accanto rovine romane e il monastero di Cimiez, dove è sepolto Matisse.'],
    }, { hours: '10:00–18:00', address: '164 Avenue des Arènes de Cimiez' }),
    P('chagall-museum', 'attraction', 43.7092, 7.2694, HILL, 4.5, 8900, ['art', 'museums', 'gardens'], {
      ru: ['Национальный музей Марка Шагала', 'Музей, задуманный самим Шагалом для цикла «Библейское послание»: 17 больших полотен, витражи концертного зала и сад.', 'Посмотрите витражи «Сотворение мира» в зале — на солнце особенно красиво.'],
      en: ['Marc Chagall National Museum', 'A museum Chagall himself conceived for his Biblical Message cycle: 17 large canvases, stained glass in the concert hall and a garden.', 'See the Creation stained glass in the auditorium — beautiful in the sun.'],
      es: ['Museo Nacional Marc Chagall', 'Un museo ideado por el propio Chagall para su Mensaje Bíblico: 17 grandes lienzos, vidrieras del auditorio y un jardín.', 'Mira las vidrieras de la Creación en el auditorio, preciosas al sol.'],
      de: ['Musée national Marc Chagall', 'Ein von Chagall selbst konzipiertes Museum für seinen Zyklus Biblische Botschaft: 17 große Gemälde, Glasfenster im Konzertsaal und ein Garten.', 'Die Schöpfungsfenster im Saal ansehen – im Sonnenlicht wunderschön.'],
      fr: ['Musée national Marc Chagall', 'Un musée conçu par Chagall lui-même pour son Message biblique : 17 grandes toiles, vitraux de l’auditorium et jardin.', 'Admirez les vitraux de la Création dans l’auditorium, superbes au soleil.'],
      it: ['Museo nazionale Marc Chagall', 'Un museo ideato dallo stesso Chagall per il ciclo Messaggio biblico: 17 grandi tele, vetrate dell’auditorium e un giardino.', 'Guarda le vetrate della Creazione nell’auditorium, bellissime al sole.'],
    }, { hours: '10:00–17:00', address: 'Avenue du Docteur Ménard' }),
    P('cimiez-monastery', 'attraction', 43.7194, 7.2765, HILL, 4.7, 7300, ['gardens', 'history', 'views'], {
      ru: ['Монастырь Симье', 'Францисканский монастырь с садом роз и лимонных деревьев и видом на город и море; на кладбище рядом похоронены Матисс и Рауль Дюфи.', 'Сад бесплатен — идеальное место тишины после музея Матисса.'],
      en: ['Cimiez Monastery', 'A Franciscan monastery with a garden of roses and lemon trees and views over the city and sea; Matisse and Raoul Dufy are buried in the cemetery nearby.', 'The garden is free — a perfect quiet spot after the Matisse Museum.'],
      es: ['Monasterio de Cimiez', 'Un monasterio franciscano con jardín de rosas y limoneros y vistas a la ciudad y el mar; Matisse y Raoul Dufy están enterrados en el cementerio al lado.', 'El jardín es gratis: perfecto para un rato de calma tras el Museo Matisse.'],
      de: ['Kloster Cimiez', 'Ein Franziskanerkloster mit Rosen- und Zitronengarten und Blick über Stadt und Meer; Matisse und Raoul Dufy liegen auf dem Friedhof nebenan.', 'Der Garten ist frei – ein ruhiger Ort nach dem Matisse-Museum.'],
      fr: ['Monastère de Cimiez', 'Un monastère franciscain avec jardin de roses et citronniers et vue sur la ville et la mer ; Matisse et Raoul Dufy reposent au cimetière voisin.', 'Le jardin est gratuit, parfait au calme après le musée Matisse.'],
      it: ['Monastero di Cimiez', 'Un monastero francescano con un giardino di rose e limoni e vista su città e mare; nel cimitero vicino riposano Matisse e Raoul Dufy.', 'Il giardino è gratuito: un angolo di pace dopo il Museo Matisse.'],
    }, { spot: 'hidden', price: free, hours: '08:00–18:00' }),
    P('russian-cathedral', 'attraction', 43.704, 7.2531, CITY, 4.6, 13000, ['architecture', 'history'], {
      ru: ['Свято-Николаевский собор', 'Крупнейший православный собор Западной Европы (1912) с пятью луковичными куполами, построенный для русской аристократии Ривьеры.', 'Плечи и колени закрыты; в саду — тихая скамья у куполов.'],
      en: ['St Nicholas Orthodox Cathedral', 'Western Europe’s largest Orthodox cathedral (1912) with five onion domes, built for the Riviera’s Russian aristocracy.', 'Cover shoulders and knees; there’s a quiet bench in the garden by the domes.'],
      es: ['Catedral Ortodoxa de San Nicolás', 'La mayor catedral ortodoxa de Europa Occidental (1912), con cinco cúpulas de cebolla, construida para la aristocracia rusa de la Riviera.', 'Hombros y rodillas cubiertos; en el jardín hay un banco tranquilo.'],
      de: ['Russisch-orthodoxe Nikolauskathedrale', 'Die größte orthodoxe Kathedrale Westeuropas (1912) mit fünf Zwiebelkuppeln, gebaut für den russischen Adel der Riviera.', 'Schultern und Knie bedecken; im Garten eine ruhige Bank an den Kuppeln.'],
      fr: ['Cathédrale orthodoxe Saint-Nicolas', 'La plus grande cathédrale orthodoxe d’Europe occidentale (1912), cinq bulbes, bâtie pour l’aristocratie russe de la Riviera.', 'Épaules et genoux couverts ; un banc paisible au jardin.'],
      it: ['Cattedrale ortodossa di San Nicola', 'La più grande cattedrale ortodossa dell’Europa occidentale (1912) con cinque cupole a cipolla, costruita per l’aristocrazia russa della Riviera.', 'Spalle e ginocchia coperte; in giardino una panchina tranquilla.'],
    }, { spot: 'insta', hours: '09:00–18:00', address: 'Avenue Nicolas II' }),
    P('mamac', 'attraction', 43.7015, 7.2788, CITY, 4.4, 8200, ['art', 'museums', 'views'], {
      ru: ['MAMAC', 'Музей современного искусства с работами Ива Кляйна, Ники де Сен-Фалль и поп-арта; с крыши-террасы — вид на город и Замковый холм.', 'Музей может закрываться на реконструкцию — проверьте перед визитом.'],
      en: ['MAMAC', 'The modern art museum with Yves Klein, Niki de Saint Phalle and pop art; its rooftop terrace looks over the city and Castle Hill.', 'The museum may close for renovation — check before you go.'],
      es: ['MAMAC', 'El museo de arte moderno con Yves Klein, Niki de Saint Phalle y pop art; su azotea mira a la ciudad y la colina del Castillo.', 'Puede cerrar por obras: compruébalo antes.'],
      de: ['MAMAC', 'Das Museum für moderne Kunst mit Yves Klein, Niki de Saint Phalle und Pop-Art; die Dachterrasse blickt über Stadt und Burgberg.', 'Das Museum kann wegen Umbau schließen – vorher prüfen.'],
      fr: ['MAMAC', 'Le musée d’art moderne et contemporain : Yves Klein, Niki de Saint Phalle et pop art ; son toit-terrasse domine la ville et la colline du Château.', 'Le musée peut fermer pour travaux, vérifiez avant.'],
      it: ['MAMAC', 'Il museo d’arte moderna con Yves Klein, Niki de Saint Phalle e pop art; la terrazza sul tetto guarda la città e la collina del Castello.', 'Il museo può chiudere per lavori: controlla prima.'],
    }, { address: 'Place Yves Klein' }),
    P('villa-ephrussi', 'attraction', 43.6956, 7.3283, COAST, 4.6, 16000, ['gardens', 'architecture', 'views'], {
      ru: ['Вилла Эфрусси-де-Ротшильд', 'Розовая вилла начала XX века на перешейке Кап-Ферра с девятью тематическими садами и «поющими» фонтанами под музыку.', 'Фонтаны «танцуют» каждые 20 минут; в чайном салоне — вид на две бухты.'],
      en: ['Villa Ephrussi de Rothschild', 'A pink early-20th-century villa on the Cap Ferrat isthmus with nine themed gardens and musical fountains.', 'The fountains “dance” every 20 minutes; the tea room overlooks two bays.'],
      es: ['Villa Ephrussi de Rothschild', 'Una villa rosa de principios del siglo XX en el istmo de Cap Ferrat con nueve jardines temáticos y fuentes musicales.', 'Las fuentes “bailan” cada 20 minutos; el salón de té mira a dos bahías.'],
      de: ['Villa Ephrussi de Rothschild', 'Eine rosa Villa vom Anfang des 20. Jh. auf der Landenge von Cap Ferrat mit neun Themengärten und Musikfontänen.', 'Die Fontänen „tanzen“ alle 20 Minuten; der Teesalon blickt auf zwei Buchten.'],
      fr: ['Villa Ephrussi de Rothschild', 'Une villa rose du début du XXe sur l’isthme du Cap-Ferrat, neuf jardins à thème et fontaines musicales.', 'Les fontaines « dansent » toutes les 20 minutes ; le salon de thé domine deux baies.'],
      it: ['Villa Ephrussi de Rothschild', 'Una villa rosa del primo Novecento sull’istmo di Cap Ferrat con nove giardini a tema e fontane musicali.', 'Le fontane “danzano” ogni 20 minuti; la sala da tè guarda due baie.'],
    }, { spot: 'insta', hours: '10:00–18:00', address: '1 Avenue Ephrussi de Rothschild, Saint-Jean-Cap-Ferrat' }),
    P('monaco', 'attraction', 43.7396, 7.4277, COAST, 4.6, 98000, ['luxury', 'views', 'history'], {
      ru: ['Монако и Монте-Карло', 'Княжество в 20 минутах на поезде: Княжеский дворец на скале, Океанографический музей, казино Монте-Карло и яхты в порту Эркюль.', 'Поезд TER от вокзала Нис-Виль; смена караула у дворца — в 11:55.'],
      en: ['Monaco and Monte-Carlo', 'The principality 20 minutes away by train: the Prince’s Palace on the Rock, the Oceanographic Museum, the Monte-Carlo casino and superyachts in Port Hercule.', 'Take the TER from Nice-Ville; the palace guard changes at 11:55.'],
      es: ['Mónaco y Montecarlo', 'El principado a 20 minutos en tren: el Palacio en la Roca, el Museo Oceanográfico, el casino de Montecarlo y yates en Port Hercule.', 'Tren TER desde Nice-Ville; el cambio de guardia es a las 11:55.'],
      de: ['Monaco und Monte-Carlo', 'Das Fürstentum 20 Minuten mit dem Zug: Fürstenpalast auf dem Felsen, Ozeanographisches Museum, Casino Monte-Carlo und Superjachten im Port Hercule.', 'TER ab Nice-Ville; Wachwechsel am Palast um 11:55.'],
      fr: ['Monaco et Monte-Carlo', 'La principauté à 20 minutes en train : palais princier sur le Rocher, Musée océanographique, casino de Monte-Carlo et yachts au port Hercule.', 'TER depuis Nice-Ville ; relève de la garde au palais à 11 h 55.'],
      it: ['Monaco e Monte-Carlo', 'Il principato a 20 minuti di treno: il Palazzo del Principe sulla Rocca, il Museo oceanografico, il casinò di Monte-Carlo e gli yacht al porto Hercule.', 'TER da Nice-Ville; cambio della guardia al palazzo alle 11:55.'],
    }, { spot: 'insta' }),
    P('villefranche', 'nature', 43.704, 7.311, COAST, 4.7, 15000, ['beaches', 'oldtown', 'photo'], {
      ru: ['Вильфранш-сюр-Мер', 'Пастельная рыбацкая деревня на одной из самых глубоких бухт Средиземноморья: часовня, расписанная Жаном Кокто, и пляж прямо у старого города.', 'Автобус или поезд 10 минут; искупайтесь на пляже Марини.'],
      en: ['Villefranche-sur-Mer', 'A pastel fishing village on one of the Mediterranean’s deepest bays: a chapel painted by Jean Cocteau and a beach right by the old town.', 'Ten minutes by bus or train; swim at Plage des Marinières.'],
      es: ['Villefranche-sur-Mer', 'Un pueblo pesquero pastel en una de las bahías más profundas del Mediterráneo: una capilla pintada por Jean Cocteau y playa junto al casco antiguo.', 'Diez minutos en bus o tren; báñate en la playa des Marinières.'],
      de: ['Villefranche-sur-Mer', 'Ein pastellfarbenes Fischerdorf an einer der tiefsten Buchten des Mittelmeers: eine von Jean Cocteau bemalte Kapelle und ein Strand an der Altstadt.', 'Zehn Minuten per Bus oder Zug; an der Plage des Marinières baden.'],
      fr: ['Villefranche-sur-Mer', 'Un village de pêcheurs pastel sur l’une des rades les plus profondes de Méditerranée : chapelle peinte par Jean Cocteau et plage au pied de la vieille ville.', 'Dix minutes en bus ou train ; baignade à la plage des Marinières.'],
      it: ['Villefranche-sur-Mer', 'Un villaggio di pescatori pastello su una delle baie più profonde del Mediterraneo: una cappella dipinta da Jean Cocteau e una spiaggia sotto la città vecchia.', 'Dieci minuti in bus o treno; fai il bagno alla plage des Marinières.'],
    }, { spot: 'insta', price: free }),
    P('antibes-picasso', 'attraction', 43.5808, 7.1284, COAST, 4.5, 12000, ['art', 'museums', 'oldtown'], {
      ru: ['Антиб и музей Пикассо', 'Старый город в крепостных стенах в 25 минутах на поезде; в замке Гримальди над морем Пикассо работал в 1946 году — теперь здесь его музей.', 'Совместите с рынком Прованса в старом городе и прогулкой по стенам.'],
      en: ['Antibes and the Picasso Museum', 'A walled old town 25 minutes by train; in the Château Grimaldi above the sea Picasso worked in 1946 — now his museum.', 'Pair it with the Provençal market in the old town and a walk on the ramparts.'],
      es: ['Antibes y el Museo Picasso', 'Un casco antiguo amurallado a 25 minutos en tren; en el castillo Grimaldi sobre el mar trabajó Picasso en 1946, hoy su museo.', 'Combínalo con el mercado provenzal y un paseo por las murallas.'],
      de: ['Antibes und Picasso-Museum', 'Eine ummauerte Altstadt 25 Minuten mit dem Zug; im Château Grimaldi über dem Meer arbeitete Picasso 1946 – heute sein Museum.', 'Mit dem provenzalischen Markt und einem Gang über die Wälle verbinden.'],
      fr: ['Antibes et musée Picasso', 'Une vieille ville fortifiée à 25 minutes en train ; au château Grimaldi au-dessus de la mer, Picasso travailla en 1946 : c’est aujourd’hui son musée.', 'À combiner avec le marché provençal et une balade sur les remparts.'],
      it: ['Antibes e il Museo Picasso', 'Una città vecchia murata a 25 minuti di treno; nel castello Grimaldi sul mare Picasso lavorò nel 1946, oggi suo museo.', 'Abbinalo al mercato provenzale e a una passeggiata sui bastioni.'],
    }, { hours: '10:00–18:00' }),

    P('flaveur', 'food', 43.7005, 7.2755, MARKET, 4.7, 1500, ['food', 'luxury'], {
      ru: ['Flaveur', 'Ресторан братьев Гаэля и Микаэля Турто: средиземноморская кухня со специями со всего мира; две звезды MICHELIN (гид Франции 2026).', 'Есть более доступный обеденный сет; бронируйте.'],
      en: ['Flaveur', 'Gaël and Mickaël Tourteaux’s restaurant: Mediterranean cooking with spices from around the world; two MICHELIN stars (France guide 2026).', 'There’s a more affordable lunch menu; book ahead.'],
      es: ['Flaveur', 'El restaurante de los hermanos Tourteaux: cocina mediterránea con especias del mundo; dos estrellas MICHELIN (guía Francia 2026).', 'Hay un menú de mediodía más asequible; reserva.'],
      de: ['Flaveur', 'Das Restaurant der Brüder Tourteaux: Mittelmeerküche mit Gewürzen aus aller Welt; zwei MICHELIN-Sterne (Guide Frankreich 2026).', 'Es gibt ein günstigeres Mittagsmenü; reservieren.'],
      fr: ['Flaveur', 'Le restaurant des frères Tourteaux : cuisine méditerranéenne aux épices du monde ; deux étoiles MICHELIN (guide France 2026).', 'Menu déjeuner plus abordable ; réservez.'],
      it: ['Flaveur', 'Il ristorante dei fratelli Tourteaux: cucina mediterranea con spezie da tutto il mondo; due stelle MICHELIN (guida Francia 2026).', 'C’è un menù pranzo più accessibile; prenota.'],
    }, { price: level(3), michelin: { award: 'star2', year: 2026 }, address: '25 Rue Gubernatis', menu: [
      ['Tasting menu', undefined, 'дегустационный сет|tasting menu|menú degustación|Degustationsmenü|menu dégustation|menù degustazione'],
      ['Lunch menu', undefined, 'обеденный сет|lunch menu|menú de mediodía|Mittagsmenü|menu déjeuner|menù pranzo'],
    ] }),
    P('jan', 'food', 43.6985, 7.284, PORT, 4.7, 1600, ['food', 'luxury'], {
      ru: ['JAN', 'Ресторан южноафриканского шефа Яна Хендрика ван дер Вестхёйзена у порта: французская техника с нотами ЮАР; одна звезда MICHELIN (гид Франции 2026).', 'Небольшой зал — бронируйте заранее.'],
      en: ['JAN', 'South African chef Jan Hendrik van der Westhuizen’s restaurant near the port: French technique with South African notes; one MICHELIN star (France guide 2026).', 'A small room — book well ahead.'],
      es: ['JAN', 'El restaurante del chef sudafricano Jan Hendrik van der Westhuizen junto al puerto: técnica francesa con notas sudafricanas; una estrella MICHELIN (guía Francia 2026).', 'Sala pequeña: reserva con antelación.'],
      de: ['JAN', 'Das Restaurant des südafrikanischen Kochs Jan Hendrik van der Westhuizen am Hafen: französische Technik mit südafrikanischen Noten; ein MICHELIN-Stern (Guide Frankreich 2026).', 'Kleiner Raum – früh buchen.'],
      fr: ['JAN', 'Le restaurant du chef sud-africain Jan Hendrik van der Westhuizen près du port : technique française aux notes sud-africaines ; une étoile MICHELIN (guide France 2026).', 'Petite salle : réservez tôt.'],
      it: ['JAN', 'Il ristorante dello chef sudafricano Jan Hendrik van der Westhuizen vicino al porto: tecnica francese con note sudafricane; una stella MICHELIN (guida Francia 2026).', 'Sala piccola: prenota con anticipo.'],
    }, { price: level(3), michelin: { award: 'star1', year: 2026 }, address: '12 Rue Lascaris', menu: [
      ['Tasting menu', undefined, 'дегустационный сет|tasting menu|menú degustación|Degustationsmenü|menu dégustation|menù degustazione'],
      ['Wine pairing', undefined, 'винное сопровождение|wine pairing|maridaje de vinos|Weinbegleitung|accord mets-vins|abbinamento vini'],
    ] }),
    P('le-chantecler', 'food', 43.6948, 7.258, CITY, 4.6, 1200, ['food', 'luxury', 'history'], {
      ru: ['Le Chantecler (Негреско)', 'Гастрономический ресторан легендарного отеля «Негреско» на Английской набережной в интерьере XVIII века; одна звезда MICHELIN (гид Франции 2026).', 'Загляните и в холл отеля с хрустальной люстрой Баккара.'],
      en: ['Le Chantecler (Negresco)', 'The fine-dining room of the legendary Hotel Negresco on the Promenade des Anglais, in an 18th-century décor; one MICHELIN star (France guide 2026).', 'Also peek into the hotel’s salon with its Baccarat chandelier.'],
      es: ['Le Chantecler (Negresco)', 'El restaurante gastronómico del legendario Hotel Negresco en el Paseo de los Ingleses, con decoración del siglo XVIII; una estrella MICHELIN (guía Francia 2026).', 'Asómate también al salón del hotel con su lámpara Baccarat.'],
      de: ['Le Chantecler (Negresco)', 'Das Gourmetrestaurant des legendären Hotel Negresco an der Promenade des Anglais im Dekor des 18. Jh.; ein MICHELIN-Stern (Guide Frankreich 2026).', 'Auch einen Blick in den Salon mit dem Baccarat-Lüster werfen.'],
      fr: ['Le Chantecler (Negresco)', 'La table gastronomique du mythique hôtel Negresco sur la promenade des Anglais, décor XVIIIe ; une étoile MICHELIN (guide France 2026).', 'Jetez aussi un œil au salon et à son lustre Baccarat.'],
      it: ['Le Chantecler (Negresco)', 'Il ristorante gourmet del leggendario Hotel Negresco sulla Promenade des Anglais, in un arredo settecentesco; una stella MICHELIN (guida Francia 2026).', 'Sbircia anche il salone con il lampadario Baccarat.'],
    }, { price: level(3), michelin: { award: 'star1', year: 2026 }, address: '37 Promenade des Anglais', menu: [
      ['Tasting menu', undefined, 'дегустационный сет|tasting menu|menú degustación|Degustationsmenü|menu dégustation|menù degustazione'],
      ['Riviera fish', undefined, 'рыба Ривьеры|Riviera fish|pescado de la Riviera|Fisch der Riviera|poisson de la Riviera|pesce della Riviera'],
    ] }),
    P('la-merenda', 'food', 43.6966, 7.2745, MARKET, 4.6, 2900, ['food'], {
      ru: ['La Merenda', 'Крошечный ниццкий бистро в старом городе без телефона: пистý (ниццкий песто), фаршированные овощи и равиоли с даубом; Bib Gourmand (по данным туристического офиса Ниццы, 2026).', 'Бронировать можно только лично, зайдя днём; оплата наличными.'],
      en: ['La Merenda', 'A tiny Niçois bistro in the old town with no phone: pistou, stuffed vegetables and daube ravioli; Bib Gourmand (per Nice tourist office, 2026).', 'Book in person during the day; cash only.'],
      es: ['La Merenda', 'Un diminuto bistró nizardo en el casco antiguo sin teléfono: pistou, verduras rellenas y raviolis de daube; Bib Gourmand (según la oficina de turismo de Niza, 2026).', 'Se reserva en persona de día; solo efectivo.'],
      de: ['La Merenda', 'Ein winziges Nizzaer Bistro in der Altstadt ohne Telefon: Pistou, gefülltes Gemüse und Daube-Ravioli; Bib Gourmand (laut Tourismusbüro Nizza, 2026).', 'Reservierung nur persönlich tagsüber; nur bar.'],
      fr: ['La Merenda', 'Un minuscule bistrot niçois du Vieux-Nice sans téléphone : pistou, petits farcis et raviolis à la daube ; Bib Gourmand (selon l’office de tourisme de Nice, 2026).', 'Réservation sur place dans la journée ; espèces uniquement.'],
      it: ['La Merenda', 'Un minuscolo bistrot nizzardo nella città vecchia senza telefono: pistou, verdure ripiene e ravioli alla daube; Bib Gourmand (secondo l’ufficio turistico di Nizza, 2026).', 'Si prenota di persona durante il giorno; solo contanti.'],
    }, { price: level(2), michelin: { award: 'bib', year: 2026 }, address: '4 Rue Raoul Bosio', menu: [
      ['Petits farcis', undefined, 'фаршированные овощи по-ниццки|Niçois stuffed vegetables|verduras rellenas a la nizarda|gefülltes Gemüse nach Nizzaer Art|petits farcis niçois|verdure ripiene alla nizzarda'],
      ['Raviolis à la daube', undefined, 'равиоли с говядиной, тушённой в вине|ravioli with wine-braised beef|raviolis de ternera guisada al vino|Ravioli mit Rinderschmorbraten|raviolis à la daube|ravioli alla daube'],
    ] }),
    P('bistrot-dantoine', 'food', 43.696, 7.2747, MARKET, 4.5, 3300, ['food'], {
      ru: ['Le Bistrot d’Antoine', 'Бистро в старом городе с меню на доске: ниццкая и южная кухня по разумным ценам; Bib Gourmand (по данным туристического офиса Ниццы, 2026).', 'Бронируйте ужин — место популярно у местных.'],
      en: ['Le Bistrot d’Antoine', 'An old-town bistro with a chalkboard menu: Niçois and southern cooking at fair prices; Bib Gourmand (per Nice tourist office, 2026).', 'Book dinner — it’s popular with locals.'],
      es: ['Le Bistrot d’Antoine', 'Un bistró del casco antiguo con carta en pizarra: cocina nizarda y del sur a buen precio; Bib Gourmand (según la oficina de turismo de Niza, 2026).', 'Reserva la cena: es popular entre los locales.'],
      de: ['Le Bistrot d’Antoine', 'Ein Altstadtbistro mit Tafelkarte: Nizzaer und südfranzösische Küche zu fairen Preisen; Bib Gourmand (laut Tourismusbüro Nizza, 2026).', 'Abends reservieren – bei Einheimischen beliebt.'],
      fr: ['Le Bistrot d’Antoine', 'Un bistrot du Vieux-Nice à l’ardoise : cuisine niçoise et du Sud à prix doux ; Bib Gourmand (selon l’office de tourisme de Nice, 2026).', 'Réservez le soir, très prisé des Niçois.'],
      it: ['Le Bistrot d’Antoine', 'Un bistrot della città vecchia con menù alla lavagna: cucina nizzarda e del Sud a prezzi onesti; Bib Gourmand (secondo l’ufficio turistico di Nizza, 2026).', 'Prenota la cena: amato dai nizzardi.'],
    }, { price: level(2), michelin: { award: 'bib', year: 2026 }, address: '27 Rue de la Préfecture', menu: [
      ['Plat du jour', undefined, 'блюдо дня|dish of the day|plato del día|Tagesgericht|plat du jour|piatto del giorno'],
      ['Daube niçoise', undefined, 'говядина, тушённая в вине по-ниццки|Niçois wine-braised beef|ternera guisada al vino nizarda|Rinderschmorbraten nach Nizzaer Art|daube niçoise|stufato di manzo alla nizzarda'],
    ] }),
    P('chez-rene-socca', 'food', 43.7003, 7.2795, MARKET, 4.3, 9100, ['food', 'streetfood'], {
      ru: ['Chez René Socca', 'Народная закусочная у старого города с сокой — тонкой лепёшкой из нутовой муки из дровяной печи — и писсаладьером.', 'Еду берут у окошка, напитки заказывают у официанта бара напротив.'],
      en: ['Chez René Socca', 'A cheap-and-cheerful spot by the old town for socca — thin chickpea flatbread from a wood oven — and pissaladière.', 'Get food at the counter; order drinks from the bar waiter across the way.'],
      es: ['Chez René Socca', 'Un local popular junto al casco antiguo con socca —torta fina de garbanzo al horno de leña— y pissaladière.', 'La comida se pide en la ventanilla y las bebidas al camarero del bar.'],
      de: ['Chez René Socca', 'Ein einfaches Lokal an der Altstadt für Socca – dünnen Kichererbsenfladen aus dem Holzofen – und Pissaladière.', 'Essen am Tresen holen, Getränke beim Kellner der Bar gegenüber.'],
      fr: ['Chez René Socca', 'Une adresse populaire près du Vieux-Nice pour la socca, galette fine de pois chiches au feu de bois, et la pissaladière.', 'On prend à manger au comptoir et à boire auprès du serveur du bar.'],
      it: ['Chez René Socca', 'Un locale popolare vicino alla città vecchia per la socca, farinata di ceci al forno a legna, e la pissaladière.', 'Il cibo si prende al banco, le bevande dal cameriere del bar.'],
    }, { price: level(1), address: '2 Rue Miralhéti', menu: [
      ['Socca', undefined, 'лепёшка из нутовой муки|chickpea flatbread|torta de garbanzo|Kichererbsenfladen|galette de pois chiches|farinata di ceci'],
      ['Pissaladière', undefined, 'пирог с луком, оливками и анчоусами|onion, olive and anchovy tart|tarta de cebolla, aceitunas y anchoas|Zwiebelkuchen mit Oliven und Sardellen|tarte oignons, olives, anchois|torta di cipolle, olive e acciughe'],
    ] }),
    P('acchiardo', 'food', 43.6973, 7.2785, MARKET, 4.5, 2700, ['food', 'history'], {
      ru: ['Acchiardo', 'Семейный ресторан с 1927 года на улице Друат: простые ниццкие блюда — паста с пистý, рубец по-ниццки, дауб.', 'Бронирования почти нет — приходите к открытию; только наличные.'],
      en: ['Acchiardo', 'A family restaurant since 1927 on Rue Droite: simple Niçois food — pasta with pistou, Niçois tripe, daube.', 'Bookings are rare — arrive at opening; cash only.'],
      es: ['Acchiardo', 'Un restaurante familiar desde 1927 en la Rue Droite: platos nizardos sencillos, pasta al pistou, callos a la nizarda y daube.', 'Casi no hay reservas: llega a la apertura; solo efectivo.'],
      de: ['Acchiardo', 'Ein Familienrestaurant seit 1927 in der Rue Droite: einfache Nizzaer Gerichte – Pasta mit Pistou, Kutteln, Daube.', 'Kaum Reservierungen – zur Öffnung kommen; nur bar.'],
      fr: ['Acchiardo', 'Un restaurant familial depuis 1927 rue Droite : plats niçois simples, pâtes au pistou, tripes à la niçoise, daube.', 'Peu de réservations, venez à l’ouverture ; espèces uniquement.'],
      it: ['Acchiardo', 'Un ristorante di famiglia dal 1927 in rue Droite: piatti nizzardi semplici, pasta al pistou, trippa alla nizzarda, daube.', 'Prenotazioni rare: arriva all’apertura; solo contanti.'],
    }, { price: level(1), address: '38 Rue Droite', menu: [
      ['Pâtes au pistou', undefined, 'паста с ниццким песто|pasta with Niçois pesto|pasta al pistou|Pasta mit Pistou|pâtes au pistou|pasta al pistou'],
      ['Tripes à la niçoise', undefined, 'рубец по-ниццки|Niçois-style tripe|callos a la nizarda|Kutteln nach Nizzaer Art|tripes à la niçoise|trippa alla nizzarda'],
    ] }),
    P('maison-auer', 'food', 43.6955, 7.2737, MARKET, 4.6, 2400, ['food', 'history'], {
      ru: ['Maison Auer', 'Кондитерская-конфетная с 1820 года у Кур-Салея: засахаренные фрукты по старинному рецепту и шоколад в интерьере эпохи Наполеона III.', 'Возьмите засахаренную мандаринку или клементину в подарок.'],
      en: ['Maison Auer', 'A confectioner since 1820 by the Cours Saleya: candied fruit made the old way and chocolate in a Napoleon III interior.', 'Pick up a candied clementine as a gift.'],
      es: ['Maison Auer', 'Una confitería desde 1820 junto al Cours Saleya: fruta confitada a la antigua y chocolate en un interior Napoleón III.', 'Llévate una clementina confitada de regalo.'],
      de: ['Maison Auer', 'Eine Confiserie seit 1820 am Cours Saleya: kandierte Früchte nach alter Art und Schokolade im Napoleon-III-Interieur.', 'Eine kandierte Clementine als Mitbringsel kaufen.'],
      fr: ['Maison Auer', 'Un confiseur depuis 1820 près du cours Saleya : fruits confits à l’ancienne et chocolats dans un décor Napoléon III.', 'Offrez-vous une clémentine confite.'],
      it: ['Maison Auer', 'Una confetteria dal 1820 vicino al Cours Saleya: frutta candita all’antica e cioccolato in un interno Napoleone III.', 'Prendi una clementina candita da regalare.'],
    }, { price: level(2), address: '7 Rue Saint-François-de-Paule', menu: [
      ['Fruits confits', undefined, 'засахаренные фрукты|candied fruit|fruta confitada|kandierte Früchte|fruits confits|frutta candita'],
      ['Chocolats', undefined, 'шоколадные конфеты|chocolates|bombones|Pralinen|chocolats|cioccolatini'],
    ] }),
    P('confiserie-florian', 'food', 43.699, 7.286, PORT, 4.5, 3100, ['food'], {
      ru: ['Confiserie Florian', 'Кондитерская фабрика у порта с бесплатной экскурсией: засахаренные цветы фиалки и розы, цукаты и варенья.', 'Экскурсия по цеху бесплатная и короткая; попробуйте засахаренные фиалки.'],
      en: ['Confiserie Florian', 'A confectionery workshop by the port with a free tour: candied violets and roses, crystallised fruit and jams.', 'The workshop tour is free and short; taste the candied violets.'],
      es: ['Confiserie Florian', 'Un obrador de confitería junto al puerto con visita gratis: violetas y rosas confitadas, frutas escarchadas y mermeladas.', 'La visita es gratuita y breve; prueba las violetas confitadas.'],
      de: ['Confiserie Florian', 'Eine Confiserie am Hafen mit kostenloser Führung: kandierte Veilchen und Rosen, kandierte Früchte und Konfitüren.', 'Die Führung ist gratis und kurz; kandierte Veilchen probieren.'],
      fr: ['Confiserie Florian', 'Une confiserie près du port avec visite gratuite : violettes et roses cristallisées, fruits confits et confitures.', 'Visite gratuite et courte ; goûtez les violettes cristallisées.'],
      it: ['Confiserie Florian', 'Un laboratorio di confetteria vicino al porto con visita gratuita: viole e rose candite, frutta candita e marmellate.', 'La visita è gratuita e breve; assaggia le viole candite.'],
    }, { price: level(1), address: '14 Quai Papacino', menu: [
      ['Candied violets', undefined, 'засахаренные фиалки|candied violets|violetas confitadas|kandierte Veilchen|violettes cristallisées|viole candite'],
      ['Jams', undefined, 'варенья|jams|mermeladas|Konfitüren|confitures|marmellate'],
    ] }),
    P('distilleries-ideales', 'food', 43.6967, 7.2765, MARKET, 4.4, 3600, ['food', 'nightlife'], {
      ru: ['Les Distilleries Idéales', 'Старинный бар-кафе в Вьё-Нис с деревянной стойкой и террасой на улице — место аперитива для местных.', 'Возьмите пастис или розе и тапенаду ранним вечером.'],
      en: ['Les Distilleries Idéales', 'An old bar-café in Vieux Nice with a wooden counter and street terrace — a locals’ aperitif spot.', 'Order a pastis or rosé with tapenade in the early evening.'],
      es: ['Les Distilleries Idéales', 'Un viejo bar-café en el Vieux Nice con barra de madera y terraza en la calle, lugar de aperitivo local.', 'Pide un pastís o un rosado con tapenade al caer la tarde.'],
      de: ['Les Distilleries Idéales', 'Ein altes Bar-Café in der Altstadt mit Holztresen und Straßenterrasse – Aperitif-Treff der Einheimischen.', 'Am frühen Abend Pastis oder Rosé mit Tapenade bestellen.'],
      fr: ['Les Distilleries Idéales', 'Un vieux bar-café du Vieux-Nice, comptoir en bois et terrasse dans la rue : le rendez-vous apéritif des Niçois.', 'Pastis ou rosé et tapenade en début de soirée.'],
      it: ['Les Distilleries Idéales', 'Un vecchio bar-caffè a Nizza vecchia con bancone in legno e dehors, ritrovo per l’aperitivo dei nizzardi.', 'Ordina un pastis o un rosé con tapenade nel tardo pomeriggio.'],
    }, { price: level(1), address: '24 Rue de la Préfecture', menu: [
      ['Pastis', undefined, 'анисовый аперитив|anise aperitif|aperitivo anisado|Anis-Aperitif|pastis|aperitivo all’anice'],
      ['Tapenade', undefined, 'паста из оливок с хлебом|olive spread with bread|paté de aceitunas con pan|Olivenpaste mit Brot|tapenade et pain|tapenade con pane'],
    ] }),
  ],
  routes: [
    D(['=nice-cours-saleya', 'vieux-nice', '=nice-colline-du-chateau', 'la-merenda', 'mamac', '=nice-place-massena', '=nice-promenade-des-anglais', 'flaveur'],
      'Старая Ницца, Замковый холм и Английская набережная|Old Nice, Castle Hill and the Promenade|Niza vieja, la colina del Castillo y el Paseo|Altstadt, Burgberg und Promenade|Vieux-Nice, colline du Château et Promenade|Nizza vecchia, collina del Castello e Promenade'),
    D(['chagall-museum', 'musee-matisse', 'cimiez-monastery', 'acchiardo', 'russian-cathedral', 'maison-auer', 'le-chantecler'],
      'Шагал, Матисс и холм Симье|Chagall, Matisse and Cimiez hill|Chagall, Matisse y la colina de Cimiez|Chagall, Matisse und der Cimiez-Hügel|Chagall, Matisse et la colline de Cimiez|Chagall, Matisse e la collina di Cimiez'),
    D(['confiserie-florian', '=nice-port-lympia', 'villefranche', 'villa-ephrussi', '=nice-cap-ferrat-coastal-path', '=nice-eze-village', 'monaco', 'jan'],
      'Ривьера: Вильфранш, Кап-Ферра, Эз и Монако|The Riviera: Villefranche, Cap Ferrat, Èze and Monaco|La Riviera: Villefranche, Cap Ferrat, Èze y Mónaco|Riviera: Villefranche, Cap Ferrat, Èze und Monaco|La Riviera : Villefranche, Cap-Ferrat, Èze et Monaco|La Riviera: Villefranche, Cap Ferrat, Èze e Monaco'),
  ],
};

export default pack;
