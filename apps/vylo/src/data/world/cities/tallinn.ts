import type { CityPack } from '../types';
import { free, level, makeDay, makePlace } from './_kit.ts';

const P = makePlace('tallinn');
const D = makeDay('tallinn');
const CITY = 'n1cyHyP_jjc';
const VIEW = 'MqVxNiYIjME';
const HARBOUR = '2OSEWkQHiGI';
const PARK = '0mR6KB4eDqM';
const SQUARE = 'NdDZDvFaQMA';
const KALAMAJA = '7fHOC5ucBSo';
const MARKET = 'lac3SFUUOZ0';

const pack: CityPack = {
  country: 'EE',
  city: 'tallinn',
  places: [
    P('alexander-nevsky-cathedral', 'attraction', 59.4359, 24.7392, VIEW, 4.6, 21000, ['architecture', 'history'], {
      ru: ['Собор Александра Невского', 'Православный собор конца XIX века с луковичными куполами на холме Тоомпеа, напротив замка — здание парламента Эстонии.', 'Внутри не фотографируют; плечи должны быть закрыты.'],
      en: ['Alexander Nevsky Cathedral', 'A late-19th-century Orthodox cathedral with onion domes on Toompea Hill, facing the castle that houses Estonia’s parliament.', 'No photos inside; cover your shoulders.'],
      es: ['Catedral de Alejandro Nevski', 'Una catedral ortodoxa de finales del XIX con cúpulas de cebolla en la colina de Toompea, frente al castillo del Parlamento.', 'No se fotografía dentro; hombros cubiertos.'],
      de: ['Alexander-Newski-Kathedrale', 'Eine orthodoxe Kathedrale vom Ende des 19. Jh. mit Zwiebelkuppeln auf dem Domberg, gegenüber dem Schloss mit dem estnischen Parlament.', 'Drinnen keine Fotos; Schultern bedecken.'],
      fr: ['Cathédrale Alexandre-Nevski', 'Une cathédrale orthodoxe de la fin du XIXe aux bulbes, sur la colline de Toompea, face au château abritant le Parlement.', 'Pas de photos à l’intérieur ; épaules couvertes.'],
      it: ['Cattedrale di Aleksandr Nevskij', 'Una cattedrale ortodossa di fine Ottocento con cupole a cipolla sulla collina di Toompea, di fronte al castello del Parlamento.', 'Niente foto all’interno; spalle coperte.'],
    }, { spot: 'insta', price: free, hours: '08:00–19:00' }),
    P('toompea-castle', 'attraction', 59.4351, 24.7366, VIEW, 4.5, 9100, ['castles', 'history'], {
      ru: ['Замок Тоомпеа и башня Длинный Герман', 'Средневековый замок, где сегодня заседает парламент Эстонии; на башне Длинный Герман каждое утро поднимают национальный флаг.', 'Парламент проводит бесплатные экскурсии по записи; флаг поднимают на рассвете под гимн.'],
      en: ['Toompea Castle and Tall Hermann', 'A medieval castle that now houses Estonia’s parliament; the national flag is raised on Tall Hermann tower every morning.', 'Parliament runs free tours by booking; the flag goes up at sunrise to the anthem.'],
      es: ['Castillo de Toompea y Tall Hermann', 'Un castillo medieval que hoy alberga el Parlamento estonio; cada mañana se iza la bandera en la torre Tall Hermann.', 'El Parlamento ofrece visitas gratis con reserva; la bandera se iza al amanecer con el himno.'],
      de: ['Burg Toompea und Langer Hermann', 'Eine mittelalterliche Burg, heute Sitz des estnischen Parlaments; auf dem Turm Langer Hermann wird jeden Morgen die Flagge gehisst.', 'Das Parlament bietet kostenlose Führungen nach Anmeldung; die Flagge steigt bei Sonnenaufgang zur Hymne.'],
      fr: ['Château de Toompea et Grand Hermann', 'Un château médiéval qui abrite aujourd’hui le Parlement estonien ; le drapeau est hissé chaque matin sur la tour Grand Hermann.', 'Le Parlement propose des visites gratuites sur réservation ; le drapeau monte à l’aube avec l’hymne.'],
      it: ['Castello di Toompea e Torre Hermann', 'Un castello medievale che oggi ospita il Parlamento estone; ogni mattina la bandiera sale sulla torre Tall Hermann.', 'Il Parlamento offre visite gratuite su prenotazione; la bandiera si alza all’alba con l’inno.'],
    }, { price: free }),
    P('st-olafs-church', 'attraction', 59.4417, 24.7477, CITY, 4.6, 15000, ['views', 'history', 'adventure'], {
      ru: ['Церковь Святого Олафа', 'Готическая церковь, в XVI веке бывшая, возможно, самым высоким зданием мира; узкая винтовая лестница ведёт на смотровую площадку.', 'Подъём около 230 ступеней; башня открыта с апреля по октябрь.'],
      en: ['St Olaf’s Church', 'A Gothic church that in the 16th century may have been the world’s tallest building; a narrow spiral stair climbs to a viewing deck.', 'About 230 steps; the tower opens April to October.'],
      es: ['Iglesia de San Olaf', 'Una iglesia gótica que en el siglo XVI pudo ser el edificio más alto del mundo; una escalera de caracol lleva al mirador.', 'Unos 230 escalones; la torre abre de abril a octubre.'],
      de: ['Olaikirche', 'Eine gotische Kirche, im 16. Jh. womöglich das höchste Gebäude der Welt; eine enge Wendeltreppe führt zur Aussichtsplattform.', 'Etwa 230 Stufen; der Turm ist von April bis Oktober geöffnet.'],
      fr: ['Église Saint-Olaf', 'Une église gothique qui fut peut-être au XVIe le plus haut édifice du monde ; un étroit escalier en colimaçon monte au belvédère.', 'Environ 230 marches ; la tour ouvre d’avril à octobre.'],
      it: ['Chiesa di Sant’Olaf', 'Una chiesa gotica che nel Cinquecento fu forse l’edificio più alto del mondo; una stretta scala a chiocciola sale alla terrazza.', 'Circa 230 gradini; la torre apre da aprile a ottobre.'],
    }, { spot: 'insta', hours: '10:00–18:00', address: 'Lai 50' }),
    P('kiek-in-de-kok', 'attraction', 59.4347, 24.74, SQUARE, 4.5, 8900, ['history', 'museums'], {
      ru: ['Башня Кик-ин-де-Кёк и бастионные ходы', 'Пушечная башня XV века, чьё имя значит «загляни в кухню», и подземные бастионные ходы XVII века, служившие бомбоубежищем.', 'Ходы — только с экскурсией по времени; внутри прохладно, возьмите кофту.'],
      en: ['Kiek in de Kök and the Bastion Tunnels', 'A 15th-century cannon tower whose name means “peek into the kitchen”, plus 17th-century bastion tunnels used as air-raid shelters.', 'The tunnels are by timed tour only; it’s cool inside, bring a layer.'],
      es: ['Kiek in de Kök y los túneles del bastión', 'Una torre de cañones del siglo XV cuyo nombre significa “mira en la cocina” y túneles del XVII usados como refugio antiaéreo.', 'Los túneles solo con visita a hora fija; hace fresco, lleva abrigo.'],
      de: ['Kiek in de Kök und Bastionsgänge', 'Ein Kanonenturm aus dem 15. Jh., dessen Name „Guck in die Küche“ bedeutet, und Bastionsgänge aus dem 17. Jh., einst Luftschutzbunker.', 'Die Gänge nur mit Führung zur festen Zeit; drinnen kühl, Jacke mitnehmen.'],
      fr: ['Kiek in de Kök et tunnels des bastions', 'Une tour à canons du XVe dont le nom signifie « jette un œil dans la cuisine », et des tunnels du XVIIe qui servirent d’abris antiaériens.', 'Tunnels en visite horodatée seulement ; frais à l’intérieur, prenez un pull.'],
      it: ['Kiek in de Kök e tunnel dei bastioni', 'Una torre d’artiglieria del Quattrocento il cui nome significa “sbircia in cucina”, e tunnel seicenteschi usati come rifugi antiaerei.', 'I tunnel solo con visita a orario; dentro fa fresco, porta una felpa.'],
    }, { hours: '10:00–18:00', address: 'Komandandi tee 2' }),
    P('fat-margaret', 'attraction', 59.4423, 24.7509, HARBOUR, 4.5, 6800, ['history', 'museums', 'views'], {
      ru: ['Башня Толстая Маргарита', 'Массивная пушечная башня XVI века у Больших морских ворот, сегодня — Морской музей с террасой на крыше.', 'С крыши виден порт и Старый город; билет совмещается с Гидрогаванью.'],
      en: ['Fat Margaret Tower', 'A massive 16th-century cannon tower by the Great Coastal Gate, now the Maritime Museum with a rooftop terrace.', 'The roof overlooks the port and Old Town; combine the ticket with the Seaplane Harbour.'],
      es: ['Torre Margarita la Gorda', 'Una enorme torre artillera del siglo XVI junto a la Gran Puerta Costera, hoy Museo Marítimo con terraza.', 'Desde la azotea se ve el puerto; entrada combinable con el Puerto de Hidroaviones.'],
      de: ['Dicke Margarethe', 'Ein massiver Kanonenturm aus dem 16. Jh. an der Großen Strandpforte, heute Seefahrtsmuseum mit Dachterrasse.', 'Vom Dach Blick auf Hafen und Altstadt; Ticket mit dem Wasserflugzeughafen kombinierbar.'],
      fr: ['Tour Grosse Marguerite', 'Une massive tour à canons du XVIe près de la Grande Porte de mer, aujourd’hui musée maritime avec terrasse.', 'Du toit, vue sur le port et la vieille ville ; billet combiné avec l’hydrobase.'],
      it: ['Torre Margherita la Grassa', 'Una massiccia torre d’artiglieria del Cinquecento presso la Grande Porta del Mare, oggi Museo marittimo con terrazza.', 'Dal tetto si vedono il porto e la città vecchia; biglietto combinabile con l’idroscalo.'],
    }, { hours: '10:00–18:00', address: 'Pikk 70' }),
    P('patkuli-viewpoint', 'attraction', 59.4389, 24.7393, VIEW, 4.7, 14000, ['views', 'photo', 'sunset'], {
      ru: ['Смотровая площадка Паткули', 'Вид с Тоомпеа на крыши Старого города, шпиль Святого Олафа, порт и Балтийское море; к ней ведёт лестница от Шнелли.', 'На закате — лучший свет; отсюда же видно, как уходят паромы в Хельсинки.'],
      en: ['Patkuli Viewing Platform', 'A view from Toompea over the Old Town roofs, St Olaf’s spire, the port and the Baltic; a staircase climbs up from Snelli park.', 'Best light at sunset; you can watch ferries leave for Helsinki.'],
      es: ['Mirador de Patkuli', 'Una vista desde Toompea de los tejados, la aguja de San Olaf, el puerto y el Báltico; una escalera sube desde el parque Snelli.', 'Mejor luz al atardecer; se ven salir los ferris a Helsinki.'],
      de: ['Aussichtsplattform Patkuli', 'Ein Blick vom Domberg über die Dächer der Altstadt, die Olaikirche, den Hafen und die Ostsee; eine Treppe führt vom Snelli-Park hinauf.', 'Bestes Licht bei Sonnenuntergang; man sieht die Fähren nach Helsinki ablegen.'],
      fr: ['Belvédère de Patkuli', 'Une vue depuis Toompea sur les toits de la vieille ville, la flèche de Saint-Olaf, le port et la Baltique ; un escalier monte depuis le parc Snelli.', 'Plus belle lumière au couchant ; on voit partir les ferries pour Helsinki.'],
      it: ['Belvedere di Patkuli', 'Una vista da Toompea sui tetti della città vecchia, la guglia di Sant’Olaf, il porto e il Baltico; una scalinata sale dal parco Snelli.', 'Luce migliore al tramonto; si vedono partire i traghetti per Helsinki.'],
    }, { spot: 'insta', price: free, hours: 'always' }),
    P('kumu', 'attraction', 59.4369, 24.7965, PARK, 4.6, 7800, ['art', 'museums', 'architecture'], {
      ru: ['Художественный музей KUMU', 'Главный музей эстонского искусства в современном здании, встроенном в известняковый откос парка Кадриорг: от XVIII века до советского периода и современности.', 'Совместите с дворцом и парком Кадриорг через дорогу.'],
      en: ['KUMU Art Museum', 'Estonia’s main art museum in a modern building set into a limestone bank in Kadriorg park: from the 18th century through the Soviet era to today.', 'Pair it with Kadriorg Palace and park across the road.'],
      es: ['Museo de Arte KUMU', 'El principal museo de arte estonio, en un edificio moderno encajado en un talud calizo del parque Kadriorg: del siglo XVIII a la era soviética y hoy.', 'Combínalo con el palacio y parque Kadriorg al lado.'],
      de: ['Kunstmuseum KUMU', 'Estlands wichtigstes Kunstmuseum in einem modernen Bau im Kalksteinhang des Kadriorg-Parks: vom 18. Jh. über die Sowjetzeit bis heute.', 'Mit Schloss und Park Kadriorg gegenüber verbinden.'],
      fr: ['Musée d’art KUMU', 'Le grand musée d’art estonien, bâtiment moderne inséré dans un talus calcaire du parc Kadriorg : du XVIIIe à l’époque soviétique et aujourd’hui.', 'À combiner avec le palais et le parc de Kadriorg en face.'],
      it: ['Museo d’arte KUMU', 'Il principale museo d’arte estone, in un edificio moderno incastonato in un pendio calcareo del parco Kadriorg: dal Settecento all’epoca sovietica a oggi.', 'Abbinalo al palazzo e al parco di Kadriorg di fronte.'],
    }, { hours: '10:00–18:00', address: 'A. Weizenbergi 34' }),
    P('linnahall', 'attraction', 59.446, 24.755, HARBOUR, 4.3, 3600, ['architecture', 'history', 'photo'], {
      ru: ['Линнахалл', 'Огромный бетонный концертный зал, построенный к Олимпиаде-80 для парусной регаты; сегодня заброшен, но по его крыше-лестницам гуляют к морю.', 'Здание закрыто, поднимайтесь только по открытым наружным лестницам; закат над заливом — отличный кадр.'],
      en: ['Linnahall', 'A vast concrete concert hall built for the 1980 Olympic sailing regatta; abandoned today, but people stroll its rooftop stairs to the sea.', 'The building is closed — use only the open outdoor stairs; sunsets over the bay make great photos.'],
      es: ['Linnahall', 'Una enorme sala de conciertos de hormigón construida para la regata olímpica de 1980; hoy abandonada, se pasea por sus escaleras hasta el mar.', 'El edificio está cerrado: usa solo las escaleras exteriores; atardeceres preciosos sobre la bahía.'],
      de: ['Linnahall', 'Eine riesige Betonkonzerthalle für die olympische Segelregatta 1980; heute verlassen, doch man spaziert über die Dachtreppen zum Meer.', 'Das Gebäude ist geschlossen – nur die offenen Außentreppen nutzen; schöne Sonnenuntergänge über der Bucht.'],
      fr: ['Linnahall', 'Une immense salle de concert en béton construite pour la régate olympique de 1980 ; abandonnée, mais on se promène sur ses escaliers-toits jusqu’à la mer.', 'Le bâtiment est fermé : seulement les escaliers extérieurs ouverts ; beaux couchers de soleil sur la baie.'],
      it: ['Linnahall', 'Un’enorme sala concerti in cemento costruita per la regata olimpica del 1980; oggi abbandonata, si passeggia sulle sue scalinate fino al mare.', 'L’edificio è chiuso: usa solo le scale esterne aperte; tramonti splendidi sulla baia.'],
    }, { spot: 'hidden', price: free }),
    P('open-air-museum', 'attraction', 59.4325, 24.638, PARK, 4.7, 12000, ['history', 'museums', 'nature'], {
      ru: ['Эстонский музей под открытым небом (Рокка-аль-Маре)', 'Деревни XVIII–XX веков в сосновом лесу у моря: мельницы, хутора, деревянная церковь и корчма с народной кухней.', 'Возьмите напрокат велосипед у входа — территория большая.'],
      en: ['Estonian Open Air Museum (Rocca al Mare)', 'Villages from the 18th–20th centuries in a seaside pine forest: windmills, farmsteads, a wooden church and an inn with folk food.', 'Rent a bike at the entrance — the grounds are large.'],
      es: ['Museo al Aire Libre de Estonia (Rocca al Mare)', 'Aldeas de los siglos XVIII–XX en un pinar junto al mar: molinos, granjas, una iglesia de madera y una taberna con comida popular.', 'Alquila bici en la entrada: el recinto es grande.'],
      de: ['Estnisches Freilichtmuseum (Rocca al Mare)', 'Dörfer aus dem 18.–20. Jh. in einem Kiefernwald am Meer: Windmühlen, Höfe, eine Holzkirche und eine Schenke mit Bauernkost.', 'Am Eingang ein Rad leihen – das Gelände ist groß.'],
      fr: ['Musée en plein air d’Estonie (Rocca al Mare)', 'Des villages des XVIIIe–XXe dans une pinède au bord de la mer : moulins, fermes, église en bois et auberge à la cuisine populaire.', 'Louez un vélo à l’entrée, le site est vaste.'],
      it: ['Museo all’aperto estone (Rocca al Mare)', 'Villaggi del XVIII–XX secolo in una pineta sul mare: mulini, fattorie, una chiesa di legno e una locanda con cucina popolare.', 'Noleggia una bici all’ingresso: l’area è grande.'],
    }, { hours: '10:00–18:00', address: 'Vabaõhumuuseumi tee 12' }),
    P('lahemaa', 'nature', 59.57, 25.8, PARK, 4.8, 9600, ['nature', 'hiking', 'wildlife'], {
      ru: ['Национальный парк Лахемаа', 'Старейший нацпарк Эстонии в часе езды: деревянные тропы через верховое болото Виру, валуны на побережье и усадьба Палмсе.', 'Без машины удобнее с однодневной экскурсией; тропа по болоту Виру — около 3,5 км.'],
      en: ['Lahemaa National Park', 'Estonia’s oldest national park an hour away: boardwalks over the Viru bog, coastal boulders and Palmse manor.', 'Without a car a day tour is easiest; the Viru bog trail is about 3.5 km.'],
      es: ['Parque Nacional de Lahemaa', 'El parque nacional más antiguo de Estonia, a una hora: pasarelas sobre la turbera de Viru, rocas en la costa y la mansión de Palmse.', 'Sin coche, mejor una excursión; el sendero de Viru tiene unos 3,5 km.'],
      de: ['Nationalpark Lahemaa', 'Estlands ältester Nationalpark, eine Stunde entfernt: Holzstege durchs Viru-Hochmoor, Findlinge an der Küste und Gut Palmse.', 'Ohne Auto am einfachsten mit Tagestour; der Viru-Moorpfad ist etwa 3,5 km lang.'],
      fr: ['Parc national de Lahemaa', 'Le plus ancien parc national d’Estonie à une heure : caillebotis sur la tourbière de Viru, blocs erratiques sur la côte et manoir de Palmse.', 'Sans voiture, une excursion d’une journée est plus simple ; le sentier de Viru fait environ 3,5 km.'],
      it: ['Parco nazionale di Lahemaa', 'Il parco nazionale più antico dell’Estonia a un’ora: passerelle sulla torbiera di Viru, massi erratici sulla costa e il maniero di Palmse.', 'Senz’auto conviene una gita organizzata; il sentiero di Viru è di circa 3,5 km.'],
    }, { spot: 'insta', price: free }),

    P('180-degrees', 'food', 59.452, 24.735, HARBOUR, 4.8, 900, ['food', 'luxury'], {
      ru: ['180° by Matthias Diether', 'Ресторан немецкого шефа Маттиаса Дитера с круговой открытой кухней в квартале Ноблесснер; единственные в Эстонии две звезды MICHELIN (гид 2026).', 'Сядьте у стойки вокруг кухни — видно каждое движение поваров.'],
      en: ['180° by Matthias Diether', 'German chef Matthias Diether’s restaurant with a wraparound open kitchen in the Noblessner quarter; Estonia’s only two MICHELIN stars (2026 guide).', 'Sit at the counter around the kitchen to watch every move.'],
      es: ['180° by Matthias Diether', 'El restaurante del chef alemán Matthias Diether con cocina abierta en forma de herradura en el barrio de Noblessner; las únicas dos estrellas MICHELIN de Estonia (guía 2026).', 'Siéntate en la barra alrededor de la cocina.'],
      de: ['180° by Matthias Diether', 'Das Restaurant des deutschen Kochs Matthias Diether mit offener Rundküche im Viertel Noblessner; Estlands einzige zwei MICHELIN-Sterne (Guide 2026).', 'An der Theke rund um die Küche sitzen und jeden Handgriff sehen.'],
      fr: ['180° by Matthias Diether', 'Le restaurant du chef allemand Matthias Diether, cuisine ouverte en arc de cercle dans le quartier de Noblessner ; les seules deux étoiles MICHELIN d’Estonie (guide 2026).', 'Asseyez-vous au comptoir autour de la cuisine.'],
      it: ['180° by Matthias Diether', 'Il ristorante dello chef tedesco Matthias Diether con cucina aperta a ferro di cavallo nel quartiere Noblessner; le uniche due stelle MICHELIN dell’Estonia (guida 2026).', 'Siediti al bancone intorno alla cucina.'],
    }, { price: level(3), michelin: { award: 'star2', year: 2026 }, menu: [
      ['Tasting menu', undefined, 'дегустационный сет|tasting menu|menú degustación|Degustationsmenü|menu dégustation|menù degustazione'],
      ['Wine pairing', undefined, 'винное сопровождение|wine pairing|maridaje de vinos|Weinbegleitung|accord mets-vins|abbinamento vini'],
    ] }),
    P('noa-chefs-hall', 'food', 59.478, 24.822, HARBOUR, 4.7, 1500, ['food', 'luxury', 'views'], {
      ru: ['NOA Chef’s Hall', 'Ресторан на берегу залива с видом на Таллин через воду: дегустационный сет у открытой кухни; одна звезда MICHELIN (гид Эстонии 2026).', 'В соседнем зале — более доступный ресторан NOA с тем же видом.'],
      en: ['NOA Chef’s Hall', 'A bayside restaurant looking across the water to Tallinn: a tasting menu by the open kitchen; one MICHELIN star (Estonia guide 2026).', 'Next door, the more affordable NOA restaurant has the same view.'],
      es: ['NOA Chef’s Hall', 'Un restaurante frente a la bahía con vista a Tallin: menú degustación junto a la cocina abierta; una estrella MICHELIN (guía Estonia 2026).', 'Al lado, el restaurante NOA, más asequible, con la misma vista.'],
      de: ['NOA Chef’s Hall', 'Ein Restaurant an der Bucht mit Blick übers Wasser auf Tallinn: Degustationsmenü an der offenen Küche; ein MICHELIN-Stern (Guide Estland 2026).', 'Nebenan das günstigere NOA mit derselben Aussicht.'],
      fr: ['NOA Chef’s Hall', 'Un restaurant au bord de la baie, vue sur Tallinn par-delà l’eau : menu dégustation près de la cuisine ouverte ; une étoile MICHELIN (guide Estonie 2026).', 'À côté, le restaurant NOA, plus abordable, a la même vue.'],
      it: ['NOA Chef’s Hall', 'Un ristorante sulla baia con vista su Tallinn al di là dell’acqua: menù degustazione vicino alla cucina aperta; una stella MICHELIN (guida Estonia 2026).', 'Accanto il ristorante NOA, più accessibile, con la stessa vista.'],
    }, { price: level(3), michelin: { award: 'star1', year: 2026 }, address: 'Ranna tee 3', menu: [
      ['Tasting menu', undefined, 'дегустационный сет|tasting menu|menú degustación|Degustationsmenü|menu dégustation|menù degustazione'],
      ['Wine pairing', undefined, 'винное сопровождение|wine pairing|maridaje de vinos|Weinbegleitung|accord mets-vins|abbinamento vini'],
    ] }),
    P('fotografiska-restaurant', 'food', 59.44, 24.729, KALAMAJA, 4.6, 2900, ['food', 'views'], {
      ru: ['Ресторан Fotografiska', 'Ресторан на крыше центра фотографии в Теллискиви: кухня «без отходов» из эстонских продуктов; Bib Gourmand и зелёная звезда MICHELIN (гид 2026).', 'Совместите с выставкой внизу и прогулкой по Теллискиви.'],
      en: ['Fotografiska Restaurant', 'A rooftop restaurant atop the photography centre in Telliskivi: zero-waste cooking from Estonian produce; Bib Gourmand and MICHELIN Green Star (2026 guide).', 'Pair it with the exhibition below and a Telliskivi stroll.'],
      es: ['Restaurante Fotografiska', 'Un restaurante en la azotea del centro de fotografía en Telliskivi: cocina sin desperdicio con producto estonio; Bib Gourmand y estrella verde MICHELIN (guía 2026).', 'Combínalo con la exposición y un paseo por Telliskivi.'],
      de: ['Restaurant Fotografiska', 'Ein Dachrestaurant auf dem Fotografiezentrum in Telliskivi: Zero-Waste-Küche aus estnischen Produkten; Bib Gourmand und Grüner MICHELIN-Stern (Guide 2026).', 'Mit der Ausstellung darunter und einem Telliskivi-Bummel verbinden.'],
      fr: ['Restaurant Fotografiska', 'Un restaurant sur le toit du centre de photographie de Telliskivi : cuisine zéro déchet aux produits estoniens ; Bib Gourmand et étoile verte MICHELIN (guide 2026).', 'À combiner avec l’exposition et une balade à Telliskivi.'],
      it: ['Ristorante Fotografiska', 'Un ristorante sul tetto del centro di fotografia a Telliskivi: cucina a zero sprechi con prodotti estoni; Bib Gourmand e stella verde MICHELIN (guida 2026).', 'Abbinalo alla mostra e a una passeggiata a Telliskivi.'],
    }, { price: level(2), michelin: { award: 'bib', year: 2026 }, address: 'Telliskivi 60a/8', menu: [
      ['Seasonal menu', undefined, 'сезонное меню без отходов|zero-waste seasonal menu|menú de temporada sin desperdicio|saisonales Zero-Waste-Menü|menu de saison zéro déchet|menù stagionale a zero sprechi'],
      ['Estonian bread', undefined, 'эстонский ржаной хлеб|Estonian rye bread|pan de centeno estonio|estnisches Roggenbrot|pain de seigle estonien|pane di segale estone'],
    ] }),
    P('lore-bistroo', 'food', 59.4518, 24.7368, HARBOUR, 4.6, 2300, ['food'], {
      ru: ['Lore Bistroo', 'Бистро в квартале Ноблесснер у верфи подводных лодок: сезонная скандинавская кухня, открытая кухня и терраса у моря; Bib Gourmand (гид Эстонии 2026).', 'Хорошо на обед или ранний ужин с видом на яхты.'],
      en: ['Lore Bistroo', 'A bistro in the Noblessner quarter by the old submarine yard: seasonal Nordic cooking, an open kitchen and a sea terrace; Bib Gourmand (Estonia guide 2026).', 'Great for lunch or an early dinner by the yachts.'],
      es: ['Lore Bistroo', 'Un bistró en el barrio de Noblessner junto al antiguo astillero de submarinos: cocina nórdica de temporada, cocina abierta y terraza al mar; Bib Gourmand (guía Estonia 2026).', 'Ideal para comer o cenar temprano junto a los yates.'],
      de: ['Lore Bistroo', 'Ein Bistro im Viertel Noblessner an der alten U-Boot-Werft: saisonale nordische Küche, offene Küche und Meeresterrasse; Bib Gourmand (Guide Estland 2026).', 'Gut zum Mittag- oder frühen Abendessen bei den Jachten.'],
      fr: ['Lore Bistroo', 'Un bistrot du quartier de Noblessner près de l’ancien chantier de sous-marins : cuisine nordique de saison, cuisine ouverte et terrasse sur la mer ; Bib Gourmand (guide Estonie 2026).', 'Parfait pour déjeuner ou dîner tôt face aux yachts.'],
      it: ['Lore Bistroo', 'Un bistrot nel quartiere Noblessner vicino all’ex cantiere dei sottomarini: cucina nordica di stagione, cucina aperta e terrazza sul mare; Bib Gourmand (guida Estonia 2026).', 'Ottimo per pranzo o cena presto tra gli yacht.'],
    }, { price: level(2), michelin: { award: 'bib', year: 2026 }, menu: [
      ['Seasonal plates', undefined, 'сезонные блюда|seasonal plates|platos de temporada|saisonale Gerichte|assiettes de saison|piatti di stagione'],
      ['Baltic fish', undefined, 'балтийская рыба|Baltic fish|pescado del Báltico|Ostseefisch|poisson de la Baltique|pesce del Baltico'],
    ] }),
    P('leib', 'food', 59.441, 24.748, SQUARE, 4.6, 3300, ['food', 'gardens'], {
      ru: ['Leib Resto ja Aed', 'Ресторан с садом в Старом городе, названный в честь эстонского ржаного хлеба «лейб»: местная рыба, мясо и хлеб собственной выпечки.', 'Летом садитесь в сад — тихо даже в центре.'],
      en: ['Leib Resto ja Aed', 'An Old Town restaurant with a garden, named after Estonian rye bread “leib”: local fish, meat and house-baked bread.', 'In summer sit in the garden — quiet even in the centre.'],
      es: ['Leib Resto ja Aed', 'Un restaurante con jardín en el casco antiguo, llamado como el pan de centeno estonio “leib”: pescado y carne locales y pan propio.', 'En verano siéntate en el jardín: tranquilo aun en el centro.'],
      de: ['Leib Resto ja Aed', 'Ein Altstadtrestaurant mit Garten, benannt nach dem estnischen Roggenbrot „Leib“: lokaler Fisch, Fleisch und hausgebackenes Brot.', 'Im Sommer im Garten sitzen – ruhig selbst im Zentrum.'],
      fr: ['Leib Resto ja Aed', 'Un restaurant avec jardin dans la vieille ville, nommé d’après le pain de seigle estonien « leib » : poisson et viande locaux, pain maison.', 'L’été, installez-vous au jardin, calme même au centre.'],
      it: ['Leib Resto ja Aed', 'Un ristorante con giardino nella città vecchia, chiamato come il pane di segale estone “leib”: pesce e carne locali e pane fatto in casa.', 'D’estate siediti in giardino: tranquillo anche in centro.'],
    }, { price: level(2), address: 'Uus 31', menu: [
      ['Leib with butter', undefined, 'домашний ржаной хлеб с маслом|house rye bread with butter|pan de centeno con mantequilla|Roggenbrot mit Butter|pain de seigle et beurre|pane di segale con burro'],
      ['Baltic herring', undefined, 'балтийская салака|Baltic herring|arenque del Báltico|Ostseehering|hareng de la Baltique|aringa del Baltico'],
    ] }),
    P('kompressor', 'food', 59.4365, 24.745, SQUARE, 4.4, 6900, ['food', 'streetfood'], {
      ru: ['Kompressor', 'Студенческая блинная в Старом городе с огромными сытными блинами и низкими ценами.', 'Один солёный блин легко заменит обед; столы общие.'],
      en: ['Kompressor', 'A student pancake bar in the Old Town with huge, filling pancakes at low prices.', 'One savoury pancake easily replaces lunch; tables are shared.'],
      es: ['Kompressor', 'Un bar de crepes estudiantil en el casco antiguo con enormes crepes contundentes a precios bajos.', 'Una crepe salada sustituye una comida; mesas compartidas.'],
      de: ['Kompressor', 'Eine Studenten-Pfannkuchenbar in der Altstadt mit riesigen, sättigenden Pfannkuchen zu kleinen Preisen.', 'Ein herzhafter Pfannkuchen ersetzt locker das Mittagessen; Gemeinschaftstische.'],
      fr: ['Kompressor', 'Un bar à crêpes étudiant dans la vieille ville, crêpes énormes et copieuses à petits prix.', 'Une crêpe salée remplace un déjeuner ; tables partagées.'],
      it: ['Kompressor', 'Un bar di crêpes studentesco nella città vecchia con crêpes enormi e sazianti a prezzi bassi.', 'Una crêpe salata sostituisce il pranzo; tavoli condivisi.'],
    }, { price: level(1), address: 'Rataskaevu 3', menu: [
      ['Savoury pancake', undefined, 'солёный блин с ветчиной и сыром|savoury pancake with ham and cheese|crepe salada de jamón y queso|herzhafter Pfannkuchen mit Schinken und Käse|crêpe jambon-fromage|crêpe salata prosciutto e formaggio'],
      ['Sweet pancake', undefined, 'сладкий блин|sweet pancake|crepe dulce|süßer Pfannkuchen|crêpe sucrée|crêpe dolce'],
    ] }),
    P('iii-draakon', 'food', 59.4371, 24.7453, SQUARE, 4.5, 7600, ['food', 'history'], {
      ru: ['III Draakon', 'Средневековая харчевня в здании Ратуши при свечах: суп из лося из глиняной миски, пирожки и пиво — без ложек и электричества.', 'Суп пьют прямо из миски; расплачиваются по старинке у стойки.'],
      en: ['III Draakon', 'A candlelit medieval tavern inside the Town Hall: elk soup from a clay bowl, pies and beer — no spoons, no electricity.', 'You drink the soup straight from the bowl; pay at the counter the old way.'],
      es: ['III Draakon', 'Una taberna medieval a la luz de las velas en el Ayuntamiento: sopa de alce en cuenco de barro, empanadas y cerveza, sin cucharas ni electricidad.', 'La sopa se bebe del cuenco; se paga en la barra.'],
      de: ['III Draakon', 'Eine mittelalterliche Kerzenschenke im Rathaus: Elchsuppe aus der Tonschale, Pasteten und Bier – ohne Löffel und Strom.', 'Die Suppe trinkt man direkt aus der Schale; gezahlt wird am Tresen.'],
      fr: ['III Draakon', 'Une taverne médiévale aux chandelles dans l’hôtel de ville : soupe d’élan en bol de terre, pâtés et bière, sans cuillère ni électricité.', 'On boit la soupe à même le bol ; on paie au comptoir.'],
      it: ['III Draakon', 'Una taverna medievale a lume di candela nel Municipio: zuppa d’alce nella ciotola di terracotta, pasticci e birra, senza cucchiai né elettricità.', 'La zuppa si beve dalla ciotola; si paga al banco.'],
    }, { price: level(1), address: 'Raekoja plats 1', menu: [
      ['Elk soup', undefined, 'суп из лосятины|elk soup|sopa de alce|Elchsuppe|soupe d’élan|zuppa d’alce'],
      ['Meat pie', undefined, 'пирожок с мясом|meat pie|empanada de carne|Fleischpastete|pâté à la viande|pasticcio di carne'],
    ] }),
    P('kohvik-komeet', 'food', 59.437, 24.75, CITY, 4.5, 4900, ['food', 'views'], {
      ru: ['Kohvik Komeet', 'Кафе-кондитерская на верхнем этаже центра «Солярис» с огромными окнами на Старый город и большим выбором тортов.', 'Возьмите торт и кофе у окна — вид на шпили Старого города.'],
      en: ['Kohvik Komeet', 'A café-patisserie on the top floor of the Solaris centre with huge windows over the Old Town and a big cake selection.', 'Have cake and coffee by the window — a view of the Old Town spires.'],
      es: ['Kohvik Komeet', 'Un café-pastelería en la última planta del centro Solaris, con ventanales al casco antiguo y muchas tartas.', 'Tarta y café junto a la ventana: vistas a las agujas del casco viejo.'],
      de: ['Kohvik Komeet', 'Ein Café mit Konditorei im obersten Stock des Solaris-Zentrums, mit großen Fenstern zur Altstadt und vielen Torten.', 'Kuchen und Kaffee am Fenster – Blick auf die Altstadttürme.'],
      fr: ['Kohvik Komeet', 'Un café-pâtisserie au dernier étage du centre Solaris, grandes baies sur la vieille ville et large choix de gâteaux.', 'Gâteau et café à la fenêtre : vue sur les flèches de la vieille ville.'],
      it: ['Kohvik Komeet', 'Un caffè-pasticceria all’ultimo piano del centro Solaris con grandi vetrate sulla città vecchia e tante torte.', 'Torta e caffè alla finestra: vista sulle guglie della città vecchia.'],
    }, { price: level(1), address: 'Estonia pst 9', menu: [
      ['Cake of the day', undefined, 'торт дня|cake of the day|tarta del día|Kuchen des Tages|gâteau du jour|torta del giorno'],
      ['Kringel', undefined, 'эстонский крендель с корицей|Estonian cinnamon kringle|kringel estonio de canela|estnischer Zimtkringel|kringle estonien à la cannelle|kringle estone alla cannella'],
    ] }),
    P('kaerajaan', 'food', 59.4374, 24.7452, SQUARE, 4.5, 3800, ['food'], {
      ru: ['Kaerajaan', 'Ресторан современной эстонской кухни на Ратушной площади: салака, оленина, ржаной хлеб и местные сыры в стильном интерьере.', 'Закажите сет эстонских закусок, чтобы попробовать всё понемногу.'],
      en: ['Kaerajaan', 'A modern Estonian restaurant on Town Hall Square: Baltic herring, venison, rye bread and local cheeses in a stylish room.', 'Order the Estonian starter platter to taste a bit of everything.'],
      es: ['Kaerajaan', 'Un restaurante de cocina estonia moderna en la plaza del Ayuntamiento: arenque, venado, pan de centeno y quesos locales.', 'Pide la tabla de entrantes estonios para probar de todo.'],
      de: ['Kaerajaan', 'Ein modernes estnisches Restaurant am Rathausplatz: Ostseehering, Hirsch, Roggenbrot und lokale Käse in stilvollem Ambiente.', 'Die estnische Vorspeisenplatte bestellen, um alles zu probieren.'],
      fr: ['Kaerajaan', 'Un restaurant de cuisine estonienne moderne sur la place de l’Hôtel-de-Ville : hareng, cerf, pain de seigle et fromages locaux.', 'Prenez l’assiette d’entrées estoniennes pour tout goûter.'],
      it: ['Kaerajaan', 'Un ristorante di cucina estone moderna in piazza del Municipio: aringa, cervo, pane di segale e formaggi locali.', 'Ordina il tagliere di antipasti estoni per assaggiare un po’ di tutto.'],
    }, { price: level(2), address: 'Raekoja plats 17', menu: [
      ['Estonian starter platter', undefined, 'ассорти эстонских закусок|Estonian starter platter|tabla de entrantes estonios|estnische Vorspeisenplatte|assiette d’entrées estoniennes|tagliere di antipasti estoni'],
      ['Venison', undefined, 'оленина|venison|venado|Hirsch|cerf|cervo'],
    ] }),
    P('boheem', 'food', 59.446, 24.735, KALAMAJA, 4.6, 2700, ['food', 'nomads'], {
      ru: ['Boheem', 'Уютное кафе в деревянном доме района Каламая: завтраки весь день, домашние супы и выпечка.', 'Хорошая точка старта для прогулки по Каламае и Теллискиви.'],
      en: ['Boheem', 'A cosy café in a wooden Kalamaja house: all-day breakfasts, homemade soups and bakes.', 'A good starting point for a stroll through Kalamaja and Telliskivi.'],
      es: ['Boheem', 'Un café acogedor en una casa de madera de Kalamaja: desayunos todo el día, sopas caseras y bollería.', 'Buen punto de partida para pasear por Kalamaja y Telliskivi.'],
      de: ['Boheem', 'Ein gemütliches Café in einem Holzhaus in Kalamaja: Frühstück den ganzen Tag, hausgemachte Suppen und Gebäck.', 'Guter Start für einen Bummel durch Kalamaja und Telliskivi.'],
      fr: ['Boheem', 'Un café chaleureux dans une maison en bois de Kalamaja : petits-déjeuners toute la journée, soupes et pâtisseries maison.', 'Bon point de départ pour flâner à Kalamaja et Telliskivi.'],
      it: ['Boheem', 'Un caffè accogliente in una casa di legno a Kalamaja: colazioni tutto il giorno, zuppe e dolci fatti in casa.', 'Ottimo punto di partenza per passeggiare tra Kalamaja e Telliskivi.'],
    }, { price: level(1), address: 'Kopli 18', menu: [
      ['All-day breakfast', undefined, 'завтрак весь день|all-day breakfast|desayuno todo el día|Frühstück den ganzen Tag|petit-déjeuner toute la journée|colazione tutto il giorno'],
      ['Soup of the day', undefined, 'суп дня|soup of the day|sopa del día|Tagessuppe|soupe du jour|zuppa del giorno'],
    ] }),
  ],
  routes: [
    D(['st-olafs-church', '=tallinn-town-hall-square', 'iii-draakon', '=tallinn-st-catherines-passage', 'kiek-in-de-kok', 'alexander-nevsky-cathedral', '=tallinn-kohtuotsa-viewpoint', 'patkuli-viewpoint', 'kaerajaan'],
      'Старый город, Ратуша и холм Тоомпеа|The Old Town, Town Hall and Toompea|El casco antiguo, el Ayuntamiento y Toompea|Altstadt, Rathaus und Domberg|La vieille ville, l’hôtel de ville et Toompea|La città vecchia, il Municipio e Toompea'),
    D(['boheem', '=tallinn-telliskivi-creative-city', 'fotografiska-restaurant', '=tallinn-kalamaja', '=tallinn-seaplane-harbour', 'linnahall', 'fat-margaret', '180-degrees'],
      'Каламая, Теллискиви и морская гавань|Kalamaja, Telliskivi and the harbour|Kalamaja, Telliskivi y el puerto|Kalamaja, Telliskivi und der Hafen|Kalamaja, Telliskivi et le port|Kalamaja, Telliskivi e il porto'),
    D(['open-air-museum', 'leib', 'kohvik-komeet', '=tallinn-kadriorg', 'kumu', 'noa-chefs-hall'],
      'Музей под открытым небом, Кадриорг и ужин у моря|Open Air Museum, Kadriorg and dinner by the sea|Museo al aire libre, Kadriorg y cena junto al mar|Freilichtmuseum, Kadriorg und Dinner am Meer|Musée en plein air, Kadriorg et dîner face à la mer|Museo all’aperto, Kadriorg e cena sul mare'),
  ],
};

export default pack;
