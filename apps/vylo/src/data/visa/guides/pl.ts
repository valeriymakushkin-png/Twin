import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'PL',
  checked: '2026-10',
  overrides: {
    // Since 19 Sep 2022 Poland refuses Russian citizens travelling for tourism, whichever state issued the Schengen visa
    RU: { status: 'banned' },
  },
  fees: { visa: { kind: 'fixed', amount: 90, currency: 'EUR' } },
  stay: { visa: 90 },
  links: { immigration: 'https://www.gov.pl/web/diplomacy/visas' },
  docs: ['insurance', 'returnTicket', 'booking', 'finance'],
  passportMonths: 3,
  rule: { days: 90, window: 180 },
  visaRun: 'no',
  hackScope: [null, null, null, ['IN']],
  pitfallScope: [['regime:free'], ['regime:required'], null],
  text: {
    ru: {
      summary:
        'Гражданам ЕС достаточно ID-карты. Граждане США, Великобритании, Канады, Австралии, Японии, Кореи, Бразилии, Мексики, ОАЭ, Израиля, Украины и Грузии въезжают без визы до 90 дней в любые 180 по всему Шенгену. Остальным, в том числе гражданам Индии, Китая, Турции, Казахстана и Узбекистана, нужна шенгенская виза. Россиян с туристическими целями Польша не впускает с сентября 2022 года — даже по визе другой страны.',
      apply:
        'Если Польша — основная страна поездки, подавайтесь в польское консульство или визовый центр: сбор 90 €, для детей 6–12 лет — 45 €. Подать можно за полгода до поездки, но не позже чем за 15 дней; решение обычно занимает около 15 дней, летом дольше. Нужны страховка с покрытием от 30 000 €, брони, обратный билет и выписка со счёта. Шенгенская виза любой страны так же действует и для Польши.',
      visaRun:
        'Визаран не работает: правило 90/180 считает все дни в Шенгене целиком, а поездка во Львов, Калининград или Лондон лишь ставит счётчик на паузу, но не обнуляет его. Дни вне зоны просто постепенно выпадают из скользящего окна в 180 дней.',
      hacks: [
        'Дни в Великобритании, Ирландии, на Кипре и на Балканах не входят в шенгенские 90/180 — длинную поездку удобно разбить: Польша и соседи, затем Лондон или Белград.',
        'С июля 2025 года Польша проверяет документы на границах с Германией и Литвой. В поезде Берлин — Варшава или автобусе до Вильнюса держите паспорт под рукой, а не в багаже.',
        'С запуском системы EES (полностью с апреля 2026 года) паспорта больше не штампуют: при первом въезде снимают отпечатки и фото, дни считаются автоматически. Проверьте остаток в официальном калькуляторе краткосрочного пребывания ЕС.',
        'Индийцам выгодно «каскадное» правило: после двух использованных по правилам виз за три года выдают многократную визу на два года, затем на пять.',
      ],
      pitfalls: [
        'ETIAS — платное онлайн-разрешение за 20 € для безвизовых путешественников — ещё не работает: запуск перенесли минимум на конец 2026, скорее на 2027 год. Сайты, которые «оформляют» его сейчас, — мошенники.',
        'Однократная виза сгорает после выезда из Шенгена: поездка на день во Львов или в Брест оставит вас без права вернуться.',
        'Паспорт должен быть выдан не более 10 лет назад и действовать ещё 3 месяца после выезда из Шенгена — на этом часто спотыкаются британцы со старыми паспортами.',
      ],
      passports: {
        RU: 'С 19 сентября 2022 года Польша не впускает граждан России с туристическими, деловыми, спортивными и культурными целями — даже по шенгенской визе другой страны. Исключения: члены семей граждан ЕС, владельцы ВНЖ и долгосрочных виз стран ЕС, дипломаты, водители-перевозчики и гуманитарные случаи. Машины с российскими номерами в ЕС не пускают, российские карты не работают.',
        BY: 'Белорусам нужна шенгенская виза. Сухопутная граница с Беларусью открыта лишь на нескольких переходах и иногда закрывается полностью, как в сентябре 2025 года, — перед поездкой проверьте сайт Пограничной стражи.',
        UA: 'Гражданам Украины с биометрическим паспортом виза не нужна (90/180). Временная защита в ЕС продлена до 4 марта 2027 года; на переходах вроде Медыка — Шегини бывают многочасовые очереди.',
        IN: 'Гражданам Индии нужна шенгенская виза; после двух визовых поездок без нарушений положена многократная виза на два, а затем на пять лет.',
      },
    },
    en: {
      summary:
        'EU citizens just need an ID card. Citizens of the US, UK, Canada, Australia, Japan, Korea, Brazil, Mexico, the UAE, Israel, Ukraine and Georgia enter visa-free for up to 90 days in any 180 across the Schengen area. Everyone else, including citizens of India, China, Turkey, Kazakhstan and Uzbekistan, needs a Schengen visa. Since September 2022, Poland refuses Russian tourists, even with another country’s visa.',
      apply:
        'If Poland is your main destination, apply at a Polish consulate or visa centre: the fee is €90, or €45 for children aged 6–12. You can apply up to six months ahead and no later than 15 days before the trip; decisions usually take about 15 days, longer in summer. You need travel insurance with at least €30,000 cover, bookings, a return ticket and bank statements. A Schengen visa from any member state works for Poland too.',
      visaRun:
        'Visa runs do not work: the 90/180 rule counts every day across the whole Schengen area, and a trip to Lviv, Kaliningrad or London only pauses the clock, it never resets it. Days spent outside the zone simply drop out of the rolling 180-day window over time.',
      hacks: [
        'Days in the UK, Ireland, Cyprus and the Balkans do not count towards the Schengen 90/180 — split a long trip into Poland and its neighbours, then London or Belgrade.',
        'Since July 2025, Poland has been checking documents at its borders with Germany and Lithuania. On the Berlin–Warsaw train or the bus to Vilnius, keep your passport on you, not in your luggage.',
        'With the Entry/Exit System (fully live since April 2026), passports are no longer stamped: fingerprints and a photo are taken on first entry and days are counted automatically. Check your balance with the EU’s official short-stay calculator.',
        'Indian citizens benefit from the “cascade” rule: after two visas used correctly within three years, you get a two-year multiple-entry visa, then a five-year one.',
      ],
      pitfalls: [
        'ETIAS, the planned €20 online authorisation for visa-free travellers, is not running yet: its launch has slipped to late 2026 at the earliest, more likely 2027. Sites that “process” it now are scams.',
        'A single-entry visa is spent once you leave the Schengen area: a day trip to Lviv or Brest leaves you with no right to come back.',
        'Your passport must have been issued within the last 10 years and stay valid for 3 months after you leave the Schengen area — this often catches out British travellers with older passports.',
      ],
      passports: {
        RU: 'Since 19 September 2022, Poland has refused entry to Russian citizens travelling for tourism, business, sport or culture, even with another country’s Schengen visa. Exceptions include family members of EU citizens, holders of EU residence permits or long-stay visas, diplomats, transport drivers and humanitarian cases. Russian-registered cars are not allowed into the EU, and Russian bank cards do not work.',
        BY: 'Belarusian citizens need a Schengen visa. Only a few land crossings with Belarus are open, and the border sometimes closes entirely, as in September 2025 — check the Border Guard website before you go.',
        UA: 'Ukrainian citizens with a biometric passport need no visa (90/180). EU temporary protection has been extended to 4 March 2027; crossings such as Medyka–Shehyni can mean waits of several hours.',
        IN: 'Indian citizens need a Schengen visa; after two trouble-free visa trips you qualify for a two-year, then a five-year multiple-entry visa.',
      },
    },
    es: {
      summary:
        'A los ciudadanos de la UE les basta el DNI. Los de EE. UU., Reino Unido, Canadá, Australia, Japón, Corea, Brasil, México, Emiratos, Israel, Ucrania y Georgia entran sin visado hasta 90 días en cualquier periodo de 180 en todo el espacio Schengen. El resto, incluidos los ciudadanos de India, China, Turquía, Kazajistán y Uzbekistán, necesita visado Schengen. Desde septiembre de 2022, Polonia no admite a turistas rusos, ni siquiera con visado de otro país.',
      apply:
        'Si Polonia es tu destino principal, solicita el visado en un consulado o centro de visados polaco: cuesta 90 € (45 € para niños de 6 a 12 años). Puedes presentarlo hasta seis meses antes y como muy tarde 15 días antes del viaje; la resolución suele tardar unos 15 días, más en verano. Necesitas un seguro de viaje con cobertura mínima de 30 000 €, reservas, billete de vuelta y extractos bancarios. Un visado Schengen de cualquier país miembro también vale para Polonia.',
      visaRun:
        'Los visa runs no funcionan: la regla 90/180 cuenta todos los días en el conjunto del espacio Schengen, y una escapada a Leópolis, Kaliningrado o Londres solo detiene el contador, nunca lo reinicia. Los días fuera de la zona van saliendo poco a poco de la ventana móvil de 180 días.',
      hacks: [
        'Los días en Reino Unido, Irlanda, Chipre y los Balcanes no cuentan para los 90/180 de Schengen: divide un viaje largo entre Polonia y sus vecinos y luego Londres o Belgrado.',
        'Desde julio de 2025, Polonia controla documentos en sus fronteras con Alemania y Lituania. En el tren Berlín–Varsovia o el autobús a Vilna, lleva el pasaporte encima, no en la maleta.',
        'Con el Sistema de Entradas y Salidas (plenamente operativo desde abril de 2026) ya no se sellan pasaportes: en la primera entrada te toman huellas y foto, y los días se cuentan solos. Consulta tu saldo en la calculadora oficial de estancias cortas de la UE.',
        'Los ciudadanos indios se benefician de la regla «en cascada»: tras dos visados bien usados en tres años, reciben uno de entradas múltiples de dos años y después de cinco.',
      ],
      pitfalls: [
        'ETIAS, la futura autorización en línea de 20 € para viajeros exentos de visado, aún no funciona: su lanzamiento se ha retrasado al menos a finales de 2026, probablemente a 2027. Las webs que lo «tramitan» ahora son estafas.',
        'Un visado de una sola entrada se agota al salir de Schengen: una excursión de un día a Leópolis o Brest te deja sin derecho a volver.',
        'El pasaporte debe haberse expedido hace menos de 10 años y seguir vigente 3 meses después de salir de Schengen; esto pilla a menudo a británicos con pasaportes antiguos.',
      ],
      passports: {
        RU: 'Desde el 19 de septiembre de 2022, Polonia deniega la entrada a ciudadanos rusos que viajan por turismo, negocios, deporte o cultura, aunque tengan visado Schengen de otro país. Hay excepciones: familiares de ciudadanos de la UE, titulares de permisos de residencia o visados nacionales de la UE, diplomáticos, transportistas y casos humanitarios. Los coches con matrícula rusa no pueden entrar en la UE y las tarjetas rusas no funcionan.',
        BY: 'Los ciudadanos bielorrusos necesitan visado Schengen. Solo unos pocos pasos terrestres con Bielorrusia están abiertos y la frontera a veces se cierra por completo, como en septiembre de 2025: consulta la web de la Guardia de Fronteras antes de ir.',
        UA: 'Los ciudadanos ucranianos con pasaporte biométrico no necesitan visado (90/180). La protección temporal de la UE se ha prorrogado hasta el 4 de marzo de 2027; en pasos como Medyka–Shehyni puede haber horas de espera.',
        IN: 'Los ciudadanos indios necesitan visado Schengen; tras dos viajes con visado sin incidencias, optan a uno de entradas múltiples de dos años y luego de cinco.',
      },
    },
    de: {
      summary:
        'EU-Bürgern genügt der Personalausweis. Staatsangehörige der USA, Großbritanniens, Kanadas, Australiens, Japans, Koreas, Brasiliens, Mexikos, der VAE, Israels, der Ukraine und Georgiens reisen visumfrei bis zu 90 Tage innerhalb von 180 Tagen im ganzen Schengen-Raum. Alle anderen, auch Bürger Indiens, Chinas, der Türkei, Kasachstans und Usbekistans, brauchen ein Schengen-Visum. Russische Touristen weist Polen seit September 2022 ab – selbst mit dem Visum eines anderen Landes.',
      apply:
        'Ist Polen dein Hauptreiseziel, beantragst du das Visum bei einem polnischen Konsulat oder Visazentrum: Die Gebühr beträgt 90 €, für Kinder von 6 bis 12 Jahren 45 €. Der Antrag ist frühestens sechs Monate und spätestens 15 Tage vor der Reise möglich; die Entscheidung dauert meist etwa 15 Tage, im Sommer länger. Nötig sind eine Reisekrankenversicherung mit mindestens 30.000 € Deckung, Buchungen, ein Rückflugticket und Kontoauszüge. Ein Schengen-Visum jedes Mitgliedstaats gilt auch für Polen.',
      visaRun:
        'Visa-Runs funktionieren nicht: Die 90/180-Regel zählt jeden Tag im gesamten Schengen-Raum, und ein Abstecher nach Lwiw, Kaliningrad oder London hält die Uhr nur an, setzt sie aber nie zurück. Tage außerhalb der Zone fallen nach und nach aus dem rollierenden 180-Tage-Fenster heraus.',
      hacks: [
        'Tage in Großbritannien, Irland, Zypern und auf dem Balkan zählen nicht zu den Schengen-90/180 – teile eine lange Reise auf: Polen und Nachbarn, danach London oder Belgrad.',
        'Seit Juli 2025 kontrolliert Polen an den Grenzen zu Deutschland und Litauen. Im Zug Berlin–Warschau oder im Bus nach Vilnius gehört der Pass in die Jackentasche, nicht ins Gepäck.',
        'Mit dem Einreise-/Ausreisesystem EES (seit April 2026 voll in Betrieb) gibt es keine Passstempel mehr: Bei der ersten Einreise werden Fingerabdrücke und ein Foto erfasst, die Tage zählt das System. Prüfe dein Restguthaben mit dem offiziellen EU-Kurzaufenthaltsrechner.',
        'Inder profitieren von der „Kaskadenregel“: Nach zwei korrekt genutzten Visa innerhalb von drei Jahren gibt es ein Mehrfachvisum für zwei, danach für fünf Jahre.',
      ],
      pitfalls: [
        'ETIAS, die geplante Online-Genehmigung für 20 € für visumfreie Reisende, läuft noch nicht: Der Start wurde frühestens auf Ende 2026 verschoben, wahrscheinlicher auf 2027. Seiten, die es jetzt „beantragen“, sind Betrug.',
        'Ein Visum für die einmalige Einreise ist mit dem Verlassen des Schengen-Raums verbraucht: Ein Tagesausflug nach Lwiw oder Brest kostet dich das Recht auf Rückkehr.',
        'Der Pass muss in den letzten 10 Jahren ausgestellt sein und noch 3 Monate nach der Ausreise aus dem Schengen-Raum gelten – daran scheitern oft Briten mit älteren Pässen.',
      ],
      passports: {
        RU: 'Seit dem 19. September 2022 verweigert Polen russischen Staatsangehörigen die Einreise zu touristischen, geschäftlichen, sportlichen und kulturellen Zwecken – auch mit dem Schengen-Visum eines anderen Landes. Ausnahmen gelten u. a. für Familienangehörige von EU-Bürgern, Inhaber von EU-Aufenthaltstiteln oder nationalen Visa, Diplomaten, Berufskraftfahrer und humanitäre Fälle. Autos mit russischem Kennzeichen dürfen nicht in die EU, russische Karten funktionieren nicht.',
        BY: 'Belarussische Staatsangehörige brauchen ein Schengen-Visum. Nur wenige Landübergänge nach Belarus sind offen, und die Grenze wird mitunter ganz geschlossen, wie im September 2025 – prüfe vor der Reise die Website des Grenzschutzes.',
        UA: 'Ukrainer mit biometrischem Pass brauchen kein Visum (90/180). Der vorübergehende Schutz in der EU wurde bis 4. März 2027 verlängert; an Übergängen wie Medyka–Schehyni wartet man oft stundenlang.',
        IN: 'Inder brauchen ein Schengen-Visum; nach zwei problemlosen Visareisen gibt es ein Mehrfachvisum für zwei, dann für fünf Jahre.',
      },
    },
    fr: {
      summary:
        'Les citoyens de l’UE n’ont besoin que de leur carte d’identité. Les ressortissants des États-Unis, du Royaume-Uni, du Canada, d’Australie, du Japon, de Corée, du Brésil, du Mexique, des Émirats, d’Israël, d’Ukraine et de Géorgie entrent sans visa jusqu’à 90 jours sur toute période de 180 jours dans l’espace Schengen. Les autres, dont les citoyens indiens, chinois, turcs, kazakhs et ouzbeks, ont besoin d’un visa Schengen. Depuis septembre 2022, la Pologne refuse les touristes russes, même munis du visa d’un autre pays.',
      apply:
        'Si la Pologne est votre destination principale, déposez la demande auprès d’un consulat ou centre de visas polonais : 90 €, ou 45 € pour les enfants de 6 à 12 ans. La demande peut être faite six mois à l’avance et au plus tard 15 jours avant le départ ; la décision prend en général une quinzaine de jours, davantage en été. Il faut une assurance voyage couvrant au moins 30 000 €, des réservations, un billet retour et des relevés bancaires. Un visa Schengen de n’importe quel État membre est aussi valable pour la Pologne.',
      visaRun:
        'Le visa run ne fonctionne pas : la règle des 90/180 compte chaque jour passé dans tout l’espace Schengen, et un saut à Lviv, Kaliningrad ou Londres ne fait que mettre le compteur en pause, sans jamais le remettre à zéro. Les jours passés hors de la zone sortent peu à peu de la fenêtre glissante de 180 jours.',
      hacks: [
        'Les jours passés au Royaume-Uni, en Irlande, à Chypre et dans les Balkans ne comptent pas dans les 90/180 de Schengen : découpez un long voyage entre la Pologne et ses voisins, puis Londres ou Belgrade.',
        'Depuis juillet 2025, la Pologne contrôle les documents à ses frontières avec l’Allemagne et la Lituanie. Dans le train Berlin–Varsovie ou le bus pour Vilnius, gardez votre passeport sur vous, pas dans la valise.',
        'Avec le système d’entrée/sortie EES (pleinement opérationnel depuis avril 2026), les passeports ne sont plus tamponnés : empreintes et photo sont prises à la première entrée, et les jours sont décomptés automatiquement. Vérifiez votre solde avec le calculateur officiel de court séjour de l’UE.',
        'Les citoyens indiens profitent de la règle « en cascade » : après deux visas utilisés correctement en trois ans, ils obtiennent un visa à entrées multiples de deux ans, puis de cinq ans.',
      ],
      pitfalls: [
        'ETIAS, l’autorisation en ligne prévue à 20 € pour les voyageurs exemptés de visa, n’est pas encore en service : son lancement a glissé au plus tôt à fin 2026, plus probablement à 2027. Les sites qui le « délivrent » aujourd’hui sont des arnaques.',
        'Un visa à entrée unique est consommé dès la sortie de Schengen : une excursion d’une journée à Lviv ou Brest vous prive du droit de revenir.',
        'Le passeport doit avoir été délivré il y a moins de 10 ans et rester valable 3 mois après la sortie de Schengen ; cela piège souvent les Britanniques aux passeports anciens.',
      ],
      passports: {
        RU: 'Depuis le 19 septembre 2022, la Pologne refuse l’entrée aux ressortissants russes voyageant pour le tourisme, les affaires, le sport ou la culture, même avec un visa Schengen d’un autre pays. Exceptions : membres de la famille de citoyens de l’UE, titulaires d’un titre de séjour ou d’un visa long séjour de l’UE, diplomates, chauffeurs routiers et cas humanitaires. Les voitures immatriculées en Russie sont interdites dans l’UE et les cartes bancaires russes ne fonctionnent pas.',
        BY: 'Les citoyens biélorusses ont besoin d’un visa Schengen. Seuls quelques points de passage terrestres vers la Biélorussie sont ouverts, et la frontière ferme parfois entièrement, comme en septembre 2025 : consultez le site des gardes-frontières avant de partir.',
        UA: 'Les citoyens ukrainiens munis d’un passeport biométrique n’ont pas besoin de visa (90/180). La protection temporaire de l’UE est prolongée jusqu’au 4 mars 2027 ; à des postes comme Medyka–Chehyni, l’attente peut durer des heures.',
        IN: 'Les citoyens indiens ont besoin d’un visa Schengen ; après deux voyages sans incident, ils peuvent obtenir un visa à entrées multiples de deux ans, puis de cinq ans.',
      },
    },
    it: {
      summary:
        'Ai cittadini UE basta la carta d’identità. I cittadini di Stati Uniti, Regno Unito, Canada, Australia, Giappone, Corea, Brasile, Messico, Emirati, Israele, Ucraina e Georgia entrano senza visto fino a 90 giorni ogni 180 in tutta l’area Schengen. Tutti gli altri, compresi i cittadini di India, Cina, Turchia, Kazakistan e Uzbekistan, hanno bisogno del visto Schengen. Da settembre 2022 la Polonia respinge i turisti russi, anche con il visto di un altro paese.',
      apply:
        'Se la Polonia è la meta principale, fai domanda a un consolato o centro visti polacco: costa 90 €, 45 € per i bambini dai 6 ai 12 anni. Puoi presentarla fino a sei mesi prima e non oltre 15 giorni prima della partenza; la decisione arriva di solito in circa 15 giorni, d’estate di più. Servono un’assicurazione di viaggio con copertura di almeno 30.000 €, prenotazioni, biglietto di ritorno ed estratti conto. Un visto Schengen di qualsiasi Stato membro vale anche per la Polonia.',
      visaRun:
        'Il visa run non funziona: la regola 90/180 conta ogni giorno nell’intera area Schengen, e una gita a Leopoli, Kaliningrad o Londra mette solo in pausa il contatore, senza mai azzerarlo. I giorni trascorsi fuori dall’area escono poco a poco dalla finestra mobile di 180 giorni.',
      hacks: [
        'I giorni nel Regno Unito, in Irlanda, a Cipro e nei Balcani non contano per i 90/180 di Schengen: dividi un viaggio lungo tra la Polonia e i paesi vicini, poi Londra o Belgrado.',
        'Da luglio 2025 la Polonia controlla i documenti ai confini con Germania e Lituania. Sul treno Berlino–Varsavia o sul bus per Vilnius tieni il passaporto addosso, non in valigia.',
        'Con il sistema di ingressi/uscite EES (pienamente attivo da aprile 2026) i passaporti non vengono più timbrati: al primo ingresso ti prendono impronte e foto, e i giorni si contano in automatico. Controlla il saldo con il calcolatore ufficiale UE dei soggiorni brevi.',
        'I cittadini indiani beneficiano della regola «a cascata»: dopo due visti usati correttamente in tre anni ottengono un visto per ingressi multipli di due anni, poi di cinque.',
      ],
      pitfalls: [
        'ETIAS, la futura autorizzazione online da 20 € per chi viaggia senza visto, non è ancora attiva: il lancio è slittato almeno a fine 2026, più probabilmente al 2027. I siti che lo «rilasciano» ora sono truffe.',
        'Un visto a ingresso singolo si esaurisce appena esci da Schengen: una gita di un giorno a Leopoli o Brest ti toglie il diritto di rientrare.',
        'Il passaporto deve essere stato rilasciato da meno di 10 anni e valere ancora 3 mesi dopo l’uscita da Schengen: un errore frequente dei britannici con passaporti vecchi.',
      ],
      passports: {
        RU: 'Dal 19 settembre 2022 la Polonia nega l’ingresso ai cittadini russi in viaggio per turismo, affari, sport o cultura, anche con un visto Schengen di un altro paese. Fanno eccezione i familiari di cittadini UE, i titolari di permessi di soggiorno o visti nazionali UE, i diplomatici, gli autotrasportatori e i casi umanitari. Le auto con targa russa non possono entrare nell’UE e le carte russe non funzionano.',
        BY: 'I cittadini bielorussi hanno bisogno del visto Schengen. Sono aperti solo pochi valichi terrestri con la Bielorussia e talvolta il confine chiude del tutto, come a settembre 2025: controlla il sito della Guardia di frontiera prima di partire.',
        UA: 'I cittadini ucraini con passaporto biometrico non hanno bisogno del visto (90/180). La protezione temporanea UE è prorogata fino al 4 marzo 2027; a valichi come Medyka–Shehyni si aspetta anche per ore.',
        IN: 'I cittadini indiani hanno bisogno del visto Schengen; dopo due viaggi senza problemi possono ottenere un visto per ingressi multipli di due anni, poi di cinque.',
      },
    },
  },
};

export default guide;
