import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'CU',
  checked: '2026-10',
  fees: { evisa: { kind: 'from', amount: 22, currency: 'EUR' } },
  stay: { evisa: 90 },
  links: { evisa: 'https://evisacuba.cu' },
  forms: [{ name: "D'Viajeros", url: 'https://dviajeros.mitrans.gob.cu', fee: { kind: 'free' } }],
  docs: ['insurance', 'returnTicket', 'booking'],
  passportMonths: 6,
  extend: { days: 90 },
  hackScope: [['RU'], null, ['regime:evisa'], null],
  pitfallScope: [null, null, null],
  text: {
    ru: {
      summary:
        'Граждане России, Беларуси, Китая и ещё нескольких стран въезжают без визы (россияне — на 90 дней). Почти всем остальным нужна туристическая e-виза — электронная замена прежней туристической карты, на 90 дней. Каждый путешественник заполняет онлайн-анкету D’Viajeros, а медицинская страховка обязательна для всех.',
      apply:
        'E-визу на один въезд оформляют на государственном портале evisacuba.cu, через консульство Кубы или — чаще всего — через авиакомпанию или туроператора, продавших билет. Цена зависит от канала: от 22 € в консульстве до 50–100 € у перевозчиков. Бумажные туристические карты с 2026 года не принимаются. За 72 часа до прилёта заполните D’Viajeros (бесплатно) и сохраните QR-код.',
      extend:
        'Туристическую e-визу можно один раз продлить ещё на 90 дней в иммиграционном офисе (Inmigración) в Гаване или в провинции до истечения срока. Понадобятся паспорт, действующая страховка на весь новый срок, брони жилья и марки госпошлины, которые покупают в банке.',
      hacks: [
        'Россиянам e-виза не нужна, а карты «Мир» на Кубе работают в банкоматах и многих отелях — редкость для Латинской Америки.',
        'Страховку проверяют выборочно, но если её нет, полис придётся купить в аэропорту у кубинской Asistur, которая продаёт его дороже. Распечатайте полис с упоминанием Кубы на испанском или английском.',
        'Летите через Канкун? Многие авиакомпании продают e-визу прямо при регистрации на рейс в Гавану — это проще, чем ждать письма с портала.',
        'Наличные евро, канадские доллары или доллары США выгоднее менять у частных лиц и в отелях по неофициальному курсу, а не в банке CADECA по официальному — разница в разы.',
      ],
      pitfalls: [
        'Сайты вроде «evisacuba.com» или «cubavisa» — посредники, берущие 50–100 € сверх цены. Государственный портал — evisacuba.cu; D’Viajeros бесплатен.',
        'После поездки на Кубу (с 12 января 2021 года) гражданам стран безвизового режима с США больше не положена ESTA — для поездки в США придётся получать визу B1/B2.',
        'Электричество и топливо в дефиците: отключения по много часов и очереди на заправках — обычное дело, планируйте наличные, фонарик и запас времени.',
      ],
      passports: {
        RU: 'Россияне въезжают без визы на 90 дней. Прямые рейсы «Аэрофлота» из Москвы летают в Гавану и Варадеро. Карты «Мир» принимают, но наличные доллары или евро всё равно пригодятся.',
        US: 'Гражданам США туризм на Кубе запрещён законом США: нужна одна из 12 разрешённых OFAC категорий (обычно «Support for the Cuban People»), жильё в частных casas particulares и сохранённые записи о расходах на 5 лет. Американские банковские карты на Кубе не работают.',
        CA: 'Канадцы — самые частые гости Кубы; e-виза у них обычно включена в пакетный тур или продаётся авиакомпанией. Продлить её можно на месте, как и всем.',
        CN: 'Граждане Китая с обычным паспортом въезжают без визы на 90 дней.',
      },
    },
    en: {
      summary:
        'Citizens of Russia, Belarus, China and a few other countries enter visa-free (Russians for 90 days). Almost everyone else needs a tourist e-visa — the electronic successor to the old tourist card — valid for a 90-day stay. Every traveller fills in the online D’Viajeros form, and health insurance is compulsory for all.',
      apply:
        'Get the single-entry e-visa on the government portal evisacuba.cu, through a Cuban consulate or, most often, through the airline or tour operator that sold your ticket. The price depends on the channel: from €22 at a consulate to €50–100 from carriers. Paper tourist cards have not been accepted since 2026. Within 72 hours of arrival, fill in D’Viajeros (free) and keep the QR code.',
      extend:
        'The tourist e-visa can be extended once for another 90 days at an immigration office (Inmigración) in Havana or a provincial capital before it expires. Bring your passport, insurance covering the new period, accommodation bookings and the fee stamps sold at banks.',
      hacks: [
        'Russians need no e-visa, and Russian Mir cards work in Cuban ATMs and many hotels — a rarity in Latin America.',
        'Insurance is checked at random, but if you have none you must buy a policy at the airport from Cuba’s Asistur at a premium. Print your policy with Cuba mentioned, in Spanish or English.',
        'Flying via Cancún? Many airlines sell the e-visa right at check-in for the Havana flight — easier than waiting for an email from the portal.',
        'Change cash euros, Canadian or US dollars privately or at hotels at the informal rate rather than at CADECA bureaux at the official one — the difference is several-fold.',
      ],
      pitfalls: [
        'Sites like “evisacuba.com” or “cubavisa” are agencies charging €50–100 on top. The government portal is evisacuba.cu, and D’Viajeros is free.',
        'Having visited Cuba on or after 12 January 2021 makes Visa Waiver Program citizens ineligible for ESTA — your next US trip will need a B1/B2 visa.',
        'Power and fuel are scarce: blackouts lasting hours and queues at petrol stations are normal, so plan for cash, a torch and spare time.',
      ],
      passports: {
        RU: 'Russians enter visa-free for 90 days. Aeroflot flies direct from Moscow to Havana and Varadero. Mir cards are accepted, but cash dollars or euros still come in handy.',
        US: 'Tourism in Cuba is banned for US citizens under US law: you need one of OFAC’s 12 authorised categories (usually “Support for the Cuban People”), private casas particulares and spending records kept for five years. US bank cards do not work in Cuba.',
        CA: 'Canadians are Cuba’s most frequent visitors; their e-visa usually comes with the package holiday or is sold by the airline. It can be extended locally like anyone else’s.',
        CN: 'Chinese citizens with ordinary passports enter visa-free for 90 days.',
      },
    },
    es: {
      summary:
        'Los ciudadanos de Rusia, Bielorrusia, China y algunos países más entran sin visado (los rusos, 90 días). Casi todos los demás necesitan la visa electrónica de turismo —la sucesora digital de la antigua tarjeta del turista— para una estancia de 90 días. Todo viajero rellena el formulario en línea D’Viajeros y el seguro médico es obligatorio para todos.',
      apply:
        'La e-visa de una entrada se obtiene en el portal oficial evisacuba.cu, en un consulado cubano o, lo más habitual, a través de la aerolínea o el turoperador que te vendió el billete. El precio depende del canal: desde 22 € en un consulado hasta 50–100 € con las aerolíneas. Las tarjetas del turista en papel ya no se aceptan desde 2026. En las 72 horas previas a la llegada, rellena D’Viajeros (gratis) y guarda el código QR.',
      extend:
        'La e-visa de turismo se puede prorrogar una vez otros 90 días en una oficina de Inmigración de La Habana o de una capital de provincia antes de que venza. Lleva el pasaporte, un seguro que cubra el nuevo periodo, reservas de alojamiento y los sellos de timbre que se compran en el banco.',
      hacks: [
        'Los rusos no necesitan e-visa, y las tarjetas rusas Mir funcionan en cajeros y muchos hoteles cubanos, algo raro en Latinoamérica.',
        'El seguro se revisa al azar, pero si no lo tienes debes comprar una póliza en el aeropuerto a la cubana Asistur, más cara. Imprime tu póliza con Cuba mencionada, en español o inglés.',
        '¿Vuelas vía Cancún? Muchas aerolíneas venden la e-visa en el mismo mostrador de facturación del vuelo a La Habana, más fácil que esperar el correo del portal.',
        'Cambia euros, dólares canadienses o estadounidenses en efectivo con particulares o en hoteles al tipo informal y no en las CADECA al oficial: la diferencia es de varias veces.',
      ],
      pitfalls: [
        'Webs como «evisacuba.com» o «cubavisa» son agencias que cobran 50–100 € de más. El portal oficial es evisacuba.cu y D’Viajeros es gratuito.',
        'Haber estado en Cuba a partir del 12 de enero de 2021 te deja sin ESTA si eres de un país del Programa de Exención de Visas: para tu próximo viaje a EE. UU. necesitarás visa B1/B2.',
        'Faltan electricidad y combustible: los apagones de horas y las colas en las gasolineras son normales, así que lleva efectivo, linterna y margen de tiempo.',
      ],
      passports: {
        RU: 'Los rusos entran sin visado 90 días. Aeroflot vuela directo de Moscú a La Habana y Varadero. Aceptan tarjetas Mir, pero los dólares o euros en efectivo siguen siendo útiles.',
        US: 'La ley estadounidense prohíbe a sus ciudadanos el turismo en Cuba: necesitas una de las 12 categorías autorizadas por la OFAC (normalmente «Support for the Cuban People»), alojarte en casas particulares y guardar registros de gastos durante cinco años. Las tarjetas de bancos de EE. UU. no funcionan en Cuba.',
        CA: 'Los canadienses son los visitantes más frecuentes; su e-visa suele venir incluida en el paquete o la vende la aerolínea. Se puede prorrogar allí como cualquier otra.',
        CN: 'Los ciudadanos chinos con pasaporte ordinario entran sin visado 90 días.',
      },
    },
    de: {
      summary:
        'Staatsangehörige Russlands, Belarus’, Chinas und einiger weiterer Länder reisen visumfrei ein (Russen für 90 Tage). Fast alle anderen brauchen ein touristisches E-Visum – den elektronischen Nachfolger der alten Touristenkarte – für einen Aufenthalt von 90 Tagen. Alle Reisenden füllen das Online-Formular D’Viajeros aus, und eine Krankenversicherung ist für alle Pflicht.',
      apply:
        'Das E-Visum für eine Einreise gibt es auf dem staatlichen Portal evisacuba.cu, bei einem kubanischen Konsulat oder – am häufigsten – über die Airline oder den Reiseveranstalter, bei dem du gebucht hast. Der Preis hängt vom Weg ab: ab 22 € beim Konsulat bis 50–100 € bei Fluggesellschaften. Papier-Touristenkarten werden seit 2026 nicht mehr akzeptiert. Innerhalb von 72 Stunden vor der Ankunft füllst du D’Viajeros aus (kostenlos) und speicherst den QR-Code.',
      extend:
        'Das Touristen-E-Visum lässt sich einmal um weitere 90 Tage bei einer Einwanderungsbehörde (Inmigración) in Havanna oder einer Provinzhauptstadt verlängern, bevor es abläuft. Nimm Pass, eine Versicherung für den neuen Zeitraum, Unterkunftsbuchungen und die bei Banken erhältlichen Gebührenmarken mit.',
      hacks: [
        'Russen brauchen kein E-Visum, und russische Mir-Karten funktionieren an kubanischen Geldautomaten und in vielen Hotels – in Lateinamerika eine Seltenheit.',
        'Die Versicherung wird stichprobenartig geprüft; hast du keine, musst du am Flughafen eine teurere Police bei der kubanischen Asistur kaufen. Druck deine Police aus, mit Kuba als Geltungsbereich, auf Spanisch oder Englisch.',
        'Fliegst du über Cancún? Viele Airlines verkaufen das E-Visum direkt beim Check-in für den Havanna-Flug – einfacher, als auf die Mail vom Portal zu warten.',
        'Tausch Euro, kanadische oder US-Dollar in bar privat oder im Hotel zum inoffiziellen Kurs statt in den CADECA-Wechselstuben zum offiziellen – der Unterschied ist ein Vielfaches.',
      ],
      pitfalls: [
        'Seiten wie „evisacuba.com“ oder „cubavisa“ sind Agenturen, die 50–100 € Aufschlag nehmen. Das staatliche Portal ist evisacuba.cu, und D’Viajeros ist kostenlos.',
        'Wer am oder nach dem 12. Januar 2021 in Kuba war, bekommt als Bürger eines Visa-Waiver-Landes keine ESTA mehr – für die nächste USA-Reise brauchst du ein B1/B2-Visum.',
        'Strom und Treibstoff sind knapp: stundenlange Stromausfälle und Schlangen an Tankstellen sind normal, also plane Bargeld, eine Taschenlampe und Zeitpuffer ein.',
      ],
      passports: {
        RU: 'Russen reisen 90 Tage visumfrei ein. Aeroflot fliegt direkt von Moskau nach Havanna und Varadero. Mir-Karten werden akzeptiert, Bargeld in Dollar oder Euro ist trotzdem nützlich.',
        US: 'US-Recht verbietet US-Bürgern Tourismus in Kuba: Du brauchst eine der 12 von OFAC erlaubten Kategorien (meist „Support for the Cuban People“), private Casas particulares und Ausgabenbelege, die du fünf Jahre aufbewahrst. US-Bankkarten funktionieren in Kuba nicht.',
        CA: 'Kanadier sind Kubas häufigste Gäste; ihr E-Visum ist meist in der Pauschalreise enthalten oder wird von der Airline verkauft. Verlängern lässt es sich vor Ort wie bei allen.',
        CN: 'Chinesische Staatsangehörige mit gewöhnlichem Pass reisen 90 Tage visumfrei ein.',
      },
    },
    fr: {
      summary:
        'Les ressortissants de Russie, du Bélarus, de Chine et de quelques autres pays entrent sans visa (90 jours pour les Russes). Presque tous les autres ont besoin du visa électronique touristique — successeur numérique de l’ancienne carte de tourisme — pour un séjour de 90 jours. Chaque voyageur remplit le formulaire en ligne D’Viajeros, et l’assurance santé est obligatoire pour tous.',
      apply:
        'L’e-visa à entrée unique s’obtient sur le portail officiel evisacuba.cu, auprès d’un consulat cubain ou, le plus souvent, via la compagnie aérienne ou le voyagiste qui vous a vendu le billet. Le prix dépend du canal : à partir de 22 € au consulat, 50 à 100 € auprès des compagnies. Les cartes de tourisme papier ne sont plus acceptées depuis 2026. Dans les 72 heures précédant l’arrivée, remplissez D’Viajeros (gratuit) et gardez le QR code.',
      extend:
        'L’e-visa touristique se prolonge une fois de 90 jours dans un bureau de l’immigration (Inmigración) à La Havane ou dans un chef-lieu de province, avant son expiration. Munissez-vous du passeport, d’une assurance couvrant la nouvelle période, des réservations d’hébergement et des timbres fiscaux vendus en banque.',
      hacks: [
        'Les Russes n’ont pas besoin d’e-visa, et les cartes russes Mir fonctionnent aux distributeurs et dans de nombreux hôtels cubains — une rareté en Amérique latine.',
        'L’assurance est contrôlée au hasard, mais sans elle vous devrez acheter à l’aéroport une police plus chère auprès de la cubaine Asistur. Imprimez votre attestation mentionnant Cuba, en espagnol ou en anglais.',
        'Vous passez par Cancún ? Beaucoup de compagnies vendent l’e-visa directement à l’enregistrement du vol pour La Havane — plus simple que d’attendre le courriel du portail.',
        'Changez vos euros, dollars canadiens ou américains en espèces auprès de particuliers ou à l’hôtel au taux informel plutôt qu’aux bureaux CADECA au taux officiel : l’écart est de plusieurs fois.',
      ],
      pitfalls: [
        'Des sites comme « evisacuba.com » ou « cubavisa » sont des agences qui facturent 50 à 100 € de plus. Le portail officiel est evisacuba.cu, et D’Viajeros est gratuit.',
        'Un séjour à Cuba depuis le 12 janvier 2021 rend les citoyens du Visa Waiver Program inéligibles à l’ESTA : votre prochain voyage aux États-Unis exigera un visa B1/B2.',
        'L’électricité et le carburant manquent : coupures de plusieurs heures et files aux stations-service sont courantes ; prévoyez des espèces, une lampe et de la marge.',
      ],
      passports: {
        RU: 'Les Russes entrent sans visa pour 90 jours. Aeroflot relie directement Moscou à La Havane et Varadero. Les cartes Mir sont acceptées, mais des dollars ou euros en espèces restent utiles.',
        US: 'La loi américaine interdit le tourisme à Cuba aux citoyens des États-Unis : il faut relever d’une des 12 catégories autorisées par l’OFAC (souvent « Support for the Cuban People »), loger en casas particulares et conserver ses justificatifs de dépenses cinq ans. Les cartes bancaires américaines ne fonctionnent pas à Cuba.',
        CA: 'Les Canadiens sont les visiteurs les plus nombreux ; leur e-visa est souvent inclus dans le forfait ou vendu par la compagnie. Il se prolonge sur place comme pour tous.',
        CN: 'Les citoyens chinois munis d’un passeport ordinaire entrent sans visa pour 90 jours.',
      },
    },
    it: {
      summary:
        'I cittadini di Russia, Bielorussia, Cina e pochi altri paesi entrano senza visto (i russi per 90 giorni). Quasi tutti gli altri hanno bisogno del visto elettronico turistico — l’erede digitale della vecchia carta turistica — per un soggiorno di 90 giorni. Ogni viaggiatore compila il modulo online D’Viajeros e l’assicurazione sanitaria è obbligatoria per tutti.',
      apply:
        'Il visto elettronico a ingresso singolo si ottiene sul portale ufficiale evisacuba.cu, in un consolato cubano o, più spesso, tramite la compagnia aerea o il tour operator che ti ha venduto il biglietto. Il prezzo dipende dal canale: da 22 € al consolato fino a 50–100 € con le compagnie. Le carte turistiche cartacee non sono più accettate dal 2026. Nelle 72 ore prima dell’arrivo compila D’Viajeros (gratuito) e conserva il codice QR.',
      extend:
        'Il visto turistico elettronico si proroga una volta di altri 90 giorni presso un ufficio di Inmigración all’Avana o in un capoluogo di provincia, prima della scadenza. Porta il passaporto, un’assicurazione che copra il nuovo periodo, le prenotazioni degli alloggi e le marche da bollo che si comprano in banca.',
      hacks: [
        'I russi non hanno bisogno del visto elettronico e le carte russe Mir funzionano negli sportelli e in molti hotel cubani, una rarità in America Latina.',
        'L’assicurazione viene controllata a campione, ma se non ce l’hai devi comprare in aeroporto una polizza più cara dalla cubana Asistur. Stampa la polizza con Cuba indicata, in spagnolo o inglese.',
        'Passi da Cancún? Molte compagnie vendono il visto elettronico direttamente al check-in del volo per L’Avana, più semplice che aspettare l’email del portale.',
        'Cambia euro, dollari canadesi o statunitensi in contanti presso privati o in hotel al tasso informale e non alle CADECA al tasso ufficiale: la differenza è di parecchie volte.',
      ],
      pitfalls: [
        'Siti come «evisacuba.com» o «cubavisa» sono agenzie che chiedono 50–100 € in più. Il portale ufficiale è evisacuba.cu e D’Viajeros è gratuito.',
        'Essere stati a Cuba dal 12 gennaio 2021 in poi esclude dall’ESTA i cittadini del Visa Waiver Program: per il prossimo viaggio negli Stati Uniti servirà un visto B1/B2.',
        'Elettricità e carburante scarseggiano: blackout di ore e code ai distributori sono normali, quindi porta contanti, una torcia e margini di tempo.',
      ],
      passports: {
        RU: 'I russi entrano senza visto per 90 giorni. Aeroflot vola diretto da Mosca all’Avana e a Varadero. Le carte Mir sono accettate, ma dollari o euro in contanti restano utili.',
        US: 'La legge statunitense vieta ai propri cittadini il turismo a Cuba: serve una delle 12 categorie autorizzate dall’OFAC (di solito «Support for the Cuban People»), alloggio in casas particulares e la documentazione delle spese conservata per cinque anni. Le carte delle banche USA a Cuba non funzionano.',
        CA: 'I canadesi sono i visitatori più frequenti; il loro visto elettronico di solito è incluso nel pacchetto o lo vende la compagnia aerea. Si proroga sul posto come per tutti.',
        CN: 'I cittadini cinesi con passaporto ordinario entrano senza visto per 90 giorni.',
      },
    },
  },
};

export default guide;
