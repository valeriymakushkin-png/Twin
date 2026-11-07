import type { CityPack } from '../types';
import { level, makeDay, makePlace } from './_kit.ts';

const P = makePlace('zhangjiajie');
const D = makeDay('zhangjiajie');
const MIST = 'vlVBSU4xUy8';
const GREEN = 'u8NvkrbZqp8';
const TOWER = 's7-T9llF6Hw';
const TIANMEN = 'zXlmo-uvwn8';
const ROAD = 'Rd_p2bL8I18';

const pack: CityPack = {
  country: 'CN',
  city: 'zhangjiajie',
  places: [
    P('yuanjiajie', 'nature', 29.345, 110.425, MIST, 4.8, 31000, ['mountains', 'views', 'unesco'], {
      ru: ['Юаньцзяцзе и «Гора Аватар»', 'Тысячи песчаниковых столбов в тумане — самое известное место парка Улинъюань (ЮНЕСКО); столб «Южная небесная колонна» в 2010 году назвали «Горой Аллилуйя» из «Аватара».', 'Утренний туман бывает чаще весной и осенью — приходите к открытию.'],
      en: ['Yuanjiajie and “Avatar Mountain”', 'Thousands of sandstone pillars in the mist — the most famous part of the Wulingyuan park (UNESCO); in 2010 the “Southern Sky Column” was renamed “Avatar Hallelujah Mountain”.', 'Morning mist is more common in spring and autumn — be there at opening.'],
      es: ['Yuanjiajie y la «Montaña Avatar»', 'Miles de pilares de arenisca entre la niebla, la parte más famosa del parque de Wulingyuan (UNESCO); en 2010 la «Columna del Cielo del Sur» pasó a llamarse «Montaña Aleluya de Avatar».', 'La niebla matinal es más frecuente en primavera y otoño: llega a la apertura.'],
      de: ['Yuanjiajie und der „Avatar-Berg“', 'Tausende Sandsteinsäulen im Nebel – der berühmteste Teil des Wulingyuan-Parks (UNESCO); 2010 wurde die „Säule des Südhimmels“ in „Avatar Hallelujah Mountain“ umbenannt.', 'Morgennebel gibt es öfter im Frühling und Herbst – zur Öffnung da sein.'],
      fr: ['Yuanjiajie et la « montagne d’Avatar »', 'Des milliers de piliers de grès dans la brume, la partie la plus célèbre du parc de Wulingyuan (UNESCO) ; en 2010, la « Colonne du ciel du Sud » a été rebaptisée « Montagne Alléluia d’Avatar ».', 'La brume du matin est plus fréquente au printemps et en automne : soyez là à l’ouverture.'],
      it: ['Yuanjiajie e la «montagna di Avatar»', 'Migliaia di pilastri di arenaria nella nebbia, la parte più famosa del parco di Wulingyuan (UNESCO); nel 2010 la «Colonna del Cielo del Sud» è stata ribattezzata «Montagna Alleluia di Avatar».', 'La nebbia mattutina è più frequente in primavera e autunno: arriva all’apertura.'],
    }, { spot: 'insta', price: level(3) }),
    P('bailong-elevator', 'attraction', 29.346, 110.437, TOWER, 4.4, 14000, ['views', 'adventure'], {
      ru: ['Лифт Байлун', 'Стеклянный лифт высотой 326 м на отвесной скале — самый высокий наружный лифт в мире по Книге рекордов Гиннесса; поднимает к Юаньцзяцзе меньше чем за 2 минуты.', 'В сезон очередь может быть больше часа — приходите рано утром или к вечеру.'],
      en: ['Bailong Elevator', 'A 326 m glass elevator on a sheer cliff — the world’s highest outdoor elevator per Guinness; it lifts you to Yuanjiajie in under 2 minutes.', 'In season the queue can exceed an hour — come early morning or late afternoon.'],
      es: ['Ascensor Bailong', 'Un ascensor de cristal de 326 m en un acantilado vertical, el ascensor exterior más alto del mundo según Guinness; sube a Yuanjiajie en menos de 2 minutos.', 'En temporada la cola supera a veces la hora: ve temprano o al final de la tarde.'],
      de: ['Bailong-Aufzug', 'Ein 326 m hoher Glasaufzug an einer senkrechten Felswand – laut Guinness der höchste Außenaufzug der Welt; in unter 2 Minuten hinauf nach Yuanjiajie.', 'In der Saison kann die Schlange über eine Stunde dauern – früh morgens oder spätnachmittags kommen.'],
      fr: ['Ascenseur Bailong', 'Un ascenseur vitré de 326 m sur une falaise à pic, le plus haut ascenseur extérieur du monde selon le Guinness ; il monte à Yuanjiajie en moins de 2 minutes.', 'En saison, l’attente dépasse parfois une heure : venez tôt le matin ou en fin d’après-midi.'],
      it: ['Ascensore Bailong', 'Un ascensore di vetro di 326 m su una parete a picco, il più alto ascensore esterno al mondo secondo il Guinness; sale a Yuanjiajie in meno di 2 minuti.', 'In stagione la coda supera anche l’ora: vieni presto o nel tardo pomeriggio.'],
    }, { price: level(2) }),
    P('golden-whip-stream', 'nature', 29.326, 110.43, GREEN, 4.6, 12000, ['nature', 'hiking'], {
      ru: ['Ручей Золотого кнута', 'Ровная тропа около 7,5 км вдоль прозрачного ручья между скал-столбов — самая лёгкая прогулка парка; по пути встречаются макаки.', 'Не кормите обезьян и держите пакеты закрытыми — они ловко их отнимают.'],
      en: ['Golden Whip Stream', 'A flat trail of about 7.5 km along a clear stream between the pillars — the park’s easiest walk; you’ll meet macaques on the way.', 'Don’t feed the monkeys and keep bags closed — they snatch them deftly.'],
      es: ['Arroyo del Látigo Dorado', 'Un sendero llano de unos 7,5 km junto a un arroyo cristalino entre los pilares, el paseo más fácil del parque; por el camino hay macacos.', 'No des de comer a los monos y cierra las bolsas: las roban con destreza.'],
      de: ['Goldpeitschenbach', 'Ein flacher Weg von etwa 7,5 km an einem klaren Bach zwischen den Säulen – der leichteste Spaziergang im Park; unterwegs trifft man Makaken.', 'Affen nicht füttern und Taschen geschlossen halten – sie schnappen geschickt zu.'],
      fr: ['Ruisseau du Fouet d’or', 'Un sentier plat d’environ 7,5 km le long d’un ruisseau limpide entre les piliers, la balade la plus facile du parc ; on croise des macaques.', 'Ne nourrissez pas les singes et fermez vos sacs : ils les arrachent habilement.'],
      it: ['Torrente della Frusta d’Oro', 'Un sentiero pianeggiante di circa 7,5 km lungo un torrente limpido tra i pilastri, la passeggiata più facile del parco; lungo la via ci sono macachi.', 'Non dare da mangiare alle scimmie e tieni chiuse le borse: le strappano con destrezza.'],
    }, { price: level(3) }),
    P('tianzi-mountain', 'nature', 29.387, 110.438, MIST, 4.6, 9800, ['mountains', 'views', 'hiking'], {
      ru: ['Гора Тяньцзы', '«Гора Сына Неба» — плато с лучшими панорамами на «лес» из каменных столбов; высшая точка около 1260 м, наверх ведёт канатная дорога.', 'Вид на море облаков чаще всего бывает после дождя.'],
      en: ['Tianzi Mountain', 'The “Son of Heaven Mountain” — a plateau with the best panoramas over the forest of stone pillars; the top is about 1,260 m, with a cable car up.', 'A sea of clouds is most likely right after rain.'],
      es: ['Montaña Tianzi', 'La «Montaña del Hijo del Cielo», una meseta con las mejores panorámicas sobre el bosque de pilares; la cima ronda los 1260 m y sube un teleférico.', 'El mar de nubes es más probable justo después de llover.'],
      de: ['Tianzi-Berg', 'Der „Berg des Himmelssohns“ – ein Plateau mit den besten Panoramen über den Steinsäulenwald; Gipfel rund 1260 m, mit Seilbahn.', 'Ein Wolkenmeer gibt es am ehesten direkt nach Regen.'],
      fr: ['Mont Tianzi', 'Le « mont du Fils du Ciel », un plateau aux plus beaux panoramas sur la forêt de piliers ; sommet vers 1 260 m, accessible en téléphérique.', 'La mer de nuages est la plus probable juste après la pluie.'],
      it: ['Monte Tianzi', 'Il «Monte del Figlio del Cielo», un altopiano con i panorami migliori sulla foresta di pilastri; la cima è circa 1260 m, con funivia.', 'Il mare di nuvole è più probabile subito dopo la pioggia.'],
    }, { spot: 'insta', price: level(3) }),
    P('huangshi-village', 'nature', 29.316, 110.437, GREEN, 4.4, 7200, ['mountains', 'views'], {
      ru: ['Хуанши-чжай', 'Плоская вершина с кольцевой тропой по краю обрывов; местные говорят: «Не был на Хуанши-чжае — не был в Чжанцзяцзе».', 'Наверх удобно на канатной дороге, вниз — пешком по ступеням.'],
      en: ['Huangshi Village', 'A flat summit with a loop trail along the cliff edges; locals say, “If you haven’t been to Huangshizhai, you haven’t been to Zhangjiajie”.', 'Take the cable car up and walk down the steps.'],
      es: ['Huangshi', 'Una cima plana con un sendero circular al borde de los precipicios; dicen los locales: «Si no has ido a Huangshizhai, no has estado en Zhangjiajie».', 'Sube en teleférico y baja a pie por las escaleras.'],
      de: ['Huangshi-Dorf', 'Ein flacher Gipfel mit Rundweg entlang der Abbrüche; Einheimische sagen: „Wer nicht in Huangshizhai war, war nicht in Zhangjiajie.“', 'Mit der Seilbahn hinauf, zu Fuß über die Stufen hinunter.'],
      fr: ['Village de Huangshi', 'Un sommet plat avec un sentier en boucle au bord des falaises ; on dit ici : « Sans Huangshizhai, pas de Zhangjiajie ».', 'Montez en téléphérique, redescendez à pied par les marches.'],
      it: ['Villaggio di Huangshi', 'Una vetta piatta con un sentiero ad anello lungo i precipizi; i locali dicono: «Se non sei stato a Huangshizhai, non sei stato a Zhangjiajie».', 'Sali in funivia e scendi a piedi per le scale.'],
    }, { price: level(2) }),
    P('ten-mile-gallery', 'nature', 29.377, 110.448, GREEN, 4.4, 8100, ['nature', 'photo'], {
      ru: ['Галерея Десяти ли', 'Долина длиной около 5 км с «портретами» в скалах — «Старик, собирающий травы», «Три сестры»; вдоль неё ходит маленький поезд.', 'Туда — на поезде, обратно — пешком по ровной тропе: так видно больше.'],
      en: ['Ten-Mile Gallery', 'A valley about 5 km long with “portraits” in the rock — the “Old Man Gathering Herbs”, the “Three Sisters”; a little train runs along it.', 'Ride the train in and walk back on the flat path — you’ll see more.'],
      es: ['Galería de las Diez Millas', 'Un valle de unos 5 km con «retratos» en la roca, el «Anciano que recoge hierbas» o las «Tres Hermanas»; lo recorre un trenecito.', 'Ve en tren y vuelve a pie por el sendero llano: verás más.'],
      de: ['Zehn-Meilen-Galerie', 'Ein etwa 5 km langes Tal mit „Porträts“ im Fels – der „Alte Kräutersammler“, die „Drei Schwestern“; eine kleine Bahn fährt hindurch.', 'Mit der Bahn hinein, zu Fuß auf dem ebenen Weg zurück – so sieht man mehr.'],
      fr: ['Galerie des Dix Li', 'Une vallée d’environ 5 km aux « portraits » dans la roche — le « Vieil homme cueillant des herbes », les « Trois Sœurs » ; un petit train la parcourt.', 'Allez-y en train et revenez à pied par le sentier plat : vous en verrez plus.'],
      it: ['Galleria delle Dieci Miglia', 'Una valle lunga circa 5 km con «ritratti» nella roccia, il «Vecchio che raccoglie erbe», le «Tre Sorelle»; la percorre un trenino.', 'Vai in treno e torna a piedi sul sentiero piano: vedrai di più.'],
    }, { price: level(2) }),
    P('yangjiajie', 'nature', 29.4, 110.4, MIST, 4.6, 4200, ['hiking', 'views', 'adventure'], {
      ru: ['Янцзяцзе', 'Тихая часть парка рядом с Юаньцзяцзе: тропы по гребням, лестницы и «стены» из каменных столбов, где туристов гораздо меньше.', 'Маршрут «Улунчжай — Тяньбо-фу» крутой, но виды того стоят; нужна удобная обувь.'],
      en: ['Yangjiajie', 'A quiet part of the park next to Yuanjiajie: ridge trails, ladders and “walls” of stone pillars with far fewer visitors.', 'The Wulongzhai–Tianbofu route is steep but worth it; wear proper shoes.'],
      es: ['Yangjiajie', 'Una parte tranquila del parque junto a Yuanjiajie: senderos de cresta, escaleras y «muros» de pilares con muchos menos visitantes.', 'La ruta Wulongzhai–Tianbofu es empinada pero merece la pena; lleva buen calzado.'],
      de: ['Yangjiajie', 'Ein stiller Teil des Parks neben Yuanjiajie: Gratwege, Leitern und „Mauern“ aus Steinsäulen mit viel weniger Besuchern.', 'Die Route Wulongzhai–Tianbofu ist steil, aber lohnend; gutes Schuhwerk tragen.'],
      fr: ['Yangjiajie', 'Une partie calme du parc près de Yuanjiajie : sentiers de crête, échelles et « murs » de piliers, avec bien moins de monde.', 'Le parcours Wulongzhai–Tianbofu est raide mais vaut la peine ; de bonnes chaussures s’imposent.'],
      it: ['Yangjiajie', 'Una parte tranquilla del parco accanto a Yuanjiajie: sentieri di cresta, scale e «muri» di pilastri con molti meno visitatori.', 'Il percorso Wulongzhai–Tianbofu è ripido ma ne vale la pena; servono buone scarpe.'],
    }, { spot: 'hidden', price: level(3) }),
    P('tianmen-mountain', 'nature', 29.051, 110.481, TIANMEN, 4.7, 26000, ['mountains', 'views', 'adventure'], {
      ru: ['Гора Тяньмэнь', 'Канатная дорога длиной около 7,5 км прямо из центра города поднимает к «Небесным вратам» — пещере-арке высотой 131,5 м, к ней ведут 999 ступеней; по обрывам идут стеклянные тропы.', 'Возьмите билет с подъёмом на канатке и спуском на автобусе по серпантину в 99 поворотов.'],
      en: ['Tianmen Mountain', 'A cableway of about 7.5 km straight from the city centre climbs to “Heaven’s Gate” — a 131.5 m-high natural arch reached by 999 steps; glass walkways cling to the cliffs.', 'Get a ticket that goes up by cable car and down by bus on the 99-bend road.'],
      es: ['Montaña Tianmen', 'Un teleférico de unos 7,5 km sale del centro y sube a la «Puerta del Cielo», un arco natural de 131,5 m al que llevan 999 escalones; pasarelas de cristal recorren los acantilados.', 'Compra el billete de subida en teleférico y bajada en bus por la carretera de 99 curvas.'],
      de: ['Tianmen-Berg', 'Eine rund 7,5 km lange Seilbahn direkt aus dem Stadtzentrum führt zum „Himmelstor“ – einem 131,5 m hohen Felsbogen, zu dem 999 Stufen führen; Glasstege kleben an den Klippen.', 'Ein Ticket nehmen: hoch mit der Seilbahn, runter mit dem Bus über die Straße mit 99 Kurven.'],
      fr: ['Mont Tianmen', 'Un téléphérique d’environ 7,5 km part du centre-ville vers la « Porte du Ciel », une arche naturelle de 131,5 m qu’on atteint par 999 marches ; des passerelles de verre longent les falaises.', 'Prenez un billet montée en téléphérique, descente en bus par la route aux 99 virages.'],
      it: ['Monte Tianmen', 'Una funivia di circa 7,5 km parte dal centro città verso la «Porta del Cielo», un arco naturale alto 131,5 m raggiunto da 999 gradini; passerelle di vetro corrono sulle pareti.', 'Prendi il biglietto con salita in funivia e discesa in bus sulla strada dalle 99 curve.'],
    }, { spot: 'insta', price: level(3) }),
    P('grand-canyon-glass-bridge', 'attraction', 29.399, 110.697, ROAD, 4.4, 11000, ['canyon', 'adventure', 'views'], {
      ru: ['Стеклянный мост Большого каньона', 'Мост со стеклянным полом длиной 430 м на высоте около 300 м над ущельем, открыт в 2016 году; внизу — тропа по каньону с водопадами.', 'Перед мостом выдают бахилы; большие сумки оставляют в камере хранения.'],
      en: ['Grand Canyon Glass Bridge', 'A 430 m glass-floored bridge about 300 m above a gorge, opened in 2016; below, a canyon trail with waterfalls.', 'You’re given shoe covers; large bags go in the lockers.'],
      es: ['Puente de cristal del Gran Cañón', 'Un puente de suelo de cristal de 430 m a unos 300 m sobre una garganta, abierto en 2016; abajo, un sendero por el cañón con cascadas.', 'Te dan cubrezapatos; las bolsas grandes van a la consigna.'],
      de: ['Glasbrücke Grand Canyon', 'Eine 430 m lange Brücke mit Glasboden etwa 300 m über einer Schlucht, eröffnet 2016; unten ein Canyonweg mit Wasserfällen.', 'Man bekommt Überschuhe; große Taschen kommen ins Schließfach.'],
      fr: ['Pont de verre du Grand Canyon', 'Un pont au plancher de verre de 430 m, à environ 300 m au-dessus d’une gorge, ouvert en 2016 ; en contrebas, un sentier du canyon avec cascades.', 'On vous donne des surchaussures ; les grands sacs vont à la consigne.'],
      it: ['Ponte di vetro del Grand Canyon', 'Un ponte con pavimento di vetro lungo 430 m a circa 300 m sopra una gola, aperto nel 2016; sotto, un sentiero nel canyon con cascate.', 'Ti danno i copriscarpe; le borse grandi vanno negli armadietti.'],
    }, { spot: 'insta', price: level(3) }),
    P('baofeng-lake', 'nature', 29.35, 110.477, GREEN, 4.4, 7600, ['lakes', 'culture'], {
      ru: ['Озеро Баофэн', 'Изумрудное озеро в горах, по которому возят на лодках; с встречных лодок девушки тухцзя поют народные песни.', 'Подъём к озеру — по лестнице около 20 минут.'],
      en: ['Baofeng Lake', 'An emerald mountain lake with boat rides; Tujia singers serenade you from passing boats.', 'Reaching the lake takes about 20 minutes of stairs.'],
      es: ['Lago Baofeng', 'Un lago esmeralda en la montaña con paseos en barca; desde otras barcas te cantan canciones tujia.', 'Llegar al lago supone unos 20 minutos de escaleras.'],
      de: ['Baofeng-See', 'Ein smaragdgrüner Bergsee mit Bootsfahrten; von anderen Booten singen Tujia-Sängerinnen Volkslieder.', 'Zum See führen rund 20 Minuten Treppen.'],
      fr: ['Lac Baofeng', 'Un lac émeraude en montagne parcouru en barque ; des chanteuses tujia vous sérénadent depuis d’autres bateaux.', 'L’accès au lac demande environ 20 minutes d’escaliers.'],
      it: ['Lago Baofeng', 'Un lago smeraldo di montagna con giri in barca; dalle altre barche le cantanti tujia intonano canti popolari.', 'Per arrivare al lago servono circa 20 minuti di scale.'],
    }, { price: level(3) }),
    P('yellow-dragon-cave', 'attraction', 29.377, 110.534, TOWER, 4.4, 8300, ['nature', 'adventure'], {
      ru: ['Пещера Жёлтого дракона', 'Огромная карстовая пещера с подземной рекой, по которой плавают на лодке; сталагмит «Игла, усмиряющая море» высотой 19,2 м застрахован на 100 млн юаней.', 'Внутри прохладно и влажно — возьмите кофту и нескользкую обувь.'],
      en: ['Yellow Dragon Cave', 'A vast karst cave with an underground river you cross by boat; the 19.2 m “Sea-Calming Needle” stalagmite is insured for 100 million yuan.', 'It’s cool and damp inside — bring a layer and non-slip shoes.'],
      es: ['Cueva del Dragón Amarillo', 'Una enorme cueva kárstica con un río subterráneo que se recorre en barca; la estalagmita «Aguja que calma el mar», de 19,2 m, está asegurada en 100 millones de yuanes.', 'Dentro hace fresco y humedad: lleva abrigo y calzado antideslizante.'],
      de: ['Gelbe-Drachen-Höhle', 'Eine riesige Karsthöhle mit unterirdischem Fluss, den man per Boot befährt; der 19,2 m hohe Stalagmit „Meeresberuhigende Nadel“ ist mit 100 Mio. Yuan versichert.', 'Drinnen ist es kühl und feucht – eine Jacke und rutschfeste Schuhe mitnehmen.'],
      fr: ['Grotte du Dragon jaune', 'Une immense grotte karstique avec une rivière souterraine parcourue en barque ; la stalagmite « Aiguille qui calme la mer », de 19,2 m, est assurée pour 100 millions de yuans.', 'Il fait frais et humide : prenez une veste et des chaussures antidérapantes.'],
      it: ['Grotta del Drago Giallo', 'Un’enorme grotta carsica con un fiume sotterraneo da attraversare in barca; la stalagmite «Ago che calma il mare», alta 19,2 m, è assicurata per 100 milioni di yuan.', 'Dentro fa fresco e umido: porta una felpa e scarpe antiscivolo.'],
    }, { price: level(3) }),
    P('furong-town', 'attraction', 28.86, 109.955, ROAD, 4.4, 9400, ['oldtown', 'waterfalls', 'culture'], {
      ru: ['Городок Фужун', 'Старинный городок тухцзя на скале, через который падает водопад высотой около 60 м; до 2007 года звался Ванцунь и переименован в честь фильма «Городок Фужун» (1986).', 'Вечером водопад и дома на скале подсвечивают — оставайтесь до темноты.'],
      en: ['Furong Town', 'An old Tujia town on a cliff with a roughly 60 m waterfall pouring through it; it was called Wangcun until 2007 and renamed after the film “Hibiscus Town” (1986).', 'In the evening the waterfall and cliff houses are lit — stay until dark.'],
      es: ['Pueblo de Furong', 'Un antiguo pueblo tujia sobre un acantilado atravesado por una cascada de unos 60 m; se llamaba Wangcun hasta 2007 y se rebautizó por la película «Hibiscus Town» (1986).', 'Al anochecer iluminan la cascada y las casas: quédate hasta que oscurezca.'],
      de: ['Furong-Stadt', 'Eine alte Tujia-Stadt auf einer Klippe, durch die ein etwa 60 m hoher Wasserfall stürzt; bis 2007 hieß sie Wangcun und wurde nach dem Film „Hibiscus Town“ (1986) umbenannt.', 'Abends werden Wasserfall und Klippenhäuser beleuchtet – bis zur Dunkelheit bleiben.'],
      fr: ['Bourg de Furong', 'Un vieux bourg tujia sur une falaise traversé par une cascade d’environ 60 m ; appelé Wangcun jusqu’en 2007, il a été renommé d’après le film « Hibiscus Town » (1986).', 'Le soir, la cascade et les maisons sont illuminées : restez jusqu’à la nuit.'],
      it: ['Città di Furong', 'Un’antica città tujia su una rupe attraversata da una cascata di circa 60 m; si chiamava Wangcun fino al 2007 ed è stata ribattezzata dal film «Hibiscus Town» (1986).', 'La sera cascata e case sulla rupe si illuminano: resta fino al buio.'],
    }, { spot: 'insta', price: level(2) }),
    P('hushifu-sanxiaguo', 'food', 29.125, 110.478, ROAD, 4.3, 3100, ['food'], {
      ru: ['Ху Шифу — саньсягуо', 'Популярное место в центре Чжанцзяцзе для саньсягуо — тухцзяского «котла трёх продуктов»: рубец, свиные потроха или копчёное мясо, томлёные в остром соусе на огне прямо на столе.', 'Суп подливают в котёл в конце, а на нём варят овощи — не уходите сразу.'],
      en: ['Hushifu Sanxiaguo', 'A popular spot in central Zhangjiajie for sanxiaguo — the Tujia “three-in-a-pot”: tripe, pork offal or smoked meat stewed in a spicy sauce over a flame at the table.', 'Broth is added at the end to cook vegetables in the pot — don’t leave right away.'],
      es: ['Hushifu Sanxiaguo', 'Un sitio popular del centro de Zhangjiajie para el sanxiaguo, la «olla de tres» tujia: callos, casquería de cerdo o carne ahumada guisados en salsa picante sobre fuego en la mesa.', 'Al final añaden caldo para cocer verduras: no te vayas enseguida.'],
      de: ['Hushifu Sanxiaguo', 'Ein beliebtes Lokal im Zentrum von Zhangjiajie für Sanxiaguo – den Tujia-„Drei-in-einem-Topf“: Pansen, Schweineinnereien oder Räucherfleisch, in scharfer Soße auf dem Tischfeuer geschmort.', 'Am Ende kommt Brühe dazu, um Gemüse darin zu garen – nicht gleich gehen.'],
      fr: ['Hushifu Sanxiaguo', 'Une adresse populaire du centre de Zhangjiajie pour le sanxiaguo, la « marmite à trois » tujia : tripes, abats de porc ou viande fumée mijotés en sauce épicée sur un feu à table.', 'On ajoute du bouillon à la fin pour cuire des légumes : ne partez pas tout de suite.'],
      it: ['Hushifu Sanxiaguo', 'Un locale popolare del centro di Zhangjiajie per il sanxiaguo, la «pentola dei tre» tujia: trippa, frattaglie di maiale o carne affumicata stufate in salsa piccante sul fuoco al tavolo.', 'Alla fine aggiungono brodo per cuocere le verdure: non andare via subito.'],
    }, { price: level(1), menu: [
      ['Sanxiaguo', undefined, 'тухцзяский котёл из трёх продуктов|Tujia three-in-a-pot|olla de tres tujia|Tujia-Drei-in-einem-Topf|marmite à trois tujia|pentola dei tre tujia'],
      ['Tripe and smoked pork', undefined, 'рубец и копчёная свинина|tripe and smoked pork|callos y cerdo ahumado|Pansen und Räucherschwein|tripes et porc fumé|trippa e maiale affumicato'],
    ] }),
    P('lao-zao-tai', 'food', 29.118, 110.4755, TIANMEN, 4.3, 2400, ['food'], {
      ru: ['Impression Lao Zao Tai — саньсягуо у канатки', 'Высоко оценённый ресторан саньсягуо у нижней станции канатной дороги на Тяньмэнь — удобно поесть до или после горы.', 'Острота регулируется — попросите «шао ла», чуть-чуть острого.'],
      en: ['Impression Lao Zao Tai — sanxiaguo by the cableway', 'A highly rated sanxiaguo restaurant by the lower station of the Tianmen cableway — handy before or after the mountain.', 'Spice is adjustable — ask for “shao la”, a little spicy.'],
      es: ['Impression Lao Zao Tai, sanxiaguo junto al teleférico', 'Un restaurante de sanxiaguo muy valorado junto a la estación inferior del teleférico de Tianmen, práctico antes o después de la montaña.', 'El picante se ajusta: pide «shao la», poco picante.'],
      de: ['Impression Lao Zao Tai – Sanxiaguo an der Seilbahn', 'Ein gut bewertetes Sanxiaguo-Restaurant an der Talstation der Tianmen-Seilbahn – praktisch vor oder nach dem Berg.', 'Die Schärfe ist wählbar – „shao la“, ein bisschen scharf, bestellen.'],
      fr: ['Impression Lao Zao Tai, sanxiaguo près du téléphérique', 'Un restaurant de sanxiaguo bien noté près de la station basse du téléphérique de Tianmen, pratique avant ou après la montagne.', 'Le piquant s’ajuste : demandez « shao la », un peu épicé.'],
      it: ['Impression Lao Zao Tai, sanxiaguo vicino alla funivia', 'Un ristorante di sanxiaguo ben recensito vicino alla stazione a valle della funivia di Tianmen, comodo prima o dopo la montagna.', 'Il piccante è regolabile: chiedi «shao la», poco piccante.'],
    }, { price: level(1), menu: [
      ['Sanxiaguo', undefined, 'котёл из трёх продуктов|three-in-a-pot|olla de tres|Drei-in-einem-Topf|marmite à trois|pentola dei tre'],
      ['Tujia smoked pork', undefined, 'тухцзяская копчёная свинина|Tujia smoked pork|cerdo ahumado tujia|Tujia-Räucherschwein|porc fumé tujia|maiale affumicato tujia'],
    ] }),
    P('xiang-li-ren-jia', 'food', 29.348, 110.545, GREEN, 4.2, 2100, ['food'], {
      ru: ['Сянли Жэньцзя', 'Ресторан хунаньской и тухцзяской кухни у моста Баофэн в Улинъюане; особенно хвалят блюда из рыбы.', 'Удобно поужинать после озера Баофэн или пещеры Жёлтого дракона.'],
      en: ['Xiang Li Ren Jia', 'A Hunan and Tujia restaurant by Baofeng Bridge in Wulingyuan; the fish dishes get special praise.', 'Handy for dinner after Baofeng Lake or Yellow Dragon Cave.'],
      es: ['Xiang Li Ren Jia', 'Un restaurante de cocina de Hunan y tujia junto al puente Baofeng en Wulingyuan; se elogian sobre todo sus pescados.', 'Práctico para cenar tras el lago Baofeng o la Cueva del Dragón Amarillo.'],
      de: ['Xiang Li Ren Jia', 'Ein Restaurant mit Hunan- und Tujia-Küche an der Baofeng-Brücke in Wulingyuan; besonders gelobt werden die Fischgerichte.', 'Praktisch zum Abendessen nach dem Baofeng-See oder der Gelbe-Drachen-Höhle.'],
      fr: ['Xiang Li Ren Jia', 'Un restaurant de cuisine du Hunan et tujia près du pont Baofeng à Wulingyuan ; on vante surtout les plats de poisson.', 'Pratique pour dîner après le lac Baofeng ou la grotte du Dragon jaune.'],
      it: ['Xiang Li Ren Jia', 'Un ristorante di cucina dello Hunan e tujia vicino al ponte Baofeng a Wulingyuan; si lodano soprattutto i piatti di pesce.', 'Comodo per cena dopo il lago Baofeng o la Grotta del Drago Giallo.'],
    }, { price: level(2), menu: [
      ['Spicy Hunan fish', undefined, 'рыба по-хунаньски с перцем|Hunan-style fish with chilli|pescado al estilo de Hunan con chile|Fisch nach Hunan-Art mit Chili|poisson à la hunanaise au piment|pesce alla Hunan con peperoncino'],
      ['Smoked pork with peppers', undefined, 'копчёная свинина с перцем|smoked pork with peppers|cerdo ahumado con pimientos|Räucherschwein mit Paprika|porc fumé aux piments|maiale affumicato con peperoni'],
    ] }),
    P('xibu-street-food', 'food', 29.347, 110.556, TOWER, 4.1, 6800, ['streetfood', 'nightlife', 'culture'], {
      ru: ['Улица Сибу — закуски тухцзя', 'Вечерняя улица в стиле тухцзя в Улинъюане: рисовая лапша из Цыли, саньсягуо, шашлычки и острые маринованные овощи; удобно после дня в парке.', 'Здесь удобно, но туристически; за разнообразием едут в центр города.'],
      en: ['Xibu Street — Tujia snacks', 'An evening street in Tujia style in Wulingyuan: Cili rice noodles, sanxiaguo, skewers and spicy pickles; handy after a day in the park.', 'Convenient but touristy; for more variety, head to the city centre.'],
      es: ['Calle Xibu, tentempiés tujia', 'Una calle nocturna de estilo tujia en Wulingyuan: fideos de arroz de Cili, sanxiaguo, brochetas y encurtidos picantes; práctica tras un día en el parque.', 'Cómoda pero turística; para más variedad, ve al centro.'],
      de: ['Xibu-Straße – Tujia-Snacks', 'Eine Abendstraße im Tujia-Stil in Wulingyuan: Cili-Reisnudeln, Sanxiaguo, Spieße und scharfes Eingelegtes; praktisch nach einem Parktag.', 'Bequem, aber touristisch; für mehr Auswahl ins Stadtzentrum fahren.'],
      fr: ['Rue Xibu, snacks tujia', 'Une rue du soir de style tujia à Wulingyuan : nouilles de riz de Cili, sanxiaguo, brochettes et pickles épicés ; pratique après une journée au parc.', 'Pratique mais touristique ; pour plus de choix, allez au centre-ville.'],
      it: ['Via Xibu, snack tujia', 'Una via serale in stile tujia a Wulingyuan: noodle di riso di Cili, sanxiaguo, spiedini e sottaceti piccanti; comoda dopo un giorno nel parco.', 'Comoda ma turistica; per più varietà vai in centro città.'],
    }, { price: level(1), menu: [
      ['Cili rice noodles', undefined, 'рисовая лапша из Цыли|Cili rice noodles|fideos de arroz de Cili|Cili-Reisnudeln|nouilles de riz de Cili|noodle di riso di Cili'],
      ['Grilled skewers', undefined, 'шашлычки на гриле|grilled skewers|brochetas a la parrilla|Grillspieße|brochettes grillées|spiedini alla griglia'],
      ['Tujia spicy radish', undefined, 'острая маринованная редька|spicy pickled radish|rábano encurtido picante|scharfer eingelegter Rettich|radis mariné épicé|ravanello piccante sottaceto'],
    ] }),
    P('qilou-72', 'food', 29.121, 110.486, TOWER, 4.3, 5600, ['food', 'nightlife', 'architecture'], {
      ru: ['72 Цилоу', 'Огромное здание в стиле домов тухцзя на сваях в центре города — вечером в огнях; внутри и вокруг — рестораны и улочки закусок.', 'Приходите после заката: подсветка — половина впечатления.'],
      en: ['72 Qilou', 'A huge building in the style of Tujia stilt houses in the city centre — lit up at night, with restaurants and snack lanes inside and around it.', 'Come after sunset: the lighting is half the experience.'],
      es: ['72 Qilou', 'Un enorme edificio al estilo de las casas tujia sobre pilotes en el centro, iluminado de noche, con restaurantes y callejas de tentempiés dentro y alrededor.', 'Ve tras el atardecer: la iluminación es la mitad de la experiencia.'],
      de: ['72 Qilou', 'Ein riesiger Bau im Stil der Tujia-Stelzenhäuser im Zentrum – nachts beleuchtet, mit Restaurants und Snackgassen drinnen und rundherum.', 'Nach Sonnenuntergang kommen: die Beleuchtung ist das halbe Erlebnis.'],
      fr: ['72 Qilou', 'Un immense bâtiment dans le style des maisons tujia sur pilotis au centre-ville, illuminé la nuit, avec restaurants et ruelles de snacks dedans et autour.', 'Venez après le coucher du soleil : l’éclairage fait la moitié du spectacle.'],
      it: ['72 Qilou', 'Un enorme edificio in stile case tujia su palafitte in centro, illuminato di notte, con ristoranti e vicoli di snack dentro e attorno.', 'Vieni dopo il tramonto: l’illuminazione è metà dell’esperienza.'],
    }, { spot: 'insta', price: level(2), menu: [
      ['Sanxiaguo', undefined, 'котёл из трёх продуктов|three-in-a-pot|olla de tres|Drei-in-einem-Topf|marmite à trois|pentola dei tre'],
      ['Street snacks', undefined, 'уличные закуски|street snacks|tentempiés callejeros|Straßensnacks|snacks de rue|snack di strada'],
    ] }),
    P('yangjiajie-farmhouse', 'food', 29.402, 110.408, MIST, 4.3, 1600, ['food', 'culture'], {
      ru: ['Фермерские кухни у Янцзяцзе', 'Семейные ресторанчики у входа в Янцзяцзе готовят деревенские блюда тухцзя — тушёные редьку, тофу и свинину туаньнянь и копчёное мясо.', 'Спросите, что сегодня с огорода, — овощи здесь собирают утром.'],
      en: ['Farmhouse kitchens at Yangjiajie', 'Family eateries by the Yangjiajie entrance cook Tujia village food — tuannian (stewed radish, tofu and pork) and smoked meats.', 'Ask what’s from the garden today — vegetables are picked in the morning.'],
      es: ['Cocinas de granja en Yangjiajie', 'Comedores familiares junto a la entrada de Yangjiajie cocinan comida de aldea tujia: tuannian (rábano, tofu y cerdo guisados) y carnes ahumadas.', 'Pregunta qué hay hoy del huerto: las verduras se cogen por la mañana.'],
      de: ['Bauernküchen in Yangjiajie', 'Familienlokale am Eingang von Yangjiajie kochen Tujia-Dorfküche – Tuannian (geschmorter Rettich, Tofu und Schwein) und Räucherfleisch.', 'Fragen, was heute aus dem Garten kommt – das Gemüse wird morgens geerntet.'],
      fr: ['Cuisines fermières de Yangjiajie', 'Des tables familiales près de l’entrée de Yangjiajie servent la cuisine villageoise tujia : tuannian (radis, tofu et porc mijotés) et viandes fumées.', 'Demandez ce qui vient du potager aujourd’hui : les légumes sont cueillis le matin.'],
      it: ['Cucine contadine a Yangjiajie', 'Trattorie familiari all’ingresso di Yangjiajie cucinano piatti di villaggio tujia: tuannian (ravanello, tofu e maiale stufati) e carni affumicate.', 'Chiedi cosa c’è oggi dall’orto: le verdure si raccolgono al mattino.'],
    }, { spot: 'hidden', price: level(1), menu: [
      ['Tuannian', undefined, 'тушёные редька, тофу и свинина|stewed radish, tofu and pork|rábano, tofu y cerdo guisados|geschmorter Rettich, Tofu und Schwein|radis, tofu et porc mijotés|ravanello, tofu e maiale stufati'],
      ['Tujia smoked pork', undefined, 'тухцзяская копчёная свинина|Tujia smoked pork|cerdo ahumado tujia|Tujia-Räucherschwein|porc fumé tujia|maiale affumicato tujia'],
    ] }),
    P('furong-rice-tofu', 'food', 28.8605, 109.9545, ROAD, 4.1, 2600, ['food', 'streetfood'], {
      ru: ['Рисовый тофу в Фужуне', 'В фильме «Городок Фужун» героиня Лю Сяоцин продавала рисовый тофу — теперь это главная закуска городка, и несколько лавок носят имя актрисы.', 'Его едят с острой заправкой, маринованными овощами и арахисом — просите «ла» по вкусу.'],
      en: ['Rice tofu in Furong Town', 'In the film “Hibiscus Town”, Liu Xiaoqing’s character sold rice tofu — now it’s the town’s signature snack, and several shops carry the actress’s name.', 'It’s eaten with a spicy dressing, pickles and peanuts — ask for “la” to taste.'],
      es: ['Tofu de arroz en Furong', 'En la película «Hibiscus Town» el personaje de Liu Xiaoqing vendía tofu de arroz; hoy es el tentempié del pueblo y varias tiendas llevan el nombre de la actriz.', 'Se come con aliño picante, encurtidos y cacahuetes: pide «la» a tu gusto.'],
      de: ['Reistofu in Furong', 'Im Film „Hibiscus Town“ verkaufte Liu Xiaoqings Figur Reistofu – heute der typische Snack des Ortes, mehrere Läden tragen den Namen der Schauspielerin.', 'Man isst ihn mit scharfem Dressing, Eingelegtem und Erdnüssen – „la“ nach Geschmack bestellen.'],
      fr: ['Tofu de riz à Furong', 'Dans le film « Hibiscus Town », le personnage de Liu Xiaoqing vendait du tofu de riz : c’est aujourd’hui le snack du bourg, et plusieurs échoppes portent le nom de l’actrice.', 'On le mange avec une sauce épicée, des pickles et des cacahuètes : demandez « la » selon votre goût.'],
      it: ['Tofu di riso a Furong', 'Nel film «Hibiscus Town» il personaggio di Liu Xiaoqing vendeva tofu di riso: oggi è lo snack del paese e diverse botteghe portano il nome dell’attrice.', 'Si mangia con condimento piccante, sottaceti e arachidi: chiedi «la» a piacere.'],
    }, { price: level(1), menu: [
      ['Mi doufu', undefined, 'рисовый тофу с острой заправкой|rice tofu with spicy dressing|tofu de arroz con aliño picante|Reistofu mit scharfem Dressing|tofu de riz sauce épicée|tofu di riso con condimento piccante'],
      ['Pickled vegetables', undefined, 'маринованные овощи|pickled vegetables|encurtidos|eingelegtes Gemüse|légumes marinés|verdure sottaceto'],
    ] }),
    P('cili-rice-noodles', 'food', 29.1265, 110.4815, ROAD, 4.2, 1900, ['food', 'streetfood'], {
      ru: ['Рисовая лапша на завтрак', 'В Чжанцзяцзе день начинают с миски рисовой лапши — в стиле уезда Цыли, с тушёной говядиной или свининой и маринованной фасолью; лапшичные открываются рано утром.', 'Выбирайте заведение с очередью из местных — значит, бульон свежий.'],
      en: ['Rice noodles for breakfast', 'In Zhangjiajie the day starts with a bowl of rice noodles — Cili-county style, with braised beef or pork and pickled beans; noodle shops open early.', 'Pick a shop with a queue of locals — the broth will be fresh.'],
      es: ['Fideos de arroz para desayunar', 'En Zhangjiajie el día empieza con un cuenco de fideos de arroz al estilo de Cili, con ternera o cerdo guisados y judías encurtidas; los locales abren temprano.', 'Elige uno con cola de locales: el caldo estará recién hecho.'],
      de: ['Reisnudeln zum Frühstück', 'In Zhangjiajie beginnt der Tag mit einer Schale Reisnudeln nach Cili-Art, mit Schmorrind oder -schwein und eingelegten Bohnen; die Läden öffnen früh.', 'Einen Laden mit Schlange von Einheimischen wählen – dann ist die Brühe frisch.'],
      fr: ['Nouilles de riz au petit-déjeuner', 'À Zhangjiajie, la journée commence par un bol de nouilles de riz à la mode de Cili, au bœuf ou porc braisé et haricots marinés ; les échoppes ouvrent tôt.', 'Choisissez une adresse avec une file d’habitants : le bouillon sera frais.'],
      it: ['Noodle di riso a colazione', 'A Zhangjiajie la giornata inizia con una ciotola di noodle di riso in stile Cili, con manzo o maiale brasato e fagiolini sottaceto; i locali aprono presto.', 'Scegli un posto con la coda di gente del luogo: il brodo sarà fresco.'],
    }, { price: level(1), menu: [
      ['Beef rice noodles', undefined, 'рисовая лапша с тушёной говядиной|rice noodles with braised beef|fideos de arroz con ternera guisada|Reisnudeln mit Schmorrind|nouilles de riz au bœuf braisé|noodle di riso con manzo brasato'],
      ['Pickled beans topping', undefined, 'добавка — маринованная фасоль|pickled beans topping|judías encurtidas|eingelegte Bohnen|haricots marinés|fagiolini sottaceto'],
    ] }),
    P('tujia-larou', 'food', 29.3485, 110.551, GREEN, 4.2, 1700, ['food', 'culture'], {
      ru: ['Тухцзяская копчёная свинина в Улинъюане', 'Ласу — свинина, которую неделями коптят над очагом; в ресторанчиках городка Улинъюань её жарят с перцем, чесночными стрелками или подают с рисом.', 'Закажите вместе с жареными побегами бамбука — классическое сочетание.'],
      en: ['Tujia smoked pork in Wulingyuan', 'Larou is pork smoked for weeks over the hearth; eateries in Wulingyuan town stir-fry it with chillies or garlic shoots, or serve it with rice.', 'Order it with stir-fried bamboo shoots — the classic pairing.'],
      es: ['Cerdo ahumado tujia en Wulingyuan', 'El larou es cerdo ahumado durante semanas sobre el fogón; en los comedores de Wulingyuan se saltea con chile o brotes de ajo, o se sirve con arroz.', 'Pídelo con brotes de bambú salteados: la combinación clásica.'],
      de: ['Tujia-Räucherschwein in Wulingyuan', 'Larou ist Schweinefleisch, das wochenlang über dem Herd geräuchert wird; Lokale in Wulingyuan braten es mit Chili oder Knoblauchtrieben oder servieren es mit Reis.', 'Mit gebratenen Bambussprossen bestellen – die klassische Kombination.'],
      fr: ['Porc fumé tujia à Wulingyuan', 'Le larou est du porc fumé des semaines au-dessus du foyer ; les petits restaurants de Wulingyuan le sautent au piment ou aux tiges d’ail, ou le servent avec du riz.', 'Commandez-le avec des pousses de bambou sautées : l’accord classique.'],
      it: ['Maiale affumicato tujia a Wulingyuan', 'Il larou è maiale affumicato per settimane sul focolare; nelle trattorie di Wulingyuan si salta con peperoncino o germogli d’aglio, o si serve con riso.', 'Ordinalo con germogli di bambù saltati: l’abbinamento classico.'],
    }, { price: level(1), menu: [
      ['Larou with chillies', undefined, 'копчёная свинина с перцем|smoked pork with chillies|cerdo ahumado con chile|Räucherschwein mit Chili|porc fumé au piment|maiale affumicato al peperoncino'],
      ['Stir-fried bamboo shoots', undefined, 'жареные побеги бамбука|stir-fried bamboo shoots|brotes de bambú salteados|gebratene Bambussprossen|pousses de bambou sautées|germogli di bambù saltati'],
    ] }),
  ],
  routes: [
    D(['golden-whip-stream', 'bailong-elevator', 'yuanjiajie', 'yangjiajie-farmhouse', 'yangjiajie', 'tianzi-mountain', 'ten-mile-gallery', 'xibu-street-food'],
      'Парк Чжанцзяцзе: ручей, лифт Байлун и «Гора Аватар»|Zhangjiajie park: the stream, Bailong Elevator and “Avatar Mountain”|El parque de Zhangjiajie: el arroyo, el ascensor Bailong y la «Montaña Avatar»|Zhangjiajie-Park: Bach, Bailong-Aufzug und „Avatar-Berg“|Le parc de Zhangjiajie : ruisseau, ascenseur Bailong et « montagne d’Avatar »|Il parco di Zhangjiajie: torrente, ascensore Bailong e «montagna di Avatar»'),
    D(['huangshi-village', 'baofeng-lake', 'xiang-li-ren-jia', 'yellow-dragon-cave', 'grand-canyon-glass-bridge', 'tujia-larou'],
      'Хуанши-чжай, озеро Баофэн и стеклянный мост|Huangshi Village, Baofeng Lake and the glass bridge|Huangshi, el lago Baofeng y el puente de cristal|Huangshi, Baofeng-See und die Glasbrücke|Huangshi, le lac Baofeng et le pont de verre|Huangshi, il lago Baofeng e il ponte di vetro'),
    D(['cili-rice-noodles', 'tianmen-mountain', 'lao-zao-tai', 'qilou-72', 'hushifu-sanxiaguo'],
      'Гора Тяньмэнь и вечерний центр города|Tianmen Mountain and the city centre by night|La montaña Tianmen y el centro de noche|Tianmen-Berg und das Stadtzentrum am Abend|Le mont Tianmen et le centre-ville le soir|Il monte Tianmen e il centro città di sera'),
  ],
};

export default pack;
