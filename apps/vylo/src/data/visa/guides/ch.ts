import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'CH',
  checked: '2026-10',
  fees: { visa: { kind: 'fixed', amount: 90, currency: 'EUR' } },
  stay: { visa: 90 },
  links: { immigration: 'https://www.sem.admin.ch' },
  docs: ['insurance', 'returnTicket', 'booking', 'finance'],
  passportMonths: 3,
  rule: { days: 90, window: 180 },
  visaRun: 'no',
  transit: { hours: 24 },
  waivers: [
    { holds: ['resEU'], status: 'free', days: 90 },
    { holds: ['visaSchengen'], status: 'free', days: 90 },
  ],
  hackScope: [null, null, ['@EU']],
  pitfallScope: [null, null, null],
  text: {
    ru: {
      summary:
        'Швейцария не входит в ЕС, но входит в Шенген: граждане ЕС, ЕЭЗ и Лихтенштейна въезжают по ID-карте, а граждане США, Великобритании, Канады, Австралии, Японии, Бразилии, Украины и других безвизовых стран — до 90 дней в любые 180 по общему шенгенскому счёту. Россиянам, индийцам, китайцам, туркам и многим другим нужна шенгенская виза; правила публикует миграционная служба на sem.admin.ch.',
      apply:
        'Подают в швейцарское представительство по месту жительства; в большинстве стран документы и отпечатки принимает TLScontact или VFS Global. Сбор соответствует 90 € и берётся в местной валюте, плюс сервисный сбор центра; решение — обычно 15 дней. Если главная цель — горнолыжный курорт на границе с Францией или Италией, считайте ночи: подавать нужно туда, где их больше.',
      visaRun:
        'Визаран не работает: 90 дней считаются по всему Шенгену в скользящем окне 180 дней, а все соседи Швейцарии — Франция, Германия, Австрия, Италия и Лихтенштейн — тоже Шенген. Выезд из зоны лишь ставит счётчик на паузу; с апреля 2026 года EES фиксирует каждый въезд и выезд.',
      transit:
        'Пересадка в Цюрихе или Женеве между двумя рейсами за пределы Шенгена большинству не требует визы, если не выходить из транзитной зоны. Гражданам из общего списка (Афганистан, Бангладеш, Иран, Нигерия, Пакистан и др.) и нескольких стран, добавленных Швейцарией, нужна транзитная виза — кроме владельцев действующей визы или ВНЖ США, Канады, Японии или страны ЕЭЗ.',
      hacks: [
        'Аэропорт Базель-Мюлуз стоит на французской земле и имеет французский и швейцарский выходы, а в Женеве есть французский сектор: можно прилететь в Швейцарию и выйти сразу во Францию, без швейцарской таможни.',
        'Лихтенштейн открыт со стороны Швейцарии без всякого контроля: по швейцарской визе или безвизовым дням туда ездят как в соседний кантон.',
        'Граждане ЕС и ЕАСТ живут в Швейцарии до 3 месяцев без разрешения, а ищущие работу получают краткосрочный вид на жительство ещё на несколько месяцев — визовые ограничения на них не распространяются.',
      ],
      pitfalls: [
        'Швейцария не в таможенном союзе ЕС: на границе и в поездах проверяют товары — беспошлинно до 300 CHF на человека, мясо и алкоголь строго лимитированы, а наличные свыше 10 000 CHF нужно декларировать по запросу.',
        'Для проживания дольше 3 месяцев или любой работы нужна регистрация в коммуне в течение 14 дней (в некоторых кантонах — 8); туристам в отелях это не требуется.',
        'Работа на швейцарских клиентов по туристической визе или в безвизовые дни запрещена, а квоты на разрешения для граждан стран вне ЕС очень жёсткие — «поработать на сезоне» без разрешения нельзя.',
      ],
      waivers: [
        'Действующий ВНЖ или долгосрочная виза D любой шенгенской страны позволяют ездить в Швейцарию без визы до 90 дней в любые 180. Ирландский и кипрский ВНЖ не подходят.',
        'Шенгенская виза другой страны действует и в Швейцарии в пределах своих дат и числа дней. Первую поездку лучше совершить в страну, выдавшую визу.',
      ],
      passports: {
        RU: 'Швейцария продолжает рассматривать туристические заявления россиян, но с ноября 2025 года визы, как правило, однократные, а сбор — полный. Прямых рейсов нет — летают через Стамбул или Белград; российские карты не работают, банки строго проверяют счета россиян.',
        US: 'Гражданам США виза не нужна: 90 дней в любые 180 по общему шенгенскому счёту. ETIAS будет действовать и для Швейцарии, но его запуск отложен — раньше 2027 года его не ждут.',
        GB: 'Британцы ограничены 90 днями в 180 по общему шенгенскому счёту. Паспорт должен быть моложе 10 лет на дату въезда и действовать ещё 3 месяца после выезда.',
        UA: 'Граждане Украины с биометрическим паспортом въезжают без визы на 90 дней в 180. Швейцарский защитный статус S продлён до марта 2027 года.',
        IN: 'Гражданам Индии нужна шенгенская виза. По правилу «каскада» после двух правильно использованных виз за три года дают многократную визу на 2 года, затем на 5 лет.',
        CN: 'Гражданам Китая нужна шенгенская виза; перед летом и «Золотой неделей» записи в швейцарские центры разбирают за недели.',
      },
    },
    en: {
      summary:
        'Switzerland is not in the EU but is in Schengen: EU, EEA and Liechtenstein citizens enter with an ID card, while US, UK, Canadian, Australian, Japanese, Brazilian, Ukrainian and other visa-exempt travellers stay up to 90 days in any 180, counted across the whole Schengen area. Russian, Indian, Chinese, Turkish and many other passport holders need a Schengen visa; the rules are published by the migration office on sem.admin.ch.',
      apply:
        'Apply to the Swiss mission for where you live; in most countries TLScontact or VFS Global take documents and fingerprints. The fee is the equivalent of €90, charged in local currency, plus the centre’s service charge; decisions usually take 15 days. If your main goal is a ski resort on the French or Italian border, count your nights: apply where you spend the most.',
      visaRun:
        'Visa runs don’t work: the 90 days are counted across the whole Schengen area over any rolling 180-day window, and all of Switzerland’s neighbours — France, Germany, Austria, Italy and Liechtenstein — are Schengen too. Leaving the zone only pauses the clock; since April 2026 the EES records every entry and exit.',
      transit:
        'Changing planes in Zurich or Geneva between two non-Schengen flights needs no visa for most nationalities, as long as you stay airside. Citizens on the common airport-transit-visa list (Afghanistan, Bangladesh, Iran, Nigeria, Pakistan and others) and a few nationalities Switzerland adds need one, unless they hold a valid US, Canadian, Japanese or EEA visa or residence permit.',
      hacks: [
        'Basel-Mulhouse airport sits on French soil with French and Swiss exits, and Geneva has a French sector: you can fly to Switzerland and walk straight out into France without Swiss customs.',
        'Liechtenstein is open from the Swiss side with no checks at all: on a Swiss visa or your visa-free days, you go there like to the next canton.',
        'EU and EFTA citizens can live in Switzerland for up to 3 months without a permit, and job seekers get a short-term permit for a few more months — visa limits don’t apply to them.',
      ],
      pitfalls: [
        'Switzerland isn’t in the EU customs union: goods are checked at the border and on trains — duty-free up to CHF 300 per person, meat and alcohol strictly limited, and cash over CHF 10,000 must be declared if asked.',
        'Staying longer than 3 months or doing any work requires registering with the commune within 14 days (8 in some cantons); hotel tourists don’t need to.',
        'Working for Swiss clients on a tourist visa or visa-free days is forbidden, and permit quotas for non-EU citizens are very tight — you can’t just “work a season” without a permit.',
      ],
      waivers: [
        'A valid residence permit or long-stay D visa from any Schengen country lets you visit Switzerland visa-free for up to 90 days in any 180. Irish and Cypriot permits don’t count.',
        'A Schengen visa issued by another member state is valid in Switzerland within its dates and number of days. Make the first trip to the issuing country.',
      ],
      passports: {
        RU: 'Switzerland still processes tourist applications from Russians, but since November 2025 visas are usually single-entry, and the fee is the full one. There are no direct flights — routes go via Istanbul or Belgrade; Russian bank cards don’t work, and banks scrutinise Russian accounts closely.',
        US: 'US citizens need no visa: 90 days in any 180, counted across all of Schengen. ETIAS will apply to Switzerland too, but it has been delayed and isn’t expected before 2027.',
        GB: 'UK citizens are limited to 90 days in 180 across all of Schengen. Your passport must be under 10 years old on the day you enter and valid for 3 months after you leave.',
        UA: 'Ukrainians with a biometric passport enter visa-free for 90 days in 180. Swiss protection status S has been extended to March 2027.',
        IN: 'Indian citizens need a Schengen visa. Under the EU “cascade”, two visas used correctly within three years earn a 2-year multiple-entry visa, then a 5-year one.',
        CN: 'Chinese citizens need a Schengen visa; before summer and Golden Week, slots at Swiss centres are gone weeks in advance.',
      },
    },
    es: {
      summary:
        'Suiza no está en la UE, pero sí en Schengen: los ciudadanos de la UE, el EEE y Liechtenstein entran con el DNI, y los de EE. UU., Reino Unido, Canadá, Australia, Japón, Brasil, Ucrania y otros países exentos se quedan hasta 90 días en cualquier periodo de 180, contados en todo el espacio Schengen. Quienes tienen pasaporte ruso, indio, chino, turco y muchos otros necesitan visado Schengen; las normas las publica la Secretaría de Migración en sem.admin.ch.',
      apply:
        'Se solicita en la representación suiza que corresponde a tu residencia; en la mayoría de países recogen documentos y huellas TLScontact o VFS Global. La tasa equivale a 90 € y se cobra en moneda local, más la tarifa del centro; la resolución suele tardar 15 días. Si tu objetivo es una estación de esquí en la frontera con Francia o Italia, cuenta las noches: solicita donde pases más.',
      visaRun:
        'Los visa runs no sirven: los 90 días se cuentan en todo Schengen dentro de una ventana móvil de 180, y todos los vecinos de Suiza —Francia, Alemania, Austria, Italia y Liechtenstein— también son Schengen. Salir de la zona solo pausa el contador; desde abril de 2026 el EES registra cada entrada y salida.',
      transit:
        'Para cambiar de avión en Zúrich o Ginebra entre dos vuelos fuera de Schengen la mayoría no necesita visado, si no sale de la zona de tránsito. Los ciudadanos de la lista común de visado de tránsito aeroportuario (Afganistán, Bangladés, Irán, Nigeria, Pakistán y otros) y de algunos países que añade Suiza sí lo necesitan, salvo que tengan visado o residencia vigente de EE. UU., Canadá, Japón o un país del EEE.',
      hacks: [
        'El aeropuerto de Basilea-Mulhouse está en suelo francés y tiene salidas francesa y suiza, y Ginebra tiene un sector francés: puedes volar a Suiza y salir directamente a Francia sin pasar la aduana suiza.',
        'Liechtenstein está abierto desde Suiza sin ningún control: con el visado suizo o tus días sin visado vas allí como a otro cantón.',
        'Los ciudadanos de la UE y la AELC pueden vivir en Suiza hasta 3 meses sin permiso, y quienes buscan empleo obtienen un permiso de corta duración para unos meses más; los límites de visado no les afectan.',
      ],
      pitfalls: [
        'Suiza no está en la unión aduanera de la UE: en la frontera y en los trenes se revisan mercancías —libres de impuestos hasta 300 CHF por persona, carne y alcohol muy limitados— y el efectivo de más de 10 000 CHF debe declararse si te lo piden.',
        'Para quedarte más de 3 meses o trabajar, hay que registrarse en el ayuntamiento en 14 días (8 en algunos cantones); los turistas en hotel no lo necesitan.',
        'Trabajar para clientes suizos con visado turístico o en tus días sin visado está prohibido, y los cupos de permisos para no europeos son muy estrictos: no se puede «hacer una temporada» sin permiso.',
      ],
      waivers: [
        'Un permiso de residencia o un visado nacional D vigente de cualquier país Schengen te permite visitar Suiza sin visado hasta 90 días en 180. Los permisos de Irlanda y Chipre no valen.',
        'Un visado Schengen expedido por otro Estado miembro vale en Suiza dentro de sus fechas y su número de días. Haz el primer viaje al país emisor.',
      ],
      passports: {
        RU: 'Suiza sigue tramitando solicitudes turísticas de ciudadanos rusos, pero desde noviembre de 2025 los visados suelen ser de una sola entrada y la tasa es la completa. No hay vuelos directos —se vuela vía Estambul o Belgrado—, las tarjetas rusas no funcionan y los bancos examinan con lupa las cuentas de ciudadanos rusos.',
        US: 'Los ciudadanos estadounidenses no necesitan visado: 90 días en 180, contados en todo Schengen. El ETIAS también se aplicará en Suiza, pero se ha retrasado y no se espera antes de 2027.',
        GB: 'Los británicos tienen un límite de 90 días en 180 en todo Schengen. El pasaporte debe tener menos de 10 años el día de entrada y seguir vigente 3 meses después de salir.',
        UA: 'Los ucranianos con pasaporte biométrico entran sin visado durante 90 días en 180. El estatus de protección S suizo se ha prorrogado hasta marzo de 2027.',
        IN: 'Los ciudadanos indios necesitan visado Schengen. Con la «cascada» europea, dos visados bien usados en tres años dan uno de entradas múltiples de 2 años y luego de 5.',
        CN: 'Los ciudadanos chinos necesitan visado Schengen; antes del verano y de la Semana Dorada, las citas en los centros suizos se agotan con semanas de antelación.',
      },
    },
    de: {
      summary:
        'Die Schweiz ist nicht in der EU, aber im Schengen-Raum: Bürger der EU, des EWR und Liechtensteins reisen mit dem Ausweis ein, Reisende aus den USA, Großbritannien, Kanada, Australien, Japan, Brasilien, der Ukraine und anderen visumfreien Ländern bleiben bis zu 90 Tage in jedem 180-Tage-Zeitraum, gezählt im ganzen Schengen-Raum. Mit russischem, indischem, chinesischem, türkischem und vielen anderen Pässen brauchst du ein Schengen-Visum; die Regeln veröffentlicht das Staatssekretariat für Migration auf sem.admin.ch.',
      apply:
        'Zuständig ist die Schweizer Vertretung an deinem Wohnort; in den meisten Ländern nehmen TLScontact oder VFS Global Unterlagen und Fingerabdrücke entgegen. Die Gebühr entspricht 90 € und wird in Landeswährung erhoben, dazu kommt die Servicegebühr; die Entscheidung dauert meist 15 Tage. Ist dein Hauptziel ein Skiort an der Grenze zu Frankreich oder Italien, zähl die Nächte: Zuständig ist das Land mit den meisten.',
      visaRun:
        'Visa-Runs funktionieren nicht: Die 90 Tage gelten für den ganzen Schengen-Raum in einem rollierenden 180-Tage-Fenster, und alle Nachbarn der Schweiz – Frankreich, Deutschland, Österreich, Italien und Liechtenstein – sind ebenfalls Schengen. Wer den Raum verlässt, hält den Zähler nur an; seit April 2026 erfasst das EES jede Ein- und Ausreise.',
      transit:
        'Beim Umsteigen in Zürich oder Genf zwischen zwei Flügen außerhalb von Schengen brauchen die meisten kein Visum, solange sie im Transitbereich bleiben. Staatsangehörige auf der gemeinsamen Liste für Flughafentransitvisa (Afghanistan, Bangladesch, Iran, Nigeria, Pakistan u. a.) und einiger von der Schweiz ergänzter Länder benötigen eines – außer mit gültigem Visum oder Aufenthaltstitel der USA, Kanadas, Japans oder eines EWR-Staats.',
      hacks: [
        'Der Flughafen Basel-Mulhouse liegt auf französischem Boden und hat einen französischen und einen Schweizer Ausgang, Genf hat einen französischen Sektor: Du kannst in die Schweiz fliegen und direkt nach Frankreich hinausgehen, ohne Schweizer Zoll.',
        'Liechtenstein ist von der Schweiz aus ganz ohne Kontrollen offen: Mit Schweizer Visum oder deinen visumfreien Tagen fährst du hin wie in den Nachbarkanton.',
        'EU- und EFTA-Bürger dürfen bis zu 3 Monate ohne Bewilligung in der Schweiz leben, Stellensuchende erhalten eine Kurzaufenthaltsbewilligung für einige weitere Monate – Visabeschränkungen gelten für sie nicht.',
      ],
      pitfalls: [
        'Die Schweiz gehört nicht zur EU-Zollunion: An der Grenze und in Zügen wird Ware kontrolliert – zollfrei bis 300 CHF pro Person, Fleisch und Alkohol streng begrenzt, und Bargeld über 10.000 CHF musst du auf Nachfrage deklarieren.',
        'Wer länger als 3 Monate bleibt oder arbeitet, muss sich binnen 14 Tagen bei der Gemeinde anmelden (in manchen Kantonen 8); Hotelgäste auf Urlaub nicht.',
        'Arbeit für Schweizer Kunden mit Touristenvisum oder in visumfreien Tagen ist verboten, und die Kontingente für Nicht-EU-Bürger sind sehr knapp – „eine Saison jobben“ ohne Bewilligung geht nicht.',
      ],
      waivers: [
        'Mit einem gültigen Aufenthaltstitel oder nationalen D-Visum eines Schengen-Staats reist du bis zu 90 Tage in 180 visumfrei in die Schweiz. Irische und zyprische Titel zählen nicht.',
        'Ein Schengen-Visum eines anderen Mitgliedstaats gilt innerhalb seiner Daten und Tage auch in der Schweiz. Die erste Reise sollte ins ausstellende Land gehen.',
      ],
      passports: {
        RU: 'Die Schweiz bearbeitet weiterhin touristische Anträge russischer Staatsangehöriger, seit November 2025 aber meist für eine Einreise und zur vollen Gebühr. Direktflüge gibt es nicht – man fliegt über Istanbul oder Belgrad; russische Bankkarten funktionieren nicht, und Banken prüfen Konten russischer Staatsangehöriger genau.',
        US: 'US-Bürger brauchen kein Visum: 90 Tage in 180, gezählt im ganzen Schengen-Raum. ETIAS wird auch für die Schweiz gelten, verzögert sich aber und wird nicht vor 2027 erwartet.',
        GB: 'Briten dürfen 90 Tage in 180 im ganzen Schengen-Raum bleiben. Der Pass muss am Einreisetag jünger als 10 Jahre sein und noch 3 Monate nach der Ausreise gelten.',
        UA: 'Ukrainer mit biometrischem Pass reisen 90 Tage in 180 visumfrei ein. Der Schweizer Schutzstatus S wurde bis März 2027 verlängert.',
        IN: 'Indische Staatsangehörige brauchen ein Schengen-Visum. Nach der EU-„Kaskade“ gibt es nach zwei korrekt genutzten Visa in drei Jahren ein Mehrfachvisum für 2 Jahre, danach für 5 Jahre.',
        CN: 'Chinesische Staatsangehörige brauchen ein Schengen-Visum; vor dem Sommer und der Goldenen Woche sind Termine in Schweizer Zentren wochenlang im Voraus weg.',
      },
    },
    fr: {
      summary:
        'La Suisse n’est pas dans l’UE mais fait partie de Schengen : les citoyens de l’UE, de l’EEE et du Liechtenstein entrent avec leur carte d’identité, et les voyageurs américains, britanniques, canadiens, australiens, japonais, brésiliens, ukrainiens et d’autres pays exemptés restent jusqu’à 90 jours sur 180, comptés dans tout l’espace Schengen. Les titulaires d’un passeport russe, indien, chinois, turc et de nombreux autres ont besoin d’un visa Schengen ; les règles sont publiées par le Secrétariat d’État aux migrations sur sem.admin.ch.',
      apply:
        'La demande se fait à la représentation suisse compétente pour votre lieu de résidence ; dans la plupart des pays, TLScontact ou VFS Global reçoivent dossiers et empreintes. Les frais équivalent à 90 € et sont perçus en monnaie locale, plus ceux du centre ; la décision prend en général 15 jours. Si votre but principal est une station de ski à la frontière française ou italienne, comptez vos nuits : déposez là où il y en a le plus.',
      visaRun:
        'Les visa runs ne fonctionnent pas : les 90 jours se comptent sur tout l’espace Schengen dans une fenêtre glissante de 180, et tous les voisins de la Suisse — France, Allemagne, Autriche, Italie, Liechtenstein — sont aussi dans Schengen. Sortir de la zone ne fait que suspendre le compteur ; depuis avril 2026, l’EES enregistre chaque entrée et sortie.',
      transit:
        'Une correspondance à Zurich ou Genève entre deux vols hors Schengen ne demande pas de visa à la plupart des nationalités, tant que vous restez en zone de transit. Les ressortissants de la liste commune du visa de transit aéroportuaire (Afghanistan, Bangladesh, Iran, Nigeria, Pakistan, etc.) et de quelques pays ajoutés par la Suisse en ont besoin, sauf s’ils détiennent un visa ou un titre de séjour valide des États-Unis, du Canada, du Japon ou d’un pays de l’EEE.',
      hacks: [
        'L’aéroport de Bâle-Mulhouse est en territoire français avec une sortie française et une suisse, et Genève a un secteur français : vous pouvez atterrir en Suisse et sortir directement en France, sans douane suisse.',
        'Le Liechtenstein est ouvert côté suisse, sans aucun contrôle : avec un visa suisse ou vos jours sans visa, on y va comme dans le canton voisin.',
        'Les citoyens de l’UE et de l’AELE peuvent vivre en Suisse jusqu’à 3 mois sans autorisation, et les demandeurs d’emploi obtiennent une autorisation de courte durée pour quelques mois de plus — les limites de visa ne les concernent pas.',
      ],
      pitfalls: [
        'La Suisse n’est pas dans l’union douanière de l’UE : les marchandises sont contrôlées à la frontière et dans les trains — franchise jusqu’à 300 CHF par personne, viande et alcool strictement limités, et l’argent liquide au-delà de 10 000 CHF doit être déclaré sur demande.',
        'Pour rester plus de 3 mois ou travailler, il faut s’annoncer à la commune dans les 14 jours (8 dans certains cantons) ; les touristes à l’hôtel n’ont rien à faire.',
        'Travailler pour des clients suisses avec un visa touristique ou pendant vos jours sans visa est interdit, et les contingents d’autorisations pour les non-Européens sont très serrés : impossible de « faire une saison » sans permis.',
      ],
      waivers: [
        'Un titre de séjour ou un visa long séjour D valide d’un pays Schengen vous permet de venir en Suisse sans visa jusqu’à 90 jours sur 180. Les titres irlandais et chypriotes ne comptent pas.',
        'Un visa Schengen délivré par un autre État membre est valable en Suisse dans la limite de ses dates et de ses jours. Effectuez le premier voyage dans le pays émetteur.',
      ],
      passports: {
        RU: 'La Suisse continue de traiter les demandes touristiques des ressortissants russes, mais depuis novembre 2025 les visas sont en général à entrée unique, au tarif plein. Pas de vols directs : on passe par Istanbul ou Belgrade ; les cartes bancaires russes ne fonctionnent pas et les banques examinent de près les comptes des ressortissants russes.',
        US: 'Les citoyens américains n’ont pas besoin de visa : 90 jours sur 180, comptés dans tout Schengen. L’ETIAS s’appliquera aussi à la Suisse, mais il a été repoussé et n’est pas attendu avant 2027.',
        GB: 'Les Britanniques sont limités à 90 jours sur 180 dans tout Schengen. Le passeport doit avoir moins de 10 ans le jour de l’entrée et rester valable 3 mois après la sortie.',
        UA: 'Les Ukrainiens munis d’un passeport biométrique entrent sans visa pour 90 jours sur 180. Le statut de protection S suisse a été prolongé jusqu’en mars 2027.',
        IN: 'Les citoyens indiens ont besoin d’un visa Schengen. Selon la « cascade » européenne, deux visas bien utilisés en trois ans ouvrent droit à un visa à entrées multiples de 2 ans, puis de 5 ans.',
        CN: 'Les citoyens chinois ont besoin d’un visa Schengen ; avant l’été et la Semaine d’or, les créneaux des centres suisses partent des semaines à l’avance.',
      },
    },
    it: {
      summary:
        'La Svizzera non è nell’UE ma fa parte di Schengen: i cittadini di UE, SEE e Liechtenstein entrano con la carta d’identità, mentre chi ha passaporto di Stati Uniti, Regno Unito, Canada, Australia, Giappone, Brasile, Ucraina e altri paesi esenti resta fino a 90 giorni su 180, contati in tutta l’area Schengen. Chi ha passaporto russo, indiano, cinese, turco e di molti altri paesi ha bisogno del visto Schengen; le regole le pubblica la Segreteria di Stato della migrazione su sem.admin.ch.',
      apply:
        'Si fa domanda alla rappresentanza svizzera competente per la tua residenza; nella maggior parte dei paesi documenti e impronte li raccolgono TLScontact o VFS Global. La tassa equivale a 90 € e si paga in valuta locale, più il costo del centro; la decisione arriva di solito in 15 giorni. Se la meta principale è una stazione sciistica al confine con Francia o Italia, conta le notti: fai domanda dove ne passi di più.',
      visaRun:
        'I visa run non funzionano: i 90 giorni si contano su tutta l’area Schengen in una finestra mobile di 180, e tutti i vicini della Svizzera — Francia, Germania, Austria, Italia e Liechtenstein — sono Schengen. Uscire dall’area mette solo in pausa il contatore; dall’aprile 2026 l’EES registra ogni ingresso e uscita.',
      transit:
        'Per cambiare aereo a Zurigo o Ginevra tra due voli fuori Schengen la maggior parte delle nazionalità non ha bisogno di visto, se resta nella zona di transito. I cittadini della lista comune del visto di transito aeroportuale (Afghanistan, Bangladesh, Iran, Nigeria, Pakistan e altri) e di alcuni paesi aggiunti dalla Svizzera devono averlo, a meno di avere un visto o un permesso valido di Stati Uniti, Canada, Giappone o di un paese SEE.',
      hacks: [
        'L’aeroporto di Basilea-Mulhouse è in territorio francese con un’uscita francese e una svizzera, e Ginevra ha un settore francese: puoi volare in Svizzera e uscire direttamente in Francia, senza dogana svizzera.',
        'Il Liechtenstein è aperto dal lato svizzero senza alcun controllo: con il visto svizzero o i tuoi giorni senza visto ci vai come nel cantone accanto.',
        'I cittadini UE e AELS possono vivere in Svizzera fino a 3 mesi senza permesso, e chi cerca lavoro ottiene un permesso di breve durata per qualche mese in più: i limiti dei visti non li riguardano.',
      ],
      pitfalls: [
        'La Svizzera non fa parte dell’unione doganale UE: alla frontiera e sui treni si controllano le merci — esenzione fino a 300 CHF a persona, carne e alcol molto limitati — e i contanti oltre 10.000 CHF vanno dichiarati se richiesto.',
        'Per restare più di 3 mesi o lavorare bisogna notificarsi al comune entro 14 giorni (8 in alcuni cantoni); i turisti in hotel non devono farlo.',
        'Lavorare per clienti svizzeri con un visto turistico o nei giorni senza visto è vietato, e i contingenti di permessi per i cittadini extra UE sono strettissimi: non si può «fare una stagione» senza permesso.',
      ],
      waivers: [
        'Un permesso di soggiorno o un visto nazionale D valido di qualsiasi paese Schengen ti permette di visitare la Svizzera senza visto fino a 90 giorni su 180. I permessi irlandesi e ciprioti non valgono.',
        'Un visto Schengen rilasciato da un altro Stato membro vale anche in Svizzera entro le sue date e i suoi giorni. Fai il primo viaggio nel paese che l’ha rilasciato.',
      ],
      passports: {
        RU: 'La Svizzera continua a esaminare le domande turistiche dei cittadini russi, ma da novembre 2025 i visti sono di solito a ingresso singolo, a tariffa piena. Non ci sono voli diretti — si passa da Istanbul o Belgrado —, le carte russe non funzionano e le banche controllano da vicino i conti dei cittadini russi.',
        US: 'I cittadini statunitensi non hanno bisogno di visto: 90 giorni su 180, contati in tutto Schengen. L’ETIAS varrà anche per la Svizzera, ma è stato rinviato e non è atteso prima del 2027.',
        GB: 'I britannici hanno il limite di 90 giorni su 180 in tutto Schengen. Il passaporto deve avere meno di 10 anni il giorno dell’ingresso e valere ancora 3 mesi dopo l’uscita.',
        UA: 'Gli ucraini con passaporto biometrico entrano senza visto per 90 giorni su 180. Lo statuto di protezione S svizzero è stato prorogato fino a marzo 2027.',
        IN: 'I cittadini indiani hanno bisogno del visto Schengen. Con la «cascata» europea, due visti usati correttamente in tre anni danno un visto multiplo di 2 anni e poi di 5.',
        CN: 'I cittadini cinesi hanno bisogno del visto Schengen; prima dell’estate e della Settimana d’oro gli appuntamenti nei centri svizzeri finiscono settimane prima.',
      },
    },
  },
};

export default guide;
