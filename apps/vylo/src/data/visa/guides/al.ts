import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'AL',
  checked: '2026-10',
  fees: { evisa: { kind: 'from', amount: 30, currency: 'EUR' } },
  stay: { evisa: 90 },
  links: { evisa: 'https://e-albania.al', immigration: 'https://punetejashtme.gov.al' },
  docs: ['booking', 'returnTicket'],
  passportMonths: 3,
  rule: { days: 90, window: 180 },
  visaRun: 'limited',
  nomad: { name: 'Unique Permit (digital nomad)', months: 12 },
  waivers: [{ holds: ['visaSchengen', 'visaUS', 'visaGB', 'resEU', 'resUS', 'resGB'], status: 'free', days: 90 }],
  text: {
    ru: {
      summary:
        'Граждане ЕС, Великобритании, Украины, Казахстана, Грузии, Армении, Китая и большей части Латинской Америки едут без визы на 90 дней в течение 180, американцы — до года. Россиянам, белорусам, индийцам, узбекам и другим «визовым» гражданам нужна электронная виза через e-albania.al — или действующая многократная виза либо ВНЖ Шенгена, США или Великобритании, с которыми въезд свободный.',
      apply:
        'Электронную визу подают на портале e-albania.al в разделе виз: регистрируетесь, заполняете анкету и загружаете скан паспорта, фото, бронь жилья, билеты, страховку и выписку из банка. Сбор зависит от гражданства — от 30 €. Рассмотрение занимает до двух-трёх недель, поэтому подавайте минимум за месяц. Одобрение приходит на почту, его показывают на границе.',
      visaRun:
        'Действует правило 90/180, поэтому выходные в Черногории или Греции ничего не обнуляют: использовав 90 дней, нужно провести 90 дней за пределами страны. Исключение — граждане США, которым разрешено до года без визы.',
      nomad:
        'Албания выдаёт цифровым кочевникам вид на жительство на год в рамках Unique Permit — для тех, кто удалённо работает на иностранного работодателя или клиентов; его можно продлевать. Подают через e-albania.al с договором или подтверждением удалённой работы, доходом, жильём и страховкой. Фиксированного публичного порога дохода нет, так что покажите стабильные ежемесячные поступления.',
      hacks: [
        'С многократной визой Шенгена, США или Великобритании, которую вы уже хотя бы раз использовали, въезд свободный — без анкет и ожидания e-визы.',
        'Албания считает свои 90/180 отдельно от Шенгена: американцы, британцы и канадцы после 90 дней в Шенгене могут провести здесь ещё 90 — как и в Черногории, Сербии или Северной Македонии.',
        'Из Саранды паромы идут на Корфу за 30–70 минут. С многократной шенгенской визой легко совместить обе страны, но дни в Греции идут в шенгенский счёт, а не в албанский.',
        'Гражданам США дают до года без визы за один въезд — редкий в Европе способ надолго остаться без бумажной волокиты.',
      ],
      pitfalls: [
        'Сайты-посредники под видом официального портала берут лишние деньги. Единственный официальный адрес — e-albania.al.',
        'Виза, по которой вы въезжаете без албанской визы, должна действовать всё время поездки: если шенгенская виза кончается через две недели, остаться можно только на две недели.',
        'День въезда считается первым днём. За перерасчёт штрафуют при выезде и могут запретить въезд.',
      ],
      waivers: [
        'Действующая многократная виза Шенгена, США или Великобритании, уже использованная хотя бы раз для въезда в выдавшую её страну, или ВНЖ этих стран. Можно находиться до 90 дней в течение 180, но не дольше срока действия визы или ВНЖ.',
      ],
      passports: {
        RU: 'Россиянам нужна e-виза, если нет действующей многократной визы Шенгена, США или Великобритании (уже использованной) или ВНЖ этих стран. Прямых рейсов нет — летают через Стамбул или Белград. Российские карты не работают, берите наличные евро.',
        BY: 'Белорусам, как и россиянам, нужна e-виза — или въезд по многократной визе либо ВНЖ Шенгена, США или Великобритании.',
        IN: 'Гражданам Индии нужна e-виза, но с использованной многократной визой США, Великобритании или Шенгена либо ВНЖ этих стран въезд свободный.',
        US: 'Граждане США могут находиться в стране без визы до года.',
      },
    },
    en: {
      summary:
        'Citizens of the EU, the UK, Ukraine, Kazakhstan, Georgia, Armenia, China and most of Latin America visit visa-free for 90 days in 180; Americans can stay up to a year. Russians, Belarusians, Indians, Uzbeks and other visa nationals need an e-visa via e-albania.al — or a valid multiple-entry Schengen, US or UK visa or residence permit, which gets them in visa-free.',
      apply:
        'The e-visa is filed on the e-albania.al portal, in the visa section: register, fill in the form and upload a passport scan, photo, accommodation booking, tickets, insurance and a bank statement. The fee depends on nationality, from €30. Processing takes up to two or three weeks, so apply at least a month ahead. The approval arrives by email; show it at the border.',
      visaRun:
        'The 90/180 rule applies, so a weekend in Montenegro or Greece resets nothing: once you have used 90 days, you must spend 90 outside the country. US citizens are the exception, with up to a year visa-free.',
      nomad:
        'Albania grants digital nomads a one-year residence permit under the Unique Permit, for people working remotely for a foreign employer or clients; it can be renewed. You apply via e-albania.al with a contract or proof of remote work, income, accommodation and insurance. There is no fixed published income threshold, so show steady monthly earnings.',
      hacks: [
        'With a multiple-entry Schengen, US or UK visa you have already used at least once, you enter visa-free — no forms, no waiting for an e-visa.',
        'Albania counts its 90/180 separately from Schengen: Americans, Brits and Canadians who have used 90 Schengen days can spend another 90 here — and the same in Montenegro, Serbia or North Macedonia.',
        'Ferries run from Saranda to Corfu in 30–70 minutes. With a multiple-entry Schengen visa it’s easy to combine both, but days in Greece count towards Schengen, not Albania.',
        'US citizens get up to a year visa-free per entry — a rare way in Europe to stay long without any paperwork.',
      ],
      pitfalls: [
        'Agency sites dressed up as the official portal charge extra. The only official address is e-albania.al.',
        'The visa you use for visa-free entry must stay valid for your whole trip: if your Schengen visa runs out in two weeks, you can only stay two weeks.',
        'Your arrival day counts as day one. Overstays are fined on departure and can lead to an entry ban.',
      ],
      waivers: [
        'A valid multiple-entry Schengen, US or UK visa that has already been used at least once to enter the issuing country, or a residence permit there. You can stay up to 90 days in 180, but never beyond the expiry of the visa or permit.',
      ],
      passports: {
        RU: 'Russians need an e-visa unless they hold a valid, already used multiple-entry Schengen, US or UK visa or a residence permit there. There are no direct flights — connect via Istanbul or Belgrade. Russian cards don’t work, so bring euros in cash.',
        BY: 'Like Russians, Belarusians need an e-visa — or can enter on a multiple-entry Schengen, US or UK visa or residence permit.',
        IN: 'Indian citizens need an e-visa, but a used multiple-entry US, UK or Schengen visa or a residence permit there gets them in visa-free.',
        US: 'US citizens can stay up to a year without a visa.',
      },
    },
    es: {
      summary:
        'Los ciudadanos de la UE, Reino Unido, Ucrania, Kazajistán, Georgia, Armenia, China y casi toda Latinoamérica entran sin visado 90 días cada 180; los estadounidenses pueden quedarse hasta un año. Rusos, bielorrusos, indios, uzbekos y demás nacionalidades sujetas a visado necesitan un visado electrónico en e-albania.al, o bien un visado de entradas múltiples o un permiso de residencia vigente de Schengen, EE. UU. o Reino Unido, con el que entran sin visado.',
      apply:
        'El visado electrónico se solicita en el portal e-albania.al, en la sección de visados: te registras, rellenas el formulario y subes el pasaporte escaneado, una foto, la reserva de alojamiento, los billetes, el seguro y un extracto bancario. La tasa depende de la nacionalidad, desde 30 €. La tramitación tarda hasta dos o tres semanas, así que pídelo con al menos un mes de antelación. La aprobación llega por correo y se enseña en la frontera.',
      visaRun:
        'Rige la regla de 90/180, así que un fin de semana en Montenegro o Grecia no pone nada a cero: cuando hayas usado 90 días, tendrás que pasar 90 fuera del país. La excepción son los ciudadanos de EE. UU., con hasta un año sin visado.',
      nomad:
        'Albania concede a los nómadas digitales un permiso de residencia de un año dentro del Unique Permit, para quien trabaja en remoto para una empresa o clientes extranjeros; se puede renovar. Se solicita en e-albania.al con un contrato o prueba de trabajo remoto, ingresos, alojamiento y seguro. No hay un umbral de ingresos fijo publicado, así que demuestra ingresos mensuales estables.',
      hacks: [
        'Con un visado de entradas múltiples de Schengen, EE. UU. o Reino Unido que ya hayas usado al menos una vez, entras sin visado: ni formularios ni esperas.',
        'Albania cuenta sus 90/180 aparte de Schengen: estadounidenses, británicos y canadienses que ya han gastado 90 días en Schengen pueden pasar aquí otros 90, y lo mismo en Montenegro, Serbia o Macedonia del Norte.',
        'Desde Saranda salen ferris a Corfú en 30–70 minutos. Con un visado Schengen de entradas múltiples es fácil combinar ambos países, pero los días en Grecia cuentan para Schengen, no para Albania.',
        'Los ciudadanos estadounidenses tienen hasta un año sin visado por entrada: una de las pocas formas en Europa de quedarse mucho tiempo sin papeleo.',
      ],
      pitfalls: [
        'Hay webs intermediarias que imitan el portal oficial y cobran de más. La única dirección oficial es e-albania.al.',
        'El visado con el que entras sin visado albanés debe estar vigente durante todo el viaje: si tu visado Schengen caduca en dos semanas, solo puedes quedarte dos semanas.',
        'El día de llegada cuenta como el primero. El exceso de estancia se multa al salir y puede acarrear una prohibición de entrada.',
      ],
      waivers: [
        'Un visado de entradas múltiples vigente de Schengen, EE. UU. o Reino Unido que ya se haya usado al menos una vez para entrar en el país emisor, o un permiso de residencia de esos países. Permite hasta 90 días cada 180, pero nunca más allá de la caducidad del visado o del permiso.',
      ],
      passports: {
        RU: 'Los ciudadanos rusos necesitan visado electrónico salvo que tengan un visado de entradas múltiples de Schengen, EE. UU. o Reino Unido vigente y ya usado, o un permiso de residencia de esos países. No hay vuelos directos: se vuela vía Estambul o Belgrado. Las tarjetas rusas no funcionan, lleva euros en efectivo.',
        BY: 'Igual que los rusos, los bielorrusos necesitan visado electrónico o pueden entrar con un visado de entradas múltiples o un permiso de residencia de Schengen, EE. UU. o Reino Unido.',
        IN: 'Los ciudadanos indios necesitan visado electrónico, pero con un visado de entradas múltiples ya usado de EE. UU., Reino Unido o Schengen, o un permiso de residencia de esos países, entran sin visado.',
        US: 'Los ciudadanos estadounidenses pueden quedarse hasta un año sin visado.',
      },
    },
    de: {
      summary:
        'Bürger der EU, Großbritanniens, der Ukraine, Kasachstans, Georgiens, Armeniens, Chinas und fast ganz Lateinamerikas reisen 90 Tage innerhalb von 180 visumfrei ein, US-Bürger bis zu einem Jahr. Russen, Belarussen, Inder, Usbeken und andere Visumpflichtige brauchen ein E-Visum über e-albania.al – oder ein gültiges Mehrfachvisum bzw. einen Aufenthaltstitel des Schengenraums, der USA oder Großbritanniens, mit dem sie visumfrei einreisen.',
      apply:
        'Das E-Visum beantragst du auf dem Portal e-albania.al im Visa-Bereich: registrieren, Formular ausfüllen und Passscan, Foto, Unterkunftsbuchung, Tickets, Versicherung und Kontoauszug hochladen. Die Gebühr hängt von der Staatsangehörigkeit ab, ab 30 €. Die Bearbeitung dauert bis zu zwei, drei Wochen, beantrage es also mindestens einen Monat vorher. Die Genehmigung kommt per E-Mail und wird an der Grenze vorgezeigt.',
      visaRun:
        'Es gilt die 90/180-Regel, ein Wochenende in Montenegro oder Griechenland setzt also nichts zurück: Nach 90 Tagen musst du 90 Tage außerhalb des Landes verbringen. Ausnahme sind US-Bürger mit bis zu einem Jahr visumfrei.',
      nomad:
        'Albanien erteilt digitalen Nomaden im Rahmen der Unique Permit eine einjährige Aufenthaltserlaubnis, wenn sie remote für einen ausländischen Arbeitgeber oder Kunden arbeiten; sie lässt sich verlängern. Beantragt wird sie über e-albania.al mit Vertrag oder Nachweis der Remote-Arbeit, Einkommen, Unterkunft und Versicherung. Eine feste veröffentlichte Einkommensgrenze gibt es nicht, zeig also regelmäßige monatliche Einnahmen.',
      hacks: [
        'Mit einem Schengen-, US- oder UK-Mehrfachvisum, das du schon mindestens einmal genutzt hast, reist du visumfrei ein – ohne Formulare und Wartezeit.',
        'Albanien zählt seine 90/180 getrennt vom Schengenraum: Amerikaner, Briten und Kanadier, die ihre 90 Schengen-Tage verbraucht haben, können hier weitere 90 bleiben – ebenso in Montenegro, Serbien oder Nordmazedonien.',
        'Von Saranda fahren Fähren in 30–70 Minuten nach Korfu. Mit einem Schengen-Mehrfachvisum lassen sich beide Länder leicht verbinden, doch die Tage in Griechenland zählen für Schengen, nicht für Albanien.',
        'US-Bürger bekommen pro Einreise bis zu ein Jahr visumfrei – eine der wenigen Möglichkeiten in Europa, ohne Papierkram lange zu bleiben.',
      ],
      pitfalls: [
        'Vermittlerseiten, die wie das offizielle Portal aussehen, kassieren extra. Die einzige offizielle Adresse ist e-albania.al.',
        'Das Visum, mit dem du ohne albanisches Visum einreist, muss während der ganzen Reise gültig sein: Läuft dein Schengen-Visum in zwei Wochen ab, darfst du nur zwei Wochen bleiben.',
        'Der Ankunftstag zählt als erster Tag. Überziehungen werden bei der Ausreise mit Bußgeld belegt und können zu einer Einreisesperre führen.',
      ],
      waivers: [
        'Ein gültiges Schengen-, US- oder UK-Mehrfachvisum, mit dem du schon mindestens einmal in das ausstellende Land eingereist bist, oder ein Aufenthaltstitel dort. Erlaubt sind bis zu 90 Tage innerhalb von 180, aber nie über das Ablaufdatum von Visum oder Titel hinaus.',
      ],
      passports: {
        RU: 'Russische Staatsangehörige brauchen ein E-Visum, außer sie haben ein gültiges, bereits genutztes Schengen-, US- oder UK-Mehrfachvisum oder einen Aufenthaltstitel dort. Direktflüge gibt es nicht – man fliegt über Istanbul oder Belgrad. Russische Karten funktionieren nicht, nimm Euro in bar mit.',
        BY: 'Wie Russen brauchen Belarussen ein E-Visum – oder reisen mit einem Schengen-, US- oder UK-Mehrfachvisum bzw. Aufenthaltstitel ein.',
        IN: 'Indische Staatsangehörige brauchen ein E-Visum, mit einem bereits genutzten US-, UK- oder Schengen-Mehrfachvisum oder einem Aufenthaltstitel dort reisen sie jedoch visumfrei ein.',
        US: 'US-Bürger dürfen bis zu einem Jahr ohne Visum bleiben.',
      },
    },
    fr: {
      summary:
        'Les citoyens de l’UE, du Royaume-Uni, d’Ukraine, du Kazakhstan, de Géorgie, d’Arménie, de Chine et de presque toute l’Amérique latine entrent sans visa pour 90 jours sur 180 ; les Américains peuvent rester jusqu’à un an. Les Russes, Biélorusses, Indiens, Ouzbeks et autres ressortissants soumis à visa doivent demander un e-visa sur e-albania.al, sauf s’ils détiennent un visa à entrées multiples ou un titre de séjour valide de l’espace Schengen, des États-Unis ou du Royaume-Uni, qui leur permet d’entrer sans visa.',
      apply:
        'L’e-visa se demande sur le portail e-albania.al, rubrique visas : inscription, formulaire, puis scan du passeport, photo, réservation d’hébergement, billets, assurance et relevé bancaire. Les frais dépendent de la nationalité, à partir de 30 €. Le traitement peut prendre deux à trois semaines, déposez donc la demande au moins un mois avant. L’accord arrive par e-mail ; présentez-le à la frontière.',
      visaRun:
        'La règle des 90/180 s’applique : un week-end au Monténégro ou en Grèce ne remet rien à zéro. Une fois vos 90 jours utilisés, il faut passer 90 jours hors du pays. Exception : les citoyens américains, admis jusqu’à un an sans visa.',
      nomad:
        'L’Albanie délivre aux nomades numériques un titre de séjour d’un an dans le cadre du Unique Permit, pour ceux qui travaillent à distance pour un employeur ou des clients étrangers ; il est renouvelable. La demande se fait sur e-albania.al avec un contrat ou une preuve de travail à distance, des revenus, un logement et une assurance. Aucun seuil de revenu fixe n’est publié : montrez des revenus mensuels réguliers.',
      hacks: [
        'Avec un visa Schengen, américain ou britannique à entrées multiples déjà utilisé au moins une fois, vous entrez sans visa : ni formulaire ni attente.',
        'L’Albanie compte ses 90/180 séparément de Schengen : Américains, Britanniques et Canadiens ayant épuisé leurs 90 jours Schengen peuvent en passer 90 de plus ici, tout comme au Monténégro, en Serbie ou en Macédoine du Nord.',
        'Des ferries relient Saranda à Corfou en 30 à 70 minutes. Avec un visa Schengen à entrées multiples, combiner les deux pays est facile, mais les jours en Grèce comptent pour Schengen, pas pour l’Albanie.',
        'Les citoyens américains ont droit à un an sans visa par entrée : l’une des rares façons en Europe de rester longtemps sans démarches.',
      ],
      pitfalls: [
        'Des sites intermédiaires déguisés en portail officiel prennent une commission. La seule adresse officielle est e-albania.al.',
        'Le visa qui vous dispense de visa albanais doit rester valide pendant tout le séjour : si votre visa Schengen expire dans deux semaines, vous ne pouvez rester que deux semaines.',
        'Le jour d’arrivée compte comme le premier jour. Tout dépassement est sanctionné d’une amende à la sortie et peut entraîner une interdiction d’entrée.',
      ],
      waivers: [
        'Un visa Schengen, américain ou britannique à entrées multiples en cours de validité, déjà utilisé au moins une fois pour entrer dans le pays émetteur, ou un titre de séjour dans ces pays. Séjour possible jusqu’à 90 jours sur 180, mais jamais au-delà de l’expiration du visa ou du titre.',
      ],
      passports: {
        RU: 'Les ressortissants russes ont besoin d’un e-visa, sauf s’ils détiennent un visa Schengen, américain ou britannique à entrées multiples valide et déjà utilisé, ou un titre de séjour dans ces pays. Il n’y a pas de vol direct : on passe par Istanbul ou Belgrade. Les cartes russes ne fonctionnent pas, prévoyez des euros en espèces.',
        BY: 'Comme les Russes, les Biélorusses ont besoin d’un e-visa, ou peuvent entrer avec un visa à entrées multiples ou un titre de séjour Schengen, américain ou britannique.',
        IN: 'Les citoyens indiens ont besoin d’un e-visa, mais un visa à entrées multiples déjà utilisé des États-Unis, du Royaume-Uni ou de Schengen, ou un titre de séjour dans ces pays, leur permet d’entrer sans visa.',
        US: 'Les citoyens américains peuvent rester jusqu’à un an sans visa.',
      },
    },
    it: {
      summary:
        'I cittadini di UE, Regno Unito, Ucraina, Kazakistan, Georgia, Armenia, Cina e quasi tutta l’America Latina entrano senza visto per 90 giorni ogni 180; gli statunitensi possono restare fino a un anno. Russi, bielorussi, indiani, uzbeki e gli altri soggetti a visto hanno bisogno del visto elettronico su e-albania.al, oppure di un visto a ingressi multipli o di un permesso di soggiorno valido di Schengen, Stati Uniti o Regno Unito, con cui entrano senza visto.',
      apply:
        'Il visto elettronico si chiede sul portale e-albania.al, nella sezione visti: ti registri, compili il modulo e carichi scansione del passaporto, foto, prenotazione dell’alloggio, biglietti, assicurazione ed estratto conto. La tassa dipende dalla cittadinanza, da 30 €. L’esame richiede fino a due o tre settimane, quindi fai domanda almeno un mese prima. L’approvazione arriva via e-mail e va mostrata alla frontiera.',
      visaRun:
        'Vale la regola dei 90/180, quindi un weekend in Montenegro o in Grecia non azzera nulla: usati i 90 giorni, devi passarne 90 fuori dal paese. Fanno eccezione i cittadini statunitensi, con fino a un anno senza visto.',
      nomad:
        'L’Albania rilascia ai nomadi digitali un permesso di soggiorno di un anno nell’ambito del Unique Permit, per chi lavora da remoto per un datore di lavoro o clienti esteri; è rinnovabile. Si chiede su e-albania.al con un contratto o una prova del lavoro da remoto, reddito, alloggio e assicurazione. Non esiste una soglia di reddito fissa pubblicata, quindi dimostra entrate mensili regolari.',
      hacks: [
        'Con un visto a ingressi multipli di Schengen, Stati Uniti o Regno Unito già usato almeno una volta entri senza visto: niente moduli né attese.',
        'L’Albania conta i suoi 90/180 separatamente da Schengen: statunitensi, britannici e canadesi che hanno esaurito i 90 giorni Schengen possono passarne altri 90 qui, e lo stesso in Montenegro, Serbia o Macedonia del Nord.',
        'Da Saranda partono traghetti per Corfù in 30–70 minuti. Con un visto Schengen a ingressi multipli è facile combinare i due paesi, ma i giorni in Grecia contano per Schengen, non per l’Albania.',
        'I cittadini statunitensi hanno fino a un anno senza visto per ingresso: uno dei pochi modi in Europa per restare a lungo senza burocrazia.',
      ],
      pitfalls: [
        'Alcuni siti intermediari si spacciano per il portale ufficiale e fanno pagare di più. L’unico indirizzo ufficiale è e-albania.al.',
        'Il visto con cui entri senza visto albanese deve restare valido per tutto il viaggio: se il tuo visto Schengen scade tra due settimane, puoi restare solo due settimane.',
        'Il giorno di arrivo conta come primo giorno. Chi supera il limite paga una multa all’uscita e rischia il divieto di ingresso.',
      ],
      waivers: [
        'Un visto a ingressi multipli valido di Schengen, Stati Uniti o Regno Unito già usato almeno una volta per entrare nel paese che l’ha rilasciato, oppure un permesso di soggiorno in quei paesi. Si può restare fino a 90 giorni ogni 180, ma mai oltre la scadenza del visto o del permesso.',
      ],
      passports: {
        RU: 'I cittadini russi hanno bisogno del visto elettronico, a meno che non abbiano un visto a ingressi multipli di Schengen, Stati Uniti o Regno Unito valido e già usato, o un permesso di soggiorno in quei paesi. Non ci sono voli diretti: si passa da Istanbul o Belgrado. Le carte russe non funzionano, porta euro in contanti.',
        BY: 'Come i russi, i bielorussi hanno bisogno del visto elettronico, oppure possono entrare con un visto a ingressi multipli o un permesso di soggiorno di Schengen, Stati Uniti o Regno Unito.',
        IN: 'I cittadini indiani hanno bisogno del visto elettronico, ma con un visto a ingressi multipli già usato di Stati Uniti, Regno Unito o Schengen, o un permesso di soggiorno in quei paesi, entrano senza visto.',
        US: 'I cittadini statunitensi possono restare fino a un anno senza visto.',
      },
    },
  },
};

export default guide;
