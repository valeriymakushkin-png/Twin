import type { CityPack } from '../types';
import { free, level, makeDay, makePlace } from './_kit.ts';

const P = makePlace('chengdu');
const D = makeDay('chengdu');
const PANDA = 'rbHAnOL5oto';
const BUDDHA = 'cKlloJkCPm0';
const STREET = 'Eg7zkiPNtpU';

const pack: CityPack = {
  country: 'CN',
  city: 'chengdu',
  places: [
    P('wuhou-shrine', 'attraction', 30.646, 104.048, STREET, 4.4, 16000, ['temples', 'history'], {
      ru: ['Храм Ухоуцы', 'Храм в честь Чжугэ Ляна и правителя Лю Бэя эпохи Троецарствия с красными стенами и бамбуковыми аллеями.', 'Рядом — улица Цзиньли, их удобно совместить.'],
      en: ['Wuhou Shrine', 'A temple honouring Zhuge Liang and the ruler Liu Bei of the Three Kingdoms era, with red walls and bamboo lanes.', 'Jinli Street is right next door — combine them.'],
      es: ['Santuario Wuhou', 'Un templo en honor de Zhuge Liang y del soberano Liu Bei de los Tres Reinos, con muros rojos y senderos de bambú.', 'La calle Jinli está al lado: combínalos.'],
      de: ['Wuhou-Schrein', 'Ein Tempel zu Ehren von Zhuge Liang und dem Herrscher Liu Bei aus der Zeit der Drei Reiche, mit roten Mauern und Bambuswegen.', 'Die Jinli-Straße liegt direkt daneben – beides verbinden.'],
      fr: ['Temple Wuhou', 'Un temple honorant Zhuge Liang et le souverain Liu Bei des Trois Royaumes, aux murs rouges et allées de bambous.', 'La rue Jinli est juste à côté : combinez-les.'],
      it: ['Tempio Wuhou', 'Un tempio in onore di Zhuge Liang e del sovrano Liu Bei dei Tre Regni, con mura rosse e vialetti di bambù.', 'La via Jinli è accanto: abbinale.'],
    }, { spot: 'insta', price: level(1) }),
    P('qingyang-palace', 'attraction', 30.665, 104.045, STREET, 4.4, 8700, ['temples', 'history'], {
      ru: ['Даосский храм Цинъянгун', 'Один из старейших даосских храмов юго-запада Китая с залами, бронзовыми козами и монахами в традиционных одеждах.', 'Потрите бронзовую «козу» — по поверью, это помогает от болезней.'],
      en: ['Qingyang Palace', 'One of southwest China’s oldest Taoist temples, with halls, bronze goats and monks in traditional robes.', 'Rub the bronze “goat” — it’s said to cure ailments.'],
      es: ['Palacio Qingyang', 'Uno de los templos taoístas más antiguos del suroeste de China, con salones, cabras de bronce y monjes con túnicas tradicionales.', 'Frota la «cabra» de bronce: dicen que cura dolencias.'],
      de: ['Qingyang-Palast', 'Einer der ältesten Taoistentempel Südwestchinas mit Hallen, Bronzeziegen und Mönchen in traditionellen Gewändern.', 'Die Bronze-„Ziege“ reiben – das soll Leiden heilen.'],
      fr: ['Palais Qingyang', 'L’un des plus anciens temples taoïstes du sud-ouest de la Chine, avec pavillons, chèvres de bronze et moines en robes traditionnelles.', 'Frottez la « chèvre » de bronze : elle guérirait les maux.'],
      it: ['Palazzo Qingyang', 'Uno dei più antichi templi taoisti della Cina sud-occidentale, con sale, capre di bronzo e monaci in abiti tradizionali.', 'Strofina la «capra» di bronzo: si dice curi i malanni.'],
    }, { price: level(1) }),
    P('peoples-park', 'nature', 30.6585, 104.057, STREET, 4.5, 14000, ['gardens', 'culture'], {
      ru: ['Народный парк', 'Городской парк, где пенсионеры поют, танцуют и пьют чай, а родители устраивают «рынок невест» с анкетами детей.', 'Лучше всего утром в выходные — жизнь парка в самом разгаре.'],
      en: ['People’s Park', 'A city park where retirees sing, dance and drink tea, and parents run a “marriage market” with their children’s profiles.', 'Best on a weekend morning, when the park is in full swing.'],
      es: ['Parque del Pueblo', 'Un parque donde los jubilados cantan, bailan y toman té, y los padres montan un «mercado matrimonial» con perfiles de sus hijos.', 'Mejor un sábado o domingo por la mañana, en plena actividad.'],
      de: ['Volkspark', 'Ein Stadtpark, in dem Rentner singen, tanzen und Tee trinken und Eltern einen „Heiratsmarkt“ mit Steckbriefen ihrer Kinder betreiben.', 'Am besten am Wochenendmorgen, wenn alles in Gang ist.'],
      fr: ['Parc du Peuple', 'Un parc où les retraités chantent, dansent et boivent du thé, et où les parents tiennent un « marché aux mariages » avec les profils de leurs enfants.', 'Idéal un matin de week-end, en pleine animation.'],
      it: ['Parco del Popolo', 'Un parco dove i pensionati cantano, ballano e bevono tè, e i genitori tengono un «mercato matrimoniale» con i profili dei figli.', 'Il meglio la mattina nel weekend, quando è in piena attività.'],
    }, { price: free }),
    P('daci-temple-taikoo-li', 'attraction', 30.6545, 104.083, STREET, 4.5, 21000, ['temples', 'shopping', 'architecture'], {
      ru: ['Храм Дацысы и Taikoo Li', 'Древний буддийский храм посреди модного квартала Taikoo Li с невысокими домами в сычуаньском стиле и бутиками.', 'Контраст храма и витрин — лучший вечером, когда включается подсветка.'],
      en: ['Daci Temple and Taikoo Li', 'An ancient Buddhist temple inside the stylish Taikoo Li quarter of low Sichuan-style buildings and boutiques.', 'The temple-and-shopfront contrast is best in the evening when the lights come on.'],
      es: ['Templo Daci y Taikoo Li', 'Un antiguo templo budista dentro del moderno barrio Taikoo Li, de edificios bajos de estilo sichuanés y boutiques.', 'El contraste de templo y escaparates luce más por la noche con las luces.'],
      de: ['Daci-Tempel und Taikoo Li', 'Ein alter buddhistischer Tempel im eleganten Viertel Taikoo Li mit niedrigen Bauten im Sichuan-Stil und Boutiquen.', 'Der Kontrast von Tempel und Schaufenstern ist abends mit Beleuchtung am schönsten.'],
      fr: ['Temple Daci et Taikoo Li', 'Un ancien temple bouddhiste au cœur du quartier chic de Taikoo Li, bâtiments bas de style sichuanais et boutiques.', 'Le contraste temple-vitrines est plus beau le soir, illuminé.'],
      it: ['Tempio Daci e Taikoo Li', 'Un antico tempio buddhista nel quartiere elegante di Taikoo Li, edifici bassi in stile sichuanese e boutique.', 'Il contrasto tra tempio e vetrine rende meglio la sera, con le luci.'],
    }, { spot: 'insta', price: free }),
    P('ifs-panda', 'attraction', 30.655, 104.08, PANDA, 4.4, 12000, ['photo', 'shopping'], {
      ru: ['Панда на IFS', 'Гигантская скульптура панды, «карабкающейся» по стене торгового центра IFS, со смотровой террасой на крыше.', 'Поднимитесь на крышу торгового центра — панду видно вплотную.'],
      en: ['The IFS panda', 'A giant panda sculpture “climbing” the wall of the IFS mall, with a viewing terrace on the roof.', 'Go up to the mall’s roof to see the panda up close.'],
      es: ['El panda del IFS', 'Una escultura gigante de panda que «trepa» por la fachada del centro comercial IFS, con terraza en la azotea.', 'Sube a la azotea del centro comercial para verlo de cerca.'],
      de: ['Der IFS-Panda', 'Eine riesige Pandaskulptur, die an der Fassade der IFS-Mall „hochklettert“, mit Aussichtsterrasse auf dem Dach.', 'Aufs Dach der Mall gehen – dort sieht man den Panda ganz nah.'],
      fr: ['Le panda de l’IFS', 'Une sculpture géante de panda qui « escalade » la façade du centre IFS, avec une terrasse sur le toit.', 'Montez sur le toit du centre pour voir le panda de près.'],
      it: ['Il panda dell’IFS', 'Una scultura gigante di panda che «si arrampica» sulla facciata del centro IFS, con terrazza sul tetto.', 'Sali sul tetto del centro per vedere il panda da vicino.'],
    }, { spot: 'insta', price: free }),
    P('jinsha-site-museum', 'attraction', 30.681, 104.013, BUDDHA, 4.6, 9800, ['museums', 'history'], {
      ru: ['Музей Цзиньша', 'Музей на месте раскопок древнего царства Шу (около 3000 лет назад): золотая диадема «Солнечная птица» и изделия из нефрита и слоновой кости.', 'Посмотрите золотую «Солнечную птицу» — её изображение стало символом китайского культурного наследия.'],
      en: ['Jinsha Site Museum', 'A museum on the excavation site of the ancient Shu kingdom (about 3,000 years ago): the golden “Sun and Immortal Birds” disc and jade and ivory objects.', 'Seek out the golden Sun Bird disc — it became the symbol of China’s cultural heritage.'],
      es: ['Museo de Jinsha', 'Un museo en el yacimiento del antiguo reino de Shu (hace unos 3000 años): el disco de oro del «Pájaro del Sol» y objetos de jade y marfil.', 'Busca el disco de oro del Pájaro del Sol, símbolo del patrimonio cultural chino.'],
      de: ['Jinsha-Museum', 'Ein Museum auf der Ausgrabungsstätte des alten Shu-Reichs (vor rund 3000 Jahren): die goldene „Sonnenvogel“-Scheibe sowie Jade und Elfenbein.', 'Die goldene Sonnenvogel-Scheibe suchen – Symbol des chinesischen Kulturerbes.'],
      fr: ['Musée du site de Jinsha', 'Un musée sur le site de fouilles de l’ancien royaume de Shu (il y a environ 3 000 ans) : le disque d’or de « l’Oiseau solaire », jades et ivoires.', 'Cherchez le disque d’or de l’Oiseau solaire, devenu emblème du patrimoine chinois.'],
      it: ['Museo del sito di Jinsha', 'Un museo sul sito di scavo dell’antico regno di Shu (circa 3000 anni fa): il disco d’oro dell’«Uccello del Sole», giade e avori.', 'Cerca il disco d’oro dell’Uccello del Sole, simbolo del patrimonio culturale cinese.'],
    }, { price: level(1) }),
    P('sichuan-museum', 'attraction', 30.66, 104.03, BUDDHA, 4.5, 7600, ['museums', 'art', 'history'], {
      ru: ['Музей провинции Сычуань', 'Большой музей у Хижины Ду Фу: бронза, буддийская скульптура, керамика и вышивка Сычуани.', 'Удобно совместить с Хижиной Ду Фу — они через дорогу.'],
      en: ['Sichuan Museum', 'A large museum by Du Fu’s Thatched Cottage: bronzes, Buddhist sculpture, ceramics and Sichuan embroidery.', 'Easy to combine with Du Fu’s Thatched Cottage across the road.'],
      es: ['Museo de Sichuan', 'Un gran museo junto a la Cabaña de Du Fu: bronces, escultura budista, cerámica y bordado de Sichuan.', 'Se combina fácil con la Cabaña de Du Fu, al otro lado de la calle.'],
      de: ['Sichuan-Museum', 'Ein großes Museum an Du Fus strohgedeckter Hütte: Bronzen, buddhistische Skulptur, Keramik und Sichuan-Stickerei.', 'Gut mit Du Fus Hütte auf der anderen Straßenseite kombinierbar.'],
      fr: ['Musée du Sichuan', 'Un grand musée près de la chaumière de Du Fu : bronzes, sculpture bouddhique, céramiques et broderie du Sichuan.', 'Facile à combiner avec la chaumière de Du Fu, en face.'],
      it: ['Museo del Sichuan', 'Un grande museo vicino alla Capanna di Du Fu: bronzi, scultura buddhista, ceramiche e ricamo del Sichuan.', 'Si abbina bene alla Capanna di Du Fu, dall’altra parte della strada.'],
    }, { price: free }),
    P('dujiangyan', 'attraction', 30.999, 103.607, BUDDHA, 4.6, 17000, ['history', 'unesco', 'nature'], {
      ru: ['Ирригационная система Дуцзянъянь', 'Система каналов 256 года до н. э., которая до сих пор орошает Сычуаньскую равнину без плотины; объект ЮНЕСКО.', 'Удобно совместить с горой Цинчэн — 15 минут на такси.'],
      en: ['Dujiangyan Irrigation System', 'A canal system from 256 BC that still waters the Sichuan plain without a dam; a UNESCO site.', 'Easy to pair with Mount Qingcheng — 15 minutes by taxi.'],
      es: ['Sistema de riego de Dujiangyan', 'Un sistema de canales del 256 a. C. que aún riega la llanura de Sichuan sin presa; Patrimonio UNESCO.', 'Se combina con el monte Qingcheng, a 15 minutos en taxi.'],
      de: ['Bewässerungssystem Dujiangyan', 'Ein Kanalsystem von 256 v. Chr., das die Sichuan-Ebene bis heute ohne Staudamm bewässert; UNESCO-Welterbe.', 'Gut mit dem Berg Qingcheng zu verbinden – 15 Minuten per Taxi.'],
      fr: ['Système d’irrigation de Dujiangyan', 'Un réseau de canaux de 256 av. J.-C. qui irrigue encore la plaine du Sichuan sans barrage ; site UNESCO.', 'Facile à combiner avec le mont Qingcheng, à 15 minutes en taxi.'],
      it: ['Sistema d’irrigazione di Dujiangyan', 'Un sistema di canali del 256 a.C. che irriga ancora la pianura del Sichuan senza diga; sito UNESCO.', 'Si abbina al monte Qingcheng, a 15 minuti di taxi.'],
    }, { price: level(2) }),
    P('mount-qingcheng', 'nature', 30.9, 103.57, BUDDHA, 4.6, 13000, ['mountains', 'temples', 'hiking'], {
      ru: ['Гора Цинчэн', 'Одна из колыбелей даосизма: лесные тропы, лестницы и храмы в тумане, канатная дорога наверх; объект ЮНЕСКО.', 'Поднимитесь на канатке и спуститесь пешком через храмы — около 2–3 часов.'],
      en: ['Mount Qingcheng', 'One of the cradles of Taoism: forest trails, stairs and temples in the mist, with a cable car up; a UNESCO site.', 'Ride the cable car up and walk down past the temples — about 2–3 hours.'],
      es: ['Monte Qingcheng', 'Una de las cunas del taoísmo: senderos de bosque, escaleras y templos entre la niebla, con teleférico; Patrimonio UNESCO.', 'Sube en teleférico y baja a pie por los templos: unas 2–3 horas.'],
      de: ['Berg Qingcheng', 'Eine der Wiegen des Taoismus: Waldpfade, Treppen und Tempel im Nebel, mit Seilbahn; UNESCO-Welterbe.', 'Mit der Seilbahn hinauf und zu Fuß an den Tempeln vorbei hinab – etwa 2–3 Stunden.'],
      fr: ['Mont Qingcheng', 'L’un des berceaux du taoïsme : sentiers forestiers, escaliers et temples dans la brume, téléphérique ; site UNESCO.', 'Montez en téléphérique et redescendez à pied par les temples : 2 à 3 heures.'],
      it: ['Monte Qingcheng', 'Una delle culle del taoismo: sentieri nel bosco, scalinate e templi nella nebbia, con funivia; sito UNESCO.', 'Sali in funivia e scendi a piedi tra i templi: circa 2–3 ore.'],
    }, { spot: 'hidden', price: level(2) }),
    P('sichuan-opera', 'attraction', 30.662, 104.043, STREET, 4.3, 7900, ['culture', 'nightlife'], {
      ru: ['Сычуаньская опера (Шуфэн Яюнь)', 'Вечернее шоу в чайном театре с «бяньлянь» — мгновенной сменой масок, — а также кукольным театром и игрой на эрху.', 'Садитесь ближе к сцене: смена масок происходит за доли секунды.'],
      en: ['Sichuan opera (Shufeng Yayun)', 'An evening show in a teahouse theatre with “bian lian” — split-second mask changing — plus puppetry and erhu music.', 'Sit close to the stage: the masks change in a fraction of a second.'],
      es: ['Ópera de Sichuan (Shufeng Yayun)', 'Un espectáculo nocturno en un teatro-casa de té con «bian lian», cambio de máscaras en un instante, títeres y erhu.', 'Siéntate cerca del escenario: las máscaras cambian en una fracción de segundo.'],
      de: ['Sichuan-Oper (Shufeng Yayun)', 'Eine Abendshow im Teehaustheater mit „Bian Lian“ – blitzschnellem Maskenwechsel – sowie Puppenspiel und Erhu.', 'Nah an der Bühne sitzen: Die Masken wechseln in Sekundenbruchteilen.'],
      fr: ['Opéra du Sichuan (Shufeng Yayun)', 'Un spectacle du soir dans un théâtre-maison de thé avec le « bian lian », changement de masques éclair, marionnettes et erhu.', 'Asseyez-vous près de la scène : les masques changent en une fraction de seconde.'],
      it: ['Opera del Sichuan (Shufeng Yayun)', 'Uno spettacolo serale in un teatro-casa da tè con il «bian lian», cambio di maschere fulmineo, marionette ed erhu.', 'Siediti vicino al palco: le maschere cambiano in una frazione di secondo.'],
    }, { price: level(2) }),
    P('huanglongxi', 'attraction', 30.317, 103.964, STREET, 4.2, 6900, ['oldtown', 'history'], {
      ru: ['Древний городок Хуанлунси', 'Городок у слияния рек с деревянными домами на сваях, мостиками и старыми баньянами в часе от центра.', 'Приходите в будний день — в выходные здесь много местных туристов.'],
      en: ['Huanglongxi ancient town', 'A riverside town with wooden houses on stilts, little bridges and old banyans, an hour from the centre.', 'Go on a weekday — weekends bring many domestic tourists.'],
      es: ['Pueblo antiguo de Huanglongxi', 'Un pueblo junto al río con casas de madera sobre pilotes, puentecillos y viejos banianos, a una hora del centro.', 'Ve entre semana: el fin de semana hay mucho turismo local.'],
      de: ['Altstadt Huanglongxi', 'Ein Flussstädtchen mit Holzhäusern auf Stelzen, Brückchen und alten Banyanbäumen, eine Stunde vom Zentrum.', 'Werktags kommen – am Wochenende viele Inlandstouristen.'],
      fr: ['Bourg ancien de Huanglongxi', 'Un bourg au bord de l’eau aux maisons de bois sur pilotis, petits ponts et vieux banians, à une heure du centre.', 'Allez-y en semaine : le week-end, beaucoup de touristes chinois.'],
      it: ['Antico borgo di Huanglongxi', 'Un borgo sul fiume con case di legno su palafitte, ponticelli e vecchi baniani, a un’ora dal centro.', 'Vai in settimana: nel weekend c’è molto turismo interno.'],
    }, { price: free }),
    P('yu-zhi-lan', 'food', 30.668, 104.056, STREET, 4.7, 900, ['food', 'luxury'], {
      ru: ['Yu Zhi Lan', 'Камерный ресторан шефа Лань Гуйцзюня (с 2011 года): утончённая сычуаньская кухня на старинном фарфоре и знаменитая лапша тоньше волоса.', 'Бронируйте задолго — мест очень мало.'],
      en: ['Yu Zhi Lan', 'Chef Lan Guijun’s intimate restaurant (since 2011): refined Sichuan cooking on antique porcelain and famous hair-thin noodles.', 'Book well ahead — there are very few seats.'],
      es: ['Yu Zhi Lan', 'El íntimo restaurante del chef Lan Guijun (desde 2011): cocina sichuanesa refinada en porcelana antigua y sus famosos fideos finos como un cabello.', 'Reserva con mucha antelación: hay muy pocas plazas.'],
      de: ['Yu Zhi Lan', 'Das intime Restaurant von Küchenchef Lan Guijun (seit 2011): feine Sichuan-Küche auf antikem Porzellan und berühmte haardünne Nudeln.', 'Lange vorher buchen – es gibt sehr wenige Plätze.'],
      fr: ['Yu Zhi Lan', 'Le restaurant intime du chef Lan Guijun (depuis 2011) : cuisine sichuanaise raffinée sur porcelaine ancienne et célèbres nouilles fines comme un cheveu.', 'Réservez longtemps à l’avance : très peu de places.'],
      it: ['Yu Zhi Lan', 'Il ristorante intimo dello chef Lan Guijun (dal 2011): raffinata cucina del Sichuan su porcellana antica e famosi noodle sottili come capelli.', 'Prenota con largo anticipo: pochissimi posti.'],
    }, { price: level(3), address: '24 Changfa Street, Qingyang', michelin: { award: 'star2', year: 2027 }, menu: [
      ['Tasting menu', undefined, 'дегустационное меню|tasting menu|menú degustación|Degustationsmenü|menu dégustation|menu degustazione'],
      ['Hair-thin noodles', undefined, 'лапша тоньше волоса в прозрачном бульоне|hair-thin noodles in clear broth|fideos finísimos en caldo claro|haardünne Nudeln in klarer Brühe|nouilles très fines en bouillon clair|noodle sottilissimi in brodo chiaro'],
    ] }),
    P('zhong-shui-jiao', 'food', 30.657, 104.081, STREET, 4.1, 7200, ['food', 'history'], {
      ru: ['Чжун Шуйцзяо', 'Знаменитая закусочная с 1893 года: пельмени с красным маслом — в сладковатом соевом соусе с чили.', 'Возьмите сет с разными закусками — так попробуете и пельмени, и холодные блюда.'],
      en: ['Zhong Shui Jiao', 'A famous eatery since 1893: red-oil dumplings in sweetish soy sauce and chilli.', 'Order a mixed snack set to try the dumplings and cold dishes too.'],
      es: ['Zhong Shui Jiao', 'Una famosa casa de comidas desde 1893: empanadillas en aceite rojo con soja dulce y chile.', 'Pide un surtido para probar empanadillas y platos fríos.'],
      de: ['Zhong Shui Jiao', 'Ein berühmtes Lokal seit 1893: Teigtaschen in Rotöl mit süßlicher Sojasoße und Chili.', 'Ein gemischtes Snackset bestellen, um auch kalte Gerichte zu probieren.'],
      fr: ['Zhong Shui Jiao', 'Une adresse célèbre depuis 1893 : raviolis à l’huile rouge, sauce soja sucrée et piment.', 'Prenez un assortiment pour goûter raviolis et plats froids.'],
      it: ['Zhong Shui Jiao', 'Una celebre trattoria dal 1893: ravioli all’olio rosso con soia dolciastra e peperoncino.', 'Prendi un assortimento per provare anche i piatti freddi.'],
    }, { price: level(1), menu: [
      ['Zhong dumplings', undefined, 'пельмени в красном масле|dumplings in red chilli oil|empanadillas en aceite rojo|Teigtaschen in Chiliöl|raviolis à l’huile pimentée|ravioli in olio rosso piccante'],
      ['Snack sampler', undefined, 'ассорти сычуаньских закусок|Sichuan snack sampler|surtido de tapas de Sichuan|Sichuan-Snackauswahl|assortiment d’en-cas du Sichuan|assaggi di snack del Sichuan'],
    ] }),
    P('lai-tang-yuan', 'food', 30.657, 104.078, STREET, 4.0, 5100, ['food', 'history'], {
      ru: ['Лай Таньюань', 'Лавка с 1894 года, где варят танъюань — клейкие рисовые шарики с чёрным кунжутом в сладком отваре.', 'Хорошее начало дня или десерт после острого.'],
      en: ['Lai Tang Yuan', 'A shop since 1894 cooking tangyuan — glutinous rice balls filled with black sesame in a sweet broth.', 'A good start to the day or a dessert after spicy food.'],
      es: ['Lai Tang Yuan', 'Una tienda desde 1894 que cuece tangyuan, bolitas de arroz glutinoso con sésamo negro en caldo dulce.', 'Buen comienzo del día o postre tras el picante.'],
      de: ['Lai Tang Yuan', 'Ein Laden seit 1894, der Tangyuan kocht – Klebreisbällchen mit schwarzem Sesam in süßer Brühe.', 'Ein guter Tagesstart oder Dessert nach Scharfem.'],
      fr: ['Lai Tang Yuan', 'Une échoppe depuis 1894 qui cuit des tangyuan, boulettes de riz gluant au sésame noir dans un bouillon sucré.', 'Un bon début de journée ou un dessert après le piquant.'],
      it: ['Lai Tang Yuan', 'Un negozio dal 1894 che cuoce i tangyuan, palline di riso glutinoso al sesamo nero in brodo dolce.', 'Un buon inizio di giornata o un dolce dopo il piccante.'],
    }, { price: level(1), menu: [
      ['Black sesame tangyuan', undefined, 'рисовые шарики с чёрным кунжутом|rice balls with black sesame|bolitas de arroz con sésamo negro|Reisbällchen mit schwarzem Sesam|boulettes de riz au sésame noir|palline di riso al sesamo nero'],
      ['Sesame dipping sauce', undefined, 'кунжутный соус для макания|sesame dipping sauce|salsa de sésamo para mojar|Sesam-Dip|sauce au sésame|salsa al sesamo'],
    ] }),
    P('fu-qi-fei-pian', 'food', 30.6575, 104.08, STREET, 4.0, 6400, ['food'], {
      ru: ['Фу Ци Фэй Пянь', 'Ресторан знаменитого холодного блюда «супружеские лёгкие» — тонкие ломтики говядины и субпродуктов в чили-масле с арахисом.', 'Блюдо острое — закажите к нему рис и холодный чай.'],
      en: ['Fu Qi Fei Pian', 'A restaurant named after the famous cold dish “husband-and-wife lung slices” — thin beef and offal in chilli oil with peanuts.', 'It’s spicy — order rice and cold tea alongside.'],
      es: ['Fu Qi Fei Pian', 'Un restaurante del famoso plato frío «láminas del matrimonio»: ternera y casquería en aceite de chile con cacahuetes.', 'Es picante: pide arroz y té frío.'],
      de: ['Fu Qi Fei Pian', 'Ein Restaurant des berühmten kalten Gerichts „Ehepaar-Lungenscheiben“ – dünnes Rind und Innereien in Chiliöl mit Erdnüssen.', 'Es ist scharf – Reis und kalten Tee dazu bestellen.'],
      fr: ['Fu Qi Fei Pian', 'Un restaurant du célèbre plat froid « tranches de poumon du couple » : bœuf et abats en fines tranches à l’huile pimentée et cacahuètes.', 'C’est piquant : prenez riz et thé froid.'],
      it: ['Fu Qi Fei Pian', 'Un ristorante del famoso piatto freddo «fettine di polmone dei coniugi»: manzo e frattaglie in olio piccante con arachidi.', 'È piccante: ordina riso e tè freddo.'],
    }, { price: level(1), menu: [
      ['Fu qi fei pian', undefined, 'говядина и субпродукты в чили-масле|beef and offal in chilli oil|ternera y casquería en aceite de chile|Rind und Innereien in Chiliöl|bœuf et abats à l’huile pimentée|manzo e frattaglie in olio piccante'],
      ['Dan dan noodles', undefined, 'лапша дань-дань|dan dan noodles|fideos dan dan|Dan-Dan-Nudeln|nouilles dan dan|noodle dan dan'],
    ] }),
    P('ma-wang-zi', 'food', 30.655, 104.072, STREET, 4.4, 6300, ['food'], {
      ru: ['Ма Ван Цзы', 'Ресторан сычуаньской кухни с аккуратной подачей классики: курица гунбао, рыба в соусе юйсян и острые закуски.', 'Попросите блюда «не слишком острыми» — здесь это понимают.'],
      en: ['Ma Wang Zi', 'A Sichuan restaurant serving neatly plated classics: kung pao chicken, fish-fragrant dishes and spicy starters.', 'Ask for dishes “not too spicy” — they understand.'],
      es: ['Ma Wang Zi', 'Un restaurante sichuanés con clásicos bien presentados: pollo kung pao, platos «aroma de pescado» y entrantes picantes.', 'Pide los platos «no muy picantes»: lo entienden.'],
      de: ['Ma Wang Zi', 'Ein Sichuan-Restaurant mit schön angerichteten Klassikern: Kung-Pao-Huhn, „Fischduft“-Gerichte und scharfe Vorspeisen.', 'Gerichte „nicht zu scharf“ bestellen – das versteht man hier.'],
      fr: ['Ma Wang Zi', 'Un restaurant du Sichuan servant des classiques soignés : poulet kung pao, plats « parfum de poisson » et entrées épicées.', 'Demandez « pas trop piquant » : ils comprennent.'],
      it: ['Ma Wang Zi', 'Un ristorante del Sichuan con classici ben presentati: pollo kung pao, piatti «profumo di pesce» e antipasti piccanti.', 'Chiedi i piatti «non troppo piccanti»: capiscono.'],
    }, { price: level(2), menu: [
      ['Kung pao chicken', undefined, 'курица гунбао с арахисом|kung pao chicken with peanuts|pollo kung pao con cacahuetes|Kung-Pao-Huhn mit Erdnüssen|poulet kung pao aux cacahuètes|pollo kung pao con arachidi'],
      ['Fish-fragrant aubergine', undefined, 'баклажаны в соусе юйсян|fish-fragrant aubergine|berenjena «aroma de pescado»|Aubergine „Fischduft“|aubergine « parfum de poisson »|melanzane «profumo di pesce»'],
    ] }),
    P('shu-jiu-xiang-hotpot', 'food', 30.65, 104.075, PANDA, 4.3, 9800, ['food', 'nightlife'], {
      ru: ['Шу Цзю Сян (хого)', 'Популярная сеть сычуаньского хого: острый бульон с перцем хуацзяо и мясо, грибы и тофу, которые варят сами.', 'Закажите котёл «юаньян» — пополам острый и неострый бульон.'],
      en: ['Shu Jiu Xiang (hot pot)', 'A popular Sichuan hot-pot chain: spicy broth with Sichuan pepper and meat, mushrooms and tofu you cook yourself.', 'Order the “yuanyang” pot — half spicy, half mild broth.'],
      es: ['Shu Jiu Xiang (hot pot)', 'Una cadena popular de hot pot de Sichuan: caldo picante con pimienta de Sichuan y carne, setas y tofu que cueces tú.', 'Pide la olla «yuanyang»: mitad picante, mitad suave.'],
      de: ['Shu Jiu Xiang (Feuertopf)', 'Eine beliebte Sichuan-Feuertopf-Kette: scharfe Brühe mit Sichuanpfeffer, Fleisch, Pilze und Tofu zum Selbstgaren.', 'Den „Yuanyang“-Topf bestellen – halb scharf, halb mild.'],
      fr: ['Shu Jiu Xiang (fondue)', 'Une chaîne populaire de fondue du Sichuan : bouillon épicé au poivre du Sichuan, viandes, champignons et tofu à cuire soi-même.', 'Prenez la marmite « yuanyang » : moitié épicée, moitié douce.'],
      it: ['Shu Jiu Xiang (hot pot)', 'Una catena popolare di hot pot del Sichuan: brodo piccante al pepe di Sichuan, carne, funghi e tofu da cuocere da sé.', 'Ordina la pentola «yuanyang»: metà piccante, metà delicata.'],
    }, { price: level(2), menu: [
      ['Yuanyang hot pot', undefined, 'котёл с острым и неострым бульоном|half-spicy, half-mild hot pot|olla mitad picante, mitad suave|halb scharfer, halb milder Feuertopf|fondue moitié épicée, moitié douce|pentola metà piccante, metà delicata'],
      ['Beef tripe', undefined, 'говяжий рубец|beef tripe|callos de ternera|Rinderpansen|tripes de bœuf|trippa di manzo'],
    ] }),
    P('yulin-chuanchuan', 'food', 30.632, 104.06, STREET, 4.2, 5900, ['food', 'streetfood', 'nightlife'], {
      ru: ['Чуаньчуань в районе Юйлинь', 'Чэндуский «хого на шпажках»: сотни шпажек с мясом и овощами в остром бульоне; платят по числу палочек.', 'Ночная еда района Юйлинь — заходите после прогулки по кварталу.'],
      en: ['Chuanchuan in Yulin', 'Chengdu’s “hot pot on skewers”: hundreds of skewers of meat and veg in spicy broth, paid for by the number of sticks.', 'A late-night Yulin favourite — drop in after a stroll round the neighbourhood.'],
      es: ['Chuanchuan en Yulin', 'El «hot pot en brochetas» de Chengdu: cientos de brochetas de carne y verdura en caldo picante; se paga por palito.', 'Comida nocturna de Yulin: entra tras pasear por el barrio.'],
      de: ['Chuanchuan in Yulin', 'Chengdus „Feuertopf am Spieß“: Hunderte Spieße mit Fleisch und Gemüse in scharfer Brühe, bezahlt nach Anzahl der Stäbchen.', 'Ein Late-Night-Klassiker in Yulin – nach einem Bummel durchs Viertel.'],
      fr: ['Chuanchuan à Yulin', 'La « fondue en brochettes » de Chengdu : des centaines de brochettes de viande et légumes en bouillon épicé, payées au nombre de bâtonnets.', 'Un classique nocturne de Yulin, après une balade dans le quartier.'],
      it: ['Chuanchuan a Yulin', 'L’«hot pot allo spiedo» di Chengdu: centinaia di spiedini di carne e verdure in brodo piccante, pagati a bastoncino.', 'Un classico notturno di Yulin, dopo un giro nel quartiere.'],
    }, { spot: 'hidden', price: level(1), menu: [
      ['Mixed skewers', undefined, 'ассорти шпажек в остром бульоне|mixed skewers in spicy broth|brochetas variadas en caldo picante|gemischte Spieße in scharfer Brühe|brochettes variées en bouillon épicé|spiedini misti in brodo piccante'],
      ['Lotus root and potato', undefined, 'корень лотоса и картофель на шпажках|lotus root and potato skewers|brochetas de raíz de loto y patata|Lotuswurzel- und Kartoffelspieße|brochettes de lotus et pomme de terre|spiedini di loto e patata'],
    ] }),
    P('jianshe-road-snacks', 'food', 30.67, 104.105, STREET, 4.1, 7300, ['food', 'streetfood'], {
      ru: ['Улица закусок Цзяньшэ-лу', 'Уличная еда, которую едят местные студенты и семьи: жареные лепёшки, шашлычки, сладкий тофу и бобовые десерты.', 'Приходите вечером голодными и пробуйте понемногу.'],
      en: ['Jianshe Road snack street', 'Street food eaten by local students and families: fried flatbreads, skewers, sweet tofu and bean desserts.', 'Come hungry in the evening and graze a little at each stall.'],
      es: ['Calle de tapas de Jianshe Road', 'Comida callejera de estudiantes y familias locales: tortas fritas, brochetas, tofu dulce y postres de judía.', 'Ve con hambre por la noche y picotea en cada puesto.'],
      de: ['Snackstraße Jianshe Road', 'Streetfood für Studenten und Familien: frittierte Fladen, Spieße, süßer Tofu und Bohnendesserts.', 'Abends hungrig kommen und an jedem Stand etwas naschen.'],
      fr: ['Rue des en-cas de Jianshe Road', 'La street food des étudiants et familles du coin : galettes frites, brochettes, tofu sucré et desserts aux haricots.', 'Venez le soir affamé et grignotez un peu partout.'],
      it: ['Via degli snack di Jianshe Road', 'Il cibo di strada di studenti e famiglie: focacce fritte, spiedini, tofu dolce e dolci di fagioli.', 'Vieni la sera affamato e assaggia un po’ a ogni banco.'],
    }, { price: level(1), menu: [
      ['Guokui', undefined, 'хрустящая лепёшка с начинкой|crisp stuffed flatbread|torta crujiente rellena|knuspriges gefülltes Fladenbrot|galette croustillante farcie|focaccia croccante ripiena'],
      ['Douhua', undefined, 'нежный тофу-пудинг|silken tofu pudding|pudin de tofu sedoso|Seidentofu-Pudding|pudding de tofu soyeux|budino di tofu morbido'],
    ] }),
    P('laoma-rabbit-head', 'food', 30.653, 104.07, STREET, 4.2, 5600, ['food', 'streetfood'], {
      ru: ['Шуанлю Лаома Тутоу', 'Сеть, где подают чэндуский деликатес — острые кроличьи головы в маринаде с перцем; едят руками в перчатках.', 'Берите «у сянь» (пряные) — если острое пугает.'],
      en: ['Shuangliu Laoma Tutou', 'A chain serving Chengdu’s delicacy — spicy marinated rabbit heads, eaten with gloved hands.', 'Order the “wuxiang” (five-spice) version if heat scares you.'],
      es: ['Shuangliu Laoma Tutou', 'Una cadena con la delicia de Chengdu: cabezas de conejo marinadas y picantes, que se comen con guantes.', 'Pide la versión «wuxiang» (cinco especias) si temes el picante.'],
      de: ['Shuangliu Laoma Tutou', 'Eine Kette mit Chengdus Delikatesse – scharf marinierten Kaninchenköpfen, mit Handschuhen gegessen.', 'Die „Wuxiang“-Variante (Fünf-Gewürze) nehmen, wenn Schärfe schreckt.'],
      fr: ['Shuangliu Laoma Tutou', 'Une chaîne servant la spécialité de Chengdu : têtes de lapin marinées et épicées, mangées avec des gants.', 'Prenez la version « wuxiang » (cinq épices) si le piment vous fait peur.'],
      it: ['Shuangliu Laoma Tutou', 'Una catena con la specialità di Chengdu: teste di coniglio marinate e piccanti, da mangiare coi guanti.', 'Prendi la versione «wuxiang» (cinque spezie) se temi il piccante.'],
    }, { price: level(1), menu: [
      ['Spicy rabbit head', undefined, 'острая кроличья голова|spicy rabbit head|cabeza de conejo picante|scharfer Kaninchenkopf|tête de lapin épicée|testa di coniglio piccante'],
      ['Five-spice rabbit head', undefined, 'кроличья голова с пятью специями|five-spice rabbit head|cabeza de conejo a las cinco especias|Kaninchenkopf mit fünf Gewürzen|tête de lapin aux cinq épices|testa di coniglio alle cinque spezie'],
    ] }),
    P('wenshu-vegetarian', 'food', 30.6745, 104.073, BUDDHA, 4.3, 3900, ['food'], {
      ru: ['Вегетарианский ресторан монастыря Вэньшу', 'Буддийская постная кухня при монастыре Вэньшу: блюда, похожие на мясные, но целиком из тофу, грибов и овощей.', 'После обеда посидите в чайном дворике монастыря.'],
      en: ['Wenshu Monastery vegetarian restaurant', 'Buddhist vegetarian cooking at Wenshu Monastery: dishes that look like meat but are made entirely of tofu, mushrooms and vegetables.', 'After lunch, sit in the monastery’s tea courtyard.'],
      es: ['Restaurante vegetariano del monasterio Wenshu', 'Cocina vegetariana budista en el monasterio Wenshu: platos que parecen de carne pero son de tofu, setas y verduras.', 'Tras comer, siéntate en el patio de té del monasterio.'],
      de: ['Vegetarisches Restaurant im Wenshu-Kloster', 'Buddhistisch-vegetarische Küche im Wenshu-Kloster: Gerichte, die wie Fleisch aussehen, aber ganz aus Tofu, Pilzen und Gemüse bestehen.', 'Nach dem Essen im Teehof des Klosters sitzen.'],
      fr: ['Restaurant végétarien du monastère Wenshu', 'Cuisine végétarienne bouddhique au monastère Wenshu : des plats qui imitent la viande mais faits de tofu, champignons et légumes.', 'Après le repas, asseyez-vous dans la cour à thé du monastère.'],
      it: ['Ristorante vegetariano del monastero Wenshu', 'Cucina vegetariana buddhista al monastero Wenshu: piatti che sembrano di carne ma sono di tofu, funghi e verdure.', 'Dopo pranzo siediti nel cortile del tè del monastero.'],
    }, { price: level(1), menu: [
      ['Mock-meat dishes', undefined, 'блюда-имитации мяса из тофу|tofu dishes made to look like meat|platos de tofu que imitan carne|Tofugerichte, die wie Fleisch aussehen|plats de tofu façon viande|piatti di tofu che imitano la carne'],
      ['Vegetarian noodles', undefined, 'вегетарианская лапша|vegetarian noodles|fideos vegetarianos|vegetarische Nudeln|nouilles végétariennes|noodle vegetariani'],
    ] }),
  ],
  routes: [
    D(['=chengdu-panda-base', '=chengdu-wenshu-monastery', 'wenshu-vegetarian', 'peoples-park', '=chengdu-heming-teahouse', '=chengdu-kuanzhai-alley', 'shu-jiu-xiang-hotpot', 'sichuan-opera'],
      'Панды, монастырь Вэньшу, чайные и сычуаньская опера|Pandas, Wenshu Monastery, teahouses and Sichuan opera|Pandas, el monasterio Wenshu, casas de té y ópera de Sichuan|Pandas, Wenshu-Kloster, Teehäuser und Sichuan-Oper|Pandas, monastère Wenshu, maisons de thé et opéra du Sichuan|Panda, monastero Wenshu, case da tè e opera del Sichuan'),
    D(['wuhou-shrine', '=chengdu-jinli-street', '=chengdu-chen-mapo-tofu', '=chengdu-du-fu-thatched-cottage', 'sichuan-museum', 'qingyang-palace', 'daci-temple-taikoo-li', 'ifs-panda', 'yu-zhi-lan'],
      'Троецарствие, Ду Фу и вечерний Taikoo Li|The Three Kingdoms, Du Fu and Taikoo Li by evening|Los Tres Reinos, Du Fu y Taikoo Li al anochecer|Drei Reiche, Du Fu und Taikoo Li am Abend|Les Trois Royaumes, Du Fu et Taikoo Li le soir|I Tre Regni, Du Fu e Taikoo Li la sera'),
    D(['lai-tang-yuan', 'dujiangyan', 'mount-qingcheng', 'jinsha-site-museum', 'yulin-chuanchuan'],
      'Дуцзянъянь, гора Цинчэн и сокровища Цзиньша|Dujiangyan, Mount Qingcheng and the Jinsha treasures|Dujiangyan, el monte Qingcheng y los tesoros de Jinsha|Dujiangyan, der Qingcheng und die Jinsha-Schätze|Dujiangyan, le mont Qingcheng et les trésors de Jinsha|Dujiangyan, il monte Qingcheng e i tesori di Jinsha'),
  ],
};

export default pack;
