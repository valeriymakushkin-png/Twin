import type { CityPack } from '../types';
import { free, level, makeDay, makePlace } from './_kit.ts';

const P = makePlace('takayama');
const D = makeDay('takayama');
const BRIDGE = 'LyCOPFIZVA4';
const SHOP = 'isimoyRV3QI';
const VALLEY = 'TgVLoFJmigg';
const SNOW = 'Pi6Qu__PZBU';
const THATCH = '7sgGGaUXRwc';
const VILLAGE = '1d4uy1cl_9Y';

const pack: CityPack = {
  country: 'JP',
  city: 'takayama',
  places: [
    P('sanmachi-suji', 'attraction', 36.1405, 137.26, SHOP, 4.6, 26000, ['oldtown', 'history', 'photo'], {
      ru: ['Санмати-судзи', 'Три улицы купеческих домов эпохи Эдо из тёмного дерева; над дверями сакэварен висят шары из кедровых веток — знак нового саке.', 'Приходите до 9 утра или к вечеру — днём здесь очень людно.'],
      en: ['Sanmachi-suji', 'Three streets of dark-wood Edo-period merchant houses; cedar balls over brewery doors announce the new sake.', 'Come before 9 am or towards evening — midday is very busy.'],
      es: ['Sanmachi-suji', 'Tres calles de casas de comerciantes del periodo Edo en madera oscura; bolas de cedro sobre las bodegas anuncian el sake nuevo.', 'Ve antes de las 9 o al atardecer: a mediodía hay mucha gente.'],
      de: ['Sanmachi-suji', 'Drei Straßen dunkler Kaufmannshäuser der Edo-Zeit; Zedernkugeln über Brauereitüren kündigen neuen Sake an.', 'Vor 9 Uhr oder gegen Abend kommen – mittags ist es sehr voll.'],
      fr: ['Sanmachi-suji', 'Trois rues de maisons marchandes d’Edo en bois sombre ; des boules de cèdre au-dessus des brasseries annoncent le saké nouveau.', 'Venez avant 9 h ou en fin de journée : à midi, c’est bondé.'],
      it: ['Sanmachi-suji', 'Tre vie di case mercantili del periodo Edo in legno scuro; sfere di cedro sopra le porte delle distillerie annunciano il sake nuovo.', 'Vieni prima delle 9 o verso sera: a mezzogiorno è affollato.'],
    }, { spot: 'insta', price: free }),
    P('takayama-jinya', 'attraction', 36.1393, 137.2577, SHOP, 4.4, 12000, ['history', 'museums'], {
      ru: ['Такаяма Дзинъя', 'Единственное сохранившееся здание местного управления сёгуната эпохи Эдо: залы, рисовые склады и комната допросов.', 'Перед ним по утрам работает небольшой рынок Дзинъя-маэ.'],
      en: ['Takayama Jinya', 'The only surviving Edo-period shogunate local government office: halls, rice storehouses and an interrogation room.', 'The small Jinya-mae morning market sets up in front of it.'],
      es: ['Takayama Jinya', 'La única oficina de gobierno local del shogunato del periodo Edo que se conserva: salas, graneros de arroz y una sala de interrogatorios.', 'Delante se monta por las mañanas el pequeño mercado Jinya-mae.'],
      de: ['Takayama Jinya', 'Das einzige erhaltene lokale Shogunatsamt der Edo-Zeit: Hallen, Reisspeicher und ein Verhörzimmer.', 'Davor findet morgens der kleine Jinya-mae-Markt statt.'],
      fr: ['Takayama Jinya', 'Le seul bureau administratif local du shogunat d’Edo conservé : salles, greniers à riz et salle d’interrogatoire.', 'Le petit marché matinal Jinya-mae s’installe devant.'],
      it: ['Takayama Jinya', 'L’unico ufficio di governo locale dello shogunato del periodo Edo rimasto: sale, granai di riso e una stanza degli interrogatori.', 'Davanti si tiene al mattino il piccolo mercato Jinya-mae.'],
    }, { price: level(1) }),
    P('nakabashi', 'attraction', 36.14, 137.2595, BRIDGE, 4.5, 9100, ['photo', 'oldtown'], {
      ru: ['Мост Накабаси', 'Красный мост через реку Миягава — символ Такаямы; весной его обрамляет сакура.', 'Во время праздников по нему проносят праздничные повозки ятай.'],
      en: ['Nakabashi Bridge', 'The red bridge over the Miyagawa River, Takayama’s symbol; in spring it’s framed by cherry blossom.', 'During the festivals the yatai floats are pulled across it.'],
      es: ['Puente Nakabashi', 'El puente rojo sobre el río Miyagawa, símbolo de Takayama; en primavera lo enmarcan los cerezos.', 'En las fiestas lo cruzan las carrozas yatai.'],
      de: ['Nakabashi-Brücke', 'Die rote Brücke über den Miyagawa, Takayamas Symbol; im Frühling von Kirschblüten gerahmt.', 'Zu den Festen ziehen die Yatai-Wagen darüber.'],
      fr: ['Pont Nakabashi', 'Le pont rouge sur la Miyagawa, symbole de Takayama ; au printemps, les cerisiers l’encadrent.', 'Pendant les fêtes, les chars yatai le traversent.'],
      it: ['Ponte Nakabashi', 'Il ponte rosso sul fiume Miyagawa, simbolo di Takayama; in primavera lo incorniciano i ciliegi.', 'Durante le feste ci passano i carri yatai.'],
    }, { spot: 'insta', price: free }),
    P('yatai-kaikan', 'attraction', 36.149, 137.2625, SHOP, 4.4, 7400, ['museums', 'culture'], {
      ru: ['Выставочный зал праздничных повозок', 'Зал у святилища Сакураяма Хатиман-гу, где круглый год стоят настоящие резные повозки ятай осеннего праздника.', 'Если не попадаете на праздник в октябре — здесь их видно вблизи.'],
      en: ['Takayama Festival Floats Hall', 'A hall at Sakurayama Hachimangū where real carved yatai floats from the autumn festival are on show all year.', 'If you miss the October festival, this is where you see them up close.'],
      es: ['Salón de las carrozas del festival', 'Un salón en el santuario Sakurayama Hachimangū donde se exponen todo el año auténticas carrozas yatai talladas del festival de otoño.', 'Si no coincides con la fiesta de octubre, aquí las ves de cerca.'],
      de: ['Halle der Festwagen', 'Eine Halle am Schrein Sakurayama Hachimangū, in der ganzjährig echte geschnitzte Yatai-Wagen des Herbstfests stehen.', 'Wer das Oktoberfest verpasst, sieht sie hier aus der Nähe.'],
      fr: ['Salle des chars de la fête', 'Une salle au sanctuaire Sakurayama Hachimangū où de vrais chars yatai sculptés de la fête d’automne sont exposés toute l’année.', 'Si vous manquez la fête d’octobre, c’est ici qu’on les voit de près.'],
      it: ['Sala dei carri della festa', 'Una sala al santuario Sakurayama Hachimangū dove sono esposti tutto l’anno veri carri yatai intagliati della festa d’autunno.', 'Se perdi la festa di ottobre, qui li vedi da vicino.'],
    }, { price: level(1) }),
    P('hida-folk-village', 'attraction', 36.136, 137.242, THATCH, 4.5, 11000, ['history', 'museums', 'architecture'], {
      ru: ['Деревня Хида-но Сато', 'Музей под открытым небом с перевезёнными сюда крестьянскими домами гассё-дзукури под крутыми соломенными крышами у пруда.', 'Удобная альтернатива Сиракава-го, если нет времени на поездку.'],
      en: ['Hida Folk Village', 'An open-air museum of relocated gasshō-zukuri farmhouses under steep thatched roofs around a pond.', 'A handy alternative to Shirakawa-gō if you’re short on time.'],
      es: ['Pueblo Folclórico de Hida', 'Un museo al aire libre con granjas gasshō-zukuri trasladadas, de empinados tejados de paja, alrededor de un estanque.', 'Una buena alternativa a Shirakawa-gō si vas justo de tiempo.'],
      de: ['Freilichtmuseum Hida no Sato', 'Ein Freilichtmuseum mit hierher versetzten Gasshō-zukuri-Bauernhäusern unter steilen Strohdächern rund um einen Teich.', 'Eine praktische Alternative zu Shirakawa-gō bei wenig Zeit.'],
      fr: ['Village folklorique de Hida', 'Un écomusée de fermes gasshō-zukuri déplacées, aux toits de chaume pentus, autour d’un étang.', 'Une bonne alternative à Shirakawa-gō si le temps manque.'],
      it: ['Villaggio folcloristico di Hida', 'Un museo all’aperto di fattorie gasshō-zukuri trasferite qui, dai ripidi tetti di paglia, attorno a uno stagno.', 'Un’ottima alternativa a Shirakawa-gō se hai poco tempo.'],
    }, { price: level(1) }),
    P('higashiyama-walking-course', 'nature', 36.143, 137.2655, VILLAGE, 4.5, 2600, ['hiking', 'temples'], {
      ru: ['Тропа Хигасияма', 'Тихая тропа около 3,5 км по восточным холмам мимо дюжины храмов и святилищ к руинам замка Такаяма.', 'Почти без туристов — лучше всего в осенние клёны.'],
      en: ['Higashiyama Walking Course', 'A quiet trail of about 3.5 km through the eastern hills past a dozen temples and shrines to the Takayama Castle ruins.', 'Almost tourist-free — best among the autumn maples.'],
      es: ['Ruta de Higashiyama', 'Un tranquilo sendero de unos 3,5 km por las colinas del este, pasando una docena de templos, hasta las ruinas del castillo.', 'Casi sin turistas: mejor con los arces de otoño.'],
      de: ['Higashiyama-Spazierweg', 'Ein ruhiger, rund 3,5 km langer Weg durch die östlichen Hügel an einem Dutzend Tempeln vorbei zu den Burgruinen.', 'Fast ohne Touristen – am schönsten im Herbstahorn.'],
      fr: ['Promenade de Higashiyama', 'Un paisible sentier d’environ 3,5 km dans les collines de l’est, longeant une douzaine de temples jusqu’aux ruines du château.', 'Presque sans touristes : idéal sous les érables d’automne.'],
      it: ['Passeggiata di Higashiyama', 'Un tranquillo sentiero di circa 3,5 km sulle colline orientali, oltre una dozzina di templi, fino ai resti del castello.', 'Quasi senza turisti: il meglio con gli aceri d’autunno.'],
    }, { spot: 'hidden', price: free }),
    P('kusakabe-folk-museum', 'attraction', 36.145, 137.26, SHOP, 4.4, 4100, ['history', 'architecture'], {
      ru: ['Дом-музей Кусакабэ', 'Купеческий дом 1879 года — важный культурный объект — с огромными тёмными балками и световым двором.', 'Хозяева предлагают чай и сладость — посидите у очага.'],
      en: ['Kusakabe Folk Museum', 'An 1879 merchant house, an Important Cultural Property, with massive dark beams and a light-filled atrium.', 'Tea and a sweet are offered — sit a while by the hearth.'],
      es: ['Museo Folclórico Kusakabe', 'Una casa de comerciantes de 1879, Bien Cultural Importante, con enormes vigas oscuras y un patio luminoso.', 'Ofrecen té y un dulce: siéntate un rato junto al hogar.'],
      de: ['Volkskundemuseum Kusakabe', 'Ein Kaufmannshaus von 1879, wichtiges Kulturgut, mit mächtigen dunklen Balken und lichtem Innenhof.', 'Es gibt Tee und eine Süßigkeit – eine Weile am Herd sitzen.'],
      fr: ['Musée folklorique Kusakabe', 'Une maison de marchand de 1879, bien culturel important, aux énormes poutres sombres et à l’atrium lumineux.', 'On vous offre thé et douceur : asseyez-vous près du foyer.'],
      it: ['Museo folcloristico Kusakabe', 'Una casa mercantile del 1879, Bene culturale importante, con enormi travi scure e un atrio luminoso.', 'Offrono tè e dolcetto: siediti un po’ vicino al focolare.'],
    }, { price: level(1) }),
    P('shirakawa-go', 'attraction', 36.257, 136.906, VALLEY, 4.7, 41000, ['unesco', 'history', 'photo'], {
      ru: ['Сиракава-го', 'Деревня ЮНЕСКО в горах: дома гассё-дзукури с крутыми соломенными крышами, похожими на сложенные в молитве ладони.', 'Поднимитесь на смотровую площадку Сирояма; зимние вечерние подсветки только по предварительной записи.'],
      en: ['Shirakawa-gō', 'A UNESCO mountain village of gasshō-zukuri houses whose steep thatched roofs look like hands joined in prayer.', 'Go up to the Shiroyama viewpoint; winter evening light-ups need advance booking.'],
      es: ['Shirakawa-gō', 'Un pueblo de montaña UNESCO con casas gasshō-zukuri de tejados de paja empinados, como manos unidas en oración.', 'Sube al mirador de Shiroyama; las iluminaciones nocturnas de invierno requieren reserva.'],
      de: ['Shirakawa-gō', 'Ein UNESCO-Bergdorf mit Gasshō-zukuri-Häusern, deren steile Strohdächer wie zum Gebet gefaltete Hände aussehen.', 'Zum Aussichtspunkt Shiroyama hinauf; die winterlichen Abendbeleuchtungen nur mit Vorab-Reservierung.'],
      fr: ['Shirakawa-gō', 'Un village de montagne UNESCO aux maisons gasshō-zukuri dont les toits de chaume pentus évoquent des mains jointes en prière.', 'Montez au belvédère de Shiroyama ; les illuminations d’hiver se réservent à l’avance.'],
      it: ['Shirakawa-gō', 'Un villaggio di montagna UNESCO con case gasshō-zukuri dai ripidi tetti di paglia simili a mani giunte in preghiera.', 'Sali al belvedere di Shiroyama; le illuminazioni serali d’inverno vanno prenotate.'],
    }, { spot: 'insta', price: free }),
    P('hida-furukawa', 'attraction', 36.238, 137.186, SNOW, 4.5, 4900, ['oldtown', 'photo'], {
      ru: ['Хида-Фурукава', 'Тихий городок в 15 минутах на поезде: канал с карпами вдоль белых амбаров и старые сакэварни.', 'Карпов из канала на зиму переносят в пруд — с ноября по апрель их здесь нет.'],
      en: ['Hida-Furukawa', 'A quiet town 15 minutes away by train: a carp canal along white storehouses and old sake breweries.', 'The carp are moved to a pond for winter — from November to April the canal is empty.'],
      es: ['Hida-Furukawa', 'Un pueblo tranquilo a 15 minutos en tren: un canal con carpas junto a almacenes blancos y viejas bodegas de sake.', 'En invierno trasladan las carpas a un estanque: de noviembre a abril no están.'],
      de: ['Hida-Furukawa', 'Ein stilles Städtchen 15 Zugminuten entfernt: ein Karpfenkanal an weißen Speichern und alte Sake-Brauereien.', 'Im Winter kommen die Karpfen in einen Teich – von November bis April fehlen sie.'],
      fr: ['Hida-Furukawa', 'Une petite ville paisible à 15 minutes en train : un canal à carpes le long d’entrepôts blancs et de vieilles brasseries.', 'L’hiver, les carpes sont déplacées dans un étang : absentes de novembre à avril.'],
      it: ['Hida-Furukawa', 'Una cittadina tranquilla a 15 minuti di treno: un canale con le carpe lungo magazzini bianchi e vecchie distillerie.', 'D’inverno le carpe vengono spostate in uno stagno: da novembre ad aprile non ci sono.'],
    }, { spot: 'hidden', price: free }),
    P('shinhotaka-ropeway', 'nature', 36.287, 137.575, SNOW, 4.6, 8900, ['mountains', 'views'], {
      ru: ['Канатная дорога Синхотака', 'Двухэтажные гондолы поднимают на высоту около 2150 м с панорамой Северных Японских Альп.', 'Наверху холодно даже летом — возьмите тёплую куртку.'],
      en: ['Shinhotaka Ropeway', 'Double-decker gondolas lift you to about 2,150 m with a panorama of the Northern Japan Alps.', 'It’s cold at the top even in summer — bring a warm jacket.'],
      es: ['Teleférico de Shinhotaka', 'Góndolas de dos pisos te suben a unos 2150 m con la panorámica de los Alpes japoneses del norte.', 'Arriba hace frío incluso en verano: lleva abrigo.'],
      de: ['Shinhotaka-Seilbahn', 'Doppelstöckige Gondeln bringen einen auf rund 2150 m mit Panorama der Nördlichen Japanischen Alpen.', 'Oben ist es selbst im Sommer kalt – warme Jacke mitnehmen.'],
      fr: ['Téléphérique de Shinhotaka', 'Des télécabines à deux étages montent à environ 2 150 m, avec un panorama sur les Alpes japonaises du Nord.', 'Il fait froid en haut même l’été : prenez une veste chaude.'],
      it: ['Funivia di Shinhotaka', 'Cabine a due piani salgono a circa 2150 m con il panorama delle Alpi giapponesi settentrionali.', 'In cima fa freddo anche d’estate: porta una giacca pesante.'],
    }, { spot: 'insta', price: level(2) }),
    P('hida-kokubunji', 'attraction', 36.142, 137.254, SHOP, 4.3, 2900, ['temples', 'history'], {
      ru: ['Хида Кокубун-дзи', 'Старейший храм Такаямы с трёхъярусной пагодой и гинкго, которому, по преданию, больше тысячи лет.', 'Храм в пяти минутах от вокзала — удобно начать день.'],
      en: ['Hida Kokubun-ji', 'Takayama’s oldest temple, with a three-storey pagoda and a ginkgo said to be over a thousand years old.', 'Five minutes from the station — an easy start to the day.'],
      es: ['Hida Kokubun-ji', 'El templo más antiguo de Takayama, con una pagoda de tres pisos y un ginkgo que, según dicen, tiene más de mil años.', 'A cinco minutos de la estación: fácil para empezar el día.'],
      de: ['Hida Kokubun-ji', 'Takayamas ältester Tempel mit dreistöckiger Pagode und einem Ginkgo, der über tausend Jahre alt sein soll.', 'Fünf Minuten vom Bahnhof – ein bequemer Tagesstart.'],
      fr: ['Hida Kokubun-ji', 'Le plus vieux temple de Takayama, avec une pagode à trois étages et un ginkgo réputé millénaire.', 'À cinq minutes de la gare : un départ facile.'],
      it: ['Hida Kokubun-ji', 'Il tempio più antico di Takayama, con una pagoda a tre piani e un ginkgo che si dice abbia più di mille anni.', 'A cinque minuti dalla stazione: comodo per iniziare.'],
    }, { price: free }),
    P('miyagawa-morning-market', 'food', 36.1445, 137.259, BRIDGE, 4.3, 14000, ['food', 'market'], {
      ru: ['Утренний рынок Миягава', 'Ежедневный рынок вдоль реки: овощи, маринады, мисо, сладости и уличная еда от местных фермеров.', 'Работает примерно с 7 до 12 — приходите пораньше.'],
      en: ['Miyagawa Morning Market', 'A daily riverside market: vegetables, pickles, miso, sweets and street snacks from local farmers.', 'Runs roughly 7 am to noon — come early.'],
      es: ['Mercado matinal de Miyagawa', 'Un mercado diario junto al río: verduras, encurtidos, miso, dulces y bocados de agricultores locales.', 'Abre más o menos de 7 a 12: ve temprano.'],
      de: ['Morgenmarkt Miyagawa', 'Ein täglicher Markt am Fluss: Gemüse, Eingelegtes, Miso, Süßes und Snacks von Bauern aus der Gegend.', 'Etwa 7 bis 12 Uhr – früh kommen.'],
      fr: ['Marché matinal de Miyagawa', 'Un marché quotidien au bord de la rivière : légumes, pickles, miso, douceurs et en-cas de producteurs locaux.', 'Environ de 7 h à midi : venez tôt.'],
      it: ['Mercato mattutino di Miyagawa', 'Un mercato quotidiano sul fiume: verdure, sottaceti, miso, dolci e snack di contadini locali.', 'Più o meno dalle 7 a mezzogiorno: vieni presto.'],
    }, { price: level(1), menu: [
      ['Mitarashi dango', undefined, 'рисовые шарики в соевой глазури|rice dumplings glazed with soy sauce|bolitas de arroz glaseadas con soja|Reisklößchen mit Sojaglasur|boulettes de riz glacées au soja|gnocchetti di riso glassati alla soia'],
      ['Hida pickles', undefined, 'местные маринованные овощи|local pickled vegetables|encurtidos locales|lokal eingelegtes Gemüse|légumes marinés locaux|verdure sottaceto locali'],
    ] }),
    P('kotte-ushi', 'food', 36.1408, 137.2603, SHOP, 4.3, 7600, ['food', 'streetfood'], {
      ru: ['Котте-уси', 'Лавка в Санмати, где нигири с мраморной говядиной хида подают прямо на рисовом крекере вместо тарелки.', 'Крекер съедается вместе с суши — ничего не выбрасывайте.'],
      en: ['Kotte Ushi', 'A Sanmachi stall serving marbled Hida beef nigiri on a rice cracker instead of a plate.', 'The cracker is edible too — nothing gets thrown away.'],
      es: ['Kotte Ushi', 'Un puesto de Sanmachi que sirve nigiris de ternera veteada de Hida sobre una galleta de arroz en vez de plato.', 'La galleta también se come: no se tira nada.'],
      de: ['Kotte Ushi', 'Ein Stand in Sanmachi mit Nigiri vom marmorierten Hida-Rind, serviert auf einem Reiscracker statt Teller.', 'Der Cracker wird mitgegessen – nichts wird weggeworfen.'],
      fr: ['Kotte Ushi', 'Une échoppe de Sanmachi servant des nigiris de bœuf persillé de Hida sur un cracker de riz en guise d’assiette.', 'Le cracker se mange aussi : rien ne se jette.'],
      it: ['Kotte Ushi', 'Un banco di Sanmachi che serve nigiri di manzo marmorizzato di Hida su un cracker di riso al posto del piatto.', 'Anche il cracker si mangia: non si butta nulla.'],
    }, { spot: 'insta', price: level(2), menu: [
      ['Hida beef nigiri (3 pieces)', undefined, 'три нигири с говядиной хида|three Hida beef nigiri|tres nigiris de ternera de Hida|drei Hida-Rind-Nigiri|trois nigiris de bœuf de Hida|tre nigiri di manzo di Hida'],
      ['Seared beef nigiri', undefined, 'нигири с обожжённой говядиной|seared beef nigiri|nigiri de ternera soasada|Nigiri mit angeflämmtem Rind|nigiri de bœuf saisi|nigiri di manzo scottato'],
    ] }),
    P('sakaguchiya', 'food', 36.141, 137.26, SHOP, 4.3, 3900, ['food', 'streetfood'], {
      ru: ['Сакагутия', 'Ещё одна известная лавка в Санмати с нигири из говядины хида и тарелочками говядины для перекуса.', 'Сравните с соседними лавками — у каждой свой рецепт соуса.'],
      en: ['Sakaguchiya', 'Another well-known Sanmachi shop with Hida beef nigiri and little plates of beef to snack on.', 'Compare with the neighbours — each has its own sauce.'],
      es: ['Sakaguchiya', 'Otra conocida tienda de Sanmachi con nigiris de ternera de Hida y platitos de carne para picar.', 'Compara con las vecinas: cada una tiene su salsa.'],
      de: ['Sakaguchiya', 'Ein weiterer bekannter Laden in Sanmachi mit Hida-Rind-Nigiri und kleinen Rindfleischtellern zum Naschen.', 'Mit den Nachbarn vergleichen – jeder hat seine eigene Soße.'],
      fr: ['Sakaguchiya', 'Une autre adresse connue de Sanmachi, avec nigiris de bœuf de Hida et petites assiettes de bœuf à grignoter.', 'Comparez avec les voisins : chacun a sa sauce.'],
      it: ['Sakaguchiya', 'Un altro noto negozio di Sanmachi con nigiri di manzo di Hida e piattini di carne da spizzicare.', 'Confronta con i vicini: ognuno ha la sua salsa.'],
    }, { price: level(2), menu: [
      ['Hida beef nigiri', undefined, 'нигири с говядиной хида|Hida beef nigiri|nigiri de ternera de Hida|Hida-Rind-Nigiri|nigiri de bœuf de Hida|nigiri di manzo di Hida'],
      ['Hida beef croquette', undefined, 'крокет с говядиной хида|Hida beef croquette|croqueta de ternera de Hida|Hida-Rind-Krokette|croquette au bœuf de Hida|crocchetta di manzo di Hida'],
    ] }),
    P('center4-hamburgers', 'food', 36.1435, 137.2575, SHOP, 4.5, 3400, ['food'], {
      ru: ['Center4 Hamburgers', 'Американская бургерная с котлетами из говядины хида — любимое место местных и путешественников.', 'Возьмите бургер с говядиной хида и домашний картофель.'],
      en: ['Center4 Hamburgers', 'An American-style burger joint with Hida beef patties — loved by locals and travellers.', 'Get the Hida beef burger and the house fries.'],
      es: ['Center4 Hamburgers', 'Una hamburguesería al estilo americano con carne de ternera de Hida, querida por locales y viajeros.', 'Pide la hamburguesa de Hida y las patatas de la casa.'],
      de: ['Center4 Hamburgers', 'Ein amerikanisches Burgerlokal mit Patties vom Hida-Rind – bei Einheimischen und Reisenden beliebt.', 'Den Hida-Rind-Burger und die Hauspommes nehmen.'],
      fr: ['Center4 Hamburgers', 'Un burger à l’américaine avec steaks de bœuf de Hida, adoré des habitants et des voyageurs.', 'Prenez le burger au bœuf de Hida et les frites maison.'],
      it: ['Center4 Hamburgers', 'Un locale di hamburger all’americana con polpette di manzo di Hida, amato da locali e viaggiatori.', 'Prendi l’hamburger di manzo di Hida e le patatine della casa.'],
    }, { price: level(2), menu: [
      ['Hida beef burger', undefined, 'бургер с говядиной хида|Hida beef burger|hamburguesa de ternera de Hida|Hida-Rind-Burger|burger au bœuf de Hida|hamburger di manzo di Hida'],
      ['Fries', undefined, 'картофель фри|fries|patatas fritas|Pommes|frites|patatine'],
    ] }),
    P('kyoya', 'food', 36.146, 137.26, THATCH, 4.4, 3600, ['food', 'history'], {
      ru: ['Кёя', 'Ресторан в старом доме с очагами-ирори: местная кухня Хида — хоба-мисо на магнолиевом листе и говядина хида.', 'Садитесь у ирори — блюда жарят прямо при вас.'],
      en: ['Kyoya', 'A restaurant in an old house with irori hearths: Hida cooking — hōba miso on a magnolia leaf and Hida beef.', 'Sit at an irori — food is grilled right in front of you.'],
      es: ['Kyoya', 'Un restaurante en una vieja casa con hogares irori: cocina de Hida, hōba miso sobre hoja de magnolia y ternera de Hida.', 'Siéntate en un irori: asan delante de ti.'],
      de: ['Kyoya', 'Ein Restaurant in einem alten Haus mit Irori-Feuerstellen: Hida-Küche – Hōba-Miso auf Magnolienblatt und Hida-Rind.', 'Am Irori sitzen – gegrillt wird direkt vor einem.'],
      fr: ['Kyoya', 'Un restaurant dans une vieille maison à foyers irori : cuisine de Hida, hōba miso sur feuille de magnolia et bœuf de Hida.', 'Asseyez-vous à un irori : on grille devant vous.'],
      it: ['Kyoya', 'Un ristorante in una vecchia casa con focolari irori: cucina di Hida, hōba miso su foglia di magnolia e manzo di Hida.', 'Siediti all’irori: si griglia davanti a te.'],
    }, { price: level(2), menu: [
      ['Hōba miso with Hida beef', undefined, 'говядина хида с мисо на листе магнолии|Hida beef with miso on a magnolia leaf|ternera de Hida con miso sobre hoja de magnolia|Hida-Rind mit Miso auf Magnolienblatt|bœuf de Hida au miso sur feuille de magnolia|manzo di Hida con miso su foglia di magnolia'],
      ['Hida soba', undefined, 'местная гречневая лапша|local buckwheat noodles|fideos locales de alforfón|lokale Buchweizennudeln|nouilles de sarrasin locales|soba locali'],
    ] }),
    P('suzuya', 'food', 36.143, 137.254, THATCH, 4.3, 2200, ['food'], {
      ru: ['Судзуя', 'Семейный ресторан кухни Хида у вокзала: хоба-мисо, говядина хида, горные овощи сансай.', 'Вечером без брони — очередь; приходите к открытию.'],
      en: ['Suzuya', 'A family-run Hida restaurant near the station: hōba miso, Hida beef and sansai mountain vegetables.', 'Without a booking there’s a queue in the evening; come at opening.'],
      es: ['Suzuya', 'Un restaurante familiar de cocina de Hida cerca de la estación: hōba miso, ternera de Hida y verduras de montaña sansai.', 'Sin reserva hay cola por la noche; ve a la apertura.'],
      de: ['Suzuya', 'Ein Familienrestaurant mit Hida-Küche nahe dem Bahnhof: Hōba-Miso, Hida-Rind und Sansai-Berggemüse.', 'Ohne Reservierung abends Schlange; zur Öffnung kommen.'],
      fr: ['Suzuya', 'Un restaurant familial de cuisine de Hida près de la gare : hōba miso, bœuf de Hida et légumes de montagne sansai.', 'Sans réservation, file le soir ; venez à l’ouverture.'],
      it: ['Suzuya', 'Un ristorante familiare di cucina di Hida vicino alla stazione: hōba miso, manzo di Hida e verdure di montagna sansai.', 'Senza prenotazione la sera c’è fila; vieni all’apertura.'],
    }, { price: level(2), menu: [
      ['Hōba miso set', undefined, 'сет с мисо на листе магнолии|miso grilled on a magnolia leaf set|menú de miso en hoja de magnolia|Set mit Miso auf Magnolienblatt|menu miso sur feuille de magnolia|set di miso su foglia di magnolia'],
      ['Sansai', undefined, 'горные дикие овощи|wild mountain vegetables|verduras silvestres de montaña|wildes Berggemüse|légumes sauvages de montagne|verdure selvatiche di montagna'],
    ] }),
    P('chukasoba-iroha', 'food', 36.144, 137.256, SHOP, 4.3, 2800, ['food'], {
      ru: ['Тюка-соба Ироха', 'Лавка такаямского рамэна: тонкая волнистая лапша в прозрачном бульоне на соевом соусе.', 'Такаяма-рамэн лёгкий — можно взять и как перекус.'],
      en: ['Chūka Soba Iroha', 'A Takayama ramen shop: thin wavy noodles in a clear soy-sauce broth.', 'Takayama ramen is light — fine as a snack too.'],
      es: ['Chūka Soba Iroha', 'Un local de ramen de Takayama: fideos finos y ondulados en caldo claro de soja.', 'El ramen de Takayama es ligero: vale como tentempié.'],
      de: ['Chūka Soba Iroha', 'Ein Takayama-Ramen-Laden: dünne gewellte Nudeln in klarer Sojabrühe.', 'Takayama-Ramen ist leicht – auch als Snack geeignet.'],
      fr: ['Chūka Soba Iroha', 'Une échoppe de ramen de Takayama : fines nouilles ondulées dans un bouillon clair à la sauce soja.', 'Le ramen de Takayama est léger : parfait en en-cas.'],
      it: ['Chūka Soba Iroha', 'Un locale di ramen di Takayama: noodle sottili e ondulati in un brodo chiaro alla soia.', 'Il ramen di Takayama è leggero: va bene anche come spuntino.'],
    }, { price: level(1), menu: [
      ['Takayama ramen', undefined, 'рамэн на соевом бульоне|soy-broth ramen|ramen de caldo de soja|Ramen in Sojabrühe|ramen au bouillon de soja|ramen in brodo di soia'],
      ['Chāshū-men', undefined, 'рамэн с тясю|ramen with chāshū pork|ramen con chāshū|Ramen mit Chāshū|ramen au chāshū|ramen con chāshū'],
    ] }),
    P('funasaka-shuzo', 'food', 36.14, 137.2605, SHOP, 4.4, 4300, ['food', 'history'], {
      ru: ['Сакэварня Фунасака', 'Сакэварня эпохи Эдо в Санмати с дегустационным баром и рестораном во дворе.', 'Возьмите дегустационный сет из трёх-четырёх саке.'],
      en: ['Funasaka Sake Brewery', 'An Edo-era brewery in Sanmachi with a tasting bar and a courtyard restaurant.', 'Get a tasting flight of three or four sakes.'],
      es: ['Bodega de sake Funasaka', 'Una bodega del periodo Edo en Sanmachi con barra de cata y restaurante en el patio.', 'Pide una cata de tres o cuatro sakes.'],
      de: ['Sake-Brauerei Funasaka', 'Eine Brauerei aus der Edo-Zeit in Sanmachi mit Probierbar und Hofrestaurant.', 'Ein Probierset mit drei oder vier Sake nehmen.'],
      fr: ['Brasserie de saké Funasaka', 'Une brasserie de l’époque d’Edo à Sanmachi, avec bar de dégustation et restaurant dans la cour.', 'Prenez une dégustation de trois ou quatre sakés.'],
      it: ['Distilleria di sake Funasaka', 'Una distilleria del periodo Edo a Sanmachi con banco di degustazione e ristorante nel cortile.', 'Prendi una degustazione di tre o quattro sake.'],
    }, { price: level(1), menu: [
      ['Sake tasting set', undefined, 'дегустация саке|sake tasting flight|cata de sake|Sake-Probierset|dégustation de saké|degustazione di sake'],
      ['Sake soft-serve', undefined, 'мороженое с саке|sake-flavoured soft-serve|helado de sake|Softeis mit Sake|glace au saké|gelato al sake'],
    ] }),
    P('harada-shuzo', 'food', 36.1415, 137.2602, SHOP, 4.4, 3100, ['food', 'history'], {
      ru: ['Сакэварня Харада', 'Сакэварня в Санмати, где за небольшую плату дают чашечку и разрешают попробовать много сортов.', 'Чашечку можно забрать на память.'],
      en: ['Harada Sake Brewery', 'A Sanmachi brewery where a small fee gets you a cup and the chance to taste many sakes.', 'You can keep the cup as a souvenir.'],
      es: ['Bodega de sake Harada', 'Una bodega de Sanmachi donde por poco dinero te dan una copa y puedes probar muchos sakes.', 'Te puedes quedar la copa de recuerdo.'],
      de: ['Sake-Brauerei Harada', 'Eine Brauerei in Sanmachi, in der man für wenig Geld einen Becher bekommt und viele Sake probieren darf.', 'Den Becher darf man als Andenken behalten.'],
      fr: ['Brasserie de saké Harada', 'Une brasserie de Sanmachi où, pour une petite somme, on reçoit une coupe pour goûter de nombreux sakés.', 'On peut garder la coupe en souvenir.'],
      it: ['Distilleria di sake Harada', 'Una distilleria di Sanmachi dove con poco ti danno un bicchierino per assaggiare molti sake.', 'Il bicchierino lo puoi tenere come ricordo.'],
    }, { price: level(1), menu: [
      ['Sake tasting with cup', undefined, 'дегустация с чашечкой на память|tasting with a keepsake cup|cata con copa de recuerdo|Verkostung mit Andenkenbecher|dégustation avec coupe souvenir|degustazione con bicchierino ricordo'],
      ['Sake lees sweets', undefined, 'сладости из сакэ-касу|sweets made with sake lees|dulces de lías de sake|Süßes aus Sake-Trester|douceurs à la lie de saké|dolci con fecce di sake'],
    ] }),
    P('jinya-dango', 'food', 36.1395, 137.2575, SHOP, 4.3, 1900, ['food', 'streetfood'], {
      ru: ['Дзинъя Данго', 'Крошечная лавка у Дзинъи, где на углях жарят такаямские митараси-данго — в несладкой соевой глазури.', 'В отличие от Киото, здесь данго солёные, а не сладкие.'],
      en: ['Jinya Dango', 'A tiny stall by the Jinya grilling Takayama-style mitarashi dango over charcoal — in an unsweetened soy glaze.', 'Unlike Kyoto’s, these dango are savoury, not sweet.'],
      es: ['Jinya Dango', 'Un puestecito junto al Jinya que asa a la brasa los mitarashi dango de Takayama, con glaseado de soja sin azúcar.', 'A diferencia de Kioto, aquí los dango son salados.'],
      de: ['Jinya Dango', 'Ein winziger Stand am Jinya, der Mitarashi-Dango nach Takayama-Art über Holzkohle grillt – mit ungesüßter Sojaglasur.', 'Anders als in Kyōto sind diese Dango herzhaft, nicht süß.'],
      fr: ['Jinya Dango', 'Une minuscule échoppe près du Jinya grillant au charbon les mitarashi dango de Takayama, glacés au soja non sucré.', 'Contrairement à Kyoto, ces dango sont salés.'],
      it: ['Jinya Dango', 'Un minuscolo banco vicino al Jinya che griglia sulla brace i mitarashi dango di Takayama, glassati alla soia non zuccherata.', 'A differenza di Kyoto, qui i dango sono salati.'],
    }, { price: level(1), menu: [
      ['Mitarashi dango', undefined, 'рисовые шарики в соевой глазури|rice dumplings in soy glaze|bolitas de arroz con glaseado de soja|Reisklößchen in Sojaglasur|boulettes de riz glacées au soja|gnocchetti di riso glassati alla soia'],
      ['Gohei mochi', undefined, 'рисовая лепёшка с мисо на палочке|rice cake on a stick with miso|pastel de arroz en palo con miso|Reiskuchen am Spieß mit Miso|galette de riz sur bâton au miso|tortino di riso allo spiedo con miso'],
    ] }),
    P('heianraku', 'food', 36.141, 137.253, SHOP, 4.5, 1800, ['food'], {
      ru: ['Хэйанраку', 'Семейный ресторан китайско-японской кухни, известный вегетарианскими и веганскими блюдами и тёплым приёмом.', 'Мест мало — приходите к открытию.'],
      en: ['Heianraku', 'A family-run Chinese-Japanese restaurant known for its vegetarian and vegan dishes and warm welcome.', 'Seats are few — come at opening.'],
      es: ['Heianraku', 'Un restaurante familiar chino-japonés conocido por sus platos vegetarianos y veganos y su cálida acogida.', 'Hay pocas mesas: ve a la apertura.'],
      de: ['Heianraku', 'Ein chinesisch-japanisches Familienlokal, bekannt für vegetarische und vegane Gerichte und herzlichen Empfang.', 'Wenige Plätze – zur Öffnung kommen.'],
      fr: ['Heianraku', 'Un restaurant familial sino-japonais connu pour ses plats végétariens et végans et son accueil chaleureux.', 'Peu de places : venez à l’ouverture.'],
      it: ['Heianraku', 'Un ristorante familiare cino-giapponese noto per i piatti vegetariani e vegani e l’accoglienza calorosa.', 'Pochi posti: vieni all’apertura.'],
    }, { price: level(1), menu: [
      ['Vegetable gyoza', undefined, 'овощные гёдза|vegetable gyoza|gyoza de verduras|Gemüse-Gyoza|gyoza aux légumes|gyoza di verdure'],
      ['Stir-fried vegetables', undefined, 'жареные овощи|stir-fried vegetables|verduras salteadas|gebratenes Gemüse|légumes sautés|verdure saltate'],
    ] }),
  ],
  routes: [
    D(['miyagawa-morning-market', 'takayama-jinya', 'nakabashi', 'sanmachi-suji', 'kotte-ushi', 'kusakabe-folk-museum', 'harada-shuzo', 'yatai-kaikan', 'kyoya'],
      'Утренний рынок, Дзинъя и улицы Санмати|The morning market, the Jinya and the Sanmachi streets|El mercado matinal, el Jinya y las calles de Sanmachi|Morgenmarkt, Jinya und die Straßen von Sanmachi|Le marché du matin, le Jinya et les rues de Sanmachi|Il mercato mattutino, il Jinya e le vie di Sanmachi'),
    D(['hida-kokubunji', 'hida-folk-village', 'center4-hamburgers', 'higashiyama-walking-course', 'funasaka-shuzo', 'jinya-dango', 'suzuya'],
      'Деревня Хида, храмы Хигасиямы и сакэварни|Hida Folk Village, the Higashiyama temples and sake breweries|El pueblo de Hida, los templos de Higashiyama y las bodegas|Hida no Sato, Higashiyama-Tempel und Sake-Brauereien|Le village de Hida, les temples de Higashiyama et les brasseries|Il villaggio di Hida, i templi di Higashiyama e le distillerie'),
    D(['shirakawa-go', 'hida-furukawa', 'chukasoba-iroha', 'sakaguchiya', 'heianraku'],
      'Сиракава-го и каналы Хида-Фурукавы|Shirakawa-gō and the canals of Hida-Furukawa|Shirakawa-gō y los canales de Hida-Furukawa|Shirakawa-gō und die Kanäle von Hida-Furukawa|Shirakawa-gō et les canaux de Hida-Furukawa|Shirakawa-gō e i canali di Hida-Furukawa'),
  ],
};

export default pack;
