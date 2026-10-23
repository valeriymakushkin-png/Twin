import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'BN',
  checked: '2026-10',
  fees: { voa: { kind: 'from', amount: 20, currency: 'BND' } },
  stay: { voa: 30 },
  links: { immigration: 'https://www.imm.gov.bn' },
  forms: [{ name: 'E-Arrival Card', url: 'https://www.imm.gov.bn', fee: { kind: 'free' } }],
  docs: ['returnTicket'],
  passportMonths: 6,
  visaRun: 'yes',
  borders: [
    { name: 'Sungai Tujoh – Miri', to: 'MY', lat: 4.5867, lng: 114.0767 },
    { name: 'Serasa Ferry Terminal (Muara) → Labuan', to: 'MY', lat: 5.0239, lng: 115.0668 },
  ],
  text: {
    ru: {
      summary:
        'Граждане США, Великобритании, Канады и большинства стран ЕС въезжают без визы на 90 дней, Японии, Кореи, ОАЭ, Турции и Украины — на 30, России и Китая — на 14. Австралийцы и граждане ряда стран Персидского залива получают визу по прибытии. Гражданам Индии, Казахстана, Беларуси и многих других стран нужна виза в посольстве Брунея. Перед поездкой все заполняют бесплатную E-Arrival Card.',
      apply:
        'E-Arrival Card заполняют на сайте иммиграционной службы imm.gov.bn до прибытия: регистрация, код из письма, данные паспорта и адрес. Визу по прибытии дают в аэропорту Бандар-Сери-Бегавана: около 20 брунейских долларов за однократную и 30 за многократную, платить можно и сингапурскими долларами. Визу в посольстве оформляют заранее — закладывайте неделю или больше.',
      visaRun:
        'Визаран работает: после выезда безвизовый срок начинается заново. Чаще Бруней используют наоборот — как короткий выезд из Малайзии: из Мири до границы Сунгай-Туджох 40 минут, а из порта Муара ходит паром на малайзийский остров Лабуан.',
      hacks: [
        'Брунейский доллар привязан к сингапурскому один к одному: сингапурские купюры принимают везде, менять деньги не нужно.',
        'С 2020 года мост Темебуронг соединяет столицу с округом Темебуронг напрямую — больше не нужно ехать через малайзийский Лимбанг и собирать четыре штампа.',
        'Немусульмане могут ввезти две бутылки крепкого алкоголя и 12 банок пива, но их обязательно нужно задекларировать на въезде; продажи алкоголя в стране нет.',
        'Автобус Мири — Бандар-Сери-Бегаван — Кота-Кинабалу пересекает границы Брунея и Малайзии несколько раз: оставьте в паспорте 4–6 чистых страниц.',
      ],
      pitfalls: [
        'Безвизовые 14 или 30 дней не продлевают — планируйте выезд заранее, за просрочку грозят штраф и депортация.',
        'По пятницам с 12:00 до 14:00 закрываются магазины, кафе и офисы, а во время Рамадана есть и пить на улице днём не принято.',
        'Владельцев израильских паспортов не пускают. Наказания за наркотики — одни из самых суровых в мире.',
      ],
      passports: {
        RU: 'Россиянам — 14 дней без визы, без продления. Прямых рейсов нет: удобнее всего через Дубай (Royal Brunei Airlines), Сингапур, Куала-Лумпур или Бангкок. Российские карты не работают — везите сингапурские или брунейские доллары.',
        AU: 'Гражданам Австралии визу дают по прибытии в аэропорту: около 20 брунейских долларов за однократную и 30 за многократную, срок — до 30 дней.',
        IN: 'Гражданам Индии нужна виза: её оформляют в посольстве Брунея в Нью-Дели или через уполномоченных агентов авиакомпании Royal Brunei.',
      },
    },
    en: {
      summary:
        'US, UK, Canadian and most EU citizens enter visa-free for 90 days; Japan, Korea, the UAE, Turkey and Ukraine for 30; Russia and China for 14. Australians and citizens of several Gulf states get a visa on arrival. Indian, Kazakh, Belarusian and many other citizens need a visa from a Brunei embassy. Everyone files the free E-Arrival Card before the trip.',
      apply:
        'File the E-Arrival Card on the immigration website imm.gov.bn before arrival: register, enter the code from the e-mail, then your passport details and address. The visa on arrival is issued at Bandar Seri Begawan airport: about 20 Brunei dollars single-entry and 30 multiple-entry, and Singapore dollars are accepted too. Embassy visas must be arranged in advance — allow a week or more.',
      visaRun:
        'Visa runs work: the visa-free period restarts after you leave. More often Brunei serves the other way round — as a quick exit from Malaysia: the Sungai Tujoh border is 40 minutes from Miri, and ferries run from Muara port to the Malaysian island of Labuan.',
      hacks: [
        'The Brunei dollar is pegged one-to-one to the Singapore dollar: Singapore notes are accepted everywhere, so there is no need to change money.',
        'Since 2020 the Temburong Bridge has linked the capital directly with Temburong district — no more detour through Limbang in Malaysia collecting four stamps.',
        'Non-Muslims may bring in two bottles of spirits and 12 cans of beer, but they must be declared on arrival; alcohol is not sold in the country.',
        'The Miri – Bandar Seri Begawan – Kota Kinabalu bus crosses the Brunei – Malaysia border several times: keep four to six blank pages in your passport.',
      ],
      pitfalls: [
        'The 14 or 30 visa-free days cannot be extended — plan your exit in advance, as overstays bring fines and deportation.',
        'On Fridays from 12:00 to 14:00 shops, cafés and offices close, and during Ramadan eating and drinking in public in daytime is frowned upon.',
        'Israeli passport holders are not admitted. Drug penalties are among the harshest in the world.',
      ],
      passports: {
        RU: 'Russian citizens get 14 days visa-free, with no extension. There are no direct flights; the easiest routes are via Dubai (Royal Brunei Airlines), Singapore, Kuala Lumpur or Bangkok. Russian cards do not work, so bring Singapore or Brunei dollars.',
        AU: 'Australian citizens get a visa on arrival at the airport: about 20 Brunei dollars single-entry or 30 multiple-entry, for up to 30 days.',
        IN: 'Indian citizens need a visa, issued by the Brunei High Commission in New Delhi or through Royal Brunei Airlines’ authorised agents.',
      },
    },
    es: {
      summary:
        'Los ciudadanos de EE. UU., el Reino Unido, Canadá y la mayoría de la UE entran sin visado durante 90 días; los de Japón, Corea, los Emiratos, Turquía y Ucrania, durante 30; los de Rusia y China, durante 14. Los australianos y los ciudadanos de varios países del Golfo obtienen visado a la llegada. Los de la India, Kazajistán, Bielorrusia y muchos otros países necesitan visado de una embajada de Brunéi. Todos rellenan antes del viaje la E-Arrival Card, gratuita.',
      apply:
        'La E-Arrival Card se rellena en la web de inmigración imm.gov.bn antes de llegar: registro, código recibido por correo, datos del pasaporte y dirección. El visado a la llegada se expide en el aeropuerto de Bandar Seri Begawan: unos 20 dólares de Brunéi el de una entrada y 30 el de varias, y también aceptan dólares de Singapur. Los visados de embajada se tramitan con antelación: calcula una semana o más.',
      visaRun:
        'El visa run funciona: al salir, el periodo sin visado vuelve a empezar. Lo más habitual es al revés: usar Brunéi como salida rápida desde Malasia; la frontera de Sungai Tujoh está a 40 minutos de Miri y desde el puerto de Muara salen ferris a la isla malasia de Labuan.',
      hacks: [
        'El dólar de Brunéi está vinculado uno a uno al de Singapur: los billetes singapurenses se aceptan en todas partes, así que no hace falta cambiar.',
        'Desde 2020 el puente de Temburong une la capital con el distrito de Temburong directamente: ya no hay que dar la vuelta por Limbang, en Malasia, acumulando cuatro sellos.',
        'Las personas no musulmanas pueden entrar dos botellas de licor y 12 latas de cerveza, pero deben declararlas al llegar; en el país no se vende alcohol.',
        'El autobús Miri – Bandar Seri Begawan – Kota Kinabalu cruza varias veces la frontera entre Brunéi y Malasia: deja cuatro a seis páginas en blanco en el pasaporte.',
      ],
      pitfalls: [
        'Los 14 o 30 días sin visado no se prorrogan: planifica la salida con tiempo, porque el exceso de estancia se castiga con multa y deportación.',
        'Los viernes de 12:00 a 14:00 cierran tiendas, cafés y oficinas, y durante el Ramadán está mal visto comer y beber en público de día.',
        'Los titulares de pasaporte israelí no son admitidos. Las penas por drogas están entre las más duras del mundo.',
      ],
      passports: {
        RU: 'Los ciudadanos rusos tienen 14 días sin visado, sin prórroga. No hay vuelos directos: lo más cómodo es vía Dubái (Royal Brunei Airlines), Singapur, Kuala Lumpur o Bangkok. Las tarjetas rusas no funcionan: lleva dólares de Singapur o de Brunéi.',
        AU: 'Los ciudadanos australianos obtienen visado a la llegada en el aeropuerto: unos 20 dólares de Brunéi el de una entrada o 30 el de varias, hasta 30 días.',
        IN: 'Los ciudadanos indios necesitan visado, que expide el Alto Comisionado de Brunéi en Nueva Delhi o los agentes autorizados de Royal Brunei Airlines.',
      },
    },
    de: {
      summary:
        'Bürger der USA, Großbritanniens, Kanadas und der meisten EU-Staaten reisen 90 Tage visumfrei ein, Japan, Korea, die VAE, die Türkei und die Ukraine 30 Tage, Russland und China 14 Tage. Australier und Bürger mehrerer Golfstaaten erhalten ein Visa on Arrival. Inder, Kasachen, Belarussen und viele andere brauchen ein Visum von einer Botschaft Bruneis. Alle füllen vor der Reise die kostenlose E-Arrival Card aus.',
      apply:
        'Die E-Arrival Card füllst du vor der Ankunft auf der Website der Einwanderungsbehörde imm.gov.bn aus: Registrierung, Code aus der E-Mail, Passdaten und Adresse. Das Visa on Arrival gibt es am Flughafen Bandar Seri Begawan: rund 20 Brunei-Dollar für eine, 30 für mehrfache Einreise, Singapur-Dollar werden ebenfalls akzeptiert. Botschaftsvisa musst du vorab beantragen – plane eine Woche oder mehr ein.',
      visaRun:
        'Visa-Runs funktionieren: Nach der Ausreise beginnt die visumfreie Frist neu. Häufiger dient Brunei umgekehrt als schneller Ausweg aus Malaysia: Die Grenze Sungai Tujoh liegt 40 Minuten von Miri entfernt, und vom Hafen Muara fahren Fähren zur malaysischen Insel Labuan.',
      hacks: [
        'Der Brunei-Dollar ist eins zu eins an den Singapur-Dollar gekoppelt: Singapurer Scheine werden überall angenommen, Geldwechseln ist überflüssig.',
        'Seit 2020 verbindet die Temburong-Brücke die Hauptstadt direkt mit dem Distrikt Temburong – kein Umweg mehr über Limbang in Malaysia mit vier Stempeln.',
        'Nichtmuslime dürfen zwei Flaschen Spirituosen und 12 Dosen Bier einführen, müssen sie aber bei der Einreise anmelden; im Land wird kein Alkohol verkauft.',
        'Der Bus Miri – Bandar Seri Begawan – Kota Kinabalu überquert die Grenze zwischen Brunei und Malaysia mehrmals: Lass vier bis sechs Seiten im Pass frei.',
      ],
      pitfalls: [
        'Die 14 oder 30 visumfreien Tage lassen sich nicht verlängern – plane die Ausreise rechtzeitig, Überziehen wird mit Bußgeld und Abschiebung geahndet.',
        'Freitags von 12 bis 14 Uhr schließen Geschäfte, Cafés und Ämter, und im Ramadan gilt Essen und Trinken in der Öffentlichkeit tagsüber als unhöflich.',
        'Inhaber israelischer Pässe werden nicht eingelassen. Die Drogenstrafen gehören zu den härtesten der Welt.',
      ],
      passports: {
        RU: 'Russische Staatsangehörige reisen 14 Tage visumfrei ein, ohne Verlängerung. Direktflüge gibt es nicht, am bequemsten geht es über Dubai (Royal Brunei Airlines), Singapur, Kuala Lumpur oder Bangkok. Russische Karten funktionieren nicht – nimm Singapur- oder Brunei-Dollar mit.',
        AU: 'Australische Staatsangehörige bekommen am Flughafen ein Visa on Arrival: rund 20 Brunei-Dollar für eine oder 30 für mehrfache Einreise, gültig bis zu 30 Tage.',
        IN: 'Indische Staatsangehörige brauchen ein Visum, ausgestellt von der Hochkommission Bruneis in Neu-Delhi oder über autorisierte Agenten von Royal Brunei Airlines.',
      },
    },
    fr: {
      summary:
        'Les citoyens américains, britanniques, canadiens et de la plupart des pays de l’UE entrent sans visa pour 90 jours ; ceux du Japon, de Corée, des Émirats, de Turquie et d’Ukraine pour 30 ; ceux de Russie et de Chine pour 14. Les Australiens et les citoyens de plusieurs pays du Golfe obtiennent un visa à l’arrivée. Les Indiens, Kazakhs, Biélorusses et bien d’autres ont besoin d’un visa délivré par une ambassade de Brunei. Tout le monde remplit avant le voyage l’E-Arrival Card, gratuite.',
      apply:
        'L’E-Arrival Card se remplit sur le site de l’immigration imm.gov.bn avant l’arrivée : inscription, code reçu par e-mail, données du passeport et adresse. Le visa à l’arrivée est délivré à l’aéroport de Bandar Seri Begawan : environ 20 dollars de Brunei pour une entrée et 30 pour plusieurs, et les dollars de Singapour sont acceptés. Les visas d’ambassade se demandent à l’avance : comptez une semaine ou plus.',
      visaRun:
        'Le visa run fonctionne : après une sortie, la période sans visa repart de zéro. Le plus souvent, Brunei sert dans l’autre sens, comme sortie rapide de Malaisie : la frontière de Sungai Tujoh est à 40 minutes de Miri, et des ferries relient le port de Muara à l’île malaisienne de Labuan.',
      hacks: [
        'Le dollar de Brunei est arrimé à parité au dollar de Singapour : les billets singapouriens sont acceptés partout, inutile de changer de l’argent.',
        'Depuis 2020, le pont de Temburong relie directement la capitale au district de Temburong : plus besoin de passer par Limbang, en Malaisie, en récoltant quatre tampons.',
        'Les non-musulmans peuvent importer deux bouteilles d’alcool fort et 12 canettes de bière, à condition de les déclarer à l’arrivée ; l’alcool n’est pas vendu dans le pays.',
        'Le bus Miri – Bandar Seri Begawan – Kota Kinabalu franchit plusieurs fois la frontière entre Brunei et la Malaisie : gardez quatre à six pages vierges dans votre passeport.',
      ],
      pitfalls: [
        'Les 14 ou 30 jours sans visa ne sont pas prolongeables : prévoyez la sortie à l’avance, car les dépassements valent amende et expulsion.',
        'Le vendredi de 12 h à 14 h, magasins, cafés et administrations ferment, et pendant le ramadan il est mal vu de manger et de boire en public en journée.',
        'Les titulaires d’un passeport israélien ne sont pas admis. Les peines pour usage de drogue comptent parmi les plus sévères au monde.',
      ],
      passports: {
        RU: 'Les ressortissants russes ont 14 jours sans visa, sans prolongation. Pas de vol direct : le plus simple est de passer par Dubaï (Royal Brunei Airlines), Singapour, Kuala Lumpur ou Bangkok. Les cartes russes ne fonctionnent pas : emportez des dollars de Singapour ou de Brunei.',
        AU: 'Les ressortissants australiens obtiennent un visa à l’arrivée à l’aéroport : environ 20 dollars de Brunei pour une entrée ou 30 pour plusieurs, jusqu’à 30 jours.',
        IN: 'Les ressortissants indiens ont besoin d’un visa, délivré par le haut-commissariat de Brunei à New Delhi ou par les agents agréés de Royal Brunei Airlines.',
      },
    },
    it: {
      summary:
        'I cittadini di Stati Uniti, Regno Unito, Canada e della maggior parte dei paesi UE entrano senza visto per 90 giorni; quelli di Giappone, Corea, Emirati, Turchia e Ucraina per 30; quelli di Russia e Cina per 14. Gli australiani e i cittadini di diversi paesi del Golfo ottengono il visto all’arrivo. Indiani, kazaki, bielorussi e molti altri hanno bisogno di un visto rilasciato da un’ambasciata del Brunei. Tutti compilano prima del viaggio la E-Arrival Card, gratuita.',
      apply:
        'La E-Arrival Card si compila prima dell’arrivo sul sito dell’immigrazione imm.gov.bn: registrazione, codice ricevuto via e-mail, dati del passaporto e indirizzo. Il visto all’arrivo viene rilasciato all’aeroporto di Bandar Seri Begawan: circa 20 dollari del Brunei per un ingresso singolo e 30 per ingressi multipli, e si accettano anche dollari di Singapore. I visti d’ambasciata vanno chiesti in anticipo: calcola una settimana o più.',
      visaRun:
        'Il visa run funziona: dopo l’uscita il periodo senza visto riparte da capo. Più spesso il Brunei serve al contrario, come uscita rapida dalla Malesia: il confine di Sungai Tujoh è a 40 minuti da Miri e dal porto di Muara partono traghetti per l’isola malese di Labuan.',
      hacks: [
        'Il dollaro del Brunei è agganciato alla pari a quello di Singapore: le banconote singaporiane si accettano ovunque, quindi non serve cambiare.',
        'Dal 2020 il ponte di Temburong collega direttamente la capitale al distretto di Temburong: non serve più passare da Limbang, in Malesia, collezionando quattro timbri.',
        'Chi non è musulmano può portare due bottiglie di superalcolici e 12 lattine di birra, ma deve dichiararle all’arrivo; nel paese l’alcol non si vende.',
        'L’autobus Miri – Bandar Seri Begawan – Kota Kinabalu attraversa più volte il confine tra Brunei e Malesia: lascia da quattro a sei pagine libere sul passaporto.',
      ],
      pitfalls: [
        'I 14 o 30 giorni senza visto non si prorogano: pianifica l’uscita per tempo, perché l’overstay comporta multa ed espulsione.',
        'Il venerdì dalle 12 alle 14 chiudono negozi, caffè e uffici, e durante il Ramadan mangiare e bere in pubblico di giorno è malvisto.',
        'I titolari di passaporto israeliano non sono ammessi. Le pene per droga sono tra le più severe al mondo.',
      ],
      passports: {
        RU: 'I cittadini russi hanno 14 giorni senza visto, senza proroga. Non ci sono voli diretti: le rotte più comode passano da Dubai (Royal Brunei Airlines), Singapore, Kuala Lumpur o Bangkok. Le carte russe non funzionano: porta dollari di Singapore o del Brunei.',
        AU: 'I cittadini australiani ottengono il visto all’arrivo in aeroporto: circa 20 dollari del Brunei per un ingresso o 30 per ingressi multipli, fino a 30 giorni.',
        IN: 'I cittadini indiani hanno bisogno del visto, rilasciato dall’Alta Commissione del Brunei a Nuova Delhi o dagli agenti autorizzati di Royal Brunei Airlines.',
      },
    },
  },
};

export default guide;
