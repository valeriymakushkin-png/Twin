import type { CityPack } from '../types';
import { free, level, makeDay, makePlace } from './_kit.ts';

const P = makePlace('sanya');
const D = makeDay('sanya');
const PALMS = '2B1rtQVcDgA';
const GUANYIN = 'D7MxURfe0R8';
const BEACH = '0GrHSBHytvI';
const POOL = 'yJvkNkQ5EcE';
const KITE = 'qlUdPqzyjps';

const pack: CityPack = {
  country: 'CN',
  city: 'sanya',
  places: [
    P('yalong-bay', 'nature', 18.23, 109.643, BEACH, 4.6, 31000, ['beaches', 'luxury', 'diving'], {
      ru: ['Бухта Ялунвань', 'Полумесяц белого песка длиной около 7,5 км с самой прозрачной водой у Санья и линией курортных отелей вдоль пляжа.', 'Утром вода спокойнее и прозрачнее — лучшее время для снорклинга.'],
      en: ['Yalong Bay', 'A crescent of white sand about 7.5 km long with Sanya’s clearest water and a line of resort hotels along the beach.', 'The water is calmer and clearer in the morning — the best time to snorkel.'],
      es: ['Bahía de Yalong', 'Una media luna de arena blanca de unos 7,5 km con el agua más clara de Sanya y una fila de resorts a lo largo de la playa.', 'Por la mañana el agua está más tranquila y clara: el mejor momento para bucear con tubo.'],
      de: ['Yalong-Bucht', 'Ein etwa 7,5 km langer Halbmond aus weißem Sand mit dem klarsten Wasser Sanyas und einer Reihe Resorthotels am Strand.', 'Morgens ist das Wasser ruhiger und klarer – die beste Zeit zum Schnorcheln.'],
      fr: ['Baie de Yalong', 'Un croissant de sable blanc d’environ 7,5 km, l’eau la plus claire de Sanya et une ligne d’hôtels-resorts le long de la plage.', 'Le matin, l’eau est plus calme et plus claire : idéal pour le snorkeling.'],
      it: ['Baia di Yalong', 'Una mezzaluna di sabbia bianca lunga circa 7,5 km con l’acqua più limpida di Sanya e una fila di resort lungo la spiaggia.', 'Al mattino l’acqua è più calma e limpida: il momento migliore per lo snorkeling.'],
    }, { spot: 'insta', price: free }),
    P('nanshan-guanyin', 'attraction', 18.29, 109.203, GUANYIN, 4.6, 26000, ['temples', 'views', 'culture'], {
      ru: ['Наньшань и морская Гуаньинь', 'Буддийский парк на берегу моря со статуей Гуаньинь высотой 108 м (2005) на искусственном острове: у неё три лика — один обращён к земле, два к морю.', 'Пройдите по мосту к подножию статуи — масштаб чувствуется только вблизи.'],
      en: ['Nanshan and the Guanyin of the South Sea', 'A seaside Buddhist park with a 108 m Guanyin statue (2005) on an artificial island; she has three faces — one turned inland, two to the sea.', 'Walk the bridge to the statue’s base — you only feel the scale up close.'],
      es: ['Nanshan y la Guanyin del Mar del Sur', 'Un parque budista junto al mar con una Guanyin de 108 m (2005) en una isla artificial; tiene tres rostros, uno hacia tierra y dos hacia el mar.', 'Cruza el puente hasta la base: la escala solo se siente de cerca.'],
      de: ['Nanshan und die Guanyin des Südmeers', 'Ein buddhistischer Park am Meer mit einer 108 m hohen Guanyin-Statue (2005) auf einer künstlichen Insel; sie hat drei Gesichter – eines landwärts, zwei zum Meer.', 'Über die Brücke zum Sockel gehen – die Größe spürt man nur aus der Nähe.'],
      fr: ['Nanshan et la Guanyin de la mer du Sud', 'Un parc bouddhiste en bord de mer avec une Guanyin de 108 m (2005) sur une île artificielle ; elle a trois visages, l’un vers la terre, deux vers la mer.', 'Passez le pont jusqu’au pied de la statue : l’échelle ne se ressent que de près.'],
      it: ['Nanshan e la Guanyin del Mare del Sud', 'Un parco buddhista sul mare con una Guanyin di 108 m (2005) su un’isola artificiale; ha tre volti, uno verso terra e due verso il mare.', 'Attraversa il ponte fino alla base: la scala si sente solo da vicino.'],
    }, { spot: 'insta', price: level(3) }),
    P('tianya-haijiao', 'attraction', 18.295, 109.35, KITE, 4.2, 22000, ['beaches', 'romance', 'photo'], {
      ru: ['Тянья Хайцзяо — «Край неба, угол моря»', 'Пляж с гигантскими валунами, на которых вырезаны иероглифы «Край неба» и «Угол моря» — символ самого далёкого места империи; популярен у влюблённых.', 'К закату толпы редеют, а камни красиво подсвечены солнцем.'],
      en: ['Tianya Haijiao — “Edge of the Sky, Corner of the Sea”', 'A beach of giant boulders carved with “Edge of the Sky” and “Corner of the Sea” — the symbol of the empire’s remotest place; popular with couples.', 'Towards sunset the crowds thin and the rocks glow.'],
      es: ['Tianya Haijiao, «Fin del Cielo, Rincón del Mar»', 'Una playa de rocas gigantes grabadas con «Fin del Cielo» y «Rincón del Mar», símbolo del lugar más remoto del imperio; popular entre parejas.', 'Al atardecer hay menos gente y las rocas brillan.'],
      de: ['Tianya Haijiao – „Rand des Himmels, Ecke des Meeres“', 'Ein Strand mit riesigen Felsen, in die „Rand des Himmels“ und „Ecke des Meeres“ gemeißelt sind – Sinnbild des entlegensten Orts des Reiches; beliebt bei Paaren.', 'Gegen Sonnenuntergang wird es leerer und die Felsen leuchten.'],
      fr: ['Tianya Haijiao, « Bout du ciel, coin de la mer »', 'Une plage de rochers géants gravés « Bout du ciel » et « Coin de la mer », symbole du lieu le plus reculé de l’empire ; prisée des couples.', 'Vers le coucher du soleil, la foule diminue et les rochers s’illuminent.'],
      it: ['Tianya Haijiao, «Confine del cielo, angolo del mare»', 'Una spiaggia di massi giganti incisi con «Confine del cielo» e «Angolo del mare», simbolo del luogo più remoto dell’impero; amata dalle coppie.', 'Verso il tramonto la folla cala e le rocce si accendono.'],
    }, { price: level(2) }),
    P('wuzhizhou', 'nature', 18.313, 109.763, POOL, 4.5, 24000, ['islands', 'diving', 'beaches'], {
      ru: ['Остров Учжичжоу', 'Остров в 20 минутах на катере с прозрачной водой и кораллами — главное место для дайвинга и снорклинга в Санья.', 'Возьмите первый катер утром — вода прозрачнее, а пляжи пустые.'],
      en: ['Wuzhizhou Island', 'An island 20 minutes away by boat with clear water and coral — Sanya’s top spot for diving and snorkelling.', 'Catch the first boat in the morning — clearer water and empty beaches.'],
      es: ['Isla de Wuzhizhou', 'Una isla a 20 minutos en barco con agua clara y coral, el mejor sitio de Sanya para bucear y hacer esnórquel.', 'Toma el primer barco de la mañana: agua más clara y playas vacías.'],
      de: ['Insel Wuzhizhou', 'Eine Insel 20 Bootsminuten entfernt mit klarem Wasser und Korallen – Sanyas beste Adresse zum Tauchen und Schnorcheln.', 'Das erste Boot am Morgen nehmen – klareres Wasser, leere Strände.'],
      fr: ['Île de Wuzhizhou', 'Une île à 20 minutes en bateau, eau claire et coraux : le meilleur spot de Sanya pour la plongée et le snorkeling.', 'Prenez le premier bateau du matin : eau plus claire et plages vides.'],
      it: ['Isola di Wuzhizhou', 'Un’isola a 20 minuti di barca con acqua limpida e coralli, il miglior posto di Sanya per immersioni e snorkeling.', 'Prendi la prima barca del mattino: acqua più limpida e spiagge vuote.'],
    }, { spot: 'insta', price: level(3) }),
    P('luhuitou', 'nature', 18.217, 109.504, KITE, 4.4, 15000, ['views', 'sunset', 'culture'], {
      ru: ['Парк Лухуэйтоу', 'Холм с легендой народа ли об олене, который оглянулся и превратился в девушку; со статуи на вершине — лучший вид на город, бухты и огни ночью.', 'Приезжайте к закату и оставайтесь на огни города.'],
      en: ['Luhuitou Park', 'A hill with the Li legend of a deer that looked back and turned into a girl; from the statue on top, the best view of the city, bays and night lights.', 'Come for sunset and stay for the city lights.'],
      es: ['Parque Luhuitou', 'Una colina con la leyenda li de una cierva que miró atrás y se convirtió en muchacha; desde la estatua, la mejor vista de la ciudad, las bahías y las luces nocturnas.', 'Ven al atardecer y quédate a ver las luces.'],
      de: ['Luhuitou-Park', 'Ein Hügel mit der Li-Legende vom Hirsch, der sich umdrehte und zum Mädchen wurde; von der Statue oben der beste Blick auf Stadt, Buchten und Lichter.', 'Zum Sonnenuntergang kommen und für die Lichter bleiben.'],
      fr: ['Parc de Luhuitou', 'Une colline portant la légende li de la biche qui se retourna et devint jeune fille ; depuis la statue au sommet, la plus belle vue sur la ville, les baies et les lumières.', 'Venez au coucher du soleil et restez pour les lumières.'],
      it: ['Parco di Luhuitou', 'Una collina con la leggenda li della cerva che si voltò e divenne fanciulla; dalla statua in cima la vista migliore su città, baie e luci notturne.', 'Vieni al tramonto e resta per le luci della città.'],
    }, { spot: 'insta', price: level(2) }),
    P('sanya-bay', 'nature', 18.275, 109.478, PALMS, 4.4, 18000, ['beaches', 'sunset', 'city'], {
      ru: ['Бухта Санья и «Аллея кокосовых грёз»', 'Длинный городской пляж с набережной под кокосовыми пальмами — здесь весь город встречает закат.', 'Лучший закат — у пальм напротив острова Феникс.'],
      en: ['Sanya Bay and Coconut Dream Corridor', 'A long city beach with a promenade under coconut palms — the whole city comes here for sunset.', 'The best sunset is by the palms facing Phoenix Island.'],
      es: ['Bahía de Sanya y Corredor del Sueño de Coco', 'Una larga playa urbana con paseo bajo cocoteros: toda la ciudad viene aquí al atardecer.', 'El mejor atardecer, junto a las palmeras frente a la isla del Fénix.'],
      de: ['Sanya-Bucht und Kokostraum-Korridor', 'Ein langer Stadtstrand mit Promenade unter Kokospalmen – die ganze Stadt kommt zum Sonnenuntergang.', 'Der schönste Sonnenuntergang bei den Palmen gegenüber der Phönixinsel.'],
      fr: ['Baie de Sanya et corridor du Rêve de coco', 'Une longue plage urbaine et sa promenade sous les cocotiers : toute la ville y vient au coucher du soleil.', 'Le plus beau coucher de soleil, près des palmiers face à l’île du Phénix.'],
      it: ['Baia di Sanya e Corridoio del Sogno di Cocco', 'Una lunga spiaggia cittadina con passeggiata sotto le palme da cocco: tutta la città ci viene al tramonto.', 'Il tramonto più bello è vicino alle palme di fronte all’isola della Fenice.'],
    }, { price: free }),
    P('yanoda', 'nature', 18.465, 109.66, PALMS, 4.5, 14000, ['jungle', 'waterfalls', 'nature'], {
      ru: ['Тропический лес Яноода', 'Парк влажного тропического леса в горах к северу от Санья: тропы среди фикусов-душителей, водопады и подвесные мосты.', 'Внутри влажно и много комаров — репеллент обязателен.'],
      en: ['Yanoda Rainforest', 'A tropical rainforest park in the hills north of Sanya: trails among strangler figs, waterfalls and suspension bridges.', 'It’s humid and buggy inside — repellent is a must.'],
      es: ['Selva de Yanoda', 'Un parque de selva tropical en las colinas al norte de Sanya: senderos entre higueras estranguladoras, cascadas y puentes colgantes.', 'Dentro hay humedad y mosquitos: lleva repelente.'],
      de: ['Regenwald Yanoda', 'Ein tropischer Regenwaldpark in den Hügeln nördlich von Sanya: Wege zwischen Würgefeigen, Wasserfälle und Hängebrücken.', 'Drinnen ist es feucht und voller Mücken – Mückenschutz ist Pflicht.'],
      fr: ['Forêt tropicale de Yanoda', 'Un parc de forêt tropicale humide dans les collines au nord de Sanya : sentiers parmi les figuiers étrangleurs, cascades et ponts suspendus.', 'Humide et plein de moustiques : répulsif indispensable.'],
      it: ['Foresta pluviale di Yanoda', 'Un parco di foresta pluviale tropicale sulle colline a nord di Sanya: sentieri tra fichi strangolatori, cascate e ponti sospesi.', 'Dentro è umido e pieno di zanzare: il repellente è d’obbligo.'],
    }, { price: level(3) }),
    P('phoenix-island', 'attraction', 18.244, 109.496, POOL, 4.3, 11000, ['architecture', 'city', 'photo'], {
      ru: ['Остров Феникс', 'Искусственный остров в бухте Санья с изогнутыми башнями-отелями и круизным терминалом; вечером башни горят световым шоу.', 'Световое шоу лучше смотреть с набережной бухты Санья, а не с самого острова.'],
      en: ['Phoenix Island', 'An artificial island in Sanya Bay with curved hotel towers and a cruise terminal; at night the towers stage a light show.', 'Watch the light show from the Sanya Bay promenade rather than from the island itself.'],
      es: ['Isla del Fénix', 'Una isla artificial en la bahía de Sanya con torres-hotel curvas y una terminal de cruceros; de noche las torres hacen un espectáculo de luces.', 'Mira el espectáculo desde el paseo de la bahía, no desde la isla.'],
      de: ['Phönixinsel', 'Eine künstliche Insel in der Sanya-Bucht mit geschwungenen Hoteltürmen und Kreuzfahrtterminal; abends gibt es eine Lichtshow.', 'Die Lichtshow besser von der Promenade der Sanya-Bucht aus sehen als von der Insel selbst.'],
      fr: ['Île du Phénix', 'Une île artificielle dans la baie de Sanya, tours d’hôtels incurvées et terminal de croisières ; le soir, les tours offrent un spectacle de lumières.', 'Regardez le spectacle depuis la promenade de la baie plutôt que depuis l’île.'],
      it: ['Isola della Fenice', 'Un’isola artificiale nella baia di Sanya con torri-hotel curve e un terminal crociere; di sera le torri fanno uno spettacolo di luci.', 'Guarda lo spettacolo dal lungomare della baia, non dall’isola.'],
    }, { spot: 'insta', price: free }),
    P('xiaodonghai', 'nature', 18.212, 109.512, BEACH, 4.4, 4600, ['diving', 'beaches'], {
      ru: ['Сяодунхай', 'Маленькая бухта у мыса Лухуэйтоу с кораллами и рыбами у самого берега — тихое место для снорклинга без поездки на острова.', 'Возьмите маску и заходите с камней справа — там больше рыб.'],
      en: ['Xiaodonghai', 'A small bay by Luhuitou headland with coral and fish close to shore — a quiet snorkelling spot without an island trip.', 'Bring a mask and enter from the rocks on the right — more fish there.'],
      es: ['Xiaodonghai', 'Una pequeña bahía junto al cabo Luhuitou con coral y peces cerca de la orilla, un rincón tranquilo de esnórquel sin ir a las islas.', 'Lleva gafas y entra por las rocas de la derecha: hay más peces.'],
      de: ['Xiaodonghai', 'Eine kleine Bucht am Kap Luhuitou mit Korallen und Fischen nah am Ufer – ein ruhiger Schnorchelplatz ohne Inselausflug.', 'Maske mitnehmen und rechts über die Felsen einsteigen – dort gibt es mehr Fische.'],
      fr: ['Xiaodonghai', 'Une petite baie près du cap Luhuitou, coraux et poissons tout près du bord : un spot de snorkeling tranquille sans aller sur les îles.', 'Prenez un masque et entrez par les rochers à droite : plus de poissons.'],
      it: ['Xiaodonghai', 'Una piccola baia vicino al capo Luhuitou con coralli e pesci vicino a riva: uno snorkeling tranquillo senza gita sulle isole.', 'Porta la maschera ed entra dagli scogli a destra: ci sono più pesci.'],
    }, { spot: 'hidden', price: level(1) }),
    P('tropical-paradise-forest', 'nature', 18.256, 109.64, PALMS, 4.4, 10000, ['jungle', 'views', 'adventure'], {
      ru: ['Лесной парк «Тропический рай» в Ялунвань', 'Лесистые холмы над бухтой Ялунвань с подвесным мостом и смотровыми площадками; здесь снимали комедию «Если ты единственная 2».', 'С верхней смотровой видна вся дуга пляжа Ялунвань.'],
      en: ['Yalong Bay Tropical Paradise Forest Park', 'Wooded hills above Yalong Bay with a suspension bridge and lookouts; the comedy “If You Are the One 2” was filmed here.', 'The top lookout shows the whole arc of Yalong Bay beach.'],
      es: ['Parque Forestal Paraíso Tropical de Yalong', 'Colinas boscosas sobre la bahía de Yalong con puente colgante y miradores; aquí se rodó la comedia «If You Are the One 2».', 'Desde el mirador superior se ve todo el arco de la playa.'],
      de: ['Waldpark Tropisches Paradies Yalong', 'Bewaldete Hügel über der Yalong-Bucht mit Hängebrücke und Aussichtspunkten; hier wurde die Komödie „If You Are the One 2“ gedreht.', 'Vom oberen Aussichtspunkt sieht man den ganzen Bogen des Strands.'],
      fr: ['Parc forestier Paradis tropical de Yalong', 'Des collines boisées au-dessus de la baie de Yalong, pont suspendu et belvédères ; on y a tourné la comédie « If You Are the One 2 ».', 'Du belvédère supérieur, on voit tout l’arc de la plage.'],
      it: ['Parco forestale Paradiso tropicale di Yalong', 'Colline boscose sopra la baia di Yalong con ponte sospeso e belvedere; qui è stata girata la commedia «If You Are the One 2».', 'Dal belvedere più alto si vede tutto l’arco della spiaggia.'],
    }, { price: level(3) }),
    P('binglanggu', 'attraction', 18.425, 109.645, PALMS, 4.3, 9200, ['culture', 'jungle'], {
      ru: ['Долина Бинлангу — культура ли и мяо', 'Парк культуры народов ли и мяо среди пальм арековой ореховой пальмы: деревни, мастерицы ткачества ли (ремесло в списке ЮНЕСКО) и представления.', 'Задержитесь у ткачих — они показывают, как ткут на поясном станке.'],
      en: ['Betel Nut Valley — Li and Miao culture', 'A Li and Miao cultural park among areca palms: villages, Li weavers (a craft on the UNESCO list) and performances.', 'Linger with the weavers — they show how the backstrap loom works.'],
      es: ['Valle de la Nuez de Betel, cultura li y miao', 'Un parque cultural li y miao entre palmeras de areca: aldeas, tejedoras li (artesanía en la lista de la UNESCO) y espectáculos.', 'Quédate con las tejedoras: muestran cómo funciona el telar de cintura.'],
      de: ['Betelnusstal – Kultur der Li und Miao', 'Ein Kulturpark der Li und Miao zwischen Arekapalmen: Dörfer, Li-Weberinnen (Handwerk auf der UNESCO-Liste) und Vorführungen.', 'Bei den Weberinnen verweilen – sie zeigen, wie der Rückengurtwebstuhl funktioniert.'],
      fr: ['Vallée de l’Arec, culture li et miao', 'Un parc culturel li et miao parmi les palmiers aréquiers : villages, tisserandes li (savoir-faire inscrit à l’UNESCO) et spectacles.', 'Attardez-vous près des tisserandes : elles montrent le métier à ceinture.'],
      it: ['Valle dell’Areca, cultura li e miao', 'Un parco culturale li e miao tra palme di areca: villaggi, tessitrici li (artigianato nella lista UNESCO) e spettacoli.', 'Fermati con le tessitrici: mostrano come funziona il telaio a cintura.'],
    }, { price: level(3) }),
    P('houhai-surf', 'nature', 18.288, 109.738, KITE, 4.5, 3800, ['surf', 'beaches', 'nomads'], {
      ru: ['Деревня Хоухай — сёрфинг', 'Бывшая рыбацкая деревня в бухте Хайтан, ставшая центром сёрфинга Хайнаня: школы, прокат досок и кафе у пляжа; волны лучше с октября по апрель.', 'Новичкам — урок в школе утром, пока волна мягкая.'],
      en: ['Houhai Village — surfing', 'A former fishing village in Haitang Bay turned Hainan’s surf hub: schools, board hire and beach cafés; waves are best from October to April.', 'Beginners should take a lesson in the morning while the waves are gentle.'],
      es: ['Aldea de Houhai, surf', 'Una antigua aldea pesquera de la bahía de Haitang convertida en el centro del surf de Hainan: escuelas, alquiler de tablas y cafés de playa; las olas son mejores de octubre a abril.', 'Si empiezas, toma clase por la mañana, con olas suaves.'],
      de: ['Dorf Houhai – Surfen', 'Ein früheres Fischerdorf in der Haitang-Bucht, heute Hainans Surf-Zentrum: Schulen, Brettverleih und Strandcafés; die Wellen sind von Oktober bis April am besten.', 'Anfänger nehmen morgens eine Stunde, wenn die Wellen sanft sind.'],
      fr: ['Village de Houhai, surf', 'Un ancien village de pêcheurs de la baie de Haitang devenu le centre du surf à Hainan : écoles, location de planches et cafés de plage ; les vagues sont meilleures d’octobre à avril.', 'Débutants : prenez un cours le matin, quand la vague est douce.'],
      it: ['Villaggio di Houhai, surf', 'Un ex villaggio di pescatori nella baia di Haitang diventato il centro del surf di Hainan: scuole, noleggio tavole e caffè sulla spiaggia; le onde sono migliori da ottobre ad aprile.', 'I principianti prendano una lezione al mattino, con onde morbide.'],
    }, { spot: 'hidden', price: level(2) }),
    P('duty-free-mall', 'attraction', 18.335, 109.748, POOL, 4.3, 12000, ['shopping', 'luxury'], {
      ru: ['Беспошлинный город Санья (Хайтан)', 'Огромный торговый центр в бухте Хайтан, работающий по особому режиму беспошлинной торговли Хайнаня для путешественников.', 'Для покупок нужен паспорт и билет на выезд с острова — уточните действующие лимиты.'],
      en: ['Sanya International Duty Free City (Haitang Bay)', 'A huge shopping centre in Haitang Bay operating under Hainan’s special offshore duty-free scheme for travellers.', 'You need your passport and an onward ticket off the island — check the current limits.'],
      es: ['Ciudad Libre de Impuestos de Sanya (Haitang)', 'Un enorme centro comercial en la bahía de Haitang con el régimen especial de compras libres de impuestos de Hainan para viajeros.', 'Necesitas pasaporte y billete de salida de la isla: consulta los límites vigentes.'],
      de: ['Duty Free City Sanya (Haitang-Bucht)', 'Ein riesiges Einkaufszentrum in der Haitang-Bucht mit Hainans besonderer Offshore-Duty-free-Regel für Reisende.', 'Man braucht Reisepass und ein Weiterreiseticket von der Insel – aktuelle Limits prüfen.'],
      fr: ['Cité hors taxes de Sanya (baie de Haitang)', 'Un immense centre commercial de la baie de Haitang soumis au régime hors taxes spécial de Hainan pour les voyageurs.', 'Il faut le passeport et un billet de départ de l’île : vérifiez les plafonds en vigueur.'],
      it: ['Città duty free di Sanya (Haitang)', 'Un enorme centro commerciale nella baia di Haitang con il regime speciale duty free di Hainan per i viaggiatori.', 'Servono passaporto e biglietto di partenza dall’isola: verifica i limiti in vigore.'],
    }, { price: level(3) }),
    P('first-market', 'food', 18.253, 109.505, BEACH, 4.4, 17000, ['market', 'food', 'streetfood'], {
      ru: ['Первый рынок и «обработка морепродуктов»', 'Главный рынок морепродуктов Санья: выбираете рыбу, креветки и крабов у продавцов, а ресторанчики вокруг за плату готовят их, как скажете.', 'Договоритесь о цене за кг и способе готовки до покупки — и проверяйте вес.'],
      en: ['No. 1 Market and seafood “processing”', 'Sanya’s main seafood market: pick fish, prawns and crabs from the stalls, and the eateries around it cook them however you like for a fee.', 'Agree the price per kg and cooking method before buying — and check the weight.'],
      es: ['Mercado n.º 1 y «procesado» de marisco', 'El principal mercado de marisco de Sanya: eliges pescado, gambas y cangrejos y los locales de alrededor los cocinan a tu gusto por una tarifa.', 'Acuerda precio por kilo y forma de cocinar antes de comprar, y revisa el peso.'],
      de: ['Markt Nr. 1 und Meeresfrüchte-„Verarbeitung“', 'Sanyas wichtigster Fischmarkt: Fisch, Garnelen und Krabben an den Ständen aussuchen, die Lokale ringsum bereiten sie gegen Gebühr nach Wunsch zu.', 'Kilopreis und Zubereitung vor dem Kauf vereinbaren – und das Gewicht prüfen.'],
      fr: ['Marché n° 1 et « transformation » des fruits de mer', 'Le grand marché aux fruits de mer de Sanya : choisissez poissons, crevettes et crabes aux étals, et les gargotes autour les cuisinent à votre goût moyennant un forfait.', 'Fixez le prix au kilo et la cuisson avant d’acheter, et vérifiez le poids.'],
      it: ['Mercato n. 1 e «lavorazione» del pesce', 'Il principale mercato del pesce di Sanya: scegli pesce, gamberi e granchi ai banchi e le trattorie intorno li cucinano come vuoi a pagamento.', 'Concorda prezzo al chilo e cottura prima di comprare, e controlla il peso.'],
    }, { price: level(2), menu: [
      ['Garlic-steamed prawns', undefined, 'креветки на пару с чесноком|garlic-steamed prawns|gambas al vapor con ajo|Knoblauch-Dampfgarnelen|crevettes vapeur à l’ail|gamberi al vapore con aglio'],
      ['Salt-and-pepper crab', undefined, 'краб с солью и перцем|salt-and-pepper crab|cangrejo con sal y pimienta|Salz-Pfeffer-Krabbe|crabe sel et poivre|granchio sale e pepe'],
      ['Steamed grouper', undefined, 'групер на пару|steamed grouper|mero al vapor|gedämpfter Zackenbarsch|mérou vapeur|cernia al vapore'],
    ] }),
    P('chunyuan-seafood', 'food', 18.246, 109.517, BEACH, 4.2, 9800, ['food', 'nightlife'], {
      ru: ['Морская площадь Чуньюань', 'Шумный вечерний фудкорт морепродуктов с аквариумами: выбираете живое прямо из бассейнов, и его тут же готовят.', 'Приходите к 19:00 — позже свободных столов почти нет.'],
      en: ['Chunyuan Seafood Square', 'A noisy evening seafood food court with tanks: choose live seafood straight from the tanks and it’s cooked on the spot.', 'Arrive by 7 pm — later, free tables are scarce.'],
      es: ['Plaza del Marisco Chunyuan', 'Un ruidoso patio de comidas nocturno con viveros: eliges el marisco vivo de los tanques y lo cocinan al momento.', 'Llega hacia las 19:00: después apenas hay mesas.'],
      de: ['Meeresfrüchte-Platz Chunyuan', 'Ein lauter abendlicher Meeresfrüchte-Foodcourt mit Becken: Lebendes direkt aus dem Becken wählen, sofort zubereitet.', 'Bis 19 Uhr da sein – später gibt es kaum freie Tische.'],
      fr: ['Place des fruits de mer Chunyuan', 'Une aire de restauration de fruits de mer bruyante le soir, avec viviers : choisissez le vivant dans les bacs et il est cuisiné sur place.', 'Arrivez vers 19 h : après, les tables libres sont rares.'],
      it: ['Piazza dei frutti di mare Chunyuan', 'Un rumoroso food court serale di pesce con vasche: scegli il pesce vivo dalle vasche e lo cucinano subito.', 'Arriva entro le 19: dopo, i tavoli liberi scarseggiano.'],
    }, { price: level(2), menu: [
      ['Live seafood, your way', undefined, 'живые морепродукты на ваш выбор|live seafood cooked your way|marisco vivo a tu gusto|lebende Meeresfrüchte nach Wunsch|fruits de mer vivants à votre goût|frutti di mare vivi a piacere'],
      ['Stir-fried clams', undefined, 'жареные моллюски|stir-fried clams|almejas salteadas|gebratene Venusmuscheln|palourdes sautées|vongole saltate'],
    ] }),
    P('coconut-chicken', 'food', 18.27, 109.485, PALMS, 4.5, 6300, ['food'], {
      ru: ['Кокосовая курица', 'Хайнаньский хого: курицу варят в свежей кокосовой воде, а макают в соус из лайма, чеснока и перца. Много ресторанов у «Аллеи кокосовых грёз».', 'Сначала выпейте чашку бульона без мяса — он сладкий и чистый.'],
      en: ['Coconut chicken hotpot', 'A Hainan hotpot: chicken poached in fresh coconut water, dipped in a lime, garlic and chilli sauce. Plenty of restaurants near Coconut Dream Corridor.', 'Drink a cup of the broth before the meat goes in — it’s sweet and clean.'],
      es: ['Pollo al coco', 'Un hotpot de Hainan: pollo cocido en agua de coco fresca, mojado en salsa de lima, ajo y chile. Muchos restaurantes cerca del Corredor del Sueño de Coco.', 'Bebe una taza de caldo antes de echar la carne: es dulce y limpio.'],
      de: ['Kokoshuhn-Hotpot', 'Ein Hotpot aus Hainan: Huhn in frischem Kokoswasser gegart, getunkt in Limetten-Knoblauch-Chili-Soße. Viele Lokale nahe dem Kokostraum-Korridor.', 'Vor dem Fleisch eine Tasse Brühe trinken – süß und klar.'],
      fr: ['Poulet au coco', 'Une fondue de Hainan : poulet poché dans l’eau de coco fraîche, trempé dans une sauce citron vert, ail et piment. Nombreux restaurants près du corridor du Rêve de coco.', 'Buvez une tasse de bouillon avant d’ajouter la viande : il est doux et pur.'],
      it: ['Pollo al cocco', 'Un hotpot di Hainan: pollo cotto nell’acqua di cocco fresca, intinto in salsa di lime, aglio e peperoncino. Molti ristoranti vicino al Corridoio del Sogno di Cocco.', 'Bevi una tazza di brodo prima di mettere la carne: è dolce e pulito.'],
    }, { price: level(2), menu: [
      ['Coconut chicken hotpot', undefined, 'курица в кокосовой воде|chicken in coconut water hotpot|pollo en agua de coco|Huhn in Kokoswasser|poulet à l’eau de coco|pollo in acqua di cocco'],
      ['Lime-chilli dip', undefined, 'соус с лаймом, чесноком и перцем|lime, garlic and chilli dip|salsa de lima, ajo y chile|Limetten-Knoblauch-Chili-Dip|sauce citron vert, ail, piment|salsa di lime, aglio e peperoncino'],
    ] }),
    P('wenchang-chicken', 'food', 18.25, 109.51, PALMS, 4.3, 4900, ['food'], {
      ru: ['Курица Вэньчан и рис по-хайнаньски', 'Самое знаменитое блюдо Хайнаня: отварная курица породы вэньчан с нежной кожей и рис, сваренный на курином бульоне.', 'Соус с имбирём и лаймом — обязательная часть; просите его отдельно.'],
      en: ['Wenchang chicken and Hainan rice', 'Hainan’s most famous dish: poached Wenchang-breed chicken with silky skin and rice cooked in chicken stock.', 'The ginger-and-lime sauce is essential — ask for it on the side.'],
      es: ['Pollo Wenchang y arroz de Hainan', 'El plato más famoso de Hainan: pollo de raza Wenchang hervido, de piel sedosa, con arroz cocido en caldo de pollo.', 'La salsa de jengibre y lima es imprescindible: pídela aparte.'],
      de: ['Wenchang-Huhn und Hainan-Reis', 'Hainans berühmtestes Gericht: pochiertes Wenchang-Huhn mit seidiger Haut und Reis, in Hühnerbrühe gekocht.', 'Die Ingwer-Limetten-Soße ist Pflicht – separat bestellen.'],
      fr: ['Poulet de Wenchang et riz de Hainan', 'Le plat le plus célèbre de Hainan : poulet de race Wenchang poché à la peau soyeuse et riz cuit au bouillon de volaille.', 'La sauce gingembre-citron vert est essentielle : demandez-la à part.'],
      it: ['Pollo Wenchang e riso di Hainan', 'Il piatto più famoso di Hainan: pollo di razza Wenchang lessato, dalla pelle setosa, con riso cotto nel brodo di pollo.', 'La salsa zenzero e lime è fondamentale: chiedila a parte.'],
    }, { price: level(1), menu: [
      ['Wenchang chicken', undefined, 'отварная курица вэньчан|poached Wenchang chicken|pollo Wenchang hervido|pochiertes Wenchang-Huhn|poulet de Wenchang poché|pollo Wenchang lessato'],
      ['Chicken rice', undefined, 'рис на курином бульоне|rice cooked in chicken stock|arroz en caldo de pollo|Reis in Hühnerbrühe|riz au bouillon de volaille|riso cotto nel brodo di pollo'],
    ] }),
    P('hainan-fen', 'food', 18.254, 109.508, BEACH, 4.3, 3600, ['food', 'streetfood'], {
      ru: ['Хайнань-фэнь на завтрак', 'Тонкая рисовая лапша, перемешанная с соусом, жареным арахисом, говядиной и маринованной зеленью; суп подают отдельно — классический завтрак острова.', 'Сначала ешьте лапшу «всухую», потом залейте её бульоном.'],
      en: ['Hainan fen for breakfast', 'Thin rice noodles tossed with sauce, fried peanuts, beef and pickled greens, with soup on the side — the island’s classic breakfast.', 'Eat the noodles “dry” first, then pour in the broth.'],
      es: ['Hainan fen para desayunar', 'Fideos de arroz finos mezclados con salsa, cacahuetes fritos, ternera y verdura encurtida, con sopa aparte: el desayuno clásico de la isla.', 'Come primero los fideos «secos» y luego añade el caldo.'],
      de: ['Hainan Fen zum Frühstück', 'Dünne Reisnudeln mit Soße, gerösteten Erdnüssen, Rind und eingelegtem Grün, Suppe extra – das klassische Inselfrühstück.', 'Erst die Nudeln „trocken“ essen, dann die Brühe dazugießen.'],
      fr: ['Hainan fen au petit-déjeuner', 'De fines nouilles de riz mêlées de sauce, cacahuètes grillées, bœuf et légumes marinés, soupe à part : le petit-déjeuner classique de l’île.', 'Mangez d’abord les nouilles « sèches », puis versez le bouillon.'],
      it: ['Hainan fen a colazione', 'Sottili noodle di riso conditi con salsa, arachidi tostate, manzo e verdure sottaceto, con zuppa a parte: la colazione classica dell’isola.', 'Mangia prima i noodle «asciutti», poi aggiungi il brodo.'],
    }, { price: level(1), menu: [
      ['Hainan fen', undefined, 'рисовая лапша с арахисом и говядиной|rice noodles with peanuts and beef|fideos de arroz con cacahuete y ternera|Reisnudeln mit Erdnüssen und Rind|nouilles de riz cacahuètes-bœuf|noodle di riso con arachidi e manzo'],
      ['Side soup', undefined, 'суп отдельно|soup on the side|sopa aparte|Suppe extra|soupe à part|zuppa a parte'],
    ] }),
    P('qingbuliang', 'food', 18.223, 109.518, BEACH, 4.4, 5700, ['streetfood'], {
      ru: ['Цинбулян', 'Освежающий хайнаньский десерт: кокосовое молоко со льдом, бобами, саго, таро, фруктами и желе — продают по всему Даунхаю.', 'Лучшее средство от жары после пляжа — берите большую порцию.'],
      en: ['Qingbuliang', 'A refreshing Hainan dessert: iced coconut milk with beans, sago, taro, fruit and jelly — sold all over Dadonghai.', 'The best cure for the heat after the beach — get the big bowl.'],
      es: ['Qingbuliang', 'Un postre refrescante de Hainan: leche de coco con hielo, judías, sagú, taro, fruta y gelatina; se vende por todo Dadonghai.', 'El mejor remedio contra el calor tras la playa: pide el cuenco grande.'],
      de: ['Qingbuliang', 'Ein erfrischendes Dessert aus Hainan: Kokosmilch auf Eis mit Bohnen, Sago, Taro, Obst und Gelee – überall in Dadonghai.', 'Das beste Mittel gegen die Hitze nach dem Strand – die große Schale nehmen.'],
      fr: ['Qingbuliang', 'Un dessert rafraîchissant de Hainan : lait de coco glacé avec haricots, sagou, taro, fruits et gelée, vendu partout à Dadonghai.', 'Le meilleur remède contre la chaleur après la plage : prenez le grand bol.'],
      it: ['Qingbuliang', 'Un dolce rinfrescante di Hainan: latte di cocco ghiacciato con fagioli, sago, taro, frutta e gelatina, venduto ovunque a Dadonghai.', 'Il miglior rimedio al caldo dopo la spiaggia: prendi la ciotola grande.'],
    }, { price: level(1), menu: [
      ['Coconut milk qingbuliang', undefined, 'цинбулян на кокосовом молоке|qingbuliang with coconut milk|qingbuliang con leche de coco|Qingbuliang mit Kokosmilch|qingbuliang au lait de coco|qingbuliang al latte di cocco'],
      ['Fresh coconut', undefined, 'свежий кокос|fresh coconut|coco fresco|frische Kokosnuss|noix de coco fraîche|cocco fresco'],
    ] }),
    P('laobacha', 'food', 18.256, 109.504, PALMS, 4.2, 2100, ['food', 'culture'], {
      ru: ['Лаобача — «чай для пап»', 'Хайнаньские чайные, где пожилые местные часами сидят за чаем и закусками — пирожками, вонтонами и рисовыми лепёшками — за символические деньги.', 'Здесь не торопятся: закажите чайник и пару закусок и просто наблюдайте.'],
      en: ['Laobacha — “old dad tea”', 'Hainan teahouses where older locals sit for hours over tea and snacks — buns, wontons and rice cakes — for pocket change.', 'Nobody rushes here: order a pot and a couple of snacks and just watch.'],
      es: ['Laobacha, el «té de los papás»', 'Casas de té de Hainan donde los mayores pasan horas con té y tentempiés, bollos, wontons y pasteles de arroz, por muy poco.', 'Aquí nadie tiene prisa: pide una tetera y un par de tapas y observa.'],
      de: ['Laobacha – „Papa-Tee“', 'Teehäuser in Hainan, in denen ältere Einheimische stundenlang bei Tee und Snacks – Brötchen, Wantans, Reiskuchen – für ein paar Münzen sitzen.', 'Hier hetzt niemand: eine Kanne und ein paar Snacks bestellen und zuschauen.'],
      fr: ['Laobacha, le « thé des papas »', 'Des maisons de thé de Hainan où les anciens passent des heures autour d’un thé et d’en-cas — brioches, wontons, gâteaux de riz — pour trois fois rien.', 'Personne ne se presse : commandez une théière et quelques en-cas, et observez.'],
      it: ['Laobacha, il «tè dei papà»', 'Case da tè di Hainan dove gli anziani passano ore tra tè e stuzzichini, panini, wonton e dolci di riso, per pochi spiccioli.', 'Qui nessuno ha fretta: ordina una teiera e qualche stuzzichino e osserva.'],
    }, { spot: 'hidden', price: level(1), menu: [
      ['Pot of tea', undefined, 'чайник чая|pot of tea|tetera|Kanne Tee|théière|teiera'],
      ['Rice cakes and buns', undefined, 'рисовые лепёшки и пирожки|rice cakes and buns|pasteles de arroz y bollos|Reiskuchen und Brötchen|gâteaux de riz et brioches|dolci di riso e panini'],
    ] }),
    P('zaopocu-hotpot', 'food', 18.249, 109.506, BEACH, 4.3, 2700, ['food'], {
      ru: ['Хого цзаопоцу', 'Хайнаньский кисло-острый хого на цзаопоцу — уксусе, сброженном из винного жмыха; в нём варят морепродукты, рыбу и зелень.', 'Бульон кислый и бодрящий — хороший выбор, если надоели сладкие соусы.'],
      en: ['Zaopocu hotpot', 'A sour-and-spicy Hainan hotpot based on zaopocu — vinegar fermented from wine lees; seafood, fish and greens are cooked in it.', 'The broth is tangy and bracing — a good pick if you’re tired of sweet sauces.'],
      es: ['Hotpot de zaopocu', 'Un hotpot agripicante de Hainan con zaopocu, vinagre fermentado de lías de vino; en él se cuecen marisco, pescado y verduras.', 'El caldo es ácido y vivificante: buena opción si te cansan las salsas dulces.'],
      de: ['Zaopocu-Hotpot', 'Ein sauer-scharfer Hotpot aus Hainan auf Basis von Zaopocu – aus Weintrester vergorenem Essig; darin gart man Meeresfrüchte, Fisch und Grünzeug.', 'Die Brühe ist säuerlich und belebend – gut, wenn man genug von süßen Soßen hat.'],
      fr: ['Fondue au zaopocu', 'Une fondue aigre-piquante de Hainan au zaopocu, vinaigre fermenté de lies de vin ; on y cuit fruits de mer, poisson et légumes.', 'Le bouillon est acidulé et tonique : bon choix si les sauces sucrées vous lassent.'],
      it: ['Hotpot di zaopocu', 'Un hotpot agro-piccante di Hainan a base di zaopocu, aceto fermentato dalla feccia del vino; ci si cuociono frutti di mare, pesce e verdure.', 'Il brodo è aspro e corroborante: buona scelta se sei stanco delle salse dolci.'],
    }, { price: level(2), menu: [
      ['Zaopocu seafood hotpot', undefined, 'кисло-острый хого с морепродуктами|sour-spicy seafood hotpot|hotpot agripicante de marisco|sauer-scharfer Meeresfrüchte-Hotpot|fondue aigre-piquante aux fruits de mer|hotpot agro-piccante di mare'],
      ['Fish slices', undefined, 'ломтики рыбы|fish slices|lonchas de pescado|Fischscheiben|tranches de poisson|fettine di pesce'],
    ] }),
    P('bamboo-rice', 'food', 18.4255, 109.6455, PALMS, 4.1, 1600, ['food', 'culture'], {
      ru: ['Рис в бамбуке у народа ли', 'Блюдо народа ли: клейкий рис с мясом запекают прямо в стволе бамбука над огнём — его пробуют в долине Бинлангу и в деревнях ли.', 'Бамбук раскалывают при вас — рис пахнет свежей древесиной.'],
      en: ['Li bamboo-tube rice', 'A Li dish: glutinous rice with meat roasted inside a bamboo tube over the fire — try it at Betel Nut Valley and in Li villages.', 'The bamboo is split open in front of you — the rice smells of fresh wood.'],
      es: ['Arroz en bambú de los li', 'Un plato li: arroz glutinoso con carne asado dentro de una caña de bambú al fuego; pruébalo en el Valle de la Nuez de Betel y en aldeas li.', 'Parten el bambú delante de ti: el arroz huele a madera fresca.'],
      de: ['Bambusreis der Li', 'Ein Li-Gericht: Klebreis mit Fleisch, im Bambusrohr über dem Feuer gegart – im Betelnusstal und in Li-Dörfern probieren.', 'Der Bambus wird vor Ihnen aufgespalten – der Reis duftet nach frischem Holz.'],
      fr: ['Riz en bambou des Li', 'Un plat li : riz gluant à la viande rôti dans un tube de bambou sur le feu ; à goûter à la vallée de l’Arec et dans les villages li.', 'On fend le bambou devant vous : le riz sent le bois frais.'],
      it: ['Riso nel bambù dei li', 'Un piatto li: riso glutinoso con carne arrostito in una canna di bambù sul fuoco; da provare nella Valle dell’Areca e nei villaggi li.', 'Il bambù viene spaccato davanti a te: il riso profuma di legno fresco.'],
    }, { price: level(1), menu: [
      ['Bamboo-tube rice', undefined, 'клейкий рис с мясом в бамбуке|glutinous rice with meat in bamboo|arroz glutinoso con carne en bambú|Klebreis mit Fleisch im Bambus|riz gluant à la viande en bambou|riso glutinoso con carne nel bambù'],
      ['Li rice wine', undefined, 'рисовое вино ли|Li rice wine|vino de arroz li|Li-Reiswein|vin de riz li|vino di riso li'],
    ] }),
  ],
  routes: [
    D(['hainan-fen', 'xiaodonghai', 'luhuitou', 'wenchang-chicken', 'phoenix-island', 'sanya-bay', 'first-market'],
      'Сяодунхай, Лухуэйтоу и закат в бухте Санья|Xiaodonghai, Luhuitou and sunset on Sanya Bay|Xiaodonghai, Luhuitou y atardecer en la bahía de Sanya|Xiaodonghai, Luhuitou und Sonnenuntergang an der Sanya-Bucht|Xiaodonghai, Luhuitou et coucher de soleil sur la baie de Sanya|Xiaodonghai, Luhuitou e tramonto sulla baia di Sanya'),
    D(['wuzhizhou', 'houhai-surf', 'duty-free-mall', 'yalong-bay', 'tropical-paradise-forest', 'qingbuliang', 'chunyuan-seafood'],
      'Остров Учжичжоу, сёрфинг в Хоухае и бухта Ялунвань|Wuzhizhou Island, Houhai surf and Yalong Bay|La isla de Wuzhizhou, surf en Houhai y la bahía de Yalong|Insel Wuzhizhou, Surfen in Houhai und Yalong-Bucht|L’île de Wuzhizhou, surf à Houhai et baie de Yalong|L’isola di Wuzhizhou, surf a Houhai e baia di Yalong'),
    D(['nanshan-guanyin', 'tianya-haijiao', 'coconut-chicken', 'laobacha', 'zaopocu-hotpot'],
      'Наньшань, «Край неба» и хайнаньская кухня|Nanshan, the “Edge of the Sky” and Hainan food|Nanshan, el «Fin del Cielo» y la cocina de Hainan|Nanshan, „Rand des Himmels“ und Hainans Küche|Nanshan, le « Bout du ciel » et la cuisine de Hainan|Nanshan, il «Confine del cielo» e la cucina di Hainan'),
  ],
};

export default pack;
