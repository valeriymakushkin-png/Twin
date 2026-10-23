import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'PH',
  checked: '2026-10',
  links: { evisa: 'https://evisa.gov.ph', immigration: 'https://immigration.gov.ph' },
  forms: [{ name: 'eTravel', url: 'https://etravel.gov.ph', fee: { kind: 'free' } }],
  docs: ['returnTicket', 'booking'],
  passportMonths: 6,
  extend: { days: 29, fee: { kind: 'from', amount: 3000, currency: 'PHP' } },
  visaRun: 'yes',
  borders: [
    { name: 'Manila NAIA (MNL) → Hong Kong', to: 'HK', lat: 14.5086, lng: 121.0194 },
    { name: 'Mactan-Cebu (CEB) → Taipei', to: 'TW', lat: 10.3075, lng: 123.9794 },
  ],
  nomad: { name: 'Digital Nomad Visa (EO 86)', months: 12 },
  waivers: [
    {
      holds: ['visaUS', 'visaJP', 'visaAU', 'visaCA', 'visaSchengen', 'visaGB', 'resUS', 'resJP', 'resAU', 'resCA', 'resEU', 'resGB'],
      passports: ['IN'],
      status: 'free',
      days: 30,
    },
  ],
  text: {
    ru: {
      summary:
        'Граждане России, Казахстана, США, ЕС, Великобритании, Японии, Кореи и ещё более 150 стран въезжают без визы на 30 дней, бразильцы и израильтяне — на 59. Индийцам дают 14 дней, а с визой или ВНЖ США, Японии, Австралии, Канады, Шенгена, Сингапура или Великобритании — 30. Гражданам Китая, Беларуси, Украины, Грузии и Армении нужна виза. Безвиз продлевают в стране до 36 месяцев.',
      apply:
        'Всем нужна бесплатная анкета eTravel не раньше чем за 72 часа до прилёта: QR-код показывают на регистрации и на границе. Тем, кому нужна виза, подают на e-визу на evisa.gov.ph или в консульстве: обычно 5–10 рабочих дней. Авиакомпании строго проверяют билет на выезд — без него могут не посадить в самолёт.',
      extend:
        'Первое продление — на 29 дней (итого 59) в любом офисе Bureau of Immigration или онлайн, около 3000–3500 песо. Дальше продлевают на 1, 2 или 6 месяцев: полугодовое обходится примерно в 11 500 песо. Всего без выезда можно прожить до 36 месяцев (для стран с визовым режимом — 24). После 59 дней обязательно оформляют карту ACR I-Card (около 50 $).',
      visaRun:
        'Визаран формально работает — после выезда дают новые 30 дней, — но обычно он не нужен: продлевать дешевле, чем лететь. Если хочется сменить обстановку, из Манилы за 2 часа долетаете в Гонконг, из Себу — в Тайбэй, есть рейсы в Кота-Кинабалу. После 36 месяцев выезжать нужно обязательно.',
      nomad:
        'Указ EO 86 от 2025 года ввёл визу цифрового кочевника на год с возможностью продлить ещё на год: доход только из-за рубежа, страховка, справка о несудимости, работать на местных клиентов нельзя. Порог дохода официально не установлен (ориентир — около 24 000 $ в год), а виза доступна лишь гражданам стран, которые дают филиппинцам похожий режим. Приём заявок запускается поэтапно — проверьте на evisa.gov.ph.',
      hacks: [
        'Продление на 6 месяцев сразу (Long-Stay Visitor Visa Extension) экономит и деньги, и походы в офис по сравнению с ежемесячными продлениями.',
        'Первое продление проще сделать онлайн через систему Bureau of Immigration или в небольшом офисе в туристическом районе (Себу, Палаван, Сиаргао) — в главном офисе в Интрамурос очереди на полдня.',
        'Для проверки «билета на выезд» подойдёт любой дешёвый рейс из страны, например Манила — Гонконг или Себу — Сингапур: авиакомпании не проверяют, полетите ли вы им на самом деле.',
        'Индийцам с действующей визой США, Японии, Австралии, Канады, Шенгена, Сингапура или Великобритании дают 30 дней вместо 14 — возьмите эту визу с собой.',
      ],
      pitfalls: [
        'Сайты-двойники берут деньги за бесплатный eTravel. Официальный адрес только etravel.gov.ph.',
        'Пробыв в стране больше 6 месяцев, при выезде нужно оформить справку ECC в Bureau of Immigration, а прожив больше года — заплатить налог на поездку (travel tax) в аэропорту.',
        'Просрочка — это штраф за каждый месяц плюс сборы за все пропущенные продления; при долгом оверстее могут внести в чёрный список.',
      ],
      passports: {
        RU: 'Россиянам — 30 дней без визы с продлением до 36 месяцев. Прямых рейсов нет: летят через Дубай, Доху, Бангкок или Гонконг. Российские карты не работают — берите доллары, лучший курс в обменниках торговых центров.',
        IN: 'Граждане Индии получают 14 дней без визы без продления и смены статуса. С визой или ВНЖ США, Японии, Австралии, Канады, Шенгена, Сингапура или Великобритании — 30 дней. Для более долгой поездки оформляйте визу заранее.',
        CN: 'Гражданам Китая нужна виза: её оформляют в консульстве или через систему e-виз Филиппин.',
        BR: 'Граждане Бразилии и Израиля по соглашениям въезжают без визы на 59 дней и могут продлевать дальше на общих условиях.',
      },
      waivers: [
        'Граждане Индии с действующей визой или видом на жительство США, Японии, Австралии, Канады, страны Шенгена, Сингапура или Великобритании въезжают без визы на 30 дней вместо 14. Виза или ВНЖ должны быть действительны на дату въезда; дополнительно нужны eTravel, билет на выезд, бронь жилья и подтверждение средств. Для поездки дольше месяца надёжнее заранее оформить визу.',
      ],
    },
    en: {
      summary:
        'Citizens of Russia, Kazakhstan, the US, EU, UK, Japan, Korea and more than 150 other countries enter visa-free for 30 days; Brazilians and Israelis for 59. Indian citizens get 14 days, or 30 with a US, Japanese, Australian, Canadian, Schengen, Singaporean or UK visa or residence permit. Chinese, Belarusian, Ukrainian, Georgian and Armenian citizens need a visa. Visa-free stays can be extended in the country for up to 36 months.',
      apply:
        'Everyone files the free eTravel form no earlier than 72 hours before arrival and shows the QR code at check-in and at the border. If you need a visa, apply for an e-visa at evisa.gov.ph or at a consulate: usually 5–10 working days. Airlines check onward tickets strictly and may refuse boarding without one.',
      extend:
        'The first extension is for 29 days (59 in total) at any Bureau of Immigration office or online, for about 3,000–3,500 pesos. After that you extend by 1, 2 or 6 months; six months cost roughly 11,500 pesos. You can stay up to 36 months without leaving (24 for visa-required nationalities). Beyond 59 days the ACR I-Card (about $50) is mandatory.',
      visaRun:
        'Visa runs work on paper — you get a fresh 30 days after leaving — but you rarely need one: extending is cheaper than flying. For a change of scene, Hong Kong is two hours from Manila, Taipei is close to Cebu, and there are flights to Kota Kinabalu. After 36 months you must leave.',
      nomad:
        'Executive Order 86 of 2025 created a one-year digital nomad visa, renewable for one more year: income from abroad only, insurance, a clean criminal record and no work for local clients. No official income threshold has been set (around $24,000 a year is the usual benchmark), and it is open only to citizens of countries that offer Filipinos a similar visa. Applications are being rolled out in stages — check evisa.gov.ph.',
      hacks: [
        'A six-month extension in one go (the Long-Stay Visitor Visa Extension) saves money and office visits compared with monthly extensions.',
        'Do the first extension online through the Bureau of Immigration system or at a small office in a tourist area (Cebu, Palawan, Siargao) — the main office in Intramuros can take half a day.',
        'Any cheap flight out works for the onward-ticket check, such as Manila – Hong Kong or Cebu – Singapore: airlines do not check whether you actually take it.',
        'Indian citizens with a valid US, Japanese, Australian, Canadian, Schengen, Singaporean or UK visa get 30 days instead of 14 — bring that visa with you.',
      ],
      pitfalls: [
        'Look-alike sites charge for the free eTravel form. The only official address is etravel.gov.ph.',
        'After more than six months in the country you need an Emigration Clearance Certificate (ECC) from the Bureau of Immigration to leave, and after more than a year you pay travel tax at the airport.',
        'Overstaying means a fine for every month plus fees for all the extensions you skipped; long overstays can get you blacklisted.',
      ],
      passports: {
        RU: 'Russian citizens get 30 days visa-free, extendable up to 36 months. There are no direct flights; connect in Dubai, Doha, Bangkok or Hong Kong. Russian cards do not work, so bring dollars — shopping-mall money changers give the best rates.',
        IN: 'Indian citizens get 14 days visa-free, with no extension or change of status. With a US, Japanese, Australian, Canadian, Schengen, Singaporean or UK visa or residence permit, it is 30 days. For longer trips, get a visa in advance.',
        CN: 'Chinese citizens need a visa, issued by a consulate or through the Philippine e-visa system.',
        BR: 'Brazilian and Israeli citizens enter visa-free for 59 days under bilateral agreements and can extend further on the usual terms.',
      },
      waivers: [
        'Indian citizens holding a valid visa or residence permit of the US, Japan, Australia, Canada, a Schengen state, Singapore or the UK enter visa-free for 30 days instead of 14. The visa or permit must be valid on the day you arrive, and you still need eTravel, an onward ticket, an accommodation booking and proof of funds. For trips longer than a month, getting a visa in advance is the safer route.',
      ],
    },
    es: {
      summary:
        'Los ciudadanos de Rusia, Kazajistán, EE. UU., la UE, el Reino Unido, Japón, Corea y más de 150 países entran sin visado durante 30 días; los de Brasil e Israel, durante 59. Los indios tienen 14 días, o 30 con visado o residencia de EE. UU., Japón, Australia, Canadá, Schengen, Singapur o el Reino Unido. China, Bielorrusia, Ucrania, Georgia y Armenia necesitan visado. La estancia sin visado se prorroga en el país hasta 36 meses.',
      apply:
        'Todo el mundo rellena el formulario gratuito eTravel como máximo 72 horas antes de llegar y muestra el código QR al facturar y en la frontera. Si necesitas visado, pide el visado electrónico en evisa.gov.ph o en un consulado: suele tardar 5–10 días laborables. Las aerolíneas comprueban a rajatabla el billete de salida y pueden negarte el embarque sin él.',
      extend:
        'La primera prórroga es de 29 días (59 en total) en cualquier oficina del Bureau of Immigration o en línea, por unos 3000–3500 pesos. Después se prorroga por 1, 2 o 6 meses; seis meses cuestan unos 11 500 pesos. Puedes quedarte hasta 36 meses sin salir (24 si tu país necesita visado). A partir de 59 días es obligatoria la tarjeta ACR I-Card (unos 50 $).',
      visaRun:
        'El visa run funciona sobre el papel —al salir te dan 30 días nuevos—, pero casi nunca hace falta: prorrogar sale más barato que volar. Si quieres cambiar de aires, Hong Kong está a dos horas de Manila, Taipéi queda cerca de Cebú y hay vuelos a Kota Kinabalu. Pasados 36 meses hay que salir sí o sí.',
      nomad:
        'La Orden Ejecutiva 86 de 2025 creó un visado de nómada digital de un año, renovable otro más: ingresos solo del extranjero, seguro, antecedentes penales limpios y prohibido trabajar para clientes locales. No hay un umbral de ingresos oficial (la referencia habitual son unos 24 000 $ al año) y solo pueden pedirlo ciudadanos de países que ofrecen a los filipinos un visado similar. Las solicitudes se están abriendo por fases: consúltalo en evisa.gov.ph.',
      hacks: [
        'Prorrogar seis meses de una vez (Long-Stay Visitor Visa Extension) ahorra dinero y visitas a la oficina frente a las prórrogas mensuales.',
        'Haz la primera prórroga en línea con el sistema del Bureau of Immigration o en una oficina pequeña de zona turística (Cebú, Palawan, Siargao): en la sede central de Intramuros puedes perder medio día.',
        'Para el control del billete de salida sirve cualquier vuelo barato fuera del país, como Manila – Hong Kong o Cebú – Singapur: las aerolíneas no comprueban si lo usas de verdad.',
        'Los ciudadanos indios con visado vigente de EE. UU., Japón, Australia, Canadá, Schengen, Singapur o el Reino Unido obtienen 30 días en lugar de 14: lleva ese visado contigo.',
      ],
      pitfalls: [
        'Las webs que imitan eTravel cobran por un formulario gratuito. La única dirección oficial es etravel.gov.ph.',
        'Si pasas más de seis meses en el país, para salir necesitas el certificado ECC del Bureau of Immigration, y si superas el año pagas el travel tax en el aeropuerto.',
        'Quedarse de más supone una multa por cada mes y las tasas de todas las prórrogas no pagadas; los excesos largos pueden llevarte a la lista negra.',
      ],
      passports: {
        RU: 'Los ciudadanos rusos tienen 30 días sin visado, prorrogables hasta 36 meses. No hay vuelos directos: se hace escala en Dubái, Doha, Bangkok o Hong Kong. Las tarjetas rusas no funcionan, así que lleva dólares: las casas de cambio de los centros comerciales dan el mejor tipo.',
        IN: 'Los ciudadanos indios tienen 14 días sin visado, sin prórroga ni cambio de estatus. Con visado o residencia de EE. UU., Japón, Australia, Canadá, Schengen, Singapur o el Reino Unido son 30 días. Para viajes más largos, pide visado con antelación.',
        CN: 'Los ciudadanos chinos necesitan visado, que expide un consulado o el sistema de visados electrónicos filipino.',
        BR: 'Los ciudadanos de Brasil e Israel entran sin visado durante 59 días por acuerdos bilaterales y pueden seguir prorrogando en las condiciones habituales.',
      },
      waivers: [
        'Los ciudadanos indios con visado o permiso de residencia vigente de EE. UU., Japón, Australia, Canadá, un país Schengen, Singapur o el Reino Unido entran sin visado durante 30 días en lugar de 14. El visado o permiso debe estar vigente el día de llegada, y siguen haciendo falta eTravel, billete de salida, reserva de alojamiento y prueba de fondos. Para viajes de más de un mes, lo más seguro es pedir visado con antelación.',
      ],
    },
    de: {
      summary:
        'Bürger Russlands, Kasachstans, der USA, der EU, Großbritanniens, Japans, Koreas und von über 150 weiteren Ländern reisen 30 Tage visumfrei ein, Brasilianer und Israelis 59 Tage. Inder erhalten 14 Tage, mit Visum oder Aufenthaltstitel der USA, Japans, Australiens, Kanadas, des Schengenraums, Singapurs oder Großbritanniens 30. Chinesen, Belarussen, Ukrainer, Georgier und Armenier brauchen ein Visum. Visumfreie Aufenthalte lassen sich im Land auf bis zu 36 Monate verlängern.',
      apply:
        'Alle füllen frühestens 72 Stunden vor der Ankunft das kostenlose eTravel-Formular aus und zeigen den QR-Code beim Check-in und an der Grenze. Wer ein Visum braucht, beantragt ein E-Visum auf evisa.gov.ph oder beim Konsulat: meist 5–10 Werktage. Airlines prüfen das Weiterflugticket streng und können ohne es das Boarding verweigern.',
      extend:
        'Die erste Verlängerung gilt 29 Tage (insgesamt 59), in jedem Büro des Bureau of Immigration oder online, für etwa 3.000–3.500 Peso. Danach verlängerst du um 1, 2 oder 6 Monate; sechs Monate kosten rund 11.500 Peso. Ohne Ausreise sind bis zu 36 Monate möglich (24 für visumpflichtige Nationalitäten). Ab 59 Tagen ist die ACR I-Card (etwa 50 $) Pflicht.',
      visaRun:
        'Visa-Runs funktionieren auf dem Papier – nach der Ausreise gibt es neue 30 Tage –, sind aber selten nötig: Verlängern ist billiger als Fliegen. Für einen Tapetenwechsel liegt Hongkong zwei Flugstunden von Manila entfernt, Taipeh ist von Cebu aus nah, und es gibt Flüge nach Kota Kinabalu. Nach 36 Monaten musst du ausreisen.',
      nomad:
        'Die Executive Order 86 von 2025 hat ein Digital-Nomad-Visum für ein Jahr geschaffen, verlängerbar um ein weiteres: Einkommen nur aus dem Ausland, Versicherung, sauberes Führungszeugnis, keine Arbeit für lokale Kunden. Eine offizielle Einkommensgrenze gibt es nicht (üblicher Richtwert rund 24.000 $ im Jahr), und offen ist es nur für Bürger von Ländern, die Filipinos ein ähnliches Visum bieten. Die Antragstellung wird schrittweise freigeschaltet – prüfe evisa.gov.ph.',
      hacks: [
        'Eine Verlängerung um sechs Monate am Stück (Long-Stay Visitor Visa Extension) spart Geld und Behördengänge gegenüber monatlichen Verlängerungen.',
        'Erledige die erste Verlängerung online über das System des Bureau of Immigration oder in einem kleinen Büro in Touristengegenden (Cebu, Palawan, Siargao) – im Hauptbüro in Intramuros vergeht leicht ein halber Tag.',
        'Für die Weiterflug-Kontrolle reicht jeder billige Flug aus dem Land, etwa Manila – Hongkong oder Cebu – Singapur: Airlines prüfen nicht, ob du ihn wirklich nimmst.',
        'Inder mit gültigem Visum der USA, Japans, Australiens, Kanadas, des Schengenraums, Singapurs oder Großbritanniens bekommen 30 statt 14 Tage – nimm dieses Visum mit.',
      ],
      pitfalls: [
        'Nachgemachte Seiten kassieren Geld für das kostenlose eTravel. Die einzige offizielle Adresse ist etravel.gov.ph.',
        'Nach mehr als sechs Monaten im Land brauchst du für die Ausreise ein Emigration Clearance Certificate (ECC) vom Bureau of Immigration, nach mehr als einem Jahr zahlst du am Flughafen die Travel Tax.',
        'Überziehen kostet eine Strafe pro Monat plus die Gebühren aller versäumten Verlängerungen; lange Überziehungen können auf die schwarze Liste führen.',
      ],
      passports: {
        RU: 'Russische Staatsangehörige reisen 30 Tage visumfrei ein und können bis auf 36 Monate verlängern. Direktflüge gibt es nicht, umgestiegen wird in Dubai, Doha, Bangkok oder Hongkong. Russische Karten funktionieren nicht – nimm Dollar mit, Wechselstuben in Einkaufszentren bieten die besten Kurse.',
        IN: 'Indische Staatsangehörige erhalten 14 Tage visumfrei, ohne Verlängerung oder Statuswechsel. Mit Visum oder Aufenthaltstitel der USA, Japans, Australiens, Kanadas, des Schengenraums, Singapurs oder Großbritanniens sind es 30 Tage. Für längere Reisen vorab ein Visum beantragen.',
        CN: 'Chinesische Staatsangehörige brauchen ein Visum, ausgestellt vom Konsulat oder über das philippinische E-Visum-System.',
        BR: 'Brasilianische und israelische Staatsangehörige reisen dank bilateraler Abkommen 59 Tage visumfrei ein und können zu den üblichen Bedingungen weiter verlängern.',
      },
      waivers: [
        'Indische Staatsangehörige mit gültigem Visum oder Aufenthaltstitel der USA, Japans, Australiens, Kanadas, eines Schengen-Staats, Singapurs oder Großbritanniens reisen 30 statt 14 Tage visumfrei ein. Visum oder Titel müssen am Einreisetag gültig sein; eTravel, Weiterflugticket, Unterkunftsbuchung und Finanznachweis brauchst du trotzdem. Für Reisen über einen Monat ist ein vorab beantragtes Visum der sicherere Weg.',
      ],
    },
    fr: {
      summary:
        'Les citoyens de Russie, du Kazakhstan, des États-Unis, de l’UE, du Royaume-Uni, du Japon, de Corée et de plus de 150 autres pays entrent sans visa pour 30 jours ; les Brésiliens et les Israéliens pour 59. Les Indiens obtiennent 14 jours, ou 30 avec un visa ou un titre de séjour américain, japonais, australien, canadien, Schengen, singapourien ou britannique. Chinois, Biélorusses, Ukrainiens, Géorgiens et Arméniens ont besoin d’un visa. Le séjour sans visa se prolonge sur place jusqu’à 36 mois.',
      apply:
        'Tout le monde remplit le formulaire gratuit eTravel au plus tôt 72 heures avant l’arrivée et présente le QR code à l’enregistrement et à la frontière. Si vous avez besoin d’un visa, demandez l’e-visa sur evisa.gov.ph ou au consulat : 5 à 10 jours ouvrés en général. Les compagnies vérifient strictement le billet de sortie et peuvent refuser l’embarquement sans lui.',
      extend:
        'La première prolongation est de 29 jours (59 au total), dans n’importe quel bureau du Bureau of Immigration ou en ligne, pour environ 3 000 à 3 500 pesos. Ensuite, on prolonge par tranches de 1, 2 ou 6 mois ; six mois coûtent environ 11 500 pesos. On peut rester jusqu’à 36 mois sans sortir (24 pour les nationalités soumises à visa). Au-delà de 59 jours, la carte ACR I-Card (environ 50 $) est obligatoire.',
      visaRun:
        'Le visa run fonctionne en théorie — une sortie donne 30 nouveaux jours —, mais il est rarement utile : prolonger coûte moins cher que prendre l’avion. Pour changer d’air, Hong Kong est à deux heures de Manille, Taipei tout proche de Cebu, et il y a des vols pour Kota Kinabalu. Au bout de 36 mois, il faut obligatoirement sortir.',
      nomad:
        'Le décret EO 86 de 2025 a créé un visa de nomade numérique d’un an, renouvelable une fois : revenus de l’étranger uniquement, assurance, casier judiciaire vierge, pas de travail pour des clients locaux. Aucun seuil de revenu officiel n’a été fixé (on cite en général environ 24 000 $ par an) et le visa n’est ouvert qu’aux citoyens de pays offrant un régime comparable aux Philippins. Les demandes s’ouvrent progressivement : vérifiez sur evisa.gov.ph.',
      hacks: [
        'Une prolongation de six mois d’un coup (Long-Stay Visitor Visa Extension) fait économiser argent et passages au bureau par rapport aux prolongations mensuelles.',
        'Faites la première prolongation en ligne via le système du Bureau of Immigration ou dans un petit bureau en zone touristique (Cebu, Palawan, Siargao) : au siège d’Intramuros, comptez une demi-journée.',
        'N’importe quel vol bon marché quittant le pays suffit pour le contrôle du billet de sortie, par exemple Manille – Hong Kong ou Cebu – Singapour : les compagnies ne vérifient pas si vous le prenez.',
        'Les Indiens titulaires d’un visa valable des États-Unis, du Japon, d’Australie, du Canada, de Schengen, de Singapour ou du Royaume-Uni obtiennent 30 jours au lieu de 14 : emportez ce visa.',
      ],
      pitfalls: [
        'Des sites copiés font payer l’eTravel, pourtant gratuit. La seule adresse officielle est etravel.gov.ph.',
        'Après plus de six mois sur place, il faut un certificat ECC du Bureau of Immigration pour sortir, et après plus d’un an, on paie la travel tax à l’aéroport.',
        'Un dépassement coûte une amende par mois plus les frais de toutes les prolongations manquées ; les longs dépassements peuvent valoir une inscription sur liste noire.',
      ],
      passports: {
        RU: 'Les ressortissants russes ont 30 jours sans visa, prolongeables jusqu’à 36 mois. Pas de vol direct : correspondance à Dubaï, Doha, Bangkok ou Hong Kong. Les cartes russes ne fonctionnent pas : emportez des dollars, les bureaux de change des centres commerciaux offrent les meilleurs taux.',
        IN: 'Les ressortissants indiens ont 14 jours sans visa, sans prolongation ni changement de statut. Avec un visa ou un titre de séjour des États-Unis, du Japon, d’Australie, du Canada, de Schengen, de Singapour ou du Royaume-Uni, c’est 30 jours. Pour un séjour plus long, demandez un visa à l’avance.',
        CN: 'Les ressortissants chinois ont besoin d’un visa, délivré par un consulat ou via le système d’e-visa philippin.',
        BR: 'Les ressortissants brésiliens et israéliens entrent sans visa pour 59 jours grâce à des accords bilatéraux et peuvent ensuite prolonger aux conditions habituelles.',
      },
      waivers: [
        'Les ressortissants indiens titulaires d’un visa ou d’un titre de séjour valable des États-Unis, du Japon, d’Australie, du Canada, d’un État Schengen, de Singapour ou du Royaume-Uni entrent sans visa pour 30 jours au lieu de 14. Le visa ou le titre doit être valable le jour de l’arrivée, et l’eTravel, un billet de sortie, une réservation d’hébergement et une preuve de fonds restent exigés. Pour un séjour de plus d’un mois, mieux vaut demander un visa à l’avance.',
      ],
    },
    it: {
      summary:
        'I cittadini di Russia, Kazakistan, Stati Uniti, UE, Regno Unito, Giappone, Corea e di oltre 150 altri paesi entrano senza visto per 30 giorni; brasiliani e israeliani per 59. Gli indiani hanno 14 giorni, o 30 con visto o permesso di soggiorno di Stati Uniti, Giappone, Australia, Canada, Schengen, Singapore o Regno Unito. Cinesi, bielorussi, ucraini, georgiani e armeni hanno bisogno del visto. Il soggiorno senza visto si proroga nel paese fino a 36 mesi.',
      apply:
        'Tutti compilano il modulo gratuito eTravel non prima di 72 ore dall’arrivo e mostrano il codice QR al check-in e alla frontiera. Se ti serve il visto, richiedi quello elettronico su evisa.gov.ph o in consolato: di solito 5–10 giorni lavorativi. Le compagnie aeree controllano con rigore il biglietto di uscita e senza possono negarti l’imbarco.',
      extend:
        'La prima proroga è di 29 giorni (59 in tutto) in qualsiasi ufficio del Bureau of Immigration o online, per circa 3.000–3.500 pesos. Poi si proroga di 1, 2 o 6 mesi; sei mesi costano circa 11.500 pesos. Senza uscire puoi restare fino a 36 mesi (24 per le nazionalità soggette a visto). Oltre i 59 giorni è obbligatoria la ACR I-Card (circa 50 $).',
      visaRun:
        'Il visa run funziona sulla carta — uscendo ottieni altri 30 giorni — ma raramente serve: prorogare costa meno che volare. Per cambiare aria, Hong Kong è a due ore da Manila, Taipei è vicina a Cebu e ci sono voli per Kota Kinabalu. Dopo 36 mesi bisogna uscire per forza.',
      nomad:
        'L’Ordine Esecutivo 86 del 2025 ha creato un visto per nomadi digitali di un anno, rinnovabile per un altro: reddito solo dall’estero, assicurazione, fedina penale pulita e niente lavoro per clienti locali. Non c’è una soglia di reddito ufficiale (il riferimento abituale è di circa 24.000 $ l’anno) ed è aperto solo ai cittadini di paesi che offrono ai filippini un visto simile. Le domande vengono aperte per fasi: verifica su evisa.gov.ph.',
      hacks: [
        'Una proroga di sei mesi in una volta sola (Long-Stay Visitor Visa Extension) fa risparmiare soldi e visite in ufficio rispetto alle proroghe mensili.',
        'Fai la prima proroga online con il sistema del Bureau of Immigration o in un piccolo ufficio di zona turistica (Cebu, Palawan, Siargao): nella sede centrale di Intramuros si perde mezza giornata.',
        'Per il controllo del biglietto di uscita va bene qualsiasi volo economico fuori dal paese, come Manila – Hong Kong o Cebu – Singapore: le compagnie non verificano se lo prendi davvero.',
        'I cittadini indiani con visto valido di Stati Uniti, Giappone, Australia, Canada, Schengen, Singapore o Regno Unito ottengono 30 giorni invece di 14: porta con te quel visto.',
      ],
      pitfalls: [
        'I siti che imitano eTravel fanno pagare un modulo gratuito. L’unico indirizzo ufficiale è etravel.gov.ph.',
        'Dopo più di sei mesi nel paese, per uscire serve il certificato ECC del Bureau of Immigration, e dopo più di un anno si paga la travel tax in aeroporto.',
        'L’overstay costa una multa per ogni mese più le tasse di tutte le proroghe saltate; quelli lunghi possono portare alla lista nera.',
      ],
      passports: {
        RU: 'I cittadini russi hanno 30 giorni senza visto, prorogabili fino a 36 mesi. Non ci sono voli diretti: si fa scalo a Dubai, Doha, Bangkok o Hong Kong. Le carte russe non funzionano, quindi porta dollari: i cambi nei centri commerciali offrono i tassi migliori.',
        IN: 'I cittadini indiani hanno 14 giorni senza visto, senza proroga né cambio di status. Con visto o permesso di soggiorno di Stati Uniti, Giappone, Australia, Canada, Schengen, Singapore o Regno Unito diventano 30. Per viaggi più lunghi chiedi il visto in anticipo.',
        CN: 'I cittadini cinesi hanno bisogno del visto, rilasciato da un consolato o tramite il sistema di visti elettronici filippino.',
        BR: 'I cittadini brasiliani e israeliani entrano senza visto per 59 giorni grazie ad accordi bilaterali e possono poi prorogare alle condizioni normali.',
      },
      waivers: [
        'I cittadini indiani con visto o permesso di soggiorno valido di Stati Uniti, Giappone, Australia, Canada, uno Stato Schengen, Singapore o Regno Unito entrano senza visto per 30 giorni invece di 14. Il visto o il permesso deve essere valido il giorno dell’arrivo, e restano necessari eTravel, biglietto di uscita, prenotazione dell’alloggio e prova dei fondi. Per viaggi di oltre un mese è più sicuro chiedere il visto in anticipo.',
      ],
    },
  },
};

export default guide;
