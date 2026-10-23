import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'AM',
  checked: '2026-10',
  fees: {
    evisa: { kind: 'from', amount: 3000, currency: 'AMD' },
    voa: { kind: 'from', amount: 3000, currency: 'AMD' },
  },
  stay: { evisa: 120, voa: 120 },
  links: { evisa: 'https://evisa.mfa.am', immigration: 'https://www.mfa.am' },
  passportMonths: 0,
  rule: { days: 180, window: 365 },
  visaRun: 'no',
  waivers: [{ holds: ['resUS', 'resEU', 'resGCC'], status: 'free', days: 180 }],
  text: {
    ru: {
      summary:
        'Граждане ЕС, Великобритании, США, России и других стран СНГ, Китая, Японии, Кореи, Грузии и стран Залива находятся в Армении без визы до 180 дней в году; россияне могут прилететь даже по внутреннему паспорту. «Визовые» граждане, например индийцы, получают e-визу или визу по прилёте (от 3000 драмов за 21 день), а до июля 2027 года граждане 111 стран с ВНЖ США, ЕС/Шенгена или стран Залива въезжают без визы.',
      apply:
        'E-визу оформляют на evisa.mfa.am: 3000 драмов (около 8 $) за 21 день или 15 000 драмов (около 39 $) за 120 дней, однократный въезд, решение примерно за три рабочих дня. Гражданам стран, которым это разрешено, такую же визу ставят по прилёте в Звартноце или на сухопутных переходах. Некоторым, в том числе индийцам, нужно добавить страховку и подтверждающие документы.',
      visaRun:
        'Лимит в 180 дней считается за год, поэтому выезд в Грузию и возвращение его не обнуляют. Для более долгой жизни в Армении оформляют статус резидента — через работу, регистрацию бизнеса или учёбу; получить его относительно несложно.',
      hacks: [
        'Россиянам внутренний паспорт подходит только при прилёте в Звартноц (Ереван) или Ширак (Гюмри). По суше через Грузию всё равно нужен загранпаспорт — Грузия внутренние паспорта не принимает.',
        'Ночной поезд и маршрутки Тбилиси — Ереван через Садахло — Баграташен идут 5–6 часов: Армению легко совместить с Грузией.',
        'Границы с Турцией и Азербайджаном закрыты. Въехать можно только самолётом, из Грузии (Баграташен, Бавра, Гогаван) или из Ирана (Агарак).',
        'Гражданам России и других стран ЕАЭС для работы в Армении не нужно разрешение на работу.',
      ],
      pitfalls: [
        'Если после Армении вы едете в Азербайджан: армянские штампы большинству иностранцев не мешают, но посещение Нагорного Карабаха (до 2023 года) без разрешения Баку ведёт к запрету въезда в Азербайджан.',
        'Пребывание дольше 180 дней в году требует статуса резидента. За перерасчёт штрафуют при выезде.',
        'E-визу оформляйте только на evisa.mfa.am: сайты-двойники берут в разы больше.',
      ],
      waivers: [
        'Граждане 111 стран из списка (включая Индию) с действующим ВНЖ США, страны ЕС/Шенгена, ОАЭ, Саудовской Аравии, Катара, Кувейта, Бахрейна или Омана — до 180 дней в году без визы. ВНЖ должен действовать не менее 6 месяцев с даты въезда и быть картой или наклейкой в паспорте. Визы не подходят, британский ВНЖ в список не входит; режим действует до 1 июля 2027 года.',
      ],
      passports: {
        RU: 'Россияне — до 180 дней в году без визы; по внутреннему паспорту — только при прилёте в Ереван или Гюмри. Прямые рейсы из многих городов России. На карты «Мир» не рассчитывайте — берите наличные или иностранную карту.',
        IN: 'Гражданам Индии нужна e-виза (со страховкой) — или ВНЖ США, ЕС/Шенгена либо стран Залива, с которым въезд без визы до июля 2027 года.',
        TR: 'Граждане Турции получают e-визу или визу по прилёте; сухопутная граница закрыта, летают прямыми рейсами Стамбул — Ереван.',
        US: 'Граждане США — до 180 дней в году без визы.',
      },
    },
    en: {
      summary:
        'Citizens of the EU, the UK, the US, Russia and other CIS countries, China, Japan, Korea, Georgia and the Gulf states stay visa-free for up to 180 days a year; Russians can even fly in on an internal passport. Visa nationals such as Indians get an e-visa or a visa on arrival (from AMD 3,000 for 21 days), and until July 2027 citizens of 111 countries holding a US, EU/Schengen or Gulf residence permit enter visa-free.',
      apply:
        'The e-visa is filed on evisa.mfa.am: AMD 3,000 (about $8) for 21 days or AMD 15,000 (about $39) for 120 days, single entry, decided in about three working days. Eligible nationalities can get the same visa on arrival at Zvartnots airport or at land crossings. Some, including Indians, must add travel insurance and supporting documents.',
      visaRun:
        'The 180-day limit is counted per year, so leaving for Georgia and coming back doesn’t reset it. For longer stays people get residence status through work, business registration or study, which is relatively easy in Armenia.',
      hacks: [
        'For Russians, the internal passport works only when flying into Zvartnots (Yerevan) or Shirak (Gyumri). Overland via Georgia you need an international passport anyway, as Georgia doesn’t accept internal ones.',
        'The night train and minibuses between Tbilisi and Yerevan via Sadakhlo – Bagratashen take 5–6 hours, so Armenia combines easily with Georgia.',
        'The borders with Turkey and Azerbaijan are closed. You can only arrive by air, from Georgia (Bagratashen, Bavra, Gogavan) or from Iran (Agarak).',
        'Citizens of Russia and other Eurasian Economic Union countries need no work permit to work in Armenia.',
      ],
      pitfalls: [
        'If Azerbaijan is next: Armenian stamps are fine for most foreigners, but having visited Nagorno-Karabakh (before 2023) without Baku’s permission gets you banned from Azerbaijan.',
        'Staying more than 180 days a year requires residence status. Overstays are fined on departure.',
        'Apply for the e-visa only on evisa.mfa.am; look-alike sites charge several times more.',
      ],
      waivers: [
        'Citizens of 111 listed countries (India included) holding a valid residence permit of the US, an EU/Schengen country, the UAE, Saudi Arabia, Qatar, Kuwait, Bahrain or Oman can stay visa-free up to 180 days a year. The permit must be valid at least 6 months from entry and shown as a card or passport sticker. Visas don’t count, UK permits are not on the list, and the scheme runs until 1 July 2027.',
      ],
      passports: {
        RU: 'Russians get up to 180 days a year visa-free; the internal passport works only for flights to Yerevan or Gyumri. There are direct flights from many Russian cities. Don’t count on Mir cards — bring cash or a foreign card.',
        IN: 'Indian citizens need an e-visa (with insurance) — or a US, EU/Schengen or Gulf residence permit, which allows visa-free entry until July 2027.',
        TR: 'Turkish citizens get an e-visa or a visa on arrival; the land border is closed, so fly direct between Istanbul and Yerevan.',
        US: 'US citizens get up to 180 days a year visa-free.',
      },
    },
    es: {
      summary:
        'Los ciudadanos de la UE, Reino Unido, EE. UU., Rusia y otros países de la CEI, China, Japón, Corea, Georgia y el Golfo se quedan sin visado hasta 180 días al año; los rusos pueden llegar en avión incluso con el pasaporte interno. Las nacionalidades sujetas a visado, como la india, obtienen un visado electrónico o a la llegada (desde 3000 drams por 21 días), y hasta julio de 2027 los ciudadanos de 111 países con residencia en EE. UU., la UE/Schengen o el Golfo entran sin visado.',
      apply:
        'El visado electrónico se tramita en evisa.mfa.am: 3000 drams (unos 8 $) por 21 días o 15 000 drams (unos 39 $) por 120 días, una sola entrada, con resolución en unos tres días laborables. Las nacionalidades autorizadas pueden obtener el mismo visado a la llegada en el aeropuerto de Zvartnots o en los pasos terrestres. Algunas, como la india, deben añadir seguro de viaje y documentación.',
      visaRun:
        'El límite de 180 días se cuenta por año, así que salir a Georgia y volver no lo reinicia. Para estancias largas se obtiene la residencia por trabajo, registro de empresa o estudios, algo relativamente fácil en Armenia.',
      hacks: [
        'Para los rusos, el pasaporte interno solo vale si llegan en avión a Zvartnots (Ereván) o Shirak (Gyumri). Por tierra a través de Georgia hace falta pasaporte internacional igualmente, porque Georgia no acepta el interno.',
        'El tren nocturno y las marshrutkas entre Tiflis y Ereván por Sadakhlo – Bagratashen tardan 5–6 horas: Armenia se combina fácilmente con Georgia.',
        'Las fronteras con Turquía y Azerbaiyán están cerradas. Solo se puede llegar en avión, desde Georgia (Bagratashen, Bavra, Gogavan) o desde Irán (Agarak).',
        'Los ciudadanos de Rusia y del resto de la Unión Económica Euroasiática no necesitan permiso de trabajo para trabajar en Armenia.',
      ],
      pitfalls: [
        'Si después vas a Azerbaiyán: los sellos armenios no son problema para la mayoría de extranjeros, pero haber visitado Nagorno Karabaj (antes de 2023) sin permiso de Bakú supone la prohibición de entrada en Azerbaiyán.',
        'Quedarse más de 180 días al año exige residencia. El exceso de estancia se multa al salir.',
        'Pide el visado electrónico solo en evisa.mfa.am; las webs clonadas cobran varias veces más.',
      ],
      waivers: [
        'Los ciudadanos de 111 países de la lista (India incluida) con permiso de residencia vigente de EE. UU., un país de la UE o Schengen, EAU, Arabia Saudí, Catar, Kuwait, Baréin u Omán pueden quedarse sin visado hasta 180 días al año. El permiso debe tener al menos 6 meses de validez desde la entrada y presentarse como tarjeta o etiqueta en el pasaporte. Los visados no sirven, los permisos británicos no están en la lista y el régimen dura hasta el 1 de julio de 2027.',
      ],
      passports: {
        RU: 'Los ciudadanos rusos tienen hasta 180 días al año sin visado; el pasaporte interno solo vale en vuelos a Ereván o Gyumri. Hay vuelos directos desde muchas ciudades rusas. No cuentes con las tarjetas Mir: lleva efectivo o una tarjeta extranjera.',
        IN: 'Los ciudadanos indios necesitan visado electrónico (con seguro) o una residencia de EE. UU., la UE/Schengen o el Golfo, que permite entrar sin visado hasta julio de 2027.',
        TR: 'Los ciudadanos turcos obtienen visado electrónico o a la llegada; la frontera terrestre está cerrada, así que se vuela directo entre Estambul y Ereván.',
        US: 'Los ciudadanos estadounidenses tienen hasta 180 días al año sin visado.',
      },
    },
    de: {
      summary:
        'Bürger der EU, Großbritanniens, der USA, Russlands und anderer GUS-Staaten, Chinas, Japans, Koreas, Georgiens und der Golfstaaten bleiben bis zu 180 Tage im Jahr visumfrei; Russen dürfen sogar mit dem Inlandspass einfliegen. Visumpflichtige wie Inder bekommen ein E-Visum oder ein Visum bei Ankunft (ab 3.000 Dram für 21 Tage), und bis Juli 2027 reisen Bürger von 111 Ländern mit Aufenthaltstitel der USA, der EU bzw. des Schengenraums oder der Golfstaaten visumfrei ein.',
      apply:
        'Das E-Visum beantragst du auf evisa.mfa.am: 3.000 Dram (etwa 8 $) für 21 Tage oder 15.000 Dram (etwa 39 $) für 120 Tage, eine Einreise, Entscheidung in rund drei Werktagen. Berechtigte Staatsangehörige erhalten dasselbe Visum bei Ankunft am Flughafen Swartnoz oder an Landübergängen. Manche, darunter Inder, müssen zusätzlich eine Reiseversicherung und Belege einreichen.',
      visaRun:
        'Das 180-Tage-Limit gilt pro Jahr, ein Abstecher nach Georgien setzt es also nicht zurück. Für längere Aufenthalte holt man sich einen Aufenthaltsstatus über Arbeit, Firmengründung oder Studium – in Armenien vergleichsweise einfach.',
      hacks: [
        'Für Russen gilt der Inlandspass nur bei Ankunft per Flugzeug in Swartnoz (Jerewan) oder Schirak (Gjumri). Über Land via Georgien brauchst du ohnehin einen Reisepass, da Georgien keine Inlandspässe akzeptiert.',
        'Nachtzug und Marschrutkas zwischen Tiflis und Jerewan über Sadachlo – Bagratashen brauchen 5–6 Stunden: Armenien lässt sich leicht mit Georgien verbinden.',
        'Die Grenzen zur Türkei und zu Aserbaidschan sind geschlossen. Einreisen kannst du nur per Flugzeug, aus Georgien (Bagratashen, Bavra, Gogavan) oder aus dem Iran (Agarak).',
        'Bürger Russlands und anderer Staaten der Eurasischen Wirtschaftsunion brauchen für Arbeit in Armenien keine Arbeitserlaubnis.',
      ],
      pitfalls: [
        'Wenn es danach nach Aserbaidschan geht: Armenische Stempel sind für die meisten Ausländer kein Problem, wer aber Bergkarabach (vor 2023) ohne Genehmigung Bakus besucht hat, bekommt dort Einreiseverbot.',
        'Wer mehr als 180 Tage im Jahr bleibt, braucht einen Aufenthaltsstatus. Überziehungen werden bei der Ausreise mit Bußgeld belegt.',
        'Beantrage das E-Visum nur auf evisa.mfa.am; nachgemachte Seiten verlangen ein Vielfaches.',
      ],
      waivers: [
        'Bürger von 111 gelisteten Ländern (Indien eingeschlossen) mit gültigem Aufenthaltstitel der USA, eines EU- oder Schengen-Staats, der VAE, Saudi-Arabiens, Katars, Kuwaits, Bahrains oder Omans dürfen bis zu 180 Tage im Jahr visumfrei bleiben. Der Titel muss ab Einreise noch mindestens 6 Monate gültig sein und als Karte oder Passetikett vorliegen. Visa zählen nicht, britische Titel stehen nicht auf der Liste, und die Regelung gilt bis 1. Juli 2027.',
      ],
      passports: {
        RU: 'Russische Staatsangehörige haben bis zu 180 Tage im Jahr visumfrei; der Inlandspass gilt nur bei Flügen nach Jerewan oder Gjumri. Es gibt Direktflüge aus vielen russischen Städten. Verlass dich nicht auf Mir-Karten – nimm Bargeld oder eine ausländische Karte mit.',
        IN: 'Indische Staatsangehörige brauchen ein E-Visum (mit Versicherung) – oder einen Aufenthaltstitel der USA, der EU bzw. des Schengenraums oder der Golfstaaten, mit dem sie bis Juli 2027 visumfrei einreisen.',
        TR: 'Türkische Staatsangehörige bekommen ein E-Visum oder ein Visum bei Ankunft; die Landgrenze ist geschlossen, man fliegt direkt zwischen Istanbul und Jerewan.',
        US: 'US-Bürger haben bis zu 180 Tage im Jahr visumfrei.',
      },
    },
    fr: {
      summary:
        'Les citoyens de l’UE, du Royaume-Uni, des États-Unis, de la Russie et des autres pays de la CEI, de la Chine, du Japon, de la Corée, de la Géorgie et du Golfe séjournent sans visa jusqu’à 180 jours par an ; les Russes peuvent même arriver en avion avec leur passeport intérieur. Les ressortissants soumis à visa, comme les Indiens, obtiennent un e-visa ou un visa à l’arrivée (à partir de 3 000 drams pour 21 jours), et jusqu’en juillet 2027 les citoyens de 111 pays titulaires d’un titre de séjour américain, européen/Schengen ou du Golfe entrent sans visa.',
      apply:
        'L’e-visa se demande sur evisa.mfa.am : 3 000 drams (environ 8 $) pour 21 jours ou 15 000 drams (environ 39 $) pour 120 jours, entrée unique, décision en trois jours ouvrés environ. Les nationalités autorisées obtiennent le même visa à l’arrivée à l’aéroport de Zvartnots ou aux postes terrestres. Certaines, dont l’Inde, doivent y joindre une assurance voyage et des justificatifs.',
      visaRun:
        'La limite de 180 jours se compte par an : un aller-retour en Géorgie ne la remet pas à zéro. Pour un séjour plus long, on obtient un statut de résident par le travail, la création d’entreprise ou les études, ce qui est relativement simple en Arménie.',
      hacks: [
        'Pour les Russes, le passeport intérieur ne vaut qu’en arrivant par avion à Zvartnots (Erevan) ou Shirak (Gyumri). Par la route via la Géorgie, il faut de toute façon un passeport international, la Géorgie n’acceptant pas le passeport intérieur.',
        'Le train de nuit et les marchroutkas entre Tbilissi et Erevan via Sadakhlo – Bagratashen mettent 5 à 6 heures : l’Arménie se combine facilement avec la Géorgie.',
        'Les frontières avec la Turquie et l’Azerbaïdjan sont fermées. On arrive uniquement en avion, depuis la Géorgie (Bagratashen, Bavra, Gogavan) ou depuis l’Iran (Agarak).',
        'Les citoyens de Russie et des autres pays de l’Union économique eurasiatique n’ont pas besoin de permis de travail pour travailler en Arménie.',
      ],
      pitfalls: [
        'Si l’Azerbaïdjan est l’étape suivante : les tampons arméniens ne posent pas de problème à la plupart des étrangers, mais une visite au Haut-Karabakh (avant 2023) sans l’accord de Bakou vaut une interdiction d’entrée en Azerbaïdjan.',
        'Rester plus de 180 jours par an exige un statut de résident. Tout dépassement est sanctionné d’une amende à la sortie.',
        'Demandez l’e-visa uniquement sur evisa.mfa.am ; les sites copiés facturent plusieurs fois plus cher.',
      ],
      waivers: [
        'Les citoyens de 111 pays listés (dont l’Inde) titulaires d’un titre de séjour valide des États-Unis, d’un pays de l’UE ou de Schengen, des Émirats, d’Arabie saoudite, du Qatar, du Koweït, de Bahreïn ou d’Oman peuvent rester sans visa jusqu’à 180 jours par an. Le titre doit être valide au moins 6 mois après l’entrée et présenté sous forme de carte ou de vignette dans le passeport. Les visas ne comptent pas, les titres britanniques ne figurent pas sur la liste, et le dispositif court jusqu’au 1er juillet 2027.',
      ],
      passports: {
        RU: 'Les ressortissants russes ont jusqu’à 180 jours par an sans visa ; le passeport intérieur ne vaut que pour les vols vers Erevan ou Gyumri. Des vols directs partent de nombreuses villes russes. Ne comptez pas sur les cartes Mir : prévoyez des espèces ou une carte étrangère.',
        IN: 'Les citoyens indiens ont besoin d’un e-visa (avec assurance), ou d’un titre de séjour américain, européen/Schengen ou du Golfe, qui permet d’entrer sans visa jusqu’en juillet 2027.',
        TR: 'Les citoyens turcs obtiennent un e-visa ou un visa à l’arrivée ; la frontière terrestre est fermée, on vole donc en direct entre Istanbul et Erevan.',
        US: 'Les citoyens américains ont jusqu’à 180 jours par an sans visa.',
      },
    },
    it: {
      summary:
        'I cittadini di UE, Regno Unito, Stati Uniti, Russia e altri paesi della CSI, Cina, Giappone, Corea, Georgia e paesi del Golfo restano senza visto fino a 180 giorni l’anno; i russi possono arrivare in aereo persino con il passaporto interno. Chi è soggetto a visto, come gli indiani, ottiene un visto elettronico o all’arrivo (da 3.000 dram per 21 giorni), e fino a luglio 2027 i cittadini di 111 paesi con permesso di soggiorno di Stati Uniti, UE/Schengen o Golfo entrano senza visto.',
      apply:
        'Il visto elettronico si chiede su evisa.mfa.am: 3.000 dram (circa 8 $) per 21 giorni o 15.000 dram (circa 39 $) per 120 giorni, ingresso singolo, decisione in circa tre giorni lavorativi. Le nazionalità ammesse possono ottenere lo stesso visto all’arrivo all’aeroporto di Zvartnots o ai valichi terrestri. Alcune, tra cui l’India, devono aggiungere assicurazione di viaggio e documenti di supporto.',
      visaRun:
        'Il limite di 180 giorni si conta per anno, quindi uscire in Georgia e rientrare non lo azzera. Per soggiorni lunghi si ottiene la residenza tramite lavoro, registrazione di un’impresa o studio, cosa relativamente semplice in Armenia.',
      hacks: [
        'Per i russi il passaporto interno vale solo arrivando in aereo a Zvartnots (Erevan) o Shirak (Gyumri). Via terra attraverso la Georgia serve comunque il passaporto per l’estero, perché la Georgia non accetta quello interno.',
        'Il treno notturno e le marshrutke tra Tbilisi ed Erevan via Sadakhlo – Bagratashen impiegano 5–6 ore: l’Armenia si combina facilmente con la Georgia.',
        'I confini con Turchia e Azerbaigian sono chiusi. Si arriva solo in aereo, dalla Georgia (Bagratashen, Bavra, Gogavan) o dall’Iran (Agarak).',
        'I cittadini di Russia e degli altri paesi dell’Unione economica eurasiatica non hanno bisogno di permesso di lavoro per lavorare in Armenia.',
      ],
      pitfalls: [
        'Se poi vai in Azerbaigian: i timbri armeni per la maggior parte degli stranieri non sono un problema, ma aver visitato il Nagorno Karabakh (prima del 2023) senza permesso di Baku comporta il divieto d’ingresso in Azerbaigian.',
        'Restare più di 180 giorni l’anno richiede la residenza. Chi supera il limite paga una multa all’uscita.',
        'Chiedi il visto elettronico solo su evisa.mfa.am; i siti clone costano molte volte di più.',
      ],
      waivers: [
        'I cittadini di 111 paesi in elenco (India compresa) con permesso di soggiorno valido di Stati Uniti, un paese UE o Schengen, Emirati, Arabia Saudita, Qatar, Kuwait, Bahrein o Oman possono restare senza visto fino a 180 giorni l’anno. Il permesso deve valere almeno 6 mesi dall’ingresso ed essere una carta o un’etichetta nel passaporto. I visti non contano, i permessi britannici non sono in elenco e il regime vale fino al 1° luglio 2027.',
      ],
      passports: {
        RU: 'I cittadini russi hanno fino a 180 giorni l’anno senza visto; il passaporto interno vale solo per i voli verso Erevan o Gyumri. Ci sono voli diretti da molte città russe. Non contare sulle carte Mir: porta contanti o una carta estera.',
        IN: 'I cittadini indiani hanno bisogno del visto elettronico (con assicurazione), oppure di un permesso di soggiorno di Stati Uniti, UE/Schengen o Golfo, che consente l’ingresso senza visto fino a luglio 2027.',
        TR: 'I cittadini turchi ottengono il visto elettronico o all’arrivo; il confine terrestre è chiuso, quindi si vola diretti tra Istanbul ed Erevan.',
        US: 'I cittadini statunitensi hanno fino a 180 giorni l’anno senza visto.',
      },
    },
  },
};

export default guide;
