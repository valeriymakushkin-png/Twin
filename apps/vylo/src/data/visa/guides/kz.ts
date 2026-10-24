import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'KZ',
  checked: '2026-10',
  links: { evisa: 'https://www.vmp.gov.kz', immigration: 'https://egov.kz' },
  passportMonths: 3,
  rule: { days: 90, window: 180 },
  visaRun: 'limited',
  borders: [
    { name: 'Korday – Ak-Zhol', to: 'KG', lat: 43.035, lng: 74.713 },
    { name: 'Almaty (ALA) → Bishkek / Tashkent', to: 'UZ', lat: 43.3521, lng: 77.0405 },
  ],
  nomad: { name: 'Neo Nomad Visa', months: 12, income: { kind: 'from', amount: 3000, currency: 'USD' } },
  hackScope: [null, ['regime:free'], null, null],
  pitfallScope: [['regime:free'], null, null],
  text: {
    ru: {
      summary:
        'Граждане России, Беларуси, Армении и Киргизии въезжают без визы и могут находиться в стране до 90 дней в любые 180 дней. Граждане США, Великобритании, ЕС, Японии, Кореи, Китая и ещё многих стран получают 30 дней за въезд, но не больше 90 дней за 180. Гражданам Индии положено 14 дней за въезд, остальным нужна электронная виза.',
      apply:
        'Тем, кому нужна виза, её оформляют онлайн на vmp.gov.kz — обычно по приглашению принимающей стороны или турфирмы; сбор зависит от гражданства. Безвизовым гостям ничего заранее подавать не нужно: при въезде через международный пункт пропуска иностранец из безвизового списка учитывается автоматически, а гостиница сообщает адрес через eQonaq.',
      visaRun:
        'Визаран ограничен: после выезда снова начинаются 30 дней, но общий лимит 90 дней за 180 сохраняется, и перебор фиксируется в базе при следующем въезде. Удобный выезд — переход Кордай — Ак-Жол в Киргизию (4 часа на машине от Алматы до Бишкека) или короткий рейс из Алматы в Ташкент.',
      nomad:
        'С 2025 года действует Neo Nomad Visa для удалённых работников иностранных компаний: до 12 месяцев при доходе от 3000 $ в месяц, медстраховке и справке о несудимости. Подают через консульство или vmp.gov.kz; детали процедуры ещё уточняются.',
      hacks: [
        'Кордай — Ак-Жол работает круглосуточно; маршрутки и такси от автовокзала Сайран в Алматы довозят до границы, а дальше до Бишкека 20 минут. Так Казахстан и Киргизию удобно совместить в одной поездке.',
        'Считайте дни сами: в лимит 90/180 входят и день въезда, и день выезда, а пограничник видит всю историю ваших поездок. Простой календарь в телефоне избавит от сюрпризов.',
        'Kaspi QR — главный способ оплаты в стране, но иностранные Visa и Mastercard принимают почти везде, включая такси через Yandex Go. Наличные нужны в основном в горах и на базарах.',
        'Для местной SIM-карты и банковской карты нужен ИИН — индивидуальный номер, который иностранцу выдают в ЦОНе по паспорту за один визит.',
      ],
      pitfalls: [
        'Старые советы про «выехал-въехал на 30 дней» устарели с 2023 года: визаран больше не обнуляет 90 дней за 180, и при превышении могут не пустить в страну.',
        'Если вы живёте в съёмной квартире, хозяин обязан уведомить миграционную службу в течение 3 рабочих дней. Без этого штраф получит и он, и вы.',
        'Перерасчёт даже на день штрафуют при выезде, а повторное нарушение грозит выдворением и запретом въезда.',
      ],
      passports: {
        RU: 'Россияне въезжают по внутреннему паспорту или загранпаспорту и могут находиться в стране 90 дней в течение 180. Российские карты не работают; везите наличные рубли или доллары — рубли меняют в любом обменнике.',
        IN: 'Граждане Индии въезжают без визы на 14 дней за поездку и не более 42 дней в течение 180. Для более долгих поездок оформляйте визу на vmp.gov.kz.',
        TR: 'Граждане Турции с 2025 года могут находиться без визы до 90 дней в течение 180.',
        US: 'Граждане США получают 30 дней без визы за въезд и не больше 90 дней в течение 180.',
      },
    },
    en: {
      summary:
        'Citizens of Russia, Belarus, Armenia and Kyrgyzstan enter visa-free and may stay up to 90 days in any 180. Citizens of the US, UK, EU, Japan, Korea, China and many other countries get 30 days per entry, but no more than 90 days in 180. Indian citizens get 14 days per entry; everyone else needs an e-visa.',
      apply:
        'Those who need a visa apply online at vmp.gov.kz, usually with an invitation from a host or travel company; the fee depends on nationality. Visa-free visitors file nothing in advance: anyone from the visa-free list who enters through an international checkpoint is registered automatically, and hotels report your address through eQonaq.',
      visaRun:
        'Visa runs are limited: after you leave, a fresh 30 days begins, but the overall 90-in-180 cap still applies, and any excess shows up in the database the next time you enter. The handy exit is the Korday – Ak-Zhol crossing into Kyrgyzstan (four hours by car from Almaty to Bishkek) or a short flight from Almaty to Tashkent.',
      nomad:
        'Since 2025 the Neo Nomad Visa has been open to remote workers employed by foreign companies: up to 12 months with an income of at least $3,000 a month, health insurance and a clean criminal record. Apply through a consulate or vmp.gov.kz; procedural details are still being refined.',
      hacks: [
        'Korday – Ak-Zhol is open around the clock; minibuses and taxis from Almaty’s Sayran bus station run to the border, and Bishkek is 20 minutes beyond. That makes it easy to combine Kazakhstan and Kyrgyzstan in one trip.',
        'Count your days yourself: both arrival and departure days count towards 90/180, and the border officer sees your full travel history. A simple calendar on your phone saves surprises.',
        'Kaspi QR is the main way to pay, but foreign Visa and Mastercard cards are accepted almost everywhere, including Yandex Go taxis. You mostly need cash in the mountains and at bazaars.',
        'A local SIM or bank card requires an IIN, a personal ID number that foreigners get at a Public Service Centre (TsON) with their passport in one visit.',
      ],
      pitfalls: [
        'Old advice about “leave and come back for another 30 days” has been outdated since 2023: a run no longer resets 90-in-180, and exceeding it can get you refused entry.',
        'If you stay in a rented flat, the owner must notify the migration service within 3 working days. Otherwise both of you can be fined.',
        'Overstaying even one day is fined on departure, and a repeat offence can lead to removal and an entry ban.',
      ],
      passports: {
        RU: 'Russian citizens can enter with either the internal or the international passport and stay 90 days in any 180. Russian cards do not work, so bring roubles or dollars in cash — roubles are exchanged at any bureau.',
        IN: 'Indian citizens enter visa-free for 14 days per trip and no more than 42 days in 180. For longer trips, get a visa at vmp.gov.kz.',
        TR: 'Since 2025, Turkish citizens may stay visa-free for up to 90 days in 180.',
        US: 'US citizens get 30 visa-free days per entry and no more than 90 days in 180.',
      },
    },
    es: {
      summary:
        'Los ciudadanos de Rusia, Bielorrusia, Armenia y Kirguistán entran sin visado y pueden quedarse hasta 90 días de cada 180. Los de EE. UU., Reino Unido, la UE, Japón, Corea, China y muchos otros países tienen 30 días por entrada, pero no más de 90 en 180. Los ciudadanos indios tienen 14 días por entrada; el resto necesita visado electrónico.',
      apply:
        'Quien necesita visado lo pide en línea en vmp.gov.kz, normalmente con invitación de un anfitrión o agencia; la tasa depende de la nacionalidad. Si entras sin visado no tienes que presentar nada antes: quien figura en la lista de exención y entra por un puesto internacional queda registrado automáticamente, y el hotel comunica tu dirección a través de eQonaq.',
      visaRun:
        'El visa run tiene límites: al salir empiezan otros 30 días, pero el tope de 90 en 180 sigue vigente y cualquier exceso aparece en la base de datos en la siguiente entrada. La salida más práctica es el paso de Korday – Ak-Zhol hacia Kirguistán (cuatro horas en coche de Almaty a Biskek) o un vuelo corto de Almaty a Taskent.',
      nomad:
        'Desde 2025 existe la Neo Nomad Visa para trabajadores en remoto de empresas extranjeras: hasta 12 meses con ingresos de al menos 3000 $ al mes, seguro médico y antecedentes penales limpios. Se solicita en un consulado o en vmp.gov.kz; algunos detalles del trámite aún se están concretando.',
      hacks: [
        'Korday – Ak-Zhol abre las 24 horas; furgonetas y taxis salen hasta la frontera desde la estación de autobuses Sayran de Almaty, y Biskek queda a 20 minutos del otro lado. Así es fácil combinar Kazajistán y Kirguistán en un solo viaje.',
        'Lleva tú mismo la cuenta: el día de entrada y el de salida cuentan para los 90/180, y el agente ve todo tu historial de viajes. Un calendario sencillo en el móvil te ahorra sorpresas.',
        'Kaspi QR es la forma de pago principal, pero las Visa y Mastercard extranjeras se aceptan casi en todas partes, también en los taxis de Yandex Go. El efectivo hace falta sobre todo en la montaña y en los bazares.',
        'Para una SIM o una tarjeta bancaria local necesitas el IIN, un número de identificación personal que los extranjeros obtienen en un Centro de Servicios Públicos (TsON) con el pasaporte en una sola visita.',
      ],
      pitfalls: [
        'El viejo consejo de «salir y volver para otros 30 días» quedó obsoleto en 2023: el visa run ya no reinicia los 90 en 180, y si te pasas pueden negarte la entrada.',
        'Si te alojas en un piso de alquiler, el propietario debe avisar a migración en 3 días laborables. Si no lo hace, os pueden multar a los dos.',
        'Quedarte aunque sea un día de más se multa al salir, y la reincidencia puede acabar en expulsión y prohibición de entrada.',
      ],
      passports: {
        RU: 'Los ciudadanos rusos pueden entrar con el pasaporte interno o con el de viaje y quedarse 90 días de cada 180. Las tarjetas rusas no funcionan: lleva rublos o dólares en efectivo; los rublos se cambian en cualquier casa de cambio.',
        IN: 'Los ciudadanos indios entran sin visado 14 días por viaje y no más de 42 días en 180. Para viajes más largos, tramita el visado en vmp.gov.kz.',
        TR: 'Desde 2025, los ciudadanos turcos pueden quedarse sin visado hasta 90 días en 180.',
        US: 'Los estadounidenses tienen 30 días sin visado por entrada y no más de 90 días en 180.',
      },
    },
    de: {
      summary:
        'Bürger Russlands, Belarus’, Armeniens und Kirgisistans reisen visumfrei ein und dürfen bis zu 90 Tage in beliebigen 180 Tagen bleiben. Bürger der USA, Großbritanniens, der EU, Japans, Koreas, Chinas und vieler weiterer Länder bekommen 30 Tage pro Einreise, insgesamt aber höchstens 90 Tage in 180. Inder erhalten 14 Tage pro Einreise, alle anderen brauchen ein E-Visum.',
      apply:
        'Wer ein Visum braucht, beantragt es online auf vmp.gov.kz, meist mit Einladung eines Gastgebers oder Reiseveranstalters; die Gebühr hängt von der Staatsangehörigkeit ab. Visumfreie Gäste reichen vorab nichts ein: Wer auf der Befreiungsliste steht und über einen internationalen Übergang einreist, wird automatisch registriert, und Hotels melden die Adresse über eQonaq.',
      visaRun:
        'Visa-Runs sind begrenzt möglich: Nach der Ausreise beginnen neue 30 Tage, die Obergrenze von 90 in 180 gilt aber weiter, und jede Überschreitung fällt bei der nächsten Einreise in der Datenbank auf. Praktisch ist der Übergang Korday – Ak-Zhol nach Kirgisistan (vier Stunden Fahrt von Almaty nach Bischkek) oder ein kurzer Flug von Almaty nach Taschkent.',
      nomad:
        'Seit 2025 gibt es das Neo Nomad Visa für Remote-Arbeitende ausländischer Firmen: bis zu 12 Monate bei mindestens 3.000 $ Monatseinkommen, Krankenversicherung und sauberem Führungszeugnis. Beantragt wird es beim Konsulat oder auf vmp.gov.kz; Details des Verfahrens werden noch nachgeschärft.',
      hacks: [
        'Korday – Ak-Zhol ist rund um die Uhr offen; Sammeltaxis und Marschrutkas fahren vom Busbahnhof Sayran in Almaty zur Grenze, dahinter ist Bischkek 20 Minuten entfernt. So lassen sich Kasachstan und Kirgisistan bequem kombinieren.',
        'Zähl deine Tage selbst: Ein- und Ausreisetag zählen beide zu 90/180, und der Grenzbeamte sieht deine komplette Reisehistorie. Ein einfacher Kalender im Handy erspart Überraschungen.',
        'Kaspi QR ist das wichtigste Zahlungsmittel, doch ausländische Visa- und Mastercard-Karten werden fast überall akzeptiert, auch bei Yandex-Go-Taxis. Bargeld brauchst du vor allem in den Bergen und auf Basaren.',
        'Für eine lokale SIM oder Bankkarte brauchst du eine IIN, eine persönliche Identifikationsnummer, die Ausländer mit dem Pass in einem Bürgerservicezentrum (TsON) bei einem Besuch bekommen.',
      ],
      pitfalls: [
        'Der alte Tipp „ausreisen und für weitere 30 Tage zurückkommen“ ist seit 2023 überholt: Ein Visa-Run setzt 90 in 180 nicht mehr zurück, und bei Überschreitung droht die Einreiseverweigerung.',
        'Wohnst du in einer Mietwohnung, muss der Vermieter die Migrationsbehörde binnen 3 Werktagen informieren. Sonst droht euch beiden ein Bußgeld.',
        'Schon ein Tag Überziehung wird bei der Ausreise geahndet, im Wiederholungsfall drohen Ausweisung und Einreisesperre.',
      ],
      passports: {
        RU: 'Russische Staatsangehörige reisen mit Inlands- oder Reisepass ein und dürfen 90 Tage in 180 bleiben. Russische Karten funktionieren nicht – nimm Rubel oder Dollar in bar mit, Rubel tauscht jede Wechselstube.',
        IN: 'Indische Staatsangehörige reisen 14 Tage pro Reise visumfrei ein, höchstens 42 Tage in 180. Für längere Reisen beantragst du ein Visum auf vmp.gov.kz.',
        TR: 'Türkische Staatsangehörige dürfen seit 2025 bis zu 90 Tage in 180 visumfrei bleiben.',
        US: 'US-Bürger bekommen 30 visumfreie Tage pro Einreise, höchstens 90 Tage in 180.',
      },
    },
    fr: {
      summary:
        'Les citoyens de Russie, de Biélorussie, d’Arménie et du Kirghizistan entrent sans visa et peuvent rester jusqu’à 90 jours sur toute période de 180. Les ressortissants des États-Unis, du Royaume-Uni, de l’UE, du Japon, de Corée, de Chine et de nombreux autres pays ont 30 jours par entrée, sans dépasser 90 jours sur 180. Les Indiens ont 14 jours par entrée ; les autres ont besoin d’un e-visa.',
      apply:
        'Ceux qui ont besoin d’un visa le demandent en ligne sur vmp.gov.kz, généralement avec une invitation d’un hôte ou d’une agence ; les frais dépendent de la nationalité. Les visiteurs exemptés n’ont rien à déposer à l’avance : toute personne de la liste d’exemption entrant par un poste international est enregistrée automatiquement, et l’hôtel déclare votre adresse via eQonaq.',
      visaRun:
        'Le visa run est limité : après une sortie, 30 nouveaux jours commencent, mais le plafond de 90 jours sur 180 reste en vigueur, et tout dépassement apparaît dans la base de données à l’entrée suivante. La sortie la plus pratique est le poste de Korday – Ak-Zhol vers le Kirghizistan (quatre heures de route d’Almaty à Bichkek) ou un vol court d’Almaty à Tachkent.',
      nomad:
        'Depuis 2025, la Neo Nomad Visa s’adresse aux salariés à distance d’entreprises étrangères : jusqu’à 12 mois avec un revenu d’au moins 3 000 $ par mois, une assurance santé et un casier judiciaire vierge. La demande se fait au consulat ou sur vmp.gov.kz ; certains détails de procédure restent à préciser.',
      hacks: [
        'Korday – Ak-Zhol est ouvert jour et nuit ; minibus et taxis partent de la gare routière Sayran d’Almaty jusqu’à la frontière, et Bichkek n’est qu’à 20 minutes de l’autre côté. Idéal pour combiner Kazakhstan et Kirghizistan.',
        'Comptez vos jours vous-même : les jours d’entrée et de sortie comptent dans les 90/180, et l’agent voit tout votre historique de voyages. Un simple calendrier sur le téléphone évite les surprises.',
        'Kaspi QR est le moyen de paiement roi, mais les cartes Visa et Mastercard étrangères sont acceptées presque partout, y compris pour les taxis Yandex Go. Les espèces servent surtout en montagne et dans les bazars.',
        'Une SIM ou une carte bancaire locale exige un IIN, un numéro d’identification personnel que les étrangers obtiennent avec leur passeport en un passage dans un Centre de services publics (TsON).',
      ],
      pitfalls: [
        'Le vieux conseil « sortir et revenir pour 30 jours de plus » est dépassé depuis 2023 : un visa run ne remet plus à zéro les 90 jours sur 180, et un dépassement peut valoir un refus d’entrée.',
        'Si vous logez dans un appartement loué, le propriétaire doit prévenir le service des migrations sous 3 jours ouvrés. Sinon, vous risquez tous deux une amende.',
        'Un seul jour de dépassement est sanctionné d’une amende à la sortie, et la récidive peut entraîner une expulsion et une interdiction d’entrée.',
      ],
      passports: {
        RU: 'Les citoyens russes peuvent entrer avec le passeport intérieur ou le passeport international et rester 90 jours sur 180. Les cartes russes ne fonctionnent pas : apportez des roubles ou des dollars en espèces, les roubles se changent dans n’importe quel bureau.',
        IN: 'Les citoyens indiens entrent sans visa pour 14 jours par voyage, sans dépasser 42 jours sur 180. Pour un séjour plus long, demandez un visa sur vmp.gov.kz.',
        TR: 'Depuis 2025, les citoyens turcs peuvent séjourner sans visa jusqu’à 90 jours sur 180.',
        US: 'Les citoyens américains ont 30 jours sans visa par entrée, sans dépasser 90 jours sur 180.',
      },
    },
    it: {
      summary:
        'I cittadini di Russia, Bielorussia, Armenia e Kirghizistan entrano senza visto e possono restare fino a 90 giorni ogni 180. Quelli di Stati Uniti, Regno Unito, UE, Giappone, Corea, Cina e molti altri paesi hanno 30 giorni per ingresso, ma non più di 90 giorni su 180. Gli indiani hanno 14 giorni per ingresso; tutti gli altri hanno bisogno di un visto elettronico.',
      apply:
        'Chi ha bisogno del visto lo chiede online su vmp.gov.kz, di solito con l’invito di un ospite o di un’agenzia; la tassa dipende dalla cittadinanza. Chi entra senza visto non deve presentare nulla in anticipo: chi è nella lista di esenzione ed entra da un valico internazionale viene registrato automaticamente, e l’hotel comunica il tuo indirizzo tramite eQonaq.',
      visaRun:
        'Il visa run ha dei limiti: dopo l’uscita partono altri 30 giorni, ma il tetto di 90 su 180 resta valido e ogni sforamento compare nella banca dati al successivo ingresso. L’uscita più comoda è il valico di Korday – Ak-Zhol verso il Kirghizistan (quattro ore d’auto da Almaty a Biškek) o un volo breve da Almaty a Taškent.',
      nomad:
        'Dal 2025 esiste la Neo Nomad Visa per chi lavora da remoto per aziende estere: fino a 12 mesi con un reddito di almeno 3000 $ al mese, assicurazione sanitaria e fedina penale pulita. Si richiede in consolato o su vmp.gov.kz; alcuni dettagli della procedura sono ancora in via di definizione.',
      hacks: [
        'Korday – Ak-Zhol è aperto 24 ore su 24; minibus e taxi partono dalla stazione degli autobus Sayran di Almaty fino al confine, e Biškek è a 20 minuti oltre. Così è facile unire Kazakistan e Kirghizistan in un solo viaggio.',
        'Conta i giorni da solo: il giorno di ingresso e quello di uscita contano entrambi nei 90/180, e l’agente vede tutta la tua cronologia di viaggio. Un semplice calendario sul telefono evita sorprese.',
        'Kaspi QR è il mezzo di pagamento principale, ma le Visa e Mastercard estere sono accettate quasi ovunque, anche sui taxi Yandex Go. I contanti servono soprattutto in montagna e nei bazar.',
        'Per una SIM o una carta bancaria locale serve l’IIN, un numero identificativo personale che gli stranieri ottengono con il passaporto in un Centro servizi pubblici (TsON) in una sola visita.',
      ],
      pitfalls: [
        'Il vecchio consiglio «esci e rientra per altri 30 giorni» è superato dal 2023: il visa run non azzera più i 90 giorni su 180, e chi sfora rischia il respingimento.',
        'Se alloggi in un appartamento in affitto, il proprietario deve avvisare l’ufficio migrazione entro 3 giorni lavorativi. Altrimenti rischiate entrambi una multa.',
        'Anche un solo giorno oltre il limite viene multato all’uscita, e la recidiva può portare all’espulsione e al divieto d’ingresso.',
      ],
      passports: {
        RU: 'I cittadini russi possono entrare con il passaporto interno o con quello per l’estero e restare 90 giorni su 180. Le carte russe non funzionano: porta rubli o dollari in contanti, i rubli si cambiano in qualsiasi ufficio di cambio.',
        IN: 'I cittadini indiani entrano senza visto per 14 giorni a viaggio e non più di 42 giorni su 180. Per viaggi più lunghi richiedi il visto su vmp.gov.kz.',
        TR: 'Dal 2025 i cittadini turchi possono restare senza visto fino a 90 giorni su 180.',
        US: 'I cittadini statunitensi hanno 30 giorni senza visto per ingresso e non più di 90 giorni su 180.',
      },
    },
  },
};

export default guide;
