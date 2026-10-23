import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'IE',
  checked: '2026-10',
  fees: { visa: { kind: 'fixed', amount: 60, currency: 'EUR' } },
  stay: { visa: 90 },
  links: { immigration: 'https://www.irishimmigration.ie' },
  docs: ['returnTicket', 'booking', 'finance'],
  passportMonths: 0,
  visaRun: 'limited',
  waivers: [
    {
      // Short Stay Visa Waiver Programme (Russia and Belarus suspended since 2022)
      holds: ['visaGB'],
      passports: ['BA', 'BH', 'CN', 'CO', 'ID', 'IN', 'KW', 'KZ', 'ME', 'MK', 'OM', 'PE', 'PH', 'QA', 'RS', 'SA', 'TH', 'TR', 'UZ', 'XK'],
      status: 'free',
      days: 90,
    },
    // British-Irish Visa Scheme
    { holds: ['visaGB'], passports: ['CN', 'IN'], status: 'free', days: 90 },
  ],
  text: {
    ru: {
      summary:
        'Ирландия не входит в Шенген: шенгенская виза здесь не действует, нужна своя ирландская. Граждане ЕС и Великобритании въезжают свободно (у Ирландии с Великобританией Общая зона передвижения), граждане США, Канады, Австралии, Японии, Кореи, Бразилии, Мексики, ОАЭ, Израиля и Украины — без визы до 90 дней. Гражданам России, Беларуси, Грузии, Казахстана, Индии, Китая и Турции нужна ирландская виза.',
      apply:
        'Анкету заполняют онлайн в системе AVATS на сайте irishimmigration.ie, затем отправляют документы в визовый офис или центр VFS. Однократная виза стоит 60 €, многократная — 100 €; рассмотрение обычно 4–8 недель, подавайте за три месяца. Паспорт для визы должен действовать ещё 6 месяцев после выезда. Нужны письмо с целью поездки, выписки за полгода, справка с работы, брони и страховка.',
      visaRun:
        'Правила 90/180 в Ирландии нет: при каждом въезде офицер ставит разрешение до 90 дней, продлить туристическое пребывание нельзя. Выехать и сразу вернуться формально можно, но частые длинные визиты подряд выглядят как жизнь в стране — во въезде откажут. Поездки в Великобританию срок не обнуляют.',
      hacks: [
        'Дни в Ирландии не входят в шенгенские 90/180: после 90 дней в Шенгене можно спокойно провести ещё до 90 дней в Ирландии.',
        'Граждане Индии и Китая с британской визой с пометкой BIVS могут въехать в Ирландию без ирландской визы — и наоборот, ирландская виза BIVS открывает Великобританию.',
        'В аэропортах Дублина и Шаннона работает американский предварительный контроль: вы проходите погранконтроль США ещё в Ирландии и прилетаете в Штаты как на внутренний рейс.',
        'После нескольких поездок без нарушений просите многократную визу: Ирландия выдаёт её на срок до пяти лет.',
      ],
      pitfalls: [
        'Въезд в Ирландию по суше из Северной Ирландии без ирландской визы — нарушение для тех, кому она нужна, даже если на границе никто не проверяет.',
        'Наоборот, поездка в Белфаст — это въезд в Великобританию: без визы британским безвизовым иностранцам (кроме ирландцев) нужен UK ETA за 16 фунтов.',
        'Программа Short Stay Visa Waiver рассчитана до 31 октября 2026 года; её продлевали каждые пять лет, но проверьте на irishimmigration.ie, действует ли она в дату поездки.',
      ],
      waivers: [
        'Программа Short Stay Visa Waiver: с действующей британской краткосрочной визой (не ETA) можно въехать в Ирландию без ирландской визы, но сначала нужно законно въехать в Великобританию по этой визе. Срок — до 90 дней или до конца британского разрешения, если оно короче; программа рассчитана до 31 октября 2026 года, для России и Беларуси приостановлена с 2022 года.',
        'Британско-ирландская визовая схема (BIVS): британская виза с пометкой BIVS действует и для Ирландии, если первым въездом была Великобритания. Срок — в пределах разрешения, выданного при въезде, максимум 90 дней.',
      ],
      passports: {
        RU: 'Россиянам нужна ирландская виза за 60 €; программа въезда по британской визе для граждан РФ приостановлена с 2022 года. Прямых рейсов нет: летают через Стамбул или Дубай. Российские карты не работают — визовый сбор и поездку оплачивайте картой зарубежного банка.',
        GB: 'Британцам паспорт формально не нужен — действует Общая зона передвижения, можно жить и работать без ограничений; но авиакомпании требуют документ с фото, удобнее всего паспорт.',
        IN: 'Гражданам Индии нужна ирландская виза, но британская виза BIVS или программа Short Stay Visa Waiver позволяют въехать без неё после въезда в Великобританию.',
        GE: 'Гражданам Грузии, в отличие от Шенгена, нужна ирландская виза; заявления принимает визовый центр VFS в Тбилиси.',
        US: 'Американцам виза не нужна (до 90 дней). На обратном пути пользуйтесь предварительным контролем США в Дублине или Шанноне — в американском аэропорту очередей на паспортном контроле не будет.',
      },
    },
    en: {
      summary:
        'Ireland is not in Schengen: a Schengen visa is not valid here, and you need an Irish one. EU and UK citizens enter freely (Ireland and the UK share the Common Travel Area), while citizens of the US, Canada, Australia, Japan, Korea, Brazil, Mexico, the UAE, Israel and Ukraine stay visa-free for up to 90 days. Citizens of Russia, Belarus, Georgia, Kazakhstan, India, China and Turkey need an Irish visa.',
      apply:
        'Fill in the AVATS form online on irishimmigration.ie, then send your documents to the visa office or a VFS centre. A single-entry visa costs €60, multiple-entry €100; processing usually takes 4–8 weeks, so apply three months ahead. For a visa, your passport must be valid for 6 months after you leave. You need a letter stating the purpose of the trip, six months of bank statements, an employer letter, bookings and insurance.',
      visaRun:
        'Ireland has no 90/180 rule: on each entry an officer grants permission for up to 90 days, and tourist stays cannot be extended. Leaving and coming straight back is technically possible, but long back-to-back visits look like living in the country and get refused. Trips to the UK do not reset anything.',
      hacks: [
        'Days in Ireland do not count towards the Schengen 90/180: after 90 days in Schengen you can spend up to another 90 in Ireland.',
        'Indian and Chinese citizens with a UK visa endorsed “BIVS” can enter Ireland without an Irish visa — and an Irish BIVS visa likewise opens the UK.',
        'Dublin and Shannon airports have US preclearance: you clear US border control in Ireland and land in the States as if on a domestic flight.',
        'After a few trouble-free trips, ask for a multiple-entry visa: Ireland issues them for up to five years.',
      ],
      pitfalls: [
        'Entering Ireland overland from Northern Ireland without an Irish visa is a breach for anyone who needs one, even though nobody checks at the border.',
        'Conversely, a trip to Belfast means entering the UK: non-visa nationals (other than Irish citizens) need a £16 UK ETA.',
        'The Short Stay Visa Waiver Programme is set to run until 31 October 2026; it has been renewed every five years, but check on irishimmigration.ie that it is still in force on your travel dates.',
      ],
      waivers: [
        'Short Stay Visa Waiver Programme: with a valid UK short-stay visa (not an ETA) you can enter Ireland without an Irish visa, but you must first enter the UK legally on that visa. You may stay up to 90 days or until your UK permission ends, whichever is shorter; the scheme runs until 31 October 2026 and has been suspended for Russia and Belarus since 2022.',
        'British-Irish Visa Scheme (BIVS): a UK visa endorsed “BIVS” also works for Ireland, provided your first entry was into the UK. You may stay within the permission granted on arrival, up to 90 days.',
      ],
      passports: {
        RU: 'Russians need a €60 Irish visa; the scheme allowing entry on a UK visa has been suspended for Russian citizens since 2022. There are no direct flights: people fly via Istanbul or Dubai. Russian bank cards do not work, so pay the fee and the trip with a card from a foreign bank.',
        GB: 'British citizens technically need no passport under the Common Travel Area and can live and work in Ireland freely, but airlines require photo ID, and a passport is the easiest.',
        IN: 'Indian citizens need an Irish visa, but a BIVS UK visa or the Short Stay Visa Waiver Programme lets you enter without one after arriving in the UK first.',
        GE: 'Unlike for Schengen, Georgian citizens need an Irish visa; applications go through the VFS centre in Tbilisi.',
        US: 'US citizens need no visa (up to 90 days). On the way home, use US preclearance at Dublin or Shannon to skip the passport queues at the US airport.',
      },
    },
    es: {
      summary:
        'Irlanda no está en Schengen: aquí no vale el visado Schengen y hace falta uno irlandés. Los ciudadanos de la UE y del Reino Unido entran libremente (Irlanda y el Reino Unido comparten la Zona Común de Viaje), y los de EE. UU., Canadá, Australia, Japón, Corea, Brasil, México, Emiratos, Israel y Ucrania, sin visado hasta 90 días. Los ciudadanos de Rusia, Bielorrusia, Georgia, Kazajistán, India, China y Turquía necesitan visado irlandés.',
      apply:
        'Rellena el formulario AVATS en irishimmigration.ie y envía después los documentos a la oficina de visados o a un centro VFS. El visado de una entrada cuesta 60 € y el de entradas múltiples, 100 €; la tramitación suele tardar de 4 a 8 semanas, así que solicítalo con tres meses de margen. Para el visado, el pasaporte debe ser válido 6 meses después de salir. Necesitas una carta con el motivo del viaje, seis meses de extractos, una carta de la empresa, reservas y seguro.',
      visaRun:
        'Irlanda no aplica la regla 90/180: en cada entrada un agente concede permiso de hasta 90 días, y las estancias turísticas no se prorrogan. Salir y volver enseguida es posible en teoría, pero las visitas largas encadenadas parecen residencia y acaban en denegación. Los viajes al Reino Unido no reinician nada.',
      hacks: [
        'Los días en Irlanda no cuentan para los 90/180 de Schengen: tras 90 días en Schengen puedes pasar hasta otros 90 en Irlanda.',
        'Los ciudadanos indios y chinos con un visado británico con la mención «BIVS» pueden entrar en Irlanda sin visado irlandés, y un visado irlandés BIVS también abre el Reino Unido.',
        'Los aeropuertos de Dublín y Shannon tienen preautorización de EE. UU.: pasas el control fronterizo estadounidense en Irlanda y llegas a EE. UU. como en un vuelo nacional.',
        'Tras unos cuantos viajes sin incidencias, pide un visado de entradas múltiples: Irlanda los concede hasta por cinco años.',
      ],
      pitfalls: [
        'Entrar en Irlanda por tierra desde Irlanda del Norte sin visado irlandés es una infracción para quien lo necesita, aunque en la frontera nadie controle.',
        'Al revés, ir a Belfast es entrar en el Reino Unido: quienes no necesitan visado británico (salvo los irlandeses) deben tener una UK ETA de 16 libras.',
        'El programa Short Stay Visa Waiver está previsto hasta el 31 de octubre de 2026; se ha renovado cada cinco años, pero confirma en irishimmigration.ie que sigue vigente en tus fechas.',
      ],
      waivers: [
        'Programa Short Stay Visa Waiver: con un visado británico de corta estancia vigente (no una ETA) puedes entrar en Irlanda sin visado irlandés, pero antes debes haber entrado legalmente en el Reino Unido con ese visado. Puedes quedarte hasta 90 días o hasta que termine tu permiso británico, lo que ocurra antes; el programa dura hasta el 31 de octubre de 2026 y está suspendido para Rusia y Bielorrusia desde 2022.',
        'Plan de Visados Británico-Irlandés (BIVS): un visado británico con la mención «BIVS» también vale para Irlanda, siempre que tu primera entrada haya sido en el Reino Unido. Puedes quedarte dentro del permiso concedido a la llegada, hasta 90 días.',
      ],
      passports: {
        RU: 'Los rusos necesitan un visado irlandés de 60 €; la vía de entrada con visado británico está suspendida para ellos desde 2022. No hay vuelos directos: se vuela vía Estambul o Dubái. Las tarjetas rusas no funcionan, así que paga la tasa y el viaje con una tarjeta de un banco extranjero.',
        GB: 'Los británicos, en rigor, no necesitan pasaporte gracias a la Zona Común de Viaje y pueden vivir y trabajar libremente en Irlanda, pero las aerolíneas exigen un documento con foto y lo más práctico es el pasaporte.',
        IN: 'Los ciudadanos indios necesitan visado irlandés, pero un visado británico BIVS o el programa Short Stay Visa Waiver les permite entrar sin él tras llegar primero al Reino Unido.',
        GE: 'A diferencia de Schengen, los ciudadanos georgianos necesitan visado irlandés; las solicitudes se presentan en el centro VFS de Tiflis.',
        US: 'Los estadounidenses no necesitan visado (hasta 90 días). A la vuelta, usa la preautorización de EE. UU. en Dublín o Shannon y te ahorrarás las colas de pasaportes al llegar.',
      },
    },
    de: {
      summary:
        'Irland gehört nicht zum Schengen-Raum: Ein Schengen-Visum gilt hier nicht, du brauchst ein irisches. EU- und britische Bürger reisen frei ein (Irland und Großbritannien bilden die Common Travel Area), Staatsangehörige der USA, Kanadas, Australiens, Japans, Koreas, Brasiliens, Mexikos, der VAE, Israels und der Ukraine bleiben bis zu 90 Tage visumfrei. Bürger Russlands, von Belarus, Georgiens, Kasachstans, Indiens, Chinas und der Türkei brauchen ein irisches Visum.',
      apply:
        'Fülle das AVATS-Formular online auf irishimmigration.ie aus und schick die Unterlagen dann an das Visabüro oder ein VFS-Zentrum. Ein Visum für die einmalige Einreise kostet 60 €, für mehrfache 100 €; die Bearbeitung dauert meist 4–8 Wochen, beantrage es also drei Monate vorher. Für ein Visum muss der Pass noch 6 Monate nach der Ausreise gelten. Nötig sind ein Schreiben zum Reisezweck, Kontoauszüge über sechs Monate, eine Arbeitgeberbescheinigung, Buchungen und eine Versicherung.',
      visaRun:
        'In Irland gibt es keine 90/180-Regel: Bei jeder Einreise erteilt ein Beamter bis zu 90 Tage, touristische Aufenthalte lassen sich nicht verlängern. Aus- und gleich wieder einzureisen ist formal möglich, doch lange Besuche hintereinander wirken wie Wohnen im Land und führen zur Abweisung. Reisen nach Großbritannien setzen nichts zurück.',
      hacks: [
        'Tage in Irland zählen nicht zu den Schengen-90/180: Nach 90 Tagen im Schengen-Raum kannst du noch bis zu 90 Tage in Irland verbringen.',
        'Inder und Chinesen mit einem britischen Visum mit dem Vermerk „BIVS“ reisen ohne irisches Visum nach Irland – und ein irisches BIVS-Visum öffnet umgekehrt Großbritannien.',
        'In Dublin und Shannon gibt es US-Preclearance: Du durchläufst die US-Grenzkontrolle schon in Irland und landest in den USA wie bei einem Inlandsflug.',
        'Nach ein paar problemlosen Reisen lohnt sich ein Antrag auf ein Mehrfachvisum: Irland stellt es für bis zu fünf Jahre aus.',
      ],
      pitfalls: [
        'Wer ein irisches Visum braucht und ohne es über Land aus Nordirland einreist, verstößt gegen das Gesetz – auch wenn an der Grenze niemand kontrolliert.',
        'Umgekehrt ist ein Ausflug nach Belfast eine Einreise nach Großbritannien: Visumfreie Reisende (außer Iren) brauchen eine UK ETA für 16 £.',
        'Das Short Stay Visa Waiver Programme läuft vorerst bis 31. Oktober 2026; es wurde bisher alle fünf Jahre verlängert, prüfe aber auf irishimmigration.ie, ob es zu deinem Reisetermin noch gilt.',
      ],
      waivers: [
        'Short Stay Visa Waiver Programme: Mit einem gültigen britischen Kurzzeitvisum (keiner ETA) kommst du ohne irisches Visum nach Irland, musst aber zuerst mit diesem Visum legal nach Großbritannien eingereist sein. Du darfst bis zu 90 Tage bleiben oder bis deine britische Erlaubnis endet, je nachdem, was früher eintritt; das Programm läuft bis 31. Oktober 2026 und ist für Russland und Belarus seit 2022 ausgesetzt.',
        'British-Irish Visa Scheme (BIVS): Ein britisches Visum mit dem Vermerk „BIVS“ gilt auch für Irland, sofern deine erste Einreise nach Großbritannien erfolgte. Du darfst im Rahmen der bei der Einreise erteilten Erlaubnis bleiben, höchstens 90 Tage.',
      ],
      passports: {
        RU: 'Russen brauchen ein irisches Visum für 60 €; die Einreise mit britischem Visum ist für russische Staatsangehörige seit 2022 ausgesetzt. Direktflüge gibt es nicht: Man fliegt über Istanbul oder Dubai. Russische Karten funktionieren nicht – zahl Gebühr und Reise mit der Karte einer ausländischen Bank.',
        GB: 'Briten brauchen dank der Common Travel Area formal keinen Pass und dürfen in Irland frei leben und arbeiten, doch Airlines verlangen einen Lichtbildausweis – am einfachsten ist der Pass.',
        IN: 'Inder brauchen ein irisches Visum, doch ein britisches BIVS-Visum oder das Short Stay Visa Waiver Programme erlauben die Einreise ohne, wenn du zuerst nach Großbritannien kommst.',
        GE: 'Anders als für den Schengen-Raum brauchen Georgier ein irisches Visum; Anträge laufen über das VFS-Zentrum in Tiflis.',
        US: 'US-Bürger brauchen kein Visum (bis zu 90 Tage). Nutze auf dem Rückweg die US-Preclearance in Dublin oder Shannon, dann sparst du dir die Passschlangen am US-Flughafen.',
      },
    },
    fr: {
      summary:
        'L’Irlande ne fait pas partie de Schengen : un visa Schengen n’y est pas valable, il faut un visa irlandais. Les citoyens de l’UE et du Royaume-Uni entrent librement (l’Irlande et le Royaume-Uni forment la zone commune de voyage), et ceux des États-Unis, du Canada, d’Australie, du Japon, de Corée, du Brésil, du Mexique, des Émirats, d’Israël et d’Ukraine séjournent sans visa jusqu’à 90 jours. Les citoyens russes, biélorusses, géorgiens, kazakhs, indiens, chinois et turcs ont besoin d’un visa irlandais.',
      apply:
        'Remplissez le formulaire AVATS en ligne sur irishimmigration.ie, puis envoyez vos documents au bureau des visas ou à un centre VFS. Le visa à entrée unique coûte 60 €, à entrées multiples 100 € ; le traitement prend en général 4 à 8 semaines, alors déposez la demande trois mois à l’avance. Pour un visa, le passeport doit rester valable 6 mois après la sortie. Il faut une lettre précisant le but du voyage, six mois de relevés bancaires, une attestation de l’employeur, des réservations et une assurance.',
      visaRun:
        'L’Irlande n’applique pas la règle des 90/180 : à chaque entrée, un agent accorde jusqu’à 90 jours, et un séjour touristique ne peut pas être prolongé. Sortir et revenir aussitôt est possible en théorie, mais de longs séjours enchaînés ressemblent à une installation et finissent par un refus. Un passage au Royaume-Uni ne remet rien à zéro.',
      hacks: [
        'Les jours passés en Irlande ne comptent pas dans les 90/180 de Schengen : après 90 jours dans l’espace Schengen, vous pouvez encore passer jusqu’à 90 jours en Irlande.',
        'Les citoyens indiens et chinois titulaires d’un visa britannique portant la mention « BIVS » peuvent entrer en Irlande sans visa irlandais — et un visa irlandais BIVS ouvre aussi le Royaume-Uni.',
        'Les aéroports de Dublin et Shannon disposent du prédédouanement américain : vous passez la frontière des États-Unis en Irlande et arrivez là-bas comme sur un vol intérieur.',
        'Après quelques voyages sans incident, demandez un visa à entrées multiples : l’Irlande en délivre pour une durée allant jusqu’à cinq ans.',
      ],
      pitfalls: [
        'Entrer en Irlande par la route depuis l’Irlande du Nord sans visa irlandais est une infraction pour qui en a besoin, même si personne ne contrôle à la frontière.',
        'À l’inverse, aller à Belfast, c’est entrer au Royaume-Uni : les voyageurs exemptés de visa (hors Irlandais) doivent avoir une UK ETA à 16 £.',
        'Le Short Stay Visa Waiver Programme est prévu jusqu’au 31 octobre 2026 ; il a été reconduit tous les cinq ans, mais vérifiez sur irishimmigration.ie qu’il s’applique toujours à vos dates.',
      ],
      waivers: [
        'Short Stay Visa Waiver Programme : avec un visa britannique de court séjour valable (pas une ETA), vous pouvez entrer en Irlande sans visa irlandais, à condition d’être d’abord entré légalement au Royaume-Uni avec ce visa. Séjour de 90 jours maximum ou jusqu’à la fin de votre autorisation britannique si elle est plus courte ; le programme court jusqu’au 31 octobre 2026 et est suspendu pour la Russie et la Biélorussie depuis 2022.',
        'British-Irish Visa Scheme (BIVS) : un visa britannique portant la mention « BIVS » vaut aussi pour l’Irlande, à condition que votre première entrée ait eu lieu au Royaume-Uni. Le séjour reste limité à l’autorisation accordée à l’arrivée, 90 jours au maximum.',
      ],
      passports: {
        RU: 'Les Russes ont besoin d’un visa irlandais à 60 € ; l’entrée avec un visa britannique est suspendue pour eux depuis 2022. Pas de vol direct : on passe par Istanbul ou Dubaï. Les cartes bancaires russes ne fonctionnent pas : réglez les frais et le voyage avec la carte d’une banque étrangère.',
        GB: 'Grâce à la zone commune de voyage, les Britanniques n’ont en principe pas besoin de passeport et peuvent vivre et travailler librement en Irlande, mais les compagnies aériennes exigent une pièce d’identité avec photo : le passeport reste le plus simple.',
        IN: 'Les citoyens indiens ont besoin d’un visa irlandais, mais un visa britannique BIVS ou le Short Stay Visa Waiver Programme leur permet d’entrer sans, après être arrivés d’abord au Royaume-Uni.',
        GE: 'Contrairement à Schengen, les citoyens géorgiens ont besoin d’un visa irlandais ; les demandes passent par le centre VFS de Tbilissi.',
        US: 'Les citoyens américains n’ont pas besoin de visa (jusqu’à 90 jours). Au retour, profitez du prédédouanement à Dublin ou Shannon pour éviter les files au contrôle des passeports à l’arrivée aux États-Unis.',
      },
    },
    it: {
      summary:
        'L’Irlanda non fa parte di Schengen: qui il visto Schengen non vale e ne serve uno irlandese. I cittadini UE e britannici entrano liberamente (Irlanda e Regno Unito condividono la Common Travel Area), mentre quelli di Stati Uniti, Canada, Australia, Giappone, Corea, Brasile, Messico, Emirati, Israele e Ucraina restano senza visto fino a 90 giorni. I cittadini di Russia, Bielorussia, Georgia, Kazakistan, India, Cina e Turchia hanno bisogno del visto irlandese.',
      apply:
        'Compila il modulo AVATS online su irishimmigration.ie, poi invia i documenti all’ufficio visti o a un centro VFS. Il visto a ingresso singolo costa 60 €, quello a ingressi multipli 100 €; i tempi sono di solito 4–8 settimane, quindi fai domanda con tre mesi di anticipo. Per il visto il passaporto deve valere ancora 6 mesi dopo l’uscita. Servono una lettera sullo scopo del viaggio, sei mesi di estratti conto, una dichiarazione del datore di lavoro, prenotazioni e assicurazione.',
      visaRun:
        'In Irlanda non esiste la regola 90/180: a ogni ingresso un agente concede fino a 90 giorni, e i soggiorni turistici non si prorogano. Uscire e rientrare subito è possibile in teoria, ma visite lunghe una dopo l’altra sembrano residenza e portano al respingimento. I viaggi nel Regno Unito non azzerano nulla.',
      hacks: [
        'I giorni in Irlanda non contano per i 90/180 di Schengen: dopo 90 giorni in area Schengen puoi trascorrere fino ad altri 90 in Irlanda.',
        'I cittadini indiani e cinesi con un visto britannico con la dicitura «BIVS» possono entrare in Irlanda senza visto irlandese, e un visto irlandese BIVS apre anche il Regno Unito.',
        'Negli aeroporti di Dublino e Shannon c’è il preclearance statunitense: passi il controllo di frontiera USA già in Irlanda e atterri negli Stati Uniti come con un volo nazionale.',
        'Dopo qualche viaggio senza problemi, chiedi un visto per ingressi multipli: l’Irlanda lo rilascia fino a cinque anni.',
      ],
      pitfalls: [
        'Entrare in Irlanda via terra dall’Irlanda del Nord senza visto irlandese è una violazione per chi ne ha bisogno, anche se al confine nessuno controlla.',
        'Al contrario, una gita a Belfast significa entrare nel Regno Unito: chi è esente da visto (tranne gli irlandesi) deve avere una UK ETA da 16 £.',
        'Lo Short Stay Visa Waiver Programme è previsto fino al 31 ottobre 2026; finora è stato rinnovato ogni cinque anni, ma verifica su irishimmigration.ie che sia ancora attivo nelle tue date.',
      ],
      waivers: [
        'Short Stay Visa Waiver Programme: con un visto britannico per soggiorni brevi valido (non una ETA) puoi entrare in Irlanda senza visto irlandese, ma prima devi essere entrato legalmente nel Regno Unito con quel visto. Puoi restare fino a 90 giorni o fino alla fine del permesso britannico, se più breve; il programma dura fino al 31 ottobre 2026 ed è sospeso per Russia e Bielorussia dal 2022.',
        'British-Irish Visa Scheme (BIVS): un visto britannico con la dicitura «BIVS» vale anche per l’Irlanda, purché il primo ingresso sia avvenuto nel Regno Unito. Puoi restare nei limiti del permesso concesso all’arrivo, al massimo 90 giorni.',
      ],
      passports: {
        RU: 'I russi hanno bisogno di un visto irlandese da 60 €; l’ingresso con visto britannico è sospeso per i cittadini russi dal 2022. Non ci sono voli diretti: si vola via Istanbul o Dubai. Le carte russe non funzionano, quindi paga la tassa e il viaggio con la carta di una banca estera.',
        GB: 'Grazie alla Common Travel Area i britannici formalmente non hanno bisogno del passaporto e possono vivere e lavorare liberamente in Irlanda, ma le compagnie aeree chiedono un documento con foto: il passaporto è la scelta più semplice.',
        IN: 'I cittadini indiani hanno bisogno del visto irlandese, ma un visto britannico BIVS o lo Short Stay Visa Waiver Programme consentono di entrare senza, dopo essere arrivati prima nel Regno Unito.',
        GE: 'A differenza di Schengen, i cittadini georgiani hanno bisogno del visto irlandese; le domande si presentano al centro VFS di Tbilisi.',
        US: 'I cittadini statunitensi non hanno bisogno del visto (fino a 90 giorni). Al ritorno usa il preclearance USA a Dublino o Shannon ed eviti le code ai passaporti all’arrivo.',
      },
    },
  },
};

export default guide;
