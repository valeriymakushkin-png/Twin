import type { CityPack } from '../types';
import { free, level, makeDay, makePlace } from './_kit.ts';

const P = makePlace('kobe');
const D = makeDay('kobe');
const TOWER = 'bsKvQLTgwVo';
const NIGHT = 'XCdaxCxT7EQ';
const SKY = 'h5N5krCK4Rk';
const BEKOBE = 'rxvjb75QmYI';
const SIGN = '64WURA5nRwA';

const pack: CityPack = {
  country: 'JP',
  city: 'kobe',
  places: [
    P('kitano-ijinkan', 'attraction', 34.7013, 135.1903, SKY, 4.2, 15000, ['history', 'architecture'], {
      ru: ['Китано Иджинкан', 'Холм с особняками иностранных купцов конца XIX — начала XX века; самый известный — «Дом с флюгером» 1909 года.', 'Комбинированный билет на несколько домов выгоднее; дома на верхних улицах — самые тихие.'],
      en: ['Kitano Ijinkan', 'A hillside of foreign merchants’ mansions from the late 19th and early 20th century; the best known is the 1909 Weathercock House.', 'A combined ticket for several houses is better value; the upper streets are quietest.'],
      es: ['Kitano Ijinkan', 'Una colina de mansiones de comerciantes extranjeros de finales del XIX y principios del XX; la más famosa es la Casa de la Veleta (1909).', 'La entrada combinada para varias casas sale mejor; las calles altas son las más tranquilas.'],
      de: ['Kitano Ijinkan', 'Ein Hang mit Villen ausländischer Kaufleute aus dem späten 19. und frühen 20. Jh.; am bekanntesten ist das Wetterhahnhaus von 1909.', 'Ein Kombiticket für mehrere Häuser lohnt sich; die oberen Straßen sind am ruhigsten.'],
      fr: ['Kitano Ijinkan', 'Une colline de demeures de marchands étrangers de la fin du XIXe et du début du XXe ; la plus connue est la Maison de la Girouette (1909).', 'Le billet combiné pour plusieurs maisons est plus avantageux ; les rues hautes sont les plus calmes.'],
      it: ['Kitano Ijinkan', 'Una collina di ville di mercanti stranieri di fine Ottocento e inizio Novecento; la più nota è la Casa della Banderuola (1909).', 'Il biglietto combinato per più case conviene; le vie alte sono le più tranquille.'],
    }, { price: level(1) }),
    P('meriken-park', 'attraction', 34.6826, 135.1887, BEKOBE, 4.4, 26000, ['photo', 'history'], {
      ru: ['Парк Мэрикэн', 'Набережная с белыми буквами BE KOBE и Мемориалом землетрясения 1995 года, где оставлен разрушенный кусок причала.', 'Лучше всего на закате, когда загораются башня и отель Oriental.'],
      en: ['Meriken Park', 'A waterfront with the white BE KOBE letters and the 1995 Earthquake Memorial, where a ruined stretch of quay was left as it was.', 'Best at sunset as the tower and the Oriental Hotel light up.'],
      es: ['Parque Meriken', 'Un frente marítimo con las letras blancas BE KOBE y el Memorial del Terremoto de 1995, donde se dejó un tramo de muelle destruido.', 'Mejor al atardecer, cuando se encienden la torre y el hotel Oriental.'],
      de: ['Meriken-Park', 'Eine Uferpromenade mit den weißen BE-KOBE-Buchstaben und dem Erdbebendenkmal von 1995, wo ein zerstörtes Kaistück erhalten blieb.', 'Am schönsten zum Sonnenuntergang, wenn Turm und Oriental Hotel aufleuchten.'],
      fr: ['Parc Meriken', 'Un front de mer avec les lettres blanches BE KOBE et le mémorial du séisme de 1995, où un pan de quai détruit a été conservé.', 'Idéal au coucher du soleil, quand la tour et l’hôtel Oriental s’illuminent.'],
      it: ['Parco Meriken', 'Un lungomare con le lettere bianche BE KOBE e il Memoriale del terremoto del 1995, dove è rimasto un tratto di molo distrutto.', 'Il meglio al tramonto, quando si accendono la torre e l’Oriental Hotel.'],
    }, { spot: 'insta', price: free }),
    P('port-tower', 'attraction', 34.6826, 135.1866, TOWER, 4.4, 21000, ['views', 'architecture'], {
      ru: ['Башня порта Кобе', 'Красная 108-метровая башня 1963 года в форме «барабана»; после реконструкции открылась в 2024 году с открытой смотровой крышей.', 'Поднимитесь на открытую крышу — вид на порт и горы Рокко на 360°.'],
      en: ['Kobe Port Tower', 'A red 108 m “drum”-shaped tower from 1963; it reopened after renovation in 2024 with an open-air rooftop deck.', 'Go up to the open rooftop for a 360° view of the port and the Rokkō mountains.'],
      es: ['Torre del Puerto de Kobe', 'Una torre roja de 108 m de 1963 con forma de «tambor»; reabrió tras su renovación en 2024 con una azotea al aire libre.', 'Sube a la azotea abierta: 360° sobre el puerto y los montes Rokkō.'],
      de: ['Kobe Port Tower', 'Ein roter, 108 m hoher Turm in „Trommel“-Form von 1963; nach Renovierung 2024 mit offenem Dachdeck wiedereröffnet.', 'Aufs offene Dach – 360° über Hafen und Rokkō-Berge.'],
      fr: ['Tour du port de Kobe', 'Une tour rouge de 108 m en forme de « tambour » (1963), rouverte après rénovation en 2024 avec un toit-terrasse en plein air.', 'Montez sur le toit ouvert : 360° sur le port et les monts Rokkō.'],
      it: ['Torre del porto di Kobe', 'Una torre rossa di 108 m a forma di «tamburo» del 1963, riaperta dopo il restauro nel 2024 con una terrazza panoramica all’aperto.', 'Sali sulla terrazza aperta: 360° sul porto e sui monti Rokkō.'],
    }, { spot: 'insta', price: level(2) }),
    P('harborland', 'attraction', 34.6795, 135.1835, NIGHT, 4.3, 19000, ['shopping', 'views', 'nightlife'], {
      ru: ['Харборленд', 'Набережная с торговыми центрами umie и Mosaic, колесом обозрения и видом на башню через гавань.', 'Вечером с террасы Mosaic — лучший вид на подсвеченную башню.'],
      en: ['Harborland', 'A waterfront of the umie and Mosaic malls, a Ferris wheel and views of the tower across the harbour.', 'In the evening the Mosaic terrace has the best view of the lit-up tower.'],
      es: ['Harborland', 'Un frente marítimo con los centros comerciales umie y Mosaic, una noria y vistas de la torre al otro lado del puerto.', 'Por la noche la terraza de Mosaic tiene la mejor vista de la torre iluminada.'],
      de: ['Harborland', 'Eine Uferzone mit den Einkaufszentren umie und Mosaic, einem Riesenrad und Blick über den Hafen zum Turm.', 'Abends hat die Mosaic-Terrasse den besten Blick auf den beleuchteten Turm.'],
      fr: ['Harborland', 'Un front de mer avec les centres umie et Mosaic, une grande roue et la vue sur la tour de l’autre côté du port.', 'Le soir, la terrasse de Mosaic offre la plus belle vue sur la tour illuminée.'],
      it: ['Harborland', 'Un lungomare con i centri commerciali umie e Mosaic, una ruota panoramica e vista sulla torre oltre il porto.', 'La sera la terrazza di Mosaic ha la vista migliore sulla torre illuminata.'],
    }, { price: free }),
    P('nankinmachi', 'attraction', 34.688, 135.188, SIGN, 4.2, 23000, ['streetfood', 'culture'], {
      ru: ['Нанкинмати', 'Китайский квартал Кобе, выросший после открытия порта в 1868 году: красные ворота, лавки уличной еды и пагоды.', 'Пробуйте понемногу в разных лавках — порции небольшие.'],
      en: ['Nankinmachi', 'Kobe’s Chinatown, grown up since the port opened in 1868: red gates, street-food stalls and pagodas.', 'Graze a little at several stalls — portions are small.'],
      es: ['Nankinmachi', 'El barrio chino de Kobe, surgido tras abrirse el puerto en 1868: puertas rojas, puestos callejeros y pagodas.', 'Picotea un poco en varios puestos: las raciones son pequeñas.'],
      de: ['Nankinmachi', 'Kobes Chinatown, gewachsen seit der Hafenöffnung 1868: rote Tore, Garküchen und Pagoden.', 'An mehreren Ständen ein wenig probieren – die Portionen sind klein.'],
      fr: ['Nankinmachi', 'Le quartier chinois de Kobe, né après l’ouverture du port en 1868 : portes rouges, étals de street food et pagodes.', 'Grignotez un peu à plusieurs étals : les portions sont petites.'],
      it: ['Nankinmachi', 'La Chinatown di Kobe, cresciuta dopo l’apertura del porto nel 1868: porte rosse, banchi di cibo di strada e pagode.', 'Assaggia un po’ in più banchi: le porzioni sono piccole.'],
    }, { price: free }),
    P('ikuta-shrine', 'attraction', 34.6942, 135.191, SKY, 4.4, 17000, ['temples', 'history'], {
      ru: ['Святилище Икута', 'Одно из старейших святилищ Японии посреди Санномии с небольшим священным лесом позади.', 'Пройдите в рощу Икута-но мори за главным залом — тихий островок среди города.'],
      en: ['Ikuta Shrine', 'One of Japan’s oldest shrines, right in Sannomiya, with a small sacred forest behind it.', 'Walk into the Ikuta-no-mori grove behind the main hall — a quiet island in the city.'],
      es: ['Santuario Ikuta', 'Uno de los santuarios más antiguos de Japón, en pleno Sannomiya, con un pequeño bosque sagrado detrás.', 'Entra en la arboleda Ikuta-no-mori tras el salón principal: una isla tranquila.'],
      de: ['Ikuta-Schrein', 'Einer der ältesten Schreine Japans mitten in Sannomiya, mit kleinem heiligem Wald dahinter.', 'In den Hain Ikuta-no-mori hinter der Haupthalle gehen – eine ruhige Insel in der Stadt.'],
      fr: ['Sanctuaire Ikuta', 'L’un des plus anciens sanctuaires du Japon, au cœur de Sannomiya, avec un petit bois sacré derrière.', 'Entrez dans le bosquet Ikuta-no-mori derrière le pavillon : une île de calme.'],
      it: ['Santuario Ikuta', 'Uno dei santuari più antichi del Giappone, nel cuore di Sannomiya, con un piccolo bosco sacro alle spalle.', 'Entra nel boschetto Ikuta-no-mori dietro la sala: un’isola di quiete.'],
    }, { price: free }),
    P('nunobiki-herb-garden', 'nature', 34.709, 135.189, SKY, 4.4, 12000, ['gardens', 'views'], {
      ru: ['Сад трав Нунобики', 'Канатная дорога от станции Син-Кобе поднимает к садам трав и цветов на склоне с видом на порт.', 'Поднимитесь наверх на канатке и спуститесь пешком через сады и водопады Нунобики.'],
      en: ['Nunobiki Herb Gardens', 'A ropeway from Shin-Kobe Station rises to hillside herb and flower gardens with harbour views.', 'Ride up and walk down through the gardens and past the Nunobiki Falls.'],
      es: ['Jardines de hierbas de Nunobiki', 'Un teleférico desde la estación Shin-Kobe sube a jardines de hierbas y flores en la ladera con vistas al puerto.', 'Sube en teleférico y baja a pie por los jardines y las cascadas de Nunobiki.'],
      de: ['Kräutergarten Nunobiki', 'Eine Seilbahn vom Bahnhof Shin-Kobe führt zu Kräuter- und Blumengärten am Hang mit Hafenblick.', 'Hinauffahren und zu Fuß durch die Gärten und an den Nunobiki-Fällen vorbei absteigen.'],
      fr: ['Jardins d’herbes de Nunobiki', 'Un téléphérique depuis la gare de Shin-Kobe monte vers des jardins d’herbes et de fleurs à flanc de colline, vue sur le port.', 'Montez en cabine et redescendez à pied par les jardins et les chutes de Nunobiki.'],
      it: ['Giardino delle erbe di Nunobiki', 'Una funivia dalla stazione di Shin-Kobe sale a giardini di erbe e fiori sul pendio con vista sul porto.', 'Sali in funivia e scendi a piedi tra i giardini e le cascate di Nunobiki.'],
    }, { price: level(2) }),
    P('nunobiki-falls', 'nature', 34.708, 135.194, SKY, 4.4, 6400, ['waterfalls', 'hiking', 'nature'], {
      ru: ['Водопады Нунобики', 'Каскад из четырёх водопадов в лесу всего в 10 минутах ходьбы от станции Син-Кобе.', 'Тропа идёт вверх по ступеням — дальше она ведёт к саду трав.'],
      en: ['Nunobiki Falls', 'A cascade of four waterfalls in the forest just 10 minutes’ walk from Shin-Kobe Station.', 'The trail climbs by steps and continues up to the herb gardens.'],
      es: ['Cascadas de Nunobiki', 'Una cascada de cuatro saltos en el bosque, a solo 10 minutos a pie de la estación Shin-Kobe.', 'El sendero sube por escalones y sigue hasta los jardines de hierbas.'],
      de: ['Nunobiki-Wasserfälle', 'Eine Kaskade aus vier Wasserfällen im Wald, nur 10 Gehminuten vom Bahnhof Shin-Kobe.', 'Der Pfad steigt über Stufen und führt weiter zum Kräutergarten.'],
      fr: ['Chutes de Nunobiki', 'Une cascade de quatre chutes en forêt, à seulement 10 minutes à pied de la gare de Shin-Kobe.', 'Le sentier grimpe par des marches et continue vers les jardins d’herbes.'],
      it: ['Cascate di Nunobiki', 'Una cascata a quattro salti nel bosco, a soli 10 minuti a piedi dalla stazione di Shin-Kobe.', 'Il sentiero sale a gradini e prosegue fino al giardino delle erbe.'],
    }, { spot: 'hidden', price: free }),
    P('mount-rokko', 'nature', 34.778, 135.263, NIGHT, 4.4, 14000, ['mountains', 'views', 'hiking'], {
      ru: ['Гора Рокко', 'Горный хребет над городом: фуникулёр, терраса Rokko Garden Terrace и канатная дорога, спускающаяся к онсэну Арима.', 'Наверху на 5–6 градусов холоднее, чем в городе, — возьмите кофту.'],
      en: ['Mount Rokkō', 'The ridge above the city: a cable car, the Rokko Garden Terrace and a ropeway down to Arima Onsen.', 'It’s 5–6 degrees colder up top than in town — bring a layer.'],
      es: ['Monte Rokkō', 'La sierra sobre la ciudad: funicular, la Rokko Garden Terrace y un teleférico que baja a Arima Onsen.', 'Arriba hace 5–6 grados menos que en la ciudad: lleva una capa.'],
      de: ['Berg Rokkō', 'Der Kamm über der Stadt: Standseilbahn, die Rokko Garden Terrace und eine Seilbahn hinunter nach Arima Onsen.', 'Oben ist es 5–6 Grad kälter als in der Stadt – eine Schicht mehr mitnehmen.'],
      fr: ['Mont Rokkō', 'La crête au-dessus de la ville : funiculaire, Rokko Garden Terrace et téléphérique jusqu’à Arima Onsen.', 'Il fait 5 à 6 degrés de moins en haut : prévoyez une couche.'],
      it: ['Monte Rokkō', 'La cresta sopra la città: funicolare, la Rokko Garden Terrace e una funivia che scende ad Arima Onsen.', 'In cima fa 5–6 gradi in meno che in città: porta uno strato in più.'],
    }, { spot: 'insta', price: level(2) }),
    P('maya-kikuseidai', 'attraction', 34.728, 135.212, NIGHT, 4.6, 9700, ['views', 'sunset', 'photo'], {
      ru: ['Кикусэйдай на горе Мая', 'Смотровая площадка на горе Мая, откуда открывается «ночной вид на десять миллионов долларов» — один из трёх лучших в Японии.', 'Поднимайтесь фуникулёром и канаткой к закату; последний спуск — проверьте расписание.'],
      en: ['Kikuseidai on Mount Maya', 'A lookout on Mount Maya with the “ten-million-dollar night view”, ranked among Japan’s three best.', 'Ride the cable car and ropeway up for sunset; check the last ride down.'],
      es: ['Kikuseidai en el monte Maya', 'Un mirador en el monte Maya con la «vista nocturna de diez millones de dólares», entre las tres mejores de Japón.', 'Sube en funicular y teleférico al atardecer; mira el último descenso.'],
      de: ['Kikuseidai am Berg Maya', 'Ein Aussichtspunkt am Maya mit dem „Zehn-Millionen-Dollar-Nachtblick“, einem der drei schönsten Japans.', 'Mit Standseilbahn und Seilbahn zum Sonnenuntergang hinauf; letzte Talfahrt prüfen.'],
      fr: ['Kikuseidai au mont Maya', 'Un belvédère du mont Maya à la « vue nocturne à dix millions de dollars », parmi les trois plus belles du Japon.', 'Montez en funiculaire et téléphérique pour le coucher du soleil ; vérifiez la dernière descente.'],
      it: ['Kikuseidai sul monte Maya', 'Un belvedere sul monte Maya con la «vista notturna da dieci milioni di dollari», tra le tre più belle del Giappone.', 'Sali in funicolare e funivia per il tramonto; controlla l’ultima discesa.'],
    }, { spot: 'insta', price: level(1) }),
    P('arima-onsen', 'nature', 34.797, 135.248, SKY, 4.5, 18000, ['spa', 'history'], {
      ru: ['Онсэн Арима', 'Один из старейших горячих источников Японии за горами Рокко: рыжие железистые «золотые» и прозрачные «серебряные» воды.', 'Общественные бани Кин-но-ю и Гин-но-ю открыты для всех — не обязательно жить в рёкане.'],
      en: ['Arima Onsen', 'One of Japan’s oldest hot springs, behind the Rokkō mountains: rust-red iron “gold” waters and clear “silver” ones.', 'The public baths Kin-no-yu and Gin-no-yu are open to all — no ryokan stay needed.'],
      es: ['Arima Onsen', 'Una de las termas más antiguas de Japón, tras los montes Rokkō: aguas «doradas» rojizas de hierro y «plateadas» transparentes.', 'Los baños públicos Kin-no-yu y Gin-no-yu están abiertos a todos.'],
      de: ['Arima Onsen', 'Eine der ältesten Thermen Japans hinter den Rokkō-Bergen: rostrotes eisenhaltiges „Gold“- und klares „Silber“-Wasser.', 'Die öffentlichen Bäder Kin-no-yu und Gin-no-yu stehen allen offen.'],
      fr: ['Arima Onsen', 'L’une des plus anciennes sources chaudes du Japon, derrière les monts Rokkō : eaux « d’or » ferrugineuses rouille et eaux « d’argent » limpides.', 'Les bains publics Kin-no-yu et Gin-no-yu sont ouverts à tous.'],
      it: ['Arima Onsen', 'Una delle più antiche terme del Giappone, dietro i monti Rokkō: acque «d’oro» ferrose color ruggine e «d’argento» limpide.', 'I bagni pubblici Kin-no-yu e Gin-no-yu sono aperti a tutti.'],
    }, { price: level(1) }),
    P('akashi-kaikyo-bridge', 'attraction', 34.617, 135.021, SKY, 4.6, 15000, ['architecture', 'views'], {
      ru: ['Мост Акаси-Кайкё', 'Подвесной мост 1998 года с центральным пролётом 1991 м — долгие годы самый длинный в мире; ведёт на остров Авадзи.', 'С променада Майко под мостом видно его конструкцию снизу.'],
      en: ['Akashi Kaikyō Bridge', 'A 1998 suspension bridge with a 1,991 m central span — for years the world’s longest — leading to Awaji Island.', 'The Maiko promenade beneath lets you see the structure from below.'],
      es: ['Puente Akashi Kaikyō', 'Un puente colgante de 1998 con un vano central de 1991 m, durante años el más largo del mundo, que lleva a la isla de Awaji.', 'Desde el paseo Maiko bajo el puente se ve su estructura.'],
      de: ['Akashi-Kaikyō-Brücke', 'Eine Hängebrücke von 1998 mit 1991 m Hauptspannweite – jahrelang die längste der Welt – zur Insel Awaji.', 'Von der Maiko-Promenade darunter sieht man die Konstruktion von unten.'],
      fr: ['Pont Akashi-Kaikyō', 'Un pont suspendu de 1998 à la travée centrale de 1 991 m, longtemps la plus longue du monde, vers l’île d’Awaji.', 'La promenade de Maiko, dessous, permet de voir la structure d’en bas.'],
      it: ['Ponte Akashi Kaikyō', 'Un ponte sospeso del 1998 con campata centrale di 1991 m, per anni la più lunga del mondo, verso l’isola di Awaji.', 'Dalla passeggiata Maiko sotto il ponte se ne vede la struttura.'],
    }, { spot: 'insta', price: free }),
    P('hyogo-museum-of-art', 'attraction', 34.699, 135.218, TOWER, 4.4, 8300, ['art', 'museums', 'architecture'], {
      ru: ['Музей искусств префектуры Хёго', 'Бетонный музей Тадао Андо на набережной с выставками японского и западного искусства и лестницами к морю.', 'Найдите на крыше огромную зелёную лягушку — арт-объект, ставший символом музея.'],
      en: ['Hyogo Prefectural Museum of Art', 'Tadao Ando’s concrete museum on the waterfront, with Japanese and Western art and stairways down to the sea.', 'Look for the giant green frog on the roof — an artwork that became the museum’s mascot.'],
      es: ['Museo de Arte de la Prefectura de Hyogo', 'El museo de hormigón de Tadao Ando junto al mar, con arte japonés y occidental y escaleras que bajan al agua.', 'Busca la rana verde gigante del tejado, obra convertida en símbolo del museo.'],
      de: ['Präfekturkunstmuseum Hyogo', 'Tadao Andos Betonmuseum am Wasser mit japanischer und westlicher Kunst und Treppen hinunter zum Meer.', 'Den riesigen grünen Frosch auf dem Dach suchen – ein Kunstwerk und Maskottchen des Museums.'],
      fr: ['Musée d’art de la préfecture de Hyogo', 'Le musée en béton de Tadao Ando sur le front de mer, art japonais et occidental et escaliers vers la mer.', 'Cherchez la grenouille verte géante sur le toit, œuvre devenue mascotte du musée.'],
      it: ['Museo d’arte della prefettura di Hyogo', 'Il museo in cemento di Tadao Ando sul lungomare, con arte giapponese e occidentale e scalinate verso il mare.', 'Cerca la gigantesca rana verde sul tetto, opera diventata mascotte del museo.'],
    }, { price: level(1) }),
    P('mouriya', 'food', 34.6915, 135.192, TOWER, 4.4, 5900, ['food', 'luxury'], {
      ru: ['Моурия (главный ресторан)', 'Стейк-хаус с 1885 года, один из старейших в Кобе: сертифицированная говядина кобе на плите перед гостем.', 'Обед заметно дешевле ужина; просите показать сертификат говядины.'],
      en: ['Mouriya (main restaurant)', 'A steakhouse since 1885, one of Kobe’s oldest: certified Kobe beef seared on the griddle in front of you.', 'Lunch is much cheaper than dinner; ask to see the beef certificate.'],
      es: ['Mouriya (restaurante principal)', 'Un asador desde 1885, de los más antiguos de Kobe: ternera de Kobe certificada a la plancha delante de ti.', 'El almuerzo es mucho más barato; pide ver el certificado de la carne.'],
      de: ['Mouriya (Stammhaus)', 'Ein Steakhaus seit 1885, eines der ältesten Kobes: zertifiziertes Kobe-Rind vor Ihren Augen auf der Platte.', 'Mittags deutlich günstiger; nach dem Fleischzertifikat fragen.'],
      fr: ['Mouriya (restaurant principal)', 'Un steakhouse depuis 1885, parmi les plus anciens de Kobe : bœuf de Kobe certifié saisi sur la plaque devant vous.', 'Le déjeuner est bien moins cher ; demandez à voir le certificat.'],
      it: ['Mouriya (ristorante principale)', 'Una steakhouse dal 1885, tra le più antiche di Kobe: manzo di Kobe certificato scottato sulla piastra davanti a te.', 'Il pranzo costa molto meno; chiedi di vedere il certificato.'],
    }, { price: level(3), menu: [
      ['Kobe beef steak', undefined, 'стейк из говядины кобе|Kobe beef steak|filete de ternera de Kobe|Kobe-Rind-Steak|steak de bœuf de Kobe|bistecca di manzo di Kobe'],
      ['Steak lunch', undefined, 'обеденный сет со стейком|steak lunch set|menú de mediodía con filete|Steak-Mittagsmenü|menu déjeuner steak|menu pranzo con bistecca'],
    ] }),
    P('steakland-kobe', 'food', 34.693, 135.196, TOWER, 4.2, 8800, ['food'], {
      ru: ['Steakland Kobe', 'Демократичный тэппанъяки у Санномии: в меню и говядина кобе, и более дешёвый вагю, особенно в обеденных сетах.', 'Читайте меню внимательно — «говядина кобе» и просто «вагю» стоят по-разному.'],
      en: ['Steakland Kobe', 'An affordable teppanyaki near Sannomiya: the menu has both Kobe beef and cheaper wagyu, especially in lunch sets.', 'Read the menu carefully — “Kobe beef” and plain “wagyu” are priced differently.'],
      es: ['Steakland Kobe', 'Un teppanyaki asequible junto a Sannomiya: hay ternera de Kobe y wagyu más barato, sobre todo en los menús de mediodía.', 'Lee bien la carta: «ternera de Kobe» y «wagyu» no cuestan lo mismo.'],
      de: ['Steakland Kobe', 'Ein günstiges Teppanyaki bei Sannomiya: Kobe-Rind und günstigeres Wagyu, besonders in Mittagssets.', 'Die Karte genau lesen – „Kobe-Rind“ und einfaches „Wagyu“ kosten unterschiedlich.'],
      fr: ['Steakland Kobe', 'Un teppanyaki abordable près de Sannomiya : bœuf de Kobe et wagyu moins cher, surtout dans les menus du midi.', 'Lisez bien la carte : « bœuf de Kobe » et « wagyu » n’ont pas le même prix.'],
      it: ['Steakland Kobe', 'Un teppanyaki economico vicino a Sannomiya: manzo di Kobe e wagyu più economico, soprattutto nei set del pranzo.', 'Leggi bene il menu: «manzo di Kobe» e semplice «wagyu» hanno prezzi diversi.'],
    }, { price: level(2), menu: [
      ['Kobe beef steak lunch', undefined, 'обед со стейком из говядины кобе|Kobe beef steak lunch|almuerzo de filete de Kobe|Mittagsmenü mit Kobe-Rind|déjeuner steak de Kobe|pranzo con bistecca di Kobe'],
      ['Wagyu steak set', undefined, 'сет со стейком вагю|wagyu steak set|menú de filete de wagyu|Wagyu-Steak-Menü|menu steak de wagyu|set di bistecca wagyu'],
    ] }),
    P('kobe-plaisir', 'food', 34.692, 135.194, TOWER, 4.5, 2600, ['food', 'luxury', 'romance'], {
      ru: ['Kobe Plaisir', 'Ресторан фермерского объединения префектуры Хёго: говядина кобе с указанием фермы и продукты региона.', 'Хорошее место для спокойного ужина с честной говядиной кобе.'],
      en: ['Kobe Plaisir', 'A restaurant run by the Hyogo farmers’ cooperative: Kobe beef traced to the farm and regional produce.', 'A good place for a relaxed dinner with genuine Kobe beef.'],
      es: ['Kobe Plaisir', 'Un restaurante de la cooperativa agraria de Hyogo: ternera de Kobe con trazabilidad hasta la granja y producto regional.', 'Buen sitio para una cena tranquila con auténtica ternera de Kobe.'],
      de: ['Kobe Plaisir', 'Ein Restaurant der Bauerngenossenschaft Hyogo: Kobe-Rind bis zum Hof rückverfolgbar und regionale Produkte.', 'Gut für ein ruhiges Abendessen mit echtem Kobe-Rind.'],
      fr: ['Kobe Plaisir', 'Un restaurant de la coopérative agricole de Hyogo : bœuf de Kobe tracé jusqu’à la ferme et produits régionaux.', 'Une bonne adresse pour un dîner calme avec du vrai bœuf de Kobe.'],
      it: ['Kobe Plaisir', 'Un ristorante della cooperativa agricola di Hyogo: manzo di Kobe tracciato fino all’allevamento e prodotti regionali.', 'Ottimo per una cena tranquilla con vero manzo di Kobe.'],
    }, { price: level(3), menu: [
      ['Kobe beef course', undefined, 'дегустационный ужин с говядиной кобе|Kobe beef tasting course|menú degustación de ternera de Kobe|Kobe-Rind-Menü|menu dégustation de bœuf de Kobe|menu degustazione di manzo di Kobe'],
      ['Hyogo vegetables', undefined, 'овощи префектуры Хёго на гриле|grilled Hyogo vegetables|verduras de Hyogo a la plancha|gegrilltes Hyogo-Gemüse|légumes de Hyogo grillés|verdure di Hyogo alla griglia'],
    ] }),
    P('roshoki', 'food', 34.6878, 135.1878, SIGN, 4.3, 7900, ['food', 'streetfood'], {
      ru: ['Росёки', 'Лавка в Нанкинмати с 1915 года, которая, как считается, дала японским паровым булочкам с мясом имя «бутаман».', 'Очередь движется быстро; булочки продаются минимум по три штуки.'],
      en: ['Roshoki', 'A Nankinmachi shop since 1915 that is said to have given Japan’s steamed pork buns the name “butaman”.', 'The queue moves fast; buns are sold in threes at minimum.'],
      es: ['Roshoki', 'Una tienda de Nankinmachi desde 1915 a la que se atribuye haber dado nombre al «butaman», el bollo al vapor de cerdo.', 'La cola avanza rápido; se venden de tres en tres como mínimo.'],
      de: ['Roshoki', 'Ein Laden in Nankinmachi seit 1915, der den japanischen gedämpften Schweinefleischbrötchen den Namen „Butaman“ gegeben haben soll.', 'Die Schlange geht schnell; mindestens drei Stück pro Kauf.'],
      fr: ['Roshoki', 'Une boutique de Nankinmachi depuis 1915, à qui l’on attribue le nom « butaman » des petits pains vapeur au porc.', 'La file avance vite ; vente par trois minimum.'],
      it: ['Roshoki', 'Un negozio di Nankinmachi dal 1915 a cui si attribuisce il nome «butaman» dei panini al vapore col maiale.', 'La fila scorre veloce; si vendono almeno a tre a tre.'],
    }, { price: level(1), menu: [
      ['Butaman', undefined, 'паровые булочки со свининой|steamed pork buns|bollos al vapor de cerdo|gedämpfte Schweinefleischbrötchen|petits pains vapeur au porc|panini al vapore col maiale'],
      ['Mustard', undefined, 'горчица к булочкам|mustard on the side|mostaza para acompañar|Senf dazu|moutarde à côté|senape a parte'],
    ] }),
    P('ganso-gyozaen', 'food', 34.6882, 135.1885, SIGN, 4.2, 3600, ['food'], {
      ru: ['Гансо Гёдза-эн', 'Гёдза-лавка в Нанкинмати с 1951 года, где гёдза едят с соусом на основе мисо — местная особенность.', 'Попробуйте с фирменным мисо-соусом, а не с обычным соевым.'],
      en: ['Ganso Gyozaen', 'A Nankinmachi gyoza house since 1951 where dumplings come with a miso-based dipping sauce — a local twist.', 'Try them with the house miso sauce rather than plain soy.'],
      es: ['Ganso Gyozaen', 'Un local de gyoza en Nankinmachi desde 1951 donde se mojan en salsa de miso, un toque local.', 'Pruébalas con la salsa de miso de la casa en vez de soja.'],
      de: ['Ganso Gyozaen', 'Ein Gyoza-Lokal in Nankinmachi seit 1951, wo man die Teigtaschen in Miso-Soße tunkt – eine lokale Eigenart.', 'Mit der hauseigenen Miso-Soße statt einfacher Sojasoße probieren.'],
      fr: ['Ganso Gyozaen', 'Une maison de gyoza à Nankinmachi depuis 1951, où l’on trempe les raviolis dans une sauce au miso, spécialité locale.', 'Goûtez-les avec la sauce miso maison plutôt qu’au soja.'],
      it: ['Ganso Gyozaen', 'Un locale di gyoza a Nankinmachi dal 1951 dove si intingono in una salsa al miso, tocco locale.', 'Provali con la salsa al miso della casa invece della soia.'],
    }, { price: level(1), menu: [
      ['Yaki gyoza with miso sauce', undefined, 'жареные гёдза с мисо-соусом|fried gyoza with miso sauce|gyoza a la plancha con salsa de miso|gebratene Gyoza mit Miso-Soße|gyoza grillés sauce miso|gyoza alla piastra con salsa al miso'],
      ['Sui gyoza', undefined, 'варёные гёдза|boiled gyoza|gyoza hervidas|gekochte Gyoza|gyoza bouillis|gyoza bolliti'],
    ] }),
    P('freundlieb', 'food', 34.699, 135.194, SKY, 4.4, 4100, ['food', 'architecture'], {
      ru: ['Freundlieb', 'Немецкая пекарня, основанная в Кобе в 1924 году; кафе на втором этаже — в здании бывшей церкви с высокими окнами.', 'Возьмите сэндвич и пирог в кафе наверху — внизу продают хлеб с собой.'],
      en: ['Freundlieb', 'A German bakery founded in Kobe in 1924; its first-floor café is in a former church with tall windows.', 'Have a sandwich and cake in the café upstairs — downstairs sells bread to take away.'],
      es: ['Freundlieb', 'Una panadería alemana fundada en Kobe en 1924; su café de arriba está en una antigua iglesia de ventanales altos.', 'Toma un sándwich y tarta en el café de arriba; abajo venden pan para llevar.'],
      de: ['Freundlieb', 'Eine 1924 in Kobe gegründete deutsche Bäckerei; das Café im ersten Stock liegt in einer ehemaligen Kirche mit hohen Fenstern.', 'Oben im Café Sandwich und Kuchen – unten gibt es Brot zum Mitnehmen.'],
      fr: ['Freundlieb', 'Une boulangerie allemande fondée à Kobe en 1924 ; son café à l’étage occupe une ancienne église aux hautes fenêtres.', 'Prenez sandwich et gâteau au café en haut ; en bas, pain à emporter.'],
      it: ['Freundlieb', 'Una panetteria tedesca fondata a Kobe nel 1924; il caffè al primo piano è in un’ex chiesa dalle alte finestre.', 'Prendi panino e torta nel caffè di sopra; di sotto pane da asporto.'],
    }, { price: level(2), menu: [
      ['Sandwich lunch', undefined, 'обеденный сэндвич|sandwich lunch|almuerzo de sándwich|Sandwich-Mittagessen|déjeuner sandwich|pranzo con panino'],
      ['German cake', undefined, 'немецкий пирог|German cake|tarta alemana|deutscher Kuchen|gâteau allemand|torta tedesca'],
    ] }),
    P('starbucks-kitano', 'food', 34.6998, 135.1905, SKY, 4.3, 6200, ['food', 'architecture', 'photo'], {
      ru: ['Starbucks Китано Иджинкан', 'Кофейня в двухэтажном особняке 1907 года — зарегистрированном памятнике — с каминами и залами.', 'Займите комнату на втором этаже — там тише и сохранились интерьеры.'],
      en: ['Starbucks Kitano Ijinkan', 'A coffee shop in a two-storey 1907 Western house, a registered heritage building, with fireplaces and parlours.', 'Take a room upstairs — quieter, with the period interiors.'],
      es: ['Starbucks Kitano Ijinkan', 'Una cafetería en una casa occidental de dos plantas de 1907, edificio patrimonial registrado, con chimeneas y salones.', 'Sube a una sala del primer piso: más tranquila y con los interiores de época.'],
      de: ['Starbucks Kitano Ijinkan', 'Ein Café in einem zweistöckigen westlichen Haus von 1907, registriertes Kulturerbe, mit Kaminen und Salons.', 'Oben einen Raum nehmen – ruhiger und mit historischem Interieur.'],
      fr: ['Starbucks Kitano Ijinkan', 'Un café dans une maison occidentale de 1907 à deux étages, patrimoine enregistré, avec cheminées et salons.', 'Montez à l’étage : plus calme, intérieurs d’époque.'],
      it: ['Starbucks Kitano Ijinkan', 'Un caffè in una casa occidentale a due piani del 1907, edificio storico registrato, con camini e salotti.', 'Prendi una stanza al piano di sopra: più tranquilla, con gli interni d’epoca.'],
    }, { spot: 'insta', price: level(1) }),
    P('hakutsuru-sake-museum', 'food', 34.716, 135.261, NIGHT, 4.3, 5600, ['food', 'history', 'museums'], {
      ru: ['Музей саке Хакуцуру (Нада)', 'Старая сакэварня в районе Нада — крупнейшем центре саке в Японии — с экспозицией традиционного производства и дегустацией.', 'Вход бесплатный; в конце — бесплатная дегустация и лавка.'],
      en: ['Hakutsuru Sake Brewery Museum (Nada)', 'An old brewery in Nada, Japan’s biggest sake district, showing traditional brewing, with a tasting.', 'Entry is free; there’s a free tasting and shop at the end.'],
      es: ['Museo del Sake Hakutsuru (Nada)', 'Una antigua bodega en Nada, el mayor distrito sakero de Japón, con la elaboración tradicional y cata.', 'La entrada es gratis; al final hay cata gratuita y tienda.'],
      de: ['Sake-Brauereimuseum Hakutsuru (Nada)', 'Eine alte Brauerei in Nada, Japans größtem Sake-Viertel, mit traditionellem Brauen und Verkostung.', 'Eintritt frei; am Ende kostenlose Verkostung und Laden.'],
      fr: ['Musée du saké Hakutsuru (Nada)', 'Une ancienne brasserie de Nada, plus grand district du saké du Japon, présentant le brassage traditionnel, avec dégustation.', 'Entrée gratuite ; dégustation gratuite et boutique à la fin.'],
      it: ['Museo del sake Hakutsuru (Nada)', 'Una vecchia distilleria a Nada, il più grande distretto del sake del Giappone, con la produzione tradizionale e degustazione.', 'Ingresso gratuito; alla fine degustazione gratuita e negozio.'],
    }, { price: free, menu: [
      ['Sake tasting', undefined, 'дегустация саке|sake tasting|cata de sake|Sake-Verkostung|dégustation de saké|degustazione di sake'],
      ['Seasonal sake', undefined, 'сезонное саке|seasonal sake|sake de temporada|saisonaler Sake|saké de saison|sake di stagione'],
    ] }),
    P('kimuraya-akashiyaki', 'food', 34.6465, 134.993, SKY, 4.3, 2100, ['food', 'streetfood'], {
      ru: ['Кимурая (Акаси-яки)', 'Лавка у рыбного рынка Уонотана в Акаси: акаси-яки — нежные яичные шарики с осьминогом, которые макают в бульон.', 'Совместите с мостом Акаси-Кайкё и прогулкой по рынку Уонотана.'],
      en: ['Kimuraya (akashiyaki)', 'A shop by Akashi’s Uonotana fish market: akashiyaki — soft egg dumplings with octopus, dipped in dashi.', 'Pair it with the Akashi Kaikyō Bridge and a walk through Uonotana market.'],
      es: ['Kimuraya (akashiyaki)', 'Una tienda junto al mercado de pescado Uonotana de Akashi: akashiyaki, bolitas tiernas de huevo con pulpo que se mojan en dashi.', 'Combínalo con el puente Akashi Kaikyō y un paseo por Uonotana.'],
      de: ['Kimuraya (Akashiyaki)', 'Ein Laden am Fischmarkt Uonotana in Akashi: Akashiyaki – zarte Eierbällchen mit Oktopus, in Dashi getunkt.', 'Mit der Akashi-Kaikyō-Brücke und einem Bummel über den Uonotana-Markt verbinden.'],
      fr: ['Kimuraya (akashiyaki)', 'Une échoppe près du marché aux poissons Uonotana d’Akashi : akashiyaki, boulettes moelleuses à l’œuf et au poulpe trempées dans le dashi.', 'À combiner avec le pont Akashi-Kaikyō et une balade à Uonotana.'],
      it: ['Kimuraya (akashiyaki)', 'Un locale vicino al mercato del pesce Uonotana di Akashi: akashiyaki, morbide polpette all’uovo col polpo da intingere nel dashi.', 'Abbinalo al ponte Akashi Kaikyō e a un giro per il mercato Uonotana.'],
    }, { price: level(1), menu: [
      ['Akashiyaki', undefined, 'яичные шарики с осьминогом в бульоне|egg dumplings with octopus in dashi|bolitas de huevo con pulpo en dashi|Eierbällchen mit Oktopus in Dashi|boulettes à l’œuf et poulpe au dashi|polpette all’uovo col polpo nel dashi'],
      ['Dashi broth', undefined, 'бульон даси для макания|dashi for dipping|caldo dashi para mojar|Dashi zum Tunken|dashi pour tremper|dashi per intingere'],
    ] }),
    P('kitano-hotel-breakfast', 'food', 34.6995, 135.1885, SKY, 4.6, 2400, ['food', 'luxury'], {
      ru: ['Завтрак в Kobe Kitano Hotel', 'Знаменитый французский завтрак по рецептам Бернара Луазо в небольшом отеле на холме Китано.', 'Бронируйте заранее, если не живёте в отеле.'],
      en: ['Breakfast at Kobe Kitano Hotel', 'A celebrated French breakfast based on Bernard Loiseau’s recipes in a small hotel on the Kitano hill.', 'Book ahead if you’re not staying at the hotel.'],
      es: ['Desayuno en el Kobe Kitano Hotel', 'Un célebre desayuno francés según recetas de Bernard Loiseau en un pequeño hotel de la colina de Kitano.', 'Reserva si no te alojas en el hotel.'],
      de: ['Frühstück im Kobe Kitano Hotel', 'Ein berühmtes französisches Frühstück nach Rezepten von Bernard Loiseau in einem kleinen Hotel am Kitano-Hügel.', 'Vorher buchen, wenn man nicht im Hotel wohnt.'],
      fr: ['Petit-déjeuner au Kobe Kitano Hotel', 'Un célèbre petit-déjeuner français d’après les recettes de Bernard Loiseau, dans un petit hôtel de la colline de Kitano.', 'Réservez si vous ne logez pas à l’hôtel.'],
      it: ['Colazione al Kobe Kitano Hotel', 'Una celebre colazione francese sulle ricette di Bernard Loiseau, in un piccolo hotel sulla collina di Kitano.', 'Prenota se non dormi in hotel.'],
    }, { price: level(3), menu: [
      ['French breakfast', undefined, 'французский завтрак с соками, выпечкой и конфитюрами|French breakfast with juices, pastries and jams|desayuno francés con zumos, bollería y mermeladas|französisches Frühstück mit Säften, Gebäck und Konfitüren|petit-déjeuner français, jus, viennoiseries et confitures|colazione francese con succhi, viennoiserie e confetture'],
      ['Egg dish', undefined, 'яичное блюдо на выбор|egg dish of your choice|plato de huevo a elegir|Eiergericht nach Wahl|plat d’œufs au choix|piatto di uova a scelta'],
    ] }),
  ],
  routes: [
    D(['nunobiki-falls', 'nunobiki-herb-garden', 'kitano-ijinkan', 'freundlieb', 'ikuta-shrine', 'nankinmachi', 'roshoki', 'mouriya'],
      'Водопады Нунобики, дома Китано и Чайнатаун|Nunobiki Falls, the Kitano houses and Chinatown|Cascadas de Nunobiki, las casas de Kitano y el barrio chino|Nunobiki-Fälle, die Kitano-Häuser und Chinatown|Chutes de Nunobiki, maisons de Kitano et quartier chinois|Cascate di Nunobiki, le case di Kitano e Chinatown'),
    D(['kitano-hotel-breakfast', 'hyogo-museum-of-art', 'hakutsuru-sake-museum', 'meriken-park', 'port-tower', 'harborland', 'maya-kikuseidai', 'steakland-kobe'],
      'Саке Нады, гавань и ночной вид с горы Мая|Nada sake, the harbour and the night view from Mount Maya|El sake de Nada, el puerto y la vista nocturna del monte Maya|Nada-Sake, der Hafen und der Nachtblick vom Maya|Le saké de Nada, le port et la vue nocturne du mont Maya|Il sake di Nada, il porto e la vista notturna dal monte Maya'),
    D(['arima-onsen', 'mount-rokko', 'akashi-kaikyo-bridge', 'kimuraya-akashiyaki', 'ganso-gyozaen', 'kobe-plaisir'],
      'Онсэн Арима, гора Рокко и мост Акаси|Arima Onsen, Mount Rokkō and the Akashi bridge|Arima Onsen, el monte Rokkō y el puente de Akashi|Arima Onsen, der Rokkō und die Akashi-Brücke|Arima Onsen, le mont Rokkō et le pont d’Akashi|Arima Onsen, il monte Rokkō e il ponte di Akashi'),
  ],
};

export default pack;
