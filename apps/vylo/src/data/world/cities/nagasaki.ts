import type { CityPack } from '../types';
import { free, level, makeDay, makePlace } from './_kit.ts';

const P = makePlace('nagasaki');
const D = makeDay('nagasaki');
const VIEW = 'MZivP_esFhk';
const STATUE = 'OA7pHiZwda0';
const GUNKAN = 'la4lF4J8Gn8';
const HASHIMA = '3WAXXkB1YS0';
const BLOSSOM = '3dEejEXQZcg';
const NIGHT = 'ltLcSqUOY_Y';

const pack: CityPack = {
  country: 'JP',
  city: 'nagasaki',
  places: [
    P('glover-garden', 'attraction', 32.7339, 129.8696, VIEW, 4.5, 21000, ['history', 'gardens', 'unesco'], {
      ru: ['Сад Гловера', 'Холм с особняками западных купцов XIX века, включая дом шотландца Томаса Гловера (1863) — старейшее деревянное здание в западном стиле в Японии.', 'С верхней точки сада — лучший вид на гавань; поднимайтесь на эскалаторах, спускайтесь пешком.'],
      en: ['Glover Garden', 'A hillside of 19th-century Western merchants’ houses, including Scot Thomas Glover’s house (1863), Japan’s oldest Western-style wooden building.', 'The top of the garden has the best harbour view; ride the escalators up and walk down.'],
      es: ['Jardín Glover', 'Una colina de casas de comerciantes occidentales del siglo XIX, incluida la del escocés Thomas Glover (1863), el edificio de madera de estilo occidental más antiguo de Japón.', 'Desde lo alto del jardín se ve mejor el puerto; sube en escaleras mecánicas y baja a pie.'],
      de: ['Glover Garden', 'Ein Hang mit Häusern westlicher Kaufleute aus dem 19. Jh., darunter das des Schotten Thomas Glover (1863), Japans ältestes Holzgebäude im westlichen Stil.', 'Von der Spitze des Gartens der beste Hafenblick; per Rolltreppe hinauf, zu Fuß hinunter.'],
      fr: ['Jardin Glover', 'Une colline de maisons de marchands occidentaux du XIXe, dont celle de l’Écossais Thomas Glover (1863), plus ancien bâtiment en bois de style occidental du Japon.', 'Le haut du jardin offre la plus belle vue sur le port ; montez en escalator, redescendez à pied.'],
      it: ['Giardino Glover', 'Una collina di case di mercanti occidentali dell’Ottocento, tra cui quella dello scozzese Thomas Glover (1863), il più antico edificio in legno in stile occidentale del Giappone.', 'Dalla cima del giardino la vista migliore sul porto; sali con le scale mobili e scendi a piedi.'],
    }, { spot: 'insta', price: level(1) }),
    P('oura-cathedral', 'attraction', 32.7346, 129.8703, VIEW, 4.5, 13000, ['history', 'architecture', 'unesco'], {
      ru: ['Собор Оура', 'Старейшая сохранившаяся церковь Японии (1864), национальное сокровище; здесь в 1865 году открылись «скрытые христиане», веками тайно хранившие веру.', 'Внутри снимать нельзя; рядом — небольшой музей истории скрытых христиан.'],
      en: ['Ōura Cathedral', 'Japan’s oldest surviving church (1864), a National Treasure; here in 1865 “hidden Christians” revealed the faith they had kept secret for centuries.', 'No photos inside; next door is a small museum on the hidden Christians.'],
      es: ['Catedral de Ōura', 'La iglesia más antigua que se conserva en Japón (1864), Tesoro Nacional; aquí en 1865 los «cristianos ocultos» revelaron la fe que guardaron en secreto durante siglos.', 'Dentro no se fotografía; al lado hay un pequeño museo sobre ellos.'],
      de: ['Ōura-Kathedrale', 'Japans älteste erhaltene Kirche (1864), Nationalschatz; hier gaben sich 1865 „verborgene Christen“ zu erkennen, die ihren Glauben jahrhundertelang geheim hielten.', 'Drinnen keine Fotos; nebenan ein kleines Museum über die verborgenen Christen.'],
      fr: ['Cathédrale d’Ōura', 'La plus ancienne église conservée du Japon (1864), Trésor national ; en 1865, des « chrétiens cachés » y révélèrent une foi gardée secrète pendant des siècles.', 'Pas de photos dedans ; à côté, un petit musée sur les chrétiens cachés.'],
      it: ['Cattedrale di Ōura', 'La chiesa più antica conservata in Giappone (1864), Tesoro nazionale; qui nel 1865 i «cristiani nascosti» rivelarono la fede custodita in segreto per secoli.', 'Dentro niente foto; accanto un piccolo museo sui cristiani nascosti.'],
    }, { price: level(1) }),
    P('dejima', 'attraction', 32.7438, 129.873, VIEW, 4.3, 14000, ['history', 'museums'], {
      ru: ['Дэдзима', 'Искусственный остров, где в 1641–1859 годах жили голландские купцы — единственная дверь Японии на Запад; дома восстановлены.', 'Посмотрите макет острова 1:15 — понятно, каким маленьким он был.'],
      en: ['Dejima', 'The artificial island where Dutch merchants lived from 1641 to 1859 — Japan’s only door to the West; the houses have been rebuilt.', 'Look at the 1:15 model to see how tiny the island was.'],
      es: ['Dejima', 'La isla artificial donde vivieron los mercaderes holandeses de 1641 a 1859, la única puerta de Japón a Occidente; las casas están reconstruidas.', 'Mira la maqueta 1:15 para ver lo pequeña que era la isla.'],
      de: ['Dejima', 'Die künstliche Insel, auf der 1641–1859 niederländische Kaufleute lebten – Japans einzige Tür zum Westen; die Häuser wurden rekonstruiert.', 'Das Modell im Maßstab 1:15 zeigt, wie winzig die Insel war.'],
      fr: ['Dejima', 'L’île artificielle où vécurent les marchands hollandais de 1641 à 1859, seule porte du Japon vers l’Occident ; les maisons ont été reconstruites.', 'Regardez la maquette au 1/15 pour voir comme l’île était minuscule.'],
      it: ['Dejima', 'L’isola artificiale dove vissero i mercanti olandesi dal 1641 al 1859, unica porta del Giappone verso l’Occidente; le case sono state ricostruite.', 'Guarda il plastico 1:15 per capire quanto era piccola l’isola.'],
    }, { price: level(1) }),
    P('megane-bridge', 'attraction', 32.749, 129.884, VIEW, 4.4, 15000, ['history', 'photo'], {
      ru: ['Мост Мэганэ', 'Каменный двухарочный мост 1634 года через реку Накасима: с отражением в воде он похож на очки.', 'Поищите на набережной камень в форме сердца — местная примета на удачу.'],
      en: ['Megane Bridge', 'A 1634 double-arched stone bridge over the Nakashima River: with its reflection it looks like spectacles.', 'Look for the heart-shaped stone in the embankment — a local good-luck charm.'],
      es: ['Puente Megane', 'Un puente de piedra de dos arcos de 1634 sobre el río Nakashima: con su reflejo parece unas gafas.', 'Busca la piedra en forma de corazón en el muro del río: trae suerte.'],
      de: ['Megane-Brücke', 'Eine doppelbogige Steinbrücke von 1634 über den Nakashima: mit Spiegelbild sieht sie aus wie eine Brille.', 'Den herzförmigen Stein in der Ufermauer suchen – ein lokaler Glücksbringer.'],
      fr: ['Pont Megane', 'Un pont de pierre à double arche de 1634 sur la Nakashima : avec son reflet, il ressemble à des lunettes.', 'Cherchez la pierre en forme de cœur dans le quai : un porte-bonheur local.'],
      it: ['Ponte Megane', 'Un ponte di pietra a doppio arco del 1634 sul fiume Nakashima: col riflesso sembra un paio di occhiali.', 'Cerca la pietra a forma di cuore nell’argine: un portafortuna locale.'],
    }, { spot: 'insta', price: free }),
    P('peace-park', 'attraction', 32.7765, 129.8636, STATUE, 4.6, 24000, ['history'], {
      ru: ['Парк мира', 'Парк на холме у эпицентра взрыва 9 августа 1945 года с 10-метровой Статуей мира скульптора Сэйбо Китамуры.', 'Спуститесь к чёрной колонне эпицентра в соседнем парке — пять минут пешком.'],
      en: ['Peace Park', 'A hilltop park by the hypocentre of the 9 August 1945 blast, with Seibō Kitamura’s 10 m Peace Statue.', 'Walk down to the black hypocentre pillar in the next park — five minutes away.'],
      es: ['Parque de la Paz', 'Un parque en una colina junto al hipocentro de la explosión del 9 de agosto de 1945, con la Estatua de la Paz de 10 m de Seibō Kitamura.', 'Baja a la columna negra del hipocentro en el parque vecino: cinco minutos.'],
      de: ['Friedenspark', 'Ein Park auf einem Hügel am Hypozentrum der Explosion vom 9. August 1945 mit Seibō Kitamuras 10 m hoher Friedensstatue.', 'Zur schwarzen Hypozentrum-Säule im Nachbarpark hinuntergehen – fünf Minuten.'],
      fr: ['Parc de la Paix', 'Un parc en hauteur près de l’hypocentre de l’explosion du 9 août 1945, avec la statue de la Paix de 10 m de Seibō Kitamura.', 'Descendez à la colonne noire de l’hypocentre dans le parc voisin : cinq minutes.'],
      it: ['Parco della pace', 'Un parco in collina vicino all’ipocentro dell’esplosione del 9 agosto 1945, con la Statua della pace di 10 m di Seibō Kitamura.', 'Scendi alla colonna nera dell’ipocentro nel parco accanto: cinque minuti.'],
    }, { price: free }),
    P('atomic-bomb-museum', 'attraction', 32.7725, 129.8641, STATUE, 4.6, 16000, ['history', 'museums'], {
      ru: ['Музей атомной бомбы', 'Музей о бомбардировке Нагасаки: остановившиеся в 11:02 часы, оплавленные вещи и рассказы выживших.', 'Выделите хотя бы полтора часа и не планируйте после него ничего шумного.'],
      en: ['Atomic Bomb Museum', 'A museum on the bombing of Nagasaki: clocks stopped at 11:02, melted objects and survivors’ testimonies.', 'Allow at least an hour and a half, and plan nothing loud straight after.'],
      es: ['Museo de la Bomba Atómica', 'Un museo sobre el bombardeo de Nagasaki: relojes parados a las 11:02, objetos fundidos y testimonios de supervivientes.', 'Dedica al menos hora y media y no planees nada ruidoso después.'],
      de: ['Atombombenmuseum', 'Ein Museum über die Bombardierung Nagasakis: um 11:02 stehen gebliebene Uhren, geschmolzene Gegenstände und Berichte Überlebender.', 'Mindestens anderthalb Stunden einplanen und danach nichts Lautes vorhaben.'],
      fr: ['Musée de la bombe atomique', 'Un musée sur le bombardement de Nagasaki : horloges arrêtées à 11 h 02, objets fondus et témoignages de survivants.', 'Prévoyez au moins une heure et demie, et rien de bruyant juste après.'],
      it: ['Museo della bomba atomica', 'Un museo sul bombardamento di Nagasaki: orologi fermi alle 11:02, oggetti fusi e testimonianze dei sopravvissuti.', 'Calcola almeno un’ora e mezza e non programmare nulla di rumoroso subito dopo.'],
    }, { price: level(1) }),
    P('mount-inasa', 'nature', 32.7511, 129.8536, NIGHT, 4.7, 19000, ['views', 'sunset', 'photo'], {
      ru: ['Гора Инаса', 'Канатная дорога на вершину 333 м с одним из самых известных ночных видов Японии: огни гавани и склонов вокруг неё.', 'Поднимитесь до заката и дождитесь, когда зажгутся огни.'],
      en: ['Mount Inasa', 'A ropeway to the 333 m summit and one of Japan’s most famous night views: the lights of the harbour and the hills around it.', 'Go up before sunset and wait for the lights to come on.'],
      es: ['Monte Inasa', 'Un teleférico a la cima de 333 m y una de las vistas nocturnas más famosas de Japón: las luces del puerto y las laderas.', 'Sube antes del atardecer y espera a que se enciendan las luces.'],
      de: ['Berg Inasa', 'Eine Seilbahn zum 333 m hohen Gipfel und einer der berühmtesten Nachtblicke Japans: die Lichter des Hafens und der Hänge.', 'Vor Sonnenuntergang hinauffahren und warten, bis die Lichter angehen.'],
      fr: ['Mont Inasa', 'Un téléphérique jusqu’au sommet de 333 m et l’une des vues nocturnes les plus célèbres du Japon : les lumières du port et des collines.', 'Montez avant le coucher du soleil et attendez que les lumières s’allument.'],
      it: ['Monte Inasa', 'Una funivia fino alla cima di 333 m e una delle viste notturne più famose del Giappone: le luci del porto e delle colline.', 'Sali prima del tramonto e aspetta che si accendano le luci.'],
    }, { spot: 'insta', price: level(2) }),
    P('gunkanjima', 'attraction', 32.6278, 129.7386, GUNKAN, 4.5, 12000, ['history', 'islands', 'unesco'], {
      ru: ['Гункандзима (Хасима)', 'Заброшенный угольный остров-город, закрытый в 1974 году; бетонные дома на нём сделали силуэт похожим на линкор. Объект ЮНЕСКО.', 'Высадка зависит от волн — если море неспокойно, катер лишь обходит остров.'],
      en: ['Gunkanjima (Hashima)', 'An abandoned coal-mining island town closed in 1974; its concrete blocks make it look like a battleship. A UNESCO site.', 'Landing depends on the waves — in rough seas the boat only circles the island.'],
      es: ['Gunkanjima (Hashima)', 'Una isla-ciudad minera abandonada, cerrada en 1974; sus bloques de hormigón la hacen parecer un acorazado. Patrimonio UNESCO.', 'El desembarco depende del oleaje: con mar agitado el barco solo la rodea.'],
      de: ['Gunkanjima (Hashima)', 'Eine 1974 verlassene Kohleinsel-Stadt; ihre Betonblöcke lassen sie wie ein Schlachtschiff aussehen. UNESCO-Welterbe.', 'Ob man anlegt, hängt vom Seegang ab – bei Wellen umrundet das Boot die Insel nur.'],
      fr: ['Gunkanjima (Hashima)', 'Une île-ville minière abandonnée en 1974 ; ses blocs de béton lui donnent l’allure d’un cuirassé. Site UNESCO.', 'Le débarquement dépend de la houle : par mer agitée, le bateau ne fait que contourner l’île.'],
      it: ['Gunkanjima (Hashima)', 'Un’isola-città mineraria abbandonata nel 1974; i blocchi di cemento la fanno sembrare una corazzata. Sito UNESCO.', 'Lo sbarco dipende dalle onde: con mare mosso la barca fa solo il giro dell’isola.'],
    }, { spot: 'insta', price: level(3) }),
    P('sofukuji', 'attraction', 32.7445, 129.884, BLOSSOM, 4.4, 4100, ['temples', 'history'], {
      ru: ['Софуку-дзи', 'Китайский храм школы Обаку 1629 года в стиле эпохи Мин с алыми воротами — национальным сокровищем.', 'Тихое место в районе Тэрамати — пройдитесь отсюда по улице храмов к мосту Мэганэ.'],
      en: ['Sōfuku-ji', 'A 1629 Chinese Ōbaku temple in Ming style, with a vermilion gate that’s a National Treasure.', 'A quiet spot in Teramachi — walk the temple street from here down to Megane Bridge.'],
      es: ['Sōfuku-ji', 'Un templo chino Ōbaku de 1629 en estilo Ming, con una puerta bermellón que es Tesoro Nacional.', 'Un rincón tranquilo de Teramachi: baja desde aquí por la calle de templos hasta el puente Megane.'],
      de: ['Sōfuku-ji', 'Ein chinesischer Ōbaku-Tempel von 1629 im Ming-Stil mit zinnoberrotem Tor, einem Nationalschatz.', 'Ein ruhiger Ort in Teramachi – von hier die Tempelstraße hinab zur Megane-Brücke.'],
      fr: ['Sōfuku-ji', 'Un temple chinois Ōbaku de 1629 de style Ming, à la porte vermillon classée Trésor national.', 'Un coin paisible de Teramachi : descendez la rue des temples jusqu’au pont Megane.'],
      it: ['Sōfuku-ji', 'Un tempio cinese Ōbaku del 1629 in stile Ming, con una porta vermiglio Tesoro nazionale.', 'Un angolo tranquillo di Teramachi: scendi la via dei templi fino al ponte Megane.'],
    }, { price: level(1) }),
    P('hollander-slope', 'attraction', 32.7365, 129.8725, VIEW, 4.3, 6700, ['history', 'oldtown'], {
      ru: ['Склон Оранда-дзака', 'Мощёный склон в старом квартале иностранцев с деревянными домами западного стиля конца XIX века.', 'Особенно красиво рано утром и после дождя, когда блестит брусчатка.'],
      en: ['Hollander Slope (Oranda-zaka)', 'A cobbled slope in the old foreign quarter lined with late-19th-century Western-style wooden houses.', 'Loveliest early in the morning or after rain, when the cobbles shine.'],
      es: ['Cuesta Holandesa (Oranda-zaka)', 'Una cuesta empedrada en el antiguo barrio extranjero con casas de madera de estilo occidental de finales del XIX.', 'Lo más bonito: temprano o tras la lluvia, cuando brilla el empedrado.'],
      de: ['Holländerhang (Oranda-zaka)', 'Ein gepflasterter Hang im alten Ausländerviertel mit Holzhäusern westlichen Stils aus dem späten 19. Jh.', 'Am schönsten frühmorgens oder nach Regen, wenn das Pflaster glänzt.'],
      fr: ['Pente des Hollandais (Oranda-zaka)', 'Une pente pavée de l’ancien quartier étranger, bordée de maisons de bois à l’occidentale de la fin du XIXe.', 'Plus belle tôt le matin ou après la pluie, quand les pavés brillent.'],
      it: ['Salita degli Olandesi (Oranda-zaka)', 'Una salita acciottolata nel vecchio quartiere straniero con case di legno in stile occidentale di fine Ottocento.', 'Il meglio al mattino presto o dopo la pioggia, quando i ciottoli brillano.'],
    }, { spot: 'hidden', price: free }),
    P('urakami-cathedral', 'attraction', 32.777, 129.868, STATUE, 4.4, 5900, ['history', 'architecture'], {
      ru: ['Собор Ураками', 'Собор в 500 м от эпицентра, восстановленный после войны; рядом в овраге лежит упавшая при взрыве колокольня.', 'Обойдите собор с северной стороны — колокольня видна с тропинки.'],
      en: ['Urakami Cathedral', 'A cathedral 500 m from the hypocentre, rebuilt after the war; the bell tower that fell in the blast still lies in the ravine beside it.', 'Walk round the north side — the fallen belfry is visible from the path.'],
      es: ['Catedral de Urakami', 'Una catedral a 500 m del hipocentro, reconstruida tras la guerra; el campanario que cayó con la explosión sigue en el barranco junto a ella.', 'Rodéala por el norte: el campanario caído se ve desde el sendero.'],
      de: ['Urakami-Kathedrale', 'Eine Kathedrale 500 m vom Hypozentrum, nach dem Krieg wiederaufgebaut; der bei der Explosion gestürzte Glockenturm liegt noch in der Schlucht daneben.', 'An der Nordseite herumgehen – der gestürzte Turm ist vom Pfad aus zu sehen.'],
      fr: ['Cathédrale d’Urakami', 'Une cathédrale à 500 m de l’hypocentre, reconstruite après la guerre ; le clocher tombé lors de l’explosion gît encore dans le ravin.', 'Faites le tour par le nord : le clocher effondré se voit du sentier.'],
      it: ['Cattedrale di Urakami', 'Una cattedrale a 500 m dall’ipocentro, ricostruita dopo la guerra; il campanile crollato nell’esplosione giace ancora nel burrone accanto.', 'Gira dal lato nord: il campanile caduto si vede dal sentiero.'],
    }, { price: free }),
    P('sanno-shrine', 'attraction', 32.77, 129.865, STATUE, 4.5, 3600, ['history', 'temples'], {
      ru: ['Святилище Санно и «одноногие» тории', 'Ворота-тории, у которых взрыв снёс половину, до сих пор стоят на одной ноге; рядом выжили огромные камфорные деревья.', 'Тихое и очень сильное место — вежливо и без шума.'],
      en: ['Sannō Shrine and its one-legged torii', 'A torii gate half destroyed by the blast still stands on one leg; giant camphor trees nearby survived.', 'A quiet, powerful place — visit respectfully.'],
      es: ['Santuario Sannō y su torii de una pata', 'Un torii al que la explosión arrancó la mitad sigue en pie sobre una pata; cerca sobrevivieron enormes alcanforeros.', 'Un lugar tranquilo e intenso: visítalo con respeto.'],
      de: ['Sannō-Schrein und sein einbeiniges Torii', 'Ein von der Explosion halb zerstörtes Torii steht noch auf einem Bein; riesige Kampferbäume daneben überlebten.', 'Ein stiller, eindringlicher Ort – respektvoll besuchen.'],
      fr: ['Sanctuaire Sannō et son torii à un pied', 'Un torii à moitié détruit par l’explosion tient encore sur un pied ; des camphriers géants à côté ont survécu.', 'Un lieu calme et bouleversant : visitez-le avec respect.'],
      it: ['Santuario Sannō e il torii con una gamba', 'Un torii distrutto a metà dall’esplosione sta ancora in piedi su una gamba; enormi canfori lì accanto sono sopravvissuti.', 'Un luogo quieto e intenso: visitalo con rispetto.'],
    }, { spot: 'hidden', price: free }),
    P('shinchi-chinatown', 'attraction', 32.742, 129.878, NIGHT, 4.2, 11000, ['streetfood', 'culture'], {
      ru: ['Чайнатаун Синти', 'Один из трёх больших китайских кварталов Японии и самый старый: ворота, лавки и рестораны тямпона.', 'В феврале здесь центр Фестиваля фонарей — тысячи огней по всему городу.'],
      en: ['Shinchi Chinatown', 'The oldest of Japan’s three big Chinatowns: gates, shops and champon restaurants.', 'In February it’s the heart of the Lantern Festival, with thousands of lights across town.'],
      es: ['Barrio chino de Shinchi', 'El más antiguo de los tres grandes barrios chinos de Japón: puertas, tiendas y restaurantes de champon.', 'En febrero es el centro del Festival de Linternas, con miles de luces.'],
      de: ['Chinatown Shinchi', 'Das älteste der drei großen Chinatowns Japans: Tore, Läden und Champon-Restaurants.', 'Im Februar Herz des Laternenfests mit Tausenden Lichtern in der Stadt.'],
      fr: ['Quartier chinois de Shinchi', 'Le plus ancien des trois grands quartiers chinois du Japon : portes, boutiques et restaurants de champon.', 'En février, c’est le cœur de la fête des Lanternes, aux milliers de lumières.'],
      it: ['Chinatown di Shinchi', 'La più antica delle tre grandi Chinatown del Giappone: porte, negozi e ristoranti di champon.', 'A febbraio è il cuore della Festa delle lanterne, con migliaia di luci.'],
    }, { spot: 'insta', price: free }),
    P('shikairou', 'food', 32.7357, 129.8722, VIEW, 4.2, 6100, ['food', 'history'], {
      ru: ['Сикайро', 'Ресторан, основанный в 1899 году китайцем Тин Хэйдзюном, — здесь придумали тямпон: лапшу с морепродуктами и овощами в молочном бульоне.', 'Закажите тямпон и сара-удон — это два главных блюда Нагасаки.'],
      en: ['Shikairō', 'A restaurant founded in 1899 by Chinese chef Chen Pingshun — the birthplace of champon, noodles with seafood and vegetables in a milky broth.', 'Order champon and sara udon — Nagasaki’s two signature dishes.'],
      es: ['Shikairō', 'Un restaurante fundado en 1899 por el chino Chen Pingshun, cuna del champon: fideos con marisco y verduras en caldo lechoso.', 'Pide champon y sara udon, los dos platos estrella de Nagasaki.'],
      de: ['Shikairō', 'Ein 1899 vom Chinesen Chen Pingshun gegründetes Restaurant – Geburtsort des Champon, Nudeln mit Meeresfrüchten und Gemüse in milchiger Brühe.', 'Champon und Sara Udon bestellen – Nagasakis zwei Klassiker.'],
      fr: ['Shikairō', 'Un restaurant fondé en 1899 par le Chinois Chen Pingshun, berceau du champon : nouilles aux fruits de mer et légumes dans un bouillon laiteux.', 'Commandez champon et sara udon, les deux plats phares de Nagasaki.'],
      it: ['Shikairō', 'Un ristorante fondato nel 1899 dal cinese Chen Pingshun, culla del champon: noodle con frutti di mare e verdure in brodo lattiginoso.', 'Ordina champon e sara udon, i due piatti simbolo di Nagasaki.'],
    }, { price: level(2), menu: [
      ['Champon', undefined, 'лапша с морепродуктами в молочном бульоне|noodles with seafood in milky broth|fideos con marisco en caldo lechoso|Nudeln mit Meeresfrüchten in milchiger Brühe|nouilles aux fruits de mer, bouillon laiteux|noodle con frutti di mare in brodo lattiginoso'],
      ['Sara udon', undefined, 'хрустящая лапша под густым соусом|crispy noodles under a thick sauce|fideos crujientes con salsa espesa|knusprige Nudeln mit dicker Soße|nouilles croustillantes nappées de sauce|noodle croccanti con salsa densa'],
    ] }),
    P('kozanro', 'food', 32.742, 129.878, NIGHT, 4.2, 4700, ['food'], {
      ru: ['Кодзанро', 'Известный ресторан в Чайнатауне Синти с тямпоном, сара-удоном и блюдами нагасакской китайской кухни.', 'Тямпон здесь щедрый — одной порции хватает надолго.'],
      en: ['Kōzanrō', 'A well-known restaurant in Shinchi Chinatown serving champon, sara udon and Nagasaki-Chinese dishes.', 'The champon is generous — one bowl goes a long way.'],
      es: ['Kōzanrō', 'Un conocido restaurante del barrio chino de Shinchi con champon, sara udon y cocina chino-nagasakiana.', 'El champon es generoso: un cuenco da para mucho.'],
      de: ['Kōzanrō', 'Ein bekanntes Restaurant im Chinatown Shinchi mit Champon, Sara Udon und chinesisch-nagasakischer Küche.', 'Das Champon ist üppig – eine Schüssel reicht lange.'],
      fr: ['Kōzanrō', 'Un restaurant connu du quartier chinois de Shinchi : champon, sara udon et cuisine sino-nagasakienne.', 'Le champon est généreux : un bol suffit largement.'],
      it: ['Kōzanrō', 'Un noto ristorante della Chinatown di Shinchi con champon, sara udon e piatti cino-nagasakiani.', 'Il champon è abbondante: una ciotola basta a lungo.'],
    }, { price: level(2), menu: [
      ['Champon', undefined, 'тямпон|champon noodles|champon|Champon|champon|champon'],
      ['Kakuni manjū', undefined, 'булочка с тушёной свининой|bun with braised pork belly|bollo con panceta guisada|Brötchen mit geschmortem Schweinebauch|petit pain au porc braisé|panino con pancetta brasata'],
    ] }),
    P('fukusaya', 'food', 32.744, 129.8815, BLOSSOM, 4.6, 4300, ['food', 'history'], {
      ru: ['Фукусая', 'Кондитерская с 1624 года и символом-бабочкой, где пекут кастеллу — бисквит португальского происхождения с хрустящими кристаллами сахара на дне.', 'Купите маленький брусок — он хорошо переносит дорогу.'],
      en: ['Fukusaya', 'A confectioner since 1624 with a butterfly emblem, baking castella — a sponge cake of Portuguese origin with crunchy sugar crystals at the bottom.', 'Buy a small bar — it travels well.'],
      es: ['Fukusaya', 'Una confitería desde 1624 con una mariposa por emblema que hornea castella, bizcocho de origen portugués con cristales de azúcar crujientes en la base.', 'Compra una barrita pequeña: aguanta bien el viaje.'],
      de: ['Fukusaya', 'Eine Konditorei seit 1624 mit Schmetterlingswappen, die Castella backt – Biskuit portugiesischen Ursprungs mit knusprigen Zuckerkristallen am Boden.', 'Einen kleinen Riegel kaufen – er übersteht die Reise gut.'],
      fr: ['Fukusaya', 'Une pâtisserie depuis 1624 à l’emblème de papillon, qui cuit la castella, génoise d’origine portugaise aux cristaux de sucre croquants au fond.', 'Achetez une petite barre : elle voyage bien.'],
      it: ['Fukusaya', 'Una pasticceria dal 1624 con la farfalla per emblema che sforna la castella, pan di Spagna di origine portoghese con cristalli di zucchero croccanti sul fondo.', 'Compra un panetto piccolo: viaggia bene.'],
    }, { price: level(2), menu: [
      ['Castella', undefined, 'бисквит кастелла|castella sponge cake|bizcocho castella|Castella-Biskuit|gâteau castella|pan di Spagna castella'],
      ['Cube castella', undefined, 'кастелла в маленькой коробочке|castella in a small cube box|castella en cajita|Castella im Würfelkarton|castella en petite boîte|castella in scatolina'],
    ] }),
    P('bunmeido', 'food', 32.746, 129.874, BLOSSOM, 4.4, 2700, ['food', 'history'], {
      ru: ['Буммэйдо (главный магазин)', 'Вторая знаменитая марка кастеллы Нагасаки (с 1900 года) с главным магазином у Дэдзимы и кафе.', 'Сравните кастеллу Буммэйдо и Фукусаи — у них разная текстура.'],
      en: ['Bunmeidō (main store)', 'Nagasaki’s other famous castella maker (since 1900), with its main store and café near Dejima.', 'Compare Bunmeidō’s castella with Fukusaya’s — the textures differ.'],
      es: ['Bunmeidō (tienda principal)', 'La otra famosa casa de castella de Nagasaki (desde 1900), con tienda principal y café junto a Dejima.', 'Compara la castella de Bunmeidō con la de Fukusaya: la textura cambia.'],
      de: ['Bunmeidō (Stammhaus)', 'Nagasakis zweiter berühmter Castella-Hersteller (seit 1900) mit Stammhaus und Café nahe Dejima.', 'Castella von Bunmeidō und Fukusaya vergleichen – die Textur ist anders.'],
      fr: ['Bunmeidō (boutique principale)', 'L’autre célèbre maison de castella de Nagasaki (depuis 1900), boutique et café près de Dejima.', 'Comparez la castella de Bunmeidō et celle de Fukusaya : la texture diffère.'],
      it: ['Bunmeidō (negozio principale)', 'L’altra famosa casa della castella di Nagasaki (dal 1900), con negozio principale e caffè vicino a Dejima.', 'Confronta la castella di Bunmeidō con quella di Fukusaya: la consistenza cambia.'],
    }, { price: level(1), menu: [
      ['Castella', undefined, 'бисквит кастелла|castella sponge cake|bizcocho castella|Castella-Biskuit|gâteau castella|pan di Spagna castella'],
      ['Castella with coffee', undefined, 'кастелла с кофе в кафе|castella with coffee in the café|castella con café|Castella mit Kaffee im Café|castella et café|castella con caffè'],
    ] }),
    P('tsuruchan', 'food', 32.7435, 129.88, NIGHT, 4.2, 3900, ['food', 'history'], {
      ru: ['Цуру-тян', 'Старейшее кафе Кюсю (1925), где подают «турецкий рис» — свиную котлету, плов и спагетти на одной тарелке — и молочный коктейль, который едят ложкой.', 'Попробуйте нагасакский милкшейк — он похож на полурастаявшее мороженое.'],
      en: ['Tsuru-chan', 'Kyushu’s oldest café (1925), serving “Toruko rice” — pork cutlet, pilaf and spaghetti on one plate — and a milkshake you eat with a spoon.', 'Try the Nagasaki milkshake — more like half-melted ice cream.'],
      es: ['Tsuru-chan', 'El café más antiguo de Kyushu (1925), con «Toruko rice» —filete de cerdo, pilaf y espaguetis en un plato— y un batido que se come con cuchara.', 'Prueba el batido de Nagasaki: parece helado a medio derretir.'],
      de: ['Tsuru-chan', 'Kyūshūs ältestes Café (1925) mit „Toruko-Reis“ – Schweineschnitzel, Pilaw und Spaghetti auf einem Teller – und einem Milchshake zum Löffeln.', 'Den Nagasaki-Milchshake probieren – eher halb geschmolzenes Eis.'],
      fr: ['Tsuru-chan', 'Le plus vieux café de Kyūshū (1925), servant le « Toruko rice » — escalope de porc, pilaf et spaghettis dans une assiette — et un milk-shake qui se mange à la cuillère.', 'Goûtez le milk-shake de Nagasaki : plutôt une glace à demi fondue.'],
      it: ['Tsuru-chan', 'Il caffè più antico del Kyushu (1925), con il «Toruko rice» — cotoletta di maiale, pilaf e spaghetti in un piatto — e un frappè da mangiare col cucchiaio.', 'Prova il frappè di Nagasaki: sembra un gelato semi sciolto.'],
    }, { price: level(1), menu: [
      ['Toruko rice', undefined, 'котлета, плов и спагетти на одной тарелке|cutlet, pilaf and spaghetti on one plate|filete, pilaf y espaguetis en un plato|Schnitzel, Pilaw und Spaghetti auf einem Teller|escalope, pilaf et spaghettis dans une assiette|cotoletta, pilaf e spaghetti in un piatto'],
      ['Nagasaki milkshake', undefined, 'милкшейк, который едят ложкой|milkshake eaten with a spoon|batido que se come con cuchara|Milchshake zum Löffeln|milk-shake à la cuillère|frappè da mangiare col cucchiaio'],
    ] }),
    P('iwasaki-honpo', 'food', 32.736, 129.871, VIEW, 4.3, 3300, ['food', 'streetfood'], {
      ru: ['Ивасаки Хомпо', 'Лавка какуни-мандзю — пышной булочки с тушёной свиной грудинкой в сладком соевом соусе.', 'Ешьте тёплым сразу у лавки — хороший перекус по дороге к саду Гловера.'],
      en: ['Iwasaki Honpo', 'A kakuni manjū shop — a fluffy bun filled with pork belly braised in sweet soy.', 'Eat it warm at the shop — a good snack on the way to Glover Garden.'],
      es: ['Iwasaki Honpo', 'Una tienda de kakuni manjū: bollo esponjoso relleno de panceta guisada en soja dulce.', 'Cómelo caliente en la tienda: buen tentempié camino del Jardín Glover.'],
      de: ['Iwasaki Honpo', 'Ein Laden für Kakuni-Manjū – fluffiges Brötchen mit in süßer Soja geschmortem Schweinebauch.', 'Warm am Laden essen – ein guter Snack auf dem Weg zum Glover Garden.'],
      fr: ['Iwasaki Honpo', 'Une boutique de kakuni manjū : petit pain moelleux garni de poitrine de porc braisée au soja sucré.', 'À manger chaud sur place : un bon en-cas sur la route du jardin Glover.'],
      it: ['Iwasaki Honpo', 'Un negozio di kakuni manjū: panino soffice ripieno di pancetta brasata in soia dolce.', 'Mangialo caldo sul posto: ottimo spuntino verso il Giardino Glover.'],
    }, { price: level(1), menu: [
      ['Kakuni manjū', undefined, 'булочка с тушёной грудинкой|bun with braised pork belly|bollo con panceta guisada|Brötchen mit geschmortem Schweinebauch|petit pain à la poitrine braisée|panino con pancetta brasata'],
      ['Gyū-kakuni manjū', undefined, 'булочка с тушёной говядиной|bun with braised beef|bollo con ternera guisada|Brötchen mit geschmortem Rind|petit pain au bœuf braisé|panino con manzo brasato'],
    ] }),
    P('yossoh', 'food', 32.745, 129.881, BLOSSOM, 4.3, 2600, ['food', 'history'], {
      ru: ['Ёссо', 'Ресторан с 1866 года, знаменитый тяванмуси — нежным яичным заварным суфле — и паровыми суши в паре.', 'Возьмите сет «тяванмуси + муси-дзуси» — классика заведения.'],
      en: ['Yossoh', 'A restaurant since 1866 famous for chawanmushi — silky savoury egg custard — paired with steamed sushi.', 'Get the chawanmushi and mushi-zushi set — the house classic.'],
      es: ['Yossoh', 'Un restaurante desde 1866 famoso por el chawanmushi —flan salado de huevo— acompañado de sushi al vapor.', 'Pide el menú de chawanmushi y mushi-zushi, el clásico de la casa.'],
      de: ['Yossoh', 'Ein Restaurant seit 1866, berühmt für Chawanmushi – seidigen herzhaften Eierstich – mit gedämpftem Sushi.', 'Das Set aus Chawanmushi und Mushi-zushi nehmen – der Hausklassiker.'],
      fr: ['Yossoh', 'Un restaurant depuis 1866 célèbre pour son chawanmushi — flan d’œuf salé et soyeux — servi avec un sushi vapeur.', 'Prenez le duo chawanmushi et mushi-zushi, le classique maison.'],
      it: ['Yossoh', 'Un ristorante dal 1866 famoso per il chawanmushi — budino salato d’uovo — servito con sushi al vapore.', 'Prendi il set chawanmushi e mushi-zushi, il classico della casa.'],
    }, { price: level(2), menu: [
      ['Chawanmushi', undefined, 'солёное яичное суфле на пару|savoury steamed egg custard|flan salado de huevo al vapor|herzhafter gedämpfter Eierstich|flan d’œuf salé à la vapeur|budino d’uovo salato al vapore'],
      ['Mushi-zushi', undefined, 'суши, приготовленные на пару|steamed sushi|sushi al vapor|gedämpftes Sushi|sushi vapeur|sushi al vapore'],
    ] }),
    P('kagetsu', 'food', 32.741, 129.882, NIGHT, 4.5, 1300, ['food', 'history', 'luxury'], {
      ru: ['Кагэцу', 'Историческое рёотэй 1642 года в бывшем весёлом квартале Маруяма, где подают сиппоку — банкет японской, китайской и западной кухни за круглым столом.', 'Есть облегчённый обеденный сиппоку — дешевле ужина.'],
      en: ['Kagetsu', 'A historic 1642 ryōtei in the old Maruyama pleasure quarter, serving shippoku — a Japanese-Chinese-Western banquet at a round table.', 'A lighter lunch shippoku costs less than dinner.'],
      es: ['Kagetsu', 'Un histórico ryōtei de 1642 en el antiguo barrio de placer de Maruyama que sirve shippoku, un banquete japonés, chino y occidental en mesa redonda.', 'Hay un shippoku de mediodía más ligero y barato.'],
      de: ['Kagetsu', 'Ein historisches Ryōtei von 1642 im alten Vergnügungsviertel Maruyama mit Shippoku – einem japanisch-chinesisch-westlichen Bankett am runden Tisch.', 'Ein leichteres Mittags-Shippoku kostet weniger als abends.'],
      fr: ['Kagetsu', 'Un ryōtei historique de 1642 dans l’ancien quartier des plaisirs de Maruyama, servant le shippoku, banquet japonais, chinois et occidental sur table ronde.', 'Un shippoku plus léger au déjeuner coûte moins cher.'],
      it: ['Kagetsu', 'Uno storico ryōtei del 1642 nell’antico quartiere dei piaceri di Maruyama, con lo shippoku, banchetto giapponese, cinese e occidentale su tavola rotonda.', 'Uno shippoku più leggero a pranzo costa meno.'],
    }, { price: level(3), menu: [
      ['Shippoku ryōri', undefined, 'банкет сиппоку за круглым столом|shippoku banquet at a round table|banquete shippoku en mesa redonda|Shippoku-Bankett am runden Tisch|banquet shippoku sur table ronde|banchetto shippoku su tavola rotonda'],
      ['Buta no kakuni', undefined, 'тушёная свиная грудинка|braised pork belly|panceta guisada|geschmorter Schweinebauch|poitrine de porc braisée|pancetta brasata'],
    ] }),
    P('hamakatsu', 'food', 32.7445, 129.8805, NIGHT, 4.1, 2900, ['food'], {
      ru: ['Хамакацу', 'Нагасакская сеть тонкацу, где можно попробовать и местный «турецкий рис», и классическую свиную котлету.', 'Рис, капусту и суп мисо добавляют бесплатно.'],
      en: ['Hamakatsu', 'A Nagasaki tonkatsu chain where you can try both local “Toruko rice” and a classic pork cutlet.', 'Rice, cabbage and miso soup refills are free.'],
      es: ['Hamakatsu', 'Una cadena de tonkatsu de Nagasaki donde probar el «Toruko rice» local y el clásico filete de cerdo.', 'El arroz, la col y la sopa de miso se rellenan gratis.'],
      de: ['Hamakatsu', 'Eine Tonkatsu-Kette aus Nagasaki mit lokalem „Toruko-Reis“ und klassischem Schweineschnitzel.', 'Reis, Kohl und Misosuppe gibt es gratis nach.'],
      fr: ['Hamakatsu', 'Une chaîne de tonkatsu de Nagasaki pour goûter le « Toruko rice » local et l’escalope de porc classique.', 'Riz, chou et soupe miso à volonté.'],
      it: ['Hamakatsu', 'Una catena di tonkatsu di Nagasaki dove provare il «Toruko rice» locale e la classica cotoletta di maiale.', 'Riso, cavolo e zuppa di miso si riempiono gratis.'],
    }, { price: level(1), menu: [
      ['Rōsu katsu set', undefined, 'сет со свиной котлетой|pork cutlet set|menú de filete de cerdo|Schweineschnitzel-Set|menu escalope de porc|set di cotoletta di maiale'],
      ['Toruko rice', undefined, '«турецкий рис» на одной тарелке|“Toruko rice” combo plate|plato combinado «Toruko rice»|„Toruko-Reis“-Teller|assiette « Toruko rice »|piatto «Toruko rice»'],
    ] }),
    P('dejima-wharf', 'food', 32.742, 129.871, NIGHT, 4.2, 5200, ['food', 'nightlife'], {
      ru: ['Дэдзима Уорф', 'Деревянная набережная у гавани с ресторанами морепродуктов, барами и террасами на воду.', 'После горы Инаса — удобный ужин с видом на огни гавани.'],
      en: ['Dejima Wharf', 'A wooden harbourside boardwalk of seafood restaurants, bars and terraces over the water.', 'After Mount Inasa, an easy dinner with harbour lights in view.'],
      es: ['Dejima Wharf', 'Un paseo de madera junto al puerto con restaurantes de marisco, bares y terrazas sobre el agua.', 'Tras el monte Inasa, una cena cómoda con las luces del puerto.'],
      de: ['Dejima Wharf', 'Eine hölzerne Hafenpromenade mit Fischrestaurants, Bars und Terrassen überm Wasser.', 'Nach dem Inasa ein bequemes Abendessen mit Blick auf die Hafenlichter.'],
      fr: ['Dejima Wharf', 'Une promenade en bois sur le port, avec restaurants de fruits de mer, bars et terrasses sur l’eau.', 'Après le mont Inasa, un dîner facile face aux lumières du port.'],
      it: ['Dejima Wharf', 'Una passerella di legno sul porto con ristoranti di pesce, bar e terrazze sull’acqua.', 'Dopo il monte Inasa, una cena comoda con le luci del porto.'],
    }, { spot: 'insta', price: level(2), menu: [
      ['Seafood platter', undefined, 'ассорти морепродуктов|seafood platter|tabla de marisco|Meeresfrüchteplatte|plateau de fruits de mer|piatto di frutti di mare'],
      ['Local craft beer', undefined, 'местное крафтовое пиво|local craft beer|cerveza artesana local|lokales Craft-Bier|bière artisanale locale|birra artigianale locale'],
    ] }),
  ],
  routes: [
    D(['glover-garden', 'oura-cathedral', 'hollander-slope', 'shikairou', 'dejima', 'shinchi-chinatown', 'iwasaki-honpo', 'mount-inasa', 'dejima-wharf'],
      'Сад Гловера, Дэдзима и ночной вид с горы Инаса|Glover Garden, Dejima and the night view from Mount Inasa|Jardín Glover, Dejima y la vista nocturna del monte Inasa|Glover Garden, Dejima und der Nachtblick vom Inasa|Jardin Glover, Dejima et la vue nocturne du mont Inasa|Giardino Glover, Dejima e la vista notturna dal monte Inasa'),
    D(['urakami-cathedral', 'peace-park', 'atomic-bomb-museum', 'sanno-shrine', 'tsuruchan', 'megane-bridge', 'sofukuji', 'fukusaya', 'kagetsu'],
      'Парк мира, мост Мэганэ и улица храмов|The Peace Park, Megane Bridge and the temple street|El Parque de la Paz, el puente Megane y la calle de templos|Friedenspark, Megane-Brücke und Tempelstraße|Le parc de la Paix, le pont Megane et la rue des temples|Il Parco della pace, il ponte Megane e la via dei templi'),
    D(['gunkanjima', 'yossoh', 'bunmeido', 'kozanro'],
      'Остров Гункандзима и кухня Нагасаки|Gunkanjima island and Nagasaki food|La isla de Gunkanjima y la cocina de Nagasaki|Die Insel Gunkanjima und Nagasakis Küche|L’île de Gunkanjima et la cuisine de Nagasaki|L’isola di Gunkanjima e la cucina di Nagasaki'),
  ],
};

export default pack;
