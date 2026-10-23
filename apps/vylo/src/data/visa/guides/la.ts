import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'LA',
  checked: '2026-10',
  fees: {
    voa: { kind: 'from', amount: 30, currency: 'USD' },
    evisa: { kind: 'from', amount: 45, currency: 'USD' },
  },
  stay: { voa: 30, evisa: 30 },
  links: { evisa: 'https://laoevisa.gov.la' },
  docs: ['returnTicket'],
  passportMonths: 6,
  extend: { days: 30 },
  visaRun: 'yes',
  borders: [
    { name: 'Vientiane – Nong Khai (Friendship Bridge)', to: 'TH', lat: 17.8771, lng: 102.7158 },
    { name: 'Boten – Mohan', to: 'CN', lat: 21.183, lng: 101.675 },
    { name: 'Dansavanh – Lao Bao', to: 'VN', lat: 16.6255, lng: 106.5916 },
  ],
  text: {
    ru: {
      summary:
        'Граждане России, Кореи и стран АСЕАН въезжают без визы на 30 дней, Японии, Швейцарии и Люксембурга — на 15. Почти все остальные, включая граждан ЕС, США, Великобритании, Индии и Китая, получают визу по прибытии на 30 дней за 30–42 $ (зависит от паспорта) или заранее оформляют электронную визу.',
      apply:
        'Визу по прибытии дают в международных аэропортах (Вьентьян, Луангпхабанг, Паксе) и на главных сухопутных переходах: анкета, фото 4×6 и оплата наличными долларами. E-визу оформляют на laoevisa.gov.la примерно за 50 $: одобрение приходит за 3 рабочих дня, распечатку показывают на границе. E-визу принимают не на всех пунктах — проверьте свой переход в списке на портале.',
      extend:
        'Туристическую визу продлевают до 30 дней в Департаменте иммиграции во Вьентьяне или в провинциальных отделах, обычно через турагентство. Плата берётся за каждый день продления — порядка 2 $ в сутки, у агентств дороже.',
      visaRun:
        'Визаран работает в обе стороны: Лаос — классическое направление для выезда из Таиланда через Мост дружбы Нонгкхай — Вьентьян. Помните, что Таиланд пускает по безвизу через сушу только два раза в год. Из Лаоса же удобно выехать во Вьетнам через Дансаван — Лаобао или в Китай поездом через Ботен, если у вас есть право на въезд в Китай.',
      hacks: [
        'Скоростной поезд Вьентьян — Ванвиенг — Луангпхабанг — Ботен экономит дни пути: до Луангпхабанга меньше двух часов, а в Ботене можно сразу пересечь границу с Китаем.',
        'E-виза избавляет от «сверхурочных» доплат: на сухопутных переходах по выходным и вечером к цене визы по прибытии добавляют 1–2 $.',
        'Одобрение e-визы действует несколько месяцев до въезда (сейчас временно до 180 дней вместо 60) — её можно оформить заранее под весь маршрут по Индокитаю.',
        'Берите новые долларовые купюры и фото с собой: на границе фото делают за отдельные деньги, а мятые банкноты не принимают.',
      ],
      pitfalls: [
        'Сайты-посредники продают e-визу Лаоса в полтора-два раза дороже. Официальный портал только laoevisa.gov.la.',
        'За каждый день просрочки при выезде берут 10 $.',
        'Иностранцы обязаны быть зарегистрированы по месту проживания: гестхаусы делают это сами, а при жизни у знакомых сообщите в местную полицию.',
      ],
      passports: {
        RU: 'Россиянам — 30 дней без визы. Прямых рейсов нет: летят через Бангкок, Ханой, Гуанчжоу или Куньмин. Российские карты работают ненадёжно — везите наличные доллары и меняйте на кипы в банках.',
        JP: 'Граждане Японии въезжают без визы на 15 дней; для более долгой поездки оформите e-визу или визу по прибытии на 30 дней.',
        CN: 'Граждане Китая получают визу по прибытии или e-визу; по железной дороге Куньмин — Вьентьян границу проходят в Ботене.',
      },
    },
    en: {
      summary:
        'Citizens of Russia, Korea and ASEAN countries enter visa-free for 30 days; Japan, Switzerland and Luxembourg for 15. Almost everyone else, including EU, US, UK, Indian and Chinese citizens, gets a 30-day visa on arrival for $30–42 (depending on the passport) or applies for an e-visa in advance.',
      apply:
        'The visa on arrival is issued at the international airports (Vientiane, Luang Prabang, Pakse) and the main land crossings: form, a 4×6 photo and payment in US dollars cash. The e-visa is issued at laoevisa.gov.la for about $50: approval takes three working days and you show the printout at the border. Not every checkpoint accepts the e-visa — check yours on the portal’s list.',
      extend:
        'The tourist visa can be extended by up to 30 days at the Immigration Department in Vientiane or at provincial offices, usually through a travel agency. You pay for each extra day — around $2 a day, more through agencies.',
      visaRun:
        'Visa runs work both ways: Laos is the classic exit from Thailand via the Nong Khai – Vientiane Friendship Bridge. Remember that Thailand only allows two visa-exempt land entries a year. From Laos, the easy runs are into Vietnam via Dansavanh – Lao Bao or into China by train via Boten, if you are entitled to enter China.',
      hacks: [
        'The high-speed train Vientiane – Vang Vieng – Luang Prabang – Boten saves days of travel: Luang Prabang is under two hours away, and at Boten you can cross straight into China.',
        'The e-visa saves you “overtime” surcharges: at land crossings on weekends and evenings, $1–2 is added to the visa-on-arrival price.',
        'An e-visa approval stays valid for months before entry (temporarily 180 days instead of 60), so you can arrange it early for a whole Indochina loop.',
        'Bring new dollar notes and a photo: at the border, photos cost extra and creased banknotes are refused.',
      ],
      pitfalls: [
        'Agency sites sell the Lao e-visa for one and a half to two times the price. The only official portal is laoevisa.gov.la.',
        'Each day of overstay costs $10, paid on departure.',
        'Foreigners must be registered where they stay: guesthouses do it for you, but if you stay with friends, inform the local police.',
      ],
      passports: {
        RU: 'Russian citizens get 30 days visa-free. There are no direct flights; connect via Bangkok, Hanoi, Guangzhou or Kunming. Russian cards work unreliably, so bring US dollar cash and change it into kip at banks.',
        JP: 'Japanese citizens enter visa-free for 15 days; for longer trips, take the 30-day e-visa or visa on arrival.',
        CN: 'Chinese citizens get a visa on arrival or an e-visa; on the Kunming – Vientiane railway, border formalities are at Boten.',
      },
    },
    es: {
      summary:
        'Los ciudadanos de Rusia, Corea y los países de la ASEAN entran sin visado durante 30 días; los de Japón, Suiza y Luxemburgo, durante 15. Casi todos los demás, incluidos los de la UE, EE. UU., el Reino Unido, la India y China, obtienen un visado a la llegada de 30 días por 30–42 $ (según el pasaporte) o tramitan antes un visado electrónico.',
      apply:
        'El visado a la llegada se expide en los aeropuertos internacionales (Vientiane, Luang Prabang, Pakse) y en los principales pasos terrestres: formulario, foto de 4×6 y pago en dólares en efectivo. El visado electrónico se pide en laoevisa.gov.la por unos 50 $: la aprobación tarda tres días laborables y en la frontera enseñas la copia impresa. No todos los puestos aceptan el visado electrónico: busca el tuyo en la lista del portal.',
      extend:
        'El visado de turista se prorroga hasta 30 días en el Departamento de Inmigración de Vientiane o en las oficinas provinciales, normalmente a través de una agencia. Se paga por cada día adicional: unos 2 $ al día, más si vas con agencia.',
      visaRun:
        'El visa run funciona en ambos sentidos: Laos es la salida clásica desde Tailandia por el Puente de la Amistad Nong Khai – Vientiane. Recuerda que Tailandia solo permite dos entradas sin visado por tierra al año. Desde Laos, lo más fácil es salir a Vietnam por Dansavanh – Lao Bao o a China en tren por Boten, si tienes derecho a entrar en China.',
      hacks: [
        'El tren de alta velocidad Vientiane – Vang Vieng – Luang Prabang – Boten ahorra días de viaje: Luang Prabang queda a menos de dos horas, y en Boten se cruza directamente a China.',
        'El visado electrónico te ahorra los recargos por «horas extra»: en los pasos terrestres, los fines de semana y por la tarde se suman 1–2 $ al visado a la llegada.',
        'La aprobación del visado electrónico vale varios meses antes de entrar (ahora, de forma temporal, 180 días en lugar de 60), así que puedes tramitarla pronto para toda una ruta por Indochina.',
        'Lleva billetes de dólar nuevos y una foto: en la frontera las fotos se cobran aparte y no aceptan billetes arrugados.',
      ],
      pitfalls: [
        'Las webs intermediarias venden el visado electrónico de Laos por entre una vez y media y el doble de su precio. El único portal oficial es laoevisa.gov.la.',
        'Cada día de exceso de estancia cuesta 10 $, que se pagan al salir.',
        'Los extranjeros deben estar registrados donde se alojan: las guesthouses lo hacen por ti, pero si te quedas con amigos, avisa a la policía local.',
      ],
      passports: {
        RU: 'Los ciudadanos rusos tienen 30 días sin visado. No hay vuelos directos: se hace escala en Bangkok, Hanói, Cantón o Kunming. Las tarjetas rusas funcionan de forma irregular: lleva dólares en efectivo y cámbialos a kip en bancos.',
        JP: 'Los ciudadanos japoneses entran sin visado durante 15 días; para viajes más largos, pide el visado electrónico o el visado a la llegada de 30 días.',
        CN: 'Los ciudadanos chinos obtienen visado a la llegada o electrónico; en el tren Kunming – Vientiane, los trámites fronterizos se hacen en Boten.',
      },
    },
    de: {
      summary:
        'Bürger Russlands, Koreas und der ASEAN-Staaten reisen 30 Tage visumfrei ein, Japaner, Schweizer und Luxemburger 15 Tage. Fast alle anderen, auch EU-, US-, britische, indische und chinesische Staatsangehörige, bekommen ein 30-Tage-Visa on Arrival für 30–42 $ (je nach Pass) oder beantragen vorab ein E-Visum.',
      apply:
        'Das Visa on Arrival gibt es an den internationalen Flughäfen (Vientiane, Luang Prabang, Pakse) und den wichtigsten Landübergängen: Formular, Foto 4×6 und Barzahlung in US-Dollar. Das E-Visum stellt laoevisa.gov.la für rund 50 $ aus: Die Genehmigung dauert drei Werktage, an der Grenze zeigst du den Ausdruck. Nicht jeder Grenzposten akzeptiert das E-Visum – prüf deinen in der Liste auf dem Portal.',
      extend:
        'Das Touristenvisum lässt sich um bis zu 30 Tage beim Immigration Department in Vientiane oder in Provinzbüros verlängern, meist über ein Reisebüro. Bezahlt wird pro zusätzlichem Tag – etwa 2 $ täglich, über Agenturen mehr.',
      visaRun:
        'Visa-Runs funktionieren in beide Richtungen: Laos ist der klassische Ausweg aus Thailand über die Freundschaftsbrücke Nong Khai – Vientiane. Denk daran, dass Thailand nur zwei visumfreie Landeinreisen pro Jahr zulässt. Von Laos aus geht es bequem nach Vietnam über Dansavanh – Lao Bao oder per Zug über Boten nach China, sofern du dort einreisen darfst.',
      hacks: [
        'Der Schnellzug Vientiane – Vang Vieng – Luang Prabang – Boten spart Reisetage: Luang Prabang ist keine zwei Stunden entfernt, in Boten geht es direkt über die Grenze nach China.',
        'Mit dem E-Visum sparst du „Overtime“-Zuschläge: An Landübergängen kommen am Wochenende und abends 1–2 $ auf den Preis des Visa on Arrival.',
        'Eine E-Visum-Genehmigung gilt vor der Einreise mehrere Monate (derzeit befristet 180 statt 60 Tage) – du kannst sie also früh für eine ganze Indochina-Runde beantragen.',
        'Nimm neue Dollarscheine und ein Passfoto mit: An der Grenze kosten Fotos extra, zerknitterte Scheine werden abgelehnt.',
      ],
      pitfalls: [
        'Vermittlerseiten verkaufen das laotische E-Visum zum anderthalb- bis doppelten Preis. Das einzige offizielle Portal ist laoevisa.gov.la.',
        'Jeder Tag Überziehung kostet 10 $, zahlbar bei der Ausreise.',
        'Ausländer müssen am Aufenthaltsort gemeldet sein: Guesthouses erledigen das, wer bei Bekannten wohnt, meldet sich bei der örtlichen Polizei.',
      ],
      passports: {
        RU: 'Russische Staatsangehörige reisen 30 Tage visumfrei ein. Direktflüge gibt es nicht, umgestiegen wird in Bangkok, Hanoi, Guangzhou oder Kunming. Russische Karten funktionieren unzuverlässig – nimm US-Dollar in bar mit und tausch sie bei Banken in Kip.',
        JP: 'Japanische Staatsangehörige reisen 15 Tage visumfrei ein; für längere Reisen gibt es das 30-Tage-E-Visum oder Visa on Arrival.',
        CN: 'Chinesische Staatsangehörige erhalten Visa on Arrival oder E-Visum; auf der Bahnstrecke Kunming – Vientiane finden die Grenzformalitäten in Boten statt.',
      },
    },
    fr: {
      summary:
        'Les citoyens de Russie, de Corée et des pays de l’ASEAN entrent sans visa pour 30 jours ; ceux du Japon, de Suisse et du Luxembourg pour 15. Presque tous les autres, y compris les Européens, Américains, Britanniques, Indiens et Chinois, obtiennent un visa à l’arrivée de 30 jours pour 30 à 42 $ (selon le passeport) ou demandent un e-visa à l’avance.',
      apply:
        'Le visa à l’arrivée est délivré dans les aéroports internationaux (Vientiane, Luang Prabang, Paksé) et aux principaux postes terrestres : formulaire, photo 4×6 et paiement en dollars en espèces. L’e-visa se demande sur laoevisa.gov.la pour environ 50 $ : l’accord arrive sous trois jours ouvrés et l’on présente l’impression à la frontière. Tous les postes n’acceptent pas l’e-visa : vérifiez le vôtre dans la liste du portail.',
      extend:
        'Le visa touristique se prolonge jusqu’à 30 jours au Département de l’immigration de Vientiane ou dans les bureaux provinciaux, généralement via une agence. On paie chaque jour supplémentaire : environ 2 $ par jour, davantage via une agence.',
      visaRun:
        'Le visa run fonctionne dans les deux sens : le Laos est la sortie classique depuis la Thaïlande par le pont de l’Amitié Nong Khai – Vientiane. N’oubliez pas que la Thaïlande n’autorise que deux entrées terrestres sans visa par an. Depuis le Laos, le plus simple est de passer au Vietnam par Dansavanh – Lao Bao ou en Chine en train par Boten, si vous avez le droit d’y entrer.',
      hacks: [
        'Le train à grande vitesse Vientiane – Vang Vieng – Luang Prabang – Boten fait gagner des jours : Luang Prabang est à moins de deux heures, et à Boten on passe directement en Chine.',
        'L’e-visa évite les suppléments « heures supplémentaires » : aux postes terrestres, le week-end et le soir, 1 à 2 $ s’ajoutent au prix du visa à l’arrivée.',
        'L’accord d’e-visa reste valable plusieurs mois avant l’entrée (provisoirement 180 jours au lieu de 60) : vous pouvez l’obtenir tôt pour toute une boucle en Indochine.',
        'Prévoyez des billets de dollar neufs et une photo : à la frontière, la photo est payante et les billets froissés sont refusés.',
      ],
      pitfalls: [
        'Des sites intermédiaires revendent l’e-visa laotien une fois et demie à deux fois plus cher. Le seul portail officiel est laoevisa.gov.la.',
        'Chaque jour de dépassement coûte 10 $, réglés à la sortie.',
        'Les étrangers doivent être enregistrés à leur lieu de séjour : les guesthouses s’en chargent, mais si vous logez chez des amis, signalez-vous à la police locale.',
      ],
      passports: {
        RU: 'Les ressortissants russes ont 30 jours sans visa. Pas de vol direct : correspondance à Bangkok, Hanoï, Canton ou Kunming. Les cartes russes fonctionnent mal : emportez des dollars en espèces et changez-les en kips dans les banques.',
        JP: 'Les ressortissants japonais entrent sans visa pour 15 jours ; pour un séjour plus long, prenez l’e-visa ou le visa à l’arrivée de 30 jours.',
        CN: 'Les ressortissants chinois obtiennent un visa à l’arrivée ou un e-visa ; sur la ligne ferroviaire Kunming – Vientiane, les formalités se font à Boten.',
      },
    },
    it: {
      summary:
        'I cittadini di Russia, Corea e dei paesi ASEAN entrano senza visto per 30 giorni; quelli di Giappone, Svizzera e Lussemburgo per 15. Quasi tutti gli altri, compresi europei, statunitensi, britannici, indiani e cinesi, ottengono un visto all’arrivo di 30 giorni per 30–42 $ (a seconda del passaporto) o richiedono prima un visto elettronico.',
      apply:
        'Il visto all’arrivo viene rilasciato negli aeroporti internazionali (Vientiane, Luang Prabang, Pakse) e nei principali valichi terrestri: modulo, foto 4×6 e pagamento in dollari contanti. Il visto elettronico si richiede su laoevisa.gov.la per circa 50 $: l’approvazione arriva in tre giorni lavorativi e alla frontiera mostri la stampa. Non tutti i posti di frontiera accettano il visto elettronico: controlla il tuo nell’elenco del portale.',
      extend:
        'Il visto turistico si proroga fino a 30 giorni al Dipartimento immigrazione di Vientiane o negli uffici provinciali, di solito tramite un’agenzia. Si paga per ogni giorno in più: circa 2 $ al giorno, di più tramite agenzia.',
      visaRun:
        'Il visa run funziona in entrambe le direzioni: il Laos è l’uscita classica dalla Thailandia attraverso il Ponte dell’Amicizia Nong Khai – Vientiane. Ricorda che la Thailandia consente solo due ingressi senza visto via terra all’anno. Dal Laos è comodo uscire verso il Vietnam da Dansavanh – Lao Bao o verso la Cina in treno da Boten, se hai diritto a entrarvi.',
      hacks: [
        'Il treno ad alta velocità Vientiane – Vang Vieng – Luang Prabang – Boten fa risparmiare giorni di viaggio: Luang Prabang è a meno di due ore e a Boten si passa direttamente in Cina.',
        'Il visto elettronico evita i supplementi per gli «straordinari»: ai valichi terrestri, nei weekend e la sera, al visto all’arrivo si aggiungono 1–2 $.',
        'L’approvazione del visto elettronico resta valida per mesi prima dell’ingresso (temporaneamente 180 giorni invece di 60): puoi ottenerla in anticipo per un intero giro dell’Indocina.',
        'Porta banconote in dollari nuove e una fototessera: alla frontiera le foto si pagano a parte e le banconote stropicciate vengono rifiutate.',
      ],
      pitfalls: [
        'I siti intermediari vendono il visto elettronico laotiano a una volta e mezza o al doppio del prezzo. L’unico portale ufficiale è laoevisa.gov.la.',
        'Ogni giorno di overstay costa 10 $, da pagare all’uscita.',
        'Gli stranieri devono essere registrati dove alloggiano: le guesthouse lo fanno per te, ma se stai da amici avvisa la polizia locale.',
      ],
      passports: {
        RU: 'I cittadini russi hanno 30 giorni senza visto. Non ci sono voli diretti: si fa scalo a Bangkok, Hanoi, Canton o Kunming. Le carte russe funzionano in modo inaffidabile: porta dollari in contanti e cambiali in kip in banca.',
        JP: 'I cittadini giapponesi entrano senza visto per 15 giorni; per viaggi più lunghi prendi il visto elettronico o il visto all’arrivo di 30 giorni.',
        CN: 'I cittadini cinesi ottengono il visto all’arrivo o quello elettronico; sulla ferrovia Kunming – Vientiane i controlli di frontiera si fanno a Boten.',
      },
    },
  },
};

export default guide;
