import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'AR',
  checked: '2026-10',
  links: { immigration: 'https://www.argentina.gob.ar/interior/migraciones' },
  docs: ['returnTicket', 'insurance'],
  passportMonths: 0,
  extend: { days: 90 },
  visaRun: 'yes',
  borders: [
    { name: 'Buenos Aires → Colonia del Sacramento (ferry)', to: 'UY', lat: -34.592, lng: -58.3705 },
    { name: 'Puerto Iguazú – Foz do Iguaçu (Tancredo Neves Bridge)', to: 'BR', lat: -25.5935, lng: -54.5915 },
    { name: 'Paso Cristo Redentor – Los Libertadores', to: 'CL', lat: -32.825, lng: -70.075 },
  ],
  nomad: { name: 'Visa de Nómade Digital', months: 6 },
  waivers: [
    { holds: ['visaUS', 'resUS'], passports: ['IN'], status: 'free', days: 90 },
    { holds: ['visaUS'], passports: ['CN'], status: 'free', days: 30 },
  ],
  text: {
    ru: {
      summary:
        'Граждане России, Беларуси, Казахстана, Украины, Армении, Грузии, США, ЕС, Великобритании, Канады, Австралии, Японии и почти всей Латинской Америки въезжают без визы на 90 дней. Гражданам Индии и Китая с действующей американской визой с 2025 года виза Аргентины не нужна. Остальным — консульская виза.',
      apply:
        'Безвизовым туристам нужны паспорт, действительный на весь срок поездки, обратный или выездной билет и — с 2025 года по закону — медицинская страховка. Штамп или электронная отметка о въезде даёт 90 дней. Консульскую визу оформляют в посольстве Аргентины заранее.',
      extend:
        'Пребывание можно один раз продлить на 90 дней в Национальной миграционной дирекции (DNM) до окончания первых 90 дней: подача онлайн или в офисе, сбор оплачивается в песо. Многие вместо этого просто делают визаран — так часто дешевле.',
      visaRun:
        'Визаран работает: после выезда 90 дней начинаются заново. Самый популярный вариант — паром из Буэнос-Айреса в Колонию-дель-Сакраменто (Уругвай, около часа), можно туда и обратно за день. Также подходят мост Пуэрто-Игуасу — Фос-ду-Игуасу в Бразилию и перевал Кристо-Редентор в Чили. Частые «раны» подряд вызывают вопросы, так что держите обратный билет.',
      nomad:
        'Виза цифрового кочевника даёт 180 дней с возможностью продления ещё на 180. Порог дохода официально не установлен, но нужно подтвердить удалённую работу на иностранного работодателя или клиентов и средства на жизнь. Подача онлайн через систему DNM.',
      hacks: [
        'Паром Buquebus или Colonia Express в Колонию-дель-Сакраменто — самый приятный визаран в Южной Америке: билеты дешевле при покупке заранее, а пограничный контроль обеих стран проходит прямо в порту Буэнос-Айреса.',
        'После валютной реформы 2025 года иностранные карты получают почти рыночный курс — возить много наличных долларов уже не обязательно.',
        'В Игуасу аргентинскую и бразильскую стороны водопадов можно посетить за один день; для граждан стран, которым нужна бразильская e-виза (США, Канада, Австралия), оформите её заранее.',
        'Граждане стран Mercosur и Андского сообщества въезжают по удостоверению личности.',
      ],
      pitfalls: [
        'Никакого «reciprocity fee» и туристической e-визы для безвизовых стран больше нет — сайты, которые их продают, мошеннические.',
        'Указ 2025 года обязал иностранцев иметь медицинскую страховку, а государственные больницы вправе выставлять туристам счёт. Покупайте полис, даже если на границе его не спросили.',
        'Беременных туристок и тех, кто многократно въезжает подряд, расспрашивают о целях поездки особенно подробно.',
        'Просрочку штрафуют при выезде; крупная просрочка может обернуться запретом на въезд.',
      ],
      waivers: [
        'С 28 августа 2025 года граждане Индии с действующей визой США (B1/B2, B2, J, O, P, E или H-1B) въезжают на 90 дней для туризма без визы Аргентины и без электронной авторизации AVE. Консульство в Мумбаи упоминает и грин-карту, посольство в Дели — нет; виза должна оставаться действительной примерно 90 дней после въезда.',
        'С июля 2025 года граждане Китая с обычным паспортом и действующей визой США той же категории (туризм или бизнес) въезжают без визы на 30 дней с возможностью однократного продления. Сменить статус внутри страны нельзя.',
      ],
      passports: {
        RU: 'Россиянам — 90 дней без визы. Прямых рейсов нет — летают через Стамбул, Дубай, Доху или Аддис-Абебу. Российские карты не работают — берите доллары или евро наличными, чистые и без надписей.',
        IN: 'Индийцам виза не нужна при действующей визе США (с 2025 года); иначе консульская виза Аргентины.',
        CN: 'Граждане Китая с действующей визой США въезжают без визы на 30 дней; остальным нужна консульская виза.',
        US: 'Американцы въезжают на 90 дней без визы; сбор reciprocity fee отменён ещё в 2016 году.',
      },
    },
    en: {
      summary:
        'Citizens of Russia, Belarus, Kazakhstan, Ukraine, Armenia, Georgia, the US, the EU, the UK, Canada, Australia, Japan and nearly all of Latin America enter visa-free for 90 days. Since 2025, Indian and Chinese citizens holding a valid US visa no longer need an Argentine visa. Everyone else needs a consular visa.',
      apply:
        'Visa-exempt travellers need a passport valid for the whole trip, a return or onward ticket and — by law since 2025 — health insurance. The entry stamp or electronic record gives you 90 days. Consular visas are obtained in advance at an Argentine embassy.',
      extend:
        'You can extend once by 90 days with the National Migration Directorate (DNM) before your first 90 days run out: apply online or at an office and pay the fee in pesos. Many people simply do a border run instead — it is often cheaper.',
      visaRun:
        'Visa runs work: the 90 days start over after you leave. The favourite is the ferry from Buenos Aires to Colonia del Sacramento (Uruguay, about an hour), easily done as a day trip. The Puerto Iguazú – Foz do Iguaçu bridge to Brazil and the Cristo Redentor pass to Chile work too. Back-to-back runs draw questions, so keep an onward ticket.',
      nomad:
        'The digital-nomad visa gives 180 days, renewable for another 180. There is no official income threshold, but you must prove remote work for foreign employers or clients and the means to live. Apply online through the DNM system.',
      hacks: [
        'The Buquebus or Colonia Express ferry to Colonia del Sacramento is South America’s most pleasant visa run: tickets are cheaper booked ahead, and both countries’ border checks happen right at the Buenos Aires port.',
        'Since the 2025 currency reform, foreign cards get close to the market rate — hauling stacks of US dollars is no longer necessary.',
        'At Iguazú you can see the Argentine and Brazilian sides of the falls in one day; if your passport needs Brazil’s e-visa (US, Canada, Australia), get it in advance.',
        'Citizens of Mercosur and Andean Community countries can enter with a national ID card.',
      ],
      pitfalls: [
        'There is no longer any “reciprocity fee” or tourist e-visa for visa-exempt nationalities — sites selling them are scams.',
        'A 2025 decree made health insurance compulsory for foreigners and lets public hospitals bill tourists. Buy a policy even if nobody asks for it at the border.',
        'Pregnant travellers and people who re-enter repeatedly in a row get detailed questions about their purpose.',
        'Overstays are fined on departure; a long one can lead to an entry ban.',
      ],
      waivers: [
        'Since 28 August 2025, Indian citizens holding a valid US visa (B1/B2, B2, J, O, P, E or H-1B) enter for 90 days of tourism without an Argentine visa or the AVE electronic authorisation. The Mumbai consulate also lists the green card, the Delhi embassy does not; the visa should stay valid for about 90 days after entry.',
        'Since July 2025, Chinese citizens with an ordinary passport and a valid US visa of the same category (tourism or business) enter visa-free for 30 days, extendable once. Changing status inside the country is not allowed.',
      ],
      passports: {
        RU: 'Russians get 90 days visa-free. There are no direct flights — people fly via Istanbul, Dubai, Doha or Addis Ababa. Russian cards do not work, so bring clean, unmarked US dollars or euros in cash.',
        IN: 'Indians need no visa with a valid US visa (since 2025); otherwise an Argentine consular visa is required.',
        CN: 'Chinese citizens with a valid US visa enter visa-free for 30 days; others need a consular visa.',
        US: 'Americans enter visa-free for 90 days; the reciprocity fee was abolished back in 2016.',
      },
    },
    es: {
      summary:
        'Los ciudadanos de Rusia, Bielorrusia, Kazajistán, Ucrania, Armenia, Georgia, EE. UU., la UE, Reino Unido, Canadá, Australia, Japón y casi toda Latinoamérica entran sin visa por 90 días. Desde 2025, los ciudadanos de India y China con visa estadounidense vigente ya no necesitan visa argentina. El resto necesita visa consular.',
      apply:
        'Si no necesitas visa, te bastan un pasaporte vigente durante todo el viaje, un pasaje de regreso o salida y —por ley desde 2025— un seguro médico. El sello o el registro electrónico de entrada te da 90 días. Las visas consulares se tramitan antes en una embajada argentina.',
      extend:
        'Puedes prorrogar una vez por 90 días ante la Dirección Nacional de Migraciones (DNM) antes de que terminen los primeros 90: se pide en línea o en una oficina y la tasa se paga en pesos. Muchos simplemente salen y vuelven a entrar, que suele salir más barato.',
      visaRun:
        'Salir y volver funciona: los 90 días empiezan de nuevo al salir. Lo más popular es el ferry de Buenos Aires a Colonia del Sacramento (Uruguay, una hora aproximadamente), fácil de hacer en el día. También sirven el puente Puerto Iguazú – Foz do Iguaçu hacia Brasil y el paso Cristo Redentor hacia Chile. Varias salidas seguidas despiertan preguntas, así que lleva pasaje de salida.',
      nomad:
        'La visa de nómade digital da 180 días, renovables por otros 180. No hay umbral de ingresos oficial, pero tienes que demostrar trabajo remoto para empleadores o clientes extranjeros y medios de vida. Se tramita en línea en el sistema de la DNM.',
      hacks: [
        'El ferry de Buquebus o Colonia Express a Colonia del Sacramento es la salida migratoria más agradable de Sudamérica: los pasajes son más baratos con antelación y los controles de ambos países se hacen en el mismo puerto de Buenos Aires.',
        'Desde la reforma cambiaria de 2025, las tarjetas extranjeras obtienen un tipo de cambio cercano al de mercado: ya no hace falta cargar fajos de dólares.',
        'En Iguazú puedes ver los lados argentino y brasileño de las cataratas en un día; si tu pasaporte necesita la visa electrónica de Brasil (EE. UU., Canadá, Australia), tramítala antes.',
        'Los ciudadanos del Mercosur y de la Comunidad Andina pueden entrar con su documento de identidad.',
      ],
      pitfalls: [
        'Ya no existe ninguna «tasa de reciprocidad» ni visa electrónica de turismo para nacionalidades exentas: las webs que las venden son estafas.',
        'Un decreto de 2025 hizo obligatorio el seguro médico para extranjeros y permite a los hospitales públicos cobrar a los turistas. Contrata una póliza aunque nadie te la pida en la frontera.',
        'A las viajeras embarazadas y a quienes reingresan varias veces seguidas les preguntan con detalle por el motivo del viaje.',
        'El exceso de permanencia se multa al salir; uno largo puede acarrear prohibición de entrada.',
      ],
      waivers: [
        'Desde el 28 de agosto de 2025, los ciudadanos indios con visa estadounidense vigente (B1/B2, B2, J, O, P, E o H-1B) entran por 90 días de turismo sin visa argentina ni autorización electrónica AVE. El consulado en Bombay menciona también la green card y la embajada en Delhi no; la visa debería seguir vigente unos 90 días tras la entrada.',
        'Desde julio de 2025, los ciudadanos chinos con pasaporte ordinario y visa estadounidense vigente de la misma categoría (turismo o negocios) entran sin visa por 30 días, prorrogables una vez. No se puede cambiar de categoría dentro del país.',
      ],
      passports: {
        RU: 'Los rusos tienen 90 días sin visa. No hay vuelos directos: se vuela vía Estambul, Dubái, Doha o Adís Abeba. Las tarjetas rusas no funcionan, así que lleva dólares o euros en efectivo, limpios y sin marcas.',
        IN: 'Los indios no necesitan visa si tienen visa estadounidense vigente (desde 2025); si no, necesitan visa consular argentina.',
        CN: 'Los ciudadanos chinos con visa estadounidense vigente entran sin visa por 30 días; el resto necesita visa consular.',
        US: 'Los estadounidenses entran sin visa por 90 días; la tasa de reciprocidad se eliminó ya en 2016.',
      },
    },
    de: {
      summary:
        'Staatsangehörige Russlands, Belarus’, Kasachstans, der Ukraine, Armeniens, Georgiens, der USA, der EU, Großbritanniens, Kanadas, Australiens, Japans und fast ganz Lateinamerikas reisen 90 Tage visumfrei ein. Seit 2025 brauchen Inder und Chinesen mit gültigem US-Visum kein argentinisches Visum mehr. Alle anderen benötigen ein Konsularvisum.',
      apply:
        'Visumfreie Reisende brauchen einen für die ganze Reise gültigen Pass, ein Rück- oder Weiterreiseticket und – seit 2025 gesetzlich – eine Krankenversicherung. Der Einreisestempel oder -eintrag gibt dir 90 Tage. Konsularvisa holst du vorab bei einer argentinischen Botschaft.',
      extend:
        'Du kannst einmal um 90 Tage bei der Nationalen Migrationsdirektion (DNM) verlängern, bevor die ersten 90 Tage ablaufen: online oder im Büro beantragen und die Gebühr in Pesos zahlen. Viele machen stattdessen einfach einen Grenz-Run – oft günstiger.',
      visaRun:
        'Visa-Runs funktionieren: Nach der Ausreise beginnen die 90 Tage neu. Der Klassiker ist die Fähre von Buenos Aires nach Colonia del Sacramento (Uruguay, etwa eine Stunde), problemlos als Tagesausflug. Auch die Brücke Puerto Iguazú – Foz do Iguaçu nach Brasilien und der Pass Cristo Redentor nach Chile gehen. Runs direkt hintereinander werfen Fragen auf, halte also ein Weiterreiseticket bereit.',
      nomad:
        'Das Visum für digitale Nomaden gilt 180 Tage und lässt sich um weitere 180 verlängern. Eine offizielle Einkommensgrenze gibt es nicht, doch du musst Remote-Arbeit für ausländische Arbeitgeber oder Kunden sowie ausreichende Mittel nachweisen. Beantragt wird online über das DNM-System.',
      hacks: [
        'Die Fähre von Buquebus oder Colonia Express nach Colonia del Sacramento ist der angenehmste Visa-Run Südamerikas: Tickets sind im Voraus günstiger, und die Grenzkontrollen beider Länder finden direkt im Hafen von Buenos Aires statt.',
        'Seit der Währungsreform 2025 bekommen ausländische Karten nahezu den Marktkurs – stapelweise US-Dollar mitzunehmen ist nicht mehr nötig.',
        'In Iguazú kannst du die argentinische und die brasilianische Seite der Fälle an einem Tag sehen; braucht dein Pass Brasiliens E-Visum (USA, Kanada, Australien), beantrage es vorher.',
        'Bürger der Mercosur-Staaten und der Andengemeinschaft können mit dem Personalausweis einreisen.',
      ],
      pitfalls: [
        'Eine „Reciprocity Fee“ oder ein Touristen-E-Visum für visumfreie Nationalitäten gibt es nicht mehr – Seiten, die so etwas verkaufen, sind Betrug.',
        'Ein Dekret von 2025 macht eine Krankenversicherung für Ausländer zur Pflicht und erlaubt staatlichen Kliniken, Touristen Rechnungen zu stellen. Schließ eine Police ab, auch wenn an der Grenze niemand danach fragt.',
        'Schwangere Reisende und wer mehrmals hintereinander einreist, werden ausführlich nach dem Reisezweck gefragt.',
        'Überziehungen werden bei der Ausreise mit Bußgeld belegt; eine lange kann eine Einreisesperre nach sich ziehen.',
      ],
      waivers: [
        'Seit dem 28. August 2025 reisen indische Staatsangehörige mit gültigem US-Visum (B1/B2, B2, J, O, P, E oder H-1B) für 90 Tage Tourismus ohne argentinisches Visum und ohne die elektronische Genehmigung AVE ein. Das Konsulat in Mumbai nennt auch die Green Card, die Botschaft in Delhi nicht; das Visum sollte nach der Einreise noch etwa 90 Tage gültig sein.',
        'Seit Juli 2025 reisen chinesische Staatsangehörige mit gewöhnlichem Pass und gültigem US-Visum derselben Kategorie (Tourismus oder Geschäfte) 30 Tage visumfrei ein, einmal verlängerbar. Ein Statuswechsel im Land ist nicht möglich.',
      ],
      passports: {
        RU: 'Russen bekommen 90 Tage visumfrei. Direktflüge gibt es nicht – geflogen wird über Istanbul, Dubai, Doha oder Addis Abeba. Russische Karten funktionieren nicht, nimm also saubere, unbeschriftete US-Dollar oder Euro in bar mit.',
        IN: 'Inder brauchen mit gültigem US-Visum kein Visum (seit 2025); sonst ist ein argentinisches Konsularvisum nötig.',
        CN: 'Chinesische Staatsangehörige mit gültigem US-Visum reisen 30 Tage visumfrei ein; alle anderen brauchen ein Konsularvisum.',
        US: 'US-Bürger reisen 90 Tage visumfrei ein; die Reciprocity Fee wurde schon 2016 abgeschafft.',
      },
    },
    fr: {
      summary:
        'Les ressortissants de Russie, du Bélarus, du Kazakhstan, d’Ukraine, d’Arménie, de Géorgie, des États-Unis, de l’UE, du Royaume-Uni, du Canada, de l’Australie, du Japon et de presque toute l’Amérique latine entrent sans visa pour 90 jours. Depuis 2025, les citoyens indiens et chinois titulaires d’un visa américain valide n’ont plus besoin de visa argentin. Les autres doivent obtenir un visa consulaire.',
      apply:
        'Les voyageurs exemptés doivent présenter un passeport valable tout le voyage, un billet retour ou de continuation et — obligation légale depuis 2025 — une assurance santé. Le tampon ou l’enregistrement électronique d’entrée vous donne 90 jours. Les visas consulaires s’obtiennent à l’avance auprès d’une ambassade d’Argentine.',
      extend:
        'Vous pouvez prolonger une fois de 90 jours auprès de la Direction nationale des migrations (DNM) avant la fin des 90 premiers jours : demande en ligne ou au guichet, frais payés en pesos. Beaucoup préfèrent simplement un visa run, souvent moins cher.',
      visaRun:
        'Le visa run fonctionne : les 90 jours repartent à zéro après une sortie. Le grand classique est le ferry de Buenos Aires à Colonia del Sacramento (Uruguay, environ une heure), faisable dans la journée. Le pont Puerto Iguazú – Foz do Iguaçu vers le Brésil et le col Cristo Redentor vers le Chili conviennent aussi. Des runs à la chaîne suscitent des questions : gardez un billet de sortie.',
      nomad:
        'Le visa de nomade numérique donne 180 jours, renouvelables une fois. Aucun seuil de revenus officiel, mais il faut prouver un travail à distance pour des employeurs ou clients étrangers et des moyens de subsistance. Demande en ligne via le système de la DNM.',
      hacks: [
        'Le ferry Buquebus ou Colonia Express pour Colonia del Sacramento est le visa run le plus agréable d’Amérique du Sud : billets moins chers réservés à l’avance, et les contrôles des deux pays se font au port même de Buenos Aires.',
        'Depuis la réforme monétaire de 2025, les cartes étrangères obtiennent un taux proche du marché : inutile de transporter des liasses de dollars.',
        'À Iguazú, on peut voir les côtés argentin et brésilien des chutes dans la même journée ; si votre passeport exige l’e-visa brésilien (États-Unis, Canada, Australie), obtenez-le à l’avance.',
        'Les citoyens du Mercosur et de la Communauté andine peuvent entrer avec leur carte d’identité.',
      ],
      pitfalls: [
        'Il n’existe plus de « reciprocity fee » ni d’e-visa touristique pour les nationalités exemptées : les sites qui en vendent sont des arnaques.',
        'Un décret de 2025 a rendu l’assurance santé obligatoire pour les étrangers et autorise les hôpitaux publics à facturer les touristes. Souscrivez une police même si personne ne la demande à la frontière.',
        'Les voyageuses enceintes et les personnes qui entrent plusieurs fois de suite sont interrogées en détail sur le motif du séjour.',
        'Un dépassement de séjour est sanctionné à la sortie ; un long dépassement peut entraîner une interdiction d’entrée.',
      ],
      waivers: [
        'Depuis le 28 août 2025, les citoyens indiens titulaires d’un visa américain valide (B1/B2, B2, J, O, P, E ou H-1B) entrent pour 90 jours de tourisme sans visa argentin ni autorisation électronique AVE. Le consulat de Mumbai cite aussi la green card, l’ambassade de Delhi non ; le visa doit rester valable environ 90 jours après l’entrée.',
        'Depuis juillet 2025, les citoyens chinois munis d’un passeport ordinaire et d’un visa américain valide de même catégorie (tourisme ou affaires) entrent sans visa pour 30 jours, prolongeables une fois. Aucun changement de statut n’est possible sur place.',
      ],
      passports: {
        RU: 'Les Russes ont 90 jours sans visa. Pas de vols directs : on passe par Istanbul, Dubaï, Doha ou Addis-Abeba. Les cartes russes ne fonctionnent pas : emportez des dollars ou des euros en espèces, propres et sans inscriptions.',
        IN: 'Les Indiens n’ont pas besoin de visa avec un visa américain valide (depuis 2025) ; sinon, un visa consulaire argentin est requis.',
        CN: 'Les citoyens chinois titulaires d’un visa américain valide entrent sans visa pour 30 jours ; les autres ont besoin d’un visa consulaire.',
        US: 'Les Américains entrent sans visa pour 90 jours ; la reciprocity fee a été supprimée dès 2016.',
      },
    },
    it: {
      summary:
        'I cittadini di Russia, Bielorussia, Kazakistan, Ucraina, Armenia, Georgia, Stati Uniti, UE, Regno Unito, Canada, Australia, Giappone e quasi tutta l’America Latina entrano senza visto per 90 giorni. Dal 2025 i cittadini di India e Cina con un visto statunitense valido non hanno più bisogno del visto argentino. Tutti gli altri devono ottenere un visto consolare.',
      apply:
        'Chi è esente ha bisogno di un passaporto valido per tutto il viaggio, di un biglietto di ritorno o di proseguimento e — per legge dal 2025 — di un’assicurazione sanitaria. Il timbro o la registrazione elettronica d’ingresso ti dà 90 giorni. I visti consolari si ottengono prima in un’ambasciata argentina.',
      extend:
        'Puoi prorogare una volta di 90 giorni presso la Direzione nazionale delle migrazioni (DNM) prima che scadano i primi 90: domanda online o allo sportello, con tassa pagata in pesos. Molti invece fanno semplicemente un visa run, spesso più economico.',
      visaRun:
        'Il visa run funziona: dopo l’uscita i 90 giorni ripartono. Il più amato è il traghetto da Buenos Aires a Colonia del Sacramento (Uruguay, circa un’ora), facile da fare in giornata. Vanno bene anche il ponte Puerto Iguazú – Foz do Iguaçu verso il Brasile e il passo Cristo Redentor verso il Cile. Più run consecutivi destano domande, quindi tieni un biglietto di uscita.',
      nomad:
        'Il visto per nomadi digitali dà 180 giorni, rinnovabili per altri 180. Non c’è una soglia di reddito ufficiale, ma devi dimostrare lavoro da remoto per datori di lavoro o clienti esteri e mezzi di sostentamento. Si richiede online tramite il sistema della DNM.',
      hacks: [
        'Il traghetto Buquebus o Colonia Express per Colonia del Sacramento è il visa run più piacevole del Sud America: i biglietti costano meno se presi in anticipo e i controlli di entrambi i paesi si fanno nel porto stesso di Buenos Aires.',
        'Dalla riforma valutaria del 2025 le carte estere ottengono un cambio vicino a quello di mercato: non serve più portare mazzette di dollari.',
        'A Iguazú puoi vedere il lato argentino e quello brasiliano delle cascate in un solo giorno; se il tuo passaporto richiede il visto elettronico brasiliano (Stati Uniti, Canada, Australia), ottienilo prima.',
        'I cittadini del Mercosur e della Comunità Andina possono entrare con la carta d’identità.',
      ],
      pitfalls: [
        'Non esiste più alcuna «reciprocity fee» né visto elettronico turistico per le nazionalità esenti: i siti che li vendono sono truffe.',
        'Un decreto del 2025 ha reso obbligatoria l’assicurazione sanitaria per gli stranieri e consente agli ospedali pubblici di far pagare i turisti. Stipula una polizza anche se alla frontiera nessuno la chiede.',
        'Le viaggiatrici in gravidanza e chi rientra più volte di seguito vengono interrogati a fondo sul motivo del viaggio.',
        'Lo sforamento si multa all’uscita; uno lungo può portare a un divieto d’ingresso.',
      ],
      waivers: [
        'Dal 28 agosto 2025 i cittadini indiani con un visto statunitense valido (B1/B2, B2, J, O, P, E o H-1B) entrano per 90 giorni di turismo senza visto argentino né autorizzazione elettronica AVE. Il consolato di Mumbai cita anche la green card, l’ambasciata di Delhi no; il visto dovrebbe restare valido circa 90 giorni dopo l’ingresso.',
        'Da luglio 2025 i cittadini cinesi con passaporto ordinario e un visto statunitense valido della stessa categoria (turismo o affari) entrano senza visto per 30 giorni, prorogabili una volta. Non è possibile cambiare status all’interno del paese.',
      ],
      passports: {
        RU: 'I russi hanno 90 giorni senza visto. Non ci sono voli diretti: si vola via Istanbul, Dubai, Doha o Addis Abeba. Le carte russe non funzionano, quindi porta dollari o euro in contanti, puliti e senza scritte.',
        IN: 'Gli indiani non hanno bisogno del visto se hanno un visto statunitense valido (dal 2025); altrimenti serve il visto consolare argentino.',
        CN: 'I cittadini cinesi con un visto statunitense valido entrano senza visto per 30 giorni; gli altri hanno bisogno del visto consolare.',
        US: 'Gli statunitensi entrano senza visto per 90 giorni; la reciprocity fee è stata abolita già nel 2016.',
      },
    },
  },
};

export default guide;
