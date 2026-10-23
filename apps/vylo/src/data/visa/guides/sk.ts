import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'SK',
  checked: '2026-10',
  fees: { visa: { kind: 'fixed', amount: 90, currency: 'EUR' } },
  stay: { visa: 90 },
  links: { immigration: 'https://www.mzv.sk' },
  docs: ['insurance', 'returnTicket', 'booking', 'finance'],
  passportMonths: 3,
  rule: { days: 90, window: 180 },
  visaRun: 'no',
  text: {
    ru: {
      summary:
        'Гражданам ЕС достаточно ID-карты. Граждане США, Великобритании, Канады, Австралии, Японии, Кореи, Бразилии, Мексики, ОАЭ, Израиля, Украины и Грузии въезжают без визы до 90 дней в любые 180 по всему Шенгену. Остальным, включая граждан России, Индии, Китая, Турции и Казахстана, нужна шенгенская виза — подойдёт виза любой страны Шенгена.',
      apply:
        'Если Словакия — основная страна поездки, подавайтесь в словацкое консульство или визовый центр: сбор 90 €, для детей 6–12 лет — 45 €. Подать можно за полгода, но не позже чем за 15 дней; решение обычно около 15 дней. Нужны страховка с покрытием от 30 000 €, брони, обратный билет и выписка со счёта. Многие летят в Вену и въезжают в Словакию по визе той страны, где проводят больше всего дней.',
      visaRun:
        'Визаран не работает: правило 90/180 считает дни во всём Шенгене, а выезд в Ужгород или Белград лишь ставит счётчик на паузу. Дни вне зоны постепенно выпадают из 180-дневного окна, но выезд не обнуляет срок.',
      hacks: [
        'Аэропорт Вены в часе езды от Братиславы: автобусы Slovak Lines и FlixBus ходят каждые 30–60 минут, паспортного контроля на этом участке обычно нет — часто это дешевле, чем лететь в сам Братиславский аэропорт.',
        'Дни в Великобритании, Ирландии, на Кипре и на Балканах не входят в шенгенские 90/180 — длинное путешествие можно разбить без нарушений.',
        'С запуском EES (полностью с апреля 2026 года) штампов в паспорте нет: дни считаются по отпечаткам и фото. Проверьте остаток в официальном калькуляторе краткосрочного пребывания ЕС.',
        'Индийцам выгодно «каскадное» правило: после двух использованных по правилам виз за три года выдают многократную визу на два года, затем на пять.',
      ],
      pitfalls: [
        'Если вы живёте не в отеле, а у знакомых, о месте проживания нужно сообщить в иностранную полицию в течение трёх рабочих дней; отели делают это сами.',
        'Однократная виза сгорает после выезда из Шенгена: переход Вышне-Немецке — Ужгород в Украину оставит вас без права вернуться.',
        'ETIAS ещё не работает (запуск не раньше конца 2026, вероятнее 2027 год) — не платите сайтам, которые «оформляют» его сейчас.',
      ],
      passports: {
        RU: 'Словакия не запрещает въезд россиянам с шенгенской визой любой страны, но сама выдаёт туристические визы в России в ограниченном числе. С ноября 2025 года ЕС выдаёт гражданам России в основном однократные визы. Прямых рейсов нет: удобнее лететь в Вену или Будапешт через Стамбул или Белград; российские карты не работают.',
        UA: 'Гражданам Украины с биометрическим паспортом виза не нужна (90/180). На переходе Вышне-Немецке — Ужгород бывают долгие очереди; временная защита в ЕС продлена до 4 марта 2027 года.',
        IN: 'Гражданам Индии нужна шенгенская виза; после двух поездок без нарушений положена многократная виза на два, затем на пять лет.',
      },
    },
    en: {
      summary:
        'EU citizens just need an ID card. Citizens of the US, UK, Canada, Australia, Japan, Korea, Brazil, Mexico, the UAE, Israel, Ukraine and Georgia enter visa-free for up to 90 days in any 180 across the Schengen area. Everyone else, including citizens of Russia, India, China, Turkey and Kazakhstan, needs a Schengen visa — one from any Schengen country will do.',
      apply:
        'If Slovakia is your main destination, apply at a Slovak consulate or visa centre: the fee is €90, or €45 for children aged 6–12. Apply up to six months ahead and at least 15 days before the trip; decisions usually take about 15 days. You need insurance with at least €30,000 cover, bookings, a return ticket and bank statements. Many travellers fly into Vienna and enter Slovakia on a visa from the country where they spend the most days.',
      visaRun:
        'Visa runs do not work: the 90/180 rule counts days across the whole Schengen area, and a trip to Uzhhorod or Belgrade only pauses the clock. Days outside the zone gradually drop out of the 180-day window, but leaving never resets your allowance.',
      hacks: [
        'Vienna Airport is an hour from Bratislava, with Slovak Lines and FlixBus coaches every 30–60 minutes and usually no passport control on the way — often cheaper than flying into Bratislava itself.',
        'Days in the UK, Ireland, Cyprus and the Balkans do not count towards the Schengen 90/180, so a long trip can be split without breaking the rules.',
        'With the EES (fully live since April 2026) there are no more passport stamps: days are counted from your fingerprints and photo. Check your balance with the EU’s official short-stay calculator.',
        'Indian citizens benefit from the “cascade” rule: after two visas used correctly within three years, you get a two-year multiple-entry visa, then a five-year one.',
      ],
      pitfalls: [
        'If you stay with friends rather than in a hotel, you must report your address to the foreign police within three working days; hotels do it for you.',
        'A single-entry visa is spent once you leave Schengen: crossing at Vyšné Nemecké into Ukraine leaves you with no right to come back.',
        'ETIAS is not running yet (late 2026 at the earliest, more likely 2027) — do not pay sites that “process” it now.',
      ],
      passports: {
        RU: 'Slovakia does not ban Russians holding a Schengen visa from any country, but it issues only a limited number of tourist visas in Russia itself. Since November 2025 the EU has mostly been issuing single-entry visas to Russian citizens. There are no direct flights: the easiest route is to Vienna or Budapest via Istanbul or Belgrade, and Russian bank cards do not work.',
        UA: 'Ukrainian citizens with a biometric passport need no visa (90/180). Expect long queues at Vyšné Nemecké–Uzhhorod; EU temporary protection has been extended to 4 March 2027.',
        IN: 'Indian citizens need a Schengen visa; after two trouble-free trips you qualify for a two-year, then a five-year multiple-entry visa.',
      },
    },
    es: {
      summary:
        'A los ciudadanos de la UE les basta el DNI. Los de EE. UU., Reino Unido, Canadá, Australia, Japón, Corea, Brasil, México, Emiratos, Israel, Ucrania y Georgia entran sin visado hasta 90 días en cualquier periodo de 180 en todo Schengen. El resto, incluidos los ciudadanos de Rusia, India, China, Turquía y Kazajistán, necesita visado Schengen, y sirve el de cualquier país del espacio.',
      apply:
        'Si Eslovaquia es tu destino principal, solicita el visado en un consulado o centro de visados eslovaco: cuesta 90 € (45 € para niños de 6 a 12 años). Puedes presentarlo hasta seis meses antes y al menos 15 días antes; la resolución suele tardar unos 15 días. Necesitas un seguro con al menos 30 000 € de cobertura, reservas, billete de vuelta y extractos bancarios. Muchos viajeros vuelan a Viena y entran en Eslovaquia con el visado del país donde pasan más días.',
      visaRun:
        'Los visa runs no funcionan: la regla 90/180 cuenta los días en todo Schengen, y un viaje a Úzhgorod o Belgrado solo detiene el contador. Los días fuera de la zona van saliendo de la ventana de 180 días, pero salir nunca reinicia tu cupo.',
      hacks: [
        'El aeropuerto de Viena está a una hora de Bratislava, con autobuses de Slovak Lines y FlixBus cada 30–60 minutos y normalmente sin control de pasaportes: a menudo sale más barato que volar al propio aeropuerto de Bratislava.',
        'Los días en Reino Unido, Irlanda, Chipre y los Balcanes no cuentan para los 90/180 de Schengen, así que puedes dividir un viaje largo sin incumplir nada.',
        'Con el EES (plenamente operativo desde abril de 2026) ya no hay sellos: los días se cuentan por tus huellas y foto. Consulta tu saldo en la calculadora oficial de estancias cortas de la UE.',
        'Los ciudadanos indios se benefician de la regla «en cascada»: tras dos visados bien usados en tres años, reciben uno de entradas múltiples de dos años y después de cinco.',
      ],
      pitfalls: [
        'Si te alojas con amigos y no en un hotel, debes comunicar tu dirección a la policía de extranjería en tres días hábiles; los hoteles lo hacen por ti.',
        'Un visado de una sola entrada se agota al salir de Schengen: cruzar por Vyšné Nemecké a Ucrania te deja sin derecho a volver.',
        'ETIAS aún no funciona (como pronto a finales de 2026, probablemente en 2027): no pagues a webs que lo «tramitan» ahora.',
      ],
      passports: {
        RU: 'Eslovaquia no veta la entrada a rusos con visado Schengen de cualquier país, pero en Rusia expide un número limitado de visados turísticos. Desde noviembre de 2025 la UE concede a los ciudadanos rusos sobre todo visados de una sola entrada. No hay vuelos directos: lo más práctico es volar a Viena o Budapest vía Estambul o Belgrado; las tarjetas rusas no funcionan.',
        UA: 'Los ciudadanos ucranianos con pasaporte biométrico no necesitan visado (90/180). En Vyšné Nemecké–Úzhgorod hay colas largas; la protección temporal de la UE se ha prorrogado hasta el 4 de marzo de 2027.',
        IN: 'Los ciudadanos indios necesitan visado Schengen; tras dos viajes sin incidencias, optan a uno de entradas múltiples de dos años y luego de cinco.',
      },
    },
    de: {
      summary:
        'EU-Bürgern genügt der Personalausweis. Staatsangehörige der USA, Großbritanniens, Kanadas, Australiens, Japans, Koreas, Brasiliens, Mexikos, der VAE, Israels, der Ukraine und Georgiens reisen visumfrei bis zu 90 Tage innerhalb von 180 Tagen im ganzen Schengen-Raum. Alle anderen, auch Bürger Russlands, Indiens, Chinas, der Türkei und Kasachstans, brauchen ein Schengen-Visum – das eines beliebigen Schengen-Staats genügt.',
      apply:
        'Ist die Slowakei dein Hauptreiseziel, beantragst du das Visum bei einem slowakischen Konsulat oder Visazentrum: 90 €, für Kinder von 6 bis 12 Jahren 45 €. Der Antrag geht frühestens sechs Monate und spätestens 15 Tage vor der Reise; die Entscheidung dauert meist etwa 15 Tage. Nötig sind eine Versicherung mit mindestens 30.000 € Deckung, Buchungen, ein Rückflugticket und Kontoauszüge. Viele fliegen nach Wien und reisen mit dem Visum des Landes ein, in dem sie die meisten Tage verbringen.',
      visaRun:
        'Visa-Runs funktionieren nicht: Die 90/180-Regel zählt die Tage im gesamten Schengen-Raum, und ein Abstecher nach Uschhorod oder Belgrad hält die Uhr nur an. Tage außerhalb fallen nach und nach aus dem 180-Tage-Fenster, aber eine Ausreise setzt dein Kontingent nie zurück.',
      hacks: [
        'Der Flughafen Wien liegt eine Stunde von Bratislava entfernt; Busse von Slovak Lines und FlixBus fahren alle 30–60 Minuten, meist ohne Passkontrolle – oft günstiger als ein Flug nach Bratislava selbst.',
        'Tage in Großbritannien, Irland, Zypern und auf dem Balkan zählen nicht zu den Schengen-90/180 – so lässt sich eine lange Reise regelkonform aufteilen.',
        'Mit dem EES (seit April 2026 voll in Betrieb) gibt es keine Stempel mehr: Die Tage werden über Fingerabdrücke und Foto gezählt. Prüfe dein Restguthaben mit dem offiziellen EU-Kurzaufenthaltsrechner.',
        'Inder profitieren von der „Kaskadenregel“: Nach zwei korrekt genutzten Visa innerhalb von drei Jahren gibt es ein Mehrfachvisum für zwei, danach für fünf Jahre.',
      ],
      pitfalls: [
        'Wohnst du bei Bekannten statt im Hotel, musst du deine Adresse binnen drei Werktagen bei der Fremdenpolizei melden; Hotels erledigen das selbst.',
        'Ein Visum für die einmalige Einreise ist mit dem Verlassen des Schengen-Raums verbraucht: Wer bei Vyšné Nemecké in die Ukraine fährt, darf nicht mehr zurück.',
        'ETIAS läuft noch nicht (frühestens Ende 2026, eher 2027) – zahl nichts an Seiten, die es jetzt „beantragen“.',
      ],
      passports: {
        RU: 'Die Slowakei verweigert Russen mit einem Schengen-Visum eines beliebigen Landes nicht die Einreise, stellt in Russland selbst aber nur wenige Touristenvisa aus. Seit November 2025 erhalten russische Staatsangehörige in der EU meist nur noch Visa für die einmalige Einreise. Direktflüge gibt es nicht: Am einfachsten geht es über Istanbul oder Belgrad nach Wien oder Budapest; russische Karten funktionieren nicht.',
        UA: 'Ukrainer mit biometrischem Pass brauchen kein Visum (90/180). Am Übergang Vyšné Nemecké–Uschhorod gibt es lange Schlangen; der vorübergehende Schutz in der EU gilt bis 4. März 2027.',
        IN: 'Inder brauchen ein Schengen-Visum; nach zwei problemlosen Reisen gibt es ein Mehrfachvisum für zwei, dann für fünf Jahre.',
      },
    },
    fr: {
      summary:
        'Les citoyens de l’UE n’ont besoin que de leur carte d’identité. Les ressortissants des États-Unis, du Royaume-Uni, du Canada, d’Australie, du Japon, de Corée, du Brésil, du Mexique, des Émirats, d’Israël, d’Ukraine et de Géorgie entrent sans visa jusqu’à 90 jours sur 180 dans tout l’espace Schengen. Les autres, dont les citoyens russes, indiens, chinois, turcs et kazakhs, ont besoin d’un visa Schengen, délivré par n’importe quel État membre.',
      apply:
        'Si la Slovaquie est votre destination principale, déposez la demande auprès d’un consulat ou centre de visas slovaque : 90 €, ou 45 € pour les enfants de 6 à 12 ans. La demande se fait jusqu’à six mois avant et au plus tard 15 jours avant le départ ; la décision prend en général une quinzaine de jours. Il faut une assurance couvrant au moins 30 000 €, des réservations, un billet retour et des relevés bancaires. Beaucoup de voyageurs atterrissent à Vienne et entrent en Slovaquie avec le visa du pays où ils passent le plus de jours.',
      visaRun:
        'Le visa run ne fonctionne pas : la règle des 90/180 compte les jours dans tout l’espace Schengen, et un saut à Oujhorod ou Belgrade ne fait que suspendre le compteur. Les jours hors de la zone sortent peu à peu de la fenêtre de 180 jours, mais une sortie ne remet jamais votre crédit à zéro.',
      hacks: [
        'L’aéroport de Vienne est à une heure de Bratislava, avec des cars Slovak Lines et FlixBus toutes les 30 à 60 minutes, généralement sans contrôle des passeports : souvent moins cher qu’un vol pour Bratislava même.',
        'Les jours passés au Royaume-Uni, en Irlande, à Chypre et dans les Balkans ne comptent pas dans les 90/180 de Schengen : un long voyage peut être découpé en toute légalité.',
        'Avec l’EES (pleinement opérationnel depuis avril 2026), fini les tampons : les jours sont décomptés grâce à vos empreintes et votre photo. Vérifiez votre solde avec le calculateur officiel de court séjour de l’UE.',
        'Les citoyens indiens profitent de la règle « en cascade » : après deux visas utilisés correctement en trois ans, ils obtiennent un visa à entrées multiples de deux ans, puis de cinq ans.',
      ],
      pitfalls: [
        'Si vous logez chez des amis plutôt qu’à l’hôtel, vous devez déclarer votre adresse à la police des étrangers sous trois jours ouvrés ; les hôtels s’en chargent.',
        'Un visa à entrée unique est consommé dès la sortie de Schengen : passer en Ukraine à Vyšné Nemecké vous prive du droit de revenir.',
        'ETIAS n’est pas encore en service (au plus tôt fin 2026, plus probablement 2027) : ne payez pas les sites qui le « délivrent » aujourd’hui.',
      ],
      passports: {
        RU: 'La Slovaquie n’interdit pas l’entrée aux Russes munis d’un visa Schengen de n’importe quel pays, mais elle n’en délivre elle-même qu’un nombre limité en Russie. Depuis novembre 2025, l’UE accorde surtout des visas à entrée unique aux ressortissants russes. Il n’y a pas de vol direct : le plus simple est de passer par Istanbul ou Belgrade vers Vienne ou Budapest ; les cartes bancaires russes ne fonctionnent pas.',
        UA: 'Les citoyens ukrainiens munis d’un passeport biométrique n’ont pas besoin de visa (90/180). Longues files à Vyšné Nemecké–Oujhorod ; la protection temporaire de l’UE court jusqu’au 4 mars 2027.',
        IN: 'Les citoyens indiens ont besoin d’un visa Schengen ; après deux voyages sans incident, ils peuvent obtenir un visa à entrées multiples de deux ans, puis de cinq ans.',
      },
    },
    it: {
      summary:
        'Ai cittadini UE basta la carta d’identità. I cittadini di Stati Uniti, Regno Unito, Canada, Australia, Giappone, Corea, Brasile, Messico, Emirati, Israele, Ucraina e Georgia entrano senza visto fino a 90 giorni ogni 180 in tutta l’area Schengen. Tutti gli altri, compresi i cittadini di Russia, India, Cina, Turchia e Kazakistan, hanno bisogno del visto Schengen, rilasciato da qualsiasi paese dell’area.',
      apply:
        'Se la Slovacchia è la meta principale, fai domanda a un consolato o centro visti slovacco: 90 €, 45 € per i bambini dai 6 ai 12 anni. Puoi presentarla fino a sei mesi prima e almeno 15 giorni prima; la decisione arriva di solito in circa 15 giorni. Servono un’assicurazione con almeno 30.000 € di copertura, prenotazioni, biglietto di ritorno ed estratti conto. Molti viaggiatori atterrano a Vienna ed entrano in Slovacchia con il visto del paese in cui trascorrono più giorni.',
      visaRun:
        'Il visa run non funziona: la regola 90/180 conta i giorni in tutta l’area Schengen, e un salto a Užhorod o Belgrado mette solo in pausa il contatore. I giorni fuori escono poco a poco dalla finestra di 180 giorni, ma uscire non azzera mai il tuo credito.',
      hacks: [
        'L’aeroporto di Vienna è a un’ora da Bratislava, con bus Slovak Lines e FlixBus ogni 30–60 minuti e di solito senza controllo passaporti: spesso costa meno che volare direttamente a Bratislava.',
        'I giorni nel Regno Unito, in Irlanda, a Cipro e nei Balcani non contano per i 90/180 di Schengen: puoi dividere un viaggio lungo senza violare le regole.',
        'Con l’EES (pienamente attivo da aprile 2026) niente più timbri: i giorni si contano tramite impronte e foto. Controlla il saldo con il calcolatore ufficiale UE dei soggiorni brevi.',
        'I cittadini indiani beneficiano della regola «a cascata»: dopo due visti usati correttamente in tre anni ottengono un visto per ingressi multipli di due anni, poi di cinque.',
      ],
      pitfalls: [
        'Se alloggi da amici e non in hotel, devi comunicare il tuo indirizzo alla polizia degli stranieri entro tre giorni lavorativi; gli hotel lo fanno per te.',
        'Un visto a ingresso singolo si esaurisce appena esci da Schengen: passare in Ucraina a Vyšné Nemecké ti toglie il diritto di rientrare.',
        'ETIAS non è ancora attivo (non prima di fine 2026, più probabilmente nel 2027): non pagare i siti che lo «rilasciano» ora.',
      ],
      passports: {
        RU: 'La Slovacchia non vieta l’ingresso ai russi con visto Schengen di qualsiasi paese, ma in Russia ne rilascia pochi di propri. Da novembre 2025 l’UE concede ai cittadini russi soprattutto visti a ingresso singolo. Non ci sono voli diretti: la via più comoda è Vienna o Budapest via Istanbul o Belgrado; le carte russe non funzionano.',
        UA: 'I cittadini ucraini con passaporto biometrico non hanno bisogno del visto (90/180). A Vyšné Nemecké–Užhorod le code sono lunghe; la protezione temporanea UE vale fino al 4 marzo 2027.',
        IN: 'I cittadini indiani hanno bisogno del visto Schengen; dopo due viaggi senza problemi possono ottenere un visto per ingressi multipli di due anni, poi di cinque.',
      },
    },
  },
};

export default guide;
