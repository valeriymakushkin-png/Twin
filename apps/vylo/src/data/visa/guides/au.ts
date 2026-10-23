import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'AU',
  checked: '2026-10',
  fees: { eta: { kind: 'fixed', amount: 20, currency: 'AUD' }, evisa: { kind: 'from', amount: 200, currency: 'AUD' } },
  stay: { eta: 90, evisa: 90 },
  links: {
    eta: 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/electronic-travel-authority-601',
    evisa: 'https://online.immi.gov.au',
    immigration: 'https://immi.homeaffairs.gov.au',
  },
  forms: [
    {
      name: 'Australian ETA (subclass 601)',
      url: 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/electronic-travel-authority-601',
      fee: { kind: 'fixed', amount: 20, currency: 'AUD' },
    },
    { name: 'eVisitor (subclass 651)', url: 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/evisitor-651', fee: { kind: 'free' } },
  ],
  docs: ['returnTicket', 'finance'],
  passportMonths: 0,
  extend: {},
  visaRun: 'limited',
  borders: [
    { name: 'Sydney (SYD) → Auckland', to: 'NZ', lat: -33.9399, lng: 151.1753 },
    { name: 'Darwin (DRW) → Denpasar', to: 'ID', lat: -12.4147, lng: 130.877 },
    { name: 'Perth (PER) → Denpasar', to: 'ID', lat: -31.9403, lng: 115.9669 },
  ],
  transit: { hours: 8 },
  text: {
    ru: {
      summary:
        'Без предварительного разрешения в Австралию не въезжает никто, кроме новозеландцев. Граждане ЕС, Великобритании, Норвегии и Швейцарии получают бесплатный eVisitor; американцы, канадцы, японцы, корейцы, сингапурцы, малайзийцы и граждане ряда стран Европы могут вместо этого оформить ETA в приложении за 20 австралийских долларов — оба дают до 3 месяцев за визит в течение 12 месяцев. Всем остальным, включая россиян, индийцев, китайцев, бразильцев и мексиканцев, нужна визитёрская виза (subclass 600), которую подают онлайн.',
      apply:
        'eVisitor оформляют бесплатно через ImmiAccount, одобрение обычно приходит за день-два. Для ETA скачайте приложение Australian ETA, отсканируйте чип паспорта и сделайте селфи — сбор 20 AUD, ответ часто за несколько минут или часов. Визу 600 подают онлайн через ImmiAccount, от 200 AUD: выписки из банка, справка с работы, маршрут; рассмотрение — от нескольких дней до нескольких недель, иногда просят сдать биометрию.',
      extend:
        'ETA, eVisitor и визу 600 не продлевают как таковые, но в Австралии можно подать на новую визу 600 до окончания текущей — лучше за несколько недель. Подача внутри страны стоит заметно дороже, а одобрение зависит от денег и убедительной причины. Проверьте, нет ли в визе условия 8503 «No further stay» — оно делает это невозможным.',
      visaRun:
        'ETA и eVisitor действуют 12 месяцев, каждый въезд — до 3 месяцев; после выезда счёт начинается заново. Обычно летают в Окленд из Сиднея (около 3 часов) или на Бали из Дарвина и Перта. Но если похоже, что вы фактически живёте в Австралии, визу могут аннулировать прямо на границе.',
      transit:
        'Граждане многих стран могут провести в аэропорту до 8 часов без визы, если не выходят из транзитной зоны и имеют подтверждённый билет дальше. Для более долгой стыковки или выхода в город нужна бесплатная транзитная виза (subclass 771), её подают онлайн.',
      hacks: [
        'Гражданам ЕС и Великобритании не нужно платить за ETA: eVisitor бесплатен и даёт то же самое. Сторонние сайты «Australia ETA» берут 50–150 $.',
        'Виза Working Holiday (417 или 462) позволяет до года жить и работать в Австралии в возрасте 18–30 лет, а гражданам Великобритании, Канады, Франции, Италии и ряда других стран — до 35 лет.',
        'Визу 600 при хорошей истории поездок нередко выдают многократной на 12 месяцев или дольше. Сильный финансовый пакет и прошлые визы в Шенген, США или Великобританию повышают шансы.',
        'Гражданам Китая с австралийской визой с конца 2025 года можно съездить в Новую Зеландию без визы — по NZeTA.',
        'Подавайте на визу 600 за 6–8 недель и берите билеты с возможностью возврата: сроки рассмотрения непредсказуемы.',
      ],
      pitfalls: [
        'Не задекларировали еду, семена или изделия из дерева — штраф на месте, а при обмане — аннулирование визы. При сомнении отмечайте «да» в карте прибытия.',
        'Работать по ETA, eVisitor и визе 600 нельзя. Нарушение — аннулирование визы и, как правило, запрет на новую визу на 3 года.',
        'ETA и eVisitor привязаны к номеру паспорта: при смене паспорта нужно новое разрешение, иначе вас не посадят на рейс.',
      ],
      passports: {
        RU: 'Россиянам нужна виза 600 через ImmiAccount. Оплатить сбор можно только иностранной картой; рассмотрение порой занимает от нескольких недель до пары месяцев. Летают через Дубай, Доху или Абу-Даби либо через Пекин и Гуанчжоу — в пути 20–24 часа.',
        IN: 'Индийцы подают на визу 600 онлайн. С 2024 года им доступна и виза Work and Holiday (462) по жеребьёвке.',
        CN: 'Граждане Китая подают на визу 600, а частым гостям доступен поток Frequent Traveller с визой на срок до 10 лет. С австралийской визой можно без визы съездить в Новую Зеландию по NZeTA.',
        US: 'Американцы оформляют ETA в приложении за 20 AUD — до 3 месяцев за визит в течение года.',
        GB: 'Британцы могут выбрать бесплатный eVisitor или ETA за 20 AUD — условия у них одинаковые.',
      },
    },
    en: {
      summary:
        'Nobody except New Zealanders enters Australia without prior authorisation. EU, UK, Norwegian and Swiss citizens get the free eVisitor; Americans, Canadians, Japanese, Koreans, Singaporeans, Malaysians and several European nationalities can instead buy an ETA in the app for AUD 20 — both allow up to 3 months per visit over 12 months. Everyone else, including Russians, Indians, Chinese, Brazilians and Mexicans, applies online for a Visitor visa (subclass 600).',
      apply:
        'The eVisitor is free through ImmiAccount and is usually approved within a day or two. For the ETA, download the Australian ETA app, scan your passport chip and take a selfie — AUD 20, often approved within minutes or hours. The subclass 600 is applied for online in ImmiAccount from AUD 200: bank statements, employment letter, itinerary; processing takes from a few days to several weeks, and biometrics are sometimes requested.',
      extend:
        'The ETA, eVisitor and subclass 600 cannot be extended as such, but you can apply in Australia for a new subclass 600 before your current visa expires — ideally weeks in advance. An onshore application costs considerably more, and approval depends on your funds and a convincing reason. Check that your visa does not carry condition 8503 “No further stay”, which rules this out.',
      visaRun:
        'The ETA and eVisitor are valid for 12 months, with up to 3 months per entry; leaving restarts the count. The usual hops are Sydney to Auckland (about 3 hours) or Darwin and Perth to Bali. But if it looks as if you are living in Australia, your visa can be cancelled at the border.',
      transit:
        'Many nationalities can spend up to 8 hours at the airport without a visa if they stay airside and hold a confirmed onward ticket. A longer layover, or going into town, needs the free Transit visa (subclass 771), applied for online.',
      hacks: [
        'EU and UK citizens do not need to pay for an ETA: the eVisitor is free and gives the same rights. Third-party “Australia ETA” sites charge $50–150.',
        'The Working Holiday visa (417 or 462) lets 18- to 30-year-olds live and work in Australia for a year — up to 35 for citizens of the UK, Canada, France, Italy and several other countries.',
        'With a good travel history, the subclass 600 is often issued as multiple-entry for 12 months or longer. A strong financial file and past Schengen, US or UK visas improve your chances.',
        'Since late 2025, Chinese citizens holding an Australian visa can visit New Zealand visa-free with an NZeTA.',
        'Apply for the subclass 600 6–8 weeks ahead and book refundable flights: processing times are unpredictable.',
      ],
      pitfalls: [
        'Failing to declare food, seeds or wooden items means an on-the-spot fine, and lying can get your visa cancelled. When in doubt, tick “yes” on the arrival card.',
        'You may not work on an ETA, eVisitor or subclass 600. Breaking this means cancellation and usually a 3-year bar on a new visa.',
        'The ETA and eVisitor are linked to your passport number: a new passport needs a new authorisation, or you will not be allowed to board.',
      ],
      passports: {
        RU: 'Russians need the subclass 600 via ImmiAccount. The fee can only be paid with a foreign card, and processing sometimes takes from several weeks to a couple of months. Fly via Dubai, Doha or Abu Dhabi, or via Beijing and Guangzhou — 20–24 hours in total.',
        IN: 'Indian citizens apply online for the subclass 600. Since 2024 the Work and Holiday visa (462) is also open to them through a ballot.',
        CN: 'Chinese citizens apply for the subclass 600, and frequent visitors can use the Frequent Traveller stream with validity of up to 10 years. An Australian visa also lets you visit New Zealand visa-free with an NZeTA.',
        US: 'US citizens get the ETA in the app for AUD 20 — up to 3 months per visit within a year.',
        GB: 'British citizens can choose the free eVisitor or the AUD 20 ETA — the conditions are the same.',
      },
    },
    es: {
      summary:
        'Nadie, salvo los neozelandeses, entra en Australia sin autorización previa. Los ciudadanos de la UE, Reino Unido, Noruega y Suiza obtienen el eVisitor gratuito; estadounidenses, canadienses, japoneses, coreanos, singapurenses, malasios y varias nacionalidades europeas pueden comprar en su lugar la ETA en la app por 20 AUD: ambos permiten hasta 3 meses por visita durante 12 meses. El resto, incluidos rusos, indios, chinos, brasileños y mexicanos, pide en línea el visado de visitante (subclass 600).',
      apply:
        'El eVisitor es gratuito a través de ImmiAccount y suele aprobarse en uno o dos días. Para la ETA, descarga la app Australian ETA, escanea el chip del pasaporte y hazte un selfi: 20 AUD y a menudo aprobación en minutos u horas. El 600 se solicita en línea en ImmiAccount desde 200 AUD: extractos bancarios, carta de la empresa, itinerario; tarda de unos días a varias semanas y a veces piden biometría.',
      extend:
        'La ETA, el eVisitor y el 600 no se prorrogan como tales, pero desde Australia puedes pedir un nuevo 600 antes de que caduque el actual, mejor con semanas de margen. La solicitud dentro del país cuesta bastante más y la aprobación depende de tus fondos y de un motivo convincente. Comprueba que tu visado no lleve la condición 8503 «No further stay», que lo impide.',
      visaRun:
        'La ETA y el eVisitor valen 12 meses, con hasta 3 meses por entrada; al salir, la cuenta vuelve a empezar. Lo habitual es volar de Sídney a Auckland (unas 3 horas) o de Darwin y Perth a Bali. Pero si parece que vives en Australia, pueden cancelarte el visado en la frontera.',
      transit:
        'Muchas nacionalidades pueden pasar hasta 8 horas en el aeropuerto sin visado si no salen de la zona de tránsito y tienen billete de continuación confirmado. Para escalas más largas o para salir a la ciudad hace falta el visado de tránsito gratuito (subclass 771), que se pide en línea.',
      hacks: [
        'Los ciudadanos de la UE y el Reino Unido no tienen por qué pagar la ETA: el eVisitor es gratis y da los mismos derechos. Las webs de terceros de «Australia ETA» cobran 50–150 $.',
        'El visado Working Holiday (417 o 462) permite vivir y trabajar un año en Australia entre los 18 y los 30 años, y hasta los 35 para ciudadanos de Reino Unido, Canadá, Francia, Italia y otros países.',
        'Con buen historial de viajes, el 600 se concede a menudo con entradas múltiples durante 12 meses o más. Un buen expediente económico y visados anteriores de Schengen, EE. UU. o Reino Unido ayudan.',
        'Desde finales de 2025, los ciudadanos chinos con visado australiano pueden visitar Nueva Zelanda sin visado con una NZeTA.',
        'Pide el 600 con 6–8 semanas de antelación y compra vuelos reembolsables: los plazos son imprevisibles.',
      ],
      pitfalls: [
        'No declarar alimentos, semillas u objetos de madera supone una multa en el acto, y mentir puede costarte el visado. Ante la duda, marca «sí» en la tarjeta de llegada.',
        'Con la ETA, el eVisitor o el 600 no se puede trabajar. Incumplirlo significa cancelación y, por lo general, 3 años sin poder obtener otro visado.',
        'La ETA y el eVisitor van ligados al número de pasaporte: con pasaporte nuevo necesitas una autorización nueva o no te dejarán embarcar.',
      ],
      passports: {
        RU: 'Los rusos necesitan el 600 a través de ImmiAccount. La tasa solo se puede pagar con tarjeta extranjera y la tramitación a veces dura de varias semanas a un par de meses. Se vuela vía Dubái, Doha o Abu Dabi, o vía Pekín y Cantón: 20–24 horas en total.',
        IN: 'Los ciudadanos indios piden el 600 en línea. Desde 2024 también pueden optar por sorteo al visado Work and Holiday (462).',
        CN: 'Los ciudadanos chinos piden el 600, y los visitantes frecuentes pueden usar la modalidad Frequent Traveller con validez de hasta 10 años. Con visado australiano también pueden ir a Nueva Zelanda sin visado con una NZeTA.',
        US: 'Los estadounidenses obtienen la ETA en la app por 20 AUD: hasta 3 meses por visita durante un año.',
        GB: 'Los británicos pueden elegir el eVisitor gratuito o la ETA de 20 AUD: las condiciones son las mismas.',
      },
    },
    de: {
      summary:
        'Außer Neuseeländern reist niemand ohne vorherige Genehmigung nach Australien ein. Bürger der EU, Großbritanniens, Norwegens und der Schweiz bekommen den kostenlosen eVisitor; US-Amerikaner, Kanadier, Japaner, Koreaner, Singapurer, Malaysier und mehrere europäische Nationalitäten können stattdessen in der App eine ETA für 20 AUD kaufen – beide erlauben bis zu 3 Monate pro Besuch innerhalb von 12 Monaten. Alle anderen, auch Russen, Inder, Chinesen, Brasilianer und Mexikaner, beantragen online das Visitor-Visum (Subclass 600).',
      apply:
        'Der eVisitor ist über ImmiAccount kostenlos und meist innerhalb von ein, zwei Tagen genehmigt. Für die ETA lädst du die App Australian ETA, scannst den Passchip und machst ein Selfie – 20 AUD, oft in Minuten oder Stunden genehmigt. Das Subclass-600-Visum beantragst du online in ImmiAccount ab 200 AUD: Kontoauszüge, Arbeitgeberschreiben, Reiseplan; die Bearbeitung dauert einige Tage bis mehrere Wochen, manchmal werden biometrische Daten verlangt.',
      extend:
        'ETA, eVisitor und Subclass 600 lassen sich nicht direkt verlängern, aber du kannst in Australien vor Ablauf ein neues Subclass-600-Visum beantragen – am besten Wochen vorher. Der Antrag im Inland kostet deutlich mehr, und die Genehmigung hängt von deinen Mitteln und einem überzeugenden Grund ab. Prüfe, ob dein Visum die Auflage 8503 „No further stay“ trägt – dann geht es nicht.',
      visaRun:
        'ETA und eVisitor gelten 12 Monate, pro Einreise bis zu 3 Monate; nach der Ausreise beginnt die Zählung neu. Üblich sind Flüge von Sydney nach Auckland (etwa 3 Stunden) oder von Darwin und Perth nach Bali. Wirkt es aber so, als würdest du in Australien leben, kann das Visum an der Grenze annulliert werden.',
      transit:
        'Viele Nationalitäten dürfen bis zu 8 Stunden ohne Visum am Flughafen verbringen, wenn sie im Transitbereich bleiben und ein bestätigtes Weiterflugticket haben. Für längere Umstiege oder einen Ausflug in die Stadt brauchst du das kostenlose Transitvisum (Subclass 771), online zu beantragen.',
      hacks: [
        'EU- und britische Bürger müssen für keine ETA zahlen: Der eVisitor ist kostenlos und bietet dieselben Rechte. Drittseiten für „Australia ETA“ verlangen 50–150 $.',
        'Das Working-Holiday-Visum (417 oder 462) erlaubt 18- bis 30-Jährigen, ein Jahr in Australien zu leben und zu arbeiten – Bürgern Großbritanniens, Kanadas, Frankreichs, Italiens und einiger anderer Länder bis 35.',
        'Bei guter Reisehistorie wird das Subclass-600-Visum oft für mehrfache Einreise über 12 Monate oder länger erteilt. Solide Finanznachweise und frühere Schengen-, US- oder UK-Visa helfen.',
        'Seit Ende 2025 dürfen Chinesen mit australischem Visum mit einer NZeTA visumfrei nach Neuseeland reisen.',
        'Beantrage das Subclass-600-Visum 6–8 Wochen vorher und buche erstattbare Flüge: Die Bearbeitungszeiten sind unberechenbar.',
      ],
      pitfalls: [
        'Wer Lebensmittel, Samen oder Holzgegenstände nicht deklariert, zahlt sofort Bußgeld, und Lügen kann das Visum kosten. Im Zweifel auf der Einreisekarte „ja“ ankreuzen.',
        'Mit ETA, eVisitor oder Subclass 600 darfst du nicht arbeiten. Verstöße führen zur Annullierung und meist zu einer 3-jährigen Sperre für neue Visa.',
        'ETA und eVisitor sind an die Passnummer gebunden: Mit neuem Pass brauchst du eine neue Genehmigung, sonst darfst du nicht an Bord.',
      ],
      passports: {
        RU: 'Russen brauchen das Subclass-600-Visum über ImmiAccount. Die Gebühr lässt sich nur mit ausländischer Karte zahlen, und die Bearbeitung dauert manchmal mehrere Wochen bis zwei Monate. Geflogen wird über Dubai, Doha oder Abu Dhabi oder über Peking und Guangzhou – insgesamt 20–24 Stunden.',
        IN: 'Inder beantragen das Subclass-600-Visum online. Seit 2024 steht ihnen per Losverfahren auch das Work-and-Holiday-Visum (462) offen.',
        CN: 'Chinesen beantragen das Subclass-600-Visum, Vielreisende können den Frequent-Traveller-Stream mit bis zu 10 Jahren Gültigkeit nutzen. Mit australischem Visum geht es zudem per NZeTA visumfrei nach Neuseeland.',
        US: 'US-Bürger bekommen die ETA in der App für 20 AUD – bis zu 3 Monate pro Besuch innerhalb eines Jahres.',
        GB: 'Briten können den kostenlosen eVisitor oder die ETA für 20 AUD wählen – die Bedingungen sind gleich.',
      },
    },
    fr: {
      summary:
        'Personne, à part les Néo-Zélandais, n’entre en Australie sans autorisation préalable. Les citoyens de l’UE, du Royaume-Uni, de Norvège et de Suisse obtiennent l’eVisitor gratuit ; Américains, Canadiens, Japonais, Coréens, Singapouriens, Malaisiens et plusieurs nationalités européennes peuvent à la place acheter une ETA dans l’application pour 20 AUD — les deux permettent jusqu’à 3 mois par séjour sur 12 mois. Tous les autres, dont les Russes, Indiens, Chinois, Brésiliens et Mexicains, demandent en ligne le visa visiteur (subclass 600).',
      apply:
        'L’eVisitor est gratuit via ImmiAccount et généralement accordé en un ou deux jours. Pour l’ETA, téléchargez l’application Australian ETA, scannez la puce du passeport et prenez un selfie : 20 AUD, souvent accordée en quelques minutes ou heures. Le visa 600 se demande en ligne dans ImmiAccount à partir de 200 AUD : relevés bancaires, attestation d’employeur, itinéraire ; le traitement va de quelques jours à plusieurs semaines, et des données biométriques sont parfois demandées.',
      extend:
        'L’ETA, l’eVisitor et le visa 600 ne se prolongent pas en tant que tels, mais vous pouvez demander en Australie un nouveau visa 600 avant l’expiration du vôtre — idéalement des semaines à l’avance. La demande sur place coûte nettement plus cher et l’accord dépend de vos moyens et d’un motif convaincant. Vérifiez que votre visa ne porte pas la condition 8503 « No further stay », qui l’interdit.',
      visaRun:
        'L’ETA et l’eVisitor sont valables 12 mois, avec 3 mois maximum par entrée ; une sortie remet le compteur à zéro. Les classiques : Sydney–Auckland (environ 3 heures) ou Darwin et Perth vers Bali. Mais si vous semblez vivre en Australie, votre visa peut être annulé à la frontière.',
      transit:
        'De nombreuses nationalités peuvent passer jusqu’à 8 heures à l’aéroport sans visa en restant en zone de transit avec un billet de continuation confirmé. Pour une escale plus longue ou une sortie en ville, il faut le visa de transit gratuit (subclass 771), à demander en ligne.',
      hacks: [
        'Les citoyens de l’UE et du Royaume-Uni n’ont pas à payer l’ETA : l’eVisitor est gratuit et donne les mêmes droits. Les sites tiers « Australia ETA » facturent 50 à 150 $.',
        'Le visa Working Holiday (417 ou 462) permet aux 18–30 ans de vivre et travailler un an en Australie — jusqu’à 35 ans pour les ressortissants du Royaume-Uni, du Canada, de France, d’Italie et de quelques autres pays.',
        'Avec un bon historique de voyages, le visa 600 est souvent délivré à entrées multiples pour 12 mois ou plus. Un dossier financier solide et d’anciens visas Schengen, américains ou britanniques aident.',
        'Depuis fin 2025, les Chinois titulaires d’un visa australien peuvent se rendre en Nouvelle-Zélande sans visa avec une NZeTA.',
        'Demandez le visa 600 6 à 8 semaines à l’avance et prenez des vols remboursables : les délais sont imprévisibles.',
      ],
      pitfalls: [
        'Ne pas déclarer de la nourriture, des graines ou des objets en bois vaut une amende immédiate, et mentir peut coûter le visa. Dans le doute, cochez « oui » sur la carte d’arrivée.',
        'Interdiction de travailler avec une ETA, un eVisitor ou un visa 600. En cas d’infraction : annulation et, en général, 3 ans sans nouveau visa.',
        'L’ETA et l’eVisitor sont liés au numéro de passeport : avec un nouveau passeport, il faut une nouvelle autorisation, sinon pas d’embarquement.',
      ],
      passports: {
        RU: 'Les Russes ont besoin du visa 600 via ImmiAccount. Les frais ne se paient qu’avec une carte étrangère, et le traitement prend parfois de plusieurs semaines à deux mois. On vole via Dubaï, Doha ou Abou Dhabi, ou via Pékin et Canton : 20 à 24 heures au total.',
        IN: 'Les Indiens demandent le visa 600 en ligne. Depuis 2024, le visa Work and Holiday (462) leur est aussi ouvert par tirage au sort.',
        CN: 'Les Chinois demandent le visa 600, et les visiteurs fréquents peuvent utiliser le volet Frequent Traveller valable jusqu’à 10 ans. Un visa australien permet aussi d’aller en Nouvelle-Zélande sans visa avec une NZeTA.',
        US: 'Les Américains obtiennent l’ETA dans l’application pour 20 AUD : jusqu’à 3 mois par séjour sur un an.',
        GB: 'Les Britanniques peuvent choisir l’eVisitor gratuit ou l’ETA à 20 AUD : les conditions sont identiques.',
      },
    },
    it: {
      summary:
        'Nessuno, tranne i neozelandesi, entra in Australia senza un’autorizzazione preventiva. I cittadini di UE, Regno Unito, Norvegia e Svizzera ottengono l’eVisitor gratuito; statunitensi, canadesi, giapponesi, coreani, singaporiani, malesi e diverse nazionalità europee possono invece comprare l’ETA nell’app per 20 AUD: entrambi consentono fino a 3 mesi per visita nell’arco di 12 mesi. Tutti gli altri, compresi russi, indiani, cinesi, brasiliani e messicani, chiedono online il visto visitatori (subclass 600).',
      apply:
        'L’eVisitor è gratuito tramite ImmiAccount e di solito viene approvato in uno o due giorni. Per l’ETA scarica l’app Australian ETA, scansiona il chip del passaporto e fatti un selfie: 20 AUD, spesso approvata in pochi minuti o ore. Il visto 600 si chiede online su ImmiAccount da 200 AUD: estratti conto, lettera del datore di lavoro, itinerario; servono da pochi giorni a diverse settimane, e a volte vengono richiesti i dati biometrici.',
      extend:
        'ETA, eVisitor e visto 600 non si prorogano in quanto tali, ma dall’Australia puoi chiedere un nuovo visto 600 prima che scada quello attuale, meglio con settimane di anticipo. La domanda presentata nel paese costa molto di più e l’approvazione dipende dai tuoi mezzi e da un motivo convincente. Controlla che il visto non abbia la condizione 8503 «No further stay», che lo impedisce.',
      visaRun:
        'ETA ed eVisitor valgono 12 mesi, con un massimo di 3 mesi per ingresso; uscendo il conteggio riparte. Di solito si vola da Sydney ad Auckland (circa 3 ore) o da Darwin e Perth a Bali. Ma se sembra che tu viva in Australia, il visto può essere annullato alla frontiera.',
      transit:
        'Molte nazionalità possono passare fino a 8 ore in aeroporto senza visto se restano nell’area di transito e hanno un biglietto di prosecuzione confermato. Per scali più lunghi o per uscire in città serve il visto di transito gratuito (subclass 771), da chiedere online.',
      hacks: [
        'I cittadini UE e britannici non devono pagare l’ETA: l’eVisitor è gratuito e dà gli stessi diritti. I siti di terzi «Australia ETA» chiedono 50–150 $.',
        'Il visto Working Holiday (417 o 462) permette a chi ha 18–30 anni di vivere e lavorare un anno in Australia, fino a 35 anni per i cittadini di Regno Unito, Canada, Francia, Italia e alcuni altri paesi.',
        'Con una buona storia di viaggi il visto 600 viene spesso rilasciato a ingressi multipli per 12 mesi o più. Un dossier finanziario solido e visti Schengen, USA o britannici precedenti aiutano.',
        'Da fine 2025 i cittadini cinesi con visto australiano possono visitare la Nuova Zelanda senza visto con una NZeTA.',
        'Chiedi il visto 600 con 6–8 settimane di anticipo e prenota voli rimborsabili: i tempi sono imprevedibili.',
      ],
      pitfalls: [
        'Non dichiarare cibo, semi od oggetti di legno significa una multa immediata, e mentire può costarti il visto. Nel dubbio, segna «sì» sulla carta di sbarco.',
        'Con ETA, eVisitor o visto 600 non si può lavorare. Chi lo fa rischia l’annullamento e di solito 3 anni senza nuovi visti.',
        'ETA ed eVisitor sono legati al numero di passaporto: con un passaporto nuovo serve una nuova autorizzazione, altrimenti non ti imbarcano.',
      ],
      passports: {
        RU: 'Ai russi serve il visto 600 tramite ImmiAccount. La tassa si paga solo con carta estera e la procedura a volte richiede da diverse settimane a un paio di mesi. Si vola via Dubai, Doha o Abu Dhabi, oppure via Pechino e Canton: 20–24 ore in tutto.',
        IN: 'I cittadini indiani chiedono il visto 600 online. Dal 2024 possono accedere anche al visto Work and Holiday (462) tramite sorteggio.',
        CN: 'I cittadini cinesi chiedono il visto 600, e chi viaggia spesso può usare la modalità Frequent Traveller valida fino a 10 anni. Con il visto australiano si può anche andare in Nuova Zelanda senza visto con una NZeTA.',
        US: 'I cittadini statunitensi ottengono l’ETA nell’app per 20 AUD: fino a 3 mesi per visita nell’arco di un anno.',
        GB: 'I britannici possono scegliere l’eVisitor gratuito o l’ETA da 20 AUD: le condizioni sono identiche.',
      },
    },
  },
};

export default guide;
