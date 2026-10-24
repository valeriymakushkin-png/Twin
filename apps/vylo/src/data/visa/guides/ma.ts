import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'MA',
  checked: '2026-10',
  fees: { evisa: { kind: 'from', amount: 770, currency: 'MAD' } },
  stay: { evisa: 30 },
  links: { evisa: 'https://www.acces-maroc.ma', immigration: 'https://www.consulat.ma' },
  docs: ['returnTicket', 'booking'],
  passportMonths: 0,
  visaRun: 'yes',
  borders: [
    { name: 'Fnideq – Ceuta (Tarajal)', to: 'ES', lat: 35.8710, lng: -5.3435 },
    { name: 'Beni Ansar – Melilla', to: 'ES', lat: 35.2760, lng: -2.9420 },
    { name: 'Tanger Med → Algeciras / Tarifa (ferry)', to: 'ES', lat: 35.8880, lng: -5.5030 },
  ],
  waivers: [
    {
      holds: ['visaUS', 'visaGB', 'visaSchengen', 'visaCA', 'visaAU', 'visaJP', 'visaNZ', 'resUS', 'resGB', 'resEU', 'resCA', 'resAU', 'resJP'],
      status: 'evisa',
      days: 30,
    },
  ],
  hackScope: [null, ['regime:required'], ['IN'], null, null],
  pitfallScope: [null, ['regime:evisa', 'regime:required'], null],
  text: {
    ru: {
      summary:
        'Граждане ЕС, Великобритании, США, Канады, Австралии, Японии, Кореи, Китая, России, Бразилии, Мексики, Турции и стран Залива въезжают без визы на 90 дней, Казахстана и Сингапура — на 30. Гражданам Индии, Израиля, Таиланда и Иордании доступна электронная виза на 30 дней. Остальным, в том числе гражданам Украины, Беларуси, Грузии, Армении и Узбекистана, нужна консульская виза — или e-виза, если у них есть многократная виза либо ВНЖ США, Великобритании, Шенгена и ряда других стран.',
      apply:
        'E-визу оформляют на acces-maroc.ma: анкета, фото, скан паспорта и бронь, оплата картой. Стандартное рассмотрение — около 72 часов (примерно 770 дирхамов), срочное за 24 часа — дороже. Виза однократная, на 30 дней, действует 180 дней с выдачи. Безвизовым гостям ничего оформлять не нужно.',
      visaRun:
        'Визаран работает: после выезда безвизовые 90 дней начинаются заново. Классика — паром из Танжера в Тарифу или Альхесирас или переход в испанскую Сеуту у Фнидека. Но Сеута, Мелилья и Испания — это Шенгенская зона, поэтому такой вариант подходит только тем, кому Шенген разрешает въезд.',
      hacks: [
        'Граница с Алжиром закрыта с 1994 года, а в Мавританию ведёт только долгий путь через Западную Сахару — для визаранов остаются Испания и перелёты.',
        'Многократная виза или ВНЖ США, Великобритании, Шенгена, Канады, Австралии, Японии или Новой Зеландии позволяют получить марокканскую e-визу онлайн вместо похода в консульство.',
        'Индийцам e-виза доступна напрямую с 2023 года, без дополнительных западных виз; подайте за 1–2 недели до поездки.',
        'При первом въезде пограничник вписывает в паспорт личный номер въезда — его спрашивают в отелях и риадах. Сфотографируйте страницу со штампом.',
        'В поездках по Западной Сахаре и югу на полицейских постах удобно раздавать заранее распечатанные «фиши» — листок с паспортными данными и маршрутом: это экономит время на каждой проверке.',
      ],
      pitfalls: [
        'Дроны ввозить запрещено: таможня изымает их в аэропорту и возвращает только на выезде, если вообще возвращает.',
        'Сайты-посредники продают e-визу в 2–3 раза дороже. Официальный портал — acces-maroc.ma.',
        'Перерасчёт свыше 90 дней грозит штрафом и разбирательством в суде на выезде. Продлить пребывание в полиции сложно и долго — проще выехать и вернуться.',
      ],
      passports: {
        RU: 'Россияне въезжают без визы на 90 дней. Для визарана в Сеуту, Мелилью или Испанию нужна действующая шенгенская виза. Российские карты не работают — везите евро наличными; регулярных прямых рейсов из Москвы нет, обычно летают через Стамбул.',
        IN: 'Гражданам Индии доступна e-виза на acces-maroc.ma; при многократной визе или ВНЖ США, Великобритании или Шенгена её также дают.',
        IL: 'Граждане Израиля после нормализации отношений получают e-визу; летают прямые рейсы.',
        UA: 'Гражданам Украины нужна консульская виза — или e-виза при наличии многократной визы либо ВНЖ США, Великобритании, Шенгена и других стран из списка.',
      },
      waivers: [
        'Подходит многократная виза, действительная ещё минимум 90 дней, или ВНЖ, действительный ещё минимум 180 дней, — США, Великобритании, Ирландии, Шенгена, Канады, Австралии, Японии или Новой Зеландии. Даёт однократную e-визу на 30 дней.',
      ],
    },
    en: {
      summary:
        'Citizens of the EU, the UK, the US, Canada, Australia, Japan, Korea, China, Russia, Brazil, Mexico, Turkey and the GCC enter visa-free for 90 days, those of Kazakhstan and Singapore for 30. Citizens of India, Israel, Thailand and Jordan can get a 30-day e-visa. Everyone else, including Ukrainian, Belarusian, Georgian, Armenian and Uzbek citizens, needs a consular visa — or an e-visa if they hold a multiple-entry visa or residence permit from the US, the UK, Schengen and some other countries.',
      apply:
        'Apply for the e-visa on acces-maroc.ma: form, photo, passport scan and booking, card payment. Standard processing takes about 72 hours (around 770 MAD); 24-hour express costs more. The visa is single-entry for 30 days and valid for 180 days from issue. Visa-free visitors need not apply for anything.',
      visaRun:
        'Visa runs work: the 90 visa-free days restart after you leave. The classic options are the ferry from Tangier to Tarifa or Algeciras or crossing into Spanish Ceuta at Fnideq. But Ceuta, Melilla and Spain are in the Schengen Area, so this only works if Schengen lets you in.',
      hacks: [
        'The Algerian border has been closed since 1994, and Mauritania is reached only by the long road through Western Sahara — so Spain and flights are what remain for visa runs.',
        'A multiple-entry visa or residence permit from the US, the UK, Schengen, Canada, Australia, Japan or New Zealand lets you get the Moroccan e-visa online instead of going to a consulate.',
        'Indians have been able to apply for the e-visa directly since 2023, with no Western visa needed; apply one to two weeks before travel.',
        'On your first entry, the officer writes a personal entry number in your passport — hotels and riads ask for it. Take a photo of the stamped page.',
        'When driving through Western Sahara and the south, hand out pre-printed “fiches” at police checkpoints — a sheet with your passport details and route — to save time at every stop.',
      ],
      pitfalls: [
        'Drones are banned: customs confiscates them at the airport and returns them on departure, if at all.',
        'Agency sites sell the e-visa for two to three times the price. The official portal is acces-maroc.ma.',
        'Overstaying beyond 90 days can mean a fine and a court hearing on departure. Extending with the police is slow and difficult — leaving and coming back is easier.',
      ],
      passports: {
        RU: 'Russian citizens enter visa-free for 90 days. For a visa run to Ceuta, Melilla or Spain you need a valid Schengen visa. Russian bank cards do not work, so bring euros in cash; there are no regular direct flights from Moscow, so most people connect in Istanbul.',
        IN: 'Indian citizens can get the e-visa on acces-maroc.ma; it is also issued to holders of a multiple-entry visa or residence permit from the US, the UK or Schengen.',
        IL: 'Since normalisation, Israeli citizens get an e-visa, and there are direct flights.',
        UA: 'Ukrainian citizens need a consular visa — or an e-visa if they hold a multiple-entry visa or residence permit from the US, the UK, Schengen or other listed countries.',
      },
      waivers: [
        'You need a multiple-entry visa valid for at least 90 more days, or a residence permit valid for at least 180 more days, from the US, the UK, Ireland, Schengen, Canada, Australia, Japan or New Zealand. It gets you a single-entry 30-day e-visa.',
      ],
    },
    es: {
      summary:
        'Los ciudadanos de la UE, Reino Unido, EE. UU., Canadá, Australia, Japón, Corea, China, Rusia, Brasil, México, Turquía y el CCG entran sin visado durante 90 días, y los de Kazajistán y Singapur durante 30. Los ciudadanos de India, Israel, Tailandia y Jordania pueden obtener un visado electrónico de 30 días. El resto, incluidos ucranianos, bielorrusos, georgianos, armenios y uzbekos, necesita visado consular, o el electrónico si tiene un visado de entradas múltiples o residencia de EE. UU., Reino Unido, Schengen y algunos otros países.',
      apply:
        'Solicita el visado electrónico en acces-maroc.ma: formulario, foto, copia del pasaporte y reserva, y pago con tarjeta. La tramitación estándar tarda unas 72 horas (unos 770 MAD); la urgente de 24 horas cuesta más. Es de una sola entrada para 30 días y vale 180 días desde su emisión. Si entras sin visado, no tienes que tramitar nada.',
      visaRun:
        'El visa run funciona: al salir, los 90 días sin visado vuelven a empezar. Lo clásico es el ferri de Tánger a Tarifa o Algeciras o cruzar a Ceuta por Fnideq. Pero Ceuta, Melilla y España están en el espacio Schengen, así que solo sirve si Schengen te deja entrar.',
      hacks: [
        'La frontera con Argelia está cerrada desde 1994, y a Mauritania solo se llega por la larga carretera del Sáhara Occidental: para el visa run quedan España y los vuelos.',
        'Un visado de entradas múltiples o una residencia de EE. UU., Reino Unido, Schengen, Canadá, Australia, Japón o Nueva Zelanda te permiten obtener el visado electrónico marroquí en línea en lugar de ir al consulado.',
        'Los indios pueden pedir el visado electrónico directamente desde 2023, sin necesidad de visados occidentales; solicítalo una o dos semanas antes del viaje.',
        'En la primera entrada, el agente anota en el pasaporte un número de entrada personal que piden hoteles y riads. Haz una foto de la página sellada.',
        'Si conduces por el Sáhara Occidental y el sur, reparte en los controles policiales «fiches» impresas con tus datos de pasaporte y tu ruta: ahorrarás tiempo en cada parada.',
      ],
      pitfalls: [
        'Los drones están prohibidos: la aduana los confisca en el aeropuerto y, como mucho, los devuelve a la salida.',
        'Las webs intermediarias venden el visado electrónico por dos o tres veces su precio. El portal oficial es acces-maroc.ma.',
        'Pasar de los 90 días puede suponer multa y comparecencia ante un juez al salir. Prorrogar en la policía es lento y difícil: es más fácil salir y volver.',
      ],
      passports: {
        RU: 'Los ciudadanos rusos entran sin visado 90 días. Para un visa run a Ceuta, Melilla o España necesitas un visado Schengen vigente. Las tarjetas rusas no funcionan: lleva euros en efectivo; no hay vuelos directos regulares desde Moscú, así que lo habitual es hacer escala en Estambul.',
        IN: 'Los ciudadanos indios pueden obtener el visado electrónico en acces-maroc.ma; también se concede a quienes tienen visado de entradas múltiples o residencia de EE. UU., Reino Unido o Schengen.',
        IL: 'Desde la normalización, los ciudadanos israelíes obtienen visado electrónico y hay vuelos directos.',
        UA: 'Los ciudadanos ucranianos necesitan visado consular, o el electrónico si tienen un visado de entradas múltiples o residencia de EE. UU., Reino Unido, Schengen u otros países de la lista.',
      },
      waivers: [
        'Necesitas un visado de entradas múltiples con al menos 90 días de validez restante, o una residencia con al menos 180, de EE. UU., Reino Unido, Irlanda, Schengen, Canadá, Australia, Japón o Nueva Zelanda. Da derecho a un visado electrónico de una entrada y 30 días.',
      ],
    },
    de: {
      summary:
        'Staatsangehörige der EU, Großbritanniens, der USA, Kanadas, Australiens, Japans, Koreas, Chinas, Russlands, Brasiliens, Mexikos, der Türkei und der GCC-Staaten reisen 90 Tage visumfrei ein, Kasachen und Singapurer 30 Tage. Staatsangehörige Indiens, Israels, Thailands und Jordaniens bekommen ein 30-Tage-E-Visum. Alle anderen, auch Ukrainer, Belarussen, Georgier, Armenier und Usbeken, brauchen ein Konsularvisum – oder ein E-Visum, wenn sie ein Mehrfachvisum oder einen Aufenthaltstitel der USA, Großbritanniens, des Schengenraums oder einiger weiterer Länder haben.',
      apply:
        'Beantrage das E-Visum auf acces-maroc.ma: Formular, Foto, Passscan und Buchung, Zahlung per Karte. Die Standardbearbeitung dauert etwa 72 Stunden (rund 770 MAD), Express in 24 Stunden kostet mehr. Das Visum gilt für eine Einreise und 30 Tage und ist 180 Tage ab Ausstellung gültig. Wer visumfrei einreist, muss nichts beantragen.',
      visaRun:
        'Visa-Runs funktionieren: Nach der Ausreise beginnen die 90 visumfreien Tage neu. Klassisch sind die Fähre von Tanger nach Tarifa oder Algeciras oder der Übergang ins spanische Ceuta bei Fnideq. Ceuta, Melilla und Spanien gehören aber zum Schengenraum – das klappt also nur, wenn du dort einreisen darfst.',
      hacks: [
        'Die Grenze zu Algerien ist seit 1994 geschlossen, und nach Mauretanien kommt man nur über die lange Straße durch die Westsahara – für Visa-Runs bleiben Spanien und Flüge.',
        'Mit einem Mehrfachvisum oder Aufenthaltstitel der USA, Großbritanniens, des Schengenraums, Kanadas, Australiens, Japans oder Neuseelands bekommst du das marokkanische E-Visum online statt beim Konsulat.',
        'Inder können das E-Visum seit 2023 direkt beantragen, ohne westliches Visum; beantrage es ein bis zwei Wochen vor der Reise.',
        'Bei der ersten Einreise trägt der Beamte eine persönliche Einreisenummer in den Pass ein – Hotels und Riads fragen danach. Fotografier die gestempelte Seite.',
        'Wer durch die Westsahara und den Süden fährt, verteilt an Polizeikontrollen am besten vorgedruckte „Fiches“ mit Passdaten und Route – das spart an jedem Posten Zeit.',
      ],
      pitfalls: [
        'Drohnen sind verboten: Der Zoll beschlagnahmt sie am Flughafen und gibt sie, wenn überhaupt, erst bei der Ausreise zurück.',
        'Vermittlerseiten verkaufen das E-Visum für das Zwei- bis Dreifache. Das offizielle Portal ist acces-maroc.ma.',
        'Wer die 90 Tage überzieht, riskiert bei der Ausreise ein Bußgeld und einen Gerichtstermin. Eine Verlängerung bei der Polizei ist langwierig und schwierig – aus- und wieder einreisen ist einfacher.',
      ],
      passports: {
        RU: 'Russische Staatsangehörige reisen 90 Tage visumfrei ein. Für einen Visa-Run nach Ceuta, Melilla oder Spanien brauchst du ein gültiges Schengen-Visum. Russische Bankkarten funktionieren nicht – nimm Euro in bar mit; regelmäßige Direktflüge ab Moskau gibt es nicht, meist steigt man in Istanbul um.',
        IN: 'Indische Staatsangehörige bekommen das E-Visum auf acces-maroc.ma; es wird auch Inhabern eines Mehrfachvisums oder Aufenthaltstitels der USA, Großbritanniens oder des Schengenraums erteilt.',
        IL: 'Seit der Normalisierung bekommen israelische Staatsangehörige ein E-Visum, und es gibt Direktflüge.',
        UA: 'Ukrainische Staatsangehörige brauchen ein Konsularvisum – oder ein E-Visum mit Mehrfachvisum oder Aufenthaltstitel der USA, Großbritanniens, des Schengenraums oder anderer gelisteter Länder.',
      },
      waivers: [
        'Nötig ist ein Mehrfachvisum, das noch mindestens 90 Tage gilt, oder ein Aufenthaltstitel mit noch mindestens 180 Tagen Gültigkeit – aus den USA, Großbritannien, Irland, dem Schengenraum, Kanada, Australien, Japan oder Neuseeland. Damit gibt es ein E-Visum für eine Einreise und 30 Tage.',
      ],
    },
    fr: {
      summary:
        'Les ressortissants de l’UE, du Royaume-Uni, des États-Unis, du Canada, d’Australie, du Japon, de Corée, de Chine, de Russie, du Brésil, du Mexique, de Turquie et du CCG entrent sans visa pour 90 jours, ceux du Kazakhstan et de Singapour pour 30. Les ressortissants de l’Inde, d’Israël, de Thaïlande et de Jordanie peuvent obtenir un e-visa de 30 jours. Les autres, dont les Ukrainiens, Bélarusses, Géorgiens, Arméniens et Ouzbeks, ont besoin d’un visa consulaire — ou d’un e-visa s’ils détiennent un visa à entrées multiples ou un titre de séjour des États-Unis, du Royaume-Uni, de l’espace Schengen ou de quelques autres pays.',
      apply:
        'Demandez l’e-visa sur acces-maroc.ma : formulaire, photo, scan du passeport et réservation, paiement par carte. Le traitement standard prend environ 72 heures (près de 770 MAD) ; l’express en 24 heures coûte plus cher. Le visa est à entrée unique pour 30 jours et valable 180 jours après délivrance. Les visiteurs exemptés n’ont aucune démarche à faire.',
      visaRun:
        'Le visa run fonctionne : après une sortie, les 90 jours sans visa repartent de zéro. Les classiques sont le ferry de Tanger vers Tarifa ou Algésiras, ou le passage vers Ceuta, ville espagnole, à Fnideq. Mais Ceuta, Melilla et l’Espagne font partie de l’espace Schengen : cela ne marche que si Schengen vous autorise à entrer.',
      hacks: [
        'La frontière algérienne est fermée depuis 1994, et la Mauritanie ne se rejoint que par la longue route du Sahara occidental : pour un visa run, restent l’Espagne et l’avion.',
        'Un visa à entrées multiples ou un titre de séjour des États-Unis, du Royaume-Uni, de l’espace Schengen, du Canada, d’Australie, du Japon ou de Nouvelle-Zélande permet d’obtenir l’e-visa marocain en ligne plutôt qu’au consulat.',
        'Depuis 2023, les Indiens peuvent demander l’e-visa directement, sans visa occidental ; faites la demande une à deux semaines avant le voyage.',
        'À la première entrée, le policier inscrit dans le passeport un numéro d’entrée personnel que demandent hôtels et riads. Photographiez la page tamponnée.',
        'En voiture dans le Sahara occidental et le Sud, distribuez aux barrages de police des « fiches » imprimées à l’avance avec vos données de passeport et votre itinéraire : vous gagnerez du temps à chaque contrôle.',
      ],
      pitfalls: [
        'Les drones sont interdits : la douane les confisque à l’aéroport et ne les rend, au mieux, qu’au départ.',
        'Les sites intermédiaires vendent l’e-visa deux à trois fois plus cher. Le portail officiel est acces-maroc.ma.',
        'Dépasser les 90 jours peut valoir une amende et un passage devant le juge à la sortie. La prolongation auprès de la police est longue et difficile : il est plus simple de sortir et revenir.',
      ],
      passports: {
        RU: 'Les ressortissants russes entrent sans visa pour 90 jours. Pour un visa run vers Ceuta, Melilla ou l’Espagne, il faut un visa Schengen valide. Les cartes bancaires russes ne fonctionnent pas : emportez des euros en espèces ; il n’y a pas de vol direct régulier depuis Moscou, on passe le plus souvent par Istanbul.',
        IN: 'Les ressortissants indiens peuvent obtenir l’e-visa sur acces-maroc.ma ; il est aussi accordé aux titulaires d’un visa à entrées multiples ou d’un titre de séjour américain, britannique ou Schengen.',
        IL: 'Depuis la normalisation, les ressortissants israéliens obtiennent un e-visa, et il existe des vols directs.',
        UA: 'Les ressortissants ukrainiens ont besoin d’un visa consulaire — ou d’un e-visa avec un visa à entrées multiples ou un titre de séjour des États-Unis, du Royaume-Uni, de l’espace Schengen ou d’autres pays de la liste.',
      },
      waivers: [
        'Il faut un visa à entrées multiples encore valable au moins 90 jours, ou un titre de séjour encore valable au moins 180 jours, des États-Unis, du Royaume-Uni, d’Irlande, de l’espace Schengen, du Canada, d’Australie, du Japon ou de Nouvelle-Zélande. Il ouvre droit à un e-visa à entrée unique de 30 jours.',
      ],
    },
    it: {
      summary:
        'I cittadini di UE, Regno Unito, Stati Uniti, Canada, Australia, Giappone, Corea, Cina, Russia, Brasile, Messico, Turchia e CCG entrano senza visto per 90 giorni, quelli di Kazakistan e Singapore per 30. I cittadini di India, Israele, Thailandia e Giordania possono ottenere un visto elettronico di 30 giorni. Gli altri, compresi ucraini, bielorussi, georgiani, armeni e uzbeki, hanno bisogno di un visto consolare, oppure di quello elettronico se hanno un visto a ingressi multipli o un permesso di soggiorno di Stati Uniti, Regno Unito, area Schengen e alcuni altri paesi.',
      apply:
        'Richiedi il visto elettronico su acces-maroc.ma: modulo, foto, scansione del passaporto e prenotazione, pagamento con carta. La procedura standard richiede circa 72 ore (circa 770 MAD); quella urgente in 24 ore costa di più. Il visto è a ingresso singolo per 30 giorni e vale 180 giorni dal rilascio. Chi entra senza visto non deve richiedere nulla.',
      visaRun:
        'Il visa run funziona: dopo l’uscita i 90 giorni senza visto ripartono da capo. I classici sono il traghetto da Tangeri a Tarifa o Algeciras o il passaggio a Ceuta, città spagnola, da Fnideq. Ma Ceuta, Melilla e la Spagna sono nell’area Schengen: funziona solo se Schengen ti consente l’ingresso.',
      hacks: [
        'Il confine con l’Algeria è chiuso dal 1994, e in Mauritania si arriva solo con la lunga strada del Sahara Occidentale: per il visa run restano la Spagna e i voli.',
        'Un visto a ingressi multipli o un permesso di soggiorno di Stati Uniti, Regno Unito, area Schengen, Canada, Australia, Giappone o Nuova Zelanda ti permette di ottenere il visto elettronico marocchino online invece di andare al consolato.',
        'Dal 2023 gli indiani possono richiedere il visto elettronico direttamente, senza visti occidentali; fai domanda una o due settimane prima del viaggio.',
        'Al primo ingresso l’agente scrive sul passaporto un numero d’ingresso personale che hotel e riad chiedono. Fotografa la pagina timbrata.',
        'Se guidi nel Sahara Occidentale e nel sud, consegna ai posti di blocco delle «fiches» stampate in anticipo con dati del passaporto e itinerario: risparmierai tempo a ogni controllo.',
      ],
      pitfalls: [
        'I droni sono vietati: la dogana li sequestra in aeroporto e li restituisce, se va bene, solo alla partenza.',
        'I siti intermediari vendono il visto elettronico a due o tre volte il prezzo. Il portale ufficiale è acces-maroc.ma.',
        'Superare i 90 giorni può comportare una multa e un’udienza in tribunale all’uscita. Prorogare alla polizia è lento e complicato: è più semplice uscire e rientrare.',
      ],
      passports: {
        RU: 'I cittadini russi entrano senza visto per 90 giorni. Per un visa run a Ceuta, Melilla o in Spagna serve un visto Schengen valido. Le carte bancarie russe non funzionano: porta euro in contanti; non ci sono voli diretti regolari da Mosca, quindi di solito si fa scalo a Istanbul.',
        IN: 'I cittadini indiani possono ottenere il visto elettronico su acces-maroc.ma; viene concesso anche a chi ha un visto a ingressi multipli o un permesso di soggiorno di Stati Uniti, Regno Unito o area Schengen.',
        IL: 'Dalla normalizzazione dei rapporti i cittadini israeliani ottengono il visto elettronico, e ci sono voli diretti.',
        UA: 'I cittadini ucraini hanno bisogno di un visto consolare, oppure di quello elettronico con un visto a ingressi multipli o un permesso di soggiorno di Stati Uniti, Regno Unito, area Schengen o altri paesi dell’elenco.',
      },
      waivers: [
        'Serve un visto a ingressi multipli valido ancora almeno 90 giorni, oppure un permesso di soggiorno valido ancora almeno 180 giorni, di Stati Uniti, Regno Unito, Irlanda, area Schengen, Canada, Australia, Giappone o Nuova Zelanda. Dà diritto a un visto elettronico a ingresso singolo di 30 giorni.',
      ],
    },
  },
};

export default guide;
