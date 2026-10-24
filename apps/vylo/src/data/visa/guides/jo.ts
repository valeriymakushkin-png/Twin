import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'JO',
  checked: '2026-10',
  fees: {
    voa: { kind: 'fixed', amount: 40, currency: 'JOD' },
    evisa: { kind: 'fixed', amount: 40, currency: 'JOD' },
  },
  stay: { voa: 30, evisa: 30 },
  links: { evisa: 'https://eservices.moi.gov.jo', immigration: 'https://moi.gov.jo' },
  docs: ['returnTicket'],
  passportMonths: 6,
  extend: { days: 60 },
  visaRun: 'limited',
  borders: [
    { name: 'Wadi Araba – Yitzhak Rabin (Aqaba – Eilat)', to: 'IL', lat: 29.5738, lng: 34.9767 },
    { name: 'Sheikh Hussein – Jordan River', to: 'IL', lat: 32.4975, lng: 35.5735 },
    { name: 'King Hussein Bridge – Allenby', to: 'IL', lat: 31.8733, lng: 35.5415 },
  ],
  hackScope: [['regime:voa'], null, null, null],
  pitfallScope: [['regime:voa'], null, ['regime:voa']],
  text: {
    ru: {
      summary:
        'Граждане большинства стран Европы и Америки, а также Индии, Китая, Японии, Кореи, Казахстана, Украины и Израиля получают визу по прилёте за 40 динаров на 30 дней — или не платят за неё вовсе, если заранее купили Jordan Pass. Россияне с 13 декабря 2025 года въезжают без визы на 30 дней, граждане Турции и стран Залива — на 90.',
      apply:
        'Визу по прилёте ставят в аэропорту Аммана, Акабы и на переходах Вади-Араба и Шейх-Хусейн; на мосту короля Хусейна её не выдают. Выгоднее заранее купить Jordan Pass на jordanpass.jo: за 70, 75 или 80 динаров (1, 2 или 3 дня в Петре) он покрывает визовый сбор и вход в Петру, Джераш, Вади-Рам и ещё 40 объектов. Электронную визу можно оформить и на портале МВД, но это нужно только для моста короля Хусейна.',
      extend:
        'Пребывание по туристической визе можно продлить до 90 дней в общей сложности — в отделении полиции по месту проживания до истечения 30 дней. Нужны паспорт, адрес и иногда анализ крови; сбор зависит от срока.',
      visaRun:
        'Обычная виза однократная: после выезда, например в Израиль, при возвращении придётся снова платить 40 динаров, если только вы не выезжали и не вернулись через мост короля Хусейна в пределах срока визы. У россиян лимит — 30 дней за поездку и не больше 90 в году.',
      hacks: [
        'Jordan Pass окупается с первого же визита в Петру: виза 40 динаров плюс однодневный вход в Петру 50 динаров — уже 90, а пасс стоит 70. Купите его до прилёта: после въезда визовый сбор не вернут.',
        'Если едете из Израиля, выбирайте переходы Ицхак Рабин (Эйлат — Акаба) или Шейх-Хусейн: там дают визу по прилёте и принимают Jordan Pass. На мосту короля Хусейна визу не выдают.',
        'На наземных выездах из Иордании берут около 10 динаров, а Израиль за выезд по суше просит около 110 шекелей на переходах Рабин и Шейх-Хусейн и около 200 на мосту Алленби. Держите наличные обеих валют.',
        'Акаба — свободная экономическая зона: здесь дешевле покупки, а из Акабы паромом можно доплыть до Нувейбы в Египте и въехать по бесплатному штампу «только Синай».',
      ],
      pitfalls: [
        'Jordan Pass с визовым покрытием требует пробыть в стране не меньше трёх ночей. Уедете раньше — на выезде возьмут 40 динаров.',
        'Пограничный переход Алленби часто закрывают или сокращают часы работы, особенно после событий 2025–2026 годов. Проверьте статус накануне поездки.',
        'Визу по прилёте оплачивают в динарах; в аэропорту есть обменники и банкоматы, но курс там хуже.',
      ],
      passports: {
        RU: 'С 13 декабря 2025 года россияне въезжают без визы на 30 дней за поездку, не больше 90 дней в календарном году. Jordan Pass всё равно выгоден ради Петры; платить за него придётся зарубежной картой. Российские карты в Иордании не работают.',
        IL: 'Граждане Израиля получают визу на переходах Ицхак Рабин и Шейх-Хусейн; на мосту Алленби для них действуют отдельные правила. Перед поездкой проверьте рекомендации по безопасности.',
        IN: 'Граждане Индии получают визу по прилёте или покрывают её Jordan Pass, но пограничники чаще спрашивают бронь отеля и обратный билет.',
        TR: 'Граждане Турции въезжают без визы на 90 дней.',
      },
    },
    en: {
      summary:
        'Citizens of most European and American countries, as well as India, China, Japan, Korea, Kazakhstan, Ukraine and Israel, get a 30-day visa on arrival for 40 JOD — or pay nothing for it if they bought a Jordan Pass in advance. Since 13 December 2025, Russians enter visa-free for 30 days; Turkish and GCC citizens get 90.',
      apply:
        'Visas on arrival are issued at Amman and Aqaba airports and at the Wadi Araba and Sheikh Hussein crossings, but not at the King Hussein Bridge. It pays to buy a Jordan Pass on jordanpass.jo in advance: for 70, 75 or 80 JOD (one, two or three days in Petra) it covers the visa fee and entry to Petra, Jerash, Wadi Rum and some 40 other sites. You can also get an e-visa on the Interior Ministry portal, but you only need it for the King Hussein Bridge.',
      extend:
        'A tourist stay can be extended to 90 days in total at the police station where you are staying, before your 30 days run out. You need your passport and address, sometimes a blood test; the fee depends on the length.',
      visaRun:
        'The standard visa is single-entry: after leaving, for instance for Israel, you pay 40 JOD again on return, unless you left and came back through the King Hussein Bridge while the visa was still valid. Russians are limited to 30 days per visit and 90 per year.',
      hacks: [
        'The Jordan Pass pays for itself with one visit to Petra: the 40 JOD visa plus 50 JOD for a one-day Petra ticket already make 90, while the pass costs 70. Buy it before you land — the visa fee is not refunded after entry.',
        'Coming from Israel, use the Yitzhak Rabin (Eilat–Aqaba) or Sheikh Hussein crossings: both issue visas on arrival and accept the Jordan Pass. The King Hussein Bridge does not issue visas.',
        'Jordan charges about 10 JOD to leave by land, and Israel asks for about 110 ILS at the Rabin and Sheikh Hussein crossings and about 200 ILS at Allenby. Carry cash in both currencies.',
        'Aqaba is a special economic zone with cheaper shopping, and from Aqaba a ferry takes you to Nuweiba in Egypt, where you can enter on the free Sinai-only stamp.',
      ],
      pitfalls: [
        'A Jordan Pass that covers the visa requires you to stay at least three nights. Leave earlier and you pay 40 JOD on departure.',
        'The Allenby crossing is often closed or on shortened hours, especially after the events of 2025–2026. Check its status the day before.',
        'The visa on arrival is paid in dinars; there are exchange desks and ATMs at the airport, but the rate is worse.',
      ],
      passports: {
        RU: 'Since 13 December 2025, Russian citizens enter visa-free for 30 days per visit and no more than 90 days per calendar year. The Jordan Pass is still worth it for Petra; you will need a foreign card to pay for it. Russian bank cards do not work in Jordan.',
        IL: 'Israeli citizens get the visa at the Yitzhak Rabin and Sheikh Hussein crossings; separate rules apply to them at Allenby. Check the security advice before you go.',
        IN: 'Indian citizens get a visa on arrival or cover it with the Jordan Pass, but officers more often ask for a hotel booking and a return ticket.',
        TR: 'Turkish citizens enter visa-free for 90 days.',
      },
    },
    es: {
      summary:
        'Los ciudadanos de la mayoría de países de Europa y América, además de India, China, Japón, Corea, Kazajistán, Ucrania e Israel, obtienen un visado a la llegada de 30 días por 40 JOD, o no pagan nada si han comprado antes el Jordan Pass. Desde el 13 de diciembre de 2025 los rusos entran sin visado 30 días; los turcos y los ciudadanos del CCG, 90.',
      apply:
        'El visado a la llegada se expide en los aeropuertos de Amán y Áqaba y en los pasos de Wadi Araba y Sheikh Hussein, pero no en el puente del Rey Hussein. Sale a cuenta comprar antes el Jordan Pass en jordanpass.jo: por 70, 75 u 80 JOD (uno, dos o tres días en Petra) cubre la tasa del visado y la entrada a Petra, Jerash, Wadi Rum y unos 40 lugares más. También existe un visado electrónico en el portal del Ministerio del Interior, pero solo hace falta para el puente del Rey Hussein.',
      extend:
        'La estancia turística se puede prorrogar hasta 90 días en total en la comisaría de la zona donde te alojas, antes de que venzan los 30 días. Necesitas el pasaporte y la dirección, a veces un análisis de sangre; la tasa depende del plazo.',
      visaRun:
        'El visado normal es de una sola entrada: si sales, por ejemplo a Israel, al volver pagas otra vez 40 JOD, salvo que hayas salido y vuelto por el puente del Rey Hussein con el visado aún vigente. Los rusos tienen un límite de 30 días por viaje y 90 al año.',
      hacks: [
        'El Jordan Pass se amortiza con una sola visita a Petra: el visado de 40 JOD más la entrada de un día a Petra de 50 JOD ya suman 90, y el pase cuesta 70. Cómpralo antes de aterrizar: tras la entrada no te devuelven la tasa del visado.',
        'Si vienes de Israel, usa los pasos de Yitzhak Rabin (Eilat–Áqaba) o Sheikh Hussein: en los dos dan visado a la llegada y aceptan el Jordan Pass. En el puente del Rey Hussein no se expiden visados.',
        'Jordania cobra unos 10 JOD por salir por tierra, e Israel pide unos 110 ILS en los pasos de Rabin y Sheikh Hussein y unos 200 en Allenby. Lleva efectivo de las dos monedas.',
        'Áqaba es zona económica especial con compras más baratas, y desde allí un ferri te lleva a Nuweiba, en Egipto, donde puedes entrar con el sello gratuito «solo Sinaí».',
      ],
      pitfalls: [
        'El Jordan Pass con visado incluido exige pasar al menos tres noches en el país. Si te vas antes, te cobran 40 JOD al salir.',
        'El paso de Allenby cierra a menudo o reduce horario, sobre todo tras los acontecimientos de 2025–2026. Comprueba su estado el día anterior.',
        'El visado a la llegada se paga en dinares; en el aeropuerto hay casas de cambio y cajeros, pero con peor tipo de cambio.',
      ],
      passports: {
        RU: 'Desde el 13 de diciembre de 2025 los ciudadanos rusos entran sin visado 30 días por viaje y un máximo de 90 por año natural. El Jordan Pass sigue mereciendo la pena por Petra; para pagarlo necesitarás una tarjeta extranjera. Las tarjetas rusas no funcionan en Jordania.',
        IL: 'Los ciudadanos israelíes obtienen el visado en los pasos de Yitzhak Rabin y Sheikh Hussein; en Allenby se les aplican normas distintas. Consulta las recomendaciones de seguridad antes de ir.',
        IN: 'Los ciudadanos indios obtienen el visado a la llegada o lo cubren con el Jordan Pass, pero en la frontera les piden con más frecuencia la reserva de hotel y el billete de vuelta.',
        TR: 'Los ciudadanos turcos entran sin visado 90 días.',
      },
    },
    de: {
      summary:
        'Staatsangehörige der meisten Länder Europas und Amerikas sowie Indiens, Chinas, Japans, Koreas, Kasachstans, der Ukraine und Israels bekommen für 40 JOD ein 30-Tage-Visum bei Ankunft – oder zahlen gar nichts, wenn sie vorab den Jordan Pass gekauft haben. Russen reisen seit dem 13. Dezember 2025 für 30 Tage visumfrei ein, Türken und GCC-Bürger für 90.',
      apply:
        'Visa bei Ankunft gibt es an den Flughäfen Amman und Akaba sowie an den Übergängen Wadi Araba und Scheich Hussein, nicht aber an der König-Hussein-Brücke. Es lohnt sich, vorab den Jordan Pass auf jordanpass.jo zu kaufen: Für 70, 75 oder 80 JOD (ein, zwei oder drei Tage Petra) deckt er die Visumgebühr und den Eintritt in Petra, Jerash, Wadi Rum und rund 40 weitere Stätten ab. Ein E-Visum gibt es auch auf dem Portal des Innenministeriums, nötig ist es aber nur für die König-Hussein-Brücke.',
      extend:
        'Ein touristischer Aufenthalt lässt sich auf der Polizeiwache deines Aufenthaltsorts auf insgesamt 90 Tage verlängern, bevor die 30 Tage ablaufen. Nötig sind Pass und Adresse, manchmal ein Bluttest; die Gebühr hängt von der Dauer ab.',
      visaRun:
        'Das Standardvisum gilt für eine Einreise: Wer etwa nach Israel ausreist, zahlt bei der Rückkehr erneut 40 JOD – es sei denn, Aus- und Wiedereinreise liefen während der Visumgültigkeit über die König-Hussein-Brücke. Für Russen gelten 30 Tage pro Reise und höchstens 90 im Jahr.',
      hacks: [
        'Der Jordan Pass rechnet sich schon mit einem Petra-Besuch: 40 JOD Visum plus 50 JOD für einen Tag Petra ergeben bereits 90, der Pass kostet 70. Kauf ihn vor der Landung – nach der Einreise wird die Visumgebühr nicht erstattet.',
        'Aus Israel kommend nimmst du am besten die Übergänge Jitzchak Rabin (Eilat–Akaba) oder Scheich Hussein: Beide stellen Visa bei Ankunft aus und akzeptieren den Jordan Pass. An der König-Hussein-Brücke gibt es kein Visum.',
        'Jordanien verlangt für die Ausreise über Land etwa 10 JOD, Israel rund 110 ILS an den Übergängen Rabin und Scheich Hussein und etwa 200 ILS an der Allenby-Brücke. Hab Bargeld in beiden Währungen dabei.',
        'Akaba ist eine Sonderwirtschaftszone mit günstigerem Einkaufen, und von dort bringt dich eine Fähre nach Nuweiba in Ägypten, wo du mit dem kostenlosen „Sinai-only“-Stempel einreisen kannst.',
      ],
      pitfalls: [
        'Ein Jordan Pass mit Visumabdeckung setzt mindestens drei Übernachtungen im Land voraus. Reist du früher aus, werden bei der Ausreise 40 JOD fällig.',
        'Der Übergang Allenby ist oft geschlossen oder nur verkürzt geöffnet, besonders nach den Ereignissen von 2025–2026. Prüf den Status am Vortag.',
        'Das Visum bei Ankunft wird in Dinar bezahlt; am Flughafen gibt es Wechselstuben und Geldautomaten, aber zu schlechterem Kurs.',
      ],
      passports: {
        RU: 'Seit dem 13. Dezember 2025 reisen russische Staatsangehörige für 30 Tage pro Reise und höchstens 90 Tage pro Kalenderjahr visumfrei ein. Der Jordan Pass lohnt sich wegen Petra trotzdem; bezahlen musst du ihn mit einer ausländischen Karte. Russische Bankkarten funktionieren in Jordanien nicht.',
        IL: 'Israelische Staatsangehörige bekommen das Visum an den Übergängen Jitzchak Rabin und Scheich Hussein; an der Allenby-Brücke gelten für sie eigene Regeln. Prüf vor der Reise die Sicherheitshinweise.',
        IN: 'Indische Staatsangehörige bekommen ein Visum bei Ankunft oder decken es mit dem Jordan Pass ab, werden aber häufiger nach Hotelbuchung und Rückflugticket gefragt.',
        TR: 'Türkische Staatsangehörige reisen 90 Tage visumfrei ein.',
      },
    },
    fr: {
      summary:
        'Les ressortissants de la plupart des pays d’Europe et d’Amérique, ainsi que de l’Inde, de la Chine, du Japon, de la Corée, du Kazakhstan, de l’Ukraine et d’Israël, obtiennent un visa à l’arrivée de 30 jours pour 40 JOD — ou ne paient rien s’ils ont acheté le Jordan Pass à l’avance. Depuis le 13 décembre 2025, les Russes entrent sans visa pour 30 jours ; les Turcs et les citoyens du CCG, pour 90.',
      apply:
        'Le visa à l’arrivée est délivré aux aéroports d’Amman et d’Aqaba et aux postes de Wadi Araba et de Cheikh Hussein, mais pas au pont du Roi-Hussein. Mieux vaut acheter le Jordan Pass à l’avance sur jordanpass.jo : pour 70, 75 ou 80 JOD (un, deux ou trois jours à Pétra), il couvre les frais de visa et l’entrée à Pétra, Jerash, au Wadi Rum et à une quarantaine d’autres sites. Un e-visa existe aussi sur le portail du ministère de l’Intérieur, mais il n’est utile que pour le pont du Roi-Hussein.',
      extend:
        'Le séjour touristique peut être prolongé jusqu’à 90 jours au total au commissariat de votre lieu de séjour, avant la fin des 30 jours. Il faut le passeport et l’adresse, parfois une prise de sang ; les frais dépendent de la durée.',
      visaRun:
        'Le visa standard est à entrée unique : après une sortie, vers Israël par exemple, vous repayez 40 JOD au retour, sauf si vous êtes sorti puis revenu par le pont du Roi-Hussein pendant la validité du visa. Les Russes sont limités à 30 jours par séjour et 90 par an.',
      hacks: [
        'Le Jordan Pass est rentabilisé dès une visite à Pétra : 40 JOD de visa plus 50 JOD pour une journée à Pétra font déjà 90, alors que le pass coûte 70. Achetez-le avant d’atterrir : les frais de visa ne sont pas remboursés après l’entrée.',
        'En venant d’Israël, passez par Yitzhak Rabin (Eilat–Aqaba) ou Cheikh Hussein : les deux délivrent le visa à l’arrivée et acceptent le Jordan Pass. Le pont du Roi-Hussein ne délivre pas de visa.',
        'La Jordanie prélève environ 10 JOD pour une sortie par voie terrestre, et Israël environ 110 ILS aux postes Rabin et Cheikh Hussein, près de 200 ILS à Allenby. Gardez des espèces dans les deux monnaies.',
        'Aqaba est une zone économique spéciale aux achats moins chers, et de là un ferry rejoint Nuweiba, en Égypte, où l’on peut entrer avec le tampon gratuit « Sinaï uniquement ».',
      ],
      pitfalls: [
        'Le Jordan Pass couvrant le visa exige au moins trois nuits dans le pays. Partez plus tôt et vous paierez 40 JOD à la sortie.',
        'Le poste d’Allenby est souvent fermé ou à horaires réduits, surtout depuis les événements de 2025–2026. Vérifiez son statut la veille.',
        'Le visa à l’arrivée se paie en dinars ; l’aéroport a des bureaux de change et des distributeurs, mais à un taux moins bon.',
      ],
      passports: {
        RU: 'Depuis le 13 décembre 2025, les ressortissants russes entrent sans visa pour 30 jours par séjour et 90 jours maximum par année civile. Le Jordan Pass reste intéressant pour Pétra ; il se paie avec une carte étrangère. Les cartes bancaires russes ne fonctionnent pas en Jordanie.',
        IL: 'Les ressortissants israéliens obtiennent le visa aux postes Yitzhak Rabin et Cheikh Hussein ; à Allenby, des règles particulières s’appliquent. Consultez les conseils de sécurité avant de partir.',
        IN: 'Les ressortissants indiens obtiennent le visa à l’arrivée ou le couvrent avec le Jordan Pass, mais on leur demande plus souvent la réservation d’hôtel et le billet retour.',
        TR: 'Les ressortissants turcs entrent sans visa pour 90 jours.',
      },
    },
    it: {
      summary:
        'I cittadini della maggior parte dei paesi d’Europa e delle Americhe, oltre a India, Cina, Giappone, Corea, Kazakistan, Ucraina e Israele, ottengono un visto all’arrivo di 30 giorni per 40 JOD — oppure non pagano nulla se hanno comprato prima il Jordan Pass. Dal 13 dicembre 2025 i russi entrano senza visto per 30 giorni; turchi e cittadini del CCG per 90.',
      apply:
        'Il visto all’arrivo si rilascia negli aeroporti di Amman e Aqaba e ai valichi di Wadi Araba e Sheikh Hussein, ma non al ponte di Re Hussein. Conviene comprare prima il Jordan Pass su jordanpass.jo: per 70, 75 o 80 JOD (uno, due o tre giorni a Petra) copre la tassa del visto e l’ingresso a Petra, Jerash, Wadi Rum e una quarantina di altri siti. Esiste anche un visto elettronico sul portale del ministero dell’Interno, ma serve solo per il ponte di Re Hussein.',
      extend:
        'Il soggiorno turistico si può prorogare fino a 90 giorni in tutto alla stazione di polizia della zona in cui alloggi, prima che scadano i 30 giorni. Servono passaporto e indirizzo, a volte un esame del sangue; la tassa dipende dalla durata.',
      visaRun:
        'Il visto standard è a ingresso singolo: se esci, per esempio verso Israele, al rientro paghi di nuovo 40 JOD, a meno di essere uscito e rientrato dal ponte di Re Hussein mentre il visto era valido. Per i russi il limite è di 30 giorni per viaggio e 90 all’anno.',
      hacks: [
        'Il Jordan Pass si ripaga con una sola visita a Petra: 40 JOD di visto più 50 JOD per un giorno a Petra fanno già 90, mentre il pass costa 70. Compralo prima di atterrare: dopo l’ingresso la tassa del visto non viene rimborsata.',
        'Arrivando da Israele usa i valichi Yitzhak Rabin (Eilat–Aqaba) o Sheikh Hussein: entrambi rilasciano il visto all’arrivo e accettano il Jordan Pass. Al ponte di Re Hussein il visto non si rilascia.',
        'La Giordania chiede circa 10 JOD per uscire via terra, e Israele circa 110 ILS ai valichi Rabin e Sheikh Hussein e quasi 200 ad Allenby. Tieni contanti in entrambe le valute.',
        'Aqaba è una zona economica speciale con acquisti più convenienti, e da lì un traghetto porta a Nuweiba, in Egitto, dove si entra con il timbro gratuito «solo Sinai».',
      ],
      pitfalls: [
        'Il Jordan Pass che copre il visto richiede almeno tre notti nel paese. Se parti prima, all’uscita ti chiedono 40 JOD.',
        'Il valico di Allenby viene spesso chiuso o apre a orario ridotto, soprattutto dopo gli eventi del 2025–2026. Controlla lo stato il giorno prima.',
        'Il visto all’arrivo si paga in dinari; in aeroporto ci sono cambiavalute e bancomat, ma con un cambio peggiore.',
      ],
      passports: {
        RU: 'Dal 13 dicembre 2025 i cittadini russi entrano senza visto per 30 giorni per viaggio e al massimo 90 per anno solare. Il Jordan Pass conviene comunque per Petra; per pagarlo serve una carta estera. Le carte bancarie russe in Giordania non funzionano.',
        IL: 'I cittadini israeliani ottengono il visto ai valichi Yitzhak Rabin e Sheikh Hussein; ad Allenby valgono per loro regole diverse. Controlla le indicazioni di sicurezza prima di partire.',
        IN: 'I cittadini indiani ottengono il visto all’arrivo o lo coprono con il Jordan Pass, ma alla frontiera chiedono più spesso prenotazione dell’hotel e biglietto di ritorno.',
        TR: 'I cittadini turchi entrano senza visto per 90 giorni.',
      },
    },
  },
};

export default guide;
