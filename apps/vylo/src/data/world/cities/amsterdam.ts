import type { CityPack } from '../types';
import { free, level, makeDay, makePlace } from './_kit.ts';

const P = makePlace('amsterdam');
const D = makeDay('amsterdam');
const CITY = 'WG0OA9lLN4o';
const CANAL = 'xMUevhbO8pk';
const FLOWERS = 'yq5CbtfEqwc';
const COURT = 'BYSAwvJfego';
const FOOD = 'sJxQNh7Ar3s';
const MUSEUM = 'c6zHtlKJ5qs';
const VILLAGE = 'EbHWZ8Xjgwc';

const pack: CityPack = {
  country: 'NL',
  city: 'amsterdam',
  places: [
    P('anne-frank-house', 'attraction', 52.3752, 4.884, CANAL, 4.6, 71000, ['history', 'museums'], {
      ru: ['Дом Анны Франк', 'Дом на канале Принсенграхт, где Анна Франк с семьёй два года пряталась от нацистов и писала свой дневник.', 'Билеты продаются только онлайн на официальном сайте, обычно за шесть недель — бронируйте заранее.'],
      en: ['Anne Frank House', 'The house on the Prinsengracht where Anne Frank and her family hid from the Nazis for two years and she wrote her diary.', 'Tickets are sold only online on the official site, usually six weeks ahead — book early.'],
      es: ['Casa de Ana Frank', 'La casa del Prinsengracht donde Ana Frank y su familia se escondieron de los nazis dos años y ella escribió su diario.', 'Las entradas solo se venden online en la web oficial, normalmente con seis semanas: reserva pronto.'],
      de: ['Anne Frank Haus', 'Das Haus an der Prinsengracht, in dem sich Anne Frank mit ihrer Familie zwei Jahre vor den Nazis versteckte und ihr Tagebuch schrieb.', 'Tickets gibt es nur online auf der offiziellen Website, meist sechs Wochen im Voraus – früh buchen.'],
      fr: ['Maison d’Anne Frank', 'La maison du Prinsengracht où Anne Frank et sa famille se cachèrent des nazis pendant deux ans et où elle écrivit son journal.', 'Billets uniquement en ligne sur le site officiel, en général six semaines à l’avance : réservez tôt.'],
      it: ['Casa di Anna Frank', 'La casa sul Prinsengracht dove Anna Frank e la sua famiglia si nascosero dai nazisti per due anni e lei scrisse il diario.', 'I biglietti si vendono solo online sul sito ufficiale, di solito sei settimane prima: prenota presto.'],
    }, { hours: '09:00–22:00', address: 'Westermarkt 20' }),
    P('van-gogh-museum', 'attraction', 52.3584, 4.8811, MUSEUM, 4.7, 94000, ['art', 'museums'], {
      ru: ['Музей Ван Гога', 'Крупнейшая в мире коллекция Ван Гога — «Подсолнухи», «Спальня», автопортреты и письма к брату Тео.', 'Билет только на время и онлайн; самые спокойные часы — утром в будни.'],
      en: ['Van Gogh Museum', 'The world’s largest Van Gogh collection — Sunflowers, The Bedroom, self-portraits and letters to his brother Theo.', 'Timed online tickets only; weekday mornings are calmest.'],
      es: ['Museo Van Gogh', 'La mayor colección de Van Gogh del mundo: Los girasoles, El dormitorio, autorretratos y cartas a su hermano Theo.', 'Solo entradas online con hora; las mañanas entre semana son más tranquilas.'],
      de: ['Van Gogh Museum', 'Die weltgrößte Van-Gogh-Sammlung – Sonnenblumen, das Schlafzimmer, Selbstbildnisse und Briefe an Bruder Theo.', 'Nur Online-Zeittickets; wochentags morgens am ruhigsten.'],
      fr: ['Musée Van Gogh', 'La plus grande collection Van Gogh au monde : Tournesols, La Chambre, autoportraits et lettres à son frère Théo.', 'Billets horodatés en ligne uniquement ; le matin en semaine est le plus calme.'],
      it: ['Museo Van Gogh', 'La più grande collezione di Van Gogh al mondo: Girasoli, La camera da letto, autoritratti e lettere al fratello Theo.', 'Solo biglietti online a orario; le mattine feriali sono le più tranquille.'],
    }, { hours: '09:00–18:00', address: 'Museumplein 6' }),
    P('vondelpark', 'nature', 52.358, 4.8686, CANAL, 4.7, 61000, ['nature', 'gardens'], {
      ru: ['Вондел-парк', 'Главный парк Амстердама с прудами, розарием и открытым театром; сюда приезжают на велосипедах на пикник.', 'Летом в выходные в открытом театре проходят бесплатные концерты.'],
      en: ['Vondelpark', 'Amsterdam’s main park with ponds, a rose garden and an open-air theatre; locals cycle in for picnics.', 'In summer the open-air theatre hosts free weekend shows.'],
      es: ['Vondelpark', 'El gran parque de Ámsterdam con estanques, rosaleda y teatro al aire libre; los locales llegan en bici a hacer pícnic.', 'En verano el teatro al aire libre ofrece funciones gratis los fines de semana.'],
      de: ['Vondelpark', 'Amsterdams wichtigster Park mit Teichen, Rosengarten und Freilichttheater; Einheimische radeln zum Picknick her.', 'Im Sommer gibt es am Wochenende kostenlose Aufführungen im Freilichttheater.'],
      fr: ['Vondelpark', 'Le grand parc d’Amsterdam, étangs, roseraie et théâtre en plein air ; on y vient à vélo pique-niquer.', 'L’été, spectacles gratuits le week-end au théâtre en plein air.'],
      it: ['Vondelpark', 'Il parco principale di Amsterdam con laghetti, roseto e teatro all’aperto; i locali ci arrivano in bici per il picnic.', 'D’estate il teatro all’aperto offre spettacoli gratuiti nel weekend.'],
    }, { price: free, hours: 'always' }),
    P('jordaan', 'attraction', 52.374, 4.88, CANAL, 4.7, 18200, ['city', 'oldtown', 'shopping'], {
      ru: ['Йордан и «Девять улочек»', 'Бывший рабочий квартал с узкими каналами, домами XVII века, внутренними двориками-хофье, бутиками и коричневыми кафе.', 'По понедельникам утром на Нордермаркте блошиный рынок, по субботам — фермерский.'],
      en: ['The Jordaan and the Nine Streets', 'A former working-class district of narrow canals, 17th-century houses, hidden almshouse courtyards, boutiques and brown cafés.', 'Monday mornings bring a flea market to the Noordermarkt; Saturdays a farmers’ market.'],
      es: ['El Jordaan y las Nueve Calles', 'Un antiguo barrio obrero de canales estrechos, casas del XVII, patios-hofje escondidos, tiendas y cafés marrones.', 'Los lunes por la mañana hay rastro en el Noordermarkt y los sábados mercado de productores.'],
      de: ['Jordaan und Neun Straßen', 'Ein ehemaliges Arbeiterviertel mit schmalen Grachten, Häusern aus dem 17. Jh., versteckten Hofjes, Boutiquen und braunen Cafés.', 'Montagmorgens Flohmarkt auf dem Noordermarkt, samstags Bauernmarkt.'],
      fr: ['Le Jordaan et les Neuf Rues', 'Un ancien quartier populaire de canaux étroits, maisons du XVIIe, cours d’hospices cachées, boutiques et cafés bruns.', 'Le lundi matin, marché aux puces au Noordermarkt ; le samedi, marché fermier.'],
      it: ['Il Jordaan e le Nove Strade', 'Un ex quartiere operaio di canali stretti, case del Seicento, cortili-hofje nascosti, boutique e caffè “bruni”.', 'Il lunedì mattina mercatino delle pulci al Noordermarkt, il sabato mercato contadino.'],
    }, { spot: 'insta', price: free }),
    P('royal-palace', 'attraction', 52.3731, 4.8913, CITY, 4.5, 24600, ['history', 'architecture'], {
      ru: ['Королевский дворец на площади Дам', 'Бывшая ратуша XVII века, когда-то восьмое чудо света, с мраморным Гражданским залом и картами мира на полу.', 'Дворец иногда закрывают для королевских приёмов — проверьте даты на сайте.'],
      en: ['Royal Palace on Dam Square', 'A 17th-century former town hall, once called the eighth wonder of the world, with a marble Citizens’ Hall and world maps set in the floor.', 'It sometimes closes for royal events — check dates online.'],
      es: ['Palacio Real en la plaza Dam', 'Un antiguo ayuntamiento del siglo XVII, llamado la octava maravilla, con un Salón de los Ciudadanos de mármol y mapas del mundo en el suelo.', 'A veces cierra por actos reales: consulta las fechas.'],
      de: ['Königspalast am Dam', 'Ein ehemaliges Rathaus aus dem 17. Jh., einst achtes Weltwunder genannt, mit marmornem Bürgersaal und Weltkarten im Boden.', 'Bei königlichen Anlässen geschlossen – Termine online prüfen.'],
      fr: ['Palais royal sur la place du Dam', 'Un ancien hôtel de ville du XVIIe, dit huitième merveille du monde, avec sa salle des Citoyens en marbre et ses cartes du monde au sol.', 'Fermé parfois pour des événements royaux : vérifiez les dates.'],
      it: ['Palazzo Reale in piazza Dam', 'Un ex municipio del Seicento, detto l’ottava meraviglia, con la Sala dei Cittadini in marmo e mappe del mondo nel pavimento.', 'A volte chiude per eventi reali: controlla le date.'],
    }, { hours: '10:00–17:00', address: 'Dam' }),
    P('a-dam-lookout', 'attraction', 52.3843, 4.9019, CITY, 4.5, 23800, ['views', 'adventure'], {
      ru: ['A’DAM Lookout', 'Смотровая площадка на 20-м этаже башни A’DAM за рекой Эй с круговым видом на город и качелями над краем крыши.', 'Бесплатный паром от заднего выхода Центрального вокзала идёт 5 минут.'],
      en: ['A’DAM Lookout', 'A 20th-floor observation deck in the A’DAM Tower across the IJ with a 360° city view and a swing over the roof edge.', 'The free ferry from behind Centraal Station takes five minutes.'],
      es: ['A’DAM Lookout', 'Un mirador en la planta 20 de la torre A’DAM al otro lado del IJ con vista de 360° y un columpio sobre el borde.', 'El ferry gratis desde detrás de la Estación Central tarda cinco minutos.'],
      de: ['A’DAM Lookout', 'Eine Aussichtsplattform im 20. Stock des A’DAM Tower jenseits des IJ mit 360°-Blick und einer Schaukel über der Dachkante.', 'Die kostenlose Fähre hinter dem Hauptbahnhof braucht fünf Minuten.'],
      fr: ['A’DAM Lookout', 'Un belvédère au 20e étage de la tour A’DAM de l’autre côté de l’IJ, vue à 360° et balançoire au-dessus du vide.', 'Le ferry gratuit derrière la gare centrale met cinq minutes.'],
      it: ['A’DAM Lookout', 'Una terrazza al 20° piano della torre A’DAM oltre l’IJ con vista a 360° e un’altalena sul bordo del tetto.', 'Il traghetto gratuito dietro la Stazione Centrale impiega cinque minuti.'],
    }, { spot: 'insta', hours: '10:00–22:00' }),
    P('nemo', 'attraction', 52.3741, 4.9123, CITY, 4.5, 21500, ['museums', 'views'], {
      ru: ['NEMO и его крыша', 'Научный музей в здании-корабле Ренцо Пьяно; его ступенчатая крыша — бесплатная городская площадь с видом на гавань.', 'Даже без музея поднимитесь на крышу на закате — там кафе и шезлонги.'],
      en: ['NEMO and its roof', 'A science museum in Renzo Piano’s ship-shaped building; its stepped roof is a free public square with harbour views.', 'Even without the museum, climb the roof at sunset — there’s a café and loungers.'],
      es: ['NEMO y su azotea', 'Un museo de ciencia en el edificio-barco de Renzo Piano; su azotea escalonada es una plaza pública gratuita con vista al puerto.', 'Aunque no entres, sube a la azotea al atardecer: hay café y tumbonas.'],
      de: ['NEMO und sein Dach', 'Ein Wissenschaftsmuseum in Renzo Pianos schiffsförmigem Bau; das Stufendach ist ein kostenloser Platz mit Hafenblick.', 'Auch ohne Museum zum Sonnenuntergang aufs Dach – mit Café und Liegen.'],
      fr: ['NEMO et son toit', 'Un musée des sciences dans le bâtiment-navire de Renzo Piano ; son toit en gradins est une place publique gratuite face au port.', 'Même sans le musée, montez au coucher du soleil : café et transats.'],
      it: ['NEMO e il suo tetto', 'Un museo della scienza nell’edificio a forma di nave di Renzo Piano; il tetto a gradoni è una piazza pubblica gratuita sul porto.', 'Anche senza museo, sali sul tetto al tramonto: c’è un caffè con sdraio.'],
    }, { hours: '10:00–17:30', address: 'Oosterdok 2' }),
    P('zaanse-schans', 'nature', 52.4741, 4.8193, VILLAGE, 4.5, 63000, ['history', 'photo'], {
      ru: ['Заансе-Сханс', 'Музейная деревня с работающими ветряными мельницами XVIII века, зелёными деревянными домиками, сыроварней и мастерской деревянных башмаков.', 'Поезд до станции Zaandijk Zaanse Schans — 17 минут от Центрального; приходите утром до автобусов с туристами.'],
      en: ['Zaanse Schans', 'A museum village of working 18th-century windmills, green wooden houses, a cheese farm and a clog workshop.', 'The train to Zaandijk Zaanse Schans takes 17 minutes from Centraal; come in the morning before the tour buses.'],
      es: ['Zaanse Schans', 'Un pueblo-museo de molinos del siglo XVIII en funcionamiento, casas de madera verdes, quesería y taller de zuecos.', 'El tren a Zaandijk Zaanse Schans tarda 17 minutos desde Centraal; ve temprano antes de los autobuses.'],
      de: ['Zaanse Schans', 'Ein Museumsdorf mit arbeitenden Windmühlen aus dem 18. Jh., grünen Holzhäusern, Käserei und Holzschuhwerkstatt.', 'Der Zug nach Zaandijk Zaanse Schans braucht 17 Minuten ab Centraal; morgens vor den Reisebussen kommen.'],
      fr: ['Zaanse Schans', 'Un village-musée de moulins du XVIIIe en activité, maisons de bois vertes, fromagerie et atelier de sabots.', 'Le train jusqu’à Zaandijk Zaanse Schans met 17 minutes depuis Centraal ; venez tôt avant les cars.'],
      it: ['Zaanse Schans', 'Un villaggio-museo con mulini a vento del Settecento funzionanti, case di legno verdi, caseificio e laboratorio di zoccoli.', 'Il treno per Zaandijk Zaanse Schans impiega 17 minuti da Centraal; vieni presto prima dei pullman.'],
    }, { spot: 'insta', price: free }),
    P('oude-kerk', 'attraction', 52.3744, 4.8983, COURT, 4.5, 8900, ['history', 'art', 'architecture'], {
      ru: ['Ауде-керк', 'Старейшее здание Амстердама — церковь XIII века с деревянным сводом и надгробием жены Рембрандта Саскии; сегодня здесь выставки современного искусства.', 'Церковь стоит посреди квартала красных фонарей — днём там спокойно.'],
      en: ['Oude Kerk', 'Amsterdam’s oldest building — a 13th-century church with a wooden vault and Rembrandt’s wife Saskia’s grave; today it hosts contemporary art.', 'It stands in the middle of the red-light district — calm in the daytime.'],
      es: ['Oude Kerk', 'El edificio más antiguo de Ámsterdam: una iglesia del siglo XIII con bóveda de madera y la tumba de Saskia, esposa de Rembrandt; hoy acoge arte contemporáneo.', 'Está en pleno Barrio Rojo, tranquilo de día.'],
      de: ['Oude Kerk', 'Amsterdams ältestes Gebäude – eine Kirche aus dem 13. Jh. mit Holzgewölbe und dem Grab von Rembrandts Frau Saskia; heute mit zeitgenössischer Kunst.', 'Sie steht mitten im Rotlichtviertel – tagsüber ruhig.'],
      fr: ['Oude Kerk', 'Le plus vieil édifice d’Amsterdam : une église du XIIIe à voûte en bois, avec la tombe de Saskia, femme de Rembrandt ; elle accueille l’art contemporain.', 'Elle se trouve au cœur du quartier rouge, calme en journée.'],
      it: ['Oude Kerk', 'L’edificio più antico di Amsterdam: una chiesa del XIII secolo con volta lignea e la tomba di Saskia, moglie di Rembrandt; oggi ospita arte contemporanea.', 'Si trova nel quartiere a luci rosse, tranquillo di giorno.'],
    }, { hours: '10:00–18:00', address: 'Oudekerksplein 23' }),
    P('ndsm-wharf', 'attraction', 52.4011, 4.893, CITY, 4.4, 9300, ['art', 'city'], {
      ru: ['Верфь NDSM', 'Бывшая судоверфь в Северном Амстердаме, ставшая городом художников: граффити, мастерские, кафе в контейнерах и огромный блошиный рынок раз в месяц.', 'Паром F4 от Центрального вокзала идёт около 15 минут и бесплатен.'],
      en: ['NDSM Wharf', 'A former shipyard in Amsterdam-Noord turned artists’ town: graffiti, studios, container cafés and a huge monthly flea market.', 'The free F4 ferry from Centraal takes about 15 minutes.'],
      es: ['Astillero NDSM', 'Un antiguo astillero en Ámsterdam-Noord convertido en ciudad de artistas: grafitis, talleres, cafés en contenedores y un gran rastro mensual.', 'El ferry gratuito F4 desde Centraal tarda unos 15 minutos.'],
      de: ['NDSM-Werft', 'Eine ehemalige Werft in Amsterdam-Noord, heute Künstlerstadt: Graffiti, Ateliers, Containercafés und ein riesiger monatlicher Flohmarkt.', 'Die kostenlose Fähre F4 ab Centraal braucht etwa 15 Minuten.'],
      fr: ['Chantier NDSM', 'Un ancien chantier naval d’Amsterdam-Noord devenu ville d’artistes : graffitis, ateliers, cafés en conteneurs et immense marché aux puces mensuel.', 'Le ferry gratuit F4 depuis Centraal met environ 15 minutes.'],
      it: ['Cantiere NDSM', 'Un ex cantiere navale ad Amsterdam-Noord diventato città di artisti: graffiti, laboratori, caffè nei container e un enorme mercatino mensile.', 'Il traghetto gratuito F4 da Centraal impiega circa 15 minuti.'],
    }, { spot: 'hidden', price: free }),

    P('rijks-restaurant', 'food', 52.36, 4.8858, MUSEUM, 4.6, 2400, ['food', 'luxury'], {
      ru: ['RIJKS®', 'Ресторан шефа Йориса Бейдендейка в крыле Рейксмузеума: современная голландская кухня из местных продуктов с мировыми акцентами.', 'Удобно пообедать между музеями на Музейной площади; бронируйте.'],
      en: ['RIJKS®', 'Chef Joris Bijdendijk’s restaurant in the Rijksmuseum’s wing: modern Dutch cooking from local produce with global accents.', 'Handy for lunch between the Museumplein museums; book ahead.'],
      es: ['RIJKS®', 'El restaurante del chef Joris Bijdendijk en un ala del Rijksmuseum: cocina neerlandesa moderna de producto local con acentos globales.', 'Práctico para comer entre los museos de Museumplein; reserva.'],
      de: ['RIJKS®', 'Das Restaurant von Joris Bijdendijk im Flügel des Rijksmuseums: moderne niederländische Küche aus lokalen Produkten mit globalen Akzenten.', 'Praktisch fürs Mittagessen zwischen den Museen am Museumplein; reservieren.'],
      fr: ['RIJKS®', 'Le restaurant du chef Joris Bijdendijk dans une aile du Rijksmuseum : cuisine néerlandaise moderne de produits locaux aux accents du monde.', 'Pratique pour déjeuner entre les musées du Museumplein ; réservez.'],
      it: ['RIJKS®', 'Il ristorante dello chef Joris Bijdendijk nell’ala del Rijksmuseum: cucina olandese moderna con prodotti locali e accenti globali.', 'Comodo per pranzo tra i musei di Museumplein; prenota.'],
    }, { price: level(3), address: 'Museumstraat 2', menu: [
      ['Lunch menu', undefined, 'обеденный сет|lunch menu|menú de mediodía|Mittagsmenü|menu déjeuner|menù pranzo'],
      ['Chef’s menu', undefined, 'дегустационный сет шефа|chef’s tasting menu|menú del chef|Menü des Küchenchefs|menu du chef|menù dello chef'],
    ] }),
    P('moeders', 'food', 52.3657, 4.878, FOOD, 4.5, 9400, ['food'], {
      ru: ['Moeders', 'Голландская домашняя кухня «как у мамы»: стены увешаны фотографиями мам гостей; пюре-стамппот, тефтели и сет-«рисовый стол».', 'Попробуйте «Hollandse Rijsttafel» — набор голландских блюд маленькими порциями.'],
      en: ['Moeders', 'Dutch “mum’s cooking”: the walls are covered with guests’ mothers’ photos; stamppot mash, meatballs and a Dutch-style rijsttafel.', 'Try the “Hollandse Rijsttafel” — a spread of small Dutch dishes.'],
      es: ['Moeders', 'Cocina neerlandesa “de mamá”: las paredes están llenas de fotos de madres de clientes; stamppot, albóndigas y una rijsttafel holandesa.', 'Prueba la “Hollandse Rijsttafel”, varios platillos neerlandeses.'],
      de: ['Moeders', 'Niederländische „Mutterküche“: an den Wänden Fotos der Mütter der Gäste; Stamppot, Frikadellen und eine holländische Rijsttafel.', 'Die „Hollandse Rijsttafel“ probieren – viele kleine niederländische Gerichte.'],
      fr: ['Moeders', 'Cuisine néerlandaise « de maman » : les murs sont couverts de photos de mères des clients ; stamppot, boulettes et rijsttafel à la hollandaise.', 'Goûtez la « Hollandse Rijsttafel », assortiment de petits plats néerlandais.'],
      it: ['Moeders', 'Cucina olandese “della mamma”: le pareti sono piene di foto delle mamme dei clienti; stamppot, polpette e una rijsttafel olandese.', 'Prova la “Hollandse Rijsttafel”, tanti piattini olandesi.'],
    }, { price: level(2), address: 'Rozengracht 251', menu: [
      ['Stamppot', undefined, 'картофельное пюре с овощами и колбаской|mashed potato with vegetables and sausage|puré de patata con verdura y salchicha|Kartoffelstampf mit Gemüse und Wurst|purée de pommes de terre aux légumes et saucisse|purè di patate con verdure e salsiccia'],
      ['Hollandse Rijsttafel', undefined, 'сет голландских блюд маленькими порциями|spread of small Dutch dishes|surtido de platillos neerlandeses|Auswahl kleiner niederländischer Gerichte|assortiment de petits plats néerlandais|assaggi di piatti olandesi'],
    ] }),
    P('pancake-bakery', 'food', 52.3768, 4.8838, FOOD, 4.4, 9800, ['food'], {
      ru: ['The Pancake Bakery', 'Голландские блины в подвале дома XVII века у Принсенграхт: огромные тонкие «pannenkoeken» сладкие и солёные и пышные «поффертьес».', 'Солёный блин с беконом и сыром + сироп «stroop» — местная классика.'],
      en: ['The Pancake Bakery', 'Dutch pancakes in a 17th-century canal-house basement on the Prinsengracht: huge thin sweet and savoury pannenkoeken and fluffy poffertjes.', 'A bacon-and-cheese pancake with stroop syrup is the local classic.'],
      es: ['The Pancake Bakery', 'Tortitas neerlandesas en el sótano de una casa del XVII en el Prinsengracht: enormes pannenkoeken dulces y saladas y poffertjes.', 'La de bacon y queso con sirope stroop es el clásico local.'],
      de: ['The Pancake Bakery', 'Holländische Pfannkuchen im Keller eines Grachtenhauses aus dem 17. Jh.: riesige dünne süße und herzhafte Pannenkoeken und Poffertjes.', 'Speck-Käse-Pfannkuchen mit Stroop-Sirup ist der Klassiker.'],
      fr: ['The Pancake Bakery', 'Crêpes néerlandaises dans la cave d’une maison du XVIIe sur le Prinsengracht : immenses pannenkoeken sucrées et salées et poffertjes.', 'La crêpe lard-fromage au sirop stroop est le classique local.'],
      it: ['The Pancake Bakery', 'Pancake olandesi nel seminterrato di una casa del Seicento sul Prinsengracht: enormi pannenkoeken dolci e salati e poffertjes.', 'Il pancake bacon e formaggio con sciroppo stroop è il classico.'],
    }, { price: level(1), address: 'Prinsengracht 191', menu: [
      ['Pannenkoek spek-kaas', undefined, 'блин с беконом и сыром|pancake with bacon and cheese|tortita de bacon y queso|Pfannkuchen mit Speck und Käse|crêpe lard et fromage|pancake con bacon e formaggio'],
      ['Poffertjes', undefined, 'мини-оладьи с маслом и сахарной пудрой|mini pancakes with butter and icing sugar|minitortitas con mantequilla y azúcar glas|Mini-Pfannkuchen mit Butter und Puderzucker|mini-crêpes au beurre et sucre glace|mini pancake con burro e zucchero a velo'],
    ] }),
    P('vleminckx', 'food', 52.3687, 4.8907, FOOD, 4.5, 11500, ['food', 'streetfood'], {
      ru: ['Vleminckx de Sausmeester', 'Окошко с фламандской картошкой фри с 1957 года и почти тридцатью соусами — очередь стоит весь день.', 'Закажите «patatje oorlog» — с майонезом, арахисовым соусом и луком.'],
      en: ['Vleminckx de Sausmeester', 'A Flemish fries hatch since 1957 with around thirty sauces — there’s a queue all day.', 'Order “patatje oorlog” — with mayo, peanut sauce and onion.'],
      es: ['Vleminckx de Sausmeester', 'Una ventanilla de patatas fritas flamencas desde 1957 con unas treinta salsas; hay cola todo el día.', 'Pide “patatje oorlog”, con mayonesa, salsa de cacahuete y cebolla.'],
      de: ['Vleminckx de Sausmeester', 'Ein Pommes-Fenster nach flämischer Art seit 1957 mit rund dreißig Saucen – den ganzen Tag Schlange.', '„Patatje oorlog“ bestellen – mit Mayo, Erdnusssauce und Zwiebeln.'],
      fr: ['Vleminckx de Sausmeester', 'Un comptoir de frites flamandes depuis 1957 et une trentaine de sauces ; file toute la journée.', 'Prenez la « patatje oorlog » : mayo, sauce cacahuète et oignon.'],
      it: ['Vleminckx de Sausmeester', 'Uno sportello di patatine fiamminghe dal 1957 con una trentina di salse; c’è coda tutto il giorno.', 'Ordina la “patatje oorlog”, con maionese, salsa di arachidi e cipolla.'],
    }, { price: level(1), address: 'Voetboogstraat 33', menu: [
      ['Patatje oorlog', undefined, 'фри с майонезом, арахисовым соусом и луком|fries with mayo, peanut sauce and onion|patatas con mayonesa, salsa de cacahuete y cebolla|Pommes mit Mayo, Erdnusssauce und Zwiebeln|frites mayo, sauce cacahuète et oignon|patatine con maionese, salsa di arachidi e cipolla'],
      ['Frites met mayo', undefined, 'фри с голландским майонезом|fries with Dutch mayo|patatas con mayonesa holandesa|Pommes mit niederländischer Mayo|frites et mayonnaise hollandaise|patatine con maionese olandese'],
    ] }),
    P('cafe-papeneiland', 'food', 52.381, 4.8879, CANAL, 4.6, 3700, ['food', 'history'], {
      ru: ['Café Papeneiland', '«Коричневое» кафе 1642 года на углу каналов с делфтской плиткой и, по общему мнению, одним из лучших яблочных пирогов города.', 'Яблочный пирог подают со взбитыми сливками; летом садитесь у окна над каналом.'],
      en: ['Café Papeneiland', 'A 1642 brown café on a canal corner with Delft tiles and, by common consent, one of the city’s best apple pies.', 'The apple pie comes with whipped cream; in summer grab a window seat over the canal.'],
      es: ['Café Papeneiland', 'Un café marrón de 1642 en una esquina de canales con azulejos de Delft y, según muchos, una de las mejores tartas de manzana.', 'La tarta llega con nata; en verano siéntate junto a la ventana.'],
      de: ['Café Papeneiland', 'Ein braunes Café von 1642 an einer Grachtenecke mit Delfter Fliesen und – darin sind sich viele einig – einem der besten Apfelkuchen der Stadt.', 'Der Apfelkuchen kommt mit Sahne; im Sommer am Fenster über der Gracht sitzen.'],
      fr: ['Café Papeneiland', 'Un café brun de 1642 à l’angle de deux canaux, carreaux de Delft et, de l’avis général, l’une des meilleures tartes aux pommes de la ville.', 'La tarte arrive avec de la chantilly ; l’été, prenez la fenêtre sur le canal.'],
      it: ['Café Papeneiland', 'Un caffè “bruno” del 1642 all’angolo tra due canali con piastrelle di Delft e, per molti, una delle migliori torte di mele della città.', 'La torta arriva con panna; d’estate siediti alla finestra sul canale.'],
    }, { price: level(1), address: 'Prinsengracht 2', menu: [
      ['Appeltaart met slagroom', undefined, 'яблочный пирог со взбитыми сливками|apple pie with whipped cream|tarta de manzana con nata|Apfelkuchen mit Sahne|tarte aux pommes et chantilly|torta di mele con panna'],
      ['Koffie verkeerd', undefined, 'кофе с большим количеством молока|coffee with lots of milk|café con mucha leche|Kaffee mit viel Milch|café au lait|caffè con tanto latte'],
    ] }),
    P('wynand-fockink', 'food', 52.3727, 4.8961, COURT, 4.6, 3100, ['food', 'nightlife', 'history'], {
      ru: ['Wynand Fockink', 'Дегустационный зал ликёров и женевера 1679 года в переулке за площадью Дам; по традиции первый глоток делают без рук, наклонившись к рюмке.', 'Рюмки наливают до краёв — отсюда и традиция; попросите посоветовать ликёр.'],
      en: ['Wynand Fockink', 'A 1679 liqueur and jenever tasting room in an alley behind Dam Square; by tradition you take the first sip hands-free, bending to the glass.', 'Glasses are filled to the brim — hence the ritual; ask for a liqueur recommendation.'],
      es: ['Wynand Fockink', 'Una sala de cata de licores y jenever de 1679 en un callejón detrás de la plaza Dam; por tradición el primer sorbo se toma sin manos.', 'Las copas se llenan hasta el borde, de ahí el ritual; pide que te recomienden un licor.'],
      de: ['Wynand Fockink', 'Eine Probierstube für Likör und Jenever von 1679 in einer Gasse hinter dem Dam; traditionell nimmt man den ersten Schluck ohne Hände, über das Glas gebeugt.', 'Die Gläser sind randvoll – daher das Ritual; nach einer Likörempfehlung fragen.'],
      fr: ['Wynand Fockink', 'Une salle de dégustation de liqueurs et genièvre de 1679 dans une ruelle derrière le Dam ; la tradition veut la première gorgée sans les mains.', 'Les verres sont pleins à ras bord, d’où le rituel ; demandez conseil pour une liqueur.'],
      it: ['Wynand Fockink', 'Una sala di degustazione di liquori e jenever del 1679 in un vicolo dietro piazza Dam; per tradizione il primo sorso si beve senza mani.', 'I bicchieri sono pieni fino all’orlo, da qui il rito; chiedi un consiglio sui liquori.'],
    }, { spot: 'hidden', price: level(1), address: 'Pijlsteeg 31', menu: [
      ['Jonge jenever', undefined, 'молодой женевер|young jenever|jenever joven|junger Jenever|genièvre jeune|jenever giovane'],
      ['Hempje licht m’n rokje op', undefined, 'фирменный ликёр с забавным названием|house liqueur with a cheeky name|licor de la casa con nombre pícaro|Hauslikör mit frechem Namen|liqueur maison au nom coquin|liquore della casa dal nome malizioso'],
    ] }),
    P('restaurant-blauw', 'food', 52.3562, 4.8538, FOOD, 4.6, 6300, ['food'], {
      ru: ['Restaurant Blauw', 'Индонезийская кухня — наследие колониальной истории Нидерландов: большой «рейстафел» из десятков блюд с рисом.', 'Рейстафел заказывают на весь стол; попросите отметить самые острые блюда.'],
      en: ['Restaurant Blauw', 'Indonesian cooking — a legacy of Dutch colonial history: a big rijsttafel of dozens of dishes with rice.', 'The rijsttafel is ordered for the whole table; ask which dishes are the spiciest.'],
      es: ['Restaurant Blauw', 'Cocina indonesia, herencia de la historia colonial neerlandesa: una gran rijsttafel de decenas de platos con arroz.', 'La rijsttafel se pide para toda la mesa; pregunta cuáles pican más.'],
      de: ['Restaurant Blauw', 'Indonesische Küche – ein Erbe der niederländischen Kolonialgeschichte: eine große Rijsttafel mit Dutzenden Gerichten und Reis.', 'Die Rijsttafel bestellt der ganze Tisch; nach den schärfsten Gerichten fragen.'],
      fr: ['Restaurant Blauw', 'Cuisine indonésienne, héritage de l’histoire coloniale néerlandaise : une grande rijsttafel de dizaines de plats avec riz.', 'La rijsttafel se commande pour toute la table ; demandez les plats les plus épicés.'],
      it: ['Restaurant Blauw', 'Cucina indonesiana, eredità della storia coloniale olandese: una grande rijsttafel di decine di piatti con riso.', 'La rijsttafel si ordina per tutto il tavolo; chiedi quali piatti sono più piccanti.'],
    }, { price: level(2), address: 'Amstelveenseweg 158', menu: [
      ['Rijsttafel', undefined, 'набор из десятков индонезийских блюд с рисом|spread of dozens of Indonesian dishes with rice|decenas de platos indonesios con arroz|Dutzende indonesische Gerichte mit Reis|des dizaines de plats indonésiens avec riz|decine di piatti indonesiani con riso'],
      ['Rendang', undefined, 'говядина, томлённая в кокосе и специях|beef slow-cooked in coconut and spices|ternera guisada en coco y especias|in Kokos und Gewürzen geschmortes Rind|bœuf mijoté au coco et aux épices|manzo stufato al cocco e spezie'],
    ] }),
    P('brouwerij-t-ij', 'food', 52.3667, 4.9265, CITY, 4.5, 9900, ['food', 'nightlife'], {
      ru: ['Brouwerij ’t IJ', 'Пивоварня у ветряной мельницы Де Гойер: крафтовое пиво, сваренное на месте, на террасе у подножия мельницы.', 'Возьмите сет-дегустацию и сыр «Oude Amsterdammer» к пиву.'],
      en: ['Brouwerij ’t IJ', 'A brewery beside De Gooyer windmill: craft beer brewed on site, on a terrace at the foot of the mill.', 'Get a tasting flight and Oude Amsterdammer cheese with your beer.'],
      es: ['Brouwerij ’t IJ', 'Una cervecería junto al molino De Gooyer: cerveza artesana elaborada allí mismo, en una terraza al pie del molino.', 'Pide una cata y queso Oude Amsterdammer para acompañar.'],
      de: ['Brouwerij ’t IJ', 'Eine Brauerei neben der Windmühle De Gooyer: vor Ort gebrautes Craft-Bier auf einer Terrasse am Fuß der Mühle.', 'Ein Probierbrett und Oude-Amsterdammer-Käse zum Bier nehmen.'],
      fr: ['Brouwerij ’t IJ', 'Une brasserie au pied du moulin De Gooyer : bières artisanales brassées sur place, sur une terrasse sous le moulin.', 'Prenez une planche de dégustation et du fromage Oude Amsterdammer.'],
      it: ['Brouwerij ’t IJ', 'Un birrificio accanto al mulino De Gooyer: birra artigianale prodotta sul posto, su una terrazza ai piedi del mulino.', 'Prendi una degustazione e formaggio Oude Amsterdammer con la birra.'],
    }, { price: level(1), address: 'Funenkade 7', menu: [
      ['Tasting flight', undefined, 'дегустационный сет пива|beer tasting flight|cata de cervezas|Bier-Probierbrett|planche de dégustation de bières|degustazione di birre'],
      ['Oude kaas', undefined, 'выдержанный сыр|aged Dutch cheese|queso curado neerlandés|gereifter Käse|fromage affiné|formaggio stagionato'],
    ] }),
    P('lanskroon', 'food', 52.3693, 4.8906, FOOD, 4.6, 3500, ['food'], {
      ru: ['Lanskroon', 'Старая кондитерская на Сингеле, где пекут свежие строопвафли — вафли с карамельным сиропом, — а летом делают сорбеты.', 'Попробуйте большой свежий строопвафель с сиропом — он не похож на магазинные.'],
      en: ['Lanskroon', 'An old patisserie on the Singel baking fresh stroopwafels — waffles with caramel syrup — and sorbets in summer.', 'Try a big fresh stroopwafel — nothing like the packaged ones.'],
      es: ['Lanskroon', 'Una vieja pastelería en el Singel que hornea stroopwafels frescos, gofres con sirope de caramelo, y en verano sorbetes.', 'Prueba un stroopwafel grande recién hecho: nada que ver con los envasados.'],
      de: ['Lanskroon', 'Eine alte Konditorei an der Singel mit frischen Stroopwafels – Waffeln mit Karamellsirup – und im Sommer Sorbets.', 'Einen großen frischen Stroopwafel probieren – ganz anders als abgepackte.'],
      fr: ['Lanskroon', 'Une vieille pâtisserie du Singel qui cuit des stroopwafels frais, gaufres au sirop de caramel, et des sorbets l’été.', 'Goûtez un grand stroopwafel frais, rien à voir avec ceux en paquet.'],
      it: ['Lanskroon', 'Una vecchia pasticceria sul Singel che sforna stroopwafel freschi, cialde con sciroppo di caramello, e d’estate sorbetti.', 'Prova uno stroopwafel grande e fresco: niente a che vedere con quelli confezionati.'],
    }, { price: level(1), address: 'Singel 385', menu: [
      ['Stroopwafel', undefined, 'вафля с карамельным сиропом|waffle with caramel syrup|gofre con sirope de caramelo|Waffel mit Karamellsirup|gaufre au sirop de caramel|cialda con sciroppo di caramello'],
      ['Sorbet (summer)', undefined, 'фруктовый сорбет летом|fruit sorbet in summer|sorbete de fruta en verano|Fruchtsorbet im Sommer|sorbet aux fruits l’été|sorbetto alla frutta d’estate'],
    ] }),
    P('cafe-t-smalle', 'food', 52.3779, 4.8853, CANAL, 4.6, 4400, ['food', 'history'], {
      ru: ['Café ’t Smalle', 'Крошечное «коричневое» кафе 1786 года в Йордане с террасой прямо на воде канала Эгелантирсграхт.', 'Летом сидите на понтоне у воды; к пиву — горячие крокеты «биттербаллен».'],
      en: ['Café ’t Smalle', 'A tiny 1786 brown café in the Jordaan with a terrace right on the water of the Egelantiersgracht.', 'In summer sit on the pontoon by the water; have bitterballen with your beer.'],
      es: ['Café ’t Smalle', 'Un diminuto café marrón de 1786 en el Jordaan con terraza sobre el agua del Egelantiersgracht.', 'En verano siéntate en el pontón; acompaña la cerveza con bitterballen.'],
      de: ['Café ’t Smalle', 'Ein winziges braunes Café von 1786 im Jordaan mit Terrasse direkt auf dem Wasser der Egelantiersgracht.', 'Im Sommer auf dem Ponton sitzen; Bitterballen zum Bier.'],
      fr: ['Café ’t Smalle', 'Un minuscule café brun de 1786 dans le Jordaan, terrasse sur l’eau de l’Egelantiersgracht.', 'L’été, installez-vous sur le ponton ; des bitterballen avec la bière.'],
      it: ['Café ’t Smalle', 'Un minuscolo caffè “bruno” del 1786 nel Jordaan con terrazza sull’acqua dell’Egelantiersgracht.', 'D’estate siediti sul pontile; bitterballen con la birra.'],
    }, { price: level(1), address: 'Egelantiersgracht 12', menu: [
      ['Bitterballen', undefined, 'жареные шарики с мясным рагу и горчицей|fried meat-ragout balls with mustard|bolitas fritas de ragú con mostaza|frittierte Ragoutbällchen mit Senf|boulettes de ragoût frites à la moutarde|polpettine fritte di ragù con senape'],
      ['Tosti', undefined, 'горячий сэндвич с сыром и ветчиной|toasted ham-and-cheese sandwich|sándwich mixto tostado|Schinken-Käse-Toast|croque jambon-fromage|toast prosciutto e formaggio'],
    ] }),
    P('de-kas', 'food', 52.3519, 4.9407, VILLAGE, 4.6, 3200, ['food', 'gardens'], {
      ru: ['De Kas', 'Ресторан в стеклянной оранжерее 1926 года в парке Франкендал: овощи и травы со своей теплицы и фермы, меню меняется каждый день.', 'Сет из нескольких блюд «на что сегодня урожай»; перед ужином пройдитесь по оранжерее.'],
      en: ['De Kas', 'A restaurant in a 1926 glass greenhouse in Frankendael park: vegetables and herbs from its own greenhouse and farm, with a menu that changes daily.', 'A set menu of whatever the harvest brings; walk through the greenhouse before dinner.'],
      es: ['De Kas', 'Un restaurante en un invernadero de 1926 en el parque Frankendael: verduras y hierbas de su invernadero y granja; menú diario.', 'Menú cerrado según la cosecha; pasea por el invernadero antes de cenar.'],
      de: ['De Kas', 'Ein Restaurant in einem Glasgewächshaus von 1926 im Frankendael-Park: Gemüse und Kräuter aus eigenem Gewächshaus und Hof, täglich neues Menü.', 'Ein Menü nach der Ernte des Tages; vor dem Essen durchs Gewächshaus gehen.'],
      fr: ['De Kas', 'Un restaurant dans une serre de 1926 au parc Frankendael : légumes et herbes de sa serre et de sa ferme, menu qui change chaque jour.', 'Un menu au gré de la récolte ; visitez la serre avant le dîner.'],
      it: ['De Kas', 'Un ristorante in una serra di vetro del 1926 nel parco Frankendael: verdure ed erbe dalla propria serra e fattoria, menù che cambia ogni giorno.', 'Un menù secondo il raccolto del giorno; fai un giro nella serra prima di cena.'],
    }, { price: level(3), address: 'Kamerlingh Onneslaan 3', menu: [
      ['Daily set menu', undefined, 'дневной сет из урожая теплицы|daily set menu from the greenhouse harvest|menú del día de la cosecha|Tagesmenü aus der Gewächshausernte|menu du jour de la récolte de la serre|menù del giorno dal raccolto della serra'],
      ['Greenhouse vegetables', undefined, 'овощи из собственной теплицы|vegetables from the greenhouse|verduras del invernadero|Gemüse aus dem Gewächshaus|légumes de la serre|verdure della serra'],
    ] }),
  ],
  routes: [
    D(['anne-frank-house', 'jordaan', '=amsterdam-brouwersgracht', 'cafe-t-smalle', 'royal-palace', '=amsterdam-begijnhof', '=amsterdam-bloemenmarkt', 'moeders'],
      'Каналы, Йордан и площадь Дам|Canals, the Jordaan and Dam Square|Canales, el Jordaan y la plaza Dam|Grachten, Jordaan und Dam|Canaux, Jordaan et place du Dam|Canali, Jordaan e piazza Dam'),
    D(['van-gogh-museum', '=amsterdam-rijksmuseum', 'rijks-restaurant', 'vondelpark', '=amsterdam-albert-cuyp', '=amsterdam-reguliersgracht', 'restaurant-blauw'],
      'Ван Гог, Рейксмузеум и Вондел-парк|Van Gogh, the Rijksmuseum and Vondelpark|Van Gogh, el Rijksmuseum y el Vondelpark|Van Gogh, Rijksmuseum und Vondelpark|Van Gogh, le Rijksmuseum et le Vondelpark|Van Gogh, il Rijksmuseum e il Vondelpark'),
    D(['zaanse-schans', 'pancake-bakery', 'a-dam-lookout', 'ndsm-wharf', 'nemo', 'brouwerij-t-ij', 'de-kas'],
      'Мельницы Заансе-Сханс и Северный Амстердам|Zaanse Schans windmills and Amsterdam-Noord|Molinos de Zaanse Schans y Ámsterdam-Noord|Windmühlen von Zaanse Schans und Amsterdam-Noord|Moulins de Zaanse Schans et Amsterdam-Noord|Mulini di Zaanse Schans e Amsterdam-Noord'),
  ],
};

export default pack;
