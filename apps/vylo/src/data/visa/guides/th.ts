import type { MatrixCell, VisaGuide } from '../types';

/**
 * Since 15 September 2026 (Royal Gazette, 31 August 2026) the 60-day exemption is gone: 60 countries get
 * 30 days, bilateral partners keep their own terms (30 or 90 days), Mauritius and Seychelles get 15 days,
 * 21 nationalities lost visa-free entry and visa on arrival is left only for Azerbaijan, Belarus and Serbia.
 */
const set = (codes: string, cell: MatrixCell) => Object.fromEntries(codes.split(' ').map((c) => [c, cell]));

const overrides: Record<string, MatrixCell> = {
  ...set(
    'AE AT AU BE BG BH BN BT CA CH CN CY CZ DE DK EE ES FI FJ FR GB GE GR HK HR HU ID IE IL IN IS IT JO JP KH KW KZ LA LI LT LU LV MN MO MT MV MY NL NO NZ OM PH PL PT QA RO RU SA SE SG SI SK TR TW UA US VN ZA',
    { status: 'free', days: 30 },
  ),
  ...set('KR PE', { status: 'free', days: 90 }),
  ...set('MU SC', { status: 'free', days: 15 }),
  ...set('AL AD CO CU DM DO EC GT JM XK MX MC MA PA PG SM LK TO TT UY UZ', { status: 'evisa' }),
  ...set('AM BO CR ET KG NA NR PY SV TN VE VU', { status: 'evisa' }),
  AZ: { status: 'voa' },
};

