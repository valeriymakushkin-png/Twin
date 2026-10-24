import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'GR',
  checked: '2026-10',
  fees: { visa: { kind: 'fixed', amount: 90, currency: 'EUR' } },
  stay: { visa: 90 },
  links: { immigration: 'https://www.mfa.gr' },
  docs: ['insurance', 'returnTicket', 'booking', 'finance'],
  passportMonths: 3,
  rule: { days: 90, window: 180 },
  visaRun: 'no',
  nomad: { name: 'Digital Nomad Visa', months: 12, income: { kind: 'from', amount: 3500, currency: 'EUR' } },
  hackScope: [['regime:free', 'regime:required'], ['regime:free'], ['regime:free', 'regime:required'], ['IN']],
  pitfallScope: [['regime:required'], ['regime:free'], ['regime:free', 'regime:required']],
  text: {
    ru: {
      summary:
        'Гражданам ЕС достаточно ID-карты. Граждане США, Великобритании, Канады, Австралии, Японии, Кореи, Бразилии, Мексики, ОАЭ, Израиля, Украины и Грузии въезжают без визы до 90 дней в любые 180 по всему Шенгену. Остальным, включая граждан России, Индии, Китая, Турции и Казахстана, нужна шенгенская виза; у граждан Турции есть упрощённая виза на острова.',
      apply:
        'Если Греция — основная страна поездки, подавайтесь в греческое консульство или визовый центр: сбор 90 €, для детей 6–12 лет — 45 €. Подать можно за полгода, но не позже чем за 15 дней; весной и в начале лета записи разбирают быстро, начинайте за 2–3 месяца. Нужны страховка с покрытием от 30 000 €, брони, обратный билет и выписка со счёта.',
      visaRun:
        'Визаран не работает: правило 90/180 считает дни во всём Шенгене, а паром на турецкое побережье или поездка в Албанию лишь ставит счётчик на паузу. Дни в Турции и Албании в шенгенский лимит не входят, поэтому их удобно чередовать с Грецией.',
      nomad:
        'Греческая виза цифрового кочевника выдаётся на 12 месяцев, после чего можно получить вид на жительство ещё на два года. Нужен доход от 3500 € в месяц после налогов от зарубежного работодателя или клиентов (больше — с семьёй), страховка и жильё. С февраля 2026 года подавать можно только через консульство до въезда, не из Греции.',
      hacks: [
        'Время в Турции, Албании и Северной Македонии не входит в шенгенские 90/180: лето можно разбить на греческие острова и турецкое побережье — у Турции свой отдельный лимит.',
        'Паромы Кос — Бодрум, Родос — Мармарис, Самос — Кушадасы и Хиос — Чешме идут 20–90 минут: удобно для безвизовых путешественников, которым нужно ненадолго выехать из Шенгена.',
        'С запуском EES (полностью с апреля 2026 года) штампов нет: дни считаются автоматически. Перед поездкой проверьте остаток в официальном калькуляторе ЕС.',
        'Индийцам выгодно «каскадное» правило: после двух использованных по правилам виз за три года дают многократную визу на два года, затем на пять.',
      ],
      pitfalls: [
        'Однократная виза сгорает при выезде из Шенгена: экскурсия с Родоса в Мармарис или с Коса в Бодрум оставит вас без права вернуться в Грецию.',
        'ETIAS ещё не работает (запуск не раньше конца 2026, вероятнее 2027) — не платите сайтам, которые «оформляют» его сейчас.',
        'Паспорт должен быть выдан не более 10 лет назад и действовать ещё 3 месяца после выезда из Шенгена.',
      ],
      passports: {
        RU: 'Греция остаётся одной из главных стран, выдающих туристические шенгенские визы россиянам, через визовые центры в нескольких городах России. С ноября 2025 года по правилам ЕС это в основном однократные визы, поэтому не планируйте выездов в Турцию посреди поездки. Прямых рейсов нет: летают через Стамбул, Белград или Ереван; российские карты не работают.',
        TR: 'Гражданам Турции нужна шенгенская виза, но на 12 островов Эгейского моря (Лесбос, Хиос, Самос, Кос, Родос, Лимнос, Калимнос, Лерос, Патмос, Сими, Кастелоризо, Самотраки) действует экспресс-виза на месте — до 7 дней при прибытии паромом, без права ехать на материк. Программу продлевают ежегодно; на сезон 2026–2027 она действует, но проверьте условия перед поездкой.',
        UA: 'Гражданам Украины с биометрическим паспортом виза не нужна (90/180); временная защита в ЕС продлена до 4 марта 2027 года.',
        IN: 'Гражданам Индии нужна шенгенская виза; после двух поездок без нарушений положена многократная виза на два, затем на пять лет.',
      },
    },
    en: {
      summary:
        'EU citizens just need an ID card. Citizens of the US, UK, Canada, Australia, Japan, Korea, Brazil, Mexico, the UAE, Israel, Ukraine and Georgia enter visa-free for up to 90 days in any 180 across the Schengen area. Everyone else, including citizens of Russia, India, China, Turkey and Kazakhstan, needs a Schengen visa; Turkish citizens also have a simplified island visa.',
      apply:
        'If Greece is your main destination, apply at a Greek consulate or visa centre: the fee is €90, or €45 for children aged 6–12. Apply up to six months ahead and at least 15 days before the trip; appointments go fast in spring and early summer, so start two to three months early. You need insurance with at least €30,000 cover, bookings, a return ticket and bank statements.',
      visaRun:
        'Visa runs do not work: the 90/180 rule counts days across the whole Schengen area, and a ferry to the Turkish coast or a trip to Albania only pauses the clock. Days in Turkey and Albania do not count towards the Schengen limit, so you can alternate them with Greece.',
      nomad:
        'Greece’s Digital Nomad Visa is issued for 12 months, after which you can get a two-year residence permit. You need at least €3,500 a month after tax from a foreign employer or clients (more with family), insurance and accommodation. Since February 2026, applications go only through a consulate before arrival, not from inside Greece.',
      hacks: [
        'Time in Turkey, Albania and North Macedonia does not count towards the Schengen 90/180: split a summer between the Greek islands and the Turkish coast, which has its own separate limit.',
        'Ferries such as Kos–Bodrum, Rhodes–Marmaris, Samos–Kuşadası and Chios–Çeşme take 20–90 minutes — handy for visa-free travellers who need to leave Schengen for a while.',
        'With the EES (fully live since April 2026) there are no stamps and days are counted automatically. Check your balance with the EU’s official calculator before you travel.',
        'Indian citizens benefit from the “cascade” rule: after two visas used correctly within three years, you get a two-year multiple-entry visa, then a five-year one.',
      ],
      pitfalls: [
        'A single-entry visa is spent once you leave Schengen: a day trip from Rhodes to Marmaris or from Kos to Bodrum leaves you with no right to return to Greece.',
        'ETIAS is not running yet (late 2026 at the earliest, more likely 2027) — do not pay sites that “process” it now.',
        'Your passport must have been issued within the last 10 years and be valid for 3 months after you leave the Schengen area.',
      ],
      passports: {
        RU: 'Greece remains one of the main issuers of tourist Schengen visas to Russians, through visa centres in several Russian cities. Under EU rules since November 2025 these are mostly single-entry, so do not plan side trips to Turkey mid-holiday. There are no direct flights: people fly via Istanbul, Belgrade or Yerevan, and Russian bank cards do not work.',
        TR: 'Turkish citizens need a Schengen visa, but 12 Aegean islands (Lesvos, Chios, Samos, Kos, Rhodes, Limnos, Kalymnos, Leros, Patmos, Symi, Kastellorizo, Samothrace) offer an express visa at the port — up to 7 days when arriving by ferry, with no onward travel to the mainland. The scheme is renewed yearly and runs for the 2026–27 season, but check the terms before you go.',
        UA: 'Ukrainian citizens with a biometric passport need no visa (90/180); EU temporary protection has been extended to 4 March 2027.',
        IN: 'Indian citizens need a Schengen visa; after two trouble-free trips you qualify for a two-year, then a five-year multiple-entry visa.',
      },
    },
    es: {
      summary:
        'A los ciudadanos de la UE les basta el DNI. Los de EE. UU., Reino Unido, Canadá, Australia, Japón, Corea, Brasil, México, Emiratos, Israel, Ucrania y Georgia entran sin visado hasta 90 días en cualquier periodo de 180 en todo Schengen. El resto, incluidos los ciudadanos de Rusia, India, China, Turquía y Kazajistán, necesita visado Schengen; los turcos cuentan además con un visado simplificado para las islas.',
      apply:
        'Si Grecia es tu destino principal, solicita el visado en un consulado o centro de visados griego: cuesta 90 € (45 € para niños de 6 a 12 años). Puedes presentarlo hasta seis meses antes y al menos 15 días antes; en primavera y a principios de verano las citas vuelan, así que empieza con dos o tres meses de margen. Necesitas un seguro con al menos 30 000 € de cobertura, reservas, billete de vuelta y extractos bancarios.',
      visaRun:
        'Los visa runs no funcionan: la regla 90/180 cuenta los días en todo Schengen, y un ferri a la costa turca o un viaje a Albania solo detiene el contador. Los días en Turquía y Albania no cuentan para el límite Schengen, así que puedes alternarlos con Grecia.',
      nomad:
        'El visado de nómada digital de Grecia se concede por 12 meses, tras los cuales puedes obtener un permiso de residencia de dos años. Necesitas al menos 3500 € al mes netos de un empleador o clientes extranjeros (más si viaja tu familia), seguro y alojamiento. Desde febrero de 2026 solo se solicita en un consulado antes de llegar, no desde Grecia.',
      hacks: [
        'El tiempo en Turquía, Albania y Macedonia del Norte no cuenta para los 90/180 de Schengen: reparte un verano entre las islas griegas y la costa turca, que tiene su propio límite.',
        'Ferris como Kos–Bodrum, Rodas–Marmaris, Samos–Kuşadası y Quíos–Çeşme tardan de 20 a 90 minutos: muy prácticos para viajeros sin visado que necesitan salir un tiempo de Schengen.',
        'Con el EES (plenamente operativo desde abril de 2026) no hay sellos y los días se cuentan solos. Consulta tu saldo en la calculadora oficial de la UE antes de viajar.',
        'Los ciudadanos indios se benefician de la regla «en cascada»: tras dos visados bien usados en tres años, reciben uno de entradas múltiples de dos años y después de cinco.',
      ],
      pitfalls: [
        'Un visado de una sola entrada se agota al salir de Schengen: una excursión de Rodas a Marmaris o de Kos a Bodrum te deja sin derecho a volver a Grecia.',
        'ETIAS aún no funciona (como pronto a finales de 2026, probablemente en 2027): no pagues a webs que lo «tramitan» ahora.',
        'El pasaporte debe haberse expedido hace menos de 10 años y ser válido 3 meses después de salir de Schengen.',
      ],
      passports: {
        RU: 'Grecia sigue siendo uno de los principales emisores de visados Schengen turísticos para rusos, a través de centros de visados en varias ciudades de Rusia. Por las normas de la UE desde noviembre de 2025 suelen ser de una sola entrada, así que no planees escapadas a Turquía en mitad del viaje. No hay vuelos directos: se vuela vía Estambul, Belgrado o Ereván, y las tarjetas rusas no funcionan.',
        TR: 'Los ciudadanos turcos necesitan visado Schengen, pero 12 islas del Egeo (Lesbos, Quíos, Samos, Kos, Rodas, Lemnos, Kálimnos, Leros, Patmos, Symi, Kastelórizo y Samotracia) ofrecen un visado exprés en el puerto: hasta 7 días llegando en ferri y sin poder seguir al continente. El programa se renueva cada año y está vigente para la temporada 2026–27, pero confirma las condiciones antes de ir.',
        UA: 'Los ciudadanos ucranianos con pasaporte biométrico no necesitan visado (90/180); la protección temporal de la UE se ha prorrogado hasta el 4 de marzo de 2027.',
        IN: 'Los ciudadanos indios necesitan visado Schengen; tras dos viajes sin incidencias, optan a uno de entradas múltiples de dos años y luego de cinco.',
      },
    },
    de: {
      summary:
        'EU-Bürgern genügt der Personalausweis. Staatsangehörige der USA, Großbritanniens, Kanadas, Australiens, Japans, Koreas, Brasiliens, Mexikos, der VAE, Israels, der Ukraine und Georgiens reisen visumfrei bis zu 90 Tage innerhalb von 180 Tagen im ganzen Schengen-Raum. Alle anderen, auch Bürger Russlands, Indiens, Chinas, der Türkei und Kasachstans, brauchen ein Schengen-Visum; für Türken gibt es zusätzlich ein vereinfachtes Inselvisum.',
      apply:
        'Ist Griechenland dein Hauptreiseziel, beantragst du das Visum bei einem griechischen Konsulat oder Visazentrum: 90 €, für Kinder von 6 bis 12 Jahren 45 €. Der Antrag geht frühestens sechs Monate und spätestens 15 Tage vor der Reise; im Frühjahr und Frühsommer sind Termine schnell weg, fang also zwei bis drei Monate vorher an. Nötig sind eine Versicherung mit mindestens 30.000 € Deckung, Buchungen, ein Rückflugticket und Kontoauszüge.',
      visaRun:
        'Visa-Runs funktionieren nicht: Die 90/180-Regel zählt die Tage im gesamten Schengen-Raum, und eine Fähre an die türkische Küste oder ein Abstecher nach Albanien hält die Uhr nur an. Tage in der Türkei und in Albanien zählen nicht zum Schengen-Limit – du kannst sie also mit Griechenland abwechseln.',
      nomad:
        'Griechenlands Digital Nomad Visa gilt 12 Monate, danach ist eine zweijährige Aufenthaltserlaubnis möglich. Nötig sind mindestens 3.500 € netto im Monat von einem ausländischen Arbeitgeber oder Kunden (mit Familie mehr), eine Versicherung und eine Unterkunft. Seit Februar 2026 läuft der Antrag nur noch über ein Konsulat vor der Einreise, nicht mehr aus Griechenland heraus.',
      hacks: [
        'Zeit in der Türkei, in Albanien und Nordmazedonien zählt nicht zu den Schengen-90/180: Teile einen Sommer zwischen griechischen Inseln und türkischer Küste auf – dort gilt ein eigenes Limit.',
        'Fähren wie Kos–Bodrum, Rhodos–Marmaris, Samos–Kuşadası und Chios–Çeşme brauchen 20–90 Minuten – praktisch für visumfreie Reisende, die den Schengen-Raum eine Weile verlassen müssen.',
        'Mit dem EES (seit April 2026 voll in Betrieb) gibt es keine Stempel, die Tage werden automatisch gezählt. Prüfe vor der Reise dein Restguthaben mit dem offiziellen EU-Rechner.',
        'Inder profitieren von der „Kaskadenregel“: Nach zwei korrekt genutzten Visa innerhalb von drei Jahren gibt es ein Mehrfachvisum für zwei, danach für fünf Jahre.',
      ],
      pitfalls: [
        'Ein Visum für die einmalige Einreise ist mit dem Verlassen des Schengen-Raums verbraucht: Ein Tagesausflug von Rhodos nach Marmaris oder von Kos nach Bodrum kostet dich die Rückkehr nach Griechenland.',
        'ETIAS läuft noch nicht (frühestens Ende 2026, eher 2027) – zahl nichts an Seiten, die es jetzt „beantragen“.',
        'Der Pass muss in den letzten 10 Jahren ausgestellt sein und noch 3 Monate nach der Ausreise aus dem Schengen-Raum gelten.',
      ],
      passports: {
        RU: 'Griechenland bleibt einer der wichtigsten Aussteller touristischer Schengen-Visa für Russen, über Visazentren in mehreren russischen Städten. Nach EU-Regeln seit November 2025 sind das meist Visa für die einmalige Einreise – plane also keine Abstecher in die Türkei mitten im Urlaub. Direktflüge gibt es nicht: Man fliegt über Istanbul, Belgrad oder Jerewan; russische Karten funktionieren nicht.',
        TR: 'Türkische Staatsangehörige brauchen ein Schengen-Visum, doch 12 Ägäis-Inseln (Lesbos, Chios, Samos, Kos, Rhodos, Limnos, Kalymnos, Leros, Patmos, Symi, Kastellorizo, Samothraki) bieten ein Expressvisum im Hafen – bis zu 7 Tage bei Ankunft per Fähre, ohne Weiterreise aufs Festland. Das Programm wird jährlich verlängert und gilt für die Saison 2026/27; prüfe die Bedingungen trotzdem vor der Reise.',
        UA: 'Ukrainer mit biometrischem Pass brauchen kein Visum (90/180); der vorübergehende Schutz in der EU gilt bis 4. März 2027.',
        IN: 'Inder brauchen ein Schengen-Visum; nach zwei problemlosen Reisen gibt es ein Mehrfachvisum für zwei, dann für fünf Jahre.',
      },
    },
    fr: {
      summary:
        'Les citoyens de l’UE n’ont besoin que de leur carte d’identité. Les ressortissants des États-Unis, du Royaume-Uni, du Canada, d’Australie, du Japon, de Corée, du Brésil, du Mexique, des Émirats, d’Israël, d’Ukraine et de Géorgie entrent sans visa jusqu’à 90 jours sur 180 dans tout l’espace Schengen. Les autres, dont les citoyens russes, indiens, chinois, turcs et kazakhs, ont besoin d’un visa Schengen ; les Turcs disposent en plus d’un visa simplifié pour les îles.',
      apply:
        'Si la Grèce est votre destination principale, déposez la demande auprès d’un consulat ou centre de visas grec : 90 €, ou 45 € pour les enfants de 6 à 12 ans. La demande se fait jusqu’à six mois avant et au plus tard 15 jours avant le départ ; au printemps et en début d’été, les rendez-vous partent vite, alors commencez deux à trois mois à l’avance. Il faut une assurance couvrant au moins 30 000 €, des réservations, un billet retour et des relevés bancaires.',
      visaRun:
        'Le visa run ne fonctionne pas : la règle des 90/180 compte les jours dans tout l’espace Schengen, et un ferry vers la côte turque ou un saut en Albanie ne fait que suspendre le compteur. Les jours en Turquie et en Albanie ne comptent pas dans la limite Schengen : vous pouvez donc les alterner avec la Grèce.',
      nomad:
        'Le visa nomade numérique grec est délivré pour 12 mois, après quoi un titre de séjour de deux ans est possible. Il faut au moins 3 500 € nets par mois provenant d’un employeur ou de clients étrangers (davantage avec la famille), une assurance et un logement. Depuis février 2026, la demande se fait uniquement auprès d’un consulat avant l’arrivée, plus depuis la Grèce.',
      hacks: [
        'Le temps passé en Turquie, en Albanie et en Macédoine du Nord ne compte pas dans les 90/180 de Schengen : partagez un été entre les îles grecques et la côte turque, qui a sa propre limite.',
        'Des ferries comme Kos–Bodrum, Rhodes–Marmaris, Samos–Kuşadası et Chios–Çeşme mettent 20 à 90 minutes : pratique pour les voyageurs exemptés de visa qui doivent sortir de Schengen un moment.',
        'Avec l’EES (pleinement opérationnel depuis avril 2026), plus de tampons et les jours sont décomptés automatiquement. Vérifiez votre solde avec le calculateur officiel de l’UE avant le départ.',
        'Les citoyens indiens profitent de la règle « en cascade » : après deux visas utilisés correctement en trois ans, ils obtiennent un visa à entrées multiples de deux ans, puis de cinq ans.',
      ],
      pitfalls: [
        'Un visa à entrée unique est consommé dès la sortie de Schengen : une excursion de Rhodes à Marmaris ou de Kos à Bodrum vous empêche de revenir en Grèce.',
        'ETIAS n’est pas encore en service (au plus tôt fin 2026, plus probablement 2027) : ne payez pas les sites qui le « délivrent » aujourd’hui.',
        'Le passeport doit avoir moins de 10 ans et rester valable 3 mois après la sortie de l’espace Schengen.',
      ],
      passports: {
        RU: 'La Grèce reste l’un des principaux pays à délivrer des visas Schengen touristiques aux Russes, via des centres de visas dans plusieurs villes russes. Selon les règles de l’UE depuis novembre 2025, ce sont surtout des visas à entrée unique : ne prévoyez donc pas d’escapade en Turquie au milieu du séjour. Pas de vol direct : on passe par Istanbul, Belgrade ou Erevan ; les cartes bancaires russes ne fonctionnent pas.',
        TR: 'Les citoyens turcs ont besoin d’un visa Schengen, mais 12 îles de l’Égée (Lesbos, Chios, Samos, Kos, Rhodes, Lemnos, Kalymnos, Léros, Patmos, Symi, Kastellorizo, Samothrace) proposent un visa express au port : jusqu’à 7 jours pour une arrivée en ferry, sans poursuite vers le continent. Le dispositif est reconduit chaque année et s’applique à la saison 2026-2027, mais vérifiez les conditions avant de partir.',
        UA: 'Les citoyens ukrainiens munis d’un passeport biométrique n’ont pas besoin de visa (90/180) ; la protection temporaire de l’UE court jusqu’au 4 mars 2027.',
        IN: 'Les citoyens indiens ont besoin d’un visa Schengen ; après deux voyages sans incident, ils peuvent obtenir un visa à entrées multiples de deux ans, puis de cinq ans.',
      },
    },
    it: {
      summary:
        'Ai cittadini UE basta la carta d’identità. I cittadini di Stati Uniti, Regno Unito, Canada, Australia, Giappone, Corea, Brasile, Messico, Emirati, Israele, Ucraina e Georgia entrano senza visto fino a 90 giorni ogni 180 in tutta l’area Schengen. Tutti gli altri, compresi i cittadini di Russia, India, Cina, Turchia e Kazakistan, hanno bisogno del visto Schengen; i turchi hanno anche un visto semplificato per le isole.',
      apply:
        'Se la Grecia è la meta principale, fai domanda a un consolato o centro visti greco: 90 €, 45 € per i bambini dai 6 ai 12 anni. Puoi presentarla fino a sei mesi prima e almeno 15 giorni prima; in primavera e a inizio estate gli appuntamenti finiscono in fretta, quindi muoviti con due o tre mesi di anticipo. Servono un’assicurazione con almeno 30.000 € di copertura, prenotazioni, biglietto di ritorno ed estratti conto.',
      visaRun:
        'Il visa run non funziona: la regola 90/180 conta i giorni in tutta l’area Schengen, e un traghetto per la costa turca o una gita in Albania mette solo in pausa il contatore. I giorni in Turchia e in Albania non contano per il limite Schengen, quindi puoi alternarli con la Grecia.',
      nomad:
        'Il visto per nomadi digitali della Grecia dura 12 mesi, dopo i quali puoi ottenere un permesso di soggiorno di due anni. Servono almeno 3.500 € netti al mese da un datore di lavoro o clienti esteri (di più con la famiglia), un’assicurazione e un alloggio. Da febbraio 2026 la domanda si presenta solo in consolato prima dell’arrivo, non più dalla Grecia.',
      hacks: [
        'Il tempo in Turchia, Albania e Macedonia del Nord non conta per i 90/180 di Schengen: dividi l’estate tra isole greche e costa turca, che ha un limite tutto suo.',
        'Traghetti come Kos–Bodrum, Rodi–Marmaris, Samo–Kuşadası e Chio–Çeşme impiegano 20–90 minuti: comodi per chi viaggia senza visto e deve uscire da Schengen per un po’.',
        'Con l’EES (pienamente attivo da aprile 2026) niente timbri e i giorni si contano in automatico. Prima di partire controlla il saldo con il calcolatore ufficiale UE.',
        'I cittadini indiani beneficiano della regola «a cascata»: dopo due visti usati correttamente in tre anni ottengono un visto per ingressi multipli di due anni, poi di cinque.',
      ],
      pitfalls: [
        'Un visto a ingresso singolo si esaurisce appena esci da Schengen: una gita da Rodi a Marmaris o da Kos a Bodrum ti impedisce di rientrare in Grecia.',
        'ETIAS non è ancora attivo (non prima di fine 2026, più probabilmente nel 2027): non pagare i siti che lo «rilasciano» ora.',
        'Il passaporto deve essere stato rilasciato da meno di 10 anni e valere ancora 3 mesi dopo l’uscita da Schengen.',
      ],
      passports: {
        RU: 'La Grecia resta uno dei principali paesi che rilasciano visti Schengen turistici ai russi, tramite centri visti in varie città russe. Per le regole UE in vigore da novembre 2025 sono per lo più a ingresso singolo, quindi non programmare gite in Turchia a metà vacanza. Non ci sono voli diretti: si vola via Istanbul, Belgrado o Erevan, e le carte russe non funzionano.',
        TR: 'I cittadini turchi hanno bisogno del visto Schengen, ma 12 isole dell’Egeo (Lesbo, Chio, Samo, Kos, Rodi, Lemno, Calimno, Lero, Patmo, Simi, Castelrosso, Samotracia) offrono un visto express in porto: fino a 7 giorni arrivando in traghetto, senza poter proseguire verso la terraferma. Il programma viene rinnovato ogni anno ed è valido per la stagione 2026–27, ma verifica le condizioni prima di partire.',
        UA: 'I cittadini ucraini con passaporto biometrico non hanno bisogno del visto (90/180); la protezione temporanea UE vale fino al 4 marzo 2027.',
        IN: 'I cittadini indiani hanno bisogno del visto Schengen; dopo due viaggi senza problemi possono ottenere un visto per ingressi multipli di due anni, poi di cinque.',
      },
    },
  },
};

export default guide;
