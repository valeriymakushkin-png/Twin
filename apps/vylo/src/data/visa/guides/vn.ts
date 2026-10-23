import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'VN',
  checked: '2026-10',
  fees: { evisa: { kind: 'from', amount: 25, currency: 'USD' } },
  stay: { evisa: 90 },
  links: { evisa: 'https://evisa.gov.vn' },
  docs: ['returnTicket'],
  passportMonths: 6,
  visaRun: 'yes',
  borders: [
    { name: 'Moc Bai – Bavet', to: 'KH', lat: 11.0738, lng: 106.1771 },
    { name: 'Lao Bao – Dansavanh', to: 'LA', lat: 16.6255, lng: 106.5916 },
    { name: 'Tan Son Nhat (SGN) → Kuala Lumpur', to: 'MY', lat: 10.8185, lng: 106.6588 },
  ],
  text: {
    ru: {
      summary:
        'Граждане многих стран Европы (включая Россию, Германию, Францию, Италию и Испанию), Японии и Кореи въезжают без визы на 45 дней. Остальным, в том числе гражданам США, Канады, Австралии и Индии, нужна электронная виза до 90 дней — её получают онлайн за несколько дней.',
      apply:
        'Электронную визу оформляют только на официальном портале: заполняете анкету латиницей, загружаете фото паспорта и лица, платите картой и через 3–5 рабочих дней скачиваете PDF. Однократная виза стоит 25 $, многократная — 50 $. На границе показываете распечатку или файл в телефоне.',
      visaRun:
        'Визаран работает: после выезда безвизовые 45 дней начинаются заново, перерыв между поездками не нужен. Удобнее всего наземный переход Мокбай — Бавет в Камбоджу (2 часа от Хошимина) или дешёвый рейс в Куала-Лумпур и обратно. Камбоджийскую визу оформите заранее или получите на границе.',
      hacks: [
        'Остров Фукуок принимает всех иностранцев без визы на 30 дней, если прилететь туда напрямую международным рейсом, минуя другие аэропорты Вьетнама.',
        'Если планируете съездить в Камбоджу или Лаос и вернуться, берите многократную e-визу на 90 дней за 50 $ — дешевле, чем две однократные.',
        'Для безвизового въезда авиакомпании проверяют обратный или выездной билет. Подойдёт любой билет из страны в течение 45 дней, например дешёвый рейс в Бангкок.',
        'Подавайте на e-визу минимум за неделю до вылета: в праздники (особенно в Тет) обработка затягивается.',
      ],
      pitfalls: [
        'Сайты-посредники с похожими адресами берут в 2–4 раза дороже за ту же визу. Официальный адрес только один — evisa.gov.vn.',
        'Опечатка в номере паспорта или дате рождения в e-визе — частая причина отказа в посадке. Проверьте анкету перед оплатой: исправить её нельзя, только подать заново.',
        'День прилёта считается первым днём из 45. Перерасчёт штрафуют на границе при выезде.',
      ],
      passports: {
        RU: 'Для россиян — 45 дней без визы. Российские карты во Вьетнаме не работают: берите наличные доллары и меняйте на донги в ювелирных лавках и банках.',
        US: 'Безвизового режима для граждан США нет — нужна e-виза. Многократная на 90 дней удобна, если вы собираетесь выезжать в соседние страны.',
      },
    },
    en: {
      summary:
        'Citizens of many European countries (including Germany, France, Italy, Spain and Russia), Japan and Korea enter visa-free for 45 days. Everyone else, including US, Canadian, Australian and Indian citizens, needs an e-visa valid for up to 90 days, issued online within a few days.',
      apply:
        'Apply only on the official portal: fill in the form in Latin letters, upload a photo of your passport and face, pay by card and download the PDF in 3–5 working days. A single-entry e-visa costs $25, a multiple-entry one $50. Show the printout or the file on your phone at the border.',
      visaRun:
        'Visa runs work: the 45 visa-free days restart after you leave, with no minimum gap between trips. The easiest options are the Moc Bai – Bavet land crossing into Cambodia (two hours from Ho Chi Minh City) or a cheap return flight to Kuala Lumpur. Get your Cambodian visa online beforehand or at the border.',
      hacks: [
        'Phu Quoc island admits every foreign visitor visa-free for 30 days if you fly there directly on an international flight without passing through another Vietnamese airport.',
        'If you plan to pop over to Cambodia or Laos and come back, get the 90-day multiple-entry e-visa for $50 — cheaper than two single-entry ones.',
        'For visa-free entry, airlines check for an onward ticket. Any ticket out of the country within 45 days will do, such as a cheap flight to Bangkok.',
        'Apply for the e-visa at least a week before you fly: processing slows down around holidays, especially Tết.',
      ],
      pitfalls: [
        'Look-alike agency websites charge two to four times more for the same visa. The only official address is evisa.gov.vn.',
        'A typo in your passport number or date of birth is a common reason to be refused boarding. Check the form before paying — it cannot be corrected, only resubmitted.',
        'Your arrival day counts as day one of 45. Overstays are fined at the border on departure.',
      ],
      passports: {
        RU: 'Russian citizens get 45 days visa-free. Russian bank cards do not work in Vietnam, so bring US dollars in cash and change them at banks or gold shops.',
        US: 'There is no visa-free entry for US citizens — you need an e-visa. The 90-day multiple-entry one is handy if you plan side trips to neighbouring countries.',
      },
    },
    es: {
      summary:
        'Los ciudadanos de muchos países europeos (entre ellos España, Alemania, Francia, Italia y Rusia), de Japón y de Corea entran sin visado durante 45 días. El resto, incluidos los ciudadanos de EE. UU., Canadá, Australia e India, necesita un visado electrónico de hasta 90 días, que se tramita en línea en pocos días.',
      apply:
        'Solicítalo solo en el portal oficial: rellena el formulario en caracteres latinos, sube una foto del pasaporte y otra de tu cara, paga con tarjeta y descarga el PDF en 3–5 días laborables. El visado de una entrada cuesta 25 $ y el de entradas múltiples, 50 $. En la frontera basta con la copia impresa o el archivo en el móvil.',
      visaRun:
        'El visa run funciona: al salir del país, los 45 días sin visado vuelven a empezar y no hace falta esperar entre viajes. Lo más cómodo es el paso fronterizo de Moc Bai – Bavet hacia Camboya (a dos horas de Ho Chi Minh) o un vuelo barato de ida y vuelta a Kuala Lumpur. Tramita el visado camboyano antes en línea o en la frontera.',
      hacks: [
        'La isla de Phu Quoc admite a cualquier visitante extranjero sin visado durante 30 días si llegas en vuelo internacional directo, sin pasar por otro aeropuerto vietnamita.',
        'Si piensas escaparte a Camboya o Laos y volver, pide el visado electrónico de entradas múltiples de 90 días por 50 $: sale más barato que dos de una entrada.',
        'Para entrar sin visado, las aerolíneas comprueban que tengas billete de salida. Vale cualquier billete fuera del país en 45 días, por ejemplo un vuelo barato a Bangkok.',
        'Solicita el visado al menos una semana antes del vuelo: en festivos, sobre todo en el Tết, la tramitación se alarga.',
      ],
      pitfalls: [
        'Las webs intermediarias con direcciones parecidas cobran entre dos y cuatro veces más por el mismo visado. La única dirección oficial es evisa.gov.vn.',
        'Una errata en el número de pasaporte o la fecha de nacimiento es motivo habitual de denegación del embarque. Revisa el formulario antes de pagar: no se puede corregir, solo volver a solicitar.',
        'El día de llegada cuenta como el primero de los 45. El exceso de estancia se multa en la frontera al salir.',
      ],
      passports: {
        RU: 'Los ciudadanos rusos tienen 45 días sin visado. Las tarjetas bancarias rusas no funcionan en Vietnam: lleva dólares en efectivo y cámbialos en bancos o joyerías.',
        US: 'Los ciudadanos estadounidenses no tienen exención de visado: necesitan el visado electrónico. El de entradas múltiples de 90 días es práctico si vas a visitar países vecinos.',
      },
    },
    de: {
      summary:
        'Staatsangehörige vieler europäischer Länder (darunter Deutschland, Frankreich, Italien, Spanien und Russland) sowie Japans und Koreas reisen 45 Tage visumfrei ein. Alle anderen, auch Bürger der USA, Kanadas, Australiens und Indiens, brauchen ein E-Visum für bis zu 90 Tage, das online in wenigen Tagen ausgestellt wird.',
      apply:
        'Beantrage das E-Visum nur auf dem offiziellen Portal: Formular in lateinischen Buchstaben ausfüllen, Foto von Pass und Gesicht hochladen, per Karte zahlen und das PDF nach 3–5 Werktagen herunterladen. Einmalige Einreise kostet 25 $, mehrfache 50 $. An der Grenze reicht der Ausdruck oder die Datei auf dem Handy.',
      visaRun:
        'Visa-Runs funktionieren: Nach der Ausreise beginnen die 45 visumfreien Tage neu, eine Mindestpause gibt es nicht. Am einfachsten ist der Grenzübergang Moc Bai – Bavet nach Kambodscha (zwei Stunden von Ho-Chi-Minh-Stadt) oder ein günstiger Hin- und Rückflug nach Kuala Lumpur. Das kambodschanische Visum gibt es vorab online oder an der Grenze.',
      hacks: [
        'Die Insel Phu Quoc lässt alle ausländischen Gäste 30 Tage visumfrei einreisen, wenn sie direkt mit einem internationalen Flug ankommen, ohne über einen anderen vietnamesischen Flughafen zu reisen.',
        'Wer kurz nach Kambodscha oder Laos und zurück will, nimmt das 90-Tage-E-Visum für mehrfache Einreise für 50 $ – günstiger als zwei einfache.',
        'Bei visumfreier Einreise prüfen Airlines ein Weiter- oder Rückflugticket. Jedes Ticket aus dem Land innerhalb von 45 Tagen genügt, etwa ein Billigflug nach Bangkok.',
        'Beantrage das E-Visum mindestens eine Woche vor dem Flug: Rund um Feiertage, besonders Tết, dauert die Bearbeitung länger.',
      ],
      pitfalls: [
        'Vermittlerseiten mit ähnlicher Adresse verlangen das Zwei- bis Vierfache für dasselbe Visum. Die einzige offizielle Adresse ist evisa.gov.vn.',
        'Ein Tippfehler bei Passnummer oder Geburtsdatum ist ein häufiger Grund für verweigertes Boarding. Prüfe das Formular vor dem Bezahlen – korrigieren lässt es sich nicht, nur neu beantragen.',
        'Der Ankunftstag zählt als erster der 45 Tage. Überziehungen werden bei der Ausreise an der Grenze mit Bußgeld belegt.',
      ],
      passports: {
        RU: 'Russische Staatsangehörige reisen 45 Tage visumfrei ein. Russische Bankkarten funktionieren in Vietnam nicht – nimm US-Dollar in bar mit und tausche sie bei Banken oder Goldhändlern.',
        US: 'Für US-Bürger gibt es keine Visumfreiheit – sie brauchen ein E-Visum. Das 90-Tage-Visum für mehrfache Einreise lohnt sich bei Abstechern in Nachbarländer.',
      },
    },
    fr: {
      summary:
        'Les ressortissants de nombreux pays européens (dont la France, l’Allemagne, l’Italie, l’Espagne et la Russie), du Japon et de la Corée entrent sans visa pour 45 jours. Les autres, y compris les citoyens américains, canadiens, australiens et indiens, ont besoin d’un e-visa valable jusqu’à 90 jours, délivré en ligne en quelques jours.',
      apply:
        'Faites la demande uniquement sur le portail officiel : formulaire en caractères latins, photo du passeport et du visage, paiement par carte, puis PDF à télécharger sous 3 à 5 jours ouvrés. L’e-visa à entrée unique coûte 25 $, celui à entrées multiples 50 $. À la frontière, montrez l’impression ou le fichier sur votre téléphone.',
      visaRun:
        'Le visa run fonctionne : après une sortie, les 45 jours sans visa repartent de zéro, sans délai minimal entre deux séjours. Le plus simple est le poste frontière de Moc Bai – Bavet vers le Cambodge (deux heures de Hô Chi Minh-Ville) ou un vol aller-retour bon marché pour Kuala Lumpur. Le visa cambodgien s’obtient en ligne à l’avance ou à la frontière.',
      hacks: [
        'L’île de Phu Quoc accueille tous les visiteurs étrangers sans visa pendant 30 jours s’ils y arrivent directement par un vol international, sans passer par un autre aéroport vietnamien.',
        'Si vous comptez faire un saut au Cambodge ou au Laos et revenir, prenez l’e-visa à entrées multiples de 90 jours pour 50 $ : moins cher que deux e-visas simples.',
        'Pour une entrée sans visa, les compagnies vérifient un billet de sortie. N’importe quel billet quittant le pays sous 45 jours convient, par exemple un vol low cost pour Bangkok.',
        'Déposez la demande au moins une semaine avant le départ : autour des fêtes, surtout du Têt, le traitement ralentit.',
      ],
      pitfalls: [
        'Des sites intermédiaires aux adresses ressemblantes facturent deux à quatre fois plus cher le même visa. La seule adresse officielle est evisa.gov.vn.',
        'Une coquille dans le numéro de passeport ou la date de naissance est une cause fréquente de refus d’embarquement. Relisez le formulaire avant de payer : il ne peut pas être corrigé, seulement redéposé.',
        'Le jour d’arrivée compte comme le premier des 45. Tout dépassement est sanctionné d’une amende à la sortie.',
      ],
      passports: {
        RU: 'Les ressortissants russes ont 45 jours sans visa. Les cartes bancaires russes ne fonctionnent pas au Vietnam : emportez des dollars en espèces et changez-les dans les banques ou chez les bijoutiers.',
        US: 'Les citoyens américains n’ont pas d’exemption de visa : il leur faut un e-visa. Celui à entrées multiples de 90 jours est pratique pour des escapades dans les pays voisins.',
      },
    },
    it: {
      summary:
        'I cittadini di molti paesi europei (tra cui Italia, Germania, Francia, Spagna e Russia), del Giappone e della Corea entrano senza visto per 45 giorni. Tutti gli altri, compresi i cittadini di Stati Uniti, Canada, Australia e India, hanno bisogno di un visto elettronico fino a 90 giorni, rilasciato online in pochi giorni.',
      apply:
        'Fai domanda solo sul portale ufficiale: compila il modulo in caratteri latini, carica la foto del passaporto e del viso, paga con carta e scarica il PDF in 3–5 giorni lavorativi. Il visto a ingresso singolo costa 25 $, quello a ingressi multipli 50 $. Alla frontiera basta la stampa o il file sul telefono.',
      visaRun:
        'Il visa run funziona: dopo l’uscita i 45 giorni senza visto ripartono da capo, senza pause minime tra un viaggio e l’altro. Le opzioni più comode sono il valico di Moc Bai – Bavet verso la Cambogia (due ore da Ho Chi Minh) o un volo economico di andata e ritorno per Kuala Lumpur. Il visto cambogiano si ottiene online in anticipo o alla frontiera.',
      hacks: [
        'L’isola di Phu Quoc accoglie tutti i visitatori stranieri senza visto per 30 giorni se ci arrivi direttamente con un volo internazionale, senza passare da altri aeroporti vietnamiti.',
        'Se pensi di fare un salto in Cambogia o in Laos e tornare, prendi il visto elettronico a ingressi multipli di 90 giorni per 50 $: costa meno di due visti singoli.',
        'Per l’ingresso senza visto le compagnie aeree controllano il biglietto di uscita. Va bene qualsiasi biglietto in partenza dal paese entro 45 giorni, per esempio un volo low cost per Bangkok.',
        'Fai domanda almeno una settimana prima del volo: durante le festività, soprattutto il Tết, i tempi si allungano.',
      ],
      pitfalls: [
        'I siti intermediari con indirizzi simili fanno pagare da due a quattro volte di più lo stesso visto. L’unico indirizzo ufficiale è evisa.gov.vn.',
        'Un errore nel numero di passaporto o nella data di nascita è un motivo frequente di imbarco negato. Controlla il modulo prima di pagare: non si può correggere, solo ripresentare.',
        'Il giorno di arrivo conta come il primo dei 45. Chi supera il limite paga una multa alla frontiera in uscita.',
      ],
      passports: {
        RU: 'I cittadini russi hanno 45 giorni senza visto. Le carte bancarie russe in Vietnam non funzionano: porta dollari in contanti e cambiali in banca o nelle gioiellerie.',
        US: 'Per i cittadini statunitensi non c’è esenzione dal visto: serve il visto elettronico. Quello a ingressi multipli di 90 giorni è comodo se pensi di visitare i paesi vicini.',
      },
    },
  },
};

export default guide;
