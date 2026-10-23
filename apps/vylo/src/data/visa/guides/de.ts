import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'DE',
  checked: '2026-10',
  fees: { visa: { kind: 'fixed', amount: 90, currency: 'EUR' } },
  stay: { visa: 90 },
  links: { immigration: 'https://www.auswaertiges-amt.de/en/visa-service' },
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
        'Германия входит в Шенген: граждане ЕС, ЕЭЗ и Швейцарии въезжают по ID-карте, а граждане США, Великобритании, Канады, Австралии, Японии, Кореи, Бразилии, Украины и других безвизовых стран — до 90 дней в любые 180. Россиянам, индийцам, китайцам, туркам, казахстанцам и многим другим нужна шенгенская виза за 90 € через немецкое посольство или консульство.',
      apply:
        'Подают в немецкое представительство по месту жительства; в большинстве стран запись и приём документов ведут VFS Global или TLScontact, в Турции — iDATA. Анкету заполняют онлайн (VIDEX или консульский портал МИД Германии), на приёме сдают отпечатки и платят 90 € плюс сервисный сбор. Ожидание записи в Индии, Турции и Пакистане бывает многомесячным — ищите слот, как только знаете даты, максимум за шесть месяцев.',
      visaRun:
        'Визаран не работает: 90 дней считаются по всему Шенгену в скользящем окне 180 дней, и поездка в Лондон, Белград или Стамбул счётчик не обнуляет. С апреля 2026 года EES фиксирует каждый въезд и выезд, а за перерасчёт в Германии грозят штраф, выдворение и запрет на въезд.',
      transit:
        'Пересадка во Франкфурте или Мюнхене между двумя рейсами за пределы Шенгена большинству не требует визы, если не выходить из транзитной зоны. Гражданам из общего списка ЕС (Афганистан, Бангладеш, Иран, Ирак, Нигерия, Пакистан и др.) и нескольких стран, добавленных Германией, нужна транзитная виза — кроме владельцев действующей визы или ВНЖ США, Канады, Японии или страны ЕЭЗ. Если следующий рейс — внутри Шенгена, вы въезжаете в Германию уже при пересадке.',
      hacks: [
        'Граждане США, Великобритании, Канады, Австралии, Новой Зеландии, Японии, Южной Кореи и Израиля могут въехать без визы и в течение 90 дней подать на немецкий ВНЖ (работа, фриланс, учёба) прямо в Германии, не возвращаясь домой за визой.',
        'Карта возможностей (Chancenkarte) даёт квалифицированным специалистам из-за пределов ЕС до года в Германии на поиск работы, с правом подрабатывать до 20 часов в неделю; её выдают по баллам — образование, немецкий или английский, возраст, связи с Германией.',
        'Отдельной визы для цифровых кочевников нет, но фрилансеры получают ВНЖ для самозанятых (Freiberufler): обычно нужны письма о намерениях от немецких клиентов и подтверждение дохода.',
        'Регистрация по месту жительства (Anmeldung) нужна в течение двух недель после заселения в квартиру, но если вы не прописаны в Германии и живёте в ней не дольше трёх месяцев, регистрироваться не нужно. Отели и апартаменты регистрируют гостей сами.',
      ],
      pitfalls: [
        'С сентября 2024 года Германия проверяет документы на всех сухопутных границах: берите паспорт даже в поезд из Амстердама, Праги или Зальцбурга — ID-карты хватает только гражданам ЕС.',
        'Не берите немецкую визу только потому, что рейс в Мюнхен дешевле: если больше ночей в Италии, подавать нужно в итальянское консульство, а немецкая пограничная полиция действительно спрашивает о маршруте.',
        'Посредники и «боты», перепродающие записи в визовые центры в Турции, Индии и Пакистане, — частый обман. Записывайтесь только на официальном сайте VFS, TLScontact или iDATA, на который ссылается посольство: запись бесплатна.',
      ],
      waivers: [
        'Действующий ВНЖ или долгосрочная виза D любой шенгенской страны позволяют ездить в Германию без визы до 90 дней в любые 180. Ирландский и кипрский ВНЖ не подходят.',
        'Шенгенская виза другой страны действует и в Германии в пределах своих дат и числа дней. При первой поездке будьте готовы показать, что основной целью была страна, выдавшая визу.',
      ],
      passports: {
        RU: 'После закрытия консульств в Екатеринбурге, Новосибирске и Калининграде в 2023 году Германия выдаёт в России заметно меньше виз: записей на туристические мало, а с ноября 2025 года визы, как правило, однократные. Подать можно и в стране, где у вас есть ВНЖ. Прямых рейсов нет, российские карты не работают.',
        US: 'Гражданам США виза не нужна: 90 дней в любые 180, а для долгого пребывания можно подать на ВНЖ прямо в Германии. Запуск ETIAS (20 €) отложен и раньше 2027 года не ожидается.',
        GB: 'Британцы ограничены 90 днями в 180, но, как и американцы, могут оформить ВНЖ, не выезжая из Германии. Паспорт должен быть моложе 10 лет на дату въезда и действовать ещё 3 месяца после выезда.',
        IN: 'Гражданам Индии нужна шенгенская виза; ждать записи в VFS в сезон приходится неделями. По правилу «каскада» после двух правильно использованных виз за три года дают многократную визу на 2 года, затем на 5 лет.',
        TR: 'Граждане Турции подают через iDATA; запись в немецкие центры часто занимает месяцы, так что бронируйте заранее. Ранее правильно использованные шенгенские визы помогают получить многократную на более долгий срок.',
        UA: 'Граждане Украины с биометрическим паспортом въезжают без визы на 90 дней в 180. Временная защита в Германии продлена до марта 2027 года; для неё нужна регистрация и запись в ведомство по делам иностранцев.',
      },
    },
    en: {
      summary:
        'Germany is in Schengen: EU, EEA and Swiss citizens enter with an ID card, while US, UK, Canadian, Australian, Japanese, Korean, Brazilian, Ukrainian and other visa-exempt travellers stay up to 90 days in any 180. Russian, Indian, Chinese, Turkish, Kazakh and many other passport holders need a €90 Schengen visa from a German embassy or consulate.',
      apply:
        'Apply to the German mission responsible for where you live; in most countries VFS Global or TLScontact handle appointments and documents, and iDATA does in Turkey. Fill in the form online (VIDEX or the Federal Foreign Office’s consular portal), then give fingerprints and pay €90 plus the service charge at the appointment. Waits for a slot in India, Turkey and Pakistan can run to months — start looking as soon as you know your dates, up to six months ahead.',
      visaRun:
        'Visa runs don’t work: the 90 days are counted across the whole Schengen area over any rolling 180-day window, and popping out to London, Belgrade or Istanbul doesn’t reset the clock. Since April 2026 the EES records every entry and exit, and overstaying in Germany can mean a fine, removal and an entry ban.',
      transit:
        'Changing planes in Frankfurt or Munich between two non-Schengen flights needs no visa for most nationalities, as long as you stay airside. Citizens on the EU airport-transit-visa list (Afghanistan, Bangladesh, Iran, Iraq, Nigeria, Pakistan and others) and a few nationalities Germany adds need an airport transit visa, unless they hold a valid US, Canadian, Japanese or EEA visa or residence permit. If your next flight is within Schengen, you enter Germany at the connection.',
      hacks: [
        'Citizens of the US, UK, Canada, Australia, New Zealand, Japan, South Korea and Israel can enter visa-free and apply for a German residence permit (work, freelance, study) inside Germany within 90 days, without going home for a visa.',
        'The Opportunity Card (Chancenkarte) gives skilled non-EU workers up to a year in Germany to look for a job, with up to 20 hours a week of work allowed; it’s points-based — qualifications, German or English, age and ties to Germany.',
        'There’s no digital-nomad visa, but freelancers can get a residence permit for self-employment (Freiberufler); it usually takes letters of intent from German clients and proof of income.',
        'Registering your address (Anmeldung) is due within two weeks of moving into a flat — but if you aren’t registered in Germany and stay no longer than three months, you don’t have to. Hotels and holiday lets register guests themselves.',
      ],
      pitfalls: [
        'Germany has been checking papers at all its land borders since September 2024: carry your passport even on a train from Amsterdam, Prague or Salzburg — an ID card is enough only for EU citizens.',
        'Don’t get a German visa just because the Munich flight is cheaper: if most of your nights are in Italy, the Italian consulate is the right one, and German border police do ask about itineraries.',
        'Agents and “bots” reselling visa-centre slots in Turkey, India and Pakistan are a common scam. Book only on the official VFS, TLScontact or iDATA site linked from the embassy — booking is free.',
      ],
      waivers: [
        'A valid residence permit or long-stay D visa from any Schengen country lets you visit Germany visa-free for up to 90 days in any 180. Irish and Cypriot permits don’t count.',
        'A Schengen visa issued by another member state is valid in Germany within its dates and number of days. On the first trip, be ready to show that the issuing country was your main destination.',
      ],
      passports: {
        RU: 'Since Germany closed its consulates in Yekaterinburg, Novosibirsk and Kaliningrad in 2023, it issues far fewer visas in Russia: tourist slots are scarce and, since November 2025, visas are usually single-entry. You can also apply in a country where you hold residence. There are no direct flights, and Russian bank cards don’t work.',
        US: 'US citizens need no visa: 90 days in any 180, and for a longer stay you can apply for a residence permit inside Germany. ETIAS (€20) has been delayed and isn’t expected before 2027.',
        GB: 'UK citizens are limited to 90 days in 180 but, like Americans, can get a residence permit without leaving Germany. Your passport must be under 10 years old on the day you enter and valid for 3 months after you leave.',
        IN: 'Indian citizens need a Schengen visa, and VFS slots in season can take weeks. Under the EU “cascade”, two visas used correctly within three years earn a 2-year multiple-entry visa, then a 5-year one.',
        TR: 'Turkish citizens apply through iDATA; appointments for Germany often take months, so book early. Previous Schengen visas used correctly help you get longer multiple-entry visas.',
        UA: 'Ukrainians with a biometric passport enter visa-free for 90 days in 180. Temporary protection in Germany runs until March 2027; it requires registering your address and an appointment at the foreigners’ office.',
      },
    },
    es: {
      summary:
        'Alemania forma parte de Schengen: los ciudadanos de la UE, el EEE y Suiza entran con el DNI, y los de EE. UU., Reino Unido, Canadá, Australia, Japón, Corea, Brasil, Ucrania y otros países exentos se quedan hasta 90 días en cualquier periodo de 180. Quienes tienen pasaporte ruso, indio, chino, turco, kazajo y muchos otros necesitan un visado Schengen de 90 € de una embajada o consulado alemán.',
      apply:
        'Se solicita en la representación alemana que corresponde a tu lugar de residencia; en la mayoría de países las citas y los documentos los gestionan VFS Global o TLScontact, y en Turquía, iDATA. Rellena el formulario en línea (VIDEX o el portal consular del Ministerio alemán de Exteriores) y en la cita deja las huellas y paga 90 € más la tarifa del servicio. En India, Turquía y Pakistán esperar una cita puede llevar meses: busca hueco en cuanto sepas las fechas, hasta seis meses antes.',
      visaRun:
        'Los visa runs no sirven: los 90 días se cuentan en todo Schengen dentro de una ventana móvil de 180, y salir a Londres, Belgrado o Estambul no pone el contador a cero. Desde abril de 2026 el EES registra cada entrada y salida, y quedarse de más en Alemania puede suponer multa, expulsión y prohibición de entrada.',
      transit:
        'Para cambiar de avión en Fráncfort o Múnich entre dos vuelos fuera de Schengen la mayoría no necesita visado, siempre que no salga de la zona de tránsito. Los ciudadanos de la lista europea de visado de tránsito aeroportuario (Afganistán, Bangladés, Irán, Irak, Nigeria, Pakistán y otros) y de algunos países que añade Alemania sí lo necesitan, salvo que tengan visado o residencia vigente de EE. UU., Canadá, Japón o un país del EEE. Si el siguiente vuelo es dentro de Schengen, entras en Alemania en la escala.',
      hacks: [
        'Los ciudadanos de EE. UU., Reino Unido, Canadá, Australia, Nueva Zelanda, Japón, Corea del Sur e Israel pueden entrar sin visado y pedir, dentro de los 90 días, un permiso de residencia alemán (trabajo, autónomo, estudios) desde la propia Alemania, sin volver a casa por un visado.',
        'La Tarjeta de Oportunidades (Chancenkarte) da a profesionales cualificados de fuera de la UE hasta un año en Alemania para buscar trabajo, con hasta 20 horas semanales de empleo permitidas; se concede por puntos: titulación, alemán o inglés, edad y vínculos con Alemania.',
        'No hay visado de nómada digital, pero los autónomos pueden obtener un permiso de residencia por trabajo por cuenta propia (Freiberufler); suele exigir cartas de intención de clientes alemanes y prueba de ingresos.',
        'El empadronamiento (Anmeldung) debe hacerse en las dos semanas siguientes a mudarte a un piso, pero si no estás registrado en Alemania y te quedas tres meses como máximo, no hace falta. Hoteles y pisos turísticos registran a sus huéspedes.',
      ],
      pitfalls: [
        'Desde septiembre de 2024 Alemania controla documentos en todas sus fronteras terrestres: lleva el pasaporte incluso en un tren desde Ámsterdam, Praga o Salzburgo; el DNI solo basta a los ciudadanos de la UE.',
        'No pidas el visado alemán solo porque el vuelo a Múnich sea más barato: si pasas más noches en Italia, te corresponde el consulado italiano, y la policía federal alemana pregunta por el itinerario.',
        'Los intermediarios y «bots» que revenden citas en Turquía, India y Pakistán son una estafa habitual. Reserva solo en la web oficial de VFS, TLScontact o iDATA enlazada desde la embajada: la cita es gratuita.',
      ],
      waivers: [
        'Un permiso de residencia o un visado nacional D vigente de cualquier país Schengen te permite visitar Alemania sin visado hasta 90 días en 180. Los permisos de Irlanda y Chipre no valen.',
        'Un visado Schengen expedido por otro Estado miembro vale en Alemania dentro de sus fechas y su número de días. En el primer viaje, prepárate para demostrar que el país emisor era tu destino principal.',
      ],
      passports: {
        RU: 'Desde que Alemania cerró en 2023 sus consulados en Ekaterimburgo, Novosibirsk y Kaliningrado, expide muchos menos visados en Rusia: hay pocas citas turísticas y, desde noviembre de 2025, los visados suelen ser de una entrada. También puedes solicitarlo en un país donde tengas residencia. No hay vuelos directos y las tarjetas rusas no funcionan.',
        US: 'Los ciudadanos estadounidenses no necesitan visado: 90 días en 180, y para estancias largas pueden pedir la residencia dentro de Alemania. El ETIAS (20 €) se ha retrasado y no se espera antes de 2027.',
        GB: 'Los británicos tienen un límite de 90 días en 180, pero, igual que los estadounidenses, pueden obtener la residencia sin salir de Alemania. El pasaporte debe tener menos de 10 años el día de entrada y seguir vigente 3 meses después de salir.',
        IN: 'Los ciudadanos indios necesitan visado Schengen, y en temporada alta conseguir cita en VFS puede tardar semanas. Con la «cascada» europea, dos visados bien usados en tres años dan uno de entradas múltiples de 2 años y luego de 5.',
        TR: 'Los ciudadanos turcos solicitan a través de iDATA; las citas para Alemania suelen tardar meses, así que reserva pronto. Haber usado bien visados Schengen anteriores ayuda a conseguir visados múltiples más largos.',
        UA: 'Los ucranianos con pasaporte biométrico entran sin visado durante 90 días en 180. La protección temporal en Alemania dura hasta marzo de 2027 y exige empadronarse y pedir cita en la oficina de extranjería.',
      },
    },
    de: {
      summary:
        'Deutschland gehört zu Schengen: Bürger der EU, des EWR und der Schweiz reisen mit dem Personalausweis ein, Reisende aus den USA, Großbritannien, Kanada, Australien, Japan, Korea, Brasilien, der Ukraine und anderen visumfreien Ländern bleiben bis zu 90 Tage in jedem 180-Tage-Zeitraum. Mit russischem, indischem, chinesischem, türkischem, kasachischem und vielen anderen Pässen brauchst du ein Schengen-Visum für 90 € von einer deutschen Botschaft oder einem Konsulat.',
      apply:
        'Zuständig ist die deutsche Auslandsvertretung an deinem Wohnort; in den meisten Ländern übernehmen VFS Global oder TLScontact Termine und Unterlagen, in der Türkei iDATA. Das Formular füllst du online aus (VIDEX oder Konsularportal des Auswärtigen Amts), beim Termin gibst du Fingerabdrücke ab und zahlst 90 € plus Servicegebühr. In Indien, der Türkei und Pakistan kann die Wartezeit auf einen Termin Monate betragen – such dir einen, sobald die Daten feststehen, bis zu sechs Monate im Voraus.',
      visaRun:
        'Visa-Runs funktionieren nicht: Die 90 Tage gelten für den gesamten Schengen-Raum in einem rollierenden 180-Tage-Fenster, und ein Abstecher nach London, Belgrad oder Istanbul setzt den Zähler nicht zurück. Seit April 2026 erfasst das EES jede Ein- und Ausreise, und Überziehen kann in Deutschland Bußgeld, Abschiebung und Einreisesperre bedeuten.',
      transit:
        'Beim Umsteigen in Frankfurt oder München zwischen zwei Flügen außerhalb des Schengen-Raums brauchen die meisten kein Visum, solange sie im Transitbereich bleiben. Staatsangehörige auf der EU-Liste für Flughafentransitvisa (Afghanistan, Bangladesch, Iran, Irak, Nigeria, Pakistan u. a.) und einiger von Deutschland ergänzter Länder benötigen eines – außer mit gültigem Visum oder Aufenthaltstitel der USA, Kanadas, Japans oder eines EWR-Staats. Geht der Anschlussflug innerhalb von Schengen weiter, reist du schon beim Umstieg nach Deutschland ein.',
      hacks: [
        'Staatsangehörige der USA, Großbritanniens, Kanadas, Australiens, Neuseelands, Japans, Südkoreas und Israels dürfen visumfrei einreisen und innerhalb von 90 Tagen in Deutschland einen Aufenthaltstitel (Arbeit, Selbstständigkeit, Studium) beantragen, ohne für ein Visum nach Hause zu fliegen.',
        'Die Chancenkarte gibt Fachkräften aus Nicht-EU-Ländern bis zu ein Jahr Zeit, in Deutschland Arbeit zu suchen, mit bis zu 20 Wochenstunden Probebeschäftigung; vergeben wird sie nach Punkten – Qualifikation, Deutsch oder Englisch, Alter und Bezug zu Deutschland.',
        'Ein Digital-Nomad-Visum gibt es nicht, aber Freiberufler erhalten eine Aufenthaltserlaubnis für selbstständige Tätigkeit; meist braucht es Absichtserklärungen deutscher Kunden und einen Einkommensnachweis.',
        'Die Anmeldung ist innerhalb von zwei Wochen nach dem Einzug in eine Wohnung fällig – wer aber in Deutschland nicht gemeldet ist und höchstens drei Monate bleibt, muss sich nicht anmelden. Hotels und Ferienwohnungen melden ihre Gäste selbst.',
      ],
      pitfalls: [
        'Seit September 2024 kontrolliert Deutschland an allen Landgrenzen: Nimm den Pass auch im Zug aus Amsterdam, Prag oder Salzburg mit – der Personalausweis reicht nur EU-Bürgern.',
        'Hol dir kein deutsches Visum, nur weil der Flug nach München günstiger ist: Verbringst du die meisten Nächte in Italien, ist das italienische Konsulat zuständig, und die Bundespolizei fragt durchaus nach der Reiseroute.',
        'Vermittler und „Bots“, die Termine in der Türkei, Indien und Pakistan weiterverkaufen, sind eine häufige Masche. Buche nur über die offizielle VFS-, TLScontact- oder iDATA-Seite, auf die die Botschaft verlinkt – die Buchung ist kostenlos.',
      ],
      waivers: [
        'Mit einem gültigen Aufenthaltstitel oder nationalen D-Visum eines Schengen-Staats reist du bis zu 90 Tage in 180 visumfrei nach Deutschland. Irische und zyprische Titel zählen nicht.',
        'Ein Schengen-Visum eines anderen Mitgliedstaats gilt innerhalb seiner Daten und Tage auch in Deutschland. Bei der ersten Reise solltest du belegen können, dass das ausstellende Land dein Hauptziel war.',
      ],
      passports: {
        RU: 'Seit Deutschland 2023 seine Konsulate in Jekaterinburg, Nowosibirsk und Kaliningrad geschlossen hat, stellt es in Russland deutlich weniger Visa aus: Touristentermine sind rar, und seit November 2025 gibt es meist nur Visa für eine Einreise. Beantragen kannst du auch in einem Land, in dem du einen Aufenthaltstitel hast. Direktflüge gibt es nicht, russische Bankkarten funktionieren nicht.',
        US: 'US-Bürger brauchen kein Visum: 90 Tage in 180, und für längere Aufenthalte lässt sich der Aufenthaltstitel in Deutschland beantragen. ETIAS (20 €) verzögert sich und wird nicht vor 2027 erwartet.',
        GB: 'Briten dürfen 90 Tage in 180 bleiben, können aber wie US-Bürger einen Aufenthaltstitel beantragen, ohne Deutschland zu verlassen. Der Pass muss am Einreisetag jünger als 10 Jahre sein und noch 3 Monate nach der Ausreise gelten.',
        IN: 'Indische Staatsangehörige brauchen ein Schengen-Visum, und in der Saison dauert ein VFS-Termin oft Wochen. Nach der EU-„Kaskade“ gibt es nach zwei korrekt genutzten Visa in drei Jahren ein Mehrfachvisum für 2 Jahre, danach für 5 Jahre.',
        TR: 'Türkische Staatsangehörige beantragen über iDATA; Termine für Deutschland dauern oft Monate, also früh buchen. Korrekt genutzte frühere Schengen-Visa helfen, längere Mehrfachvisa zu bekommen.',
        UA: 'Ukrainer mit biometrischem Pass reisen 90 Tage in 180 visumfrei ein. Der vorübergehende Schutz in Deutschland gilt bis März 2027; dafür brauchst du eine Anmeldung und einen Termin bei der Ausländerbehörde.',
      },
    },
    fr: {
      summary:
        'L’Allemagne fait partie de Schengen : les citoyens de l’UE, de l’EEE et de la Suisse entrent avec leur carte d’identité, et les voyageurs américains, britanniques, canadiens, australiens, japonais, coréens, brésiliens, ukrainiens et d’autres pays exemptés restent jusqu’à 90 jours sur 180. Les titulaires d’un passeport russe, indien, chinois, turc, kazakh et de nombreux autres ont besoin d’un visa Schengen à 90 € délivré par une ambassade ou un consulat allemand.',
      apply:
        'La demande se fait auprès de la représentation allemande compétente pour votre lieu de résidence ; dans la plupart des pays, VFS Global ou TLScontact gèrent les rendez-vous et les dossiers, et iDATA en Turquie. Remplissez le formulaire en ligne (VIDEX ou portail consulaire du ministère allemand des Affaires étrangères), puis donnez vos empreintes et payez 90 € plus les frais de service au rendez-vous. En Inde, en Turquie et au Pakistan, l’attente d’un créneau peut durer des mois : cherchez-en un dès que vos dates sont connues, jusqu’à six mois avant.',
      visaRun:
        'Les visa runs ne fonctionnent pas : les 90 jours se comptent sur tout l’espace Schengen dans une fenêtre glissante de 180, et un aller-retour à Londres, Belgrade ou Istanbul ne remet pas le compteur à zéro. Depuis avril 2026, l’EES enregistre chaque entrée et sortie, et un dépassement en Allemagne peut valoir amende, éloignement et interdiction d’entrée.',
      transit:
        'Une correspondance à Francfort ou Munich entre deux vols hors Schengen ne demande pas de visa à la plupart des nationalités, tant que vous restez en zone de transit. Les ressortissants de la liste européenne du visa de transit aéroportuaire (Afghanistan, Bangladesh, Iran, Irak, Nigeria, Pakistan, etc.) et de quelques pays ajoutés par l’Allemagne en ont besoin, sauf s’ils détiennent un visa ou un titre de séjour valide des États-Unis, du Canada, du Japon ou d’un pays de l’EEE. Si le vol suivant reste dans Schengen, vous entrez en Allemagne dès la correspondance.',
      hacks: [
        'Les citoyens des États-Unis, du Royaume-Uni, du Canada, d’Australie, de Nouvelle-Zélande, du Japon, de Corée du Sud et d’Israël peuvent entrer sans visa et demander sur place, dans les 90 jours, un titre de séjour allemand (travail, indépendant, études), sans rentrer chez eux chercher un visa.',
        'La carte d’opportunité (Chancenkarte) donne aux professionnels qualifiés hors UE jusqu’à un an en Allemagne pour chercher un emploi, avec jusqu’à 20 heures de travail par semaine ; elle s’obtient avec un système de points : diplômes, allemand ou anglais, âge et liens avec l’Allemagne.',
        'Il n’existe pas de visa nomade numérique, mais les freelances peuvent obtenir un titre de séjour pour activité indépendante (Freiberufler) ; il faut en général des lettres d’intention de clients allemands et une preuve de revenus.',
        'L’enregistrement de l’adresse (Anmeldung) est dû dans les deux semaines suivant l’emménagement dans un logement, mais si vous n’êtes pas enregistré en Allemagne et restez trois mois au plus, il n’est pas obligatoire. Hôtels et locations de vacances enregistrent eux-mêmes leurs clients.',
      ],
      pitfalls: [
        'Depuis septembre 2024, l’Allemagne contrôle les papiers à toutes ses frontières terrestres : prenez votre passeport même dans un train venant d’Amsterdam, de Prague ou de Salzbourg — la carte d’identité ne suffit qu’aux citoyens de l’UE.',
        'Ne prenez pas un visa allemand juste parce que le vol pour Munich est moins cher : si la plupart de vos nuits sont en Italie, c’est le consulat italien qui est compétent, et la police fédérale allemande pose des questions sur l’itinéraire.',
        'Les intermédiaires et « bots » qui revendent des créneaux en Turquie, en Inde et au Pakistan sont une arnaque courante. Réservez uniquement sur le site officiel de VFS, TLScontact ou iDATA indiqué par l’ambassade : la réservation est gratuite.',
      ],
      waivers: [
        'Un titre de séjour ou un visa long séjour D valide d’un pays Schengen vous permet de venir en Allemagne sans visa jusqu’à 90 jours sur 180. Les titres irlandais et chypriotes ne comptent pas.',
        'Un visa Schengen délivré par un autre État membre est valable en Allemagne dans la limite de ses dates et de ses jours. Lors du premier voyage, soyez prêt à montrer que le pays émetteur était votre destination principale.',
      ],
      passports: {
        RU: 'Depuis la fermeture de ses consulats d’Iekaterinbourg, Novossibirsk et Kaliningrad en 2023, l’Allemagne délivre beaucoup moins de visas en Russie : les créneaux touristiques sont rares et, depuis novembre 2025, les visas sont en général à entrée unique. Vous pouvez aussi déposer dans un pays où vous résidez légalement. Pas de vols directs, et les cartes bancaires russes ne fonctionnent pas.',
        US: 'Les citoyens américains n’ont pas besoin de visa : 90 jours sur 180, et pour un séjour plus long ils peuvent demander un titre de séjour sur place. L’ETIAS (20 €) a été repoussé et n’est pas attendu avant 2027.',
        GB: 'Les Britanniques sont limités à 90 jours sur 180 mais peuvent, comme les Américains, obtenir un titre de séjour sans quitter l’Allemagne. Le passeport doit avoir moins de 10 ans le jour de l’entrée et rester valable 3 mois après la sortie.',
        IN: 'Les citoyens indiens ont besoin d’un visa Schengen, et en saison un rendez-vous chez VFS peut prendre des semaines. Selon la « cascade » européenne, deux visas bien utilisés en trois ans ouvrent droit à un visa à entrées multiples de 2 ans, puis de 5 ans.',
        TR: 'Les citoyens turcs déposent via iDATA ; les rendez-vous pour l’Allemagne prennent souvent des mois, réservez donc tôt. Des visas Schengen précédents bien utilisés aident à obtenir des visas à entrées multiples plus longs.',
        UA: 'Les Ukrainiens munis d’un passeport biométrique entrent sans visa pour 90 jours sur 180. La protection temporaire en Allemagne court jusqu’en mars 2027 ; elle suppose de déclarer son adresse et d’obtenir un rendez-vous au service des étrangers.',
      },
    },
    it: {
      summary:
        'La Germania fa parte di Schengen: i cittadini di UE, SEE e Svizzera entrano con la carta d’identità, mentre chi ha passaporto di Stati Uniti, Regno Unito, Canada, Australia, Giappone, Corea, Brasile, Ucraina e altri paesi esenti resta fino a 90 giorni su 180. Chi ha passaporto russo, indiano, cinese, turco, kazako e di molti altri paesi ha bisogno di un visto Schengen da 90 € rilasciato da un’ambasciata o un consolato tedesco.',
      apply:
        'Si fa domanda alla rappresentanza tedesca competente per il luogo in cui vivi; nella maggior parte dei paesi appuntamenti e documenti passano da VFS Global o TLScontact, in Turchia da iDATA. Compila il modulo online (VIDEX o portale consolare del Ministero degli Esteri tedesco), poi all’appuntamento lascia le impronte e paga 90 € più il costo del servizio. In India, Turchia e Pakistan l’attesa per uno slot può durare mesi: cercalo appena conosci le date, fino a sei mesi prima.',
      visaRun:
        'I visa run non funzionano: i 90 giorni si contano su tutta l’area Schengen in una finestra mobile di 180, e un salto a Londra, Belgrado o Istanbul non azzera il contatore. Dall’aprile 2026 l’EES registra ogni ingresso e uscita, e restare oltre il limite in Germania può costare multa, espulsione e divieto d’ingresso.',
      transit:
        'Per cambiare aereo a Francoforte o Monaco tra due voli fuori Schengen la maggior parte delle nazionalità non ha bisogno di visto, se resta nella zona di transito. I cittadini della lista UE del visto di transito aeroportuale (Afghanistan, Bangladesh, Iran, Iraq, Nigeria, Pakistan e altri) e di alcuni paesi aggiunti dalla Germania devono averlo, a meno di avere un visto o un permesso valido di Stati Uniti, Canada, Giappone o di un paese SEE. Se il volo successivo è dentro Schengen, entri in Germania già allo scalo.',
      hacks: [
        'I cittadini di Stati Uniti, Regno Unito, Canada, Australia, Nuova Zelanda, Giappone, Corea del Sud e Israele possono entrare senza visto e chiedere entro 90 giorni, direttamente in Germania, un permesso di soggiorno tedesco (lavoro, attività autonoma, studio), senza tornare a casa per il visto.',
        'La Carta delle opportunità (Chancenkarte) dà ai lavoratori qualificati extra UE fino a un anno in Germania per cercare lavoro, con fino a 20 ore settimanali di lavoro consentite; si ottiene a punti: titoli di studio, tedesco o inglese, età e legami con la Germania.',
        'Non esiste un visto per nomadi digitali, ma i freelance possono ottenere un permesso di soggiorno per lavoro autonomo (Freiberufler); di solito servono lettere d’intenti di clienti tedeschi e prova del reddito.',
        'La registrazione della residenza (Anmeldung) va fatta entro due settimane dal trasloco in un appartamento, ma se non sei registrato in Germania e resti al massimo tre mesi non è obbligatoria. Hotel e case vacanza registrano gli ospiti da sé.',
      ],
      pitfalls: [
        'Da settembre 2024 la Germania controlla i documenti a tutti i confini terrestri: porta il passaporto anche sul treno da Amsterdam, Praga o Salisburgo; la carta d’identità basta solo ai cittadini UE.',
        'Non prendere il visto tedesco solo perché il volo per Monaco costa meno: se passi più notti in Italia, il consolato giusto è quello italiano, e la polizia federale tedesca chiede davvero dell’itinerario.',
        'Intermediari e «bot» che rivendono appuntamenti in Turchia, India e Pakistan sono una truffa frequente. Prenota solo sul sito ufficiale di VFS, TLScontact o iDATA indicato dall’ambasciata: la prenotazione è gratuita.',
      ],
      waivers: [
        'Un permesso di soggiorno o un visto nazionale D valido di qualsiasi paese Schengen ti permette di visitare la Germania senza visto fino a 90 giorni su 180. I permessi irlandesi e ciprioti non valgono.',
        'Un visto Schengen rilasciato da un altro Stato membro vale anche in Germania entro le sue date e i suoi giorni. Al primo viaggio sii pronto a dimostrare che il paese emittente era la tua destinazione principale.',
      ],
      passports: {
        RU: 'Da quando nel 2023 la Germania ha chiuso i consolati di Ekaterinburg, Novosibirsk e Kaliningrad, in Russia rilascia molti meno visti: gli appuntamenti turistici sono pochi e da novembre 2025 i visti sono di solito a ingresso singolo. Puoi anche fare domanda in un paese in cui hai la residenza. Non ci sono voli diretti e le carte russe non funzionano.',
        US: 'I cittadini statunitensi non hanno bisogno di visto: 90 giorni su 180, e per soggiorni lunghi possono chiedere il permesso direttamente in Germania. L’ETIAS (20 €) è stato rinviato e non è atteso prima del 2027.',
        GB: 'I britannici hanno il limite di 90 giorni su 180, ma come gli statunitensi possono ottenere un permesso di soggiorno senza lasciare la Germania. Il passaporto deve avere meno di 10 anni il giorno dell’ingresso e valere ancora 3 mesi dopo l’uscita.',
        IN: 'I cittadini indiani hanno bisogno del visto Schengen, e in alta stagione un appuntamento VFS può richiedere settimane. Con la «cascata» europea, due visti usati correttamente in tre anni danno un visto multiplo di 2 anni e poi di 5.',
        TR: 'I cittadini turchi fanno domanda tramite iDATA; gli appuntamenti per la Germania richiedono spesso mesi, quindi prenota presto. Aver usato bene visti Schengen precedenti aiuta a ottenere visti multipli più lunghi.',
        UA: 'Gli ucraini con passaporto biometrico entrano senza visto per 90 giorni su 180. La protezione temporanea in Germania vale fino a marzo 2027 e richiede la registrazione della residenza e un appuntamento all’ufficio stranieri.',
      },
    },
  },
};

export default guide;
