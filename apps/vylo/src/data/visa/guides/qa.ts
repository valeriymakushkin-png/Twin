import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'QA',
  checked: '2026-10',
  fees: {
    voa: { kind: 'free' },
    eta: { kind: 'fixed', amount: 100, currency: 'QAR' },
    evisa: { kind: 'fixed', amount: 100, currency: 'QAR' },
  },
  stay: { voa: 30, eta: 30, evisa: 30 },
  links: { evisa: 'https://hayya.qa', immigration: 'https://portal.moi.gov.qa' },
  docs: ['returnTicket', 'booking', 'insurance'],
  passportMonths: 6,
  rule: { days: 90, window: 180 },
  extend: { days: 30 },
  visaRun: 'limited',
  borders: [{ name: 'Hamad International (DOH) → Dubai', to: 'AE', lat: 25.2731, lng: 51.6081 }],
  waivers: [
    {
      holds: ['visaUS', 'visaGB', 'visaSchengen', 'visaCA', 'visaAU', 'visaNZ', 'resUS', 'resGB', 'resEU', 'resCA', 'resAU'],
      status: 'eta',
      days: 30,
    },
    { holds: ['resGCC'], status: 'voa', days: 30 },
  ],
  hackScope: [['regime:eta', 'regime:evisa', 'regime:required'], ['regime:free', 'regime:voa'], null, null],
  pitfallScope: [null, null, null],
  text: {
    ru: {
      summary:
        'Граждане примерно сотни стран, включая Россию, ЕС, Великобританию, США, Индию и Китай, получают на паспортном контроле бесплатное разрешение на въезд: европейцы, британцы и американцы — на 90 дней в течение 180, россияне, индийцы, китайцы и другие — на 30 дней с возможностью продлить ещё на 30. Остальным нужна виза через портал Hayya — проще всего по визе или ВНЖ США, Великобритании, Шенгена, Канады, Австралии или Новой Зеландии.',
      apply:
        'Если ваш паспорт в списке безвизовых, ничего оформлять не нужно: на границе показывают обратный билет, бронь отеля и медицинскую страховку. Остальные подают заявку на hayya.qa: туристическая виза или ETA для держателей западных виз стоит 100 риалов и приходит обычно за несколько дней. Подавайте не позже чем за неделю до вылета.',
      extend:
        'Тридцатидневное разрешение продлевают ещё на 30 дней через приложение Metrash или в сервисном центре МВД до истечения срока; нужна продлённая бронь отеля и страховка. 90-дневное пребывание не продлевают.',
      visaRun:
        'Для 90-дневной группы работает правило 90 из 180, и выезды его не обнуляют. 30-дневная группа после выезда получает новый срок, но частые возвращения вызывают вопросы. Единственная сухопутная граница — Абу-Самра с Саудовской Аравией, поэтому визаран обычно делают перелётом в Дубай или Маскат.',
      hacks: [
        'Владельцы действующей визы или ВНЖ США, Великобритании, Шенгена, Канады, Австралии или Новой Зеландии любой национальности получают ETA через Hayya за 100 риалов — не нужно собирать документы на обычную визу.',
        'Qatar Airways продаёт стоповеры в Дохе с отелями от Discover Qatar по сниженным ценам: если ваш паспорт безвизовый, на одну-две ночи можно выйти в город без доплаты за визу.',
        'Единая туристическая виза стран Залива (GCC) на октябрь 2026 года всё ещё не запущена. Для поездки в соседние страны оформляйте их собственные визы.',
        'Сухопутный переход Абу-Самра — Сальва в Саудовскую Аравию открыт с 2021 года: на машине понадобится саудовская e-виза и страховка автомобиля для Саудовской Аравии.',
      ],
      pitfalls: [
        'С 2023 года медицинская страховка обязательна для всех посетителей Катара. Без полиса, действующего в Катаре, могут не пустить или заставить купить местный.',
        'Бронь отеля на весь срок проверяют на границе, особенно у 30-дневной группы. Бронь, отменённая сразу после покупки, — плохая идея: её видят в системе.',
        'Сайты-посредники «Qatar e-visa» берут в разы больше. Официальный портал только один — hayya.qa.',
      ],
      passports: {
        RU: 'Россияне получают 30 дней бесплатно на границе и могут продлить ещё на 30. Прямые рейсы Qatar Airways из Москвы, около 5,5 часа. Российские карты в Катаре не работают — везите доллары или евро наличными.',
        IN: 'Граждане Индии входят в 30-дневную безвизовую группу с продлением на 30 дней. Пограничники особенно внимательно смотрят на бронь отеля и обратный билет — держите их распечатанными.',
        US: 'Американцы, британцы и граждане ЕС получают 90 дней в течение 180; для США разрешение может оформляться сразу как многократное.',
      },
      waivers: [
        'Подходит виза или ВНЖ, действительные на момент въезда (лучше — на весь срок поездки). Туристической визы хватает, уже использовать её не обязательно. Нужны бронь отеля и обратный билет.',
        'Резиденты стран Залива (GCC) получают визу по прилёте за 100 риалов или заранее через Hayya. ВНЖ должен быть действителен ещё минимум 3 месяца; с 2023 года подходят резиденты любых профессий.',
      ],
    },
    en: {
      summary:
        'Citizens of about a hundred countries, including Russia, the EU, the UK, the US, India and China, get a free entry waiver at passport control: Europeans, Britons and Americans for 90 days within 180, Russians, Indians, Chinese and others for 30 days, extendable by 30. Everyone else needs a visa through the Hayya portal — easiest with a visa or residence permit from the US, UK, Schengen, Canada, Australia or New Zealand.',
      apply:
        'If your passport is on the waiver list, there is nothing to apply for: at the border you show a return ticket, a hotel booking and health insurance. Everyone else applies on hayya.qa: a tourist visa or the ETA for holders of Western visas costs 100 QAR and usually arrives within a few days. Apply at least a week before you fly.',
      extend:
        'The 30-day waiver can be extended by another 30 days through the Metrash app or an Interior Ministry service centre before it expires; you need an extended hotel booking and insurance. The 90-day stay cannot be extended.',
      visaRun:
        'The 90-day group is bound by 90 in 180, and leaving does not reset it. The 30-day group gets a fresh stay after leaving, but frequent returns draw questions. The only land border is Abu Samra with Saudi Arabia, so runs are usually done by flying to Dubai or Muscat.',
      hacks: [
        'Holders of a valid US, UK, Schengen, Canadian, Australian or New Zealand visa or residence permit, of any nationality, get an ETA through Hayya for 100 QAR — no need to assemble documents for a regular visa.',
        'Qatar Airways sells Doha stopovers with discounted Discover Qatar hotels: if your passport is visa-exempt, you can spend a night or two in town without paying for a visa.',
        'The GCC unified tourist visa has still not launched as of October 2026. For trips to neighbouring countries, get their own visas.',
        'The Abu Samra – Salwa land crossing into Saudi Arabia has been open since 2021: by car you need a Saudi e-visa and car insurance valid in Saudi Arabia.',
      ],
      pitfalls: [
        'Since 2023, health insurance is mandatory for all visitors to Qatar. Without a policy valid in Qatar you may be refused entry or made to buy a local one.',
        'Border officers check a hotel booking for the whole stay, especially for the 30-day group. A booking cancelled right after purchase is a bad idea — it shows up in the system.',
        '“Qatar e-visa” agency sites charge several times more. The only official portal is hayya.qa.',
      ],
      passports: {
        RU: 'Russian citizens get 30 days free at the border and can extend for another 30. Qatar Airways flies direct from Moscow in about five and a half hours. Russian bank cards do not work in Qatar, so bring dollars or euros in cash.',
        IN: 'Indian citizens are in the 30-day waiver group with a 30-day extension. Officers look closely at the hotel booking and return ticket — keep printed copies.',
        US: 'Americans, Britons and EU citizens get 90 days within 180; for US citizens the waiver may be issued as a multiple-entry one straight away.',
      },
      waivers: [
        'The visa or residence permit must be valid on entry (ideally for the whole trip). A tourist visa is enough and does not have to have been used. You need a hotel booking and a return ticket.',
        'GCC residents get a visa on arrival for 100 QAR or apply in advance through Hayya. The residence permit must be valid for at least three more months; since 2023 residents of every profession qualify.',
      ],
    },
    es: {
      summary:
        'Los ciudadanos de un centenar de países, entre ellos Rusia, la UE, Reino Unido, EE. UU., India y China, reciben en el control de pasaportes una exención de visado gratuita: europeos, británicos y estadounidenses por 90 días dentro de 180; rusos, indios, chinos y otros por 30 días, prorrogables 30 más. El resto necesita un visado a través del portal Hayya, lo más fácil con visado o residencia de EE. UU., Reino Unido, Schengen, Canadá, Australia o Nueva Zelanda.',
      apply:
        'Si tu pasaporte está en la lista de exención, no hay nada que tramitar: en la frontera enseñas el billete de vuelta, la reserva de hotel y el seguro médico. El resto solicita en hayya.qa: el visado turístico o la ETA para titulares de visados occidentales cuesta 100 QAR y suele llegar en pocos días. Solicítalo al menos una semana antes del vuelo.',
      extend:
        'La exención de 30 días se prorroga otros 30 con la app Metrash o en un centro de servicios del Ministerio del Interior antes de que venza; necesitas ampliar la reserva de hotel y el seguro. La estancia de 90 días no se prorroga.',
      visaRun:
        'El grupo de 90 días está sujeto a la regla de 90 en 180, y salir no la reinicia. El grupo de 30 días obtiene una nueva estancia al salir, pero las vueltas frecuentes despiertan preguntas. La única frontera terrestre es Abu Samra con Arabia Saudí, así que el visa run suele hacerse volando a Dubái o Mascate.',
      hacks: [
        'Los titulares de visado o residencia vigentes de EE. UU., Reino Unido, Schengen, Canadá, Australia o Nueva Zelanda, de cualquier nacionalidad, obtienen la ETA en Hayya por 100 QAR, sin reunir los documentos de un visado normal.',
        'Qatar Airways vende escalas largas en Doha con hoteles rebajados de Discover Qatar: si tu pasaporte está exento, puedes pasar una o dos noches en la ciudad sin pagar visado.',
        'En octubre de 2026 el visado turístico unificado del CCG sigue sin ponerse en marcha. Para viajar a los países vecinos, tramita sus propios visados.',
        'El paso terrestre de Abu Samra – Salwa hacia Arabia Saudí está abierto desde 2021: en coche necesitas el visado electrónico saudí y un seguro del vehículo válido en Arabia Saudí.',
      ],
      pitfalls: [
        'Desde 2023 el seguro médico es obligatorio para todos los visitantes de Catar. Sin una póliza válida en el país pueden negarte la entrada u obligarte a comprar una local.',
        'En la frontera comprueban la reserva de hotel para toda la estancia, sobre todo al grupo de 30 días. Cancelar la reserva justo después de comprarla es mala idea: se ve en el sistema.',
        'Las webs intermediarias de «Qatar e-visa» cobran varias veces más. El único portal oficial es hayya.qa.',
      ],
      passports: {
        RU: 'Los ciudadanos rusos reciben 30 días gratis en la frontera y pueden prorrogar otros 30. Qatar Airways vuela directo desde Moscú en unas cinco horas y media. Las tarjetas rusas no funcionan en Catar: lleva dólares o euros en efectivo.',
        IN: 'Los ciudadanos indios están en el grupo de 30 días con prórroga de 30. En la frontera miran con atención la reserva de hotel y el billete de vuelta: llévalos impresos.',
        US: 'Estadounidenses, británicos y ciudadanos de la UE tienen 90 días dentro de 180; a los estadounidenses se les puede emitir directamente una exención de entradas múltiples.',
      },
      waivers: [
        'El visado o la residencia deben estar vigentes al entrar (mejor durante todo el viaje). Basta un visado de turista y no hace falta haberlo usado. Necesitas reserva de hotel y billete de vuelta.',
        'Los residentes en países del CCG obtienen visado a la llegada por 100 QAR o lo solicitan antes en Hayya. El permiso de residencia debe tener al menos tres meses de validez; desde 2023 vale para residentes de cualquier profesión.',
      ],
    },
    de: {
      summary:
        'Staatsangehörige von rund hundert Ländern, darunter Russland, die EU, Großbritannien, die USA, Indien und China, erhalten an der Passkontrolle eine kostenlose Einreisebefreiung: Europäer, Briten und Amerikaner für 90 Tage innerhalb von 180, Russen, Inder, Chinesen und andere für 30 Tage mit Verlängerung um 30. Alle anderen brauchen ein Visum über das Hayya-Portal – am einfachsten mit Visum oder Aufenthaltstitel der USA, Großbritanniens, des Schengenraums, Kanadas, Australiens oder Neuseelands.',
      apply:
        'Steht dein Pass auf der Befreiungsliste, musst du nichts beantragen: An der Grenze zeigst du Rückflugticket, Hotelbuchung und Krankenversicherung. Alle anderen beantragen auf hayya.qa: Touristenvisum oder ETA für Inhaber westlicher Visa kosten 100 QAR und kommen meist innerhalb weniger Tage. Beantrage mindestens eine Woche vor dem Flug.',
      extend:
        'Die 30-Tage-Befreiung lässt sich vor Ablauf über die App Metrash oder ein Servicezentrum des Innenministeriums um 30 Tage verlängern; nötig sind verlängerte Hotelbuchung und Versicherung. Der 90-Tage-Aufenthalt ist nicht verlängerbar.',
      visaRun:
        'Für die 90-Tage-Gruppe gilt 90 aus 180, eine Ausreise setzt nichts zurück. Die 30-Tage-Gruppe bekommt nach der Ausreise einen neuen Aufenthalt, häufige Rückkehr wirft aber Fragen auf. Die einzige Landgrenze ist Abu Samra nach Saudi-Arabien, daher fliegt man für Visa-Runs meist nach Dubai oder Maskat.',
      hacks: [
        'Inhaber eines gültigen Visums oder Aufenthaltstitels der USA, Großbritanniens, des Schengenraums, Kanadas, Australiens oder Neuseelands bekommen unabhängig von der Nationalität über Hayya eine ETA für 100 QAR – ohne die Unterlagen für ein reguläres Visum.',
        'Qatar Airways verkauft Stopover in Doha mit vergünstigten Discover-Qatar-Hotels: Mit visumfreiem Pass kannst du ein, zwei Nächte in der Stadt verbringen, ohne für ein Visum zu zahlen.',
        'Das einheitliche GCC-Touristenvisum ist im Oktober 2026 noch nicht gestartet. Für Nachbarländer brauchst du weiterhin deren eigene Visa.',
        'Der Landübergang Abu Samra – Salwa nach Saudi-Arabien ist seit 2021 offen: Mit dem Auto brauchst du ein saudisches E-Visum und eine in Saudi-Arabien gültige Kfz-Versicherung.',
      ],
      pitfalls: [
        'Seit 2023 ist eine Krankenversicherung für alle Besucher Katars Pflicht. Ohne in Katar gültige Police droht die Zurückweisung oder der Kauf einer lokalen.',
        'Die Grenzpolizei prüft eine Hotelbuchung für den ganzen Aufenthalt, besonders bei der 30-Tage-Gruppe. Eine direkt nach dem Kauf stornierte Buchung ist keine gute Idee – sie ist im System sichtbar.',
        'Vermittlerseiten für „Qatar e-visa“ verlangen ein Vielfaches. Das einzige offizielle Portal ist hayya.qa.',
      ],
      passports: {
        RU: 'Russische Staatsangehörige erhalten an der Grenze kostenlos 30 Tage und können um 30 verlängern. Qatar Airways fliegt in etwa fünfeinhalb Stunden direkt ab Moskau. Russische Bankkarten funktionieren in Katar nicht – nimm Dollar oder Euro in bar mit.',
        IN: 'Indische Staatsangehörige gehören zur 30-Tage-Gruppe mit 30 Tagen Verlängerung. Hotelbuchung und Rückflugticket werden genau angeschaut – hab sie ausgedruckt dabei.',
        US: 'Amerikaner, Briten und EU-Bürger bekommen 90 Tage innerhalb von 180; für US-Bürger kann die Befreiung gleich für mehrfache Einreise ausgestellt werden.',
      },
      waivers: [
        'Visum oder Aufenthaltstitel müssen bei der Einreise gültig sein (am besten für die ganze Reise). Ein Touristenvisum reicht und muss nicht schon benutzt worden sein. Nötig sind Hotelbuchung und Rückflugticket.',
        'Einwohner der GCC-Staaten bekommen ein Visum bei Ankunft für 100 QAR oder beantragen es vorab über Hayya. Der Aufenthaltstitel muss noch mindestens drei Monate gültig sein; seit 2023 sind Einwohner aller Berufe berechtigt.',
      ],
    },
    fr: {
      summary:
        'Les ressortissants d’une centaine de pays, dont la Russie, l’UE, le Royaume-Uni, les États-Unis, l’Inde et la Chine, reçoivent au contrôle des passeports une exemption de visa gratuite : Européens, Britanniques et Américains pour 90 jours sur 180, Russes, Indiens, Chinois et autres pour 30 jours prolongeables de 30. Les autres ont besoin d’un visa via le portail Hayya, le plus simple avec un visa ou titre de séjour américain, britannique, Schengen, canadien, australien ou néo-zélandais.',
      apply:
        'Si votre passeport figure sur la liste d’exemption, aucune démarche : à la frontière, vous présentez billet retour, réservation d’hôtel et assurance santé. Les autres déposent une demande sur hayya.qa : le visa touristique ou l’ETA pour titulaires de visas occidentaux coûte 100 QAR et arrive en général en quelques jours. Faites la demande au moins une semaine avant le départ.',
      extend:
        'L’exemption de 30 jours se prolonge de 30 jours via l’application Metrash ou dans un centre de services du ministère de l’Intérieur avant son expiration ; il faut prolonger la réservation d’hôtel et l’assurance. Le séjour de 90 jours ne se prolonge pas.',
      visaRun:
        'Le groupe à 90 jours est soumis à la règle des 90 jours sur 180, qu’une sortie ne remet pas à zéro. Le groupe à 30 jours obtient un nouveau séjour après une sortie, mais les retours fréquents suscitent des questions. La seule frontière terrestre est Abu Samra, avec l’Arabie saoudite : le visa run se fait donc en général en avion vers Dubaï ou Mascate.',
      hacks: [
        'Les titulaires d’un visa ou titre de séjour valide des États-Unis, du Royaume-Uni, de l’espace Schengen, du Canada, d’Australie ou de Nouvelle-Zélande, quelle que soit leur nationalité, obtiennent une ETA via Hayya pour 100 QAR, sans constituer le dossier d’un visa classique.',
        'Qatar Airways vend des escales à Doha avec des hôtels Discover Qatar à prix réduit : avec un passeport exempté, vous pouvez passer une ou deux nuits en ville sans payer de visa.',
        'Le visa touristique unifié du CCG n’est toujours pas lancé en octobre 2026. Pour les pays voisins, demandez leurs propres visas.',
        'Le poste terrestre d’Abu Samra – Salwa vers l’Arabie saoudite est ouvert depuis 2021 : en voiture, il faut l’e-visa saoudien et une assurance auto valable en Arabie saoudite.',
      ],
      pitfalls: [
        'Depuis 2023, l’assurance santé est obligatoire pour tous les visiteurs au Qatar. Sans contrat valable dans le pays, l’entrée peut être refusée ou l’achat d’une assurance locale imposé.',
        'La réservation d’hôtel pour tout le séjour est contrôlée, surtout pour le groupe à 30 jours. Annuler la réservation juste après l’avoir payée est une mauvaise idée : cela se voit dans le système.',
        'Les sites intermédiaires « Qatar e-visa » facturent plusieurs fois plus cher. Le seul portail officiel est hayya.qa.',
      ],
      passports: {
        RU: 'Les ressortissants russes reçoivent 30 jours gratuits à la frontière et peuvent prolonger de 30 jours. Qatar Airways relie Moscou en direct en cinq heures et demie environ. Les cartes bancaires russes ne fonctionnent pas au Qatar : emportez des dollars ou des euros en espèces.',
        IN: 'Les ressortissants indiens font partie du groupe à 30 jours, prolongeables de 30. La réservation d’hôtel et le billet retour sont examinés de près : gardez-en une version imprimée.',
        US: 'Américains, Britanniques et citoyens de l’UE ont 90 jours sur 180 ; pour les Américains, l’exemption peut être délivrée d’emblée en entrées multiples.',
      },
      waivers: [
        'Le visa ou le titre de séjour doit être valable à l’entrée (idéalement pendant tout le voyage). Un visa touristique suffit, sans avoir été utilisé. Il faut une réservation d’hôtel et un billet retour.',
        'Les résidents des pays du CCG obtiennent un visa à l’arrivée pour 100 QAR ou font la demande à l’avance sur Hayya. Le titre de séjour doit être valable encore au moins trois mois ; depuis 2023, toutes les professions sont éligibles.',
      ],
    },
    it: {
      summary:
        'I cittadini di circa cento paesi, tra cui Russia, UE, Regno Unito, Stati Uniti, India e Cina, ricevono al controllo passaporti un’esenzione gratuita: europei, britannici e statunitensi per 90 giorni su 180, russi, indiani, cinesi e altri per 30 giorni prorogabili di 30. Gli altri hanno bisogno di un visto tramite il portale Hayya, più semplice con visto o permesso di soggiorno di Stati Uniti, Regno Unito, area Schengen, Canada, Australia o Nuova Zelanda.',
      apply:
        'Se il tuo passaporto è nell’elenco delle esenzioni non devi richiedere nulla: alla frontiera mostri biglietto di ritorno, prenotazione dell’hotel e assicurazione sanitaria. Gli altri fanno domanda su hayya.qa: il visto turistico o l’ETA per chi ha visti occidentali costa 100 QAR e arriva di solito in pochi giorni. Fai domanda almeno una settimana prima del volo.',
      extend:
        'L’esenzione di 30 giorni si proroga di altri 30 con l’app Metrash o in un centro servizi del ministero dell’Interno prima della scadenza; servono prenotazione dell’hotel e assicurazione estese. Il soggiorno di 90 giorni non si proroga.',
      visaRun:
        'Il gruppo dei 90 giorni segue la regola dei 90 su 180, che l’uscita non azzera. Il gruppo dei 30 giorni ottiene un nuovo soggiorno dopo l’uscita, ma i rientri frequenti attirano domande. L’unico confine terrestre è Abu Samra con l’Arabia Saudita, quindi il visa run si fa di solito in volo verso Dubai o Mascate.',
      hacks: [
        'Chi ha un visto o un permesso di soggiorno valido di Stati Uniti, Regno Unito, area Schengen, Canada, Australia o Nuova Zelanda, di qualsiasi nazionalità, ottiene l’ETA tramite Hayya per 100 QAR, senza preparare i documenti di un visto normale.',
        'Qatar Airways vende stopover a Doha con hotel scontati di Discover Qatar: con un passaporto esente puoi passare una o due notti in città senza pagare il visto.',
        'A ottobre 2026 il visto turistico unico del CCG non è ancora partito. Per i paesi vicini servono ancora i loro visti.',
        'Il valico terrestre di Abu Samra – Salwa verso l’Arabia Saudita è aperto dal 2021: in auto servono il visto elettronico saudita e un’assicurazione del veicolo valida in Arabia Saudita.',
      ],
      pitfalls: [
        'Dal 2023 l’assicurazione sanitaria è obbligatoria per tutti i visitatori del Qatar. Senza una polizza valida nel paese puoi essere respinto o costretto a comprarne una locale.',
        'Alla frontiera controllano la prenotazione dell’hotel per tutto il soggiorno, soprattutto al gruppo dei 30 giorni. Cancellarla subito dopo averla pagata è una pessima idea: si vede nel sistema.',
        'I siti intermediari di «Qatar e-visa» chiedono molto di più. L’unico portale ufficiale è hayya.qa.',
      ],
      passports: {
        RU: 'I cittadini russi ricevono 30 giorni gratuiti alla frontiera e possono prorogare di altri 30. Qatar Airways vola diretto da Mosca in circa cinque ore e mezza. Le carte bancarie russe in Qatar non funzionano: porta dollari o euro in contanti.',
        IN: 'I cittadini indiani rientrano nel gruppo dei 30 giorni con proroga di 30. Alla frontiera guardano con attenzione prenotazione dell’hotel e biglietto di ritorno: tienili stampati.',
        US: 'Statunitensi, britannici e cittadini UE hanno 90 giorni su 180; per gli statunitensi l’esenzione può essere rilasciata subito a ingressi multipli.',
      },
      waivers: [
        'Il visto o il permesso di soggiorno deve essere valido all’ingresso (meglio per tutto il viaggio). Basta un visto turistico, anche mai usato. Servono prenotazione dell’hotel e biglietto di ritorno.',
        'I residenti nei paesi del CCG ottengono il visto all’arrivo per 100 QAR o lo richiedono prima su Hayya. Il permesso di soggiorno deve essere valido ancora almeno tre mesi; dal 2023 valgono tutte le professioni.',
      ],
    },
  },
};

export default guide;
