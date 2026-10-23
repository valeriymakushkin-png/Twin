import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'AZ',
  checked: '2026-10',
  fees: { evisa: { kind: 'from', amount: 25, currency: 'USD' } },
  stay: { evisa: 30, voa: 30 },
  links: { evisa: 'https://evisa.gov.az', immigration: 'https://migration.gov.az' },
  docs: ['returnTicket'],
  passportMonths: 3,
  visaRun: 'limited',
  text: {
    ru: {
      summary:
        'Граждане России, Украины, Беларуси, Казахстана, Грузии, Турции, ОАЭ и большинства стран СНГ находятся в Азербайджане без визы 90 дней, граждане Китая — 30. Гражданам ЕС, Великобритании, США, Канады, Индии и большинства других стран нужна электронная виза ASAN (30 дней, около 25 $); японцы, корейцы, израильтяне и граждане ряда стран Залива могут получить визу по прилёте. Сухопутные границы закрыты для пассажиров с 2020 года, поэтому почти все прилетают самолётом.',
      apply:
        'Подавайте только на evisa.gov.az (ASAN Visa): анкета, скан паспорта, оплата картой. Обычное рассмотрение — до 3 рабочих дней (около 25 $ со сервисным сбором), срочное — за 3 часа (около 60 $). Виза однократная, действует 90 дней и даёт 30 дней пребывания. Распечатайте её или держите PDF в телефоне.',
      visaRun:
        'Пока сухопутные границы закрыты, выехать и вернуться можно только самолётом (например, Баку — Тбилиси или Баку — Стамбул) или поездом Тбилиси — Баку. Владельцы e-визы после выезда могут оформить новую; у безвизовых граждан СНГ лимит 90 дней, и частые поездки «впритык» вызывают вопросы.',
      hacks: [
        'С 26 мая 2026 года снова ходит ночной поезд Тбилиси — Баку (из Тбилиси в 21:00, в Баку в 06:24) — пока единственный способ въехать по суше; автомобильные переходы вроде Красного моста закрыты для пассажиров. Перед покупкой билета уточните, пускают ли поездом с вашим паспортом.',
        'Прилетевшим самолётом разрешено выехать по суше — например, прилететь в Баку и уехать в Грузию через Красный мост (Qırmızı Körpü).',
        'Граждане США, летящие прямым рейсом AZAL Нью-Йорк — Баку, могут получить визу по прилёте.',
        'Срочная e-виза за 3 часа выручает при поездке в последний момент — обычная может занять до трёх рабочих дней.',
      ],
      pitfalls: [
        'При пребывании дольше 15 дней нужна регистрация в Государственной миграционной службе: отели делают её сами, в съёмном жилье — онлайн на migration.gov.az. Иначе штраф.',
        'Кто посещал Нагорный Карабах без разрешения Баку (до 2023 года), внесён в список нежелательных лиц, и во въезде откажут. Армянские штампы сами по себе большинству иностранцев не мешают.',
        'Граждан Армении не впускают, а людям армянского происхождения с любым паспортом на практике обычно отказывают во въезде.',
        'Сайты-двойники ASAN Visa берут в разы больше. Официальный адрес — evisa.gov.az.',
      ],
      passports: {
        RU: 'Россияне — 90 дней без визы. Сухопутная граница с Россией (Яраг-Казмаляр — Самур) закрыта для пассажиров, поэтому летите: AZAL и российские авиакомпании летают Москва — Баку, но часть региональных рейсов после 2024 года сократили. Не забудьте о регистрации через 15 дней.',
        AM: 'Граждан Армении в Азербайджан не впускают.',
        US: 'Гражданам США нужна e-виза; при перелёте прямым рейсом AZAL из Нью-Йорка можно получить визу по прилёте.',
        IN: 'Гражданам Индии нужна e-виза ASAN — обычно её одобряют за 3 рабочих дня.',
        CN: 'Граждане Китая — 30 дней без визы.',
      },
    },
    en: {
      summary:
        'Citizens of Russia, Ukraine, Belarus, Kazakhstan, Georgia, Turkey, the UAE and most CIS countries stay in Azerbaijan visa-free for 90 days, and Chinese citizens for 30. EU, UK, US, Canadian, Indian and most other citizens need the ASAN e-visa (30 days, about $25); Japanese, Koreans, Israelis and some Gulf citizens can also get a visa on arrival. Land borders have been closed to passengers since 2020, so almost everyone flies in.',
      apply:
        'Apply only on evisa.gov.az (ASAN Visa): form, passport scan, payment by card. Standard processing takes up to 3 working days (about $25 including the service fee), urgent within 3 hours (about $60). The visa is single-entry, valid for 90 days and allows a 30-day stay. Print it or keep the PDF on your phone.',
      visaRun:
        'While land borders stay closed, leaving and coming back is only possible by air (for example Baku–Tbilisi or Baku–Istanbul) or on the Tbilisi–Baku train. E-visa holders can apply for a new one after leaving; visa-free CIS citizens have a 90-day limit, and frequent back-to-back stays raise questions.',
      hacks: [
        'Since 26 May 2026 the Tbilisi–Baku night train runs again (leaves Tbilisi 21:00, arrives Baku 06:24) — for now the only way to enter overland; road crossings such as Red Bridge stay closed to passengers. Check that your passport is accepted for entry by train before buying a ticket.',
        'If you arrive by air, you are allowed to leave by land — for example, fly into Baku and continue to Georgia via Red Bridge (Qırmızı Körpü).',
        'US citizens flying AZAL’s direct New York–Baku service can get a visa on arrival.',
        'The urgent e-visa in 3 hours saves last-minute trips — the standard one can take up to three working days.',
      ],
      pitfalls: [
        'Stays longer than 15 days require registration with the State Migration Service: hotels do it, in a rental you register online on migration.gov.az. Otherwise you’ll be fined.',
        'Anyone who visited Nagorno-Karabakh without Baku’s permission (before 2023) is on the unwanted-persons list and will be refused entry. Armenian stamps by themselves are no problem for most foreigners.',
        'Armenian citizens are not admitted, and people of Armenian descent on any passport are in practice usually refused entry.',
        'Look-alike ASAN Visa sites charge several times more. The official address is evisa.gov.az.',
      ],
      passports: {
        RU: 'Russians get 90 days visa-free. The land border with Russia (Yarag-Kazmalyar – Samur) is closed to passengers, so fly: AZAL and Russian airlines serve Moscow–Baku, though some regional routes were cut after 2024. Don’t forget to register after 15 days.',
        AM: 'Armenian citizens are not admitted to Azerbaijan.',
        US: 'US citizens need an e-visa; on AZAL’s direct flight from New York they can get a visa on arrival.',
        IN: 'Indian citizens need the ASAN e-visa — usually approved within 3 working days.',
        CN: 'Chinese citizens get 30 days visa-free.',
      },
    },
    es: {
      summary:
        'Los ciudadanos de Rusia, Ucrania, Bielorrusia, Kazajistán, Georgia, Turquía, los EAU y la mayoría de la CEI pasan en Azerbaiyán 90 días sin visado, y los chinos, 30. Los de la UE, Reino Unido, EE. UU., Canadá, India y casi todos los demás necesitan el visado electrónico ASAN (30 días, unos 25 $); japoneses, coreanos, israelíes y algunos ciudadanos del Golfo también pueden obtener visado a la llegada. Las fronteras terrestres están cerradas a los pasajeros desde 2020, así que casi todo el mundo llega en avión.',
      apply:
        'Solicítalo solo en evisa.gov.az (ASAN Visa): formulario, pasaporte escaneado y pago con tarjeta. La tramitación normal tarda hasta 3 días laborables (unos 25 $ con la tasa de servicio) y la urgente, 3 horas (unos 60 $). Es de una sola entrada, vale 90 días y permite 30 días de estancia. Imprímelo o lleva el PDF en el móvil.',
      visaRun:
        'Mientras las fronteras terrestres sigan cerradas, salir y volver solo es posible en avión (por ejemplo, Bakú–Tiflis o Bakú–Estambul) o en el tren Tiflis–Bakú. Quien tiene visado electrónico puede pedir otro tras salir; los ciudadanos de la CEI sin visado tienen un límite de 90 días, y encadenar estancias llama la atención.',
      hacks: [
        'Desde el 26 de mayo de 2026 vuelve a circular el tren nocturno Tiflis–Bakú (sale de Tiflis a las 21:00 y llega a Bakú a las 06:24), por ahora la única forma de entrar por tierra; los pasos por carretera, como el Puente Rojo, siguen cerrados a pasajeros. Antes de comprar el billete, comprueba que con tu pasaporte se permite la entrada en tren.',
        'Si llegas en avión, puedes salir por tierra: por ejemplo, volar a Bakú y seguir a Georgia por el Puente Rojo (Qırmızı Körpü).',
        'Los ciudadanos estadounidenses que vuelan en el directo de AZAL Nueva York–Bakú pueden obtener visado a la llegada.',
        'El visado electrónico urgente en 3 horas salva los viajes de última hora; el normal puede tardar hasta tres días laborables.',
      ],
      pitfalls: [
        'Las estancias de más de 15 días exigen registro en el Servicio Estatal de Migración: los hoteles lo hacen, y en un alquiler te registras en línea en migration.gov.az. Si no, hay multa.',
        'Quien visitó Nagorno Karabaj sin permiso de Bakú (antes de 2023) figura en la lista de personas no gratas y se le niega la entrada. Los sellos armenios por sí solos no suponen un problema para la mayoría de extranjeros.',
        'No se admite a los ciudadanos armenios, y a las personas de origen armenio, con cualquier pasaporte, en la práctica se les suele denegar la entrada.',
        'Las webs clonadas de ASAN Visa cobran varias veces más. La dirección oficial es evisa.gov.az.',
      ],
      passports: {
        RU: 'Los ciudadanos rusos tienen 90 días sin visado. La frontera terrestre con Rusia (Yarag-Kazmalyar – Samur) está cerrada a pasajeros, así que hay que volar: AZAL y aerolíneas rusas cubren Moscú–Bakú, aunque algunas rutas regionales se recortaron después de 2024. No olvides registrarte pasados 15 días.',
        AM: 'No se admite a los ciudadanos armenios en Azerbaiyán.',
        US: 'Los ciudadanos estadounidenses necesitan visado electrónico; en el vuelo directo de AZAL desde Nueva York pueden obtener visado a la llegada.',
        IN: 'Los ciudadanos indios necesitan el visado electrónico ASAN, que suele aprobarse en 3 días laborables.',
        CN: 'Los ciudadanos chinos tienen 30 días sin visado.',
      },
    },
    de: {
      summary:
        'Staatsangehörige Russlands, der Ukraine, von Belarus, Kasachstans, Georgiens, der Türkei, der VAE und der meisten GUS-Staaten bleiben 90 Tage visumfrei in Aserbaidschan, Chinesen 30. Bürger der EU, Großbritanniens, der USA, Kanadas, Indiens und der meisten anderen Länder brauchen das ASAN-E-Visum (30 Tage, etwa 25 $); Japaner, Koreaner, Israelis und einige Golfstaatenbürger können auch ein Visum bei Ankunft bekommen. Die Landgrenzen sind seit 2020 für Reisende geschlossen, fast alle kommen also per Flugzeug.',
      apply:
        'Beantrage es nur auf evisa.gov.az (ASAN Visa): Formular, Passscan, Zahlung per Karte. Die normale Bearbeitung dauert bis zu 3 Werktage (etwa 25 $ inklusive Servicegebühr), die Express-Variante 3 Stunden (etwa 60 $). Das Visum gilt für eine Einreise, 90 Tage lang, und erlaubt 30 Tage Aufenthalt. Druck es aus oder hab das PDF auf dem Handy.',
      visaRun:
        'Solange die Landgrenzen geschlossen sind, geht Aus- und Wiedereinreise nur per Flugzeug (etwa Baku–Tiflis oder Baku–Istanbul) oder mit dem Zug Tiflis–Baku. Mit E-Visum kannst du nach der Ausreise ein neues beantragen; visumfreie GUS-Bürger haben ein 90-Tage-Limit, und häufige Aufenthalte direkt hintereinander fallen auf.',
      hacks: [
        'Seit dem 26. Mai 2026 fährt wieder der Nachtzug Tiflis–Baku (ab Tiflis 21:00, an Baku 06:24) – vorerst der einzige Weg, auf dem Landweg einzureisen; Straßenübergänge wie die Rote Brücke bleiben für Reisende zu. Prüf vor dem Ticketkauf, ob die Einreise per Zug mit deinem Pass erlaubt ist.',
        'Wer per Flugzeug einreist, darf über Land ausreisen – etwa nach Baku fliegen und über die Rote Brücke (Qırmızı Körpü) nach Georgien weiterfahren.',
        'US-Bürger auf dem AZAL-Direktflug New York–Baku können ein Visum bei Ankunft erhalten.',
        'Das Express-E-Visum in 3 Stunden rettet spontane Reisen – das normale kann bis zu drei Werktage dauern.',
      ],
      pitfalls: [
        'Bei Aufenthalten über 15 Tage ist eine Anmeldung beim Staatlichen Migrationsdienst Pflicht: Hotels erledigen das, in einer Mietwohnung meldest du dich online auf migration.gov.az an. Sonst droht ein Bußgeld.',
        'Wer Bergkarabach ohne Genehmigung Bakus besucht hat (vor 2023), steht auf der Liste unerwünschter Personen und wird abgewiesen. Armenische Stempel allein sind für die meisten Ausländer kein Problem.',
        'Armenische Staatsangehörige werden nicht eingelassen, und Menschen armenischer Herkunft wird mit jedem Pass in der Praxis meist die Einreise verweigert.',
        'Nachgemachte ASAN-Visa-Seiten verlangen ein Vielfaches. Die offizielle Adresse ist evisa.gov.az.',
      ],
      passports: {
        RU: 'Russische Staatsangehörige haben 90 Tage visumfrei. Die Landgrenze zu Russland (Jarag-Kasmaljar – Samur) ist für Reisende geschlossen, also fliegen: AZAL und russische Airlines bedienen Moskau–Baku, einige Regionalstrecken wurden nach 2024 aber gestrichen. Denk an die Anmeldung nach 15 Tagen.',
        AM: 'Armenische Staatsangehörige werden in Aserbaidschan nicht eingelassen.',
        US: 'US-Bürger brauchen ein E-Visum; mit dem AZAL-Direktflug aus New York gibt es ein Visum bei Ankunft.',
        IN: 'Indische Staatsangehörige brauchen das ASAN-E-Visum – meist innerhalb von 3 Werktagen genehmigt.',
        CN: 'Chinesische Staatsangehörige haben 30 Tage visumfrei.',
      },
    },
    fr: {
      summary:
        'Les citoyens de Russie, d’Ukraine, de Biélorussie, du Kazakhstan, de Géorgie, de Turquie, des Émirats et de la plupart des pays de la CEI séjournent en Azerbaïdjan sans visa pendant 90 jours, les Chinois pendant 30. Les citoyens de l’UE, du Royaume-Uni, des États-Unis, du Canada, de l’Inde et de la plupart des autres pays ont besoin de l’e-visa ASAN (30 jours, environ 25 $) ; Japonais, Coréens, Israéliens et certains ressortissants du Golfe peuvent aussi obtenir un visa à l’arrivée. Les frontières terrestres sont fermées aux voyageurs depuis 2020 : presque tout le monde arrive en avion.',
      apply:
        'Faites la demande uniquement sur evisa.gov.az (ASAN Visa) : formulaire, scan du passeport, paiement par carte. Le traitement standard prend jusqu’à 3 jours ouvrés (environ 25 $ frais de service compris), l’urgent 3 heures (environ 60 $). Le visa est à entrée unique, valable 90 jours, pour un séjour de 30 jours. Imprimez-le ou gardez le PDF sur votre téléphone.',
      visaRun:
        'Tant que les frontières terrestres restent fermées, sortir et revenir n’est possible qu’en avion (Bakou–Tbilissi ou Bakou–Istanbul, par exemple) ou par le train Tbilissi–Bakou. Les titulaires d’un e-visa peuvent en demander un nouveau après la sortie ; les citoyens de la CEI exemptés de visa ont une limite de 90 jours, et les séjours enchaînés attirent l’attention.',
      hacks: [
        'Depuis le 26 mai 2026, le train de nuit Tbilissi–Bakou circule à nouveau (départ de Tbilissi à 21 h, arrivée à Bakou à 6 h 24) : c’est pour l’instant le seul moyen d’entrer par voie terrestre, les postes routiers comme le Pont rouge restant fermés aux voyageurs. Avant d’acheter le billet, vérifiez que l’entrée en train est admise avec votre passeport.',
        'Si vous arrivez en avion, vous avez le droit de repartir par la route : par exemple, atterrir à Bakou puis rejoindre la Géorgie par le Pont rouge (Qırmızı Körpü).',
        'Les citoyens américains qui prennent le vol direct AZAL New York–Bakou peuvent obtenir un visa à l’arrivée.',
        'L’e-visa urgent en 3 heures sauve les départs de dernière minute ; le standard peut prendre jusqu’à trois jours ouvrés.',
      ],
      pitfalls: [
        'Au-delà de 15 jours, il faut s’enregistrer auprès du Service national des migrations : les hôtels s’en chargent, en location on s’enregistre en ligne sur migration.gov.az. Sinon, amende.',
        'Quiconque a visité le Haut-Karabakh sans l’accord de Bakou (avant 2023) figure sur la liste des personnes indésirables et se voit refuser l’entrée. Les tampons arméniens seuls ne posent pas de problème à la plupart des étrangers.',
        'Les citoyens arméniens ne sont pas admis, et les personnes d’origine arménienne, quel que soit leur passeport, se voient en pratique généralement refuser l’entrée.',
        'Des copies du site ASAN Visa facturent plusieurs fois le prix. L’adresse officielle est evisa.gov.az.',
      ],
      passports: {
        RU: 'Les ressortissants russes ont 90 jours sans visa. La frontière terrestre avec la Russie (Iarag-Kazmaliar – Samur) est fermée aux voyageurs, il faut donc prendre l’avion : AZAL et des compagnies russes desservent Moscou–Bakou, mais certaines lignes régionales ont été supprimées après 2024. N’oubliez pas l’enregistrement au-delà de 15 jours.',
        AM: 'Les citoyens arméniens ne sont pas admis en Azerbaïdjan.',
        US: 'Les citoyens américains ont besoin d’un e-visa ; avec le vol direct AZAL depuis New York, ils peuvent obtenir un visa à l’arrivée.',
        IN: 'Les citoyens indiens ont besoin de l’e-visa ASAN, généralement accordé en 3 jours ouvrés.',
        CN: 'Les citoyens chinois ont 30 jours sans visa.',
      },
    },
    it: {
      summary:
        'I cittadini di Russia, Ucraina, Bielorussia, Kazakistan, Georgia, Turchia, Emirati e della maggior parte della CSI restano in Azerbaigian senza visto per 90 giorni, i cinesi per 30. I cittadini di UE, Regno Unito, Stati Uniti, Canada, India e quasi tutti gli altri hanno bisogno del visto elettronico ASAN (30 giorni, circa 25 $); giapponesi, coreani, israeliani e alcuni cittadini del Golfo possono anche ottenere il visto all’arrivo. I confini terrestri sono chiusi ai viaggiatori dal 2020, quindi quasi tutti arrivano in aereo.',
      apply:
        'Fai domanda solo su evisa.gov.az (ASAN Visa): modulo, scansione del passaporto, pagamento con carta. La procedura normale richiede fino a 3 giorni lavorativi (circa 25 $ con la commissione di servizio), quella urgente 3 ore (circa 60 $). Il visto è a ingresso singolo, vale 90 giorni e consente 30 giorni di permanenza. Stampalo o tieni il PDF sul telefono.',
      visaRun:
        'Finché i confini terrestri restano chiusi, uscire e rientrare è possibile solo in aereo (per esempio Baku–Tbilisi o Baku–Istanbul) o con il treno Tbilisi–Baku. Chi ha il visto elettronico può chiederne uno nuovo dopo l’uscita; i cittadini CSI senza visto hanno un limite di 90 giorni, e i soggiorni in serie attirano l’attenzione.',
      hacks: [
        'Dal 26 maggio 2026 è tornato il treno notturno Tbilisi–Baku (parte da Tbilisi alle 21:00, arriva a Baku alle 06:24): per ora l’unico modo di entrare via terra, mentre i valichi stradali come il Ponte Rosso restano chiusi ai viaggiatori. Prima di comprare il biglietto verifica che con il tuo passaporto sia consentito l’ingresso in treno.',
        'Se arrivi in aereo, puoi uscire via terra: per esempio volare a Baku e proseguire in Georgia dal Ponte Rosso (Qırmızı Körpü).',
        'I cittadini statunitensi che volano con il diretto AZAL New York–Baku possono ottenere il visto all’arrivo.',
        'Il visto elettronico urgente in 3 ore salva i viaggi dell’ultimo minuto; quello normale può richiedere fino a tre giorni lavorativi.',
      ],
      pitfalls: [
        'Per soggiorni oltre i 15 giorni serve la registrazione presso il Servizio statale per le migrazioni: gli hotel la fanno per te, in affitto ti registri online su migration.gov.az. Altrimenti scatta la multa.',
        'Chi ha visitato il Nagorno Karabakh senza permesso di Baku (prima del 2023) è nella lista delle persone indesiderate e viene respinto. I timbri armeni da soli non sono un problema per la maggior parte degli stranieri.',
        'I cittadini armeni non vengono ammessi, e alle persone di origine armena, con qualsiasi passaporto, nella pratica l’ingresso viene di solito negato.',
        'I siti clone di ASAN Visa fanno pagare molte volte di più. L’indirizzo ufficiale è evisa.gov.az.',
      ],
      passports: {
        RU: 'I cittadini russi hanno 90 giorni senza visto. Il confine terrestre con la Russia (Yarag-Kazmalyar – Samur) è chiuso ai viaggiatori, quindi si vola: AZAL e compagnie russe collegano Mosca e Baku, anche se alcune rotte regionali sono state tagliate dopo il 2024. Ricorda la registrazione dopo 15 giorni.',
        AM: 'I cittadini armeni non vengono ammessi in Azerbaigian.',
        US: 'I cittadini statunitensi hanno bisogno del visto elettronico; con il volo diretto AZAL da New York possono ottenere il visto all’arrivo.',
        IN: 'I cittadini indiani hanno bisogno del visto elettronico ASAN, di solito approvato in 3 giorni lavorativi.',
        CN: 'I cittadini cinesi hanno 30 giorni senza visto.',
      },
    },
  },
};

export default guide;
