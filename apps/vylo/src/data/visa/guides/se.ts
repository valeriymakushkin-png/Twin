import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'SE',
  checked: '2026-10',
  fees: { visa: { kind: 'fixed', amount: 90, currency: 'EUR' } },
  stay: { visa: 90 },
  links: { immigration: 'https://www.migrationsverket.se' },
  docs: ['insurance', 'returnTicket', 'booking', 'finance'],
  passportMonths: 3,
  rule: { days: 90, window: 180 },
  visaRun: 'no',
  transit: { hours: 24 },
  waivers: [
    { holds: ['resEU'], status: 'free', days: 90 },
    { holds: ['visaSchengen'], status: 'free', days: 90 },
  ],
  hackScope: [null, ['AU', 'NZ', 'CA', 'JP', 'KR', 'AR', 'CL', 'UY'], null],
  pitfallScope: [null, null, null],
  text: {
    ru: {
      summary:
        'Швеция входит в Шенген: граждане ЕС, ЕЭЗ и Швейцарии въезжают по ID-карте, а граждане США, Великобритании, Канады, Австралии, Японии, Бразилии, Украины и других безвизовых стран — до 90 дней в любые 180. Россиянам, индийцам, китайцам, туркам, иранцам и многим другим нужна шенгенская виза за 90 €; правила публикует Миграционное ведомство на migrationsverket.se.',
      apply:
        'Во многих странах заявление можно подать онлайн на сайте Migrationsverket, а затем сдать отпечатки и паспорт в визовом центре — обычно VFS Global — или в посольстве. Сбор — 90 € плюс сервисный, решение — обычно 15 дней. Если в поездке есть Норвегия или Дания, подавайте туда, где больше ночей.',
      visaRun:
        'Визаран не работает: 90 дней считаются по всему Шенгену в скользящем окне 180 дней, а Норвегия, Финляндия и Дания по соседству — тоже Шенген. Паромы в Хельсинки и Таллин — внутренние рейсы и счётчик не останавливают; с апреля 2026 года EES фиксирует каждый въезд и выезд из зоны.',
      transit:
        'Пересадка в Стокгольме (Арланда) между двумя рейсами за пределы Шенгена большинству не требует визы, если не выходить из транзитной зоны. Гражданам из общего списка (Афганистан, Бангладеш, Иран, Нигерия, Пакистан и др.) и нескольких стран, добавленных Швецией, нужна транзитная виза — кроме владельцев действующей визы или ВНЖ США, Канады, Японии или страны ЕЭЗ.',
      hacks: [
        'Чтобы погостить у родственников дольше 90 дней, можно запросить «гостевой ВНЖ» (besöksuppehållstillstånd) — он не расходует шенгенские дни и выдаётся на срок визита.',
        'Молодые австралийцы, новозеландцы, канадцы, японцы, южнокорейцы и граждане нескольких стран Латинской Америки могут получить шведскую визу working holiday на год.',
        'Паромы Стокгольм — Турку через Аландские острова идут внутри Шенгена, но Аланды вне налоговой зоны ЕС: на борту продают беспошлинные товары, а паспорт или ID всё равно нужен.',
      ],
      pitfalls: [
        'На поездах и мосту через Эресунн из Дании Швеция периодически проверяет документы: держите паспорт при себе, ID-карты хватает только гражданам ЕС.',
        'Решения по ВНЖ Migrationsverket принимает месяцами, а работать по туристической визе или в безвизовые дни нельзя — включая «пробные смены» в кафе.',
        'Регистрация в налоговой (personnummer) нужна только тем, кто переезжает минимум на год; посредники, продающие «шведский номер» туристам, — мошенники.',
      ],
      waivers: [
        'Действующий ВНЖ или долгосрочная виза D любой шенгенской страны позволяют ездить в Швецию без визы до 90 дней в любые 180. Ирландский и кипрский ВНЖ не подходят.',
        'Шенгенская виза другой страны действует и в Швеции в пределах своих дат и числа дней. Первую поездку лучше совершить в страну, выдавшую визу.',
      ],
      passports: {
        RU: 'Шведские визы в России выдают ограниченно, а с ноября 2025 года, как правило, однократные; сбор — полные 90 €. Часто проще подать в стране, где у вас есть ВНЖ. Прямых рейсов и паромов из Санкт-Петербурга нет — летают через Стамбул, Белград или Ереван; российские карты не работают, а наличные в Швеции почти не берут.',
        US: 'Гражданам США виза не нужна: 90 дней в любые 180. Запуск ETIAS (20 €) отложен, раньше 2027 года его не ждут.',
        GB: 'Британцы ограничены 90 днями в 180. Паспорт должен быть моложе 10 лет на дату въезда и действовать ещё 3 месяца после выезда.',
        IN: 'Гражданам Индии нужна шенгенская виза: в Индии заявление обычно подают онлайн и затем идут в VFS. По правилу «каскада» после двух правильно использованных виз за три года дают многократную визу на 2 года, затем на 5 лет.',
        CN: 'Гражданам Китая нужна шенгенская виза; перед летом и «Золотой неделей» записи в VFS лучше бронировать за месяц.',
        UA: 'Граждане Украины с биометрическим паспортом въезжают без визы на 90 дней в 180; временная защита в ЕС продлена до марта 2027 года.',
      },
    },
    en: {
      summary:
        'Sweden is in Schengen: EU, EEA and Swiss citizens enter with an ID card, while US, UK, Canadian, Australian, Japanese, Brazilian, Ukrainian and other visa-exempt travellers stay up to 90 days in any 180. Russian, Indian, Chinese, Turkish, Iranian and many other passport holders need a €90 Schengen visa; the rules are published by the Migration Agency on migrationsverket.se.',
      apply:
        'In many countries you can apply online on the Migrationsverket site, then give fingerprints and your passport at the visa centre — usually VFS Global — or the embassy. The fee is €90 plus the service charge, and decisions usually take 15 days. If your trip includes Norway or Denmark, apply where you spend the most nights.',
      visaRun:
        'Visa runs don’t work: the 90 days are counted across the whole Schengen area over any rolling 180-day window, and neighbouring Norway, Finland and Denmark are Schengen too. Ferries to Helsinki and Tallinn are internal and don’t stop the clock; since April 2026 the EES records every entry into and exit from the zone.',
      transit:
        'Changing planes at Stockholm Arlanda between two non-Schengen flights needs no visa for most nationalities, as long as you stay airside. Citizens on the common airport-transit-visa list (Afghanistan, Bangladesh, Iran, Nigeria, Pakistan and others) and a few nationalities Sweden adds need one, unless they hold a valid US, Canadian, Japanese or EEA visa or residence permit.',
      hacks: [
        'To stay with relatives for longer than 90 days, you can request a visitor’s residence permit (besöksuppehållstillstånd) — it doesn’t use up your Schengen days and is issued for the length of the visit.',
        'Young Australians, New Zealanders, Canadians, Japanese, South Koreans and citizens of several Latin American countries can get a one-year Swedish working holiday visa.',
        'Stockholm–Turku ferries via the Åland Islands stay within Schengen, but Åland is outside the EU tax area: duty-free shopping is sold on board, though you still need a passport or ID.',
      ],
      pitfalls: [
        'Sweden periodically checks papers on trains and the Øresund bridge from Denmark: keep your passport on you — an ID card is only enough for EU citizens.',
        'Migrationsverket takes months to decide on residence permits, and you can’t work on a tourist visa or visa-free days — that includes “trial shifts” in a café.',
        'Registering with the Tax Agency (personnummer) is only for people moving for at least a year; middlemen selling a “Swedish number” to tourists are scammers.',
      ],
      waivers: [
        'A valid residence permit or long-stay D visa from any Schengen country lets you visit Sweden visa-free for up to 90 days in any 180. Irish and Cypriot permits don’t count.',
        'A Schengen visa issued by another member state is valid in Sweden within its dates and number of days. Make the first trip to the issuing country.',
      ],
      passports: {
        RU: 'Sweden issues few visas in Russia, and since November 2025 they’re usually single-entry; the fee is the full €90. It’s often easier to apply in a country where you hold residence. There are no direct flights or ferries from St Petersburg — routes go via Istanbul, Belgrade or Yerevan; Russian bank cards don’t work, and cash is barely accepted in Sweden.',
        US: 'US citizens need no visa: 90 days in any 180. ETIAS (€20) has been delayed and isn’t expected before 2027.',
        GB: 'UK citizens are limited to 90 days in 180. Your passport must be under 10 years old on the day you enter and valid for 3 months after you leave.',
        IN: 'Indian citizens need a Schengen visa: in India you usually apply online and then visit VFS. Under the EU “cascade”, two visas used correctly within three years earn a 2-year multiple-entry visa, then a 5-year one.',
        CN: 'Chinese citizens need a Schengen visa; before summer and Golden Week, book VFS slots a month ahead.',
        UA: 'Ukrainians with a biometric passport enter visa-free for 90 days in 180; temporary protection in the EU runs until March 2027.',
      },
    },
    es: {
      summary:
        'Suecia forma parte de Schengen: los ciudadanos de la UE, el EEE y Suiza entran con el DNI, y los de EE. UU., Reino Unido, Canadá, Australia, Japón, Brasil, Ucrania y otros países exentos se quedan hasta 90 días en cualquier periodo de 180. Quienes tienen pasaporte ruso, indio, chino, turco, iraní y muchos otros necesitan un visado Schengen de 90 €; las normas las publica la Agencia de Migración en migrationsverket.se.',
      apply:
        'En muchos países puedes solicitarlo en línea en la web de Migrationsverket y luego dejar las huellas y el pasaporte en el centro de visados —normalmente VFS Global— o en la embajada. La tasa es de 90 € más el servicio y la resolución suele tardar 15 días. Si tu viaje incluye Noruega o Dinamarca, solicita donde pases más noches.',
      visaRun:
        'Los visa runs no sirven: los 90 días se cuentan en todo Schengen dentro de una ventana móvil de 180, y Noruega, Finlandia y Dinamarca, los vecinos, también son Schengen. Los ferris a Helsinki y Tallin son internos y no paran el contador; desde abril de 2026 el EES registra cada entrada y salida de la zona.',
      transit:
        'Para cambiar de avión en Estocolmo-Arlanda entre dos vuelos fuera de Schengen la mayoría no necesita visado, si no sale de la zona de tránsito. Los ciudadanos de la lista común de visado de tránsito aeroportuario (Afganistán, Bangladés, Irán, Nigeria, Pakistán y otros) y de algunos países que añade Suecia sí lo necesitan, salvo que tengan visado o residencia vigente de EE. UU., Canadá, Japón o un país del EEE.',
      hacks: [
        'Para quedarte con familiares más de 90 días puedes pedir un permiso de residencia de visita (besöksuppehållstillstånd): no gasta tus días Schengen y se concede por la duración de la visita.',
        'Los jóvenes de Australia, Nueva Zelanda, Canadá, Japón, Corea del Sur y de varios países latinoamericanos pueden obtener un visado de vacaciones y trabajo de un año en Suecia.',
        'Los ferris Estocolmo–Turku por las islas Åland van dentro de Schengen, pero Åland está fuera de la zona fiscal de la UE: a bordo se vende libre de impuestos, aunque sigues necesitando pasaporte o DNI.',
      ],
      pitfalls: [
        'Suecia controla documentos de vez en cuando en los trenes y en el puente del Øresund desde Dinamarca: lleva el pasaporte encima; el DNI solo basta a los ciudadanos de la UE.',
        'Migrationsverket tarda meses en resolver las residencias, y no puedes trabajar con visado turístico ni en tus días sin visado, tampoco en «turnos de prueba» en una cafetería.',
        'El registro en Hacienda (personnummer) es solo para quien se muda al menos un año; los intermediarios que venden un «número sueco» a turistas son estafadores.',
      ],
      waivers: [
        'Un permiso de residencia o un visado nacional D vigente de cualquier país Schengen te permite visitar Suecia sin visado hasta 90 días en 180. Los permisos de Irlanda y Chipre no valen.',
        'Un visado Schengen expedido por otro Estado miembro vale en Suecia dentro de sus fechas y su número de días. Haz el primer viaje al país emisor.',
      ],
      passports: {
        RU: 'Suecia expide pocos visados en Rusia y, desde noviembre de 2025, suelen ser de una sola entrada; la tasa es la completa, 90 €. A menudo es más fácil solicitarlo en un país donde tengas residencia. No hay vuelos directos ni ferris desde San Petersburgo —se vuela vía Estambul, Belgrado o Ereván—, las tarjetas rusas no funcionan y en Suecia apenas se acepta efectivo.',
        US: 'Los ciudadanos estadounidenses no necesitan visado: 90 días en 180. El ETIAS (20 €) se ha retrasado y no se espera antes de 2027.',
        GB: 'Los británicos tienen un límite de 90 días en 180. El pasaporte debe tener menos de 10 años el día de entrada y seguir vigente 3 meses después de salir.',
        IN: 'Los ciudadanos indios necesitan visado Schengen: en India se suele solicitar en línea y después acudir a VFS. Con la «cascada» europea, dos visados bien usados en tres años dan uno de entradas múltiples de 2 años y luego de 5.',
        CN: 'Los ciudadanos chinos necesitan visado Schengen; antes del verano y de la Semana Dorada, reserva cita en VFS con un mes de antelación.',
        UA: 'Los ucranianos con pasaporte biométrico entran sin visado durante 90 días en 180; la protección temporal en la UE dura hasta marzo de 2027.',
      },
    },
    de: {
      summary:
        'Schweden gehört zu Schengen: Bürger der EU, des EWR und der Schweiz reisen mit dem Ausweis ein, Reisende aus den USA, Großbritannien, Kanada, Australien, Japan, Brasilien, der Ukraine und anderen visumfreien Ländern bleiben bis zu 90 Tage in jedem 180-Tage-Zeitraum. Mit russischem, indischem, chinesischem, türkischem, iranischem und vielen anderen Pässen brauchst du ein Schengen-Visum für 90 €; die Regeln veröffentlicht die Migrationsbehörde auf migrationsverket.se.',
      apply:
        'In vielen Ländern beantragst du online auf der Seite von Migrationsverket und gibst danach Fingerabdrücke und Pass im Visazentrum – meist VFS Global – oder in der Botschaft ab. Die Gebühr beträgt 90 € plus Servicegebühr, die Entscheidung dauert meist 15 Tage. Gehören Norwegen oder Dänemark zur Reise, beantrage dort, wo du die meisten Nächte verbringst.',
      visaRun:
        'Visa-Runs funktionieren nicht: Die 90 Tage gelten für den ganzen Schengen-Raum in einem rollierenden 180-Tage-Fenster, und die Nachbarn Norwegen, Finnland und Dänemark sind ebenfalls Schengen. Fähren nach Helsinki und Tallinn sind intern und halten den Zähler nicht an; seit April 2026 erfasst das EES jede Ein- und Ausreise in den und aus dem Raum.',
      transit:
        'Beim Umsteigen in Stockholm-Arlanda zwischen zwei Flügen außerhalb von Schengen brauchen die meisten kein Visum, solange sie im Transitbereich bleiben. Staatsangehörige auf der gemeinsamen Liste für Flughafentransitvisa (Afghanistan, Bangladesch, Iran, Nigeria, Pakistan u. a.) und einiger von Schweden ergänzter Länder benötigen eines – außer mit gültigem Visum oder Aufenthaltstitel der USA, Kanadas, Japans oder eines EWR-Staats.',
      hacks: [
        'Willst du länger als 90 Tage bei Verwandten bleiben, kannst du eine Besuchsaufenthaltserlaubnis (besöksuppehållstillstånd) beantragen – sie verbraucht keine Schengen-Tage und gilt für die Dauer des Besuchs.',
        'Junge Menschen aus Australien, Neuseeland, Kanada, Japan, Südkorea und mehreren lateinamerikanischen Ländern können ein einjähriges schwedisches Working-Holiday-Visum bekommen.',
        'Die Fähren Stockholm–Turku über die Åland-Inseln bleiben im Schengen-Raum, Åland liegt aber außerhalb des EU-Steuergebiets: An Bord wird zollfrei verkauft, Pass oder Ausweis brauchst du trotzdem.',
      ],
      pitfalls: [
        'Schweden kontrolliert immer wieder in Zügen und auf der Øresund-Brücke aus Dänemark: Hab deinen Pass dabei – der Personalausweis reicht nur EU-Bürgern.',
        'Migrationsverket entscheidet über Aufenthaltstitel oft erst nach Monaten, und mit Touristenvisum oder in visumfreien Tagen darfst du nicht arbeiten – auch keine „Probeschichten“ im Café.',
        'Die Registrierung beim Finanzamt (personnummer) gibt es nur für Menschen, die mindestens ein Jahr bleiben; Vermittler, die Touristen eine „schwedische Nummer“ verkaufen, sind Betrüger.',
      ],
      waivers: [
        'Mit einem gültigen Aufenthaltstitel oder nationalen D-Visum eines Schengen-Staats reist du bis zu 90 Tage in 180 visumfrei nach Schweden. Irische und zyprische Titel zählen nicht.',
        'Ein Schengen-Visum eines anderen Mitgliedstaats gilt innerhalb seiner Daten und Tage auch in Schweden. Die erste Reise sollte ins ausstellende Land gehen.',
      ],
      passports: {
        RU: 'Schweden stellt in Russland nur wenige Visa aus, seit November 2025 meist für eine Einreise; die Gebühr beträgt volle 90 €. Oft ist es leichter, in einem Land zu beantragen, in dem du einen Aufenthaltstitel hast. Direktflüge und Fähren ab St. Petersburg gibt es nicht – man fliegt über Istanbul, Belgrad oder Jerewan; russische Bankkarten funktionieren nicht, und Bargeld wird in Schweden kaum angenommen.',
        US: 'US-Bürger brauchen kein Visum: 90 Tage in 180. ETIAS (20 €) verzögert sich und wird nicht vor 2027 erwartet.',
        GB: 'Briten dürfen 90 Tage in 180 bleiben. Der Pass muss am Einreisetag jünger als 10 Jahre sein und noch 3 Monate nach der Ausreise gelten.',
        IN: 'Indische Staatsangehörige brauchen ein Schengen-Visum: In Indien beantragt man meist online und geht danach zu VFS. Nach der EU-„Kaskade“ gibt es nach zwei korrekt genutzten Visa in drei Jahren ein Mehrfachvisum für 2 Jahre, danach für 5 Jahre.',
        CN: 'Chinesische Staatsangehörige brauchen ein Schengen-Visum; vor dem Sommer und der Goldenen Woche solltest du VFS-Termine einen Monat im Voraus buchen.',
        UA: 'Ukrainer mit biometrischem Pass reisen 90 Tage in 180 visumfrei ein; der vorübergehende Schutz in der EU gilt bis März 2027.',
      },
    },
    fr: {
      summary:
        'La Suède fait partie de Schengen : les citoyens de l’UE, de l’EEE et de la Suisse entrent avec leur carte d’identité, et les voyageurs américains, britanniques, canadiens, australiens, japonais, brésiliens, ukrainiens et d’autres pays exemptés restent jusqu’à 90 jours sur 180. Les titulaires d’un passeport russe, indien, chinois, turc, iranien et de nombreux autres ont besoin d’un visa Schengen à 90 € ; les règles sont publiées par l’Office des migrations sur migrationsverket.se.',
      apply:
        'Dans de nombreux pays, la demande se fait en ligne sur le site de Migrationsverket, puis on donne empreintes et passeport au centre de visas — en général VFS Global — ou à l’ambassade. Les frais sont de 90 € plus le service, et la décision prend en général 15 jours. Si votre voyage passe aussi par la Norvège ou le Danemark, déposez là où vous passez le plus de nuits.',
      visaRun:
        'Les visa runs ne fonctionnent pas : les 90 jours se comptent sur tout l’espace Schengen dans une fenêtre glissante de 180, et la Norvège, la Finlande et le Danemark voisins sont aussi dans Schengen. Les ferries pour Helsinki et Tallinn sont intérieurs et n’arrêtent pas le compteur ; depuis avril 2026, l’EES enregistre chaque entrée et sortie de la zone.',
      transit:
        'Une correspondance à Stockholm-Arlanda entre deux vols hors Schengen ne demande pas de visa à la plupart des nationalités, tant que vous restez en zone de transit. Les ressortissants de la liste commune du visa de transit aéroportuaire (Afghanistan, Bangladesh, Iran, Nigeria, Pakistan, etc.) et de quelques pays ajoutés par la Suède en ont besoin, sauf s’ils détiennent un visa ou un titre de séjour valide des États-Unis, du Canada, du Japon ou d’un pays de l’EEE.',
      hacks: [
        'Pour rester plus de 90 jours chez des proches, vous pouvez demander un titre de séjour de visite (besöksuppehållstillstånd) : il n’entame pas vos jours Schengen et couvre la durée de la visite.',
        'Les jeunes Australiens, Néo-Zélandais, Canadiens, Japonais, Sud-Coréens et ressortissants de plusieurs pays d’Amérique latine peuvent obtenir un visa vacances-travail suédois d’un an.',
        'Les ferries Stockholm–Turku via les îles Åland restent dans Schengen, mais Åland est hors de la zone fiscale de l’UE : on vend du hors-taxe à bord, même s’il faut toujours un passeport ou une carte d’identité.',
      ],
      pitfalls: [
        'La Suède contrôle régulièrement les papiers dans les trains et sur le pont de l’Øresund depuis le Danemark : gardez votre passeport sur vous — la carte d’identité ne suffit qu’aux citoyens de l’UE.',
        'Migrationsverket met des mois à statuer sur les titres de séjour, et vous ne pouvez pas travailler avec un visa touristique ou pendant vos jours sans visa — même pour un « essai » dans un café.',
        'L’inscription auprès du fisc (personnummer) est réservée à ceux qui s’installent au moins un an ; les intermédiaires qui vendent un « numéro suédois » aux touristes sont des escrocs.',
      ],
      waivers: [
        'Un titre de séjour ou un visa long séjour D valide d’un pays Schengen vous permet de venir en Suède sans visa jusqu’à 90 jours sur 180. Les titres irlandais et chypriotes ne comptent pas.',
        'Un visa Schengen délivré par un autre État membre est valable en Suède dans la limite de ses dates et de ses jours. Effectuez le premier voyage dans le pays émetteur.',
      ],
      passports: {
        RU: 'La Suède délivre peu de visas en Russie et, depuis novembre 2025, ils sont en général à entrée unique ; les frais sont de 90 € plein tarif. Il est souvent plus simple de déposer dans un pays où vous résidez légalement. Ni vols directs ni ferries depuis Saint-Pétersbourg : on passe par Istanbul, Belgrade ou Erevan ; les cartes bancaires russes ne fonctionnent pas, et l’argent liquide n’est presque plus accepté en Suède.',
        US: 'Les citoyens américains n’ont pas besoin de visa : 90 jours sur 180. L’ETIAS (20 €) a été repoussé et n’est pas attendu avant 2027.',
        GB: 'Les Britanniques sont limités à 90 jours sur 180. Le passeport doit avoir moins de 10 ans le jour de l’entrée et rester valable 3 mois après la sortie.',
        IN: 'Les citoyens indiens ont besoin d’un visa Schengen : en Inde, on dépose généralement en ligne avant de passer chez VFS. Selon la « cascade » européenne, deux visas bien utilisés en trois ans ouvrent droit à un visa à entrées multiples de 2 ans, puis de 5 ans.',
        CN: 'Les citoyens chinois ont besoin d’un visa Schengen ; avant l’été et la Semaine d’or, réservez un créneau VFS un mois à l’avance.',
        UA: 'Les Ukrainiens munis d’un passeport biométrique entrent sans visa pour 90 jours sur 180 ; la protection temporaire dans l’UE court jusqu’en mars 2027.',
      },
    },
    it: {
      summary:
        'La Svezia fa parte di Schengen: i cittadini di UE, SEE e Svizzera entrano con la carta d’identità, mentre chi ha passaporto di Stati Uniti, Regno Unito, Canada, Australia, Giappone, Brasile, Ucraina e altri paesi esenti resta fino a 90 giorni su 180. Chi ha passaporto russo, indiano, cinese, turco, iraniano e di molti altri paesi ha bisogno di un visto Schengen da 90 €; le regole le pubblica l’Agenzia per la migrazione su migrationsverket.se.',
      apply:
        'In molti paesi la domanda si fa online sul sito di Migrationsverket, poi si lasciano impronte e passaporto al centro visti — di solito VFS Global — o in ambasciata. La tassa è di 90 € più il servizio e la decisione arriva di solito in 15 giorni. Se il viaggio include Norvegia o Danimarca, fai domanda dove passi più notti.',
      visaRun:
        'I visa run non funzionano: i 90 giorni si contano su tutta l’area Schengen in una finestra mobile di 180, e le vicine Norvegia, Finlandia e Danimarca sono anch’esse Schengen. I traghetti per Helsinki e Tallinn sono interni e non fermano il contatore; dall’aprile 2026 l’EES registra ogni ingresso e uscita dall’area.',
      transit:
        'Per cambiare aereo a Stoccolma-Arlanda tra due voli fuori Schengen la maggior parte delle nazionalità non ha bisogno di visto, se resta nella zona di transito. I cittadini della lista comune del visto di transito aeroportuale (Afghanistan, Bangladesh, Iran, Nigeria, Pakistan e altri) e di alcuni paesi aggiunti dalla Svezia devono averlo, a meno di avere un visto o un permesso valido di Stati Uniti, Canada, Giappone o di un paese SEE.',
      hacks: [
        'Per restare dai parenti oltre i 90 giorni puoi chiedere un permesso di soggiorno per visita (besöksuppehållstillstånd): non consuma i giorni Schengen e vale per la durata della visita.',
        'I giovani di Australia, Nuova Zelanda, Canada, Giappone, Corea del Sud e di vari paesi dell’America Latina possono ottenere un visto vacanza-lavoro svedese di un anno.',
        'I traghetti Stoccolma–Turku via Åland restano dentro Schengen, ma le Åland sono fuori dall’area fiscale UE: a bordo si vende duty free, anche se serve comunque passaporto o carta d’identità.',
      ],
      pitfalls: [
        'La Svezia controlla periodicamente i documenti sui treni e sul ponte dell’Øresund dalla Danimarca: tieni il passaporto con te — la carta d’identità basta solo ai cittadini UE.',
        'Migrationsverket impiega mesi per decidere sui permessi, e con un visto turistico o nei giorni senza visto non puoi lavorare, nemmeno per un «turno di prova» in un bar.',
        'La registrazione all’Agenzia delle entrate (personnummer) è solo per chi si trasferisce per almeno un anno; gli intermediari che vendono un «numero svedese» ai turisti sono truffatori.',
      ],
      waivers: [
        'Un permesso di soggiorno o un visto nazionale D valido di qualsiasi paese Schengen ti permette di visitare la Svezia senza visto fino a 90 giorni su 180. I permessi irlandesi e ciprioti non valgono.',
        'Un visto Schengen rilasciato da un altro Stato membro vale anche in Svezia entro le sue date e i suoi giorni. Fai il primo viaggio nel paese che l’ha rilasciato.',
      ],
      passports: {
        RU: 'La Svezia rilascia pochi visti in Russia e da novembre 2025 sono di solito a ingresso singolo; la tassa è piena, 90 €. Spesso è più semplice fare domanda in un paese in cui hai la residenza. Non ci sono voli diretti né traghetti da San Pietroburgo — si passa da Istanbul, Belgrado o Erevan —, le carte russe non funzionano e in Svezia i contanti non li accetta quasi nessuno.',
        US: 'I cittadini statunitensi non hanno bisogno di visto: 90 giorni su 180. L’ETIAS (20 €) è stato rinviato e non è atteso prima del 2027.',
        GB: 'I britannici hanno il limite di 90 giorni su 180. Il passaporto deve avere meno di 10 anni il giorno dell’ingresso e valere ancora 3 mesi dopo l’uscita.',
        IN: 'I cittadini indiani hanno bisogno del visto Schengen: in India di solito si fa domanda online e poi si va da VFS. Con la «cascata» europea, due visti usati correttamente in tre anni danno un visto multiplo di 2 anni e poi di 5.',
        CN: 'I cittadini cinesi hanno bisogno del visto Schengen; prima dell’estate e della Settimana d’oro prenota l’appuntamento VFS con un mese d’anticipo.',
        UA: 'Gli ucraini con passaporto biometrico entrano senza visto per 90 giorni su 180; la protezione temporanea nell’UE vale fino a marzo 2027.',
      },
    },
  },
};

export default guide;
