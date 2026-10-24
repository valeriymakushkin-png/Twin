import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'LU',
  checked: '2026-10',
  fees: { visa: { kind: 'fixed', amount: 90, currency: 'EUR' } },
  stay: { visa: 90 },
  links: { immigration: 'https://guichet.public.lu' },
  docs: ['insurance', 'returnTicket', 'booking', 'finance'],
  passportMonths: 3,
  rule: { days: 90, window: 180 },
  visaRun: 'no',
  waivers: [
    { holds: ['resEU'], status: 'free', days: 90 },
    { holds: ['visaSchengen'], status: 'free', days: 90 },
  ],
  hackScope: [null, ['regime:free', 'regime:required'], null],
  pitfallScope: [null, null, ['regime:required']],
  text: {
    ru: {
      summary:
        'Люксембург входит в Шенген: граждане ЕС, ЕЭЗ и Швейцарии въезжают по ID-карте, а граждане США, Великобритании, Канады, Австралии, Японии, Бразилии, Украины и других безвизовых стран — до 90 дней в любые 180. Россиянам, индийцам, китайцам, жителям Кабо-Верде и многим другим нужна шенгенская виза за 90 €; правила описаны на guichet.lu.',
      apply:
        'Собственных посольств у Люксембурга мало, поэтому во многих странах его визы оформляют посольства Бельгии или Нидерландов — на guichet.lu указано, кто представляет страну там, где вы живёте. Сбор — 90 € плюс сервисный центра (TLScontact или VFS Global), решение — обычно 15 дней. Если в поездке по Бенилюксу больше ночей в Бельгии, подавайте в бельгийскую визу.',
      visaRun:
        'Визаран не работает: 90 дней считаются по всему Шенгену в скользящем окне 180 дней, а соседние Бельгия, Франция и Германия — тоже Шенген. Выезд из зоны лишь ставит счётчик на паузу; с апреля 2026 года EES фиксирует каждый въезд и выезд.',
      hacks: [
        'Весь общественный транспорт в Люксембурге — поезда, автобусы и трамваи во втором классе — бесплатен для всех, включая туристов: билеты нужны только для первого класса и поездок за границу.',
        'Для пребывания дольше 90 дней сначала получают в иммиграционном ведомстве временное разрешение на пребывание и только потом подают на визу D в посольство — в другом порядке документы не примут.',
        'Деревня Шенген на Мозеле, где в 1985 году подписали соглашение, — в 35 минутах от столицы: там музей Европы, а за рекой сразу Германия и Франция без всякого контроля.',
      ],
      pitfalls: [
        'Если вы живёте не в отеле или гостинице, нужно подать в коммуну декларацию о прибытии; в отеле её заменяет анкета гостя, которую вы заполняете при заселении.',
        'Германия с сентября 2024 года проверяет документы на всех сухопутных границах, включая люксембургскую: в поезде на Трир или Кобленц держите паспорт при себе.',
        'Не подавайте в Люксембург ради «более лёгкого консульства», если основная поездка — по Франции или Германии: подавать нужно туда, где больше ночей.',
      ],
      waivers: [
        'Действующий ВНЖ или долгосрочная виза D любой шенгенской страны позволяют ездить в Люксембург без визы до 90 дней в любые 180. Ирландский и кипрский ВНЖ не подходят.',
        'Шенгенская виза другой страны действует и в Люксембурге в пределах своих дат и числа дней. Первую поездку лучше совершить в страну, выдавшую визу.',
      ],
      passports: {
        RU: 'Люксембургские визы в России выдают ограниченно, а с ноября 2025 года, как правило, однократные; сбор — полные 90 €. Прямых рейсов нет: летают через Стамбул в Брюссель, Франкфурт или сам Люксембург; российские карты не работают.',
        US: 'Гражданам США виза не нужна: 90 дней в любые 180. Запуск ETIAS (20 €) отложен, раньше 2027 года его не ждут.',
        GB: 'Британцы ограничены 90 днями в 180. Паспорт должен быть моложе 10 лет на дату въезда и действовать ещё 3 месяца после выезда.',
        IN: 'Гражданам Индии нужна шенгенская виза; в Индии её часто оформляет представительство другой страны Бенилюкса. По правилу «каскада» после двух правильно использованных виз за три года дают многократную визу на 2 года, затем на 5 лет.',
        UA: 'Граждане Украины с биометрическим паспортом въезжают без визы на 90 дней в 180; временная защита в ЕС продлена до марта 2027 года.',
      },
    },
    en: {
      summary:
        'Luxembourg is in Schengen: EU, EEA and Swiss citizens enter with an ID card, while US, UK, Canadian, Australian, Japanese, Brazilian, Ukrainian and other visa-exempt travellers stay up to 90 days in any 180. Russian, Indian, Chinese, Cape Verdean and many other passport holders need a €90 Schengen visa; the rules are on guichet.lu.',
      apply:
        'Luxembourg has few embassies of its own, so in many countries Belgian or Dutch embassies issue its visas — guichet.lu shows who represents it where you live. The fee is €90 plus the visa centre’s charge (TLScontact or VFS Global), and decisions usually take 15 days. If your Benelux trip has more nights in Belgium, apply for a Belgian visa instead.',
      visaRun:
        'Visa runs don’t work: the 90 days are counted across the whole Schengen area over any rolling 180-day window, and neighbouring Belgium, France and Germany are all Schengen too. Leaving the zone only pauses the clock; since April 2026 the EES records every entry and exit.',
      hacks: [
        'All public transport in Luxembourg — trains, buses and trams in second class — is free for everyone, tourists included: you only need a ticket for first class and cross-border trips.',
        'For stays over 90 days, first get a temporary authorisation to stay from the immigration directorate and only then apply for the D visa at the embassy — the other way round won’t be accepted.',
        'Schengen village on the Moselle, where the agreement was signed in 1985, is 35 minutes from the capital: there’s a European Museum, and Germany and France are right across the river with no checks at all.',
      ],
      pitfalls: [
        'If you aren’t staying in a hotel or guesthouse, you must file a declaration of arrival with the commune; in a hotel, the guest form you fill in at check-in counts instead.',
        'Germany has been checking papers at all its land borders since September 2024, Luxembourg’s included: keep your passport on you on the train to Trier or Koblenz.',
        'Don’t apply to Luxembourg for an “easier consulate” if your trip is mainly through France or Germany — apply where you spend the most nights.',
      ],
      waivers: [
        'A valid residence permit or long-stay D visa from any Schengen country lets you visit Luxembourg visa-free for up to 90 days in any 180. Irish and Cypriot permits don’t count.',
        'A Schengen visa issued by another member state is valid in Luxembourg within its dates and number of days. Make the first trip to the issuing country.',
      ],
      passports: {
        RU: 'Luxembourg issues few visas in Russia, and since November 2025 they’re usually single-entry; the fee is the full €90. There are no direct flights: routes go via Istanbul to Brussels, Frankfurt or Luxembourg itself; Russian bank cards don’t work.',
        US: 'US citizens need no visa: 90 days in any 180. ETIAS (€20) has been delayed and isn’t expected before 2027.',
        GB: 'UK citizens are limited to 90 days in 180. Your passport must be under 10 years old on the day you enter and valid for 3 months after you leave.',
        IN: 'Indian citizens need a Schengen visa; in India it’s often handled by another Benelux country’s mission. Under the EU “cascade”, two visas used correctly within three years earn a 2-year multiple-entry visa, then a 5-year one.',
        UA: 'Ukrainians with a biometric passport enter visa-free for 90 days in 180; temporary protection in the EU runs until March 2027.',
      },
    },
    es: {
      summary:
        'Luxemburgo forma parte de Schengen: los ciudadanos de la UE, el EEE y Suiza entran con el DNI, y los de EE. UU., Reino Unido, Canadá, Australia, Japón, Brasil, Ucrania y otros países exentos se quedan hasta 90 días en cualquier periodo de 180. Quienes tienen pasaporte ruso, indio, chino, caboverdiano y muchos otros necesitan un visado Schengen de 90 €; las normas están en guichet.lu.',
      apply:
        'Luxemburgo tiene pocas embajadas propias, así que en muchos países sus visados los expiden las embajadas de Bélgica o de los Países Bajos; en guichet.lu verás quién lo representa donde vives. La tasa es de 90 € más la del centro de visados (TLScontact o VFS Global) y la resolución suele tardar 15 días. Si en tu viaje por el Benelux pasas más noches en Bélgica, pide el visado belga.',
      visaRun:
        'Los visa runs no sirven: los 90 días se cuentan en todo Schengen dentro de una ventana móvil de 180, y Bélgica, Francia y Alemania, los vecinos, también son Schengen. Salir de la zona solo pausa el contador; desde abril de 2026 el EES registra cada entrada y salida.',
      hacks: [
        'Todo el transporte público de Luxemburgo —trenes, autobuses y tranvías en segunda clase— es gratis para todo el mundo, turistas incluidos: solo pagas en primera clase y en los trayectos internacionales.',
        'Para estancias de más de 90 días, primero obtén una autorización de estancia temporal de la dirección de inmigración y solo después pide el visado D en la embajada; al revés no lo aceptan.',
        'El pueblo de Schengen, a orillas del Mosela, donde se firmó el acuerdo en 1985, está a 35 minutos de la capital: tiene un Museo Europeo y, al otro lado del río, Alemania y Francia sin ningún control.',
      ],
      pitfalls: [
        'Si no te alojas en un hotel o una pensión, debes presentar una declaración de llegada en el ayuntamiento; en un hotel, la ficha que rellenas al registrarte la sustituye.',
        'Desde septiembre de 2024 Alemania controla documentos en todas sus fronteras terrestres, también la luxemburguesa: lleva el pasaporte encima en el tren a Tréveris o Coblenza.',
        'No solicites en Luxemburgo buscando un «consulado más fácil» si tu viaje es sobre todo por Francia o Alemania: solicita donde pases más noches.',
      ],
      waivers: [
        'Un permiso de residencia o un visado nacional D vigente de cualquier país Schengen te permite visitar Luxemburgo sin visado hasta 90 días en 180. Los permisos de Irlanda y Chipre no valen.',
        'Un visado Schengen expedido por otro Estado miembro vale en Luxemburgo dentro de sus fechas y su número de días. Haz el primer viaje al país emisor.',
      ],
      passports: {
        RU: 'Luxemburgo expide pocos visados en Rusia y, desde noviembre de 2025, suelen ser de una sola entrada; la tasa es la completa, 90 €. No hay vuelos directos: se vuela vía Estambul a Bruselas, Fráncfort o el propio Luxemburgo, y las tarjetas rusas no funcionan.',
        US: 'Los ciudadanos estadounidenses no necesitan visado: 90 días en 180. El ETIAS (20 €) se ha retrasado y no se espera antes de 2027.',
        GB: 'Los británicos tienen un límite de 90 días en 180. El pasaporte debe tener menos de 10 años el día de entrada y seguir vigente 3 meses después de salir.',
        IN: 'Los ciudadanos indios necesitan visado Schengen; en India suele tramitarlo la representación de otro país del Benelux. Con la «cascada» europea, dos visados bien usados en tres años dan uno de entradas múltiples de 2 años y luego de 5.',
        UA: 'Los ucranianos con pasaporte biométrico entran sin visado durante 90 días en 180; la protección temporal en la UE dura hasta marzo de 2027.',
      },
    },
    de: {
      summary:
        'Luxemburg gehört zu Schengen: Bürger der EU, des EWR und der Schweiz reisen mit dem Personalausweis ein, Reisende aus den USA, Großbritannien, Kanada, Australien, Japan, Brasilien, der Ukraine und anderen visumfreien Ländern bleiben bis zu 90 Tage in jedem 180-Tage-Zeitraum. Mit russischem, indischem, chinesischem, kapverdischem und vielen anderen Pässen brauchst du ein Schengen-Visum für 90 €; die Regeln stehen auf guichet.lu.',
      apply:
        'Luxemburg hat nur wenige eigene Botschaften, daher stellen in vielen Ländern belgische oder niederländische Botschaften seine Visa aus – guichet.lu zeigt, wer es an deinem Wohnort vertritt. Die Gebühr beträgt 90 € plus Gebühr des Visazentrums (TLScontact oder VFS Global), die Entscheidung dauert meist 15 Tage. Verbringst du auf deiner Benelux-Reise mehr Nächte in Belgien, beantrage ein belgisches Visum.',
      visaRun:
        'Visa-Runs funktionieren nicht: Die 90 Tage gelten für den ganzen Schengen-Raum in einem rollierenden 180-Tage-Fenster, und die Nachbarn Belgien, Frankreich und Deutschland sind ebenfalls Schengen. Wer den Raum verlässt, hält den Zähler nur an; seit April 2026 erfasst das EES jede Ein- und Ausreise.',
      hacks: [
        'Der gesamte öffentliche Verkehr in Luxemburg – Züge, Busse und Trams in der zweiten Klasse – ist für alle kostenlos, auch für Touristen: Ein Ticket brauchst du nur für die erste Klasse und grenzüberschreitende Fahrten.',
        'Für Aufenthalte über 90 Tage holst du dir zuerst bei der Einwanderungsbehörde eine vorläufige Aufenthaltsgenehmigung und beantragst erst dann das D-Visum bei der Botschaft – umgekehrt wird es nicht angenommen.',
        'Das Dorf Schengen an der Mosel, wo das Abkommen 1985 unterzeichnet wurde, liegt 35 Minuten von der Hauptstadt: Es gibt ein Europa-Museum, und gleich über dem Fluss liegen Deutschland und Frankreich, ganz ohne Kontrollen.',
      ],
      pitfalls: [
        'Wohnst du nicht im Hotel oder einer Pension, musst du bei der Gemeinde eine Ankunftserklärung abgeben; im Hotel gilt das Gästeformular beim Einchecken als Ersatz.',
        'Deutschland kontrolliert seit September 2024 an allen Landgrenzen, auch an der luxemburgischen: Hab im Zug nach Trier oder Koblenz deinen Pass dabei.',
        'Beantrage nicht in Luxemburg wegen eines „leichteren Konsulats“, wenn deine Reise hauptsächlich durch Frankreich oder Deutschland führt – zuständig ist das Land mit den meisten Nächten.',
      ],
      waivers: [
        'Mit einem gültigen Aufenthaltstitel oder nationalen D-Visum eines Schengen-Staats reist du bis zu 90 Tage in 180 visumfrei nach Luxemburg. Irische und zyprische Titel zählen nicht.',
        'Ein Schengen-Visum eines anderen Mitgliedstaats gilt innerhalb seiner Daten und Tage auch in Luxemburg. Die erste Reise sollte ins ausstellende Land gehen.',
      ],
      passports: {
        RU: 'Luxemburg stellt in Russland nur wenige Visa aus, seit November 2025 meist für eine Einreise; die Gebühr beträgt volle 90 €. Direktflüge gibt es nicht: Man fliegt über Istanbul nach Brüssel, Frankfurt oder direkt nach Luxemburg; russische Bankkarten funktionieren nicht.',
        US: 'US-Bürger brauchen kein Visum: 90 Tage in 180. ETIAS (20 €) verzögert sich und wird nicht vor 2027 erwartet.',
        GB: 'Briten dürfen 90 Tage in 180 bleiben. Der Pass muss am Einreisetag jünger als 10 Jahre sein und noch 3 Monate nach der Ausreise gelten.',
        IN: 'Indische Staatsangehörige brauchen ein Schengen-Visum; in Indien übernimmt das oft die Vertretung eines anderen Benelux-Landes. Nach der EU-„Kaskade“ gibt es nach zwei korrekt genutzten Visa in drei Jahren ein Mehrfachvisum für 2 Jahre, danach für 5 Jahre.',
        UA: 'Ukrainer mit biometrischem Pass reisen 90 Tage in 180 visumfrei ein; der vorübergehende Schutz in der EU gilt bis März 2027.',
      },
    },
    fr: {
      summary:
        'Le Luxembourg fait partie de Schengen : les citoyens de l’UE, de l’EEE et de la Suisse entrent avec leur carte d’identité, et les voyageurs américains, britanniques, canadiens, australiens, japonais, brésiliens, ukrainiens et d’autres pays exemptés restent jusqu’à 90 jours sur 180. Les titulaires d’un passeport russe, indien, chinois, cap-verdien et de nombreux autres ont besoin d’un visa Schengen à 90 € ; les règles sont sur guichet.lu.',
      apply:
        'Le Luxembourg a peu d’ambassades, si bien que dans de nombreux pays ses visas sont délivrés par les ambassades de Belgique ou des Pays-Bas — guichet.lu indique qui le représente là où vous vivez. Les frais sont de 90 € plus ceux du centre de visas (TLScontact ou VFS Global), et la décision prend en général 15 jours. Si votre voyage au Benelux compte plus de nuits en Belgique, demandez plutôt un visa belge.',
      visaRun:
        'Les visa runs ne fonctionnent pas : les 90 jours se comptent sur tout l’espace Schengen dans une fenêtre glissante de 180, et les voisins — Belgique, France, Allemagne — sont tous dans Schengen. Sortir de la zone ne fait que suspendre le compteur ; depuis avril 2026, l’EES enregistre chaque entrée et sortie.',
      hacks: [
        'Tous les transports publics du Luxembourg — trains, bus et trams en deuxième classe — sont gratuits pour tous, touristes compris : un billet n’est nécessaire qu’en première classe et pour les trajets transfrontaliers.',
        'Pour un séjour de plus de 90 jours, obtenez d’abord une autorisation de séjour temporaire auprès de la direction de l’immigration, puis seulement demandez le visa D à l’ambassade — dans l’autre sens, le dossier n’est pas accepté.',
        'Le village de Schengen, sur la Moselle, où l’accord a été signé en 1985, est à 35 minutes de la capitale : on y trouve un Musée européen, et l’Allemagne et la France juste de l’autre côté de la rivière, sans aucun contrôle.',
      ],
      pitfalls: [
        'Si vous ne logez pas à l’hôtel ou en chambre d’hôtes, vous devez faire une déclaration d’arrivée à la commune ; à l’hôtel, la fiche remplie à l’arrivée en tient lieu.',
        'Depuis septembre 2024, l’Allemagne contrôle les papiers à toutes ses frontières terrestres, y compris celle avec le Luxembourg : gardez votre passeport sur vous dans le train pour Trèves ou Coblence.',
        'Ne déposez pas au Luxembourg pour un « consulat plus facile » si votre voyage se passe surtout en France ou en Allemagne : déposez là où vous passez le plus de nuits.',
      ],
      waivers: [
        'Un titre de séjour ou un visa long séjour D valide d’un pays Schengen vous permet de venir au Luxembourg sans visa jusqu’à 90 jours sur 180. Les titres irlandais et chypriotes ne comptent pas.',
        'Un visa Schengen délivré par un autre État membre est valable au Luxembourg dans la limite de ses dates et de ses jours. Effectuez le premier voyage dans le pays émetteur.',
      ],
      passports: {
        RU: 'Le Luxembourg délivre peu de visas en Russie et, depuis novembre 2025, ils sont en général à entrée unique ; les frais sont de 90 € plein tarif. Pas de vols directs : on passe par Istanbul vers Bruxelles, Francfort ou Luxembourg même ; les cartes bancaires russes ne fonctionnent pas.',
        US: 'Les citoyens américains n’ont pas besoin de visa : 90 jours sur 180. L’ETIAS (20 €) a été repoussé et n’est pas attendu avant 2027.',
        GB: 'Les Britanniques sont limités à 90 jours sur 180. Le passeport doit avoir moins de 10 ans le jour de l’entrée et rester valable 3 mois après la sortie.',
        IN: 'Les citoyens indiens ont besoin d’un visa Schengen ; en Inde, c’est souvent la représentation d’un autre pays du Benelux qui s’en charge. Selon la « cascade » européenne, deux visas bien utilisés en trois ans ouvrent droit à un visa à entrées multiples de 2 ans, puis de 5 ans.',
        UA: 'Les Ukrainiens munis d’un passeport biométrique entrent sans visa pour 90 jours sur 180 ; la protection temporaire dans l’UE court jusqu’en mars 2027.',
      },
    },
    it: {
      summary:
        'Il Lussemburgo fa parte di Schengen: i cittadini di UE, SEE e Svizzera entrano con la carta d’identità, mentre chi ha passaporto di Stati Uniti, Regno Unito, Canada, Australia, Giappone, Brasile, Ucraina e altri paesi esenti resta fino a 90 giorni su 180. Chi ha passaporto russo, indiano, cinese, capoverdiano e di molti altri paesi ha bisogno di un visto Schengen da 90 €; le regole sono su guichet.lu.',
      apply:
        'Il Lussemburgo ha poche ambasciate proprie, quindi in molti paesi i suoi visti li rilasciano le ambasciate di Belgio o Paesi Bassi: su guichet.lu trovi chi lo rappresenta dove vivi. La tassa è di 90 € più quella del centro visti (TLScontact o VFS Global) e la decisione arriva di solito in 15 giorni. Se nel tuo viaggio nel Benelux passi più notti in Belgio, chiedi il visto belga.',
      visaRun:
        'I visa run non funzionano: i 90 giorni si contano su tutta l’area Schengen in una finestra mobile di 180, e anche i vicini Belgio, Francia e Germania sono Schengen. Uscire dall’area mette solo in pausa il contatore; dall’aprile 2026 l’EES registra ogni ingresso e uscita.',
      hacks: [
        'Tutti i trasporti pubblici del Lussemburgo — treni, autobus e tram in seconda classe — sono gratuiti per tutti, turisti compresi: il biglietto serve solo in prima classe e sui tragitti internazionali.',
        'Per soggiorni oltre i 90 giorni ottieni prima un’autorizzazione di soggiorno temporanea dalla direzione immigrazione e solo dopo chiedi il visto D in ambasciata: al contrario non lo accettano.',
        'Il villaggio di Schengen, sulla Mosella, dove l’accordo fu firmato nel 1985, è a 35 minuti dalla capitale: c’è un Museo europeo e, oltre il fiume, Germania e Francia senza alcun controllo.',
      ],
      pitfalls: [
        'Se non dormi in hotel o in una pensione, devi presentare in comune una dichiarazione di arrivo; in hotel la scheda compilata al check-in la sostituisce.',
        'Da settembre 2024 la Germania controlla i documenti a tutti i confini terrestri, anche quello con il Lussemburgo: sul treno per Treviri o Coblenza tieni il passaporto con te.',
        'Non fare domanda in Lussemburgo per un «consolato più facile» se il viaggio è soprattutto in Francia o Germania: fai domanda dove passi più notti.',
      ],
      waivers: [
        'Un permesso di soggiorno o un visto nazionale D valido di qualsiasi paese Schengen ti permette di visitare il Lussemburgo senza visto fino a 90 giorni su 180. I permessi irlandesi e ciprioti non valgono.',
        'Un visto Schengen rilasciato da un altro Stato membro vale anche in Lussemburgo entro le sue date e i suoi giorni. Fai il primo viaggio nel paese che l’ha rilasciato.',
      ],
      passports: {
        RU: 'Il Lussemburgo rilascia pochi visti in Russia e da novembre 2025 sono di solito a ingresso singolo; la tassa è piena, 90 €. Non ci sono voli diretti: si passa da Istanbul verso Bruxelles, Francoforte o lo stesso Lussemburgo, e le carte russe non funzionano.',
        US: 'I cittadini statunitensi non hanno bisogno di visto: 90 giorni su 180. L’ETIAS (20 €) è stato rinviato e non è atteso prima del 2027.',
        GB: 'I britannici hanno il limite di 90 giorni su 180. Il passaporto deve avere meno di 10 anni il giorno dell’ingresso e valere ancora 3 mesi dopo l’uscita.',
        IN: 'I cittadini indiani hanno bisogno del visto Schengen; in India spesso se ne occupa la rappresentanza di un altro paese del Benelux. Con la «cascata» europea, due visti usati correttamente in tre anni danno un visto multiplo di 2 anni e poi di 5.',
        UA: 'Gli ucraini con passaporto biometrico entrano senza visto per 90 giorni su 180; la protezione temporanea nell’UE vale fino a marzo 2027.',
      },
    },
  },
};

export default guide;
