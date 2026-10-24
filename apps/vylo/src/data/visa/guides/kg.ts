import type { VisaGuide } from '../types';

const thirty = { status: 'free', days: 30 } as const;
const ninety = { status: 'free', days: 90 } as const;

const guide: VisaGuide = {
  code: 'KG',
  checked: '2026-10',
  overrides: {
    RU: ninety,
    BY: ninety,
    KZ: ninety,
    AM: ninety,
    US: thirty,
    GB: thirty,
    CA: thirty,
    AU: thirty,
    DE: thirty,
    FR: thirty,
    IT: thirty,
    ES: thirty,
    PL: thirty,
    NL: thirty,
    BR: thirty,
    MX: thirty,
    IL: thirty,
    JP: thirty,
    KR: thirty,
  },
  links: { evisa: 'https://evisa.e-gov.kg' },
  passportMonths: 6,
  rule: { days: 30, window: 60 },
  visaRun: 'limited',
  borders: [
    { name: 'Ak-Zhol – Korday', to: 'KZ', lat: 43.035, lng: 74.713 },
    { name: 'Manas (FRU) → Almaty', to: 'KZ', lat: 43.0613, lng: 74.4776 },
  ],
  hackScope: [null, null, null, null],
  pitfallScope: [['regime:free'], ['regime:evisa'], null],
  text: {
    ru: {
      summary:
        'Граждане России, Беларуси, Казахстана и Армении въезжают без визы на 90 дней в течение 180. С 31 декабря 2025 года граждане США, Великобритании, ЕС, Японии, Кореи и ещё примерно 50 стран получают уже не 60, а 30 дней в любые 60 дней. Гражданам Индии, Китая и многих стран Азии и Африки нужна электронная виза.',
      apply:
        'Электронную визу оформляют на evisa.e-gov.kg: анкета, фото, скан паспорта и оплата картой, обычно 3–5 рабочих дней. Сбор зависит от типа визы и меняется — проверьте его на портале перед оплатой. Безвизовым гостям ничего заранее подавать не нужно, а туристы в пределах безвизового срока, как правило, освобождены от регистрации.',
      visaRun:
        'Для большинства западных паспортов визаран почти не работает: правило 30 дней в течение 60 означает, что после месяца в стране нужно столько же провести снаружи. Россиянам и гражданам ЕАЭС выезд тоже не обнуляет лимит 90 дней за 180. Практичный вариант — чередовать Киргизию с Казахстаном и Узбекистаном.',
      hacks: [
        'Длинную поездку по Центральной Азии собирайте блоками: 30 дней в Киргизии, затем Казахстан (30 дней за въезд, 90 за 180) и Узбекистан (30 дней). Переход Ак-Жол — Кордай в 20 минутах от Бишкека работает круглосуточно.',
        'Для пограничных зон — Иныльчек, пик Хан-Тенгри, Сары-Джаз и окрестности Торугарта — нужен отдельный пропуск. Его делают через местное агентство примерно за 10 рабочих дней.',
        'Перевал Торугарт в Китай открыт для туристов только с заранее заказанным трансфером с китайской стороны; проще пересекать границу через Иркештам из Оша.',
        'Западные Visa и Mastercard работают в банкоматах Бишкека и Каракола, но в горах и на джайлоо нужны наличные сомы — снимайте заранее.',
      ],
      pitfalls: [
        'Многие сайты всё ещё пишут о 60 безвизовых днях — это правило отменено с конца 2025 года. Переберёте 30 дней — штраф при выезде.',
        'Сайты-посредники берут за электронную визу заметно дороже; официальный портал — evisa.e-gov.kg.',
        'Если вы остаётесь дольше безвизового срока ради работы или учёбы, регистрация обязательна в течение 5 рабочих дней — без неё штраф.',
      ],
      passports: {
        RU: 'Россияне въезжают по внутреннему паспорту и могут находиться в стране 90 дней в течение 180. Российские Visa и Mastercard не работают, «Мир» почти не принимают: везите наличные — рубли меняют в любом обменнике.',
        IN: 'Гражданам Индии нужна электронная виза — оформляйте её на evisa.e-gov.kg минимум за неделю до поездки.',
        CN: 'Гражданам Китая нужна электронная виза или консульская виза; для перехода Торугарт заранее согласуйте трансфер.',
        UZ: 'Граждане Узбекистана находятся без визы до 60 дней в течение 120.',
      },
    },
    en: {
      summary:
        'Citizens of Russia, Belarus, Kazakhstan and Armenia enter visa-free for 90 days in 180. Since 31 December 2025, citizens of the US, UK, EU, Japan, Korea and about 50 other countries get 30 days in any 60, down from 60 days. Indian, Chinese and many Asian and African citizens need an e-visa.',
      apply:
        'Apply for the e-visa at evisa.e-gov.kg: form, photo, passport scan and card payment, usually within 3–5 working days. The fee depends on the visa type and changes, so check it on the portal before paying. Visa-free visitors file nothing in advance, and tourists staying within their visa-free period are generally exempt from registration.',
      visaRun:
        'For most Western passports visa runs barely work: the 30-in-60 rule means that after a month in the country you have to spend as long outside. For Russians and other EAEU citizens, leaving does not reset 90-in-180 either. The practical approach is to alternate Kyrgyzstan with Kazakhstan and Uzbekistan.',
      hacks: [
        'Build a long Central Asia trip in blocks: 30 days in Kyrgyzstan, then Kazakhstan (30 days per entry, 90 in 180) and Uzbekistan (30 days). The Ak-Zhol – Korday crossing, 20 minutes from Bishkek, is open around the clock.',
        'Border zones — Inylchek, Khan Tengri, Sary-Jaz and the area around Torugart — need a separate permit. A local agency arranges it in about 10 working days.',
        'Torugart Pass into China is open to tourists only with transport pre-booked on the Chinese side; Irkeshtam, reached from Osh, is the simpler crossing.',
        'Western Visa and Mastercard cards work at ATMs in Bishkek and Karakol, but in the mountains and on the summer pastures you need cash som — withdraw beforehand.',
      ],
      pitfalls: [
        'Many sites still mention 60 visa-free days; that rule ended in late 2025. Overstay 30 days and you are fined on departure.',
        'Agency sites charge noticeably more for the e-visa; the official portal is evisa.e-gov.kg.',
        'If you stay beyond the visa-free period for work or study, registration within 5 working days is mandatory, or you face a fine.',
      ],
      passports: {
        RU: 'Russian citizens can enter with the internal passport and stay 90 days in 180. Russian Visa and Mastercard cards do not work and Mir is rarely accepted, so bring cash — roubles are exchanged at any bureau.',
        IN: 'Indian citizens need an e-visa — apply at evisa.e-gov.kg at least a week before the trip.',
        CN: 'Chinese citizens need an e-visa or a consular visa; for the Torugart crossing, arrange transport in advance.',
        UZ: 'Uzbek citizens may stay visa-free for up to 60 days in 120.',
      },
    },
    es: {
      summary:
        'Los ciudadanos de Rusia, Bielorrusia, Kazajistán y Armenia entran sin visado 90 días de cada 180. Desde el 31 de diciembre de 2025, los de EE. UU., Reino Unido, la UE, Japón, Corea y unos 50 países más tienen 30 días en cualquier periodo de 60, en lugar de 60 días. Los ciudadanos de India, China y muchos países de Asia y África necesitan visado electrónico.',
      apply:
        'El visado electrónico se tramita en evisa.e-gov.kg: formulario, foto, copia del pasaporte y pago con tarjeta, normalmente en 3–5 días laborables. La tasa depende del tipo de visado y cambia, así que compruébala en el portal antes de pagar. Si entras sin visado no presentas nada antes, y los turistas dentro del plazo sin visado suelen estar exentos de registro.',
      visaRun:
        'Para la mayoría de pasaportes occidentales el visa run apenas sirve: la regla de 30 en 60 obliga a pasar fuera tanto tiempo como dentro tras un mes en el país. A rusos y demás ciudadanos de la UEEA salir tampoco les reinicia los 90 en 180. Lo práctico es alternar Kirguistán con Kazajistán y Uzbekistán.',
      hacks: [
        'Monta un viaje largo por Asia Central por bloques: 30 días en Kirguistán, luego Kazajistán (30 días por entrada, 90 en 180) y Uzbekistán (30 días). El paso de Ak-Zhol – Korday, a 20 minutos de Biskek, abre las 24 horas.',
        'Las zonas fronterizas —Inylchek, Khan Tengri, Sary-Jaz y los alrededores de Torugart— exigen un permiso aparte. Una agencia local lo gestiona en unos 10 días laborables.',
        'El paso de Torugart hacia China solo está abierto a turistas con transporte reservado en el lado chino; Irkeshtam, desde Osh, es el cruce más sencillo.',
        'Las Visa y Mastercard occidentales funcionan en los cajeros de Biskek y Karakol, pero en la montaña y en los pastos de verano hace falta efectivo en som: sácalo antes.',
      ],
      pitfalls: [
        'Muchas webs aún hablan de 60 días sin visado; esa regla terminó a finales de 2025. Si superas los 30 días, te multan al salir.',
        'Las webs intermediarias cobran bastante más por el visado electrónico; el portal oficial es evisa.e-gov.kg.',
        'Si te quedas más allá del plazo sin visado por trabajo o estudios, el registro en 5 días laborables es obligatorio o te arriesgas a una multa.',
      ],
      passports: {
        RU: 'Los ciudadanos rusos pueden entrar con el pasaporte interno y quedarse 90 días de cada 180. Las Visa y Mastercard rusas no funcionan y Mir casi no se acepta: lleva efectivo; los rublos se cambian en cualquier casa de cambio.',
        IN: 'Los ciudadanos indios necesitan visado electrónico: tramítalo en evisa.e-gov.kg al menos una semana antes del viaje.',
        CN: 'Los ciudadanos chinos necesitan visado electrónico o consular; para cruzar por Torugart, organiza el transporte con antelación.',
        UZ: 'Los ciudadanos uzbekos pueden estar sin visado hasta 60 días de cada 120.',
      },
    },
    de: {
      summary:
        'Bürger Russlands, Belarus’, Kasachstans und Armeniens reisen 90 Tage in 180 visumfrei ein. Seit 31. Dezember 2025 bekommen Bürger der USA, Großbritanniens, der EU, Japans, Koreas und rund 50 weiterer Länder nur noch 30 statt 60 Tage in beliebigen 60 Tagen. Inder, Chinesen und viele Staatsangehörige Asiens und Afrikas brauchen ein E-Visum.',
      apply:
        'Das E-Visum beantragst du auf evisa.e-gov.kg: Formular, Foto, Passscan und Kartenzahlung, meist in 3–5 Werktagen. Die Gebühr hängt vom Visumtyp ab und ändert sich – prüfe sie vor dem Bezahlen auf dem Portal. Visumfreie Gäste reichen vorab nichts ein, und Touristen innerhalb der visumfreien Frist sind in der Regel von der Registrierung befreit.',
      visaRun:
        'Für die meisten westlichen Pässe bringen Visa-Runs kaum etwas: Die 30-in-60-Regel heißt, dass du nach einem Monat im Land genauso lange draußen bleiben musst. Auch für Russen und andere EAWU-Bürger setzt eine Ausreise die 90 in 180 nicht zurück. Praktisch ist es, Kirgisistan mit Kasachstan und Usbekistan abzuwechseln.',
      hacks: [
        'Plane eine lange Zentralasienreise in Blöcken: 30 Tage Kirgisistan, dann Kasachstan (30 Tage pro Einreise, 90 in 180) und Usbekistan (30 Tage). Der Übergang Ak-Zhol – Korday, 20 Minuten von Bischkek, ist rund um die Uhr offen.',
        'Grenzzonen – Inyltschek, Khan Tengri, Sary-Dschas und die Umgebung des Torugart – brauchen eine eigene Genehmigung. Eine lokale Agentur besorgt sie in etwa 10 Werktagen.',
        'Der Torugart-Pass nach China ist für Touristen nur mit vorab gebuchtem Transport auf chinesischer Seite offen; einfacher ist Irkeschtam, erreichbar von Osch.',
        'Westliche Visa- und Mastercard-Karten funktionieren an Automaten in Bischkek und Karakol, in den Bergen und auf den Sommerweiden brauchst du aber Som in bar – heb vorher ab.',
      ],
      pitfalls: [
        'Viele Seiten nennen noch 60 visumfreie Tage; diese Regel endete Ende 2025. Wer die 30 Tage überzieht, zahlt bei der Ausreise Bußgeld.',
        'Vermittlerseiten verlangen für das E-Visum deutlich mehr; das offizielle Portal ist evisa.e-gov.kg.',
        'Bleibst du für Arbeit oder Studium über die visumfreie Frist hinaus, ist die Registrierung binnen 5 Werktagen Pflicht, sonst droht ein Bußgeld.',
      ],
      passports: {
        RU: 'Russische Staatsangehörige reisen mit dem Inlandspass ein und dürfen 90 Tage in 180 bleiben. Russische Visa- und Mastercard-Karten funktionieren nicht, Mir wird kaum akzeptiert – nimm Bargeld mit, Rubel tauscht jede Wechselstube.',
        IN: 'Indische Staatsangehörige brauchen ein E-Visum – beantrage es mindestens eine Woche vor der Reise auf evisa.e-gov.kg.',
        CN: 'Chinesische Staatsangehörige brauchen ein E-Visum oder ein Konsularvisum; für den Torugart organisiere den Transport vorab.',
        UZ: 'Usbekische Staatsangehörige dürfen bis zu 60 Tage in 120 visumfrei bleiben.',
      },
    },
    fr: {
      summary:
        'Les citoyens de Russie, de Biélorussie, du Kazakhstan et d’Arménie entrent sans visa pour 90 jours sur 180. Depuis le 31 décembre 2025, ceux des États-Unis, du Royaume-Uni, de l’UE, du Japon, de Corée et d’une cinquantaine d’autres pays n’ont plus que 30 jours sur toute période de 60, au lieu de 60 jours. Les Indiens, les Chinois et de nombreux ressortissants d’Asie et d’Afrique ont besoin d’un e-visa.',
      apply:
        'L’e-visa se demande sur evisa.e-gov.kg : formulaire, photo, scan du passeport et paiement par carte, en général sous 3 à 5 jours ouvrés. Les frais dépendent du type de visa et évoluent ; vérifiez-les sur le portail avant de payer. Les visiteurs exemptés n’ont rien à déposer, et les touristes qui restent dans la durée sans visa sont en général dispensés d’enregistrement.',
      visaRun:
        'Pour la plupart des passeports occidentaux, le visa run ne sert presque à rien : la règle des 30 jours sur 60 impose de passer autant de temps dehors après un mois sur place. Pour les Russes et les autres citoyens de l’UEEA, une sortie ne remet pas non plus à zéro les 90 jours sur 180. Le plus simple est d’alterner Kirghizistan, Kazakhstan et Ouzbékistan.',
      hacks: [
        'Construisez un long voyage en Asie centrale par blocs : 30 jours au Kirghizistan, puis le Kazakhstan (30 jours par entrée, 90 sur 180) et l’Ouzbékistan (30 jours). Le poste d’Ak-Zhol – Korday, à 20 minutes de Bichkek, est ouvert jour et nuit.',
        'Les zones frontalières — Inyltchek, Khan Tengri, Sary-Djaz et les abords du Torugart — exigent un permis spécifique. Une agence locale l’obtient en une dizaine de jours ouvrés.',
        'Le col du Torugart vers la Chine n’est ouvert aux touristes qu’avec un transport réservé côté chinois ; Irkechtam, depuis Och, est le passage le plus simple.',
        'Les cartes Visa et Mastercard occidentales fonctionnent aux distributeurs de Bichkek et Karakol, mais en montagne et sur les estives il faut des soms en espèces : retirez avant de partir.',
      ],
      pitfalls: [
        'Beaucoup de sites parlent encore de 60 jours sans visa ; cette règle a pris fin fin 2025. Dépassez les 30 jours et vous paierez une amende à la sortie.',
        'Les sites intermédiaires facturent l’e-visa nettement plus cher ; le portail officiel est evisa.e-gov.kg.',
        'Si vous restez au-delà de la durée sans visa pour travailler ou étudier, l’enregistrement sous 5 jours ouvrés est obligatoire, sous peine d’amende.',
      ],
      passports: {
        RU: 'Les citoyens russes peuvent entrer avec le passeport intérieur et rester 90 jours sur 180. Les cartes Visa et Mastercard russes ne fonctionnent pas et Mir est rarement acceptée : prévoyez des espèces, les roubles se changent dans tous les bureaux.',
        IN: 'Les citoyens indiens ont besoin d’un e-visa : déposez la demande sur evisa.e-gov.kg au moins une semaine avant le départ.',
        CN: 'Les citoyens chinois ont besoin d’un e-visa ou d’un visa consulaire ; pour le Torugart, organisez le transport à l’avance.',
        UZ: 'Les citoyens ouzbeks peuvent rester sans visa jusqu’à 60 jours sur 120.',
      },
    },
    it: {
      summary:
        'I cittadini di Russia, Bielorussia, Kazakistan e Armenia entrano senza visto per 90 giorni su 180. Dal 31 dicembre 2025 quelli di Stati Uniti, Regno Unito, UE, Giappone, Corea e una cinquantina di altri paesi hanno 30 giorni in qualsiasi periodo di 60, non più 60 giorni. Indiani, cinesi e molti cittadini di Asia e Africa hanno bisogno del visto elettronico.',
      apply:
        'Il visto elettronico si richiede su evisa.e-gov.kg: modulo, foto, scansione del passaporto e pagamento con carta, di solito in 3–5 giorni lavorativi. La tassa dipende dal tipo di visto e cambia, quindi controllala sul portale prima di pagare. Chi entra senza visto non presenta nulla in anticipo, e i turisti entro il periodo senza visto sono di norma esenti dalla registrazione.',
      visaRun:
        'Per la maggior parte dei passaporti occidentali il visa run serve a poco: la regola dei 30 giorni su 60 obbliga, dopo un mese nel paese, a passarne altrettanti fuori. Anche per russi e altri cittadini dell’UEEA uscire non azzera i 90 giorni su 180. La soluzione pratica è alternare Kirghizistan, Kazakistan e Uzbekistan.',
      hacks: [
        'Organizza un lungo viaggio in Asia centrale a blocchi: 30 giorni in Kirghizistan, poi Kazakistan (30 giorni per ingresso, 90 su 180) e Uzbekistan (30 giorni). Il valico di Ak-Zhol – Korday, a 20 minuti da Biškek, è aperto 24 ore su 24.',
        'Le zone di confine — Inylchek, Khan Tengri, Sary-Jaz e i dintorni del Torugart — richiedono un permesso a parte. Un’agenzia locale lo ottiene in circa 10 giorni lavorativi.',
        'Il passo del Torugart verso la Cina è aperto ai turisti solo con trasporto prenotato sul lato cinese; Irkeshtam, raggiungibile da Oš, è il valico più semplice.',
        'Le Visa e Mastercard occidentali funzionano agli sportelli di Biškek e Karakol, ma in montagna e sui pascoli estivi servono som in contanti: prelevali prima.',
      ],
      pitfalls: [
        'Molti siti parlano ancora di 60 giorni senza visto; quella regola è finita a fine 2025. Se superi i 30 giorni, paghi una multa all’uscita.',
        'I siti intermediari fanno pagare il visto elettronico molto di più; il portale ufficiale è evisa.e-gov.kg.',
        'Se resti oltre il periodo senza visto per lavoro o studio, la registrazione entro 5 giorni lavorativi è obbligatoria, pena una multa.',
      ],
      passports: {
        RU: 'I cittadini russi possono entrare con il passaporto interno e restare 90 giorni su 180. Le Visa e Mastercard russe non funzionano e Mir è accettata di rado: porta contanti, i rubli si cambiano in qualsiasi ufficio di cambio.',
        IN: 'I cittadini indiani hanno bisogno del visto elettronico: richiedilo su evisa.e-gov.kg almeno una settimana prima del viaggio.',
        CN: 'I cittadini cinesi hanno bisogno di un visto elettronico o consolare; per il Torugart organizza il trasporto in anticipo.',
        UZ: 'I cittadini uzbeki possono restare senza visto fino a 60 giorni su 120.',
      },
    },
  },
};

export default guide;
