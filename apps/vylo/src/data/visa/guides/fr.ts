import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'FR',
  checked: '2026-10',
  fees: { visa: { kind: 'fixed', amount: 90, currency: 'EUR' } },
  stay: { visa: 90 },
  links: { immigration: 'https://france-visas.gouv.fr' },
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
        'Франция входит в Шенген: граждане ЕС, ЕЭЗ и Швейцарии въезжают по ID-карте, а граждане США, Великобритании, Канады, Австралии, Японии, Бразилии, Украины и других безвизовых стран остаются до 90 дней в любые 180. Россиянам, индийцам, китайцам, туркам и многим другим нужна шенгенская виза за 90 €, анкета заполняется на france-visas.gouv.fr.',
      apply:
        'Заполните анкету на france-visas.gouv.fr и запишитесь в визовый центр, который укажет портал (TLScontact или VFS Global — зависит от страны): там сдают отпечатки и документы. Сбор — 90 € (45 € для детей 6–11 лет) плюс сервисный сбор центра; решение обычно занимает 15 дней, летом — до 45. Подавайте за 1–6 месяцев до поездки и приложите страховку с покрытием от 30 000 €.',
      visaRun:
        'Визаран не работает: 90 дней считаются по всему Шенгену в скользящем окне 180 дней, и поездка в Лондон, Андорру или Марокко счётчик не обнуляет — дни просто не идут, пока вы снаружи. С апреля 2026 года система EES полностью заработала и фиксирует каждый въезд и выезд в электронном виде, так что перерасчёт виден автоматически.',
      transit:
        'Пересадка в аэропорту Шарль-де-Голль между двумя рейсами за пределы Шенгена большинству не требует визы, если не выходить из транзитной зоны. Гражданам из общего списка ЕС (Афганистан, Бангладеш, Иран, Нигерия, Пакистан и др.) и нескольких стран, добавленных Францией, нужна транзитная виза — кроме владельцев действующей визы или ВНЖ США, Канады, Японии или страны ЕЭЗ. Переезд между Шарль-де-Голлем и Орли — это всегда въезд во Францию.',
      hacks: [
        'Заморские департаменты — Мартиника, Гваделупа, Реюньон, Французская Гвиана — не входят в Шенген: шенгенская виза туда не действует, зато дни, проведённые там, не расходуют ваши 90/180.',
        'Монако не имеет границы с Францией и фактически входит в шенгенское пространство: по французской визе или безвизовым дням туда можно ездить без каких-либо формальностей.',
        'На «Евростаре» и паромах из Дувра французский пограничный контроль, включая регистрацию в EES, проходит ещё в Великобритании — на вокзале Сент-Панкрас или в порту. В сезон приезжайте на Сент-Панкрас минимум за 90 минут.',
        'Для долгого пребывания без работы на французских клиентов есть долгосрочная виза «посетителя» (VLS-TS visiteur) на год: нужно показать доход примерно на уровне минимальной зарплаты — около 1400 € в месяц.',
        'Запись открывается за шесть месяцев — берите слот сразу: весной и летом в Индии, Китае и Турции окна пропадают за недели, а платные «премиум»-слоты не ускоряют само решение.',
      ],
      pitfalls: [
        'Сайты-двойники берут деньги за «помощь» с анкетой. Официальный портал только france-visas.gouv.fr, а визовый сбор платят в визовом центре.',
        'Подавайте во Францию, только если она — основная страна поездки (больше всего ночей) или, при равном числе ночей, страна первого въезда. Визу, полученную «потому что запись быстрее», могут поставить под вопрос на границе.',
        'Андорра вне Шенгена: по однократной визе поездка на день из Перпиньяна или Тулузы «съедает» ваш въезд, и обратно во Францию не пустят.',
      ],
      waivers: [
        'Действующий ВНЖ или долгосрочная виза D любой шенгенской страны позволяют ездить во Францию без визы до 90 дней в любые 180. Ирландский и кипрский ВНЖ не подходят, паспорт тоже должен быть действующим.',
        'Шенгенская виза другой страны действует и во Франции в пределах своих дат и числа дней. Первую поездку логично совершить в страну, выдавшую визу, если она была заявлена как основная.',
      ],
      passports: {
        RU: 'Россияне платят полный сбор 90 €, а с ноября 2025 года, как правило, получают только однократные визы. Подавать можно во французских визовых центрах в России или в стране, где у вас есть ВНЖ. Прямых рейсов нет — летают через Стамбул, Белград или Ереван; российские карты во Франции не работают, внутренний паспорт не годится.',
        US: 'Гражданам США виза не нужна: 90 дней в любые 180. Запуск ETIAS (20 €) отложен, раньше 2027 года его не ждут — пока ничего оформлять не нужно, но проверьте travel-europe.europa.eu перед вылетом.',
        GB: 'После Брексита британцы ограничены 90 днями в 180. Паспорт должен быть выдан менее 10 лет назад на дату въезда и действовать ещё 3 месяца после выезда — из-за «старых» паспортов с лишними месяцами часто не пускают на борт.',
        IN: 'Гражданам Индии нужна шенгенская виза. По правилу «каскада» после двух правильно использованных виз за три года дают многократную визу на 2 года, затем на 5 лет; выпускникам французской магистратуры Франция выдаёт пятилетнюю визу сразу.',
        UA: 'Граждане Украины с биометрическим паспортом въезжают без визы на 90 дней в любые 180. Временная защита в другой стране ЕС (продлена до марта 2027 года) позволяет ездить во Францию по тем же правилам 90/180.',
        CN: 'Гражданам Китая нужна шенгенская виза. Ранее правильно использованные шенгенские визы повышают шансы на долгую многократную; центры в Пекине и Шанхае перегружены перед летом и «Золотой неделей».',
      },
    },
    en: {
      summary:
        'France is in Schengen: EU, EEA and Swiss citizens enter with an ID card, while US, UK, Canadian, Australian, Japanese, Brazilian, Ukrainian and other visa-exempt travellers stay up to 90 days in any 180. Russian, Indian, Chinese, Turkish and many other passport holders need a Schengen visa (€90), applied for on france-visas.gouv.fr.',
      apply:
        'Fill in the form on france-visas.gouv.fr, then book an appointment at the visa centre it points you to (TLScontact or VFS Global, depending on the country) to give fingerprints and documents. The fee is €90 (€45 for children aged 6–11) plus the centre’s service charge; decisions usually take 15 days but can stretch to 45 in summer. Apply 1–6 months ahead with travel insurance covering at least €30,000.',
      visaRun:
        'Visa runs don’t work: the 90 days are counted across the whole Schengen area over any rolling 180-day window, and a trip to London, Andorra or Morocco doesn’t reset the clock — the days simply stop counting while you’re out. Since the EES went fully live in April 2026, every entry and exit is recorded digitally, so overstays show up automatically.',
      transit:
        'Airside connections at Paris-Charles de Gaulle between two non-Schengen flights need no visa for most nationalities, as long as you stay in the international zone. Citizens on the EU airport-transit-visa list (Afghanistan, Bangladesh, Iran, Nigeria, Pakistan and others) and a few nationalities France adds need an airport transit visa, unless they hold a valid US, Canadian, Japanese or EEA visa or residence permit. Changing between CDG and Orly always means entering France.',
      hacks: [
        'The overseas departments — Martinique, Guadeloupe, Réunion, French Guiana — are outside Schengen: a Schengen visa doesn’t cover them, but days spent there don’t use up your 90/180 either.',
        'Monaco has no border with France and is effectively part of the Schengen area: you can visit on a French visa or your visa-free days with no extra formalities.',
        'On the Eurostar and Dover ferries, French border checks, including EES enrolment, happen in the UK — at St Pancras or the port. In peak season, get to St Pancras at least 90 minutes before departure.',
        'For a longer stay without working for French clients, the long-stay visitor visa (VLS-TS visiteur) gives up to a year; you need income of roughly the net minimum wage, about €1,400 a month.',
        'Appointments open six months ahead — grab one early: in spring and summer slots in India, China and Turkey vanish weeks in advance, and paid “premium” slots don’t speed up the decision itself.',
      ],
      pitfalls: [
        'Look-alike sites charge for “help” with the form. The only official portal is france-visas.gouv.fr, and the visa fee is paid at the visa centre.',
        'Apply to France only if it’s your main destination (most nights) or, with equal nights, your first point of entry. A visa obtained “because the appointment was faster” can be questioned at the border.',
        'Andorra is outside Schengen: on a single-entry visa, a day trip from Perpignan or Toulouse uses up your entry and you won’t be let back into France.',
      ],
      waivers: [
        'A valid residence permit or long-stay D visa from any Schengen country lets you visit France visa-free for up to 90 days in any 180. Irish and Cypriot permits don’t count, and your passport must be valid too.',
        'A Schengen visa issued by another member state is valid in France within its dates and number of days. Make the first trip to the issuing country if it was your declared main destination.',
      ],
      passports: {
        RU: 'Russian citizens pay the full €90 fee and, since November 2025, usually get single-entry visas only. Apply at the French visa centres in Russia or in a country where you hold residence. There are no direct flights — routes go via Istanbul, Belgrade or Yerevan; Russian bank cards don’t work in France, and the internal passport isn’t accepted.',
        US: 'US citizens need no visa: 90 days in any 180. ETIAS (€20) has been delayed and isn’t expected before 2027 — nothing to file yet, but check travel-europe.europa.eu before you fly.',
        GB: 'Since Brexit, UK citizens are limited to 90 days in 180. Your passport must have been issued less than 10 years before the day you enter and be valid for 3 months after you leave — older passports with extra months are a common reason for refused boarding.',
        IN: 'Indian citizens need a Schengen visa. Under the EU “cascade”, two visas used correctly within three years earn a 2-year multiple-entry visa, then a 5-year one; holders of a French master’s degree get a 5-year visa straight away.',
        UA: 'Ukrainians with a biometric passport enter visa-free for 90 days in any 180. Temporary protection in another EU country (extended to March 2027) lets you travel to France under the same 90/180 rule.',
        CN: 'Chinese citizens need a Schengen visa. Previous Schengen visas used correctly improve your chances of a long multiple-entry one; the centres in Beijing and Shanghai get swamped before the summer holidays and Golden Week.',
      },
    },
    es: {
      summary:
        'Francia forma parte de Schengen: los ciudadanos de la UE, el EEE y Suiza entran con el DNI, y los de EE. UU., Reino Unido, Canadá, Australia, Japón, Brasil, Ucrania y otros países exentos se quedan hasta 90 días en cualquier periodo de 180. Quienes tienen pasaporte ruso, indio, chino, turco y muchos otros necesitan un visado Schengen (90 €), que se solicita en france-visas.gouv.fr.',
      apply:
        'Rellena el formulario en france-visas.gouv.fr y pide cita en el centro de visados que te indique (TLScontact o VFS Global, según el país) para dejar las huellas y los documentos. La tasa es de 90 € (45 € para menores de 6 a 11 años) más la tarifa del centro; la resolución suele tardar 15 días, pero en verano puede llegar a 45. Solicítalo con 1–6 meses de antelación y con un seguro de viaje de al menos 30 000 € de cobertura.',
      visaRun:
        'Los visa runs no sirven: los 90 días se cuentan en todo el espacio Schengen dentro de una ventana móvil de 180, y una escapada a Londres, Andorra o Marruecos no pone el contador a cero; los días solo dejan de correr mientras estás fuera. Desde que el EES funciona a pleno rendimiento (abril de 2026), cada entrada y salida queda registrada digitalmente y los excesos de estancia salen solos.',
      transit:
        'Para conectar en el aeropuerto de París-Charles de Gaulle entre dos vuelos fuera de Schengen, la mayoría no necesita visado si no sale de la zona internacional. Los ciudadanos de la lista europea de visado de tránsito aeroportuario (Afganistán, Bangladés, Irán, Nigeria, Pakistán y otros) y de algunos países que añade Francia sí lo necesitan, salvo que tengan visado o residencia vigente de EE. UU., Canadá, Japón o un país del EEE. Cambiar entre CDG y Orly siempre implica entrar en Francia.',
      hacks: [
        'Los departamentos de ultramar —Martinica, Guadalupe, Reunión, Guayana Francesa— están fuera de Schengen: el visado Schengen no vale allí, pero los días que pases en ellos tampoco gastan tus 90/180.',
        'Mónaco no tiene frontera con Francia y en la práctica forma parte del espacio Schengen: puedes ir con el visado francés o con tus días sin visado sin ningún trámite extra.',
        'En el Eurostar y en los ferris desde Dover, el control fronterizo francés, incluido el registro en el EES, se hace todavía en el Reino Unido: en St Pancras o en el puerto. En temporada alta, llega a St Pancras con al menos 90 minutos de margen.',
        'Para una estancia larga sin trabajar para clientes franceses existe el visado de larga duración de visitante (VLS-TS visiteur), de hasta un año: hay que acreditar ingresos parecidos al salario mínimo neto, unos 1400 € al mes.',
        'Las citas se abren seis meses antes: resérvala cuanto antes, porque en primavera y verano los huecos en India, China y Turquía desaparecen con semanas de antelación, y las citas «premium» de pago no aceleran la decisión.',
      ],
      pitfalls: [
        'Hay webs clonadas que cobran por «ayudarte» con el formulario. El único portal oficial es france-visas.gouv.fr y la tasa se paga en el centro de visados.',
        'Solicita en Francia solo si es tu destino principal (donde pasas más noches) o, con las mismas noches, tu primer punto de entrada. Un visado pedido allí «porque había cita antes» puede generar preguntas en la frontera.',
        'Andorra está fuera de Schengen: con un visado de una sola entrada, una excursión de un día desde Perpiñán o Toulouse gasta tu entrada y no podrás volver a Francia.',
      ],
      waivers: [
        'Un permiso de residencia o un visado nacional D vigente de cualquier país Schengen te permite visitar Francia sin visado hasta 90 días en 180. Los permisos de Irlanda y Chipre no valen, y el pasaporte también debe estar en vigor.',
        'Un visado Schengen expedido por otro Estado miembro vale en Francia dentro de sus fechas y su número de días. Haz el primer viaje al país emisor si lo declaraste como destino principal.',
      ],
      passports: {
        RU: 'Los ciudadanos rusos pagan la tasa completa de 90 € y, desde noviembre de 2025, suelen recibir solo visados de una entrada. Puedes solicitarlo en los centros de visados franceses en Rusia o en un país donde tengas residencia. No hay vuelos directos —se vuela vía Estambul, Belgrado o Ereván—, las tarjetas rusas no funcionan en Francia y el pasaporte interno no sirve.',
        US: 'Los ciudadanos estadounidenses no necesitan visado: 90 días en 180. El ETIAS (20 €) se ha retrasado y no se espera antes de 2027; de momento no hay nada que tramitar, pero revisa travel-europe.europa.eu antes de volar.',
        GB: 'Desde el Brexit, los británicos tienen un límite de 90 días en 180. El pasaporte debe haberse expedido hace menos de 10 años el día de entrada y seguir vigente 3 meses después de la salida: los pasaportes antiguos con meses añadidos son un motivo habitual de denegación de embarque.',
        IN: 'Los ciudadanos indios necesitan visado Schengen. Con la «cascada» europea, dos visados bien usados en tres años dan derecho a uno de entradas múltiples de 2 años y luego de 5; quienes tienen un máster francés reciben directamente un visado de 5 años.',
        UA: 'Los ucranianos con pasaporte biométrico entran sin visado durante 90 días en 180. La protección temporal en otro país de la UE (prorrogada hasta marzo de 2027) permite viajar a Francia con la misma regla de 90/180.',
        CN: 'Los ciudadanos chinos necesitan visado Schengen. Haber usado bien visados anteriores mejora las opciones de obtener uno largo de entradas múltiples; los centros de Pekín y Shanghái se saturan antes del verano y de la Semana Dorada.',
      },
    },
    de: {
      summary:
        'Frankreich gehört zu Schengen: Bürger der EU, des EWR und der Schweiz reisen mit dem Personalausweis ein, Reisende aus den USA, Großbritannien, Kanada, Australien, Japan, Brasilien, der Ukraine und anderen visumfreien Ländern bleiben bis zu 90 Tage in jedem 180-Tage-Zeitraum. Wer einen russischen, indischen, chinesischen, türkischen oder vielen anderen Pässen hat, braucht ein Schengen-Visum (90 €), beantragt über france-visas.gouv.fr.',
      apply:
        'Fülle das Formular auf france-visas.gouv.fr aus und buche einen Termin beim angegebenen Visazentrum (je nach Land TLScontact oder VFS Global), wo du Fingerabdrücke und Unterlagen abgibst. Die Gebühr beträgt 90 € (45 € für Kinder von 6 bis 11 Jahren) plus Servicegebühr; die Entscheidung dauert meist 15 Tage, im Sommer bis zu 45. Beantrage es 1–6 Monate vorher und mit einer Reiseversicherung über mindestens 30.000 €.',
      visaRun:
        'Visa-Runs funktionieren nicht: Die 90 Tage gelten für den gesamten Schengen-Raum in einem rollierenden 180-Tage-Fenster, und ein Ausflug nach London, Andorra oder Marokko setzt den Zähler nicht zurück – die Tage laufen nur nicht weiter, solange du draußen bist. Seit das EES im April 2026 voll in Betrieb ist, wird jede Ein- und Ausreise digital erfasst, Überziehungen fallen also automatisch auf.',
      transit:
        'Beim Umsteigen in Paris-Charles de Gaulle zwischen zwei Flügen außerhalb des Schengen-Raums brauchen die meisten kein Visum, solange sie im Transitbereich bleiben. Staatsangehörige auf der EU-Liste für Flughafentransitvisa (Afghanistan, Bangladesch, Iran, Nigeria, Pakistan u. a.) und einiger von Frankreich ergänzter Länder benötigen eines – außer mit gültigem Visum oder Aufenthaltstitel der USA, Kanadas, Japans oder eines EWR-Staats. Ein Wechsel zwischen CDG und Orly bedeutet immer die Einreise nach Frankreich.',
      hacks: [
        'Die Überseedepartements – Martinique, Guadeloupe, Réunion, Französisch-Guayana – gehören nicht zu Schengen: Das Schengen-Visum gilt dort nicht, dafür verbrauchen Tage dort auch nicht deine 90/180.',
        'Monaco hat keine Grenze zu Frankreich und gehört praktisch zum Schengen-Raum: Mit französischem Visum oder deinen visumfreien Tagen fährst du ohne weitere Formalitäten hin.',
        'Bei Eurostar und den Fähren ab Dover findet die französische Grenzkontrolle samt EES-Registrierung schon in Großbritannien statt – in St Pancras oder im Hafen. In der Hochsaison solltest du mindestens 90 Minuten vor Abfahrt in St Pancras sein.',
        'Für einen längeren Aufenthalt ohne Arbeit für französische Kunden gibt es das Langzeitvisum für Besucher (VLS-TS visiteur) für bis zu ein Jahr; nötig ist ein Einkommen etwa in Höhe des Netto-Mindestlohns, rund 1.400 € im Monat.',
        'Termine werden sechs Monate im Voraus freigeschaltet – buche früh: Im Frühjahr und Sommer sind Slots in Indien, China und der Türkei wochenlang vorher weg, und kostenpflichtige „Premium“-Termine beschleunigen die Entscheidung nicht.',
      ],
      pitfalls: [
        'Nachgemachte Seiten kassieren für „Hilfe“ beim Formular. Das einzige offizielle Portal ist france-visas.gouv.fr, die Visagebühr zahlst du im Visazentrum.',
        'Beantrage in Frankreich nur, wenn es dein Hauptreiseziel ist (die meisten Nächte) oder bei gleich vielen Nächten das Land der ersten Einreise. Ein Visum, das du „wegen des schnelleren Termins“ dort geholt hast, kann an der Grenze Fragen auslösen.',
        'Andorra liegt außerhalb von Schengen: Mit einem Visum für eine Einreise verbraucht ein Tagesausflug ab Perpignan oder Toulouse deine Einreise, und zurück nach Frankreich kommst du nicht.',
      ],
      waivers: [
        'Mit einem gültigen Aufenthaltstitel oder nationalen D-Visum eines Schengen-Staats reist du bis zu 90 Tage in 180 visumfrei nach Frankreich. Irische und zyprische Titel zählen nicht, und auch dein Pass muss gültig sein.',
        'Ein Schengen-Visum eines anderen Mitgliedstaats gilt innerhalb seiner Daten und Tage auch in Frankreich. Die erste Reise sollte ins ausstellende Land gehen, wenn es als Hauptziel angegeben war.',
      ],
      passports: {
        RU: 'Russische Staatsangehörige zahlen die volle Gebühr von 90 € und erhalten seit November 2025 meist nur Visa für eine Einreise. Beantragt wird in den französischen Visazentren in Russland oder in einem Land, in dem du einen Aufenthaltstitel hast. Direktflüge gibt es nicht – man fliegt über Istanbul, Belgrad oder Jerewan; russische Bankkarten funktionieren in Frankreich nicht, der Inlandspass wird nicht akzeptiert.',
        US: 'US-Bürger brauchen kein Visum: 90 Tage in 180. ETIAS (20 €) verzögert sich und wird nicht vor 2027 erwartet – noch ist nichts zu beantragen, prüfe aber vor dem Flug travel-europe.europa.eu.',
        GB: 'Seit dem Brexit gilt für Briten die Grenze von 90 Tagen in 180. Der Pass muss am Einreisetag jünger als 10 Jahre sein und noch 3 Monate nach der Ausreise gelten – ältere Pässe mit übertragenen Monaten sind ein häufiger Grund für verweigertes Boarding.',
        IN: 'Indische Staatsangehörige brauchen ein Schengen-Visum. Nach der EU-„Kaskade“ gibt es nach zwei korrekt genutzten Visa in drei Jahren ein Mehrfachvisum für 2 Jahre, danach für 5 Jahre; wer einen französischen Master hat, bekommt sofort ein 5-Jahres-Visum.',
        UA: 'Ukrainer mit biometrischem Pass reisen 90 Tage in 180 visumfrei ein. Wer in einem anderen EU-Land vorübergehenden Schutz hat (verlängert bis März 2027), reist nach derselben 90/180-Regel nach Frankreich.',
        CN: 'Chinesische Staatsangehörige brauchen ein Schengen-Visum. Korrekt genutzte frühere Visa verbessern die Chancen auf ein langes Mehrfachvisum; die Zentren in Peking und Shanghai sind vor den Sommerferien und der Goldenen Woche überlastet.',
      },
    },
    fr: {
      summary:
        'La France fait partie de Schengen : les citoyens de l’UE, de l’EEE et de la Suisse entrent avec leur carte d’identité, et les voyageurs américains, britanniques, canadiens, australiens, japonais, brésiliens, ukrainiens et d’autres pays exemptés restent jusqu’à 90 jours sur toute période de 180. Les titulaires d’un passeport russe, indien, chinois, turc et de nombreux autres ont besoin d’un visa Schengen (90 €), demandé sur france-visas.gouv.fr.',
      apply:
        'Remplissez le formulaire sur france-visas.gouv.fr, puis prenez rendez-vous au centre de visas indiqué (TLScontact ou VFS Global selon le pays) pour les empreintes et le dépôt du dossier. Les frais sont de 90 € (45 € pour les enfants de 6 à 11 ans), plus ceux du prestataire ; la décision prend en général 15 jours, jusqu’à 45 en été. Déposez la demande 1 à 6 mois avant le départ, avec une assurance voyage couvrant au moins 30 000 €.',
      visaRun:
        'Les visa runs ne fonctionnent pas : les 90 jours se comptent sur tout l’espace Schengen dans une fenêtre glissante de 180, et un saut à Londres, en Andorre ou au Maroc ne remet pas le compteur à zéro — les jours cessent seulement de courir pendant que vous êtes dehors. Depuis la mise en service complète de l’EES en avril 2026, chaque entrée et sortie est enregistrée numériquement : les dépassements apparaissent automatiquement.',
      transit:
        'Une correspondance à Paris-Charles-de-Gaulle entre deux vols hors Schengen ne demande pas de visa à la plupart des nationalités, tant que vous restez en zone internationale. Les ressortissants de la liste européenne du visa de transit aéroportuaire (Afghanistan, Bangladesh, Iran, Nigeria, Pakistan, etc.) et de quelques pays ajoutés par la France en ont besoin, sauf s’ils détiennent un visa ou un titre de séjour valide des États-Unis, du Canada, du Japon ou d’un pays de l’EEE. Passer de CDG à Orly implique toujours d’entrer en France.',
      hacks: [
        'Les départements d’outre-mer — Martinique, Guadeloupe, La Réunion, Guyane — sont hors Schengen : le visa Schengen n’y est pas valable, mais les jours passés là-bas n’entament pas non plus vos 90/180.',
        'Monaco n’a pas de frontière avec la France et fait de fait partie de l’espace Schengen : vous pouvez y aller avec un visa français ou vos jours sans visa, sans aucune formalité.',
        'Dans l’Eurostar et sur les ferries au départ de Douvres, le contrôle frontalier français, enregistrement EES compris, a lieu au Royaume-Uni — à St Pancras ou au port. En haute saison, arrivez à St Pancras au moins 90 minutes avant le départ.',
        'Pour un long séjour sans travailler pour des clients français, il existe le visa long séjour « visiteur » (VLS-TS visiteur), jusqu’à un an : il faut justifier de ressources proches du SMIC net, environ 1 400 € par mois.',
        'Les rendez-vous ouvrent six mois à l’avance : réservez tôt, car au printemps et en été les créneaux en Inde, en Chine et en Turquie disparaissent des semaines avant, et les créneaux « premium » payants n’accélèrent pas la décision.',
      ],
      pitfalls: [
        'Des sites copiés facturent une « aide » au formulaire. Le seul portail officiel est france-visas.gouv.fr, et les frais de visa se paient au centre de visas.',
        'Ne déposez en France que si c’est votre destination principale (le plus de nuits) ou, à nombre de nuits égal, votre premier point d’entrée. Un visa obtenu « parce que le rendez-vous était plus rapide » peut susciter des questions à la frontière.',
        'L’Andorre est hors Schengen : avec un visa à entrée unique, une excursion d’une journée depuis Perpignan ou Toulouse consomme votre entrée et vous ne pourrez pas revenir en France.',
      ],
      waivers: [
        'Un titre de séjour ou un visa long séjour D valide d’un pays Schengen vous permet de venir en France sans visa jusqu’à 90 jours sur 180. Les titres irlandais et chypriotes ne comptent pas, et votre passeport doit aussi être valide.',
        'Un visa Schengen délivré par un autre État membre est valable en France dans la limite de ses dates et de son nombre de jours. Effectuez le premier voyage dans le pays émetteur s’il était déclaré comme destination principale.',
      ],
      passports: {
        RU: 'Les ressortissants russes paient les frais complets de 90 € et, depuis novembre 2025, n’obtiennent en général que des visas à entrée unique. La demande se fait dans les centres de visas français en Russie ou dans un pays où vous résidez légalement. Pas de vols directs : on passe par Istanbul, Belgrade ou Erevan ; les cartes bancaires russes ne fonctionnent pas en France et le passeport intérieur n’est pas accepté.',
        US: 'Les citoyens américains n’ont pas besoin de visa : 90 jours sur 180. L’ETIAS (20 €) a été repoussé et n’est pas attendu avant 2027 — rien à remplir pour l’instant, mais vérifiez travel-europe.europa.eu avant de partir.',
        GB: 'Depuis le Brexit, les Britanniques sont limités à 90 jours sur 180. Le passeport doit avoir moins de 10 ans le jour de l’entrée et rester valable 3 mois après la sortie : les anciens passeports avec des mois reportés sont une cause fréquente de refus d’embarquement.',
        IN: 'Les citoyens indiens ont besoin d’un visa Schengen. Selon la « cascade » européenne, deux visas bien utilisés en trois ans ouvrent droit à un visa à entrées multiples de 2 ans, puis de 5 ans ; les diplômés d’un master français reçoivent directement un visa de 5 ans.',
        UA: 'Les Ukrainiens munis d’un passeport biométrique entrent sans visa pour 90 jours sur 180. La protection temporaire dans un autre pays de l’UE (prolongée jusqu’en mars 2027) permet de venir en France selon la même règle des 90/180.',
        CN: 'Les citoyens chinois ont besoin d’un visa Schengen. Des visas précédents bien utilisés augmentent les chances d’obtenir un long visa à entrées multiples ; les centres de Pékin et Shanghai saturent avant les vacances d’été et la Semaine d’or.',
      },
    },
    it: {
      summary:
        'La Francia fa parte di Schengen: i cittadini di UE, SEE e Svizzera entrano con la carta d’identità, mentre chi ha passaporto di Stati Uniti, Regno Unito, Canada, Australia, Giappone, Brasile, Ucraina e altri paesi esenti resta fino a 90 giorni in qualsiasi periodo di 180. Chi ha passaporto russo, indiano, cinese, turco e di molti altri paesi ha bisogno di un visto Schengen (90 €), da richiedere su france-visas.gouv.fr.',
      apply:
        'Compila il modulo su france-visas.gouv.fr e prenota un appuntamento al centro visti indicato (TLScontact o VFS Global, a seconda del paese) per impronte e documenti. La tassa è di 90 € (45 € per i bambini dai 6 agli 11 anni) più il costo del servizio; la decisione arriva di solito in 15 giorni, d’estate anche in 45. Fai domanda da 1 a 6 mesi prima, con un’assicurazione di viaggio con copertura di almeno 30.000 €.',
      visaRun:
        'I visa run non funzionano: i 90 giorni si contano su tutta l’area Schengen in una finestra mobile di 180, e un salto a Londra, in Andorra o in Marocco non azzera il contatore — i giorni smettono solo di scorrere mentre sei fuori. Da quando l’EES è pienamente operativo (aprile 2026), ogni ingresso e uscita viene registrato digitalmente e i soggiorni oltre il limite emergono in automatico.',
      transit:
        'Per uno scalo a Parigi-Charles de Gaulle tra due voli fuori Schengen la maggior parte delle nazionalità non ha bisogno di visto, se resta nella zona internazionale. I cittadini della lista UE del visto di transito aeroportuale (Afghanistan, Bangladesh, Iran, Nigeria, Pakistan e altri) e di alcuni paesi aggiunti dalla Francia devono averlo, a meno di avere un visto o un permesso valido di Stati Uniti, Canada, Giappone o di un paese SEE. Spostarsi tra CDG e Orly significa sempre entrare in Francia.',
      hacks: [
        'I dipartimenti d’oltremare — Martinica, Guadalupa, Riunione, Guyana francese — sono fuori Schengen: il visto Schengen lì non vale, ma i giorni trascorsi lì non consumano nemmeno i tuoi 90/180.',
        'Monaco non ha confine con la Francia e di fatto fa parte dell’area Schengen: ci vai con il visto francese o con i tuoi giorni senza visto, senza altre formalità.',
        'Sull’Eurostar e sui traghetti da Dover il controllo di frontiera francese, registrazione EES compresa, si fa ancora nel Regno Unito: a St Pancras o al porto. In alta stagione arriva a St Pancras almeno 90 minuti prima.',
        'Per un soggiorno lungo senza lavorare per clienti francesi c’è il visto di lunga durata per visitatori (VLS-TS visiteur), fino a un anno: servono entrate più o meno pari al salario minimo netto, circa 1.400 € al mese.',
        'Gli appuntamenti si aprono sei mesi prima: prenota subito, perché in primavera ed estate in India, Cina e Turchia gli slot spariscono settimane prima, e quelli «premium» a pagamento non accelerano la decisione.',
      ],
      pitfalls: [
        'Siti fotocopia si fanno pagare per «aiutarti» con il modulo. L’unico portale ufficiale è france-visas.gouv.fr, e la tassa del visto si paga al centro visti.',
        'Fai domanda in Francia solo se è la tua destinazione principale (più notti) o, a parità di notti, il primo paese d’ingresso. Un visto chiesto lì «perché c’era posto prima» può sollevare domande alla frontiera.',
        'Andorra è fuori Schengen: con un visto a ingresso singolo, una gita di un giorno da Perpignan o Tolosa consuma il tuo ingresso e non potrai rientrare in Francia.',
      ],
      waivers: [
        'Un permesso di soggiorno o un visto nazionale D valido di qualsiasi paese Schengen ti permette di visitare la Francia senza visto fino a 90 giorni su 180. I permessi irlandesi e ciprioti non valgono, e anche il passaporto deve essere valido.',
        'Un visto Schengen rilasciato da un altro Stato membro vale anche in Francia entro le sue date e il suo numero di giorni. Fai il primo viaggio nel paese che l’ha rilasciato, se l’avevi indicato come destinazione principale.',
      ],
      passports: {
        RU: 'I cittadini russi pagano la tassa piena di 90 € e da novembre 2025 ricevono di solito solo visti a ingresso singolo. Si fa domanda nei centri visti francesi in Russia o in un paese in cui hai la residenza. Non ci sono voli diretti — si passa da Istanbul, Belgrado o Erevan; le carte russe in Francia non funzionano e il passaporto interno non è valido.',
        US: 'I cittadini statunitensi non hanno bisogno di visto: 90 giorni su 180. L’ETIAS (20 €) è stato rinviato e non è atteso prima del 2027 — per ora non c’è niente da compilare, ma controlla travel-europe.europa.eu prima di partire.',
        GB: 'Dopo la Brexit i britannici hanno il limite di 90 giorni su 180. Il passaporto deve essere stato rilasciato da meno di 10 anni il giorno dell’ingresso e valere ancora 3 mesi dopo l’uscita: i vecchi passaporti con mesi aggiunti sono un motivo frequente di imbarco negato.',
        IN: 'I cittadini indiani hanno bisogno del visto Schengen. Con la «cascata» europea, due visti usati correttamente in tre anni danno diritto a un visto multiplo di 2 anni e poi di 5; chi ha un master francese riceve subito un visto di 5 anni.',
        UA: 'Gli ucraini con passaporto biometrico entrano senza visto per 90 giorni su 180. La protezione temporanea in un altro paese UE (prorogata fino a marzo 2027) permette di andare in Francia con la stessa regola 90/180.',
        CN: 'I cittadini cinesi hanno bisogno del visto Schengen. Aver usato correttamente visti precedenti aumenta le possibilità di ottenerne uno multiplo lungo; i centri di Pechino e Shanghai si intasano prima delle vacanze estive e della Settimana d’oro.',
      },
    },
  },
};

export default guide;
