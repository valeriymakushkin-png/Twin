import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'TZ',
  checked: '2026-10',
  fees: {
    evisa: { kind: 'from', amount: 50, currency: 'USD' },
    voa: { kind: 'from', amount: 50, currency: 'USD' },
  },
  stay: { evisa: 90, voa: 90 },
  links: { evisa: 'https://visa.immigration.go.tz', immigration: 'https://www.immigration.go.tz' },
  forms: [
    { name: 'Zanzibar Inbound Travel Insurance', url: 'https://visitzanzibar.go.tz', fee: { kind: 'fixed', amount: 44, currency: 'USD' } },
  ],
  docs: ['returnTicket', 'booking', 'yellowFever'],
  passportMonths: 6,
  visaRun: 'limited',
  borders: [
    { name: 'Namanga', to: 'KE', lat: -2.5458, lng: 36.7897 },
    { name: 'Holili – Taveta', to: 'KE', lat: -3.3756, lng: 37.6539 },
  ],
  hackScope: [null, null, ['regime:voa', 'regime:evisa'], null, null],
  pitfallScope: [['regime:voa', 'regime:evisa'], ['regime:voa', 'regime:evisa'], null],
  text: {
    ru: {
      summary:
        'Большинству туристов нужна танзанийская виза: 50 $ за однократный въезд до 90 дней (гражданам США — только многократная на год за 100 $). Её оформляют онлайн на visa.immigration.go.tz; виза по прилёте за ту же цену в крупных аэропортах и на границах сохраняется, но из-за очередей e-виза надёжнее. Для Занзибара дополнительно нужна страховка за 44 $.',
      apply:
        'Заполните анкету на visa.immigration.go.tz, загрузите паспорт, фото, обратный билет и бронь, затем дождитесь письма со ссылкой на оплату (50 $ картой). Обычно одобряют за 3–10 дней, но закладывайте две недели. Распечатайте разрешение. Если летите на Занзибар, заранее купите обязательную страховку за 44 $ на visitzanzibar.go.tz — она покрывает до 92 дней.',
      visaRun:
        'Обнулить срок не получится: виза даёт до 90 дней, а новая однократная стоит ещё 50 $. Поездка в Кению или Уганду и обратно в пределах срока визы по восточноафриканским правилам обычно не требует новой танзанийской визы, но уточните это у пограничника при выезде. Основные переходы в Кению — Наманга (между Арушей и Найроби) и Холили — Тавета у Килиманджаро.',
      hacks: [
        'Танзания не входит в Восточноафриканскую туристическую визу (Кения — Уганда — Руанда), поэтому для комбинированного маршрута нужны обе: EATV на север и танзанийская e-виза для Серенгети и Занзибара.',
        'Занзибар — часть Танзании: одна виза действует и на материке, и на островах, а на рейсах и паромах между Дар-эс-Саламом и Стоун-Тауном проверяют только паспорт.',
        'Виза по прилёте в аэропортах Килиманджаро (JRO), Дар-эс-Салама и Занзибара работает, но берите свежие целые долларовые купюры: старые и надорванные не принимают. С e-визой вы минуете эту очередь целиком.',
        'Наманга — пограничный пункт «одного окна»: выезд из Кении и въезд в Танзанию оформляют в одном здании, переход занимает 20–40 минут.',
        'Танзания проверяет сертификат о прививке от жёлтой лихорадки у прибывающих из эндемичных стран — в том числе после пересадки дольше 12 часов в Кении или Эфиопии. Если летите через Найроби или Аддис-Абебу, держите его при себе.',
      ],
      pitfalls: [
        'Сайты-посредники с похожими названиями берут вдвое больше. Государственный портал заканчивается на immigration.go.tz.',
        'Не выбирайте многократную визу, если вы не гражданин США: её выдают лишь в особых случаях, и такой выбор может задержать заявку.',
        'Забытая страховка Занзибара: без неё вас отправят покупать полис на стойке в аэропорту до паспортного контроля.',
      ],
      passports: {
        RU: 'Россиянам нужна виза (50 $). Российские карты для онлайн-оплаты не подойдут — используйте карту зарубежного банка или оформляйте визу по прилёте за наличные доллары.',
        US: 'Гражданам США выдают только многократную визу на год за 100 $ — даже для одной поездки.',
        UZ: 'Гражданам Узбекистана виза по прилёте недоступна — e-визу нужно оформить заранее.',
      },
    },
    en: {
      summary:
        'Most visitors need a Tanzanian visa: $50 for a single entry of up to 90 days (US citizens only get a one-year multiple-entry visa for $100). Apply online on visa.immigration.go.tz; a visa on arrival for the same price still exists at major airports and borders, but queues make the e-visa the safer bet. Zanzibar also requires $44 insurance.',
      apply:
        'Fill in the form on visa.immigration.go.tz, upload your passport, a photo, a return ticket and a booking, then wait for an email with a payment link ($50 by card). Most grants come within 3–10 days, but allow two weeks, and print the grant notice. Flying to Zanzibar? Buy the mandatory $44 insurance on visitzanzibar.go.tz beforehand — it covers up to 92 days.',
      visaRun:
        'There’s no reset: the visa allows up to 90 days, and a new single-entry visa costs another $50. A trip to Kenya or Uganda and back within your visa’s validity usually doesn’t need a new Tanzanian visa under East African rules, but confirm with the officer on the way out. The main crossings to Kenya are Namanga (between Arusha and Nairobi) and Holili – Taveta near Kilimanjaro.',
      hacks: [
        'Tanzania isn’t covered by the East Africa Tourist Visa (Kenya–Uganda–Rwanda), so a combined trip needs both: the EATV for the north and a Tanzanian e-visa for the Serengeti and Zanzibar.',
        'Zanzibar is part of Tanzania: one visa covers the mainland and the islands, and flights or ferries between Dar es Salaam and Stone Town only involve a passport check.',
        'Visa on arrival at Kilimanjaro (JRO), Dar es Salaam and Zanzibar airports works, but bring recent, undamaged US dollar notes — old or torn ones are refused. With an e-visa you skip that queue entirely.',
        'Namanga is a one-stop border post: Kenyan exit and Tanzanian entry are handled in the same building, so the crossing takes 20–40 minutes.',
        'Tanzania checks yellow fever certificates for arrivals from endemic countries — including transits of more than 12 hours in Kenya or Ethiopia. If you fly via Nairobi or Addis Ababa, keep it on you.',
      ],
      pitfalls: [
        'Agency sites with official-sounding names charge double. The government portal ends in immigration.go.tz.',
        'Don’t pick a multiple-entry visa unless you’re a US citizen: it’s only issued in special cases, and choosing it can delay your application.',
        'Forgetting the Zanzibar insurance: without it you’ll be sent to buy a policy at the airport desk before immigration.',
      ],
      passports: {
        RU: 'Russian citizens need the visa ($50). Russian cards won’t work for the online payment — use a card from a foreign bank or get the visa on arrival with cash dollars.',
        US: 'US citizens are only issued the one-year multiple-entry visa for $100, even for a single trip.',
        UZ: 'Uzbek citizens can’t get a visa on arrival — apply for the e-visa in advance.',
      },
    },
    es: {
      summary:
        'La mayoría de los visitantes necesita visado tanzano: 50 $ por una entrada de hasta 90 días (los ciudadanos de EE. UU. solo reciben uno de entradas múltiples por un año, a 100 $). Se pide en línea en visa.immigration.go.tz; el visado a la llegada al mismo precio sigue existiendo en los grandes aeropuertos y fronteras, pero por las colas es más seguro el electrónico. Zanzíbar exige además un seguro de 44 $.',
      apply:
        'Rellena el formulario en visa.immigration.go.tz, sube el pasaporte, una foto, el billete de vuelta y una reserva, y espera el correo con el enlace de pago (50 $ con tarjeta). Casi siempre se concede en 3–10 días, pero cuenta con dos semanas, e imprime la aprobación. ¿Vas a Zanzíbar? Compra antes el seguro obligatorio de 44 $ en visitzanzibar.go.tz: cubre hasta 92 días.',
      visaRun:
        'No hay forma de reiniciar el plazo: el visado da hasta 90 días y uno nuevo de una entrada cuesta otros 50 $. Ir a Kenia o Uganda y volver dentro de la vigencia del visado no suele exigir otro visado tanzano según las normas de África Oriental, pero confírmalo con el agente al salir. Los pasos principales hacia Kenia son Namanga (entre Arusha y Nairobi) y Holili – Taveta, junto al Kilimanjaro.',
      hacks: [
        'Tanzania no entra en el visado turístico de África Oriental (Kenia–Uganda–Ruanda), así que un viaje combinado necesita los dos: el EATV para el norte y el visado electrónico tanzano para el Serengueti y Zanzíbar.',
        'Zanzíbar forma parte de Tanzania: un solo visado vale para el continente y las islas, y en vuelos y ferris entre Dar es Salaam y Stone Town solo te miran el pasaporte.',
        'El visado a la llegada en los aeropuertos de Kilimanjaro (JRO), Dar es Salaam y Zanzíbar funciona, pero lleva billetes de dólar recientes y en buen estado: los viejos o rotos se rechazan. Con el visado electrónico te ahorras esa cola.',
        'Namanga es un puesto fronterizo de ventanilla única: la salida de Kenia y la entrada en Tanzania se hacen en el mismo edificio, en 20–40 minutos.',
        'Tanzania pide el certificado de la fiebre amarilla a quien llega de países endémicos, incluidas escalas de más de 12 horas en Kenia o Etiopía. Si vuelas vía Nairobi o Adís Abeba, llévalo encima.',
      ],
      pitfalls: [
        'Las webs de agencias con nombres de aspecto oficial cobran el doble. El portal del Gobierno termina en immigration.go.tz.',
        'No elijas el visado de entradas múltiples si no eres ciudadano de EE. UU.: solo se concede en casos especiales y puede retrasar la solicitud.',
        'Olvidar el seguro de Zanzíbar: sin él te mandarán a comprarlo en el mostrador del aeropuerto antes del control de pasaportes.',
      ],
      passports: {
        RU: 'Los ciudadanos rusos necesitan el visado (50 $). Las tarjetas rusas no sirven para el pago en línea: usa la de un banco extranjero o saca el visado a la llegada con dólares en efectivo.',
        US: 'A los ciudadanos estadounidenses solo se les concede el visado de entradas múltiples de un año por 100 $, aunque hagan un único viaje.',
        UZ: 'Los ciudadanos uzbekos no pueden obtener visado a la llegada: pide el electrónico con antelación.',
      },
    },
    de: {
      summary:
        'Die meisten Reisenden brauchen ein tansanisches Visum: 50 $ für eine Einreise bis 90 Tage (US-Bürger bekommen nur ein Jahresvisum für mehrfache Einreise für 100 $). Beantragt wird online auf visa.immigration.go.tz; das Visum bei Ankunft zum gleichen Preis gibt es an großen Flughäfen und Grenzen weiterhin, wegen der Schlangen ist das E-Visum aber sicherer. Für Sansibar kommt eine Versicherung für 44 $ dazu.',
      apply:
        'Fülle das Formular auf visa.immigration.go.tz aus, lade Pass, Foto, Rückflugticket und Buchung hoch und warte auf die E-Mail mit dem Zahlungslink (50 $ per Karte). Meist kommt die Genehmigung in 3–10 Tagen, plane aber zwei Wochen ein und drucke sie aus. Für Sansibar kaufst du vorab die Pflichtversicherung für 44 $ auf visitzanzibar.go.tz – sie gilt bis zu 92 Tage.',
      visaRun:
        'Zurücksetzen lässt sich nichts: Das Visum erlaubt bis zu 90 Tage, ein neues für eine Einreise kostet wieder 50 $. Ein Abstecher nach Kenia oder Uganda innerhalb der Visumsgültigkeit braucht nach ostafrikanischen Regeln meist kein neues tansanisches Visum – frag bei der Ausreise trotzdem nach. Die wichtigsten Übergänge nach Kenia sind Namanga (zwischen Arusha und Nairobi) und Holili – Taveta am Kilimandscharo.',
      hacks: [
        'Tansania gehört nicht zum East Africa Tourist Visa (Kenia–Uganda–Ruanda), für eine kombinierte Reise brauchst du also beides: das EATV für den Norden und ein tansanisches E-Visum für Serengeti und Sansibar.',
        'Sansibar ist Teil Tansanias: Ein Visum gilt für Festland und Inseln, auf Flügen und Fähren zwischen Daressalam und Stone Town wird nur der Pass kontrolliert.',
        'Das Visum bei Ankunft an den Flughäfen Kilimandscharo (JRO), Daressalam und Sansibar funktioniert, aber nimm neuere, unbeschädigte Dollarscheine mit – alte oder eingerissene werden abgelehnt. Mit E-Visum sparst du dir diese Schlange.',
        'Namanga ist ein One-Stop-Grenzposten: Ausreise aus Kenia und Einreise nach Tansania laufen im selben Gebäude, der Übergang dauert 20–40 Minuten.',
        'Tansania kontrolliert den Gelbfieber-Nachweis bei Ankunft aus Endemiegebieten – auch nach mehr als 12 Stunden Umstieg in Kenia oder Äthiopien. Wer über Nairobi oder Addis Abeba fliegt, sollte ihn dabeihaben.',
      ],
      pitfalls: [
        'Agenturseiten mit amtlich klingenden Namen verlangen das Doppelte. Das Regierungsportal endet auf immigration.go.tz.',
        'Wähle kein Visum für mehrfache Einreise, wenn du kein US-Bürger bist: Es wird nur in Sonderfällen erteilt und kann den Antrag verzögern.',
        'Sansibar-Versicherung vergessen: Ohne sie wirst du vor der Passkontrolle zum Schalter am Flughafen geschickt, um sie zu kaufen.',
      ],
      passports: {
        RU: 'Russische Staatsangehörige brauchen das Visum (50 $). Russische Karten funktionieren bei der Online-Zahlung nicht – nutze die Karte einer ausländischen Bank oder hol dir das Visum bei Ankunft gegen Dollar in bar.',
        US: 'US-Bürger erhalten nur das einjährige Visum für mehrfache Einreise für 100 $, auch für eine einzige Reise.',
        UZ: 'Usbekische Staatsangehörige bekommen kein Visum bei Ankunft – beantrage das E-Visum vorab.',
      },
    },
    fr: {
      summary:
        'La plupart des visiteurs ont besoin d’un visa tanzanien : 50 $ pour une entrée unique jusqu’à 90 jours (les citoyens américains n’obtiennent qu’un visa à entrées multiples d’un an à 100 $). La demande se fait en ligne sur visa.immigration.go.tz ; le visa à l’arrivée au même prix existe toujours dans les grands aéroports et aux frontières, mais à cause des files d’attente l’e-visa est plus sûr. Zanzibar exige en plus une assurance à 44 $.',
      apply:
        'Remplissez le formulaire sur visa.immigration.go.tz, téléchargez passeport, photo, billet retour et réservation, puis attendez l’e-mail avec le lien de paiement (50 $ par carte). L’accord arrive en général sous 3 à 10 jours, mais prévoyez deux semaines et imprimez-le. Pour Zanzibar, achetez à l’avance l’assurance obligatoire à 44 $ sur visitzanzibar.go.tz : elle couvre jusqu’à 92 jours.',
      visaRun:
        'Impossible de remettre le compteur à zéro : le visa autorise 90 jours maximum et un nouveau visa simple coûte encore 50 $. Un aller-retour au Kenya ou en Ouganda pendant la validité du visa ne demande en général pas de nouveau visa tanzanien selon les règles est-africaines, mais vérifiez auprès de l’agent à la sortie. Les principaux postes vers le Kenya sont Namanga (entre Arusha et Nairobi) et Holili – Taveta, près du Kilimandjaro.',
      hacks: [
        'La Tanzanie ne fait pas partie du visa touristique d’Afrique de l’Est (Kenya–Ouganda–Rwanda) : un voyage combiné demande donc les deux, l’EATV pour le nord et l’e-visa tanzanien pour le Serengeti et Zanzibar.',
        'Zanzibar fait partie de la Tanzanie : un seul visa couvre le continent et les îles, et les vols ou ferries entre Dar es Salaam et Stone Town ne donnent lieu qu’à un contrôle du passeport.',
        'Le visa à l’arrivée aux aéroports du Kilimandjaro (JRO), de Dar es Salaam et de Zanzibar fonctionne, mais prévoyez des billets en dollars récents et en bon état : les vieux ou déchirés sont refusés. Avec l’e-visa, vous évitez cette file.',
        'Namanga est un poste frontière à guichet unique : sortie du Kenya et entrée en Tanzanie se font dans le même bâtiment, en 20 à 40 minutes.',
        'La Tanzanie contrôle le certificat de fièvre jaune pour les arrivées depuis un pays d’endémie, y compris après un transit de plus de 12 heures au Kenya ou en Éthiopie. Si vous passez par Nairobi ou Addis-Abeba, gardez-le sur vous.',
      ],
      pitfalls: [
        'Des sites d’agences aux noms d’allure officielle facturent le double. Le portail gouvernemental se termine par immigration.go.tz.',
        'Ne choisissez pas le visa à entrées multiples si vous n’êtes pas citoyen américain : il n’est délivré que dans des cas particuliers et peut retarder la demande.',
        'Oublier l’assurance de Zanzibar : sans elle, on vous envoie l’acheter au comptoir de l’aéroport avant le contrôle des passeports.',
      ],
      passports: {
        RU: 'Les ressortissants russes ont besoin du visa (50 $). Les cartes russes ne passent pas pour le paiement en ligne : utilisez la carte d’une banque étrangère ou prenez le visa à l’arrivée en dollars.',
        US: 'Les citoyens américains ne reçoivent que le visa d’un an à entrées multiples à 100 $, même pour un seul voyage.',
        UZ: 'Les ressortissants ouzbeks ne peuvent pas obtenir de visa à l’arrivée : demandez l’e-visa à l’avance.',
      },
    },
    it: {
      summary:
        'La maggior parte dei visitatori ha bisogno del visto tanzaniano: 50 $ per un ingresso singolo fino a 90 giorni (i cittadini statunitensi ottengono solo un visto a ingressi multipli di un anno da 100 $). Si chiede online su visa.immigration.go.tz; il visto all’arrivo allo stesso prezzo esiste ancora nei grandi aeroporti e alle frontiere, ma per le code conviene quello elettronico. Zanzibar richiede in più un’assicurazione da 44 $.',
      apply:
        'Compila il modulo su visa.immigration.go.tz, carica passaporto, foto, biglietto di ritorno e prenotazione, poi aspetta l’e-mail con il link di pagamento (50 $ con carta). Di solito l’approvazione arriva in 3–10 giorni, ma calcola due settimane e stampala. Se vai a Zanzibar, compra prima l’assicurazione obbligatoria da 44 $ su visitzanzibar.go.tz: copre fino a 92 giorni.',
      visaRun:
        'Non c’è modo di azzerare il conteggio: il visto dà fino a 90 giorni e uno nuovo a ingresso singolo costa altri 50 $. Andare in Kenya o in Uganda e tornare entro la validità del visto di solito non richiede un nuovo visto tanzaniano secondo le regole dell’Africa orientale, ma chiedi conferma all’agente all’uscita. I valichi principali verso il Kenya sono Namanga (tra Arusha e Nairobi) e Holili – Taveta, vicino al Kilimangiaro.',
      hacks: [
        'La Tanzania non rientra nel visto turistico dell’Africa orientale (Kenya–Uganda–Ruanda), quindi per un viaggio combinato servono entrambi: l’EATV per il nord e il visto elettronico tanzaniano per Serengeti e Zanzibar.',
        'Zanzibar fa parte della Tanzania: un solo visto vale per continente e isole, e su voli e traghetti tra Dar es Salaam e Stone Town c’è solo un controllo del passaporto.',
        'Il visto all’arrivo negli aeroporti di Kilimangiaro (JRO), Dar es Salaam e Zanzibar funziona, ma porta banconote in dollari recenti e integre: quelle vecchie o strappate vengono rifiutate. Con il visto elettronico salti la coda.',
        'Namanga è un posto di frontiera a sportello unico: uscita dal Kenya e ingresso in Tanzania avvengono nello stesso edificio, in 20–40 minuti.',
        'La Tanzania controlla il certificato della febbre gialla a chi arriva da paesi endemici, anche dopo scali di oltre 12 ore in Kenya o in Etiopia. Se voli via Nairobi o Addis Abeba, tienilo con te.',
      ],
      pitfalls: [
        'I siti di agenzie con nomi dall’aria ufficiale fanno pagare il doppio. Il portale governativo finisce in immigration.go.tz.',
        'Non scegliere il visto a ingressi multipli se non sei cittadino statunitense: viene rilasciato solo in casi particolari e può rallentare la domanda.',
        'Dimenticare l’assicurazione di Zanzibar: senza ti mandano a comprarla al banco dell’aeroporto prima del controllo passaporti.',
      ],
      passports: {
        RU: 'I cittadini russi hanno bisogno del visto (50 $). Le carte russe non funzionano per il pagamento online: usa la carta di una banca estera o fai il visto all’arrivo in dollari contanti.',
        US: 'Ai cittadini statunitensi viene rilasciato solo il visto annuale a ingressi multipli da 100 $, anche per un unico viaggio.',
        UZ: 'I cittadini uzbeki non possono ottenere il visto all’arrivo: chiedi quello elettronico in anticipo.',
      },
    },
  },
};

export default guide;
