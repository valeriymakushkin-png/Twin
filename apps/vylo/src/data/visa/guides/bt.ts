import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'BT',
  checked: '2026-10',
  fees: { evisa: { kind: 'fixed', amount: 40, currency: 'USD' } },
  links: { evisa: 'https://visit.doi.gov.bt', immigration: 'https://www.doi.gov.bt' },
  forms: [{ name: 'Sustainable Development Fee (SDF)', fee: { kind: 'from', amount: 100, currency: 'USD', per: 'night' } }],
  docs: ['insurance', 'booking', 'returnTicket'],
  passportMonths: 6,
  visaRun: 'no',
  hackScope: [['regime:evisa'], null, null, null],
  pitfallScope: [['regime:evisa'], ['regime:evisa'], null],
  text: {
    ru: {
      summary:
        'Всем иностранцам, кроме граждан Индии, Бангладеш и Мальдив, нужна электронная виза за 40 $ и оплата Сбора на устойчивое развитие (SDF) — 100 $ за каждую ночь в стране. Граждане Индии въезжают без визы по разрешению, выдаваемому на границе, и платят SDF 1200 рупий за ночь. Тур через агентство с 2022 года не обязателен, но за пределами Тхимпху и Паро нужен лицензированный гид.',
      apply:
        'Визу оформляют на visit.doi.gov.bt — сами или через бутанского туроператора: анкета, фото, паспорт, медстраховка на весь срок, брони отелей и оплата визы вместе с SDF за все ночи. Одобрение обычно приходит за 5 рабочих дней. Виза привязана к датам: продление и новые ночи — только через Департамент иммиграции с доплатой SDF.',
      visaRun:
        'Визаран бессмыслен: виза выдаётся под конкретные даты, а SDF взимается за каждую ночь независимо от выездов и повторных въездов.',
      hacks: [
        'Ставка SDF 100 $ за ночь зафиксирована до 31 августа 2027 года. Дети 6–12 лет платят половину, до 6 лет — бесплатно.',
        'Въезд по суше через Пхунчолинг (напротив индийского Джайгаона, 4 часа от аэропорта Багдогра) часто обходится дешевле перелёта Drukair или Bhutan Airlines в Паро.',
        'На рейсе из Катманду или Дели в Паро садитесь слева по ходу полёта: в ясный день видно Эверест и Канченджангу.',
        'Даты фестивалей-цечу (Паро — весной, Тхимпху — осенью) меняются по лунному календарю; отели в эти недели бронируют за полгода.',
      ],
      pitfalls: [
        'SDF платится за ночь, а не за поездку: неделя обходится в 700 $ сбора сверх отелей и гида — закладывайте это в бюджет заранее.',
        'Без страховки, покрывающей весь срок пребывания, визу не одобрят; проверьте, что даты полиса совпадают с маршрутом.',
        'Отклонение от одобренного маршрута за пределы Тхимпху и Паро без гида и пермита на поездку грозит штрафом.',
      ],
      passports: {
        RU: 'Россиянам нужна электронная виза и SDF на общих основаниях. Российские карты не работают: везите доллары, их меняют на нгултрумы в банках, а SDF удобнее оплатить через туроператора.',
        IN: 'Граждане Индии въезжают без визы: разрешение выдают в Пхунчолинге или аэропорту Паро по паспорту или удостоверению избирателя (Aadhaar не принимают). SDF — 1200 рупий за ночь.',
        US: 'Граждане США оформляют e-визу и платят SDF 100 $ за ночь; рейсы в Паро идут через Дели, Катманду, Бангкок или Сингапур.',
      },
    },
    en: {
      summary:
        'Every foreigner except citizens of India, Bangladesh and the Maldives needs a $40 e-visa plus the Sustainable Development Fee (SDF) of $100 for every night in the country. Indian citizens enter visa-free with a permit issued at the border and pay an SDF of INR 1,200 a night. Booking through an agency has not been compulsory since 2022, but beyond Thimphu and Paro you need a licensed guide.',
      apply:
        'Apply at visit.doi.gov.bt, yourself or through a Bhutanese tour operator: form, photo, passport, medical insurance covering the whole stay, hotel bookings, and payment of the visa together with the SDF for all nights. Approval usually takes 5 working days. The visa is tied to your dates: extensions and extra nights go through the Department of Immigration with additional SDF.',
      visaRun:
        'Visa runs make no sense here: the visa is issued for specific dates and the SDF is charged for every night regardless of exits and re-entries.',
      hacks: [
        'The SDF rate of $100 a night is fixed until 31 August 2027. Children aged 6–12 pay half, and under-6s pay nothing.',
        'Entering overland at Phuentsholing (opposite Jaigaon in India, four hours from Bagdogra airport) often works out cheaper than a Drukair or Bhutan Airlines flight into Paro.',
        'On the flight from Kathmandu or Delhi to Paro, sit on the left: on a clear day you see Everest and Kangchenjunga.',
        'Tshechu festival dates (Paro in spring, Thimphu in autumn) follow the lunar calendar; hotels for those weeks are booked six months ahead.',
      ],
      pitfalls: [
        'The SDF is per night, not per trip: a week costs $700 in fees on top of hotels and the guide — budget for it in advance.',
        'Without insurance covering your entire stay, the visa will not be approved; make sure the policy dates match your itinerary.',
        'Straying beyond Thimphu and Paro without a guide and a route permit can bring a fine.',
      ],
      passports: {
        RU: 'Russian citizens need the e-visa and SDF like everyone else. Russian cards do not work, so bring dollars to change into ngultrum at banks; paying the SDF through a tour operator is easiest.',
        IN: 'Indian citizens enter visa-free: the permit is issued at Phuentsholing or Paro airport against a passport or voter ID (Aadhaar is not accepted). The SDF is INR 1,200 a night.',
        US: 'US citizens get the e-visa and pay the $100-a-night SDF; flights to Paro go via Delhi, Kathmandu, Bangkok or Singapore.',
      },
    },
    es: {
      summary:
        'Todos los extranjeros, salvo los ciudadanos de India, Bangladés y Maldivas, necesitan un visado electrónico de 40 $ y pagar la Tasa de Desarrollo Sostenible (SDF): 100 $ por cada noche en el país. Los indios entran sin visado con un permiso expedido en la frontera y pagan una SDF de 1200 rupias por noche. Desde 2022 no es obligatorio viajar con agencia, pero fuera de Timbu y Paro hace falta un guía con licencia.',
      apply:
        'Se solicita en visit.doi.gov.bt, por tu cuenta o con un operador butanés: formulario, foto, pasaporte, seguro médico para toda la estancia, reservas de hotel y el pago del visado junto con la SDF de todas las noches. La aprobación suele tardar 5 días laborables. El visado va ligado a tus fechas: prórrogas y noches extra se tramitan en el Departamento de Inmigración pagando más SDF.',
      visaRun:
        'El visa run no tiene sentido: el visado se emite para fechas concretas y la SDF se cobra por cada noche, salgas y vuelvas a entrar o no.',
      hacks: [
        'La SDF de 100 $ por noche está fijada hasta el 31 de agosto de 2027. Los niños de 6 a 12 años pagan la mitad, y los menores de 6, nada.',
        'Entrar por tierra por Phuentsholing (frente a Jaigaon, en India, a cuatro horas del aeropuerto de Bagdogra) suele salir más barato que volar a Paro con Drukair o Bhutan Airlines.',
        'En el vuelo de Katmandú o Delhi a Paro, siéntate a la izquierda: con el cielo despejado se ven el Everest y el Kanchenjunga.',
        'Las fechas de los festivales tshechu (Paro en primavera, Timbu en otoño) siguen el calendario lunar; los hoteles de esas semanas se reservan con seis meses de antelación.',
      ],
      pitfalls: [
        'La SDF es por noche, no por viaje: una semana supone 700 $ de tasa además de hoteles y guía; inclúyelo en el presupuesto desde el principio.',
        'Sin un seguro que cubra toda la estancia no aprueban el visado; comprueba que las fechas de la póliza coinciden con tu itinerario.',
        'Salir de Timbu y Paro sin guía ni permiso de ruta puede costarte una multa.',
      ],
      passports: {
        RU: 'Los ciudadanos rusos necesitan visado electrónico y SDF como todos. Las tarjetas rusas no funcionan: lleva dólares para cambiarlos a ngultrum en bancos; lo más cómodo es pagar la SDF a través de un operador.',
        IN: 'Los ciudadanos indios entran sin visado: el permiso se expide en Phuentsholing o en el aeropuerto de Paro con pasaporte o tarjeta de elector (no se acepta el Aadhaar). La SDF es de 1200 rupias por noche.',
        US: 'Los estadounidenses tramitan el visado electrónico y pagan la SDF de 100 $ por noche; los vuelos a Paro pasan por Delhi, Katmandú, Bangkok o Singapur.',
      },
    },
    de: {
      summary:
        'Alle Ausländer außer Bürgern Indiens, Bangladeschs und der Malediven brauchen ein E-Visum für 40 $ und zahlen die Sustainable Development Fee (SDF) von 100 $ pro Nacht im Land. Inder reisen mit einer an der Grenze ausgestellten Genehmigung visumfrei ein und zahlen 1.200 Rupien SDF pro Nacht. Eine Agenturreise ist seit 2022 keine Pflicht mehr, außerhalb von Thimphu und Paro brauchst du aber einen lizenzierten Guide.',
      apply:
        'Beantragt wird auf visit.doi.gov.bt, selbst oder über einen bhutanischen Veranstalter: Formular, Foto, Pass, Krankenversicherung für den ganzen Aufenthalt, Hotelbuchungen und Zahlung von Visum und SDF für alle Nächte. Die Genehmigung dauert meist 5 Werktage. Das Visum ist an deine Daten gebunden: Verlängerungen und zusätzliche Nächte laufen über das Department of Immigration mit weiterer SDF.',
      visaRun:
        'Visa-Runs ergeben hier keinen Sinn: Das Visum gilt für feste Daten, und die SDF fällt für jede Nacht an, egal ob du aus- und wieder einreist.',
      hacks: [
        'Der SDF-Satz von 100 $ pro Nacht ist bis 31. August 2027 festgeschrieben. Kinder von 6 bis 12 zahlen die Hälfte, unter 6 gar nichts.',
        'Die Einreise über Land in Phuentsholing (gegenüber dem indischen Jaigaon, vier Stunden vom Flughafen Bagdogra) ist oft günstiger als ein Flug mit Drukair oder Bhutan Airlines nach Paro.',
        'Setz dich auf dem Flug von Kathmandu oder Delhi nach Paro links: Bei klarer Sicht siehst du Everest und Kangchendzönga.',
        'Die Termine der Tshechu-Feste (Paro im Frühling, Thimphu im Herbst) folgen dem Mondkalender; Hotels für diese Wochen sind ein halbes Jahr vorher gebucht.',
      ],
      pitfalls: [
        'Die SDF gilt pro Nacht, nicht pro Reise: Eine Woche kostet 700 $ Gebühr zusätzlich zu Hotels und Guide – plane das von Anfang an ein.',
        'Ohne Versicherung für den gesamten Aufenthalt wird das Visum nicht genehmigt; prüfe, ob die Policendaten zur Route passen.',
        'Wer ohne Guide und Routengenehmigung über Thimphu und Paro hinausfährt, riskiert ein Bußgeld.',
      ],
      passports: {
        RU: 'Russische Staatsangehörige brauchen E-Visum und SDF wie alle. Russische Karten funktionieren nicht – nimm Dollar mit und tausche sie bei Banken in Ngultrum; die SDF zahlst du am einfachsten über einen Veranstalter.',
        IN: 'Indische Staatsangehörige reisen visumfrei ein: Die Genehmigung gibt es in Phuentsholing oder am Flughafen Paro gegen Reisepass oder Wählerausweis (Aadhaar wird nicht akzeptiert). Die SDF beträgt 1.200 Rupien pro Nacht.',
        US: 'US-Bürger beantragen das E-Visum und zahlen 100 $ SDF pro Nacht; Flüge nach Paro gehen über Delhi, Kathmandu, Bangkok oder Singapur.',
      },
    },
    fr: {
      summary:
        'Tous les étrangers, sauf les citoyens d’Inde, du Bangladesh et des Maldives, ont besoin d’un e-visa à 40 $ et doivent payer la taxe de développement durable (SDF) : 100 $ par nuit passée dans le pays. Les Indiens entrent sans visa avec un permis délivré à la frontière et paient une SDF de 1 200 roupies par nuit. Passer par une agence n’est plus obligatoire depuis 2022, mais hors de Thimphou et Paro il faut un guide agréé.',
      apply:
        'La demande se fait sur visit.doi.gov.bt, seul ou via un voyagiste bhoutanais : formulaire, photo, passeport, assurance médicale couvrant tout le séjour, réservations d’hôtel et paiement du visa avec la SDF pour toutes les nuits. L’accord arrive en général sous 5 jours ouvrés. Le visa est lié à vos dates : prolongations et nuits supplémentaires passent par le Département de l’immigration, SDF en plus.',
      visaRun:
        'Le visa run n’a aucun intérêt : le visa est délivré pour des dates précises et la SDF est due pour chaque nuit, que vous sortiez et reveniez ou non.',
      hacks: [
        'Le tarif de la SDF à 100 $ la nuit est gelé jusqu’au 31 août 2027. Les enfants de 6 à 12 ans paient moitié prix, et les moins de 6 ans rien.',
        'Entrer par la route à Phuentsholing (en face de Jaigaon, en Inde, à quatre heures de l’aéroport de Bagdogra) revient souvent moins cher qu’un vol Drukair ou Bhutan Airlines pour Paro.',
        'Sur le vol de Katmandou ou Delhi vers Paro, asseyez-vous à gauche : par temps clair, on voit l’Everest et le Kangchenjunga.',
        'Les dates des festivals tshechu (Paro au printemps, Thimphou à l’automne) suivent le calendrier lunaire ; les hôtels de ces semaines se réservent six mois à l’avance.',
      ],
      pitfalls: [
        'La SDF est due par nuit, pas par voyage : une semaine représente 700 $ de taxe en plus des hôtels et du guide — prévoyez-le dans le budget.',
        'Sans assurance couvrant tout le séjour, le visa n’est pas accordé ; vérifiez que les dates du contrat correspondent à l’itinéraire.',
        'Sortir de Thimphou et Paro sans guide ni permis de circulation peut valoir une amende.',
      ],
      passports: {
        RU: 'Les citoyens russes ont besoin de l’e-visa et de la SDF comme tout le monde. Les cartes russes ne fonctionnent pas : apportez des dollars à changer en ngultrums dans les banques ; le plus simple est de régler la SDF via un voyagiste.',
        IN: 'Les citoyens indiens entrent sans visa : le permis est délivré à Phuentsholing ou à l’aéroport de Paro sur présentation du passeport ou de la carte d’électeur (l’Aadhaar n’est pas accepté). La SDF est de 1 200 roupies par nuit.',
        US: 'Les citoyens américains demandent l’e-visa et paient la SDF de 100 $ par nuit ; les vols pour Paro passent par Delhi, Katmandou, Bangkok ou Singapour.',
      },
    },
    it: {
      summary:
        'Tutti gli stranieri, tranne i cittadini di India, Bangladesh e Maldive, hanno bisogno di un visto elettronico da 40 $ e devono pagare la tassa per lo sviluppo sostenibile (SDF): 100 $ per ogni notte nel paese. Gli indiani entrano senza visto con un permesso rilasciato alla frontiera e pagano una SDF di 1200 rupie a notte. Dal 2022 non è più obbligatorio viaggiare con un’agenzia, ma fuori da Thimphu e Paro serve una guida con licenza.',
      apply:
        'Si fa domanda su visit.doi.gov.bt, da soli o tramite un operatore bhutanese: modulo, foto, passaporto, assicurazione sanitaria per tutto il soggiorno, prenotazioni alberghiere e pagamento del visto insieme alla SDF per tutte le notti. L’approvazione arriva di solito in 5 giorni lavorativi. Il visto è legato alle tue date: proroghe e notti in più passano dal Dipartimento dell’immigrazione con altra SDF.',
      visaRun:
        'Il visa run qui non ha senso: il visto è rilasciato per date precise e la SDF si paga per ogni notte, che tu esca e rientri o no.',
      hacks: [
        'La SDF di 100 $ a notte è bloccata fino al 31 agosto 2027. I bambini da 6 a 12 anni pagano metà, sotto i 6 anni niente.',
        'Entrare via terra da Phuentsholing (di fronte a Jaigaon, in India, a quattro ore dall’aeroporto di Bagdogra) spesso costa meno di un volo Drukair o Bhutan Airlines per Paro.',
        'Sul volo da Kathmandu o Delhi a Paro siediti a sinistra: con il cielo sereno si vedono l’Everest e il Kangchenjunga.',
        'Le date dei festival tshechu (Paro in primavera, Thimphu in autunno) seguono il calendario lunare; gli hotel per quelle settimane si prenotano sei mesi prima.',
      ],
      pitfalls: [
        'La SDF si paga per notte, non per viaggio: una settimana costa 700 $ di tassa oltre a hotel e guida, mettilo in conto da subito.',
        'Senza un’assicurazione che copra tutto il soggiorno il visto non viene approvato; verifica che le date della polizza coincidano con l’itinerario.',
        'Uscire da Thimphu e Paro senza guida né permesso di percorso può costare una multa.',
      ],
      passports: {
        RU: 'I cittadini russi hanno bisogno di visto elettronico e SDF come tutti. Le carte russe non funzionano: porta dollari da cambiare in ngultrum in banca; la SDF si paga più comodamente tramite un operatore.',
        IN: 'I cittadini indiani entrano senza visto: il permesso si ottiene a Phuentsholing o all’aeroporto di Paro con passaporto o tessera elettorale (l’Aadhaar non è accettato). La SDF è di 1200 rupie a notte.',
        US: 'I cittadini statunitensi richiedono il visto elettronico e pagano 100 $ di SDF a notte; i voli per Paro passano da Delhi, Kathmandu, Bangkok o Singapore.',
      },
    },
  },
};

export default guide;
