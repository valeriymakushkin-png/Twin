import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'SC',
  checked: '2026-10',
  links: { eta: 'https://seychelles.govtas.com' },
  forms: [
    { name: 'Seychelles Travel Authorisation', url: 'https://seychelles.govtas.com', fee: { kind: 'from', amount: 10, currency: 'EUR' } },
  ],
  docs: ['returnTicket', 'booking', 'finance'],
  passportMonths: 0,
  extend: {},
  visaRun: 'no',
  nomad: { name: 'Workcation Retreat Programme', months: 12 },
  hackScope: [null, null, null, null],
  pitfallScope: [null, null, null],
  text: {
    ru: {
      summary:
        'Сейшелы безвизовы для граждан любой страны, но каждому — даже младенцу — нужно до вылета получить электронное разрешение Travel Authorisation (TA) на seychelles.govtas.com. По прилёте дают разрешение на пребывание на срок брони, до трёх месяцев, с продлением до года.',
      apply:
        'Подайте заявку на seychelles.govtas.com: паспорт, обратный билет, бронь жилья на все ночи и подтверждение средств. Обычное рассмотрение стоит от 10 € и занимает до нескольких дней, ускоренное — дороже. Без одобренного TA авиакомпания не посадит на рейс.',
      extend:
        'Разрешение на пребывание продлевают в иммиграционном офисе в Виктории (Independence House) шагами до трёх месяцев, всего до 12 месяцев, если показать жильё и деньги; за продление берут сбор.',
      visaRun:
        'Визараны не нужны: продлением можно остаться до года, скользящего окна нет. Короткий выезд за границу тоже ничего не даёт — для каждого нового въезда нужны новое TA и бронь жилья.',
      nomad:
        'Seychelles Workcation Retreat Programme позволяет удалённо работать на островах от месяца до года. Нужны подтверждение работы или бизнеса за рубежом, медицинская страховка и жильё; сбор за заявку около 45 €, доходы должны покрывать пребывание.',
      hacks: [
        'Пограничники проверяют, что бронь покрывает каждую ночь, включая Праслин и Ла-Диг, — держите все подтверждения в телефоне.',
        'Ориентир по деньгам — около 150 $ в день; обычно хватает кредитной карты на ваше имя или выписки.',
        'Паромы между Маэ, Праслином и Ла-Диг внутренние: одно TA действует на весь архипелаг.',
        'Подавайте TA минимум за три дня: иногда одобряют за минуты, но в высокий сезон статус «на рассмотрении» перед вылетом не редкость.',
      ],
      pitfalls: [
        'Сайты-двойники берут 50–80 € за TA. Официальный — только seychelles.govtas.com.',
        'Остановиться у друзей или на яхте без подтверждения: для частного жилья нужны данные хозяина и его согласие.',
        'Нет обратного билета — без него не впустят.',
      ],
      passports: {
        RU: 'Россияне въезжают без визы, как все. TA оплачивайте картой зарубежного банка; Аэрофлот выполнял прямые рейсы Москва — Маэ — проверьте расписание на ваши даты.',
      },
    },
    en: {
      summary:
        'Seychelles is visa-free for every nationality, but everyone — even babies — must get a Travel Authorisation (TA) on seychelles.govtas.com before flying. On arrival you receive a visitor’s permit for the length of your booking, up to three months, extendable to a year.',
      apply:
        'Apply on seychelles.govtas.com with your passport, a return ticket, accommodation bookings for every night and proof of funds. Standard processing costs from €10 and takes up to a few days; faster options cost more. Without an approved TA airlines won’t board you.',
      extend:
        'The visitor’s permit is extended at the Immigration Office in Victoria (Independence House) in steps of up to three months, to 12 months in total, if you show accommodation and funds; there’s a fee.',
      visaRun:
        'There’s no need: extensions let you stay up to a year, and there’s no rolling window. A short trip abroad doesn’t help either — each new entry needs a new TA and an accommodation booking.',
      nomad:
        'The Seychelles Workcation Retreat Programme lets you work remotely from the islands for one month to a year. You need proof of employment or a business abroad, health insurance and accommodation; the application fee is about €45, and your income must cover the stay.',
      hacks: [
        'Officers check that your bookings cover every night, including on Praslin and La Digue — keep all confirmations on your phone.',
        'The funds guideline is about $150 a day; a credit card in your name or a bank statement usually suffices.',
        'Ferries between Mahé, Praslin and La Digue are domestic: one TA covers the whole archipelago.',
        'Apply for the TA at least three days ahead: some come through in minutes, but a “pending” status close to departure is common in peak season.',
      ],
      pitfalls: [
        'Look-alike sites charge €50–80 for the TA. The official one is seychelles.govtas.com.',
        'Staying with friends or on a boat without paperwork: private accommodation needs the host’s details and consent.',
        'No return ticket — you won’t be let in without one.',
      ],
      passports: {
        RU: 'Russian citizens enter visa-free like everyone else. Pay for the TA with a card from a foreign bank; Aeroflot has operated direct Moscow–Mahé flights, so check the schedule for your dates.',
      },
    },
    es: {
      summary:
        'Seychelles no pide visado a ninguna nacionalidad, pero todo el mundo, incluso los bebés, debe obtener antes del vuelo una Travel Authorisation (TA) en seychelles.govtas.com. A la llegada te dan un permiso de visitante por la duración de tu reserva, hasta tres meses, prorrogable hasta un año.',
      apply:
        'Solicítala en seychelles.govtas.com con el pasaporte, el billete de vuelta, reservas de alojamiento para todas las noches y prueba de fondos. La tramitación normal cuesta desde 10 € y tarda hasta unos días; las opciones rápidas son más caras. Sin TA aprobada, la aerolínea no te deja embarcar.',
      extend:
        'El permiso de visitante se prorroga en la Oficina de Inmigración de Victoria (Independence House) en tramos de hasta tres meses, hasta 12 meses en total, si demuestras alojamiento y fondos; se paga una tasa.',
      visaRun:
        'No hace falta: con prórrogas puedes quedarte hasta un año y no hay ventana móvil. Salir un momento al extranjero tampoco ayuda: cada nueva entrada exige otra TA y una reserva de alojamiento.',
      nomad:
        'El Seychelles Workcation Retreat Programme te permite teletrabajar desde las islas de un mes a un año. Necesitas prueba de empleo o negocio en el extranjero, seguro médico y alojamiento; la solicitud cuesta unos 45 € y tus ingresos deben cubrir la estancia.',
      hacks: [
        'Los agentes comprueban que las reservas cubran todas las noches, también en Praslin y La Digue: ten todas las confirmaciones en el móvil.',
        'La referencia de fondos es de unos 150 $ al día; normalmente basta con una tarjeta de crédito a tu nombre o un extracto.',
        'Los ferris entre Mahé, Praslin y La Digue son nacionales: una TA vale para todo el archipiélago.',
        'Pide la TA al menos tres días antes: a veces llega en minutos, pero en temporada alta es habitual ver “pendiente” justo antes de salir.',
      ],
      pitfalls: [
        'Las webs clonadas cobran 50–80 € por la TA. La oficial es seychelles.govtas.com.',
        'Alojarte con amigos o en un barco sin papeles: el alojamiento privado exige los datos y el consentimiento del anfitrión.',
        'Sin billete de vuelta no te dejarán entrar.',
      ],
      passports: {
        RU: 'Los ciudadanos rusos entran sin visado como todos. Paga la TA con la tarjeta de un banco extranjero; Aeroflot ha operado vuelos directos Moscú–Mahé, así que consulta el horario para tus fechas.',
      },
    },
    de: {
      summary:
        'Die Seychellen sind für alle Nationalitäten visumfrei, aber jede Person – auch Babys – braucht vor dem Flug eine Travel Authorisation (TA) von seychelles.govtas.com. Bei Ankunft gibt es eine Aufenthaltserlaubnis für die Dauer deiner Buchung, bis zu drei Monate, verlängerbar auf ein Jahr.',
      apply:
        'Beantrage sie auf seychelles.govtas.com mit Pass, Rückflugticket, Unterkunftsbuchungen für jede Nacht und Finanznachweis. Die normale Bearbeitung kostet ab 10 € und dauert bis zu einigen Tagen, schnellere Optionen kosten mehr. Ohne genehmigte TA lässt dich die Airline nicht an Bord.',
      extend:
        'Verlängert wird beim Immigration Office in Victoria (Independence House) in Schritten von bis zu drei Monaten, insgesamt bis zu 12 Monate, wenn du Unterkunft und Mittel nachweist; es fällt eine Gebühr an.',
      visaRun:
        'Unnötig: Mit Verlängerungen kannst du bis zu ein Jahr bleiben, ein rollierendes Zeitfenster gibt es nicht. Eine kurze Auslandsreise bringt auch nichts – jede neue Einreise braucht eine neue TA und eine Unterkunftsbuchung.',
      nomad:
        'Mit dem Seychelles Workcation Retreat Programme kannst du einen Monat bis ein Jahr remote von den Inseln arbeiten. Nötig sind ein Nachweis über Job oder Firma im Ausland, Krankenversicherung und Unterkunft; die Antragsgebühr liegt bei rund 45 €, und dein Einkommen muss den Aufenthalt decken.',
      hacks: [
        'Die Beamten prüfen, ob die Buchungen jede Nacht abdecken, auch auf Praslin und La Digue – hab alle Bestätigungen auf dem Handy.',
        'Als Richtwert gelten rund 150 $ pro Tag; meist reicht eine Kreditkarte auf deinen Namen oder ein Kontoauszug.',
        'Fähren zwischen Mahé, Praslin und La Digue sind Inlandsverbindungen: Eine TA gilt für den ganzen Archipel.',
        'Beantrage die TA mindestens drei Tage vorher: Manchmal kommt sie in Minuten, in der Hochsaison ist „pending“ kurz vor Abflug aber häufig.',
      ],
      pitfalls: [
        'Nachahmerseiten verlangen 50–80 € für die TA. Die offizielle ist seychelles.govtas.com.',
        'Bei Freunden oder auf einem Boot wohnen ohne Unterlagen: Für private Unterkünfte braucht es die Daten und die Zustimmung des Gastgebers.',
        'Kein Rückflugticket – ohne wirst du nicht eingelassen.',
      ],
      passports: {
        RU: 'Russische Staatsangehörige reisen wie alle visumfrei ein. Bezahle die TA mit der Karte einer ausländischen Bank; Aeroflot hat Direktflüge Moskau–Mahé angeboten, prüfe den Flugplan für deine Daten.',
      },
    },
    fr: {
      summary:
        'Les Seychelles n’exigent de visa d’aucune nationalité, mais chacun — même les bébés — doit obtenir avant le vol une Travel Authorisation (TA) sur seychelles.govtas.com. À l’arrivée, vous recevez un permis de visiteur pour la durée de votre réservation, jusqu’à trois mois, prolongeable jusqu’à un an.',
      apply:
        'Faites la demande sur seychelles.govtas.com avec passeport, billet retour, réservations d’hébergement pour chaque nuit et justificatif de ressources. Le traitement standard coûte à partir de 10 € et prend jusqu’à quelques jours ; les options rapides sont plus chères. Sans TA approuvée, la compagnie refuse l’embarquement.',
      extend:
        'Le permis de visiteur se prolonge au bureau de l’immigration de Victoria (Independence House) par tranches de trois mois maximum, jusqu’à 12 mois au total, sur présentation de l’hébergement et des ressources ; la démarche est payante.',
      visaRun:
        'Inutile : les prolongations permettent de rester jusqu’à un an, sans fenêtre glissante. Un court séjour à l’étranger n’apporte rien non plus : chaque nouvelle entrée exige une nouvelle TA et une réservation d’hébergement.',
      nomad:
        'Le Seychelles Workcation Retreat Programme permet de télétravailler depuis les îles d’un mois à un an. Il faut justifier d’un emploi ou d’une activité à l’étranger, d’une assurance santé et d’un hébergement ; les frais de dossier sont d’environ 45 €, et vos revenus doivent couvrir le séjour.',
      hacks: [
        'Les agents vérifient que vos réservations couvrent chaque nuit, y compris à Praslin et La Digue : gardez toutes les confirmations sur votre téléphone.',
        'Le repère pour les ressources est d’environ 150 $ par jour ; une carte de crédit à votre nom ou un relevé suffit généralement.',
        'Les ferries entre Mahé, Praslin et La Digue sont intérieurs : une seule TA couvre tout l’archipel.',
        'Demandez la TA au moins trois jours avant : elle arrive parfois en quelques minutes, mais en haute saison un statut « en attente » juste avant le départ est fréquent.',
      ],
      pitfalls: [
        'Des sites copiés facturent la TA 50 à 80 €. Le site officiel est seychelles.govtas.com.',
        'Loger chez des amis ou sur un bateau sans papiers : un hébergement privé exige les coordonnées et l’accord de l’hôte.',
        'Pas de billet retour : sans lui, l’entrée est refusée.',
      ],
      passports: {
        RU: 'Les ressortissants russes entrent sans visa comme tout le monde. Payez la TA avec la carte d’une banque étrangère ; Aeroflot a assuré des vols directs Moscou–Mahé, vérifiez le programme pour vos dates.',
      },
    },
    it: {
      summary:
        'Le Seychelles non chiedono il visto a nessuna nazionalità, ma tutti, anche i neonati, devono ottenere prima del volo una Travel Authorisation (TA) su seychelles.govtas.com. All’arrivo ricevi un permesso di visitatore per la durata della prenotazione, fino a tre mesi, prorogabile fino a un anno.',
      apply:
        'Fai domanda su seychelles.govtas.com con passaporto, biglietto di ritorno, prenotazioni dell’alloggio per tutte le notti e prova dei mezzi. L’elaborazione standard costa da 10 € e richiede fino a qualche giorno; le opzioni rapide costano di più. Senza TA approvata la compagnia non ti imbarca.',
      extend:
        'Il permesso di visitatore si proroga all’Ufficio immigrazione di Victoria (Independence House) a blocchi di massimo tre mesi, fino a 12 mesi in tutto, se dimostri alloggio e mezzi; si paga una tassa.',
      visaRun:
        'Non servono: con le proroghe puoi restare fino a un anno e non esiste una finestra mobile. Neanche una breve uscita all’estero aiuta: ogni nuovo ingresso richiede una nuova TA e una prenotazione dell’alloggio.',
      nomad:
        'Il Seychelles Workcation Retreat Programme ti permette di lavorare da remoto dalle isole da un mese a un anno. Servono prova di un impiego o di un’attività all’estero, assicurazione sanitaria e alloggio; la domanda costa circa 45 € e il reddito deve coprire il soggiorno.',
      hacks: [
        'Gli agenti controllano che le prenotazioni coprano ogni notte, anche a Praslin e La Digue: tieni tutte le conferme sul telefono.',
        'Il riferimento per i mezzi è di circa 150 $ al giorno; di solito basta una carta di credito a tuo nome o un estratto conto.',
        'I traghetti tra Mahé, Praslin e La Digue sono interni: una sola TA vale per tutto l’arcipelago.',
        'Chiedi la TA almeno tre giorni prima: a volte arriva in pochi minuti, ma in alta stagione lo stato “in attesa” poco prima della partenza è frequente.',
      ],
      pitfalls: [
        'I siti clone fanno pagare la TA 50–80 €. Quello ufficiale è seychelles.govtas.com.',
        'Stare da amici o in barca senza documenti: per l’alloggio privato servono i dati e il consenso di chi ti ospita.',
        'Niente biglietto di ritorno: senza non ti fanno entrare.',
      ],
      passports: {
        RU: 'I cittadini russi entrano senza visto come tutti. Paga la TA con la carta di una banca estera; Aeroflot ha operato voli diretti Mosca–Mahé, controlla l’orario per le tue date.',
      },
    },
  },
};

export default guide;
