import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'NZ',
  checked: '2026-10',
  fees: { eta: { kind: 'from', amount: 17, currency: 'NZD' }, visa: { kind: 'from', amount: 341, currency: 'NZD' } },
  stay: { eta: 90, visa: 270 },
  links: { eta: 'https://nzeta.immigration.govt.nz', immigration: 'https://www.immigration.govt.nz' },
  forms: [
    { name: 'NZeTA', url: 'https://nzeta.immigration.govt.nz', fee: { kind: 'from', amount: 17, currency: 'NZD' } },
    { name: 'IVL (International Visitor Conservation and Tourism Levy)', url: 'https://nzeta.immigration.govt.nz', fee: { kind: 'fixed', amount: 100, currency: 'NZD' } },
    { name: 'New Zealand Traveller Declaration (NZTD)', url: 'https://www.travellerdeclaration.govt.nz', fee: { kind: 'free' } },
  ],
  docs: ['returnTicket', 'finance'],
  passportMonths: 3,
  rule: { days: 270, window: 540 },
  extend: {},
  visaRun: 'limited',
  borders: [
    { name: 'Auckland (AKL) → Sydney', to: 'AU', lat: -37.0082, lng: 174.785 },
    { name: 'Christchurch (CHC) → Melbourne', to: 'AU', lat: -43.4894, lng: 172.5322 },
    { name: 'Auckland (AKL) → Nadi', to: 'FJ', lat: -37.0082, lng: 174.785 },
  ],
  transit: { hours: 24 },
  waivers: [
    { holds: ['visaAU'], passports: ['CN'], status: 'eta', days: 90 },
    { holds: ['resAU'], status: 'eta', days: 90 },
  ],
  text: {
    ru: {
      summary:
        'Австралийцам достаточно паспорта. Граждане примерно 60 стран безвизового списка — ЕС, Великобритании, США, Канады, Японии, Кореи, Сингапура, стран Залива, Бразилии, Мексики, Израиля и других — оформляют NZeTA и платят туристический сбор 100 NZD, а получают 3 месяца (британцы — 6). Всем остальным, включая россиян, граждан Китая, Индии, Турции и Украины, нужна визитёрская виза, которую подают онлайн.',
      apply:
        'NZeTA стоит 17 NZD в приложении или 23 NZD на сайте, плюс сбор IVL 100 NZD; подавайте минимум за 72 часа до поездки. Разрешение действует 2 года на несколько поездок. Визитёрскую визу подают онлайн на сайте Immigration New Zealand: от 341 NZD плюс IVL 100 NZD, рассмотрение обычно занимает несколько недель. Понадобятся подтверждение средств (1000 NZD на месяц или 400 NZD, если жильё оплачено), обратный билет, иногда справка о несудимости.',
      extend:
        'Находясь в стране, можно онлайн подать на новую визитёрскую визу до окончания текущего срока — всего не больше 9 месяцев за 18. Это касается и тех, кто приехал по NZeTA. Нужно снова подтвердить деньги и иметь обратный билет.',
      visaRun:
        'Правило «9 месяцев за 18» действует независимо от выездов, так что поездка в Сидней или Нади его не обнуляет. В этих пределах по NZeTA можно въезжать снова и получать до 3 месяцев за визит, но частые возвращения вызывают вопросы о том, не живёте ли вы здесь.',
      transit:
        'При транзите через аэропорт Окленда до 24 часов без выхода из транзитной зоны гражданам безвизовых стран и стран с безвизовым транзитом нужна транзитная NZeTA (17–23 NZD, без сбора IVL). Остальным нужна транзитная виза. Менять аэропорт или выходить в город нельзя.',
      hacks: [
        'С января 2025 года по визитёрской визе или NZeTA можно удалённо работать на зарубежного работодателя или клиентов, пока вы в Новой Зеландии, — главное, не работать на местные компании.',
        'Оформляйте NZeTA в официальном приложении: это на 6 NZD дешевле, чем на сайте, а ответ часто приходит за минуты.',
        'С конца 2025 года граждане Китая с действующей австралийской визой могут въехать в Новую Зеландию без визы — по NZeTA. Условия могут меняться, проверьте их перед поездкой.',
        'Рабочая виза Working Holiday позволяет до года жить и работать в стране в возрасте 18–30 лет, а британцам и канадцам — до 35.',
        'Электронную декларацию NZTD можно заполнить онлайн за 24 часа до начала поездки; с ней обладатели многих паспортов проходят границу через автоматические ворота eGate.',
      ],
      pitfalls: [
        'Сторонние сайты берут за NZeTA 50–100 $. Официально — только приложение NZeTA или nzeta.immigration.govt.nz.',
        'Паспорт должен быть действителен минимум 3 месяца после даты выезда из Новой Зеландии.',
        'Еда, семена, обувь с грязью — декларируйте всё. Незадекларированное — это мгновенный штраф 400 NZD.',
        'На границе могут спросить, хватит ли денег: 1000 NZD на месяц пребывания. Держите выписку или карту под рукой.',
      ],
      waivers: [
        'С конца 2025 года граждане Китая с действующей австралийской визой могут приехать без визитёрской визы — по NZeTA с оплатой сбора IVL. Австралийская виза должна быть действительна на дату въезда; уточните текущие условия на сайте Immigration New Zealand.',
        'Постоянные резиденты Австралии любого гражданства въезжают без визы — по NZeTA, при этом без сбора IVL — и могут оставаться в стране сколь угодно долго, пока действует их статус.',
      ],
      passports: {
        RU: 'Россиянам нужна визитёрская виза, подача онлайн; сбор можно оплатить только иностранной картой. Удобнее всего лететь через Дубай рейсом Emirates в Окленд: транзит через Австралию требует отдельной австралийской транзитной визы.',
        CN: 'Гражданам Китая нужна виза, но с действующей австралийской визой можно приехать по NZeTA — выгоднее всего совместить две страны в одной поездке.',
        IN: 'Гражданам Индии нужна визитёрская виза; в высокий сезон (декабрь — февраль) рассмотрение затягивается, подавайте за 2 месяца.',
        AU: 'Австралийцам не нужны ни виза, ни NZeTA — только паспорт; они могут жить и работать в стране без ограничений.',
        GB: 'Британцы получают по NZeTA до 6 месяцев за визит.',
        TR: 'Граждане Турции не входят в безвизовый список — нужна визитёрская виза.',
      },
    },
    en: {
      summary:
        'Australians just show their passport. Citizens of about 60 visa-waiver countries — the EU, UK, US, Canada, Japan, Korea, Singapore, the Gulf states, Brazil, Mexico, Israel and others — get an NZeTA, pay the NZD 100 tourist levy and receive 3 months (Brits 6). Everyone else, including Russian, Chinese, Indian, Turkish and Ukrainian citizens, applies online for a Visitor visa.',
      apply:
        'The NZeTA costs NZD 17 in the app or NZD 23 on the website, plus the NZD 100 IVL; apply at least 72 hours before travel. It is valid for 2 years and multiple visits. The Visitor visa is applied for online with Immigration New Zealand: from NZD 341 plus the NZD 100 IVL, usually decided within a few weeks. You need proof of funds (NZD 1,000 per month, or NZD 400 if accommodation is prepaid), an onward ticket and sometimes a police certificate.',
      extend:
        'While in the country you can apply online for a further Visitor visa before your current stay ends — up to 9 months in any 18 in total. This also works if you arrived on an NZeTA. You need to show funds and an onward ticket again.',
      visaRun:
        'The 9-months-in-18 rule applies regardless of trips out, so a hop to Sydney or Nadi does not reset it. Within that limit you can re-enter on an NZeTA and get up to 3 months per visit, but frequent returns invite questions about whether you actually live here.',
      transit:
        'Transiting through Auckland airport for up to 24 hours without leaving the transit area, visa-waiver and transit-visa-waiver nationals need a transit NZeTA (NZD 17–23, no IVL). Everyone else needs a transit visa. You may not change airports or go into town.',
      hacks: [
        'Since January 2025 you can work remotely for an overseas employer or clients while visiting New Zealand on a Visitor visa or NZeTA — just not for local businesses.',
        'Use the official NZeTA app: it is NZD 6 cheaper than the website, and approval often comes within minutes.',
        'Since late 2025, Chinese citizens holding a valid Australian visa can visit New Zealand without a visa on an NZeTA. Conditions may change, so check before you travel.',
        'The Working Holiday visa lets 18- to 30-year-olds live and work in the country for up to a year — up to 35 for British and Canadian citizens.',
        'The NZTD digital declaration can be filled in online within 24 hours before your journey starts; with it, many passport holders clear the border through eGates.',
      ],
      pitfalls: [
        'Third-party sites charge $50–100 for an NZeTA. The only official channels are the NZeTA app and nzeta.immigration.govt.nz.',
        'Your passport must be valid for at least 3 months beyond your departure date from New Zealand.',
        'Food, seeds, muddy shoes — declare everything. Anything undeclared means an instant NZD 400 fine.',
        'Officers may ask whether you have enough money: NZD 1,000 per month of stay. Keep a statement or card handy.',
      ],
      waivers: [
        'Since late 2025, Chinese citizens holding a valid Australian visa can come without a Visitor visa — on an NZeTA, paying the IVL. The Australian visa must be valid on the day you arrive; check the current conditions with Immigration New Zealand.',
        'Australian permanent residents of any nationality enter without a visa — on an NZeTA, with no IVL — and can stay indefinitely while their status is valid.',
      ],
      passports: {
        RU: 'Russians need a Visitor visa, applied for online; the fee can only be paid with a foreign card. The easiest route is Emirates via Dubai to Auckland: transiting through Australia requires a separate Australian transit visa.',
        CN: 'Chinese citizens need a visa, but with a valid Australian visa they can come on an NZeTA — the best value is combining both countries in one trip.',
        IN: 'Indian citizens need a Visitor visa; in high season (December–February) processing slows down, so apply two months ahead.',
        AU: 'Australians need neither a visa nor an NZeTA — just a passport — and can live and work in the country without limits.',
        GB: 'British citizens get up to 6 months per visit on an NZeTA.',
        TR: 'Turkish citizens are not on the visa-waiver list and need a Visitor visa.',
      },
    },
    es: {
      summary:
        'A los australianos les basta el pasaporte. Los ciudadanos de unos 60 países exentos de visado —la UE, Reino Unido, EE. UU., Canadá, Japón, Corea, Singapur, los países del Golfo, Brasil, México, Israel y otros— tramitan la NZeTA, pagan la tasa turística de 100 NZD y obtienen 3 meses (los británicos, 6). El resto, incluidos rusos, chinos, indios, turcos y ucranianos, pide en línea un visado de visitante.',
      apply:
        'La NZeTA cuesta 17 NZD en la app o 23 NZD en la web, más la tasa IVL de 100 NZD; solicítala al menos 72 horas antes del viaje. Vale 2 años para varias visitas. El visado de visitante se pide en línea a Immigration New Zealand: desde 341 NZD más la IVL de 100 NZD, con resolución habitual en unas semanas. Necesitas demostrar fondos (1000 NZD por mes, o 400 NZD si el alojamiento está pagado), billete de salida y, a veces, certificado de antecedentes.',
      extend:
        'Estando en el país puedes pedir en línea un nuevo visado de visitante antes de que acabe tu estancia, hasta un máximo de 9 meses en cualquier periodo de 18. También vale si llegaste con NZeTA. Tendrás que volver a demostrar fondos y billete de salida.',
      visaRun:
        'La regla de 9 meses en 18 se aplica aunque salgas, así que una escapada a Sídney o Nadi no la reinicia. Dentro de ese límite puedes volver con la NZeTA y obtener hasta 3 meses por visita, pero los regresos frecuentes despiertan preguntas sobre si en realidad vives aquí.',
      transit:
        'En tránsito por el aeropuerto de Auckland hasta 24 horas sin salir de la zona de tránsito, los ciudadanos de países exentos de visado o de visado de tránsito necesitan una NZeTA de tránsito (17–23 NZD, sin IVL). Los demás necesitan un visado de tránsito. No se puede cambiar de aeropuerto ni salir a la ciudad.',
      hacks: [
        'Desde enero de 2025 puedes trabajar en remoto para una empresa o clientes extranjeros mientras visitas Nueva Zelanda con visado de visitante o NZeTA, siempre que no trabajes para negocios locales.',
        'Usa la app oficial de la NZeTA: es 6 NZD más barata que la web y la aprobación suele llegar en minutos.',
        'Desde finales de 2025, los ciudadanos chinos con visado australiano vigente pueden visitar Nueva Zelanda sin visado, con una NZeTA. Las condiciones pueden cambiar, compruébalas antes de viajar.',
        'El visado Working Holiday permite vivir y trabajar en el país hasta un año entre los 18 y los 30 años; británicos y canadienses, hasta los 35.',
        'La declaración digital NZTD se rellena en línea en las 24 horas previas al inicio del viaje; con ella, los titulares de muchos pasaportes pasan la frontera por las puertas eGate.',
      ],
      pitfalls: [
        'Las webs de terceros cobran 50–100 $ por la NZeTA. Los únicos canales oficiales son la app NZeTA y nzeta.immigration.govt.nz.',
        'El pasaporte debe ser válido al menos 3 meses después de tu fecha de salida de Nueva Zelanda.',
        'Comida, semillas, zapatos con barro: decláralo todo. Lo no declarado supone una multa inmediata de 400 NZD.',
        'En la frontera pueden preguntarte si tienes dinero suficiente: 1000 NZD por mes de estancia. Ten a mano un extracto o la tarjeta.',
      ],
      waivers: [
        'Desde finales de 2025, los ciudadanos chinos con visado australiano vigente pueden venir sin visado de visitante, con NZeTA y pagando la IVL. El visado australiano debe estar vigente el día de llegada; consulta las condiciones actuales en Immigration New Zealand.',
        'Los residentes permanentes en Australia de cualquier nacionalidad entran sin visado —con NZeTA y sin IVL— y pueden quedarse indefinidamente mientras su estatus esté vigente.',
      ],
      passports: {
        RU: 'Los rusos necesitan un visado de visitante, que se pide en línea; la tasa solo se paga con tarjeta extranjera. Lo más cómodo es volar con Emirates vía Dubái a Auckland: hacer tránsito en Australia exige un visado de tránsito australiano aparte.',
        CN: 'Los ciudadanos chinos necesitan visado, pero con un visado australiano vigente pueden venir con NZeTA: lo más rentable es combinar ambos países en un viaje.',
        IN: 'Los ciudadanos indios necesitan visado de visitante; en temporada alta (diciembre–febrero) la tramitación se alarga, así que solicítalo con dos meses de antelación.',
        AU: 'Los australianos no necesitan visado ni NZeTA, solo el pasaporte, y pueden vivir y trabajar en el país sin límites.',
        GB: 'Los británicos obtienen con la NZeTA hasta 6 meses por visita.',
        TR: 'Los ciudadanos turcos no están en la lista de exentos y necesitan visado de visitante.',
      },
    },
    de: {
      summary:
        'Australier zeigen nur ihren Pass. Bürger von rund 60 visumfreien Staaten – EU, Großbritannien, USA, Kanada, Japan, Korea, Singapur, Golfstaaten, Brasilien, Mexiko, Israel und weitere – beantragen eine NZeTA, zahlen die Touristenabgabe von 100 NZD und bekommen 3 Monate (Briten 6). Alle anderen, darunter Russen, Chinesen, Inder, Türken und Ukrainer, beantragen online ein Visitor Visa.',
      apply:
        'Die NZeTA kostet 17 NZD in der App oder 23 NZD auf der Website, dazu die IVL von 100 NZD; beantrage sie mindestens 72 Stunden vor der Reise. Sie gilt 2 Jahre für mehrere Besuche. Das Visitor Visa beantragst du online bei Immigration New Zealand: ab 341 NZD plus 100 NZD IVL, die Entscheidung dauert meist einige Wochen. Nötig sind Mittelnachweise (1.000 NZD pro Monat oder 400 NZD bei bezahlter Unterkunft), ein Weiterreiseticket und manchmal ein Führungszeugnis.',
      extend:
        'Im Land kannst du vor Ablauf deines Aufenthalts online ein weiteres Visitor Visa beantragen – insgesamt höchstens 9 Monate in 18. Das geht auch, wenn du mit NZeTA eingereist bist. Mittel und Weiterreiseticket musst du erneut nachweisen.',
      visaRun:
        'Die Regel „9 Monate in 18“ gilt unabhängig von Ausreisen, ein Abstecher nach Sydney oder Nadi setzt sie also nicht zurück. Innerhalb dieser Grenze kannst du mit NZeTA erneut einreisen und bis zu 3 Monate pro Besuch bleiben, häufige Rückkehr weckt aber Fragen, ob du hier eigentlich lebst.',
      transit:
        'Beim Transit über den Flughafen Auckland bis zu 24 Stunden ohne Verlassen des Transitbereichs brauchen Bürger visumfreier und transitvisumfreier Staaten eine Transit-NZeTA (17–23 NZD, ohne IVL). Alle anderen brauchen ein Transitvisum. Flughafenwechsel und Ausflüge in die Stadt sind nicht erlaubt.',
      hacks: [
        'Seit Januar 2025 darfst du mit Visitor Visa oder NZeTA in Neuseeland remote für einen ausländischen Arbeitgeber oder Kunden arbeiten – nur nicht für lokale Firmen.',
        'Nutze die offizielle NZeTA-App: Sie ist 6 NZD günstiger als die Website, und die Genehmigung kommt oft in Minuten.',
        'Seit Ende 2025 dürfen Chinesen mit gültigem australischem Visum per NZeTA visumfrei nach Neuseeland. Die Bedingungen können sich ändern – vor der Reise prüfen.',
        'Mit dem Working-Holiday-Visum dürfen 18- bis 30-Jährige bis zu einem Jahr im Land leben und arbeiten, Briten und Kanadier bis 35.',
        'Die digitale Erklärung NZTD kannst du online innerhalb von 24 Stunden vor Reisebeginn ausfüllen; damit kommen Inhaber vieler Pässe über die eGates.',
      ],
      pitfalls: [
        'Drittseiten verlangen 50–100 $ für die NZeTA. Offiziell sind nur die NZeTA-App und nzeta.immigration.govt.nz.',
        'Der Pass muss mindestens 3 Monate über das Ausreisedatum aus Neuseeland hinaus gültig sein.',
        'Lebensmittel, Samen, Schuhe mit Erde – alles deklarieren. Nicht Deklariertes kostet sofort 400 NZD Bußgeld.',
        'An der Grenze wird eventuell gefragt, ob dein Geld reicht: 1.000 NZD pro Monat Aufenthalt. Halte Kontoauszug oder Karte bereit.',
      ],
      waivers: [
        'Seit Ende 2025 können Chinesen mit gültigem australischem Visum ohne Visitor Visa kommen – per NZeTA und mit IVL. Das australische Visum muss am Einreisetag gültig sein; prüfe die aktuellen Bedingungen bei Immigration New Zealand.',
        'Daueraufenthaltsberechtigte in Australien jeder Staatsangehörigkeit reisen ohne Visum ein – mit NZeTA, aber ohne IVL – und dürfen unbegrenzt bleiben, solange ihr Status gilt.',
      ],
      passports: {
        RU: 'Russen brauchen ein Visitor Visa, online zu beantragen; die Gebühr lässt sich nur mit ausländischer Karte zahlen. Am einfachsten fliegst du mit Emirates über Dubai nach Auckland: Ein Transit in Australien erfordert ein eigenes australisches Transitvisum.',
        CN: 'Chinesen brauchen ein Visum, mit gültigem australischem Visum aber reicht die NZeTA – am günstigsten ist es, beide Länder in einer Reise zu kombinieren.',
        IN: 'Inder brauchen ein Visitor Visa; in der Hochsaison (Dezember–Februar) dauert die Bearbeitung länger, beantrage es zwei Monate vorher.',
        AU: 'Australier brauchen weder Visum noch NZeTA – nur den Pass – und dürfen unbegrenzt im Land leben und arbeiten.',
        GB: 'Briten bekommen mit der NZeTA bis zu 6 Monate pro Besuch.',
        TR: 'Türkische Staatsangehörige stehen nicht auf der Liste der Visumfreien und brauchen ein Visitor Visa.',
      },
    },
    fr: {
      summary:
        'Les Australiens présentent simplement leur passeport. Les ressortissants d’une soixantaine de pays exemptés de visa — UE, Royaume-Uni, États-Unis, Canada, Japon, Corée, Singapour, pays du Golfe, Brésil, Mexique, Israël et d’autres — demandent une NZeTA, paient la taxe touristique de 100 NZD et obtiennent 3 mois (6 pour les Britanniques). Tous les autres, dont les Russes, Chinois, Indiens, Turcs et Ukrainiens, demandent en ligne un visa visiteur.',
      apply:
        'La NZeTA coûte 17 NZD dans l’application ou 23 NZD sur le site, plus l’IVL de 100 NZD ; faites la demande au moins 72 heures avant le voyage. Elle vaut 2 ans pour plusieurs séjours. Le visa visiteur se demande en ligne auprès d’Immigration New Zealand : à partir de 341 NZD plus l’IVL de 100 NZD, avec une décision en général sous quelques semaines. Il faut prouver vos ressources (1 000 NZD par mois, ou 400 NZD si l’hébergement est payé), avoir un billet de sortie et parfois un extrait de casier judiciaire.',
      extend:
        'Sur place, vous pouvez demander en ligne un nouveau visa visiteur avant la fin de votre séjour, dans la limite de 9 mois sur 18 au total. C’est aussi possible si vous êtes arrivé avec une NZeTA. Il faut à nouveau prouver vos ressources et avoir un billet de sortie.',
      visaRun:
        'La règle des 9 mois sur 18 s’applique quelles que soient les sorties : un saut à Sydney ou à Nadi ne la remet pas à zéro. Dans cette limite, vous pouvez revenir avec la NZeTA et obtenir jusqu’à 3 mois par séjour, mais des retours fréquents font naître des questions sur le fait que vous viviez ici.',
      transit:
        'En transit par l’aéroport d’Auckland jusqu’à 24 heures sans quitter la zone de transit, les ressortissants des pays exemptés de visa ou de visa de transit ont besoin d’une NZeTA de transit (17 à 23 NZD, sans IVL). Les autres doivent avoir un visa de transit. Impossible de changer d’aéroport ou de sortir en ville.',
      hacks: [
        'Depuis janvier 2025, vous pouvez télétravailler pour un employeur ou des clients étrangers pendant votre séjour en Nouvelle-Zélande avec un visa visiteur ou une NZeTA — mais pas pour des entreprises locales.',
        'Passez par l’application officielle NZeTA : elle coûte 6 NZD de moins que le site, et l’accord arrive souvent en quelques minutes.',
        'Depuis fin 2025, les Chinois titulaires d’un visa australien valide peuvent visiter la Nouvelle-Zélande sans visa, avec une NZeTA. Les conditions peuvent évoluer, vérifiez avant le départ.',
        'Le visa Working Holiday permet aux 18–30 ans de vivre et travailler jusqu’à un an dans le pays, jusqu’à 35 ans pour les Britanniques et les Canadiens.',
        'La déclaration numérique NZTD se remplit en ligne dans les 24 heures précédant le début du voyage ; avec elle, les titulaires de nombreux passeports passent par les portiques eGate.',
      ],
      pitfalls: [
        'Les sites tiers facturent la NZeTA 50 à 100 $. Les seuls canaux officiels sont l’application NZeTA et nzeta.immigration.govt.nz.',
        'Le passeport doit être valable au moins 3 mois après votre date de départ de Nouvelle-Zélande.',
        'Nourriture, graines, chaussures boueuses : déclarez tout. Ce qui n’est pas déclaré vaut une amende immédiate de 400 NZD.',
        'À la frontière, on peut vous demander si vos fonds suffisent : 1 000 NZD par mois de séjour. Gardez un relevé ou votre carte sous la main.',
      ],
      waivers: [
        'Depuis fin 2025, les Chinois titulaires d’un visa australien valide peuvent venir sans visa visiteur, avec une NZeTA et en payant l’IVL. Le visa australien doit être valable le jour de l’arrivée ; vérifiez les conditions actuelles auprès d’Immigration New Zealand.',
        'Les résidents permanents australiens de toute nationalité entrent sans visa — avec une NZeTA mais sans IVL — et peuvent rester sans limite tant que leur statut est valable.',
      ],
      passports: {
        RU: 'Les Russes ont besoin d’un visa visiteur, à demander en ligne ; les frais ne se paient qu’avec une carte étrangère. Le plus simple : Emirates via Dubaï jusqu’à Auckland, car un transit par l’Australie exige un visa de transit australien distinct.',
        CN: 'Les Chinois ont besoin d’un visa, mais avec un visa australien valide la NZeTA suffit : le plus intéressant est de combiner les deux pays en un seul voyage.',
        IN: 'Les Indiens ont besoin d’un visa visiteur ; en haute saison (décembre à février), le traitement s’allonge, demandez-le deux mois à l’avance.',
        AU: 'Les Australiens n’ont besoin ni de visa ni de NZeTA, seulement du passeport, et peuvent vivre et travailler dans le pays sans limite.',
        GB: 'Les Britanniques obtiennent avec la NZeTA jusqu’à 6 mois par séjour.',
        TR: 'Les Turcs ne figurent pas sur la liste des pays exemptés et ont besoin d’un visa visiteur.',
      },
    },
    it: {
      summary:
        'Agli australiani basta il passaporto. I cittadini di circa 60 paesi esenti da visto — UE, Regno Unito, Stati Uniti, Canada, Giappone, Corea, Singapore, paesi del Golfo, Brasile, Messico, Israele e altri — richiedono la NZeTA, pagano la tassa turistica di 100 NZD e ottengono 3 mesi (i britannici 6). Tutti gli altri, compresi russi, cinesi, indiani, turchi e ucraini, chiedono online un visto visitatori.',
      apply:
        'La NZeTA costa 17 NZD nell’app o 23 NZD sul sito, più la IVL di 100 NZD; fai domanda almeno 72 ore prima del viaggio. Vale 2 anni per più visite. Il visto visitatori si chiede online a Immigration New Zealand: da 341 NZD più la IVL di 100 NZD, con decisione di solito in poche settimane. Servono la prova dei mezzi (1.000 NZD al mese, o 400 NZD se l’alloggio è pagato), il biglietto di uscita e a volte il certificato penale.',
      extend:
        'Mentre sei nel paese puoi chiedere online un nuovo visto visitatori prima che scada il soggiorno, fino a un massimo di 9 mesi in 18. Vale anche se sei arrivato con la NZeTA. Dovrai dimostrare di nuovo i mezzi e avere il biglietto di uscita.',
      visaRun:
        'La regola dei 9 mesi su 18 vale indipendentemente dalle uscite, quindi un salto a Sydney o Nadi non la azzera. Entro quel limite puoi rientrare con la NZeTA e ottenere fino a 3 mesi a visita, ma i ritorni frequenti fanno sorgere domande sul fatto che tu viva qui.',
      transit:
        'In transito all’aeroporto di Auckland fino a 24 ore senza lasciare l’area di transito, i cittadini dei paesi esenti da visto o da visto di transito hanno bisogno di una NZeTA di transito (17–23 NZD, senza IVL). Gli altri devono avere un visto di transito. Non si può cambiare aeroporto né uscire in città.',
      hacks: [
        'Da gennaio 2025, con visto visitatori o NZeTA, puoi lavorare da remoto per un datore di lavoro o clienti esteri mentre sei in Nuova Zelanda, purché non lavori per aziende locali.',
        'Usa l’app ufficiale NZeTA: costa 6 NZD meno del sito e l’approvazione arriva spesso in pochi minuti.',
        'Da fine 2025 i cittadini cinesi con un visto australiano valido possono visitare la Nuova Zelanda senza visto, con la NZeTA. Le condizioni possono cambiare, verificale prima di partire.',
        'Il visto Working Holiday consente a chi ha 18–30 anni di vivere e lavorare nel paese fino a un anno, fino a 35 per britannici e canadesi.',
        'La dichiarazione digitale NZTD si compila online nelle 24 ore prima dell’inizio del viaggio; con essa i titolari di molti passaporti passano dagli eGate.',
      ],
      pitfalls: [
        'I siti di terzi chiedono 50–100 $ per la NZeTA. Gli unici canali ufficiali sono l’app NZeTA e nzeta.immigration.govt.nz.',
        'Il passaporto deve essere valido almeno 3 mesi oltre la data di uscita dalla Nuova Zelanda.',
        'Cibo, semi, scarpe sporche di terra: dichiara tutto. Ciò che non è dichiarato costa una multa immediata di 400 NZD.',
        'Alla frontiera possono chiederti se hai abbastanza soldi: 1.000 NZD per mese di soggiorno. Tieni a portata di mano un estratto conto o la carta.',
      ],
      waivers: [
        'Da fine 2025 i cittadini cinesi con un visto australiano valido possono arrivare senza visto visitatori, con la NZeTA e pagando la IVL. Il visto australiano deve essere valido il giorno dell’arrivo; verifica le condizioni attuali con Immigration New Zealand.',
        'I residenti permanenti in Australia di qualsiasi cittadinanza entrano senza visto — con la NZeTA ma senza IVL — e possono restare senza limiti finché il loro status è valido.',
      ],
      passports: {
        RU: 'Ai russi serve il visto visitatori, da chiedere online; la tassa si paga solo con carta estera. La via più comoda è Emirates via Dubai fino ad Auckland: il transito in Australia richiede un visto di transito australiano a parte.',
        CN: 'Ai cittadini cinesi serve il visto, ma con un visto australiano valido basta la NZeTA: conviene combinare i due paesi in un unico viaggio.',
        IN: 'Ai cittadini indiani serve il visto visitatori; in alta stagione (dicembre–febbraio) i tempi si allungano, quindi fai domanda due mesi prima.',
        AU: 'Agli australiani non servono né visto né NZeTA, solo il passaporto, e possono vivere e lavorare nel paese senza limiti.',
        GB: 'I britannici ottengono con la NZeTA fino a 6 mesi per visita.',
        TR: 'I cittadini turchi non sono nella lista degli esenti e hanno bisogno del visto visitatori.',
      },
    },
  },
};

export default guide;
