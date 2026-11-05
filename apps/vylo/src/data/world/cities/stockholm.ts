import type { CityPack } from '../types';
import { free, level, makeDay, makePlace } from './_kit.ts';

const P = makePlace('stockholm');
const D = makeDay('stockholm');
const CITY = 'FEah1nILnkw';
const WATER = 'XZEKYfPI6S8';
const ISLAND = 'J76saQhYfyI';
const FOOD = 'aEQx_m_zWi4';
const OLD = 'XIABr7IavT8';
const VASA = '17fQ9mJT-aw';
const HALL = 'rMHVuTNuMio';
const VIEW = 'Waag_ZnNZME';
const DINE = 'a5uGbV4XbdE';

const pack: CityPack = {
  country: 'SE',
  city: 'stockholm',
  places: [
    P('royal-palace', 'attraction', 59.3268, 18.0717, OLD, 4.5, 31000, ['history', 'castles'], {
      ru: ['Королевский дворец', 'Одна из крупнейших действующих королевских резиденций Европы (более 600 комнат) в Гамла Стан: парадные покои, сокровищница и смена караула.', 'Смена караула — около полудня на внешнем дворе; летом проходит с оркестром.'],
      en: ['Royal Palace', 'One of Europe’s largest working royal palaces (600+ rooms) in Gamla Stan: state apartments, the Treasury and the changing of the guard.', 'The guard changes around midday in the outer courtyard; with a band in summer.'],
      es: ['Palacio Real', 'Uno de los mayores palacios reales en uso de Europa (más de 600 salas) en Gamla Stan: salones de gala, Tesoro y cambio de guardia.', 'El cambio de guardia es hacia mediodía en el patio exterior; en verano con banda.'],
      de: ['Königliches Schloss', 'Eines der größten genutzten Königsschlösser Europas (über 600 Räume) in Gamla Stan: Prunkräume, Schatzkammer und Wachablösung.', 'Die Wachablösung ist gegen Mittag im äußeren Hof; im Sommer mit Musik.'],
      fr: ['Palais royal', 'L’un des plus grands palais royaux en activité d’Europe (plus de 600 pièces) à Gamla Stan : appartements d’apparat, Trésor et relève de la garde.', 'Relève vers midi dans la cour extérieure ; avec fanfare l’été.'],
      it: ['Palazzo Reale', 'Uno dei più grandi palazzi reali in uso d’Europa (oltre 600 stanze) a Gamla Stan: appartamenti di rappresentanza, Tesoro e cambio della guardia.', 'Il cambio della guardia è verso mezzogiorno nel cortile esterno; d’estate con la banda.'],
    }, { hours: '10:00–17:00', address: 'Slottsbacken 1' }),
    P('skansen', 'attraction', 59.3264, 18.1036, ISLAND, 4.6, 41000, ['history', 'museums', 'wildlife'], {
      ru: ['Скансен', 'Старейший в мире музей под открытым небом (1891) на Юргордене: шведские усадьбы, мастерские ремесленников и северные животные — лоси, медведи, рыси.', 'Заложите полдня; на холме — вид на город и залив.'],
      en: ['Skansen', 'The world’s oldest open-air museum (1891) on Djurgården: Swedish farmsteads, craft workshops and Nordic animals — moose, bears, lynx.', 'Allow half a day; the hilltop has views over the city and water.'],
      es: ['Skansen', 'El museo al aire libre más antiguo del mundo (1891) en Djurgården: granjas suecas, talleres artesanos y fauna nórdica —alces, osos, linces.', 'Dedica medio día; desde la colina, vistas a la ciudad.'],
      de: ['Skansen', 'Das älteste Freilichtmuseum der Welt (1891) auf Djurgården: schwedische Höfe, Handwerksstätten und nordische Tiere – Elche, Bären, Luchse.', 'Einen halben Tag einplanen; vom Hügel Blick über Stadt und Wasser.'],
      fr: ['Skansen', 'Le plus ancien musée en plein air du monde (1891) à Djurgården : fermes suédoises, ateliers d’artisans et faune nordique, élans, ours, lynx.', 'Comptez une demi-journée ; vue sur la ville depuis la colline.'],
      it: ['Skansen', 'Il più antico museo all’aperto del mondo (1891) a Djurgården: fattorie svedesi, botteghe artigiane e animali nordici, alci, orsi, linci.', 'Calcola mezza giornata; dalla collina vista sulla città.'],
    }, { hours: '10:00–17:00', address: 'Djurgårdsslätten 49–51' }),
    P('abba-museum', 'attraction', 59.325, 18.096, ISLAND, 4.5, 26000, ['museums', 'culture'], {
      ru: ['Музей ABBA', 'Интерактивный музей группы ABBA на Юргордене: костюмы, студия, караоке и сцена, где можно «выступить» с голограммами группы.', 'Билеты только онлайн и по времени; петь в караоке — обязательно.'],
      en: ['ABBA The Museum', 'An interactive ABBA museum on Djurgården: costumes, the studio, karaoke and a stage to “perform” with the band’s holograms.', 'Online timed tickets only; the karaoke is a must.'],
      es: ['ABBA The Museum', 'Un museo interactivo de ABBA en Djurgården: trajes, estudio, karaoke y un escenario para “actuar” con hologramas del grupo.', 'Solo entradas online con hora; el karaoke es obligatorio.'],
      de: ['ABBA The Museum', 'Ein interaktives ABBA-Museum auf Djurgården: Kostüme, Studio, Karaoke und eine Bühne, um mit Hologrammen der Band „aufzutreten“.', 'Nur Online-Zeittickets; Karaoke ist Pflicht.'],
      fr: ['ABBA The Museum', 'Un musée interactif d’ABBA à Djurgården : costumes, studio, karaoké et scène pour « chanter » avec les hologrammes du groupe.', 'Billets horodatés en ligne uniquement ; le karaoké est incontournable.'],
      it: ['ABBA The Museum', 'Un museo interattivo degli ABBA a Djurgården: costumi, studio, karaoke e un palco per “esibirsi” con gli ologrammi del gruppo.', 'Solo biglietti online a orario; il karaoke è d’obbligo.'],
    }, { hours: '10:00–18:00', address: 'Djurgårdsvägen 68' }),
    P('fotografiska', 'attraction', 59.3176, 18.0857, WATER, 4.6, 24000, ['art', 'museums', 'views'], {
      ru: ['Fotografiska', 'Центр фотографии в бывшей таможне на набережной Сёдермальма с выставками мировых фотографов; наверху — ресторан и кафе с видом на воду.', 'Работает допоздна — удобно вечером; поднимитесь в кафе к панорамным окнам.'],
      en: ['Fotografiska', 'A photography centre in a former customs house on the Södermalm waterfront with world-class shows; a restaurant and café upstairs look over the water.', 'Open late — good for evenings; go up to the café’s panoramic windows.'],
      es: ['Fotografiska', 'Un centro de fotografía en una antigua aduana junto al agua en Södermalm con exposiciones internacionales; arriba, restaurante y café con vistas.', 'Abre hasta tarde; sube al café de ventanales panorámicos.'],
      de: ['Fotografiska', 'Ein Fotozentrum in einem ehemaligen Zollhaus am Wasser von Södermalm mit Weltklasse-Ausstellungen; oben Restaurant und Café mit Wasserblick.', 'Lange geöffnet – gut abends; zu den Panoramafenstern des Cafés hinauf.'],
      fr: ['Fotografiska', 'Un centre de la photographie dans une ancienne douane au bord de l’eau à Södermalm, expositions de grands photographes ; restaurant et café avec vue à l’étage.', 'Ouvert tard ; montez au café et ses baies panoramiques.'],
      it: ['Fotografiska', 'Un centro di fotografia in un’ex dogana sul lungomare di Södermalm con mostre di livello mondiale; al piano di sopra ristorante e caffè con vista.', 'Aperto fino a tardi; sali al caffè con le vetrate panoramiche.'],
    }, { hours: '10:00–23:00', address: 'Stadsgårdshamnen 22' }),
    P('nobel-prize-museum', 'attraction', 59.325, 18.0706, OLD, 4.4, 9800, ['museums', 'history'], {
      ru: ['Музей Нобелевской премии', 'Музей на Стурторьет в Гамла Стан о лауреатах и идеях, изменивших мир; в бистро подписывают стулья лауреаты.', 'Переверните стул в бистро — на сиденье автографы нобелевских лауреатов; там же мороженое как на банкете.'],
      en: ['Nobel Prize Museum', 'A museum on Stortorget in Gamla Stan about laureates and the ideas that changed the world; laureates sign the bistro chairs.', 'Flip a bistro chair — laureates’ signatures are under the seats; try the banquet ice cream.'],
      es: ['Museo del Premio Nobel', 'Un museo en Stortorget, Gamla Stan, sobre los galardonados y las ideas que cambiaron el mundo; los laureados firman las sillas del bistró.', 'Da la vuelta a una silla del bistró: firmas de laureados; prueba el helado del banquete.'],
      de: ['Nobelpreismuseum', 'Ein Museum am Stortorget in Gamla Stan über Preisträger und weltverändernde Ideen; die Preisträger signieren die Bistrostühle.', 'Einen Bistrostuhl umdrehen – Unterschriften der Laureaten; das Bankett-Eis probieren.'],
      fr: ['Musée du prix Nobel', 'Un musée sur Stortorget à Gamla Stan sur les lauréats et les idées qui ont changé le monde ; les lauréats signent les chaises du bistrot.', 'Retournez une chaise du bistrot : signatures de lauréats ; goûtez la glace du banquet.'],
      it: ['Museo del Premio Nobel', 'Un museo su Stortorget a Gamla Stan sui premiati e le idee che hanno cambiato il mondo; i laureati firmano le sedie del bistrot.', 'Gira una sedia del bistrot: firme dei premiati; assaggia il gelato del banchetto.'],
    }, { hours: '10:00–18:00', address: 'Stortorget 2' }),
    P('moderna-museet', 'attraction', 59.326, 18.0848, ISLAND, 4.5, 11000, ['art', 'museums'], {
      ru: ['Музей современного искусства (Moderna Museet)', 'Бесплатная постоянная коллекция на острове Шеппсхольмен: Пикассо, Дали, Уорхол и шведские авторы; в саду — скульптуры Ники де Сен-Фалль.', 'Постоянная экспозиция бесплатна; ресторан с видом на воду.'],
      en: ['Moderna Museet', 'A free permanent collection on Skeppsholmen: Picasso, Dalí, Warhol and Swedish artists, with Niki de Saint Phalle sculptures in the garden.', 'The permanent collection is free; the restaurant looks over the water.'],
      es: ['Moderna Museet', 'Una colección permanente gratuita en Skeppsholmen: Picasso, Dalí, Warhol y artistas suecos, con esculturas de Niki de Saint Phalle en el jardín.', 'La colección permanente es gratis; restaurante con vistas al agua.'],
      de: ['Moderna Museet', 'Eine kostenlose Dauerausstellung auf Skeppsholmen: Picasso, Dalí, Warhol und schwedische Künstler, Skulpturen von Niki de Saint Phalle im Garten.', 'Die Dauerausstellung ist gratis; Restaurant mit Wasserblick.'],
      fr: ['Moderna Museet', 'Une collection permanente gratuite sur Skeppsholmen : Picasso, Dalí, Warhol et artistes suédois, sculptures de Niki de Saint Phalle au jardin.', 'Collection permanente gratuite ; restaurant avec vue sur l’eau.'],
      it: ['Moderna Museet', 'Una collezione permanente gratuita a Skeppsholmen: Picasso, Dalí, Warhol e artisti svedesi, con sculture di Niki de Saint Phalle in giardino.', 'La collezione permanente è gratuita; ristorante con vista sull’acqua.'],
    }, { price: free, hours: '10:00–18:00', address: 'Exercisplan 4' }),
    P('drottningholm', 'attraction', 59.3217, 17.8865, ISLAND, 4.6, 21000, ['castles', 'gardens', 'unesco'], {
      ru: ['Дворец Дроттнингхольм', 'Частная резиденция шведской королевской семьи на острове озера Меларен с барочным парком, китайским павильоном и театром XVIII века; объект ЮНЕСКО.', 'Самый красивый путь — на пароходе от Ратуши (около часа).'],
      en: ['Drottningholm Palace', 'The Swedish royal family’s private residence on a Lake Mälaren island, with a Baroque park, a Chinese Pavilion and an 18th-century theatre; UNESCO-listed.', 'The prettiest way there is by steamboat from City Hall (about an hour).'],
      es: ['Palacio de Drottningholm', 'La residencia privada de la familia real sueca en una isla del lago Mälaren, con parque barroco, pabellón chino y teatro del siglo XVIII; Patrimonio UNESCO.', 'Lo más bonito es llegar en vapor desde el Ayuntamiento (una hora).'],
      de: ['Schloss Drottningholm', 'Die Privatresidenz der schwedischen Königsfamilie auf einer Mälarsee-Insel mit Barockpark, Chinesischem Pavillon und Theater des 18. Jh.; UNESCO-Welterbe.', 'Am schönsten per Dampfer ab Rathaus (etwa eine Stunde).'],
      fr: ['Palais de Drottningholm', 'La résidence privée de la famille royale suédoise sur une île du lac Mälar, parc baroque, pavillon chinois et théâtre du XVIIIe ; patrimoine UNESCO.', 'Le plus beau trajet : en vapeur depuis l’hôtel de ville (environ une heure).'],
      it: ['Palazzo di Drottningholm', 'La residenza privata della famiglia reale svedese su un’isola del lago Mälaren, con parco barocco, padiglione cinese e teatro settecentesco; patrimonio UNESCO.', 'Il modo più bello è il battello a vapore dal Municipio (circa un’ora).'],
    }, { spot: 'insta', hours: '10:00–16:00' }),
    P('sofo', 'attraction', 59.313, 18.076, VIEW, 4.6, 12000, ['city', 'shopping', 'nightlife'], {
      ru: ['СоФо (Сёдермальм)', 'Квартал к югу от Фолькунгагатан: винтажные магазины, скандинавский дизайн, кофейни и бары; сердце — площадь Нюторгет.', 'Лучшее время — во второй половине дня; летом площадь полна пикников.'],
      en: ['SoFo (Södermalm)', 'The blocks south of Folkungagatan: vintage shops, Scandinavian design, cafés and bars, centred on Nytorget square.', 'Best in the afternoon; in summer the square fills with picnics.'],
      es: ['SoFo (Södermalm)', 'Las manzanas al sur de Folkungagatan: tiendas vintage, diseño escandinavo, cafés y bares, en torno a la plaza Nytorget.', 'Mejor por la tarde; en verano la plaza se llena de pícnics.'],
      de: ['SoFo (Södermalm)', 'Die Blocks südlich der Folkungagatan: Vintage-Läden, skandinavisches Design, Cafés und Bars rund um den Nytorget.', 'Am besten nachmittags; im Sommer Picknicks auf dem Platz.'],
      fr: ['SoFo (Södermalm)', 'Les blocs au sud de Folkungagatan : friperies, design scandinave, cafés et bars autour de la place Nytorget.', 'Idéal l’après-midi ; l’été, la place se remplit de pique-niques.'],
      it: ['SoFo (Södermalm)', 'Gli isolati a sud di Folkungagatan: negozi vintage, design scandinavo, caffè e bar intorno a piazza Nytorget.', 'Meglio il pomeriggio; d’estate la piazza si riempie di picnic.'],
    }, { spot: 'hidden', price: free }),
    P('vaxholm', 'nature', 59.4022, 18.351, WATER, 4.6, 12000, ['islands', 'nature', 'views'], {
      ru: ['Ваксхольм и шхеры', 'Городок с деревянными домами и крепостью в Стокгольмских шхерах в часе на пароходе — самый простой способ увидеть архипелаг.', 'Пароходы Waxholmsbolaget идут от Страндвеген; возьмите место на палубе.'],
      en: ['Vaxholm and the archipelago', 'A town of wooden houses and a fortress in the Stockholm archipelago, an hour away by boat — the easiest way to see the islands.', 'Waxholmsbolaget boats leave from Strandvägen; grab a deck seat.'],
      es: ['Vaxholm y el archipiélago', 'Un pueblo de casas de madera y una fortaleza en el archipiélago de Estocolmo, a una hora en barco: la forma más fácil de ver las islas.', 'Los barcos de Waxholmsbolaget salen de Strandvägen; busca sitio en cubierta.'],
      de: ['Vaxholm und die Schären', 'Ein Städtchen mit Holzhäusern und Festung in den Stockholmer Schären, eine Stunde mit dem Boot – der einfachste Weg zu den Inseln.', 'Die Boote von Waxholmsbolaget fahren ab Strandvägen; einen Platz an Deck sichern.'],
      fr: ['Vaxholm et l’archipel', 'Un bourg de maisons en bois et sa forteresse dans l’archipel de Stockholm, à une heure en bateau : la façon la plus simple de voir les îles.', 'Les bateaux Waxholmsbolaget partent de Strandvägen ; installez-vous sur le pont.'],
      it: ['Vaxholm e l’arcipelago', 'Una cittadina di case di legno con una fortezza nell’arcipelago di Stoccolma, a un’ora di battello: il modo più semplice di vedere le isole.', 'I battelli Waxholmsbolaget partono da Strandvägen; prendi posto sul ponte.'],
    }, { spot: 'insta' }),
    P('nordic-museum', 'attraction', 59.3292, 18.0936, ISLAND, 4.5, 9100, ['museums', 'history', 'architecture'], {
      ru: ['Северный музей (Nordiska museet)', 'Дворец-музей шведской жизни на Юргордене: от быта крестьян до моды и праздников; в огромном холле — статуя Густава Вазы.', 'Совместите с музеем «Васа» — они рядом.'],
      en: ['Nordic Museum', 'A palace-like museum of Swedish life on Djurgården: from farm life to fashion and festivals; a huge Gustav Vasa statue in the hall.', 'Pair it with the Vasa Museum next door.'],
      es: ['Museo Nórdico', 'Un museo-palacio de la vida sueca en Djurgården: del campo a la moda y las fiestas; en el gran vestíbulo, la estatua de Gustavo Vasa.', 'Combínalo con el Museo Vasa, al lado.'],
      de: ['Nordiska museet', 'Ein palastartiges Museum schwedischen Lebens auf Djurgården: vom Bauernalltag bis zu Mode und Festen; in der Halle eine riesige Gustav-Vasa-Statue.', 'Mit dem Vasamuseum nebenan verbinden.'],
      fr: ['Musée nordique', 'Un musée-palais de la vie suédoise à Djurgården : de la vie paysanne à la mode et aux fêtes ; immense statue de Gustav Vasa dans le hall.', 'À combiner avec le musée Vasa voisin.'],
      it: ['Museo nordico', 'Un museo-palazzo della vita svedese a Djurgården: dalla vita contadina alla moda e alle feste; nell’atrio un’enorme statua di Gustavo Vasa.', 'Abbinalo al vicino Museo Vasa.'],
    }, { hours: '10:00–17:00', address: 'Djurgårdsvägen 6–16' }),

    P('frantzen', 'food', 59.3343, 18.0617, DINE, 4.8, 1300, ['food', 'luxury'], {
      ru: ['Frantzén', 'Ресторан Бьорна Франтцена в трёхэтажном доме в Норрмальме: аперитив в гостиной, ужин у кухонной стойки; три звезды MICHELIN — единственные в Стокгольме (по списку Visit Stockholm, 2026).', 'Один из самых дорогих ресторанов Европы; бронирование открывается заранее.'],
      en: ['Frantzén', 'Björn Frantzén’s restaurant in a three-storey townhouse in Norrmalm: aperitifs in the lounge, dinner at the kitchen counter; three MICHELIN stars — Stockholm’s only (per Visit Stockholm, 2026).', 'One of Europe’s priciest restaurants; bookings open well ahead.'],
      es: ['Frantzén', 'El restaurante de Björn Frantzén en una casa de tres plantas en Norrmalm: aperitivo en el salón y cena en la barra de la cocina; tres estrellas MICHELIN, las únicas de Estocolmo (según Visit Stockholm, 2026).', 'De los más caros de Europa; las reservas abren con antelación.'],
      de: ['Frantzén', 'Björn Frantzéns Restaurant in einem dreistöckigen Stadthaus in Norrmalm: Aperitif in der Lounge, Dinner an der Küchentheke; drei MICHELIN-Sterne – Stockholms einzige (laut Visit Stockholm, 2026).', 'Eines der teuersten Restaurants Europas; Reservierungen öffnen früh.'],
      fr: ['Frantzén', 'Le restaurant de Björn Frantzén dans une maison de trois étages à Norrmalm : apéritif au salon, dîner au comptoir de la cuisine ; trois étoiles MICHELIN, les seules de Stockholm (selon Visit Stockholm, 2026).', 'L’une des tables les plus chères d’Europe ; réservations ouvertes longtemps à l’avance.'],
      it: ['Frantzén', 'Il ristorante di Björn Frantzén in una casa di tre piani a Norrmalm: aperitivo in salotto, cena al bancone della cucina; tre stelle MICHELIN, le uniche di Stoccolma (secondo Visit Stockholm, 2026).', 'Uno dei ristoranti più cari d’Europa; le prenotazioni aprono con largo anticipo.'],
    }, { price: level(3), michelin: { award: 'star3', year: 2026 }, address: 'Klara Norra Kyrkogata 26', menu: [
      ['Tasting menu', undefined, 'дегустационный сет|tasting menu|menú degustación|Degustationsmenü|menu dégustation|menù degustazione'],
      ['Wine pairing', undefined, 'винное сопровождение|wine pairing|maridaje de vinos|Weinbegleitung|accord mets-vins|abbinamento vini'],
    ] }),
    P('aira', 'food', 59.329, 18.113, ISLAND, 4.7, 900, ['food', 'luxury', 'views'], {
      ru: ['Aira', 'Ресторан на берегу Юргордена с панорамными окнами на воду: северная кухня с японскими нотами; две звезды MICHELIN (по списку Visit Stockholm, 2026).', 'Приезжайте к закату — вид на залив из зала потрясающий.'],
      en: ['Aira', 'A waterside restaurant on Djurgården with panoramic windows: Nordic cooking with Japanese notes; two MICHELIN stars (per Visit Stockholm, 2026).', 'Arrive for sunset — the view over the bay is stunning.'],
      es: ['Aira', 'Un restaurante junto al agua en Djurgården con ventanales: cocina nórdica con notas japonesas; dos estrellas MICHELIN (según Visit Stockholm, 2026).', 'Llega al atardecer: la vista de la bahía es impresionante.'],
      de: ['Aira', 'Ein Restaurant am Wasser auf Djurgården mit Panoramafenstern: nordische Küche mit japanischen Noten; zwei MICHELIN-Sterne (laut Visit Stockholm, 2026).', 'Zum Sonnenuntergang kommen – der Blick über die Bucht ist großartig.'],
      fr: ['Aira', 'Un restaurant au bord de l’eau à Djurgården, baies panoramiques : cuisine nordique aux notes japonaises ; deux étoiles MICHELIN (selon Visit Stockholm, 2026).', 'Venez au coucher du soleil : vue superbe sur la baie.'],
      it: ['Aira', 'Un ristorante sull’acqua a Djurgården con vetrate panoramiche: cucina nordica con note giapponesi; due stelle MICHELIN (secondo Visit Stockholm, 2026).', 'Arriva al tramonto: la vista sulla baia è splendida.'],
    }, { price: level(3), michelin: { award: 'star2', year: 2026 }, address: 'Biskopsvägen 9', menu: [
      ['Tasting menu', undefined, 'дегустационный сет|tasting menu|menú degustación|Degustationsmenü|menu dégustation|menù degustazione'],
      ['Juice pairing', undefined, 'безалкогольное сопровождение|non-alcoholic pairing|maridaje sin alcohol|alkoholfreie Begleitung|accord sans alcool|abbinamento analcolico'],
    ] }),
    P('tradition', 'food', 59.325, 18.0725, DINE, 4.5, 6800, ['food'], {
      ru: ['Restaurang Tradition', 'Шведская домашняя кухня в Гамла Стан: фрикадельки с брусникой, «пюттипанна», селёдка и треска.', 'Фрикадельки с пюре и брусникой — классика; бронируйте ужин.'],
      en: ['Restaurang Tradition', 'Swedish home cooking in Gamla Stan: meatballs with lingonberries, pyttipanna hash, herring and cod.', 'Meatballs with mash and lingonberries is the classic; book dinner.'],
      es: ['Restaurang Tradition', 'Cocina casera sueca en Gamla Stan: albóndigas con arándanos rojos, pyttipanna, arenque y bacalao.', 'Las albóndigas con puré y arándanos son el clásico; reserva la cena.'],
      de: ['Restaurang Tradition', 'Schwedische Hausmannskost in Gamla Stan: Köttbullar mit Preiselbeeren, Pyttipanna, Hering und Kabeljau.', 'Köttbullar mit Püree und Preiselbeeren ist der Klassiker; abends reservieren.'],
      fr: ['Restaurang Tradition', 'Cuisine familiale suédoise à Gamla Stan : boulettes aux airelles, pyttipanna, hareng et cabillaud.', 'Les boulettes, purée et airelles sont le classique ; réservez le soir.'],
      it: ['Restaurang Tradition', 'Cucina casalinga svedese a Gamla Stan: polpette con mirtilli rossi, pyttipanna, aringa e merluzzo.', 'Polpette con purè e mirtilli rossi è il classico; prenota la cena.'],
    }, { price: level(2), address: 'Österlånggatan 1', menu: [
      ['Köttbullar', undefined, 'шведские фрикадельки с пюре и брусникой|Swedish meatballs with mash and lingonberries|albóndigas suecas con puré y arándanos|Köttbullar mit Püree und Preiselbeeren|boulettes suédoises, purée et airelles|polpette svedesi con purè e mirtilli rossi'],
      ['Pyttipanna', undefined, 'жарёха из картофеля и мяса с яйцом|potato and meat hash with egg|salteado de patata y carne con huevo|Pfanne aus Kartoffeln und Fleisch mit Ei|poêlée de pommes de terre et viande à l’œuf|padellata di patate e carne con uovo'],
    ] }),
    P('den-gyldene-freden', 'food', 59.3238, 18.0742, OLD, 4.5, 5100, ['food', 'history'], {
      ru: ['Den Gyldene Freden', 'Ресторан, работающий в одном здании с 1722 года, — любимое место поэта Карла Микаэля Бельмана; принадлежит Шведской академии.', 'Ужинайте в сводчатых подвалах; классика — шведская дичь и рыба.'],
      en: ['Den Gyldene Freden', 'A restaurant in the same building since 1722, a favourite of poet Carl Michael Bellman; owned by the Swedish Academy.', 'Dine in the vaulted cellars; Swedish game and fish are the classics.'],
      es: ['Den Gyldene Freden', 'Un restaurante en el mismo edificio desde 1722, favorito del poeta Carl Michael Bellman; propiedad de la Academia Sueca.', 'Cena en las bodegas abovedadas; clásicos de caza y pescado suecos.'],
      de: ['Den Gyldene Freden', 'Ein Restaurant im selben Haus seit 1722, Lieblingslokal des Dichters Carl Michael Bellman; im Besitz der Schwedischen Akademie.', 'In den Gewölbekellern essen; schwedisches Wild und Fisch sind Klassiker.'],
      fr: ['Den Gyldene Freden', 'Un restaurant dans le même bâtiment depuis 1722, cher au poète Carl Michael Bellman ; propriété de l’Académie suédoise.', 'Dînez dans les caves voûtées ; gibier et poissons suédois en classiques.'],
      it: ['Den Gyldene Freden', 'Un ristorante nello stesso edificio dal 1722, amato dal poeta Carl Michael Bellman; di proprietà dell’Accademia svedese.', 'Cena nelle cantine a volta; i classici sono selvaggina e pesce svedesi.'],
    }, { price: level(3), address: 'Österlånggatan 51', menu: [
      ['Swedish game', undefined, 'шведская дичь|Swedish game|caza sueca|schwedisches Wild|gibier suédois|selvaggina svedese'],
      ['Herring plate', undefined, 'ассорти из маринованной сельди|pickled herring plate|surtido de arenques|Heringsteller|assiette de harengs|piatto di aringhe'],
    ] }),
    P('nystekt-stromming', 'food', 59.3196, 18.072, VIEW, 4.6, 4300, ['food', 'streetfood'], {
      ru: ['Nystekt Strömming (Слюссен)', 'Фургончик у Слюссена, где жарят свежую балтийскую салаку — на хрустящем хлебе или с пюре и брусникой.', 'Самый дешёвый способ попробовать настоящую шведскую рыбу; ешьте у воды.'],
      en: ['Nystekt Strömming (Slussen)', 'A food truck at Slussen frying fresh Baltic herring — on crispbread or with mash and lingonberries.', 'The cheapest way to taste real Swedish fish; eat by the water.'],
      es: ['Nystekt Strömming (Slussen)', 'Un food truck en Slussen que fríe arenque báltico fresco, sobre pan crujiente o con puré y arándanos.', 'La forma más barata de probar pescado sueco; cómelo junto al agua.'],
      de: ['Nystekt Strömming (Slussen)', 'Ein Imbisswagen an der Slussen, der frischen Ostseehering brät – auf Knäckebrot oder mit Püree und Preiselbeeren.', 'Der günstigste Weg zu echtem schwedischem Fisch; am Wasser essen.'],
      fr: ['Nystekt Strömming (Slussen)', 'Un food truck à Slussen qui frit du hareng de la Baltique, sur pain croustillant ou avec purée et airelles.', 'La façon la moins chère de goûter un vrai poisson suédois ; mangez au bord de l’eau.'],
      it: ['Nystekt Strömming (Slussen)', 'Un food truck a Slussen che frigge aringhe baltiche fresche, su pane croccante o con purè e mirtilli rossi.', 'Il modo più economico di assaggiare il vero pesce svedese; mangialo sull’acqua.'],
    }, { price: level(1), address: 'Södermalmstorg, Slussen', menu: [
      ['Fried herring on crispbread', undefined, 'жареная салака на хрустящем хлебе|fried herring on crispbread|arenque frito sobre pan crujiente|gebratener Hering auf Knäckebrot|hareng frit sur pain croustillant|aringa fritta su pane croccante'],
      ['Herring with mash', undefined, 'салака с пюре и брусникой|herring with mash and lingonberries|arenque con puré y arándanos|Hering mit Püree und Preiselbeeren|hareng, purée et airelles|aringa con purè e mirtilli rossi'],
    ] }),
    P('cafe-saturnus', 'food', 59.3388, 18.0716, FOOD, 4.5, 4900, ['food'], {
      ru: ['Café Saturnus', 'Кафе в Эстермальме, знаменитое огромными коричными булочками «канельбулле» размером с тарелку.', 'Одна булочка — на двоих; к ней кофе — это и есть шведская «фика».'],
      en: ['Café Saturnus', 'An Östermalm café famous for its plate-sized cinnamon buns.', 'One bun is enough for two; with coffee, that’s Swedish fika.'],
      es: ['Café Saturnus', 'Un café de Östermalm famoso por sus rollos de canela del tamaño de un plato.', 'Un bollo da para dos; con café, eso es el fika sueco.'],
      de: ['Café Saturnus', 'Ein Café in Östermalm, berühmt für tellergroße Zimtschnecken.', 'Eine Schnecke reicht für zwei; mit Kaffee ist das schwedische Fika.'],
      fr: ['Café Saturnus', 'Un café d’Östermalm célèbre pour ses brioches à la cannelle grandes comme une assiette.', 'Une brioche suffit pour deux ; avec un café, c’est la fika suédoise.'],
      it: ['Café Saturnus', 'Un caffè di Östermalm famoso per le girelle alla cannella grandi come un piatto.', 'Una girella basta per due; con il caffè è la fika svedese.'],
    }, { price: level(1), address: 'Eriksbergsgatan 6', menu: [
      ['Kanelbulle', undefined, 'огромная булочка с корицей|giant cinnamon bun|rollo de canela gigante|riesige Zimtschnecke|énorme brioche à la cannelle|girella alla cannella gigante'],
      ['Bryggkaffe', undefined, 'фильтр-кофе|filter coffee|café de filtro|Filterkaffee|café filtre|caffè filtro'],
    ] }),
    P('hermans', 'food', 59.3183, 18.0794, VIEW, 4.5, 6100, ['food', 'views'], {
      ru: ['Hermans', 'Вегетарианский шведский стол на Сёдермальме с садом-террасой на скале и видом на воду и Юргорден.', 'Шведский стол по фиксированной цене; летом садитесь в саду на закате.'],
      en: ['Hermans', 'A vegetarian buffet on Södermalm with a clifftop garden terrace overlooking the water and Djurgården.', 'A fixed-price buffet; in summer sit in the garden at sunset.'],
      es: ['Hermans', 'Un bufé vegetariano en Södermalm con terraza-jardín en lo alto del acantilado y vistas al agua y Djurgården.', 'Bufé a precio fijo; en verano siéntate en el jardín al atardecer.'],
      de: ['Hermans', 'Ein vegetarisches Buffet auf Södermalm mit Gartenterrasse auf dem Fels und Blick aufs Wasser und Djurgården.', 'Buffet zum Festpreis; im Sommer zum Sonnenuntergang im Garten sitzen.'],
      fr: ['Hermans', 'Un buffet végétarien à Södermalm avec jardin-terrasse sur la falaise, vue sur l’eau et Djurgården.', 'Buffet à prix fixe ; l’été, installez-vous au jardin au coucher du soleil.'],
      it: ['Hermans', 'Un buffet vegetariano a Södermalm con terrazza-giardino sulla scogliera e vista sull’acqua e Djurgården.', 'Buffet a prezzo fisso; d’estate siediti in giardino al tramonto.'],
    }, { spot: 'hidden', price: level(2), address: 'Fjällgatan 23B', menu: [
      ['Vegetarian buffet', undefined, 'вегетарианский шведский стол|vegetarian buffet|bufé vegetariano|vegetarisches Buffet|buffet végétarien|buffet vegetariano'],
      ['Dessert', undefined, 'десерт|dessert|postre|Dessert|dessert|dolce'],
    ] }),
    P('kvarnen', 'food', 59.3156, 18.0726, DINE, 4.4, 6600, ['food', 'nightlife', 'history'], {
      ru: ['Kvarnen', 'Пивной зал 1908 года на Сёдермальме с высокими потолками и шведской домашней едой — фрикадельки, сельдь и не только.', 'Вечером — бар и ночной клуб; ужинайте пораньше.'],
      en: ['Kvarnen', 'A 1908 beer hall on Södermalm with high ceilings and Swedish home food — meatballs, herring and more.', 'Later it becomes a bar and club; dine early.'],
      es: ['Kvarnen', 'Una cervecería de 1908 en Södermalm con techos altos y comida casera sueca: albóndigas, arenque y más.', 'Más tarde se vuelve bar y club; cena temprano.'],
      de: ['Kvarnen', 'Eine Bierhalle von 1908 auf Södermalm mit hohen Decken und schwedischer Hausmannskost – Köttbullar, Hering und mehr.', 'Später Bar und Club; früh essen.'],
      fr: ['Kvarnen', 'Une brasserie de 1908 à Södermalm aux hauts plafonds, cuisine suédoise familiale : boulettes, hareng et plus.', 'Plus tard, bar et club ; dînez tôt.'],
      it: ['Kvarnen', 'Una birreria del 1908 a Södermalm con soffitti alti e cucina casalinga svedese: polpette, aringhe e altro.', 'Più tardi diventa bar e club; cena presto.'],
    }, { price: level(2), address: 'Tjärhovsgatan 4', menu: [
      ['Köttbullar', undefined, 'шведские фрикадельки|Swedish meatballs|albóndigas suecas|Köttbullar|boulettes suédoises|polpette svedesi'],
      ['Swedish beer', undefined, 'шведское пиво|Swedish beer|cerveza sueca|schwedisches Bier|bière suédoise|birra svedese'],
    ] }),
    P('sturehof', 'food', 59.3359, 18.0739, FOOD, 4.4, 7900, ['food', 'nightlife'], {
      ru: ['Sturehof', 'Рыбная брассери с 1897 года на Стуреплан: устрицы, креветки «скаген», рыба дня и бар, где собирается модная публика.', 'Попробуйте тост «скаген» с креветками; бронируйте вечером.'],
      en: ['Sturehof', 'A seafood brasserie since 1897 on Stureplan: oysters, toast skagen, fish of the day and a buzzing bar.', 'Try the toast skagen with prawns; book in the evening.'],
      es: ['Sturehof', 'Una brasserie de marisco desde 1897 en Stureplan: ostras, toast skagen, pescado del día y un bar animado.', 'Prueba el toast skagen con gambas; reserva por la noche.'],
      de: ['Sturehof', 'Eine Fischbrasserie seit 1897 am Stureplan: Austern, Toast Skagen, Tagesfisch und eine lebhafte Bar.', 'Toast Skagen mit Krabben probieren; abends reservieren.'],
      fr: ['Sturehof', 'Une brasserie de la mer depuis 1897 sur Stureplan : huîtres, toast skagen, poisson du jour et bar animé.', 'Goûtez le toast skagen aux crevettes ; réservez le soir.'],
      it: ['Sturehof', 'Una brasserie di pesce dal 1897 a Stureplan: ostriche, toast skagen, pesce del giorno e un bar vivace.', 'Prova il toast skagen con gamberetti; prenota la sera.'],
    }, { price: level(3), address: 'Stureplan 2', menu: [
      ['Toast skagen', undefined, 'тост с креветками в майонезе с укропом|toast with prawns in dill mayo|tostada con gambas y mayonesa de eneldo|Toast mit Krabben in Dillmayonnaise|toast aux crevettes et mayonnaise à l’aneth|toast con gamberetti e maionese all’aneto'],
      ['Oysters', undefined, 'устрицы|oysters|ostras|Austern|huîtres|ostriche'],
    ] }),
    P('polkagris', 'food', 59.3243, 18.071, OLD, 4.5, 2900, ['food'], {
      ru: ['Gamla Stans Polkagriskokeri', 'Лавка в Гамла Стан, где на глазах тянут и крутят «полкагрис» — шведские полосатые мятные леденцы-трости.', 'Застаньте мастеров за работой — леденцы ещё тёплые и мягкие.'],
      en: ['Gamla Stans Polkagriskokeri', 'A Gamla Stan shop where polkagris — Swedish striped peppermint sticks — are pulled and twisted in front of you.', 'Catch the makers at work — the sticks are still warm and soft.'],
      es: ['Gamla Stans Polkagriskokeri', 'Una tienda de Gamla Stan donde se estiran y retuercen a la vista los polkagris, bastones suecos de menta a rayas.', 'Ve cuando trabajan: los caramelos aún están tibios y blandos.'],
      de: ['Gamla Stans Polkagriskokeri', 'Ein Laden in Gamla Stan, in dem Polkagris – schwedische gestreifte Pfefferminzstangen – vor den Augen gezogen und gedreht werden.', 'Den Machern zusehen – die Stangen sind noch warm und weich.'],
      fr: ['Gamla Stans Polkagriskokeri', 'Une boutique de Gamla Stan où l’on étire et torsade sous vos yeux les polkagris, sucres d’orge suédois à la menthe rayés.', 'Venez pendant la fabrication : les bâtons sont encore tièdes et souples.'],
      it: ['Gamla Stans Polkagriskokeri', 'Un negozio di Gamla Stan dove si tirano e attorcigliano a vista i polkagris, bastoncini svedesi alla menta a strisce.', 'Guarda i maestri al lavoro: i bastoncini sono ancora tiepidi e morbidi.'],
    }, { price: level(1), address: 'Lilla Nygatan 18', menu: [
      ['Polkagris', undefined, 'мятный полосатый леденец|striped peppermint stick|bastón de menta a rayas|gestreifte Pfefferminzstange|sucre d’orge à la menthe rayé|bastoncino di menta a strisce'],
      ['Flavoured sticks', undefined, 'леденцы с разными вкусами|flavoured candy sticks|bastones de sabores|Zuckerstangen mit Geschmack|bâtons aromatisés|bastoncini aromatizzati'],
    ] }),
  ],
  routes: [
    D(['royal-palace', '=stockholm-gamla-stan', 'nobel-prize-museum', '=stockholm-martin-trotzigs-grand', 'tradition', '=stockholm-city-hall', '=stockholm-monteliusvagen', 'den-gyldene-freden'],
      'Гамла Стан, дворец и Ратуша|Gamla Stan, the palace and City Hall|Gamla Stan, el palacio y el Ayuntamiento|Gamla Stan, Schloss und Rathaus|Gamla Stan, le palais et l’hôtel de ville|Gamla Stan, il palazzo e il Municipio'),
    D(['=stockholm-vete-katten', 'moderna-museet', '=stockholm-vasa-museum', 'nordic-museum', '=stockholm-rosendals-tradgard', 'skansen', 'abba-museum', 'aira'],
      'Остров Юргорден: «Васа», Скансен и ABBA|Djurgården: Vasa, Skansen and ABBA|Djurgården: el Vasa, Skansen y ABBA|Djurgården: Vasa, Skansen und ABBA|Djurgården : Vasa, Skansen et ABBA|Djurgården: Vasa, Skansen e ABBA'),
    D(['cafe-saturnus', 'drottningholm', '=stockholm-ostermalms-saluhall', 'fotografiska', 'nystekt-stromming', 'sofo', 'frantzen'],
      'Дроттнингхольм, Сёдермальм и ужин у Франтцена|Drottningholm, Södermalm and dinner at Frantzén|Drottningholm, Södermalm y cena en Frantzén|Drottningholm, Södermalm und Dinner bei Frantzén|Drottningholm, Södermalm et dîner chez Frantzén|Drottningholm, Södermalm e cena da Frantzén'),
  ],
};

export default pack;
