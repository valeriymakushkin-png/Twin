import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'MY',
  checked: '2026-10',
  overrides: {
    // Unilateral visa exemption for Indian citizens: 30 days, extended until 31 December 2026
    IN: { status: 'free', days: 30 },
  },
  stay: { evisa: 30 },
  links: { evisa: 'https://malaysiavisa.imi.gov.my', immigration: 'https://www.imi.gov.my' },
  forms: [{ name: 'MDAC', url: 'https://imigresen-online.imi.gov.my/mdac/main', fee: { kind: 'free' } }],
  docs: ['returnTicket', 'booking'],
  passportMonths: 6,
  visaRun: 'yes',
  borders: [
    { name: 'Johor Bahru – Woodlands (Causeway)', to: 'SG', lat: 1.4545, lng: 103.7693 },
    { name: 'Padang Besar', to: 'TH', lat: 6.6623, lng: 100.3204 },
    { name: 'Stulang Laut (Johor Bahru) → Batam', to: 'ID', lat: 1.4705, lng: 103.779 },
    { name: 'Miri – Sungai Tujoh', to: 'BN', lat: 4.5867, lng: 114.0767 },
  ],
  nomad: { name: 'DE Rantau Nomad Pass', months: 12, income: { kind: 'fixed', amount: 24000, currency: 'USD' } },
  text: {
    ru: {
      summary:
        'Граждане США, Великобритании, ЕС, Японии и Кореи въезжают без визы на 90 дней, граждане России, стран СНГ, Китая и Индии — на 30 дней. Визу заранее оформляют лишь немногие страны, а с израильским паспортом въезд закрыт. Перед поездкой все иностранцы заполняют бесплатную карту MDAC.',
      apply:
        'Карту MDAC подают на сайте иммиграционной службы не раньше чем за 3 дня до прибытия: данные паспорта, рейс и адрес — и через минуту приходит подтверждение на почту. Тем, кому нужна виза, оформляют eVISA на malaysiavisa.imi.gov.my: 30 дней, решение за 2–3 рабочих дня. Обратный билет и бронь жилья на границе могут спросить.',
      visaRun:
        'Визаран работает: после выезда безвизовый срок начинается заново. Самый простой вариант — автобус из Джохор-Бару в Сингапур через дамбу (около часа с очередями), поезд до Паданг-Бесара на границе с Таиландом или паром в индонезийский Батам. Частые въезды подряд вызывают вопросы, поэтому держите под рукой обратный билет и бронь.',
      nomad:
        'DE Rantau Nomad Pass — виза для удалённых работников на 3–12 месяцев с возможностью продлить ещё на 12. Нужен доход от 24 000 $ в год для IT-специалистов и от 60 000 $ для остальных профессий (маркетинг, консалтинг, руководители), договор с иностранной компанией или клиентами и страховка. Сбор — 1000 ринггитов плюс 500 за каждого члена семьи, заявку подают через портал MDEC.',
      hacks: [
        'Владельцы паспортов примерно 60 стран, включая США, Великобританию, ЕС, Японию, Корею и Австралию, проходят контроль в аэропортах Куала-Лумпура через автоматические гейты — после подачи MDAC очередь занимает пару минут.',
        'Остров Лангкави — зона беспошлинной торговли, а оттуда ходят паромы на тайский Ко Липе: визаран можно превратить в поездку на море.',
        'Сабах и Саравак на Борнео проводят собственный паспортный контроль: даже на внутренних рейсах из Куала-Лумпура держите паспорт при себе, вам поставят ещё один штамп.',
        'Самый дешёвый выезд в Сингапур — автобусы Causeway Link из центра Джохор-Бару за несколько ринггитов; к концу 2026 года должна заработать электричка RTS Link до Вудлендса.',
        'Пенсионерам и тем, кто хочет жить годами, подходит программа MM2H с депозитом в банке — это не виза для туристов, но легальный способ жить в стране от 5 лет.',
      ],
      pitfalls: [
        'Сайты-посредники берут деньги за бесплатную карту MDAC. Подавайте её только на imi.gov.my.',
        'Отсчёт идёт со дня въезда, а не с даты рейса. За просрочку штрафуют и могут запретить въезд, а продлить туристический срок почти невозможно.',
        'Владельцам израильских паспортов въезд закрыт, а израильские штампы в паспорте других стран проблем обычно не вызывают.',
      ],
      passports: {
        RU: 'Россиянам — 30 дней без визы. Прямых рейсов из Москвы нет, летят через Дубай, Доху, Стамбул или Бангкок. Российские Visa и Mastercard не работают — берите доллары или евро; многие банкоматы принимают UnionPay.',
        IN: 'Граждане Индии въезжают без визы на 30 дней по временной льготе, продлённой до 31 декабря 2026 года. Перед поездкой в 2027 году проверьте, продлили ли её снова.',
        CN: 'Для граждан Китая действует взаимный безвиз: 30 дней за въезд, не более 90 дней за 180.',
        IL: 'Израильский паспорт в Малайзию не пускают без специального разрешения МВД, которое туристам практически не выдают.',
      },
    },
    en: {
      summary:
        'US, UK, EU, Japanese and Korean citizens enter visa-free for 90 days; Russian, other CIS, Chinese and Indian citizens for 30 days. Only a few nationalities need a visa in advance, and Israeli passport holders are not admitted. Every foreign visitor files the free MDAC arrival card before the trip.',
      apply:
        'File the MDAC on the immigration website no earlier than three days before arrival: passport details, flight and address, and the confirmation lands in your inbox within a minute. Those who need a visa apply for an eVISA at malaysiavisa.imi.gov.my: 30 days, decided in 2–3 working days. Officers may ask for an onward ticket and an accommodation booking.',
      visaRun:
        'Visa runs work: the visa-free period restarts after you leave. The easiest options are a bus from Johor Bahru across the Causeway to Singapore (about an hour with queues), the train to Padang Besar on the Thai border, or a ferry to Batam in Indonesia. Frequent back-to-back entries draw questions, so keep an onward ticket and a booking at hand.',
      nomad:
        'The DE Rantau Nomad Pass is a remote-work visa for 3–12 months, renewable for another 12. You need an income of at least $24,000 a year in tech roles or $60,000 in other fields (marketing, consulting, executives), a contract with a foreign company or clients, and insurance. The fee is 1,000 ringgit plus 500 per family member; apply through the MDEC portal.',
      hacks: [
        'Passport holders of about 60 countries, including the US, UK, EU, Japan, Korea and Australia, can use the automated gates at Kuala Lumpur airports — once your MDAC is filed, immigration takes a couple of minutes.',
        'Langkawi is a duty-free island with ferries to Koh Lipe in Thailand, so a visa run can double as a beach trip.',
        'Sabah and Sarawak on Borneo run their own passport control: keep your passport with you even on domestic flights from Kuala Lumpur, as you will get another stamp.',
        'The cheapest way to Singapore is a Causeway Link bus from central Johor Bahru for a few ringgit; the RTS Link train to Woodlands is due to open by the end of 2026.',
        'Retirees and anyone planning to stay for years can look at MM2H, a programme based on a bank deposit — not a tourist visa, but a legal way to live in the country for five years or more.',
      ],
      pitfalls: [
        'Agency sites charge for the free MDAC card. File it only on imi.gov.my.',
        'Your stay counts from the day you enter, not your flight date. Overstays are fined and can lead to a ban, and tourist stays are almost never extended.',
        'Israeli passport holders are not admitted, although Israeli stamps in other passports rarely cause problems.',
      ],
      passports: {
        RU: 'Russian citizens get 30 days visa-free. There are no direct flights from Moscow; connect in Dubai, Doha, Istanbul or Bangkok. Russian-issued Visa and Mastercard cards do not work, so bring dollars or euros; many ATMs accept UnionPay.',
        IN: 'Indian citizens enter visa-free for 30 days under a temporary waiver extended until 31 December 2026. Before travelling in 2027, check whether it has been renewed again.',
        CN: 'Chinese citizens benefit from a mutual visa exemption: 30 days per entry and no more than 90 days in 180.',
        IL: 'Israeli passports are not admitted without a special Home Ministry permit, which tourists practically never get.',
      },
    },
    es: {
      summary:
        'Los ciudadanos de EE. UU., el Reino Unido, la UE, Japón y Corea entran sin visado durante 90 días; los de Rusia, el resto de la CEI, China y la India, durante 30. Solo unas pocas nacionalidades necesitan visado previo, y los titulares de pasaporte israelí no pueden entrar. Todos los visitantes extranjeros rellenan antes del viaje la tarjeta de llegada MDAC, que es gratuita.',
      apply:
        'Presenta la MDAC en la web de inmigración como máximo tres días antes de llegar: datos del pasaporte, vuelo y dirección, y en un minuto recibes la confirmación por correo. Quien necesita visado pide el eVISA en malaysiavisa.imi.gov.my: 30 días, con respuesta en 2–3 días laborables. En la frontera pueden pedirte billete de salida y reserva de alojamiento.',
      visaRun:
        'El visa run funciona: al salir, el periodo sin visado vuelve a empezar. Lo más fácil es el autobús de Johor Bahru a Singapur por la Causeway (una hora con colas), el tren a Padang Besar, en la frontera tailandesa, o el ferri a Batam, en Indonesia. Las entradas muy seguidas despiertan preguntas, así que ten a mano billete de salida y reserva.',
      nomad:
        'El DE Rantau Nomad Pass es un visado para teletrabajo de 3 a 12 meses, renovable por otros 12. Necesitas ingresos de al menos 24 000 $ al año en perfiles tecnológicos o de 60 000 $ en otros sectores (marketing, consultoría, directivos), un contrato con una empresa o clientes extranjeros y un seguro. Cuesta 1000 ringgit más 500 por cada familiar; se solicita en el portal de MDEC.',
      hacks: [
        'Los pasaportes de unos 60 países, entre ellos EE. UU., el Reino Unido, la UE, Japón, Corea y Australia, pueden usar las puertas automáticas de los aeropuertos de Kuala Lumpur: con la MDAC enviada, el control dura un par de minutos.',
        'Langkawi es una isla libre de impuestos con ferris a Koh Lipe, en Tailandia: el visa run puede convertirse en escapada de playa.',
        'Sabah y Sarawak, en Borneo, tienen su propio control de pasaportes: lleva el pasaporte encima incluso en vuelos nacionales desde Kuala Lumpur, porque te pondrán otro sello.',
        'Lo más barato para ir a Singapur son los autobuses Causeway Link desde el centro de Johor Bahru por unos pocos ringgit; el tren RTS Link a Woodlands debería abrir a finales de 2026.',
        'Para jubilados o quien quiera quedarse años existe el programa MM2H, basado en un depósito bancario: no es un visado turístico, pero sí una forma legal de vivir en el país cinco años o más.',
      ],
      pitfalls: [
        'Las webs intermediarias cobran por la MDAC, que es gratuita. Preséntala solo en imi.gov.my.',
        'La estancia se cuenta desde el día de entrada, no desde la fecha del vuelo. El exceso de estancia se multa y puede acarrear una prohibición de entrada, y las estancias turísticas casi nunca se prorrogan.',
        'Los titulares de pasaporte israelí no son admitidos, aunque los sellos israelíes en pasaportes de otros países rara vez dan problemas.',
      ],
      passports: {
        RU: 'Los ciudadanos rusos tienen 30 días sin visado. No hay vuelos directos desde Moscú: se hace escala en Dubái, Doha, Estambul o Bangkok. Las Visa y Mastercard emitidas en Rusia no funcionan; lleva dólares o euros, y muchos cajeros aceptan UnionPay.',
        IN: 'Los ciudadanos indios entran sin visado durante 30 días gracias a una exención temporal prorrogada hasta el 31 de diciembre de 2026. Si viajas en 2027, comprueba si se ha vuelto a prorrogar.',
        CN: 'Los ciudadanos chinos disfrutan de una exención mutua de visado: 30 días por entrada y no más de 90 en 180.',
        IL: 'Con pasaporte israelí no se entra sin un permiso especial del Ministerio del Interior, que a los turistas prácticamente nunca se concede.',
      },
    },
    de: {
      summary:
        'Bürger der USA, Großbritanniens, der EU, Japans und Koreas reisen 90 Tage visumfrei ein, Bürger Russlands, anderer GUS-Staaten, Chinas und Indiens 30 Tage. Nur wenige Nationalitäten brauchen vorab ein Visum, Inhaber israelischer Pässe werden nicht eingelassen. Alle ausländischen Gäste füllen vor der Reise die kostenlose Ankunftskarte MDAC aus.',
      apply:
        'Reiche die MDAC frühestens drei Tage vor der Ankunft auf der Website der Einwanderungsbehörde ein: Passdaten, Flug und Adresse – die Bestätigung kommt innerhalb einer Minute per E-Mail. Wer ein Visum braucht, beantragt ein eVISA auf malaysiavisa.imi.gov.my: 30 Tage, Entscheidung in 2–3 Werktagen. An der Grenze können Weiterflugticket und Unterkunftsbuchung verlangt werden.',
      visaRun:
        'Visa-Runs funktionieren: Nach der Ausreise beginnt die visumfreie Frist neu. Am einfachsten sind der Bus von Johor Bahru über den Causeway nach Singapur (mit Warteschlangen etwa eine Stunde), der Zug nach Padang Besar an der thailändischen Grenze oder die Fähre nach Batam in Indonesien. Häufige Einreisen hintereinander fallen auf, halte also Weiterflugticket und Buchung bereit.',
      nomad:
        'Der DE Rantau Nomad Pass ist ein Remote-Work-Visum für 3–12 Monate, verlängerbar um weitere 12. Nötig sind ein Einkommen von mindestens 24.000 $ im Jahr in Tech-Berufen oder 60.000 $ in anderen Bereichen (Marketing, Beratung, Führungskräfte), ein Vertrag mit ausländischem Unternehmen oder Kunden und eine Versicherung. Die Gebühr beträgt 1.000 Ringgit plus 500 pro Familienmitglied; beantragt wird über das MDEC-Portal.',
      hacks: [
        'Inhaber von Pässen aus rund 60 Ländern, darunter USA, Großbritannien, EU, Japan, Korea und Australien, nutzen an den Flughäfen von Kuala Lumpur die automatischen Gates – mit eingereichter MDAC dauert die Kontrolle ein paar Minuten.',
        'Langkawi ist eine zollfreie Insel mit Fähren nach Koh Lipe in Thailand – so wird der Visa-Run zum Strandausflug.',
        'Sabah und Sarawak auf Borneo haben eine eigene Passkontrolle: Nimm den Pass auch auf Inlandsflüge ab Kuala Lumpur mit, du bekommst dort einen weiteren Stempel.',
        'Am günstigsten kommst du mit den Causeway-Link-Bussen aus dem Zentrum von Johor Bahru für ein paar Ringgit nach Singapur; die RTS-Link-Bahn nach Woodlands soll Ende 2026 öffnen.',
        'Für Rentner und alle, die Jahre bleiben wollen, gibt es das Programm MM2H mit Bankeinlage – kein Touristenvisum, aber ein legaler Weg, fünf Jahre oder länger im Land zu leben.',
      ],
      pitfalls: [
        'Vermittlerseiten verlangen Geld für die kostenlose MDAC. Reiche sie nur auf imi.gov.my ein.',
        'Die Frist zählt ab dem Einreisetag, nicht ab dem Flugdatum. Überziehungen werden mit Bußgeld belegt und können zur Einreisesperre führen, touristische Aufenthalte werden fast nie verlängert.',
        'Inhaber israelischer Pässe werden nicht eingelassen; israelische Stempel in Pässen anderer Länder machen dagegen selten Probleme.',
      ],
      passports: {
        RU: 'Russische Staatsangehörige reisen 30 Tage visumfrei ein. Direktflüge aus Moskau gibt es nicht, umgestiegen wird in Dubai, Doha, Istanbul oder Bangkok. In Russland ausgestellte Visa- und Mastercard-Karten funktionieren nicht – nimm Dollar oder Euro mit; viele Geldautomaten akzeptieren UnionPay.',
        IN: 'Indische Staatsangehörige reisen dank einer befristeten Befreiung, verlängert bis 31. Dezember 2026, 30 Tage visumfrei ein. Prüfe vor Reisen im Jahr 2027, ob sie erneut verlängert wurde.',
        CN: 'Für chinesische Staatsangehörige gilt eine gegenseitige Visumbefreiung: 30 Tage pro Einreise, höchstens 90 Tage in 180.',
        IL: 'Mit israelischem Pass ist die Einreise nur mit Sondergenehmigung des Innenministeriums möglich, die Touristen praktisch nie erhalten.',
      },
    },
    fr: {
      summary:
        'Les citoyens américains, britanniques, européens, japonais et coréens entrent sans visa pour 90 jours ; les Russes, les autres ressortissants de la CEI, les Chinois et les Indiens pour 30 jours. Seules quelques nationalités ont besoin d’un visa préalable, et les titulaires d’un passeport israélien ne sont pas admis. Tous les visiteurs étrangers remplissent avant le voyage la carte d’arrivée MDAC, gratuite.',
      apply:
        'Déposez la MDAC sur le site de l’immigration au plus tôt trois jours avant l’arrivée : données du passeport, vol et adresse, et la confirmation arrive par e-mail en une minute. Ceux qui ont besoin d’un visa demandent l’eVISA sur malaysiavisa.imi.gov.my : 30 jours, réponse en 2 à 3 jours ouvrés. À la frontière, on peut vous demander un billet de sortie et une réservation d’hébergement.',
      visaRun:
        'Le visa run fonctionne : après une sortie, la période sans visa repart de zéro. Le plus simple : le bus de Johor Bahru vers Singapour par la Causeway (une heure environ avec l’attente), le train jusqu’à Padang Besar à la frontière thaïlandaise ou le ferry vers Batam, en Indonésie. Les entrées répétées attirent l’attention : gardez billet de sortie et réservation sous la main.',
      nomad:
        'Le DE Rantau Nomad Pass est un visa de télétravail de 3 à 12 mois, renouvelable 12 mois. Il faut un revenu d’au moins 24 000 $ par an dans la tech ou 60 000 $ dans les autres métiers (marketing, conseil, dirigeants), un contrat avec une entreprise ou des clients étrangers et une assurance. Les frais sont de 1 000 ringgits, plus 500 par membre de la famille ; la demande passe par le portail de la MDEC.',
      hacks: [
        'Les passeports d’une soixantaine de pays, dont les États-Unis, le Royaume-Uni, l’UE, le Japon, la Corée et l’Australie, ont accès aux portiques automatiques des aéroports de Kuala Lumpur : une fois la MDAC déposée, le contrôle prend deux minutes.',
        'Langkawi est une île détaxée reliée par ferry à Koh Lipe, en Thaïlande : le visa run peut se transformer en escapade balnéaire.',
        'Le Sabah et le Sarawak, à Bornéo, ont leur propre contrôle des passeports : gardez votre passeport même sur les vols intérieurs depuis Kuala Lumpur, vous y recevrez un nouveau tampon.',
        'Le moyen le moins cher de rejoindre Singapour, ce sont les bus Causeway Link depuis le centre de Johor Bahru pour quelques ringgits ; le train RTS Link vers Woodlands doit ouvrir d’ici fin 2026.',
        'Pour les retraités et ceux qui veulent rester des années, il existe le programme MM2H, fondé sur un dépôt bancaire : pas un visa touristique, mais une façon légale de vivre dans le pays cinq ans ou plus.',
      ],
      pitfalls: [
        'Des sites intermédiaires font payer la MDAC, pourtant gratuite. Déposez-la uniquement sur imi.gov.my.',
        'Le séjour se compte à partir du jour d’entrée, pas de la date du vol. Les dépassements sont sanctionnés d’amendes, voire d’une interdiction d’entrée, et les séjours touristiques ne sont presque jamais prolongés.',
        'Les titulaires d’un passeport israélien ne sont pas admis, alors que les tampons israéliens dans d’autres passeports posent rarement problème.',
      ],
      passports: {
        RU: 'Les ressortissants russes ont 30 jours sans visa. Pas de vol direct depuis Moscou : correspondance à Dubaï, Doha, Istanbul ou Bangkok. Les cartes Visa et Mastercard émises en Russie ne fonctionnent pas ; emportez des dollars ou des euros, beaucoup de distributeurs acceptent UnionPay.',
        IN: 'Les ressortissants indiens entrent sans visa pour 30 jours grâce à une exemption temporaire prolongée jusqu’au 31 décembre 2026. Pour un voyage en 2027, vérifiez si elle a de nouveau été reconduite.',
        CN: 'Les ressortissants chinois bénéficient d’une exemption mutuelle : 30 jours par entrée et pas plus de 90 jours sur 180.',
        IL: 'Le passeport israélien n’est pas admis sans autorisation spéciale du ministère de l’Intérieur, que les touristes n’obtiennent pratiquement jamais.',
      },
    },
    it: {
      summary:
        'I cittadini di Stati Uniti, Regno Unito, UE, Giappone e Corea entrano senza visto per 90 giorni; quelli di Russia, altri paesi CSI, Cina e India per 30 giorni. Solo poche nazionalità devono chiedere il visto in anticipo, mentre i titolari di passaporto israeliano non sono ammessi. Tutti i visitatori stranieri compilano prima del viaggio la carta di arrivo MDAC, gratuita.',
      apply:
        'Invia la MDAC sul sito dell’immigrazione non prima di tre giorni dall’arrivo: dati del passaporto, volo e indirizzo, e la conferma arriva per e-mail in un minuto. Chi ha bisogno del visto richiede l’eVISA su malaysiavisa.imi.gov.my: 30 giorni, risposta in 2–3 giorni lavorativi. Alla frontiera possono chiederti biglietto di uscita e prenotazione dell’alloggio.',
      visaRun:
        'Il visa run funziona: uscendo dal paese il periodo senza visto riparte da capo. Le opzioni più semplici sono l’autobus da Johor Bahru a Singapore lungo la Causeway (circa un’ora con le code), il treno per Padang Besar al confine thailandese o il traghetto per Batam, in Indonesia. Gli ingressi troppo ravvicinati destano domande, quindi tieni a portata di mano biglietto di uscita e prenotazione.',
      nomad:
        'Il DE Rantau Nomad Pass è un visto per lavoro da remoto di 3–12 mesi, rinnovabile per altri 12. Servono un reddito di almeno 24.000 $ l’anno per i profili tech o di 60.000 $ negli altri settori (marketing, consulenza, dirigenti), un contratto con un’azienda o clienti esteri e un’assicurazione. Costa 1.000 ringgit più 500 per ogni familiare; si richiede sul portale MDEC.',
      hacks: [
        'I passaporti di una sessantina di paesi, tra cui Stati Uniti, Regno Unito, UE, Giappone, Corea e Australia, possono usare i varchi automatici degli aeroporti di Kuala Lumpur: con la MDAC inviata il controllo dura un paio di minuti.',
        'Langkawi è un’isola duty free collegata in traghetto a Koh Lipe, in Thailandia: il visa run può diventare una gita al mare.',
        'Sabah e Sarawak, nel Borneo, hanno un controllo passaporti proprio: porta il passaporto anche sui voli interni da Kuala Lumpur, perché ti metteranno un altro timbro.',
        'Il modo più economico per andare a Singapore sono gli autobus Causeway Link dal centro di Johor Bahru per pochi ringgit; il treno RTS Link per Woodlands dovrebbe aprire entro la fine del 2026.',
        'Per pensionati e per chi vuole restare anni c’è il programma MM2H, basato su un deposito bancario: non è un visto turistico, ma un modo legale per vivere nel paese cinque anni o più.',
      ],
      pitfalls: [
        'I siti intermediari fanno pagare la MDAC, che è gratuita. Inviala solo su imi.gov.my.',
        'Il soggiorno si conta dal giorno d’ingresso, non dalla data del volo. Chi supera il limite paga una multa e rischia il divieto d’ingresso, e i soggiorni turistici non vengono quasi mai prorogati.',
        'I titolari di passaporto israeliano non sono ammessi, mentre i timbri israeliani su passaporti di altri paesi raramente creano problemi.',
      ],
      passports: {
        RU: 'I cittadini russi hanno 30 giorni senza visto. Non ci sono voli diretti da Mosca: si fa scalo a Dubai, Doha, Istanbul o Bangkok. Le Visa e Mastercard emesse in Russia non funzionano; porta dollari o euro, molti bancomat accettano UnionPay.',
        IN: 'I cittadini indiani entrano senza visto per 30 giorni grazie a un’esenzione temporanea prorogata fino al 31 dicembre 2026. Se viaggi nel 2027, verifica che sia stata rinnovata.',
        CN: 'I cittadini cinesi godono di un’esenzione reciproca: 30 giorni per ingresso e non più di 90 giorni su 180.',
        IL: 'Con il passaporto israeliano non si entra senza un permesso speciale del Ministero dell’Interno, che ai turisti non viene praticamente mai concesso.',
      },
    },
  },
};

export default guide;
