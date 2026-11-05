import type { CityPack } from '../types';
import { free, level, makeDay, makePlace } from './_kit.ts';

const P = makePlace('chiang-mai');
const D = makeDay('chiang-mai');
const CITY = 'v9iLbiafSEA';
const WAT = '28NIbSOziGs';
const FOREST = '5LWraK9qtXM';
const MOUNTAIN = 'a_P2nDysDt0';
const FOOD = 'CF33GT7iM9c';

const pack: CityPack = {
  country: 'TH',
  city: 'chiang-mai',
  places: [
    P('wat-phra-singh', 'attraction', 18.7884, 98.9817, WAT, 4.7, 17900, ['temples', 'history'], {
      ru: ['Ват Пхра Сингх', 'Главный храм старого города (XIV век) с золотой ступой и деревянной капеллой Лай Кхам, где хранится почитаемый Будда Пхра Сингх.', 'Загляните в капеллу Лай Кхам — фрески XIX века показывают жизнь старого Чиангмая.'],
      en: ['Wat Phra Singh', 'The old city’s main temple (14th century) with a golden stupa and the wooden Lai Kham chapel housing the revered Phra Singh Buddha.', 'Step into Lai Kham chapel — its 19th-century murals show old Chiang Mai life.'],
      es: ['Wat Phra Singh', 'El templo principal de la ciudad vieja (siglo XIV), con estupa dorada y la capilla de madera Lai Kham con el venerado buda Phra Singh.', 'Entra en la capilla Lai Kham: sus murales del XIX muestran la vida del viejo Chiang Mai.'],
      de: ['Wat Phra Singh', 'Der Haupttempel der Altstadt (14. Jh.) mit goldenem Stupa und der hölzernen Lai-Kham-Kapelle mit dem verehrten Phra-Singh-Buddha.', 'In die Lai-Kham-Kapelle gehen – Wandbilder aus dem 19. Jh. zeigen das alte Chiang Mai.'],
      fr: ['Wat Phra Singh', 'Le grand temple de la vieille ville (XIVe siècle), stupa doré et chapelle en bois Lai Kham abritant le vénéré bouddha Phra Singh.', 'Entrez dans la chapelle Lai Kham : ses fresques du XIXe montrent la vie du vieux Chiang Mai.'],
      it: ['Wat Phra Singh', 'Il tempio principale della città vecchia (XIV secolo), con stupa dorato e la cappella lignea Lai Kham che custodisce il venerato Buddha Phra Singh.', 'Entra nella cappella Lai Kham: gli affreschi ottocenteschi mostrano la vecchia Chiang Mai.'],
    }, { address: 'Samlarn Rd, Old City' }),
    P('wat-suan-dok', 'attraction', 18.7882, 98.9677, WAT, 4.6, 7400, ['temples', 'sunset', 'photo'], {
      ru: ['Ват Суан Док', 'Храм в бывшем саду Ланна с полем белых ступ — усыпальниц королевской семьи; на закате они светятся на фоне Дой Сутхеп.', 'Здесь проходят «беседы с монахом» — можно задать вопросы о буддизме на английском.'],
      en: ['Wat Suan Dok', 'A temple in a former Lanna garden with a field of white royal stupas that glow at sunset against Doi Suthep.', 'It hosts “monk chats” — ask about Buddhism in English.'],
      es: ['Wat Suan Dok', 'Un templo en un antiguo jardín lanna con un campo de estupas reales blancas que brillan al atardecer frente al Doi Suthep.', 'Organiza “charlas con monjes”: pregunta sobre budismo en inglés.'],
      de: ['Wat Suan Dok', 'Ein Tempel in einem einstigen Lanna-Garten mit einem Feld weißer Königsstupas, die bei Sonnenuntergang vor dem Doi Suthep leuchten.', 'Es gibt „Monk Chats“ – Fragen zum Buddhismus auf Englisch.'],
      fr: ['Wat Suan Dok', 'Un temple dans un ancien jardin lanna avec un champ de stupas royaux blancs qui s’illuminent au couchant devant le Doi Suthep.', 'On y pratique les « monk chats » : questions sur le bouddhisme en anglais.'],
      it: ['Wat Suan Dok', 'Un tempio in un antico giardino lanna con un campo di stupa reali bianchi che brillano al tramonto davanti al Doi Suthep.', 'Ci sono i “monk chat”: domande sul buddhismo in inglese.'],
    }, { spot: 'insta', price: free }),
    P('wat-sri-suphan', 'attraction', 18.782, 98.9862, WAT, 4.6, 9600, ['temples', 'art'], {
      ru: ['Серебряный храм Ват Шри Супхан', 'Храм в квартале серебряных дел мастеров, целиком покрытый чеканкой из серебра и алюминия; вечером его подсвечивают.', 'В сам убосот по традиции входят только мужчины; смотреть снаружи можно всем.'],
      en: ['Silver Temple (Wat Sri Suphan)', 'A temple in the silversmiths’ quarter clad entirely in embossed silver and aluminium, lit up at night.', 'By tradition only men enter the ordination hall itself; everyone can admire it from outside.'],
      es: ['Templo de Plata (Wat Sri Suphan)', 'Un templo en el barrio de los plateros, cubierto por completo de plata y aluminio repujados, iluminado de noche.', 'Por tradición solo los hombres entran en la sala de ordenación; todos pueden verla desde fuera.'],
      de: ['Silbertempel (Wat Sri Suphan)', 'Ein Tempel im Silberschmiedeviertel, ganz mit getriebenem Silber und Aluminium verkleidet, abends beleuchtet.', 'Die Ordinationshalle betreten traditionell nur Männer; von außen dürfen alle schauen.'],
      fr: ['Temple d’argent (Wat Sri Suphan)', 'Un temple du quartier des orfèvres entièrement revêtu d’argent et d’aluminium repoussés, illuminé le soir.', 'Par tradition, seuls les hommes entrent dans la salle d’ordination ; tous peuvent l’admirer de l’extérieur.'],
      it: ['Tempio d’argento (Wat Sri Suphan)', 'Un tempio nel quartiere degli argentieri interamente rivestito d’argento e alluminio sbalzati, illuminato la sera.', 'Per tradizione solo gli uomini entrano nella sala di ordinazione; tutti possono ammirarla da fuori.'],
    }, { address: '100 Wualai Rd' }),
    P('wat-lok-molee', 'attraction', 18.7951, 98.9834, WAT, 4.6, 6100, ['temples', 'history'], {
      ru: ['Ват Лок Моли', 'Древний храм у северного рва с огромной кирпичной ступой XVI века и резной тиковой капеллой.', 'Особенно красив вечером, когда зажигают фонари.'],
      en: ['Wat Lok Molee', 'An ancient temple by the northern moat with a huge 16th-century brick stupa and a carved teak chapel.', 'Loveliest in the evening when the lanterns are lit.'],
      es: ['Wat Lok Molee', 'Un antiguo templo junto al foso norte con una enorme estupa de ladrillo del siglo XVI y una capilla de teca tallada.', 'Es más bonito por la tarde-noche, con los farolillos encendidos.'],
      de: ['Wat Lok Molee', 'Ein alter Tempel am nördlichen Graben mit riesigem Ziegelstupa aus dem 16. Jh. und geschnitzter Teakkapelle.', 'Am schönsten abends, wenn die Laternen brennen.'],
      fr: ['Wat Lok Molee', 'Un temple ancien près des douves nord, avec un immense stupa de brique du XVIe siècle et une chapelle en teck sculpté.', 'Plus beau le soir, quand les lanternes s’allument.'],
      it: ['Wat Lok Molee', 'Un antico tempio sul fossato nord con un enorme stupa in mattoni del XVI secolo e una cappella in teak intagliato.', 'Più bello la sera, con le lanterne accese.'],
    }, { price: free }),
    P('bhubing-palace', 'attraction', 18.8052, 98.8988, MOUNTAIN, 4.4, 5700, ['gardens', 'mountains'], {
      ru: ['Дворец Пхубинг', 'Зимняя резиденция королевской семьи на склоне Дой Сутхеп с садами роз и прохладным горным воздухом.', 'Плечи и колени должны быть закрыты; дворец закрыт, когда в нём королевская семья.'],
      en: ['Bhubing Palace', 'The royal family’s winter residence on the slopes of Doi Suthep, with rose gardens and cool mountain air.', 'Cover shoulders and knees; it closes when the royal family is in residence.'],
      es: ['Palacio Bhubing', 'La residencia de invierno de la familia real en las laderas del Doi Suthep, con rosaledas y aire fresco de montaña.', 'Hombros y rodillas cubiertos; cierra cuando reside la familia real.'],
      de: ['Bhubing-Palast', 'Die Winterresidenz der Königsfamilie am Hang des Doi Suthep mit Rosengärten und kühler Bergluft.', 'Schultern und Knie bedecken; geschlossen, wenn die Königsfamilie anwesend ist.'],
      fr: ['Palais de Bhubing', 'La résidence d’hiver de la famille royale sur les pentes du Doi Suthep, roseraies et air frais de montagne.', 'Épaules et genoux couverts ; fermé lorsque la famille royale y séjourne.'],
      it: ['Palazzo Bhubing', 'La residenza invernale della famiglia reale sulle pendici del Doi Suthep, con roseti e aria fresca di montagna.', 'Spalle e ginocchia coperte; chiuso quando c’è la famiglia reale.'],
    }, { hours: '08:30–15:30' }),
    P('nimmanhaemin', 'attraction', 18.799, 98.968, CITY, 4.4, 12800, ['city', 'food', 'nomads'], {
      ru: ['Нимманхеминт', 'Модный район у университета: кофейни третьей волны, галереи, коворкинги и торговый центр Maya с баром на крыше.', 'Вечером поднимитесь на крышу Maya — закат над горами.'],
      en: ['Nimmanhaemin', 'The trendy district by the university: third-wave cafés, galleries, coworkings and Maya mall with a rooftop bar.', 'In the evening go up to Maya’s rooftop for sunset over the mountains.'],
      es: ['Nimmanhaemin', 'El barrio de moda junto a la universidad: cafés de tercera ola, galerías, coworkings y el centro Maya con bar en la azotea.', 'Por la tarde sube a la azotea del Maya: atardecer sobre las montañas.'],
      de: ['Nimmanhaemin', 'Das angesagte Viertel an der Uni: Third-Wave-Cafés, Galerien, Coworkings und die Maya Mall mit Rooftop-Bar.', 'Abends aufs Dach der Maya – Sonnenuntergang über den Bergen.'],
      fr: ['Nimmanhaemin', 'Le quartier branché près de l’université : cafés de troisième vague, galeries, coworkings et le centre Maya avec rooftop.', 'Le soir, montez sur le toit du Maya : coucher de soleil sur les montagnes.'],
      it: ['Nimmanhaemin', 'Il quartiere alla moda vicino all’università: caffè di terza ondata, gallerie, coworking e il centro Maya con rooftop bar.', 'La sera sali sul tetto del Maya: tramonto sulle montagne.'],
    }, { price: free }),
    P('night-bazaar', 'attraction', 18.7859, 99.001, FOOD, 4.2, 26900, ['market', 'shopping', 'nightlife'], {
      ru: ['Ночной базар Чиангмая', 'Квартал вечерних лавок с ремёслами северных племён, серебром, текстилем и уличной едой на Чанг-Клан-роуд.', 'Сравнивайте цены и торгуйтесь — начинают обычно с завышенной.'],
      en: ['Chiang Mai Night Bazaar', 'Blocks of evening stalls on Chang Klan Road: hill-tribe crafts, silver, textiles and street food.', 'Compare prices and haggle — opening prices are high.'],
      es: ['Night Bazaar de Chiang Mai', 'Manzanas de puestos nocturnos en Chang Klan Road: artesanía de tribus de montaña, plata, tejidos y comida.', 'Compara precios y regatea: el primer precio es alto.'],
      de: ['Nachtbasar Chiang Mai', 'Abendstände an der Chang Klan Road: Bergvolk-Handwerk, Silber, Textilien und Streetfood.', 'Preise vergleichen und handeln – der Anfangspreis ist hoch.'],
      fr: ['Night Bazaar de Chiang Mai', 'Des pâtés d’échoppes du soir sur Chang Klan Road : artisanat des ethnies montagnardes, argent, textiles et cuisine.', 'Comparez et marchandez : le premier prix est élevé.'],
      it: ['Night Bazaar di Chiang Mai', 'Isolati di bancarelle serali su Chang Klan Road: artigianato delle tribù di montagna, argento, tessuti e cibo.', 'Confronta i prezzi e contratta: il primo prezzo è alto.'],
    }, { price: free, hours: '17:00–23:00' }),
    P('baan-kang-wat', 'attraction', 18.7748, 98.948, FOREST, 4.5, 5900, ['art', 'shopping'], {
      ru: ['Деревня художников Баан Канг Ват', 'Зелёная «деревня» мастерских у подножия гор: керамика, бумага, книжный магазин и тихие кафе.', 'Приходите в выходные утром — работают мастер-классы и маленький рынок.'],
      en: ['Baan Kang Wat Artist Village', 'A leafy village of studios at the foot of the hills: ceramics, paper, a bookshop and quiet cafés.', 'Come on a weekend morning for workshops and a small market.'],
      es: ['Aldea de artistas Baan Kang Wat', 'Una aldea verde de talleres al pie de las colinas: cerámica, papel, librería y cafés tranquilos.', 'Ven un fin de semana por la mañana: talleres y un pequeño mercado.'],
      de: ['Künstlerdorf Baan Kang Wat', 'Ein grünes Dorf aus Ateliers am Fuß der Hügel: Keramik, Papier, Buchladen und ruhige Cafés.', 'Am Wochenendmorgen kommen – Workshops und ein kleiner Markt.'],
      fr: ['Village d’artistes Baan Kang Wat', 'Un village verdoyant d’ateliers au pied des collines : céramique, papier, librairie et cafés paisibles.', 'Venez un matin de week-end pour les ateliers et le petit marché.'],
      it: ['Villaggio degli artisti Baan Kang Wat', 'Un villaggio verde di laboratori ai piedi delle colline: ceramica, carta, una libreria e caffè tranquilli.', 'Vieni un mattino nel weekend per laboratori e mercatino.'],
    }, { spot: 'hidden', price: free }),
    P('bua-thong-waterfall', 'nature', 19.0756, 99.0806, MOUNTAIN, 4.7, 11800, ['waterfalls', 'adventure', 'photo'], {
      ru: ['«Липкий» водопад Буа Тонг', 'Многоуровневый водопад, по известковым ступеням которого можно подниматься босиком — камни не скользят.', 'Возьмите сменную одежду; приезжайте в будний день, в выходные много местных семей.'],
      en: ['Bua Thong “Sticky” Waterfall', 'A tiered waterfall whose limestone steps you can climb barefoot — the rock doesn’t slip.', 'Bring a change of clothes; come on a weekday to avoid weekend crowds.'],
      es: ['Cascada “pegajosa” Bua Thong', 'Una cascada escalonada cuyos peldaños de caliza se suben descalzo: la roca no resbala.', 'Lleva ropa de cambio; ve entre semana para evitar las multitudes.'],
      de: ['„Klebriger“ Wasserfall Bua Thong', 'Ein Stufenwasserfall, dessen Kalksteinstufen man barfuß hinaufklettern kann – der Fels rutscht nicht.', 'Wechselkleidung mitnehmen; unter der Woche kommen.'],
      fr: ['Cascade « collante » de Bua Thong', 'Une cascade en gradins dont on gravit pieds nus les marches calcaires : la roche n’est pas glissante.', 'Prévoyez des vêtements de rechange ; venez en semaine.'],
      it: ['Cascata “appiccicosa” di Bua Thong', 'Una cascata a gradoni di calcare che si risale a piedi nudi: la roccia non scivola.', 'Porta un cambio; vieni in settimana per evitare la folla.'],
    }, { spot: 'insta', price: free, hours: '08:00–17:00' }),
    P('elephant-nature-park', 'nature', 19.214, 98.859, FOREST, 4.8, 13200, ['wildlife', 'nature'], {
      ru: ['Elephant Nature Park', 'Известный приют для спасённых слонов в долине реки Тенг: без катания и шоу, только наблюдение, кормление и рассказ о каждом животном.', 'Бронируйте день заранее на официальном сайте; трансфер из города включён.'],
      en: ['Elephant Nature Park', 'A well-known sanctuary for rescued elephants in the Taeng valley: no riding or shows — just watching, feeding and each animal’s story.', 'Book a day visit ahead on the official site; transfer from town is included.'],
      es: ['Elephant Nature Park', 'Un conocido santuario de elefantes rescatados en el valle del Taeng: sin montar ni espectáculos, solo observar, alimentar y conocer su historia.', 'Reserva la visita en la web oficial; el traslado desde la ciudad está incluido.'],
      de: ['Elephant Nature Park', 'Ein bekanntes Schutzgebiet für gerettete Elefanten im Taeng-Tal: kein Reiten, keine Shows – beobachten, füttern und ihre Geschichten hören.', 'Den Tagesbesuch vorab auf der offiziellen Website buchen; Transfer inklusive.'],
      fr: ['Elephant Nature Park', 'Un sanctuaire réputé d’éléphants sauvés dans la vallée du Taeng : ni balade à dos ni spectacle, on observe, nourrit et découvre leur histoire.', 'Réservez la visite sur le site officiel ; transfert depuis la ville inclus.'],
      it: ['Elephant Nature Park', 'Un noto santuario di elefanti salvati nella valle del Taeng: niente cavalcate né spettacoli, solo osservare, nutrire e conoscerne la storia.', 'Prenota la visita sul sito ufficiale; il transfer dalla città è incluso.'],
    }),

    P('khao-soi-mae-sai', 'food', 18.7978, 98.9784, FOOD, 4.5, 5600, ['food', 'streetfood'], {
      ru: ['Khao Soi Mae Sai', 'Хао сой — северный суп-карри с яичной лапшой и хрустящей лапшой сверху; эта лавка в Чанг Пхыак — Bib Gourmand в гиде 2026.', 'Приходите до полудня: к обеду суп может закончиться; добавьте маринованную горчицу и лайм.'],
      en: ['Khao Soi Mae Sai', 'Khao soi — the northern curry noodle soup with crispy noodles on top; this Chang Phueak shop is Bib Gourmand in the 2026 guide.', 'Come before noon, it can sell out; add pickled mustard and lime.'],
      es: ['Khao Soi Mae Sai', 'Khao soi, la sopa de curry del norte con fideos de huevo y fideos crujientes encima; este local de Chang Phueak es Bib Gourmand en la guía 2026.', 'Ven antes del mediodía, se puede agotar; añade mostaza encurtida y lima.'],
      de: ['Khao Soi Mae Sai', 'Khao Soi – die nordthailändische Curry-Nudelsuppe mit knusprigen Nudeln obenauf; dieser Laden in Chang Phueak ist Bib Gourmand im Guide 2026.', 'Vor Mittag kommen, sonst ist sie aus; eingelegten Senfkohl und Limette dazu.'],
      fr: ['Khao Soi Mae Sai', 'Le khao soi, soupe de nouilles au curry du nord coiffée de nouilles croustillantes ; cette échoppe de Chang Phueak est Bib Gourmand au guide 2026.', 'Venez avant midi, il peut manquer ; ajoutez moutarde marinée et citron vert.'],
      it: ['Khao Soi Mae Sai', 'Il khao soi, zuppa di noodle al curry del nord con noodle croccanti sopra; questo locale di Chang Phueak è Bib Gourmand nella guida 2026.', 'Vieni prima di mezzogiorno, può finire; aggiungi senape in salamoia e lime.'],
    }, { price: level(1), michelin: { award: 'bib', year: 2026 }, address: 'Ratchaphuek Rd, Chang Phueak', menu: [
      ['Khao Soi Gai', 60, 'суп-карри с курицей и яичной лапшой|curry noodle soup with chicken|sopa de curry con fideos y pollo|Curry-Nudelsuppe mit Huhn|soupe de nouilles au curry et poulet|zuppa di noodle al curry con pollo'],
      ['Khao Soi Nuea', 70, 'то же с тушёной говядиной|the same with braised beef|lo mismo con ternera guisada|dasselbe mit Schmorrind|la même au bœuf braisé|lo stesso con manzo brasato'],
    ] }),
    P('khao-soi-nimman', 'food', 18.7963, 98.9688, FOOD, 4.5, 4200, ['food'], {
      ru: ['Khao Soi Nimman', 'Хао сой и северные блюда в районе Нимман; в подборке Bib Gourmand гида 2026.', 'Кроме хао соя закажите «гэнг хангле» — бирманское карри со свининой — и рёбрышки на гриле.'],
      en: ['Khao Soi Nimman', 'Khao soi and northern dishes in the Nimman area; on the 2026 Bib Gourmand list.', 'Besides khao soi, order gaeng hang lay, Burmese-style pork curry, and grilled ribs.'],
      es: ['Khao Soi Nimman', 'Khao soi y platos del norte en la zona de Nimman; en la lista Bib Gourmand de 2026.', 'Además del khao soi pide gaeng hang lay, curry de cerdo birmano, y costillas a la parrilla.'],
      de: ['Khao Soi Nimman', 'Khao Soi und nordthailändische Gerichte im Nimman-Viertel; Bib Gourmand 2026.', 'Neben Khao Soi das Gaeng Hang Lay (burmesisches Schweinecurry) und gegrillte Rippchen bestellen.'],
      fr: ['Khao Soi Nimman', 'Khao soi et plats du nord dans le quartier de Nimman ; sélection Bib Gourmand 2026.', 'Outre le khao soi, prenez le gaeng hang lay, curry de porc birman, et des travers grillés.'],
      it: ['Khao Soi Nimman', 'Khao soi e piatti del nord nella zona di Nimman; nella lista Bib Gourmand 2026.', 'Oltre al khao soi ordina il gaeng hang lay, curry di maiale birmano, e le costine alla griglia.'],
    }, { price: level(1), michelin: { award: 'bib', year: 2026 }, address: 'Nimmanhaemin Soi 7', menu: [
      ['Khao Soi', 99, 'суп-карри с лапшой|curry noodle soup|sopa de fideos al curry|Curry-Nudelsuppe|soupe de nouilles au curry|zuppa di noodle al curry'],
      ['Gaeng Hang Lay', 150, 'бирманское карри со свининой|Burmese-style pork curry|curry de cerdo birmano|burmesisches Schweinecurry|curry de porc birman|curry di maiale birmano'],
    ] }),
    P('khao-soi-lung-prakit', 'food', 18.7915, 99.0007, FOOD, 4.5, 2600, ['food', 'streetfood'], {
      ru: ['Khao Soi Lung Prakit Kad Kom', 'Маленькая семейная лавка у рынка Кад Ком с одним из самых насыщенных хао соев города.', 'Работает только днём и закрывается, когда кончается бульон.'],
      en: ['Khao Soi Lung Prakit Kad Kom', 'A small family shop by Kad Kom market serving one of the city’s richest khao soi.', 'Daytime only — it closes when the broth runs out.'],
      es: ['Khao Soi Lung Prakit Kad Kom', 'Un pequeño local familiar junto al mercado Kad Kom con uno de los khao soi más intensos de la ciudad.', 'Solo de día: cierra cuando se acaba el caldo.'],
      de: ['Khao Soi Lung Prakit Kad Kom', 'Ein kleiner Familienladen am Kad-Kom-Markt mit einem der kräftigsten Khao Soi der Stadt.', 'Nur tagsüber – schließt, wenn die Brühe aus ist.'],
      fr: ['Khao Soi Lung Prakit Kad Kom', 'Une petite échoppe familiale près du marché Kad Kom, avec l’un des khao soi les plus riches de la ville.', 'En journée seulement : ferme quand le bouillon est épuisé.'],
      it: ['Khao Soi Lung Prakit Kad Kom', 'Un piccolo locale di famiglia vicino al mercato Kad Kom con uno dei khao soi più ricchi della città.', 'Solo di giorno: chiude quando finisce il brodo.'],
    }, { price: level(1), address: 'Kad Kom, near Ping River', menu: [
      ['Khao Soi Gai', 60, 'суп-карри с куриной ножкой|curry noodle soup with chicken leg|sopa de curry con muslo de pollo|Curry-Nudelsuppe mit Hähnchenkeule|soupe au curry et cuisse de poulet|zuppa al curry con coscia di pollo'],
      ['Khao Soi Moo', 60, 'то же со свининой|the same with pork|lo mismo con cerdo|dasselbe mit Schwein|la même au porc|lo stesso con maiale'],
    ] }),
    P('sp-chicken', 'food', 18.7861, 98.9822, FOOD, 4.5, 5100, ['food'], {
      ru: ['SP Chicken', 'Курица-гриль с чесноком и травами, запечённая целиком на вертеле, с соусами и клейким рисом — рядом с Ват Пхра Сингх.', 'Целой курицы хватит на двоих; к ней — сом там и клейкий рис.'],
      en: ['SP Chicken', 'Whole rotisserie chicken stuffed with garlic and herbs, with dipping sauces and sticky rice, near Wat Phra Singh.', 'A whole bird feeds two; add som tam and sticky rice.'],
      es: ['SP Chicken', 'Pollo entero asado relleno de ajo y hierbas, con salsas y arroz glutinoso, junto a Wat Phra Singh.', 'Un pollo entero da para dos; añade som tam y arroz glutinoso.'],
      de: ['SP Chicken', 'Ganzes Grillhähnchen mit Knoblauch und Kräutern, Dips und Klebreis, nahe dem Wat Phra Singh.', 'Ein ganzes Huhn reicht für zwei; dazu Som Tam und Klebreis.'],
      fr: ['SP Chicken', 'Poulet entier rôti farci d’ail et d’herbes, sauces et riz gluant, près du Wat Phra Singh.', 'Un poulet entier pour deux ; ajoutez som tam et riz gluant.'],
      it: ['SP Chicken', 'Pollo intero allo spiedo farcito con aglio ed erbe, con salse e riso glutinoso, vicino al Wat Phra Singh.', 'Un pollo intero basta per due; aggiungi som tam e riso glutinoso.'],
    }, { price: level(1), address: '9/1 Samlarn Soi 1', menu: [
      ['Gai Yang (whole)', 200, 'целая курица-гриль с чесноком|whole garlic rotisserie chicken|pollo entero asado al ajo|ganzes Knoblauch-Grillhähnchen|poulet rôti entier à l’ail|pollo intero allo spiedo all’aglio'],
      ['Som Tam', 60, 'острый салат из папайи|spicy papaya salad|ensalada picante de papaya|scharfer Papayasalat|salade de papaye épicée|insalata piccante di papaya'],
    ] }),
    P('cherng-doi', 'food', 18.7954, 98.9706, FOOD, 4.4, 3800, ['food'], {
      ru: ['Cherng Doi Roast Chicken', 'Курица на гриле по-исански с тонкой хрустящей кожей и острыми соусами, рядом с Нимманом.', 'Берите с ларбом и клейким рисом; вечером бывает очередь.'],
      en: ['Cherng Doi Roast Chicken', 'Isan-style grilled chicken with thin crisp skin and fiery sauces, close to Nimman.', 'Pair it with larb and sticky rice; expect an evening queue.'],
      es: ['Cherng Doi Roast Chicken', 'Pollo a la parrilla al estilo de Isan con piel fina y crujiente y salsas picantes, cerca de Nimman.', 'Acompáñalo con larb y arroz glutinoso; por la noche hay cola.'],
      de: ['Cherng Doi Roast Chicken', 'Grillhähnchen nach Isan-Art mit dünner Knusperhaut und scharfen Saucen, nahe Nimman.', 'Mit Larb und Klebreis; abends gibt es eine Schlange.'],
      fr: ['Cherng Doi Roast Chicken', 'Poulet grillé façon Isan à la peau fine et croustillante, sauces relevées, près de Nimman.', 'Avec du larb et du riz gluant ; file d’attente le soir.'],
      it: ['Cherng Doi Roast Chicken', 'Pollo grigliato alla Isan con pelle sottile e croccante e salse piccanti, vicino a Nimman.', 'Con larb e riso glutinoso; la sera c’è coda.'],
    }, { price: level(1), address: 'Suthep Rd', menu: [
      ['Gai Yang', 120, 'курица-гриль с хрустящей кожей|grilled chicken with crisp skin|pollo a la parrilla crujiente|Grillhähnchen mit knuspriger Haut|poulet grillé à la peau croustillante|pollo grigliato con pelle croccante'],
      ['Larb Moo', 90, 'острый салат из свиного фарша с травами|spicy minced pork salad with herbs|ensalada picante de cerdo picado|scharfer Hackfleischsalat mit Kräutern|salade épicée de porc haché|insalata piccante di maiale tritato'],
    ] }),
    P('cowboy-hat-khao-kha-moo', 'food', 18.7955, 98.9852, FOOD, 4.4, 6700, ['food', 'streetfood', 'nightlife'], {
      ru: ['Khao Kha Moo Chang Phueak («леди в ковбойской шляпе»)', 'Знаменитая вечерняя лавка у ворот Чанг Пхыак: тушёная свиная рулька на рисе от хозяйки в фирменной ковбойской шляпе.', 'Появляется ближе к вечеру; добавьте маринованную горчицу и яйцо.'],
      en: ['Khao Kha Moo Chang Phueak (the “cowboy hat lady”)', 'The famous evening stall at Chang Phueak Gate: braised pork leg over rice, served by the owner in her trademark cowboy hat.', 'Opens towards evening; add pickled mustard and an egg.'],
      es: ['Khao Kha Moo Chang Phueak (la “señora del sombrero vaquero”)', 'El famoso puesto nocturno de la puerta Chang Phueak: codillo de cerdo guisado sobre arroz, servido por la dueña con su sombrero vaquero.', 'Abre hacia la tarde; añade mostaza encurtida y huevo.'],
      de: ['Khao Kha Moo Chang Phueak (die „Cowboyhut-Lady“)', 'Der berühmte Abendstand am Chang-Phueak-Tor: geschmorte Schweinshaxe auf Reis, serviert von der Besitzerin mit Cowboyhut.', 'Öffnet gegen Abend; eingelegten Senfkohl und ein Ei dazu.'],
      fr: ['Khao Kha Moo Chang Phueak (la « dame au chapeau de cow-boy »)', 'Le célèbre stand du soir à la porte Chang Phueak : jarret de porc braisé sur riz, servi par la patronne à chapeau de cow-boy.', 'Ouvre en fin de journée ; ajoutez moutarde marinée et œuf.'],
      it: ['Khao Kha Moo Chang Phueak (la “signora col cappello da cowboy”)', 'Il famoso banco serale alla porta Chang Phueak: stinco di maiale brasato sul riso, servito dalla titolare col cappello da cowboy.', 'Apre verso sera; aggiungi senape in salamoia e uovo.'],
    }, { price: level(1), address: 'Chang Phueak Gate night market', menu: [
      ['Khao Kha Moo', 60, 'тушёная свиная рулька на рисе|braised pork leg over rice|codillo de cerdo guisado con arroz|geschmorte Haxe auf Reis|jarret de porc braisé sur riz|stinco di maiale brasato sul riso'],
      ['Khai Palo', 15, 'яйцо в соевом бульоне|egg stewed in soy|huevo guisado en soja|in Soja geschmortes Ei|œuf mijoté au soja|uovo stufato nella soia'],
    ] }),
    P('tong-tem-toh', 'food', 18.7987, 98.968, FOOD, 4.4, 8900, ['food'], {
      ru: ['Tong Tem Toh', 'Северотайская кухня на открытой веранде в Нимман-сой 13: гриль, острые пасты-дипы и сосиска «сай уа».', 'Закажите сет «нам прик» с овощами и сай уа; вечером много людей — придите пораньше.'],
      en: ['Tong Tem Toh', 'Northern Thai cooking on an open terrace on Nimman Soi 13: grills, chilli dips and sai ua sausage.', 'Order the nam prik dips with vegetables and sai ua; come early in the evening.'],
      es: ['Tong Tem Toh', 'Cocina del norte de Tailandia en una terraza abierta en Nimman Soi 13: parrilla, salsas de chile y salchicha sai ua.', 'Pide los nam prik con verduras y sai ua; llega temprano por la noche.'],
      de: ['Tong Tem Toh', 'Nordthailändische Küche auf einer offenen Terrasse an der Nimman Soi 13: Grill, Chili-Dips und Sai-Ua-Wurst.', 'Die Nam-Prik-Dips mit Gemüse und Sai Ua bestellen; abends früh kommen.'],
      fr: ['Tong Tem Toh', 'Cuisine du nord de la Thaïlande sur une terrasse ouverte de Nimman Soi 13 : grillades, sauces pimentées et saucisse sai ua.', 'Prenez les nam prik aux légumes et la sai ua ; arrivez tôt le soir.'],
      it: ['Tong Tem Toh', 'Cucina del nord della Thailandia su una terrazza aperta in Nimman Soi 13: griglia, salse al peperoncino e salsiccia sai ua.', 'Ordina i nam prik con verdure e la sai ua; arriva presto la sera.'],
    }, { price: level(1), address: '11 Nimmanhaemin Soi 13', menu: [
      ['Sai Ua', 120, 'северная пряная сосиска|northern herb sausage|salchicha especiada del norte|nordthailändische Kräuterwurst|saucisse aux herbes du nord|salsiccia speziata del nord'],
      ['Nam Prik Num', 80, 'паста из жареного зелёного чили с овощами|roasted green-chilli dip with vegetables|salsa de chile verde asado con verduras|Dip aus geröstetem grünem Chili mit Gemüse|sauce au piment vert grillé et légumes|salsa di peperoncino verde arrostito con verdure'],
      ['Kaeng Hang Lay', 140, 'бирманское карри со свининой|Burmese-style pork curry|curry de cerdo birmano|burmesisches Schweinecurry|curry de porc birman|curry di maiale birmano'],
    ] }),
    P('kiat-ocha', 'food', 18.7895, 98.9876, FOOD, 4.3, 3700, ['food', 'streetfood'], {
      ru: ['Kiat Ocha', 'Курица по-хайнаньски и сатай в старом городе — с утра здесь очередь из местных.', 'Возьмите микс из отварной и жареной курицы и порцию сатая.'],
      en: ['Kiat Ocha', 'Hainanese chicken rice and satay in the old city — locals queue from the morning.', 'Get the mix of poached and fried chicken plus a satay plate.'],
      es: ['Kiat Ocha', 'Arroz con pollo hainanés y satay en la ciudad vieja: los locales hacen cola desde la mañana.', 'Pide la mezcla de pollo escalfado y frito y un plato de satay.'],
      de: ['Kiat Ocha', 'Hainan-Hähnchenreis und Satay in der Altstadt – Einheimische stehen ab morgens an.', 'Die Mischung aus pochiertem und frittiertem Huhn und einen Satay-Teller nehmen.'],
      fr: ['Kiat Ocha', 'Riz au poulet hainanais et satay dans la vieille ville : les habitants font la queue dès le matin.', 'Prenez le mélange poulet poché-frit et une assiette de satay.'],
      it: ['Kiat Ocha', 'Riso al pollo hainanese e satay in città vecchia: i locali fanno la coda dal mattino.', 'Prendi il misto di pollo bollito e fritto e un piatto di satay.'],
    }, { price: level(1), address: 'Inthawarorot Rd', menu: [
      ['Khao Man Gai', 60, 'курица на пару с рисом на бульоне|poached chicken with stock rice|pollo escalfado con arroz al caldo|pochiertes Huhn mit Brühreis|poulet poché et riz au bouillon|pollo bollito con riso al brodo'],
      ['Moo Satay', 80, 'свиной сатай с арахисовым соусом|pork satay with peanut sauce|satay de cerdo con cacahuete|Schweine-Satay mit Erdnusssauce|satay de porc sauce cacahuète|satay di maiale con arachidi'],
    ] }),
    P('ginger-farm-kitchen', 'food', 18.8, 98.9675, FOOD, 4.5, 4300, ['food', 'gardens'], {
      ru: ['Ginger Farm Kitchen', 'Северотайская кухня из продуктов собственной органической фермы в One Nimman — уютно и без острых сюрпризов.', 'Хорошее место, чтобы попробовать северные блюда в мягкой версии; спросите про остроту.'],
      en: ['Ginger Farm Kitchen', 'Northern Thai cooking from its own organic farm, in One Nimman — cosy and without fiery surprises.', 'A good place to try northern dishes in a gentler version; ask about spice.'],
      es: ['Ginger Farm Kitchen', 'Cocina del norte con producto de su propia granja ecológica, en One Nimman: acogedor y sin sustos de picante.', 'Buen lugar para probar el norte en versión suave; pregunta por el picante.'],
      de: ['Ginger Farm Kitchen', 'Nordthailändische Küche aus eigener Biofarm im One Nimman – gemütlich und ohne scharfe Überraschungen.', 'Gut, um nordthailändische Gerichte milder zu probieren; nach der Schärfe fragen.'],
      fr: ['Ginger Farm Kitchen', 'Cuisine du nord thaï de sa propre ferme bio, à One Nimman : chaleureux et sans mauvaise surprise côté piment.', 'Idéal pour goûter le nord en version douce ; demandez le niveau d’épices.'],
      it: ['Ginger Farm Kitchen', 'Cucina del nord con prodotti della propria fattoria biologica, a One Nimman: accogliente e senza sorprese piccanti.', 'Buon posto per provare il nord in versione delicata; chiedi del piccante.'],
    }, { price: level(2), address: 'One Nimman', menu: [
      ['Khao Soi Gai', 165, 'суп-карри с курицей|curry noodle soup with chicken|sopa de curry con pollo|Curry-Nudelsuppe mit Huhn|soupe au curry et poulet|zuppa al curry con pollo'],
      ['Northern Platter', 290, 'ассорти северных закусок|northern Thai sampler|surtido de entrantes del norte|nordthailändische Vorspeisenplatte|assortiment d’entrées du nord|assaggio di antipasti del nord'],
    ] }),
    P('ristr8to', 'food', 18.796, 98.9678, CITY, 4.6, 5600, ['food', 'nomads'], {
      ru: ['Ristr8to', 'Кофейня чемпиона мира по латте-арту: эспрессо-напитки с рисунками и зерно с северных ферм.', 'Попробуйте фирменный «Satan Latte» — крепкий и с латте-артом.'],
      en: ['Ristr8to', 'The café of a latte-art world champion: espresso drinks with designs and beans from northern farms.', 'Try the signature “Satan Latte” — strong, with latte art.'],
      es: ['Ristr8to', 'El café de un campeón mundial de latte art: bebidas de espresso con dibujos y grano de granjas del norte.', 'Prueba el “Satan Latte” de la casa: intenso y con latte art.'],
      de: ['Ristr8to', 'Das Café eines Latte-Art-Weltmeisters: Espressogetränke mit Motiven und Bohnen aus dem Norden.', 'Den Signature-„Satan Latte“ probieren – stark, mit Latte Art.'],
      fr: ['Ristr8to', 'Le café d’un champion du monde de latte art : boissons espresso dessinées et grains des fermes du nord.', 'Goûtez le « Satan Latte » maison : corsé, avec latte art.'],
      it: ['Ristr8to', 'Il caffè di un campione del mondo di latte art: bevande espresso con disegni e chicchi delle fattorie del nord.', 'Prova il “Satan Latte” della casa: forte, con latte art.'],
    }, { price: level(1), address: 'Nimmanhaemin Rd', menu: [
      ['Satan Latte', 110, 'крепкий латте с латте-артом|strong latte with latte art|latte intenso con latte art|starker Latte mit Latte Art|latte corsé avec latte art|latte forte con latte art'],
      ['Flat White', 90, 'флэт уайт|flat white|flat white|Flat White|flat white|flat white'],
    ] }),
  ],
  routes: [
    D(['wat-lok-molee', 'wat-phra-singh', '=chiang-mai-wat-chedi-luang', 'sp-chicken', 'wat-sri-suphan', '=chiang-mai-tha-phae-gate', 'night-bazaar', '=chiang-mai-kalare-night-bazaar'],
      'Храмы старого города и ночной базар|Old-city temples and the Night Bazaar|Templos de la ciudad vieja y el Night Bazaar|Altstadttempel und Nachtbasar|Temples de la vieille ville et Night Bazaar|Templi della città vecchia e Night Bazaar'),
    D(['=chiang-mai-doi-suthep', 'bhubing-palace', '=chiang-mai-wat-umong', 'baan-kang-wat', 'khao-soi-nimman', 'wat-suan-dok', 'ristr8to', 'nimmanhaemin', 'tong-tem-toh'],
      'Дой Сутхеп, лесные храмы и Нимман|Doi Suthep, forest temples and Nimman|Doi Suthep, templos del bosque y Nimman|Doi Suthep, Waldtempel und Nimman|Doi Suthep, temples de la forêt et Nimman|Doi Suthep, templi nella foresta e Nimman'),
    D(['khao-soi-mae-sai', 'elephant-nature-park', 'bua-thong-waterfall', 'cowboy-hat-khao-kha-moo'],
      'Слоны и «липкий» водопад|Elephants and the sticky waterfall|Elefantes y la cascada pegajosa|Elefanten und der klebrige Wasserfall|Éléphants et cascade collante|Elefanti e la cascata appiccicosa'),
  ],
};

export default pack;
