import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'AT',
  checked: '2026-10',
  fees: { visa: { kind: 'fixed', amount: 90, currency: 'EUR' } },
  stay: { visa: 90 },
  links: { immigration: 'https://www.bmeia.gv.at' },
  docs: ['insurance', 'returnTicket', 'booking', 'finance'],
  passportMonths: 3,
  rule: { days: 90, window: 180 },
  visaRun: 'no',
  transit: { hours: 24 },
  waivers: [
    { holds: ['resEU'], status: 'free', days: 90 },
    { holds: ['visaSchengen'], status: 'free', days: 90 },
  ],
  text: {
    ru: {
      summary:
        'Австрия входит в Шенген: граждане ЕС, ЕЭЗ и Швейцарии въезжают по ID-карте, а граждане США, Великобритании, Канады, Австралии, Японии, Сербии, Боснии, Украины и других безвизовых стран — до 90 дней в любые 180. Россиянам, индийцам, китайцам, туркам, казахстанцам и многим другим нужна шенгенская виза за 90 €; сведения о посольствах — на bmeia.gv.at.',
      apply:
        'Подают в австрийское посольство по месту жительства; в большинстве стран запись и документы ведёт VFS Global. Сбор — 90 € плюс сервисный, решение — обычно 15 дней. На сайте посольства есть список документов, а для приглашения от частного лица подойдёт нотариально заверенная гарантия (Haftungserklärung) от хозяина.',
      visaRun:
        'Визаран не работает: 90 дней считаются по всему Шенгену в скользящем окне 180 дней, а соседние Германия, Чехия, Словакия, Венгрия, Словения, Италия и Швейцария — тоже Шенген. Выезд из зоны лишь ставит счётчик на паузу; с апреля 2026 года EES фиксирует каждый въезд и выезд.',
      transit:
        'Пересадка в Вене (Швехат) между двумя рейсами за пределы Шенгена — например, из Азии на Балканы — большинству не требует визы, если не выходить из транзитной зоны. Гражданам из общего списка ЕС (Афганистан, Бангладеш, Иран, Ирак, Нигерия, Пакистан и др.) нужна транзитная виза — кроме владельцев действующей визы или ВНЖ США, Канады, Японии или страны ЕЭЗ.',
      hacks: [
        'Австрия выдаёт национальную визу D для поездок от 91 дня до 6 месяцев — например, чтобы провести у родственников полгода: она не расходует шенгенские 90/180 и не требует ВНЖ.',
        'Молодые австралийцы, новозеландцы, канадцы, японцы, южнокорейцы и тайваньцы могут получить в Австрии визу working holiday на 6–12 месяцев.',
        'Для квалифицированных специалистов есть «Красно-бело-красная карта» (Rot-Weiß-Rot-Karte) по баллам; для поиска работы предусмотрена шестимесячная виза для соискателей.',
        'Вена — в часе езды от Братиславы и в двух с половиной от Будапешта, и перемещения внутри Шенгена не расходуют отдельный лимит: однократная виза позволяет съездить туда и обратно.',
      ],
      pitfalls: [
        'Если вы снимаете квартиру или живёте у знакомых, в течение 3 дней нужно оформить регистрацию (Meldezettel) в магистрате; отели и гостевые дома регистрируют гостей сами.',
        'Австрия проверяет документы на границах с Венгрией, Словенией и Словакией, а Германия — на въезде из Австрии: в поездах и автобусах держите паспорт при себе.',
        'Не подавайте в Австрию ради дешёвого рейса в Зальцбург, если основные ночи — в Баварии: подавать нужно туда, где больше ночей.',
      ],
      waivers: [
        'Действующий ВНЖ или долгосрочная виза D любой шенгенской страны позволяют ездить в Австрию без визы до 90 дней в любые 180. Ирландский и кипрский ВНЖ не подходят.',
        'Шенгенская виза другой страны действует и в Австрии в пределах своих дат и числа дней. Первую поездку лучше совершить в страну, выдавшую визу.',
      ],
      passports: {
        RU: 'Австрия продолжает принимать туристические заявления в России, но с ноября 2025 года визы, как правило, однократные; сбор — полные 90 €. Прямых рейсов нет — летают через Стамбул или Белград; российские карты не работают.',
        US: 'Гражданам США виза не нужна: 90 дней в любые 180. Запуск ETIAS (20 €) отложен, раньше 2027 года его не ждут.',
        GB: 'Британцы ограничены 90 днями в 180. Паспорт должен быть моложе 10 лет на дату въезда и действовать ещё 3 месяца после выезда; сезонная работа инструктором на курорте требует разрешения на работу.',
        TR: 'Гражданам Турции нужна шенгенская виза через VFS. Ранее правильно использованные шенгенские визы помогают получить многократную на более долгий срок.',
        IN: 'Гражданам Индии нужна шенгенская виза. По правилу «каскада» после двух правильно использованных виз за три года дают многократную визу на 2 года, затем на 5 лет.',
        UA: 'Граждане Украины с биометрическим паспортом въезжают без визы на 90 дней в 180; временная защита в ЕС продлена до марта 2027 года.',
      },
    },
    en: {
      summary:
        'Austria is in Schengen: EU, EEA and Swiss citizens enter with an ID card, while US, UK, Canadian, Australian, Japanese, Serbian, Bosnian, Ukrainian and other visa-exempt travellers stay up to 90 days in any 180. Russian, Indian, Chinese, Turkish, Kazakh and many other passport holders need a €90 Schengen visa; embassy details are on bmeia.gv.at.',
      apply:
        'Apply to the Austrian embassy for where you live; in most countries VFS Global handles appointments and documents. The fee is €90 plus the service charge, and decisions usually take 15 days. The embassy site lists the documents, and if a private host invites you, a notarised declaration of liability (Haftungserklärung) from them works as sponsorship.',
      visaRun:
        'Visa runs don’t work: the 90 days are counted across the whole Schengen area over any rolling 180-day window, and neighbouring Germany, Czechia, Slovakia, Hungary, Slovenia, Italy and Switzerland are all Schengen. Leaving the zone only pauses the clock; since April 2026 the EES records every entry and exit.',
      transit:
        'Changing planes at Vienna-Schwechat between two non-Schengen flights — say, from Asia to the Balkans — needs no visa for most nationalities, as long as you stay airside. Citizens on the EU airport-transit-visa list (Afghanistan, Bangladesh, Iran, Iraq, Nigeria, Pakistan and others) need one, unless they hold a valid US, Canadian, Japanese or EEA visa or residence permit.',
      hacks: [
        'Austria issues a national D visa for stays of 91 days to 6 months — to spend half a year with relatives, for example: it doesn’t use up your Schengen 90/180 and needs no residence permit.',
        'Young Australians, New Zealanders, Canadians, Japanese, South Koreans and Taiwanese can get a 6–12-month Austrian working holiday visa.',
        'Skilled workers can use the points-based Red-White-Red Card (Rot-Weiß-Rot-Karte), and there’s a six-month job-seeker visa for looking for work.',
        'Vienna is an hour from Bratislava and two and a half from Budapest, and travel within Schengen doesn’t use a separate allowance: a single-entry visa covers the trip there and back.',
      ],
      pitfalls: [
        'If you rent a flat or stay with friends, you must register (Meldezettel) at the local office within 3 days; hotels and guesthouses register their guests themselves.',
        'Austria checks papers at its Hungarian, Slovenian and Slovak borders, and Germany does so when you arrive from Austria: keep your passport on you on trains and buses.',
        'Don’t apply to Austria for a cheap Salzburg flight if most of your nights are in Bavaria — apply where you spend the most nights.',
      ],
      waivers: [
        'A valid residence permit or long-stay D visa from any Schengen country lets you visit Austria visa-free for up to 90 days in any 180. Irish and Cypriot permits don’t count.',
        'A Schengen visa issued by another member state is valid in Austria within its dates and number of days. Make the first trip to the issuing country.',
      ],
      passports: {
        RU: 'Austria still accepts tourist applications in Russia, but since November 2025 visas are usually single-entry; the fee is the full €90. There are no direct flights — routes go via Istanbul or Belgrade; Russian bank cards don’t work.',
        US: 'US citizens need no visa: 90 days in any 180. ETIAS (€20) has been delayed and isn’t expected before 2027.',
        GB: 'UK citizens are limited to 90 days in 180. Your passport must be under 10 years old on the day you enter and valid for 3 months after you leave; a winter season as a ski instructor needs a work permit.',
        TR: 'Turkish citizens need a Schengen visa via VFS. Previous Schengen visas used correctly help you get longer multiple-entry visas.',
        IN: 'Indian citizens need a Schengen visa. Under the EU “cascade”, two visas used correctly within three years earn a 2-year multiple-entry visa, then a 5-year one.',
        UA: 'Ukrainians with a biometric passport enter visa-free for 90 days in 180; temporary protection in the EU runs until March 2027.',
      },
    },
    es: {
      summary:
        'Austria forma parte de Schengen: los ciudadanos de la UE, el EEE y Suiza entran con el DNI, y los de EE. UU., Reino Unido, Canadá, Australia, Japón, Serbia, Bosnia, Ucrania y otros países exentos se quedan hasta 90 días en cualquier periodo de 180. Quienes tienen pasaporte ruso, indio, chino, turco, kazajo y muchos otros necesitan un visado Schengen de 90 €; los datos de las embajadas están en bmeia.gv.at.',
      apply:
        'Se solicita en la embajada austriaca que corresponde a tu residencia; en la mayoría de países citas y documentos los gestiona VFS Global. La tasa es de 90 € más el servicio y la resolución suele tardar 15 días. La web de la embajada indica los documentos, y si te invita un particular, su declaración de responsabilidad notarial (Haftungserklärung) sirve como aval.',
      visaRun:
        'Los visa runs no sirven: los 90 días se cuentan en todo Schengen dentro de una ventana móvil de 180, y Alemania, Chequia, Eslovaquia, Hungría, Eslovenia, Italia y Suiza, los vecinos, también son Schengen. Salir de la zona solo pausa el contador; desde abril de 2026 el EES registra cada entrada y salida.',
      transit:
        'Para cambiar de avión en Viena-Schwechat entre dos vuelos fuera de Schengen —por ejemplo, de Asia a los Balcanes— la mayoría no necesita visado, si no sale de la zona de tránsito. Los ciudadanos de la lista europea de visado de tránsito aeroportuario (Afganistán, Bangladés, Irán, Irak, Nigeria, Pakistán y otros) sí lo necesitan, salvo que tengan visado o residencia vigente de EE. UU., Canadá, Japón o un país del EEE.',
      hacks: [
        'Austria expide un visado nacional D para estancias de 91 días a 6 meses, por ejemplo para pasar medio año con familiares: no gasta tus 90/180 de Schengen y no exige residencia.',
        'Los jóvenes de Australia, Nueva Zelanda, Canadá, Japón, Corea del Sur y Taiwán pueden obtener un visado de vacaciones y trabajo de 6 a 12 meses en Austria.',
        'Para profesionales cualificados está la Tarjeta Rojo-Blanco-Rojo (Rot-Weiß-Rot-Karte), por puntos, y existe un visado de seis meses para buscar empleo.',
        'Viena está a una hora de Bratislava y a dos y media de Budapest, y moverse dentro de Schengen no consume un cupo aparte: un visado de una entrada cubre la ida y la vuelta.',
      ],
      pitfalls: [
        'Si alquilas un piso o te alojas con amigos, debes empadronarte (Meldezettel) en la oficina municipal en 3 días; hoteles y pensiones registran a sus huéspedes.',
        'Austria controla documentos en sus fronteras con Hungría, Eslovenia y Eslovaquia, y Alemania lo hace al llegar desde Austria: lleva el pasaporte encima en trenes y autobuses.',
        'No solicites en Austria por un vuelo barato a Salzburgo si la mayoría de tus noches son en Baviera: solicita donde pases más noches.',
      ],
      waivers: [
        'Un permiso de residencia o un visado nacional D vigente de cualquier país Schengen te permite visitar Austria sin visado hasta 90 días en 180. Los permisos de Irlanda y Chipre no valen.',
        'Un visado Schengen expedido por otro Estado miembro vale en Austria dentro de sus fechas y su número de días. Haz el primer viaje al país emisor.',
      ],
      passports: {
        RU: 'Austria sigue aceptando solicitudes turísticas en Rusia, pero desde noviembre de 2025 los visados suelen ser de una sola entrada; la tasa es la completa, 90 €. No hay vuelos directos —se vuela vía Estambul o Belgrado— y las tarjetas rusas no funcionan.',
        US: 'Los ciudadanos estadounidenses no necesitan visado: 90 días en 180. El ETIAS (20 €) se ha retrasado y no se espera antes de 2027.',
        GB: 'Los británicos tienen un límite de 90 días en 180. El pasaporte debe tener menos de 10 años el día de entrada y seguir vigente 3 meses después de salir; trabajar una temporada como monitor de esquí exige permiso de trabajo.',
        TR: 'Los ciudadanos turcos necesitan visado Schengen a través de VFS. Haber usado bien visados Schengen anteriores ayuda a conseguir visados múltiples más largos.',
        IN: 'Los ciudadanos indios necesitan visado Schengen. Con la «cascada» europea, dos visados bien usados en tres años dan uno de entradas múltiples de 2 años y luego de 5.',
        UA: 'Los ucranianos con pasaporte biométrico entran sin visado durante 90 días en 180; la protección temporal en la UE dura hasta marzo de 2027.',
      },
    },
    de: {
      summary:
        'Österreich gehört zu Schengen: Bürger der EU, des EWR und der Schweiz reisen mit dem Personalausweis ein, Reisende aus den USA, Großbritannien, Kanada, Australien, Japan, Serbien, Bosnien, der Ukraine und anderen visumfreien Ländern bleiben bis zu 90 Tage in jedem 180-Tage-Zeitraum. Mit russischem, indischem, chinesischem, türkischem, kasachischem und vielen anderen Pässen brauchst du ein Schengen-Visum für 90 €; Infos zu den Botschaften stehen auf bmeia.gv.at.',
      apply:
        'Zuständig ist die österreichische Botschaft an deinem Wohnort; in den meisten Ländern übernimmt VFS Global Termine und Unterlagen. Die Gebühr beträgt 90 € plus Servicegebühr, die Entscheidung dauert meist 15 Tage. Die Botschaftsseite listet die Unterlagen auf, und lädt dich eine Privatperson ein, dient ihre notariell beglaubigte Haftungserklärung als Nachweis.',
      visaRun:
        'Visa-Runs funktionieren nicht: Die 90 Tage gelten für den ganzen Schengen-Raum in einem rollierenden 180-Tage-Fenster, und die Nachbarn Deutschland, Tschechien, Slowakei, Ungarn, Slowenien, Italien und die Schweiz sind alle Schengen. Wer den Raum verlässt, hält den Zähler nur an; seit April 2026 erfasst das EES jede Ein- und Ausreise.',
      transit:
        'Beim Umsteigen in Wien-Schwechat zwischen zwei Flügen außerhalb von Schengen – etwa von Asien auf den Balkan – brauchen die meisten kein Visum, solange sie im Transitbereich bleiben. Staatsangehörige auf der EU-Liste für Flughafentransitvisa (Afghanistan, Bangladesch, Iran, Irak, Nigeria, Pakistan u. a.) benötigen eines – außer mit gültigem Visum oder Aufenthaltstitel der USA, Kanadas, Japans oder eines EWR-Staats.',
      hacks: [
        'Österreich stellt ein nationales Visum D für Aufenthalte von 91 Tagen bis 6 Monaten aus – etwa für ein halbes Jahr bei Verwandten: Es verbraucht deine Schengen-90/180 nicht und braucht keinen Aufenthaltstitel.',
        'Junge Menschen aus Australien, Neuseeland, Kanada, Japan, Südkorea und Taiwan können ein österreichisches Working-Holiday-Visum für 6–12 Monate bekommen.',
        'Für Fachkräfte gibt es die punktebasierte Rot-Weiß-Rot-Karte, und für die Jobsuche ein sechsmonatiges Visum zur Arbeitssuche.',
        'Wien liegt eine Stunde von Bratislava und zweieinhalb von Budapest entfernt, und Reisen innerhalb von Schengen verbrauchen kein eigenes Kontingent: Ein Visum für eine Einreise deckt Hin- und Rückfahrt ab.',
      ],
      pitfalls: [
        'Mietest du eine Wohnung oder wohnst bei Bekannten, musst du dich binnen 3 Tagen beim Meldeamt anmelden (Meldezettel); Hotels und Pensionen melden ihre Gäste selbst.',
        'Österreich kontrolliert an den Grenzen zu Ungarn, Slowenien und der Slowakei, Deutschland bei der Einreise aus Österreich: Hab in Zug und Bus deinen Pass dabei.',
        'Beantrage nicht in Österreich wegen eines billigen Flugs nach Salzburg, wenn du die meisten Nächte in Bayern verbringst – zuständig ist das Land mit den meisten Nächten.',
      ],
      waivers: [
        'Mit einem gültigen Aufenthaltstitel oder nationalen D-Visum eines Schengen-Staats reist du bis zu 90 Tage in 180 visumfrei nach Österreich. Irische und zyprische Titel zählen nicht.',
        'Ein Schengen-Visum eines anderen Mitgliedstaats gilt innerhalb seiner Daten und Tage auch in Österreich. Die erste Reise sollte ins ausstellende Land gehen.',
      ],
      passports: {
        RU: 'Österreich nimmt in Russland weiterhin touristische Anträge an, seit November 2025 aber meist nur für eine Einreise; die Gebühr beträgt volle 90 €. Direktflüge gibt es nicht – man fliegt über Istanbul oder Belgrad; russische Bankkarten funktionieren nicht.',
        US: 'US-Bürger brauchen kein Visum: 90 Tage in 180. ETIAS (20 €) verzögert sich und wird nicht vor 2027 erwartet.',
        GB: 'Briten dürfen 90 Tage in 180 bleiben. Der Pass muss am Einreisetag jünger als 10 Jahre sein und noch 3 Monate nach der Ausreise gelten; für eine Wintersaison als Skilehrer braucht es eine Arbeitserlaubnis.',
        TR: 'Türkische Staatsangehörige brauchen ein Schengen-Visum über VFS. Korrekt genutzte frühere Schengen-Visa helfen, längere Mehrfachvisa zu bekommen.',
        IN: 'Indische Staatsangehörige brauchen ein Schengen-Visum. Nach der EU-„Kaskade“ gibt es nach zwei korrekt genutzten Visa in drei Jahren ein Mehrfachvisum für 2 Jahre, danach für 5 Jahre.',
        UA: 'Ukrainer mit biometrischem Pass reisen 90 Tage in 180 visumfrei ein; der vorübergehende Schutz in der EU gilt bis März 2027.',
      },
    },
    fr: {
      summary:
        'L’Autriche fait partie de Schengen : les citoyens de l’UE, de l’EEE et de la Suisse entrent avec leur carte d’identité, et les voyageurs américains, britanniques, canadiens, australiens, japonais, serbes, bosniens, ukrainiens et d’autres pays exemptés restent jusqu’à 90 jours sur 180. Les titulaires d’un passeport russe, indien, chinois, turc, kazakh et de nombreux autres ont besoin d’un visa Schengen à 90 € ; les coordonnées des ambassades sont sur bmeia.gv.at.',
      apply:
        'La demande se fait à l’ambassade d’Autriche compétente pour votre lieu de résidence ; dans la plupart des pays, VFS Global gère les rendez-vous et les dossiers. Les frais sont de 90 € plus le service, et la décision prend en général 15 jours. Le site de l’ambassade liste les pièces, et si un particulier vous invite, sa déclaration de prise en charge notariée (Haftungserklärung) sert de garantie.',
      visaRun:
        'Les visa runs ne fonctionnent pas : les 90 jours se comptent sur tout l’espace Schengen dans une fenêtre glissante de 180, et les voisins — Allemagne, Tchéquie, Slovaquie, Hongrie, Slovénie, Italie, Suisse — sont tous dans Schengen. Sortir de la zone ne fait que suspendre le compteur ; depuis avril 2026, l’EES enregistre chaque entrée et sortie.',
      transit:
        'Une correspondance à Vienne-Schwechat entre deux vols hors Schengen — par exemple de l’Asie vers les Balkans — ne demande pas de visa à la plupart des nationalités, tant que vous restez en zone de transit. Les ressortissants de la liste européenne du visa de transit aéroportuaire (Afghanistan, Bangladesh, Iran, Irak, Nigeria, Pakistan, etc.) en ont besoin, sauf s’ils détiennent un visa ou un titre de séjour valide des États-Unis, du Canada, du Japon ou d’un pays de l’EEE.',
      hacks: [
        'L’Autriche délivre un visa national D pour des séjours de 91 jours à 6 mois — pour passer six mois chez des proches, par exemple : il n’entame pas vos 90/180 Schengen et ne demande pas de titre de séjour.',
        'Les jeunes Australiens, Néo-Zélandais, Canadiens, Japonais, Sud-Coréens et Taïwanais peuvent obtenir un visa vacances-travail autrichien de 6 à 12 mois.',
        'Les professionnels qualifiés peuvent passer par la carte Rouge-Blanc-Rouge (Rot-Weiß-Rot-Karte), à points, et il existe un visa de six mois pour chercher un emploi.',
        'Vienne est à une heure de Bratislava et à deux heures et demie de Budapest, et les déplacements dans Schengen ne consomment pas de quota à part : un visa à entrée unique couvre l’aller et le retour.',
      ],
      pitfalls: [
        'Si vous louez un appartement ou logez chez des amis, vous devez vous déclarer (Meldezettel) au bureau municipal sous 3 jours ; hôtels et pensions enregistrent eux-mêmes leurs clients.',
        'L’Autriche contrôle les papiers à ses frontières avec la Hongrie, la Slovénie et la Slovaquie, et l’Allemagne à l’arrivée depuis l’Autriche : gardez votre passeport sur vous dans les trains et les bus.',
        'Ne déposez pas en Autriche pour un vol bon marché vers Salzbourg si la plupart de vos nuits sont en Bavière : déposez là où vous passez le plus de nuits.',
      ],
      waivers: [
        'Un titre de séjour ou un visa long séjour D valide d’un pays Schengen vous permet de venir en Autriche sans visa jusqu’à 90 jours sur 180. Les titres irlandais et chypriotes ne comptent pas.',
        'Un visa Schengen délivré par un autre État membre est valable en Autriche dans la limite de ses dates et de ses jours. Effectuez le premier voyage dans le pays émetteur.',
      ],
      passports: {
        RU: 'L’Autriche accepte toujours des demandes touristiques en Russie, mais depuis novembre 2025 les visas sont en général à entrée unique ; les frais sont de 90 € plein tarif. Pas de vols directs : on passe par Istanbul ou Belgrade ; les cartes bancaires russes ne fonctionnent pas.',
        US: 'Les citoyens américains n’ont pas besoin de visa : 90 jours sur 180. L’ETIAS (20 €) a été repoussé et n’est pas attendu avant 2027.',
        GB: 'Les Britanniques sont limités à 90 jours sur 180. Le passeport doit avoir moins de 10 ans le jour de l’entrée et rester valable 3 mois après la sortie ; une saison d’hiver comme moniteur de ski exige un permis de travail.',
        TR: 'Les citoyens turcs ont besoin d’un visa Schengen via VFS. Des visas Schengen précédents bien utilisés aident à obtenir des visas à entrées multiples plus longs.',
        IN: 'Les citoyens indiens ont besoin d’un visa Schengen. Selon la « cascade » européenne, deux visas bien utilisés en trois ans ouvrent droit à un visa à entrées multiples de 2 ans, puis de 5 ans.',
        UA: 'Les Ukrainiens munis d’un passeport biométrique entrent sans visa pour 90 jours sur 180 ; la protection temporaire dans l’UE court jusqu’en mars 2027.',
      },
    },
    it: {
      summary:
        'L’Austria fa parte di Schengen: i cittadini di UE, SEE e Svizzera entrano con la carta d’identità, mentre chi ha passaporto di Stati Uniti, Regno Unito, Canada, Australia, Giappone, Serbia, Bosnia, Ucraina e altri paesi esenti resta fino a 90 giorni su 180. Chi ha passaporto russo, indiano, cinese, turco, kazako e di molti altri paesi ha bisogno di un visto Schengen da 90 €; i recapiti delle ambasciate sono su bmeia.gv.at.',
      apply:
        'Si fa domanda all’ambasciata austriaca competente per la tua residenza; nella maggior parte dei paesi appuntamenti e documenti li gestisce VFS Global. La tassa è di 90 € più il servizio e la decisione arriva di solito in 15 giorni. Il sito dell’ambasciata elenca i documenti e, se ti invita un privato, la sua dichiarazione di garanzia notarile (Haftungserklärung) vale come presa in carico.',
      visaRun:
        'I visa run non funzionano: i 90 giorni si contano su tutta l’area Schengen in una finestra mobile di 180, e i vicini — Germania, Cechia, Slovacchia, Ungheria, Slovenia, Italia e Svizzera — sono tutti Schengen. Uscire dall’area mette solo in pausa il contatore; dall’aprile 2026 l’EES registra ogni ingresso e uscita.',
      transit:
        'Per cambiare aereo a Vienna-Schwechat tra due voli fuori Schengen — per esempio dall’Asia ai Balcani — la maggior parte delle nazionalità non ha bisogno di visto, se resta nella zona di transito. I cittadini della lista UE del visto di transito aeroportuale (Afghanistan, Bangladesh, Iran, Iraq, Nigeria, Pakistan e altri) devono averlo, a meno di avere un visto o un permesso valido di Stati Uniti, Canada, Giappone o di un paese SEE.',
      hacks: [
        'L’Austria rilascia un visto nazionale D per soggiorni da 91 giorni a 6 mesi, per esempio per passare sei mesi dai parenti: non consuma i tuoi 90/180 Schengen e non richiede un permesso di soggiorno.',
        'I giovani di Australia, Nuova Zelanda, Canada, Giappone, Corea del Sud e Taiwan possono ottenere un visto vacanza-lavoro austriaco di 6–12 mesi.',
        'Per i lavoratori qualificati c’è la Carta Rosso-Bianco-Rosso (Rot-Weiß-Rot-Karte) a punti, e per cercare lavoro esiste un visto di sei mesi.',
        'Vienna è a un’ora da Bratislava e a due ore e mezza da Budapest, e gli spostamenti dentro Schengen non consumano una quota a parte: un visto a ingresso singolo copre andata e ritorno.',
      ],
      pitfalls: [
        'Se affitti un appartamento o dormi da amici, entro 3 giorni devi registrarti (Meldezettel) all’ufficio anagrafe; hotel e pensioni registrano da sé i propri ospiti.',
        'L’Austria controlla i documenti ai confini con Ungheria, Slovenia e Slovacchia, e la Germania all’arrivo dall’Austria: tieni il passaporto con te su treni e autobus.',
        'Non fare domanda in Austria per un volo economico su Salisburgo se la maggior parte delle notti è in Baviera: fai domanda dove passi più notti.',
      ],
      waivers: [
        'Un permesso di soggiorno o un visto nazionale D valido di qualsiasi paese Schengen ti permette di visitare l’Austria senza visto fino a 90 giorni su 180. I permessi irlandesi e ciprioti non valgono.',
        'Un visto Schengen rilasciato da un altro Stato membro vale anche in Austria entro le sue date e i suoi giorni. Fai il primo viaggio nel paese che l’ha rilasciato.',
      ],
      passports: {
        RU: 'L’Austria continua ad accettare domande turistiche in Russia, ma da novembre 2025 i visti sono di solito a ingresso singolo; la tassa è piena, 90 €. Non ci sono voli diretti — si passa da Istanbul o Belgrado — e le carte russe non funzionano.',
        US: 'I cittadini statunitensi non hanno bisogno di visto: 90 giorni su 180. L’ETIAS (20 €) è stato rinviato e non è atteso prima del 2027.',
        GB: 'I britannici hanno il limite di 90 giorni su 180. Il passaporto deve avere meno di 10 anni il giorno dell’ingresso e valere ancora 3 mesi dopo l’uscita; una stagione invernale da maestro di sci richiede un permesso di lavoro.',
        TR: 'I cittadini turchi hanno bisogno del visto Schengen tramite VFS. Aver usato bene visti Schengen precedenti aiuta a ottenere visti multipli più lunghi.',
        IN: 'I cittadini indiani hanno bisogno del visto Schengen. Con la «cascata» europea, due visti usati correttamente in tre anni danno un visto multiplo di 2 anni e poi di 5.',
        UA: 'Gli ucraini con passaporto biometrico entrano senza visto per 90 giorni su 180; la protezione temporanea nell’UE vale fino a marzo 2027.',
      },
    },
  },
};

export default guide;