const guide: VisaGuide = {
  code: 'TH',
  checked: '2026-10',
  overrides,
  fees: {
    voa: { kind: 'fixed', amount: 2000, currency: 'THB' },
    evisa: { kind: 'from', amount: 1000, currency: 'THB' },
  },
  stay: { voa: 15, evisa: 60 },
  links: { evisa: 'https://www.thaievisa.go.th', immigration: 'https://www.immigration.go.th' },
  forms: [{ name: 'TDAC', url: 'https://tdac.immigration.go.th', fee: { kind: 'free' } }],
  docs: ['returnTicket', 'booking', 'finance'],
  passportMonths: 6,
  extend: { days: 30, fee: { kind: 'fixed', amount: 1900, currency: 'THB' } },
  visaRun: 'limited',
  borders: [
    { name: 'Nong Khai – Vientiane (Friendship Bridge)', to: 'LA', lat: 17.8771, lng: 102.7158 },
    { name: 'Padang Besar', to: 'MY', lat: 6.6623, lng: 100.3204 },
    { name: 'Suvarnabhumi (BKK) → Kuala Lumpur', to: 'MY', lat: 13.69, lng: 100.7501 },
  ],
  nomad: { name: 'Destination Thailand Visa (DTV)', months: 60 },
  hackScope: [['regime:free', 'regime:evisa'], ['regime:free'], null, null, null],
  pitfallScope: [null, ['regime:free'], null, ['regime:free']],
  text: {
    ru: {
      summary:
        'С 15 сентября 2026 года безвизовый срок сократился с 60 до 30 дней: так въезжают граждане ЕС, Великобритании, США, Индии и ещё около 60 стран, а Россия, Китай и Казахстан — по двусторонним соглашениям на те же 30 дней. Корея и Бразилия сохранили 90 дней. Мексике, Узбекистану и ещё 19 странам теперь нужна электронная виза.',
      apply:
        'Если безвизовый режим не подходит, оформляйте e-визу на thaievisa.go.th: туристическая TR даёт 60 дней и стоит около 1000 бат (в валюте страны подачи), рассмотрение — от 3 до 10 рабочих дней. Виза по прибытии (2000 бат, 15 дней) осталась только для Азербайджана, Беларуси и Сербии. Всем без исключения нужна бесплатная карта TDAC не раньше чем за 3 дня до прилёта.',
      extend:
        'Безвизовые 30 дней один раз продлевают ещё на 30 в любом иммиграционном офисе (в Бангкоке — Чэнгваттана, на Пхукете — Пхукет-таун): анкета TM.7, фото, копии паспорта и 1900 бат наличными. Приходите за неделю до окончания срока и с утра — очереди большие. Туристическую визу TR продлевают так же на 30 дней.',
      visaRun:
        'Визаран работает, но с ограничениями: по безвизу через сухопутную границу можно въехать только два раза за календарный год (на граждан Малайзии, Брунея, Индонезии и Сингапура лимит не распространяется). Через аэропорты формального лимита нет, но после нескольких въездов подряд офицер может спросить про деньги (20 000 бат), билет и цель поездки. Надёжнее всего лететь лоукостером в Куала-Лумпур или Пинанг.',
      nomad:
        'Destination Thailand Visa (DTV) — многократная виза на 5 лет для удалённых работников, фрилансеров и тех, кто учится тайскому боксу или кулинарии: 180 дней за въезд плюс одно продление ещё на 180 дней за 1900 бат. Сбор — 10 000 бат, нужны выписка с 500 000 бат (держать на счёте не менее 3 месяцев) и договор с иностранным работодателем или клиентами. Подаётся онлайн на thaievisa.go.th находясь вне Таиланда.',
      hacks: [
        'Хотите больше месяца без продлений — берите e-визу TR вместо безвиза: 60 дней на въезде и ещё 30 при продлении, итого 90 дней за одну поездку.',
        'Лимит в два сухопутных въезда в год не касается моря: паром Лангкави — Ко Липе или Лангкави — Сатун считается морским пунктом пропуска.',
        'Визаран удобно совмещать с отдыхом: AirAsia летает из Бангкока и Пхукета в Куала-Лумпур и Пинанг от 30–40 $, и выезд с повторным въездом укладываются в один день.',
        'DTV действительна 5 лет, а каждый новый въезд снова даёт 180 дней — выехав в Малайзию на выходные перед окончанием срока, можно жить в Таиланде почти без перерывов.',
        'Карту TDAC можно заполнить с телефона прямо в аэропорту пересадки — главное, чтобы она была подана до прохождения паспортного контроля.',
      ],
      pitfalls: [
        'Сайты-двойники TDAC берут деньги за бесплатную форму. Настоящий адрес только tdac.immigration.go.th.',
        'Если вы въехали до 15 сентября 2026 года, у вас 60 дней; после этой даты — 30. Сверяйтесь со штампом в паспорте: за каждый день просрочки берут 500 бат, а за долгий оверстей запрещают въезд на годы.',
        'Безвиз и TR — только для туризма. Работа, даже удалённая на местного клиента, без разрешения грозит депортацией; для бизнес-поездок нужна виза Non-B.',
        'Лимит двух въездов по суше считают по штампам: на третьей попытке за год вас развернут на границе.',
      ],
      passports: {
        RU: 'Россияне въезжают по двустороннему соглашению: 30 дней за въезд, не более 90 дней за 180. Есть прямые рейсы «Аэрофлота» в Бангкок и на Пхукет. Российские карты не работают — берите доллары или евро, лучший курс в обменниках SuperRich.',
        CN: 'Граждане Китая въезжают без визы по соглашению 2024 года: 30 дней за въезд, суммарно не более 90 дней за 180.',
        IN: 'Индийцы сохранили безвиз, но теперь на 30 дней: план перевести их на платную визу по прибытии отменили в июле 2026 года.',
        KR: 'Для граждан Кореи по соглашению действует 90 дней без визы, но офицеры часто спрашивают обратный билет и бронь.',
        MX: 'С 15 сентября 2026 года граждане Мексики лишились безвиза — нужна e-виза на thaievisa.go.th до вылета.',
        UZ: 'С 15 сентября 2026 года для Узбекистана снова нужна виза: оформите e-визу TR онлайн заранее, на границе её не выдают.',
      },
    },
    en: {
      summary:
        'Since 15 September 2026 the visa-free stay has been cut from 60 to 30 days: that covers EU, UK, US and Indian citizens and around 60 nationalities in all, while Russia, China and Kazakhstan get the same 30 days under bilateral deals. Korea and Brazil keep 90 days. Mexico, Uzbekistan and 19 other countries now need an e-visa.',
      apply:
        'If you cannot enter visa-free, apply for an e-visa at thaievisa.go.th: the TR tourist visa gives 60 days, costs about 1,000 baht (charged in the local currency of where you apply) and takes 3–10 working days. Visa on arrival (2,000 baht, 15 days) now remains only for Azerbaijan, Belarus and Serbia. Everyone must file the free TDAC no earlier than three days before landing.',
      extend:
        'The 30 visa-free days can be extended once by another 30 at any immigration office (Chaeng Watthana in Bangkok, Phuket Town on Phuket): TM.7 form, photo, passport copies and 1,900 baht in cash. Go in the morning, about a week before your stamp expires — queues are long. A TR tourist visa is extended the same way by 30 days.',
      visaRun:
        'Visa runs work, with limits: visa-exempt entries over land are capped at two per calendar year (Malaysian, Bruneian, Indonesian and Singaporean citizens are exempt from the cap). There is no formal limit at airports, but after several back-to-back entries officers may ask about funds (20,000 baht), onward tickets and the purpose of your trip. The safest run is a budget flight to Kuala Lumpur or Penang.',
      nomad:
        'The Destination Thailand Visa (DTV) is a five-year multiple-entry visa for remote workers, freelancers and people taking Muay Thai or cooking courses: 180 days per entry plus one 180-day extension for 1,900 baht. The fee is 10,000 baht; you need a bank statement showing 500,000 baht held for at least three months and a contract with a foreign employer or clients. Apply online at thaievisa.go.th from outside Thailand.',
      hacks: [
        'Want more than a month without paperwork? Get a TR e-visa instead of entering visa-free: 60 days on arrival plus a 30-day extension gives 90 days per trip.',
        'The two-land-entries cap does not apply at sea: the Langkawi – Koh Lipe or Langkawi – Satun ferries count as sea checkpoints.',
        'Combine your run with a break: AirAsia flies from Bangkok and Phuket to Kuala Lumpur and Penang from $30–40, and you can leave and come back the same day.',
        'The DTV is valid for five years and every new entry restarts the 180 days — a weekend in Malaysia before your stamp runs out lets you live in Thailand almost without interruption.',
        'You can fill in the TDAC on your phone at your connecting airport — it just has to be submitted before you reach passport control.',
      ],
      pitfalls: [
        'Look-alike TDAC sites charge money for a free form. The only real address is tdac.immigration.go.th.',
        'If you entered before 15 September 2026 you have 60 days; after that date, 30. Check the stamp in your passport: overstays cost 500 baht a day, and long ones bring multi-year bans.',
        'Visa-free entry and the TR visa are for tourism only. Working without a permit — even remotely for a local client — can lead to deportation; business trips need a Non-B visa.',
        'The two-land-entries cap is counted from your stamps: on a third attempt in the same year you will be turned back at the border.',
      ],
      passports: {
        RU: 'Russian citizens enter under a bilateral agreement: 30 days per entry and no more than 90 days in 180. Aeroflot flies direct to Bangkok and Phuket. Russian cards do not work, so bring dollars or euros — SuperRich exchange booths give the best rates.',
        CN: 'Chinese citizens enter visa-free under a 2024 agreement: 30 days per entry and no more than 90 days in any 180.',
        IN: 'Indian citizens kept visa-free entry, now for 30 days: a plan to move them to a paid visa on arrival was dropped in July 2026.',
        KR: 'Korean citizens keep 90 days visa-free under a bilateral agreement, though officers often ask for an onward ticket and a booking.',
        MX: 'Since 15 September 2026 Mexican citizens no longer enter visa-free — get an e-visa at thaievisa.go.th before flying.',
        UZ: 'Since 15 September 2026 Uzbek citizens need a visa again: apply for the TR e-visa online in advance, as it is not issued at the border.',
      },
    },
    es: {
      summary:
        'Desde el 15 de septiembre de 2026 la estancia sin visado bajó de 60 a 30 días: así entran los ciudadanos de la UE, el Reino Unido, EE. UU., la India y unos 60 países en total, y Rusia, China y Kazajistán tienen esos mismos 30 días por acuerdos bilaterales. Corea y Brasil conservan 90 días. México, Uzbekistán y otros 19 países necesitan ahora un visado electrónico.',
      apply:
        'Si no puedes entrar sin visado, pide el visado electrónico en thaievisa.go.th: el de turista TR da 60 días, cuesta unos 1000 bat (se paga en la moneda del país desde donde lo solicitas) y tarda de 3 a 10 días laborables. El visado a la llegada (2000 bat, 15 días) solo se mantiene para Azerbaiyán, Bielorrusia y Serbia. Todo el mundo debe rellenar la TDAC gratuita como máximo tres días antes de aterrizar.',
      extend:
        'Los 30 días sin visado se prorrogan una vez otros 30 en cualquier oficina de inmigración (Chaeng Watthana en Bangkok, Phuket Town en Phuket): formulario TM.7, foto, copias del pasaporte y 1900 bat en efectivo. Ve por la mañana y una semana antes de que venza el sello, porque las colas son largas. El visado de turista TR se prorroga igual, 30 días.',
      visaRun:
        'El visa run funciona, con límites: las entradas sin visado por tierra están limitadas a dos por año natural (los ciudadanos de Malasia, Brunéi, Indonesia y Singapur quedan fuera del límite). En los aeropuertos no hay tope formal, pero tras varias entradas seguidas el agente puede preguntarte por el dinero (20 000 bat), el billete de salida y el motivo del viaje. Lo más seguro es un vuelo low cost a Kuala Lumpur o Penang.',
      nomad:
        'El Destination Thailand Visa (DTV) es un visado de entradas múltiples de cinco años para teletrabajadores, autónomos y quienes hacen cursos de muay thai o cocina: 180 días por entrada y una prórroga de otros 180 por 1900 bat. Cuesta 10 000 bat; necesitas un extracto con 500 000 bat mantenidos al menos tres meses y un contrato con una empresa o clientes extranjeros. Se solicita en línea en thaievisa.go.th estando fuera de Tailandia.',
      hacks: [
        '¿Quieres más de un mes sin trámites? Pide el visado electrónico TR en lugar de entrar sin visado: 60 días al llegar y 30 más de prórroga suman 90 días por viaje.',
        'El límite de dos entradas por tierra no se aplica por mar: los ferris Langkawi – Koh Lipe o Langkawi – Satun cuentan como puestos marítimos.',
        'Aprovecha el visa run para descansar: AirAsia vuela de Bangkok y Phuket a Kuala Lumpur y Penang desde 30–40 $, y puedes salir y volver el mismo día.',
        'El DTV vale cinco años y cada nueva entrada reinicia los 180 días: un fin de semana en Malasia antes de que venza el sello te permite vivir en Tailandia casi sin interrupciones.',
        'Puedes rellenar la TDAC con el móvil en el aeropuerto de conexión; basta con enviarla antes de llegar al control de pasaportes.',
      ],
      pitfalls: [
        'Las webs que imitan la TDAC cobran por un formulario gratuito. La única dirección real es tdac.immigration.go.th.',
        'Si entraste antes del 15 de septiembre de 2026 tienes 60 días; después de esa fecha, 30. Mira el sello del pasaporte: cada día de más cuesta 500 bat y las estancias irregulares largas conllevan prohibiciones de entrada de varios años.',
        'La entrada sin visado y el visado TR son solo para turismo. Trabajar sin permiso, incluso a distancia para un cliente local, puede acabar en deportación; los viajes de negocios requieren el visado Non-B.',
        'El límite de dos entradas por tierra se cuenta por los sellos: al tercer intento en el mismo año te devolverán en la frontera.',
      ],
      passports: {
        RU: 'Los ciudadanos rusos entran por un acuerdo bilateral: 30 días por entrada y no más de 90 en 180. Aeroflot vuela directo a Bangkok y Phuket. Las tarjetas rusas no funcionan, así que lleva dólares o euros: las casas de cambio SuperRich dan el mejor tipo.',
        CN: 'Los ciudadanos chinos entran sin visado gracias a un acuerdo de 2024: 30 días por entrada y no más de 90 en cualquier periodo de 180.',
        IN: 'Los ciudadanos indios conservan la entrada sin visado, ahora de 30 días: en julio de 2026 se descartó pasarlos a un visado a la llegada de pago.',
        KR: 'Los ciudadanos coreanos mantienen 90 días sin visado por acuerdo bilateral, aunque a menudo se les pide billete de salida y reserva.',
        MX: 'Desde el 15 de septiembre de 2026 los ciudadanos mexicanos ya no entran sin visado: pide el visado electrónico en thaievisa.go.th antes de volar.',
        UZ: 'Desde el 15 de septiembre de 2026 los ciudadanos uzbekos vuelven a necesitar visado: solicita el TR electrónico con antelación, porque no se expide en la frontera.',
      },
    },
    de: {
      summary:
        'Seit dem 15. September 2026 ist der visumfreie Aufenthalt von 60 auf 30 Tage verkürzt: Das gilt für Bürger der EU, Großbritanniens, der USA, Indiens und insgesamt rund 60 Länder; Russland, China und Kasachstan erhalten dieselben 30 Tage über bilaterale Abkommen. Korea und Brasilien behalten 90 Tage. Mexiko, Usbekistan und 19 weitere Länder brauchen jetzt ein E-Visum.',
      apply:
        'Wenn du nicht visumfrei einreisen kannst, beantrage das E-Visum auf thaievisa.go.th: Das Touristenvisum TR gilt 60 Tage, kostet rund 1.000 Baht (abgerechnet in der Währung des Antragslandes) und dauert 3–10 Werktage. Visa on Arrival (2.000 Baht, 15 Tage) gibt es nur noch für Aserbaidschan, Belarus und Serbien. Alle müssen frühestens drei Tage vor der Landung die kostenlose TDAC ausfüllen.',
      extend:
        'Die 30 visumfreien Tage lassen sich einmal um weitere 30 verlängern, in jedem Immigration Office (in Bangkok Chaeng Watthana, auf Phuket in Phuket Town): Formular TM.7, Foto, Passkopien und 1.900 Baht in bar. Geh morgens hin, etwa eine Woche vor Ablauf deines Stempels – die Schlangen sind lang. Ein TR-Touristenvisum wird genauso um 30 Tage verlängert.',
      visaRun:
        'Visa-Runs funktionieren, aber mit Grenzen: Visumfreie Einreisen auf dem Landweg sind auf zwei pro Kalenderjahr begrenzt (Bürger Malaysias, Bruneis, Indonesiens und Singapurs sind ausgenommen). An Flughäfen gibt es kein festes Limit, doch nach mehreren Einreisen hintereinander fragen Beamte nach Geld (20.000 Baht), Weiterflugticket und Reisezweck. Am sichersten ist ein Billigflug nach Kuala Lumpur oder Penang.',
      nomad:
        'Das Destination Thailand Visa (DTV) ist ein Fünfjahresvisum für mehrfache Einreise – für Remote-Worker, Freelancer und alle, die Muay-Thai- oder Kochkurse belegen: 180 Tage pro Einreise plus eine Verlängerung um 180 Tage für 1.900 Baht. Die Gebühr beträgt 10.000 Baht; nötig sind ein Kontoauszug mit 500.000 Baht, die mindestens drei Monate auf dem Konto lagen, und ein Vertrag mit ausländischem Arbeitgeber oder Kunden. Beantragt wird online auf thaievisa.go.th von außerhalb Thailands.',
      hacks: [
        'Mehr als einen Monat ohne Behördengang? Nimm statt der visumfreien Einreise das TR-E-Visum: 60 Tage bei der Einreise plus 30 Tage Verlängerung ergeben 90 Tage pro Reise.',
        'Das Limit von zwei Landeinreisen gilt nicht auf See: Die Fähren Langkawi – Koh Lipe oder Langkawi – Satun zählen als Seegrenzübergänge.',
        'Verbinde den Visa-Run mit einer Auszeit: AirAsia fliegt ab Bangkok und Phuket ab 30–40 $ nach Kuala Lumpur und Penang, Aus- und Wiedereinreise klappen am selben Tag.',
        'Das DTV gilt fünf Jahre, und jede neue Einreise startet die 180 Tage neu – ein Wochenende in Malaysia vor Ablauf des Stempels, und du lebst fast ohne Unterbrechung in Thailand.',
        'Die TDAC kannst du am Umsteigeflughafen auf dem Handy ausfüllen – sie muss nur vor der Passkontrolle abgeschickt sein.',
      ],
      pitfalls: [
        'Nachgemachte TDAC-Seiten kassieren Geld für ein kostenloses Formular. Die einzige echte Adresse ist tdac.immigration.go.th.',
        'Wer vor dem 15. September 2026 eingereist ist, hat 60 Tage, danach sind es 30. Schau auf den Stempel im Pass: Jeder Tag Überziehung kostet 500 Baht, lange Überziehungen ziehen mehrjährige Einreisesperren nach sich.',
        'Visumfreie Einreise und TR-Visum gelten nur für Tourismus. Arbeit ohne Genehmigung – auch remote für einen lokalen Kunden – kann zur Abschiebung führen; Geschäftsreisen brauchen ein Non-B-Visum.',
        'Das Limit von zwei Landeinreisen wird anhand der Stempel gezählt: Beim dritten Versuch im selben Jahr wirst du an der Grenze zurückgeschickt.',
      ],
      passports: {
        RU: 'Russische Staatsangehörige reisen über ein bilaterales Abkommen ein: 30 Tage pro Einreise, höchstens 90 Tage in 180. Aeroflot fliegt direkt nach Bangkok und Phuket. Russische Karten funktionieren nicht – nimm Dollar oder Euro mit, die besten Kurse gibt es bei SuperRich-Wechselstuben.',
        CN: 'Chinesische Staatsangehörige reisen über ein Abkommen von 2024 visumfrei ein: 30 Tage pro Einreise, höchstens 90 Tage innerhalb von 180.',
        IN: 'Indische Staatsangehörige bleiben visumfrei, jetzt für 30 Tage: Der Plan, sie auf ein kostenpflichtiges Visa on Arrival umzustellen, wurde im Juli 2026 gekippt.',
        KR: 'Koreanische Staatsangehörige behalten dank bilateralem Abkommen 90 Tage visumfrei, werden aber oft nach Weiterflugticket und Buchung gefragt.',
        MX: 'Seit dem 15. September 2026 reisen mexikanische Staatsangehörige nicht mehr visumfrei ein – beantrage vor dem Flug das E-Visum auf thaievisa.go.th.',
        UZ: 'Seit dem 15. September 2026 brauchen usbekische Staatsangehörige wieder ein Visum: Beantrage das TR-E-Visum rechtzeitig online, an der Grenze wird es nicht ausgestellt.',
      },
    },
    fr: {
      summary:
        'Depuis le 15 septembre 2026, le séjour sans visa est passé de 60 à 30 jours : c’est le cas des citoyens de l’UE, du Royaume-Uni, des États-Unis, de l’Inde et d’environ 60 pays au total, tandis que la Russie, la Chine et le Kazakhstan obtiennent les mêmes 30 jours par accords bilatéraux. La Corée et le Brésil gardent 90 jours. Le Mexique, l’Ouzbékistan et 19 autres pays ont désormais besoin d’un e-visa.',
      apply:
        'Si vous ne pouvez pas entrer sans visa, demandez l’e-visa sur thaievisa.go.th : le visa touristique TR donne 60 jours, coûte environ 1 000 bahts (payés dans la devise du pays de dépôt) et demande 3 à 10 jours ouvrés. Le visa à l’arrivée (2 000 bahts, 15 jours) ne subsiste que pour l’Azerbaïdjan, la Biélorussie et la Serbie. Tout le monde doit remplir la TDAC gratuite au plus tôt trois jours avant l’atterrissage.',
      extend:
        'Les 30 jours sans visa se prolongent une fois de 30 jours dans n’importe quel bureau d’immigration (Chaeng Watthana à Bangkok, Phuket Town à Phuket) : formulaire TM.7, photo, copies du passeport et 1 900 bahts en espèces. Allez-y le matin, une semaine environ avant l’échéance du tampon, car les files sont longues. Le visa touristique TR se prolonge de la même façon de 30 jours.',
      visaRun:
        'Le visa run fonctionne, avec des limites : les entrées sans visa par voie terrestre sont plafonnées à deux par année civile (les citoyens de Malaisie, Brunei, Indonésie et Singapour en sont exemptés). Dans les aéroports, aucun plafond officiel, mais après plusieurs entrées rapprochées l’agent peut demander vos fonds (20 000 bahts), votre billet de sortie et le but du voyage. Le plus sûr reste un vol low cost vers Kuala Lumpur ou Penang.',
      nomad:
        'Le Destination Thailand Visa (DTV) est un visa à entrées multiples de cinq ans pour télétravailleurs, freelances et élèves de muay-thaï ou de cuisine : 180 jours par entrée, plus une prolongation de 180 jours pour 1 900 bahts. Il coûte 10 000 bahts ; il faut un relevé montrant 500 000 bahts conservés au moins trois mois et un contrat avec un employeur ou des clients étrangers. La demande se fait en ligne sur thaievisa.go.th, depuis l’extérieur de la Thaïlande.',
      hacks: [
        'Plus d’un mois sans démarches ? Prenez l’e-visa TR plutôt que l’entrée sans visa : 60 jours à l’arrivée et 30 de prolongation, soit 90 jours par séjour.',
        'Le plafond de deux entrées terrestres ne s’applique pas en mer : les ferries Langkawi – Koh Lipe ou Langkawi – Satun passent par des postes maritimes.',
        'Profitez du visa run pour souffler : AirAsia relie Bangkok et Phuket à Kuala Lumpur et Penang dès 30–40 $, et l’aller-retour tient dans la journée.',
        'Le DTV vaut cinq ans et chaque nouvelle entrée relance les 180 jours : un week-end en Malaisie avant l’échéance, et vous vivez en Thaïlande presque sans interruption.',
        'Vous pouvez remplir la TDAC sur votre téléphone à l’aéroport de correspondance : il suffit qu’elle soit envoyée avant le contrôle des passeports.',
      ],
      pitfalls: [
        'Des sites imitant la TDAC font payer un formulaire gratuit. La seule adresse officielle est tdac.immigration.go.th.',
        'Entré avant le 15 septembre 2026, vous avez 60 jours ; après cette date, 30. Vérifiez le tampon : chaque jour de dépassement coûte 500 bahts et les longs dépassements valent des interdictions d’entrée de plusieurs années.',
        'L’entrée sans visa et le visa TR sont réservés au tourisme. Travailler sans permis, même à distance pour un client local, peut mener à l’expulsion ; les voyages d’affaires exigent un visa Non-B.',
        'Le plafond de deux entrées terrestres se compte d’après les tampons : à la troisième tentative de l’année, on vous refoulera à la frontière.',
      ],
      passports: {
        RU: 'Les ressortissants russes entrent au titre d’un accord bilatéral : 30 jours par entrée et pas plus de 90 jours sur 180. Aeroflot dessert Bangkok et Phuket en direct. Les cartes russes ne fonctionnent pas : emportez des dollars ou des euros, les bureaux SuperRich offrent les meilleurs taux.',
        CN: 'Les ressortissants chinois entrent sans visa grâce à un accord de 2024 : 30 jours par entrée et pas plus de 90 jours sur 180.',
        IN: 'Les ressortissants indiens gardent l’entrée sans visa, désormais pour 30 jours : le projet de les soumettre à un visa à l’arrivée payant a été abandonné en juillet 2026.',
        KR: 'Les ressortissants coréens conservent 90 jours sans visa grâce à un accord bilatéral, mais on leur demande souvent billet de sortie et réservation.',
        MX: 'Depuis le 15 septembre 2026, les ressortissants mexicains n’entrent plus sans visa : demandez l’e-visa sur thaievisa.go.th avant le départ.',
        UZ: 'Depuis le 15 septembre 2026, les ressortissants ouzbeks ont de nouveau besoin d’un visa : demandez l’e-visa TR en ligne à l’avance, il n’est pas délivré à la frontière.',
      },
    },
    it: {
      summary:
        'Dal 15 settembre 2026 il soggiorno senza visto è sceso da 60 a 30 giorni: vale per i cittadini di UE, Regno Unito, Stati Uniti, India e circa 60 paesi in tutto, mentre Russia, Cina e Kazakistan ottengono gli stessi 30 giorni con accordi bilaterali. Corea e Brasile mantengono 90 giorni. Messico, Uzbekistan e altri 19 paesi ora hanno bisogno del visto elettronico.',
      apply:
        'Se non puoi entrare senza visto, richiedi il visto elettronico su thaievisa.go.th: quello turistico TR dà 60 giorni, costa circa 1.000 baht (pagati nella valuta del paese da cui presenti la domanda) e richiede 3–10 giorni lavorativi. Il visto all’arrivo (2.000 baht, 15 giorni) resta solo per Azerbaigian, Bielorussia e Serbia. Tutti devono compilare la TDAC gratuita non prima di tre giorni dall’atterraggio.',
      extend:
        'I 30 giorni senza visto si prorogano una volta di altri 30 in qualsiasi ufficio immigrazione (Chaeng Watthana a Bangkok, Phuket Town a Phuket): modulo TM.7, foto, copie del passaporto e 1.900 baht in contanti. Vai di mattina, circa una settimana prima della scadenza del timbro: le code sono lunghe. Il visto turistico TR si proroga allo stesso modo di 30 giorni.',
      visaRun:
        'Il visa run funziona, ma con limiti: gli ingressi senza visto via terra sono al massimo due per anno solare (i cittadini di Malesia, Brunei, Indonesia e Singapore sono esclusi dal limite). Negli aeroporti non c’è un tetto formale, ma dopo diversi ingressi ravvicinati l’agente può chiedere fondi (20.000 baht), biglietto di uscita e motivo del viaggio. La soluzione più sicura è un volo low cost per Kuala Lumpur o Penang.',
      nomad:
        'Il Destination Thailand Visa (DTV) è un visto a ingressi multipli di cinque anni per lavoratori da remoto, freelance e chi segue corsi di muay thai o di cucina: 180 giorni per ingresso più una proroga di altri 180 per 1.900 baht. Costa 10.000 baht; servono un estratto conto con 500.000 baht tenuti per almeno tre mesi e un contratto con un datore di lavoro o clienti esteri. Si richiede online su thaievisa.go.th trovandosi fuori dalla Thailandia.',
      hacks: [
        'Vuoi più di un mese senza pratiche? Prendi il visto elettronico TR invece dell’ingresso senza visto: 60 giorni all’arrivo più 30 di proroga fanno 90 giorni per viaggio.',
        'Il limite di due ingressi via terra non vale via mare: i traghetti Langkawi – Koh Lipe o Langkawi – Satun passano da posti di frontiera marittimi.',
        'Unisci il visa run a una pausa: AirAsia vola da Bangkok e Phuket a Kuala Lumpur e Penang da 30–40 $, e uscita e rientro stanno nella stessa giornata.',
        'Il DTV vale cinque anni e ogni nuovo ingresso riparte da 180 giorni: un weekend in Malesia prima della scadenza e vivi in Thailandia quasi senza interruzioni.',
        'La TDAC si compila dal telefono anche nell’aeroporto di scalo: basta inviarla prima di arrivare al controllo passaporti.',
      ],
      pitfalls: [
        'I siti che imitano la TDAC fanno pagare un modulo gratuito. L’unico indirizzo vero è tdac.immigration.go.th.',
        'Se sei entrato prima del 15 settembre 2026 hai 60 giorni; dopo quella data, 30. Controlla il timbro sul passaporto: ogni giorno di troppo costa 500 baht e i lunghi overstay comportano divieti d’ingresso di anni.',
        'L’ingresso senza visto e il visto TR valgono solo per turismo. Lavorare senza permesso, anche da remoto per un cliente locale, può portare all’espulsione; per i viaggi d’affari serve il visto Non-B.',
        'Il limite di due ingressi via terra si conta dai timbri: al terzo tentativo nello stesso anno vieni respinto alla frontiera.',
      ],
      passports: {
        RU: 'I cittadini russi entrano con un accordo bilaterale: 30 giorni per ingresso e non più di 90 giorni su 180. Aeroflot vola diretto a Bangkok e Phuket. Le carte russe non funzionano: porta dollari o euro, i cambi SuperRich offrono i tassi migliori.',
        CN: 'I cittadini cinesi entrano senza visto grazie a un accordo del 2024: 30 giorni per ingresso e non più di 90 giorni su 180.',
        IN: 'I cittadini indiani conservano l’ingresso senza visto, ora di 30 giorni: il piano di passarli a un visto all’arrivo a pagamento è stato abbandonato a luglio 2026.',
        KR: 'I cittadini coreani mantengono 90 giorni senza visto per accordo bilaterale, ma spesso viene chiesto il biglietto di uscita e la prenotazione.',
        MX: 'Dal 15 settembre 2026 i cittadini messicani non entrano più senza visto: richiedi il visto elettronico su thaievisa.go.th prima di partire.',
        UZ: 'Dal 15 settembre 2026 i cittadini uzbeki hanno di nuovo bisogno del visto: richiedi per tempo il TR elettronico online, alla frontiera non viene rilasciato.',
      },
    },
  },
};

export default guide;
