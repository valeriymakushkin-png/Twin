import type { CityPack } from '../types';
import { free, level, makeDay, makePlace } from './_kit.ts';

const P = makePlace('kyoto');
const D = makeDay('kyoto');
const CITY = 'j85nXne64MA';
const GOLD = 'N5SG29ZSz_A';
const BAMBOO = 'HmNssAygTlw';
const TORII = 'jVEH0yjv23c';
const STREET = 'VulPpt46fXk';
const TEMPLE = 'wvl3rJa_Mk8';

const pack: CityPack = {
  country: 'JP',
  city: 'kyoto',
  places: [
    P('ginkakuji', 'attraction', 35.027, 135.7982, TEMPLE, 4.5, 26000, ['temples', 'gardens', 'unesco'], {
      ru: ['Гинкакудзи (Серебряный павильон)', 'Дзэн-храм XV века: скромный павильон, сад из белого песка с «конусом, глядящим на луну» и мшистая тропа на холм.', 'Поднимитесь по тропе за павильоном — оттуда лучший вид на храм и город.'],
      en: ['Ginkaku-ji (Silver Pavilion)', 'A 15th-century Zen temple: a modest pavilion, white sand garden with its “moon-viewing cone” and a mossy hillside path.', 'Climb the path behind the pavilion for the best view of the temple and city.'],
      es: ['Ginkaku-ji (Pabellón de Plata)', 'Un templo zen del siglo XV: un pabellón sobrio, un jardín de arena blanca con su «cono para mirar la luna» y un sendero de musgo.', 'Sube el sendero tras el pabellón: la mejor vista del templo y la ciudad.'],
      de: ['Ginkaku-ji (Silberner Pavillon)', 'Ein Zen-Tempel aus dem 15. Jh.: schlichter Pavillon, weißer Sandgarten mit „Mondbetrachtungskegel“ und Moospfad am Hang.', 'Den Pfad hinter dem Pavillon hinaufgehen – bester Blick auf Tempel und Stadt.'],
      fr: ['Ginkaku-ji (Pavillon d’argent)', 'Un temple zen du XVe : pavillon sobre, jardin de sable blanc au « cône pour contempler la lune » et sentier moussu.', 'Montez le sentier derrière le pavillon : la plus belle vue sur le temple et la ville.'],
      it: ['Ginkaku-ji (Padiglione d’argento)', 'Un tempio zen del XV secolo: padiglione sobrio, giardino di sabbia bianca col «cono per guardare la luna» e sentiero di muschio.', 'Sali il sentiero dietro il padiglione: la vista migliore su tempio e città.'],
    }, { spot: 'insta', price: level(1), hours: '08:30–17:00' }),
    P('philosophers-path', 'nature', 35.0215, 135.7944, CITY, 4.5, 17000, ['nature', 'photo'], {
      ru: ['Тропа философа', 'Двухкилометровая дорожка вдоль канала от Гинкакудзи к Нандзэндзи, обсаженная сакурами; названа в честь философа Китаро Нисиды.', 'Идите сверху вниз, от Гинкакудзи, — в конце окажетесь у Нандзэндзи.'],
      en: ['Philosopher’s Path', 'A 2 km canal-side walk from Ginkaku-ji towards Nanzen-ji lined with cherry trees, named after philosopher Kitarō Nishida.', 'Walk downhill from Ginkaku-ji — you’ll end up near Nanzen-ji.'],
      es: ['Camino del Filósofo', 'Un paseo de 2 km junto a un canal de Ginkaku-ji hacia Nanzen-ji, bordeado de cerezos y dedicado al filósofo Kitarō Nishida.', 'Camínalo cuesta abajo desde Ginkaku-ji: acabarás cerca de Nanzen-ji.'],
      de: ['Philosophenweg', 'Ein 2 km langer Kanalweg von Ginkaku-ji Richtung Nanzen-ji unter Kirschbäumen, benannt nach dem Philosophen Kitarō Nishida.', 'Von Ginkaku-ji bergab gehen – man endet nahe Nanzen-ji.'],
      fr: ['Chemin de la philosophie', 'Une promenade de 2 km le long d’un canal, du Ginkaku-ji vers le Nanzen-ji, bordée de cerisiers et nommée d’après le philosophe Kitarō Nishida.', 'Descendez depuis le Ginkaku-ji : vous finirez près du Nanzen-ji.'],
      it: ['Sentiero del filosofo', 'Una passeggiata di 2 km lungo un canale da Ginkaku-ji verso Nanzen-ji, tra i ciliegi, dedicata al filosofo Kitarō Nishida.', 'Percorrilo in discesa da Ginkaku-ji: arriverai vicino a Nanzen-ji.'],
    }, { spot: 'insta', price: free }),
    P('nanzenji', 'attraction', 35.011, 135.7932, TEMPLE, 4.6, 19000, ['temples', 'history', 'photo'], {
      ru: ['Нандзэндзи', 'Один из главных дзэн-храмов Японии с огромными воротами Самон и кирпичным акведуком Суйрокаку 1890 года.', 'Территория бесплатна; за небольшую плату можно подняться на ворота Самон.'],
      en: ['Nanzen-ji', 'One of Japan’s leading Zen temples, with the huge Sanmon gate and the 1890 brick Suirokaku aqueduct.', 'The grounds are free; a small fee lets you climb the Sanmon gate.'],
      es: ['Nanzen-ji', 'Uno de los principales templos zen de Japón, con la enorme puerta Sanmon y el acueducto de ladrillo Suirokaku de 1890.', 'El recinto es gratis; por poco dinero puedes subir a la puerta Sanmon.'],
      de: ['Nanzen-ji', 'Einer der wichtigsten Zen-Tempel Japans mit dem riesigen Sanmon-Tor und dem Ziegel-Aquädukt Suirokaku von 1890.', 'Das Gelände ist frei; gegen eine kleine Gebühr aufs Sanmon-Tor steigen.'],
      fr: ['Nanzen-ji', 'L’un des grands temples zen du Japon, avec l’immense porte Sanmon et l’aqueduc en brique Suirokaku de 1890.', 'L’enceinte est gratuite ; pour quelques yens, montez sur la porte Sanmon.'],
      it: ['Nanzen-ji', 'Uno dei principali templi zen del Giappone, con l’enorme porta Sanmon e l’acquedotto in mattoni Suirokaku del 1890.', 'Il recinto è gratuito; con poco si sale sulla porta Sanmon.'],
    }, { spot: 'insta', price: free }),
    P('nijo-castle', 'attraction', 35.0142, 135.7481, GOLD, 4.5, 38000, ['castles', 'history', 'unesco'], {
      ru: ['Замок Нидзё', 'Резиденция сёгунов Токугава (1603) в списке ЮНЕСКО: дворец Ниномару с расписными залами и «соловьиными» полами, которые поют под шагами.', 'Внутри дворца фотографировать нельзя — осмотритесь не спеша.'],
      en: ['Nijō Castle', 'The Tokugawa shoguns’ residence (1603), UNESCO-listed: Ninomaru Palace with painted halls and “nightingale” floors that chirp underfoot.', 'No photos inside the palace — take your time looking.'],
      es: ['Castillo Nijō', 'La residencia de los shogunes Tokugawa (1603), Patrimonio de la UNESCO: el palacio Ninomaru con salas pintadas y suelos «ruiseñor» que cantan al pisar.', 'Dentro del palacio no se puede fotografiar: míralo con calma.'],
      de: ['Burg Nijō', 'Residenz der Tokugawa-Shogune (1603), UNESCO-Welterbe: der Ninomaru-Palast mit bemalten Hallen und „Nachtigallenböden“, die beim Gehen zirpen.', 'Im Palast ist Fotografieren verboten – in Ruhe schauen.'],
      fr: ['Château de Nijō', 'La résidence des shoguns Tokugawa (1603), inscrite à l’UNESCO : le palais Ninomaru aux salles peintes et ses « parquets rossignol » qui chantent sous les pas.', 'Photos interdites dans le palais : prenez votre temps.'],
      it: ['Castello Nijō', 'La residenza degli shogun Tokugawa (1603), patrimonio UNESCO: il palazzo Ninomaru con sale dipinte e pavimenti «usignolo» che cinguettano sotto i passi.', 'Vietato fotografare nel palazzo: guarda con calma.'],
    }, { price: level(1), hours: '08:45–16:00', address: '541 Nijojocho, Nakagyo' }),
    P('ryoanji', 'attraction', 35.0345, 135.7183, TEMPLE, 4.4, 17000, ['temples', 'gardens', 'unesco'], {
      ru: ['Рёандзи', 'Самый известный сад камней Японии: 15 камней на белом гравии, и ни с одной точки веранды не видно всех сразу.', 'Приходите к открытию, пока на веранде тихо.'],
      en: ['Ryōan-ji', 'Japan’s most famous rock garden: 15 stones on white gravel, and from no spot on the veranda can you see them all.', 'Come at opening time while the veranda is quiet.'],
      es: ['Ryōan-ji', 'El jardín de piedras más famoso de Japón: 15 piedras sobre grava blanca, y desde ningún punto de la terraza se ven todas.', 'Ve a primera hora, cuando la terraza está tranquila.'],
      de: ['Ryōan-ji', 'Japans berühmtester Steingarten: 15 Steine auf weißem Kies – von keiner Stelle der Veranda sieht man alle.', 'Zur Öffnung kommen, solange die Veranda ruhig ist.'],
      fr: ['Ryōan-ji', 'Le jardin de pierres le plus célèbre du Japon : 15 pierres sur du gravier blanc, jamais toutes visibles depuis la véranda.', 'Venez à l’ouverture, quand la véranda est calme.'],
      it: ['Ryōan-ji', 'Il giardino di pietre più famoso del Giappone: 15 pietre su ghiaia bianca, mai visibili tutte insieme dalla veranda.', 'Vieni all’apertura, quando la veranda è tranquilla.'],
    }, { price: level(1), hours: '08:00–17:00' }),
    P('tenryuji', 'attraction', 35.0158, 135.6737, BAMBOO, 4.5, 21000, ['temples', 'gardens', 'unesco'], {
      ru: ['Тэнрюдзи', 'Главный дзэн-храм Арасиямы с садом-прудом XIV века монаха Мусо Сосэки на фоне гор.', 'Северный выход из сада ведёт прямо в бамбуковую рощу.'],
      en: ['Tenryū-ji', 'Arashiyama’s main Zen temple, with a 14th-century pond garden by the monk Musō Soseki framed by hills.', 'The garden’s north exit leads straight into the bamboo grove.'],
      es: ['Tenryū-ji', 'El principal templo zen de Arashiyama, con un jardín de estanque del siglo XIV del monje Musō Soseki enmarcado por montes.', 'La salida norte del jardín da directamente al bosque de bambú.'],
      de: ['Tenryū-ji', 'Arashiyamas wichtigster Zen-Tempel mit einem Teichgarten des Mönchs Musō Soseki aus dem 14. Jh. vor Bergkulisse.', 'Der Nordausgang des Gartens führt direkt in den Bambushain.'],
      fr: ['Tenryū-ji', 'Le grand temple zen d’Arashiyama, avec un jardin d’étang du XIVe du moine Musō Soseki adossé aux collines.', 'La sortie nord du jardin débouche directement sur la bambouseraie.'],
      it: ['Tenryū-ji', 'Il principale tempio zen di Arashiyama, con un giardino a stagno del XIV secolo del monaco Musō Soseki incorniciato dai colli.', 'L’uscita nord del giardino porta dritta nel bosco di bambù.'],
    }, { price: level(1), hours: '08:30–17:00' }),
    P('sanjusangendo', 'attraction', 34.9879, 135.7718, TEMPLE, 4.6, 24000, ['temples', 'history', 'art'], {
      ru: ['Сандзюсангэн-до', 'Деревянный зал длиной 120 м, где стоят 1001 позолоченная статуя богини милосердия Каннон.', 'Внутри снимать нельзя; найдите среди статуй лицо, похожее на своё, — так говорят местные.'],
      en: ['Sanjūsangen-dō', 'A 120 m wooden hall holding 1,001 gilded statues of Kannon, the goddess of mercy.', 'No photos inside; locals say you’ll find a face that looks like yours.'],
      es: ['Sanjūsangen-dō', 'Una sala de madera de 120 m con 1001 estatuas doradas de Kannon, diosa de la misericordia.', 'Dentro no se fotografía; dicen que encontrarás un rostro parecido al tuyo.'],
      de: ['Sanjūsangen-dō', 'Eine 120 m lange Holzhalle mit 1001 vergoldeten Statuen der Göttin der Barmherzigkeit Kannon.', 'Drinnen keine Fotos; man sagt, man finde ein Gesicht, das dem eigenen gleicht.'],
      fr: ['Sanjūsangen-dō', 'Une salle en bois de 120 m abritant 1 001 statues dorées de Kannon, déesse de la miséricorde.', 'Pas de photos à l’intérieur ; on dit qu’on y trouve un visage qui nous ressemble.'],
      it: ['Sanjūsangen-dō', 'Una sala di legno di 120 m con 1001 statue dorate di Kannon, dea della misericordia.', 'Dentro niente foto; si dice che troverai un volto simile al tuo.'],
    }, { price: level(1), hours: '08:30–17:00' }),
    P('yasaka-shrine', 'attraction', 35.0037, 135.7785, TORII, 4.4, 33000, ['temples', 'history', 'photo'], {
      ru: ['Святилище Ясака', 'Главное святилище Гиона, работающее круглосуточно; в июле здесь проходит фестиваль Гион-мацури.', 'Вечером загораются сотни фонарей на сцене — красиво и без толп.'],
      en: ['Yasaka Shrine', 'Gion’s main shrine, open around the clock; in July it hosts the Gion Matsuri festival.', 'At night hundreds of lanterns light up the dance stage — lovely and uncrowded.'],
      es: ['Santuario Yasaka', 'El santuario principal de Gion, abierto día y noche; en julio acoge el festival Gion Matsuri.', 'De noche se encienden cientos de farolillos en el escenario: precioso y sin multitudes.'],
      de: ['Yasaka-Schrein', 'Gions Hauptschrein, rund um die Uhr offen; im Juli Schauplatz des Gion Matsuri.', 'Nachts leuchten Hunderte Laternen an der Tanzbühne – schön und ohne Gedränge.'],
      fr: ['Sanctuaire Yasaka', 'Le grand sanctuaire de Gion, ouvert jour et nuit ; il accueille en juillet le Gion Matsuri.', 'Le soir, des centaines de lanternes illuminent la scène : magnifique et sans foule.'],
      it: ['Santuario Yasaka', 'Il santuario principale di Gion, aperto giorno e notte; a luglio ospita il Gion Matsuri.', 'La sera centinaia di lanterne illuminano il palco: bellissimo e senza folla.'],
    }, { spot: 'insta', price: free, hours: '00:00–24:00' }),
    P('hanamikoji', 'attraction', 35.003, 135.7752, STREET, 4.4, 15000, ['history', 'oldtown', 'culture'], {
      ru: ['Ханамикодзи', 'Главная улица гейш в Гионе: деревянные чайные дома, фонари и, если повезёт, спешащая на работу майко.', 'Не фотографируйте майко без разрешения; в частных переулках съёмка запрещена и штрафуется.'],
      en: ['Hanamikoji', 'Gion’s main geisha street: wooden teahouses, lanterns and, with luck, a maiko hurrying to work.', 'Don’t photograph maiko without asking; photos are banned and fined in the private lanes.'],
      es: ['Hanamikoji', 'La calle principal de las geishas en Gion: casas de té de madera, farolillos y, con suerte, una maiko camino del trabajo.', 'No fotografíes a las maiko sin permiso; en los callejones privados las fotos están prohibidas y multadas.'],
      de: ['Hanamikoji', 'Gions Geisha-Hauptstraße: hölzerne Teehäuser, Laternen und mit Glück eine Maiko auf dem Weg zur Arbeit.', 'Maiko nicht ungefragt fotografieren; in den Privatgassen ist Fotografieren verboten und wird bestraft.'],
      fr: ['Hanamikoji', 'La grande rue des geishas de Gion : maisons de thé en bois, lanternes et, avec de la chance, une maiko pressée.', 'Ne photographiez pas les maiko sans demander ; dans les ruelles privées, les photos sont interdites et verbalisées.'],
      it: ['Hanamikoji', 'La via principale delle geishe di Gion: case da tè di legno, lanterne e, con fortuna, una maiko di corsa al lavoro.', 'Non fotografare le maiko senza chiedere; nei vicoli privati le foto sono vietate e multate.'],
    }, { price: free }),
    P('tofukuji', 'attraction', 34.9767, 135.7737, TEMPLE, 4.5, 14000, ['temples', 'gardens'], {
      ru: ['Тофукудзи', 'Дзэн-храм с деревянным мостом Цутэнкё над долиной клёнов и садом Мирэя Сигэмори с «шахматной доской» из мха.', 'Вне осени здесь тихо; в ноябре приходите к открытию.'],
      en: ['Tōfuku-ji', 'A Zen temple with the wooden Tsūten-kyō bridge over a maple valley and Mirei Shigemori’s mossy “chequerboard” garden.', 'Outside autumn it’s quiet; in November come at opening time.'],
      es: ['Tōfuku-ji', 'Un templo zen con el puente de madera Tsūten-kyō sobre un valle de arces y el jardín de musgo «en damero» de Mirei Shigemori.', 'Fuera del otoño es tranquilo; en noviembre ve a primera hora.'],
      de: ['Tōfuku-ji', 'Ein Zen-Tempel mit der Holzbrücke Tsūten-kyō über einem Ahorntal und Mirei Shigemoris Moos-„Schachbrett“-Garten.', 'Außerhalb des Herbstes ruhig; im November zur Öffnung kommen.'],
      fr: ['Tōfuku-ji', 'Un temple zen avec le pont de bois Tsūten-kyō au-dessus d’un vallon d’érables et le jardin « en damier » de mousse de Mirei Shigemori.', 'Calme hors automne ; en novembre, venez dès l’ouverture.'],
      it: ['Tōfuku-ji', 'Un tempio zen con il ponte di legno Tsūten-kyō su una valle di aceri e il giardino di muschio «a scacchiera» di Mirei Shigemori.', 'Fuori dall’autunno è tranquillo; a novembre vieni all’apertura.'],
    }, { spot: 'hidden', price: level(1), hours: '09:00–16:00' }),
    P('kurama-kibune', 'nature', 35.122, 135.7629, BAMBOO, 4.6, 9500, ['hiking', 'nature', 'temples'], {
      ru: ['Курама и Кибунэ', 'Горные деревни к северу от Киото: храм Курама-дэра, лесная тропа через перевал и святилище Кибунэ у реки.', 'Летом в Кибунэ обедают на настилах-кавадоко прямо над водой.'],
      en: ['Kurama and Kibune', 'Mountain villages north of Kyoto: Kurama-dera temple, a forest trail over the ridge and Kibune Shrine by the river.', 'In summer Kibune restaurants serve meals on kawadoko platforms right over the water.'],
      es: ['Kurama y Kibune', 'Pueblos de montaña al norte de Kioto: el templo Kurama-dera, un sendero por el bosque y el santuario Kibune junto al río.', 'En verano en Kibune se come en plataformas kawadoko sobre el agua.'],
      de: ['Kurama und Kibune', 'Bergdörfer nördlich von Kyōto: der Tempel Kurama-dera, ein Waldpfad über den Kamm und der Kibune-Schrein am Fluss.', 'Im Sommer isst man in Kibune auf Kawadoko-Plattformen direkt über dem Wasser.'],
      fr: ['Kurama et Kibune', 'Des villages de montagne au nord de Kyoto : le temple Kurama-dera, un sentier forestier par la crête et le sanctuaire Kibune au bord de la rivière.', 'L’été, à Kibune, on mange sur des plateformes kawadoko au-dessus de l’eau.'],
      it: ['Kurama e Kibune', 'Villaggi di montagna a nord di Kyoto: il tempio Kurama-dera, un sentiero nel bosco sul crinale e il santuario Kibune sul fiume.', 'D’estate a Kibune si mangia sulle piattaforme kawadoko sopra l’acqua.'],
    }, { spot: 'insta', price: level(1) }),
    P('heian-shrine', 'attraction', 35.016, 135.7824, TORII, 4.4, 20000, ['temples', 'gardens', 'architecture'], {
      ru: ['Святилище Хэйан', 'Святилище 1895 года к 1100-летию Киото с гигантскими красными воротами-тории и садом с прудами за главным залом.', 'Сад платный, но в апреле и июне (сакура, ирисы) он того стоит.'],
      en: ['Heian Shrine', 'An 1895 shrine built for Kyoto’s 1,100th anniversary, with a giant red torii and a pond garden behind the main hall.', 'The garden costs extra but is worth it in April and June (cherries, irises).'],
      es: ['Santuario Heian', 'Un santuario de 1895 por el 1100 aniversario de Kioto, con un torii rojo gigante y un jardín de estanques tras el salón principal.', 'El jardín se paga aparte, pero en abril y junio (cerezos, lirios) merece la pena.'],
      de: ['Heian-Schrein', 'Ein Schrein von 1895 zum 1100-jährigen Bestehen Kyōtos mit riesigem rotem Torii und Teichgarten hinter der Haupthalle.', 'Der Garten kostet extra, lohnt sich aber im April und Juni (Kirschen, Iris).'],
      fr: ['Sanctuaire Heian', 'Un sanctuaire de 1895 bâti pour les 1 100 ans de Kyoto, avec un torii rouge géant et un jardin d’étangs derrière le pavillon principal.', 'Le jardin est payant mais vaut la peine en avril et juin (cerisiers, iris).'],
      it: ['Santuario Heian', 'Un santuario del 1895 costruito per i 1100 anni di Kyoto, con un enorme torii rosso e un giardino di stagni dietro la sala principale.', 'Il giardino si paga a parte, ma ad aprile e giugno (ciliegi, iris) ne vale la pena.'],
    }, { spot: 'insta', price: free, hours: '06:00–18:00' }),
    P('hyotei', 'food', 35.0118, 135.7887, TEMPLE, 4.5, 1800, ['food', 'history', 'romance'], {
      ru: ['Хётэй', 'Кайсэки-ресторан у Нандзэндзи, выросший из чайного домика для паломников около 400 лет назад; знаменит яйцом «хётэй-тамаго».', 'Во флигеле-бэккан подают знаменитый киотский завтрак — его проще забронировать.'],
      en: ['Hyōtei', 'A kaiseki house near Nanzen-ji that grew from a pilgrims’ teahouse about 400 years ago; famous for its “Hyōtei egg”.', 'The annex (bekkan) serves a celebrated Kyoto breakfast that’s easier to book.'],
      es: ['Hyōtei', 'Una casa de kaiseki junto a Nanzen-ji, nacida de una casa de té para peregrinos hace unos 400 años; famosa por su «huevo Hyōtei».', 'En el anexo (bekkan) sirven un célebre desayuno de Kioto, más fácil de reservar.'],
      de: ['Hyōtei', 'Ein Kaiseki-Haus nahe Nanzen-ji, entstanden vor rund 400 Jahren aus einem Pilger-Teehaus; berühmt für sein „Hyōtei-Ei“.', 'Im Nebengebäude (Bekkan) gibt es ein berühmtes Kyōto-Frühstück – leichter zu buchen.'],
      fr: ['Hyōtei', 'Une maison de kaiseki près du Nanzen-ji, née d’une maison de thé pour pèlerins il y a environ 400 ans ; célèbre pour son « œuf Hyōtei ».', 'L’annexe (bekkan) sert un célèbre petit-déjeuner de Kyoto, plus facile à réserver.'],
      it: ['Hyōtei', 'Una casa di kaiseki vicino a Nanzen-ji, nata circa 400 anni fa da una casa da tè per pellegrini; famosa per l’«uovo Hyōtei».', 'Nella dépendance (bekkan) servono una celebre colazione di Kyoto, più facile da prenotare.'],
    }, { price: level(3), address: '35 Kusakawacho, Nanzenji, Sakyo', michelin: { award: 'star3', year: 2026 }, menu: [
      ['Hyōtei tamago', undefined, 'яйцо с жидким желтком, фирменное блюдо|soft-boiled signature egg|huevo cocido suave, plato insignia|wachsweiches Signature-Ei|œuf mollet signature|uovo bazzotto, piatto simbolo'],
      ['Kaiseki', undefined, 'сезонный многоблюдный ужин|seasonal multi-course meal|menú de varios platos de temporada|saisonales Mehrgängemenü|repas de saison en plusieurs services|pasto stagionale di più portate'],
    ] }),
    P('kikunoi-honten', 'food', 35.0012, 135.781, STREET, 4.6, 1500, ['food', 'romance'], {
      ru: ['Кикунои Хонтэн', 'Главный дом династии Мурата у парка Маруяма (с 1912 года): классический киотский кайсэки в комнатах с видом на сад.', 'Обеденный кайсэки заметно доступнее ужина.'],
      en: ['Kikunoi Honten', 'The Murata family’s main house by Maruyama Park (since 1912): classic Kyoto kaiseki in rooms facing a garden.', 'Lunch kaiseki is noticeably more affordable than dinner.'],
      es: ['Kikunoi Honten', 'La casa principal de la familia Murata junto al parque Maruyama (desde 1912): kaiseki clásico de Kioto en salas con jardín.', 'El kaiseki del mediodía es bastante más asequible.'],
      de: ['Kikunoi Honten', 'Das Stammhaus der Familie Murata am Maruyama-Park (seit 1912): klassisches Kyōto-Kaiseki in Räumen mit Gartenblick.', 'Mittags-Kaiseki ist deutlich günstiger als abends.'],
      fr: ['Kikunoi Honten', 'La maison mère de la famille Murata près du parc Maruyama (depuis 1912) : kaiseki classique de Kyoto dans des salons sur jardin.', 'Le kaiseki du midi est nettement plus abordable.'],
      it: ['Kikunoi Honten', 'La casa madre della famiglia Murata accanto al parco Maruyama (dal 1912): kaiseki classico di Kyoto in sale affacciate sul giardino.', 'Il kaiseki del pranzo è molto più accessibile.'],
    }, { price: level(3), address: '459 Shimokawaracho, Higashiyama', michelin: { award: 'star3', year: 2026 }, menu: [
      ['Hassun', undefined, 'сезонное ассорти закусок|seasonal platter of small bites|surtido de bocados de temporada|saisonale Platte kleiner Happen|assortiment de bouchées de saison|assortimento di stuzzichini di stagione'],
      ['Kaiseki', undefined, 'дегустационный кайсэки|kaiseki tasting course|menú kaiseki|Kaiseki-Menü|menu kaiseki|menu kaiseki'],
    ] }),
    P('izuju', 'food', 35.0036, 135.7771, STREET, 4.3, 2900, ['food', 'history'], {
      ru: ['Идзудзю', 'Старая суши-лавка напротив святилища Ясака, где делают киотскую саба-дзуси (прессованные суши со скумбрией) и инари.', 'Саба-дзуси можно взять навынос — хорошо в поезд.'],
      en: ['Izuju', 'An old sushi shop facing Yasaka Shrine, making Kyoto saba-zushi (pressed mackerel sushi) and inari.', 'Saba-zushi travels well — take some for the train.'],
      es: ['Izuju', 'Una antigua tienda de sushi frente al santuario Yasaka con saba-zushi de Kioto (sushi prensado de caballa) e inari.', 'El saba-zushi se lleva bien: cómpralo para el tren.'],
      de: ['Izuju', 'Ein alter Sushi-Laden gegenüber dem Yasaka-Schrein mit Kyōto-Saba-zushi (gepresstem Makrelen-Sushi) und Inari.', 'Saba-zushi lässt sich gut mitnehmen – ideal für den Zug.'],
      fr: ['Izuju', 'Une vieille échoppe de sushis face au sanctuaire Yasaka : saba-zushi de Kyoto (sushi pressé au maquereau) et inari.', 'Le saba-zushi voyage bien : prenez-en pour le train.'],
      it: ['Izuju', 'Un vecchio negozio di sushi di fronte al santuario Yasaka: saba-zushi di Kyoto (sushi pressato di sgombro) e inari.', 'Il saba-zushi si trasporta bene: prendilo per il treno.'],
    }, { price: level(2), address: '292-1 Gionmachi Kitagawa, Higashiyama', menu: [
      ['Saba-zushi', undefined, 'прессованные суши со скумбрией|pressed mackerel sushi|sushi prensado de caballa|gepresstes Makrelen-Sushi|sushi pressé au maquereau|sushi pressato di sgombro'],
      ['Inari-zushi', undefined, 'рис в сладком жареном тофу|rice in sweet fried tofu pockets|arroz en bolsitas de tofu frito dulce|Reis in süßen Tofutaschen|riz dans des poches de tofu frit sucré|riso in tasche di tofu fritto dolce'],
    ] }),
    P('ippodo', 'food', 35.0144, 135.7672, STREET, 4.6, 4800, ['food', 'history', 'shopping'], {
      ru: ['Иппо-до', 'Чайный дом с 1717 года на улице Тэрамати: маття, гёкуро и сэнтя, а в чайной Кабоку вам покажут, как их заваривать.', 'В чайной закажите гёкуро — его заваривают сами, по подсказкам персонала.'],
      en: ['Ippodo Tea', 'A tea house since 1717 on Teramachi: matcha, gyokuro and sencha, and in the Kaboku tea room staff show you how to brew them.', 'Order gyokuro in the tea room — you brew it yourself with the staff’s guidance.'],
      es: ['Ippodo Tea', 'Una casa de té desde 1717 en Teramachi: matcha, gyokuro y sencha; en el salón Kaboku te enseñan a prepararlos.', 'Pide gyokuro en el salón: lo preparas tú con ayuda del personal.'],
      de: ['Ippodo Tea', 'Ein Teehaus seit 1717 in der Teramachi: Matcha, Gyokuro und Sencha; im Teeraum Kaboku zeigt man, wie man sie aufbrüht.', 'Im Teeraum Gyokuro bestellen – man brüht ihn selbst mit Anleitung.'],
      fr: ['Ippodo Tea', 'Une maison de thé depuis 1717 rue Teramachi : matcha, gyokuro et sencha ; au salon Kaboku, on vous montre comment les infuser.', 'Commandez un gyokuro au salon : vous l’infusez vous-même, guidé par le personnel.'],
      it: ['Ippodo Tea', 'Una casa del tè dal 1717 in via Teramachi: matcha, gyokuro e sencha; nella sala Kaboku ti insegnano a prepararli.', 'Ordina il gyokuro nella sala: lo prepari tu con l’aiuto del personale.'],
    }, { price: level(1), address: 'Teramachi-dori Nijo, Nakagyo', menu: [
      ['Gyokuro', undefined, 'тенистый зелёный чай гёкуро|shade-grown gyokuro green tea|té verde gyokuro de sombra|im Schatten gewachsener Gyokuro|thé vert gyokuro cultivé à l’ombre|tè verde gyokuro coltivato all’ombra'],
      ['Matcha with sweet', undefined, 'маття со сладостью|matcha with a sweet|matcha con dulce|Matcha mit Süßigkeit|matcha et douceur|matcha con dolcetto'],
    ] }),
    P('kagizen-yoshifusa', 'food', 35.0038, 135.7744, STREET, 4.4, 3600, ['food', 'history'], {
      ru: ['Кагидзэн Ёсифуса', 'Кондитерская в Гионе, работающая с эпохи Эдо; знаменита кудзукири — прозрачной лапшой из крахмала кудзу в чёрном сахарном сиропе.', 'Кудзукири готовят под заказ — подождите 10 минут, оно того стоит.'],
      en: ['Kagizen Yoshifusa', 'A Gion confectioner going since the Edo period, famous for kuzukiri — clear kudzu-starch noodles in black sugar syrup.', 'Kuzukiri is made to order — wait the ten minutes, it’s worth it.'],
      es: ['Kagizen Yoshifusa', 'Una confitería de Gion desde el periodo Edo, famosa por el kuzukiri: fideos transparentes de almidón de kudzu en sirope de azúcar negro.', 'El kuzukiri se hace al momento: espera los diez minutos.'],
      de: ['Kagizen Yoshifusa', 'Eine Konditorei in Gion seit der Edo-Zeit, berühmt für Kuzukiri – klare Kudzu-Stärke-Nudeln in Schwarzzuckersirup.', 'Kuzukiri wird frisch gemacht – die zehn Minuten lohnen sich.'],
      fr: ['Kagizen Yoshifusa', 'Une confiserie de Gion depuis l’époque d’Edo, célèbre pour son kuzukiri : nouilles translucides d’amidon de kudzu au sirop de sucre noir.', 'Le kuzukiri est préparé à la minute : attendez dix minutes, ça vaut le coup.'],
      it: ['Kagizen Yoshifusa', 'Una pasticceria di Gion dal periodo Edo, famosa per il kuzukiri: noodle trasparenti di amido di kudzu in sciroppo di zucchero nero.', 'Il kuzukiri si prepara al momento: aspetta i dieci minuti.'],
    }, { price: level(1), address: '264 Gionmachi Kitagawa, Higashiyama', menu: [
      ['Kuzukiri', undefined, 'прозрачная лапша кудзу с чёрным сиропом|kudzu noodles with black sugar syrup|fideos de kudzu con sirope negro|Kudzu-Nudeln mit Schwarzzuckersirup|nouilles de kudzu au sirop noir|noodle di kudzu con sciroppo nero'],
      ['Warabi mochi', undefined, 'варабимоти с соевой мукой|bracken-starch mochi with kinako|mochi de helecho con kinako|Adlerfarn-Mochi mit Kinako|mochi de fougère au kinako|mochi di felce con kinako'],
    ] }),
    P('omen-ginkakuji', 'food', 35.0262, 135.7925, TEMPLE, 4.3, 3900, ['food'], {
      ru: ['Омэн Гинкакудзи', 'Удонная у Серебряного павильона: толстую лапшу макают в горячий бульон с сезонными овощами и кунжутом.', 'Удобный обед после Гинкакудзи перед Тропой философа.'],
      en: ['Omen Ginkakuji', 'An udon house by the Silver Pavilion: thick noodles dipped into hot broth with seasonal vegetables and sesame.', 'An easy lunch after Ginkaku-ji before the Philosopher’s Path.'],
      es: ['Omen Ginkakuji', 'Un local de udon junto al Pabellón de Plata: fideos gruesos que se mojan en caldo caliente con verduras de temporada y sésamo.', 'Un almuerzo cómodo tras Ginkaku-ji y antes del Camino del Filósofo.'],
      de: ['Omen Ginkakuji', 'Ein Udon-Lokal am Silbernen Pavillon: dicke Nudeln zum Tunken in heiße Brühe mit Saisongemüse und Sesam.', 'Ein bequemes Mittagessen nach Ginkaku-ji vor dem Philosophenweg.'],
      fr: ['Omen Ginkakuji', 'Une maison d’udon près du Pavillon d’argent : grosses nouilles à tremper dans un bouillon chaud avec légumes de saison et sésame.', 'Un déjeuner pratique après le Ginkaku-ji, avant le chemin de la philosophie.'],
      it: ['Omen Ginkakuji', 'Un locale di udon accanto al Padiglione d’argento: noodle spessi da intingere nel brodo caldo con verdure di stagione e sesamo.', 'Un pranzo comodo dopo Ginkaku-ji e prima del Sentiero del filosofo.'],
    }, { price: level(1), address: '74 Jodoji Ishibashicho, Sakyo', menu: [
      ['Omen udon', undefined, 'удон с овощами и кунжутом для макания|dipping udon with vegetables and sesame|udon para mojar con verduras y sésamo|Tunk-Udon mit Gemüse und Sesam|udon à tremper, légumes et sésame|udon da intingere con verdure e sesamo'],
      ['Tempura', undefined, 'темпура из овощей и креветок|vegetable and prawn tempura|tempura de verduras y gambas|Gemüse- und Garnelen-Tempura|tempura de légumes et crevettes|tempura di verdure e gamberi'],
    ] }),
    P('shoraian', 'food', 35.0118, 135.6733, BAMBOO, 4.5, 1700, ['food', 'nature', 'romance'], {
      ru: ['Сёраан', 'Ресторан тофу в старой вилле на склоне горы Огура над рекой Арасиямы: обед из десятка блюд из тофу и юбы.', 'Бронируйте заранее и просите место у окна на реку.'],
      en: ['Shoraian', 'A tofu restaurant in an old villa on Mount Ogura above Arashiyama’s river: a lunch of a dozen tofu and yuba dishes.', 'Book ahead and ask for a seat by the river window.'],
      es: ['Shoraian', 'Un restaurante de tofu en una vieja villa en el monte Ogura sobre el río de Arashiyama: un almuerzo de una docena de platos de tofu y yuba.', 'Reserva y pide mesa junto a la ventana del río.'],
      de: ['Shoraian', 'Ein Tofu-Restaurant in einer alten Villa am Berg Ogura über dem Fluss von Arashiyama: ein Mittagessen aus einem Dutzend Tofu- und Yuba-Gängen.', 'Vorher buchen und nach einem Platz am Flussfenster fragen.'],
      fr: ['Shoraian', 'Un restaurant de tofu dans une vieille villa du mont Ogura au-dessus de la rivière d’Arashiyama : un déjeuner d’une douzaine de plats de tofu et de yuba.', 'Réservez et demandez une table côté rivière.'],
      it: ['Shoraian', 'Un ristorante di tofu in una vecchia villa sul monte Ogura sopra il fiume di Arashiyama: un pranzo di una dozzina di piatti di tofu e yuba.', 'Prenota e chiedi un tavolo alla finestra sul fiume.'],
    }, { price: level(2), menu: [
      ['Tofu kaiseki', undefined, 'дегустационный обед из тофу|tofu tasting lunch|almuerzo degustación de tofu|Tofu-Degustationsmenü|déjeuner dégustation de tofu|pranzo degustazione di tofu'],
      ['Yuba', undefined, 'юба — пенка соевого молока|yuba, soy-milk skin|yuba, piel de leche de soja|Yuba, Sojamilchhaut|yuba, peau de lait de soja|yuba, pelle di latte di soia'],
    ] }),
    P('arabica-higashiyama', 'food', 34.9985, 135.7798, STREET, 4.4, 5400, ['food', 'photo'], {
      ru: ['% Arabica Хигасияма', 'Первая кофейня % Arabica (2014) в переулке у пагоды Ясака: латте в белых стаканах с логотипом «%».', 'Очередь утром короче; возьмите кофе и пройдитесь к пагоде.'],
      en: ['% Arabica Higashiyama', 'The very first % Arabica (2014), in a lane near Yasaka Pagoda: lattes in white “%” cups.', 'The queue is shorter in the morning; take your coffee up to the pagoda.'],
      es: ['% Arabica Higashiyama', 'El primer % Arabica (2014), en un callejón junto a la pagoda Yasaka: lattes en vasos blancos con el «%».', 'Por la mañana hay menos cola; llévate el café hasta la pagoda.'],
      de: ['% Arabica Higashiyama', 'Das allererste % Arabica (2014) in einer Gasse nahe der Yasaka-Pagode: Latte in weißen „%“-Bechern.', 'Morgens ist die Schlange kürzer; den Kaffee mit zur Pagode nehmen.'],
      fr: ['% Arabica Higashiyama', 'Le tout premier % Arabica (2014), dans une ruelle près de la pagode Yasaka : lattes dans des gobelets blancs « % ».', 'Moins de queue le matin ; montez avec votre café jusqu’à la pagode.'],
      it: ['% Arabica Higashiyama', 'Il primissimo % Arabica (2014), in un vicolo vicino alla pagoda Yasaka: latte nei bicchieri bianchi con il «%».', 'Al mattino c’è meno coda; porta il caffè fino alla pagoda.'],
    }, { spot: 'insta', price: level(1), menu: [
      ['Kyoto latte', undefined, 'фирменный латте|signature latte|latte de la casa|Haus-Latte|latte maison|latte della casa'],
      ['Espresso', undefined, 'эспрессо|espresso|espresso|Espresso|espresso|espresso'],
    ] }),
    P('kyoto-gogyo', 'food', 35.0067, 135.7613, STREET, 4.2, 5100, ['food', 'nightlife'], {
      ru: ['Kyoto Gogyo', 'Рамэн-бар в старом доме-матия, где мисо обжигают на сильном огне — бульон получается почти чёрным и дымным.', 'Заказывайте «когаси мисо» — ради него сюда и идут.'],
      en: ['Kyoto Gogyo', 'A ramen bar in an old machiya where miso is scorched over high flame for an almost black, smoky broth.', 'Order the kogashi (burnt) miso — that’s what people come for.'],
      es: ['Kyoto Gogyo', 'Un bar de ramen en una vieja machiya donde queman el miso a fuego vivo: caldo casi negro y ahumado.', 'Pide el kogashi miso (quemado): es a lo que se viene.'],
      de: ['Kyoto Gogyo', 'Eine Ramen-Bar in einem alten Machiya, wo Miso bei großer Flamme angeröstet wird – fast schwarze, rauchige Brühe.', 'Kogashi-Miso (verbrannt) bestellen – deswegen kommt man.'],
      fr: ['Kyoto Gogyo', 'Un bar à ramen dans une vieille machiya où le miso est brûlé à feu vif : bouillon presque noir et fumé.', 'Commandez le kogashi miso (brûlé) : c’est pour lui qu’on vient.'],
      it: ['Kyoto Gogyo', 'Un ramen bar in una vecchia machiya dove il miso viene bruciato a fiamma viva: brodo quasi nero e affumicato.', 'Ordina il kogashi miso (bruciato): è per questo che si viene.'],
    }, { price: level(1), address: '452 Higashikata-cho, Yanaginobanba, Nakagyo', menu: [
      ['Kogashi miso ramen', undefined, 'рамэн с обожжённым мисо|ramen with scorched miso|ramen de miso quemado|Ramen mit angeröstetem Miso|ramen au miso brûlé|ramen al miso bruciato'],
      ['Kogashi shoyu ramen', undefined, 'рамэн с обожжённым соевым соусом|ramen with scorched soy sauce|ramen de soja quemada|Ramen mit angerösteter Sojasoße|ramen à la sauce soja brûlée|ramen alla salsa di soia bruciata'],
    ] }),
    P('matsuba', 'food', 35.004, 135.7718, STREET, 4.2, 3300, ['food', 'history'], {
      ru: ['Мацуба', 'Собная у моста Сидзё с 1861 года, где придумали нисин-собу — горячую гречневую лапшу со сладко-тушёной сельдью.', 'Нисин-соба — классика киотской зимы.'],
      en: ['Matsuba', 'A soba house by Shijō bridge since 1861, where nishin soba was invented — hot buckwheat noodles topped with sweet-braised herring.', 'Nishin soba is a Kyoto winter classic.'],
      es: ['Matsuba', 'Una casa de soba junto al puente Shijō desde 1861, cuna del nishin soba: fideos calientes de alforfón con arenque guisado dulce.', 'El nishin soba es un clásico del invierno de Kioto.'],
      de: ['Matsuba', 'Ein Soba-Haus an der Shijō-Brücke seit 1861, wo Nishin-Soba erfunden wurde – heiße Buchweizennudeln mit süß geschmortem Hering.', 'Nishin-Soba ist ein Kyōtoer Winterklassiker.'],
      fr: ['Matsuba', 'Une maison de soba près du pont Shijō depuis 1861, où l’on a inventé le nishin soba : nouilles chaudes de sarrasin au hareng braisé sucré.', 'Le nishin soba est un classique de l’hiver à Kyoto.'],
      it: ['Matsuba', 'Una casa di soba vicino al ponte Shijō dal 1861, dove sono nate le nishin soba: soba calde con aringa brasata dolce.', 'Le nishin soba sono un classico dell’inverno di Kyoto.'],
    }, { price: level(1), address: '192 Kawabatacho, Higashiyama', menu: [
      ['Nishin soba', undefined, 'горячая соба со сладкой сельдью|hot soba with sweet-braised herring|soba caliente con arenque dulce|heiße Soba mit süßem Hering|soba chaudes au hareng sucré|soba calde con aringa dolce'],
      ['Zaru soba', undefined, 'холодная соба на бамбуковой решётке|cold soba on a bamboo tray|soba fría en bandeja de bambú|kalte Soba auf Bambusmatte|soba froides sur claie de bambou|soba fredde su stuoia di bambù'],
    ] }),
    P('gion-tokuya', 'food', 35.0031, 135.775, STREET, 4.4, 2700, ['food'], {
      ru: ['Гион Токуя', 'Маленькая кондитерская на Ханамикодзи с варабимоти из настоящего крахмала папоротника — его подают на льду.', 'После обеда здесь очередь; приходите к открытию.'],
      en: ['Gion Tokuya', 'A small sweet shop on Hanamikoji serving warabi mochi made from real bracken starch, served on ice.', 'There’s a queue in the afternoon; come at opening.'],
      es: ['Gion Tokuya', 'Una pequeña dulcería en Hanamikoji con warabi mochi de auténtico almidón de helecho, servido sobre hielo.', 'Por la tarde hay cola; ve a la apertura.'],
      de: ['Gion Tokuya', 'Ein kleiner Süßwarenladen in der Hanamikoji mit Warabi-Mochi aus echter Adlerfarnstärke, auf Eis serviert.', 'Nachmittags gibt es eine Schlange; zur Öffnung kommen.'],
      fr: ['Gion Tokuya', 'Une petite maison de douceurs sur Hanamikoji servant un warabi mochi de vraie fécule de fougère, sur glace.', 'Queue l’après-midi ; venez à l’ouverture.'],
      it: ['Gion Tokuya', 'Una piccola pasticceria su Hanamikoji con warabi mochi di vero amido di felce, servito su ghiaccio.', 'Il pomeriggio c’è fila; vieni all’apertura.'],
    }, { price: level(1), address: '570-127 Gionmachi Minamigawa, Higashiyama', menu: [
      ['Hon-warabi mochi', undefined, 'варабимоти на льду с соевой мукой|bracken mochi on ice with kinako|mochi de helecho sobre hielo con kinako|Adlerfarn-Mochi auf Eis mit Kinako|mochi de fougère sur glace au kinako|mochi di felce su ghiaccio con kinako'],
      ['Matcha', undefined, 'маття|matcha|matcha|Matcha|matcha|matcha'],
    ] }),
  ],
  routes: [
    D(['=fushimi', 'sanjusangendo', '=kyoto-kiyomizu-dera', '=kyoto-yasaka-pagoda-sannenzaka', 'izuju', 'yasaka-shrine', 'hanamikoji', '=kyoto-shirakawa-canal-gion', 'kikunoi-honten'],
      'Фусими Инари, Киёмидзу и вечерний Гион|Fushimi Inari, Kiyomizu and Gion by evening|Fushimi Inari, Kiyomizu y Gion al anochecer|Fushimi Inari, Kiyomizu und Gion am Abend|Fushimi Inari, Kiyomizu et Gion le soir|Fushimi Inari, Kiyomizu e Gion la sera'),
    D(['ginkakuji', 'philosophers-path', 'nanzenji', '=kyoto-okutan-nanzenji', 'heian-shrine', 'nijo-castle', 'ippodo', '=kyoto-nishiki-market', '=kyoto-pontocho-alley'],
      'Серебряный павильон, Тропа философа, замок Нидзё и Понтотё|Silver Pavilion, Philosopher’s Path, Nijō Castle and Pontochō|Pabellón de Plata, Camino del Filósofo, castillo Nijō y Pontochō|Silberner Pavillon, Philosophenweg, Burg Nijō und Pontochō|Pavillon d’argent, chemin de la philosophie, château de Nijō et Pontochō|Padiglione d’argento, Sentiero del filosofo, castello Nijō e Pontochō'),
    D(['=kinkakuji', 'ryoanji', 'tenryuji', '=arashiyama', 'shoraian', '=kyoto-otagi-nenbutsu-ji', 'kyoto-gogyo'],
      'Золотой павильон, сад камней и Арасияма|Golden Pavilion, the rock garden and Arashiyama|Pabellón Dorado, jardín de piedras y Arashiyama|Goldener Pavillon, Steingarten und Arashiyama|Pavillon d’or, jardin de pierres et Arashiyama|Padiglione d’oro, giardino di pietre e Arashiyama'),
  ],
};

export default pack;
