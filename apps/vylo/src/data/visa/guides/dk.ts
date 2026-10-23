import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'DK',
  checked: '2026-10',
  fees: { visa: { kind: 'fixed', amount: 90, currency: 'EUR' } },
  stay: { visa: 90 },
  links: { immigration: 'https://www.nyidanmark.dk' },
  docs: ['insurance', 'returnTicket', 'booking', 'finance'],
  passportMonths: 3,
  rule: { days: 90, window: 180 },
  visaRun: 'no',
  transit: { hours: 24 },
  waivers: [
    { holds: ['resEU'], status: 'free', days: 90 },
    { holds: ['visaSchengen'], status: 'free', days: 90 },
  ],
  text: {
    ru: {
      summary:
        'Дания входит в Шенген: граждане ЕС, ЕЭЗ и Швейцарии въезжают по ID-карте, а граждане США, Великобритании, Канады, Австралии, Японии, Бразилии, Украины и других безвизовых стран — до 90 дней в любые 180. Россиянам, индийцам, китайцам, туркам, филиппинцам и многим другим нужна шенгенская виза за 90 €; Фарерские острова и Гренландия — вне Шенгена, и для них правила отдельные.',
      apply:
        'Заявление заполняют онлайн по инструкции на nyidanmark.dk, затем сдают отпечатки и документы в визовом центре — в большинстве стран это VFS Global. Сбор — 90 € плюс сервисный, решение — обычно 15 дней. Во многих странах датские посольства оформляют визы и за другие шенгенские государства, так что сначала уточните, кто принимает заявления у вас.',
      visaRun:
        'Визаран не работает: 90 дней считаются по всему Шенгену в скользящем окне 180 дней, а Германия, Швеция и Норвегия рядом — тоже Шенген. Поездка на Фареры или в Гренландию лишь ставит счётчик на паузу; с апреля 2026 года EES фиксирует каждый въезд и выезд.',
      transit:
        'Пересадка в Копенгагене (Каструп) между двумя рейсами за пределы Шенгена большинству не требует визы, если не выходить из транзитной зоны. Гражданам из общего списка (Афганистан, Бангладеш, Иран, Нигерия, Пакистан и др.) и нескольких стран, добавленных Данией, нужна транзитная виза — кроме владельцев действующей визы или ВНЖ США, Канады, Японии или страны ЕЭЗ.',
      hacks: [
        'Шенгенская виза не действует на Фарерах и в Гренландии, но её можно сразу запросить с отметкой «действительна для Фарерских островов» или «для Гренландии» — одной анкетой и одним сбором.',
        'Дни на Фарерах и в Гренландии не входят в шенгенские 90/180: безвизовые туристы могут растянуть поездку по Северу, не расходуя лимит.',
        'Молодые австралийцы, новозеландцы, канадцы, японцы, южнокорейцы и граждане ряда стран Латинской Америки могут получить в Дании визу working holiday на год.',
      ],
      pitfalls: [
        'Дания с 2016 года проверяет документы на границе с Германией, а Швеция — на мосту и поездах через Эресунн: в поезде Копенгаген — Мальмё или Гамбург держите паспорт при себе.',
        'Однократная шенгенская виза «сгорает» после полёта на Фареры, в Гренландию или Великобританию — для таких маршрутов просите двукратную или многократную визу.',
        'Регистрация (CPR) нужна только при проживании дольше трёх месяцев; не платите посредникам, которые предлагают «обязательную регистрацию» туристов.',
      ],
      waivers: [
        'Действующий ВНЖ или долгосрочная виза D любой шенгенской страны позволяют ездить в Данию без визы до 90 дней в любые 180. Ирландский и кипрский ВНЖ не подходят, а на Фареры и в Гренландию они не дают права въезда.',
        'Шенгенская виза другой страны действует и в Дании в пределах своих дат и числа дней, но не на Фарерах и в Гренландии. Первую поездку лучше совершить в страну, выдавшую визу.',
      ],
      passports: {
        RU: 'Датские визы в России выдают ограниченно, а с ноября 2025 года, как правило, однократные; сбор — полные 90 €. Часто проще подать в стране, где у вас есть ВНЖ. Прямых рейсов нет — летают через Стамбул, Белград или Ереван; российские карты не работают.',
        US: 'Гражданам США виза не нужна: 90 дней в любые 180; Фареры и Гренландия тоже без визы. Запуск ETIAS (20 €) отложен, раньше 2027 года его не ждут.',
        GB: 'Британцы ограничены 90 днями в 180. Паспорт должен быть моложе 10 лет на дату въезда и действовать ещё 3 месяца после выезда.',
        IN: 'Гражданам Индии нужна шенгенская виза через VFS. По правилу «каскада» после двух правильно использованных виз за три года дают многократную визу на 2 года, затем на 5 лет.',
        CN: 'Гражданам Китая нужна шенгенская виза; для Фарер или Гренландии сразу укажите это в анкете, чтобы получить нужную отметку.',
        UA: 'Граждане Украины с биометрическим паспортом въезжают без визы на 90 дней в 180; временная защита в ЕС продлена до марта 2027 года.',
      },
    },
    en: {
      summary:
        'Denmark is in Schengen: EU, EEA and Swiss citizens enter with an ID card, while US, UK, Canadian, Australian, Japanese, Brazilian, Ukrainian and other visa-exempt travellers stay up to 90 days in any 180. Russian, Indian, Chinese, Turkish, Filipino and many other passport holders need a €90 Schengen visa; the Faroe Islands and Greenland are outside Schengen and have their own rules.',
      apply:
        'Fill in the application online following the steps on nyidanmark.dk, then give fingerprints and documents at the visa centre — VFS Global in most countries. The fee is €90 plus the service charge, and decisions usually take 15 days. In many countries Danish embassies also issue visas on behalf of other Schengen states, so first check who takes applications where you live.',
      visaRun:
        'Visa runs don’t work: the 90 days are counted across the whole Schengen area over any rolling 180-day window, and nearby Germany, Sweden and Norway are Schengen too. A trip to the Faroes or Greenland only pauses the clock; since April 2026 the EES records every entry and exit.',
      transit:
        'Changing planes at Copenhagen-Kastrup between two non-Schengen flights needs no visa for most nationalities, as long as you stay airside. Citizens on the common airport-transit-visa list (Afghanistan, Bangladesh, Iran, Nigeria, Pakistan and others) and a few nationalities Denmark adds need one, unless they hold a valid US, Canadian, Japanese or EEA visa or residence permit.',
      hacks: [
        'A Schengen visa isn’t valid in the Faroe Islands or Greenland, but you can ask for it to be endorsed “valid for the Faroe Islands” or “for Greenland” on the same application and fee.',
        'Days in the Faroes and Greenland don’t count towards Schengen’s 90/180: visa-exempt travellers can stretch a Nordic trip without using up their allowance.',
        'Young Australians, New Zealanders, Canadians, Japanese, South Koreans and citizens of several Latin American countries can get a one-year Danish working holiday visa.',
      ],
      pitfalls: [
        'Denmark has checked papers at its German border since 2016, and Sweden does so on the Øresund bridge and trains: keep your passport on you on the Copenhagen–Malmö or Hamburg train.',
        'A single-entry Schengen visa is spent after a flight to the Faroes, Greenland or the UK — for such routes ask for a double- or multiple-entry visa.',
        'Registration (CPR) is only needed for stays over three months; don’t pay middlemen offering “mandatory registration” for tourists.',
      ],
      waivers: [
        'A valid residence permit or long-stay D visa from any Schengen country lets you visit Denmark visa-free for up to 90 days in any 180. Irish and Cypriot permits don’t count, and none of these cover the Faroes or Greenland.',
        'A Schengen visa issued by another member state is valid in Denmark within its dates and number of days, but not in the Faroes or Greenland. Make the first trip to the issuing country.',
      ],
      passports: {
        RU: 'Denmark issues few visas in Russia, and since November 2025 they’re usually single-entry; the fee is the full €90. It’s often easier to apply in a country where you hold residence. There are no direct flights — routes go via Istanbul, Belgrade or Yerevan; Russian bank cards don’t work.',
        US: 'US citizens need no visa: 90 days in any 180, and the Faroes and Greenland are visa-free too. ETIAS (€20) has been delayed and isn’t expected before 2027.',
        GB: 'UK citizens are limited to 90 days in 180. Your passport must be under 10 years old on the day you enter and valid for 3 months after you leave.',
        IN: 'Indian citizens need a Schengen visa via VFS. Under the EU “cascade”, two visas used correctly within three years earn a 2-year multiple-entry visa, then a 5-year one.',
        CN: 'Chinese citizens need a Schengen visa; for the Faroes or Greenland, say so on the form to get the right endorsement.',
        UA: 'Ukrainians with a biometric passport enter visa-free for 90 days in 180; temporary protection in the EU runs until March 2027.',
      },
    },
    es: {
      summary:
        'Dinamarca forma parte de Schengen: los ciudadanos de la UE, el EEE y Suiza entran con el DNI, y los de EE. UU., Reino Unido, Canadá, Australia, Japón, Brasil, Ucrania y otros países exentos se quedan hasta 90 días en cualquier periodo de 180. Quienes tienen pasaporte ruso, indio, chino, turco, filipino y muchos otros necesitan un visado Schengen de 90 €; las Islas Feroe y Groenlandia están fuera de Schengen y tienen sus propias normas.',
      apply:
        'Rellena la solicitud en línea siguiendo los pasos de nyidanmark.dk y luego deja huellas y documentos en el centro de visados, que en la mayoría de países es VFS Global. La tasa es de 90 € más el servicio y la resolución suele tardar 15 días. En muchos países las embajadas danesas también tramitan visados en nombre de otros Estados Schengen, así que comprueba antes quién recoge las solicitudes donde vives.',
      visaRun:
        'Los visa runs no sirven: los 90 días se cuentan en todo Schengen dentro de una ventana móvil de 180, y Alemania, Suecia y Noruega, al lado, también son Schengen. Un viaje a las Feroe o a Groenlandia solo pausa el contador; desde abril de 2026 el EES registra cada entrada y salida.',
      transit:
        'Para cambiar de avión en Copenhague-Kastrup entre dos vuelos fuera de Schengen la mayoría no necesita visado, si no sale de la zona de tránsito. Los ciudadanos de la lista común de visado de tránsito aeroportuario (Afganistán, Bangladés, Irán, Nigeria, Pakistán y otros) y de algunos países que añade Dinamarca sí lo necesitan, salvo que tengan visado o residencia vigente de EE. UU., Canadá, Japón o un país del EEE.',
      hacks: [
        'El visado Schengen no vale en las Feroe ni en Groenlandia, pero puedes pedir en la misma solicitud, y con la misma tasa, que lleve la anotación «válido para las Islas Feroe» o «para Groenlandia».',
        'Los días en las Feroe y Groenlandia no cuentan para los 90/180 de Schengen: quien no necesita visado puede alargar un viaje por el norte sin gastar su cupo.',
        'Los jóvenes de Australia, Nueva Zelanda, Canadá, Japón, Corea del Sur y de varios países latinoamericanos pueden obtener un visado de vacaciones y trabajo de un año en Dinamarca.',
      ],
      pitfalls: [
        'Dinamarca controla documentos en la frontera alemana desde 2016, y Suecia en el puente y los trenes del Øresund: lleva el pasaporte encima en el tren Copenhague–Malmö o a Hamburgo.',
        'Un visado Schengen de una entrada queda gastado tras un vuelo a las Feroe, Groenlandia o el Reino Unido: para esas rutas pide uno de dos o varias entradas.',
        'El registro (CPR) solo es necesario para estancias de más de tres meses; no pagues a intermediarios que ofrecen un «registro obligatorio» para turistas.',
      ],
      waivers: [
        'Un permiso de residencia o un visado nacional D vigente de cualquier país Schengen te permite visitar Dinamarca sin visado hasta 90 días en 180. Los permisos de Irlanda y Chipre no valen, y ninguno cubre las Feroe ni Groenlandia.',
        'Un visado Schengen expedido por otro Estado miembro vale en Dinamarca dentro de sus fechas y su número de días, pero no en las Feroe ni en Groenlandia. Haz el primer viaje al país emisor.',
      ],
      passports: {
        RU: 'Dinamarca expide pocos visados en Rusia y, desde noviembre de 2025, suelen ser de una sola entrada; la tasa es la completa, 90 €. A menudo es más fácil solicitarlo en un país donde tengas residencia. No hay vuelos directos —se vuela vía Estambul, Belgrado o Ereván— y las tarjetas rusas no funcionan.',
        US: 'Los estadounidenses no necesitan visado: 90 días en 180, y las Feroe y Groenlandia también están exentas. El ETIAS (20 €) se ha retrasado y no se espera antes de 2027.',
        GB: 'Los británicos tienen un límite de 90 días en 180. El pasaporte debe tener menos de 10 años el día de entrada y seguir vigente 3 meses después de salir.',
        IN: 'Los ciudadanos indios necesitan visado Schengen a través de VFS. Con la «cascada» europea, dos visados bien usados en tres años dan uno de entradas múltiples de 2 años y luego de 5.',
        CN: 'Los ciudadanos chinos necesitan visado Schengen; si vas a las Feroe o a Groenlandia, indícalo en el formulario para obtener la anotación correcta.',
        UA: 'Los ucranianos con pasaporte biométrico entran sin visado durante 90 días en 180; la protección temporal en la UE dura hasta marzo de 2027.',
      },
    },
    de: {
      summary:
        'Dänemark gehört zu Schengen: Bürger der EU, des EWR und der Schweiz reisen mit dem Ausweis ein, Reisende aus den USA, Großbritannien, Kanada, Australien, Japan, Brasilien, der Ukraine und anderen visumfreien Ländern bleiben bis zu 90 Tage in jedem 180-Tage-Zeitraum. Mit russischem, indischem, chinesischem, türkischem, philippinischem und vielen anderen Pässen brauchst du ein Schengen-Visum für 90 €; Färöer und Grönland liegen außerhalb von Schengen und haben eigene Regeln.',
      apply:
        'Fülle den Antrag nach der Anleitung auf nyidanmark.dk online aus und gib dann Fingerabdrücke und Unterlagen beim Visazentrum ab – in den meisten Ländern VFS Global. Die Gebühr beträgt 90 € plus Servicegebühr, die Entscheidung dauert meist 15 Tage. In vielen Ländern stellen dänische Botschaften auch Visa für andere Schengen-Staaten aus – prüfe also zuerst, wer an deinem Wohnort Anträge annimmt.',
      visaRun:
        'Visa-Runs funktionieren nicht: Die 90 Tage gelten für den ganzen Schengen-Raum in einem rollierenden 180-Tage-Fenster, und Deutschland, Schweden und Norwegen nebenan sind ebenfalls Schengen. Ein Abstecher auf die Färöer oder nach Grönland hält den Zähler nur an; seit April 2026 erfasst das EES jede Ein- und Ausreise.',
      transit:
        'Beim Umsteigen in Kopenhagen-Kastrup zwischen zwei Flügen außerhalb von Schengen brauchen die meisten kein Visum, solange sie im Transitbereich bleiben. Staatsangehörige auf der gemeinsamen Liste für Flughafentransitvisa (Afghanistan, Bangladesch, Iran, Nigeria, Pakistan u. a.) und einiger von Dänemark ergänzter Länder benötigen eines – außer mit gültigem Visum oder Aufenthaltstitel der USA, Kanadas, Japans oder eines EWR-Staats.',
      hacks: [
        'Ein Schengen-Visum gilt nicht auf den Färöern und in Grönland, du kannst es aber im selben Antrag und zur selben Gebühr mit dem Vermerk „gültig für die Färöer“ oder „für Grönland“ beantragen.',
        'Tage auf den Färöern und in Grönland zählen nicht zu den Schengen-90/180: Visumfreie Reisende können eine Nordlandreise verlängern, ohne ihr Kontingent zu verbrauchen.',
        'Junge Menschen aus Australien, Neuseeland, Kanada, Japan, Südkorea und mehreren lateinamerikanischen Ländern können ein einjähriges dänisches Working-Holiday-Visum bekommen.',
      ],
      pitfalls: [
        'Dänemark kontrolliert seit 2016 an der deutschen Grenze, Schweden auf der Øresund-Brücke und in den Zügen: Hab im Zug Kopenhagen–Malmö oder nach Hamburg deinen Pass dabei.',
        'Ein Schengen-Visum für eine Einreise ist nach einem Flug auf die Färöer, nach Grönland oder Großbritannien verbraucht – für solche Routen beantrage ein Visum für zwei oder mehrfache Einreisen.',
        'Eine Registrierung (CPR) ist nur bei Aufenthalten über drei Monate nötig; zahl keine Vermittler, die eine „Pflichtregistrierung“ für Touristen anbieten.',
      ],
      waivers: [
        'Mit einem gültigen Aufenthaltstitel oder nationalen D-Visum eines Schengen-Staats reist du bis zu 90 Tage in 180 visumfrei nach Dänemark. Irische und zyprische Titel zählen nicht, und für Färöer und Grönland gilt keiner davon.',
        'Ein Schengen-Visum eines anderen Mitgliedstaats gilt innerhalb seiner Daten und Tage auch in Dänemark, nicht aber auf den Färöern und in Grönland. Die erste Reise sollte ins ausstellende Land gehen.',
      ],
      passports: {
        RU: 'Dänemark stellt in Russland nur wenige Visa aus, seit November 2025 meist für eine Einreise; die Gebühr beträgt volle 90 €. Oft ist es leichter, in einem Land zu beantragen, in dem du einen Aufenthaltstitel hast. Direktflüge gibt es nicht – man fliegt über Istanbul, Belgrad oder Jerewan; russische Bankkarten funktionieren nicht.',
        US: 'US-Bürger brauchen kein Visum: 90 Tage in 180, auch Färöer und Grönland sind visumfrei. ETIAS (20 €) verzögert sich und wird nicht vor 2027 erwartet.',
        GB: 'Briten dürfen 90 Tage in 180 bleiben. Der Pass muss am Einreisetag jünger als 10 Jahre sein und noch 3 Monate nach der Ausreise gelten.',
        IN: 'Indische Staatsangehörige brauchen ein Schengen-Visum über VFS. Nach der EU-„Kaskade“ gibt es nach zwei korrekt genutzten Visa in drei Jahren ein Mehrfachvisum für 2 Jahre, danach für 5 Jahre.',
        CN: 'Chinesische Staatsangehörige brauchen ein Schengen-Visum; für Färöer oder Grönland gib das im Formular an, um den passenden Vermerk zu bekommen.',
        UA: 'Ukrainer mit biometrischem Pass reisen 90 Tage in 180 visumfrei ein; der vorübergehende Schutz in der EU gilt bis März 2027.',
      },
    },
    fr: {
      summary:
        'Le Danemark fait partie de Schengen : les citoyens de l’UE, de l’EEE et de la Suisse entrent avec leur carte d’identité, et les voyageurs américains, britanniques, canadiens, australiens, japonais, brésiliens, ukrainiens et d’autres pays exemptés restent jusqu’à 90 jours sur 180. Les titulaires d’un passeport russe, indien, chinois, turc, philippin et de nombreux autres ont besoin d’un visa Schengen à 90 € ; les îles Féroé et le Groenland sont hors Schengen et ont leurs propres règles.',
      apply:
        'Remplissez la demande en ligne en suivant les étapes de nyidanmark.dk, puis donnez empreintes et documents au centre de visas — VFS Global dans la plupart des pays. Les frais sont de 90 € plus le service, et la décision prend en général 15 jours. Dans de nombreux pays, les ambassades danoises délivrent aussi des visas pour d’autres États Schengen : vérifiez d’abord qui reçoit les demandes là où vous vivez.',
      visaRun:
        'Les visa runs ne fonctionnent pas : les 90 jours se comptent sur tout l’espace Schengen dans une fenêtre glissante de 180, et l’Allemagne, la Suède et la Norvège voisines sont aussi dans Schengen. Un saut aux Féroé ou au Groenland ne fait que suspendre le compteur ; depuis avril 2026, l’EES enregistre chaque entrée et sortie.',
      transit:
        'Une correspondance à Copenhague-Kastrup entre deux vols hors Schengen ne demande pas de visa à la plupart des nationalités, tant que vous restez en zone de transit. Les ressortissants de la liste commune du visa de transit aéroportuaire (Afghanistan, Bangladesh, Iran, Nigeria, Pakistan, etc.) et de quelques pays ajoutés par le Danemark en ont besoin, sauf s’ils détiennent un visa ou un titre de séjour valide des États-Unis, du Canada, du Japon ou d’un pays de l’EEE.',
      hacks: [
        'Le visa Schengen n’est pas valable aux Féroé ni au Groenland, mais vous pouvez demander, dans le même dossier et pour les mêmes frais, la mention « valable pour les îles Féroé » ou « pour le Groenland ».',
        'Les jours passés aux Féroé et au Groenland ne comptent pas dans les 90/180 Schengen : les voyageurs exemptés de visa peuvent prolonger un voyage dans le Nord sans entamer leur quota.',
        'Les jeunes Australiens, Néo-Zélandais, Canadiens, Japonais, Sud-Coréens et ressortissants de plusieurs pays d’Amérique latine peuvent obtenir un visa vacances-travail danois d’un an.',
      ],
      pitfalls: [
        'Le Danemark contrôle les papiers à la frontière allemande depuis 2016, et la Suède sur le pont et dans les trains de l’Øresund : gardez votre passeport sur vous dans le train Copenhague–Malmö ou vers Hambourg.',
        'Un visa Schengen à entrée unique est consommé après un vol vers les Féroé, le Groenland ou le Royaume-Uni : pour ces itinéraires, demandez un visa à double ou à entrées multiples.',
        'L’enregistrement (CPR) n’est nécessaire que pour un séjour de plus de trois mois ; ne payez pas d’intermédiaire proposant un « enregistrement obligatoire » pour touristes.',
      ],
      waivers: [
        'Un titre de séjour ou un visa long séjour D valide d’un pays Schengen vous permet de venir au Danemark sans visa jusqu’à 90 jours sur 180. Les titres irlandais et chypriotes ne comptent pas, et aucun ne couvre les Féroé ni le Groenland.',
        'Un visa Schengen délivré par un autre État membre est valable au Danemark dans la limite de ses dates et de ses jours, mais pas aux Féroé ni au Groenland. Effectuez le premier voyage dans le pays émetteur.',
      ],
      passports: {
        RU: 'Le Danemark délivre peu de visas en Russie et, depuis novembre 2025, ils sont en général à entrée unique ; les frais sont de 90 € plein tarif. Il est souvent plus simple de déposer dans un pays où vous résidez légalement. Pas de vols directs : on passe par Istanbul, Belgrade ou Erevan ; les cartes bancaires russes ne fonctionnent pas.',
        US: 'Les Américains n’ont pas besoin de visa : 90 jours sur 180, et les Féroé comme le Groenland sont aussi sans visa. L’ETIAS (20 €) a été repoussé et n’est pas attendu avant 2027.',
        GB: 'Les Britanniques sont limités à 90 jours sur 180. Le passeport doit avoir moins de 10 ans le jour de l’entrée et rester valable 3 mois après la sortie.',
        IN: 'Les citoyens indiens ont besoin d’un visa Schengen via VFS. Selon la « cascade » européenne, deux visas bien utilisés en trois ans ouvrent droit à un visa à entrées multiples de 2 ans, puis de 5 ans.',
        CN: 'Les citoyens chinois ont besoin d’un visa Schengen ; pour les Féroé ou le Groenland, indiquez-le sur le formulaire pour obtenir la bonne mention.',
        UA: 'Les Ukrainiens munis d’un passeport biométrique entrent sans visa pour 90 jours sur 180 ; la protection temporaire dans l’UE court jusqu’en mars 2027.',
      },
    },
    it: {
      summary:
        'La Danimarca fa parte di Schengen: i cittadini di UE, SEE e Svizzera entrano con la carta d’identità, mentre chi ha passaporto di Stati Uniti, Regno Unito, Canada, Australia, Giappone, Brasile, Ucraina e altri paesi esenti resta fino a 90 giorni su 180. Chi ha passaporto russo, indiano, cinese, turco, filippino e di molti altri paesi ha bisogno di un visto Schengen da 90 €; le Fær Øer e la Groenlandia sono fuori Schengen e hanno regole proprie.',
      apply:
        'Compila la domanda online seguendo i passaggi su nyidanmark.dk, poi lascia impronte e documenti al centro visti, che nella maggior parte dei paesi è VFS Global. La tassa è di 90 € più il servizio e la decisione arriva di solito in 15 giorni. In molti paesi le ambasciate danesi rilasciano visti anche per conto di altri Stati Schengen, quindi verifica prima chi accetta le domande dove vivi.',
      visaRun:
        'I visa run non funzionano: i 90 giorni si contano su tutta l’area Schengen in una finestra mobile di 180, e anche le vicine Germania, Svezia e Norvegia sono Schengen. Un viaggio alle Fær Øer o in Groenlandia mette solo in pausa il contatore; dall’aprile 2026 l’EES registra ogni ingresso e uscita.',
      transit:
        'Per cambiare aereo a Copenaghen-Kastrup tra due voli fuori Schengen la maggior parte delle nazionalità non ha bisogno di visto, se resta nella zona di transito. I cittadini della lista comune del visto di transito aeroportuale (Afghanistan, Bangladesh, Iran, Nigeria, Pakistan e altri) e di alcuni paesi aggiunti dalla Danimarca devono averlo, a meno di avere un visto o un permesso valido di Stati Uniti, Canada, Giappone o di un paese SEE.',
      hacks: [
        'Il visto Schengen non vale alle Fær Øer né in Groenlandia, ma puoi chiedere, con la stessa domanda e la stessa tassa, l’annotazione «valido per le Isole Fær Øer» o «per la Groenlandia».',
        'I giorni alle Fær Øer e in Groenlandia non contano nei 90/180 Schengen: chi non ha bisogno di visto può allungare un viaggio al Nord senza consumare il proprio limite.',
        'I giovani di Australia, Nuova Zelanda, Canada, Giappone, Corea del Sud e di vari paesi dell’America Latina possono ottenere un visto vacanza-lavoro danese di un anno.',
      ],
      pitfalls: [
        'La Danimarca controlla i documenti al confine tedesco dal 2016, e la Svezia sul ponte e sui treni dell’Øresund: tieni il passaporto con te sul treno Copenaghen–Malmö o per Amburgo.',
        'Un visto Schengen a ingresso singolo si consuma dopo un volo alle Fær Øer, in Groenlandia o nel Regno Unito: per questi itinerari chiedi un visto a doppio o multiplo ingresso.',
        'La registrazione (CPR) serve solo per soggiorni oltre i tre mesi; non pagare intermediari che offrono una «registrazione obbligatoria» per turisti.',
      ],
      waivers: [
        'Un permesso di soggiorno o un visto nazionale D valido di qualsiasi paese Schengen ti permette di visitare la Danimarca senza visto fino a 90 giorni su 180. I permessi irlandesi e ciprioti non valgono, e nessuno copre Fær Øer e Groenlandia.',
        'Un visto Schengen rilasciato da un altro Stato membro vale anche in Danimarca entro le sue date e i suoi giorni, ma non alle Fær Øer né in Groenlandia. Fai il primo viaggio nel paese che l’ha rilasciato.',
      ],
      passports: {
        RU: 'La Danimarca rilascia pochi visti in Russia e da novembre 2025 sono di solito a ingresso singolo; la tassa è piena, 90 €. Spesso è più semplice fare domanda in un paese in cui hai la residenza. Non ci sono voli diretti — si passa da Istanbul, Belgrado o Erevan — e le carte russe non funzionano.',
        US: 'Gli statunitensi non hanno bisogno di visto: 90 giorni su 180, e anche Fær Øer e Groenlandia sono senza visto. L’ETIAS (20 €) è stato rinviato e non è atteso prima del 2027.',
        GB: 'I britannici hanno il limite di 90 giorni su 180. Il passaporto deve avere meno di 10 anni il giorno dell’ingresso e valere ancora 3 mesi dopo l’uscita.',
        IN: 'I cittadini indiani hanno bisogno del visto Schengen tramite VFS. Con la «cascata» europea, due visti usati correttamente in tre anni danno un visto multiplo di 2 anni e poi di 5.',
        CN: 'I cittadini cinesi hanno bisogno del visto Schengen; per Fær Øer o Groenlandia indicalo nel modulo per ottenere l’annotazione giusta.',
        UA: 'Gli ucraini con passaporto biometrico entrano senza visto per 90 giorni su 180; la protezione temporanea nell’UE vale fino a marzo 2027.',
      },
    },
  },
};

export default guide;
