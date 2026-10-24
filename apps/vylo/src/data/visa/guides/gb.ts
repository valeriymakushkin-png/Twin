import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'GB',
  checked: '2026-10',
  fees: {
    eta: { kind: 'fixed', amount: 20, currency: 'GBP' },
    visa: { kind: 'from', amount: 135, currency: 'GBP' },
  },
  stay: { eta: 180, visa: 180 },
  links: { eta: 'https://www.gov.uk/eta', immigration: 'https://www.gov.uk/check-uk-visa' },
  forms: [{ name: 'UK ETA', url: 'https://www.gov.uk/eta', fee: { kind: 'fixed', amount: 20, currency: 'GBP' } }],
  docs: ['returnTicket', 'finance'],
  passportMonths: 0,
  visaRun: 'no',
  transit: { hours: 24 },
  hackScope: [null, ['regime:required'], ['regime:eta'], ['regime:eta'], ['@EU']],
  pitfallScope: [['regime:eta'], ['regime:eta'], ['@EU'], ['regime:required']],
  text: {
    ru: {
      summary:
        'Граждане ЕС, США, Канады, Австралии, Японии, Кореи, стран Персидского залива и большей части Латинской Америки едут без визы до 6 месяцев, но заранее оформляют ETA (20 £). Гражданам России, Индии, Китая, Турции и многих других стран нужна гостевая виза Standard Visitor с биометрией. Без ETA и визы въезжают только граждане Великобритании и Ирландии и обладатели британского ВНЖ.',
      apply:
        'ETA оформляют в официальном приложении UK ETA или на GOV.UK: сканируете паспорт, делаете селфи, платите 20 £. Ответ обычно приходит за минуты, официально — до трёх рабочих дней. Разрешение привязано к паспорту, действует два года (или до конца срока паспорта) и даёт любое число поездок до 6 месяцев каждая. Гостевая виза с апреля 2026 года стоит 135 £: анкета онлайн, сдача биометрии в визовом центре, решение примерно за три недели; ускоренное рассмотрение — за доплату.',
      visaRun:
        'Формулы вроде шенгенской 90/180 нет, но выезд ничего не обнуляет: один визит — максимум 6 месяцев, а пограничник смотрит, сколько вы провели в стране за последние 12 месяцев. Если вы живёте в Великобритании больше полугода, во въезде могут отказать. Поездка в Ирландию не помогает: между странами нет паспортного контроля, и такой «выезд» не считается перерывом.',
      transit:
        'Пассажирам, которые не выходят из транзитной зоны Хитроу или Манчестера, ETA сейчас не нужна — это временное исключение, которое могут отменить, проверьте перед полётом. Гражданам «визовых» стран для транзита нужна транзитная виза DATV, если у них нет действующей визы или ВНЖ США, Канады, Австралии, Новой Зеландии, Шенгена или Ирландии. Чтобы выйти в город между рейсами, нужны ETA или виза; льготный транзит без визы для обладателей перечисленных документов зависит от паспорта и маршрута — уточняйте на GOV.UK.',
      hacks: [
        'Удалённо работать на своего работодателя или клиентов во время гостевого визита можно, если это не главная цель поездки, — отдельная виза для номадов не нужна.',
        'Если ездите хотя бы дважды в год, выгоднее долгосрочная гостевая виза: на 2 года — 506 £, на 5 лет — 903 £, на 10 лет — 1128 £. Каждый визит по-прежнему не дольше 6 месяцев.',
        'ETA нужна каждому, включая младенцев, но всю семью можно оформить с одного телефона в приложении UK ETA.',
        'ETA привязана к паспорту: с новым паспортом придётся платить снова. Если паспорт скоро истекает, сначала поменяйте его, а потом подавайте на ETA.',
        'Граждане ЕС со статусом settled или pre-settled по программе EU Settlement Scheme ETA не оформляют и могут въезжать по ID-карте.',
      ],
      pitfalls: [
        'Сайты-двойники берут за ETA 50–100 £. Подавайте только в приложении UK ETA или на GOV.UK — официальный сбор 20 £.',
        'Авиакомпании, паромы и Eurostar проверяют ETA электронно до посадки, в том числе на рейсах из Ирландии. Без одобрения вас просто не посадят.',
        'Большинство граждан ЕС с 2021 года не могут въехать по ID-карте — нужен загранпаспорт.',
        'Отказ в британской визе остаётся в базе, и о нём спрашивают в будущих анкетах Великобритании, США, Канады и Австралии. Подавайте с сильными доказательствами денег и связей с домом, а не наудачу.',
      ],
      passports: {
        RU: 'Россиянам нужна гостевая виза. Подать можно в России или в любой стране, где вы находитесь легально (например, в Сербии, Турции или ОАЭ); сбор оплачивается онлайн картой иностранного банка. Закладывайте больше стандартных трёх недель. Прямых рейсов нет — летают через Стамбул, Белград, Баку или Дубай.',
        US: 'Гражданам США нужна ETA за 20 £ — британский аналог ESTA. Оформляйте за несколько дней до вылета.',
        IN: 'Гражданам Индии нужна гостевая виза; визовые центры работают во многих городах Индии, летом популярна ускоренная подача. Тем, кто ездит часто, выгоднее виза на 2 года.',
        DE: 'Граждане Германии и других стран ЕС с апреля 2025 года оформляют ETA и въезжают по загранпаспорту — ID-карта для большинства не подходит.',
      },
    },
    en: {
      summary:
        'Citizens of the EU, the US, Canada, Australia, Japan, Korea, the Gulf states and most of Latin America visit visa-free for up to six months but need an ETA (£20) before travelling. Russian, Indian, Chinese, Turkish and many other passports need a Standard Visitor visa with biometrics. Only British and Irish citizens and UK residents need neither.',
      apply:
        'The ETA is done in the official UK ETA app or on GOV.UK: scan your passport, take a selfie and pay £20. Most decisions arrive within minutes; officially allow three working days. It is linked to your passport, lasts two years (or until the passport expires) and covers any number of visits of up to six months each. The Standard Visitor visa costs £135 since April 2026: online form, biometrics at a visa centre, decision in about three weeks; faster services cost extra.',
      visaRun:
        'There is no Schengen-style formula, but leaving and coming back resets nothing: each visit is capped at six months, and border officers look at how long you have spent in the UK over the past 12 months. If you are effectively living here for more than half the year, you risk being refused. A trip to Ireland doesn’t help — there is no passport control between the two, so it doesn’t count as a break.',
      transit:
        'Passengers who stay airside at Heathrow or Manchester currently need no ETA — a temporary exemption that could end, so check before you fly. Visa nationals need a Direct Airside Transit Visa unless they hold a valid US, Canadian, Australian, New Zealand, Schengen or Irish visa or residence permit. To leave the airport during a layover you need an ETA or a visa; whether visa nationals with those documents can pass landside without one depends on passport and route, so check on GOV.UK.',
      hacks: [
        'Remote work for your own employer or clients is allowed on a visitor stay as long as it isn’t the main purpose of the trip — no separate nomad visa needed.',
        'If you visit at least twice a year, a long-term visitor visa pays off: £506 for 2 years, £903 for 5 and £1,128 for 10. Each visit is still capped at six months.',
        'Everyone, babies included, needs their own ETA, but one person can file the whole family’s from a single phone in the UK ETA app.',
        'The ETA is tied to your passport, so a new passport means paying again. If yours expires soon, renew it first and apply for the ETA afterwards.',
        'EU citizens with settled or pre-settled status under the EU Settlement Scheme need no ETA and can still travel on their ID card.',
      ],
      pitfalls: [
        'Look-alike websites charge £50–100 for an ETA. Apply only in the UK ETA app or on GOV.UK — the official fee is £20.',
        'Airlines, ferries and Eurostar check your ETA electronically before boarding, including on routes from Ireland. Without approval you won’t be allowed on.',
        'Since 2021 most EU citizens can no longer enter with a national ID card — bring your passport.',
        'A UK visa refusal stays on record and must be declared on future UK, US, Canadian and Australian applications. Apply with solid proof of funds and ties at home rather than on a hunch.',
      ],
      passports: {
        RU: 'Russians need a Standard Visitor visa. You can apply in Russia or in any country where you are legally staying (for example Serbia, Turkey or the UAE); the fee is paid online with a card issued outside Russia. Allow more than the standard three weeks. There are no direct flights — people connect via Istanbul, Belgrade, Baku or Dubai.',
        US: 'US citizens need an ETA (£20), the UK’s counterpart of ESTA. Apply a few days before you fly.',
        IN: 'Indian citizens need a visitor visa; visa centres operate in many Indian cities and priority processing is popular in summer. Frequent visitors are better off with the 2-year visa.',
        DE: 'German and other EU citizens have needed an ETA since April 2025 and must travel on a passport — ID cards are not accepted for most.',
      },
    },
    es: {
      summary:
        'Los ciudadanos de la UE, EE. UU., Canadá, Australia, Japón, Corea, los países del Golfo y casi toda Latinoamérica entran sin visado hasta seis meses, pero necesitan una ETA (20 £) antes de viajar. Los pasaportes de Rusia, India, China, Turquía y muchos otros países requieren el visado Standard Visitor con datos biométricos. Solo los ciudadanos británicos e irlandeses y los residentes en el Reino Unido no necesitan ni lo uno ni lo otro.',
      apply:
        'La ETA se tramita en la app oficial UK ETA o en GOV.UK: escaneas el pasaporte, te haces un selfi y pagas 20 £. Casi siempre la respuesta llega en minutos; oficialmente, cuenta con tres días laborables. Va vinculada al pasaporte, dura dos años (o hasta que caduque el pasaporte) y sirve para todas las visitas que quieras de hasta seis meses cada una. El visado Standard Visitor cuesta 135 £ desde abril de 2026: formulario en línea, biometría en un centro de visados y resolución en unas tres semanas; los servicios rápidos se pagan aparte.',
      visaRun:
        'No hay una fórmula como la de Schengen, pero salir y volver no pone nada a cero: cada visita tiene un máximo de seis meses y el agente de fronteras mira cuánto tiempo has pasado en el país en los últimos 12 meses. Si en la práctica vives aquí más de medio año, te arriesgas a que te nieguen la entrada. Ir a Irlanda no sirve: entre ambos países no hay control de pasaportes, así que no cuenta como interrupción.',
      transit:
        'Si no sales de la zona de tránsito de Heathrow o Mánchester, ahora mismo no necesitas ETA; es una exención temporal que puede desaparecer, así que compruébalo antes de volar. Quienes necesitan visado deben pedir un Direct Airside Transit Visa, salvo que tengan un visado o permiso de residencia vigente de EE. UU., Canadá, Australia, Nueva Zelanda, Schengen o Irlanda. Para salir del aeropuerto durante la escala necesitas ETA o visado; si con esos documentos puedes pasar sin visado depende del pasaporte y de la ruta, consúltalo en GOV.UK.',
      hacks: [
        'Teletrabajar para tu empresa o tus clientes durante una visita está permitido siempre que no sea el motivo principal del viaje; no hace falta un visado de nómada.',
        'Si vas al menos dos veces al año, compensa el visado de larga duración: 506 £ por 2 años, 903 £ por 5 y 1128 £ por 10. Cada visita sigue limitada a seis meses.',
        'Cada persona necesita su propia ETA, bebés incluidos, pero puedes tramitar las de toda la familia desde un solo móvil en la app UK ETA.',
        'La ETA va ligada al pasaporte: con uno nuevo tendrás que pagarla otra vez. Si el tuyo caduca pronto, renuévalo primero y pide la ETA después.',
        'Los ciudadanos de la UE con settled o pre-settled status del EU Settlement Scheme no necesitan ETA y pueden seguir viajando con su DNI.',
      ],
      pitfalls: [
        'Las webs clonadas cobran 50–100 £ por una ETA. Solicítala solo en la app UK ETA o en GOV.UK: la tasa oficial es de 20 £.',
        'Aerolíneas, ferris y Eurostar comprueban la ETA electrónicamente antes del embarque, también en trayectos desde Irlanda. Sin aprobación no te dejan subir.',
        'Desde 2021 la mayoría de los ciudadanos de la UE ya no pueden entrar con el DNI: lleva el pasaporte.',
        'Una denegación de visado británico queda registrada y hay que declararla en futuras solicitudes del Reino Unido, EE. UU., Canadá y Australia. Presenta pruebas sólidas de fondos y arraigo en tu país en lugar de probar suerte.',
      ],
      passports: {
        RU: 'Los ciudadanos rusos necesitan el visado Standard Visitor. Se puede solicitar en Rusia o en cualquier país donde residas legalmente (por ejemplo, Serbia, Turquía o los EAU); la tasa se paga en línea con una tarjeta emitida fuera de Rusia. Cuenta con más de las tres semanas habituales. No hay vuelos directos: se vuela vía Estambul, Belgrado, Bakú o Dubái.',
        US: 'Los ciudadanos estadounidenses necesitan una ETA (20 £), el equivalente británico del ESTA. Pídela unos días antes del vuelo.',
        IN: 'Los ciudadanos indios necesitan visado de visitante; hay centros de visados en muchas ciudades de India y en verano se usa mucho el trámite prioritario. A quien viaja a menudo le conviene el visado de 2 años.',
        DE: 'Los ciudadanos alemanes y del resto de la UE necesitan ETA desde abril de 2025 y deben viajar con pasaporte: el DNI no se acepta en la mayoría de los casos.',
      },
    },
    de: {
      summary:
        'Bürger der EU, der USA, Kanadas, Australiens, Japans, Koreas, der Golfstaaten und fast ganz Lateinamerikas reisen bis zu sechs Monate visumfrei ein, brauchen aber vorab eine ETA (20 £). Für russische, indische, chinesische, türkische und viele andere Pässe ist ein Standard-Visitor-Visum mit Biometrie nötig. Nur britische und irische Staatsangehörige sowie Menschen mit britischem Aufenthaltstitel brauchen weder das eine noch das andere.',
      apply:
        'Die ETA beantragst du in der offiziellen App UK ETA oder auf GOV.UK: Pass scannen, Selfie machen, 20 £ zahlen. Meist kommt die Antwort in Minuten, offiziell solltest du drei Werktage einplanen. Sie ist an den Pass gebunden, gilt zwei Jahre (oder bis zum Passablauf) und deckt beliebig viele Besuche von je bis zu sechs Monaten ab. Das Standard-Visitor-Visum kostet seit April 2026 135 £: Online-Antrag, Biometrie im Visumzentrum, Entscheidung nach etwa drei Wochen; Express-Optionen kosten extra.',
      visaRun:
        'Eine Formel wie die Schengen-Regel gibt es nicht, doch Aus- und Wiedereinreise setzt nichts zurück: Jeder Besuch ist auf sechs Monate begrenzt, und die Grenzbeamten schauen, wie viel Zeit du in den letzten 12 Monaten im Land verbracht hast. Wer faktisch mehr als ein halbes Jahr hier lebt, riskiert die Zurückweisung. Ein Abstecher nach Irland bringt nichts – zwischen beiden Ländern gibt es keine Passkontrolle, er zählt also nicht als Unterbrechung.',
      transit:
        'Wer in Heathrow oder Manchester im Transitbereich bleibt, braucht derzeit keine ETA – eine vorübergehende Ausnahme, die wegfallen kann, also prüfe das vor dem Flug. Visumpflichtige brauchen ein Direct Airside Transit Visa, außer sie haben ein gültiges Visum oder einen Aufenthaltstitel der USA, Kanadas, Australiens, Neuseelands, des Schengenraums oder Irlands. Um während des Umstiegs den Flughafen zu verlassen, brauchst du eine ETA oder ein Visum; ob Visumpflichtige mit diesen Dokumenten ohne Visum einreisen dürfen, hängt von Pass und Route ab – sieh auf GOV.UK nach.',
      hacks: [
        'Remote für den eigenen Arbeitgeber oder Kunden zu arbeiten ist bei einem Besuch erlaubt, solange es nicht der Hauptzweck der Reise ist – ein Nomadenvisum brauchst du nicht.',
        'Wer mindestens zweimal im Jahr kommt, fährt mit einem Langzeitvisum günstiger: 506 £ für 2 Jahre, 903 £ für 5 und 1.128 £ für 10. Jeder Besuch bleibt auf sechs Monate begrenzt.',
        'Jede Person braucht eine eigene ETA, auch Babys, aber eine Person kann alle Anträge der Familie über ein einziges Handy in der App UK ETA stellen.',
        'Die ETA hängt am Pass – mit einem neuen Pass zahlst du erneut. Läuft deiner bald ab, verlängere ihn zuerst und beantrage die ETA danach.',
        'EU-Bürger mit settled oder pre-settled status aus dem EU Settlement Scheme brauchen keine ETA und dürfen weiter mit dem Personalausweis reisen.',
      ],
      pitfalls: [
        'Nachgemachte Websites verlangen 50–100 £ für eine ETA. Beantrage sie nur in der App UK ETA oder auf GOV.UK – die offizielle Gebühr beträgt 20 £.',
        'Airlines, Fähren und Eurostar prüfen die ETA vor dem Einsteigen elektronisch, auch auf Verbindungen aus Irland. Ohne Genehmigung kommst du nicht an Bord.',
        'Seit 2021 dürfen die meisten EU-Bürger nicht mehr mit dem Personalausweis einreisen – nimm den Reisepass mit.',
        'Eine britische Visumablehnung bleibt gespeichert und muss in späteren Anträgen für Großbritannien, die USA, Kanada und Australien angegeben werden. Beantrage das Visum mit soliden Nachweisen über Geld und Bindungen zu Hause statt auf gut Glück.',
      ],
      passports: {
        RU: 'Russische Staatsangehörige brauchen ein Standard-Visitor-Visum. Beantragen kannst du es in Russland oder in jedem Land, in dem du dich legal aufhältst (etwa Serbien, Türkei oder VAE); die Gebühr wird online mit einer im Ausland ausgegebenen Karte bezahlt. Plane mehr als die üblichen drei Wochen ein. Direktflüge gibt es nicht – man fliegt über Istanbul, Belgrad, Baku oder Dubai.',
        US: 'US-Bürger brauchen eine ETA (20 £), das britische Gegenstück zum ESTA. Beantrage sie ein paar Tage vor dem Flug.',
        IN: 'Indische Staatsangehörige brauchen ein Besuchervisum; Visumzentren gibt es in vielen indischen Städten, im Sommer ist die Priority-Bearbeitung beliebt. Wer oft reist, nimmt besser das 2-Jahres-Visum.',
        DE: 'Deutsche und andere EU-Bürger brauchen seit April 2025 eine ETA und müssen mit Reisepass reisen – der Personalausweis wird für die meisten nicht akzeptiert.',
      },
    },
    fr: {
      summary:
        'Les citoyens de l’UE, des États-Unis, du Canada, de l’Australie, du Japon, de la Corée, des pays du Golfe et de presque toute l’Amérique latine entrent sans visa jusqu’à six mois, mais doivent obtenir une ETA (20 £) avant le départ. Les passeports russes, indiens, chinois, turcs et de nombreux autres pays exigent un visa Standard Visitor avec biométrie. Seuls les citoyens britanniques et irlandais et les résidents du Royaume-Uni n’ont besoin ni de l’un ni de l’autre.',
      apply:
        'L’ETA se demande dans l’application officielle UK ETA ou sur GOV.UK : scan du passeport, selfie, paiement de 20 £. La réponse tombe le plus souvent en quelques minutes ; officiellement, comptez trois jours ouvrés. Elle est liée au passeport, vaut deux ans (ou jusqu’à l’expiration du passeport) et couvre un nombre illimité de séjours de six mois maximum. Le visa Standard Visitor coûte 135 £ depuis avril 2026 : formulaire en ligne, biométrie dans un centre de visas, décision en trois semaines environ ; les options accélérées sont payantes.',
      visaRun:
        'Il n’y a pas de formule comme celle de Schengen, mais sortir et revenir ne remet rien à zéro : chaque séjour est plafonné à six mois, et l’agent regarde combien de temps vous avez passé dans le pays sur les 12 derniers mois. Si vous y vivez de fait plus de la moitié de l’année, vous risquez un refus. Un aller-retour en Irlande ne sert à rien : il n’y a pas de contrôle des passeports entre les deux pays, cela ne compte donc pas comme une interruption.',
      transit:
        'Les passagers qui restent en zone de transit à Heathrow ou Manchester n’ont pas besoin d’ETA pour l’instant ; c’est une exemption temporaire qui peut prendre fin, vérifiez avant de voler. Les ressortissants soumis à visa doivent avoir un Direct Airside Transit Visa, sauf s’ils détiennent un visa ou un titre de séjour valide des États-Unis, du Canada, de l’Australie, de la Nouvelle-Zélande, de l’espace Schengen ou de l’Irlande. Pour sortir de l’aéroport pendant l’escale, il faut une ETA ou un visa ; la possibilité pour les ressortissants soumis à visa de passer côté ville sans visa grâce à ces documents dépend du passeport et de l’itinéraire, renseignez-vous sur GOV.UK.',
      hacks: [
        'Le télétravail pour votre employeur ou vos clients est autorisé pendant un séjour touristique tant que ce n’est pas le but principal du voyage : pas besoin de visa nomade.',
        'Si vous venez au moins deux fois par an, le visa de longue durée est rentable : 506 £ pour 2 ans, 903 £ pour 5 ans et 1 128 £ pour 10 ans. Chaque séjour reste limité à six mois.',
        'Chaque personne a besoin de sa propre ETA, bébés compris, mais une seule personne peut faire les demandes de toute la famille depuis un même téléphone dans l’application UK ETA.',
        'L’ETA est liée au passeport : avec un nouveau passeport, il faut repayer. Si le vôtre expire bientôt, renouvelez-le d’abord et demandez l’ETA ensuite.',
        'Les citoyens de l’UE ayant le settled ou pre-settled status de l’EU Settlement Scheme n’ont pas besoin d’ETA et peuvent toujours voyager avec leur carte d’identité.',
      ],
      pitfalls: [
        'Des sites copiés facturent l’ETA 50 à 100 £. Faites la demande uniquement dans l’application UK ETA ou sur GOV.UK : le tarif officiel est de 20 £.',
        'Compagnies aériennes, ferries et Eurostar vérifient l’ETA électroniquement avant l’embarquement, y compris au départ de l’Irlande. Sans autorisation, vous ne monterez pas à bord.',
        'Depuis 2021, la plupart des citoyens de l’UE ne peuvent plus entrer avec leur carte d’identité : prenez votre passeport.',
        'Un refus de visa britannique reste enregistré et doit être déclaré dans les futures demandes pour le Royaume-Uni, les États-Unis, le Canada et l’Australie. Déposez un dossier solide sur vos ressources et vos attaches plutôt que de tenter votre chance.',
      ],
      passports: {
        RU: 'Les ressortissants russes ont besoin d’un visa Standard Visitor. La demande peut se faire en Russie ou dans tout pays où vous séjournez légalement (Serbie, Turquie ou Émirats, par exemple) ; les frais se paient en ligne avec une carte émise hors de Russie. Prévoyez plus que les trois semaines habituelles. Il n’y a pas de vol direct : on passe par Istanbul, Belgrade, Bakou ou Dubaï.',
        US: 'Les citoyens américains ont besoin d’une ETA (20 £), l’équivalent britannique de l’ESTA. Faites la demande quelques jours avant le vol.',
        IN: 'Les citoyens indiens ont besoin d’un visa visiteur ; des centres de visas existent dans de nombreuses villes indiennes et le traitement prioritaire est très demandé l’été. Pour les voyageurs fréquents, le visa de 2 ans est plus avantageux.',
        DE: 'Les citoyens allemands et des autres pays de l’UE doivent avoir une ETA depuis avril 2025 et voyager avec un passeport : la carte d’identité n’est pas acceptée pour la plupart.',
      },
    },
    it: {
      summary:
        'I cittadini di UE, Stati Uniti, Canada, Australia, Giappone, Corea, paesi del Golfo e quasi tutta l’America Latina entrano senza visto fino a sei mesi, ma prima di partire devono ottenere l’ETA (20 £). I passaporti di Russia, India, Cina, Turchia e molti altri paesi richiedono il visto Standard Visitor con dati biometrici. Solo i cittadini britannici e irlandesi e i residenti nel Regno Unito non hanno bisogno né dell’uno né dell’altro.',
      apply:
        'L’ETA si richiede nell’app ufficiale UK ETA o su GOV.UK: scansioni il passaporto, fai un selfie e paghi 20 £. Di solito la risposta arriva in pochi minuti; ufficialmente bisogna calcolare tre giorni lavorativi. È legata al passaporto, vale due anni (o fino alla scadenza del passaporto) e copre tutti i viaggi che vuoi, ognuno fino a sei mesi. Il visto Standard Visitor costa 135 £ da aprile 2026: modulo online, biometria in un centro visti, decisione in circa tre settimane; i servizi rapidi si pagano a parte.',
      visaRun:
        'Non esiste una formula come quella di Schengen, ma uscire e rientrare non azzera nulla: ogni visita dura al massimo sei mesi e l’agente di frontiera guarda quanto tempo hai passato nel paese negli ultimi 12 mesi. Se di fatto vivi qui per più di metà dell’anno, rischi il respingimento. Una puntata in Irlanda non serve: tra i due paesi non c’è controllo passaporti, quindi non conta come interruzione.',
      transit:
        'Chi resta nella zona transiti di Heathrow o Manchester al momento non ha bisogno dell’ETA; è un’esenzione temporanea che potrebbe finire, quindi verifica prima del volo. Chi è soggetto a visto deve avere un Direct Airside Transit Visa, a meno che non possieda un visto o un permesso di soggiorno valido di Stati Uniti, Canada, Australia, Nuova Zelanda, area Schengen o Irlanda. Per uscire dall’aeroporto durante lo scalo servono l’ETA o un visto; se con quei documenti chi è soggetto a visto possa entrare senza visto dipende da passaporto e itinerario, controlla su GOV.UK.',
      hacks: [
        'Lavorare da remoto per il tuo datore di lavoro o i tuoi clienti durante una visita è consentito, purché non sia lo scopo principale del viaggio: non serve un visto per nomadi digitali.',
        'Se ci vai almeno due volte l’anno conviene il visto di lunga durata: 506 £ per 2 anni, 903 £ per 5 e 1.128 £ per 10. Ogni visita resta comunque limitata a sei mesi.',
        'Ogni persona deve avere la propria ETA, neonati compresi, ma una sola persona può fare le domande per tutta la famiglia da un unico telefono nell’app UK ETA.',
        'L’ETA è legata al passaporto: con un passaporto nuovo si paga di nuovo. Se il tuo scade presto, rinnovalo prima e chiedi l’ETA dopo.',
        'I cittadini UE con settled o pre-settled status dell’EU Settlement Scheme non hanno bisogno dell’ETA e possono ancora viaggiare con la carta d’identità.',
      ],
      pitfalls: [
        'I siti clone chiedono 50–100 £ per un’ETA. Fai domanda solo nell’app UK ETA o su GOV.UK: la tariffa ufficiale è di 20 £.',
        'Compagnie aeree, traghetti ed Eurostar controllano l’ETA elettronicamente prima dell’imbarco, anche sulle tratte dall’Irlanda. Senza approvazione non ti fanno salire.',
        'Dal 2021 la maggior parte dei cittadini UE non può più entrare con la carta d’identità: porta il passaporto.',
        'Un rifiuto di visto britannico resta registrato e va dichiarato nelle future domande per Regno Unito, Stati Uniti, Canada e Australia. Presenta prove solide di fondi e legami con il tuo paese invece di tentare la fortuna.',
      ],
      passports: {
        RU: 'I cittadini russi hanno bisogno del visto Standard Visitor. Si può chiedere in Russia o in qualsiasi paese in cui soggiorni legalmente (per esempio Serbia, Turchia o Emirati); la tassa si paga online con una carta emessa fuori dalla Russia. Calcola più delle tre settimane standard. Non ci sono voli diretti: si passa da Istanbul, Belgrado, Baku o Dubai.',
        US: 'I cittadini statunitensi hanno bisogno dell’ETA (20 £), l’equivalente britannico dell’ESTA. Fai domanda qualche giorno prima del volo.',
        IN: 'I cittadini indiani hanno bisogno del visto per visitatori; i centri visti sono presenti in molte città indiane e d’estate va molto la procedura prioritaria. A chi viaggia spesso conviene il visto di 2 anni.',
        DE: 'I cittadini tedeschi e degli altri paesi UE hanno bisogno dell’ETA da aprile 2025 e devono viaggiare con il passaporto: la carta d’identità per lo più non è accettata.',
      },
    },
  },
};

export default guide;
