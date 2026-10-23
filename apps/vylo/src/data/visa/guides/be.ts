import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'BE',
  checked: '2026-10',
  fees: { visa: { kind: 'fixed', amount: 90, currency: 'EUR' } },
  stay: { visa: 90 },
  links: { immigration: 'https://dofi.ibz.be' },
  docs: ['insurance', 'returnTicket', 'booking', 'finance'],
  passportMonths: 3,
  rule: { days: 90, window: 180 },
  visaRun: 'no',
  transit: { hours: 24 },
  waivers: [
    { holds: ['resEU'], status: 'free', days: 90 },
    { holds: ['visaSchengen'], status: 'free', days: 90 },
  ],
  text: {
    ru: {
      summary:
        'Бельгия входит в Шенген: граждане ЕС, ЕЭЗ и Швейцарии въезжают по ID-карте, а граждане США, Великобритании, Канады, Австралии, Японии, Бразилии, Украины и других безвизовых стран — до 90 дней в любые 180. Россиянам, индийцам, китайцам, марокканцам, конголезцам и многим другим нужна шенгенская виза за 90 €; правила публикует ведомство по делам иностранцев на dofi.ibz.be.',
      apply:
        'Подают в бельгийское посольство или консульство по месту жительства; в большинстве стран документы и отпечатки принимает TLScontact (кое-где — VFS Global). Сбор — 90 € плюс сервисный, решение — обычно 15 дней, но в Киншасе, Касабланке и Дели в сезон дольше. Во многих странах бельгийские посольства оформляют и визы в Люксембург — если едете в оба, подавайте туда, где больше ночей.',
      visaRun:
        'Визаран не работает: 90 дней считаются по всему Шенгену в скользящем окне 180 дней. Поездка на «Евростаре» в Лондон счётчик не обнуляет — дни там лишь не идут; с апреля 2026 года EES фиксирует каждый въезд и выезд.',
      transit:
        'Пересадка в брюссельском аэропорту Завентем между двумя рейсами за пределы Шенгена — например, из Африки в Северную Америку — большинству не требует визы, если не выходить из транзитной зоны. Гражданам из общего списка ЕС (ДР Конго, Гана, Нигерия, Эритрея, Эфиопия, Пакистан и др.) нужна транзитная виза — кроме владельцев действующей визы или ВНЖ США, Канады, Японии или страны ЕЭЗ.',
      hacks: [
        'Если вы гостите у друзей или родственников, они могут подписать в своей коммуне обязательство о содержании (приложение 3bis) — это заменяет доказательство собственных средств для визы и границы.',
        'Подтверждение прибытия теперь можно подать онлайн через приложение My Address in Belgium за пару минут, без визита в коммуну.',
        'На «Евростаре» из Брюсселя выездной шенгенский и британский въездной контроль проходят прямо на вокзале Брюссель-Юг: приезжайте минимум за 60–90 минут.',
        'Молодые австралийцы, канадцы, новозеландцы, японцы, южнокорейцы и тайваньцы могут получить в Бельгии визу working holiday на год.',
      ],
      pitfalls: [
        'Если вы живёте не в отеле, о прибытии нужно заявить в течение 3 рабочих дней — с апреля 2026 года онлайн через My Address in Belgium. Гости отелей освобождены; за пропуск грозят вопросы при проверке документов.',
        'Сайты, продающие «ускоренную» бельгийскую визу или запись в TLScontact, — посредники. Запись бесплатна, а платные «премиум»-услуги центра не ускоряют решение консульства.',
        'Подавайте в Бельгию, только если это основная страна поездки. Дешёвый рейс в Шарлеруа ради тура по Франции — не повод: подавать нужно туда, где больше ночей.',
      ],
      waivers: [
        'Действующий ВНЖ или долгосрочная виза D любой шенгенской страны позволяют ездить в Бельгию без визы до 90 дней в любые 180. Ирландский и кипрский ВНЖ не подходят.',
        'Шенгенская виза другой страны действует и в Бельгии в пределах своих дат и числа дней. Первую поездку лучше совершить в страну, выдавшую визу.',
      ],
      passports: {
        RU: 'Бельгийские визы в России выдают ограниченно, а с ноября 2025 года, как правило, однократные; сбор — полные 90 €. Часто проще подать в стране, где у вас есть ВНЖ. Прямых рейсов нет — летают через Стамбул; российские карты не работают.',
        US: 'Гражданам США виза не нужна: 90 дней в любые 180. Запуск ETIAS (20 €) отложен, раньше 2027 года его не ждут.',
        GB: 'Британцы ограничены 90 днями в 180. Паспорт должен быть моложе 10 лет на дату въезда и действовать ещё 3 месяца после выезда; на «Евростаре» шенгенский контроль (его ведёт французская полиция) проходят ещё в Лондоне.',
        CD: 'Гражданам ДР Конго нужны и шенгенская виза, и транзитная виза для пересадок в аэропортах Шенгена. Записи в бельгийский центр в Киншасе разбирают задолго — подавайте за 2–3 месяца.',
        IN: 'Гражданам Индии нужна шенгенская виза. По правилу «каскада» после двух правильно использованных виз за три года дают многократную визу на 2 года, затем на 5 лет.',
        UA: 'Граждане Украины с биометрическим паспортом въезжают без визы на 90 дней в 180; временная защита в ЕС продлена до марта 2027 года.',
      },
    },
    en: {
      summary:
        'Belgium is in Schengen: EU, EEA and Swiss citizens enter with an ID card, while US, UK, Canadian, Australian, Japanese, Brazilian, Ukrainian and other visa-exempt travellers stay up to 90 days in any 180. Russian, Indian, Chinese, Moroccan, Congolese and many other passport holders need a €90 Schengen visa; the rules are published by the Immigration Office on dofi.ibz.be.',
      apply:
        'Apply to the Belgian embassy or consulate for where you live; in most countries TLScontact takes documents and fingerprints (VFS Global in some). The fee is €90 plus the service charge, and decisions usually take 15 days — longer in peak season in Kinshasa, Casablanca and Delhi. In many countries Belgian embassies also issue visas for Luxembourg — if you’re visiting both, apply where you spend more nights.',
      visaRun:
        'Visa runs don’t work: the 90 days are counted across the whole Schengen area over any rolling 180-day window. A Eurostar trip to London doesn’t reset the clock — the days there just don’t count; since April 2026 the EES records every entry and exit.',
      transit:
        'Changing planes at Brussels Airport (Zaventem) between two non-Schengen flights — say, from Africa to North America — needs no visa for most nationalities, as long as you stay airside. Citizens on the EU airport-transit-visa list (DR Congo, Ghana, Nigeria, Eritrea, Ethiopia, Pakistan and others) need one, unless they hold a valid US, Canadian, Japanese or EEA visa or residence permit.',
      hacks: [
        'If you’re staying with friends or family, they can sign a financial guarantee (Annex 3bis) at their municipality — it replaces proof of your own funds for the visa and at the border.',
        'You can now file your arrival declaration online through the My Address in Belgium app in a couple of minutes, with no trip to the town hall.',
        'On the Eurostar from Brussels, Schengen exit and UK entry checks both happen at Brussels-Midi station: arrive at least 60–90 minutes early.',
        'Young Australians, Canadians, New Zealanders, Japanese, South Koreans and Taiwanese can get a one-year Belgian working holiday visa.',
      ],
      pitfalls: [
        'If you aren’t staying in a hotel, you must declare your arrival within 3 working days — since April 2026 online via My Address in Belgium. Hotel guests are exempt; skipping it can cause trouble at an ID check.',
        'Sites selling a “fast-track” Belgian visa or TLScontact slot are middlemen. Booking is free, and the centre’s paid “premium” services don’t speed up the consulate’s decision.',
        'Apply to Belgium only if it’s your main destination. A cheap flight to Charleroi for a tour of France is no reason — apply where you spend the most nights.',
      ],
      waivers: [
        'A valid residence permit or long-stay D visa from any Schengen country lets you visit Belgium visa-free for up to 90 days in any 180. Irish and Cypriot permits don’t count.',
        'A Schengen visa issued by another member state is valid in Belgium within its dates and number of days. Make the first trip to the issuing country.',
      ],
      passports: {
        RU: 'Belgium issues few visas in Russia, and since November 2025 they’re usually single-entry; the fee is the full €90. It’s often easier to apply in a country where you hold residence. There are no direct flights — routes go via Istanbul; Russian bank cards don’t work.',
        US: 'US citizens need no visa: 90 days in any 180. ETIAS (€20) has been delayed and isn’t expected before 2027.',
        GB: 'UK citizens are limited to 90 days in 180. Your passport must be under 10 years old on the day you enter and valid for 3 months after you leave; on the Eurostar, the Schengen entry check (run by French police) happens in London.',
        CD: 'Congolese citizens need both a Schengen visa and an airport transit visa for connections at Schengen airports. Slots at the Belgian centre in Kinshasa go well in advance — apply 2–3 months ahead.',
        IN: 'Indian citizens need a Schengen visa. Under the EU “cascade”, two visas used correctly within three years earn a 2-year multiple-entry visa, then a 5-year one.',
        UA: 'Ukrainians with a biometric passport enter visa-free for 90 days in 180; temporary protection in the EU runs until March 2027.',
      },
    },
    es: {
      summary:
        'Bélgica forma parte de Schengen: los ciudadanos de la UE, el EEE y Suiza entran con el DNI, y los de EE. UU., Reino Unido, Canadá, Australia, Japón, Brasil, Ucrania y otros países exentos se quedan hasta 90 días en cualquier periodo de 180. Quienes tienen pasaporte ruso, indio, chino, marroquí, congoleño y muchos otros necesitan un visado Schengen de 90 €; las normas las publica la Oficina de Extranjería en dofi.ibz.be.',
      apply:
        'Se solicita en la embajada o el consulado belga que corresponde a tu residencia; en la mayoría de países documentos y huellas los recoge TLScontact (en algunos, VFS Global). La tasa es de 90 € más el servicio y la resolución suele tardar 15 días, más en temporada alta en Kinsasa, Casablanca y Delhi. En muchos países las embajadas belgas también tramitan visados para Luxemburgo: si visitas ambos, solicita donde pases más noches.',
      visaRun:
        'Los visa runs no sirven: los 90 días se cuentan en todo Schengen dentro de una ventana móvil de 180. Ir a Londres en Eurostar no reinicia el contador; esos días simplemente no cuentan, y desde abril de 2026 el EES registra cada entrada y salida.',
      transit:
        'Para cambiar de avión en el aeropuerto de Bruselas (Zaventem) entre dos vuelos fuera de Schengen —por ejemplo, de África a Norteamérica— la mayoría no necesita visado, si no sale de la zona de tránsito. Los ciudadanos de la lista europea de visado de tránsito aeroportuario (RD del Congo, Ghana, Nigeria, Eritrea, Etiopía, Pakistán y otros) sí lo necesitan, salvo que tengan visado o residencia vigente de EE. UU., Canadá, Japón o un país del EEE.',
      hacks: [
        'Si te alojas con amigos o familia, pueden firmar en su ayuntamiento un compromiso de toma a cargo (anexo 3bis), que sustituye la prueba de tus propios medios para el visado y en la frontera.',
        'La declaración de llegada ya se puede hacer en línea con la aplicación My Address in Belgium en un par de minutos, sin pasar por el ayuntamiento.',
        'En el Eurostar desde Bruselas, la salida de Schengen y la entrada al Reino Unido se controlan en la propia estación de Bruselas-Midi: llega con al menos 60–90 minutos.',
        'Los jóvenes de Australia, Canadá, Nueva Zelanda, Japón, Corea del Sur y Taiwán pueden obtener un visado de vacaciones y trabajo de un año en Bélgica.',
      ],
      pitfalls: [
        'Si no te alojas en un hotel, debes declarar tu llegada en 3 días hábiles; desde abril de 2026, en línea con My Address in Belgium. Los huéspedes de hotel están exentos; saltártelo puede darte problemas en un control de identidad.',
        'Las webs que venden un visado belga «exprés» o una cita de TLScontact son intermediarias. La cita es gratuita y los servicios «premium» del centro no aceleran la decisión del consulado.',
        'Solicita en Bélgica solo si es tu destino principal. Un vuelo barato a Charleroi para recorrer Francia no es motivo: solicita donde pases más noches.',
      ],
      waivers: [
        'Un permiso de residencia o un visado nacional D vigente de cualquier país Schengen te permite visitar Bélgica sin visado hasta 90 días en 180. Los permisos de Irlanda y Chipre no valen.',
        'Un visado Schengen expedido por otro Estado miembro vale en Bélgica dentro de sus fechas y su número de días. Haz el primer viaje al país emisor.',
      ],
      passports: {
        RU: 'Bélgica expide pocos visados en Rusia y, desde noviembre de 2025, suelen ser de una sola entrada; la tasa es la completa, 90 €. A menudo es más fácil solicitarlo en un país donde tengas residencia. No hay vuelos directos —se vuela vía Estambul— y las tarjetas rusas no funcionan.',
        US: 'Los ciudadanos estadounidenses no necesitan visado: 90 días en 180. El ETIAS (20 €) se ha retrasado y no se espera antes de 2027.',
        GB: 'Los británicos tienen un límite de 90 días en 180. El pasaporte debe tener menos de 10 años el día de entrada y seguir vigente 3 meses después de salir; en el Eurostar, el control Schengen (a cargo de la policía francesa) se hace ya en Londres.',
        CD: 'Los congoleños necesitan visado Schengen y, además, visado de tránsito aeroportuario para las escalas en aeropuertos Schengen. Las citas del centro belga en Kinsasa se agotan con mucha antelación: solicítalo con 2–3 meses de margen.',
        IN: 'Los ciudadanos indios necesitan visado Schengen. Con la «cascada» europea, dos visados bien usados en tres años dan uno de entradas múltiples de 2 años y luego de 5.',
        UA: 'Los ucranianos con pasaporte biométrico entran sin visado durante 90 días en 180; la protección temporal en la UE dura hasta marzo de 2027.',
      },
    },
    de: {
      summary:
        'Belgien gehört zu Schengen: Bürger der EU, des EWR und der Schweiz reisen mit dem Personalausweis ein, Reisende aus den USA, Großbritannien, Kanada, Australien, Japan, Brasilien, der Ukraine und anderen visumfreien Ländern bleiben bis zu 90 Tage in jedem 180-Tage-Zeitraum. Mit russischem, indischem, chinesischem, marokkanischem, kongolesischem und vielen anderen Pässen brauchst du ein Schengen-Visum für 90 €; die Regeln veröffentlicht das Ausländeramt auf dofi.ibz.be.',
      apply:
        'Zuständig ist die belgische Botschaft oder das Konsulat an deinem Wohnort; in den meisten Ländern nimmt TLScontact Unterlagen und Fingerabdrücke entgegen (in einigen VFS Global). Die Gebühr beträgt 90 € plus Servicegebühr, die Entscheidung dauert meist 15 Tage – in der Hochsaison in Kinshasa, Casablanca und Delhi länger. In vielen Ländern stellen belgische Botschaften auch Visa für Luxemburg aus – besuchst du beide, beantrage dort, wo du mehr Nächte verbringst.',
      visaRun:
        'Visa-Runs funktionieren nicht: Die 90 Tage gelten für den ganzen Schengen-Raum in einem rollierenden 180-Tage-Fenster. Ein Eurostar-Ausflug nach London setzt den Zähler nicht zurück – die Tage dort zählen nur nicht mit; seit April 2026 erfasst das EES jede Ein- und Ausreise.',
      transit:
        'Beim Umsteigen am Flughafen Brüssel (Zaventem) zwischen zwei Flügen außerhalb von Schengen – etwa von Afrika nach Nordamerika – brauchen die meisten kein Visum, solange sie im Transitbereich bleiben. Staatsangehörige auf der EU-Liste für Flughafentransitvisa (DR Kongo, Ghana, Nigeria, Eritrea, Äthiopien, Pakistan u. a.) benötigen eines – außer mit gültigem Visum oder Aufenthaltstitel der USA, Kanadas, Japans oder eines EWR-Staats.',
      hacks: [
        'Wohnst du bei Freunden oder Familie, können sie bei ihrer Gemeinde eine Verpflichtungserklärung (Anlage 3bis) unterschreiben – sie ersetzt den Nachweis eigener Mittel fürs Visum und an der Grenze.',
        'Die Ankunftserklärung kannst du jetzt online in der App My Address in Belgium in ein paar Minuten abgeben, ohne Gang zum Rathaus.',
        'Beim Eurostar ab Brüssel finden Schengen-Ausreise- und britische Einreisekontrolle direkt im Bahnhof Brüssel-Midi statt: Sei mindestens 60–90 Minuten vorher da.',
        'Junge Menschen aus Australien, Kanada, Neuseeland, Japan, Südkorea und Taiwan können ein einjähriges belgisches Working-Holiday-Visum bekommen.',
      ],
      pitfalls: [
        'Wohnst du nicht im Hotel, musst du deine Ankunft binnen 3 Werktagen melden – seit April 2026 online über My Address in Belgium. Hotelgäste sind befreit; wer es versäumt, kann bei einer Ausweiskontrolle Ärger bekommen.',
        'Seiten, die ein „Express“-Visum für Belgien oder einen TLScontact-Termin verkaufen, sind Vermittler. Die Buchung ist kostenlos, und die kostenpflichtigen „Premium“-Leistungen des Zentrums beschleunigen die Entscheidung nicht.',
        'Beantrage in Belgien nur, wenn es dein Hauptziel ist. Ein billiger Flug nach Charleroi für eine Frankreich-Tour ist kein Grund – zuständig ist das Land mit den meisten Nächten.',
      ],
      waivers: [
        'Mit einem gültigen Aufenthaltstitel oder nationalen D-Visum eines Schengen-Staats reist du bis zu 90 Tage in 180 visumfrei nach Belgien. Irische und zyprische Titel zählen nicht.',
        'Ein Schengen-Visum eines anderen Mitgliedstaats gilt innerhalb seiner Daten und Tage auch in Belgien. Die erste Reise sollte ins ausstellende Land gehen.',
      ],
      passports: {
        RU: 'Belgien stellt in Russland nur wenige Visa aus, seit November 2025 meist für eine Einreise; die Gebühr beträgt volle 90 €. Oft ist es leichter, in einem Land zu beantragen, in dem du einen Aufenthaltstitel hast. Direktflüge gibt es nicht – man fliegt über Istanbul; russische Bankkarten funktionieren nicht.',
        US: 'US-Bürger brauchen kein Visum: 90 Tage in 180. ETIAS (20 €) verzögert sich und wird nicht vor 2027 erwartet.',
        GB: 'Briten dürfen 90 Tage in 180 bleiben. Der Pass muss am Einreisetag jünger als 10 Jahre sein und noch 3 Monate nach der Ausreise gelten; beim Eurostar findet die Schengen-Einreisekontrolle (durch die französische Polizei) schon in London statt.',
        CD: 'Kongolesische Staatsangehörige brauchen ein Schengen-Visum und zusätzlich ein Flughafentransitvisum für Umstiege an Schengen-Flughäfen. Termine beim belgischen Zentrum in Kinshasa sind lange im Voraus vergeben – beantrage 2–3 Monate vorher.',
        IN: 'Indische Staatsangehörige brauchen ein Schengen-Visum. Nach der EU-„Kaskade“ gibt es nach zwei korrekt genutzten Visa in drei Jahren ein Mehrfachvisum für 2 Jahre, danach für 5 Jahre.',
        UA: 'Ukrainer mit biometrischem Pass reisen 90 Tage in 180 visumfrei ein; der vorübergehende Schutz in der EU gilt bis März 2027.',
      },
    },
    fr: {
      summary:
        'La Belgique fait partie de Schengen : les citoyens de l’UE, de l’EEE et de la Suisse entrent avec leur carte d’identité, et les voyageurs américains, britanniques, canadiens, australiens, japonais, brésiliens, ukrainiens et d’autres pays exemptés restent jusqu’à 90 jours sur 180. Les titulaires d’un passeport russe, indien, chinois, marocain, congolais et de nombreux autres ont besoin d’un visa Schengen à 90 € ; les règles sont publiées par l’Office des étrangers sur dofi.ibz.be.',
      apply:
        'La demande se fait à l’ambassade ou au consulat belge compétent pour votre lieu de résidence ; dans la plupart des pays, TLScontact reçoit dossiers et empreintes (VFS Global dans certains). Les frais sont de 90 € plus le service, et la décision prend en général 15 jours — davantage en haute saison à Kinshasa, Casablanca et Delhi. Dans de nombreux pays, les ambassades belges délivrent aussi les visas pour le Luxembourg : si vous visitez les deux, déposez là où vous passez le plus de nuits.',
      visaRun:
        'Les visa runs ne fonctionnent pas : les 90 jours se comptent sur tout l’espace Schengen dans une fenêtre glissante de 180. Un aller-retour à Londres en Eurostar ne remet pas le compteur à zéro — ces jours-là ne comptent simplement pas ; depuis avril 2026, l’EES enregistre chaque entrée et sortie.',
      transit:
        'Une correspondance à Brussels Airport (Zaventem) entre deux vols hors Schengen — par exemple de l’Afrique vers l’Amérique du Nord — ne demande pas de visa à la plupart des nationalités, tant que vous restez en zone de transit. Les ressortissants de la liste européenne du visa de transit aéroportuaire (RD Congo, Ghana, Nigeria, Érythrée, Éthiopie, Pakistan, etc.) en ont besoin, sauf s’ils détiennent un visa ou un titre de séjour valide des États-Unis, du Canada, du Japon ou d’un pays de l’EEE.',
      hacks: [
        'Si vous logez chez des amis ou de la famille, ils peuvent signer à leur commune un engagement de prise en charge (annexe 3bis), qui remplace la preuve de vos propres ressources pour le visa et à la frontière.',
        'La déclaration d’arrivée peut désormais se faire en ligne via l’application My Address in Belgium, en quelques minutes, sans passer par la commune.',
        'Dans l’Eurostar au départ de Bruxelles, la sortie de Schengen et l’entrée au Royaume-Uni se contrôlent à la gare de Bruxelles-Midi : arrivez au moins 60 à 90 minutes avant.',
        'Les jeunes Australiens, Canadiens, Néo-Zélandais, Japonais, Sud-Coréens et Taïwanais peuvent obtenir un visa vacances-travail d’un an en Belgique.',
      ],
      pitfalls: [
        'Si vous ne logez pas à l’hôtel, vous devez déclarer votre arrivée dans les 3 jours ouvrables — depuis avril 2026, en ligne via My Address in Belgium. Les clients d’hôtel en sont dispensés ; l’oublier peut poser problème lors d’un contrôle d’identité.',
        'Les sites qui vendent un visa belge « express » ou un créneau TLScontact sont des intermédiaires. La prise de rendez-vous est gratuite, et les services « premium » payants du centre n’accélèrent pas la décision du consulat.',
        'Ne déposez en Belgique que si c’est votre destination principale. Un vol bon marché pour Charleroi en vue d’un circuit en France n’est pas une raison : déposez là où vous passez le plus de nuits.',
      ],
      waivers: [
        'Un titre de séjour ou un visa long séjour D valide d’un pays Schengen vous permet de venir en Belgique sans visa jusqu’à 90 jours sur 180. Les titres irlandais et chypriotes ne comptent pas.',
        'Un visa Schengen délivré par un autre État membre est valable en Belgique dans la limite de ses dates et de ses jours. Effectuez le premier voyage dans le pays émetteur.',
      ],
      passports: {
        RU: 'La Belgique délivre peu de visas en Russie et, depuis novembre 2025, ils sont en général à entrée unique ; les frais sont de 90 € plein tarif. Il est souvent plus simple de déposer dans un pays où vous résidez légalement. Pas de vols directs : on passe par Istanbul ; les cartes bancaires russes ne fonctionnent pas.',
        US: 'Les citoyens américains n’ont pas besoin de visa : 90 jours sur 180. L’ETIAS (20 €) a été repoussé et n’est pas attendu avant 2027.',
        GB: 'Les Britanniques sont limités à 90 jours sur 180. Le passeport doit avoir moins de 10 ans le jour de l’entrée et rester valable 3 mois après la sortie ; dans l’Eurostar, le contrôle Schengen (assuré par la police française) a lieu dès Londres.',
        CD: 'Les Congolais ont besoin d’un visa Schengen et, en plus, d’un visa de transit aéroportuaire pour les correspondances dans les aéroports Schengen. Les créneaux du centre belge de Kinshasa partent très tôt : déposez 2 à 3 mois à l’avance.',
        IN: 'Les citoyens indiens ont besoin d’un visa Schengen. Selon la « cascade » européenne, deux visas bien utilisés en trois ans ouvrent droit à un visa à entrées multiples de 2 ans, puis de 5 ans.',
        UA: 'Les Ukrainiens munis d’un passeport biométrique entrent sans visa pour 90 jours sur 180 ; la protection temporaire dans l’UE court jusqu’en mars 2027.',
      },
    },
    it: {
      summary:
        'Il Belgio fa parte di Schengen: i cittadini di UE, SEE e Svizzera entrano con la carta d’identità, mentre chi ha passaporto di Stati Uniti, Regno Unito, Canada, Australia, Giappone, Brasile, Ucraina e altri paesi esenti resta fino a 90 giorni su 180. Chi ha passaporto russo, indiano, cinese, marocchino, congolese e di molti altri paesi ha bisogno di un visto Schengen da 90 €; le regole sono pubblicate dall’Ufficio stranieri su dofi.ibz.be.',
      apply:
        'Si fa domanda all’ambasciata o al consolato belga competente per la tua residenza; nella maggior parte dei paesi documenti e impronte li raccoglie TLScontact (in alcuni VFS Global). La tassa è di 90 € più il servizio e la decisione arriva di solito in 15 giorni, di più in alta stagione a Kinshasa, Casablanca e Delhi. In molti paesi le ambasciate belghe rilasciano anche i visti per il Lussemburgo: se visiti entrambi, fai domanda dove passi più notti.',
      visaRun:
        'I visa run non funzionano: i 90 giorni si contano su tutta l’area Schengen in una finestra mobile di 180. Un viaggio a Londra in Eurostar non azzera il contatore: semplicemente quei giorni non contano, e dall’aprile 2026 l’EES registra ogni ingresso e uscita.',
      transit:
        'Per cambiare aereo all’aeroporto di Bruxelles (Zaventem) tra due voli fuori Schengen — per esempio dall’Africa al Nord America — la maggior parte delle nazionalità non ha bisogno di visto, se resta nella zona di transito. I cittadini della lista UE del visto di transito aeroportuale (RD del Congo, Ghana, Nigeria, Eritrea, Etiopia, Pakistan e altri) devono averlo, a meno di avere un visto o un permesso valido di Stati Uniti, Canada, Giappone o di un paese SEE.',
      hacks: [
        'Se dormi da amici o parenti, possono firmare in comune un impegno di presa in carico (allegato 3bis), che sostituisce la prova dei tuoi mezzi per il visto e alla frontiera.',
        'La dichiarazione di arrivo ora si fa online con l’app My Address in Belgium in un paio di minuti, senza passare dal comune.',
        'Sull’Eurostar da Bruxelles, l’uscita da Schengen e l’ingresso nel Regno Unito si controllano nella stazione di Bruxelles-Midi: arriva almeno 60–90 minuti prima.',
        'I giovani di Australia, Canada, Nuova Zelanda, Giappone, Corea del Sud e Taiwan possono ottenere un visto vacanza-lavoro di un anno in Belgio.',
      ],
      pitfalls: [
        'Se non dormi in hotel, devi dichiarare l’arrivo entro 3 giorni lavorativi; dall’aprile 2026 online con My Address in Belgium. Chi sta in hotel è esentato; saltarla può creare problemi a un controllo d’identità.',
        'I siti che vendono un visto belga «express» o un appuntamento TLScontact sono intermediari. La prenotazione è gratuita e i servizi «premium» a pagamento del centro non accelerano la decisione del consolato.',
        'Fai domanda in Belgio solo se è la tua destinazione principale. Un volo economico per Charleroi per girare la Francia non è un motivo: fai domanda dove passi più notti.',
      ],
      waivers: [
        'Un permesso di soggiorno o un visto nazionale D valido di qualsiasi paese Schengen ti permette di visitare il Belgio senza visto fino a 90 giorni su 180. I permessi irlandesi e ciprioti non valgono.',
        'Un visto Schengen rilasciato da un altro Stato membro vale anche in Belgio entro le sue date e i suoi giorni. Fai il primo viaggio nel paese che l’ha rilasciato.',
      ],
      passports: {
        RU: 'Il Belgio rilascia pochi visti in Russia e da novembre 2025 sono di solito a ingresso singolo; la tassa è piena, 90 €. Spesso è più semplice fare domanda in un paese in cui hai la residenza. Non ci sono voli diretti — si passa da Istanbul — e le carte russe non funzionano.',
        US: 'I cittadini statunitensi non hanno bisogno di visto: 90 giorni su 180. L’ETIAS (20 €) è stato rinviato e non è atteso prima del 2027.',
        GB: 'I britannici hanno il limite di 90 giorni su 180. Il passaporto deve avere meno di 10 anni il giorno dell’ingresso e valere ancora 3 mesi dopo l’uscita; sull’Eurostar il controllo Schengen (fatto dalla polizia francese) avviene già a Londra.',
        CD: 'I congolesi hanno bisogno del visto Schengen e, in più, del visto di transito aeroportuale per gli scali negli aeroporti Schengen. Gli appuntamenti al centro belga di Kinshasa finiscono con largo anticipo: fai domanda 2–3 mesi prima.',
        IN: 'I cittadini indiani hanno bisogno del visto Schengen. Con la «cascata» europea, due visti usati correttamente in tre anni danno un visto multiplo di 2 anni e poi di 5.',
        UA: 'Gli ucraini con passaporto biometrico entrano senza visto per 90 giorni su 180; la protezione temporanea nell’UE vale fino a marzo 2027.',
      },
    },
  },
};

export default guide;
