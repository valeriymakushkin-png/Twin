import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'JP',
  checked: '2026-10',
  links: { evisa: 'https://www.evisa.mofa.go.jp', immigration: 'https://www.moj.go.jp/isa/' },
  forms: [{ name: 'Visit Japan Web', url: 'https://www.vjw.digital.go.jp', fee: { kind: 'free' } }],
  docs: ['returnTicket', 'booking'],
  passportMonths: 0,
  extend: { days: 90 },
  visaRun: 'limited',
  borders: [
    { name: 'Hakata Port International Terminal → Busan', to: 'KR', lat: 33.6045, lng: 130.4023 },
    { name: 'Fukuoka (FUK) → Seoul', to: 'KR', lat: 33.5859, lng: 130.4507 },
    { name: 'Naha (OKA) → Taipei', to: 'TW', lat: 26.1958, lng: 127.6459 },
  ],
  transit: { hours: 72 },
  nomad: { name: 'Designated Activities (Digital Nomad)', months: 6, income: { kind: 'from', amount: 10000000, currency: 'JPY' } },
  waivers: [{ holds: ['resUS', 'resGB', 'resCA', 'resAU'], status: 'evisa', days: 90 }],
  text: {
    ru: {
      summary:
        'Граждане 74 стран и территорий — США, Канады, Великобритании, ЕС, Австралии, Кореи, Тайваня, Бразилии, Мексики, Турции, Израиля и других — въезжают без визы на срок до 90 дней. Россиянам, украинцам, казахстанцам, гражданам Китая, Индии и многих других стран нужна виза; жители США, Великобритании, Канады, Австралии и ряда других стран теперь оформляют её онлайн через Japan eVISA.',
      apply:
        'Обычно визу получают в посольстве или консульстве Японии в стране проживания, часто через аккредитованное турагентство: анкета, фото, программа поездки, брони и справка с работы или из банка. Срок — как правило, 5 рабочих дней. Жители США, Великобритании, Канады, Австралии, Бразилии, Саудовской Аравии, ЮАР, Тайваня и Камбоджи подают заявку онлайн на evisa.mofa.go.jp, а визу показывают в телефоне. В июле 2026 года сборы резко выросли (уточняйте сумму), но для граждан ряда стран, включая Россию, виза бесплатна.',
      extend:
        'Граждане Великобритании, Германии, Австрии, Ирландии, Швейцарии, Лихтенштейна и Мексики могут в региональном иммиграционном бюро продлить 90 дней до 6 месяцев. Остальным продлевают только по серьёзным причинам — болезнь, отменённый рейс.',
      visaRun:
        'Формального правила «90 из 180» нет, но пограничники следят за теми, кто проводит в Японии большую часть года без визы: больше примерно 180 дней в год часто означает расспросы или отказ во въезде. Короткая поездка в Пусан на пароме из Хакаты или перелёт в Сеул или Тайбэй на практике обнуляет 90 дней — возьмите обратный билет и подтверждение, что вас ждут дома.',
      transit:
        'Пассажирам, следующим транзитом по воздуху или морем, могут выдать разрешение на сход на берег (shore pass) до 72 часов — его запрашивает авиакомпания или круизная линия прямо в аэропорту или порту. Это удобно тем, кому нужна виза, при длинной стыковке, но разрешение выдаётся на усмотрение пограничников, а не по праву.',
      nomad:
        'С апреля 2024 года статус цифрового кочевника (Designated Activities) позволяет до 6 месяцев работать удалённо на иностранного работодателя или клиентов. Условия: гражданство безвизовой страны, у которой с Японией есть соглашение об избежании двойного налогообложения, годовой доход от 10 млн иен и частная медицинская страховка. Супруг и дети могут приехать вместе с вами.',
      hacks: [
        'Japan eVISA доступна по месту жительства, а не по гражданству: россиянин или гражданин Индии с ВНЖ в США, Великобритании, Канаде или Австралии подаёт заявку онлайн без визита в консульство.',
        'Заполните Visit Japan Web до вылета: один QR-код ускоряет и паспортный, и таможенный контроль в крупных аэропортах.',
        'Тем, кто уже бывал в Японии или в странах G7, проще получить многократную визу на 3 или 5 лет — это касается граждан России, Китая, Индии и ряда других стран.',
        'Британцы, немцы, австрийцы, ирландцы, швейцарцы, лихтенштейнцы и мексиканцы могут растянуть поездку до 6 месяцев, продлив срок на месте до истечения первых 90 дней.',
        'Электронное разрешение JESTA для безвизовых путешественников планируют ввести к 2028 финансовому году. Пока платить ничего не нужно — Visit Japan Web бесплатен.',
      ],
      pitfalls: [
        'Сайты, предлагающие «японскую ETA» или JESTA за деньги, — мошенники: системы ещё нет, а Visit Japan Web бесплатный.',
        'Виза не гарантирует въезд: на границе могут спросить брони отелей и маршрут. Держите их распечатанными или в телефоне офлайн.',
        'Работать в Японии без соответствующего статуса нельзя, даже разово. За перерасчёт грозят задержание, депортация и запрет на въезд до 5 лет.',
      ],
      waivers: [
        'Жители США, Великобритании, Канады и Австралии (с ВНЖ или долгосрочной визой) любого гражданства, которым нужна японская виза, подают заявку онлайн через Japan eVISA вместо посольства. Это однократная туристическая виза до 90 дней; подавать нужно из страны проживания.',
      ],
      passports: {
        RU: 'Россиянам нужна виза, она бесплатна. Подают в посольство в Москве или консульства в Санкт-Петербурге, Владивостоке, Хабаровске и Южно-Сахалинске — лично или через аккредитованное агентство; обычно 5 рабочих дней. Прямых рейсов нет: летают через Пекин, Шанхай, Сеул или Стамбул. Российские карты не работают — берите наличные доллары или евро.',
        CN: 'Граждане Китая, живущие в КНР, подают на визу через аккредитованные агентства; для однократной туристической визы доступна и e-виза. При хорошей истории поездок или высоком доходе дают многократные визы.',
        IN: 'Гражданам Индии, живущим в Индии, доступна e-виза через визовый центр; живущие в США, Великобритании, Канаде или Австралии подают онлайн через Japan eVISA.',
        US: 'Американцы въезжают без визы на 90 дней. После запуска JESTA (план — к 2028 финансовому году) понадобится онлайн-разрешение.',
        GB: 'Британцы получают 90 дней без визы и могут продлить пребывание до 6 месяцев в иммиграционном бюро.',
      },
    },
    en: {
      summary:
        'Citizens of 74 countries and regions — the US, Canada, the UK, the EU, Australia, Korea, Taiwan, Brazil, Mexico, Turkey, Israel and others — enter visa-free for up to 90 days. Russians, Ukrainians, Kazakhs, Chinese, Indians and many others need a visa; residents of the US, UK, Canada, Australia and a few other countries can now apply online through Japan eVISA.',
      apply:
        'Most people apply at the Japanese embassy or consulate in their country of residence, often through an accredited travel agency: form, photo, itinerary, bookings and a letter from your employer or bank. It usually takes 5 working days. Residents of the US, UK, Canada, Australia, Brazil, Saudi Arabia, South Africa, Taiwan and Cambodia apply online at evisa.mofa.go.jp and show the visa on their phone. Fees rose sharply in July 2026 (check the current amount), but the visa is free for some nationalities, Russians included.',
      extend:
        'Citizens of the UK, Germany, Austria, Ireland, Switzerland, Liechtenstein and Mexico can extend their 90 days to 6 months at a regional immigration bureau. Everyone else gets an extension only for serious reasons, such as illness or a cancelled flight.',
      visaRun:
        'There is no formal 90/180 rule, but officers watch for people spending most of the year in Japan visa-free: more than about 180 days a year often leads to questions or refusal. A short ferry hop from Hakata to Busan, or a flight to Seoul or Taipei, resets the 90 days in practice — carry an onward ticket and proof of ties at home.',
      transit:
        'Passengers transiting by air or sea can be granted a shore pass of up to 72 hours, which the airline or cruise line requests for you at the airport or port. It helps visa-required travellers with a long layover, but it is at the officers’ discretion, not a right.',
      nomad:
        'Since April 2024 the digital-nomad status (Designated Activities) lets you work remotely for a foreign employer or clients for up to 6 months. You need citizenship of a visa-exempt country that has a tax treaty with Japan, an annual income of at least ¥10 million and private health insurance. Your spouse and children can come too.',
      hacks: [
        'Japan eVISA depends on where you live, not your nationality: a Russian or Indian living in the US, UK, Canada or Australia applies online without visiting a consulate.',
        'Fill in Visit Japan Web before you fly: one QR code speeds up both immigration and customs at major airports.',
        'If you have been to Japan or G7 countries before, multiple-entry visas valid for 3 or 5 years are easier to get — this applies to Russian, Chinese, Indian and several other nationalities.',
        'British, German, Austrian, Irish, Swiss, Liechtenstein and Mexican citizens can stretch a trip to 6 months by extending in Japan before the first 90 days run out.',
        'JESTA, an online authorisation for visa-exempt travellers, is planned for fiscal year 2028. Until then there is nothing to pay — Visit Japan Web is free.',
      ],
      pitfalls: [
        'Websites selling a “Japan ETA” or JESTA are scams: the system does not exist yet, and Visit Japan Web is free.',
        'A visa does not guarantee entry: officers may ask for hotel bookings and your itinerary. Keep them printed or saved offline on your phone.',
        'Working in Japan without the right status is not allowed, even a one-off job. Overstays lead to detention, deportation and an entry ban of up to 5 years.',
      ],
      waivers: [
        'Residents of the US, UK, Canada and Australia (with a residence permit or long-term visa) of any nationality that needs a Japanese visa apply online through Japan eVISA instead of at an embassy. It is a single-entry tourist visa for up to 90 days, and you must apply from your country of residence.',
      ],
      passports: {
        RU: 'Russians need a visa, which is free. Apply at the embassy in Moscow or the consulates in St Petersburg, Vladivostok, Khabarovsk and Yuzhno-Sakhalinsk, in person or through an accredited agency; it usually takes 5 working days. There are no direct flights — go via Beijing, Shanghai, Seoul or Istanbul. Russian cards do not work, so bring US dollars or euros in cash.',
        CN: 'Chinese citizens living in China apply through accredited agencies; a single-entry tourist e-visa is also available. Multiple-entry visas are granted with a good travel history or high income.',
        IN: 'Indian citizens living in India can get an e-visa through the visa centre; those living in the US, UK, Canada or Australia apply online through Japan eVISA.',
        US: 'US citizens enter visa-free for 90 days. Once JESTA launches (planned for fiscal year 2028), an online authorisation will be needed.',
        GB: 'British citizens get 90 days visa-free and can extend to 6 months at an immigration bureau.',
      },
    },
    es: {
      summary:
        'Los ciudadanos de 74 países y territorios —EE. UU., Canadá, Reino Unido, la UE, Australia, Corea, Taiwán, Brasil, México, Turquía, Israel y otros— entran sin visado hasta 90 días. Rusos, ucranianos, kazajos, chinos, indios y muchos otros necesitan visado; los residentes en EE. UU., Reino Unido, Canadá, Australia y algunos países más ya pueden pedirlo en línea con Japan eVISA.',
      apply:
        'Lo habitual es solicitarlo en la embajada o el consulado de Japón del país donde vives, a menudo a través de una agencia acreditada: formulario, foto, itinerario, reservas y un certificado de trabajo o del banco. Suele tardar 5 días laborables. Los residentes en EE. UU., Reino Unido, Canadá, Australia, Brasil, Arabia Saudí, Sudáfrica, Taiwán y Camboya lo piden en línea en evisa.mofa.go.jp y lo enseñan en el móvil. Las tasas subieron mucho en julio de 2026 (comprueba el importe), aunque para algunas nacionalidades, entre ellas la rusa, el visado es gratuito.',
      extend:
        'Los ciudadanos de Reino Unido, Alemania, Austria, Irlanda, Suiza, Liechtenstein y México pueden ampliar sus 90 días hasta 6 meses en una oficina regional de inmigración. Al resto solo se le prorroga por motivos serios, como una enfermedad o un vuelo cancelado.',
      visaRun:
        'No hay una regla formal de 90/180, pero los agentes vigilan a quien pasa la mayor parte del año en Japón sin visado: más de unos 180 días al año suele traer preguntas o una denegación. Una escapada en ferri de Hakata a Busán, o un vuelo a Seúl o Taipéi, reinicia en la práctica los 90 días; lleva billete de salida y pruebas de arraigo en tu país.',
      transit:
        'A los pasajeros en tránsito por aire o mar se les puede conceder un permiso de desembarco (shore pass) de hasta 72 horas, que la aerolínea o la naviera solicita por ti en el aeropuerto o el puerto. Es útil si necesitas visado y tienes una escala larga, pero se concede a criterio de los agentes, no por derecho.',
      nomad:
        'Desde abril de 2024, el estatus de nómada digital (Designated Activities) permite trabajar en remoto para una empresa o clientes extranjeros hasta 6 meses. Necesitas la nacionalidad de un país exento de visado con convenio fiscal con Japón, ingresos anuales de al menos 10 millones de yenes y un seguro médico privado. Tu pareja y tus hijos pueden acompañarte.',
      hacks: [
        'Japan eVISA depende de dónde vives, no de tu nacionalidad: un ruso o un indio que reside en EE. UU., Reino Unido, Canadá o Australia lo pide en línea sin pisar el consulado.',
        'Rellena Visit Japan Web antes del vuelo: un solo código QR agiliza inmigración y aduana en los grandes aeropuertos.',
        'Si ya has estado en Japón o en países del G7, es más fácil conseguir un visado de entradas múltiples de 3 o 5 años; vale para rusos, chinos, indios y otras nacionalidades.',
        'Británicos, alemanes, austriacos, irlandeses, suizos, liechtensteinianos y mexicanos pueden alargar el viaje a 6 meses prorrogando en Japón antes de que se acaben los primeros 90 días.',
        'JESTA, una autorización en línea para viajeros exentos de visado, está prevista para el año fiscal 2028. Hasta entonces no hay nada que pagar: Visit Japan Web es gratuito.',
      ],
      pitfalls: [
        'Las webs que venden una «ETA de Japón» o JESTA son estafas: el sistema aún no existe y Visit Japan Web es gratuito.',
        'El visado no garantiza la entrada: pueden pedirte reservas de hotel e itinerario. Llévalos impresos o guardados sin conexión en el móvil.',
        'No se puede trabajar en Japón sin el estatus adecuado, ni siquiera de forma puntual. Quedarse de más supone detención, deportación y hasta 5 años de prohibición de entrada.',
      ],
      waivers: [
        'Los residentes en EE. UU., Reino Unido, Canadá y Australia (con permiso de residencia o visado de larga duración) de cualquier nacionalidad que necesite visado japonés lo piden en línea con Japan eVISA en lugar de en la embajada. Es un visado de turista de una entrada de hasta 90 días y hay que solicitarlo desde el país de residencia.',
      ],
      passports: {
        RU: 'Los rusos necesitan visado, que es gratuito. Se pide en la embajada de Moscú o en los consulados de San Petersburgo, Vladivostok, Jabárovsk y Yuzhno-Sajalinsk, en persona o con agencia acreditada; suele tardar 5 días laborables. No hay vuelos directos: se va por Pekín, Shanghái, Seúl o Estambul. Las tarjetas rusas no funcionan, así que lleva dólares o euros en efectivo.',
        CN: 'Los ciudadanos chinos que viven en China lo piden a través de agencias acreditadas; también existe el visado electrónico de turista de una entrada. Con buen historial de viajes o ingresos altos se conceden visados de entradas múltiples.',
        IN: 'Los ciudadanos indios que viven en India pueden obtener un visado electrónico en el centro de visados; quienes residen en EE. UU., Reino Unido, Canadá o Australia lo piden en línea con Japan eVISA.',
        US: 'Los estadounidenses entran sin visado 90 días. Cuando arranque JESTA (previsto para el año fiscal 2028) hará falta una autorización en línea.',
        GB: 'Los británicos tienen 90 días sin visado y pueden ampliarlos a 6 meses en una oficina de inmigración.',
      },
    },
    de: {
      summary:
        'Bürger von 74 Staaten und Gebieten – USA, Kanada, Großbritannien, EU, Australien, Korea, Taiwan, Brasilien, Mexiko, Türkei, Israel und andere – reisen bis zu 90 Tage visumfrei ein. Russen, Ukrainer, Kasachen, Chinesen, Inder und viele andere brauchen ein Visum; wer in den USA, Großbritannien, Kanada, Australien oder einigen weiteren Ländern lebt, beantragt es inzwischen online über Japan eVISA.',
      apply:
        'Meist beantragst du das Visum bei der japanischen Botschaft oder dem Konsulat in deinem Wohnsitzland, oft über ein akkreditiertes Reisebüro: Formular, Foto, Reiseplan, Buchungen und eine Bescheinigung vom Arbeitgeber oder der Bank. Das dauert in der Regel 5 Werktage. Wer in den USA, Großbritannien, Kanada, Australien, Brasilien, Saudi-Arabien, Südafrika, Taiwan oder Kambodscha lebt, beantragt online auf evisa.mofa.go.jp und zeigt das Visum auf dem Handy. Im Juli 2026 sind die Gebühren stark gestiegen (aktuellen Betrag prüfen), für einige Nationalitäten, darunter Russen, ist das Visum aber kostenlos.',
      extend:
        'Staatsangehörige Großbritanniens, Deutschlands, Österreichs, Irlands, der Schweiz, Liechtensteins und Mexikos können ihre 90 Tage bei einem regionalen Einwanderungsamt auf 6 Monate verlängern. Alle anderen bekommen nur aus triftigen Gründen eine Verlängerung, etwa bei Krankheit oder einem gestrichenen Flug.',
      visaRun:
        'Eine formale 90/180-Regel gibt es nicht, aber die Grenzbeamten achten auf Leute, die visumfrei den größten Teil des Jahres in Japan verbringen: Mehr als etwa 180 Tage im Jahr führen oft zu Fragen oder Zurückweisung. Ein kurzer Fährtrip von Hakata nach Busan oder ein Flug nach Seoul oder Taipeh setzt die 90 Tage praktisch zurück – nimm ein Weiterreiseticket und Nachweise deiner Bindungen zu Hause mit.',
      transit:
        'Transitpassagieren per Flug oder Schiff kann eine Landgangserlaubnis (Shore Pass) von bis zu 72 Stunden erteilt werden, die Airline oder Reederei für dich am Flughafen oder Hafen beantragt. Das hilft Visumpflichtigen bei langen Umstiegen, liegt aber im Ermessen der Beamten und ist kein Anspruch.',
      nomad:
        'Seit April 2024 erlaubt der Digital-Nomad-Status (Designated Activities) bis zu 6 Monate Remote-Arbeit für einen ausländischen Arbeitgeber oder Kunden. Voraussetzung sind die Staatsangehörigkeit eines visumfreien Landes mit Doppelbesteuerungsabkommen mit Japan, ein Jahreseinkommen von mindestens 10 Mio. Yen und eine private Krankenversicherung. Ehepartner und Kinder dürfen mitkommen.',
      hacks: [
        'Japan eVISA hängt vom Wohnsitz ab, nicht von der Staatsangehörigkeit: Wer als Russe oder Inder in den USA, Großbritannien, Kanada oder Australien lebt, beantragt online, ganz ohne Konsulatsbesuch.',
        'Füll Visit Japan Web vor dem Abflug aus: Ein einziger QR-Code beschleunigt an großen Flughäfen Einreise- und Zollkontrolle.',
        'Wer schon in Japan oder in G7-Staaten war, bekommt leichter ein Mehrfachvisum für 3 oder 5 Jahre – das gilt für Russen, Chinesen, Inder und einige andere Nationalitäten.',
        'Briten, Deutsche, Österreicher, Iren, Schweizer, Liechtensteiner und Mexikaner können eine Reise auf 6 Monate ausdehnen, wenn sie vor Ablauf der ersten 90 Tage vor Ort verlängern.',
        'JESTA, eine Online-Reisegenehmigung für Visumfreie, ist für das Haushaltsjahr 2028 geplant. Bis dahin zahlst du nichts – Visit Japan Web ist kostenlos.',
      ],
      pitfalls: [
        'Websites, die eine „Japan-ETA“ oder JESTA verkaufen, sind Betrug: Das System gibt es noch nicht, und Visit Japan Web ist kostenlos.',
        'Ein Visum garantiert keine Einreise: Beamte fragen eventuell nach Hotelbuchungen und Reiseplan. Halte sie ausgedruckt oder offline auf dem Handy bereit.',
        'Arbeiten ohne passenden Status ist in Japan verboten, auch einmalig. Überziehen führt zu Haft, Abschiebung und bis zu 5 Jahren Einreisesperre.',
      ],
      waivers: [
        'Wer mit Aufenthaltstitel oder Langzeitvisum in den USA, Großbritannien, Kanada oder Australien lebt und eine visumpflichtige Staatsangehörigkeit hat, beantragt das Visum online über Japan eVISA statt bei der Botschaft. Es ist ein Touristenvisum für eine Einreise und bis zu 90 Tage; beantragt wird aus dem Wohnsitzland.',
      ],
      passports: {
        RU: 'Russen brauchen ein Visum, das kostenlos ist. Beantragt wird es bei der Botschaft in Moskau oder den Konsulaten in Sankt Petersburg, Wladiwostok, Chabarowsk und Juschno-Sachalinsk, persönlich oder über ein akkreditiertes Reisebüro; meist dauert es 5 Werktage. Direktflüge gibt es nicht – man fliegt über Peking, Shanghai, Seoul oder Istanbul. Russische Karten funktionieren nicht, nimm US-Dollar oder Euro in bar mit.',
        CN: 'Chinesen mit Wohnsitz in China beantragen über akkreditierte Agenturen; für einmalige Touristenreisen gibt es auch ein E-Visum. Bei guter Reisehistorie oder hohem Einkommen werden Mehrfachvisa erteilt.',
        IN: 'Inder mit Wohnsitz in Indien bekommen ein E-Visum über das Visazentrum; wer in den USA, Großbritannien, Kanada oder Australien lebt, beantragt online über Japan eVISA.',
        US: 'US-Bürger reisen 90 Tage visumfrei ein. Sobald JESTA startet (geplant für das Haushaltsjahr 2028), ist eine Online-Genehmigung nötig.',
        GB: 'Briten bekommen 90 Tage visumfrei und können beim Einwanderungsamt auf 6 Monate verlängern.',
      },
    },
    fr: {
      summary:
        'Les citoyens de 74 pays et territoires — États-Unis, Canada, Royaume-Uni, UE, Australie, Corée, Taïwan, Brésil, Mexique, Turquie, Israël et d’autres — entrent sans visa jusqu’à 90 jours. Russes, Ukrainiens, Kazakhs, Chinois, Indiens et bien d’autres ont besoin d’un visa ; les résidents des États-Unis, du Royaume-Uni, du Canada, d’Australie et de quelques autres pays peuvent désormais le demander en ligne via Japan eVISA.',
      apply:
        'Le plus souvent, la demande se fait à l’ambassade ou au consulat du Japon de votre pays de résidence, souvent via une agence agréée : formulaire, photo, programme, réservations et attestation d’employeur ou de banque. Comptez en général 5 jours ouvrés. Les résidents des États-Unis, du Royaume-Uni, du Canada, d’Australie, du Brésil, d’Arabie saoudite, d’Afrique du Sud, de Taïwan et du Cambodge déposent leur demande en ligne sur evisa.mofa.go.jp et présentent le visa sur leur téléphone. Les frais ont fortement augmenté en juillet 2026 (vérifiez le montant), mais le visa reste gratuit pour certaines nationalités, dont les Russes.',
      extend:
        'Les ressortissants du Royaume-Uni, d’Allemagne, d’Autriche, d’Irlande, de Suisse, du Liechtenstein et du Mexique peuvent porter leurs 90 jours à 6 mois auprès d’un bureau régional de l’immigration. Pour les autres, prolongation seulement pour motif sérieux, comme une maladie ou un vol annulé.',
      visaRun:
        'Il n’existe pas de règle formelle des 90/180 jours, mais les agents surveillent ceux qui passent l’essentiel de l’année au Japon sans visa : au-delà d’environ 180 jours par an, attendez-vous à des questions, voire un refus. Un aller-retour en ferry de Hakata à Busan, ou un vol vers Séoul ou Taipei, remet en pratique les 90 jours à zéro ; ayez un billet de sortie et des preuves d’attaches dans votre pays.',
      transit:
        'Les passagers en transit aérien ou maritime peuvent obtenir une autorisation de descente à terre (shore pass) de 72 heures maximum, que la compagnie aérienne ou la croisière demande pour vous à l’aéroport ou au port. Pratique pour les voyageurs soumis au visa lors d’une longue escale, mais accordée à la discrétion des agents, pas de plein droit.',
      nomad:
        'Depuis avril 2024, le statut de nomade numérique (Designated Activities) permet de télétravailler pour un employeur ou des clients étrangers jusqu’à 6 mois. Il faut la nationalité d’un pays exempté de visa ayant une convention fiscale avec le Japon, un revenu annuel d’au moins 10 millions de yens et une assurance santé privée. Conjoint et enfants peuvent vous accompagner.',
      hacks: [
        'Japan eVISA dépend du lieu de résidence, pas de la nationalité : un Russe ou un Indien résidant aux États-Unis, au Royaume-Uni, au Canada ou en Australie dépose sa demande en ligne, sans passer au consulat.',
        'Remplissez Visit Japan Web avant le vol : un seul QR code accélère l’immigration et la douane dans les grands aéroports.',
        'Si vous êtes déjà allé au Japon ou dans des pays du G7, un visa à entrées multiples de 3 ou 5 ans est plus facile à obtenir ; cela vaut pour les Russes, Chinois, Indiens et quelques autres nationalités.',
        'Britanniques, Allemands, Autrichiens, Irlandais, Suisses, Liechtensteinois et Mexicains peuvent étirer le voyage à 6 mois en prolongeant sur place avant la fin des 90 premiers jours.',
        'JESTA, une autorisation en ligne pour les voyageurs exemptés de visa, est prévue pour l’exercice 2028. D’ici là, rien à payer : Visit Japan Web est gratuit.',
      ],
      pitfalls: [
        'Les sites qui vendent une « ETA japonaise » ou JESTA sont des arnaques : le système n’existe pas encore et Visit Japan Web est gratuit.',
        'Un visa ne garantit pas l’entrée : les agents peuvent demander réservations d’hôtel et itinéraire. Gardez-les imprimés ou enregistrés hors ligne sur le téléphone.',
        'Travailler au Japon sans le statut adéquat est interdit, même ponctuellement. Un dépassement de séjour entraîne rétention, expulsion et jusqu’à 5 ans d’interdiction d’entrée.',
      ],
      waivers: [
        'Les résidents des États-Unis, du Royaume-Uni, du Canada et d’Australie (avec titre de séjour ou visa long séjour) dont la nationalité est soumise au visa japonais le demandent en ligne via Japan eVISA plutôt qu’à l’ambassade. C’est un visa touristique à entrée unique jusqu’à 90 jours, à demander depuis le pays de résidence.',
      ],
      passports: {
        RU: 'Les Russes ont besoin d’un visa, gratuit. La demande se fait à l’ambassade de Moscou ou aux consulats de Saint-Pétersbourg, Vladivostok, Khabarovsk et Ioujno-Sakhalinsk, en personne ou via une agence agréée ; comptez en général 5 jours ouvrés. Pas de vol direct : passez par Pékin, Shanghai, Séoul ou Istanbul. Les cartes russes ne fonctionnent pas, emportez des dollars ou des euros en espèces.',
        CN: 'Les Chinois résidant en Chine passent par des agences agréées ; un e-visa touristique à entrée unique existe aussi. Les visas à entrées multiples sont accordés avec un bon historique de voyages ou des revenus élevés.',
        IN: 'Les Indiens résidant en Inde peuvent obtenir un e-visa via le centre de visas ; ceux qui vivent aux États-Unis, au Royaume-Uni, au Canada ou en Australie passent en ligne par Japan eVISA.',
        US: 'Les Américains entrent sans visa pour 90 jours. Une fois JESTA lancé (prévu pour l’exercice 2028), une autorisation en ligne sera nécessaire.',
        GB: 'Les Britanniques ont 90 jours sans visa et peuvent prolonger jusqu’à 6 mois auprès d’un bureau de l’immigration.',
      },
    },
    it: {
      summary:
        'I cittadini di 74 paesi e territori — Stati Uniti, Canada, Regno Unito, UE, Australia, Corea, Taiwan, Brasile, Messico, Turchia, Israele e altri — entrano senza visto fino a 90 giorni. A russi, ucraini, kazaki, cinesi, indiani e molti altri serve il visto; chi risiede negli Stati Uniti, nel Regno Unito, in Canada, in Australia e in pochi altri paesi ora può chiederlo online con Japan eVISA.',
      apply:
        'Di solito si fa domanda all’ambasciata o al consolato del Giappone nel paese di residenza, spesso tramite un’agenzia accreditata: modulo, foto, itinerario, prenotazioni e una dichiarazione del datore di lavoro o della banca. In genere servono 5 giorni lavorativi. Chi risiede in Stati Uniti, Regno Unito, Canada, Australia, Brasile, Arabia Saudita, Sudafrica, Taiwan e Cambogia fa domanda online su evisa.mofa.go.jp e mostra il visto sul telefono. A luglio 2026 le tariffe sono salite molto (verifica l’importo), ma per alcune nazionalità, tra cui i russi, il visto è gratuito.',
      extend:
        'I cittadini di Regno Unito, Germania, Austria, Irlanda, Svizzera, Liechtenstein e Messico possono estendere i 90 giorni fino a 6 mesi presso un ufficio regionale dell’immigrazione. Per gli altri la proroga si concede solo per motivi seri, come una malattia o un volo cancellato.',
      visaRun:
        'Non esiste una regola formale 90/180, ma gli agenti tengono d’occhio chi passa gran parte dell’anno in Giappone senza visto: oltre circa 180 giorni l’anno spesso arrivano domande o un respingimento. Un traghetto da Hakata a Busan, o un volo per Seul o Taipei, in pratica azzera i 90 giorni; porta un biglietto di uscita e prove dei tuoi legami a casa.',
      transit:
        'Ai passeggeri in transito per via aerea o marittima può essere concesso un permesso di sbarco (shore pass) fino a 72 ore, che la compagnia aerea o di crociera chiede per te in aeroporto o in porto. È utile a chi ha bisogno del visto e ha uno scalo lungo, ma è a discrezione degli agenti, non un diritto.',
      nomad:
        'Da aprile 2024 lo status di nomade digitale (Designated Activities) permette di lavorare da remoto per un datore di lavoro o clienti esteri fino a 6 mesi. Servono la cittadinanza di un paese esente da visto con convenzione fiscale con il Giappone, un reddito annuo di almeno 10 milioni di yen e un’assicurazione sanitaria privata. Coniuge e figli possono venire con te.',
      hacks: [
        'Japan eVISA dipende dalla residenza, non dalla cittadinanza: un russo o un indiano che vive negli Stati Uniti, nel Regno Unito, in Canada o in Australia fa domanda online senza passare dal consolato.',
        'Compila Visit Japan Web prima del volo: un solo codice QR velocizza immigrazione e dogana nei grandi aeroporti.',
        'Se sei già stato in Giappone o nei paesi del G7 è più facile ottenere un visto a ingressi multipli di 3 o 5 anni; vale per russi, cinesi, indiani e alcune altre nazionalità.',
        'Britannici, tedeschi, austriaci, irlandesi, svizzeri, liechtensteinesi e messicani possono allungare il viaggio a 6 mesi chiedendo la proroga sul posto prima che finiscano i primi 90 giorni.',
        'JESTA, un’autorizzazione online per chi è esente da visto, è prevista per l’anno fiscale 2028. Fino ad allora non c’è nulla da pagare: Visit Japan Web è gratuito.',
      ],
      pitfalls: [
        'I siti che vendono una «ETA giapponese» o JESTA sono truffe: il sistema non esiste ancora e Visit Japan Web è gratuito.',
        'Il visto non garantisce l’ingresso: possono chiederti prenotazioni d’hotel e itinerario. Tienili stampati o salvati offline sul telefono.',
        'Lavorare in Giappone senza lo status giusto è vietato, anche una tantum. Chi resta oltre il limite rischia trattenimento, espulsione e fino a 5 anni di divieto d’ingresso.',
      ],
      waivers: [
        'Chi risiede negli Stati Uniti, nel Regno Unito, in Canada o in Australia (con permesso di soggiorno o visto di lunga durata) e ha una cittadinanza soggetta al visto giapponese fa domanda online con Japan eVISA invece che in ambasciata. È un visto turistico a ingresso singolo fino a 90 giorni, da chiedere dal paese di residenza.',
      ],
      passports: {
        RU: 'Ai russi serve il visto, che è gratuito. Si chiede all’ambasciata di Mosca o ai consolati di San Pietroburgo, Vladivostok, Chabarovsk e Južno-Sachalinsk, di persona o tramite agenzia accreditata; di solito servono 5 giorni lavorativi. Non ci sono voli diretti: si passa da Pechino, Shanghai, Seul o Istanbul. Le carte russe non funzionano, porta dollari o euro in contanti.',
        CN: 'I cittadini cinesi residenti in Cina fanno domanda tramite agenzie accreditate; esiste anche il visto elettronico turistico a ingresso singolo. Con una buona storia di viaggi o redditi alti si ottengono visti a ingressi multipli.',
        IN: 'I cittadini indiani residenti in India possono ottenere un visto elettronico tramite il centro visti; chi vive negli Stati Uniti, nel Regno Unito, in Canada o in Australia fa domanda online con Japan eVISA.',
        US: 'I cittadini statunitensi entrano senza visto per 90 giorni. Quando partirà JESTA (previsto per l’anno fiscale 2028) servirà un’autorizzazione online.',
        GB: 'I britannici hanno 90 giorni senza visto e possono estenderli fino a 6 mesi presso un ufficio dell’immigrazione.',
      },
    },
  },
};

export default guide;
