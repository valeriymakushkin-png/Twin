import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'US',
  checked: '2026-10',
  fees: {
    eta: { kind: 'fixed', amount: 40, currency: 'USD' },
    visa: { kind: 'from', amount: 185, currency: 'USD' },
  },
  stay: { eta: 90, visa: 180 },
  links: { eta: 'https://esta.cbp.dhs.gov', immigration: 'https://travel.state.gov' },
  forms: [
    { name: 'EVUS', url: 'https://www.evus.gov' },
    { name: 'I-94', url: 'https://i94.cbp.dhs.gov' },
  ],
  docs: ['returnTicket', 'finance'],
  passportMonths: 0,
  extend: { days: 180 },
  visaRun: 'no',
  hackScope: [['regime:required'], ['regime:required'], ['regime:eta'], ['regime:eta'], ['regime:required']],
  pitfallScope: [['regime:eta'], ['regime:eta'], null, ['regime:required']],
  text: {
    ru: {
      summary:
        'Граждане примерно 40 стран программы безвизового въезда (большая часть ЕС, Великобритания, Япония, Корея, Австралия, Израиль и др.) едут на 90 дней по ESTA — около 40 $ онлайн. Канадцам ничего не нужно. Всем остальным нужна виза B1/B2: сбор 185 $, собеседование в консульстве и, по мере введения, новый «сбор за визовую добросовестность» 250 $ сверху.',
      apply:
        'ESTA: подавайте на esta.cbp.dhs.gov минимум за 72 часа до вылета; одобрение часто приходит сразу и действует два года или до окончания срока паспорта. Виза: заполните анкету DS-160, оплатите 185 $, запишитесь на собеседование в консульство страны вашего гражданства или проживания и возьмите доказательства связей с домом. Ожидание — от нескольких недель до более чем года: смотрите инструмент сроков на travel.state.gov и ловите освободившиеся слоты.',
      extend:
        'Владельцы визы B1/B2 могут подать форму I-539 в USCIS до окончания срока в I-94; рассмотрение часто длится месяцами, а причина должна быть весомой. Приехавшим по ESTA продлиться нельзя вовсе.',
      visaRun:
        'Визараны не работают. Поездки в Канаду, Мексику или на острова Карибского моря не обнуляют 90 дней по ESTA — срок продолжает идти, а пребывания подряд пограничники расценивают как жизнь в США.',
      hacks: [
        'Продлеваете B1/B2, срок которой истёк меньше 12 месяцев назад? Возможно, вам положено собеседование без явки (dropbox) — если прошлая виза была на полный срок и отказов не было.',
        'Для граждан многих стран B1/B2 выдают на 10 лет с многократным въездом — сложное собеседование проходите один раз, а не перед каждой поездкой.',
        'Повторно въезжающие по ESTA могут пользоваться бесплатным приложением Mobile Passport Control во многих аэропортах и обходить общую очередь.',
        'Отказали в ESTA? Не подавайте повторно раз за разом — сразу оформляйте визу: новая заявка ESTA редко меняет результат.',
        'Следите за сбором 250 $ за визовую добросовестность: он введён законом 2025 года, консульства начинают взимать его неравномерно, а часть обещают вернуть, если вы уедете вовремя.',
      ],
      pitfalls: [
        'Сайты-двойники берут 80–100 $ и больше. Официальный — esta.cbp.dhs.gov, около 40 $.',
        'Поездки на Кубу с 2021 года или в Иран, Ирак, Сирию, Судан, Ливию, Сомали, Йемен или КНДР с 2011 года лишают права на ESTA — нужна виза.',
        'Просрочка даже на день аннулирует визу и право на ESTA; следующую визу придётся получать в стране гражданства.',
        'С сентября 2025 года на собеседование, как правило, нужно идти в стране гражданства или проживания — «удобное» консульство в третьей стране больше не вариант.',
      ],
      passports: {
        RU: 'Россияне подают на визу в назначенных консульствах — обычно в Варшаве или Астане. Готовьтесь к долгой административной проверке; сбор оплачивайте картой зарубежного банка или так, как указано на сайте консульства.',
        CN: 'Владельцы 10-летней визы B1/B2 из Китая перед каждой поездкой обновляют данные в EVUS.',
        IN: 'Ожидание собеседования в Индии — одно из самых долгих в мире, и между Ченнаи, Хайдарабадом, Калькуттой, Мумбаи и Нью-Дели разница бывает в месяцы.',
        MX: 'Граждане Мексики могут ездить по Border Crossing Card («лазерной визе»): в приграничную зону — без I-94, дальше — с I-94.',
        TZ: 'С января 2026 года на граждан Танзании распространяется частичная приостановка выдачи виз B, F, M и J; исключения узкие.',
      },
    },
    en: {
      summary:
        'Citizens of the roughly 40 Visa Waiver Program countries (most of the EU, the UK, Japan, Korea, Australia, Israel and others) visit for up to 90 days with an ESTA, about $40 online. Canadians need nothing. Everyone else needs a B1/B2 visa: a $185 fee, an interview at a consulate and, as it rolls out, a new $250 visa integrity fee on top.',
      apply:
        'ESTA: apply on esta.cbp.dhs.gov at least 72 hours before you fly; approval is often instant and lasts two years or until your passport expires. Visa: fill in the DS-160, pay $185, book an interview at a consulate in your country of nationality or residence, and bring proof of ties at home. Waits range from a few weeks to over a year — check the wait-time tool on travel.state.gov and watch for freed-up slots.',
      extend:
        'B1/B2 visitors may file Form I-539 with USCIS before their I-94 expires; decisions often take months and you need a solid reason. ESTA travellers can’t extend at all.',
      visaRun:
        'Visa runs don’t work. Trips to Canada, Mexico or the Caribbean islands don’t reset the 90 days under ESTA — the clock keeps running, and officers treat back-to-back stays as living in the US.',
      hacks: [
        'Renewing a B1/B2 that expired less than 12 months ago? You may qualify for the interview waiver (dropbox) — if your previous visa was full-validity and you’ve never been refused.',
        'For many nationalities the B1/B2 is issued for 10 years with multiple entries — you face the tough interview once, not before every trip.',
        'Returning ESTA travellers can use the free Mobile Passport Control app at many airports to skip the general queue.',
        'ESTA denied? Don’t keep reapplying — go straight for a visa; a fresh ESTA application rarely changes the outcome.',
        'Keep an eye on the $250 visa integrity fee: it was created by a 2025 law, consulates are starting to charge it unevenly, and part of it is meant to be refunded if you leave on time.',
      ],
      pitfalls: [
        'Look-alike sites charge $80–100 or more. The official one is esta.cbp.dhs.gov, at about $40.',
        'Travel to Cuba since 2021, or to Iran, Iraq, Syria, Sudan, Libya, Somalia, Yemen or North Korea since 2011, makes you ineligible for ESTA — you need a visa.',
        'Overstaying even one day voids your visa and your ESTA eligibility; your next visa must be applied for in your country of nationality.',
        'Since September 2025 interviews must normally take place in your country of nationality or residence — a “convenient” consulate in a third country is no longer an option.',
      ],
      passports: {
        RU: 'Russian citizens apply at designated consulates — usually Warsaw or Astana. Expect long administrative processing; pay the fee with a card from a foreign bank or as the consulate’s site instructs.',
        CN: 'Chinese holders of a 10-year B1/B2 must update EVUS before each trip.',
        IN: 'Interview waits in India are among the longest anywhere, and Chennai, Hyderabad, Kolkata, Mumbai and New Delhi can differ by months.',
        MX: 'Mexican citizens can travel on a Border Crossing Card (laser visa): within the border zone without an I-94, beyond it with one.',
        TZ: 'Since January 2026 Tanzanian citizens fall under a partial suspension of B, F, M and J visas; exceptions are narrow.',
      },
    },
    es: {
      summary:
        'Los ciudadanos de los cerca de 40 países del Programa de Exención de Visado (casi toda la UE, Reino Unido, Japón, Corea, Australia, Israel y otros) viajan hasta 90 días con un ESTA, unos 40 $ en línea. Los canadienses no necesitan nada. El resto necesita visado B1/B2: tasa de 185 $, entrevista en un consulado y, a medida que se implanta, una nueva tasa de integridad de visado de 250 $ adicional.',
      apply:
        'ESTA: solicítalo en esta.cbp.dhs.gov al menos 72 horas antes del vuelo; la aprobación suele ser inmediata y dura dos años o hasta que caduque el pasaporte. Visado: rellena el DS-160, paga 185 $, pide cita en un consulado de tu país de nacionalidad o residencia y lleva pruebas de arraigo. La espera va de unas semanas a más de un año: consulta la herramienta de tiempos en travel.state.gov y vigila las citas que se liberan.',
      extend:
        'Con visado B1/B2 puedes presentar el formulario I-539 ante USCIS antes de que venza tu I-94; la decisión suele tardar meses y necesitas un motivo sólido. Quien entra con ESTA no puede prorrogar.',
      visaRun:
        'Los visa runs no funcionan. Los viajes a Canadá, México o las islas del Caribe no reinician los 90 días del ESTA: el reloj sigue corriendo, y los agentes ven las estancias encadenadas como vivir en EE. UU.',
      hacks: [
        '¿Renuevas un B1/B2 caducado hace menos de 12 meses? Puede que te toque la exención de entrevista (dropbox), si el anterior era de validez completa y nunca te lo denegaron.',
        'Para muchas nacionalidades el B1/B2 se concede por 10 años con entradas múltiples: la entrevista difícil la pasas una vez, no antes de cada viaje.',
        'Si repites con ESTA, puedes usar la app gratuita Mobile Passport Control en muchos aeropuertos y saltarte la cola general.',
        '¿Te denegaron el ESTA? No lo pidas una y otra vez: ve directamente al visado; una nueva solicitud de ESTA rara vez cambia el resultado.',
        'Atento a la tasa de integridad de visado de 250 $: la creó una ley de 2025, los consulados empiezan a cobrarla de forma desigual y en parte debería reembolsarse si sales a tiempo.',
      ],
      pitfalls: [
        'Las webs clonadas cobran 80–100 $ o más. La oficial es esta.cbp.dhs.gov y cuesta unos 40 $.',
        'Haber viajado a Cuba desde 2021, o a Irán, Irak, Siria, Sudán, Libia, Somalia, Yemen o Corea del Norte desde 2011, te deja sin ESTA: necesitas visado.',
        'Quedarte un solo día de más anula tu visado y tu derecho al ESTA; el siguiente visado tendrás que pedirlo en tu país de nacionalidad.',
        'Desde septiembre de 2025 la entrevista debe hacerse, por norma, en tu país de nacionalidad o residencia: un consulado “cómodo” en un tercer país ya no es opción.',
      ],
      passports: {
        RU: 'Los ciudadanos rusos solicitan el visado en consulados designados, normalmente Varsovia o Astaná. Cuenta con una larga revisión administrativa; paga la tasa con una tarjeta de un banco extranjero o como indique la web del consulado.',
        CN: 'Los ciudadanos chinos con B1/B2 de 10 años deben actualizar el EVUS antes de cada viaje.',
        IN: 'Las esperas para la entrevista en India están entre las más largas del mundo, y entre Chennai, Hyderabad, Calcuta, Bombay y Nueva Delhi puede haber meses de diferencia.',
        MX: 'Los ciudadanos mexicanos pueden viajar con la Border Crossing Card (visa láser): en la zona fronteriza sin I-94 y, más allá, con él.',
        TZ: 'Desde enero de 2026 los ciudadanos de Tanzania están sujetos a una suspensión parcial de los visados B, F, M y J; las excepciones son limitadas.',
      },
    },
    de: {
      summary:
        'Bürger der rund 40 Länder des Visa Waiver Program (der Großteil der EU, Großbritannien, Japan, Korea, Australien, Israel und andere) reisen bis zu 90 Tage mit ESTA ein, rund 40 $ online. Kanadier brauchen nichts. Alle anderen brauchen ein B1/B2-Visum: 185 $ Gebühr, ein Interview im Konsulat und, während sie eingeführt wird, eine neue Visa Integrity Fee von 250 $ obendrauf.',
      apply:
        'ESTA: Beantrage sie auf esta.cbp.dhs.gov mindestens 72 Stunden vor dem Flug; die Genehmigung kommt oft sofort und gilt zwei Jahre oder bis zum Ablauf des Passes. Visum: DS-160 ausfüllen, 185 $ zahlen, Interviewtermin in einem Konsulat deines Staatsangehörigkeits- oder Wohnsitzlandes buchen und Belege für deine Bindungen zu Hause mitbringen. Die Wartezeit reicht von wenigen Wochen bis über ein Jahr – prüfe das Wartezeit-Tool auf travel.state.gov und achte auf frei werdende Termine.',
      extend:
        'Mit B1/B2 kannst du vor Ablauf deines I-94 beim USCIS das Formular I-539 einreichen; die Entscheidung dauert oft Monate, und du brauchst einen triftigen Grund. Mit ESTA ist keine Verlängerung möglich.',
      visaRun:
        'Visa-Runs funktionieren nicht. Reisen nach Kanada, Mexiko oder auf die Karibikinseln setzen die 90 ESTA-Tage nicht zurück – die Uhr läuft weiter, und Beamte werten Aufenthalte am Stück als Leben in den USA.',
      hacks: [
        'Verlängerst du ein B1/B2, das vor weniger als 12 Monaten abgelaufen ist? Dann kommt eventuell der Interview-Verzicht (Dropbox) infrage – wenn das alte Visum die volle Laufzeit hatte und du nie abgelehnt wurdest.',
        'Für viele Nationalitäten wird das B1/B2 für 10 Jahre mit mehrfacher Einreise ausgestellt – das schwierige Interview hast du einmal, nicht vor jeder Reise.',
        'Wer erneut mit ESTA einreist, kann an vielen Flughäfen die kostenlose App Mobile Passport Control nutzen und die allgemeine Schlange umgehen.',
        'ESTA abgelehnt? Nicht immer wieder neu beantragen – direkt ein Visum beantragen; ein neuer ESTA-Antrag ändert selten etwas.',
        'Behalte die Visa Integrity Fee von 250 $ im Blick: Sie stammt aus einem Gesetz von 2025, Konsulate beginnen uneinheitlich mit der Erhebung, und ein Teil soll erstattet werden, wenn du pünktlich ausreist.',
      ],
      pitfalls: [
        'Nachahmerseiten verlangen 80–100 $ oder mehr. Die offizielle ist esta.cbp.dhs.gov und kostet rund 40 $.',
        'Reisen nach Kuba seit 2021 oder nach Iran, Irak, Syrien, Sudan, Libyen, Somalia, Jemen oder Nordkorea seit 2011 schließen ESTA aus – du brauchst ein Visum.',
        'Schon ein Tag Überziehung macht dein Visum und deine ESTA-Berechtigung ungültig; das nächste Visum musst du im Land deiner Staatsangehörigkeit beantragen.',
        'Seit September 2025 findet das Interview in der Regel im Land deiner Staatsangehörigkeit oder deines Wohnsitzes statt – ein „bequemes“ Konsulat in einem Drittland ist keine Option mehr.',
      ],
      passports: {
        RU: 'Russische Staatsangehörige beantragen das Visum in designierten Konsulaten – meist Warschau oder Astana. Rechne mit langer administrativer Prüfung; zahle die Gebühr mit der Karte einer ausländischen Bank oder wie auf der Konsulatsseite angegeben.',
        CN: 'Chinesische Inhaber eines 10-Jahres-B1/B2 müssen vor jeder Reise ihr EVUS aktualisieren.',
        IN: 'Die Interview-Wartezeiten in Indien gehören zu den längsten weltweit, und zwischen Chennai, Hyderabad, Kolkata, Mumbai und Neu-Delhi liegen oft Monate.',
        MX: 'Mexikanische Staatsangehörige können mit der Border Crossing Card (Laser-Visum) reisen: in der Grenzzone ohne I-94, darüber hinaus mit.',
        TZ: 'Seit Januar 2026 gilt für tansanische Staatsangehörige eine teilweise Aussetzung von B-, F-, M- und J-Visa; Ausnahmen sind eng gefasst.',
      },
    },
    fr: {
      summary:
        'Les ressortissants des quelque 40 pays du Visa Waiver Program (la majeure partie de l’UE, le Royaume-Uni, le Japon, la Corée, l’Australie, Israël, etc.) séjournent jusqu’à 90 jours avec un ESTA, environ 40 $ en ligne. Les Canadiens n’ont besoin de rien. Les autres doivent obtenir un visa B1/B2 : 185 $ de frais, un entretien au consulat et, au fil de sa mise en place, une nouvelle taxe d’intégrité de 250 $ en plus.',
      apply:
        'ESTA : faites la demande sur esta.cbp.dhs.gov au moins 72 heures avant le vol ; l’accord est souvent immédiat et vaut deux ans ou jusqu’à l’expiration du passeport. Visa : remplissez le DS-160, payez 185 $, prenez rendez-vous dans un consulat de votre pays de nationalité ou de résidence et apportez des preuves d’attaches. L’attente va de quelques semaines à plus d’un an : consultez l’outil des délais sur travel.state.gov et guettez les créneaux libérés.',
      extend:
        'Avec un visa B1/B2, vous pouvez déposer le formulaire I-539 auprès de l’USCIS avant l’expiration de votre I-94 ; la décision prend souvent des mois et il faut un motif solide. Avec un ESTA, aucune prolongation n’est possible.',
      visaRun:
        'Les visa runs ne marchent pas. Un passage au Canada, au Mexique ou dans les îles des Caraïbes ne remet pas à zéro les 90 jours de l’ESTA : le compteur continue de tourner, et les agents considèrent les séjours enchaînés comme une installation aux États-Unis.',
      hacks: [
        'Vous renouvelez un B1/B2 expiré depuis moins de 12 mois ? Vous pourriez avoir droit à la dispense d’entretien (dropbox), si l’ancien visa était de pleine validité et que vous n’avez jamais essuyé de refus.',
        'Pour beaucoup de nationalités, le B1/B2 est délivré pour 10 ans à entrées multiples : l’entretien difficile se passe une fois, pas avant chaque voyage.',
        'Si vous revenez avec un ESTA, l’application gratuite Mobile Passport Control permet d’éviter la file générale dans de nombreux aéroports.',
        'ESTA refusé ? Ne redéposez pas encore et encore : demandez directement un visa, une nouvelle demande d’ESTA change rarement l’issue.',
        'Surveillez la taxe d’intégrité de 250 $ : créée par une loi de 2025, elle commence à être perçue de manière inégale selon les consulats, et une partie doit être remboursée si vous repartez à temps.',
      ],
      pitfalls: [
        'Des sites copiés facturent 80 à 100 $ ou plus. Le site officiel est esta.cbp.dhs.gov, pour environ 40 $.',
        'Un séjour à Cuba depuis 2021, ou en Iran, en Irak, en Syrie, au Soudan, en Libye, en Somalie, au Yémen ou en Corée du Nord depuis 2011, rend inéligible à l’ESTA : il faut un visa.',
        'Un seul jour de dépassement annule votre visa et votre droit à l’ESTA ; le visa suivant devra être demandé dans votre pays de nationalité.',
        'Depuis septembre 2025, l’entretien doit en principe avoir lieu dans votre pays de nationalité ou de résidence : un consulat « pratique » dans un pays tiers n’est plus une option.',
      ],
      passports: {
        RU: 'Les ressortissants russes déposent leur demande dans des consulats désignés, en général Varsovie ou Astana. Prévoyez une longue vérification administrative ; payez les frais avec la carte d’une banque étrangère ou selon les indications du consulat.',
        CN: 'Les ressortissants chinois titulaires d’un B1/B2 de 10 ans doivent mettre à jour l’EVUS avant chaque voyage.',
        IN: 'Les délais d’entretien en Inde comptent parmi les plus longs au monde, et l’écart entre Chennai, Hyderabad, Calcutta, Mumbai et New Delhi peut atteindre des mois.',
        MX: 'Les ressortissants mexicains peuvent voyager avec la Border Crossing Card (visa laser) : dans la zone frontalière sans I-94, au-delà avec.',
        TZ: 'Depuis janvier 2026, les ressortissants tanzaniens sont visés par une suspension partielle des visas B, F, M et J ; les exceptions sont limitées.',
      },
    },
    it: {
      summary:
        'I cittadini dei circa 40 paesi del Visa Waiver Program (gran parte dell’UE, Regno Unito, Giappone, Corea, Australia, Israele e altri) viaggiano fino a 90 giorni con l’ESTA, circa 40 $ online. Ai canadesi non serve nulla. Tutti gli altri hanno bisogno del visto B1/B2: 185 $ di tassa, un colloquio in consolato e, man mano che viene introdotta, una nuova tassa di integrità del visto da 250 $ in più.',
      apply:
        'ESTA: fai domanda su esta.cbp.dhs.gov almeno 72 ore prima del volo; l’approvazione è spesso immediata e vale due anni o fino alla scadenza del passaporto. Visto: compila il DS-160, paga 185 $, prenota il colloquio in un consolato del paese di cittadinanza o residenza e porta prove dei tuoi legami con casa. L’attesa va da poche settimane a oltre un anno: controlla lo strumento dei tempi su travel.state.gov e cerca gli slot che si liberano.',
      extend:
        'Con il visto B1/B2 puoi presentare il modulo I-539 all’USCIS prima della scadenza dell’I-94; la decisione richiede spesso mesi e serve un motivo solido. Con l’ESTA non si può prorogare.',
      visaRun:
        'I visa run non funzionano. I viaggi in Canada, Messico o nelle isole dei Caraibi non azzerano i 90 giorni dell’ESTA: il conteggio continua, e gli agenti considerano i soggiorni consecutivi come vivere negli Stati Uniti.',
      hacks: [
        'Rinnovi un B1/B2 scaduto da meno di 12 mesi? Potresti rientrare nell’esenzione dal colloquio (dropbox), se il visto precedente era a validità piena e non hai mai avuto rifiuti.',
        'Per molte nazionalità il B1/B2 viene rilasciato per 10 anni a ingressi multipli: il colloquio difficile lo affronti una volta, non prima di ogni viaggio.',
        'Se rientri con l’ESTA, in molti aeroporti puoi usare l’app gratuita Mobile Passport Control e saltare la coda generale.',
        'ESTA negato? Non ripresentarlo più volte: chiedi subito il visto, una nuova domanda ESTA raramente cambia l’esito.',
        'Tieni d’occhio la tassa di integrità da 250 $: l’ha introdotta una legge del 2025, i consolati iniziano a riscuoterla in modo disomogeneo e una parte dovrebbe essere rimborsata se riparti in tempo.',
      ],
      pitfalls: [
        'I siti clone fanno pagare 80–100 $ o più. Quello ufficiale è esta.cbp.dhs.gov e costa circa 40 $.',
        'Un viaggio a Cuba dal 2021, o in Iran, Iraq, Siria, Sudan, Libia, Somalia, Yemen o Corea del Nord dal 2011, ti esclude dall’ESTA: serve il visto.',
        'Anche un solo giorno oltre il limite annulla il visto e il diritto all’ESTA; il visto successivo andrà chiesto nel paese di cittadinanza.',
        'Da settembre 2025 il colloquio si fa di norma nel paese di cittadinanza o di residenza: un consolato “comodo” in un paese terzo non è più un’opzione.',
      ],
      passports: {
        RU: 'I cittadini russi fanno domanda nei consolati designati, di solito Varsavia o Astana. Metti in conto lunghi controlli amministrativi; paga la tassa con la carta di una banca estera o come indicato sul sito del consolato.',
        CN: 'I cittadini cinesi con B1/B2 decennale devono aggiornare l’EVUS prima di ogni viaggio.',
        IN: 'Le attese per il colloquio in India sono tra le più lunghe al mondo, e tra Chennai, Hyderabad, Calcutta, Mumbai e Nuova Delhi la differenza può essere di mesi.',
        MX: 'I cittadini messicani possono viaggiare con la Border Crossing Card (visto laser): nella zona di confine senza I-94, oltre con l’I-94.',
        TZ: 'Da gennaio 2026 i cittadini della Tanzania sono soggetti a una sospensione parziale dei visti B, F, M e J; le eccezioni sono ristrette.',
      },
    },
  },
};

export default guide;
