import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'IS',
  checked: '2026-10',
  fees: { visa: { kind: 'fixed', amount: 90, currency: 'EUR' } },
  stay: { visa: 90 },
  links: { immigration: 'https://utl.is' },
  docs: ['insurance', 'returnTicket', 'booking', 'finance'],
  passportMonths: 3,
  rule: { days: 90, window: 180 },
  visaRun: 'no',
  transit: { hours: 24 },
  nomad: { name: 'Long-term visa for remote workers', months: 6, income: { kind: 'from', amount: 1000000, currency: 'ISK' } },
  waivers: [
    { holds: ['resEU'], status: 'free', days: 90 },
    { holds: ['visaSchengen'], status: 'free', days: 90 },
  ],
  text: {
    ru: {
      summary:
        'Исландия не в ЕС, но входит в Шенген: граждане ЕС и ЕЭЗ въезжают по ID-карте, а граждане США, Канады, Великобритании, Австралии, Японии, Бразилии, Украины и других безвизовых стран — до 90 дней в любые 180 по общему шенгенскому счёту. Россиянам, индийцам, китайцам, туркам и многим другим нужна шенгенская виза за 90 €, которую обычно оформляет посольство другой страны Шенгена.',
      apply:
        'Собственных консульств у Исландии мало, поэтому почти везде её визы оформляют посольства других шенгенских стран — чаще всего Дании или Норвегии; кто представляет Исландию в вашей стране, указано на сайте миграционного ведомства (utl.is). Сбор — 90 € плюс сервисный визового центра, решение — обычно 15 дней. Если в поездке есть и другие страны Шенгена, подавайте туда, где больше ночей.',
      visaRun:
        'Визаран не работает: 90 дней считаются по всему Шенгену в скользящем окне 180 дней. Полёт на Фарерские острова, в Гренландию или Лондон лишь ставит счётчик на паузу; с апреля 2026 года EES фиксирует каждый въезд и выезд.',
      transit:
        'Кефлавик — трансатлантический хаб: пересадка между двумя рейсами за пределы Шенгена (например, из США в Лондон или Дублин) большинству не требует визы, если не выходить из транзитной зоны. Гражданам из общего списка (Афганистан, Бангладеш, Иран, Нигерия, Пакистан и др.) нужна транзитная виза — кроме владельцев действующей визы или ВНЖ США, Канады, Японии или страны ЕЭЗ. При пересадке на рейс в Шенген вы въезжаете уже в Кефлавике.',
      nomad:
        'Долгосрочная виза для удалённых работников даёт от 90 до 180 дней в Исландии тем, кто работает на иностранную компанию или на себя за рубежом: доход от 1 000 000 ISK в месяц (1 300 000 ISK с супругом или детьми), медстраховка, сбор 12 200 ISK. Она только для граждан стран вне ЕЭЗ, которым не нужна шенгенская виза, и не ведёт к ВНЖ.',
      hacks: [
        'Icelandair позволяет на трансатлантических рейсах сделать остановку в Исландии до 7 дней без доплаты за билет — удобно, если вы и так летите между Северной Америкой и Европой.',
        'Для пассажиров из Северной Америки Кефлавик — первая точка въезда в Шенген: паспортный контроль и регистрация в EES проходят здесь, а дальше рейсы в Европу уже внутренние.',
        'Рейсы из Рейкьявика на Фареры и в Гренландию — выезд из Шенгена: дни там не расходуют 90/180, но для них действуют собственные визовые правила, а однократная шенгенская виза после такого полёта уже использована.',
      ],
      pitfalls: [
        'Визу для удалённой работы нельзя продлить или превратить в ВНЖ, и подать на неё могут только безвизовые для Шенгена граждане — россиянам, индийцам и китайцам она недоступна.',
        'Страховка для визы должна покрывать весь срок от 30 000 €, а для Исландии разумно брать полис с поисково-спасательными операциями: эвакуация с ледника обходится очень дорого.',
        'Не подавайте в «удобное» посольство: представительство, которое выдаёт визы в Исландию, назначено для каждой страны — заявление в другое консульство просто не примут.',
      ],
      waivers: [
        'Действующий ВНЖ или долгосрочная виза D любой шенгенской страны позволяют ездить в Исландию без визы до 90 дней в любые 180. Ирландский и кипрский ВНЖ не подходят.',
        'Шенгенская виза другой страны действует и в Исландии в пределах своих дат и числа дней. Первую поездку лучше совершить в страну, выдавшую визу.',
      ],
      passports: {
        RU: 'Посольство Исландии в Москве приостановило работу в 2023 году, поэтому визы оформляет представительство другой шенгенской страны — уточните актуальный порядок; с ноября 2025 года визы, как правило, однократные. Прямых рейсов нет — летают через Стамбул и европейский хаб; российские карты не работают, а в Исландии почти всё оплачивают картой.',
        US: 'Гражданам США виза не нужна: 90 дней в любые 180, а виза для удалённой работы даёт до 180 дней. Запуск ETIAS отложен, раньше 2027 года его не ждут.',
        CA: 'Канадцам виза не нужна; удобные рейсы Icelandair из Торонто и Ванкувера с бесплатным стоповером. Виза для удалённой работы доступна и им.',
        GB: 'Британцы ограничены 90 днями в 180 по общему шенгенскому счёту. Паспорт должен быть моложе 10 лет на дату въезда и действовать ещё 3 месяца после выезда.',
        IN: 'Гражданам Индии нужна шенгенская виза через представительство, которое обслуживает Исландию. По правилу «каскада» после двух правильно использованных виз за три года дают многократную визу на 2 года, затем на 5 лет.',
        UA: 'Граждане Украины с биометрическим паспортом въезжают без визы на 90 дней в 180.',
      },
    },
    en: {
      summary:
        'Iceland is not in the EU but is in Schengen: EU and EEA citizens enter with an ID card, while US, Canadian, UK, Australian, Japanese, Brazilian, Ukrainian and other visa-exempt travellers stay up to 90 days in any 180, counted across the whole Schengen area. Russian, Indian, Chinese, Turkish and many other passport holders need a €90 Schengen visa, usually issued by another Schengen country’s embassy.',
      apply:
        'Iceland has few consulates of its own, so almost everywhere its visas are issued by other Schengen countries’ embassies — most often Denmark’s or Norway’s; the immigration directorate (utl.is) lists who represents Iceland where you live. The fee is €90 plus the visa centre’s charge, and decisions usually take 15 days. If your trip includes other Schengen countries, apply where you spend the most nights.',
      visaRun:
        'Visa runs don’t work: the 90 days are counted across the whole Schengen area over any rolling 180-day window. A flight to the Faroe Islands, Greenland or London only pauses the clock; since April 2026 the EES records every entry and exit.',
      transit:
        'Keflavík is a transatlantic hub: connecting between two non-Schengen flights (say, from the US to London or Dublin) needs no visa for most nationalities, as long as you stay airside. Citizens on the common airport-transit-visa list (Afghanistan, Bangladesh, Iran, Nigeria, Pakistan and others) need one, unless they hold a valid US, Canadian, Japanese or EEA visa or residence permit. If you connect onto a Schengen flight, you enter in Keflavík.',
      nomad:
        'The long-term visa for remote workers gives 90 to 180 days in Iceland to people employed by a foreign company or self-employed abroad: income of at least ISK 1,000,000 a month (ISK 1,300,000 with a spouse or children), health insurance and a fee of ISK 12,200. It’s only for non-EEA citizens who don’t need a Schengen visa, and it doesn’t lead to residence.',
      hacks: [
        'Icelandair lets you stop over in Iceland for up to 7 days on transatlantic tickets at no extra airfare — handy if you’re flying between North America and Europe anyway.',
        'For passengers from North America, Keflavík is the first Schengen point of entry: passport control and EES enrolment happen here, and onward flights into Europe are then internal.',
        'Flights from Reykjavík to the Faroe Islands and Greenland leave Schengen: days there don’t use up your 90/180, but they have their own visa rules, and a single-entry Schengen visa is spent after such a flight.',
      ],
      pitfalls: [
        'The remote-work visa can’t be extended or turned into residence, and only travellers who are visa-exempt for Schengen can apply — it’s closed to Russian, Indian and Chinese citizens.',
        'Visa insurance must cover the whole stay with at least €30,000, and for Iceland it’s wise to pick a policy that includes search and rescue: a glacier evacuation is very expensive.',
        'Don’t apply at a “convenient” embassy: each country has a designated mission issuing visas for Iceland, and any other consulate will simply turn your application away.',
      ],
      waivers: [
        'A valid residence permit or long-stay D visa from any Schengen country lets you visit Iceland visa-free for up to 90 days in any 180. Irish and Cypriot permits don’t count.',
        'A Schengen visa issued by another member state is valid in Iceland within its dates and number of days. Make the first trip to the issuing country.',
      ],
      passports: {
        RU: 'Iceland suspended its embassy in Moscow in 2023, so visas go through another Schengen country’s mission — check the current arrangement; since November 2025 visas are usually single-entry. There are no direct flights — routes go via Istanbul and a European hub; Russian bank cards don’t work, and almost everything in Iceland is paid by card.',
        US: 'US citizens need no visa: 90 days in any 180, and the remote-work visa gives up to 180 days. ETIAS has been delayed and isn’t expected before 2027.',
        CA: 'Canadians need no visa; Icelandair flies from Toronto and Vancouver with the free stopover. The remote-work visa is open to them too.',
        GB: 'UK citizens are limited to 90 days in 180 across all of Schengen. Your passport must be under 10 years old on the day you enter and valid for 3 months after you leave.',
        IN: 'Indian citizens need a Schengen visa from the mission that represents Iceland. Under the EU “cascade”, two visas used correctly within three years earn a 2-year multiple-entry visa, then a 5-year one.',
        UA: 'Ukrainians with a biometric passport enter visa-free for 90 days in 180.',
      },
    },
    es: {
      summary:
        'Islandia no está en la UE, pero sí en Schengen: los ciudadanos de la UE y el EEE entran con el DNI, y los de EE. UU., Canadá, Reino Unido, Australia, Japón, Brasil, Ucrania y otros países exentos se quedan hasta 90 días en cualquier periodo de 180, contados en todo Schengen. Quienes tienen pasaporte ruso, indio, chino, turco y muchos otros necesitan un visado Schengen de 90 €, que normalmente expide la embajada de otro país Schengen.',
      apply:
        'Islandia tiene pocos consulados propios, así que casi en todas partes sus visados los expiden embajadas de otros países Schengen, sobre todo Dinamarca o Noruega; la dirección de inmigración (utl.is) indica quién la representa donde vives. La tasa es de 90 € más la del centro de visados y la resolución suele tardar 15 días. Si tu viaje incluye otros países Schengen, solicita donde pases más noches.',
      visaRun:
        'Los visa runs no sirven: los 90 días se cuentan en todo Schengen dentro de una ventana móvil de 180. Un vuelo a las Feroe, Groenlandia o Londres solo pausa el contador; desde abril de 2026 el EES registra cada entrada y salida.',
      transit:
        'Keflavík es un hub transatlántico: conectar entre dos vuelos fuera de Schengen (por ejemplo, de EE. UU. a Londres o Dublín) no exige visado a la mayoría si no sale de la zona de tránsito. Los ciudadanos de la lista común de visado de tránsito aeroportuario (Afganistán, Bangladés, Irán, Nigeria, Pakistán y otros) sí lo necesitan, salvo que tengan visado o residencia vigente de EE. UU., Canadá, Japón o un país del EEE. Si conectas con un vuelo Schengen, entras ya en Keflavík.',
      nomad:
        'El visado de larga duración para teletrabajadores da de 90 a 180 días en Islandia a quien trabaja para una empresa extranjera o como autónomo en el extranjero: ingresos de al menos 1 000 000 ISK al mes (1 300 000 ISK con pareja o hijos), seguro médico y una tasa de 12 200 ISK. Solo es para ciudadanos de fuera del EEE que no necesitan visado Schengen y no lleva a la residencia.',
      hacks: [
        'Icelandair permite hacer escala en Islandia hasta 7 días en los billetes transatlánticos sin coste extra de tarifa: muy práctico si ya vuelas entre Norteamérica y Europa.',
        'Para quien llega desde Norteamérica, Keflavík es el primer punto de entrada en Schengen: el control de pasaportes y el registro en el EES se hacen aquí, y los vuelos siguientes a Europa ya son internos.',
        'Los vuelos de Reikiavik a las Feroe y Groenlandia salen de Schengen: los días allí no gastan tus 90/180, pero tienen sus propias normas de visado, y un visado Schengen de una entrada queda usado tras ese vuelo.',
      ],
      pitfalls: [
        'El visado de teletrabajo no se puede prorrogar ni convertir en residencia, y solo pueden pedirlo quienes están exentos de visado Schengen: no está abierto a ciudadanos rusos, indios o chinos.',
        'El seguro del visado debe cubrir toda la estancia con al menos 30 000 €, y en Islandia conviene una póliza que incluya búsqueda y rescate: una evacuación desde un glaciar sale carísima.',
        'No acudas a una embajada «cómoda»: cada país tiene una representación designada para los visados de Islandia, y cualquier otro consulado rechazará tu solicitud.',
      ],
      waivers: [
        'Un permiso de residencia o un visado nacional D vigente de cualquier país Schengen te permite visitar Islandia sin visado hasta 90 días en 180. Los permisos de Irlanda y Chipre no valen.',
        'Un visado Schengen expedido por otro Estado miembro vale en Islandia dentro de sus fechas y su número de días. Haz el primer viaje al país emisor.',
      ],
      passports: {
        RU: 'Islandia suspendió su embajada en Moscú en 2023, así que los visados se tramitan en la representación de otro país Schengen; consulta el procedimiento vigente. Desde noviembre de 2025 suelen ser de una sola entrada. No hay vuelos directos —se vuela vía Estambul y un hub europeo—, las tarjetas rusas no funcionan y en Islandia casi todo se paga con tarjeta.',
        US: 'Los estadounidenses no necesitan visado: 90 días en 180, y el visado de teletrabajo da hasta 180 días. El ETIAS se ha retrasado y no se espera antes de 2027.',
        CA: 'Los canadienses no necesitan visado; Icelandair vuela desde Toronto y Vancouver con la escala gratuita. También pueden pedir el visado de teletrabajo.',
        GB: 'Los británicos tienen un límite de 90 días en 180 en todo Schengen. El pasaporte debe tener menos de 10 años el día de entrada y seguir vigente 3 meses después de salir.',
        IN: 'Los ciudadanos indios necesitan visado Schengen de la representación que cubre Islandia. Con la «cascada» europea, dos visados bien usados en tres años dan uno de entradas múltiples de 2 años y luego de 5.',
        UA: 'Los ucranianos con pasaporte biométrico entran sin visado durante 90 días en 180.',
      },
    },
    de: {
      summary:
        'Island ist nicht in der EU, aber im Schengen-Raum: Bürger der EU und des EWR reisen mit dem Ausweis ein, Reisende aus den USA, Kanada, Großbritannien, Australien, Japan, Brasilien, der Ukraine und anderen visumfreien Ländern bleiben bis zu 90 Tage in jedem 180-Tage-Zeitraum, gezählt im ganzen Schengen-Raum. Mit russischem, indischem, chinesischem, türkischem und vielen anderen Pässen brauchst du ein Schengen-Visum für 90 €, das meist die Botschaft eines anderen Schengen-Staats ausstellt.',
      apply:
        'Island hat kaum eigene Konsulate, daher stellen fast überall Botschaften anderer Schengen-Staaten seine Visa aus – meist Dänemark oder Norwegen; die Einwanderungsbehörde (utl.is) nennt die zuständige Vertretung an deinem Wohnort. Die Gebühr beträgt 90 € plus Gebühr des Visazentrums, die Entscheidung dauert meist 15 Tage. Umfasst deine Reise weitere Schengen-Länder, beantrage dort, wo du die meisten Nächte verbringst.',
      visaRun:
        'Visa-Runs funktionieren nicht: Die 90 Tage gelten für den ganzen Schengen-Raum in einem rollierenden 180-Tage-Fenster. Ein Flug auf die Färöer, nach Grönland oder London hält den Zähler nur an; seit April 2026 erfasst das EES jede Ein- und Ausreise.',
      transit:
        'Keflavík ist ein Transatlantik-Drehkreuz: Beim Umsteigen zwischen zwei Flügen außerhalb von Schengen (etwa aus den USA nach London oder Dublin) brauchen die meisten kein Visum, solange sie im Transitbereich bleiben. Staatsangehörige auf der gemeinsamen Liste für Flughafentransitvisa (Afghanistan, Bangladesch, Iran, Nigeria, Pakistan u. a.) benötigen eines – außer mit gültigem Visum oder Aufenthaltstitel der USA, Kanadas, Japans oder eines EWR-Staats. Geht es mit einem Schengen-Flug weiter, reist du schon in Keflavík ein.',
      nomad:
        'Das Langzeitvisum für Remote-Arbeitende gibt 90 bis 180 Tage in Island, wenn du für ein ausländisches Unternehmen oder selbstständig im Ausland arbeitest: Einkommen von mindestens 1.000.000 ISK im Monat (1.300.000 ISK mit Partner oder Kindern), Krankenversicherung und eine Gebühr von 12.200 ISK. Es steht nur Nicht-EWR-Bürgern offen, die kein Schengen-Visum brauchen, und führt nicht zu einem Aufenthaltstitel.',
      hacks: [
        'Icelandair erlaubt auf Transatlantik-Tickets einen Stopover in Island von bis zu 7 Tagen ohne Aufpreis – praktisch, wenn du ohnehin zwischen Nordamerika und Europa fliegst.',
        'Für Passagiere aus Nordamerika ist Keflavík der erste Schengen-Einreiseort: Passkontrolle und EES-Registrierung finden hier statt, die Anschlussflüge nach Europa sind dann intern.',
        'Flüge von Reykjavík auf die Färöer und nach Grönland verlassen den Schengen-Raum: Die Tage dort verbrauchen deine 90/180 nicht, es gelten aber eigene Visaregeln, und ein Schengen-Visum für eine Einreise ist nach so einem Flug verbraucht.',
      ],
      pitfalls: [
        'Das Remote-Work-Visum lässt sich weder verlängern noch in einen Aufenthaltstitel umwandeln, und beantragen dürfen es nur Menschen, die für Schengen visumfrei sind – russischen, indischen und chinesischen Staatsangehörigen steht es nicht offen.',
        'Die Visumsversicherung muss den ganzen Aufenthalt mit mindestens 30.000 € abdecken, und für Island lohnt eine Police mit Such- und Rettungskosten: Eine Bergung vom Gletscher ist sehr teuer.',
        'Geh nicht zu einer „bequemen“ Botschaft: Für jedes Land ist eine bestimmte Vertretung für Island-Visa zuständig, jedes andere Konsulat weist deinen Antrag ab.',
      ],
      waivers: [
        'Mit einem gültigen Aufenthaltstitel oder nationalen D-Visum eines Schengen-Staats reist du bis zu 90 Tage in 180 visumfrei nach Island. Irische und zyprische Titel zählen nicht.',
        'Ein Schengen-Visum eines anderen Mitgliedstaats gilt innerhalb seiner Daten und Tage auch in Island. Die erste Reise sollte ins ausstellende Land gehen.',
      ],
      passports: {
        RU: 'Island hat seine Botschaft in Moskau 2023 ausgesetzt, Visa laufen daher über die Vertretung eines anderen Schengen-Staats – informiere dich über die aktuelle Regelung; seit November 2025 gibt es meist nur Visa für eine Einreise. Direktflüge gibt es nicht – man fliegt über Istanbul und ein europäisches Drehkreuz; russische Bankkarten funktionieren nicht, und in Island zahlt man fast alles mit Karte.',
        US: 'US-Bürger brauchen kein Visum: 90 Tage in 180, mit dem Remote-Work-Visum bis zu 180 Tage. ETIAS verzögert sich und wird nicht vor 2027 erwartet.',
        CA: 'Kanadier brauchen kein Visum; Icelandair fliegt ab Toronto und Vancouver mit kostenlosem Stopover. Auch das Remote-Work-Visum steht ihnen offen.',
        GB: 'Briten dürfen 90 Tage in 180 im ganzen Schengen-Raum bleiben. Der Pass muss am Einreisetag jünger als 10 Jahre sein und noch 3 Monate nach der Ausreise gelten.',
        IN: 'Indische Staatsangehörige brauchen ein Schengen-Visum von der Vertretung, die Island vertritt. Nach der EU-„Kaskade“ gibt es nach zwei korrekt genutzten Visa in drei Jahren ein Mehrfachvisum für 2 Jahre, danach für 5 Jahre.',
        UA: 'Ukrainer mit biometrischem Pass reisen 90 Tage in 180 visumfrei ein.',
      },
    },
    fr: {
      summary:
        'L’Islande n’est pas dans l’UE mais fait partie de Schengen : les citoyens de l’UE et de l’EEE entrent avec leur carte d’identité, et les voyageurs américains, canadiens, britanniques, australiens, japonais, brésiliens, ukrainiens et d’autres pays exemptés restent jusqu’à 90 jours sur 180, comptés dans tout l’espace Schengen. Les titulaires d’un passeport russe, indien, chinois, turc et de nombreux autres ont besoin d’un visa Schengen à 90 €, généralement délivré par l’ambassade d’un autre pays Schengen.',
      apply:
        'L’Islande a peu de consulats, si bien que presque partout ses visas sont délivrés par les ambassades d’autres pays Schengen — le plus souvent le Danemark ou la Norvège ; la direction de l’immigration (utl.is) indique qui la représente là où vous vivez. Les frais sont de 90 € plus ceux du centre de visas, et la décision prend en général 15 jours. Si votre voyage comprend d’autres pays Schengen, déposez là où vous passez le plus de nuits.',
      visaRun:
        'Les visa runs ne fonctionnent pas : les 90 jours se comptent sur tout l’espace Schengen dans une fenêtre glissante de 180. Un vol vers les Féroé, le Groenland ou Londres ne fait que suspendre le compteur ; depuis avril 2026, l’EES enregistre chaque entrée et sortie.',
      transit:
        'Keflavík est un hub transatlantique : une correspondance entre deux vols hors Schengen (par exemple des États-Unis vers Londres ou Dublin) ne demande pas de visa à la plupart des nationalités, tant que vous restez en zone de transit. Les ressortissants de la liste commune du visa de transit aéroportuaire (Afghanistan, Bangladesh, Iran, Nigeria, Pakistan, etc.) en ont besoin, sauf s’ils détiennent un visa ou un titre de séjour valide des États-Unis, du Canada, du Japon ou d’un pays de l’EEE. Si vous enchaînez sur un vol Schengen, vous entrez dès Keflavík.',
      nomad:
        'Le visa long séjour pour télétravailleurs donne de 90 à 180 jours en Islande à ceux qui travaillent pour une entreprise étrangère ou à leur compte à l’étranger : revenus d’au moins 1 000 000 ISK par mois (1 300 000 ISK avec conjoint ou enfants), assurance santé et frais de 12 200 ISK. Il est réservé aux citoyens hors EEE exemptés de visa Schengen et ne mène pas à un titre de séjour.',
      hacks: [
        'Icelandair permet une escale en Islande jusqu’à 7 jours sur les billets transatlantiques sans supplément tarifaire — pratique si vous volez de toute façon entre l’Amérique du Nord et l’Europe.',
        'Pour les passagers venant d’Amérique du Nord, Keflavík est le premier point d’entrée dans Schengen : contrôle des passeports et enregistrement EES ont lieu ici, et les vols suivants vers l’Europe sont ensuite intérieurs.',
        'Les vols de Reykjavík vers les Féroé et le Groenland sortent de Schengen : les jours passés là-bas n’entament pas vos 90/180, mais ces territoires ont leurs propres règles de visa, et un visa Schengen à entrée unique est consommé après un tel vol.',
      ],
      pitfalls: [
        'Le visa de télétravail ne peut être ni prolongé ni transformé en titre de séjour, et seuls les voyageurs exemptés de visa Schengen peuvent le demander — il est fermé aux ressortissants russes, indiens et chinois.',
        'L’assurance du visa doit couvrir tout le séjour avec au moins 30 000 €, et pour l’Islande mieux vaut un contrat incluant recherche et secours : une évacuation depuis un glacier coûte très cher.',
        'N’allez pas dans une ambassade « pratique » : chaque pays a une représentation désignée pour les visas islandais, et tout autre consulat refusera votre dossier.',
      ],
      waivers: [
        'Un titre de séjour ou un visa long séjour D valide d’un pays Schengen vous permet de venir en Islande sans visa jusqu’à 90 jours sur 180. Les titres irlandais et chypriotes ne comptent pas.',
        'Un visa Schengen délivré par un autre État membre est valable en Islande dans la limite de ses dates et de ses jours. Effectuez le premier voyage dans le pays émetteur.',
      ],
      passports: {
        RU: 'L’Islande a suspendu son ambassade à Moscou en 2023 : les visas passent par la représentation d’un autre pays Schengen — renseignez-vous sur la procédure en vigueur ; depuis novembre 2025, ils sont en général à entrée unique. Pas de vols directs : on passe par Istanbul et un hub européen ; les cartes bancaires russes ne fonctionnent pas, et en Islande presque tout se paie par carte.',
        US: 'Les Américains n’ont pas besoin de visa : 90 jours sur 180, et le visa de télétravail donne jusqu’à 180 jours. L’ETIAS a été repoussé et n’est pas attendu avant 2027.',
        CA: 'Les Canadiens n’ont pas besoin de visa ; Icelandair dessert Toronto et Vancouver avec l’escale gratuite. Le visa de télétravail leur est aussi ouvert.',
        GB: 'Les Britanniques sont limités à 90 jours sur 180 dans tout Schengen. Le passeport doit avoir moins de 10 ans le jour de l’entrée et rester valable 3 mois après la sortie.',
        IN: 'Les citoyens indiens ont besoin d’un visa Schengen auprès de la représentation qui couvre l’Islande. Selon la « cascade » européenne, deux visas bien utilisés en trois ans ouvrent droit à un visa à entrées multiples de 2 ans, puis de 5 ans.',
        UA: 'Les Ukrainiens munis d’un passeport biométrique entrent sans visa pour 90 jours sur 180.',
      },
    },
    it: {
      summary:
        'L’Islanda non è nell’UE ma fa parte di Schengen: i cittadini di UE e SEE entrano con la carta d’identità, mentre chi ha passaporto di Stati Uniti, Canada, Regno Unito, Australia, Giappone, Brasile, Ucraina e altri paesi esenti resta fino a 90 giorni su 180, contati in tutta l’area Schengen. Chi ha passaporto russo, indiano, cinese, turco e di molti altri paesi ha bisogno di un visto Schengen da 90 €, rilasciato di solito dall’ambasciata di un altro paese Schengen.',
      apply:
        'L’Islanda ha pochi consolati propri, quindi quasi ovunque i suoi visti li rilasciano le ambasciate di altri paesi Schengen, per lo più Danimarca o Norvegia; la direzione immigrazione (utl.is) indica chi la rappresenta dove vivi. La tassa è di 90 € più quella del centro visti e la decisione arriva di solito in 15 giorni. Se il viaggio comprende altri paesi Schengen, fai domanda dove passi più notti.',
      visaRun:
        'I visa run non funzionano: i 90 giorni si contano su tutta l’area Schengen in una finestra mobile di 180. Un volo alle Fær Øer, in Groenlandia o a Londra mette solo in pausa il contatore; dall’aprile 2026 l’EES registra ogni ingresso e uscita.',
      transit:
        'Keflavík è un hub transatlantico: un cambio tra due voli fuori Schengen (per esempio dagli Stati Uniti a Londra o Dublino) non richiede visto alla maggior parte delle nazionalità, se si resta nella zona di transito. I cittadini della lista comune del visto di transito aeroportuale (Afghanistan, Bangladesh, Iran, Nigeria, Pakistan e altri) devono averlo, a meno di avere un visto o un permesso valido di Stati Uniti, Canada, Giappone o di un paese SEE. Se prosegui con un volo Schengen, entri già a Keflavík.',
      nomad:
        'Il visto di lunga durata per lavoratori da remoto dà da 90 a 180 giorni in Islanda a chi lavora per un’azienda straniera o in proprio all’estero: reddito di almeno 1.000.000 ISK al mese (1.300.000 ISK con coniuge o figli), assicurazione sanitaria e una tassa di 12.200 ISK. È riservato ai cittadini extra SEE esenti dal visto Schengen e non porta alla residenza.',
      hacks: [
        'Icelandair consente sui biglietti transatlantici uno stopover in Islanda fino a 7 giorni senza sovrapprezzo: comodo se voli comunque tra Nord America ed Europa.',
        'Per chi arriva dal Nord America, Keflavík è il primo punto d’ingresso in Schengen: controllo passaporti e registrazione EES avvengono qui, e i voli successivi verso l’Europa sono poi interni.',
        'I voli da Reykjavík per le Fær Øer e la Groenlandia escono da Schengen: i giorni lì non consumano i tuoi 90/180, ma valgono regole di visto proprie, e un visto Schengen a ingresso singolo è usato dopo un volo del genere.',
      ],
      pitfalls: [
        'Il visto per lavoro da remoto non si può prorogare né trasformare in residenza, e possono chiederlo solo i cittadini esenti dal visto Schengen: è chiuso a russi, indiani e cinesi.',
        'L’assicurazione del visto deve coprire tutto il soggiorno con almeno 30.000 €, e per l’Islanda conviene una polizza con ricerca e soccorso: un’evacuazione da un ghiacciaio costa moltissimo.',
        'Non andare in un’ambasciata «comoda»: per ogni paese c’è una rappresentanza designata per i visti islandesi, e qualsiasi altro consolato respingerà la domanda.',
      ],
      waivers: [
        'Un permesso di soggiorno o un visto nazionale D valido di qualsiasi paese Schengen ti permette di visitare l’Islanda senza visto fino a 90 giorni su 180. I permessi irlandesi e ciprioti non valgono.',
        'Un visto Schengen rilasciato da un altro Stato membro vale anche in Islanda entro le sue date e i suoi giorni. Fai il primo viaggio nel paese che l’ha rilasciato.',
      ],
      passports: {
        RU: 'L’Islanda ha sospeso la sua ambasciata a Mosca nel 2023, quindi i visti passano dalla rappresentanza di un altro paese Schengen: verifica la procedura attuale; da novembre 2025 sono di solito a ingresso singolo. Non ci sono voli diretti — si passa da Istanbul e da un hub europeo —, le carte russe non funzionano e in Islanda quasi tutto si paga con carta.',
        US: 'Gli statunitensi non hanno bisogno di visto: 90 giorni su 180, e il visto per lavoro da remoto dà fino a 180 giorni. L’ETIAS è stato rinviato e non è atteso prima del 2027.',
        CA: 'I canadesi non hanno bisogno di visto; Icelandair vola da Toronto e Vancouver con lo stopover gratuito. Anche a loro è aperto il visto per lavoro da remoto.',
        GB: 'I britannici hanno il limite di 90 giorni su 180 in tutto Schengen. Il passaporto deve avere meno di 10 anni il giorno dell’ingresso e valere ancora 3 mesi dopo l’uscita.',
        IN: 'I cittadini indiani hanno bisogno del visto Schengen dalla rappresentanza che copre l’Islanda. Con la «cascata» europea, due visti usati correttamente in tre anni danno un visto multiplo di 2 anni e poi di 5.',
        UA: 'Gli ucraini con passaporto biometrico entrano senza visto per 90 giorni su 180.',
      },
    },
  },
};

export default guide;
