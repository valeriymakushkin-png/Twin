import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'HU',
  checked: '2026-10',
  fees: { visa: { kind: 'fixed', amount: 90, currency: 'EUR' } },
  stay: { visa: 90 },
  links: { immigration: 'https://konzinfo.mfa.gov.hu' },
  docs: ['insurance', 'returnTicket', 'booking', 'finance'],
  passportMonths: 3,
  rule: { days: 90, window: 180 },
  visaRun: 'no',
  nomad: { name: 'White Card', months: 12 },
  hackScope: [null, ['regime:free', 'regime:required'], ['regime:free', 'regime:required'], ['IN']],
  pitfallScope: [['regime:required'], ['regime:free'], ['regime:free', 'regime:required']],
  text: {
    ru: {
      summary:
        'Гражданам ЕС достаточно ID-карты. Граждане США, Великобритании, Канады, Австралии, Японии, Кореи, Бразилии, Мексики, ОАЭ, Израиля, Украины и Грузии въезжают без визы до 90 дней в любые 180 по всему Шенгену. Остальным, включая граждан России, Беларуси, Индии, Китая, Турции и Казахстана, нужна шенгенская виза — Венгрия по-прежнему выдаёт их россиянам.',
      apply:
        'Если Венгрия — основная страна поездки, подавайтесь в венгерское консульство или визовый центр: сбор 90 €, для детей 6–12 лет — 45 €. Подать можно за полгода, но не позже чем за 15 дней; решение обычно около 15 дней, летом дольше. Нужны страховка с покрытием от 30 000 €, брони отелей, обратный билет и выписка со счёта.',
      visaRun:
        'Визаран не работает: правило 90/180 считает дни во всём Шенгене, а выезд в Сербию или Украину лишь ставит счётчик на паузу. Дни вне зоны постепенно выпадают из 180-дневного окна, но выезд не обнуляет срок.',
      nomad:
        'White Card — вид на жительство для удалённых работников на год с возможностью продлить ещё на год. Работать можно только на иностранного работодателя или своих зарубежных клиентов, доход — около 3000 € в месяц (порог пересматривают, проверьте на сайте миграционной службы), семью по этой карте не перевезти.',
      hacks: [
        'Будапешт — удобная точка входа после Белграда: между ними ходят автобусы и поезда, а переход Рёске — Хоргош работает круглосуточно. Летом и в праздники очереди на выезд из Сербии бывают по несколько часов — проверьте загрузку заранее.',
        'Дни в Сербии, Черногории, Великобритании, Ирландии и на Кипре не входят в шенгенские 90/180 — длинную поездку удобно разбить.',
        'С запуском EES (полностью с апреля 2026 года) штампов нет: дни считаются по отпечаткам и фото. Перед поездкой проверьте остаток в официальном калькуляторе ЕС.',
        'Индийцам выгодно «каскадное» правило: после двух использованных по правилам виз за три года дают многократную визу на два года, затем на пять.',
      ],
      pitfalls: [
        'Однократная виза сгорает после выезда из Шенгена: поездка на день в Суботицу или Нови-Сад оставит вас без права вернуться.',
        'ETIAS ещё не работает (запуск не раньше конца 2026, вероятнее 2027) — не платите сайтам, которые «оформляют» его сейчас.',
        'Паспорт должен быть выдан не более 10 лет назад и действовать ещё 3 месяца после выезда из Шенгена.',
      ],
      passports: {
        RU: 'Венгрия — одна из немногих стран ЕС, которые продолжают выдавать россиянам туристические визы через визовые центры в России. С ноября 2025 года по правилам ЕС это в основном однократные визы. Прямых рейсов нет: летают через Стамбул, Белград или Дубай; российские карты не работают.',
        BY: 'Белорусам нужна шенгенская виза; Венгрия принимает заявления в Минске. Удобный путь — перелёт через Стамбул или наземный маршрут через Сербию.',
        UA: 'Гражданам Украины с биометрическим паспортом виза не нужна (90/180). Переходы Захонь — Чоп и Берегшурань — Лужанка часто перегружены; временная защита в ЕС продлена до 4 марта 2027 года.',
        RS: 'Граждане Сербии въезжают без визы (90/180), но время в Сербии в этот лимит не входит — частая база для жизни «между Шенгеном».',
      },
    },
    en: {
      summary:
        'EU citizens just need an ID card. Citizens of the US, UK, Canada, Australia, Japan, Korea, Brazil, Mexico, the UAE, Israel, Ukraine and Georgia enter visa-free for up to 90 days in any 180 across the Schengen area. Everyone else, including citizens of Russia, Belarus, India, China, Turkey and Kazakhstan, needs a Schengen visa — and Hungary still issues them to Russians.',
      apply:
        'If Hungary is your main destination, apply at a Hungarian consulate or visa centre: the fee is €90, or €45 for children aged 6–12. Apply up to six months ahead and at least 15 days before the trip; decisions usually take about 15 days, longer in summer. You need insurance with at least €30,000 cover, hotel bookings, a return ticket and bank statements.',
      visaRun:
        'Visa runs do not work: the 90/180 rule counts days across the whole Schengen area, and a trip to Serbia or Ukraine only pauses the clock. Days outside the zone gradually drop out of the 180-day window, but leaving never resets your allowance.',
      nomad:
        'The White Card is a one-year residence permit for remote workers that can be renewed for one more year. You may only work for a foreign employer or your own foreign clients, the income bar is about €3,000 a month (it is revised, so check the immigration authority’s site), and it does not cover family members.',
      hacks: [
        'Budapest is a handy entry point after Belgrade: buses and trains link the two, and the Röszke–Horgoš crossing is open 24/7. In summer and on holidays the queues leaving Serbia can last hours, so check waiting times beforehand.',
        'Days in Serbia, Montenegro, the UK, Ireland and Cyprus do not count towards the Schengen 90/180 — handy for splitting a long trip.',
        'With the EES (fully live since April 2026) there are no stamps: days are counted from your fingerprints and photo. Check your balance with the EU’s official calculator before you travel.',
        'Indian citizens benefit from the “cascade” rule: after two visas used correctly within three years, you get a two-year multiple-entry visa, then a five-year one.',
      ],
      pitfalls: [
        'A single-entry visa is spent once you leave Schengen: a day trip to Subotica or Novi Sad leaves you with no right to come back.',
        'ETIAS is not running yet (late 2026 at the earliest, more likely 2027) — do not pay sites that “process” it now.',
        'Your passport must have been issued within the last 10 years and be valid for 3 months after you leave the Schengen area.',
      ],
      passports: {
        RU: 'Hungary is one of the few EU countries still issuing tourist visas to Russians through visa centres in Russia. Under EU rules since November 2025, these are mostly single-entry. There are no direct flights: people fly via Istanbul, Belgrade or Dubai, and Russian bank cards do not work.',
        BY: 'Belarusian citizens need a Schengen visa; Hungary accepts applications in Minsk. Easy routes are a flight via Istanbul or overland through Serbia.',
        UA: 'Ukrainian citizens with a biometric passport need no visa (90/180). The Záhony–Chop and Beregsurány–Luzhanka crossings are often congested; EU temporary protection has been extended to 4 March 2027.',
        RS: 'Serbian citizens enter visa-free (90/180), and time spent in Serbia does not count towards that limit — a common base for living “between Schengen stays”.',
      },
    },
    es: {
      summary:
        'A los ciudadanos de la UE les basta el DNI. Los de EE. UU., Reino Unido, Canadá, Australia, Japón, Corea, Brasil, México, Emiratos, Israel, Ucrania y Georgia entran sin visado hasta 90 días en cualquier periodo de 180 en todo Schengen. El resto, incluidos los ciudadanos de Rusia, Bielorrusia, India, China, Turquía y Kazajistán, necesita visado Schengen, y Hungría sigue concediéndolo a los rusos.',
      apply:
        'Si Hungría es tu destino principal, solicita el visado en un consulado o centro de visados húngaro: cuesta 90 € (45 € para niños de 6 a 12 años). Puedes presentarlo hasta seis meses antes y al menos 15 días antes; la resolución suele tardar unos 15 días, más en verano. Necesitas un seguro con al menos 30 000 € de cobertura, reservas de hotel, billete de vuelta y extractos bancarios.',
      visaRun:
        'Los visa runs no funcionan: la regla 90/180 cuenta los días en todo Schengen, y un viaje a Serbia o Ucrania solo detiene el contador. Los días fuera van saliendo de la ventana de 180 días, pero salir nunca reinicia tu cupo.',
      nomad:
        'La White Card es un permiso de residencia de un año para trabajadores en remoto, renovable un año más. Solo puedes trabajar para un empleador extranjero o tus propios clientes del exterior, el umbral de ingresos ronda los 3000 € al mes (se revisa, así que consulta la web de la autoridad de inmigración) y no incluye a la familia.',
      hacks: [
        'Budapest es una buena puerta de entrada después de Belgrado: hay autobuses y trenes entre ambas, y el paso de Röszke–Horgoš abre las 24 horas. En verano y en festivos las colas para salir de Serbia pueden durar horas; consulta los tiempos de espera antes.',
        'Los días en Serbia, Montenegro, Reino Unido, Irlanda y Chipre no cuentan para los 90/180 de Schengen: muy útil para dividir un viaje largo.',
        'Con el EES (plenamente operativo desde abril de 2026) no hay sellos: los días se cuentan por tus huellas y foto. Consulta tu saldo en la calculadora oficial de la UE antes de viajar.',
        'Los ciudadanos indios se benefician de la regla «en cascada»: tras dos visados bien usados en tres años, reciben uno de entradas múltiples de dos años y después de cinco.',
      ],
      pitfalls: [
        'Un visado de una sola entrada se agota al salir de Schengen: una excursión a Subotica o Novi Sad te deja sin derecho a volver.',
        'ETIAS aún no funciona (como pronto a finales de 2026, probablemente en 2027): no pagues a webs que lo «tramitan» ahora.',
        'El pasaporte debe haberse expedido hace menos de 10 años y ser válido 3 meses después de salir de Schengen.',
      ],
      passports: {
        RU: 'Hungría es uno de los pocos países de la UE que siguen concediendo visados turísticos a los rusos a través de centros de visados en Rusia. Por las normas de la UE desde noviembre de 2025, suelen ser de una sola entrada. No hay vuelos directos: se vuela vía Estambul, Belgrado o Dubái, y las tarjetas rusas no funcionan.',
        BY: 'Los ciudadanos bielorrusos necesitan visado Schengen; Hungría acepta solicitudes en Minsk. Las rutas cómodas son un vuelo vía Estambul o por tierra a través de Serbia.',
        UA: 'Los ciudadanos ucranianos con pasaporte biométrico no necesitan visado (90/180). Los pasos de Záhony–Chop y Beregsurány–Luzhanka suelen estar saturados; la protección temporal de la UE se ha prorrogado hasta el 4 de marzo de 2027.',
        RS: 'Los ciudadanos serbios entran sin visado (90/180), y el tiempo en Serbia no cuenta para ese límite: una base habitual para vivir «entre estancias Schengen».',
      },
    },
    de: {
      summary:
        'EU-Bürgern genügt der Personalausweis. Staatsangehörige der USA, Großbritanniens, Kanadas, Australiens, Japans, Koreas, Brasiliens, Mexikos, der VAE, Israels, der Ukraine und Georgiens reisen visumfrei bis zu 90 Tage innerhalb von 180 Tagen im ganzen Schengen-Raum. Alle anderen, auch Bürger Russlands, von Belarus, Indiens, Chinas, der Türkei und Kasachstans, brauchen ein Schengen-Visum – und Ungarn stellt es Russen weiterhin aus.',
      apply:
        'Ist Ungarn dein Hauptreiseziel, beantragst du das Visum bei einem ungarischen Konsulat oder Visazentrum: 90 €, für Kinder von 6 bis 12 Jahren 45 €. Der Antrag geht frühestens sechs Monate und spätestens 15 Tage vor der Reise; die Entscheidung dauert meist etwa 15 Tage, im Sommer länger. Nötig sind eine Versicherung mit mindestens 30.000 € Deckung, Hotelbuchungen, ein Rückflugticket und Kontoauszüge.',
      visaRun:
        'Visa-Runs funktionieren nicht: Die 90/180-Regel zählt die Tage im gesamten Schengen-Raum, und ein Abstecher nach Serbien oder in die Ukraine hält die Uhr nur an. Tage außerhalb fallen nach und nach aus dem 180-Tage-Fenster, aber eine Ausreise setzt dein Kontingent nie zurück.',
      nomad:
        'Die White Card ist eine einjährige Aufenthaltserlaubnis für Remote-Arbeitende, die einmal um ein Jahr verlängert werden kann. Du darfst nur für einen ausländischen Arbeitgeber oder eigene Auslandskunden arbeiten, die Einkommensgrenze liegt bei etwa 3.000 € im Monat (sie wird angepasst, prüfe die Seite der Einwanderungsbehörde), und Familienangehörige sind nicht abgedeckt.',
      hacks: [
        'Budapest ist nach Belgrad ein praktischer Einreisepunkt: Busse und Züge verbinden beide Städte, und der Übergang Röszke–Horgoš ist rund um die Uhr offen. Im Sommer und an Feiertagen dauert die Ausreise aus Serbien mitunter Stunden – prüfe vorher die Wartezeiten.',
        'Tage in Serbien, Montenegro, Großbritannien, Irland und Zypern zählen nicht zu den Schengen-90/180 – praktisch, um eine lange Reise aufzuteilen.',
        'Mit dem EES (seit April 2026 voll in Betrieb) gibt es keine Stempel: Die Tage werden über Fingerabdrücke und Foto gezählt. Prüfe vor der Reise dein Restguthaben mit dem offiziellen EU-Rechner.',
        'Inder profitieren von der „Kaskadenregel“: Nach zwei korrekt genutzten Visa innerhalb von drei Jahren gibt es ein Mehrfachvisum für zwei, danach für fünf Jahre.',
      ],
      pitfalls: [
        'Ein Visum für die einmalige Einreise ist mit dem Verlassen des Schengen-Raums verbraucht: Ein Tagesausflug nach Subotica oder Novi Sad kostet dich das Rückkehrrecht.',
        'ETIAS läuft noch nicht (frühestens Ende 2026, eher 2027) – zahl nichts an Seiten, die es jetzt „beantragen“.',
        'Der Pass muss in den letzten 10 Jahren ausgestellt sein und noch 3 Monate nach der Ausreise aus dem Schengen-Raum gelten.',
      ],
      passports: {
        RU: 'Ungarn gehört zu den wenigen EU-Ländern, die Russen über Visazentren in Russland weiterhin Touristenvisa ausstellen. Nach EU-Regeln seit November 2025 sind das meist Visa für die einmalige Einreise. Direktflüge gibt es nicht: Man fliegt über Istanbul, Belgrad oder Dubai; russische Karten funktionieren nicht.',
        BY: 'Belarussen brauchen ein Schengen-Visum; Ungarn nimmt Anträge in Minsk an. Bequeme Wege sind ein Flug über Istanbul oder die Landroute durch Serbien.',
        UA: 'Ukrainer mit biometrischem Pass brauchen kein Visum (90/180). Die Übergänge Záhony–Tschop und Beregsurány–Luschanka sind oft überlastet; der vorübergehende Schutz in der EU gilt bis 4. März 2027.',
        RS: 'Serbische Staatsangehörige reisen visumfrei ein (90/180), und Tage in Serbien zählen nicht dazu – eine beliebte Basis für das Leben „zwischen Schengen-Aufenthalten“.',
      },
    },
    fr: {
      summary:
        'Les citoyens de l’UE n’ont besoin que de leur carte d’identité. Les ressortissants des États-Unis, du Royaume-Uni, du Canada, d’Australie, du Japon, de Corée, du Brésil, du Mexique, des Émirats, d’Israël, d’Ukraine et de Géorgie entrent sans visa jusqu’à 90 jours sur 180 dans tout l’espace Schengen. Les autres, dont les citoyens russes, biélorusses, indiens, chinois, turcs et kazakhs, ont besoin d’un visa Schengen — et la Hongrie en délivre toujours aux Russes.',
      apply:
        'Si la Hongrie est votre destination principale, déposez la demande auprès d’un consulat ou centre de visas hongrois : 90 €, ou 45 € pour les enfants de 6 à 12 ans. La demande se fait jusqu’à six mois avant et au plus tard 15 jours avant le départ ; la décision prend en général une quinzaine de jours, davantage en été. Il faut une assurance couvrant au moins 30 000 €, des réservations d’hôtel, un billet retour et des relevés bancaires.',
      visaRun:
        'Le visa run ne fonctionne pas : la règle des 90/180 compte les jours dans tout l’espace Schengen, et un saut en Serbie ou en Ukraine ne fait que suspendre le compteur. Les jours hors de la zone sortent peu à peu de la fenêtre de 180 jours, mais une sortie ne remet jamais votre crédit à zéro.',
      nomad:
        'La White Card est un titre de séjour d’un an pour les télétravailleurs, renouvelable une fois pour un an. Vous ne pouvez travailler que pour un employeur étranger ou vos propres clients à l’étranger, le seuil de revenus tourne autour de 3 000 € par mois (il est révisé, vérifiez sur le site de l’autorité d’immigration) et la famille n’est pas couverte.',
      hacks: [
        'Budapest est une porte d’entrée pratique après Belgrade : bus et trains relient les deux villes, et le poste de Röszke–Horgoš est ouvert 24 h/24. L’été et les jours fériés, l’attente pour quitter la Serbie peut durer des heures ; vérifiez les temps d’attente avant de partir.',
        'Les jours passés en Serbie, au Monténégro, au Royaume-Uni, en Irlande et à Chypre ne comptent pas dans les 90/180 de Schengen : idéal pour découper un long voyage.',
        'Avec l’EES (pleinement opérationnel depuis avril 2026), plus de tampons : les jours sont décomptés grâce à vos empreintes et votre photo. Vérifiez votre solde avec le calculateur officiel de l’UE avant le départ.',
        'Les citoyens indiens profitent de la règle « en cascade » : après deux visas utilisés correctement en trois ans, ils obtiennent un visa à entrées multiples de deux ans, puis de cinq ans.',
      ],
      pitfalls: [
        'Un visa à entrée unique est consommé dès la sortie de Schengen : une excursion à Subotica ou Novi Sad vous prive du droit de revenir.',
        'ETIAS n’est pas encore en service (au plus tôt fin 2026, plus probablement 2027) : ne payez pas les sites qui le « délivrent » aujourd’hui.',
        'Le passeport doit avoir moins de 10 ans et rester valable 3 mois après la sortie de l’espace Schengen.',
      ],
      passports: {
        RU: 'La Hongrie est l’un des rares pays de l’UE à délivrer encore des visas touristiques aux Russes via des centres de visas en Russie. Selon les règles de l’UE depuis novembre 2025, ce sont surtout des visas à entrée unique. Il n’y a pas de vol direct : on passe par Istanbul, Belgrade ou Dubaï, et les cartes bancaires russes ne fonctionnent pas.',
        BY: 'Les citoyens biélorusses ont besoin d’un visa Schengen ; la Hongrie reçoit les demandes à Minsk. Les itinéraires simples : un vol via Istanbul ou la route par la Serbie.',
        UA: 'Les citoyens ukrainiens munis d’un passeport biométrique n’ont pas besoin de visa (90/180). Les postes de Záhony–Tchop et Beregsurány–Loujanka sont souvent saturés ; la protection temporaire de l’UE court jusqu’au 4 mars 2027.',
        RS: 'Les citoyens serbes entrent sans visa (90/180), et le temps passé en Serbie n’entre pas dans cette limite : une base fréquente pour vivre « entre deux séjours Schengen ».',
      },
    },
    it: {
      summary:
        'Ai cittadini UE basta la carta d’identità. I cittadini di Stati Uniti, Regno Unito, Canada, Australia, Giappone, Corea, Brasile, Messico, Emirati, Israele, Ucraina e Georgia entrano senza visto fino a 90 giorni ogni 180 in tutta l’area Schengen. Tutti gli altri, compresi i cittadini di Russia, Bielorussia, India, Cina, Turchia e Kazakistan, hanno bisogno del visto Schengen, e l’Ungheria continua a rilasciarlo ai russi.',
      apply:
        'Se l’Ungheria è la meta principale, fai domanda a un consolato o centro visti ungherese: 90 €, 45 € per i bambini dai 6 ai 12 anni. Puoi presentarla fino a sei mesi prima e almeno 15 giorni prima; la decisione arriva di solito in circa 15 giorni, d’estate di più. Servono un’assicurazione con almeno 30.000 € di copertura, prenotazioni alberghiere, biglietto di ritorno ed estratti conto.',
      visaRun:
        'Il visa run non funziona: la regola 90/180 conta i giorni in tutta l’area Schengen, e un salto in Serbia o in Ucraina mette solo in pausa il contatore. I giorni fuori escono poco a poco dalla finestra di 180 giorni, ma uscire non azzera mai il tuo credito.',
      nomad:
        'La White Card è un permesso di soggiorno di un anno per chi lavora da remoto, rinnovabile una volta per un altro anno. Puoi lavorare solo per un datore di lavoro estero o per i tuoi clienti esteri, la soglia di reddito è di circa 3.000 € al mese (viene aggiornata, controlla il sito dell’autorità per l’immigrazione) e non copre i familiari.',
      hacks: [
        'Budapest è una comoda porta d’ingresso dopo Belgrado: autobus e treni collegano le due città e il valico di Röszke–Horgoš è aperto 24 ore su 24. D’estate e nei festivi l’uscita dalla Serbia può richiedere ore: controlla i tempi d’attesa prima.',
        'I giorni in Serbia, Montenegro, Regno Unito, Irlanda e Cipro non contano per i 90/180 di Schengen: utile per dividere un viaggio lungo.',
        'Con l’EES (pienamente attivo da aprile 2026) niente timbri: i giorni si contano tramite impronte e foto. Prima di partire controlla il saldo con il calcolatore ufficiale UE.',
        'I cittadini indiani beneficiano della regola «a cascata»: dopo due visti usati correttamente in tre anni ottengono un visto per ingressi multipli di due anni, poi di cinque.',
      ],
      pitfalls: [
        'Un visto a ingresso singolo si esaurisce appena esci da Schengen: una gita a Subotica o Novi Sad ti toglie il diritto di rientrare.',
        'ETIAS non è ancora attivo (non prima di fine 2026, più probabilmente nel 2027): non pagare i siti che lo «rilasciano» ora.',
        'Il passaporto deve essere stato rilasciato da meno di 10 anni e valere ancora 3 mesi dopo l’uscita da Schengen.',
      ],
      passports: {
        RU: 'L’Ungheria è tra i pochi paesi UE che continuano a rilasciare visti turistici ai russi tramite centri visti in Russia. Per le regole UE in vigore da novembre 2025 sono per lo più a ingresso singolo. Non ci sono voli diretti: si vola via Istanbul, Belgrado o Dubai, e le carte russe non funzionano.',
        BY: 'I cittadini bielorussi hanno bisogno del visto Schengen; l’Ungheria accetta domande a Minsk. Le vie più comode sono un volo via Istanbul o la strada attraverso la Serbia.',
        UA: 'I cittadini ucraini con passaporto biometrico non hanno bisogno del visto (90/180). I valichi di Záhony–Čop e Beregsurány–Lužanka sono spesso congestionati; la protezione temporanea UE vale fino al 4 marzo 2027.',
        RS: 'I cittadini serbi entrano senza visto (90/180) e il tempo trascorso in Serbia non conta per questo limite: una base frequente per vivere «tra un soggiorno Schengen e l’altro».',
      },
    },
  },
};

export default guide;
