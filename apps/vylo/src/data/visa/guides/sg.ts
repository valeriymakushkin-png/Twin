import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'SG',
  checked: '2026-10',
  fees: { evisa: { kind: 'fixed', amount: 30, currency: 'SGD' } },
  stay: { evisa: 30 },
  links: { immigration: 'https://www.ica.gov.sg' },
  forms: [{ name: 'SG Arrival Card', url: 'https://eservices.ica.gov.sg/sgarrivalcard', fee: { kind: 'free' } }],
  docs: ['returnTicket', 'booking'],
  passportMonths: 6,
  extend: {},
  visaRun: 'limited',
  borders: [
    { name: 'Woodlands – Johor Bahru (Causeway)', to: 'MY', lat: 1.4448, lng: 103.7693 },
    { name: 'HarbourFront → Batam', to: 'ID', lat: 1.265, lng: 103.8209 },
    { name: 'Tanah Merah → Bintan', to: 'ID', lat: 1.315, lng: 103.99 },
  ],
  transit: { hours: 96, passports: ['AM', 'AZ', 'BY', 'KZ', 'KG', 'MD', 'RU', 'TJ', 'UZ', 'GE', 'TM', 'UA', 'IN', 'CN'] },
  text: {
    ru: {
      summary:
        'Граждане ЕС и Кореи получают на границе до 90 дней, граждане США, Великобритании, Японии, Китая и большинства других стран — обычно 30 дней. Россиянам, гражданам большинства стран СНГ и Индии нужна электронная виза, которую оформляют через уполномоченного агента. Перед прилётом все заполняют бесплатную SG Arrival Card.',
      apply:
        'Подать на визу самостоятельно нельзя: заявку отправляет уполномоченный визовый агент, авиакомпания или принимающая сторона в Сингапуре. Сбор — 30 сингапурских долларов плюс услуги агента, решение обычно за 3–5 рабочих дней, виза приходит в PDF. SG Arrival Card подают на сайте ICA не раньше чем за 3 дня до прибытия.',
      extend:
        'Продлить гостевой пропуск можно онлайн через сервис ICA до истечения текущего срока — решение на усмотрение иммиграционной службы, обычно продлевают до 30 дней. Если общий срок пребывания достигает 90 дней и больше, берут сбор 40 сингапурских долларов.',
      visaRun:
        'Визараны возможны, но Сингапур для них не создан: при частых коротких выездах в Джохор-Бару офицер может дать меньше дней или отказать во въезде. Однократная виза после выезда закрывается, нужна новая. Удобнее всего выезжать на автобусе через дамбу Вудлендс или на пароме в Батам и Бинтан — около часа пути.',
      transit:
        'Visa Free Transit Facility даёт до 96 часов без визы гражданам России, Казахстана, Узбекистана, других стран СНГ, Грузии, Туркменистана и Украины, если вы летите из одной страны в другую через Сингапур и у вас есть билет дальше. Гражданам Индии и Китая для этого нужна ещё действующая виза или ВНЖ США, Великобритании, Канады, Австралии, Новой Зеландии, Японии, Германии или Швейцарии (не менее месяца). Продлить такой въезд нельзя.',
      hacks: [
        'Транзит 96 часов — идеальный бесплатный стоп-овер: билет Бангкок — Сингапур — Бали без визы даёт четыре дня в городе. Важно, чтобы следующий пункт не совпадал с тем, откуда вы прилетели.',
        'Паром из HarbourFront в Батам идёт около часа: это самый быстрый способ «выехать за границу» и заодно получить индонезийскую визу по прибытии для поездки по островам.',
        'В аэропорту Чанги и на сухопутных пунктах иностранцы проходят контроль по биометрии без штампа — сохраните электронное подтверждение срока пребывания, которое приходит на почту.',
        'Многие гостиницы в Джохор-Бару в 2–3 раза дешевле сингапурских: если виза позволяет многократный въезд, можно жить в Малайзии и ездить в Сингапур на день.',
      ],
      pitfalls: [
        'Сайты-двойники берут плату за бесплатную SG Arrival Card. Подавайте её только через ICA или приложение MyICA.',
        'За ввоз и курение вейпов штрафуют, а с 2025 года иностранцев за вейпы с этомидатом могут депортировать. Электронные сигареты не берите вообще.',
        'Отказ в визе нельзя «перебить» новой заявкой через другого агента: сначала нужно подождать или подать апелляцию.',
      ],
      passports: {
        RU: 'Россиянам нужна виза через уполномоченного агента (30 сингапурских долларов плюс сервисный сбор). Без визы можно пробыть до 96 часов транзитом между двумя другими странами. Российские карты не работают — берите наличные.',
        IN: 'Гражданам Индии нужна виза через агента VFS или аккредитованные турагентства. Транзит 96 часов доступен, только если есть виза или ВНЖ США, Великобритании, Канады, Австралии, Новой Зеландии, Японии, Германии или Швейцарии.',
        CN: 'С февраля 2024 года для обычных паспортов Китая действует взаимный безвиз на 30 дней.',
        UA: 'Гражданам Украины нужна виза, но транзит 96 часов без визы доступен при перелёте между двумя другими странами.',
      },
    },
    en: {
      summary:
        'EU and Korean citizens are usually given up to 90 days at the border; US, UK, Japanese, Chinese and most other visitors typically get 30 days. Russian, most CIS and Indian citizens need an e-visa, applied for through an authorised agent. Everyone files the free SG Arrival Card before landing.',
      apply:
        'You cannot apply for the visa yourself: an authorised visa agent, an airline or a local contact in Singapore submits it for you. The fee is 30 Singapore dollars plus the agent’s charge, decisions usually take 3–5 working days and the visa arrives as a PDF. File the SG Arrival Card on the ICA website no earlier than three days before arrival.',
      extend:
        'You can extend your visit pass online through ICA’s e-service before it expires — it is at ICA’s discretion, usually for up to 30 days. If your total stay reaches 90 days or more, a fee of 40 Singapore dollars applies.',
      visaRun:
        'Runs are possible, but Singapore is not built for them: after frequent short trips to Johor Bahru, officers may give you fewer days or refuse entry. A single-entry visa is used up when you leave, so you need a new one. The easiest exits are a bus across the Woodlands Causeway or a ferry to Batam or Bintan, about an hour away.',
      transit:
        'The Visa Free Transit Facility gives up to 96 hours without a visa to citizens of Russia, Kazakhstan, Uzbekistan, the other CIS countries, Georgia, Turkmenistan and Ukraine who are travelling between two other countries via Singapore with an onward ticket. Indian and Chinese citizens also need a visa or residence permit for the US, UK, Canada, Australia, New Zealand, Japan, Germany or Switzerland valid for at least a month. This stay cannot be extended.',
      hacks: [
        'The 96-hour transit is a perfect free stopover: a Bangkok – Singapore – Bali ticket gives you four days in the city with no visa. The next stop just must not be the place you flew in from.',
        'The ferry from HarbourFront to Batam takes about an hour — the fastest way to “leave the country”, and a chance to pick up an Indonesian visa on arrival for an island trip.',
        'At Changi and the land checkpoints foreigners clear immigration biometrically without a stamp — keep the e-mail confirming your permitted stay.',
        'Hotels in Johor Bahru are often two to three times cheaper than in Singapore: if your visa allows multiple entries, you can stay in Malaysia and visit Singapore for the day.',
      ],
      pitfalls: [
        'Look-alike sites charge for the free SG Arrival Card. File it only through ICA or the MyICA app.',
        'Bringing in or using vapes is fined, and since 2025 foreigners caught with etomidate-laced vapes can be deported. Leave e-cigarettes at home.',
        'A visa refusal cannot be bypassed by reapplying through another agent: you have to wait or file an appeal first.',
      ],
      passports: {
        RU: 'Russian citizens need a visa through an authorised agent (30 Singapore dollars plus a service fee). Without a visa you can stay up to 96 hours in transit between two other countries. Russian cards do not work, so bring cash.',
        IN: 'Indian citizens need a visa via VFS or accredited travel agents. The 96-hour transit is only available with a visa or residence permit for the US, UK, Canada, Australia, New Zealand, Japan, Germany or Switzerland.',
        CN: 'Since February 2024 ordinary Chinese passports have enjoyed a mutual 30-day visa exemption.',
        UA: 'Ukrainian citizens need a visa, but the 96-hour visa-free transit is available when flying between two other countries.',
      },
    },
    es: {
      summary:
        'A los ciudadanos de la UE y Corea se les suelen conceder hasta 90 días en frontera; a los de EE. UU., el Reino Unido, Japón, China y la mayoría de los demás, normalmente 30. Los ciudadanos rusos, de la mayor parte de la CEI y de la India necesitan un visado electrónico que se tramita a través de un agente autorizado. Todo el mundo presenta antes de aterrizar la SG Arrival Card, gratuita.',
      apply:
        'No puedes pedir el visado por tu cuenta: lo presenta un agente de visados autorizado, una aerolínea o un contacto local en Singapur. Cuesta 30 dólares de Singapur más la comisión del agente, la respuesta suele tardar 3–5 días laborables y el visado llega en PDF. La SG Arrival Card se presenta en la web del ICA como máximo tres días antes de llegar.',
      extend:
        'Puedes prorrogar el permiso de visita en línea a través del servicio del ICA antes de que venza; la decisión es discrecional y suele ser de hasta 30 días. Si tu estancia total llega a 90 días o más, se cobra una tasa de 40 dólares de Singapur.',
      visaRun:
        'Se puede hacer visa run, pero Singapur no está pensado para ello: tras muchas escapadas cortas a Johor Bahru, el agente puede darte menos días o negarte la entrada. El visado de una sola entrada se agota al salir, así que necesitarás otro. Lo más cómodo es el autobús por la Causeway de Woodlands o el ferri a Batam o Bintan, a una hora.',
      transit:
        'El Visa Free Transit Facility permite hasta 96 horas sin visado a los ciudadanos de Rusia, Kazajistán, Uzbekistán, el resto de la CEI, Georgia, Turkmenistán y Ucrania que viajan entre dos terceros países vía Singapur con billete de continuación. Los ciudadanos de la India y China necesitan además un visado o permiso de residencia de EE. UU., el Reino Unido, Canadá, Australia, Nueva Zelanda, Japón, Alemania o Suiza con al menos un mes de validez. Esta estancia no se puede prorrogar.',
      hacks: [
        'El tránsito de 96 horas es una escala gratis perfecta: un billete Bangkok – Singapur – Bali te da cuatro días en la ciudad sin visado. Eso sí, el siguiente destino no puede ser el lugar del que llegaste.',
        'El ferri de HarbourFront a Batam tarda una hora: es la forma más rápida de «salir del país» y de conseguir de paso el visado indonesio a la llegada para recorrer las islas.',
        'En Changi y en los pasos terrestres, los extranjeros pasan el control con biometría y sin sello: guarda el correo que confirma tu estancia permitida.',
        'Los hoteles de Johor Bahru suelen costar dos o tres veces menos que en Singapur: si tu visado permite varias entradas, puedes alojarte en Malasia y visitar Singapur en el día.',
      ],
      pitfalls: [
        'Las webs que imitan la SG Arrival Card cobran por un trámite gratuito. Preséntala solo a través del ICA o la app MyICA.',
        'Introducir o usar vapeadores se multa, y desde 2025 los extranjeros con vapeadores con etomidato pueden ser deportados. Deja los cigarrillos electrónicos en casa.',
        'Una denegación de visado no se esquiva pidiéndolo con otro agente: primero hay que esperar o presentar un recurso.',
      ],
      passports: {
        RU: 'Los ciudadanos rusos necesitan visado a través de un agente autorizado (30 dólares de Singapur más comisión). Sin visado pueden quedarse hasta 96 horas en tránsito entre dos terceros países. Las tarjetas rusas no funcionan: lleva efectivo.',
        IN: 'Los ciudadanos indios necesitan visado a través de VFS o agencias acreditadas. El tránsito de 96 horas solo vale con visado o residencia de EE. UU., el Reino Unido, Canadá, Australia, Nueva Zelanda, Japón, Alemania o Suiza.',
        CN: 'Desde febrero de 2024 los pasaportes chinos ordinarios tienen una exención mutua de visado de 30 días.',
        UA: 'Los ciudadanos ucranianos necesitan visado, pero pueden usar el tránsito de 96 horas sin visado si vuelan entre dos terceros países.',
      },
    },
    de: {
      summary:
        'EU-Bürger und Koreaner erhalten an der Grenze meist bis zu 90 Tage, Bürger der USA, Großbritanniens, Japans, Chinas und der meisten anderen Länder in der Regel 30 Tage. Russische, die meisten GUS- und indische Staatsangehörigen brauchen ein E-Visum, das über einen autorisierten Agenten beantragt wird. Alle reichen vor der Landung die kostenlose SG Arrival Card ein.',
      apply:
        'Selbst beantragen kannst du das Visum nicht: Ein autorisierter Visa-Agent, eine Airline oder ein lokaler Kontakt in Singapur reicht es für dich ein. Die Gebühr beträgt 30 Singapur-Dollar plus Agenturgebühr, die Entscheidung dauert meist 3–5 Werktage, das Visum kommt als PDF. Die SG Arrival Card reichst du frühestens drei Tage vor der Ankunft auf der ICA-Website ein.',
      extend:
        'Den Besucherpass kannst du vor Ablauf online über den ICA-Service verlängern – nach Ermessen der Behörde, meist um bis zu 30 Tage. Erreicht dein Gesamtaufenthalt 90 Tage oder mehr, fällt eine Gebühr von 40 Singapur-Dollar an.',
      visaRun:
        'Visa-Runs sind möglich, aber Singapur ist nicht dafür gemacht: Nach häufigen Kurztrips nach Johor Bahru können Beamte weniger Tage geben oder die Einreise verweigern. Ein Visum für einmalige Einreise ist mit der Ausreise verbraucht, du brauchst dann ein neues. Am einfachsten geht es per Bus über den Woodlands Causeway oder mit der Fähre nach Batam oder Bintan, etwa eine Stunde entfernt.',
      transit:
        'Die Visa Free Transit Facility erlaubt bis zu 96 Stunden ohne Visum für Bürger Russlands, Kasachstans, Usbekistans, der übrigen GUS-Staaten, Georgiens, Turkmenistans und der Ukraine, die mit Weiterreiseticket über Singapur zwischen zwei anderen Ländern reisen. Inder und Chinesen brauchen zusätzlich ein mindestens einen Monat gültiges Visum oder einen Aufenthaltstitel der USA, Großbritanniens, Kanadas, Australiens, Neuseelands, Japans, Deutschlands oder der Schweiz. Verlängern lässt sich dieser Aufenthalt nicht.',
      hacks: [
        'Der 96-Stunden-Transit ist ein perfekter Gratis-Stopover: Ein Ticket Bangkok – Singapur – Bali bringt dir vier Tage in der Stadt ohne Visum. Das nächste Ziel darf nur nicht der Ort sein, von dem du gekommen bist.',
        'Die Fähre von HarbourFront nach Batam braucht etwa eine Stunde – der schnellste Weg, „das Land zu verlassen“, und nebenbei bekommst du das indonesische Visa on Arrival für einen Inseltrip.',
        'In Changi und an den Landübergängen werden Ausländer biometrisch und ohne Stempel abgefertigt – heb die E-Mail mit deiner erlaubten Aufenthaltsdauer auf.',
        'Hotels in Johor Bahru sind oft zwei- bis dreimal günstiger als in Singapur: Erlaubt dein Visum mehrfache Einreise, kannst du in Malaysia wohnen und Singapur tageweise besuchen.',
      ],
      pitfalls: [
        'Nachgemachte Seiten verlangen Geld für die kostenlose SG Arrival Card. Reiche sie nur über ICA oder die App MyICA ein.',
        'Einfuhr und Gebrauch von Vapes werden mit Bußgeld bestraft, seit 2025 können Ausländer mit etomidathaltigen Vapes abgeschoben werden. Lass E-Zigaretten zu Hause.',
        'Eine Visumablehnung lässt sich nicht umgehen, indem du über einen anderen Agenten neu beantragst: Erst musst du warten oder Einspruch einlegen.',
      ],
      passports: {
        RU: 'Russische Staatsangehörige brauchen ein Visum über einen autorisierten Agenten (30 Singapur-Dollar plus Servicegebühr). Ohne Visum sind bis zu 96 Stunden im Transit zwischen zwei anderen Ländern möglich. Russische Karten funktionieren nicht – nimm Bargeld mit.',
        IN: 'Indische Staatsangehörige brauchen ein Visum über VFS oder akkreditierte Reisebüros. Der 96-Stunden-Transit gilt nur mit Visum oder Aufenthaltstitel der USA, Großbritanniens, Kanadas, Australiens, Neuseelands, Japans, Deutschlands oder der Schweiz.',
        CN: 'Seit Februar 2024 gilt für gewöhnliche chinesische Pässe eine gegenseitige Visumbefreiung für 30 Tage.',
        UA: 'Ukrainische Staatsangehörige brauchen ein Visum, können aber den visumfreien 96-Stunden-Transit nutzen, wenn sie zwischen zwei anderen Ländern fliegen.',
      },
    },
    fr: {
      summary:
        'Les citoyens de l’UE et de Corée obtiennent généralement jusqu’à 90 jours à la frontière ; les Américains, Britanniques, Japonais, Chinois et la plupart des autres visiteurs, en principe 30 jours. Les ressortissants russes, de la majorité de la CEI et indiens ont besoin d’un e-visa demandé par l’intermédiaire d’un agent agréé. Tout le monde remplit avant l’atterrissage la SG Arrival Card, gratuite.',
      apply:
        'Impossible de déposer la demande vous-même : c’est un agent de visas agréé, une compagnie aérienne ou un contact local à Singapour qui la soumet. Les frais sont de 30 dollars de Singapour plus la commission de l’agent, la réponse prend en général 3 à 5 jours ouvrés et le visa arrive en PDF. La SG Arrival Card se remplit sur le site de l’ICA au plus tôt trois jours avant l’arrivée.',
      extend:
        'Vous pouvez prolonger votre visit pass en ligne via le service de l’ICA avant son expiration ; c’est à la discrétion de l’ICA, en général jusqu’à 30 jours. Si votre séjour total atteint 90 jours ou plus, des frais de 40 dollars de Singapour s’appliquent.',
      visaRun:
        'Les visa runs sont possibles, mais Singapour n’est pas fait pour : après de fréquents allers-retours à Johor Bahru, l’agent peut accorder moins de jours ou refuser l’entrée. Un visa à entrée unique est consommé à la sortie, il en faut un nouveau. Le plus simple : le bus par la Causeway de Woodlands ou le ferry pour Batam ou Bintan, à une heure environ.',
      transit:
        'La Visa Free Transit Facility accorde jusqu’à 96 heures sans visa aux ressortissants de Russie, du Kazakhstan, d’Ouzbékistan, des autres pays de la CEI, de Géorgie, du Turkménistan et d’Ukraine qui voyagent entre deux autres pays via Singapour avec un billet de continuation. Les Indiens et les Chinois doivent en plus détenir un visa ou un titre de séjour des États-Unis, du Royaume-Uni, du Canada, de l’Australie, de la Nouvelle-Zélande, du Japon, de l’Allemagne ou de la Suisse valable au moins un mois. Ce séjour n’est pas prolongeable.',
      hacks: [
        'Le transit de 96 heures est une escale gratuite idéale : un billet Bangkok – Singapour – Bali vous offre quatre jours en ville sans visa. La destination suivante ne doit simplement pas être celle d’où vous arrivez.',
        'Le ferry de HarbourFront pour Batam met une heure environ : le moyen le plus rapide de « sortir du pays », et l’occasion d’obtenir le visa indonésien à l’arrivée pour une virée dans les îles.',
        'À Changi et aux postes terrestres, les étrangers passent le contrôle par biométrie, sans tampon : conservez l’e-mail qui confirme la durée de séjour accordée.',
        'Les hôtels de Johor Bahru coûtent souvent deux à trois fois moins cher qu’à Singapour : si votre visa autorise plusieurs entrées, logez en Malaisie et visitez Singapour à la journée.',
      ],
      pitfalls: [
        'Des sites copiés font payer la SG Arrival Card, pourtant gratuite. Remplissez-la uniquement via l’ICA ou l’application MyICA.',
        'Importer ou utiliser une cigarette électronique est sanctionné d’une amende, et depuis 2025 les étrangers pris avec des vapes à l’étomidate peuvent être expulsés. Laissez la vapoteuse chez vous.',
        'Un refus de visa ne se contourne pas en redéposant via un autre agent : il faut d’abord attendre ou faire appel.',
      ],
      passports: {
        RU: 'Les ressortissants russes ont besoin d’un visa via un agent agréé (30 dollars de Singapour plus frais de service). Sans visa, ils peuvent rester jusqu’à 96 heures en transit entre deux autres pays. Les cartes russes ne fonctionnent pas : prévoyez des espèces.',
        IN: 'Les ressortissants indiens ont besoin d’un visa via VFS ou des agences accréditées. Le transit de 96 heures n’est possible qu’avec un visa ou un titre de séjour des États-Unis, du Royaume-Uni, du Canada, de l’Australie, de la Nouvelle-Zélande, du Japon, de l’Allemagne ou de la Suisse.',
        CN: 'Depuis février 2024, les passeports chinois ordinaires bénéficient d’une exemption mutuelle de visa de 30 jours.',
        UA: 'Les ressortissants ukrainiens ont besoin d’un visa, mais peuvent profiter du transit sans visa de 96 heures en voyageant entre deux autres pays.',
      },
    },
    it: {
      summary:
        'Ai cittadini UE e coreani di solito vengono concessi fino a 90 giorni alla frontiera; a statunitensi, britannici, giapponesi, cinesi e alla maggior parte degli altri visitatori in genere 30. I cittadini russi, della maggior parte dei paesi CSI e indiani hanno bisogno di un visto elettronico richiesto tramite un agente autorizzato. Tutti compilano prima dell’atterraggio la SG Arrival Card, gratuita.',
      apply:
        'Non puoi chiedere il visto da solo: la domanda la presenta un agente autorizzato, una compagnia aerea o un contatto locale a Singapore. Costa 30 dollari di Singapore più la commissione dell’agente, la risposta arriva di solito in 3–5 giorni lavorativi e il visto è un PDF. La SG Arrival Card si invia sul sito dell’ICA non prima di tre giorni dall’arrivo.',
      extend:
        'Il visit pass si può prorogare online con il servizio dell’ICA prima della scadenza: decide l’ICA, di solito fino a 30 giorni. Se il soggiorno totale arriva a 90 giorni o più, si paga una tassa di 40 dollari di Singapore.',
      visaRun:
        'I visa run sono possibili, ma Singapore non è fatta per questo: dopo molte uscite brevi a Johor Bahru l’agente può concederti meno giorni o negarti l’ingresso. Il visto a ingresso singolo si consuma all’uscita, quindi ne serve uno nuovo. Le uscite più comode sono l’autobus lungo la Causeway di Woodlands o il traghetto per Batam o Bintan, a circa un’ora.',
      transit:
        'La Visa Free Transit Facility concede fino a 96 ore senza visto ai cittadini di Russia, Kazakistan, Uzbekistan, degli altri paesi CSI, Georgia, Turkmenistan e Ucraina che viaggiano tra due paesi terzi via Singapore con biglietto di proseguimento. Indiani e cinesi devono avere anche un visto o un permesso di soggiorno di Stati Uniti, Regno Unito, Canada, Australia, Nuova Zelanda, Giappone, Germania o Svizzera valido almeno un mese. Questo soggiorno non è prorogabile.',
      hacks: [
        'Il transito di 96 ore è uno stopover gratuito perfetto: un biglietto Bangkok – Singapore – Bali ti regala quattro giorni in città senza visto. Basta che la tappa successiva non sia il luogo da cui sei arrivato.',
        'Il traghetto da HarbourFront a Batam impiega circa un’ora: il modo più rapido per «uscire dal paese» e, già che ci sei, ottenere il visto indonesiano all’arrivo per un giro tra le isole.',
        'A Changi e ai valichi terrestri gli stranieri passano il controllo con la biometria e senza timbro: conserva l’e-mail che conferma il soggiorno concesso.',
        'Gli hotel di Johor Bahru costano spesso due o tre volte meno di quelli di Singapore: se il visto consente più ingressi, puoi dormire in Malesia e visitare Singapore in giornata.',
      ],
      pitfalls: [
        'I siti che imitano la SG Arrival Card fanno pagare un modulo gratuito. Invialo solo tramite l’ICA o l’app MyICA.',
        'Introdurre o usare sigarette elettroniche comporta multe, e dal 2025 gli stranieri trovati con vape all’etomidato possono essere espulsi. Lascia a casa la sigaretta elettronica.',
        'Un visto rifiutato non si aggira chiedendolo a un altro agente: prima bisogna aspettare o presentare ricorso.',
      ],
      passports: {
        RU: 'I cittadini russi hanno bisogno del visto tramite un agente autorizzato (30 dollari di Singapore più commissione). Senza visto possono restare fino a 96 ore in transito tra due paesi terzi. Le carte russe non funzionano: porta contanti.',
        IN: 'I cittadini indiani hanno bisogno del visto tramite VFS o agenzie accreditate. Il transito di 96 ore vale solo con visto o permesso di soggiorno di Stati Uniti, Regno Unito, Canada, Australia, Nuova Zelanda, Giappone, Germania o Svizzera.',
        CN: 'Da febbraio 2024 i passaporti cinesi ordinari godono di un’esenzione reciproca dal visto di 30 giorni.',
        UA: 'I cittadini ucraini hanno bisogno del visto, ma possono usare il transito di 96 ore senza visto volando tra due paesi terzi.',
      },
    },
  },
};

export default guide;
