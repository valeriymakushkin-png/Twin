import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'CL',
  checked: '2026-10',
  links: { immigration: 'https://serviciomigraciones.cl' },
  forms: [{ name: 'Declaración Jurada SAG/Aduanas', fee: { kind: 'free' } }],
  docs: ['returnTicket', 'finance'],
  passportMonths: 0,
  extend: { days: 90 },
  visaRun: 'yes',
  borders: [
    { name: 'Los Libertadores – Cristo Redentor', to: 'AR', lat: -32.84, lng: -70.115 },
    { name: 'Santiago (SCL) → Mendoza', to: 'AR', lat: -33.393, lng: -70.7858 },
  ],
  waivers: [
    { holds: ['visaUS', 'resUS'], passports: ['IN', 'DO'], status: 'free', days: 90 },
    { holds: ['visaUS', 'visaCA'], passports: ['CN'], status: 'free', days: 90 },
  ],
  hackScope: [null, null, null, ['@MERCOSUR']],
  pitfallScope: [null, null, null],
  text: {
    ru: {
      summary:
        'Граждане России, Украины, Грузии, США, ЕС, Великобритании, Канады, Австралии, Японии, Кореи и почти всей Латинской Америки въезжают без визы на 90 дней. Гражданам Индии и Доминиканы с визой США или грин-картой, а гражданам Китая с визой США или Канады чилийская виза тоже не нужна. Остальным — консульская виза.',
      apply:
        'Безвизовым туристам нужны паспорт, действительный на весь срок, обратный или выездной билет и, по запросу, подтверждение средств. Полиция PDI выдаёт электронную туристическую карту (Tarjeta de Turismo) — сохраните её: она понадобится при выезде, продлении и в отелях. На борту или при прибытии все заполняют декларацию SAG/таможни о продуктах.',
      extend:
        'Туристический срок можно один раз продлить на 90 дней онлайн на сайте миграционной службы SERMIG до истечения первых 90 дней; взимается сбор. Многие вместо этого выезжают в Аргентину или Перу и возвращаются с новыми 90 днями.',
      visaRun:
        'Визаран работает: после выезда даётся новый срок до 90 дней. Классика — автобус из Сантьяго в Мендосу через перевал Лос-Либертадорес (6–8 часов, зимой бывает закрыт из-за снега) или дешёвый рейс из Сантьяго в Мендосу. На севере — маршрутки из Арики в Такну (Перу) за час.',
      hacks: [
        'Иностранцы, платящие за отель в долларах или иностранной картой, освобождаются от НДС 19 % — покажите паспорт и туристическую карту PDI при заселении.',
        'Из Арики в Такну ходят маршрутные такси (colectivos) — самый быстрый и дешёвый визаран на севере, туда и обратно за день.',
        'Перевал Лос-Либертадорес закрывают при снегопадах с июня по сентябрь; проверьте его статус перед поездкой и держите запасной день.',
        'Граждане стран Mercosur въезжают по удостоверению личности.',
      ],
      pitfalls: [
        'Незадекларированные фрукты, мясо, мёд или семена — частая причина штрафа SAG в сотни долларов. Сомневаетесь — указывайте в декларации.',
        'Потеряли туристическую карту PDI? Восстановите её онлайн заранее — без неё на выезде будут задержки.',
        'Продление подают до окончания 90 дней; после — штраф за просрочку и оплата до вылета.',
      ],
      waivers: [
        'Граждане Индии въезжают без визы на 90 дней с визой США любого типа, кроме транзитной C, действительной ещё не меньше 6 месяцев, или с грин-картой. Граждане Доминиканы — с действующей визой США.',
        'Граждане Китая въезжают без визы на 90 дней с действующей визой США или Канады (ориентир — не меньше 6 месяцев действия на дату въезда).',
      ],
      passports: {
        RU: 'Россиянам — 90 дней без визы с продлением ещё на 90. Прямых рейсов нет — летают через Стамбул, Дубай или Мадрид. Российские карты не работают — берите доллары наличными.',
        IN: 'Индийцам виза не нужна при визе США (кроме C, от 6 месяцев действия) или грин-карте; канадская виза для них не подходит.',
        CN: 'Граждане Китая без визы США или Канады оформляют консульскую визу Чили.',
        US: 'Американцы въезжают без визы на 90 дней; сбор reciprocity fee отменён ещё в 2014 году.',
      },
    },
    en: {
      summary:
        'Citizens of Russia, Ukraine, Georgia, the US, the EU, the UK, Canada, Australia, Japan, Korea and nearly all of Latin America enter visa-free for 90 days. Indian and Dominican citizens with a US visa or green card, and Chinese citizens with a US or Canadian visa, need no Chilean visa either. Everyone else needs a consular visa.',
      apply:
        'Visa-exempt travellers need a passport valid for the stay, a return or onward ticket and, if asked, proof of funds. The PDI police issue an electronic tourist card (Tarjeta de Turismo) — keep it: you need it on departure, for extensions and at hotels. Everyone fills in the SAG/customs food declaration on board or on arrival.',
      extend:
        'The tourist stay can be extended once by 90 days online on the SERMIG migration site before your first 90 days end; a fee applies. Many people instead pop over to Argentina or Peru and come back with a fresh 90 days.',
      visaRun:
        'Visa runs work: you get a new stay of up to 90 days after leaving. The classic is the bus from Santiago to Mendoza over the Los Libertadores pass (6–8 hours, sometimes closed by snow in winter) or a cheap Santiago–Mendoza flight. In the north, shared taxis from Arica reach Tacna (Peru) in an hour.',
      hacks: [
        'Foreigners paying for hotels in US dollars or with a foreign card are exempt from the 19% VAT — show your passport and PDI tourist card at check-in.',
        'Shared taxis (colectivos) from Arica to Tacna are the quickest, cheapest visa run in the north — easily there and back in a day.',
        'The Los Libertadores pass closes during snowstorms from June to September; check its status before you go and keep a spare day.',
        'Mercosur citizens can enter with a national ID card.',
      ],
      pitfalls: [
        'Undeclared fruit, meat, honey or seeds are a common reason for SAG fines of several hundred dollars. When in doubt, declare it.',
        'Lost your PDI tourist card? Recover it online in advance — without it you will be held up on departure.',
        'Extensions must be filed before your 90 days end; after that you face an overstay fine payable before you fly.',
      ],
      waivers: [
        'Indian citizens enter visa-free for 90 days with a US visa of any type except a C transit visa, valid for at least six more months, or a green card. Dominican citizens qualify with a valid US visa.',
        'Chinese citizens enter visa-free for 90 days with a valid US or Canadian visa (aim for at least six months’ validity on the day you enter).',
      ],
      passports: {
        RU: 'Russians get 90 days visa-free, extendable by another 90. There are no direct flights — people fly via Istanbul, Dubai or Madrid. Russian cards do not work, so bring US dollars in cash.',
        IN: 'Indians need no visa with a US visa (other than C, valid six months or more) or a green card; a Canadian visa does not count for them.',
        CN: 'Chinese citizens without a US or Canadian visa need a Chilean consular visa.',
        US: 'Americans enter visa-free for 90 days; the reciprocity fee was abolished back in 2014.',
      },
    },
    es: {
      summary:
        'Los ciudadanos de Rusia, Ucrania, Georgia, EE. UU., la UE, Reino Unido, Canadá, Australia, Japón, Corea y casi toda Latinoamérica entran sin visa por 90 días. Los ciudadanos de India y República Dominicana con visa de EE. UU. o green card, y los de China con visa de EE. UU. o Canadá, tampoco necesitan visa chilena. El resto necesita visa consular.',
      apply:
        'Si no necesitas visa, te bastan un pasaporte vigente durante la estancia, un pasaje de regreso o salida y, si te la piden, prueba de fondos. La PDI emite una tarjeta de turismo electrónica: guárdala, porque la necesitarás al salir, para prorrogar y en los hoteles. Todos llenan la declaración jurada del SAG y Aduanas sobre alimentos a bordo o al llegar.',
      extend:
        'La estancia de turista se puede prorrogar una vez por 90 días en línea en el sitio del Servicio Nacional de Migraciones (SERMIG) antes de que terminen los primeros 90; se paga una tasa. Muchos prefieren cruzar a Argentina o Perú y volver con 90 días nuevos.',
      visaRun:
        'Salir y volver funciona: al regresar te dan una nueva estancia de hasta 90 días. Lo clásico es el bus de Santiago a Mendoza por el paso Los Libertadores (6–8 horas; en invierno a veces cierra por nieve) o un vuelo barato Santiago–Mendoza. En el norte, los colectivos de Arica llegan a Tacna (Perú) en una hora.',
      hacks: [
        'Los extranjeros que pagan el hotel en dólares o con tarjeta extranjera quedan exentos del IVA del 19 %: muestra el pasaporte y la tarjeta de turismo de la PDI al registrarte.',
        'Los colectivos de Arica a Tacna son la salida más rápida y barata del norte: ida y vuelta en el día sin problema.',
        'El paso Los Libertadores cierra con temporales de nieve de junio a septiembre; revisa su estado antes de ir y guarda un día de margen.',
        'Los ciudadanos del Mercosur pueden entrar con su documento de identidad.',
      ],
      pitfalls: [
        'Frutas, carne, miel o semillas sin declarar son motivo habitual de multas del SAG de varios cientos de dólares. Ante la duda, declara.',
        '¿Perdiste la tarjeta de turismo de la PDI? Recupérala en línea antes de salir; sin ella tendrás demoras en la frontera.',
        'La prórroga se pide antes de que terminen los 90 días; después, toca pagar multa por exceso de permanencia antes de volar.',
      ],
      waivers: [
        'Los ciudadanos indios entran sin visa por 90 días con una visa estadounidense de cualquier tipo salvo la C de tránsito, vigente al menos seis meses más, o con green card. Los ciudadanos dominicanos califican con una visa estadounidense vigente.',
        'Los ciudadanos chinos entran sin visa por 90 días con una visa vigente de EE. UU. o Canadá (lo prudente es que le queden al menos seis meses el día de entrada).',
      ],
      passports: {
        RU: 'Los rusos tienen 90 días sin visa, prorrogables otros 90. No hay vuelos directos: se vuela vía Estambul, Dubái o Madrid. Las tarjetas rusas no funcionan, así que lleva dólares en efectivo.',
        IN: 'Los indios no necesitan visa con una visa estadounidense (que no sea C y con seis meses o más de vigencia) o green card; la visa canadiense no les sirve.',
        CN: 'Los ciudadanos chinos sin visa de EE. UU. o Canadá necesitan visa consular chilena.',
        US: 'Los estadounidenses entran sin visa por 90 días; la tasa de reciprocidad se eliminó ya en 2014.',
      },
    },
    de: {
      summary:
        'Staatsangehörige Russlands, der Ukraine, Georgiens, der USA, der EU, Großbritanniens, Kanadas, Australiens, Japans, Koreas und fast ganz Lateinamerikas reisen 90 Tage visumfrei ein. Inder und Dominikaner mit US-Visum oder Green Card sowie Chinesen mit US- oder kanadischem Visum brauchen ebenfalls kein chilenisches Visum. Alle anderen benötigen ein Konsularvisum.',
      apply:
        'Visumfreie Reisende brauchen einen für den Aufenthalt gültigen Pass, ein Rück- oder Weiterreiseticket und auf Nachfrage einen Finanznachweis. Die Polizei PDI stellt eine elektronische Touristenkarte (Tarjeta de Turismo) aus – heb sie auf: Du brauchst sie bei der Ausreise, für Verlängerungen und in Hotels. Alle füllen an Bord oder bei der Ankunft die Lebensmittelerklärung von SAG und Zoll aus.',
      extend:
        'Der Touristenaufenthalt lässt sich einmal um 90 Tage online beim Migrationsdienst SERMIG verlängern, bevor die ersten 90 Tage enden; es fällt eine Gebühr an. Viele fahren stattdessen kurz nach Argentinien oder Peru und kommen mit neuen 90 Tagen zurück.',
      visaRun:
        'Visa-Runs funktionieren: Nach der Ausreise gibt es einen neuen Aufenthalt von bis zu 90 Tagen. Klassisch ist der Bus von Santiago nach Mendoza über den Pass Los Libertadores (6–8 Stunden, im Winter mitunter wegen Schnee gesperrt) oder ein günstiger Flug Santiago–Mendoza. Im Norden bringen Sammeltaxis dich in einer Stunde von Arica nach Tacna (Peru).',
      hacks: [
        'Ausländer, die das Hotel in US-Dollar oder mit ausländischer Karte bezahlen, sind von der 19-prozentigen Mehrwertsteuer befreit – zeig beim Check-in Pass und PDI-Touristenkarte.',
        'Sammeltaxis (Colectivos) von Arica nach Tacna sind der schnellste und billigste Visa-Run im Norden – hin und zurück an einem Tag.',
        'Der Pass Los Libertadores wird bei Schneestürmen zwischen Juni und September gesperrt; prüf vorher den Status und plane einen Puffertag ein.',
        'Mercosur-Bürger können mit dem Personalausweis einreisen.',
      ],
      pitfalls: [
        'Nicht deklariertes Obst, Fleisch, Honig oder Saatgut führt oft zu SAG-Bußgeldern von mehreren hundert Dollar. Im Zweifel deklarieren.',
        'PDI-Touristenkarte verloren? Hol sie vorab online wieder – ohne sie gibt es bei der Ausreise Verzögerungen.',
        'Die Verlängerung muss vor Ablauf der 90 Tage beantragt werden; danach zahlst du vor dem Abflug ein Bußgeld wegen Überziehung.',
      ],
      waivers: [
        'Indische Staatsangehörige reisen 90 Tage visumfrei ein mit einem US-Visum jeder Art außer dem C-Transitvisum, das noch mindestens sechs Monate gültig ist, oder mit Green Card. Dominikaner qualifizieren sich mit einem gültigen US-Visum.',
        'Chinesische Staatsangehörige reisen 90 Tage visumfrei ein mit einem gültigen US- oder kanadischen Visum (sicherer mit mindestens sechs Monaten Restgültigkeit am Einreisetag).',
      ],
      passports: {
        RU: 'Russen bekommen 90 Tage visumfrei, verlängerbar um weitere 90. Direktflüge gibt es nicht – geflogen wird über Istanbul, Dubai oder Madrid. Russische Karten funktionieren nicht, nimm also US-Dollar in bar mit.',
        IN: 'Inder brauchen mit US-Visum (außer C, mindestens sechs Monate gültig) oder Green Card kein Visum; ein kanadisches Visum zählt für sie nicht.',
        CN: 'Chinesische Staatsangehörige ohne US- oder kanadisches Visum brauchen ein chilenisches Konsularvisum.',
        US: 'US-Bürger reisen 90 Tage visumfrei ein; die Reciprocity Fee wurde schon 2014 abgeschafft.',
      },
    },
    fr: {
      summary:
        'Les ressortissants de Russie, d’Ukraine, de Géorgie, des États-Unis, de l’UE, du Royaume-Uni, du Canada, de l’Australie, du Japon, de la Corée et de presque toute l’Amérique latine entrent sans visa pour 90 jours. Les citoyens indiens et dominicains titulaires d’un visa américain ou d’une green card, ainsi que les citoyens chinois munis d’un visa américain ou canadien, n’ont pas non plus besoin de visa chilien. Les autres doivent obtenir un visa consulaire.',
      apply:
        'Les voyageurs exemptés doivent présenter un passeport valable pour le séjour, un billet retour ou de continuation et, sur demande, des justificatifs de ressources. La police PDI délivre une carte de tourisme électronique (Tarjeta de Turismo) : conservez-la, elle sert au départ, pour une prolongation et à l’hôtel. Tout le monde remplit à bord ou à l’arrivée la déclaration SAG/douane sur les aliments.',
      extend:
        'Le séjour touristique se prolonge une fois de 90 jours en ligne sur le site du service des migrations SERMIG avant la fin des 90 premiers jours ; des frais s’appliquent. Beaucoup préfèrent un saut en Argentine ou au Pérou pour revenir avec 90 nouveaux jours.',
      visaRun:
        'Le visa run fonctionne : après une sortie, on obtient un nouveau séjour de 90 jours maximum. Le classique : le bus Santiago–Mendoza par le col Los Libertadores (6 à 8 heures, parfois fermé par la neige en hiver) ou un vol bon marché Santiago–Mendoza. Au nord, des taxis collectifs relient Arica à Tacna (Pérou) en une heure.',
      hacks: [
        'Les étrangers qui paient l’hôtel en dollars ou avec une carte étrangère sont exonérés de la TVA de 19 % : présentez passeport et carte de tourisme PDI à l’enregistrement.',
        'Les taxis collectifs (colectivos) d’Arica à Tacna sont le visa run le plus rapide et le moins cher du nord — aller-retour dans la journée.',
        'Le col Los Libertadores ferme lors des tempêtes de neige de juin à septembre ; vérifiez son état avant de partir et gardez un jour de marge.',
        'Les citoyens du Mercosur peuvent entrer avec leur carte d’identité.',
      ],
      pitfalls: [
        'Fruits, viande, miel ou graines non déclarés valent souvent des amendes SAG de plusieurs centaines de dollars. Dans le doute, déclarez.',
        'Carte de tourisme PDI perdue ? Récupérez-la en ligne à l’avance, sinon vous serez retardé à la sortie.',
        'La prolongation doit être demandée avant la fin des 90 jours ; au-delà, une amende pour dépassement est à régler avant le vol.',
      ],
      waivers: [
        'Les citoyens indiens entrent sans visa pour 90 jours avec un visa américain de tout type sauf le visa de transit C, encore valable au moins six mois, ou avec une green card. Les citoyens dominicains sont admis avec un visa américain valide.',
        'Les citoyens chinois entrent sans visa pour 90 jours avec un visa américain ou canadien valide (mieux vaut qu’il reste au moins six mois de validité le jour de l’entrée).',
      ],
      passports: {
        RU: 'Les Russes ont 90 jours sans visa, prolongeables de 90 autres. Pas de vols directs : on passe par Istanbul, Dubaï ou Madrid. Les cartes russes ne fonctionnent pas : emportez des dollars en espèces.',
        IN: 'Les Indiens n’ont pas besoin de visa avec un visa américain (hors C, valable six mois ou plus) ou une green card ; un visa canadien ne compte pas pour eux.',
        CN: 'Les citoyens chinois sans visa américain ou canadien doivent obtenir un visa consulaire chilien.',
        US: 'Les Américains entrent sans visa pour 90 jours ; la reciprocity fee a été supprimée dès 2014.',
      },
    },
    it: {
      summary:
        'I cittadini di Russia, Ucraina, Georgia, Stati Uniti, UE, Regno Unito, Canada, Australia, Giappone, Corea e quasi tutta l’America Latina entrano senza visto per 90 giorni. Anche i cittadini di India e Repubblica Dominicana con visto USA o green card, e quelli cinesi con visto USA o canadese, non hanno bisogno del visto cileno. Tutti gli altri devono ottenere un visto consolare.',
      apply:
        'Chi è esente ha bisogno di un passaporto valido per il soggiorno, di un biglietto di ritorno o di proseguimento e, se richiesto, della prova dei mezzi. La polizia PDI rilascia una carta turistica elettronica (Tarjeta de Turismo): conservala, ti serve all’uscita, per la proroga e negli hotel. Tutti compilano a bordo o all’arrivo la dichiarazione SAG/dogana sugli alimenti.',
      extend:
        'Il soggiorno turistico si proroga una volta di 90 giorni online sul sito del servizio migrazioni SERMIG prima che finiscano i primi 90; si paga una tassa. Molti invece fanno un salto in Argentina o in Perù e rientrano con 90 giorni nuovi.',
      visaRun:
        'Il visa run funziona: dopo l’uscita ricevi un nuovo soggiorno fino a 90 giorni. Il classico è l’autobus da Santiago a Mendoza per il passo Los Libertadores (6–8 ore, d’inverno a volte chiuso per neve) o un volo economico Santiago–Mendoza. Al nord, i taxi collettivi da Arica arrivano a Tacna (Perù) in un’ora.',
      hacks: [
        'Gli stranieri che pagano l’hotel in dollari o con carta estera sono esenti dall’IVA del 19%: mostra passaporto e carta turistica PDI al check-in.',
        'I taxi collettivi (colectivos) da Arica a Tacna sono il visa run più rapido ed economico del nord: andata e ritorno in giornata.',
        'Il passo Los Libertadores chiude durante le tormente di neve da giugno a settembre; controlla lo stato prima di partire e tieni un giorno di margine.',
        'I cittadini del Mercosur possono entrare con la carta d’identità.',
      ],
      pitfalls: [
        'Frutta, carne, miele o semi non dichiarati sono un motivo frequente di multe SAG da diverse centinaia di dollari. Nel dubbio, dichiara.',
        'Hai perso la carta turistica PDI? Recuperala online in anticipo, altrimenti all’uscita avrai ritardi.',
        'La proroga va chiesta prima che finiscano i 90 giorni; dopo, devi pagare una multa per lo sforamento prima del volo.',
      ],
      waivers: [
        'I cittadini indiani entrano senza visto per 90 giorni con un visto USA di qualsiasi tipo tranne il C di transito, valido ancora almeno sei mesi, oppure con la green card. I cittadini dominicani rientrano con un visto USA valido.',
        'I cittadini cinesi entrano senza visto per 90 giorni con un visto valido di Stati Uniti o Canada (meglio se gli restano almeno sei mesi di validità il giorno dell’ingresso).',
      ],
      passports: {
        RU: 'I russi hanno 90 giorni senza visto, prorogabili di altri 90. Non ci sono voli diretti: si vola via Istanbul, Dubai o Madrid. Le carte russe non funzionano, quindi porta dollari in contanti.',
        IN: 'Gli indiani non hanno bisogno del visto con un visto USA (non C, valido almeno sei mesi) o con la green card; il visto canadese per loro non vale.',
        CN: 'I cittadini cinesi senza visto USA o canadese hanno bisogno del visto consolare cileno.',
        US: 'Gli statunitensi entrano senza visto per 90 giorni; la reciprocity fee è stata abolita già nel 2014.',
      },
    },
  },
};

export default guide;
