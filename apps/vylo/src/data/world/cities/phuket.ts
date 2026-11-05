import type { CityPack } from '../types';
import { fixed, free, level, makeDay, makePlace } from './_kit.ts';

const P = makePlace('phuket');
const D = makeDay('phuket');
const CITY = 'odpWSKMwql4';
const BEACH = 'naJkiC4EKn4';
const BEACH2 = 'v6qTdfXEnO4';
const CAPE = 'Y5AnRI8PoDI';
const FOOD = 'CF33GT7iM9c';
const TEMPLE = 'ybvbB-GLaXo';

const pack: CityPack = {
  country: 'TH',
  city: 'phuket',
  places: [
    P('thalang-road', 'attraction', 7.8851, 98.388, CITY, 4.5, 14700, ['oldtown', 'architecture', 'photo'], {
      ru: ['Старый город: улица Таланг', 'Сино-португальские шопхаусы пастельных цветов, кофейни и лавки — сердце старого Пхукет-тауна оловянных магнатов.', 'Гуляйте до 10 утра или после 17:00, когда не так жарко; в воскресенье вечером здесь рынок Lard Yai.'],
      en: ['Old Town: Thalang Road', 'Pastel Sino-Portuguese shophouses, coffee shops and stores — the heart of tin-boom Phuket Town.', 'Walk before 10 am or after 5 pm; on Sunday evenings the Lard Yai market takes over.'],
      es: ['Casco antiguo: Thalang Road', 'Shophouses sino-portuguesas en tonos pastel, cafés y tiendas: el corazón del Phuket Town del boom del estaño.', 'Pasea antes de las 10 o después de las 17; el domingo por la tarde está el mercado Lard Yai.'],
      de: ['Altstadt: Thalang Road', 'Pastellfarbene sino-portugiesische Shophouses, Cafés und Läden – das Herz des Zinn-Booms von Phuket Town.', 'Vor 10 Uhr oder nach 17 Uhr bummeln; sonntagabends gibt es den Lard-Yai-Markt.'],
      fr: ['Vieille ville : Thalang Road', 'Shophouses sino-portugaises pastel, cafés et boutiques : le cœur du Phuket Town de l’étain.', 'Flânez avant 10 h ou après 17 h ; le dimanche soir, place au marché Lard Yai.'],
      it: ['Città vecchia: Thalang Road', 'Shophouse sino-portoghesi color pastello, caffè e negozi: il cuore della Phuket Town dello stagno.', 'Passeggia prima delle 10 o dopo le 17; la domenica sera c’è il mercato Lard Yai.'],
    }, { spot: 'insta', price: free }),
    P('peranakannitat', 'attraction', 7.8848, 98.3893, CITY, 4.5, 2900, ['museums', 'culture', 'history'], {
      ru: ['Музей Peranakannitat', 'Музей культуры баба-перанакан Пхукета в здании старого банка: свадебные наряды, украшения и история оловянных рудников.', 'Короткая, но очень атмосферная экспозиция — хватит 40 минут.'],
      en: ['Peranakannitat Museum', 'A museum of Phuket’s Baba-Peranakan culture in an old bank building: wedding dress, jewellery and the tin-mining story.', 'Short but atmospheric — 40 minutes is enough.'],
      es: ['Museo Peranakannitat', 'Un museo de la cultura baba-peranakan de Phuket en un antiguo banco: trajes de boda, joyas y la historia del estaño.', 'Breve pero con mucho ambiente: bastan 40 minutos.'],
      de: ['Peranakannitat-Museum', 'Ein Museum der Baba-Peranakan-Kultur Phukets in einem alten Bankgebäude: Hochzeitskleidung, Schmuck und Zinnbergbau.', 'Kurz, aber stimmungsvoll – 40 Minuten reichen.'],
      fr: ['Musée Peranakannitat', 'Un musée de la culture baba-peranakan de Phuket dans une ancienne banque : costumes de mariage, bijoux et histoire de l’étain.', 'Court mais plein d’atmosphère : 40 minutes suffisent.'],
      it: ['Museo Peranakannitat', 'Un museo della cultura baba-peranakan di Phuket in una vecchia banca: abiti nuziali, gioielli e la storia dello stagno.', 'Breve ma suggestivo: bastano 40 minuti.'],
    }, { spot: 'hidden', address: 'Phang Nga Rd, Phuket Town' }),
    P('khao-rang', 'attraction', 7.8932, 98.379, CITY, 4.5, 9700, ['views', 'sunset'], {
      ru: ['Смотровая Кхао Ранг', 'Холм над Пхукет-тауном с видом на город, залив Чалонг и острова; на вершине — кафе и тенистые террасы.', 'Подъезжайте на такси к закату и оставайтесь на ужин с видом.'],
      en: ['Khao Rang Viewpoint', 'A hill above Phuket Town looking over the city, Chalong Bay and islands, with cafés and shady terraces on top.', 'Take a taxi up for sunset and stay for dinner with a view.'],
      es: ['Mirador Khao Rang', 'Una colina sobre Phuket Town con vistas a la ciudad, la bahía de Chalong y las islas; arriba hay cafés y terrazas a la sombra.', 'Sube en taxi al atardecer y quédate a cenar con vistas.'],
      de: ['Aussichtspunkt Khao Rang', 'Ein Hügel über Phuket Town mit Blick auf Stadt, Chalong Bay und Inseln, oben Cafés und schattige Terrassen.', 'Zum Sonnenuntergang per Taxi hinauf und zum Essen mit Aussicht bleiben.'],
      fr: ['Point de vue de Khao Rang', 'Une colline au-dessus de Phuket Town avec vue sur la ville, la baie de Chalong et les îles ; cafés et terrasses ombragées au sommet.', 'Montez en taxi au coucher du soleil et restez dîner avec vue.'],
      it: ['Belvedere di Khao Rang', 'Una collina sopra Phuket Town con vista sulla città, la baia di Chalong e le isole; in cima caffè e terrazze ombreggiate.', 'Sali in taxi al tramonto e resta a cena con vista.'],
    }, { price: free, hours: 'always' }),
    P('kata-beach', 'nature', 7.8206, 98.2981, BEACH, 4.6, 21300, ['beaches', 'surf'], {
      ru: ['Пляж Ката', 'Широкий золотой пляж в бухте с островом Ко Пу: спокойнее Патонга, а в сезон дождей здесь учатся сёрфингу.', 'С ноября по апрель вода спокойная; с мая по октябрь — сёрф-школы и красные флаги.'],
      en: ['Kata Beach', 'A broad golden beach in a bay with Koh Pu island: calmer than Patong, and a surf-school spot in the rainy season.', 'November–April the sea is calm; May–October brings surf schools and red flags.'],
      es: ['Playa de Kata', 'Una amplia playa dorada en una bahía con la isla Koh Pu: más tranquila que Patong y con escuelas de surf en la época de lluvias.', 'De noviembre a abril el mar está tranquilo; de mayo a octubre, surf y banderas rojas.'],
      de: ['Kata Beach', 'Ein breiter goldener Strand in einer Bucht mit der Insel Koh Pu: ruhiger als Patong, in der Regenzeit Surfschulen.', 'November–April ist das Meer ruhig; Mai–Oktober Surfschulen und rote Flaggen.'],
      fr: ['Plage de Kata', 'Une large plage dorée dans une baie face à l’île Koh Pu : plus calme que Patong, écoles de surf à la saison des pluies.', 'De novembre à avril, mer calme ; de mai à octobre, surf et drapeaux rouges.'],
      it: ['Spiaggia di Kata', 'Un’ampia spiaggia dorata in una baia con l’isola di Koh Pu: più tranquilla di Patong, con scuole di surf nella stagione delle piogge.', 'Da novembre ad aprile mare calmo; da maggio a ottobre surf e bandiere rosse.'],
    }, { price: free, hours: 'always' }),
    P('patong-beach', 'nature', 7.8961, 98.2967, BEACH2, 4.2, 48900, ['beaches', 'nightlife'], {
      ru: ['Патонг и Бангла-роуд', 'Самый оживлённый пляж острова: водные развлечения днём, а вечером пешеходная Бангла-роуд с барами и неоном.', 'Если хотите тишины — купайтесь на соседних Карон или Ката, а сюда приезжайте вечером.'],
      en: ['Patong Beach and Bangla Road', 'The island’s busiest beach: water sports by day and the neon-lit Bangla Road bar street at night.', 'For quiet swimming use Karon or Kata and come here in the evening.'],
      es: ['Patong y Bangla Road', 'La playa más animada de la isla: deportes acuáticos de día y la calle de bares Bangla Road con neones de noche.', 'Para bañarte tranquilo ve a Karon o Kata y ven aquí por la noche.'],
      de: ['Patong Beach und Bangla Road', 'Der belebteste Strand der Insel: tagsüber Wassersport, abends die neonbeleuchtete Barstraße Bangla Road.', 'Zum ruhigen Baden Karon oder Kata wählen, hierher abends kommen.'],
      fr: ['Patong et Bangla Road', 'La plage la plus animée de l’île : sports nautiques le jour, la rue des bars néon Bangla Road la nuit.', 'Pour nager au calme, préférez Karon ou Kata et venez ici le soir.'],
      it: ['Patong e Bangla Road', 'La spiaggia più animata dell’isola: sport acquatici di giorno e la via dei bar al neon Bangla Road di notte.', 'Per nuotare tranquilli vai a Karon o Kata e vieni qui la sera.'],
    }, { price: free, hours: 'always' }),
    P('phang-nga-bay', 'nature', 8.275, 98.5013, CAPE, 4.7, 18600, ['islands', 'kayak', 'photo'], {
      ru: ['Залив Пханг-Нга и остров Джеймса Бонда', 'Сотни известняковых скал из изумрудной воды, морские пещеры и «остров Джеймса Бонда» с каменной иглой Ко Тапу.', 'Выбирайте тур на каяке по пещерам и выезд рано утром — до прибытия больших групп.'],
      en: ['Phang Nga Bay and James Bond Island', 'Hundreds of limestone towers rising from emerald water, sea caves and “James Bond Island” with the Koh Tapu needle.', 'Choose a sea-cave kayak tour with an early start, before the big groups.'],
      es: ['Bahía de Phang Nga e isla de James Bond', 'Cientos de torres de caliza sobre agua esmeralda, cuevas marinas y la “isla de James Bond” con la aguja de Koh Tapu.', 'Elige una excursión en kayak por las cuevas y sal temprano, antes que los grupos.'],
      de: ['Phang-Nga-Bucht und James-Bond-Insel', 'Hunderte Kalksteintürme aus smaragdgrünem Wasser, Meereshöhlen und die „James-Bond-Insel“ mit der Felsnadel Koh Tapu.', 'Eine Kajaktour durch die Höhlen mit frühem Start wählen, vor den großen Gruppen.'],
      fr: ['Baie de Phang Nga et île de James Bond', 'Des centaines de pitons calcaires sur une eau émeraude, des grottes marines et « l’île de James Bond » avec l’aiguille de Koh Tapu.', 'Optez pour un tour en kayak dans les grottes avec départ matinal, avant les groupes.'],
      it: ['Baia di Phang Nga e isola di James Bond', 'Centinaia di torri calcaree dall’acqua smeraldo, grotte marine e l’“isola di James Bond” con l’ago di Koh Tapu.', 'Scegli un tour in kayak nelle grotte con partenza presto, prima dei grandi gruppi.'],
    }, { spot: 'insta' }),
    P('nai-harn-beach', 'nature', 7.7766, 98.3043, BEACH, 4.7, 11900, ['beaches', 'nature'], {
      ru: ['Пляж Най Харн', 'Бухта на юге острова с белым песком, без шезлонгов вдоль берега, и озеро за пляжем, где бегают по вечерам.', 'Отсюда 10 минут до мыса Промтеп на закат.'],
      en: ['Nai Harn Beach', 'A white-sand bay in the south without rows of loungers, with a lake behind it for evening runs.', 'It is 10 minutes from Promthep Cape for sunset.'],
      es: ['Playa de Nai Harn', 'Una bahía de arena blanca en el sur sin filas de hamacas, con un lago detrás para correr al atardecer.', 'Está a 10 minutos del cabo Promthep para ver la puesta de sol.'],
      de: ['Nai Harn Beach', 'Eine weiße Sandbucht im Süden ohne Liegenreihen, mit einem See dahinter für die Abendrunde.', '10 Minuten zum Kap Promthep für den Sonnenuntergang.'],
      fr: ['Plage de Nai Harn', 'Une baie de sable blanc au sud sans rangées de transats, avec un lac derrière pour courir le soir.', 'À 10 minutes du cap Promthep pour le coucher du soleil.'],
      it: ['Spiaggia di Nai Harn', 'Una baia di sabbia bianca a sud senza file di lettini, con un lago dietro per correre la sera.', 'A 10 minuti da Capo Promthep per il tramonto.'],
    }, { price: free, hours: 'always' }),
    P('wat-phra-thong', 'attraction', 8.027, 98.339, TEMPLE, 4.5, 3800, ['temples', 'history'], {
      ru: ['Ват Пхра Тхонг', 'Храм с золотым Буддой, наполовину ушедшим в землю: по легенде, его невозможно выкопать — и над ним построили святилище.', 'По пути на север острова — удобно совместить с пляжем Най Янг.'],
      en: ['Wat Phra Thong', 'A temple around a half-buried golden Buddha — legend says it cannot be dug out, so the shrine was built over it.', 'On the way to the north of the island — pair it with Nai Yang beach.'],
      es: ['Wat Phra Thong', 'Un templo alrededor de un buda dorado semienterrado: la leyenda dice que no se puede desenterrar, y se construyó el santuario encima.', 'De camino al norte de la isla: combínalo con la playa de Nai Yang.'],
      de: ['Wat Phra Thong', 'Ein Tempel um einen halb vergrabenen goldenen Buddha – der Legende nach lässt er sich nicht ausgraben, also baute man den Schrein darüber.', 'Auf dem Weg in den Inselnorden – mit Nai Yang Beach kombinieren.'],
      fr: ['Wat Phra Thong', 'Un temple autour d’un bouddha doré à demi enterré : la légende dit qu’on ne peut l’extraire, on a donc bâti le sanctuaire dessus.', 'Sur la route du nord de l’île, à combiner avec la plage de Nai Yang.'],
      it: ['Wat Phra Thong', 'Un tempio attorno a un Buddha dorato mezzo sepolto: la leggenda dice che non si può dissotterrare, così il santuario fu costruito sopra.', 'Sulla strada per il nord dell’isola, da abbinare alla spiaggia di Nai Yang.'],
    }, { price: free }),
    P('bang-pae-waterfall', 'nature', 8.033, 98.394, CAPE, 4.3, 4100, ['waterfalls', 'jungle', 'hiking'], {
      ru: ['Водопад Банг Пэ', 'Водопад в последнем тропическом лесу Пхукета (парк Кхао Пра Тхео); у входа — центр реабилитации гиббонов.', 'Лучше всего в сезон дождей; возьмите обувь для скользких камней.'],
      en: ['Bang Pae Waterfall', 'A waterfall in Phuket’s last rainforest (Khao Phra Thaeo park), with a gibbon rehabilitation centre at the entrance.', 'Best in the rainy season; bring shoes for slippery rocks.'],
      es: ['Cascada Bang Pae', 'Una cascada en la última selva de Phuket (parque Khao Phra Thaeo), con un centro de rehabilitación de gibones en la entrada.', 'Mejor en época de lluvias; lleva calzado para rocas resbaladizas.'],
      de: ['Bang-Pae-Wasserfall', 'Ein Wasserfall im letzten Regenwald Phukets (Park Khao Phra Thaeo), am Eingang eine Gibbon-Auffangstation.', 'Am schönsten in der Regenzeit; rutschfeste Schuhe mitnehmen.'],
      fr: ['Cascade de Bang Pae', 'Une cascade dans la dernière forêt tropicale de Phuket (parc Khao Phra Thaeo), avec un centre de réhabilitation des gibbons à l’entrée.', 'Plus belle à la saison des pluies ; chaussures adaptées aux rochers glissants.'],
      it: ['Cascata di Bang Pae', 'Una cascata nell’ultima foresta pluviale di Phuket (parco Khao Phra Thaeo), con un centro di recupero dei gibboni all’ingresso.', 'Più bella nella stagione delle piogge; porta scarpe per le rocce scivolose.'],
    }, { spot: 'hidden', price: fixed(200, 'THB'), hours: '08:00–16:30' }),
    P('sirinat-nai-yang', 'nature', 8.088, 98.297, BEACH2, 4.5, 6900, ['beaches', 'nature', 'sunset'], {
      ru: ['Нацпарк Сиринат и пляж Най Янг', 'Тихий северный пляж в тени казуарин; на соседнем Май Кхао самолёты заходят на посадку прямо над головой.', 'К закату — на Май Кхао у конца полосы; купаться лучше на Най Янге.'],
      en: ['Sirinat National Park and Nai Yang Beach', 'A quiet northern beach shaded by casuarinas; on neighbouring Mai Khao, planes land right overhead.', 'At sunset head to Mai Khao by the runway; swim at Nai Yang.'],
      es: ['Parque Nacional Sirinat y playa Nai Yang', 'Una tranquila playa del norte a la sombra de casuarinas; en Mai Khao, al lado, los aviones aterrizan sobre tu cabeza.', 'Al atardecer ve a Mai Khao junto a la pista; báñate en Nai Yang.'],
      de: ['Sirinat-Nationalpark und Nai Yang Beach', 'Ein ruhiger Strand im Norden unter Kasuarinen; am benachbarten Mai Khao landen Flugzeuge direkt über einem.', 'Zum Sonnenuntergang an den Mai Khao bei der Landebahn; baden am Nai Yang.'],
      fr: ['Parc national de Sirinat et plage de Nai Yang', 'Une plage calme du nord à l’ombre des filaos ; à Mai Khao voisine, les avions atterrissent juste au-dessus.', 'Au coucher du soleil, allez à Mai Khao près de la piste ; baignade à Nai Yang.'],
      it: ['Parco nazionale Sirinat e spiaggia di Nai Yang', 'Una tranquilla spiaggia a nord all’ombra delle casuarine; nella vicina Mai Khao gli aerei atterrano sopra la testa.', 'Al tramonto vai a Mai Khao vicino alla pista; fai il bagno a Nai Yang.'],
    }, { price: free }),

    P('pru', 'food', 8.0045, 98.277, FOOD, 4.8, 900, ['food', 'luxury'], {
      ru: ['PRU', 'Ресторан курорта Trisara с фермой на острове: единственная звезда Мишлен Пхукета в гиде 2026, а также зелёная звезда за устойчивое хозяйство.', 'Бронируйте ужин заранее; сет строится вокруг урожая собственной фермы Pru Jampa.'],
      en: ['PRU', 'The Trisara resort restaurant with its own island farm: Phuket’s MICHELIN star in the 2026 guide, plus a Green Star for sustainability.', 'Book dinner ahead; the menu follows the harvest of its Pru Jampa farm.'],
      es: ['PRU', 'El restaurante del resort Trisara con granja propia en la isla: la estrella MICHELIN de Phuket en la guía 2026, además de una Estrella Verde.', 'Reserva la cena; el menú sigue la cosecha de su granja Pru Jampa.'],
      de: ['PRU', 'Das Restaurant des Resorts Trisara mit eigener Inselfarm: Phukets MICHELIN-Stern im Guide 2026 und ein Grüner Stern für Nachhaltigkeit.', 'Abendessen vorab buchen; das Menü folgt der Ernte der Farm Pru Jampa.'],
      fr: ['PRU', 'Le restaurant du resort Trisara avec sa ferme sur l’île : l’étoile MICHELIN de Phuket au guide 2026, et une Étoile Verte.', 'Réservez le dîner ; le menu suit les récoltes de la ferme Pru Jampa.'],
      it: ['PRU', 'Il ristorante del resort Trisara con la sua fattoria sull’isola: la stella MICHELIN di Phuket nella guida 2026, più una Stella Verde.', 'Prenota la cena; il menu segue il raccolto della fattoria Pru Jampa.'],
    }, { price: level(3), michelin: { award: 'star1', year: 2026 }, address: 'Trisara, Srisoonthorn Rd, Thalang' }),
    P('jampa', 'food', 7.9955, 98.299, FOOD, 4.6, 600, ['food', 'gardens'], {
      ru: ['Jampa', 'Ресторан «от фермы к столу» в Черн-Талай, где готовят из урожая собственных огородов; зелёная звезда Мишлен 2026.', 'Приходите к обеду и погуляйте по огородам до или после еды.'],
      en: ['Jampa', 'A farm-to-table restaurant in Cherngtalay cooking from its own gardens; MICHELIN Green Star in 2026.', 'Come for lunch and walk the gardens before or after.'],
      es: ['Jampa', 'Un restaurante de la granja a la mesa en Cherngtalay que cocina con sus propios huertos; Estrella Verde MICHELIN en 2026.', 'Ven a comer y pasea por los huertos antes o después.'],
      de: ['Jampa', 'Ein Farm-to-Table-Restaurant in Cherngtalay, das aus den eigenen Gärten kocht; Grüner MICHELIN-Stern 2026.', 'Zum Mittagessen kommen und vorher oder nachher durch die Gärten gehen.'],
      fr: ['Jampa', 'Un restaurant de la ferme à la table à Cherngtalay, cuisinant ses propres potagers ; Étoile Verte MICHELIN en 2026.', 'Venez déjeuner et promenez-vous dans les potagers.'],
      it: ['Jampa', 'Un ristorante dalla fattoria alla tavola a Cherngtalay che cucina dai propri orti; Stella Verde MICHELIN nel 2026.', 'Vieni a pranzo e passeggia negli orti prima o dopo.'],
    }, { price: level(2), michelin: { award: 'green', year: 2026 }, address: 'Cherngtalay, Thalang' }),
    P('one-chun', 'food', 7.8857, 98.3894, FOOD, 4.5, 6200, ['food'], {
      ru: ['One Chun', 'Южнотайская и пхукетская кухня в старинном доме с плиткой и антиквариатом; Bib Gourmand в гиде 2026.', 'Закажите карри с крабом и рисовой лапшой и «моо хон» — свинину, тушённую в соевом соусе.'],
      en: ['One Chun', 'Southern Thai and Phuket cooking in an old tiled house full of antiques; Bib Gourmand in the 2026 guide.', 'Order crab curry with rice noodles and moo hong, pork braised in soy.'],
      es: ['One Chun', 'Cocina del sur de Tailandia y de Phuket en una casa antigua con azulejos y antigüedades; Bib Gourmand en la guía 2026.', 'Pide curry de cangrejo con fideos y moo hong, cerdo guisado en soja.'],
      de: ['One Chun', 'Südthailändische und Phuket-Küche in einem alten gefliesten Haus voller Antiquitäten; Bib Gourmand im Guide 2026.', 'Krabbencurry mit Reisnudeln und Moo Hong, in Soja geschmortes Schwein, bestellen.'],
      fr: ['One Chun', 'Cuisine du sud thaï et de Phuket dans une vieille maison carrelée pleine d’antiquités ; Bib Gourmand au guide 2026.', 'Commandez le curry de crabe aux nouilles de riz et le moo hong, porc braisé au soja.'],
      it: ['One Chun', 'Cucina del sud della Thailandia e di Phuket in una vecchia casa piastrellata piena di antiquariato; Bib Gourmand nella guida 2026.', 'Ordina il curry di granchio con noodle di riso e il moo hong, maiale brasato nella soia.'],
    }, { price: level(2), michelin: { award: 'bib', year: 2026 }, address: '48/1 Thepkasattri Rd', menu: [
      ['Kaeng Pu Bai Cha Plu', 450, 'карри с крабом и листьями бетеля|crab curry with betel leaves|curry de cangrejo con hojas de betel|Krabbencurry mit Betelblättern|curry de crabe aux feuilles de bétel|curry di granchio con foglie di betel'],
      ['Moo Hong', 220, 'свинина, тушённая в соевом соусе с перцем|pork belly braised in soy and pepper|panceta guisada en soja y pimienta|in Soja und Pfeffer geschmorter Bauch|poitrine braisée soja-poivre|pancetta brasata con soia e pepe'],
    ] }),
    P('khao-tom-dibuk', 'food', 7.8866, 98.3878, FOOD, 4.3, 1200, ['food', 'streetfood', 'nightlife'], {
      ru: ['Khao Tom Dibuk', 'Ночная лавка «кхао том» — рисового супа с закусками — на улице Дибук в старом городе; Bib Gourmand 2026.', 'Отличный поздний ужин после прогулки: к супу берут несколько маленьких блюд.'],
      en: ['Khao Tom Dibuk', 'A late-night khao tom spot — rice soup with side dishes — on Dibuk Road in the old town; Bib Gourmand 2026.', 'A great late supper after a walk: order a few small plates with the soup.'],
      es: ['Khao Tom Dibuk', 'Un local nocturno de khao tom —sopa de arroz con acompañamientos— en Dibuk Road, en el casco antiguo; Bib Gourmand 2026.', 'Una gran cena tardía tras el paseo: pide varios platillos con la sopa.'],
      de: ['Khao Tom Dibuk', 'Ein Khao-Tom-Lokal bis spät in die Nacht – Reissuppe mit Beilagen – an der Dibuk Road in der Altstadt; Bib Gourmand 2026.', 'Ideal für ein spätes Abendessen: zur Suppe ein paar kleine Gerichte bestellen.'],
      fr: ['Khao Tom Dibuk', 'Une adresse de khao tom — soupe de riz et petits plats — ouverte tard sur Dibuk Road, vieille ville ; Bib Gourmand 2026.', 'Parfait pour un souper tardif : quelques petits plats avec la soupe.'],
      it: ['Khao Tom Dibuk', 'Un locale notturno di khao tom — zuppa di riso con contorni — su Dibuk Road in città vecchia; Bib Gourmand 2026.', 'Ottima cena tardiva dopo la passeggiata: ordina qualche piattino con la zuppa.'],
    }, { price: level(1), michelin: { award: 'bib', year: 2026 }, address: 'Dibuk Rd, Phuket Town', menu: [
      ['Khao Tom', 40, 'рисовый суп|rice soup|sopa de arroz|Reissuppe|soupe de riz|zuppa di riso'],
      ['Pak Boong Fai Daeng', 80, 'водяной шпинат с чили на сильном огне|morning glory stir-fried with chilli|espinaca de agua salteada con chile|Wasserspinat mit Chili aus dem Wok|liseron d’eau sauté au piment|spinacio d’acqua saltato al peperoncino'],
    ] }),
    P('mee-ton-poe', 'food', 7.8895, 98.3895, FOOD, 4.2, 4800, ['food', 'streetfood'], {
      ru: ['Mee Ton Poe', 'Пхукетская жёлтая лапша «ми хоккиен» с морепродуктами у часовой башни — одна из самых старых лапшичных острова.', 'Возьмите сухую лапшу с морепродуктами и суп из рыбных шариков.'],
      en: ['Mee Ton Poe', 'Phuket-style yellow Hokkien noodles with seafood by the clock tower — one of the island’s oldest noodle shops.', 'Get the dry seafood noodles and a fish-ball soup.'],
      es: ['Mee Ton Poe', 'Fideos amarillos hokkien al estilo de Phuket con marisco junto a la torre del reloj, de los más antiguos de la isla.', 'Pide los fideos secos con marisco y una sopa de albóndigas de pescado.'],
      de: ['Mee Ton Poe', 'Gelbe Hokkien-Nudeln nach Phuket-Art mit Meeresfrüchten am Uhrturm – einer der ältesten Nudelläden der Insel.', 'Trockene Meeresfrüchte-Nudeln und Fischbällchensuppe nehmen.'],
      fr: ['Mee Ton Poe', 'Nouilles jaunes hokkien façon Phuket aux fruits de mer près de la tour de l’horloge, l’une des plus anciennes échoppes de l’île.', 'Prenez les nouilles sèches aux fruits de mer et une soupe de boulettes de poisson.'],
      it: ['Mee Ton Poe', 'Noodle gialli hokkien in stile Phuket con frutti di mare vicino alla torre dell’orologio, tra i più antichi dell’isola.', 'Prendi i noodle asciutti ai frutti di mare e una zuppa di polpette di pesce.'],
    }, { price: level(1), address: 'Phuket Rd, by the clock tower', menu: [
      ['Mee Hokkien Pad', 80, 'жареная жёлтая лапша с морепродуктами|fried yellow noodles with seafood|fideos amarillos salteados con marisco|gebratene gelbe Nudeln mit Meeresfrüchten|nouilles jaunes sautées aux fruits de mer|noodle gialli saltati ai frutti di mare'],
      ['Mee Hun Pa', 70, 'лапша-вермишель в бульоне|thin noodles in broth|fideos finos en caldo|dünne Nudeln in Brühe|vermicelles en bouillon|noodle sottili in brodo'],
    ] }),
    P('tu-kab-khao', 'food', 7.885, 98.3913, FOOD, 4.4, 5100, ['food', 'architecture'], {
      ru: ['Tu Kab Khao', 'Пхукетская домашняя кухня в отреставрированном сино-португальском особняке с высокими потолками и плиткой.', 'Попробуйте моо хон и «нам прик гунг сиап» — острую пасту с копчёными креветками и овощами.'],
      en: ['Tu Kab Khao', 'Phuket home cooking in a restored Sino-Portuguese mansion with high ceilings and tiles.', 'Try moo hong and nam prik goong siap, a spicy smoked-shrimp dip with vegetables.'],
      es: ['Tu Kab Khao', 'Cocina casera de Phuket en una mansión sino-portuguesa restaurada con techos altos y azulejos.', 'Prueba el moo hong y el nam prik goong siap, salsa picante de gamba ahumada con verduras.'],
      de: ['Tu Kab Khao', 'Phuket-Hausmannskost in einer restaurierten sino-portugiesischen Villa mit hohen Decken und Fliesen.', 'Moo Hong und Nam Prik Goong Siap probieren, scharfen Dip aus geräucherten Garnelen mit Gemüse.'],
      fr: ['Tu Kab Khao', 'Cuisine familiale de Phuket dans une demeure sino-portugaise restaurée, hauts plafonds et carreaux.', 'Goûtez le moo hong et le nam prik goong siap, sauce relevée aux crevettes fumées et légumes.'],
      it: ['Tu Kab Khao', 'Cucina casalinga di Phuket in una villa sino-portoghese restaurata con soffitti alti e piastrelle.', 'Prova il moo hong e il nam prik goong siap, salsa piccante di gamberi affumicati con verdure.'],
    }, { price: level(2), address: '8 Phang Nga Rd', menu: [
      ['Moo Hong', 250, 'свинина, тушённая по-пхукетски|Phuket-style braised pork belly|panceta guisada al estilo de Phuket|geschmorter Bauch nach Phuket-Art|poitrine braisée façon Phuket|pancetta brasata alla Phuket'],
      ['Nam Prik Goong Siap', 180, 'острая паста с копчёной креветкой и овощами|smoked-shrimp chilli dip with vegetables|salsa de gamba ahumada con verduras|Chili-Dip mit Räuchergarnelen und Gemüse|sauce aux crevettes fumées et légumes|salsa di gamberi affumicati con verdure'],
    ] }),
    P('kan-eang-pier', 'food', 7.823, 98.361, FOOD, 4.3, 7900, ['food', 'views'], {
      ru: ['Kan Eang@Pier', 'Морепродукты на пирсе Чалонга: столики у воды, рыба и крабы на выбор из аквариумов.', 'Приходите к закату и закажите рыбу на пару с лаймом.'],
      en: ['Kan Eang@Pier', 'Seafood on Chalong pier: waterside tables, fish and crabs picked from the tanks.', 'Come at sunset and order fish steamed with lime.'],
      es: ['Kan Eang@Pier', 'Marisco en el muelle de Chalong: mesas junto al agua, pescado y cangrejo elegidos del vivero.', 'Ven al atardecer y pide pescado al vapor con lima.'],
      de: ['Kan Eang@Pier', 'Meeresfrüchte am Chalong-Pier: Tische am Wasser, Fisch und Krabben aus dem Becken gewählt.', 'Zum Sonnenuntergang kommen und gedämpften Fisch mit Limette bestellen.'],
      fr: ['Kan Eang@Pier', 'Fruits de mer sur la jetée de Chalong : tables au bord de l’eau, poissons et crabes choisis au vivier.', 'Venez au coucher du soleil et prenez le poisson vapeur au citron vert.'],
      it: ['Kan Eang@Pier', 'Pesce sul molo di Chalong: tavoli sull’acqua, pesce e granchi scelti dalle vasche.', 'Vieni al tramonto e ordina il pesce al vapore con lime.'],
    }, { price: level(2), address: 'Chalong Pier', menu: [
      ['Pla Neung Manao', 450, 'рыба на пару с лаймом и чили|fish steamed with lime and chilli|pescado al vapor con lima y chile|gedämpfter Fisch mit Limette und Chili|poisson vapeur citron vert-piment|pesce al vapore con lime e peperoncino'],
      ['Pu Phat Pong Kari', 600, 'краб в жёлтом карри с яйцом|crab in yellow curry with egg|cangrejo al curry amarillo con huevo|Krabbe in gelbem Curry mit Ei|crabe au curry jaune et œuf|granchio al curry giallo con uovo'],
    ] }),
    P('lock-tien', 'food', 7.8862, 98.3889, FOOD, 4.2, 2400, ['food', 'streetfood'], {
      ru: ['Фуд-корт Lock Tien', 'Маленький фуд-корт старого города с пхукетскими классиками: «ло ба», «по пиа» и лапшой — всё недорого.', 'Работает днём; хорошее место для быстрого обеда.'],
      en: ['Lock Tien Food Court', 'A small old-town food court of Phuket classics — loba, popiah and noodles — all cheap.', 'Open by day; good for a quick lunch.'],
      es: ['Patio Lock Tien', 'Un pequeño patio de comidas del casco antiguo con clásicos de Phuket —loba, popiah y fideos—, todo barato.', 'Abre de día; ideal para una comida rápida.'],
      de: ['Lock-Tien-Foodcourt', 'Ein kleiner Foodcourt in der Altstadt mit Phuket-Klassikern – Loba, Popiah und Nudeln –, alles günstig.', 'Tagsüber geöffnet; gut für ein schnelles Mittagessen.'],
      fr: ['Food court Lock Tien', 'Un petit food court de la vieille ville aux classiques de Phuket — loba, popiah, nouilles — à petits prix.', 'Ouvert la journée ; idéal pour un déjeuner rapide.'],
      it: ['Food court Lock Tien', 'Un piccolo food court della città vecchia con i classici di Phuket — loba, popiah e noodle — tutto economico.', 'Aperto di giorno; ottimo per un pranzo veloce.'],
    }, { price: level(1), address: 'Yaowarat Rd at Dibuk Rd', menu: [
      ['Popiah', 50, 'свежие роллы с овощами и тофу|fresh rolls with vegetables and tofu|rollitos frescos con verduras y tofu|frische Rollen mit Gemüse und Tofu|rouleaux frais légumes-tofu|involtini freschi con verdure e tofu'],
      ['Loba', 80, 'жареные свиные деликатесы с соусом|fried pork offcuts with dipping sauce|frituras de cerdo con salsa|frittierte Schweinestücke mit Dip|abats de porc frits et sauce|fritti di maiale con salsa'],
    ] }),
    P('chillva-market', 'food', 7.8955, 98.39, FOOD, 4.3, 9300, ['food', 'nightlife', 'market'], {
      ru: ['Ночной рынок Chillva', 'Рынок в контейнерах с уличной едой, барами и живой музыкой — любимое вечернее место местной молодёжи.', 'Работает со второй половины дня; лучшие дни — со вторника по субботу.'],
      en: ['Chillva Market', 'A container-box night market of street food, bars and live music — a local favourite in the evening.', 'Opens in the late afternoon; best Tuesday to Saturday.'],
      es: ['Mercado Chillva', 'Un mercado nocturno de contenedores con comida callejera, bares y música en vivo, el favorito local por la noche.', 'Abre a media tarde; mejor de martes a sábado.'],
      de: ['Chillva Market', 'Ein Container-Nachtmarkt mit Streetfood, Bars und Livemusik – abends ein lokaler Liebling.', 'Öffnet am späten Nachmittag; am besten dienstags bis samstags.'],
      fr: ['Marché Chillva', 'Un marché de nuit en conteneurs : cuisine de rue, bars et musique live, chouchou des locaux le soir.', 'Ouvre en fin d’après-midi ; idéal du mardi au samedi.'],
      it: ['Mercato Chillva', 'Un mercato notturno di container con street food, bar e musica dal vivo, amato dai locali la sera.', 'Apre nel tardo pomeriggio; meglio dal martedì al sabato.'],
    }, { price: level(1), menu: [
      ['Moo Ping', 10, 'шашлычок из свинины|grilled pork skewer|brocheta de cerdo|Schweinespieß|brochette de porc|spiedino di maiale'],
      ['Som Tam', 60, 'салат из зелёной папайи|green papaya salad|ensalada de papaya verde|grüner Papayasalat|salade de papaye verte|insalata di papaya verde'],
    ] }),
    P('naka-weekend-market', 'food', 7.8575, 98.361, FOOD, 4.2, 15400, ['food', 'market', 'shopping'], {
      ru: ['Рынок выходного дня Нака', 'Большой вечерний рынок по выходным: одежда, сувениры и длинные ряды уличной еды.', 'Работает в субботу и воскресенье вечером; торговаться можно за вещи, не за еду.'],
      en: ['Naka Weekend Market', 'A big weekend evening market: clothes, souvenirs and long rows of street food.', 'Saturday and Sunday evenings; haggle for goods, not for food.'],
      es: ['Mercado de fin de semana Naka', 'Un gran mercado vespertino de fin de semana: ropa, recuerdos y largas filas de comida callejera.', 'Sábado y domingo por la tarde-noche; regatea en objetos, no en comida.'],
      de: ['Naka Weekend Market', 'Ein großer Abendmarkt am Wochenende: Kleidung, Souvenirs und lange Reihen Streetfood.', 'Samstag- und Sonntagabend; bei Waren handeln, nicht beim Essen.'],
      fr: ['Marché du week-end de Naka', 'Un grand marché du soir le week-end : vêtements, souvenirs et longues rangées de cuisine de rue.', 'Samedi et dimanche soir ; on marchande les objets, pas la nourriture.'],
      it: ['Mercato del weekend di Naka', 'Un grande mercato serale nel weekend: abiti, souvenir e lunghe file di street food.', 'Sabato e domenica sera; si contratta sugli oggetti, non sul cibo.'],
    }, { price: level(1), hours: '16:00–23:00', menu: [
      ['Gai Yang', 60, 'курица на гриле|grilled chicken|pollo a la parrilla|gegrilltes Huhn|poulet grillé|pollo alla griglia'],
      ['Roti Gluay', 50, 'ротти с бананом|banana roti|roti de plátano|Bananen-Roti|roti à la banane|roti alla banana'],
    ] }),
  ],
  routes: [
    D(['thalang-road', 'peranakannitat', '=phuket-soi-romanee', 'one-chun', 'khao-rang', '=phuket-big-buddha', 'chillva-market'],
      'Старый город и Большой Будда|Old Town and the Big Buddha|El casco antiguo y el Gran Buda|Altstadt und Big Buddha|Vieille ville et Grand Bouddha|Città vecchia e Grande Buddha'),
    D(['=phuket-wat-chalong', 'kata-beach', '=phuket-karon-viewpoint', 'kan-eang-pier', 'nai-harn-beach', '=phuket-promthep-cape', '=phuket-rawai-seafood-market'],
      'Южные пляжи и закат на мысе Промтеп|Southern beaches and sunset at Promthep|Playas del sur y atardecer en Promthep|Südliche Strände und Sonnenuntergang am Promthep|Plages du sud et coucher de soleil à Promthep|Spiagge del sud e tramonto a Promthep'),
    D(['phang-nga-bay', 'jampa', 'wat-phra-thong', 'bang-pae-waterfall', 'sirinat-nai-yang', 'pru'],
      'Залив Пханг-Нга и тихий север|Phang Nga Bay and the quiet north|La bahía de Phang Nga y el norte tranquilo|Phang-Nga-Bucht und der ruhige Norden|Baie de Phang Nga et nord paisible|Baia di Phang Nga e il nord tranquillo'),
  ],
};

export default pack;
