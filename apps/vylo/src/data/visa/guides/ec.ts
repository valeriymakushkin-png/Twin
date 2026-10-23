import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'EC',
  checked: '2026-10',
  stay: { evisa: 90 },
  links: { evisa: 'https://www.cancilleria.gob.ec' },
  forms: [
    { name: 'Galápagos Transit Control Card (TCT)', url: 'https://www.gobiernogalapagos.gob.ec', fee: { kind: 'fixed', amount: 20, currency: 'USD' } },
    { name: 'Galápagos National Park entry fee', fee: { kind: 'fixed', amount: 200, currency: 'USD' } },
  ],
  docs: ['insurance', 'returnTicket'],
  passportMonths: 6,
  rule: { days: 90, window: 365 },
  extend: { days: 90 },
  visaRun: 'no',
  nomad: { name: 'Visa de Residencia Temporal Nómada Digital', months: 24, income: { kind: 'fixed', amount: 1446, currency: 'USD' } },
  text: {
    ru: {
      summary:
        'Граждане России, Беларуси, Казахстана, Украины, Армении, Грузии, США, ЕС, Великобритании и почти всей Латинской Америки въезжают без визы на 90 дней в течение 12 месяцев. Гражданам Китая, Индии, Кубы, Венесуэлы и ряда других стран нужна виза. По закону у всех туристов должна быть медицинская страховка на время поездки.',
      apply:
        'Безвизовым туристам нужны паспорт со сроком действия от 6 месяцев, обратный или выездной билет и страховка. Визу (например, для граждан Китая или Индии) оформляют онлайн через консульский портал МИД Эквадора: анкета, документы, оплата и, если просят, онлайн-собеседование.',
      extend:
        'Если 90 дней мало, до их окончания можно один раз продлить пребывание ещё до 90 дней через МИД (онлайн или в зональном офисе) с оплатой сбора. Подавайте заранее — после окончания срока продление уже не выдадут.',
      visaRun:
        'Визаран не работает: 90 дней считаются на 12 месяцев с даты первого въезда, и выезд в Колумбию через Румичаку или в Перу через Уакильяс счётчик не обнуляет. Новый лимит начинается только через год после первого въезда.',
      nomad:
        'Временная резиденция «цифровой кочевник» выдаётся на 2 года. Нужен доход из-за рубежа не меньше трёх базовых зарплат — 1446 $ в месяц в 2026 году, — подтверждение удалённой работы и медицинская страховка. Подача онлайн через МИД; сборы — несколько сотен долларов.',
      hacks: [
        'Галапагосы: заранее оплатите онлайн транзитную карту TCT (20 $) и возьмите 200 $ наличными на сбор нацпарка — его платят по прилёте на острова. Детям до 12 лет — половина.',
        'Лимит 90 дней — на год с первого въезда: две недели в марте и две недели в ноябре расходуют один и тот же запас. Планируйте длинную поездку с учётом этого.',
        'Валюта Эквадора — доллар США: привозите мелкие купюры, сдачу с 50 и 100 $ дают неохотно.',
        'На наземных переходах автобус сам не остановится у миграционного поста — попросите водителя и обязательно получите отметку о въезде, иначе при выезде будет штраф.',
      ],
      pitfalls: [
        'Превышение 90 дней грозит штрафом и запретом на въезд — а продлить можно только до истечения срока.',
        'Страховку проверяют не всегда, но если попросят, а её нет, могут отказать во въезде. Держите полис с упоминанием Эквадора в телефоне.',
        'На Галапагосах с 2026 года строже проверяют обратный билет, страховку и бронь жилья у разрешённых отелей; число дней на островах для туристов ограничено.',
      ],
      passports: {
        RU: 'Россиянам — 90 дней без визы за 12 месяцев. Прямых рейсов нет, летают через Стамбул, Мадрид или Амстердам. Российские карты не работают — берите доллары наличными.',
        CN: 'С 2024 года, после приостановки безвизового соглашения, гражданам Китая нужна виза Эквадора.',
        US: 'Американцы въезжают без визы на 90 дней за 12 месяцев; доллар США — местная валюта.',
      },
    },
    en: {
      summary:
        'Citizens of Russia, Belarus, Kazakhstan, Ukraine, Armenia, Georgia, the US, the EU, the UK and nearly all of Latin America enter visa-free for 90 days within a 12-month period. Citizens of China, India, Cuba, Venezuela and some other countries need a visa. By law, every tourist must have health insurance for the trip.',
      apply:
        'Visa-exempt travellers need a passport valid for six months, a return or onward ticket and insurance. Visas (for Chinese or Indian citizens, for example) are applied for online through the Ecuadorian Foreign Ministry’s consular portal: form, documents, payment and, if requested, an online interview.',
      extend:
        'If 90 days are not enough, before they run out you can extend once for up to another 90 days through the Foreign Ministry (online or at a regional office) for a fee. Apply early — once your time is up, no extension is granted.',
      visaRun:
        'Border runs do not work: the 90 days count per 12 months from your first entry, and hopping to Colombia via Rumichaca or Peru via Huaquillas does not reset them. A new allowance starts only a year after your first entry.',
      nomad:
        'The digital-nomad temporary residence is issued for two years. You need foreign income of at least three basic salaries — US$1,446 a month in 2026 — proof of remote work and health insurance. Apply online via the Foreign Ministry; fees total a few hundred dollars.',
      hacks: [
        'Galápagos: pay the US$20 Transit Control Card (TCT) online in advance and carry US$200 in cash for the national park fee, paid on landing on the islands. Children under 12 pay half.',
        'The 90 days run per year from your first entry: two weeks in March and two in November draw on the same allowance. Plan a long trip with that in mind.',
        'Ecuador uses the US dollar — bring small notes, since change for US$50 and US$100 bills is hard to get.',
        'At land borders the bus will not stop at immigration by itself — ask the driver and make sure you get an entry record, or you will be fined on exit.',
      ],
      pitfalls: [
        'Exceeding 90 days risks a fine and an entry ban — and an extension is only possible before your time runs out.',
        'Insurance is not always checked, but if you are asked and have none you can be refused entry. Keep a policy mentioning Ecuador on your phone.',
        'Since 2026, Galápagos checks return tickets, insurance and bookings at authorised lodgings more strictly, and the number of tourist days on the islands is capped.',
      ],
      passports: {
        RU: 'Russians get 90 days visa-free per 12 months. There are no direct flights — people fly via Istanbul, Madrid or Amsterdam. Russian cards do not work, so bring US dollars in cash.',
        CN: 'Since 2024, when the visa-waiver agreement was suspended, Chinese citizens need an Ecuadorian visa.',
        US: 'Americans enter visa-free for 90 days per 12 months; the US dollar is the local currency.',
      },
    },
    es: {
      summary:
        'Los ciudadanos de Rusia, Bielorrusia, Kazajistán, Ucrania, Armenia, Georgia, EE. UU., la UE, Reino Unido y casi toda Latinoamérica entran sin visa por 90 días dentro de un periodo de 12 meses. Los ciudadanos de China, India, Cuba, Venezuela y algunos otros países necesitan visa. Por ley, todo turista debe tener seguro médico durante el viaje.',
      apply:
        'Si no necesitas visa, te bastan un pasaporte con seis meses de vigencia, boleto de regreso o salida y seguro. Las visas (por ejemplo, para ciudadanos chinos o indios) se piden en línea a través del portal consular de la Cancillería ecuatoriana: formulario, documentos, pago y, si te la piden, una entrevista en línea.',
      extend:
        'Si 90 días no te alcanzan, antes de que terminen puedes prorrogar una vez hasta 90 días más ante la Cancillería (en línea o en una oficina zonal), pagando una tasa. Pídelo con tiempo: cuando ya ha vencido el plazo, no hay prórroga.',
      visaRun:
        'Salir y volver no sirve: los 90 días se cuentan por 12 meses desde tu primera entrada, y saltar a Colombia por Rumichaca o a Perú por Huaquillas no los reinicia. El nuevo cupo empieza solo un año después de la primera entrada.',
      nomad:
        'La residencia temporal de nómada digital se otorga por dos años. Necesitas ingresos del exterior de al menos tres salarios básicos —1446 US$ al mes en 2026—, prueba del trabajo remoto y seguro médico. Se tramita en línea en la Cancillería; las tasas suman unos cientos de dólares.',
      hacks: [
        'Galápagos: paga antes en línea la Tarjeta de Control de Tránsito (TCT, 20 US$) y lleva 200 US$ en efectivo para la entrada al parque nacional, que se paga al aterrizar en las islas. Los menores de 12 pagan la mitad.',
        'Los 90 días van por año desde tu primera entrada: dos semanas en marzo y dos en noviembre gastan el mismo cupo. Planifica un viaje largo teniéndolo en cuenta.',
        'Ecuador usa el dólar estadounidense: lleva billetes pequeños, porque cuesta conseguir cambio de 50 y 100 US$.',
        'En los pasos terrestres, el bus no para solo en Migración: pídeselo al conductor y asegúrate de que registren tu entrada, o te multarán al salir.',
      ],
      pitfalls: [
        'Pasarte de los 90 días implica multa y posible prohibición de entrada, y la prórroga solo se puede pedir antes de que venza el plazo.',
        'El seguro no siempre se revisa, pero si te lo piden y no lo tienes, pueden negarte la entrada. Ten en el móvil una póliza que mencione Ecuador.',
        'Desde 2026, Galápagos revisa con más rigor el boleto de regreso, el seguro y las reservas en alojamientos autorizados, y los días de turista en las islas están limitados.',
      ],
      passports: {
        RU: 'Los rusos tienen 90 días sin visa cada 12 meses. No hay vuelos directos: se vuela vía Estambul, Madrid o Ámsterdam. Las tarjetas rusas no funcionan, así que lleva dólares en efectivo.',
        CN: 'Desde 2024, cuando se suspendió el acuerdo de exención de visas, los ciudadanos chinos necesitan visa ecuatoriana.',
        US: 'Los estadounidenses entran sin visa por 90 días cada 12 meses; el dólar es la moneda local.',
      },
    },
    de: {
      summary:
        'Staatsangehörige Russlands, Belarus’, Kasachstans, der Ukraine, Armeniens, Georgiens, der USA, der EU, Großbritanniens und fast ganz Lateinamerikas reisen visumfrei für 90 Tage innerhalb von 12 Monaten ein. Bürger Chinas, Indiens, Kubas, Venezuelas und einiger anderer Länder brauchen ein Visum. Gesetzlich muss jeder Tourist für die Reise krankenversichert sein.',
      apply:
        'Visumfreie Reisende brauchen einen sechs Monate gültigen Pass, ein Rück- oder Weiterreiseticket und eine Versicherung. Visa (etwa für chinesische oder indische Staatsangehörige) beantragst du online über das Konsularportal des ecuadorianischen Außenministeriums: Formular, Unterlagen, Zahlung und auf Wunsch ein Online-Gespräch.',
      extend:
        'Reichen 90 Tage nicht, kannst du vor ihrem Ablauf einmal um bis zu 90 weitere Tage beim Außenministerium verlängern (online oder in einem Regionalbüro), gegen Gebühr. Beantrage früh – ist die Zeit abgelaufen, gibt es keine Verlängerung mehr.',
      visaRun:
        'Visa-Runs funktionieren nicht: Die 90 Tage gelten pro 12 Monate ab der ersten Einreise, und ein Abstecher nach Kolumbien über Rumichaca oder nach Peru über Huaquillas setzt sie nicht zurück. Ein neues Kontingent beginnt erst ein Jahr nach der ersten Einreise.',
      nomad:
        'Die befristete Aufenthaltserlaubnis für digitale Nomaden gilt zwei Jahre. Du brauchst ausländisches Einkommen von mindestens drei Grundgehältern – 1.446 US$ im Monat im Jahr 2026 –, einen Nachweis über Remote-Arbeit und eine Krankenversicherung. Beantragt wird online beim Außenministerium; die Gebühren summieren sich auf einige hundert Dollar.',
      hacks: [
        'Galápagos: Zahl die Transitkontrollkarte TCT (20 US$) vorab online und nimm 200 US$ in bar für die Nationalparkgebühr mit, die bei der Landung auf den Inseln fällig wird. Kinder unter 12 zahlen die Hälfte.',
        'Die 90 Tage gelten pro Jahr ab der ersten Einreise: Zwei Wochen im März und zwei im November zehren vom selben Kontingent. Plane eine lange Reise entsprechend.',
        'Ecuador nutzt den US-Dollar – nimm kleine Scheine mit, auf 50- und 100-Dollar-Noten bekommst du schwer Wechselgeld.',
        'An Landgrenzen hält der Bus nicht von selbst bei der Einwanderung – sag dem Fahrer Bescheid und sorg dafür, dass deine Einreise erfasst wird, sonst gibt es bei der Ausreise ein Bußgeld.',
      ],
      pitfalls: [
        'Wer die 90 Tage überzieht, riskiert Bußgeld und Einreisesperre – und verlängern lässt sich nur vor Ablauf der Frist.',
        'Die Versicherung wird nicht immer geprüft, doch ohne sie kann dir auf Nachfrage die Einreise verweigert werden. Halte eine Police mit Ecuador als Geltungsbereich auf dem Handy bereit.',
        'Seit 2026 prüft Galápagos Rückflugticket, Versicherung und Buchungen in zugelassenen Unterkünften strenger, und die Zahl der Urlaubstage auf den Inseln ist begrenzt.',
      ],
      passports: {
        RU: 'Russen bekommen 90 Tage visumfrei pro 12 Monate. Direktflüge gibt es nicht – geflogen wird über Istanbul, Madrid oder Amsterdam. Russische Karten funktionieren nicht, nimm also US-Dollar in bar mit.',
        CN: 'Seit 2024, als das Visumbefreiungsabkommen ausgesetzt wurde, brauchen chinesische Staatsangehörige ein ecuadorianisches Visum.',
        US: 'US-Bürger reisen 90 Tage pro 12 Monate visumfrei ein; der US-Dollar ist Landeswährung.',
      },
    },
    fr: {
      summary:
        'Les ressortissants de Russie, du Bélarus, du Kazakhstan, d’Ukraine, d’Arménie, de Géorgie, des États-Unis, de l’UE, du Royaume-Uni et de presque toute l’Amérique latine entrent sans visa pour 90 jours sur une période de 12 mois. Les citoyens de Chine, d’Inde, de Cuba, du Venezuela et de quelques autres pays ont besoin d’un visa. La loi impose à tout touriste une assurance santé pour le voyage.',
      apply:
        'Les voyageurs exemptés doivent avoir un passeport valable six mois, un billet retour ou de continuation et une assurance. Les visas (par exemple pour les citoyens chinois ou indiens) se demandent en ligne sur le portail consulaire du ministère équatorien des Affaires étrangères : formulaire, pièces, paiement et, si demandé, un entretien en ligne.',
      extend:
        'Si 90 jours ne suffisent pas, vous pouvez, avant leur échéance, prolonger une fois de 90 jours maximum auprès du ministère (en ligne ou dans un bureau régional), moyennant des frais. Faites-le tôt : une fois le délai écoulé, aucune prolongation n’est accordée.',
      visaRun:
        'Le visa run ne fonctionne pas : les 90 jours se comptent sur 12 mois à partir de la première entrée, et un aller-retour en Colombie par Rumichaca ou au Pérou par Huaquillas ne les remet pas à zéro. Un nouveau quota ne s’ouvre qu’un an après la première entrée.',
      nomad:
        'La résidence temporaire de nomade numérique est délivrée pour deux ans. Il faut des revenus étrangers d’au moins trois salaires de base — 1 446 US$ par mois en 2026 —, une preuve de télétravail et une assurance santé. Demande en ligne auprès du ministère ; les frais atteignent quelques centaines de dollars.',
      hacks: [
        'Galápagos : payez à l’avance en ligne la carte de contrôle de transit TCT (20 US$) et prévoyez 200 US$ en espèces pour le droit d’entrée du parc national, réglé à l’atterrissage sur les îles. Les moins de 12 ans paient moitié prix.',
        'Les 90 jours courent sur un an depuis la première entrée : deux semaines en mars et deux en novembre puisent dans le même quota. Organisez un long voyage en conséquence.',
        'L’Équateur utilise le dollar américain : apportez des petites coupures, la monnaie sur les billets de 50 et 100 US$ est difficile à obtenir.',
        'Aux frontières terrestres, le bus ne s’arrête pas de lui-même à l’immigration : prévenez le chauffeur et faites enregistrer votre entrée, sinon une amende vous attend à la sortie.',
      ],
      pitfalls: [
        'Dépasser les 90 jours expose à une amende et à une interdiction d’entrée, et la prolongation n’est possible qu’avant l’échéance.',
        'L’assurance n’est pas toujours contrôlée, mais si on vous la demande et que vous n’en avez pas, l’entrée peut être refusée. Gardez sur votre téléphone une attestation mentionnant l’Équateur.',
        'Depuis 2026, les Galápagos contrôlent plus strictement le billet retour, l’assurance et les réservations dans des hébergements agréés, et le nombre de jours touristiques sur les îles est plafonné.',
      ],
      passports: {
        RU: 'Les Russes ont 90 jours sans visa par période de 12 mois. Pas de vols directs : on passe par Istanbul, Madrid ou Amsterdam. Les cartes russes ne fonctionnent pas : emportez des dollars en espèces.',
        CN: 'Depuis 2024 et la suspension de l’accord d’exemption, les citoyens chinois ont besoin d’un visa équatorien.',
        US: 'Les Américains entrent sans visa pour 90 jours par période de 12 mois ; le dollar américain est la monnaie locale.',
      },
    },
    it: {
      summary:
        'I cittadini di Russia, Bielorussia, Kazakistan, Ucraina, Armenia, Georgia, Stati Uniti, UE, Regno Unito e quasi tutta l’America Latina entrano senza visto per 90 giorni in un periodo di 12 mesi. I cittadini di Cina, India, Cuba, Venezuela e alcuni altri paesi hanno bisogno del visto. Per legge ogni turista deve avere un’assicurazione sanitaria per il viaggio.',
      apply:
        'Chi è esente ha bisogno di un passaporto valido sei mesi, di un biglietto di ritorno o di proseguimento e dell’assicurazione. I visti (per esempio per cittadini cinesi o indiani) si chiedono online tramite il portale consolare del Ministero degli Esteri ecuadoriano: modulo, documenti, pagamento e, se richiesto, un colloquio online.',
      extend:
        'Se 90 giorni non bastano, prima della scadenza puoi prorogare una volta fino ad altri 90 giorni presso il Ministero degli Esteri (online o in un ufficio zonale), pagando una tassa. Muoviti per tempo: a termine scaduto non si concede proroga.',
      visaRun:
        'Il visa run non funziona: i 90 giorni si contano su 12 mesi dal primo ingresso, e un salto in Colombia da Rumichaca o in Perù da Huaquillas non li azzera. La nuova quota parte solo un anno dopo il primo ingresso.',
      nomad:
        'La residenza temporanea per nomadi digitali viene rilasciata per due anni. Serve un reddito estero di almeno tre salari base — 1.446 US$ al mese nel 2026 —, la prova del lavoro da remoto e un’assicurazione sanitaria. Si presenta online al Ministero degli Esteri; le tasse arrivano a qualche centinaio di dollari.',
      hacks: [
        'Galápagos: paga prima online la carta di controllo del transito TCT (20 US$) e porta 200 US$ in contanti per l’ingresso al parco nazionale, che si paga all’atterraggio sulle isole. I minori di 12 anni pagano metà.',
        'I 90 giorni valgono per un anno dal primo ingresso: due settimane a marzo e due a novembre consumano la stessa quota. Pianifica un viaggio lungo tenendone conto.',
        'L’Ecuador usa il dollaro statunitense: porta banconote di piccolo taglio, perché è difficile avere il resto su 50 e 100 US$.',
        'Ai valichi terrestri l’autobus non si ferma da solo all’immigrazione: chiedilo all’autista e assicurati che registrino l’ingresso, altrimenti all’uscita prendi una multa.',
      ],
      pitfalls: [
        'Superare i 90 giorni comporta una multa e il rischio di divieto d’ingresso, e la proroga si può chiedere solo prima della scadenza.',
        'L’assicurazione non sempre viene controllata, ma se te la chiedono e non ce l’hai possono negarti l’ingresso. Tieni sul telefono una polizza che citi l’Ecuador.',
        'Dal 2026 le Galápagos controllano con più rigore biglietto di ritorno, assicurazione e prenotazioni in strutture autorizzate, e i giorni da turista sulle isole hanno un tetto.',
      ],
      passports: {
        RU: 'I russi hanno 90 giorni senza visto ogni 12 mesi. Non ci sono voli diretti: si vola via Istanbul, Madrid o Amsterdam. Le carte russe non funzionano, quindi porta dollari in contanti.',
        CN: 'Dal 2024, con la sospensione dell’accordo di esenzione, i cittadini cinesi hanno bisogno del visto ecuadoriano.',
        US: 'Gli statunitensi entrano senza visto per 90 giorni ogni 12 mesi; il dollaro USA è la moneta locale.',
      },
    },
  },
};

export default guide;
