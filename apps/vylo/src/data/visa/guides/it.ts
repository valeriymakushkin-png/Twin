import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'IT',
  checked: '2026-10',
  fees: { visa: { kind: 'fixed', amount: 90, currency: 'EUR' } },
  stay: { visa: 90 },
  links: { immigration: 'https://vistoperitalia.esteri.it' },
  docs: ['insurance', 'returnTicket', 'booking', 'finance'],
  passportMonths: 3,
  rule: { days: 90, window: 180 },
  visaRun: 'no',
  transit: { hours: 24 },
  nomad: { name: 'Visto per nomadi digitali e lavoratori da remoto', months: 12, income: { kind: 'from', amount: 2330, currency: 'EUR' } },
  waivers: [
    { holds: ['resEU'], status: 'free', days: 90 },
    { holds: ['visaSchengen'], status: 'free', days: 90 },
  ],
  hackScope: [['regime:required'], ['regime:free', 'regime:required'], ['regime:free', 'regime:required'], ['AU', 'CA', 'NZ', 'JP', 'KR']],
  pitfallScope: [['regime:free', 'regime:required'], ['regime:required'], ['regime:required']],
  text: {
    ru: {
      summary:
        'Италия входит в Шенген: граждане ЕС, ЕЭЗ и Швейцарии въезжают по ID-карте, а граждане США, Великобритании, Канады, Австралии, Японии, Бразилии, Аргентины, Украины и других безвизовых стран — до 90 дней в любые 180. Россиянам, индийцам, китайцам, туркам и многим другим нужна шенгенская виза за 90 €; требования проверяют на vistoperitalia.esteri.it.',
      apply:
        'На vistoperitalia.esteri.it узнайте список документов для своего случая, затем запишитесь в визовый центр, с которым работает консульство (в большинстве стран VFS Global, в Турции — iDATA). Сбор — 90 € плюс сервисный; решение обычно приходит за 15 дней. Записи в итальянские центры часто свободнее, чем в немецкие или французские, но к июлю–августу бронируйте за 1–2 месяца.',
      visaRun:
        'Визаран не работает: 90 дней считаются по всему Шенгену в скользящем окне 180 дней. Паром в Албанию или Тунис и обратно счётчик не обнуляет — дни лишь не идут, пока вы вне зоны, а EES с апреля 2026 года фиксирует каждый въезд и выезд.',
      transit:
        'Пересадка в Риме (Фьюмичино) или Милане (Мальпенса) между двумя рейсами за пределы Шенгена большинству не требует визы, если не выходить из транзитной зоны. Гражданам из общего списка ЕС (Афганистан, Бангладеш, Иран, Нигерия, Пакистан, Шри-Ланка и др.) нужна транзитная виза — кроме владельцев действующей визы или ВНЖ США, Канады, Японии или страны ЕЭЗ.',
      nomad:
        'Виза для цифровых кочевников и удалённых работников (с апреля 2024 года) — для высококвалифицированных специалистов, работающих на неитальянских работодателей или клиентов: на год с продлением, доход около 28 000 € в год (≈ 2330 € в месяц; консульство может потребовать больше), медстраховка и жильё в Италии. Подают в итальянское консульство по месту жительства, а в течение 8 дней после приезда оформляют permesso di soggiorno.',
      hacks: [
        'Паромы в Хорватию и Грецию — поездки внутри Шенгена, а рейсы из Бари, Бриндизи и Анконы в Албанию, Черногорию или Тунис — выезд из зоны: по однократной визе обратно не вернуться.',
        'Сан-Марино и Ватикан открыты со стороны Италии: туда ездят без дополнительных документов, а дни там на практике засчитываются в шенгенский срок.',
        'Для тех, кто живёт на пассивный доход, есть виза «избранного места жительства» (residenza elettiva): нужен стабильный доход не от работы — ориентир около 31 000 € в год на человека.',
        'Австралийцы, канадцы, новозеландцы, японцы и южнокорейцы молодого возраста могут получить годовую визу working holiday с правом подрабатывать — возрастной лимит зависит от страны, обычно 18–30 лет.',
      ],
      pitfalls: [
        'Если вы приехали из другой шенгенской страны и живёте не в отеле, по закону нужно в течение 8 дней подать dichiarazione di presenza в квестуру. Отели и зарегистрированные B&B делают это за вас.',
        'Страховка должна покрывать весь срок поездки с лимитом от 30 000 € — полисы «на первые дни» консульство отклоняет.',
        'Агентства, обещающие «гарантированную» итальянскую визу, не влияют на решение консульства, а фиктивные брони отелей становятся причиной аннулирования визы.',
      ],
      waivers: [
        'Действующий ВНЖ или долгосрочная виза D любой шенгенской страны позволяют ездить в Италию без визы до 90 дней в любые 180. Ирландский и кипрский ВНЖ не подходят.',
        'Шенгенская виза другой страны действует и в Италии в пределах своих дат и числа дней. Первую поездку лучше совершить в страну, выдавшую визу, если она была заявлена основной.',
      ],
      passports: {
        RU: 'Италия остаётся одной из шенгенских стран, которые продолжают принимать туристические заявления россиян, но с ноября 2025 года визы, как правило, однократные. Сбор — полные 90 €. Прямых рейсов нет — летают через Стамбул, Белград или Ереван; российские карты не работают.',
        US: 'Гражданам США виза не нужна: 90 дней в любые 180. Запуск ETIAS (20 €) отложен, раньше 2027 года его не ждут.',
        GB: 'Британцы ограничены 90 днями в 180. Паспорт должен быть выдан менее 10 лет назад на дату въезда и действовать ещё 3 месяца после выезда.',
        IN: 'Гражданам Индии нужна шенгенская виза через VFS. По правилу «каскада» после двух правильно использованных виз за три года дают многократную визу на 2 года, затем на 5 лет.',
        TR: 'Граждане Турции подают через iDATA; записи в итальянские центры обычно доступнее, чем в немецкие, но перед летом их тоже разбирают.',
        UA: 'Граждане Украины с биометрическим паспортом въезжают без визы на 90 дней в 180; временная защита в ЕС продлена до марта 2027 года.',
      },
    },
    en: {
      summary:
        'Italy is in Schengen: EU, EEA and Swiss citizens enter with an ID card, while US, UK, Canadian, Australian, Japanese, Brazilian, Argentine, Ukrainian and other visa-exempt travellers stay up to 90 days in any 180. Russian, Indian, Chinese, Turkish and many other passport holders need a €90 Schengen visa; check the requirements on vistoperitalia.esteri.it.',
      apply:
        'Use vistoperitalia.esteri.it to see the document list for your case, then book at the visa centre the consulate uses (VFS Global in most countries, iDATA in Turkey). The fee is €90 plus the service charge, and decisions usually come within 15 days. Italian centres often have slots sooner than German or French ones, but for July–August book one to two months ahead.',
      visaRun:
        'Visa runs don’t work: the 90 days are counted across the whole Schengen area over any rolling 180-day window. A ferry to Albania or Tunisia and back doesn’t reset the clock — the days only pause while you’re outside, and since April 2026 the EES records every entry and exit.',
      transit:
        'Changing planes at Rome Fiumicino or Milan Malpensa between two non-Schengen flights needs no visa for most nationalities, as long as you stay airside. Citizens on the EU airport-transit-visa list (Afghanistan, Bangladesh, Iran, Nigeria, Pakistan, Sri Lanka and others) need one, unless they hold a valid US, Canadian, Japanese or EEA visa or residence permit.',
      nomad:
        'The visa for digital nomads and remote workers (since April 2024) is for highly qualified people working for non-Italian employers or clients: one year, renewable, with income of about €28,000 a year (≈ €2,330 a month — consulates may ask for more), health insurance and accommodation in Italy. Apply at the Italian consulate where you live, then request a permesso di soggiorno within 8 days of arrival.',
      hacks: [
        'Ferries to Croatia and Greece are trips within Schengen, while sailings from Bari, Brindisi and Ancona to Albania, Montenegro or Tunisia leave the zone — on a single-entry visa you can’t come back.',
        'San Marino and the Vatican are open from the Italian side: you need no extra papers to visit, and in practice days there count towards your Schengen stay.',
        'If you live on passive income, there’s the elective residence visa (residenza elettiva): it needs stable non-work income — roughly €31,000 a year per person as a guide.',
        'Young Australians, Canadians, New Zealanders, Japanese and South Koreans can get a one-year working holiday visa with the right to take casual work — the age limit depends on the country, usually 18–30.',
      ],
      pitfalls: [
        'If you arrived from another Schengen country and aren’t staying in a hotel, the law requires a dichiarazione di presenza at the Questura within 8 days. Hotels and registered B&Bs file it for you.',
        'Insurance must cover the whole trip with at least €30,000 — policies covering only the first few days get rejected.',
        'Agencies promising a “guaranteed” Italian visa have no say in the consulate’s decision, and fake hotel bookings are a reason for visas to be revoked.',
      ],
      waivers: [
        'A valid residence permit or long-stay D visa from any Schengen country lets you visit Italy visa-free for up to 90 days in any 180. Irish and Cypriot permits don’t count.',
        'A Schengen visa issued by another member state is valid in Italy within its dates and number of days. Make the first trip to the issuing country if it was your declared main destination.',
      ],
      passports: {
        RU: 'Italy remains one of the Schengen countries still accepting tourist applications from Russians, but since November 2025 visas are usually single-entry. The fee is the full €90. There are no direct flights — routes go via Istanbul, Belgrade or Yerevan; Russian bank cards don’t work.',
        US: 'US citizens need no visa: 90 days in any 180. ETIAS (€20) has been delayed and isn’t expected before 2027.',
        GB: 'UK citizens are limited to 90 days in 180. Your passport must have been issued less than 10 years before the day you enter and be valid for 3 months after you leave.',
        IN: 'Indian citizens need a Schengen visa via VFS. Under the EU “cascade”, two visas used correctly within three years earn a 2-year multiple-entry visa, then a 5-year one.',
        TR: 'Turkish citizens apply through iDATA; Italian slots are usually easier to get than German ones, but they also fill up before summer.',
        UA: 'Ukrainians with a biometric passport enter visa-free for 90 days in 180; temporary protection in the EU runs until March 2027.',
      },
    },
    es: {
      summary:
        'Italia forma parte de Schengen: los ciudadanos de la UE, el EEE y Suiza entran con el DNI, y los de EE. UU., Reino Unido, Canadá, Australia, Japón, Brasil, Argentina, Ucrania y otros países exentos se quedan hasta 90 días en cualquier periodo de 180. Quienes tienen pasaporte ruso, indio, chino, turco y muchos otros necesitan un visado Schengen de 90 €; los requisitos están en vistoperitalia.esteri.it.',
      apply:
        'En vistoperitalia.esteri.it verás la lista de documentos para tu caso; después pide cita en el centro de visados con el que trabaja el consulado (VFS Global en la mayoría de países, iDATA en Turquía). La tasa es de 90 € más el servicio y la resolución suele llegar en 15 días. Los centros italianos suelen tener citas antes que los alemanes o franceses, pero para julio–agosto reserva con uno o dos meses de margen.',
      visaRun:
        'Los visa runs no sirven: los 90 días se cuentan en todo Schengen dentro de una ventana móvil de 180. Un ferri a Albania o Túnez y vuelta no reinicia el contador —los días solo se detienen mientras estás fuera—, y desde abril de 2026 el EES registra cada entrada y salida.',
      transit:
        'Para cambiar de avión en Roma-Fiumicino o Milán-Malpensa entre dos vuelos fuera de Schengen la mayoría no necesita visado, si no sale de la zona de tránsito. Los ciudadanos de la lista europea de visado de tránsito aeroportuario (Afganistán, Bangladés, Irán, Nigeria, Pakistán, Sri Lanka y otros) sí lo necesitan, salvo que tengan visado o residencia vigente de EE. UU., Canadá, Japón o un país del EEE.',
      nomad:
        'El visado para nómadas digitales y teletrabajadores (desde abril de 2024) es para perfiles muy cualificados que trabajan para empresas o clientes no italianos: un año renovable, con ingresos de unos 28 000 € al año (≈ 2330 € al mes; el consulado puede pedir más), seguro médico y alojamiento en Italia. Se solicita en el consulado italiano de tu país de residencia y, en los 8 días siguientes a la llegada, se pide el permesso di soggiorno.',
      hacks: [
        'Los ferris a Croacia y Grecia son viajes dentro de Schengen, mientras que las rutas de Bari, Brindisi y Ancona a Albania, Montenegro o Túnez salen de la zona: con un visado de una entrada no podrás volver.',
        'San Marino y el Vaticano están abiertos desde Italia: no necesitas papeles extra para visitarlos y, en la práctica, los días allí cuentan para tu estancia Schengen.',
        'Si vives de rentas, existe el visado de residencia electiva (residenza elettiva): exige ingresos estables que no procedan del trabajo; como referencia, unos 31 000 € al año por persona.',
        'Los jóvenes de Australia, Canadá, Nueva Zelanda, Japón y Corea del Sur pueden obtener un visado working holiday de un año con permiso para trabajos temporales; el límite de edad depende del país, normalmente 18–30 años.',
      ],
      pitfalls: [
        'Si llegaste desde otro país Schengen y no te alojas en un hotel, la ley exige presentar la dichiarazione di presenza en la Questura en un plazo de 8 días. Los hoteles y B&B registrados la hacen por ti.',
        'El seguro debe cubrir todo el viaje con al menos 30 000 €; las pólizas que solo cubren los primeros días se rechazan.',
        'Las agencias que prometen un visado italiano «garantizado» no influyen en la decisión del consulado, y las reservas de hotel falsas son motivo para revocar el visado.',
      ],
      waivers: [
        'Un permiso de residencia o un visado nacional D vigente de cualquier país Schengen te permite visitar Italia sin visado hasta 90 días en 180. Los permisos de Irlanda y Chipre no valen.',
        'Un visado Schengen expedido por otro Estado miembro vale en Italia dentro de sus fechas y su número de días. Haz el primer viaje al país emisor si lo declaraste como destino principal.',
      ],
      passports: {
        RU: 'Italia sigue siendo uno de los países Schengen que aceptan solicitudes turísticas de ciudadanos rusos, pero desde noviembre de 2025 los visados suelen ser de una sola entrada. La tasa es la completa, 90 €. No hay vuelos directos —se vuela vía Estambul, Belgrado o Ereván— y las tarjetas rusas no funcionan.',
        US: 'Los ciudadanos estadounidenses no necesitan visado: 90 días en 180. El ETIAS (20 €) se ha retrasado y no se espera antes de 2027.',
        GB: 'Los británicos tienen un límite de 90 días en 180. El pasaporte debe haberse expedido hace menos de 10 años el día de entrada y seguir vigente 3 meses después de salir.',
        IN: 'Los ciudadanos indios necesitan visado Schengen a través de VFS. Con la «cascada» europea, dos visados bien usados en tres años dan uno de entradas múltiples de 2 años y luego de 5.',
        TR: 'Los ciudadanos turcos solicitan a través de iDATA; las citas italianas suelen ser más fáciles de conseguir que las alemanas, pero también se agotan antes del verano.',
        UA: 'Los ucranianos con pasaporte biométrico entran sin visado durante 90 días en 180; la protección temporal en la UE dura hasta marzo de 2027.',
      },
    },
    de: {
      summary:
        'Italien gehört zu Schengen: Bürger der EU, des EWR und der Schweiz reisen mit dem Personalausweis ein, Reisende aus den USA, Großbritannien, Kanada, Australien, Japan, Brasilien, Argentinien, der Ukraine und anderen visumfreien Ländern bleiben bis zu 90 Tage in jedem 180-Tage-Zeitraum. Mit russischem, indischem, chinesischem, türkischem und vielen anderen Pässen brauchst du ein Schengen-Visum für 90 €; die Anforderungen stehen auf vistoperitalia.esteri.it.',
      apply:
        'Auf vistoperitalia.esteri.it siehst du die Unterlagen für deinen Fall; danach buchst du beim Visazentrum des Konsulats (in den meisten Ländern VFS Global, in der Türkei iDATA). Die Gebühr beträgt 90 € plus Servicegebühr, die Entscheidung kommt meist innerhalb von 15 Tagen. Italienische Zentren haben oft früher Termine als deutsche oder französische, für Juli–August solltest du aber ein bis zwei Monate vorher buchen.',
      visaRun:
        'Visa-Runs funktionieren nicht: Die 90 Tage gelten für den ganzen Schengen-Raum in einem rollierenden 180-Tage-Fenster. Eine Fähre nach Albanien oder Tunesien und zurück setzt den Zähler nicht zurück – die Tage pausieren nur, solange du draußen bist, und seit April 2026 erfasst das EES jede Ein- und Ausreise.',
      transit:
        'Beim Umsteigen in Rom-Fiumicino oder Mailand-Malpensa zwischen zwei Flügen außerhalb von Schengen brauchen die meisten kein Visum, solange sie im Transitbereich bleiben. Staatsangehörige auf der EU-Liste für Flughafentransitvisa (Afghanistan, Bangladesch, Iran, Nigeria, Pakistan, Sri Lanka u. a.) benötigen eines – außer mit gültigem Visum oder Aufenthaltstitel der USA, Kanadas, Japans oder eines EWR-Staats.',
      nomad:
        'Das Visum für digitale Nomaden und Remote-Arbeitende (seit April 2024) richtet sich an hoch qualifizierte Menschen, die für nicht-italienische Arbeitgeber oder Kunden arbeiten: ein Jahr, verlängerbar, mit Einkommen von etwa 28.000 € im Jahr (≈ 2.330 € im Monat – Konsulate können mehr verlangen), Krankenversicherung und Unterkunft in Italien. Beantragt wird beim italienischen Konsulat deines Wohnorts, nach der Ankunft musst du binnen 8 Tagen den permesso di soggiorno beantragen.',
      hacks: [
        'Fähren nach Kroatien und Griechenland bleiben im Schengen-Raum, Verbindungen ab Bari, Brindisi und Ancona nach Albanien, Montenegro oder Tunesien verlassen ihn – mit einem Visum für eine Einreise kommst du nicht zurück.',
        'San Marino und der Vatikan sind von Italien aus offen: Du brauchst keine zusätzlichen Papiere, und praktisch zählen die Tage dort zu deinem Schengen-Aufenthalt.',
        'Wer von passivem Einkommen lebt, kann das Visum für Wahlwohnsitz (residenza elettiva) nutzen: nötig ist stabiles Einkommen, das nicht aus Arbeit stammt – als Richtwert rund 31.000 € im Jahr pro Person.',
        'Junge Menschen aus Australien, Kanada, Neuseeland, Japan und Südkorea können ein einjähriges Working-Holiday-Visum mit Erlaubnis für Gelegenheitsjobs bekommen – die Altersgrenze hängt vom Land ab, meist 18–30 Jahre.',
      ],
      pitfalls: [
        'Bist du aus einem anderen Schengen-Land eingereist und wohnst nicht im Hotel, verlangt das Gesetz binnen 8 Tagen eine dichiarazione di presenza bei der Questura. Hotels und registrierte B&Bs erledigen das für dich.',
        'Die Versicherung muss die ganze Reise mit mindestens 30.000 € abdecken – Policen nur für die ersten Tage werden abgelehnt.',
        'Agenturen, die ein „garantiertes“ italienisches Visum versprechen, haben keinen Einfluss auf das Konsulat, und gefälschte Hotelbuchungen sind ein Grund, Visa zu widerrufen.',
      ],
      waivers: [
        'Mit einem gültigen Aufenthaltstitel oder nationalen D-Visum eines Schengen-Staats reist du bis zu 90 Tage in 180 visumfrei nach Italien. Irische und zyprische Titel zählen nicht.',
        'Ein Schengen-Visum eines anderen Mitgliedstaats gilt innerhalb seiner Daten und Tage auch in Italien. Die erste Reise sollte ins ausstellende Land gehen, wenn es als Hauptziel angegeben war.',
      ],
      passports: {
        RU: 'Italien gehört zu den Schengen-Ländern, die weiterhin touristische Anträge russischer Staatsangehöriger annehmen, seit November 2025 aber meist nur Visa für eine Einreise ausstellen. Die Gebühr beträgt volle 90 €. Direktflüge gibt es nicht – man fliegt über Istanbul, Belgrad oder Jerewan; russische Bankkarten funktionieren nicht.',
        US: 'US-Bürger brauchen kein Visum: 90 Tage in 180. ETIAS (20 €) verzögert sich und wird nicht vor 2027 erwartet.',
        GB: 'Briten dürfen 90 Tage in 180 bleiben. Der Pass muss am Einreisetag jünger als 10 Jahre sein und noch 3 Monate nach der Ausreise gelten.',
        IN: 'Indische Staatsangehörige brauchen ein Schengen-Visum über VFS. Nach der EU-„Kaskade“ gibt es nach zwei korrekt genutzten Visa in drei Jahren ein Mehrfachvisum für 2 Jahre, danach für 5 Jahre.',
        TR: 'Türkische Staatsangehörige beantragen über iDATA; italienische Termine sind meist leichter zu bekommen als deutsche, vor dem Sommer aber ebenfalls schnell weg.',
        UA: 'Ukrainer mit biometrischem Pass reisen 90 Tage in 180 visumfrei ein; der vorübergehende Schutz in der EU gilt bis März 2027.',
      },
    },
    fr: {
      summary:
        'L’Italie fait partie de Schengen : les citoyens de l’UE, de l’EEE et de la Suisse entrent avec leur carte d’identité, et les voyageurs américains, britanniques, canadiens, australiens, japonais, brésiliens, argentins, ukrainiens et d’autres pays exemptés restent jusqu’à 90 jours sur 180. Les titulaires d’un passeport russe, indien, chinois, turc et de nombreux autres ont besoin d’un visa Schengen à 90 € ; les conditions figurent sur vistoperitalia.esteri.it.',
      apply:
        'Sur vistoperitalia.esteri.it, consultez la liste des pièces pour votre cas, puis réservez au centre de visas du consulat (VFS Global dans la plupart des pays, iDATA en Turquie). Les frais sont de 90 € plus le service, et la décision tombe en général sous 15 jours. Les centres italiens ont souvent des créneaux plus tôt que les allemands ou les français, mais pour juillet–août réservez un à deux mois à l’avance.',
      visaRun:
        'Les visa runs ne fonctionnent pas : les 90 jours se comptent sur tout l’espace Schengen dans une fenêtre glissante de 180. Un ferry pour l’Albanie ou la Tunisie aller-retour ne remet pas le compteur à zéro — les jours ne font que s’arrêter pendant que vous êtes dehors, et depuis avril 2026 l’EES enregistre chaque entrée et sortie.',
      transit:
        'Une correspondance à Rome-Fiumicino ou Milan-Malpensa entre deux vols hors Schengen ne demande pas de visa à la plupart des nationalités, tant que vous restez en zone de transit. Les ressortissants de la liste européenne du visa de transit aéroportuaire (Afghanistan, Bangladesh, Iran, Nigeria, Pakistan, Sri Lanka, etc.) en ont besoin, sauf s’ils détiennent un visa ou un titre de séjour valide des États-Unis, du Canada, du Japon ou d’un pays de l’EEE.',
      nomad:
        'Le visa pour nomades numériques et travailleurs à distance (depuis avril 2024) vise les profils très qualifiés travaillant pour des employeurs ou des clients non italiens : un an renouvelable, avec des revenus d’environ 28 000 € par an (≈ 2 330 € par mois — le consulat peut exiger davantage), une assurance santé et un logement en Italie. La demande se fait au consulat italien de votre pays de résidence, puis le permesso di soggiorno se demande dans les 8 jours suivant l’arrivée.',
      hacks: [
        'Les ferries vers la Croatie et la Grèce restent dans Schengen, tandis que les liaisons de Bari, Brindisi et Ancône vers l’Albanie, le Monténégro ou la Tunisie en sortent : avec un visa à entrée unique, impossible de revenir.',
        'Saint-Marin et le Vatican sont ouverts côté italien : aucun papier supplémentaire pour les visiter, et en pratique les jours passés là-bas comptent dans votre séjour Schengen.',
        'Si vous vivez de revenus passifs, il existe le visa de résidence élective (residenza elettiva) : il faut des revenus stables qui ne proviennent pas du travail — environ 31 000 € par an et par personne à titre indicatif.',
        'Les jeunes Australiens, Canadiens, Néo-Zélandais, Japonais et Sud-Coréens peuvent obtenir un visa vacances-travail d’un an avec droit aux petits boulots — la limite d’âge dépend du pays, en général 18–30 ans.',
      ],
      pitfalls: [
        'Si vous arrivez d’un autre pays Schengen et ne logez pas à l’hôtel, la loi impose une dichiarazione di presenza à la Questura dans les 8 jours. Les hôtels et B&B déclarés s’en chargent pour vous.',
        'L’assurance doit couvrir tout le voyage avec au moins 30 000 € — les contrats limités aux premiers jours sont refusés.',
        'Les agences promettant un visa italien « garanti » n’ont aucune prise sur la décision du consulat, et les fausses réservations d’hôtel sont un motif d’annulation du visa.',
      ],
      waivers: [
        'Un titre de séjour ou un visa long séjour D valide d’un pays Schengen vous permet de venir en Italie sans visa jusqu’à 90 jours sur 180. Les titres irlandais et chypriotes ne comptent pas.',
        'Un visa Schengen délivré par un autre État membre est valable en Italie dans la limite de ses dates et de son nombre de jours. Effectuez le premier voyage dans le pays émetteur s’il était déclaré comme destination principale.',
      ],
      passports: {
        RU: 'L’Italie fait partie des pays Schengen qui acceptent encore les demandes touristiques des ressortissants russes, mais depuis novembre 2025 les visas sont en général à entrée unique. Les frais sont de 90 € plein tarif. Pas de vols directs : on passe par Istanbul, Belgrade ou Erevan ; les cartes bancaires russes ne fonctionnent pas.',
        US: 'Les citoyens américains n’ont pas besoin de visa : 90 jours sur 180. L’ETIAS (20 €) a été repoussé et n’est pas attendu avant 2027.',
        GB: 'Les Britanniques sont limités à 90 jours sur 180. Le passeport doit avoir moins de 10 ans le jour de l’entrée et rester valable 3 mois après la sortie.',
        IN: 'Les citoyens indiens ont besoin d’un visa Schengen via VFS. Selon la « cascade » européenne, deux visas bien utilisés en trois ans ouvrent droit à un visa à entrées multiples de 2 ans, puis de 5 ans.',
        TR: 'Les citoyens turcs déposent via iDATA ; les créneaux italiens sont en général plus faciles à obtenir que les allemands, mais ils partent aussi avant l’été.',
        UA: 'Les Ukrainiens munis d’un passeport biométrique entrent sans visa pour 90 jours sur 180 ; la protection temporaire dans l’UE court jusqu’en mars 2027.',
      },
    },
    it: {
      summary:
        'L’Italia fa parte di Schengen: i cittadini di UE, SEE e Svizzera entrano con la carta d’identità, mentre chi ha passaporto di Stati Uniti, Regno Unito, Canada, Australia, Giappone, Brasile, Argentina, Ucraina e altri paesi esenti resta fino a 90 giorni su 180. Chi ha passaporto russo, indiano, cinese, turco e di molti altri paesi ha bisogno di un visto Schengen da 90 €; i requisiti sono su vistoperitalia.esteri.it.',
      apply:
        'Su vistoperitalia.esteri.it trovi l’elenco dei documenti per il tuo caso; poi prenota al centro visti a cui si appoggia il consolato (VFS Global nella maggior parte dei paesi, iDATA in Turchia). La tassa è di 90 € più il servizio e la decisione arriva di solito entro 15 giorni. I centri italiani hanno spesso posti prima di quelli tedeschi o francesi, ma per luglio–agosto prenota con uno o due mesi d’anticipo.',
      visaRun:
        'I visa run non funzionano: i 90 giorni si contano su tutta l’area Schengen in una finestra mobile di 180. Un traghetto per l’Albania o la Tunisia e ritorno non azzera il contatore — i giorni si fermano solo mentre sei fuori, e dall’aprile 2026 l’EES registra ogni ingresso e uscita.',
      transit:
        'Per cambiare aereo a Roma Fiumicino o Milano Malpensa tra due voli fuori Schengen la maggior parte delle nazionalità non ha bisogno di visto, se resta nella zona di transito. I cittadini della lista UE del visto di transito aeroportuale (Afghanistan, Bangladesh, Iran, Nigeria, Pakistan, Sri Lanka e altri) devono averlo, a meno di avere un visto o un permesso valido di Stati Uniti, Canada, Giappone o di un paese SEE.',
      nomad:
        'Il visto per nomadi digitali e lavoratori da remoto (da aprile 2024) è pensato per profili altamente qualificati che lavorano per datori di lavoro o clienti non italiani: un anno rinnovabile, con un reddito di circa 28.000 € l’anno (≈ 2.330 € al mese; il consolato può chiedere di più), assicurazione sanitaria e alloggio in Italia. Si chiede al consolato italiano del paese in cui vivi e, entro 8 giorni dall’arrivo, si richiede il permesso di soggiorno.',
      hacks: [
        'I traghetti per Croazia e Grecia restano dentro Schengen, mentre le linee da Bari, Brindisi e Ancona per Albania, Montenegro o Tunisia escono dall’area: con un visto a ingresso singolo non puoi rientrare.',
        'San Marino e il Vaticano sono aperti dal lato italiano: non servono documenti in più per visitarli e, in pratica, i giorni lì contano nel tuo soggiorno Schengen.',
        'Se vivi di rendita c’è il visto per residenza elettiva: servono entrate stabili non da lavoro, indicativamente circa 31.000 € l’anno a persona.',
        'I giovani di Australia, Canada, Nuova Zelanda, Giappone e Corea del Sud possono ottenere un visto vacanza-lavoro di un anno con permesso per lavori occasionali; il limite d’età dipende dal paese, di solito 18–30 anni.',
      ],
      pitfalls: [
        'Se arrivi da un altro paese Schengen e non dormi in hotel, la legge richiede la dichiarazione di presenza in Questura entro 8 giorni. Hotel e B&B registrati la fanno al posto tuo.',
        'L’assicurazione deve coprire tutto il viaggio con almeno 30.000 €: le polizze solo per i primi giorni vengono respinte.',
        'Le agenzie che promettono un visto italiano «garantito» non contano nulla nella decisione del consolato, e le prenotazioni alberghiere false sono motivo di revoca del visto.',
      ],
      waivers: [
        'Un permesso di soggiorno o un visto nazionale D valido di qualsiasi paese Schengen ti permette di visitare l’Italia senza visto fino a 90 giorni su 180. I permessi irlandesi e ciprioti non valgono.',
        'Un visto Schengen rilasciato da un altro Stato membro vale anche in Italia entro le sue date e il suo numero di giorni. Fai il primo viaggio nel paese che l’ha rilasciato, se l’avevi indicato come destinazione principale.',
      ],
      passports: {
        RU: 'L’Italia resta uno dei paesi Schengen che accettano ancora domande turistiche dai cittadini russi, ma da novembre 2025 i visti sono di solito a ingresso singolo. La tassa è piena, 90 €. Non ci sono voli diretti — si passa da Istanbul, Belgrado o Erevan — e le carte russe non funzionano.',
        US: 'I cittadini statunitensi non hanno bisogno di visto: 90 giorni su 180. L’ETIAS (20 €) è stato rinviato e non è atteso prima del 2027.',
        GB: 'I britannici hanno il limite di 90 giorni su 180. Il passaporto deve essere stato rilasciato da meno di 10 anni il giorno dell’ingresso e valere ancora 3 mesi dopo l’uscita.',
        IN: 'I cittadini indiani hanno bisogno del visto Schengen tramite VFS. Con la «cascata» europea, due visti usati correttamente in tre anni danno un visto multiplo di 2 anni e poi di 5.',
        TR: 'I cittadini turchi fanno domanda tramite iDATA; gli appuntamenti italiani si trovano in genere più facilmente di quelli tedeschi, ma prima dell’estate finiscono anche loro.',
        UA: 'Gli ucraini con passaporto biometrico entrano senza visto per 90 giorni su 180; la protezione temporanea nell’UE vale fino a marzo 2027.',
      },
    },
  },
};

export default guide;
