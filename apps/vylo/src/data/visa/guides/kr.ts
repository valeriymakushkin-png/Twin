import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'KR',
  checked: '2026-10',
  overrides: {
    // Visa-free, but not on the 22-country K-ETA exemption list (valid through 31 Dec 2026) — K-ETA required
    AE: { status: 'eta', days: 90 },
    IL: { status: 'eta', days: 90 },
  },
  fees: { eta: { kind: 'fixed', amount: 10000, currency: 'KRW' }, visa: { kind: 'from', amount: 40, currency: 'USD' } },
  stay: { eta: 90, visa: 90 },
  links: { eta: 'https://www.k-eta.go.kr', evisa: 'https://www.visa.go.kr', immigration: 'https://www.immigration.go.kr' },
  forms: [
    { name: 'K-ETA', url: 'https://www.k-eta.go.kr', fee: { kind: 'fixed', amount: 10000, currency: 'KRW' } },
    { name: 'e-Arrival Card', url: 'https://www.e-arrivalcard.go.kr', fee: { kind: 'free' } },
  ],
  docs: ['returnTicket', 'booking'],
  passportMonths: 6,
  visaRun: 'limited',
  borders: [
    { name: 'Busan Port International Passenger Terminal → Fukuoka', to: 'JP', lat: 35.1171, lng: 129.0454 },
    { name: 'Gimhae (PUS) → Fukuoka', to: 'JP', lat: 35.1795, lng: 128.9382 },
    { name: 'Incheon (ICN) → Osaka / Taipei', to: 'JP', lat: 37.4602, lng: 126.4407 },
  ],
  nomad: { name: 'Workcation visa (F-1-D)', months: 12, income: { kind: 'from', amount: 85000000, currency: 'KRW' } },
  waivers: [{ holds: ['visaUS', 'visaJP', 'visaCA', 'visaAU', 'visaNZ', 'resUS', 'resJP', 'resCA', 'resAU'], status: 'free', days: 30 }],
  text: {
    ru: {
      summary:
        'Большинство западных паспортов, Япония и Тайвань въезжают без визы на 90 дней (канадцы — на 180), а граждане 22 стран, включая США, Великобританию, Канаду, Австралию, Японию, Германию, Францию, Италию, Испанию и Польшу, до конца 2026 года освобождены от K-ETA. Остальным безвизовым — россиянам (60 дней), казахстанцам (30), мексиканцам, бразильцам, туркам, израильтянам, гражданам ОАЭ — нужна K-ETA. Гражданам Китая, Индии, Украины и многих других стран нужна виза, но на Чеджу большинство въезжает без неё.',
      apply:
        'K-ETA оформляют на k-eta.go.kr не позднее чем за 72 часа до вылета: сбор — 10 000 вон, ответ обычно приходит в течение суток, разрешение многократное и действует несколько лет (срок указан в одобрении, но не дольше паспорта). С одобренной K-ETA карту прибытия заполнять не нужно. Визу получают в консульстве Кореи или визовом центре: туристическая однократная — около 40 $, 5–10 рабочих дней, нужны выписка из банка и справка с работы.',
      visaRun:
        'Выезд и повторный въезд дают новый срок, но иммиграционная служба и система K-ETA видят, сколько вы провели в стране: при долгих сериях визитов K-ETA отклоняют или расспрашивают на границе. Короткие поездки — паром из Пусана в Фукуоку или недорогие рейсы в Фукуоку, Осаку и Тайбэй.',
      nomad:
        'Виза «воркейшн» (F-1-D) позволяет до года жить в Корее и работать удалённо на иностранную компанию, с возможностью продления ещё на год. Нужен стаж от года, годовой доход примерно от 85 млн вон (вдвое выше ВНД Кореи на душу населения, порог пересматривают ежегодно) и медицинская страховка на 100 млн вон.',
      hacks: [
        'Остров Чеджу принимает граждан большинства стран (кроме двух десятков) без визы и без K-ETA на 30 дней, если прилететь прямым международным рейсом — например, из Шанхая, Осаки, Тайбэя, Гонконга, Бангкока или Куала-Лумпура. Улететь с острова на материк нельзя.',
        'Если вашей стране нужна виза, но у вас есть виза или ВНЖ США, Японии, Канады, Австралии или Новой Зеландии, при транзите в эту страну или из неё можно пробыть в Корее до 30 дней без визы.',
        'Гражданам стран, освобождённых от K-ETA, её всё равно можно оформить добровольно — тогда не придётся заполнять карту прибытия и очередь на контроле короче.',
        'Электронную карту прибытия (e-Arrival Card) можно заполнить онлайн до трёх дней до прилёта — это быстрее бумажной.',
        'Отказ в K-ETA — не запрет на въезд: можно сразу подать на обычную визу в консульстве, где у вас будет шанс показать документы.',
      ],
      pitfalls: [
        'Сайты-посредники берут за K-ETA 50–100 $. Официальный адрес — k-eta.go.kr, сбор всего 10 000 вон.',
        'Без одобренной K-ETA вас не посадят на рейс. Подавайте минимум за 72 часа, а лучше за неделю.',
        'Неполный адрес, нет брони отеля или расплывчатая цель поездки — частые причины отказа в K-ETA, особенно для граждан России и Казахстана.',
        'Работать без визы нельзя, в том числе на подработках. За перерасчёт штрафуют и могут запретить въезд.',
      ],
      waivers: [
        'Граждане стран, которым нужна корейская виза, с действующей визой или ВНЖ США, Японии, Канады, Австралии или Новой Зеландии могут въехать без визы на срок до 30 дней, если летят в эту страну или из неё через Корею. Нужен билет дальше; правило не действует для граждан нескольких стран, включая Иран, Кубу и Сирию.',
      ],
      passports: {
        RU: 'Россияне въезжают без визы на 60 дней за визит, но не более 90 дней за 180, и обязательно с K-ETA. Отказы случаются часто: указывайте точный адрес и прикладывайте бронь отеля, а при отказе подавайте на визу в консульстве. Российские карты не работают — берите наличные доллары.',
        KZ: 'Граждане Казахстана въезжают без визы на 30 дней за визит, с обязательной K-ETA.',
        CN: 'Гражданам Китая нужна виза, но Чеджу открыт для них без визы на 30 дней при прямом прилёте. Пробная программа безвизового въезда для турргрупп из Китая действовала с сентября 2025 по июнь 2026 года — проверьте, продлена ли она.',
        US: 'Американцы въезжают без визы на 90 дней и до конца 2026 года освобождены от K-ETA.',
        IN: 'Гражданам Индии нужна виза. Выручают Чеджу (30 дней без визы при прямом прилёте) и транзит до 30 дней с визой США, Японии, Канады, Австралии или Новой Зеландии.',
        IL: 'Израильтяне въезжают без визы на 90 дней, но в список освобождённых от K-ETA не входят — разрешение обязательно.',
      },
    },
    en: {
      summary:
        'Most Western passports, Japan and Taiwan enter visa-free for 90 days (Canadians 180), and through the end of 2026 citizens of 22 countries — including the US, UK, Canada, Australia, Japan, Germany, France, Italy, Spain and Poland — are exempt from K-ETA. Other visa-free nationals, such as Russians (60 days), Kazakhs (30), Mexicans, Brazilians, Turks, Israelis and Emiratis, need a K-ETA. Chinese, Indian, Ukrainian and many other citizens need a visa, though most can visit Jeju without one.',
      apply:
        'Apply for K-ETA at k-eta.go.kr at least 72 hours before boarding: the fee is KRW 10,000, the answer usually comes within a day, and it covers multiple trips for several years (the end date is shown on approval and never exceeds your passport). With an approved K-ETA you skip the arrival card. For a visa, apply at a Korean consulate or visa centre: a single-entry tourist visa costs about $40 and takes 5–10 working days, with bank statements and an employment letter.',
      visaRun:
        'Leaving and coming back gives a new stay, but immigration and the K-ETA system can see how long you have spent in Korea: long series of visits lead to K-ETA refusals or questions at the border. Short hops are the ferry from Busan to Fukuoka or cheap flights to Fukuoka, Osaka and Taipei.',
      nomad:
        'The Workcation visa (F-1-D) lets you live in Korea for up to a year working remotely for a foreign company, renewable for another year. You need at least a year of work experience, an annual income of about KRW 85 million or more (twice Korea’s GNI per capita, revised every year) and health insurance covering KRW 100 million.',
      hacks: [
        'Jeju Island admits citizens of most countries (all but about two dozen) visa-free and without K-ETA for 30 days if you fly in directly on an international flight — from Shanghai, Osaka, Taipei, Hong Kong, Bangkok or Kuala Lumpur, for example. You cannot fly on to the mainland.',
        'If your nationality needs a visa but you hold a US, Japanese, Canadian, Australian or New Zealand visa or residence permit, you can spend up to 30 days in Korea visa-free while transiting to or from that country.',
        'Citizens of K-ETA-exempt countries can still apply voluntarily — you then skip the arrival card and use a shorter line at immigration.',
        'The e-Arrival Card can be filled in online up to three days before landing, which is faster than the paper one.',
        'A K-ETA refusal is not an entry ban: you can apply straight away for a regular visa at a consulate, where you get the chance to present documents.',
      ],
      pitfalls: [
        'Agency websites charge $50–100 for a K-ETA. The official address is k-eta.go.kr, and the fee is just KRW 10,000.',
        'Without an approved K-ETA you will not be allowed to board. Apply at least 72 hours ahead, ideally a week.',
        'An incomplete address, no hotel booking or a vague purpose are common reasons for K-ETA refusals, especially for Russian and Kazakh citizens.',
        'Working without a visa is not allowed, side gigs included. Overstays are fined and can lead to an entry ban.',
      ],
      waivers: [
        'Citizens of visa-required countries holding a valid US, Japanese, Canadian, Australian or New Zealand visa or residence permit can enter visa-free for up to 30 days when travelling to or from that country via Korea. You need an onward ticket; the rule does not apply to a few nationalities, including Iran, Cuba and Syria.',
      ],
      passports: {
        RU: 'Russians enter visa-free for 60 days per visit, up to 90 days in 180, and always with a K-ETA. Refusals are common: give an exact address and attach a hotel booking, and if refused, apply for a visa at a consulate. Russian cards do not work, so bring US dollars in cash.',
        KZ: 'Kazakh citizens enter visa-free for 30 days per visit, with a mandatory K-ETA.',
        CN: 'Chinese citizens need a visa, but Jeju is open to them visa-free for 30 days on a direct flight. A visa-free trial for Chinese tour groups ran from September 2025 to June 2026 — check whether it has been extended.',
        US: 'US citizens enter visa-free for 90 days and are exempt from K-ETA until the end of 2026.',
        IN: 'Indian citizens need a visa. Jeju (30 days visa-free on a direct flight) and the 30-day transit with a US, Japanese, Canadian, Australian or New Zealand visa are the workarounds.',
        IL: 'Israelis enter visa-free for 90 days but are not on the K-ETA exemption list, so the authorisation is mandatory.',
      },
    },
    es: {
      summary:
        'La mayoría de los pasaportes occidentales, Japón y Taiwán entran sin visado 90 días (los canadienses, 180), y hasta finales de 2026 los ciudadanos de 22 países —entre ellos EE. UU., Reino Unido, Canadá, Australia, Japón, Alemania, Francia, Italia, España y Polonia— están exentos de la K-ETA. Los demás exentos de visado, como rusos (60 días), kazajos (30), mexicanos, brasileños, turcos, israelíes y emiratíes, necesitan K-ETA. Chinos, indios, ucranianos y muchos otros necesitan visado, aunque la mayoría puede visitar Jeju sin él.',
      apply:
        'La K-ETA se pide en k-eta.go.kr al menos 72 horas antes de embarcar: cuesta 10 000 wones, la respuesta suele llegar en un día y sirve para varios viajes durante varios años (la fecha final figura en la aprobación y nunca supera la del pasaporte). Con la K-ETA aprobada no rellenas la tarjeta de llegada. El visado se pide en un consulado o centro de visados de Corea: el de turista de una entrada cuesta unos 40 $ y tarda 5–10 días laborables, con extractos bancarios y certificado de empleo.',
      visaRun:
        'Salir y volver da una nueva estancia, pero inmigración y el sistema K-ETA ven cuánto tiempo has pasado en Corea: las series largas de visitas acaban en K-ETA denegadas o preguntas en la frontera. Las escapadas típicas son el ferri de Busán a Fukuoka o vuelos baratos a Fukuoka, Osaka y Taipéi.',
      nomad:
        'El visado Workcation (F-1-D) permite vivir en Corea hasta un año trabajando en remoto para una empresa extranjera, prorrogable otro año. Necesitas al menos un año de experiencia laboral, ingresos anuales de unos 85 millones de wones o más (el doble de la RNB per cápita coreana, se revisa cada año) y un seguro médico de 100 millones de wones.',
      hacks: [
        'La isla de Jeju admite a ciudadanos de casi todos los países (salvo un par de docenas) sin visado ni K-ETA durante 30 días si llegas en vuelo internacional directo, por ejemplo desde Shanghái, Osaka, Taipéi, Hong Kong, Bangkok o Kuala Lumpur. No puedes seguir hacia la península.',
        'Si tu nacionalidad necesita visado pero tienes visado o residencia de EE. UU., Japón, Canadá, Australia o Nueva Zelanda, puedes pasar hasta 30 días en Corea sin visado en tránsito hacia o desde ese país.',
        'Los ciudadanos de países exentos de K-ETA pueden pedirla de forma voluntaria: así te saltas la tarjeta de llegada y la fila en inmigración es más corta.',
        'La e-Arrival Card se rellena en línea hasta tres días antes de aterrizar, y es más rápida que la de papel.',
        'Una K-ETA denegada no es una prohibición de entrada: puedes pedir enseguida un visado normal en el consulado, donde tendrás ocasión de presentar documentos.',
      ],
      pitfalls: [
        'Las webs intermediarias cobran 50–100 $ por la K-ETA. La dirección oficial es k-eta.go.kr y la tasa es de solo 10 000 wones.',
        'Sin K-ETA aprobada no te dejan embarcar. Solicítala al menos 72 horas antes, mejor una semana.',
        'Una dirección incompleta, la falta de reserva de hotel o un motivo de viaje vago son causas frecuentes de denegación de la K-ETA, sobre todo para rusos y kazajos.',
        'Sin visado no se puede trabajar, ni siquiera en trabajos ocasionales. Quedarse de más se multa y puede acarrear prohibición de entrada.',
      ],
      waivers: [
        'Los ciudadanos de países que necesitan visado y tienen visado o residencia vigente de EE. UU., Japón, Canadá, Australia o Nueva Zelanda pueden entrar sin visado hasta 30 días si viajan hacia o desde ese país pasando por Corea. Necesitas billete de continuación; la norma no se aplica a algunas nacionalidades, como Irán, Cuba o Siria.',
      ],
      passports: {
        RU: 'Los rusos entran sin visado 60 días por visita, hasta 90 en 180, y siempre con K-ETA. Las denegaciones son frecuentes: pon una dirección exacta y adjunta la reserva del hotel; si te la deniegan, pide visado en el consulado. Las tarjetas rusas no funcionan, así que lleva dólares en efectivo.',
        KZ: 'Los kazajos entran sin visado 30 días por visita, con K-ETA obligatoria.',
        CN: 'Los ciudadanos chinos necesitan visado, pero Jeju les admite sin visado 30 días en vuelo directo. Un programa piloto sin visado para grupos turísticos chinos funcionó de septiembre de 2025 a junio de 2026: comprueba si se ha prorrogado.',
        US: 'Los estadounidenses entran sin visado 90 días y están exentos de la K-ETA hasta finales de 2026.',
        IN: 'Los ciudadanos indios necesitan visado. Las alternativas son Jeju (30 días sin visado en vuelo directo) y el tránsito de 30 días con visado de EE. UU., Japón, Canadá, Australia o Nueva Zelanda.',
        IL: 'Los israelíes entran sin visado 90 días, pero no están en la lista de exentos de K-ETA, así que la autorización es obligatoria.',
      },
    },
    de: {
      summary:
        'Die meisten westlichen Pässe sowie Japan und Taiwan reisen 90 Tage visumfrei ein (Kanadier 180), und bis Ende 2026 sind Bürger von 22 Staaten – darunter USA, Großbritannien, Kanada, Australien, Japan, Deutschland, Frankreich, Italien, Spanien und Polen – von der K-ETA befreit. Andere Visumfreie wie Russen (60 Tage), Kasachen (30), Mexikaner, Brasilianer, Türken, Israelis und Emiratis brauchen eine K-ETA. Chinesen, Inder, Ukrainer und viele andere brauchen ein Visum, nach Jeju kommen die meisten aber ohne.',
      apply:
        'Die K-ETA beantragst du auf k-eta.go.kr spätestens 72 Stunden vor dem Abflug: Sie kostet 10.000 Won, die Antwort kommt meist innerhalb eines Tages, und sie gilt für mehrere Reisen über mehrere Jahre (das Enddatum steht in der Genehmigung und liegt nie nach dem Passablauf). Mit genehmigter K-ETA entfällt die Einreisekarte. Ein Visum gibt es beim koreanischen Konsulat oder Visazentrum: Das Touristenvisum für eine Einreise kostet etwa 40 $ und dauert 5–10 Werktage, mit Kontoauszügen und Arbeitgeberbescheinigung.',
      visaRun:
        'Aus- und Wiedereinreise bringen einen neuen Aufenthalt, aber Einwanderungsbehörde und K-ETA-System sehen, wie lange du schon in Korea warst: Lange Besuchsserien führen zu abgelehnten K-ETAs oder Fragen an der Grenze. Kurze Abstecher sind die Fähre von Busan nach Fukuoka oder günstige Flüge nach Fukuoka, Osaka und Taipeh.',
      nomad:
        'Das Workcation-Visum (F-1-D) erlaubt bis zu ein Jahr in Korea mit Remote-Arbeit für eine ausländische Firma, verlängerbar um ein weiteres Jahr. Nötig sind mindestens ein Jahr Berufserfahrung, ein Jahreseinkommen von etwa 85 Mio. Won oder mehr (das Doppelte des koreanischen BNE pro Kopf, jährlich angepasst) und eine Krankenversicherung über 100 Mio. Won.',
      hacks: [
        'Die Insel Jeju lässt Bürger der meisten Staaten (bis auf etwa zwei Dutzend) 30 Tage ohne Visum und ohne K-ETA einreisen, wenn sie direkt mit einem internationalen Flug ankommen – etwa aus Shanghai, Osaka, Taipeh, Hongkong, Bangkok oder Kuala Lumpur. Weiterfliegen aufs Festland ist nicht erlaubt.',
        'Brauchst du als Staatsangehöriger ein Visum, hast aber ein Visum oder einen Aufenthaltstitel der USA, Japans, Kanadas, Australiens oder Neuseelands, darfst du im Transit in dieses oder aus diesem Land bis zu 30 Tage visumfrei in Korea bleiben.',
        'Bürger K-ETA-befreiter Länder können sie trotzdem freiwillig beantragen – dann entfällt die Einreisekarte und die Schlange an der Passkontrolle ist kürzer.',
        'Die e-Arrival Card lässt sich bis zu drei Tage vor der Landung online ausfüllen, schneller als auf Papier.',
        'Eine abgelehnte K-ETA ist keine Einreisesperre: Du kannst sofort ein reguläres Visum beim Konsulat beantragen und dort Unterlagen vorlegen.',
      ],
      pitfalls: [
        'Vermittlerseiten verlangen 50–100 $ für die K-ETA. Die offizielle Adresse ist k-eta.go.kr, die Gebühr nur 10.000 Won.',
        'Ohne genehmigte K-ETA darfst du nicht an Bord. Beantrage sie mindestens 72 Stunden vorher, besser eine Woche.',
        'Unvollständige Adresse, fehlende Hotelbuchung oder ein vager Reisezweck sind häufige Gründe für eine K-ETA-Ablehnung, besonders bei Russen und Kasachen.',
        'Arbeiten ohne Visum ist verboten, auch Nebenjobs. Überziehungen kosten Bußgeld und können eine Einreisesperre nach sich ziehen.',
      ],
      waivers: [
        'Staatsangehörige visumpflichtiger Länder mit gültigem Visum oder Aufenthaltstitel der USA, Japans, Kanadas, Australiens oder Neuseelands dürfen bis zu 30 Tage visumfrei einreisen, wenn sie über Korea in dieses Land oder von dort reisen. Ein Weiterreiseticket ist nötig; für einige Nationalitäten, darunter Iran, Kuba und Syrien, gilt die Regel nicht.',
      ],
      passports: {
        RU: 'Russen reisen 60 Tage pro Besuch visumfrei ein, höchstens 90 Tage in 180, und immer mit K-ETA. Ablehnungen sind häufig: Gib eine genaue Adresse an und lade eine Hotelbuchung hoch; bei Ablehnung beantragst du ein Visum beim Konsulat. Russische Karten funktionieren nicht, nimm US-Dollar in bar mit.',
        KZ: 'Kasachische Staatsangehörige reisen 30 Tage pro Besuch visumfrei ein, mit verpflichtender K-ETA.',
        CN: 'Chinesen brauchen ein Visum, Jeju steht ihnen bei Direktflug aber 30 Tage visumfrei offen. Ein visumfreies Pilotprogramm für chinesische Reisegruppen lief von September 2025 bis Juni 2026 – prüfe, ob es verlängert wurde.',
        US: 'US-Bürger reisen 90 Tage visumfrei ein und sind bis Ende 2026 von der K-ETA befreit.',
        IN: 'Inder brauchen ein Visum. Auswege sind Jeju (30 Tage visumfrei bei Direktflug) und der 30-Tage-Transit mit einem Visum der USA, Japans, Kanadas, Australiens oder Neuseelands.',
        IL: 'Israelis reisen 90 Tage visumfrei ein, stehen aber nicht auf der K-ETA-Befreiungsliste – die Genehmigung ist Pflicht.',
      },
    },
    fr: {
      summary:
        'La plupart des passeports occidentaux, le Japon et Taïwan entrent sans visa pour 90 jours (180 pour les Canadiens), et jusqu’à fin 2026 les ressortissants de 22 pays — dont les États-Unis, le Royaume-Uni, le Canada, l’Australie, le Japon, l’Allemagne, la France, l’Italie, l’Espagne et la Pologne — sont dispensés de K-ETA. Les autres exemptés de visa, comme les Russes (60 jours), les Kazakhs (30), les Mexicains, Brésiliens, Turcs, Israéliens et Émiriens, ont besoin d’une K-ETA. Chinois, Indiens, Ukrainiens et bien d’autres doivent avoir un visa, mais la plupart peuvent aller à Jeju sans.',
      apply:
        'La K-ETA se demande sur k-eta.go.kr au moins 72 heures avant l’embarquement : elle coûte 10 000 wons, la réponse arrive en général en un jour et elle couvre plusieurs voyages pendant plusieurs années (la date de fin figure sur l’accord et ne dépasse jamais celle du passeport). Avec une K-ETA approuvée, pas de carte d’arrivée. Pour un visa, adressez-vous à un consulat ou centre de visas coréen : le visa touristique à entrée unique coûte environ 40 $ et prend 5 à 10 jours ouvrés, avec relevés bancaires et attestation d’employeur.',
      visaRun:
        'Sortir et revenir ouvre un nouveau séjour, mais l’immigration et le système K-ETA voient combien de temps vous avez passé en Corée : de longues séries de séjours entraînent des refus de K-ETA ou des questions à la frontière. Les sauts de puce classiques : le ferry de Busan à Fukuoka ou des vols bon marché vers Fukuoka, Osaka et Taipei.',
      nomad:
        'Le visa Workcation (F-1-D) permet de vivre jusqu’à un an en Corée en télétravaillant pour une entreprise étrangère, renouvelable un an. Il faut au moins un an d’expérience professionnelle, un revenu annuel d’environ 85 millions de wons ou plus (le double du RNB coréen par habitant, révisé chaque année) et une assurance santé couvrant 100 millions de wons.',
      hacks: [
        'L’île de Jeju accueille les ressortissants de la plupart des pays (sauf une vingtaine) sans visa ni K-ETA pour 30 jours, si vous y arrivez par un vol international direct — depuis Shanghai, Osaka, Taipei, Hong Kong, Bangkok ou Kuala Lumpur, par exemple. Impossible de poursuivre vers le continent.',
        'Si votre nationalité est soumise au visa mais que vous avez un visa ou un titre de séjour américain, japonais, canadien, australien ou néo-zélandais, vous pouvez passer jusqu’à 30 jours en Corée sans visa en transit vers ou depuis ce pays.',
        'Les ressortissants des pays dispensés de K-ETA peuvent tout de même la demander volontairement : plus de carte d’arrivée et une file plus courte à l’immigration.',
        'L’e-Arrival Card se remplit en ligne jusqu’à trois jours avant l’atterrissage, plus vite que la version papier.',
        'Un refus de K-ETA n’est pas une interdiction d’entrée : vous pouvez demander tout de suite un visa classique au consulat, où vous pourrez présenter des justificatifs.',
      ],
      pitfalls: [
        'Les sites intermédiaires facturent la K-ETA 50 à 100 $. L’adresse officielle est k-eta.go.kr et les frais ne sont que de 10 000 wons.',
        'Sans K-ETA approuvée, pas d’embarquement. Faites la demande au moins 72 heures avant, idéalement une semaine.',
        'Une adresse incomplète, l’absence de réservation d’hôtel ou un motif flou sont des causes fréquentes de refus de K-ETA, surtout pour les Russes et les Kazakhs.',
        'Travailler sans visa est interdit, petits boulots compris. Un dépassement de séjour est sanctionné d’une amende et peut entraîner une interdiction d’entrée.',
      ],
      waivers: [
        'Les ressortissants de pays soumis au visa titulaires d’un visa ou titre de séjour valide des États-Unis, du Japon, du Canada, d’Australie ou de Nouvelle-Zélande peuvent entrer sans visa jusqu’à 30 jours s’ils voyagent vers ou depuis ce pays via la Corée. Un billet de continuation est exigé ; la règle ne s’applique pas à quelques nationalités, dont l’Iran, Cuba et la Syrie.',
      ],
      passports: {
        RU: 'Les Russes entrent sans visa pour 60 jours par séjour, 90 jours maximum sur 180, et toujours avec une K-ETA. Les refus sont fréquents : indiquez une adresse précise et joignez une réservation d’hôtel ; en cas de refus, demandez un visa au consulat. Les cartes russes ne fonctionnent pas, prévoyez des dollars en espèces.',
        KZ: 'Les Kazakhs entrent sans visa pour 30 jours par séjour, avec une K-ETA obligatoire.',
        CN: 'Les Chinois ont besoin d’un visa, mais Jeju leur est ouverte sans visa pour 30 jours en vol direct. Un programme pilote sans visa pour les groupes de touristes chinois a fonctionné de septembre 2025 à juin 2026 : vérifiez s’il a été prolongé.',
        US: 'Les Américains entrent sans visa pour 90 jours et sont dispensés de K-ETA jusqu’à fin 2026.',
        IN: 'Les Indiens ont besoin d’un visa. Restent Jeju (30 jours sans visa en vol direct) et le transit de 30 jours avec un visa américain, japonais, canadien, australien ou néo-zélandais.',
        IL: 'Les Israéliens entrent sans visa pour 90 jours mais ne figurent pas sur la liste des dispensés de K-ETA : l’autorisation est obligatoire.',
      },
    },
    it: {
      summary:
        'La maggior parte dei passaporti occidentali, il Giappone e Taiwan entrano senza visto per 90 giorni (i canadesi per 180), e fino a fine 2026 i cittadini di 22 paesi — tra cui Stati Uniti, Regno Unito, Canada, Australia, Giappone, Germania, Francia, Italia, Spagna e Polonia — sono esentati dalla K-ETA. Gli altri esenti da visto, come russi (60 giorni), kazaki (30), messicani, brasiliani, turchi, israeliani ed emiratini, devono avere la K-ETA. A cinesi, indiani, ucraini e molti altri serve il visto, ma quasi tutti possono visitare Jeju senza.',
      apply:
        'La K-ETA si chiede su k-eta.go.kr almeno 72 ore prima dell’imbarco: costa 10.000 won, la risposta arriva di solito entro un giorno e vale per più viaggi per diversi anni (la scadenza è indicata nell’approvazione e non supera mai quella del passaporto). Con la K-ETA approvata non compili la carta di sbarco. Per il visto ci si rivolge a un consolato o centro visti coreano: quello turistico a ingresso singolo costa circa 40 $ e richiede 5–10 giorni lavorativi, con estratti conto e dichiarazione del datore di lavoro.',
      visaRun:
        'Uscire e rientrare dà un nuovo soggiorno, ma l’immigrazione e il sistema K-ETA vedono quanto tempo hai passato in Corea: lunghe serie di visite portano a K-ETA respinte o domande alla frontiera. Le uscite brevi tipiche sono il traghetto da Busan a Fukuoka o i voli economici per Fukuoka, Osaka e Taipei.',
      nomad:
        'Il visto Workcation (F-1-D) permette di vivere in Corea fino a un anno lavorando da remoto per un’azienda estera, rinnovabile per un altro anno. Servono almeno un anno di esperienza lavorativa, un reddito annuo di circa 85 milioni di won o più (il doppio del RNL coreano pro capite, aggiornato ogni anno) e un’assicurazione sanitaria da 100 milioni di won.',
      hacks: [
        'L’isola di Jeju accoglie i cittadini di quasi tutti i paesi (tranne un paio di dozzine) senza visto e senza K-ETA per 30 giorni se arrivi con un volo internazionale diretto, per esempio da Shanghai, Osaka, Taipei, Hong Kong, Bangkok o Kuala Lumpur. Non puoi proseguire verso la penisola.',
        'Se la tua cittadinanza richiede il visto ma hai un visto o un permesso di soggiorno di Stati Uniti, Giappone, Canada, Australia o Nuova Zelanda, puoi restare in Corea fino a 30 giorni senza visto in transito verso o da quel paese.',
        'Chi viene da paesi esentati dalla K-ETA può comunque richiederla volontariamente: così salti la carta di sbarco e fai una fila più corta all’immigrazione.',
        'La e-Arrival Card si compila online fino a tre giorni prima dell’atterraggio, più in fretta di quella cartacea.',
        'Una K-ETA respinta non è un divieto d’ingresso: puoi chiedere subito un visto normale al consolato, dove potrai presentare i documenti.',
      ],
      pitfalls: [
        'I siti intermediari chiedono 50–100 $ per la K-ETA. L’indirizzo ufficiale è k-eta.go.kr e il costo è di soli 10.000 won.',
        'Senza K-ETA approvata non ti fanno imbarcare. Fai domanda almeno 72 ore prima, meglio una settimana.',
        'Un indirizzo incompleto, l’assenza di prenotazione alberghiera o uno scopo del viaggio vago sono cause frequenti di rifiuto della K-ETA, soprattutto per russi e kazaki.',
        'Senza visto non si può lavorare, nemmeno con lavoretti occasionali. Chi resta oltre il limite paga una multa e rischia il divieto d’ingresso.',
      ],
      waivers: [
        'I cittadini di paesi soggetti a visto con visto o permesso valido di Stati Uniti, Giappone, Canada, Australia o Nuova Zelanda possono entrare senza visto fino a 30 giorni se viaggiano verso o da quel paese passando per la Corea. Serve il biglietto di prosecuzione; la regola non vale per alcune nazionalità, tra cui Iran, Cuba e Siria.',
      ],
      passports: {
        RU: 'I russi entrano senza visto per 60 giorni a visita, fino a 90 su 180, e sempre con la K-ETA. I rifiuti sono frequenti: indica un indirizzo preciso e allega la prenotazione dell’hotel; se te la respingono, chiedi il visto al consolato. Le carte russe non funzionano, porta dollari in contanti.',
        KZ: 'I cittadini kazaki entrano senza visto per 30 giorni a visita, con K-ETA obbligatoria.',
        CN: 'Ai cittadini cinesi serve il visto, ma Jeju li accoglie senza visto per 30 giorni con volo diretto. Un programma sperimentale senza visto per i gruppi turistici cinesi è stato attivo da settembre 2025 a giugno 2026: verifica se è stato prorogato.',
        US: 'I cittadini statunitensi entrano senza visto per 90 giorni e sono esentati dalla K-ETA fino a fine 2026.',
        IN: 'Ai cittadini indiani serve il visto. Le alternative sono Jeju (30 giorni senza visto con volo diretto) e il transito di 30 giorni con un visto di Stati Uniti, Giappone, Canada, Australia o Nuova Zelanda.',
        IL: 'Gli israeliani entrano senza visto per 90 giorni ma non sono nella lista degli esentati dalla K-ETA: l’autorizzazione è obbligatoria.',
      },
    },
  },
};

export default guide;
