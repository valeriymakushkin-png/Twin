import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'CN',
  checked: '2026-10',
  overrides: {
    // Unilateral 30-day visa-free entry since 17 Feb 2026 (MFA notice of 15 Feb 2026), currently until 31 Dec 2026
    GB: { status: 'free', days: 30 },
    CA: { status: 'free', days: 30 },
  },
  stay: { visa: 30 },
  links: { immigration: 'https://en.nia.gov.cn' },
  docs: ['returnTicket', 'booking'],
  passportMonths: 6,
  visaRun: 'yes',
  borders: [
    { name: 'Luohu – Lo Wu', to: 'HK', lat: 22.5314, lng: 114.1137 },
    { name: 'Futian – Lok Ma Chau Spur Line', to: 'HK', lat: 22.5146, lng: 114.0672 },
    { name: 'Gongbei – Portas do Cerco', to: 'MO', lat: 22.2152, lng: 113.5496 },
  ],
  transit: {
    hours: 240,
    passports: [
      'AT', 'BE', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IS', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PL', 'PT', 'SK',
      'SI', 'ES', 'SE', 'CH', 'MC', 'RU', 'GB', 'IE', 'CY', 'BG', 'RO', 'UA', 'RS', 'HR', 'BA', 'ME', 'MK', 'AL', 'BY', 'NO',
      'US', 'CA', 'BR', 'MX', 'AR', 'CL', 'AU', 'NZ', 'KR', 'JP', 'SG', 'BN', 'AE', 'QA', 'ID', 'KG', 'VN',
    ],
  },
  hackScope: [['regime:required'], ['regime:required'], ['regime:required'], ['regime:required'], null, null],
  pitfallScope: [['regime:free'], null, ['regime:required'], ['regime:free']],
  text: {
    ru: {
      summary:
        'Граждане примерно 50 стран — большей части ЕС, Великобритании, Канады, Австралии, Новой Зеландии, Японии, Кореи, стран Персидского залива и Латинской Америки — въезжают без визы на 30 дней по программе, действующей до конца 2026 года. У россиян своя 30-дневная безвизовая программа — до конца 2027 года. Гражданам США, Индии, Турции и ряда других стран нужна виза, но многим подойдёт 240-часовой транзит или безвизовый Хайнань.',
      apply:
        'Анкету заполняют онлайн на cova.mfa.gov.cn, затем записываются в визовый центр Китая и приносят паспорт, фото, бронь билетов и отелей; отпечатки пальцев сдают на месте. Обычное оформление — около 4 рабочих дней, срочное — быстрее за доплату. Консульские сборы снижены до конца 2026 года и зависят от гражданства: американцы платят около 140 $, большинство остальных — меньше.',
      visaRun:
        'Для безвизового въезда визаран работает: каждый въезд даёт новые 30 дней, которые считаются с полуночи после прибытия. Классика — съездить в Гонконг или Макао: пешком через переходы Лоху или Футянь из Шэньчжэня либо Гунбэй из Чжухая, и вернуться в тот же день. Частые въезды подряд могут вызвать вопросы на границе, поэтому держите под рукой билет на выезд.',
      transit:
        'Граждане 57 стран — в том числе России, США, Великобритании, Украины, Мексики, Бразилии, большинства стран Европы, Индонезии, а с августа 2026 года также Вьетнама и Киргизии — могут провести в Китае до 240 часов (10 дней) без визы, если прилетают из одной страны и улетают в другую; Гонконг, Макао и Тайвань считаются отдельными. Въезд — через 65 пунктов пропуска в 24 провинциях, перемещаться между ними можно; отсчёт идёт с полуночи после прибытия. Скажите авиакомпании и пограничнику, что пользуетесь безвизовым транзитом, и покажите подтверждённый билет дальше.',
      hacks: [
        'Хайнань пускает граждан 59 стран, включая США, Россию, Украину, Мексику, Казахстан и Индонезию, без визы на 30 дней — но только если прилететь или приплыть прямо на остров (Санья, Хайкоу) и не покидать его.',
        'Для 240-часового транзита подходит маршрут вроде Лос-Анджелес → Шанхай → Сеул или Лондон → Пекин → Гонконг. Билет туда-обратно в ту же страну (A → Китай → A) не подходит.',
        'Если вы уже в Гонконге без китайской визы, гражданам многих стран выдают 5-дневную визу только на Шэньчжэнь прямо на переходах Лоху, Хуанган или Шэкоу. Выдают её не всем — список зависит от гражданства, уточните заранее.',
        'Иностранные туристические группы на круизных лайнерах могут до 15 дней находиться без визы в прибрежных провинциях — Шанхае, Тяньцзине, Сямыне и других, — если путешествуют с группой круиза.',
        'С конца 2025 года карту прибытия можно заполнить онлайн до вылета на сайте или в приложении Национальной иммиграционной администрации и не возиться с бумажной на стойке.',
        'Привяжите иностранную карту Visa или Mastercard к Alipay или WeChat Pay до поездки: почти всё в Китае оплачивают по QR-коду, а у мелких продавцов часто нет сдачи с наличных.',
      ],
      pitfalls: [
        'Безвизовый срок — 30 дней. Даже день перерасчёта грозит штрафом 500 юаней в сутки (до 10 000) и задержанием; продлевать пребывание нужно заранее в местном бюро въезда-выезда.',
        'Место проживания нужно зарегистрировать в течение 24 часов. Отели делают это сами, а если вы живёте в квартире или у друзей, идите в ближайший полицейский участок (в некоторых городах — онлайн).',
        'Пассажирам 240-часового транзита иногда отказывают в посадке, если билет дальше — в страну вылета или не подтверждён. Распечатайте бронь дальнейшего рейса.',
        'Безвизовый въезд — для туризма, деловых поездок, визитов к родным, обменов и транзита. Работать, учиться и заниматься журналистикой без визы нельзя.',
      ],
      passports: {
        RU: 'Россияне въезжают без визы на 30 дней за поездку; программа, начатая в сентябре 2025 года, по объявлению МИД КНР продлена до конца 2027 года. Карты «Мир» не работают, а российские UnionPay — через раз: берите юани или доллары наличными либо иностранную карту для Alipay. Нужен загранпаспорт, внутренний не подходит.',
        US: 'Безвизового въезда на 30 дней для американцев нет. Выручают 240-часовой транзит с вылетом в третью страну и Хайнань; иначе туристическая виза (часто многократная на срок до 10 лет) обойдётся примерно в 140 $ по сниженным до конца 2026 года тарифам.',
        GB: 'С 17 февраля 2026 года граждане Великобритании въезжают без визы на 30 дней; программа пока действует до 31 декабря 2026 года.',
        CA: 'С 17 февраля 2026 года граждане Канады въезжают без визы на 30 дней; программа пока действует до 31 декабря 2026 года.',
        IN: 'Гражданам Индии нужна виза: ни 240-часовой транзит, ни Хайнань на них не распространяются. Записывайтесь в визовый центр заранее — перед праздниками слоты быстро заканчиваются.',
        UA: 'Украинцам для обычной поездки нужна виза, но они входят и в список 240-часового транзита, и в список Хайнаня.',
        KZ: 'У Казахстана и Китая взаимный безвиз: 30 дней за въезд, не более 90 дней за 180.',
      },
    },
    en: {
      summary:
        'Citizens of about 50 countries — most of the EU, the UK, Canada, Australia, New Zealand, Japan, Korea, the Gulf states and much of Latin America — enter visa-free for 30 days under a scheme that runs to the end of 2026; Russians have their own 30-day scheme to the end of 2027. US, Indian, Turkish and some other citizens need a visa, but many can use the 240-hour transit or visa-free Hainan.',
      apply:
        'Fill in the form online at cova.mfa.gov.cn, book a slot at a Chinese Visa Application Service Center and bring your passport, a photo, flight and hotel bookings; fingerprints are taken on site. Standard processing takes about 4 working days, express is quicker for a surcharge. Fees are reduced until the end of 2026 and depend on nationality: US citizens pay about $140, most others less.',
      visaRun:
        'Visa runs work for visa-free entries: each entry gives a fresh 30 days, counted from midnight after arrival. The classic run is to Hong Kong or Macau — on foot through Luohu or Futian from Shenzhen, or Gongbei from Zhuhai — and back the same day. Frequent back-to-back entries can draw questions at the border, so keep proof of onward travel handy.',
      transit:
        'Citizens of 57 countries — including Russia, the US, the UK, Ukraine, Mexico, Brazil, most of Europe, Indonesia and, since August 2026, Vietnam and Kyrgyzstan — may stay up to 240 hours (10 days) without a visa if they arrive from one country and leave for another; Hong Kong, Macau and Taiwan count as separate. Entry is through 65 designated ports in 24 provinces, and you may travel between them; the clock starts at midnight after arrival. Tell the airline and the officer you are using visa-free transit and show a confirmed onward ticket.',
      hacks: [
        'Hainan admits citizens of 59 countries, including the US, Russia, Ukraine, Mexico, Kazakhstan and Indonesia, visa-free for 30 days — but only if you fly or sail straight to the island (Sanya, Haikou) and stay there.',
        'A routing like Los Angeles → Shanghai → Seoul or London → Beijing → Hong Kong qualifies for the 240-hour transit. A return ticket to the same country (A → China → A) does not.',
        'If you are already in Hong Kong without a China visa, many nationalities can get a 5-day Shenzhen-only visa on the spot at the Luohu, Huanggang or Shekou ports. It is not issued to everyone — eligibility depends on nationality, so check first.',
        'Foreign tour groups on cruise ships can spend up to 15 days visa-free in coastal provinces such as Shanghai, Tianjin and Xiamen, as long as they travel with the cruise group.',
        'Since late 2025 you can fill in the arrival card online before your flight on the National Immigration Administration’s website or app and skip the paper card at the counter.',
        'Link a foreign Visa or Mastercard to Alipay or WeChat Pay before you go: almost everything in China is paid by QR code, and small vendors often have no change for cash.',
      ],
      pitfalls: [
        'Visa-free stays last 30 days. Overstaying even one day risks a fine of 500 yuan a day (up to 10,000) and detention; ask the local exit-entry bureau for an extension well in advance.',
        'Your address must be registered within 24 hours. Hotels do it for you; if you stay in a flat or with friends, go to the nearest police station (some cities allow it online).',
        'Airlines sometimes refuse boarding to 240-hour transit passengers whose onward flight goes back to the departure country or is not confirmed. Print your onward booking.',
        'Visa-free entry covers tourism, business, family visits, exchanges and transit only. Working, studying or reporting as a journalist needs a proper visa.',
      ],
      passports: {
        RU: 'Russians enter visa-free for 30 days per trip; the scheme launched in September 2025 has been extended to the end of 2027, according to China’s Foreign Ministry. Mir cards do not work and Russian-issued UnionPay cards are hit and miss — bring yuan or dollars in cash, or a foreign card for Alipay. Travel on your international passport; the internal one is not accepted.',
        US: 'There is no 30-day visa-free entry for US citizens. Use the 240-hour transit with an onward flight to a third country, or Hainan; otherwise the tourist visa (often multiple-entry for up to 10 years) costs about $140 under the fee reduction running to the end of 2026.',
        GB: 'Since 17 February 2026, British citizens enter visa-free for 30 days; the scheme currently runs until 31 December 2026.',
        CA: 'Since 17 February 2026, Canadian citizens enter visa-free for 30 days; the scheme currently runs until 31 December 2026.',
        IN: 'Indian citizens need a visa: neither the 240-hour transit nor Hainan applies to them. Book the visa centre early — slots run out before holidays.',
        UA: 'Ukrainians need a visa for a regular trip, but they are on both the 240-hour transit and the Hainan lists.',
        KZ: 'Kazakhstan and China have a mutual visa waiver: 30 days per entry and no more than 90 days in 180.',
      },
    },
    es: {
      summary:
        'Los ciudadanos de unos 50 países —la mayor parte de la UE, Reino Unido, Canadá, Australia, Nueva Zelanda, Japón, Corea, los países del Golfo y buena parte de Latinoamérica— entran sin visado 30 días gracias a un programa vigente hasta finales de 2026; los rusos tienen el suyo propio, también de 30 días, hasta finales de 2027. Estadounidenses, indios, turcos y otros necesitan visado, aunque muchos pueden usar el tránsito de 240 horas o la isla de Hainan.',
      apply:
        'Rellena el formulario en cova.mfa.gov.cn, pide cita en un centro de solicitud de visados de China y lleva el pasaporte, una foto y las reservas de vuelo y hotel; allí te toman las huellas. El trámite normal tarda unos 4 días laborables y el urgente, menos, con recargo. Las tasas están rebajadas hasta finales de 2026 y dependen de la nacionalidad: los estadounidenses pagan unos 140 $, la mayoría del resto, menos.',
      visaRun:
        'Con la entrada sin visado, el visa run funciona: cada entrada da 30 días nuevos, contados desde la medianoche siguiente a la llegada. Lo clásico es ir a Hong Kong o Macao —a pie por Luohu o Futian desde Shenzhen, o por Gongbei desde Zhuhai— y volver el mismo día. Muchas entradas seguidas pueden despertar preguntas en la frontera, así que ten a mano el billete de salida.',
      transit:
        'Los ciudadanos de 57 países —entre ellos Rusia, EE. UU., Reino Unido, Ucrania, México, Brasil, casi toda Europa, Indonesia y, desde agosto de 2026, Vietnam y Kirguistán— pueden quedarse hasta 240 horas (10 días) sin visado si llegan desde un país y salen hacia otro; Hong Kong, Macao y Taiwán cuentan como distintos. Se entra por 65 puestos habilitados en 24 provincias y puedes moverte entre ellas; el plazo corre desde la medianoche siguiente a la llegada. Avisa a la aerolínea y al agente de que usas el tránsito sin visado y enseña el billete de salida confirmado.',
      hacks: [
        'Hainan admite sin visado durante 30 días a ciudadanos de 59 países, entre ellos EE. UU., Rusia, Ucrania, México, Kazajistán e Indonesia, pero solo si llegas directamente a la isla (Sanya, Haikou) en avión o barco y no sales de ella.',
        'Una ruta como Los Ángeles → Shanghái → Seúl o Londres → Pekín → Hong Kong vale para el tránsito de 240 horas. Un billete de ida y vuelta al mismo país (A → China → A), no.',
        'Si ya estás en Hong Kong sin visado chino, muchas nacionalidades pueden obtener en el acto un visado de 5 días solo para Shenzhen en los pasos de Luohu, Huanggang o Shekou. No se concede a todo el mundo: depende de la nacionalidad, compruébalo antes.',
        'Los grupos turísticos extranjeros que llegan en crucero pueden pasar hasta 15 días sin visado en provincias costeras como Shanghái, Tianjin o Xiamen, siempre que viajen con el grupo del crucero.',
        'Desde finales de 2025 puedes rellenar la tarjeta de llegada en línea antes del vuelo, en la web o la app de la Administración Nacional de Inmigración, y ahorrarte la de papel en el control.',
        'Vincula una Visa o Mastercard extranjera a Alipay o WeChat Pay antes de viajar: en China casi todo se paga con código QR y los pequeños comercios rara vez tienen cambio.',
      ],
      pitfalls: [
        'La estancia sin visado es de 30 días. Pasarse aunque sea un día puede costar 500 yuanes diarios de multa (hasta 10 000) y detención; pide la prórroga en la oficina local de entrada y salida con tiempo.',
        'Tu alojamiento debe registrarse en 24 horas. Los hoteles lo hacen solos; si te alojas en un piso o con amigos, ve a la comisaría más cercana (en algunas ciudades se hace en línea).',
        'A veces las aerolíneas niegan el embarque a pasajeros del tránsito de 240 horas cuyo vuelo de salida vuelve al país de origen o no está confirmado. Imprime la reserva.',
        'La entrada sin visado sirve para turismo, negocios, visitas familiares, intercambios y tránsito. Trabajar, estudiar o hacer periodismo exige un visado.',
      ],
      passports: {
        RU: 'Los rusos entran sin visado 30 días por viaje; el programa iniciado en septiembre de 2025 se ha prorrogado hasta finales de 2027, según el Ministerio de Exteriores chino. Las tarjetas Mir no funcionan y las UnionPay rusas, a ratos: lleva yuanes o dólares en efectivo o una tarjeta extranjera para Alipay. Viaja con el pasaporte internacional; el interno no sirve.',
        US: 'Los estadounidenses no tienen entrada sin visado de 30 días. Pueden usar el tránsito de 240 horas con salida a un tercer país, o Hainan; si no, el visado de turista (a menudo de entradas múltiples hasta 10 años) cuesta unos 140 $ con la rebaja vigente hasta finales de 2026.',
        GB: 'Desde el 17 de febrero de 2026, los británicos entran sin visado 30 días; el programa está vigente por ahora hasta el 31 de diciembre de 2026.',
        CA: 'Desde el 17 de febrero de 2026, los canadienses entran sin visado 30 días; el programa está vigente por ahora hasta el 31 de diciembre de 2026.',
        IN: 'Los ciudadanos indios necesitan visado: no pueden usar ni el tránsito de 240 horas ni Hainan. Pide cita pronto: antes de los festivos se agotan.',
        UA: 'Los ucranianos necesitan visado para un viaje normal, pero figuran tanto en la lista del tránsito de 240 horas como en la de Hainan.',
        KZ: 'Kazajistán y China tienen exención mutua de visado: 30 días por entrada y no más de 90 en 180.',
      },
    },
    de: {
      summary:
        'Bürger von rund 50 Staaten – den meisten EU-Ländern, Großbritannien, Kanada, Australien, Neuseeland, Japan, Korea, den Golfstaaten und vielen Ländern Lateinamerikas – reisen im Rahmen einer bis Ende 2026 laufenden Regelung 30 Tage visumfrei ein; für Russen gilt eine eigene 30-Tage-Regelung bis Ende 2027. Bürger der USA, Indiens, der Türkei und einiger anderer Länder brauchen ein Visum, viele können aber den 240-Stunden-Transit oder das visumfreie Hainan nutzen.',
      apply:
        'Fülle den Antrag online auf cova.mfa.gov.cn aus, buche einen Termin im chinesischen Visa Application Service Center und bring Pass, Foto, Flug- und Hotelbuchungen mit; Fingerabdrücke werden vor Ort genommen. Die normale Bearbeitung dauert etwa 4 Werktage, Express geht gegen Aufpreis schneller. Die Gebühren sind bis Ende 2026 gesenkt und hängen von der Nationalität ab: US-Bürger zahlen etwa 140 $, die meisten anderen weniger.',
      visaRun:
        'Bei visumfreier Einreise funktionieren Visa-Runs: Jede Einreise bringt neue 30 Tage, gezählt ab Mitternacht nach der Ankunft. Klassisch ist ein Abstecher nach Hongkong oder Macau – zu Fuß über Luohu oder Futian aus Shenzhen bzw. Gongbei aus Zhuhai – und am selben Tag zurück. Viele Einreisen hintereinander können an der Grenze Fragen auslösen, halte also den Nachweis der Weiterreise bereit.',
      transit:
        'Bürger von 57 Staaten – darunter Russland, die USA, Großbritannien, die Ukraine, Mexiko, Brasilien, fast ganz Europa, Indonesien und seit August 2026 auch Vietnam und Kirgisistan – dürfen bis zu 240 Stunden (10 Tage) ohne Visum bleiben, wenn sie aus einem Land ankommen und in ein anderes weiterreisen; Hongkong, Macau und Taiwan zählen als eigene Gebiete. Eingereist wird über 65 zugelassene Grenzstellen in 24 Provinzen, zwischen denen du reisen darfst; die Frist läuft ab Mitternacht nach der Ankunft. Sag der Airline und dem Grenzbeamten, dass du den visumfreien Transit nutzt, und zeig das bestätigte Weiterreiseticket.',
      hacks: [
        'Hainan lässt Bürger von 59 Staaten, darunter die USA, Russland, die Ukraine, Mexiko, Kasachstan und Indonesien, 30 Tage visumfrei einreisen – aber nur bei direkter Ankunft auf der Insel (Sanya, Haikou) per Flug oder Schiff und nur für die Insel selbst.',
        'Eine Route wie Los Angeles → Shanghai → Seoul oder London → Peking → Hongkong erfüllt die Bedingungen des 240-Stunden-Transits. Hin und zurück ins selbe Land (A → China → A) dagegen nicht.',
        'Wer schon in Hongkong ist und kein China-Visum hat, bekommt bei vielen Nationalitäten an den Grenzstellen Luohu, Huanggang oder Shekou sofort ein 5-Tage-Visum nur für Shenzhen. Nicht alle Nationalitäten sind berechtigt – vorher prüfen.',
        'Ausländische Reisegruppen auf Kreuzfahrtschiffen dürfen bis zu 15 Tage visumfrei in Küstenprovinzen wie Shanghai, Tianjin oder Xiamen bleiben, solange sie mit der Kreuzfahrtgruppe unterwegs sind.',
        'Seit Ende 2025 lässt sich die Einreisekarte schon vor dem Flug online auf der Website oder in der App der Nationalen Einwanderungsbehörde ausfüllen – die Papierkarte am Schalter entfällt.',
        'Verknüpfe vor der Reise eine ausländische Visa- oder Mastercard mit Alipay oder WeChat Pay: In China wird fast alles per QR-Code bezahlt, und kleine Händler haben oft kein Wechselgeld.',
      ],
      pitfalls: [
        'Visumfrei sind 30 Tage. Schon ein Tag Überziehung kann 500 Yuan Bußgeld pro Tag (bis 10.000) und Festnahme bedeuten; eine Verlängerung beantragst du rechtzeitig beim örtlichen Ein- und Ausreisebüro.',
        'Deine Unterkunft muss innerhalb von 24 Stunden gemeldet werden. Hotels erledigen das; wohnst du privat oder bei Freunden, geh zur nächsten Polizeiwache (in manchen Städten geht es online).',
        'Airlines verweigern Passagieren im 240-Stunden-Transit manchmal das Boarding, wenn der Weiterflug zurück ins Abflugland geht oder nicht bestätigt ist. Druck die Buchung aus.',
        'Die visumfreie Einreise gilt nur für Tourismus, Geschäftsreisen, Familienbesuche, Austausch und Transit. Arbeit, Studium oder journalistische Tätigkeit erfordern ein Visum.',
      ],
      passports: {
        RU: 'Russen reisen pro Reise 30 Tage visumfrei ein; die im September 2025 gestartete Regelung wurde laut chinesischem Außenministerium bis Ende 2027 verlängert. Mir-Karten funktionieren nicht, russische UnionPay-Karten nur manchmal – nimm Yuan oder Dollar in bar oder eine ausländische Karte für Alipay mit. Reise mit dem Reisepass, der Inlandspass gilt nicht.',
        US: 'Für US-Bürger gibt es keine 30-tägige Visumfreiheit. Möglich sind der 240-Stunden-Transit mit Weiterflug in ein Drittland oder Hainan; sonst kostet das Touristenvisum (oft mehrfach gültig bis zu 10 Jahre) dank der bis Ende 2026 gesenkten Gebühren etwa 140 $.',
        GB: 'Seit dem 17. Februar 2026 reisen britische Staatsangehörige 30 Tage visumfrei ein; die Regelung gilt vorerst bis zum 31. Dezember 2026.',
        CA: 'Seit dem 17. Februar 2026 reisen kanadische Staatsangehörige 30 Tage visumfrei ein; die Regelung gilt vorerst bis zum 31. Dezember 2026.',
        IN: 'Indische Staatsangehörige brauchen ein Visum: Weder der 240-Stunden-Transit noch Hainan gilt für sie. Buch den Termin im Visazentrum früh – vor Feiertagen sind sie schnell weg.',
        UA: 'Ukrainer brauchen für eine normale Reise ein Visum, stehen aber sowohl auf der Liste des 240-Stunden-Transits als auch auf der von Hainan.',
        KZ: 'Kasachstan und China haben gegenseitige Visumfreiheit: 30 Tage pro Einreise, höchstens 90 Tage in 180.',
      },
    },
    fr: {
      summary:
        'Les ressortissants d’une cinquantaine de pays — la plupart des pays de l’UE, le Royaume-Uni, le Canada, l’Australie, la Nouvelle-Zélande, le Japon, la Corée, les pays du Golfe et une bonne partie de l’Amérique latine — entrent sans visa pour 30 jours grâce à un dispositif valable jusqu’à fin 2026 ; les Russes ont leur propre régime de 30 jours jusqu’à fin 2027. Américains, Indiens, Turcs et quelques autres ont besoin d’un visa, mais beaucoup peuvent profiter du transit de 240 heures ou de Hainan.',
      apply:
        'Remplissez le formulaire en ligne sur cova.mfa.gov.cn, prenez rendez-vous dans un centre de demande de visa pour la Chine et apportez passeport, photo, réservations de vol et d’hôtel ; les empreintes sont prises sur place. Le traitement normal prend environ 4 jours ouvrés, l’express va plus vite moyennant supplément. Les frais sont réduits jusqu’à fin 2026 et varient selon la nationalité : environ 140 $ pour les Américains, moins pour la plupart des autres.',
      visaRun:
        'Pour l’entrée sans visa, le visa run fonctionne : chaque entrée ouvre 30 nouveaux jours, comptés à partir de minuit suivant l’arrivée. Le grand classique : Hong Kong ou Macao — à pied par Luohu ou Futian depuis Shenzhen, ou par Gongbei depuis Zhuhai — et retour le jour même. Des entrées répétées à la chaîne peuvent susciter des questions, gardez donc une preuve de sortie sous la main.',
      transit:
        'Les ressortissants de 57 pays — dont la Russie, les États-Unis, le Royaume-Uni, l’Ukraine, le Mexique, le Brésil, presque toute l’Europe, l’Indonésie et, depuis août 2026, le Vietnam et le Kirghizistan — peuvent rester jusqu’à 240 heures (10 jours) sans visa s’ils arrivent d’un pays et repartent vers un autre ; Hong Kong, Macao et Taïwan comptent à part. L’entrée se fait par 65 points de passage dans 24 provinces, entre lesquelles vous pouvez circuler ; le délai court à partir de minuit suivant l’arrivée. Signalez à la compagnie et à l’agent que vous utilisez le transit sans visa et montrez un billet de continuation confirmé.',
      hacks: [
        'Hainan accueille sans visa pour 30 jours les ressortissants de 59 pays, dont les États-Unis, la Russie, l’Ukraine, le Mexique, le Kazakhstan et l’Indonésie — à condition d’arriver directement sur l’île (Sanya, Haikou) par avion ou bateau et d’y rester.',
        'Un itinéraire comme Los Angeles → Shanghai → Séoul ou Londres → Pékin → Hong Kong ouvre droit au transit de 240 heures. Un aller-retour vers le même pays (A → Chine → A), non.',
        'Si vous êtes déjà à Hong Kong sans visa chinois, de nombreuses nationalités peuvent obtenir sur place un visa de 5 jours valable seulement pour Shenzhen aux postes de Luohu, Huanggang ou Shekou. Tout le monde n’y a pas droit : cela dépend de la nationalité, vérifiez avant.',
        'Les groupes de touristes étrangers arrivant en croisière peuvent passer jusqu’à 15 jours sans visa dans des provinces côtières comme Shanghai, Tianjin ou Xiamen, tant qu’ils voyagent avec le groupe de la croisière.',
        'Depuis fin 2025, la carte d’arrivée peut être remplie en ligne avant le vol, sur le site ou l’application de l’Administration nationale de l’immigration, ce qui évite la carte papier au guichet.',
        'Associez une carte Visa ou Mastercard étrangère à Alipay ou WeChat Pay avant le départ : en Chine, presque tout se paie par QR code et les petits commerçants ont rarement la monnaie.',
      ],
      pitfalls: [
        'Le séjour sans visa est de 30 jours. Le moindre jour de dépassement expose à une amende de 500 yuans par jour (jusqu’à 10 000) et à une rétention ; demandez une prolongation à temps au bureau local des entrées et sorties.',
        'Votre hébergement doit être déclaré sous 24 heures. Les hôtels s’en chargent ; si vous logez en appartement ou chez des amis, présentez-vous au poste de police le plus proche (en ligne dans certaines villes).',
        'Les compagnies refusent parfois l’embarquement aux passagers en transit de 240 heures dont le vol suivant retourne vers le pays de départ ou n’est pas confirmé. Imprimez la réservation.',
        'L’entrée sans visa couvre le tourisme, les affaires, les visites familiales, les échanges et le transit. Travailler, étudier ou faire du journalisme exige un visa.',
      ],
      passports: {
        RU: 'Les Russes entrent sans visa pour 30 jours par voyage ; le dispositif lancé en septembre 2025 a été prolongé jusqu’à fin 2027, selon le ministère chinois des Affaires étrangères. Les cartes Mir ne fonctionnent pas et les UnionPay russes, pas toujours : prévoyez des yuans ou des dollars en espèces, ou une carte étrangère pour Alipay. Voyagez avec le passeport international, le passeport intérieur n’est pas accepté.',
        US: 'Pas d’entrée sans visa de 30 jours pour les Américains. Restent le transit de 240 heures avec départ vers un pays tiers, ou Hainan ; sinon, le visa touristique (souvent à entrées multiples jusqu’à 10 ans) coûte environ 140 $ grâce à la baisse des frais en vigueur jusqu’à fin 2026.',
        GB: 'Depuis le 17 février 2026, les Britanniques entrent sans visa pour 30 jours ; le dispositif court pour l’instant jusqu’au 31 décembre 2026.',
        CA: 'Depuis le 17 février 2026, les Canadiens entrent sans visa pour 30 jours ; le dispositif court pour l’instant jusqu’au 31 décembre 2026.',
        IN: 'Les Indiens ont besoin d’un visa : ni le transit de 240 heures ni Hainan ne s’appliquent à eux. Réservez le centre de visa tôt, les créneaux partent vite avant les fêtes.',
        UA: 'Les Ukrainiens ont besoin d’un visa pour un séjour classique, mais figurent à la fois sur la liste du transit de 240 heures et sur celle de Hainan.',
        KZ: 'Le Kazakhstan et la Chine ont une exemption de visa réciproque : 30 jours par entrée, pas plus de 90 jours sur 180.',
      },
    },
    it: {
      summary:
        'I cittadini di circa 50 paesi — gran parte dell’UE, Regno Unito, Canada, Australia, Nuova Zelanda, Giappone, Corea, i paesi del Golfo e buona parte dell’America Latina — entrano senza visto per 30 giorni grazie a un programma valido fino a fine 2026; i russi hanno un regime proprio di 30 giorni fino a fine 2027. A statunitensi, indiani, turchi e pochi altri serve il visto, ma molti possono usare il transito di 240 ore o l’isola di Hainan.',
      apply:
        'Compila il modulo online su cova.mfa.gov.cn, prenota un appuntamento al Chinese Visa Application Service Center e porta passaporto, foto, prenotazioni di volo e hotel; le impronte si lasciano sul posto. La procedura normale richiede circa 4 giorni lavorativi, quella urgente meno, con un supplemento. Le tariffe sono ridotte fino a fine 2026 e dipendono dalla nazionalità: gli statunitensi pagano circa 140 $, quasi tutti gli altri meno.',
      visaRun:
        'Con l’ingresso senza visto il visa run funziona: ogni ingresso dà 30 giorni nuovi, contati dalla mezzanotte dopo l’arrivo. Il classico è Hong Kong o Macao — a piedi da Shenzhen per Luohu o Futian, o da Zhuhai per Gongbei — con rientro in giornata. Molti ingressi ravvicinati possono suscitare domande alla frontiera, quindi tieni a portata di mano il biglietto di uscita.',
      transit:
        'I cittadini di 57 paesi — tra cui Russia, Stati Uniti, Regno Unito, Ucraina, Messico, Brasile, quasi tutta l’Europa, Indonesia e, da agosto 2026, Vietnam e Kirghizistan — possono restare fino a 240 ore (10 giorni) senza visto se arrivano da un paese e ripartono per un altro; Hong Kong, Macao e Taiwan contano come territori distinti. Si entra da 65 valichi abilitati in 24 province, tra cui puoi spostarti; il conteggio parte dalla mezzanotte dopo l’arrivo. Di’ alla compagnia aerea e all’agente che usi il transito senza visto e mostra il biglietto di prosecuzione confermato.',
      hacks: [
        'Hainan accoglie senza visto per 30 giorni i cittadini di 59 paesi, tra cui Stati Uniti, Russia, Ucraina, Messico, Kazakistan e Indonesia, ma solo se arrivi direttamente sull’isola (Sanya, Haikou) in aereo o nave e resti lì.',
        'Un itinerario come Los Angeles → Shanghai → Seul o Londra → Pechino → Hong Kong vale per il transito di 240 ore. Un andata e ritorno verso lo stesso paese (A → Cina → A), no.',
        'Se sei già a Hong Kong senza visto cinese, molte nazionalità possono ottenere sul posto un visto di 5 giorni valido solo per Shenzhen ai valichi di Luohu, Huanggang o Shekou. Non spetta a tutti: dipende dalla nazionalità, verifica prima.',
        'I gruppi turistici stranieri che arrivano in crociera possono restare fino a 15 giorni senza visto in province costiere come Shanghai, Tianjin o Xiamen, purché viaggino con il gruppo della crociera.',
        'Da fine 2025 puoi compilare la carta di sbarco online prima del volo, sul sito o nell’app dell’Amministrazione nazionale dell’immigrazione, evitando quella cartacea al controllo.',
        'Collega una Visa o Mastercard estera ad Alipay o WeChat Pay prima di partire: in Cina quasi tutto si paga con codice QR e i piccoli negozi spesso non hanno il resto.',
      ],
      pitfalls: [
        'Il soggiorno senza visto dura 30 giorni. Anche un solo giorno in più può costare 500 yuan di multa al giorno (fino a 10.000) e il fermo; chiedi per tempo la proroga all’ufficio locale per l’ingresso e l’uscita.',
        'L’alloggio va registrato entro 24 ore. Gli hotel lo fanno da soli; se stai in un appartamento o da amici, vai alla stazione di polizia più vicina (in alcune città si fa online).',
        'A volte le compagnie negano l’imbarco ai passeggeri del transito di 240 ore se il volo successivo torna nel paese di partenza o non è confermato. Stampa la prenotazione.',
        'L’ingresso senza visto vale per turismo, affari, visite familiari, scambi e transito. Per lavorare, studiare o fare giornalismo serve un visto.',
      ],
      passports: {
        RU: 'I russi entrano senza visto per 30 giorni a viaggio; il programma avviato a settembre 2025 è stato prorogato fino a fine 2027, secondo il Ministero degli Esteri cinese. Le carte Mir non funzionano e le UnionPay russe solo a volte: porta yuan o dollari in contanti o una carta estera per Alipay. Viaggia con il passaporto internazionale, quello interno non vale.',
        US: 'Per i cittadini statunitensi non c’è l’ingresso senza visto di 30 giorni. Restano il transito di 240 ore con partenza verso un paese terzo e Hainan; altrimenti il visto turistico (spesso a ingressi multipli fino a 10 anni) costa circa 140 $ con la riduzione valida fino a fine 2026.',
        GB: 'Dal 17 febbraio 2026 i cittadini britannici entrano senza visto per 30 giorni; il programma vale per ora fino al 31 dicembre 2026.',
        CA: 'Dal 17 febbraio 2026 i cittadini canadesi entrano senza visto per 30 giorni; il programma vale per ora fino al 31 dicembre 2026.',
        IN: 'Ai cittadini indiani serve il visto: non possono usare né il transito di 240 ore né Hainan. Prenota presto il centro visti, prima delle festività gli appuntamenti finiscono.',
        UA: 'Agli ucraini serve il visto per un viaggio normale, ma rientrano sia nella lista del transito di 240 ore sia in quella di Hainan.',
        KZ: 'Kazakistan e Cina hanno l’esenzione reciproca dal visto: 30 giorni per ingresso e non più di 90 su 180.',
      },
    },
  },
};

export default guide;
