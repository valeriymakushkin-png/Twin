import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'PE',
  checked: '2026-10',
  links: { immigration: 'https://www.gob.pe/migraciones' },
  docs: ['returnTicket'],
  passportMonths: 6,
  rule: { days: 183, window: 365 },
  visaRun: 'limited',
  waivers: [
    {
      holds: ['visaUS', 'visaCA', 'visaGB', 'visaAU', 'visaSchengen', 'resUS', 'resCA', 'resGB', 'resAU', 'resEU'],
      passports: ['IN', 'CN'],
      status: 'free',
      days: 183,
    },
  ],
  text: {
    ru: {
      summary:
        'Граждане России, Беларуси, Украины, Грузии, США, ЕС, Великобритании, Канады, Австралии, Японии и почти всей Латинской Америки въезжают без визы. Офицер обычно даёт 90 дней, по просьбе — до 183, но не больше 183 дней за 365. Граждане Индии и Китая с визой или ВНЖ США, Канады, Великобритании, Австралии или Шенгена тоже въезжают без визы.',
      apply:
        'Безвизовым туристам нужны паспорт со сроком действия от 6 месяцев и обратный или выездной билет. Бумажной миграционной карты нет — данные о въезде и число дней хранятся в электронной TAM, её можно скачать на сайте Migraciones. Остальным нужна виза в консульстве Перу.',
      visaRun:
        'Выезд и возвращение работают лишь в пределах 183 дней за любые 365: если вам дали 90 дней, после выезда в Чили (Такна — Арика) или Боливию (Десагуадеро) можно вернуться и получить остаток. Сверх 183 дней визаран не помогает, а продлить туристический срок внутри страны нельзя.',
      hacks: [
        'Нужно больше 90 дней? Скажите об этом на паспортном контроле и покажите билет — офицер может сразу дать до 183 дней, а позже продлить уже не получится.',
        'Проверьте выданный срок в электронной TAM на сайте Migraciones сразу после въезда — иногда ставят 30 или 60 дней.',
        'Просрочка недорогая: штраф около 5–6 солей за день. Оплатите его заранее онлайн на сайте Migraciones, чтобы не задерживаться в аэропорту.',
        'Граждане стран Андского сообщества и Mercosur въезжают по удостоверению личности, без паспорта.',
      ],
      pitfalls: [
        'Никаких «перуанских eTA» и электронных туристических карт для безвизовых туристов не существует — сайты, которые их продают, — посредники.',
        'Лимит 183 дня считается за скользящие 365 дней, а не по календарному году: длинная поездка весной уменьшает запас на осень.',
        'Авиакомпании проверяют выездной билет — без него в Лиму могут не посадить.',
      ],
      waivers: [
        'Граждане Индии и Китая въезжают без визы на срок до 183 дней в году для туризма или деловых поездок, если у них есть виза США, Канады, Великобритании, Австралии или Шенгена, действующая ещё не меньше 6 месяцев на дату въезда, либо ПМЖ в одной из этих стран.',
      ],
      passports: {
        RU: 'Россиянам — без визы; обычно дают 90 дней, по просьбе до 183 в году. Прямых рейсов нет — летают через Стамбул, Мадрид или Амстердам. Российские карты не работают — берите доллары наличными.',
        US: 'Американцы въезжают без визы; обычно дают 90 дней, по просьбе — до 183.',
        IN: 'Индийцам нужна виза, если у них нет визы США, Канады, Великобритании, Австралии или Шенгена со сроком от 6 месяцев либо ПМЖ там.',
        VE: 'Гражданам Венесуэлы нужна виза Перу; въезд по просроченному паспорту больше не допускается.',
      },
    },
    en: {
      summary:
        'Citizens of Russia, Belarus, Ukraine, Georgia, the US, the EU, the UK, Canada, Australia, Japan and nearly all of Latin America enter visa-free. The officer usually grants 90 days, up to 183 on request, but never more than 183 days in any 365. Indian and Chinese citizens with a US, Canadian, UK, Australian or Schengen visa or residence permit also enter visa-free.',
      apply:
        'Visa-exempt travellers need a passport valid for six months and a return or onward ticket. There is no paper arrival card — your entry and days granted are kept in the electronic TAM, downloadable on the Migraciones site. Everyone else needs a visa from a Peruvian consulate.',
      visaRun:
        'Leaving and coming back only works within 183 days in any 365: if you were given 90 days, a trip to Chile (Tacna – Arica) or Bolivia (Desaguadero) lets you return for the remainder. Beyond 183 days a run will not help, and tourist stays cannot be extended inside the country.',
      hacks: [
        'Need more than 90 days? Say so at passport control and show your ticket — the officer can grant up to 183 days on the spot, while extending later is not possible.',
        'Check the days you got in the electronic TAM on the Migraciones site right after arrival — sometimes 30 or 60 days are entered.',
        'Overstays are cheap: about S/5–6 per day. Pay online on the Migraciones site in advance so you are not held up at the airport.',
        'Citizens of Andean Community and Mercosur countries can enter with a national ID card instead of a passport.',
      ],
      pitfalls: [
        'There is no “Peru eTA” or electronic tourist card for visa-exempt travellers — sites selling them are agencies.',
        'The 183-day cap runs over a rolling 365 days, not a calendar year: a long stay in spring shrinks what is left for autumn.',
        'Airlines check for an onward ticket — without one you may be refused boarding to Lima.',
      ],
      waivers: [
        'Indian and Chinese citizens enter visa-free for up to 183 days a year for tourism or business if they hold a US, Canadian, UK, Australian or Schengen visa with at least six months’ validity left on arrival, or permanent residence in one of those countries.',
      ],
      passports: {
        RU: 'Russians enter visa-free, usually for 90 days and up to 183 a year on request. There are no direct flights — people fly via Istanbul, Madrid or Amsterdam. Russian cards do not work, so bring US dollars in cash.',
        US: 'Americans enter visa-free; 90 days are usually granted, up to 183 on request.',
        IN: 'Indians need a visa unless they hold a US, Canadian, UK, Australian or Schengen visa valid for at least six months, or permanent residence there.',
        VE: 'Venezuelan citizens need a Peruvian visa; entry with an expired passport is no longer allowed.',
      },
    },
    es: {
      summary:
        'Los ciudadanos de Rusia, Bielorrusia, Ucrania, Georgia, EE. UU., la UE, Reino Unido, Canadá, Australia, Japón y casi toda Latinoamérica entran sin visa. El inspector suele dar 90 días, hasta 183 si lo pides, pero nunca más de 183 días en 365. Los ciudadanos de India y China con visa o residencia de EE. UU., Canadá, Reino Unido, Australia o Schengen también entran sin visa.',
      apply:
        'Si no necesitas visa, te bastan un pasaporte con seis meses de vigencia y boleto de regreso o salida. No hay tarjeta andina en papel: tu ingreso y los días otorgados quedan en la TAM virtual, que puedes descargar en el sitio de Migraciones. El resto necesita visa de un consulado peruano.',
      visaRun:
        'Salir y volver solo sirve dentro de los 183 días en cualquier periodo de 365: si te dieron 90 días, un viaje a Chile (Tacna – Arica) o Bolivia (Desaguadero) te permite volver por el resto. Más allá de 183 días no ayuda, y la estancia de turista no se puede prorrogar dentro del país.',
      hacks: [
        '¿Necesitas más de 90 días? Dilo en el control migratorio y enseña tu boleto: el inspector puede darte hasta 183 días en el acto, mientras que después no se puede ampliar.',
        'Revisa los días otorgados en la TAM virtual del sitio de Migraciones justo después de llegar: a veces ponen 30 o 60.',
        'Quedarse de más sale barato: unos 5–6 soles por día. Paga la multa con antelación en línea en el sitio de Migraciones para no retrasarte en el aeropuerto.',
        'Los ciudadanos de la Comunidad Andina y del Mercosur pueden entrar con su documento de identidad en lugar del pasaporte.',
      ],
      pitfalls: [
        'No existe ninguna «eTA de Perú» ni tarjeta electrónica de turista para quien no necesita visa: las webs que las venden son intermediarias.',
        'El tope de 183 días se cuenta en 365 días móviles, no por año calendario: una estancia larga en primavera reduce lo que te queda para el otoño.',
        'Las aerolíneas revisan el boleto de salida; sin él pueden negarte el embarque a Lima.',
      ],
      waivers: [
        'Los ciudadanos de India y China entran sin visa hasta 183 días al año por turismo o negocios si tienen una visa de EE. UU., Canadá, Reino Unido, Australia o Schengen con al menos seis meses de vigencia al llegar, o residencia permanente en uno de esos países.',
      ],
      passports: {
        RU: 'Los rusos entran sin visa, normalmente por 90 días y hasta 183 al año si lo piden. No hay vuelos directos: se vuela vía Estambul, Madrid o Ámsterdam. Las tarjetas rusas no funcionan, así que lleva dólares en efectivo.',
        US: 'Los estadounidenses entran sin visa; suelen darles 90 días, hasta 183 si lo piden.',
        IN: 'Los indios necesitan visa salvo que tengan una visa de EE. UU., Canadá, Reino Unido, Australia o Schengen con al menos seis meses de vigencia, o residencia permanente allí.',
        VE: 'Los ciudadanos venezolanos necesitan visa peruana; ya no se permite entrar con pasaporte vencido.',
      },
    },
    de: {
      summary:
        'Staatsangehörige Russlands, Belarus’, der Ukraine, Georgiens, der USA, der EU, Großbritanniens, Kanadas, Australiens, Japans und fast ganz Lateinamerikas reisen visumfrei ein. Der Beamte gewährt meist 90 Tage, auf Wunsch bis zu 183, aber nie mehr als 183 Tage in 365. Inder und Chinesen mit Visum oder Aufenthaltstitel der USA, Kanadas, Großbritanniens, Australiens oder des Schengenraums reisen ebenfalls visumfrei ein.',
      apply:
        'Visumfreie Reisende brauchen einen sechs Monate gültigen Pass und ein Rück- oder Weiterreiseticket. Eine Papier-Einreisekarte gibt es nicht – Einreise und gewährte Tage stehen in der elektronischen TAM, die du auf der Seite von Migraciones herunterladen kannst. Alle anderen brauchen ein Visum eines peruanischen Konsulats.',
      visaRun:
        'Aus- und Wiedereinreise funktioniert nur innerhalb von 183 Tagen in beliebigen 365: Hast du 90 Tage bekommen, kannst du nach einem Abstecher nach Chile (Tacna – Arica) oder Bolivien (Desaguadero) für den Rest zurückkommen. Über 183 Tage hinaus hilft kein Run, und im Land lässt sich der Touristenaufenthalt nicht verlängern.',
      hacks: [
        'Brauchst du mehr als 90 Tage? Sag es an der Passkontrolle und zeig dein Ticket – der Beamte kann direkt bis zu 183 Tage geben, später verlängern geht nicht.',
        'Prüf die gewährten Tage gleich nach der Ankunft in der elektronischen TAM auf der Migraciones-Seite – manchmal werden 30 oder 60 eingetragen.',
        'Überziehen ist günstig: etwa 5–6 Soles pro Tag. Zahl das Bußgeld vorab online bei Migraciones, damit du am Flughafen nicht aufgehalten wirst.',
        'Bürger der Andengemeinschaft und der Mercosur-Staaten können mit dem Personalausweis statt mit dem Pass einreisen.',
      ],
      pitfalls: [
        'Eine „Peru-eTA“ oder elektronische Touristenkarte für Visumfreie gibt es nicht – Seiten, die so etwas verkaufen, sind Vermittler.',
        'Die 183-Tage-Grenze gilt für rollierende 365 Tage, nicht für das Kalenderjahr: Ein langer Aufenthalt im Frühjahr verkürzt, was dir im Herbst bleibt.',
        'Airlines prüfen ein Weiterreiseticket – ohne kann dir der Flug nach Lima verweigert werden.',
      ],
      waivers: [
        'Indische und chinesische Staatsangehörige reisen für Tourismus oder Geschäfte bis zu 183 Tage im Jahr visumfrei ein, wenn sie ein Visum der USA, Kanadas, Großbritanniens, Australiens oder des Schengenraums mit mindestens sechs Monaten Restgültigkeit bei Ankunft oder einen Daueraufenthalt in einem dieser Länder haben.',
      ],
      passports: {
        RU: 'Russen reisen visumfrei ein, meist für 90 Tage und auf Wunsch bis zu 183 im Jahr. Direktflüge gibt es nicht – geflogen wird über Istanbul, Madrid oder Amsterdam. Russische Karten funktionieren nicht, nimm also US-Dollar in bar mit.',
        US: 'US-Bürger reisen visumfrei ein; meist gibt es 90 Tage, auf Wunsch bis zu 183.',
        IN: 'Inder brauchen ein Visum, außer sie haben ein mindestens sechs Monate gültiges Visum der USA, Kanadas, Großbritanniens, Australiens oder des Schengenraums oder einen Daueraufenthalt dort.',
        VE: 'Venezolanische Staatsangehörige brauchen ein peruanisches Visum; die Einreise mit abgelaufenem Pass ist nicht mehr erlaubt.',
      },
    },
    fr: {
      summary:
        'Les ressortissants de Russie, du Bélarus, d’Ukraine, de Géorgie, des États-Unis, de l’UE, du Royaume-Uni, du Canada, de l’Australie, du Japon et de presque toute l’Amérique latine entrent sans visa. L’agent accorde généralement 90 jours, jusqu’à 183 sur demande, mais jamais plus de 183 jours sur 365. Les citoyens indiens et chinois titulaires d’un visa ou d’un titre de séjour des États-Unis, du Canada, du Royaume-Uni, de l’Australie ou de Schengen entrent aussi sans visa.',
      apply:
        'Les voyageurs exemptés doivent avoir un passeport valable six mois et un billet retour ou de continuation. Il n’y a pas de carte d’arrivée papier : votre entrée et les jours accordés figurent dans la TAM électronique, téléchargeable sur le site de Migraciones. Les autres ont besoin d’un visa d’un consulat péruvien.',
      visaRun:
        'Sortir et revenir ne marche que dans la limite de 183 jours sur 365 glissants : si l’on vous a donné 90 jours, un saut au Chili (Tacna – Arica) ou en Bolivie (Desaguadero) permet de revenir pour le reste. Au-delà de 183 jours, rien n’y fait, et le séjour touristique ne se prolonge pas dans le pays.',
      hacks: [
        'Besoin de plus de 90 jours ? Dites-le au contrôle des passeports en montrant votre billet : l’agent peut accorder jusqu’à 183 jours sur-le-champ, alors qu’une prolongation ultérieure est impossible.',
        'Vérifiez les jours accordés dans la TAM électronique sur le site de Migraciones dès l’arrivée : il arrive qu’on inscrive 30 ou 60 jours.',
        'Un dépassement coûte peu : environ 5 à 6 soles par jour. Réglez l’amende à l’avance en ligne sur le site de Migraciones pour ne pas être retenu à l’aéroport.',
        'Les citoyens de la Communauté andine et du Mercosur peuvent entrer avec leur carte d’identité au lieu du passeport.',
      ],
      pitfalls: [
        'Il n’existe aucune « eTA péruvienne » ni carte touristique électronique pour les voyageurs exemptés : les sites qui en vendent sont des intermédiaires.',
        'Le plafond de 183 jours court sur 365 jours glissants, pas sur l’année civile : un long séjour au printemps réduit ce qui reste pour l’automne.',
        'Les compagnies vérifient le billet de sortie : sans lui, l’embarquement pour Lima peut être refusé.',
      ],
      waivers: [
        'Les citoyens indiens et chinois entrent sans visa jusqu’à 183 jours par an pour tourisme ou affaires s’ils détiennent un visa des États-Unis, du Canada, du Royaume-Uni, de l’Australie ou de Schengen encore valable au moins six mois à l’arrivée, ou une résidence permanente dans l’un de ces pays.',
      ],
      passports: {
        RU: 'Les Russes entrent sans visa, en général pour 90 jours et jusqu’à 183 par an sur demande. Pas de vols directs : on passe par Istanbul, Madrid ou Amsterdam. Les cartes russes ne fonctionnent pas : emportez des dollars en espèces.',
        US: 'Les Américains entrent sans visa ; 90 jours sont généralement accordés, jusqu’à 183 sur demande.',
        IN: 'Les Indiens ont besoin d’un visa, sauf s’ils détiennent un visa des États-Unis, du Canada, du Royaume-Uni, de l’Australie ou de Schengen valable au moins six mois, ou une résidence permanente dans ces pays.',
        VE: 'Les citoyens vénézuéliens ont besoin d’un visa péruvien ; l’entrée avec un passeport expiré n’est plus admise.',
      },
    },
    it: {
      summary:
        'I cittadini di Russia, Bielorussia, Ucraina, Georgia, Stati Uniti, UE, Regno Unito, Canada, Australia, Giappone e quasi tutta l’America Latina entrano senza visto. L’agente di solito concede 90 giorni, fino a 183 su richiesta, ma mai più di 183 giorni in 365. Anche i cittadini di India e Cina con visto o residenza di Stati Uniti, Canada, Regno Unito, Australia o Schengen entrano senza visto.',
      apply:
        'Chi è esente ha bisogno di un passaporto valido sei mesi e di un biglietto di ritorno o di proseguimento. Non c’è una carta d’ingresso cartacea: ingresso e giorni concessi sono registrati nella TAM elettronica, scaricabile dal sito di Migraciones. Gli altri hanno bisogno del visto di un consolato peruviano.',
      visaRun:
        'Uscire e rientrare funziona solo entro 183 giorni in qualsiasi periodo di 365: se ti hanno dato 90 giorni, un salto in Cile (Tacna – Arica) o in Bolivia (Desaguadero) ti permette di rientrare per il resto. Oltre i 183 giorni non serve, e il soggiorno turistico non si proroga all’interno del paese.',
      hacks: [
        'Ti servono più di 90 giorni? Dillo al controllo passaporti e mostra il biglietto: l’agente può concederne fino a 183 subito, mentre dopo non si può prorogare.',
        'Controlla i giorni concessi nella TAM elettronica sul sito di Migraciones appena arrivi: a volte ne mettono 30 o 60.',
        'Sforare costa poco: circa 5–6 soles al giorno. Paga la multa in anticipo online sul sito di Migraciones per non perdere tempo in aeroporto.',
        'I cittadini della Comunità Andina e del Mercosur possono entrare con la carta d’identità invece del passaporto.',
      ],
      pitfalls: [
        'Non esiste alcuna «eTA peruviana» né carta turistica elettronica per chi è esente dal visto: i siti che le vendono sono intermediari.',
        'Il tetto di 183 giorni si calcola su 365 giorni mobili, non sull’anno solare: un soggiorno lungo in primavera riduce ciò che resta per l’autunno.',
        'Le compagnie aeree controllano il biglietto di uscita: senza, possono negarti l’imbarco per Lima.',
      ],
      waivers: [
        'I cittadini di India e Cina entrano senza visto fino a 183 giorni l’anno per turismo o affari se hanno un visto di Stati Uniti, Canada, Regno Unito, Australia o Schengen con almeno sei mesi di validità residua all’arrivo, oppure la residenza permanente in uno di questi paesi.',
      ],
      passports: {
        RU: 'I russi entrano senza visto, di solito per 90 giorni e fino a 183 l’anno su richiesta. Non ci sono voli diretti: si vola via Istanbul, Madrid o Amsterdam. Le carte russe non funzionano, quindi porta dollari in contanti.',
        US: 'Gli statunitensi entrano senza visto; di solito ricevono 90 giorni, fino a 183 su richiesta.',
        IN: 'Gli indiani hanno bisogno del visto, a meno che non abbiano un visto di Stati Uniti, Canada, Regno Unito, Australia o Schengen valido almeno sei mesi, o la residenza permanente lì.',
        VE: 'I cittadini venezuelani hanno bisogno del visto peruviano; non è più consentito entrare con il passaporto scaduto.',
      },
    },
  },
};

export default guide;
