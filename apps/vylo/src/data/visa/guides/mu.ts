import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'MU',
  checked: '2026-10',
  fees: { voa: { kind: 'free' } },
  links: { immigration: 'https://passport.govmu.org' },
  forms: [{ name: 'Mauritius All in One Travel Form' }],
  docs: ['returnTicket', 'booking', 'finance'],
  passportMonths: 6,
  extend: {},
  visaRun: 'no',
  nomad: { name: 'Premium Visa', months: 12, income: { kind: 'from', amount: 1500, currency: 'USD' } },
  text: {
    ru: {
      summary:
        'Маврикий впускает почти всех туристов без визы или с бесплатной визой по прилёте — обычно до 90 дней, для некоторых паспортов до 60. На границе проверяют обратный билет, жильё и достаточность средств, а перед прилётом все заполняют онлайн-анкету Mauritius All in One Travel Form.',
      apply:
        'Заранее оформлять ничего не нужно: за несколько дней до вылета заполните All in One Travel Form (она заменила бумажные миграционную и медицинскую карточки) и сохраните QR-код. На контроле покажите обратный билет и бронь отеля; срок пребывания ставят штампом, и он может быть короче максимального, если бронь короткая.',
      extend:
        'Продление оформляют в Паспортно-иммиграционном управлении в Порт-Луи — в сумме до 180 дней за календарный год, с подтверждением средств, жилья и обратного билета. Подавайте заранее, а не в последний день штампа.',
      visaRun:
        'Визараны не помогают: лимит 180 дней в календарный год учитывает все въезды. Родригес — часть Маврикия, поездка туда выездом из страны не считается.',
      nomad:
        'Premium Visa позволяет удалённым работникам и пенсионерам жить на Маврикии до года с возможностью продления. Нужен доход из-за рубежа от 1500 $ в месяц (плюс 500 $ на каждого иждивенца), медицинская страховка и отсутствие местной работы; виза бесплатная, решение онлайн за несколько дней.',
      hacks: [
        'Планируете больше 90 дней — подавайте на бесплатную Premium Visa вместо цепочки продлений: её рассматривают онлайн за несколько дней и дают до года.',
        'Родригес и Агалега — часть Маврикия: рейсы на Родригес внутренние, дополнительных формальностей нет.',
        'Живёте часть времени в отеле, часть — в апартаментах? Держите под рукой весь маршрут с адресами: срок пребывания дают по подтверждённому жилью.',
        'Совмещаете с Реюньоном? Это Франция, но вне Шенгена, со своими правилами — проверьте, нужна ли вашему паспорту отдельная виза.',
      ],
      pitfalls: [
        'Не заполнили All in One Travel Form — авиакомпании могут спросить её при регистрации, а бумажных бланков в аэропорту бывает недостаточно.',
        'Прилёт с билетом в одну сторону: на стойке попросят купить обратный.',
        'Паспорт должен действовать минимум шесть месяцев после въезда.',
      ],
      passports: {
        RU: 'Россияне въезжают без визы; проверьте срок в штампе — в ряде источников для России указывают 60 дней, а не 90. Российские карты не работают, берите наличные евро или доллары.',
      },
    },
    en: {
      summary:
        'Mauritius admits nearly all tourists visa-free or with a free visa on arrival, usually for up to 90 days (60 for some passports). Officers check a return ticket, accommodation and sufficient funds, and every arrival fills in the online Mauritius All in One Travel Form beforehand.',
      apply:
        'There’s nothing to apply for in advance: a few days before the flight, fill in the All in One Travel Form (it replaced the paper arrival and health cards) and keep the QR code. At the desk show your return ticket and hotel booking; the stay is stamped and can be shorter than the maximum if your booking is short.',
      extend:
        'Extensions are handled by the Passport and Immigration Office in Port Louis — up to 180 days in total per calendar year, with proof of funds, accommodation and a return ticket. Apply early, not on the last day of your stamp.',
      visaRun:
        'Visa runs don’t help: the 180-days-per-calendar-year limit counts every entry. Rodrigues is part of Mauritius, so a trip there doesn’t count as leaving the country.',
      nomad:
        'The Premium Visa lets remote workers and retirees live in Mauritius for up to a year, renewable. You need foreign income of at least $1,500 a month (plus $500 per dependant), health insurance and no local employment; it’s free and decided online within a few days.',
      hacks: [
        'Planning more than 90 days? Apply for the free Premium Visa instead of chaining extensions — it’s processed online in a few days and gives you up to a year.',
        'Rodrigues and Agaléga are part of Mauritius: flights to Rodrigues are domestic, with no extra formalities.',
        'Splitting your stay between a hotel and an apartment? Keep the full itinerary with addresses handy — the stay is granted to match confirmed accommodation.',
        'Combining with Réunion? It’s France but outside Schengen, with its own rules — check whether your passport needs a separate visa.',
      ],
      pitfalls: [
        'Skipping the All in One Travel Form — airlines may ask for it at check-in, and paper forms at the airport can run out.',
        'Arriving on a one-way ticket: you’ll be asked to buy a return at the desk.',
        'Your passport must be valid for at least six months after arrival.',
      ],
      passports: {
        RU: 'Russian citizens enter visa-free; check the stay in your stamp — some sources give 60 days rather than 90 for Russia. Russian cards don’t work, so bring euros or dollars in cash.',
      },
    },
    es: {
      summary:
        'Mauricio admite a casi todos los turistas sin visado o con un visado gratuito a la llegada, normalmente hasta 90 días (60 para algunos pasaportes). En la frontera revisan el billete de vuelta, el alojamiento y que tengas fondos suficientes, y antes de llegar todo el mundo rellena en línea el Mauritius All in One Travel Form.',
      apply:
        'No hay que tramitar nada por adelantado: unos días antes del vuelo rellena el All in One Travel Form (sustituye a las tarjetas de llegada y sanitaria en papel) y guarda el código QR. En el control enseña el billete de vuelta y la reserva del hotel; la estancia se sella y puede ser más corta que el máximo si tu reserva es breve.',
      extend:
        'Las prórrogas las gestiona la Oficina de Pasaportes e Inmigración de Port Louis: hasta 180 días en total por año natural, con prueba de fondos, alojamiento y billete de vuelta. Pídela con tiempo, no el último día del sello.',
      visaRun:
        'Los visa runs no sirven: el límite de 180 días por año natural cuenta todas las entradas. Rodrigues forma parte de Mauricio, así que ir allí no cuenta como salir del país.',
      nomad:
        'El Premium Visa permite a teletrabajadores y jubilados vivir en Mauricio hasta un año, renovable. Necesitas ingresos del extranjero de al menos 1500 $ al mes (más 500 $ por cada dependiente), seguro médico y no trabajar para empresas locales; es gratuito y se resuelve en línea en pocos días.',
      hacks: [
        '¿Más de 90 días? Pide el Premium Visa gratuito en vez de encadenar prórrogas: se tramita en línea en pocos días y da hasta un año.',
        'Rodrigues y Agaléga forman parte de Mauricio: los vuelos a Rodrigues son nacionales y no hay trámites extra.',
        '¿Repartes la estancia entre hotel y apartamento? Ten a mano todo el itinerario con direcciones: te dan la estancia según el alojamiento confirmado.',
        '¿Lo combinas con Reunión? Es Francia, pero fuera de Schengen y con sus propias normas: comprueba si tu pasaporte necesita un visado aparte.',
      ],
      pitfalls: [
        'No rellenar el All in One Travel Form: las aerolíneas pueden pedirlo al facturar y los formularios en papel del aeropuerto a veces se agotan.',
        'Llegar con billete solo de ida: te pedirán que compres la vuelta en el mostrador.',
        'El pasaporte debe ser válido al menos seis meses desde la llegada.',
      ],
      passports: {
        RU: 'Los ciudadanos rusos entran sin visado; revisa la estancia en el sello, porque algunas fuentes indican 60 días en lugar de 90 para Rusia. Las tarjetas rusas no funcionan: lleva euros o dólares en efectivo.',
      },
    },
    de: {
      summary:
        'Mauritius lässt fast alle Touristen visumfrei oder mit kostenlosem Visum bei Ankunft einreisen, meist bis zu 90 Tage (für manche Pässe 60). Kontrolliert werden Rückflugticket, Unterkunft und ausreichende Mittel, und vor der Ankunft füllen alle online das Mauritius All in One Travel Form aus.',
      apply:
        'Vorab beantragen musst du nichts: Fülle ein paar Tage vor dem Flug das All in One Travel Form aus (es ersetzt die papiernen Einreise- und Gesundheitskarten) und speichere den QR-Code. An der Kontrolle zeigst du Rückflugticket und Hotelbuchung; der Aufenthalt wird gestempelt und kann kürzer als das Maximum ausfallen, wenn deine Buchung kurz ist.',
      extend:
        'Verlängerungen bearbeitet das Passport and Immigration Office in Port Louis – bis zu 180 Tage pro Kalenderjahr insgesamt, mit Nachweis von Mitteln, Unterkunft und Rückflugticket. Beantrage früh, nicht am letzten Stempeltag.',
      visaRun:
        'Visa-Runs helfen nicht: Die Grenze von 180 Tagen pro Kalenderjahr zählt jede Einreise. Rodrigues gehört zu Mauritius, eine Reise dorthin gilt also nicht als Ausreise.',
      nomad:
        'Mit dem Premium Visa können Remote-Arbeitende und Rentner bis zu ein Jahr auf Mauritius leben, verlängerbar. Nötig sind Auslandseinkünfte von mindestens 1.500 $ im Monat (plus 500 $ je Angehörigem), eine Krankenversicherung und keine Arbeit für lokale Firmen; es ist kostenlos und wird online in wenigen Tagen entschieden.',
      hacks: [
        'Mehr als 90 Tage geplant? Beantrage das kostenlose Premium Visa statt Verlängerungen aneinanderzureihen – online in wenigen Tagen bearbeitet und bis zu ein Jahr gültig.',
        'Rodrigues und Agaléga gehören zu Mauritius: Flüge nach Rodrigues sind Inlandsflüge ohne zusätzliche Formalitäten.',
        'Teilst du den Aufenthalt zwischen Hotel und Apartment auf? Halte die ganze Route mit Adressen bereit – der Aufenthalt richtet sich nach der bestätigten Unterkunft.',
        'Kombination mit La Réunion? Das ist Frankreich, aber außerhalb von Schengen und mit eigenen Regeln – prüfe, ob dein Pass ein separates Visum braucht.',
      ],
      pitfalls: [
        'Das All in One Travel Form ausgelassen – Airlines fragen beim Check-in womöglich danach, und Papierformulare am Flughafen gehen manchmal aus.',
        'Ankunft mit One-Way-Ticket: Man wird dich bitten, am Schalter einen Rückflug zu kaufen.',
        'Der Pass muss ab Ankunft noch mindestens sechs Monate gültig sein.',
      ],
      passports: {
        RU: 'Russische Staatsangehörige reisen visumfrei ein; prüfe die Aufenthaltsdauer im Stempel – manche Quellen nennen für Russland 60 statt 90 Tage. Russische Karten funktionieren nicht, nimm Euro oder Dollar in bar mit.',
      },
    },
    fr: {
      summary:
        'Maurice accueille presque tous les touristes sans visa ou avec un visa gratuit à l’arrivée, en général pour 90 jours maximum (60 pour certains passeports). Les agents vérifient le billet retour, l’hébergement et des moyens suffisants, et chaque voyageur remplit en ligne au préalable le Mauritius All in One Travel Form.',
      apply:
        'Rien à demander à l’avance : quelques jours avant le vol, remplissez le All in One Travel Form (il remplace les cartes papier de débarquement et sanitaire) et gardez le QR code. Au guichet, montrez le billet retour et la réservation d’hôtel ; la durée de séjour est tamponnée et peut être plus courte que le maximum si votre réservation l’est.',
      extend:
        'Les prolongations relèvent du Passport and Immigration Office de Port-Louis : jusqu’à 180 jours au total par année civile, avec justificatifs de ressources, d’hébergement et billet retour. Faites la demande tôt, pas le dernier jour de votre tampon.',
      visaRun:
        'Les visa runs ne servent à rien : la limite de 180 jours par année civile compte toutes les entrées. Rodrigues fait partie de Maurice, y aller ne revient donc pas à quitter le pays.',
      nomad:
        'Le Premium Visa permet aux travailleurs à distance et aux retraités de vivre à Maurice jusqu’à un an, renouvelable. Il faut des revenus de l’étranger d’au moins 1 500 $ par mois (plus 500 $ par personne à charge), une assurance santé et aucun emploi local ; il est gratuit et décidé en ligne en quelques jours.',
      hacks: [
        'Plus de 90 jours prévus ? Demandez le Premium Visa gratuit plutôt que d’enchaîner les prolongations : il est traité en ligne en quelques jours et couvre jusqu’à un an.',
        'Rodrigues et Agaléga font partie de Maurice : les vols vers Rodrigues sont intérieurs, sans formalité supplémentaire.',
        'Vous partagez le séjour entre hôtel et appartement ? Gardez tout l’itinéraire avec les adresses sous la main : la durée accordée suit l’hébergement confirmé.',
        'Vous combinez avec La Réunion ? C’est la France, mais hors Schengen et avec ses propres règles : vérifiez si votre passeport exige un visa distinct.',
      ],
      pitfalls: [
        'Oublier le All in One Travel Form : les compagnies peuvent le demander à l’enregistrement, et les formulaires papier de l’aéroport viennent parfois à manquer.',
        'Arriver avec un aller simple : on vous demandera d’acheter un retour au guichet.',
        'Le passeport doit être valable au moins six mois après l’arrivée.',
      ],
      passports: {
        RU: 'Les ressortissants russes entrent sans visa ; vérifiez la durée sur le tampon, certaines sources indiquant 60 jours au lieu de 90 pour la Russie. Les cartes russes ne fonctionnent pas : emportez des euros ou des dollars en espèces.',
      },
    },
    it: {
      summary:
        'Mauritius accoglie quasi tutti i turisti senza visto o con un visto gratuito all’arrivo, di solito fino a 90 giorni (60 per alcuni passaporti). Alla frontiera controllano biglietto di ritorno, alloggio e mezzi sufficienti, e prima dell’arrivo tutti compilano online il Mauritius All in One Travel Form.',
      apply:
        'Non c’è nulla da chiedere in anticipo: qualche giorno prima del volo compila l’All in One Travel Form (sostituisce le schede cartacee di sbarco e sanitaria) e conserva il codice QR. Al controllo mostra il biglietto di ritorno e la prenotazione dell’hotel; la durata del soggiorno viene timbrata e può essere più breve del massimo se la prenotazione è corta.',
      extend:
        'Le proroghe le gestisce il Passport and Immigration Office di Port Louis: fino a 180 giorni in tutto per anno solare, con prova di mezzi, alloggio e biglietto di ritorno. Fai domanda per tempo, non l’ultimo giorno del timbro.',
      visaRun:
        'I visa run non servono: il limite di 180 giorni per anno solare conta tutti gli ingressi. Rodrigues fa parte di Mauritius, quindi andarci non conta come uscita dal paese.',
      nomad:
        'Il Premium Visa permette a lavoratori da remoto e pensionati di vivere a Mauritius fino a un anno, rinnovabile. Servono redditi dall’estero di almeno 1.500 $ al mese (più 500 $ per ogni familiare a carico), assicurazione sanitaria e nessun lavoro locale; è gratuito e viene deciso online in pochi giorni.',
      hacks: [
        'Più di 90 giorni? Chiedi il Premium Visa gratuito invece di concatenare proroghe: si ottiene online in pochi giorni e vale fino a un anno.',
        'Rodrigues e Agaléga fanno parte di Mauritius: i voli per Rodrigues sono nazionali, senza formalità aggiuntive.',
        'Dividi il soggiorno tra hotel e appartamento? Tieni a portata di mano tutto l’itinerario con gli indirizzi: la durata viene concessa in base all’alloggio confermato.',
        'Lo abbini alla Riunione? È Francia, ma fuori da Schengen e con regole proprie: verifica se il tuo passaporto richiede un visto a parte.',
      ],
      pitfalls: [
        'Saltare l’All in One Travel Form: le compagnie aeree possono chiederlo al check-in e i moduli cartacei in aeroporto a volte finiscono.',
        'Arrivare con un biglietto di sola andata: ti chiederanno di comprare il ritorno al banco.',
        'Il passaporto deve essere valido almeno sei mesi dall’arrivo.',
      ],
      passports: {
        RU: 'I cittadini russi entrano senza visto; controlla la durata sul timbro, perché alcune fonti indicano 60 giorni anziché 90 per la Russia. Le carte russe non funzionano: porta euro o dollari in contanti.',
      },
    },
  },
};

export default guide;
