import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'UZ',
  checked: '2026-10',
  overrides: {
    US: { status: 'free', days: 30 },
  },
  fees: { evisa: { kind: 'from', amount: 20, currency: 'USD' } },
  stay: { evisa: 30 },
  links: { evisa: 'https://e-visa.gov.uz', immigration: 'https://emehmon.uz' },
  passportMonths: 3,
  visaRun: 'yes',
  borders: [{ name: 'Tashkent (TAS) → Almaty / Bishkek', to: 'KZ', lat: 41.2579, lng: 69.2812 }],
  transit: { hours: 120 },
  text: {
    ru: {
      summary:
        'Граждане России и большинства стран СНГ въезжают без визы. Граждане ЕС, Великобритании, Японии, Кореи, Китая, Турции и ещё почти 90 стран получают 30 дней без визы, а с января 2026 года к ним добавились и граждане США. Гражданам Индии и ряда других стран пока нужна электронная виза за 20 $.',
      apply:
        'Электронную визу оформляют на e-visa.gov.uz: анкета, фото, скан паспорта, оплата картой; однократная на 30 дней стоит 20 $, многократная дороже. Обычно её выдают за 2–3 рабочих дня, действует она 90 дней с выдачи. Главное правило для всех — регистрация: гостиницы и гестхаусы ставят на учёт автоматически через систему E-mehmon, а при жизни у друзей зарегистрироваться нужно самому на emehmon.uz.',
      visaRun:
        'Визаран работает: после выезда безвизовые 30 дней начинаются заново, отдельного лимита за полгода не установлено. Удобнее всего короткий рейс из Ташкента в Алматы или Бишкек либо поездка в Казахстан по суше, но частые повторные въезды могут вызвать вопросы на границе.',
      transit:
        'Гражданам примерно 100 стран, включая Индию, разрешён безвизовый транзит до 5 дней при прилёте самолётом и наличии билета в третью страну. Этого хватает, чтобы посмотреть Ташкент и Самарканд по пути.',
      hacks: [
        'Скоростной поезд «Афросиаб» довозит из Ташкента в Самарканд за 2 часа, а в Бухару — за 4. Билеты продаются в приложении и на сайте Узбекских железных дорог примерно за 45 дней и в сезон разлетаются за несколько дней.',
        'Сохраняйте листки регистрации из каждой гостиницы: их могут попросить при выезде, а пробел больше чем в 3 дня без регистрации грозит штрафом.',
        'Иностранные Visa и Mastercard работают в крупных гостиницах и банкоматах Ташкента, но в остальном платят наличными сумами или местными картами Humo и Uzcard — меняйте доллары в банках, курс близок к официальному.',
        'Пятидневный безвизовый транзит позволяет гражданам Индии и других стран с визовым режимом устроить стоповер по пути в Европу или Азию без электронной визы.',
      ],
      pitfalls: [
        'Сильные обезболивающие и лекарства с кодеином без рецепта и перевода могут конфисковать на таможне, а за некоторые грозит уголовное дело.',
        'Сайты-посредники берут за электронную визу в 2–3 раза больше; официальный адрес — e-visa.gov.uz.',
        'Жильё через знакомых без регистрации — частая причина штрафа: хозяина или вас самих обязаны зарегистрировать через E-mehmon.',
      ],
      passports: {
        RU: 'Россиянам виза не нужна, въезд по загранпаспорту. Без регистрации можно находиться до 15 дней, дальше нужна временная регистрация — в гостиницах её делают автоматически. Карты «Мир» в Узбекистане не принимают, берите наличные доллары или рубли.',
        US: 'С 1 января 2026 года граждане США въезжают без визы на 30 дней; раньше это касалось только туристов старше 55 лет.',
        IN: 'Гражданам Индии пока нужна электронная виза (20 $). В августе 2026 года объявили о будущем безвизовом режиме на 30 дней, но указа и даты начала ещё нет — проверьте перед поездкой.',
      },
    },
    en: {
      summary:
        'Citizens of Russia and most CIS countries enter visa-free. Citizens of the EU, UK, Japan, Korea, China, Turkey and nearly 90 other countries get 30 visa-free days, and US citizens joined them in January 2026. Indian citizens and those of some other countries still need a $20 e-visa.',
      apply:
        'Apply for the e-visa on e-visa.gov.uz: form, photo, passport scan and card payment; a single-entry 30-day visa costs $20, multiple-entry ones more. It is usually issued in 2–3 working days and is valid for 90 days from issue. The rule that applies to everyone is registration: hotels and guesthouses register you automatically through the E-mehmon system, but if you stay with friends you must register yourself on emehmon.uz.',
      visaRun:
        'Visa runs work: after you leave, a fresh 30 visa-free days begins, and no half-year cap has been set. The easiest option is a short flight from Tashkent to Almaty or Bishkek, or an overland trip into Kazakhstan, but frequent back-to-back entries can draw questions at the border.',
      transit:
        'Citizens of about 100 countries, India among them, may transit visa-free for up to 5 days when arriving by air with an onward ticket to a third country. That is enough to see Tashkent and Samarkand along the way.',
      hacks: [
        'The Afrosiyob high-speed train takes 2 hours from Tashkent to Samarkand and 4 to Bukhara. Tickets go on sale in the Uzbek Railways app and website about 45 days ahead and sell out within days in high season.',
        'Keep the registration slips from every hotel: they may be asked for when you leave, and a gap of more than 3 days without registration can bring a fine.',
        'Foreign Visa and Mastercard cards work in big hotels and Tashkent ATMs, but elsewhere you pay in cash som or with local Humo and Uzcard cards — change dollars at banks, where the rate is close to official.',
        'The 5-day visa-free transit lets Indian citizens and other visa-required travellers make a stopover on the way to Europe or Asia without an e-visa.',
      ],
      pitfalls: [
        'Strong painkillers and codeine medicines without a prescription and translation can be confiscated at customs, and some can lead to criminal charges.',
        'Agency sites charge two to three times more for the e-visa; the official address is e-visa.gov.uz.',
        'Staying with acquaintances without registration is a common reason for fines: you or your host must be registered through E-mehmon.',
      ],
      passports: {
        RU: 'Russian citizens need no visa and enter with the international passport. You can stay up to 15 days without registration; after that you need temporary registration, which hotels do automatically. Mir cards are not accepted in Uzbekistan, so bring cash dollars or roubles.',
        US: 'Since 1 January 2026, US citizens enter visa-free for 30 days; before that, only tourists aged over 55 qualified.',
        IN: 'Indian citizens still need an e-visa ($20). A 30-day visa-free regime was announced in August 2026, but there is no decree or start date yet — check before you fly.',
      },
    },
    es: {
      summary:
        'Los ciudadanos de Rusia y de la mayoría de los países de la CEI entran sin visado. Los de la UE, Reino Unido, Japón, Corea, China, Turquía y casi 90 países más tienen 30 días sin visado, y desde enero de 2026 también los estadounidenses. Los ciudadanos indios y de algunos otros países siguen necesitando un visado electrónico de 20 $.',
      apply:
        'El visado electrónico se pide en e-visa.gov.uz: formulario, foto, copia del pasaporte y pago con tarjeta; el de una entrada y 30 días cuesta 20 $, los de varias entradas algo más. Suele emitirse en 2–3 días laborables y vale 90 días desde su emisión. La norma que afecta a todos es el registro: hoteles y casas de huéspedes te registran automáticamente en el sistema E-mehmon, pero si te alojas con amigos tienes que registrarte tú en emehmon.uz.',
      visaRun:
        'El visa run funciona: al salir empiezan otros 30 días sin visado, y no hay un tope semestral fijado. Lo más fácil es un vuelo corto de Taskent a Almaty o Biskek, o una escapada por tierra a Kazajistán, aunque entrar una y otra vez seguidas puede generar preguntas en la frontera.',
      transit:
        'Los ciudadanos de unos 100 países, entre ellos India, pueden hacer un tránsito sin visado de hasta 5 días si llegan en avión con billete de salida a un tercer país. Da para ver Taskent y Samarcanda de paso.',
      hacks: [
        'El tren de alta velocidad Afrosiyob tarda 2 horas de Taskent a Samarcanda y 4 a Bujará. Los billetes salen a la venta en la app y la web de los Ferrocarriles de Uzbekistán unos 45 días antes y en temporada alta se agotan en pocos días.',
        'Guarda los justificantes de registro de cada hotel: pueden pedírtelos al salir, y un hueco de más de 3 días sin registro puede costarte una multa.',
        'Las Visa y Mastercard extranjeras funcionan en hoteles grandes y cajeros de Taskent, pero en el resto se paga en efectivo en som o con tarjetas locales Humo y Uzcard; cambia dólares en bancos, con un tipo cercano al oficial.',
        'El tránsito sin visado de 5 días permite a los ciudadanos indios y a otros viajeros que necesitan visado hacer escala camino de Europa o Asia sin visado electrónico.',
      ],
      pitfalls: [
        'Los analgésicos fuertes y medicamentos con codeína sin receta y traducción pueden confiscarse en la aduana, y algunos pueden acarrear un proceso penal.',
        'Las webs intermediarias cobran el visado electrónico dos o tres veces más caro; la dirección oficial es e-visa.gov.uz.',
        'Alojarte con conocidos sin registro es un motivo habitual de multa: tú o tu anfitrión debéis registraros a través de E-mehmon.',
      ],
      passports: {
        RU: 'Los ciudadanos rusos no necesitan visado y entran con el pasaporte de viaje. Pueden estar hasta 15 días sin registro; después necesitan registro temporal, que los hoteles hacen automáticamente. Las tarjetas Mir no se aceptan en Uzbekistán: lleva dólares o rublos en efectivo.',
        US: 'Desde el 1 de enero de 2026, los estadounidenses entran sin visado 30 días; antes solo podían hacerlo los turistas mayores de 55 años.',
        IN: 'Los ciudadanos indios aún necesitan visado electrónico (20 $). En agosto de 2026 se anunció un futuro régimen sin visado de 30 días, pero todavía no hay decreto ni fecha: compruébalo antes de volar.',
      },
    },
    de: {
      summary:
        'Bürger Russlands und der meisten GUS-Staaten reisen visumfrei ein. Bürger der EU, Großbritanniens, Japans, Koreas, Chinas, der Türkei und fast 90 weiterer Länder bekommen 30 visumfreie Tage, seit Januar 2026 auch US-Bürger. Inder und Bürger einiger anderer Länder brauchen weiterhin ein E-Visum für 20 $.',
      apply:
        'Das E-Visum beantragst du auf e-visa.gov.uz: Formular, Foto, Passscan und Kartenzahlung; einfache Einreise für 30 Tage kostet 20 $, Mehrfachvisa mehr. Es kommt meist in 2–3 Werktagen und gilt 90 Tage ab Ausstellung. Für alle gilt die Meldepflicht: Hotels und Gästehäuser registrieren dich automatisch im System E-mehmon, wohnst du bei Freunden, musst du dich selbst auf emehmon.uz registrieren.',
      visaRun:
        'Visa-Runs funktionieren: Nach der Ausreise beginnen 30 neue visumfreie Tage, eine Halbjahresgrenze gibt es nicht. Am einfachsten ist ein kurzer Flug von Taschkent nach Almaty oder Bischkek oder ein Abstecher über Land nach Kasachstan; viele Einreisen kurz hintereinander können aber Fragen an der Grenze auslösen.',
      transit:
        'Bürger von rund 100 Ländern, darunter Indien, dürfen bei Ankunft per Flugzeug und mit Weiterflugticket in ein Drittland bis zu 5 Tage visumfrei transitieren. Das reicht, um unterwegs Taschkent und Samarkand zu sehen.',
      hacks: [
        'Der Schnellzug Afrosiyob braucht von Taschkent nach Samarkand 2 Stunden, nach Buchara 4. Tickets gibt es in App und Website der Usbekischen Eisenbahn etwa 45 Tage im Voraus, in der Hochsaison sind sie binnen Tagen weg.',
        'Heb die Meldezettel jedes Hotels auf: Sie können bei der Ausreise verlangt werden, und eine Lücke von mehr als 3 Tagen ohne Registrierung kann ein Bußgeld kosten.',
        'Ausländische Visa- und Mastercard-Karten funktionieren in großen Hotels und an Automaten in Taschkent, sonst zahlst du bar in Som oder mit den lokalen Karten Humo und Uzcard – tausche Dollar bei Banken, der Kurs liegt nahe am offiziellen.',
        'Der 5-tägige visumfreie Transit erlaubt Indern und anderen visumpflichtigen Reisenden einen Stopover auf dem Weg nach Europa oder Asien ohne E-Visum.',
      ],
      pitfalls: [
        'Starke Schmerzmittel und Codein-Präparate ohne Rezept und Übersetzung können beim Zoll beschlagnahmt werden, manche ziehen sogar ein Strafverfahren nach sich.',
        'Vermittlerseiten verlangen für das E-Visum das Zwei- bis Dreifache; die offizielle Adresse ist e-visa.gov.uz.',
        'Bei Bekannten ohne Registrierung zu wohnen ist ein häufiger Grund für Bußgelder: Du oder dein Gastgeber müsst über E-mehmon gemeldet sein.',
      ],
      passports: {
        RU: 'Russische Staatsangehörige brauchen kein Visum und reisen mit dem Reisepass ein. Bis zu 15 Tage geht es ohne Registrierung, danach braucht man eine vorübergehende Anmeldung, die Hotels automatisch erledigen. Mir-Karten werden in Usbekistan nicht akzeptiert – nimm Dollar oder Rubel in bar mit.',
        US: 'Seit 1. Januar 2026 reisen US-Bürger 30 Tage visumfrei ein; vorher galt das nur für Touristen über 55.',
        IN: 'Indische Staatsangehörige brauchen weiterhin ein E-Visum (20 $). Im August 2026 wurde eine künftige 30-tägige Visumfreiheit angekündigt, ein Dekret mit Startdatum fehlt aber noch – prüfe es vor dem Flug.',
      },
    },
    fr: {
      summary:
        'Les citoyens de Russie et de la plupart des pays de la CEI entrent sans visa. Ceux de l’UE, du Royaume-Uni, du Japon, de Corée, de Chine, de Turquie et de près de 90 autres pays ont 30 jours sans visa, rejoints en janvier 2026 par les citoyens américains. Les Indiens et quelques autres nationalités ont toujours besoin d’un e-visa à 20 $.',
      apply:
        'L’e-visa se demande sur e-visa.gov.uz : formulaire, photo, scan du passeport et paiement par carte ; l’entrée unique de 30 jours coûte 20 $, les entrées multiples davantage. Il est généralement délivré sous 2 à 3 jours ouvrés et reste valable 90 jours. La règle qui concerne tout le monde est l’enregistrement : hôtels et maisons d’hôtes vous enregistrent automatiquement dans le système E-mehmon, mais si vous logez chez des amis, vous devez vous enregistrer vous-même sur emehmon.uz.',
      visaRun:
        'Le visa run fonctionne : après une sortie, 30 nouveaux jours sans visa commencent, sans plafond semestriel fixé. Le plus simple est un vol court de Tachkent à Almaty ou Bichkek, ou un aller-retour par la route au Kazakhstan, mais des entrées répétées à la suite peuvent susciter des questions à la frontière.',
      transit:
        'Les ressortissants d’une centaine de pays, dont l’Inde, peuvent transiter sans visa jusqu’à 5 jours en arrivant par avion avec un billet vers un pays tiers. De quoi voir Tachkent et Samarcande en chemin.',
      hacks: [
        'Le train à grande vitesse Afrosiyob relie Tachkent à Samarcande en 2 heures et à Boukhara en 4. Les billets ouvrent sur l’application et le site des chemins de fer ouzbeks environ 45 jours à l’avance et partent en quelques jours en haute saison.',
        'Gardez les fiches d’enregistrement de chaque hôtel : on peut vous les demander à la sortie, et un trou de plus de 3 jours sans enregistrement peut valoir une amende.',
        'Les cartes Visa et Mastercard étrangères marchent dans les grands hôtels et les distributeurs de Tachkent, mais ailleurs on paie en soums liquides ou avec les cartes locales Humo et Uzcard ; changez vos dollars en banque, à un taux proche de l’officiel.',
        'Le transit sans visa de 5 jours permet aux Indiens et aux autres voyageurs soumis au visa de faire une escale en route vers l’Europe ou l’Asie sans e-visa.',
      ],
      pitfalls: [
        'Les antidouleurs puissants et médicaments à la codéine sans ordonnance ni traduction peuvent être confisqués à la douane, et certains peuvent valoir des poursuites pénales.',
        'Les sites intermédiaires facturent l’e-visa deux à trois fois plus cher ; l’adresse officielle est e-visa.gov.uz.',
        'Loger chez des connaissances sans enregistrement est une cause fréquente d’amende : vous ou votre hôte devez être déclarés via E-mehmon.',
      ],
      passports: {
        RU: 'Les citoyens russes n’ont pas besoin de visa et entrent avec le passeport international. On peut rester 15 jours sans enregistrement ; au-delà, un enregistrement temporaire est nécessaire, que les hôtels font automatiquement. Les cartes Mir ne sont pas acceptées en Ouzbékistan : prévoyez des dollars ou des roubles en espèces.',
        US: 'Depuis le 1er janvier 2026, les citoyens américains entrent sans visa pour 30 jours ; auparavant, seuls les touristes de plus de 55 ans en bénéficiaient.',
        IN: 'Les citoyens indiens ont encore besoin d’un e-visa (20 $). Un régime sans visa de 30 jours a été annoncé en août 2026, mais aucun décret ni date de départ n’est encore paru : vérifiez avant de partir.',
      },
    },
    it: {
      summary:
        'I cittadini della Russia e della maggior parte dei paesi della CSI entrano senza visto. Quelli di UE, Regno Unito, Giappone, Corea, Cina, Turchia e quasi altri 90 paesi hanno 30 giorni senza visto, e da gennaio 2026 anche gli statunitensi. Gli indiani e i cittadini di alcuni altri paesi hanno ancora bisogno di un visto elettronico da 20 $.',
      apply:
        'Il visto elettronico si richiede su e-visa.gov.uz: modulo, foto, scansione del passaporto e pagamento con carta; quello a ingresso singolo per 30 giorni costa 20 $, quelli a ingressi multipli di più. Di solito arriva in 2–3 giorni lavorativi e vale 90 giorni dal rilascio. La regola che vale per tutti è la registrazione: hotel e guesthouse ti registrano automaticamente nel sistema E-mehmon, ma se stai da amici devi registrarti da solo su emehmon.uz.',
      visaRun:
        'Il visa run funziona: dopo l’uscita ripartono 30 giorni senza visto e non è previsto un tetto semestrale. La cosa più semplice è un volo breve da Taškent ad Almaty o Biškek, oppure una puntata via terra in Kazakistan, ma ingressi ripetuti a breve distanza possono suscitare domande alla frontiera.',
      transit:
        'I cittadini di circa 100 paesi, tra cui l’India, possono transitare senza visto fino a 5 giorni se arrivano in aereo con un biglietto per un paese terzo. Basta per vedere Taškent e Samarcanda lungo la strada.',
      hacks: [
        'Il treno ad alta velocità Afrosiyob impiega 2 ore da Taškent a Samarcanda e 4 fino a Bukhara. I biglietti escono sull’app e sul sito delle Ferrovie dell’Uzbekistan circa 45 giorni prima e in alta stagione finiscono in pochi giorni.',
        'Conserva i fogli di registrazione di ogni hotel: possono chiederteli all’uscita, e un buco di oltre 3 giorni senza registrazione può costare una multa.',
        'Le Visa e Mastercard estere funzionano negli hotel grandi e agli sportelli di Taškent, ma altrove si paga in contanti in som o con le carte locali Humo e Uzcard; cambia dollari in banca, a un tasso vicino a quello ufficiale.',
        'Il transito senza visto di 5 giorni permette agli indiani e agli altri viaggiatori soggetti a visto di fare uno stopover verso l’Europa o l’Asia senza visto elettronico.',
      ],
      pitfalls: [
        'Antidolorifici forti e farmaci con codeina senza ricetta e traduzione possono essere sequestrati in dogana, e alcuni possono portare a un procedimento penale.',
        'I siti intermediari fanno pagare il visto elettronico due o tre volte di più; l’indirizzo ufficiale è e-visa.gov.uz.',
        'Stare da conoscenti senza registrazione è un motivo frequente di multa: tu o chi ti ospita dovete essere registrati tramite E-mehmon.',
      ],
      passports: {
        RU: 'I cittadini russi non hanno bisogno del visto ed entrano con il passaporto per l’estero. Si può restare fino a 15 giorni senza registrazione; poi serve la registrazione temporanea, che gli hotel fanno in automatico. Le carte Mir in Uzbekistan non sono accettate: porta dollari o rubli in contanti.',
        US: 'Dal 1° gennaio 2026 i cittadini statunitensi entrano senza visto per 30 giorni; prima valeva solo per i turisti over 55.',
        IN: 'I cittadini indiani hanno ancora bisogno del visto elettronico (20 $). Ad agosto 2026 è stato annunciato un futuro regime senza visto di 30 giorni, ma non ci sono ancora decreto né data di avvio: verifica prima di partire.',
      },
    },
  },
};

export default guide;
