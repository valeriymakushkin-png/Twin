import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'NA',
  checked: '2026-10',
  fees: {
    voa: { kind: 'from', amount: 1600, currency: 'NAD' },
    evisa: { kind: 'from', amount: 1600, currency: 'NAD' },
  },
  stay: { voa: 90, evisa: 90 },
  links: { evisa: 'https://eservices.mhaiss.gov.na', immigration: 'https://mhaiss.gov.na' },
  docs: ['returnTicket', 'booking', 'finance', 'yellowFever'],
  passportMonths: 6,
  visaRun: 'no',
  nomad: { name: 'Digital Nomad Visa', months: 6 },
  text: {
    ru: {
      summary:
        'С 1 апреля 2025 года Намибия берёт плату за визу с большинства гостей, которые раньше въезжали без неё, — европейцев, американцев, канадцев, австралийцев, японцев: 1600 намибийских долларов (около 90 $), онлайн заранее или по прилёте. Граждане стран со взаимным безвизом — России, Бразилии и большинства государств юга Африки — по-прежнему въезжают бесплатно до 90 дней.',
      apply:
        'Подайте заявку на портале электронных услуг МВД Намибии (MHAISS) примерно за две недели до вылета: паспорт, билеты, бронь, оплата 1600 N$ картой — и распечатайте одобрение. Та же виза продаётся по прилёте в аэропортах Хосеа Кутако (Виндхук) и Уолфиш-Бей и на основных сухопутных границах, но очереди длинные, а для ручного оформления на месте утверждена доплата 400 N$. Гражданам Индии и Китая визу нужно оформить заранее.',
      visaRun:
        'Визараны не работают: туристу положено не больше 90 дней за календарный год в сумме, сколько бы раз вы ни въезжали. Поездка в Чобе (Ботсвана) или к водопаду Виктория срок не обнуляет, а повторный въезд по однократной визе означает новую оплату.',
      nomad:
        'Digital Nomad Visa позволяет до шести месяцев удалённо работать на иностранного работодателя. Подают через MHAISS с подтверждением стабильного дохода (порог был около 2000 $ в месяц), медицинской страховкой и справкой о несудимости; актуальные сборы проверьте перед подачей.',
      hacks: [
        'Едете через Каприви к водопаду Виктория или в Чобе? На переходах Казунгула и Виктория-Фолс продаётся KAZA Univisa (50 $): Замбия и Зимбабве на 30 дней плюс однодневные выезды в Ботсвану. Намибия в неё не входит — следите, чтобы для возвращения у вас была действующая намибийская виза.',
        'Подавайте онлайн, а не на месте: e-виза избавит от доплаты 400 N$ за ручное оформление, когда её введут, и от очереди в Хосеа Кутако, когда одновременно садятся несколько рейсов.',
        'Въезжаете на машине из ЮАР (Нурдувер или Ариамсвлей)? Приготовьте сбор за въезд автомобиля (несколько сотен N$) и доверенность от прокатной компании на выезд за границу.',
        'Если у вас есть второй паспорт России, Бразилии или страны SADC, въезжайте по нему: виза не нужна.',
      ],
      pitfalls: [
        'Старые путеводители пишут «для европейцев без визы» — это закончилось 1 апреля 2025 года, и авиакомпании проверяют e-визу или право на визу по прилёте.',
        'Паспорт должен действовать шесть месяцев и иметь минимум две, а лучше три чистые страницы — намибийские пограничники занимают целую страницу.',
        'Сертификат о прививке от жёлтой лихорадки обязателен, если вы прибываете из эндемичной страны, например из Анголы или Кении.',
        'Просрочку штрафуют вплоть до депортации. Если при въезде дали меньше 90 дней, продлевайтесь в MHAISS в Виндхуке заранее.',
      ],
      passports: {
        RU: 'Россияне по-прежнему въезжают без визы до 90 дней в году. Российские карты не работают — берите наличные доллары или евро либо карту зарубежного банка.',
        US: 'Граждане США с 1 апреля 2025 года лишились безвиза и платят 1600 N$, как остальные гости из-за пределов Африки.',
        IN: 'Гражданам Индии виза по прилёте недоступна — оформляйте e-визу до вылета.',
        CN: 'Гражданам Китая e-визу нужно оформить до вылета.',
      },
    },
    en: {
      summary:
        'Since 1 April 2025 Namibia charges most visitors who used to enter visa-free — Europeans, Americans, Canadians, Australians, Japanese — for a visa: N$1,600 (about $90), bought online in advance or on arrival. Citizens of countries with reciprocal deals, such as Russia, Brazil and most southern African states, still enter free for up to 90 days.',
      apply:
        'Apply on the e-services portal of the Ministry of Home Affairs, Immigration, Safety and Security (MHAISS) about two weeks before you fly: passport, tickets, booking, N$1,600 by card — then print the approval. The same visa is sold on arrival at Hosea Kutako (Windhoek) and Walvis Bay airports and main land borders, but queues are long and a N$400 surcharge for manual applications has been approved. Indian and Chinese citizens must apply in advance.',
      visaRun:
        'Runs don’t work: tourists get at most 90 days per calendar year in total, however many times they enter. A side trip to Chobe in Botswana or Victoria Falls doesn’t reset the count, and re-entering on a single-entry visa means paying again.',
      nomad:
        'The Digital Nomad Visa lets you work remotely for a foreign employer for up to six months. Apply through MHAISS with proof of a steady income (the threshold has been around $2,000 a month), health insurance and a clean criminal record; check current fees before applying.',
      hacks: [
        'Driving the Caprivi to Victoria Falls or Chobe? The KAZA Univisa ($50) sold at Kazungula and Victoria Falls covers Zambia and Zimbabwe for 30 days plus day trips into Botswana. Namibia isn’t part of it, so make sure you still have a valid Namibian visa to come back.',
        'Apply online rather than on arrival: the e-visa spares you the N$400 manual surcharge once it takes effect, and the queue at Hosea Kutako when several flights land at once.',
        'Driving in from South Africa (Noordoewer or Ariamsvlei)? Have the cross-border vehicle charge ready (a few hundred N$) and the rental company’s letter of authority for leaving the country.',
        'If you hold a second passport from Russia, Brazil or a SADC country, enter on it — no visa needed.',
      ],
      pitfalls: [
        'Old guidebooks still say “visa-free for Europeans” — that ended on 1 April 2025, and airlines check for an e-visa or eligibility for one on arrival.',
        'Your passport needs six months’ validity and at least two, ideally three, blank pages — Namibian officers use a full page.',
        'A yellow fever certificate is mandatory if you arrive from an endemic country such as Angola or Kenya.',
        'Overstays are fined and can lead to deportation. If you were given fewer than 90 days on arrival, extend at MHAISS in Windhoek in good time.',
      ],
      passports: {
        RU: 'Russian citizens still enter visa-free for up to 90 days a year. Russian cards don’t work — bring US dollars or euros in cash, or a card from a foreign bank.',
        US: 'US citizens lost visa-free entry on 1 April 2025 and pay N$1,600 like other non-African visitors.',
        IN: 'Indian citizens can’t get a visa on arrival — get the e-visa before you fly.',
        CN: 'Chinese citizens must get the e-visa before flying.',
      },
    },
    es: {
      summary:
        'Desde el 1 de abril de 2025 Namibia cobra visado a la mayoría de los visitantes que antes entraban sin él (europeos, estadounidenses, canadienses, australianos, japoneses): 1600 dólares namibios (unos 90 $), en línea por adelantado o a la llegada. Los ciudadanos de países con acuerdos recíprocos, como Rusia, Brasil y la mayoría de los Estados del sur de África, siguen entrando gratis hasta 90 días.',
      apply:
        'Solicítalo en el portal de servicios electrónicos del Ministerio del Interior e Inmigración (MHAISS) unas dos semanas antes del vuelo: pasaporte, billetes, reserva y 1600 N$ con tarjeta; luego imprime la aprobación. El mismo visado se vende a la llegada en los aeropuertos de Hosea Kutako (Windhoek) y Walvis Bay y en los principales pasos terrestres, pero las colas son largas y se ha aprobado un recargo de 400 N$ por la tramitación manual. Los ciudadanos de India y China deben pedirlo antes.',
      visaRun:
        'Los visa runs no funcionan: el turista tiene como máximo 90 días por año natural en total, entre cuantas veces quiera. Una escapada a Chobe (Botsuana) o a las cataratas Victoria no reinicia la cuenta, y volver a entrar con un visado de una entrada supone pagar otra vez.',
      nomad:
        'El Digital Nomad Visa permite trabajar en remoto para un empleador extranjero hasta seis meses. Se pide a través del MHAISS con prueba de ingresos estables (el umbral ha rondado los 2000 $ al mes), seguro médico y antecedentes penales limpios; consulta las tasas vigentes antes de solicitarlo.',
      hacks: [
        '¿Vas por la franja de Caprivi a las cataratas Victoria o a Chobe? El KAZA Univisa (50 $), que se vende en Kazungula y Victoria Falls, cubre Zambia y Zimbabue 30 días más excursiones de un día a Botsuana. Namibia no está incluida, así que asegúrate de tener un visado namibio válido para volver.',
        'Pídelo en línea y no a la llegada: el visado electrónico te ahorra el recargo manual de 400 N$ cuando entre en vigor y la cola de Hosea Kutako cuando aterrizan varios vuelos a la vez.',
        '¿Entras en coche desde Sudáfrica (Noordoewer o Ariamsvlei)? Ten preparada la tasa de cruce del vehículo (unos cientos de N$) y la autorización de la empresa de alquiler para salir del país.',
        'Si tienes un segundo pasaporte de Rusia, Brasil o un país de la SADC, entra con él: no necesitas visado.',
      ],
      pitfalls: [
        'Las guías antiguas aún dicen “sin visado para europeos”: eso terminó el 1 de abril de 2025, y las aerolíneas comprueban el visado electrónico o el derecho a obtenerlo a la llegada.',
        'El pasaporte necesita seis meses de validez y al menos dos páginas en blanco, mejor tres: los agentes namibios usan una página entera.',
        'El certificado de la fiebre amarilla es obligatorio si llegas de un país endémico, como Angola o Kenia.',
        'Quedarte de más se multa y puede acabar en deportación. Si te dieron menos de 90 días al entrar, pide la prórroga en el MHAISS de Windhoek con tiempo.',
      ],
      passports: {
        RU: 'Los ciudadanos rusos siguen entrando sin visado hasta 90 días al año. Las tarjetas rusas no funcionan: lleva dólares o euros en efectivo o una tarjeta de un banco extranjero.',
        US: 'Los ciudadanos estadounidenses perdieron la exención el 1 de abril de 2025 y pagan 1600 N$, como el resto de visitantes no africanos.',
        IN: 'Los ciudadanos indios no pueden obtener visado a la llegada: pide el electrónico antes de volar.',
        CN: 'Los ciudadanos chinos deben obtener el visado electrónico antes del vuelo.',
      },
    },
    de: {
      summary:
        'Seit dem 1. April 2025 verlangt Namibia von den meisten Reisenden, die früher visumfrei kamen – Europäern, Amerikanern, Kanadiern, Australiern, Japanern – ein Visum: 1.600 Namibia-Dollar (rund 90 $), online vorab oder bei Ankunft. Bürger von Ländern mit Gegenseitigkeitsabkommen wie Russland, Brasilien und die meisten Staaten im südlichen Afrika reisen weiter kostenlos bis zu 90 Tage ein.',
      apply:
        'Beantrage es etwa zwei Wochen vor dem Flug im E-Services-Portal des Innen- und Einwanderungsministeriums (MHAISS): Pass, Tickets, Buchung, 1.600 N$ per Karte – dann die Genehmigung ausdrucken. Dasselbe Visum gibt es bei Ankunft an den Flughäfen Hosea Kutako (Windhoek) und Walvis Bay sowie an den wichtigsten Landgrenzen, aber die Schlangen sind lang und ein Aufschlag von 400 N$ für manuelle Anträge ist beschlossen. Indische und chinesische Staatsangehörige müssen vorab beantragen.',
      visaRun:
        'Visa-Runs funktionieren nicht: Touristen haben höchstens 90 Tage pro Kalenderjahr insgesamt, egal wie oft sie einreisen. Ein Abstecher nach Chobe in Botswana oder zu den Victoriafällen setzt nichts zurück, und mit einem Visum für eine Einreise zahlst du bei der Rückkehr erneut.',
      nomad:
        'Mit dem Digital Nomad Visa darfst du bis zu sechs Monate remote für einen ausländischen Arbeitgeber arbeiten. Beantragt wird über das MHAISS mit Nachweis eines regelmäßigen Einkommens (die Schwelle lag bei rund 2.000 $ im Monat), Krankenversicherung und Führungszeugnis; prüfe vorab die aktuellen Gebühren.',
      hacks: [
        'Über den Caprivi zu den Victoriafällen oder nach Chobe? Das KAZA Univisa (50 $), erhältlich in Kazungula und Victoria Falls, deckt Sambia und Simbabwe für 30 Tage plus Tagesausflüge nach Botswana ab. Namibia gehört nicht dazu – sorge dafür, dass du für die Rückkehr noch ein gültiges namibisches Visum hast.',
        'Beantrage online statt bei Ankunft: Das E-Visum erspart dir den manuellen Aufschlag von 400 N$, sobald er gilt, und die Schlange in Hosea Kutako, wenn mehrere Flüge gleichzeitig landen.',
        'Mit dem Auto aus Südafrika (Noordoewer oder Ariamsvlei)? Halte die Grenzgebühr fürs Fahrzeug bereit (einige hundert N$) und die Vollmacht des Vermieters für die Ausreise.',
        'Wer einen Zweitpass aus Russland, Brasilien oder einem SADC-Land hat, reist damit ein – kein Visum nötig.',
      ],
      pitfalls: [
        'Alte Reiseführer schreiben noch „visumfrei für Europäer“ – das endete am 1. April 2025, und Airlines prüfen das E-Visum oder den Anspruch auf ein Visum bei Ankunft.',
        'Der Pass muss sechs Monate gültig sein und mindestens zwei, besser drei leere Seiten haben – namibische Beamte brauchen eine ganze Seite.',
        'Der Gelbfieber-Nachweis ist Pflicht, wenn du aus einem Endemiegebiet wie Angola oder Kenia kommst.',
        'Überziehungen werden mit Bußgeld bestraft und können zur Abschiebung führen. Hast du bei der Einreise weniger als 90 Tage bekommen, verlängere rechtzeitig beim MHAISS in Windhoek.',
      ],
      passports: {
        RU: 'Russische Staatsangehörige reisen weiterhin bis zu 90 Tage im Jahr visumfrei ein. Russische Karten funktionieren nicht – nimm Dollar oder Euro in bar oder die Karte einer ausländischen Bank mit.',
        US: 'US-Bürger haben die Visumfreiheit am 1. April 2025 verloren und zahlen 1.600 N$ wie andere nichtafrikanische Gäste.',
        IN: 'Indische Staatsangehörige bekommen kein Visum bei Ankunft – beantrage das E-Visum vor dem Flug.',
        CN: 'Chinesische Staatsangehörige müssen das E-Visum vor dem Flug beantragen.',
      },
    },
    fr: {
      summary:
        'Depuis le 1er avril 2025, la Namibie fait payer un visa à la plupart des visiteurs qui entraient auparavant sans visa — Européens, Américains, Canadiens, Australiens, Japonais : 1 600 dollars namibiens (environ 90 $), en ligne à l’avance ou à l’arrivée. Les ressortissants des pays liés par un accord de réciprocité, comme la Russie, le Brésil et la plupart des États d’Afrique australe, entrent toujours gratuitement jusqu’à 90 jours.',
      apply:
        'Faites la demande sur le portail de services en ligne du ministère de l’Intérieur et de l’Immigration (MHAISS) environ deux semaines avant le départ : passeport, billets, réservation, 1 600 N$ par carte, puis imprimez l’accord. Le même visa est vendu à l’arrivée aux aéroports de Hosea Kutako (Windhoek) et de Walvis Bay et aux principaux postes terrestres, mais les files sont longues et un supplément de 400 N$ pour les demandes manuelles a été approuvé. Les ressortissants indiens et chinois doivent faire la demande à l’avance.',
      visaRun:
        'Les visa runs ne marchent pas : un touriste a droit à 90 jours maximum par année civile au total, quel que soit le nombre d’entrées. Une excursion à Chobe au Botswana ou aux chutes Victoria ne remet pas le compteur à zéro, et revenir avec un visa à entrée unique oblige à repayer.',
      nomad:
        'Le Digital Nomad Visa permet de travailler à distance pour un employeur étranger jusqu’à six mois. La demande passe par le MHAISS avec justificatif de revenus réguliers (le seuil tournait autour de 2 000 $ par mois), assurance santé et casier judiciaire vierge ; vérifiez les frais en vigueur avant de déposer.',
      hacks: [
        'Vous traversez le Caprivi vers les chutes Victoria ou Chobe ? Le KAZA Univisa (50 $), vendu à Kazungula et à Victoria Falls, couvre la Zambie et le Zimbabwe pour 30 jours, plus des excursions d’une journée au Botswana. La Namibie n’en fait pas partie : gardez un visa namibien valable pour revenir.',
        'Faites la demande en ligne plutôt qu’à l’arrivée : l’e-visa vous évite le supplément manuel de 400 N$ dès qu’il s’appliquera, ainsi que la file de Hosea Kutako quand plusieurs vols atterrissent en même temps.',
        'Vous arrivez en voiture d’Afrique du Sud (Noordoewer ou Ariamsvlei) ? Prévoyez la taxe de passage du véhicule (quelques centaines de N$) et l’autorisation du loueur pour sortir du pays.',
        'Si vous avez un second passeport russe, brésilien ou d’un pays de la SADC, entrez avec : pas de visa.',
      ],
      pitfalls: [
        'Les anciens guides écrivent encore « sans visa pour les Européens » : c’est fini depuis le 1er avril 2025, et les compagnies vérifient l’e-visa ou le droit au visa à l’arrivée.',
        'Le passeport doit être valable six mois et compter au moins deux, idéalement trois pages vierges : les agents namibiens utilisent une page entière.',
        'Le certificat de fièvre jaune est obligatoire si vous arrivez d’un pays d’endémie comme l’Angola ou le Kenya.',
        'Les dépassements sont sanctionnés d’une amende et peuvent mener à l’expulsion. Si l’on vous a accordé moins de 90 jours à l’entrée, demandez à temps une prolongation au MHAISS à Windhoek.',
      ],
      passports: {
        RU: 'Les ressortissants russes entrent toujours sans visa jusqu’à 90 jours par an. Les cartes russes ne fonctionnent pas : emportez des dollars ou des euros en espèces, ou la carte d’une banque étrangère.',
        US: 'Les citoyens américains ont perdu l’exemption de visa le 1er avril 2025 et paient 1 600 N$ comme les autres visiteurs non africains.',
        IN: 'Les ressortissants indiens ne peuvent pas obtenir de visa à l’arrivée : demandez l’e-visa avant le départ.',
        CN: 'Les ressortissants chinois doivent obtenir l’e-visa avant le vol.',
      },
    },
    it: {
      summary:
        'Dal 1° aprile 2025 la Namibia fa pagare il visto alla maggior parte dei visitatori che prima entravano senza: europei, americani, canadesi, australiani, giapponesi. Costa 1.600 dollari namibiani (circa 90 $), online in anticipo o all’arrivo. I cittadini dei paesi con accordi di reciprocità, come Russia, Brasile e la maggior parte degli Stati dell’Africa australe, entrano ancora gratis fino a 90 giorni.',
      apply:
        'Fai domanda sul portale dei servizi online del ministero dell’Interno e dell’Immigrazione (MHAISS) circa due settimane prima del volo: passaporto, biglietti, prenotazione, 1.600 N$ con carta, poi stampa l’approvazione. Lo stesso visto si compra all’arrivo negli aeroporti di Hosea Kutako (Windhoek) e Walvis Bay e ai principali valichi terrestri, ma le code sono lunghe ed è stato approvato un supplemento di 400 N$ per le domande manuali. I cittadini di India e Cina devono fare domanda in anticipo.',
      visaRun:
        'I visa run non funzionano: il turista ha al massimo 90 giorni per anno solare in tutto, con qualsiasi numero di ingressi. Una gita a Chobe in Botswana o alle cascate Vittoria non azzera il conteggio, e rientrare con un visto a ingresso singolo significa pagare di nuovo.',
      nomad:
        'Il Digital Nomad Visa permette di lavorare da remoto per un datore di lavoro estero fino a sei mesi. Si chiede tramite il MHAISS con prova di un reddito stabile (la soglia è stata di circa 2.000 $ al mese), assicurazione sanitaria e fedina penale pulita; verifica le tariffe aggiornate prima di fare domanda.',
      hacks: [
        'Attraversi il Caprivi verso le cascate Vittoria o Chobe? Il KAZA Univisa (50 $), in vendita a Kazungula e Victoria Falls, copre Zambia e Zimbabwe per 30 giorni più gite giornaliere in Botswana. La Namibia non è inclusa: assicurati di avere ancora un visto namibiano valido per rientrare.',
        'Fai domanda online invece che all’arrivo: il visto elettronico ti evita il supplemento manuale di 400 N$ quando entrerà in vigore e la coda di Hosea Kutako quando atterrano più voli insieme.',
        'Arrivi in auto dal Sudafrica (Noordoewer o Ariamsvlei)? Tieni pronta la tassa di frontiera per il veicolo (qualche centinaio di N$) e l’autorizzazione del noleggiatore a uscire dal paese.',
        'Se hai un secondo passaporto russo, brasiliano o di un paese SADC, entra con quello: niente visto.',
      ],
      pitfalls: [
        'Le vecchie guide scrivono ancora “senza visto per gli europei”: è finita il 1° aprile 2025, e le compagnie aeree controllano il visto elettronico o il diritto al visto all’arrivo.',
        'Il passaporto deve essere valido sei mesi e avere almeno due, meglio tre pagine libere: gli agenti namibiani usano una pagina intera.',
        'Il certificato della febbre gialla è obbligatorio se arrivi da un paese endemico come Angola o Kenya.',
        'Chi supera il limite paga una multa e rischia l’espulsione. Se all’ingresso ti hanno dato meno di 90 giorni, chiedi per tempo la proroga al MHAISS di Windhoek.',
      ],
      passports: {
        RU: 'I cittadini russi entrano ancora senza visto fino a 90 giorni l’anno. Le carte russe non funzionano: porta dollari o euro in contanti o la carta di una banca estera.',
        US: 'I cittadini statunitensi hanno perso l’esenzione il 1° aprile 2025 e pagano 1.600 N$ come gli altri visitatori non africani.',
        IN: 'I cittadini indiani non possono ottenere il visto all’arrivo: chiedi quello elettronico prima di partire.',
        CN: 'I cittadini cinesi devono ottenere il visto elettronico prima del volo.',
      },
    },
  },
};

export default guide;
