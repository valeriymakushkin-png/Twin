import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'NO',
  checked: '2026-10',
  overrides: {
    // Since 29 May 2024 Norway issues no tourist visas to Russians and refuses Russian tourists at the external border, whichever state issued the visa
    RU: { status: 'banned' },
  },
  fees: { visa: { kind: 'fixed', amount: 90, currency: 'EUR' } },
  stay: { visa: 90 },
  links: { immigration: 'https://www.udi.no' },
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
        'Норвегия не в ЕС, но входит в Шенген: граждане ЕС и ЕЭЗ въезжают по ID-карте, а граждане США, Великобритании, Канады, Австралии, Японии, Бразилии, Украины и других безвизовых стран — до 90 дней в любые 180 по общему шенгенскому счёту. Индийцам, китайцам, туркам и многим другим нужна шенгенская виза; россиянам туристические визы не выдают с мая 2024 года.',
      apply:
        'Сначала заполните заявление и оплатите сбор (эквивалент 90 €) на портале UDI, затем запишитесь в визовый центр — почти везде это VFS Global — и сдайте отпечатки и документы. Решение — обычно 15 дней, летом дольше. Если Норвегия — часть круиза или тура по Скандинавии, подавайте туда, где больше ночей.',
      visaRun:
        'Визаран не работает: 90 дней считаются по всему Шенгену в скользящем окне 180 дней, а соседние Швеция и Финляндия — тоже Шенген. Даже поездка на Шпицберген лишь ставит счётчик на паузу; с апреля 2026 года EES фиксирует каждый въезд и выезд.',
      transit:
        'Пересадка в Осло (Гардермуэн) между двумя рейсами за пределы Шенгена большинству не требует визы, если не выходить из транзитной зоны. Гражданам из общего списка (Афганистан, Бангладеш, Иран, Нигерия, Пакистан и др.) нужна транзитная виза — кроме владельцев действующей визы или ВНЖ США, Канады, Японии или страны ЕЭЗ.',
      hacks: [
        'Шпицберген (Свальбард) вне Шенгена, и виза для самого архипелага не нужна никому, а жить и работать там можно без разрешения, если вы себя обеспечиваете. Но лететь приходится через материковую Норвегию, поэтому тем, кому нужна виза, нужна многократная шенгенская — на рейсе в Лонгйир проходят выездной контроль.',
        'Дни на Шпицбергене не входят в шенгенские 90/180: после выезда из зоны счётчик стоит, пока вы на архипелаге.',
        'Отдельной визы для цифровых кочевников нет; разрешение для самозанятых или «независимых подрядчиков» дают только при контрактах с норвежскими заказчиками.',
      ],
      pitfalls: [
        'Норвегия не в таможенном союзе ЕС: беспошлинные нормы на алкоголь и табак очень строгие (около литра крепкого и полутора литров вина на человека), а таможня проверяет даже на паромах из Дании и Германии.',
        'Работа на норвежских заказчиков в безвизовые дни или по туристической визе запрещена, а штрафы за это высокие.',
        'На паромах и рейсах внутри Шенгена — например, из Дании и Германии — Норвегия периодически вводит пограничные проверки: держите паспорт при себе.',
      ],
      waivers: [
        'Действующий ВНЖ или долгосрочная виза D любой шенгенской страны позволяют ездить в Норвегию без визы до 90 дней в любые 180. Ирландский и кипрский ВНЖ не подходят.',
        'Шенгенская виза другой страны действует и в Норвегии в пределах своих дат и числа дней. Исключение — россияне: туристов с такой визой не впускают через внешнюю границу.',
      ],
      passports: {
        RU: 'С 29 мая 2024 года Норвегия не выдаёт россиянам туристические визы и не пропускает туристов через внешнюю границу Шенгена даже с визой другой страны. Исключения — визиты к близким родственникам, работа и учёба. Пункт Стурскуг — единственный сухопутный переход с Россией. Прямых рейсов нет, российские карты не работают.',
        US: 'Гражданам США виза не нужна: 90 дней в любые 180 по общему шенгенскому счёту. ETIAS будет действовать и для Норвегии, но его запуск отложен — раньше 2027 года его не ждут.',
        GB: 'Британцы ограничены 90 днями в 180. Паспорт должен быть моложе 10 лет на дату въезда и действовать ещё 3 месяца после выезда; на Шпицберген по-прежнему можно без визы.',
        IN: 'Гражданам Индии нужна шенгенская виза через портал UDI и VFS. Для поездки на Шпицберген берите многократную визу.',
        CN: 'Гражданам Китая нужна шенгенская виза; летом, в сезон белых ночей и фьордов, записи в VFS разбирают за недели.',
        UA: 'Граждане Украины с биометрическим паспортом въезжают без визы на 90 дней в 180; правила коллективной защиты в Норвегии в 2025 году ужесточили — проверяйте их на udi.no.',
      },
    },
    en: {
      summary:
        'Norway is not in the EU but is in Schengen: EU and EEA citizens enter with an ID card, while US, UK, Canadian, Australian, Japanese, Brazilian, Ukrainian and other visa-exempt travellers stay up to 90 days in any 180, counted across all of Schengen. Indian, Chinese, Turkish and many other passport holders need a Schengen visa; Russians haven’t been issued tourist visas since May 2024.',
      apply:
        'First fill in the application and pay the fee (the equivalent of €90) on the UDI portal, then book at the visa centre — almost everywhere VFS Global — to hand in fingerprints and documents. Decisions usually take 15 days, longer in summer. If Norway is part of a cruise or a Scandinavian tour, apply where you spend the most nights.',
      visaRun:
        'Visa runs don’t work: the 90 days are counted across the whole Schengen area over any rolling 180-day window, and neighbouring Sweden and Finland are Schengen too. Even a trip to Svalbard only pauses the clock; since April 2026 the EES records every entry and exit.',
      transit:
        'Changing planes at Oslo Gardermoen between two non-Schengen flights needs no visa for most nationalities, as long as you stay airside. Citizens on the common airport-transit-visa list (Afghanistan, Bangladesh, Iran, Nigeria, Pakistan and others) need one, unless they hold a valid US, Canadian, Japanese or EEA visa or residence permit.',
      hacks: [
        'Svalbard is outside Schengen and nobody needs a visa for the archipelago itself; you can even live and work there without a permit if you support yourself. But you have to fly via mainland Norway, so visa holders need a multiple-entry Schengen visa — flights to Longyearbyen go through exit control.',
        'Days on Svalbard don’t count towards Schengen’s 90/180: once you’ve left the zone, the clock stops while you’re on the archipelago.',
        'There’s no digital-nomad visa; self-employed or “independent contractor” permits are only granted with contracts from Norwegian clients.',
      ],
      pitfalls: [
        'Norway isn’t in the EU customs union: duty-free allowances for alcohol and tobacco are very strict (about a litre of spirits and a litre and a half of wine per person), and customs checks even on ferries from Denmark and Germany.',
        'Working for Norwegian clients on visa-free days or a tourist visa is forbidden, and the fines are steep.',
        'On ferries and flights within Schengen — from Denmark and Germany, for example — Norway periodically brings back border checks: keep your passport on you.',
      ],
      waivers: [
        'A valid residence permit or long-stay D visa from any Schengen country lets you visit Norway visa-free for up to 90 days in any 180. Irish and Cypriot permits don’t count.',
        'A Schengen visa issued by another member state is valid in Norway within its dates and number of days. The exception is Russians: tourists holding one are turned away at the external border.',
      ],
      passports: {
        RU: 'Since 29 May 2024 Norway has issued no tourist visas to Russians and turns tourists away at the external Schengen border even with another country’s visa. Exceptions cover visits to close relatives, work and study. Storskog is the only land crossing with Russia. There are no direct flights, and Russian bank cards don’t work.',
        US: 'US citizens need no visa: 90 days in any 180 across all of Schengen. ETIAS will apply to Norway too, but it has been delayed and isn’t expected before 2027.',
        GB: 'UK citizens are limited to 90 days in 180. Your passport must be under 10 years old on the day you enter and valid for 3 months after you leave; Svalbard remains visa-free.',
        IN: 'Indian citizens need a Schengen visa via the UDI portal and VFS. For a trip to Svalbard, get a multiple-entry visa.',
        CN: 'Chinese citizens need a Schengen visa; in summer — midnight sun and fjord season — VFS slots go weeks in advance.',
        UA: 'Ukrainians with a biometric passport enter visa-free for 90 days in 180; Norway tightened its collective protection rules in 2025 — check them on udi.no.',
      },
    },
    es: {
      summary:
        'Noruega no está en la UE, pero sí en Schengen: los ciudadanos de la UE y el EEE entran con el DNI, y los de EE. UU., Reino Unido, Canadá, Australia, Japón, Brasil, Ucrania y otros países exentos se quedan hasta 90 días en cualquier periodo de 180, contados en todo Schengen. Quienes tienen pasaporte indio, chino, turco y muchos otros necesitan visado Schengen; a los rusos no se les expiden visados turísticos desde mayo de 2024.',
      apply:
        'Primero rellena la solicitud y paga la tasa (el equivalente a 90 €) en el portal de la UDI; después pide cita en el centro de visados —casi siempre VFS Global— para dejar huellas y documentos. La resolución suele tardar 15 días, más en verano. Si Noruega forma parte de un crucero o de un viaje por Escandinavia, solicita donde pases más noches.',
      visaRun:
        'Los visa runs no sirven: los 90 días se cuentan en todo Schengen dentro de una ventana móvil de 180, y Suecia y Finlandia, los vecinos, también son Schengen. Incluso un viaje a Svalbard solo pausa el contador; desde abril de 2026 el EES registra cada entrada y salida.',
      transit:
        'Para cambiar de avión en Oslo-Gardermoen entre dos vuelos fuera de Schengen la mayoría no necesita visado, si no sale de la zona de tránsito. Los ciudadanos de la lista común de visado de tránsito aeroportuario (Afganistán, Bangladés, Irán, Nigeria, Pakistán y otros) sí lo necesitan, salvo que tengan visado o residencia vigente de EE. UU., Canadá, Japón o un país del EEE.',
      hacks: [
        'Svalbard está fuera de Schengen y nadie necesita visado para el archipiélago en sí; incluso puedes vivir y trabajar allí sin permiso si te mantienes por tu cuenta. Pero hay que volar a través de Noruega continental, así que quien necesita visado debe llevar uno Schengen de entradas múltiples: los vuelos a Longyearbyen pasan control de salida.',
        'Los días en Svalbard no cuentan para los 90/180 de Schengen: al salir de la zona, el contador se detiene mientras estás en el archipiélago.',
        'No hay visado de nómada digital; los permisos de autónomo o de «contratista independiente» solo se conceden con contratos de clientes noruegos.',
      ],
      pitfalls: [
        'Noruega no está en la unión aduanera de la UE: las franquicias de alcohol y tabaco son muy estrictas (alrededor de un litro de destilados y litro y medio de vino por persona), y la aduana revisa incluso en los ferris desde Dinamarca y Alemania.',
        'Trabajar para clientes noruegos en tus días sin visado o con visado turístico está prohibido, y las multas son altas.',
        'En ferris y vuelos dentro de Schengen —desde Dinamarca y Alemania, por ejemplo— Noruega reintroduce controles fronterizos de vez en cuando: lleva el pasaporte encima.',
      ],
      waivers: [
        'Un permiso de residencia o un visado nacional D vigente de cualquier país Schengen te permite visitar Noruega sin visado hasta 90 días en 180. Los permisos de Irlanda y Chipre no valen.',
        'Un visado Schengen expedido por otro Estado miembro vale en Noruega dentro de sus fechas y su número de días. La excepción son los rusos: a los turistas con ese visado se les rechaza en la frontera exterior.',
      ],
      passports: {
        RU: 'Desde el 29 de mayo de 2024 Noruega no expide visados turísticos a ciudadanos rusos y rechaza a los turistas en la frontera exterior de Schengen aunque tengan visado de otro país. Las excepciones cubren visitas a familiares cercanos, trabajo y estudios. Storskog es el único paso terrestre con Rusia. No hay vuelos directos y las tarjetas rusas no funcionan.',
        US: 'Los estadounidenses no necesitan visado: 90 días en 180 en todo Schengen. El ETIAS también se aplicará en Noruega, pero se ha retrasado y no se espera antes de 2027.',
        GB: 'Los británicos tienen un límite de 90 días en 180. El pasaporte debe tener menos de 10 años el día de entrada y seguir vigente 3 meses después de salir; Svalbard sigue sin exigir visado.',
        IN: 'Los ciudadanos indios necesitan visado Schengen a través del portal de la UDI y VFS. Para ir a Svalbard, pide uno de entradas múltiples.',
        CN: 'Los ciudadanos chinos necesitan visado Schengen; en verano, temporada de sol de medianoche y fiordos, las citas de VFS se agotan con semanas de antelación.',
        UA: 'Los ucranianos con pasaporte biométrico entran sin visado durante 90 días en 180; Noruega endureció en 2025 las normas de protección colectiva: consúltalas en udi.no.',
      },
    },
    de: {
      summary:
        'Norwegen ist nicht in der EU, aber im Schengen-Raum: Bürger der EU und des EWR reisen mit dem Ausweis ein, Reisende aus den USA, Großbritannien, Kanada, Australien, Japan, Brasilien, der Ukraine und anderen visumfreien Ländern bleiben bis zu 90 Tage in jedem 180-Tage-Zeitraum, gezählt im ganzen Schengen-Raum. Mit indischem, chinesischem, türkischem und vielen anderen Pässen brauchst du ein Schengen-Visum; Russen erhalten seit Mai 2024 keine Touristenvisa mehr.',
      apply:
        'Fülle zuerst den Antrag aus und bezahle die Gebühr (umgerechnet 90 €) im UDI-Portal, dann buchst du einen Termin beim Visazentrum – fast überall VFS Global – für Fingerabdrücke und Unterlagen. Die Entscheidung dauert meist 15 Tage, im Sommer länger. Ist Norwegen Teil einer Kreuzfahrt oder Skandinavien-Reise, beantrage dort, wo du die meisten Nächte verbringst.',
      visaRun:
        'Visa-Runs funktionieren nicht: Die 90 Tage gelten für den ganzen Schengen-Raum in einem rollierenden 180-Tage-Fenster, und die Nachbarn Schweden und Finnland sind ebenfalls Schengen. Selbst ein Abstecher nach Spitzbergen hält den Zähler nur an; seit April 2026 erfasst das EES jede Ein- und Ausreise.',
      transit:
        'Beim Umsteigen in Oslo-Gardermoen zwischen zwei Flügen außerhalb von Schengen brauchen die meisten kein Visum, solange sie im Transitbereich bleiben. Staatsangehörige auf der gemeinsamen Liste für Flughafentransitvisa (Afghanistan, Bangladesch, Iran, Nigeria, Pakistan u. a.) benötigen eines – außer mit gültigem Visum oder Aufenthaltstitel der USA, Kanadas, Japans oder eines EWR-Staats.',
      hacks: [
        'Spitzbergen (Svalbard) liegt außerhalb von Schengen, für die Inselgruppe selbst braucht niemand ein Visum, und wer sich selbst versorgt, darf dort sogar ohne Erlaubnis leben und arbeiten. Geflogen wird aber über das norwegische Festland – wer ein Visum braucht, benötigt also ein Schengen-Visum für mehrfache Einreise; Flüge nach Longyearbyen gehen durch die Ausreisekontrolle.',
        'Tage auf Spitzbergen zählen nicht zu den Schengen-90/180: Nach der Ausreise aus dem Raum steht der Zähler still, solange du auf der Inselgruppe bist.',
        'Ein Digital-Nomad-Visum gibt es nicht; Erlaubnisse für Selbstständige oder „unabhängige Auftragnehmer“ gibt es nur mit Verträgen norwegischer Kunden.',
      ],
      pitfalls: [
        'Norwegen gehört nicht zur EU-Zollunion: Die Freimengen für Alkohol und Tabak sind sehr streng (etwa ein Liter Spirituosen und anderthalb Liter Wein pro Person), und der Zoll kontrolliert sogar auf Fähren aus Dänemark und Deutschland.',
        'Arbeit für norwegische Kunden in visumfreien Tagen oder mit Touristenvisum ist verboten, und die Strafen sind hoch.',
        'Auf Fähren und Flügen innerhalb von Schengen – etwa aus Dänemark und Deutschland – führt Norwegen immer wieder Grenzkontrollen ein: Hab deinen Pass dabei.',
      ],
      waivers: [
        'Mit einem gültigen Aufenthaltstitel oder nationalen D-Visum eines Schengen-Staats reist du bis zu 90 Tage in 180 visumfrei nach Norwegen. Irische und zyprische Titel zählen nicht.',
        'Ein Schengen-Visum eines anderen Mitgliedstaats gilt innerhalb seiner Daten und Tage auch in Norwegen. Ausnahme sind Russen: Touristen mit einem solchen Visum werden an der Außengrenze abgewiesen.',
      ],
      passports: {
        RU: 'Seit dem 29. Mai 2024 stellt Norwegen russischen Staatsangehörigen keine Touristenvisa aus und weist Touristen an der Schengen-Außengrenze auch mit dem Visum eines anderen Landes ab. Ausnahmen gelten für Besuche enger Verwandter, Arbeit und Studium. Storskog ist der einzige Landübergang nach Russland. Direktflüge gibt es nicht, russische Bankkarten funktionieren nicht.',
        US: 'US-Bürger brauchen kein Visum: 90 Tage in 180 im ganzen Schengen-Raum. ETIAS wird auch für Norwegen gelten, verzögert sich aber und wird nicht vor 2027 erwartet.',
        GB: 'Briten dürfen 90 Tage in 180 bleiben. Der Pass muss am Einreisetag jünger als 10 Jahre sein und noch 3 Monate nach der Ausreise gelten; Spitzbergen bleibt visumfrei.',
        IN: 'Indische Staatsangehörige brauchen ein Schengen-Visum über das UDI-Portal und VFS. Für einen Abstecher nach Spitzbergen nimm ein Visum für mehrfache Einreise.',
        CN: 'Chinesische Staatsangehörige brauchen ein Schengen-Visum; im Sommer, der Saison von Mitternachtssonne und Fjorden, sind VFS-Termine wochenlang im Voraus weg.',
        UA: 'Ukrainer mit biometrischem Pass reisen 90 Tage in 180 visumfrei ein; Norwegen hat 2025 die Regeln für kollektiven Schutz verschärft – prüfe sie auf udi.no.',
      },
    },
    fr: {
      summary:
        'La Norvège n’est pas dans l’UE mais fait partie de Schengen : les citoyens de l’UE et de l’EEE entrent avec leur carte d’identité, et les voyageurs américains, britanniques, canadiens, australiens, japonais, brésiliens, ukrainiens et d’autres pays exemptés restent jusqu’à 90 jours sur 180, comptés dans tout l’espace Schengen. Les titulaires d’un passeport indien, chinois, turc et de nombreux autres ont besoin d’un visa Schengen ; les Russes n’obtiennent plus de visas touristiques depuis mai 2024.',
      apply:
        'Remplissez d’abord la demande et payez les frais (l’équivalent de 90 €) sur le portail de l’UDI, puis prenez rendez-vous au centre de visas — presque partout VFS Global — pour les empreintes et le dossier. La décision prend en général 15 jours, davantage en été. Si la Norvège fait partie d’une croisière ou d’un circuit scandinave, déposez là où vous passez le plus de nuits.',
      visaRun:
        'Les visa runs ne fonctionnent pas : les 90 jours se comptent sur tout l’espace Schengen dans une fenêtre glissante de 180, et les voisins suédois et finlandais sont aussi dans Schengen. Même un séjour au Svalbard ne fait que suspendre le compteur ; depuis avril 2026, l’EES enregistre chaque entrée et sortie.',
      transit:
        'Une correspondance à Oslo-Gardermoen entre deux vols hors Schengen ne demande pas de visa à la plupart des nationalités, tant que vous restez en zone de transit. Les ressortissants de la liste commune du visa de transit aéroportuaire (Afghanistan, Bangladesh, Iran, Nigeria, Pakistan, etc.) en ont besoin, sauf s’ils détiennent un visa ou un titre de séjour valide des États-Unis, du Canada, du Japon ou d’un pays de l’EEE.',
      hacks: [
        'Le Svalbard est hors Schengen et personne n’a besoin de visa pour l’archipel lui-même ; on peut même y vivre et y travailler sans permis si l’on subvient à ses besoins. Mais il faut passer par la Norvège continentale : les voyageurs soumis au visa ont donc besoin d’un visa Schengen à entrées multiples, car les vols vers Longyearbyen passent un contrôle de sortie.',
        'Les jours passés au Svalbard ne comptent pas dans les 90/180 Schengen : une fois sorti de la zone, le compteur s’arrête tant que vous êtes sur l’archipel.',
        'Il n’existe pas de visa nomade numérique ; les titres d’indépendant ou de « prestataire indépendant » ne sont accordés qu’avec des contrats de clients norvégiens.',
      ],
      pitfalls: [
        'La Norvège n’est pas dans l’union douanière de l’UE : les franchises d’alcool et de tabac sont très strictes (environ un litre d’alcool fort et un litre et demi de vin par personne), et la douane contrôle même sur les ferries venant du Danemark et d’Allemagne.',
        'Travailler pour des clients norvégiens pendant vos jours sans visa ou avec un visa touristique est interdit, et les amendes sont lourdes.',
        'Sur les ferries et vols internes à Schengen — depuis le Danemark ou l’Allemagne, par exemple — la Norvège rétablit régulièrement des contrôles aux frontières : gardez votre passeport sur vous.',
      ],
      waivers: [
        'Un titre de séjour ou un visa long séjour D valide d’un pays Schengen vous permet de venir en Norvège sans visa jusqu’à 90 jours sur 180. Les titres irlandais et chypriotes ne comptent pas.',
        'Un visa Schengen délivré par un autre État membre est valable en Norvège dans la limite de ses dates et de ses jours. Exception pour les Russes : les touristes munis d’un tel visa sont refoulés à la frontière extérieure.',
      ],
      passports: {
        RU: 'Depuis le 29 mai 2024, la Norvège ne délivre plus de visas touristiques aux ressortissants russes et refoule les touristes à la frontière extérieure de Schengen, même avec le visa d’un autre pays. Les exceptions couvrent les visites à la proche famille, le travail et les études. Storskog est le seul poste terrestre avec la Russie. Pas de vols directs, et les cartes bancaires russes ne fonctionnent pas.',
        US: 'Les Américains n’ont pas besoin de visa : 90 jours sur 180 dans tout Schengen. L’ETIAS s’appliquera aussi à la Norvège, mais il a été repoussé et n’est pas attendu avant 2027.',
        GB: 'Les Britanniques sont limités à 90 jours sur 180. Le passeport doit avoir moins de 10 ans le jour de l’entrée et rester valable 3 mois après la sortie ; le Svalbard reste sans visa.',
        IN: 'Les citoyens indiens ont besoin d’un visa Schengen via le portail de l’UDI et VFS. Pour aller au Svalbard, demandez un visa à entrées multiples.',
        CN: 'Les citoyens chinois ont besoin d’un visa Schengen ; en été, saison du soleil de minuit et des fjords, les créneaux VFS partent des semaines à l’avance.',
        UA: 'Les Ukrainiens munis d’un passeport biométrique entrent sans visa pour 90 jours sur 180 ; la Norvège a durci en 2025 les règles de protection collective — vérifiez-les sur udi.no.',
      },
    },
    it: {
      summary:
        'La Norvegia non è nell’UE ma fa parte di Schengen: i cittadini di UE e SEE entrano con la carta d’identità, mentre chi ha passaporto di Stati Uniti, Regno Unito, Canada, Australia, Giappone, Brasile, Ucraina e altri paesi esenti resta fino a 90 giorni su 180, contati in tutta l’area Schengen. Chi ha passaporto indiano, cinese, turco e di molti altri paesi ha bisogno del visto Schengen; ai russi non vengono rilasciati visti turistici da maggio 2024.',
      apply:
        'Prima compila la domanda e paga la tassa (l’equivalente di 90 €) sul portale UDI, poi prenota al centro visti — quasi ovunque VFS Global — per impronte e documenti. La decisione arriva di solito in 15 giorni, d’estate di più. Se la Norvegia fa parte di una crociera o di un giro in Scandinavia, fai domanda dove passi più notti.',
      visaRun:
        'I visa run non funzionano: i 90 giorni si contano su tutta l’area Schengen in una finestra mobile di 180, e anche le vicine Svezia e Finlandia sono Schengen. Perfino un viaggio alle Svalbard mette solo in pausa il contatore; dall’aprile 2026 l’EES registra ogni ingresso e uscita.',
      transit:
        'Per cambiare aereo a Oslo-Gardermoen tra due voli fuori Schengen la maggior parte delle nazionalità non ha bisogno di visto, se resta nella zona di transito. I cittadini della lista comune del visto di transito aeroportuale (Afghanistan, Bangladesh, Iran, Nigeria, Pakistan e altri) devono averlo, a meno di avere un visto o un permesso valido di Stati Uniti, Canada, Giappone o di un paese SEE.',
      hacks: [
        'Le Svalbard sono fuori Schengen e nessuno ha bisogno di visto per l’arcipelago in sé; ci si può persino vivere e lavorare senza permesso, se ci si mantiene da soli. Ma si vola passando dalla Norvegia continentale, quindi chi ha bisogno del visto deve avere uno Schengen a ingressi multipli: i voli per Longyearbyen passano dal controllo in uscita.',
        'I giorni alle Svalbard non contano nei 90/180 Schengen: uscito dall’area, il contatore resta fermo finché sei nell’arcipelago.',
        'Non esiste un visto per nomadi digitali; i permessi per autonomi o «contraenti indipendenti» si ottengono solo con contratti di clienti norvegesi.',
      ],
      pitfalls: [
        'La Norvegia non fa parte dell’unione doganale UE: le franchigie per alcol e tabacco sono severissime (circa un litro di superalcolici e un litro e mezzo di vino a persona), e la dogana controlla anche sui traghetti da Danimarca e Germania.',
        'Lavorare per clienti norvegesi nei giorni senza visto o con un visto turistico è vietato, e le multe sono salate.',
        'Su traghetti e voli interni a Schengen — per esempio da Danimarca e Germania — la Norvegia reintroduce periodicamente i controlli di frontiera: tieni il passaporto con te.',
      ],
      waivers: [
        'Un permesso di soggiorno o un visto nazionale D valido di qualsiasi paese Schengen ti permette di visitare la Norvegia senza visto fino a 90 giorni su 180. I permessi irlandesi e ciprioti non valgono.',
        'Un visto Schengen rilasciato da un altro Stato membro vale anche in Norvegia entro le sue date e i suoi giorni. Fanno eccezione i russi: i turisti con un visto del genere vengono respinti alla frontiera esterna.',
      ],
      passports: {
        RU: 'Dal 29 maggio 2024 la Norvegia non rilascia visti turistici ai cittadini russi e respinge i turisti alla frontiera esterna di Schengen anche con il visto di un altro paese. Le eccezioni riguardano visite a parenti stretti, lavoro e studio. Storskog è l’unico valico terrestre con la Russia. Non ci sono voli diretti e le carte russe non funzionano.',
        US: 'Gli statunitensi non hanno bisogno di visto: 90 giorni su 180 in tutto Schengen. L’ETIAS varrà anche per la Norvegia, ma è stato rinviato e non è atteso prima del 2027.',
        GB: 'I britannici hanno il limite di 90 giorni su 180. Il passaporto deve avere meno di 10 anni il giorno dell’ingresso e valere ancora 3 mesi dopo l’uscita; le Svalbard restano senza visto.',
        IN: 'I cittadini indiani hanno bisogno del visto Schengen tramite il portale UDI e VFS. Per andare alle Svalbard chiedi un visto a ingressi multipli.',
        CN: 'I cittadini cinesi hanno bisogno del visto Schengen; d’estate, stagione del sole di mezzanotte e dei fiordi, gli appuntamenti VFS finiscono settimane prima.',
        UA: 'Gli ucraini con passaporto biometrico entrano senza visto per 90 giorni su 180; nel 2025 la Norvegia ha inasprito le regole sulla protezione collettiva: verificale su udi.no.',
      },
    },
  },
};

export default guide;
