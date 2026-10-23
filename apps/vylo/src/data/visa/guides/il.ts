import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'IL',
  checked: '2026-10',
  fees: { eta: { kind: 'fixed', amount: 25, currency: 'ILS' } },
  stay: { eta: 90 },
  links: {
    eta: 'https://israel-entry.piba.gov.il',
    immigration: 'https://www.gov.il/en/departments/population_and_immigration_authority',
  },
  forms: [{ name: 'ETA-IL', url: 'https://israel-entry.piba.gov.il', fee: { kind: 'fixed', amount: 25, currency: 'ILS' } }],
  docs: ['returnTicket', 'booking'],
  passportMonths: 6,
  extend: {},
  visaRun: 'limited',
  borders: [
    { name: 'Taba', to: 'EG', lat: 29.4905, lng: 34.9037 },
    { name: 'Yitzhak Rabin – Wadi Araba (Eilat – Aqaba)', to: 'JO', lat: 29.5738, lng: 34.9767 },
    { name: 'Jordan River – Sheikh Hussein', to: 'JO', lat: 32.4975, lng: 35.5735 },
  ],
  text: {
    ru: {
      summary:
        'Граждане примерно сотни стран, включая Россию, Украину, Беларусь, Грузию, ЕС, Великобританию, США, Канаду, Австралию, Японию и Корею, въезжают без визы на срок до 90 дней, но с 1 января 2025 года обязаны заранее получить электронное разрешение ETA-IL. Гражданам Индии, Китая, Турции, Казахстана, Узбекистана, Армении и других стран нужна виза — для многих её подают онлайн.',
      apply:
        'ETA-IL оформляют только на israel-entry.piba.gov.il: анкета, фото паспорта, сбор 25 шекелей. Ответ обычно приходит за сутки, но подавать советуют не позднее чем за 72 часа до бронирования билетов. Разрешение действует два года (или до окончания паспорта) на многократные въезды по 90 дней. Окончательное решение всё равно принимает пограничник в аэропорту.',
      extend:
        'Продление туристического пребывания (B/2) возможно в отделениях Управления по делам населения и иммиграции, но оно на усмотрение чиновников: нужны запись, причина, билет и доказательство средств. Подавайте заранее, до окончания срока.',
      visaRun:
        'Выезд в Египет через Табу или в Иорданию через переходы Ицхак Рабин и Шейх-Хусейн формально даёт новые 90 дней, но пограничник решает сам и при частых визаранах может дать меньше или отказать во въезде. Запаситесь билетом на выезд и бронью.',
      hacks: [
        'Израиль не ставит штамп в паспорт, а выдаёт синий въездной талон. Храните его до выезда: с ним туристы не платят 18% НДС в отелях и могут подтвердить законное пребывание.',
        'Из Эйлата через переход Таба можно попасть в египетский Синай по бесплатному штампу на 15 дней: Дахаб, Нувейба и монастырь Святой Екатерины без египетской визы.',
        'В Иорданию лучше ехать через переходы Ицхак Рабин или Шейх-Хусейн — там дают иорданскую визу по прилёте и принимают Jordan Pass. На мосту Алленби визу не выдают.',
        'Выезд по суше платный: около 110 шекелей на переходах Ицхак Рабин и Шейх-Хусейн и около 200 на мосту Алленби. Оплатить можно заранее онлайн — так быстрее на границе.',
      ],
      pitfalls: [
        'В аэропорту Бен-Гурион часто проводят подробное собеседование, особенно при штампах Ирана, Ливана, Сирии, Пакистана и ряда других стран. Держите бронь, маршрут и обратный билет под рукой и отвечайте спокойно и последовательно.',
        'Сайты-посредники берут за ETA-IL 50–100 $ вместо 25 шекелей. Официальный адрес — только на gov.il.',
        'После войны с Ираном 2026 года многие иностранные авиакомпании летают в Израиль нерегулярно, а переходы с Иорданией и Египтом могут закрываться без предупреждения. Проверяйте рейсы и статус границ накануне.',
      ],
      passports: {
        RU: 'Россияне въезжают без визы на 90 дней, но с 2025 года обязательно нужна ETA-IL — без неё не посадят на рейс. Оплатить сбор российской картой нельзя, понадобится зарубежная. Российские карты в Израиле не работают.',
        UA: 'Граждане Украины въезжают без визы до 90 дней при наличии ETA-IL. На границе нередко уточняют цель поездки и наличие родственников.',
        KZ: 'В январе 2026 года Израиль и Казахстан подписали меморандум о безвизовом режиме, но на момент проверки он ещё не вступил в силу — до этого нужна виза.',
        US: 'Граждане США с 2023 года участвуют в программе безвизового въезда США и Израиля и тоже оформляют ETA-IL.',
        IN: 'Гражданам Индии и Китая нужна туристическая виза: подайте онлайн-заявку через портал израильского правительства или в консульство за несколько недель до поездки.',
      },
    },
    en: {
      summary:
        'Citizens of about a hundred countries, including Russia, Ukraine, Belarus, Georgia, the EU, the UK, the US, Canada, Australia, Japan and Korea, enter visa-free for up to 90 days, but since 1 January 2025 they must obtain an ETA-IL electronic authorisation in advance. Citizens of India, China, Turkey, Kazakhstan, Uzbekistan, Armenia and other countries need a visa, which many can apply for online.',
      apply:
        'Apply for the ETA-IL only on israel-entry.piba.gov.il: form, passport photo and a 25 ILS fee. The answer usually comes within a day, but you are advised to apply at least 72 hours before booking flights. It is valid for two years (or until your passport expires) for multiple stays of up to 90 days. The border officer at the airport still has the final say.',
      extend:
        'Tourist stays (B/2) can be extended at Population and Immigration Authority offices, but it is at the officials’ discretion: you need an appointment, a reason, a ticket and proof of funds. Apply well before your stay ends.',
      visaRun:
        'Leaving for Egypt via Taba or for Jordan via the Yitzhak Rabin or Sheikh Hussein crossings technically gives you a new 90 days, but the officer decides, and after frequent runs may grant less or refuse entry. Carry an exit ticket and a booking.',
      hacks: [
        'Israel does not stamp passports; it issues a blue entry slip instead. Keep it until you leave: with it, tourists are exempt from the 18% VAT at hotels and can prove they are in the country legally.',
        'From Eilat, the Taba crossing takes you into Egypt’s Sinai on a free 15-day stamp: Dahab, Nuweiba and St Catherine’s Monastery without an Egyptian visa.',
        'For Jordan, use the Yitzhak Rabin or Sheikh Hussein crossings — they issue Jordanian visas on arrival and accept the Jordan Pass. The Allenby Bridge does not issue visas.',
        'Leaving by land costs money: about 110 ILS at Yitzhak Rabin and Sheikh Hussein and about 200 ILS at Allenby. You can pay online in advance, which speeds things up at the border.',
      ],
      pitfalls: [
        'Ben Gurion airport often conducts detailed interviews, especially with stamps from Iran, Lebanon, Syria, Pakistan and some other countries. Keep your booking, itinerary and return ticket at hand and answer calmly and consistently.',
        'Agency sites charge $50–100 for the ETA-IL instead of 25 ILS. The only official address is on gov.il.',
        'Since the 2026 war with Iran, many foreign airlines fly to Israel irregularly, and the crossings with Jordan and Egypt can close without notice. Check flights and border status the day before.',
      ],
      passports: {
        RU: 'Russian citizens enter visa-free for 90 days, but since 2025 the ETA-IL is mandatory — you will not be allowed to board without it. You cannot pay the fee with a Russian card, so you need a foreign one. Russian bank cards do not work in Israel.',
        UA: 'Ukrainian citizens enter visa-free for up to 90 days with an ETA-IL. Officers often ask about the purpose of the trip and any relatives.',
        KZ: 'Israel and Kazakhstan signed a visa-waiver memorandum in January 2026, but at the time of checking it had not yet entered into force; until then a visa is required.',
        US: 'US citizens have been part of the US–Israel visa waiver programme since 2023 and also file the ETA-IL.',
        IN: 'Indian and Chinese citizens need a tourist visa: apply online through the Israeli government portal or at the consulate a few weeks before the trip.',
      },
    },
    es: {
      summary:
        'Los ciudadanos de un centenar de países, entre ellos Rusia, Ucrania, Bielorrusia, Georgia, la UE, Reino Unido, EE. UU., Canadá, Australia, Japón y Corea, entran sin visado hasta 90 días, pero desde el 1 de enero de 2025 deben obtener antes la autorización electrónica ETA-IL. Los ciudadanos de India, China, Turquía, Kazajistán, Uzbekistán, Armenia y otros países necesitan visado, que muchos pueden solicitar en línea.',
      apply:
        'Solicita la ETA-IL solo en israel-entry.piba.gov.il: formulario, foto del pasaporte y tasa de 25 ILS. La respuesta suele llegar en un día, pero se recomienda pedirla al menos 72 horas antes de comprar los vuelos. Vale dos años (o hasta que caduque el pasaporte) para varias estancias de hasta 90 días. La última palabra la sigue teniendo el agente de fronteras del aeropuerto.',
      extend:
        'La estancia turística (B/2) se puede prorrogar en las oficinas de la Autoridad de Población e Inmigración, pero queda a criterio de los funcionarios: necesitas cita, un motivo, billete y medios económicos. Solicítala con margen antes de que venza.',
      visaRun:
        'Salir a Egipto por Taba o a Jordania por los pasos de Yitzhak Rabin o Sheikh Hussein te da en teoría 90 días nuevos, pero decide el agente, y tras salidas frecuentes puede darte menos o denegar la entrada. Lleva billete de salida y reserva.',
      hacks: [
        'Israel no sella el pasaporte, sino que entrega una tarjeta de entrada azul. Guárdala hasta salir: con ella los turistas no pagan el 18 % de IVA en los hoteles y pueden demostrar que están en el país legalmente.',
        'Desde Eilat, el paso de Taba te lleva al Sinaí egipcio con un sello gratuito de 15 días: Dahab, Nuweiba y el monasterio de Santa Catalina sin visado egipcio.',
        'Para ir a Jordania, usa los pasos de Yitzhak Rabin o Sheikh Hussein: dan visado jordano a la llegada y aceptan el Jordan Pass. En el puente Allenby no se expiden visados.',
        'Salir por tierra cuesta dinero: unos 110 ILS en Yitzhak Rabin y Sheikh Hussein y unos 200 en Allenby. Puedes pagar antes en línea y ganar tiempo en la frontera.',
      ],
      pitfalls: [
        'En el aeropuerto Ben Gurión suelen hacer entrevistas detalladas, sobre todo si llevas sellos de Irán, Líbano, Siria, Pakistán y algunos otros países. Ten a mano la reserva, el itinerario y el billete de vuelta y responde con calma y coherencia.',
        'Las webs intermediarias cobran 50–100 $ por la ETA-IL en lugar de 25 ILS. La única dirección oficial está en gov.il.',
        'Desde la guerra con Irán de 2026, muchas aerolíneas extranjeras vuelan a Israel de forma irregular, y los pasos con Jordania y Egipto pueden cerrar sin aviso. Comprueba vuelos y fronteras el día anterior.',
      ],
      passports: {
        RU: 'Los ciudadanos rusos entran sin visado 90 días, pero desde 2025 la ETA-IL es obligatoria: sin ella no te dejarán embarcar. No se puede pagar la tasa con tarjeta rusa, así que necesitas una extranjera. Las tarjetas rusas no funcionan en Israel.',
        UA: 'Los ciudadanos ucranianos entran sin visado hasta 90 días con la ETA-IL. En la frontera suelen preguntar por el motivo del viaje y por familiares.',
        KZ: 'Israel y Kazajistán firmaron en enero de 2026 un memorando de exención de visados, pero al revisarlo aún no había entrado en vigor; hasta entonces se necesita visado.',
        US: 'Los ciudadanos estadounidenses forman parte del programa de exención de visados entre EE. UU. e Israel desde 2023 y también tramitan la ETA-IL.',
        IN: 'Los ciudadanos de India y China necesitan visado de turista: solicítalo en línea en el portal del Gobierno israelí o en el consulado unas semanas antes del viaje.',
      },
    },
    de: {
      summary:
        'Staatsangehörige von rund hundert Ländern, darunter Russland, die Ukraine, Belarus, Georgien, die EU, Großbritannien, die USA, Kanada, Australien, Japan und Korea, reisen bis zu 90 Tage visumfrei ein, müssen seit dem 1. Januar 2025 aber vorab die elektronische Genehmigung ETA-IL einholen. Staatsangehörige Indiens, Chinas, der Türkei, Kasachstans, Usbekistans, Armeniens und weiterer Länder brauchen ein Visum, das viele online beantragen können.',
      apply:
        'Beantrage die ETA-IL nur auf israel-entry.piba.gov.il: Formular, Passfoto und 25 ILS Gebühr. Die Antwort kommt meist innerhalb eines Tages, empfohlen wird aber, mindestens 72 Stunden vor der Flugbuchung zu beantragen. Sie gilt zwei Jahre (oder bis zum Ablauf des Passes) für mehrere Aufenthalte von bis zu 90 Tagen. Das letzte Wort hat trotzdem der Grenzbeamte am Flughafen.',
      extend:
        'Touristische Aufenthalte (B/2) lassen sich bei der Bevölkerungs- und Einwanderungsbehörde verlängern, das liegt aber im Ermessen der Beamten: Nötig sind Termin, Begründung, Ticket und Finanznachweis. Beantrage rechtzeitig vor Ablauf.',
      visaRun:
        'Eine Ausreise nach Ägypten über Taba oder nach Jordanien über die Übergänge Jitzchak Rabin oder Scheich Hussein bringt formal neue 90 Tage, der Beamte entscheidet aber selbst und kann nach häufigen Runs weniger geben oder die Einreise verweigern. Hab ein Ausreiseticket und eine Buchung dabei.',
      hacks: [
        'Israel stempelt keine Pässe, sondern gibt einen blauen Einreisezettel aus. Bewahr ihn bis zur Ausreise auf: Damit sind Touristen in Hotels von 18 % Mehrwertsteuer befreit und können ihren legalen Aufenthalt belegen.',
        'Von Eilat aus kommst du über den Übergang Taba mit einem kostenlosen 15-Tage-Stempel in den ägyptischen Sinai: Dahab, Nuweiba und das Katharinenkloster ohne ägyptisches Visum.',
        'Nach Jordanien fährst du am besten über Jitzchak Rabin oder Scheich Hussein – dort gibt es jordanische Visa bei Ankunft und der Jordan Pass wird akzeptiert. An der Allenby-Brücke werden keine Visa ausgestellt.',
        'Die Ausreise über Land kostet: etwa 110 ILS an Jitzchak Rabin und Scheich Hussein und etwa 200 ILS an der Allenby-Brücke. Du kannst vorab online zahlen, das spart an der Grenze Zeit.',
      ],
      pitfalls: [
        'Am Flughafen Ben Gurion gibt es oft ausführliche Befragungen, besonders bei Stempeln aus dem Iran, Libanon, Syrien, Pakistan und einigen anderen Ländern. Hab Buchung, Reiseplan und Rückflugticket griffbereit und antworte ruhig und stimmig.',
        'Vermittlerseiten verlangen für die ETA-IL 50–100 $ statt 25 ILS. Die einzige offizielle Adresse liegt auf gov.il.',
        'Seit dem Iran-Krieg 2026 fliegen viele ausländische Airlines nur unregelmäßig nach Israel, und die Übergänge nach Jordanien und Ägypten können ohne Vorwarnung schließen. Prüf Flüge und Grenzstatus am Vortag.',
      ],
      passports: {
        RU: 'Russische Staatsangehörige reisen 90 Tage visumfrei ein, seit 2025 ist die ETA-IL aber Pflicht – ohne sie darfst du nicht an Bord. Die Gebühr lässt sich nicht mit einer russischen Karte zahlen, du brauchst eine ausländische. Russische Bankkarten funktionieren in Israel nicht.',
        UA: 'Ukrainische Staatsangehörige reisen mit ETA-IL bis zu 90 Tage visumfrei ein. An der Grenze wird oft nach Reisezweck und Verwandten gefragt.',
        KZ: 'Israel und Kasachstan haben im Januar 2026 ein Memorandum zur Visumfreiheit unterzeichnet, das zum Prüfzeitpunkt aber noch nicht in Kraft war; bis dahin ist ein Visum nötig.',
        US: 'US-Bürger sind seit 2023 Teil des Visa-Waiver-Programms zwischen den USA und Israel und beantragen ebenfalls die ETA-IL.',
        IN: 'Indische und chinesische Staatsangehörige brauchen ein Touristenvisum: Beantrage es einige Wochen vor der Reise online über das Portal der israelischen Regierung oder beim Konsulat.',
      },
    },
    fr: {
      summary:
        'Les ressortissants d’une centaine de pays, dont la Russie, l’Ukraine, le Bélarus, la Géorgie, l’UE, le Royaume-Uni, les États-Unis, le Canada, l’Australie, le Japon et la Corée, entrent sans visa jusqu’à 90 jours, mais doivent obtenir à l’avance l’autorisation électronique ETA-IL depuis le 1er janvier 2025. Les ressortissants de l’Inde, de la Chine, de la Turquie, du Kazakhstan, de l’Ouzbékistan, de l’Arménie et d’autres pays ont besoin d’un visa, souvent demandé en ligne.',
      apply:
        'Demandez l’ETA-IL uniquement sur israel-entry.piba.gov.il : formulaire, photo du passeport et frais de 25 ILS. La réponse arrive en général sous 24 heures, mais il est conseillé de la demander au moins 72 heures avant de réserver les vols. Elle est valable deux ans (ou jusqu’à l’expiration du passeport) pour plusieurs séjours de 90 jours maximum. Le dernier mot revient toujours au policier aux frontières.',
      extend:
        'Le séjour touristique (B/2) peut être prolongé dans les bureaux de l’Autorité de la population et de l’immigration, mais à la discrétion des agents : il faut un rendez-vous, un motif, un billet et des justificatifs de ressources. Faites la demande bien avant la fin du séjour.',
      visaRun:
        'Une sortie vers l’Égypte par Taba ou vers la Jordanie par les postes Yitzhak Rabin ou Cheikh Hussein donne en théorie 90 nouveaux jours, mais l’agent décide et peut, après des allers-retours fréquents, accorder moins ou refuser l’entrée. Ayez un billet de sortie et une réservation.',
      hacks: [
        'Israël ne tamponne pas les passeports et remet à la place un feuillet d’entrée bleu. Gardez-le jusqu’au départ : il exonère les touristes de la TVA de 18 % à l’hôtel et prouve la régularité du séjour.',
        'Depuis Eilat, le poste de Taba permet d’entrer dans le Sinaï égyptien avec un tampon gratuit de 15 jours : Dahab, Nuweiba et le monastère Sainte-Catherine sans visa égyptien.',
        'Pour la Jordanie, passez par Yitzhak Rabin ou Cheikh Hussein : on y délivre le visa jordanien à l’arrivée et le Jordan Pass est accepté. Le pont Allenby ne délivre pas de visa.',
        'La sortie par voie terrestre est payante : environ 110 ILS à Yitzhak Rabin et Cheikh Hussein, environ 200 ILS à Allenby. Le paiement en ligne à l’avance fait gagner du temps à la frontière.',
      ],
      pitfalls: [
        'À l’aéroport Ben Gourion, les entretiens sont souvent approfondis, surtout avec des tampons d’Iran, du Liban, de Syrie, du Pakistan et de quelques autres pays. Gardez réservation, itinéraire et billet retour à portée de main et répondez calmement et de façon cohérente.',
        'Les sites intermédiaires facturent l’ETA-IL 50 à 100 $ au lieu de 25 ILS. La seule adresse officielle se trouve sur gov.il.',
        'Depuis la guerre de 2026 avec l’Iran, de nombreuses compagnies étrangères desservent Israël de façon irrégulière, et les postes avec la Jordanie et l’Égypte peuvent fermer sans préavis. Vérifiez vols et frontières la veille.',
      ],
      passports: {
        RU: 'Les ressortissants russes entrent sans visa pour 90 jours, mais l’ETA-IL est obligatoire depuis 2025 : sans elle, pas d’embarquement. Les frais ne peuvent pas être réglés avec une carte russe ; il faut une carte étrangère. Les cartes bancaires russes ne fonctionnent pas en Israël.',
        UA: 'Les ressortissants ukrainiens entrent sans visa jusqu’à 90 jours avec l’ETA-IL. À la frontière, on demande souvent le but du voyage et la présence de proches.',
        KZ: 'Israël et le Kazakhstan ont signé en janvier 2026 un mémorandum d’exemption de visa, qui n’était pas encore en vigueur lors de notre vérification ; d’ici là, un visa est nécessaire.',
        US: 'Les citoyens américains participent depuis 2023 au programme d’exemption de visa entre les États-Unis et Israël et demandent eux aussi l’ETA-IL.',
        IN: 'Les ressortissants indiens et chinois ont besoin d’un visa touristique : faites la demande en ligne sur le portail du gouvernement israélien ou au consulat quelques semaines avant le voyage.',
      },
    },
    it: {
      summary:
        'I cittadini di circa cento paesi, tra cui Russia, Ucraina, Bielorussia, Georgia, UE, Regno Unito, Stati Uniti, Canada, Australia, Giappone e Corea, entrano senza visto fino a 90 giorni, ma dal 1° gennaio 2025 devono ottenere prima l’autorizzazione elettronica ETA-IL. I cittadini di India, Cina, Turchia, Kazakistan, Uzbekistan, Armenia e altri paesi hanno bisogno di un visto, che molti possono richiedere online.',
      apply:
        'Richiedi l’ETA-IL solo su israel-entry.piba.gov.il: modulo, foto del passaporto e 25 ILS di tassa. La risposta arriva di solito entro un giorno, ma si consiglia di fare domanda almeno 72 ore prima di prenotare i voli. Vale due anni (o fino alla scadenza del passaporto) per più soggiorni fino a 90 giorni. L’ultima parola resta all’agente di frontiera in aeroporto.',
      extend:
        'Il soggiorno turistico (B/2) si può prorogare negli uffici dell’Autorità per la popolazione e l’immigrazione, ma a discrezione dei funzionari: servono appuntamento, motivazione, biglietto e prova dei mezzi. Fai domanda con anticipo, prima della scadenza.',
      visaRun:
        'Uscire verso l’Egitto da Taba o verso la Giordania dai valichi Yitzhak Rabin o Sheikh Hussein dà in teoria 90 giorni nuovi, ma decide l’agente, che dopo uscite frequenti può concederne meno o negare l’ingresso. Porta un biglietto d’uscita e una prenotazione.',
      hacks: [
        'Israele non timbra il passaporto ma consegna un foglietto d’ingresso blu. Conservalo fino all’uscita: con quello i turisti non pagano l’IVA del 18% negli hotel e possono dimostrare di essere in regola.',
        'Da Eilat il valico di Taba porta nel Sinai egiziano con un timbro gratuito di 15 giorni: Dahab, Nuweiba e il monastero di Santa Caterina senza visto egiziano.',
        'Per la Giordania usa i valichi Yitzhak Rabin o Sheikh Hussein: rilasciano il visto giordano all’arrivo e accettano il Jordan Pass. Al ponte Allenby il visto non si rilascia.',
        'Uscire via terra si paga: circa 110 ILS a Yitzhak Rabin e Sheikh Hussein e circa 200 ad Allenby. Puoi pagare prima online e risparmiare tempo alla frontiera.',
      ],
      pitfalls: [
        'All’aeroporto Ben Gurion i colloqui sono spesso approfonditi, soprattutto con timbri di Iran, Libano, Siria, Pakistan e alcuni altri paesi. Tieni a portata di mano prenotazione, itinerario e biglietto di ritorno e rispondi con calma e coerenza.',
        'I siti intermediari chiedono 50–100 $ per l’ETA-IL invece di 25 ILS. L’unico indirizzo ufficiale è su gov.il.',
        'Dalla guerra con l’Iran del 2026 molte compagnie straniere volano in Israele in modo irregolare, e i valichi con Giordania ed Egitto possono chiudere senza preavviso. Controlla voli e frontiere il giorno prima.',
      ],
      passports: {
        RU: 'I cittadini russi entrano senza visto per 90 giorni, ma dal 2025 l’ETA-IL è obbligatoria: senza non ti fanno imbarcare. La tassa non si può pagare con una carta russa, quindi serve una carta estera. Le carte bancarie russe in Israele non funzionano.',
        UA: 'I cittadini ucraini entrano senza visto fino a 90 giorni con l’ETA-IL. Alla frontiera chiedono spesso lo scopo del viaggio e se hai parenti nel paese.',
        KZ: 'Israele e Kazakistan hanno firmato a gennaio 2026 un memorandum per l’esenzione dal visto, che al momento della verifica non era ancora in vigore; fino ad allora serve il visto.',
        US: 'I cittadini statunitensi fanno parte dal 2023 del programma di esenzione dal visto tra Stati Uniti e Israele e richiedono anche loro l’ETA-IL.',
        IN: 'I cittadini indiani e cinesi hanno bisogno di un visto turistico: fai domanda online sul portale del governo israeliano o al consolato qualche settimana prima del viaggio.',
      },
    },
  },
};

export default guide;
