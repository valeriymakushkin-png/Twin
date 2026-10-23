import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'GE',
  checked: '2026-10',
  fees: { evisa: { kind: 'from', amount: 20, currency: 'USD' } },
  stay: { evisa: 30 },
  links: { evisa: 'https://www.evisa.gov.ge', immigration: 'https://www.geoconsul.gov.ge' },
  docs: ['insurance'],
  passportMonths: 0,
  visaRun: 'yes',
  borders: [
    { name: 'Sadakhlo – Bagratashen', to: 'AM', lat: 41.2445, lng: 44.817 },
    { name: 'Sarpi – Sarp', to: 'TR', lat: 41.5216, lng: 41.5478 },
  ],
  waivers: [
    {
      holds: [
        'visaUS', 'visaGB', 'visaSchengen', 'visaCA', 'visaJP', 'visaAU', 'visaNZ', 'visaKR',
        'resUS', 'resGB', 'resEU', 'resCA', 'resAU', 'resJP', 'resGCC',
      ],
      status: 'free',
      days: 90,
    },
  ],
  text: {
    ru: {
      summary:
        'Граждане около 95 стран — России, Украины, Беларуси, Казахстана, ЕС, Великобритании, США, Канады, Турции, Израиля, Японии и других — живут в Грузии без визы целый год. Граждане Китая получают 30 дней за въезд (не больше 90 в течение 180), Ирана — 45 дней; индийцам и другим «визовым» гражданам нужна e-виза, если у них нет визы или ВНЖ ЕС, США, Великобритании и ряда других стран. С 1 января 2026 года всем нужна медицинская страховка.',
      apply:
        'E-визу оформляют на evisa.gov.ge: анкета, скан паспорта, фото, брони, выписка из банка и страховка. Консульский сбор — 20 $ плюс около 15 $ за обязательную онлайн-проверку личности DuVerify. Виза даёт 30 дней в течение 120-дневного окна; закладывайте 5–10 рабочих дней.',
      visaRun:
        'Год без визы начинается заново при каждом въезде, минимального срока вне страны нет. Многие живущие в Грузии выезжают в Армению через Садахло — Баграташен (полтора часа от Тбилиси) или в Турцию через Сарпи у Батуми и возвращаются в тот же день. Пограничники редко возражают, но могут спросить о цели поездки, если вы так живёте годами.',
      hacks: [
        'Фрилансеры могут зарегистрироваться индивидуальным предпринимателем со статусом малого бизнеса и платить 1% с оборота до 500 000 лари в год — без ВНЖ, достаточно безвизового статуса.',
        'Для страховки нужно покрытие не меньше 30 000 лари (около 11 000 $) на весь срок, полис на английском или грузинском. Грузинские страховщики продают недорогие местные полисы онлайн.',
        'С мая 2026 года снова ходит ночной поезд Тбилиси — Баку, а поезд Тбилиси — Ереван работает давно: Грузия — удобная база для поездок по всему Кавказу.',
        'Если у вас есть виза или ВНЖ США, Великобритании, Шенгена, Канады, Японии, Кореи, Австралии, Новой Зеландии или стран Залива, e-виза не нужна даже «визовым» гражданам.',
      ],
      pitfalls: [
        'Въезд в Абхазию или Южную Осетию со стороны России Грузия считает незаконным пересечением границы — это штраф или уголовное дело. Въезжайте только через подконтрольные Грузии пункты.',
        'Без страховки могут не пустить: с 1 января 2026 года пограничники вправе попросить полис.',
        'Российский внутренний паспорт не принимается — нужен загранпаспорт.',
        'E-визу оформляйте только на evisa.gov.ge: сайты-двойники берут лишнее.',
      ],
      waivers: [
        'Действующая виза или ВНЖ ЕС/Шенгена, США, Великобритании, Канады, Австралии, Новой Зеландии, Японии, Кореи или стран Залива (а также Израиля и Швейцарии): въезд без визы на 90 дней в течение 180.',
      ],
      passports: {
        RU: 'Россияне — год без визы по загранпаспорту. Верхний Ларс — единственный открытый сухопутный переход с Россией, летом очереди; есть и прямые рейсы. Российские карты не работают; открыть счёт в грузинском банке можно, но требования к россиянам ужесточились.',
        CN: 'Граждане Китая с 2024 года — 30 дней без визы за въезд, не больше 90 в течение 180.',
        IN: 'Гражданам Индии нужна e-виза, но с визой или ВНЖ США, Великобритании, Шенгена и ряда других стран въезд без визы на 90 дней в течение 180.',
        IR: 'Граждане Ирана — 45 дней без визы.',
        US: 'Граждане США — год без визы.',
      },
    },
    en: {
      summary:
        'Citizens of about 95 countries — Russia, Ukraine, Belarus, Kazakhstan, the EU, the UK, the US, Canada, Turkey, Israel, Japan and more — can stay in Georgia visa-free for a whole year. Chinese citizens get 30 days per entry (no more than 90 in 180) and Iranians 45; Indians and other visa nationals need an e-visa unless they hold a visa or residence permit from the EU, the US, the UK and several other countries. Since 1 January 2026 everyone needs health insurance.',
      apply:
        'The e-visa is filed on evisa.gov.ge: form, passport scan, photo, bookings, bank statement and insurance. The consular fee is $20 plus about $15 for the mandatory DuVerify online identity check. It allows 30 days within a 120-day window; allow 5–10 working days.',
      visaRun:
        'The visa-free year starts again with every entry, and there’s no minimum time outside. Many people living in Georgia hop into Armenia at Sadakhlo – Bagratashen (90 minutes from Tbilisi) or into Turkey at Sarpi near Batumi and come back the same day. Border guards rarely object, but may ask about your purpose if you’ve been doing this for years.',
      hacks: [
        'Freelancers can register as individual entrepreneurs with small-business status and pay 1% tax on turnover up to 500,000 lari a year — no residence permit needed, visa-free status is enough.',
        'The insurance must cover at least 30,000 lari (about $11,000) for your whole stay, with the policy in English or Georgian. Georgian insurers sell cheap local policies online.',
        'The Tbilisi–Baku night train has been running again since May 2026, and the Tbilisi–Yerevan train has run for years: Georgia makes a handy base for the whole Caucasus.',
        'If you hold a visa or residence permit of the US, the UK, Schengen, Canada, Japan, Korea, Australia, New Zealand or the Gulf states, you need no e-visa even on a visa-required passport.',
      ],
      pitfalls: [
        'Georgia treats entering Abkhazia or South Ossetia from Russia as illegal border crossing — a fine or criminal case. Enter only through Georgian-controlled checkpoints.',
        'No insurance can mean no entry: since 1 January 2026 border guards may ask to see your policy.',
        'Russian internal passports are not accepted — you need an international passport.',
        'Apply for the e-visa only on evisa.gov.ge; look-alike sites charge extra.',
      ],
      waivers: [
        'A valid visa or residence permit of the EU/Schengen, the US, the UK, Canada, Australia, New Zealand, Japan, Korea or the Gulf states (as well as Israel and Switzerland): visa-free entry for 90 days in 180.',
      ],
      passports: {
        RU: 'Russians get a year visa-free on an international passport. Upper Lars is the only open land crossing with Russia, with summer queues; there are also direct flights. Russian cards don’t work; opening an account at a Georgian bank is possible, but requirements for Russians have tightened.',
        CN: 'Since 2024 Chinese citizens get 30 days visa-free per entry, no more than 90 in 180.',
        IN: 'Indian citizens need an e-visa, but with a US, UK, Schengen or similar visa or residence permit they enter visa-free for 90 days in 180.',
        IR: 'Iranian citizens get 45 days visa-free.',
        US: 'US citizens get a year visa-free.',
      },
    },
    es: {
      summary:
        'Los ciudadanos de unos 95 países, entre ellos Rusia, Ucrania, Bielorrusia, Kazajistán, la UE, Reino Unido, EE. UU., Canadá, Turquía, Israel y Japón, pueden quedarse en Georgia sin visado un año entero. Los chinos tienen 30 días por entrada (no más de 90 cada 180) y los iraníes, 45; los indios y demás nacionalidades sujetas a visado necesitan un visado electrónico, salvo que tengan visado o residencia de la UE, EE. UU., Reino Unido y algunos otros países. Desde el 1 de enero de 2026 todo el mundo necesita seguro médico.',
      apply:
        'El visado electrónico se tramita en evisa.gov.ge: formulario, pasaporte escaneado, foto, reservas, extracto bancario y seguro. La tasa consular es de 20 $, más unos 15 $ por la verificación de identidad en línea DuVerify, obligatoria. Permite 30 días dentro de un plazo de 120; cuenta con 5–10 días laborables.',
      visaRun:
        'El año sin visado vuelve a empezar con cada entrada y no hay un tiempo mínimo fuera. Muchos residentes de facto cruzan a Armenia por Sadakhlo – Bagratashen (hora y media desde Tiflis) o a Turquía por Sarpi, junto a Batumi, y vuelven el mismo día. Los guardias rara vez ponen pegas, pero pueden preguntarte el motivo si llevas años haciéndolo.',
      hacks: [
        'Los freelancers pueden registrarse como empresarios individuales con estatus de pequeña empresa y pagar un 1 % sobre la facturación de hasta 500 000 laris al año, sin permiso de residencia: basta con estar sin visado.',
        'El seguro debe cubrir al menos 30 000 laris (unos 11 000 $) durante toda la estancia, con la póliza en inglés o georgiano. Las aseguradoras georgianas venden pólizas locales baratas en línea.',
        'Desde mayo de 2026 vuelve a circular el tren nocturno Tiflis–Bakú, y el Tiflis–Ereván funciona desde hace años: Georgia es una buena base para todo el Cáucaso.',
        'Si tienes visado o residencia de EE. UU., Reino Unido, Schengen, Canadá, Japón, Corea, Australia, Nueva Zelanda o los países del Golfo, no necesitas visado electrónico aunque tu pasaporte lo requiera.',
      ],
      pitfalls: [
        'Georgia considera un cruce ilegal entrar en Abjasia u Osetia del Sur desde Rusia: multa o causa penal. Entra solo por puestos controlados por Georgia.',
        'Sin seguro te pueden negar la entrada: desde el 1 de enero de 2026 los guardias pueden pedirte la póliza.',
        'El pasaporte interno ruso no se acepta: hace falta el pasaporte internacional.',
        'Pide el visado electrónico solo en evisa.gov.ge; las webs clonadas cobran de más.',
      ],
      waivers: [
        'Un visado o permiso de residencia vigente de la UE o Schengen, EE. UU., Reino Unido, Canadá, Australia, Nueva Zelanda, Japón, Corea o los países del Golfo (y también de Israel y Suiza): entrada sin visado por 90 días cada 180.',
      ],
      passports: {
        RU: 'Los ciudadanos rusos tienen un año sin visado con pasaporte internacional. Verkhni Lars es el único paso terrestre abierto con Rusia, con colas en verano; también hay vuelos directos. Las tarjetas rusas no funcionan; abrir una cuenta en un banco georgiano es posible, pero los requisitos para rusos se han endurecido.',
        CN: 'Desde 2024 los ciudadanos chinos tienen 30 días sin visado por entrada, sin superar 90 cada 180.',
        IN: 'Los ciudadanos indios necesitan visado electrónico, pero con visado o residencia de EE. UU., Reino Unido, Schengen o similares entran sin visado 90 días cada 180.',
        IR: 'Los ciudadanos iraníes tienen 45 días sin visado.',
        US: 'Los ciudadanos estadounidenses tienen un año sin visado.',
      },
    },
    de: {
      summary:
        'Bürger von rund 95 Ländern – darunter Russland, Ukraine, Belarus, Kasachstan, EU, Großbritannien, USA, Kanada, Türkei, Israel und Japan – dürfen ein ganzes Jahr visumfrei in Georgien bleiben. Chinesen erhalten 30 Tage pro Einreise (höchstens 90 innerhalb von 180), Iraner 45; Inder und andere Visumpflichtige brauchen ein E-Visum, außer sie haben ein Visum oder einen Aufenthaltstitel der EU, der USA, Großbritanniens oder einiger anderer Länder. Seit 1. Januar 2026 braucht jeder eine Krankenversicherung.',
      apply:
        'Das E-Visum beantragst du auf evisa.gov.ge: Formular, Passscan, Foto, Buchungen, Kontoauszug und Versicherung. Die Konsulargebühr beträgt 20 $ plus etwa 15 $ für die verpflichtende Online-Identitätsprüfung DuVerify. Es erlaubt 30 Tage innerhalb eines 120-Tage-Fensters; rechne mit 5–10 Werktagen.',
      visaRun:
        'Das visumfreie Jahr beginnt mit jeder Einreise neu, eine Mindestzeit außerhalb gibt es nicht. Viele, die in Georgien leben, fahren über Sadachlo – Bagratashen nach Armenien (anderthalb Stunden von Tiflis) oder über Sarpi bei Batumi in die Türkei und kommen am selben Tag zurück. Grenzbeamte haben selten Einwände, fragen aber nach dem Zweck, wenn du das schon jahrelang machst.',
      hacks: [
        'Freelancer können sich als Einzelunternehmer mit Kleinunternehmerstatus registrieren und zahlen 1 % auf den Umsatz bis 500.000 Lari im Jahr – ganz ohne Aufenthaltstitel, der visumfreie Status reicht.',
        'Die Versicherung muss mindestens 30.000 Lari (etwa 11.000 $) für den gesamten Aufenthalt abdecken, die Police auf Englisch oder Georgisch. Georgische Versicherer verkaufen günstige lokale Policen online.',
        'Seit Mai 2026 fährt wieder der Nachtzug Tiflis–Baku, der Zug Tiflis–Jerewan läuft schon seit Jahren: Georgien ist eine praktische Basis für den ganzen Kaukasus.',
        'Mit einem Visum oder Aufenthaltstitel der USA, Großbritanniens, des Schengenraums, Kanadas, Japans, Koreas, Australiens, Neuseelands oder der Golfstaaten brauchst du auch mit visumpflichtigem Pass kein E-Visum.',
      ],
      pitfalls: [
        'Wer aus Russland nach Abchasien oder Südossetien einreist, überquert nach georgischem Recht die Grenze illegal – Bußgeld oder Strafverfahren. Reise nur über von Georgien kontrollierte Übergänge ein.',
        'Ohne Versicherung droht die Zurückweisung: Seit dem 1. Januar 2026 dürfen Grenzbeamte die Police verlangen.',
        'Russische Inlandspässe werden nicht akzeptiert – du brauchst einen Reisepass.',
        'Beantrage das E-Visum nur auf evisa.gov.ge; nachgemachte Seiten kassieren extra.',
      ],
      waivers: [
        'Ein gültiges Visum oder ein Aufenthaltstitel der EU bzw. des Schengenraums, der USA, Großbritanniens, Kanadas, Australiens, Neuseelands, Japans, Koreas oder der Golfstaaten (auch Israels und der Schweiz): visumfreie Einreise für 90 Tage innerhalb von 180.',
      ],
      passports: {
        RU: 'Russische Staatsangehörige haben mit Reisepass ein Jahr visumfrei. Werchni Lars ist der einzige offene Landübergang nach Russland, im Sommer mit Wartezeiten; es gibt auch Direktflüge. Russische Karten funktionieren nicht; ein Konto bei einer georgischen Bank ist möglich, die Anforderungen für Russen sind aber strenger geworden.',
        CN: 'Seit 2024 haben Chinesen 30 Tage visumfrei pro Einreise, höchstens 90 innerhalb von 180.',
        IN: 'Indische Staatsangehörige brauchen ein E-Visum, mit einem US-, UK-, Schengen- oder ähnlichen Visum bzw. Aufenthaltstitel reisen sie aber 90 Tage innerhalb von 180 visumfrei ein.',
        IR: 'Iranische Staatsangehörige haben 45 Tage visumfrei.',
        US: 'US-Bürger haben ein Jahr visumfrei.',
      },
    },
    fr: {
      summary:
        'Les citoyens d’environ 95 pays, dont la Russie, l’Ukraine, la Biélorussie, le Kazakhstan, l’UE, le Royaume-Uni, les États-Unis, le Canada, la Turquie, Israël et le Japon, peuvent rester en Géorgie sans visa pendant un an. Les Chinois ont 30 jours par entrée (90 jours sur 180 au maximum) et les Iraniens 45 ; les Indiens et autres ressortissants soumis à visa ont besoin d’un e-visa, sauf s’ils détiennent un visa ou titre de séjour de l’UE, des États-Unis, du Royaume-Uni et de quelques autres pays. Depuis le 1er janvier 2026, une assurance santé est obligatoire pour tous.',
      apply:
        'L’e-visa se demande sur evisa.gov.ge : formulaire, scan du passeport, photo, réservations, relevé bancaire et assurance. Les frais consulaires sont de 20 $, plus environ 15 $ pour la vérification d’identité en ligne DuVerify, obligatoire. Il donne 30 jours sur une fenêtre de 120 jours ; comptez 5 à 10 jours ouvrés.',
      visaRun:
        'L’année sans visa repart à chaque entrée, sans durée minimale hors du pays. Beaucoup de résidents de fait passent en Arménie par Sadakhlo – Bagratashen (1 h 30 de Tbilissi) ou en Turquie par Sarpi, près de Batoumi, et reviennent le jour même. Les gardes-frontières s’y opposent rarement, mais peuvent vous interroger sur le motif si vous le faites depuis des années.',
      hacks: [
        'Les freelances peuvent s’enregistrer comme entrepreneurs individuels avec le statut de petite entreprise et payer 1 % sur un chiffre d’affaires allant jusqu’à 500 000 laris par an, sans titre de séjour : le statut sans visa suffit.',
        'L’assurance doit couvrir au moins 30 000 laris (environ 11 000 $) pour tout le séjour, avec une police en anglais ou en géorgien. Les assureurs géorgiens vendent en ligne des polices locales bon marché.',
        'Le train de nuit Tbilissi–Bakou circule de nouveau depuis mai 2026, et le Tbilissi–Erevan fonctionne depuis des années : la Géorgie est une base pratique pour tout le Caucase.',
        'Avec un visa ou titre de séjour des États-Unis, du Royaume-Uni, de Schengen, du Canada, du Japon, de la Corée, de l’Australie, de la Nouvelle-Zélande ou du Golfe, pas besoin d’e-visa, même avec un passeport soumis à visa.',
      ],
      pitfalls: [
        'La Géorgie considère l’entrée en Abkhazie ou en Ossétie du Sud depuis la Russie comme un franchissement illégal de la frontière : amende ou poursuites pénales. N’entrez que par des postes contrôlés par la Géorgie.',
        'Sans assurance, l’entrée peut être refusée : depuis le 1er janvier 2026, les gardes-frontières peuvent demander la police.',
        'Le passeport intérieur russe n’est pas accepté : il faut un passeport international.',
        'Demandez l’e-visa uniquement sur evisa.gov.ge ; les sites copiés prennent une commission.',
      ],
      waivers: [
        'Un visa ou titre de séjour valide de l’UE ou de Schengen, des États-Unis, du Royaume-Uni, du Canada, de l’Australie, de la Nouvelle-Zélande, du Japon, de la Corée ou des pays du Golfe (ainsi que d’Israël et de Suisse) : entrée sans visa pour 90 jours sur 180.',
      ],
      passports: {
        RU: 'Les ressortissants russes ont un an sans visa avec leur passeport international. Verkhni Lars est le seul poste terrestre ouvert avec la Russie, avec des files l’été ; il existe aussi des vols directs. Les cartes russes ne fonctionnent pas ; ouvrir un compte dans une banque géorgienne reste possible, mais les exigences envers les Russes se sont durcies.',
        CN: 'Depuis 2024, les citoyens chinois ont 30 jours sans visa par entrée, dans la limite de 90 jours sur 180.',
        IN: 'Les citoyens indiens ont besoin d’un e-visa, mais avec un visa ou titre de séjour américain, britannique, Schengen ou équivalent, ils entrent sans visa pour 90 jours sur 180.',
        IR: 'Les citoyens iraniens ont 45 jours sans visa.',
        US: 'Les citoyens américains ont un an sans visa.',
      },
    },
    it: {
      summary:
        'I cittadini di circa 95 paesi, tra cui Russia, Ucraina, Bielorussia, Kazakistan, UE, Regno Unito, Stati Uniti, Canada, Turchia, Israele e Giappone, possono restare in Georgia senza visto per un anno intero. I cinesi hanno 30 giorni per ingresso (non più di 90 ogni 180) e gli iraniani 45; indiani e altri soggetti a visto hanno bisogno del visto elettronico, a meno che non abbiano un visto o permesso di soggiorno di UE, Stati Uniti, Regno Unito e pochi altri paesi. Dal 1° gennaio 2026 l’assicurazione sanitaria è obbligatoria per tutti.',
      apply:
        'Il visto elettronico si chiede su evisa.gov.ge: modulo, scansione del passaporto, foto, prenotazioni, estratto conto e assicurazione. La tassa consolare è di 20 $, più circa 15 $ per la verifica d’identità online DuVerify, obbligatoria. Consente 30 giorni in una finestra di 120; calcola 5–10 giorni lavorativi.',
      visaRun:
        'L’anno senza visto riparte a ogni ingresso e non c’è un periodo minimo fuori. Molti che vivono in Georgia passano in Armenia da Sadakhlo – Bagratashen (un’ora e mezza da Tbilisi) o in Turchia da Sarpi, vicino a Batumi, e rientrano in giornata. Le guardie raramente fanno storie, ma possono chiederti il motivo se lo fai da anni.',
      hacks: [
        'I freelance possono registrarsi come imprenditori individuali con lo status di piccola impresa e pagare l’1% sul fatturato fino a 500.000 lari l’anno, senza permesso di soggiorno: basta lo status senza visto.',
        'L’assicurazione deve coprire almeno 30.000 lari (circa 11.000 $) per tutto il soggiorno, con polizza in inglese o georgiano. Le compagnie georgiane vendono online polizze locali economiche.',
        'Da maggio 2026 è tornato il treno notturno Tbilisi–Baku, e il Tbilisi–Erevan circola da anni: la Georgia è una base comoda per tutto il Caucaso.',
        'Se hai un visto o permesso di soggiorno di Stati Uniti, Regno Unito, Schengen, Canada, Giappone, Corea, Australia, Nuova Zelanda o paesi del Golfo, il visto elettronico non serve anche se il tuo passaporto lo richiederebbe.',
      ],
      pitfalls: [
        'La Georgia considera attraversamento illegale entrare in Abcasia o Ossezia del Sud dalla Russia: multa o procedimento penale. Entra solo dai valichi controllati dalla Georgia.',
        'Senza assicurazione puoi essere respinto: dal 1° gennaio 2026 le guardie possono chiedere la polizza.',
        'Il passaporto interno russo non è accettato: serve il passaporto per l’estero.',
        'Chiedi il visto elettronico solo su evisa.gov.ge; i siti clone fanno pagare di più.',
      ],
      waivers: [
        'Un visto o permesso di soggiorno valido di UE o Schengen, Stati Uniti, Regno Unito, Canada, Australia, Nuova Zelanda, Giappone, Corea o paesi del Golfo (oltre a Israele e Svizzera): ingresso senza visto per 90 giorni ogni 180.',
      ],
      passports: {
        RU: 'I cittadini russi hanno un anno senza visto con il passaporto per l’estero. Verkhni Lars è l’unico valico terrestre aperto con la Russia, con code d’estate; ci sono anche voli diretti. Le carte russe non funzionano; aprire un conto in una banca georgiana è possibile, ma i requisiti per i russi sono diventati più severi.',
        CN: 'Dal 2024 i cittadini cinesi hanno 30 giorni senza visto per ingresso, non più di 90 ogni 180.',
        IN: 'I cittadini indiani hanno bisogno del visto elettronico, ma con un visto o permesso di soggiorno di Stati Uniti, Regno Unito, Schengen o simili entrano senza visto per 90 giorni ogni 180.',
        IR: 'I cittadini iraniani hanno 45 giorni senza visto.',
        US: 'I cittadini statunitensi hanno un anno senza visto.',
      },
    },
  },
};

export default guide;
