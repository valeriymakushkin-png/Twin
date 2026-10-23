import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'RS',
  checked: '2026-10',
  stay: { visa: 90 },
  links: { immigration: 'https://www.mfa.gov.rs' },
  docs: ['returnTicket', 'booking'],
  passportMonths: 3,
  rule: { days: 90, window: 180 },
  visaRun: 'limited',
  borders: [
    { name: 'Sremska Rača – Rača', to: 'BA', lat: 44.8935, lng: 19.328 },
    { name: 'Mali Zvornik – Zvornik', to: 'BA', lat: 44.387, lng: 19.106 },
    { name: 'Belgrade (BEG) → Sarajevo', to: 'BA', lat: 44.8184, lng: 20.3091 },
  ],
  waivers: [{ holds: ['visaSchengen', 'visaUS', 'visaGB', 'resEU', 'resUS', 'resGB'], status: 'free', days: 90 }],
  text: {
    ru: {
      summary:
        'Граждане ЕС, Великобритании, США, Канады, Австралии, Украины, Турции, Японии и большей части Латинской Америки въезжают без визы на 90 дней в течение 180. Россияне, белорусы, казахстанцы и граждане Китая по двусторонним соглашениям получают 30 дней за каждый въезд. Индийцам и другим «визовым» гражданам нужна виза, если у них нет действующей визы или ВНЖ Шенгена, Великобритании или США.',
      apply:
        'Визу подают лично в посольстве или консульстве Сербии: анкета, фото, страховка, бронь жилья, обратный билет и выписка из банка, иногда приглашение. Рассмотрение обычно занимает одну-две недели; актуальный сбор уточняйте в посольстве.',
      visaRun:
        'Для паспортов с режимом 90/180 выезд ничего не обнуляет. Россиянам, белорусам и казахстанцам 30 дней начинаются заново с каждым въездом, поэтому популярны короткие выезды в Боснию (переходы Сремска-Рача и Мали-Зворник, для россиян без визы) или перелёт Белград — Сараево. Пограничники задают вопросы тем, кто так живёт месяцами; для долгого пребывания правильный путь — временный вид на жительство.',
      hacks: [
        'Действующая виза Шенгена, Великобритании или США — или ВНЖ этих стран — даёт безвизовый въезд до 90 дней в течение 180, пока документ действует. Этим особенно часто пользуются граждане Индии.',
        'Air Serbia летает в Белград прямыми рейсами из Москвы — Сербия остаётся одной из немногих европейских стран с прямым сообщением с Россией и удобной базой для дальнейших поездок.',
        'С сербским временным ВНЖ можно подавать на шенгенскую визу в консульствах в Белграде — частый путь для россиян после 2022 года.',
        'Сербия считает свои 90/180 отдельно от Шенгена: американцы, британцы и канадцы после 90 дней в Шенгене могут провести здесь ещё 90.',
      ],
      pitfalls: [
        'Регистрация в полиции в течение 24 часов обязательна. Отели делают её автоматически, в частной квартире это обязан сделать хозяин — сохраните «белый картон»: его спрашивают при оформлении ВНЖ и иногда на выезде.',
        'Если вы въехали в Косово из Албании или Северной Македонии, Сербия считает въезд незаконным и не пустит вас из Косово в Сербию. Въезжайте в Косово из Сербии или возвращайтесь в Сербию через третью страну.',
        'Для 30-дневных паспортов перерасчёт даже на день грозит штрафом и запретом въезда; день въезда считается первым.',
      ],
      waivers: [
        'Действующая виза Шенгена, Великобритании или США либо ВНЖ этих стран (включая страны ЕС): въезд без визы до 90 дней в течение 180, но не дольше срока действия документа.',
      ],
      passports: {
        RU: 'Россияне — 30 дней за въезд без визы по загранпаспорту; есть прямые рейсы Air Serbia из Москвы. Российские карты не работают, но с сербским ВНЖ местный банковский счёт открыть обычно несложно.',
        BY: 'Белорусы тоже получают 30 дней без визы за каждый въезд.',
        CN: 'Граждане Китая — 30 дней без визы за въезд.',
        IN: 'Гражданам Индии нужна виза, но с действующей визой или ВНЖ Шенгена, Великобритании или США въезд свободный — до 90 дней в течение 180.',
        US: 'Граждане США — 90 дней в течение 180 без визы.',
      },
    },
    en: {
      summary:
        'Citizens of the EU, the UK, the US, Canada, Australia, Ukraine, Turkey, Japan and most of Latin America visit visa-free for 90 days in 180. Russians, Belarusians, Kazakhs and Chinese citizens get 30 days per entry under bilateral agreements. Indians and other visa nationals need a visa unless they hold a valid Schengen, UK or US visa or residence permit.',
      apply:
        'Visas are applied for in person at a Serbian embassy or consulate: form, photo, insurance, accommodation booking, return ticket and bank statement, sometimes an invitation. Processing usually takes one to two weeks; check the current fee with the embassy.',
      visaRun:
        'For passports on 90/180, leaving resets nothing. For Russians, Belarusians and Kazakhs, the 30 days start again with each entry, which is why short hops to Bosnia (Sremska Rača or Mali Zvornik crossings, visa-free for Russians) or a Belgrade–Sarajevo flight are popular. Border guards question people who live like this for months; for long stays the proper route is a temporary residence permit.',
      hacks: [
        'A valid Schengen, UK or US visa — or a residence permit there — gives visa-free entry for up to 90 days in 180 while the document is valid. Indian travellers use this a lot.',
        'Air Serbia flies direct to Belgrade from Moscow, making Serbia one of the few European countries with direct links to Russia and a handy base for onward travel.',
        'With a Serbian temporary residence permit you can apply for Schengen visas at consulates in Belgrade — a common route for Russians since 2022.',
        'Serbia counts its 90/180 separately from Schengen: Americans, Brits and Canadians who have used 90 Schengen days can spend another 90 here.',
      ],
      pitfalls: [
        'Police registration within 24 hours is mandatory. Hotels do it automatically; in a private flat it’s the host’s job — keep the white card (beli karton), as it’s asked for when applying for residence and sometimes on departure.',
        'If you entered Kosovo from Albania or North Macedonia, Serbia treats your entry as illegal and won’t let you cross from Kosovo into Serbia. Enter Kosovo from Serbia, or return to Serbia via a third country.',
        'On 30-day passports, overstaying even by a day means a fine and a possible entry ban; the day of entry counts as day one.',
      ],
      waivers: [
        'A valid Schengen, UK or US visa or a residence permit of those countries (EU states included): visa-free entry for up to 90 days in 180, but not beyond the document’s expiry.',
      ],
      passports: {
        RU: 'Russians get 30 days visa-free per entry on an international passport, with direct Air Serbia flights from Moscow. Russian cards don’t work, but with a Serbian residence permit opening a local bank account is usually straightforward.',
        BY: 'Belarusians also get 30 days visa-free per entry.',
        CN: 'Chinese citizens get 30 days visa-free per entry.',
        IN: 'Indian citizens need a visa, but a valid Schengen, UK or US visa or residence permit gets them in visa-free for up to 90 days in 180.',
        US: 'US citizens get 90 days in 180 visa-free.',
      },
    },
    es: {
      summary:
        'Los ciudadanos de la UE, Reino Unido, EE. UU., Canadá, Australia, Ucrania, Turquía, Japón y casi toda Latinoamérica entran sin visado 90 días cada 180. Rusos, bielorrusos, kazajos y chinos tienen 30 días por entrada gracias a acuerdos bilaterales. Los indios y demás nacionalidades sujetas a visado lo necesitan, salvo que tengan un visado o permiso de residencia vigente de Schengen, Reino Unido o EE. UU.',
      apply:
        'El visado se solicita en persona en una embajada o consulado de Serbia: formulario, foto, seguro, reserva de alojamiento, billete de vuelta y extracto bancario, a veces una carta de invitación. Suele tardar una o dos semanas; consulta la tasa vigente en la embajada.',
      visaRun:
        'Con pasaportes sujetos a 90/180, salir no pone nada a cero. Para rusos, bielorrusos y kazajos, los 30 días vuelven a empezar con cada entrada, por eso son populares las escapadas cortas a Bosnia (pasos de Sremska Rača o Mali Zvornik, sin visado para los rusos) o un vuelo Belgrado–Sarajevo. Los guardias preguntan a quien vive así durante meses; para estancias largas lo correcto es un permiso de residencia temporal.',
      hacks: [
        'Un visado vigente de Schengen, Reino Unido o EE. UU., o un permiso de residencia de esos países, permite entrar sin visado hasta 90 días cada 180 mientras siga vigente. Los viajeros indios lo usan mucho.',
        'Air Serbia vuela directo a Belgrado desde Moscú, lo que convierte a Serbia en uno de los pocos países europeos con conexión directa con Rusia y en una buena base para seguir viajando.',
        'Con un permiso de residencia temporal serbio puedes solicitar visados Schengen en los consulados de Belgrado: una vía habitual para los rusos desde 2022.',
        'Serbia cuenta sus 90/180 aparte de Schengen: estadounidenses, británicos y canadienses que ya han gastado 90 días en Schengen pueden pasar aquí otros 90.',
      ],
      pitfalls: [
        'El registro policial en 24 horas es obligatorio. Los hoteles lo hacen solos; en un piso particular le toca al anfitrión. Guarda el beli karton (tarjeta blanca): te lo piden al solicitar la residencia y a veces al salir.',
        'Si entraste en Kosovo desde Albania o Macedonia del Norte, Serbia considera ilegal tu entrada y no te deja pasar de Kosovo a Serbia. Entra en Kosovo desde Serbia o vuelve a Serbia por un tercer país.',
        'Con pasaportes de 30 días, pasarse aunque sea un día supone multa y posible prohibición de entrada; el día de entrada cuenta como el primero.',
      ],
      waivers: [
        'Un visado vigente de Schengen, Reino Unido o EE. UU., o un permiso de residencia de esos países (incluidos los de la UE): entrada sin visado hasta 90 días cada 180, pero no más allá de la caducidad del documento.',
      ],
      passports: {
        RU: 'Los ciudadanos rusos tienen 30 días sin visado por entrada con pasaporte internacional, y hay vuelos directos de Air Serbia desde Moscú. Las tarjetas rusas no funcionan, pero con un permiso de residencia serbio abrir una cuenta local suele ser sencillo.',
        BY: 'Los bielorrusos también tienen 30 días sin visado por entrada.',
        CN: 'Los ciudadanos chinos tienen 30 días sin visado por entrada.',
        IN: 'Los ciudadanos indios necesitan visado, pero con un visado o permiso de residencia vigente de Schengen, Reino Unido o EE. UU. entran sin él hasta 90 días cada 180.',
        US: 'Los ciudadanos estadounidenses tienen 90 días cada 180 sin visado.',
      },
    },
    de: {
      summary:
        'Bürger der EU, Großbritanniens, der USA, Kanadas, Australiens, der Ukraine, der Türkei, Japans und fast ganz Lateinamerikas reisen 90 Tage innerhalb von 180 visumfrei ein. Russen, Belarussen, Kasachen und Chinesen erhalten dank bilateraler Abkommen 30 Tage pro Einreise. Inder und andere Visumpflichtige brauchen ein Visum, außer sie haben ein gültiges Visum oder einen Aufenthaltstitel des Schengenraums, Großbritanniens oder der USA.',
      apply:
        'Das Visum wird persönlich bei einer serbischen Botschaft oder einem Konsulat beantragt: Formular, Foto, Versicherung, Unterkunftsbuchung, Rückflugticket und Kontoauszug, manchmal eine Einladung. Die Bearbeitung dauert meist ein bis zwei Wochen; die aktuelle Gebühr erfährst du bei der Botschaft.',
      visaRun:
        'Bei Pässen mit 90/180-Regel setzt eine Ausreise nichts zurück. Für Russen, Belarussen und Kasachen beginnen die 30 Tage mit jeder Einreise neu, deshalb sind kurze Abstecher nach Bosnien (Übergänge Sremska Rača oder Mali Zvornik, für Russen visumfrei) oder ein Flug Belgrad–Sarajevo beliebt. Wer monatelang so lebt, wird an der Grenze befragt; für lange Aufenthalte ist eine befristete Aufenthaltserlaubnis der richtige Weg.',
      hacks: [
        'Ein gültiges Schengen-, UK- oder US-Visum – oder ein Aufenthaltstitel dort – ermöglicht die visumfreie Einreise für bis zu 90 Tage innerhalb von 180, solange das Dokument gilt. Indische Reisende nutzen das häufig.',
        'Air Serbia fliegt direkt von Moskau nach Belgrad – Serbien ist damit eines der wenigen europäischen Länder mit Direktverbindung nach Russland und eine gute Basis für die Weiterreise.',
        'Mit einer befristeten serbischen Aufenthaltserlaubnis kannst du bei den Konsulaten in Belgrad Schengen-Visa beantragen – seit 2022 ein üblicher Weg für Russen.',
        'Serbien zählt seine 90/180 getrennt vom Schengenraum: Amerikaner, Briten und Kanadier, die ihre 90 Schengen-Tage verbraucht haben, können hier weitere 90 bleiben.',
      ],
      pitfalls: [
        'Die polizeiliche Anmeldung innerhalb von 24 Stunden ist Pflicht. Hotels erledigen das automatisch, in einer Privatwohnung ist der Gastgeber zuständig – heb die weiße Karte (beli karton) auf, sie wird beim Antrag auf Aufenthalt und manchmal bei der Ausreise verlangt.',
        'Bist du aus Albanien oder Nordmazedonien in den Kosovo eingereist, gilt das für Serbien als illegale Einreise, und du darfst nicht vom Kosovo nach Serbien weiterreisen. Reise aus Serbien in den Kosovo ein oder kehr über ein Drittland nach Serbien zurück.',
        'Bei 30-Tage-Pässen bringt schon ein Tag Überziehung ein Bußgeld und womöglich eine Einreisesperre; der Einreisetag zählt als erster Tag.',
      ],
      waivers: [
        'Ein gültiges Schengen-, UK- oder US-Visum oder ein Aufenthaltstitel dieser Länder (EU-Staaten eingeschlossen): visumfreie Einreise für bis zu 90 Tage innerhalb von 180, aber nicht über das Ablaufdatum des Dokuments hinaus.',
      ],
      passports: {
        RU: 'Russische Staatsangehörige haben mit Reisepass 30 Tage visumfrei pro Einreise; Air Serbia fliegt direkt ab Moskau. Russische Karten funktionieren nicht, mit serbischer Aufenthaltserlaubnis ist ein lokales Konto aber meist leicht zu eröffnen.',
        BY: 'Auch Belarussen haben 30 Tage visumfrei pro Einreise.',
        CN: 'Chinesische Staatsangehörige haben 30 Tage visumfrei pro Einreise.',
        IN: 'Indische Staatsangehörige brauchen ein Visum, mit einem gültigen Schengen-, UK- oder US-Visum bzw. Aufenthaltstitel reisen sie aber bis zu 90 Tage innerhalb von 180 visumfrei ein.',
        US: 'US-Bürger haben 90 Tage innerhalb von 180 visumfrei.',
      },
    },
    fr: {
      summary:
        'Les citoyens de l’UE, du Royaume-Uni, des États-Unis, du Canada, de l’Australie, de l’Ukraine, de la Turquie, du Japon et de presque toute l’Amérique latine entrent sans visa pour 90 jours sur 180. Les Russes, Biélorusses, Kazakhs et Chinois ont droit à 30 jours par entrée grâce à des accords bilatéraux. Les Indiens et autres ressortissants soumis à visa doivent en obtenir un, sauf s’ils détiennent un visa ou titre de séjour valide Schengen, britannique ou américain.',
      apply:
        'Le visa se demande en personne dans une ambassade ou un consulat de Serbie : formulaire, photo, assurance, réservation d’hébergement, billet retour et relevé bancaire, parfois une lettre d’invitation. Le traitement prend en général une à deux semaines ; vérifiez le tarif auprès de l’ambassade.',
      visaRun:
        'Avec un passeport soumis aux 90/180, sortir ne remet rien à zéro. Pour les Russes, Biélorusses et Kazakhs, les 30 jours repartent à chaque entrée, d’où la popularité des allers-retours en Bosnie (postes de Sremska Rača ou Mali Zvornik, sans visa pour les Russes) ou d’un vol Belgrade–Sarajevo. Les gardes-frontières interrogent ceux qui vivent ainsi pendant des mois ; pour un long séjour, la bonne voie est un titre de séjour temporaire.',
      hacks: [
        'Un visa valide Schengen, britannique ou américain, ou un titre de séjour dans ces pays, permet d’entrer sans visa jusqu’à 90 jours sur 180 tant que le document est valide. Les voyageurs indiens en profitent beaucoup.',
        'Air Serbia relie Moscou à Belgrade en vol direct : la Serbie est l’un des rares pays européens reliés directement à la Russie, et une base pratique pour la suite du voyage.',
        'Avec un titre de séjour temporaire serbe, vous pouvez demander un visa Schengen auprès des consulats à Belgrade, une voie courante pour les Russes depuis 2022.',
        'La Serbie compte ses 90/180 séparément de Schengen : Américains, Britanniques et Canadiens ayant épuisé leurs 90 jours Schengen peuvent en passer 90 de plus ici.',
      ],
      pitfalls: [
        'L’enregistrement auprès de la police sous 24 heures est obligatoire. Les hôtels le font automatiquement ; dans un logement privé, c’est à l’hôte de s’en charger. Gardez la carte blanche (beli karton) : on la demande pour un titre de séjour et parfois à la sortie.',
        'Si vous êtes entré au Kosovo depuis l’Albanie ou la Macédoine du Nord, la Serbie considère votre entrée comme illégale et vous refusera le passage du Kosovo vers la Serbie. Entrez au Kosovo depuis la Serbie, ou revenez en Serbie par un pays tiers.',
        'Avec un passeport à 30 jours, un seul jour de dépassement vaut une amende et parfois une interdiction d’entrée ; le jour d’entrée compte comme le premier.',
      ],
      waivers: [
        'Un visa valide Schengen, britannique ou américain, ou un titre de séjour de ces pays (États de l’UE compris) : entrée sans visa jusqu’à 90 jours sur 180, sans dépasser la date d’expiration du document.',
      ],
      passports: {
        RU: 'Les ressortissants russes ont 30 jours sans visa par entrée avec leur passeport international, et Air Serbia assure des vols directs depuis Moscou. Les cartes russes ne fonctionnent pas, mais avec un titre de séjour serbe, ouvrir un compte local est en général simple.',
        BY: 'Les Biélorusses ont eux aussi 30 jours sans visa par entrée.',
        CN: 'Les citoyens chinois ont 30 jours sans visa par entrée.',
        IN: 'Les citoyens indiens ont besoin d’un visa, mais avec un visa ou titre de séjour valide Schengen, britannique ou américain, ils entrent sans visa jusqu’à 90 jours sur 180.',
        US: 'Les citoyens américains ont 90 jours sur 180 sans visa.',
      },
    },
    it: {
      summary:
        'I cittadini di UE, Regno Unito, Stati Uniti, Canada, Australia, Ucraina, Turchia, Giappone e quasi tutta l’America Latina entrano senza visto per 90 giorni ogni 180. Russi, bielorussi, kazaki e cinesi hanno 30 giorni per ingresso grazie ad accordi bilaterali. Gli indiani e gli altri soggetti a visto ne hanno bisogno, a meno che non abbiano un visto o permesso di soggiorno valido di Schengen, Regno Unito o Stati Uniti.',
      apply:
        'Il visto si chiede di persona in un’ambasciata o in un consolato serbo: modulo, foto, assicurazione, prenotazione dell’alloggio, biglietto di ritorno ed estratto conto, a volte una lettera d’invito. Di solito servono una o due settimane; verifica la tassa in vigore con l’ambasciata.',
      visaRun:
        'Con i passaporti soggetti a 90/180 uscire non azzera nulla. Per russi, bielorussi e kazaki i 30 giorni ripartono a ogni ingresso: per questo sono diffuse le brevi uscite in Bosnia (valichi di Sremska Rača o Mali Zvornik, senza visto per i russi) o un volo Belgrado–Sarajevo. Le guardie fanno domande a chi vive così per mesi; per soggiorni lunghi la strada giusta è un permesso di soggiorno temporaneo.',
      hacks: [
        'Un visto valido di Schengen, Regno Unito o Stati Uniti, o un permesso di soggiorno in quei paesi, consente l’ingresso senza visto fino a 90 giorni ogni 180 finché il documento è valido. I viaggiatori indiani lo usano molto.',
        'Air Serbia vola diretto da Mosca a Belgrado: la Serbia è uno dei pochi paesi europei con collegamenti diretti con la Russia e una base comoda per proseguire il viaggio.',
        'Con un permesso di soggiorno temporaneo serbo puoi chiedere il visto Schengen ai consolati di Belgrado: una strada frequente per i russi dal 2022.',
        'La Serbia conta i suoi 90/180 separatamente da Schengen: statunitensi, britannici e canadesi che hanno esaurito i 90 giorni Schengen possono passarne altri 90 qui.',
      ],
      pitfalls: [
        'La registrazione in polizia entro 24 ore è obbligatoria. Gli hotel la fanno in automatico; in un appartamento privato tocca al proprietario. Conserva il cartoncino bianco (beli karton): lo chiedono per il permesso di soggiorno e talvolta all’uscita.',
        'Se sei entrato in Kosovo dall’Albania o dalla Macedonia del Nord, la Serbia considera illegale il tuo ingresso e non ti lascia passare dal Kosovo in Serbia. Entra in Kosovo dalla Serbia o rientra in Serbia passando da un paese terzo.',
        'Con i passaporti da 30 giorni anche un solo giorno di troppo comporta una multa e un possibile divieto d’ingresso; il giorno d’ingresso conta come il primo.',
      ],
      waivers: [
        'Un visto valido di Schengen, Regno Unito o Stati Uniti, oppure un permesso di soggiorno di quei paesi (compresi gli Stati UE): ingresso senza visto fino a 90 giorni ogni 180, ma non oltre la scadenza del documento.',
      ],
      passports: {
        RU: 'I cittadini russi hanno 30 giorni senza visto per ingresso con il passaporto per l’estero, e Air Serbia vola diretto da Mosca. Le carte russe non funzionano, ma con un permesso di soggiorno serbo aprire un conto locale di solito è semplice.',
        BY: 'Anche i bielorussi hanno 30 giorni senza visto per ingresso.',
        CN: 'I cittadini cinesi hanno 30 giorni senza visto per ingresso.',
        IN: 'I cittadini indiani hanno bisogno del visto, ma con un visto o permesso di soggiorno valido di Schengen, Regno Unito o Stati Uniti entrano senza fino a 90 giorni ogni 180.',
        US: 'I cittadini statunitensi hanno 90 giorni ogni 180 senza visto.',
      },
    },
  },
};

export default guide;
