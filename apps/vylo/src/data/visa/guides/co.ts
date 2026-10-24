import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'CO',
  checked: '2026-10',
  // Colombia and Israel restored mutual visa-free travel on 1 Sep 2026 (Resolución 12189 de 2026)
  overrides: { IL: { status: 'free', days: 90 } },
  stay: { evisa: 90 },
  links: { evisa: 'https://www.cancilleria.gov.co', immigration: 'https://www.migracioncolombia.gov.co' },
  forms: [{ name: 'Check-MIG', url: 'https://apps.migracioncolombia.gov.co/pre-registro', fee: { kind: 'free' } }],
  docs: ['returnTicket'],
  passportMonths: 0,
  extend: { days: 90 },
  visaRun: 'limited',
  nomad: { name: 'Visa V Nómada Digital', months: 24, income: { kind: 'from', amount: 5252715, currency: 'COP' } },
  waivers: [{ holds: ['visaUS', 'visaSchengen', 'resUS', 'resEU'], passports: ['IN', 'CN'], status: 'free', days: 90 }],
  hackScope: [null, null, null, ['VE', 'EC', 'PE', 'BO', '@MERCOSUR']],
  pitfallScope: [null, null, null],
  text: {
    ru: {
      summary:
        'Граждане России, Беларуси, Казахстана, Украины, Грузии, США, ЕС, Великобритании и почти всей Латинской Америки въезжают без визы на 90 дней, которые можно продлить ещё на 90 — но не больше 180 дней в календарный год. Гражданам Индии, Китая и ряда других стран нужна электронная виза, если у них нет визы или ВНЖ США или Шенгена. Все авиапассажиры заполняют бесплатную форму Check-MIG.',
      apply:
        'Заполните Check-MIG на сайте Migración Colombia за 72 часа — 1 час до вылета, и на въезд, и на выезд; это бесплатно. Безвизовым туристам больше ничего не нужно, кроме обратного билета. Электронную визу V (туризм) подают на сайте МИД Колумбии: сбор за рассмотрение около 50 $ плюс сбор за выдачу, решение — обычно за 5–10 рабочих дней.',
      extend:
        'Продление на 90 дней (Permiso Temporal de Permanencia, PTP) оформляют онлайн на сайте Migración Colombia незадолго до окончания первых 90 дней — не после. Платёж картой, решение приходит на почту. Итого не больше 180 дней за календарный год.',
      visaRun:
        'Визаран не обнуляет лимит: 180 дней считаются за календарный год (с 1 января по 31 декабря), а выезд в Эквадор или Панаму ничего не меняет. Зато 1 января счётчик сбрасывается.',
      nomad:
        'Виза V «Цифровой кочевник» выдаётся на срок до 2 лет. Нужен иностранный доход не меньше трёх колумбийских минимальных зарплат — 5 252 715 песо в месяц в 2026 году (около 1300 $), выписки за 3 месяца и медицинская страховка. Подача онлайн на сайте МИД.',
      hacks: [
        'Лимит 180 дней считается по календарному году, поэтому, въехав в июле, можно провести здесь июль — декабрь (90 + 90), а с 1 января начать новый лимит. Офицер вправе отказать, так что держите обратный билет и доказательства средств.',
        'Check-MIG заполняют и на выезд: без QR-кода на вылете вас отправят заполнять форму у стойки — лучше сделать это заранее.',
        'Не уверены, сколько дней вам дали? Штампы больше не ставят — проверьте запись о въезде на сайте Migración Colombia.',
        'Граждане Венесуэлы, Эквадора, Перу, Боливии и стран Mercosur могут въехать по удостоверению личности вместо паспорта.',
      ],
      pitfalls: [
        'Сайты-посредники берут 20–60 $ за бесплатную Check-MIG. Официальная форма — только на сайте Migración Colombia.',
        'Просрочка штрафуется (от половины до нескольких минимальных зарплат) и может закончиться депортацией. Продлевайтесь до истечения срока.',
        'Авиакомпании проверяют билет из Колумбии: без него на рейс в Боготу или Медельин могут не посадить.',
      ],
      waivers: [
        'Граждане Индии и Китая въезжают без визы на 90 дней с действующей визой США или Шенгена (кроме транзитной C1) либо с ВНЖ в США или стране Шенгена. Виза должна быть действительна ещё не меньше 180 дней на дату въезда.',
      ],
      passports: {
        RU: 'Россиянам — 90 дней без визы с продлением до 180 в год. Прямых рейсов нет, летают через Стамбул или Мадрид. Российские карты не работают — берите доллары или евро наличными.',
        IL: 'С 1 сентября 2026 года граждане Израиля снова въезжают без визы на 90 дней.',
        IN: 'Индийцам нужна e-виза, но с действующей визой США или Шенгена (не меньше 180 дней действия) либо ВНЖ там виза не нужна.',
        US: 'Американцы въезжают без визы на 90 дней и могут продлить ещё на 90 в пределах календарного года.',
      },
    },
    en: {
      summary:
        'Citizens of Russia, Belarus, Kazakhstan, Ukraine, Georgia, the US, the EU, the UK and nearly all of Latin America enter visa-free for 90 days, extendable by another 90 — but never more than 180 days per calendar year. Indian, Chinese and some other citizens need an e-visa unless they hold a US or Schengen visa or residence permit. All air passengers file the free Check-MIG form.',
      apply:
        'Fill in Check-MIG on the Migración Colombia site between 72 hours and 1 hour before your flight, both on arrival and on departure; it is free. Visa-exempt travellers need nothing else beyond an onward ticket. The V (tourism) e-visa is applied for on the Foreign Ministry site: a study fee of about US$50 plus an issuance fee, with a decision usually in 5–10 working days.',
      extend:
        'The 90-day extension (Permiso Temporal de Permanencia, PTP) is requested online on the Migración Colombia site shortly before your first 90 days run out — not after. You pay by card and the decision arrives by email. The total is capped at 180 days per calendar year.',
      visaRun:
        'Border runs do not reset the limit: the 180 days count per calendar year (1 January to 31 December), and a hop to Ecuador or Panama changes nothing. The counter does reset on 1 January, though.',
      nomad:
        'The V Digital Nomad visa is issued for up to two years. You need foreign income of at least three Colombian minimum wages — COP 5,252,715 a month in 2026 (about US$1,300) — three months of bank statements and health insurance. Apply online on the Foreign Ministry site.',
      hacks: [
        'The 180-day cap runs by calendar year, so arriving in July you can stay July to December (90 + 90) and start a fresh allowance on 1 January. Officers can still refuse, so keep an onward ticket and proof of funds.',
        'Check-MIG is also needed for departure: without the QR code you will be sent to fill it in at the counter — do it beforehand.',
        'Unsure how many days you got? Passports are no longer stamped — check your entry record on the Migración Colombia site.',
        'Citizens of Venezuela, Ecuador, Peru, Bolivia and Mercosur countries can enter with a national ID card instead of a passport.',
      ],
      pitfalls: [
        'Agency sites charge US$20–60 for the free Check-MIG. The official form is only on the Migración Colombia site.',
        'Overstays are fined (from half to several minimum wages) and can end in deportation. Extend before your time runs out.',
        'Airlines check for a ticket out of Colombia — without one, you may be refused boarding to Bogotá or Medellín.',
      ],
      waivers: [
        'Indian and Chinese citizens enter visa-free for 90 days with a valid US or Schengen visa (except a C1 transit visa) or residence in the US or a Schengen country. The visa must have at least 180 days of validity left on the day you enter.',
      ],
      passports: {
        RU: 'Russians get 90 days visa-free, extendable to 180 per year. There are no direct flights — people fly via Istanbul or Madrid. Russian cards do not work, so bring US dollars or euros in cash.',
        IL: 'Since 1 September 2026, Israeli citizens again enter visa-free for 90 days.',
        IN: 'Indians need an e-visa, but a valid US or Schengen visa (at least 180 days left) or residence there removes the requirement.',
        US: 'Americans enter visa-free for 90 days and can extend for another 90 within the calendar year.',
      },
    },
    es: {
      summary:
        'Los ciudadanos de Rusia, Bielorrusia, Kazajistán, Ucrania, Georgia, EE. UU., la UE, Reino Unido y casi toda Latinoamérica entran sin visa por 90 días, prorrogables otros 90, pero nunca más de 180 días por año calendario. Los ciudadanos de India, China y algunos otros países necesitan visa electrónica salvo que tengan visa o residencia de EE. UU. o Schengen. Todos los pasajeros aéreos llenan el Check-MIG gratuito.',
      apply:
        'Llena el Check-MIG en el sitio de Migración Colombia entre 72 horas y 1 hora antes del vuelo, tanto a la llegada como a la salida; es gratis. Si no necesitas visa, solo te hace falta el boleto de salida. La visa electrónica V (turismo) se pide en el sitio de la Cancillería: tasa de estudio de unos 50 US$ más la de expedición, con respuesta normalmente en 5–10 días hábiles.',
      extend:
        'La prórroga de 90 días (Permiso Temporal de Permanencia, PTP) se pide en línea en el sitio de Migración Colombia poco antes de que terminen los primeros 90 días, nunca después. Se paga con tarjeta y la respuesta llega por correo. El total no puede superar 180 días por año calendario.',
      visaRun:
        'Salir y volver no reinicia el límite: los 180 días se cuentan por año calendario (del 1 de enero al 31 de diciembre) y un salto a Ecuador o Panamá no cambia nada. Eso sí, el contador se reinicia el 1 de enero.',
      nomad:
        'La visa V Nómada Digital se otorga hasta por dos años. Necesitas ingresos del exterior de al menos tres salarios mínimos colombianos —5.252.715 COP al mes en 2026 (unos 1300 US$)—, extractos de tres meses y seguro médico. Se solicita en línea en la Cancillería.',
      hacks: [
        'El tope de 180 días va por año calendario: si llegas en julio, puedes quedarte de julio a diciembre (90 + 90) y empezar un cupo nuevo el 1 de enero. El oficial puede negarlo, así que lleva boleto de salida y prueba de fondos.',
        'El Check-MIG también se necesita para salir: sin el código QR te mandarán a llenarlo en el mostrador, mejor hazlo antes.',
        '¿No sabes cuántos días te dieron? Ya no se sella el pasaporte: consulta tu registro de entrada en el sitio de Migración Colombia.',
        'Los ciudadanos de Venezuela, Ecuador, Perú, Bolivia y los países del Mercosur pueden entrar con su documento de identidad en lugar del pasaporte.',
      ],
      pitfalls: [
        'Hay webs intermediarias que cobran 20–60 US$ por el Check-MIG, que es gratuito. El formulario oficial está solo en el sitio de Migración Colombia.',
        'Quedarse de más se multa (de medio a varios salarios mínimos) y puede terminar en deportación. Prorroga antes de que se cumpla el plazo.',
        'Las aerolíneas revisan que tengas boleto de salida de Colombia; sin él pueden negarte el embarque a Bogotá o Medellín.',
      ],
      waivers: [
        'Los ciudadanos de India y China entran sin visa por 90 días con una visa vigente de EE. UU. o Schengen (salvo la de tránsito C1) o con residencia en EE. UU. o un país Schengen. La visa debe tener al menos 180 días de vigencia el día de entrada.',
      ],
      passports: {
        RU: 'Los rusos tienen 90 días sin visa, prorrogables hasta 180 al año. No hay vuelos directos: se vuela vía Estambul o Madrid. Las tarjetas rusas no funcionan, así que lleva dólares o euros en efectivo.',
        IL: 'Desde el 1 de septiembre de 2026, los ciudadanos israelíes vuelven a entrar sin visa por 90 días.',
        IN: 'Los indios necesitan visa electrónica, pero una visa vigente de EE. UU. o Schengen (con al menos 180 días restantes) o la residencia allí los exime.',
        US: 'Los estadounidenses entran sin visa por 90 días y pueden prorrogar otros 90 dentro del año calendario.',
      },
    },
    de: {
      summary:
        'Staatsangehörige Russlands, Belarus’, Kasachstans, der Ukraine, Georgiens, der USA, der EU, Großbritanniens und fast ganz Lateinamerikas reisen 90 Tage visumfrei ein, verlängerbar um weitere 90 – aber nie mehr als 180 Tage pro Kalenderjahr. Inder, Chinesen und einige andere brauchen ein E-Visum, sofern sie kein Visum oder keinen Aufenthaltstitel der USA oder des Schengenraums haben. Alle Flugreisenden füllen das kostenlose Check-MIG aus.',
      apply:
        'Füll Check-MIG auf der Seite von Migración Colombia zwischen 72 Stunden und 1 Stunde vor dem Flug aus, bei Ein- und bei Ausreise; es ist kostenlos. Visumfreie Reisende brauchen sonst nur ein Weiterreiseticket. Das E-Visum V (Tourismus) beantragst du auf der Seite des Außenministeriums: Prüfgebühr von etwa 50 US$ plus Ausstellungsgebühr, Entscheidung meist in 5–10 Werktagen.',
      extend:
        'Die Verlängerung um 90 Tage (Permiso Temporal de Permanencia, PTP) beantragst du online bei Migración Colombia kurz bevor die ersten 90 Tage ablaufen – nicht danach. Bezahlt wird per Karte, die Entscheidung kommt per Mail. Insgesamt gilt höchstens 180 Tage pro Kalenderjahr.',
      visaRun:
        'Grenz-Runs setzen das Limit nicht zurück: Die 180 Tage gelten pro Kalenderjahr (1. Januar bis 31. Dezember), ein Abstecher nach Ecuador oder Panama ändert daran nichts. Am 1. Januar beginnt der Zähler allerdings neu.',
      nomad:
        'Das Visum V Digitaler Nomade wird für bis zu zwei Jahre erteilt. Du brauchst ausländisches Einkommen von mindestens drei kolumbianischen Mindestlöhnen – 5.252.715 COP im Monat im Jahr 2026 (rund 1.300 US$) –, Kontoauszüge von drei Monaten und eine Krankenversicherung. Beantragt wird online beim Außenministerium.',
      hacks: [
        'Die 180-Tage-Grenze läuft nach Kalenderjahr: Wer im Juli ankommt, kann Juli bis Dezember bleiben (90 + 90) und am 1. Januar ein neues Kontingent beginnen. Der Beamte kann trotzdem ablehnen, also halte Weiterreiseticket und Finanznachweis bereit.',
        'Check-MIG brauchst du auch für die Ausreise: Ohne QR-Code wirst du zum Ausfüllen an den Schalter geschickt – erledige es vorher.',
        'Unsicher, wie viele Tage du bekommen hast? Stempel gibt es nicht mehr – prüf deinen Einreiseeintrag auf der Seite von Migración Colombia.',
        'Bürger Venezuelas, Ecuadors, Perus, Boliviens und der Mercosur-Staaten können mit dem Personalausweis statt mit dem Pass einreisen.',
      ],
      pitfalls: [
        'Vermittlerseiten verlangen 20–60 US$ für das kostenlose Check-MIG. Das offizielle Formular gibt es nur bei Migración Colombia.',
        'Überziehungen kosten ein Bußgeld (ein halber bis mehrere Mindestlöhne) und können mit Abschiebung enden. Verlängere rechtzeitig.',
        'Airlines prüfen ein Ticket aus Kolumbien hinaus – ohne kann dir der Flug nach Bogotá oder Medellín verweigert werden.',
      ],
      waivers: [
        'Indische und chinesische Staatsangehörige reisen 90 Tage visumfrei ein mit einem gültigen US- oder Schengen-Visum (außer dem Transitvisum C1) oder einem Aufenthaltstitel der USA oder eines Schengenstaats. Das Visum muss am Einreisetag noch mindestens 180 Tage gültig sein.',
      ],
      passports: {
        RU: 'Russen bekommen 90 Tage visumfrei, verlängerbar auf 180 pro Jahr. Direktflüge gibt es nicht – geflogen wird über Istanbul oder Madrid. Russische Karten funktionieren nicht, nimm also US-Dollar oder Euro in bar mit.',
        IL: 'Seit dem 1. September 2026 reisen israelische Staatsangehörige wieder 90 Tage visumfrei ein.',
        IN: 'Inder brauchen ein E-Visum, doch ein gültiges US- oder Schengen-Visum (mindestens 180 Tage Restgültigkeit) oder ein Aufenthaltstitel dort hebt die Pflicht auf.',
        US: 'US-Bürger reisen 90 Tage visumfrei ein und können innerhalb des Kalenderjahres um weitere 90 verlängern.',
      },
    },
    fr: {
      summary:
        'Les ressortissants de Russie, du Bélarus, du Kazakhstan, d’Ukraine, de Géorgie, des États-Unis, de l’UE, du Royaume-Uni et de presque toute l’Amérique latine entrent sans visa pour 90 jours, prolongeables de 90 autres, mais jamais plus de 180 jours par année civile. Les citoyens indiens, chinois et de quelques autres pays ont besoin d’un e-visa, sauf s’ils détiennent un visa ou un titre de séjour américain ou Schengen. Tous les passagers aériens remplissent le Check-MIG gratuit.',
      apply:
        'Remplissez le Check-MIG sur le site de Migración Colombia entre 72 heures et 1 heure avant le vol, à l’arrivée comme au départ ; c’est gratuit. Les voyageurs exemptés n’ont besoin de rien d’autre qu’un billet de sortie. L’e-visa V (tourisme) se demande sur le site du ministère des Affaires étrangères : frais d’étude d’environ 50 US$ plus frais de délivrance, réponse en général sous 5 à 10 jours ouvrés.',
      extend:
        'La prolongation de 90 jours (Permiso Temporal de Permanencia, PTP) se demande en ligne sur le site de Migración Colombia peu avant la fin des 90 premiers jours, jamais après. Paiement par carte, réponse par courriel. Le total est plafonné à 180 jours par année civile.',
      visaRun:
        'Un visa run ne remet pas le compteur à zéro : les 180 jours se comptent par année civile (du 1er janvier au 31 décembre), et un saut en Équateur ou au Panama ne change rien. En revanche, le compteur repart le 1er janvier.',
      nomad:
        'Le visa V Nomade numérique est délivré pour deux ans maximum. Il faut des revenus étrangers d’au moins trois salaires minimums colombiens — 5 252 715 COP par mois en 2026 (environ 1 300 US$) —, trois mois de relevés bancaires et une assurance santé. Demande en ligne auprès du ministère.',
      hacks: [
        'Le plafond de 180 jours suit l’année civile : en arrivant en juillet, vous pouvez rester de juillet à décembre (90 + 90) et repartir sur un nouveau quota au 1er janvier. L’agent peut toutefois refuser, alors gardez billet de sortie et justificatifs de ressources.',
        'Le Check-MIG est aussi exigé au départ : sans QR code, on vous enverra le remplir au comptoir — faites-le avant.',
        'Vous ne savez plus combien de jours on vous a accordés ? Les passeports ne sont plus tamponnés : consultez votre enregistrement d’entrée sur le site de Migración Colombia.',
        'Les citoyens du Venezuela, de l’Équateur, du Pérou, de la Bolivie et des pays du Mercosur peuvent entrer avec leur carte d’identité au lieu du passeport.',
      ],
      pitfalls: [
        'Des sites intermédiaires facturent 20 à 60 US$ pour le Check-MIG, gratuit. Le formulaire officiel se trouve uniquement sur le site de Migración Colombia.',
        'Un dépassement de séjour est sanctionné (d’un demi à plusieurs salaires minimums) et peut aboutir à une expulsion. Prolongez avant l’échéance.',
        'Les compagnies vérifient un billet de sortie de Colombie : sans lui, l’embarquement pour Bogotá ou Medellín peut être refusé.',
      ],
      waivers: [
        'Les citoyens indiens et chinois entrent sans visa pour 90 jours avec un visa américain ou Schengen valide (sauf le visa de transit C1) ou une résidence aux États-Unis ou dans un pays Schengen. Le visa doit encore être valable au moins 180 jours le jour de l’entrée.',
      ],
      passports: {
        RU: 'Les Russes ont 90 jours sans visa, prolongeables jusqu’à 180 par an. Pas de vols directs : on passe par Istanbul ou Madrid. Les cartes russes ne fonctionnent pas : emportez des dollars ou des euros en espèces.',
        IL: 'Depuis le 1er septembre 2026, les citoyens israéliens entrent de nouveau sans visa pour 90 jours.',
        IN: 'Les Indiens ont besoin d’un e-visa, mais un visa américain ou Schengen valide (au moins 180 jours restants) ou une résidence dans ces pays les en dispense.',
        US: 'Les Américains entrent sans visa pour 90 jours et peuvent prolonger de 90 autres dans l’année civile.',
      },
    },
    it: {
      summary:
        'I cittadini di Russia, Bielorussia, Kazakistan, Ucraina, Georgia, Stati Uniti, UE, Regno Unito e quasi tutta l’America Latina entrano senza visto per 90 giorni, prorogabili di altri 90, ma mai oltre 180 giorni per anno solare. I cittadini di India, Cina e alcuni altri paesi hanno bisogno del visto elettronico, a meno che non abbiano un visto o una residenza di Stati Uniti o Schengen. Tutti i passeggeri aerei compilano il Check-MIG gratuito.',
      apply:
        'Compila il Check-MIG sul sito di Migración Colombia tra 72 ore e 1 ora prima del volo, sia all’arrivo sia alla partenza; è gratuito. Chi è esente non ha bisogno d’altro che di un biglietto di uscita. Il visto elettronico V (turismo) si richiede sul sito del Ministero degli Esteri: tassa di esame di circa 50 US$ più quella di rilascio, con risposta di solito in 5–10 giorni lavorativi.',
      extend:
        'La proroga di 90 giorni (Permiso Temporal de Permanencia, PTP) si chiede online sul sito di Migración Colombia poco prima che scadano i primi 90 giorni, mai dopo. Si paga con carta e la risposta arriva per email. In totale non si superano i 180 giorni per anno solare.',
      visaRun:
        'Uscire e rientrare non azzera il limite: i 180 giorni si contano per anno solare (dal 1° gennaio al 31 dicembre) e un salto in Ecuador o a Panamá non cambia nulla. Il contatore però riparte il 1° gennaio.',
      nomad:
        'Il visto V Nomade Digitale viene rilasciato fino a due anni. Serve un reddito estero di almeno tre salari minimi colombiani — 5.252.715 COP al mese nel 2026 (circa 1.300 US$) —, estratti conto di tre mesi e un’assicurazione sanitaria. Si richiede online al Ministero degli Esteri.',
      hacks: [
        'Il tetto di 180 giorni segue l’anno solare: arrivando a luglio puoi restare da luglio a dicembre (90 + 90) e iniziare una nuova quota il 1° gennaio. L’agente può comunque rifiutare, quindi tieni pronti biglietto di uscita e prova dei mezzi.',
        'Il Check-MIG serve anche per uscire: senza codice QR ti mandano a compilarlo al banco, meglio farlo prima.',
        'Non sai quanti giorni ti hanno dato? Il passaporto non viene più timbrato: controlla la registrazione d’ingresso sul sito di Migración Colombia.',
        'I cittadini di Venezuela, Ecuador, Perù, Bolivia e dei paesi del Mercosur possono entrare con la carta d’identità invece del passaporto.',
      ],
      pitfalls: [
        'Siti intermediari chiedono 20–60 US$ per il Check-MIG, che è gratuito. Il modulo ufficiale è solo sul sito di Migración Colombia.',
        'Lo sforamento si paga con una multa (da mezzo a diversi salari minimi) e può finire con l’espulsione. Proroga prima della scadenza.',
        'Le compagnie aeree controllano il biglietto di uscita dalla Colombia: senza, possono negarti l’imbarco per Bogotá o Medellín.',
      ],
      waivers: [
        'I cittadini di India e Cina entrano senza visto per 90 giorni con un visto valido di Stati Uniti o Schengen (escluso il visto di transito C1) oppure con la residenza negli Stati Uniti o in un paese Schengen. Il visto deve avere almeno 180 giorni di validità residua il giorno dell’ingresso.',
      ],
      passports: {
        RU: 'I russi hanno 90 giorni senza visto, prorogabili fino a 180 l’anno. Non ci sono voli diretti: si vola via Istanbul o Madrid. Le carte russe non funzionano, quindi porta dollari o euro in contanti.',
        IL: 'Dal 1° settembre 2026 i cittadini israeliani entrano di nuovo senza visto per 90 giorni.',
        IN: 'Gli indiani hanno bisogno del visto elettronico, ma un visto valido di Stati Uniti o Schengen (con almeno 180 giorni residui) o la residenza lì li esenta.',
        US: 'Gli statunitensi entrano senza visto per 90 giorni e possono prorogare di altri 90 nell’anno solare.',
      },
    },
  },
};

export default guide;
