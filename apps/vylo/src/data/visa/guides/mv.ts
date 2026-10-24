import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'MV',
  checked: '2026-10',
  fees: { voa: { kind: 'free' } },
  stay: { voa: 30 },
  links: { immigration: 'https://immigration.gov.mv' },
  forms: [{ name: 'IMUGA Traveller Declaration', url: 'https://imuga.immigration.gov.mv' }],
  docs: ['booking', 'returnTicket', 'finance'],
  passportMonths: 6,
  extend: { days: 60 },
  hackScope: [null, null, null, null],
  pitfallScope: [null, null, null],
  text: {
    ru: {
      summary:
        'Все туристы получают бесплатную визу по прибытии на 30 дней — заранее ничего оформлять не нужно, кроме онлайн-декларации IMUGA. Граждане Индии получают 90 дней. С 2025 года въезд закрыт для владельцев израильских паспортов.',
      apply:
        'За 96 часов до прилёта заполните декларацию IMUGA на imuga.immigration.gov.mv (её же нужно подать и перед вылетом) и сохраните QR-код. На границе покажите обратный билет, подтверждённую бронь в зарегистрированном отеле или гестхаусе и иногда — достаточные средства на поездку. Виза ставится штампом в паспорт бесплатно.',
      extend:
        'Визу можно продлить до 90 дней в Иммиграционной службе в Мале или онлайн: нужна бронь жилья на весь срок, обратный билет и подтверждение средств; заявку подавайте до окончания первых 30 дней.',
      hacks: [
        'На «местных» островах вроде Маафуши, Тодду или Дигура гестхаусы стоят в разы дешевле курортов, а туристический налог там вдвое ниже: с декабря 2024 года он 6 $ за ночь против 12 $ на курортах.',
        'Скоростные катера и паромы MTCC между атоллами в разы дешевле гидросамолётов — расписание есть в приложении перевозчика, а на ближние атоллы можно добраться за 1–2 часа.',
        'Если меняете отель посреди поездки, при въезде достаточно показать бронь на первые ночи — но адрес в IMUGA должен совпадать с ней.',
        'Аэропортовый сбор при вылете (60 $ в экономе с декабря 2024 года) обычно уже включён в билет — проверьте, чтобы не платить дважды.',
      ],
      pitfalls: [
        'Ввоз алкоголя, свинины, порнографии и религиозных предметов для поклонения запрещён: найденное в багаже конфискуют.',
        'Без брони жилья можно получить отказ во въезде — «сниму на месте» на Мальдивах не работает.',
        'На местных островах действуют мусульманские нормы: купаться в бикини можно только на специальных «бикини-пляжах».',
      ],
      passports: {
        RU: 'Россияне получают бесплатную визу по прибытии, как и все туристы. Прямые рейсы «Аэрофлота» летают из Москвы; российские карты не работают, поэтому берите доллары — ими можно платить почти везде.',
        IN: 'Граждане Индии получают бесплатный въезд на 90 дней.',
        IL: 'С 2025 года владельцев израильских паспортов на Мальдивы не пускают; граждане с двойным гражданством въезжают по паспорту другой страны.',
      },
    },
    en: {
      summary:
        'Every tourist gets a free 30-day visa on arrival — nothing to arrange beforehand except the online IMUGA declaration. Indian citizens get 90 days. Since 2025, holders of Israeli passports have been barred from entry.',
      apply:
        'Within 96 hours before arrival, fill in the IMUGA declaration at imuga.immigration.gov.mv (it is also required before departure) and save the QR code. At the border, show a return ticket, a confirmed booking at a registered resort or guesthouse and sometimes proof of sufficient funds. The visa is stamped into your passport free of charge.',
      extend:
        'The visa can be extended up to 90 days at Maldives Immigration in Malé or online: you need accommodation booked for the whole period, a return ticket and proof of funds; apply before your first 30 days end.',
      hacks: [
        'On “local” islands such as Maafushi, Thoddoo or Dhigurah, guesthouses cost a fraction of resort prices and the tourist tax is half: since December 2024 it has been $6 a night, versus $12 at resorts.',
        'Speedboats and MTCC ferries between atolls cost a fraction of seaplane fares — timetables are in the operator’s app, and nearby atolls are one to two hours away.',
        'If you change hotels mid-trip, a booking for the first nights is enough at the border — but the address in IMUGA must match it.',
        'The airport departure charge ($60 in economy since December 2024) is usually already in your ticket — check, so you do not pay twice.',
      ],
      pitfalls: [
        'Bringing in alcohol, pork, pornography or religious objects for worship is prohibited, and anything found in your luggage is confiscated.',
        'Without an accommodation booking you can be refused entry — “I’ll find something there” does not work in the Maldives.',
        'Local islands follow Muslim customs: bikinis are allowed only on designated “bikini beaches”.',
      ],
      passports: {
        RU: 'Russian citizens get the free visa on arrival like all tourists. Aeroflot flies direct from Moscow; Russian cards do not work, so bring dollars — they are accepted almost everywhere.',
        IN: 'Indian citizens get free entry for 90 days.',
        IL: 'Since 2025, holders of Israeli passports are not admitted; dual nationals can enter on their other passport.',
      },
    },
    es: {
      summary:
        'Todos los turistas reciben un visado gratuito de 30 días a la llegada; no hay que tramitar nada antes salvo la declaración en línea IMUGA. Los ciudadanos indios tienen 90 días. Desde 2025, los titulares de pasaporte israelí tienen prohibida la entrada.',
      apply:
        'En las 96 horas previas a la llegada, rellena la declaración IMUGA en imuga.immigration.gov.mv (también se exige antes de la salida) y guarda el código QR. En la frontera muestra el billete de vuelta, una reserva confirmada en un resort o casa de huéspedes registrados y, a veces, prueba de fondos suficientes. El visado se sella gratis en el pasaporte.',
      extend:
        'El visado se puede prorrogar hasta 90 días en Inmigración de Maldivas, en Malé o en línea: necesitas alojamiento reservado para todo el periodo, billete de vuelta y prueba de fondos; solicítalo antes de que terminen tus primeros 30 días.',
      hacks: [
        'En islas «locales» como Maafushi, Thoddoo o Dhigurah, las casas de huéspedes cuestan una fracción de un resort y la tasa turística es la mitad: desde diciembre de 2024, 6 $ por noche frente a 12 $ en los resorts.',
        'Las lanchas rápidas y los ferris de MTCC entre atolones cuestan una fracción del hidroavión; los horarios están en la app del operador, y los atolones cercanos quedan a una o dos horas.',
        'Si cambias de hotel a mitad del viaje, en la frontera basta la reserva de las primeras noches, pero la dirección de la IMUGA debe coincidir con ella.',
        'La tasa aeroportuaria de salida (60 $ en turista desde diciembre de 2024) suele ir incluida en el billete: compruébalo para no pagarla dos veces.',
      ],
      pitfalls: [
        'Está prohibido entrar alcohol, cerdo, pornografía u objetos religiosos de culto, y lo que encuentren en el equipaje se confisca.',
        'Sin reserva de alojamiento pueden negarte la entrada: «ya buscaré allí» no funciona en Maldivas.',
        'Las islas locales siguen las costumbres musulmanas: el bikini solo se permite en las «bikini beaches» señalizadas.',
      ],
      passports: {
        RU: 'Los ciudadanos rusos reciben el visado gratuito a la llegada como cualquier turista. Aeroflot vuela directo desde Moscú; las tarjetas rusas no funcionan, así que lleva dólares, que se aceptan casi en todas partes.',
        IN: 'Los ciudadanos indios tienen entrada gratuita durante 90 días.',
        IL: 'Desde 2025 no se admite a titulares de pasaporte israelí; quienes tienen doble nacionalidad pueden entrar con el otro pasaporte.',
      },
    },
    de: {
      summary:
        'Alle Touristen bekommen bei Ankunft ein kostenloses 30-Tage-Visum – vorab ist nur die Online-Erklärung IMUGA nötig. Inder erhalten 90 Tage. Seit 2025 ist Inhabern israelischer Pässe die Einreise verwehrt.',
      apply:
        'Fülle in den 96 Stunden vor der Ankunft die IMUGA-Erklärung auf imuga.immigration.gov.mv aus (auch vor dem Rückflug Pflicht) und speichere den QR-Code. An der Grenze zeigst du Rückflugticket, bestätigte Buchung in einem registrierten Resort oder Gästehaus und manchmal einen Nachweis ausreichender Mittel. Das Visum wird kostenlos in den Pass gestempelt.',
      extend:
        'Das Visum lässt sich bei der Einwanderungsbehörde in Malé oder online auf bis zu 90 Tage verlängern: Du brauchst eine Unterkunftsbuchung für den ganzen Zeitraum, ein Rückflugticket und einen Mittelnachweis; stell den Antrag vor Ablauf der ersten 30 Tage.',
      hacks: [
        'Auf „lokalen“ Inseln wie Maafushi, Thoddoo oder Dhigurah kosten Gästehäuser einen Bruchteil der Resorts, und die Touristensteuer ist halb so hoch: seit Dezember 2024 6 $ pro Nacht statt 12 $ im Resort.',
        'Schnellboote und MTCC-Fähren zwischen den Atollen kosten einen Bruchteil des Wasserflugzeugs – Fahrpläne stehen in der App des Betreibers, nahe Atolle erreichst du in ein bis zwei Stunden.',
        'Wechselst du unterwegs das Hotel, reicht an der Grenze die Buchung für die ersten Nächte – die Adresse in IMUGA muss aber dazu passen.',
        'Die Ausreisegebühr am Flughafen (seit Dezember 2024 60 $ in der Economy) steckt meist schon im Ticket – prüfe es, damit du nicht doppelt zahlst.',
      ],
      pitfalls: [
        'Die Einfuhr von Alkohol, Schweinefleisch, Pornografie und religiösen Kultgegenständen ist verboten; Gefundenes wird beschlagnahmt.',
        'Ohne Unterkunftsbuchung droht die Einreiseverweigerung – „ich finde schon was vor Ort“ funktioniert auf den Malediven nicht.',
        'Auf lokalen Inseln gelten muslimische Regeln: Bikinis sind nur an ausgewiesenen „Bikini-Stränden“ erlaubt.',
      ],
      passports: {
        RU: 'Russische Staatsangehörige bekommen wie alle Touristen das kostenlose Visum bei Ankunft. Aeroflot fliegt direkt ab Moskau; russische Karten funktionieren nicht, nimm also Dollar mit – sie werden fast überall angenommen.',
        IN: 'Indische Staatsangehörige reisen kostenlos für 90 Tage ein.',
        IL: 'Seit 2025 werden Inhaber israelischer Pässe nicht eingelassen; Doppelstaatler können mit ihrem anderen Pass einreisen.',
      },
    },
    fr: {
      summary:
        'Tous les touristes reçoivent un visa gratuit de 30 jours à l’arrivée ; rien à faire à l’avance hormis la déclaration en ligne IMUGA. Les citoyens indiens ont 90 jours. Depuis 2025, l’entrée est interdite aux titulaires d’un passeport israélien.',
      apply:
        'Dans les 96 heures avant l’arrivée, remplissez la déclaration IMUGA sur imuga.immigration.gov.mv (elle est aussi exigée avant le départ) et gardez le QR code. À la frontière, présentez un billet retour, une réservation confirmée dans un resort ou une maison d’hôtes enregistrés et parfois une preuve de fonds suffisants. Le visa est tamponné gratuitement dans le passeport.',
      extend:
        'Le visa peut être prolongé jusqu’à 90 jours auprès de l’Immigration à Malé ou en ligne : il faut un hébergement réservé pour toute la période, un billet retour et une preuve de fonds ; déposez la demande avant la fin de vos 30 premiers jours.',
      hacks: [
        'Sur les îles « locales » comme Maafushi, Thoddoo ou Dhigurah, les maisons d’hôtes coûtent une fraction des resorts et la taxe touristique est deux fois moindre : depuis décembre 2024, 6 $ la nuit contre 12 $ en resort.',
        'Vedettes rapides et ferries MTCC entre atolls coûtent une fraction de l’hydravion : les horaires sont dans l’application de l’opérateur, et les atolls proches sont à une ou deux heures.',
        'Si vous changez d’hôtel en cours de route, la réservation des premières nuits suffit à la frontière — mais l’adresse indiquée dans IMUGA doit y correspondre.',
        'La taxe de départ de l’aéroport (60 $ en classe économique depuis décembre 2024) est généralement déjà incluse dans le billet : vérifiez pour ne pas payer deux fois.',
      ],
      pitfalls: [
        'Il est interdit d’introduire alcool, porc, pornographie ou objets religieux de culte ; tout ce qui est trouvé dans les bagages est confisqué.',
        'Sans réservation d’hébergement, l’entrée peut être refusée : « je trouverai sur place » ne marche pas aux Maldives.',
        'Les îles locales suivent les usages musulmans : le bikini n’est autorisé que sur les « bikini beaches » prévues à cet effet.',
      ],
      passports: {
        RU: 'Les citoyens russes obtiennent le visa gratuit à l’arrivée comme tous les touristes. Aeroflot dessert les Maldives en direct depuis Moscou ; les cartes russes ne fonctionnent pas, apportez donc des dollars, acceptés presque partout.',
        IN: 'Les citoyens indiens bénéficient d’une entrée gratuite pour 90 jours.',
        IL: 'Depuis 2025, les titulaires d’un passeport israélien ne sont pas admis ; les binationaux peuvent entrer avec leur autre passeport.',
      },
    },
    it: {
      summary:
        'Tutti i turisti ricevono all’arrivo un visto gratuito di 30 giorni: non serve organizzare nulla prima, a parte la dichiarazione online IMUGA. I cittadini indiani hanno 90 giorni. Dal 2025 l’ingresso è vietato ai titolari di passaporto israeliano.',
      apply:
        'Nelle 96 ore prima dell’arrivo compila la dichiarazione IMUGA su imuga.immigration.gov.mv (serve anche prima della partenza) e salva il codice QR. Alla frontiera mostra il biglietto di ritorno, una prenotazione confermata in un resort o guesthouse registrati e talvolta la prova di fondi sufficienti. Il visto viene timbrato gratis sul passaporto.',
      extend:
        'Il visto si può prorogare fino a 90 giorni presso l’Immigrazione a Malé o online: servono alloggio prenotato per tutto il periodo, biglietto di ritorno e prova dei fondi; fai domanda prima che finiscano i primi 30 giorni.',
      hacks: [
        'Sulle isole «locali» come Maafushi, Thoddoo o Dhigurah le guesthouse costano una frazione dei resort e la tassa turistica è la metà: da dicembre 2024 6 $ a notte contro 12 $ nei resort.',
        'Motoscafi veloci e traghetti MTCC tra gli atolli costano una frazione dell’idrovolante: gli orari sono nell’app dell’operatore, e gli atolli vicini sono a una o due ore.',
        'Se cambi hotel durante il viaggio, alla frontiera basta la prenotazione delle prime notti, ma l’indirizzo in IMUGA deve corrispondere.',
        'La tassa aeroportuale di partenza (60 $ in economy da dicembre 2024) di solito è già nel biglietto: controlla per non pagarla due volte.',
      ],
      pitfalls: [
        'È vietato introdurre alcol, carne di maiale, pornografia e oggetti religiosi di culto; ciò che viene trovato in valigia è confiscato.',
        'Senza prenotazione dell’alloggio puoi essere respinto: «troverò qualcosa sul posto» alle Maldive non funziona.',
        'Le isole locali seguono le usanze musulmane: il bikini è ammesso solo sulle «bikini beach» indicate.',
      ],
      passports: {
        RU: 'I cittadini russi ricevono il visto gratuito all’arrivo come tutti i turisti. Aeroflot vola diretto da Mosca; le carte russe non funzionano, quindi porta dollari, accettati quasi ovunque.',
        IN: 'I cittadini indiani hanno ingresso gratuito per 90 giorni.',
        IL: 'Dal 2025 i titolari di passaporto israeliano non sono ammessi; chi ha la doppia cittadinanza può entrare con l’altro passaporto.',
      },
    },
  },
};

export default guide;
