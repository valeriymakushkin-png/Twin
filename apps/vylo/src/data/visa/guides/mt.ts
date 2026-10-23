import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'MT',
  checked: '2026-10',
  fees: { visa: { kind: 'fixed', amount: 90, currency: 'EUR' } },
  stay: { visa: 90 },
  links: { immigration: 'https://identita.gov.mt' },
  docs: ['insurance', 'returnTicket', 'booking', 'finance'],
  passportMonths: 3,
  rule: { days: 90, window: 180 },
  visaRun: 'no',
  nomad: { name: 'Nomad Residence Permit', months: 12, income: { kind: 'from', amount: 3500, currency: 'EUR' } },
  text: {
    ru: {
      summary:
        'Гражданам ЕС достаточно ID-карты. Граждане США, Великобритании, Канады, Австралии, Японии, Кореи, Бразилии, Мексики, ОАЭ, Израиля, Украины и Грузии въезжают без визы до 90 дней в любые 180 по всему Шенгену. Остальным, включая граждан России, Индии, Китая, Турции и Казахстана, нужна шенгенская виза — подойдёт виза любой страны Шенгена.',
      apply:
        'Если Мальта — основная страна поездки, подавайтесь в мальтийское консульство или визовый центр: сбор 90 €, для детей 6–12 лет — 45 €. Подать можно за полгода, но не позже чем за 15 дней; решение обычно около 15 дней. Нужны страховка с покрытием от 30 000 €, брони, обратный билет и выписка со счёта. Для языковых курсов дольше 90 дней нужна национальная виза D, а не шенгенская.',
      visaRun:
        'Визаран не работает: правило 90/180 считает дни во всём Шенгене, а паром на Сицилию — это поездка внутри зоны. Выезд в Тунис или Великобританию лишь ставит счётчик на паузу, но не обнуляет его.',
      nomad:
        'Nomad Residence Permit — вид на жительство на год с продлением, всего до четырёх лет. Нужен доход от удалённой работы на иностранного работодателя или клиентов не ниже 42 000 € в год до налогов (около 3500 € в месяц), страховка и аренда жилья; пассивный доход не учитывается. Заявление подают через Residency Malta.',
      hacks: [
        'Паром Virtu Ferries из Поццалло на Сицилии до Валлетты идёт около 1 ч 45 мин и работает внутри Шенгена — удобно совместить Мальту с Италией без лишних перелётов.',
        'Дни в Великобритании, Ирландии, на Кипре и в Тунисе не входят в шенгенские 90/180 — длинную поездку можно разбить без нарушений.',
        'С запуском EES (полностью с апреля 2026 года) штампов нет: дни считаются автоматически. Перед поездкой проверьте остаток в официальном калькуляторе ЕС.',
        'Индийцам выгодно «каскадное» правило: после двух использованных по правилам виз за три года дают многократную визу на два года, затем на пять.',
      ],
      pitfalls: [
        'Паспорт должен быть выдан не более 10 лет назад и действовать ещё 3 месяца после выезда из Шенгена — британцев на Мальте разворачивают из-за этого чаще всего.',
        'ETIAS ещё не работает (запуск не раньше конца 2026, вероятнее 2027) — не платите сайтам, которые «оформляют» его сейчас.',
        'Рейсы из Стамбула, Лондона или Туниса прилетают на внешнюю границу: здесь проверяют визу, страховку и обратный билет, даже если до этого вы уже бывали в Шенгене.',
      ],
      passports: {
        RU: 'Мальта не запрещает въезд россиянам с шенгенской визой любой страны, но сама выдаёт их в России в ограниченном числе. С ноября 2025 года ЕС выдаёт россиянам в основном однократные визы. Прямых рейсов нет: удобнее всего Turkish Airlines через Стамбул; российские карты не работают.',
        GB: 'Британцам виза не нужна (90/180), но после Brexit дни на Мальте входят в шенгенский лимит, а паспорт должен быть моложе 10 лет и действовать 3 месяца после выезда.',
        IN: 'Гражданам Индии нужна шенгенская виза; после двух поездок без нарушений положена многократная виза на два, затем на пять лет.',
      },
    },
    en: {
      summary:
        'EU citizens just need an ID card. Citizens of the US, UK, Canada, Australia, Japan, Korea, Brazil, Mexico, the UAE, Israel, Ukraine and Georgia enter visa-free for up to 90 days in any 180 across the Schengen area. Everyone else, including citizens of Russia, India, China, Turkey and Kazakhstan, needs a Schengen visa — one from any Schengen country will do.',
      apply:
        'If Malta is your main destination, apply at a Maltese consulate or visa centre: the fee is €90, or €45 for children aged 6–12. Apply up to six months ahead and at least 15 days before the trip; decisions usually take about 15 days. You need insurance with at least €30,000 cover, bookings, a return ticket and bank statements. Language courses longer than 90 days require a national D visa, not a Schengen one.',
      visaRun:
        'Visa runs do not work: the 90/180 rule counts days across the whole Schengen area, and the ferry to Sicily is a trip within the zone. A trip to Tunisia or the UK only pauses the clock; it never resets it.',
      nomad:
        'The Nomad Residence Permit lasts one year and can be renewed, up to four years in total. You need remote-work income from a foreign employer or clients of at least €42,000 a year before tax (about €3,500 a month), insurance and a rental contract; passive income does not count. Applications go through Residency Malta.',
      hacks: [
        'The Virtu Ferries crossing from Pozzallo in Sicily to Valletta takes about 1 h 45 min and stays inside Schengen — an easy way to combine Malta with Italy without extra flights.',
        'Days in the UK, Ireland, Cyprus and Tunisia do not count towards the Schengen 90/180, so a long trip can be split without breaking the rules.',
        'With the EES (fully live since April 2026) there are no stamps and days are counted automatically. Check your balance with the EU’s official calculator before you travel.',
        'Indian citizens benefit from the “cascade” rule: after two visas used correctly within three years, you get a two-year multiple-entry visa, then a five-year one.',
      ],
      pitfalls: [
        'Your passport must have been issued within the last 10 years and be valid for 3 months after you leave Schengen — the most common reason British visitors are turned away in Malta.',
        'ETIAS is not running yet (late 2026 at the earliest, more likely 2027) — do not pay sites that “process” it now.',
        'Flights from Istanbul, London or Tunis land at an external border: your visa, insurance and return ticket are checked here, even if you have been in Schengen before.',
      ],
      passports: {
        RU: 'Malta does not ban Russians holding a Schengen visa from any country, but it issues only a limited number of visas in Russia itself. Since November 2025 the EU has mostly been issuing single-entry visas to Russians. There are no direct flights: Turkish Airlines via Istanbul is the easiest route, and Russian bank cards do not work.',
        GB: 'British citizens need no visa (90/180), but since Brexit days in Malta count towards the Schengen limit, and your passport must be under 10 years old and valid for 3 months after you leave.',
        IN: 'Indian citizens need a Schengen visa; after two trouble-free trips you qualify for a two-year, then a five-year multiple-entry visa.',
      },
    },
    es: {
      summary:
        'A los ciudadanos de la UE les basta el DNI. Los de EE. UU., Reino Unido, Canadá, Australia, Japón, Corea, Brasil, México, Emiratos, Israel, Ucrania y Georgia entran sin visado hasta 90 días en cualquier periodo de 180 en todo Schengen. El resto, incluidos los ciudadanos de Rusia, India, China, Turquía y Kazajistán, necesita visado Schengen, y sirve el de cualquier país del espacio.',
      apply:
        'Si Malta es tu destino principal, solicita el visado en un consulado o centro de visados maltés: cuesta 90 € (45 € para niños de 6 a 12 años). Puedes presentarlo hasta seis meses antes y al menos 15 días antes; la resolución suele tardar unos 15 días. Necesitas un seguro con al menos 30 000 € de cobertura, reservas, billete de vuelta y extractos bancarios. Para cursos de idiomas de más de 90 días hace falta un visado nacional D, no uno Schengen.',
      visaRun:
        'Los visa runs no funcionan: la regla 90/180 cuenta los días en todo Schengen, y el ferri a Sicilia es un viaje dentro de la zona. Ir a Túnez o al Reino Unido solo detiene el contador; nunca lo reinicia.',
      nomad:
        'El Nomad Residence Permit dura un año y se renueva, hasta cuatro años en total. Necesitas ingresos por trabajo en remoto para un empleador o clientes extranjeros de al menos 42 000 € brutos al año (unos 3500 € al mes), seguro y contrato de alquiler; los ingresos pasivos no cuentan. Se solicita a través de Residency Malta.',
      hacks: [
        'El ferri de Virtu Ferries de Pozzallo (Sicilia) a La Valeta tarda unos 1 h 45 min y no sale de Schengen: una forma fácil de combinar Malta con Italia sin más vuelos.',
        'Los días en Reino Unido, Irlanda, Chipre y Túnez no cuentan para los 90/180 de Schengen, así que puedes dividir un viaje largo sin incumplir nada.',
        'Con el EES (plenamente operativo desde abril de 2026) no hay sellos y los días se cuentan solos. Consulta tu saldo en la calculadora oficial de la UE antes de viajar.',
        'Los ciudadanos indios se benefician de la regla «en cascada»: tras dos visados bien usados en tres años, reciben uno de entradas múltiples de dos años y después de cinco.',
      ],
      pitfalls: [
        'El pasaporte debe haberse expedido hace menos de 10 años y ser válido 3 meses después de salir de Schengen: es el motivo más habitual por el que se deniega la entrada a británicos en Malta.',
        'ETIAS aún no funciona (como pronto a finales de 2026, probablemente en 2027): no pagues a webs que lo «tramitan» ahora.',
        'Los vuelos desde Estambul, Londres o Túnez llegan a una frontera exterior: aquí se revisan visado, seguro y billete de vuelta, aunque ya hayas estado antes en Schengen.',
      ],
      passports: {
        RU: 'Malta no veta la entrada a rusos con visado Schengen de cualquier país, pero en Rusia expide un número limitado de visados. Desde noviembre de 2025 la UE concede a los rusos sobre todo visados de una sola entrada. No hay vuelos directos: lo más fácil es Turkish Airlines vía Estambul, y las tarjetas rusas no funcionan.',
        GB: 'Los británicos no necesitan visado (90/180), pero desde el Brexit los días en Malta cuentan para el límite Schengen, y el pasaporte debe tener menos de 10 años y ser válido 3 meses después de la salida.',
        IN: 'Los ciudadanos indios necesitan visado Schengen; tras dos viajes sin incidencias, optan a uno de entradas múltiples de dos años y luego de cinco.',
      },
    },
    de: {
      summary:
        'EU-Bürgern genügt der Personalausweis. Staatsangehörige der USA, Großbritanniens, Kanadas, Australiens, Japans, Koreas, Brasiliens, Mexikos, der VAE, Israels, der Ukraine und Georgiens reisen visumfrei bis zu 90 Tage innerhalb von 180 Tagen im ganzen Schengen-Raum. Alle anderen, auch Bürger Russlands, Indiens, Chinas, der Türkei und Kasachstans, brauchen ein Schengen-Visum – das eines beliebigen Schengen-Staats genügt.',
      apply:
        'Ist Malta dein Hauptreiseziel, beantragst du das Visum bei einem maltesischen Konsulat oder Visazentrum: 90 €, für Kinder von 6 bis 12 Jahren 45 €. Der Antrag geht frühestens sechs Monate und spätestens 15 Tage vor der Reise; die Entscheidung dauert meist etwa 15 Tage. Nötig sind eine Versicherung mit mindestens 30.000 € Deckung, Buchungen, ein Rückflugticket und Kontoauszüge. Für Sprachkurse über 90 Tage brauchst du ein nationales D-Visum, kein Schengen-Visum.',
      visaRun:
        'Visa-Runs funktionieren nicht: Die 90/180-Regel zählt die Tage im gesamten Schengen-Raum, und die Fähre nach Sizilien ist eine Fahrt innerhalb der Zone. Ein Abstecher nach Tunesien oder Großbritannien hält die Uhr nur an, setzt sie aber nie zurück.',
      nomad:
        'Die Nomad Residence Permit gilt ein Jahr und lässt sich verlängern, insgesamt bis zu vier Jahre. Nötig sind Einkünfte aus Remote-Arbeit für einen ausländischen Arbeitgeber oder Kunden von mindestens 42.000 € brutto im Jahr (rund 3.500 € im Monat), eine Versicherung und ein Mietvertrag; passive Einkünfte zählen nicht. Beantragt wird bei Residency Malta.',
      hacks: [
        'Die Fähre von Virtu Ferries von Pozzallo auf Sizilien nach Valletta braucht etwa 1 Std. 45 Min. und bleibt im Schengen-Raum – so verbindest du Malta bequem mit Italien, ohne extra zu fliegen.',
        'Tage in Großbritannien, Irland, Zypern und Tunesien zählen nicht zu den Schengen-90/180 – so lässt sich eine lange Reise regelkonform aufteilen.',
        'Mit dem EES (seit April 2026 voll in Betrieb) gibt es keine Stempel, die Tage werden automatisch gezählt. Prüfe vor der Reise dein Restguthaben mit dem offiziellen EU-Rechner.',
        'Inder profitieren von der „Kaskadenregel“: Nach zwei korrekt genutzten Visa innerhalb von drei Jahren gibt es ein Mehrfachvisum für zwei, danach für fünf Jahre.',
      ],
      pitfalls: [
        'Der Pass muss in den letzten 10 Jahren ausgestellt sein und noch 3 Monate nach der Ausreise aus dem Schengen-Raum gelten – der häufigste Grund, warum Briten auf Malta abgewiesen werden.',
        'ETIAS läuft noch nicht (frühestens Ende 2026, eher 2027) – zahl nichts an Seiten, die es jetzt „beantragen“.',
        'Flüge aus Istanbul, London oder Tunis landen an einer Außengrenze: Visum, Versicherung und Rückflug werden hier geprüft, auch wenn du schon einmal im Schengen-Raum warst.',
      ],
      passports: {
        RU: 'Malta verweigert Russen mit einem Schengen-Visum eines beliebigen Landes nicht die Einreise, stellt in Russland selbst aber nur wenige Visa aus. Seit November 2025 erhalten Russen in der EU meist nur Visa für die einmalige Einreise. Direktflüge gibt es nicht: Am einfachsten geht es mit Turkish Airlines über Istanbul; russische Karten funktionieren nicht.',
        GB: 'Briten brauchen kein Visum (90/180), doch seit dem Brexit zählen Tage auf Malta zum Schengen-Limit, und der Pass muss jünger als 10 Jahre sein und 3 Monate nach der Ausreise gelten.',
        IN: 'Inder brauchen ein Schengen-Visum; nach zwei problemlosen Reisen gibt es ein Mehrfachvisum für zwei, dann für fünf Jahre.',
      },
    },
    fr: {
      summary:
        'Les citoyens de l’UE n’ont besoin que de leur carte d’identité. Les ressortissants des États-Unis, du Royaume-Uni, du Canada, d’Australie, du Japon, de Corée, du Brésil, du Mexique, des Émirats, d’Israël, d’Ukraine et de Géorgie entrent sans visa jusqu’à 90 jours sur 180 dans tout l’espace Schengen. Les autres, dont les citoyens russes, indiens, chinois, turcs et kazakhs, ont besoin d’un visa Schengen, délivré par n’importe quel État membre.',
      apply:
        'Si Malte est votre destination principale, déposez la demande auprès d’un consulat ou centre de visas maltais : 90 €, ou 45 € pour les enfants de 6 à 12 ans. La demande se fait jusqu’à six mois avant et au plus tard 15 jours avant le départ ; la décision prend en général une quinzaine de jours. Il faut une assurance couvrant au moins 30 000 €, des réservations, un billet retour et des relevés bancaires. Pour un cours de langue de plus de 90 jours, il faut un visa national D, pas un visa Schengen.',
      visaRun:
        'Le visa run ne fonctionne pas : la règle des 90/180 compte les jours dans tout l’espace Schengen, et le ferry pour la Sicile reste à l’intérieur de la zone. Un saut en Tunisie ou au Royaume-Uni ne fait que suspendre le compteur, sans jamais le remettre à zéro.',
      nomad:
        'Le Nomad Residence Permit dure un an et se renouvelle, jusqu’à quatre ans au total. Il faut des revenus de télétravail pour un employeur ou des clients étrangers d’au moins 42 000 € bruts par an (environ 3 500 € par mois), une assurance et un bail ; les revenus passifs ne comptent pas. La demande se fait auprès de Residency Malta.',
      hacks: [
        'Le ferry Virtu Ferries de Pozzallo (Sicile) à La Valette met environ 1 h 45 et reste dans l’espace Schengen : un moyen simple de combiner Malte et l’Italie sans vol supplémentaire.',
        'Les jours passés au Royaume-Uni, en Irlande, à Chypre et en Tunisie ne comptent pas dans les 90/180 de Schengen : un long voyage peut être découpé en toute légalité.',
        'Avec l’EES (pleinement opérationnel depuis avril 2026), plus de tampons et les jours sont décomptés automatiquement. Vérifiez votre solde avec le calculateur officiel de l’UE avant le départ.',
        'Les citoyens indiens profitent de la règle « en cascade » : après deux visas utilisés correctement en trois ans, ils obtiennent un visa à entrées multiples de deux ans, puis de cinq ans.',
      ],
      pitfalls: [
        'Le passeport doit avoir moins de 10 ans et rester valable 3 mois après la sortie de Schengen : c’est la première cause de refoulement des Britanniques à Malte.',
        'ETIAS n’est pas encore en service (au plus tôt fin 2026, plus probablement 2027) : ne payez pas les sites qui le « délivrent » aujourd’hui.',
        'Les vols depuis Istanbul, Londres ou Tunis arrivent à une frontière extérieure : visa, assurance et billet retour y sont contrôlés, même si vous êtes déjà venu dans l’espace Schengen.',
      ],
      passports: {
        RU: 'Malte n’interdit pas l’entrée aux Russes munis d’un visa Schengen de n’importe quel pays, mais elle n’en délivre elle-même qu’un nombre limité en Russie. Depuis novembre 2025, l’UE accorde surtout des visas à entrée unique aux Russes. Pas de vol direct : le plus simple est Turkish Airlines via Istanbul ; les cartes bancaires russes ne fonctionnent pas.',
        GB: 'Les Britanniques n’ont pas besoin de visa (90/180), mais depuis le Brexit les jours à Malte comptent dans la limite Schengen, et le passeport doit avoir moins de 10 ans et rester valable 3 mois après la sortie.',
        IN: 'Les citoyens indiens ont besoin d’un visa Schengen ; après deux voyages sans incident, ils peuvent obtenir un visa à entrées multiples de deux ans, puis de cinq ans.',
      },
    },
    it: {
      summary:
        'Ai cittadini UE basta la carta d’identità. I cittadini di Stati Uniti, Regno Unito, Canada, Australia, Giappone, Corea, Brasile, Messico, Emirati, Israele, Ucraina e Georgia entrano senza visto fino a 90 giorni ogni 180 in tutta l’area Schengen. Tutti gli altri, compresi i cittadini di Russia, India, Cina, Turchia e Kazakistan, hanno bisogno del visto Schengen, rilasciato da qualsiasi paese dell’area.',
      apply:
        'Se Malta è la meta principale, fai domanda a un consolato o centro visti maltese: 90 €, 45 € per i bambini dai 6 ai 12 anni. Puoi presentarla fino a sei mesi prima e almeno 15 giorni prima; la decisione arriva di solito in circa 15 giorni. Servono un’assicurazione con almeno 30.000 € di copertura, prenotazioni, biglietto di ritorno ed estratti conto. Per corsi di lingua oltre i 90 giorni serve un visto nazionale D, non uno Schengen.',
      visaRun:
        'Il visa run non funziona: la regola 90/180 conta i giorni in tutta l’area Schengen, e il traghetto per la Sicilia resta dentro l’area. Una gita in Tunisia o nel Regno Unito mette solo in pausa il contatore, senza mai azzerarlo.',
      nomad:
        'Il Nomad Residence Permit dura un anno ed è rinnovabile, fino a quattro anni in tutto. Servono redditi da lavoro da remoto per un datore di lavoro o clienti esteri di almeno 42.000 € lordi l’anno (circa 3.500 € al mese), un’assicurazione e un contratto d’affitto; i redditi passivi non contano. La domanda si presenta a Residency Malta.',
      hacks: [
        'Il traghetto Virtu Ferries da Pozzallo a La Valletta impiega circa 1 ora e 45 e non esce da Schengen: un modo semplice per abbinare Malta alla Sicilia senza altri voli.',
        'I giorni nel Regno Unito, in Irlanda, a Cipro e in Tunisia non contano per i 90/180 di Schengen: puoi dividere un viaggio lungo senza violare le regole.',
        'Con l’EES (pienamente attivo da aprile 2026) niente timbri e i giorni si contano in automatico. Prima di partire controlla il saldo con il calcolatore ufficiale UE.',
        'I cittadini indiani beneficiano della regola «a cascata»: dopo due visti usati correttamente in tre anni ottengono un visto per ingressi multipli di due anni, poi di cinque.',
      ],
      pitfalls: [
        'Il passaporto deve essere stato rilasciato da meno di 10 anni e valere ancora 3 mesi dopo l’uscita da Schengen: è il motivo più comune per cui i britannici vengono respinti a Malta.',
        'ETIAS non è ancora attivo (non prima di fine 2026, più probabilmente nel 2027): non pagare i siti che lo «rilasciano» ora.',
        'I voli da Istanbul, Londra o Tunisi atterrano su una frontiera esterna: qui si controllano visto, assicurazione e biglietto di ritorno, anche se sei già stato in area Schengen.',
      ],
      passports: {
        RU: 'Malta non vieta l’ingresso ai russi con visto Schengen di qualsiasi paese, ma in Russia ne rilascia pochi di propri. Da novembre 2025 l’UE concede ai russi soprattutto visti a ingresso singolo. Non ci sono voli diretti: la via più comoda è Turkish Airlines via Istanbul, e le carte russe non funzionano.',
        GB: 'I britannici non hanno bisogno del visto (90/180), ma dopo la Brexit i giorni a Malta contano per il limite Schengen, e il passaporto deve avere meno di 10 anni e valere 3 mesi dopo l’uscita.',
        IN: 'I cittadini indiani hanno bisogno del visto Schengen; dopo due viaggi senza problemi possono ottenere un visto per ingressi multipli di due anni, poi di cinque.',
      },
    },
  },
};

export default guide;
