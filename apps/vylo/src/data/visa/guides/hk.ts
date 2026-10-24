import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'HK',
  checked: '2026-10',
  overrides: {
    // Indians may visit visa-free for 14 days only after the free online Pre-arrival Registration (PAR)
    IN: { status: 'eta', days: 14 },
  },
  fees: { visa: { kind: 'fixed', amount: 230, currency: 'HKD' }, eta: { kind: 'free' } },
  stay: { eta: 14 },
  links: { immigration: 'https://www.immd.gov.hk' },
  docs: ['returnTicket', 'finance'],
  passportMonths: 0,
  visaRun: 'yes',
  borders: [
    { name: 'Lo Wu – Luohu', to: 'CN', lat: 22.5287, lng: 114.1131 },
    { name: 'Hong Kong–Macau Ferry Terminal (Sheung Wan)', to: 'MO', lat: 22.2878, lng: 114.152 },
    { name: 'Hong Kong–Zhuhai–Macao Bridge, Hong Kong Port', to: 'MO', lat: 22.2995, lng: 113.9445 },
  ],
  hackScope: [null, null, null, null, null],
  pitfallScope: [null, null, null],
  text: {
    ru: {
      summary:
        'Гонконг — отдельная от материкового Китая иммиграционная зона: китайская виза или безвиз сюда не действуют, и наоборот. Большинство западных паспортов получают 90 дней без визы (британцы — 180), россияне, украинцы, белорусы и казахстанцы — 14 дней, граждане Грузии, Армении и ОАЭ — 30. Граждане Индии регистрируются онлайн на 14 дней, визу оформляют лишь немногие.',
      apply:
        'Тем, кому нужна виза, подают заявление онлайн через электронный сервис Иммиграционного департамента: сбор — 230 гонконгских долларов, рассмотрение обычно занимает около 4 недель. Гражданам Индии вместо визы нужна бесплатная предварительная регистрация (Pre-arrival Registration): ответ приходит быстро, она действует 6 месяцев и покрывает несколько поездок до 14 дней каждая. Подтверждение распечатайте.',
      visaRun:
        'Визаран работает: после выезда при возвращении начинается новый безвизовый срок. Самые простые варианты — Шэньчжэнь через переход Лоу или Локмачау (если вам открыт въезд в Китай) и Макао: паром от терминала в Шёнвань или автобус по мосту Гонконг — Чжухай — Макао, около часа. Тех, кто фактически живёт в Гонконге на череде визитов, могут расспросить на границе.',
      hacks: [
        'Для 240-часового транзита Китая Гонконг считается отдельным регионом: можно прилететь в Шанхай или Пекин, а уехать поездом в Гонконг — это подходящий маршрут в «третью страну».',
        'У Макао свои правила въезда (для большинства — 30–90 дней без визы), так что оба города легко совместить. Автобусы по мосту Гонконг — Чжухай — Макао ходят круглосуточно и стоят меньше 70 гонконгских долларов.',
        'Скоростной поезд с вокзала Западный Коулун идёт до Шэньчжэня 15 минут, до Гуанчжоу — меньше часа. Китайский паспортный контроль — прямо на вокзале, поэтому китайская виза или право на безвиз нужны до посадки.',
        'Частые гости — три и более визита за последний год — и граждане ряда стран с соглашением об e-Channel могут зарегистрироваться в аэропорту или офисе иммиграции и проходить границу через автоматические ворота без очередей.',
        'Маленький талон (landing slip), который выдают на паспортном контроле, — ваше подтверждение разрешённого срока. Храните его с паспортом: его спрашивают отели и банки.',
      ],
      pitfalls: [
        'Китайская виза не действует в Гонконге, и наоборот. Однократная китайская виза сгорает, как только вы выезжаете в Гонконг.',
        'Посетителям нельзя работать, даже бесплатно, и учиться. За перерасчёт срока грозят суд и почти наверняка запрет на въезд.',
        'Паспорт должен быть действителен не менее месяца после окончания поездки (для отдельных гражданств — 6 месяцев). Авиакомпании проверяют это при посадке.',
      ],
      passports: {
        RU: 'Россияне въезжают без визы на 14 дней. Российские карты не работают: берите наличные доллары или юани и меняйте в обменниках Чимсачёй и Центрального района. Удобный маршрут — прямой рейс в Гуанчжоу или Шэньчжэнь (Китай для россиян тоже безвизовый) и поезд до Западного Коулуна.',
        IN: 'Гражданам Индии нужна бесплатная онлайн-регистрация (Pre-arrival Registration) до поездки — до 14 дней за визит. Данные должны совпадать с паспортом до буквы; распечатку проверяют при посадке.',
        CN: 'Жители материкового Китая въезжают не по паспорту, а по «Пропуску для поездок в Гонконг и Макао» с действующей отметкой. Жителям Шэньчжэня доступны многократные отметки.',
        GB: 'Граждане Великобритании могут находиться в Гонконге без визы до 180 дней.',
        UZ: 'Гражданам Узбекистана нужна виза: подайте заявку онлайн через Иммиграционный департамент минимум за месяц до поездки.',
      },
    },
    en: {
      summary:
        'Hong Kong runs its own immigration, separate from mainland China: a China visa or visa-free stay does not cover it, and vice versa. Most Western passports get 90 days visa-free (British 180), Russians, Ukrainians, Belarusians and Kazakhs 14 days, Georgians, Armenians and Emiratis 30. Indians register online for 14 days, and only a few nationalities need a visa.',
      apply:
        'If you need a visa, apply online through the Immigration Department’s e-Visa service: the fee is HK$230 and processing usually takes about 4 weeks. Indian citizens need the free online Pre-arrival Registration instead: the result comes quickly, and it is valid for 6 months and several visits of up to 14 days each. Print the confirmation.',
      visaRun:
        'Visa runs work: when you come back after leaving, a new visa-free stay begins. The easiest options are Shenzhen via Lo Wu or Lok Ma Chau (if you can enter mainland China) and Macau — by ferry from the Sheung Wan terminal or by bus over the Hong Kong–Zhuhai–Macao Bridge, about an hour. People who effectively live in Hong Kong on back-to-back visits may be questioned at the border.',
      hacks: [
        'For China’s 240-hour transit, Hong Kong counts as a separate region: fly into Shanghai or Beijing and leave by train to Hong Kong — that qualifies as onward travel to a “third country”.',
        'Macau has its own entry rules (30–90 days visa-free for most), so the two cities combine easily. Buses over the Hong Kong–Zhuhai–Macao Bridge run around the clock and cost under HK$70.',
        'The high-speed train from West Kowloon reaches Shenzhen in 15 minutes and Guangzhou in under an hour. Chinese border control is inside the station, so you need your China visa or visa-free eligibility before boarding.',
        'Frequent visitors — three or more trips in the past year — and citizens of several countries with an e-Channel arrangement can enrol at the airport or an immigration office and use the automated gates instead of queues.',
        'The small landing slip handed out at passport control is your proof of permitted stay. Keep it with your passport: hotels and banks ask for it.',
      ],
      pitfalls: [
        'A China visa is not valid for Hong Kong, and vice versa. A single-entry China visa is used up the moment you cross into Hong Kong.',
        'Visitors may not work, even unpaid, or study. Overstaying leads to prosecution and almost certainly a ban.',
        'Your passport must be valid for at least one month beyond your stay (six months for some nationalities). Airlines check this at boarding.',
      ],
      passports: {
        RU: 'Russians enter visa-free for 14 days. Russian cards do not work: bring US dollars or yuan in cash and change them in Tsim Sha Tsui or Central. A convenient route is a direct flight to Guangzhou or Shenzhen (mainland China is visa-free for Russians too) and the train to West Kowloon.',
        IN: 'Indian citizens need the free online Pre-arrival Registration before the trip — up to 14 days per visit. Details must match the passport exactly; the printout is checked at boarding.',
        CN: 'Mainland residents do not travel on a passport but on the Exit-entry Permit for Travelling to and from Hong Kong and Macao with a valid endorsement. Shenzhen residents can get multiple-entry endorsements.',
        GB: 'British citizens can stay in Hong Kong visa-free for up to 180 days.',
        UZ: 'Uzbek citizens need a visa: apply online through the Immigration Department at least a month before the trip.',
      },
    },
    es: {
      summary:
        'Hong Kong tiene su propio control migratorio, separado de la China continental: el visado chino o la exención china no sirven aquí, ni al revés. La mayoría de los pasaportes occidentales tiene 90 días sin visado (los británicos, 180); rusos, ucranianos, bielorrusos y kazajos, 14; georgianos, armenios y emiratíes, 30. Los indios se registran en línea para 14 días y muy pocas nacionalidades necesitan visado.',
      apply:
        'Si necesitas visado, solicítalo en línea con el servicio e-Visa del Departamento de Inmigración: la tasa es de 230 HK$ y el trámite suele tardar unas 4 semanas. Los ciudadanos indios, en cambio, hacen el registro previo a la llegada (Pre-arrival Registration), gratuito: la respuesta llega rápido y vale 6 meses para varias visitas de hasta 14 días. Imprime la confirmación.',
      visaRun:
        'El visa run funciona: al volver tras salir empieza una nueva estancia sin visado. Lo más fácil es Shenzhen por Lo Wu o Lok Ma Chau (si puedes entrar en China continental) o Macao, en ferri desde la terminal de Sheung Wan o en autobús por el puente Hong Kong–Zhuhai–Macao, en una hora. A quien en la práctica vive en Hong Kong encadenando visitas pueden hacerle preguntas en la frontera.',
      hacks: [
        'Para el tránsito chino de 240 horas, Hong Kong cuenta como región aparte: vuela a Shanghái o Pekín y sal en tren hacia Hong Kong; eso vale como viaje a un «tercer país».',
        'Macao tiene sus propias reglas (30–90 días sin visado para la mayoría), así que es fácil combinar ambas ciudades. Los autobuses del puente Hong Kong–Zhuhai–Macao funcionan las 24 horas y cuestan menos de 70 HK$.',
        'El tren de alta velocidad de West Kowloon llega a Shenzhen en 15 minutos y a Cantón en menos de una hora. El control fronterizo chino está dentro de la estación, así que necesitas el visado chino o la exención antes de subir.',
        'Los visitantes frecuentes —tres o más viajes en el último año— y los ciudadanos de varios países con acuerdo de e-Channel pueden inscribirse en el aeropuerto o en una oficina de inmigración y usar las puertas automáticas sin colas.',
        'El papelito (landing slip) que te dan en el control es la prueba de tu estancia autorizada. Guárdalo con el pasaporte: lo piden hoteles y bancos.',
      ],
      pitfalls: [
        'El visado chino no vale para Hong Kong, ni al revés. Un visado chino de una entrada se agota en cuanto cruzas a Hong Kong.',
        'Los visitantes no pueden trabajar, ni siquiera gratis, ni estudiar. Quedarse más tiempo del permitido acaba en juicio y casi seguro en prohibición de entrada.',
        'El pasaporte debe tener validez de al menos un mes tras el fin de la estancia (seis meses para algunas nacionalidades). Las aerolíneas lo comprueban al embarcar.',
      ],
      passports: {
        RU: 'Los rusos entran sin visado 14 días. Las tarjetas rusas no funcionan: lleva dólares o yuanes en efectivo y cámbialos en Tsim Sha Tsui o Central. Una ruta práctica es volar directo a Cantón o Shenzhen (la China continental también es sin visado para los rusos) y seguir en tren hasta West Kowloon.',
        IN: 'Los ciudadanos indios deben hacer el registro previo gratuito en línea antes del viaje: hasta 14 días por visita. Los datos deben coincidir exactamente con el pasaporte; la copia impresa se revisa al embarcar.',
        CN: 'Los residentes de la China continental no viajan con pasaporte, sino con el Permiso de Salida y Entrada para Hong Kong y Macao con un endoso vigente. Los residentes de Shenzhen pueden obtener endosos de entradas múltiples.',
        GB: 'Los británicos pueden quedarse en Hong Kong sin visado hasta 180 días.',
        UZ: 'Los uzbekos necesitan visado: solicítalo en línea al Departamento de Inmigración al menos un mes antes del viaje.',
      },
    },
    de: {
      summary:
        'Hongkong hat eine eigene Einwanderungsbehörde, getrennt von Festlandchina: Ein China-Visum oder die chinesische Visumfreiheit gilt hier nicht und umgekehrt. Die meisten westlichen Pässe bekommen 90 Tage visumfrei (Briten 180), Russen, Ukrainer, Belarussen und Kasachen 14 Tage, Georgier, Armenier und Emiratis 30. Inder registrieren sich online für 14 Tage, nur wenige Nationalitäten brauchen ein Visum.',
      apply:
        'Wer ein Visum braucht, beantragt es online über den e-Visa-Dienst des Immigration Department: Die Gebühr beträgt 230 HK$, die Bearbeitung dauert meist etwa 4 Wochen. Indische Staatsangehörige brauchen stattdessen die kostenlose Pre-arrival Registration: Die Antwort kommt schnell, sie gilt 6 Monate für mehrere Besuche von je bis zu 14 Tagen. Druck die Bestätigung aus.',
      visaRun:
        'Visa-Runs funktionieren: Bei der Rückkehr nach einer Ausreise beginnt ein neuer visumfreier Aufenthalt. Am einfachsten sind Shenzhen über Lo Wu oder Lok Ma Chau (wenn du nach Festlandchina einreisen darfst) und Macau – per Fähre vom Terminal Sheung Wan oder per Bus über die Hongkong-Zhuhai-Macau-Brücke, rund eine Stunde. Wer faktisch mit Besuch auf Besuch in Hongkong lebt, wird an der Grenze eventuell befragt.',
      hacks: [
        'Für Chinas 240-Stunden-Transit zählt Hongkong als eigenes Gebiet: Flieg nach Shanghai oder Peking und reise per Zug nach Hongkong aus – das gilt als Weiterreise in ein „Drittland“.',
        'Macau hat eigene Einreiseregeln (für die meisten 30–90 Tage visumfrei), beide Städte lassen sich also leicht kombinieren. Die Busse über die Hongkong-Zhuhai-Macau-Brücke fahren rund um die Uhr und kosten unter 70 HK$.',
        'Der Schnellzug ab West Kowloon braucht nach Shenzhen 15 Minuten, nach Guangzhou unter einer Stunde. Die chinesische Grenzkontrolle ist im Bahnhof – China-Visum oder Visumfreiheit brauchst du also schon vor dem Einsteigen.',
        'Vielreisende mit drei oder mehr Besuchen im letzten Jahr und Bürger mehrerer Länder mit e-Channel-Abkommen können sich am Flughafen oder bei der Einwanderungsbehörde registrieren und die automatischen Schleusen statt der Schlangen nutzen.',
        'Der kleine Landing Slip, den du an der Passkontrolle bekommst, belegt deine erlaubte Aufenthaltsdauer. Bewahr ihn beim Pass auf – Hotels und Banken fragen danach.',
      ],
      pitfalls: [
        'Ein China-Visum gilt nicht für Hongkong und umgekehrt. Ein China-Visum für eine Einreise ist verbraucht, sobald du nach Hongkong ausreist.',
        'Besucher dürfen weder arbeiten – auch nicht unbezahlt – noch studieren. Wer überzieht, wird strafrechtlich verfolgt und bekommt fast sicher eine Einreisesperre.',
        'Der Pass muss mindestens einen Monat über den Aufenthalt hinaus gültig sein (für manche Nationalitäten sechs Monate). Airlines prüfen das beim Boarding.',
      ],
      passports: {
        RU: 'Russen reisen 14 Tage visumfrei ein. Russische Karten funktionieren nicht: Nimm US-Dollar oder Yuan in bar mit und tausche in Tsim Sha Tsui oder Central. Bequem ist ein Direktflug nach Guangzhou oder Shenzhen (auch Festlandchina ist für Russen visumfrei) und der Zug nach West Kowloon.',
        IN: 'Indische Staatsangehörige brauchen vor der Reise die kostenlose Online-Registrierung (Pre-arrival Registration) – bis zu 14 Tage pro Besuch. Die Angaben müssen exakt mit dem Pass übereinstimmen; der Ausdruck wird beim Boarding geprüft.',
        CN: 'Bewohner Festlandchinas reisen nicht mit dem Pass, sondern mit dem Exit-entry Permit für Hongkong und Macau samt gültigem Vermerk. Einwohner von Shenzhen bekommen Vermerke für mehrfache Einreise.',
        GB: 'Britische Staatsangehörige dürfen bis zu 180 Tage visumfrei in Hongkong bleiben.',
        UZ: 'Usbekische Staatsangehörige brauchen ein Visum: Beantrage es online beim Immigration Department mindestens einen Monat vor der Reise.',
      },
    },
    fr: {
      summary:
        'Hong Kong a sa propre immigration, distincte de la Chine continentale : un visa chinois ou l’exemption chinoise n’y valent pas, et inversement. La plupart des passeports occidentaux ont 90 jours sans visa (180 pour les Britanniques), Russes, Ukrainiens, Biélorusses et Kazakhs 14 jours, Géorgiens, Arméniens et Émiriens 30. Les Indiens s’enregistrent en ligne pour 14 jours ; seules quelques nationalités ont besoin d’un visa.',
      apply:
        'Si vous avez besoin d’un visa, demandez-le en ligne via le service e-Visa de l’Immigration Department : les frais sont de 230 HK$ et le traitement prend généralement environ 4 semaines. Les Indiens font à la place la Pre-arrival Registration, gratuite : la réponse arrive vite, et elle vaut 6 mois pour plusieurs séjours de 14 jours maximum. Imprimez la confirmation.',
      visaRun:
        'Le visa run fonctionne : au retour après une sortie, un nouveau séjour sans visa commence. Le plus simple : Shenzhen par Lo Wu ou Lok Ma Chau (si vous pouvez entrer en Chine continentale) ou Macao, en ferry depuis le terminal de Sheung Wan ou en bus par le pont Hong Kong–Zhuhai–Macao, environ une heure. Ceux qui vivent de fait à Hong Kong en enchaînant les séjours peuvent être interrogés à la frontière.',
      hacks: [
        'Pour le transit chinois de 240 heures, Hong Kong compte comme une région à part : arrivez par avion à Shanghai ou Pékin et repartez en train vers Hong Kong, cela vaut départ vers un « pays tiers ».',
        'Macao a ses propres règles (30 à 90 jours sans visa pour la plupart), ce qui permet de combiner facilement les deux villes. Les bus du pont Hong Kong–Zhuhai–Macao roulent jour et nuit pour moins de 70 HK$.',
        'Le train à grande vitesse de West Kowloon rejoint Shenzhen en 15 minutes et Canton en moins d’une heure. Le contrôle frontalier chinois se trouve dans la gare : il faut donc le visa chinois ou le droit à l’exemption avant de monter à bord.',
        'Les visiteurs fréquents — au moins trois séjours dans l’année écoulée — et les ressortissants de plusieurs pays ayant un accord e-Channel peuvent s’inscrire à l’aéroport ou dans un bureau de l’immigration et passer par les portiques automatiques plutôt que par les files.',
        'Le petit ticket (landing slip) remis au contrôle prouve la durée de séjour autorisée. Gardez-le avec le passeport : hôtels et banques le demandent.',
      ],
      pitfalls: [
        'Un visa chinois ne vaut pas pour Hong Kong, et inversement. Un visa chinois à entrée unique est consommé dès que vous passez à Hong Kong.',
        'Les visiteurs ne peuvent ni travailler, même bénévolement, ni étudier. Un dépassement de séjour entraîne des poursuites et presque sûrement une interdiction de retour.',
        'Le passeport doit être valable au moins un mois après la fin du séjour (six mois pour certaines nationalités). Les compagnies le vérifient à l’embarquement.',
      ],
      passports: {
        RU: 'Les Russes entrent sans visa pour 14 jours. Les cartes russes ne fonctionnent pas : apportez des dollars ou des yuans en espèces à changer à Tsim Sha Tsui ou Central. Itinéraire pratique : vol direct vers Canton ou Shenzhen (la Chine continentale est aussi sans visa pour les Russes), puis train jusqu’à West Kowloon.',
        IN: 'Les Indiens doivent faire avant le voyage la Pre-arrival Registration, gratuite et en ligne : jusqu’à 14 jours par séjour. Les données doivent correspondre exactement au passeport ; l’impression est contrôlée à l’embarquement.',
        CN: 'Les résidents de Chine continentale ne voyagent pas avec un passeport mais avec le permis de sortie et d’entrée pour Hong Kong et Macao, muni d’un visa d’endossement valide. Les habitants de Shenzhen peuvent obtenir des endossements à entrées multiples.',
        GB: 'Les Britanniques peuvent séjourner à Hong Kong sans visa jusqu’à 180 jours.',
        UZ: 'Les Ouzbeks ont besoin d’un visa : faites la demande en ligne auprès de l’Immigration Department au moins un mois avant le départ.',
      },
    },
    it: {
      summary:
        'Hong Kong ha un’immigrazione propria, separata dalla Cina continentale: il visto cinese o l’esenzione cinese qui non valgono, e viceversa. La maggior parte dei passaporti occidentali ha 90 giorni senza visto (i britannici 180), russi, ucraini, bielorussi e kazaki 14 giorni, georgiani, armeni ed emiratini 30. Gli indiani si registrano online per 14 giorni e solo poche nazionalità hanno bisogno del visto.',
      apply:
        'Se ti serve il visto, fai domanda online con il servizio e-Visa dell’Immigration Department: il costo è di 230 HK$ e di solito servono circa 4 settimane. I cittadini indiani fanno invece la Pre-arrival Registration, gratuita: la risposta arriva in fretta e vale 6 mesi per più visite fino a 14 giorni ciascuna. Stampa la conferma.',
      visaRun:
        'Il visa run funziona: rientrando dopo l’uscita inizia un nuovo soggiorno senza visto. Le opzioni più semplici sono Shenzhen da Lo Wu o Lok Ma Chau (se puoi entrare nella Cina continentale) e Macao, in traghetto dal terminal di Sheung Wan o in autobus sul ponte Hong Kong–Zhuhai–Macao, circa un’ora. Chi di fatto vive a Hong Kong con visite a catena può essere interrogato alla frontiera.',
      hacks: [
        'Per il transito cinese di 240 ore Hong Kong conta come regione a sé: atterra a Shanghai o Pechino e riparti in treno per Hong Kong, vale come prosecuzione verso un «paese terzo».',
        'Macao ha regole proprie (30–90 giorni senza visto per quasi tutti), quindi le due città si combinano facilmente. Gli autobus sul ponte Hong Kong–Zhuhai–Macao viaggiano giorno e notte e costano meno di 70 HK$.',
        'Il treno ad alta velocità da West Kowloon arriva a Shenzhen in 15 minuti e a Canton in meno di un’ora. Il controllo di frontiera cinese è dentro la stazione, quindi visto cinese o diritto all’esenzione servono prima di salire.',
        'I visitatori frequenti — almeno tre viaggi nell’ultimo anno — e i cittadini di diversi paesi con accordo e-Channel possono registrarsi in aeroporto o in un ufficio immigrazione e usare i varchi automatici invece delle code.',
        'Il foglietto (landing slip) che ti danno al controllo passaporti è la prova del soggiorno autorizzato. Tienilo col passaporto: lo chiedono hotel e banche.',
      ],
      pitfalls: [
        'Il visto cinese non vale per Hong Kong, e viceversa. Un visto cinese a ingresso singolo si consuma appena passi a Hong Kong.',
        'I visitatori non possono lavorare, nemmeno gratis, né studiare. Chi resta oltre il limite finisce in tribunale e quasi certamente riceve un divieto di ingresso.',
        'Il passaporto deve essere valido almeno un mese oltre il soggiorno (sei mesi per alcune nazionalità). Le compagnie aeree lo verificano all’imbarco.',
      ],
      passports: {
        RU: 'I russi entrano senza visto per 14 giorni. Le carte russe non funzionano: porta dollari o yuan in contanti e cambiali a Tsim Sha Tsui o Central. Un percorso comodo è il volo diretto per Canton o Shenzhen (anche la Cina continentale è senza visto per i russi) e poi il treno fino a West Kowloon.',
        IN: 'Ai cittadini indiani serve prima del viaggio la registrazione online gratuita (Pre-arrival Registration): fino a 14 giorni per visita. I dati devono coincidere esattamente con il passaporto; la stampa viene controllata all’imbarco.',
        CN: 'I residenti della Cina continentale non viaggiano col passaporto ma con il permesso di uscita e ingresso per Hong Kong e Macao, con un’annotazione valida. I residenti di Shenzhen possono ottenere annotazioni a ingressi multipli.',
        GB: 'I cittadini britannici possono restare a Hong Kong senza visto fino a 180 giorni.',
        UZ: 'Ai cittadini uzbeki serve il visto: fai domanda online all’Immigration Department almeno un mese prima del viaggio.',
      },
    },
  },
};

export default guide;
