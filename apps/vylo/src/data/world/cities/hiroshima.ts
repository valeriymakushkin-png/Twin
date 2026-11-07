import type { CityPack } from '../types';
import { free, level, makeDay, makePlace } from './_kit.ts';

const P = makePlace('hiroshima');
const D = makeDay('hiroshima');
const DOME = 'RclFJl1UP8U';
const TORII = 'MZcfSkgXVxI';
const FOOD = 'l2BIHwGYJso';
const MUSEUM = 'yyALnGXFDF4';
const CITY = 'Yrpj7fOqw0E';
const GARDEN = 'wzimcgu4n_A';

const pack: CityPack = {
  country: 'JP',
  city: 'hiroshima',
  places: [
    P('childrens-peace-monument', 'attraction', 34.3935, 132.4524, DOME, 4.7, 9800, ['history'], {
      ru: ['Детский памятник мира', 'Памятник в Парке мира в честь Садако Сасаки и детей — жертв бомбардировки; вокруг — тысячи бумажных журавликов со всего мира.', 'Принесите своего журавлика — их оставляют в стеклянных павильонах рядом.'],
      en: ['Children’s Peace Monument', 'A Peace Park memorial to Sadako Sasaki and the children killed by the bomb, surrounded by thousands of paper cranes from around the world.', 'Bring your own paper crane — they’re left in the glass booths nearby.'],
      es: ['Monumento a la Paz de los Niños', 'Un memorial en el Parque de la Paz a Sadako Sasaki y los niños víctimas de la bomba, rodeado de miles de grullas de papel de todo el mundo.', 'Trae tu propia grulla: se dejan en las vitrinas de al lado.'],
      de: ['Kinder-Friedensdenkmal', 'Ein Denkmal im Friedenspark für Sadako Sasaki und die von der Bombe getöteten Kinder, umgeben von Tausenden Papierkranichen aus aller Welt.', 'Einen eigenen Papierkranich mitbringen – sie werden in den Glasvitrinen daneben abgelegt.'],
      fr: ['Monument de la paix des enfants', 'Un mémorial du parc de la Paix dédié à Sadako Sasaki et aux enfants tués par la bombe, entouré de milliers de grues en papier du monde entier.', 'Apportez votre grue : on les dépose dans les vitrines voisines.'],
      it: ['Monumento alla pace dei bambini', 'Un memoriale nel Parco della pace per Sadako Sasaki e i bambini uccisi dalla bomba, circondato da migliaia di gru di carta da tutto il mondo.', 'Porta la tua gru: si lasciano nelle teche di vetro accanto.'],
    }, { price: free }),
    P('hiroshima-castle', 'attraction', 34.4027, 132.4594, CITY, 4.2, 18000, ['castles', 'history'], {
      ru: ['Замок Хиросима', 'Замок «Карпа» XVI века: главная башня — реконструкция 1958 года, рвы и восстановленные ворота Ниномару вокруг.', 'С 22 марта 2026 года внутрь башни не пускают; территория и Ниномару открыты, а башню подсвечивают по вечерам.'],
      en: ['Hiroshima Castle', 'The 16th-century “Carp Castle”: the keep is a 1958 reconstruction, ringed by moats and the rebuilt Ninomaru gate.', 'Since 22 March 2026 the keep’s interior is closed; the grounds and Ninomaru stay open and the keep is lit at night.'],
      es: ['Castillo de Hiroshima', 'El «castillo de la Carpa» del siglo XVI: el torreón es una reconstrucción de 1958, rodeado de fosos y de la puerta Ninomaru reconstruida.', 'Desde el 22 de marzo de 2026 el interior del torreón está cerrado; el recinto y Ninomaru siguen abiertos y de noche se ilumina.'],
      de: ['Burg Hiroshima', 'Die „Karpfenburg“ aus dem 16. Jh.: der Hauptturm ist ein Nachbau von 1958, umgeben von Gräben und dem wiederaufgebauten Ninomaru-Tor.', 'Seit 22. März 2026 ist das Turminnere geschlossen; Gelände und Ninomaru bleiben offen, abends wird der Turm beleuchtet.'],
      fr: ['Château de Hiroshima', 'Le « château de la Carpe » du XVIe : le donjon est une reconstruction de 1958, entouré de douves et de la porte Ninomaru reconstruite.', 'Depuis le 22 mars 2026, l’intérieur du donjon est fermé ; le parc et Ninomaru restent ouverts et le donjon est illuminé le soir.'],
      it: ['Castello di Hiroshima', 'Il «castello della Carpa» del XVI secolo: il mastio è una ricostruzione del 1958, circondato da fossati e dalla porta Ninomaru ricostruita.', 'Dal 22 marzo 2026 l’interno del mastio è chiuso; il parco e Ninomaru restano aperti e la sera il mastio è illuminato.'],
    }, { price: free }),
    P('orizuru-tower', 'attraction', 34.3958, 132.454, DOME, 4.4, 6200, ['views', 'photo'], {
      ru: ['Orizuru Tower', 'Башня рядом с Атомным куполом: открытая смотровая крыша над Парком мира и стеклянная стена, куда бросают сложенных журавликов.', 'Спускайтесь пешком по спиральному пандусу — по пути стены с рисунками.'],
      en: ['Orizuru Tower', 'A tower next to the Atomic Bomb Dome: an open rooftop deck above the Peace Park and a glass wall where you drop paper cranes you fold.', 'Walk down the spiral ramp — its walls are covered in artwork.'],
      es: ['Orizuru Tower', 'Una torre junto a la Cúpula: azotea abierta sobre el Parque de la Paz y un muro de cristal donde dejas caer las grullas que pliegas.', 'Baja a pie por la rampa en espiral, decorada con arte.'],
      de: ['Orizuru Tower', 'Ein Turm neben dem Atombombendom: offene Dachterrasse über dem Friedenspark und eine Glaswand, in die man gefaltete Kraniche fallen lässt.', 'Zu Fuß über die Spiralrampe hinuntergehen – die Wände sind bemalt.'],
      fr: ['Orizuru Tower', 'Une tour voisine du Dôme : toit-terrasse ouvert sur le parc de la Paix et mur de verre où l’on lâche les grues qu’on a pliées.', 'Redescendez par la rampe en spirale, couverte d’œuvres.'],
      it: ['Orizuru Tower', 'Una torre accanto alla Cupola: terrazza aperta sul Parco della pace e una parete di vetro dove lasci cadere le gru che pieghi.', 'Scendi a piedi dalla rampa a spirale, decorata di opere.'],
    }, { spot: 'insta', price: level(2), address: '1-2-1 Otemachi, Naka' }),
    P('hiroshima-museum-of-art', 'attraction', 34.3987, 132.4555, MUSEUM, 4.4, 3400, ['museums', 'art'], {
      ru: ['Художественный музей Хиросимы', 'Круглое здание в парке у замка с собранием французских импрессионистов — Моне, Ренуар, Ван Гог — и японской живописи.', 'Небольшой и спокойный — хватит часа.'],
      en: ['Hiroshima Museum of Art', 'A round building in the park by the castle with French Impressionists — Monet, Renoir, Van Gogh — and Japanese painting.', 'Small and calm — an hour is enough.'],
      es: ['Museo de Arte de Hiroshima', 'Un edificio circular en el parque junto al castillo con impresionistas franceses —Monet, Renoir, Van Gogh— y pintura japonesa.', 'Pequeño y tranquilo: basta una hora.'],
      de: ['Kunstmuseum Hiroshima', 'Ein Rundbau im Park an der Burg mit französischen Impressionisten – Monet, Renoir, Van Gogh – und japanischer Malerei.', 'Klein und ruhig – eine Stunde genügt.'],
      fr: ['Musée d’art de Hiroshima', 'Un bâtiment circulaire dans le parc du château, avec des impressionnistes français — Monet, Renoir, Van Gogh — et de la peinture japonaise.', 'Petit et calme : une heure suffit.'],
      it: ['Museo d’arte di Hiroshima', 'Un edificio circolare nel parco del castello con impressionisti francesi — Monet, Renoir, Van Gogh — e pittura giapponese.', 'Piccolo e tranquillo: basta un’ora.'],
    }, { price: level(1) }),
    P('mitaki-dera', 'attraction', 34.4146, 132.43, GARDEN, 4.5, 3100, ['temples', 'waterfalls', 'nature'], {
      ru: ['Митаки-дэра', 'Горный храм IX века с тремя водопадами, мхом и сотнями статуй Дзидзо; его вода используется на церемонии памяти 6 августа.', 'Особенно красиво в ноябре, когда краснеют клёны, — и всё равно малолюдно.'],
      en: ['Mitaki-dera', 'A 9th-century hillside temple with three waterfalls, moss and hundreds of Jizō statues; its water is offered at the 6 August memorial.', 'Loveliest in November when the maples turn — and still uncrowded.'],
      es: ['Mitaki-dera', 'Un templo del siglo IX en la ladera con tres cascadas, musgo y cientos de estatuas Jizō; su agua se ofrece en la ceremonia del 6 de agosto.', 'Lo más bonito es en noviembre, con los arces rojos, y aun así hay poca gente.'],
      de: ['Mitaki-dera', 'Ein Hangtempel aus dem 9. Jh. mit drei Wasserfällen, Moos und Hunderten Jizō-Statuen; sein Wasser wird bei der Gedenkfeier am 6. August geopfert.', 'Am schönsten im November, wenn der Ahorn sich färbt – und trotzdem ruhig.'],
      fr: ['Mitaki-dera', 'Un temple du IXe siècle à flanc de colline, avec trois cascades, de la mousse et des centaines de Jizō ; son eau est offerte lors de la cérémonie du 6 août.', 'Plus beau en novembre, quand les érables rougissent — et toujours peu fréquenté.'],
      it: ['Mitaki-dera', 'Un tempio del IX secolo sulla collina con tre cascate, muschio e centinaia di statue Jizō; la sua acqua viene offerta alla cerimonia del 6 agosto.', 'Il momento migliore è novembre, con gli aceri rossi — e resta poco affollato.'],
    }, { spot: 'hidden' }),
    P('itsukushima-shrine', 'attraction', 34.2959, 132.3199, TORII, 4.6, 45000, ['temples', 'unesco', 'photo'], {
      ru: ['Святилище Ицукусима', 'Святилище на сваях над водой, получившее нынешний вид при Тайра-но Киёмори в 1168 году; объект ЮНЕСКО.', 'Сверьтесь с таблицей приливов: в прилив святилище «плывёт», в отлив можно дойти до ворот.'],
      en: ['Itsukushima Shrine', 'A shrine on stilts over the water, given its present form under Taira no Kiyomori in 1168; a UNESCO site.', 'Check the tide table: at high tide the shrine “floats”, at low tide you can walk to the gate.'],
      es: ['Santuario de Itsukushima', 'Un santuario sobre pilotes en el agua, con su forma actual desde Taira no Kiyomori en 1168; Patrimonio de la UNESCO.', 'Mira la tabla de mareas: con marea alta «flota», con marea baja puedes llegar al torii.'],
      de: ['Itsukushima-Schrein', 'Ein Schrein auf Pfählen über dem Wasser, seit Taira no Kiyomori 1168 in heutiger Form; UNESCO-Welterbe.', 'Gezeitentabelle prüfen: bei Flut „schwimmt“ der Schrein, bei Ebbe läuft man zum Tor.'],
      fr: ['Sanctuaire d’Itsukushima', 'Un sanctuaire sur pilotis au-dessus de l’eau, dans sa forme actuelle depuis Taira no Kiyomori en 1168 ; classé à l’UNESCO.', 'Consultez les marées : à marée haute il « flotte », à marée basse on marche jusqu’au torii.'],
      it: ['Santuario di Itsukushima', 'Un santuario su palafitte sull’acqua, nella forma attuale dai tempi di Taira no Kiyomori (1168); patrimonio UNESCO.', 'Controlla le maree: con l’alta marea il santuario «galleggia», con la bassa si arriva al torii a piedi.'],
    }, { spot: 'insta', price: level(1), hours: '06:30–18:00' }),
    P('daisho-in', 'attraction', 34.2919, 132.3203, TORII, 4.7, 9600, ['temples', 'photo'], {
      ru: ['Дайсё-ин', 'Храм у подножия горы Мисэн: молитвенные барабаны вдоль лестницы, сотни статуй учеников Будды и пещера с огоньками.', 'Крутите барабаны, поднимаясь по ступеням, — считается, что это как прочитать сутру.'],
      en: ['Daishō-in', 'A temple at the foot of Mount Misen: prayer wheels along the steps, hundreds of statues of the Buddha’s disciples and a lantern-lit cave.', 'Spin the wheels as you climb — it’s said to equal reading a sutra.'],
      es: ['Daishō-in', 'Un templo al pie del monte Misen: ruedas de oración en la escalera, cientos de estatuas de discípulos de Buda y una cueva con farolillos.', 'Haz girar las ruedas al subir: dicen que equivale a leer un sutra.'],
      de: ['Daishō-in', 'Ein Tempel am Fuß des Misen: Gebetsmühlen an der Treppe, Hunderte Statuen der Buddha-Schüler und eine laternenbeleuchtete Höhle.', 'Beim Aufstieg die Mühlen drehen – das soll dem Lesen eines Sutras gleichen.'],
      fr: ['Daishō-in', 'Un temple au pied du mont Misen : moulins à prières le long des marches, des centaines de statues de disciples du Bouddha et une grotte aux lanternes.', 'Faites tourner les moulins en montant : cela vaudrait la lecture d’un sutra.'],
      it: ['Daishō-in', 'Un tempio ai piedi del monte Misen: ruote di preghiera lungo la scala, centinaia di statue dei discepoli del Buddha e una grotta illuminata da lanterne.', 'Gira le ruote salendo: si dice valga come leggere un sutra.'],
    }, { spot: 'insta', price: free }),
    P('senjokaku-pagoda', 'attraction', 34.2975, 132.3215, TORII, 4.4, 7100, ['temples', 'history', 'architecture'], {
      ru: ['Сэндзёкаку и пятиярусная пагода', 'Огромный незаконченный зал на 857 татами, заложенный Тоётоми Хидэёси в 1587 году, и красная пагода 1407 года рядом.', 'Посидите на полу зала — со стороны моря дует ветерок и видна бухта.'],
      en: ['Senjōkaku and the Five-Storey Pagoda', 'A vast unfinished 857-tatami hall begun by Toyotomi Hideyoshi in 1587, beside a red pagoda from 1407.', 'Sit on the hall’s floor — a sea breeze blows through and you can see the bay.'],
      es: ['Senjōkaku y la pagoda de cinco pisos', 'Un enorme salón inacabado de 857 tatamis iniciado por Toyotomi Hideyoshi en 1587, junto a una pagoda roja de 1407.', 'Siéntate en el suelo del salón: entra brisa del mar y se ve la bahía.'],
      de: ['Senjōkaku und fünfstöckige Pagode', 'Eine riesige unvollendete Halle mit 857 Tatami, 1587 von Toyotomi Hideyoshi begonnen, neben einer roten Pagode von 1407.', 'Auf dem Hallenboden sitzen – eine Meeresbrise weht und man sieht die Bucht.'],
      fr: ['Senjōkaku et pagode à cinq étages', 'Une immense salle inachevée de 857 tatamis commencée par Toyotomi Hideyoshi en 1587, près d’une pagode rouge de 1407.', 'Asseyez-vous sur le plancher : la brise marine passe et l’on voit la baie.'],
      it: ['Senjōkaku e pagoda a cinque piani', 'Un’enorme sala incompiuta di 857 tatami iniziata da Toyotomi Hideyoshi nel 1587, accanto a una pagoda rossa del 1407.', 'Siediti sul pavimento della sala: entra la brezza marina e si vede la baia.'],
    }, { price: level(1) }),
    P('momijidani-park', 'nature', 34.291, 132.325, GARDEN, 4.5, 5200, ['nature', 'hiking'], {
      ru: ['Парк Момидзидани', 'Кленовая долина у ручья на Миядзиме, где пасутся олени; отсюда начинается путь к канатной дороге на Мисэн.', 'Пик красок — середина–конец ноября.'],
      en: ['Momijidani Park', 'A maple valley along a stream on Miyajima where deer graze; the way up to the Misen ropeway starts here.', 'Colours peak in mid-to-late November.'],
      es: ['Parque Momijidani', 'Un valle de arces junto a un arroyo en Miyajima donde pastan ciervos; aquí empieza el camino al teleférico del Misen.', 'Los colores culminan a mediados y finales de noviembre.'],
      de: ['Momijidani-Park', 'Ein Ahorntal am Bach auf Miyajima mit grasenden Hirschen; hier beginnt der Weg zur Misen-Seilbahn.', 'Die Farben sind Mitte bis Ende November am schönsten.'],
      fr: ['Parc Momijidani', 'Un vallon d’érables le long d’un ruisseau à Miyajima, où paissent les cerfs ; d’ici part le chemin du téléphérique du Misen.', 'Les couleurs culminent mi-fin novembre.'],
      it: ['Parco Momijidani', 'Una valle di aceri lungo un torrente a Miyajima dove pascolano i cervi; da qui parte la via per la funivia del Misen.', 'I colori sono al culmine a metà-fine novembre.'],
    }, { price: free }),
    P('kintaikyo', 'attraction', 34.1675, 132.178, CITY, 4.5, 12000, ['history', 'architecture', 'photo'], {
      ru: ['Мост Кинтай (Ивакуни)', 'Деревянный мост из пяти арок через реку Нисики, впервые построенный в 1673 году; над ним — замок Ивакуни на горе.', 'Купите комбинированный билет на мост и канатную дорогу к замку.'],
      en: ['Kintaikyō Bridge (Iwakuni)', 'A five-arch wooden bridge over the Nishiki River, first built in 1673, with Iwakuni Castle on the hill above.', 'Buy the combined ticket for the bridge and the ropeway up to the castle.'],
      es: ['Puente Kintaikyō (Iwakuni)', 'Un puente de madera de cinco arcos sobre el río Nishiki, construido por primera vez en 1673, con el castillo de Iwakuni en el monte.', 'Compra el billete combinado de puente y teleférico al castillo.'],
      de: ['Kintai-Brücke (Iwakuni)', 'Eine fünfbogige Holzbrücke über den Nishiki, erstmals 1673 gebaut, mit der Burg Iwakuni auf dem Berg darüber.', 'Das Kombiticket für Brücke und Seilbahn zur Burg kaufen.'],
      fr: ['Pont Kintaikyō (Iwakuni)', 'Un pont de bois à cinq arches sur la rivière Nishiki, construit pour la première fois en 1673, sous le château d’Iwakuni.', 'Prenez le billet combiné pont + téléphérique vers le château.'],
      it: ['Ponte Kintaikyō (Iwakuni)', 'Un ponte di legno a cinque arcate sul fiume Nishiki, costruito per la prima volta nel 1673, col castello di Iwakuni sul colle.', 'Prendi il biglietto combinato ponte + funivia per il castello.'],
    }, { spot: 'insta', price: level(1) }),
    P('okunoshima', 'nature', 34.3086, 132.9933, GARDEN, 4.4, 8800, ['islands', 'wildlife', 'history'], {
      ru: ['Окуносима («остров кроликов»)', 'Островок во Внутреннем море, где живут сотни свободных кроликов; в войну здесь тайно делали отравляющий газ — об этом рассказывает музей.', 'Кормите кроликов только специальным кормом, а не человеческой едой.'],
      en: ['Ōkunoshima (Rabbit Island)', 'A small Inland Sea island home to hundreds of free-roaming rabbits; in the war it secretly produced poison gas, as its museum explains.', 'Feed the rabbits only proper rabbit food, never human snacks.'],
      es: ['Ōkunoshima (isla de los conejos)', 'Una islita del mar Interior con cientos de conejos en libertad; en la guerra se fabricó aquí gas venenoso en secreto, como cuenta su museo.', 'Da a los conejos solo comida para conejos, nunca la tuya.'],
      de: ['Ōkunoshima (Haseninsel)', 'Eine kleine Insel in der Seto-Inlandsee mit Hunderten frei lebenden Kaninchen; im Krieg wurde hier heimlich Giftgas produziert, wie das Museum erzählt.', 'Die Kaninchen nur mit Kaninchenfutter füttern, nie mit Snacks.'],
      fr: ['Ōkunoshima (île aux lapins)', 'Une petite île de la mer Intérieure peuplée de centaines de lapins en liberté ; pendant la guerre, on y produisait en secret du gaz toxique, comme l’explique son musée.', 'Ne donnez aux lapins que de la nourriture pour lapins.'],
      it: ['Ōkunoshima (isola dei conigli)', 'Un’isoletta del Mare interno con centinaia di conigli liberi; in guerra vi si produceva in segreto gas tossico, come racconta il suo museo.', 'Dai ai conigli solo cibo per conigli, mai snack umani.'],
    }, { spot: 'insta', price: free }),
    P('yamato-museum', 'attraction', 34.2414, 132.5557, MUSEUM, 4.5, 14000, ['museums', 'history'], {
      ru: ['Музей «Ямато» (Курэ)', 'Морской музей в портовом Курэ с 26-метровой моделью линкора «Ямато» в масштабе 1:10; открылся после реконструкции в апреле 2026 года.', 'Напротив стоит настоящая подводная лодка — музей JMSDF «Тэцу-но кудзира», вход бесплатный.'],
      en: ['Yamato Museum (Kure)', 'A maritime museum in the port of Kure with a 26 m, 1:10 model of the battleship Yamato; it reopened after renovation in April 2026.', 'Across the road is a real submarine — the free JMSDF “Iron Whale” museum.'],
      es: ['Museo Yamato (Kure)', 'Un museo marítimo en el puerto de Kure con una maqueta de 26 m (1:10) del acorazado Yamato; reabrió tras su renovación en abril de 2026.', 'Enfrente hay un submarino de verdad: el museo gratuito «Ballena de Hierro».'],
      de: ['Yamato-Museum (Kure)', 'Ein Marinemuseum im Hafen Kure mit einem 26 m langen 1:10-Modell des Schlachtschiffs Yamato; nach Renovierung im April 2026 wiedereröffnet.', 'Gegenüber liegt ein echtes U-Boot – das kostenlose Museum „Eiserner Wal“.'],
      fr: ['Musée Yamato (Kure)', 'Un musée maritime du port de Kure avec une maquette de 26 m (1/10) du cuirassé Yamato ; rouvert après rénovation en avril 2026.', 'En face, un vrai sous-marin : le musée gratuit « Baleine de fer ».'],
      it: ['Museo Yamato (Kure)', 'Un museo marittimo nel porto di Kure con un modello di 26 m (1:10) della corazzata Yamato; riaperto dopo il restauro ad aprile 2026.', 'Di fronte c’è un vero sottomarino: il museo gratuito «Balena di ferro».'],
    }, { price: level(1) }),
    P('nagataya', 'food', 34.395, 132.456, FOOD, 4.4, 7600, ['food'], {
      ru: ['Нагатая', 'Окономияки по-хиросимски в двух шагах от Атомного купола: слои теста, капусты, лапши и яйца на плите.', 'Очередь движется быстро; садитесь за стойку у плиты.'],
      en: ['Nagataya', 'Hiroshima-style okonomiyaki a short walk from the Atomic Bomb Dome: layers of batter, cabbage, noodles and egg on the griddle.', 'The queue moves fast; sit at the griddle counter.'],
      es: ['Nagataya', 'Okonomiyaki al estilo de Hiroshima a pocos pasos de la Cúpula: capas de masa, col, fideos y huevo en la plancha.', 'La cola avanza rápido; siéntate en la barra de la plancha.'],
      de: ['Nagataya', 'Okonomiyaki nach Hiroshima-Art nahe dem Atombombendom: Schichten aus Teig, Kohl, Nudeln und Ei auf der Platte.', 'Die Schlange geht schnell; an den Tresen an der Platte setzen.'],
      fr: ['Nagataya', 'Okonomiyaki à la mode de Hiroshima près du Dôme : couches de pâte, chou, nouilles et œuf sur la plaque.', 'La file avance vite ; asseyez-vous au comptoir de la plaque.'],
      it: ['Nagataya', 'Okonomiyaki alla Hiroshima a due passi dalla Cupola: strati di pastella, cavolo, noodle e uovo sulla piastra.', 'La fila scorre veloce; siediti al bancone della piastra.'],
    }, { price: level(1), address: '1-7-19 Otemachi, Naka', menu: [
      ['Okonomiyaki with soba', undefined, 'окономияки с гречневой лапшой|okonomiyaki with soba noodles|okonomiyaki con fideos soba|Okonomiyaki mit Soba|okonomiyaki aux soba|okonomiyaki con soba'],
      ['Okonomiyaki with udon', undefined, 'окономияки с удоном|okonomiyaki with udon|okonomiyaki con udon|Okonomiyaki mit Udon|okonomiyaki aux udon|okonomiyaki con udon'],
    ] }),
    P('hassei', 'food', 34.3881, 132.4605, FOOD, 4.4, 4900, ['food'], {
      ru: ['Хассэй', 'Любимая горожанами окономияки в Нака: высокая, воздушная, с горой капусты и хрустящей лапшой.', 'Одной порции хватает на двоих — заказывайте с запасом осторожно.'],
      en: ['Hassei', 'A locals’ favourite okonomiyaki house in Naka: tall and fluffy, piled with cabbage and crisp noodles.', 'One portion can feed two — order cautiously.'],
      es: ['Hassei', 'Un okonomiyaki favorito de los locales en Naka: alto y esponjoso, con montaña de col y fideos crujientes.', 'Una ración puede dar para dos: pide con prudencia.'],
      de: ['Hassei', 'Ein Lieblings-Okonomiyaki der Einheimischen in Naka: hoch und fluffig, mit Bergen von Kohl und knusprigen Nudeln.', 'Eine Portion reicht für zwei – vorsichtig bestellen.'],
      fr: ['Hassei', 'Un okonomiyaki chéri des habitants à Naka : haut et aérien, avec une montagne de chou et des nouilles croustillantes.', 'Une portion suffit pour deux : commandez prudemment.'],
      it: ['Hassei', 'Un okonomiyaki amato dai locali a Naka: alto e soffice, con una montagna di cavolo e noodle croccanti.', 'Una porzione basta per due: ordina con prudenza.'],
    }, { price: level(1), address: '4-17 Fujimicho, Naka', menu: [
      ['Soba-iri okonomiyaki', undefined, 'окономияки с лапшой и свининой|okonomiyaki with noodles and pork|okonomiyaki con fideos y cerdo|Okonomiyaki mit Nudeln und Schwein|okonomiyaki aux nouilles et porc|okonomiyaki con noodle e maiale'],
      ['Tokusei', undefined, 'с кальмаром, креветкой и яйцом|with squid, prawn and egg|con calamar, gamba y huevo|mit Tintenfisch, Garnele und Ei|au calmar, crevette et œuf|con calamaro, gambero e uovo'],
    ] }),
    P('mitchan-sohonten', 'food', 34.395, 132.465, FOOD, 4.2, 5600, ['food', 'history'], {
      ru: ['Миттян Сохонтэн', 'Одна из старейших окономияки Хиросимы (с 1950 года), которая помогла сложиться местному «слоёному» стилю.', 'Попробуйте с сыром или с зелёным луком сверху.'],
      en: ['Mitchan Sohonten', 'One of Hiroshima’s oldest okonomiyaki houses (since 1950), which helped shape the local layered style.', 'Try it with cheese or topped with spring onion.'],
      es: ['Mitchan Sohonten', 'Uno de los okonomiyaki más antiguos de Hiroshima (desde 1950), que ayudó a definir el estilo local por capas.', 'Pruébalo con queso o con cebolleta por encima.'],
      de: ['Mitchan Sohonten', 'Eines der ältesten Okonomiyaki-Lokale Hiroshimas (seit 1950), das den geschichteten Lokalstil mitprägte.', 'Mit Käse oder Frühlingszwiebeln obendrauf probieren.'],
      fr: ['Mitchan Sohonten', 'L’un des plus anciens okonomiyaki de Hiroshima (depuis 1950), qui a contribué au style local en couches.', 'Goûtez-le au fromage ou à la ciboule.'],
      it: ['Mitchan Sohonten', 'Uno degli okonomiyaki più antichi di Hiroshima (dal 1950), che ha contribuito allo stile locale a strati.', 'Provalo col formaggio o col cipollotto sopra.'],
    }, { price: level(1), address: '6-7 Hatchobori, Naka', menu: [
      ['Okonomiyaki', undefined, 'окономияки по-хиросимски|Hiroshima-style okonomiyaki|okonomiyaki de Hiroshima|Okonomiyaki nach Hiroshima-Art|okonomiyaki de Hiroshima|okonomiyaki alla Hiroshima'],
      ['Negi topping', undefined, 'сверху зелёный лук|topped with spring onion|con cebolleta encima|mit Frühlingszwiebeln|garni de ciboule|con cipollotto sopra'],
    ] }),
    P('kakiya', 'food', 34.297, 132.3215, TORII, 4.5, 3900, ['food'], {
      ru: ['Kakiya', 'Устричный бар на улице Омотэсандо на Миядзиме: местные устрицы жареные, на гриле и в рисе, с подобранным саке.', 'Возьмите сет «устрицы пятью способами».'],
      en: ['Kakiya', 'An oyster bar on Miyajima’s Omotesando: local oysters fried, grilled and over rice, with matched sake.', 'Get the set with oysters done several ways.'],
      es: ['Kakiya', 'Un bar de ostras en la Omotesando de Miyajima: ostras locales fritas, a la parrilla y sobre arroz, con sake a juego.', 'Pide el menú con ostras de varias maneras.'],
      de: ['Kakiya', 'Eine Austernbar an Miyajimas Omotesando: lokale Austern frittiert, gegrillt und auf Reis, mit passendem Sake.', 'Das Set mit Austern in mehreren Zubereitungen nehmen.'],
      fr: ['Kakiya', 'Un bar à huîtres sur l’Omotesando de Miyajima : huîtres locales frites, grillées et sur riz, avec saké assorti.', 'Prenez le menu d’huîtres préparées de plusieurs façons.'],
      it: ['Kakiya', 'Un oyster bar sull’Omotesando di Miyajima: ostriche locali fritte, alla griglia e sul riso, con sake abbinato.', 'Prendi il set con ostriche in più preparazioni.'],
    }, { price: level(2), menu: [
      ['Kaki-fry', undefined, 'устрицы в панировке|breaded fried oysters|ostras empanadas fritas|panierte frittierte Austern|huîtres panées frites|ostriche impanate fritte'],
      ['Yaki-gaki', undefined, 'устрицы на гриле|grilled oysters|ostras a la parrilla|gegrillte Austern|huîtres grillées|ostriche alla griglia'],
    ] }),
    P('ueno-anagomeshi', 'food', 34.3115, 132.303, FOOD, 4.4, 6200, ['food', 'history'], {
      ru: ['Анагомэси Уэно', 'Лавка с 1901 года у причала Миядзимагути: морской угорь анаго на гриле поверх риса, пропитанного бульоном из его костей.', 'Купите бэнто навынос и съешьте на пароме — так делают местные.'],
      en: ['Anagomeshi Ueno', 'A shop by Miyajimaguchi pier since 1901: grilled conger eel over rice cooked in stock from its bones.', 'Buy a bentō to go and eat it on the ferry, like locals do.'],
      es: ['Anagomeshi Ueno', 'Una casa junto al muelle de Miyajimaguchi desde 1901: congrio a la parrilla sobre arroz cocido en caldo de sus espinas.', 'Compra un bentō para llevar y cómelo en el ferri, como los locales.'],
      de: ['Anagomeshi Ueno', 'Ein Laden am Pier von Miyajimaguchi seit 1901: gegrillter Meeraal auf Reis, gegart in Fond aus seinen Gräten.', 'Ein Bentō mitnehmen und auf der Fähre essen – wie die Einheimischen.'],
      fr: ['Anagomeshi Ueno', 'Une maison près de l’embarcadère de Miyajimaguchi depuis 1901 : congre grillé sur un riz cuit dans un bouillon de ses arêtes.', 'Prenez un bentō à emporter et mangez-le sur le ferry, comme les locaux.'],
      it: ['Anagomeshi Ueno', 'Un locale vicino al molo di Miyajimaguchi dal 1901: grongo alla griglia su riso cotto nel brodo delle sue lische.', 'Prendi un bentō da asporto e mangialo sul traghetto, come i locali.'],
    }, { price: level(2), menu: [
      ['Anagomeshi', undefined, 'угорь анаго на рисе|conger eel over rice|congrio sobre arroz|Meeraal auf Reis|congre sur riz|grongo su riso'],
      ['Anagomeshi bentō', undefined, 'бэнто с угрём навынос|conger eel bentō to go|bentō de congrio para llevar|Meeraal-Bentō zum Mitnehmen|bentō de congre à emporter|bentō di grongo da asporto'],
    ] }),
    P('fujitaya', 'food', 34.2938, 132.3205, TORII, 4.4, 2300, ['food'], {
      ru: ['Фудзитая', 'Небольшой ресторан на Миядзиме по дороге к Дайсё-ин, где подают анагомэси — угря на рисе.', 'Удобная остановка на обед по дороге к Дайсё-ин.'],
      en: ['Fujitaya', 'A small Miyajima restaurant on the way to Daishō-in serving anagomeshi — conger eel over rice.', 'A handy lunch stop on the way up to Daishō-in.'],
      es: ['Fujitaya', 'Un pequeño restaurante de Miyajima camino de Daishō-in que sirve anagomeshi, congrio sobre arroz.', 'Una parada práctica para comer camino de Daishō-in.'],
      de: ['Fujitaya', 'Ein kleines Lokal auf Miyajima auf dem Weg zum Daishō-in mit Anagomeshi – Meeraal auf Reis.', 'Ein praktischer Mittagsstopp auf dem Weg zum Daishō-in.'],
      fr: ['Fujitaya', 'Un petit restaurant de Miyajima sur le chemin du Daishō-in, qui sert l’anagomeshi, congre sur riz.', 'Une halte pratique pour déjeuner en montant au Daishō-in.'],
      it: ['Fujitaya', 'Un piccolo ristorante di Miyajima sulla strada per il Daishō-in che serve anagomeshi, grongo su riso.', 'Una sosta comoda per pranzo sulla strada per il Daishō-in.'],
    }, { price: level(2), menu: [
      ['Anagomeshi', undefined, 'угорь анаго на рисе|conger eel over rice|congrio sobre arroz|Meeraal auf Reis|congre sur riz|grongo su riso'],
      ['Clear soup', undefined, 'прозрачный суп|clear soup|sopa clara|klare Suppe|bouillon clair|brodo chiaro'],
    ] }),
    P('yakigaki-no-hayashi', 'food', 34.2966, 132.3209, TORII, 4.3, 3400, ['food', 'streetfood'], {
      ru: ['Якигаки-но Хаяси', 'Ресторан на Омотэсандо Миядзимы, где крупные местные устрицы жарят на гриле прямо у входа.', 'Можно взять пару устриц навынос с прилавка на улице.'],
      en: ['Yakigaki no Hayashi', 'A restaurant on Miyajima’s Omotesando grilling big local oysters right at the entrance.', 'You can grab a couple of oysters to go from the street counter.'],
      es: ['Yakigaki no Hayashi', 'Un restaurante en la Omotesando de Miyajima que asa grandes ostras locales en la misma entrada.', 'Puedes llevarte un par de ostras del mostrador de la calle.'],
      de: ['Yakigaki no Hayashi', 'Ein Lokal an Miyajimas Omotesando, das große lokale Austern direkt am Eingang grillt.', 'Ein paar Austern gibt es am Straßentresen zum Mitnehmen.'],
      fr: ['Yakigaki no Hayashi', 'Un restaurant de l’Omotesando de Miyajima qui grille de grosses huîtres locales dès l’entrée.', 'On peut prendre quelques huîtres à emporter au comptoir de rue.'],
      it: ['Yakigaki no Hayashi', 'Un ristorante sull’Omotesando di Miyajima che griglia grandi ostriche locali proprio all’ingresso.', 'Puoi prendere un paio di ostriche da asporto al banco su strada.'],
    }, { price: level(2), menu: [
      ['Yaki-gaki', undefined, 'устрицы на гриле|grilled oysters|ostras a la parrilla|gegrillte Austern|huîtres grillées|ostriche alla griglia'],
      ['Kaki-don', undefined, 'рис с устрицами и яйцом|rice bowl with oysters and egg|bol de arroz con ostras y huevo|Reisschale mit Austern und Ei|bol de riz aux huîtres et œuf|ciotola di riso con ostriche e uovo'],
    ] }),
    P('momijido', 'food', 34.2963, 132.3211, TORII, 4.5, 4700, ['food', 'streetfood'], {
      ru: ['Момидзидо', 'Кондитерская на Омотэсандо Миядзимы, где местное печенье момидзи-мандзю жарят во фритюре на палочке — «агэ-момидзи».', 'Начинки разные: бобовая паста, крем, сыр — берите горячими.'],
      en: ['Momijido', 'A sweet shop on Miyajima’s Omotesando that deep-fries the island’s maple-leaf momiji manjū on a stick — “age-momiji”.', 'Fillings vary: bean paste, custard, cheese — eat them hot.'],
      es: ['Momijido', 'Una dulcería de la Omotesando de Miyajima que fríe en palito los momiji manjū en forma de hoja de arce: «age-momiji».', 'Rellenos variados: judía, crema, queso; cómelos calientes.'],
      de: ['Momijido', 'Ein Süßwarenladen an Miyajimas Omotesando, der die ahornblattförmigen Momiji-Manjū am Spieß frittiert – „Age-Momiji“.', 'Füllungen: Bohnenpaste, Creme, Käse – heiß essen.'],
      fr: ['Momijido', 'Une confiserie de l’Omotesando de Miyajima qui frit sur bâtonnet les momiji manjū en feuille d’érable : les « age-momiji ».', 'Garnitures variées : haricot rouge, crème, fromage — à manger chaud.'],
      it: ['Momijido', 'Una pasticceria sull’Omotesando di Miyajima che frigge sullo stecco i momiji manjū a foglia d’acero: gli «age-momiji».', 'Ripieni vari: fagioli, crema, formaggio — mangiali caldi.'],
    }, { price: level(1), menu: [
      ['Age-momiji (koshian)', undefined, 'жареное печенье с бобовой пастой|fried cake with smooth bean paste|pastelito frito con pasta de judía|frittiertes Küchlein mit Bohnenpaste|gâteau frit à la pâte de haricot|dolcetto fritto con pasta di fagioli'],
      ['Age-momiji (cream)', undefined, 'жареное печенье с заварным кремом|fried cake with custard|pastelito frito con crema|frittiertes Küchlein mit Vanillecreme|gâteau frit à la crème|dolcetto fritto alla crema'],
    ] }),
    P('musashi', 'food', 34.3976, 132.4752, FOOD, 4.3, 3100, ['food'], {
      ru: ['Мусуби-но Мусаси', 'Местная сеть онигири и удона; на вокзале Хиросимы продают бэнто с рисовыми шариками и жареной курицей.', 'Идеальный завтрак в поезд или на паром.'],
      en: ['Musubi no Musashi', 'A local chain of onigiri and udon; at Hiroshima Station they sell bentō of rice balls and fried chicken.', 'The perfect breakfast for the train or ferry.'],
      es: ['Musubi no Musashi', 'Una cadena local de onigiri y udon; en la estación de Hiroshima venden bentō de bolas de arroz y pollo frito.', 'El desayuno perfecto para el tren o el ferri.'],
      de: ['Musubi no Musashi', 'Eine lokale Kette für Onigiri und Udon; am Bahnhof Hiroshima gibt es Bentō mit Reisbällchen und Brathähnchen.', 'Das perfekte Frühstück für Zug oder Fähre.'],
      fr: ['Musubi no Musashi', 'Une chaîne locale d’onigiri et d’udon ; à la gare de Hiroshima, bentō de boulettes de riz et poulet frit.', 'Le petit-déjeuner idéal pour le train ou le ferry.'],
      it: ['Musubi no Musashi', 'Una catena locale di onigiri e udon; alla stazione di Hiroshima vende bentō di polpette di riso e pollo fritto.', 'La colazione perfetta per treno o traghetto.'],
    }, { price: level(1), address: 'Hiroshima Station', menu: [
      ['Musubi bentō', undefined, 'бэнто с онигири и курицей|onigiri and chicken bentō|bentō de onigiri y pollo|Onigiri-Hähnchen-Bentō|bentō onigiri et poulet|bentō di onigiri e pollo'],
      ['Udon', undefined, 'удон в бульоне|udon in broth|udon en caldo|Udon in Brühe|udon en bouillon|udon in brodo'],
    ] }),
    P('kunimatsu', 'food', 34.3955, 132.464, FOOD, 4.3, 2600, ['food'], {
      ru: ['Кунимацу', 'Знаменитая лавка хиросимского «сиру-наси тантанмэн» — тантанмэна без бульона с перцем сансё и острым маслом.', 'Как следует перемешайте лапшу с соусом и выберите остроту.'],
      en: ['Kunimatsu', 'A famous shop for Hiroshima’s “shiru-nashi tantanmen” — soupless dan dan noodles with sansho pepper and chilli oil.', 'Mix the noodles thoroughly with the sauce and pick your spice level.'],
      es: ['Kunimatsu', 'Un local famoso por el «shiru-nashi tantanmen» de Hiroshima: tantanmen sin caldo con pimienta sansho y aceite picante.', 'Mezcla bien los fideos con la salsa y elige el picante.'],
      de: ['Kunimatsu', 'Ein berühmter Laden für Hiroshimas „Shiru-nashi Tantanmen“ – Dan-Dan-Nudeln ohne Brühe mit Sansho und Chiliöl.', 'Die Nudeln gründlich mit der Soße mischen und die Schärfe wählen.'],
      fr: ['Kunimatsu', 'Une adresse célèbre pour le « shiru-nashi tantanmen » de Hiroshima : nouilles dan dan sans bouillon au poivre sansho et huile pimentée.', 'Mélangez bien les nouilles à la sauce et choisissez le piquant.'],
      it: ['Kunimatsu', 'Un locale famoso per lo «shiru-nashi tantanmen» di Hiroshima: noodle dan dan senza brodo con pepe sansho e olio piccante.', 'Mescola bene i noodle con la salsa e scegli il piccante.'],
    }, { price: level(1), address: 'Hatchobori, Naka', menu: [
      ['Shiru-nashi tantanmen', undefined, 'тантанмэн без бульона|soupless dan dan noodles|tantanmen sin caldo|Tantanmen ohne Brühe|tantanmen sans bouillon|tantanmen senza brodo'],
      ['Rice to finish', undefined, 'рис, чтобы доесть соус|rice to mop up the sauce|arroz para rebañar la salsa|Reis für die restliche Soße|riz pour finir la sauce|riso per finire il sugo'],
    ] }),
    P('saijo-sake-street', 'food', 34.43, 132.743, CITY, 4.4, 4200, ['food', 'history'], {
      ru: ['Улица саке в Сайдзё', 'Город пивоварен саке под Хиросимой: семь заводов с красными трубами у станции, многие наливают на пробу.', 'Во второй уикенд октября здесь проходит большой Фестиваль саке.'],
      en: ['Saijō Sake Brewery Street', 'A sake town outside Hiroshima: seven breweries with red-brick chimneys near the station, many offering tastings.', 'The big Sake Festival takes place on the second weekend of October.'],
      es: ['Calle del sake de Saijō', 'Un pueblo de sake cerca de Hiroshima: siete bodegas con chimeneas de ladrillo junto a la estación, muchas con cata.', 'El gran Festival del Sake es el segundo fin de semana de octubre.'],
      de: ['Sake-Brauereistraße Saijō', 'Eine Sake-Stadt bei Hiroshima: sieben Brauereien mit Backsteinschornsteinen am Bahnhof, viele mit Verkostung.', 'Das große Sake-Fest findet am zweiten Oktoberwochenende statt.'],
      fr: ['Rue des brasseries de saké de Saijō', 'Une ville du saké près de Hiroshima : sept brasseries aux cheminées de brique près de la gare, beaucoup proposent des dégustations.', 'La grande fête du saké a lieu le deuxième week-end d’octobre.'],
      it: ['Via delle distillerie di sake di Saijō', 'Una cittadina del sake vicino a Hiroshima: sette distillerie con camini di mattoni vicino alla stazione, molte con degustazione.', 'La grande Festa del sake è il secondo weekend di ottobre.'],
    }, { price: level(1), menu: [
      ['Sake tasting', undefined, 'дегустация саке на заводах|sake tasting at the breweries|cata de sake en las bodegas|Sake-Verkostung in den Brauereien|dégustation de saké dans les brasseries|degustazione di sake nelle distillerie'],
      ['Shikomi-mizu', undefined, 'родниковая вода, на которой варят саке|spring water used for brewing|agua de manantial para el sake|Quellwasser zum Brauen|eau de source du brassage|acqua di sorgente per il sake'],
    ] }),
  ],
  routes: [
    D(['=hiroshima-atomic-bomb-dome', 'orizuru-tower', 'childrens-peace-monument', '=hiroshima-peace-memorial-museum', 'nagataya', 'hiroshima-castle', '=hiroshima-shukkeien-garden', '=hiroshima-kanawa-oyster-boat'],
      'Парк мира, Атомный купол и замок|The Peace Park, the Atomic Bomb Dome and the castle|El Parque de la Paz, la Cúpula y el castillo|Friedenspark, Atombombendom und Burg|Le parc de la Paix, le Dôme et le château|Il Parco della pace, la Cupola e il castello'),
    D(['=hiroshima-itsukushima-torii', 'itsukushima-shrine', 'senjokaku-pagoda', 'fujitaya', 'daisho-in', 'momijidani-park', '=hiroshima-mount-misen', 'momijido', 'hassei'],
      'Миядзима: плавучие ворота, храмы и гора Мисэн|Miyajima: the floating torii, temples and Mount Misen|Miyajima: el torii flotante, templos y el monte Misen|Miyajima: schwimmendes Torii, Tempel und der Misen|Miyajima : le torii flottant, les temples et le mont Misen|Miyajima: il torii galleggiante, i templi e il monte Misen'),
    D(['musashi', 'yamato-museum', 'okunoshima', 'saijo-sake-street', 'kunimatsu'],
      'Курэ, остров кроликов и улица саке|Kure, Rabbit Island and sake street|Kure, la isla de los conejos y la calle del sake|Kure, Haseninsel und Sake-Straße|Kure, l’île aux lapins et la rue du saké|Kure, l’isola dei conigli e la via del sake'),
  ],
};

export default pack;
