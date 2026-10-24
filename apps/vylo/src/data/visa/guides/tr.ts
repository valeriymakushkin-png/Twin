import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'TR',
  checked: '2026-10',
  fees: { evisa: { kind: 'from', amount: 50, currency: 'USD' } },
  stay: { evisa: 30 },
  links: { evisa: 'https://www.evisa.gov.tr', immigration: 'https://www.goc.gov.tr' },
  docs: ['returnTicket', 'booking'],
  passportMonths: 6,
  rule: { days: 90, window: 180 },
  extend: {},
  visaRun: 'limited',
  borders: [
    { name: 'Sarp – Sarpi', to: 'GE', lat: 41.5216, lng: 41.5478 },
    { name: 'Istanbul (IST) → Tbilisi', to: 'GE', lat: 41.2753, lng: 28.7519 },
  ],
  nomad: { name: 'Digital Nomad Visa', months: 12, income: { kind: 'from', amount: 3000, currency: 'USD' } },
  waivers: [
    {
      holds: ['visaSchengen', 'visaUS', 'visaGB', 'resEU', 'resUS', 'resGB'],
      passports: ['IN', 'PK', 'BD', 'EG', 'NG'],
      status: 'evisa',
      days: 30,
    },
  ],
  hackScope: [['UA', 'GE', 'MD', 'DE', 'FR', 'IT', 'ES', 'NL', 'BE', 'PT', 'GR', 'CH'], null, ['regime:evisa'], ['IN', 'PK', 'BD', 'EG', 'NG']],
  pitfallScope: [['regime:evisa'], null, ['regime:free'], null],
  text: {
    ru: {
      summary:
        'Граждане ЕС, Великобритании, США, Канады, Украины, Грузии, Казахстана, Японии, Кореи, стран Залива и большей части Латинской Америки въезжают без визы на 90 дней в течение 180; россияне — до 60 дней за поездку, белорусы — до 30, в рамках того же лимита 90/180. Граждане Китая, Австралии и ряда других стран за минуты получают e-визу, а индийцы и пакистанцы — только при наличии действующей визы или ВНЖ Шенгена, США, Великобритании или Ирландии.',
      apply:
        'Электронную визу выдают только на evisa.gov.tr: заполняете анкету, платите картой (для большинства паспортов около 50–60 $, сумма зависит от гражданства) и обычно сразу скачиваете PDF. В зависимости от паспорта это 30 дней с однократным въездом или 90 дней с многократным. Если e-виза вам не положена, остаётся обычная виза в турецком консульстве (в Индии — через VFS), это 2–3 недели.',
      extend:
        'Продлить туристическое пребывание нельзя, но до окончания разрешённого срока можно подать на краткосрочный вид на жительство (ikamet) на e-ikamet.goc.gov.tr: нужны договор аренды, медстраховка, регистрация адреса и сборы. С 2022 года во многих районах Стамбула и Анталии, закрытых для новых иностранных жителей, отказывают, а первичный «туристический» ВНЖ дают заметно неохотнее.',
      visaRun:
        'Правило 90/180 означает, что выезд не обнуляет общий лимит: после 90 дней нужно провести 90 дней за пределами Турции. Выезд помогает только россиянам и белорусам, у которых лимит одной поездки (60 или 30 дней) меньше 90: съездив в Грузию через Сарп или слетав в Тбилиси, можно использовать оставшиеся дни из 90.',
      nomad:
        'Турецкая виза цифрового кочевника — для граждан ЕС, Великобритании, США, Канады и ряда других стран от 21 до 55 лет с высшим образованием, которые удалённо работают на иностранного работодателя или свою компанию и зарабатывают от 3000 $ в месяц (36 000 $ в год). Сначала получают сертификат на digitalnomads.goturkiye.com, затем визу в консульстве и ВНЖ уже в Турции; срок — до года.',
      hacks: [
        'Граждане Украины, Грузии, Молдовы, Германии, Франции, Италии, Испании, Нидерландов, Бельгии, Португалии, Греции и Швейцарии могут въехать по ID-карте вместо паспорта.',
        'Turkish Airlines бесплатно проводит экскурсии Touristanbul для транзитных пассажиров с пересадкой от 6 до 24 часов в аэропорту Стамбула, с едой. Нужно иметь право въезда в Турцию — без визы или с e-визой.',
        'Многократная e-виза действует 180 дней с выбранной вами даты начала, поэтому выбирайте дату внимательно: все 90 дней нужно уложить в это окно.',
        'Для условной e-визы на границе показывают визу-наклейку или карту ВНЖ Шенгена, США, Великобритании или Ирландии — электронные визы и ESTA не принимаются.',
      ],
      pitfalls: [
        'Сайты-двойники evisa.gov.tr берут вдвое больше. Официальный адрес заканчивается на .gov.tr.',
        'Перерасчёт штрафуют при выезде, а запрет въезда тем дольше, чем дольше просрочка — от нескольких месяцев до нескольких лет.',
        'Многие россияне думают, что 60 дней обнуляются при каждом въезде. Нет: в любые 180 дней суммарно — не больше 90.',
        'Паспорт должен действовать не менее 150 дней с даты въезда (для владельцев e-визы — 60 дней после её окончания); авиакомпании это проверяют.',
      ],
      waivers: [
        'Граждане Индии, Пакистана, Бангладеш, Египта и Нигерии с действующей визой или ВНЖ Шенгена, США, Великобритании или Ирландии могут получить e-визу на 30 дней с однократным въездом. Прилетать нужно самолётом, иметь обратный билет, бронь отеля и около 50 $ на каждый день; для некоторых паспортов обязателен перелёт турецкой авиакомпанией.',
      ],
      passports: {
        RU: 'Россияне — до 60 дней за поездку и не больше 90 в течение 180, по загранпаспорту. Карты «Мир» в Турции перестали работать в 2022 году — берите наличные или иностранную карту. Прямые рейсы — из многих городов России.',
        BY: 'Белорусы — до 30 дней за поездку и не больше 90 в течение 180.',
        US: 'Граждане США с января 2024 года въезжают без визы — e-виза больше не нужна.',
        IN: 'Граждане Индии получают условную e-визу (30 дней, однократный въезд, только по воздуху) при наличии визы или ВНЖ США, Великобритании, Шенгена или Ирландии; иначе — виза через VFS.',
        AM: 'Граждане Армении получают e-визу или визу в аэропорту. Сухопутная граница закрыта — летайте прямыми рейсами Ереван — Стамбул.',
        UA: 'Украинцы — 90 дней в течение 180 без визы, можно въехать по ID-карте.',
      },
    },
    en: {
      summary:
        'Citizens of the EU, the UK, the US, Canada, Ukraine, Georgia, Kazakhstan, Japan, Korea, the Gulf and most of Latin America enter visa-free for 90 days in 180; Russians get up to 60 days per visit and Belarusians 30, within the same 90/180 limit. Chinese, Australian and some other citizens get an e-visa in minutes, while Indians and Pakistanis qualify for one only with a valid Schengen, US, UK or Irish visa or residence permit.',
      apply:
        'The e-visa is issued only on evisa.gov.tr: fill in the form, pay by card (roughly $50–60 for most passports, depending on nationality) and usually download the PDF straight away. Depending on your passport, it gives 30 days single-entry or 90 days multiple-entry. If you don’t qualify for an e-visa, the alternative is a regular visa from a Turkish consulate (via VFS in India), which takes two to three weeks.',
      extend:
        'Tourist stays can’t be extended, but before your allowed time runs out you can apply for a short-term residence permit (ikamet) on e-ikamet.goc.gov.tr: you need a rental contract, health insurance, address registration and fees. Since 2022, applications in many Istanbul and Antalya districts closed to new foreign residents are refused, and first-time tourist permits are granted less readily.',
      visaRun:
        'Under 90/180, leaving doesn’t reset the total: after 90 days you must spend 90 outside Turkey. A run only helps Russians and Belarusians, whose per-visit limit (60 or 30 days) is shorter than 90: a hop to Georgia via Sarp or a flight to Tbilisi lets you use the remaining days of the 90.',
      nomad:
        'Türkiye’s Digital Nomad Visa is for EU, UK, US, Canadian and some other citizens aged 21–55 with a university degree who work remotely for a foreign employer or their own company and earn at least $3,000 a month ($36,000 a year). You first get a certificate on digitalnomads.goturkiye.com, then the visa at a consulate and a residence permit once in Türkiye; it lasts up to a year.',
      hacks: [
        'Citizens of Ukraine, Georgia, Moldova, Germany, France, Italy, Spain, the Netherlands, Belgium, Portugal, Greece and Switzerland can enter with a national ID card instead of a passport.',
        'Turkish Airlines runs free Touristanbul city tours, meal included, for transit passengers with a 6–24-hour layover at Istanbul airport. You must be allowed into Turkey — visa-free or with an e-visa.',
        'A multiple-entry e-visa is valid for 180 days from the start date you pick, so choose it carefully: all 90 days have to fit inside that window.',
        'For the conditional e-visa, show a sticker visa or a residence card from Schengen, the US, the UK or Ireland at the border — electronic visas and ESTA are not accepted.',
      ],
      pitfalls: [
        'Look-alike copies of evisa.gov.tr charge double. The official address ends in .gov.tr.',
        'Overstays are fined on departure, and the entry ban grows with the overstay — from a few months to several years.',
        'Many Russians think the 60 days reset with every entry. They don’t: in any 180 days the total can’t exceed 90.',
        'Your passport must be valid for at least 150 days from arrival (for e-visa holders, 60 days beyond the visa’s end); airlines check this.',
      ],
      waivers: [
        'Citizens of India, Pakistan, Bangladesh, Egypt and Nigeria with a valid Schengen, US, UK or Irish visa or residence permit can get a 30-day single-entry e-visa. You must arrive by air with a return ticket, a hotel booking and about $50 per day; some passports must also fly with a Turkish airline.',
      ],
      passports: {
        RU: 'Russians get up to 60 days per visit and no more than 90 in 180 on an international passport. Mir cards stopped working in Turkey in 2022 — bring cash or a foreign card. There are direct flights from many Russian cities.',
        BY: 'Belarusians get up to 30 days per visit and no more than 90 in 180.',
        US: 'US citizens have entered visa-free since January 2024 — the e-visa is no longer needed.',
        IN: 'Indian citizens get the conditional e-visa (30 days, single entry, by air only) if they hold a US, UK, Schengen or Irish visa or residence permit; otherwise, a visa via VFS.',
        AM: 'Armenian citizens get an e-visa or a visa at the airport. The land border is closed, so take one of the direct Yerevan–Istanbul flights.',
        UA: 'Ukrainians get 90 days in 180 visa-free and can enter with an ID card.',
      },
    },
    es: {
      summary:
        'Los ciudadanos de la UE, Reino Unido, EE. UU., Canadá, Ucrania, Georgia, Kazajistán, Japón, Corea, el Golfo y casi toda Latinoamérica entran sin visado 90 días cada 180; los rusos, hasta 60 días por viaje, y los bielorrusos, 30, dentro del mismo límite de 90/180. Chinos, australianos y algunos otros obtienen un visado electrónico en minutos, mientras que indios y pakistaníes solo pueden pedirlo si tienen un visado o permiso de residencia vigente de Schengen, EE. UU., Reino Unido o Irlanda.',
      apply:
        'El visado electrónico solo se expide en evisa.gov.tr: rellenas el formulario, pagas con tarjeta (unos 50–60 $ para la mayoría de los pasaportes, según la nacionalidad) y normalmente descargas el PDF al momento. Según el pasaporte, da 30 días con una entrada o 90 días con entradas múltiples. Si no tienes derecho al visado electrónico, la alternativa es un visado ordinario en un consulado turco (en India, a través de VFS), que tarda de dos a tres semanas.',
      extend:
        'La estancia turística no se prorroga, pero antes de que se agote puedes solicitar un permiso de residencia de corta duración (ikamet) en e-ikamet.goc.gov.tr: necesitas contrato de alquiler, seguro médico, empadronamiento y pagar las tasas. Desde 2022 se deniegan las solicitudes en muchos barrios de Estambul y Antalya cerrados a nuevos residentes extranjeros, y el primer permiso turístico se concede con menos facilidad.',
      visaRun:
        'Con la regla de 90/180, salir no pone a cero el total: tras 90 días hay que pasar 90 fuera de Turquía. Salir solo les sirve a rusos y bielorrusos, cuyo límite por viaje (60 o 30 días) es inferior a 90: una escapada a Georgia por Sarp o un vuelo a Tiflis permite aprovechar los días que quedan de los 90.',
      nomad:
        'El Digital Nomad Visa de Turquía es para ciudadanos de la UE, Reino Unido, EE. UU., Canadá y algunos otros países, de 21 a 55 años, con título universitario, que trabajen en remoto para una empresa extranjera o propia y ganen al menos 3000 $ al mes (36 000 $ al año). Primero se obtiene un certificado en digitalnomads.goturkiye.com, luego el visado en un consulado y el permiso de residencia ya en Turquía; dura hasta un año.',
      hacks: [
        'Los ciudadanos de Ucrania, Georgia, Moldavia, Alemania, Francia, Italia, España, Países Bajos, Bélgica, Portugal, Grecia y Suiza pueden entrar con el documento de identidad en lugar del pasaporte.',
        'Turkish Airlines ofrece visitas gratuitas Touristanbul, con comida incluida, a los pasajeros en tránsito con escalas de 6 a 24 horas en el aeropuerto de Estambul. Debes poder entrar en Turquía, sin visado o con visado electrónico.',
        'El visado electrónico de entradas múltiples vale 180 días desde la fecha de inicio que elijas, así que piénsala bien: los 90 días tienen que caber en ese plazo.',
        'Para el visado electrónico condicional, en la frontera enseña un visado adhesivo o una tarjeta de residencia de Schengen, EE. UU., Reino Unido o Irlanda: no se aceptan visados electrónicos ni el ESTA.',
      ],
      pitfalls: [
        'Las copias de evisa.gov.tr cobran el doble. La dirección oficial termina en .gov.tr.',
        'El exceso de estancia se multa al salir, y la prohibición de entrada crece con los días de más: de unos meses a varios años.',
        'Muchos rusos creen que los 60 días se reinician en cada entrada. No es así: en cualquier periodo de 180 días el total no puede pasar de 90.',
        'El pasaporte debe tener al menos 150 días de validez desde la llegada (con visado electrónico, 60 días más allá de su fin); las aerolíneas lo comprueban.',
      ],
      waivers: [
        'Los ciudadanos de India, Pakistán, Bangladés, Egipto y Nigeria con un visado o permiso de residencia vigente de Schengen, EE. UU., Reino Unido o Irlanda pueden obtener un visado electrónico de 30 días y una entrada. Hay que llegar en avión, con billete de vuelta, reserva de hotel y unos 50 $ por día; algunos pasaportes deben volar además con una aerolínea turca.',
      ],
      passports: {
        RU: 'Los ciudadanos rusos tienen hasta 60 días por viaje y no más de 90 cada 180, con pasaporte internacional. Las tarjetas Mir dejaron de funcionar en Turquía en 2022: lleva efectivo o una tarjeta extranjera. Hay vuelos directos desde muchas ciudades rusas.',
        BY: 'Los bielorrusos tienen hasta 30 días por viaje y no más de 90 cada 180.',
        US: 'Los ciudadanos estadounidenses entran sin visado desde enero de 2024: el visado electrónico ya no hace falta.',
        IN: 'Los ciudadanos indios obtienen el visado electrónico condicional (30 días, una entrada, solo por vía aérea) si tienen visado o permiso de residencia de EE. UU., Reino Unido, Schengen o Irlanda; si no, visado a través de VFS.',
        AM: 'Los ciudadanos armenios obtienen visado electrónico o visado en el aeropuerto. La frontera terrestre está cerrada: vuela en uno de los vuelos directos Ereván–Estambul.',
        UA: 'Los ucranianos tienen 90 días cada 180 sin visado y pueden entrar con el documento de identidad.',
      },
    },
    de: {
      summary:
        'Bürger der EU, Großbritanniens, der USA, Kanadas, der Ukraine, Georgiens, Kasachstans, Japans, Koreas, der Golfstaaten und fast ganz Lateinamerikas reisen 90 Tage innerhalb von 180 visumfrei ein; Russen bis zu 60 Tage pro Reise, Belarussen 30, jeweils innerhalb derselben 90/180-Grenze. Chinesen, Australier und einige andere bekommen in Minuten ein E-Visum, Inder und Pakistaner dagegen nur mit gültigem Visum oder Aufenthaltstitel des Schengenraums, der USA, Großbritanniens oder Irlands.',
      apply:
        'Das E-Visum gibt es ausschließlich auf evisa.gov.tr: Formular ausfüllen, per Karte zahlen (für die meisten Pässe etwa 50–60 $, je nach Staatsangehörigkeit) und das PDF meist sofort herunterladen. Je nach Pass gilt es für 30 Tage bei einmaliger oder 90 Tage bei mehrfacher Einreise. Wer kein E-Visum bekommt, beantragt ein reguläres Visum bei einem türkischen Konsulat (in Indien über VFS), was zwei bis drei Wochen dauert.',
      extend:
        'Touristische Aufenthalte lassen sich nicht verlängern, aber vor Ablauf deiner erlaubten Zeit kannst du auf e-ikamet.goc.gov.tr eine kurzfristige Aufenthaltserlaubnis (ikamet) beantragen: Du brauchst Mietvertrag, Krankenversicherung, Adressanmeldung und Gebühren. Seit 2022 werden Anträge in vielen für neue ausländische Bewohner gesperrten Vierteln Istanbuls und Antalyas abgelehnt, und die erste touristische Erlaubnis wird zurückhaltender erteilt.',
      visaRun:
        'Bei 90/180 setzt eine Ausreise das Gesamtkonto nicht zurück: Nach 90 Tagen musst du 90 Tage außerhalb der Türkei verbringen. Ein Run hilft nur Russen und Belarussen, deren Limit pro Reise (60 oder 30 Tage) unter 90 liegt: Ein Abstecher nach Georgien über Sarp oder ein Flug nach Tiflis erlaubt es, die restlichen Tage der 90 zu nutzen.',
      nomad:
        'Das türkische Digital Nomad Visa richtet sich an Bürger der EU, Großbritanniens, der USA, Kanadas und einiger anderer Länder zwischen 21 und 55 Jahren mit Hochschulabschluss, die remote für einen ausländischen Arbeitgeber oder die eigene Firma arbeiten und mindestens 3.000 $ im Monat (36.000 $ im Jahr) verdienen. Zuerst gibt es ein Zertifikat auf digitalnomads.goturkiye.com, dann das Visum beim Konsulat und die Aufenthaltserlaubnis in der Türkei; es gilt bis zu einem Jahr.',
      hacks: [
        'Staatsangehörige der Ukraine, Georgiens, Moldaus, Deutschlands, Frankreichs, Italiens, Spaniens, der Niederlande, Belgiens, Portugals, Griechenlands und der Schweiz dürfen mit dem Personalausweis statt mit dem Reisepass einreisen.',
        'Turkish Airlines bietet Transitpassagieren mit 6 bis 24 Stunden Aufenthalt am Flughafen Istanbul kostenlose Touristanbul-Stadttouren samt Essen. Du musst in die Türkei einreisen dürfen – visumfrei oder mit E-Visum.',
        'Ein E-Visum für mehrfache Einreise gilt 180 Tage ab dem Startdatum, das du wählst – wähle es also sorgfältig: Alle 90 Tage müssen in dieses Fenster passen.',
        'Für das bedingte E-Visum zeigst du an der Grenze ein Visum-Etikett oder eine Aufenthaltskarte des Schengenraums, der USA, Großbritanniens oder Irlands vor – elektronische Visa und ESTA werden nicht akzeptiert.',
      ],
      pitfalls: [
        'Nachbauten von evisa.gov.tr verlangen das Doppelte. Die offizielle Adresse endet auf .gov.tr.',
        'Überziehungen werden bei der Ausreise mit Bußgeld belegt, und die Einreisesperre wächst mit der Dauer – von einigen Monaten bis zu mehreren Jahren.',
        'Viele Russen glauben, die 60 Tage beginnen bei jeder Einreise neu. Stimmt nicht: In beliebigen 180 Tagen sind insgesamt höchstens 90 erlaubt.',
        'Dein Pass muss ab Ankunft mindestens 150 Tage gültig sein (bei E-Visum 60 Tage über dessen Ende hinaus); Airlines prüfen das.',
      ],
      waivers: [
        'Staatsangehörige Indiens, Pakistans, Bangladeschs, Ägyptens und Nigerias mit gültigem Visum oder Aufenthaltstitel des Schengenraums, der USA, Großbritanniens oder Irlands erhalten ein E-Visum für 30 Tage und eine Einreise. Die Ankunft muss per Flugzeug erfolgen, mit Rückflugticket, Hotelbuchung und etwa 50 $ pro Tag; für manche Pässe ist zudem ein Flug mit einer türkischen Airline Pflicht.',
      ],
      passports: {
        RU: 'Russische Staatsangehörige haben mit Reisepass bis zu 60 Tage pro Reise und höchstens 90 innerhalb von 180. Mir-Karten funktionieren in der Türkei seit 2022 nicht mehr – nimm Bargeld oder eine ausländische Karte mit. Direktflüge gibt es aus vielen russischen Städten.',
        BY: 'Belarussen haben bis zu 30 Tage pro Reise und höchstens 90 innerhalb von 180.',
        US: 'US-Bürger reisen seit Januar 2024 visumfrei ein – das E-Visum ist nicht mehr nötig.',
        IN: 'Indische Staatsangehörige erhalten das bedingte E-Visum (30 Tage, eine Einreise, nur auf dem Luftweg), wenn sie ein Visum oder einen Aufenthaltstitel der USA, Großbritanniens, des Schengenraums oder Irlands haben; sonst ein Visum über VFS.',
        AM: 'Armenische Staatsangehörige bekommen ein E-Visum oder ein Visum am Flughafen. Die Landgrenze ist geschlossen, nimm also einen der Direktflüge Jerewan–Istanbul.',
        UA: 'Ukrainer haben 90 Tage innerhalb von 180 visumfrei und dürfen mit dem Personalausweis einreisen.',
      },
    },
    fr: {
      summary:
        'Les citoyens de l’UE, du Royaume-Uni, des États-Unis, du Canada, de l’Ukraine, de la Géorgie, du Kazakhstan, du Japon, de la Corée, du Golfe et de presque toute l’Amérique latine entrent sans visa pour 90 jours sur 180 ; les Russes jusqu’à 60 jours par séjour et les Biélorusses 30, dans la même limite des 90/180. Chinois, Australiens et quelques autres obtiennent un e-visa en quelques minutes, tandis que les Indiens et Pakistanais n’y ont droit qu’avec un visa ou titre de séjour valide Schengen, américain, britannique ou irlandais.',
      apply:
        'L’e-visa est délivré uniquement sur evisa.gov.tr : formulaire, paiement par carte (environ 50 à 60 $ pour la plupart des passeports, selon la nationalité) et, en général, PDF téléchargeable aussitôt. Selon le passeport, il donne 30 jours à entrée unique ou 90 jours à entrées multiples. Si vous n’y avez pas droit, il reste le visa classique dans un consulat turc (via VFS en Inde), qui prend deux à trois semaines.',
      extend:
        'Le séjour touristique ne se prolonge pas, mais avant la fin de la durée autorisée vous pouvez demander un titre de séjour de courte durée (ikamet) sur e-ikamet.goc.gov.tr : il faut un bail, une assurance santé, la déclaration d’adresse et les frais. Depuis 2022, les demandes sont refusées dans de nombreux quartiers d’Istanbul et d’Antalya fermés aux nouveaux résidents étrangers, et le premier titre « touristique » est accordé moins facilement.',
      visaRun:
        'Avec la règle des 90/180, sortir ne remet pas le total à zéro : après 90 jours, il faut en passer 90 hors de Turquie. Un visa run ne sert qu’aux Russes et aux Biélorusses, dont la limite par séjour (60 ou 30 jours) est inférieure à 90 : un saut en Géorgie par Sarp ou un vol pour Tbilissi permet d’utiliser les jours restants sur les 90.',
      nomad:
        'Le Digital Nomad Visa turc s’adresse aux citoyens de l’UE, du Royaume-Uni, des États-Unis, du Canada et de quelques autres pays, âgés de 21 à 55 ans et diplômés du supérieur, qui travaillent à distance pour un employeur étranger ou leur propre société et gagnent au moins 3 000 $ par mois (36 000 $ par an). On obtient d’abord un certificat sur digitalnomads.goturkiye.com, puis le visa au consulat et le titre de séjour une fois en Turquie ; il vaut jusqu’à un an.',
      hacks: [
        'Les citoyens d’Ukraine, de Géorgie, de Moldavie, d’Allemagne, de France, d’Italie, d’Espagne, des Pays-Bas, de Belgique, du Portugal, de Grèce et de Suisse peuvent entrer avec leur carte d’identité au lieu du passeport.',
        'Turkish Airlines propose aux passagers en transit ayant une escale de 6 à 24 heures à l’aéroport d’Istanbul des visites gratuites Touristanbul, repas compris. Il faut pouvoir entrer en Turquie, sans visa ou avec un e-visa.',
        'Un e-visa à entrées multiples vaut 180 jours à partir de la date de début que vous choisissez : choisissez-la avec soin, car vos 90 jours doivent tenir dans cette fenêtre.',
        'Pour l’e-visa conditionnel, présentez à la frontière un visa autocollant ou une carte de séjour Schengen, américaine, britannique ou irlandaise : les visas électroniques et l’ESTA ne sont pas acceptés.',
      ],
      pitfalls: [
        'Des copies d’evisa.gov.tr facturent le double. L’adresse officielle se termine par .gov.tr.',
        'Tout dépassement est sanctionné d’une amende à la sortie, et l’interdiction d’entrée s’allonge avec sa durée : de quelques mois à plusieurs années.',
        'Beaucoup de Russes pensent que les 60 jours repartent à chaque entrée. C’est faux : sur toute période de 180 jours, le total ne peut dépasser 90.',
        'Le passeport doit être valide au moins 150 jours après l’arrivée (pour un e-visa, 60 jours après sa fin) ; les compagnies aériennes vérifient.',
      ],
      waivers: [
        'Les citoyens de l’Inde, du Pakistan, du Bangladesh, d’Égypte et du Nigeria titulaires d’un visa ou titre de séjour valide Schengen, américain, britannique ou irlandais peuvent obtenir un e-visa de 30 jours à entrée unique. Il faut arriver par avion, avec billet retour, réservation d’hôtel et environ 50 $ par jour ; certains passeports doivent aussi voler avec une compagnie turque.',
      ],
      passports: {
        RU: 'Les ressortissants russes ont droit à 60 jours par séjour au maximum et à 90 jours sur 180, avec leur passeport international. Les cartes Mir ne fonctionnent plus en Turquie depuis 2022 : prévoyez des espèces ou une carte étrangère. Des vols directs partent de nombreuses villes russes.',
        BY: 'Les Biélorusses ont droit à 30 jours par séjour au maximum et à 90 jours sur 180.',
        US: 'Les citoyens américains entrent sans visa depuis janvier 2024 : l’e-visa n’est plus nécessaire.',
        IN: 'Les citoyens indiens obtiennent l’e-visa conditionnel (30 jours, entrée unique, par avion uniquement) s’ils ont un visa ou titre de séjour des États-Unis, du Royaume-Uni, de Schengen ou d’Irlande ; sinon, visa via VFS.',
        AM: 'Les citoyens arméniens obtiennent un e-visa ou un visa à l’aéroport. La frontière terrestre est fermée : prenez l’un des vols directs Erevan–Istanbul.',
        UA: 'Les Ukrainiens ont 90 jours sur 180 sans visa et peuvent entrer avec leur carte d’identité.',
      },
    },
    it: {
      summary:
        'I cittadini di UE, Regno Unito, Stati Uniti, Canada, Ucraina, Georgia, Kazakistan, Giappone, Corea, paesi del Golfo e quasi tutta l’America Latina entrano senza visto per 90 giorni ogni 180; i russi fino a 60 giorni a viaggio e i bielorussi 30, sempre entro il limite dei 90/180. Cinesi, australiani e pochi altri ottengono il visto elettronico in pochi minuti, mentre indiani e pakistani possono averlo solo con un visto o permesso di soggiorno valido di Schengen, Stati Uniti, Regno Unito o Irlanda.',
      apply:
        'Il visto elettronico si rilascia solo su evisa.gov.tr: compili il modulo, paghi con carta (circa 50–60 $ per la maggior parte dei passaporti, a seconda della cittadinanza) e di solito scarichi subito il PDF. A seconda del passaporto vale 30 giorni con ingresso singolo o 90 giorni con ingressi multipli. Se non ne hai diritto, resta il visto ordinario in un consolato turco (in India tramite VFS), che richiede due o tre settimane.',
      extend:
        'Il soggiorno turistico non si proroga, ma prima che scada il periodo consentito puoi chiedere un permesso di soggiorno breve (ikamet) su e-ikamet.goc.gov.tr: servono contratto d’affitto, assicurazione sanitaria, registrazione dell’indirizzo e tasse. Dal 2022 le domande vengono respinte in molti quartieri di Istanbul e Antalya chiusi ai nuovi residenti stranieri, e il primo permesso turistico si ottiene con meno facilità.',
      visaRun:
        'Con la regola dei 90/180 uscire non azzera il totale: dopo 90 giorni devi passarne 90 fuori dalla Turchia. Il visa run serve solo a russi e bielorussi, il cui limite per viaggio (60 o 30 giorni) è inferiore a 90: una puntata in Georgia da Sarp o un volo per Tbilisi permette di usare i giorni rimanenti dei 90.',
      nomad:
        'Il Digital Nomad Visa turco è per cittadini di UE, Regno Unito, Stati Uniti, Canada e pochi altri paesi, tra i 21 e i 55 anni, laureati, che lavorano da remoto per un datore di lavoro estero o per la propria azienda e guadagnano almeno 3.000 $ al mese (36.000 $ l’anno). Prima si ottiene un certificato su digitalnomads.goturkiye.com, poi il visto in consolato e il permesso di soggiorno una volta in Turchia; dura fino a un anno.',
      hacks: [
        'I cittadini di Ucraina, Georgia, Moldavia, Germania, Francia, Italia, Spagna, Paesi Bassi, Belgio, Portogallo, Grecia e Svizzera possono entrare con la carta d’identità invece del passaporto.',
        'Turkish Airlines offre tour gratuiti Touristanbul, pasto compreso, ai passeggeri in transito con scali di 6–24 ore all’aeroporto di Istanbul. Devi poter entrare in Turchia, senza visto o con visto elettronico.',
        'Il visto elettronico a ingressi multipli vale 180 giorni dalla data di inizio che scegli: sceglila con cura, perché tutti i 90 giorni devono stare in quella finestra.',
        'Per il visto elettronico condizionato, alla frontiera mostra un visto adesivo o una carta di soggiorno di Schengen, Stati Uniti, Regno Unito o Irlanda: visti elettronici ed ESTA non sono accettati.',
      ],
      pitfalls: [
        'Le copie di evisa.gov.tr fanno pagare il doppio. L’indirizzo ufficiale finisce in .gov.tr.',
        'Chi supera il limite paga una multa all’uscita, e il divieto d’ingresso cresce con il ritardo: da qualche mese a diversi anni.',
        'Molti russi pensano che i 60 giorni ripartano a ogni ingresso. Non è così: in qualsiasi periodo di 180 giorni il totale non può superare 90.',
        'Il passaporto deve essere valido almeno 150 giorni dall’arrivo (con visto elettronico, 60 giorni oltre la sua scadenza); le compagnie aeree lo controllano.',
      ],
      waivers: [
        'I cittadini di India, Pakistan, Bangladesh, Egitto e Nigeria con un visto o permesso di soggiorno valido di Schengen, Stati Uniti, Regno Unito o Irlanda possono ottenere un visto elettronico di 30 giorni a ingresso singolo. Bisogna arrivare in aereo, con biglietto di ritorno, prenotazione alberghiera e circa 50 $ al giorno; per alcuni passaporti è obbligatorio volare con una compagnia turca.',
      ],
      passports: {
        RU: 'I cittadini russi hanno fino a 60 giorni a viaggio e non più di 90 ogni 180, con il passaporto per l’estero. Le carte Mir in Turchia non funzionano più dal 2022: porta contanti o una carta estera. Ci sono voli diretti da molte città russe.',
        BY: 'I bielorussi hanno fino a 30 giorni a viaggio e non più di 90 ogni 180.',
        US: 'I cittadini statunitensi entrano senza visto da gennaio 2024: il visto elettronico non serve più.',
        IN: 'I cittadini indiani ottengono il visto elettronico condizionato (30 giorni, ingresso singolo, solo per via aerea) se hanno un visto o permesso di soggiorno di Stati Uniti, Regno Unito, Schengen o Irlanda; altrimenti, visto tramite VFS.',
        AM: 'I cittadini armeni ottengono il visto elettronico o il visto in aeroporto. Il confine terrestre è chiuso: prendi uno dei voli diretti Erevan–Istanbul.',
        UA: 'Gli ucraini hanno 90 giorni ogni 180 senza visto e possono entrare con la carta d’identità.',
      },
    },
  },
};

export default guide;
