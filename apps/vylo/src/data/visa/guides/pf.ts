import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'PF',
  checked: '2026-10',
  // No matrix column: French Polynesia follows France's visa-exemption list for short stays,
  // but outside Schengen — a Schengen visa does not cover it and its 90/180 count is separate.
  base: 'FR',
  stay: { visa: 90 },
  links: { evisa: 'https://france-visas.gouv.fr', immigration: 'https://www.polynesie-francaise.pref.gouv.fr' },
  docs: ['returnTicket', 'booking', 'finance', 'insurance'],
  passportMonths: 3,
  rule: { days: 90, window: 180 },
  visaRun: 'limited',
  borders: [
    { name: 'Papeete Faa’a (PPT) → Auckland', to: 'NZ', lat: -17.5537, lng: -149.607 },
    { name: 'Papeete Faa’a (PPT) → Honolulu', to: 'US', lat: -17.5537, lng: -149.607 },
  ],
  hackScope: [['regime:free'], ['regime:free'], ['regime:required'], null],
  pitfallScope: [['regime:required'], null, null],
  text: {
    ru: {
      summary:
        'Французская Полинезия — территория Франции, но вне Шенгена: граждане ЕС въезжают свободно, а те, кому не нужна шенгенская виза, — граждане США, Великобритании, Канады, Австралии, Японии, Кореи, Бразилии, Мексики, Израиля и других стран — получают 90 дней за 180, которые считаются отдельно от шенгенских. Остальным, включая россиян, граждан Китая, Индии и Турции, нужна отдельная краткосрочная виза в Полинезию: шенгенская её не заменяет.',
      apply:
        'Анкету заполняют на france-visas.gouv.fr, выбрав направлением Французскую Полинезию, затем сдают документы и биометрию во французском консульстве или визовом центре: фото, билеты туда-обратно, брони отелей, страховку и выписку из банка. Закладывайте 2–4 недели; консульский и сервисный сборы показаны при оформлении заявки.',
      visaRun:
        'Счётчик 90/180 для Полинезии отдельный от шенгенского: дни в Париже не отнимают дней на Таити, и наоборот. Но внутри Полинезии правило 90 дней за 180 действует, и поездка в Окленд или Гонолулу его не обнуляет.',
      hacks: [
        'Шенгенские и полинезийские дни считаются раздельно: безвизовые путешественники могут провести 90 дней в Европе, а затем ещё 90 — в Полинезии.',
        'Европейская система ETIAS, запуск которой запланирован на конец 2026 года, касается только Шенгена — для Французской Полинезии она не понадобится.',
        'Маршрут через Токио (Air Tahiti Nui из Нариты) или Окленд не требует ни американской, ни шенгенской визы — для тех, кому они нужны, это главный способ долететь.',
        'Между островами — Муреа, Бора-Бора, Туамоту — никаких формальностей нет; авиапасы Air Tahiti на несколько островов обычно дешевле отдельных билетов.',
      ],
      pitfalls: [
        'Шенгенская виза не действует в Полинезии: с ней одной вас не посадят на рейс в Папеэте даже в Париже.',
        'Рейсы через Лос-Анджелес или Сан-Франциско требуют ESTA или американской визы даже для транзита.',
        'Паспорт должен быть действителен не менее 3 месяцев после даты выезда, а на границе проверяют обратный билет и брони жилья — на маленьких островах его часто нет без брони.',
      ],
      passports: {
        RU: 'Россиянам нужна отдельная виза во Французскую Полинезию через France-Visas и визовый центр Франции. Шенгенская виза её не заменяет. Удобный маршрут — через Токио рейсом Air Tahiti Nui; пересадки в Париже (выход из аэропорта), Лос-Анджелесе или Окленде требуют транзитных виз. Российские карты не работают.',
        US: 'Американцы въезжают без визы на 90 дней за 180, отдельно от Шенгена; Air Tahiti Nui и United летают в Папеэте напрямую из Лос-Анджелеса и Сан-Франциско.',
        GB: 'Британцы въезжают без визы на 90 дней за 180, независимо от дней, проведённых в Шенгене.',
        CN: 'Гражданам Китая нужна отдельная полинезийская виза через France-Visas; шенгенская виза её не заменяет.',
      },
    },
    en: {
      summary:
        'French Polynesia is French territory but outside Schengen: EU citizens enter freely, and those who are visa-exempt for Schengen — US, UK, Canadian, Australian, Japanese, Korean, Brazilian, Mexican, Israeli and other citizens — get 90 days in 180, counted separately from Schengen. Everyone else, including Russian, Chinese, Indian and Turkish citizens, needs a separate short-stay visa for French Polynesia; a Schengen visa does not cover it.',
      apply:
        'Fill in the form on france-visas.gouv.fr with French Polynesia as your destination, then hand in documents and biometrics at a French consulate or visa centre: photo, return flights, hotel bookings, travel insurance and bank statements. Allow 2–4 weeks; the consular and service fees are shown during the application.',
      visaRun:
        'French Polynesia’s 90/180 counter is separate from Schengen’s: days in Paris do not eat into your days in Tahiti, and vice versa. Within French Polynesia, however, the 90-in-180 rule applies, and a trip to Auckland or Honolulu does not reset it.',
      hacks: [
        'Schengen days and Polynesian days are counted separately: visa-exempt travellers can spend 90 days in Europe and then another 90 in French Polynesia.',
        'The EU’s ETIAS, planned to start at the end of 2026, covers Schengen only — you will not need it for French Polynesia.',
        'Routing via Tokyo (Air Tahiti Nui from Narita) or Auckland needs neither a US nor a Schengen visa — the main way in for those who would need one.',
        'There are no formalities between islands — Moorea, Bora Bora, the Tuamotus — and Air Tahiti multi-island passes are usually cheaper than separate tickets.',
      ],
      pitfalls: [
        'A Schengen visa is not valid for French Polynesia: with it alone you will be refused boarding to Papeete, even in Paris.',
        'Flights via Los Angeles or San Francisco require an ESTA or a US visa, even just to transit.',
        'Your passport must be valid for at least 3 months beyond departure, and officers check your return ticket and accommodation — on small islands there is often nothing without a booking.',
      ],
      passports: {
        RU: 'Russians need a separate visa for French Polynesia through France-Visas and a French visa centre; a Schengen visa does not replace it. A convenient route is via Tokyo on Air Tahiti Nui; connections in Paris (leaving the airport), Los Angeles or Auckland need transit visas. Russian cards do not work.',
        US: 'US citizens enter visa-free for 90 days in 180, separately from Schengen; Air Tahiti Nui and United fly to Papeete nonstop from Los Angeles and San Francisco.',
        GB: 'British citizens enter visa-free for 90 days in 180, regardless of days spent in Schengen.',
        CN: 'Chinese citizens need a separate French Polynesia visa through France-Visas; a Schengen visa does not replace it.',
      },
    },
    es: {
      summary:
        'La Polinesia Francesa es territorio francés, pero fuera de Schengen: los ciudadanos de la UE entran libremente, y quienes están exentos de visado Schengen —estadounidenses, británicos, canadienses, australianos, japoneses, coreanos, brasileños, mexicanos, israelíes y otros— tienen 90 días en 180, contados aparte de Schengen. El resto, incluidos rusos, chinos, indios y turcos, necesita un visado de corta estancia propio para la Polinesia Francesa; el Schengen no sirve.',
      apply:
        'Rellena el formulario en france-visas.gouv.fr indicando la Polinesia Francesa como destino y entrega los documentos y la biometría en un consulado o centro de visados de Francia: foto, vuelos de ida y vuelta, reservas de hotel, seguro de viaje y extractos bancarios. Calcula 2–4 semanas; las tasas consulares y de servicio aparecen durante la solicitud.',
      visaRun:
        'El contador de 90/180 de la Polinesia Francesa es independiente del de Schengen: los días en París no restan días en Tahití, ni al revés. Dentro de la Polinesia, eso sí, rige la regla de 90 días en 180, y un viaje a Auckland u Honolulu no la reinicia.',
      hacks: [
        'Los días de Schengen y los de la Polinesia se cuentan por separado: si estás exento de visado puedes pasar 90 días en Europa y luego otros 90 en la Polinesia Francesa.',
        'El ETIAS europeo, previsto para finales de 2026, solo afecta a Schengen: no lo necesitarás para la Polinesia Francesa.',
        'La ruta por Tokio (Air Tahiti Nui desde Narita) o Auckland no exige visado estadounidense ni Schengen: es la vía principal para quien necesitaría uno.',
        'Entre islas —Moorea, Bora Bora, las Tuamotu— no hay trámites, y los pases multiisla de Air Tahiti suelen salir más baratos que los billetes sueltos.',
      ],
      pitfalls: [
        'El visado Schengen no vale para la Polinesia Francesa: solo con él te negarán el embarque a Papeete, incluso en París.',
        'Los vuelos por Los Ángeles o San Francisco exigen ESTA o visado estadounidense, aunque solo sea para el tránsito.',
        'El pasaporte debe ser válido al menos 3 meses tras la salida, y en la frontera revisan billete de vuelta y alojamiento: en las islas pequeñas a menudo no hay nada sin reserva.',
      ],
      passports: {
        RU: 'Los rusos necesitan un visado propio para la Polinesia Francesa a través de France-Visas y un centro de visados de Francia; el Schengen no lo sustituye. Una ruta cómoda es vía Tokio con Air Tahiti Nui; las escalas en París (saliendo del aeropuerto), Los Ángeles o Auckland requieren visados de tránsito. Las tarjetas rusas no funcionan.',
        US: 'Los estadounidenses entran sin visado 90 días en 180, aparte de Schengen; Air Tahiti Nui y United vuelan directo a Papeete desde Los Ángeles y San Francisco.',
        GB: 'Los británicos entran sin visado 90 días en 180, al margen de los días pasados en Schengen.',
        CN: 'Los ciudadanos chinos necesitan un visado propio para la Polinesia Francesa a través de France-Visas; el Schengen no lo sustituye.',
      },
    },
    de: {
      summary:
        'Französisch-Polynesien gehört zu Frankreich, liegt aber außerhalb des Schengenraums: EU-Bürger reisen frei ein, und wer für Schengen visumfrei ist – US-Amerikaner, Briten, Kanadier, Australier, Japaner, Koreaner, Brasilianer, Mexikaner, Israelis und andere –, bekommt 90 Tage in 180, getrennt von Schengen gezählt. Alle anderen, darunter Russen, Chinesen, Inder und Türken, brauchen ein eigenes Kurzzeitvisum für Französisch-Polynesien; ein Schengen-Visum gilt dort nicht.',
      apply:
        'Füll das Formular auf france-visas.gouv.fr mit Französisch-Polynesien als Ziel aus und gib Unterlagen und Biometrie bei einem französischen Konsulat oder Visazentrum ab: Foto, Hin- und Rückflug, Hotelbuchungen, Reiseversicherung und Kontoauszüge. Plane 2–4 Wochen ein; Konsular- und Servicegebühr werden im Antrag angezeigt.',
      visaRun:
        'Der 90/180-Zähler Französisch-Polynesiens ist vom Schengen-Zähler getrennt: Tage in Paris gehen nicht von deinen Tagen auf Tahiti ab und umgekehrt. Innerhalb Französisch-Polynesiens gilt die 90-in-180-Regel aber, und ein Abstecher nach Auckland oder Honolulu setzt sie nicht zurück.',
      hacks: [
        'Schengen- und Polynesien-Tage werden getrennt gezählt: Visumfreie können 90 Tage in Europa verbringen und danach weitere 90 in Französisch-Polynesien.',
        'Das europäische ETIAS, dessen Start für Ende 2026 geplant ist, gilt nur für Schengen – für Französisch-Polynesien brauchst du es nicht.',
        'Die Route über Tokio (Air Tahiti Nui ab Narita) oder Auckland braucht weder US- noch Schengen-Visum – für alle, die eines bräuchten, der wichtigste Weg.',
        'Zwischen den Inseln – Moorea, Bora Bora, Tuamotu – gibt es keine Formalitäten, und Air-Tahiti-Inselpässe sind meist günstiger als Einzeltickets.',
      ],
      pitfalls: [
        'Ein Schengen-Visum gilt nicht für Französisch-Polynesien: Allein damit wird dir das Boarding nach Papeete verweigert, selbst in Paris.',
        'Flüge über Los Angeles oder San Francisco erfordern ESTA oder ein US-Visum, auch nur für den Transit.',
        'Der Pass muss mindestens 3 Monate über die Ausreise hinaus gültig sein, und die Grenzbeamten prüfen Rückflug und Unterkunft – auf kleinen Inseln findest du ohne Buchung oft nichts.',
      ],
      passports: {
        RU: 'Russen brauchen ein eigenes Visum für Französisch-Polynesien über France-Visas und ein französisches Visazentrum; ein Schengen-Visum ersetzt es nicht. Bequem ist die Route über Tokio mit Air Tahiti Nui; Umstiege in Paris (mit Verlassen des Flughafens), Los Angeles oder Auckland erfordern Transitvisa. Russische Karten funktionieren nicht.',
        US: 'US-Bürger reisen visumfrei für 90 Tage in 180 ein, getrennt von Schengen; Air Tahiti Nui und United fliegen nonstop von Los Angeles und San Francisco nach Papeete.',
        GB: 'Briten reisen visumfrei für 90 Tage in 180 ein, unabhängig von ihren Schengen-Tagen.',
        CN: 'Chinesen brauchen über France-Visas ein eigenes Visum für Französisch-Polynesien; ein Schengen-Visum ersetzt es nicht.',
      },
    },
    fr: {
      summary:
        'La Polynésie française est un territoire français, mais hors Schengen : les citoyens de l’UE y entrent librement, et les personnes exemptées de visa Schengen — Américains, Britanniques, Canadiens, Australiens, Japonais, Coréens, Brésiliens, Mexicains, Israéliens et d’autres — disposent de 90 jours sur 180, comptés à part de Schengen. Tous les autres, dont les Russes, Chinois, Indiens et Turcs, ont besoin d’un visa de court séjour propre à la Polynésie française ; un visa Schengen ne la couvre pas.',
      apply:
        'Remplissez le formulaire sur france-visas.gouv.fr en choisissant la Polynésie française comme destination, puis déposez le dossier et vos données biométriques dans un consulat ou centre de visas français : photo, vols aller-retour, réservations d’hôtel, assurance voyage et relevés bancaires. Comptez 2 à 4 semaines ; les frais consulaires et de service s’affichent pendant la demande.',
      visaRun:
        'Le compteur 90/180 de la Polynésie française est distinct de celui de Schengen : les jours passés à Paris ne réduisent pas vos jours à Tahiti, et inversement. En Polynésie, en revanche, la règle des 90 jours sur 180 s’applique, et un saut à Auckland ou Honolulu ne la remet pas à zéro.',
      hacks: [
        'Les jours Schengen et polynésiens se comptent séparément : un voyageur exempté de visa peut passer 90 jours en Europe puis 90 autres en Polynésie française.',
        'L’ETIAS européen, dont le lancement est prévu fin 2026, ne concerne que Schengen : inutile pour la Polynésie française.',
        'L’itinéraire via Tokyo (Air Tahiti Nui depuis Narita) ou Auckland ne demande ni visa américain ni visa Schengen : c’est la voie principale pour ceux qui en auraient besoin.',
        'Aucune formalité entre les îles — Moorea, Bora Bora, les Tuamotu — et les pass multi-îles d’Air Tahiti reviennent généralement moins cher que des billets séparés.',
      ],
      pitfalls: [
        'Un visa Schengen n’est pas valable en Polynésie française : avec lui seul, l’embarquement pour Papeete vous sera refusé, même à Paris.',
        'Les vols via Los Angeles ou San Francisco exigent un ESTA ou un visa américain, même pour un simple transit.',
        'Le passeport doit être valable au moins 3 mois après la date de départ, et les agents vérifient billet retour et hébergement : sur les petites îles, sans réservation, on ne trouve souvent rien.',
      ],
      passports: {
        RU: 'Les Russes ont besoin d’un visa propre à la Polynésie française via France-Visas et un centre de visas français ; un visa Schengen ne le remplace pas. Itinéraire pratique : via Tokyo avec Air Tahiti Nui ; les correspondances à Paris (avec sortie de l’aéroport), Los Angeles ou Auckland exigent des visas de transit. Les cartes russes ne fonctionnent pas.',
        US: 'Les Américains entrent sans visa pour 90 jours sur 180, indépendamment de Schengen ; Air Tahiti Nui et United relient Papeete sans escale depuis Los Angeles et San Francisco.',
        GB: 'Les Britanniques entrent sans visa pour 90 jours sur 180, quels que soient les jours passés dans l’espace Schengen.',
        CN: 'Les Chinois ont besoin d’un visa propre à la Polynésie française via France-Visas ; un visa Schengen ne le remplace pas.',
      },
    },
    it: {
      summary:
        'La Polinesia francese è territorio francese ma fuori da Schengen: i cittadini UE entrano liberamente, e chi è esente dal visto Schengen — statunitensi, britannici, canadesi, australiani, giapponesi, coreani, brasiliani, messicani, israeliani e altri — ha 90 giorni su 180, contati a parte rispetto a Schengen. Tutti gli altri, compresi russi, cinesi, indiani e turchi, hanno bisogno di un visto di breve durata specifico per la Polinesia francese; quello Schengen non vale.',
      apply:
        'Compila il modulo su france-visas.gouv.fr indicando la Polinesia francese come destinazione, poi consegna documenti e dati biometrici in un consolato o centro visti francese: foto, voli di andata e ritorno, prenotazioni alberghiere, assicurazione di viaggio ed estratti conto. Calcola 2–4 settimane; le tasse consolari e di servizio compaiono durante la domanda.',
      visaRun:
        'Il contatore 90/180 della Polinesia francese è separato da quello Schengen: i giorni a Parigi non tolgono giorni a Tahiti, e viceversa. All’interno della Polinesia però vale la regola dei 90 giorni su 180, e un viaggio ad Auckland o Honolulu non la azzera.',
      hacks: [
        'I giorni Schengen e quelli polinesiani si contano separatamente: chi è esente da visto può passare 90 giorni in Europa e poi altri 90 nella Polinesia francese.',
        'L’ETIAS europeo, previsto a fine 2026, riguarda solo Schengen: per la Polinesia francese non servirà.',
        'Il percorso via Tokyo (Air Tahiti Nui da Narita) o Auckland non richiede né visto statunitense né Schengen: è la via principale per chi ne avrebbe bisogno.',
        'Tra le isole — Moorea, Bora Bora, Tuamotu — non ci sono formalità, e i pass multi-isola di Air Tahiti di solito costano meno dei biglietti singoli.',
      ],
      pitfalls: [
        'Il visto Schengen non vale nella Polinesia francese: con quello soltanto ti negano l’imbarco per Papeete, anche a Parigi.',
        'I voli via Los Angeles o San Francisco richiedono l’ESTA o un visto statunitense, anche solo per il transito.',
        'Il passaporto deve essere valido almeno 3 mesi oltre la partenza, e alla frontiera controllano biglietto di ritorno e alloggio: sulle isole piccole senza prenotazione spesso non si trova nulla.',
      ],
      passports: {
        RU: 'Ai russi serve un visto specifico per la Polinesia francese tramite France-Visas e un centro visti francese; il visto Schengen non lo sostituisce. Un percorso comodo è via Tokyo con Air Tahiti Nui; gli scali a Parigi (uscendo dall’aeroporto), Los Angeles o Auckland richiedono visti di transito. Le carte russe non funzionano.',
        US: 'I cittadini statunitensi entrano senza visto per 90 giorni su 180, a parte rispetto a Schengen; Air Tahiti Nui e United volano senza scalo a Papeete da Los Angeles e San Francisco.',
        GB: 'I britannici entrano senza visto per 90 giorni su 180, indipendentemente dai giorni passati in area Schengen.',
        CN: 'Ai cittadini cinesi serve un visto specifico per la Polinesia francese tramite France-Visas; il visto Schengen non lo sostituisce.',
      },
    },
  },
};

export default guide;
