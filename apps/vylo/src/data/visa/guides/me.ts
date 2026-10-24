import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'ME',
  checked: '2026-10',
  overrides: {
    RU: { status: 'required' },
    BY: { status: 'required' },
    TR: { status: 'required' },
    SA: { status: 'required' },
  },
  stay: { visa: 90 },
  links: { immigration: 'https://www.gov.me' },
  docs: ['booking', 'returnTicket'],
  passportMonths: 3,
  rule: { days: 90, window: 180 },
  visaRun: 'limited',
  waivers: [{ holds: ['visaSchengen', 'visaUS', 'visaGB', 'resEU', 'resUS', 'resGB'], status: 'free', days: 30 }],
  hackScope: [['regime:required'], ['regime:free'], null],
  pitfallScope: [null, ['regime:required'], ['RU', 'TR', 'BY', 'SA']],
  text: {
    ru: {
      summary:
        'Граждане ЕС, Великобритании, США, Канады, Австралии, Украины, Японии, Кореи и большей части Латинской Америки въезжают без визы на 90 дней в течение 180. С 1 ноября 2026 года визы нужны гражданам России, Беларуси, Турции, Саудовской Аравии и Китая — либо действующая виза или ВНЖ Шенгена, США, Великобритании или Ирландии, с которыми можно провести до 30 дней без черногорской визы.',
      apply:
        'Черногорскую визу оформляют в посольстве или его визовом центре (в России — посольство в Москве или визовый центр): анкета, фото, страховка, бронь жилья, обратный билет и выписка из банка. Краткосрочная виза выдаётся по правилам, близким к шенгенским, — до 90 дней в течение 180. Закладывайте минимум две недели и уточняйте актуальный сбор в посольстве. До 31 октября 2026 года включительно россияне и белорусы ещё въезжают без визы на 30 дней.',
      visaRun:
        'Для безвизовых граждан действует правило 90/180, поэтому поездки в Албанию или Хорватию ничего не обнуляют. Россияне раньше ездили на визаран в Боснию или Албанию каждые 30 дней — с 1 ноября 2026 года без визы или подходящего документа это больше не работает.',
      hacks: [
        'С визой или ВНЖ Шенгена, США, Великобритании или Ирландии можно провести в стране до 30 дней без черногорской визы — это касается и россиян с шенгенской визой.',
        'Дни в Черногории не идут в шенгенский счёт 90/180 — классический способ для американцев, британцев и канадцев растянуть долгую поездку по Европе.',
        'Летом на главном переходе с Хорватией, Дебели-Бриег — Карасовичи, очереди бывают по несколько часов: пересекайте границу до 9 утра или после 20:00.',
      ],
      pitfalls: [
        'Регистрация в течение 24 часов обязательна: отели делают её сами, в частной квартире хозяин регистрирует вас в местной туристической организации, и вы платите туристический налог (около 1 € в сутки). Без регистрации грозит штраф.',
        'Виза или ВНЖ, по которым вы въехали, должны действовать всё время пребывания — иначе срок сокращается до даты их окончания.',
        'Старые форумы пишут, что россиянам и туркам виза не нужна, — с 1 ноября 2026 года правила другие. Сезонные безвизовые режимы (летом 2026-го — для Казахстана) больше не вводятся из-за сближения с визовой политикой ЕС.',
      ],
      waivers: [
        'Действующая виза Шенгена, США, Великобритании или Ирландии либо ВНЖ этих стран: въезд без визы и до 30 дней пребывания, но не дольше срока действия документа.',
      ],
      passports: {
        RU: 'С 1 ноября 2026 года россиянам нужна черногорская виза (посольство в Москве или визовый центр), если нет действующей визы или ВНЖ Шенгена, США, Великобритании или Ирландии — с ними до 30 дней без визы. Прямых рейсов нет — через Стамбул или Белград. Российские карты не работают, валюта — евро.',
        BY: 'Белорусам с 1 ноября 2026 года тоже нужна виза; правило о шенгенской, американской или британской визе действует так же.',
        TR: 'Гражданам Турции безвизовое пребывание сократили до 30 дней в декабре 2025 года, а с 1 ноября 2026 года нужна виза; въезд по визе или ВНЖ Шенгена, США или Великобритании сохраняется.',
        CN: 'Гражданам Китая нужна виза, но действует въезд по визе или ВНЖ Шенгена, США или Великобритании.',
        US: 'Граждане США — 90 дней в течение 180 без визы.',
      },
    },
    en: {
      summary:
        'Citizens of the EU, the UK, the US, Canada, Australia, Ukraine, Japan, Korea and most of Latin America visit visa-free for 90 days in 180. From 1 November 2026 citizens of Russia, Belarus, Turkey, Saudi Arabia and China need a visa — or a valid Schengen, US, UK or Irish visa or residence permit, which allows up to 30 days without a Montenegrin visa.',
      apply:
        'Montenegrin visas are applied for at an embassy or its visa centre (in Russia, the embassy in Moscow or the visa centre): form, photo, insurance, accommodation booking, return ticket and bank statement. Short-stay visas follow rules close to Schengen’s — up to 90 days in 180. Allow at least two weeks and check the current fee with the embassy. Until 31 October 2026 inclusive, Russians and Belarusians still enter visa-free for 30 days.',
      visaRun:
        'Visa-free visitors are bound by the 90/180 rule, so trips to Albania or Croatia reset nothing. Russians used to do 30-day runs to Bosnia or Albania — from 1 November 2026 that no longer works without a visa or a qualifying document.',
      hacks: [
        'With a Schengen, US, UK or Irish visa or residence permit you can stay up to 30 days without a Montenegrin visa — this also covers Russians holding a Schengen visa.',
        'Days in Montenegro don’t count towards Schengen’s 90/180 — a classic way for Americans, Brits and Canadians to stretch a long European trip.',
        'In summer the main crossing from Croatia, Debeli Brijeg – Karasovići, can mean queues of several hours: cross before 9 am or after 8 pm.',
      ],
      pitfalls: [
        'Registration within 24 hours is mandatory: hotels do it, while in a private rental the host registers you with the local tourist organisation and you pay the tourist tax (about €1 a night). Skipping it means a fine.',
        'The visa or permit you entered on must be valid for your whole stay; otherwise your stay ends when it expires.',
        'Old forum posts say Russians and Turks need no visa — from 1 November 2026 the rules are different. Seasonal visa waivers (such as Kazakhstan’s in summer 2026) are no longer introduced as Montenegro aligns with EU visa policy.',
      ],
      waivers: [
        'A valid Schengen, US, UK or Irish visa or a residence permit of those countries: entry without a visa and up to 30 days’ stay, but not beyond the document’s expiry.',
      ],
      passports: {
        RU: 'From 1 November 2026 Russians need a Montenegrin visa (embassy in Moscow or the visa centre) unless they hold a valid Schengen, US, UK or Irish visa or residence permit — then up to 30 days without one. There are no direct flights; connect via Istanbul or Belgrade. Russian cards don’t work; the currency is the euro.',
        BY: 'Belarusians also need a visa from 1 November 2026; the Schengen, US or UK visa rule applies to them in the same way.',
        TR: 'Turkish citizens saw their visa-free stay cut to 30 days in December 2025 and need a visa from 1 November 2026; entry on a Schengen, US or UK visa or residence permit still works.',
        CN: 'Chinese citizens need a visa, but entry on a Schengen, US or UK visa or residence permit applies.',
        US: 'US citizens get 90 days in 180 visa-free.',
      },
    },
    es: {
      summary:
        'Los ciudadanos de la UE, Reino Unido, EE. UU., Canadá, Australia, Ucrania, Japón, Corea y casi toda Latinoamérica entran sin visado 90 días cada 180. Desde el 1 de noviembre de 2026, los ciudadanos de Rusia, Bielorrusia, Turquía, Arabia Saudí y China necesitan visado, o bien un visado o permiso de residencia vigente de Schengen, EE. UU., Reino Unido o Irlanda, que permite hasta 30 días sin visado montenegrino.',
      apply:
        'El visado montenegrino se solicita en una embajada o en su centro de visados (en Rusia, la embajada en Moscú o el centro de visados): formulario, foto, seguro, reserva de alojamiento, billete de vuelta y extracto bancario. El visado de corta duración sigue normas parecidas a las de Schengen: hasta 90 días cada 180. Cuenta con al menos dos semanas y consulta la tasa vigente en la embajada. Hasta el 31 de octubre de 2026 incluido, rusos y bielorrusos aún entran sin visado por 30 días.',
      visaRun:
        'Quienes entran sin visado están sujetos a la regla de 90/180, así que ir a Albania o Croacia no pone nada a cero. Los rusos solían hacer visa runs a Bosnia o Albania cada 30 días; desde el 1 de noviembre de 2026 eso ya no funciona sin visado o un documento válido.',
      hacks: [
        'Con un visado o permiso de residencia de Schengen, EE. UU., Reino Unido o Irlanda puedes quedarte hasta 30 días sin visado montenegrino; esto incluye a los rusos con visado Schengen.',
        'Los días en Montenegro no cuentan para los 90/180 de Schengen: un clásico de estadounidenses, británicos y canadienses para alargar un viaje largo por Europa.',
        'En verano, en el paso principal desde Croacia, Debeli Brijeg – Karasovići, puede haber colas de varias horas: cruza antes de las 9 o después de las 20.',
      ],
      pitfalls: [
        'El registro en 24 horas es obligatorio: los hoteles lo hacen, y en un alquiler particular el anfitrión te registra en la oficina de turismo local y pagas la tasa turística (alrededor de 1 € por noche). Sin registro hay multa.',
        'El visado o permiso con el que entraste debe estar vigente durante toda la estancia; si no, esta termina cuando caduca.',
        'Los foros antiguos dicen que rusos y turcos no necesitan visado: desde el 1 de noviembre de 2026 las normas son otras. Ya no se aprueban exenciones de temporada (como la de Kazajistán en verano de 2026), porque Montenegro se alinea con la política de visados de la UE.',
      ],
      waivers: [
        'Un visado vigente de Schengen, EE. UU., Reino Unido o Irlanda, o un permiso de residencia de esos países: entrada sin visado y hasta 30 días de estancia, pero no más allá de la caducidad del documento.',
      ],
      passports: {
        RU: 'Desde el 1 de noviembre de 2026 los ciudadanos rusos necesitan visado montenegrino (embajada en Moscú o centro de visados), salvo que tengan un visado o permiso de residencia vigente de Schengen, EE. UU., Reino Unido o Irlanda; con él, hasta 30 días sin visado. No hay vuelos directos: vía Estambul o Belgrado. Las tarjetas rusas no funcionan; la moneda es el euro.',
        BY: 'Los bielorrusos también necesitan visado desde el 1 de noviembre de 2026; la regla del visado Schengen, estadounidense o británico se les aplica igual.',
        TR: 'A los ciudadanos turcos se les redujo la estancia sin visado a 30 días en diciembre de 2025 y desde el 1 de noviembre de 2026 necesitan visado; la entrada con visado o permiso de residencia de Schengen, EE. UU. o Reino Unido sigue siendo válida.',
        CN: 'Los ciudadanos chinos necesitan visado, pero pueden entrar con un visado o permiso de residencia de Schengen, EE. UU. o Reino Unido.',
        US: 'Los ciudadanos estadounidenses tienen 90 días cada 180 sin visado.',
      },
    },
    de: {
      summary:
        'Bürger der EU, Großbritanniens, der USA, Kanadas, Australiens, der Ukraine, Japans, Koreas und fast ganz Lateinamerikas reisen 90 Tage innerhalb von 180 visumfrei ein. Ab dem 1. November 2026 brauchen Staatsangehörige Russlands, von Belarus, der Türkei, Saudi-Arabiens und Chinas ein Visum – oder ein gültiges Visum bzw. einen Aufenthaltstitel des Schengenraums, der USA, Großbritanniens oder Irlands, womit bis zu 30 Tage ohne montenegrinisches Visum möglich sind.',
      apply:
        'Montenegrinische Visa beantragst du bei einer Botschaft oder ihrem Visumzentrum (in Russland bei der Botschaft in Moskau oder im Visumzentrum): Formular, Foto, Versicherung, Unterkunftsbuchung, Rückflugticket und Kontoauszug. Kurzzeitvisa folgen ähnlichen Regeln wie Schengen – bis zu 90 Tage innerhalb von 180. Plane mindestens zwei Wochen ein und erfrag die aktuelle Gebühr bei der Botschaft. Bis einschließlich 31. Oktober 2026 reisen Russen und Belarussen noch 30 Tage visumfrei ein.',
      visaRun:
        'Für visumfreie Besucher gilt die 90/180-Regel, Ausflüge nach Albanien oder Kroatien setzen also nichts zurück. Russen haben früher alle 30 Tage Visa-Runs nach Bosnien oder Albanien gemacht – ab dem 1. November 2026 klappt das ohne Visum oder passendes Dokument nicht mehr.',
      hacks: [
        'Mit einem Visum oder Aufenthaltstitel des Schengenraums, der USA, Großbritanniens oder Irlands darfst du bis zu 30 Tage ohne montenegrinisches Visum bleiben – das gilt auch für Russen mit Schengen-Visum.',
        'Tage in Montenegro zählen nicht für die Schengen-Regel 90/180 – ein Klassiker für Amerikaner, Briten und Kanadier, um eine lange Europareise zu strecken.',
        'Im Sommer gibt es am wichtigsten Übergang aus Kroatien, Debeli Brijeg – Karasovići, oft stundenlange Schlangen: Fahr vor 9 Uhr oder nach 20 Uhr über die Grenze.',
      ],
      pitfalls: [
        'Die Anmeldung innerhalb von 24 Stunden ist Pflicht: Hotels übernehmen das, bei Privatvermietern meldet dich der Gastgeber beim örtlichen Tourismusverband an und du zahlst die Kurtaxe (etwa 1 € pro Nacht). Ohne Anmeldung droht ein Bußgeld.',
        'Das Visum oder der Titel, mit dem du eingereist bist, muss während des ganzen Aufenthalts gültig sein; sonst endet dein Aufenthalt mit dem Ablauf.',
        'Alte Forenbeiträge behaupten, Russen und Türken bräuchten kein Visum – ab dem 1. November 2026 gelten andere Regeln. Saisonale Visabefreiungen (wie für Kasachstan im Sommer 2026) gibt es wegen der Angleichung an die EU-Visapolitik nicht mehr.',
      ],
      waivers: [
        'Ein gültiges Visum des Schengenraums, der USA, Großbritanniens oder Irlands oder ein Aufenthaltstitel dieser Länder: Einreise ohne Visum und bis zu 30 Tage Aufenthalt, aber nicht über das Ablaufdatum des Dokuments hinaus.',
      ],
      passports: {
        RU: 'Ab dem 1. November 2026 brauchen russische Staatsangehörige ein montenegrinisches Visum (Botschaft in Moskau oder Visumzentrum), außer sie haben ein gültiges Visum oder einen Aufenthaltstitel des Schengenraums, der USA, Großbritanniens oder Irlands – dann bis zu 30 Tage ohne. Direktflüge gibt es nicht, man fliegt über Istanbul oder Belgrad. Russische Karten funktionieren nicht; die Währung ist der Euro.',
        BY: 'Auch Belarussen brauchen ab dem 1. November 2026 ein Visum; die Regel für Schengen-, US- oder UK-Visa gilt für sie genauso.',
        TR: 'Für türkische Staatsangehörige wurde der visumfreie Aufenthalt im Dezember 2025 auf 30 Tage gekürzt, ab dem 1. November 2026 brauchen sie ein Visum; die Einreise mit Schengen-, US- oder UK-Visum bzw. Aufenthaltstitel funktioniert weiterhin.',
        CN: 'Chinesische Staatsangehörige brauchen ein Visum, die Einreise mit Schengen-, US- oder UK-Visum bzw. Aufenthaltstitel ist aber möglich.',
        US: 'US-Bürger haben 90 Tage innerhalb von 180 visumfrei.',
      },
    },
    fr: {
      summary:
        'Les citoyens de l’UE, du Royaume-Uni, des États-Unis, du Canada, de l’Australie, de l’Ukraine, du Japon, de la Corée et de presque toute l’Amérique latine entrent sans visa pour 90 jours sur 180. À partir du 1er novembre 2026, les citoyens de Russie, de Biélorussie, de Turquie, d’Arabie saoudite et de Chine ont besoin d’un visa, ou d’un visa ou titre de séjour valide de l’espace Schengen, des États-Unis, du Royaume-Uni ou d’Irlande, qui permet jusqu’à 30 jours sans visa monténégrin.',
      apply:
        'Le visa monténégrin se demande auprès d’une ambassade ou de son centre de visas (en Russie, l’ambassade à Moscou ou le centre de visas) : formulaire, photo, assurance, réservation d’hébergement, billet retour et relevé bancaire. Le visa de court séjour suit des règles proches de celles de Schengen : jusqu’à 90 jours sur 180. Prévoyez au moins deux semaines et vérifiez le tarif en vigueur auprès de l’ambassade. Jusqu’au 31 octobre 2026 inclus, Russes et Biélorusses entrent encore sans visa pour 30 jours.',
      visaRun:
        'Les visiteurs exemptés de visa sont soumis à la règle des 90/180 : un saut en Albanie ou en Croatie ne remet rien à zéro. Les Russes faisaient autrefois des visa runs en Bosnie ou en Albanie tous les 30 jours ; à partir du 1er novembre 2026, cela ne fonctionne plus sans visa ou document reconnu.',
      hacks: [
        'Avec un visa ou un titre de séjour Schengen, américain, britannique ou irlandais, vous pouvez rester jusqu’à 30 jours sans visa monténégrin, y compris si vous êtes russe avec un visa Schengen.',
        'Les jours passés au Monténégro ne comptent pas dans les 90/180 de Schengen : une astuce classique des Américains, Britanniques et Canadiens pour prolonger un long voyage en Europe.',
        'L’été, au principal poste frontière avec la Croatie, Debeli Brijeg – Karasovići, l’attente peut durer plusieurs heures : passez avant 9 h ou après 20 h.',
      ],
      pitfalls: [
        'L’enregistrement sous 24 heures est obligatoire : les hôtels s’en occupent ; dans une location privée, l’hôte vous déclare à l’office de tourisme local et vous payez la taxe de séjour (environ 1 € par nuit). Sans enregistrement, c’est l’amende.',
        'Le visa ou le titre avec lequel vous êtes entré doit rester valide pendant tout le séjour ; sinon, celui-ci s’arrête à son expiration.',
        'Les vieux forums affirment que Russes et Turcs n’ont pas besoin de visa : à partir du 1er novembre 2026, les règles ne sont plus les mêmes. Les exemptions saisonnières (comme celle du Kazakhstan à l’été 2026) ne sont plus accordées, le Monténégro s’alignant sur la politique de visas de l’UE.',
      ],
      waivers: [
        'Un visa valide de l’espace Schengen, des États-Unis, du Royaume-Uni ou d’Irlande, ou un titre de séjour de ces pays : entrée sans visa et séjour jusqu’à 30 jours, sans dépasser la date d’expiration du document.',
      ],
      passports: {
        RU: 'À partir du 1er novembre 2026, les ressortissants russes ont besoin d’un visa monténégrin (ambassade à Moscou ou centre de visas), sauf s’ils détiennent un visa ou titre de séjour valide Schengen, américain, britannique ou irlandais : dans ce cas, jusqu’à 30 jours sans visa. Pas de vol direct : passez par Istanbul ou Belgrade. Les cartes russes ne fonctionnent pas ; la monnaie est l’euro.',
        BY: 'Les Biélorusses ont eux aussi besoin d’un visa à partir du 1er novembre 2026 ; la règle des visas Schengen, américains ou britanniques s’applique à eux de la même façon.',
        TR: 'Pour les citoyens turcs, le séjour sans visa a été réduit à 30 jours en décembre 2025, et un visa est exigé à partir du 1er novembre 2026 ; l’entrée avec un visa ou titre de séjour Schengen, américain ou britannique reste possible.',
        CN: 'Les citoyens chinois ont besoin d’un visa, mais l’entrée avec un visa ou titre de séjour Schengen, américain ou britannique s’applique.',
        US: 'Les citoyens américains ont 90 jours sur 180 sans visa.',
      },
    },
    it: {
      summary:
        'I cittadini di UE, Regno Unito, Stati Uniti, Canada, Australia, Ucraina, Giappone, Corea e quasi tutta l’America Latina entrano senza visto per 90 giorni ogni 180. Dal 1° novembre 2026 i cittadini di Russia, Bielorussia, Turchia, Arabia Saudita e Cina hanno bisogno del visto, oppure di un visto o permesso di soggiorno valido di Schengen, Stati Uniti, Regno Unito o Irlanda, che consente fino a 30 giorni senza visto montenegrino.',
      apply:
        'Il visto montenegrino si chiede in un’ambasciata o nel suo centro visti (in Russia, l’ambasciata a Mosca o il centro visti): modulo, foto, assicurazione, prenotazione dell’alloggio, biglietto di ritorno ed estratto conto. Il visto per soggiorni brevi segue regole simili a quelle Schengen: fino a 90 giorni ogni 180. Calcola almeno due settimane e verifica la tassa in vigore con l’ambasciata. Fino al 31 ottobre 2026 compreso, russi e bielorussi entrano ancora senza visto per 30 giorni.',
      visaRun:
        'Chi entra senza visto è soggetto alla regola dei 90/180, quindi andare in Albania o in Croazia non azzera nulla. I russi facevano visa run in Bosnia o in Albania ogni 30 giorni: dal 1° novembre 2026 senza visto o documento valido non funziona più.',
      hacks: [
        'Con un visto o permesso di soggiorno di Schengen, Stati Uniti, Regno Unito o Irlanda puoi restare fino a 30 giorni senza visto montenegrino; vale anche per i russi con visto Schengen.',
        'I giorni in Montenegro non contano per i 90/180 di Schengen: un classico per statunitensi, britannici e canadesi che vogliono allungare un lungo viaggio in Europa.',
        'D’estate al valico principale con la Croazia, Debeli Brijeg – Karasovići, le code possono durare ore: attraversa prima delle 9 o dopo le 20.',
      ],
      pitfalls: [
        'La registrazione entro 24 ore è obbligatoria: gli hotel la fanno per te, mentre in un affitto privato il proprietario ti registra all’ente turistico locale e paghi la tassa di soggiorno (circa 1 € a notte). Senza registrazione si rischia la multa.',
        'Il visto o permesso con cui sei entrato deve restare valido per tutto il soggiorno; altrimenti il soggiorno termina alla sua scadenza.',
        'I vecchi forum dicono che russi e turchi non hanno bisogno del visto: dal 1° novembre 2026 le regole sono diverse. Le esenzioni stagionali (come quella per il Kazakistan nell’estate 2026) non vengono più introdotte, perché il Montenegro si allinea alla politica dei visti UE.',
      ],
      waivers: [
        'Un visto valido di Schengen, Stati Uniti, Regno Unito o Irlanda, oppure un permesso di soggiorno di questi paesi: ingresso senza visto e soggiorno fino a 30 giorni, ma non oltre la scadenza del documento.',
      ],
      passports: {
        RU: 'Dal 1° novembre 2026 i cittadini russi hanno bisogno del visto montenegrino (ambasciata a Mosca o centro visti), a meno che non abbiano un visto o permesso di soggiorno valido di Schengen, Stati Uniti, Regno Unito o Irlanda: in quel caso fino a 30 giorni senza visto. Non ci sono voli diretti: si passa da Istanbul o Belgrado. Le carte russe non funzionano; la valuta è l’euro.',
        BY: 'Anche i bielorussi hanno bisogno del visto dal 1° novembre 2026; la regola dei visti Schengen, statunitensi o britannici vale anche per loro.',
        TR: 'Ai cittadini turchi il soggiorno senza visto è stato ridotto a 30 giorni a dicembre 2025, e dal 1° novembre 2026 serve il visto; l’ingresso con visto o permesso di soggiorno di Schengen, Stati Uniti o Regno Unito resta possibile.',
        CN: 'I cittadini cinesi hanno bisogno del visto, ma possono entrare con un visto o permesso di soggiorno di Schengen, Stati Uniti o Regno Unito.',
        US: 'I cittadini statunitensi hanno 90 giorni ogni 180 senza visto.',
      },
    },
  },
};

export default guide;
