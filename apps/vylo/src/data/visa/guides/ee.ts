import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'EE',
  checked: '2026-10',
  overrides: {
    // Since 19 Sep 2022 Estonia refuses Russian citizens travelling for tourism, whichever state issued the Schengen visa
    RU: { status: 'banned' },
  },
  fees: { visa: { kind: 'fixed', amount: 90, currency: 'EUR' } },
  stay: { visa: 90 },
  links: { immigration: 'https://www.politsei.ee/en' },
  docs: ['insurance', 'returnTicket', 'booking', 'finance'],
  passportMonths: 3,
  rule: { days: 90, window: 180 },
  visaRun: 'no',
  nomad: { name: 'Digital Nomad Visa', months: 12, income: { kind: 'from', amount: 4500, currency: 'EUR' } },
  hackScope: [null, null, null, null],
  pitfallScope: [null, ['regime:required'], ['regime:free']],
  text: {
    ru: {
      summary:
        'Гражданам ЕС достаточно ID-карты. Граждане США, Великобритании, Канады, Австралии, Японии, Кореи, Бразилии, Мексики, ОАЭ, Израиля, Украины и Грузии въезжают без визы до 90 дней в любые 180 по всему Шенгену. Остальным, включая граждан Индии, Китая, Турции и Казахстана, нужна шенгенская виза. Граждан России с туристическими целями Эстония не впускает с сентября 2022 года — даже по визе другой страны.',
      apply:
        'Если Эстония — основная страна поездки, подавайтесь в эстонское консульство или визовый центр: сбор 90 €, для детей 6–12 лет — 45 €. Подать можно за полгода, но не позже чем за 15 дней; решение обычно около 15 дней. Нужны страховка с покрытием от 30 000 €, брони, обратный билет и выписка со счёта. Подойдёт и шенгенская виза любой другой страны.',
      visaRun:
        'Визаран не работает: правило 90/180 считает дни во всём Шенгене, а Финляндия, Латвия и Литва — тоже Шенген. Выезд в Великобританию или Турцию лишь ставит счётчик на паузу, но не обнуляет его.',
      nomad:
        'Виза цифрового кочевника (долгосрочная виза D) даёт до года жизни в Эстонии при работе на иностранного работодателя, свою зарубежную компанию или клиентов. Доход — от 4500 € в месяц до налогов за последние полгода; подавать можно в консульстве или, находясь в Эстонии законно, в Департаменте полиции и погранохраны.',
      hacks: [
        'Паромы Tallink, Viking Line и Eckerö Line из Хельсинки идут около двух часов и остаются внутри Шенгена — частый способ попасть в Таллин, если удобнее лететь в Хельсинки.',
        'Автобусы Lux Express связывают Таллин с Ригой и Вильнюсом без пограничного контроля — Прибалтику легко объехать за одну поездку.',
        'Дни в Великобритании, Ирландии, на Кипре и в Турции не входят в шенгенские 90/180 — длинную поездку можно разбить.',
        'С запуском EES (полностью с апреля 2026 года) штампов нет: дни считаются автоматически. Перед поездкой проверьте остаток в официальном калькуляторе ЕС.',
      ],
      pitfalls: [
        'Эстонское e-Residency — это цифровая подпись для бизнеса, а не виза и не право жить в стране; на границе оно ничего не даёт.',
        'Однократная виза сгорает при выезде из Шенгена: переход в Нарве или поездка в Ивангород оставят вас без права вернуться.',
        'ETIAS ещё не работает (запуск не раньше конца 2026, вероятнее 2027) — не платите сайтам, которые «оформляют» его сейчас.',
      ],
      passports: {
        RU: 'С 19 сентября 2022 года Эстония не впускает граждан России с туристическими, деловыми, спортивными и культурными целями, даже по шенгенской визе другой страны. Исключения: близкие родственники граждан и резидентов ЕС, владельцы ВНЖ и долгосрочных виз стран ЕС, дипломаты, водители-перевозчики и гуманитарные случаи. Машины с российскими номерами не пускают, переход Нарва — Ивангород открыт только для пешеходов и с ограниченными часами.',
        UA: 'Гражданам Украины с биометрическим паспортом виза не нужна (90/180); временная защита в ЕС продлена до 4 марта 2027 года.',
        IN: 'Гражданам Индии нужна шенгенская виза; после двух поездок без нарушений положена многократная виза на два, затем на пять лет.',
      },
    },
    en: {
      summary:
        'EU citizens just need an ID card. Citizens of the US, UK, Canada, Australia, Japan, Korea, Brazil, Mexico, the UAE, Israel, Ukraine and Georgia enter visa-free for up to 90 days in any 180 across the Schengen area. Everyone else, including citizens of India, China, Turkey and Kazakhstan, needs a Schengen visa. Since September 2022, Estonia refuses Russian citizens travelling as tourists, even with another country’s visa.',
      apply:
        'If Estonia is your main destination, apply at an Estonian consulate or visa centre: the fee is €90, or €45 for children aged 6–12. Apply up to six months ahead and at least 15 days before the trip; decisions usually take about 15 days. You need insurance with at least €30,000 cover, bookings, a return ticket and bank statements. A Schengen visa from any other member state works too.',
      visaRun:
        'Visa runs do not work: the 90/180 rule counts days across the whole Schengen area, and Finland, Latvia and Lithuania are Schengen too. A trip to the UK or Turkey only pauses the clock; it never resets it.',
      nomad:
        'The Digital Nomad Visa (a long-stay D visa) lets you live in Estonia for up to a year while working for a foreign employer, your own foreign company or clients. Income must be at least €4,500 a month before tax over the previous six months; apply at a consulate or, if you are already in Estonia legally, at the Police and Border Guard Board.',
      hacks: [
        'Tallink, Viking Line and Eckerö Line ferries from Helsinki take about two hours and stay inside Schengen — a popular way into Tallinn if Helsinki is easier to fly to.',
        'Lux Express coaches link Tallinn with Riga and Vilnius with no border checks, so the Baltics are easy to cover in one trip.',
        'Days in the UK, Ireland, Cyprus and Turkey do not count towards the Schengen 90/180, so a long trip can be split.',
        'With the EES (fully live since April 2026) there are no stamps and days are counted automatically. Check your balance with the EU’s official calculator before you travel.',
      ],
      pitfalls: [
        'Estonian e-Residency is a digital signature for running a business, not a visa or a right to live in the country; it means nothing at the border.',
        'A single-entry visa is spent once you leave Schengen: crossing at Narva into Ivangorod leaves you with no right to come back.',
        'ETIAS is not running yet (late 2026 at the earliest, more likely 2027) — do not pay sites that “process” it now.',
      ],
      passports: {
        RU: 'Since 19 September 2022, Estonia has refused entry to Russian citizens travelling for tourism, business, sport or culture, even with another country’s Schengen visa. Exceptions include close relatives of EU citizens and residents, holders of EU residence permits or long-stay visas, diplomats, transport drivers and humanitarian cases. Russian-registered cars are not admitted, and the Narva–Ivangorod crossing is open to pedestrians only, with limited hours.',
        UA: 'Ukrainian citizens with a biometric passport need no visa (90/180); EU temporary protection has been extended to 4 March 2027.',
        IN: 'Indian citizens need a Schengen visa; after two trouble-free trips you qualify for a two-year, then a five-year multiple-entry visa.',
      },
    },
    es: {
      summary:
        'A los ciudadanos de la UE les basta el DNI. Los de EE. UU., Reino Unido, Canadá, Australia, Japón, Corea, Brasil, México, Emiratos, Israel, Ucrania y Georgia entran sin visado hasta 90 días en cualquier periodo de 180 en todo Schengen. El resto, incluidos los ciudadanos de India, China, Turquía y Kazajistán, necesita visado Schengen. Desde septiembre de 2022, Estonia no admite a ciudadanos rusos que viajan como turistas, ni siquiera con visado de otro país.',
      apply:
        'Si Estonia es tu destino principal, solicita el visado en un consulado o centro de visados estonio: cuesta 90 € (45 € para niños de 6 a 12 años). Puedes presentarlo hasta seis meses antes y al menos 15 días antes; la resolución suele tardar unos 15 días. Necesitas un seguro con al menos 30 000 € de cobertura, reservas, billete de vuelta y extractos bancarios. También vale un visado Schengen de cualquier otro país miembro.',
      visaRun:
        'Los visa runs no funcionan: la regla 90/180 cuenta los días en todo Schengen, y Finlandia, Letonia y Lituania también son Schengen. Un viaje al Reino Unido o a Turquía solo detiene el contador; nunca lo reinicia.',
      nomad:
        'El visado de nómada digital (un visado D de larga estancia) te permite vivir en Estonia hasta un año trabajando para un empleador extranjero, tu propia empresa en el extranjero o clientes. Los ingresos deben ser de al menos 4500 € brutos al mes durante los seis meses anteriores; se solicita en un consulado o, si ya estás legalmente en Estonia, en la Policía y Guardia de Fronteras.',
      hacks: [
        'Los ferris de Tallink, Viking Line y Eckerö Line desde Helsinki tardan unas dos horas y no salen de Schengen: una vía habitual a Tallin si te resulta más fácil volar a Helsinki.',
        'Los autobuses de Lux Express unen Tallin con Riga y Vilna sin controles fronterizos, así que los países bálticos se recorren fácilmente en un solo viaje.',
        'Los días en Reino Unido, Irlanda, Chipre y Turquía no cuentan para los 90/180 de Schengen, así que puedes dividir un viaje largo.',
        'Con el EES (plenamente operativo desde abril de 2026) no hay sellos y los días se cuentan solos. Consulta tu saldo en la calculadora oficial de la UE antes de viajar.',
      ],
      pitfalls: [
        'La e-Residency estonia es una firma digital para gestionar empresas, no un visado ni un derecho a vivir en el país; en la frontera no sirve de nada.',
        'Un visado de una sola entrada se agota al salir de Schengen: cruzar en Narva hacia Ivángorod te deja sin derecho a volver.',
        'ETIAS aún no funciona (como pronto a finales de 2026, probablemente en 2027): no pagues a webs que lo «tramitan» ahora.',
      ],
      passports: {
        RU: 'Desde el 19 de septiembre de 2022, Estonia deniega la entrada a ciudadanos rusos que viajan por turismo, negocios, deporte o cultura, aunque tengan visado Schengen de otro país. Hay excepciones: familiares cercanos de ciudadanos y residentes de la UE, titulares de permisos de residencia o visados nacionales de la UE, diplomáticos, transportistas y casos humanitarios. No se admiten coches con matrícula rusa, y el paso Narva–Ivángorod solo está abierto a peatones y en horario limitado.',
        UA: 'Los ciudadanos ucranianos con pasaporte biométrico no necesitan visado (90/180); la protección temporal de la UE se ha prorrogado hasta el 4 de marzo de 2027.',
        IN: 'Los ciudadanos indios necesitan visado Schengen; tras dos viajes sin incidencias, optan a uno de entradas múltiples de dos años y luego de cinco.',
      },
    },
    de: {
      summary:
        'EU-Bürgern genügt der Personalausweis. Staatsangehörige der USA, Großbritanniens, Kanadas, Australiens, Japans, Koreas, Brasiliens, Mexikos, der VAE, Israels, der Ukraine und Georgiens reisen visumfrei bis zu 90 Tage innerhalb von 180 Tagen im ganzen Schengen-Raum. Alle anderen, auch Bürger Indiens, Chinas, der Türkei und Kasachstans, brauchen ein Schengen-Visum. Russische Staatsangehörige weist Estland seit September 2022 als Touristen ab – selbst mit dem Visum eines anderen Landes.',
      apply:
        'Ist Estland dein Hauptreiseziel, beantragst du das Visum bei einem estnischen Konsulat oder Visazentrum: 90 €, für Kinder von 6 bis 12 Jahren 45 €. Der Antrag geht frühestens sechs Monate und spätestens 15 Tage vor der Reise; die Entscheidung dauert meist etwa 15 Tage. Nötig sind eine Versicherung mit mindestens 30.000 € Deckung, Buchungen, ein Rückflugticket und Kontoauszüge. Ein Schengen-Visum jedes anderen Mitgliedstaats gilt ebenfalls.',
      visaRun:
        'Visa-Runs funktionieren nicht: Die 90/180-Regel zählt die Tage im gesamten Schengen-Raum, und auch Finnland, Lettland und Litauen gehören dazu. Ein Abstecher nach Großbritannien oder in die Türkei hält die Uhr nur an, setzt sie aber nie zurück.',
      nomad:
        'Das Digital Nomad Visa (ein nationales D-Visum) erlaubt bis zu einem Jahr in Estland, wenn du für einen ausländischen Arbeitgeber, deine eigene Auslandsfirma oder Kunden arbeitest. Das Einkommen muss in den letzten sechs Monaten mindestens 4.500 € brutto im Monat betragen haben; beantragt wird beim Konsulat oder – bei legalem Aufenthalt in Estland – bei der Polizei- und Grenzschutzbehörde.',
      hacks: [
        'Die Fähren von Tallink, Viking Line und Eckerö Line aus Helsinki brauchen rund zwei Stunden und bleiben im Schengen-Raum – ein beliebter Weg nach Tallinn, wenn Helsinki leichter zu erreichen ist.',
        'Busse von Lux Express verbinden Tallinn ohne Grenzkontrollen mit Riga und Vilnius – das Baltikum lässt sich bequem in einer Reise abdecken.',
        'Tage in Großbritannien, Irland, Zypern und der Türkei zählen nicht zu den Schengen-90/180 – so lässt sich eine lange Reise aufteilen.',
        'Mit dem EES (seit April 2026 voll in Betrieb) gibt es keine Stempel, die Tage werden automatisch gezählt. Prüfe vor der Reise dein Restguthaben mit dem offiziellen EU-Rechner.',
      ],
      pitfalls: [
        'Die estnische e-Residency ist eine digitale Signatur für Unternehmen, kein Visum und kein Aufenthaltsrecht; an der Grenze bringt sie nichts.',
        'Ein Visum für die einmalige Einreise ist mit dem Verlassen des Schengen-Raums verbraucht: Wer in Narva nach Iwangorod hinübergeht, darf nicht mehr zurück.',
        'ETIAS läuft noch nicht (frühestens Ende 2026, eher 2027) – zahl nichts an Seiten, die es jetzt „beantragen“.',
      ],
      passports: {
        RU: 'Seit dem 19. September 2022 verweigert Estland russischen Staatsangehörigen die Einreise zu touristischen, geschäftlichen, sportlichen und kulturellen Zwecken – auch mit dem Schengen-Visum eines anderen Landes. Ausnahmen gelten u. a. für enge Angehörige von EU-Bürgern und -Einwohnern, Inhaber von EU-Aufenthaltstiteln oder nationalen Visa, Diplomaten, Berufskraftfahrer und humanitäre Fälle. Autos mit russischem Kennzeichen werden nicht eingelassen, und der Übergang Narva–Iwangorod ist nur für Fußgänger und zu eingeschränkten Zeiten offen.',
        UA: 'Ukrainer mit biometrischem Pass brauchen kein Visum (90/180); der vorübergehende Schutz in der EU gilt bis 4. März 2027.',
        IN: 'Inder brauchen ein Schengen-Visum; nach zwei problemlosen Reisen gibt es ein Mehrfachvisum für zwei, dann für fünf Jahre.',
      },
    },
    fr: {
      summary:
        'Les citoyens de l’UE n’ont besoin que de leur carte d’identité. Les ressortissants des États-Unis, du Royaume-Uni, du Canada, d’Australie, du Japon, de Corée, du Brésil, du Mexique, des Émirats, d’Israël, d’Ukraine et de Géorgie entrent sans visa jusqu’à 90 jours sur 180 dans tout l’espace Schengen. Les autres, dont les citoyens indiens, chinois, turcs et kazakhs, ont besoin d’un visa Schengen. Depuis septembre 2022, l’Estonie refuse les ressortissants russes venant en touristes, même avec le visa d’un autre pays.',
      apply:
        'Si l’Estonie est votre destination principale, déposez la demande auprès d’un consulat ou centre de visas estonien : 90 €, ou 45 € pour les enfants de 6 à 12 ans. La demande se fait jusqu’à six mois avant et au plus tard 15 jours avant le départ ; la décision prend en général une quinzaine de jours. Il faut une assurance couvrant au moins 30 000 €, des réservations, un billet retour et des relevés bancaires. Un visa Schengen de tout autre État membre convient aussi.',
      visaRun:
        'Le visa run ne fonctionne pas : la règle des 90/180 compte les jours dans tout l’espace Schengen, dont font aussi partie la Finlande, la Lettonie et la Lituanie. Un saut au Royaume-Uni ou en Turquie ne fait que suspendre le compteur, sans jamais le remettre à zéro.',
      nomad:
        'Le visa nomade numérique (un visa long séjour D) permet de vivre jusqu’à un an en Estonie en travaillant pour un employeur étranger, votre propre société étrangère ou des clients. Les revenus doivent atteindre au moins 4 500 € bruts par mois sur les six derniers mois ; la demande se dépose dans un consulat ou, si vous êtes déjà légalement en Estonie, auprès de la police et des gardes-frontières.',
      hacks: [
        'Les ferries Tallink, Viking Line et Eckerö Line depuis Helsinki mettent environ deux heures et restent dans l’espace Schengen : une voie fréquente vers Tallinn si Helsinki est plus simple à rejoindre en avion.',
        'Les cars Lux Express relient Tallinn à Riga et Vilnius sans contrôle aux frontières : les pays baltes se parcourent facilement en un seul voyage.',
        'Les jours passés au Royaume-Uni, en Irlande, à Chypre et en Turquie ne comptent pas dans les 90/180 de Schengen : un long voyage peut ainsi être découpé.',
        'Avec l’EES (pleinement opérationnel depuis avril 2026), plus de tampons et les jours sont décomptés automatiquement. Vérifiez votre solde avec le calculateur officiel de l’UE avant le départ.',
      ],
      pitfalls: [
        'L’e-Residency estonienne est une signature numérique pour gérer une entreprise, ni un visa ni un droit de séjour : elle ne sert à rien à la frontière.',
        'Un visa à entrée unique est consommé dès la sortie de Schengen : passer à Narva vers Ivangorod vous prive du droit de revenir.',
        'ETIAS n’est pas encore en service (au plus tôt fin 2026, plus probablement 2027) : ne payez pas les sites qui le « délivrent » aujourd’hui.',
      ],
      passports: {
        RU: 'Depuis le 19 septembre 2022, l’Estonie refuse l’entrée aux ressortissants russes voyageant pour le tourisme, les affaires, le sport ou la culture, même avec un visa Schengen d’un autre pays. Exceptions : proches parents de citoyens et résidents de l’UE, titulaires d’un titre de séjour ou d’un visa long séjour de l’UE, diplomates, chauffeurs routiers et cas humanitaires. Les voitures immatriculées en Russie sont refusées, et le passage Narva–Ivangorod n’est ouvert qu’aux piétons, à horaires réduits.',
        UA: 'Les citoyens ukrainiens munis d’un passeport biométrique n’ont pas besoin de visa (90/180) ; la protection temporaire de l’UE court jusqu’au 4 mars 2027.',
        IN: 'Les citoyens indiens ont besoin d’un visa Schengen ; après deux voyages sans incident, ils peuvent obtenir un visa à entrées multiples de deux ans, puis de cinq ans.',
      },
    },
    it: {
      summary:
        'Ai cittadini UE basta la carta d’identità. I cittadini di Stati Uniti, Regno Unito, Canada, Australia, Giappone, Corea, Brasile, Messico, Emirati, Israele, Ucraina e Georgia entrano senza visto fino a 90 giorni ogni 180 in tutta l’area Schengen. Tutti gli altri, compresi i cittadini di India, Cina, Turchia e Kazakistan, hanno bisogno del visto Schengen. Da settembre 2022 l’Estonia respinge i cittadini russi che viaggiano come turisti, anche con il visto di un altro paese.',
      apply:
        'Se l’Estonia è la meta principale, fai domanda a un consolato o centro visti estone: 90 €, 45 € per i bambini dai 6 ai 12 anni. Puoi presentarla fino a sei mesi prima e almeno 15 giorni prima; la decisione arriva di solito in circa 15 giorni. Servono un’assicurazione con almeno 30.000 € di copertura, prenotazioni, biglietto di ritorno ed estratti conto. Va bene anche un visto Schengen di qualsiasi altro Stato membro.',
      visaRun:
        'Il visa run non funziona: la regola 90/180 conta i giorni in tutta l’area Schengen, di cui fanno parte anche Finlandia, Lettonia e Lituania. Una gita nel Regno Unito o in Turchia mette solo in pausa il contatore, senza mai azzerarlo.',
      nomad:
        'Il visto per nomadi digitali (un visto D di lungo soggiorno) consente di vivere in Estonia fino a un anno lavorando per un datore di lavoro estero, una tua società estera o clienti. Il reddito deve essere di almeno 4.500 € lordi al mese negli ultimi sei mesi; si chiede in consolato oppure, se sei già legalmente in Estonia, alla Polizia e Guardia di frontiera.',
      hacks: [
        'I traghetti Tallink, Viking Line ed Eckerö Line da Helsinki impiegano circa due ore e restano in area Schengen: una via frequente per Tallinn se è più comodo volare a Helsinki.',
        'I bus Lux Express collegano Tallinn a Riga e Vilnius senza controlli di frontiera: i paesi baltici si girano facilmente in un unico viaggio.',
        'I giorni nel Regno Unito, in Irlanda, a Cipro e in Turchia non contano per i 90/180 di Schengen: così puoi dividere un viaggio lungo.',
        'Con l’EES (pienamente attivo da aprile 2026) niente timbri e i giorni si contano in automatico. Prima di partire controlla il saldo con il calcolatore ufficiale UE.',
      ],
      pitfalls: [
        'La e-Residency estone è una firma digitale per gestire un’azienda, non un visto né un diritto di soggiorno: alla frontiera non serve a nulla.',
        'Un visto a ingresso singolo si esaurisce appena esci da Schengen: passare a Narva verso Ivangorod ti toglie il diritto di rientrare.',
        'ETIAS non è ancora attivo (non prima di fine 2026, più probabilmente nel 2027): non pagare i siti che lo «rilasciano» ora.',
      ],
      passports: {
        RU: 'Dal 19 settembre 2022 l’Estonia nega l’ingresso ai cittadini russi in viaggio per turismo, affari, sport o cultura, anche con un visto Schengen di un altro paese. Fanno eccezione i familiari stretti di cittadini e residenti UE, i titolari di permessi di soggiorno o visti nazionali UE, i diplomatici, gli autotrasportatori e i casi umanitari. Le auto con targa russa non entrano, e il valico Narva–Ivangorod è aperto solo ai pedoni e con orari ridotti.',
        UA: 'I cittadini ucraini con passaporto biometrico non hanno bisogno del visto (90/180); la protezione temporanea UE vale fino al 4 marzo 2027.',
        IN: 'I cittadini indiani hanno bisogno del visto Schengen; dopo due viaggi senza problemi possono ottenere un visto per ingressi multipli di due anni, poi di cinque.',
      },
    },
  },
};

export default guide;
