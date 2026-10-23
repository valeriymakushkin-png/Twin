import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'TJ',
  checked: '2026-10',
  fees: { evisa: { kind: 'from', amount: 30, currency: 'USD' } },
  stay: { evisa: 60 },
  links: { evisa: 'https://www.evisa.tj' },
  forms: [{ name: 'GBAO permit', url: 'https://www.evisa.tj', fee: { kind: 'fixed', amount: 20, currency: 'USD' } }],
  passportMonths: 6,
  visaRun: 'limited',
  text: {
    ru: {
      summary:
        'Граждане России и большинства стран СНГ въезжают без визы. Граждане США, ЕС, Канады, Австралии, Японии, Кореи и ещё многих стран с 2022 года получают 30 дней без визы. Гражданам Великобритании, Индии, Китая и ряда других стран нужна электронная виза, а для Памира всем без исключения нужен пропуск в ГБАО.',
      apply:
        'Электронную визу оформляют на evisa.tj: анкета, фото, скан паспорта, оплата картой, обычно за 1–7 дней; однократная стоит около 30 $, многократная — около 50 $. В той же анкете отметьте пропуск в ГБАО (+20 $) — без него на Памирский тракт не пустят. Безвизовые туристы могут заказать пропуск отдельно на evisa.tj или получить в ОВИР Душанбе.',
      visaRun:
        'Визаран возможен лишь ограниченно: после выезда безвизовые 30 дней начинаются снова, но пограничники видят историю въездов, а частые возвраты вызывают вопросы. Для долгих поездок надёжнее электронная виза на срок до 60 дней.',
      hacks: [
        'Классический маршрут по Памирскому тракту начинают в Оше в Киргизии и въезжают через перевал Кызыл-Арт — пропуск в ГБАО нужен уже на этом посту, поэтому распечатайте его заранее.',
        'Фанские горы и Искандеркуль находятся вне ГБАО — для поездки туда достаточно визы или безвизового въезда, пропуск не нужен.',
        'Для Сарезского озера и заповедных участков Памира нужен отдельный пропуск сверх ГБАО — его оформляют через агентства в Хороге или Душанбе.',
        'В горах нет банкоматов и обменников: меняйте доллары на сомони в банках Душанбе или Хорога заранее и держите мелкие купюры.',
      ],
      pitfalls: [
        'Забытый пропуск в ГБАО — самая частая ошибка: без него разворачивают на первом посту, и ехать за ним придётся обратно в Душанбе.',
        'Если остаётесь в стране дольше 10 рабочих дней, регистрация в миграционной службе обязательна; гостиницы делают её не всегда, поэтому уточняйте. Штраф — до 100 $.',
        'Сайты-посредники продают визу дороже; официальный портал — evisa.tj.',
      ],
      passports: {
        RU: 'Россиянам виза не нужна, но въезд — только по загранпаспорту. Российские карты не работают: везите доллары или рубли наличными. Пропуск в ГБАО нужен и россиянам.',
        GB: 'Граждане Великобритании не входят в безвизовый список — оформите электронную визу на evisa.tj вместе с пропуском в ГБАО.',
        IN: 'Гражданам Индии нужна электронная виза; оформляйте её вместе с пропуском в ГБАО, если едете на Памир.',
        US: 'Граждане США въезжают без визы на 30 дней; пропуск в ГБАО (20 $) оформляется отдельно на evisa.tj.',
      },
    },
    en: {
      summary:
        'Citizens of Russia and most CIS countries enter visa-free. Since 2022, citizens of the US, EU, Canada, Australia, Japan, Korea and many other countries have had 30 visa-free days. UK, Indian, Chinese and some other citizens need an e-visa, and everyone without exception needs a GBAO permit for the Pamirs.',
      apply:
        'Apply for the e-visa at evisa.tj: form, photo, passport scan and card payment, usually within 1–7 days; single entry costs about $30, multiple entry about $50. Tick the GBAO permit in the same form (+$20) — without it you will not be allowed onto the Pamir Highway. Visa-free travellers can order the permit separately on evisa.tj or get it at the OVIR office in Dushanbe.',
      visaRun:
        'Visa runs are possible only to a limited extent: after you leave, the 30 visa-free days start again, but border officers see your entry history and frequent returns raise questions. For longer trips, an e-visa for up to 60 days is the safer choice.',
      hacks: [
        'The classic Pamir Highway route starts in Osh in Kyrgyzstan and enters over the Kyzyl-Art pass — the GBAO permit is checked at that very post, so print it beforehand.',
        'The Fann Mountains and Iskanderkul lie outside GBAO — a visa or visa-free entry is enough, no permit needed.',
        'Lake Sarez and the protected parts of the Pamirs require an extra permit on top of GBAO, arranged through agencies in Khorog or Dushanbe.',
        'There are no ATMs or exchange offices in the mountains: change dollars into somoni at banks in Dushanbe or Khorog in advance and keep small notes.',
      ],
      pitfalls: [
        'Forgetting the GBAO permit is the most common mistake: you are turned back at the first checkpoint and have to go back to Dushanbe for it.',
        'If you stay longer than 10 working days, registration with the migration service is mandatory; hotels do not always handle it, so ask. The fine is up to $100.',
        'Agency sites sell the visa for more; the official portal is evisa.tj.',
      ],
      passports: {
        RU: 'Russian citizens need no visa, but entry is with the international passport only. Russian cards do not work, so bring dollars or roubles in cash. Russians need the GBAO permit too.',
        GB: 'UK citizens are not on the visa-free list — apply for an e-visa on evisa.tj together with the GBAO permit.',
        IN: 'Indian citizens need an e-visa; apply for it together with the GBAO permit if you are heading to the Pamirs.',
        US: 'US citizens enter visa-free for 30 days; the GBAO permit ($20) is ordered separately on evisa.tj.',
      },
    },
    es: {
      summary:
        'Los ciudadanos de Rusia y de la mayoría de los países de la CEI entran sin visado. Desde 2022, los de EE. UU., la UE, Canadá, Australia, Japón, Corea y muchos otros países tienen 30 días sin visado. Británicos, indios, chinos y algunas nacionalidades más necesitan visado electrónico, y para el Pamir todo el mundo, sin excepción, necesita el permiso GBAO.',
      apply:
        'El visado electrónico se pide en evisa.tj: formulario, foto, copia del pasaporte y pago con tarjeta, normalmente en 1–7 días; el de una entrada cuesta unos 30 $ y el de varias, unos 50 $. Marca en el mismo formulario el permiso GBAO (+20 $): sin él no te dejarán entrar en la carretera del Pamir. Quien entra sin visado puede pedir el permiso aparte en evisa.tj o en la oficina OVIR de Dusambé.',
      visaRun:
        'El visa run solo funciona en parte: al salir, los 30 días sin visado empiezan de nuevo, pero los guardias ven tu historial de entradas y los regresos frecuentes despiertan preguntas. Para viajes largos es más seguro un visado electrónico de hasta 60 días.',
      hacks: [
        'La ruta clásica por la carretera del Pamir empieza en Osh (Kirguistán) y entra por el puerto de Kyzyl-Art; el permiso GBAO se revisa justo en ese puesto, así que llévalo impreso.',
        'Los montes Fann y el lago Iskanderkul quedan fuera de GBAO: basta con el visado o la entrada sin visado, sin permiso.',
        'El lago Sarez y las zonas protegidas del Pamir exigen un permiso adicional al de GBAO, que tramitan agencias de Jorog o Dusambé.',
        'En la montaña no hay cajeros ni casas de cambio: cambia dólares a somoni en bancos de Dusambé o Jorog con antelación y lleva billetes pequeños.',
      ],
      pitfalls: [
        'Olvidar el permiso GBAO es el error más común: te hacen dar la vuelta en el primer control y tienes que volver a Dusambé a por él.',
        'Si te quedas más de 10 días laborables, el registro ante migración es obligatorio; los hoteles no siempre lo hacen, así que pregunta. La multa llega a 100 $.',
        'Las webs intermediarias venden el visado más caro; el portal oficial es evisa.tj.',
      ],
      passports: {
        RU: 'Los ciudadanos rusos no necesitan visado, pero solo entran con el pasaporte de viaje. Las tarjetas rusas no funcionan: lleva dólares o rublos en efectivo. También necesitan el permiso GBAO.',
        GB: 'Los británicos no están en la lista sin visado: pide el visado electrónico en evisa.tj junto con el permiso GBAO.',
        IN: 'Los ciudadanos indios necesitan visado electrónico; pídelo junto con el permiso GBAO si vas al Pamir.',
        US: 'Los estadounidenses entran sin visado 30 días; el permiso GBAO (20 $) se pide aparte en evisa.tj.',
      },
    },
    de: {
      summary:
        'Bürger Russlands und der meisten GUS-Staaten reisen visumfrei ein. Seit 2022 haben Bürger der USA, der EU, Kanadas, Australiens, Japans, Koreas und vieler weiterer Länder 30 visumfreie Tage. Briten, Inder, Chinesen und einige andere brauchen ein E-Visum, und für den Pamir braucht ausnahmslos jeder eine GBAO-Genehmigung.',
      apply:
        'Das E-Visum beantragst du auf evisa.tj: Formular, Foto, Passscan und Kartenzahlung, meist binnen 1–7 Tagen; einfache Einreise kostet etwa 30 $, mehrfache etwa 50 $. Kreuze im selben Formular die GBAO-Genehmigung an (+20 $) – ohne sie kommst du nicht auf den Pamir Highway. Visumfreie Reisende bestellen die Genehmigung separat auf evisa.tj oder holen sie beim OVIR in Duschanbe.',
      visaRun:
        'Visa-Runs gehen nur eingeschränkt: Nach der Ausreise beginnen die 30 visumfreien Tage neu, doch die Grenzbeamten sehen deine Einreisehistorie, und häufige Rückkehr wirft Fragen auf. Für längere Reisen ist ein E-Visum für bis zu 60 Tage die sicherere Wahl.',
      hacks: [
        'Die klassische Pamir-Highway-Route beginnt in Osch in Kirgisistan und führt über den Kysyl-Art-Pass ins Land – die GBAO-Genehmigung wird genau an diesem Posten geprüft, druck sie also vorher aus.',
        'Fan-Gebirge und Iskanderkul liegen außerhalb von GBAO – dort reichen Visum oder visumfreie Einreise, eine Genehmigung brauchst du nicht.',
        'Für den Sarez-See und geschützte Teile des Pamir ist zusätzlich zur GBAO-Genehmigung eine weitere nötig, die Agenturen in Chorog oder Duschanbe besorgen.',
        'In den Bergen gibt es weder Automaten noch Wechselstuben: Tausche Dollar vorab bei Banken in Duschanbe oder Chorog in Somoni und halte kleine Scheine bereit.',
      ],
      pitfalls: [
        'Die vergessene GBAO-Genehmigung ist der häufigste Fehler: Am ersten Posten wirst du zurückgeschickt und musst nach Duschanbe zurück.',
        'Bleibst du länger als 10 Werktage, ist die Registrierung bei der Migrationsbehörde Pflicht; Hotels übernehmen das nicht immer, also frag nach. Das Bußgeld beträgt bis zu 100 $.',
        'Vermittlerseiten verkaufen das Visum teurer; das offizielle Portal ist evisa.tj.',
      ],
      passports: {
        RU: 'Russische Staatsangehörige brauchen kein Visum, reisen aber nur mit dem Reisepass ein. Russische Karten funktionieren nicht – nimm Dollar oder Rubel in bar mit. Die GBAO-Genehmigung brauchen auch Russen.',
        GB: 'Britische Staatsangehörige stehen nicht auf der visumfreien Liste – beantrage auf evisa.tj das E-Visum zusammen mit der GBAO-Genehmigung.',
        IN: 'Indische Staatsangehörige brauchen ein E-Visum; beantrage es gleich mit der GBAO-Genehmigung, wenn du in den Pamir willst.',
        US: 'US-Bürger reisen 30 Tage visumfrei ein; die GBAO-Genehmigung (20 $) bestellst du separat auf evisa.tj.',
      },
    },
    fr: {
      summary:
        'Les citoyens de Russie et de la plupart des pays de la CEI entrent sans visa. Depuis 2022, ceux des États-Unis, de l’UE, du Canada, d’Australie, du Japon, de Corée et de nombreux autres pays ont 30 jours sans visa. Les Britanniques, les Indiens, les Chinois et quelques autres ont besoin d’un e-visa, et pour le Pamir, tout le monde sans exception doit avoir le permis GBAO.',
      apply:
        'L’e-visa se demande sur evisa.tj : formulaire, photo, scan du passeport et paiement par carte, en général sous 1 à 7 jours ; l’entrée unique coûte environ 30 $, les entrées multiples environ 50 $. Cochez dans le même formulaire le permis GBAO (+20 $) : sans lui, impossible d’emprunter la route du Pamir. Les voyageurs exemptés de visa peuvent commander le permis séparément sur evisa.tj ou l’obtenir à l’OVIR de Douchanbé.',
      visaRun:
        'Le visa run n’est possible que dans une certaine mesure : après une sortie, les 30 jours sans visa recommencent, mais les gardes-frontières voient votre historique d’entrées et les retours fréquents suscitent des questions. Pour un long séjour, un e-visa jusqu’à 60 jours est plus sûr.',
      hacks: [
        'Le parcours classique de la route du Pamir part d’Och, au Kirghizistan, et entre par le col de Kyzyl-Art : le permis GBAO est contrôlé dès ce poste, imprimez-le à l’avance.',
        'Les monts Fann et le lac Iskanderkoul sont hors du GBAO : un visa ou l’entrée sans visa suffit, sans permis.',
        'Le lac Sarez et les zones protégées du Pamir demandent un permis supplémentaire en plus du GBAO, obtenu via des agences de Khorog ou de Douchanbé.',
        'Il n’y a ni distributeurs ni bureaux de change en montagne : changez vos dollars en somonis dans les banques de Douchanbé ou de Khorog avant de partir et gardez des petites coupures.',
      ],
      pitfalls: [
        'Oublier le permis GBAO est l’erreur la plus fréquente : on vous refoule au premier poste et il faut retourner le chercher à Douchanbé.',
        'Au-delà de 10 jours ouvrés sur place, l’enregistrement auprès du service des migrations est obligatoire ; les hôtels ne s’en chargent pas toujours, renseignez-vous. L’amende peut atteindre 100 $.',
        'Les sites intermédiaires vendent le visa plus cher ; le portail officiel est evisa.tj.',
      ],
      passports: {
        RU: 'Les citoyens russes n’ont pas besoin de visa, mais entrent uniquement avec le passeport international. Les cartes russes ne fonctionnent pas : apportez des dollars ou des roubles en espèces. Le permis GBAO est aussi exigé des Russes.',
        GB: 'Les Britanniques ne figurent pas sur la liste d’exemption : demandez l’e-visa sur evisa.tj avec le permis GBAO.',
        IN: 'Les citoyens indiens ont besoin d’un e-visa ; demandez-le avec le permis GBAO si vous allez dans le Pamir.',
        US: 'Les citoyens américains entrent sans visa pour 30 jours ; le permis GBAO (20 $) se commande à part sur evisa.tj.',
      },
    },
    it: {
      summary:
        'I cittadini della Russia e della maggior parte dei paesi della CSI entrano senza visto. Dal 2022 quelli di Stati Uniti, UE, Canada, Australia, Giappone, Corea e molti altri paesi hanno 30 giorni senza visto. Britannici, indiani, cinesi e alcune altre nazionalità hanno bisogno del visto elettronico, e per il Pamir serve a tutti, senza eccezioni, il permesso GBAO.',
      apply:
        'Il visto elettronico si richiede su evisa.tj: modulo, foto, scansione del passaporto e pagamento con carta, di solito in 1–7 giorni; l’ingresso singolo costa circa 30 $, quello multiplo circa 50 $. Spunta nello stesso modulo il permesso GBAO (+20 $): senza non ti fanno percorrere la Pamir Highway. Chi entra senza visto può chiedere il permesso a parte su evisa.tj o all’ufficio OVIR di Dušanbe.',
      visaRun:
        'Il visa run funziona solo in parte: dopo l’uscita i 30 giorni senza visto ripartono, ma le guardie di frontiera vedono la cronologia degli ingressi e i ritorni frequenti fanno nascere domande. Per viaggi lunghi è più sicuro un visto elettronico fino a 60 giorni.',
      hacks: [
        'Il percorso classico della Pamir Highway parte da Oš in Kirghizistan ed entra dal passo Kyzyl-Art: il permesso GBAO viene controllato proprio a quel posto, quindi stampalo prima.',
        'I monti Fann e il lago Iskanderkul sono fuori dal GBAO: bastano visto o ingresso senza visto, nessun permesso.',
        'Il lago Sarez e le aree protette del Pamir richiedono un permesso aggiuntivo oltre al GBAO, che procurano le agenzie di Khorog o Dušanbe.',
        'In montagna non ci sono sportelli né cambiavalute: cambia dollari in somoni nelle banche di Dušanbe o Khorog in anticipo e tieni banconote di piccolo taglio.',
      ],
      pitfalls: [
        'Dimenticare il permesso GBAO è l’errore più comune: ti rimandano indietro al primo posto di controllo e devi tornare a Dušanbe a prenderlo.',
        'Se resti più di 10 giorni lavorativi, la registrazione presso l’ufficio migrazione è obbligatoria; gli hotel non sempre se ne occupano, quindi chiedi. La multa arriva a 100 $.',
        'I siti intermediari vendono il visto a prezzi più alti; il portale ufficiale è evisa.tj.',
      ],
      passports: {
        RU: 'I cittadini russi non hanno bisogno del visto, ma entrano solo con il passaporto per l’estero. Le carte russe non funzionano: porta dollari o rubli in contanti. Il permesso GBAO serve anche ai russi.',
        GB: 'I cittadini britannici non sono nella lista senza visto: richiedi il visto elettronico su evisa.tj insieme al permesso GBAO.',
        IN: 'I cittadini indiani hanno bisogno del visto elettronico; richiedilo insieme al permesso GBAO se vai sul Pamir.',
        US: 'I cittadini statunitensi entrano senza visto per 30 giorni; il permesso GBAO (20 $) si richiede a parte su evisa.tj.',
      },
    },
  },
};

export default guide;
