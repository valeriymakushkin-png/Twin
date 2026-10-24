import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'FI',
  checked: '2026-10',
  overrides: {
    // Since 30 Sep 2022 Finland refuses Russian citizens travelling for tourism, whichever state issued the Schengen visa; land border closed since Dec 2023
    RU: { status: 'banned' },
  },
  fees: { visa: { kind: 'fixed', amount: 90, currency: 'EUR' } },
  stay: { visa: 90 },
  links: { immigration: 'https://um.fi' },
  docs: ['insurance', 'returnTicket', 'booking', 'finance'],
  passportMonths: 3,
  rule: { days: 90, window: 180 },
  visaRun: 'no',
  transit: { hours: 24 },
  waivers: [
    { holds: ['resEU'], status: 'free', days: 90 },
    { holds: ['visaSchengen'], status: 'free', days: 90 },
  ],
  hackScope: [null, null, null],
  pitfallScope: [null, null, ['regime:required']],
  text: {
    ru: {
      summary:
        'Финляндия входит в Шенген: граждане ЕС, ЕЭЗ и Швейцарии въезжают по ID-карте, а граждане США, Великобритании, Канады, Австралии, Японии, Бразилии, Украины и других безвизовых стран — до 90 дней в любые 180. Индийцам, китайцам, туркам и многим другим нужна шенгенская виза за 90 €; российских туристов Финляндия не впускает с осени 2022 года, а сухопутная граница с Россией закрыта.',
      apply:
        'Заявление на шенгенскую визу заполняют онлайн и подают с отпечатками в визовом центре — в большинстве стран это VFS Global; адреса и требования — на um.fi. Сбор — 90 € плюс сервисный, решение — обычно 15 дней. К декабрю — сезону Лапландии и Санта-Клауса — записи разбирают заранее, подавайте за 1–2 месяца.',
      visaRun:
        'Визаран не работает: 90 дней считаются по всему Шенгену в скользящем окне 180 дней, а Швеция, Норвегия и Эстония по соседству — тоже Шенген. Выезд из зоны лишь ставит счётчик на паузу; с апреля 2026 года EES фиксирует каждый въезд и выезд.',
      transit:
        'Хельсинки-Вантаа — главный пересадочный узел между Азией и Европой: пересадка между двумя рейсами за пределы Шенгена большинству не требует визы, если не выходить из транзитной зоны. Гражданам из общего списка (Афганистан, Бангладеш, Иран, Нигерия, Пакистан и др.) нужна транзитная виза — кроме владельцев действующей визы или ВНЖ США, Канады, Японии или страны ЕЭЗ. Если следующий рейс внутри Шенгена, въезд оформляют уже в Хельсинки.',
      hacks: [
        'Пересадка в Хельсинки с азиатского рейса на европейский — одна из самых быстрых в Европе: паспортный контроль и регистрация в EES проходят здесь, а в пункте назначения вы прилетаете как внутренним рейсом.',
        'Паром Хельсинки — Таллин идёт около двух часов и остаётся внутри Шенгена, а рейсы на Аландские острова и через них в Стокгольм продают беспошлинные товары — Аланды вне налоговой зоны ЕС.',
        'На севере Лапландии границы с Норвегией и Швецией открыты: из Килписъярви или Торнио можно перейти в соседнюю страну без контроля, но паспорт держите при себе.',
      ],
      pitfalls: [
        'Сухопутная граница с Россией закрыта с декабря 2023 года — Ваалимаа, Нуйямаа и другие переходы не работают, хотя навигаторы иногда всё ещё прокладывают через них маршрут.',
        'Работать по туристической визе или в безвизовые дни нельзя, в том числе на сезонных работах в Лапландии и на сборе ягод — для них нужна отдельная сезонная виза или разрешение.',
        'Подавайте в Финляндию, только если это основная страна поездки: дешёвый рейс Finnair в Хельсинки ради тура по Норвегии — не повод, подавать нужно туда, где больше ночей.',
      ],
      waivers: [
        'Действующий ВНЖ или долгосрочная виза D любой шенгенской страны позволяют ездить в Финляндию без визы до 90 дней в любые 180. Ирландский и кипрский ВНЖ не подходят.',
        'Шенгенская виза другой страны действует и в Финляндии в пределах своих дат и числа дней. Исключение — россияне: туристов с такой визой на границе не пропускают.',
      ],
      passports: {
        RU: 'С 30 сентября 2022 года Финляндия не впускает граждан России, едущих как туристы, даже по визе другой страны Шенгена. Исключения — близкие родственники граждан и жителей Финляндии, владельцы ВНЖ, студенты, работники и поездки по гуманитарным причинам. Сухопутная граница закрыта с конца 2023 года, прямых рейсов нет, российские карты не работают.',
        US: 'Гражданам США виза не нужна: 90 дней в любые 180. Запуск ETIAS (20 €) отложен, раньше 2027 года его не ждут.',
        GB: 'Британцы ограничены 90 днями в 180. Паспорт должен быть моложе 10 лет на дату въезда и действовать ещё 3 месяца после выезда.',
        IN: 'Гражданам Индии нужна шенгенская виза через VFS. По правилу «каскада» после двух правильно использованных виз за три года дают многократную визу на 2 года, затем на 5 лет.',
        CN: 'Гражданам Китая нужна шенгенская виза; Finnair летает из нескольких городов Китая, а пересадка в Хельсинки на рейс за пределы Шенгена визы не требует.',
        UA: 'Граждане Украины с биометрическим паспортом въезжают без визы на 90 дней в 180; временная защита в ЕС продлена до марта 2027 года.',
      },
    },
    en: {
      summary:
        'Finland is in Schengen: EU, EEA and Swiss citizens enter with an ID card, while US, UK, Canadian, Australian, Japanese, Brazilian, Ukrainian and other visa-exempt travellers stay up to 90 days in any 180. Indian, Chinese, Turkish and many other passport holders need a €90 Schengen visa; Finland has refused Russian tourists since autumn 2022, and the land border with Russia is closed.',
      apply:
        'Fill in the Schengen visa application online and hand it in with fingerprints at the visa centre — VFS Global in most countries; addresses and requirements are on um.fi. The fee is €90 plus the service charge, and decisions usually take 15 days. By December — Lapland and Santa Claus season — slots go early, so apply one to two months ahead.',
      visaRun:
        'Visa runs don’t work: the 90 days are counted across the whole Schengen area over any rolling 180-day window, and neighbouring Sweden, Norway and Estonia are Schengen too. Leaving the zone only pauses the clock; since April 2026 the EES records every entry and exit.',
      transit:
        'Helsinki-Vantaa is a major Asia–Europe hub: connecting between two non-Schengen flights needs no visa for most nationalities, as long as you stay airside. Citizens on the common airport-transit-visa list (Afghanistan, Bangladesh, Iran, Nigeria, Pakistan and others) need one, unless they hold a valid US, Canadian, Japanese or EEA visa or residence permit. If your next flight is within Schengen, you enter in Helsinki.',
      hacks: [
        'Connecting in Helsinki from an Asian flight to a European one is among the quickest transfers in Europe: passport control and EES enrolment happen here, and you land at your destination as if on a domestic flight.',
        'The Helsinki–Tallinn ferry takes about two hours and stays within Schengen, while sailings to and via the Åland Islands to Stockholm sell duty-free — Åland is outside the EU tax area.',
        'In northern Lapland the borders with Norway and Sweden are open: from Kilpisjärvi or Tornio you can walk into the neighbouring country without checks, but keep your passport on you.',
      ],
      pitfalls: [
        'The land border with Russia has been closed since December 2023 — Vaalimaa, Nuijamaa and the other crossings are shut, even though navigation apps sometimes still route through them.',
        'You can’t work on a tourist visa or visa-free days, including seasonal jobs in Lapland and berry picking — those need a separate seasonal work visa or permit.',
        'Apply to Finland only if it’s your main destination: a cheap Finnair flight to Helsinki for a Norway tour is no reason — apply where you spend the most nights.',
      ],
      waivers: [
        'A valid residence permit or long-stay D visa from any Schengen country lets you visit Finland visa-free for up to 90 days in any 180. Irish and Cypriot permits don’t count.',
        'A Schengen visa issued by another member state is valid in Finland within its dates and number of days. The exception is Russians: tourists holding one are turned away at the border.',
      ],
      passports: {
        RU: 'Since 30 September 2022 Finland has refused Russian citizens travelling as tourists, even on another Schengen country’s visa. Exceptions cover close relatives of Finnish citizens and residents, residence permit holders, students, workers and humanitarian trips. The land border has been closed since late 2023, there are no direct flights, and Russian bank cards don’t work.',
        US: 'US citizens need no visa: 90 days in any 180. ETIAS (€20) has been delayed and isn’t expected before 2027.',
        GB: 'UK citizens are limited to 90 days in 180. Your passport must be under 10 years old on the day you enter and valid for 3 months after you leave.',
        IN: 'Indian citizens need a Schengen visa via VFS. Under the EU “cascade”, two visas used correctly within three years earn a 2-year multiple-entry visa, then a 5-year one.',
        CN: 'Chinese citizens need a Schengen visa; Finnair flies from several Chinese cities, and connecting in Helsinki onto a non-Schengen flight needs no visa.',
        UA: 'Ukrainians with a biometric passport enter visa-free for 90 days in 180; temporary protection in the EU runs until March 2027.',
      },
    },
    es: {
      summary:
        'Finlandia forma parte de Schengen: los ciudadanos de la UE, el EEE y Suiza entran con el DNI, y los de EE. UU., Reino Unido, Canadá, Australia, Japón, Brasil, Ucrania y otros países exentos se quedan hasta 90 días en cualquier periodo de 180. Quienes tienen pasaporte indio, chino, turco y muchos otros necesitan un visado Schengen de 90 €; Finlandia rechaza a los turistas rusos desde el otoño de 2022 y la frontera terrestre con Rusia está cerrada.',
      apply:
        'Rellena la solicitud del visado Schengen en línea y preséntala con las huellas en el centro de visados, que en la mayoría de países es VFS Global; direcciones y requisitos en um.fi. La tasa es de 90 € más el servicio y la resolución suele tardar 15 días. Para diciembre —temporada de Laponia y Papá Noel— las citas vuelan, así que solicítalo con uno o dos meses de margen.',
      visaRun:
        'Los visa runs no sirven: los 90 días se cuentan en todo Schengen dentro de una ventana móvil de 180, y Suecia, Noruega y Estonia, los vecinos, también son Schengen. Salir de la zona solo pausa el contador; desde abril de 2026 el EES registra cada entrada y salida.',
      transit:
        'Helsinki-Vantaa es un gran hub entre Asia y Europa: conectar entre dos vuelos fuera de Schengen no exige visado a la mayoría si no sale de la zona de tránsito. Los ciudadanos de la lista común de visado de tránsito aeroportuario (Afganistán, Bangladés, Irán, Nigeria, Pakistán y otros) sí lo necesitan, salvo que tengan visado o residencia vigente de EE. UU., Canadá, Japón o un país del EEE. Si el siguiente vuelo es dentro de Schengen, entras ya en Helsinki.',
      hacks: [
        'La conexión en Helsinki de un vuelo asiático a uno europeo es de las más rápidas de Europa: el control de pasaportes y el registro en el EES se hacen aquí, y llegas a tu destino como en un vuelo nacional.',
        'El ferri Helsinki–Tallin tarda unas dos horas y no sale de Schengen, mientras que las rutas a las islas Åland y por ellas hasta Estocolmo venden libre de impuestos: Åland está fuera de la zona fiscal de la UE.',
        'En el norte de Laponia las fronteras con Noruega y Suecia están abiertas: desde Kilpisjärvi o Tornio puedes pasar al país vecino sin controles, pero lleva el pasaporte encima.',
      ],
      pitfalls: [
        'La frontera terrestre con Rusia está cerrada desde diciembre de 2023: Vaalimaa, Nuijamaa y los demás pasos no funcionan, aunque a veces las apps de navegación todavía trazan la ruta por ellos.',
        'No puedes trabajar con visado turístico ni en tus días sin visado, tampoco en trabajos de temporada en Laponia o en la recogida de bayas: para eso hace falta un visado o permiso de temporada aparte.',
        'Solicita en Finlandia solo si es tu destino principal: un vuelo barato de Finnair a Helsinki para recorrer Noruega no es motivo; solicita donde pases más noches.',
      ],
      waivers: [
        'Un permiso de residencia o un visado nacional D vigente de cualquier país Schengen te permite visitar Finlandia sin visado hasta 90 días en 180. Los permisos de Irlanda y Chipre no valen.',
        'Un visado Schengen expedido por otro Estado miembro vale en Finlandia dentro de sus fechas y su número de días. La excepción son los rusos: a los turistas con ese visado se les rechaza en la frontera.',
      ],
      passports: {
        RU: 'Desde el 30 de septiembre de 2022 Finlandia rechaza a los ciudadanos rusos que viajan como turistas, aunque tengan visado de otro país Schengen. Las excepciones incluyen a familiares cercanos de ciudadanos y residentes finlandeses, titulares de residencia, estudiantes, trabajadores y viajes humanitarios. La frontera terrestre está cerrada desde finales de 2023, no hay vuelos directos y las tarjetas rusas no funcionan.',
        US: 'Los ciudadanos estadounidenses no necesitan visado: 90 días en 180. El ETIAS (20 €) se ha retrasado y no se espera antes de 2027.',
        GB: 'Los británicos tienen un límite de 90 días en 180. El pasaporte debe tener menos de 10 años el día de entrada y seguir vigente 3 meses después de salir.',
        IN: 'Los ciudadanos indios necesitan visado Schengen a través de VFS. Con la «cascada» europea, dos visados bien usados en tres años dan uno de entradas múltiples de 2 años y luego de 5.',
        CN: 'Los ciudadanos chinos necesitan visado Schengen; Finnair vuela desde varias ciudades chinas, y conectar en Helsinki con un vuelo fuera de Schengen no exige visado.',
        UA: 'Los ucranianos con pasaporte biométrico entran sin visado durante 90 días en 180; la protección temporal en la UE dura hasta marzo de 2027.',
      },
    },
    de: {
      summary:
        'Finnland gehört zu Schengen: Bürger der EU, des EWR und der Schweiz reisen mit dem Ausweis ein, Reisende aus den USA, Großbritannien, Kanada, Australien, Japan, Brasilien, der Ukraine und anderen visumfreien Ländern bleiben bis zu 90 Tage in jedem 180-Tage-Zeitraum. Mit indischem, chinesischem, türkischem und vielen anderen Pässen brauchst du ein Schengen-Visum für 90 €; russische Touristen weist Finnland seit Herbst 2022 ab, und die Landgrenze zu Russland ist geschlossen.',
      apply:
        'Den Antrag auf ein Schengen-Visum füllst du online aus und reichst ihn mit Fingerabdrücken beim Visazentrum ein – in den meisten Ländern VFS Global; Adressen und Anforderungen stehen auf um.fi. Die Gebühr beträgt 90 € plus Servicegebühr, die Entscheidung dauert meist 15 Tage. Bis Dezember – Lappland- und Weihnachtsmann-Saison – sind Termine früh weg, beantrage also ein bis zwei Monate vorher.',
      visaRun:
        'Visa-Runs funktionieren nicht: Die 90 Tage gelten für den ganzen Schengen-Raum in einem rollierenden 180-Tage-Fenster, und die Nachbarn Schweden, Norwegen und Estland sind ebenfalls Schengen. Wer den Raum verlässt, hält den Zähler nur an; seit April 2026 erfasst das EES jede Ein- und Ausreise.',
      transit:
        'Helsinki-Vantaa ist ein großes Drehkreuz zwischen Asien und Europa: Beim Umsteigen zwischen zwei Flügen außerhalb von Schengen brauchen die meisten kein Visum, solange sie im Transitbereich bleiben. Staatsangehörige auf der gemeinsamen Liste für Flughafentransitvisa (Afghanistan, Bangladesch, Iran, Nigeria, Pakistan u. a.) benötigen eines – außer mit gültigem Visum oder Aufenthaltstitel der USA, Kanadas, Japans oder eines EWR-Staats. Geht der Anschlussflug innerhalb von Schengen weiter, reist du schon in Helsinki ein.',
      hacks: [
        'Das Umsteigen in Helsinki von einem Asien- auf einen Europaflug gehört zu den schnellsten Transfers Europas: Passkontrolle und EES-Registrierung erledigst du hier und landest am Ziel wie nach einem Inlandsflug.',
        'Die Fähre Helsinki–Tallinn braucht rund zwei Stunden und bleibt im Schengen-Raum, während Verbindungen zu den Åland-Inseln und über sie nach Stockholm zollfrei verkaufen – Åland liegt außerhalb des EU-Steuergebiets.',
        'Im Norden Lapplands sind die Grenzen zu Norwegen und Schweden offen: Von Kilpisjärvi oder Tornio gehst du ohne Kontrolle ins Nachbarland, den Pass solltest du aber dabeihaben.',
      ],
      pitfalls: [
        'Die Landgrenze zu Russland ist seit Dezember 2023 geschlossen – Vaalimaa, Nuijamaa und die übrigen Übergänge sind zu, auch wenn Navi-Apps manchmal noch darüber routen.',
        'Mit Touristenvisum oder in visumfreien Tagen darfst du nicht arbeiten, auch nicht in Saisonjobs in Lappland oder bei der Beerenernte – dafür braucht es ein eigenes Saisonarbeitsvisum oder eine Erlaubnis.',
        'Beantrage in Finnland nur, wenn es dein Hauptziel ist: Ein billiger Finnair-Flug nach Helsinki für eine Norwegen-Tour ist kein Grund – zuständig ist das Land mit den meisten Nächten.',
      ],
      waivers: [
        'Mit einem gültigen Aufenthaltstitel oder nationalen D-Visum eines Schengen-Staats reist du bis zu 90 Tage in 180 visumfrei nach Finnland. Irische und zyprische Titel zählen nicht.',
        'Ein Schengen-Visum eines anderen Mitgliedstaats gilt innerhalb seiner Daten und Tage auch in Finnland. Ausnahme sind Russen: Touristen mit einem solchen Visum werden an der Grenze abgewiesen.',
      ],
      passports: {
        RU: 'Seit dem 30. September 2022 weist Finnland russische Staatsangehörige ab, die als Touristen reisen – auch mit dem Visum eines anderen Schengen-Staats. Ausnahmen gelten für enge Angehörige finnischer Bürger und Einwohner, Inhaber eines Aufenthaltstitels, Studierende, Arbeitnehmer und humanitäre Reisen. Die Landgrenze ist seit Ende 2023 geschlossen, Direktflüge gibt es nicht, und russische Bankkarten funktionieren nicht.',
        US: 'US-Bürger brauchen kein Visum: 90 Tage in 180. ETIAS (20 €) verzögert sich und wird nicht vor 2027 erwartet.',
        GB: 'Briten dürfen 90 Tage in 180 bleiben. Der Pass muss am Einreisetag jünger als 10 Jahre sein und noch 3 Monate nach der Ausreise gelten.',
        IN: 'Indische Staatsangehörige brauchen ein Schengen-Visum über VFS. Nach der EU-„Kaskade“ gibt es nach zwei korrekt genutzten Visa in drei Jahren ein Mehrfachvisum für 2 Jahre, danach für 5 Jahre.',
        CN: 'Chinesische Staatsangehörige brauchen ein Schengen-Visum; Finnair fliegt ab mehreren chinesischen Städten, und das Umsteigen in Helsinki auf einen Flug außerhalb von Schengen braucht kein Visum.',
        UA: 'Ukrainer mit biometrischem Pass reisen 90 Tage in 180 visumfrei ein; der vorübergehende Schutz in der EU gilt bis März 2027.',
      },
    },
    fr: {
      summary:
        'La Finlande fait partie de Schengen : les citoyens de l’UE, de l’EEE et de la Suisse entrent avec leur carte d’identité, et les voyageurs américains, britanniques, canadiens, australiens, japonais, brésiliens, ukrainiens et d’autres pays exemptés restent jusqu’à 90 jours sur 180. Les titulaires d’un passeport indien, chinois, turc et de nombreux autres ont besoin d’un visa Schengen à 90 € ; la Finlande refoule les touristes russes depuis l’automne 2022, et la frontière terrestre avec la Russie est fermée.',
      apply:
        'Remplissez la demande de visa Schengen en ligne, puis déposez-la avec vos empreintes au centre de visas — VFS Global dans la plupart des pays ; adresses et conditions sur um.fi. Les frais sont de 90 € plus le service, et la décision prend en général 15 jours. Pour décembre — saison de la Laponie et du Père Noël — les créneaux partent tôt : déposez un à deux mois à l’avance.',
      visaRun:
        'Les visa runs ne fonctionnent pas : les 90 jours se comptent sur tout l’espace Schengen dans une fenêtre glissante de 180, et la Suède, la Norvège et l’Estonie voisines sont aussi dans Schengen. Sortir de la zone ne fait que suspendre le compteur ; depuis avril 2026, l’EES enregistre chaque entrée et sortie.',
      transit:
        'Helsinki-Vantaa est un grand hub entre l’Asie et l’Europe : une correspondance entre deux vols hors Schengen ne demande pas de visa à la plupart des nationalités, tant que vous restez en zone de transit. Les ressortissants de la liste commune du visa de transit aéroportuaire (Afghanistan, Bangladesh, Iran, Nigeria, Pakistan, etc.) en ont besoin, sauf s’ils détiennent un visa ou un titre de séjour valide des États-Unis, du Canada, du Japon ou d’un pays de l’EEE. Si le vol suivant reste dans Schengen, vous entrez dès Helsinki.',
      hacks: [
        'La correspondance à Helsinki entre un vol d’Asie et un vol européen est parmi les plus rapides d’Europe : contrôle des passeports et enregistrement EES se font ici, et vous arrivez à destination comme après un vol intérieur.',
        'Le ferry Helsinki–Tallinn met environ deux heures et reste dans Schengen, tandis que les liaisons vers et via les îles Åland jusqu’à Stockholm vendent du hors-taxe — Åland est hors de la zone fiscale de l’UE.',
        'Dans le nord de la Laponie, les frontières avec la Norvège et la Suède sont ouvertes : depuis Kilpisjärvi ou Tornio, on passe dans le pays voisin sans contrôle, mais gardez votre passeport sur vous.',
      ],
      pitfalls: [
        'La frontière terrestre avec la Russie est fermée depuis décembre 2023 — Vaalimaa, Nuijamaa et les autres postes sont fermés, même si les applis de navigation proposent parfois encore d’y passer.',
        'Impossible de travailler avec un visa touristique ou pendant vos jours sans visa, y compris pour un emploi saisonnier en Laponie ou la cueillette des baies : il faut un visa ou un permis saisonnier à part.',
        'Ne déposez en Finlande que si c’est votre destination principale : un vol Finnair bon marché pour Helsinki en vue d’un circuit en Norvège n’est pas une raison — déposez là où vous passez le plus de nuits.',
      ],
      waivers: [
        'Un titre de séjour ou un visa long séjour D valide d’un pays Schengen vous permet de venir en Finlande sans visa jusqu’à 90 jours sur 180. Les titres irlandais et chypriotes ne comptent pas.',
        'Un visa Schengen délivré par un autre État membre est valable en Finlande dans la limite de ses dates et de ses jours. Exception pour les Russes : les touristes munis d’un tel visa sont refoulés à la frontière.',
      ],
      passports: {
        RU: 'Depuis le 30 septembre 2022, la Finlande refoule les ressortissants russes voyageant en touristes, même avec le visa d’un autre pays Schengen. Les exceptions couvrent la proche famille de citoyens et de résidents finlandais, les titulaires d’un titre de séjour, les étudiants, les travailleurs et les voyages humanitaires. La frontière terrestre est fermée depuis fin 2023, il n’y a pas de vols directs et les cartes bancaires russes ne fonctionnent pas.',
        US: 'Les citoyens américains n’ont pas besoin de visa : 90 jours sur 180. L’ETIAS (20 €) a été repoussé et n’est pas attendu avant 2027.',
        GB: 'Les Britanniques sont limités à 90 jours sur 180. Le passeport doit avoir moins de 10 ans le jour de l’entrée et rester valable 3 mois après la sortie.',
        IN: 'Les citoyens indiens ont besoin d’un visa Schengen via VFS. Selon la « cascade » européenne, deux visas bien utilisés en trois ans ouvrent droit à un visa à entrées multiples de 2 ans, puis de 5 ans.',
        CN: 'Les citoyens chinois ont besoin d’un visa Schengen ; Finnair dessert plusieurs villes chinoises, et une correspondance à Helsinki vers un vol hors Schengen ne demande pas de visa.',
        UA: 'Les Ukrainiens munis d’un passeport biométrique entrent sans visa pour 90 jours sur 180 ; la protection temporaire dans l’UE court jusqu’en mars 2027.',
      },
    },
    it: {
      summary:
        'La Finlandia fa parte di Schengen: i cittadini di UE, SEE e Svizzera entrano con la carta d’identità, mentre chi ha passaporto di Stati Uniti, Regno Unito, Canada, Australia, Giappone, Brasile, Ucraina e altri paesi esenti resta fino a 90 giorni su 180. Chi ha passaporto indiano, cinese, turco e di molti altri paesi ha bisogno di un visto Schengen da 90 €; la Finlandia respinge i turisti russi dall’autunno 2022 e il confine terrestre con la Russia è chiuso.',
      apply:
        'Compila online la domanda di visto Schengen e presentala con le impronte al centro visti, che nella maggior parte dei paesi è VFS Global; indirizzi e requisiti su um.fi. La tassa è di 90 € più il servizio e la decisione arriva di solito in 15 giorni. Per dicembre — stagione della Lapponia e di Babbo Natale — gli appuntamenti finiscono presto: fai domanda uno o due mesi prima.',
      visaRun:
        'I visa run non funzionano: i 90 giorni si contano su tutta l’area Schengen in una finestra mobile di 180, e anche le vicine Svezia, Norvegia ed Estonia sono Schengen. Uscire dall’area mette solo in pausa il contatore; dall’aprile 2026 l’EES registra ogni ingresso e uscita.',
      transit:
        'Helsinki-Vantaa è un grande hub tra Asia ed Europa: un cambio tra due voli fuori Schengen non richiede visto alla maggior parte delle nazionalità, se si resta nella zona di transito. I cittadini della lista comune del visto di transito aeroportuale (Afghanistan, Bangladesh, Iran, Nigeria, Pakistan e altri) devono averlo, a meno di avere un visto o un permesso valido di Stati Uniti, Canada, Giappone o di un paese SEE. Se il volo successivo è dentro Schengen, entri già a Helsinki.',
      hacks: [
        'Il cambio a Helsinki da un volo asiatico a uno europeo è tra i più rapidi d’Europa: controllo passaporti e registrazione EES si fanno qui, e a destinazione arrivi come con un volo nazionale.',
        'Il traghetto Helsinki–Tallinn impiega circa due ore e resta dentro Schengen, mentre le linee per le Åland e via Åland fino a Stoccolma vendono duty free: le Åland sono fuori dall’area fiscale UE.',
        'Nel nord della Lapponia i confini con Norvegia e Svezia sono aperti: da Kilpisjärvi o Tornio passi nel paese vicino senza controlli, ma tieni il passaporto con te.',
      ],
      pitfalls: [
        'Il confine terrestre con la Russia è chiuso da dicembre 2023: Vaalimaa, Nuijamaa e gli altri valichi non funzionano, anche se a volte le app di navigazione ci fanno ancora passare.',
        'Con un visto turistico o nei giorni senza visto non puoi lavorare, nemmeno per lavori stagionali in Lapponia o per la raccolta dei frutti di bosco: servono un visto o un permesso stagionale a parte.',
        'Fai domanda in Finlandia solo se è la tua destinazione principale: un volo Finnair economico per Helsinki per girare la Norvegia non è un motivo; fai domanda dove passi più notti.',
      ],
      waivers: [
        'Un permesso di soggiorno o un visto nazionale D valido di qualsiasi paese Schengen ti permette di visitare la Finlandia senza visto fino a 90 giorni su 180. I permessi irlandesi e ciprioti non valgono.',
        'Un visto Schengen rilasciato da un altro Stato membro vale anche in Finlandia entro le sue date e i suoi giorni. Fanno eccezione i russi: i turisti con un visto del genere vengono respinti alla frontiera.',
      ],
      passports: {
        RU: 'Dal 30 settembre 2022 la Finlandia respinge i cittadini russi che viaggiano come turisti, anche con il visto di un altro paese Schengen. Le eccezioni riguardano parenti stretti di cittadini e residenti finlandesi, titolari di permesso di soggiorno, studenti, lavoratori e viaggi umanitari. Il confine terrestre è chiuso da fine 2023, non ci sono voli diretti e le carte russe non funzionano.',
        US: 'I cittadini statunitensi non hanno bisogno di visto: 90 giorni su 180. L’ETIAS (20 €) è stato rinviato e non è atteso prima del 2027.',
        GB: 'I britannici hanno il limite di 90 giorni su 180. Il passaporto deve avere meno di 10 anni il giorno dell’ingresso e valere ancora 3 mesi dopo l’uscita.',
        IN: 'I cittadini indiani hanno bisogno del visto Schengen tramite VFS. Con la «cascata» europea, due visti usati correttamente in tre anni danno un visto multiplo di 2 anni e poi di 5.',
        CN: 'I cittadini cinesi hanno bisogno del visto Schengen; Finnair vola da diverse città cinesi, e il cambio a Helsinki su un volo fuori Schengen non richiede visto.',
        UA: 'Gli ucraini con passaporto biometrico entrano senza visto per 90 giorni su 180; la protezione temporanea nell’UE vale fino a marzo 2027.',
      },
    },
  },
};

export default guide;
