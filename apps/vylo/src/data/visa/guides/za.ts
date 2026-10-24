import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'ZA',
  checked: '2026-10',
  fees: {
    evisa: { kind: 'fixed', amount: 425, currency: 'ZAR' },
    visa: { kind: 'fixed', amount: 425, currency: 'ZAR' },
  },
  stay: { evisa: 90, visa: 90 },
  links: { evisa: 'https://ehome.dha.gov.za/epermit/', immigration: 'https://www.dha.gov.za' },
  docs: ['returnTicket', 'finance', 'yellowFever'],
  passportMonths: 0,
  extend: { days: 90 },
  visaRun: 'limited',
  borders: [
    { name: 'Maseru Bridge', to: 'LS', lat: -29.3025, lng: 27.4680 },
    { name: 'Oshoek – Ngwenya', to: 'SZ', lat: -26.2140, lng: 30.9930 },
    { name: 'Lebombo – Ressano Garcia', to: 'MZ', lat: -25.4440, lng: 31.9880 },
  ],
  nomad: { name: 'Remote Work Visa', months: 36, income: { kind: 'from', amount: 54248, currency: 'ZAR' } },
  hackScope: [null, null, null, ['IN', 'CN', 'ID', 'MX']],
  pitfallScope: [null, null, null, null],
  text: {
    ru: {
      summary:
        'Граждане большинства западных стран, а также России, Бразилии, Израиля, Японии и ОАЭ въезжают без визы на 90 дней, некоторые паспорта — на 30. Остальные (в том числе Индия, Китай и Мексика) оформляют визу онлайн, а с августа 2026 года ЮАР постепенно вводит электронное разрешение ETA, которое заменяет e-визу и бумажные визы для визовых стран.',
      apply:
        'Если вашему паспорту нужна виза, сначала проверьте на порталах МВД (Home Affairs), доступны ли для него новое ETA или e-виза; если нет — подавайте документы в визовый центр VFS. Стандартный сбор — 425 рандов (около 23 $); онлайн-заявки рассматривают за несколько дней, бумажные — до нескольких недель. Нужны обратный билет, выписка из банка, бронь жилья, а для детей — свидетельства о рождении.',
      extend:
        'Пребывание можно продлить ещё до 90 дней через VFS Global внутри страны; подавайте заявление минимум за 60 дней до окончания срока. Платите госпошлину и сервисный сбор VFS и закладывайте несколько недель на рассмотрение; оставаться после истечения срока, пока заявка не одобрена, — на ваш риск.',
      visaRun:
        'Всё решает пограничник: после короткой поездки в Лесото, Эсватини или Мозамбик иногда дают новые 90 дней, иногда только остаток прежнего срока или всего 7 дней. Повторные визараны отмечают в системе, так что рассчитывать на них не стоит — надёжнее официальное продление через VFS.',
      nomad:
        'Remote Work Visa — виза для удалённой работы на иностранную компанию или клиентов с доходом не меньше 650 976 рандов в год (около 54 000 рандов в месяц). Выдаётся на срок до трёх лет; подавать в посольство ЮАР или через VFS с подтверждением работы, дохода и медицинской страховкой.',
      hacks: [
        'Лесото и Эсватини безвизовы для большинства западных паспортов, и до них легко доехать на машине: Масеру-Бридж (около 1,5 часа от Блумфонтейна) или Ошук — Нгвенья (4 часа от Йоханнесбурга). Проверьте, разрешает ли договор проката выезд за границу.',
        'Крюгер плюс Мозамбик: от перехода Лебомбо — Рессану-Гарсия 1,5 часа до Мапуту. С 2023 года Мозамбик безвизовый для многих западных паспортов, остальным нужна виза — проверьте заранее.',
        'Для детей возьмите полное (unabridged) свидетельство о рождении и, если едет один родитель, нотариальное согласие второго. С 2019 года их требуют не всегда, но на сухопутных границах и у некоторых авиакомпаний спрашивают.',
        'Индия, Китай, Индонезия и Мексика были пилотными странами ETA — гражданам этих стран обычно быстрее подать через него, чем через VFS. Для туристических групп из Китая и Индии есть также упрощённая схема через аккредитованных туроператоров (Trusted Tour Operator Scheme).',
      ],
      pitfalls: [
        'В паспорте должны быть две полностью чистые страницы для виз (не страницы «для отметок») — авиакомпании проверяют и не сажают на рейс.',
        'Паспорт должен действовать минимум 30 дней после даты выезда из ЮАР.',
        'Прилетая из страны, эндемичной по жёлтой лихорадке (Кения, Уганда, Эфиопия и др., включая пересадку дольше 12 часов), нужно предъявить сертификат о прививке — иначе могут не впустить.',
        'Даже небольшая просрочка грозит статусом «нежелательного лица» и запретом въезда от года до пяти лет — его ставят прямо при выезде.',
      ],
      passports: {
        RU: 'Россиянам — 90 дней без визы. Российские карты не работают, прямых рейсов нет: летают через Дубай, Доху, Стамбул или Аддис-Абебу.',
        IN: 'Граждане Индии оформляют e-визу или новое ETA; группам удобна схема Trusted Tour Operator Scheme.',
        CN: 'Граждане Китая были среди первых пользователей ETA; группы могут въезжать по схеме Trusted Tour Operator Scheme.',
      },
    },
    en: {
      summary:
        'Most Western passports, plus Russia, Brazil, Israel, Japan and the UAE, get 90 days visa-free; some passports get 30. Others — India, China and Mexico among them — apply online, and since August 2026 South Africa has been rolling out an Electronic Travel Authorisation (ETA) that is gradually replacing the e-visa and paper visas for visa-required nationals.',
      apply:
        'If your passport needs a visa, first check on the Home Affairs portals whether the new ETA or the e-visa is open to it; otherwise apply at a VFS centre. The standard fee is R425 (about $23); online applications take a few days, paper ones up to several weeks. You’ll need a return ticket, bank statements, a booking and, for children, birth certificates.',
      extend:
        'Visitors can apply to extend by up to 90 more days through VFS Global in South Africa, at least 60 days before the current stay expires. Expect the Home Affairs fee plus the VFS service charge and several weeks of processing; staying on after expiry while it’s pending is at your own risk.',
      visaRun:
        'It’s up to the officer: after a quick hop to Lesotho, Eswatini or Mozambique you might get a fresh 90 days, only the days you had left, or just 7. Repeated runs are flagged in the system, so don’t count on them — the official extension through VFS is the safer path.',
      nomad:
        'The Remote Work Visa is for people working for a foreign employer or clients and earning at least R650,976 a year (about R54,000 a month). It’s issued for up to three years; apply at a South African mission or through VFS with proof of employment, income and health insurance.',
      hacks: [
        'Lesotho and Eswatini are visa-free for most Western passports and easy to reach by car: Maseru Bridge (about 1.5 hours from Bloemfontein) or Oshoek – Ngwenya (4 hours from Johannesburg). Check that your rental contract allows cross-border trips.',
        'Kruger plus Mozambique: from the Lebombo – Ressano Garcia crossing it’s 1.5 hours to Maputo. Since 2023 Mozambique has been visa-free for many Western passports; others need a visa, so check ahead.',
        'For children, carry unabridged birth certificates and, if one parent isn’t travelling, a consent affidavit from them. Since 2019 they aren’t always demanded, but land borders and some airlines still ask.',
        'India, China, Indonesia and Mexico were the ETA pilot countries, so citizens of these countries usually get through it faster than via VFS. Tour groups from China and India can also use the Trusted Tour Operator Scheme.',
      ],
      pitfalls: [
        'Your passport needs two completely blank visa pages (not endorsement pages) — airlines check and deny boarding.',
        'The passport must be valid for at least 30 days after you leave South Africa.',
        'Arriving from a yellow fever country (Kenya, Uganda, Ethiopia and others, including transits over 12 hours), you must show a vaccination certificate or you may be refused entry.',
        'Overstaying even briefly can get you declared “undesirable” and banned for one to five years — the ban is issued right at departure.',
      ],
      passports: {
        RU: 'Russian citizens get 90 days visa-free. Russian cards don’t work and there are no direct flights — route via Dubai, Doha, Istanbul or Addis Ababa.',
        IN: 'Indian citizens use the e-visa or the new ETA; groups can travel under the Trusted Tour Operator Scheme.',
        CN: 'Chinese citizens were among the first ETA users; groups can enter under the Trusted Tour Operator Scheme.',
      },
    },
    es: {
      summary:
        'La mayoría de los pasaportes occidentales, además de Rusia, Brasil, Israel, Japón y los EAU, tienen 90 días sin visado; algunos, 30. El resto (entre ellos India, China y México) lo pide en línea, y desde agosto de 2026 Sudáfrica está implantando una autorización electrónica de viaje (ETA) que va sustituyendo al visado electrónico y a los de papel para quienes necesitan visado.',
      apply:
        'Si tu pasaporte necesita visado, comprueba primero en los portales de Home Affairs si puedes usar la nueva ETA o el visado electrónico; si no, solicítalo en un centro de VFS. La tasa estándar es de 425 rand (unos 23 $); las solicitudes en línea tardan unos días y las de papel, hasta varias semanas. Necesitarás billete de vuelta, extractos bancarios, una reserva y, para los niños, el certificado de nacimiento.',
      extend:
        'Puedes pedir una prórroga de hasta 90 días más a través de VFS Global dentro de Sudáfrica, al menos 60 días antes de que venza tu estancia. Paga la tasa de Home Affairs más el cargo de VFS y cuenta con varias semanas de espera; quedarte tras el vencimiento mientras está pendiente corre de tu cuenta.',
      visaRun:
        'Depende del agente: tras una escapada a Lesoto, Esuatini o Mozambique puedes recibir 90 días nuevos, solo los que te quedaban o apenas 7. Las salidas repetidas quedan marcadas en el sistema, así que no cuentes con ellas: la prórroga oficial por VFS es el camino más seguro.',
      nomad:
        'El Remote Work Visa es para quien trabaja para una empresa o clientes extranjeros con ingresos de al menos 650 976 rand al año (unos 54 000 al mes). Se concede por hasta tres años; se solicita en una representación sudafricana o a través de VFS con prueba de empleo, ingresos y seguro médico.',
      hacks: [
        'Lesoto y Esuatini no piden visado a la mayoría de los pasaportes occidentales y se llega fácil en coche: Maseru Bridge (a 1,5 horas de Bloemfontein) u Oshoek – Ngwenya (a 4 horas de Johannesburgo). Comprueba que el contrato de alquiler permite cruzar fronteras.',
        'Kruger más Mozambique: desde el paso de Lebombo – Ressano Garcia hay 1,5 horas a Maputo. Desde 2023 Mozambique no exige visado a muchos pasaportes occidentales; los demás lo necesitan, así que infórmate antes.',
        'Para los niños, lleva el certificado de nacimiento completo (unabridged) y, si no viaja uno de los padres, su consentimiento jurado. Desde 2019 no siempre se exige, pero en las fronteras terrestres y algunas aerolíneas aún lo piden.',
        'India, China, Indonesia y México fueron los países piloto de la ETA, así que sus ciudadanos suelen ir más rápido por ahí que por VFS. Los grupos turísticos de China e India pueden usar además el Trusted Tour Operator Scheme.',
      ],
      pitfalls: [
        'El pasaporte necesita dos páginas de visado completamente en blanco (no las de anotaciones): las aerolíneas lo comprueban y deniegan el embarque.',
        'El pasaporte debe ser válido al menos 30 días después de salir de Sudáfrica.',
        'Si llegas de un país con fiebre amarilla (Kenia, Uganda, Etiopía y otros, incluidas escalas de más de 12 horas), debes enseñar el certificado de vacunación o pueden negarte la entrada.',
        'Quedarte de más, aunque sea poco, puede valerte la declaración de “indeseable” y una prohibición de entrada de uno a cinco años, que te imponen al salir.',
      ],
      passports: {
        RU: 'Los ciudadanos rusos tienen 90 días sin visado. Las tarjetas rusas no funcionan y no hay vuelos directos: se vuela vía Dubái, Doha, Estambul o Adís Abeba.',
        IN: 'Los ciudadanos indios usan el visado electrónico o la nueva ETA; los grupos pueden viajar con el Trusted Tour Operator Scheme.',
        CN: 'Los ciudadanos chinos estuvieron entre los primeros usuarios de la ETA; los grupos pueden entrar con el Trusted Tour Operator Scheme.',
      },
    },
    de: {
      summary:
        'Die meisten westlichen Pässe sowie Russland, Brasilien, Israel, Japan und die VAE bekommen 90 Tage visumfrei, manche Pässe 30. Andere – darunter Indien, China und Mexiko – beantragen online, und seit August 2026 führt Südafrika schrittweise eine elektronische Reisegenehmigung (ETA) ein, die E-Visum und Papiervisum für visumpflichtige Staatsangehörige nach und nach ablöst.',
      apply:
        'Braucht dein Pass ein Visum, prüfe zuerst auf den Portalen von Home Affairs, ob die neue ETA oder das E-Visum für ihn offen ist; sonst beantragst du es in einem VFS-Zentrum. Die Standardgebühr beträgt 425 Rand (rund 23 $); Online-Anträge dauern einige Tage, Papieranträge bis zu mehreren Wochen. Nötig sind Rückflugticket, Kontoauszüge, eine Buchung und für Kinder die Geburtsurkunde.',
      extend:
        'Verlängern lässt sich um bis zu 90 Tage über VFS Global in Südafrika, mindestens 60 Tage vor Ablauf. Rechne mit der Gebühr von Home Affairs plus VFS-Servicegebühr und mehreren Wochen Bearbeitung; wer nach Ablauf bleibt, während der Antrag läuft, tut das auf eigenes Risiko.',
      visaRun:
        'Das entscheidet der Beamte: Nach einem kurzen Abstecher nach Lesotho, Eswatini oder Mosambik gibt es mal neue 90 Tage, mal nur die Resttage oder gerade 7. Wiederholte Runs werden im System markiert, also verlass dich nicht darauf – die offizielle Verlängerung über VFS ist sicherer.',
      nomad:
        'Das Remote Work Visa richtet sich an Leute, die für einen ausländischen Arbeitgeber oder Kunden arbeiten und mindestens 650.976 Rand im Jahr verdienen (rund 54.000 im Monat). Es wird für bis zu drei Jahre erteilt; beantragt wird bei einer südafrikanischen Vertretung oder über VFS mit Nachweis von Job, Einkommen und Krankenversicherung.',
      hacks: [
        'Lesotho und Eswatini sind für die meisten westlichen Pässe visumfrei und mit dem Auto gut erreichbar: Maseru Bridge (rund 1,5 Stunden von Bloemfontein) oder Oshoek – Ngwenya (4 Stunden von Johannesburg). Prüfe, ob der Mietvertrag Grenzübertritte erlaubt.',
        'Krüger plus Mosambik: Vom Übergang Lebombo – Ressano Garcia sind es 1,5 Stunden bis Maputo. Seit 2023 ist Mosambik für viele westliche Pässe visumfrei; andere brauchen ein Visum, also vorher prüfen.',
        'Für Kinder die vollständige Geburtsurkunde (unabridged) mitnehmen und, wenn ein Elternteil nicht mitreist, dessen beglaubigte Zustimmung. Seit 2019 wird das nicht immer verlangt, an Landgrenzen und bei manchen Airlines aber noch.',
        'Indien, China, Indonesien und Mexiko waren die ETA-Pilotländer – deren Bürger kommen darüber meist schneller durch als über VFS. Reisegruppen aus China und Indien können zudem das Trusted Tour Operator Scheme nutzen.',
      ],
      pitfalls: [
        'Der Pass braucht zwei komplett leere Visumseiten (keine Vermerkseiten) – Airlines prüfen das und verweigern das Boarding.',
        'Der Pass muss noch mindestens 30 Tage nach der Ausreise aus Südafrika gültig sein.',
        'Bei Ankunft aus einem Gelbfiebergebiet (Kenia, Uganda, Äthiopien und andere, auch Umstiege über 12 Stunden) musst du den Impfnachweis zeigen, sonst kann die Einreise verweigert werden.',
        'Schon eine kurze Überziehung kann dich zur „unerwünschten Person“ mit ein bis fünf Jahren Einreisesperre machen – sie wird direkt bei der Ausreise verhängt.',
      ],
      passports: {
        RU: 'Russische Staatsangehörige bekommen 90 Tage visumfrei. Russische Karten funktionieren nicht, Direktflüge gibt es keine – geflogen wird über Dubai, Doha, Istanbul oder Addis Abeba.',
        IN: 'Indische Staatsangehörige nutzen das E-Visum oder die neue ETA; Gruppen können über das Trusted Tour Operator Scheme reisen.',
        CN: 'Chinesische Staatsangehörige gehörten zu den ersten ETA-Nutzern; Gruppen können über das Trusted Tour Operator Scheme einreisen.',
      },
    },
    fr: {
      summary:
        'La plupart des passeports occidentaux, ainsi que la Russie, le Brésil, Israël, le Japon et les Émirats, ont droit à 90 jours sans visa ; certains passeports, à 30. Les autres — dont l’Inde, la Chine et le Mexique — font une demande en ligne, et depuis août 2026 l’Afrique du Sud déploie une autorisation électronique de voyage (ETA) qui remplace peu à peu l’e-visa et les visas papier pour les nationalités soumises à visa.',
      apply:
        'Si votre passeport exige un visa, vérifiez d’abord sur les portails du Home Affairs si la nouvelle ETA ou l’e-visa vous sont ouverts ; sinon, déposez le dossier dans un centre VFS. Les frais standard sont de 425 rands (environ 23 $) ; une demande en ligne prend quelques jours, une demande papier jusqu’à plusieurs semaines. Il faut un billet retour, des relevés bancaires, une réservation et, pour les enfants, l’acte de naissance.',
      extend:
        'Une prolongation de 90 jours maximum se demande via VFS Global en Afrique du Sud, au moins 60 jours avant la fin du séjour. Comptez les frais du Home Affairs plus ceux de VFS et plusieurs semaines de traitement ; rester après l’expiration pendant l’examen se fait à vos risques.',
      visaRun:
        'Tout dépend de l’agent : après un aller-retour au Lesotho, en Eswatini ou au Mozambique, on peut obtenir 90 nouveaux jours, seulement le reliquat ou à peine 7 jours. Les allers-retours répétés sont signalés dans le système : n’y comptez pas, la prolongation officielle via VFS est plus sûre.',
      nomad:
        'Le Remote Work Visa s’adresse à ceux qui travaillent pour un employeur ou des clients étrangers et gagnent au moins 650 976 rands par an (environ 54 000 par mois). Il est délivré pour trois ans maximum ; la demande se fait auprès d’une représentation sud-africaine ou via VFS, avec justificatifs d’emploi, de revenus et d’assurance santé.',
      hacks: [
        'Le Lesotho et l’Eswatini sont sans visa pour la plupart des passeports occidentaux et faciles d’accès en voiture : Maseru Bridge (environ 1 h 30 de Bloemfontein) ou Oshoek – Ngwenya (4 h de Johannesburg). Vérifiez que votre contrat de location autorise le passage de frontière.',
        'Kruger et Mozambique : depuis le poste de Lebombo – Ressano Garcia, Maputo est à 1 h 30. Depuis 2023, le Mozambique est sans visa pour de nombreux passeports occidentaux ; les autres ont besoin d’un visa, vérifiez avant de partir.',
        'Pour les enfants, emportez l’acte de naissance intégral (unabridged) et, si un parent ne voyage pas, son autorisation sous serment. Depuis 2019 ce n’est plus systématique, mais les frontières terrestres et certaines compagnies le demandent encore.',
        'L’Inde, la Chine, l’Indonésie et le Mexique étaient les pays pilotes de l’ETA : leurs ressortissants passent en général plus vite par elle que par VFS. Les groupes venant de Chine et d’Inde peuvent aussi passer par le Trusted Tour Operator Scheme.',
      ],
      pitfalls: [
        'Le passeport doit comporter deux pages de visa entièrement vierges (pas des pages d’annotations) : les compagnies vérifient et refusent l’embarquement.',
        'Le passeport doit être valable au moins 30 jours après votre départ d’Afrique du Sud.',
        'En provenance d’un pays de fièvre jaune (Kenya, Ouganda, Éthiopie, etc., y compris un transit de plus de 12 heures), il faut présenter le certificat de vaccination, faute de quoi l’entrée peut être refusée.',
        'Même un léger dépassement peut vous valoir le statut d’« indésirable » et une interdiction de territoire d’un à cinq ans, prononcée dès la sortie.',
      ],
      passports: {
        RU: 'Les ressortissants russes ont 90 jours sans visa. Les cartes russes ne fonctionnent pas et il n’y a pas de vol direct : passez par Dubaï, Doha, Istanbul ou Addis-Abeba.',
        IN: 'Les ressortissants indiens passent par l’e-visa ou la nouvelle ETA ; les groupes peuvent voyager via le Trusted Tour Operator Scheme.',
        CN: 'Les ressortissants chinois ont été parmi les premiers utilisateurs de l’ETA ; les groupes peuvent entrer via le Trusted Tour Operator Scheme.',
      },
    },
    it: {
      summary:
        'La maggior parte dei passaporti occidentali, oltre a Russia, Brasile, Israele, Giappone ed Emirati, ha 90 giorni senza visto; alcuni passaporti 30. Gli altri, tra cui India, Cina e Messico, fanno domanda online, e da agosto 2026 il Sudafrica sta introducendo un’autorizzazione elettronica di viaggio (ETA) che sostituisce gradualmente il visto elettronico e quelli cartacei per chi ha l’obbligo di visto.',
      apply:
        'Se il tuo passaporto richiede il visto, verifica prima sui portali di Home Affairs se puoi usare la nuova ETA o il visto elettronico; altrimenti fai domanda in un centro VFS. La tariffa standard è di 425 rand (circa 23 $); le domande online richiedono pochi giorni, quelle cartacee fino a diverse settimane. Servono biglietto di ritorno, estratti conto, una prenotazione e, per i minori, il certificato di nascita.',
      extend:
        'Puoi chiedere una proroga fino a 90 giorni tramite VFS Global in Sudafrica, almeno 60 giorni prima della scadenza. Metti in conto la tariffa di Home Affairs più quella di VFS e diverse settimane di attesa; restare dopo la scadenza mentre la domanda è in corso è a tuo rischio.',
      visaRun:
        'Decide l’agente: dopo una scappata in Lesotho, eSwatini o Mozambico puoi ricevere 90 giorni nuovi, solo quelli residui o appena 7. I visa run ripetuti vengono segnalati nel sistema, quindi non contarci: la proroga ufficiale tramite VFS è la strada più sicura.',
      nomad:
        'Il Remote Work Visa è per chi lavora per un datore di lavoro o clienti esteri con un reddito di almeno 650.976 rand l’anno (circa 54.000 al mese). Viene rilasciato fino a tre anni; si chiede a una rappresentanza sudafricana o tramite VFS con prova di lavoro, reddito e assicurazione sanitaria.',
      hacks: [
        'Lesotho ed eSwatini non chiedono il visto alla maggior parte dei passaporti occidentali e si raggiungono facilmente in auto: Maseru Bridge (circa 1,5 ore da Bloemfontein) o Oshoek – Ngwenya (4 ore da Johannesburg). Controlla che il contratto di noleggio permetta di uscire dal paese.',
        'Kruger più Mozambico: dal valico di Lebombo – Ressano Garcia Maputo è a 1,5 ore. Dal 2023 il Mozambico è senza visto per molti passaporti occidentali; gli altri hanno bisogno del visto, verifica prima.',
        'Per i minori porta il certificato di nascita integrale (unabridged) e, se un genitore non viaggia, il suo consenso giurato. Dal 2019 non è sempre richiesto, ma alle frontiere terrestri e con alcune compagnie aeree lo chiedono ancora.',
        'India, Cina, Indonesia e Messico sono stati i paesi pilota dell’ETA: i loro cittadini di solito fanno prima così che tramite VFS. I gruppi turistici da Cina e India possono usare anche il Trusted Tour Operator Scheme.',
      ],
      pitfalls: [
        'Il passaporto deve avere due pagine per visti completamente bianche (non quelle per annotazioni): le compagnie aeree controllano e negano l’imbarco.',
        'Il passaporto deve essere valido almeno 30 giorni dopo la partenza dal Sudafrica.',
        'Se arrivi da un paese con febbre gialla (Kenya, Uganda, Etiopia e altri, compresi scali oltre 12 ore), devi mostrare il certificato di vaccinazione, altrimenti possono negarti l’ingresso.',
        'Anche un breve sforamento può farti dichiarare “indesiderabile” con un divieto d’ingresso da uno a cinque anni, inflitto direttamente all’uscita.',
      ],
      passports: {
        RU: 'I cittadini russi hanno 90 giorni senza visto. Le carte russe non funzionano e non ci sono voli diretti: si passa da Dubai, Doha, Istanbul o Addis Abeba.',
        IN: 'I cittadini indiani usano il visto elettronico o la nuova ETA; i gruppi possono viaggiare con il Trusted Tour Operator Scheme.',
        CN: 'I cittadini cinesi sono stati tra i primi a usare l’ETA; i gruppi possono entrare con il Trusted Tour Operator Scheme.',
      },
    },
  },
};

export default guide;
