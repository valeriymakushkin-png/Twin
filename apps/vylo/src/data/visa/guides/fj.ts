import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'FJ',
  checked: '2026-10',
  links: { immigration: 'https://www.immigration.gov.fj' },
  docs: ['returnTicket', 'booking', 'finance'],
  passportMonths: 6,
  extend: { days: 60 },
  visaRun: 'limited',
  borders: [
    { name: 'Nadi (NAN) → Auckland', to: 'NZ', lat: -17.7554, lng: 177.4431 },
    { name: 'Nadi (NAN) → Port Vila', to: 'VU', lat: -17.7554, lng: 177.4431 },
    { name: 'Nausori (SUV) → Auckland', to: 'NZ', lat: -18.0433, lng: 178.5592 },
  ],
  hackScope: [null, null, null, null],
  pitfallScope: [['regime:free'], null, null, null],
  text: {
    ru: {
      summary:
        'Граждане более 100 стран — ЕС, Великобритании, США, Канады, Австралии, Новой Зеландии, России, Украины, Грузии, Китая, Индии, Японии, Кореи, Израиля и ОАЭ — получают по прилёте бесплатное разрешение на пребывание до 4 месяцев. Остальным, например гражданам Казахстана, Беларуси, Узбекистана и Армении, визу нужно оформить заранее.',
      apply:
        'Визу оформляют заранее через Департамент иммиграции Фиджи — напрямую или через посольство Фиджи (их немного: например, в Канберре, Веллингтоне, Пекине и Токио). Понадобятся паспорт, фото, маршрут, обратный билет, брони отелей и выписка из банка; закладывайте несколько недель. На границе все без исключения показывают обратный билет, бронь жилья и достаточно денег.',
      extend:
        'Четырёхмесячное разрешение можно продлить ещё на 2 месяца (всего до 6) в Департаменте иммиграции в Суве, Нади или Лаутоке. Подавайте до окончания срока, с билетом на выезд и подтверждением средств; за продление берут сбор.',
      visaRun:
        'Выезд и возвращение дают новое разрешение, но иммиграционная служба внимательно смотрит на тех, кто постоянно возвращается: долгие серии визитов могут закончиться отказом во въезде. Короткие поездки — в Окленд (около 3 часов) или в Порт-Вилу на Вануату (около 2 часов).',
      hacks: [
        'Fiji Airways часто позволяет без доплаты за билет добавить остановку в Нади на пути между Северной Америкой или Азией и Австралией или Новой Зеландией — бесплатные несколько дней на островах.',
        'Fiji Airways летает напрямую из Гонконга, Сингапура и Токио (Нарита) — маршрут без транзитных виз США, Австралии или Новой Зеландии.',
        'Аэропортовый сбор уже включён в стоимость авиабилета — наличные в аэропорту не понадобятся.',
        'Яхтсмены должны оформиться в официальном порту въезда — Савусаву, Суве, Лаутоке, Левуке или Денарау — до остановок на других островах.',
      ],
      pitfalls: [
        'Разрешение на въезд бесплатное. Сайты, продающие «визу» или «ETA» для Фиджи, — посредники или мошенники.',
        'Без обратного или выездного билета вас не посадят на рейс: авиакомпании проверяют это строго.',
        'Паспорт должен быть действителен не менее 6 месяцев после окончания поездки.',
        'Работать, в том числе на курортах и в дайв-центрах, по туристическому разрешению нельзя; даже волонтёрство требует отдельного разрешения.',
      ],
      passports: {
        RU: 'Россияне въезжают без визы до 4 месяцев. Удобнее лететь через Гонконг, Сингапур или Токио: там нет требований о транзитной визе, в отличие от Австралии и Новой Зеландии. Российские карты не работают — берите наличные доллары США или австралийские доллары.',
        IN: 'Гражданам Индии виза не нужна — до 4 месяцев. Летите через Сингапур или Гонконг, чтобы не оформлять транзитные визы Австралии или Новой Зеландии.',
        US: 'Американцы въезжают без визы до 4 месяцев; Fiji Airways летает в Нади напрямую из Лос-Анджелеса и Сан-Франциско.',
        KZ: 'Гражданам Казахстана, по действующим правилам, нужна виза, оформленная заранее, — подавайте за несколько недель.',
      },
    },
    en: {
      summary:
        'Citizens of more than 100 countries — the EU, UK, US, Canada, Australia, New Zealand, Russia, Ukraine, Georgia, China, India, Japan, Korea, Israel and the UAE — receive a free visitor permit on arrival for up to 4 months. Others, such as citizens of Kazakhstan, Belarus, Uzbekistan and Armenia, need a visa issued in advance.',
      apply:
        'Visas are issued in advance by the Fiji Department of Immigration, directly or through a Fijian embassy or high commission (there are few — for example in Canberra, Wellington, Beijing and Tokyo). You need your passport, a photo, an itinerary, a return ticket, hotel bookings and bank statements; allow several weeks. At the border everyone shows a return ticket, an accommodation booking and sufficient funds.',
      extend:
        'The 4-month permit can be extended by another 2 months (up to 6 in total) at the Department of Immigration in Suva, Nadi or Lautoka. Apply before it expires, with an onward ticket and proof of funds; a fee applies.',
      visaRun:
        'Leaving and coming back gives you a new permit, but immigration keeps an eye on people who return constantly: long series of visits can end in refused entry. Short hops are to Auckland (about 3 hours) or Port Vila in Vanuatu (about 2 hours).',
      hacks: [
        'Fiji Airways often lets you add a Nadi stopover at no extra airfare on trips between North America or Asia and Australia or New Zealand — a few free days on the islands.',
        'Fiji Airways flies direct from Hong Kong, Singapore and Tokyo Narita — a route that avoids US, Australian or New Zealand transit visas.',
        'The departure tax is already included in your airline ticket, so you do not need cash at the airport.',
        'Yachts must clear in at an official port of entry — Savusavu, Suva, Lautoka, Levuka or Denarau — before stopping at other islands.',
      ],
      pitfalls: [
        'The visitor permit is free. Websites selling a Fiji “visa” or “ETA” are agencies or scams.',
        'Without a return or onward ticket you will not be allowed to board: airlines check this strictly.',
        'Your passport must be valid for at least 6 months beyond your stay.',
        'You may not work on a visitor permit, including at resorts and dive centres; even volunteering needs a separate permit.',
      ],
      passports: {
        RU: 'Russians enter visa-free for up to 4 months. It is easiest to fly via Hong Kong, Singapore or Tokyo, which have no transit-visa requirement, unlike Australia and New Zealand. Russian cards do not work, so bring US or Australian dollars in cash.',
        IN: 'Indian citizens need no visa for up to 4 months. Fly via Singapore or Hong Kong to avoid Australian or New Zealand transit visas.',
        US: 'US citizens enter visa-free for up to 4 months; Fiji Airways flies to Nadi nonstop from Los Angeles and San Francisco.',
        KZ: 'Under the current rules, Kazakh citizens need a visa issued in advance — apply several weeks ahead.',
      },
    },
    es: {
      summary:
        'Los ciudadanos de más de 100 países —la UE, Reino Unido, EE. UU., Canadá, Australia, Nueva Zelanda, Rusia, Ucrania, Georgia, China, India, Japón, Corea, Israel y Emiratos— reciben al llegar un permiso de visitante gratuito de hasta 4 meses. Otros, como los ciudadanos de Kazajistán, Bielorrusia, Uzbekistán y Armenia, necesitan un visado tramitado con antelación.',
      apply:
        'El visado lo expide con antelación el Departamento de Inmigración de Fiyi, directamente o a través de una embajada o alto comisionado fiyiano (hay pocos, por ejemplo en Canberra, Wellington, Pekín y Tokio). Necesitas pasaporte, foto, itinerario, billete de vuelta, reservas de hotel y extractos bancarios; calcula varias semanas. En la frontera todo el mundo muestra billete de vuelta, reserva de alojamiento y fondos suficientes.',
      extend:
        'El permiso de 4 meses se puede prorrogar otros 2 (hasta 6 en total) en el Departamento de Inmigración de Suva, Nadi o Lautoka. Solicítalo antes de que caduque, con billete de salida y prueba de fondos; se paga una tasa.',
      visaRun:
        'Salir y volver te da un permiso nuevo, pero inmigración vigila a quien regresa una y otra vez: las series largas de visitas pueden acabar en denegación de entrada. Las escapadas típicas son a Auckland (unas 3 horas) o a Port Vila, en Vanuatu (unas 2 horas).',
      hacks: [
        'Fiji Airways suele permitir añadir una escala en Nadi sin coste extra de billete en viajes entre Norteamérica o Asia y Australia o Nueva Zelanda: unos días gratis en las islas.',
        'Fiji Airways vuela directo desde Hong Kong, Singapur y Tokio-Narita, una ruta que evita los visados de tránsito de EE. UU., Australia o Nueva Zelanda.',
        'La tasa de salida ya va incluida en el billete de avión, así que no necesitas efectivo en el aeropuerto.',
        'Los yates deben hacer la entrada en un puerto oficial —Savusavu, Suva, Lautoka, Levuka o Denarau— antes de fondear en otras islas.',
      ],
      pitfalls: [
        'El permiso de visitante es gratuito. Las webs que venden un «visado» o una «ETA» para Fiyi son intermediarios o estafas.',
        'Sin billete de vuelta o de salida no te dejarán embarcar: las aerolíneas lo controlan con rigor.',
        'El pasaporte debe ser válido al menos 6 meses después del final de la estancia.',
        'Con el permiso de visitante no se puede trabajar, tampoco en resorts ni centros de buceo; incluso el voluntariado requiere un permiso aparte.',
      ],
      passports: {
        RU: 'Los rusos entran sin visado hasta 4 meses. Lo más fácil es volar por Hong Kong, Singapur o Tokio, que no exigen visado de tránsito, a diferencia de Australia y Nueva Zelanda. Las tarjetas rusas no funcionan: lleva dólares estadounidenses o australianos en efectivo.',
        IN: 'Los ciudadanos indios no necesitan visado hasta 4 meses. Vuela por Singapur o Hong Kong para evitar los visados de tránsito de Australia o Nueva Zelanda.',
        US: 'Los estadounidenses entran sin visado hasta 4 meses; Fiji Airways vuela directo a Nadi desde Los Ángeles y San Francisco.',
        KZ: 'Según las normas actuales, los kazajos necesitan un visado tramitado con antelación: solicítalo con varias semanas de margen.',
      },
    },
    de: {
      summary:
        'Bürger von mehr als 100 Staaten – EU, Großbritannien, USA, Kanada, Australien, Neuseeland, Russland, Ukraine, Georgien, China, Indien, Japan, Korea, Israel und VAE – erhalten bei der Ankunft eine kostenlose Besuchererlaubnis für bis zu 4 Monate. Andere, etwa Bürger Kasachstans, von Belarus, Usbekistans und Armeniens, brauchen ein vorab erteiltes Visum.',
      apply:
        'Visa erteilt vorab das Department of Immigration Fidschis, direkt oder über eine fidschianische Botschaft bzw. Hohe Kommission (es gibt nur wenige, etwa in Canberra, Wellington, Peking und Tokio). Nötig sind Pass, Foto, Reiseplan, Rückflugticket, Hotelbuchungen und Kontoauszüge; plane mehrere Wochen ein. An der Grenze zeigen alle ein Rückflugticket, eine Unterkunftsbuchung und ausreichende Mittel vor.',
      extend:
        'Die 4-Monats-Erlaubnis lässt sich beim Department of Immigration in Suva, Nadi oder Lautoka um weitere 2 Monate (insgesamt bis zu 6) verlängern. Stell den Antrag vor Ablauf, mit Weiterreiseticket und Mittelnachweis; eine Gebühr fällt an.',
      visaRun:
        'Aus- und Wiedereinreise bringen eine neue Erlaubnis, doch die Einwanderungsbehörde beobachtet Leute, die ständig wiederkommen: Lange Besuchsserien können mit Zurückweisung enden. Kurze Abstecher gehen nach Auckland (rund 3 Stunden) oder nach Port Vila auf Vanuatu (rund 2 Stunden).',
      hacks: [
        'Fiji Airways lässt dich auf Reisen zwischen Nordamerika oder Asien und Australien oder Neuseeland oft ohne Aufpreis einen Stopover in Nadi einbauen – ein paar Inseltage gratis.',
        'Fiji Airways fliegt direkt ab Hongkong, Singapur und Tokio-Narita – eine Route ohne Transitvisa für die USA, Australien oder Neuseeland.',
        'Die Ausreisesteuer ist schon im Flugticket enthalten, Bargeld am Flughafen brauchst du dafür nicht.',
        'Jachten müssen in einem offiziellen Einreisehafen einklarieren – Savusavu, Suva, Lautoka, Levuka oder Denarau –, bevor sie andere Inseln anlaufen.',
      ],
      pitfalls: [
        'Die Besuchererlaubnis ist kostenlos. Websites, die ein „Visum“ oder eine „ETA“ für Fidschi verkaufen, sind Vermittler oder Betrüger.',
        'Ohne Rück- oder Weiterreiseticket kommst du nicht an Bord: Airlines prüfen das streng.',
        'Der Pass muss mindestens 6 Monate über den Aufenthalt hinaus gültig sein.',
        'Mit der Besuchererlaubnis darfst du nicht arbeiten, auch nicht in Resorts oder Tauchbasen; selbst Freiwilligenarbeit braucht eine eigene Genehmigung.',
      ],
      passports: {
        RU: 'Russen reisen bis zu 4 Monate visumfrei ein. Am einfachsten fliegst du über Hongkong, Singapur oder Tokio, wo – anders als in Australien und Neuseeland – kein Transitvisum nötig ist. Russische Karten funktionieren nicht, nimm US- oder australische Dollar in bar mit.',
        IN: 'Inder brauchen für bis zu 4 Monate kein Visum. Flieg über Singapur oder Hongkong, um australische oder neuseeländische Transitvisa zu vermeiden.',
        US: 'US-Bürger reisen bis zu 4 Monate visumfrei ein; Fiji Airways fliegt nonstop von Los Angeles und San Francisco nach Nadi.',
        KZ: 'Nach den aktuellen Regeln brauchen kasachische Staatsangehörige ein vorab erteiltes Visum – beantrage es mehrere Wochen vorher.',
      },
    },
    fr: {
      summary:
        'Les ressortissants de plus de 100 pays — UE, Royaume-Uni, États-Unis, Canada, Australie, Nouvelle-Zélande, Russie, Ukraine, Géorgie, Chine, Inde, Japon, Corée, Israël et Émirats — reçoivent à l’arrivée un permis de visiteur gratuit valable jusqu’à 4 mois. Les autres, comme les ressortissants du Kazakhstan, de Biélorussie, d’Ouzbékistan et d’Arménie, doivent obtenir un visa à l’avance.',
      apply:
        'Les visas sont délivrés à l’avance par le Department of Immigration des Fidji, directement ou via une ambassade ou un haut-commissariat fidjien (ils sont rares, par exemple à Canberra, Wellington, Pékin et Tokyo). Il faut passeport, photo, itinéraire, billet retour, réservations d’hôtel et relevés bancaires ; comptez plusieurs semaines. À la frontière, tout le monde présente un billet retour, une réservation d’hébergement et des fonds suffisants.',
      extend:
        'Le permis de 4 mois peut être prolongé de 2 mois (jusqu’à 6 au total) au Department of Immigration à Suva, Nadi ou Lautoka. Faites la demande avant l’expiration, avec billet de sortie et preuve de ressources ; des frais s’appliquent.',
      visaRun:
        'Sortir et revenir donne un nouveau permis, mais l’immigration surveille ceux qui reviennent sans cesse : de longues séries de séjours peuvent se solder par un refus d’entrée. Les sauts de puce classiques : Auckland (environ 3 heures) ou Port-Vila au Vanuatu (environ 2 heures).',
      hacks: [
        'Fiji Airways permet souvent d’ajouter une escale à Nadi sans supplément tarifaire sur les trajets entre l’Amérique du Nord ou l’Asie et l’Australie ou la Nouvelle-Zélande : quelques jours d’îles offerts.',
        'Fiji Airways relie directement Hong Kong, Singapour et Tokyo-Narita : un itinéraire qui évite les visas de transit américains, australiens ou néo-zélandais.',
        'La taxe de départ est déjà comprise dans le billet d’avion, inutile de prévoir du liquide à l’aéroport.',
        'Les voiliers doivent faire leurs formalités d’entrée dans un port officiel — Savusavu, Suva, Lautoka, Levuka ou Denarau — avant de mouiller ailleurs.',
      ],
      pitfalls: [
        'Le permis de visiteur est gratuit. Les sites qui vendent un « visa » ou une « ETA » pour les Fidji sont des intermédiaires ou des arnaques.',
        'Sans billet retour ou de continuation, pas d’embarquement : les compagnies le vérifient strictement.',
        'Le passeport doit être valable au moins 6 mois après la fin du séjour.',
        'Interdit de travailler avec un permis de visiteur, y compris dans les resorts et centres de plongée ; même le bénévolat exige un permis à part.',
      ],
      passports: {
        RU: 'Les Russes entrent sans visa jusqu’à 4 mois. Le plus simple est de passer par Hong Kong, Singapour ou Tokyo, sans exigence de visa de transit, contrairement à l’Australie et à la Nouvelle-Zélande. Les cartes russes ne fonctionnent pas : emportez des dollars américains ou australiens en espèces.',
        IN: 'Les Indiens n’ont pas besoin de visa jusqu’à 4 mois. Passez par Singapour ou Hong Kong pour éviter les visas de transit australien ou néo-zélandais.',
        US: 'Les Américains entrent sans visa jusqu’à 4 mois ; Fiji Airways relie Nadi sans escale depuis Los Angeles et San Francisco.',
        KZ: 'Selon les règles actuelles, les Kazakhs ont besoin d’un visa obtenu à l’avance : faites la demande plusieurs semaines avant.',
      },
    },
    it: {
      summary:
        'I cittadini di oltre 100 paesi — UE, Regno Unito, Stati Uniti, Canada, Australia, Nuova Zelanda, Russia, Ucraina, Georgia, Cina, India, Giappone, Corea, Israele ed Emirati — ricevono all’arrivo un permesso di visita gratuito fino a 4 mesi. Altri, come i cittadini di Kazakistan, Bielorussia, Uzbekistan e Armenia, hanno bisogno di un visto rilasciato in anticipo.',
      apply:
        'I visti li rilascia in anticipo il Department of Immigration delle Figi, direttamente o tramite un’ambasciata o alto commissariato figiano (sono pochi, per esempio a Canberra, Wellington, Pechino e Tokyo). Servono passaporto, foto, itinerario, biglietto di ritorno, prenotazioni alberghiere ed estratti conto; calcola diverse settimane. Alla frontiera tutti mostrano biglietto di ritorno, prenotazione dell’alloggio e mezzi sufficienti.',
      extend:
        'Il permesso di 4 mesi si può prorogare di altri 2 (fino a 6 in tutto) al Department of Immigration di Suva, Nadi o Lautoka. Fai domanda prima della scadenza, con biglietto di uscita e prova dei mezzi; si paga una tassa.',
      visaRun:
        'Uscire e rientrare dà un nuovo permesso, ma l’immigrazione tiene d’occhio chi torna di continuo: lunghe serie di visite possono finire con un ingresso negato. Le uscite brevi tipiche sono Auckland (circa 3 ore) o Port Vila a Vanuatu (circa 2 ore).',
      hacks: [
        'Fiji Airways spesso permette di aggiungere uno stopover a Nadi senza costi extra sul biglietto nei viaggi tra Nord America o Asia e Australia o Nuova Zelanda: qualche giorno di isole in omaggio.',
        'Fiji Airways vola diretto da Hong Kong, Singapore e Tokyo Narita, un percorso che evita i visti di transito di Stati Uniti, Australia o Nuova Zelanda.',
        'La tassa di partenza è già inclusa nel biglietto aereo, quindi in aeroporto non servono contanti.',
        'Le barche a vela devono sbrigare le formalità d’ingresso in un porto ufficiale — Savusavu, Suva, Lautoka, Levuka o Denarau — prima di fermarsi in altre isole.',
      ],
      pitfalls: [
        'Il permesso di visita è gratuito. I siti che vendono un «visto» o una «ETA» per le Figi sono intermediari o truffe.',
        'Senza biglietto di ritorno o di prosecuzione non ti imbarcano: le compagnie lo controllano con rigore.',
        'Il passaporto deve essere valido almeno 6 mesi oltre la fine del soggiorno.',
        'Con il permesso di visita non si può lavorare, nemmeno nei resort o nei diving center; anche il volontariato richiede un permesso a parte.',
      ],
      passports: {
        RU: 'I russi entrano senza visto fino a 4 mesi. Conviene volare via Hong Kong, Singapore o Tokyo, dove non serve il visto di transito, a differenza di Australia e Nuova Zelanda. Le carte russe non funzionano: porta dollari statunitensi o australiani in contanti.',
        IN: 'Ai cittadini indiani non serve il visto fino a 4 mesi. Vola via Singapore o Hong Kong per evitare i visti di transito australiani o neozelandesi.',
        US: 'I cittadini statunitensi entrano senza visto fino a 4 mesi; Fiji Airways vola senza scalo a Nadi da Los Angeles e San Francisco.',
        KZ: 'Secondo le regole attuali, ai cittadini kazaki serve un visto rilasciato in anticipo: fai domanda con diverse settimane di margine.',
      },
    },
  },
};

export default guide;
