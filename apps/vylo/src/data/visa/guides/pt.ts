import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'PT',
  checked: '2026-10',
  fees: { visa: { kind: 'fixed', amount: 90, currency: 'EUR' } },
  stay: { visa: 90 },
  links: { immigration: 'https://vistos.mne.gov.pt' },
  docs: ['insurance', 'returnTicket', 'booking', 'finance'],
  passportMonths: 3,
  rule: { days: 90, window: 180 },
  visaRun: 'no',
  transit: { hours: 24 },
  nomad: { name: 'Digital nomad visa (D8)', months: 12, income: { kind: 'from', amount: 3680, currency: 'EUR' } },
  waivers: [
    { holds: ['resEU'], status: 'free', days: 90 },
    { holds: ['visaSchengen'], status: 'free', days: 90 },
  ],
  text: {
    ru: {
      summary:
        'Португалия входит в Шенген: граждане ЕС, ЕЭЗ и Швейцарии въезжают по ID-карте, а граждане Бразилии, США, Великобритании, Канады, Австралии, Японии, Украины и других безвизовых стран — до 90 дней в любые 180. Россиянам, индийцам, китайцам, туркам, ангольцам и многим другим нужна шенгенская виза за 90 €; заявление начинают на vistos.mne.gov.pt.',
      apply:
        'Заполните анкету на vistos.mne.gov.pt, затем сдайте документы и отпечатки в консульстве или визовом центре — в большинстве стран это VFS Global. Сбор — 90 € плюс сервисный, решение — обычно 15 дней. Если Португалия — часть поездки по Испании, подавайте туда, где проведёте больше ночей.',
      visaRun:
        'Визаран не работает: 90 дней считаются по всему Шенгену в скользящем окне 180 дней, и вылет в Марокко или Лондон счётчик не обнуляет. С апреля 2026 года EES фиксирует каждый въезд и выезд, так что перерасчёт заметят при выезде.',
      transit:
        'Пересадка в Лиссабоне между двумя рейсами за пределы Шенгена — например, из Бразилии в Африку или США — большинству не требует визы, если не выходить из транзитной зоны. Гражданам из общего списка ЕС (Афганистан, Бангладеш, Гана, Нигерия, Пакистан и др.) нужна транзитная виза — кроме владельцев действующей визы или ВНЖ США, Канады, Японии или страны ЕЭЗ.',
      nomad:
        'Виза для цифровых кочевников (D8) — для тех, кто работает удалённо на иностранных работодателей или клиентов: доход от четырёх минимальных зарплат, в 2026 году — 3680 € в месяц. Есть два варианта: виза временного пребывания до года или виза на проживание на 4 месяца с последующим ВНЖ на два года через AIMA.',
      hacks: [
        'Для жизни на пенсию или пассивный доход есть виза D7 с заметно более низким порогом — от одной минимальной зарплаты (920 € в месяц в 2026 году) плюс сбережения на год.',
        'Виза для поиска работы даёт 120 дней (с продлением ещё на 60) легально искать работу в Португалии; найдя её, можно подать на ВНЖ, не уезжая.',
        'Граждане Бразилии и других стран CPLP (Ангола, Кабо-Верде, Мозамбик и др.) могут получить визу на проживание по соглашению о мобильности CPLP с упрощёнными требованиями.',
        'Мадейра и Азорские острова — тоже Шенген: рейсы из Лиссабона туда внутренние, дополнительная виза не нужна, и дни там считаются в общий срок.',
      ],
      pitfalls: [
        'Записи в AIMA на ВНЖ и биометрию ждут месяцами — планируйте запас и не позволяйте визе D закончиться до приёма; сохраняйте подтверждение записи.',
        '«Золотую визу» за покупку жилья отменили в 2023 году. Агентства, которые до сих пор её предлагают за недвижимость, вводят в заблуждение — остались только варианты с фондами и другими инвестициями.',
        'Если вы приехали из другой шенгенской страны и живёте не в отеле, закон требует в течение 3 рабочих дней заявить о въезде (declaração de entrada); отели и зарегистрированные апартаменты регистрируют гостей сами.',
      ],
      waivers: [
        'Действующий ВНЖ или долгосрочная виза D любой шенгенской страны позволяют ездить в Португалию без визы до 90 дней в любые 180. Ирландский и кипрский ВНЖ не подходят.',
        'Шенгенская виза другой страны действует и в Португалии, включая Мадейру и Азоры, в пределах своих дат и числа дней. Первую поездку лучше совершить в страну, выдавшую визу.',
      ],
      passports: {
        RU: 'Португальские визы в России выдают ограниченно, а с ноября 2025 года, как правило, однократные; сбор — полные 90 €. Часто проще подать в стране, где у вас есть ВНЖ. Прямых рейсов нет — летают через Стамбул; российские карты не работают.',
        BR: 'Бразильцам виза не нужна (90 дней в 180), а для переезда есть упрощённая виза CPLP. На границе в Лиссабоне могут спросить обратный билет, жильё и деньги — держите их под рукой.',
        US: 'Гражданам США виза не нужна: 90 дней в любые 180. Запуск ETIAS (20 €) отложен, раньше 2027 года его не ждут.',
        GB: 'Британцы ограничены 90 днями в 180. Паспорт должен быть моложе 10 лет на дату въезда и действовать ещё 3 месяца после выезда; для зимовки дольше нужна виза D7 или D8.',
        IN: 'Гражданам Индии нужна шенгенская виза через VFS. По правилу «каскада» после двух правильно использованных виз за три года дают многократную визу на 2 года, затем на 5 лет.',
        UA: 'Граждане Украины с биометрическим паспортом въезжают без визы на 90 дней в 180; временная защита в ЕС продлена до марта 2027 года.',
      },
    },
    en: {
      summary:
        'Portugal is in Schengen: EU, EEA and Swiss citizens enter with an ID card, while Brazilian, US, UK, Canadian, Australian, Japanese, Ukrainian and other visa-exempt travellers stay up to 90 days in any 180. Russian, Indian, Chinese, Turkish, Angolan and many other passport holders need a €90 Schengen visa, started on vistos.mne.gov.pt.',
      apply:
        'Fill in the form on vistos.mne.gov.pt, then hand in documents and fingerprints at the consulate or visa centre — VFS Global in most countries. The fee is €90 plus the service charge, and decisions usually take 15 days. If Portugal is part of a trip through Spain, apply to whichever country gets more of your nights.',
      visaRun:
        'Visa runs don’t work: the 90 days are counted across the whole Schengen area over any rolling 180-day window, and a flight to Morocco or London doesn’t reset the clock. Since April 2026 the EES records every entry and exit, so an overstay is spotted when you leave.',
      transit:
        'Changing planes in Lisbon between two non-Schengen flights — say, from Brazil to Africa or the US — needs no visa for most nationalities, as long as you stay airside. Citizens on the EU airport-transit-visa list (Afghanistan, Bangladesh, Ghana, Nigeria, Pakistan and others) need one, unless they hold a valid US, Canadian, Japanese or EEA visa or residence permit.',
      nomad:
        'The digital nomad visa (D8) is for remote workers employed by or billing foreign companies: income of at least four times the minimum wage — €3,680 a month in 2026. There are two versions: a temporary-stay visa for up to a year, or a 4-month residence visa followed by a two-year residence permit from AIMA.',
      hacks: [
        'For pensions or passive income there’s the D7 visa with a much lower bar — from one minimum wage (€920 a month in 2026) plus a year’s savings.',
        'The job-seeker visa gives you 120 days (extendable by 60) to look for work in Portugal legally; once you find a job, you can apply for residence without leaving.',
        'Citizens of Brazil and other CPLP countries (Angola, Cape Verde, Mozambique and others) can get a residence visa under the CPLP mobility agreement with simpler requirements.',
        'Madeira and the Azores are Schengen too: flights there from Lisbon are domestic, no extra visa is needed, and days there count towards the same limit.',
      ],
      pitfalls: [
        'AIMA appointments for residence permits and biometrics take months — build in a buffer, don’t let your D visa expire before the appointment, and keep the booking confirmation.',
        'The golden visa for buying property was scrapped in 2023. Agencies still selling it via real estate are misleading you — only fund and other investment routes remain.',
        'If you arrived from another Schengen country and aren’t staying in a hotel, the law requires you to declare your entry (declaração de entrada) within 3 working days; hotels and registered holiday lets register guests themselves.',
      ],
      waivers: [
        'A valid residence permit or long-stay D visa from any Schengen country lets you visit Portugal visa-free for up to 90 days in any 180. Irish and Cypriot permits don’t count.',
        'A Schengen visa issued by another member state is valid in Portugal, Madeira and the Azores included, within its dates and number of days. Make the first trip to the issuing country.',
      ],
      passports: {
        RU: 'Portugal issues few visas in Russia, and since November 2025 they’re usually single-entry; the fee is the full €90. It’s often easier to apply in a country where you hold residence. There are no direct flights — routes go via Istanbul; Russian bank cards don’t work.',
        BR: 'Brazilians need no visa (90 days in 180), and the CPLP visa makes moving easier. At Lisbon border control you may be asked for a return ticket, accommodation and funds — keep them to hand.',
        US: 'US citizens need no visa: 90 days in any 180. ETIAS (€20) has been delayed and isn’t expected before 2027.',
        GB: 'UK citizens are limited to 90 days in 180. Your passport must be under 10 years old on the day you enter and valid for 3 months after you leave; wintering for longer takes a D7 or D8 visa.',
        IN: 'Indian citizens need a Schengen visa via VFS. Under the EU “cascade”, two visas used correctly within three years earn a 2-year multiple-entry visa, then a 5-year one.',
        UA: 'Ukrainians with a biometric passport enter visa-free for 90 days in 180; temporary protection in the EU runs until March 2027.',
      },
    },
    es: {
      summary:
        'Portugal forma parte de Schengen: los ciudadanos de la UE, el EEE y Suiza entran con el DNI, y los de Brasil, EE. UU., Reino Unido, Canadá, Australia, Japón, Ucrania y otros países exentos se quedan hasta 90 días en cualquier periodo de 180. Quienes tienen pasaporte ruso, indio, chino, turco, angoleño y muchos otros necesitan un visado Schengen de 90 €, que se inicia en vistos.mne.gov.pt.',
      apply:
        'Rellena el formulario en vistos.mne.gov.pt y luego entrega los documentos y las huellas en el consulado o el centro de visados, que en la mayoría de países es VFS Global. La tasa es de 90 € más el servicio y la resolución suele tardar 15 días. Si Portugal forma parte de un viaje por España, solicita en el país donde pases más noches.',
      visaRun:
        'Los visa runs no sirven: los 90 días se cuentan en todo Schengen dentro de una ventana móvil de 180, y un vuelo a Marruecos o Londres no pone el contador a cero. Desde abril de 2026 el EES registra cada entrada y salida, así que el exceso de estancia se detecta al salir.',
      transit:
        'Para cambiar de avión en Lisboa entre dos vuelos fuera de Schengen —por ejemplo, de Brasil a África o EE. UU.— la mayoría no necesita visado, si no sale de la zona de tránsito. Los ciudadanos de la lista europea de visado de tránsito aeroportuario (Afganistán, Bangladés, Ghana, Nigeria, Pakistán y otros) sí lo necesitan, salvo que tengan visado o residencia vigente de EE. UU., Canadá, Japón o un país del EEE.',
      nomad:
        'El visado de nómada digital (D8) es para quien teletrabaja para empresas o clientes extranjeros: ingresos de al menos cuatro salarios mínimos, 3680 € al mes en 2026. Hay dos versiones: un visado de estancia temporal de hasta un año o un visado de residencia de 4 meses seguido de un permiso de residencia de dos años de la AIMA.',
      hacks: [
        'Para vivir de una pensión o de rentas está el visado D7, con un umbral mucho más bajo: desde un salario mínimo (920 € al mes en 2026) más ahorros para un año.',
        'El visado de búsqueda de empleo da 120 días (prorrogables 60 más) para buscar trabajo legalmente en Portugal; si lo encuentras, puedes pedir la residencia sin salir del país.',
        'Los ciudadanos de Brasil y otros países de la CPLP (Angola, Cabo Verde, Mozambique, etc.) pueden obtener un visado de residencia por el acuerdo de movilidad de la CPLP, con requisitos más sencillos.',
        'Madeira y las Azores también son Schengen: los vuelos desde Lisboa son nacionales, no hace falta otro visado y los días allí cuentan para el mismo límite.',
      ],
      pitfalls: [
        'Las citas de la AIMA para la residencia y la biometría tardan meses: deja margen, no dejes que tu visado D caduque antes de la cita y guarda la confirmación.',
        'La golden visa por compra de vivienda se suprimió en 2023. Las agencias que aún la venden con inmuebles te están engañando: solo quedan las vías de fondos y otras inversiones.',
        'Si llegaste desde otro país Schengen y no te alojas en un hotel, la ley exige declarar la entrada (declaração de entrada) en 3 días hábiles; hoteles y alojamientos registrados inscriben a sus huéspedes.',
      ],
      waivers: [
        'Un permiso de residencia o un visado nacional D vigente de cualquier país Schengen te permite visitar Portugal sin visado hasta 90 días en 180. Los permisos de Irlanda y Chipre no valen.',
        'Un visado Schengen expedido por otro Estado miembro vale en Portugal, incluidas Madeira y las Azores, dentro de sus fechas y su número de días. Haz el primer viaje al país emisor.',
      ],
      passports: {
        RU: 'Portugal expide pocos visados en Rusia y, desde noviembre de 2025, suelen ser de una sola entrada; la tasa es la completa, 90 €. A menudo es más fácil solicitarlo en un país donde tengas residencia. No hay vuelos directos —se vuela vía Estambul— y las tarjetas rusas no funcionan.',
        BR: 'Los brasileños no necesitan visado (90 días en 180), y el visado CPLP facilita la mudanza. En el control de Lisboa pueden pedirte billete de vuelta, alojamiento y medios económicos: tenlos a mano.',
        US: 'Los ciudadanos estadounidenses no necesitan visado: 90 días en 180. El ETIAS (20 €) se ha retrasado y no se espera antes de 2027.',
        GB: 'Los británicos tienen un límite de 90 días en 180. El pasaporte debe tener menos de 10 años el día de entrada y seguir vigente 3 meses después de salir; para pasar el invierno más tiempo hace falta un D7 o un D8.',
        IN: 'Los ciudadanos indios necesitan visado Schengen a través de VFS. Con la «cascada» europea, dos visados bien usados en tres años dan uno de entradas múltiples de 2 años y luego de 5.',
        UA: 'Los ucranianos con pasaporte biométrico entran sin visado durante 90 días en 180; la protección temporal en la UE dura hasta marzo de 2027.',
      },
    },
    de: {
      summary:
        'Portugal gehört zu Schengen: Bürger der EU, des EWR und der Schweiz reisen mit dem Personalausweis ein, Reisende aus Brasilien, den USA, Großbritannien, Kanada, Australien, Japan, der Ukraine und anderen visumfreien Ländern bleiben bis zu 90 Tage in jedem 180-Tage-Zeitraum. Mit russischem, indischem, chinesischem, türkischem, angolanischem und vielen anderen Pässen brauchst du ein Schengen-Visum für 90 €, beantragt über vistos.mne.gov.pt.',
      apply:
        'Fülle das Formular auf vistos.mne.gov.pt aus und gib Unterlagen und Fingerabdrücke beim Konsulat oder Visazentrum ab – in den meisten Ländern VFS Global. Die Gebühr beträgt 90 € plus Servicegebühr, die Entscheidung dauert meist 15 Tage. Ist Portugal Teil einer Spanienreise, beantrage dort, wo du mehr Nächte verbringst.',
      visaRun:
        'Visa-Runs funktionieren nicht: Die 90 Tage gelten für den ganzen Schengen-Raum in einem rollierenden 180-Tage-Fenster, und ein Flug nach Marokko oder London setzt den Zähler nicht zurück. Seit April 2026 erfasst das EES jede Ein- und Ausreise, Überziehungen fallen also bei der Ausreise auf.',
      transit:
        'Beim Umsteigen in Lissabon zwischen zwei Flügen außerhalb von Schengen – etwa von Brasilien nach Afrika oder in die USA – brauchen die meisten kein Visum, solange sie im Transitbereich bleiben. Staatsangehörige auf der EU-Liste für Flughafentransitvisa (Afghanistan, Bangladesch, Ghana, Nigeria, Pakistan u. a.) benötigen eines – außer mit gültigem Visum oder Aufenthaltstitel der USA, Kanadas, Japans oder eines EWR-Staats.',
      nomad:
        'Das Digital-Nomad-Visum (D8) gilt für Remote-Arbeitende mit ausländischen Arbeitgebern oder Kunden: Einkommen von mindestens dem Vierfachen des Mindestlohns – 2026 sind das 3.680 € im Monat. Es gibt zwei Varianten: ein Aufenthaltsvisum für bis zu ein Jahr oder ein 4-monatiges Wohnsitzvisum mit anschließender zweijähriger Aufenthaltserlaubnis von der AIMA.',
      hacks: [
        'Für Rente oder passives Einkommen gibt es das D7-Visum mit deutlich niedrigerer Hürde – ab einem Mindestlohn (2026: 920 € im Monat) plus Ersparnisse für ein Jahr.',
        'Das Visum zur Arbeitssuche gibt dir 120 Tage (verlängerbar um 60), um legal in Portugal Arbeit zu suchen; findest du eine Stelle, kannst du den Aufenthaltstitel ohne Ausreise beantragen.',
        'Bürger Brasiliens und anderer CPLP-Staaten (Angola, Kap Verde, Mosambik u. a.) können über das CPLP-Mobilitätsabkommen ein Wohnsitzvisum mit vereinfachten Voraussetzungen bekommen.',
        'Madeira und die Azoren gehören ebenfalls zu Schengen: Flüge ab Lissabon sind Inlandsflüge, ein Zusatzvisum ist nicht nötig, und die Tage dort zählen zum selben Limit.',
      ],
      pitfalls: [
        'AIMA-Termine für Aufenthaltstitel und Biometrie dauern Monate – plane Puffer ein, lass dein D-Visum nicht vor dem Termin ablaufen und bewahre die Terminbestätigung auf.',
        'Das Golden Visa für Immobilienkauf wurde 2023 abgeschafft. Agenturen, die es noch über Immobilien verkaufen, führen dich in die Irre – nur Fonds- und andere Investitionswege sind geblieben.',
        'Bist du aus einem anderen Schengen-Land eingereist und wohnst nicht im Hotel, verlangt das Gesetz binnen 3 Werktagen eine Einreiseerklärung (declaração de entrada); Hotels und registrierte Ferienwohnungen melden ihre Gäste selbst.',
      ],
      waivers: [
        'Mit einem gültigen Aufenthaltstitel oder nationalen D-Visum eines Schengen-Staats reist du bis zu 90 Tage in 180 visumfrei nach Portugal. Irische und zyprische Titel zählen nicht.',
        'Ein Schengen-Visum eines anderen Mitgliedstaats gilt innerhalb seiner Daten und Tage auch in Portugal, Madeira und die Azoren eingeschlossen. Die erste Reise sollte ins ausstellende Land gehen.',
      ],
      passports: {
        RU: 'Portugal stellt in Russland nur wenige Visa aus, seit November 2025 meist für eine Einreise; die Gebühr beträgt volle 90 €. Oft ist es leichter, in einem Land zu beantragen, in dem du einen Aufenthaltstitel hast. Direktflüge gibt es nicht – man fliegt über Istanbul; russische Bankkarten funktionieren nicht.',
        BR: 'Brasilianer brauchen kein Visum (90 Tage in 180), und das CPLP-Visum erleichtert den Umzug. An der Grenze in Lissabon können Rückflugticket, Unterkunft und Geldmittel verlangt werden – halte sie bereit.',
        US: 'US-Bürger brauchen kein Visum: 90 Tage in 180. ETIAS (20 €) verzögert sich und wird nicht vor 2027 erwartet.',
        GB: 'Briten dürfen 90 Tage in 180 bleiben. Der Pass muss am Einreisetag jünger als 10 Jahre sein und noch 3 Monate nach der Ausreise gelten; wer länger überwintern will, braucht ein D7- oder D8-Visum.',
        IN: 'Indische Staatsangehörige brauchen ein Schengen-Visum über VFS. Nach der EU-„Kaskade“ gibt es nach zwei korrekt genutzten Visa in drei Jahren ein Mehrfachvisum für 2 Jahre, danach für 5 Jahre.',
        UA: 'Ukrainer mit biometrischem Pass reisen 90 Tage in 180 visumfrei ein; der vorübergehende Schutz in der EU gilt bis März 2027.',
      },
    },
    fr: {
      summary:
        'Le Portugal fait partie de Schengen : les citoyens de l’UE, de l’EEE et de la Suisse entrent avec leur carte d’identité, et les voyageurs brésiliens, américains, britanniques, canadiens, australiens, japonais, ukrainiens et d’autres pays exemptés restent jusqu’à 90 jours sur 180. Les titulaires d’un passeport russe, indien, chinois, turc, angolais et de nombreux autres ont besoin d’un visa Schengen à 90 €, à commencer sur vistos.mne.gov.pt.',
      apply:
        'Remplissez le formulaire sur vistos.mne.gov.pt, puis déposez documents et empreintes au consulat ou au centre de visas — VFS Global dans la plupart des pays. Les frais sont de 90 € plus le service, et la décision prend en général 15 jours. Si le Portugal s’inscrit dans un voyage en Espagne, déposez dans le pays où vous passerez le plus de nuits.',
      visaRun:
        'Les visa runs ne fonctionnent pas : les 90 jours se comptent sur tout l’espace Schengen dans une fenêtre glissante de 180, et un vol pour le Maroc ou Londres ne remet pas le compteur à zéro. Depuis avril 2026, l’EES enregistre chaque entrée et sortie : un dépassement se voit à la sortie.',
      transit:
        'Une correspondance à Lisbonne entre deux vols hors Schengen — par exemple du Brésil vers l’Afrique ou les États-Unis — ne demande pas de visa à la plupart des nationalités, tant que vous restez en zone de transit. Les ressortissants de la liste européenne du visa de transit aéroportuaire (Afghanistan, Bangladesh, Ghana, Nigeria, Pakistan, etc.) en ont besoin, sauf s’ils détiennent un visa ou un titre de séjour valide des États-Unis, du Canada, du Japon ou d’un pays de l’EEE.',
      nomad:
        'Le visa nomade numérique (D8) s’adresse aux télétravailleurs employés par des entreprises ou des clients étrangers : revenus d’au moins quatre fois le salaire minimum, soit 3 680 € par mois en 2026. Il existe deux versions : un visa de séjour temporaire jusqu’à un an, ou un visa de résidence de 4 mois suivi d’un titre de séjour de deux ans délivré par l’AIMA.',
      hacks: [
        'Pour une retraite ou des revenus passifs, il existe le visa D7, au seuil bien plus bas : à partir d’un salaire minimum (920 € par mois en 2026) plus une année d’épargne.',
        'Le visa de recherche d’emploi donne 120 jours (prolongeables de 60) pour chercher légalement du travail au Portugal ; une fois un poste trouvé, vous pouvez demander le titre de séjour sans repartir.',
        'Les citoyens du Brésil et des autres pays de la CPLP (Angola, Cap-Vert, Mozambique, etc.) peuvent obtenir un visa de résidence au titre de l’accord de mobilité de la CPLP, aux conditions simplifiées.',
        'Madère et les Açores sont aussi dans Schengen : les vols depuis Lisbonne sont intérieurs, aucun visa supplémentaire n’est nécessaire et les jours passés là-bas comptent dans la même limite.',
      ],
      pitfalls: [
        'Les rendez-vous à l’AIMA pour le titre de séjour et la biométrie prennent des mois : prévoyez de la marge, ne laissez pas votre visa D expirer avant le rendez-vous et gardez la confirmation.',
        'Le golden visa par achat immobilier a été supprimé en 2023. Les agences qui le vendent encore via l’immobilier vous induisent en erreur : seules restent les voies des fonds et d’autres investissements.',
        'Si vous arrivez d’un autre pays Schengen et ne logez pas à l’hôtel, la loi impose de déclarer votre entrée (declaração de entrada) sous 3 jours ouvrés ; hôtels et locations déclarées enregistrent eux-mêmes leurs clients.',
      ],
      waivers: [
        'Un titre de séjour ou un visa long séjour D valide d’un pays Schengen vous permet de venir au Portugal sans visa jusqu’à 90 jours sur 180. Les titres irlandais et chypriotes ne comptent pas.',
        'Un visa Schengen délivré par un autre État membre est valable au Portugal, Madère et Açores compris, dans la limite de ses dates et de ses jours. Effectuez le premier voyage dans le pays émetteur.',
      ],
      passports: {
        RU: 'Le Portugal délivre peu de visas en Russie et, depuis novembre 2025, ils sont en général à entrée unique ; les frais sont de 90 € plein tarif. Il est souvent plus simple de déposer dans un pays où vous résidez légalement. Pas de vols directs : on passe par Istanbul ; les cartes bancaires russes ne fonctionnent pas.',
        BR: 'Les Brésiliens n’ont pas besoin de visa (90 jours sur 180), et le visa CPLP facilite l’installation. Au contrôle de Lisbonne, on peut vous demander billet retour, hébergement et ressources : gardez-les à portée de main.',
        US: 'Les citoyens américains n’ont pas besoin de visa : 90 jours sur 180. L’ETIAS (20 €) a été repoussé et n’est pas attendu avant 2027.',
        GB: 'Les Britanniques sont limités à 90 jours sur 180. Le passeport doit avoir moins de 10 ans le jour de l’entrée et rester valable 3 mois après la sortie ; pour hiverner plus longtemps, il faut un visa D7 ou D8.',
        IN: 'Les citoyens indiens ont besoin d’un visa Schengen via VFS. Selon la « cascade » européenne, deux visas bien utilisés en trois ans ouvrent droit à un visa à entrées multiples de 2 ans, puis de 5 ans.',
        UA: 'Les Ukrainiens munis d’un passeport biométrique entrent sans visa pour 90 jours sur 180 ; la protection temporaire dans l’UE court jusqu’en mars 2027.',
      },
    },
    it: {
      summary:
        'Il Portogallo fa parte di Schengen: i cittadini di UE, SEE e Svizzera entrano con la carta d’identità, mentre chi ha passaporto di Brasile, Stati Uniti, Regno Unito, Canada, Australia, Giappone, Ucraina e altri paesi esenti resta fino a 90 giorni su 180. Chi ha passaporto russo, indiano, cinese, turco, angolano e di molti altri paesi ha bisogno di un visto Schengen da 90 €, da avviare su vistos.mne.gov.pt.',
      apply:
        'Compila il modulo su vistos.mne.gov.pt, poi consegna documenti e impronte al consolato o al centro visti, che nella maggior parte dei paesi è VFS Global. La tassa è di 90 € più il servizio e la decisione arriva di solito in 15 giorni. Se il Portogallo fa parte di un viaggio in Spagna, fai domanda nel paese dove passerai più notti.',
      visaRun:
        'I visa run non funzionano: i 90 giorni si contano su tutta l’area Schengen in una finestra mobile di 180, e un volo in Marocco o a Londra non azzera il contatore. Dall’aprile 2026 l’EES registra ogni ingresso e uscita, quindi chi supera il limite viene notato all’uscita.',
      transit:
        'Per cambiare aereo a Lisbona tra due voli fuori Schengen — per esempio dal Brasile verso l’Africa o gli Stati Uniti — la maggior parte delle nazionalità non ha bisogno di visto, se resta nella zona di transito. I cittadini della lista UE del visto di transito aeroportuale (Afghanistan, Bangladesh, Ghana, Nigeria, Pakistan e altri) devono averlo, a meno di avere un visto o un permesso valido di Stati Uniti, Canada, Giappone o di un paese SEE.',
      nomad:
        'Il visto per nomadi digitali (D8) è per chi lavora da remoto per aziende o clienti stranieri: reddito di almeno quattro salari minimi, 3.680 € al mese nel 2026. Ci sono due versioni: un visto di soggiorno temporaneo fino a un anno, oppure un visto di residenza di 4 mesi seguito da un permesso di due anni rilasciato dall’AIMA.',
      hacks: [
        'Per pensione o redditi passivi c’è il visto D7, con una soglia molto più bassa: da un salario minimo (920 € al mese nel 2026) più risparmi per un anno.',
        'Il visto per ricerca di lavoro dà 120 giorni (prorogabili di altri 60) per cercare lavoro legalmente in Portogallo; se lo trovi, puoi chiedere il permesso senza uscire dal paese.',
        'I cittadini del Brasile e degli altri paesi CPLP (Angola, Capo Verde, Mozambico e altri) possono ottenere un visto di residenza grazie all’accordo di mobilità CPLP, con requisiti semplificati.',
        'Madeira e Azzorre sono anch’esse Schengen: i voli da Lisbona sono nazionali, non serve un altro visto e i giorni lì contano nello stesso limite.',
      ],
      pitfalls: [
        'Gli appuntamenti all’AIMA per il permesso e la biometria richiedono mesi: tieniti un margine, non lasciar scadere il visto D prima dell’appuntamento e conserva la conferma.',
        'Il golden visa con acquisto di casa è stato abolito nel 2023. Le agenzie che lo vendono ancora tramite immobili ti ingannano: restano solo le vie dei fondi e di altri investimenti.',
        'Se arrivi da un altro paese Schengen e non dormi in hotel, la legge chiede di dichiarare l’ingresso (declaração de entrada) entro 3 giorni lavorativi; hotel e alloggi registrati segnalano da sé i propri ospiti.',
      ],
      waivers: [
        'Un permesso di soggiorno o un visto nazionale D valido di qualsiasi paese Schengen ti permette di visitare il Portogallo senza visto fino a 90 giorni su 180. I permessi irlandesi e ciprioti non valgono.',
        'Un visto Schengen rilasciato da un altro Stato membro vale anche in Portogallo, Madeira e Azzorre comprese, entro le sue date e i suoi giorni. Fai il primo viaggio nel paese che l’ha rilasciato.',
      ],
      passports: {
        RU: 'Il Portogallo rilascia pochi visti in Russia e da novembre 2025 sono di solito a ingresso singolo; la tassa è piena, 90 €. Spesso è più semplice fare domanda in un paese in cui hai la residenza. Non ci sono voli diretti — si passa da Istanbul — e le carte russe non funzionano.',
        BR: 'I brasiliani non hanno bisogno di visto (90 giorni su 180), e il visto CPLP semplifica il trasferimento. Al controllo di Lisbona possono chiederti biglietto di ritorno, alloggio e mezzi economici: tienili a portata di mano.',
        US: 'I cittadini statunitensi non hanno bisogno di visto: 90 giorni su 180. L’ETIAS (20 €) è stato rinviato e non è atteso prima del 2027.',
        GB: 'I britannici hanno il limite di 90 giorni su 180. Il passaporto deve avere meno di 10 anni il giorno dell’ingresso e valere ancora 3 mesi dopo l’uscita; per svernare più a lungo serve un visto D7 o D8.',
        IN: 'I cittadini indiani hanno bisogno del visto Schengen tramite VFS. Con la «cascata» europea, due visti usati correttamente in tre anni danno un visto multiplo di 2 anni e poi di 5.',
        UA: 'Gli ucraini con passaporto biometrico entrano senza visto per 90 giorni su 180; la protezione temporanea nell’UE vale fino a marzo 2027.',
      },
    },
  },
};

export default guide;
