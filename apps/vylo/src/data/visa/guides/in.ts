import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'IN',
  checked: '2026-10',
  fees: {
    evisa: { kind: 'from', amount: 10, currency: 'USD' },
    voa: { kind: 'fixed', amount: 2000, currency: 'INR' },
  },
  stay: { evisa: 30, voa: 60 },
  links: { evisa: 'https://indianvisaonline.gov.in/evisa/', immigration: 'https://boi.gov.in' },
  forms: [{ name: 'e-Arrival Card', url: 'https://indianvisaonline.gov.in' }],
  docs: ['returnTicket'],
  passportMonths: 6,
  visaRun: 'limited',
  borders: [
    { name: 'Sonauli – Belahiya', to: 'NP', lat: 27.4697, lng: 83.4643 },
    { name: 'Raxaul – Birgunj', to: 'NP', lat: 27.008, lng: 84.8777 },
    { name: 'Panitanki – Kakarbhitta', to: 'NP', lat: 26.6447, lng: 88.158 },
  ],
  transit: { hours: 24 },
  hackScope: [['regime:evisa'], null, null, ['regime:evisa']],
  pitfallScope: [['regime:evisa', 'regime:required'], ['regime:evisa'], ['regime:evisa', 'regime:required']],
  text: {
    ru: {
      summary:
        'Почти всем иностранцам, включая граждан России, США, Великобритании и ЕС, нужна электронная виза: e-Tourist на 30 дней, на 1 год или на 5 лет. Граждане Японии и Кореи могут получить визу по прилёте, а граждане ОАЭ — тоже, если у них уже была индийская виза. Граждане Непала и Бутана въезжают без визы.',
      apply:
        'Подавайте на indianvisaonline.gov.in не позже чем за 4 дня до прилёта: анкета, фото на белом фоне, скан страницы паспорта, оплата картой (плюс банковская комиссия около 2,5–3 %). Цена зависит от паспорта и сезона: для большинства 30-дневная виза стоит 25 $ (10 $ с апреля по июнь), годовая — 40 $, пятилетняя — 80 $, но для некоторых стран тарифы другие — точную сумму портал покажет перед оплатой. 30-дневная виза двукратная и отсчитывается со дня въезда; годовая и пятилетняя — многократные, до 90 дней за визит (до 180 для граждан США, Великобритании, Канады и Японии).',
      visaRun:
        'Визаран ограничен: с годовой или пятилетней визой можно выехать и вернуться, но каждый визит не дольше 90 (или 180) дней, а продлить туристическую e-визу в стране нельзя. Удобно съездить в Непал по суше, но вернуться в Индию по электронной визе можно только через аэропорт или морской порт из официального списка.',
      transit:
        'Безвизовый транзит до 24 часов возможен только в транзитной зоне аэропортов (например, Дели и Мумбаи), если вы не проходите паспортный контроль и стыковка оформлена одним билетом.',
      hacks: [
        'С апреля по июнь 30-дневная e-виза для большинства паспортов стоит 10 $ вместо 25 $. А если планируете две поездки за год, годовая за 40 $ выгоднее двух 30-дневных.',
        'С октября 2025 года бумажную миграционную карту заменила электронная e-Arrival Card — заполните её онлайн за 72 часа до прилёта, и очередь на контроле пройдёт быстрее.',
        'Для Сиккима, части Ладакха и северо-востока нужны пропуска в охраняемые районы: сиккимский оформляют бесплатно на въезде в Рангпо или онлайн, остальные — через местные агентства.',
        'Окно подачи ограничено: на 30-дневную визу — не раньше чем за 30 дней до прилёта, на годовую и пятилетнюю — за 120 дней. Если поездка дальше, просто поставьте напоминание.',
      ],
      pitfalls: [
        'Сайты-посредники с похожими адресами берут в 2–5 раз больше. Официальный адрес — indianvisaonline.gov.in, и на нём нет «срочной обработки» за доплату.',
        'По электронной визе нельзя въехать по суше — из Непала или Бангладеш, — только через аэропорт или порт из списка. Выезжать при этом можно через любой пункт.',
        'Фото с тенью, в очках или на сером фоне — частая причина отказа. Сделайте снимок на белом фоне, анфас, без очков.',
      ],
      passports: {
        RU: 'Россияне оформляют e-визу на общих основаниях; прямые рейсы «Аэрофлота» летают в Дели и в сезон на Гоа. Российские карты в Индии не работают: везите доллары или евро и меняйте в банках, сохраняя чеки.',
        US: 'Граждане США могут оставаться до 180 дней за визит по годовой и пятилетней e-визе. Тариф на пятилетнюю визу для США отличается от стандартного — проверьте его на портале.',
        GB: 'Граждане Великобритании также могут находиться до 180 дней за визит по долгосрочной e-визе; тарифы для них периодически меняются — сверяйтесь с порталом.',
        JP: 'Граждане Японии могут получить визу по прилёте (2000 рупий, до 60 дней) в крупных аэропортах, но e-виза избавит от очереди.',
        CN: 'С июля 2025 года Индия снова выдаёт туристические визы гражданам Китая через посольство и консульства; уточните, открыта ли для вас электронная виза, перед подачей.',
      },
    },
    en: {
      summary:
        'Almost every foreigner, including Russian, US, UK and EU citizens, needs an e-visa: the e-Tourist visa for 30 days, 1 year or 5 years. Japanese and Korean citizens can get a visa on arrival, as can UAE citizens who have held an Indian visa before. Nepalese and Bhutanese citizens enter visa-free.',
      apply:
        'Apply on indianvisaonline.gov.in at least 4 days before arrival: form, photo on a white background, passport page scan and card payment (plus a bank charge of about 2.5–3%). The fee depends on your passport and the season: for most, the 30-day visa costs $25 ($10 from April to June), the 1-year $40 and the 5-year $80, but some nationalities pay different rates — the portal shows the exact amount before you pay. The 30-day visa is double-entry and runs from your arrival date; the 1- and 5-year visas are multiple-entry, with up to 90 days per visit (180 for US, UK, Canadian and Japanese citizens).',
      visaRun:
        'Visa runs are limited: on a 1- or 5-year visa you can leave and return, but each visit is capped at 90 (or 180) days, and tourist e-visas cannot be extended in India. A trip to Nepal overland is easy, but on an e-visa you can come back into India only through a listed airport or seaport.',
      transit:
        'Visa-free transit of up to 24 hours is possible only airside at airports such as Delhi and Mumbai, provided you do not pass immigration and the connection is on a single ticket.',
      hacks: [
        'From April to June, the 30-day e-visa costs $10 instead of $25 for most passports. And if you plan two trips in a year, the $40 one-year visa beats two 30-day ones.',
        'Since October 2025 the paper arrival card has been replaced by the online e-Arrival Card — fill it in within 72 hours before landing and the immigration queue moves faster.',
        'Sikkim, parts of Ladakh and the northeast require protected-area permits: Sikkim’s is free at the Rangpo entry point or online, the others go through local agencies.',
        'The application window is limited: no earlier than 30 days before arrival for the 30-day visa, and 120 days for the 1- and 5-year ones. If your trip is further off, just set a reminder.',
      ],
      pitfalls: [
        'Look-alike agency sites charge two to five times more. The official address is indianvisaonline.gov.in, and it has no paid “express processing”.',
        'An e-visa does not let you enter overland from Nepal or Bangladesh — only through a listed airport or seaport. You can, however, leave through any checkpoint.',
        'Photos with shadows, glasses or a grey background are a common reason for rejection. Use a front-facing shot on white, without glasses.',
      ],
      passports: {
        RU: 'Russian citizens apply for the e-visa as usual; Aeroflot flies direct to Delhi and, in season, to Goa. Russian cards do not work in India, so bring dollars or euros and change them at banks, keeping the receipts.',
        US: 'US citizens can stay up to 180 days per visit on the 1- and 5-year e-visas. The 5-year fee for US passports differs from the standard rate — check it on the portal.',
        GB: 'UK citizens can also stay up to 180 days per visit on long-term e-visas; their fees change from time to time, so check the portal.',
        JP: 'Japanese citizens can get a visa on arrival (INR 2,000, up to 60 days) at major airports, but an e-visa saves you the queue.',
        CN: 'Since July 2025 India has again been issuing tourist visas to Chinese citizens through its embassy and consulates; check whether the e-visa is open to you before applying.',
      },
    },
    es: {
      summary:
        'Casi todos los extranjeros, incluidos rusos, estadounidenses, británicos y ciudadanos de la UE, necesitan visado electrónico: el e-Tourist de 30 días, 1 año o 5 años. Japoneses y coreanos pueden obtener visado a la llegada, igual que los ciudadanos de los EAU que ya hayan tenido un visado indio. Los ciudadanos de Nepal y Bután entran sin visado.',
      apply:
        'Solicítalo en indianvisaonline.gov.in al menos 4 días antes de llegar: formulario, foto con fondo blanco, copia de la página del pasaporte y pago con tarjeta (más una comisión bancaria de un 2,5–3 %). El precio depende del pasaporte y la temporada: para la mayoría, el de 30 días cuesta 25 $ (10 $ de abril a junio), el de 1 año 40 $ y el de 5 años 80 $, pero algunas nacionalidades pagan otras tarifas; el portal muestra el importe exacto antes de pagar. El de 30 días es de doble entrada y cuenta desde la llegada; los de 1 y 5 años son de entradas múltiples, con hasta 90 días por visita (180 para ciudadanos de EE. UU., Reino Unido, Canadá y Japón).',
      visaRun:
        'El visa run tiene límites: con un visado de 1 o 5 años puedes salir y volver, pero cada visita tiene un máximo de 90 (o 180) días, y el visado turístico electrónico no se prorroga en India. Ir a Nepal por tierra es fácil, pero con visado electrónico solo puedes volver a entrar por un aeropuerto o puerto de la lista.',
      transit:
        'El tránsito sin visado de hasta 24 horas solo es posible en la zona de tránsito de aeropuertos como Delhi y Bombay, siempre que no pases inmigración y la conexión vaya en un único billete.',
      hacks: [
        'De abril a junio, el visado de 30 días cuesta 10 $ en lugar de 25 $ para la mayoría de los pasaportes. Y si planeas dos viajes en un año, el anual de 40 $ sale mejor que dos de 30 días.',
        'Desde octubre de 2025 la tarjeta de llegada en papel se sustituyó por la e-Arrival Card en línea: rellénala en las 72 horas previas al aterrizaje y pasarás inmigración más rápido.',
        'Sikkim, parte de Ladakh y el noreste exigen permisos de zona protegida: el de Sikkim es gratuito en el puesto de Rangpo o en línea; los demás se tramitan con agencias locales.',
        'El plazo para solicitarlo es limitado: el de 30 días, como pronto 30 días antes de llegar; los de 1 y 5 años, hasta 120 días antes. Si el viaje queda más lejos, ponte un recordatorio.',
      ],
      pitfalls: [
        'Las webs intermediarias con direcciones parecidas cobran de dos a cinco veces más. La dirección oficial es indianvisaonline.gov.in, y no ofrece «tramitación urgente» de pago.',
        'Con visado electrónico no puedes entrar por tierra desde Nepal o Bangladés, solo por un aeropuerto o puerto de la lista. Salir, en cambio, puedes por cualquier puesto.',
        'Las fotos con sombras, gafas o fondo gris son motivo habitual de rechazo. Usa una foto de frente, con fondo blanco y sin gafas.',
      ],
      passports: {
        RU: 'Los ciudadanos rusos piden el visado electrónico como cualquiera; Aeroflot vuela directo a Delhi y, en temporada, a Goa. Las tarjetas rusas no funcionan en India: lleva dólares o euros y cámbialos en bancos guardando los recibos.',
        US: 'Los estadounidenses pueden quedarse hasta 180 días por visita con los visados electrónicos de 1 y 5 años. La tarifa del de 5 años para EE. UU. es distinta de la estándar: compruébala en el portal.',
        GB: 'Los británicos también pueden quedarse hasta 180 días por visita con visados de larga duración; sus tarifas cambian de vez en cuando, así que consulta el portal.',
        JP: 'Los ciudadanos japoneses pueden obtener visado a la llegada (2000 rupias, hasta 60 días) en los grandes aeropuertos, pero el visado electrónico te ahorra la cola.',
        CN: 'Desde julio de 2025 India vuelve a expedir visados turísticos a ciudadanos chinos a través de su embajada y consulados; comprueba si tienes acceso al visado electrónico antes de solicitarlo.',
      },
    },
    de: {
      summary:
        'Fast alle Ausländer, auch Russen, US-Bürger, Briten und EU-Bürger, brauchen ein E-Visum: das e-Tourist-Visum für 30 Tage, 1 Jahr oder 5 Jahre. Japaner und Koreaner bekommen ein Visum bei Ankunft, ebenso VAE-Bürger, die schon einmal ein indisches Visum hatten. Bürger Nepals und Bhutans reisen visumfrei ein.',
      apply:
        'Beantrage es auf indianvisaonline.gov.in spätestens 4 Tage vor der Ankunft: Formular, Foto vor weißem Hintergrund, Scan der Passseite und Kartenzahlung (plus etwa 2,5–3 % Bankgebühr). Der Preis hängt von Pass und Saison ab: Für die meisten kostet das 30-Tage-Visum 25 $ (10 $ von April bis Juni), das Jahresvisum 40 $ und das Fünfjahresvisum 80 $, manche Nationalitäten zahlen aber andere Sätze – das Portal zeigt den genauen Betrag vor der Zahlung. Das 30-Tage-Visum gilt für zwei Einreisen ab dem Ankunftstag; Jahres- und Fünfjahresvisa erlauben mehrere Einreisen mit bis zu 90 Tagen pro Besuch (180 für Bürger der USA, Großbritanniens, Kanadas und Japans).',
      visaRun:
        'Visa-Runs sind begrenzt: Mit einem Jahres- oder Fünfjahresvisum kannst du aus- und wieder einreisen, jeder Besuch ist aber auf 90 (bzw. 180) Tage begrenzt, und touristische E-Visa lassen sich in Indien nicht verlängern. Ein Abstecher nach Nepal über Land ist einfach, mit E-Visum kommst du aber nur über einen gelisteten Flug- oder Seehafen zurück nach Indien.',
      transit:
        'Visumfreier Transit bis 24 Stunden ist nur im Transitbereich von Flughäfen wie Delhi und Mumbai möglich, wenn du nicht durch die Passkontrolle gehst und der Anschluss auf einem Ticket gebucht ist.',
      hacks: [
        'Von April bis Juni kostet das 30-Tage-E-Visum für die meisten Pässe 10 $ statt 25 $. Und wer zwei Reisen im Jahr plant, fährt mit dem Jahresvisum für 40 $ besser als mit zwei 30-Tage-Visa.',
        'Seit Oktober 2025 ersetzt die Online-e-Arrival-Card die Einreisekarte aus Papier – füll sie in den 72 Stunden vor der Landung aus, dann geht es an der Passkontrolle schneller.',
        'Sikkim, Teile Ladakhs und der Nordosten erfordern Genehmigungen für Schutzgebiete: Die für Sikkim gibt es kostenlos am Einreisepunkt Rangpo oder online, die übrigen über lokale Agenturen.',
        'Das Antragsfenster ist begrenzt: Das 30-Tage-Visum frühestens 30 Tage vor der Ankunft, Jahres- und Fünfjahresvisa bis zu 120 Tage vorher. Liegt die Reise weiter weg, stell dir einfach eine Erinnerung.',
      ],
      pitfalls: [
        'Vermittlerseiten mit ähnlicher Adresse verlangen das Zwei- bis Fünffache. Die offizielle Adresse ist indianvisaonline.gov.in, und dort gibt es keine kostenpflichtige „Expressbearbeitung“.',
        'Mit E-Visum darfst du nicht über Land aus Nepal oder Bangladesch einreisen, sondern nur über einen gelisteten Flug- oder Seehafen. Ausreisen kannst du dagegen über jeden Übergang.',
        'Fotos mit Schatten, Brille oder grauem Hintergrund sind ein häufiger Ablehnungsgrund. Nimm ein frontales Bild vor Weiß, ohne Brille.',
      ],
      passports: {
        RU: 'Russische Staatsangehörige beantragen das E-Visum ganz normal; Aeroflot fliegt direkt nach Delhi und in der Saison nach Goa. Russische Karten funktionieren in Indien nicht – nimm Dollar oder Euro mit und tausche bei Banken, die Belege aufbewahren.',
        US: 'US-Bürger dürfen mit Jahres- und Fünfjahres-E-Visum bis zu 180 Tage pro Besuch bleiben. Die Gebühr für das Fünfjahresvisum weicht für US-Pässe vom Standard ab – prüfe sie im Portal.',
        GB: 'Auch Briten dürfen mit Langzeit-E-Visa bis zu 180 Tage pro Besuch bleiben; ihre Gebühren ändern sich ab und zu, also prüfe das Portal.',
        JP: 'Japanische Staatsangehörige bekommen an großen Flughäfen ein Visum bei Ankunft (2.000 Rupien, bis 60 Tage), ein E-Visum erspart aber die Warteschlange.',
        CN: 'Seit Juli 2025 stellt Indien chinesischen Staatsangehörigen über Botschaft und Konsulate wieder Touristenvisa aus; prüfe vor dem Antrag, ob das E-Visum für dich offen ist.',
      },
    },
    fr: {
      summary:
        'Presque tous les étrangers, y compris les Russes, Américains, Britanniques et citoyens de l’UE, ont besoin d’un e-visa : l’e-Tourist de 30 jours, 1 an ou 5 ans. Les Japonais et les Coréens peuvent obtenir un visa à l’arrivée, de même que les citoyens émiriens ayant déjà eu un visa indien. Les citoyens népalais et bhoutanais entrent sans visa.',
      apply:
        'Faites la demande sur indianvisaonline.gov.in au moins 4 jours avant l’arrivée : formulaire, photo sur fond blanc, scan de la page du passeport et paiement par carte (plus environ 2,5 à 3 % de frais bancaires). Le tarif dépend du passeport et de la saison : pour la plupart, le visa de 30 jours coûte 25 $ (10 $ d’avril à juin), celui d’un an 40 $ et celui de 5 ans 80 $, mais certaines nationalités paient d’autres montants — le portail affiche le prix exact avant paiement. Le visa de 30 jours est à double entrée et court à partir de l’arrivée ; ceux d’un et 5 ans sont à entrées multiples, jusqu’à 90 jours par séjour (180 pour les citoyens américains, britanniques, canadiens et japonais).',
      visaRun:
        'Le visa run est limité : avec un visa d’un ou 5 ans, vous pouvez sortir et revenir, mais chaque séjour est plafonné à 90 (ou 180) jours, et l’e-visa touristique ne se prolonge pas en Inde. Un saut au Népal par la route est facile, mais avec un e-visa on ne peut revenir en Inde que par un aéroport ou un port de la liste.',
      transit:
        'Le transit sans visa jusqu’à 24 heures n’est possible qu’en zone de transit d’aéroports comme Delhi et Mumbai, si vous ne passez pas l’immigration et que la correspondance figure sur un billet unique.',
      hacks: [
        'D’avril à juin, l’e-visa de 30 jours coûte 10 $ au lieu de 25 $ pour la plupart des passeports. Et si vous prévoyez deux voyages dans l’année, le visa d’un an à 40 $ est plus avantageux que deux visas de 30 jours.',
        'Depuis octobre 2025, la carte d’arrivée papier est remplacée par l’e-Arrival Card en ligne : remplissez-la dans les 72 heures avant l’atterrissage, le passage à l’immigration sera plus rapide.',
        'Le Sikkim, une partie du Ladakh et le Nord-Est exigent des permis de zones protégées : celui du Sikkim est gratuit au poste de Rangpo ou en ligne, les autres passent par des agences locales.',
        'La fenêtre de dépôt est limitée : pas plus de 30 jours avant l’arrivée pour le visa de 30 jours, 120 jours pour ceux d’un et 5 ans. Si le voyage est plus lointain, programmez un rappel.',
      ],
      pitfalls: [
        'Des sites intermédiaires aux adresses ressemblantes facturent deux à cinq fois plus cher. L’adresse officielle est indianvisaonline.gov.in, sans « traitement express » payant.',
        'L’e-visa ne permet pas d’entrer par voie terrestre depuis le Népal ou le Bangladesh, seulement par un aéroport ou un port de la liste. En revanche, on peut sortir par n’importe quel poste.',
        'Les photos avec ombre, lunettes ou fond gris sont une cause fréquente de refus. Utilisez une photo de face, sur fond blanc, sans lunettes.',
      ],
      passports: {
        RU: 'Les citoyens russes demandent l’e-visa normalement ; Aeroflot dessert Delhi en direct et Goa en saison. Les cartes russes ne fonctionnent pas en Inde : apportez des dollars ou des euros et changez-les en banque en gardant les reçus.',
        US: 'Les citoyens américains peuvent rester jusqu’à 180 jours par séjour avec les e-visas d’un et 5 ans. Le tarif du visa de 5 ans diffère pour les passeports américains — vérifiez-le sur le portail.',
        GB: 'Les Britanniques peuvent aussi rester jusqu’à 180 jours par séjour avec un e-visa longue durée ; leurs tarifs changent de temps à autre, vérifiez sur le portail.',
        JP: 'Les citoyens japonais peuvent obtenir un visa à l’arrivée (2 000 roupies, jusqu’à 60 jours) dans les grands aéroports, mais l’e-visa évite la file d’attente.',
        CN: 'Depuis juillet 2025, l’Inde délivre de nouveau des visas touristiques aux citoyens chinois via son ambassade et ses consulats ; vérifiez avant de déposer si l’e-visa vous est ouvert.',
      },
    },
    it: {
      summary:
        'Quasi tutti gli stranieri, compresi russi, statunitensi, britannici e cittadini UE, hanno bisogno del visto elettronico: l’e-Tourist da 30 giorni, 1 anno o 5 anni. Giapponesi e coreani possono ottenere il visto all’arrivo, così come i cittadini degli Emirati che abbiano già avuto un visto indiano. I cittadini di Nepal e Bhutan entrano senza visto.',
      apply:
        'Fai domanda su indianvisaonline.gov.in almeno 4 giorni prima dell’arrivo: modulo, foto su sfondo bianco, scansione della pagina del passaporto e pagamento con carta (più una commissione bancaria di circa il 2,5–3 %). Il prezzo dipende da passaporto e stagione: per la maggior parte il visto da 30 giorni costa 25 $ (10 $ da aprile a giugno), quello annuale 40 $ e quello quinquennale 80 $, ma alcune nazionalità pagano tariffe diverse; il portale mostra l’importo esatto prima del pagamento. Il visto da 30 giorni è a doppio ingresso e decorre dall’arrivo; quelli da 1 e 5 anni sono a ingressi multipli, fino a 90 giorni per visita (180 per cittadini di Stati Uniti, Regno Unito, Canada e Giappone).',
      visaRun:
        'Il visa run ha dei limiti: con un visto da 1 o 5 anni puoi uscire e rientrare, ma ogni visita è limitata a 90 (o 180) giorni, e il visto turistico elettronico non si proroga in India. Una puntata in Nepal via terra è facile, ma con il visto elettronico puoi rientrare in India solo da un aeroporto o porto della lista.',
      transit:
        'Il transito senza visto fino a 24 ore è possibile solo nella zona di transito di aeroporti come Delhi e Mumbai, se non passi l’immigrazione e la coincidenza è su un unico biglietto.',
      hacks: [
        'Da aprile a giugno il visto elettronico da 30 giorni costa 10 $ invece di 25 $ per la maggior parte dei passaporti. E se pensi di fare due viaggi in un anno, quello annuale da 40 $ conviene più di due da 30 giorni.',
        'Da ottobre 2025 la carta di sbarco cartacea è stata sostituita dalla e-Arrival Card online: compilala nelle 72 ore prima dell’atterraggio e la coda all’immigrazione sarà più rapida.',
        'Sikkim, parte del Ladakh e il nord-est richiedono permessi per aree protette: quello del Sikkim è gratuito al posto di Rangpo o online, gli altri passano dalle agenzie locali.',
        'La finestra per la domanda è limitata: non prima di 30 giorni dall’arrivo per il visto da 30 giorni, 120 giorni per quelli da 1 e 5 anni. Se il viaggio è più lontano, imposta un promemoria.',
      ],
      pitfalls: [
        'I siti intermediari con indirizzi simili fanno pagare da due a cinque volte di più. L’indirizzo ufficiale è indianvisaonline.gov.in, e non prevede alcuna «procedura urgente» a pagamento.',
        'Con il visto elettronico non si entra via terra da Nepal o Bangladesh, ma solo da un aeroporto o porto della lista. Uscire invece si può da qualsiasi valico.',
        'Foto con ombre, occhiali o sfondo grigio sono un motivo frequente di rifiuto. Usa una foto frontale su sfondo bianco, senza occhiali.',
      ],
      passports: {
        RU: 'I cittadini russi chiedono il visto elettronico come tutti; Aeroflot vola diretto a Delhi e, in stagione, a Goa. Le carte russe in India non funzionano: porta dollari o euro e cambiali in banca conservando le ricevute.',
        US: 'I cittadini statunitensi possono restare fino a 180 giorni per visita con i visti elettronici da 1 e 5 anni. La tariffa del quinquennale per i passaporti USA è diversa da quella standard: controllala sul portale.',
        GB: 'Anche i britannici possono restare fino a 180 giorni per visita con i visti di lunga durata; le loro tariffe cambiano di tanto in tanto, quindi verifica sul portale.',
        JP: 'I cittadini giapponesi possono ottenere il visto all’arrivo (2000 rupie, fino a 60 giorni) nei grandi aeroporti, ma il visto elettronico ti evita la coda.',
        CN: 'Da luglio 2025 l’India rilascia di nuovo visti turistici ai cittadini cinesi tramite ambasciata e consolati; verifica prima della domanda se il visto elettronico è disponibile per te.',
      },
    },
  },
};

export default guide;
