import type { MatrixCell, VisaGuide } from '../types';

const eta: MatrixCell = { status: 'eta', days: 30 };
const CHECKED = 'RU BY KZ UA UZ AM GE US GB CA AU DE FR IT ES PL NL IN CN BR MX TR AE IL JP KR'.split(' ');

const guide: VisaGuide = {
  code: 'LK',
  checked: '2026-10',
  overrides: Object.fromEntries(CHECKED.map((p) => [p, eta])),
  fees: {
    eta: { kind: 'fixed', amount: 50, currency: 'USD' },
    voa: { kind: 'fixed', amount: 60, currency: 'USD' },
  },
  stay: { eta: 30, voa: 30 },
  links: { eta: 'https://www.eta.gov.lk', immigration: 'https://www.immigration.gov.lk' },
  docs: ['returnTicket', 'finance'],
  passportMonths: 6,
  extend: { days: 60 },
  visaRun: 'limited',
  borders: [
    { name: 'Colombo (CMB) → Malé', to: 'MV', lat: 7.1808, lng: 79.8841 },
    { name: 'Colombo (CMB) → Chennai', to: 'IN', lat: 7.1808, lng: 79.8841 },
  ],
  text: {
    ru: {
      summary:
        'Почти всем туристам нужна электронная авторизация ETA: она даёт 30 дней и два въезда. Стандартный сбор — 50 $, но с конца 2024 года граждане примерно 40 стран, включая Россию, Индию, Китай, Великобританию, Германию, Японию и Австралию, получают её бесплатно. Без ETA можно оформить визу по прибытии в аэропорту Коломбо, но она дороже — около 60 $.',
      apply:
        'Оформляйте ETA только на eta.gov.lk: анкета латиницей, данные паспорта, адрес первого отеля, оплата картой, если ваша страна не в бесплатном списке. Ответ обычно приходит за 1–3 дня на почту; распечатка не обязательна, но пригодится авиакомпании. Бесплатный режим для 40 стран вводили как пилот и продлевали — проверьте, действует ли он на даты вашей поездки.',
      extend:
        'Туристическую визу продлевают в Департаменте иммиграции (онлайн или в офисе в Баттарамулле под Коломбо) сначала до 90 дней со дня въезда, затем ещё до 180 дней всего. Сбор зависит от гражданства; подавайте заранее, до окончания 30 дней.',
      visaRun:
        'Визаран возможен, но обычно проще продлиться: ETA двукратная, а при новом въезде нужна новая. Ближайшие короткие рейсы — в Мале (Мальдивы дают бесплатную визу по прибытии) и в Ченнаи, куда нужна индийская e-виза.',
      hacks: [
        'ETA двукратная: можно слетать на Мальдивы и вернуться в Шри-Ланку по той же авторизации, не оформляя новую.',
        'Если вы из страны бесплатного списка, ETA стоит 0 $ — посредники всё равно берут за неё 30–80 $, так что подавайте сами.',
        'Продление до 90 дней дешевле и проще двух визаранов, а в сезон дождей на юго-западе (май–сентябрь) можно просто переехать на восточное побережье.',
        'Укажите в анкете реальный адрес первой ночи: на границе его сверяют, а пустое поле затягивает проверку.',
      ],
      pitfalls: [
        'После скандала 2024 года с частным оператором визового сайта в сети осталось много поддельных порталов. Официальный адрес — только eta.gov.lk.',
        'ETA — это туристическая авторизация: волонтёрство, работа и даже платные ретриты с «обучением» требуют другого типа визы.',
        'Виза по прибытии дороже и связана с очередью после долгого перелёта — лучше оформить ETA до вылета.',
      ],
      passports: {
        RU: 'Россияне входят в список стран с бесплатной ETA. Прямые рейсы «Аэрофлота» летают в Коломбо; российские карты не работают, берите доллары и меняйте в банках.',
        IN: 'Граждане Индии получают ETA бесплатно; рейсы из Ченнаи, Бангалора и Мумбаи до Коломбо — около часа-двух.',
        US: 'Входят ли граждане США в бесплатный список на даты вашей поездки, портал eta.gov.lk покажет перед оплатой — если сбор не исчез, значит, нет.',
      },
    },
    en: {
      summary:
        'Almost every tourist needs an Electronic Travel Authorisation (ETA), which gives 30 days and two entries. The standard fee is $50, but since late 2024 citizens of about 40 countries, including Russia, India, China, the UK, Germany, Japan and Australia, have received it free. Without an ETA you can get a visa on arrival at Colombo airport, but it costs more, around $60.',
      apply:
        'Apply only on eta.gov.lk: form in Latin letters, passport details, address of your first hotel, and card payment if your country is not on the free list. The answer usually arrives by email within 1–3 days; a printout is optional but useful for the airline. The free scheme for 40 countries was introduced as a pilot and extended, so check that it covers your travel dates.',
      extend:
        'Tourist visas are extended by the Department of Immigration (online or at the office in Battaramulla near Colombo), first up to 90 days from entry and then up to 180 days in total. The fee depends on nationality; apply before your 30 days run out.',
      visaRun:
        'Visa runs are possible, but extending is usually simpler: the ETA is double-entry, and a fresh entry later needs a new one. The nearest short flights go to Malé (the Maldives gives a free visa on arrival) and Chennai, which needs an Indian e-visa.',
      hacks: [
        'The ETA is double-entry: you can fly to the Maldives and come back to Sri Lanka on the same authorisation without applying again.',
        'If your country is on the free list, the ETA costs $0 — agencies still charge $30–80 for it, so apply yourself.',
        'Extending to 90 days is cheaper and easier than two visa runs, and during the southwest monsoon (May–September) you can simply move to the east coast.',
        'Enter the real address of your first night: it is checked at the border, and a blank field slows things down.',
      ],
      pitfalls: [
        'After the 2024 scandal over a private operator running the visa site, many fake portals remain online. The only official address is eta.gov.lk.',
        'The ETA is a tourist authorisation: volunteering, work and even paid “training” retreats need a different visa type.',
        'The visa on arrival costs more and means a queue after a long flight — get the ETA before you fly.',
      ],
      passports: {
        RU: 'Russia is on the free-ETA list. Aeroflot flies direct to Colombo; Russian cards do not work, so bring dollars and change them at banks.',
        IN: 'Indian citizens get the ETA free; flights from Chennai, Bengaluru and Mumbai to Colombo take one to two hours.',
        US: 'Whether US citizens are on the free list for your travel dates shows on eta.gov.lk before payment — if a fee appears, they are not.',
      },
    },
    es: {
      summary:
        'Casi todos los turistas necesitan la autorización electrónica ETA, que da 30 días y dos entradas. La tasa estándar es de 50 $, pero desde finales de 2024 los ciudadanos de unos 40 países, entre ellos Rusia, India, China, Reino Unido, Alemania, Japón y Australia, la reciben gratis. Sin ETA puedes pedir visado a la llegada en el aeropuerto de Colombo, pero cuesta más, unos 60 $.',
      apply:
        'Solicita la ETA solo en eta.gov.lk: formulario en caracteres latinos, datos del pasaporte, dirección del primer hotel y pago con tarjeta si tu país no está en la lista gratuita. La respuesta suele llegar por correo en 1–3 días; imprimirla no es obligatorio, pero ayuda con la aerolínea. El régimen gratuito para 40 países empezó como piloto y se ha ido prorrogando: comprueba que cubre tus fechas.',
      extend:
        'El visado turístico se prorroga en el Departamento de Inmigración (en línea o en la oficina de Battaramulla, cerca de Colombo), primero hasta 90 días desde la entrada y luego hasta 180 días en total. La tasa depende de la nacionalidad; pídelo antes de que se acaben tus 30 días.',
      visaRun:
        'El visa run es posible, pero prorrogar suele ser más sencillo: la ETA es de doble entrada, y una entrada nueva más adelante requiere otra. Los vuelos cortos más cercanos van a Malé (Maldivas da visado gratuito a la llegada) y a Chennai, para la que necesitas visado electrónico indio.',
      hacks: [
        'La ETA es de doble entrada: puedes volar a Maldivas y volver a Sri Lanka con la misma autorización sin pedir otra.',
        'Si tu país está en la lista gratuita, la ETA cuesta 0 $; las agencias aun así cobran 30–80 $, así que tramítala tú.',
        'Prorrogar hasta 90 días es más barato y fácil que dos visa runs, y durante el monzón del suroeste (mayo–septiembre) basta con irte a la costa este.',
        'Pon la dirección real de tu primera noche: la comprueban en la frontera, y dejar el campo vacío retrasa el control.',
      ],
      pitfalls: [
        'Tras el escándalo de 2024 con el operador privado de la web de visados, siguen en línea muchos portales falsos. La única dirección oficial es eta.gov.lk.',
        'La ETA es una autorización turística: el voluntariado, el trabajo e incluso los retiros de pago con «formación» requieren otro tipo de visado.',
        'El visado a la llegada es más caro y supone hacer cola tras un vuelo largo: mejor tramita la ETA antes de volar.',
      ],
      passports: {
        RU: 'Rusia está en la lista de ETA gratuita. Aeroflot vuela directo a Colombo; las tarjetas rusas no funcionan, así que lleva dólares y cámbialos en bancos.',
        IN: 'Los ciudadanos indios reciben la ETA gratis; los vuelos de Chennai, Bangalore y Bombay a Colombo duran una o dos horas.',
        US: 'Si los estadounidenses están en la lista gratuita para tus fechas lo verás en eta.gov.lk antes de pagar: si aparece una tasa, no lo están.',
      },
    },
    de: {
      summary:
        'Fast alle Touristen brauchen eine elektronische Reisegenehmigung (ETA) für 30 Tage und zwei Einreisen. Die Standardgebühr beträgt 50 $, doch seit Ende 2024 erhalten Bürger von rund 40 Ländern, darunter Russland, Indien, China, Großbritannien, Deutschland, Japan und Australien, sie kostenlos. Ohne ETA gibt es am Flughafen Colombo ein Visum bei Ankunft, das aber mehr kostet, etwa 60 $.',
      apply:
        'Beantrage die ETA nur auf eta.gov.lk: Formular in lateinischen Buchstaben, Passdaten, Adresse des ersten Hotels und Kartenzahlung, falls dein Land nicht auf der Gratisliste steht. Die Antwort kommt meist binnen 1–3 Tagen per Mail; ein Ausdruck ist nicht Pflicht, hilft aber bei der Airline. Die Gratisregel für 40 Länder begann als Pilot und wurde verlängert – prüfe, ob sie für deine Reisedaten gilt.',
      extend:
        'Touristenvisa verlängert das Department of Immigration (online oder im Büro in Battaramulla bei Colombo), zunächst auf bis zu 90 Tage ab Einreise, dann auf bis zu 180 Tage insgesamt. Die Gebühr hängt von der Staatsangehörigkeit ab; beantrage rechtzeitig vor Ablauf der 30 Tage.',
      visaRun:
        'Visa-Runs sind möglich, Verlängern ist aber meist einfacher: Die ETA gilt für zwei Einreisen, eine spätere neue Einreise braucht eine neue. Die nächsten Kurzflüge gehen nach Malé (die Malediven geben ein kostenloses Visum bei Ankunft) und nach Chennai, wofür du ein indisches E-Visum brauchst.',
      hacks: [
        'Die ETA gilt für zwei Einreisen: Du kannst auf die Malediven fliegen und mit derselben Genehmigung nach Sri Lanka zurückkehren.',
        'Steht dein Land auf der Gratisliste, kostet die ETA 0 $ – Vermittler verlangen trotzdem 30–80 $, also beantrage selbst.',
        'Auf 90 Tage zu verlängern ist billiger und einfacher als zwei Visa-Runs, und während des Südwestmonsuns (Mai bis September) ziehst du einfach an die Ostküste.',
        'Gib die echte Adresse deiner ersten Nacht an: Sie wird an der Grenze geprüft, und ein leeres Feld verzögert die Kontrolle.',
      ],
      pitfalls: [
        'Nach dem Skandal 2024 um einen privaten Betreiber der Visaseite sind viele gefälschte Portale online geblieben. Die einzige offizielle Adresse ist eta.gov.lk.',
        'Die ETA ist eine touristische Genehmigung: Freiwilligenarbeit, Jobs und sogar bezahlte Retreats mit „Ausbildung“ erfordern einen anderen Visumtyp.',
        'Das Visum bei Ankunft ist teurer und bedeutet Schlangestehen nach einem langen Flug – hol die ETA lieber vor dem Abflug.',
      ],
      passports: {
        RU: 'Russland steht auf der Liste der kostenlosen ETA. Aeroflot fliegt direkt nach Colombo; russische Karten funktionieren nicht, nimm also Dollar mit und tausche bei Banken.',
        IN: 'Indische Staatsangehörige bekommen die ETA kostenlos; Flüge von Chennai, Bengaluru und Mumbai nach Colombo dauern ein bis zwei Stunden.',
        US: 'Ob US-Bürger für deine Reisedaten auf der Gratisliste stehen, zeigt eta.gov.lk vor der Zahlung – erscheint eine Gebühr, dann nicht.',
      },
    },
    fr: {
      summary:
        'Presque tous les touristes ont besoin d’une autorisation électronique ETA, valable 30 jours pour deux entrées. Les frais standard sont de 50 $, mais depuis fin 2024 les citoyens d’une quarantaine de pays, dont la Russie, l’Inde, la Chine, le Royaume-Uni, l’Allemagne, le Japon et l’Australie, l’obtiennent gratuitement. Sans ETA, on peut prendre un visa à l’arrivée à l’aéroport de Colombo, mais il coûte plus cher, environ 60 $.',
      apply:
        'Demandez l’ETA uniquement sur eta.gov.lk : formulaire en caractères latins, données du passeport, adresse du premier hôtel et paiement par carte si votre pays ne figure pas sur la liste gratuite. La réponse arrive en général par e-mail sous 1 à 3 jours ; l’impression n’est pas obligatoire mais utile pour la compagnie aérienne. La gratuité pour 40 pays a commencé comme projet pilote et a été prolongée : vérifiez qu’elle couvre vos dates.',
      extend:
        'Le visa touristique se prolonge auprès du Département de l’immigration (en ligne ou au bureau de Battaramulla, près de Colombo), d’abord jusqu’à 90 jours après l’entrée, puis jusqu’à 180 jours au total. Les frais dépendent de la nationalité ; faites la demande avant la fin de vos 30 jours.',
      visaRun:
        'Le visa run est possible, mais prolonger est en général plus simple : l’ETA est à double entrée, et une nouvelle entrée plus tard en demande une autre. Les vols courts les plus proches desservent Malé (les Maldives donnent un visa gratuit à l’arrivée) et Chennai, qui exige un e-visa indien.',
      hacks: [
        'L’ETA est à double entrée : vous pouvez aller aux Maldives et revenir au Sri Lanka avec la même autorisation, sans nouvelle demande.',
        'Si votre pays est sur la liste gratuite, l’ETA coûte 0 $ — les intermédiaires la facturent pourtant 30 à 80 $, faites donc la demande vous-même.',
        'Prolonger jusqu’à 90 jours coûte moins cher et demande moins d’efforts que deux visa runs, et pendant la mousson du sud-ouest (mai–septembre) il suffit de passer sur la côte est.',
        'Indiquez la vraie adresse de votre première nuit : elle est vérifiée à la frontière, et un champ vide ralentit le contrôle.',
      ],
      pitfalls: [
        'Après le scandale de 2024 autour de l’opérateur privé du site des visas, de nombreux faux portails sont restés en ligne. La seule adresse officielle est eta.gov.lk.',
        'L’ETA est une autorisation touristique : bénévolat, travail et même retraites payantes avec « formation » relèvent d’un autre type de visa.',
        'Le visa à l’arrivée coûte plus cher et impose une file d’attente après un long vol : obtenez l’ETA avant de partir.',
      ],
      passports: {
        RU: 'La Russie figure sur la liste de l’ETA gratuite. Aeroflot dessert Colombo en direct ; les cartes russes ne fonctionnent pas, apportez donc des dollars à changer en banque.',
        IN: 'Les citoyens indiens obtiennent l’ETA gratuitement ; les vols de Chennai, Bangalore et Mumbai vers Colombo durent une à deux heures.',
        US: 'Le site eta.gov.lk indique avant paiement si les citoyens américains figurent sur la liste gratuite pour vos dates : si des frais s’affichent, ce n’est pas le cas.',
      },
    },
    it: {
      summary:
        'Quasi tutti i turisti hanno bisogno dell’autorizzazione elettronica ETA, valida 30 giorni per due ingressi. La tassa standard è di 50 $, ma da fine 2024 i cittadini di circa 40 paesi, tra cui Russia, India, Cina, Regno Unito, Germania, Giappone e Australia, la ricevono gratis. Senza ETA si può ottenere il visto all’arrivo all’aeroporto di Colombo, ma costa di più, circa 60 $.',
      apply:
        'Richiedi l’ETA solo su eta.gov.lk: modulo in caratteri latini, dati del passaporto, indirizzo del primo hotel e pagamento con carta se il tuo paese non è nella lista gratuita. La risposta arriva di solito via e-mail in 1–3 giorni; la stampa non è obbligatoria ma torna utile con la compagnia aerea. Il regime gratuito per 40 paesi è nato come progetto pilota ed è stato prorogato: verifica che copra le tue date.',
      extend:
        'Il visto turistico si proroga al Dipartimento dell’immigrazione (online o nell’ufficio di Battaramulla, vicino a Colombo), prima fino a 90 giorni dall’ingresso, poi fino a 180 giorni in totale. La tassa dipende dalla cittadinanza; fai domanda prima che scadano i tuoi 30 giorni.',
      visaRun:
        'Il visa run è possibile, ma prorogare di solito è più semplice: l’ETA è a doppio ingresso, e un nuovo ingresso più avanti ne richiede un’altra. I voli brevi più vicini vanno a Malé (le Maldive danno un visto gratuito all’arrivo) e a Chennai, per cui serve il visto elettronico indiano.',
      hacks: [
        'L’ETA è a doppio ingresso: puoi volare alle Maldive e tornare in Sri Lanka con la stessa autorizzazione, senza chiederne un’altra.',
        'Se il tuo paese è nella lista gratuita, l’ETA costa 0 $; gli intermediari la fanno comunque pagare 30–80 $, quindi richiedila da solo.',
        'Prorogare fino a 90 giorni costa meno ed è più semplice di due visa run, e durante il monsone di sud-ovest (maggio–settembre) basta spostarsi sulla costa est.',
        'Indica l’indirizzo reale della prima notte: viene controllato alla frontiera, e un campo vuoto rallenta i controlli.',
      ],
      pitfalls: [
        'Dopo lo scandalo del 2024 sull’operatore privato del sito dei visti, molti portali falsi sono rimasti online. L’unico indirizzo ufficiale è eta.gov.lk.',
        'L’ETA è un’autorizzazione turistica: volontariato, lavoro e perfino ritiri a pagamento con «formazione» richiedono un altro tipo di visto.',
        'Il visto all’arrivo costa di più e comporta una coda dopo un volo lungo: meglio ottenere l’ETA prima di partire.',
      ],
      passports: {
        RU: 'La Russia è nella lista dell’ETA gratuita. Aeroflot vola diretto a Colombo; le carte russe non funzionano, quindi porta dollari e cambiali in banca.',
        IN: 'I cittadini indiani ricevono l’ETA gratis; i voli da Chennai, Bangalore e Mumbai per Colombo durano una o due ore.',
        US: 'Se i cittadini statunitensi sono nella lista gratuita per le tue date lo vedi su eta.gov.lk prima di pagare: se compare una tassa, non lo sono.',
      },
    },
  },
};

export default guide;
