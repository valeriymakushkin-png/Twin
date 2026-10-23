import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'SI',
  checked: '2026-10',
  fees: { visa: { kind: 'fixed', amount: 90, currency: 'EUR' } },
  stay: { visa: 90 },
  links: { immigration: 'https://www.gov.si/en/' },
  docs: ['insurance', 'returnTicket', 'booking', 'finance'],
  passportMonths: 3,
  rule: { days: 90, window: 180 },
  visaRun: 'no',
  nomad: { name: 'Digital nomad residence permit', months: 12 },
  text: {
    ru: {
      summary:
        'Гражданам ЕС достаточно ID-карты. Граждане США, Великобритании, Канады, Австралии, Японии, Кореи, Бразилии, Мексики, ОАЭ, Израиля, Украины и Грузии въезжают без визы до 90 дней в любые 180 по всему Шенгену. Остальным, включая граждан России, Индии, Китая, Турции и Казахстана, нужна шенгенская виза — подойдёт виза любой страны Шенгена.',
      apply:
        'Если Словения — основная страна поездки, подавайтесь в словенское консульство или визовый центр: сбор 90 €, для детей 6–12 лет — 45 €. Подать можно за полгода, но не позже чем за 15 дней; решение обычно около 15 дней. Нужны страховка с покрытием от 30 000 €, брони, обратный билет и выписка со счёта. Часто удобнее, когда Словения — часть маршрута по Италии, Австрии или Хорватии: тогда визу дают по стране, где вы проведёте больше всего дней.',
      visaRun:
        'Визаран не работает: правило 90/180 считает дни во всём Шенгене, а Хорватия и Италия — тоже Шенген. Выезд в Боснию или Сербию лишь ставит счётчик на паузу, но не обнуляет срок.',
      nomad:
        'Словения выдаёт цифровым кочевникам вид на жительство на срок до года без продления; новый можно получить только через полгода после окончания предыдущего. Доход должен идти из-за рубежа и быть не ниже двух средних чистых зарплат в Словении — около 3300 € в месяц в 2026 году (сумму пересчитывают), нужны выписки за полгода.',
      hacks: [
        'В Словению часто дешевле лететь в Триест, Венецию, Загреб или Грац: все они в Шенгене, и от Триеста до Любляны около 1,5 часа на автобусе.',
        'Дни в Великобритании, Ирландии, на Кипре и на Балканах вне ЕС не входят в шенгенские 90/180 — длинную поездку можно разбить.',
        'С запуском EES (полностью с апреля 2026 года) штампов нет: дни считаются по отпечаткам и фото. Перед поездкой проверьте остаток в официальном калькуляторе ЕС.',
        'Индийцам выгодно «каскадное» правило: после двух использованных по правилам виз за три года дают многократную визу на два года, затем на пять.',
      ],
      pitfalls: [
        'Словения уже несколько лет держит временные проверки на границах с Хорватией и Венгрией. Даже внутри Шенгена возите с собой паспорт, а не только копию.',
        'Однократная виза сгорает после выезда из Шенгена: поездка из Словении в Боснию или Сербию оставит вас без права вернуться.',
        'ETIAS ещё не работает (запуск не раньше конца 2026, вероятнее 2027) — не платите сайтам, которые «оформляют» его сейчас.',
      ],
      passports: {
        RU: 'Словения не запрещает въезд россиянам с шенгенской визой любой страны, но сама почти не выдаёт туристические визы в России. С ноября 2025 года ЕС выдаёт россиянам в основном однократные визы. Прямых рейсов нет: летают в Загреб, Триест или Венецию через Стамбул или Белград; российские карты не работают.',
        UA: 'Гражданам Украины с биометрическим паспортом виза не нужна (90/180); временная защита в ЕС продлена до 4 марта 2027 года.',
        IN: 'Гражданам Индии нужна шенгенская виза; после двух поездок без нарушений положена многократная виза на два, затем на пять лет.',
      },
    },
    en: {
      summary:
        'EU citizens just need an ID card. Citizens of the US, UK, Canada, Australia, Japan, Korea, Brazil, Mexico, the UAE, Israel, Ukraine and Georgia enter visa-free for up to 90 days in any 180 across the Schengen area. Everyone else, including citizens of Russia, India, China, Turkey and Kazakhstan, needs a Schengen visa — one from any Schengen country will do.',
      apply:
        'If Slovenia is your main destination, apply at a Slovenian consulate or visa centre: the fee is €90, or €45 for children aged 6–12. Apply up to six months ahead and at least 15 days before the trip; decisions usually take about 15 days. You need insurance with at least €30,000 cover, bookings, a return ticket and bank statements. Slovenia is often part of a trip through Italy, Austria or Croatia — then you apply to the country where you will spend the most days.',
      visaRun:
        'Visa runs do not work: the 90/180 rule counts days across the whole Schengen area, and Croatia and Italy are Schengen too. A trip to Bosnia or Serbia only pauses the clock; it never resets it.',
      nomad:
        'Slovenia grants digital nomads a residence permit of up to one year that cannot be extended; a new one is possible only six months after the previous one ends. Income must come from abroad and be at least twice the average Slovenian net wage — about €3,300 a month in 2026 (the figure is recalculated) — shown with six months of statements.',
      hacks: [
        'Flying into Trieste, Venice, Zagreb or Graz is often cheaper: all are in Schengen, and Trieste to Ljubljana is about 1.5 hours by bus.',
        'Days in the UK, Ireland, Cyprus and the non-EU Balkans do not count towards the Schengen 90/180, so a long trip can be split.',
        'With the EES (fully live since April 2026) there are no stamps: days are counted from your fingerprints and photo. Check your balance with the EU’s official calculator before you travel.',
        'Indian citizens benefit from the “cascade” rule: after two visas used correctly within three years, you get a two-year multiple-entry visa, then a five-year one.',
      ],
      pitfalls: [
        'Slovenia has kept temporary checks at its borders with Croatia and Hungary for several years. Even inside Schengen, carry your actual passport, not just a copy.',
        'A single-entry visa is spent once you leave Schengen: a trip from Slovenia into Bosnia or Serbia leaves you with no right to come back.',
        'ETIAS is not running yet (late 2026 at the earliest, more likely 2027) — do not pay sites that “process” it now.',
      ],
      passports: {
        RU: 'Slovenia does not ban Russians holding a Schengen visa from any country, but it issues very few tourist visas in Russia itself. Since November 2025 the EU has mostly been issuing single-entry visas to Russians. There are no direct flights: people fly to Zagreb, Trieste or Venice via Istanbul or Belgrade, and Russian bank cards do not work.',
        UA: 'Ukrainian citizens with a biometric passport need no visa (90/180); EU temporary protection has been extended to 4 March 2027.',
        IN: 'Indian citizens need a Schengen visa; after two trouble-free trips you qualify for a two-year, then a five-year multiple-entry visa.',
      },
    },
    es: {
      summary:
        'A los ciudadanos de la UE les basta el DNI. Los de EE. UU., Reino Unido, Canadá, Australia, Japón, Corea, Brasil, México, Emiratos, Israel, Ucrania y Georgia entran sin visado hasta 90 días en cualquier periodo de 180 en todo Schengen. El resto, incluidos los ciudadanos de Rusia, India, China, Turquía y Kazajistán, necesita visado Schengen, y sirve el de cualquier país del espacio.',
      apply:
        'Si Eslovenia es tu destino principal, solicita el visado en un consulado o centro de visados esloveno: cuesta 90 € (45 € para niños de 6 a 12 años). Puedes presentarlo hasta seis meses antes y al menos 15 días antes; la resolución suele tardar unos 15 días. Necesitas un seguro con al menos 30 000 € de cobertura, reservas, billete de vuelta y extractos bancarios. Eslovenia suele formar parte de una ruta por Italia, Austria o Croacia: entonces se solicita al país donde pasarás más días.',
      visaRun:
        'Los visa runs no funcionan: la regla 90/180 cuenta los días en todo Schengen, y Croacia e Italia también son Schengen. Un viaje a Bosnia o Serbia solo detiene el contador; nunca lo reinicia.',
      nomad:
        'Eslovenia concede a los nómadas digitales un permiso de residencia de hasta un año, no prorrogable; uno nuevo solo es posible seis meses después de que venza el anterior. Los ingresos deben venir del extranjero y ser al menos el doble del salario neto medio esloveno —unos 3300 € al mes en 2026, cifra que se recalcula—, acreditados con seis meses de extractos.',
      hacks: [
        'Volar a Trieste, Venecia, Zagreb o Graz suele salir más barato: todos están en Schengen, y de Trieste a Liubliana hay 1,5 horas en autobús.',
        'Los días en Reino Unido, Irlanda, Chipre y los Balcanes fuera de la UE no cuentan para los 90/180 de Schengen, así que puedes dividir un viaje largo.',
        'Con el EES (plenamente operativo desde abril de 2026) no hay sellos: los días se cuentan por tus huellas y foto. Consulta tu saldo en la calculadora oficial de la UE antes de viajar.',
        'Los ciudadanos indios se benefician de la regla «en cascada»: tras dos visados bien usados en tres años, reciben uno de entradas múltiples de dos años y después de cinco.',
      ],
      pitfalls: [
        'Eslovenia mantiene desde hace años controles temporales en sus fronteras con Croacia y Hungría. Aunque estés dentro de Schengen, lleva el pasaporte original, no solo una copia.',
        'Un visado de una sola entrada se agota al salir de Schengen: un viaje desde Eslovenia a Bosnia o Serbia te deja sin derecho a volver.',
        'ETIAS aún no funciona (como pronto a finales de 2026, probablemente en 2027): no pagues a webs que lo «tramitan» ahora.',
      ],
      passports: {
        RU: 'Eslovenia no veta la entrada a rusos con visado Schengen de cualquier país, pero en Rusia apenas expide visados turísticos propios. Desde noviembre de 2025 la UE concede a los rusos sobre todo visados de una sola entrada. No hay vuelos directos: se vuela a Zagreb, Trieste o Venecia vía Estambul o Belgrado; las tarjetas rusas no funcionan.',
        UA: 'Los ciudadanos ucranianos con pasaporte biométrico no necesitan visado (90/180); la protección temporal de la UE se ha prorrogado hasta el 4 de marzo de 2027.',
        IN: 'Los ciudadanos indios necesitan visado Schengen; tras dos viajes sin incidencias, optan a uno de entradas múltiples de dos años y luego de cinco.',
      },
    },
    de: {
      summary:
        'EU-Bürgern genügt der Personalausweis. Staatsangehörige der USA, Großbritanniens, Kanadas, Australiens, Japans, Koreas, Brasiliens, Mexikos, der VAE, Israels, der Ukraine und Georgiens reisen visumfrei bis zu 90 Tage innerhalb von 180 Tagen im ganzen Schengen-Raum. Alle anderen, auch Bürger Russlands, Indiens, Chinas, der Türkei und Kasachstans, brauchen ein Schengen-Visum – das eines beliebigen Schengen-Staats genügt.',
      apply:
        'Ist Slowenien dein Hauptreiseziel, beantragst du das Visum bei einem slowenischen Konsulat oder Visazentrum: 90 €, für Kinder von 6 bis 12 Jahren 45 €. Der Antrag geht frühestens sechs Monate und spätestens 15 Tage vor der Reise; die Entscheidung dauert meist etwa 15 Tage. Nötig sind eine Versicherung mit mindestens 30.000 € Deckung, Buchungen, ein Rückflugticket und Kontoauszüge. Oft ist Slowenien Teil einer Reise durch Italien, Österreich oder Kroatien – dann beantragst du das Visum dort, wo du die meisten Tage verbringst.',
      visaRun:
        'Visa-Runs funktionieren nicht: Die 90/180-Regel zählt die Tage im gesamten Schengen-Raum, und auch Kroatien und Italien gehören dazu. Ein Abstecher nach Bosnien oder Serbien hält die Uhr nur an, setzt sie aber nie zurück.',
      nomad:
        'Slowenien erteilt digitalen Nomaden eine Aufenthaltserlaubnis für bis zu ein Jahr ohne Verlängerung; eine neue gibt es erst sechs Monate nach Ablauf der vorherigen. Das Einkommen muss aus dem Ausland stammen und mindestens das Doppelte des slowenischen Durchschnitts-Nettolohns betragen – 2026 rund 3.300 € im Monat, der Betrag wird neu berechnet –, belegt mit Kontoauszügen über sechs Monate.',
      hacks: [
        'Flüge nach Triest, Venedig, Zagreb oder Graz sind oft günstiger: Alle liegen im Schengen-Raum, und von Triest nach Ljubljana fährt der Bus etwa 1,5 Stunden.',
        'Tage in Großbritannien, Irland, Zypern und auf dem Balkan außerhalb der EU zählen nicht zu den Schengen-90/180 – so lässt sich eine lange Reise aufteilen.',
        'Mit dem EES (seit April 2026 voll in Betrieb) gibt es keine Stempel: Die Tage werden über Fingerabdrücke und Foto gezählt. Prüfe vor der Reise dein Restguthaben mit dem offiziellen EU-Rechner.',
        'Inder profitieren von der „Kaskadenregel“: Nach zwei korrekt genutzten Visa innerhalb von drei Jahren gibt es ein Mehrfachvisum für zwei, danach für fünf Jahre.',
      ],
      pitfalls: [
        'Slowenien kontrolliert seit Jahren vorübergehend an den Grenzen zu Kroatien und Ungarn. Auch innerhalb des Schengen-Raums brauchst du den echten Pass, nicht nur eine Kopie.',
        'Ein Visum für die einmalige Einreise ist mit dem Verlassen des Schengen-Raums verbraucht: Ein Abstecher von Slowenien nach Bosnien oder Serbien kostet dich das Rückkehrrecht.',
        'ETIAS läuft noch nicht (frühestens Ende 2026, eher 2027) – zahl nichts an Seiten, die es jetzt „beantragen“.',
      ],
      passports: {
        RU: 'Slowenien verweigert Russen mit einem Schengen-Visum eines beliebigen Landes nicht die Einreise, stellt in Russland selbst aber kaum Touristenvisa aus. Seit November 2025 erhalten Russen in der EU meist nur Visa für die einmalige Einreise. Direktflüge gibt es nicht: Man fliegt über Istanbul oder Belgrad nach Zagreb, Triest oder Venedig; russische Karten funktionieren nicht.',
        UA: 'Ukrainer mit biometrischem Pass brauchen kein Visum (90/180); der vorübergehende Schutz in der EU gilt bis 4. März 2027.',
        IN: 'Inder brauchen ein Schengen-Visum; nach zwei problemlosen Reisen gibt es ein Mehrfachvisum für zwei, dann für fünf Jahre.',
      },
    },
    fr: {
      summary:
        'Les citoyens de l’UE n’ont besoin que de leur carte d’identité. Les ressortissants des États-Unis, du Royaume-Uni, du Canada, d’Australie, du Japon, de Corée, du Brésil, du Mexique, des Émirats, d’Israël, d’Ukraine et de Géorgie entrent sans visa jusqu’à 90 jours sur 180 dans tout l’espace Schengen. Les autres, dont les citoyens russes, indiens, chinois, turcs et kazakhs, ont besoin d’un visa Schengen, délivré par n’importe quel État membre.',
      apply:
        'Si la Slovénie est votre destination principale, déposez la demande auprès d’un consulat ou centre de visas slovène : 90 €, ou 45 € pour les enfants de 6 à 12 ans. La demande se fait jusqu’à six mois avant et au plus tard 15 jours avant le départ ; la décision prend en général une quinzaine de jours. Il faut une assurance couvrant au moins 30 000 €, des réservations, un billet retour et des relevés bancaires. La Slovénie fait souvent partie d’un circuit en Italie, en Autriche ou en Croatie : on dépose alors la demande auprès du pays où l’on passe le plus de jours.',
      visaRun:
        'Le visa run ne fonctionne pas : la règle des 90/180 compte les jours dans tout l’espace Schengen, dont font aussi partie la Croatie et l’Italie. Un saut en Bosnie ou en Serbie ne fait que suspendre le compteur, sans jamais le remettre à zéro.',
      nomad:
        'La Slovénie accorde aux nomades numériques un titre de séjour d’un an maximum, non renouvelable ; un nouveau n’est possible que six mois après l’expiration du précédent. Les revenus doivent provenir de l’étranger et atteindre au moins deux fois le salaire net moyen slovène — environ 3 300 € par mois en 2026, montant recalculé régulièrement —, justifiés par six mois de relevés.',
      hacks: [
        'Atterrir à Trieste, Venise, Zagreb ou Graz revient souvent moins cher : tous sont dans l’espace Schengen, et Trieste–Ljubljana prend environ 1 h 30 en bus.',
        'Les jours passés au Royaume-Uni, en Irlande, à Chypre et dans les Balkans hors UE ne comptent pas dans les 90/180 de Schengen : un long voyage peut ainsi être découpé.',
        'Avec l’EES (pleinement opérationnel depuis avril 2026), plus de tampons : les jours sont décomptés grâce à vos empreintes et votre photo. Vérifiez votre solde avec le calculateur officiel de l’UE avant le départ.',
        'Les citoyens indiens profitent de la règle « en cascade » : après deux visas utilisés correctement en trois ans, ils obtiennent un visa à entrées multiples de deux ans, puis de cinq ans.',
      ],
      pitfalls: [
        'La Slovénie maintient depuis plusieurs années des contrôles temporaires à ses frontières avec la Croatie et la Hongrie. Même dans l’espace Schengen, ayez votre vrai passeport sur vous, pas seulement une copie.',
        'Un visa à entrée unique est consommé dès la sortie de Schengen : un saut de la Slovénie vers la Bosnie ou la Serbie vous prive du droit de revenir.',
        'ETIAS n’est pas encore en service (au plus tôt fin 2026, plus probablement 2027) : ne payez pas les sites qui le « délivrent » aujourd’hui.',
      ],
      passports: {
        RU: 'La Slovénie n’interdit pas l’entrée aux Russes munis d’un visa Schengen de n’importe quel pays, mais elle n’en délivre elle-même presque aucun en Russie. Depuis novembre 2025, l’UE accorde surtout des visas à entrée unique aux Russes. Pas de vol direct : on rejoint Zagreb, Trieste ou Venise via Istanbul ou Belgrade ; les cartes bancaires russes ne fonctionnent pas.',
        UA: 'Les citoyens ukrainiens munis d’un passeport biométrique n’ont pas besoin de visa (90/180) ; la protection temporaire de l’UE court jusqu’au 4 mars 2027.',
        IN: 'Les citoyens indiens ont besoin d’un visa Schengen ; après deux voyages sans incident, ils peuvent obtenir un visa à entrées multiples de deux ans, puis de cinq ans.',
      },
    },
    it: {
      summary:
        'Ai cittadini UE basta la carta d’identità. I cittadini di Stati Uniti, Regno Unito, Canada, Australia, Giappone, Corea, Brasile, Messico, Emirati, Israele, Ucraina e Georgia entrano senza visto fino a 90 giorni ogni 180 in tutta l’area Schengen. Tutti gli altri, compresi i cittadini di Russia, India, Cina, Turchia e Kazakistan, hanno bisogno del visto Schengen, rilasciato da qualsiasi paese dell’area.',
      apply:
        'Se la Slovenia è la meta principale, fai domanda a un consolato o centro visti sloveno: 90 €, 45 € per i bambini dai 6 ai 12 anni. Puoi presentarla fino a sei mesi prima e almeno 15 giorni prima; la decisione arriva di solito in circa 15 giorni. Servono un’assicurazione con almeno 30.000 € di copertura, prenotazioni, biglietto di ritorno ed estratti conto. Spesso la Slovenia fa parte di un giro tra Italia, Austria o Croazia: in quel caso fai domanda al paese dove passerai più giorni.',
      visaRun:
        'Il visa run non funziona: la regola 90/180 conta i giorni in tutta l’area Schengen, di cui fanno parte anche Croazia e Italia. Una gita in Bosnia o in Serbia mette solo in pausa il contatore, senza mai azzerarlo.',
      nomad:
        'La Slovenia concede ai nomadi digitali un permesso di soggiorno fino a un anno, non rinnovabile; uno nuovo è possibile solo sei mesi dopo la scadenza del precedente. Il reddito deve arrivare dall’estero ed essere almeno il doppio dello stipendio netto medio sloveno — circa 3.300 € al mese nel 2026, cifra ricalcolata periodicamente — dimostrato con sei mesi di estratti conto.',
      hacks: [
        'Volare a Trieste, Venezia, Zagabria o Graz spesso costa meno: sono tutti in area Schengen, e da Trieste a Lubiana ci vuole circa un’ora e mezza di bus.',
        'I giorni nel Regno Unito, in Irlanda, a Cipro e nei Balcani extra-UE non contano per i 90/180 di Schengen: così puoi dividere un viaggio lungo.',
        'Con l’EES (pienamente attivo da aprile 2026) niente timbri: i giorni si contano tramite impronte e foto. Prima di partire controlla il saldo con il calcolatore ufficiale UE.',
        'I cittadini indiani beneficiano della regola «a cascata»: dopo due visti usati correttamente in tre anni ottengono un visto per ingressi multipli di due anni, poi di cinque.',
      ],
      pitfalls: [
        'Da alcuni anni la Slovenia mantiene controlli temporanei ai confini con Croazia e Ungheria. Anche dentro Schengen porta il passaporto originale, non solo una fotocopia.',
        'Un visto a ingresso singolo si esaurisce appena esci da Schengen: una gita dalla Slovenia in Bosnia o in Serbia ti toglie il diritto di rientrare.',
        'ETIAS non è ancora attivo (non prima di fine 2026, più probabilmente nel 2027): non pagare i siti che lo «rilasciano» ora.',
      ],
      passports: {
        RU: 'La Slovenia non vieta l’ingresso ai russi con visto Schengen di qualsiasi paese, ma in Russia ne rilascia pochissimi di propri. Da novembre 2025 l’UE concede ai russi soprattutto visti a ingresso singolo. Non ci sono voli diretti: si vola a Zagabria, Trieste o Venezia via Istanbul o Belgrado; le carte russe non funzionano.',
        UA: 'I cittadini ucraini con passaporto biometrico non hanno bisogno del visto (90/180); la protezione temporanea UE vale fino al 4 marzo 2027.',
        IN: 'I cittadini indiani hanno bisogno del visto Schengen; dopo due viaggi senza problemi possono ottenere un visto per ingressi multipli di due anni, poi di cinque.',
      },
    },
  },
};

export default guide;
