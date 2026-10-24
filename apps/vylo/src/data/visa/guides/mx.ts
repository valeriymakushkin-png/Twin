import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'MX',
  checked: '2026-10',
  // Since 5 Feb 2026 Brazilians flying in get a single-entry e-visa online instead of a consular visa
  overrides: { BR: { status: 'evisa', days: 180 } },
  fees: { eta: { kind: 'free' } },
  stay: { eta: 180, evisa: 180, visa: 180 },
  links: {
    eta: 'https://www.inm.gob.mx/sae/publico/solicitud.html',
    evisa: 'https://visaelectronica.sre.gob.mx',
    immigration: 'https://www.gob.mx/inm',
  },
  forms: [
    { name: 'SAE (Sistema de Autorización Electrónica)', url: 'https://www.inm.gob.mx/sae/publico/solicitud.html', fee: { kind: 'free' } },
    { name: 'VISITAX (Quintana Roo)', url: 'https://www.visitax.gob.mx', fee: { kind: 'from', amount: 290, currency: 'MXN' } },
  ],
  docs: ['returnTicket', 'booking', 'finance'],
  passportMonths: 0,
  visaRun: 'limited',
  borders: [
    { name: 'Subteniente López – Santa Elena (Chetumal)', to: 'BZ', lat: 18.49, lng: -88.392 },
    { name: 'Tijuana – San Ysidro', to: 'US', lat: 32.5422, lng: -117.0296 },
    { name: 'Ciudad Hidalgo – Tecún Umán', to: 'GT', lat: 14.6787, lng: -92.1487 },
  ],
  nomad: { name: 'Residente Temporal', months: 12, income: { kind: 'from', amount: 4000, currency: 'USD' } },
  waivers: [
    {
      holds: ['visaUS', 'visaCA', 'visaGB', 'visaJP', 'visaSchengen', 'resUS', 'resCA', 'resGB', 'resJP', 'resEU'],
      status: 'free',
      days: 180,
    },
  ],
  hackScope: [['regime:required', 'regime:evisa'], ['regime:free', 'regime:eta'], null, null],
  pitfallScope: [['regime:eta', 'regime:free'], ['regime:required', 'regime:evisa'], null, null],
  text: {
    ru: {
      summary:
        'Граждане США, Канады, Великобритании, ЕС, Японии, Кореи и большинства стран Латинской Америки въезжают без визы, а сколько дней дать — до 180 — решает пограничник. Россияне, украинцы и турки, прилетающие самолётом, оформляют бесплатное онлайн-разрешение SAE, бразильцы — новую e-визу, а владельцам действующей визы или ВНЖ США, Канады, Великобритании, Японии или Шенгена мексиканская виза не нужна вовсе.',
      apply:
        'Безвизовым туристам достаточно паспорта: бумажной миграционной карты FMM в аэропортах больше нет, офицер ставит штамп с числом дней или фиксирует их в системе. Сбор для нерезидентов (DNR, 983 песо в 2026 году) уже включён в авиабилет; при въезде по суше его платят в банке или офисе INM, если вы остаётесь дольше 7 дней. SAE для паспортов России, Украины и Турции бесплатна и выдаётся мгновенно на сайте INM: действует 180 дней, на один въезд самолётом участвующей авиакомпании. Остальным нужна виза в консульстве Мексики.',
      visaRun:
        'Визаран возможен, но всё решает офицер: фиксированного скользящего лимита нет, однако тому, кто снова въезжает после 180 дней, могут дать неделю или отказать. Обычные варианты — из Четумаля в Белиз, из Тихуаны в Сан-Диего (нужен въезд в США) или из Тапачулы в Гватемалу через Сьюдад-Идальго. Возвращайтесь с обратным билетом, бронью жилья и подтверждением средств.',
      nomad:
        'Отдельной визы для цифровых кочевников нет — удалённые работники получают визу временного резидента (Residente Temporal) в консульстве Мексики за рубежом и в течение 30 дней после въезда меняют её на карту в INM. Консульства просят стабильный доход примерно 4000–4500 $ в месяц за последние полгода или около 70 000 $ на счёте; пороги пересчитывают ежегодно, и в разных консульствах они отличаются. Первая карта выдаётся на год и продлевается до четырёх лет.',
      hacks: [
        'Действующая виза США, Канады, Великобритании, Японии или Шенгена (или ВНЖ этих стран) заменяет мексиканскую визу для любого гражданства — главный лайфхак для паспортов Индии, Китая, Филиппин или Перу.',
        'Срок решают у стойки: если нужно больше пары недель, скажите об этом и покажите обратный билет и брони — офицер впишет точное число дней, и только оно имеет значение.',
        'При въезде по суше не больше чем на 7 дней (например, из Сан-Диего в Тихуану или из Эль-Пасо в Сьюдад-Хуарес) сбор DNR платить не нужно.',
        'Летите в Канкун, Тулум или на Косумель? Штат Кинтана-Роо берёт сбор VISITAX — около 300 песо с человека. Платите только на visitax.gob.mx и сохраните QR-код: его проверяют при вылете.',
      ],
      pitfalls: [
        'Сайты-посредники продают бесплатную SAE, VISITAX или несуществующую «мексиканскую eTA» за 40–90 $. SAE бесплатна на сайте INM, а для безвизовых туристов никакой eTA нет.',
        'С октября 2023 года тем, кому нужна мексиканская виза, она нужна даже для пересадки — без неё или без подходящей визы США, Великобритании, Шенгена, Канады или Японии на рейс не посадят.',
        'В Канкуне часто отправляют на дополнительный досмотр: без обратного билета, брони отеля или с путаными ответами можно улететь ближайшим рейсом обратно.',
        'Просрочку нельзя оплатить в аэропорту: до вылета нужно прийти в офис INM, заплатить штраф и получить разрешение на выезд — это может занять день.',
      ],
      waivers: [
        'Любой иностранец въезжает как турист без визы (до 180 дней), если у него есть действующая виза США, Канады, Великобритании, Японии или страны Шенгена либо ПМЖ в одной из них (или в стране Тихоокеанского альянса). Виза должна быть действительна в день въезда; использовать её раньше не обязательно, подходят и однократные. ESTA и eTA не считаются. Работает при въезде самолётом, по суше и морем.',
      ],
      passports: {
        RU: 'Россиянам нужна бесплатная SAE: оформляйте её на сайте INM за несколько дней до вылета; только для въезда самолётом, авиакомпания должна участвовать в программе. Российские карты в Мексике не работают — берите доллары наличными или иностранную карту. В Канкуне россиян часто расспрашивают подробно: распечатанный обратный билет и брони сильно помогают.',
        UA: 'Гражданам Украины также доступна бесплатная SAE для въезда самолётом; при её отказе нужна консульская виза — или подойдёт действующая виза США, Шенгена или Великобритании.',
        BR: 'С 5 февраля 2026 года бразильцы, летящие в Мексику, оформляют однократную e-визу онлайн на visaelectronica.sre.gob.mx — без визита в консульство. Действующая виза США, Канады или Шенгена по-прежнему избавляет от визы полностью.',
        IN: 'Гражданам Индии нужна мексиканская виза, если у них нет действующей визы или ВНЖ США, Великобритании, Канады, Японии или Шенгена; большинство индийских туристов въезжают по американской B1/B2.',
        US: 'Американцы въезжают без визы до 180 дней. Чтобы выехать на своей машине за пределы приграничной зоны (кроме Нижней Калифорнии), нужно временное разрешение на ввоз авто от Banjercito.',
      },
    },
    en: {
      summary:
        'Citizens of the US, Canada, the UK, the EU, Japan, Korea and most of Latin America enter visa-free, and the officer decides how many days you get, up to 180. Russians, Ukrainians and Turks flying in can use the free online SAE authorisation, Brazilians a new e-visa, and anyone holding a valid US, Canadian, UK, Japanese or Schengen visa or residence permit needs no Mexican visa at all.',
      apply:
        'Visa-exempt travellers just show their passport: there is no paper FMM at airports any more — the officer stamps or records the number of days granted. The non-resident fee (DNR, MXN 983 in 2026) is already in your plane ticket; by land you pay it at a bank or INM office if you stay longer than seven days. The SAE for Russian, Ukrainian and Turkish passports is free and issued instantly on the INM site, valid 180 days for one entry by air on a participating airline. Everyone else applies for a visa at a Mexican consulate.',
      visaRun:
        'Runs are possible but at the officer’s discretion: there is no fixed rolling limit, yet someone who keeps re-entering after 180 days may get just a week or be refused. The usual hops are Chetumal to Belize, Tijuana to San Diego (needs US entry) or Tapachula to Guatemala via Ciudad Hidalgo. Come back with a return ticket, accommodation and proof of funds.',
      nomad:
        'Mexico has no nomad visa as such — remote workers use the Temporary Resident visa (Residente Temporal), obtained at a Mexican consulate abroad and swapped for a card at INM within 30 days of arrival. Consulates ask for steady income of roughly US$4,000–4,500 a month over the last six months, or about US$70,000 in savings; thresholds are recalculated every year and vary by consulate. The first card lasts a year and can be renewed up to four.',
      hacks: [
        'A valid US, Canadian, UK, Japanese or Schengen visa (or permanent residence there) replaces the Mexican visa for any nationality — the single most useful trick for Indian, Chinese, Filipino or Peruvian passports.',
        'Days are decided at the desk: if you need more than a couple of weeks, say so and show your return ticket and bookings — the officer records the exact number, and that is your only limit.',
        'Land entries of seven days or less (say, San Diego to Tijuana or El Paso to Ciudad Juárez) are exempt from the DNR fee.',
        'Flying into Cancún, Tulum or Cozumel? Quintana Roo charges a VISITAX of about MXN 300 per person; pay it only on visitax.gob.mx and keep the QR code — it is checked on departure.',
      ],
      pitfalls: [
        'Agency sites sell the free SAE, the VISITAX or a non-existent “Mexico eTA” for US$40–90. The SAE is free on the INM site, and visa-exempt travellers need no ETA at all.',
        'Since October 2023, anyone who needs a Mexican visa needs it even for a flight connection — airlines refuse boarding without it or a qualifying US, UK, Schengen, Canadian or Japanese visa.',
        'Cancún immigration is known for secondary checks: no return ticket, no hotel booking or vague answers can put you on the next flight home.',
        'An overstay cannot be settled at the airport: you must visit an INM office before departure, pay a fine and get an exit permit, which can take a day.',
      ],
      waivers: [
        'Any nationality is admitted visa-free as a visitor (up to 180 days) with a valid visa from the US, Canada, the UK, Japan or a Schengen country, or permanent residence in one of them (or in a Pacific Alliance country). The visa must be valid on the day you enter; it need not have been used, and single-entry visas count. ESTA and eTA do not. Works by air, land and sea.',
      ],
      passports: {
        RU: 'Russians need the free SAE: apply on the INM site a few days before flying; it covers air arrivals only, on a participating airline. Russian cards do not work in Mexico — bring US dollars in cash or a foreign card. Expect detailed questions in Cancún; a printed return ticket and bookings help a lot.',
        UA: 'Ukrainian citizens can also use the free SAE for air arrivals; if it is refused, you need a consular visa — or a valid US, Schengen or UK visa does the job.',
        BR: 'Since 5 February 2026, Brazilians flying to Mexico get a single-entry e-visa online at visaelectronica.sre.gob.mx, with no consulate visit. A valid US, Canadian or Schengen visa still exempts you completely.',
        IN: 'Indian citizens need a Mexican visa unless they hold a valid US, UK, Canadian, Japanese or Schengen visa or residence permit; most Indian visitors travel on their US B1/B2.',
        US: 'Americans enter visa-free for up to 180 days. Driving your own car beyond the border zone (except in Baja California) requires a temporary vehicle import permit from Banjercito.',
      },
    },
    es: {
      summary:
        'Los ciudadanos de EE. UU., Canadá, Reino Unido, la UE, Japón, Corea y casi toda Latinoamérica entran sin visa, y el agente decide cuántos días te da, hasta 180. Rusos, ucranianos y turcos que llegan en avión pueden usar la autorización electrónica gratuita SAE, los brasileños una nueva visa electrónica, y quien tenga visa o residencia vigente de EE. UU., Canadá, Reino Unido, Japón o Schengen no necesita visa mexicana.',
      apply:
        'Si no necesitas visa, basta el pasaporte: en los aeropuertos ya no hay FMM en papel, el agente sella o registra los días autorizados. El Derecho de No Residente (DNR, 983 pesos en 2026) ya va incluido en el boleto de avión; por tierra se paga en un banco u oficina del INM si te quedas más de siete días. La SAE para pasaportes de Rusia, Ucrania y Turquía es gratuita y se emite al instante en el sitio del INM: vale 180 días para una entrada aérea con una aerolínea participante. El resto tramita la visa en un consulado mexicano.',
      visaRun:
        'Las salidas y reentradas son posibles, pero quedan a criterio del agente: no hay un límite móvil fijo, aunque a quien vuelve a entrar tras 180 días le pueden dar solo una semana o negarle la entrada. Lo habitual es ir de Chetumal a Belice, de Tijuana a San Diego (requiere entrada a EE. UU.) o de Tapachula a Guatemala por Ciudad Hidalgo. Vuelve con boleto de salida, alojamiento y prueba de fondos.',
      nomad:
        'México no tiene visa de nómada digital como tal: quien trabaja en remoto usa la visa de Residente Temporal, que se obtiene en un consulado mexicano en el extranjero y se canjea por la tarjeta en el INM dentro de los 30 días siguientes a la llegada. Los consulados piden ingresos estables de unos 4000–4500 US$ al mes en los últimos seis meses o unos 70 000 US$ ahorrados; los umbrales se recalculan cada año y varían según el consulado. La primera tarjeta es por un año, renovable hasta cuatro.',
      hacks: [
        'Una visa vigente de EE. UU., Canadá, Reino Unido, Japón o Schengen (o la residencia permanente allí) sustituye la visa mexicana para cualquier nacionalidad: el truco más útil para pasaportes de India, China, Filipinas o Perú.',
        'Los días se deciden en la ventanilla: si necesitas más de un par de semanas, dilo y enseña tu boleto de regreso y tus reservas; el agente registra el número exacto y ese es tu único límite.',
        'Las entradas por tierra de siete días o menos (por ejemplo, de San Diego a Tijuana o de El Paso a Ciudad Juárez) están exentas del DNR.',
        '¿Vuelas a Cancún, Tulum o Cozumel? Quintana Roo cobra el VISITAX, unos 300 pesos por persona; págalo solo en visitax.gob.mx y guarda el código QR, porque lo revisan al salir.',
      ],
      pitfalls: [
        'Hay webs intermediarias que venden la SAE gratuita, el VISITAX o una inexistente «eTA de México» por 40–90 US$. La SAE es gratis en el sitio del INM y quien no necesita visa tampoco necesita ninguna eTA.',
        'Desde octubre de 2023, quien necesita visa mexicana la necesita incluso para una conexión; las aerolíneas no te dejan embarcar sin ella o sin una visa válida de EE. UU., Reino Unido, Schengen, Canadá o Japón.',
        'Migración en Cancún es conocida por las revisiones secundarias: sin boleto de regreso, sin reserva de hotel o con respuestas vagas puedes acabar en el siguiente vuelo de vuelta.',
        'Si te pasas de los días, no se arregla en el aeropuerto: antes de salir tienes que ir a una oficina del INM, pagar una multa y obtener un permiso de salida, lo que puede llevar un día.',
      ],
      waivers: [
        'Cualquier nacionalidad entra sin visa como visitante (hasta 180 días) con una visa vigente de EE. UU., Canadá, Reino Unido, Japón o un país Schengen, o con residencia permanente en uno de ellos (o en un país de la Alianza del Pacífico). La visa debe estar vigente el día de entrada; no hace falta haberla usado y valen las de una sola entrada. ESTA y eTA no cuentan. Funciona por aire, tierra y mar.',
      ],
      passports: {
        RU: 'Los rusos necesitan la SAE gratuita: solicítala en el sitio del INM unos días antes del vuelo; solo vale para llegadas en avión con aerolínea participante. Las tarjetas rusas no funcionan en México: lleva dólares en efectivo o una tarjeta extranjera. En Cancún suelen hacer muchas preguntas; el boleto de regreso impreso y las reservas ayudan mucho.',
        UA: 'Los ciudadanos ucranianos también pueden usar la SAE gratuita para llegar en avión; si te la niegan, necesitas visa consular, o te sirve una visa vigente de EE. UU., Schengen o Reino Unido.',
        BR: 'Desde el 5 de febrero de 2026, los brasileños que vuelan a México tramitan una visa electrónica de una entrada en visaelectronica.sre.gob.mx, sin ir al consulado. Una visa vigente de EE. UU., Canadá o Schengen sigue eximiéndote por completo.',
        IN: 'Los ciudadanos indios necesitan visa mexicana salvo que tengan visa o residencia vigente de EE. UU., Reino Unido, Canadá, Japón o Schengen; la mayoría viaja con su B1/B2 estadounidense.',
        US: 'Los estadounidenses entran sin visa hasta 180 días. Para llevar tu coche más allá de la zona fronteriza (salvo en Baja California) necesitas un permiso de importación temporal de Banjercito.',
      },
    },
    de: {
      summary:
        'Bürger der USA, Kanadas, Großbritanniens, der EU, Japans, Koreas und der meisten Länder Lateinamerikas reisen visumfrei ein; wie viele Tage du bekommst – bis zu 180 –, entscheidet der Grenzbeamte. Russen, Ukrainer und Türken, die einfliegen, nutzen die kostenlose Online-Genehmigung SAE, Brasilianer ein neues E-Visum, und wer ein gültiges Visum oder einen Aufenthaltstitel der USA, Kanadas, Großbritanniens, Japans oder des Schengenraums hat, braucht gar kein mexikanisches Visum.',
      apply:
        'Visumfreie Reisende zeigen nur ihren Pass: Eine Papier-FMM gibt es an Flughäfen nicht mehr, der Beamte stempelt oder erfasst die gewährten Tage. Die Nichtresidenten-Gebühr (DNR, 983 MXN im Jahr 2026) steckt bereits im Flugticket; über Land zahlst du sie bei einer Bank oder im INM-Büro, wenn du länger als sieben Tage bleibst. Die SAE für russische, ukrainische und türkische Pässe ist kostenlos und wird auf der INM-Seite sofort ausgestellt: 180 Tage gültig für eine Einreise per Flug mit einer teilnehmenden Airline. Alle anderen beantragen ein Visum im mexikanischen Konsulat.',
      visaRun:
        'Visa-Runs sind möglich, liegen aber im Ermessen des Beamten: Eine feste rollierende Grenze gibt es nicht, doch wer nach 180 Tagen erneut einreist, bekommt womöglich nur eine Woche oder wird abgewiesen. Üblich sind Chetumal nach Belize, Tijuana nach San Diego (US-Einreise nötig) oder Tapachula nach Guatemala über Ciudad Hidalgo. Komm mit Rückflugticket, Unterkunft und Finanznachweis zurück.',
      nomad:
        'Ein eigenes Nomadenvisum hat Mexiko nicht – Remote-Arbeitende nutzen das Visum als befristete Residenten (Residente Temporal), das ein mexikanisches Konsulat im Ausland ausstellt und das du innerhalb von 30 Tagen nach der Ankunft beim INM gegen eine Karte tauschst. Konsulate verlangen ein stabiles Einkommen von etwa 4.000–4.500 US$ im Monat über sechs Monate oder rund 70.000 US$ Ersparnisse; die Schwellen werden jährlich neu berechnet und schwanken je nach Konsulat. Die erste Karte gilt ein Jahr und lässt sich bis auf vier Jahre verlängern.',
      hacks: [
        'Ein gültiges Visum der USA, Kanadas, Großbritanniens, Japans oder des Schengenraums (oder ein Daueraufenthalt dort) ersetzt das mexikanische Visum für jede Staatsangehörigkeit – der wichtigste Trick für indische, chinesische, philippinische oder peruanische Pässe.',
        'Die Tage werden am Schalter entschieden: Brauchst du mehr als ein paar Wochen, sag es und zeig Rückflugticket und Buchungen – der Beamte erfasst die genaue Zahl, und nur die zählt.',
        'Wer über Land für höchstens sieben Tage einreist (etwa von San Diego nach Tijuana oder von El Paso nach Ciudad Juárez), zahlt keine DNR-Gebühr.',
        'Fliegst du nach Cancún, Tulum oder Cozumel? Quintana Roo verlangt die VISITAX von etwa 300 MXN pro Person; zahl sie nur auf visitax.gob.mx und heb den QR-Code auf – er wird bei der Ausreise geprüft.',
      ],
      pitfalls: [
        'Vermittlerseiten verkaufen die kostenlose SAE, die VISITAX oder eine nicht existierende „Mexiko-eTA“ für 40–90 US$. Die SAE ist auf der INM-Seite gratis, und visumfreie Reisende brauchen überhaupt keine eTA.',
        'Seit Oktober 2023 brauchen Visumpflichtige das mexikanische Visum sogar zum Umsteigen – ohne dieses oder ein passendes Visum der USA, Großbritanniens, des Schengenraums, Kanadas oder Japans lässt dich die Airline nicht an Bord.',
        'Die Einwanderungsbehörde in Cancún ist für Zweitkontrollen bekannt: Ohne Rückflug, ohne Hotelbuchung oder mit vagen Antworten sitzt du schnell im nächsten Flieger zurück.',
        'Eine Überziehung lässt sich nicht am Flughafen regeln: Vor dem Abflug musst du zu einem INM-Büro, ein Bußgeld zahlen und eine Ausreiseerlaubnis holen – das kann einen Tag dauern.',
      ],
      waivers: [
        'Jede Staatsangehörigkeit reist visumfrei als Besucher ein (bis zu 180 Tage), wenn du ein gültiges Visum der USA, Kanadas, Großbritanniens, Japans oder eines Schengenstaats hast oder dort dauerhaft wohnst (auch in einem Land der Pazifik-Allianz). Das Visum muss am Einreisetag gültig sein; benutzt haben musst du es nicht, auch Visa für eine Einreise zählen. ESTA und eTA zählen nicht. Gilt per Flug, über Land und auf See.',
      ],
      passports: {
        RU: 'Russen brauchen die kostenlose SAE: ein paar Tage vor dem Flug auf der INM-Seite beantragen; sie gilt nur für die Einreise per Flug mit teilnehmender Airline. Russische Karten funktionieren in Mexiko nicht – nimm US-Dollar in bar oder eine ausländische Karte mit. In Cancún wird oft ausführlich nachgefragt; ein ausgedrucktes Rückflugticket und Buchungen helfen sehr.',
        UA: 'Ukrainische Staatsangehörige können die kostenlose SAE ebenfalls für die Einreise per Flug nutzen; wird sie abgelehnt, brauchst du ein Konsularvisum – oder ein gültiges US-, Schengen- oder UK-Visum reicht.',
        BR: 'Seit dem 5. Februar 2026 erhalten Brasilianer, die nach Mexiko fliegen, online auf visaelectronica.sre.gob.mx ein E-Visum für eine Einreise – ohne Konsulatstermin. Ein gültiges US-, Kanada- oder Schengen-Visum befreit weiterhin ganz vom Visum.',
        IN: 'Indische Staatsangehörige brauchen ein mexikanisches Visum, außer sie haben ein gültiges Visum oder einen Aufenthaltstitel der USA, Großbritanniens, Kanadas, Japans oder des Schengenraums; die meisten reisen mit ihrem US-B1/B2.',
        US: 'US-Bürger reisen bis zu 180 Tage visumfrei ein. Wer mit dem eigenen Auto über die Grenzzone hinaus fährt (außer in Baja California), braucht eine temporäre Einfuhrgenehmigung von Banjercito.',
      },
    },
    fr: {
      summary:
        'Les citoyens des États-Unis, du Canada, du Royaume-Uni, de l’UE, du Japon, de la Corée et de la plupart des pays d’Amérique latine entrent sans visa ; c’est l’agent qui décide du nombre de jours, jusqu’à 180. Les Russes, Ukrainiens et Turcs arrivant en avion peuvent utiliser l’autorisation électronique gratuite SAE, les Brésiliens un nouvel e-visa, et toute personne titulaire d’un visa ou d’un titre de séjour valide des États-Unis, du Canada, du Royaume-Uni, du Japon ou de Schengen n’a besoin d’aucun visa mexicain.',
      apply:
        'Les voyageurs exemptés présentent simplement leur passeport : il n’y a plus de FMM papier dans les aéroports, l’agent tamponne ou enregistre le nombre de jours accordés. La taxe de non-résident (DNR, 983 MXN en 2026) est déjà incluse dans votre billet d’avion ; par voie terrestre, elle se paie en banque ou au bureau de l’INM si vous restez plus de sept jours. La SAE pour les passeports russes, ukrainiens et turcs est gratuite et délivrée immédiatement sur le site de l’INM : valable 180 jours pour une entrée par avion sur une compagnie participante. Les autres demandent un visa au consulat du Mexique.',
      visaRun:
        'Les visa runs sont possibles mais laissés à l’appréciation de l’agent : il n’y a pas de plafond glissant fixe, mais quelqu’un qui revient après 180 jours peut n’obtenir qu’une semaine, voire être refusé. Les sauts classiques : de Chetumal au Belize, de Tijuana à San Diego (entrée aux États-Unis nécessaire) ou de Tapachula au Guatemala par Ciudad Hidalgo. Revenez avec un billet de sortie, un hébergement et des justificatifs de ressources.',
      nomad:
        'Le Mexique n’a pas de visa nomade à proprement parler : les télétravailleurs utilisent le visa de résident temporaire (Residente Temporal), obtenu dans un consulat mexicain à l’étranger puis échangé contre une carte à l’INM dans les 30 jours suivant l’arrivée. Les consulats demandent des revenus réguliers d’environ 4 000–4 500 US$ par mois sur six mois, ou près de 70 000 US$ d’épargne ; les seuils sont recalculés chaque année et varient selon le consulat. La première carte vaut un an, renouvelable jusqu’à quatre ans.',
      hacks: [
        'Un visa valide des États-Unis, du Canada, du Royaume-Uni, du Japon ou de Schengen (ou une résidence permanente dans l’un de ces pays) remplace le visa mexicain pour toute nationalité : l’astuce la plus utile pour les passeports indiens, chinois, philippins ou péruviens.',
        'Les jours se décident au guichet : si vous avez besoin de plus de deux semaines, dites-le et montrez billet retour et réservations — l’agent enregistre le nombre exact, et c’est votre seule limite.',
        'Les entrées terrestres de sept jours maximum (par exemple de San Diego à Tijuana ou d’El Paso à Ciudad Juárez) sont exonérées de la DNR.',
        'Vous atterrissez à Cancún, Tulum ou Cozumel ? Le Quintana Roo prélève la VISITAX, environ 300 MXN par personne ; payez-la uniquement sur visitax.gob.mx et gardez le QR code, contrôlé au départ.',
      ],
      pitfalls: [
        'Des sites intermédiaires vendent la SAE gratuite, la VISITAX ou une « eTA mexicaine » inexistante pour 40 à 90 US$. La SAE est gratuite sur le site de l’INM, et les voyageurs exemptés n’ont besoin d’aucune eTA.',
        'Depuis octobre 2023, les personnes soumises au visa mexicain en ont besoin même pour une correspondance : sans lui ou sans visa valide des États-Unis, du Royaume-Uni, de Schengen, du Canada ou du Japon, la compagnie refuse l’embarquement.',
        'L’immigration de Cancún est connue pour ses contrôles approfondis : sans billet retour, sans réservation d’hôtel ou avec des réponses floues, vous risquez le prochain vol retour.',
        'Un dépassement de séjour ne se règle pas à l’aéroport : avant le départ, il faut passer dans un bureau de l’INM, payer une amende et obtenir une autorisation de sortie, ce qui peut prendre une journée.',
      ],
      waivers: [
        'Toute nationalité est admise sans visa comme visiteur (jusqu’à 180 jours) avec un visa valide des États-Unis, du Canada, du Royaume-Uni, du Japon ou d’un pays Schengen, ou une résidence permanente dans l’un d’eux (ou dans un pays de l’Alliance du Pacifique). Le visa doit être valide le jour de l’entrée ; il n’a pas besoin d’avoir servi et les visas à entrée unique comptent. ESTA et eTA ne comptent pas. Valable par avion, par la route et par la mer.',
      ],
      passports: {
        RU: 'Les Russes ont besoin de la SAE gratuite : demandez-la sur le site de l’INM quelques jours avant le vol ; elle ne vaut que pour une arrivée par avion sur une compagnie participante. Les cartes russes ne fonctionnent pas au Mexique : emportez des dollars en espèces ou une carte étrangère. À Cancún, les questions sont souvent détaillées ; un billet retour imprimé et des réservations aident beaucoup.',
        UA: 'Les citoyens ukrainiens peuvent aussi utiliser la SAE gratuite pour une arrivée par avion ; en cas de refus, il faut un visa consulaire — ou un visa valide des États-Unis, de Schengen ou du Royaume-Uni suffit.',
        BR: 'Depuis le 5 février 2026, les Brésiliens qui prennent l’avion pour le Mexique obtiennent en ligne, sur visaelectronica.sre.gob.mx, un e-visa à entrée unique, sans passer par le consulat. Un visa valide des États-Unis, du Canada ou de Schengen exempte toujours totalement.',
        IN: 'Les citoyens indiens ont besoin d’un visa mexicain, sauf s’ils détiennent un visa ou un titre de séjour valide des États-Unis, du Royaume-Uni, du Canada, du Japon ou de Schengen ; la plupart voyagent avec leur B1/B2 américain.',
        US: 'Les Américains entrent sans visa pour 180 jours maximum. Pour emmener sa voiture au-delà de la zone frontalière (sauf en Basse-Californie), il faut un permis d’importation temporaire de Banjercito.',
      },
    },
    it: {
      summary:
        'I cittadini di Stati Uniti, Canada, Regno Unito, UE, Giappone, Corea e quasi tutta l’America Latina entrano senza visto, e quanti giorni darti — fino a 180 — lo decide l’agente. Russi, ucraini e turchi che arrivano in aereo possono usare l’autorizzazione elettronica gratuita SAE, i brasiliani un nuovo visto elettronico, e chi ha un visto o un permesso di soggiorno valido di Stati Uniti, Canada, Regno Unito, Giappone o Schengen non ha bisogno di alcun visto messicano.',
      apply:
        'Chi è esente mostra solo il passaporto: negli aeroporti non c’è più la FMM cartacea, l’agente timbra o registra i giorni concessi. La tassa per non residenti (DNR, 983 MXN nel 2026) è già inclusa nel biglietto aereo; via terra si paga in banca o all’ufficio INM se resti più di sette giorni. La SAE per i passaporti di Russia, Ucraina e Turchia è gratuita e viene rilasciata subito sul sito dell’INM: vale 180 giorni per un ingresso in aereo con una compagnia aderente. Tutti gli altri chiedono il visto a un consolato messicano.',
      visaRun:
        'I visa run sono possibili ma a discrezione dell’agente: non c’è un limite mobile fisso, però chi rientra dopo 180 giorni può ricevere solo una settimana o essere respinto. Le mete abituali sono da Chetumal al Belize, da Tijuana a San Diego (serve l’ingresso negli USA) o da Tapachula al Guatemala via Ciudad Hidalgo. Rientra con biglietto di uscita, alloggio e prova dei mezzi.',
      nomad:
        'Il Messico non ha un vero visto per nomadi digitali: chi lavora da remoto usa il visto di Residente Temporal, ottenuto in un consolato messicano all’estero e convertito in tessera all’INM entro 30 giorni dall’arrivo. I consolati chiedono un reddito stabile di circa 4.000–4.500 US$ al mese negli ultimi sei mesi, o circa 70.000 US$ di risparmi; le soglie vengono ricalcolate ogni anno e variano da consolato a consolato. La prima tessera dura un anno ed è rinnovabile fino a quattro.',
      hacks: [
        'Un visto valido di Stati Uniti, Canada, Regno Unito, Giappone o Schengen (o la residenza permanente lì) sostituisce il visto messicano per qualsiasi nazionalità: il trucco più utile per i passaporti di India, Cina, Filippine o Perù.',
        'I giorni si decidono allo sportello: se ti servono più di un paio di settimane, dillo e mostra biglietto di ritorno e prenotazioni — l’agente registra il numero esatto, ed è il tuo unico limite.',
        'Gli ingressi via terra fino a sette giorni (per esempio da San Diego a Tijuana o da El Paso a Ciudad Juárez) sono esenti dalla DNR.',
        'Atterri a Cancún, Tulum o Cozumel? Il Quintana Roo applica la VISITAX, circa 300 MXN a persona; pagala solo su visitax.gob.mx e conserva il codice QR, che viene controllato alla partenza.',
      ],
      pitfalls: [
        'Siti intermediari vendono la SAE gratuita, la VISITAX o un’inesistente «eTA messicana» a 40–90 US$. La SAE è gratuita sul sito dell’INM e chi è esente dal visto non ha bisogno di alcuna eTA.',
        'Da ottobre 2023 chi ha bisogno del visto messicano ne ha bisogno anche per uno scalo: senza di esso o senza un visto valido di Stati Uniti, Regno Unito, Schengen, Canada o Giappone la compagnia nega l’imbarco.',
        'L’immigrazione di Cancún è nota per i controlli supplementari: senza biglietto di ritorno, senza prenotazione dell’hotel o con risposte vaghe rischi il primo volo di rientro.',
        'Uno sforamento non si sistema in aeroporto: prima di partire devi andare a un ufficio INM, pagare una multa e ottenere il permesso di uscita, e può volerci un giorno.',
      ],
      waivers: [
        'Qualsiasi nazionalità entra senza visto come visitatore (fino a 180 giorni) con un visto valido di Stati Uniti, Canada, Regno Unito, Giappone o di un paese Schengen, oppure con la residenza permanente in uno di essi (o in un paese dell’Alleanza del Pacifico). Il visto deve essere valido il giorno dell’ingresso; non serve averlo già usato e valgono anche quelli a ingresso singolo. ESTA ed eTA non contano. Vale in aereo, via terra e via mare.',
      ],
      passports: {
        RU: 'I russi hanno bisogno della SAE gratuita: richiedila sul sito dell’INM pochi giorni prima del volo; vale solo per l’arrivo in aereo con una compagnia aderente. Le carte russe in Messico non funzionano: porta dollari in contanti o una carta straniera. A Cancún le domande sono spesso dettagliate; un biglietto di ritorno stampato e le prenotazioni aiutano molto.',
        UA: 'Anche i cittadini ucraini possono usare la SAE gratuita per l’arrivo in aereo; se viene rifiutata serve il visto consolare, oppure basta un visto valido di Stati Uniti, Schengen o Regno Unito.',
        BR: 'Dal 5 febbraio 2026 i brasiliani che volano in Messico ottengono online, su visaelectronica.sre.gob.mx, un visto elettronico a ingresso singolo, senza passare dal consolato. Un visto valido di Stati Uniti, Canada o Schengen esenta ancora del tutto.',
        IN: 'I cittadini indiani hanno bisogno del visto messicano, a meno che non abbiano un visto o un permesso valido di Stati Uniti, Regno Unito, Canada, Giappone o Schengen; la maggior parte viaggia con il B1/B2 statunitense.',
        US: 'Gli statunitensi entrano senza visto fino a 180 giorni. Per portare la propria auto oltre la zona di frontiera (tranne in Bassa California) serve un permesso di importazione temporanea di Banjercito.',
      },
    },
  },
};

export default guide;
