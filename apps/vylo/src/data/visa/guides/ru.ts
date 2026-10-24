import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'RU',
  checked: '2026-10',
  overrides: {
    SA: { status: 'free', days: 90 },
  },
  fees: { evisa: { kind: 'from', amount: 52, currency: 'USD' } },
  stay: { evisa: 30 },
  links: { evisa: 'https://evisa.kdmid.ru' },
  forms: [{ name: 'ruID (Gosuslugi)' }],
  docs: ['insurance'],
  passportMonths: 6,
  visaRun: 'limited',
  transit: { hours: 24 },
  hackScope: [null, null, null, null, null],
  pitfallScope: [['regime:evisa'], null, null, ['regime:free']],
  text: {
    ru: {
      summary:
        'Без визы въезжают граждане большинства стран СНГ, Грузии, Бразилии, Аргентины, Израиля, ОАЭ, Кореи (60 дней), Таиланда и Китая (30 дней), а с мая 2026 года — Саудовской Аравии. Большинство европейцев, а также граждане Японии, Индии, Турции и Мексики получают единую электронную визу до 30 дней. Гражданам США, Великобритании, Канады и Австралии нужна обычная консульская виза.',
      apply:
        'Электронную визу оформляют на evisa.kdmid.ru не позже чем за 4 дня до въезда: анкета, фото, скан паспорта и медстраховка, действующая в России. Сбор — около 52 $ (повышен в октябре 2026 года, списывается в местной валюте), оплата иностранной картой. Виза однократная, действует 120 дней с выдачи и даёт до 30 дней подряд; въезжать нужно через пункты из официального списка — это почти все аэропорты и многие наземные переходы. Для консульской визы нужно приглашение (туристический ваучер) от гостиницы или турфирмы.',
      visaRun:
        'С 2025 года безвизовые иностранцы могут находиться в России не больше 90 дней за календарный год, и выезд счётчик не обнуляет. С электронной визой после выезда можно оформить новую, но каждая даёт лишь один въезд на 30 дней. Продлить туристическую или электронную визу внутри страны нельзя.',
      transit:
        'Транзит без визы до 24 часов возможен в аэропортах с транзитной зоной, например в Шереметьеве, если вы не выходите за паспортный контроль и багаж оформлен до конечного пункта. Переезд между аэропортами Москвы — это уже въезд в страну, и для него нужна виза.',
      hacks: [
        'Первые ночи бронируйте в гостинице: она ставит на миграционный учёт в день заселения. При аренде квартиры заранее договоритесь, что хозяин подаст уведомление в течение 7 рабочих дней, и сохраните отрывной талон.',
        'Иностранные Visa и Mastercard в России не работают ни в магазинах, ни в банкоматах. Везите евро или доллары новыми чистыми купюрами (до 10 000 $ на человека без декларации) и меняйте в крупных банках.',
        'Сбербанк, ВТБ и ещё несколько банков выпускают иностранцам карты «Мир» по паспорту — в Москве и Петербурге это можно сделать даже в отделениях в аэропортах. Карту пополняют наличными и платят ею везде, включая метро.',
        'Финская граница закрыта с конца 2023 года. Из ЕС по суше можно въехать пешком через Нарву — Ивангород или через латвийские переходы; заранее проверьте, что пункт есть в списке для электронной визы.',
        'Мобильный интернет в 2025–2026 годах регулярно отключают во многих регионах, а местная SIM-карта для иностранца требует подтверждения личности через «Госуслуги» или биометрию. Скачайте офлайн-карты и сохраните адрес гостиницы.',
      ],
      pitfalls: [
        'Сайты-посредники с похожими адресами берут за электронную визу в 2–3 раза больше. Официальный адрес один — evisa.kdmid.ru.',
        'Между Беларусью и Россией нет пограничного контроля, и иностранцам из третьих стран въезжать так нельзя. Прилетайте или пересекайте внешнюю границу через международный пункт пропуска.',
        'Превышение 90 дней в году или жизнь без миграционного учёта грозит штрафом, выдворением и запретом въезда на несколько лет.',
        'С июля 2026 года безвизовых иностранцев, по сообщениям, обязывают заранее (за 72 часа) подавать данные в приложении ruID — правило вводили поэтапно, так что проверьте его перед поездкой.',
      ],
      passports: {
        RU: 'Это ваша страна: граждане России, включая имеющих второе гражданство, въезжают и выезжают только по российскому паспорту. Для внутренних рейсов и поездов нужен внутренний паспорт.',
        US: 'Электронная виза гражданам США недоступна: нужна консульская туристическая виза с приглашением от гостиницы или турфирмы. Закладывайте на неё несколько недель.',
        GB: 'Гражданам Великобритании электронная виза не положена: оформляйте консульскую туристическую визу через визовый центр, с приглашением и страховкой.',
        CN: 'Граждане Китая въезжают без визы на 30 дней; указом от июля 2026 года режим продлён до 31 декабря 2027 года. Карты UnionPay китайских банков работают чаще других иностранных карт.',
        UA: 'Формально безвизовый въезд сохраняется, но на практике граждан Украины пропускают лишь через немногие пункты (прежде всего Шереметьево) после долгой проверки. Серьёзно оцените риски поездки.',
        KZ: 'Граждане стран ЕАЭС (Казахстан, Беларусь, Армения, Киргизия) могут находиться без миграционного учёта до 30 дней. Казахстанцы въезжают по ID-карте.',
        SA: 'С 11 мая 2026 года граждане Саудовской Аравии въезжают без визы на срок до 90 дней в году — одной поездкой или несколькими.',
      },
    },
    en: {
      summary:
        'Citizens of most CIS countries, Georgia, Brazil, Argentina, Israel, the UAE, Korea (60 days), Thailand and China (30 days) and, since May 2026, Saudi Arabia enter visa-free. Most Europeans, plus Japanese, Indian, Turkish and Mexican citizens, use the unified e-visa for up to 30 days. US, UK, Canadian and Australian citizens need a regular consular visa.',
      apply:
        'Apply on evisa.kdmid.ru at least 4 days before entry: form, photo, passport scan and medical insurance valid in Russia. The fee is about $52 (raised in October 2026 and charged in local currency), payable by foreign card. The e-visa is single-entry, valid for 120 days from issue, and allows up to 30 consecutive days; you must enter through a listed checkpoint — almost every airport and many land crossings. A consular visa needs an invitation (tourist voucher) from a hotel or travel company.',
      visaRun:
        'Since 2025, visa-free foreigners may spend no more than 90 days per calendar year in Russia, and leaving does not reset the count. On an e-visa you can apply for a new one after you leave, but each allows just one 30-day entry. Tourist visas and e-visas cannot be extended inside the country.',
      transit:
        'Visa-free transit of up to 24 hours works at airports with a transit zone, such as Moscow Sheremetyevo, as long as you stay airside and your bags are checked through. Switching between Moscow airports counts as entering Russia and needs a visa.',
      hacks: [
        'Book your first nights in a hotel: it registers you with the migration authorities on check-in. If you rent a flat, agree beforehand that the owner will file the notice within 7 working days, and keep the tear-off slip.',
        'Foreign Visa and Mastercard cards do not work in Russia, neither in shops nor at ATMs. Bring euros or dollars in clean, recent notes (up to $10,000 per person without a declaration) and change them at large banks.',
        'Sberbank, VTB and a few other banks issue Mir cards to foreigners against a passport — in Moscow and St Petersburg even at airport branches. Top the card up with cash and use it everywhere, including the metro.',
        'The Finnish border has been closed since late 2023. Overland from the EU you can still walk across at Narva – Ivangorod or use the Latvian crossings; check first that your checkpoint is on the e-visa list.',
        'Mobile internet was regularly switched off in many regions in 2025–2026, and a local SIM for foreigners requires identity checks through Gosuslugi or biometrics. Download offline maps and save your hotel address.',
      ],
      pitfalls: [
        'Look-alike agency sites charge two to three times more for the e-visa. The only official address is evisa.kdmid.ru.',
        'There is no border control between Belarus and Russia, and third-country nationals may not enter that way. Fly in, or cross an external border at an international checkpoint.',
        'Exceeding 90 days per year or staying without migration registration can mean a fine, removal and an entry ban of several years.',
        'From July 2026, visa-free foreigners are reportedly required to submit their details in the ruID app 72 hours before arrival — the rule was phased in, so check it before you travel.',
      ],
      passports: {
        RU: 'This is your own country: Russian citizens, including dual nationals, must enter and leave on a Russian passport. Domestic flights and trains require the internal passport.',
        US: 'The e-visa is not open to US citizens: you need a consular tourist visa with an invitation from a hotel or travel company. Allow several weeks.',
        GB: 'UK citizens cannot use the e-visa: apply for a consular tourist visa through the visa centre, with an invitation and insurance.',
        CN: 'Chinese citizens enter visa-free for 30 days; a July 2026 decree extended the scheme until 31 December 2027. UnionPay cards from Chinese banks work more often than other foreign cards.',
        UA: 'Visa-free entry formally remains, but in practice Ukrainian citizens are admitted only through a few checkpoints (mainly Sheremetyevo) after lengthy screening. Weigh the risks of the trip seriously.',
        KZ: 'Citizens of EAEU countries (Kazakhstan, Belarus, Armenia, Kyrgyzstan) may stay up to 30 days without migration registration. Kazakh citizens can enter with their ID card.',
        SA: 'Since 11 May 2026, Saudi citizens enter visa-free for up to 90 days per year, in one trip or several.',
      },
    },
    es: {
      summary:
        'Entran sin visado los ciudadanos de la mayoría de los países de la CEI, Georgia, Brasil, Argentina, Israel, los EAU, Corea (60 días), Tailandia y China (30 días) y, desde mayo de 2026, Arabia Saudí. La mayoría de los europeos, además de japoneses, indios, turcos y mexicanos, usan el visado electrónico unificado de hasta 30 días. Los ciudadanos de EE. UU., Reino Unido, Canadá y Australia necesitan un visado consular.',
      apply:
        'Solicítalo en evisa.kdmid.ru al menos 4 días antes de entrar: formulario, foto, copia del pasaporte y un seguro médico válido en Rusia. La tasa ronda los 52 $ (subió en octubre de 2026 y se cobra en moneda local) y se paga con tarjeta extranjera. Es de una sola entrada, vale 120 días desde su emisión y permite hasta 30 días seguidos; hay que entrar por un puesto de la lista oficial, que incluye casi todos los aeropuertos y muchos pasos terrestres. El visado consular exige una invitación (voucher turístico) de un hotel o agencia.',
      visaRun:
        'Desde 2025, los extranjeros sin visado pueden pasar como máximo 90 días por año natural en Rusia, y salir del país no reinicia la cuenta. Con visado electrónico puedes pedir uno nuevo al salir, pero cada uno da una sola entrada de 30 días. Ni el visado turístico ni el electrónico se prorrogan dentro del país.',
      transit:
        'El tránsito sin visado de hasta 24 horas funciona en aeropuertos con zona de tránsito, como Moscú-Sheremétievo, siempre que no pases el control de pasaportes y la maleta vaya facturada hasta el destino. Cambiar de aeropuerto en Moscú equivale a entrar en Rusia y requiere visado.',
      hacks: [
        'Reserva las primeras noches en un hotel: te registra ante migración al hacer el check-in. Si alquilas un piso, acuerda antes que el propietario presente la notificación en 7 días laborables y guarda el resguardo.',
        'Las Visa y Mastercard extranjeras no funcionan en Rusia, ni en tiendas ni en cajeros. Lleva euros o dólares en billetes nuevos y limpios (hasta 10 000 $ por persona sin declarar) y cámbialos en bancos grandes.',
        'Sberbank, VTB y algunos bancos más emiten tarjetas Mir a extranjeros con el pasaporte; en Moscú y San Petersburgo, incluso en sucursales del aeropuerto. Se recarga en efectivo y sirve para todo, metro incluido.',
        'La frontera finlandesa está cerrada desde finales de 2023. Por tierra desde la UE aún puedes cruzar a pie por Narva – Ivangorod o por los pasos letones; comprueba antes que el puesto figura en la lista del visado electrónico.',
        'En 2025–2026 el internet móvil se cortó a menudo en muchas regiones, y una SIM local para extranjeros exige verificar la identidad en Gosuslugi o con biometría. Descarga mapas sin conexión y guarda la dirección del hotel.',
      ],
      pitfalls: [
        'Webs intermediarias con direcciones parecidas cobran el visado electrónico dos o tres veces más caro. La única dirección oficial es evisa.kdmid.ru.',
        'Entre Bielorrusia y Rusia no hay control fronterizo, y los ciudadanos de terceros países no pueden entrar por ahí. Llega en avión o cruza una frontera exterior por un puesto internacional.',
        'Superar los 90 días al año o quedarte sin registro migratorio puede costarte una multa, la expulsión y la prohibición de entrada durante varios años.',
        'Según varias fuentes, desde julio de 2026 los extranjeros sin visado deben enviar sus datos en la app ruID 72 horas antes de llegar; la norma se introdujo por fases, así que compruébala antes de viajar.',
      ],
      passports: {
        RU: 'Es tu propio país: los ciudadanos rusos, también con doble nacionalidad, entran y salen con el pasaporte ruso. Para vuelos y trenes nacionales se usa el pasaporte interno.',
        US: 'El visado electrónico no está disponible para ciudadanos estadounidenses: necesitas un visado turístico consular con invitación de un hotel o agencia. Cuenta con varias semanas.',
        GB: 'Los británicos no pueden usar el visado electrónico: tramita el visado turístico consular en el centro de visados, con invitación y seguro.',
        CN: 'Los ciudadanos chinos entran sin visado 30 días; un decreto de julio de 2026 prorrogó el régimen hasta el 31 de diciembre de 2027. Las tarjetas UnionPay de bancos chinos funcionan más a menudo que otras extranjeras.',
        UA: 'Formalmente se mantiene la exención de visado, pero en la práctica a los ciudadanos ucranianos solo se les admite por pocos puestos (sobre todo Sheremétievo) y tras largos controles. Valora en serio los riesgos del viaje.',
        KZ: 'Los ciudadanos de la UEEA (Kazajistán, Bielorrusia, Armenia, Kirguistán) pueden estar hasta 30 días sin registro migratorio. Los kazajos entran con su documento de identidad.',
        SA: 'Desde el 11 de mayo de 2026, los ciudadanos saudíes entran sin visado hasta 90 días al año, en un viaje o en varios.',
      },
    },
    de: {
      summary:
        'Visumfrei reisen Bürger der meisten GUS-Staaten, Georgiens, Brasiliens, Argentiniens, Israels, der VAE, Koreas (60 Tage), Thailands und Chinas (30 Tage) und seit Mai 2026 Saudi-Arabiens ein. Die meisten Europäer sowie Japaner, Inder, Türken und Mexikaner nutzen das einheitliche E-Visum für bis zu 30 Tage. Bürger der USA, Großbritanniens, Kanadas und Australiens brauchen ein konsularisches Visum.',
      apply:
        'Beantrage das E-Visum auf evisa.kdmid.ru spätestens 4 Tage vor der Einreise: Formular, Foto, Passscan und eine in Russland gültige Krankenversicherung. Die Gebühr liegt bei etwa 52 $ (im Oktober 2026 erhöht, abgerechnet in Landeswährung) und wird mit ausländischer Karte bezahlt. Es gilt für eine Einreise, 120 Tage ab Ausstellung und bis zu 30 Tage am Stück; einreisen musst du über einen gelisteten Grenzübergang – fast alle Flughäfen und viele Landübergänge. Für ein Konsularvisum brauchst du eine Einladung (Touristenvoucher) von Hotel oder Reiseveranstalter.',
      visaRun:
        'Seit 2025 dürfen sich visumfreie Ausländer höchstens 90 Tage pro Kalenderjahr in Russland aufhalten, und eine Ausreise setzt den Zähler nicht zurück. Mit E-Visum kannst du nach der Ausreise ein neues beantragen, jedes erlaubt aber nur eine Einreise für 30 Tage. Touristen- und E-Visa lassen sich im Land nicht verlängern.',
      transit:
        'Visumfreier Transit bis 24 Stunden klappt an Flughäfen mit Transitbereich wie Moskau-Scheremetjewo, solange du die Passkontrolle nicht passierst und das Gepäck durchgecheckt ist. Ein Wechsel zwischen Moskauer Flughäfen gilt als Einreise und erfordert ein Visum.',
      hacks: [
        'Buche die ersten Nächte im Hotel: Es meldet dich beim Check-in bei der Migrationsbehörde an. Mietest du eine Wohnung, vereinbare vorab, dass der Vermieter die Meldung binnen 7 Werktagen abgibt, und bewahre den Abschnitt auf.',
        'Ausländische Visa- und Mastercard-Karten funktionieren in Russland nicht, weder im Geschäft noch am Automaten. Nimm Euro oder Dollar in sauberen, neuen Scheinen mit (bis 10.000 $ pro Person ohne Anmeldung) und tausche bei großen Banken.',
        'Sberbank, VTB und einige andere Banken geben Ausländern gegen Pass eine Mir-Karte aus – in Moskau und St. Petersburg sogar in Filialen am Flughafen. Du lädst sie bar auf und zahlst damit überall, auch in der Metro.',
        'Die finnische Grenze ist seit Ende 2023 geschlossen. Über Land aus der EU kommst du noch zu Fuß über Narva – Iwangorod oder über die lettischen Übergänge; prüfe vorher, ob der Übergang auf der E-Visum-Liste steht.',
        'Mobiles Internet wurde 2025–2026 in vielen Regionen regelmäßig abgeschaltet, und eine lokale SIM erfordert für Ausländer eine Identitätsprüfung über Gosuslugi oder Biometrie. Lade Offline-Karten herunter und speichere die Hoteladresse.',
      ],
      pitfalls: [
        'Vermittlerseiten mit ähnlicher Adresse verlangen für das E-Visum das Zwei- bis Dreifache. Die einzige offizielle Adresse ist evisa.kdmid.ru.',
        'Zwischen Belarus und Russland gibt es keine Grenzkontrolle, und Drittstaatsangehörige dürfen dort nicht einreisen. Flieg ein oder nutze einen internationalen Übergang an der Außengrenze.',
        'Wer mehr als 90 Tage im Jahr bleibt oder sich nicht anmeldet, riskiert Bußgeld, Ausweisung und eine mehrjährige Einreisesperre.',
        'Seit Juli 2026 sollen visumfreie Ausländer laut Berichten ihre Daten 72 Stunden vor der Einreise in der App ruID übermitteln – die Regel wurde schrittweise eingeführt, prüfe sie also vor der Reise.',
      ],
      passports: {
        RU: 'Das ist dein eigenes Land: Russische Staatsangehörige, auch mit zweitem Pass, reisen mit dem russischen Pass ein und aus. Für Inlandsflüge und Züge braucht man den Inlandspass.',
        US: 'Das E-Visum steht US-Bürgern nicht offen: Du brauchst ein konsularisches Touristenvisum mit Einladung von Hotel oder Reiseveranstalter. Plane mehrere Wochen ein.',
        GB: 'Britische Staatsangehörige können das E-Visum nicht nutzen: Beantrage das konsularische Touristenvisum über das Visazentrum, mit Einladung und Versicherung.',
        CN: 'Chinesische Staatsangehörige reisen 30 Tage visumfrei ein; ein Dekret vom Juli 2026 hat die Regelung bis 31. Dezember 2027 verlängert. UnionPay-Karten chinesischer Banken funktionieren öfter als andere ausländische Karten.',
        UA: 'Formal gilt weiter Visumfreiheit, praktisch werden ukrainische Staatsangehörige aber nur an wenigen Übergängen (vor allem Scheremetjewo) und nach langer Befragung eingelassen. Wäge die Risiken der Reise ernsthaft ab.',
        KZ: 'Bürger der EAWU-Staaten (Kasachstan, Belarus, Armenien, Kirgisistan) dürfen bis zu 30 Tage ohne Migrationsanmeldung bleiben. Kasachen reisen mit dem Personalausweis ein.',
        SA: 'Seit 11. Mai 2026 reisen saudische Staatsangehörige bis zu 90 Tage pro Jahr visumfrei ein, am Stück oder verteilt.',
      },
    },
    fr: {
      summary:
        'Entrent sans visa les ressortissants de la plupart des pays de la CEI, de Géorgie, du Brésil, d’Argentine, d’Israël, des Émirats, de Corée (60 jours), de Thaïlande et de Chine (30 jours) et, depuis mai 2026, d’Arabie saoudite. La plupart des Européens, ainsi que les Japonais, Indiens, Turcs et Mexicains, utilisent l’e-visa unifié jusqu’à 30 jours. Les citoyens américains, britanniques, canadiens et australiens ont besoin d’un visa consulaire.',
      apply:
        'Faites la demande sur evisa.kdmid.ru au moins 4 jours avant l’entrée : formulaire, photo, scan du passeport et assurance médicale valable en Russie. Les frais tournent autour de 52 $ (relevés en octobre 2026 et facturés en devise locale), payables par carte étrangère. L’e-visa est à entrée unique, valable 120 jours après sa délivrance, pour un séjour de 30 jours consécutifs au plus ; l’entrée doit se faire par un poste de la liste officielle — presque tous les aéroports et de nombreux postes terrestres. Le visa consulaire exige une invitation (voucher touristique) d’un hôtel ou d’une agence.',
      visaRun:
        'Depuis 2025, les étrangers exemptés de visa ne peuvent passer plus de 90 jours par année civile en Russie, et une sortie ne remet pas le compteur à zéro. Avec un e-visa, vous pouvez en demander un nouveau après être sorti, mais chacun ne donne qu’une entrée de 30 jours. Ni le visa touristique ni l’e-visa ne se prolongent sur place.',
      transit:
        'Le transit sans visa jusqu’à 24 heures est possible dans les aéroports dotés d’une zone de transit, comme Moscou-Cheremetievo, tant que vous restez côté piste et que vos bagages sont enregistrés jusqu’à destination. Changer d’aéroport à Moscou revient à entrer en Russie et exige un visa.',
      hacks: [
        'Réservez les premières nuits à l’hôtel : il vous enregistre auprès des services migratoires dès l’arrivée. En location, convenez à l’avance que le propriétaire fera la déclaration sous 7 jours ouvrés, et gardez le coupon détachable.',
        'Les cartes Visa et Mastercard étrangères ne fonctionnent pas en Russie, ni en magasin ni aux distributeurs. Emportez des euros ou des dollars en billets récents et propres (jusqu’à 10 000 $ par personne sans déclaration) et changez-les dans les grandes banques.',
        'Sberbank, VTB et quelques autres banques délivrent aux étrangers une carte Mir sur présentation du passeport — à Moscou et Saint-Pétersbourg, même dans les agences des aéroports. On la recharge en espèces et elle sert partout, métro compris.',
        'La frontière finlandaise est fermée depuis fin 2023. Par voie terrestre depuis l’UE, on peut encore passer à pied à Narva – Ivangorod ou par les postes lettons ; vérifiez d’abord que le poste figure sur la liste de l’e-visa.',
        'En 2025–2026, l’internet mobile a souvent été coupé dans de nombreuses régions, et une SIM locale pour étranger impose une vérification d’identité via Gosuslugi ou la biométrie. Téléchargez des cartes hors ligne et notez l’adresse de l’hôtel.',
      ],
      pitfalls: [
        'Des sites intermédiaires aux adresses ressemblantes facturent l’e-visa deux à trois fois plus cher. La seule adresse officielle est evisa.kdmid.ru.',
        'Il n’y a pas de contrôle frontalier entre la Biélorussie et la Russie, et les ressortissants de pays tiers ne peuvent pas entrer par là. Arrivez en avion ou franchissez une frontière extérieure par un poste international.',
        'Dépasser 90 jours par an ou séjourner sans enregistrement migratoire peut valoir une amende, une expulsion et une interdiction d’entrée de plusieurs années.',
        'Depuis juillet 2026, les étrangers exemptés de visa devraient, selon plusieurs sources, déclarer leurs données dans l’application ruID 72 heures avant l’arrivée ; la règle a été introduite par étapes, vérifiez-la avant le départ.',
      ],
      passports: {
        RU: 'C’est votre propre pays : les citoyens russes, binationaux compris, entrent et sortent avec leur passeport russe. Les vols et trains intérieurs se prennent avec le passeport intérieur.',
        US: 'L’e-visa n’est pas ouvert aux citoyens américains : il faut un visa touristique consulaire avec invitation d’un hôtel ou d’une agence. Comptez plusieurs semaines.',
        GB: 'Les Britanniques n’ont pas accès à l’e-visa : demandez un visa touristique consulaire via le centre de visas, avec invitation et assurance.',
        CN: 'Les ressortissants chinois entrent sans visa pour 30 jours ; un décret de juillet 2026 a prolongé le régime jusqu’au 31 décembre 2027. Les cartes UnionPay de banques chinoises passent plus souvent que les autres cartes étrangères.',
        UA: 'L’exemption de visa subsiste sur le papier, mais en pratique les citoyens ukrainiens ne sont admis que par quelques postes (surtout Cheremetievo), après de longs contrôles. Pesez sérieusement les risques du voyage.',
        KZ: 'Les citoyens de l’UEEA (Kazakhstan, Biélorussie, Arménie, Kirghizistan) peuvent rester jusqu’à 30 jours sans enregistrement migratoire. Les Kazakhs entrent avec leur carte d’identité.',
        SA: 'Depuis le 11 mai 2026, les citoyens saoudiens entrent sans visa jusqu’à 90 jours par an, en un ou plusieurs séjours.',
      },
    },
    it: {
      summary:
        'Entrano senza visto i cittadini della maggior parte dei paesi della CSI, della Georgia, del Brasile, dell’Argentina, di Israele, degli Emirati, della Corea (60 giorni), della Thailandia e della Cina (30 giorni) e, da maggio 2026, dell’Arabia Saudita. Gran parte degli europei, oltre a giapponesi, indiani, turchi e messicani, usa il visto elettronico unificato fino a 30 giorni. I cittadini di Stati Uniti, Regno Unito, Canada e Australia hanno bisogno di un visto consolare.',
      apply:
        'Fai domanda su evisa.kdmid.ru almeno 4 giorni prima dell’ingresso: modulo, foto, scansione del passaporto e assicurazione sanitaria valida in Russia. La tassa è di circa 52 $ (aumentata a ottobre 2026 e addebitata in valuta locale) e si paga con carta estera. Il visto è a ingresso singolo, vale 120 giorni dal rilascio e consente fino a 30 giorni consecutivi; si entra da un valico della lista ufficiale, che comprende quasi tutti gli aeroporti e molti valichi terrestri. Il visto consolare richiede un invito (voucher turistico) di un hotel o di un’agenzia.',
      visaRun:
        'Dal 2025 gli stranieri esenti da visto possono restare in Russia al massimo 90 giorni per anno solare, e uscire non azzera il conteggio. Con il visto elettronico puoi chiederne uno nuovo dopo l’uscita, ma ognuno vale per un solo ingresso di 30 giorni. Né il visto turistico né quello elettronico si prorogano nel paese.',
      transit:
        'Il transito senza visto fino a 24 ore è possibile negli aeroporti con zona di transito, come Mosca-Šeremet’evo, purché tu non passi il controllo passaporti e il bagaglio sia registrato fino a destinazione. Cambiare aeroporto a Mosca equivale a entrare in Russia e richiede il visto.',
      hacks: [
        'Prenota le prime notti in hotel: ti registra presso l’ufficio migrazione al check-in. Se affitti un appartamento, accordati prima perché il proprietario presenti la notifica entro 7 giorni lavorativi, e conserva la ricevuta staccabile.',
        'Le carte Visa e Mastercard estere in Russia non funzionano, né nei negozi né agli sportelli. Porta euro o dollari in banconote nuove e pulite (fino a 10.000 $ a persona senza dichiarazione) e cambiali nelle grandi banche.',
        'Sberbank, VTB e poche altre banche rilasciano agli stranieri una carta Mir con il passaporto, a Mosca e San Pietroburgo anche negli sportelli in aeroporto. Si ricarica in contanti e si usa ovunque, metro compresa.',
        'Il confine finlandese è chiuso dalla fine del 2023. Via terra dall’UE puoi ancora passare a piedi da Narva – Ivangorod o dai valichi lettoni; verifica prima che il valico sia nella lista del visto elettronico.',
        'Nel 2025–2026 internet mobile è stato spesso spento in molte regioni, e una SIM locale per stranieri richiede la verifica dell’identità tramite Gosuslugi o biometria. Scarica mappe offline e salva l’indirizzo dell’hotel.',
      ],
      pitfalls: [
        'I siti intermediari con indirizzi simili fanno pagare il visto elettronico due o tre volte di più. L’unico indirizzo ufficiale è evisa.kdmid.ru.',
        'Tra Bielorussia e Russia non c’è controllo di frontiera, e i cittadini di paesi terzi non possono entrare da lì. Arriva in aereo o attraversa una frontiera esterna da un valico internazionale.',
        'Superare i 90 giorni all’anno o restare senza registrazione migratoria può costare una multa, l’espulsione e un divieto d’ingresso di diversi anni.',
        'Da luglio 2026 gli stranieri esenti da visto dovrebbero, secondo varie fonti, inviare i propri dati nell’app ruID 72 ore prima dell’arrivo; la regola è stata introdotta per gradi, quindi verificala prima di partire.',
      ],
      passports: {
        RU: 'È il tuo paese: i cittadini russi, anche con doppia cittadinanza, entrano ed escono con il passaporto russo. Per voli e treni interni serve il passaporto interno.',
        US: 'Il visto elettronico non è previsto per i cittadini statunitensi: serve un visto turistico consolare con invito di un hotel o di un’agenzia. Calcola alcune settimane.',
        GB: 'I cittadini britannici non possono usare il visto elettronico: richiedi il visto turistico consolare tramite il centro visti, con invito e assicurazione.',
        CN: 'I cittadini cinesi entrano senza visto per 30 giorni; un decreto di luglio 2026 ha prorogato il regime fino al 31 dicembre 2027. Le carte UnionPay di banche cinesi funzionano più spesso di altre carte estere.',
        UA: 'Sulla carta l’esenzione dal visto resta, ma in pratica i cittadini ucraini vengono ammessi solo da pochi valichi (soprattutto Šeremet’evo) e dopo lunghi controlli. Valuta seriamente i rischi del viaggio.',
        KZ: 'I cittadini dell’UEEA (Kazakistan, Bielorussia, Armenia, Kirghizistan) possono restare fino a 30 giorni senza registrazione migratoria. I kazaki entrano con la carta d’identità.',
        SA: 'Dall’11 maggio 2026 i cittadini sauditi entrano senza visto fino a 90 giorni l’anno, in uno o più viaggi.',
      },
    },
  },
};

export default guide;
