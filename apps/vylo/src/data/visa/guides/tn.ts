import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'TN',
  checked: '2026-10',
  overrides: { US: { status: 'free', days: 120 } },
  links: { immigration: 'https://www.diplomatie.gov.tn' },
  docs: ['returnTicket', 'booking'],
  passportMonths: 3,
  visaRun: 'limited',
  borders: [{ name: 'Tunis–Carthage (TUN) → Istanbul', to: 'TR', lat: 36.851, lng: 10.2272 }],
  hackScope: [['regime:required', 'regime:evisa'], ['US', 'CA', 'DE'], null, null],
  pitfallScope: [['@EU'], null, null],
  text: {
    ru: {
      summary:
        'Граждане России, Беларуси, Казахстана, ЕС, Великобритании, Японии, Кореи, Китая, Турции, Бразилии, Мексики и стран Залива въезжают без визы на 90 дней, граждане США, Канады и Германии — на 4 месяца. Гражданам Украины и ряда других стран без визы можно приехать только в организованный тур с ваучером отеля. Индийцам, грузинам, армянам и узбекам нужна виза в посольстве Туниса — электронной визы пока нет.',
      apply:
        'Консульскую визу оформляют в посольстве или консульстве Туниса: анкета, фото, бронь отеля, билеты и выписка из банка; срок обычно 1–3 недели. Электронную визу обещают давно, но в августе 2025 года тендер на систему признали несостоявшимся. Безвизовым туристам достаточно паспорта и обратного билета.',
      visaRun:
        'Формально после выезда срок начинается заново, но сухопутные варианты неудобны: в Алжир нужна виза, а в Ливию туристам ехать не стоит. Остаётся перелёт — например, в Стамбул или на Мальту (Мальта — Шенген). Если нужно больше 90 дней, надёжнее оформить вид на жительство через полицию.',
      hacks: [
        'Граждане стран, которым обычно нужна виза (например, Украины), могут въехать без неё в составе организованного тура: туроператор оформляет ваучер на весь срок проживания — это быстрее и дешевле консульства.',
        'Американцам, канадцам и немцам положено 4 месяца без визы вместо стандартных 90 дней — удобно для долгой зимовки в Хаммамете или на Джербе.',
        'Паромы из Генуи, Марселя, Палермо и Чивитавеккьи в Тунис позволяют приехать на своей машине: временный ввоз авто оформляют прямо в порту Ла-Гулет.',
        'Тунисский динар нельзя вывозить, а обратно меняют только по чекам обмена. Сохраняйте все квитанции и меняйте небольшими суммами.',
      ],
      pitfalls: [
        'С 1 января 2025 года въехать по ID-карте больше нельзя даже европейцам из пакетных туров — нужен паспорт, действительный ещё минимум 3 месяца.',
        'Дроны ввозить запрещено: их изымают на таможне.',
        'За перерасчёт на выезде берут штраф в виде гербовых марок за каждую неделю — заранее рассчитайте дни и не задерживайтесь.',
      ],
      passports: {
        RU: 'Россияне въезжают без визы на 90 дней. Летают чартерами в Энфиду и Монастир или через Стамбул. Российские карты не работают — везите евро наличными и сохраняйте чеки обмена.',
        UA: 'Гражданам Украины без визы можно приехать только по организованному туру с ваучером отеля; для самостоятельной поездки нужна виза в посольстве.',
        IN: 'Гражданам Индии нужна виза в посольстве Туниса; заложите на неё 2–3 недели.',
        FR: 'Граждане Франции и других стран ЕС больше не могут въезжать по ID-карте — только по паспорту.',
      },
    },
    en: {
      summary:
        'Citizens of Russia, Belarus, Kazakhstan, the EU, the UK, Japan, Korea, China, Turkey, Brazil, Mexico and the GCC enter visa-free for 90 days; US, Canadian and German citizens for four months. Citizens of Ukraine and some other countries can come visa-free only on an organised tour with a hotel voucher. Indians, Georgians, Armenians and Uzbeks need a visa from a Tunisian embassy — there is no e-visa yet.',
      apply:
        'Consular visas are issued by Tunisian embassies and consulates: form, photo, hotel booking, tickets and a bank statement; processing usually takes one to three weeks. An e-visa has been promised for years, but in August 2025 the tender for the system was declared unsuccessful. Visa-free tourists only need a passport and a return ticket.',
      visaRun:
        'Technically the clock restarts after you leave, but overland options are awkward: Algeria requires a visa, and Libya is no place for tourists. That leaves flights — to Istanbul or Malta, for example (Malta is Schengen). If you need more than 90 days, a residence permit through the police is the safer route.',
      hacks: [
        'Citizens of countries that normally need a visa (Ukraine, for example) can enter without one on an organised tour: the tour operator issues a voucher for the whole stay — faster and cheaper than the consulate.',
        'Americans, Canadians and Germans get four months visa-free instead of the usual 90 days — handy for a long winter in Hammamet or Djerba.',
        'Ferries from Genoa, Marseille, Palermo and Civitavecchia let you bring your own car: temporary import is handled right at La Goulette port.',
        'The Tunisian dinar cannot be exported, and it can only be changed back with exchange receipts. Keep every receipt and change small amounts.',
      ],
      pitfalls: [
        'Since 1 January 2025, even Europeans on package tours can no longer enter with an ID card — you need a passport valid for at least three more months.',
        'Drones are banned and are confiscated at customs.',
        'Overstays are fined on departure in revenue stamps for each week over — count your days in advance and do not linger.',
      ],
      passports: {
        RU: 'Russian citizens enter visa-free for 90 days. People fly charters to Enfidha and Monastir or connect in Istanbul. Russian bank cards do not work, so bring euros in cash and keep your exchange receipts.',
        UA: 'Ukrainian citizens can come visa-free only on an organised tour with a hotel voucher; independent travel requires a visa from the embassy.',
        IN: 'Indian citizens need a visa from a Tunisian embassy; allow two to three weeks.',
        FR: 'French and other EU citizens can no longer enter with an ID card — only with a passport.',
      },
    },
    es: {
      summary:
        'Los ciudadanos de Rusia, Bielorrusia, Kazajistán, la UE, Reino Unido, Japón, Corea, China, Turquía, Brasil, México y el CCG entran sin visado durante 90 días; los de EE. UU., Canadá y Alemania, durante cuatro meses. Los ciudadanos de Ucrania y algunos otros países solo pueden venir sin visado en un viaje organizado con bono de hotel. Indios, georgianos, armenios y uzbekos necesitan visado de una embajada tunecina: todavía no hay visado electrónico.',
      apply:
        'El visado consular lo expiden las embajadas y consulados de Túnez: formulario, foto, reserva de hotel, billetes y extracto bancario; suele tardar de una a tres semanas. El visado electrónico se promete desde hace años, pero en agosto de 2025 el concurso para el sistema quedó desierto. A los turistas exentos les basta el pasaporte y el billete de vuelta.',
      visaRun:
        'En teoría el plazo se reinicia al salir, pero por tierra es complicado: Argelia exige visado y Libia no es destino para turistas. Quedan los vuelos, por ejemplo a Estambul o a Malta (Malta es Schengen). Si necesitas más de 90 días, lo más seguro es pedir residencia a través de la policía.',
      hacks: [
        'Los ciudadanos de países que normalmente necesitan visado (Ucrania, por ejemplo) pueden entrar sin él en un viaje organizado: el touroperador emite un bono para toda la estancia, más rápido y barato que el consulado.',
        'Estadounidenses, canadienses y alemanes tienen cuatro meses sin visado en lugar de los 90 días habituales, ideal para un invierno largo en Hammamet o Yerba.',
        'Los ferris desde Génova, Marsella, Palermo y Civitavecchia permiten llegar con tu coche: la importación temporal se tramita en el mismo puerto de La Goulette.',
        'El dinar tunecino no se puede sacar del país y solo se cambia de vuelta con los recibos de cambio. Guarda todos los recibos y cambia poco a poco.',
      ],
      pitfalls: [
        'Desde el 1 de enero de 2025 ya no se puede entrar con el DNI, ni siquiera en viajes organizados desde Europa: necesitas pasaporte con al menos tres meses de validez.',
        'Los drones están prohibidos y la aduana los confisca.',
        'El exceso de estancia se multa al salir con timbres fiscales por cada semana de más: cuenta tus días con antelación y no te retrases.',
      ],
      passports: {
        RU: 'Los ciudadanos rusos entran sin visado 90 días. Se vuela en chárter a Enfidha y Monastir o con escala en Estambul. Las tarjetas rusas no funcionan: lleva euros en efectivo y guarda los recibos de cambio.',
        UA: 'Los ciudadanos ucranianos solo pueden venir sin visado en un viaje organizado con bono de hotel; para viajar por libre necesitan visado de la embajada.',
        IN: 'Los ciudadanos indios necesitan visado de una embajada tunecina; calcula dos o tres semanas.',
        FR: 'Los ciudadanos franceses y de otros países de la UE ya no pueden entrar con el documento de identidad, solo con pasaporte.',
      },
    },
    de: {
      summary:
        'Staatsangehörige Russlands, Belarus’, Kasachstans, der EU, Großbritanniens, Japans, Koreas, Chinas, der Türkei, Brasiliens, Mexikos und der GCC-Staaten reisen 90 Tage visumfrei ein, US-Amerikaner, Kanadier und Deutsche vier Monate. Ukrainer und Staatsangehörige einiger anderer Länder kommen nur mit organisierter Reise und Hotelvoucher ohne Visum ins Land. Inder, Georgier, Armenier und Usbeken brauchen ein Visum einer tunesischen Botschaft – ein E-Visum gibt es noch nicht.',
      apply:
        'Konsularvisa stellen tunesische Botschaften und Konsulate aus: Formular, Foto, Hotelbuchung, Tickets und Kontoauszug; die Bearbeitung dauert meist ein bis drei Wochen. Ein E-Visum wird seit Jahren versprochen, im August 2025 wurde die Ausschreibung für das System aber für gescheitert erklärt. Visumfreie Touristen brauchen nur Pass und Rückflugticket.',
      visaRun:
        'Formal beginnt die Frist nach der Ausreise neu, auf dem Landweg ist das aber unpraktisch: Algerien verlangt ein Visum, und Libyen ist kein Ziel für Touristen. Bleiben Flüge, etwa nach Istanbul oder Malta (Malta gehört zum Schengenraum). Wer länger als 90 Tage braucht, beantragt besser einen Aufenthaltstitel bei der Polizei.',
      hacks: [
        'Staatsangehörige von Ländern, die normalerweise ein Visum brauchen (etwa der Ukraine), können mit einer organisierten Reise ohne Visum einreisen: Der Reiseveranstalter stellt einen Voucher für den ganzen Aufenthalt aus – schneller und günstiger als das Konsulat.',
        'Amerikaner, Kanadier und Deutsche bekommen vier Monate visumfrei statt der üblichen 90 Tage – praktisch für einen langen Winter in Hammamet oder auf Djerba.',
        'Mit den Fähren aus Genua, Marseille, Palermo und Civitavecchia kannst du mit dem eigenen Auto anreisen: Die vorübergehende Einfuhr wird direkt im Hafen La Goulette erledigt.',
        'Der tunesische Dinar darf nicht ausgeführt werden und wird nur gegen Wechselbelege zurückgetauscht. Heb alle Belege auf und tausch in kleinen Beträgen.',
      ],
      pitfalls: [
        'Seit dem 1. Januar 2025 ist die Einreise mit dem Personalausweis nicht mehr möglich, auch nicht bei Pauschalreisen – du brauchst einen Pass, der noch mindestens drei Monate gültig ist.',
        'Drohnen sind verboten und werden vom Zoll beschlagnahmt.',
        'Überziehungen werden bei der Ausreise mit Steuermarken für jede angefangene Woche geahndet – zähl deine Tage vorher und bleib nicht zu lange.',
      ],
      passports: {
        RU: 'Russische Staatsangehörige reisen 90 Tage visumfrei ein. Man fliegt mit Charterflügen nach Enfidha und Monastir oder steigt in Istanbul um. Russische Bankkarten funktionieren nicht – nimm Euro in bar mit und heb die Wechselbelege auf.',
        UA: 'Ukrainische Staatsangehörige kommen nur mit organisierter Reise und Hotelvoucher visumfrei ins Land; für Individualreisen brauchen sie ein Visum der Botschaft.',
        IN: 'Indische Staatsangehörige brauchen ein Visum einer tunesischen Botschaft; plane zwei bis drei Wochen ein.',
        FR: 'Französische und andere EU-Bürger können nicht mehr mit dem Personalausweis einreisen – nur noch mit Pass.',
      },
    },
    fr: {
      summary:
        'Les ressortissants de Russie, du Bélarus, du Kazakhstan, de l’UE, du Royaume-Uni, du Japon, de Corée, de Chine, de Turquie, du Brésil, du Mexique et du CCG entrent sans visa pour 90 jours ; les Américains, Canadiens et Allemands pour quatre mois. Les Ukrainiens et les ressortissants de quelques autres pays ne peuvent venir sans visa qu’en voyage organisé avec un bon d’hôtel. Les Indiens, Géorgiens, Arméniens et Ouzbeks ont besoin d’un visa délivré par une ambassade tunisienne : il n’existe pas encore d’e-visa.',
      apply:
        'Le visa consulaire est délivré par les ambassades et consulats de Tunisie : formulaire, photo, réservation d’hôtel, billets et relevé bancaire ; le délai est en général d’une à trois semaines. L’e-visa est promis depuis des années, mais l’appel d’offres pour le système a été déclaré infructueux en août 2025. Les touristes exemptés n’ont besoin que du passeport et d’un billet retour.',
      visaRun:
        'En théorie, le compteur repart après une sortie, mais par voie terrestre c’est compliqué : l’Algérie exige un visa et la Libye n’est pas une destination touristique. Restent les vols, vers Istanbul ou Malte par exemple (Malte fait partie de l’espace Schengen). Au-delà de 90 jours, une carte de séjour demandée auprès de la police est la voie la plus sûre.',
      hacks: [
        'Les ressortissants de pays normalement soumis au visa (l’Ukraine, par exemple) peuvent entrer sans visa en voyage organisé : le voyagiste délivre un bon pour tout le séjour, plus rapide et moins cher que le consulat.',
        'Américains, Canadiens et Allemands ont droit à quatre mois sans visa au lieu des 90 jours habituels, pratique pour un long hiver à Hammamet ou à Djerba.',
        'Les ferries au départ de Gênes, Marseille, Palerme et Civitavecchia permettent de venir avec votre voiture : l’importation temporaire se fait directement au port de La Goulette.',
        'Le dinar tunisien ne peut pas sortir du pays et ne se rechange qu’avec les bordereaux de change. Gardez tous les reçus et changez par petites sommes.',
      ],
      pitfalls: [
        'Depuis le 1er janvier 2025, même les Européens en voyage organisé ne peuvent plus entrer avec leur carte d’identité : il faut un passeport valable encore au moins trois mois.',
        'Les drones sont interdits et confisqués à la douane.',
        'Les dépassements sont sanctionnés au départ par des timbres fiscaux pour chaque semaine de trop : comptez vos jours à l’avance et ne traînez pas.',
      ],
      passports: {
        RU: 'Les ressortissants russes entrent sans visa pour 90 jours. On vient en charter à Enfidha et Monastir ou via Istanbul. Les cartes bancaires russes ne fonctionnent pas : emportez des euros en espèces et gardez les reçus de change.',
        UA: 'Les ressortissants ukrainiens ne peuvent venir sans visa qu’en voyage organisé avec un bon d’hôtel ; pour un voyage individuel, il faut un visa de l’ambassade.',
        IN: 'Les ressortissants indiens ont besoin d’un visa délivré par une ambassade tunisienne ; comptez deux à trois semaines.',
        FR: 'Les citoyens français et des autres pays de l’UE ne peuvent plus entrer avec la carte d’identité, uniquement avec un passeport.',
      },
    },
    it: {
      summary:
        'I cittadini di Russia, Bielorussia, Kazakistan, UE, Regno Unito, Giappone, Corea, Cina, Turchia, Brasile, Messico e CCG entrano senza visto per 90 giorni; statunitensi, canadesi e tedeschi per quattro mesi. I cittadini ucraini e di alcuni altri paesi possono arrivare senza visto solo con un viaggio organizzato e il voucher dell’hotel. Indiani, georgiani, armeni e uzbeki hanno bisogno di un visto rilasciato da un’ambasciata tunisina: il visto elettronico non esiste ancora.',
      apply:
        'Il visto consolare lo rilasciano ambasciate e consolati tunisini: modulo, foto, prenotazione dell’hotel, biglietti ed estratto conto; di solito servono da una a tre settimane. Il visto elettronico è promesso da anni, ma ad agosto 2025 la gara per il sistema è andata deserta. Ai turisti esenti bastano passaporto e biglietto di ritorno.',
      visaRun:
        'In teoria il conteggio riparte dopo l’uscita, ma via terra è scomodo: l’Algeria richiede il visto e la Libia non è una meta per turisti. Restano i voli, per esempio per Istanbul o Malta (Malta è Schengen). Se ti servono più di 90 giorni, la strada più sicura è il permesso di soggiorno tramite la polizia.',
      hacks: [
        'I cittadini di paesi che di norma hanno bisogno del visto (per esempio l’Ucraina) possono entrare senza visto con un viaggio organizzato: il tour operator emette un voucher per tutto il soggiorno, più rapido ed economico del consolato.',
        'Statunitensi, canadesi e tedeschi hanno quattro mesi senza visto invece dei soliti 90 giorni, comodo per un lungo inverno a Hammamet o a Djerba.',
        'I traghetti da Genova, Marsiglia, Palermo e Civitavecchia ti permettono di arrivare con la tua auto: l’importazione temporanea si sbriga direttamente al porto di La Goulette.',
        'Il dinaro tunisino non si può esportare e si riconverte solo con le ricevute di cambio. Conserva tutte le ricevute e cambia piccole somme.',
      ],
      pitfalls: [
        'Dal 1° gennaio 2025 non si entra più con la carta d’identità, nemmeno con i viaggi organizzati dall’Europa: serve un passaporto valido ancora almeno tre mesi.',
        'I droni sono vietati e la dogana li sequestra.',
        'Chi supera il limite paga all’uscita una multa in marche da bollo per ogni settimana in più: conta i giorni in anticipo e non trattenerti oltre.',
      ],
      passports: {
        RU: 'I cittadini russi entrano senza visto per 90 giorni. Si vola con charter su Enfidha e Monastir o con scalo a Istanbul. Le carte bancarie russe non funzionano: porta euro in contanti e conserva le ricevute di cambio.',
        UA: 'I cittadini ucraini possono arrivare senza visto solo con un viaggio organizzato e il voucher dell’hotel; per viaggiare da soli serve il visto dell’ambasciata.',
        IN: 'I cittadini indiani hanno bisogno di un visto rilasciato da un’ambasciata tunisina; calcola due o tre settimane.',
        FR: 'I cittadini francesi e degli altri paesi UE non possono più entrare con la carta d’identità, solo con il passaporto.',
      },
    },
  },
};

export default guide;
