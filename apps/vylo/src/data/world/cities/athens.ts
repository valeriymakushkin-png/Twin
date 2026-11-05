import type { CityPack } from '../types';
import { free, level, makeDay, makePlace } from './_kit.ts';

const P = makePlace('athens');
const D = makeDay('athens');
const ACROPOLIS = 'kLT5Lne_ESk';
const HILL = 'q_e5ogTCY4k';
const PLAKA = 'F6vYASek3E8';
const MUSEUM = 'KWNmE7E9LwQ';

const pack: CityPack = {
  country: 'GR',
  city: 'athens',
  places: [
    P('ancient-agora', 'attraction', 37.9747, 23.7224, ACROPOLIS, 4.7, 32000, ['history', 'museums'], {
      ru: ['Древняя агора', 'Рынок и центр общественной жизни античных Афин, где учил Сократ; здесь стоит Гефестион — лучше всех сохранившийся греческий храм.', 'В восстановленной Стое Аттала — музей с находками агоры; в жару приходите к открытию.'],
      en: ['Ancient Agora', 'The marketplace and civic heart of ancient Athens where Socrates taught; the Temple of Hephaestus here is the best-preserved Greek temple.', 'The rebuilt Stoa of Attalos houses the finds; in summer come at opening.'],
      es: ['Ágora antigua', 'El mercado y centro cívico de la Atenas clásica donde enseñaba Sócrates; aquí está el templo de Hefesto, el mejor conservado de Grecia.', 'La Stoa de Átalo reconstruida guarda los hallazgos; en verano ven a la apertura.'],
      de: ['Antike Agora', 'Markt und Bürgerzentrum des antiken Athen, wo Sokrates lehrte; der Hephaistos-Tempel hier ist der am besten erhaltene griechische Tempel.', 'Die wiederaufgebaute Stoa des Attalos zeigt die Funde; im Sommer zur Öffnung kommen.'],
      fr: ['Agora antique', 'Le marché et cœur civique de l’Athènes antique où enseignait Socrate ; le temple d’Héphaïstos y est le temple grec le mieux conservé.', 'La stoa d’Attale reconstruite abrite les trouvailles ; l’été, venez à l’ouverture.'],
      it: ['Agorà antica', 'Il mercato e cuore civico dell’Atene classica dove insegnava Socrate; il tempio di Efesto è il tempio greco meglio conservato.', 'La Stoà di Attalo ricostruita ospita i reperti; d’estate vieni all’apertura.'],
    }, { hours: '08:00–20:00' }),
    P('plaka', 'attraction', 37.9715, 23.73, PLAKA, 4.6, 41000, ['oldtown', 'shopping', 'photo'], {
      ru: ['Плака', 'Старейший квартал Афин у подножия Акрополя: неоклассические дома, лестницы с бугенвиллеями, таверны и сувенирные лавки.', 'Сверните с улицы Адриану в боковые переулки — там тише и красивее.'],
      en: ['Plaka', 'Athens’s oldest quarter below the Acropolis: neoclassical houses, bougainvillea-draped steps, tavernas and souvenir shops.', 'Turn off Adrianou into the side lanes — quieter and prettier.'],
      es: ['Plaka', 'El barrio más antiguo de Atenas bajo la Acrópolis: casas neoclásicas, escaleras con buganvillas, tabernas y tiendas.', 'Sal de la calle Adrianou a las callejuelas: más tranquilas y bonitas.'],
      de: ['Plaka', 'Athens ältestes Viertel unter der Akropolis: klassizistische Häuser, Treppen mit Bougainvillea, Tavernen und Souvenirläden.', 'Von der Adrianou in die Seitengassen abbiegen – ruhiger und schöner.'],
      fr: ['Plaka', 'Le plus vieux quartier d’Athènes sous l’Acropole : maisons néoclassiques, escaliers fleuris de bougainvilliers, tavernes et boutiques.', 'Quittez la rue Adrianou pour les ruelles : plus calmes et plus jolies.'],
      it: ['Plaka', 'Il quartiere più antico di Atene sotto l’Acropoli: case neoclassiche, scalinate con buganvillee, taverne e negozi.', 'Lascia via Adrianou per i vicoli laterali: più tranquilli e belli.'],
    }, { spot: 'insta', price: free }),
    P('national-archaeological-museum', 'attraction', 37.989, 23.7322, MUSEUM, 4.8, 29000, ['museums', 'history', 'art'], {
      ru: ['Национальный археологический музей', 'Крупнейший музей античной Греции: «маска Агамемнона», бронзовый Посейдон с мыса Артемисий и Антикитерский механизм.', 'Заложите 2–3 часа; утром в будни залы почти пусты.'],
      en: ['National Archaeological Museum', 'The greatest museum of ancient Greece: the “Mask of Agamemnon”, the Artemision Bronze and the Antikythera mechanism.', 'Allow 2–3 hours; weekday mornings are nearly empty.'],
      es: ['Museo Arqueológico Nacional', 'El mayor museo de la Grecia antigua: la “máscara de Agamenón”, el bronce de Artemisio y el mecanismo de Anticitera.', 'Dedica 2–3 horas; entre semana por la mañana está casi vacío.'],
      de: ['Archäologisches Nationalmuseum', 'Das größte Museum des antiken Griechenland: die „Maske des Agamemnon“, die Bronze vom Kap Artemision und der Mechanismus von Antikythera.', '2–3 Stunden einplanen; werktags morgens fast leer.'],
      fr: ['Musée national archéologique', 'Le plus grand musée de la Grèce antique : le « masque d’Agamemnon », le bronze de l’Artémision et la machine d’Anticythère.', 'Comptez 2–3 heures ; presque vide en semaine le matin.'],
      it: ['Museo archeologico nazionale', 'Il più grande museo della Grecia antica: la “maschera di Agamennone”, il bronzo di Capo Artemisio e il meccanismo di Anticitera.', 'Calcola 2–3 ore; nei giorni feriali al mattino è quasi vuoto.'],
    }, { hours: '08:00–20:00', address: '28is Oktovriou 44' }),
    P('temple-of-olympian-zeus', 'attraction', 37.9693, 23.7331, ACROPOLIS, 4.5, 31000, ['history'], {
      ru: ['Храм Зевса Олимпийского', 'Колоссальный храм, строившийся почти 700 лет и законченный императором Адрианом; уцелели 15 гигантских колонн. Рядом — арка Адриана.', 'Вид на Акрополь через колонны — лучший кадр ближе к вечеру.'],
      en: ['Temple of Olympian Zeus', 'A colossal temple built over nearly 700 years and finished by Emperor Hadrian; 15 giant columns survive, with Hadrian’s Arch beside it.', 'The Acropolis framed by the columns is best in late afternoon.'],
      es: ['Templo de Zeus Olímpico', 'Un templo colosal construido durante casi 700 años y terminado por Adriano; quedan 15 columnas gigantes, junto al Arco de Adriano.', 'La Acrópolis entre las columnas luce mejor al final de la tarde.'],
      de: ['Olympieion', 'Ein kolossaler Tempel, fast 700 Jahre im Bau und von Kaiser Hadrian vollendet; 15 riesige Säulen stehen noch, daneben der Hadriansbogen.', 'Die Akropolis zwischen den Säulen wirkt am späten Nachmittag am schönsten.'],
      fr: ['Temple de Zeus olympien', 'Un temple colossal bâti pendant près de 700 ans et achevé par Hadrien ; 15 colonnes géantes subsistent, près de l’arc d’Hadrien.', 'L’Acropole encadrée par les colonnes est superbe en fin d’après-midi.'],
      it: ['Tempio di Zeus Olimpio', 'Un tempio colossale costruito in quasi 700 anni e completato da Adriano; restano 15 colonne giganti, accanto all’Arco di Adriano.', 'L’Acropoli tra le colonne è più bella nel tardo pomeriggio.'],
    }, { hours: '08:00–20:00' }),
    P('syntagma-evzones', 'attraction', 37.9755, 23.7368, MUSEUM, 4.6, 38000, ['history', 'culture'], {
      ru: ['Смена караула на площади Синтагма', 'Гвардейцы-эвзоны в юбках-фустанеллах и туфлях с помпонами сменяются у Могилы Неизвестного солдата перед парламентом каждый час.', 'Самая торжественная смена — в воскресенье в 11:00 с оркестром.'],
      en: ['Changing of the Guard at Syntagma', 'Evzone guards in foustanella kilts and pompom shoes change every hour at the Tomb of the Unknown Soldier in front of Parliament.', 'The grandest ceremony is on Sunday at 11:00, with a band.'],
      es: ['Cambio de guardia en Síntagma', 'Los evzones con faldellín y zapatos de pompón se relevan cada hora ante la Tumba del Soldado Desconocido frente al Parlamento.', 'El más solemne es el domingo a las 11:00, con banda.'],
      de: ['Wachwechsel am Syntagma-Platz', 'Evzonen in Fustanella und Bommelschuhen wechseln stündlich am Grabmal des Unbekannten Soldaten vor dem Parlament.', 'Der feierlichste Wechsel ist sonntags um 11 Uhr mit Musikkapelle.'],
      fr: ['Relève de la garde à Syntagma', 'Les evzones en fustanelle et chaussures à pompons se relaient chaque heure devant la tombe du Soldat inconnu, face au Parlement.', 'La relève la plus solennelle a lieu le dimanche à 11 h, avec fanfare.'],
      it: ['Cambio della guardia a Syntagma', 'Gli evzoni in fustanella e scarpe con pompon si danno il cambio ogni ora davanti alla Tomba del Milite Ignoto, di fronte al Parlamento.', 'Il cambio più solenne è la domenica alle 11, con la banda.'],
    }, { spot: 'insta', price: free }),
    P('roman-agora', 'attraction', 37.9744, 23.7265, PLAKA, 4.5, 14000, ['history'], {
      ru: ['Римская агора и Башня ветров', 'Римский рынок с воротами Афины Архегетиды и восьмигранной Башней ветров — древними часами, флюгером и водяными часами.', 'Можно взять комбинированный билет на несколько античных объектов.'],
      en: ['Roman Agora and Tower of the Winds', 'A Roman market with the Gate of Athena Archegetis and the octagonal Tower of the Winds — an ancient clock, weather vane and water clock.', 'A combined ticket covers several ancient sites.'],
      es: ['Ágora romana y Torre de los Vientos', 'Un mercado romano con la puerta de Atenea Arquegetis y la Torre de los Vientos octogonal: reloj de sol, veleta y clepsidra.', 'Una entrada combinada incluye varios yacimientos.'],
      de: ['Römische Agora und Turm der Winde', 'Ein römischer Markt mit dem Tor der Athena Archegetis und dem achteckigen Turm der Winde – antike Uhr, Wetterfahne und Wasseruhr.', 'Ein Kombiticket deckt mehrere antike Stätten ab.'],
      fr: ['Agora romaine et tour des Vents', 'Un marché romain avec la porte d’Athéna Archégétis et la tour des Vents octogonale : cadran solaire, girouette et horloge à eau.', 'Un billet combiné couvre plusieurs sites antiques.'],
      it: ['Agorà romana e Torre dei Venti', 'Un mercato romano con la porta di Atena Archegetis e l’ottagonale Torre dei Venti: meridiane, banderuola e orologio ad acqua.', 'Un biglietto cumulativo include più siti antichi.'],
    }, { hours: '08:00–20:00' }),
    P('benaki-museum', 'attraction', 37.9757, 23.7401, MUSEUM, 4.7, 9800, ['museums', 'art', 'history'], {
      ru: ['Музей Бенаки', 'Особняк с коллекцией греческой культуры от древности до XX века: иконы, костюмы, золото, интерьеры; на крыше — кафе с видом на Национальный сад.', 'По четвергам вход бесплатный; кафе на крыше хорошо для паузы.'],
      en: ['Benaki Museum', 'A mansion with a collection of Greek culture from antiquity to the 20th century: icons, costumes, gold, interiors; a rooftop café over the National Garden.', 'Entry is free on Thursdays; the rooftop café is a good break.'],
      es: ['Museo Benaki', 'Una mansión con una colección de cultura griega de la Antigüedad al siglo XX: iconos, trajes, oro e interiores; café en la azotea sobre el Jardín Nacional.', 'Los jueves la entrada es gratis; el café de la azotea es una buena pausa.'],
      de: ['Benaki-Museum', 'Eine Villa mit griechischer Kultur von der Antike bis ins 20. Jh.: Ikonen, Trachten, Gold, Interieurs; ein Dachcafé über dem Nationalgarten.', 'Donnerstags freier Eintritt; das Dachcafé eignet sich für eine Pause.'],
      fr: ['Musée Benaki', 'Une demeure dédiée à la culture grecque de l’Antiquité au XXe : icônes, costumes, or, intérieurs ; café sur le toit face au Jardin national.', 'Gratuit le jeudi ; le café du toit invite à la pause.'],
      it: ['Museo Benaki', 'Una dimora con la cultura greca dall’antichità al Novecento: icone, costumi, ori, interni; caffè sul tetto sul Giardino Nazionale.', 'Il giovedì l’ingresso è gratuito; il caffè sul tetto è ideale per una pausa.'],
    }, { hours: '10:00–18:00', address: 'Koumbari 1' }),
    P('monastiraki-square', 'attraction', 37.9761, 23.7255, PLAKA, 4.5, 45000, ['market', 'shopping', 'city'], {
      ru: ['Монастираки и блошиный рынок', 'Шумная площадь с видом на Акрополь, византийской церковью и мечетью; от неё расходятся улицы блошиного рынка.', 'По воскресеньям на улочках вокруг площади Ависинияс — антикварный развал.'],
      en: ['Monastiraki and the flea market', 'A lively square with an Acropolis view, a Byzantine church and a mosque; flea-market streets fan out from it.', 'On Sundays an antiques market spreads round Avyssinias Square.'],
      es: ['Monastiraki y el rastro', 'Una plaza animada con vistas a la Acrópolis, iglesia bizantina y mezquita; de ella salen las calles del rastro.', 'Los domingos hay mercado de antigüedades en la plaza Avissinias.'],
      de: ['Monastiraki und Flohmarkt', 'Ein lebhafter Platz mit Akropolisblick, byzantinischer Kirche und Moschee; von hier gehen die Flohmarktgassen ab.', 'Sonntags Antikmarkt rund um den Avissinias-Platz.'],
      fr: ['Monastiraki et le marché aux puces', 'Une place animée avec vue sur l’Acropole, église byzantine et mosquée ; les rues du marché aux puces en partent.', 'Le dimanche, marché d’antiquités autour de la place Avissinias.'],
      it: ['Monastiraki e il mercato delle pulci', 'Una piazza vivace con vista sull’Acropoli, una chiesa bizantina e una moschea; da qui partono le vie del mercatino.', 'La domenica mercato dell’antiquariato intorno a piazza Avissinias.'],
    }, { price: free, hours: 'always' }),
    P('cape-sounion', 'nature', 37.6502, 24.0247, HILL, 4.8, 33000, ['history', 'sunset', 'views'], {
      ru: ['Мыс Сунион и храм Посейдона', 'Мраморный храм Посейдона V века до н. э. на скале над Эгейским морем в 70 км от Афин; на колонне — автограф лорда Байрона.', 'Едьте к закату по прибрежной дороге; рейсовый автобус от площади Педион-ту-Ареос идёт около 2 часов.'],
      en: ['Cape Sounion and the Temple of Poseidon', 'A 5th-century BC marble Temple of Poseidon on a cliff over the Aegean, 70 km from Athens; Lord Byron carved his name on a column.', 'Go for sunset along the coast road; the public bus from Pedion tou Areos takes about two hours.'],
      es: ['Cabo Sunión y templo de Poseidón', 'Un templo de mármol del siglo V a. C. sobre un acantilado del Egeo a 70 km de Atenas; Lord Byron grabó su nombre en una columna.', 'Ve al atardecer por la carretera de la costa; el autobús desde Pedion tou Areos tarda unas dos horas.'],
      de: ['Kap Sounion und Poseidontempel', 'Ein marmorner Poseidontempel aus dem 5. Jh. v. Chr. auf einer Klippe über der Ägäis, 70 km von Athen; Lord Byron ritzte seinen Namen in eine Säule.', 'Zum Sonnenuntergang über die Küstenstraße; der Linienbus ab Pedion tou Areos braucht etwa zwei Stunden.'],
      fr: ['Cap Sounion et temple de Poséidon', 'Un temple de marbre du Ve siècle av. J.-C. sur une falaise dominant l’Égée, à 70 km d’Athènes ; Lord Byron a gravé son nom sur une colonne.', 'Allez-y au coucher du soleil par la route côtière ; le bus depuis Pedion tou Areos met environ deux heures.'],
      it: ['Capo Sounion e tempio di Poseidone', 'Un tempio marmoreo del V secolo a.C. su una scogliera sull’Egeo, a 70 km da Atene; Lord Byron incise il suo nome su una colonna.', 'Vai al tramonto lungo la strada costiera; il bus da Pedion tou Areos impiega circa due ore.'],
    }, { spot: 'insta', hours: '09:30–20:00' }),
    P('national-garden', 'nature', 37.973, 23.7375, MUSEUM, 4.5, 26000, ['gardens', 'nature'], {
      ru: ['Национальный сад', 'Тенистый парк за парламентом, разбитый для королевы Амалии: пруды с утками и черепахами, древние руины и дворец Заппион.', 'Спасение в жаркий день между Синтагмой и храмом Зевса.'],
      en: ['National Garden', 'A shady park behind Parliament laid out for Queen Amalia: ponds with ducks and turtles, ancient ruins and the Zappeion.', 'A refuge on a hot day between Syntagma and the Temple of Zeus.'],
      es: ['Jardín Nacional', 'Un parque sombreado tras el Parlamento creado para la reina Amalia: estanques con patos y tortugas, ruinas y el Zappeion.', 'Un refugio en días de calor entre Síntagma y el templo de Zeus.'],
      de: ['Nationalgarten', 'Ein schattiger Park hinter dem Parlament, für Königin Amalie angelegt: Teiche mit Enten und Schildkröten, antike Ruinen und das Zappeion.', 'Eine Zuflucht an heißen Tagen zwischen Syntagma und Zeustempel.'],
      fr: ['Jardin national', 'Un parc ombragé derrière le Parlement créé pour la reine Amalia : étangs aux canards et tortues, ruines antiques et Zappeion.', 'Un refuge par forte chaleur entre Syntagma et le temple de Zeus.'],
      it: ['Giardino Nazionale', 'Un parco ombroso dietro il Parlamento creato per la regina Amalia: laghetti con anatre e tartarughe, rovine antiche e lo Zappeion.', 'Un rifugio nelle giornate calde tra Syntagma e il tempio di Zeus.'],
    }, { price: free, hours: '07:00–21:00' }),

    P('lukumades', 'food', 37.9767, 23.7302, PLAKA, 4.6, 7800, ['food', 'streetfood'], {
      ru: ['Lukumades', 'Современная лавка лукумадес — греческих пончиков-шариков, жаренных на глазах, с мёдом и корицей или шоколадом, а к ним мороженое.', 'Классика — с мёдом, корицей и кунжутом; ешьте горячими.'],
      en: ['Lukumades', 'A modern shop for loukoumades — Greek doughnut balls fried to order, with honey and cinnamon or chocolate, plus ice cream.', 'The classic is honey, cinnamon and sesame; eat them hot.'],
      es: ['Lukumades', 'Una tienda moderna de loukoumades, buñuelos griegos fritos al momento, con miel y canela o chocolate, y helado.', 'El clásico: miel, canela y sésamo; cómelos calientes.'],
      de: ['Lukumades', 'Ein moderner Laden für Loukoumades – griechische Teigbällchen, frisch frittiert, mit Honig und Zimt oder Schokolade, dazu Eis.', 'Klassisch mit Honig, Zimt und Sesam; heiß essen.'],
      fr: ['Lukumades', 'Une boutique moderne de loukoumades, beignets grecs frits à la minute, au miel et cannelle ou au chocolat, avec glace.', 'Le classique : miel, cannelle et sésame ; à manger chaud.'],
      it: ['Lukumades', 'Un negozio moderno di loukoumades, frittelle greche fritte al momento con miele e cannella o cioccolato, e gelato.', 'Il classico: miele, cannella e sesamo; mangiale caldi.'],
    }, { price: level(1), address: 'Aiolou 21', menu: [
      ['Loukoumades with honey', undefined, 'пончики с мёдом, корицей и кунжутом|doughnut balls with honey, cinnamon and sesame|buñuelos con miel, canela y sésamo|Teigbällchen mit Honig, Zimt und Sesam|beignets au miel, cannelle et sésame|frittelle con miele, cannella e sesamo'],
      ['Loukoumades with ice cream', undefined, 'пончики с мороженым|doughnut balls with ice cream|buñuelos con helado|Teigbällchen mit Eis|beignets et glace|frittelle con gelato'],
    ] }),
    P('kostas-souvlaki', 'food', 37.976, 23.7291, PLAKA, 4.6, 6100, ['food', 'streetfood'], {
      ru: ['Kostas (площадь Агиас Иринис)', 'Крошечная сувлачная с 1950 года: пита со свиным шашлычком, томатами, луком и острым томатным соусом — и ничего лишнего.', 'Работает до середины дня и закрывается, когда кончается мясо.'],
      en: ['Kostas (Agias Irinis Square)', 'A tiny souvlaki shop since 1950: pita with a pork skewer, tomato, onion and spicy tomato sauce — nothing more.', 'Open until mid-afternoon; closes when the meat runs out.'],
      es: ['Kostas (plaza Agias Irinis)', 'Un diminuto local de souvlaki desde 1950: pita con brocheta de cerdo, tomate, cebolla y salsa picante; nada más.', 'Abre hasta media tarde; cierra cuando se acaba la carne.'],
      de: ['Kostas (Agias-Irinis-Platz)', 'Ein winziger Souvlaki-Laden seit 1950: Pita mit Schweinespieß, Tomate, Zwiebel und scharfer Tomatensauce – sonst nichts.', 'Bis zum Nachmittag geöffnet; zu, wenn das Fleisch aus ist.'],
      fr: ['Kostas (place Agias Irinis)', 'Une minuscule échoppe de souvlaki depuis 1950 : pita, brochette de porc, tomate, oignon et sauce tomate épicée, rien de plus.', 'Ouvert jusqu’au milieu d’après-midi ; ferme quand la viande manque.'],
      it: ['Kostas (piazza Agias Irinis)', 'Un minuscolo locale di souvlaki dal 1950: pita con spiedino di maiale, pomodoro, cipolla e salsa piccante, niente di più.', 'Aperto fino al primo pomeriggio; chiude quando finisce la carne.'],
    }, { price: level(1), address: 'Plateia Agias Irinis 2', menu: [
      ['Souvlaki pita', undefined, 'пита со свиным шашлычком и томатным соусом|pita with pork skewer and tomato sauce|pita con brocheta de cerdo y salsa de tomate|Pita mit Schweinespieß und Tomatensauce|pita brochette de porc et sauce tomate|pita con spiedino di maiale e salsa di pomodoro'],
      ['Kebab pita', undefined, 'пита с рубленым кебабом|pita with minced kebab|pita con kebab de carne picada|Pita mit Hackfleisch-Kebab|pita au kebab haché|pita con kebab di carne trita'],
    ] }),
    P('diporto', 'food', 37.98, 23.7259, PLAKA, 4.6, 2800, ['food', 'history'], {
      ru: ['Diporto', 'Подвальная таверна без вывески у Центрального рынка: бочки с вином, общие столы и несколько блюд дня — фасолевый суп, рыба, салат.', 'Меню нет — хозяин сам скажет, что сегодня; работает только днём.'],
      en: ['Diporto', 'A sign-less basement taverna by the Central Market: wine barrels, shared tables and a few dishes of the day — bean soup, fish, salad.', 'There’s no menu — the owner tells you what’s cooking; daytime only.'],
      es: ['Diporto', 'Una taberna en un sótano sin cartel junto al Mercado Central: barriles de vino, mesas compartidas y pocos platos del día —sopa de alubias, pescado, ensalada.', 'No hay carta: el dueño te dice qué hay; solo de día.'],
      de: ['Diporto', 'Eine schildlose Kellertaverne am Zentralmarkt: Weinfässer, Gemeinschaftstische und ein paar Tagesgerichte – Bohnensuppe, Fisch, Salat.', 'Keine Karte – der Wirt sagt, was es gibt; nur tagsüber.'],
      fr: ['Diporto', 'Une taverne en sous-sol sans enseigne près du marché central : tonneaux de vin, tables partagées et quelques plats du jour — soupe de haricots, poisson, salade.', 'Pas de menu : le patron annonce le jour ; ouvert la journée seulement.'],
      it: ['Diporto', 'Una taverna seminterrata senza insegna vicino al Mercato Centrale: botti di vino, tavoli condivisi e pochi piatti del giorno, zuppa di fagioli, pesce, insalata.', 'Niente menù: te lo dice il titolare; aperta solo di giorno.'],
    }, { spot: 'hidden', price: level(1), address: 'Sokratous 9', menu: [
      ['Fasolada', undefined, 'греческий фасолевый суп|Greek white-bean soup|sopa griega de alubias|griechische Bohnensuppe|soupe grecque de haricots|zuppa greca di fagioli'],
      ['Grilled sardines', undefined, 'сардины на гриле|grilled sardines|sardinas a la plancha|gegrillte Sardinen|sardines grillées|sardine alla griglia'],
    ] }),
    P('ta-karamanlidika', 'food', 37.98, 23.7262, PLAKA, 4.7, 8200, ['food'], {
      ru: ['Ta Karamanlidika tou Fani', 'Деликатесная лавка-ресторан с вяленым мясом пастырма, колбасками и сырами по рецептам греков Каппадокии.', 'Закажите ассорти пастырмы и сыров и узо; бронируйте вечером.'],
      en: ['Ta Karamanlidika tou Fani', 'A deli-restaurant of cured pastourma, sausages and cheeses from the recipes of Cappadocian Greeks.', 'Order a pastourma and cheese platter with ouzo; book in the evening.'],
      es: ['Ta Karamanlidika tou Fani', 'Una charcutería-restaurante de pastourma, embutidos y quesos según recetas de los griegos de Capadocia.', 'Pide una tabla de pastourma y quesos con ouzo; reserva por la noche.'],
      de: ['Ta Karamanlidika tou Fani', 'Ein Feinkost-Restaurant mit Pastourma, Würsten und Käse nach Rezepten der kappadokischen Griechen.', 'Eine Platte mit Pastourma und Käse und Ouzo bestellen; abends reservieren.'],
      fr: ['Ta Karamanlidika tou Fani', 'Une épicerie-restaurant de pastourma, saucisses et fromages selon les recettes des Grecs de Cappadoce.', 'Prenez une planche pastourma-fromages et un ouzo ; réservez le soir.'],
      it: ['Ta Karamanlidika tou Fani', 'Una gastronomia-ristorante di pastourma, salsicce e formaggi secondo le ricette dei greci di Cappadocia.', 'Ordina un tagliere di pastourma e formaggi con ouzo; prenota la sera.'],
    }, { price: level(2), address: 'Evripidou 52', menu: [
      ['Pastourma platter', undefined, 'ассорти вяленой говядины пастырма|platter of cured pastourma beef|tabla de pastourma|Platte mit Pastourma|assiette de pastourma|tagliere di pastourma'],
      ['Soutzouki', undefined, 'пряная колбаска|spiced sausage|salchicha especiada|Gewürzwurst|saucisse épicée|salsiccia speziata'],
    ] }),
    P('bairaktaris', 'food', 37.9763, 23.7254, PLAKA, 4.2, 9300, ['food', 'history'], {
      ru: ['Bairaktaris', 'Таверна с 1879 года прямо на площади Монастираки: сувлаки, мусака и гиро, стены увешаны фото знаменитых гостей.', 'Это туристический классический адрес — берите гиро-тарелку и смотрите на площадь.'],
      en: ['Bairaktaris', 'A taverna since 1879 right on Monastiraki Square: souvlaki, moussaka and gyros, with walls covered in photos of famous guests.', 'A classic, touristy address — order a gyros plate and watch the square.'],
      es: ['Bairaktaris', 'Una taberna desde 1879 en la plaza Monastiraki: souvlaki, musaka y gyros, con fotos de clientes famosos en las paredes.', 'Un clásico turístico: pide un plato de gyros y mira la plaza.'],
      de: ['Bairaktaris', 'Eine Taverne seit 1879 direkt am Monastiraki-Platz: Souvlaki, Moussaka und Gyros, die Wände voller Fotos berühmter Gäste.', 'Ein touristischer Klassiker – Gyros-Teller bestellen und den Platz beobachten.'],
      fr: ['Bairaktaris', 'Une taverne depuis 1879 sur la place Monastiraki : souvlaki, moussaka et gyros, murs couverts de photos d’hôtes célèbres.', 'Un classique touristique : un plat de gyros en regardant la place.'],
      it: ['Bairaktaris', 'Una taverna dal 1879 in piazza Monastiraki: souvlaki, moussaka e gyros, con le pareti piene di foto di ospiti famosi.', 'Un classico turistico: ordina un piatto di gyros e guarda la piazza.'],
    }, { price: level(2), address: 'Plateia Monastirakiou 2', menu: [
      ['Moussaka', undefined, 'запеканка из баклажанов и фарша под бешамелью|aubergine and mince bake with béchamel|musaka con bechamel|Moussaka mit Béchamel|moussaka à la béchamel|moussaka con besciamella'],
      ['Gyros plate', undefined, 'гиро с питой, картошкой и цацики|gyros with pita, fries and tzatziki|gyros con pita, patatas y tzatziki|Gyros mit Pita, Pommes und Tzatziki|gyros, pita, frites et tzatziki|gyros con pita, patatine e tzatziki'],
    ] }),
    P('atlantikos', 'food', 37.98, 23.726, PLAKA, 4.6, 4300, ['food'], {
      ru: ['Atlantikos', 'Маленькая рыбная таверна в Псири: жареная мелкая рыба, кальмары, осьминог на гриле и салат по доступным ценам.', 'Возьмите на компанию жареную барабульку, анчоусы и кувшин домашнего вина.'],
      en: ['Atlantikos', 'A small seafood taverna in Psyrri: fried small fish, squid, grilled octopus and salad at fair prices.', 'Share fried red mullet, anchovies and a jug of house wine.'],
      es: ['Atlantikos', 'Una pequeña taberna de pescado en Psyrri: pescaíto frito, calamares, pulpo a la parrilla y ensalada a buen precio.', 'Comparte salmonetes, boquerones fritos y una jarra de vino de la casa.'],
      de: ['Atlantikos', 'Eine kleine Fischtaverne in Psyrri: frittierte kleine Fische, Tintenfisch, gegrillter Oktopus und Salat zu fairen Preisen.', 'Frittierte Rotbarben, Sardellen und eine Karaffe Hauswein teilen.'],
      fr: ['Atlantikos', 'Une petite taverne de poisson à Psyrri : petite friture, calmars, poulpe grillé et salade à prix doux.', 'Partagez rougets, anchois frits et un pichet de vin maison.'],
      it: ['Atlantikos', 'Una piccola taverna di pesce a Psyrri: frittura di pesciolini, calamari, polpo alla griglia e insalata a prezzi onesti.', 'Dividi triglie, alici fritte e una caraffa di vino della casa.'],
    }, { price: level(2), address: 'Avliton 10, Psyrri', menu: [
      ['Grilled octopus', undefined, 'осьминог на гриле|grilled octopus|pulpo a la parrilla|gegrillter Oktopus|poulpe grillé|polpo alla griglia'],
      ['Fried red mullet', undefined, 'жареная барабулька|fried red mullet|salmonetes fritos|frittierte Rotbarben|rougets frits|triglie fritte'],
    ] }),
    P('stani', 'food', 37.984, 23.727, MUSEUM, 4.5, 3400, ['food', 'history'], {
      ru: ['Stani', 'Молочная с 1931 года у площади Омония: густой овечий йогурт с тимьяновым мёдом и грецкими орехами, рисовый пудинг.', 'Идеальный греческий завтрак перед Археологическим музеем.'],
      en: ['Stani', 'A dairy shop since 1931 near Omonia: thick sheep’s yoghurt with thyme honey and walnuts, plus rice pudding.', 'The perfect Greek breakfast before the Archaeological Museum.'],
      es: ['Stani', 'Una lechería desde 1931 junto a Omonia: yogur espeso de oveja con miel de tomillo y nueces, y arroz con leche.', 'El desayuno griego perfecto antes del Museo Arqueológico.'],
      de: ['Stani', 'Eine Molkerei seit 1931 nahe Omonia: dicker Schafsjoghurt mit Thymianhonig und Walnüssen, dazu Milchreis.', 'Das perfekte griechische Frühstück vor dem Archäologischen Museum.'],
      fr: ['Stani', 'Une crèmerie depuis 1931 près d’Omonia : yaourt épais de brebis au miel de thym et aux noix, riz au lait.', 'Le petit-déjeuner grec idéal avant le Musée archéologique.'],
      it: ['Stani', 'Una latteria dal 1931 vicino a Omonia: yogurt denso di pecora con miele di timo e noci, e budino di riso.', 'La colazione greca perfetta prima del Museo archeologico.'],
    }, { price: level(1), address: 'Marikas Kotopouli 10', menu: [
      ['Sheep’s yoghurt with honey', undefined, 'овечий йогурт с тимьяновым мёдом и орехами|sheep’s yoghurt with thyme honey and walnuts|yogur de oveja con miel de tomillo y nueces|Schafsjoghurt mit Thymianhonig und Walnüssen|yaourt de brebis, miel de thym et noix|yogurt di pecora con miele di timo e noci'],
      ['Rizogalo', undefined, 'рисовый пудинг с корицей|rice pudding with cinnamon|arroz con leche y canela|Milchreis mit Zimt|riz au lait à la cannelle|budino di riso alla cannella'],
    ] }),
    P('ariston', 'food', 37.9769, 23.733, PLAKA, 4.6, 2700, ['food', 'streetfood'], {
      ru: ['Ariston', 'Лавка пирогов с 1910 года у Синтагмы: слоёные пироги с сыром, шпинатом и мясом из теста, раскатанного вручную.', 'Возьмите тиропиту (с сыром) на ходу — лучший быстрый перекус в центре.'],
      en: ['Ariston', 'A pie shop since 1910 near Syntagma: flaky pies with cheese, spinach and meat in hand-rolled pastry.', 'Grab a tiropita (cheese pie) to go — the best quick bite downtown.'],
      es: ['Ariston', 'Una tienda de empanadas desde 1910 junto a Síntagma: hojaldres de queso, espinacas y carne con masa estirada a mano.', 'Llévate una tiropita (de queso): el mejor tentempié del centro.'],
      de: ['Ariston', 'Ein Pitaladen seit 1910 nahe Syntagma: Blätterteigpasteten mit Käse, Spinat und Fleisch aus handgezogenem Teig.', 'Eine Tiropita (Käsepastete) zum Mitnehmen – der beste schnelle Snack im Zentrum.'],
      fr: ['Ariston', 'Une boutique de tourtes depuis 1910 près de Syntagma : feuilletés au fromage, aux épinards et à la viande, pâte étirée à la main.', 'Prenez une tiropita (au fromage) à emporter, le meilleur en-cas du centre.'],
      it: ['Ariston', 'Una bottega di torte salate dal 1910 vicino a Syntagma: sfoglie al formaggio, spinaci e carne con pasta tirata a mano.', 'Prendi una tiropita (al formaggio) da asporto: il miglior spuntino del centro.'],
    }, { price: level(1), address: 'Voulis 10', menu: [
      ['Tiropita', undefined, 'слоёный пирог с сыром фета|flaky feta cheese pie|empanada de queso feta|Feta-Käsepastete|feuilleté à la feta|torta sfoglia alla feta'],
      ['Spanakopita', undefined, 'пирог со шпинатом|spinach pie|empanada de espinacas|Spinatpastete|feuilleté aux épinards|torta di spinaci'],
    ] }),
    P('feyrouz', 'food', 37.9786, 23.7236, PLAKA, 4.7, 3100, ['food', 'streetfood'], {
      ru: ['Feyrouz', 'Крошечная семейная закусочная в Псири с левантийской выпечкой: лахмаджун, «сфиха» и вегетарианские лепёшки.', 'Лахмаджун с соусом и зеленью — сытно и недорого.'],
      en: ['Feyrouz', 'A tiny family spot in Psyrri for Levantine bakes: lahmajoun, sfiha and vegetarian flatbreads.', 'Lahmajoun with sauce and herbs is filling and cheap.'],
      es: ['Feyrouz', 'Un pequeño local familiar en Psyrri con horneados levantinos: lahmajoun, sfiha y panes vegetarianos.', 'El lahmajoun con salsa y hierbas llena y es barato.'],
      de: ['Feyrouz', 'Ein winziger Familienimbiss in Psyrri mit levantinischem Gebäck: Lahmacun, Sfiha und vegetarische Fladen.', 'Lahmacun mit Sauce und Kräutern – sättigend und günstig.'],
      fr: ['Feyrouz', 'Une petite adresse familiale à Psyrri pour les galettes levantines : lahmajoun, sfiha et pains végétariens.', 'Le lahmajoun sauce et herbes cale bien pour pas cher.'],
      it: ['Feyrouz', 'Un minuscolo locale di famiglia a Psyrri con pane levantino: lahmajoun, sfiha e focacce vegetariane.', 'Il lahmajoun con salsa ed erbe è saziante ed economico.'],
    }, { price: level(1), address: 'Karaiskaki 23', menu: [
      ['Lahmajoun', undefined, 'тонкая лепёшка с пряным фаршем|thin flatbread with spiced mince|pan fino con carne picada especiada|dünnes Fladenbrot mit gewürztem Hack|galette fine à la viande épicée|focaccia sottile con carne speziata'],
      ['Sfiha', undefined, 'мини-пирожки с мясом или шпинатом|small meat or spinach pastries|empanadillas de carne o espinaca|kleine Teigtaschen mit Fleisch oder Spinat|petits chaussons viande ou épinards|fagottini di carne o spinaci'],
    ] }),
    P('little-tree', 'food', 37.9658, 23.724, ACROPOLIS, 4.7, 1900, ['food', 'nomads'], {
      ru: ['Little Tree Books & Coffee', 'Книжная кофейня в тихом районе Кукаки у подножия Акрополя: кофе, выпечка, книги на греческом и английском.', 'Хорошее место начать утро, если живёте в Кукаки.'],
      en: ['Little Tree Books & Coffee', 'A bookshop-café in quiet Koukaki below the Acropolis: coffee, pastries and books in Greek and English.', 'A good start to the morning if you stay in Koukaki.'],
      es: ['Little Tree Books & Coffee', 'Una librería-café en el tranquilo Koukaki bajo la Acrópolis: café, bollería y libros en griego e inglés.', 'Buen sitio para empezar la mañana si te alojas en Koukaki.'],
      de: ['Little Tree Books & Coffee', 'Ein Buchcafé im ruhigen Koukaki unter der Akropolis: Kaffee, Gebäck und Bücher auf Griechisch und Englisch.', 'Ein guter Start in den Morgen, wenn man in Koukaki wohnt.'],
      fr: ['Little Tree Books & Coffee', 'Une librairie-café dans le calme quartier de Koukaki sous l’Acropole : café, pâtisseries et livres en grec et en anglais.', 'Parfait pour commencer la journée si vous logez à Koukaki.'],
      it: ['Little Tree Books & Coffee', 'Una libreria-caffè nel tranquillo Koukaki sotto l’Acropoli: caffè, dolci e libri in greco e inglese.', 'Ottimo per iniziare la mattina se alloggi a Koukaki.'],
    }, { price: level(1), address: 'Kavalloti 2, Koukaki', menu: [
      ['Freddo espresso', undefined, 'холодный эспрессо по-гречески|Greek iced espresso|espresso frío griego|griechischer Eis-Espresso|espresso glacé grec|espresso freddo greco'],
      ['Pastry', undefined, 'выпечка дня|pastry of the day|bollería del día|Gebäck des Tages|pâtisserie du jour|dolce del giorno'],
    ] }),
  ],
  routes: [
    D(['=athens-acropolis', '=athens-acropolis-museum', '=athens-anafiotika', 'plaka', 'kostas-souvlaki', 'roman-agora', 'ancient-agora', 'monastiraki-square', 'atlantikos'],
      'Акрополь, Плака и древние агоры|The Acropolis, Plaka and the ancient agoras|La Acrópolis, Plaka y las ágoras|Akropolis, Plaka und antike Agoren|L’Acropole, Plaka et les agoras|Acropoli, Plaka e le agorà'),
    D(['stani', 'national-archaeological-museum', 'diporto', 'syntagma-evzones', 'national-garden', 'temple-of-olympian-zeus', '=athens-panathenaic-stadium', '=athens-lycabettus-hill', '=athens-athinaikon'],
      'Археологический музей, Синтагма и Ликавитос|Archaeological Museum, Syntagma and Lycabettus|Museo Arqueológico, Síntagma y Licabeto|Archäologisches Museum, Syntagma und Lykabettus|Musée archéologique, Syntagma et Lycabette|Museo archeologico, Syntagma e Licabetto'),
    D(['little-tree', 'benaki-museum', 'ta-karamanlidika', 'lukumades', 'cape-sounion', 'bairaktaris'],
      'Бенаки и закат на мысе Сунион|The Benaki and sunset at Cape Sounion|El Benaki y atardecer en Sunión|Benaki und Sonnenuntergang am Kap Sounion|Le Benaki et coucher de soleil au cap Sounion|Il Benaki e tramonto a Capo Sounion'),
  ],
};

export default pack;
