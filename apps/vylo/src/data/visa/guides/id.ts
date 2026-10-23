import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'ID',
  checked: '2026-10',
  overrides: {
    // Ministerial Regulation No. 10/2026 (in force 9 July 2026) added these to the 30-day visa exemption
    KZ: { status: 'free', days: 30 },
    BY: { status: 'free', days: 30 },
    MO: { status: 'free', days: 30 },
  },
  fees: {
    voa: { kind: 'fixed', amount: 500000, currency: 'IDR' },
    evisa: { kind: 'from', amount: 1500000, currency: 'IDR' },
  },
  stay: { voa: 30, evisa: 60 },
  links: { evisa: 'https://evisa.imigrasi.go.id', immigration: 'https://www.imigrasi.go.id' },
  forms: [
    { name: 'All Indonesia', url: 'https://allindonesia.imigrasi.go.id', fee: { kind: 'free' } },
    { name: 'Love Bali (Bali tourist levy)', url: 'https://lovebali.baliprov.go.id', fee: { kind: 'fixed', amount: 150000, currency: 'IDR' } },
  ],
  docs: ['returnTicket'],
  passportMonths: 6,
  extend: { days: 30, fee: { kind: 'fixed', amount: 500000, currency: 'IDR' } },
  visaRun: 'yes',
  borders: [
    { name: 'Batam Centre → Singapore (HarbourFront)', to: 'SG', lat: 1.1287, lng: 104.053 },
    { name: 'Ngurah Rai, Bali (DPS) → Kuala Lumpur', to: 'MY', lat: -8.7482, lng: 115.1675 },
    { name: 'Soekarno-Hatta, Jakarta (CGK) → Singapore', to: 'SG', lat: -6.1256, lng: 106.6559 },
  ],
  nomad: { name: 'Remote Worker KITAS (E33G)', months: 12, income: { kind: 'fixed', amount: 60000, currency: 'USD' } },
  text: {
    ru: {
      summary:
        'Граждане России, США, ЕС, Великобритании, Австралии, Индии, Китая и ещё почти 100 стран получают визу по прибытии (e-VOA) на 30 дней за 500 000 рупий с возможностью продлить её ещё на 30. Без визы на 30 дней без продления въезжают страны АСЕАН, Бразилия, Турция, Колумбия, Перу, а с июля 2026 года — Казахстан, Беларусь и Макао. Остальным нужна e-виза C1.',
      apply:
        'e-VOA удобнее оформить заранее на evisa.imigrasi.go.id: оплата картой, электронная виза на почту за несколько минут — и на границе вы идёте сразу к паспортному контролю. Её можно купить и на месте в аэропорту, но там очередь. Перед прилётом все заполняют бесплатную форму All Indonesia (не раньше чем за 3 дня), а на Бали дополнительно платят туристический сбор 150 000 рупий через Love Bali. Объявлено повышение цены e-VOA до 750 000 рупий — дата пока не назначена, проверьте перед поездкой.',
      extend:
        'e-VOA продлевают один раз на 30 дней за 500 000 рупий онлайн на том же портале, не позже чем за несколько дней до окончания срока. При первом продлении иммиграционный офис может вызвать вас сдать биометрию — заложите на это день. Безвизовый въезд продлить нельзя вообще.',
      visaRun:
        'Визаран работает: после выезда можно сразу въехать по новой e-VOA. С Бали дешевле всего лететь в Куала-Лумпур или Сингапур, с Батама до Сингапура — час на пароме. Новая виза каждый раз стоит 500 000 рупий, поэтому для долгой жизни выгоднее e-виза C1 или многократная D1.',
      nomad:
        'Remote Worker KITAS (E33G) — годовой вид на жительство для удалённых сотрудников иностранных компаний. Нужен доход от 60 000 $ в год, трудовой договор с компанией за пределами Индонезии и выписки со счёта; работать на местных клиентов нельзя. Подаётся онлайн на evisa.imigrasi.go.id, госпошлины — несколько миллионов рупий.',
      hacks: [
        'Если вы из безвизовой страны, но хотите остаться дольше месяца, при въезде всё равно берите e-VOA: безвиз нельзя продлить, а визу по прибытии — можно, и выйдет 60 дней.',
        'E-виза C1 даёт 60 дней и продлевается дважды по 60 — до 180 дней без выезда. Многократная туристическая D1 на 1 или 5 лет даёт до 60 дней за каждый въезд.',
        'Батам и Бинтан — в часе на пароме от Сингапура (HarbourFront и Tanah Merah): самый быстрый визаран для живущих в Сингапуре и наоборот. Постоянные жители Сингапура из стран с VOA могут приезжать на Батам, Бинтан и Каримун без визы на 4 дня.',
        'Сбор на Бали платится один раз за поездку — сохраните QR-код из письма Love Bali и при перелётах с острова на остров не платите повторно.',
        'Заполните All Indonesia ещё в зоне пересадки: QR-код объединяет иммиграционную, таможенную и медицинскую декларации и ускоряет проход.',
      ],
      pitfalls: [
        'Сайты-посредники продают e-VOA в два-три раза дороже. Официальный адрес — только evisa.imigrasi.go.id, а приложение Love Bali должно быть от правительства провинции Бали.',
        'За каждый день просрочки берут 1 000 000 рупий, а при долгом оверстее грозят задержание и депортация.',
        'Пограничники на Бали разворачивают пассажиров с повреждёнными паспортами — надрывы, следы воды, вырванные страницы. Оставьте не меньше двух чистых страниц.',
        'Работа и даже платные посты для местных брендов по туристической визе — частая причина депортаций в 2025–2026 годах: иммиграция проверяет соцсети.',
      ],
      passports: {
        RU: 'Россиянам — e-VOA на 30 дней с продлением ещё на 30. «Аэрофлот» летает в Денпасар напрямую. Российские карты не работают, а e-VOA оплачивается только иностранной картой — без неё покупайте визу в аэропорту за наличные (рупии, доллары или евро).',
        KZ: 'С 9 июля 2026 года граждане Казахстана въезжают без визы на 30 дней, но без продления. Если планируете больше месяца, оформите e-VOA или C1.',
        BY: 'С 9 июля 2026 года граждане Беларуси въезжают без визы на 30 дней без права продления. Для поездки дольше берите e-VOA.',
        IN: 'Граждане Индии получают e-VOA на 30 дней. Покупайте её онлайн до вылета — на Бали очередь в кассу VOA бывает больше часа.',
      },
    },
    en: {
      summary:
        'Citizens of Russia, the US, EU, UK, Australia, India, China and nearly 100 other countries get a visa on arrival (e-VOA) for 30 days at 500,000 rupiah, extendable once by 30 days. ASEAN countries, Brazil, Turkey, Colombia, Peru and, since July 2026, Kazakhstan, Belarus and Macau enter visa-free for 30 days with no extension. Everyone else needs a C1 e-visa.',
      apply:
        'It is easiest to buy the e-VOA in advance at evisa.imigrasi.go.id: pay by card and the visa reaches your inbox within minutes, so you go straight to passport control. You can also buy it at the airport, but there is a queue. Before landing, everyone files the free All Indonesia form (no more than three days ahead), and in Bali you also pay the 150,000-rupiah tourist levy through Love Bali. A rise in the e-VOA price to 750,000 rupiah has been announced without a date — check before you travel.',
      extend:
        'The e-VOA can be extended once by 30 days for 500,000 rupiah online on the same portal, a few days before it expires at the latest. For the first extension the immigration office may call you in for biometrics, so allow a day. Visa-free entry cannot be extended at all.',
      visaRun:
        'Visa runs work: after leaving you can come straight back on a new e-VOA. From Bali the cheapest hops are to Kuala Lumpur or Singapore; from Batam, Singapore is an hour away by ferry. Each new visa costs 500,000 rupiah again, so for long stays a C1 e-visa or a multiple-entry D1 makes more sense.',
      nomad:
        'The Remote Worker KITAS (E33G) is a one-year residence permit for remote employees of foreign companies. You need an income of at least $60,000 a year, an employment contract with a company outside Indonesia and bank statements; working for local clients is not allowed. Apply online at evisa.imigrasi.go.id; government fees run to a few million rupiah.',
      hacks: [
        'If your passport is visa-exempt but you want to stay more than a month, take the e-VOA anyway: visa-free entry cannot be extended, the visa on arrival can — giving you 60 days.',
        'The C1 e-visa gives 60 days and can be extended twice by 60 — up to 180 days without leaving. The multiple-entry D1 tourist visa, valid for one or five years, gives up to 60 days per entry.',
        'Batam and Bintan are an hour by ferry from Singapore (HarbourFront and Tanah Merah): the fastest visa run for people living in Singapore and vice versa. Singapore permanent residents from VOA-eligible countries can visit Batam, Bintan and Karimun visa-free for four days.',
        'The Bali levy is paid once per trip — keep the QR code from the Love Bali e-mail and do not pay again when you island-hop back to Bali.',
        'Fill in All Indonesia while still in the transit area: its single QR code covers the immigration, customs and health declarations and speeds up arrival.',
      ],
      pitfalls: [
        'Agency sites sell the e-VOA for two to three times the price. The only official address is evisa.imigrasi.go.id, and the Love Bali app must be published by the Bali provincial government.',
        'Every day of overstay costs 1,000,000 rupiah, and long overstays mean detention and deportation.',
        'Bali officers turn back passengers with damaged passports — tears, water damage, missing pages. Keep at least two blank pages.',
        'Working, or even paid posts for local brands, on a tourist visa was a common reason for deportation in 2025–2026: immigration checks social media.',
      ],
      passports: {
        RU: 'Russian citizens get a 30-day e-VOA, extendable by 30 more. Aeroflot flies direct to Denpasar. Russian cards do not work, and the e-VOA can only be paid with a foreign card — without one, buy the visa at the airport in cash (rupiah, dollars or euros).',
        KZ: 'Since 9 July 2026 Kazakh citizens enter visa-free for 30 days, with no extension. If you plan to stay longer than a month, get an e-VOA or a C1.',
        BY: 'Since 9 July 2026 Belarusian citizens enter visa-free for 30 days with no right to extend. For longer trips, take the e-VOA.',
        IN: 'Indian citizens get a 30-day e-VOA. Buy it online before departure — the VOA payment queue in Bali can take over an hour.',
      },
    },
    es: {
      summary:
        'Los ciudadanos de Rusia, EE. UU., la UE, el Reino Unido, Australia, la India, China y casi 100 países más obtienen un visado a la llegada (e-VOA) de 30 días por 500 000 rupias, prorrogable una vez otros 30. Los países de la ASEAN, Brasil, Turquía, Colombia, Perú y, desde julio de 2026, Kazajistán, Bielorrusia y Macao entran sin visado 30 días sin prórroga. El resto necesita el visado electrónico C1.',
      apply:
        'Lo más cómodo es comprar el e-VOA por adelantado en evisa.imigrasi.go.id: pagas con tarjeta, el visado llega al correo en minutos y vas directo al control de pasaportes. También se compra en el aeropuerto, pero hay cola. Antes de aterrizar, todo el mundo rellena el formulario gratuito All Indonesia (como máximo tres días antes), y en Bali se paga además la tasa turística de 150 000 rupias a través de Love Bali. Se ha anunciado una subida del e-VOA a 750 000 rupias sin fecha: compruébalo antes de viajar.',
      extend:
        'El e-VOA se prorroga una vez 30 días por 500 000 rupias en línea en el mismo portal, como tarde unos días antes de que venza. En la primera prórroga, la oficina de inmigración puede citarte para tomar datos biométricos: resérvate un día. La entrada sin visado no admite ninguna prórroga.',
      visaRun:
        'El visa run funciona: al salir puedes volver enseguida con un e-VOA nuevo. Desde Bali, lo más barato es volar a Kuala Lumpur o Singapur; desde Batam, Singapur está a una hora en ferri. Cada visado nuevo vuelve a costar 500 000 rupias, así que para estancias largas compensa más el C1 o el D1 de entradas múltiples.',
      nomad:
        'El Remote Worker KITAS (E33G) es un permiso de residencia de un año para empleados en remoto de empresas extranjeras. Necesitas ingresos de al menos 60 000 $ al año, un contrato con una empresa fuera de Indonesia y extractos bancarios; no puedes trabajar para clientes locales. Se solicita en línea en evisa.imigrasi.go.id y las tasas oficiales suman unos pocos millones de rupias.',
      hacks: [
        'Si tu pasaporte está exento de visado pero quieres quedarte más de un mes, pide igualmente el e-VOA: la entrada sin visado no se prorroga y el visado a la llegada sí, con lo que tendrás 60 días.',
        'El visado electrónico C1 da 60 días y se prorroga dos veces otros 60: hasta 180 días sin salir. El visado turístico D1 de entradas múltiples, de uno o cinco años, permite hasta 60 días por entrada.',
        'Batam y Bintan están a una hora en ferri desde Singapur (HarbourFront y Tanah Merah): el visa run más rápido para quien vive en Singapur, y al revés. Los residentes permanentes de Singapur de países con VOA pueden visitar Batam, Bintan y Karimun sin visado durante cuatro días.',
        'La tasa de Bali se paga una vez por viaje: guarda el código QR del correo de Love Bali y no vuelvas a pagar si regresas a Bali tras saltar entre islas.',
        'Rellena All Indonesia en la zona de tránsito: su código QR único reúne las declaraciones de inmigración, aduana y salud y agiliza la llegada.',
      ],
      pitfalls: [
        'Las webs intermediarias venden el e-VOA al doble o el triple de precio. La única dirección oficial es evisa.imigrasi.go.id, y la app Love Bali debe ser del gobierno provincial de Bali.',
        'Cada día de exceso de estancia cuesta 1 000 000 de rupias, y los excesos largos acaban en detención y deportación.',
        'En Bali devuelven a los pasajeros con el pasaporte dañado: roturas, manchas de agua, páginas arrancadas. Deja al menos dos páginas en blanco.',
        'Trabajar, o incluso publicar contenido pagado para marcas locales, con visado de turista fue un motivo habitual de deportación en 2025–2026: inmigración revisa las redes sociales.',
      ],
      passports: {
        RU: 'Los ciudadanos rusos obtienen un e-VOA de 30 días prorrogable otros 30. Aeroflot vuela directo a Denpasar. Las tarjetas rusas no funcionan y el e-VOA solo se paga con tarjeta extranjera; si no tienes, compra el visado en el aeropuerto en efectivo (rupias, dólares o euros).',
        KZ: 'Desde el 9 de julio de 2026 los ciudadanos kazajos entran sin visado durante 30 días, sin prórroga. Si piensas quedarte más de un mes, pide un e-VOA o un C1.',
        BY: 'Desde el 9 de julio de 2026 los ciudadanos bielorrusos entran sin visado 30 días sin derecho a prórroga. Para viajes más largos, pide el e-VOA.',
        IN: 'Los ciudadanos indios obtienen un e-VOA de 30 días. Cómpralo en línea antes de salir: en Bali la cola para pagar el VOA puede superar la hora.',
      },
    },
    de: {
      summary:
        'Bürger Russlands, der USA, der EU, Großbritanniens, Australiens, Indiens, Chinas und fast 100 weiterer Länder bekommen ein Visa on Arrival (e-VOA) für 30 Tage zu 500.000 Rupiah, einmal um 30 Tage verlängerbar. ASEAN-Staaten, Brasilien, die Türkei, Kolumbien, Peru und seit Juli 2026 Kasachstan, Belarus und Macau reisen 30 Tage visumfrei ohne Verlängerung ein. Alle anderen brauchen ein C1-E-Visum.',
      apply:
        'Am einfachsten kaufst du das e-VOA vorab auf evisa.imigrasi.go.id: Kartenzahlung, das Visum ist in Minuten im Postfach, und du gehst direkt zur Passkontrolle. Am Flughafen gibt es es auch, aber mit Warteschlange. Vor der Landung füllen alle das kostenlose All-Indonesia-Formular aus (höchstens drei Tage vorher), auf Bali kommt die Touristenabgabe von 150.000 Rupiah über Love Bali dazu. Eine Erhöhung des e-VOA auf 750.000 Rupiah ist angekündigt, ein Datum fehlt noch – prüfe vor der Reise.',
      extend:
        'Das e-VOA lässt sich einmal um 30 Tage für 500.000 Rupiah online auf demselben Portal verlängern, spätestens ein paar Tage vor Ablauf. Bei der ersten Verlängerung kann das Immigration Office dich zur Biometrie bestellen – plane einen Tag ein. Die visumfreie Einreise ist gar nicht verlängerbar.',
      visaRun:
        'Visa-Runs funktionieren: Nach der Ausreise kannst du sofort mit einem neuen e-VOA zurückkommen. Von Bali aus sind Flüge nach Kuala Lumpur oder Singapur am günstigsten, von Batam ist Singapur eine Fährstunde entfernt. Jedes neue Visum kostet wieder 500.000 Rupiah, für lange Aufenthalte lohnen sich daher ein C1-E-Visum oder ein D1 für mehrfache Einreise eher.',
      nomad:
        'Das Remote Worker KITAS (E33G) ist eine einjährige Aufenthaltserlaubnis für Remote-Angestellte ausländischer Firmen. Nötig sind ein Einkommen von mindestens 60.000 $ im Jahr, ein Arbeitsvertrag mit einem Unternehmen außerhalb Indonesiens und Kontoauszüge; Arbeit für lokale Kunden ist nicht erlaubt. Beantragt wird online auf evisa.imigrasi.go.id, die staatlichen Gebühren betragen einige Millionen Rupiah.',
      hacks: [
        'Ist dein Pass visumfrei, du willst aber länger als einen Monat bleiben, nimm trotzdem das e-VOA: Die visumfreie Einreise ist nicht verlängerbar, das Visa on Arrival schon – macht 60 Tage.',
        'Das C1-E-Visum gilt 60 Tage und lässt sich zweimal um 60 verlängern – bis zu 180 Tage ohne Ausreise. Das D1-Touristenvisum für mehrfache Einreise, gültig ein oder fünf Jahre, erlaubt bis zu 60 Tage pro Einreise.',
        'Batam und Bintan liegen eine Fährstunde von Singapur entfernt (HarbourFront und Tanah Merah): der schnellste Visa-Run für alle, die in Singapur leben, und umgekehrt. Singapurer Permanent Residents aus VOA-berechtigten Ländern dürfen Batam, Bintan und Karimun vier Tage visumfrei besuchen.',
        'Die Bali-Abgabe zahlst du einmal pro Reise – heb den QR-Code aus der Love-Bali-Mail auf und zahl nicht erneut, wenn du nach Inselhopping nach Bali zurückkehrst.',
        'Füll All Indonesia schon im Transitbereich aus: Ein QR-Code deckt Einreise-, Zoll- und Gesundheitserklärung ab und beschleunigt die Ankunft.',
      ],
      pitfalls: [
        'Vermittlerseiten verkaufen das e-VOA zum zwei- bis dreifachen Preis. Die einzige offizielle Adresse ist evisa.imigrasi.go.id, und die Love-Bali-App muss von der Provinzregierung Bali stammen.',
        'Jeder Tag Überziehung kostet 1.000.000 Rupiah, lange Überziehungen enden mit Haft und Abschiebung.',
        'Auf Bali werden Passagiere mit beschädigtem Pass zurückgeschickt – Risse, Wasserschäden, fehlende Seiten. Lass mindestens zwei Seiten frei.',
        'Arbeit oder schon bezahlte Posts für lokale Marken mit Touristenvisum waren 2025–2026 ein häufiger Abschiebegrund: Die Einwanderungsbehörde prüft soziale Netzwerke.',
      ],
      passports: {
        RU: 'Russische Staatsangehörige erhalten ein 30-Tage-e-VOA mit Verlängerung um weitere 30. Aeroflot fliegt direkt nach Denpasar. Russische Karten funktionieren nicht, und das e-VOA lässt sich nur mit ausländischer Karte bezahlen – ohne sie kaufst du das Visum am Flughafen in bar (Rupiah, Dollar oder Euro).',
        KZ: 'Seit dem 9. Juli 2026 reisen kasachische Staatsangehörige 30 Tage visumfrei ein, ohne Verlängerung. Wer länger als einen Monat bleiben will, nimmt ein e-VOA oder C1.',
        BY: 'Seit dem 9. Juli 2026 reisen belarussische Staatsangehörige 30 Tage visumfrei ein, ohne Verlängerungsmöglichkeit. Für längere Reisen nimm das e-VOA.',
        IN: 'Indische Staatsangehörige bekommen ein 30-Tage-e-VOA. Kauf es vor dem Abflug online – auf Bali dauert die Schlange an der VOA-Kasse manchmal über eine Stunde.',
      },
    },
    fr: {
      summary:
        'Les citoyens russes, américains, européens, britanniques, australiens, indiens, chinois et de près de 100 autres pays obtiennent un visa à l’arrivée (e-VOA) de 30 jours pour 500 000 roupies, prolongeable une fois de 30 jours. Les pays de l’ASEAN, le Brésil, la Turquie, la Colombie, le Pérou et, depuis juillet 2026, le Kazakhstan, la Biélorussie et Macao entrent sans visa pour 30 jours non prolongeables. Les autres ont besoin de l’e-visa C1.',
      apply:
        'Le plus simple est d’acheter l’e-VOA à l’avance sur evisa.imigrasi.go.id : paiement par carte, visa reçu par e-mail en quelques minutes, et vous filez directement au contrôle des passeports. On peut aussi l’acheter à l’aéroport, mais il y a la queue. Avant l’atterrissage, tout le monde remplit le formulaire gratuit All Indonesia (au plus tôt trois jours avant), et à Bali on règle en plus la taxe touristique de 150 000 roupies via Love Bali. Une hausse de l’e-VOA à 750 000 roupies a été annoncée sans date : vérifiez avant le départ.',
      extend:
        'L’e-VOA se prolonge une fois de 30 jours pour 500 000 roupies en ligne sur le même portail, au plus tard quelques jours avant l’échéance. Pour la première prolongation, le bureau d’immigration peut vous convoquer pour la biométrie : prévoyez une journée. L’entrée sans visa, elle, n’est pas prolongeable.',
      visaRun:
        'Le visa run fonctionne : après une sortie, on peut revenir aussitôt avec un nouvel e-VOA. Depuis Bali, le moins cher est de s’envoler pour Kuala Lumpur ou Singapour ; depuis Batam, Singapour est à une heure de ferry. Chaque nouveau visa coûte de nouveau 500 000 roupies : pour un long séjour, l’e-visa C1 ou le D1 à entrées multiples sont plus intéressants.',
      nomad:
        'Le Remote Worker KITAS (E33G) est un titre de séjour d’un an pour les salariés à distance d’entreprises étrangères. Il faut un revenu d’au moins 60 000 $ par an, un contrat de travail avec une société hors d’Indonésie et des relevés bancaires ; travailler pour des clients locaux est interdit. La demande se fait en ligne sur evisa.imigrasi.go.id, et les frais officiels atteignent quelques millions de roupies.',
      hacks: [
        'Si votre passeport est exempté mais que vous voulez rester plus d’un mois, prenez quand même l’e-VOA : l’entrée sans visa ne se prolonge pas, le visa à l’arrivée si — soit 60 jours.',
        'L’e-visa C1 donne 60 jours et se prolonge deux fois de 60 jours : jusqu’à 180 jours sans sortir. Le visa touristique D1 à entrées multiples, valable un ou cinq ans, permet jusqu’à 60 jours par entrée.',
        'Batam et Bintan sont à une heure de ferry de Singapour (HarbourFront et Tanah Merah) : le visa run le plus rapide pour qui vit à Singapour, et inversement. Les résidents permanents de Singapour originaires de pays éligibles au VOA peuvent visiter Batam, Bintan et Karimun sans visa pendant quatre jours.',
        'La taxe de Bali se paie une fois par voyage : gardez le QR code de l’e-mail Love Bali et ne repayez pas en revenant à Bali après un tour des îles.',
        'Remplissez All Indonesia dès la zone de transit : un seul QR code regroupe les déclarations d’immigration, de douane et de santé et accélère l’arrivée.',
      ],
      pitfalls: [
        'Des sites intermédiaires revendent l’e-VOA deux à trois fois plus cher. La seule adresse officielle est evisa.imigrasi.go.id, et l’application Love Bali doit être publiée par le gouvernement provincial de Bali.',
        'Chaque jour de dépassement coûte 1 000 000 de roupies, et les longs dépassements se soldent par une rétention et une expulsion.',
        'À Bali, les agents refoulent les passagers aux passeports abîmés : déchirures, traces d’eau, pages arrachées. Gardez au moins deux pages vierges.',
        'Travailler, ou même publier du contenu rémunéré pour des marques locales, avec un visa touristique a souvent conduit à l’expulsion en 2025–2026 : l’immigration surveille les réseaux sociaux.',
      ],
      passports: {
        RU: 'Les ressortissants russes obtiennent un e-VOA de 30 jours, prolongeable de 30 jours. Aeroflot dessert Denpasar en direct. Les cartes russes ne fonctionnent pas et l’e-VOA ne se paie qu’avec une carte étrangère : à défaut, achetez le visa à l’aéroport en espèces (roupies, dollars ou euros).',
        KZ: 'Depuis le 9 juillet 2026, les ressortissants kazakhs entrent sans visa pour 30 jours, sans prolongation. Pour plus d’un mois, prenez un e-VOA ou un C1.',
        BY: 'Depuis le 9 juillet 2026, les ressortissants biélorusses entrent sans visa pour 30 jours, sans possibilité de prolongation. Pour un séjour plus long, prenez l’e-VOA.',
        IN: 'Les ressortissants indiens obtiennent un e-VOA de 30 jours. Achetez-le en ligne avant le départ : à Bali, la file pour payer le VOA dépasse parfois une heure.',
      },
    },
    it: {
      summary:
        'I cittadini di Russia, Stati Uniti, UE, Regno Unito, Australia, India, Cina e di quasi altri 100 paesi ottengono un visto all’arrivo (e-VOA) di 30 giorni a 500.000 rupie, prorogabile una volta di altri 30. I paesi ASEAN, Brasile, Turchia, Colombia, Perù e, da luglio 2026, Kazakistan, Bielorussia e Macao entrano senza visto per 30 giorni non prorogabili. Tutti gli altri hanno bisogno del visto elettronico C1.',
      apply:
        'Il modo più comodo è comprare l’e-VOA in anticipo su evisa.imigrasi.go.id: paghi con carta, il visto arriva per e-mail in pochi minuti e vai dritto al controllo passaporti. Si può comprare anche in aeroporto, ma c’è la coda. Prima dell’atterraggio tutti compilano il modulo gratuito All Indonesia (non più di tre giorni prima) e a Bali si paga anche la tassa turistica di 150.000 rupie tramite Love Bali. È stato annunciato un aumento dell’e-VOA a 750.000 rupie, ancora senza data: controlla prima di partire.',
      extend:
        'L’e-VOA si proroga una volta di 30 giorni per 500.000 rupie online sullo stesso portale, al più tardi qualche giorno prima della scadenza. Alla prima proroga l’ufficio immigrazione può convocarti per i dati biometrici: tieni libera una giornata. L’ingresso senza visto non si può prorogare in alcun modo.',
      visaRun:
        'Il visa run funziona: dopo l’uscita puoi rientrare subito con un nuovo e-VOA. Da Bali i voli più economici sono per Kuala Lumpur o Singapore; da Batam Singapore è a un’ora di traghetto. Ogni nuovo visto costa di nuovo 500.000 rupie, quindi per i soggiorni lunghi conviene il C1 o il D1 a ingressi multipli.',
      nomad:
        'Il Remote Worker KITAS (E33G) è un permesso di soggiorno annuale per dipendenti da remoto di aziende estere. Servono un reddito di almeno 60.000 $ l’anno, un contratto di lavoro con un’azienda fuori dall’Indonesia ed estratti conto; lavorare per clienti locali non è consentito. Si richiede online su evisa.imigrasi.go.id e le tasse ufficiali ammontano a qualche milione di rupie.',
      hacks: [
        'Se il tuo passaporto è esente dal visto ma vuoi restare più di un mese, prendi comunque l’e-VOA: l’ingresso senza visto non si proroga, il visto all’arrivo sì, e arrivi a 60 giorni.',
        'Il visto elettronico C1 dà 60 giorni e si proroga due volte di 60: fino a 180 giorni senza uscire. Il visto turistico D1 a ingressi multipli, valido uno o cinque anni, consente fino a 60 giorni per ingresso.',
        'Batam e Bintan sono a un’ora di traghetto da Singapore (HarbourFront e Tanah Merah): il visa run più rapido per chi vive a Singapore, e viceversa. I residenti permanenti di Singapore di paesi ammessi al VOA possono visitare Batam, Bintan e Karimun senza visto per quattro giorni.',
        'La tassa di Bali si paga una volta per viaggio: conserva il codice QR dell’e-mail Love Bali e non pagare di nuovo se torni a Bali dopo un giro tra le isole.',
        'Compila All Indonesia già nell’area di transito: un unico codice QR riunisce le dichiarazioni di immigrazione, dogana e salute e velocizza l’arrivo.',
      ],
      pitfalls: [
        'I siti intermediari vendono l’e-VOA al doppio o al triplo del prezzo. L’unico indirizzo ufficiale è evisa.imigrasi.go.id e l’app Love Bali deve essere del governo provinciale di Bali.',
        'Ogni giorno di overstay costa 1.000.000 di rupie e gli overstay lunghi portano a detenzione ed espulsione.',
        'A Bali respingono i passeggeri con il passaporto danneggiato: strappi, segni d’acqua, pagine mancanti. Lascia almeno due pagine libere.',
        'Lavorare, o anche pubblicare post pagati per marchi locali, con un visto turistico è stato un motivo frequente di espulsione nel 2025–2026: l’immigrazione controlla i social.',
      ],
      passports: {
        RU: 'I cittadini russi ottengono un e-VOA di 30 giorni, prorogabile di altri 30. Aeroflot vola diretto a Denpasar. Le carte russe non funzionano e l’e-VOA si paga solo con carta estera: senza, compra il visto in aeroporto in contanti (rupie, dollari o euro).',
        KZ: 'Dal 9 luglio 2026 i cittadini kazaki entrano senza visto per 30 giorni, senza proroga. Se pensi di restare più di un mese, prendi un e-VOA o un C1.',
        BY: 'Dal 9 luglio 2026 i cittadini bielorussi entrano senza visto per 30 giorni senza possibilità di proroga. Per viaggi più lunghi prendi l’e-VOA.',
        IN: 'I cittadini indiani ottengono un e-VOA di 30 giorni. Compralo online prima di partire: a Bali la coda per pagare il VOA può superare l’ora.',
      },
    },
  },
};

export default guide;
