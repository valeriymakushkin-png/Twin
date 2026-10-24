import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'LT',
  checked: '2026-10',
  overrides: {
    // Since 19 Sep 2022 Lithuania refuses Russian citizens travelling for tourism, whichever state issued the Schengen visa
    RU: { status: 'banned' },
  },
  fees: { visa: { kind: 'fixed', amount: 90, currency: 'EUR' } },
  stay: { visa: 90 },
  links: { immigration: 'https://keliauk.urm.lt' },
  docs: ['insurance', 'returnTicket', 'booking', 'finance'],
  passportMonths: 3,
  rule: { days: 90, window: 180 },
  visaRun: 'no',
  hackScope: [null, null, null, ['regime:free', 'regime:required']],
  pitfallScope: [null, ['regime:required'], ['regime:free']],
  text: {
    ru: {
      summary:
        'Гражданам ЕС достаточно ID-карты. Граждане США, Великобритании, Канады, Австралии, Японии, Кореи, Бразилии, Мексики, ОАЭ, Израиля, Украины и Грузии въезжают без визы до 90 дней в любые 180 по всему Шенгену. Остальным, включая граждан Беларуси, Индии, Китая, Турции и Казахстана, нужна шенгенская виза. Граждан России с туристическими целями Литва не впускает с сентября 2022 года — даже по визе другой страны.',
      apply:
        'Если Литва — основная страна поездки, подавайтесь в литовское консульство или визовый центр: сбор 90 €, для детей 6–12 лет — 45 €. Подать можно за полгода, но не позже чем за 15 дней; решение обычно около 15 дней. Нужны страховка с покрытием от 30 000 €, брони, обратный билет и выписка со счёта. Подойдёт и шенгенская виза любой другой страны.',
      visaRun:
        'Визаран не работает: правило 90/180 считает дни во всём Шенгене, а Польша и Латвия — тоже Шенген. Выезд в Великобританию или Турцию лишь ставит счётчик на паузу, но не обнуляет его.',
      hacks: [
        'Каунас — база Ryanair с дешёвыми рейсами по Европе, а от Каунаса до Вильнюса около часа на поезде LTG Link: часто это дешевле прямого перелёта в столицу.',
        'Автобусы Lux Express и FlixBus идут из Вильнюса в Ригу и Таллин без пограничного контроля — Прибалтику легко объехать за одну поездку.',
        'С июля 2025 года Польша проверяет документы на границе с Литвой: в поезде или автобусе Вильнюс — Варшава держите паспорт при себе.',
        'С запуском EES (полностью с апреля 2026 года) штампов нет: дни считаются автоматически. Перед поездкой проверьте остаток в официальном калькуляторе ЕС.',
      ],
      pitfalls: [
        'Куршская коса граничит с Калининградской областью: южнее Ниды начинается граница, переходить её или фотографировать погранзону не стоит.',
        'Однократная виза сгорает при выезде из Шенгена: поездка в Беларусь через Мядининкай оставит вас без права вернуться.',
        'ETIAS ещё не работает (запуск не раньше конца 2026, вероятнее 2027) — не платите сайтам, которые «оформляют» его сейчас.',
      ],
      passports: {
        RU: 'С 19 сентября 2022 года Литва не впускает граждан России с туристическими целями, даже по шенгенской визе другой страны; исключения — родственники граждан и резидентов ЕС, владельцы ВНЖ, дипломаты, перевозчики и гуманитарные случаи. Транзит поездом между Калининградом и остальной Россией возможен по упрощённому транзитному документу (УПД), но без выхода из поезда. Машины с российскими номерами не пускают.',
        BY: 'Белорусам нужна шенгенская виза. Для легковых машин и автобусов открыты только переходы Мядининкай и Шальчининкай, и Литва может закрыть их внезапно — так было осенью 2025 года. Проверяйте новости погранслужбы перед выездом.',
        UA: 'Гражданам Украины с биометрическим паспортом виза не нужна (90/180); временная защита в ЕС продлена до 4 марта 2027 года.',
        IN: 'Гражданам Индии нужна шенгенская виза; после двух поездок без нарушений положена многократная виза на два, затем на пять лет.',
      },
    },
    en: {
      summary:
        'EU citizens just need an ID card. Citizens of the US, UK, Canada, Australia, Japan, Korea, Brazil, Mexico, the UAE, Israel, Ukraine and Georgia enter visa-free for up to 90 days in any 180 across the Schengen area. Everyone else, including citizens of Belarus, India, China, Turkey and Kazakhstan, needs a Schengen visa. Since September 2022, Lithuania refuses Russian citizens travelling as tourists, even with another country’s visa.',
      apply:
        'If Lithuania is your main destination, apply at a Lithuanian consulate or visa centre: the fee is €90, or €45 for children aged 6–12. Apply up to six months ahead and at least 15 days before the trip; decisions usually take about 15 days. You need insurance with at least €30,000 cover, bookings, a return ticket and bank statements. A Schengen visa from any other member state works too.',
      visaRun:
        'Visa runs do not work: the 90/180 rule counts days across the whole Schengen area, and Poland and Latvia are Schengen too. A trip to the UK or Turkey only pauses the clock; it never resets it.',
      hacks: [
        'Kaunas is a Ryanair base with cheap flights across Europe, and LTG Link trains take about an hour to Vilnius — often cheaper than flying straight to the capital.',
        'Lux Express and FlixBus coaches run from Vilnius to Riga and Tallinn with no border checks, so the Baltics are easy to cover in one trip.',
        'Since July 2025, Poland has been checking documents at its Lithuanian border: keep your passport on you on the Vilnius–Warsaw train or bus.',
        'With the EES (fully live since April 2026) there are no stamps and days are counted automatically. Check your balance with the EU’s official calculator before you travel.',
      ],
      pitfalls: [
        'The Curonian Spit borders Russia’s Kaliningrad region: the border starts just south of Nida, so do not cross it or photograph the border zone.',
        'A single-entry visa is spent once you leave Schengen: a trip into Belarus via Medininkai leaves you with no right to come back.',
        'ETIAS is not running yet (late 2026 at the earliest, more likely 2027) — do not pay sites that “process” it now.',
      ],
      passports: {
        RU: 'Since 19 September 2022, Lithuania has refused Russian citizens travelling for tourism, even with another country’s Schengen visa; exceptions cover relatives of EU citizens and residents, residence-permit holders, diplomats, transport workers and humanitarian cases. Rail transit between Kaliningrad and the rest of Russia is possible on a Facilitated Rail Transit Document, without leaving the train. Russian-registered cars are not admitted.',
        BY: 'Belarusian citizens need a Schengen visa. Only the Medininkai and Šalčininkai crossings are open to cars and buses, and Lithuania can close them at short notice, as it did in autumn 2025. Check border-guard news before setting off.',
        UA: 'Ukrainian citizens with a biometric passport need no visa (90/180); EU temporary protection has been extended to 4 March 2027.',
        IN: 'Indian citizens need a Schengen visa; after two trouble-free trips you qualify for a two-year, then a five-year multiple-entry visa.',
      },
    },
    es: {
      summary:
        'A los ciudadanos de la UE les basta el DNI. Los de EE. UU., Reino Unido, Canadá, Australia, Japón, Corea, Brasil, México, Emiratos, Israel, Ucrania y Georgia entran sin visado hasta 90 días en cualquier periodo de 180 en todo Schengen. El resto, incluidos los ciudadanos de Bielorrusia, India, China, Turquía y Kazajistán, necesita visado Schengen. Desde septiembre de 2022, Lituania no admite a ciudadanos rusos que viajan como turistas, ni siquiera con visado de otro país.',
      apply:
        'Si Lituania es tu destino principal, solicita el visado en un consulado o centro de visados lituano: cuesta 90 € (45 € para niños de 6 a 12 años). Puedes presentarlo hasta seis meses antes y al menos 15 días antes; la resolución suele tardar unos 15 días. Necesitas un seguro con al menos 30 000 € de cobertura, reservas, billete de vuelta y extractos bancarios. También vale un visado Schengen de cualquier otro país miembro.',
      visaRun:
        'Los visa runs no funcionan: la regla 90/180 cuenta los días en todo Schengen, y Polonia y Letonia también son Schengen. Un viaje al Reino Unido o a Turquía solo detiene el contador; nunca lo reinicia.',
      hacks: [
        'Kaunas es base de Ryanair con vuelos baratos por toda Europa, y el tren LTG Link tarda alrededor de una hora hasta Vilna: a menudo sale más barato que volar directamente a la capital.',
        'Los autobuses de Lux Express y FlixBus van de Vilna a Riga y Tallin sin controles fronterizos, así que los países bálticos se recorren fácilmente en un solo viaje.',
        'Desde julio de 2025, Polonia controla documentos en su frontera con Lituania: lleva el pasaporte encima en el tren o el autobús Vilna–Varsovia.',
        'Con el EES (plenamente operativo desde abril de 2026) no hay sellos y los días se cuentan solos. Consulta tu saldo en la calculadora oficial de la UE antes de viajar.',
      ],
      pitfalls: [
        'El istmo de Curlandia limita con la región rusa de Kaliningrado: la frontera empieza justo al sur de Nida, así que no la cruces ni fotografíes la zona fronteriza.',
        'Un visado de una sola entrada se agota al salir de Schengen: un viaje a Bielorrusia por Medininkai te deja sin derecho a volver.',
        'ETIAS aún no funciona (como pronto a finales de 2026, probablemente en 2027): no pagues a webs que lo «tramitan» ahora.',
      ],
      passports: {
        RU: 'Desde el 19 de septiembre de 2022, Lituania deniega la entrada a ciudadanos rusos que viajan por turismo, aunque tengan visado Schengen de otro país; hay excepciones para familiares de ciudadanos y residentes de la UE, titulares de permisos de residencia, diplomáticos, transportistas y casos humanitarios. El tránsito en tren entre Kaliningrado y el resto de Rusia es posible con un documento simplificado de tránsito ferroviario, sin bajar del tren. No se admiten coches con matrícula rusa.',
        BY: 'Los ciudadanos bielorrusos necesitan visado Schengen. Para coches y autobuses solo están abiertos los pasos de Medininkai y Šalčininkai, y Lituania puede cerrarlos sin apenas aviso, como hizo en otoño de 2025. Consulta las noticias de la guardia fronteriza antes de salir.',
        UA: 'Los ciudadanos ucranianos con pasaporte biométrico no necesitan visado (90/180); la protección temporal de la UE se ha prorrogado hasta el 4 de marzo de 2027.',
        IN: 'Los ciudadanos indios necesitan visado Schengen; tras dos viajes sin incidencias, optan a uno de entradas múltiples de dos años y luego de cinco.',
      },
    },
    de: {
      summary:
        'EU-Bürgern genügt der Personalausweis. Staatsangehörige der USA, Großbritanniens, Kanadas, Australiens, Japans, Koreas, Brasiliens, Mexikos, der VAE, Israels, der Ukraine und Georgiens reisen visumfrei bis zu 90 Tage innerhalb von 180 Tagen im ganzen Schengen-Raum. Alle anderen, auch Bürger von Belarus, Indiens, Chinas, der Türkei und Kasachstans, brauchen ein Schengen-Visum. Russische Staatsangehörige weist Litauen seit September 2022 als Touristen ab – selbst mit dem Visum eines anderen Landes.',
      apply:
        'Ist Litauen dein Hauptreiseziel, beantragst du das Visum bei einem litauischen Konsulat oder Visazentrum: 90 €, für Kinder von 6 bis 12 Jahren 45 €. Der Antrag geht frühestens sechs Monate und spätestens 15 Tage vor der Reise; die Entscheidung dauert meist etwa 15 Tage. Nötig sind eine Versicherung mit mindestens 30.000 € Deckung, Buchungen, ein Rückflugticket und Kontoauszüge. Ein Schengen-Visum jedes anderen Mitgliedstaats gilt ebenfalls.',
      visaRun:
        'Visa-Runs funktionieren nicht: Die 90/180-Regel zählt die Tage im gesamten Schengen-Raum, und auch Polen und Lettland gehören dazu. Ein Abstecher nach Großbritannien oder in die Türkei hält die Uhr nur an, setzt sie aber nie zurück.',
      hacks: [
        'Kaunas ist eine Ryanair-Basis mit günstigen Flügen quer durch Europa, und der LTG-Link-Zug braucht rund eine Stunde nach Vilnius – oft günstiger als ein Direktflug in die Hauptstadt.',
        'Busse von Lux Express und FlixBus fahren ohne Grenzkontrollen von Vilnius nach Riga und Tallinn – das Baltikum lässt sich bequem in einer Reise abdecken.',
        'Seit Juli 2025 kontrolliert Polen an der Grenze zu Litauen: Im Zug oder Bus Vilnius–Warschau gehört der Pass in die Jackentasche.',
        'Mit dem EES (seit April 2026 voll in Betrieb) gibt es keine Stempel, die Tage werden automatisch gezählt. Prüfe vor der Reise dein Restguthaben mit dem offiziellen EU-Rechner.',
      ],
      pitfalls: [
        'Die Kurische Nehrung grenzt an die russische Region Kaliningrad: Kurz südlich von Nida beginnt die Grenze – überquere sie nicht und fotografiere die Grenzzone nicht.',
        'Ein Visum für die einmalige Einreise ist mit dem Verlassen des Schengen-Raums verbraucht: Eine Fahrt nach Belarus über Medininkai kostet dich das Rückkehrrecht.',
        'ETIAS läuft noch nicht (frühestens Ende 2026, eher 2027) – zahl nichts an Seiten, die es jetzt „beantragen“.',
      ],
      passports: {
        RU: 'Seit dem 19. September 2022 verweigert Litauen russischen Staatsangehörigen die Einreise zu touristischen Zwecken, auch mit dem Schengen-Visum eines anderen Landes; Ausnahmen gelten für Angehörige von EU-Bürgern und -Einwohnern, Inhaber von Aufenthaltstiteln, Diplomaten, Transportpersonal und humanitäre Fälle. Der Bahntransit zwischen Kaliningrad und dem übrigen Russland ist mit einem vereinfachten Bahntransitdokument möglich, ohne den Zug zu verlassen. Autos mit russischem Kennzeichen werden nicht eingelassen.',
        BY: 'Belarussen brauchen ein Schengen-Visum. Für Pkw und Busse sind nur die Übergänge Medininkai und Šalčininkai offen, und Litauen kann sie kurzfristig schließen, wie im Herbst 2025. Prüfe vor der Abfahrt die Meldungen des Grenzschutzes.',
        UA: 'Ukrainer mit biometrischem Pass brauchen kein Visum (90/180); der vorübergehende Schutz in der EU gilt bis 4. März 2027.',
        IN: 'Inder brauchen ein Schengen-Visum; nach zwei problemlosen Reisen gibt es ein Mehrfachvisum für zwei, dann für fünf Jahre.',
      },
    },
    fr: {
      summary:
        'Les citoyens de l’UE n’ont besoin que de leur carte d’identité. Les ressortissants des États-Unis, du Royaume-Uni, du Canada, d’Australie, du Japon, de Corée, du Brésil, du Mexique, des Émirats, d’Israël, d’Ukraine et de Géorgie entrent sans visa jusqu’à 90 jours sur 180 dans tout l’espace Schengen. Les autres, dont les citoyens biélorusses, indiens, chinois, turcs et kazakhs, ont besoin d’un visa Schengen. Depuis septembre 2022, la Lituanie refuse les ressortissants russes venant en touristes, même avec le visa d’un autre pays.',
      apply:
        'Si la Lituanie est votre destination principale, déposez la demande auprès d’un consulat ou centre de visas lituanien : 90 €, ou 45 € pour les enfants de 6 à 12 ans. La demande se fait jusqu’à six mois avant et au plus tard 15 jours avant le départ ; la décision prend en général une quinzaine de jours. Il faut une assurance couvrant au moins 30 000 €, des réservations, un billet retour et des relevés bancaires. Un visa Schengen de tout autre État membre convient aussi.',
      visaRun:
        'Le visa run ne fonctionne pas : la règle des 90/180 compte les jours dans tout l’espace Schengen, dont font aussi partie la Pologne et la Lettonie. Un saut au Royaume-Uni ou en Turquie ne fait que suspendre le compteur, sans jamais le remettre à zéro.',
      hacks: [
        'Kaunas est une base Ryanair avec des vols bon marché dans toute l’Europe, et le train LTG Link rejoint Vilnius en une heure environ : souvent moins cher qu’un vol direct vers la capitale.',
        'Les cars Lux Express et FlixBus relient Vilnius à Riga et Tallinn sans contrôle aux frontières : les pays baltes se parcourent facilement en un seul voyage.',
        'Depuis juillet 2025, la Pologne contrôle les documents à sa frontière avec la Lituanie : gardez votre passeport sur vous dans le train ou le bus Vilnius–Varsovie.',
        'Avec l’EES (pleinement opérationnel depuis avril 2026), plus de tampons et les jours sont décomptés automatiquement. Vérifiez votre solde avec le calculateur officiel de l’UE avant le départ.',
      ],
      pitfalls: [
        'L’isthme de Courlande touche la région russe de Kaliningrad : la frontière commence juste au sud de Nida, ne la franchissez pas et ne photographiez pas la zone frontalière.',
        'Un visa à entrée unique est consommé dès la sortie de Schengen : un passage en Biélorussie par Medininkai vous prive du droit de revenir.',
        'ETIAS n’est pas encore en service (au plus tôt fin 2026, plus probablement 2027) : ne payez pas les sites qui le « délivrent » aujourd’hui.',
      ],
      passports: {
        RU: 'Depuis le 19 septembre 2022, la Lituanie refuse les ressortissants russes venant en touristes, même avec un visa Schengen d’un autre pays ; des exceptions existent pour les proches de citoyens et résidents de l’UE, les titulaires de titres de séjour, les diplomates, le personnel de transport et les cas humanitaires. Le transit ferroviaire entre Kaliningrad et le reste de la Russie reste possible avec un document de transit ferroviaire facilité, sans descendre du train. Les voitures immatriculées en Russie sont refusées.',
        BY: 'Les citoyens biélorusses ont besoin d’un visa Schengen. Seuls les postes de Medininkai et Šalčininkai sont ouverts aux voitures et aux bus, et la Lituanie peut les fermer du jour au lendemain, comme à l’automne 2025. Consultez les annonces des gardes-frontières avant de partir.',
        UA: 'Les citoyens ukrainiens munis d’un passeport biométrique n’ont pas besoin de visa (90/180) ; la protection temporaire de l’UE court jusqu’au 4 mars 2027.',
        IN: 'Les citoyens indiens ont besoin d’un visa Schengen ; après deux voyages sans incident, ils peuvent obtenir un visa à entrées multiples de deux ans, puis de cinq ans.',
      },
    },
    it: {
      summary:
        'Ai cittadini UE basta la carta d’identità. I cittadini di Stati Uniti, Regno Unito, Canada, Australia, Giappone, Corea, Brasile, Messico, Emirati, Israele, Ucraina e Georgia entrano senza visto fino a 90 giorni ogni 180 in tutta l’area Schengen. Tutti gli altri, compresi i cittadini di Bielorussia, India, Cina, Turchia e Kazakistan, hanno bisogno del visto Schengen. Da settembre 2022 la Lituania respinge i cittadini russi che viaggiano come turisti, anche con il visto di un altro paese.',
      apply:
        'Se la Lituania è la meta principale, fai domanda a un consolato o centro visti lituano: 90 €, 45 € per i bambini dai 6 ai 12 anni. Puoi presentarla fino a sei mesi prima e almeno 15 giorni prima; la decisione arriva di solito in circa 15 giorni. Servono un’assicurazione con almeno 30.000 € di copertura, prenotazioni, biglietto di ritorno ed estratti conto. Va bene anche un visto Schengen di qualsiasi altro Stato membro.',
      visaRun:
        'Il visa run non funziona: la regola 90/180 conta i giorni in tutta l’area Schengen, di cui fanno parte anche Polonia e Lettonia. Una gita nel Regno Unito o in Turchia mette solo in pausa il contatore, senza mai azzerarlo.',
      hacks: [
        'Kaunas è una base Ryanair con voli economici in tutta Europa, e il treno LTG Link arriva a Vilnius in circa un’ora: spesso conviene rispetto a un volo diretto per la capitale.',
        'I bus Lux Express e FlixBus vanno da Vilnius a Riga e Tallinn senza controlli di frontiera: i paesi baltici si girano facilmente in un unico viaggio.',
        'Da luglio 2025 la Polonia controlla i documenti al confine con la Lituania: sul treno o sul bus Vilnius–Varsavia tieni il passaporto addosso.',
        'Con l’EES (pienamente attivo da aprile 2026) niente timbri e i giorni si contano in automatico. Prima di partire controlla il saldo con il calcolatore ufficiale UE.',
      ],
      pitfalls: [
        'La penisola dei Curi confina con la regione russa di Kaliningrad: il confine inizia poco a sud di Nida, quindi non attraversarlo e non fotografare la zona di frontiera.',
        'Un visto a ingresso singolo si esaurisce appena esci da Schengen: un viaggio in Bielorussia da Medininkai ti toglie il diritto di rientrare.',
        'ETIAS non è ancora attivo (non prima di fine 2026, più probabilmente nel 2027): non pagare i siti che lo «rilasciano» ora.',
      ],
      passports: {
        RU: 'Dal 19 settembre 2022 la Lituania nega l’ingresso ai cittadini russi in viaggio per turismo, anche con un visto Schengen di un altro paese; fanno eccezione i familiari di cittadini e residenti UE, i titolari di permessi di soggiorno, i diplomatici, il personale dei trasporti e i casi umanitari. Il transito in treno tra Kaliningrad e il resto della Russia è possibile con un documento di transito ferroviario facilitato, senza scendere dal treno. Le auto con targa russa non sono ammesse.',
        BY: 'I cittadini bielorussi hanno bisogno del visto Schengen. Per auto e autobus sono aperti solo i valichi di Medininkai e Šalčininkai, e la Lituania può chiuderli all’improvviso, come nell’autunno 2025. Controlla le notizie della guardia di frontiera prima di partire.',
        UA: 'I cittadini ucraini con passaporto biometrico non hanno bisogno del visto (90/180); la protezione temporanea UE vale fino al 4 marzo 2027.',
        IN: 'I cittadini indiani hanno bisogno del visto Schengen; dopo due viaggi senza problemi possono ottenere un visto per ingressi multipli di due anni, poi di cinque.',
      },
    },
  },
};

export default guide;
