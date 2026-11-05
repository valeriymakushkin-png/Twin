import type { CityPack } from '../types';
import { free, level, makeDay, makePlace } from './_kit.ts';

const P = makePlace('krakow');
const D = makeDay('krakow');
const CITY = 'hG12_i7YeRg';
const RIVER = 'j1dudw2u71k';
const SQUARE = 'Wr45buwF06Y';
const FOOD = 'Ew3_UHEtRg0';
const MOUND = '26zZW67L7q4';
const KAZIMIERZ = 'sMq1W0bZyH0';
const WAWEL = '2AGEf_-a9h0';

const pack: CityPack = {
  country: 'PL',
  city: 'krakow',
  places: [
    P('st-marys-basilica', 'attraction', 50.0617, 19.9393, SQUARE, 4.8, 41000, ['history', 'art', 'architecture'], {
      ru: ['Мариацкий костёл', 'Готическая базилика на Рыночной площади с резным алтарём Вита Ствоша; каждый час с башни трубач играет хейнал, обрывая мелодию на полуслове.', 'Алтарь торжественно открывают около 11:50; в сезон можно подняться на башню трубача.'],
      en: ['St Mary’s Basilica', 'A Gothic basilica on the Main Square with Veit Stoss’s carved altarpiece; every hour a trumpeter plays the hejnał from the tower, breaking off mid-tune.', 'The altarpiece is ceremonially opened around 11:50; in season you can climb the trumpeter’s tower.'],
      es: ['Basílica de Santa María', 'Una basílica gótica en la Plaza del Mercado con el retablo tallado de Veit Stoss; cada hora un trompetista toca el hejnał desde la torre y lo corta a medias.', 'El retablo se abre solemnemente hacia las 11:50; en temporada se sube a la torre.'],
      de: ['Marienkirche', 'Eine gotische Basilika am Hauptmarkt mit dem geschnitzten Altar von Veit Stoß; stündlich bläst ein Trompeter das Hejnał vom Turm und bricht mitten in der Melodie ab.', 'Der Altar wird gegen 11:50 feierlich geöffnet; in der Saison kann man auf den Trompeterturm.'],
      fr: ['Basilique Sainte-Marie', 'Une basilique gothique sur la place du Marché avec le retable sculpté de Veit Stoss ; chaque heure, un trompettiste joue le hejnał depuis la tour et s’interrompt en pleine mélodie.', 'Le retable s’ouvre solennellement vers 11 h 50 ; en saison, montée à la tour du trompettiste.'],
      it: ['Basilica di Santa Maria', 'Una basilica gotica sulla piazza del Mercato con l’altare intagliato di Veit Stoss; ogni ora un trombettiere suona l’hejnał dalla torre, interrompendolo a metà.', 'L’altare si apre solennemente verso le 11:50; in stagione si sale alla torre del trombettiere.'],
    }, { hours: '11:30–18:00', address: 'Plac Mariacki 5' }),
    P('rynek-underground', 'attraction', 50.0616, 19.9372, SQUARE, 4.6, 22000, ['history', 'museums'], {
      ru: ['Подземелья Рыночной площади', 'Музей под главной площадью: раскопанные средневековые улицы, лавки и голограммы, рассказывающие о торговом Кракове.', 'Билет по времени; во вторник вход бесплатный, но очередь.'],
      en: ['Rynek Underground', 'A museum beneath the Main Square: excavated medieval streets, stalls and holograms telling the story of trading Kraków.', 'Timed tickets; free on Tuesdays, with a queue.'],
      es: ['Rynek Underground', 'Un museo bajo la Plaza del Mercado: calles y puestos medievales excavados y hologramas sobre la Cracovia comercial.', 'Entradas con hora; los martes gratis, con cola.'],
      de: ['Rynek Underground', 'Ein Museum unter dem Hauptmarkt: ausgegrabene mittelalterliche Straßen, Stände und Hologramme über das Handelskrakau.', 'Zeittickets; dienstags gratis, mit Schlange.'],
      fr: ['Rynek souterrain', 'Un musée sous la place du Marché : rues et échoppes médiévales mises au jour et hologrammes sur la Cracovie marchande.', 'Billets horodatés ; gratuit le mardi, avec file.'],
      it: ['Rynek sotterraneo', 'Un museo sotto la piazza del Mercato: strade e botteghe medievali riportate alla luce e ologrammi sulla Cracovia mercantile.', 'Biglietti a orario; il martedì gratis, con coda.'],
    }, { hours: '10:00–20:00' }),
    P('schindlers-factory', 'attraction', 50.0475, 19.9614, KAZIMIERZ, 4.6, 39000, ['history', 'museums'], {
      ru: ['Фабрика Шиндлера', 'Музей в бывшей эмалевой фабрике Оскара Шиндлера о Кракове во время нацистской оккупации 1939–1945 годов.', 'Билеты по времени часто раскупают — берите онлайн за несколько дней.'],
      en: ['Schindler’s Factory', 'A museum in Oskar Schindler’s former enamel factory about Kraków under Nazi occupation, 1939–45.', 'Timed tickets often sell out — buy online a few days ahead.'],
      es: ['Fábrica de Schindler', 'Un museo en la antigua fábrica de esmaltes de Oskar Schindler sobre Cracovia bajo la ocupación nazi, 1939–45.', 'Las entradas con hora se agotan: compra online con días.'],
      de: ['Schindlers Fabrik', 'Ein Museum in Oskar Schindlers ehemaliger Emaillefabrik über Krakau unter NS-Besatzung 1939–45.', 'Zeittickets sind oft ausverkauft – einige Tage vorher online kaufen.'],
      fr: ['Usine de Schindler', 'Un musée dans l’ancienne fabrique d’émail d’Oskar Schindler sur Cracovie sous l’occupation nazie, 1939–45.', 'Les billets horodatés partent vite : achetez-les en ligne quelques jours avant.'],
      it: ['Fabbrica di Schindler', 'Un museo nell’ex fabbrica di smalti di Oskar Schindler su Cracovia sotto l’occupazione nazista, 1939–45.', 'I biglietti a orario finiscono presto: comprali online qualche giorno prima.'],
    }, { hours: '09:00–19:00', address: 'Lipowa 4' }),
    P('wawel-cathedral', 'attraction', 50.0544, 19.9355, WAWEL, 4.8, 24000, ['history', 'architecture'], {
      ru: ['Вавельский собор', 'Коронационный собор польских королей с гробницами монархов и национальных героев; на колокольне — огромный колокол Зигмунт.', 'Поднимитесь к колоколу Зигмунт — коснуться его языка, по поверью, к удаче.'],
      en: ['Wawel Cathedral', 'The coronation church of Polish kings with tombs of monarchs and national heroes; the bell tower holds the great Sigismund Bell.', 'Climb to the Sigismund Bell — touching its clapper is said to bring luck.'],
      es: ['Catedral de Wawel', 'La iglesia de coronación de los reyes polacos con tumbas de monarcas y héroes; en el campanario, la gran campana Segismundo.', 'Sube a la campana Segismundo: tocar su badajo trae suerte, dicen.'],
      de: ['Wawel-Kathedrale', 'Die Krönungskirche der polnischen Könige mit Gräbern von Monarchen und Nationalhelden; im Turm die große Sigismundglocke.', 'Zur Sigismundglocke steigen – den Klöppel zu berühren bringt Glück, heißt es.'],
      fr: ['Cathédrale du Wawel', 'L’église du sacre des rois de Pologne, avec tombeaux de souverains et héros ; le clocher abrite la grande cloche Sigismond.', 'Montez à la cloche Sigismond : toucher son battant porterait chance.'],
      it: ['Cattedrale del Wawel', 'La chiesa delle incoronazioni dei re polacchi con tombe di sovrani ed eroi; nel campanile la grande campana Sigismondo.', 'Sali alla campana Sigismondo: toccarne il batacchio porterebbe fortuna.'],
    }, { hours: '09:00–17:00' }),
    P('collegium-maius', 'attraction', 50.0614, 19.9335, CITY, 4.7, 9800, ['history', 'architecture', 'museums'], {
      ru: ['Коллегиум Майус', 'Старейшее здание Ягеллонского университета (XV век) с готическим двором, где учился Коперник; музей с астрономическими инструментами.', 'Во дворе в нечётные часы оживают куранты с фигурками — бесплатно.'],
      en: ['Collegium Maius', 'The oldest building of the Jagiellonian University (15th century), with a Gothic courtyard where Copernicus studied; a museum of astronomical instruments.', 'In the courtyard a clock with moving figures performs at set hours — free.'],
      es: ['Collegium Maius', 'El edificio más antiguo de la Universidad Jaguelónica (siglo XV), con patio gótico donde estudió Copérnico; museo de instrumentos astronómicos.', 'En el patio un reloj con figuras se anima a ciertas horas, gratis.'],
      de: ['Collegium Maius', 'Das älteste Gebäude der Jagiellonen-Universität (15. Jh.) mit gotischem Hof, in dem Kopernikus studierte; Museum astronomischer Instrumente.', 'Im Hof spielt zu festen Stunden eine Figurenuhr – gratis.'],
      fr: ['Collegium Maius', 'Le plus vieux bâtiment de l’université Jagellonne (XVe), cour gothique où étudia Copernic ; musée d’instruments astronomiques.', 'Dans la cour, une horloge à figurines s’anime à heures fixes, gratuitement.'],
      it: ['Collegium Maius', 'L’edificio più antico dell’Università Jagellonica (XV secolo) con il cortile gotico dove studiò Copernico; museo di strumenti astronomici.', 'Nel cortile un orologio con figure si anima a ore fisse, gratis.'],
    }, { spot: 'hidden', address: 'Jagiellońska 15' }),
    P('old-synagogue', 'attraction', 50.0515, 19.9489, KAZIMIERZ, 4.5, 6200, ['history', 'museums'], {
      ru: ['Старая синагога в Казимеже', 'Старейшая сохранившаяся синагога Польши (XV век), сегодня — музей истории и культуры краковских евреев.', 'Начните с неё прогулку по Казимежу — от неё 2 минуты до улицы Широкой.'],
      en: ['Old Synagogue in Kazimierz', 'Poland’s oldest surviving synagogue (15th century), now a museum of the history and culture of Kraków’s Jews.', 'Start your Kazimierz walk here — Szeroka Street is two minutes away.'],
      es: ['Sinagoga Vieja de Kazimierz', 'La sinagoga más antigua conservada de Polonia (siglo XV), hoy museo de la historia y cultura judía de Cracovia.', 'Empieza aquí el paseo por Kazimierz: la calle Szeroka está a dos minutos.'],
      de: ['Alte Synagoge in Kazimierz', 'Die älteste erhaltene Synagoge Polens (15. Jh.), heute Museum der Geschichte und Kultur der Krakauer Juden.', 'Den Kazimierz-Rundgang hier beginnen – die Szeroka ist zwei Minuten entfernt.'],
      fr: ['Vieille synagogue de Kazimierz', 'La plus ancienne synagogue conservée de Pologne (XVe), aujourd’hui musée de l’histoire et de la culture des Juifs de Cracovie.', 'Commencez ici la balade de Kazimierz : la rue Szeroka est à deux minutes.'],
      it: ['Vecchia Sinagoga di Kazimierz', 'La più antica sinagoga conservata della Polonia (XV secolo), oggi museo di storia e cultura degli ebrei di Cracovia.', 'Inizia qui la passeggiata a Kazimierz: via Szeroka è a due minuti.'],
    }, { hours: '09:00–17:00', address: 'Szeroka 24' }),
    P('auschwitz-birkenau', 'attraction', 50.0343, 19.1784, KAZIMIERZ, 4.8, 64000, ['history', 'unesco', 'museums'], {
      ru: ['Аушвиц-Биркенау', 'Бывший нацистский концентрационный лагерь и лагерь смерти в 70 км от Кракова — мемориал и музей, объект ЮНЕСКО.', 'Бронируйте бесплатный или экскурсионный вход на сайте музея заранее; заложите почти весь день.'],
      en: ['Auschwitz-Birkenau', 'The former Nazi concentration and extermination camp 70 km from Kraków — a memorial and museum, UNESCO-listed.', 'Book an entry or guided slot on the museum’s website in advance; allow most of the day.'],
      es: ['Auschwitz-Birkenau', 'El antiguo campo de concentración y exterminio nazi a 70 km de Cracovia: memorial y museo, Patrimonio UNESCO.', 'Reserva entrada o visita guiada en la web del museo con antelación; dedica casi todo el día.'],
      de: ['Auschwitz-Birkenau', 'Das ehemalige NS-Konzentrations- und Vernichtungslager 70 km von Krakau – Gedenkstätte und Museum, UNESCO-Welterbe.', 'Eintritt oder Führung vorab auf der Museumswebsite buchen; fast den ganzen Tag einplanen.'],
      fr: ['Auschwitz-Birkenau', 'L’ancien camp de concentration et d’extermination nazi à 70 km de Cracovie : mémorial et musée, classé à l’UNESCO.', 'Réservez entrée ou visite guidée sur le site du musée ; comptez presque la journée.'],
      it: ['Auschwitz-Birkenau', 'L’ex campo di concentramento e sterminio nazista a 70 km da Cracovia: memoriale e museo, patrimonio UNESCO.', 'Prenota ingresso o visita guidata sul sito del museo; calcola quasi tutta la giornata.'],
    }, { address: 'Więźniów Oświęcimia 20, Oświęcim' }),
    P('czartoryski-museum', 'attraction', 50.0646, 19.9404, CITY, 4.7, 8100, ['art', 'museums'], {
      ru: ['Музей Чарторыских', 'Музей у Флорианских ворот, где хранится «Дама с горностаем» Леонардо да Винчи — одна из четырёх женских портретов мастера.', 'Ради «Дамы» стоит прийти утром, пока зал свободен.'],
      en: ['Czartoryski Museum', 'A museum by St Florian’s Gate holding Leonardo da Vinci’s Lady with an Ermine — one of his four portraits of women.', 'Come in the morning to have the Lady’s room to yourself.'],
      es: ['Museo Czartoryski', 'Un museo junto a la Puerta de San Florián que guarda La dama del armiño de Leonardo, uno de sus cuatro retratos femeninos.', 'Ven por la mañana para ver a la Dama sin gente.'],
      de: ['Czartoryski-Museum', 'Ein Museum am Florianstor mit Leonardos Dame mit dem Hermelin – einem seiner vier Frauenporträts.', 'Morgens kommen, um die Dame fast allein zu sehen.'],
      fr: ['Musée Czartoryski', 'Un musée près de la porte Saint-Florian abritant la Dame à l’hermine de Léonard de Vinci, l’un de ses quatre portraits féminins.', 'Venez le matin pour voir la Dame presque seul.'],
      it: ['Museo Czartoryski', 'Un museo vicino alla Porta di San Floriano con la Dama con l’ermellino di Leonardo, uno dei suoi quattro ritratti femminili.', 'Vieni al mattino per vedere la Dama quasi da solo.'],
    }, { hours: '10:00–18:00', address: 'Pijarska 15' }),
    P('kosciuszko-mound', 'nature', 50.0549, 19.8933, MOUND, 4.7, 16000, ['views', 'history'], {
      ru: ['Курган Костюшко', 'Искусственный холм XIX века в честь Тадеуша Костюшко в кирпичной крепости; с вершины — панорама Кракова и, в ясный день, Татр.', 'Лучше на закате; автобус №100 или пешком через Вольский лес.'],
      en: ['Kościuszko Mound', 'A 19th-century artificial hill honouring Tadeusz Kościuszko inside a brick fort; the top offers a panorama of Kraków and, on clear days, the Tatras.', 'Best at sunset; take bus 100 or walk through the Wolski Forest.'],
      es: ['Montículo de Kościuszko', 'Una colina artificial del siglo XIX en honor a Tadeusz Kościuszko dentro de un fuerte de ladrillo; desde la cima, Cracovia y, si está despejado, los Tatras.', 'Mejor al atardecer; bus 100 o a pie por el bosque Wolski.'],
      de: ['Kościuszko-Hügel', 'Ein künstlicher Hügel aus dem 19. Jh. zu Ehren von Tadeusz Kościuszko in einer Ziegelfestung; oben Panorama auf Krakau und bei klarer Sicht die Tatra.', 'Am schönsten bei Sonnenuntergang; Bus 100 oder zu Fuß durch den Wolski-Wald.'],
      fr: ['Tertre de Kościuszko', 'Une colline artificielle du XIXe en l’honneur de Tadeusz Kościuszko, dans un fort de brique ; du sommet, Cracovie et par temps clair les Tatras.', 'Idéal au couchant ; bus 100 ou à pied par la forêt de Wolski.'],
      it: ['Tumulo di Kościuszko', 'Una collina artificiale ottocentesca in onore di Tadeusz Kościuszko dentro un forte in mattoni; dalla cima Cracovia e, col sereno, i Tatra.', 'Meglio al tramonto; bus 100 o a piedi nel bosco Wolski.'],
    }, { spot: 'insta', hours: '09:00–dusk' }),
    P('planty', 'nature', 50.061, 19.94, CITY, 4.7, 21000, ['gardens', 'nature'], {
      ru: ['Парк Планты', 'Зелёное кольцо длиной 4 км на месте снесённых городских стен вокруг Старого города: аллеи, скамейки и памятники.', 'Обойдите Старый город по кругу Плант — это около часа неспешной прогулки.'],
      en: ['Planty Park', 'A 4 km green ring on the site of the demolished city walls around the Old Town: avenues, benches and monuments.', 'Walking the whole loop round the Old Town takes about an hour.'],
      es: ['Parque Planty', 'Un anillo verde de 4 km sobre las antiguas murallas alrededor del casco viejo: paseos, bancos y monumentos.', 'La vuelta completa al casco antiguo lleva una hora.'],
      de: ['Planty-Park', 'Ein 4 km langer Grüngürtel anstelle der abgerissenen Stadtmauern um die Altstadt: Alleen, Bänke und Denkmäler.', 'Die ganze Runde um die Altstadt dauert etwa eine Stunde.'],
      fr: ['Parc Planty', 'Un anneau vert de 4 km sur l’emplacement des remparts démolis autour de la vieille ville : allées, bancs et monuments.', 'Le tour complet de la vieille ville prend environ une heure.'],
      it: ['Parco Planty', 'Un anello verde di 4 km al posto delle mura demolite intorno alla città vecchia: viali, panchine e monumenti.', 'Il giro completo intorno alla città vecchia richiede circa un’ora.'],
    }, { price: free, hours: 'always' }),

    P('bottiglieria-1881', 'food', 50.0519, 19.9447, KAZIMIERZ, 4.8, 1700, ['food', 'luxury', 'wine'], {
      ru: ['Bottiglieria 1881', 'Ресторан в сводчатых подвалах Казимежа; единственные в Польше две звезды MICHELIN (польский гид 2026).', 'Бронируйте заранее; винная карта — сильная сторона.'],
      en: ['Bottiglieria 1881', 'A restaurant in vaulted Kazimierz cellars; Poland’s only two MICHELIN stars (Poland guide 2026).', 'Book ahead; the wine list is a highlight.'],
      es: ['Bottiglieria 1881', 'Un restaurante en las bodegas abovedadas de Kazimierz; las únicas dos estrellas MICHELIN de Polonia (guía Polonia 2026).', 'Reserva con antelación; la carta de vinos destaca.'],
      de: ['Bottiglieria 1881', 'Ein Restaurant in den Gewölbekellern von Kazimierz; Polens einzige zwei MICHELIN-Sterne (Guide Polen 2026).', 'Früh buchen; die Weinkarte ist ein Höhepunkt.'],
      fr: ['Bottiglieria 1881', 'Un restaurant dans les caves voûtées de Kazimierz ; les seules deux étoiles MICHELIN de Pologne (guide Pologne 2026).', 'Réservez tôt ; la carte des vins est un point fort.'],
      it: ['Bottiglieria 1881', 'Un ristorante nelle cantine a volta di Kazimierz; le uniche due stelle MICHELIN della Polonia (guida Polonia 2026).', 'Prenota in anticipo; la carta dei vini è un punto forte.'],
    }, { price: level(3), michelin: { award: 'star2', year: 2026 }, address: 'Bocheńska 5', menu: [
      ['Tasting menu', undefined, 'дегустационный сет|tasting menu|menú degustación|Degustationsmenü|menu dégustation|menù degustazione'],
      ['Wine pairing', undefined, 'винное сопровождение|wine pairing|maridaje de vinos|Weinbegleitung|accord mets-vins|abbinamento vini'],
    ] }),
    P('pod-wawelem', 'food', 50.056, 19.937, WAWEL, 4.4, 21000, ['food'], {
      ru: ['Pod Wawelem Kompania Kuflowa', 'Огромная шумная пивная у подножия Вавеля: гигантские шницели на всю тарелку, свиная рулька и пиво литровыми кружками.', 'Порции очень большие — один шницель можно взять на двоих.'],
      en: ['Pod Wawelem Kompania Kuflowa', 'A huge, noisy beer hall below Wawel: plate-sized schnitzels, pork knuckle and beer by the litre.', 'Portions are enormous — one schnitzel can feed two.'],
      es: ['Pod Wawelem Kompania Kuflowa', 'Una enorme y ruidosa cervecería al pie del Wawel: escalopes del tamaño del plato, codillo y cerveza por litros.', 'Las raciones son enormes: un escalope da para dos.'],
      de: ['Pod Wawelem Kompania Kuflowa', 'Eine riesige, laute Bierhalle unterhalb des Wawel: tellergroße Schnitzel, Schweinshaxe und Bier im Literkrug.', 'Riesige Portionen – ein Schnitzel reicht für zwei.'],
      fr: ['Pod Wawelem Kompania Kuflowa', 'Une immense brasserie bruyante au pied du Wawel : escalopes grandes comme l’assiette, jarret de porc et bière au litre.', 'Portions énormes : une escalope pour deux.'],
      it: ['Pod Wawelem Kompania Kuflowa', 'Un’enorme e rumorosa birreria ai piedi del Wawel: cotolette grandi come il piatto, stinco di maiale e birra a litri.', 'Porzioni enormi: una cotoletta basta per due.'],
    }, { price: level(2), address: 'Świętej Gertrudy 26–29', menu: [
      ['Schabowy', undefined, 'польская свиная отбивная в панировке|Polish breaded pork cutlet|chuleta de cerdo empanada polaca|polnisches paniertes Schweineschnitzel|côtelette de porc panée polonaise|cotoletta di maiale impanata polacca'],
      ['Golonka', undefined, 'запечённая свиная рулька|roast pork knuckle|codillo de cerdo asado|gebratene Schweinshaxe|jarret de porc rôti|stinco di maiale arrosto'],
    ] }),
    P('przystanek-pierogarnia', 'food', 50.059, 19.945, FOOD, 4.7, 4800, ['food', 'streetfood'], {
      ru: ['Przystanek Pierogarnia', 'Крошечная пельменная на несколько мест с недорогими вареники-пирогами ручной лепки: с картофелем и сыром, мясом, капустой и сладкие.', 'Мест очень мало — берите с собой, если зал полон.'],
      en: ['Przystanek Pierogarnia', 'A tiny pierogi shop with a handful of seats and cheap hand-made dumplings: potato and cheese, meat, cabbage and sweet ones.', 'Very few seats — take away if it’s full.'],
      es: ['Przystanek Pierogarnia', 'Una diminuta tienda de pierogi con pocos asientos y empanadillas caseras baratas: de patata y queso, carne, col y dulces.', 'Hay muy pocos sitios: llévatelos si está lleno.'],
      de: ['Przystanek Pierogarnia', 'Ein winziger Pierogi-Laden mit wenigen Plätzen und günstigen handgemachten Teigtaschen: Kartoffel-Käse, Fleisch, Kraut und süße.', 'Sehr wenige Plätze – bei vollem Haus zum Mitnehmen.'],
      fr: ['Przystanek Pierogarnia', 'Une minuscule échoppe de pierogi à quelques places : raviolis faits main pas chers, pomme de terre-fromage, viande, chou, sucrés.', 'Très peu de places : à emporter si c’est plein.'],
      it: ['Przystanek Pierogarnia', 'Una minuscola bottega di pierogi con pochi posti e ravioli fatti a mano economici: patate e formaggio, carne, cavolo e dolci.', 'Pochissimi posti: prendili da asporto se è pieno.'],
    }, { price: level(1), address: 'Bonerowska 14', menu: [
      ['Pierogi ruskie', undefined, 'вареники с картофелем и творогом|dumplings with potato and cheese|pierogi de patata y queso|Pierogi mit Kartoffel und Quark|pierogi pomme de terre-fromage|pierogi patate e formaggio'],
      ['Pierogi z mięsem', undefined, 'вареники с мясом|meat dumplings|pierogi de carne|Pierogi mit Fleisch|pierogi à la viande|pierogi di carne'],
    ] }),
    P('starka', 'food', 50.0517, 19.9452, KAZIMIERZ, 4.6, 6100, ['food'], {
      ru: ['Starka', 'Уютный ресторан в Казимеже с польской кухней и настойками собственного приготовления — от вишнёвой до хреновой.', 'Возьмите дегустационный сет настоек и утку с яблоками.'],
      en: ['Starka', 'A cosy Kazimierz restaurant serving Polish cooking and house-made flavoured vodkas — from cherry to horseradish.', 'Order a flight of house vodkas and the duck with apples.'],
      es: ['Starka', 'Un acogedor restaurante de Kazimierz con cocina polaca y vodkas aromatizados caseros, de cereza a rábano picante.', 'Pide una cata de vodkas caseros y el pato con manzana.'],
      de: ['Starka', 'Ein gemütliches Restaurant in Kazimierz mit polnischer Küche und hausgemachten Likören – von Kirsche bis Meerrettich.', 'Eine Likörprobe und Ente mit Äpfeln bestellen.'],
      fr: ['Starka', 'Un restaurant chaleureux de Kazimierz : cuisine polonaise et vodkas aromatisées maison, de la cerise au raifort.', 'Prenez une dégustation de vodkas maison et le canard aux pommes.'],
      it: ['Starka', 'Un ristorante accogliente a Kazimierz con cucina polacca e vodke aromatizzate fatte in casa, dalla ciliegia al rafano.', 'Ordina una degustazione di vodke della casa e l’anatra con mele.'],
    }, { price: level(2), address: 'Józefa 14', menu: [
      ['Kaczka z jabłkami', undefined, 'утка, запечённая с яблоками|duck roasted with apples|pato asado con manzanas|Ente mit Äpfeln|canard rôti aux pommes|anatra arrosto con mele'],
      ['Nalewki', undefined, 'дегустация домашних настоек|flight of house-made flavoured vodkas|cata de vodkas caseros|Probe hausgemachter Liköre|dégustation de liqueurs maison|degustazione di liquori fatti in casa'],
    ] }),
    P('massolit', 'food', 50.059, 19.926, CITY, 4.6, 4200, ['food', 'nomads'], {
      ru: ['Massolit Books & Café', 'Англоязычный букинистический магазин-кафе в квартирах старого дома: стопки книг до потолка, чизкейки и кофе.', 'Сядьте в дальней комнате с книгами — тихое место для перерыва.'],
      en: ['Massolit Books & Café', 'An English-language second-hand bookshop-café in an old apartment: book stacks to the ceiling, cheesecake and coffee.', 'Sit in a back room among the books — a quiet place for a break.'],
      es: ['Massolit Books & Café', 'Una librería-café de segunda mano en inglés en un viejo piso: libros hasta el techo, tarta de queso y café.', 'Siéntate en una sala del fondo entre libros: un respiro tranquilo.'],
      de: ['Massolit Books & Café', 'Ein englischsprachiges Antiquariat mit Café in einer Altbauwohnung: Bücherstapel bis zur Decke, Käsekuchen und Kaffee.', 'In einem hinteren Raum zwischen Büchern sitzen – ein ruhiger Ort für eine Pause.'],
      fr: ['Massolit Books & Café', 'Une librairie-café d’occasion anglophone dans un vieil appartement : piles de livres jusqu’au plafond, cheesecake et café.', 'Installez-vous dans une pièce du fond parmi les livres, au calme.'],
      it: ['Massolit Books & Café', 'Una libreria-caffè dell’usato in inglese in un vecchio appartamento: pile di libri fino al soffitto, cheesecake e caffè.', 'Siediti in una stanza sul retro tra i libri: un posto tranquillo per una pausa.'],
    }, { price: level(1), address: 'Felicjanek 4', menu: [
      ['Cheesecake', undefined, 'польский творожный чизкейк|Polish cheesecake|tarta de queso polaca|polnischer Käsekuchen|gâteau au fromage polonais|cheesecake polacca'],
      ['Coffee', undefined, 'кофе|coffee|café|Kaffee|café|caffè'],
    ] }),
    P('cafe-camelot', 'food', 50.0628, 19.9385, SQUARE, 4.5, 4900, ['food', 'art'], {
      ru: ['Cafe Camelot', 'Уютное кафе в старом доме у Рыночной площади, украшенное деревянными фигурками и картинами; в подвале — кабаре.', 'Хорошо для завтрака: яичница и «шарлотка» с яблоками.'],
      en: ['Cafe Camelot', 'A cosy café in an old house off the Main Square, decorated with wooden figurines and paintings; a cabaret in the cellar.', 'Good for breakfast: eggs and apple szarlotka.'],
      es: ['Cafe Camelot', 'Un café acogedor en una casa antigua junto a la plaza, decorado con figuras de madera y cuadros; cabaret en el sótano.', 'Bien para desayunar: huevos y szarlotka de manzana.'],
      de: ['Cafe Camelot', 'Ein gemütliches Café in einem alten Haus am Hauptmarkt, mit Holzfiguren und Bildern; im Keller ein Kabarett.', 'Gut zum Frühstück: Eier und Apfel-Szarlotka.'],
      fr: ['Cafe Camelot', 'Un café chaleureux dans une vieille maison près de la place du Marché, orné de figurines en bois et tableaux ; cabaret au sous-sol.', 'Idéal au petit-déjeuner : œufs et szarlotka aux pommes.'],
      it: ['Cafe Camelot', 'Un caffè accogliente in una vecchia casa vicino alla piazza del Mercato, decorato con statuine di legno e quadri; cabaret in cantina.', 'Ottimo a colazione: uova e szarlotka di mele.'],
    }, { price: level(1), address: 'Świętego Tomasza 17', menu: [
      ['Szarlotka', undefined, 'польский яблочный пирог|Polish apple cake|tarta de manzana polaca|polnischer Apfelkuchen|gâteau aux pommes polonais|torta di mele polacca'],
      ['Breakfast eggs', undefined, 'завтрак с яйцами|breakfast with eggs|desayuno con huevos|Frühstück mit Eiern|petit-déjeuner aux œufs|colazione con uova'],
    ] }),
    P('good-lood', 'food', 50.0582, 19.9375, CITY, 4.7, 5300, ['food'], {
      ru: ['Good Lood', 'Мороженое, ради которого краковяне стоят в очереди: по три вкуса в день, всё из натуральных продуктов.', 'Вкусы меняются ежедневно — смотрите доску у входа.'],
      en: ['Good Lood', 'Ice cream Krakovians queue for: three flavours a day, all made from natural ingredients.', 'Flavours change daily — check the board by the door.'],
      es: ['Good Lood', 'Helado por el que los cracovianos hacen cola: tres sabores al día, todo natural.', 'Los sabores cambian a diario: mira la pizarra.'],
      de: ['Good Lood', 'Eis, für das Krakauer Schlange stehen: drei Sorten pro Tag, alles aus natürlichen Zutaten.', 'Die Sorten wechseln täglich – Tafel am Eingang prüfen.'],
      fr: ['Good Lood', 'Une glace pour laquelle les Cracoviens font la queue : trois parfums par jour, ingrédients naturels.', 'Les parfums changent chaque jour : voyez l’ardoise.'],
      it: ['Good Lood', 'Il gelato per cui i cracoviani fanno la coda: tre gusti al giorno, ingredienti naturali.', 'I gusti cambiano ogni giorno: guarda la lavagna.'],
    }, { price: level(1), address: 'Plac Wszystkich Świętych 7', menu: [
      ['Flavour of the day', undefined, 'вкус дня|flavour of the day|sabor del día|Sorte des Tages|parfum du jour|gusto del giorno'],
      ['Sorbet', undefined, 'сорбет|sorbet|sorbete|Sorbet|sorbet|sorbetto'],
    ] }),
    P('wierzynek', 'food', 50.0613, 19.9368, SQUARE, 4.4, 4600, ['food', 'history', 'luxury'], {
      ru: ['Wierzynek', 'Исторический ресторан на Рыночной площади, по легенде продолжающий пир 1364 года, который купец Вежинек устроил для монархов Европы.', 'Закажите дичь или утку; интерьеры с гербами и старинной мебелью.'],
      en: ['Wierzynek', 'A historic restaurant on the Main Square that, by legend, continues the 1364 feast merchant Wierzynek threw for Europe’s monarchs.', 'Order game or duck; the rooms have coats of arms and antique furniture.'],
      es: ['Wierzynek', 'Un restaurante histórico en la plaza que, según la leyenda, continúa el banquete de 1364 que el mercader Wierzynek dio a los monarcas europeos.', 'Pide caza o pato; salones con escudos y muebles antiguos.'],
      de: ['Wierzynek', 'Ein historisches Restaurant am Hauptmarkt, das der Legende nach das Festmahl von 1364 fortsetzt, das Kaufmann Wierzynek für Europas Monarchen gab.', 'Wild oder Ente bestellen; Räume mit Wappen und antiken Möbeln.'],
      fr: ['Wierzynek', 'Un restaurant historique sur la place qui, selon la légende, prolonge le festin de 1364 offert par le marchand Wierzynek aux monarques d’Europe.', 'Prenez du gibier ou du canard ; salles aux blasons et meubles anciens.'],
      it: ['Wierzynek', 'Un ristorante storico sulla piazza che, secondo la leggenda, prosegue il banchetto del 1364 offerto dal mercante Wierzynek ai sovrani d’Europa.', 'Ordina selvaggina o anatra; sale con stemmi e mobili antichi.'],
    }, { price: level(3), address: 'Rynek Główny 16', menu: [
      ['Roast duck', undefined, 'запечённая утка|roast duck|pato asado|gebratene Ente|canard rôti|anatra arrosto'],
      ['Żurek', undefined, 'кислый ржаной суп с колбасой и яйцом|sour rye soup with sausage and egg|sopa agria de centeno con salchicha y huevo|saure Roggensuppe mit Wurst und Ei|soupe aigre de seigle, saucisse et œuf|zuppa acida di segale con salsiccia e uovo'],
    ] }),
    P('hevre', 'food', 50.0513, 19.9468, KAZIMIERZ, 4.6, 5400, ['food', 'nightlife', 'art'], {
      ru: ['Hevre', 'Бар и кафе в бывшем еврейском молитвенном доме в Казимеже с проступающими сквозь штукатурку старыми росписями.', 'Днём — кофе и обед, вечером — бар; посмотрите на фрески на потолке.'],
      en: ['Hevre', 'A bar-café in a former Jewish prayer house in Kazimierz, with old murals showing through the plaster.', 'Coffee and lunch by day, a bar at night; look up at the ceiling murals.'],
      es: ['Hevre', 'Un bar-café en una antigua casa de oración judía en Kazimierz, con viejos murales asomando bajo el yeso.', 'De día café y comida, de noche bar; mira los murales del techo.'],
      de: ['Hevre', 'Eine Bar und Café in einem ehemaligen jüdischen Gebetshaus in Kazimierz, alte Wandmalereien schimmern durch den Putz.', 'Tagsüber Kaffee und Essen, abends Bar; die Deckenmalereien ansehen.'],
      fr: ['Hevre', 'Un bar-café dans une ancienne maison de prière juive de Kazimierz, de vieilles fresques affleurant sous le plâtre.', 'Café et déjeuner le jour, bar le soir ; levez les yeux vers les fresques.'],
      it: ['Hevre', 'Un bar-caffè in un’ex casa di preghiera ebraica a Kazimierz, con vecchi affreschi che affiorano dall’intonaco.', 'Di giorno caffè e pranzo, la sera bar; guarda gli affreschi del soffitto.'],
    }, { spot: 'hidden', price: level(1), address: 'Beera Meiselsa 18', menu: [
      ['Lunch of the day', undefined, 'обед дня|lunch of the day|menú del día|Tagesgericht|plat du jour|pranzo del giorno'],
      ['Polish craft beer', undefined, 'польское крафтовое пиво|Polish craft beer|cerveza artesana polaca|polnisches Craft-Bier|bière artisanale polonaise|birra artigianale polacca'],
    ] }),
  ],
  routes: [
    D(['=krakow-wawel', 'wawel-cathedral', 'pod-wawelem', 'planty', 'collegium-maius', '=krakow-rynek-glowny', 'st-marys-basilica', 'rynek-underground', 'wierzynek'],
      'Вавель, Рыночная площадь и Мариацкий костёл|Wawel, the Main Square and St Mary’s|Wawel, la Plaza del Mercado y Santa María|Wawel, Hauptmarkt und Marienkirche|Le Wawel, la place du Marché et Sainte-Marie|Wawel, la piazza del Mercato e Santa Maria'),
    D(['cafe-camelot', 'czartoryski-museum', '=krakow-florianska-gate', 'przystanek-pierogarnia', 'old-synagogue', '=krakow-szeroka-street', 'hevre', 'schindlers-factory', 'bottiglieria-1881'],
      'Леонардо, Казимеж и фабрика Шиндлера|Leonardo, Kazimierz and Schindler’s Factory|Leonardo, Kazimierz y la Fábrica de Schindler|Leonardo, Kazimierz und Schindlers Fabrik|Léonard, Kazimierz et l’usine de Schindler|Leonardo, Kazimierz e la fabbrica di Schindler'),
    D(['auschwitz-birkenau', 'massolit', 'kosciuszko-mound', 'good-lood', 'starka'],
      'Аушвиц-Биркенау и курган Костюшко|Auschwitz-Birkenau and Kościuszko Mound|Auschwitz-Birkenau y el montículo de Kościuszko|Auschwitz-Birkenau und Kościuszko-Hügel|Auschwitz-Birkenau et tertre de Kościuszko|Auschwitz-Birkenau e tumulo di Kościuszko'),
  ],
};

export default pack;
