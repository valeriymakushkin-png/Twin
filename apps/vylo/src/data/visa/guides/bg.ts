import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'BG',
  checked: '2026-10',
  fees: { visa: { kind: 'fixed', amount: 90, currency: 'EUR' } },
  stay: { visa: 90 },
  links: { immigration: 'https://www.mfa.bg/en' },
  docs: ['insurance', 'returnTicket', 'booking', 'finance'],
  passportMonths: 3,
  rule: { days: 90, window: 180 },
  visaRun: 'no',
  nomad: { name: 'Digital nomad residence permit', months: 12 },
  text: {
    ru: {
      summary:
        'Болгария — полноправный член Шенгена с 1 января 2025 года. Гражданам ЕС достаточно ID-карты; граждане США, Великобритании, Канады, Австралии, Японии, Кореи, Бразилии, Мексики, ОАЭ, Израиля, Украины и Грузии въезжают без визы до 90 дней в любые 180 по всему Шенгену. Остальным, включая граждан России, Индии, Китая, Турции и Казахстана, нужна шенгенская виза.',
      apply:
        'Если Болгария — основная страна поездки, подавайтесь в болгарское консульство или визовый центр: сбор 90 €, для детей 6–12 лет — 45 €. Подать можно за полгода, но не позже чем за 15 дней; перед летним сезоном записи на Черноморское побережье разбирают быстро. Нужны страховка с покрытием от 30 000 €, брони, обратный билет и выписка со счёта.',
      visaRun:
        'Визаран больше не работает: с 2025 года дни в Болгарии входят в общий шенгенский лимит 90/180, а Румыния и Греция тоже Шенген. Выезд в Турцию, Сербию или Северную Македонию лишь ставит счётчик на паузу — зато дни там в лимит не входят.',
      nomad:
        'С 2025 года Болгария выдаёт цифровым кочевникам вид на жительство на год с возможностью продления ещё на год. Сначала оформляют визу D в консульстве, затем ВНЖ в Болгарии. Годовой доход из-за рубежа должен быть не меньше 50 минимальных зарплат — около 31 000 € в год (сумма зависит от минимальной зарплаты), работать на болгарских клиентов нельзя.',
      hacks: [
        'Из Стамбула в Софию и Пловдив ходят ночные автобусы через переход Капитан-Андреево — дешёвый способ въехать, если вы летите через Стамбул; на шенгенской границе теперь проходят регистрацию EES.',
        'Дни в Турции, Сербии и Северной Македонии не входят в шенгенские 90/180: длинную поездку по Балканам удобно чередовать с Болгарией.',
        'Граница Болгарии и Румынии с 2025 года открыта без постоянного контроля: мост Русе — Джурджу и паром Видин — Калафат проходят как внутренние, но паспорт держите при себе.',
        'Индийцам выгодно «каскадное» правило: после двух использованных по правилам виз за три года дают многократную визу на два года, затем на пять.',
      ],
      pitfalls: [
        'Старые советы «Болгария не в Шенгене» устарели: с 31 марта 2024 года (воздух и море) и с 1 января 2025 года (суша) дни здесь считаются в общий лимит 90/180, а национальных болгарских виз для туристов больше нет.',
        'Однократная виза сгорает при выезде из Шенгена: поездка в Эдирне или Стамбул оставит вас без права вернуться.',
        'ETIAS ещё не работает (запуск не раньше конца 2026, вероятнее 2027) — не платите сайтам, которые «оформляют» его сейчас.',
      ],
      passports: {
        RU: 'Болгария не ограничивает въезд россиян и продолжает выдавать туристические шенгенские визы через визовые центры в России; с ноября 2025 года по правилам ЕС это в основном однократные визы. Прямых рейсов нет: летают через Стамбул, Белград или Ереван, из Стамбула удобен автобус. С 2026 года валюта Болгарии — евро; российские карты не работают.',
        TR: 'Гражданам Турции нужна шенгенская виза. На переходе Капитан-Андреево — Капыкуле летом и в праздники очереди бывают многочасовыми.',
        UA: 'Гражданам Украины с биометрическим паспортом виза не нужна (90/180); временная защита в ЕС продлена до 4 марта 2027 года.',
        IN: 'Гражданам Индии нужна шенгенская виза; после двух поездок без нарушений положена многократная виза на два, затем на пять лет.',
      },
    },
    en: {
      summary:
        'Bulgaria has been a full Schengen member since 1 January 2025. EU citizens just need an ID card; citizens of the US, UK, Canada, Australia, Japan, Korea, Brazil, Mexico, the UAE, Israel, Ukraine and Georgia enter visa-free for up to 90 days in any 180 across the Schengen area. Everyone else, including citizens of Russia, India, China, Turkey and Kazakhstan, needs a Schengen visa.',
      apply:
        'If Bulgaria is your main destination, apply at a Bulgarian consulate or visa centre: the fee is €90, or €45 for children aged 6–12. Apply up to six months ahead and at least 15 days before the trip; appointments fill up quickly before the Black Sea summer season. You need insurance with at least €30,000 cover, bookings, a return ticket and bank statements.',
      visaRun:
        'Visa runs no longer work: since 2025, days in Bulgaria count towards the shared Schengen 90/180, and Romania and Greece are Schengen too. A trip to Turkey, Serbia or North Macedonia only pauses the clock — but days spent there do not count towards the limit.',
      nomad:
        'Since 2025 Bulgaria has granted digital nomads a one-year residence permit, renewable for one more year. You first get a D visa at a consulate, then the permit in Bulgaria. Foreign income must be at least 50 times the monthly minimum wage per year — about €31,000 (it tracks the minimum wage) — and you may not work for Bulgarian clients.',
      hacks: [
        'Overnight buses run from Istanbul to Sofia and Plovdiv via the Kapitan Andreevo crossing — a cheap way in if you fly via Istanbul; you now register in the EES at this Schengen border.',
        'Days in Turkey, Serbia and North Macedonia do not count towards the Schengen 90/180, so a long Balkan trip can alternate with Bulgaria.',
        'Since 2025 the Bulgaria–Romania border has no permanent checks: the Ruse–Giurgiu bridge and the Vidin–Calafat crossing work as internal borders, but keep your passport on you.',
        'Indian citizens benefit from the “cascade” rule: after two visas used correctly within three years, you get a two-year multiple-entry visa, then a five-year one.',
      ],
      pitfalls: [
        'Old advice that “Bulgaria is not in Schengen” is outdated: since 31 March 2024 (air and sea) and 1 January 2025 (land), days here count towards the shared 90/180, and Bulgarian national tourist visas no longer exist.',
        'A single-entry visa is spent once you leave Schengen: a trip to Edirne or Istanbul leaves you with no right to come back.',
        'ETIAS is not running yet (late 2026 at the earliest, more likely 2027) — do not pay sites that “process” it now.',
      ],
      passports: {
        RU: 'Bulgaria does not restrict entry for Russians and keeps issuing tourist Schengen visas through visa centres in Russia; under EU rules since November 2025 these are mostly single-entry. There are no direct flights: people fly via Istanbul, Belgrade or Yerevan, and the bus from Istanbul is handy. Bulgaria has used the euro since 2026; Russian bank cards do not work.',
        TR: 'Turkish citizens need a Schengen visa. At the Kapıkule–Kapitan Andreevo crossing, queues can last hours in summer and on holidays.',
        UA: 'Ukrainian citizens with a biometric passport need no visa (90/180); EU temporary protection has been extended to 4 March 2027.',
        IN: 'Indian citizens need a Schengen visa; after two trouble-free trips you qualify for a two-year, then a five-year multiple-entry visa.',
      },
    },
    es: {
      summary:
        'Bulgaria es miembro de pleno derecho de Schengen desde el 1 de enero de 2025. A los ciudadanos de la UE les basta el DNI; los de EE. UU., Reino Unido, Canadá, Australia, Japón, Corea, Brasil, México, Emiratos, Israel, Ucrania y Georgia entran sin visado hasta 90 días en cualquier periodo de 180 en todo Schengen. El resto, incluidos los ciudadanos de Rusia, India, China, Turquía y Kazajistán, necesita visado Schengen.',
      apply:
        'Si Bulgaria es tu destino principal, solicita el visado en un consulado o centro de visados búlgaro: cuesta 90 € (45 € para niños de 6 a 12 años). Puedes presentarlo hasta seis meses antes y al menos 15 días antes; antes de la temporada de verano en el mar Negro las citas vuelan. Necesitas un seguro con al menos 30 000 € de cobertura, reservas, billete de vuelta y extractos bancarios.',
      visaRun:
        'Los visa runs ya no funcionan: desde 2025 los días en Bulgaria cuentan para el límite común Schengen de 90/180, y Rumanía y Grecia también son Schengen. Un viaje a Turquía, Serbia o Macedonia del Norte solo detiene el contador, aunque los días allí no cuentan para el límite.',
      nomad:
        'Desde 2025 Bulgaria concede a los nómadas digitales un permiso de residencia de un año, renovable otro más. Primero se obtiene un visado D en el consulado y después el permiso en Bulgaria. Los ingresos del extranjero deben ser de al menos 50 salarios mínimos al año —unos 31 000 €, según el salario mínimo vigente— y no puedes trabajar para clientes búlgaros.',
      hacks: [
        'Hay autobuses nocturnos de Estambul a Sofía y Plovdiv por el paso de Kapitan Andreevo: una entrada barata si vuelas vía Estambul; en esta frontera Schengen ahora te registran en el EES.',
        'Los días en Turquía, Serbia y Macedonia del Norte no cuentan para los 90/180 de Schengen, así que un viaje largo por los Balcanes puede alternarse con Bulgaria.',
        'Desde 2025 la frontera entre Bulgaria y Rumanía no tiene controles permanentes: el puente Ruse–Giurgiu y el paso Vidin–Calafat funcionan como fronteras interiores, pero lleva el pasaporte encima.',
        'Los ciudadanos indios se benefician de la regla «en cascada»: tras dos visados bien usados en tres años, reciben uno de entradas múltiples de dos años y después de cinco.',
      ],
      pitfalls: [
        'El viejo consejo de que «Bulgaria no está en Schengen» ha caducado: desde el 31 de marzo de 2024 (aire y mar) y el 1 de enero de 2025 (tierra), los días aquí cuentan para el 90/180 común, y ya no existen visados turísticos nacionales búlgaros.',
        'Un visado de una sola entrada se agota al salir de Schengen: un viaje a Edirne o Estambul te deja sin derecho a volver.',
        'ETIAS aún no funciona (como pronto a finales de 2026, probablemente en 2027): no pagues a webs que lo «tramitan» ahora.',
      ],
      passports: {
        RU: 'Bulgaria no restringe la entrada a los rusos y sigue concediendo visados Schengen turísticos a través de centros de visados en Rusia; por las normas de la UE desde noviembre de 2025 suelen ser de una sola entrada. No hay vuelos directos: se vuela vía Estambul, Belgrado o Ereván, y el autobús desde Estambul es práctico. Bulgaria usa el euro desde 2026; las tarjetas rusas no funcionan.',
        TR: 'Los ciudadanos turcos necesitan visado Schengen. En el paso de Kapıkule–Kapitan Andreevo las colas pueden durar horas en verano y en festivos.',
        UA: 'Los ciudadanos ucranianos con pasaporte biométrico no necesitan visado (90/180); la protección temporal de la UE se ha prorrogado hasta el 4 de marzo de 2027.',
        IN: 'Los ciudadanos indios necesitan visado Schengen; tras dos viajes sin incidencias, optan a uno de entradas múltiples de dos años y luego de cinco.',
      },
    },
    de: {
      summary:
        'Bulgarien ist seit dem 1. Januar 2025 vollwertiges Schengen-Mitglied. EU-Bürgern genügt der Personalausweis; Staatsangehörige der USA, Großbritanniens, Kanadas, Australiens, Japans, Koreas, Brasiliens, Mexikos, der VAE, Israels, der Ukraine und Georgiens reisen visumfrei bis zu 90 Tage innerhalb von 180 Tagen im ganzen Schengen-Raum. Alle anderen, auch Bürger Russlands, Indiens, Chinas, der Türkei und Kasachstans, brauchen ein Schengen-Visum.',
      apply:
        'Ist Bulgarien dein Hauptreiseziel, beantragst du das Visum bei einem bulgarischen Konsulat oder Visazentrum: 90 €, für Kinder von 6 bis 12 Jahren 45 €. Der Antrag geht frühestens sechs Monate und spätestens 15 Tage vor der Reise; vor der Sommersaison am Schwarzen Meer sind Termine schnell weg. Nötig sind eine Versicherung mit mindestens 30.000 € Deckung, Buchungen, ein Rückflugticket und Kontoauszüge.',
      visaRun:
        'Visa-Runs funktionieren nicht mehr: Seit 2025 zählen Tage in Bulgarien zum gemeinsamen Schengen-Limit von 90/180, und auch Rumänien und Griechenland gehören dazu. Eine Fahrt in die Türkei, nach Serbien oder Nordmazedonien hält die Uhr nur an – Tage dort zählen aber nicht mit.',
      nomad:
        'Seit 2025 erteilt Bulgarien digitalen Nomaden eine einjährige Aufenthaltserlaubnis, die um ein weiteres Jahr verlängert werden kann. Zuerst gibt es ein D-Visum beim Konsulat, dann die Erlaubnis in Bulgarien. Das Auslandseinkommen muss mindestens das 50-Fache des monatlichen Mindestlohns pro Jahr betragen – rund 31.000 €, je nach Mindestlohn –, und für bulgarische Kunden darfst du nicht arbeiten.',
      hacks: [
        'Nachtbusse fahren von Istanbul über den Übergang Kapitan Andreevo nach Sofia und Plowdiw – ein günstiger Weg, wenn du über Istanbul fliegst; an dieser Schengen-Grenze wirst du jetzt im EES erfasst.',
        'Tage in der Türkei, in Serbien und Nordmazedonien zählen nicht zu den Schengen-90/180 – eine lange Balkanreise lässt sich mit Bulgarien abwechseln.',
        'Seit 2025 gibt es an der Grenze zu Rumänien keine ständigen Kontrollen: Die Brücke Russe–Giurgiu und der Übergang Widin–Calafat sind Binnengrenzen, den Pass solltest du trotzdem dabeihaben.',
        'Inder profitieren von der „Kaskadenregel“: Nach zwei korrekt genutzten Visa innerhalb von drei Jahren gibt es ein Mehrfachvisum für zwei, danach für fünf Jahre.',
      ],
      pitfalls: [
        'Der alte Tipp „Bulgarien ist nicht im Schengen-Raum“ ist überholt: Seit 31. März 2024 (Luft und See) und 1. Januar 2025 (Land) zählen Tage hier zum gemeinsamen 90/180, und nationale bulgarische Touristenvisa gibt es nicht mehr.',
        'Ein Visum für die einmalige Einreise ist mit dem Verlassen des Schengen-Raums verbraucht: Ein Ausflug nach Edirne oder Istanbul kostet dich das Rückkehrrecht.',
        'ETIAS läuft noch nicht (frühestens Ende 2026, eher 2027) – zahl nichts an Seiten, die es jetzt „beantragen“.',
      ],
      passports: {
        RU: 'Bulgarien schränkt die Einreise für Russen nicht ein und stellt über Visazentren in Russland weiterhin touristische Schengen-Visa aus; nach EU-Regeln seit November 2025 meist nur für die einmalige Einreise. Direktflüge gibt es nicht: Man fliegt über Istanbul, Belgrad oder Jerewan, praktisch ist auch der Bus ab Istanbul. Seit 2026 zahlt man in Bulgarien mit Euro; russische Karten funktionieren nicht.',
        TR: 'Türkische Staatsangehörige brauchen ein Schengen-Visum. Am Übergang Kapıkule–Kapitan Andreevo dauert es im Sommer und an Feiertagen oft Stunden.',
        UA: 'Ukrainer mit biometrischem Pass brauchen kein Visum (90/180); der vorübergehende Schutz in der EU gilt bis 4. März 2027.',
        IN: 'Inder brauchen ein Schengen-Visum; nach zwei problemlosen Reisen gibt es ein Mehrfachvisum für zwei, dann für fünf Jahre.',
      },
    },
    fr: {
      summary:
        'La Bulgarie est membre à part entière de l’espace Schengen depuis le 1er janvier 2025. Les citoyens de l’UE n’ont besoin que de leur carte d’identité ; les ressortissants des États-Unis, du Royaume-Uni, du Canada, d’Australie, du Japon, de Corée, du Brésil, du Mexique, des Émirats, d’Israël, d’Ukraine et de Géorgie entrent sans visa jusqu’à 90 jours sur 180 dans tout l’espace. Les autres, dont les citoyens russes, indiens, chinois, turcs et kazakhs, ont besoin d’un visa Schengen.',
      apply:
        'Si la Bulgarie est votre destination principale, déposez la demande auprès d’un consulat ou centre de visas bulgare : 90 €, ou 45 € pour les enfants de 6 à 12 ans. La demande se fait jusqu’à six mois avant et au plus tard 15 jours avant le départ ; avant la saison estivale sur la mer Noire, les rendez-vous partent vite. Il faut une assurance couvrant au moins 30 000 €, des réservations, un billet retour et des relevés bancaires.',
      visaRun:
        'Le visa run ne fonctionne plus : depuis 2025, les jours en Bulgarie comptent dans la limite Schengen commune des 90/180, et la Roumanie et la Grèce en font aussi partie. Un saut en Turquie, en Serbie ou en Macédoine du Nord ne fait que suspendre le compteur — mais les jours passés là-bas ne comptent pas.',
      nomad:
        'Depuis 2025, la Bulgarie accorde aux nomades numériques un titre de séjour d’un an, renouvelable une fois. On obtient d’abord un visa D au consulat, puis le titre en Bulgarie. Les revenus de l’étranger doivent atteindre au moins 50 fois le salaire minimum mensuel par an — environ 31 000 €, selon le salaire minimum en vigueur — et il est interdit de travailler pour des clients bulgares.',
      hacks: [
        'Des bus de nuit relient Istanbul à Sofia et Plovdiv par le poste de Kapitan Andreevo : une entrée économique si vous transitez par Istanbul ; à cette frontière Schengen, vous êtes désormais enregistré dans l’EES.',
        'Les jours passés en Turquie, en Serbie et en Macédoine du Nord ne comptent pas dans les 90/180 de Schengen : un long voyage dans les Balkans peut alterner avec la Bulgarie.',
        'Depuis 2025, la frontière bulgaro-roumaine n’a plus de contrôles permanents : le pont Roussé–Giurgiu et le passage Vidin–Calafat sont des frontières intérieures, mais gardez votre passeport sur vous.',
        'Les citoyens indiens profitent de la règle « en cascade » : après deux visas utilisés correctement en trois ans, ils obtiennent un visa à entrées multiples de deux ans, puis de cinq ans.',
      ],
      pitfalls: [
        'Le vieux conseil « la Bulgarie n’est pas dans Schengen » est périmé : depuis le 31 mars 2024 (air et mer) et le 1er janvier 2025 (terre), les jours ici comptent dans les 90/180 communs, et les visas touristiques nationaux bulgares n’existent plus.',
        'Un visa à entrée unique est consommé dès la sortie de Schengen : un saut à Edirne ou Istanbul vous prive du droit de revenir.',
        'ETIAS n’est pas encore en service (au plus tôt fin 2026, plus probablement 2027) : ne payez pas les sites qui le « délivrent » aujourd’hui.',
      ],
      passports: {
        RU: 'La Bulgarie ne restreint pas l’entrée des Russes et continue de délivrer des visas Schengen touristiques via des centres de visas en Russie ; selon les règles de l’UE depuis novembre 2025, ce sont surtout des visas à entrée unique. Pas de vol direct : on passe par Istanbul, Belgrade ou Erevan, et le bus depuis Istanbul est pratique. La Bulgarie utilise l’euro depuis 2026 ; les cartes bancaires russes ne fonctionnent pas.',
        TR: 'Les citoyens turcs ont besoin d’un visa Schengen. Au poste de Kapıkule–Kapitan Andreevo, l’attente peut durer des heures l’été et pendant les fêtes.',
        UA: 'Les citoyens ukrainiens munis d’un passeport biométrique n’ont pas besoin de visa (90/180) ; la protection temporaire de l’UE court jusqu’au 4 mars 2027.',
        IN: 'Les citoyens indiens ont besoin d’un visa Schengen ; après deux voyages sans incident, ils peuvent obtenir un visa à entrées multiples de deux ans, puis de cinq ans.',
      },
    },
    it: {
      summary:
        'La Bulgaria è membro a pieno titolo di Schengen dal 1° gennaio 2025. Ai cittadini UE basta la carta d’identità; i cittadini di Stati Uniti, Regno Unito, Canada, Australia, Giappone, Corea, Brasile, Messico, Emirati, Israele, Ucraina e Georgia entrano senza visto fino a 90 giorni ogni 180 in tutta l’area. Tutti gli altri, compresi i cittadini di Russia, India, Cina, Turchia e Kazakistan, hanno bisogno del visto Schengen.',
      apply:
        'Se la Bulgaria è la meta principale, fai domanda a un consolato o centro visti bulgaro: 90 €, 45 € per i bambini dai 6 ai 12 anni. Puoi presentarla fino a sei mesi prima e almeno 15 giorni prima; prima della stagione estiva sul Mar Nero gli appuntamenti finiscono in fretta. Servono un’assicurazione con almeno 30.000 € di copertura, prenotazioni, biglietto di ritorno ed estratti conto.',
      visaRun:
        'Il visa run non funziona più: dal 2025 i giorni in Bulgaria contano nel limite Schengen comune di 90/180, e anche Romania e Grecia sono Schengen. Un viaggio in Turchia, Serbia o Macedonia del Nord mette solo in pausa il contatore, ma i giorni trascorsi lì non contano.',
      nomad:
        'Dal 2025 la Bulgaria concede ai nomadi digitali un permesso di soggiorno di un anno, rinnovabile per un altro. Prima si ottiene un visto D in consolato, poi il permesso in Bulgaria. Il reddito dall’estero deve essere di almeno 50 salari minimi mensili all’anno — circa 31.000 €, in base al salario minimo — e non si può lavorare per clienti bulgari.',
      hacks: [
        'Da Istanbul partono bus notturni per Sofia e Plovdiv attraverso il valico di Kapitan Andreevo: un ingresso economico se voli via Istanbul; a questa frontiera Schengen ora vieni registrato nell’EES.',
        'I giorni in Turchia, Serbia e Macedonia del Nord non contano per i 90/180 di Schengen: un lungo viaggio nei Balcani può alternarsi con la Bulgaria.',
        'Dal 2025 il confine tra Bulgaria e Romania non ha controlli permanenti: il ponte Ruse–Giurgiu e il passaggio Vidin–Calafat sono frontiere interne, ma tieni il passaporto con te.',
        'I cittadini indiani beneficiano della regola «a cascata»: dopo due visti usati correttamente in tre anni ottengono un visto per ingressi multipli di due anni, poi di cinque.',
      ],
      pitfalls: [
        'Il vecchio consiglio «la Bulgaria non è in Schengen» è superato: dal 31 marzo 2024 (aria e mare) e dal 1° gennaio 2025 (terra) i giorni qui contano nel 90/180 comune, e i visti turistici nazionali bulgari non esistono più.',
        'Un visto a ingresso singolo si esaurisce appena esci da Schengen: una gita a Edirne o Istanbul ti toglie il diritto di rientrare.',
        'ETIAS non è ancora attivo (non prima di fine 2026, più probabilmente nel 2027): non pagare i siti che lo «rilasciano» ora.',
      ],
      passports: {
        RU: 'La Bulgaria non limita l’ingresso ai russi e continua a rilasciare visti Schengen turistici tramite centri visti in Russia; per le regole UE in vigore da novembre 2025 sono per lo più a ingresso singolo. Non ci sono voli diretti: si vola via Istanbul, Belgrado o Erevan, ed è comodo anche il bus da Istanbul. Dal 2026 in Bulgaria si paga in euro; le carte russe non funzionano.',
        TR: 'I cittadini turchi hanno bisogno del visto Schengen. Al valico di Kapıkule–Kapitan Andreevo d’estate e nei festivi si aspetta anche per ore.',
        UA: 'I cittadini ucraini con passaporto biometrico non hanno bisogno del visto (90/180); la protezione temporanea UE vale fino al 4 marzo 2027.',
        IN: 'I cittadini indiani hanno bisogno del visto Schengen; dopo due viaggi senza problemi possono ottenere un visto per ingressi multipli di due anni, poi di cinque.',
      },
    },
  },
};

export default guide;
