import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'BA',
  checked: '2026-10',
  stay: { visa: 90 },
  links: { immigration: 'https://www.mvp.gov.ba' },
  docs: ['booking', 'returnTicket'],
  passportMonths: 3,
  rule: { days: 90, window: 180 },
  visaRun: 'limited',
  waivers: [{ holds: ['visaSchengen', 'resEU'], status: 'free', days: 30 }],
  hackScope: [null, ['regime:required'], null],
  pitfallScope: [null, ['regime:required'], ['regime:required']],
  text: {
    ru: {
      summary:
        'Граждане ЕС, Великобритании, США, Канады, Австралии, Китая, Турции, Японии и большей части Латинской Америки въезжают без визы на 90 дней в течение 180; россияне и украинцы — на 30 дней за поездку. Индийцам, белорусам и другим «визовым» гражданам нужна консульская виза — если только у них нет действующей многократной шенгенской визы или ВНЖ страны ЕС.',
      apply:
        'Визу оформляют в посольстве Боснии и Герцеговины лично: анкета, фото, страховка, бронь жилья и обратный билет, выписка из банка, иногда приглашение, заверенное в БиГ. Рассмотрение обычно занимает от одной до трёх недель; размер сбора уточняйте в посольстве.',
      visaRun:
        'Выезд не обнуляет счёт 90/180. Для россиян лимит в 30 дней считается на одну поездку, поэтому выезд в Сербию (переходы Зворник или Рача) запускает новые 30 дней, но пограничники видят все штампы и всё чаще задают вопросы тем, кто живёт так месяцами. Для долгого пребывания правильнее оформить временный ВНЖ.',
      hacks: [
        'Однодневная поездка из Дубровника в Требинье или Мостар не требует ничего, кроме права на въезд в БиГ. Но выезд из Хорватии — это выход из Шенгена, поэтому с однократной шенгенской визой обратно не вернуться.',
        'Хорватская прибрежная трасса пересекает около 9 км боснийской территории у Неума. С 2022 года этот участок можно объехать по Пелешацкому мосту — полезно, если вашему паспорту нужна виза БиГ или шенгенская виза однократная.',
        'В Боснии два энтитета — Федерация и Республика Сербская, — но пограничный режим единый: виза и штамп действуют по всей стране.',
      ],
      pitfalls: [
        'Иностранцы обязаны зарегистрироваться по месту проживания в течение 48 часов. Отели делают это сами; в частной квартире попросите хозяина оформить регистрацию в полиции и сохраните бумагу.',
        'С однократной шенгенской визой въезд в БиГ из Хорватии «съедает» визу — вернуться в Хорватию по ней уже нельзя.',
        'Виза, по которой вы въезжаете без боснийской визы, должна действовать до конца поездки — иначе срок пребывания сокращается до её окончания.',
      ],
      waivers: [
        'Действующая многократная шенгенская виза или ВНЖ страны ЕС/Шенгена: можно въехать без визы и находиться до 30 дней, но не дольше срока действия документа. Правило написано для шенгенских и европейских документов — если у вас только виза США или Великобритании, уточните в посольстве БиГ.',
      ],
      passports: {
        RU: 'Россияне въезжают без визы по загранпаспорту на 30 дней за поездку. Прямых рейсов нет: летают через Белград (Air Serbia) или Стамбул. Российские карты не работают — берите евро, конвертируемая марка жёстко привязана к евро.',
        UA: 'Граждане Украины также въезжают без визы на 30 дней за поездку.',
        IN: 'Гражданам Индии нужна виза, если нет многократной шенгенской визы или ВНЖ страны ЕС.',
        US: 'Граждане США — 90 дней в течение 180 без визы.',
      },
    },
    en: {
      summary:
        'Citizens of the EU, the UK, the US, Canada, Australia, China, Turkey, Japan and most of Latin America visit visa-free for 90 days in 180; Russians and Ukrainians get 30 days per visit. Indians, Belarusians and other visa nationals need a consular visa — unless they hold a valid multiple-entry Schengen visa or an EU residence permit.',
      apply:
        'Visas are applied for in person at an embassy of Bosnia and Herzegovina: form, photo, insurance, accommodation booking and return ticket, bank statement and sometimes an invitation certified in BiH. Processing usually takes one to three weeks; check the current fee with the embassy.',
      visaRun:
        'Leaving does not reset the 90/180 count. For Russians the 30-day limit is per visit, so a hop to Serbia (via the Zvornik or Rača crossings) starts a new 30 days, but border guards see every stamp and increasingly question people who live like this for months. For long stays, a temporary residence permit is the proper route.',
      hacks: [
        'A day trip from Dubrovnik to Trebinje or Mostar needs nothing beyond the right to enter BiH. But leaving Croatia means leaving Schengen, so a single-entry Schengen visa won’t get you back.',
        'The Croatian coastal road crosses about 9 km of Bosnian territory at Neum. Since 2022 you can bypass it via the Pelješac Bridge — useful if your passport needs a BiH visa or your Schengen visa is single-entry.',
        'Bosnia has two entities, the Federation and Republika Srpska, but one border regime: your visa and entry stamp are valid across the whole country.',
      ],
      pitfalls: [
        'Foreigners must register their address within 48 hours. Hotels do it for you; in a private flat, ask the host to register you with the police and keep the slip.',
        'With a single-entry Schengen visa, crossing from Croatia into BiH uses it up — you can’t return to Croatia on it.',
        'The visa that lets you skip a Bosnian visa must be valid until the end of your trip; otherwise your stay ends when it expires.',
      ],
      waivers: [
        'A valid multiple-entry Schengen visa or a residence permit of an EU/Schengen country: you can enter without a visa and stay up to 30 days, but not beyond the document’s expiry. The rule is written for Schengen and EU documents — if you only hold a US or UK visa, check with a BiH embassy.',
      ],
      passports: {
        RU: 'Russians enter visa-free on an international passport for 30 days per visit. There are no direct flights; people connect via Belgrade (Air Serbia) or Istanbul. Russian cards don’t work — bring euros; the convertible mark is pegged to the euro.',
        UA: 'Ukrainian citizens also get 30 days visa-free per visit.',
        IN: 'Indian citizens need a visa unless they hold a multiple-entry Schengen visa or an EU residence permit.',
        US: 'US citizens get 90 days in 180 visa-free.',
      },
    },
    es: {
      summary:
        'Los ciudadanos de la UE, Reino Unido, EE. UU., Canadá, Australia, China, Turquía, Japón y casi toda Latinoamérica entran sin visado 90 días cada 180; rusos y ucranianos, 30 días por viaje. Indios, bielorrusos y demás nacionalidades sujetas a visado necesitan un visado consular, salvo que tengan un visado Schengen de entradas múltiples vigente o un permiso de residencia de la UE.',
      apply:
        'El visado se solicita en persona en una embajada de Bosnia y Herzegovina: formulario, foto, seguro, reserva de alojamiento y billete de vuelta, extracto bancario y a veces una carta de invitación compulsada en BiH. Suele tardar de una a tres semanas; consulta la tasa vigente en la embajada.',
      visaRun:
        'Salir no pone a cero la cuenta de 90/180. Para los rusos el límite de 30 días es por viaje, así que una escapada a Serbia (por los pasos de Zvornik o Rača) abre otros 30 días, pero los guardias ven todos los sellos y cada vez preguntan más a quien vive así durante meses. Para estancias largas, lo correcto es un permiso de residencia temporal.',
      hacks: [
        'Una excursión de un día de Dubrovnik a Trebinje o Mostar no exige nada más que poder entrar en BiH. Pero salir de Croacia es salir de Schengen, así que con un visado Schengen de una sola entrada no podrás volver.',
        'La carretera costera croata atraviesa unos 9 km de territorio bosnio en Neum. Desde 2022 se puede evitar por el puente de Pelješac, algo útil si tu pasaporte necesita visado para BiH o tu visado Schengen es de una sola entrada.',
        'Bosnia tiene dos entidades, la Federación y la República Srpska, pero un único régimen fronterizo: el visado y el sello valen en todo el país.',
      ],
      pitfalls: [
        'Los extranjeros deben registrar su domicilio en 48 horas. Los hoteles lo hacen por ti; en un piso particular, pide al anfitrión que te registre en la policía y guarda el justificante.',
        'Con un visado Schengen de una entrada, cruzar de Croacia a BiH lo agota: ya no puedes volver a Croacia con él.',
        'El visado que te exime del bosnio debe seguir vigente hasta el final del viaje; si caduca antes, tu estancia termina ese día.',
      ],
      waivers: [
        'Un visado Schengen de entradas múltiples vigente o un permiso de residencia de un país de la UE o de Schengen: puedes entrar sin visado y quedarte hasta 30 días, pero no más allá de la caducidad del documento. La norma está pensada para documentos Schengen y de la UE; si solo tienes un visado de EE. UU. o del Reino Unido, consúltalo con una embajada de BiH.',
      ],
      passports: {
        RU: 'Los ciudadanos rusos entran sin visado con pasaporte internacional durante 30 días por viaje. No hay vuelos directos: se vuela vía Belgrado (Air Serbia) o Estambul. Las tarjetas rusas no funcionan: lleva euros; el marco convertible está vinculado al euro.',
        UA: 'Los ciudadanos ucranianos también tienen 30 días sin visado por viaje.',
        IN: 'Los ciudadanos indios necesitan visado salvo que tengan un visado Schengen de entradas múltiples o un permiso de residencia de la UE.',
        US: 'Los ciudadanos estadounidenses tienen 90 días cada 180 sin visado.',
      },
    },
    de: {
      summary:
        'Bürger der EU, Großbritanniens, der USA, Kanadas, Australiens, Chinas, der Türkei, Japans und fast ganz Lateinamerikas reisen 90 Tage innerhalb von 180 visumfrei ein; Russen und Ukrainer 30 Tage pro Reise. Inder, Belarussen und andere Visumpflichtige brauchen ein Konsularvisum – es sei denn, sie haben ein gültiges Schengen-Mehrfachvisum oder einen EU-Aufenthaltstitel.',
      apply:
        'Das Visum wird persönlich bei einer Botschaft von Bosnien und Herzegowina beantragt: Formular, Foto, Versicherung, Unterkunftsbuchung und Rückflugticket, Kontoauszug und manchmal eine in BiH beglaubigte Einladung. Die Bearbeitung dauert meist ein bis drei Wochen; die aktuelle Gebühr erfährst du bei der Botschaft.',
      visaRun:
        'Eine Ausreise setzt die 90/180-Zählung nicht zurück. Für Russen gilt das 30-Tage-Limit pro Reise, ein Abstecher nach Serbien (über die Übergänge Zvornik oder Rača) startet also neue 30 Tage – doch die Grenzbeamten sehen alle Stempel und fragen zunehmend nach, wenn jemand monatelang so lebt. Für lange Aufenthalte ist eine befristete Aufenthaltserlaubnis der richtige Weg.',
      hacks: [
        'Ein Tagesausflug von Dubrovnik nach Trebinje oder Mostar braucht nur das Recht zur Einreise nach BiH. Aber wer Kroatien verlässt, verlässt den Schengenraum – mit einem Visum für eine einzige Einreise kommst du nicht zurück.',
        'Die kroatische Küstenstraße führt bei Neum etwa 9 km durch bosnisches Gebiet. Seit 2022 lässt sich das über die Pelješac-Brücke umfahren – praktisch, wenn dein Pass ein BiH-Visum braucht oder dein Schengen-Visum nur für eine Einreise gilt.',
        'Bosnien hat zwei Entitäten, die Föderation und die Republika Srpska, aber ein einheitliches Grenzregime: Visum und Einreisestempel gelten im ganzen Land.',
      ],
      pitfalls: [
        'Ausländer müssen ihre Adresse innerhalb von 48 Stunden anmelden. Hotels erledigen das; in einer Privatwohnung bitte den Gastgeber, dich bei der Polizei anzumelden, und heb den Beleg auf.',
        'Mit einem Schengen-Visum für eine einzige Einreise ist es verbraucht, sobald du von Kroatien nach BiH fährst – zurück nach Kroatien geht es damit nicht.',
        'Das Visum, das dich vom bosnischen Visum befreit, muss bis zum Ende der Reise gültig sein; sonst endet dein Aufenthalt mit seinem Ablauf.',
      ],
      waivers: [
        'Ein gültiges Schengen-Mehrfachvisum oder ein Aufenthaltstitel eines EU- oder Schengen-Staats: Du darfst ohne Visum einreisen und bis zu 30 Tage bleiben, aber nicht über das Ablaufdatum des Dokuments hinaus. Die Regel ist für Schengen- und EU-Dokumente formuliert – hast du nur ein US- oder UK-Visum, frag bei einer Botschaft von BiH nach.',
      ],
      passports: {
        RU: 'Russische Staatsangehörige reisen mit Reisepass 30 Tage pro Reise visumfrei ein. Direktflüge gibt es nicht; man fliegt über Belgrad (Air Serbia) oder Istanbul. Russische Karten funktionieren nicht – nimm Euro mit, die Konvertible Mark ist fest an den Euro gekoppelt.',
        UA: 'Ukrainische Staatsangehörige bekommen ebenfalls 30 Tage visumfrei pro Reise.',
        IN: 'Indische Staatsangehörige brauchen ein Visum, außer sie haben ein Schengen-Mehrfachvisum oder einen EU-Aufenthaltstitel.',
        US: 'US-Bürger haben 90 Tage innerhalb von 180 visumfrei.',
      },
    },
    fr: {
      summary:
        'Les citoyens de l’UE, du Royaume-Uni, des États-Unis, du Canada, de l’Australie, de la Chine, de la Turquie, du Japon et de presque toute l’Amérique latine entrent sans visa pour 90 jours sur 180 ; les Russes et les Ukrainiens pour 30 jours par séjour. Les Indiens, les Biélorusses et les autres ressortissants soumis à visa doivent obtenir un visa consulaire, sauf s’ils détiennent un visa Schengen à entrées multiples valide ou un titre de séjour d’un pays de l’UE.',
      apply:
        'Le visa se demande en personne dans une ambassade de Bosnie-Herzégovine : formulaire, photo, assurance, réservation d’hébergement et billet retour, relevé bancaire et parfois une lettre d’invitation certifiée en BiH. Le traitement prend en général une à trois semaines ; vérifiez le tarif en vigueur auprès de l’ambassade.',
      visaRun:
        'Sortir du pays ne remet pas le compteur 90/180 à zéro. Pour les Russes, la limite de 30 jours vaut par séjour : un aller-retour en Serbie (postes de Zvornik ou de Rača) relance 30 jours, mais les gardes-frontières voient tous les tampons et interrogent de plus en plus ceux qui vivent ainsi pendant des mois. Pour un long séjour, la bonne voie est un titre de séjour temporaire.',
      hacks: [
        'Une excursion d’une journée de Dubrovnik à Trebinje ou Mostar ne demande rien de plus que le droit d’entrer en BiH. Mais quitter la Croatie, c’est quitter Schengen : avec un visa à entrée unique, vous ne pourrez pas revenir.',
        'La route côtière croate traverse environ 9 km de territoire bosnien à Neum. Depuis 2022, le pont de Pelješac permet de l’éviter, utile si votre passeport exige un visa bosnien ou si votre visa Schengen est à entrée unique.',
        'La Bosnie compte deux entités, la Fédération et la Republika Srpska, mais un seul régime frontalier : visa et tampon d’entrée valent dans tout le pays.',
      ],
      pitfalls: [
        'Les étrangers doivent déclarer leur adresse dans les 48 heures. Les hôtels s’en chargent ; dans un logement privé, demandez à l’hôte de vous enregistrer auprès de la police et gardez le justificatif.',
        'Avec un visa Schengen à entrée unique, passer de Croatie en BiH le consomme : impossible de revenir en Croatie avec.',
        'Le visa qui vous dispense de visa bosnien doit rester valide jusqu’à la fin du voyage ; sinon, votre séjour s’arrête à son expiration.',
      ],
      waivers: [
        'Un visa Schengen à entrées multiples valide ou un titre de séjour d’un pays de l’UE ou de Schengen : entrée sans visa et séjour jusqu’à 30 jours, sans dépasser la date d’expiration du document. La règle vise les documents Schengen et européens ; si vous n’avez qu’un visa américain ou britannique, renseignez-vous auprès d’une ambassade de BiH.',
      ],
      passports: {
        RU: 'Les ressortissants russes entrent sans visa avec leur passeport international pour 30 jours par séjour. Il n’y a pas de vol direct : on passe par Belgrade (Air Serbia) ou Istanbul. Les cartes russes ne fonctionnent pas ; prévoyez des euros, le mark convertible est arrimé à l’euro.',
        UA: 'Les citoyens ukrainiens ont eux aussi 30 jours sans visa par séjour.',
        IN: 'Les citoyens indiens ont besoin d’un visa, sauf s’ils détiennent un visa Schengen à entrées multiples ou un titre de séjour d’un pays de l’UE.',
        US: 'Les citoyens américains ont 90 jours sur 180 sans visa.',
      },
    },
    it: {
      summary:
        'I cittadini di UE, Regno Unito, Stati Uniti, Canada, Australia, Cina, Turchia, Giappone e quasi tutta l’America Latina entrano senza visto per 90 giorni ogni 180; russi e ucraini per 30 giorni a viaggio. Indiani, bielorussi e gli altri soggetti a visto hanno bisogno di un visto consolare, a meno che non abbiano un visto Schengen a ingressi multipli valido o un permesso di soggiorno di un paese UE.',
      apply:
        'Il visto si chiede di persona in un’ambasciata della Bosnia ed Erzegovina: modulo, foto, assicurazione, prenotazione dell’alloggio e biglietto di ritorno, estratto conto e talvolta una lettera d’invito autenticata in BiH. Di solito servono da una a tre settimane; verifica la tassa in vigore con l’ambasciata.',
      visaRun:
        'Uscire non azzera il conteggio dei 90/180. Per i russi il limite di 30 giorni vale per viaggio, quindi una puntata in Serbia (dai valichi di Zvornik o Rača) fa ripartire 30 giorni, ma le guardie vedono tutti i timbri e fanno sempre più domande a chi vive così per mesi. Per soggiorni lunghi la strada giusta è un permesso di soggiorno temporaneo.',
      hacks: [
        'Una gita di un giorno da Dubrovnik a Trebinje o Mostar richiede solo il diritto di entrare in BiH. Ma uscire dalla Croazia significa uscire da Schengen: con un visto a ingresso singolo non potrai rientrare.',
        'La strada costiera croata attraversa circa 9 km di territorio bosniaco a Neum. Dal 2022 si può evitare con il ponte di Sabbioncello (Pelješac), utile se il tuo passaporto richiede il visto per la BiH o se il tuo visto Schengen è a ingresso singolo.',
        'La Bosnia ha due entità, la Federazione e la Republika Srpska, ma un unico regime di frontiera: visto e timbro d’ingresso valgono in tutto il paese.',
      ],
      pitfalls: [
        'Gli stranieri devono registrare il proprio indirizzo entro 48 ore. Gli hotel lo fanno per te; in un appartamento privato chiedi al proprietario di registrarti in polizia e conserva la ricevuta.',
        'Con un visto Schengen a ingresso singolo, passare dalla Croazia in BiH lo consuma: non potrai più rientrare in Croazia con quel visto.',
        'Il visto che ti esenta da quello bosniaco deve restare valido fino alla fine del viaggio; altrimenti il soggiorno termina alla sua scadenza.',
      ],
      waivers: [
        'Un visto Schengen a ingressi multipli valido o un permesso di soggiorno di un paese UE o Schengen: puoi entrare senza visto e restare fino a 30 giorni, ma non oltre la scadenza del documento. La norma riguarda documenti Schengen e UE: se hai solo un visto statunitense o britannico, chiedi conferma a un’ambasciata della BiH.',
      ],
      passports: {
        RU: 'I cittadini russi entrano senza visto con il passaporto per l’estero per 30 giorni a viaggio. Non ci sono voli diretti: si passa da Belgrado (Air Serbia) o Istanbul. Le carte russe non funzionano: porta euro, il marco convertibile è agganciato all’euro.',
        UA: 'Anche i cittadini ucraini hanno 30 giorni senza visto a viaggio.',
        IN: 'I cittadini indiani hanno bisogno del visto, a meno che non abbiano un visto Schengen a ingressi multipli o un permesso di soggiorno UE.',
        US: 'I cittadini statunitensi hanno 90 giorni ogni 180 senza visto.',
      },
    },
  },
};

export default guide;
