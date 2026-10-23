import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'KH',
  checked: '2026-10',
  fees: {
    evisa: { kind: 'from', amount: 30, currency: 'USD' },
    voa: { kind: 'fixed', amount: 30, currency: 'USD' },
  },
  stay: { evisa: 30, voa: 30 },
  links: { evisa: 'https://www.evisa.gov.kh' },
  forms: [{ name: 'Cambodia e-Arrival (CeA)', url: 'https://www.arrival.gov.kh', fee: { kind: 'free' } }],
  docs: ['returnTicket'],
  passportMonths: 6,
  extend: { days: 30 },
  visaRun: 'yes',
  borders: [
    { name: 'Bavet – Moc Bai', to: 'VN', lat: 11.0734, lng: 106.1767 },
    { name: 'Prek Chak – Xa Xia (Ha Tien)', to: 'VN', lat: 10.4219, lng: 104.4528 },
  ],
  text: {
    ru: {
      summary:
        'Без визы въезжают только граждане стран АСЕАН. Всем остальным, включая граждан России, ЕС, США и Индии, виза выдаётся очень просто: электронная виза онлайн или виза по прибытии в аэропортах и на основных сухопутных переходах — 30 дней, около 30 $. Перед прилётом заполняют бесплатную электронную карту прибытия e-Arrival.',
      apply:
        'Туристическую e-визу (T) оформляют на evisa.gov.kh: анкета, фото, оплата картой, письмо с визой через 3 рабочих дня; распечатайте её. Цена — 30–36 $ в зависимости от комиссии, проверьте на портале. Виза по прибытии стоит 30 $ наличными, понадобится фото 4×6. Карту e-Arrival заполняют онлайн не раньше чем за 7 дней до прилёта.',
      extend:
        'Туристическую визу T продлевают один раз на 30 дней в Главном управлении иммиграции в Пномпене, на практике — через турагентство или гестхаус за несколько дней до окончания срока. Для долгой жизни берите на границе обычную визу E (около 35 $): её продлевают на 1, 3, 6 или 12 месяцев без выезда.',
      visaRun:
        'Визаран работает: выезд и новый въезд дают новые 30 дней. Сухопутные переходы с Таиландом закрыты с 2025 года после пограничного конфликта — проверяйте их статус перед поездкой. Надёжнее всего выезжать во Вьетнам через Бавет — Мокбай (Пномпень — Хошимин) или Прек Чак — Ха Тиен у Кампота и Кэпа.',
      hacks: [
        'Если собираетесь остаться больше двух месяцев, просите на границе визу E вместо туристической: она стоит на несколько долларов дороже, но продлевается до года без выезда.',
        'Новый аэропорт Пномпеня — Techo International (с 2025 года) — и аэропорт Сием-Рипа принимают и e-визу, и визу по прибытии: при сбое портала можно спокойно купить визу на месте.',
        'Возьмите для визы по прибытии ровную сумму новыми долларами без надрывов: потрёпанные купюры в Камбодже не принимают, а сдачу дают неохотно.',
        'Сухопутный переход Прек Чак — Ха Тиен совмещается с отдыхом: вьетнамский остров Фукуок в часе на пароме, и туда пускают без визы на 30 дней.',
      ],
      pitfalls: [
        'Сайты с «cambodia» и «evisa» в адресе продают e-визу в два-три раза дороже. Официальный портал только evisa.gov.kh.',
        'На сухопутных переходах пограничники и посредники часто просят «сбор за штамп» или «экспресс-оформление» — платите только официальную цену визы.',
        'За каждый день просрочки берут 10 $ при выезде; при долгом оверстее могут задержать до оплаты.',
      ],
      passports: {
        RU: 'Россиянам доступны и e-виза, и виза по прибытии на 30 дней. Российские карты не работают, а цены в стране указаны в долларах — везите наличные доллары в хорошем состоянии.',
        TH: 'Граждане Таиланда въезжают без визы на 14 дней, но сухопутные переходы между странами закрыты с 2025 года — пока что только самолётом.',
      },
    },
    en: {
      summary:
        'Only ASEAN citizens enter visa-free. Everyone else, including Russian, EU, US and Indian citizens, gets a visa very easily: an e-visa online or a visa on arrival at airports and the main land crossings — 30 days for about $30. Before flying in, you fill in the free e-Arrival card.',
      apply:
        'Apply for the tourist (T) e-visa at evisa.gov.kh: form, photo, card payment and the visa arrives by e-mail within three working days; print it. The price is $30–36 depending on the processing fee — check the portal. The visa on arrival costs $30 in cash and you need a 4×6 photo. The e-Arrival card is filed online no earlier than seven days before arrival.',
      extend:
        'The T tourist visa can be extended once by 30 days at the General Department of Immigration in Phnom Penh — in practice through a travel agency or your guesthouse, a few days before it expires. For long stays, ask for the ordinary E visa at the border (about $35): it can be extended by 1, 3, 6 or 12 months without leaving.',
      visaRun:
        'Visa runs work: leaving and re-entering gives you a fresh 30 days. Land crossings with Thailand have been closed since the 2025 border conflict — check their status before you go. The most reliable runs are into Vietnam via Bavet – Moc Bai (Phnom Penh – Ho Chi Minh City) or Prek Chak – Ha Tien near Kampot and Kep.',
      hacks: [
        'If you plan to stay more than two months, ask for the E visa instead of the tourist one at the border: it costs a few dollars more but can be extended for up to a year without leaving.',
        'Phnom Penh’s new Techo International Airport (open since 2025) and Siem Reap airport accept both the e-visa and the visa on arrival — if the portal acts up, you can simply buy the visa on landing.',
        'Bring the exact visa-on-arrival fee in crisp, untorn dollar notes: worn bills are refused in Cambodia and change is given reluctantly.',
        'The Prek Chak – Ha Tien crossing pairs well with a beach break: Vietnam’s Phu Quoc island is an hour away by ferry and admits visitors visa-free for 30 days.',
      ],
      pitfalls: [
        'Sites with “cambodia” and “evisa” in their address sell the e-visa for two to three times the price. The only official portal is evisa.gov.kh.',
        'At land crossings officers and touts often ask for a “stamp fee” or “express processing” — pay only the official visa price.',
        'Overstays cost $10 a day, paid on departure; long overstays can mean being held until you pay.',
      ],
      passports: {
        RU: 'Russian citizens can use both the e-visa and the 30-day visa on arrival. Russian cards do not work and prices are quoted in dollars, so bring US dollar cash in good condition.',
        TH: 'Thai citizens enter visa-free for 14 days, but land crossings between the two countries have been closed since 2025 — for now, fly.',
      },
    },
    es: {
      summary:
        'Solo los ciudadanos de la ASEAN entran sin visado. Todos los demás, incluidos los de Rusia, la UE, EE. UU. y la India, lo consiguen con mucha facilidad: visado electrónico en línea o visado a la llegada en aeropuertos y en los principales pasos terrestres, 30 días por unos 30 $. Antes del vuelo se rellena la tarjeta de llegada electrónica e-Arrival, gratuita.',
      apply:
        'Pide el visado electrónico de turista (T) en evisa.gov.kh: formulario, foto, pago con tarjeta y el visado llega por correo en tres días laborables; imprímelo. Cuesta 30–36 $ según la comisión de tramitación: compruébalo en el portal. El visado a la llegada cuesta 30 $ en efectivo y necesitas una foto de 4×6. La tarjeta e-Arrival se presenta en línea como máximo siete días antes de llegar.',
      extend:
        'El visado de turista T se prorroga una vez 30 días en la Dirección General de Inmigración de Phnom Penh; en la práctica, a través de una agencia o tu guesthouse unos días antes de que venza. Para estancias largas, pide en la frontera el visado ordinario E (unos 35 $): se prorroga por 1, 3, 6 o 12 meses sin salir.',
      visaRun:
        'El visa run funciona: salir y volver a entrar te da 30 días nuevos. Los pasos terrestres con Tailandia están cerrados desde el conflicto fronterizo de 2025: comprueba su estado antes de ir. Lo más fiable es salir a Vietnam por Bavet – Moc Bai (Phnom Penh – Ho Chi Minh) o por Prek Chak – Ha Tien, cerca de Kampot y Kep.',
      hacks: [
        'Si piensas quedarte más de dos meses, pide en la frontera el visado E en lugar del de turista: cuesta unos dólares más, pero se prorroga hasta un año sin salir.',
        'El nuevo aeropuerto de Phnom Penh, Techo International (abierto en 2025), y el de Siem Reap aceptan tanto el visado electrónico como el visado a la llegada: si el portal falla, cómpralo al aterrizar.',
        'Lleva el importe exacto del visado a la llegada en billetes de dólar nuevos y sin roturas: en Camboya rechazan los billetes gastados y dan el cambio a regañadientes.',
        'El paso de Prek Chak – Ha Tien se combina bien con playa: la isla vietnamita de Phu Quoc está a una hora en ferri y admite visitantes sin visado durante 30 días.',
      ],
      pitfalls: [
        'Las webs con «cambodia» y «evisa» en la dirección venden el visado al doble o el triple. El único portal oficial es evisa.gov.kh.',
        'En los pasos terrestres, agentes e intermediarios suelen pedir una «tasa de sello» o una «tramitación exprés»: paga solo el precio oficial del visado.',
        'El exceso de estancia cuesta 10 $ al día, que se pagan al salir; en los casos largos pueden retenerte hasta que pagues.',
      ],
      passports: {
        RU: 'Los ciudadanos rusos pueden usar tanto el visado electrónico como el visado a la llegada de 30 días. Las tarjetas rusas no funcionan y los precios se dan en dólares: lleva efectivo en dólares en buen estado.',
        TH: 'Los ciudadanos tailandeses entran sin visado durante 14 días, pero los pasos terrestres entre ambos países están cerrados desde 2025: de momento, en avión.',
      },
    },
    de: {
      summary:
        'Visumfrei reisen nur ASEAN-Bürger ein. Alle anderen, auch russische, EU-, US- und indische Staatsangehörige, bekommen das Visum sehr einfach: als E-Visum online oder als Visa on Arrival an Flughäfen und den wichtigsten Landübergängen – 30 Tage für rund 30 $. Vor dem Flug füllst du die kostenlose elektronische Ankunftskarte e-Arrival aus.',
      apply:
        'Das Touristen-E-Visum (T) beantragst du auf evisa.gov.kh: Formular, Foto, Kartenzahlung, und das Visum kommt innerhalb von drei Werktagen per E-Mail; druck es aus. Es kostet je nach Bearbeitungsgebühr 30–36 $ – prüfe das Portal. Das Visa on Arrival kostet 30 $ in bar, dazu brauchst du ein Foto im Format 4×6. Die e-Arrival-Karte reichst du frühestens sieben Tage vor der Ankunft online ein.',
      extend:
        'Das Touristenvisum T lässt sich einmal um 30 Tage bei der Einwanderungsbehörde in Phnom Penh verlängern – in der Praxis über ein Reisebüro oder dein Guesthouse, ein paar Tage vor Ablauf. Für lange Aufenthalte lass dir an der Grenze das gewöhnliche E-Visum geben (rund 35 $): Es lässt sich um 1, 3, 6 oder 12 Monate ohne Ausreise verlängern.',
      visaRun:
        'Visa-Runs funktionieren: Aus- und Wiedereinreise bringen neue 30 Tage. Die Landübergänge nach Thailand sind seit dem Grenzkonflikt 2025 geschlossen – prüfe vor der Fahrt ihren Status. Am verlässlichsten geht es nach Vietnam über Bavet – Moc Bai (Phnom Penh – Ho-Chi-Minh-Stadt) oder Prek Chak – Ha Tien bei Kampot und Kep.',
      hacks: [
        'Willst du länger als zwei Monate bleiben, verlang an der Grenze statt des Touristenvisums das E-Visum: Es kostet ein paar Dollar mehr, lässt sich aber bis zu einem Jahr ohne Ausreise verlängern.',
        'Der neue Flughafen von Phnom Penh, Techo International (seit 2025), und der Flughafen Siem Reap akzeptieren E-Visum und Visa on Arrival – streikt das Portal, kaufst du das Visum einfach bei der Landung.',
        'Nimm die Gebühr fürs Visa on Arrival passend in neuen, unbeschädigten Dollarscheinen mit: Abgenutzte Scheine werden in Kambodscha abgelehnt, Wechselgeld gibt es nur widerwillig.',
        'Der Übergang Prek Chak – Ha Tien lässt sich gut mit Strandurlaub verbinden: Vietnams Insel Phu Quoc ist eine Fährstunde entfernt und lässt Gäste 30 Tage visumfrei einreisen.',
      ],
      pitfalls: [
        'Seiten mit „cambodia“ und „evisa“ in der Adresse verkaufen das E-Visum zum zwei- bis dreifachen Preis. Das einzige offizielle Portal ist evisa.gov.kh.',
        'An Landübergängen verlangen Beamte und Schlepper oft eine „Stempelgebühr“ oder „Expressbearbeitung“ – zahl nur den offiziellen Visumpreis.',
        'Überziehen kostet 10 $ pro Tag, zahlbar bei der Ausreise; bei langen Überziehungen kann man bis zur Zahlung festgehalten werden.',
      ],
      passports: {
        RU: 'Russische Staatsangehörige können E-Visum und 30-Tage-Visa on Arrival nutzen. Russische Karten funktionieren nicht, und Preise werden in Dollar angegeben – nimm US-Dollar in bar in gutem Zustand mit.',
        TH: 'Thailändische Staatsangehörige reisen 14 Tage visumfrei ein, doch die Landübergänge zwischen beiden Ländern sind seit 2025 geschlossen – vorerst geht es nur per Flugzeug.',
      },
    },
    fr: {
      summary:
        'Seuls les citoyens de l’ASEAN entrent sans visa. Tous les autres, y compris les Russes, les Européens, les Américains et les Indiens, l’obtiennent très facilement : e-visa en ligne ou visa à l’arrivée dans les aéroports et aux principaux postes terrestres, 30 jours pour environ 30 $. Avant le vol, on remplit la carte d’arrivée électronique e-Arrival, gratuite.',
      apply:
        'Demandez l’e-visa touristique (T) sur evisa.gov.kh : formulaire, photo, paiement par carte, et le visa arrive par e-mail sous trois jours ouvrés ; imprimez-le. Il coûte 30 à 36 $ selon les frais de traitement : vérifiez sur le portail. Le visa à l’arrivée coûte 30 $ en espèces, avec une photo 4×6. La carte e-Arrival se remplit en ligne au plus tôt sept jours avant l’arrivée.',
      extend:
        'Le visa touristique T se prolonge une fois de 30 jours à la Direction générale de l’immigration à Phnom Penh — en pratique via une agence ou votre guesthouse, quelques jours avant l’échéance. Pour un long séjour, demandez à la frontière le visa ordinaire E (environ 35 $) : il se prolonge de 1, 3, 6 ou 12 mois sans sortir du pays.',
      visaRun:
        'Le visa run fonctionne : une sortie suivie d’une nouvelle entrée donne 30 jours de plus. Les postes terrestres avec la Thaïlande sont fermés depuis le conflit frontalier de 2025 : vérifiez leur statut avant de partir. Le plus fiable est de passer au Vietnam par Bavet – Moc Bai (Phnom Penh – Hô Chi Minh-Ville) ou Prek Chak – Ha Tien, près de Kampot et Kep.',
      hacks: [
        'Si vous comptez rester plus de deux mois, demandez à la frontière le visa E plutôt que le visa touristique : quelques dollars de plus, mais il se prolonge jusqu’à un an sans sortir.',
        'Le nouvel aéroport de Phnom Penh, Techo International (ouvert en 2025), et celui de Siem Reap acceptent l’e-visa comme le visa à l’arrivée : si le portail fait des siennes, achetez le visa à l’atterrissage.',
        'Prévoyez le montant exact du visa à l’arrivée en billets de dollar neufs et intacts : les billets usés sont refusés au Cambodge et la monnaie est rendue à contrecœur.',
        'Le poste de Prek Chak – Ha Tien se combine bien avec la plage : l’île vietnamienne de Phu Quoc est à une heure de ferry et accueille les visiteurs sans visa pour 30 jours.',
      ],
      pitfalls: [
        'Des sites avec « cambodia » et « evisa » dans l’adresse vendent l’e-visa deux à trois fois plus cher. Le seul portail officiel est evisa.gov.kh.',
        'Aux postes terrestres, agents et rabatteurs réclament souvent des « frais de tampon » ou un « traitement express » : ne payez que le prix officiel du visa.',
        'Chaque jour de dépassement coûte 10 $, réglés à la sortie ; en cas de long dépassement, on peut vous retenir jusqu’au paiement.',
      ],
      passports: {
        RU: 'Les ressortissants russes peuvent utiliser l’e-visa comme le visa à l’arrivée de 30 jours. Les cartes russes ne fonctionnent pas et les prix sont affichés en dollars : emportez des dollars en espèces en bon état.',
        TH: 'Les ressortissants thaïlandais entrent sans visa pour 14 jours, mais les postes terrestres entre les deux pays sont fermés depuis 2025 : pour l’instant, il faut prendre l’avion.',
      },
    },
    it: {
      summary:
        'Entrano senza visto solo i cittadini ASEAN. Tutti gli altri, compresi russi, europei, statunitensi e indiani, lo ottengono con grande facilità: visto elettronico online o visto all’arrivo negli aeroporti e nei principali valichi terrestri, 30 giorni per circa 30 $. Prima del volo si compila la carta di arrivo elettronica e-Arrival, gratuita.',
      apply:
        'Richiedi il visto elettronico turistico (T) su evisa.gov.kh: modulo, foto, pagamento con carta e il visto arriva per e-mail entro tre giorni lavorativi; stampalo. Costa 30–36 $ a seconda della commissione: verifica sul portale. Il visto all’arrivo costa 30 $ in contanti e serve una foto 4×6. La carta e-Arrival si invia online non prima di sette giorni dall’arrivo.',
      extend:
        'Il visto turistico T si proroga una volta di 30 giorni presso la Direzione generale dell’immigrazione a Phnom Penh; in pratica tramite un’agenzia o la tua guesthouse, qualche giorno prima della scadenza. Per soggiorni lunghi chiedi alla frontiera il visto ordinario E (circa 35 $): si proroga di 1, 3, 6 o 12 mesi senza uscire.',
      visaRun:
        'Il visa run funziona: uscire e rientrare dà altri 30 giorni. I valichi terrestri con la Thailandia sono chiusi dal conflitto di confine del 2025: controlla lo stato prima di partire. Le opzioni più affidabili sono verso il Vietnam, da Bavet – Moc Bai (Phnom Penh – Ho Chi Minh) o da Prek Chak – Ha Tien, vicino a Kampot e Kep.',
      hacks: [
        'Se pensi di restare più di due mesi, chiedi alla frontiera il visto E invece di quello turistico: costa qualche dollaro in più, ma si proroga fino a un anno senza uscire.',
        'Il nuovo aeroporto di Phnom Penh, Techo International (aperto nel 2025), e quello di Siem Reap accettano sia il visto elettronico sia quello all’arrivo: se il portale dà problemi, compra il visto all’atterraggio.',
        'Porta l’importo esatto del visto all’arrivo in banconote in dollari nuove e non strappate: in Cambogia le banconote rovinate vengono rifiutate e il resto si dà malvolentieri.',
        'Il valico di Prek Chak – Ha Tien si abbina bene a qualche giorno di mare: l’isola vietnamita di Phu Quoc è a un’ora di traghetto e accoglie i visitatori senza visto per 30 giorni.',
      ],
      pitfalls: [
        'I siti con «cambodia» ed «evisa» nell’indirizzo vendono il visto elettronico al doppio o al triplo. L’unico portale ufficiale è evisa.gov.kh.',
        'Ai valichi terrestri agenti e procacciatori chiedono spesso una «tassa per il timbro» o un «servizio express»: paga solo il prezzo ufficiale del visto.',
        'L’overstay costa 10 $ al giorno, da pagare all’uscita; per quelli lunghi si può essere trattenuti fino al pagamento.',
      ],
      passports: {
        RU: 'I cittadini russi possono usare sia il visto elettronico sia il visto all’arrivo di 30 giorni. Le carte russe non funzionano e i prezzi sono in dollari: porta contanti in dollari in buono stato.',
        TH: 'I cittadini thailandesi entrano senza visto per 14 giorni, ma i valichi terrestri tra i due paesi sono chiusi dal 2025: per ora si vola.',
      },
    },
  },
};

export default guide;
