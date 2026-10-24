import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'RO',
  checked: '2026-10',
  fees: { visa: { kind: 'fixed', amount: 90, currency: 'EUR' } },
  stay: { visa: 90 },
  links: { immigration: 'https://www.mae.ro/en' },
  docs: ['insurance', 'returnTicket', 'booking', 'finance'],
  passportMonths: 3,
  rule: { days: 90, window: 180 },
  visaRun: 'no',
  nomad: { name: 'Digital nomad visa', months: 12 },
  hackScope: [null, null, null, ['IN']],
  pitfallScope: [null, ['regime:required'], ['regime:free']],
  text: {
    ru: {
      summary:
        'Румыния — полноправный член Шенгена с 1 января 2025 года. Гражданам ЕС достаточно ID-карты; граждане США, Великобритании, Канады, Австралии, Японии, Кореи, Бразилии, Мексики, ОАЭ, Израиля, Украины, Молдовы и Грузии въезжают без визы до 90 дней в любые 180 по всему Шенгену. Остальным, включая граждан России, Индии, Китая, Турции и Казахстана, нужна шенгенская виза.',
      apply:
        'Если Румыния — основная страна поездки, заполните анкету на официальном портале evisa.mae.ro (это онлайн-заявление, а не электронная виза), затем подайте документы в румынском консульстве: сбор 90 €, для детей 6–12 лет — 45 €. Подать можно за полгода, но не позже чем за 15 дней; решение обычно около 15 дней. Нужны страховка с покрытием от 30 000 €, брони, обратный билет и выписка со счёта.',
      visaRun:
        'Визаран больше не работает: с 2025 года дни в Румынии входят в общий шенгенский лимит 90/180, а Венгрия и Болгария тоже Шенген. Поездка в Молдову или Сербию лишь ставит счётчик на паузу — зато дни там в лимит не входят.',
      nomad:
        'Румынская виза цифрового кочевника выдаётся на 12 месяцев с возможностью продления. Работать нужно удалённо на иностранного работодателя или свою зарубежную компанию, а доход — не ниже трёх средних зарплат брутто в Румынии, около 3700 € в месяц в начале 2026 года (порог пересчитывают, проверьте в консульстве).',
      hacks: [
        'Дни в Молдове, Сербии, Украине и Турции не входят в шенгенские 90/180: Кишинёв в часе полёта или ночи на автобусе от Бухареста и Ясс — удобная пауза между шенгенскими поездками.',
        'С 2025 года граница с Болгарией и Венгрией работает без постоянного контроля: мост Джурджу — Русе и трасса на Будапешт идут как внутренние, но паспорт держите при себе.',
        'С запуском EES (полностью с апреля 2026 года) штампов нет: дни считаются автоматически. Перед поездкой проверьте остаток в официальном калькуляторе ЕС.',
        'Индийцам выгодно «каскадное» правило: после двух использованных по правилам виз за три года дают многократную визу на два года, затем на пять.',
      ],
      pitfalls: [
        'Старые советы «Румыния не в Шенгене» устарели: с 31 марта 2024 года (воздух и море) и с 1 января 2025 года (суша) дни здесь входят в общий лимит, а национальные румынские туристические визы больше не нужны и не выдаются.',
        'Однократная виза сгорает при выезде из Шенгена: поездка в Кишинёв через Скулень или Леушень оставит вас без права вернуться.',
        'ETIAS ещё не работает (запуск не раньше конца 2026, вероятнее 2027) — не платите сайтам, которые «оформляют» его сейчас.',
      ],
      passports: {
        RU: 'Румыния не запрещает въезд россиянам с шенгенской визой любой страны, но сама выдаёт туристические визы в России в ограниченном числе. С ноября 2025 года ЕС выдаёт россиянам в основном однократные визы. Прямых рейсов нет: летают в Бухарест через Стамбул, Дубай или Баку; российские карты не работают.',
        MD: 'Граждане Молдовы с биометрическим паспортом въезжают без визы (90/180). Многие молдаване имеют и румынское гражданство — тогда действуют полные права гражданина ЕС, без лимита 90/180.',
        UA: 'Гражданам Украины с биометрическим паспортом виза не нужна (90/180); временная защита в ЕС продлена до 4 марта 2027 года.',
        IN: 'Гражданам Индии нужна шенгенская виза; после двух поездок без нарушений положена многократная виза на два, затем на пять лет.',
      },
    },
    en: {
      summary:
        'Romania has been a full Schengen member since 1 January 2025. EU citizens just need an ID card; citizens of the US, UK, Canada, Australia, Japan, Korea, Brazil, Mexico, the UAE, Israel, Ukraine, Moldova and Georgia enter visa-free for up to 90 days in any 180 across the Schengen area. Everyone else, including citizens of Russia, India, China, Turkey and Kazakhstan, needs a Schengen visa.',
      apply:
        'If Romania is your main destination, fill in the form on the official evisa.mae.ro portal (an online application, not an electronic visa), then submit your documents at a Romanian consulate: the fee is €90, or €45 for children aged 6–12. Apply up to six months ahead and at least 15 days before the trip; decisions usually take about 15 days. You need insurance with at least €30,000 cover, bookings, a return ticket and bank statements.',
      visaRun:
        'Visa runs no longer work: since 2025, days in Romania count towards the shared Schengen 90/180, and Hungary and Bulgaria are Schengen too. A trip to Moldova or Serbia only pauses the clock — but days spent there do not count towards the limit.',
      nomad:
        'Romania’s digital nomad visa is issued for 12 months and can be renewed. You must work remotely for a foreign employer or your own foreign company, with income of at least three times the Romanian average gross wage — about €3,700 a month in early 2026 (the bar is recalculated, so check with the consulate).',
      hacks: [
        'Days in Moldova, Serbia, Ukraine and Turkey do not count towards the Schengen 90/180: Chișinău, an hour’s flight or a night bus from Bucharest and Iași, makes an easy break between Schengen stays.',
        'Since 2025 the borders with Bulgaria and Hungary have no permanent checks: the Giurgiu–Ruse bridge and the road to Budapest work as internal crossings, but keep your passport on you.',
        'With the EES (fully live since April 2026) there are no stamps and days are counted automatically. Check your balance with the EU’s official calculator before you travel.',
        'Indian citizens benefit from the “cascade” rule: after two visas used correctly within three years, you get a two-year multiple-entry visa, then a five-year one.',
      ],
      pitfalls: [
        'Old advice that “Romania is not in Schengen” is outdated: since 31 March 2024 (air and sea) and 1 January 2025 (land), days here count towards the shared limit, and Romanian national tourist visas are no longer needed or issued.',
        'A single-entry visa is spent once you leave Schengen: a trip to Chișinău via Sculeni or Leușeni leaves you with no right to come back.',
        'ETIAS is not running yet (late 2026 at the earliest, more likely 2027) — do not pay sites that “process” it now.',
      ],
      passports: {
        RU: 'Romania does not ban Russians holding a Schengen visa from any country, but it issues only a limited number of tourist visas in Russia itself. Since November 2025 the EU has mostly been issuing single-entry visas to Russians. There are no direct flights: people fly to Bucharest via Istanbul, Dubai or Baku, and Russian bank cards do not work.',
        MD: 'Moldovan citizens with a biometric passport enter visa-free (90/180). Many Moldovans also hold Romanian citizenship, which gives full EU citizen rights with no 90/180 limit.',
        UA: 'Ukrainian citizens with a biometric passport need no visa (90/180); EU temporary protection has been extended to 4 March 2027.',
        IN: 'Indian citizens need a Schengen visa; after two trouble-free trips you qualify for a two-year, then a five-year multiple-entry visa.',
      },
    },
    es: {
      summary:
        'Rumanía es miembro de pleno derecho de Schengen desde el 1 de enero de 2025. A los ciudadanos de la UE les basta el DNI; los de EE. UU., Reino Unido, Canadá, Australia, Japón, Corea, Brasil, México, Emiratos, Israel, Ucrania, Moldavia y Georgia entran sin visado hasta 90 días en cualquier periodo de 180 en todo Schengen. El resto, incluidos los ciudadanos de Rusia, India, China, Turquía y Kazajistán, necesita visado Schengen.',
      apply:
        'Si Rumanía es tu destino principal, rellena el formulario en el portal oficial evisa.mae.ro (es una solicitud en línea, no un visado electrónico) y presenta después los documentos en un consulado rumano: cuesta 90 € (45 € para niños de 6 a 12 años). Puedes presentarlo hasta seis meses antes y al menos 15 días antes; la resolución suele tardar unos 15 días. Necesitas un seguro con al menos 30 000 € de cobertura, reservas, billete de vuelta y extractos bancarios.',
      visaRun:
        'Los visa runs ya no funcionan: desde 2025 los días en Rumanía cuentan para el límite común Schengen de 90/180, y Hungría y Bulgaria también son Schengen. Un viaje a Moldavia o Serbia solo detiene el contador, aunque los días allí no cuentan para el límite.',
      nomad:
        'El visado rumano de nómada digital se concede por 12 meses y es renovable. Debes trabajar en remoto para un empleador extranjero o tu propia empresa en el extranjero, con ingresos de al menos tres veces el salario bruto medio rumano: unos 3700 € al mes a principios de 2026 (el umbral se recalcula, confírmalo en el consulado).',
      hacks: [
        'Los días en Moldavia, Serbia, Ucrania y Turquía no cuentan para los 90/180 de Schengen: Chisináu, a una hora de vuelo o una noche de autobús desde Bucarest y Iași, es una pausa fácil entre estancias Schengen.',
        'Desde 2025 las fronteras con Bulgaria y Hungría no tienen controles permanentes: el puente Giurgiu–Ruse y la carretera a Budapest funcionan como pasos interiores, pero lleva el pasaporte encima.',
        'Con el EES (plenamente operativo desde abril de 2026) no hay sellos y los días se cuentan solos. Consulta tu saldo en la calculadora oficial de la UE antes de viajar.',
        'Los ciudadanos indios se benefician de la regla «en cascada»: tras dos visados bien usados en tres años, reciben uno de entradas múltiples de dos años y después de cinco.',
      ],
      pitfalls: [
        'El viejo consejo de que «Rumanía no está en Schengen» ha caducado: desde el 31 de marzo de 2024 (aire y mar) y el 1 de enero de 2025 (tierra), los días aquí cuentan para el límite común, y los visados turísticos nacionales rumanos ya no se necesitan ni se expiden.',
        'Un visado de una sola entrada se agota al salir de Schengen: un viaje a Chisináu por Sculeni o Leușeni te deja sin derecho a volver.',
        'ETIAS aún no funciona (como pronto a finales de 2026, probablemente en 2027): no pagues a webs que lo «tramitan» ahora.',
      ],
      passports: {
        RU: 'Rumanía no veta la entrada a rusos con visado Schengen de cualquier país, pero en Rusia expide un número limitado de visados turísticos propios. Desde noviembre de 2025 la UE concede a los rusos sobre todo visados de una sola entrada. No hay vuelos directos: se vuela a Bucarest vía Estambul, Dubái o Bakú, y las tarjetas rusas no funcionan.',
        MD: 'Los ciudadanos moldavos con pasaporte biométrico entran sin visado (90/180). Muchos moldavos tienen además la ciudadanía rumana, que da plenos derechos de ciudadano de la UE sin límite de 90/180.',
        UA: 'Los ciudadanos ucranianos con pasaporte biométrico no necesitan visado (90/180); la protección temporal de la UE se ha prorrogado hasta el 4 de marzo de 2027.',
        IN: 'Los ciudadanos indios necesitan visado Schengen; tras dos viajes sin incidencias, optan a uno de entradas múltiples de dos años y luego de cinco.',
      },
    },
    de: {
      summary:
        'Rumänien ist seit dem 1. Januar 2025 vollwertiges Schengen-Mitglied. EU-Bürgern genügt der Personalausweis; Staatsangehörige der USA, Großbritanniens, Kanadas, Australiens, Japans, Koreas, Brasiliens, Mexikos, der VAE, Israels, der Ukraine, Moldaus und Georgiens reisen visumfrei bis zu 90 Tage innerhalb von 180 Tagen im ganzen Schengen-Raum. Alle anderen, auch Bürger Russlands, Indiens, Chinas, der Türkei und Kasachstans, brauchen ein Schengen-Visum.',
      apply:
        'Ist Rumänien dein Hauptreiseziel, füllst du das Formular auf dem offiziellen Portal evisa.mae.ro aus (ein Online-Antrag, kein elektronisches Visum) und reichst die Unterlagen dann bei einem rumänischen Konsulat ein: 90 €, für Kinder von 6 bis 12 Jahren 45 €. Der Antrag geht frühestens sechs Monate und spätestens 15 Tage vor der Reise; die Entscheidung dauert meist etwa 15 Tage. Nötig sind eine Versicherung mit mindestens 30.000 € Deckung, Buchungen, ein Rückflugticket und Kontoauszüge.',
      visaRun:
        'Visa-Runs funktionieren nicht mehr: Seit 2025 zählen Tage in Rumänien zum gemeinsamen Schengen-Limit von 90/180, und auch Ungarn und Bulgarien gehören dazu. Eine Fahrt nach Moldau oder Serbien hält die Uhr nur an – Tage dort zählen aber nicht mit.',
      nomad:
        'Rumäniens Visum für digitale Nomaden gilt 12 Monate und lässt sich verlängern. Du musst remote für einen ausländischen Arbeitgeber oder deine eigene Auslandsfirma arbeiten, mit einem Einkommen von mindestens dem Dreifachen des rumänischen Durchschnitts-Bruttolohns – Anfang 2026 rund 3.700 € im Monat (die Grenze wird neu berechnet, frag beim Konsulat nach).',
      hacks: [
        'Tage in Moldau, Serbien, der Ukraine und der Türkei zählen nicht zu den Schengen-90/180: Chișinău, eine Flugstunde oder eine Busnacht von Bukarest und Iași entfernt, ist eine bequeme Pause zwischen Schengen-Aufenthalten.',
        'Seit 2025 gibt es an den Grenzen zu Bulgarien und Ungarn keine ständigen Kontrollen: Die Brücke Giurgiu–Russe und die Straße nach Budapest sind Binnenübergänge, den Pass solltest du trotzdem dabeihaben.',
        'Mit dem EES (seit April 2026 voll in Betrieb) gibt es keine Stempel, die Tage werden automatisch gezählt. Prüfe vor der Reise dein Restguthaben mit dem offiziellen EU-Rechner.',
        'Inder profitieren von der „Kaskadenregel“: Nach zwei korrekt genutzten Visa innerhalb von drei Jahren gibt es ein Mehrfachvisum für zwei, danach für fünf Jahre.',
      ],
      pitfalls: [
        'Der alte Tipp „Rumänien ist nicht im Schengen-Raum“ ist überholt: Seit 31. März 2024 (Luft und See) und 1. Januar 2025 (Land) zählen Tage hier zum gemeinsamen Limit, und nationale rumänische Touristenvisa werden weder gebraucht noch ausgestellt.',
        'Ein Visum für die einmalige Einreise ist mit dem Verlassen des Schengen-Raums verbraucht: Eine Fahrt nach Chișinău über Sculeni oder Leușeni kostet dich das Rückkehrrecht.',
        'ETIAS läuft noch nicht (frühestens Ende 2026, eher 2027) – zahl nichts an Seiten, die es jetzt „beantragen“.',
      ],
      passports: {
        RU: 'Rumänien verweigert Russen mit einem Schengen-Visum eines beliebigen Landes nicht die Einreise, stellt in Russland selbst aber nur wenige Touristenvisa aus. Seit November 2025 erhalten Russen in der EU meist nur Visa für die einmalige Einreise. Direktflüge gibt es nicht: Man fliegt über Istanbul, Dubai oder Baku nach Bukarest; russische Karten funktionieren nicht.',
        MD: 'Moldauische Staatsangehörige mit biometrischem Pass reisen visumfrei ein (90/180). Viele Moldauer haben zusätzlich die rumänische Staatsangehörigkeit und damit volle EU-Bürgerrechte ohne 90/180-Limit.',
        UA: 'Ukrainer mit biometrischem Pass brauchen kein Visum (90/180); der vorübergehende Schutz in der EU gilt bis 4. März 2027.',
        IN: 'Inder brauchen ein Schengen-Visum; nach zwei problemlosen Reisen gibt es ein Mehrfachvisum für zwei, dann für fünf Jahre.',
      },
    },
    fr: {
      summary:
        'La Roumanie est membre à part entière de l’espace Schengen depuis le 1er janvier 2025. Les citoyens de l’UE n’ont besoin que de leur carte d’identité ; les ressortissants des États-Unis, du Royaume-Uni, du Canada, d’Australie, du Japon, de Corée, du Brésil, du Mexique, des Émirats, d’Israël, d’Ukraine, de Moldavie et de Géorgie entrent sans visa jusqu’à 90 jours sur 180 dans tout l’espace. Les autres, dont les citoyens russes, indiens, chinois, turcs et kazakhs, ont besoin d’un visa Schengen.',
      apply:
        'Si la Roumanie est votre destination principale, remplissez le formulaire sur le portail officiel evisa.mae.ro (une demande en ligne, pas un visa électronique), puis déposez vos documents dans un consulat roumain : 90 €, ou 45 € pour les enfants de 6 à 12 ans. La demande se fait jusqu’à six mois avant et au plus tard 15 jours avant le départ ; la décision prend en général une quinzaine de jours. Il faut une assurance couvrant au moins 30 000 €, des réservations, un billet retour et des relevés bancaires.',
      visaRun:
        'Le visa run ne fonctionne plus : depuis 2025, les jours en Roumanie comptent dans la limite Schengen commune des 90/180, et la Hongrie et la Bulgarie en font aussi partie. Un saut en Moldavie ou en Serbie ne fait que suspendre le compteur — mais les jours passés là-bas ne comptent pas.',
      nomad:
        'Le visa roumain pour nomades numériques est délivré pour 12 mois et renouvelable. Il faut travailler à distance pour un employeur étranger ou votre propre société à l’étranger, avec des revenus d’au moins trois fois le salaire brut moyen roumain — environ 3 700 € par mois début 2026 (le seuil est recalculé, vérifiez auprès du consulat).',
      hacks: [
        'Les jours passés en Moldavie, en Serbie, en Ukraine et en Turquie ne comptent pas dans les 90/180 de Schengen : Chișinău, à une heure de vol ou une nuit de bus de Bucarest et Iași, offre une pause facile entre deux séjours Schengen.',
        'Depuis 2025, les frontières avec la Bulgarie et la Hongrie n’ont plus de contrôles permanents : le pont Giurgiu–Roussé et la route de Budapest sont des passages intérieurs, mais gardez votre passeport sur vous.',
        'Avec l’EES (pleinement opérationnel depuis avril 2026), plus de tampons et les jours sont décomptés automatiquement. Vérifiez votre solde avec le calculateur officiel de l’UE avant le départ.',
        'Les citoyens indiens profitent de la règle « en cascade » : après deux visas utilisés correctement en trois ans, ils obtiennent un visa à entrées multiples de deux ans, puis de cinq ans.',
      ],
      pitfalls: [
        'Le vieux conseil « la Roumanie n’est pas dans Schengen » est périmé : depuis le 31 mars 2024 (air et mer) et le 1er janvier 2025 (terre), les jours ici comptent dans la limite commune, et les visas touristiques nationaux roumains ne sont plus ni nécessaires ni délivrés.',
        'Un visa à entrée unique est consommé dès la sortie de Schengen : un saut à Chișinău par Sculeni ou Leușeni vous prive du droit de revenir.',
        'ETIAS n’est pas encore en service (au plus tôt fin 2026, plus probablement 2027) : ne payez pas les sites qui le « délivrent » aujourd’hui.',
      ],
      passports: {
        RU: 'La Roumanie n’interdit pas l’entrée aux Russes munis d’un visa Schengen de n’importe quel pays, mais elle n’en délivre elle-même qu’un nombre limité en Russie. Depuis novembre 2025, l’UE accorde surtout des visas à entrée unique aux Russes. Pas de vol direct : on rejoint Bucarest via Istanbul, Dubaï ou Bakou ; les cartes bancaires russes ne fonctionnent pas.',
        MD: 'Les citoyens moldaves munis d’un passeport biométrique entrent sans visa (90/180). Beaucoup de Moldaves possèdent aussi la nationalité roumaine, qui donne tous les droits d’un citoyen de l’UE, sans limite des 90/180.',
        UA: 'Les citoyens ukrainiens munis d’un passeport biométrique n’ont pas besoin de visa (90/180) ; la protection temporaire de l’UE court jusqu’au 4 mars 2027.',
        IN: 'Les citoyens indiens ont besoin d’un visa Schengen ; après deux voyages sans incident, ils peuvent obtenir un visa à entrées multiples de deux ans, puis de cinq ans.',
      },
    },
    it: {
      summary:
        'La Romania è membro a pieno titolo di Schengen dal 1° gennaio 2025. Ai cittadini UE basta la carta d’identità; i cittadini di Stati Uniti, Regno Unito, Canada, Australia, Giappone, Corea, Brasile, Messico, Emirati, Israele, Ucraina, Moldavia e Georgia entrano senza visto fino a 90 giorni ogni 180 in tutta l’area. Tutti gli altri, compresi i cittadini di Russia, India, Cina, Turchia e Kazakistan, hanno bisogno del visto Schengen.',
      apply:
        'Se la Romania è la meta principale, compila il modulo sul portale ufficiale evisa.mae.ro (una domanda online, non un visto elettronico) e poi presenta i documenti a un consolato romeno: 90 €, 45 € per i bambini dai 6 ai 12 anni. Puoi presentarla fino a sei mesi prima e almeno 15 giorni prima; la decisione arriva di solito in circa 15 giorni. Servono un’assicurazione con almeno 30.000 € di copertura, prenotazioni, biglietto di ritorno ed estratti conto.',
      visaRun:
        'Il visa run non funziona più: dal 2025 i giorni in Romania contano nel limite Schengen comune di 90/180, e anche Ungheria e Bulgaria sono Schengen. Un viaggio in Moldavia o in Serbia mette solo in pausa il contatore, ma i giorni trascorsi lì non contano.',
      nomad:
        'Il visto romeno per nomadi digitali dura 12 mesi ed è rinnovabile. Devi lavorare da remoto per un datore di lavoro estero o una tua società estera, con un reddito di almeno tre volte lo stipendio lordo medio romeno: circa 3.700 € al mese a inizio 2026 (la soglia viene ricalcolata, verifica in consolato).',
      hacks: [
        'I giorni in Moldavia, Serbia, Ucraina e Turchia non contano per i 90/180 di Schengen: Chișinău, a un’ora di volo o una notte di bus da Bucarest e Iași, è una pausa comoda tra un soggiorno Schengen e l’altro.',
        'Dal 2025 i confini con Bulgaria e Ungheria non hanno controlli permanenti: il ponte Giurgiu–Ruse e la strada per Budapest sono passaggi interni, ma tieni il passaporto con te.',
        'Con l’EES (pienamente attivo da aprile 2026) niente timbri e i giorni si contano in automatico. Prima di partire controlla il saldo con il calcolatore ufficiale UE.',
        'I cittadini indiani beneficiano della regola «a cascata»: dopo due visti usati correttamente in tre anni ottengono un visto per ingressi multipli di due anni, poi di cinque.',
      ],
      pitfalls: [
        'Il vecchio consiglio «la Romania non è in Schengen» è superato: dal 31 marzo 2024 (aria e mare) e dal 1° gennaio 2025 (terra) i giorni qui contano nel limite comune, e i visti turistici nazionali romeni non servono né vengono più rilasciati.',
        'Un visto a ingresso singolo si esaurisce appena esci da Schengen: una gita a Chișinău da Sculeni o Leușeni ti toglie il diritto di rientrare.',
        'ETIAS non è ancora attivo (non prima di fine 2026, più probabilmente nel 2027): non pagare i siti che lo «rilasciano» ora.',
      ],
      passports: {
        RU: 'La Romania non vieta l’ingresso ai russi con visto Schengen di qualsiasi paese, ma in Russia ne rilascia pochi di propri. Da novembre 2025 l’UE concede ai russi soprattutto visti a ingresso singolo. Non ci sono voli diretti: si vola a Bucarest via Istanbul, Dubai o Baku, e le carte russe non funzionano.',
        MD: 'I cittadini moldavi con passaporto biometrico entrano senza visto (90/180). Molti moldavi hanno anche la cittadinanza romena, che dà pieni diritti di cittadino UE senza limite di 90/180.',
        UA: 'I cittadini ucraini con passaporto biometrico non hanno bisogno del visto (90/180); la protezione temporanea UE vale fino al 4 marzo 2027.',
        IN: 'I cittadini indiani hanno bisogno del visto Schengen; dopo due viaggi senza problemi possono ottenere un visto per ingressi multipli di due anni, poi di cinque.',
      },
    },
  },
};

export default guide;
