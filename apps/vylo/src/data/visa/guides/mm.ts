import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'MM',
  checked: '2026-10',
  fees: { evisa: { kind: 'fixed', amount: 50, currency: 'USD' } },
  stay: { evisa: 28 },
  links: { evisa: 'https://evisa.moip.gov.mm' },
  docs: ['returnTicket', 'booking'],
  passportMonths: 6,
  visaRun: 'no',
  hackScope: [['regime:evisa'], ['JP', 'KR', 'MO'], null],
  pitfallScope: [['regime:evisa'], null, null],
  text: {
    ru: {
      summary:
        'В стране идёт вооружённый конфликт, и большинство сухопутных границ для иностранцев закрыты. Россияне и сингапурцы въезжают без визы на 30 дней, граждане других стран АСЕАН — на 14. Граждане Китая и Индии, а в последнее время и Японии и Кореи, могут получить визу по прибытии; всем остальным, включая ЕС, США и Великобританию, нужна туристическая e-виза за 50 $ на 28 дней.',
      apply:
        'E-визу оформляют только на evisa.moip.gov.mm: анкета, фото, скан паспорта, оплата картой 50 $, письмо-одобрение приходит примерно за 3 рабочих дня. Въехать нужно в течение 90 дней с даты выдачи, виза однократная. Принимают её в аэропортах Янгона, Мандалая и Нейпьидо; сухопутные переходы, даже официально открытые, работают с перебоями.',
      visaRun:
        'Визаран здесь не работает: e-виза однократная и не продлевается, а каждый новый въезд требует новой визы за 50 $. Сухопутные переходы с Таиландом, Индией и Китаем для иностранцев закрыты или небезопасны — въезжайте и выезжайте самолётом.',
      hacks: [
        'Подавайте на e-визу не позже чем за 10 дней до вылета: одобрение обычно приходит за 3 дня, но в праздники и при сбоях портала задерживается.',
        'Режим визы по прибытии для Японии, Кореи и Макао вводился как временный эксперимент — перед поездкой проверьте, продлён ли он, иначе оформите e-визу.',
        'Самые удобные стыковки в Янгон — через Бангкок, Сингапур и Куала-Лумпур: там же можно поменять деньги на чистые доллары, которые нужны в Мьянме.',
      ],
      pitfalls: [
        'Сайты с «myanmar» и «visa» в адресе берут 80–120 $ за ту же e-визу. Официальный портал — только evisa.moip.gov.mm.',
        'Многие страховки не покрывают страны с конфликтом и рекомендацией не ехать — проверьте полис до поездки.',
        'Не фотографируйте военных, блокпосты и правительственные здания: это заканчивается задержанием и удалением снимков, а иногда и депортацией.',
      ],
      passports: {
        RU: 'Для россиян действует безвиз на 30 дней при въезде через аэропорты Янгона, Нейпьидо и Мандалая. Российские карты не работают, банкоматы ненадёжны — везите новые доллары без пометок и надрывов.',
        IN: 'Граждане Индии могут получить визу по прибытии в аэропортах, но сухопутный переход Таму — Моро, как правило, закрыт для иностранцев.',
        CN: 'Граждане Китая получают визу по прибытии в международных аэропортах; сухопутные переходы на севере страны закрываются из-за боёв.',
      },
    },
    en: {
      summary:
        'There is an ongoing armed conflict, and most land borders are closed to foreigners. Russian and Singaporean citizens enter visa-free for 30 days, other ASEAN citizens for 14. Chinese and Indian citizens, and more recently Japanese and Koreans, can get a visa on arrival; everyone else, including the EU, US and UK, needs a $50 tourist e-visa for 28 days.',
      apply:
        'Apply for the e-visa only at evisa.moip.gov.mm: form, photo, passport scan and a $50 card payment; the approval letter arrives in about three working days. You must enter within 90 days of issue and the visa is single-entry. It is accepted at Yangon, Mandalay and Naypyidaw airports; land crossings, even officially open ones, operate erratically.',
      visaRun:
        'Visa runs do not work here: the e-visa is single-entry and cannot be extended, and every new entry needs a new $50 visa. Land crossings with Thailand, India and China are closed to foreigners or unsafe — fly in and out.',
      hacks: [
        'Apply for the e-visa at least 10 days before you fly: approval usually takes three days, but holidays and portal outages cause delays.',
        'Visa on arrival for Japan, Korea and Macau was introduced as a temporary trial — check whether it has been extended before you go, or get the e-visa.',
        'The handiest connections to Yangon are via Bangkok, Singapore and Kuala Lumpur, where you can also pick up the crisp dollar notes Myanmar requires.',
      ],
      pitfalls: [
        'Sites with “myanmar” and “visa” in their address charge $80–120 for the same e-visa. The only official portal is evisa.moip.gov.mm.',
        'Many insurance policies exclude countries with conflict and “do not travel” advisories — check your policy before you go.',
        'Do not photograph soldiers, checkpoints or government buildings: it ends in detention and deleted photos, sometimes deportation.',
      ],
      passports: {
        RU: 'Russian citizens enter visa-free for 30 days when arriving through Yangon, Naypyidaw or Mandalay airports. Russian cards do not work and ATMs are unreliable, so bring new dollar notes without marks or tears.',
        IN: 'Indian citizens can get a visa on arrival at the airports, but the Tamu – Moreh land crossing is usually closed to foreigners.',
        CN: 'Chinese citizens get a visa on arrival at international airports; land crossings in the north close because of fighting.',
      },
    },
    es: {
      summary:
        'Hay un conflicto armado en curso y la mayoría de las fronteras terrestres están cerradas a los extranjeros. Los ciudadanos de Rusia y Singapur entran sin visado durante 30 días, y los del resto de la ASEAN, durante 14. Los de China y la India, y desde hace poco los de Japón y Corea, pueden obtener visado a la llegada; todos los demás, incluidos la UE, EE. UU. y el Reino Unido, necesitan un visado electrónico de turista de 50 $ y 28 días.',
      apply:
        'Pide el visado electrónico solo en evisa.moip.gov.mm: formulario, foto, escaneo del pasaporte y pago de 50 $ con tarjeta; la carta de aprobación llega en unos tres días laborables. Debes entrar en los 90 días siguientes a la emisión y es de una sola entrada. Se acepta en los aeropuertos de Yangón, Mandalay y Naipyidó; los pasos terrestres, incluso los abiertos oficialmente, funcionan de forma irregular.',
      visaRun:
        'Aquí el visa run no funciona: el visado electrónico es de una sola entrada y no se prorroga, y cada nueva entrada exige otro visado de 50 $. Los pasos terrestres con Tailandia, la India y China están cerrados a extranjeros o no son seguros: entra y sal en avión.',
      hacks: [
        'Solicita el visado electrónico al menos 10 días antes del vuelo: la aprobación suele tardar tres días, pero los festivos y las caídas del portal la retrasan.',
        'El visado a la llegada para Japón, Corea y Macao se introdujo como prueba temporal: comprueba antes de viajar si se ha prorrogado o pide el visado electrónico.',
        'Las conexiones más prácticas a Yangón son por Bangkok, Singapur y Kuala Lumpur, donde además puedes conseguir los billetes de dólar impecables que exige Myanmar.',
      ],
      pitfalls: [
        'Las webs con «myanmar» y «visa» en la dirección cobran 80–120 $ por el mismo visado. El único portal oficial es evisa.moip.gov.mm.',
        'Muchos seguros excluyen países en conflicto con recomendación de no viajar: revisa tu póliza antes de ir.',
        'No fotografíes militares, controles ni edificios oficiales: acaba en detención y fotos borradas, a veces en deportación.',
      ],
      passports: {
        RU: 'Los ciudadanos rusos entran sin visado durante 30 días si llegan por los aeropuertos de Yangón, Naipyidó o Mandalay. Las tarjetas rusas no funcionan y los cajeros no son fiables: lleva billetes de dólar nuevos, sin marcas ni roturas.',
        IN: 'Los ciudadanos indios pueden obtener visado a la llegada en los aeropuertos, pero el paso terrestre de Tamu – Moreh suele estar cerrado a extranjeros.',
        CN: 'Los ciudadanos chinos obtienen visado a la llegada en los aeropuertos internacionales; los pasos terrestres del norte se cierran por los combates.',
      },
    },
    de: {
      summary:
        'Im Land herrscht ein bewaffneter Konflikt, die meisten Landgrenzen sind für Ausländer geschlossen. Russische und singapurische Staatsangehörige reisen 30 Tage visumfrei ein, andere ASEAN-Bürger 14 Tage. Chinesen und Inder, seit Kurzem auch Japaner und Koreaner, können ein Visa on Arrival bekommen; alle anderen, auch EU, USA und Großbritannien, brauchen ein Touristen-E-Visum für 50 $ und 28 Tage.',
      apply:
        'Beantrage das E-Visum nur auf evisa.moip.gov.mm: Formular, Foto, Passscan und 50 $ per Karte; das Genehmigungsschreiben kommt nach etwa drei Werktagen. Einreisen musst du innerhalb von 90 Tagen nach Ausstellung, das Visum gilt für eine Einreise. Akzeptiert wird es an den Flughäfen Yangon, Mandalay und Naypyidaw; Landübergänge, selbst offiziell geöffnete, arbeiten unzuverlässig.',
      visaRun:
        'Visa-Runs funktionieren hier nicht: Das E-Visum gilt für eine Einreise und ist nicht verlängerbar, jede neue Einreise braucht ein neues Visum für 50 $. Die Landübergänge nach Thailand, Indien und China sind für Ausländer geschlossen oder unsicher – reise per Flugzeug ein und aus.',
      hacks: [
        'Beantrage das E-Visum mindestens 10 Tage vor dem Flug: Meist dauert die Genehmigung drei Tage, an Feiertagen und bei Portalausfällen länger.',
        'Das Visa on Arrival für Japan, Korea und Macau wurde als befristeter Versuch eingeführt – prüfe vor der Reise, ob es verlängert wurde, sonst nimm das E-Visum.',
        'Die bequemsten Verbindungen nach Yangon führen über Bangkok, Singapur und Kuala Lumpur – dort bekommst du auch die makellosen Dollarscheine, die Myanmar verlangt.',
      ],
      pitfalls: [
        'Seiten mit „myanmar“ und „visa“ in der Adresse verlangen 80–120 $ für dasselbe E-Visum. Das einzige offizielle Portal ist evisa.moip.gov.mm.',
        'Viele Versicherungen schließen Konfliktländer mit Reisewarnung aus – prüfe deine Police vor der Reise.',
        'Fotografiere keine Soldaten, Checkpoints oder Regierungsgebäude: Das endet mit Festnahme und gelöschten Bildern, manchmal mit Abschiebung.',
      ],
      passports: {
        RU: 'Russische Staatsangehörige reisen 30 Tage visumfrei ein, wenn sie über die Flughäfen Yangon, Naypyidaw oder Mandalay ankommen. Russische Karten funktionieren nicht, Geldautomaten sind unzuverlässig – nimm neue Dollarscheine ohne Markierungen oder Risse mit.',
        IN: 'Indische Staatsangehörige können an den Flughäfen ein Visa on Arrival erhalten, der Landübergang Tamu – Moreh ist für Ausländer aber meist geschlossen.',
        CN: 'Chinesische Staatsangehörige bekommen an internationalen Flughäfen ein Visa on Arrival; Landübergänge im Norden schließen wegen der Kämpfe.',
      },
    },
    fr: {
      summary:
        'Un conflit armé est en cours et la plupart des frontières terrestres sont fermées aux étrangers. Les Russes et les Singapouriens entrent sans visa pour 30 jours, les autres citoyens de l’ASEAN pour 14. Les Chinois et les Indiens, et depuis peu les Japonais et les Coréens, peuvent obtenir un visa à l’arrivée ; tous les autres, y compris l’UE, les États-Unis et le Royaume-Uni, ont besoin d’un e-visa touristique à 50 $ pour 28 jours.',
      apply:
        'Demandez l’e-visa uniquement sur evisa.moip.gov.mm : formulaire, photo, scan du passeport et paiement de 50 $ par carte ; la lettre d’approbation arrive en trois jours ouvrés environ. Il faut entrer dans les 90 jours suivant la délivrance, et le visa est à entrée unique. Il est accepté aux aéroports de Yangon, Mandalay et Naypyidaw ; les postes terrestres, même officiellement ouverts, fonctionnent de façon aléatoire.',
      visaRun:
        'Le visa run ne fonctionne pas ici : l’e-visa est à entrée unique et non prolongeable, et chaque nouvelle entrée exige un nouveau visa à 50 $. Les postes terrestres avec la Thaïlande, l’Inde et la Chine sont fermés aux étrangers ou dangereux : entrez et sortez par avion.',
      hacks: [
        'Déposez la demande d’e-visa au moins 10 jours avant le vol : l’accord prend en général trois jours, mais les fêtes et les pannes du portail le retardent.',
        'Le visa à l’arrivée pour le Japon, la Corée et Macao a été introduit à titre d’essai temporaire : vérifiez avant le départ s’il a été prolongé, sinon prenez l’e-visa.',
        'Les correspondances les plus pratiques pour Yangon passent par Bangkok, Singapour et Kuala Lumpur, où vous trouverez aussi les billets de dollar impeccables qu’exige le Myanmar.',
      ],
      pitfalls: [
        'Des sites avec « myanmar » et « visa » dans l’adresse facturent 80 à 120 $ le même e-visa. Le seul portail officiel est evisa.moip.gov.mm.',
        'Beaucoup d’assurances excluent les pays en conflit faisant l’objet d’un avis « ne pas voyager » : vérifiez votre contrat avant de partir.',
        'Ne photographiez ni militaires, ni postes de contrôle, ni bâtiments officiels : cela finit par une arrestation et des photos effacées, parfois par une expulsion.',
      ],
      passports: {
        RU: 'Les ressortissants russes entrent sans visa pour 30 jours en arrivant par les aéroports de Yangon, Naypyidaw ou Mandalay. Les cartes russes ne fonctionnent pas et les distributeurs sont peu fiables : emportez des dollars neufs, sans inscription ni déchirure.',
        IN: 'Les ressortissants indiens peuvent obtenir un visa à l’arrivée dans les aéroports, mais le poste terrestre de Tamu – Moreh est en général fermé aux étrangers.',
        CN: 'Les ressortissants chinois obtiennent un visa à l’arrivée dans les aéroports internationaux ; les postes terrestres du nord ferment en raison des combats.',
      },
    },
    it: {
      summary:
        'Nel paese è in corso un conflitto armato e la maggior parte delle frontiere terrestri è chiusa agli stranieri. I cittadini di Russia e Singapore entrano senza visto per 30 giorni, quelli degli altri paesi ASEAN per 14. Cinesi e indiani, e da poco giapponesi e coreani, possono ottenere il visto all’arrivo; tutti gli altri, compresi UE, Stati Uniti e Regno Unito, hanno bisogno di un visto elettronico turistico da 50 $ per 28 giorni.',
      apply:
        'Richiedi il visto elettronico solo su evisa.moip.gov.mm: modulo, foto, scansione del passaporto e pagamento di 50 $ con carta; la lettera di approvazione arriva in circa tre giorni lavorativi. Devi entrare entro 90 giorni dal rilascio e il visto è a ingresso singolo. È accettato negli aeroporti di Yangon, Mandalay e Naypyidaw; i valichi terrestri, anche quelli ufficialmente aperti, funzionano in modo irregolare.',
      visaRun:
        'Qui il visa run non funziona: il visto elettronico è a ingresso singolo e non si proroga, e ogni nuovo ingresso richiede un nuovo visto da 50 $. I valichi terrestri con Thailandia, India e Cina sono chiusi agli stranieri o insicuri: entra ed esci in aereo.',
      hacks: [
        'Richiedi il visto elettronico almeno 10 giorni prima del volo: di solito l’approvazione arriva in tre giorni, ma festività e blocchi del portale la ritardano.',
        'Il visto all’arrivo per Giappone, Corea e Macao è stato introdotto come prova temporanea: prima di partire verifica se è stato prorogato, altrimenti prendi il visto elettronico.',
        'I collegamenti più comodi per Yangon passano da Bangkok, Singapore e Kuala Lumpur, dove puoi anche procurarti le banconote in dollari impeccabili richieste in Myanmar.',
      ],
      pitfalls: [
        'I siti con «myanmar» e «visa» nell’indirizzo chiedono 80–120 $ per lo stesso visto. L’unico portale ufficiale è evisa.moip.gov.mm.',
        'Molte assicurazioni escludono i paesi in conflitto con l’avviso di non viaggiare: controlla la polizza prima di partire.',
        'Non fotografare militari, posti di blocco o edifici governativi: finisce con il fermo e le foto cancellate, a volte con l’espulsione.',
      ],
      passports: {
        RU: 'I cittadini russi entrano senza visto per 30 giorni arrivando dagli aeroporti di Yangon, Naypyidaw o Mandalay. Le carte russe non funzionano e i bancomat sono inaffidabili: porta banconote in dollari nuove, senza segni né strappi.',
        IN: 'I cittadini indiani possono ottenere il visto all’arrivo negli aeroporti, ma il valico terrestre di Tamu – Moreh è di solito chiuso agli stranieri.',
        CN: 'I cittadini cinesi ottengono il visto all’arrivo negli aeroporti internazionali; i valichi terrestri del nord chiudono a causa dei combattimenti.',
      },
    },
  },
};

export default guide;
