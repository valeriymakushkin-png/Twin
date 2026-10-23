import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'EG',
  checked: '2026-10',
  fees: {
    voa: { kind: 'fixed', amount: 30, currency: 'USD' },
    evisa: { kind: 'from', amount: 30, currency: 'USD' },
  },
  stay: { voa: 30, evisa: 30 },
  links: { evisa: 'https://www.visa2egypt.gov.eg' },
  docs: ['returnTicket', 'booking'],
  passportMonths: 6,
  extend: {},
  visaRun: 'yes',
  borders: [
    { name: 'Taba', to: 'IL', lat: 29.4905, lng: 34.9037 },
    { name: 'Cairo (CAI) → Amman', to: 'JO', lat: 30.1219, lng: 31.4056 },
  ],
  waivers: [
    {
      holds: ['visaUS', 'visaGB', 'visaSchengen', 'visaJP', 'visaCA', 'visaAU', 'visaNZ', 'resGCC'],
      passports: ['IN'],
      status: 'voa',
      days: 30,
    },
  ],
  text: {
    ru: {
      summary:
        'Граждане России, ЕС, Великобритании, США, Канады, Австралии, Китая, Японии, Кореи, Казахстана, Украины и многих других стран получают визу по прилёте на 30 дней за 30 $ или заранее оформляют e-визу. Индийцам нужна e-виза, если у них нет визы США, Великобритании, Шенгена или ряда других стран. Для отдыха только на курортах Южного Синая многим национальностям хватает бесплатного штампа на 15 дней.',
      apply:
        'Визу по прилёте покупают в окошках банков в зале прилёта до паспортного контроля: с 1 марта 2026 года она стоит 30 $ (с января 2027-го планируют 33 $), платят наличными долларами или евро. E-визу оформляют на visa2egypt.gov.eg: однократная — 30 $, многократная на полгода — 65 $, рассмотрение до 7 дней.',
      extend:
        'Туристическую визу продлевают в паспортно-иммиграционном управлении (в Каире — в Аббасии, а также в отделениях Хургады, Шарм-эш-Шейха и Луксора). Обычно дают до нескольких месяцев; нужны фото, копия паспорта и иногда подтверждение жилья.',
      visaRun:
        'Визаран работает: после выезда при возвращении просто покупаете новую визу по прилёте. Проще всего — через Табу в Израиль или перелётом в Амман; с Синая паромом Нувейба — Акаба можно съездить в Иорданию.',
      hacks: [
        'Если прилетаете в Шарм-эш-Шейх или въезжаете через Табу и остаётесь только на Синае, попросите бесплатный штамп «Sinai only»: 15 дней в Шарме, Дахабе, Нувейбе, Табе и у монастыря Святой Екатерины без визы.',
        'Многократная e-виза за 65 $ выгодна, если планируете съездить в Иорданию или Израиль и вернуться: новую визу на границе покупать не придётся.',
        'Держите при себе мелкие доллары или евро: окошки виз по прилёте работают только с наличными, а сдачу дают неохотно.',
        'Индийцам с действующей визой США, Великобритании, Шенгена, Японии, Канады, Австралии или Новой Зеландии либо ВНЖ стран Залива (GCC) e-виза не нужна — визу дают по прилёте.',
      ],
      pitfalls: [
        'Штамп «Sinai only» не позволяет выезжать в Каир, Луксор, Хургаду и даже в заповедник Рас-Мохаммед. С ним не посадят на внутренний рейс — для поездки за пределы Синая сразу покупайте полную визу.',
        'В аэропортах навязывают «помощь с визой» за 40–60 $. Визу можно купить самостоятельно в окошке банка за 30 $.',
        'Дроны ввозить запрещено: таможня их изымает в аэропорту.',
        'Сайты-посредники с похожими адресами продают e-визу в 2–3 раза дороже. Официальный портал — visa2egypt.gov.eg.',
      ],
      passports: {
        RU: 'Россияне получают визу по прилёте за 30 $ (с марта 2026 года, раньше было 25 $) или штамп «Sinai only» для отдыха в Шарм-эш-Шейхе. Прямые рейсы в Хургаду и Шарм летают из многих городов России. Российские карты не работают, везите доллары наличными.',
        IL: 'Граждане Израиля через Табу получают бесплатный штамп на Синай; для поездки дальше нужна виза, оформленная заранее.',
        IN: 'Гражданам Индии нужна e-виза или виза по прилёте при наличии визы «западных» стран либо ВНЖ стран Залива (GCC).',
        US: 'Граждане США, ЕС и Великобритании получают визу по прилёте или e-визу и тоже могут въехать на Синай по бесплатному штампу.',
      },
      waivers: [
        'Виза США, Великобритании, Шенгена, Японии, Канады, Австралии или Новой Зеландии должна быть действительной; надёжнее, если она уже использована. Визу по прилёте дают в аэропортах Каира, Хургады и Шарм-эш-Шейха; на всякий случай имейте бронь отеля и обратный билет.',
      ],
    },
    en: {
      summary:
        'Citizens of Russia, the EU, the UK, the US, Canada, Australia, China, Japan, Korea, Kazakhstan, Ukraine and many other countries get a 30-day visa on arrival for $30 or apply for an e-visa in advance. Indians need an e-visa unless they hold a visa from the US, the UK, Schengen or several other countries. For a holiday confined to the South Sinai resorts, many nationalities only need a free 15-day stamp.',
      apply:
        'The visa on arrival is sold at bank counters in the arrivals hall before passport control: since 1 March 2026 it costs $30 (an increase to $33 is planned for January 2027), paid in cash dollars or euros. The e-visa is issued on visa2egypt.gov.eg: $30 for a single entry, $65 for a six-month multiple entry, with processing of up to seven days.',
      extend:
        'Tourist visas are extended at the Passports and Immigration Department (in Cairo at Abbasiya, also in Hurghada, Sharm el-Sheikh and Luxor). Extensions of up to several months are common; you need photos, a passport copy and sometimes proof of accommodation.',
      visaRun:
        'Visa runs work: after leaving, you simply buy a new visa on arrival when you return. The easiest options are Taba into Israel or a flight to Amman; from Sinai, the Nuweiba–Aqaba ferry takes you to Jordan.',
      hacks: [
        'If you fly into Sharm el-Sheikh or enter through Taba and stay only in Sinai, ask for the free “Sinai only” stamp: 15 days in Sharm, Dahab, Nuweiba, Taba and St Catherine’s without a visa.',
        'The $65 multiple-entry e-visa pays off if you plan a side trip to Jordan or Israel and back, as you will not need to buy a new visa at the border.',
        'Carry small dollar or euro notes: visa-on-arrival counters only take cash and are reluctant to give change.',
        'Indians with a valid US, UK, Schengen, Japanese, Canadian, Australian or New Zealand visa or GCC residence do not need an e-visa — they get a visa on arrival.',
      ],
      pitfalls: [
        'The “Sinai only” stamp does not let you go to Cairo, Luxor, Hurghada or even Ras Mohammed national park. You cannot board domestic flights with it, so buy a full visa if you plan to leave Sinai.',
        'At airports, touts push “visa assistance” for $40–60. You can buy the visa yourself at the bank counter for $30.',
        'Drones are banned: customs confiscates them at the airport.',
        'Look-alike agency sites sell the e-visa for two to three times the price. The official portal is visa2egypt.gov.eg.',
      ],
      passports: {
        RU: 'Russian citizens get a visa on arrival for $30 (since March 2026; it used to be $25) or the “Sinai only” stamp for a Sharm el-Sheikh holiday. Direct flights to Hurghada and Sharm leave from many Russian cities. Russian bank cards do not work, so bring US dollars in cash.',
        IL: 'Israeli citizens get a free Sinai stamp at Taba; travelling further requires a visa obtained in advance.',
        IN: 'Indian citizens need an e-visa, or get a visa on arrival with a Western visa or GCC residence.',
        US: 'US, EU and UK citizens get a visa on arrival or an e-visa and can also enter Sinai on the free stamp.',
      },
      waivers: [
        'The US, UK, Schengen, Japanese, Canadian, Australian or New Zealand visa must be valid; it is safer if it has already been used. The visa on arrival is issued at Cairo, Hurghada and Sharm el-Sheikh airports; carry a hotel booking and a return ticket just in case.',
      ],
    },
    es: {
      summary:
        'Los ciudadanos de Rusia, la UE, Reino Unido, EE. UU., Canadá, Australia, China, Japón, Corea, Kazajistán, Ucrania y muchos otros países obtienen un visado a la llegada de 30 días por 30 $ o tramitan antes el visado electrónico. Los indios necesitan visado electrónico salvo que tengan visado de EE. UU., Reino Unido, Schengen u otros países. Para unas vacaciones solo en los resorts del Sinaí Sur, a muchas nacionalidades les basta un sello gratuito de 15 días.',
      apply:
        'El visado a la llegada se compra en las ventanillas de los bancos de la sala de llegadas, antes del control de pasaportes: desde el 1 de marzo de 2026 cuesta 30 $ (para enero de 2027 se prevén 33 $) y se paga en efectivo en dólares o euros. El visado electrónico se tramita en visa2egypt.gov.eg: 30 $ el de una entrada y 65 $ el de entradas múltiples de seis meses, con un plazo de hasta siete días.',
      extend:
        'El visado de turista se prorroga en el Departamento de Pasaportes e Inmigración (en El Cairo, en Abbasiya, y también en Hurghada, Sharm el Sheij y Luxor). Es habitual obtener varios meses; necesitas fotos, copia del pasaporte y a veces justificante de alojamiento.',
      visaRun:
        'El visa run funciona: al volver tras salir del país, compras otro visado a la llegada. Lo más fácil es Taba hacia Israel o un vuelo a Amán; desde el Sinaí, el ferri Nuweiba–Áqaba te lleva a Jordania.',
      hacks: [
        'Si llegas en avión a Sharm el Sheij o entras por Taba y te quedas solo en el Sinaí, pide el sello gratuito «Sinai only»: 15 días en Sharm, Dahab, Nuweiba, Taba y Santa Catalina sin visado.',
        'El visado electrónico de entradas múltiples por 65 $ compensa si piensas escaparte a Jordania o Israel y volver: no tendrás que comprar otro visado en la frontera.',
        'Lleva billetes pequeños de dólar o euro: las ventanillas del visado a la llegada solo aceptan efectivo y no les gusta dar cambio.',
        'Los indios con visado vigente de EE. UU., Reino Unido, Schengen, Japón, Canadá, Australia o Nueva Zelanda, o residencia en el CCG, no necesitan visado electrónico: lo obtienen a la llegada.',
      ],
      pitfalls: [
        'Con el sello «Sinai only» no puedes ir a El Cairo, Luxor, Hurghada ni siquiera al parque de Ras Mohammed, ni tomar vuelos nacionales. Si vas a salir del Sinaí, compra el visado completo.',
        'En los aeropuertos te ofrecen «ayuda con el visado» por 40–60 $. Puedes comprarlo tú mismo en la ventanilla del banco por 30 $.',
        'Los drones están prohibidos: la aduana los confisca en el aeropuerto.',
        'Las webs intermediarias con direcciones parecidas venden el visado electrónico por dos o tres veces su precio. El portal oficial es visa2egypt.gov.eg.',
      ],
      passports: {
        RU: 'Los ciudadanos rusos obtienen visado a la llegada por 30 $ (desde marzo de 2026; antes eran 25 $) o el sello «Sinai only» para unas vacaciones en Sharm el Sheij. Hay vuelos directos a Hurghada y Sharm desde muchas ciudades rusas. Las tarjetas rusas no funcionan: lleva dólares en efectivo.',
        IL: 'Los ciudadanos israelíes reciben en Taba un sello gratuito para el Sinaí; para ir más allá necesitan un visado tramitado antes.',
        IN: 'Los ciudadanos indios necesitan visado electrónico, o lo obtienen a la llegada si tienen un visado occidental o residencia en el CCG.',
        US: 'Los ciudadanos de EE. UU., la UE y Reino Unido obtienen visado a la llegada o electrónico y también pueden entrar al Sinaí con el sello gratuito.',
      },
      waivers: [
        'El visado de EE. UU., Reino Unido, Schengen, Japón, Canadá, Australia o Nueva Zelanda debe estar vigente; es más seguro si ya lo has usado. El visado a la llegada se da en los aeropuertos de El Cairo, Hurghada y Sharm el Sheij; lleva por si acaso reserva de hotel y billete de vuelta.',
      ],
    },
    de: {
      summary:
        'Staatsangehörige Russlands, der EU, Großbritanniens, der USA, Kanadas, Australiens, Chinas, Japans, Koreas, Kasachstans, der Ukraine und vieler weiterer Länder bekommen für 30 $ ein 30-Tage-Visum bei Ankunft oder beantragen vorab ein E-Visum. Inder brauchen ein E-Visum, sofern sie kein Visum der USA, Großbritanniens, des Schengenraums oder einiger anderer Länder haben. Für Urlaub nur in den Resorts im Südsinai reicht vielen Nationalitäten ein kostenloser 15-Tage-Stempel.',
      apply:
        'Das Visum bei Ankunft kaufst du an Bankschaltern in der Ankunftshalle vor der Passkontrolle: Seit dem 1. März 2026 kostet es 30 $ (für Januar 2027 sind 33 $ geplant), bezahlt wird bar in Dollar oder Euro. Das E-Visum gibt es auf visa2egypt.gov.eg: 30 $ für eine Einreise, 65 $ für sechs Monate mehrfache Einreise, Bearbeitung bis zu sieben Tage.',
      extend:
        'Touristenvisa verlängert die Pass- und Einwanderungsbehörde (in Kairo in Abbasiya, außerdem in Hurghada, Scharm el-Scheich und Luxor). Verlängerungen um mehrere Monate sind üblich; nötig sind Fotos, eine Passkopie und manchmal ein Unterkunftsnachweis.',
      visaRun:
        'Visa-Runs funktionieren: Nach der Ausreise kaufst du bei der Rückkehr einfach ein neues Visum bei Ankunft. Am einfachsten über Taba nach Israel oder per Flug nach Amman; vom Sinai bringt dich die Fähre Nuweiba–Akaba nach Jordanien.',
      hacks: [
        'Wenn du in Scharm el-Scheich landest oder über Taba einreist und nur auf dem Sinai bleibst, frag nach dem kostenlosen „Sinai only“-Stempel: 15 Tage in Scharm, Dahab, Nuweiba, Taba und am Katharinenkloster ohne Visum.',
        'Das E-Visum für mehrfache Einreise für 65 $ lohnt sich, wenn du einen Abstecher nach Jordanien oder Israel und zurück planst – an der Grenze musst du dann kein neues Visum kaufen.',
        'Hab kleine Dollar- oder Euroscheine dabei: Die Schalter für das Visum bei Ankunft nehmen nur Bargeld und geben ungern Wechselgeld.',
        'Inder mit gültigem Visum der USA, Großbritanniens, des Schengenraums, Japans, Kanadas, Australiens oder Neuseelands oder mit GCC-Aufenthaltstitel brauchen kein E-Visum – sie bekommen das Visum bei Ankunft.',
      ],
      pitfalls: [
        'Mit dem „Sinai only“-Stempel darfst du weder nach Kairo, Luxor oder Hurghada noch in den Nationalpark Ras Mohammed und keine Inlandsflüge nehmen. Willst du den Sinai verlassen, kauf gleich das volle Visum.',
        'An Flughäfen wird „Visum-Hilfe“ für 40–60 $ aufgedrängt. Am Bankschalter bekommst du das Visum selbst für 30 $.',
        'Drohnen sind verboten: Der Zoll beschlagnahmt sie am Flughafen.',
        'Vermittlerseiten mit ähnlicher Adresse verkaufen das E-Visum für das Zwei- bis Dreifache. Das offizielle Portal ist visa2egypt.gov.eg.',
      ],
      passports: {
        RU: 'Russische Staatsangehörige bekommen ein Visum bei Ankunft für 30 $ (seit März 2026, vorher 25 $) oder den „Sinai only“-Stempel für Urlaub in Scharm el-Scheich. Direktflüge nach Hurghada und Scharm starten in vielen russischen Städten. Russische Bankkarten funktionieren nicht – nimm US-Dollar in bar mit.',
        IL: 'Israelische Staatsangehörige bekommen in Taba einen kostenlosen Sinai-Stempel; für Reisen darüber hinaus ist ein vorab beantragtes Visum nötig.',
        IN: 'Indische Staatsangehörige brauchen ein E-Visum oder bekommen mit westlichem Visum oder GCC-Aufenthaltstitel ein Visum bei Ankunft.',
        US: 'Bürger der USA, der EU und Großbritanniens bekommen ein Visum bei Ankunft oder ein E-Visum und können auch mit dem kostenlosen Stempel auf den Sinai.',
      },
      waivers: [
        'Das Visum der USA, Großbritanniens, des Schengenraums, Japans, Kanadas, Australiens oder Neuseelands muss gültig sein; sicherer ist es, wenn es schon benutzt wurde. Das Visum bei Ankunft gibt es an den Flughäfen Kairo, Hurghada und Scharm el-Scheich; hab sicherheitshalber Hotelbuchung und Rückflugticket dabei.',
      ],
    },
    fr: {
      summary:
        'Les ressortissants de Russie, de l’UE, du Royaume-Uni, des États-Unis, du Canada, d’Australie, de Chine, du Japon, de Corée, du Kazakhstan, d’Ukraine et de nombreux autres pays obtiennent un visa à l’arrivée de 30 jours pour 30 $ ou demandent un e-visa à l’avance. Les Indiens ont besoin d’un e-visa, sauf s’ils détiennent un visa américain, britannique, Schengen ou de quelques autres pays. Pour des vacances limitées aux stations du Sud-Sinaï, beaucoup de nationalités n’ont besoin que d’un tampon gratuit de 15 jours.',
      apply:
        'Le visa à l’arrivée s’achète aux guichets des banques dans le hall d’arrivée, avant le contrôle des passeports : depuis le 1er mars 2026, il coûte 30 $ (33 $ prévus à partir de janvier 2027), payables en espèces en dollars ou en euros. L’e-visa se demande sur visa2egypt.gov.eg : 30 $ pour une entrée, 65 $ pour des entrées multiples sur six mois, avec un traitement de sept jours maximum.',
      extend:
        'Le visa touristique se prolonge au Département des passeports et de l’immigration (au Caire à Abbasiya, ainsi qu’à Hurghada, Charm el-Cheikh et Louxor). Des prolongations de plusieurs mois sont courantes ; il faut des photos, une copie du passeport et parfois un justificatif d’hébergement.',
      visaRun:
        'Le visa run fonctionne : après une sortie, vous rachetez simplement un visa à l’arrivée au retour. Le plus simple est Taba vers Israël ou un vol pour Amman ; depuis le Sinaï, le ferry Nuweiba–Aqaba mène en Jordanie.',
      hacks: [
        'Si vous atterrissez à Charm el-Cheikh ou entrez par Taba et restez uniquement dans le Sinaï, demandez le tampon gratuit « Sinai only » : 15 jours à Charm, Dahab, Nuweiba, Taba et Sainte-Catherine sans visa.',
        'L’e-visa à entrées multiples à 65 $ est rentable si vous prévoyez une escapade en Jordanie ou en Israël avec retour : pas besoin de racheter un visa à la frontière.',
        'Ayez de petites coupures en dollars ou en euros : les guichets du visa à l’arrivée n’acceptent que les espèces et rendent la monnaie à contrecœur.',
        'Les Indiens titulaires d’un visa valide des États-Unis, du Royaume-Uni, de l’espace Schengen, du Japon, du Canada, d’Australie ou de Nouvelle-Zélande, ou d’un titre de séjour du CCG, n’ont pas besoin d’e-visa : ils obtiennent le visa à l’arrivée.',
      ],
      pitfalls: [
        'Le tampon « Sinai only » ne permet d’aller ni au Caire, ni à Louxor, ni à Hurghada, ni même au parc de Ras Mohammed, et interdit les vols intérieurs. Si vous comptez quitter le Sinaï, prenez d’emblée le visa complet.',
        'Dans les aéroports, des rabatteurs proposent une « aide au visa » pour 40 à 60 $. Vous pouvez l’acheter vous-même au guichet de la banque pour 30 $.',
        'Les drones sont interdits : la douane les confisque à l’aéroport.',
        'Des sites intermédiaires aux adresses ressemblantes vendent l’e-visa deux à trois fois plus cher. Le portail officiel est visa2egypt.gov.eg.',
      ],
      passports: {
        RU: 'Les ressortissants russes obtiennent un visa à l’arrivée pour 30 $ (depuis mars 2026 ; auparavant 25 $) ou le tampon « Sinai only » pour un séjour à Charm el-Cheikh. Des vols directs pour Hurghada et Charm partent de nombreuses villes russes. Les cartes bancaires russes ne fonctionnent pas : emportez des dollars en espèces.',
        IL: 'Les ressortissants israéliens reçoivent à Taba un tampon gratuit pour le Sinaï ; pour aller plus loin, il faut un visa obtenu à l’avance.',
        IN: 'Les ressortissants indiens ont besoin d’un e-visa, ou obtiennent un visa à l’arrivée avec un visa occidental ou un titre de séjour du CCG.',
        US: 'Les citoyens des États-Unis, de l’UE et du Royaume-Uni obtiennent un visa à l’arrivée ou un e-visa et peuvent aussi entrer dans le Sinaï avec le tampon gratuit.',
      },
      waivers: [
        'Le visa des États-Unis, du Royaume-Uni, de l’espace Schengen, du Japon, du Canada, d’Australie ou de Nouvelle-Zélande doit être valide ; c’est plus sûr s’il a déjà servi. Le visa à l’arrivée est délivré aux aéroports du Caire, de Hurghada et de Charm el-Cheikh ; prévoyez par précaution réservation d’hôtel et billet retour.',
      ],
    },
    it: {
      summary:
        'I cittadini di Russia, UE, Regno Unito, Stati Uniti, Canada, Australia, Cina, Giappone, Corea, Kazakistan, Ucraina e molti altri paesi ottengono un visto all’arrivo di 30 giorni per 30 $ oppure richiedono prima il visto elettronico. Gli indiani hanno bisogno del visto elettronico, a meno che non abbiano un visto di Stati Uniti, Regno Unito, area Schengen o di alcuni altri paesi. Per una vacanza solo nei resort del Sinai meridionale, a molte nazionalità basta un timbro gratuito di 15 giorni.',
      apply:
        'Il visto all’arrivo si compra agli sportelli delle banche nella sala arrivi, prima del controllo passaporti: dal 1° marzo 2026 costa 30 $ (da gennaio 2027 sono previsti 33 $) e si paga in contanti in dollari o euro. Il visto elettronico si richiede su visa2egypt.gov.eg: 30 $ per un ingresso, 65 $ per ingressi multipli in sei mesi, con tempi fino a sette giorni.',
      extend:
        'Il visto turistico si proroga al Dipartimento passaporti e immigrazione (al Cairo ad Abbasiya, e anche a Hurghada, Sharm el-Sheikh e Luxor). Sono comuni proroghe di alcuni mesi; servono foto, copia del passaporto e a volte una prova dell’alloggio.',
      visaRun:
        'Il visa run funziona: dopo l’uscita, al rientro compri semplicemente un nuovo visto all’arrivo. Le opzioni più facili sono Taba verso Israele o un volo per Amman; dal Sinai il traghetto Nuweiba–Aqaba porta in Giordania.',
      hacks: [
        'Se atterri a Sharm el-Sheikh o entri da Taba e resti solo nel Sinai, chiedi il timbro gratuito «Sinai only»: 15 giorni a Sharm, Dahab, Nuweiba, Taba e Santa Caterina senza visto.',
        'Il visto elettronico a ingressi multipli da 65 $ conviene se pensi di fare un salto in Giordania o in Israele e tornare: alla frontiera non dovrai comprare un altro visto.',
        'Tieni banconote piccole in dollari o euro: gli sportelli del visto all’arrivo accettano solo contanti e danno il resto malvolentieri.',
        'Gli indiani con visto valido di Stati Uniti, Regno Unito, area Schengen, Giappone, Canada, Australia o Nuova Zelanda, o con residenza nel CCG, non hanno bisogno del visto elettronico: lo ottengono all’arrivo.',
      ],
      pitfalls: [
        'Con il timbro «Sinai only» non puoi andare al Cairo, a Luxor, a Hurghada e nemmeno al parco di Ras Mohammed, né prendere voli interni. Se pensi di lasciare il Sinai, compra subito il visto completo.',
        'Negli aeroporti ti propongono «assistenza per il visto» a 40–60 $. Puoi comprarlo da solo allo sportello della banca per 30 $.',
        'I droni sono vietati: la dogana li sequestra in aeroporto.',
        'I siti intermediari con indirizzi simili vendono il visto elettronico a due o tre volte il prezzo. Il portale ufficiale è visa2egypt.gov.eg.',
      ],
      passports: {
        RU: 'I cittadini russi ottengono il visto all’arrivo per 30 $ (da marzo 2026; prima erano 25 $) o il timbro «Sinai only» per una vacanza a Sharm el-Sheikh. Voli diretti per Hurghada e Sharm partono da molte città russe. Le carte bancarie russe non funzionano: porta dollari in contanti.',
        IL: 'I cittadini israeliani ricevono a Taba un timbro gratuito per il Sinai; per andare oltre serve un visto ottenuto in anticipo.',
        IN: 'I cittadini indiani hanno bisogno del visto elettronico, oppure ottengono il visto all’arrivo con un visto occidentale o la residenza nel CCG.',
        US: 'I cittadini di Stati Uniti, UE e Regno Unito ottengono il visto all’arrivo o elettronico e possono entrare nel Sinai anche con il timbro gratuito.',
      },
      waivers: [
        'Il visto di Stati Uniti, Regno Unito, area Schengen, Giappone, Canada, Australia o Nuova Zelanda deve essere valido; è più sicuro se è già stato usato. Il visto all’arrivo si ottiene negli aeroporti del Cairo, di Hurghada e di Sharm el-Sheikh; porta per sicurezza prenotazione dell’hotel e biglietto di ritorno.',
      ],
    },
  },
};

export default guide;
