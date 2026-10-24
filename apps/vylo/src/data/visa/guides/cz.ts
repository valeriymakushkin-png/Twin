import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'CZ',
  checked: '2026-10',
  fees: { visa: { kind: 'fixed', amount: 90, currency: 'EUR' } },
  stay: { visa: 90 },
  links: { immigration: 'https://mzv.gov.cz' },
  docs: ['insurance', 'returnTicket', 'booking', 'finance'],
  passportMonths: 3,
  rule: { days: 90, window: 180 },
  visaRun: 'no',
  hackScope: [null, null, ['US', 'GB', 'CA', 'AU', 'JP', 'KR', 'NZ', 'TW'], null],
  pitfallScope: [null, ['regime:free'], null],
  text: {
    ru: {
      summary:
        'Гражданам ЕС достаточно ID-карты. Граждане США, Великобритании, Канады, Австралии, Японии, Кореи, Бразилии, Мексики, ОАЭ, Израиля, Украины и Грузии въезжают без визы до 90 дней в любые 180 по всему Шенгену. Остальным, включая граждан Индии, Китая, Турции, Казахстана и Узбекистана, нужна шенгенская виза. Для россиян действуют особые ограничения — см. ниже.',
      apply:
        'Если Чехия — основная страна поездки, подавайтесь в чешское консульство или визовый центр: сбор 90 €, для детей 6–12 лет — 45 €. Подать можно за полгода, но не позже чем за 15 дней до поездки; решение обычно занимает около 15 дней. Нужны медицинская страховка с покрытием от 30 000 €, брони, обратный билет и выписка со счёта. Подойдёт и шенгенская виза любой другой страны.',
      visaRun:
        'Визаран не работает: правило 90/180 считает дни во всём Шенгене, а выезд в Лондон, Белград или Стамбул лишь ставит счётчик на паузу. Дни вне зоны постепенно выпадают из скользящего окна в 180 дней, но «обнулить» срок выездом нельзя.',
      hacks: [
        'Чешский закон требует медицинскую страховку на всё пребывание даже от безвизовых иностранцев — пограничник или полиция может спросить полис. Возьмите недорогую страховку с покрытием от 30 000 €.',
        'Прага связана с Веной, Берлином, Мюнхеном и Краковом прямыми поездами RegioJet и ČD без паспортного контроля на чешской стороне — дешёвый способ добраться, если прилетать в другой хаб Шенгена.',
        'Специалистам-фрилансерам из США, Великобритании, Канады, Австралии, Японии, Кореи, Новой Зеландии и Тайваня Чехия предлагает программу Digital Nomad — ускоренную долгосрочную визу для работы на иностранных клиентов. Условия меняются, проверяйте на сайте МВД.',
        'Дни в Великобритании, Ирландии, на Кипре и на Балканах не входят в шенгенские 90/180 — длинную поездку можно разбить без нарушения правил.',
      ],
      pitfalls: [
        'Если вы живёте не в гостинице, а у друзей или в квартире без регистрации гостей, о проживании нужно сообщить в иностранную полицию в течение трёх рабочих дней. Отели и большинство апартаментов делают это сами.',
        'ETIAS — онлайн-разрешение за 20 € для безвизовых — ещё не запущено (не раньше конца 2026, вероятнее в 2027). Сайты, которые «оформляют» его сейчас, — мошенники.',
        'Паспорт должен быть выдан не более 10 лет назад и действовать ещё 3 месяца после выезда из Шенгена.',
      ],
      passports: {
        RU: 'Чехия не выдаёт россиянам туристические визы — с 30 сентября 2025 года, после закрытия визовых центров, заявления принимает только посольство в Москве и лишь для исключений (родственники граждан ЕС и т. п.). С 25 октября 2022 года на внешней границе Чехии, то есть в аэропорту Праги при прилёте не из Шенгена, россиян с туристической шенгенской визой любой страны разворачивают. Въезд по суше из других стран Шенгена не проверяется, но с ноября 2025 года ЕС выдаёт россиянам в основном однократные визы.',
        UA: 'Гражданам Украины с биометрическим паспортом виза не нужна (90/180); временная защита в ЕС продлена до 4 марта 2027 года.',
        IN: 'Гражданам Индии нужна шенгенская виза; после двух поездок без нарушений за три года положена многократная виза на два, затем на пять лет.',
      },
    },
    en: {
      summary:
        'EU citizens just need an ID card. Citizens of the US, UK, Canada, Australia, Japan, Korea, Brazil, Mexico, the UAE, Israel, Ukraine and Georgia enter visa-free for up to 90 days in any 180 across the Schengen area. Everyone else, including citizens of India, China, Turkey, Kazakhstan and Uzbekistan, needs a Schengen visa. Special restrictions apply to Russian citizens — see below.',
      apply:
        'If Czechia is your main destination, apply at a Czech consulate or visa centre: the fee is €90, or €45 for children aged 6–12. Apply up to six months ahead and at least 15 days before the trip; decisions usually take about 15 days. You need medical insurance with at least €30,000 cover, bookings, a return ticket and bank statements. A Schengen visa from any other member state works as well.',
      visaRun:
        'Visa runs do not work: the 90/180 rule counts days across the whole Schengen area, and a trip to London, Belgrade or Istanbul only pauses the clock. Days outside the zone gradually drop out of the rolling 180-day window, but leaving never resets your allowance.',
      hacks: [
        'Czech law requires medical insurance for the whole stay even from visa-free foreigners, and border or police officers may ask for it. Get an inexpensive policy with at least €30,000 cover.',
        'Prague has direct RegioJet and ČD trains to Vienna, Berlin, Munich and Kraków with no passport control on the Czech side — a cheap way in if you fly into another Schengen hub.',
        'Czechia runs a Digital Nomad programme for skilled freelancers from the US, UK, Canada, Australia, Japan, Korea, New Zealand and Taiwan: a fast-tracked long-stay visa for working for foreign clients. Terms change, so check the Interior Ministry website.',
        'Days in the UK, Ireland, Cyprus and the Balkans do not count towards the Schengen 90/180, so you can split a long trip without breaking the rules.',
      ],
      pitfalls: [
        'If you stay with friends or in a flat that does not register guests, you must report your address to the foreign police within three working days. Hotels and most rentals do this for you.',
        'ETIAS, the €20 online authorisation for visa-free travellers, has not launched (late 2026 at the earliest, more likely 2027). Sites that “process” it now are scams.',
        'Your passport must have been issued within the last 10 years and be valid for 3 months after you leave the Schengen area.',
      ],
      passports: {
        RU: 'Czechia does not issue tourist visas to Russians: since visa centres closed on 30 September 2025, only the embassy in Moscow takes applications, and only for exceptions such as relatives of EU citizens. Since 25 October 2022, Russians holding a tourist Schengen visa from any country are turned back at the Czech external border, i.e. at Prague airport when arriving from outside Schengen. Overland arrivals from other Schengen states are not checked, but since November 2025 the EU has mostly been issuing single-entry visas to Russians.',
        UA: 'Ukrainian citizens with a biometric passport need no visa (90/180); EU temporary protection has been extended to 4 March 2027.',
        IN: 'Indian citizens need a Schengen visa; after two trouble-free trips within three years you qualify for a two-year, then a five-year multiple-entry visa.',
      },
    },
    es: {
      summary:
        'A los ciudadanos de la UE les basta el DNI. Los de EE. UU., Reino Unido, Canadá, Australia, Japón, Corea, Brasil, México, Emiratos, Israel, Ucrania y Georgia entran sin visado hasta 90 días en cualquier periodo de 180 en todo Schengen. El resto, incluidos los ciudadanos de India, China, Turquía, Kazajistán y Uzbekistán, necesita visado Schengen. Para los ciudadanos rusos hay restricciones especiales: mira abajo.',
      apply:
        'Si Chequia es tu destino principal, solicita el visado en un consulado o centro de visados checo: cuesta 90 € (45 € para niños de 6 a 12 años). Puedes presentarlo hasta seis meses antes y al menos 15 días antes del viaje; la resolución suele tardar unos 15 días. Necesitas un seguro médico con cobertura mínima de 30 000 €, reservas, billete de vuelta y extractos bancarios. También vale un visado Schengen de cualquier otro país miembro.',
      visaRun:
        'Los visa runs no funcionan: la regla 90/180 cuenta los días en todo Schengen, y un viaje a Londres, Belgrado o Estambul solo detiene el contador. Los días fuera de la zona van saliendo de la ventana móvil de 180 días, pero salir nunca reinicia tu cupo.',
      hacks: [
        'La ley checa exige seguro médico para toda la estancia incluso a los extranjeros exentos de visado, y la policía o los agentes de frontera pueden pedirlo. Contrata una póliza barata con al menos 30 000 € de cobertura.',
        'Praga tiene trenes directos de RegioJet y ČD a Viena, Berlín, Múnich y Cracovia sin control de pasaportes en el lado checo: una forma barata de llegar si vuelas a otro aeropuerto Schengen.',
        'Chequia tiene un programa Digital Nomad para freelancers cualificados de EE. UU., Reino Unido, Canadá, Australia, Japón, Corea, Nueva Zelanda y Taiwán: un visado de larga estancia por vía rápida para trabajar con clientes extranjeros. Las condiciones cambian; consulta la web del Ministerio del Interior.',
        'Los días en Reino Unido, Irlanda, Chipre y los Balcanes no cuentan para los 90/180 de Schengen, así que puedes dividir un viaje largo sin incumplir nada.',
      ],
      pitfalls: [
        'Si te alojas con amigos o en un piso que no registra a sus huéspedes, debes comunicar tu dirección a la policía de extranjería en tres días hábiles. Los hoteles y la mayoría de alquileres lo hacen por ti.',
        'ETIAS, la autorización en línea de 20 € para viajeros sin visado, aún no ha arrancado (como pronto a finales de 2026, probablemente en 2027). Las webs que lo «tramitan» ahora son estafas.',
        'El pasaporte debe haberse expedido hace menos de 10 años y ser válido 3 meses después de salir de Schengen.',
      ],
      passports: {
        RU: 'Chequia no expide visados turísticos a ciudadanos rusos: desde el cierre de los centros de visados el 30 de septiembre de 2025, solo la embajada en Moscú acepta solicitudes y únicamente en casos excepcionales, como familiares de ciudadanos de la UE. Desde el 25 de octubre de 2022, a los rusos con visado Schengen turístico de cualquier país se les deniega la entrada en la frontera exterior checa, es decir, en el aeropuerto de Praga si llegan desde fuera de Schengen. Las llegadas por tierra desde otros países Schengen no se controlan, pero desde noviembre de 2025 la UE concede a los rusos sobre todo visados de una sola entrada.',
        UA: 'Los ciudadanos ucranianos con pasaporte biométrico no necesitan visado (90/180); la protección temporal de la UE se ha prorrogado hasta el 4 de marzo de 2027.',
        IN: 'Los ciudadanos indios necesitan visado Schengen; tras dos viajes sin incidencias en tres años, optan a uno de entradas múltiples de dos años y luego de cinco.',
      },
    },
    de: {
      summary:
        'EU-Bürgern genügt der Personalausweis. Staatsangehörige der USA, Großbritanniens, Kanadas, Australiens, Japans, Koreas, Brasiliens, Mexikos, der VAE, Israels, der Ukraine und Georgiens reisen visumfrei bis zu 90 Tage innerhalb von 180 Tagen im ganzen Schengen-Raum. Alle anderen, auch Bürger Indiens, Chinas, der Türkei, Kasachstans und Usbekistans, brauchen ein Schengen-Visum. Für russische Staatsangehörige gelten besondere Einschränkungen – siehe unten.',
      apply:
        'Ist Tschechien dein Hauptreiseziel, beantragst du das Visum bei einem tschechischen Konsulat oder Visazentrum: 90 €, für Kinder von 6 bis 12 Jahren 45 €. Der Antrag geht frühestens sechs Monate und spätestens 15 Tage vor der Reise; die Entscheidung dauert meist etwa 15 Tage. Nötig sind eine Krankenversicherung mit mindestens 30.000 € Deckung, Buchungen, ein Rückflugticket und Kontoauszüge. Ein Schengen-Visum jedes anderen Mitgliedstaats gilt ebenfalls.',
      visaRun:
        'Visa-Runs funktionieren nicht: Die 90/180-Regel zählt die Tage im gesamten Schengen-Raum, und eine Reise nach London, Belgrad oder Istanbul hält die Uhr nur an. Tage außerhalb fallen nach und nach aus dem rollierenden 180-Tage-Fenster, aber eine Ausreise setzt dein Kontingent nie zurück.',
      hacks: [
        'Das tschechische Recht verlangt auch von visumfreien Ausländern eine Krankenversicherung für den ganzen Aufenthalt, und Grenzbeamte oder Polizei können danach fragen. Schließ eine günstige Police mit mindestens 30.000 € Deckung ab.',
        'Prag hat direkte Züge von RegioJet und ČD nach Wien, Berlin, München und Krakau ohne Passkontrolle auf tschechischer Seite – ein günstiger Weg, wenn du an einem anderen Schengen-Flughafen landest.',
        'Tschechien hat ein Digital-Nomad-Programm für qualifizierte Freelancer aus den USA, Großbritannien, Kanada, Australien, Japan, Korea, Neuseeland und Taiwan: ein beschleunigtes Langzeitvisum für die Arbeit für ausländische Kunden. Die Bedingungen ändern sich, prüfe die Website des Innenministeriums.',
        'Tage in Großbritannien, Irland, Zypern und auf dem Balkan zählen nicht zu den Schengen-90/180 – so lässt sich eine lange Reise regelkonform aufteilen.',
      ],
      pitfalls: [
        'Wohnst du bei Freunden oder in einer Wohnung, die Gäste nicht anmeldet, musst du deine Adresse binnen drei Werktagen bei der Fremdenpolizei melden. Hotels und die meisten Vermietungen erledigen das für dich.',
        'ETIAS, die Online-Genehmigung für 20 € für visumfreie Reisende, ist noch nicht gestartet (frühestens Ende 2026, eher 2027). Seiten, die es jetzt „beantragen“, sind Betrug.',
        'Der Pass muss in den letzten 10 Jahren ausgestellt sein und noch 3 Monate nach der Ausreise aus dem Schengen-Raum gelten.',
      ],
      passports: {
        RU: 'Tschechien stellt Russen keine Touristenvisa aus: Seit die Visazentren am 30. September 2025 geschlossen wurden, nimmt nur noch die Botschaft in Moskau Anträge an, und zwar nur in Ausnahmefällen wie bei Angehörigen von EU-Bürgern. Seit 25. Oktober 2022 werden Russen mit einem touristischen Schengen-Visum eines beliebigen Landes an der tschechischen Außengrenze zurückgewiesen, also am Prager Flughafen bei Ankunft von außerhalb des Schengen-Raums. Landwege aus anderen Schengen-Staaten werden nicht kontrolliert, doch seit November 2025 erhalten Russen in der EU meist nur noch Visa für die einmalige Einreise.',
        UA: 'Ukrainer mit biometrischem Pass brauchen kein Visum (90/180); der vorübergehende Schutz in der EU gilt bis 4. März 2027.',
        IN: 'Inder brauchen ein Schengen-Visum; nach zwei problemlosen Reisen innerhalb von drei Jahren gibt es ein Mehrfachvisum für zwei, dann für fünf Jahre.',
      },
    },
    fr: {
      summary:
        'Les citoyens de l’UE n’ont besoin que de leur carte d’identité. Les ressortissants des États-Unis, du Royaume-Uni, du Canada, d’Australie, du Japon, de Corée, du Brésil, du Mexique, des Émirats, d’Israël, d’Ukraine et de Géorgie entrent sans visa jusqu’à 90 jours sur 180 dans tout l’espace Schengen. Les autres, dont les citoyens indiens, chinois, turcs, kazakhs et ouzbeks, ont besoin d’un visa Schengen. Des restrictions particulières visent les ressortissants russes (voir ci-dessous).',
      apply:
        'Si la Tchéquie est votre destination principale, déposez la demande auprès d’un consulat ou centre de visas tchèque : 90 €, ou 45 € pour les enfants de 6 à 12 ans. La demande se fait jusqu’à six mois avant et au plus tard 15 jours avant le départ ; la décision prend en général une quinzaine de jours. Il faut une assurance maladie couvrant au moins 30 000 €, des réservations, un billet retour et des relevés bancaires. Un visa Schengen de tout autre État membre convient aussi.',
      visaRun:
        'Le visa run ne fonctionne pas : la règle des 90/180 compte les jours dans tout l’espace Schengen, et un voyage à Londres, Belgrade ou Istanbul ne fait que suspendre le compteur. Les jours hors de la zone sortent peu à peu de la fenêtre glissante de 180 jours, mais une sortie ne remet jamais votre crédit à zéro.',
      hacks: [
        'La loi tchèque exige une assurance maladie pour tout le séjour, même des étrangers exemptés de visa, et la police ou les gardes-frontières peuvent la demander. Prenez une police peu coûteuse couvrant au moins 30 000 €.',
        'Prague a des trains directs RegioJet et ČD vers Vienne, Berlin, Munich et Cracovie, sans contrôle des passeports côté tchèque : un moyen économique d’arriver si vous atterrissez dans un autre aéroport Schengen.',
        'La Tchéquie propose un programme Digital Nomad aux freelances qualifiés des États-Unis, du Royaume-Uni, du Canada, d’Australie, du Japon, de Corée, de Nouvelle-Zélande et de Taïwan : un visa long séjour accéléré pour travailler pour des clients étrangers. Les conditions évoluent, vérifiez sur le site du ministère de l’Intérieur.',
        'Les jours passés au Royaume-Uni, en Irlande, à Chypre et dans les Balkans ne comptent pas dans les 90/180 de Schengen : un long voyage peut être découpé en toute légalité.',
      ],
      pitfalls: [
        'Si vous logez chez des amis ou dans un appartement qui ne déclare pas ses hôtes, vous devez signaler votre adresse à la police des étrangers sous trois jours ouvrés. Les hôtels et la plupart des locations le font pour vous.',
        'ETIAS, l’autorisation en ligne à 20 € pour les voyageurs exemptés de visa, n’a pas démarré (au plus tôt fin 2026, plus probablement en 2027). Les sites qui le « délivrent » aujourd’hui sont des arnaques.',
        'Le passeport doit avoir moins de 10 ans et rester valable 3 mois après la sortie de l’espace Schengen.',
      ],
      passports: {
        RU: 'La Tchéquie ne délivre pas de visas touristiques aux Russes : depuis la fermeture des centres de visas le 30 septembre 2025, seule l’ambassade à Moscou reçoit les demandes, et uniquement pour des exceptions comme les proches de citoyens de l’UE. Depuis le 25 octobre 2022, les Russes munis d’un visa Schengen touristique de n’importe quel pays sont refoulés à la frontière extérieure tchèque, c’est-à-dire à l’aéroport de Prague en provenance de l’extérieur de Schengen. Les arrivées par la route depuis d’autres pays Schengen ne sont pas contrôlées, mais depuis novembre 2025 l’UE délivre surtout des visas à entrée unique aux Russes.',
        UA: 'Les citoyens ukrainiens munis d’un passeport biométrique n’ont pas besoin de visa (90/180) ; la protection temporaire de l’UE court jusqu’au 4 mars 2027.',
        IN: 'Les citoyens indiens ont besoin d’un visa Schengen ; après deux voyages sans incident en trois ans, ils peuvent obtenir un visa à entrées multiples de deux ans, puis de cinq ans.',
      },
    },
    it: {
      summary:
        'Ai cittadini UE basta la carta d’identità. I cittadini di Stati Uniti, Regno Unito, Canada, Australia, Giappone, Corea, Brasile, Messico, Emirati, Israele, Ucraina e Georgia entrano senza visto fino a 90 giorni ogni 180 in tutta l’area Schengen. Tutti gli altri, compresi i cittadini di India, Cina, Turchia, Kazakistan e Uzbekistan, hanno bisogno del visto Schengen. Per i cittadini russi valgono restrizioni particolari: vedi sotto.',
      apply:
        'Se la Cechia è la meta principale, fai domanda a un consolato o centro visti ceco: 90 €, 45 € per i bambini dai 6 ai 12 anni. Puoi presentarla fino a sei mesi prima e almeno 15 giorni prima della partenza; la decisione arriva di solito in circa 15 giorni. Servono un’assicurazione sanitaria con copertura di almeno 30.000 €, prenotazioni, biglietto di ritorno ed estratti conto. Va bene anche un visto Schengen di qualsiasi altro Stato membro.',
      visaRun:
        'Il visa run non funziona: la regola 90/180 conta i giorni in tutta l’area Schengen, e un viaggio a Londra, Belgrado o Istanbul mette solo in pausa il contatore. I giorni fuori dall’area escono poco a poco dalla finestra mobile di 180 giorni, ma uscire non azzera mai il tuo credito.',
      hacks: [
        'La legge ceca impone un’assicurazione sanitaria per tutto il soggiorno anche agli stranieri esenti da visto, e polizia o agenti di frontiera possono chiederla. Fai una polizza economica con almeno 30.000 € di copertura.',
        'Praga ha treni diretti RegioJet e ČD per Vienna, Berlino, Monaco e Cracovia senza controllo passaporti sul lato ceco: un modo economico per arrivare se atterri in un altro aeroporto Schengen.',
        'La Cechia ha un programma Digital Nomad per freelance qualificati di Stati Uniti, Regno Unito, Canada, Australia, Giappone, Corea, Nuova Zelanda e Taiwan: un visto di lungo soggiorno con procedura rapida per lavorare con clienti esteri. Le condizioni cambiano, verifica sul sito del Ministero dell’Interno.',
        'I giorni nel Regno Unito, in Irlanda, a Cipro e nei Balcani non contano per i 90/180 di Schengen: puoi dividere un viaggio lungo senza violare le regole.',
      ],
      pitfalls: [
        'Se alloggi da amici o in un appartamento che non registra gli ospiti, devi comunicare il tuo indirizzo alla polizia degli stranieri entro tre giorni lavorativi. Hotel e la maggior parte degli affitti lo fanno per te.',
        'ETIAS, l’autorizzazione online da 20 € per chi viaggia senza visto, non è ancora partita (non prima di fine 2026, più probabilmente nel 2027). I siti che lo «rilasciano» ora sono truffe.',
        'Il passaporto deve essere stato rilasciato da meno di 10 anni e valere ancora 3 mesi dopo l’uscita da Schengen.',
      ],
      passports: {
        RU: 'La Cechia non rilascia visti turistici ai russi: da quando i centri visti hanno chiuso il 30 settembre 2025, le domande le accetta solo l’ambasciata a Mosca e solo per eccezioni come i familiari di cittadini UE. Dal 25 ottobre 2022 i russi con visto Schengen turistico di qualsiasi paese vengono respinti alla frontiera esterna ceca, cioè all’aeroporto di Praga se arrivano da fuori Schengen. Gli arrivi via terra da altri paesi Schengen non vengono controllati, ma da novembre 2025 l’UE rilascia ai russi soprattutto visti a ingresso singolo.',
        UA: 'I cittadini ucraini con passaporto biometrico non hanno bisogno del visto (90/180); la protezione temporanea UE vale fino al 4 marzo 2027.',
        IN: 'I cittadini indiani hanno bisogno del visto Schengen; dopo due viaggi senza problemi in tre anni possono ottenere un visto per ingressi multipli di due anni, poi di cinque.',
      },
    },
  },
};

export default guide;
