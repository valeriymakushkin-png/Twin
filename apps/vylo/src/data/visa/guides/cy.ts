import type { VisaGuide } from '../types';

// Passports that need a Cypriot visa but may use a Schengen visa or permit instead (Turkey and Azerbaijan are excluded)
const SCHENGEN_DOC_PASSPORTS = [
  'AF', 'AM', 'AO', 'BD', 'BF', 'BH', 'BI', 'BJ', 'BO', 'BT', 'BW', 'BY', 'BZ', 'CD', 'CF', 'CG', 'CI', 'CM', 'CN', 'CU',
  'CV', 'DJ', 'DO', 'DZ', 'EC', 'EG', 'ER', 'ET', 'FJ', 'GA', 'GH', 'GM', 'GN', 'GQ', 'GW', 'GY', 'HT', 'ID', 'IN', 'IQ',
  'IR', 'JM', 'JO', 'KE', 'KG', 'KH', 'KM', 'KP', 'KW', 'KZ', 'LA', 'LB', 'LK', 'LR', 'LS', 'LY', 'MA', 'MG', 'ML', 'MM',
  'MN', 'MR', 'MV', 'MW', 'MZ', 'NA', 'NE', 'NG', 'NP', 'NR', 'OM', 'PG', 'PH', 'PK', 'PS', 'QA', 'RU', 'RW', 'SA', 'SD',
  'SL', 'SN', 'SO', 'SR', 'SS', 'ST', 'SY', 'SZ', 'TD', 'TG', 'TH', 'TJ', 'TM', 'TN', 'TZ', 'UG', 'UZ', 'VN', 'VU', 'YE',
  'ZA', 'ZM', 'ZW',
];

