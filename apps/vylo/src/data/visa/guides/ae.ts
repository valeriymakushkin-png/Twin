import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'AE',
  checked: '2026-10',
  fees: {
    voa: { kind: 'fixed', amount: 100, currency: 'AED' },
    evisa: { kind: 'from', amount: 300, currency: 'AED' },
  },
  stay: { voa: 14, evisa: 30 },
  links: { evisa: 'https://smartservices.icp.gov.ae', immigration: 'https://gdrfad.gov.ae' },
  docs: ['returnTicket'],
  passportMonths: 6,
  rule: { days: 90, window: 180 },
  extend: { days: 30 },
  visaRun: 'limited',
  borders: [{ name: 'Dubai (DXB) → Muscat', to: 'OM', lat: 25.2532, lng: 55.3657 }],
  nomad: { name: 'Remote Work Visa', months: 12, income: { kind: 'from', amount: 3500, currency: 'USD' } },
  waivers: [
    {
      holds: ['visaUS', 'resUS', 'resGB', 'resEU', 'visaCA', 'resCA', 'visaAU', 'resAU', 'visaNZ', 'visaJP', 'resJP', 'visaKR'],
      passports: ['IN'],
      status: 'voa',
      days: 14,
    },
    { holds: ['resUS', 'resEU', 'resGB', 'resCA', 'resAU', 'resJP'], passports: ['ID', 'VN', 'TH', 'PH', 'KE', 'ZA'], status: 'voa', days: 14 },
    { holds: ['resGCC'], status: 'evisa', days: 30 },
  ],
  hackScope: [['IN'], ['regime:evisa', 'regime:required'], null, null, null],
  pitfallScope: [['regime:free'], null, null, null],
  text: {
    ru: {
      summary:
        'Граждане России, ЕС, Великобритании, США, Канады, Австралии, Японии, Кореи, Китая и многих других стран въезжают без визы: кто-то на 90 дней в течение 180, кто-то (Казахстан, Украина, Узбекистан) — на 30 дней. Остальным, включая граждан Индии и Турции, нужна электронная виза, но индийцы с визой или гринкартой США либо видом на жительство в Великобритании или ЕС получают визу по прилёте.',
      apply:
        'Электронную визу оформляют на портале ICP или GDRFA (Дубай), но проще всего — через авиакомпанию (Emirates, flydubai, Etihad, Air Arabia) или отель при бронировании: туристическая виза на 30 дней обычно обходится от 300 дирхамов. Виза по прилёте для подходящих индийцев стоит 100 дирхамов на 14 дней (продлевается один раз ещё на 14 за 250) или 250 дирхамов на 60 дней.',
      extend:
        'Тем, у кого 30 безвизовых дней, обычно можно продлить пребывание ещё на 30 дней через ICP или GDRFA, не выезжая из страны, за плату. 90-дневное безвизовое пребывание и 60-дневную визу по прилёте не продлевают.',
      visaRun:
        'Для паспортов с режимом 90 из 180 визаран не помогает: дни за полгода суммируются, сколько бы раз вы ни выезжали. Владельцы 30-дневного режима после выезда получают новые 30 дней, но частые «пробежки» пограничники отслеживают. Обычно летают в Маскат или едут автобусом Mwasalat в Оман через переход Хатта.',
      nomad:
        'Федеральная виза Remote Work на год выдаётся тем, кто работает на зарубежного работодателя или свою компанию с доходом от 3500 $ в месяц; программа Дубая (Virtual Working Programme) требует от 5000 $. Нужна медицинская страховка, действующая в ОАЭ, а подают через ICP или GDRFA.',
      hacks: [
        'Индийцам с действующей визой или гринкартой США, ВНЖ Великобритании или ЕС, а с февраля 2025 года — и с визой или ВНЖ Канады, Австралии, Новой Зеландии, Японии, Кореи или Сингапура не нужна e-виза: визу дают на паспортном контроле за 100 дирхамов.',
        'Пассажиры с пересадкой больше 8 часов могут получить транзитную визу на 48 часов (бесплатно) или 96 часов (около 50 дирхамов) через свою авиакомпанию — это дешевле туристической e-визы.',
        'Однодневную поездку в Оман легко сделать из Рас-эль-Хаймы в Мусандам (Хасаб) или из Дубая в Хатту и дальше. На наземных переходах ОАЭ берут выездной сбор 35 дирхамов, а дни в Омане не обнуляют счётчик 90 из 180.',
        'Единая туристическая виза стран Залива (GCC) утверждена ещё в 2023 году, но на октябрь 2026-го так и не запущена: даты и цены официально не объявлены. Сайты, «продающие» её, — мошенники.',
        'Резиденты стран Залива (GCC) по ряду профессий получают визу по прилёте, а остальные — e-визу на 30 дней онлайн через ICP за пару дней.',
      ],
      pitfalls: [
        'Тем, кто въезжает без визы, ничего оформлять не надо. Сайты с «визой в Дубай» для граждан безвизовых стран просто берут деньги.',
        'Перерасчёт стоит 50 дирхамов в день и может закончиться запретом на въезд. Считайте дни 90 из 180 сами: штамп этого не покажет.',
        'Лекарства с кодеином, трамадолом, часть снотворных и препаратов от СДВГ ввозят только с рецептом и предварительным разрешением минздрава ОАЭ — без него грозит задержание.',
        'Паспорт должен быть действителен ещё 6 месяцев: авиакомпании проверяют это строго и не сажают на рейс.',
      ],
      waivers: [
        'Индийцы с действующей визой или гринкартой США, ВНЖ Великобритании или ЕС, а с февраля 2025 года — с визой или ВНЖ Канады, Австралии, Новой Зеландии, Японии, Кореи или Сингапура получают визу по прилёте на 14 дней за 100 дирхамов. Виза или ВНЖ должны быть действительны ещё 6 месяцев, паспорт — тоже.',
        'С 2026 года граждане Индонезии, Вьетнама, Таиланда, Филиппин, Кении и ЮАР с ВНЖ США, ЕС, Великобритании, Канады, Австралии, Новой Зеландии, Японии, Кореи или Сингапура тоже получают визу по прилёте: 14 дней за 100 дирхамов или 60 дней за 250. Нужен именно вид на жительство, а не туристическая виза.',
        'Резиденты стран Залива (GCC) получают e-визу на 30 дней через ICP, а при ряде профессий (менеджеры, врачи, инженеры и т. п.) — визу прямо по прилёте. ВНЖ должен быть действителен ещё минимум 3 месяца.',
      ],
      passports: {
        RU: 'Россияне въезжают без визы на 90 дней в течение 180. Российские карты в ОАЭ не работают: везите наличные доллары или евро, их легко поменять в обменниках торговых центров. Прямые рейсы Emirates, flydubai и Аэрофлота из Москвы и регионов.',
        IN: 'Без визы или ВНЖ «западных» стран нужна e-виза — проще всего через авиакомпанию. С визой или гринкартой США, ВНЖ Великобритании или ЕС либо визой или ВНЖ ряда других стран — виза по прилёте на 14 дней; документ должен быть действителен ещё 6 месяцев.',
        UA: 'Граждане Украины, Казахстана и Узбекистана получают 30 дней без визы с возможностью продлить пребывание ещё на 30 через ICP.',
        TR: 'Гражданам Турции нужна заранее оформленная e-виза — через авиакомпанию, отель или портал ICP.',
        IL: 'Граждане Израиля въезжают без визы на 90 дней со времён Авраамовых соглашений; перед поездкой проверьте актуальные рекомендации по безопасности и расписание рейсов.',
      },
    },
    en: {
      summary:
        'Citizens of Russia, the EU, the UK, the US, Canada, Australia, Japan, Korea, China and many other countries enter visa-free, most for 90 days within 180 and some (Kazakhstan, Ukraine, Uzbekistan) for 30 days. Everyone else, including Indian and Turkish citizens, needs an e-visa, although Indians with a US visa or green card or UK or EU residence get a visa on arrival.',
      apply:
        'E-visas are issued on the ICP portal or by GDRFA in Dubai, but the easiest route is through your airline (Emirates, flydubai, Etihad, Air Arabia) or hotel when you book: a 30-day tourist visa usually costs from 300 AED. The visa on arrival for eligible Indians costs 100 AED for 14 days (extendable once for another 14 days for 250 AED) or 250 AED for 60 days.',
      extend:
        'If you have 30 visa-free days, you can usually extend for another 30 days through ICP or GDRFA without leaving, for a fee. The 90-day visa-free stay and the 60-day visa on arrival cannot be extended.',
      visaRun:
        'For passports on the 90-in-180 rule, visa runs do not help: days add up across the half-year however often you leave. Holders of the 30-day regime get a fresh 30 days after leaving, but border officers notice frequent runs. The usual options are a flight to Muscat or the Mwasalat bus to Oman via the Hatta crossing.',
      nomad:
        'The federal one-year Remote Work Visa is for people working for a foreign employer or their own company with an income of at least $3,500 a month; Dubai’s Virtual Working Programme asks for $5,000. You need health insurance valid in the UAE and apply through ICP or GDRFA.',
      hacks: [
        'Indians with a valid US visa or green card or UK or EU residence — and, since February 2025, a visa or residence permit from Canada, Australia, New Zealand, Japan, Korea or Singapore — skip the e-visa and get a visa at passport control for 100 AED.',
        'Passengers with a layover of more than eight hours can get a 48-hour transit visa (free) or a 96-hour one (about 50 AED) through their airline — cheaper than a tourist e-visa.',
        'A day trip to Oman is easy from Ras Al Khaimah to Musandam (Khasab) or from Dubai via Hatta. The UAE charges a 35 AED exit fee at land borders, and days in Oman do not reset your 90-in-180 count.',
        'The GCC unified tourist visa was approved in 2023 but has still not launched as of October 2026, with no official date or price. Websites “selling” it are scams.',
        'GCC residents in many professions get a visa on arrival; others get a 30-day e-visa online through ICP within a couple of days.',
      ],
      pitfalls: [
        'Visa-free visitors do not need to file anything. “Dubai visa” websites aimed at visa-exempt nationalities simply take your money.',
        'Overstaying costs 50 AED a day and can lead to an entry ban. Count your 90-in-180 days yourself — the stamp will not tell you.',
        'Medicines containing codeine or tramadol, some sleeping pills and ADHD drugs may only be brought in with a prescription and prior approval from the UAE health ministry; without it you risk detention.',
        'Your passport must be valid for six more months: airlines check this strictly and will deny boarding.',
      ],
      waivers: [
        'Indians with a valid US visa or green card or UK or EU residence — and, since February 2025, a visa or residence permit from Canada, Australia, New Zealand, Japan, Korea or Singapore — get a 14-day visa on arrival for 100 AED. The visa or permit must be valid for six more months, and so must the passport.',
        'Since 2026, citizens of Indonesia, Vietnam, Thailand, the Philippines, Kenya and South Africa who hold residence in the US, the EU, the UK, Canada, Australia, New Zealand, Japan, Korea or Singapore also get a visa on arrival: 14 days for 100 AED or 60 days for 250 AED. It has to be a residence permit, not a tourist visa.',
        'GCC residents get a 30-day e-visa through ICP, and those in many professions (managers, doctors, engineers and so on) get a visa straight on arrival. The residence permit must be valid for at least three more months.',
      ],
      passports: {
        RU: 'Russian citizens enter visa-free for 90 days within 180. Russian bank cards do not work in the UAE, so bring US dollars or euros in cash; mall exchange offices change them easily. Emirates, flydubai and Aeroflot fly direct from Moscow and other Russian cities.',
        IN: 'Without a Western visa or residence permit you need an e-visa, most easily through your airline. With a US visa or green card, UK or EU residence, or a visa or residence permit from several other countries, you get a 14-day visa on arrival; that document must be valid for six more months.',
        UA: 'Citizens of Ukraine, Kazakhstan and Uzbekistan get 30 days visa-free and can extend for another 30 through ICP.',
        TR: 'Turkish citizens need an e-visa in advance — through an airline, a hotel or the ICP portal.',
        IL: 'Israeli citizens have entered visa-free for 90 days since the Abraham Accords; check the latest security advice and flight schedules before you go.',
      },
    },
    es: {
      summary:
        'Los ciudadanos de Rusia, la UE, Reino Unido, EE. UU., Canadá, Australia, Japón, Corea, China y muchos otros países entran sin visado, la mayoría 90 días dentro de 180 y algunos (Kazajistán, Ucrania, Uzbekistán) 30 días. El resto, incluidos los ciudadanos de India y Turquía, necesita un visado electrónico, aunque los indios con visado o green card de EE. UU. o residencia en Reino Unido o la UE obtienen visado a la llegada.',
      apply:
        'El visado electrónico se tramita en el portal de la ICP o con la GDRFA de Dubái, pero lo más sencillo es pedirlo a la aerolínea (Emirates, flydubai, Etihad, Air Arabia) o al hotel al reservar: el visado turístico de 30 días suele costar desde 300 AED. El visado a la llegada para los indios que cumplen requisitos cuesta 100 AED por 14 días (prorrogable una vez otros 14 por 250 AED) o 250 AED por 60 días.',
      extend:
        'Si tienes 30 días sin visado, normalmente puedes prorrogar otros 30 a través de la ICP o la GDRFA sin salir del país, pagando una tasa. La estancia sin visado de 90 días y el visado a la llegada de 60 días no se prorrogan.',
      visaRun:
        'Con los pasaportes sujetos a la regla de 90 en 180, el visa run no sirve: los días se suman durante el semestre aunque salgas varias veces. Quienes tienen el régimen de 30 días consiguen 30 nuevos al salir, pero la policía fronteriza se fija en las salidas frecuentes. Lo habitual es volar a Mascate o tomar el autobús de Mwasalat a Omán por el paso de Hatta.',
      nomad:
        'El Remote Work Visa federal de un año es para quien trabaja para una empresa extranjera o propia con ingresos de al menos 3500 $ al mes; el Virtual Working Programme de Dubái pide 5000 $. Necesitas un seguro médico válido en los Emiratos y se solicita a través de la ICP o la GDRFA.',
      hacks: [
        'Los indios con visado o green card de EE. UU. vigente o residencia en Reino Unido o la UE —y, desde febrero de 2025, con visado o permiso de residencia de Canadá, Australia, Nueva Zelanda, Japón, Corea o Singapur— se ahorran el visado electrónico y lo obtienen en el control de pasaportes por 100 AED.',
        'Con una escala de más de ocho horas puedes pedir a tu aerolínea un visado de tránsito de 48 horas (gratis) o de 96 horas (unos 50 AED), más barato que el visado turístico.',
        'Una excursión de un día a Omán es fácil desde Ras al Jaima a Musandam (Jasab) o desde Dubái por Hatta. Los Emiratos cobran 35 AED de tasa de salida en los pasos terrestres, y los días en Omán no reinician tu cuenta de 90 en 180.',
        'El visado turístico unificado del CCG se aprobó en 2023, pero en octubre de 2026 sigue sin ponerse en marcha y no tiene fecha ni precio oficiales. Las webs que lo «venden» son estafas.',
        'Los residentes en países del CCG con muchas profesiones obtienen visado a la llegada; el resto, un visado electrónico de 30 días en línea a través de la ICP en un par de días.',
      ],
      pitfalls: [
        'Si entras sin visado, no tienes que tramitar nada. Las webs de «visado para Dubái» dirigidas a nacionalidades exentas solo se quedan con tu dinero.',
        'Quedarte de más cuesta 50 AED al día y puede acabar en prohibición de entrada. Lleva tú la cuenta de los 90 días en 180: el sello no te la dará.',
        'Los medicamentos con codeína o tramadol, algunos somníferos y fármacos para el TDAH solo se pueden llevar con receta y autorización previa del ministerio de Sanidad emiratí; sin ella te arriesgas a una detención.',
        'El pasaporte debe tener seis meses de validez restante: las aerolíneas lo comprueban con rigor y deniegan el embarque.',
      ],
      waivers: [
        'Los indios con visado o green card de EE. UU. vigente o residencia en Reino Unido o la UE —y, desde febrero de 2025, con visado o permiso de residencia de Canadá, Australia, Nueva Zelanda, Japón, Corea o Singapur— obtienen un visado a la llegada de 14 días por 100 AED. El visado o permiso debe tener seis meses de validez, igual que el pasaporte.',
        'Desde 2026, los ciudadanos de Indonesia, Vietnam, Tailandia, Filipinas, Kenia y Sudáfrica con residencia en EE. UU., la UE, Reino Unido, Canadá, Australia, Nueva Zelanda, Japón, Corea o Singapur también obtienen visado a la llegada: 14 días por 100 AED o 60 días por 250 AED. Tiene que ser un permiso de residencia, no un visado de turista.',
        'Los residentes en países del CCG obtienen un visado electrónico de 30 días a través de la ICP, y con muchas profesiones (directivos, médicos, ingenieros, etc.) el visado se da directamente a la llegada. El permiso de residencia debe tener al menos tres meses de validez.',
      ],
      passports: {
        RU: 'Los ciudadanos rusos entran sin visado 90 días dentro de 180. Las tarjetas bancarias rusas no funcionan en los Emiratos: lleva dólares o euros en efectivo, que se cambian fácilmente en las casas de cambio de los centros comerciales. Emirates, flydubai y Aeroflot vuelan directo desde Moscú y otras ciudades rusas.',
        IN: 'Sin visado ni residencia de un país occidental necesitas visado electrónico, lo más fácil a través de la aerolínea. Con visado o green card de EE. UU., residencia en Reino Unido o la UE, o visado o residencia de otros países de la lista, obtienes visado a la llegada de 14 días; ese documento debe tener seis meses de validez.',
        UA: 'Los ciudadanos de Ucrania, Kazajistán y Uzbekistán tienen 30 días sin visado y pueden prorrogar otros 30 a través de la ICP.',
        TR: 'Los ciudadanos turcos necesitan un visado electrónico previo, a través de la aerolínea, el hotel o el portal de la ICP.',
        IL: 'Los ciudadanos israelíes entran sin visado 90 días desde los Acuerdos de Abraham; consulta las recomendaciones de seguridad y los vuelos antes de viajar.',
      },
    },
    de: {
      summary:
        'Staatsangehörige Russlands, der EU, Großbritanniens, der USA, Kanadas, Australiens, Japans, Koreas, Chinas und vieler weiterer Länder reisen visumfrei ein, die meisten für 90 Tage innerhalb von 180, manche (Kasachstan, Ukraine, Usbekistan) für 30 Tage. Alle anderen, auch Inder und Türken, brauchen ein E-Visum – Inder mit US-Visum oder Green Card oder Aufenthaltstitel in Großbritannien oder der EU bekommen jedoch ein Visum bei Ankunft.',
      apply:
        'E-Visa stellen das ICP-Portal oder die GDRFA in Dubai aus, am einfachsten geht es aber über die Airline (Emirates, flydubai, Etihad, Air Arabia) oder das Hotel bei der Buchung: Ein 30-Tage-Touristenvisum kostet meist ab 300 AED. Das Visum bei Ankunft für berechtigte Inder kostet 100 AED für 14 Tage (einmal um 14 Tage für 250 AED verlängerbar) oder 250 AED für 60 Tage.',
      extend:
        'Wer 30 visumfreie Tage hat, kann meist über ICP oder GDRFA ohne Ausreise gegen Gebühr um weitere 30 Tage verlängern. Der 90-tägige visumfreie Aufenthalt und das 60-Tage-Visum bei Ankunft sind nicht verlängerbar.',
      visaRun:
        'Für Pässe mit der 90-aus-180-Regel bringen Visa-Runs nichts: Die Tage im Halbjahr werden addiert, egal wie oft du ausreist. Wer 30 Tage bekommt, erhält nach der Ausreise neue 30 Tage, häufige Runs fallen der Grenzpolizei aber auf. Üblich sind ein Flug nach Maskat oder der Mwasalat-Bus über den Übergang Hatta nach Oman.',
      nomad:
        'Das föderale Remote Work Visa für ein Jahr gilt für alle, die für einen ausländischen Arbeitgeber oder die eigene Firma arbeiten und mindestens 3.500 $ im Monat verdienen; Dubais Virtual Working Programme verlangt 5.000 $. Nötig ist eine in den VAE gültige Krankenversicherung, beantragt wird über ICP oder GDRFA.',
      hacks: [
        'Inder mit gültigem US-Visum oder Green Card oder Aufenthaltstitel in Großbritannien oder der EU – und seit Februar 2025 auch mit Visum oder Aufenthaltstitel aus Kanada, Australien, Neuseeland, Japan, Korea oder Singapur – sparen sich das E-Visum und bekommen das Visum für 100 AED an der Passkontrolle.',
        'Wer mehr als acht Stunden Umstieg hat, bekommt über die Airline ein 48-Stunden-Transitvisum (kostenlos) oder eines für 96 Stunden (etwa 50 AED) – günstiger als ein Touristen-E-Visum.',
        'Ein Tagesausflug nach Oman klappt leicht von Ras al-Chaima nach Musandam (Khasab) oder von Dubai über Hatta. An Landgrenzen verlangen die VAE 35 AED Ausreisegebühr, und Tage in Oman setzen deine 90-aus-180-Zählung nicht zurück.',
        'Das einheitliche GCC-Touristenvisum wurde 2023 beschlossen, ist aber im Oktober 2026 noch immer nicht gestartet – ohne offizielles Datum oder Preis. Websites, die es „verkaufen“, sind Betrug.',
        'Einwohner der GCC-Staaten mit vielen Berufen bekommen ein Visum bei Ankunft, alle anderen ein 30-Tage-E-Visum online über ICP innerhalb weniger Tage.',
      ],
      pitfalls: [
        'Wer visumfrei einreist, muss nichts beantragen. „Dubai-Visum“-Seiten für visumbefreite Nationalitäten kassieren nur dein Geld.',
        'Eine Überziehung kostet 50 AED pro Tag und kann zu einer Einreisesperre führen. Zähl die 90 Tage in 180 selbst – der Stempel zeigt es dir nicht.',
        'Medikamente mit Codein oder Tramadol, manche Schlafmittel und ADHS-Präparate dürfen nur mit Rezept und vorheriger Genehmigung des Gesundheitsministeriums der VAE eingeführt werden; ohne droht Festnahme.',
        'Der Pass muss noch sechs Monate gültig sein: Airlines prüfen das streng und verweigern sonst das Boarding.',
      ],
      waivers: [
        'Inder mit gültigem US-Visum oder Green Card oder Aufenthaltstitel in Großbritannien oder der EU – und seit Februar 2025 mit Visum oder Aufenthaltstitel aus Kanada, Australien, Neuseeland, Japan, Korea oder Singapur – bekommen ein 14-Tage-Visum bei Ankunft für 100 AED. Visum bzw. Titel müssen noch sechs Monate gültig sein, der Pass ebenso.',
        'Seit 2026 erhalten auch Staatsangehörige Indonesiens, Vietnams, Thailands, der Philippinen, Kenias und Südafrikas mit Aufenthaltstitel in den USA, der EU, Großbritannien, Kanada, Australien, Neuseeland, Japan, Korea oder Singapur ein Visum bei Ankunft: 14 Tage für 100 AED oder 60 Tage für 250 AED. Es muss ein Aufenthaltstitel sein, kein Touristenvisum.',
        'Einwohner der GCC-Staaten bekommen über ICP ein 30-Tage-E-Visum, in vielen Berufen (Manager, Ärzte, Ingenieure usw.) sogar direkt ein Visum bei Ankunft. Der Aufenthaltstitel muss noch mindestens drei Monate gültig sein.',
      ],
      passports: {
        RU: 'Russische Staatsangehörige reisen 90 Tage innerhalb von 180 visumfrei ein. Russische Bankkarten funktionieren in den VAE nicht – nimm US-Dollar oder Euro in bar mit, die Wechselstuben in Einkaufszentren tauschen problemlos. Emirates, flydubai und Aeroflot fliegen direkt aus Moskau und anderen russischen Städten.',
        IN: 'Ohne westliches Visum oder Aufenthaltstitel brauchst du ein E-Visum, am einfachsten über die Airline. Mit US-Visum oder Green Card, Aufenthaltstitel in Großbritannien oder der EU oder Visum bzw. Aufenthaltstitel weiterer Länder bekommst du ein 14-Tage-Visum bei Ankunft; das Dokument muss noch sechs Monate gültig sein.',
        UA: 'Staatsangehörige der Ukraine, Kasachstans und Usbekistans erhalten 30 Tage visumfrei und können über ICP um weitere 30 verlängern.',
        TR: 'Türkische Staatsangehörige brauchen vorab ein E-Visum – über Airline, Hotel oder das ICP-Portal.',
        IL: 'Israelische Staatsangehörige reisen seit den Abraham-Abkommen 90 Tage visumfrei ein; prüf vor der Reise aktuelle Sicherheitshinweise und Flugpläne.',
      },
    },
    fr: {
      summary:
        'Les ressortissants de Russie, de l’UE, du Royaume-Uni, des États-Unis, du Canada, d’Australie, du Japon, de Corée, de Chine et de nombreux autres pays entrent sans visa, la plupart pour 90 jours sur 180 et certains (Kazakhstan, Ukraine, Ouzbékistan) pour 30 jours. Les autres, dont les Indiens et les Turcs, ont besoin d’un e-visa, mais les Indiens titulaires d’un visa ou d’une green card américains ou d’un titre de séjour britannique ou européen obtiennent un visa à l’arrivée.',
      apply:
        'Les e-visas sont délivrés sur le portail de l’ICP ou par la GDRFA de Dubaï, mais le plus simple est de passer par votre compagnie (Emirates, flydubai, Etihad, Air Arabia) ou votre hôtel lors de la réservation : un visa touristique de 30 jours coûte en général à partir de 300 AED. Le visa à l’arrivée pour les Indiens éligibles coûte 100 AED pour 14 jours (prolongeable une fois de 14 jours pour 250 AED) ou 250 AED pour 60 jours.',
      extend:
        'Avec 30 jours sans visa, vous pouvez en général prolonger de 30 jours via l’ICP ou la GDRFA sans quitter le pays, moyennant des frais. Le séjour sans visa de 90 jours et le visa à l’arrivée de 60 jours ne se prolongent pas.',
      visaRun:
        'Pour les passeports soumis à la règle des 90 jours sur 180, le visa run ne sert à rien : les jours s’additionnent sur le semestre, quel que soit le nombre de sorties. Les titulaires du régime de 30 jours en obtiennent 30 nouveaux après une sortie, mais les allers-retours fréquents sont repérés. On prend d’ordinaire un vol pour Mascate ou le bus Mwasalat vers Oman par le poste de Hatta.',
      nomad:
        'Le Remote Work Visa fédéral d’un an s’adresse aux personnes employées par une société étrangère ou par leur propre entreprise, avec un revenu d’au moins 3 500 $ par mois ; le Virtual Working Programme de Dubaï exige 5 000 $. Il faut une assurance santé valable aux Émirats, et la demande passe par l’ICP ou la GDRFA.',
      hacks: [
        'Les Indiens titulaires d’un visa ou d’une green card américains en cours de validité ou d’un titre de séjour britannique ou européen — et, depuis février 2025, d’un visa ou titre de séjour du Canada, d’Australie, de Nouvelle-Zélande, du Japon, de Corée ou de Singapour — se passent d’e-visa et obtiennent le visa au contrôle des passeports pour 100 AED.',
        'Avec une correspondance de plus de huit heures, votre compagnie peut vous obtenir un visa de transit de 48 heures (gratuit) ou de 96 heures (environ 50 AED), moins cher qu’un e-visa touristique.',
        'Une excursion d’une journée à Oman est facile depuis Ras el Khaïmah vers le Musandam (Khasab) ou depuis Dubaï par Hatta. Les Émirats prélèvent 35 AED de taxe de sortie aux frontières terrestres, et les jours à Oman ne remettent pas à zéro votre compteur de 90 jours sur 180.',
        'Le visa touristique unifié du CCG a été approuvé en 2023 mais n’est toujours pas lancé en octobre 2026, sans date ni prix officiels. Les sites qui le « vendent » sont des arnaques.',
        'Les résidents des pays du CCG exerçant de nombreuses professions obtiennent un visa à l’arrivée ; les autres, un e-visa de 30 jours en ligne via l’ICP en deux ou trois jours.',
      ],
      pitfalls: [
        'Si vous entrez sans visa, aucune démarche n’est nécessaire. Les sites de « visa pour Dubaï » visant les nationalités exemptées encaissent simplement votre argent.',
        'Un dépassement coûte 50 AED par jour et peut entraîner une interdiction d’entrée. Comptez vous-même vos 90 jours sur 180 : le tampon ne le fera pas pour vous.',
        'Les médicaments contenant de la codéine ou du tramadol, certains somnifères et traitements du TDAH ne s’importent qu’avec ordonnance et autorisation préalable du ministère de la Santé émirien ; sans elle, vous risquez une détention.',
        'Le passeport doit être valable encore six mois : les compagnies le vérifient strictement et refusent l’embarquement.',
      ],
      waivers: [
        'Les Indiens titulaires d’un visa ou d’une green card américains en cours de validité ou d’un titre de séjour britannique ou européen — et, depuis février 2025, d’un visa ou titre de séjour du Canada, d’Australie, de Nouvelle-Zélande, du Japon, de Corée ou de Singapour — obtiennent un visa de 14 jours à l’arrivée pour 100 AED. Le visa ou le titre doit être valable encore six mois, tout comme le passeport.',
        'Depuis 2026, les ressortissants d’Indonésie, du Vietnam, de Thaïlande, des Philippines, du Kenya et d’Afrique du Sud résidant aux États-Unis, dans l’UE, au Royaume-Uni, au Canada, en Australie, en Nouvelle-Zélande, au Japon, en Corée ou à Singapour obtiennent aussi un visa à l’arrivée : 14 jours pour 100 AED ou 60 jours pour 250 AED. Il faut un titre de séjour, pas un visa touristique.',
        'Les résidents des pays du CCG obtiennent un e-visa de 30 jours via l’ICP, et pour de nombreuses professions (cadres, médecins, ingénieurs, etc.) un visa directement à l’arrivée. Le titre de séjour doit être valable encore au moins trois mois.',
      ],
      passports: {
        RU: 'Les ressortissants russes entrent sans visa pour 90 jours sur 180. Les cartes bancaires russes ne fonctionnent pas aux Émirats : emportez des dollars ou des euros en espèces, faciles à changer dans les bureaux de change des centres commerciaux. Emirates, flydubai et Aeroflot volent en direct depuis Moscou et d’autres villes russes.',
        IN: 'Sans visa ni titre de séjour occidental, il faut un e-visa, le plus simple via la compagnie aérienne. Avec un visa ou une green card américains, un titre de séjour britannique ou européen, ou un visa ou titre de séjour d’autres pays de la liste, vous obtenez un visa de 14 jours à l’arrivée ; ce document doit être valable encore six mois.',
        UA: 'Les ressortissants ukrainiens, kazakhs et ouzbeks ont 30 jours sans visa et peuvent prolonger de 30 jours via l’ICP.',
        TR: 'Les ressortissants turcs doivent obtenir un e-visa à l’avance, via la compagnie, l’hôtel ou le portail de l’ICP.',
        IL: 'Les ressortissants israéliens entrent sans visa pour 90 jours depuis les accords d’Abraham ; consultez les consignes de sécurité et les horaires des vols avant de partir.',
      },
    },
    it: {
      summary:
        'I cittadini di Russia, UE, Regno Unito, Stati Uniti, Canada, Australia, Giappone, Corea, Cina e molti altri paesi entrano senza visto, per lo più 90 giorni su 180 e alcuni (Kazakistan, Ucraina, Uzbekistan) per 30 giorni. Gli altri, compresi indiani e turchi, hanno bisogno di un visto elettronico, ma gli indiani con visto o green card statunitense o permesso di soggiorno nel Regno Unito o nell’UE ottengono il visto all’arrivo.',
      apply:
        'Il visto elettronico si richiede sul portale dell’ICP o alla GDRFA di Dubai, ma la via più semplice è passare dalla compagnia aerea (Emirates, flydubai, Etihad, Air Arabia) o dall’hotel al momento della prenotazione: un visto turistico di 30 giorni costa di solito da 300 AED. Il visto all’arrivo per gli indiani idonei costa 100 AED per 14 giorni (prorogabile una volta di altri 14 per 250 AED) oppure 250 AED per 60 giorni.',
      extend:
        'Con 30 giorni senza visto di solito puoi prorogare di altri 30 tramite ICP o GDRFA senza uscire dal paese, pagando una tassa. Il soggiorno senza visto di 90 giorni e il visto all’arrivo di 60 giorni non si prorogano.',
      visaRun:
        'Per i passaporti con la regola dei 90 giorni su 180 il visa run non serve: i giorni si sommano nel semestre anche se esci più volte. Chi ha il regime di 30 giorni ne ottiene altri 30 dopo l’uscita, ma i controlli notano le uscite frequenti. Di solito si vola a Mascate o si prende l’autobus Mwasalat per l’Oman attraverso il valico di Hatta.',
      nomad:
        'Il Remote Work Visa federale di un anno è per chi lavora per un’azienda estera o per la propria con un reddito di almeno 3.500 $ al mese; il Virtual Working Programme di Dubai ne chiede 5.000. Serve un’assicurazione sanitaria valida negli Emirati e la domanda passa da ICP o GDRFA.',
      hacks: [
        'Gli indiani con visto o green card statunitense valido o permesso di soggiorno nel Regno Unito o nell’UE — e, da febbraio 2025, con visto o permesso di Canada, Australia, Nuova Zelanda, Giappone, Corea o Singapore — evitano il visto elettronico e lo ottengono al controllo passaporti per 100 AED.',
        'Con uno scalo di oltre otto ore puoi chiedere alla compagnia un visto di transito di 48 ore (gratuito) o di 96 ore (circa 50 AED), più economico del visto turistico.',
        'Una gita di un giorno in Oman è facile da Ras al-Khaimah al Musandam (Khasab) o da Dubai via Hatta. Ai valichi terrestri gli Emirati chiedono 35 AED di tassa d’uscita, e i giorni in Oman non azzerano il conteggio dei 90 su 180.',
        'Il visto turistico unico del CCG è stato approvato nel 2023 ma a ottobre 2026 non è ancora partito, senza data né prezzo ufficiali. I siti che lo «vendono» sono truffe.',
        'I residenti nei paesi del CCG con molte professioni ottengono il visto all’arrivo; gli altri un visto elettronico di 30 giorni online tramite ICP in un paio di giorni.',
      ],
      pitfalls: [
        'Chi entra senza visto non deve richiedere nulla. I siti di «visto per Dubai» rivolti alle nazionalità esenti si prendono solo i tuoi soldi.',
        'Restare oltre il limite costa 50 AED al giorno e può portare a un divieto d’ingresso. Conta tu i 90 giorni su 180: il timbro non te lo dice.',
        'I farmaci con codeina o tramadolo, alcuni sonniferi e medicinali per l’ADHD si possono portare solo con ricetta e autorizzazione preventiva del ministero della Salute emiratino; senza rischi il fermo.',
        'Il passaporto deve essere valido ancora sei mesi: le compagnie aeree lo controllano con rigore e negano l’imbarco.',
      ],
      waivers: [
        'Gli indiani con visto o green card statunitense valido o permesso di soggiorno nel Regno Unito o nell’UE — e, da febbraio 2025, con visto o permesso di Canada, Australia, Nuova Zelanda, Giappone, Corea o Singapore — ottengono un visto all’arrivo di 14 giorni per 100 AED. Visto o permesso devono essere validi ancora sei mesi, come il passaporto.',
        'Dal 2026 anche i cittadini di Indonesia, Vietnam, Thailandia, Filippine, Kenya e Sudafrica residenti negli Stati Uniti, nell’UE, nel Regno Unito, in Canada, Australia, Nuova Zelanda, Giappone, Corea o Singapore ottengono il visto all’arrivo: 14 giorni per 100 AED o 60 giorni per 250 AED. Serve un permesso di soggiorno, non un visto turistico.',
        'I residenti nei paesi del CCG ottengono un visto elettronico di 30 giorni tramite ICP e, per molte professioni (dirigenti, medici, ingegneri e simili), il visto direttamente all’arrivo. Il permesso di soggiorno deve essere valido ancora almeno tre mesi.',
      ],
      passports: {
        RU: 'I cittadini russi entrano senza visto per 90 giorni su 180. Le carte bancarie russe negli Emirati non funzionano: porta dollari o euro in contanti, che si cambiano facilmente negli uffici di cambio dei centri commerciali. Emirates, flydubai e Aeroflot volano diretti da Mosca e da altre città russe.',
        IN: 'Senza visto o permesso di soggiorno occidentale serve il visto elettronico, più semplice tramite la compagnia aerea. Con visto o green card statunitense, permesso di soggiorno nel Regno Unito o nell’UE, o visto o permesso di altri paesi dell’elenco, ottieni un visto all’arrivo di 14 giorni; quel documento deve essere valido ancora sei mesi.',
        UA: 'I cittadini di Ucraina, Kazakistan e Uzbekistan hanno 30 giorni senza visto e possono prorogare di altri 30 tramite ICP.',
        TR: 'I cittadini turchi devono ottenere prima il visto elettronico, tramite compagnia aerea, hotel o portale ICP.',
        IL: 'I cittadini israeliani entrano senza visto per 90 giorni dagli Accordi di Abramo; prima di partire controlla le indicazioni di sicurezza e gli orari dei voli.',
      },
    },
  },
};

export default guide;
