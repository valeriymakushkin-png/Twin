import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'NL',
  checked: '2026-10',
  fees: { visa: { kind: 'fixed', amount: 90, currency: 'EUR' } },
  stay: { visa: 90 },
  links: { immigration: 'https://www.netherlandsworldwide.nl' },
  docs: ['insurance', 'returnTicket', 'booking', 'finance'],
  passportMonths: 3,
  rule: { days: 90, window: 180 },
  visaRun: 'no',
  transit: { hours: 24 },
  waivers: [
    { holds: ['resEU'], status: 'free', days: 90 },
    { holds: ['visaSchengen'], status: 'free', days: 90 },
  ],
  hackScope: [['US', 'JP'], ['regime:required'], null, null],
  pitfallScope: [null, null, ['regime:required']],
  text: {
    ru: {
      summary:
        'Нидерланды входят в Шенген: граждане ЕС, ЕЭЗ и Швейцарии въезжают по ID-карте, а граждане США, Великобритании, Канады, Австралии, Японии, Кореи, Бразилии, Украины и других безвизовых стран — до 90 дней в любые 180. Россиянам, индийцам, китайцам, туркам, суринамцам и многим другим нужна шенгенская виза за 90 €; инструкции — на netherlandsworldwide.nl.',
      apply:
        'На netherlandsworldwide.nl есть пошаговый мастер: он подскажет, где подавать, — почти везде это визовые центры VFS Global. Сбор — 90 € плюс сервисный, решение — обычно 15 дней. Если вы останавливаетесь у друзей или родственников, они заверяют в своём муниципалитете форму гарантии и проживания — это заменяет бронь отеля и доказательство средств.',
      visaRun:
        'Визаран не работает: 90 дней считаются по всему Шенгену в скользящем окне 180 дней. Поездка в Лондон или на Арубу счётчик не обнуляет — дни там просто не идут; с апреля 2026 года EES фиксирует каждый въезд и выезд.',
      transit:
        'Пересадка в Схипхоле между двумя рейсами за пределы Шенгена большинству не требует визы, если не выходить из транзитной зоны. Гражданам из общего списка ЕС (Афганистан, Бангладеш, Гана, Иран, Нигерия, Пакистан и др.) и нескольких стран, добавленных Нидерландами, нужна транзитная виза — кроме владельцев действующей визы или ВНЖ США, Канады, Японии или страны ЕЭЗ.',
      hacks: [
        'Граждане США могут получить ВНЖ для самозанятых по голландско-американскому договору о дружбе (DAFT): достаточно вложить 4500 € в собственный бизнес в Нидерландах. Аналогичный путь есть у граждан Японии.',
        'Многократная шенгенская виза открывает безвизовый въезд на Арубу, Кюрасао, Синт-Мартен и Карибские Нидерланды — они вне Шенгена, и дни там не расходуют ваши 90/180.',
        'Выпускники вузов из топ-200 мировых рейтингов и голландских университетов могут получить «год ориентации» (zoekjaar) — ВНЖ на год для поиска работы без ограничений на занятость.',
        'Регистрация в муниципалитете (BRP) нужна, только если вы проводите в Нидерландах больше четырёх месяцев в течение полугода — туристам и коротким гостям её делать не нужно.',
      ],
      pitfalls: [
        'Королевская жандармерия (KMar) на границе может спросить о средствах — ориентир около 55 € на человека в день, плюс жильё и обратный билет.',
        'С конца 2024 года Нидерланды проводят выборочные проверки на границах с Бельгией и Германией: в поезде и автобусе держите паспорт при себе.',
        'Подавайте в Нидерланды, только если это основная страна поездки. Дешёвый рейс в Амстердам при туре по Франции и Италии — не повод: подавать нужно туда, где больше ночей.',
      ],
      waivers: [
        'Действующий ВНЖ или долгосрочная виза D любой шенгенской страны позволяют ездить в Нидерланды без визы до 90 дней в любые 180. Ирландский и кипрский ВНЖ не подходят.',
        'Шенгенская виза другой страны действует и в Нидерландах в пределах своих дат и числа дней. Первую поездку лучше совершить в страну, выдавшую визу.',
      ],
      passports: {
        RU: 'Нидерландское представительство в России принимает ограниченный круг заявлений, а с ноября 2025 года визы, как правило, однократные. Перед планированием проверьте актуальные правила на netherlandsworldwide.nl или подавайте в стране, где у вас есть ВНЖ. Прямых рейсов нет, российские карты не работают.',
        US: 'Гражданам США виза не нужна (90 дней в 180), а для долгого пребывания есть DAFT — ВНЖ для самозанятых с капиталом от 4500 €. Запуск ETIAS (20 €) отложен, раньше 2027 года его не ждут.',
        JP: 'Граждане Японии въезжают без визы, а по голландско-японскому торговому договору могут получить ВНЖ для самозанятых на льготных условиях; есть и программа working holiday.',
        GB: 'Британцы ограничены 90 днями в 180. Паспорт должен быть моложе 10 лет на дату въезда и действовать ещё 3 месяца после выезда; на «Евростаре» шенгенский контроль (его ведёт французская полиция) проходят ещё в Лондоне.',
        TR: 'Гражданам Турции нужна шенгенская виза через VFS, но по соглашению об ассоциации ЕС–Турция турецкие предприниматели получают ВНЖ в Нидерландах на более мягких условиях.',
        IN: 'Гражданам Индии нужна шенгенская виза через VFS. По правилу «каскада» после двух правильно использованных виз за три года дают многократную визу на 2 года, затем на 5 лет.',
      },
    },
    en: {
      summary:
        'The Netherlands is in Schengen: EU, EEA and Swiss citizens enter with an ID card, while US, UK, Canadian, Australian, Japanese, Korean, Brazilian, Ukrainian and other visa-exempt travellers stay up to 90 days in any 180. Russian, Indian, Chinese, Turkish, Surinamese and many other passport holders need a €90 Schengen visa; instructions are on netherlandsworldwide.nl.',
      apply:
        'Netherlandsworldwide.nl has a step-by-step checker that tells you where to apply — almost everywhere it’s a VFS Global visa centre. The fee is €90 plus the service charge, and decisions usually take 15 days. If you’re staying with friends or family, they get a sponsorship and accommodation form certified at their municipality — it replaces a hotel booking and proof of funds.',
      visaRun:
        'Visa runs don’t work: the 90 days are counted across the whole Schengen area over any rolling 180-day window. A trip to London or Aruba doesn’t reset the clock — the days there simply don’t count; since April 2026 the EES records every entry and exit.',
      transit:
        'Changing planes at Schiphol between two non-Schengen flights needs no visa for most nationalities, as long as you stay airside. Citizens on the EU airport-transit-visa list (Afghanistan, Bangladesh, Ghana, Iran, Nigeria, Pakistan and others) and a few nationalities the Netherlands adds need an airport transit visa, unless they hold a valid US, Canadian, Japanese or EEA visa or residence permit.',
      hacks: [
        'US citizens can get a self-employed residence permit under the Dutch-American Friendship Treaty (DAFT) by investing €4,500 in their own Dutch business. Japanese citizens have a similar route.',
        'A multiple-entry Schengen visa also gets you visa-free into Aruba, Curaçao, Sint Maarten and the Caribbean Netherlands — they’re outside Schengen, so days there don’t use up your 90/180.',
        'Graduates of top-200 world-ranked universities and of Dutch universities can get an orientation year (zoekjaar) — a one-year permit to look for work with no limits on employment.',
        'Registering with the municipality (BRP) is only required if you spend more than four months in the Netherlands within six months — tourists and short-term guests don’t need to.',
      ],
      pitfalls: [
        'The Royal Marechaussee (KMar) at the border may ask about funds — around €55 per person per day as a guide, plus accommodation and a return ticket.',
        'Since late 2024 the Netherlands has run spot checks at its Belgian and German borders: keep your passport on you on trains and buses.',
        'Apply to the Netherlands only if it’s your main destination. A cheap flight to Amsterdam for a tour of France and Italy isn’t a reason — apply where you spend the most nights.',
      ],
      waivers: [
        'A valid residence permit or long-stay D visa from any Schengen country lets you visit the Netherlands visa-free for up to 90 days in any 180. Irish and Cypriot permits don’t count.',
        'A Schengen visa issued by another member state is valid in the Netherlands within its dates and number of days. Make the first trip to the issuing country.',
      ],
      passports: {
        RU: 'The Dutch mission in Russia accepts only a limited range of applications, and since November 2025 visas are usually single-entry. Check the current rules on netherlandsworldwide.nl before planning, or apply in a country where you hold residence. There are no direct flights, and Russian bank cards don’t work.',
        US: 'US citizens need no visa (90 days in 180), and for longer stays there’s DAFT — a self-employed permit with €4,500 of capital. ETIAS (€20) has been delayed and isn’t expected before 2027.',
        JP: 'Japanese citizens enter visa-free and, under the Dutch-Japanese trade treaty, can get a self-employed permit on favourable terms; there’s also a working holiday scheme.',
        GB: 'UK citizens are limited to 90 days in 180. Your passport must be under 10 years old on the day you enter and valid for 3 months after you leave; on the Eurostar, the Schengen entry check (run by French police) happens in London.',
        TR: 'Turkish citizens need a Schengen visa via VFS, but under the EU–Turkey Association Agreement Turkish entrepreneurs get a Dutch residence permit on easier terms.',
        IN: 'Indian citizens need a Schengen visa via VFS. Under the EU “cascade”, two visas used correctly within three years earn a 2-year multiple-entry visa, then a 5-year one.',
      },
    },
    es: {
      summary:
        'Los Países Bajos forman parte de Schengen: los ciudadanos de la UE, el EEE y Suiza entran con el DNI, y los de EE. UU., Reino Unido, Canadá, Australia, Japón, Corea, Brasil, Ucrania y otros países exentos se quedan hasta 90 días en cualquier periodo de 180. Quienes tienen pasaporte ruso, indio, chino, turco, surinamés y muchos otros necesitan un visado Schengen de 90 €; las instrucciones están en netherlandsworldwide.nl.',
      apply:
        'En netherlandsworldwide.nl hay un asistente paso a paso que te dice dónde solicitarlo; casi siempre es un centro de VFS Global. La tasa es de 90 € más el servicio y la resolución suele tardar 15 días. Si te alojas con amigos o familia, ellos certifican en su ayuntamiento un formulario de garantía y alojamiento, que sustituye a la reserva de hotel y a la prueba de medios.',
      visaRun:
        'Los visa runs no sirven: los 90 días se cuentan en todo Schengen dentro de una ventana móvil de 180. Un viaje a Londres o a Aruba no reinicia el contador; simplemente esos días no cuentan, y desde abril de 2026 el EES registra cada entrada y salida.',
      transit:
        'Para cambiar de avión en Schiphol entre dos vuelos fuera de Schengen la mayoría no necesita visado, si no sale de la zona de tránsito. Los ciudadanos de la lista europea de visado de tránsito aeroportuario (Afganistán, Bangladés, Ghana, Irán, Nigeria, Pakistán y otros) y de algunos países que añaden los Países Bajos sí lo necesitan, salvo que tengan visado o residencia vigente de EE. UU., Canadá, Japón o un país del EEE.',
      hacks: [
        'Los ciudadanos estadounidenses pueden obtener una residencia como autónomos gracias al Tratado de Amistad neerlandés-estadounidense (DAFT) invirtiendo 4500 € en su propio negocio en el país. Los japoneses tienen una vía parecida.',
        'Un visado Schengen de entradas múltiples también te permite entrar sin visado en Aruba, Curazao, Sint Maarten y el Caribe neerlandés; están fuera de Schengen, así que los días allí no gastan tus 90/180.',
        'Los titulados de universidades del top 200 mundial y de universidades neerlandesas pueden pedir el año de orientación (zoekjaar): un permiso de un año para buscar trabajo sin restricciones laborales.',
        'Inscribirse en el padrón municipal (BRP) solo es obligatorio si pasas más de cuatro meses en los Países Bajos en un periodo de seis; los turistas y visitantes cortos no tienen que hacerlo.',
      ],
      pitfalls: [
        'La Real Marechaussee (KMar) puede preguntarte en la frontera por tus medios: como referencia, unos 55 € por persona y día, además de alojamiento y billete de vuelta.',
        'Desde finales de 2024 los Países Bajos hacen controles aleatorios en las fronteras con Bélgica y Alemania: lleva el pasaporte encima en trenes y autobuses.',
        'Solicita en los Países Bajos solo si son tu destino principal. Un vuelo barato a Ámsterdam para recorrer Francia e Italia no es motivo: solicita donde pases más noches.',
      ],
      waivers: [
        'Un permiso de residencia o un visado nacional D vigente de cualquier país Schengen te permite visitar los Países Bajos sin visado hasta 90 días en 180. Los permisos de Irlanda y Chipre no valen.',
        'Un visado Schengen expedido por otro Estado miembro vale en los Países Bajos dentro de sus fechas y su número de días. Haz el primer viaje al país emisor.',
      ],
      passports: {
        RU: 'La representación neerlandesa en Rusia solo acepta un abanico limitado de solicitudes y, desde noviembre de 2025, los visados suelen ser de una sola entrada. Consulta las reglas vigentes en netherlandsworldwide.nl antes de planificar o solicítalo en un país donde tengas residencia. No hay vuelos directos y las tarjetas rusas no funcionan.',
        US: 'Los estadounidenses no necesitan visado (90 días en 180) y, para estancias largas, tienen el DAFT: residencia como autónomos con 4500 € de capital. El ETIAS (20 €) se ha retrasado y no se espera antes de 2027.',
        JP: 'Los ciudadanos japoneses entran sin visado y, gracias al tratado comercial neerlandés-japonés, pueden obtener una residencia de autónomo en condiciones favorables; también hay programa de vacaciones y trabajo.',
        GB: 'Los británicos tienen un límite de 90 días en 180. El pasaporte debe tener menos de 10 años el día de entrada y seguir vigente 3 meses después de salir; en el Eurostar, el control Schengen (a cargo de la policía francesa) se hace ya en Londres.',
        TR: 'Los ciudadanos turcos necesitan visado Schengen a través de VFS, pero gracias al Acuerdo de Asociación UE–Turquía los emprendedores turcos obtienen la residencia neerlandesa con requisitos más suaves.',
        IN: 'Los ciudadanos indios necesitan visado Schengen a través de VFS. Con la «cascada» europea, dos visados bien usados en tres años dan uno de entradas múltiples de 2 años y luego de 5.',
      },
    },
    de: {
      summary:
        'Die Niederlande gehören zu Schengen: Bürger der EU, des EWR und der Schweiz reisen mit dem Personalausweis ein, Reisende aus den USA, Großbritannien, Kanada, Australien, Japan, Korea, Brasilien, der Ukraine und anderen visumfreien Ländern bleiben bis zu 90 Tage in jedem 180-Tage-Zeitraum. Mit russischem, indischem, chinesischem, türkischem, surinamischem und vielen anderen Pässen brauchst du ein Schengen-Visum für 90 €; Anleitungen gibt es auf netherlandsworldwide.nl.',
      apply:
        'Auf netherlandsworldwide.nl führt dich ein Schritt-für-Schritt-Check zur zuständigen Stelle – fast überall ein VFS-Global-Visazentrum. Die Gebühr beträgt 90 € plus Servicegebühr, die Entscheidung dauert meist 15 Tage. Wohnst du bei Freunden oder Familie, lassen sie bei ihrer Gemeinde ein Garantie- und Unterkunftsformular beglaubigen – das ersetzt Hotelbuchung und Finanznachweis.',
      visaRun:
        'Visa-Runs funktionieren nicht: Die 90 Tage gelten für den ganzen Schengen-Raum in einem rollierenden 180-Tage-Fenster. Ein Abstecher nach London oder Aruba setzt den Zähler nicht zurück – die Tage dort zählen nur nicht mit; seit April 2026 erfasst das EES jede Ein- und Ausreise.',
      transit:
        'Beim Umsteigen in Schiphol zwischen zwei Flügen außerhalb von Schengen brauchen die meisten kein Visum, solange sie im Transitbereich bleiben. Staatsangehörige auf der EU-Liste für Flughafentransitvisa (Afghanistan, Bangladesch, Ghana, Iran, Nigeria, Pakistan u. a.) und einiger von den Niederlanden ergänzter Länder benötigen eines – außer mit gültigem Visum oder Aufenthaltstitel der USA, Kanadas, Japans oder eines EWR-Staats.',
      hacks: [
        'US-Bürger erhalten über den Niederländisch-Amerikanischen Freundschaftsvertrag (DAFT) eine Aufenthaltserlaubnis als Selbstständige, wenn sie 4.500 € in ihr eigenes niederländisches Unternehmen stecken. Für Japaner gibt es einen ähnlichen Weg.',
        'Ein Schengen-Visum für mehrfache Einreise öffnet auch die visumfreie Einreise nach Aruba, Curaçao, Sint Maarten und in die Karibischen Niederlande – sie liegen außerhalb von Schengen, die Tage dort verbrauchen deine 90/180 nicht.',
        'Absolventen von Top-200-Universitäten weltweit und von niederländischen Hochschulen können das Orientierungsjahr (zoekjaar) bekommen – eine Jahreserlaubnis zur Jobsuche ohne Beschränkungen bei der Arbeit.',
        'Die Anmeldung bei der Gemeinde (BRP) ist erst Pflicht, wenn du innerhalb von sechs Monaten mehr als vier Monate in den Niederlanden verbringst – Touristen und Kurzbesucher müssen das nicht.',
      ],
      pitfalls: [
        'Die Königliche Marechaussee (KMar) kann an der Grenze nach deinen Mitteln fragen – als Richtwert rund 55 € pro Person und Tag, dazu Unterkunft und Rückflugticket.',
        'Seit Ende 2024 kontrollieren die Niederlande stichprobenartig an den Grenzen zu Belgien und Deutschland: Hab den Pass in Zug und Bus dabei.',
        'Beantrage in den Niederlanden nur, wenn sie dein Hauptziel sind. Ein billiger Flug nach Amsterdam für eine Tour durch Frankreich und Italien ist kein Grund – zuständig ist das Land mit den meisten Nächten.',
      ],
      waivers: [
        'Mit einem gültigen Aufenthaltstitel oder nationalen D-Visum eines Schengen-Staats reist du bis zu 90 Tage in 180 visumfrei in die Niederlande. Irische und zyprische Titel zählen nicht.',
        'Ein Schengen-Visum eines anderen Mitgliedstaats gilt innerhalb seiner Daten und Tage auch in den Niederlanden. Die erste Reise sollte ins ausstellende Land gehen.',
      ],
      passports: {
        RU: 'Die niederländische Vertretung in Russland nimmt nur einen begrenzten Kreis von Anträgen an, und seit November 2025 gibt es meist nur Visa für eine Einreise. Prüfe vor der Planung die aktuellen Regeln auf netherlandsworldwide.nl oder beantrage in einem Land, in dem du einen Aufenthaltstitel hast. Direktflüge gibt es nicht, russische Bankkarten funktionieren nicht.',
        US: 'US-Bürger brauchen kein Visum (90 Tage in 180), und für längere Aufenthalte gibt es DAFT – eine Selbstständigen-Erlaubnis mit 4.500 € Kapital. ETIAS (20 €) verzögert sich und wird nicht vor 2027 erwartet.',
        JP: 'Japaner reisen visumfrei ein und können über den niederländisch-japanischen Handelsvertrag eine Selbstständigen-Erlaubnis zu günstigen Bedingungen bekommen; außerdem gibt es ein Working-Holiday-Programm.',
        GB: 'Briten dürfen 90 Tage in 180 bleiben. Der Pass muss am Einreisetag jünger als 10 Jahre sein und noch 3 Monate nach der Ausreise gelten; beim Eurostar findet die Schengen-Einreisekontrolle (durch die französische Polizei) schon in London statt.',
        TR: 'Türkische Staatsangehörige brauchen ein Schengen-Visum über VFS, doch dank des Assoziierungsabkommens EU–Türkei bekommen türkische Unternehmer eine niederländische Aufenthaltserlaubnis zu leichteren Bedingungen.',
        IN: 'Indische Staatsangehörige brauchen ein Schengen-Visum über VFS. Nach der EU-„Kaskade“ gibt es nach zwei korrekt genutzten Visa in drei Jahren ein Mehrfachvisum für 2 Jahre, danach für 5 Jahre.',
      },
    },
    fr: {
      summary:
        'Les Pays-Bas font partie de Schengen : les citoyens de l’UE, de l’EEE et de la Suisse entrent avec leur carte d’identité, et les voyageurs américains, britanniques, canadiens, australiens, japonais, coréens, brésiliens, ukrainiens et d’autres pays exemptés restent jusqu’à 90 jours sur 180. Les titulaires d’un passeport russe, indien, chinois, turc, surinamais et de nombreux autres ont besoin d’un visa Schengen à 90 € ; les instructions sont sur netherlandsworldwide.nl.',
      apply:
        'Netherlandsworldwide.nl propose un outil pas à pas qui vous indique où déposer — presque partout un centre VFS Global. Les frais sont de 90 € plus le service, et la décision prend en général 15 jours. Si vous logez chez des amis ou de la famille, ils font certifier par leur mairie un formulaire de prise en charge et d’hébergement, qui remplace la réservation d’hôtel et la preuve de ressources.',
      visaRun:
        'Les visa runs ne fonctionnent pas : les 90 jours se comptent sur tout l’espace Schengen dans une fenêtre glissante de 180. Un saut à Londres ou à Aruba ne remet pas le compteur à zéro — ces jours-là ne comptent simplement pas ; depuis avril 2026, l’EES enregistre chaque entrée et sortie.',
      transit:
        'Une correspondance à Schiphol entre deux vols hors Schengen ne demande pas de visa à la plupart des nationalités, tant que vous restez en zone de transit. Les ressortissants de la liste européenne du visa de transit aéroportuaire (Afghanistan, Bangladesh, Ghana, Iran, Nigeria, Pakistan, etc.) et de quelques pays ajoutés par les Pays-Bas en ont besoin, sauf s’ils détiennent un visa ou un titre de séjour valide des États-Unis, du Canada, du Japon ou d’un pays de l’EEE.',
      hacks: [
        'Les citoyens américains peuvent obtenir un titre de séjour d’indépendant grâce au traité d’amitié néerlando-américain (DAFT) en investissant 4 500 € dans leur propre entreprise aux Pays-Bas. Les Japonais disposent d’une voie similaire.',
        'Un visa Schengen à entrées multiples ouvre aussi l’entrée sans visa à Aruba, Curaçao, Sint Maarten et aux Pays-Bas caribéens — situés hors Schengen, les jours passés là-bas n’entament pas vos 90/180.',
        'Les diplômés des 200 meilleures universités mondiales et des universités néerlandaises peuvent obtenir l’année d’orientation (zoekjaar) : un titre d’un an pour chercher un emploi, sans restriction de travail.',
        'L’inscription à la commune (BRP) n’est obligatoire que si vous passez plus de quatre mois aux Pays-Bas sur six — touristes et visiteurs de courte durée n’ont pas à la faire.',
      ],
      pitfalls: [
        'La Maréchaussée royale (KMar) peut vous interroger à la frontière sur vos ressources — environ 55 € par personne et par jour à titre indicatif, plus l’hébergement et le billet retour.',
        'Depuis fin 2024, les Pays-Bas effectuent des contrôles ponctuels aux frontières belge et allemande : gardez votre passeport sur vous dans les trains et les bus.',
        'Ne déposez aux Pays-Bas que s’ils sont votre destination principale. Un vol pas cher pour Amsterdam pour un circuit en France et en Italie n’est pas une raison : déposez là où vous passez le plus de nuits.',
      ],
      waivers: [
        'Un titre de séjour ou un visa long séjour D valide d’un pays Schengen vous permet de venir aux Pays-Bas sans visa jusqu’à 90 jours sur 180. Les titres irlandais et chypriotes ne comptent pas.',
        'Un visa Schengen délivré par un autre État membre est valable aux Pays-Bas dans la limite de ses dates et de ses jours. Effectuez le premier voyage dans le pays émetteur.',
      ],
      passports: {
        RU: 'La représentation néerlandaise en Russie n’accepte qu’un éventail limité de demandes et, depuis novembre 2025, les visas sont en général à entrée unique. Vérifiez les règles en vigueur sur netherlandsworldwide.nl avant de planifier, ou déposez dans un pays où vous résidez légalement. Pas de vols directs, et les cartes bancaires russes ne fonctionnent pas.',
        US: 'Les Américains n’ont pas besoin de visa (90 jours sur 180) et, pour un long séjour, il existe le DAFT : un titre d’indépendant avec 4 500 € de capital. L’ETIAS (20 €) a été repoussé et n’est pas attendu avant 2027.',
        JP: 'Les Japonais entrent sans visa et, grâce au traité de commerce néerlando-japonais, peuvent obtenir un titre d’indépendant à des conditions avantageuses ; il existe aussi un programme vacances-travail.',
        GB: 'Les Britanniques sont limités à 90 jours sur 180. Le passeport doit avoir moins de 10 ans le jour de l’entrée et rester valable 3 mois après la sortie ; dans l’Eurostar, le contrôle Schengen (assuré par la police française) a lieu dès Londres.',
        TR: 'Les citoyens turcs ont besoin d’un visa Schengen via VFS, mais grâce à l’accord d’association UE–Turquie, les entrepreneurs turcs obtiennent un titre de séjour néerlandais à des conditions plus souples.',
        IN: 'Les citoyens indiens ont besoin d’un visa Schengen via VFS. Selon la « cascade » européenne, deux visas bien utilisés en trois ans ouvrent droit à un visa à entrées multiples de 2 ans, puis de 5 ans.',
      },
    },
    it: {
      summary:
        'I Paesi Bassi fanno parte di Schengen: i cittadini di UE, SEE e Svizzera entrano con la carta d’identità, mentre chi ha passaporto di Stati Uniti, Regno Unito, Canada, Australia, Giappone, Corea, Brasile, Ucraina e altri paesi esenti resta fino a 90 giorni su 180. Chi ha passaporto russo, indiano, cinese, turco, surinamese e di molti altri paesi ha bisogno di un visto Schengen da 90 €; le istruzioni sono su netherlandsworldwide.nl.',
      apply:
        'Su netherlandsworldwide.nl c’è una procedura guidata che ti dice dove fare domanda: quasi ovunque è un centro VFS Global. La tassa è di 90 € più il servizio e la decisione arriva di solito in 15 giorni. Se dormi da amici o parenti, loro fanno autenticare in comune un modulo di garanzia e alloggio, che sostituisce la prenotazione alberghiera e la prova dei mezzi.',
      visaRun:
        'I visa run non funzionano: i 90 giorni si contano su tutta l’area Schengen in una finestra mobile di 180. Un viaggio a Londra o ad Aruba non azzera il contatore: semplicemente quei giorni non contano, e dall’aprile 2026 l’EES registra ogni ingresso e uscita.',
      transit:
        'Per cambiare aereo a Schiphol tra due voli fuori Schengen la maggior parte delle nazionalità non ha bisogno di visto, se resta nella zona di transito. I cittadini della lista UE del visto di transito aeroportuale (Afghanistan, Bangladesh, Ghana, Iran, Nigeria, Pakistan e altri) e di alcuni paesi aggiunti dai Paesi Bassi devono averlo, a meno di avere un visto o un permesso valido di Stati Uniti, Canada, Giappone o di un paese SEE.',
      hacks: [
        'I cittadini statunitensi possono ottenere un permesso da lavoratori autonomi grazie al Trattato di amicizia olandese-americano (DAFT), investendo 4.500 € nella propria attività nei Paesi Bassi. I giapponesi hanno una via simile.',
        'Un visto Schengen a ingressi multipli ti fa entrare senza visto anche ad Aruba, Curaçao, Sint Maarten e nei Caraibi olandesi: sono fuori Schengen, quindi i giorni lì non consumano i tuoi 90/180.',
        'I laureati delle prime 200 università al mondo e degli atenei olandesi possono ottenere l’anno di orientamento (zoekjaar): un permesso di un anno per cercare lavoro, senza limiti all’occupazione.',
        'L’iscrizione all’anagrafe comunale (BRP) è obbligatoria solo se passi più di quattro mesi nei Paesi Bassi nell’arco di sei: turisti e visitatori brevi non devono farla.',
      ],
      pitfalls: [
        'La Marechaussee reale (KMar) alla frontiera può chiederti dei mezzi economici: indicativamente circa 55 € a persona al giorno, più alloggio e biglietto di ritorno.',
        'Da fine 2024 i Paesi Bassi fanno controlli a campione alle frontiere con Belgio e Germania: tieni il passaporto con te su treni e autobus.',
        'Fai domanda nei Paesi Bassi solo se sono la tua destinazione principale. Un volo economico per Amsterdam per un giro tra Francia e Italia non è un motivo: fai domanda dove passi più notti.',
      ],
      waivers: [
        'Un permesso di soggiorno o un visto nazionale D valido di qualsiasi paese Schengen ti permette di visitare i Paesi Bassi senza visto fino a 90 giorni su 180. I permessi irlandesi e ciprioti non valgono.',
        'Un visto Schengen rilasciato da un altro Stato membro vale anche nei Paesi Bassi entro le sue date e i suoi giorni. Fai il primo viaggio nel paese che l’ha rilasciato.',
      ],
      passports: {
        RU: 'La rappresentanza olandese in Russia accetta solo una gamma limitata di domande e da novembre 2025 i visti sono di solito a ingresso singolo. Prima di pianificare controlla le regole attuali su netherlandsworldwide.nl, oppure fai domanda in un paese in cui hai la residenza. Non ci sono voli diretti e le carte russe non funzionano.',
        US: 'Gli statunitensi non hanno bisogno di visto (90 giorni su 180) e per soggiorni lunghi c’è il DAFT: permesso da autonomi con 4.500 € di capitale. L’ETIAS (20 €) è stato rinviato e non è atteso prima del 2027.',
        JP: 'I cittadini giapponesi entrano senza visto e, grazie al trattato commerciale olandese-giapponese, possono ottenere un permesso da autonomi a condizioni favorevoli; c’è anche un programma vacanza-lavoro.',
        GB: 'I britannici hanno il limite di 90 giorni su 180. Il passaporto deve avere meno di 10 anni il giorno dell’ingresso e valere ancora 3 mesi dopo l’uscita; sull’Eurostar il controllo Schengen (fatto dalla polizia francese) avviene già a Londra.',
        TR: 'I cittadini turchi hanno bisogno del visto Schengen tramite VFS, ma grazie all’Accordo di associazione UE–Turchia gli imprenditori turchi ottengono il permesso olandese a condizioni più morbide.',
        IN: 'I cittadini indiani hanno bisogno del visto Schengen tramite VFS. Con la «cascata» europea, due visti usati correttamente in tre anni danno un visto multiplo di 2 anni e poi di 5.',
      },
    },
  },
};

export default guide;