const guide: VisaGuide = {
  code: 'CY',
  checked: '2026-10',
  fees: { visa: { kind: 'fixed', amount: 90, currency: 'EUR' } },
  stay: { visa: 90 },
  links: { immigration: 'https://www.gov.cy/en/information/visas/' },
  docs: ['insurance', 'returnTicket', 'booking', 'finance'],
  passportMonths: 3,
  rule: { days: 90, window: 180 },
  visaRun: 'no',
  nomad: { name: 'Digital Nomad Visa', months: 12, income: { kind: 'from', amount: 3500, currency: 'EUR' } },
  waivers: [{ holds: ['visaSchengen', 'resEU'], passports: SCHENGEN_DOC_PASSPORTS, status: 'free', days: 90 }],
  text: {
    ru: {
      summary:
        'Кипр в ЕС, но пока не в Шенгене: у него своя национальная виза и свой счёт 90/180. Граждане ЕС въезжают по ID-карте; граждане США, Великобритании, Канады, Австралии, Японии, Кореи, Бразилии, Мексики, ОАЭ, Израиля, Украины и Грузии — без визы до 90 дней. Остальным, включая граждан России, Индии и Китая, нужна кипрская виза — или действующая двух- либо многократная шенгенская виза.',
      apply:
        'Кипрскую визу оформляют в консульстве или визовом центре: сбор 90 €, решение обычно около 15 дней. Нужны страховка, брони, обратный билет и выписка со счёта. Если у вас уже есть двух- или многократная шенгенская виза либо ВНЖ страны Шенгена, отдельная виза не нужна — въезжайте по ней, пока она действует.',
      visaRun:
        'Визаран не работает: Кипр считает свои 90 дней в любые 180 отдельно от Шенгена, а поездка на север острова формально не считается выездом из страны. Выезд в Турцию, Израиль или Грецию лишь ставит счётчик на паузу.',
      nomad:
        'Виза цифрового кочевника даёт право жить на Кипре год с продлением ещё на два. Нужен доход от удалённой работы на иностранного работодателя или клиентов от 3500 € в месяц после налогов, медицинская страховка и справка о несудимости; количество таких виз ограничено.',
      hacks: [
        'Дни на Кипре не входят в шенгенские 90/180, а шенгенские — в кипрские: путешественники без визы могут провести 90 дней в Шенгене, а затем ещё до 90 на Кипре.',
        'Из Никосии на север острова можно пройти пешком через пункт Ледра-стрит в центре города — нужен только паспорт; на машине — через Агиос-Дометиос или Ледра-Палас.',
        'Ларнака и Пафос связаны прямыми рейсами с Афинами, Тель-Авивом, Дубаем и Лондоном — удобно совместить Кипр с Грецией или Израилем без лишних пересадок.',
        'С ноября 2025 года россиянам выдают в основном однократные шенгенские визы — они для въезда на Кипр не подходят, поэтому кипрскую визу лучше оформлять отдельно.',
      ],
      pitfalls: [
        'Не прилетайте через аэропорт Эрджан и не приплывайте в порты Северного Кипра: Республика Кипр считает такой въезд незаконным и может отказать в переходе на юг или в будущих въездах.',
        'Однократная шенгенская виза для Кипра не подходит — только двух- или многократная, действующая на весь срок поездки.',
        'Шенгенская виза или ВНЖ не освобождают от кипрской визы граждан Турции и Азербайджана — им нужна обычная кипрская виза.',
      ],
      waivers: [
        'Действующая двух- или многократная шенгенская виза либо ВНЖ страны Шенгена заменяет кипрскую визу: до 90 дней в любые 180, но не дольше срока действия документа. ВНЖ Кипра или Ирландии сюда не относятся; граждан Турции и Азербайджана правило не касается.',
      ],
      passports: {
        RU: 'Россиянам нужна кипрская виза за 90 € — бесплатная «провиза» работала только для прямых рейсов из России, которых нет с 2022 года. Приём документов через визовые центры BLS возобновлён 6 июля 2026 года в восьми городах; заявления также берут посольство в Москве и консульства в Санкт-Петербурге, Екатеринбурге и Краснодаре. Летают через Стамбул, Ереван или Дубай; российские карты не работают.',
        TR: 'Гражданам Турции нужна кипрская виза — шенгенские визы и ВНЖ для них не действуют. Въезд на север острова из Турции Республика Кипр считает незаконным.',
        IN: 'Гражданам Индии нужна кипрская виза, но действующая двух- или многократная шенгенская виза её заменяет — проще всего въехать по ней.',
        GB: 'Британцам виза не нужна (90/180). На острове есть британские суверенные базы Акротири и Декелия — граница с ними открыта.',
      },
    },
    en: {
      summary:
        'Cyprus is in the EU but not yet in Schengen: it has its own national visa and its own 90/180 count. EU citizens enter with an ID card; citizens of the US, UK, Canada, Australia, Japan, Korea, Brazil, Mexico, the UAE, Israel, Ukraine and Georgia stay visa-free for up to 90 days. Everyone else, including citizens of Russia, India and China, needs a Cypriot visa — or a valid double- or multiple-entry Schengen visa.',
      apply:
        'Cypriot visas are issued by consulates and visa centres: the fee is €90 and decisions usually take about 15 days. You need insurance, bookings, a return ticket and bank statements. If you already hold a double- or multiple-entry Schengen visa or a Schengen residence permit, you need no separate visa — enter on it while it is valid.',
      visaRun:
        'Visa runs do not work: Cyprus counts its own 90 days in any 180, separately from Schengen, and a trip to the north of the island does not formally count as leaving the country. A trip to Turkey, Israel or Greece only pauses the clock.',
      nomad:
        'The Digital Nomad Visa lets you live in Cyprus for a year, renewable for two more. You need remote-work income from a foreign employer or clients of at least €3,500 a month after tax, health insurance and a criminal-record certificate; the number of visas is capped.',
      hacks: [
        'Days in Cyprus do not count towards the Schengen 90/180, and vice versa: visa-free travellers can spend 90 days in Schengen and then up to another 90 in Cyprus.',
        'From Nicosia you can walk to the north through the Ledra Street crossing in the city centre with just your passport; by car, use Agios Dometios or Ledra Palace.',
        'Larnaca and Paphos have direct flights to Athens, Tel Aviv, Dubai and London — easy to combine Cyprus with Greece or Israel without extra connections.',
        'Since November 2025 Russians have mostly been getting single-entry Schengen visas, which do not work for Cyprus, so apply for a Cypriot visa separately.',
      ],
      pitfalls: [
        'Do not fly into Ercan or sail into ports in the north: the Republic of Cyprus treats that as illegal entry and may refuse you at the crossing to the south or on future trips.',
        'A single-entry Schengen visa does not work for Cyprus — only a double- or multiple-entry one valid for the whole trip.',
        'A Schengen visa or permit does not exempt Turkish or Azerbaijani citizens — they need a regular Cypriot visa.',
      ],
      waivers: [
        'A valid double- or multiple-entry Schengen visa or a residence permit from a Schengen state replaces the Cypriot visa: up to 90 days in any 180, and never beyond the document’s validity. Cypriot or Irish permits do not count, and the rule does not apply to Turkish or Azerbaijani citizens.',
      ],
      passports: {
        RU: 'Russians need a €90 Cypriot visa — the free “pro-visa” only worked with direct flights from Russia, which have not existed since 2022. BLS visa centres resumed accepting applications in eight cities on 6 July 2026; the embassy in Moscow and consulates in St Petersburg, Yekaterinburg and Krasnodar also take applications. People fly via Istanbul, Yerevan or Dubai, and Russian bank cards do not work.',
        TR: 'Turkish citizens need a Cypriot visa — Schengen visas and permits do not count for them. The Republic of Cyprus treats entry into the north from Turkey as illegal.',
        IN: 'Indian citizens need a Cypriot visa, but a valid double- or multiple-entry Schengen visa replaces it — the easiest way in.',
        GB: 'British citizens need no visa (90/180). The island hosts the British Sovereign Base Areas of Akrotiri and Dhekelia, with open borders.',
      },
    },
    es: {
      summary:
        'Chipre está en la UE, pero aún no en Schengen: tiene su propio visado nacional y su propio cómputo de 90/180. Los ciudadanos de la UE entran con el DNI; los de EE. UU., Reino Unido, Canadá, Australia, Japón, Corea, Brasil, México, Emiratos, Israel, Ucrania y Georgia, sin visado hasta 90 días. El resto, incluidos los ciudadanos de Rusia, India y China, necesita visado chipriota o un visado Schengen vigente de dos o más entradas.',
      apply:
        'El visado chipriota lo expiden consulados y centros de visados: cuesta 90 € y la resolución suele tardar unos 15 días. Necesitas seguro, reservas, billete de vuelta y extractos bancarios. Si ya tienes un visado Schengen de dos o más entradas o un permiso de residencia de un país Schengen, no necesitas otro visado: entra con él mientras esté vigente.',
      visaRun:
        'Los visa runs no funcionan: Chipre cuenta sus propios 90 días en cualquier periodo de 180, aparte de Schengen, y un viaje al norte de la isla no cuenta formalmente como salida del país. Un viaje a Turquía, Israel o Grecia solo detiene el contador.',
      nomad:
        'El visado de nómada digital permite vivir en Chipre un año, renovable dos más. Necesitas ingresos por trabajo en remoto de un empleador o clientes extranjeros de al menos 3500 € netos al mes, seguro médico y certificado de antecedentes penales; el número de visados es limitado.',
      hacks: [
        'Los días en Chipre no cuentan para los 90/180 de Schengen, ni al revés: quien viaja sin visado puede pasar 90 días en Schengen y luego hasta otros 90 en Chipre.',
        'Desde Nicosia puedes cruzar a pie al norte por el paso de Ledra Street, en pleno centro, solo con el pasaporte; en coche, por Agios Dometios o Ledra Palace.',
        'Lárnaca y Pafos tienen vuelos directos a Atenas, Tel Aviv, Dubái y Londres: fácil combinar Chipre con Grecia o Israel sin escalas extra.',
        'Desde noviembre de 2025 los rusos reciben sobre todo visados Schengen de una sola entrada, que no sirven para Chipre; mejor solicitar el visado chipriota aparte.',
      ],
      pitfalls: [
        'No llegues en avión a Ercan ni en barco a puertos del norte: la República de Chipre lo considera entrada ilegal y puede rechazarte al cruzar al sur o en viajes futuros.',
        'Un visado Schengen de una sola entrada no sirve para Chipre: solo uno de dos o más entradas válido durante todo el viaje.',
        'Un visado o permiso Schengen no exime a los ciudadanos turcos ni azerbaiyanos: necesitan un visado chipriota normal.',
      ],
      waivers: [
        'Un visado Schengen vigente de dos o más entradas o un permiso de residencia de un país Schengen sustituye al visado chipriota: hasta 90 días en cualquier periodo de 180 y nunca más allá de la validez del documento. Los permisos de Chipre o Irlanda no cuentan, y la regla no se aplica a ciudadanos turcos ni azerbaiyanos.',
      ],
      passports: {
        RU: 'Los rusos necesitan un visado chipriota de 90 €: el «pro-visado» gratuito solo valía con vuelos directos desde Rusia, que no existen desde 2022. Los centros de visados BLS volvieron a aceptar solicitudes en ocho ciudades el 6 de julio de 2026; también las tramitan la embajada en Moscú y los consulados de San Petersburgo, Ekaterimburgo y Krasnodar. Se vuela vía Estambul, Ereván o Dubái, y las tarjetas rusas no funcionan.',
        TR: 'Los ciudadanos turcos necesitan visado chipriota: los visados y permisos Schengen no les sirven. La República de Chipre considera ilegal la entrada al norte desde Turquía.',
        IN: 'Los ciudadanos indios necesitan visado chipriota, pero un visado Schengen vigente de dos o más entradas lo sustituye: es la vía más sencilla.',
        GB: 'Los británicos no necesitan visado (90/180). En la isla están las bases soberanas británicas de Akrotiri y Dhekelia, con fronteras abiertas.',
      },
    },
    de: {
      summary:
        'Zypern ist in der EU, aber noch nicht im Schengen-Raum: Es hat ein eigenes nationales Visum und eine eigene 90/180-Zählung. EU-Bürger reisen mit dem Personalausweis ein; Staatsangehörige der USA, Großbritanniens, Kanadas, Australiens, Japans, Koreas, Brasiliens, Mexikos, der VAE, Israels, der Ukraine und Georgiens bleiben bis zu 90 Tage visumfrei. Alle anderen, auch Bürger Russlands, Indiens und Chinas, brauchen ein zyprisches Visum – oder ein gültiges Schengen-Visum für zwei oder mehr Einreisen.',
      apply:
        'Zyprische Visa stellen Konsulate und Visazentren aus: Die Gebühr beträgt 90 €, die Entscheidung dauert meist etwa 15 Tage. Nötig sind Versicherung, Buchungen, Rückflugticket und Kontoauszüge. Hast du bereits ein Schengen-Visum für zwei oder mehr Einreisen oder einen Aufenthaltstitel eines Schengen-Staats, brauchst du kein eigenes Visum – reise damit ein, solange es gilt.',
      visaRun:
        'Visa-Runs funktionieren nicht: Zypern zählt seine eigenen 90 Tage innerhalb von 180, getrennt vom Schengen-Raum, und ein Abstecher in den Norden der Insel gilt formal nicht als Ausreise. Eine Reise in die Türkei, nach Israel oder Griechenland hält die Uhr nur an.',
      nomad:
        'Das Digital Nomad Visa erlaubt ein Jahr in Zypern, verlängerbar um zwei weitere. Nötig sind Einkünfte aus Remote-Arbeit für einen ausländischen Arbeitgeber oder Kunden von mindestens 3.500 € netto im Monat, eine Krankenversicherung und ein Führungszeugnis; die Zahl der Visa ist begrenzt.',
      hacks: [
        'Tage in Zypern zählen nicht zu den Schengen-90/180 und umgekehrt: Visumfreie Reisende können 90 Tage im Schengen-Raum und danach bis zu weitere 90 Tage in Zypern verbringen.',
        'In Nikosia gehst du über den Übergang Ledra Street mitten in der Altstadt zu Fuß in den Norden, nur mit Pass; mit dem Auto über Agios Dometios oder Ledra Palace.',
        'Larnaka und Paphos haben Direktflüge nach Athen, Tel Aviv, Dubai und London – Zypern lässt sich so leicht mit Griechenland oder Israel kombinieren.',
        'Seit November 2025 erhalten Russen meist nur Schengen-Visa für die einmalige Einreise, die für Zypern nicht gelten – beantrage das zyprische Visum also separat.',
      ],
      pitfalls: [
        'Flieg nicht nach Ercan und reise nicht über Häfen im Norden ein: Die Republik Zypern wertet das als illegale Einreise und kann dich am Übergang in den Süden oder bei künftigen Reisen abweisen.',
        'Ein Schengen-Visum für die einmalige Einreise gilt für Zypern nicht – nur eines für zwei oder mehr Einreisen, das die ganze Reise abdeckt.',
        'Ein Schengen-Visum oder -Aufenthaltstitel befreit türkische und aserbaidschanische Staatsangehörige nicht – sie brauchen ein reguläres zyprisches Visum.',
      ],
      waivers: [
        'Ein gültiges Schengen-Visum für zwei oder mehr Einreisen oder ein Aufenthaltstitel eines Schengen-Staats ersetzt das zyprische Visum: bis zu 90 Tage innerhalb von 180, nie über die Gültigkeit des Dokuments hinaus. Zyprische oder irische Aufenthaltstitel zählen nicht, und für türkische oder aserbaidschanische Staatsangehörige gilt die Regel nicht.',
      ],
      passports: {
        RU: 'Russen brauchen ein zyprisches Visum für 90 € – das kostenlose „Pro-Visum“ galt nur bei Direktflügen aus Russland, die es seit 2022 nicht mehr gibt. Die Visazentren von BLS nehmen seit 6. Juli 2026 in acht Städten wieder Anträge an; außerdem die Botschaft in Moskau und die Konsulate in Sankt Petersburg, Jekaterinburg und Krasnodar. Man fliegt über Istanbul, Jerewan oder Dubai; russische Karten funktionieren nicht.',
        TR: 'Türkische Staatsangehörige brauchen ein zyprisches Visum – Schengen-Visa und -Aufenthaltstitel zählen für sie nicht. Die Einreise in den Norden aus der Türkei gilt der Republik Zypern als illegal.',
        IN: 'Inder brauchen ein zyprisches Visum, doch ein gültiges Schengen-Visum für zwei oder mehr Einreisen ersetzt es – der einfachste Weg.',
        GB: 'Briten brauchen kein Visum (90/180). Auf der Insel liegen die britischen Militärbasen Akrotiri und Dhekelia mit offenen Grenzen.',
      },
    },
    fr: {
      summary:
        'Chypre fait partie de l’UE mais pas encore de Schengen : elle a son propre visa national et son propre décompte des 90/180. Les citoyens de l’UE entrent avec leur carte d’identité ; les ressortissants des États-Unis, du Royaume-Uni, du Canada, d’Australie, du Japon, de Corée, du Brésil, du Mexique, des Émirats, d’Israël, d’Ukraine et de Géorgie séjournent sans visa jusqu’à 90 jours. Les autres, dont les citoyens russes, indiens et chinois, ont besoin d’un visa chypriote — ou d’un visa Schengen valable à deux entrées ou plus.',
      apply:
        'Le visa chypriote est délivré par les consulats et centres de visas : 90 €, avec une décision en général sous une quinzaine de jours. Il faut une assurance, des réservations, un billet retour et des relevés bancaires. Si vous avez déjà un visa Schengen à deux entrées ou plus, ou un titre de séjour d’un État Schengen, aucun visa supplémentaire n’est nécessaire : entrez avec, tant qu’il est valable.',
      visaRun:
        'Le visa run ne fonctionne pas : Chypre décompte ses propres 90 jours sur 180, séparément de Schengen, et un passage au nord de l’île ne compte pas formellement comme une sortie du pays. Un voyage en Turquie, en Israël ou en Grèce ne fait que suspendre le compteur.',
      nomad:
        'Le visa nomade numérique permet de vivre un an à Chypre, renouvelable deux ans. Il faut des revenus de télétravail pour un employeur ou des clients étrangers d’au moins 3 500 € nets par mois, une assurance maladie et un extrait de casier judiciaire ; le nombre de visas est plafonné.',
      hacks: [
        'Les jours passés à Chypre ne comptent pas dans les 90/180 de Schengen, et inversement : les voyageurs exemptés de visa peuvent passer 90 jours dans l’espace Schengen, puis jusqu’à 90 autres à Chypre.',
        'À Nicosie, vous passez à pied au nord par le point de Ledra Street, en plein centre, avec votre seul passeport ; en voiture, par Agios Dometios ou Ledra Palace.',
        'Larnaca et Paphos ont des vols directs vers Athènes, Tel-Aviv, Dubaï et Londres : facile de combiner Chypre avec la Grèce ou Israël sans correspondance supplémentaire.',
        'Depuis novembre 2025, les Russes obtiennent surtout des visas Schengen à entrée unique, inutilisables pour Chypre : demandez donc le visa chypriote séparément.',
      ],
      pitfalls: [
        'N’arrivez pas par l’aéroport d’Ercan ni par les ports du nord : la République de Chypre considère cette entrée comme illégale et peut vous refuser le passage vers le sud ou lors de voyages futurs.',
        'Un visa Schengen à entrée unique ne fonctionne pas pour Chypre : seul un visa à deux entrées ou plus, valable pour tout le séjour, convient.',
        'Un visa ou titre de séjour Schengen n’exempte pas les citoyens turcs et azerbaïdjanais : il leur faut un visa chypriote classique.',
      ],
      waivers: [
        'Un visa Schengen valable à deux entrées ou plus, ou un titre de séjour d’un État Schengen, remplace le visa chypriote : jusqu’à 90 jours sur 180, jamais au-delà de la validité du document. Les titres de séjour chypriotes ou irlandais ne comptent pas, et la règle ne s’applique pas aux citoyens turcs et azerbaïdjanais.',
      ],
      passports: {
        RU: 'Les Russes ont besoin d’un visa chypriote à 90 € : le « pro-visa » gratuit ne valait qu’avec des vols directs depuis la Russie, inexistants depuis 2022. Les centres de visas BLS ont rouvert les dépôts dans huit villes le 6 juillet 2026 ; l’ambassade à Moscou et les consulats de Saint-Pétersbourg, Iekaterinbourg et Krasnodar reçoivent aussi les demandes. On passe par Istanbul, Erevan ou Dubaï ; les cartes bancaires russes ne fonctionnent pas.',
        TR: 'Les citoyens turcs ont besoin d’un visa chypriote : les visas et titres Schengen ne comptent pas pour eux. La République de Chypre considère comme illégale l’entrée au nord depuis la Turquie.',
        IN: 'Les citoyens indiens ont besoin d’un visa chypriote, mais un visa Schengen valable à deux entrées ou plus le remplace : c’est la voie la plus simple.',
        GB: 'Les Britanniques n’ont pas besoin de visa (90/180). L’île abrite les bases souveraines britanniques d’Akrotiri et Dhekelia, aux frontières ouvertes.',
      },
    },
    it: {
      summary:
        'Cipro è nell’UE ma non ancora in Schengen: ha un proprio visto nazionale e un proprio conteggio 90/180. I cittadini UE entrano con la carta d’identità; i cittadini di Stati Uniti, Regno Unito, Canada, Australia, Giappone, Corea, Brasile, Messico, Emirati, Israele, Ucraina e Georgia restano senza visto fino a 90 giorni. Tutti gli altri, compresi i cittadini di Russia, India e Cina, hanno bisogno del visto cipriota oppure di un visto Schengen valido per due o più ingressi.',
      apply:
        'Il visto cipriota lo rilasciano consolati e centri visti: costa 90 € e la decisione arriva di solito in circa 15 giorni. Servono assicurazione, prenotazioni, biglietto di ritorno ed estratti conto. Se hai già un visto Schengen per due o più ingressi o un permesso di soggiorno di un paese Schengen, non ti serve un altro visto: entra con quello finché è valido.',
      visaRun:
        'Il visa run non funziona: Cipro conta i propri 90 giorni ogni 180, separatamente da Schengen, e una gita nel nord dell’isola non vale formalmente come uscita dal paese. Un viaggio in Turchia, Israele o Grecia mette solo in pausa il contatore.',
      nomad:
        'Il visto per nomadi digitali consente di vivere a Cipro per un anno, rinnovabile per altri due. Servono redditi da lavoro da remoto per un datore di lavoro o clienti esteri di almeno 3.500 € netti al mese, un’assicurazione sanitaria e il certificato del casellario giudiziale; il numero di visti è limitato.',
      hacks: [
        'I giorni a Cipro non contano per i 90/180 di Schengen, e viceversa: chi viaggia senza visto può passare 90 giorni in area Schengen e poi fino ad altri 90 a Cipro.',
        'Da Nicosia passi a piedi al nord dal valico di Ledra Street, in pieno centro, con il solo passaporto; in auto, da Agios Dometios o Ledra Palace.',
        'Larnaca e Pafo hanno voli diretti per Atene, Tel Aviv, Dubai e Londra: è facile abbinare Cipro a Grecia o Israele senza scali extra.',
        'Da novembre 2025 i russi ricevono soprattutto visti Schengen a ingresso singolo, che non valgono per Cipro: conviene chiedere il visto cipriota a parte.',
      ],
      pitfalls: [
        'Non arrivare in aereo a Ercan né via mare nei porti del nord: la Repubblica di Cipro lo considera ingresso illegale e può respingerti al passaggio verso sud o nei viaggi successivi.',
        'Un visto Schengen a ingresso singolo non vale per Cipro: serve un visto per due o più ingressi, valido per tutto il viaggio.',
        'Un visto o permesso Schengen non esenta i cittadini turchi e azeri: a loro serve un normale visto cipriota.',
      ],
      waivers: [
        'Un visto Schengen valido per due o più ingressi o un permesso di soggiorno di un paese Schengen sostituisce il visto cipriota: fino a 90 giorni ogni 180, mai oltre la validità del documento. I permessi ciprioti o irlandesi non contano, e la regola non vale per i cittadini turchi e azeri.',
      ],
      passports: {
        RU: 'I russi hanno bisogno di un visto cipriota da 90 €: il «pro-visto» gratuito valeva solo con voli diretti dalla Russia, inesistenti dal 2022. I centri visti BLS hanno ripreso ad accettare domande in otto città il 6 luglio 2026; le ricevono anche l’ambasciata a Mosca e i consolati di San Pietroburgo, Ekaterinburg e Krasnodar. Si vola via Istanbul, Erevan o Dubai, e le carte russe non funzionano.',
        TR: 'I cittadini turchi hanno bisogno del visto cipriota: visti e permessi Schengen per loro non valgono. La Repubblica di Cipro considera illegale l’ingresso nel nord dalla Turchia.',
        IN: 'I cittadini indiani hanno bisogno del visto cipriota, ma un visto Schengen valido per due o più ingressi lo sostituisce: è la via più semplice.',
        GB: 'I britannici non hanno bisogno del visto (90/180). Sull’isola ci sono le basi sovrane britanniche di Akrotiri e Dhekelia, con confini aperti.',
      },
    },
  },
};

export default guide;
