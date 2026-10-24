import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'HR',
  checked: '2026-10',
  fees: { visa: { kind: 'fixed', amount: 90, currency: 'EUR' } },
  stay: { visa: 90 },
  links: { immigration: 'https://mvep.gov.hr' },
  docs: ['insurance', 'returnTicket', 'booking', 'finance'],
  passportMonths: 3,
  rule: { days: 90, window: 180 },
  visaRun: 'no',
  nomad: { name: 'Temporary stay of digital nomads', months: 18, income: { kind: 'from', amount: 3622, currency: 'EUR' } },
  hackScope: [['regime:required'], ['regime:free', 'regime:required'], null, ['regime:free', 'regime:required']],
  pitfallScope: [['regime:required'], null, ['regime:free']],
  text: {
    ru: {
      summary:
        'Хорватия в Шенгене с 2023 года. Гражданам ЕС достаточно ID-карты; граждане США, Великобритании, Канады, Австралии, Японии, Кореи, Бразилии, Мексики, ОАЭ, Израиля, Украины и Грузии въезжают без визы до 90 дней в любые 180 по всему Шенгену. Остальным, включая граждан России, Индии, Китая, Турции и Казахстана, нужна шенгенская виза любой страны.',
      apply:
        'Если Хорватия — основная страна поездки, подавайтесь в хорватское консульство или визовый центр: сбор 90 €, для детей 6–12 лет — 45 €. Подать можно за полгода, но не позже чем за 15 дней; летом очередь на запись растёт, начинайте за два-три месяца. Нужны страховка с покрытием от 30 000 €, брони, обратный билет и выписка со счёта.',
      visaRun:
        'Визаран не работает: правило 90/180 считает дни во всём Шенгене, а поездка в Черногорию, Боснию или Сербию лишь ставит счётчик на паузу. Зато дни в этих странах не входят в лимит, поэтому их удобно чередовать с Хорватией.',
      nomad:
        'Хорватия разрешает цифровым кочевникам временное пребывание до 18 месяцев. Нужен доход из-за рубежа от 3622,50 € в месяц в 2026 году (2,5 средней чистой зарплаты, сумму пересчитывают ежегодно) или сбережения на весь срок, медицинская страховка и справка о несудимости. Работать на хорватские компании нельзя.',
      hacks: [
        'Едете из Сплита в Дубровник — выбирайте дорогу через Пелешацкий мост: так вы не пересекаете боснийский Неум и не тратите однократную визу.',
        'Дни в Черногории, Боснии, Сербии и Албании не входят в шенгенские 90/180: длинное лето на Балканах можно спланировать как Хорватия — Котор — Хорватия, не нарушая правил.',
        'Паромы Сплит — Анкона и Задар — Анкона идут внутри Шенгена: паспортного контроля как на внешней границе нет, но документ всё равно проверяют при посадке.',
        'С запуском EES (полностью с апреля 2026 года) штампов нет: дни считаются автоматически. Перед поездкой проверьте остаток в официальном калькуляторе ЕС.',
      ],
      pitfalls: [
        'Однократная виза сгорает при выезде из Шенгена: однодневная экскурсия из Дубровника в Котор или Мостар оставит вас без права вернуться.',
        'Хозяин частного жилья обязан зарегистрировать вас в системе eVisitor. Если вы живёте у друзей, зарегистрируйтесь в полиции в течение двух дней — иначе штраф.',
        'ETIAS ещё не работает (запуск не раньше конца 2026, вероятнее 2027) — не платите сайтам, которые «оформляют» его сейчас.',
      ],
      passports: {
        RU: 'Хорватия не запрещает въезд россиянам с шенгенской визой любой страны, но сама выдаёт туристические визы в России в ограниченном числе. С ноября 2025 года ЕС выдаёт россиянам в основном однократные визы — учитывайте это при поездках в Черногорию или Боснию. Прямых рейсов нет: летают через Стамбул или Белград; российские карты не работают.',
        UA: 'Гражданам Украины с биометрическим паспортом виза не нужна (90/180); временная защита в ЕС продлена до 4 марта 2027 года.',
        BA: 'Граждане Боснии и Герцеговины с биометрическим паспортом въезжают без визы (90/180); дни на родине в этот лимит не входят.',
        IN: 'Гражданам Индии нужна шенгенская виза; после двух поездок без нарушений положена многократная виза на два, затем на пять лет.',
      },
    },
    en: {
      summary:
        'Croatia has been in Schengen since 2023. EU citizens just need an ID card; citizens of the US, UK, Canada, Australia, Japan, Korea, Brazil, Mexico, the UAE, Israel, Ukraine and Georgia enter visa-free for up to 90 days in any 180 across the Schengen area. Everyone else, including citizens of Russia, India, China, Turkey and Kazakhstan, needs a Schengen visa from any member state.',
      apply:
        'If Croatia is your main destination, apply at a Croatian consulate or visa centre: the fee is €90, or €45 for children aged 6–12. Apply up to six months ahead and at least 15 days before the trip; appointment queues grow in summer, so start two to three months early. You need insurance with at least €30,000 cover, bookings, a return ticket and bank statements.',
      visaRun:
        'Visa runs do not work: the 90/180 rule counts days across the whole Schengen area, and a trip to Montenegro, Bosnia or Serbia only pauses the clock. But days in those countries do not count towards the limit, so you can alternate them with Croatia.',
      nomad:
        'Croatia lets digital nomads stay temporarily for up to 18 months. You need foreign income of at least €3,622.50 a month in 2026 (2.5 times the average net wage, recalculated yearly) or savings for the whole period, health insurance and a criminal-record certificate. Working for Croatian companies is not allowed.',
      hacks: [
        'Driving from Split to Dubrovnik, take the Pelješac Bridge: that way you skip Bosnia’s Neum corridor and do not use up a single-entry visa.',
        'Days in Montenegro, Bosnia, Serbia and Albania do not count towards the Schengen 90/180, so a long Balkan summer can go Croatia–Kotor–Croatia without breaking any rules.',
        'The Split–Ancona and Zadar–Ancona ferries run inside Schengen: there is no external-border passport control, but your ID is still checked at boarding.',
        'With the EES (fully live since April 2026) there are no stamps and days are counted automatically. Check your balance with the EU’s official calculator before you travel.',
      ],
      pitfalls: [
        'A single-entry visa is spent once you leave Schengen: a day tour from Dubrovnik to Kotor or Mostar leaves you with no right to come back.',
        'Private hosts must register you in the eVisitor system. If you stay with friends, register with the police within two days or risk a fine.',
        'ETIAS is not running yet (late 2026 at the earliest, more likely 2027) — do not pay sites that “process” it now.',
      ],
      passports: {
        RU: 'Croatia does not ban Russians holding a Schengen visa from any country, but it issues only a limited number of tourist visas in Russia itself. Since November 2025 the EU has mostly been issuing single-entry visas to Russians — keep that in mind before side trips to Montenegro or Bosnia. There are no direct flights: people fly via Istanbul or Belgrade, and Russian bank cards do not work.',
        UA: 'Ukrainian citizens with a biometric passport need no visa (90/180); EU temporary protection has been extended to 4 March 2027.',
        BA: 'Citizens of Bosnia and Herzegovina with a biometric passport enter visa-free (90/180); days at home do not count towards the limit.',
        IN: 'Indian citizens need a Schengen visa; after two trouble-free trips you qualify for a two-year, then a five-year multiple-entry visa.',
      },
    },
    es: {
      summary:
        'Croacia forma parte de Schengen desde 2023. A los ciudadanos de la UE les basta el DNI; los de EE. UU., Reino Unido, Canadá, Australia, Japón, Corea, Brasil, México, Emiratos, Israel, Ucrania y Georgia entran sin visado hasta 90 días en cualquier periodo de 180 en todo Schengen. El resto, incluidos los ciudadanos de Rusia, India, China, Turquía y Kazajistán, necesita un visado Schengen de cualquier país miembro.',
      apply:
        'Si Croacia es tu destino principal, solicita el visado en un consulado o centro de visados croata: cuesta 90 € (45 € para niños de 6 a 12 años). Puedes presentarlo hasta seis meses antes y al menos 15 días antes; en verano las citas escasean, así que empieza con dos o tres meses de margen. Necesitas un seguro con al menos 30 000 € de cobertura, reservas, billete de vuelta y extractos bancarios.',
      visaRun:
        'Los visa runs no funcionan: la regla 90/180 cuenta los días en todo Schengen, y un viaje a Montenegro, Bosnia o Serbia solo detiene el contador. Eso sí, los días en esos países no cuentan para el límite, así que puedes alternarlos con Croacia.',
      nomad:
        'Croacia permite a los nómadas digitales una estancia temporal de hasta 18 meses. Necesitas ingresos del extranjero de al menos 3622,50 € al mes en 2026 (2,5 veces el salario neto medio, recalculado cada año) o ahorros para todo el periodo, seguro médico y certificado de antecedentes penales. No se puede trabajar para empresas croatas.',
      hacks: [
        'Si conduces de Split a Dubrovnik, usa el puente de Pelješac: así evitas el corredor bosnio de Neum y no gastas un visado de una sola entrada.',
        'Los días en Montenegro, Bosnia, Serbia y Albania no cuentan para los 90/180 de Schengen: un verano largo en los Balcanes puede ir Croacia–Kotor–Croacia sin incumplir nada.',
        'Los ferris Split–Ancona y Zadar–Ancona circulan dentro de Schengen: no hay control de frontera exterior, pero al embarcar te piden el documento igualmente.',
        'Con el EES (plenamente operativo desde abril de 2026) no hay sellos y los días se cuentan solos. Consulta tu saldo en la calculadora oficial de la UE antes de viajar.',
      ],
      pitfalls: [
        'Un visado de una sola entrada se agota al salir de Schengen: una excursión de Dubrovnik a Kotor o Mostar te deja sin derecho a volver.',
        'El anfitrión de un alojamiento privado debe registrarte en el sistema eVisitor. Si te quedas con amigos, regístrate en la policía en dos días o te arriesgas a una multa.',
        'ETIAS aún no funciona (como pronto a finales de 2026, probablemente en 2027): no pagues a webs que lo «tramitan» ahora.',
      ],
      passports: {
        RU: 'Croacia no veta la entrada a rusos con visado Schengen de cualquier país, pero en Rusia expide un número limitado de visados turísticos. Desde noviembre de 2025 la UE concede a los rusos sobre todo visados de una sola entrada; tenlo en cuenta antes de escaparte a Montenegro o Bosnia. No hay vuelos directos: se vuela vía Estambul o Belgrado, y las tarjetas rusas no funcionan.',
        UA: 'Los ciudadanos ucranianos con pasaporte biométrico no necesitan visado (90/180); la protección temporal de la UE se ha prorrogado hasta el 4 de marzo de 2027.',
        BA: 'Los ciudadanos de Bosnia y Herzegovina con pasaporte biométrico entran sin visado (90/180); los días en su país no cuentan para el límite.',
        IN: 'Los ciudadanos indios necesitan visado Schengen; tras dos viajes sin incidencias, optan a uno de entradas múltiples de dos años y luego de cinco.',
      },
    },
    de: {
      summary:
        'Kroatien gehört seit 2023 zum Schengen-Raum. EU-Bürgern genügt der Personalausweis; Staatsangehörige der USA, Großbritanniens, Kanadas, Australiens, Japans, Koreas, Brasiliens, Mexikos, der VAE, Israels, der Ukraine und Georgiens reisen visumfrei bis zu 90 Tage innerhalb von 180 Tagen im ganzen Schengen-Raum. Alle anderen, auch Bürger Russlands, Indiens, Chinas, der Türkei und Kasachstans, brauchen ein Schengen-Visum eines beliebigen Mitgliedstaats.',
      apply:
        'Ist Kroatien dein Hauptreiseziel, beantragst du das Visum bei einem kroatischen Konsulat oder Visazentrum: 90 €, für Kinder von 6 bis 12 Jahren 45 €. Der Antrag geht frühestens sechs Monate und spätestens 15 Tage vor der Reise; im Sommer werden Termine knapp, fang also zwei bis drei Monate vorher an. Nötig sind eine Versicherung mit mindestens 30.000 € Deckung, Buchungen, ein Rückflugticket und Kontoauszüge.',
      visaRun:
        'Visa-Runs funktionieren nicht: Die 90/180-Regel zählt die Tage im gesamten Schengen-Raum, und ein Abstecher nach Montenegro, Bosnien oder Serbien hält die Uhr nur an. Tage in diesen Ländern zählen aber nicht mit – du kannst sie also mit Kroatien abwechseln.',
      nomad:
        'Kroatien erlaubt digitalen Nomaden einen vorübergehenden Aufenthalt von bis zu 18 Monaten. Nötig sind ein Auslandseinkommen von mindestens 3.622,50 € im Monat (Stand 2026, das 2,5-Fache des Durchschnitts-Nettolohns, jährlich neu berechnet) oder Ersparnisse für den ganzen Zeitraum, eine Krankenversicherung und ein Führungszeugnis. Für kroatische Firmen darfst du nicht arbeiten.',
      hacks: [
        'Fährst du von Split nach Dubrovnik, nimm die Pelješac-Brücke: So umgehst du den bosnischen Neum-Korridor und verbrauchst kein Visum für die einmalige Einreise.',
        'Tage in Montenegro, Bosnien, Serbien und Albanien zählen nicht zu den Schengen-90/180 – ein langer Balkansommer kann regelkonform Kroatien–Kotor–Kroatien lauten.',
        'Die Fähren Split–Ancona und Zadar–Ancona verkehren innerhalb des Schengen-Raums: keine Außengrenzkontrolle, aber beim Boarding wird der Ausweis trotzdem geprüft.',
        'Mit dem EES (seit April 2026 voll in Betrieb) gibt es keine Stempel, die Tage werden automatisch gezählt. Prüfe vor der Reise dein Restguthaben mit dem offiziellen EU-Rechner.',
      ],
      pitfalls: [
        'Ein Visum für die einmalige Einreise ist mit dem Verlassen des Schengen-Raums verbraucht: Ein Tagesausflug von Dubrovnik nach Kotor oder Mostar kostet dich das Rückkehrrecht.',
        'Private Vermieter müssen dich im System eVisitor anmelden. Wohnst du bei Freunden, melde dich binnen zwei Tagen bei der Polizei, sonst droht ein Bußgeld.',
        'ETIAS läuft noch nicht (frühestens Ende 2026, eher 2027) – zahl nichts an Seiten, die es jetzt „beantragen“.',
      ],
      passports: {
        RU: 'Kroatien verweigert Russen mit einem Schengen-Visum eines beliebigen Landes nicht die Einreise, stellt in Russland selbst aber nur wenige Touristenvisa aus. Seit November 2025 erhalten Russen in der EU meist nur Visa für die einmalige Einreise – bedenke das vor Abstechern nach Montenegro oder Bosnien. Direktflüge gibt es nicht: Man fliegt über Istanbul oder Belgrad; russische Karten funktionieren nicht.',
        UA: 'Ukrainer mit biometrischem Pass brauchen kein Visum (90/180); der vorübergehende Schutz in der EU gilt bis 4. März 2027.',
        BA: 'Staatsangehörige von Bosnien und Herzegowina mit biometrischem Pass reisen visumfrei ein (90/180); Tage im Heimatland zählen nicht mit.',
        IN: 'Inder brauchen ein Schengen-Visum; nach zwei problemlosen Reisen gibt es ein Mehrfachvisum für zwei, dann für fünf Jahre.',
      },
    },
    fr: {
      summary:
        'La Croatie fait partie de l’espace Schengen depuis 2023. Les citoyens de l’UE n’ont besoin que de leur carte d’identité ; les ressortissants des États-Unis, du Royaume-Uni, du Canada, d’Australie, du Japon, de Corée, du Brésil, du Mexique, des Émirats, d’Israël, d’Ukraine et de Géorgie entrent sans visa jusqu’à 90 jours sur 180 dans tout l’espace. Les autres, dont les citoyens russes, indiens, chinois, turcs et kazakhs, ont besoin d’un visa Schengen de n’importe quel État membre.',
      apply:
        'Si la Croatie est votre destination principale, déposez la demande auprès d’un consulat ou centre de visas croate : 90 €, ou 45 € pour les enfants de 6 à 12 ans. La demande se fait jusqu’à six mois avant et au plus tard 15 jours avant le départ ; l’été, les rendez-vous se raréfient, alors commencez deux à trois mois à l’avance. Il faut une assurance couvrant au moins 30 000 €, des réservations, un billet retour et des relevés bancaires.',
      visaRun:
        'Le visa run ne fonctionne pas : la règle des 90/180 compte les jours dans tout l’espace Schengen, et un saut au Monténégro, en Bosnie ou en Serbie ne fait que suspendre le compteur. En revanche, les jours passés dans ces pays ne comptent pas : vous pouvez donc les alterner avec la Croatie.',
      nomad:
        'La Croatie autorise les nomades numériques à séjourner temporairement jusqu’à 18 mois. Il faut des revenus de l’étranger d’au moins 3 622,50 € par mois en 2026 (2,5 fois le salaire net moyen, recalculé chaque année) ou une épargne couvrant toute la période, une assurance maladie et un extrait de casier judiciaire. Travailler pour des entreprises croates est interdit.',
      hacks: [
        'En voiture de Split à Dubrovnik, passez par le pont de Pelješac : vous évitez ainsi le corridor bosnien de Neum et ne consommez pas un visa à entrée unique.',
        'Les jours au Monténégro, en Bosnie, en Serbie et en Albanie ne comptent pas dans les 90/180 de Schengen : un long été balkanique peut suivre Croatie–Kotor–Croatie en toute règle.',
        'Les ferries Split–Ancône et Zadar–Ancône circulent à l’intérieur de Schengen : pas de contrôle de frontière extérieure, mais une pièce d’identité est quand même vérifiée à l’embarquement.',
        'Avec l’EES (pleinement opérationnel depuis avril 2026), plus de tampons et les jours sont décomptés automatiquement. Vérifiez votre solde avec le calculateur officiel de l’UE avant le départ.',
      ],
      pitfalls: [
        'Un visa à entrée unique est consommé dès la sortie de Schengen : une excursion de Dubrovnik à Kotor ou Mostar vous prive du droit de revenir.',
        'Un hébergeur privé doit vous enregistrer dans le système eVisitor. Si vous logez chez des amis, déclarez-vous à la police sous deux jours, sous peine d’amende.',
        'ETIAS n’est pas encore en service (au plus tôt fin 2026, plus probablement 2027) : ne payez pas les sites qui le « délivrent » aujourd’hui.',
      ],
      passports: {
        RU: 'La Croatie n’interdit pas l’entrée aux Russes munis d’un visa Schengen de n’importe quel pays, mais elle n’en délivre elle-même qu’un nombre limité en Russie. Depuis novembre 2025, l’UE accorde surtout des visas à entrée unique aux Russes : pensez-y avant un saut au Monténégro ou en Bosnie. Pas de vol direct : on passe par Istanbul ou Belgrade ; les cartes bancaires russes ne fonctionnent pas.',
        UA: 'Les citoyens ukrainiens munis d’un passeport biométrique n’ont pas besoin de visa (90/180) ; la protection temporaire de l’UE court jusqu’au 4 mars 2027.',
        BA: 'Les citoyens de Bosnie-Herzégovine munis d’un passeport biométrique entrent sans visa (90/180) ; les jours passés chez eux ne comptent pas.',
        IN: 'Les citoyens indiens ont besoin d’un visa Schengen ; après deux voyages sans incident, ils peuvent obtenir un visa à entrées multiples de deux ans, puis de cinq ans.',
      },
    },
    it: {
      summary:
        'La Croazia fa parte di Schengen dal 2023. Ai cittadini UE basta la carta d’identità; i cittadini di Stati Uniti, Regno Unito, Canada, Australia, Giappone, Corea, Brasile, Messico, Emirati, Israele, Ucraina e Georgia entrano senza visto fino a 90 giorni ogni 180 in tutta l’area. Tutti gli altri, compresi i cittadini di Russia, India, Cina, Turchia e Kazakistan, hanno bisogno di un visto Schengen di qualsiasi Stato membro.',
      apply:
        'Se la Croazia è la meta principale, fai domanda a un consolato o centro visti croato: 90 €, 45 € per i bambini dai 6 ai 12 anni. Puoi presentarla fino a sei mesi prima e almeno 15 giorni prima; d’estate gli appuntamenti scarseggiano, quindi muoviti con due o tre mesi di anticipo. Servono un’assicurazione con almeno 30.000 € di copertura, prenotazioni, biglietto di ritorno ed estratti conto.',
      visaRun:
        'Il visa run non funziona: la regola 90/180 conta i giorni in tutta l’area Schengen, e una gita in Montenegro, Bosnia o Serbia mette solo in pausa il contatore. Però i giorni in quei paesi non contano, quindi puoi alternarli con la Croazia.',
      nomad:
        'La Croazia consente ai nomadi digitali un soggiorno temporaneo fino a 18 mesi. Servono un reddito dall’estero di almeno 3.622,50 € al mese nel 2026 (2,5 volte lo stipendio netto medio, ricalcolato ogni anno) o risparmi per tutto il periodo, un’assicurazione sanitaria e il certificato del casellario giudiziale. Non si può lavorare per aziende croate.',
      hacks: [
        'In auto da Spalato a Dubrovnik prendi il ponte di Sabbioncello (Pelješac): così eviti il corridoio bosniaco di Neum e non bruci un visto a ingresso singolo.',
        'I giorni in Montenegro, Bosnia, Serbia e Albania non contano per i 90/180 di Schengen: una lunga estate balcanica può seguire lo schema Croazia–Cattaro–Croazia senza violare nulla.',
        'I traghetti Spalato–Ancona e Zara–Ancona viaggiano dentro Schengen: niente controllo di frontiera esterna, ma all’imbarco il documento viene comunque verificato.',
        'Con l’EES (pienamente attivo da aprile 2026) niente timbri e i giorni si contano in automatico. Prima di partire controlla il saldo con il calcolatore ufficiale UE.',
      ],
      pitfalls: [
        'Un visto a ingresso singolo si esaurisce appena esci da Schengen: una gita da Dubrovnik a Cattaro o Mostar ti toglie il diritto di rientrare.',
        'Chi affitta un alloggio privato deve registrarti nel sistema eVisitor. Se stai da amici, registrati in polizia entro due giorni, altrimenti rischi una multa.',
        'ETIAS non è ancora attivo (non prima di fine 2026, più probabilmente nel 2027): non pagare i siti che lo «rilasciano» ora.',
      ],
      passports: {
        RU: 'La Croazia non vieta l’ingresso ai russi con visto Schengen di qualsiasi paese, ma in Russia ne rilascia pochi di propri. Da novembre 2025 l’UE concede ai russi soprattutto visti a ingresso singolo: tienilo presente prima di una gita in Montenegro o in Bosnia. Non ci sono voli diretti: si vola via Istanbul o Belgrado, e le carte russe non funzionano.',
        UA: 'I cittadini ucraini con passaporto biometrico non hanno bisogno del visto (90/180); la protezione temporanea UE vale fino al 4 marzo 2027.',
        BA: 'I cittadini della Bosnia ed Erzegovina con passaporto biometrico entrano senza visto (90/180); i giorni trascorsi in patria non contano.',
        IN: 'I cittadini indiani hanno bisogno del visto Schengen; dopo due viaggi senza problemi possono ottenere un visto per ingressi multipli di due anni, poi di cinque.',
      },
    },
  },
};

export default guide;
