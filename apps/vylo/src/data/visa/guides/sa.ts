import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'SA',
  checked: '2026-10',
  fees: {
    evisa: { kind: 'from', amount: 480, currency: 'SAR' },
    voa: { kind: 'from', amount: 480, currency: 'SAR' },
  },
  stay: { evisa: 90, voa: 90 },
  links: { evisa: 'https://visa.visitsaudi.com', immigration: 'https://visa.mofa.gov.sa' },
  docs: ['insurance', 'returnTicket', 'booking'],
  passportMonths: 6,
  visaRun: 'no',
  waivers: [
    { holds: ['visaUS', 'visaGB', 'visaSchengen'], status: 'evisa', days: 90 },
    { holds: ['resUS', 'resGB', 'resEU', 'resGCC'], status: 'evisa', days: 90 },
  ],
  hackScope: [null, null, null, null],
  pitfallScope: [null, null, null, null],
  text: {
    ru: {
      summary:
        'Граждане примерно 66 стран, включая Россию, ЕС, Великобританию, США, Канаду, Австралию, Японию, Корею, Китай и Казахстан, получают туристическую e-визу онлайн за минуты или визу по прилёте. Это годовая многократная виза с пребыванием до 90 дней. Остальные, в том числе граждане Индии, получают её, если у них есть использованная виза США, Великобритании или Шенгена либо ВНЖ этих стран или стран Залива; гражданам Израиля въезд закрыт.',
      apply:
        'Подайте заявку на visa.visitsaudi.com: анкета, фото паспорта, оплата картой — обычно решение приходит за несколько минут, иногда за сутки. С обязательной медицинской страховкой и сборами виза стоит около 480–535 риалов в зависимости от НДС и сервисного сбора. Виза по прилёте стоит примерно столько же, но в очереди в аэропорту можно потерять час.',
      visaRun:
        'Визаран не имеет смысла: туристическая виза действует год и даёт в сумме до 90 дней пребывания за этот год, а выезды и въезды этот лимит не обнуляют. Новый лимит — только с новой визой после окончания старой.',
      hacks: [
        'Транзитная виза Stopover на 96 часов выдаётся бесплатно при покупке билета Saudia или flynas через Саудовскую Аравию в третью страну — платите только около 40 риалов сбора и 13 риалов страховки. Её оформляют прямо при бронировании до 90 дней до вылета.',
        'Туристическая виза разрешает умру (кроме сезона хаджа) — отдельная паломническая виза не нужна. Слоты в Равду в Медине бронируют в приложении Nusuk.',
        'Годовая многократная виза удобна для поездок в Бахрейн по мосту короля Фахда или в Иорданию: каждый въезд расходует общий лимит в 90 дней, но новую визу покупать не нужно.',
        'Единая туристическая виза стран Залива (GCC) на октябрь 2026 года не запущена: для Саудовской Аравии по-прежнему нужна своя виза.',
      ],
      pitfalls: [
        'Во время хаджа туристическим визам закрыты Мекка и окрестности, а въезд в Мекку для немусульман запрещён всегда. Не планируйте поездку в Джидду на эти недели без проверки ограничений.',
        'Перерасчёт стоит 100 риалов за каждый день и может закончиться депортацией. Считайте суммарные дни за год, а не за поездку.',
        'Сайты-посредники с «Saudi e-visa» берут в 2–3 раза дороже. Официальные порталы — visa.visitsaudi.com и visa.mofa.gov.sa.',
        'Туристическая виза не даёт права работать и вести бизнес-встречи с оплатой — для этого нужна бизнес-виза.',
      ],
      passports: {
        RU: 'Россияне получают туристическую e-визу или визу по прилёте. Российские карты для оплаты не подойдут — понадобится зарубежная карта; прямых регулярных рейсов почти нет, летают через Дубай, Доху или Стамбул.',
        IN: 'Гражданам Индии e-виза доступна при наличии использованной визы США, Великобритании или Шенгена либо ВНЖ США, Великобритании, ЕС или стран Залива. Без них — консульская туристическая виза через уполномоченные визовые центры.',
        IL: 'Гражданам Израиля въезд по израильскому паспорту закрыт. Отметок об Израиле в паспорте других стран больше нет — Израиль не ставит штампы, а выдаёт отдельный талон.',
        US: 'Гражданам США доступна e-виза и виза по прилёте на общих условиях: год, многократная, до 90 дней.',
      },
      waivers: [
        'Подходит туристическая или бизнес-виза США, Великобритании или Шенгена, по которой вы уже хотя бы раз въезжали в выдавшую страну (нужен штамп). Виза должна быть действительна на момент подачи; можно получить e-визу онлайн или визу по прилёте.',
        'Постоянные жители США, Великобритании и ЕС, а также резиденты стран Залива (GCC) получают туристическую e-визу независимо от гражданства. ВНЖ должен быть действителен ещё не менее 3 месяцев.',
      ],
    },
    en: {
      summary:
        'Citizens of about 66 countries, including Russia, the EU, the UK, the US, Canada, Australia, Japan, Korea, China and Kazakhstan, get a tourist e-visa online within minutes or a visa on arrival. It is a one-year multiple-entry visa for up to 90 days of stay. Others, including Indian citizens, qualify if they hold a used US, UK or Schengen visa or residence in those places or the GCC; Israeli citizens cannot enter.',
      apply:
        'Apply on visa.visitsaudi.com: form, passport photo, card payment — a decision usually comes within minutes, sometimes a day. With mandatory health insurance and fees, the visa costs around 480–535 SAR depending on VAT and the service fee. The visa on arrival costs about the same, but the airport queue can take an hour.',
      visaRun:
        'Visa runs make no sense: the tourist visa is valid for a year and allows up to 90 days in total during that year, and leaving and re-entering does not reset it. You only get a new allowance with a new visa once the old one has expired.',
      hacks: [
        'The 96-hour Stopover visa is free with a Saudia or flynas ticket through Saudi Arabia to a third country — you pay only about 40 SAR in fees and 13 SAR for insurance. You get it during booking, up to 90 days before departure.',
        'The tourist visa allows Umrah (outside Hajj season), so no separate pilgrimage visa is needed. Rawdah slots in Medina are booked in the Nusuk app.',
        'The one-year multiple-entry visa is handy for trips to Bahrain over the King Fahd Causeway or to Jordan: each entry uses up the shared 90 days, but you do not have to buy a new visa.',
        'The GCC unified tourist visa has not launched as of October 2026, so Saudi Arabia still needs its own visa.',
      ],
      pitfalls: [
        'During Hajj, Mecca and its surroundings are closed to tourist-visa holders, and Mecca is always closed to non-Muslims. Check restrictions before planning Jeddah for those weeks.',
        'Overstaying costs 100 SAR per day and can lead to deportation. Count your total days for the year, not per trip.',
        '“Saudi e-visa” agency sites charge two to three times more. The official portals are visa.visitsaudi.com and visa.mofa.gov.sa.',
        'The tourist visa does not allow work or paid business activity — that needs a business visa.',
      ],
      passports: {
        RU: 'Russian citizens get the tourist e-visa or a visa on arrival. Russian bank cards will not work for payment, so you need a foreign card; there are hardly any scheduled direct flights, so people connect in Dubai, Doha or Istanbul.',
        IN: 'Indian citizens can get the e-visa if they hold a used US, UK or Schengen visa or residence in the US, UK, EU or GCC. Without one, apply for a consular tourist visa through the authorised visa centres.',
        IL: 'Israeli passport holders cannot enter. Other passports no longer carry Israeli evidence, since Israel issues a separate entry slip instead of a stamp.',
        US: 'US citizens get the e-visa or visa on arrival on the standard terms: one year, multiple entry, up to 90 days.',
      },
      waivers: [
        'A US, UK or Schengen tourist or business visa counts if you have already entered the issuing country with it at least once (you need the stamp). The visa must be valid when you apply; you can get the e-visa online or a visa on arrival.',
        'Permanent residents of the US, the UK and the EU, as well as GCC residents, get the tourist e-visa regardless of nationality. The residence permit must be valid for at least three more months.',
      ],
    },
    es: {
      summary:
        'Los ciudadanos de unos 66 países, entre ellos Rusia, la UE, Reino Unido, EE. UU., Canadá, Australia, Japón, Corea, China y Kazajistán, obtienen el visado turístico electrónico en línea en minutos o un visado a la llegada. Es un visado de un año y entradas múltiples para un máximo de 90 días de estancia. Los demás, incluidos los indios, pueden obtenerlo si tienen un visado usado de EE. UU., Reino Unido o Schengen o residencia en esos países o en el CCG; los ciudadanos israelíes no pueden entrar.',
      apply:
        'Solicítalo en visa.visitsaudi.com: formulario, foto del pasaporte y pago con tarjeta; la respuesta suele llegar en minutos, a veces en un día. Con el seguro médico obligatorio y las tasas, cuesta unos 480–535 SAR según el IVA y la tasa de servicio. El visado a la llegada cuesta más o menos lo mismo, pero la cola del aeropuerto puede llevar una hora.',
      visaRun:
        'El visa run no tiene sentido: el visado turístico vale un año y permite hasta 90 días en total durante ese año, y salir y volver a entrar no lo reinicia. Solo tendrás un nuevo cupo con un visado nuevo cuando venza el anterior.',
      hacks: [
        'El visado Stopover de 96 horas es gratis con un billete de Saudia o flynas que pase por Arabia Saudí hacia un tercer país: solo pagas unos 40 SAR de tasas y 13 SAR de seguro. Se obtiene al reservar, hasta 90 días antes de la salida.',
        'El visado turístico permite hacer la umrah (fuera de la temporada del hach), así que no necesitas un visado de peregrinación aparte. Los turnos para la Rawdah de Medina se reservan en la app Nusuk.',
        'El visado de un año y entradas múltiples va muy bien para ir a Baréin por la calzada del Rey Fahd o a Jordania: cada entrada consume los 90 días compartidos, pero no tienes que comprar otro visado.',
        'En octubre de 2026 el visado turístico unificado del CCG sigue sin ponerse en marcha, así que Arabia Saudí exige su propio visado.',
      ],
      pitfalls: [
        'Durante el hach, La Meca y sus alrededores están cerrados a los titulares de visado turístico, y La Meca siempre está vedada a los no musulmanes. Revisa las restricciones antes de planear Yeda en esas semanas.',
        'Quedarte de más cuesta 100 SAR al día y puede acabar en deportación. Cuenta los días totales del año, no por viaje.',
        'Las webs intermediarias de «Saudi e-visa» cobran dos o tres veces más. Los portales oficiales son visa.visitsaudi.com y visa.mofa.gov.sa.',
        'El visado turístico no permite trabajar ni realizar actividades de negocio remuneradas: para eso hace falta un visado de negocios.',
      ],
      passports: {
        RU: 'Los ciudadanos rusos obtienen el visado electrónico o el visado a la llegada. Las tarjetas rusas no sirven para pagar, así que necesitarás una tarjeta extranjera; casi no hay vuelos directos regulares, se hace escala en Dubái, Doha o Estambul.',
        IN: 'Los ciudadanos indios pueden obtener el visado electrónico si tienen un visado usado de EE. UU., Reino Unido o Schengen o residencia en EE. UU., Reino Unido, la UE o el CCG. Sin ellos, toca pedir un visado turístico consular en los centros de visados autorizados.',
        IL: 'Con pasaporte israelí no se puede entrar. Los demás pasaportes ya no llevan rastro de Israel, porque Israel entrega una tarjeta de entrada aparte en lugar de sellar.',
        US: 'Los ciudadanos estadounidenses obtienen el visado electrónico o a la llegada en las condiciones generales: un año, entradas múltiples y hasta 90 días.',
      },
      waivers: [
        'Sirve un visado de turista o de negocios de EE. UU., Reino Unido o Schengen con el que ya hayas entrado al menos una vez en el país emisor (necesitas el sello). Debe estar vigente al solicitar; puedes pedir el visado electrónico en línea u obtenerlo a la llegada.',
        'Los residentes permanentes de EE. UU., Reino Unido y la UE, así como los residentes en el CCG, obtienen el visado turístico electrónico sea cual sea su nacionalidad. El permiso de residencia debe tener al menos tres meses de validez.',
      ],
    },
    de: {
      summary:
        'Staatsangehörige von rund 66 Ländern, darunter Russland, die EU, Großbritannien, die USA, Kanada, Australien, Japan, Korea, China und Kasachstan, bekommen das Touristen-E-Visum online in wenigen Minuten oder ein Visum bei Ankunft. Es gilt ein Jahr für mehrfache Einreise und bis zu 90 Tage Aufenthalt. Andere, auch Inder, erhalten es mit einem benutzten US-, UK- oder Schengen-Visum oder einem Aufenthaltstitel dort oder in den GCC-Staaten; israelische Staatsangehörige dürfen nicht einreisen.',
      apply:
        'Beantrage es auf visa.visitsaudi.com: Formular, Passfoto, Kartenzahlung – die Entscheidung kommt meist nach Minuten, manchmal nach einem Tag. Mit Pflicht-Krankenversicherung und Gebühren kostet das Visum je nach Mehrwertsteuer und Servicegebühr etwa 480–535 SAR. Das Visum bei Ankunft kostet ungefähr gleich viel, die Schlange am Flughafen kann aber eine Stunde dauern.',
      visaRun:
        'Visa-Runs ergeben keinen Sinn: Das Touristenvisum gilt ein Jahr und erlaubt in diesem Jahr insgesamt bis zu 90 Tage, Aus- und Wiedereinreise setzen nichts zurück. Ein neues Kontingent gibt es nur mit einem neuen Visum nach Ablauf des alten.',
      hacks: [
        'Das 96-Stunden-Stopover-Visum ist mit einem Saudia- oder flynas-Ticket über Saudi-Arabien in ein Drittland kostenlos – du zahlst nur rund 40 SAR Gebühren und 13 SAR Versicherung. Du bekommst es direkt bei der Buchung, bis zu 90 Tage vor Abflug.',
        'Das Touristenvisum erlaubt die Umra (außerhalb der Hadsch-Saison), ein eigenes Pilgervisum ist nicht nötig. Zeitfenster für die Rawda in Medina bucht man in der App Nusuk.',
        'Das Jahresvisum für mehrfache Einreise ist praktisch für Abstecher über den König-Fahd-Damm nach Bahrain oder nach Jordanien: Jede Einreise zehrt an den gemeinsamen 90 Tagen, ein neues Visum brauchst du aber nicht.',
        'Das einheitliche GCC-Touristenvisum ist im Oktober 2026 nicht gestartet, Saudi-Arabien verlangt weiterhin ein eigenes Visum.',
      ],
      pitfalls: [
        'Während des Hadsch sind Mekka und Umgebung für Inhaber von Touristenvisa gesperrt, und für Nichtmuslime ist Mekka immer tabu. Prüf die Einschränkungen, bevor du Dschidda in diesen Wochen einplanst.',
        'Eine Überziehung kostet 100 SAR pro Tag und kann zur Abschiebung führen. Zähl die Tage im ganzen Jahr, nicht pro Reise.',
        'Vermittlerseiten für „Saudi e-visa“ verlangen das Zwei- bis Dreifache. Die offiziellen Portale sind visa.visitsaudi.com und visa.mofa.gov.sa.',
        'Das Touristenvisum erlaubt weder Arbeit noch bezahlte geschäftliche Tätigkeit – dafür braucht es ein Geschäftsvisum.',
      ],
      passports: {
        RU: 'Russische Staatsangehörige bekommen das Touristen-E-Visum oder ein Visum bei Ankunft. Mit russischen Karten lässt sich nicht bezahlen, du brauchst eine ausländische Karte; reguläre Direktflüge gibt es kaum, man steigt in Dubai, Doha oder Istanbul um.',
        IN: 'Indische Staatsangehörige können das E-Visum bekommen, wenn sie ein benutztes US-, UK- oder Schengen-Visum oder einen Aufenthaltstitel der USA, Großbritanniens, der EU oder der GCC-Staaten haben. Ohne beantragt man ein konsularisches Touristenvisum über die autorisierten Visazentren.',
        IL: 'Mit israelischem Pass ist keine Einreise möglich. Andere Pässe tragen keine israelischen Spuren mehr, da Israel statt eines Stempels einen separaten Einreisezettel ausgibt.',
        US: 'US-Bürger bekommen E-Visum oder Visum bei Ankunft zu den üblichen Bedingungen: ein Jahr, mehrfache Einreise, bis zu 90 Tage.',
      },
      waivers: [
        'Es zählt ein Touristen- oder Geschäftsvisum der USA, Großbritanniens oder des Schengenraums, mit dem du schon mindestens einmal in das ausstellende Land eingereist bist (Stempel nötig). Es muss bei der Antragstellung gültig sein; du bekommst dann das E-Visum online oder ein Visum bei Ankunft.',
        'Daueraufenthaltsberechtigte in den USA, Großbritannien und der EU sowie Einwohner der GCC-Staaten erhalten das Touristen-E-Visum unabhängig von ihrer Nationalität. Der Aufenthaltstitel muss noch mindestens drei Monate gültig sein.',
      ],
    },
    fr: {
      summary:
        'Les ressortissants d’environ 66 pays, dont la Russie, l’UE, le Royaume-Uni, les États-Unis, le Canada, l’Australie, le Japon, la Corée, la Chine et le Kazakhstan, obtiennent l’e-visa touristique en ligne en quelques minutes ou un visa à l’arrivée. Il est valable un an, à entrées multiples, pour 90 jours de séjour au total. Les autres, dont les Indiens, y ont droit avec un visa américain, britannique ou Schengen déjà utilisé ou un titre de séjour de ces pays ou du CCG ; les ressortissants israéliens ne peuvent pas entrer.',
      apply:
        'Faites la demande sur visa.visitsaudi.com : formulaire, photo du passeport, paiement par carte ; la réponse arrive en général en quelques minutes, parfois en une journée. Avec l’assurance santé obligatoire et les frais, comptez environ 480 à 535 SAR selon la TVA et les frais de service. Le visa à l’arrivée coûte à peu près autant, mais la file d’attente à l’aéroport peut prendre une heure.',
      visaRun:
        'Le visa run n’a aucun intérêt : le visa touristique est valable un an et autorise 90 jours au total sur cette période, et sortir puis revenir ne remet rien à zéro. Un nouveau quota ne vient qu’avec un nouveau visa, une fois l’ancien expiré.',
      hacks: [
        'Le visa Stopover de 96 heures est gratuit avec un billet Saudia ou flynas transitant par l’Arabie saoudite vers un pays tiers : vous ne payez qu’environ 40 SAR de frais et 13 SAR d’assurance. Il s’obtient lors de la réservation, jusqu’à 90 jours avant le départ.',
        'Le visa touristique permet d’accomplir la omra (hors saison du hajj), sans visa de pèlerinage distinct. Les créneaux pour la Rawdah de Médine se réservent dans l’application Nusuk.',
        'Le visa annuel à entrées multiples est pratique pour aller à Bahreïn par la chaussée du Roi-Fahd ou en Jordanie : chaque entrée puise dans les 90 jours communs, sans racheter de visa.',
        'Le visa touristique unifié du CCG n’est pas lancé en octobre 2026 : l’Arabie saoudite exige toujours son propre visa.',
      ],
      pitfalls: [
        'Pendant le hajj, La Mecque et ses environs sont fermés aux titulaires de visas touristiques, et La Mecque est toujours interdite aux non-musulmans. Vérifiez les restrictions avant de prévoir Djeddah ces semaines-là.',
        'Un dépassement coûte 100 SAR par jour et peut mener à l’expulsion. Comptez les jours sur l’année entière, pas par voyage.',
        'Les sites intermédiaires « Saudi e-visa » facturent deux à trois fois plus cher. Les portails officiels sont visa.visitsaudi.com et visa.mofa.gov.sa.',
        'Le visa touristique n’autorise ni le travail ni une activité commerciale rémunérée : il faut pour cela un visa d’affaires.',
      ],
      passports: {
        RU: 'Les ressortissants russes obtiennent l’e-visa touristique ou un visa à l’arrivée. Les cartes bancaires russes ne permettent pas de payer : il faut une carte étrangère ; les vols directs réguliers sont rares, on passe par Dubaï, Doha ou Istanbul.',
        IN: 'Les ressortissants indiens peuvent obtenir l’e-visa s’ils ont un visa américain, britannique ou Schengen déjà utilisé, ou un titre de séjour des États-Unis, du Royaume-Uni, de l’UE ou du CCG. Sinon, il faut un visa touristique consulaire via les centres de visas agréés.',
        IL: 'L’entrée est impossible avec un passeport israélien. Les autres passeports ne portent plus de trace d’Israël, qui remet un feuillet d’entrée au lieu d’un tampon.',
        US: 'Les citoyens américains obtiennent l’e-visa ou le visa à l’arrivée aux conditions générales : un an, entrées multiples, jusqu’à 90 jours.',
      },
      waivers: [
        'Un visa touristique ou d’affaires des États-Unis, du Royaume-Uni ou de l’espace Schengen compte si vous êtes déjà entré au moins une fois avec lui dans le pays émetteur (tampon requis). Il doit être valable au moment de la demande ; vous obtenez alors l’e-visa en ligne ou un visa à l’arrivée.',
        'Les résidents permanents des États-Unis, du Royaume-Uni et de l’UE, ainsi que les résidents du CCG, obtiennent l’e-visa touristique quelle que soit leur nationalité. Le titre de séjour doit être valable encore au moins trois mois.',
      ],
    },
    it: {
      summary:
        'I cittadini di circa 66 paesi, tra cui Russia, UE, Regno Unito, Stati Uniti, Canada, Australia, Giappone, Corea, Cina e Kazakistan, ottengono il visto turistico elettronico online in pochi minuti oppure il visto all’arrivo. Vale un anno, a ingressi multipli, per un massimo di 90 giorni di permanenza. Gli altri, compresi gli indiani, possono ottenerlo con un visto già usato di Stati Uniti, Regno Unito o area Schengen o con la residenza in quei paesi o nel CCG; i cittadini israeliani non possono entrare.',
      apply:
        'Fai domanda su visa.visitsaudi.com: modulo, foto del passaporto, pagamento con carta; la risposta arriva di solito in pochi minuti, a volte in un giorno. Con l’assicurazione sanitaria obbligatoria e le tasse costa circa 480–535 SAR a seconda di IVA e commissione. Il visto all’arrivo costa più o meno lo stesso, ma la coda in aeroporto può durare un’ora.',
      visaRun:
        'Il visa run non ha senso: il visto turistico vale un anno e consente in tutto fino a 90 giorni in quell’anno, e uscire e rientrare non azzera nulla. Un nuovo plafond arriva solo con un nuovo visto, dopo la scadenza del precedente.',
      hacks: [
        'Il visto Stopover di 96 ore è gratuito con un biglietto Saudia o flynas che passa dall’Arabia Saudita verso un paese terzo: paghi solo circa 40 SAR di commissioni e 13 SAR di assicurazione. Si ottiene durante la prenotazione, fino a 90 giorni prima della partenza.',
        'Il visto turistico consente l’umra (fuori dalla stagione dell’hajj), senza un visto da pellegrino a parte. Gli slot per la Rawdah di Medina si prenotano nell’app Nusuk.',
        'Il visto annuale a ingressi multipli è comodo per andare in Bahrein lungo la strada rialzata Re Fahd o in Giordania: ogni ingresso consuma i 90 giorni comuni, ma non serve comprare un altro visto.',
        'A ottobre 2026 il visto turistico unico del CCG non è partito, quindi l’Arabia Saudita richiede ancora il proprio visto.',
      ],
      pitfalls: [
        'Durante l’hajj La Mecca e dintorni sono chiusi a chi ha il visto turistico, e La Mecca è sempre vietata ai non musulmani. Controlla le restrizioni prima di programmare Gedda in quelle settimane.',
        'Restare oltre il limite costa 100 SAR al giorno e può portare all’espulsione. Conta i giorni totali dell’anno, non del singolo viaggio.',
        'I siti intermediari di «Saudi e-visa» chiedono due o tre volte tanto. I portali ufficiali sono visa.visitsaudi.com e visa.mofa.gov.sa.',
        'Il visto turistico non consente di lavorare né attività d’affari retribuite: per quelle serve un visto d’affari.',
      ],
      passports: {
        RU: 'I cittadini russi ottengono il visto elettronico o il visto all’arrivo. Con le carte russe non si può pagare, quindi serve una carta estera; i voli diretti di linea sono rarissimi, si fa scalo a Dubai, Doha o Istanbul.',
        IN: 'I cittadini indiani possono ottenere il visto elettronico se hanno un visto già usato di Stati Uniti, Regno Unito o area Schengen o la residenza negli Stati Uniti, nel Regno Unito, nell’UE o nel CCG. Altrimenti serve un visto turistico consolare tramite i centri visti autorizzati.',
        IL: 'Con il passaporto israeliano non si può entrare. Gli altri passaporti non riportano più tracce di Israele, che rilascia un foglietto d’ingresso invece del timbro.',
        US: 'I cittadini statunitensi ottengono il visto elettronico o all’arrivo alle condizioni generali: un anno, ingressi multipli, fino a 90 giorni.',
      },
      waivers: [
        'Vale un visto turistico o d’affari di Stati Uniti, Regno Unito o area Schengen con cui sei già entrato almeno una volta nel paese che l’ha rilasciato (serve il timbro). Deve essere valido al momento della domanda; puoi ottenere il visto elettronico online o quello all’arrivo.',
        'I residenti permanenti di Stati Uniti, Regno Unito e UE, così come i residenti nel CCG, ottengono il visto turistico elettronico qualunque sia la loro cittadinanza. Il permesso di soggiorno deve essere valido ancora almeno tre mesi.',
      ],
    },
  },
};

export default guide;
