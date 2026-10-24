import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'KE',
  checked: '2026-10',
  fees: { eta: { kind: 'from', amount: 30, currency: 'USD' } },
  stay: { eta: 90 },
  links: { eta: 'https://www.etakenya.go.ke', immigration: 'https://immigration.go.ke' },
  docs: ['returnTicket', 'booking', 'yellowFever'],
  passportMonths: 6,
  extend: { days: 90, fee: { kind: 'fixed', amount: 50, currency: 'USD' } },
  visaRun: 'limited',
  borders: [
    { name: 'Namanga', to: 'TZ', lat: -2.5458, lng: 36.7897 },
    { name: 'Busia', to: 'UG', lat: 0.4633, lng: 34.0917 },
  ],
  nomad: { name: 'Class N Digital Nomad Permit', months: 12, income: { kind: 'from', amount: 2000, currency: 'USD' } },
  hackScope: [['regime:eta'], ['regime:eta'], null, ['US'], null],
  pitfallScope: [['regime:eta'], ['regime:eta'], ['regime:eta'], null],
  text: {
    ru: {
      summary:
        'Почти всем гостям из-за пределов Африки нужно электронное разрешение ETA: около 30 $, оформляется онлайн и даёт одну поездку до 90 дней. С 2025 года от ETA освобождены граждане почти всех африканских стран (кроме Сомали и Ливии) и ряда государств Карибского бассейна и Океании, а транзитным пассажирам, не выходящим из аэропорта, оно не нужно.',
      apply:
        'Подавайте на etakenya.go.ke не раньше чем за 90 дней и не позже чем за неделю до вылета: скан паспорта, селфи, билеты и бронь жилья, оплата картой около 30 $ (плюс небольшая банковская комиссия). Обычно ответ приходит на почту в течение трёх рабочих дней, срочное рассмотрение стоит дороже. ETA рассчитано на один въезд: после поездки за пределы Восточной Африки нужно новое.',
      extend:
        'Пребывание можно один раз продлить ещё до 90 дней (всего до шести месяцев): заявка подаётся онлайн на портале иммиграционной службы через eCitizen до окончания срока, сбор около 50 $, затем паспорт заверяют в иммиграционном офисе.',
      visaRun:
        'Короткие поездки в Танзанию, Уганду или Руанду ничего не обнуляют: по правилу Восточноафриканского сообщества вы возвращаетесь по прежнему ETA, пока оно действует. Чтобы начать новые 90 дней, нужно новое ETA, а пограничники замечают пребывания подряд — если в сумме выходит больше полугода в год, ждите вопросов. Обычные сухопутные переходы — Наманга (на Арушу) и Бусия (в Уганду).',
      nomad:
        'Разрешение для цифровых кочевников Class N позволяет удалённо работать на иностранного работодателя или клиентов до года с возможностью продления. Нужен доход из-за рубежа не менее 24 000 $ в год (около 2000 $ в месяц), подтверждение жилья и справка о несудимости; сбор за рассмотрение 200 $, плата за выдачу — по сообщениям, до 1000 $ в год.',
      hacks: [
        'Едете в Кению плюс Уганду или Руанду? Восточноафриканская туристическая виза (100 $, 90 дней, многократные поездки между тремя странами) может выйти дешевле отдельных разрешений. Оформляйте её через страну первого въезда и не покидайте эти три страны — иначе она аннулируется; перед поездкой уточните на etakenya.go.ke, как она сочетается с ETA для вашего паспорта.',
        'Танзания в эту визу не входит, но сафари Кения — Танзания организовать легко: переходите через Намангу с танзанийской e-визой и возвращайтесь в Кению по ещё действующему кенийскому ETA.',
        'Если при пересадке в Найроби (NBO) вы остаётесь в транзитной зоне, ETA не нужно. Хотите выйти в город на длинной стыковке — оформляйте.',
        'Гражданам США доступно многократное ETA на 5 лет (по сообщениям, около 160–185 $) — выгодно, если вы часто бываете в Восточной Африке.',
        'Возьмите сертификат о прививке от жёлтой лихорадки: Кения просит его у прилетающих из эндемичных стран, а Танзания, ЮАР и другие соседи — у тех, кто прилетает из самой Кении.',
      ],
      pitfalls: [
        'Сайты-двойники берут 70–100 $ за то же ETA. Официальный портал только один — etakenya.go.ke.',
        'ETA привязано к паспорту: при замене паспорта нужно новое, а данные в анкете должны совпадать до буквы.',
        'Поздняя подача: в выходные и праздники обработка замедляется, а без одобренного ETA авиакомпания не посадит на рейс.',
        'Даже несколько дней просрочки грозят задержанием и депортацией — продлевайтесь до того, как истекут 90 дней.',
      ],
      passports: {
        RU: 'Россиянам ETA нужно на общих основаниях. Российские карты на etakenya.go.ke не проходят — платите картой зарубежного банка (например, казахстанского или армянского) и везите наличные доллары для оплаты парков и лоджей.',
        US: 'Граждане США могут выбрать обычное однократное ETA или многократное на 5 лет.',
      },
    },
    en: {
      summary:
        'Almost every visitor from outside Africa needs Kenya’s Electronic Travel Authorisation (ETA): about $30, applied for online, valid for one stay of up to 90 days. Since 2025 citizens of nearly all African countries (except Somalia and Libya) and of several Caribbean and Pacific states are exempt, and transit passengers who stay inside the airport need nothing.',
      apply:
        'Apply on etakenya.go.ke no earlier than 90 days and ideally at least a week before you fly: passport scan, selfie, flight and accommodation bookings, and a card payment of about $30 (plus a small bank charge). Most ETAs arrive by email within three working days; an expedited option costs extra. The ETA covers one entry — coming back after a trip outside East Africa means a new one.',
      extend:
        'You can extend once by up to 90 more days (six months in total): apply online on the immigration portal via eCitizen before your stay ends, pay about $50 and then have your passport endorsed at an immigration office.',
      visaRun:
        'Short trips to Tanzania, Uganda or Rwanda don’t reset anything: under the East African Community rule you re-enter on your original ETA while it is still valid. A fresh 90 days needs a new ETA, and officers notice back-to-back stays — beyond about six months a year, expect questions. The usual land crossings are Namanga (towards Arusha) and Busia (into Uganda).',
      nomad:
        'The Class N Digital Nomad Permit lets you work remotely for a foreign employer or clients for up to a year, renewable. You need foreign income of at least $24,000 a year (about $2,000 a month), proof of accommodation and a clean criminal record; the processing fee is $200 and the issuance fee is reported at up to $1,000 a year.',
      hacks: [
        'Combining Kenya with Uganda or Rwanda? The East Africa Tourist Visa ($100, 90 days, multiple entries between the three) can work out cheaper than separate permits. Apply through the country you enter first and don’t leave the three-country bloc, or it lapses; check on etakenya.go.ke how it combines with the ETA for your passport.',
        'Tanzania isn’t part of that visa, but a Kenya–Tanzania safari is easy: cross at Namanga on your Tanzanian e-visa and return to Kenya on your still-valid Kenyan ETA.',
        'Changing planes in Nairobi (NBO) without leaving the transit area needs no ETA. If you want to go into town on a long layover, you do need one.',
        'US citizens can get a five-year multiple-entry ETA (reported at roughly $160–185) — worth it if you come back to East Africa often.',
        'Carry a yellow fever certificate: Kenya asks for it if you arrive from an endemic country, and Tanzania, South Africa and other neighbours ask for it when you arrive from Kenya itself.',
      ],
      pitfalls: [
        'Look-alike sites charge $70–100 for the same ETA. The only official portal is etakenya.go.ke.',
        'The ETA is tied to your passport: a new passport needs a new ETA, and every detail in the form must match exactly.',
        'Applying too late: processing slows over weekends and holidays, and airlines won’t board you without an approved ETA.',
        'Overstaying even a few days can mean detention and deportation — extend before your 90 days run out.',
      ],
      passports: {
        RU: 'Russian citizens need the ETA like everyone else. Russian cards don’t work on etakenya.go.ke — pay with a card from a foreign bank (for example Kazakh or Armenian) and bring US dollars in cash for park and lodge fees.',
        US: 'US citizens can choose between the standard single-entry ETA and a five-year multiple-entry one.',
      },
    },
    es: {
      summary:
        'Casi todos los visitantes de fuera de África necesitan la autorización electrónica de viaje de Kenia (ETA): unos 30 $, se tramita en línea y vale para una estancia de hasta 90 días. Desde 2025 están exentos los ciudadanos de casi todos los países africanos (salvo Somalia y Libia) y de varios Estados del Caribe y el Pacífico, y quien hace escala sin salir del aeropuerto no necesita nada.',
      apply:
        'Solicítala en etakenya.go.ke como máximo 90 días antes del viaje y, a ser posible, al menos una semana antes: escaneo del pasaporte, selfi, reservas de vuelo y alojamiento y pago con tarjeta de unos 30 $ (más una pequeña comisión bancaria). La mayoría llega por correo en tres días laborables; la tramitación urgente cuesta más. La ETA vale para una entrada: si vuelves tras un viaje fuera de África Oriental, necesitas otra.',
      extend:
        'Puedes prorrogar una vez hasta 90 días más (seis meses en total): pídelo en línea en el portal de inmigración a través de eCitizen antes de que termine tu estancia, paga unos 50 $ y luego lleva el pasaporte a una oficina de inmigración para que lo sellen.',
      visaRun:
        'Las escapadas a Tanzania, Uganda o Ruanda no reinician nada: según la norma de la Comunidad de África Oriental, vuelves a entrar con tu ETA original mientras siga vigente. Para empezar otros 90 días hace falta una ETA nueva, y los agentes se fijan en las estancias encadenadas: si pasas de unos seis meses al año, prepárate para preguntas. Los pasos terrestres habituales son Namanga (hacia Arusha) y Busia (hacia Uganda).',
      nomad:
        'El permiso de nómada digital Class N te deja trabajar en remoto para un empleador o clientes extranjeros hasta un año, prorrogable. Necesitas ingresos del extranjero de al menos 24 000 $ al año (unos 2000 $ al mes), prueba de alojamiento y certificado de antecedentes penales limpio; la tramitación cuesta 200 $ y la expedición, según se informa, hasta 1000 $ al año.',
      hacks: [
        '¿Combinas Kenia con Uganda o Ruanda? El visado turístico de África Oriental (100 $, 90 días, entradas múltiples entre los tres) puede salir más barato que los permisos por separado. Pídelo a través del país por el que entras primero y no salgas del bloque o caducará; comprueba en etakenya.go.ke cómo encaja con la ETA para tu pasaporte.',
        'Tanzania no entra en ese visado, pero un safari Kenia–Tanzania es fácil: cruza por Namanga con tu visado electrónico tanzano y vuelve a Kenia con tu ETA keniana aún vigente.',
        'Si haces escala en Nairobi (NBO) sin salir de la zona de tránsito, no necesitas ETA. Si quieres salir a la ciudad en una escala larga, sí.',
        'Los ciudadanos estadounidenses pueden pedir una ETA de entradas múltiples por cinco años (se habla de unos 160–185 $): compensa si vuelves a menudo a África Oriental.',
        'Lleva el certificado de la fiebre amarilla: Kenia lo pide si llegas de un país endémico, y Tanzania, Sudáfrica y otros vecinos lo piden cuando llegas desde la propia Kenia.',
      ],
      pitfalls: [
        'Las webs clonadas cobran entre 70 y 100 $ por la misma ETA. El único portal oficial es etakenya.go.ke.',
        'La ETA va ligada al pasaporte: con un pasaporte nuevo necesitas otra, y todos los datos del formulario deben coincidir exactamente.',
        'Pedirla tarde: los fines de semana y festivos la tramitación se ralentiza, y sin ETA aprobada la aerolínea no te deja embarcar.',
        'Quedarte aunque sea unos días de más puede acabar en detención y deportación: prorroga antes de que se acaben los 90 días.',
      ],
      passports: {
        RU: 'Los ciudadanos rusos necesitan la ETA como todos. Las tarjetas rusas no funcionan en etakenya.go.ke: paga con una tarjeta de un banco extranjero (por ejemplo, kazajo o armenio) y lleva dólares en efectivo para parques y lodges.',
        US: 'Los ciudadanos estadounidenses pueden elegir entre la ETA normal de una entrada y una de entradas múltiples por cinco años.',
      },
    },
    de: {
      summary:
        'Fast alle Reisenden von außerhalb Afrikas brauchen Kenias elektronische Reisegenehmigung (ETA): rund 30 $, online beantragt, gültig für einen Aufenthalt bis 90 Tage. Seit 2025 sind Staatsangehörige fast aller afrikanischen Länder (außer Somalia und Libyen) sowie mehrerer Karibik- und Pazifikstaaten befreit, und wer beim Umsteigen im Flughafen bleibt, braucht nichts.',
      apply:
        'Beantrage die ETA auf etakenya.go.ke frühestens 90 Tage und am besten mindestens eine Woche vor dem Flug: Passscan, Selfie, Flug- und Unterkunftsbuchung, Kartenzahlung von rund 30 $ (plus kleiner Bankgebühr). Meist kommt sie innerhalb von drei Werktagen per E-Mail, die Expressbearbeitung kostet extra. Die ETA gilt für eine Einreise – wer nach einer Reise außerhalb Ostafrikas zurückkommt, braucht eine neue.',
      extend:
        'Einmal lässt sich um bis zu 90 Tage verlängern (insgesamt sechs Monate): online über eCitizen im Portal der Einwanderungsbehörde vor Ablauf beantragen, rund 50 $ zahlen und den Pass anschließend in einem Immigration Office abstempeln lassen.',
      visaRun:
        'Kurze Abstecher nach Tansania, Uganda oder Ruanda setzen nichts zurück: Nach der Regel der Ostafrikanischen Gemeinschaft reist du mit deiner ursprünglichen ETA wieder ein, solange sie gilt. Für neue 90 Tage brauchst du eine neue ETA, und Grenzbeamte achten auf Aufenthalte am Stück – über etwa sechs Monate im Jahr gibt es Fragen. Die üblichen Landübergänge sind Namanga (Richtung Arusha) und Busia (nach Uganda).',
      nomad:
        'Mit der Class N Digital Nomad Permit darfst du bis zu ein Jahr für einen ausländischen Arbeitgeber oder Kunden remote arbeiten, verlängerbar. Nötig sind Auslandseinkünfte von mindestens 24.000 $ im Jahr (rund 2.000 $ im Monat), ein Unterkunftsnachweis und ein sauberes Führungszeugnis; die Bearbeitung kostet 200 $, die Ausstellung laut Berichten bis zu 1.000 $ pro Jahr.',
      hacks: [
        'Kenia plus Uganda oder Ruanda? Das East Africa Tourist Visa (100 $, 90 Tage, beliebig oft zwischen den drei Ländern) kann günstiger sein als einzelne Genehmigungen. Beantrage es über das Land der ersten Einreise und verlasse den Dreierblock nicht, sonst verfällt es; prüfe auf etakenya.go.ke, wie es für deinen Pass mit der ETA zusammenspielt.',
        'Tansania gehört nicht dazu, eine Safari Kenia–Tansania ist trotzdem einfach: Bei Namanga mit dem tansanischen E-Visum über die Grenze und mit der noch gültigen kenianischen ETA zurück.',
        'Wer in Nairobi (NBO) umsteigt und im Transitbereich bleibt, braucht keine ETA. Für einen Abstecher in die Stadt bei langem Aufenthalt schon.',
        'US-Bürger können eine fünfjährige ETA für mehrfache Einreise bekommen (berichtet werden rund 160–185 $) – lohnt sich, wenn du öfter nach Ostafrika reist.',
        'Nimm den Gelbfieber-Impfnachweis mit: Kenia verlangt ihn bei Ankunft aus Endemiegebieten, und Tansania, Südafrika und andere Nachbarn verlangen ihn, wenn du aus Kenia selbst kommst.',
      ],
      pitfalls: [
        'Nachahmerseiten verlangen 70–100 $ für dieselbe ETA. Das einzige offizielle Portal ist etakenya.go.ke.',
        'Die ETA hängt am Pass: Neuer Pass heißt neue ETA, und alle Angaben müssen exakt übereinstimmen.',
        'Zu später Antrag: An Wochenenden und Feiertagen dauert es länger, und ohne genehmigte ETA lässt dich die Airline nicht an Bord.',
        'Schon wenige Tage Überziehung können Haft und Abschiebung bedeuten – verlängere, bevor die 90 Tage um sind.',
      ],
      passports: {
        RU: 'Russische Staatsangehörige brauchen die ETA wie alle anderen. Russische Karten funktionieren auf etakenya.go.ke nicht – zahle mit der Karte einer ausländischen Bank (etwa aus Kasachstan oder Armenien) und nimm US-Dollar in bar für Parks und Lodges mit.',
        US: 'US-Bürger haben die Wahl zwischen der normalen ETA für eine Einreise und einer fünfjährigen für mehrfache Einreise.',
      },
    },
    fr: {
      summary:
        'Presque tous les visiteurs venant d’hors d’Afrique ont besoin de l’autorisation électronique de voyage kényane (ETA) : environ 30 $, demandée en ligne, valable pour un séjour de 90 jours maximum. Depuis 2025, les ressortissants de presque tous les pays africains (sauf la Somalie et la Libye) et de plusieurs États des Caraïbes et du Pacifique en sont exemptés, et les passagers en transit qui restent dans l’aéroport n’ont besoin de rien.',
      apply:
        'Faites la demande sur etakenya.go.ke au plus tôt 90 jours et idéalement au moins une semaine avant le départ : scan du passeport, selfie, réservations de vol et d’hébergement, paiement par carte d’environ 30 $ (plus de petits frais bancaires). La plupart des ETA arrivent par e-mail sous trois jours ouvrés ; l’option accélérée coûte plus cher. L’ETA vaut pour une entrée : revenir après un voyage hors d’Afrique de l’Est impose d’en demander une nouvelle.',
      extend:
        'Une prolongation unique de 90 jours maximum est possible (six mois au total) : demande en ligne sur le portail de l’immigration via eCitizen avant la fin du séjour, environ 50 $, puis visa apposé sur le passeport dans un bureau de l’immigration.',
      visaRun:
        'Un saut en Tanzanie, en Ouganda ou au Rwanda ne remet pas le compteur à zéro : selon la règle de la Communauté d’Afrique de l’Est, vous revenez avec votre ETA initiale tant qu’elle est valable. Pour repartir sur 90 jours, il faut une nouvelle ETA, et les agents repèrent les séjours enchaînés : au-delà d’environ six mois par an, attendez-vous à des questions. Les postes terrestres habituels sont Namanga (vers Arusha) et Busia (vers l’Ouganda).',
      nomad:
        'Le Class N Digital Nomad Permit permet de travailler à distance pour un employeur ou des clients étrangers jusqu’à un an, renouvelable. Il faut des revenus de l’étranger d’au moins 24 000 $ par an (environ 2 000 $ par mois), un justificatif de logement et un casier judiciaire vierge ; les frais de dossier sont de 200 $ et ceux de délivrance atteindraient 1 000 $ par an.',
      hacks: [
        'Kenya plus Ouganda ou Rwanda ? Le visa touristique d’Afrique de l’Est (100 $, 90 jours, entrées multiples entre les trois pays) peut revenir moins cher que des autorisations séparées. Demandez-le via le pays de première entrée et ne quittez pas ce bloc, sinon il expire ; vérifiez sur etakenya.go.ke comment il s’articule avec l’ETA pour votre passeport.',
        'La Tanzanie n’en fait pas partie, mais un safari Kenya–Tanzanie reste simple : passez à Namanga avec votre e-visa tanzanien et revenez au Kenya avec votre ETA kényane encore valable.',
        'Une correspondance à Nairobi (NBO) sans quitter la zone de transit ne demande pas d’ETA. Pour sortir en ville lors d’une longue escale, si.',
        'Les citoyens américains peuvent obtenir une ETA à entrées multiples valable cinq ans (environ 160 à 185 $ selon les informations disponibles) : intéressant si vous revenez souvent en Afrique de l’Est.',
        'Emportez le certificat de vaccination contre la fièvre jaune : le Kenya l’exige si vous arrivez d’un pays d’endémie, et la Tanzanie, l’Afrique du Sud et d’autres voisins l’exigent quand vous arrivez du Kenya lui-même.',
      ],
      pitfalls: [
        'Des sites copiés facturent 70 à 100 $ la même ETA. Le seul portail officiel est etakenya.go.ke.',
        'L’ETA est liée au passeport : un nouveau passeport impose une nouvelle ETA, et chaque donnée doit correspondre exactement.',
        'Demander trop tard : le traitement ralentit le week-end et les jours fériés, et la compagnie refuse l’embarquement sans ETA approuvée.',
        'Dépasser la durée autorisée, même de quelques jours, peut valoir détention et expulsion : prolongez avant la fin des 90 jours.',
      ],
      passports: {
        RU: 'Les ressortissants russes ont besoin de l’ETA comme tout le monde. Les cartes russes ne passent pas sur etakenya.go.ke : payez avec la carte d’une banque étrangère (kazakhe ou arménienne, par exemple) et emportez des dollars en espèces pour les parcs et les lodges.',
        US: 'Les citoyens américains ont le choix entre l’ETA standard à entrée unique et une ETA à entrées multiples valable cinq ans.',
      },
    },
    it: {
      summary:
        'Quasi tutti i visitatori che arrivano da fuori Africa hanno bisogno dell’autorizzazione elettronica di viaggio keniota (ETA): circa 30 $, si chiede online e vale per un soggiorno fino a 90 giorni. Dal 2025 ne sono esenti i cittadini di quasi tutti i paesi africani (tranne Somalia e Libia) e di diversi Stati dei Caraibi e del Pacifico, e chi fa scalo senza uscire dall’aeroporto non ha bisogno di nulla.',
      apply:
        'Fai domanda su etakenya.go.ke non prima di 90 giorni e possibilmente almeno una settimana prima del volo: scansione del passaporto, selfie, prenotazioni di volo e alloggio, pagamento con carta di circa 30 $ (più una piccola commissione bancaria). Di solito arriva via e-mail entro tre giorni lavorativi; l’opzione urgente costa di più. L’ETA vale per un ingresso: se torni dopo un viaggio fuori dall’Africa orientale, te ne serve una nuova.',
      extend:
        'Puoi prorogare una volta sola fino a 90 giorni (sei mesi in totale): fai domanda online sul portale dell’immigrazione tramite eCitizen prima della scadenza, paga circa 50 $ e poi fai vidimare il passaporto in un ufficio immigrazione.',
      visaRun:
        'Le gite in Tanzania, Uganda o Ruanda non azzerano nulla: secondo la regola della Comunità dell’Africa orientale rientri con l’ETA originale finché è valida. Per ripartire da 90 giorni serve una nuova ETA, e gli agenti notano i soggiorni consecutivi: oltre circa sei mesi l’anno aspettati domande. I valichi via terra più usati sono Namanga (verso Arusha) e Busia (verso l’Uganda).',
      nomad:
        'Il Class N Digital Nomad Permit ti permette di lavorare da remoto per un datore di lavoro o clienti esteri fino a un anno, rinnovabile. Servono redditi dall’estero di almeno 24.000 $ l’anno (circa 2.000 $ al mese), prova dell’alloggio e fedina penale pulita; la pratica costa 200 $ e il rilascio, secondo quanto riportato, fino a 1.000 $ l’anno.',
      hacks: [
        'Kenya più Uganda o Ruanda? Il visto turistico dell’Africa orientale (100 $, 90 giorni, ingressi multipli tra i tre paesi) può costare meno dei permessi separati. Chiedilo tramite il paese di primo ingresso e non uscire dal blocco, altrimenti decade; verifica su etakenya.go.ke come si combina con l’ETA per il tuo passaporto.',
        'La Tanzania non ne fa parte, ma un safari Kenya–Tanzania è facile: attraversa a Namanga con il visto elettronico tanzaniano e rientra in Kenya con l’ETA keniota ancora valida.',
        'Se fai scalo a Nairobi (NBO) restando nella zona transiti, l’ETA non serve. Se vuoi uscire in città durante uno scalo lungo, sì.',
        'I cittadini statunitensi possono avere un’ETA a ingressi multipli valida cinque anni (si parla di circa 160–185 $): conviene se torni spesso in Africa orientale.',
        'Porta il certificato di vaccinazione contro la febbre gialla: il Kenya lo chiede a chi arriva da paesi endemici, e Tanzania, Sudafrica e altri vicini lo chiedono a chi arriva dal Kenya stesso.',
      ],
      pitfalls: [
        'I siti clone fanno pagare 70–100 $ per la stessa ETA. L’unico portale ufficiale è etakenya.go.ke.',
        'L’ETA è legata al passaporto: con un passaporto nuovo ne serve un’altra, e ogni dato del modulo deve coincidere alla lettera.',
        'Fare domanda tardi: nei fine settimana e nei festivi i tempi si allungano, e senza ETA approvata la compagnia aerea non ti imbarca.',
        'Anche pochi giorni oltre il limite possono costare fermo ed espulsione: proroga prima che scadano i 90 giorni.',
      ],
      passports: {
        RU: 'I cittadini russi hanno bisogno dell’ETA come tutti. Le carte russe su etakenya.go.ke non funzionano: paga con la carta di una banca estera (per esempio kazaka o armena) e porta dollari in contanti per parchi e lodge.',
        US: 'I cittadini statunitensi possono scegliere tra l’ETA standard a ingresso singolo e quella a ingressi multipli valida cinque anni.',
      },
    },
  },
};

export default guide;
