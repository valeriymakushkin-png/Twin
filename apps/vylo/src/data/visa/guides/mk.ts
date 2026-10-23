import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'MK',
  checked: '2026-10',
  fees: { visa: { kind: 'from', amount: 35, currency: 'EUR' } },
  stay: { visa: 90 },
  links: { immigration: 'https://mfa.gov.mk' },
  docs: ['booking', 'returnTicket'],
  passportMonths: 3,
  rule: { days: 90, window: 180 },
  visaRun: 'limited',
  waivers: [
    {
      holds: ['visaSchengen', 'visaUS', 'visaGB', 'visaCA', 'resEU', 'resUS', 'resGB', 'resCA'],
      status: 'free',
      days: 15,
    },
  ],
  text: {
    ru: {
      summary:
        'Граждане ЕС, Великобритании, США, Канады, Австралии, Украины, Турции, Японии и большей части Латинской Америки въезжают без визы на 90 дней в течение 180. Россиянам, белорусам, казахстанцам, индийцам, китайцам и другим «визовым» гражданам нужна консульская виза — или действующая виза либо ВНЖ Шенгена, США, Великобритании или Канады для короткой поездки до 15 дней.',
      apply:
        'Визу оформляют в посольстве или консульстве Северной Македонии: анкета, фото, страховка, брони, обратный билет и выписка из банка. Краткосрочную визу типа C обычно выдают за одну-две недели, сбор — от 35 €. Если в вашей стране нет представительства, заявления принимает ближайшее посольство, обслуживающее регион.',
      visaRun:
        'Безвизовые гости ограничены правилом 90/180, поэтому поездка в Косово или Албанию ничего не обнуляет: после 90 дней нужно провести 90 дней за пределами страны.',
      hacks: [
        'Дни в Северной Македонии не идут в шенгенский счёт — для американцев, британцев и канадцев это ещё 90 дней в Европе после Шенгена.',
        'Охрид стоит у границы с Албанией: через переход Свети-Наум — Тушемишт до албанского Поградеца около 30 минут. Перед поездкой проверьте, что ваш паспорт пускают в обе страны.',
        'Аэропорт Охрида принимает лоукостеры из Европы и рейсы из Стамбула — прилёт сюда вместо Скопье экономит три часа дороги, если вы едете на озеро.',
      ],
      pitfalls: [
        'Регистрация по месту проживания в течение 24 часов обязательна. Отели делают её сами, частный хозяин должен зарегистрировать вас в полиции — за её отсутствие штрафуют.',
        'Безвизовый въезд по чужой визе даёт максимум 15 дней и не дольше срока действия этой визы. Решение правительства о таком въезде продлевают ежегодно — проверьте, действует ли оно на даты поездки.',
        'Для более долгой поездки по чужой визе не рассчитывайте на продление на месте — сразу оформляйте македонскую визу.',
      ],
      waivers: [
        'Действующая виза (надёжнее всего многократная) или ВНЖ Шенгена, ЕС, США, Великобритании или Канады: въезд без визы и до 15 дней пребывания, но не дольше срока действия документа. Решение продлевается ежегодно, проверьте перед поездкой.',
      ],
      passports: {
        RU: 'Россиянам нужна виза (посольство в Москве) — или действующая виза либо ВНЖ Шенгена, США, Великобритании или Канады для поездки до 15 дней. Прямых рейсов нет — через Стамбул или Белград. Российские карты не работают, берите евро.',
        IN: 'Гражданам Индии нужна виза, но с визой или ВНЖ Шенгена, США, Великобритании или Канады можно приехать на 15 дней без неё.',
        CN: 'Гражданам Китая нужна виза; правило о въезде по шенгенской, американской, британской или канадской визе действует и для них.',
        US: 'Граждане США — 90 дней в течение 180 без визы.',
      },
    },
    en: {
      summary:
        'Citizens of the EU, the UK, the US, Canada, Australia, Ukraine, Turkey, Japan and most of Latin America visit visa-free for 90 days in 180. Russians, Belarusians, Kazakhs, Indians, Chinese and other visa nationals need a consular visa — or a valid Schengen, US, UK or Canadian visa or residence permit for a short trip of up to 15 days.',
      apply:
        'Apply at a North Macedonian embassy or consulate: form, photo, insurance, bookings, return ticket and bank statement. A short-stay C visa is usually issued in one to two weeks, with fees from €35. If your country has no mission, the nearest embassy covering your region takes applications.',
      visaRun:
        'Visa-free visitors are limited by the 90/180 rule, so a trip to Kosovo or Albania resets nothing: after 90 days you must spend 90 outside the country.',
      hacks: [
        'Days in North Macedonia don’t count towards Schengen — for Americans, Brits and Canadians that means another 90 days in Europe after Schengen.',
        'Ohrid sits on the Albanian border: through the Sveti Naum – Tushemisht crossing it’s about 30 minutes to Pogradec in Albania. Check that your passport is admitted to both countries before you go.',
        'Ohrid airport gets low-cost flights from Europe and flights from Istanbul — landing there instead of Skopje saves a three-hour drive if the lake is your goal.',
      ],
      pitfalls: [
        'Registering your address within 24 hours is mandatory. Hotels do it for you; a private host must register you with the police, and skipping it means a fine.',
        'Visa-free entry on another country’s visa gives at most 15 days and no longer than that visa is valid. The government decision behind it is renewed every year — check it covers your travel dates.',
        'For a longer trip, don’t count on extending a waiver stay on the spot — apply for a Macedonian visa from the start.',
      ],
      waivers: [
        'A valid visa (a multiple-entry one is the safest bet) or a residence permit of a Schengen or EU country, the US, the UK or Canada: entry without a visa and up to 15 days’ stay, never beyond the document’s expiry. The decision is renewed yearly, so check before you travel.',
      ],
      passports: {
        RU: 'Russians need a visa (embassy in Moscow) — or a valid Schengen, US, UK or Canadian visa or residence permit for a trip of up to 15 days. There are no direct flights; connect via Istanbul or Belgrade. Russian cards don’t work, so bring euros.',
        IN: 'Indian citizens need a visa, but with a Schengen, US, UK or Canadian visa or residence permit they can come for 15 days without one.',
        CN: 'Chinese citizens need a visa; the rule for entering on a Schengen, US, UK or Canadian visa applies to them as well.',
        US: 'US citizens get 90 days in 180 visa-free.',
      },
    },
    es: {
      summary:
        'Los ciudadanos de la UE, Reino Unido, EE. UU., Canadá, Australia, Ucrania, Turquía, Japón y casi toda Latinoamérica entran sin visado 90 días cada 180. Rusos, bielorrusos, kazajos, indios, chinos y demás nacionalidades sujetas a visado necesitan un visado consular, o bien un visado o permiso de residencia vigente de Schengen, EE. UU., Reino Unido o Canadá para un viaje corto de hasta 15 días.',
      apply:
        'Se solicita en una embajada o consulado de Macedonia del Norte: formulario, foto, seguro, reservas, billete de vuelta y extracto bancario. El visado C de corta duración suele expedirse en una o dos semanas, con tasas desde 35 €. Si tu país no tiene representación, tramita la solicitud la embajada más cercana que cubra tu región.',
      visaRun:
        'Quienes entran sin visado están limitados por la regla de 90/180, así que un viaje a Kosovo o Albania no pone nada a cero: tras 90 días hay que pasar 90 fuera del país.',
      hacks: [
        'Los días en Macedonia del Norte no cuentan para Schengen: para estadounidenses, británicos y canadienses son otros 90 días en Europa después de Schengen.',
        'Ohrid está junto a la frontera albanesa: por el paso de Sveti Naum – Tushemisht llegas a Pogradec (Albania) en unos 30 minutos. Antes, comprueba que tu pasaporte te permite entrar en ambos países.',
        'Al aeropuerto de Ohrid llegan vuelos low cost desde Europa y desde Estambul: aterrizar allí en vez de en Skopie te ahorra tres horas de carretera si vas al lago.',
      ],
      pitfalls: [
        'Registrar tu domicilio en 24 horas es obligatorio. Los hoteles lo hacen por ti; un anfitrión particular debe registrarte en la policía, y no hacerlo supone multa.',
        'Entrar sin visado con el visado de otro país da como máximo 15 días y nunca más de lo que dure ese visado. La decisión del Gobierno que lo permite se renueva cada año: comprueba que cubre tus fechas.',
        'Para un viaje más largo no cuentes con prorrogar la estancia sobre el terreno: pide desde el principio un visado macedonio.',
      ],
      waivers: [
        'Un visado vigente (lo más seguro es que sea de entradas múltiples) o un permiso de residencia de un país Schengen o de la UE, EE. UU., Reino Unido o Canadá: entrada sin visado y hasta 15 días de estancia, nunca más allá de la caducidad del documento. La decisión se renueva cada año, compruébala antes de viajar.',
      ],
      passports: {
        RU: 'Los ciudadanos rusos necesitan visado (embajada en Moscú) o un visado o permiso de residencia vigente de Schengen, EE. UU., Reino Unido o Canadá para un viaje de hasta 15 días. No hay vuelos directos: vía Estambul o Belgrado. Las tarjetas rusas no funcionan, lleva euros.',
        IN: 'Los ciudadanos indios necesitan visado, pero con un visado o permiso de residencia de Schengen, EE. UU., Reino Unido o Canadá pueden ir 15 días sin él.',
        CN: 'Los ciudadanos chinos necesitan visado; la norma de entrada con visado Schengen, estadounidense, británico o canadiense también se les aplica.',
        US: 'Los ciudadanos estadounidenses tienen 90 días cada 180 sin visado.',
      },
    },
    de: {
      summary:
        'Bürger der EU, Großbritanniens, der USA, Kanadas, Australiens, der Ukraine, der Türkei, Japans und fast ganz Lateinamerikas reisen 90 Tage innerhalb von 180 visumfrei ein. Russen, Belarussen, Kasachen, Inder, Chinesen und andere Visumpflichtige brauchen ein Konsularvisum – oder ein gültiges Visum bzw. einen Aufenthaltstitel des Schengenraums, der USA, Großbritanniens oder Kanadas für eine kurze Reise von bis zu 15 Tagen.',
      apply:
        'Beantragt wird bei einer Botschaft oder einem Konsulat Nordmazedoniens: Formular, Foto, Versicherung, Buchungen, Rückflugticket und Kontoauszug. Ein C-Visum für kurze Aufenthalte wird meist in ein bis zwei Wochen ausgestellt, Gebühren ab 35 €. Hat dein Land keine Vertretung, nimmt die nächstgelegene, für deine Region zuständige Botschaft Anträge an.',
      visaRun:
        'Für visumfreie Besucher gilt die 90/180-Regel, ein Abstecher in den Kosovo oder nach Albanien setzt also nichts zurück: Nach 90 Tagen musst du 90 Tage außerhalb des Landes verbringen.',
      hacks: [
        'Tage in Nordmazedonien zählen nicht für Schengen – für Amerikaner, Briten und Kanadier sind das weitere 90 Tage in Europa nach dem Schengenraum.',
        'Ohrid liegt an der albanischen Grenze: Über den Übergang Sveti Naum – Tushemisht bist du in etwa 30 Minuten im albanischen Pogradec. Prüfe vorher, ob dein Pass in beide Länder passt.',
        'Der Flughafen Ohrid wird von Billigfliegern aus Europa und aus Istanbul angeflogen – wer zum See will, spart sich so drei Stunden Fahrt von Skopje.',
      ],
      pitfalls: [
        'Die Anmeldung der Adresse innerhalb von 24 Stunden ist Pflicht. Hotels erledigen das; private Gastgeber müssen dich bei der Polizei anmelden, sonst droht ein Bußgeld.',
        'Die visumfreie Einreise mit dem Visum eines anderen Landes bringt höchstens 15 Tage und nie mehr, als dieses Visum gültig ist. Der Regierungsbeschluss dazu wird jedes Jahr verlängert – prüfe, ob er deine Reisedaten abdeckt.',
        'Für eine längere Reise rechne nicht damit, den Aufenthalt vor Ort zu verlängern – beantrage von Anfang an ein mazedonisches Visum.',
      ],
      waivers: [
        'Ein gültiges Visum (am sichersten ein Mehrfachvisum) oder ein Aufenthaltstitel eines Schengen- oder EU-Staats, der USA, Großbritanniens oder Kanadas: Einreise ohne Visum und bis zu 15 Tage Aufenthalt, nie über das Ablaufdatum des Dokuments hinaus. Der Beschluss wird jährlich verlängert, prüfe ihn vor der Reise.',
      ],
      passports: {
        RU: 'Russische Staatsangehörige brauchen ein Visum (Botschaft in Moskau) – oder ein gültiges Visum bzw. einen Aufenthaltstitel des Schengenraums, der USA, Großbritanniens oder Kanadas für eine Reise bis zu 15 Tagen. Direktflüge gibt es nicht, man fliegt über Istanbul oder Belgrad. Russische Karten funktionieren nicht, nimm Euro mit.',
        IN: 'Indische Staatsangehörige brauchen ein Visum, mit einem Schengen-, US-, UK- oder kanadischen Visum bzw. Aufenthaltstitel können sie aber 15 Tage ohne einreisen.',
        CN: 'Chinesische Staatsangehörige brauchen ein Visum; die Regel für die Einreise mit Schengen-, US-, UK- oder kanadischem Visum gilt auch für sie.',
        US: 'US-Bürger haben 90 Tage innerhalb von 180 visumfrei.',
      },
    },
    fr: {
      summary:
        'Les citoyens de l’UE, du Royaume-Uni, des États-Unis, du Canada, de l’Australie, de l’Ukraine, de la Turquie, du Japon et de presque toute l’Amérique latine entrent sans visa pour 90 jours sur 180. Les Russes, Biélorusses, Kazakhs, Indiens, Chinois et autres ressortissants soumis à visa doivent obtenir un visa consulaire, ou présenter un visa ou titre de séjour valide Schengen, américain, britannique ou canadien pour un court séjour de 15 jours maximum.',
      apply:
        'La demande se fait auprès d’une ambassade ou d’un consulat de Macédoine du Nord : formulaire, photo, assurance, réservations, billet retour et relevé bancaire. Le visa C de court séjour est généralement délivré en une à deux semaines, à partir de 35 €. Si votre pays n’a pas de représentation, l’ambassade la plus proche compétente pour votre région reçoit les demandes.',
      visaRun:
        'Les visiteurs exemptés de visa sont soumis à la règle des 90/180 : un aller-retour au Kosovo ou en Albanie ne remet rien à zéro. Après 90 jours, il faut en passer 90 hors du pays.',
      hacks: [
        'Les jours passés en Macédoine du Nord ne comptent pas pour Schengen : pour les Américains, Britanniques et Canadiens, ce sont 90 jours de plus en Europe après Schengen.',
        'Ohrid est à la frontière albanaise : par le poste de Sveti Naum – Tushemisht, Pogradec (Albanie) est à une trentaine de minutes. Vérifiez avant que votre passeport vous permet d’entrer dans les deux pays.',
        'L’aéroport d’Ohrid reçoit des vols low cost d’Europe et des vols d’Istanbul : y atterrir plutôt qu’à Skopje évite trois heures de route si vous visez le lac.',
      ],
      pitfalls: [
        'Déclarer son adresse sous 24 heures est obligatoire. Les hôtels s’en chargent ; un hôte privé doit vous enregistrer auprès de la police, faute de quoi c’est l’amende.',
        'L’entrée sans visa grâce au visa d’un autre pays donne au maximum 15 jours, et jamais plus que la validité de ce visa. La décision gouvernementale qui l’autorise est renouvelée chaque année : vérifiez qu’elle couvre vos dates.',
        'Pour un séjour plus long, ne comptez pas prolonger sur place : demandez d’emblée un visa macédonien.',
      ],
      waivers: [
        'Un visa valide (de préférence à entrées multiples) ou un titre de séjour d’un pays Schengen ou de l’UE, des États-Unis, du Royaume-Uni ou du Canada : entrée sans visa et séjour jusqu’à 15 jours, jamais au-delà de l’expiration du document. La décision est renouvelée chaque année, vérifiez-la avant de partir.',
      ],
      passports: {
        RU: 'Les ressortissants russes ont besoin d’un visa (ambassade à Moscou), ou d’un visa ou titre de séjour valide Schengen, américain, britannique ou canadien pour un séjour de 15 jours maximum. Pas de vol direct : passez par Istanbul ou Belgrade. Les cartes russes ne fonctionnent pas, prévoyez des euros.',
        IN: 'Les citoyens indiens ont besoin d’un visa, mais avec un visa ou titre de séjour Schengen, américain, britannique ou canadien, ils peuvent venir 15 jours sans.',
        CN: 'Les citoyens chinois ont besoin d’un visa ; la règle d’entrée avec un visa Schengen, américain, britannique ou canadien s’applique aussi à eux.',
        US: 'Les citoyens américains ont 90 jours sur 180 sans visa.',
      },
    },
    it: {
      summary:
        'I cittadini di UE, Regno Unito, Stati Uniti, Canada, Australia, Ucraina, Turchia, Giappone e quasi tutta l’America Latina entrano senza visto per 90 giorni ogni 180. Russi, bielorussi, kazaki, indiani, cinesi e gli altri soggetti a visto hanno bisogno di un visto consolare, oppure di un visto o permesso di soggiorno valido di Schengen, Stati Uniti, Regno Unito o Canada per un breve viaggio fino a 15 giorni.',
      apply:
        'Si chiede in un’ambasciata o in un consolato della Macedonia del Nord: modulo, foto, assicurazione, prenotazioni, biglietto di ritorno ed estratto conto. Il visto C per soggiorni brevi di solito arriva in una o due settimane, con tasse da 35 €. Se nel tuo paese non c’è una rappresentanza, le domande le riceve l’ambasciata più vicina competente per la tua regione.',
      visaRun:
        'Chi entra senza visto è limitato dalla regola dei 90/180, quindi una puntata in Kosovo o in Albania non azzera nulla: dopo 90 giorni devi passarne 90 fuori dal paese.',
      hacks: [
        'I giorni in Macedonia del Nord non contano per Schengen: per statunitensi, britannici e canadesi sono altri 90 giorni in Europa dopo Schengen.',
        'Ohrid è al confine con l’Albania: dal valico di Sveti Naum – Tushemisht si arriva a Pogradec, in Albania, in circa 30 minuti. Prima verifica che il tuo passaporto ti consenta di entrare in entrambi i paesi.',
        'All’aeroporto di Ohrid arrivano voli low cost dall’Europa e da Istanbul: atterrare lì invece che a Skopje fa risparmiare tre ore di strada se la meta è il lago.',
      ],
      pitfalls: [
        'Registrare il proprio indirizzo entro 24 ore è obbligatorio. Gli hotel lo fanno per te; un host privato deve registrarti in polizia, altrimenti scatta la multa.',
        'L’ingresso senza visto con il visto di un altro paese dà al massimo 15 giorni e mai oltre la validità di quel visto. La decisione del governo che lo consente si rinnova ogni anno: controlla che copra le tue date.',
        'Per un viaggio più lungo non contare su una proroga sul posto: chiedi fin dall’inizio un visto macedone.',
      ],
      waivers: [
        'Un visto valido (il più sicuro è quello a ingressi multipli) o un permesso di soggiorno di un paese Schengen o UE, Stati Uniti, Regno Unito o Canada: ingresso senza visto e soggiorno fino a 15 giorni, mai oltre la scadenza del documento. La decisione si rinnova ogni anno, verificala prima di partire.',
      ],
      passports: {
        RU: 'I cittadini russi hanno bisogno del visto (ambasciata a Mosca) oppure di un visto o permesso di soggiorno valido di Schengen, Stati Uniti, Regno Unito o Canada per un viaggio fino a 15 giorni. Non ci sono voli diretti: si passa da Istanbul o Belgrado. Le carte russe non funzionano, porta euro.',
        IN: 'I cittadini indiani hanno bisogno del visto, ma con un visto o permesso di soggiorno di Schengen, Stati Uniti, Regno Unito o Canada possono venire per 15 giorni senza.',
        CN: 'I cittadini cinesi hanno bisogno del visto; la regola dell’ingresso con visto Schengen, statunitense, britannico o canadese vale anche per loro.',
        US: 'I cittadini statunitensi hanno 90 giorni ogni 180 senza visto.',
      },
    },
  },
};

export default guide;
