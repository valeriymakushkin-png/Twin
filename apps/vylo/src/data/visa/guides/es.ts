import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'ES',
  checked: '2026-10',
  fees: { visa: { kind: 'fixed', amount: 90, currency: 'EUR' } },
  stay: { visa: 90 },
  links: { immigration: 'https://www.exteriores.gob.es' },
  docs: ['insurance', 'returnTicket', 'booking', 'finance'],
  passportMonths: 3,
  rule: { days: 90, window: 180 },
  visaRun: 'no',
  transit: { hours: 24 },
  nomad: { name: 'Visado para teletrabajo de carácter internacional', months: 12, income: { kind: 'from', amount: 2849, currency: 'EUR' } },
  waivers: [
    { holds: ['resEU'], status: 'free', days: 90 },
    { holds: ['visaSchengen'], status: 'free', days: 90 },
  ],
  hackScope: [['regime:free'], null, null, ['AU', 'CA', 'NZ', 'JP', 'KR']],
  pitfallScope: [null, ['regime:required'], null],
  text: {
    ru: {
      summary:
        'Испания входит в Шенген: граждане ЕС, ЕЭЗ и Швейцарии въезжают по ID-карте, а граждане США, Великобритании, Канады, Австралии, Японии, Мексики, Колумбии, Аргентины, Бразилии, Украины и других безвизовых стран — до 90 дней в любые 180. Россиянам, индийцам, китайцам, туркам, марокканцам и многим другим нужна шенгенская виза за 90 € через испанское консульство.',
      apply:
        'Подают в испанское консульство по месту жительства; в большинстве стран документы принимает BLS International (кое-где — VFS Global). Сбор — 90 € плюс сервисный, решение — обычно 15 дней. Запись в BLS в России, Марокко и Индии быстро раскупают — проверяйте сайт рано утром и не платите посредникам за «слоты».',
      visaRun:
        'Визаран не работает: 90 дней считаются по всему Шенгену в скользящем окне 180 дней. Поездка в Марокко, Гибралтар или Андорру счётчик не обнуляет, а лишь ставит его на паузу; с апреля 2026 года EES фиксирует каждый въезд и выезд.',
      transit:
        'Пересадка в Мадриде (Барахас) или Барселоне между двумя рейсами за пределы Шенгена — например, из Латинской Америки в Африку — большинству не требует визы, если не выходить из транзитной зоны. Гражданам из общего списка ЕС (Афганистан, Бангладеш, Иран, Нигерия, Пакистан и др.) и нескольких стран, добавленных Испанией, нужна транзитная виза — кроме владельцев действующей визы или ВНЖ США, Канады, Японии или страны ЕЭЗ.',
      nomad:
        'Виза для международной удалённой работы — для тех, кто работает на иностранных работодателей или клиентов (испанские — не более 20% дохода): доход от 200% минимальной зарплаты, в 2026 году около 2850 € в месяц, плюс опыт или диплом. Из консульства дают визу на год; если подать уже из Испании во время законного пребывания, сразу выдают ВНЖ на три года.',
      hacks: [
        'Визу для удалённой работы можно запросить, находясь в Испании законно (например, в безвизовые 90 дней): заявление подают онлайн в UGE, и вместо годовой визы вы получаете ВНЖ на три года.',
        'Для жизни на пассивный доход без работы есть виза без права работы (no lucrativa): нужно около 400% IPREM — примерно 2400 € в месяц на человека плюс частная страховка.',
        'Канары и Балеары — полноценный Шенген, а Сеута и Мелилья — особая зона: при вылете оттуда на материк есть паспортный контроль, а поездка в Марокко — выезд из Шенгена.',
        'Молодые австралийцы, канадцы, новозеландцы, японцы и южнокорейцы могут получить испанскую визу working holiday на год; возрастной лимит зависит от страны.',
      ],
      pitfalls: [
        'Испанские пограничники действительно проверяют деньги: около 121 € на человека в день и не меньше примерно 1100 € на поездку любой длины — наличными или картой. При проживании у знакомых нужна carta de invitación, которую хозяин оформляет в полиции.',
        'Гибралтар и Андорра вне Шенгена: по однократной визе поездка из Ла-Линеи или Сеу-д’Уржеля «съедает» въезд. Соглашение ЕС и Великобритании 2025 года должно перенести контроль в порт и аэропорт Гибралтара — проверьте, действует ли оно в даты поездки.',
        'Отели, апартаменты и прокат авто по закону собирают о гостях много данных — телефон, e-mail, способ оплаты, родство для несовершеннолетних — и передают в полицию. Это не мошенничество, но паспорт показывать нужно только самому хозяину или стойке.',
      ],
      waivers: [
        'Действующий ВНЖ или долгосрочная виза D любой шенгенской страны позволяют ездить в Испанию без визы до 90 дней в любые 180. Ирландский и кипрский ВНЖ не подходят.',
        'Шенгенская виза другой страны действует и в Испании в пределах своих дат и числа дней — в том числе на Канарах и Балеарах. Первую поездку лучше совершить в страну, выдавшую визу.',
      ],
      passports: {
        RU: 'Испания продолжает принимать туристические заявления россиян через визовые центры BLS в России, но с ноября 2025 года визы, как правило, однократные; сбор — полные 90 €. Прямых рейсов нет — летают через Стамбул, Белград или Ереван; российские карты не работают.',
        US: 'Гражданам США виза не нужна: 90 дней в любые 180. Запуск ETIAS (20 €) отложен, раньше 2027 года его не ждут.',
        GB: 'Британцы ограничены 90 днями в 180 — даже владельцы домов в Испании. Чтобы жить дольше, нужна национальная виза D (например, no lucrativa или для удалённой работы). Паспорт должен быть моложе 10 лет на дату въезда и действовать ещё 3 месяца после выезда.',
        MX: 'Мексиканцам виза не нужна, но в Барахасе их проверяют особенно строго: держите под рукой обратный билет, брони жилья, деньги на поездку и страховку. То же относится к гражданам Колумбии, Перу и других стран Латинской Америки.',
        IN: 'Гражданам Индии нужна шенгенская виза через BLS. По правилу «каскада» после двух правильно использованных виз за три года дают многократную визу на 2 года, затем на 5 лет.',
        UA: 'Граждане Украины с биометрическим паспортом въезжают без визы на 90 дней в 180; временная защита в ЕС продлена до марта 2027 года.',
      },
    },
    en: {
      summary:
        'Spain is in Schengen: EU, EEA and Swiss citizens enter with an ID card, while US, UK, Canadian, Australian, Japanese, Mexican, Colombian, Argentine, Brazilian, Ukrainian and other visa-exempt travellers stay up to 90 days in any 180. Russian, Indian, Chinese, Turkish, Moroccan and many other passport holders need a €90 Schengen visa from a Spanish consulate.',
      apply:
        'Apply to the Spanish consulate for where you live; in most countries BLS International takes the applications (VFS Global in a few). The fee is €90 plus the service charge, and decisions usually take 15 days. BLS slots in Russia, Morocco and India go fast — check the site early in the morning and never pay middlemen for “slots”.',
      visaRun:
        'Visa runs don’t work: the 90 days are counted across the whole Schengen area over any rolling 180-day window. A trip to Morocco, Gibraltar or Andorra doesn’t reset the clock, it only pauses it, and since April 2026 the EES records every entry and exit.',
      transit:
        'Changing planes in Madrid-Barajas or Barcelona between two non-Schengen flights — say, from Latin America to Africa — needs no visa for most nationalities, as long as you stay airside. Citizens on the EU airport-transit-visa list (Afghanistan, Bangladesh, Iran, Nigeria, Pakistan and others) and a few nationalities Spain adds need an airport transit visa, unless they hold a valid US, Canadian, Japanese or EEA visa or residence permit.',
      nomad:
        'The international remote-work visa is for people working for foreign employers or clients (Spanish ones may make up no more than 20% of income): income of at least 200% of the minimum wage, about €2,850 a month in 2026, plus experience or a degree. Consulates issue a one-year visa; apply from inside Spain during a legal stay and you get a three-year residence permit straight away.',
      hacks: [
        'You can request the remote-work permit while legally in Spain (for example on your 90 visa-free days): apply online with the UGE and get a three-year residence permit instead of a one-year visa.',
        'To live on passive income without working, there’s the non-lucrative visa (no lucrativa): it takes about 400% of IPREM — roughly €2,400 a month per person — plus private health insurance.',
        'The Canary and Balearic Islands are fully Schengen, but Ceuta and Melilla are a special zone: flights from there to the mainland have passport checks, and a trip to Morocco means leaving Schengen.',
        'Young Australians, Canadians, New Zealanders, Japanese and South Koreans can get a one-year Spanish working holiday visa; the age limit depends on the country.',
      ],
      pitfalls: [
        'Spanish border guards really do check funds: about €121 per person per day and at least around €1,100 for a trip of any length, in cash or on a card. If you stay with friends, you need a carta de invitación that your host obtains from the police.',
        'Gibraltar and Andorra are outside Schengen: on a single-entry visa, a trip from La Línea or La Seu d’Urgell uses up your entry. The 2025 EU–UK deal is meant to move checks to Gibraltar’s port and airport — check whether it applies on your dates.',
        'Hotels, holiday lets and car-hire firms are legally required to collect a lot of guest data — phone, email, payment method, relationship for minors — and pass it to the police. It isn’t a scam, but show your passport only to the host or the desk itself.',
      ],
      waivers: [
        'A valid residence permit or long-stay D visa from any Schengen country lets you visit Spain visa-free for up to 90 days in any 180. Irish and Cypriot permits don’t count.',
        'A Schengen visa issued by another member state is valid in Spain within its dates and number of days — the Canaries and Balearics included. Make the first trip to the issuing country.',
      ],
      passports: {
        RU: 'Spain still accepts tourist applications from Russians through the BLS visa centres in Russia, but since November 2025 visas are usually single-entry; the fee is the full €90. There are no direct flights — routes go via Istanbul, Belgrade or Yerevan; Russian bank cards don’t work.',
        US: 'US citizens need no visa: 90 days in any 180. ETIAS (€20) has been delayed and isn’t expected before 2027.',
        GB: 'UK citizens are limited to 90 days in 180 — even if they own a home in Spain. Staying longer takes a national D visa (non-lucrative or remote-work, for example). Your passport must be under 10 years old on the day you enter and valid for 3 months after you leave.',
        MX: 'Mexicans need no visa, but checks at Barajas are especially strict: keep your return ticket, accommodation bookings, money for the trip and insurance to hand. The same goes for Colombian, Peruvian and other Latin American citizens.',
        IN: 'Indian citizens need a Schengen visa via BLS. Under the EU “cascade”, two visas used correctly within three years earn a 2-year multiple-entry visa, then a 5-year one.',
        UA: 'Ukrainians with a biometric passport enter visa-free for 90 days in 180; temporary protection in the EU runs until March 2027.',
      },
    },
    es: {
      summary:
        'España forma parte de Schengen: los ciudadanos de la UE, el EEE y Suiza entran con el DNI, y los de EE. UU., Reino Unido, Canadá, Australia, Japón, México, Colombia, Argentina, Brasil, Ucrania y otros países exentos se quedan hasta 90 días en cualquier periodo de 180. Quienes tienen pasaporte ruso, indio, chino, turco, marroquí y muchos otros necesitan un visado Schengen de 90 € de un consulado español.',
      apply:
        'Se solicita en el consulado español que corresponde a tu residencia; en la mayoría de países las solicitudes las recoge BLS International (en algunos, VFS Global). La tasa es de 90 € más el servicio y la resolución suele tardar 15 días. Las citas de BLS en Rusia, Marruecos e India vuelan: mira la web a primera hora y no pagues nunca a intermediarios por «huecos».',
      visaRun:
        'Los visa runs no sirven: los 90 días se cuentan en todo Schengen dentro de una ventana móvil de 180. Una escapada a Marruecos, Gibraltar o Andorra no pone el contador a cero, solo lo pausa, y desde abril de 2026 el EES registra cada entrada y salida.',
      transit:
        'Para cambiar de avión en Madrid-Barajas o Barcelona entre dos vuelos fuera de Schengen —por ejemplo, de Latinoamérica a África— la mayoría no necesita visado, si no sale de la zona de tránsito. Los ciudadanos de la lista europea de visado de tránsito aeroportuario (Afganistán, Bangladés, Irán, Nigeria, Pakistán y otros) y de algunos países que añade España sí lo necesitan, salvo que tengan visado o residencia vigente de EE. UU., Canadá, Japón o un país del EEE.',
      nomad:
        'El visado para teletrabajo de carácter internacional es para quien trabaja para empresas o clientes extranjeros (los españoles no pueden superar el 20% de los ingresos): ingresos de al menos el 200% del salario mínimo, unos 2850 € al mes en 2026, más experiencia o titulación. Los consulados dan un visado de un año; si lo pides desde España durante una estancia legal, obtienes directamente una residencia de tres años.',
      hacks: [
        'Puedes pedir la autorización de teletrabajo estando legalmente en España (por ejemplo, en tus 90 días sin visado): se tramita en línea ante la UGE y recibes una residencia de tres años en lugar de un visado de uno.',
        'Para vivir de rentas sin trabajar existe el visado de residencia no lucrativa: piden en torno al 400% del IPREM, unos 2400 € al mes por persona, más un seguro médico privado.',
        'Canarias y Baleares son Schengen a todos los efectos, pero Ceuta y Melilla tienen un régimen especial: hay control de pasaportes en los vuelos y barcos hacia la península, y pasar a Marruecos es salir de Schengen.',
        'Los jóvenes de Australia, Canadá, Nueva Zelanda, Japón y Corea del Sur pueden obtener un visado de vacaciones y trabajo de un año en España; el límite de edad depende del país.',
      ],
      pitfalls: [
        'La policía de fronteras española comprueba de verdad los medios económicos: unos 121 € por persona y día y, como mínimo, unos 1100 € para un viaje de cualquier duración, en efectivo o con tarjeta. Si te alojas con amigos, necesitas una carta de invitación que tu anfitrión tramita en la policía.',
        'Gibraltar y Andorra están fuera de Schengen: con un visado de una entrada, cruzar desde La Línea o La Seu d’Urgell gasta tu entrada. El acuerdo UE–Reino Unido de 2025 debe trasladar los controles al puerto y al aeropuerto de Gibraltar; comprueba si ya se aplica en tus fechas.',
        'Hoteles, pisos turísticos y empresas de alquiler de coches están obligados a recoger muchos datos —teléfono, correo, medio de pago, parentesco con menores— y enviarlos a la policía. No es una estafa, pero enseña el pasaporte solo al anfitrión o en el mostrador.',
      ],
      waivers: [
        'Un permiso de residencia o un visado nacional D vigente de cualquier país Schengen te permite visitar España sin visado hasta 90 días en 180. Los permisos de Irlanda y Chipre no valen.',
        'Un visado Schengen expedido por otro Estado miembro vale en España dentro de sus fechas y su número de días, también en Canarias y Baleares. Haz el primer viaje al país emisor.',
      ],
      passports: {
        RU: 'España sigue aceptando solicitudes turísticas de ciudadanos rusos en los centros BLS de Rusia, pero desde noviembre de 2025 los visados suelen ser de una sola entrada; la tasa es la completa, 90 €. No hay vuelos directos —se vuela vía Estambul, Belgrado o Ereván— y las tarjetas rusas no funcionan.',
        US: 'Los ciudadanos estadounidenses no necesitan visado: 90 días en 180. El ETIAS (20 €) se ha retrasado y no se espera antes de 2027.',
        GB: 'Los británicos tienen un límite de 90 días en 180, aunque tengan casa en España. Para quedarse más hace falta un visado nacional D (no lucrativa o teletrabajo, por ejemplo). El pasaporte debe tener menos de 10 años el día de entrada y seguir vigente 3 meses después de salir.',
        MX: 'Los mexicanos no necesitan visado, pero en Barajas los controles son especialmente estrictos: ten a mano el billete de vuelta, las reservas de alojamiento, dinero para el viaje y el seguro. Lo mismo vale para colombianos, peruanos y otros latinoamericanos.',
        IN: 'Los ciudadanos indios necesitan visado Schengen a través de BLS. Con la «cascada» europea, dos visados bien usados en tres años dan uno de entradas múltiples de 2 años y luego de 5.',
        UA: 'Los ucranianos con pasaporte biométrico entran sin visado durante 90 días en 180; la protección temporal en la UE dura hasta marzo de 2027.',
      },
    },
    de: {
      summary:
        'Spanien gehört zu Schengen: Bürger der EU, des EWR und der Schweiz reisen mit dem Personalausweis ein, Reisende aus den USA, Großbritannien, Kanada, Australien, Japan, Mexiko, Kolumbien, Argentinien, Brasilien, der Ukraine und anderen visumfreien Ländern bleiben bis zu 90 Tage in jedem 180-Tage-Zeitraum. Mit russischem, indischem, chinesischem, türkischem, marokkanischem und vielen anderen Pässen brauchst du ein Schengen-Visum für 90 € von einem spanischen Konsulat.',
      apply:
        'Zuständig ist das spanische Konsulat an deinem Wohnort; in den meisten Ländern nimmt BLS International die Anträge an (in einigen VFS Global). Die Gebühr beträgt 90 € plus Servicegebühr, die Entscheidung dauert meist 15 Tage. BLS-Termine in Russland, Marokko und Indien sind schnell weg – schau früh morgens auf die Seite und bezahle nie Vermittler für „Slots“.',
      visaRun:
        'Visa-Runs funktionieren nicht: Die 90 Tage gelten für den ganzen Schengen-Raum in einem rollierenden 180-Tage-Fenster. Ein Ausflug nach Marokko, Gibraltar oder Andorra setzt den Zähler nicht zurück, er hält ihn nur an, und seit April 2026 erfasst das EES jede Ein- und Ausreise.',
      transit:
        'Beim Umsteigen in Madrid-Barajas oder Barcelona zwischen zwei Flügen außerhalb von Schengen – etwa von Lateinamerika nach Afrika – brauchen die meisten kein Visum, solange sie im Transitbereich bleiben. Staatsangehörige auf der EU-Liste für Flughafentransitvisa (Afghanistan, Bangladesch, Iran, Nigeria, Pakistan u. a.) und einiger von Spanien ergänzter Länder benötigen eines – außer mit gültigem Visum oder Aufenthaltstitel der USA, Kanadas, Japans oder eines EWR-Staats.',
      nomad:
        'Das Visum für internationale Telearbeit gilt für alle, die für ausländische Arbeitgeber oder Kunden arbeiten (spanische dürfen höchstens 20 % des Einkommens ausmachen): Einkommen von mindestens 200 % des Mindestlohns, 2026 rund 2.850 € im Monat, dazu Berufserfahrung oder Abschluss. Konsulate stellen ein Visum für ein Jahr aus; beantragst du es während eines legalen Aufenthalts in Spanien, bekommst du direkt eine Aufenthaltserlaubnis für drei Jahre.',
      hacks: [
        'Die Telearbeits-Erlaubnis kannst du beantragen, während du legal in Spanien bist (etwa in deinen 90 visumfreien Tagen): online bei der UGE, und statt eines Jahresvisums gibt es eine Aufenthaltserlaubnis für drei Jahre.',
        'Wer von passivem Einkommen leben will, ohne zu arbeiten, nimmt das Visum ohne Erwerbstätigkeit (no lucrativa): nötig sind etwa 400 % des IPREM – rund 2.400 € im Monat pro Person – plus private Krankenversicherung.',
        'Kanaren und Balearen sind vollwertiges Schengen-Gebiet, Ceuta und Melilla dagegen eine Sonderzone: Bei Flügen und Fähren aufs Festland gibt es Passkontrollen, und ein Abstecher nach Marokko bedeutet die Ausreise aus Schengen.',
        'Junge Menschen aus Australien, Kanada, Neuseeland, Japan und Südkorea können ein einjähriges spanisches Working-Holiday-Visum bekommen; die Altersgrenze hängt vom Land ab.',
      ],
      pitfalls: [
        'Spanische Grenzbeamte prüfen tatsächlich die Mittel: rund 121 € pro Person und Tag und mindestens etwa 1.100 € für eine Reise beliebiger Länge, bar oder per Karte. Wohnst du bei Freunden, brauchst du eine carta de invitación, die dein Gastgeber bei der Polizei beantragt.',
        'Gibraltar und Andorra liegen außerhalb von Schengen: Mit einem Visum für eine Einreise verbraucht ein Abstecher ab La Línea oder La Seu d’Urgell deine Einreise. Das EU–UK-Abkommen von 2025 soll die Kontrollen in Gibraltars Hafen und Flughafen verlegen – prüfe, ob es zu deinen Reisedaten gilt.',
        'Hotels, Ferienwohnungen und Autovermieter müssen per Gesetz viele Gästedaten erfassen – Telefon, E-Mail, Zahlungsart, Verwandtschaft bei Minderjährigen – und an die Polizei melden. Das ist kein Betrug, aber zeige den Pass nur dem Gastgeber oder an der Rezeption.',
      ],
      waivers: [
        'Mit einem gültigen Aufenthaltstitel oder nationalen D-Visum eines Schengen-Staats reist du bis zu 90 Tage in 180 visumfrei nach Spanien. Irische und zyprische Titel zählen nicht.',
        'Ein Schengen-Visum eines anderen Mitgliedstaats gilt innerhalb seiner Daten und Tage auch in Spanien – auf den Kanaren und Balearen ebenso. Die erste Reise sollte ins ausstellende Land gehen.',
      ],
      passports: {
        RU: 'Spanien nimmt weiterhin touristische Anträge russischer Staatsangehöriger über die BLS-Zentren in Russland an, seit November 2025 aber meist nur für eine Einreise; die Gebühr beträgt volle 90 €. Direktflüge gibt es nicht – man fliegt über Istanbul, Belgrad oder Jerewan; russische Bankkarten funktionieren nicht.',
        US: 'US-Bürger brauchen kein Visum: 90 Tage in 180. ETIAS (20 €) verzögert sich und wird nicht vor 2027 erwartet.',
        GB: 'Briten dürfen 90 Tage in 180 bleiben – auch wenn ihnen ein Haus in Spanien gehört. Für längere Aufenthalte braucht es ein nationales D-Visum (etwa no lucrativa oder Telearbeit). Der Pass muss am Einreisetag jünger als 10 Jahre sein und noch 3 Monate nach der Ausreise gelten.',
        MX: 'Mexikaner brauchen kein Visum, werden in Barajas aber besonders streng kontrolliert: Halte Rückflugticket, Unterkunftsbuchungen, Reisegeld und Versicherung bereit. Das gilt ebenso für Kolumbianer, Peruaner und andere Lateinamerikaner.',
        IN: 'Indische Staatsangehörige brauchen ein Schengen-Visum über BLS. Nach der EU-„Kaskade“ gibt es nach zwei korrekt genutzten Visa in drei Jahren ein Mehrfachvisum für 2 Jahre, danach für 5 Jahre.',
        UA: 'Ukrainer mit biometrischem Pass reisen 90 Tage in 180 visumfrei ein; der vorübergehende Schutz in der EU gilt bis März 2027.',
      },
    },
    fr: {
      summary:
        'L’Espagne fait partie de Schengen : les citoyens de l’UE, de l’EEE et de la Suisse entrent avec leur carte d’identité, et les voyageurs américains, britanniques, canadiens, australiens, japonais, mexicains, colombiens, argentins, brésiliens, ukrainiens et d’autres pays exemptés restent jusqu’à 90 jours sur 180. Les titulaires d’un passeport russe, indien, chinois, turc, marocain et de nombreux autres ont besoin d’un visa Schengen à 90 € délivré par un consulat espagnol.',
      apply:
        'La demande se fait au consulat espagnol compétent pour votre lieu de résidence ; dans la plupart des pays, c’est BLS International qui reçoit les dossiers (VFS Global dans quelques-uns). Les frais sont de 90 € plus le service, et la décision prend en général 15 jours. Les créneaux BLS en Russie, au Maroc et en Inde partent très vite : consultez le site tôt le matin et ne payez jamais d’intermédiaire pour un « créneau ».',
      visaRun:
        'Les visa runs ne fonctionnent pas : les 90 jours se comptent sur tout l’espace Schengen dans une fenêtre glissante de 180. Un saut au Maroc, à Gibraltar ou en Andorre ne remet pas le compteur à zéro, il le met seulement en pause, et depuis avril 2026 l’EES enregistre chaque entrée et sortie.',
      transit:
        'Une correspondance à Madrid-Barajas ou Barcelone entre deux vols hors Schengen — par exemple de l’Amérique latine vers l’Afrique — ne demande pas de visa à la plupart des nationalités, tant que vous restez en zone de transit. Les ressortissants de la liste européenne du visa de transit aéroportuaire (Afghanistan, Bangladesh, Iran, Nigeria, Pakistan, etc.) et de quelques pays ajoutés par l’Espagne en ont besoin, sauf s’ils détiennent un visa ou un titre de séjour valide des États-Unis, du Canada, du Japon ou d’un pays de l’EEE.',
      nomad:
        'Le visa de télétravail international s’adresse à ceux qui travaillent pour des employeurs ou des clients étrangers (les clients espagnols ne doivent pas dépasser 20 % des revenus) : revenus d’au moins 200 % du salaire minimum, environ 2 850 € par mois en 2026, plus de l’expérience ou un diplôme. Les consulats délivrent un visa d’un an ; déposée depuis l’Espagne pendant un séjour régulier, la demande donne directement un titre de séjour de trois ans.',
      hacks: [
        'Vous pouvez demander l’autorisation de télétravail en étant légalement en Espagne (par exemple pendant vos 90 jours sans visa) : la demande se fait en ligne auprès de l’UGE et vous obtenez un titre de trois ans au lieu d’un visa d’un an.',
        'Pour vivre de revenus passifs sans travailler, il existe le visa de résidence non lucrative : il faut environ 400 % de l’IPREM, soit quelque 2 400 € par mois et par personne, plus une assurance santé privée.',
        'Les Canaries et les Baléares sont pleinement Schengen, mais Ceuta et Melilla ont un régime à part : contrôle des passeports sur les vols et bateaux vers la péninsule, et passer au Maroc revient à sortir de Schengen.',
        'Les jeunes Australiens, Canadiens, Néo-Zélandais, Japonais et Sud-Coréens peuvent obtenir un visa vacances-travail d’un an en Espagne ; la limite d’âge dépend du pays.',
      ],
      pitfalls: [
        'La police aux frontières espagnole vérifie vraiment les ressources : environ 121 € par personne et par jour, avec un minimum d’environ 1 100 € pour un séjour de n’importe quelle durée, en espèces ou par carte. Si vous logez chez des amis, il faut une carta de invitación que votre hôte obtient auprès de la police.',
        'Gibraltar et l’Andorre sont hors Schengen : avec un visa à entrée unique, un passage depuis La Línea ou La Seu d’Urgell consomme votre entrée. L’accord UE–Royaume-Uni de 2025 doit déplacer les contrôles au port et à l’aéroport de Gibraltar — vérifiez s’il s’applique à vos dates.',
        'Hôtels, locations de vacances et loueurs de voitures sont tenus de collecter beaucoup de données — téléphone, e-mail, moyen de paiement, lien de parenté pour les mineurs — et de les transmettre à la police. Ce n’est pas une arnaque, mais ne montrez votre passeport qu’à l’hôte ou à la réception.',
      ],
      waivers: [
        'Un titre de séjour ou un visa long séjour D valide d’un pays Schengen vous permet de venir en Espagne sans visa jusqu’à 90 jours sur 180. Les titres irlandais et chypriotes ne comptent pas.',
        'Un visa Schengen délivré par un autre État membre est valable en Espagne dans la limite de ses dates et de ses jours — Canaries et Baléares comprises. Effectuez le premier voyage dans le pays émetteur.',
      ],
      passports: {
        RU: 'L’Espagne accepte toujours les demandes touristiques des ressortissants russes dans les centres BLS en Russie, mais depuis novembre 2025 les visas sont en général à entrée unique ; les frais sont de 90 € plein tarif. Pas de vols directs : on passe par Istanbul, Belgrade ou Erevan ; les cartes bancaires russes ne fonctionnent pas.',
        US: 'Les citoyens américains n’ont pas besoin de visa : 90 jours sur 180. L’ETIAS (20 €) a été repoussé et n’est pas attendu avant 2027.',
        GB: 'Les Britanniques sont limités à 90 jours sur 180, même propriétaires d’une maison en Espagne. Pour rester plus longtemps, il faut un visa national D (non lucrative ou télétravail, par exemple). Le passeport doit avoir moins de 10 ans le jour de l’entrée et rester valable 3 mois après la sortie.',
        MX: 'Les Mexicains n’ont pas besoin de visa, mais les contrôles à Barajas sont particulièrement stricts : gardez sous la main billet retour, réservations, argent pour le séjour et assurance. Il en va de même pour les Colombiens, Péruviens et autres Latino-Américains.',
        IN: 'Les citoyens indiens ont besoin d’un visa Schengen via BLS. Selon la « cascade » européenne, deux visas bien utilisés en trois ans ouvrent droit à un visa à entrées multiples de 2 ans, puis de 5 ans.',
        UA: 'Les Ukrainiens munis d’un passeport biométrique entrent sans visa pour 90 jours sur 180 ; la protection temporaire dans l’UE court jusqu’en mars 2027.',
      },
    },
    it: {
      summary:
        'La Spagna fa parte di Schengen: i cittadini di UE, SEE e Svizzera entrano con la carta d’identità, mentre chi ha passaporto di Stati Uniti, Regno Unito, Canada, Australia, Giappone, Messico, Colombia, Argentina, Brasile, Ucraina e altri paesi esenti resta fino a 90 giorni su 180. Chi ha passaporto russo, indiano, cinese, turco, marocchino e di molti altri paesi ha bisogno di un visto Schengen da 90 € rilasciato da un consolato spagnolo.',
      apply:
        'Si fa domanda al consolato spagnolo competente per la tua residenza; nella maggior parte dei paesi le pratiche le raccoglie BLS International (in alcuni VFS Global). La tassa è di 90 € più il servizio e la decisione arriva di solito in 15 giorni. Gli appuntamenti BLS in Russia, Marocco e India finiscono subito: controlla il sito al mattino presto e non pagare mai intermediari per gli «slot».',
      visaRun:
        'I visa run non funzionano: i 90 giorni si contano su tutta l’area Schengen in una finestra mobile di 180. Una gita in Marocco, a Gibilterra o in Andorra non azzera il contatore, lo mette solo in pausa, e dall’aprile 2026 l’EES registra ogni ingresso e uscita.',
      transit:
        'Per cambiare aereo a Madrid-Barajas o Barcellona tra due voli fuori Schengen — per esempio dall’America Latina all’Africa — la maggior parte delle nazionalità non ha bisogno di visto, se resta nella zona di transito. I cittadini della lista UE del visto di transito aeroportuale (Afghanistan, Bangladesh, Iran, Nigeria, Pakistan e altri) e di alcuni paesi aggiunti dalla Spagna devono averlo, a meno di avere un visto o un permesso valido di Stati Uniti, Canada, Giappone o di un paese SEE.',
      nomad:
        'Il visto per telelavoro internazionale è per chi lavora per datori di lavoro o clienti stranieri (quelli spagnoli non possono superare il 20% del reddito): reddito di almeno il 200% del salario minimo, circa 2.850 € al mese nel 2026, più esperienza o laurea. I consolati rilasciano un visto di un anno; se fai domanda dalla Spagna durante un soggiorno regolare, ottieni subito un permesso di residenza di tre anni.',
      hacks: [
        'Puoi chiedere l’autorizzazione al telelavoro mentre sei legalmente in Spagna (per esempio nei tuoi 90 giorni senza visto): la domanda si fa online all’UGE e ottieni un permesso di tre anni invece di un visto di uno.',
        'Per vivere di rendita senza lavorare c’è il visto di residenza non lucrativa: serve circa il 400% dell’IPREM, intorno ai 2.400 € al mese a persona, più un’assicurazione sanitaria privata.',
        'Canarie e Baleari sono Schengen a tutti gli effetti, mentre Ceuta e Melilla hanno un regime speciale: su voli e traghetti verso la penisola c’è il controllo passaporti, e passare in Marocco significa uscire da Schengen.',
        'I giovani di Australia, Canada, Nuova Zelanda, Giappone e Corea del Sud possono ottenere un visto vacanza-lavoro di un anno in Spagna; il limite d’età dipende dal paese.',
      ],
      pitfalls: [
        'La polizia di frontiera spagnola controlla davvero i mezzi economici: circa 121 € a persona al giorno e almeno 1.100 € circa per un viaggio di qualsiasi durata, in contanti o su carta. Se dormi da amici, serve la carta de invitación che il tuo ospite richiede alla polizia.',
        'Gibilterra e Andorra sono fuori Schengen: con un visto a ingresso singolo, passare da La Línea o da La Seu d’Urgell consuma il tuo ingresso. L’accordo UE–Regno Unito del 2025 dovrebbe spostare i controlli al porto e all’aeroporto di Gibilterra: verifica se è già in vigore nelle tue date.',
        'Hotel, case vacanza e autonoleggi sono obbligati per legge a raccogliere molti dati degli ospiti — telefono, e-mail, metodo di pagamento, parentela per i minori — e a trasmetterli alla polizia. Non è una truffa, ma mostra il passaporto solo all’host o alla reception.',
      ],
      waivers: [
        'Un permesso di soggiorno o un visto nazionale D valido di qualsiasi paese Schengen ti permette di visitare la Spagna senza visto fino a 90 giorni su 180. I permessi irlandesi e ciprioti non valgono.',
        'Un visto Schengen rilasciato da un altro Stato membro vale anche in Spagna entro le sue date e i suoi giorni, Canarie e Baleari comprese. Fai il primo viaggio nel paese che l’ha rilasciato.',
      ],
      passports: {
        RU: 'La Spagna continua ad accettare domande turistiche dai cittadini russi nei centri BLS in Russia, ma da novembre 2025 i visti sono di solito a ingresso singolo; la tassa è piena, 90 €. Non ci sono voli diretti — si passa da Istanbul, Belgrado o Erevan — e le carte russe non funzionano.',
        US: 'I cittadini statunitensi non hanno bisogno di visto: 90 giorni su 180. L’ETIAS (20 €) è stato rinviato e non è atteso prima del 2027.',
        GB: 'I britannici hanno il limite di 90 giorni su 180, anche se possiedono una casa in Spagna. Per restare di più serve un visto nazionale D (non lucrativa o telelavoro, per esempio). Il passaporto deve avere meno di 10 anni il giorno dell’ingresso e valere ancora 3 mesi dopo l’uscita.',
        MX: 'I messicani non hanno bisogno di visto, ma a Barajas i controlli sono particolarmente severi: tieni a portata di mano biglietto di ritorno, prenotazioni, soldi per il viaggio e assicurazione. Lo stesso vale per colombiani, peruviani e altri latinoamericani.',
        IN: 'I cittadini indiani hanno bisogno del visto Schengen tramite BLS. Con la «cascata» europea, due visti usati correttamente in tre anni danno un visto multiplo di 2 anni e poi di 5.',
        UA: 'Gli ucraini con passaporto biometrico entrano senza visto per 90 giorni su 180; la protezione temporanea nell’UE vale fino a marzo 2027.',
      },
    },
  },
};

export default guide;
