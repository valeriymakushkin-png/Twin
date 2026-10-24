import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'LV',
  checked: '2026-10',
  overrides: {
    // Since 19 Sep 2022 Latvia refuses Russian citizens travelling for tourism, whichever state issued the Schengen visa
    RU: { status: 'banned' },
  },
  fees: { visa: { kind: 'fixed', amount: 90, currency: 'EUR' } },
  stay: { visa: 90 },
  links: { immigration: 'https://www.pmlp.gov.lv/en' },
  docs: ['insurance', 'returnTicket', 'booking', 'finance'],
  passportMonths: 3,
  rule: { days: 90, window: 180 },
  visaRun: 'no',
  nomad: { name: 'Remote work (digital nomad) visa', months: 12 },
  hackScope: [null, null, ['regime:free', 'regime:required'], ['regime:free', 'regime:required']],
  pitfallScope: [['regime:required'], ['regime:free'], ['regime:free', 'regime:required']],
  text: {
    ru: {
      summary:
        'Гражданам ЕС достаточно ID-карты. Граждане США, Великобритании, Канады, Австралии, Японии, Кореи, Бразилии, Мексики, ОАЭ, Израиля, Украины и Грузии въезжают без визы до 90 дней в любые 180 по всему Шенгену. Остальным, включая граждан Индии, Китая, Турции и Казахстана, нужна шенгенская виза. Граждан России с туристическими целями Латвия не впускает с сентября 2022 года — даже по визе другой страны.',
      apply:
        'Если Латвия — основная страна поездки, подавайтесь в латвийское консульство или визовый центр: сбор 90 €, для детей 6–12 лет — 45 €. Подать можно за полгода, но не позже чем за 15 дней; решение обычно около 15 дней. Нужны страховка с покрытием от 30 000 €, брони, обратный билет и выписка со счёта. Подойдёт и шенгенская виза любой другой страны.',
      visaRun:
        'Визаран не работает: правило 90/180 считает дни во всём Шенгене, а Эстония и Литва — тоже Шенген. Выезд в Великобританию или Турцию лишь ставит счётчик на паузу, но не обнуляет его.',
      nomad:
        'Латвийская виза для удалённой работы выдаётся на срок до года, если ваш работодатель или собственная компания зарегистрированы в стране ОЭСР. Порог дохода привязан к средней зарплате в Латвии и пересчитывается — по оценкам 2026 года это от 3200 до 4500 € в месяц, точную сумму проверьте на сайте PMLP. Нужна страховка на весь срок.',
      hacks: [
        'Рижский аэропорт — хаб airBaltic с прямыми рейсами в десятки городов Шенгена: удобно стартовать поездку по Европе отсюда, внутренние рейсы идут без паспортного контроля.',
        'Автобусы Lux Express и FlixBus связывают Ригу с Таллином и Вильнюсом без пограничного контроля — Прибалтика объезжается за одну поездку.',
        'Дни в Великобритании, Ирландии, на Кипре и в Турции не входят в шенгенские 90/180 — длинную поездку можно разбить.',
        'С запуском EES (полностью с апреля 2026 года) штампов нет: дни считаются автоматически. Перед поездкой проверьте остаток в официальном калькуляторе ЕС.',
      ],
      pitfalls: [
        'Однократная виза сгорает при выезде из Шенгена: поездка в Россию или Беларусь через Терехово или Патерниеки оставит вас без права вернуться.',
        'ETIAS ещё не работает (запуск не раньше конца 2026, вероятнее 2027) — не платите сайтам, которые «оформляют» его сейчас.',
        'Паспорт должен быть выдан не более 10 лет назад и действовать ещё 3 месяца после выезда из Шенгена.',
      ],
      passports: {
        RU: 'С 19 сентября 2022 года Латвия не впускает граждан России с туристическими целями, даже по шенгенской визе другой страны; исключения — родственники граждан и резидентов ЕС, владельцы ВНЖ, дипломаты, перевозчики, гуманитарные случаи. С 15 июля 2025 года Латвия также не признаёт небиометрические загранпаспорта РФ: даже с визой по ним не впустят. Машины с российскими номерами не допускаются.',
        UA: 'Гражданам Украины с биометрическим паспортом виза не нужна (90/180); временная защита в ЕС продлена до 4 марта 2027 года.',
        IN: 'Гражданам Индии нужна шенгенская виза; после двух поездок без нарушений положена многократная виза на два, затем на пять лет.',
      },
    },
    en: {
      summary:
        'EU citizens just need an ID card. Citizens of the US, UK, Canada, Australia, Japan, Korea, Brazil, Mexico, the UAE, Israel, Ukraine and Georgia enter visa-free for up to 90 days in any 180 across the Schengen area. Everyone else, including citizens of India, China, Turkey and Kazakhstan, needs a Schengen visa. Since September 2022, Latvia refuses Russian citizens travelling as tourists, even with another country’s visa.',
      apply:
        'If Latvia is your main destination, apply at a Latvian consulate or visa centre: the fee is €90, or €45 for children aged 6–12. Apply up to six months ahead and at least 15 days before the trip; decisions usually take about 15 days. You need insurance with at least €30,000 cover, bookings, a return ticket and bank statements. A Schengen visa from any other member state works too.',
      visaRun:
        'Visa runs do not work: the 90/180 rule counts days across the whole Schengen area, and Estonia and Lithuania are Schengen too. A trip to the UK or Turkey only pauses the clock; it never resets it.',
      nomad:
        'Latvia’s remote-work visa is issued for up to a year if your employer or your own company is registered in an OECD country. The income bar is tied to the Latvian average wage and recalculated — 2026 estimates range from €3,200 to €4,500 a month, so check the exact figure on the PMLP site. You need insurance for the whole stay.',
      hacks: [
        'Riga Airport is airBaltic’s hub, with direct flights to dozens of Schengen cities — a handy starting point for a European trip, as intra-Schengen flights have no passport control.',
        'Lux Express and FlixBus coaches link Riga with Tallinn and Vilnius with no border checks, so the Baltics are easy to cover in one trip.',
        'Days in the UK, Ireland, Cyprus and Turkey do not count towards the Schengen 90/180, so a long trip can be split.',
        'With the EES (fully live since April 2026) there are no stamps and days are counted automatically. Check your balance with the EU’s official calculator before you travel.',
      ],
      pitfalls: [
        'A single-entry visa is spent once you leave Schengen: a trip into Russia or Belarus via Terehova or Pāternieki leaves you with no right to come back.',
        'ETIAS is not running yet (late 2026 at the earliest, more likely 2027) — do not pay sites that “process” it now.',
        'Your passport must have been issued within the last 10 years and be valid for 3 months after you leave the Schengen area.',
      ],
      passports: {
        RU: 'Since 19 September 2022, Latvia has refused Russian citizens travelling for tourism, even with another country’s Schengen visa; exceptions cover relatives of EU citizens and residents, residence-permit holders, diplomats, transport workers and humanitarian cases. Since 15 July 2025, Latvia also no longer recognises non-biometric Russian passports: you will be refused even with a visa. Russian-registered cars are not admitted.',
        UA: 'Ukrainian citizens with a biometric passport need no visa (90/180); EU temporary protection has been extended to 4 March 2027.',
        IN: 'Indian citizens need a Schengen visa; after two trouble-free trips you qualify for a two-year, then a five-year multiple-entry visa.',
      },
    },
    es: {
      summary:
        'A los ciudadanos de la UE les basta el DNI. Los de EE. UU., Reino Unido, Canadá, Australia, Japón, Corea, Brasil, México, Emiratos, Israel, Ucrania y Georgia entran sin visado hasta 90 días en cualquier periodo de 180 en todo Schengen. El resto, incluidos los ciudadanos de India, China, Turquía y Kazajistán, necesita visado Schengen. Desde septiembre de 2022, Letonia no admite a ciudadanos rusos que viajan como turistas, ni siquiera con visado de otro país.',
      apply:
        'Si Letonia es tu destino principal, solicita el visado en un consulado o centro de visados letón: cuesta 90 € (45 € para niños de 6 a 12 años). Puedes presentarlo hasta seis meses antes y al menos 15 días antes; la resolución suele tardar unos 15 días. Necesitas un seguro con al menos 30 000 € de cobertura, reservas, billete de vuelta y extractos bancarios. También vale un visado Schengen de cualquier otro país miembro.',
      visaRun:
        'Los visa runs no funcionan: la regla 90/180 cuenta los días en todo Schengen, y Estonia y Lituania también son Schengen. Un viaje al Reino Unido o a Turquía solo detiene el contador; nunca lo reinicia.',
      nomad:
        'El visado letón para trabajo en remoto se concede hasta por un año si tu empleador o tu propia empresa están registrados en un país de la OCDE. El umbral de ingresos va ligado al salario medio letón y se recalcula: las estimaciones de 2026 oscilan entre 3200 y 4500 € al mes, así que confirma la cifra exacta en la web de la PMLP. Necesitas seguro para toda la estancia.',
      hacks: [
        'El aeropuerto de Riga es el centro de operaciones de airBaltic, con vuelos directos a decenas de ciudades Schengen: buen punto de partida para recorrer Europa, ya que los vuelos internos no tienen control de pasaportes.',
        'Los autobuses de Lux Express y FlixBus unen Riga con Tallin y Vilna sin controles fronterizos, así que los países bálticos se recorren fácilmente en un solo viaje.',
        'Los días en Reino Unido, Irlanda, Chipre y Turquía no cuentan para los 90/180 de Schengen, así que puedes dividir un viaje largo.',
        'Con el EES (plenamente operativo desde abril de 2026) no hay sellos y los días se cuentan solos. Consulta tu saldo en la calculadora oficial de la UE antes de viajar.',
      ],
      pitfalls: [
        'Un visado de una sola entrada se agota al salir de Schengen: un viaje a Rusia o Bielorrusia por Terehova o Pāternieki te deja sin derecho a volver.',
        'ETIAS aún no funciona (como pronto a finales de 2026, probablemente en 2027): no pagues a webs que lo «tramitan» ahora.',
        'El pasaporte debe haberse expedido hace menos de 10 años y ser válido 3 meses después de salir de Schengen.',
      ],
      passports: {
        RU: 'Desde el 19 de septiembre de 2022, Letonia deniega la entrada a ciudadanos rusos que viajan por turismo, aunque tengan visado Schengen de otro país; hay excepciones para familiares de ciudadanos y residentes de la UE, titulares de permisos de residencia, diplomáticos, transportistas y casos humanitarios. Desde el 15 de julio de 2025, Letonia tampoco reconoce los pasaportes rusos no biométricos: con ellos se deniega la entrada incluso con visado. No se admiten coches con matrícula rusa.',
        UA: 'Los ciudadanos ucranianos con pasaporte biométrico no necesitan visado (90/180); la protección temporal de la UE se ha prorrogado hasta el 4 de marzo de 2027.',
        IN: 'Los ciudadanos indios necesitan visado Schengen; tras dos viajes sin incidencias, optan a uno de entradas múltiples de dos años y luego de cinco.',
      },
    },
    de: {
      summary:
        'EU-Bürgern genügt der Personalausweis. Staatsangehörige der USA, Großbritanniens, Kanadas, Australiens, Japans, Koreas, Brasiliens, Mexikos, der VAE, Israels, der Ukraine und Georgiens reisen visumfrei bis zu 90 Tage innerhalb von 180 Tagen im ganzen Schengen-Raum. Alle anderen, auch Bürger Indiens, Chinas, der Türkei und Kasachstans, brauchen ein Schengen-Visum. Russische Staatsangehörige weist Lettland seit September 2022 als Touristen ab – selbst mit dem Visum eines anderen Landes.',
      apply:
        'Ist Lettland dein Hauptreiseziel, beantragst du das Visum bei einem lettischen Konsulat oder Visazentrum: 90 €, für Kinder von 6 bis 12 Jahren 45 €. Der Antrag geht frühestens sechs Monate und spätestens 15 Tage vor der Reise; die Entscheidung dauert meist etwa 15 Tage. Nötig sind eine Versicherung mit mindestens 30.000 € Deckung, Buchungen, ein Rückflugticket und Kontoauszüge. Ein Schengen-Visum jedes anderen Mitgliedstaats gilt ebenfalls.',
      visaRun:
        'Visa-Runs funktionieren nicht: Die 90/180-Regel zählt die Tage im gesamten Schengen-Raum, und auch Estland und Litauen gehören dazu. Ein Abstecher nach Großbritannien oder in die Türkei hält die Uhr nur an, setzt sie aber nie zurück.',
      nomad:
        'Lettlands Visum für Remote-Arbeit gilt bis zu einem Jahr, wenn dein Arbeitgeber oder deine eigene Firma in einem OECD-Staat registriert ist. Die Einkommensgrenze hängt am lettischen Durchschnittslohn und wird neu berechnet – Schätzungen für 2026 liegen zwischen 3.200 und 4.500 € im Monat, den genauen Betrag nennt die Website der PMLP. Eine Versicherung für den ganzen Aufenthalt ist Pflicht.',
      hacks: [
        'Der Flughafen Riga ist das Drehkreuz von airBaltic mit Direktflügen in Dutzende Schengen-Städte – ein praktischer Startpunkt für eine Europareise, denn Flüge innerhalb des Schengen-Raums haben keine Passkontrolle.',
        'Busse von Lux Express und FlixBus verbinden Riga ohne Grenzkontrollen mit Tallinn und Vilnius – das Baltikum lässt sich bequem in einer Reise abdecken.',
        'Tage in Großbritannien, Irland, Zypern und der Türkei zählen nicht zu den Schengen-90/180 – so lässt sich eine lange Reise aufteilen.',
        'Mit dem EES (seit April 2026 voll in Betrieb) gibt es keine Stempel, die Tage werden automatisch gezählt. Prüfe vor der Reise dein Restguthaben mit dem offiziellen EU-Rechner.',
      ],
      pitfalls: [
        'Ein Visum für die einmalige Einreise ist mit dem Verlassen des Schengen-Raums verbraucht: Eine Fahrt nach Russland oder Belarus über Terehova oder Pāternieki kostet dich das Rückkehrrecht.',
        'ETIAS läuft noch nicht (frühestens Ende 2026, eher 2027) – zahl nichts an Seiten, die es jetzt „beantragen“.',
        'Der Pass muss in den letzten 10 Jahren ausgestellt sein und noch 3 Monate nach der Ausreise aus dem Schengen-Raum gelten.',
      ],
      passports: {
        RU: 'Seit dem 19. September 2022 verweigert Lettland russischen Staatsangehörigen die Einreise zu touristischen Zwecken, auch mit dem Schengen-Visum eines anderen Landes; Ausnahmen gelten für Angehörige von EU-Bürgern und -Einwohnern, Inhaber von Aufenthaltstiteln, Diplomaten, Transportpersonal und humanitäre Fälle. Seit 15. Juli 2025 erkennt Lettland zudem keine nicht-biometrischen russischen Reisepässe mehr an – damit wirst du selbst mit Visum abgewiesen. Autos mit russischem Kennzeichen werden nicht eingelassen.',
        UA: 'Ukrainer mit biometrischem Pass brauchen kein Visum (90/180); der vorübergehende Schutz in der EU gilt bis 4. März 2027.',
        IN: 'Inder brauchen ein Schengen-Visum; nach zwei problemlosen Reisen gibt es ein Mehrfachvisum für zwei, dann für fünf Jahre.',
      },
    },
    fr: {
      summary:
        'Les citoyens de l’UE n’ont besoin que de leur carte d’identité. Les ressortissants des États-Unis, du Royaume-Uni, du Canada, d’Australie, du Japon, de Corée, du Brésil, du Mexique, des Émirats, d’Israël, d’Ukraine et de Géorgie entrent sans visa jusqu’à 90 jours sur 180 dans tout l’espace Schengen. Les autres, dont les citoyens indiens, chinois, turcs et kazakhs, ont besoin d’un visa Schengen. Depuis septembre 2022, la Lettonie refuse les ressortissants russes venant en touristes, même avec le visa d’un autre pays.',
      apply:
        'Si la Lettonie est votre destination principale, déposez la demande auprès d’un consulat ou centre de visas letton : 90 €, ou 45 € pour les enfants de 6 à 12 ans. La demande se fait jusqu’à six mois avant et au plus tard 15 jours avant le départ ; la décision prend en général une quinzaine de jours. Il faut une assurance couvrant au moins 30 000 €, des réservations, un billet retour et des relevés bancaires. Un visa Schengen de tout autre État membre convient aussi.',
      visaRun:
        'Le visa run ne fonctionne pas : la règle des 90/180 compte les jours dans tout l’espace Schengen, dont font aussi partie l’Estonie et la Lituanie. Un saut au Royaume-Uni ou en Turquie ne fait que suspendre le compteur, sans jamais le remettre à zéro.',
      nomad:
        'Le visa letton de télétravail est délivré pour un an maximum si votre employeur ou votre propre société est enregistré dans un pays de l’OCDE. Le seuil de revenus dépend du salaire moyen letton et est recalculé : les estimations 2026 vont de 3 200 à 4 500 € par mois, vérifiez donc le montant exact sur le site de la PMLP. Une assurance couvrant tout le séjour est exigée.',
      hacks: [
        'L’aéroport de Riga est la plateforme d’airBaltic, avec des vols directs vers des dizaines de villes Schengen : un bon point de départ pour un voyage en Europe, les vols intra-Schengen n’ayant pas de contrôle des passeports.',
        'Les cars Lux Express et FlixBus relient Riga à Tallinn et Vilnius sans contrôle aux frontières : les pays baltes se parcourent facilement en un seul voyage.',
        'Les jours passés au Royaume-Uni, en Irlande, à Chypre et en Turquie ne comptent pas dans les 90/180 de Schengen : un long voyage peut ainsi être découpé.',
        'Avec l’EES (pleinement opérationnel depuis avril 2026), plus de tampons et les jours sont décomptés automatiquement. Vérifiez votre solde avec le calculateur officiel de l’UE avant le départ.',
      ],
      pitfalls: [
        'Un visa à entrée unique est consommé dès la sortie de Schengen : un passage en Russie ou en Biélorussie par Terehova ou Pāternieki vous prive du droit de revenir.',
        'ETIAS n’est pas encore en service (au plus tôt fin 2026, plus probablement 2027) : ne payez pas les sites qui le « délivrent » aujourd’hui.',
        'Le passeport doit avoir moins de 10 ans et rester valable 3 mois après la sortie de l’espace Schengen.',
      ],
      passports: {
        RU: 'Depuis le 19 septembre 2022, la Lettonie refuse les ressortissants russes venant en touristes, même avec un visa Schengen d’un autre pays ; des exceptions existent pour les proches de citoyens et résidents de l’UE, les titulaires de titres de séjour, les diplomates, le personnel de transport et les cas humanitaires. Depuis le 15 juillet 2025, la Lettonie ne reconnaît plus non plus les passeports russes non biométriques : l’entrée est refusée même avec un visa. Les voitures immatriculées en Russie sont refusées.',
        UA: 'Les citoyens ukrainiens munis d’un passeport biométrique n’ont pas besoin de visa (90/180) ; la protection temporaire de l’UE court jusqu’au 4 mars 2027.',
        IN: 'Les citoyens indiens ont besoin d’un visa Schengen ; après deux voyages sans incident, ils peuvent obtenir un visa à entrées multiples de deux ans, puis de cinq ans.',
      },
    },
    it: {
      summary:
        'Ai cittadini UE basta la carta d’identità. I cittadini di Stati Uniti, Regno Unito, Canada, Australia, Giappone, Corea, Brasile, Messico, Emirati, Israele, Ucraina e Georgia entrano senza visto fino a 90 giorni ogni 180 in tutta l’area Schengen. Tutti gli altri, compresi i cittadini di India, Cina, Turchia e Kazakistan, hanno bisogno del visto Schengen. Da settembre 2022 la Lettonia respinge i cittadini russi che viaggiano come turisti, anche con il visto di un altro paese.',
      apply:
        'Se la Lettonia è la meta principale, fai domanda a un consolato o centro visti lettone: 90 €, 45 € per i bambini dai 6 ai 12 anni. Puoi presentarla fino a sei mesi prima e almeno 15 giorni prima; la decisione arriva di solito in circa 15 giorni. Servono un’assicurazione con almeno 30.000 € di copertura, prenotazioni, biglietto di ritorno ed estratti conto. Va bene anche un visto Schengen di qualsiasi altro Stato membro.',
      visaRun:
        'Il visa run non funziona: la regola 90/180 conta i giorni in tutta l’area Schengen, di cui fanno parte anche Estonia e Lituania. Una gita nel Regno Unito o in Turchia mette solo in pausa il contatore, senza mai azzerarlo.',
      nomad:
        'Il visto lettone per il lavoro da remoto viene rilasciato fino a un anno se il tuo datore di lavoro o la tua società sono registrati in un paese OCSE. La soglia di reddito è legata allo stipendio medio lettone e viene ricalcolata: le stime 2026 vanno da 3.200 a 4.500 € al mese, quindi verifica la cifra esatta sul sito della PMLP. Serve un’assicurazione per tutto il soggiorno.',
      hacks: [
        'L’aeroporto di Riga è l’hub di airBaltic, con voli diretti verso decine di città Schengen: un buon punto di partenza per un giro in Europa, perché i voli interni all’area non hanno controllo passaporti.',
        'I bus Lux Express e FlixBus collegano Riga a Tallinn e Vilnius senza controlli di frontiera: i paesi baltici si girano facilmente in un unico viaggio.',
        'I giorni nel Regno Unito, in Irlanda, a Cipro e in Turchia non contano per i 90/180 di Schengen: così puoi dividere un viaggio lungo.',
        'Con l’EES (pienamente attivo da aprile 2026) niente timbri e i giorni si contano in automatico. Prima di partire controlla il saldo con il calcolatore ufficiale UE.',
      ],
      pitfalls: [
        'Un visto a ingresso singolo si esaurisce appena esci da Schengen: un viaggio in Russia o Bielorussia da Terehova o Pāternieki ti toglie il diritto di rientrare.',
        'ETIAS non è ancora attivo (non prima di fine 2026, più probabilmente nel 2027): non pagare i siti che lo «rilasciano» ora.',
        'Il passaporto deve essere stato rilasciato da meno di 10 anni e valere ancora 3 mesi dopo l’uscita da Schengen.',
      ],
      passports: {
        RU: 'Dal 19 settembre 2022 la Lettonia nega l’ingresso ai cittadini russi in viaggio per turismo, anche con un visto Schengen di un altro paese; fanno eccezione i familiari di cittadini e residenti UE, i titolari di permessi di soggiorno, i diplomatici, il personale dei trasporti e i casi umanitari. Dal 15 luglio 2025 la Lettonia non riconosce più neppure i passaporti russi non biometrici: con questi l’ingresso è negato anche con visto. Le auto con targa russa non sono ammesse.',
        UA: 'I cittadini ucraini con passaporto biometrico non hanno bisogno del visto (90/180); la protezione temporanea UE vale fino al 4 marzo 2027.',
        IN: 'I cittadini indiani hanno bisogno del visto Schengen; dopo due viaggi senza problemi possono ottenere un visto per ingressi multipli di due anni, poi di cinque.',
      },
    },
  },
};

export default guide;
