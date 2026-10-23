import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'TW',
  checked: '2026-10',
  overrides: {
    // BOCA: Russian ordinary-passport holders eligible for the eVisa from 7 Jul 2026 to 6 Jul 2027
    RU: { status: 'evisa', days: 30 },
    // Cambodians removed from the Travel Authorization Certificate scheme from 1 Aug 2026
    KH: { status: 'required' },
  },
  fees: { evisa: { kind: 'from', amount: 50, currency: 'USD' }, eta: { kind: 'free' } },
  stay: { evisa: 30, eta: 30 },
  links: {
    evisa: 'https://visawebapp.boca.gov.tw',
    eta: 'https://niaspeedy.immigration.gov.tw/nia_southeast/',
    immigration: 'https://www.immigration.gov.tw',
  },
  forms: [{ name: 'Online Arrival Card', url: 'https://niaspeedy.immigration.gov.tw/webacard/', fee: { kind: 'free' } }],
  docs: ['returnTicket', 'booking'],
  passportMonths: 6,
  extend: { days: 90 },
  visaRun: 'limited',
  borders: [
    { name: 'Taoyuan (TPE) → Hong Kong', to: 'HK', lat: 25.0797, lng: 121.2342 },
    { name: 'Taipei Songshan (TSA) → Tokyo Haneda', to: 'JP', lat: 25.0694, lng: 121.5525 },
    { name: 'Kinmen Shuitou Pier → Xiamen', to: 'CN', lat: 24.4087, lng: 118.2905 },
  ],
  waivers: [
    {
      holds: ['visaUS', 'visaGB', 'visaSchengen', 'visaCA', 'visaJP', 'visaAU', 'visaNZ', 'visaKR', 'resUS', 'resGB', 'resEU', 'resCA', 'resAU', 'resJP'],
      passports: ['IN', 'ID', 'MM', 'LA'],
      status: 'eta',
      days: 30,
    },
    {
      holds: ['visaUS', 'visaGB', 'visaSchengen', 'visaCA', 'visaAU', 'visaNZ', 'resUS', 'resGB', 'resEU', 'resCA', 'resAU'],
      passports: ['VN'],
      status: 'eta',
      days: 30,
    },
    {
      holds: ['visaSchengen', 'resEU', 'visaUS', 'resUS'],
      passports: ['AM', 'KZ', 'UZ'],
      status: 'evisa',
      days: 30,
    },
  ],
  text: {
    ru: {
      summary:
        'Граждане США, Канады, Великобритании, стран ЕС, Австралии, Новой Зеландии, Японии, Кореи и Израиля въезжают без визы на 90 дней, Малайзии и Сингапура — на 30, Таиланда, Филиппин и Брунея — на 14. Россиянам с июля 2026 года доступна электронная виза на 30 дней, а граждане Индии, Индонезии и Вьетнама с визой США, Шенгена, Японии и ряда других стран получают бесплатное онлайн-разрешение TAC.',
      apply:
        'Электронную визу оформляют на visawebapp.boca.gov.tw: анкета, фото, скан паспорта, брони билетов и отеля, оплата картой — около 50 $. Обычно её выдают за 3 рабочих дня; виза однократная, даёт 30 дней и действует 3 месяца с даты выдачи. Разрешение TAC оформляется на сайте Национального иммиграционного агентства бесплатно и почти сразу; оно действует 90 дней и допускает несколько въездов до 30 дней.',
      extend:
        'Граждане Великобритании и Канады могут один раз продлить 90-дневный безвизовый срок ещё на 90 дней (всего 180) в офисе Национального иммиграционного агентства. Остальным безвизовое пребывание не продлевают, кроме форс-мажора, — нужно выехать.',
      visaRun:
        'Визаран работает ограниченно: после выезда начинается новый срок, но тех, кто живёт на Тайване короткими перерывами, всё чаще расспрашивают и могут не впустить. Короткие поездки — в Гонконг, на Окинаву или в Токио; паром с Цзиньмэня в Сямэнь подходит, только если вам открыт въезд в Китай.',
      hacks: [
        'Для TAC годится и просроченная виза или вид на жительство США, Канады, Шенгена, Великобритании, Японии, Кореи, Австралии или Новой Зеландии — если истёк не более 10 лет назад. Электронные визы тоже принимают.',
        'Гражданам Армении, Казахстана и Узбекистана с визой или ВНЖ Шенгена либо визой или ВНЖ США сроком больше 180 дней до 31 марта 2027 года доступна электронная виза вместо поездки в консульство.',
        'Заполните онлайн-карту прибытия на сайте иммиграционного агентства до вылета — бумажную карту на границе писать не придётся.',
        'Граждане Таиланда, Филиппин и Брунея въезжают без визы на 14 дней — пробную программу продлили до 31 июля 2027 года, её продлевают ежегодно.',
        'Тем, кто хочет остаться надолго, подойдёт Employment Gold Card — открытое разрешение на работу и проживание на 1–3 года для специалистов, например с зарплатой от 160 000 новых тайваньских долларов в месяц.',
      ],
      pitfalls: [
        'Срок пребывания считается со дня после прилёта. За перерасчёт штрафуют на 2000–10 000 тайваньских долларов и могут запретить въезд.',
        'Сайты-посредники «Taiwan eVisa» берут втрое больше. Официальный адрес только один — visawebapp.boca.gov.tw.',
        'Паспорт должен быть действителен не менее 6 месяцев, а авиакомпании проверяют обратный билет — без него не посадят даже безвизовых пассажиров.',
        'TAC недоступен тем, кто когда-либо работал на Тайване по рабочей визе мигранта (на фабриках, в домашнем уходе и т. п.).',
      ],
      waivers: [
        'Граждане Индии, Индонезии, Мьянмы и Лаоса с визой или ВНЖ США, Канады, Шенгена, Великобритании, Японии, Кореи, Австралии или Новой Зеландии получают бесплатный TAC: 30 дней за въезд, несколько въездов за 90 дней. Подходят действующие документы и истёкшие не более 10 лет назад, в том числе электронные визы.',
        'Граждане Вьетнама получают TAC на тех же условиях, но японские и корейские визы и ВНЖ для них не считаются — нужен документ США, Канады, Шенгена, Великобритании, Австралии или Новой Зеландии.',
        'Граждане Армении, Казахстана и Узбекистана с визой или ВНЖ Шенгена либо визой или ВНЖ США сроком больше 180 дней могут с 31 марта 2026 года по 31 марта 2027 года получить электронную визу на 30 дней вместо консульской.',
      ],
      passports: {
        RU: 'С 7 июля 2026 года по 6 июля 2027 года россияне с общегражданским загранпаспортом могут получить электронную визу на 30 дней. Прямых рейсов нет — удобнее лететь через Гонконг, Бангкок или Стамбул. Российские карты не работают, а оплатить визу можно только иностранной картой.',
        IN: 'Гражданам Индии с действующей или просроченной не более 10 лет визой или ВНЖ США, Шенгена, Великобритании, Японии и ряда других стран подойдёт бесплатный TAC на 30 дней. Без этого — обычная виза через тайбэйскую миссию в Индии.',
        GB: 'Британцы получают 90 дней без визы и могут один раз продлить их ещё на 90 дней на месте.',
        CA: 'Канадцы получают 90 дней без визы и могут один раз продлить их ещё на 90 дней на месте.',
        CN: 'Жителям материкового Китая нужен не визовый, а особый въездной пропуск; туристические поездки с материка давно сильно ограничены — проверьте правила для своей ситуации.',
        KH: 'С 1 августа 2026 года граждане Камбоджи больше не могут получить TAC — нужна обычная виза.',
      },
    },
    en: {
      summary:
        'Citizens of the US, Canada, the UK, the EU, Australia, New Zealand, Japan, Korea and Israel enter visa-free for 90 days, Malaysians and Singaporeans for 30, and Thais, Filipinos and Bruneians for 14. Since July 2026 Russians can get a 30-day eVisa, and Indian, Indonesian and Vietnamese citizens holding a US, Schengen, Japanese or certain other visa get a free online Travel Authorization Certificate (TAC).',
      apply:
        'Apply for the eVisa at visawebapp.boca.gov.tw: form, photo, passport scan, flight and hotel bookings, card payment of about $50. It is usually issued within 3 working days; it is single-entry, allows 30 days and is valid for 3 months from issue. The TAC is free on the National Immigration Agency site and comes almost instantly; it is valid for 90 days and allows several entries of up to 30 days.',
      extend:
        'British and Canadian citizens can extend their 90-day visa-free stay once by another 90 days (180 in total) at a National Immigration Agency office. Visa-free stays are not extended for anyone else except in emergencies — you have to leave.',
      visaRun:
        'Visa runs work within limits: leaving starts a new stay, but people who live in Taiwan with short breaks are increasingly questioned and can be refused. Short hops go to Hong Kong, Okinawa or Tokyo; the Kinmen–Xiamen ferry only works if you can enter mainland China.',
      hacks: [
        'An expired US, Canadian, Schengen, UK, Japanese, Korean, Australian or New Zealand visa or residence permit also counts for the TAC, as long as it expired within the last 10 years. E-visas are accepted too.',
        'Armenian, Kazakh and Uzbek citizens holding a Schengen visa or residence permit, or a US visa or residence permit valid for more than 180 days, can get the eVisa instead of visiting a consulate until 31 March 2027.',
        'Fill in the Online Arrival Card on the immigration agency site before you fly and skip the paper card at the border.',
        'Thai, Philippine and Bruneian citizens enter visa-free for 14 days — the trial has been extended to 31 July 2027 and is renewed every year.',
        'For a longer stay, the Employment Gold Card is a 1- to 3-year open work and residence permit for professionals — one route is a salary of NT$160,000 a month or more.',
      ],
      pitfalls: [
        'Your stay is counted from the day after arrival. Overstays are fined NT$2,000–10,000 and can lead to an entry ban.',
        'Look-alike “Taiwan eVisa” sites charge three times as much. The only official address is visawebapp.boca.gov.tw.',
        'Your passport needs 6 months’ validity, and airlines check for an onward ticket — without one you will not board, even visa-free.',
        'The TAC is not available to anyone who has ever worked in Taiwan on a migrant-worker visa (factory, domestic care and similar jobs).',
      ],
      waivers: [
        'Indian, Indonesian, Myanmar and Lao citizens holding a US, Canadian, Schengen, UK, Japanese, Korean, Australian or New Zealand visa or residence permit get the free TAC: 30 days per entry, several entries within 90 days. Valid documents count, as do ones that expired within the last 10 years, e-visas included.',
        'Vietnamese citizens get the TAC on the same terms, except that Japanese and Korean visas and residence permits do not count — you need a US, Canadian, Schengen, UK, Australian or New Zealand document.',
        'Armenian, Kazakh and Uzbek citizens holding a Schengen visa or residence permit, or a US visa or residence permit valid for more than 180 days, can get a 30-day eVisa instead of a consular visa from 31 March 2026 to 31 March 2027.',
      ],
      passports: {
        RU: 'From 7 July 2026 to 6 July 2027, Russians with an ordinary passport can get a 30-day eVisa. There are no direct flights — route via Hong Kong, Bangkok or Istanbul. Russian cards do not work, and the eVisa can only be paid with a foreign card.',
        IN: 'Indian citizens with a valid US, Schengen, UK, Japanese or certain other visa or residence permit — or one that expired less than 10 years ago — can use the free 30-day TAC. Otherwise apply for a regular visa through the Taipei mission in India.',
        GB: 'British citizens get 90 days visa-free and can extend once by another 90 days in Taiwan.',
        CA: 'Canadian citizens get 90 days visa-free and can extend once by another 90 days in Taiwan.',
        CN: 'Mainland Chinese residents need a special entry permit rather than a visa, and tourist travel from the mainland has long been heavily restricted — check the rules for your situation.',
        KH: 'Since 1 August 2026 Cambodian citizens can no longer get a TAC and need a regular visa.',
      },
    },
    es: {
      summary:
        'Los ciudadanos de EE. UU., Canadá, Reino Unido, la UE, Australia, Nueva Zelanda, Japón, Corea e Israel entran sin visado 90 días; los de Malasia y Singapur, 30, y los de Tailandia, Filipinas y Brunéi, 14. Desde julio de 2026 los rusos pueden pedir un visado electrónico de 30 días, y los ciudadanos de India, Indonesia y Vietnam con visado de EE. UU., Schengen, Japón u otros países obtienen gratis en línea el certificado TAC.',
      apply:
        'El visado electrónico se pide en visawebapp.boca.gov.tw: formulario, foto, escaneo del pasaporte, reservas de vuelo y hotel y pago con tarjeta, unos 50 $. Suele concederse en 3 días laborables; es de una entrada, permite 30 días y vale 3 meses desde su emisión. El TAC es gratuito en la web de la Agencia Nacional de Inmigración y llega casi al instante; vale 90 días y permite varias entradas de hasta 30 días.',
      extend:
        'Los británicos y los canadienses pueden prorrogar una vez su estancia sin visado de 90 días otros 90 (180 en total) en una oficina de la Agencia Nacional de Inmigración. Al resto no se le prorroga la estancia sin visado salvo emergencias: hay que salir.',
      visaRun:
        'El visa run funciona con límites: al salir empieza una nueva estancia, pero a quien vive en Taiwán con pausas cortas se le pregunta cada vez más y puede quedarse fuera. Las escapadas típicas son a Hong Kong, Okinawa o Tokio; el ferri de Kinmen a Xiamen solo sirve si puedes entrar en China continental.',
      hacks: [
        'Para el TAC también vale un visado o permiso de residencia caducado de EE. UU., Canadá, Schengen, Reino Unido, Japón, Corea, Australia o Nueva Zelanda, siempre que caducara hace menos de 10 años. Los visados electrónicos se aceptan.',
        'Los ciudadanos de Armenia, Kazajistán y Uzbekistán con visado o residencia Schengen, o con visado o residencia de EE. UU. de más de 180 días, pueden pedir el visado electrónico sin pasar por el consulado hasta el 31 de marzo de 2027.',
        'Rellena la Online Arrival Card en la web de inmigración antes del vuelo y te ahorras la tarjeta de papel en la frontera.',
        'Tailandeses, filipinos y bruneanos entran sin visado 14 días: el programa piloto se ha prorrogado hasta el 31 de julio de 2027 y se renueva cada año.',
        'Para quedarte más tiempo existe la Employment Gold Card, un permiso abierto de trabajo y residencia de 1 a 3 años para profesionales; una de las vías es un sueldo de 160 000 NT$ al mes o más.',
      ],
      pitfalls: [
        'La estancia se cuenta desde el día siguiente a la llegada. Quedarse de más se multa con 2000–10 000 NT$ y puede acarrear prohibición de entrada.',
        'Las webs imitadoras de «Taiwan eVisa» cobran el triple. La única dirección oficial es visawebapp.boca.gov.tw.',
        'El pasaporte necesita 6 meses de validez y las aerolíneas exigen billete de salida: sin él no embarcas, aunque entres sin visado.',
        'El TAC no está disponible para quien haya trabajado alguna vez en Taiwán con visado de trabajador migrante (fábricas, cuidados domésticos y similares).',
      ],
      waivers: [
        'Los ciudadanos de India, Indonesia, Myanmar y Laos con visado o residencia de EE. UU., Canadá, Schengen, Reino Unido, Japón, Corea, Australia o Nueva Zelanda obtienen el TAC gratuito: 30 días por entrada y varias entradas en 90 días. Valen los documentos vigentes y los caducados hace menos de 10 años, incluidos los visados electrónicos.',
        'Los ciudadanos de Vietnam obtienen el TAC en las mismas condiciones, salvo que los visados y permisos de residencia japoneses y coreanos no cuentan: necesitas un documento de EE. UU., Canadá, Schengen, Reino Unido, Australia o Nueva Zelanda.',
        'Los ciudadanos de Armenia, Kazajistán y Uzbekistán con visado o residencia Schengen, o con visado o residencia de EE. UU. de más de 180 días, pueden obtener del 31 de marzo de 2026 al 31 de marzo de 2027 un visado electrónico de 30 días en lugar del consular.',
      ],
      passports: {
        RU: 'Del 7 de julio de 2026 al 6 de julio de 2027, los rusos con pasaporte ordinario pueden obtener un visado electrónico de 30 días. No hay vuelos directos: pasa por Hong Kong, Bangkok o Estambul. Las tarjetas rusas no funcionan y el visado solo se paga con tarjeta extranjera.',
        IN: 'Los ciudadanos indios con visado o residencia vigente de EE. UU., Schengen, Reino Unido, Japón u otros países —o caducado hace menos de 10 años— pueden usar el TAC gratuito de 30 días. Si no, visado normal en la misión de Taipéi en India.',
        GB: 'Los británicos tienen 90 días sin visado y pueden prorrogarlos una vez otros 90 en Taiwán.',
        CA: 'Los canadienses tienen 90 días sin visado y pueden prorrogarlos una vez otros 90 en Taiwán.',
        CN: 'Los residentes de la China continental no necesitan visado sino un permiso de entrada especial, y el turismo desde el continente lleva años muy restringido: consulta las reglas para tu caso.',
        KH: 'Desde el 1 de agosto de 2026 los camboyanos ya no pueden obtener el TAC y necesitan un visado normal.',
      },
    },
    de: {
      summary:
        'Bürger der USA, Kanadas, Großbritanniens, der EU, Australiens, Neuseelands, Japans, Koreas und Israels reisen 90 Tage visumfrei ein, Malaysier und Singapurer 30 Tage, Thailänder, Filipinos und Bruneier 14. Seit Juli 2026 bekommen Russen ein 30-tägiges E-Visum, und Inder, Indonesier und Vietnamesen mit einem Visum der USA, des Schengenraums, Japans oder bestimmter anderer Länder erhalten online kostenlos das Travel Authorization Certificate (TAC).',
      apply:
        'Das E-Visum beantragst du auf visawebapp.boca.gov.tw: Formular, Foto, Passscan, Flug- und Hotelbuchung, Kartenzahlung von etwa 50 $. Es wird meist innerhalb von 3 Werktagen erteilt, gilt für eine Einreise, erlaubt 30 Tage und ist 3 Monate ab Ausstellung gültig. Das TAC gibt es kostenlos auf der Website der National Immigration Agency, fast sofort; es gilt 90 Tage für mehrere Einreisen von je bis zu 30 Tagen.',
      extend:
        'Britische und kanadische Staatsangehörige können ihren 90-tägigen visumfreien Aufenthalt einmal um weitere 90 Tage (insgesamt 180) bei der National Immigration Agency verlängern. Für alle anderen gibt es außer in Notfällen keine Verlängerung – du musst ausreisen.',
      visaRun:
        'Visa-Runs gehen nur eingeschränkt: Die Ausreise startet einen neuen Aufenthalt, doch wer mit kurzen Pausen in Taiwan lebt, wird immer öfter befragt und kann abgewiesen werden. Kurze Abstecher gehen nach Hongkong, Okinawa oder Tokio; die Fähre von Kinmen nach Xiamen taugt nur, wenn du nach Festlandchina einreisen darfst.',
      hacks: [
        'Für das TAC zählt auch ein abgelaufenes Visum oder Aufenthaltstitel der USA, Kanadas, des Schengenraums, Großbritanniens, Japans, Koreas, Australiens oder Neuseelands, sofern es vor weniger als 10 Jahren abgelaufen ist. E-Visa werden ebenfalls akzeptiert.',
        'Armenier, Kasachen und Usbeken mit Schengen-Visum oder -Aufenthaltstitel oder mit einem US-Visum bzw. -Aufenthaltstitel, der länger als 180 Tage gültig ist, können bis 31. März 2027 das E-Visum statt eines Konsulatsvisums nutzen.',
        'Füll die Online Arrival Card vor dem Flug auf der Website der Einwanderungsbehörde aus – dann entfällt die Papierkarte an der Grenze.',
        'Thailänder, Filipinos und Bruneier reisen 14 Tage visumfrei ein – das Pilotprogramm wurde bis 31. Juli 2027 verlängert und wird jährlich erneuert.',
        'Für längere Aufenthalte gibt es die Employment Gold Card, eine offene Arbeits- und Aufenthaltserlaubnis für 1–3 Jahre für Fachkräfte; ein Weg ist ein Gehalt ab 160.000 NT$ im Monat.',
      ],
      pitfalls: [
        'Der Aufenthalt zählt ab dem Tag nach der Ankunft. Überziehungen kosten 2.000–10.000 NT$ Bußgeld und können eine Einreisesperre nach sich ziehen.',
        'Nachgemachte „Taiwan eVisa“-Seiten verlangen das Dreifache. Die einzige offizielle Adresse ist visawebapp.boca.gov.tw.',
        'Der Pass muss 6 Monate gültig sein, und Airlines prüfen das Weiterreiseticket – ohne kommst du auch visumfrei nicht an Bord.',
        'Das TAC ist ausgeschlossen, wenn du jemals mit einem Arbeitsmigrantenvisum in Taiwan gearbeitet hast (Fabrik, häusliche Pflege und Ähnliches).',
      ],
      waivers: [
        'Staatsangehörige Indiens, Indonesiens, Myanmars und Laos’ mit Visum oder Aufenthaltstitel der USA, Kanadas, des Schengenraums, Großbritanniens, Japans, Koreas, Australiens oder Neuseelands bekommen das kostenlose TAC: 30 Tage pro Einreise, mehrere Einreisen innerhalb von 90 Tagen. Es zählen gültige Dokumente und solche, die vor weniger als 10 Jahren abgelaufen sind, E-Visa eingeschlossen.',
        'Vietnamesische Staatsangehörige bekommen das TAC zu denselben Bedingungen, nur zählen japanische und koreanische Visa und Aufenthaltstitel nicht – nötig ist ein Dokument der USA, Kanadas, des Schengenraums, Großbritanniens, Australiens oder Neuseelands.',
        'Armenier, Kasachen und Usbeken mit Schengen-Visum oder -Aufenthaltstitel oder mit einem US-Visum bzw. -Aufenthaltstitel, der länger als 180 Tage gültig ist, können vom 31. März 2026 bis 31. März 2027 statt eines Konsulatsvisums ein 30-tägiges E-Visum bekommen.',
      ],
      passports: {
        RU: 'Vom 7. Juli 2026 bis 6. Juli 2027 können Russen mit regulärem Reisepass ein 30-tägiges E-Visum bekommen. Direktflüge gibt es nicht – reise über Hongkong, Bangkok oder Istanbul. Russische Karten funktionieren nicht, das E-Visum lässt sich nur mit ausländischer Karte bezahlen.',
        IN: 'Indische Staatsangehörige mit gültigem – oder vor weniger als 10 Jahren abgelaufenem – Visum oder Aufenthaltstitel der USA, des Schengenraums, Großbritanniens, Japans oder bestimmter anderer Länder können das kostenlose 30-Tage-TAC nutzen. Sonst gibt es ein reguläres Visum bei der Taipeh-Vertretung in Indien.',
        GB: 'Briten bekommen 90 Tage visumfrei und können einmal vor Ort um weitere 90 Tage verlängern.',
        CA: 'Kanadier bekommen 90 Tage visumfrei und können einmal vor Ort um weitere 90 Tage verlängern.',
        CN: 'Bewohner Festlandchinas brauchen kein Visum, sondern eine besondere Einreisegenehmigung, und touristische Reisen vom Festland sind seit Langem stark eingeschränkt – prüfe die Regeln für deinen Fall.',
        KH: 'Seit dem 1. August 2026 können kambodschanische Staatsangehörige kein TAC mehr beantragen und brauchen ein reguläres Visum.',
      },
    },
    fr: {
      summary:
        'Les citoyens des États-Unis, du Canada, du Royaume-Uni, de l’UE, d’Australie, de Nouvelle-Zélande, du Japon, de Corée et d’Israël entrent sans visa pour 90 jours, ceux de Malaisie et de Singapour pour 30, ceux de Thaïlande, des Philippines et de Brunei pour 14. Depuis juillet 2026, les Russes peuvent obtenir un e-visa de 30 jours, et les Indiens, Indonésiens et Vietnamiens titulaires d’un visa américain, Schengen, japonais ou de certains autres pays obtiennent gratuitement en ligne le certificat TAC.',
      apply:
        'L’e-visa se demande sur visawebapp.boca.gov.tw : formulaire, photo, scan du passeport, réservations de vol et d’hôtel, paiement par carte d’environ 50 $. Il est généralement délivré sous 3 jours ouvrés ; il est à entrée unique, permet 30 jours et reste valable 3 mois après sa délivrance. Le TAC est gratuit sur le site de la National Immigration Agency et arrive presque immédiatement ; il vaut 90 jours pour plusieurs entrées de 30 jours maximum.',
      extend:
        'Les Britanniques et les Canadiens peuvent prolonger une fois leur séjour sans visa de 90 jours de 90 jours supplémentaires (180 au total) dans un bureau de la National Immigration Agency. Pour les autres, aucune prolongation sauf urgence : il faut sortir.',
      visaRun:
        'Le visa run fonctionne avec des limites : la sortie ouvre un nouveau séjour, mais ceux qui vivent à Taïwan avec de courtes pauses sont de plus en plus souvent interrogés et peuvent être refoulés. Les sauts de puce classiques vont à Hong Kong, Okinawa ou Tokyo ; le ferry Kinmen–Xiamen ne convient que si vous pouvez entrer en Chine continentale.',
      hacks: [
        'Pour le TAC, un visa ou titre de séjour expiré des États-Unis, du Canada, de l’espace Schengen, du Royaume-Uni, du Japon, de Corée, d’Australie ou de Nouvelle-Zélande compte aussi, s’il a expiré il y a moins de 10 ans. Les visas électroniques sont acceptés.',
        'Les Arméniens, Kazakhs et Ouzbeks titulaires d’un visa ou titre de séjour Schengen, ou d’un visa ou titre de séjour américain valable plus de 180 jours, peuvent demander l’e-visa au lieu de passer par un consulat jusqu’au 31 mars 2027.',
        'Remplissez l’Online Arrival Card sur le site de l’immigration avant le vol : vous éviterez la carte papier à la frontière.',
        'Les Thaïlandais, Philippins et Brunéiens entrent sans visa pour 14 jours : le programme pilote a été prolongé jusqu’au 31 juillet 2027 et il est reconduit chaque année.',
        'Pour un long séjour, l’Employment Gold Card est un permis ouvert de travail et de séjour de 1 à 3 ans pour les professionnels ; l’une des voies est un salaire d’au moins 160 000 NT$ par mois.',
      ],
      pitfalls: [
        'Le séjour se compte à partir du lendemain de l’arrivée. Un dépassement coûte 2 000 à 10 000 NT$ d’amende et peut entraîner une interdiction d’entrée.',
        'Des sites copiés « Taiwan eVisa » facturent trois fois plus cher. La seule adresse officielle est visawebapp.boca.gov.tw.',
        'Le passeport doit être valable 6 mois et les compagnies vérifient le billet de sortie : sans lui, pas d’embarquement, même sans visa.',
        'Le TAC est fermé à quiconque a déjà travaillé à Taïwan avec un visa de travailleur migrant (usine, aide à domicile, etc.).',
      ],
      waivers: [
        'Les ressortissants d’Inde, d’Indonésie, de Birmanie et du Laos titulaires d’un visa ou titre de séjour des États-Unis, du Canada, de l’espace Schengen, du Royaume-Uni, du Japon, de Corée, d’Australie ou de Nouvelle-Zélande obtiennent le TAC gratuit : 30 jours par entrée, plusieurs entrées sur 90 jours. Les documents valides comptent, tout comme ceux expirés depuis moins de 10 ans, visas électroniques compris.',
        'Les Vietnamiens obtiennent le TAC aux mêmes conditions, sauf que les visas et titres de séjour japonais et coréens ne comptent pas : il faut un document des États-Unis, du Canada, de l’espace Schengen, du Royaume-Uni, d’Australie ou de Nouvelle-Zélande.',
        'Les Arméniens, Kazakhs et Ouzbeks titulaires d’un visa ou titre de séjour Schengen, ou d’un visa ou titre de séjour américain valable plus de 180 jours, peuvent obtenir du 31 mars 2026 au 31 mars 2027 un e-visa de 30 jours au lieu d’un visa consulaire.',
      ],
      passports: {
        RU: 'Du 7 juillet 2026 au 6 juillet 2027, les Russes munis d’un passeport ordinaire peuvent obtenir un e-visa de 30 jours. Pas de vol direct : passez par Hong Kong, Bangkok ou Istanbul. Les cartes russes ne fonctionnent pas et l’e-visa se paie uniquement avec une carte étrangère.',
        IN: 'Les Indiens titulaires d’un visa ou titre de séjour valide — ou expiré depuis moins de 10 ans — des États-Unis, de l’espace Schengen, du Royaume-Uni, du Japon ou de certains autres pays peuvent utiliser le TAC gratuit de 30 jours. Sinon, visa classique auprès de la mission de Taipei en Inde.',
        GB: 'Les Britanniques ont 90 jours sans visa et peuvent les prolonger une fois de 90 jours sur place.',
        CA: 'Les Canadiens ont 90 jours sans visa et peuvent les prolonger une fois de 90 jours sur place.',
        CN: 'Les résidents de Chine continentale n’ont pas besoin d’un visa mais d’un permis d’entrée spécial, et le tourisme depuis le continent est très limité depuis longtemps : vérifiez les règles pour votre situation.',
        KH: 'Depuis le 1er août 2026, les Cambodgiens ne peuvent plus obtenir de TAC et ont besoin d’un visa classique.',
      },
    },
    it: {
      summary:
        'I cittadini di Stati Uniti, Canada, Regno Unito, UE, Australia, Nuova Zelanda, Giappone, Corea e Israele entrano senza visto per 90 giorni, quelli di Malesia e Singapore per 30, quelli di Thailandia, Filippine e Brunei per 14. Da luglio 2026 i russi possono ottenere un visto elettronico di 30 giorni, mentre indiani, indonesiani e vietnamiti con visto statunitense, Schengen, giapponese o di alcuni altri paesi ottengono gratis online il certificato TAC.',
      apply:
        'Il visto elettronico si chiede su visawebapp.boca.gov.tw: modulo, foto, scansione del passaporto, prenotazioni di volo e hotel, pagamento con carta di circa 50 $. Di solito arriva in 3 giorni lavorativi; è a ingresso singolo, consente 30 giorni e vale 3 mesi dal rilascio. Il TAC è gratuito sul sito della National Immigration Agency e arriva quasi subito; vale 90 giorni e permette più ingressi fino a 30 giorni.',
      extend:
        'I cittadini britannici e canadesi possono prorogare una volta il soggiorno senza visto di 90 giorni di altri 90 (180 in tutto) in un ufficio della National Immigration Agency. Per gli altri non ci sono proroghe salvo emergenze: bisogna uscire.',
      visaRun:
        'Il visa run funziona entro certi limiti: uscire fa partire un nuovo soggiorno, ma chi vive a Taiwan con brevi pause viene interrogato sempre più spesso e può essere respinto. Le uscite brevi tipiche sono Hong Kong, Okinawa o Tokyo; il traghetto Kinmen–Xiamen va bene solo se puoi entrare nella Cina continentale.',
      hacks: [
        'Per il TAC vale anche un visto o permesso di soggiorno scaduto di Stati Uniti, Canada, area Schengen, Regno Unito, Giappone, Corea, Australia o Nuova Zelanda, purché scaduto da meno di 10 anni. Sono accettati anche i visti elettronici.',
        'I cittadini di Armenia, Kazakistan e Uzbekistan con visto o permesso Schengen, oppure con visto o permesso statunitense valido più di 180 giorni, possono ottenere il visto elettronico senza passare dal consolato fino al 31 marzo 2027.',
        'Compila la Online Arrival Card sul sito dell’immigrazione prima del volo e salti la carta cartacea alla frontiera.',
        'Thailandesi, filippini e bruneiani entrano senza visto per 14 giorni: il programma sperimentale è stato prorogato al 31 luglio 2027 e si rinnova ogni anno.',
        'Per restare a lungo c’è la Employment Gold Card, un permesso aperto di lavoro e soggiorno da 1 a 3 anni per professionisti; una delle strade è uno stipendio di almeno 160.000 NT$ al mese.',
      ],
      pitfalls: [
        'Il soggiorno si conta dal giorno dopo l’arrivo. Chi resta oltre paga una multa di 2.000–10.000 NT$ e rischia il divieto di ingresso.',
        'I siti imitazione di «Taiwan eVisa» fanno pagare il triplo. L’unico indirizzo ufficiale è visawebapp.boca.gov.tw.',
        'Il passaporto deve avere 6 mesi di validità e le compagnie controllano il biglietto di uscita: senza non ti imbarcano, anche se non ti serve il visto.',
        'Il TAC non è disponibile per chi ha lavorato a Taiwan con un visto da lavoratore migrante (fabbrica, assistenza domestica e simili).',
      ],
      waivers: [
        'I cittadini di India, Indonesia, Myanmar e Laos con visto o permesso di soggiorno di Stati Uniti, Canada, area Schengen, Regno Unito, Giappone, Corea, Australia o Nuova Zelanda ottengono il TAC gratuito: 30 giorni per ingresso e più ingressi in 90 giorni. Valgono i documenti validi e quelli scaduti da meno di 10 anni, visti elettronici compresi.',
        'I cittadini vietnamiti ottengono il TAC alle stesse condizioni, ma visti e permessi giapponesi e coreani non contano: serve un documento di Stati Uniti, Canada, area Schengen, Regno Unito, Australia o Nuova Zelanda.',
        'I cittadini di Armenia, Kazakistan e Uzbekistan con visto o permesso Schengen, oppure con visto o permesso statunitense valido più di 180 giorni, possono ottenere dal 31 marzo 2026 al 31 marzo 2027 un visto elettronico di 30 giorni al posto di quello consolare.',
      ],
      passports: {
        RU: 'Dal 7 luglio 2026 al 6 luglio 2027 i russi con passaporto ordinario possono ottenere un visto elettronico di 30 giorni. Non ci sono voli diretti: passa da Hong Kong, Bangkok o Istanbul. Le carte russe non funzionano e il visto si paga solo con carta estera.',
        IN: 'I cittadini indiani con visto o permesso valido — o scaduto da meno di 10 anni — di Stati Uniti, area Schengen, Regno Unito, Giappone o alcuni altri paesi possono usare il TAC gratuito di 30 giorni. Altrimenti serve un visto normale presso la missione di Taipei in India.',
        GB: 'I britannici hanno 90 giorni senza visto e possono prorogarli una volta di altri 90 sul posto.',
        CA: 'I canadesi hanno 90 giorni senza visto e possono prorogarli una volta di altri 90 sul posto.',
        CN: 'Ai residenti della Cina continentale non serve un visto ma un permesso d’ingresso speciale, e il turismo dal continente è da tempo molto limitato: verifica le regole per il tuo caso.',
        KH: 'Dal 1° agosto 2026 i cittadini cambogiani non possono più ottenere il TAC e hanno bisogno di un visto normale.',
      },
    },
  },
};

export default guide;
