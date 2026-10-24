import type { VisaGuide } from '../types';

const free14 = { status: 'free', days: 14 } as const;

const guide: VisaGuide = {
  code: 'OM',
  checked: '2026-10',
  overrides: {
    RU: { status: 'free', days: 30 },
    US: free14,
    GB: free14,
    CA: free14,
    AU: free14,
    DE: free14,
    FR: free14,
    IT: free14,
    ES: free14,
    PL: free14,
    NL: free14,
    JP: free14,
    KR: free14,
  },
  fees: { evisa: { kind: 'fixed', amount: 20, currency: 'OMR' } },
  stay: { evisa: 30 },
  links: { evisa: 'https://evisa.rop.gov.om', immigration: 'https://www.rop.gov.om' },
  docs: ['returnTicket', 'booking', 'insurance', 'finance'],
  passportMonths: 6,
  visaRun: 'limited',
  borders: [{ name: 'Muscat (MCT) → Dubai', to: 'AE', lat: 23.5933, lng: 58.2844 }],
  waivers: [
    {
      holds: ['visaUS', 'visaGB', 'visaSchengen', 'visaCA', 'visaAU', 'visaJP', 'resUS', 'resGB', 'resEU', 'resCA', 'resAU', 'resJP'],
      passports: ['MA'],
      status: 'free',
      days: 14,
    },
    { holds: ['resGCC'], status: 'evisa', days: 30 },
  ],
  hackScope: [null, ['regime:free'], ['regime:evisa', 'regime:required'], null, null],
  pitfallScope: [['regime:free'], null, null],
  text: {
    ru: {
      summary:
        'Граждане примерно сотни стран, включая ЕС, Великобританию, США, Канаду, Австралию, Японию, Корею, Беларусь, Казахстан, Узбекистан и Армению, въезжают без визы на 14 дней. Россияне с июля 2025 года по межправсоглашению находятся без визы до 30 дней за поездку и не больше 90 дней в году. Остальным, в том числе гражданам Индии, нужна электронная виза Королевской полиции Омана.',
      apply:
        'E-визу оформляют только на evisa.rop.gov.om: туристическая виза на 30 дней стоит около 20 риалов и обычно приходит за 1–2 рабочих дня. Безвизовым гостям ничего оформлять не нужно, но на границе могут спросить обратный билет, бронь отеля, медицинскую страховку и наличие средств. Если планируете больше 14 дней, берите e-визу сразу.',
      visaRun:
        'Короткие выезды в ОАЭ и обратно формально дают новые 14 дней, но частые «пробежки» вызывают вопросы, а у россиян действует лимит 90 дней в календарном году. Удобнее всего перелёт Маскат — Дубай или автобус Mwasalat в Дубай через Хатту.',
      hacks: [
        'Мусандам (Хасаб) — оманский эксклав, куда ездят из Рас-эль-Хаймы через переход Тибат: туры на доу по фьордам продают прямо в ОАЭ, а безвизовые правила Омана действуют и там.',
        'Если хотите остаться дольше 14 дней, не надейтесь на продление на месте: по свежим сообщениям безвизовый срок не продлевают. Сразу оформите 30-дневную e-визу.',
        'Резиденты стран Залива (GCC) получают 30-дневную e-визу примерно за 5 риалов — в разы дешевле обычной туристической.',
        'Единая туристическая виза стран Залива (GCC) на октябрь 2026 года всё ещё не запущена: для Омана по-прежнему нужен свой режим въезда.',
        'Арендованную в ОАЭ машину можно перегнать в Оман только с письменным разрешением прокатной компании и оманской страховкой; на выезде из ОАЭ по суше берут 35 дирхамов.',
      ],
      pitfalls: [
        'Безвизовый въезд условный: без брони отеля, обратного билета и страховки вас могут развернуть. Держите их в телефоне и на бумаге.',
        'Сайты, продающие «бесплатные» 14 дней или e-визу с наценкой, — посредники. Официальный портал только один — evisa.rop.gov.om.',
        'День прилёта считается первым. За перерасчёт штрафуют на выезде, а при долгом нарушении могут запретить въезд.',
      ],
      passports: {
        RU: 'Россияне с 18 июля 2025 года въезжают без визы до 30 дней за поездку, не больше 90 дней в календарном году. Прямых рейсов из Москвы нет — летают через Дубай, Доху или Стамбул. Российские карты не работают, везите доллары наличными.',
        IN: 'Гражданам Индии нужна e-виза на evisa.rop.gov.om. Резиденты стран Залива (GCC) получают её дешевле и быстрее.',
        TR: 'Граждане Турции въезжают без визы на 30 дней.',
        CN: 'Режим для граждан Китая, Бразилии, Грузии и Украины зависит от актуального списка Королевской полиции Омана — проверьте его перед поездкой.',
      },
      waivers: [
        'Гражданам «второй группы» безвизового списка (например, Марокко) 14 дней без визы дают, только если у них есть действующая виза или ВНЖ США, Канады, Австралии, Великобритании, Шенгена или Японии. Проверьте, в какой группе ваш паспорт.',
        'Резиденты стран Залива (GCC) оформляют 30-дневную e-визу примерно за 5 риалов; нужны копия ВНЖ, ID-карта и паспорт, действительный ещё 6 месяцев.',
      ],
    },
    en: {
      summary:
        'Citizens of around a hundred countries, including the EU, the UK, the US, Canada, Australia, Japan, Korea, Belarus, Kazakhstan, Uzbekistan and Armenia, enter visa-free for 14 days. Since July 2025, Russians can stay visa-free for up to 30 days per visit and 90 days a year under a bilateral agreement. Everyone else, including Indian citizens, needs a Royal Oman Police e-visa.',
      apply:
        'Apply for the e-visa only on evisa.rop.gov.om: a 30-day tourist visa costs about 20 OMR and usually arrives within one or two working days. Visa-free visitors need not apply, but at the border you may be asked for a return ticket, a hotel booking, health insurance and proof of funds. If you plan to stay longer than 14 days, get the e-visa from the start.',
      visaRun:
        'Short hops to the UAE and back technically give you a new 14 days, but frequent runs draw questions, and Russians are capped at 90 days per calendar year. The easiest options are a Muscat–Dubai flight or the Mwasalat bus to Dubai via Hatta.',
      hacks: [
        'Musandam (Khasab) is an Omani exclave reached from Ras Al Khaimah through the Tibat crossing: dhow cruises through the fjords are sold right in the UAE, and Oman’s visa-free rules apply there too.',
        'If you want more than 14 days, do not count on extending locally: recent reports say the visa-free stay cannot be extended. Get the 30-day e-visa from the start.',
        'GCC residents get a 30-day e-visa for about 5 OMR — a fraction of the regular tourist visa.',
        'The GCC unified tourist visa has still not launched as of October 2026, so Oman keeps its own entry rules.',
        'A car rented in the UAE can only cross into Oman with written permission from the rental company and Omani insurance; leaving the UAE by land costs 35 AED.',
      ],
      pitfalls: [
        'Visa-free entry is conditional: without a hotel booking, return ticket and insurance you can be turned back. Keep them on your phone and on paper.',
        'Sites selling the “free” 14 days or a marked-up e-visa are agencies. The only official portal is evisa.rop.gov.om.',
        'Your arrival day counts as day one. Overstays are fined on departure, and longer ones can lead to an entry ban.',
      ],
      passports: {
        RU: 'Since 18 July 2025, Russian citizens enter visa-free for up to 30 days per visit and no more than 90 days per calendar year. There are no direct flights from Moscow; people connect in Dubai, Doha or Istanbul. Russian bank cards do not work, so bring US dollars in cash.',
        IN: 'Indian citizens need an e-visa from evisa.rop.gov.om. GCC residents get it cheaper and faster.',
        TR: 'Turkish citizens enter visa-free for 30 days.',
        CN: 'The rules for Chinese, Brazilian, Georgian and Ukrainian citizens depend on the current Royal Oman Police list — check it before you travel.',
      },
      waivers: [
        'Nationals of the “second group” on the visa-free list (Morocco, for example) get 14 days visa-free only if they hold a valid visa or residence permit from the US, Canada, Australia, the UK, Schengen or Japan. Check which group your passport is in.',
        'GCC residents apply for a 30-day e-visa for about 5 OMR; you need a copy of your residence visa, your ID card and a passport valid for six more months.',
      ],
    },
    es: {
      summary:
        'Los ciudadanos de un centenar de países, entre ellos la UE, Reino Unido, EE. UU., Canadá, Australia, Japón, Corea, Bielorrusia, Kazajistán, Uzbekistán y Armenia, entran sin visado durante 14 días. Desde julio de 2025, los rusos pueden quedarse sin visado hasta 30 días por viaje y 90 al año gracias a un acuerdo bilateral. El resto, incluidos los ciudadanos de India, necesita el visado electrónico de la Policía Real de Omán.',
      apply:
        'Solicita el visado electrónico solo en evisa.rop.gov.om: el de turista de 30 días cuesta unos 20 OMR y suele llegar en uno o dos días laborables. Quien entra sin visado no tramita nada, pero en la frontera pueden pedirte billete de vuelta, reserva de hotel, seguro médico y medios económicos. Si vas a quedarte más de 14 días, pide el visado desde el principio.',
      visaRun:
        'Las escapadas cortas a los Emiratos y vuelta te dan en teoría 14 días nuevos, pero las salidas frecuentes despiertan preguntas, y los rusos tienen un tope de 90 días por año natural. Lo más fácil es un vuelo Mascate–Dubái o el autobús de Mwasalat a Dubái por Hatta.',
      hacks: [
        'Musandam (Jasab) es un exclave omaní al que se llega desde Ras al Jaima por el paso de Tibat: los cruceros en dhow por los fiordos se venden en los propios Emiratos, y allí también rigen las normas omaníes sin visado.',
        'Si quieres más de 14 días, no cuentes con prorrogar en el país: según informaciones recientes, la estancia sin visado no se prorroga. Pide desde el principio el visado electrónico de 30 días.',
        'Los residentes en países del CCG obtienen el visado electrónico de 30 días por unos 5 OMR, una fracción del precio del visado turístico normal.',
        'En octubre de 2026 el visado turístico unificado del CCG sigue sin ponerse en marcha, así que Omán mantiene sus propias normas de entrada.',
        'Un coche alquilado en los Emiratos solo puede entrar en Omán con permiso escrito de la empresa de alquiler y seguro omaní; salir de los Emiratos por tierra cuesta 35 AED.',
      ],
      pitfalls: [
        'La entrada sin visado es condicional: sin reserva de hotel, billete de vuelta y seguro pueden devolverte. Llévalos en el móvil y en papel.',
        'Las webs que venden los 14 días «gratis» o el visado electrónico con recargo son intermediarias. El único portal oficial es evisa.rop.gov.om.',
        'El día de llegada cuenta como el primero. El exceso de estancia se multa al salir y, si es largo, puede acarrear prohibición de entrada.',
      ],
      passports: {
        RU: 'Desde el 18 de julio de 2025 los ciudadanos rusos entran sin visado hasta 30 días por viaje y un máximo de 90 por año natural. No hay vuelos directos desde Moscú: se hace escala en Dubái, Doha o Estambul. Las tarjetas rusas no funcionan, así que lleva dólares en efectivo.',
        IN: 'Los ciudadanos indios necesitan el visado electrónico de evisa.rop.gov.om. Los residentes en el CCG lo consiguen más barato y rápido.',
        TR: 'Los ciudadanos turcos entran sin visado durante 30 días.',
        CN: 'Las normas para ciudadanos de China, Brasil, Georgia y Ucrania dependen de la lista vigente de la Policía Real de Omán: compruébala antes de viajar.',
      },
      waivers: [
        'Los nacionales del «segundo grupo» de la lista de exención (por ejemplo, Marruecos) solo tienen 14 días sin visado si tienen visado o residencia vigentes de EE. UU., Canadá, Australia, Reino Unido, Schengen o Japón. Comprueba en qué grupo está tu pasaporte.',
        'Los residentes en países del CCG solicitan un visado electrónico de 30 días por unos 5 OMR; necesitas copia del permiso de residencia, la tarjeta de identidad y un pasaporte con seis meses de validez.',
      ],
    },
    de: {
      summary:
        'Staatsangehörige von rund hundert Ländern, darunter die EU, Großbritannien, die USA, Kanada, Australien, Japan, Korea, Belarus, Kasachstan, Usbekistan und Armenien, reisen 14 Tage visumfrei ein. Russen dürfen seit Juli 2025 dank eines bilateralen Abkommens bis zu 30 Tage pro Reise und 90 Tage im Jahr ohne Visum bleiben. Alle anderen, auch Inder, brauchen ein E-Visum der Royal Oman Police.',
      apply:
        'Beantrage das E-Visum nur auf evisa.rop.gov.om: Ein 30-Tage-Touristenvisum kostet etwa 20 OMR und kommt meist nach ein bis zwei Werktagen. Visumfreie Gäste beantragen nichts, an der Grenze können aber Rückflugticket, Hotelbuchung, Krankenversicherung und ausreichende Mittel verlangt werden. Wer länger als 14 Tage bleiben will, nimmt gleich das E-Visum.',
      visaRun:
        'Kurze Abstecher in die VAE und zurück bringen formal neue 14 Tage, häufige Runs fallen aber auf, und für Russen gilt eine Obergrenze von 90 Tagen pro Kalenderjahr. Am einfachsten ist ein Flug Maskat–Dubai oder der Mwasalat-Bus über Hatta nach Dubai.',
      hacks: [
        'Musandam (Khasab) ist eine omanische Exklave, die man von Ras al-Chaima über den Übergang Tibat erreicht: Dhau-Touren durch die Fjorde werden direkt in den VAE verkauft, und auch dort gelten Omans visumfreie Regeln.',
        'Wer mehr als 14 Tage will, sollte nicht auf eine Verlängerung vor Ort setzen: Neueren Berichten zufolge ist der visumfreie Aufenthalt nicht verlängerbar. Nimm gleich das 30-Tage-E-Visum.',
        'Einwohner der GCC-Staaten bekommen ein 30-Tage-E-Visum für etwa 5 OMR – ein Bruchteil des normalen Touristenvisums.',
        'Das einheitliche GCC-Touristenvisum ist im Oktober 2026 noch nicht gestartet, Oman behält also seine eigenen Einreiseregeln.',
        'Ein in den VAE gemietetes Auto darf nur mit schriftlicher Erlaubnis des Vermieters und omanischer Versicherung nach Oman; die Ausreise aus den VAE über Land kostet 35 AED.',
      ],
      pitfalls: [
        'Die visumfreie Einreise ist an Bedingungen geknüpft: Ohne Hotelbuchung, Rückflugticket und Versicherung kannst du zurückgewiesen werden. Hab alles auf dem Handy und auf Papier.',
        'Seiten, die die „kostenlosen“ 14 Tage oder ein E-Visum mit Aufschlag verkaufen, sind Vermittler. Das einzige offizielle Portal ist evisa.rop.gov.om.',
        'Der Ankunftstag zählt als erster Tag. Überziehungen werden bei der Ausreise mit Bußgeld belegt, längere können eine Einreisesperre nach sich ziehen.',
      ],
      passports: {
        RU: 'Seit dem 18. Juli 2025 reisen russische Staatsangehörige bis zu 30 Tage pro Reise und höchstens 90 Tage pro Kalenderjahr visumfrei ein. Direktflüge aus Moskau gibt es nicht, man steigt in Dubai, Doha oder Istanbul um. Russische Bankkarten funktionieren nicht – nimm US-Dollar in bar mit.',
        IN: 'Indische Staatsangehörige brauchen ein E-Visum von evisa.rop.gov.om. Einwohner der GCC-Staaten bekommen es günstiger und schneller.',
        TR: 'Türkische Staatsangehörige reisen 30 Tage visumfrei ein.',
        CN: 'Die Regeln für Staatsangehörige Chinas, Brasiliens, Georgiens und der Ukraine hängen von der aktuellen Liste der Royal Oman Police ab – prüf sie vor der Reise.',
      },
      waivers: [
        'Staatsangehörige der „zweiten Gruppe“ der Befreiungsliste (etwa Marokko) bekommen die 14 Tage nur mit gültigem Visum oder Aufenthaltstitel der USA, Kanadas, Australiens, Großbritanniens, des Schengenraums oder Japans. Prüf, in welcher Gruppe dein Pass steht.',
        'Einwohner der GCC-Staaten beantragen ein 30-Tage-E-Visum für etwa 5 OMR; nötig sind eine Kopie des Aufenthaltsvisums, die ID-Karte und ein noch sechs Monate gültiger Pass.',
      ],
    },
    fr: {
      summary:
        'Les ressortissants d’une centaine de pays, dont l’UE, le Royaume-Uni, les États-Unis, le Canada, l’Australie, le Japon, la Corée, le Bélarus, le Kazakhstan, l’Ouzbékistan et l’Arménie, entrent sans visa pour 14 jours. Depuis juillet 2025, un accord bilatéral permet aux Russes de rester sans visa jusqu’à 30 jours par séjour et 90 jours par an. Les autres, dont les Indiens, ont besoin de l’e-visa de la Police royale d’Oman.',
      apply:
        'Demandez l’e-visa uniquement sur evisa.rop.gov.om : le visa touristique de 30 jours coûte environ 20 OMR et arrive en général en un ou deux jours ouvrés. Les visiteurs exemptés n’ont rien à demander, mais la frontière peut exiger billet retour, réservation d’hôtel, assurance santé et justificatifs de ressources. Au-delà de 14 jours, prenez l’e-visa dès le départ.',
      visaRun:
        'Un aller-retour rapide aux Émirats donne en théorie 14 nouveaux jours, mais les sorties fréquentes attirent l’attention, et les Russes sont plafonnés à 90 jours par année civile. Le plus simple : un vol Mascate–Dubaï ou le bus Mwasalat pour Dubaï via Hatta.',
      hacks: [
        'Le Musandam (Khasab) est une enclave omanaise accessible depuis Ras el Khaïmah par le poste de Tibat : les croisières en boutre dans les fjords se vendent directement aux Émirats, et les règles omanaises d’exemption s’y appliquent aussi.',
        'Pour plus de 14 jours, ne comptez pas sur une prolongation sur place : selon des informations récentes, le séjour sans visa n’est pas prolongeable. Prenez d’emblée l’e-visa de 30 jours.',
        'Les résidents des pays du CCG obtiennent un e-visa de 30 jours pour environ 5 OMR, une fraction du prix du visa touristique classique.',
        'Le visa touristique unifié du CCG n’est toujours pas lancé en octobre 2026 : Oman garde ses propres règles d’entrée.',
        'Une voiture louée aux Émirats ne peut entrer à Oman qu’avec l’autorisation écrite du loueur et une assurance omanaise ; quitter les Émirats par la route coûte 35 AED.',
      ],
      pitfalls: [
        'L’entrée sans visa est conditionnelle : sans réservation d’hôtel, billet retour et assurance, vous pouvez être refoulé. Gardez-les sur votre téléphone et sur papier.',
        'Les sites qui vendent les 14 jours « gratuits » ou un e-visa majoré sont des intermédiaires. Le seul portail officiel est evisa.rop.gov.om.',
        'Le jour d’arrivée compte comme le premier. Les dépassements sont sanctionnés d’une amende à la sortie, et les plus longs peuvent entraîner une interdiction d’entrée.',
      ],
      passports: {
        RU: 'Depuis le 18 juillet 2025, les ressortissants russes entrent sans visa jusqu’à 30 jours par séjour et 90 jours maximum par année civile. Pas de vol direct depuis Moscou : on passe par Dubaï, Doha ou Istanbul. Les cartes bancaires russes ne fonctionnent pas, emportez des dollars en espèces.',
        IN: 'Les ressortissants indiens ont besoin d’un e-visa sur evisa.rop.gov.om. Les résidents du CCG l’obtiennent moins cher et plus vite.',
        TR: 'Les ressortissants turcs entrent sans visa pour 30 jours.',
        CN: 'Les règles pour les ressortissants chinois, brésiliens, géorgiens et ukrainiens dépendent de la liste en vigueur de la Police royale d’Oman : vérifiez-la avant de partir.',
      },
      waivers: [
        'Les ressortissants du « second groupe » de la liste d’exemption (le Maroc, par exemple) n’ont les 14 jours sans visa qu’avec un visa ou titre de séjour valide des États-Unis, du Canada, d’Australie, du Royaume-Uni, de l’espace Schengen ou du Japon. Vérifiez le groupe de votre passeport.',
        'Les résidents des pays du CCG demandent un e-visa de 30 jours pour environ 5 OMR ; il faut une copie du titre de séjour, la carte d’identité de résident et un passeport valable encore six mois.',
      ],
    },
    it: {
      summary:
        'I cittadini di circa cento paesi, tra cui UE, Regno Unito, Stati Uniti, Canada, Australia, Giappone, Corea, Bielorussia, Kazakistan, Uzbekistan e Armenia, entrano senza visto per 14 giorni. Da luglio 2025 i russi possono restare senza visto fino a 30 giorni per viaggio e 90 all’anno grazie a un accordo bilaterale. Gli altri, compresi gli indiani, hanno bisogno del visto elettronico della Polizia Reale dell’Oman.',
      apply:
        'Richiedi il visto elettronico solo su evisa.rop.gov.om: quello turistico di 30 giorni costa circa 20 OMR e arriva di solito in uno o due giorni lavorativi. Chi entra senza visto non deve richiedere nulla, ma alla frontiera possono chiedere biglietto di ritorno, prenotazione dell’hotel, assicurazione sanitaria e mezzi sufficienti. Se resti più di 14 giorni, prendi subito il visto elettronico.',
      visaRun:
        'Le brevi uscite negli Emirati e ritorno danno in teoria 14 giorni nuovi, ma quelle frequenti attirano domande, e per i russi vale il tetto di 90 giorni per anno solare. Le opzioni più semplici sono un volo Mascate–Dubai o l’autobus Mwasalat per Dubai via Hatta.',
      hacks: [
        'Il Musandam (Khasab) è un’exclave omanita raggiungibile da Ras al-Khaimah attraverso il valico di Tibat: le crociere in dhow tra i fiordi si comprano direttamente negli Emirati, e anche lì valgono le regole omanite senza visto.',
        'Se vuoi più di 14 giorni, non contare su una proroga sul posto: secondo notizie recenti il soggiorno senza visto non si proroga. Prendi subito il visto elettronico di 30 giorni.',
        'I residenti nei paesi del CCG ottengono il visto elettronico di 30 giorni per circa 5 OMR, una frazione del visto turistico normale.',
        'A ottobre 2026 il visto turistico unico del CCG non è ancora partito, quindi l’Oman mantiene le proprie regole d’ingresso.',
        'Un’auto noleggiata negli Emirati può entrare in Oman solo con autorizzazione scritta del noleggiatore e assicurazione omanita; uscire dagli Emirati via terra costa 35 AED.',
      ],
      pitfalls: [
        'L’ingresso senza visto è condizionato: senza prenotazione dell’hotel, biglietto di ritorno e assicurazione possono respingerti. Tienili sul telefono e su carta.',
        'I siti che vendono i 14 giorni «gratis» o il visto elettronico con ricarico sono intermediari. L’unico portale ufficiale è evisa.rop.gov.om.',
        'Il giorno di arrivo conta come il primo. Chi supera il limite paga una multa all’uscita e, nei casi lunghi, rischia il divieto d’ingresso.',
      ],
      passports: {
        RU: 'Dal 18 luglio 2025 i cittadini russi entrano senza visto fino a 30 giorni per viaggio e al massimo 90 per anno solare. Non ci sono voli diretti da Mosca: si fa scalo a Dubai, Doha o Istanbul. Le carte bancarie russe non funzionano, porta dollari in contanti.',
        IN: 'I cittadini indiani hanno bisogno del visto elettronico su evisa.rop.gov.om. I residenti nel CCG lo ottengono a meno e più in fretta.',
        TR: 'I cittadini turchi entrano senza visto per 30 giorni.',
        CN: 'Le regole per i cittadini di Cina, Brasile, Georgia e Ucraina dipendono dall’elenco aggiornato della Polizia Reale dell’Oman: controllalo prima di partire.',
      },
      waivers: [
        'I cittadini del «secondo gruppo» dell’elenco di esenzione (per esempio il Marocco) hanno i 14 giorni senza visto solo con un visto o permesso di soggiorno valido di Stati Uniti, Canada, Australia, Regno Unito, area Schengen o Giappone. Verifica in quale gruppo è il tuo passaporto.',
        'I residenti nei paesi del CCG richiedono un visto elettronico di 30 giorni per circa 5 OMR; servono copia del permesso di soggiorno, la carta d’identità e un passaporto valido ancora sei mesi.',
      ],
    },
  },
};

export default guide;
