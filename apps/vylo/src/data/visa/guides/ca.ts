import type { VisaGuide } from '../types';

/** Visa-required passports that may use an eTA instead when flying in (IRCC "eTA for some visa-required countries", incl. ID/MY since 26 May 2026) */
const CONDITIONAL_ETA = ['AG', 'AR', 'BR', 'CR', 'ID', 'MY', 'MX', 'MA', 'PA', 'PH', 'KN', 'LC', 'VC', 'SC', 'TH', 'TT', 'UY'];

const guide: VisaGuide = {
  code: 'CA',
  checked: '2026-10',
  fees: {
    eta: { kind: 'fixed', amount: 7, currency: 'CAD' },
    visa: { kind: 'from', amount: 100, currency: 'CAD' },
  },
  stay: { eta: 180, visa: 180 },
  links: {
    eta: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/eta.html',
    immigration: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada.html',
  },
  docs: ['returnTicket', 'finance'],
  passportMonths: 0,
  extend: { days: 180, fee: { kind: 'fixed', amount: 100, currency: 'CAD' } },
  visaRun: 'no',
  transit: { hours: 24, passports: ['CN', 'ID', 'PH', 'TH'] },
  waivers: [
    { holds: ['visaUS', 'visaCA'], passports: CONDITIONAL_ETA, status: 'eta', days: 180 },
    { holds: ['resUS'], status: 'free', days: 180 },
  ],
  text: {
    ru: {
      summary:
        'Безвизовые путешественники — европейцы, британцы, австралийцы, японцы, корейцы и другие — летят по eTA (7 CAD онлайн, действует пять лет); американцам нужен только паспорт. Большинству остальных нужна гостевая виза (TRV: 100 CAD плюс 85 CAD за биометрию), но граждане 17 стран, включая Мексику, Бразилию, Таиланд и Филиппины, могут вместо неё получить eTA, если у них есть действующая виза США или канадская виза за последние 10 лет.',
      apply:
        'eTA: подайте на canada.ca и заплатите 7 CAD; чаще всего одобряют за минуты, иногда за несколько дней. Гостевая виза: подавайте онлайн через аккаунт IRCC, оплатите 100 CAD плюс 85 CAD за отпечатки пальцев и фото в визовом центре и покажите финансы, связи с домом и маршрут. Сроки — от недель до нескольких месяцев в зависимости от страны; смотрите инструмент сроков обработки IRCC.',
      extend:
        'До окончания статуса подайте онлайн заявку на visitor record (100 CAD), чтобы остаться дольше; пока она рассматривается, вы можете оставаться в стране («сохранённый статус»). Срок определяет офицер, часто до шести месяцев.',
      visaRun:
        'Визараны ничего не обнуляют: если съездить в США и вернуться в пределах первоначального срока, офицер обычно просто разрешает продолжить прежнее пребывание. Кроме того, пограничники отслеживают тех, кто фактически живёт в Канаде, въезжая раз за разом.',
      transit:
        'Граждане Китая, Индонезии, Филиппин и Таиланда с действующей визой США могут транзитом лететь через Канаду в США или из США без канадской визы (Transit Without Visa / China Transit Program) — на рейсах участвующих авиакомпаний через определённые аэропорты, не покидая транзитной зоны и с вылетом в течение 24 часов. Остальным, кому нужна виза, требуется транзитная виза — она бесплатна.',
      waivers: [
        'Граждане 17 стран (в том числе Мексики, Бразилии, Аргентины, Коста-Рики, Панамы, Уругвая, Марокко, Филиппин, Таиланда, Индонезии, Малайзии и Сейшел) могут получить eTA вместо визы, если у них есть действующая неиммиграционная виза США или канадская гостевая виза за последние 10 лет. Это работает только при въезде или транзите по воздуху; на машине, поезде, автобусе или круизном лайнере нужна виза.',
        'Владельцам грин-карты США не нужны ни виза, ни eTA: достаточно паспорта и действующей грин-карты. Сама по себе виза США (без грин-карты) гражданам других стран визу не заменяет.',
      ],
      hacks: [
        'Есть виза США и один из 17 паспортов? Подавайте на eTA за 7 CAD, а не на визу за 185 CAD — и eTA действует пять лет.',
        'Живёте в США по грин-карте — eTA вам не нужно вовсе.',
        'Биометрия действует 10 лет: если вы сдавали её для прошлой заявки, повторно сдавать и платить 85 CAD не придётся.',
        'Прямо просите многократную визу и прикладывайте полный маршрут: с 2024 года IRCC больше не выдаёт 10-летние визы по умолчанию и часто подгоняет срок под поездку.',
        'eTA привязано к паспорту: новый паспорт — новое eTA.',
      ],
      pitfalls: [
        'Сайты-двойники берут 80–100 CAD за eTA. Настоящее оформляют на canada.ca за 7 CAD.',
        'Въезд из США на машине с «условным» eTA: оно действует только для авиаперелётов, на сухопутной границе нужна виза.',
        'Прошлые отказы и судимости (включая вождение в нетрезвом виде) могут сделать вас недопустимым к въезду — указывайте их честно.',
        'Визу могут аннулировать, если офицер сомневается, что вы уедете: держите при себе доказательства возвращения.',
      ],
      passports: {
        RU: 'Россиянам нужна гостевая виза. Биометрию сдают лично в визовом центре — проверьте, работает ли он в России; многие подают из третьей страны, например из Казахстана, Армении, Грузии или Турции. Рассмотрение часто занимает несколько месяцев.',
        MX: 'С февраля 2024 года гражданам Мексики нужна виза, если только у них нет действующей неиммиграционной визы США или канадской визы за последние 10 лет и они летят самолётом — тогда хватит eTA.',
        US: 'Американцам нужен только паспорт или другой признанный документ; владельцам грин-карты — паспорт и грин-карта.',
        IN: 'Гражданам Индии нужна гостевая виза; сроки рассмотрения бывают долгими — подавайте сильно заранее.',
      },
    },
    en: {
      summary:
        'Visa-exempt travellers — Europeans, Britons, Australians, Japanese, Koreans and others — fly in with an eTA (CAD 7 online, valid five years); Americans need only a passport. Most others need a visitor visa (TRV: CAD 100 plus CAD 85 biometrics), but citizens of 17 countries, including Mexico, Brazil, Thailand and the Philippines, can get an eTA instead if they hold a valid US visa or had a Canadian visa in the last 10 years.',
      apply:
        'eTA: apply on canada.ca and pay CAD 7; most are approved within minutes, some take a few days. Visitor visa: apply online through your IRCC account, pay CAD 100 plus CAD 85 for fingerprints and photo at a visa application centre, and show finances, ties at home and an itinerary. Processing ranges from weeks to several months depending on the country — check IRCC’s processing-time tool.',
      extend:
        'Before your status ends, apply online for a visitor record (CAD 100) to stay longer; you may remain while it’s being processed (“maintained status”). The officer sets the length, often up to six more months.',
      visaRun:
        'Visa runs don’t reset anything: if you pop over to the US and return within your original period, officers usually just let you resume that stay. Officers also watch for people effectively living in Canada on back-to-back visits.',
      transit:
        'Chinese, Indonesian, Filipino and Thai citizens with a valid US visa can transit Canada to or from the US without a Canadian visa (Transit Without Visa / China Transit Program) — on participating airlines through designated airports, staying airside and leaving within 24 hours. Everyone else who needs a visa must get a transit visa, which is free.',
      waivers: [
        'Citizens of 17 countries (including Mexico, Brazil, Argentina, Costa Rica, Panama, Uruguay, Morocco, the Philippines, Thailand, Indonesia, Malaysia and Seychelles) can get an eTA instead of a visa if they hold a valid US non-immigrant visa or had a Canadian visitor visa in the past 10 years. It only works when flying in or transiting by air; by car, train, bus or cruise ship you still need a visa.',
        'US green-card holders need neither a visa nor an eTA: show your passport and valid green card. A US visa alone (without a green card) doesn’t replace the visa for other nationalities.',
      ],
      hacks: [
        'Hold a US visa and one of the 17 passports? Apply for the CAD 7 eTA, not the CAD 185 visa — and the eTA is valid for five years.',
        'Living in the US on a green card? You don’t need an eTA at all.',
        'Biometrics are valid for 10 years: if you gave them for a previous application, you won’t redo them or pay CAD 85 again.',
        'Ask explicitly for a multiple-entry visa and attach a full itinerary: since 2024 IRCC no longer issues 10-year visas by default and often matches validity to your trip.',
        'The eTA is linked to your passport: new passport, new eTA.',
      ],
      pitfalls: [
        'Look-alike sites charge CAD 80–100 for the eTA. The real one is on canada.ca for CAD 7.',
        'Driving in from the US on a conditional eTA: it’s valid for air travel only, and at a land border you need a visa.',
        'Past refusals or criminal records (including impaired driving) can make you inadmissible — declare them truthfully.',
        'A visa can be cancelled if the officer doubts you’ll leave: carry proof of your return.',
      ],
      passports: {
        RU: 'Russian citizens need a visitor visa. Biometrics are given in person at a visa application centre — check whether one is operating in Russia; many apply from a third country such as Kazakhstan, Armenia, Georgia or Turkey. Processing often takes several months.',
        MX: 'Since February 2024 Mexican citizens need a visa unless they hold a valid US non-immigrant visa or had a Canadian visa in the last 10 years and are flying — then an eTA is enough.',
        US: 'Americans need only a passport or another accepted document; green-card holders need their passport and green card.',
        IN: 'Indian citizens need a visitor visa; processing can be slow, so apply well ahead.',
      },
    },
    es: {
      summary:
        'Los viajeros exentos de visado (europeos, británicos, australianos, japoneses, coreanos y otros) entran por aire con una eTA (7 CAD en línea, válida cinco años); a los estadounidenses les basta el pasaporte. Casi todos los demás necesitan visado de visitante (TRV: 100 CAD más 85 CAD de biometría), pero los ciudadanos de 17 países, entre ellos México, Brasil, Tailandia y Filipinas, pueden pedir una eTA si tienen un visado estadounidense vigente o tuvieron un visado canadiense en los últimos 10 años.',
      apply:
        'eTA: solicítala en canada.ca y paga 7 CAD; casi siempre se aprueba en minutos, a veces en unos días. Visado de visitante: solicítalo en línea con tu cuenta de IRCC, paga 100 CAD más 85 CAD por huellas y foto en un centro de solicitud de visados y demuestra fondos, arraigo y un itinerario. Tarda desde semanas hasta varios meses según el país: consulta la herramienta de plazos de IRCC.',
      extend:
        'Antes de que termine tu estatus, pide en línea un visitor record (100 CAD) para quedarte más tiempo; mientras se tramita puedes seguir en el país (“estatus mantenido”). La duración la decide el agente, a menudo hasta seis meses más.',
      visaRun:
        'Los visa runs no reinician nada: si te escapas a EE. UU. y vuelves dentro de tu periodo original, normalmente te dejan seguir con la misma estancia. Además, los agentes vigilan a quien en la práctica vive en Canadá encadenando visitas.',
      transit:
        'Los ciudadanos de China, Indonesia, Filipinas y Tailandia con visado estadounidense vigente pueden hacer tránsito por Canadá hacia o desde EE. UU. sin visado canadiense (Transit Without Visa / China Transit Program), con aerolíneas participantes y por aeropuertos designados, sin salir de la zona de tránsito y saliendo en 24 horas. Los demás que necesitan visado deben pedir un visado de tránsito, que es gratuito.',
      waivers: [
        'Los ciudadanos de 17 países (entre ellos México, Brasil, Argentina, Costa Rica, Panamá, Uruguay, Marruecos, Filipinas, Tailandia, Indonesia, Malasia y Seychelles) pueden pedir una eTA en vez del visado si tienen un visado de no inmigrante de EE. UU. vigente o tuvieron un visado de visitante canadiense en los últimos 10 años. Solo vale para llegar o hacer tránsito en avión; en coche, tren, autobús o crucero sigues necesitando visado.',
        'Los titulares de la green card estadounidense no necesitan ni visado ni eTA: basta con el pasaporte y la green card vigente. Un visado de EE. UU. por sí solo (sin green card) no sustituye al visado para otras nacionalidades.',
      ],
      hacks: [
        '¿Tienes visado de EE. UU. y uno de los 17 pasaportes? Pide la eTA de 7 CAD y no el visado de 185 CAD; además, la eTA vale cinco años.',
        '¿Vives en EE. UU. con green card? No necesitas eTA.',
        'La biometría vale 10 años: si la diste para una solicitud anterior, no tendrás que repetirla ni pagar otra vez 85 CAD.',
        'Pide expresamente un visado de entradas múltiples y adjunta el itinerario completo: desde 2024 IRCC ya no concede por defecto visados de 10 años y a menudo ajusta la validez al viaje.',
        'La eTA va ligada al pasaporte: pasaporte nuevo, eTA nueva.',
      ],
      pitfalls: [
        'Las webs clonadas cobran 80–100 CAD por la eTA. La de verdad está en canada.ca y cuesta 7 CAD.',
        'Entrar en coche desde EE. UU. con una eTA condicional: solo vale por aire, y en la frontera terrestre necesitas visado.',
        'Las denegaciones previas o los antecedentes penales (incluida la conducción bajo los efectos del alcohol) pueden hacerte inadmisible: decláralos con sinceridad.',
        'El visado puede cancelarse si el agente duda de que vayas a salir: lleva pruebas de tu regreso.',
      ],
      passports: {
        RU: 'Los ciudadanos rusos necesitan visado de visitante. La biometría se da en persona en un centro de solicitud de visados: comprueba si hay uno operativo en Rusia; muchos lo piden desde un tercer país, como Kazajistán, Armenia, Georgia o Turquía. La tramitación suele llevar varios meses.',
        MX: 'Desde febrero de 2024 los ciudadanos mexicanos necesitan visado, salvo que tengan un visado de no inmigrante de EE. UU. vigente o un visado canadiense de los últimos 10 años y lleguen en avión: entonces basta la eTA.',
        US: 'A los estadounidenses les basta el pasaporte u otro documento aceptado; a los titulares de green card, el pasaporte y la green card.',
        IN: 'Los ciudadanos indios necesitan visado de visitante; la tramitación puede ser lenta, así que solicítalo con mucha antelación.',
      },
    },
    de: {
      summary:
        'Visumfreie Reisende – Europäer, Briten, Australier, Japaner, Koreaner und andere – fliegen mit einer eTA ein (7 CAD online, fünf Jahre gültig); Amerikaner brauchen nur ihren Pass. Die meisten anderen brauchen ein Besuchervisum (TRV: 100 CAD plus 85 CAD Biometrie), doch Bürger von 17 Ländern, darunter Mexiko, Brasilien, Thailand und die Philippinen, können stattdessen eine eTA bekommen, wenn sie ein gültiges US-Visum haben oder in den letzten 10 Jahren ein kanadisches Visum hatten.',
      apply:
        'eTA: auf canada.ca beantragen und 7 CAD zahlen; meist kommt die Genehmigung in Minuten, manchmal nach einigen Tagen. Besuchervisum: online über dein IRCC-Konto beantragen, 100 CAD plus 85 CAD für Fingerabdrücke und Foto in einem Visa Application Centre zahlen und Finanzen, Bindungen zu Hause und Reiseplan nachweisen. Die Bearbeitung dauert je nach Land Wochen bis mehrere Monate – prüfe das Bearbeitungszeit-Tool von IRCC.',
      extend:
        'Vor Ablauf deines Status beantragst du online ein Visitor Record (100 CAD), um länger zu bleiben; während der Bearbeitung darfst du bleiben („maintained status“). Die Dauer legt der Beamte fest, oft bis zu sechs weitere Monate.',
      visaRun:
        'Visa-Runs setzen nichts zurück: Wer kurz in die USA fährt und innerhalb des ursprünglichen Zeitraums zurückkommt, darf meist einfach den alten Aufenthalt fortsetzen. Außerdem achten Beamte auf Leute, die mit Besuchen am Stück faktisch in Kanada leben.',
      transit:
        'Chinesische, indonesische, philippinische und thailändische Staatsangehörige mit gültigem US-Visum können ohne kanadisches Visum über Kanada in die USA oder aus den USA reisen (Transit Without Visa / China Transit Program) – mit teilnehmenden Airlines über bestimmte Flughäfen, ohne den Transitbereich zu verlassen und mit Weiterflug innerhalb von 24 Stunden. Alle anderen Visumpflichtigen brauchen ein Transitvisum, das kostenlos ist.',
      waivers: [
        'Bürger von 17 Ländern (darunter Mexiko, Brasilien, Argentinien, Costa Rica, Panama, Uruguay, Marokko, die Philippinen, Thailand, Indonesien, Malaysia und die Seychellen) können statt eines Visums eine eTA beantragen, wenn sie ein gültiges US-Nichteinwanderungsvisum haben oder in den letzten 10 Jahren ein kanadisches Besuchervisum hatten. Das gilt nur bei Einreise oder Transit per Flugzeug; mit Auto, Zug, Bus oder Kreuzfahrtschiff brauchst du weiterhin ein Visum.',
        'Inhaber einer US-Green-Card brauchen weder Visum noch eTA: Pass und gültige Green Card genügen. Ein US-Visum allein (ohne Green Card) ersetzt das Visum für andere Nationalitäten nicht.',
      ],
      hacks: [
        'US-Visum und einer der 17 Pässe? Beantrage die eTA für 7 CAD statt des Visums für 185 CAD – und die eTA gilt fünf Jahre.',
        'Du lebst mit Green Card in den USA? Dann brauchst du gar keine eTA.',
        'Biometriedaten gelten 10 Jahre: Hast du sie für einen früheren Antrag abgegeben, musst du sie nicht erneut abgeben oder wieder 85 CAD zahlen.',
        'Bitte ausdrücklich um ein Visum für mehrfache Einreise und füge den vollständigen Reiseplan bei: Seit 2024 vergibt IRCC 10-Jahres-Visa nicht mehr automatisch und passt die Gültigkeit oft an die Reise an.',
        'Die eTA hängt am Pass: neuer Pass, neue eTA.',
      ],
      pitfalls: [
        'Nachahmerseiten verlangen 80–100 CAD für die eTA. Die echte gibt es auf canada.ca für 7 CAD.',
        'Mit konditionaler eTA per Auto aus den USA einreisen: Sie gilt nur für Flugreisen, an der Landgrenze brauchst du ein Visum.',
        'Frühere Ablehnungen oder Vorstrafen (auch Trunkenheit am Steuer) können zur Einreiseverweigerung führen – gib sie ehrlich an.',
        'Ein Visum kann annulliert werden, wenn der Beamte bezweifelt, dass du wieder ausreist: Nimm Belege für die Rückreise mit.',
      ],
      passports: {
        RU: 'Russische Staatsangehörige brauchen ein Besuchervisum. Biometrie wird persönlich in einem Visa Application Centre abgegeben – prüfe, ob eines in Russland in Betrieb ist; viele beantragen aus einem Drittland wie Kasachstan, Armenien, Georgien oder der Türkei. Die Bearbeitung dauert oft mehrere Monate.',
        MX: 'Seit Februar 2024 brauchen mexikanische Staatsangehörige ein Visum, außer sie haben ein gültiges US-Nichteinwanderungsvisum oder hatten in den letzten 10 Jahren ein kanadisches Visum und reisen per Flugzeug – dann genügt die eTA.',
        US: 'Amerikaner brauchen nur einen Pass oder ein anderes anerkanntes Dokument; Green-Card-Inhaber Pass und Green Card.',
        IN: 'Indische Staatsangehörige brauchen ein Besuchervisum; die Bearbeitung kann dauern, also früh beantragen.',
      },
    },
    fr: {
      summary:
        'Les voyageurs dispensés de visa — Européens, Britanniques, Australiens, Japonais, Coréens, etc. — arrivent par avion avec une AVE (eTA, 7 $ CA en ligne, valable cinq ans) ; les Américains n’ont besoin que de leur passeport. La plupart des autres doivent obtenir un visa de visiteur (VRT : 100 $ CA plus 85 $ CA de biométrie), mais les ressortissants de 17 pays, dont le Mexique, le Brésil, la Thaïlande et les Philippines, peuvent obtenir une AVE à la place s’ils détiennent un visa américain valable ou ont eu un visa canadien ces 10 dernières années.',
      apply:
        'AVE : faites la demande sur canada.ca et payez 7 $ CA ; la plupart sont approuvées en quelques minutes, certaines en quelques jours. Visa de visiteur : demande en ligne via votre compte IRCC, 100 $ CA plus 85 $ CA pour les empreintes et la photo dans un centre de réception des demandes de visa, avec justificatifs de ressources, d’attaches et un itinéraire. Le traitement va de quelques semaines à plusieurs mois selon le pays : consultez l’outil des délais d’IRCC.',
      extend:
        'Avant la fin de votre statut, demandez en ligne une fiche de visiteur (100 $ CA) pour rester plus longtemps ; vous pouvez rester pendant son traitement (« statut maintenu »). L’agent fixe la durée, souvent jusqu’à six mois de plus.',
      visaRun:
        'Les visa runs ne remettent rien à zéro : si vous faites un saut aux États-Unis et revenez pendant votre période initiale, l’agent vous laisse en général simplement reprendre ce séjour. Les agents repèrent aussi ceux qui vivent de fait au Canada en enchaînant les visites.',
      transit:
        'Les ressortissants chinois, indonésiens, philippins et thaïlandais titulaires d’un visa américain valable peuvent transiter par le Canada vers ou depuis les États-Unis sans visa canadien (Transit Without Visa / China Transit Program), sur des compagnies participantes et via des aéroports désignés, sans quitter la zone de transit et en repartant sous 24 heures. Les autres voyageurs soumis à visa doivent obtenir un visa de transit, gratuit.',
      waivers: [
        'Les ressortissants de 17 pays (dont le Mexique, le Brésil, l’Argentine, le Costa Rica, le Panama, l’Uruguay, le Maroc, les Philippines, la Thaïlande, l’Indonésie, la Malaisie et les Seychelles) peuvent demander une AVE au lieu d’un visa s’ils détiennent un visa américain de non-immigrant valable ou ont eu un visa de visiteur canadien au cours des 10 dernières années. Cela ne vaut que pour une arrivée ou un transit par avion ; en voiture, en train, en bus ou en croisière, le visa reste obligatoire.',
        'Les titulaires d’une carte verte américaine n’ont besoin ni de visa ni d’AVE : passeport et carte verte valable suffisent. Un visa américain seul (sans carte verte) ne remplace pas le visa pour les autres nationalités.',
      ],
      hacks: [
        'Visa américain et l’un des 17 passeports ? Demandez l’AVE à 7 $ CA plutôt que le visa à 185 $ CA — et l’AVE est valable cinq ans.',
        'Vous vivez aux États-Unis avec une carte verte ? Vous n’avez pas besoin d’AVE.',
        'La biométrie est valable 10 ans : si vous l’avez fournie pour une demande précédente, vous n’avez ni à la refaire ni à repayer 85 $ CA.',
        'Demandez expressément un visa à entrées multiples et joignez l’itinéraire complet : depuis 2024, IRCC ne délivre plus par défaut des visas de 10 ans et cale souvent la validité sur le voyage.',
        'L’AVE est liée au passeport : nouveau passeport, nouvelle AVE.',
      ],
      pitfalls: [
        'Des sites copiés facturent l’AVE 80 à 100 $ CA. La vraie se demande sur canada.ca pour 7 $ CA.',
        'Entrer en voiture depuis les États-Unis avec une AVE conditionnelle : elle ne vaut que pour l’avion, et à la frontière terrestre il faut un visa.',
        'Des refus antérieurs ou des antécédents judiciaires (y compris la conduite avec facultés affaiblies) peuvent vous rendre interdit de territoire : déclarez-les honnêtement.',
        'Un visa peut être annulé si l’agent doute de votre départ : gardez des preuves de retour sur vous.',
      ],
      passports: {
        RU: 'Les ressortissants russes ont besoin d’un visa de visiteur. La biométrie se donne en personne dans un centre de réception des demandes de visa : vérifiez s’il en existe un en activité en Russie ; beaucoup déposent depuis un pays tiers comme le Kazakhstan, l’Arménie, la Géorgie ou la Turquie. Le traitement prend souvent plusieurs mois.',
        MX: 'Depuis février 2024, les ressortissants mexicains ont besoin d’un visa, sauf s’ils détiennent un visa américain de non-immigrant valable ou ont eu un visa canadien ces 10 dernières années et voyagent en avion : l’AVE suffit alors.',
        US: 'Les Américains n’ont besoin que d’un passeport ou d’un autre document reconnu ; les titulaires de carte verte, du passeport et de la carte verte.',
        IN: 'Les ressortissants indiens ont besoin d’un visa de visiteur ; le traitement peut être long, déposez bien à l’avance.',
      },
    },
    it: {
      summary:
        'I viaggiatori esenti dal visto (europei, britannici, australiani, giapponesi, coreani e altri) entrano in aereo con l’eTA (7 CAD online, valida cinque anni); agli americani basta il passaporto. Quasi tutti gli altri hanno bisogno del visto per visitatori (TRV: 100 CAD più 85 CAD di biometria), ma i cittadini di 17 paesi, tra cui Messico, Brasile, Thailandia e Filippine, possono ottenere invece l’eTA se hanno un visto statunitense valido o hanno avuto un visto canadese negli ultimi 10 anni.',
      apply:
        'eTA: fai domanda su canada.ca e paga 7 CAD; di solito l’approvazione arriva in pochi minuti, a volte in qualche giorno. Visto per visitatori: domanda online dal tuo account IRCC, 100 CAD più 85 CAD per impronte e foto in un centro visti, con prova di mezzi, legami con casa e itinerario. I tempi vanno da settimane a diversi mesi a seconda del paese: controlla lo strumento dei tempi di IRCC.',
      extend:
        'Prima che scada il tuo status, chiedi online un visitor record (100 CAD) per restare più a lungo; durante l’esame puoi rimanere nel paese (“status mantenuto”). La durata la decide l’agente, spesso fino a sei mesi in più.',
      visaRun:
        'I visa run non azzerano nulla: se fai un salto negli Stati Uniti e rientri entro il periodo originario, di solito l’agente ti lascia semplicemente proseguire lo stesso soggiorno. Gli agenti tengono d’occhio anche chi di fatto vive in Canada con visite consecutive.',
      transit:
        'I cittadini di Cina, Indonesia, Filippine e Thailandia con visto statunitense valido possono transitare in Canada verso o dagli Stati Uniti senza visto canadese (Transit Without Visa / China Transit Program), con compagnie aderenti e negli aeroporti previsti, senza uscire dalla zona transiti e ripartendo entro 24 ore. Tutti gli altri soggetti a visto devono chiedere un visto di transito, che è gratuito.',
      waivers: [
        'I cittadini di 17 paesi (tra cui Messico, Brasile, Argentina, Costa Rica, Panama, Uruguay, Marocco, Filippine, Thailandia, Indonesia, Malaysia e Seychelles) possono chiedere l’eTA al posto del visto se hanno un visto statunitense di non immigrante valido o hanno avuto un visto canadese per visitatori negli ultimi 10 anni. Vale solo per arrivi o transiti in aereo; in auto, treno, autobus o nave da crociera serve comunque il visto.',
        'I titolari di green card statunitense non hanno bisogno né di visto né di eTA: bastano passaporto e green card valida. Un visto statunitense da solo (senza green card) non sostituisce il visto per le altre nazionalità.',
      ],
      hacks: [
        'Hai un visto USA e uno dei 17 passaporti? Chiedi l’eTA da 7 CAD invece del visto da 185 CAD, e l’eTA vale cinque anni.',
        'Vivi negli Stati Uniti con la green card? L’eTA non ti serve.',
        'I dati biometrici valgono 10 anni: se li hai già dati per una domanda precedente, non devi rifarli né ripagare 85 CAD.',
        'Chiedi esplicitamente un visto a ingressi multipli e allega l’itinerario completo: dal 2024 IRCC non rilascia più di default visti decennali e spesso adatta la validità al viaggio.',
        'L’eTA è legata al passaporto: passaporto nuovo, eTA nuova.',
      ],
      pitfalls: [
        'I siti clone fanno pagare l’eTA 80–100 CAD. Quella vera si chiede su canada.ca a 7 CAD.',
        'Entrare in auto dagli Stati Uniti con un’eTA condizionale: vale solo per l’aereo, alla frontiera terrestre serve il visto.',
        'Rifiuti precedenti o precedenti penali (compresa la guida in stato di ebbrezza) possono renderti inammissibile: dichiarali con sincerità.',
        'Il visto può essere annullato se l’agente dubita che ripartirai: porta con te prove del rientro.',
      ],
      passports: {
        RU: 'I cittadini russi hanno bisogno del visto per visitatori. I dati biometrici si danno di persona in un centro visti: verifica se ce n’è uno operativo in Russia; molti fanno domanda da un paese terzo come Kazakistan, Armenia, Georgia o Turchia. L’esame richiede spesso diversi mesi.',
        MX: 'Da febbraio 2024 i cittadini messicani hanno bisogno del visto, a meno che non abbiano un visto statunitense di non immigrante valido o un visto canadese negli ultimi 10 anni e viaggino in aereo: allora basta l’eTA.',
        US: 'Agli americani basta il passaporto o un altro documento riconosciuto; ai titolari di green card, passaporto e green card.',
        IN: 'I cittadini indiani hanno bisogno del visto per visitatori; i tempi possono essere lunghi, quindi fai domanda con largo anticipo.',
      },
    },
  },
};

export default guide;
