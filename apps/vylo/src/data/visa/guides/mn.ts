import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'MN',
  checked: '2026-10',
  links: { evisa: 'https://evisa.mn', immigration: 'https://immigration.gov.mn' },
  passportMonths: 6,
  visaRun: 'limited',
  borders: [
    { name: 'Altanbulag – Kyakhta', to: 'RU', lat: 50.355, lng: 106.48 },
    { name: 'Zamyn-Uud – Erenhot', to: 'CN', lat: 43.7, lng: 111.92 },
  ],
  hackScope: [null, ['regime:evisa'], ['regime:free'], null],
  pitfallScope: [null, null, ['regime:evisa']],
  text: {
    ru: {
      summary:
        'Граждане России въезжают без визы на 30 дней, граждане Казахстана и Беларуси — на 90, США — на 90, Кореи — на 90. Граждане ЕС, Великобритании, Австралии и Новой Зеландии (всего 34 страны) получают 30 дней без визы по временной программе, продлённой до конца 2026 года; Канаде, Японии, Турции и Израилю 30 дней положены постоянно. Остальным нужна электронная виза.',
      apply:
        'Электронную визу оформляют на evisa.mn: анкета, фото, скан паспорта, иногда приглашение от турфирмы или гестхауса; сбор указан при подаче. Подавайте не позже чем за 2–3 недели — летом, перед Наадамом, обработка затягивается. Если остаётесь дольше 30 дней, зарегистрируйтесь в Агентстве иммиграции в течение 7 дней после приезда.',
      visaRun:
        'Визаран возможен, но с оговорками: для россиян действует 30 дней за въезд и не больше 90 дней за 180, а остальным частые повторные въезды без визы могут не одобрить. Выезжают обычно поездом или машиной через Алтанбулаг — Кяхту в Россию или Замын-Ууд — Эрэнхот в Китай.',
      hacks: [
        'Поезд Улан-Батор — Иркутск или Улан-Удэ идёт через Наушки — Сухэ-Батор и оформляет границу прямо в вагоне — удобный способ сочетать Монголию с Байкалом.',
        'На Наадам (11–13 июля) гостиницы и внутренние рейсы раскупают за месяцы, а электронную визу обрабатывают дольше — подавайте и бронируйте заранее.',
        'Программа безвиза для 34 стран продлена до 31 декабря 2026 года. Если поездка выпадает на 2027-й, следите за новостями: продление объявляют обычно в последний момент.',
        'За пределами Улан-Батора карты почти не принимают — снимайте тугрики в столице и берите машину с водителем через гестхаусы.',
      ],
      pitfalls: [
        'Переходить границу пешком нельзя ни в Кяхте, ни в Замын-Ууде: нужно сидеть в машине или автобусе, поэтому договаривайтесь с водителями заранее.',
        'Остались дольше 30 дней без регистрации — штраф при выезде и возможные проблемы с повторным въездом.',
        'Сайты-посредники продают электронную визу дороже; официальный портал — evisa.mn.',
      ],
      passports: {
        RU: 'Россиянам положено 30 дней без визы за въезд и не более 90 дней в течение 180. Российские карты не работают: везите доллары или рубли и меняйте в банках Улан-Батора.',
        US: 'Граждане США въезжают без визы на 90 дней; при пребывании дольше 30 дней нужна регистрация в Агентстве иммиграции.',
        CN: 'Гражданам Китая нужна виза или электронная виза; самый популярный путь — поезд Пекин — Улан-Батор через Эрэнхот.',
        KZ: 'Граждане Казахстана въезжают без визы на 90 дней.',
      },
    },
    en: {
      summary:
        'Russian citizens enter visa-free for 30 days, Kazakh and Belarusian citizens for 90, US citizens for 90 and Koreans for 90. Citizens of the EU, UK, Australia and New Zealand (34 countries in all) get 30 visa-free days under a temporary scheme extended to the end of 2026; Canada, Japan, Turkey and Israel have 30 days permanently. Everyone else needs an e-visa.',
      apply:
        'Apply for the e-visa at evisa.mn: form, photo, passport scan and sometimes an invitation from a tour company or guesthouse; the fee is shown when you apply. Apply at least 2–3 weeks ahead, as processing slows in summer before Naadam. If you stay longer than 30 days, register with the Immigration Agency within 7 days of arrival.',
      visaRun:
        'Visa runs are possible, with caveats: Russians get 30 days per entry and no more than 90 days in 180, and for others, frequent visa-free re-entries may not be approved. People usually leave by train or car via Altanbulag – Kyakhta into Russia or Zamyn-Uud – Erenhot into China.',
      hacks: [
        'The Ulaanbaatar – Irkutsk or Ulan-Ude train crosses at Sukhbaatar – Naushki, with border formalities right in the carriage — an easy way to combine Mongolia with Lake Baikal.',
        'For Naadam (11–13 July), hotels and domestic flights sell out months ahead and e-visas take longer — apply and book early.',
        'The visa waiver for 34 countries has been extended to 31 December 2026. If your trip falls in 2027, watch the news: extensions are usually announced at the last minute.',
        'Outside Ulaanbaatar, cards are rarely accepted — withdraw tögrög in the capital and hire a car with driver through guesthouses.',
      ],
      pitfalls: [
        'You cannot cross on foot at Kyakhta or Zamyn-Uud: you must be in a car or bus, so arrange a driver in advance.',
        'Staying over 30 days without registration means a fine on departure and possible trouble re-entering.',
        'Agency sites sell the e-visa for more; the official portal is evisa.mn.',
      ],
      passports: {
        RU: 'Russians get 30 visa-free days per entry and no more than 90 days in 180. Russian cards do not work, so bring dollars or roubles and change them at banks in Ulaanbaatar.',
        US: 'US citizens enter visa-free for 90 days; stays over 30 days require registration with the Immigration Agency.',
        CN: 'Chinese citizens need a visa or e-visa; the most popular route is the Beijing – Ulaanbaatar train via Erenhot.',
        KZ: 'Kazakh citizens enter visa-free for 90 days.',
      },
    },
    es: {
      summary:
        'Los ciudadanos rusos entran sin visado 30 días; los de Kazajistán y Bielorrusia, 90; los estadounidenses, 90, y los coreanos, 90. Los de la UE, Reino Unido, Australia y Nueva Zelanda (34 países en total) tienen 30 días sin visado gracias a un régimen temporal prorrogado hasta finales de 2026; Canadá, Japón, Turquía e Israel tienen 30 días de forma permanente. El resto necesita visado electrónico.',
      apply:
        'El visado electrónico se pide en evisa.mn: formulario, foto, copia del pasaporte y, a veces, una invitación de una agencia o casa de huéspedes; la tasa aparece al solicitarlo. Hazlo con al menos 2–3 semanas de margen, porque en verano, antes del Naadam, la tramitación se alarga. Si te quedas más de 30 días, regístrate en la Agencia de Inmigración en los 7 días siguientes a la llegada.',
      visaRun:
        'El visa run es posible, con matices: los rusos tienen 30 días por entrada y no más de 90 en 180, y al resto pueden no aceptarle reentradas frecuentes sin visado. Se suele salir en tren o en coche por Altanbulag – Kiajta hacia Rusia o por Zamyn-Uud – Erenhot hacia China.',
      hacks: [
        'El tren Ulán Bator – Irkutsk o Ulán-Udé cruza por Sükhbaatar – Naushki y hace los trámites fronterizos en el vagón: una forma cómoda de combinar Mongolia con el Baikal.',
        'Para el Naadam (11–13 de julio), hoteles y vuelos internos se agotan con meses de antelación y los visados electrónicos tardan más: solicita y reserva pronto.',
        'La exención para 34 países se ha prorrogado hasta el 31 de diciembre de 2026. Si tu viaje cae en 2027, sigue las noticias: las prórrogas suelen anunciarse en el último momento.',
        'Fuera de Ulán Bator casi no se aceptan tarjetas: saca tögrög en la capital y contrata coche con conductor a través de las casas de huéspedes.',
      ],
      pitfalls: [
        'No se puede cruzar a pie ni en Kiajta ni en Zamyn-Uud: hay que ir en coche o autobús, así que organiza el conductor con antelación.',
        'Quedarse más de 30 días sin registrarse supone una multa al salir y posibles problemas para volver a entrar.',
        'Las webs intermediarias venden el visado electrónico más caro; el portal oficial es evisa.mn.',
      ],
      passports: {
        RU: 'Los rusos tienen 30 días sin visado por entrada y no más de 90 en 180. Las tarjetas rusas no funcionan: lleva dólares o rublos y cámbialos en bancos de Ulán Bator.',
        US: 'Los estadounidenses entran sin visado 90 días; para estancias de más de 30 días hay que registrarse en la Agencia de Inmigración.',
        CN: 'Los ciudadanos chinos necesitan visado o visado electrónico; la ruta más popular es el tren Pekín – Ulán Bator por Erenhot.',
        KZ: 'Los ciudadanos kazajos entran sin visado 90 días.',
      },
    },
    de: {
      summary:
        'Russische Staatsangehörige reisen 30 Tage visumfrei ein, Kasachen und Belarussen 90, US-Bürger 90 und Koreaner 90. Bürger der EU, Großbritanniens, Australiens und Neuseelands (insgesamt 34 Länder) bekommen über eine bis Ende 2026 verlängerte Sonderregel 30 visumfreie Tage; Kanada, Japan, die Türkei und Israel haben dauerhaft 30 Tage. Alle anderen brauchen ein E-Visum.',
      apply:
        'Das E-Visum beantragst du auf evisa.mn: Formular, Foto, Passscan und manchmal eine Einladung von Reiseveranstalter oder Gästehaus; die Gebühr wird beim Antrag angezeigt. Beantrage es mindestens 2–3 Wochen vorher, denn im Sommer vor dem Naadam dauert die Bearbeitung länger. Bleibst du länger als 30 Tage, melde dich binnen 7 Tagen nach Ankunft bei der Einwanderungsbehörde.',
      visaRun:
        'Visa-Runs sind mit Einschränkungen möglich: Russen haben 30 Tage pro Einreise und höchstens 90 Tage in 180, bei anderen werden häufige visumfreie Wiedereinreisen womöglich nicht akzeptiert. Meist reist man per Zug oder Auto über Altanbulag – Kjachta nach Russland oder Zamyn-Üüd – Erenhot nach China aus.',
      hacks: [
        'Der Zug Ulaanbaatar – Irkutsk oder Ulan-Ude überquert die Grenze bei Süchbaatar – Nauschki, die Kontrolle erfolgt direkt im Waggon – ideal, um die Mongolei mit dem Baikal zu verbinden.',
        'Zum Naadam (11.–13. Juli) sind Hotels und Inlandsflüge Monate vorher ausgebucht, und E-Visa dauern länger – beantrage und buche früh.',
        'Die Visumfreiheit für 34 Länder wurde bis 31. Dezember 2026 verlängert. Fällt deine Reise ins Jahr 2027, verfolge die Nachrichten: Verlängerungen kommen meist in letzter Minute.',
        'Außerhalb Ulaanbaatars werden Karten kaum akzeptiert – heb in der Hauptstadt Tögrög ab und miete über Gästehäuser ein Auto mit Fahrer.',
      ],
      pitfalls: [
        'Zu Fuß darfst du weder in Kjachta noch in Zamyn-Üüd über die Grenze: Du musst im Auto oder Bus sitzen, organisiere also vorab einen Fahrer.',
        'Wer länger als 30 Tage ohne Registrierung bleibt, zahlt bei der Ausreise Bußgeld und riskiert Probleme bei der Wiedereinreise.',
        'Vermittlerseiten verkaufen das E-Visum teurer; das offizielle Portal ist evisa.mn.',
      ],
      passports: {
        RU: 'Russen bekommen 30 visumfreie Tage pro Einreise und höchstens 90 Tage in 180. Russische Karten funktionieren nicht – nimm Dollar oder Rubel mit und tausche bei Banken in Ulaanbaatar.',
        US: 'US-Bürger reisen 90 Tage visumfrei ein; bei Aufenthalten über 30 Tage ist eine Registrierung bei der Einwanderungsbehörde nötig.',
        CN: 'Chinesische Staatsangehörige brauchen ein Visum oder E-Visum; die beliebteste Route ist der Zug Peking – Ulaanbaatar über Erenhot.',
        KZ: 'Kasachische Staatsangehörige reisen 90 Tage visumfrei ein.',
      },
    },
    fr: {
      summary:
        'Les citoyens russes entrent sans visa pour 30 jours, les Kazakhs et les Biélorusses pour 90, les Américains pour 90 et les Coréens pour 90. Ceux de l’UE, du Royaume-Uni, d’Australie et de Nouvelle-Zélande (34 pays au total) ont 30 jours sans visa grâce à un régime temporaire prolongé jusqu’à fin 2026 ; le Canada, le Japon, la Turquie et Israël ont 30 jours en permanence. Les autres ont besoin d’un e-visa.',
      apply:
        'L’e-visa se demande sur evisa.mn : formulaire, photo, scan du passeport et parfois une invitation d’une agence ou d’une maison d’hôtes ; les frais s’affichent lors de la demande. Déposez-la au moins 2 à 3 semaines à l’avance, car l’été, avant le Naadam, le traitement ralentit. Si vous restez plus de 30 jours, enregistrez-vous auprès de l’Agence de l’immigration dans les 7 jours suivant l’arrivée.',
      visaRun:
        'Le visa run est possible, avec des réserves : les Russes ont 30 jours par entrée et pas plus de 90 sur 180, et pour les autres, des retours fréquents sans visa peuvent être refusés. On sort généralement en train ou en voiture par Altanbulag – Kiakhta vers la Russie ou Zamyn-Oud – Erenhot vers la Chine.',
      hacks: [
        'Le train Oulan-Bator – Irkoutsk ou Oulan-Oude passe la frontière à Sükhbaatar – Naouchki, avec les formalités dans le wagon : un moyen simple de combiner Mongolie et lac Baïkal.',
        'Pour le Naadam (11–13 juillet), hôtels et vols intérieurs sont complets des mois à l’avance et les e-visas prennent plus de temps : demandez et réservez tôt.',
        'L’exemption pour 34 pays a été prolongée jusqu’au 31 décembre 2026. Si votre voyage tombe en 2027, suivez l’actualité : les prolongations sont souvent annoncées au dernier moment.',
        'Hors d’Oulan-Bator, les cartes sont rarement acceptées : retirez des tögrögs dans la capitale et louez une voiture avec chauffeur via les maisons d’hôtes.',
      ],
      pitfalls: [
        'Impossible de traverser à pied à Kiakhta comme à Zamyn-Oud : il faut être en voiture ou en bus, organisez donc un chauffeur à l’avance.',
        'Rester plus de 30 jours sans enregistrement vaut une amende à la sortie et peut compliquer une nouvelle entrée.',
        'Les sites intermédiaires vendent l’e-visa plus cher ; le portail officiel est evisa.mn.',
      ],
      passports: {
        RU: 'Les Russes ont 30 jours sans visa par entrée et pas plus de 90 jours sur 180. Les cartes russes ne fonctionnent pas : apportez des dollars ou des roubles et changez-les dans les banques d’Oulan-Bator.',
        US: 'Les citoyens américains entrent sans visa pour 90 jours ; au-delà de 30 jours, il faut s’enregistrer auprès de l’Agence de l’immigration.',
        CN: 'Les citoyens chinois ont besoin d’un visa ou d’un e-visa ; l’itinéraire le plus prisé est le train Pékin – Oulan-Bator via Erenhot.',
        KZ: 'Les citoyens kazakhs entrent sans visa pour 90 jours.',
      },
    },
    it: {
      summary:
        'I cittadini russi entrano senza visto per 30 giorni, kazaki e bielorussi per 90, statunitensi per 90 e coreani per 90. Quelli di UE, Regno Unito, Australia e Nuova Zelanda (34 paesi in tutto) hanno 30 giorni senza visto grazie a un regime temporaneo prorogato fino a fine 2026; Canada, Giappone, Turchia e Israele hanno 30 giorni in modo permanente. Tutti gli altri hanno bisogno del visto elettronico.',
      apply:
        'Il visto elettronico si richiede su evisa.mn: modulo, foto, scansione del passaporto e talvolta un invito di un’agenzia o di una guesthouse; la tassa compare al momento della domanda. Fai domanda almeno 2–3 settimane prima, perché d’estate, prima del Naadam, i tempi si allungano. Se resti più di 30 giorni, registrati all’Agenzia per l’immigrazione entro 7 giorni dall’arrivo.',
      visaRun:
        'Il visa run è possibile, con qualche riserva: i russi hanno 30 giorni per ingresso e non più di 90 su 180, e per gli altri i rientri frequenti senza visto potrebbero non essere accettati. Di solito si esce in treno o in auto da Altanbulag – Kjachta verso la Russia o da Zamyn-Üüd – Erenhot verso la Cina.',
      hacks: [
        'Il treno Ulan Bator – Irkutsk o Ulan-Udė passa il confine a Sükhbaatar – Naushki, con i controlli direttamente in carrozza: un modo comodo per unire Mongolia e lago Bajkal.',
        'Per il Naadam (11–13 luglio) hotel e voli interni vanno esauriti con mesi d’anticipo e i visti elettronici richiedono più tempo: fai domanda e prenota presto.',
        'L’esenzione per 34 paesi è stata prorogata fino al 31 dicembre 2026. Se il tuo viaggio cade nel 2027, segui le notizie: le proroghe di solito arrivano all’ultimo momento.',
        'Fuori da Ulan Bator le carte sono accettate di rado: preleva tögrög nella capitale e noleggia un’auto con autista tramite le guesthouse.',
      ],
      pitfalls: [
        'Non si può attraversare a piedi né a Kjachta né a Zamyn-Üüd: devi essere in auto o in autobus, quindi organizza prima un autista.',
        'Restare oltre 30 giorni senza registrazione comporta una multa all’uscita e possibili problemi a rientrare.',
        'I siti intermediari vendono il visto elettronico a prezzi più alti; il portale ufficiale è evisa.mn.',
      ],
      passports: {
        RU: 'I russi hanno 30 giorni senza visto per ingresso e non più di 90 giorni su 180. Le carte russe non funzionano: porta dollari o rubli e cambiali nelle banche di Ulan Bator.',
        US: 'I cittadini statunitensi entrano senza visto per 90 giorni; per soggiorni oltre i 30 giorni serve la registrazione all’Agenzia per l’immigrazione.',
        CN: 'I cittadini cinesi hanno bisogno di un visto o di un visto elettronico; la via più popolare è il treno Pechino – Ulan Bator via Erenhot.',
        KZ: 'I cittadini kazaki entrano senza visto per 90 giorni.',
      },
    },
  },
};

export default guide;
