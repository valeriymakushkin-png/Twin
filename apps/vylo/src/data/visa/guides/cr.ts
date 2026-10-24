import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'CR',
  checked: '2026-10',
  links: { immigration: 'https://www.migracion.go.cr' },
  docs: ['returnTicket', 'finance'],
  passportMonths: 0,
  visaRun: 'limited',
  borders: [
    { name: 'Peñas Blancas', to: 'NI', lat: 11.2167, lng: -85.6117 },
    { name: 'Paso Canoas', to: 'PA', lat: 8.5364, lng: -82.8386 },
    { name: 'Sixaola – Guabito', to: 'PA', lat: 9.5226, lng: -82.6205 },
  ],
  nomad: { name: 'Estancia de Trabajadores y Prestadores Remotos de Servicios', months: 12, income: { kind: 'fixed', amount: 3000, currency: 'USD' } },
  waivers: [
    {
      holds: ['visaUS', 'visaCA', 'visaGB', 'visaSchengen', 'visaJP', 'visaKR', 'visaAU', 'resUS', 'resCA', 'resGB', 'resEU', 'resJP', 'resAU'],
      status: 'free',
      days: 30,
    },
  ],
  hackScope: [['regime:required'], null, null, null],
  pitfallScope: [null, null, ['regime:required']],
  text: {
    ru: {
      summary:
        'Граждане США, Канады, ЕС, Великобритании, Японии, Кореи, Бразилии, Мексики, Аргентины и других стран «первой группы» въезжают без визы — офицер может дать до 180 дней. Россиянам, туркам и ряду других стран без визы дают 30 дней. Остальным нужна консульская виза, но действующая многократная виза или ВНЖ США, Канады, Шенгена, Великобритании, Японии, Кореи или Австралии её заменяет.',
      apply:
        'Безвизовым туристам нужны паспорт, обратный или выездной билет в пределах разрешённого срока и, по запросу, подтверждение средств (ориентир — около 100 $ на месяц пребывания). Онлайн-форм больше нет. Число дней пишут на штампе: сверьте его сразу у стойки. Выездной сбор 29 $ при вылете уже включён в авиабилет. Консульскую визу оформляют в посольстве Коста-Рики заранее, обычно за несколько недель.',
      visaRun:
        'Выезд в Никарагуа или Панаму и возвращение работают, но это на усмотрение офицера: тем, кто делает «раны» регулярно, нередко дают 30 дней вместо 180 или требуют билет домой. Главные переходы — Пеньяс-Бланкас (Никарагуа), Пасо-Каноас и Сиксаола — Гуабито (Панама). Минимального перерыва нет, но разумно провести за границей хотя бы 72 часа.',
      nomad:
        'Виза для удалённых работников (закон 10008) даёт год проживания с продлением ещё на год. Нужен доход из-за рубежа не менее 3000 $ в месяц (4000 $ с семьёй), медицинская страховка на весь срок и подача через миграционную службу онлайн или в консульстве. Местный подоходный налог на иностранный доход не взимается.',
      hacks: [
        'Многократная виза США, Канады, Шенгена, Великобритании, Японии, Кореи или Австралии заменяет костариканскую визу для граждан «третьей группы» — например, Индии, Китая или Колумбии.',
        'Выездной билет проверяют ещё при регистрации на рейс. Дешёвый автобусный билет Tica Bus в Панаму или Никарагуа обычно принимают и стоит около 40–60 $.',
        'Хотите все 180 дней? Попросите их у стойки и покажите билет, соответствующий сроку, — офицер вписывает дни вручную, а дольше штампа оставаться нельзя.',
        'При выезде по суше заранее оплатите выездной сбор (около 8 $) — в кассе на границе часто очередь или не принимают карты.',
      ],
      pitfalls: [
        'Просрочка штрафуется — около 100 $ за каждый месяц — и может закончиться запретом на въезд, в три раза превышающим срок нарушения.',
        'Без обратного билета авиакомпания может не посадить на рейс даже при безвизовом режиме.',
        'Для граждан стран, которым нужна виза, американская виза C1/D (транзит/экипаж) не подходит — нужна многократная туристическая или деловая.',
      ],
      waivers: [
        'Граждане стран, которым нужна виза, въезжают без неё до 30 дней с многократной визой (B1/B2, туристической, деловой, учебной) или ВНЖ США, Канады, Шенгена, Великобритании, ЕС, Японии, Кореи или Австралии. На момент въезда у визы должно оставаться не меньше 3 месяцев действия, и она должна быть действительна весь срок поездки. Транзитные визы не подходят.',
      ],
      passports: {
        RU: 'Россиянам без визы дают 30 дней. Прямых рейсов нет — обычно летят через Стамбул, Мадрид или Мехико (для транзита через Мехико нужна SAE или виза). Российские карты не работают — берите доллары наличными.',
        US: 'Американцам обычно дают до 180 дней. Американские водительские права действуют, пока действует штамп въезда.',
        CO: 'Колумбийцам нужна виза, но действующая многократная виза или ВНЖ США, Канады или Шенгена позволяет въехать без неё на 30 дней.',
        IN: 'Гражданам Индии нужна виза; самый простой путь — действующая многократная виза США, Шенгена или Великобритании, с ней пустят на 30 дней.',
      },
    },
    en: {
      summary:
        'Citizens of the US, Canada, the EU, the UK, Japan, Korea, Brazil, Mexico, Argentina and other “Group 1” countries enter visa-free — the officer can grant up to 180 days. Russians, Turks and a few other nationalities get 30 days visa-free. Everyone else needs a consular visa, but a valid multiple-entry visa or residence permit from the US, Canada, Schengen, the UK, Japan, Korea or Australia replaces it.',
      apply:
        'Visa-exempt travellers need a passport, a return or onward ticket within the permitted stay and, if asked, proof of funds (about US$100 per month of stay is the benchmark). There are no online forms any more. The number of days is written on the stamp — check it right at the desk. The US$29 departure tax for flights is already in your airfare. Consular visas are issued by Costa Rican embassies in advance, usually within a few weeks.',
      visaRun:
        'Hopping into Nicaragua or Panama and back works, but at the officer’s discretion: regular border runners often get 30 days instead of 180 or are asked for a ticket home. The main crossings are Peñas Blancas (Nicaragua), Paso Canoas and Sixaola – Guabito (Panama). There is no minimum gap, but staying abroad at least 72 hours is wise.',
      nomad:
        'The remote-worker stay (Law 10008) gives one year of residence, renewable for another. You need foreign income of at least US$3,000 a month (US$4,000 with family), health insurance for the whole period, and you apply online with immigration or at a consulate. Foreign income is not subject to local income tax.',
      hacks: [
        'A multiple-entry US, Canadian, Schengen, UK, Japanese, Korean or Australian visa replaces the Costa Rican visa for “Group 3” nationals — Indian, Chinese or Colombian passports, for example.',
        'Your onward ticket is checked at check-in. A cheap Tica Bus ticket to Panama or Nicaragua, around US$40–60, is usually accepted.',
        'Want the full 180 days? Ask at the desk and show a ticket that matches — the officer writes the days in by hand, and you cannot stay beyond the stamp.',
        'Leaving by land, pay the exit tax (about US$8) in advance — the counters at the border often have queues or refuse cards.',
      ],
      pitfalls: [
        'Overstays are fined — around US$100 per month — and can lead to an entry ban three times as long as the overstay.',
        'Without an onward ticket, the airline may refuse to board you even on a visa-free passport.',
        'For visa-required nationals, a US C1/D (transit/crew) visa does not count — you need a multiple-entry tourist or business visa.',
      ],
      waivers: [
        'Visa-required nationals enter visa-free for up to 30 days with a multiple-entry visa (B1/B2, tourist, business, student) or residence permit from the US, Canada, Schengen, the UK, the EU, Japan, Korea or Australia. The visa needs at least three months of validity left on arrival and must cover the whole trip. Transit visas do not count.',
      ],
      passports: {
        RU: 'Russians get 30 days visa-free. There are no direct flights — people usually fly via Istanbul, Madrid or Mexico City (transiting Mexico City needs the SAE or a visa). Russian cards do not work, so bring US dollars in cash.',
        US: 'Americans usually get up to 180 days. A US driving licence is valid as long as your entry stamp is.',
        CO: 'Colombians need a visa, but a valid multiple-entry visa or residence permit from the US, Canada or Schengen lets them in visa-free for 30 days.',
        IN: 'Indian citizens need a visa; the easiest route is a valid multiple-entry US, Schengen or UK visa, which gets you 30 days.',
      },
    },
    es: {
      summary:
        'Los ciudadanos de EE. UU., Canadá, la UE, Reino Unido, Japón, Corea, Brasil, México, Argentina y otros países del «Grupo 1» entran sin visa: el oficial puede darte hasta 180 días. Rusos, turcos y algunas otras nacionalidades reciben 30 días sin visa. El resto necesita visa consular, pero una visa de entradas múltiples o una residencia vigente de EE. UU., Canadá, Schengen, Reino Unido, Japón, Corea o Australia la sustituye.',
      apply:
        'Si no necesitas visa, basta con el pasaporte, un boleto de regreso o salida dentro del plazo permitido y, si te lo piden, prueba de fondos (la referencia es unos 100 US$ por mes de estancia). Ya no hay formularios en línea. Los días se escriben en el sello: revísalos en la misma ventanilla. El impuesto de salida de 29 US$ para vuelos ya va en el boleto. Las visas consulares las emiten las embajadas de Costa Rica con antelación, normalmente en unas semanas.',
      visaRun:
        'Salir a Nicaragua o Panamá y volver funciona, pero a criterio del oficial: a quien lo hace con frecuencia a menudo le dan 30 días en vez de 180 o le piden un boleto a su país. Los pasos principales son Peñas Blancas (Nicaragua), Paso Canoas y Sixaola – Guabito (Panamá). No hay plazo mínimo, pero conviene pasar al menos 72 horas fuera.',
      nomad:
        'La estancia para trabajadores remotos (Ley 10008) da un año de residencia, renovable por otro. Necesitas ingresos del extranjero de al menos 3000 US$ al mes (4000 US$ con familia) y un seguro médico para todo el periodo; se solicita en línea ante Migración o en un consulado. Los ingresos del extranjero no pagan impuesto sobre la renta local.',
      hacks: [
        'Una visa de entradas múltiples de EE. UU., Canadá, Schengen, Reino Unido, Japón, Corea o Australia sustituye la visa costarricense para nacionalidades del «Grupo 3», como pasaportes de India, China o Colombia.',
        'El boleto de salida se revisa al facturar. Un boleto barato de Tica Bus a Panamá o Nicaragua, de unos 40–60 US$, suele aceptarse.',
        '¿Quieres los 180 días completos? Pídelos en la ventanilla y muestra un boleto acorde: el oficial escribe los días a mano y no puedes quedarte más allá del sello.',
        'Si sales por tierra, paga antes el impuesto de salida (unos 8 US$): en la frontera suele haber cola o no aceptan tarjeta.',
      ],
      pitfalls: [
        'Quedarse de más se multa —unos 100 US$ por mes— y puede acarrear una prohibición de entrada del triple del tiempo excedido.',
        'Sin boleto de salida, la aerolínea puede negarte el embarque aunque no necesites visa.',
        'Para quien necesita visa, la estadounidense C1/D (tránsito/tripulación) no sirve: hace falta una de turismo o negocios de entradas múltiples.',
      ],
      waivers: [
        'Quien necesita visa entra sin ella hasta 30 días con una visa de entradas múltiples (B1/B2, turismo, negocios, estudios) o una residencia de EE. UU., Canadá, Schengen, Reino Unido, la UE, Japón, Corea o Australia. La visa debe tener al menos tres meses de vigencia al llegar y cubrir todo el viaje. Las visas de tránsito no cuentan.',
      ],
      passports: {
        RU: 'Los rusos reciben 30 días sin visa. No hay vuelos directos: se suele volar vía Estambul, Madrid o Ciudad de México (para la conexión en México hace falta la SAE o una visa). Las tarjetas rusas no funcionan, así que lleva dólares en efectivo.',
        US: 'Los estadounidenses suelen recibir hasta 180 días. La licencia de conducir de EE. UU. vale mientras siga vigente el sello de entrada.',
        CO: 'Los colombianos necesitan visa, pero una visa de entradas múltiples o una residencia vigente de EE. UU., Canadá o Schengen les permite entrar sin ella por 30 días.',
        IN: 'Los ciudadanos indios necesitan visa; lo más fácil es una visa vigente de entradas múltiples de EE. UU., Schengen o Reino Unido, que te da 30 días.',
      },
    },
    de: {
      summary:
        'Staatsangehörige der USA, Kanadas, der EU, Großbritanniens, Japans, Koreas, Brasiliens, Mexikos, Argentiniens und weiterer Länder der „Gruppe 1“ reisen visumfrei ein – der Beamte kann bis zu 180 Tage gewähren. Russen, Türken und einige weitere Nationalitäten bekommen 30 Tage visumfrei. Alle anderen brauchen ein Konsularvisum, doch ein gültiges Mehrfachvisum oder ein Aufenthaltstitel der USA, Kanadas, des Schengenraums, Großbritanniens, Japans, Koreas oder Australiens ersetzt es.',
      apply:
        'Visumfreie Reisende brauchen Pass, ein Rück- oder Weiterreiseticket innerhalb der erlaubten Zeit und auf Nachfrage einen Finanznachweis (Richtwert: etwa 100 US$ pro Aufenthaltsmonat). Online-Formulare gibt es nicht mehr. Die Zahl der Tage steht auf dem Stempel – prüf sie direkt am Schalter. Die Ausreisesteuer von 29 US$ für Flüge ist bereits im Ticket enthalten. Konsularvisa stellen costa-ricanische Botschaften vorab aus, meist innerhalb weniger Wochen.',
      visaRun:
        'Ein Abstecher nach Nicaragua oder Panama und zurück funktioniert, liegt aber im Ermessen des Beamten: Wer regelmäßig Grenz-Runs macht, bekommt oft 30 statt 180 Tage oder soll ein Ticket nach Hause zeigen. Die wichtigsten Übergänge sind Peñas Blancas (Nicaragua), Paso Canoas und Sixaola – Guabito (Panama). Eine Mindestpause gibt es nicht, mindestens 72 Stunden im Ausland sind aber klug.',
      nomad:
        'Der Aufenthalt für Remote-Arbeitende (Gesetz 10008) gilt ein Jahr und lässt sich um ein weiteres verlängern. Du brauchst ausländisches Einkommen von mindestens 3.000 US$ im Monat (4.000 US$ mit Familie) und eine Krankenversicherung für den gesamten Zeitraum; beantragt wird online bei der Migrationsbehörde oder im Konsulat. Ausländisches Einkommen ist von der lokalen Einkommensteuer befreit.',
      hacks: [
        'Ein Mehrfachvisum der USA, Kanadas, des Schengenraums, Großbritanniens, Japans, Koreas oder Australiens ersetzt das costa-ricanische Visum für Staatsangehörige der „Gruppe 3“ – etwa mit indischem, chinesischem oder kolumbianischem Pass.',
        'Das Weiterreiseticket wird schon beim Check-in geprüft. Ein günstiges Tica-Bus-Ticket nach Panama oder Nicaragua für etwa 40–60 US$ wird meist akzeptiert.',
        'Du willst die vollen 180 Tage? Bitte am Schalter darum und zeig ein passendes Ticket – der Beamte trägt die Tage von Hand ein, und länger als der Stempel darfst du nicht bleiben.',
        'Bei Ausreise über Land zahlst du die Ausreisesteuer (etwa 8 US$) am besten vorab – an den Grenzschaltern gibt es oft Schlangen oder keine Kartenzahlung.',
      ],
      pitfalls: [
        'Überziehungen kosten ein Bußgeld – rund 100 US$ pro Monat – und können eine Einreisesperre nach sich ziehen, die dreimal so lang ist wie die Überziehung.',
        'Ohne Weiterreiseticket kann dich die Airline auch mit visumfreiem Pass abweisen.',
        'Für Visumpflichtige zählt ein US-Visum C1/D (Transit/Crew) nicht – nötig ist ein Mehrfachvisum für Tourismus oder Geschäftsreisen.',
      ],
      waivers: [
        'Visumpflichtige reisen bis zu 30 Tage visumfrei ein, wenn sie ein Mehrfachvisum (B1/B2, Touristen-, Geschäfts-, Studienvisum) oder einen Aufenthaltstitel der USA, Kanadas, des Schengenraums, Großbritanniens, der EU, Japans, Koreas oder Australiens haben. Das Visum muss bei Ankunft noch mindestens drei Monate gültig sein und die ganze Reise abdecken. Transitvisa zählen nicht.',
      ],
      passports: {
        RU: 'Russen bekommen 30 Tage visumfrei. Direktflüge gibt es nicht – meist geht es über Istanbul, Madrid oder Mexiko-Stadt (zum Umsteigen in Mexiko braucht man die SAE oder ein Visum). Russische Karten funktionieren nicht, nimm also US-Dollar in bar mit.',
        US: 'US-Bürger bekommen meist bis zu 180 Tage. Der US-Führerschein gilt, solange der Einreisestempel gilt.',
        CO: 'Kolumbianer brauchen ein Visum, doch ein gültiges Mehrfachvisum oder ein Aufenthaltstitel der USA, Kanadas oder des Schengenraums erlaubt 30 Tage visumfrei.',
        IN: 'Indische Staatsangehörige brauchen ein Visum; am einfachsten ist ein gültiges Mehrfachvisum der USA, des Schengenraums oder Großbritanniens, damit gibt es 30 Tage.',
      },
    },
    fr: {
      summary:
        'Les citoyens des États-Unis, du Canada, de l’UE, du Royaume-Uni, du Japon, de la Corée, du Brésil, du Mexique, de l’Argentine et des autres pays du « groupe 1 » entrent sans visa — l’agent peut accorder jusqu’à 180 jours. Les Russes, les Turcs et quelques autres nationalités ont 30 jours sans visa. Les autres ont besoin d’un visa consulaire, mais un visa à entrées multiples ou un titre de séjour valide des États-Unis, du Canada, de Schengen, du Royaume-Uni, du Japon, de la Corée ou de l’Australie le remplace.',
      apply:
        'Les voyageurs exemptés doivent présenter passeport, billet retour ou de continuation dans la durée autorisée et, sur demande, des justificatifs de ressources (repère : environ 100 US$ par mois de séjour). Il n’y a plus de formulaire en ligne. Le nombre de jours est inscrit sur le tampon : vérifiez-le au guichet même. La taxe de départ de 29 US$ pour les vols est déjà incluse dans le billet. Les visas consulaires sont délivrés à l’avance par les ambassades du Costa Rica, généralement en quelques semaines.',
      visaRun:
        'Un aller-retour au Nicaragua ou au Panama fonctionne, mais à l’appréciation de l’agent : les habitués des visa runs reçoivent souvent 30 jours au lieu de 180, ou doivent montrer un billet de retour au pays. Les principaux postes sont Peñas Blancas (Nicaragua), Paso Canoas et Sixaola – Guabito (Panama). Aucun délai minimum, mais passer au moins 72 heures à l’étranger est prudent.',
      nomad:
        'Le séjour pour travailleurs à distance (loi 10008) donne un an de résidence, renouvelable une fois. Il faut des revenus étrangers d’au moins 3 000 US$ par mois (4 000 US$ en famille) et une assurance santé pour toute la période ; la demande se fait en ligne auprès de l’immigration ou au consulat. Les revenus étrangers échappent à l’impôt local sur le revenu.',
      hacks: [
        'Un visa à entrées multiples des États-Unis, du Canada, de Schengen, du Royaume-Uni, du Japon, de la Corée ou de l’Australie remplace le visa costaricien pour les ressortissants du « groupe 3 » — passeports indiens, chinois ou colombiens, par exemple.',
        'Le billet de sortie est vérifié dès l’enregistrement. Un billet Tica Bus bon marché pour le Panama ou le Nicaragua, autour de 40–60 US$, est généralement accepté.',
        'Vous voulez les 180 jours ? Demandez-les au guichet en montrant un billet cohérent : l’agent inscrit les jours à la main, et vous ne pouvez pas rester au-delà du tampon.',
        'En sortant par la route, payez la taxe de sortie (environ 8 US$) à l’avance : aux guichets frontaliers, il y a souvent la queue ou pas de paiement par carte.',
      ],
      pitfalls: [
        'Un dépassement de séjour coûte une amende — environ 100 US$ par mois — et peut entraîner une interdiction d’entrée trois fois plus longue que le dépassement.',
        'Sans billet de sortie, la compagnie peut refuser l’embarquement même avec un passeport exempté.',
        'Pour les nationalités soumises au visa, un visa américain C1/D (transit/équipage) ne compte pas : il faut un visa tourisme ou affaires à entrées multiples.',
      ],
      waivers: [
        'Les ressortissants soumis au visa entrent sans visa jusqu’à 30 jours avec un visa à entrées multiples (B1/B2, tourisme, affaires, études) ou un titre de séjour des États-Unis, du Canada, de Schengen, du Royaume-Uni, de l’UE, du Japon, de la Corée ou de l’Australie. Le visa doit avoir au moins trois mois de validité à l’arrivée et couvrir tout le voyage. Les visas de transit ne comptent pas.',
      ],
      passports: {
        RU: 'Les Russes ont 30 jours sans visa. Pas de vols directs : on passe généralement par Istanbul, Madrid ou Mexico (la correspondance à Mexico exige la SAE ou un visa). Les cartes russes ne fonctionnent pas : emportez des dollars en espèces.',
        US: 'Les Américains obtiennent généralement jusqu’à 180 jours. Le permis de conduire américain est valable tant que le tampon d’entrée l’est.',
        CO: 'Les Colombiens ont besoin d’un visa, mais un visa à entrées multiples ou un titre de séjour valide des États-Unis, du Canada ou de Schengen leur permet d’entrer sans visa pour 30 jours.',
        IN: 'Les citoyens indiens ont besoin d’un visa ; le plus simple est un visa à entrées multiples valide des États-Unis, de Schengen ou du Royaume-Uni, qui donne 30 jours.',
      },
    },
    it: {
      summary:
        'I cittadini di Stati Uniti, Canada, UE, Regno Unito, Giappone, Corea, Brasile, Messico, Argentina e degli altri paesi del «Gruppo 1» entrano senza visto: l’agente può concedere fino a 180 giorni. Russi, turchi e poche altre nazionalità ricevono 30 giorni senza visto. Tutti gli altri hanno bisogno del visto consolare, ma un visto a ingressi multipli o un permesso di soggiorno valido di Stati Uniti, Canada, Schengen, Regno Unito, Giappone, Corea o Australia lo sostituisce.',
      apply:
        'Chi è esente ha bisogno di passaporto, biglietto di ritorno o di proseguimento entro il periodo consentito e, se richiesto, prova dei mezzi (il riferimento è circa 100 US$ per mese di soggiorno). Non ci sono più moduli online. I giorni vengono scritti sul timbro: controllali subito allo sportello. La tassa di uscita di 29 US$ per i voli è già nel biglietto. I visti consolari li rilasciano in anticipo le ambasciate del Costa Rica, di solito in qualche settimana.',
      visaRun:
        'Uscire in Nicaragua o a Panamá e rientrare funziona, ma a discrezione dell’agente: a chi lo fa spesso danno di frequente 30 giorni invece di 180 o chiedono un biglietto per casa. I valichi principali sono Peñas Blancas (Nicaragua), Paso Canoas e Sixaola – Guabito (Panamá). Non c’è un intervallo minimo, ma è saggio restare fuori almeno 72 ore.',
      nomad:
        'Il soggiorno per lavoratori da remoto (Legge 10008) dà un anno di residenza, rinnovabile per un altro. Servono un reddito estero di almeno 3.000 US$ al mese (4.000 US$ con la famiglia) e un’assicurazione sanitaria per tutto il periodo; la domanda si presenta online all’immigrazione o in consolato. Il reddito estero non paga l’imposta locale sul reddito.',
      hacks: [
        'Un visto a ingressi multipli di Stati Uniti, Canada, Schengen, Regno Unito, Giappone, Corea o Australia sostituisce il visto costaricano per le nazionalità del «Gruppo 3», per esempio passaporti di India, Cina o Colombia.',
        'Il biglietto di uscita viene controllato già al check-in. Un biglietto economico Tica Bus per Panamá o il Nicaragua, sui 40–60 US$, di solito viene accettato.',
        'Vuoi tutti i 180 giorni? Chiedili allo sportello e mostra un biglietto coerente: l’agente scrive i giorni a mano e non puoi restare oltre il timbro.',
        'Se esci via terra, paga prima la tassa di uscita (circa 8 US$): agli sportelli di frontiera spesso c’è coda o non accettano carte.',
      ],
      pitfalls: [
        'Lo sforamento si paga con una multa, circa 100 US$ al mese, e può comportare un divieto d’ingresso pari al triplo del periodo sforato.',
        'Senza biglietto di uscita la compagnia può negarti l’imbarco anche se non ti serve il visto.',
        'Per chi ha bisogno del visto, il visto USA C1/D (transito/equipaggio) non vale: serve un visto turistico o d’affari a ingressi multipli.',
      ],
      waivers: [
        'Chi ha bisogno del visto entra senza fino a 30 giorni con un visto a ingressi multipli (B1/B2, turistico, d’affari, di studio) o un permesso di soggiorno di Stati Uniti, Canada, Schengen, Regno Unito, UE, Giappone, Corea o Australia. Il visto deve avere almeno tre mesi di validità all’arrivo e coprire tutto il viaggio. I visti di transito non valgono.',
      ],
      passports: {
        RU: 'I russi ricevono 30 giorni senza visto. Non ci sono voli diretti: di solito si passa da Istanbul, Madrid o Città del Messico (per lo scalo in Messico serve la SAE o un visto). Le carte russe non funzionano, quindi porta dollari in contanti.',
        US: 'Gli statunitensi ricevono di solito fino a 180 giorni. La patente USA è valida finché è valido il timbro d’ingresso.',
        CO: 'I colombiani hanno bisogno del visto, ma un visto a ingressi multipli o un permesso valido di Stati Uniti, Canada o Schengen consente di entrare senza per 30 giorni.',
        IN: 'I cittadini indiani hanno bisogno del visto; la via più semplice è un visto valido a ingressi multipli di Stati Uniti, Schengen o Regno Unito, che dà 30 giorni.',
      },
    },
  },
};

export default guide;
