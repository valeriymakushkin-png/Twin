import type { CityPack } from '../types';
import { free, level, makeDay, makePlace } from './_kit.ts';

const P = makePlace('guangzhou');
const D = makeDay('guangzhou');
const TOWER = 'J9tIriOChnU';
const SUNSET = 'YOqZ4qnhtrs';
const SPIRE = '6AHbX1S3c9A';
const NIGHT = 'awzcfLxOsig';

const pack: CityPack = {
  country: 'CN',
  city: 'guangzhou',
  places: [
    P('canton-tower', 'attraction', 23.1066, 113.3245, TOWER, 4.6, 36000, ['views', 'city', 'sunset'], {
      ru: ['Телебашня Кантон', 'Башня высотой 600 м (2010) в форме «тонкой талии»: открытая площадка на 488 м и кабинки-«пузыри», которые медленно объезжают край крыши.', 'Поднимайтесь за час до заката — увидите город и днём, и в огнях.'],
      en: ['Canton Tower', 'A 600 m “slim-waisted” tower (2010): an open-air deck at 488 m and bubble cabins that slowly circle the roof edge.', 'Go up an hour before sunset to see the city by day and lit up.'],
      es: ['Torre de Cantón', 'Una torre de 600 m (2010) de «cintura fina»: mirador al aire libre a 488 m y cabinas-burbuja que rodean despacio el borde del techo.', 'Sube una hora antes del atardecer para ver la ciudad de día e iluminada.'],
      de: ['Canton Tower', 'Ein 600 m hoher „schlanker“ Turm (2010): Freiluftdeck auf 488 m und Blasenkabinen, die langsam um den Dachrand fahren.', 'Eine Stunde vor Sonnenuntergang hochfahren – Stadt bei Tag und im Lichterglanz.'],
      fr: ['Tour de Canton', 'Une tour de 600 m (2010) à la « taille fine » : terrasse en plein air à 488 m et cabines-bulles qui font lentement le tour du toit.', 'Montez une heure avant le coucher du soleil : la ville de jour puis illuminée.'],
      it: ['Canton Tower', 'Una torre di 600 m (2010) dalla «vita sottile»: terrazza all’aperto a 488 m e cabine-bolla che girano piano lungo il bordo del tetto.', 'Sali un’ora prima del tramonto per vedere la città di giorno e illuminata.'],
    }, { spot: 'insta', price: level(3) }),
    P('chen-clan-hall', 'attraction', 23.1257, 113.2453, SPIRE, 4.6, 21000, ['architecture', 'art', 'museums'], {
      ru: ['Храм предков рода Чэнь', 'Родовая академия 1888–1894 годов с потрясающей резьбой по дереву, камню и кирпичу и керамическими фигурами на коньках крыш; сейчас — Музей народного искусства Гуандуна.', 'Поднимите голову: на крышах целые сцены из опер в цветной керамике.'],
      en: ['Chen Clan Ancestral Hall', 'A clan academy of 1888–1894 with stunning wood, stone and brick carving and ceramic figures on the roof ridges; now the Guangdong Folk Art Museum.', 'Look up: the roofs carry whole opera scenes in coloured ceramic.'],
      es: ['Salón Ancestral del Clan Chen', 'Una academia de clan de 1888–1894 con asombrosa talla en madera, piedra y ladrillo y figuras de cerámica en las cumbreras; hoy Museo de Arte Popular de Cantón.', 'Mira arriba: los tejados tienen escenas de ópera enteras en cerámica.'],
      de: ['Ahnenhalle der Familie Chen', 'Eine Clan-Akademie von 1888–1894 mit großartigen Holz-, Stein- und Ziegelschnitzereien und Keramikfiguren auf den Dachfirsten; heute Volkskunstmuseum Guangdong.', 'Nach oben schauen: auf den Dächern ganze Opernszenen aus Keramik.'],
      fr: ['Temple ancestral des Chen', 'Une académie clanique de 1888–1894 aux sculptures saisissantes sur bois, pierre et brique et aux figurines de céramique sur les faîtages ; aujourd’hui musée d’Art populaire du Guangdong.', 'Levez les yeux : les toits portent des scènes d’opéra entières en céramique.'],
      it: ['Sala ancestrale del clan Chen', 'Un’accademia di clan del 1888–1894 con splendidi intagli in legno, pietra e mattone e figure in ceramica sui colmi; oggi Museo d’Arte Popolare del Guangdong.', 'Guarda in alto: sui tetti ci sono intere scene d’opera in ceramica.'],
    }, { spot: 'insta', price: level(1) }),
    P('shamian-island', 'attraction', 23.1077, 113.2405, NIGHT, 4.5, 24000, ['history', 'architecture', 'photo'], {
      ru: ['Остров Шамянь', 'Песчаный остров на Жемчужной реке, бывшие британская и французская концессии: больше 150 европейских особняков, банков и церквей под баньянами.', 'Тихие аллеи хороши утром, пока не приехали фотосессии.'],
      en: ['Shamian Island', 'A sandbank island on the Pearl River, the former British and French concessions: over 150 European mansions, banks and churches under banyans.', 'The quiet avenues are best in the morning, before the photo shoots arrive.'],
      es: ['Isla de Shamian', 'Una isla de arena en el río de las Perlas, antiguas concesiones británica y francesa: más de 150 mansiones, bancos e iglesias europeas bajo baniános.', 'Las avenidas tranquilas son mejores por la mañana, antes de las sesiones de fotos.'],
      de: ['Shamian-Insel', 'Eine Sandbankinsel im Perlfluss, einst britische und französische Konzession: über 150 europäische Villen, Banken und Kirchen unter Banyanbäumen.', 'Die stillen Alleen am besten morgens, bevor die Fotoshootings kommen.'],
      fr: ['Île de Shamian', 'Une île de sable sur la rivière des Perles, anciennes concessions britannique et française : plus de 150 demeures, banques et églises européennes sous les banians.', 'Les allées calmes sont plus belles le matin, avant les séances photo.'],
      it: ['Isola di Shamian', 'Un’isola di sabbia sul Fiume delle Perle, ex concessioni britannica e francese: oltre 150 palazzi, banche e chiese europee sotto i baniani.', 'I viali tranquilli sono più belli al mattino, prima dei servizi fotografici.'],
    }, { spot: 'insta', price: free }),
    P('yuexiu-park', 'nature', 23.1395, 113.2645, SPIRE, 4.4, 15000, ['gardens', 'history', 'museums'], {
      ru: ['Парк Юэсю', 'Самый большой парк центра с символом города — скульптурой Пяти баранов (1959) — и башней Чжэньхай 1380 года, где работает Музей Гуанчжоу.', 'По легенде пять бессмертных на баранах подарили городу рис — отсюда прозвище «город баранов».'],
      en: ['Yuexiu Park', 'The largest central park, with the city symbol — the Five Rams sculpture (1959) — and the Zhenhai Tower of 1380, home to the Guangzhou Museum.', 'Legend says five immortals on rams gave the city rice — hence its nickname, “City of Rams”.'],
      es: ['Parque Yuexiu', 'El mayor parque del centro, con el símbolo de la ciudad, la escultura de los Cinco Carneros (1959), y la torre Zhenhai de 1380, sede del Museo de Cantón.', 'Según la leyenda, cinco inmortales en carneros dieron arroz a la ciudad: de ahí «Ciudad de los Carneros».'],
      de: ['Yuexiu-Park', 'Der größte Park im Zentrum mit dem Stadtsymbol – der Fünf-Widder-Skulptur (1959) – und dem Zhenhai-Turm von 1380 mit dem Guangzhou-Museum.', 'Der Legende nach brachten fünf Unsterbliche auf Widdern der Stadt Reis – daher „Stadt der Widder“.'],
      fr: ['Parc Yuexiu', 'Le plus grand parc du centre, avec le symbole de la ville — la sculpture des Cinq Béliers (1959) — et la tour Zhenhai de 1380, qui abrite le musée de Canton.', 'La légende dit que cinq immortels sur des béliers apportèrent le riz : d’où « Ville des béliers ».'],
      it: ['Parco Yuexiu', 'Il parco più grande del centro, con il simbolo della città, la scultura dei Cinque Arieti (1959), e la torre Zhenhai del 1380, sede del Museo di Canton.', 'La leggenda dice che cinque immortali sugli arieti portarono il riso: da qui «Città degli Arieti».'],
    }, { price: free }),
    P('baiyun-mountain', 'nature', 23.178, 113.297, SUNSET, 4.4, 13000, ['nature', 'hiking', 'views'], {
      ru: ['Гора Байюнь', '«Гора белых облаков» на севере города: лесные тропы, канатная дорога и смотровые точки; высшая вершина Мосинлин — 382 м.', 'Поднимитесь на канатной дороге и спуститесь пешком — так легче.'],
      en: ['Baiyun Mountain', 'The “White Cloud Mountain” in the north of the city: forest trails, a cable car and viewpoints; the top, Moxing Ridge, is 382 m.', 'Ride the cable car up and walk down — it’s easier.'],
      es: ['Montaña Baiyun', 'La «Montaña de las Nubes Blancas» al norte: senderos de bosque, teleférico y miradores; la cima, Moxingling, mide 382 m.', 'Sube en teleférico y baja a pie: es más fácil.'],
      de: ['Baiyun-Berg', 'Der „Weiße-Wolken-Berg“ im Norden der Stadt: Waldwege, Seilbahn und Aussichtspunkte; der Gipfel Moxingling ist 382 m hoch.', 'Mit der Seilbahn hinauf, zu Fuß hinunter – das ist leichter.'],
      fr: ['Mont Baiyun', 'La « montagne des Nuages blancs » au nord : sentiers forestiers, téléphérique et belvédères ; le sommet, Moxingling, culmine à 382 m.', 'Montez en téléphérique et redescendez à pied : c’est plus facile.'],
      it: ['Monte Baiyun', 'La «Montagna delle Nuvole Bianche» a nord: sentieri nel bosco, funivia e belvedere; la vetta, Moxingling, è di 382 m.', 'Sali in funivia e scendi a piedi: è più facile.'],
    }, { price: level(1) }),
    P('sacred-heart-cathedral', 'attraction', 23.1176, 113.2603, SPIRE, 4.5, 9800, ['architecture', 'history'], {
      ru: ['Собор Святого Сердца', 'Готический собор 1863–1888 годов, целиком из гранита, — горожане зовут его Шиши, «Каменный дом».', 'Внутри — витражи; на мессу и вход проверьте часы на месте.'],
      en: ['Sacred Heart Cathedral', 'A Gothic cathedral of 1863–1888 built entirely of granite — locals call it Shishi, the “Stone House”.', 'Stained glass inside; check entry and Mass times on site.'],
      es: ['Catedral del Sagrado Corazón', 'Una catedral gótica de 1863–1888 hecha toda de granito; los locales la llaman Shishi, la «Casa de Piedra».', 'Vidrieras dentro; consulta allí los horarios de visita y misa.'],
      de: ['Herz-Jesu-Kathedrale', 'Eine gotische Kathedrale von 1863–1888, ganz aus Granit – Einheimische nennen sie Shishi, „Steinhaus“.', 'Innen Buntglasfenster; Öffnungs- und Messzeiten vor Ort prüfen.'],
      fr: ['Cathédrale du Sacré-Cœur', 'Une cathédrale gothique de 1863–1888 entièrement en granit, que les habitants appellent Shishi, la « Maison de pierre ».', 'Vitraux à l’intérieur ; vérifiez sur place les horaires de visite et de messe.'],
      it: ['Cattedrale del Sacro Cuore', 'Una cattedrale gotica del 1863–1888 tutta in granito: i locali la chiamano Shishi, la «Casa di Pietra».', 'Vetrate all’interno; verifica sul posto orari di visita e messa.'],
    }, { price: free }),
    P('six-banyan-temple', 'attraction', 23.1302, 113.2627, SPIRE, 4.4, 7600, ['temples', 'history'], {
      ru: ['Храм Шести баньянов', 'Буддийский храм VI века с 57-метровой Цветочной пагодой; название дал поэт Су Дунпо, увидев здесь шесть баньянов.', 'Иероглифы «шесть баньянов» над входом — по преданию, почерк самого Су Дунпо.'],
      en: ['Temple of the Six Banyan Trees', 'A 6th-century Buddhist temple with the 57 m Flower Pagoda; the poet Su Dongpo named it after six banyans he saw here.', 'The characters over the gate are said to be in Su Dongpo’s own hand.'],
      es: ['Templo de los Seis Baniános', 'Un templo budista del siglo VI con la Pagoda de las Flores de 57 m; el poeta Su Dongpo lo bautizó por seis baniános que vio aquí.', 'Se dice que los caracteres de la puerta son de puño y letra de Su Dongpo.'],
      de: ['Tempel der Sechs Banyanbäume', 'Ein buddhistischer Tempel aus dem 6. Jh. mit der 57 m hohen Blumenpagode; der Dichter Su Dongpo benannte ihn nach sechs Banyanbäumen.', 'Die Zeichen über dem Tor sollen von Su Dongpo selbst stammen.'],
      fr: ['Temple des Six Banians', 'Un temple bouddhiste du VIe siècle avec la pagode des Fleurs de 57 m ; le poète Su Dongpo le nomma d’après six banians vus ici.', 'Les caractères au-dessus de la porte seraient de la main de Su Dongpo.'],
      it: ['Tempio dei Sei Baniani', 'Un tempio buddhista del VI secolo con la Pagoda dei Fiori di 57 m; il poeta Su Dongpo lo chiamò così per sei baniani visti qui.', 'Si dice che i caratteri sulla porta siano della mano di Su Dongpo.'],
    }, { price: level(1) }),
    P('guangxiao-temple', 'attraction', 23.1297, 113.2594, SPIRE, 4.5, 6900, ['temples', 'history'], {
      ru: ['Храм Гуансяо', 'Старейший храм города: «Сначала был Гуансяо, потом город баранов», говорят здесь. Под деревом бодхи в 676 году постригся шестой патриарх чань Хуэйнэн.', 'Приходите утром — во дворах тихо, пахнет благовониями.'],
      en: ['Guangxiao Temple', 'The city’s oldest temple: “First there was Guangxiao, then the City of Rams”, they say. Under its bodhi tree the sixth Chan patriarch, Huineng, was ordained in 676.', 'Come in the morning — the courtyards are quiet and smell of incense.'],
      es: ['Templo Guangxiao', 'El templo más antiguo de la ciudad: «Primero fue Guangxiao, después la Ciudad de los Carneros». Bajo su árbol bodhi se ordenó en 676 el sexto patriarca chan, Huineng.', 'Ve por la mañana: los patios están tranquilos y huelen a incienso.'],
      de: ['Guangxiao-Tempel', 'Der älteste Tempel der Stadt: „Erst kam Guangxiao, dann die Stadt der Widder“, heißt es. Unter seinem Bodhibaum wurde 676 der sechste Chan-Patriarch Huineng ordiniert.', 'Morgens kommen – die Höfe sind still und duften nach Räucherwerk.'],
      fr: ['Temple Guangxiao', 'Le plus vieux temple de la ville : « D’abord Guangxiao, ensuite la Ville des béliers », dit-on. Sous son arbre de la Bodhi, le sixième patriarche chan Huineng fut ordonné en 676.', 'Venez le matin : les cours sont calmes et sentent l’encens.'],
      it: ['Tempio Guangxiao', 'Il tempio più antico della città: «Prima Guangxiao, poi la Città degli Arieti», si dice. Sotto il suo albero della bodhi nel 676 fu ordinato il sesto patriarca chan, Huineng.', 'Vieni al mattino: i cortili sono tranquilli e profumano d’incenso.'],
    }, { spot: 'hidden', price: level(1) }),
    P('opera-house', 'attraction', 23.115, 113.327, NIGHT, 4.5, 8800, ['architecture', 'art', 'city'], {
      ru: ['Оперный театр и площадь Хуачэн', 'Театр Захи Хадид (2010) — два «валуна» из стекла и гранита на берегу — у площади Хуачэн, главной оси нового центра Чжуцзян.', 'Вечером с площади лучший вид на подсвеченную телебашню за рекой.'],
      en: ['Opera House and Huacheng Square', 'Zaha Hadid’s theatre (2010) — two glass-and-granite “boulders” by the river — beside Huacheng Square, the axis of the new Zhujiang centre.', 'In the evening the square gives the best view of the lit tower across the river.'],
      es: ['Ópera y plaza Huacheng', 'El teatro de Zaha Hadid (2010), dos «cantos rodados» de vidrio y granito junto al río, al lado de la plaza Huacheng, eje del nuevo centro Zhujiang.', 'Al anochecer la plaza da la mejor vista de la torre iluminada al otro lado del río.'],
      de: ['Opernhaus und Huacheng-Platz', 'Zaha Hadids Theater (2010) – zwei „Findlinge“ aus Glas und Granit am Fluss – neben dem Huacheng-Platz, der Achse des neuen Zentrums Zhujiang.', 'Abends bietet der Platz den besten Blick auf den beleuchteten Turm jenseits des Flusses.'],
      fr: ['Opéra et place Huacheng', 'Le théâtre de Zaha Hadid (2010) — deux « galets » de verre et de granit au bord du fleuve — près de la place Huacheng, axe du nouveau centre de Zhujiang.', 'Le soir, la place offre la meilleure vue sur la tour illuminée de l’autre rive.'],
      it: ['Opera e piazza Huacheng', 'Il teatro di Zaha Hadid (2010), due «massi» di vetro e granito sul fiume, accanto a piazza Huacheng, l’asse del nuovo centro di Zhujiang.', 'La sera la piazza offre la vista migliore sulla torre illuminata oltre il fiume.'],
    }, { spot: 'insta', price: free }),
    P('beijing-road', 'attraction', 23.1253, 113.2689, NIGHT, 4.2, 14000, ['shopping', 'history', 'city'], {
      ru: ['Пешеходная улица Пекинлу', 'Главная торговая улица старого центра; под стеклом в мостовой видны слои старинной дороги разных эпох, найденные в 2002 году.', 'Посмотрите под ноги в середине улицы — там стеклянные окна в прошлое.'],
      en: ['Beijing Road pedestrian street', 'The old centre’s main shopping street; under glass in the pavement you can see layers of the ancient road from different eras, found in 2002.', 'Look down mid-street — there are glass windows onto the past.'],
      es: ['Calle peatonal Beijing Lu', 'La principal calle comercial del centro antiguo; bajo cristal en el suelo se ven capas de la antigua calzada de distintas épocas, halladas en 2002.', 'Mira al suelo a mitad de calle: hay ventanas de cristal al pasado.'],
      de: ['Fußgängerzone Beijing Road', 'Die wichtigste Einkaufsstraße der Altstadt; unter Glas im Pflaster sieht man Schichten der alten Straße aus verschiedenen Epochen, 2002 entdeckt.', 'In der Straßenmitte nach unten schauen – Glasfenster in die Vergangenheit.'],
      fr: ['Rue piétonne Beijing Lu', 'La grande rue commerçante du vieux centre ; sous des vitres dans le pavé, on voit des couches de l’ancienne voie de plusieurs époques, découvertes en 2002.', 'Regardez à vos pieds au milieu de la rue : des fenêtres de verre sur le passé.'],
      it: ['Via pedonale Beijing Lu', 'La principale via dello shopping del centro storico; sotto vetri nel selciato si vedono strati dell’antica strada di epoche diverse, trovati nel 2002.', 'Guarda in basso a metà via: ci sono finestre di vetro sul passato.'],
    }, { price: free }),
    P('nanyue-mausoleum', 'attraction', 23.1385, 113.261, SPIRE, 4.6, 6200, ['museums', 'history'], {
      ru: ['Мавзолей вана Наньюэ', 'Гробница Чжао Мо, второго правителя царства Наньюэ (II в. до н. э.), найденная в 1983 году; главное сокровище — нефритовый погребальный костюм.', 'Спуститесь в саму каменную гробницу — она открыта для посетителей.'],
      en: ['Mausoleum of the Nanyue King', 'The tomb of Zhao Mo, second ruler of the Nanyue kingdom (2nd century BC), found in 1983; the highlight is a jade burial suit.', 'Go down into the stone tomb itself — it’s open to visitors.'],
      es: ['Mausoleo del Rey de Nanyue', 'La tumba de Zhao Mo, segundo soberano del reino de Nanyue (siglo II a. C.), hallada en 1983; la joya es un traje funerario de jade.', 'Baja a la propia tumba de piedra: está abierta al público.'],
      de: ['Mausoleum des Nanyue-Königs', 'Das Grab von Zhao Mo, zweitem Herrscher des Nanyue-Reichs (2. Jh. v. Chr.), 1983 entdeckt; Höhepunkt ist ein Jade-Totengewand.', 'In die Steingrabkammer selbst hinabsteigen – sie ist zugänglich.'],
      fr: ['Mausolée du roi de Nanyue', 'Le tombeau de Zhao Mo, deuxième souverain du royaume de Nanyue (IIe siècle av. J.-C.), découvert en 1983 ; le clou est un habit funéraire de jade.', 'Descendez dans le tombeau de pierre lui-même : il se visite.'],
      it: ['Mausoleo del re di Nanyue', 'La tomba di Zhao Mo, secondo sovrano del regno di Nanyue (II secolo a.C.), scoperta nel 1983; il pezzo forte è un abito funebre di giada.', 'Scendi nella tomba di pietra: è aperta ai visitatori.'],
    }, { price: level(1) }),
    P('yongqing-fang', 'attraction', 23.121, 113.247, NIGHT, 4.3, 9200, ['oldtown', 'architecture', 'photo'], {
      ru: ['Юнцинфан и улица Эньнин', 'Старый квартал Сигуань с галереями-цилоу, кафе и лавками; здесь же родовой дом Брюса Ли и Музей кантонской оперы рядом.', 'Пройдите по улице Эньнин — длинные галереи защищают от дождя и солнца.'],
      en: ['Yongqing Fang and Enning Road', 'An old Xiguan quarter of qilou arcades, cafés and shops; Bruce Lee’s ancestral house is here, with the Cantonese Opera Museum nearby.', 'Walk Enning Road — the long arcades shelter you from rain and sun.'],
      es: ['Yongqing Fang y calle Enning', 'Un viejo barrio de Xiguan con soportales qilou, cafés y tiendas; aquí está la casa ancestral de Bruce Lee y cerca el Museo de la Ópera Cantonesa.', 'Recorre la calle Enning: los largos soportales protegen de lluvia y sol.'],
      de: ['Yongqing Fang und Enning Road', 'Ein altes Xiguan-Viertel mit Qilou-Arkaden, Cafés und Läden; hier steht Bruce Lees Ahnenhaus, das Kantonoper-Museum liegt nahebei.', 'Die Enning Road entlanggehen – die langen Arkaden schützen vor Regen und Sonne.'],
      fr: ['Yongqing Fang et rue Enning', 'Un vieux quartier de Xiguan aux arcades qilou, cafés et boutiques ; on y trouve la maison ancestrale de Bruce Lee et, tout près, le musée de l’Opéra cantonais.', 'Longez la rue Enning : ses arcades protègent de la pluie et du soleil.'],
      it: ['Yongqing Fang e via Enning', 'Un vecchio quartiere di Xiguan con portici qilou, caffè e botteghe; qui c’è la casa ancestrale di Bruce Lee e vicino il Museo dell’Opera Cantonese.', 'Percorri via Enning: i lunghi portici riparano da pioggia e sole.'],
    }, { spot: 'insta', price: free }),
    P('litchi-bay', 'nature', 23.1263, 113.2405, NIGHT, 4.3, 5400, ['oldtown', 'photo'], {
      ru: ['Залив Личживань', 'Тихий канал в старом районе Сигуань с личи на берегах, каменными мостиками и лодками — уголок старого Кантона.', 'Сядьте на лодку у арки — 20 минут по каналу мимо старых домов.'],
      en: ['Lizhiwan (Lychee Bay)', 'A quiet canal in old Xiguan lined with lychee trees, stone bridges and boats — a corner of old Canton.', 'Take a boat by the archway — 20 minutes along the canal past old houses.'],
      es: ['Lizhiwan (Bahía de los Lichis)', 'Un canal tranquilo en el viejo Xiguan con lichis en la orilla, puentes de piedra y barcas: un rincón del viejo Cantón.', 'Sube a una barca junto al arco: 20 minutos por el canal entre casas antiguas.'],
      de: ['Lizhiwan (Litschibucht)', 'Ein stiller Kanal im alten Xiguan mit Litschibäumen, Steinbrücken und Booten – ein Stück altes Kanton.', 'Am Torbogen ein Boot nehmen – 20 Minuten am Kanal entlang an alten Häusern vorbei.'],
      fr: ['Lizhiwan (baie des Litchis)', 'Un canal paisible du vieux Xiguan bordé de litchis, ponts de pierre et barques : un coin du vieux Canton.', 'Prenez une barque près du portique : 20 minutes sur le canal devant de vieilles maisons.'],
      it: ['Lizhiwan (Baia dei Litchi)', 'Un canale tranquillo nel vecchio Xiguan con alberi di litchi, ponti di pietra e barche: un angolo della vecchia Canton.', 'Prendi una barca vicino all’arco: 20 minuti sul canale tra vecchie case.'],
    }, { spot: 'hidden', price: free }),
    P('pearl-river-cruise', 'attraction', 23.119, 113.27, NIGHT, 4.4, 11000, ['cruise', 'city', 'views'], {
      ru: ['Вечерний круиз по Жемчужной реке', 'Прогулка на теплоходе мимо подсвеченных мостов, набережных и телебашни; отправления с пристани Тяньцзы и других причалов.', 'Садитесь на верхнюю палубу ближе к носу — лучший обзор.'],
      en: ['Pearl River night cruise', 'A boat ride past lit-up bridges, embankments and the Canton Tower; departures from Tianzi Pier and other piers.', 'Sit on the upper deck near the bow — the best view.'],
      es: ['Crucero nocturno por el río de las Perlas', 'Un paseo en barco entre puentes iluminados, paseos fluviales y la Torre de Cantón; salidas desde el muelle Tianzi y otros.', 'Siéntate en la cubierta superior cerca de la proa: la mejor vista.'],
      de: ['Abendfahrt auf dem Perlfluss', 'Eine Bootsfahrt vorbei an beleuchteten Brücken, Uferpromenaden und dem Canton Tower; Abfahrt am Tianzi-Pier und anderen Anlegern.', 'Auf dem Oberdeck nahe am Bug sitzen – die beste Sicht.'],
      fr: ['Croisière nocturne sur la rivière des Perles', 'Une balade en bateau devant les ponts illuminés, les quais et la tour de Canton ; départs du quai Tianzi et d’autres embarcadères.', 'Asseyez-vous sur le pont supérieur près de la proue : la meilleure vue.'],
      it: ['Crociera notturna sul Fiume delle Perle', 'Un giro in battello tra ponti illuminati, lungofiume e la Canton Tower; partenze dal molo Tianzi e da altri moli.', 'Siediti sul ponte superiore vicino alla prua: la vista migliore.'],
    }, { spot: 'insta', price: level(2) }),
    P('guangdong-museum', 'attraction', 23.1145, 113.327, SUNSET, 4.7, 8400, ['museums', 'architecture', 'art'], {
      ru: ['Музей провинции Гуандун', 'Музей в здании-«шкатулке» (2010) в новом центре: резьба по дереву из Чаочжоу, тушечницы Дуань, фарфор и природа Гуандуна.', 'Вход бесплатный по брони с паспортом; в понедельник обычно закрыт.'],
      en: ['Guangdong Museum', 'A museum in a “treasure box” building (2010) in the new centre: Chaozhou woodcarving, Duan inkstones, porcelain and Guangdong nature.', 'Free with a booking and passport; usually closed on Mondays.'],
      es: ['Museo de Cantón (Guangdong)', 'Un museo en un edificio-«cofre» (2010) en el nuevo centro: talla en madera de Chaozhou, tinteros Duan, porcelana y naturaleza de Cantón.', 'Gratis con reserva y pasaporte; suele cerrar los lunes.'],
      de: ['Guangdong-Museum', 'Ein Museum in einem „Schatzkästchen“-Bau (2010) im neuen Zentrum: Holzschnitzerei aus Chaozhou, Duan-Tuschsteine, Porzellan und Natur Guangdongs.', 'Eintritt frei mit Reservierung und Reisepass; montags meist geschlossen.'],
      fr: ['Musée du Guangdong', 'Un musée dans un bâtiment-« coffret » (2010) du nouveau centre : bois sculpté de Chaozhou, pierres à encre Duan, porcelaine et nature du Guangdong.', 'Gratuit sur réservation avec passeport ; fermé en général le lundi.'],
      it: ['Museo del Guangdong', 'Un museo in un edificio-«scrigno» (2010) nel nuovo centro: intaglio in legno di Chaozhou, pietre da inchiostro Duan, porcellane e natura del Guangdong.', 'Gratuito con prenotazione e passaporto; di solito chiuso il lunedì.'],
    }, { price: free }),
    P('jiang-by-chef-fei', 'food', 23.1355, 113.3285, TOWER, 4.7, 900, ['food', 'luxury'], {
      ru: ['Jiang by Chef Fei', 'Кантонский ресторан в отеле Mandarin Oriental Guangzhou: классические блюда в тонком исполнении; две звезды Michelin, одна из трёх двухзвёздочных адресов города.', 'Бронируйте за несколько недель, особенно ужин в выходные.'],
      en: ['Jiang by Chef Fei', 'A Cantonese restaurant at the Mandarin Oriental Guangzhou: classic dishes, finely executed; two Michelin stars, one of the city’s three two-star tables.', 'Book a few weeks ahead, especially for weekend dinners.'],
      es: ['Jiang by Chef Fei', 'Un restaurante cantonés en el Mandarin Oriental Guangzhou: platos clásicos con ejecución fina; dos estrellas Michelin, una de las tres mesas de dos estrellas de la ciudad.', 'Reserva con semanas de antelación, sobre todo cenas de fin de semana.'],
      de: ['Jiang by Chef Fei', 'Ein kantonesisches Restaurant im Mandarin Oriental Guangzhou: Klassiker, fein umgesetzt; zwei Michelin-Sterne, eines der drei Zwei-Sterne-Häuser der Stadt.', 'Einige Wochen vorher buchen, besonders fürs Wochenende.'],
      fr: ['Jiang by Chef Fei', 'Un restaurant cantonais du Mandarin Oriental Guangzhou : des classiques exécutés avec finesse ; deux étoiles Michelin, l’une des trois tables doublement étoilées de la ville.', 'Réservez quelques semaines avant, surtout le week-end.'],
      it: ['Jiang by Chef Fei', 'Un ristorante cantonese al Mandarin Oriental Guangzhou: classici eseguiti con finezza; due stelle Michelin, uno dei tre bistellati della città.', 'Prenota qualche settimana prima, soprattutto per il weekend.'],
    }, { price: level(3), address: 'Mandarin Oriental Guangzhou, 389 Tianhe Road, Tianhe', michelin: { award: 'star2', year: 2026 }, menu: [
      ['Cantonese tasting menu', undefined, 'кантонское дегустационное меню|Cantonese tasting menu|menú degustación cantonés|kantonesisches Degustationsmenü|menu dégustation cantonais|menu degustazione cantonese'],
      ['Cantonese classics', undefined, 'классические кантонские блюда|Cantonese classics|clásicos cantoneses|kantonesische Klassiker|classiques cantonais|classici cantonesi'],
    ] }),
    P('lai-heen', 'food', 23.121, 113.325, SUNSET, 4.6, 1100, ['food', 'luxury'], {
      ru: ['Lai Heen', 'Кантонский ресторан отеля Ritz-Carlton в новом центре Чжуцзян: классическая кантонская кухня в элегантном зале; одна звезда Michelin.', 'Днём здесь спокойнее и доступнее, чем вечером.'],
      en: ['Lai Heen', 'The Ritz-Carlton’s Cantonese restaurant in the new Zhujiang centre: classic Cantonese cooking in an elegant room; one Michelin star.', 'Lunch is calmer and easier on the wallet than dinner.'],
      es: ['Lai Heen', 'El restaurante cantonés del Ritz-Carlton en el nuevo centro Zhujiang: cocina cantonesa clásica en una sala elegante; una estrella Michelin.', 'A mediodía es más tranquilo y asequible que de noche.'],
      de: ['Lai Heen', 'Das kantonesische Restaurant des Ritz-Carlton im neuen Zentrum Zhujiang: klassische Küche Kantons in elegantem Saal; ein Michelin-Stern.', 'Mittags ruhiger und günstiger als abends.'],
      fr: ['Lai Heen', 'Le restaurant cantonais du Ritz-Carlton dans le nouveau centre de Zhujiang : cuisine cantonaise classique dans une salle élégante ; une étoile Michelin.', 'Le midi est plus calme et plus abordable que le soir.'],
      it: ['Lai Heen', 'Il ristorante cantonese del Ritz-Carlton nel nuovo centro di Zhujiang: cucina cantonese classica in una sala elegante; una stella Michelin.', 'A pranzo è più tranquillo e conveniente che a cena.'],
    }, { price: level(3), address: 'The Ritz-Carlton, Guangzhou, 3 Xing An Road, Zhujiang New Town', michelin: { award: 'star1', year: 2026 }, menu: [
      ['Cantonese classics', undefined, 'классические кантонские блюда|Cantonese classics|clásicos cantoneses|kantonesische Klassiker|classiques cantonais|classici cantonesi'],
      ['Seasonal seafood', undefined, 'сезонные морепродукты|seasonal seafood|marisco de temporada|saisonale Meeresfrüchte|fruits de mer de saison|frutti di mare di stagione'],
    ] }),
    P('taotaoju', 'food', 23.1195, 113.2475, SPIRE, 4.3, 12000, ['food', 'history'], {
      ru: ['Таотаоцзюй', 'Чайный дом с 1880 года на улице Дишифу: утренний чай-ямча с димсамами под кантонский гомон — местный ритуал.', 'Ямча — это утро: приходите к 8–9, пока всё свежее.'],
      en: ['Taotaoju', 'A teahouse since 1880 on Dishifu Road: morning yum cha with dim sum amid Cantonese chatter — a local ritual.', 'Yum cha is a morning thing: come at 8–9 while everything is fresh.'],
      es: ['Taotaoju', 'Una casa de té desde 1880 en la calle Dishifu: yum cha matinal con dim sum entre charla cantonesa, un ritual local.', 'El yum cha es por la mañana: ve a las 8–9, cuando todo está fresco.'],
      de: ['Taotaoju', 'Ein Teehaus seit 1880 in der Dishifu-Straße: morgendliches Yum Cha mit Dim Sum im kantonesischen Stimmengewirr – ein lokales Ritual.', 'Yum Cha ist morgens: um 8–9 kommen, solange alles frisch ist.'],
      fr: ['Taotaoju', 'Une maison de thé depuis 1880 rue Dishifu : yum cha du matin avec dim sum dans le brouhaha cantonais, un rituel local.', 'Le yum cha se prend le matin : venez vers 8–9 h, quand tout est frais.'],
      it: ['Taotaoju', 'Una casa da tè dal 1880 su via Dishifu: yum cha mattutino con dim sum nel vociare cantonese, un rito locale.', 'Lo yum cha è al mattino: vieni alle 8–9, quando tutto è fresco.'],
    }, { price: level(2), menu: [
      ['Har gow', undefined, 'хакао — пельмени с креветкой|shrimp dumplings|har gow, empanadillas de gamba|Har Gow, Garnelenteigtaschen|har gow, raviolis aux crevettes|har gow, ravioli di gamberi'],
      ['Char siu bao', undefined, 'булочки с чашу|barbecued pork buns|bollos de cerdo char siu|Char-Siu-Brötchen|brioches au porc laqué|panini al maiale char siu'],
      ['Siu mai', undefined, 'шаомай со свининой и креветкой|pork and shrimp siu mai|siu mai de cerdo y gamba|Siu Mai mit Schwein und Garnele|siu mai porc-crevette|siu mai di maiale e gamberi'],
    ] }),
    P('panxi', 'food', 23.1255, 113.2415, NIGHT, 4.3, 7800, ['food', 'gardens', 'history'], {
      ru: ['Паньси', 'Ресторан-сад 1947 года у озера Ливань: павильоны, пруды и галереи, а на столе — димсамы и кантонская классика.', 'Попросите столик с видом на сад или озеро.'],
      en: ['Panxi Restaurant', 'A garden restaurant from 1947 by Liwan Lake: pavilions, ponds and galleries, with dim sum and Cantonese classics on the table.', 'Ask for a table overlooking the garden or the lake.'],
      es: ['Restaurante Panxi', 'Un restaurante-jardín de 1947 junto al lago Liwan: pabellones, estanques y galerías, con dim sum y clásicos cantoneses.', 'Pide mesa con vista al jardín o al lago.'],
      de: ['Panxi-Restaurant', 'Ein Gartenrestaurant von 1947 am Liwan-See: Pavillons, Teiche und Galerien, dazu Dim Sum und kantonesische Klassiker.', 'Nach einem Tisch mit Blick auf Garten oder See fragen.'],
      fr: ['Restaurant Panxi', 'Un restaurant-jardin de 1947 au bord du lac Liwan : pavillons, bassins et galeries, avec dim sum et classiques cantonais.', 'Demandez une table avec vue sur le jardin ou le lac.'],
      it: ['Ristorante Panxi', 'Un ristorante-giardino del 1947 sul lago Liwan: padiglioni, stagni e gallerie, con dim sum e classici cantonesi.', 'Chiedi un tavolo con vista sul giardino o sul lago.'],
    }, { price: level(2), menu: [
      ['Dim sum', undefined, 'димсамы|dim sum|dim sum|Dim Sum|dim sum|dim sum'],
      ['Cheung fun', undefined, 'рисовые рулетики чхён-фань|rice noodle rolls|rollos de fideo de arroz|Reisnudelrollen|rouleaux de nouilles de riz|rotoli di pasta di riso'],
    ] }),
    P('guangzhou-restaurant', 'food', 23.1205, 113.251, SPIRE, 4.3, 9600, ['food', 'history'], {
      ru: ['Ресторан «Гуанчжоу цзюцзя»', 'Знаменитый ресторан с 1935 года на улице Вэньчан: кантонская классика, фирменная курица «Вэньчан» и лунные пряники к осени.', 'Курицу «Вэньчан» берут половинкой — на двоих в самый раз.'],
      en: ['Guangzhou Restaurant', 'A famous restaurant since 1935 on Wenchang Road: Cantonese classics, signature Wenchang chicken and mooncakes in autumn.', 'Order Wenchang chicken by the half — just right for two.'],
      es: ['Restaurante Guangzhou', 'Un famoso restaurante desde 1935 en la calle Wenchang: clásicos cantoneses, el pollo Wenchang de la casa y pasteles de luna en otoño.', 'Pide medio pollo Wenchang: perfecto para dos.'],
      de: ['Guangzhou Restaurant', 'Ein berühmtes Restaurant seit 1935 in der Wenchang-Straße: kantonesische Klassiker, Wenchang-Huhn als Spezialität und im Herbst Mondkuchen.', 'Wenchang-Huhn halb bestellen – genau richtig für zwei.'],
      fr: ['Restaurant Guangzhou', 'Un célèbre restaurant depuis 1935 rue Wenchang : classiques cantonais, poulet de Wenchang maison et gâteaux de lune à l’automne.', 'Prenez un demi-poulet de Wenchang : parfait pour deux.'],
      it: ['Ristorante Guangzhou', 'Un famoso ristorante dal 1935 su via Wenchang: classici cantonesi, il pollo Wenchang della casa e torte della luna in autunno.', 'Ordina mezzo pollo Wenchang: giusto per due.'],
    }, { price: level(2), menu: [
      ['Wenchang chicken', undefined, 'курица «Вэньчан»|Wenchang chicken|pollo Wenchang|Wenchang-Huhn|poulet de Wenchang|pollo Wenchang'],
      ['Dim sum', undefined, 'димсамы|dim sum|dim sum|Dim Sum|dim sum|dim sum'],
    ] }),
    P('lianxianglou', 'food', 23.1192, 113.2485, SPIRE, 4.2, 5200, ['food', 'history'], {
      ru: ['Ляньсянлоу', 'Кондитерская и ресторан на улице Дишифу, основанные в 1889 году; славятся лунными пряниками с пастой из семян лотоса.', 'Возьмите пару булочек с лотосовой пастой — это то, за чем сюда идут.'],
      en: ['Lianxianglou', 'A bakery-restaurant on Dishifu Road founded in 1889, famous for lotus-seed-paste mooncakes.', 'Grab a couple of lotus-paste buns — that’s what people come for.'],
      es: ['Lianxianglou', 'Una pastelería-restaurante en la calle Dishifu fundada en 1889, famosa por los pasteles de luna de pasta de semilla de loto.', 'Llévate un par de bollos de pasta de loto: a eso viene la gente.'],
      de: ['Lianxianglou', 'Eine Bäckerei mit Restaurant in der Dishifu-Straße, gegründet 1889, berühmt für Mondkuchen mit Lotussamenpaste.', 'Ein paar Lotuspaste-Brötchen mitnehmen – deswegen kommen die Leute.'],
      fr: ['Lianxianglou', 'Une pâtisserie-restaurant rue Dishifu fondée en 1889, célèbre pour ses gâteaux de lune à la pâte de graines de lotus.', 'Prenez deux brioches à la pâte de lotus : c’est pour ça qu’on vient.'],
      it: ['Lianxianglou', 'Una pasticceria-ristorante su via Dishifu fondata nel 1889, famosa per le torte della luna alla pasta di semi di loto.', 'Prendi un paio di panini alla pasta di loto: è per questo che si viene.'],
    }, { price: level(1), menu: [
      ['Lotus seed paste mooncake', undefined, 'лунный пряник с лотосовой пастой|lotus seed paste mooncake|pastel de luna de pasta de loto|Mondkuchen mit Lotuspaste|gâteau de lune à la pâte de lotus|torta della luna alla pasta di loto'],
      ['Lotus paste bun', undefined, 'булочка с лотосовой пастой|lotus paste bun|bollo de pasta de loto|Lotuspaste-Brötchen|brioche à la pâte de lotus|panino alla pasta di loto'],
    ] }),
    P('nanxin', 'food', 23.1196, 113.248, NIGHT, 4.3, 8100, ['food', 'streetfood'], {
      ru: ['Наньсинь — молочные десерты', 'Старая десертная на улице Дишифу: «двухкожное молоко» шуанпинай и имбирный молочный пудинг цзянчжуанай.', 'Шуанпинай едят и тёплым, и холодным — летом берите холодный.'],
      en: ['Nanxin milk desserts', 'An old dessert shop on Dishifu Road: “double-skin milk” and ginger milk curd.', 'Double-skin milk comes warm or cold — take it cold in summer.'],
      es: ['Postres lácteos Nanxin', 'Una vieja casa de postres en la calle Dishifu: «leche de doble piel» y cuajada de leche con jengibre.', 'La leche de doble piel se toma tibia o fría: en verano, fría.'],
      de: ['Nanxin-Milchdesserts', 'Ein alter Dessertladen in der Dishifu-Straße: „Doppelhautmilch“ und Ingwer-Milchpudding.', 'Doppelhautmilch gibt es warm oder kalt – im Sommer kalt nehmen.'],
      fr: ['Desserts lactés Nanxin', 'Une vieille maison de desserts rue Dishifu : « lait à double peau » et caillé de lait au gingembre.', 'Le lait à double peau se mange tiède ou froid : froid en été.'],
      it: ['Dolci al latte Nanxin', 'Una vecchia pasticceria su via Dishifu: «latte a doppia pelle» e cagliata di latte allo zenzero.', 'Il latte a doppia pelle si mangia tiepido o freddo: freddo d’estate.'],
    }, { price: level(1), menu: [
      ['Shuangpinai', undefined, 'шуанпинай — «двухкожное молоко»|double-skin milk pudding|pudin de leche de doble piel|Doppelhautmilch-Pudding|lait à double peau|budino di latte a doppia pelle'],
      ['Jiangzhuangnai', undefined, 'имбирный молочный пудинг|ginger milk curd|cuajada de leche con jengibre|Ingwer-Milchpudding|caillé de lait au gingembre|cagliata di latte allo zenzero'],
    ] }),
    P('yinji-changfen', 'food', 23.121, 113.2495, SPIRE, 4.2, 6300, ['food', 'streetfood'], {
      ru: ['Иньцзи — рисовые рулетики', 'Известная кантонская закусочная с чхён-фанем — тонкими рисовыми рулетиками на пару с креветкой, говядиной или яйцом под сладким соевым соусом.', 'Это классический завтрак: рулетик плюс рисовая каша — и вы как местный.'],
      en: ['Yinji rice noodle rolls', 'A well-known Cantonese eatery for cheung fun — thin steamed rice rolls with shrimp, beef or egg under sweet soy.', 'It’s a classic breakfast: a roll plus congee and you’re a local.'],
      es: ['Yinji, rollos de arroz', 'Un conocido local cantonés de cheung fun: finos rollos de arroz al vapor con gamba, ternera o huevo bajo salsa de soja dulce.', 'Es el desayuno clásico: un rollo y una gacha de arroz y eres local.'],
      de: ['Yinji Reisnudelrollen', 'Ein bekanntes kantonesisches Lokal für Cheung Fun – dünne gedämpfte Reisrollen mit Garnele, Rind oder Ei unter süßer Sojasoße.', 'Ein klassisches Frühstück: Rolle plus Reisbrei – und man ist Einheimischer.'],
      fr: ['Yinji, rouleaux de riz', 'Une adresse cantonaise connue pour le cheung fun : fins rouleaux de riz vapeur à la crevette, au bœuf ou à l’œuf, sauce soja sucrée.', 'Le petit-déjeuner classique : un rouleau et un congee, et vous voilà local.'],
      it: ['Yinji, rotoli di riso', 'Un noto locale cantonese di cheung fun: sottili rotoli di riso al vapore con gamberi, manzo o uovo in salsa di soia dolce.', 'È la colazione classica: un rotolo e un congee e sei del posto.'],
    }, { price: level(1), menu: [
      ['Shrimp cheung fun', undefined, 'рулетики с креветкой|shrimp rice rolls|rollos de arroz con gamba|Reisrollen mit Garnelen|rouleaux de riz aux crevettes|rotoli di riso ai gamberi'],
      ['Beef cheung fun', undefined, 'рулетики с говядиной|beef rice rolls|rollos de arroz con ternera|Reisrollen mit Rind|rouleaux de riz au bœuf|rotoli di riso al manzo'],
      ['Congee', undefined, 'рисовая каша|congee|gacha de arroz|Reisbrei|congee|congee'],
    ] }),
    P('bingsheng', 'food', 23.0935, 113.295, TOWER, 4.4, 7400, ['food'], {
      ru: ['Биншэн', 'Популярная гуанчжоуская сеть кантонской кухни: фирменная «чёрная» чашу-свинина и блюда из рыбы в шуньдэском стиле.', 'Чёрную чашу заказывают почти все — не пропустите.'],
      en: ['Bingsheng', 'A popular Guangzhou Cantonese chain: signature “black” char siu and Shunde-style fish dishes.', 'Almost everyone orders the black char siu — don’t miss it.'],
      es: ['Bingsheng', 'Una popular cadena cantonesa de Cantón: su char siu «negro» y platos de pescado al estilo de Shunde.', 'Casi todos piden el char siu negro: no te lo pierdas.'],
      de: ['Bingsheng', 'Eine beliebte kantonesische Kette aus Guangzhou: das „schwarze“ Char Siu und Fischgerichte nach Shunde-Art.', 'Fast alle bestellen das schwarze Char Siu – nicht verpassen.'],
      fr: ['Bingsheng', 'Une chaîne cantonaise populaire de Canton : son char siu « noir » et des plats de poisson à la mode de Shunde.', 'Presque tout le monde prend le char siu noir : ne le manquez pas.'],
      it: ['Bingsheng', 'Una popolare catena cantonese di Canton: il char siu «nero» e piatti di pesce in stile Shunde.', 'Quasi tutti ordinano il char siu nero: non perderlo.'],
    }, { price: level(2), menu: [
      ['Black char siu', undefined, '«чёрная» чашу-свинина|“black” char siu|char siu «negro»|„schwarzes“ Char Siu|char siu « noir »|char siu «nero»'],
      ['Shunde-style fish', undefined, 'рыба по-шуньдэски|Shunde-style fish|pescado al estilo Shunde|Fisch nach Shunde-Art|poisson à la mode de Shunde|pesce in stile Shunde'],
    ] }),
    P('wu-cai-ji', 'food', 23.1225, 113.245, NIGHT, 4.4, 3600, ['food', 'streetfood'], {
      ru: ['У Цайцзи', 'Маленькая лапшичная в переулке Хэлунли у улицы Датун в старом Сигуане, больше 70 лет на одном месте; отмечена в гиде Michelin. Главное — лапша с вонтонами.', 'В выходные бывает очередь — приходите в будни или пораньше.'],
      en: ['Wu Cai Ji', 'A small noodle shop in Helongli lane off Datong Road in old Xiguan, going for over 70 years and listed in the Michelin Guide. The thing to get is wonton noodles.', 'There can be a queue at weekends — come on a weekday or early.'],
      es: ['Wu Cai Ji', 'Un pequeño local de fideos en el callejón Helongli junto a la calle Datong, en el viejo Xiguan, con más de 70 años y citado en la Guía Michelin. Lo suyo: fideos con wonton.', 'Los fines de semana hay cola: ve entre semana o temprano.'],
      de: ['Wu Cai Ji', 'Ein kleiner Nudelladen in der Gasse Helongli an der Datong-Straße im alten Xiguan, seit über 70 Jahren, im Guide Michelin gelistet. Bestellen: Wan-Tan-Nudeln.', 'Am Wochenende gibt es oft eine Schlange – werktags oder früh kommen.'],
      fr: ['Wu Cai Ji', 'Une petite échoppe de nouilles dans la ruelle Helongli près de la rue Datong, dans le vieux Xiguan, depuis plus de 70 ans et citée au Guide Michelin. À prendre : les nouilles aux wontons.', 'Il y a parfois la queue le week-end : venez en semaine ou tôt.'],
      it: ['Wu Cai Ji', 'Un piccolo locale di noodle nel vicolo Helongli vicino a via Datong, nel vecchio Xiguan, da oltre 70 anni e segnalato dalla Guida Michelin. Da prendere: noodle con wonton.', 'Nel weekend c’è spesso coda: vieni in settimana o presto.'],
    }, { spot: 'hidden', price: level(1), address: '20 Helongli, Datong Road, Liwan', menu: [
      ['Wonton noodles', undefined, 'лапша с вонтонами|wonton noodles|fideos con wonton|Wan-Tan-Nudeln|nouilles aux wontons|noodle con wonton'],
      ['Beef brisket noodles', undefined, 'лапша с томлёной говяжьей грудинкой|beef brisket noodles|fideos con falda de ternera|Nudeln mit Rinderbrust|nouilles à la poitrine de bœuf|noodle con punta di petto di manzo'],
    ] }),
  ],
  routes: [
    D(['taotaoju', 'chen-clan-hall', 'litchi-bay', 'yongqing-fang', 'panxi', 'shamian-island', 'sacred-heart-cathedral', 'nanxin', 'guangzhou-restaurant'],
      'Старый Кантон: ямча, храм рода Чэнь и Шамянь|Old Canton: yum cha, the Chen Clan Hall and Shamian|El viejo Cantón: yum cha, el Salón del Clan Chen y Shamian|Altes Kanton: Yum Cha, Chen-Ahnenhalle und Shamian|Le vieux Canton : yum cha, temple des Chen et Shamian|La vecchia Canton: yum cha, sala del clan Chen e Shamian'),
    D(['yinji-changfen', 'yuexiu-park', 'nanyue-mausoleum', 'wu-cai-ji', 'six-banyan-temple', 'guangxiao-temple', 'beijing-road', 'pearl-river-cruise', 'bingsheng'],
      'Храмы, парк Юэсю и вечер на Жемчужной реке|Temples, Yuexiu Park and an evening on the Pearl River|Templos, el parque Yuexiu y una noche en el río de las Perlas|Tempel, Yuexiu-Park und ein Abend auf dem Perlfluss|Temples, parc Yuexiu et soirée sur la rivière des Perles|Templi, parco Yuexiu e una sera sul Fiume delle Perle'),
    D(['guangdong-museum', 'opera-house', 'lai-heen', 'baiyun-mountain', 'canton-tower', 'jiang-by-chef-fei'],
      'Новый центр, гора Байюнь и телебашня на закате|The new centre, Baiyun Mountain and the tower at sunset|El nuevo centro, la montaña Baiyun y la torre al atardecer|Neues Zentrum, Baiyun-Berg und der Turm bei Sonnenuntergang|Le nouveau centre, le mont Baiyun et la tour au coucher du soleil|Il nuovo centro, il monte Baiyun e la torre al tramonto'),
  ],
};

export default pack;
