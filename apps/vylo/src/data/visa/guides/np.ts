import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'NP',
  checked: '2026-10',
  fees: { voa: { kind: 'from', amount: 30, currency: 'USD' } },
  stay: { voa: 90 },
  links: { immigration: 'https://www.immigration.gov.np' },
  forms: [{ name: 'Online Tourist Visa form', url: 'https://nepaliport.immigration.gov.np' }],
  passportMonths: 6,
  extend: { days: 15, fee: { kind: 'from', amount: 45, currency: 'USD' } },
  visaRun: 'limited',
  borders: [
    { name: 'Belahiya – Sonauli', to: 'IN', lat: 27.4697, lng: 83.4643 },
    { name: 'Birgunj – Raxaul', to: 'IN', lat: 27.008, lng: 84.8777 },
    { name: 'Kakarbhitta – Panitanki', to: 'IN', lat: 26.6447, lng: 88.158 },
  ],
  hackScope: [['regime:voa'], ['BD', 'BT', 'AF', 'MV', 'LK', 'PK'], null, ['regime:voa']],
  pitfallScope: [['regime:voa'], null, null],
  text: {
    ru: {
      summary:
        'Почти все иностранцы, включая граждан России, США и ЕС, получают туристическую визу по прибытии: 15 дней за 30 $, 30 дней за 50 $ или 90 дней за 125 $. Граждане Индии въезжают без визы, граждане Китая получают визу бесплатно. Гражданам Нигерии, Ганы, Эфиопии, Ирака, Афганистана, Сирии и ещё нескольких стран визу нужно оформить заранее в посольстве.',
      apply:
        'Не раньше чем за 15 дней до прилёта заполните онлайн-анкету на nepaliport.immigration.gov.np и сохраните штрихкод — в аэропорту Катманду останется оплатить сбор и получить наклейку. Платят наличными долларами или картой в банковском окне; терминалы иногда не работают, поэтому держите сумму наличными. Та же виза выдаётся на сухопутных переходах из Индии и в аэропортах Покхары и Бхайрахавы.',
      extend:
        'Визу продлевают в Департаменте иммиграции в Катманду или в офисе в Покхаре: минимум на 15 дней за 45 $, далее 3 $ в день; заявку можно заранее подать онлайн. За календарный год турист может провести в Непале не больше 150 дней.',
      visaRun:
        'Визаран ограничен: выезд в Индию и новая виза возможны, но лимит 150 дней за календарный год от этого не меняется. Обычно проще продлить визу на месте. Если всё же едете, учтите, что по индийской электронной визе обратно в Индию по суше не въехать.',
      hacks: [
        'Для коротких поездок берите 15-дневную визу за 30 $ — продлить её на месте при необходимости проще, чем переплачивать за 30 дней сразу.',
        'Граждане стран СААРК (кроме Индии) раз в календарный год получают первую визу на 30 дней бесплатно.',
        'С апреля 2023 года на большинство треков в нацпарках нужен лицензированный гид; разрешения TIMS и пермиты нацпарков оформляют агентства в Тамеле и Покхаре — подделки встречаются, берите у лицензированных.',
        'Новые международные аэропорты Покхары и Бхайрахавы (рядом с Лумбини) тоже выдают визу по прибытии, и очереди там короче, чем в Катманду.',
      ],
      pitfalls: [
        'Без заранее заполненной онлайн-анкеты придётся стоять в очереди к киоскам в зале прилёта — иногда больше часа.',
        'Просрочка стоит 5 $ в день плюс сбор за продление, а длительное нарушение грозит депортацией.',
        'Экспедиции на вершины выше 6000 м и закрытые районы (Верхний Мустанг, Долпо) требуют отдельных дорогих пермитов — туристической визы недостаточно.',
      ],
      passports: {
        RU: 'Россияне получают визу по прибытии на общих основаниях. Российские Visa и Mastercard не работают: везите доллары или евро, а визовый сбор платите наличными долларами.',
        IN: 'Гражданам Индии виза не нужна: достаточно паспорта или удостоверения избирателя (Aadhaar не принимают).',
        CN: 'Граждане Китая получают туристическую визу бесплатно.',
        US: 'Граждане США получают визу по прибытии; многократная виза на 90 дней удобна для поездок в Индию и обратно.',
      },
    },
    en: {
      summary:
        'Almost all foreigners, including Russian, US and EU citizens, get a tourist visa on arrival: 15 days for $30, 30 days for $50 or 90 days for $125. Indian citizens enter visa-free and Chinese citizens get the visa free of charge. Citizens of Nigeria, Ghana, Ethiopia, Iraq, Afghanistan, Syria and a few other countries must get a visa from an embassy in advance.',
      apply:
        'No earlier than 15 days before arrival, fill in the online form at nepaliport.immigration.gov.np and save the barcode — at Kathmandu airport you then just pay the fee and get the sticker. Pay in cash dollars or by card at the bank counter; the terminals sometimes fail, so carry the amount in cash. The same visa is issued at land crossings from India and at Pokhara and Bhairahawa airports.',
      extend:
        'Extend at the Department of Immigration in Kathmandu or the Pokhara office: at least 15 days for $45, then $3 per day; you can file the application online beforehand. A tourist may spend no more than 150 days in Nepal per calendar year.',
      visaRun:
        'Visa runs are limited: you can pop out to India and get a new visa, but the 150-day calendar-year cap is unaffected. Extending in-country is usually simpler. If you do go, remember that an Indian e-visa does not let you re-enter India overland.',
      hacks: [
        'For short trips, take the 15-day visa for $30 — extending on the spot if needed is easier than overpaying for 30 days up front.',
        'Citizens of SAARC countries (except India) get their first 30-day visa free once per calendar year.',
        'Since April 2023 most national-park treks require a licensed guide; TIMS cards and park permits are arranged by agencies in Thamel and Pokhara — fakes exist, so use licensed ones.',
        'The new international airports at Pokhara and Bhairahawa (near Lumbini) also issue visas on arrival, with shorter queues than Kathmandu.',
      ],
      pitfalls: [
        'Without the online form filled in advance, you queue at the kiosks in the arrivals hall — sometimes for over an hour.',
        'Overstaying costs $5 a day plus the extension fee, and a long overstay can lead to deportation.',
        'Peaks above 6,000 m and restricted areas (Upper Mustang, Dolpo) need separate, expensive permits — a tourist visa is not enough.',
      ],
      passports: {
        RU: 'Russian citizens get a visa on arrival as usual. Russian Visa and Mastercard cards do not work, so bring dollars or euros and pay the visa fee in cash dollars.',
        IN: 'Indian citizens need no visa: a passport or voter ID card is enough (Aadhaar is not accepted).',
        CN: 'Chinese citizens get the tourist visa free of charge.',
        US: 'US citizens get a visa on arrival; the 90-day multiple-entry visa is handy for trips to India and back.',
      },
    },
    es: {
      summary:
        'Casi todos los extranjeros, incluidos rusos, estadounidenses y ciudadanos de la UE, obtienen el visado turístico a la llegada: 15 días por 30 $, 30 días por 50 $ o 90 días por 125 $. Los ciudadanos indios entran sin visado y los chinos lo reciben gratis. Los de Nigeria, Ghana, Etiopía, Irak, Afganistán, Siria y algunos países más deben pedirlo antes en una embajada.',
      apply:
        'Como pronto 15 días antes de llegar, rellena el formulario en línea en nepaliport.immigration.gov.np y guarda el código de barras: en el aeropuerto de Katmandú solo tendrás que pagar y recibir la etiqueta. Se paga en dólares en efectivo o con tarjeta en la ventanilla del banco; los datáfonos a veces fallan, así que lleva el importe en efectivo. El mismo visado se expide en los pasos terrestres desde India y en los aeropuertos de Pokhara y Bhairahawa.',
      extend:
        'La prórroga se pide en el Departamento de Inmigración de Katmandú o en la oficina de Pokhara: mínimo 15 días por 45 $ y luego 3 $ por día; la solicitud puede presentarse antes en línea. Un turista puede pasar como máximo 150 días por año natural en Nepal.',
      visaRun:
        'El visa run tiene límites: puedes salir a India y conseguir un visado nuevo, pero el tope de 150 días por año natural no cambia. Normalmente es más fácil prorrogar en el país. Si vas, recuerda que con el visado electrónico indio no puedes volver a entrar en India por tierra.',
      hacks: [
        'Para viajes cortos, pide el visado de 15 días por 30 $: prorrogarlo allí si hace falta es más fácil que pagar de más por 30 días desde el principio.',
        'Los ciudadanos de países de la SAARC (salvo India) reciben gratis su primer visado de 30 días una vez por año natural.',
        'Desde abril de 2023 casi todos los treks en parques nacionales exigen guía con licencia; la tarjeta TIMS y los permisos de los parques los tramitan agencias de Thamel y Pokhara; hay falsificaciones, así que elige agencias con licencia.',
        'Los nuevos aeropuertos internacionales de Pokhara y Bhairahawa (cerca de Lumbini) también dan visado a la llegada, con colas más cortas que en Katmandú.',
      ],
      pitfalls: [
        'Sin el formulario en línea hecho de antemano, te toca hacer cola en los quioscos de la sala de llegadas, a veces más de una hora.',
        'Quedarte de más cuesta 5 $ al día más la tasa de prórroga, y un exceso largo puede acabar en deportación.',
        'Las cumbres de más de 6000 m y las zonas restringidas (Alto Mustang, Dolpo) exigen permisos aparte y caros: el visado turístico no basta.',
      ],
      passports: {
        RU: 'Los ciudadanos rusos obtienen el visado a la llegada como cualquiera. Las Visa y Mastercard rusas no funcionan: lleva dólares o euros y paga el visado en dólares en efectivo.',
        IN: 'Los ciudadanos indios no necesitan visado: basta el pasaporte o la tarjeta de elector (no se acepta el Aadhaar).',
        CN: 'Los ciudadanos chinos reciben el visado turístico gratis.',
        US: 'Los estadounidenses obtienen el visado a la llegada; el de 90 días y entradas múltiples es práctico para ir y volver de India.',
      },
    },
    de: {
      summary:
        'Fast alle Ausländer, auch Russen, US- und EU-Bürger, bekommen das Touristenvisum bei Ankunft: 15 Tage für 30 $, 30 Tage für 50 $ oder 90 Tage für 125 $. Inder reisen visumfrei ein, Chinesen erhalten das Visum kostenlos. Bürger Nigerias, Ghanas, Äthiopiens, des Irak, Afghanistans, Syriens und einiger weiterer Länder müssen es vorab bei einer Botschaft beantragen.',
      apply:
        'Fülle frühestens 15 Tage vor der Ankunft das Onlineformular auf nepaliport.immigration.gov.np aus und speichere den Barcode – am Flughafen Kathmandu zahlst du dann nur noch und bekommst den Aufkleber. Bezahlt wird bar in Dollar oder per Karte am Bankschalter; die Terminals fallen manchmal aus, halte den Betrag also bar bereit. Dasselbe Visum gibt es an den Landübergängen aus Indien und an den Flughäfen Pokhara und Bhairahawa.',
      extend:
        'Verlängert wird beim Department of Immigration in Kathmandu oder im Büro in Pokhara: mindestens 15 Tage für 45 $, danach 3 $ pro Tag; den Antrag kannst du vorab online stellen. Touristen dürfen pro Kalenderjahr höchstens 150 Tage in Nepal verbringen.',
      visaRun:
        'Visa-Runs sind begrenzt: Du kannst kurz nach Indien und ein neues Visum holen, an der Obergrenze von 150 Tagen pro Kalenderjahr ändert das aber nichts. Meist ist Verlängern im Land einfacher. Wenn du doch fährst: Mit indischem E-Visum kommst du über Land nicht zurück nach Indien.',
      hacks: [
        'Für kurze Reisen nimm das 15-Tage-Visum für 30 $ – vor Ort bei Bedarf zu verlängern ist einfacher, als gleich zu viel für 30 Tage zu zahlen.',
        'Bürger der SAARC-Staaten (außer Indien) bekommen einmal pro Kalenderjahr ihr erstes 30-Tage-Visum kostenlos.',
        'Seit April 2023 brauchen die meisten Trekkings in Nationalparks einen lizenzierten Guide; TIMS-Karte und Parkgenehmigungen besorgen Agenturen in Thamel und Pokhara – es gibt Fälschungen, also nur lizenzierte nutzen.',
        'Die neuen internationalen Flughäfen Pokhara und Bhairahawa (nahe Lumbini) stellen ebenfalls Visa bei Ankunft aus, mit kürzeren Schlangen als in Kathmandu.',
      ],
      pitfalls: [
        'Ohne vorab ausgefülltes Onlineformular stehst du an den Kiosken in der Ankunftshalle an – manchmal über eine Stunde.',
        'Überziehen kostet 5 $ pro Tag plus Verlängerungsgebühr, und langes Überziehen kann zur Abschiebung führen.',
        'Gipfel über 6.000 m und Sperrgebiete (Upper Mustang, Dolpo) brauchen eigene, teure Genehmigungen – ein Touristenvisum reicht nicht.',
      ],
      passports: {
        RU: 'Russische Staatsangehörige bekommen das Visum bei Ankunft wie alle anderen. Russische Visa- und Mastercard-Karten funktionieren nicht – nimm Dollar oder Euro mit und zahl die Visagebühr bar in Dollar.',
        IN: 'Indische Staatsangehörige brauchen kein Visum: Reisepass oder Wählerausweis genügen (Aadhaar wird nicht akzeptiert).',
        CN: 'Chinesische Staatsangehörige erhalten das Touristenvisum kostenlos.',
        US: 'US-Bürger bekommen das Visum bei Ankunft; das 90-Tage-Visum für mehrfache Einreise ist praktisch für Abstecher nach Indien.',
      },
    },
    fr: {
      summary:
        'Presque tous les étrangers, y compris les Russes, les Américains et les citoyens de l’UE, obtiennent un visa touristique à l’arrivée : 15 jours pour 30 $, 30 jours pour 50 $ ou 90 jours pour 125 $. Les Indiens entrent sans visa et les Chinois reçoivent le visa gratuitement. Les ressortissants du Nigeria, du Ghana, d’Éthiopie, d’Irak, d’Afghanistan, de Syrie et de quelques autres pays doivent l’obtenir à l’avance auprès d’une ambassade.',
      apply:
        'Au plus tôt 15 jours avant l’arrivée, remplissez le formulaire en ligne sur nepaliport.immigration.gov.np et gardez le code-barres : à l’aéroport de Katmandou, il ne reste qu’à payer et recevoir la vignette. Le paiement se fait en dollars liquides ou par carte au guichet de la banque ; les terminaux tombent parfois en panne, prévoyez donc la somme en espèces. Le même visa est délivré aux postes terrestres depuis l’Inde et aux aéroports de Pokhara et Bhairahawa.',
      extend:
        'La prolongation se demande au Département de l’immigration à Katmandou ou au bureau de Pokhara : au moins 15 jours pour 45 $, puis 3 $ par jour ; la demande peut être déposée en ligne au préalable. Un touriste ne peut passer plus de 150 jours par année civile au Népal.',
      visaRun:
        'Le visa run est limité : vous pouvez faire un saut en Inde et obtenir un nouveau visa, mais le plafond de 150 jours par année civile reste le même. Prolonger sur place est généralement plus simple. Si vous partez quand même, sachez qu’un e-visa indien ne permet pas de revenir en Inde par la route.',
      hacks: [
        'Pour un court séjour, prenez le visa de 15 jours à 30 $ : prolonger sur place si besoin est plus simple que de payer d’emblée 30 jours.',
        'Les citoyens des pays de l’ASACR (sauf l’Inde) reçoivent gratuitement leur premier visa de 30 jours une fois par année civile.',
        'Depuis avril 2023, la plupart des treks en parc national exigent un guide agréé ; la carte TIMS et les permis de parc s’obtiennent auprès d’agences de Thamel et de Pokhara — il existe des faux, passez par des agences agréées.',
        'Les nouveaux aéroports internationaux de Pokhara et de Bhairahawa (près de Lumbini) délivrent aussi le visa à l’arrivée, avec des files plus courtes qu’à Katmandou.',
      ],
      pitfalls: [
        'Sans formulaire en ligne rempli à l’avance, vous faites la queue aux bornes du hall d’arrivée, parfois plus d’une heure.',
        'Un dépassement coûte 5 $ par jour plus les frais de prolongation, et un long dépassement peut entraîner une expulsion.',
        'Les sommets de plus de 6 000 m et les zones réglementées (Haut-Mustang, Dolpo) exigent des permis spécifiques et coûteux : le visa touristique ne suffit pas.',
      ],
      passports: {
        RU: 'Les citoyens russes obtiennent le visa à l’arrivée comme tout le monde. Les cartes Visa et Mastercard russes ne fonctionnent pas : apportez des dollars ou des euros et réglez le visa en dollars liquides.',
        IN: 'Les citoyens indiens n’ont pas besoin de visa : un passeport ou une carte d’électeur suffit (l’Aadhaar n’est pas accepté).',
        CN: 'Les citoyens chinois reçoivent le visa touristique gratuitement.',
        US: 'Les citoyens américains obtiennent le visa à l’arrivée ; le visa de 90 jours à entrées multiples est pratique pour des allers-retours en Inde.',
      },
    },
    it: {
      summary:
        'Quasi tutti gli stranieri, compresi russi, statunitensi e cittadini UE, ottengono il visto turistico all’arrivo: 15 giorni per 30 $, 30 giorni per 50 $ o 90 giorni per 125 $. Gli indiani entrano senza visto e i cinesi lo ricevono gratis. I cittadini di Nigeria, Ghana, Etiopia, Iraq, Afghanistan, Siria e pochi altri paesi devono chiederlo prima in ambasciata.',
      apply:
        'Non prima di 15 giorni dall’arrivo, compila il modulo online su nepaliport.immigration.gov.np e salva il codice a barre: all’aeroporto di Kathmandu dovrai solo pagare e ricevere l’adesivo. Si paga in dollari in contanti o con carta allo sportello della banca; i terminali a volte non funzionano, quindi tieni la cifra in contanti. Lo stesso visto si ottiene ai valichi terrestri dall’India e negli aeroporti di Pokhara e Bhairahawa.',
      extend:
        'La proroga si chiede al Dipartimento dell’immigrazione di Kathmandu o all’ufficio di Pokhara: almeno 15 giorni per 45 $, poi 3 $ al giorno; la domanda si può presentare prima online. Un turista può trascorrere in Nepal al massimo 150 giorni per anno solare.',
      visaRun:
        'Il visa run ha dei limiti: puoi fare un salto in India e ottenere un nuovo visto, ma il tetto di 150 giorni per anno solare non cambia. Di solito è più semplice prorogare sul posto. Se parti comunque, ricorda che con il visto elettronico indiano non puoi rientrare in India via terra.',
      hacks: [
        'Per viaggi brevi prendi il visto da 15 giorni per 30 $: prorogarlo sul posto se serve è più semplice che pagare subito 30 giorni.',
        'I cittadini dei paesi SAARC (India esclusa) ricevono gratis il primo visto da 30 giorni una volta per anno solare.',
        'Da aprile 2023 quasi tutti i trekking nei parchi nazionali richiedono una guida con licenza; la tessera TIMS e i permessi dei parchi li procurano le agenzie di Thamel e Pokhara; esistono falsi, quindi affidati ad agenzie autorizzate.',
        'I nuovi aeroporti internazionali di Pokhara e Bhairahawa (vicino a Lumbini) rilasciano anch’essi il visto all’arrivo, con code più brevi che a Kathmandu.',
      ],
      pitfalls: [
        'Senza il modulo online compilato prima, ti tocca fare la coda ai chioschi della sala arrivi, a volte per più di un’ora.',
        'Restare oltre il limite costa 5 $ al giorno più la tassa di proroga, e uno sforamento lungo può portare all’espulsione.',
        'Le vette sopra i 6000 m e le zone riservate (Alto Mustang, Dolpo) richiedono permessi a parte e costosi: il visto turistico non basta.',
      ],
      passports: {
        RU: 'I cittadini russi ottengono il visto all’arrivo come tutti. Le Visa e Mastercard russe non funzionano: porta dollari o euro e paga il visto in dollari in contanti.',
        IN: 'I cittadini indiani non hanno bisogno del visto: basta il passaporto o la tessera elettorale (l’Aadhaar non è accettato).',
        CN: 'I cittadini cinesi ricevono il visto turistico gratis.',
        US: 'I cittadini statunitensi ottengono il visto all’arrivo; quello da 90 giorni a ingressi multipli è comodo per andare e tornare dall’India.',
      },
    },
  },
};

export default guide;
