import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'BR',
  checked: '2026-10',
  fees: { evisa: { kind: 'fixed', amount: 80.9, currency: 'USD' } },
  stay: { evisa: 90 },
  links: { evisa: 'https://www.gov.br/mre/pt-br/assuntos/portal-consular', immigration: 'https://www.gov.br/pf/pt-br' },
  docs: ['returnTicket'],
  passportMonths: 6,
  rule: { days: 180, window: 365 },
  extend: { days: 90 },
  visaRun: 'limited',
  nomad: { name: 'VITEM XIV (Nômade Digital)', months: 12, income: { kind: 'fixed', amount: 1500, currency: 'USD' } },
  text: {
    ru: {
      summary:
        'Граждане России, Беларуси, Украины, Грузии, Армении, ЕС, Великобритании, Японии, Кореи и почти всей Латинской Америки въезжают без визы на 90 дней (не больше 180 дней за 12 месяцев). С 10 апреля 2025 года гражданам США, Канады и Австралии нужна электронная виза. Индийцам, китайцам и ряду других стран — консульская виза.',
      apply:
        'E-визу для граждан США, Канады и Австралии оформляют только на официальной платформе brazil.vfsevisa.com, которую МИД Бразилии поручил VFS: анкета, фото, выписка со счёта, обратный билет, сбор 80,90 $. Решение — от нескольких дней до 10 рабочих дней. Виза многократная: на 10 лет для американцев и на 5 лет для канадцев и австралийцев, по 90 дней за въезд.',
      extend:
        'До окончания 90 дней пребывание можно продлить ещё на 90 в Федеральной полиции (Polícia Federal): записаться на сайте, оплатить пошлину (GRU) и прийти с паспортом и билетом. Всего — не больше 180 дней за 12 месяцев.',
      visaRun:
        'Визаран помогает лишь отчасти: выезд в Аргентину, Уругвай или Парагвай не обнуляет лимит 180 дней за 12 месяцев, считая с первого въезда. До исчерпания лимита можно выехать и вернуться, но офицер всё равно смотрит на общий срок.',
      nomad:
        'Виза цифрового кочевника VITEM XIV выдаётся на год с продлением ещё на год. Нужен доход из-за рубежа от 1500 $ в месяц или 18 000 $ на счёте, договор с иностранным работодателем или клиентами и медицинская страховка. Подача в консульстве Бразилии; после въезда — регистрация в Федеральной полиции в течение 90 дней.',
      hacks: [
        'Одна e-виза покрывает много поездок: американцы оформляют её на 10 лет, канадцы и австралийцы — на 5 лет, каждый въезд до 90 дней.',
        'Водопады Игуасу: аргентинскую сторону удобно посетить за день из Фос-ду-Игуасу — не забудьте отметки о выезде и въезде на мосту Танкреду Невис.',
        'Граждане стран Mercosur въезжают по удостоверению личности, без паспорта.',
        'Для поездок в Амазонию и Пантанал рекомендуется прививка от жёлтой лихорадки, а некоторые следующие страны маршрута требуют сертификат у прибывших из Бразилии.',
      ],
      pitfalls: [
        'Сайты, похожие на официальную платформу, берут за ту же e-визу 150–200 $. Официальный адрес — brazil.vfsevisa.com, сбор 80,90 $.',
        'Просрочка стоит около 100 реалов в день (до 10 000), её оплачивают в Федеральной полиции или при выезде; без оплаты возникнут проблемы при следующем въезде.',
        'Имя в e-визе должно точно совпадать с паспортом — ошибку не исправить, только подать заново и снова заплатить.',
      ],
      passports: {
        RU: 'Россиянам — 90 дней без визы, до 180 за 12 месяцев. Прямых рейсов нет — летают через Стамбул, Дубай, Доху или Аддис-Абебу. Российские карты не работают — берите доллары или евро наличными.',
        US: 'С 10 апреля 2025 года американцам нужна e-виза (80,90 $, на 10 лет, многократная). Подавайте минимум за две недели до вылета.',
        CA: 'Канадцам нужна e-виза (80,90 $, на 5 лет, многократная).',
        AU: 'Австралийцам нужна e-виза (80,90 $, на 5 лет, многократная).',
        JP: 'С 2023 года граждане Японии снова въезжают без визы на 90 дней.',
      },
    },
    en: {
      summary:
        'Citizens of Russia, Belarus, Ukraine, Georgia, Armenia, the EU, the UK, Japan, Korea and nearly all of Latin America enter visa-free for 90 days (no more than 180 days in 12 months). Since 10 April 2025, US, Canadian and Australian citizens need an e-visa. Indian, Chinese and some other citizens need a consular visa.',
      apply:
        'The e-visa for US, Canadian and Australian citizens is issued only through the official platform brazil.vfsevisa.com, which Brazil’s Foreign Ministry has entrusted to VFS: form, photo, bank statement, onward ticket and a US$80.90 fee. Decisions take from a few days up to 10 working days. It is multiple-entry: 10 years for Americans and five for Canadians and Australians, 90 days per visit.',
      extend:
        'Before your 90 days end, you can extend by another 90 at the Federal Police (Polícia Federal): book online, pay the fee (GRU) and turn up with your passport and ticket. The total is capped at 180 days in 12 months.',
      visaRun:
        'Border runs only help so much: a trip to Argentina, Uruguay or Paraguay does not reset the 180-days-in-12-months cap, counted from your first entry. Until the cap is used up you can leave and return, but officers look at the total.',
      nomad:
        'The VITEM XIV digital-nomad visa is issued for one year, renewable for another. You need foreign income from US$1,500 a month or US$18,000 in the bank, a contract with a foreign employer or clients and health insurance. Apply at a Brazilian consulate, then register with the Federal Police within 90 days of arrival.',
      hacks: [
        'One e-visa covers many trips: Americans get it for 10 years, Canadians and Australians for five, with up to 90 days per entry.',
        'Iguaçu Falls: the Argentine side is an easy day trip from Foz do Iguaçu — just get exit and entry records at the Tancredo Neves bridge.',
        'Mercosur citizens can enter with a national ID card instead of a passport.',
        'Yellow-fever vaccination is recommended for the Amazon and Pantanal, and some onward countries require the certificate from travellers arriving from Brazil.',
      ],
      pitfalls: [
        'Look-alike sites charge US$150–200 for the same e-visa. The official address is brazil.vfsevisa.com and the fee is US$80.90.',
        'Overstays cost about R$100 per day (up to R$10,000), payable at the Federal Police or on departure; leaving it unpaid causes trouble on your next entry.',
        'The name on the e-visa must match your passport exactly — a mistake cannot be corrected, only reapplied and paid for again.',
      ],
      passports: {
        RU: 'Russians get 90 days visa-free, up to 180 in 12 months. There are no direct flights — people fly via Istanbul, Dubai, Doha or Addis Ababa. Russian cards do not work, so bring US dollars or euros in cash.',
        US: 'Since 10 April 2025, Americans need an e-visa (US$80.90, 10 years, multiple entry). Apply at least two weeks before flying.',
        CA: 'Canadians need an e-visa (US$80.90, five years, multiple entry).',
        AU: 'Australians need an e-visa (US$80.90, five years, multiple entry).',
        JP: 'Since 2023, Japanese citizens again enter visa-free for 90 days.',
      },
    },
    es: {
      summary:
        'Los ciudadanos de Rusia, Bielorrusia, Ucrania, Georgia, Armenia, la UE, Reino Unido, Japón, Corea y casi toda Latinoamérica entran sin visa por 90 días (no más de 180 días en 12 meses). Desde el 10 de abril de 2025, los ciudadanos de EE. UU., Canadá y Australia necesitan visa electrónica. Los de India, China y algunos otros países necesitan visa consular.',
      apply:
        'La visa electrónica para ciudadanos de EE. UU., Canadá y Australia se tramita solo en la plataforma oficial brazil.vfsevisa.com, que la Cancillería brasileña encargó a VFS: formulario, foto, extracto bancario, pasaje de salida y una tasa de 80,90 US$. La respuesta tarda de unos días a 10 días hábiles. Es de entradas múltiples: 10 años para estadounidenses y cinco para canadienses y australianos, con 90 días por visita.',
      extend:
        'Antes de que se cumplan los 90 días, puedes prorrogar otros 90 en la Policía Federal: pide cita en línea, paga la tasa (GRU) y preséntate con pasaporte y pasaje. El total no puede superar 180 días en 12 meses.',
      visaRun:
        'Salir y volver solo ayuda en parte: un viaje a Argentina, Uruguay o Paraguay no reinicia el tope de 180 días en 12 meses, contado desde tu primera entrada. Mientras no lo agotes puedes salir y volver, pero el agente mira el total.',
      nomad:
        'La visa de nómada digital VITEM XIV se concede por un año, renovable por otro. Necesitas ingresos del exterior desde 1500 US$ al mes o 18 000 US$ en el banco, un contrato con empleador o clientes extranjeros y seguro médico. Se solicita en un consulado brasileño y, tras llegar, hay que registrarse en la Policía Federal en un plazo de 90 días.',
      hacks: [
        'Una sola visa electrónica sirve para muchos viajes: los estadounidenses la reciben por 10 años y los canadienses y australianos por cinco, con hasta 90 días por entrada.',
        'Cataratas del Iguazú: el lado argentino es una excursión de un día fácil desde Foz do Iguaçu; solo asegúrate de registrar salida y entrada en el puente Tancredo Neves.',
        'Los ciudadanos del Mercosur pueden entrar con su documento de identidad en lugar del pasaporte.',
        'Se recomienda la vacuna de la fiebre amarilla para la Amazonia y el Pantanal, y algunos países siguientes en tu ruta exigen el certificado a quien llega de Brasil.',
      ],
      pitfalls: [
        'Hay webs que imitan la oficial y cobran 150–200 US$ por la misma visa. La dirección oficial es brazil.vfsevisa.com y la tasa, 80,90 US$.',
        'Quedarse de más cuesta unos 100 reales por día (hasta 10 000), que se pagan en la Policía Federal o al salir; si no lo pagas, tendrás problemas en la siguiente entrada.',
        'El nombre de la visa electrónica debe coincidir exactamente con el del pasaporte: un error no se corrige, hay que volver a solicitarla y pagar otra vez.',
      ],
      passports: {
        RU: 'Los rusos tienen 90 días sin visa, hasta 180 en 12 meses. No hay vuelos directos: se vuela vía Estambul, Dubái, Doha o Adís Abeba. Las tarjetas rusas no funcionan, así que lleva dólares o euros en efectivo.',
        US: 'Desde el 10 de abril de 2025, los estadounidenses necesitan visa electrónica (80,90 US$, 10 años, entradas múltiples). Solicítala al menos dos semanas antes del vuelo.',
        CA: 'Los canadienses necesitan visa electrónica (80,90 US$, cinco años, entradas múltiples).',
        AU: 'Los australianos necesitan visa electrónica (80,90 US$, cinco años, entradas múltiples).',
        JP: 'Desde 2023, los ciudadanos japoneses vuelven a entrar sin visa por 90 días.',
      },
    },
    de: {
      summary:
        'Staatsangehörige Russlands, Belarus’, der Ukraine, Georgiens, Armeniens, der EU, Großbritanniens, Japans, Koreas und fast ganz Lateinamerikas reisen 90 Tage visumfrei ein (höchstens 180 Tage in 12 Monaten). Seit dem 10. April 2025 brauchen Bürger der USA, Kanadas und Australiens ein E-Visum. Inder, Chinesen und einige andere benötigen ein Konsularvisum.',
      apply:
        'Das E-Visum für Bürger der USA, Kanadas und Australiens gibt es nur über die offizielle Plattform brazil.vfsevisa.com, die Brasiliens Außenministerium VFS übertragen hat: Formular, Foto, Kontoauszug, Weiterreiseticket und 80,90 US$ Gebühr. Die Entscheidung dauert einige Tage bis zu 10 Werktage. Es gilt für mehrere Einreisen: 10 Jahre für US-Bürger, fünf für Kanadier und Australier, je Besuch 90 Tage.',
      extend:
        'Vor Ablauf der 90 Tage kannst du bei der Bundespolizei (Polícia Federal) um weitere 90 verlängern: online einen Termin buchen, die Gebühr (GRU) zahlen und mit Pass und Ticket erscheinen. Insgesamt gilt höchstens 180 Tage in 12 Monaten.',
      visaRun:
        'Grenz-Runs helfen nur begrenzt: Ein Abstecher nach Argentinien, Uruguay oder Paraguay setzt die Grenze von 180 Tagen in 12 Monaten ab der ersten Einreise nicht zurück. Solange das Kontingent nicht ausgeschöpft ist, kannst du aus- und wieder einreisen, der Beamte schaut aber auf die Gesamtzeit.',
      nomad:
        'Das Nomadenvisum VITEM XIV wird für ein Jahr erteilt und lässt sich um ein weiteres verlängern. Du brauchst ausländisches Einkommen ab 1.500 US$ im Monat oder 18.000 US$ auf dem Konto, einen Vertrag mit ausländischem Arbeitgeber oder Kunden und eine Krankenversicherung. Beantragt wird im brasilianischen Konsulat, nach der Einreise registrierst du dich innerhalb von 90 Tagen bei der Bundespolizei.',
      hacks: [
        'Ein E-Visum deckt viele Reisen ab: US-Bürger bekommen es für 10 Jahre, Kanadier und Australier für fünf, mit bis zu 90 Tagen pro Einreise.',
        'Iguaçu-Fälle: Die argentinische Seite ist ein einfacher Tagesausflug von Foz do Iguaçu – lass dir nur an der Tancredo-Neves-Brücke Aus- und Einreise erfassen.',
        'Mercosur-Bürger können mit dem Personalausweis statt mit dem Pass einreisen.',
        'Für Amazonas und Pantanal wird die Gelbfieberimpfung empfohlen, und manche Folgeländer verlangen das Zertifikat von Reisenden aus Brasilien.',
      ],
      pitfalls: [
        'Nachahmerseiten verlangen 150–200 US$ für dasselbe E-Visum. Die offizielle Adresse ist brazil.vfsevisa.com, die Gebühr beträgt 80,90 US$.',
        'Überziehen kostet etwa 100 Reais pro Tag (bis 10.000), zahlbar bei der Bundespolizei oder bei der Ausreise; bleibt es offen, gibt es bei der nächsten Einreise Ärger.',
        'Der Name im E-Visum muss exakt mit dem Pass übereinstimmen – ein Fehler lässt sich nicht korrigieren, nur neu beantragen und erneut bezahlen.',
      ],
      passports: {
        RU: 'Russen bekommen 90 Tage visumfrei, bis zu 180 in 12 Monaten. Direktflüge gibt es nicht – geflogen wird über Istanbul, Dubai, Doha oder Addis Abeba. Russische Karten funktionieren nicht, nimm also US-Dollar oder Euro in bar mit.',
        US: 'Seit dem 10. April 2025 brauchen US-Bürger ein E-Visum (80,90 US$, 10 Jahre, mehrfache Einreise). Beantrage es mindestens zwei Wochen vor dem Flug.',
        CA: 'Kanadier brauchen ein E-Visum (80,90 US$, fünf Jahre, mehrfache Einreise).',
        AU: 'Australier brauchen ein E-Visum (80,90 US$, fünf Jahre, mehrfache Einreise).',
        JP: 'Seit 2023 reisen japanische Staatsangehörige wieder 90 Tage visumfrei ein.',
      },
    },
    fr: {
      summary:
        'Les ressortissants de Russie, du Bélarus, d’Ukraine, de Géorgie, d’Arménie, de l’UE, du Royaume-Uni, du Japon, de la Corée et de presque toute l’Amérique latine entrent sans visa pour 90 jours (180 jours maximum sur 12 mois). Depuis le 10 avril 2025, les citoyens des États-Unis, du Canada et de l’Australie ont besoin d’un e-visa. Les citoyens indiens, chinois et de quelques autres pays doivent obtenir un visa consulaire.',
      apply:
        'L’e-visa pour les citoyens américains, canadiens et australiens se demande uniquement sur la plateforme officielle brazil.vfsevisa.com, confiée à VFS par le ministère brésilien des Affaires étrangères : formulaire, photo, relevé bancaire, billet de sortie et frais de 80,90 US$. La réponse prend de quelques jours à 10 jours ouvrés. Il est à entrées multiples : 10 ans pour les Américains, cinq pour les Canadiens et les Australiens, 90 jours par visite.',
      extend:
        'Avant la fin des 90 jours, vous pouvez prolonger de 90 autres auprès de la Police fédérale (Polícia Federal) : rendez-vous en ligne, paiement des frais (GRU), puis passage avec passeport et billet. Le total est plafonné à 180 jours sur 12 mois.',
      visaRun:
        'Le visa run n’aide qu’en partie : un saut en Argentine, en Uruguay ou au Paraguay ne remet pas à zéro le plafond de 180 jours sur 12 mois, compté depuis la première entrée. Tant qu’il n’est pas atteint, vous pouvez sortir et revenir, mais l’agent regarde le total.',
      nomad:
        'Le visa nomade numérique VITEM XIV est délivré pour un an, renouvelable une fois. Il faut des revenus étrangers d’au moins 1 500 US$ par mois ou 18 000 US$ en banque, un contrat avec un employeur ou des clients étrangers et une assurance santé. Demande au consulat du Brésil, puis enregistrement auprès de la Police fédérale dans les 90 jours suivant l’arrivée.',
      hacks: [
        'Un seul e-visa couvre de nombreux voyages : 10 ans pour les Américains, cinq pour les Canadiens et les Australiens, jusqu’à 90 jours par entrée.',
        'Chutes d’Iguaçu : le côté argentin se visite facilement dans la journée depuis Foz do Iguaçu — faites simplement enregistrer sortie et entrée au pont Tancredo Neves.',
        'Les citoyens du Mercosur peuvent entrer avec leur carte d’identité au lieu du passeport.',
        'Le vaccin contre la fièvre jaune est recommandé pour l’Amazonie et le Pantanal, et certains pays suivants exigent le certificat des voyageurs venant du Brésil.',
      ],
      pitfalls: [
        'Des sites imitant la plateforme officielle facturent 150 à 200 US$ pour le même e-visa. L’adresse officielle est brazil.vfsevisa.com, et les frais sont de 80,90 US$.',
        'Un dépassement coûte environ 100 réais par jour (jusqu’à 10 000), à régler à la Police fédérale ou au départ ; impayé, il pose problème à la prochaine entrée.',
        'Le nom sur l’e-visa doit correspondre exactement au passeport : une erreur ne se corrige pas, il faut redéposer et payer à nouveau.',
      ],
      passports: {
        RU: 'Les Russes ont 90 jours sans visa, jusqu’à 180 sur 12 mois. Pas de vols directs : on passe par Istanbul, Dubaï, Doha ou Addis-Abeba. Les cartes russes ne fonctionnent pas : emportez des dollars ou des euros en espèces.',
        US: 'Depuis le 10 avril 2025, les Américains ont besoin d’un e-visa (80,90 US$, 10 ans, entrées multiples). Demandez-le au moins deux semaines avant le vol.',
        CA: 'Les Canadiens ont besoin d’un e-visa (80,90 US$, cinq ans, entrées multiples).',
        AU: 'Les Australiens ont besoin d’un e-visa (80,90 US$, cinq ans, entrées multiples).',
        JP: 'Depuis 2023, les citoyens japonais entrent de nouveau sans visa pour 90 jours.',
      },
    },
    it: {
      summary:
        'I cittadini di Russia, Bielorussia, Ucraina, Georgia, Armenia, UE, Regno Unito, Giappone, Corea e quasi tutta l’America Latina entrano senza visto per 90 giorni (non più di 180 giorni in 12 mesi). Dal 10 aprile 2025 i cittadini di Stati Uniti, Canada e Australia hanno bisogno del visto elettronico. Quelli di India, Cina e alcuni altri paesi devono ottenere un visto consolare.',
      apply:
        'Il visto elettronico per cittadini di Stati Uniti, Canada e Australia si richiede solo sulla piattaforma ufficiale brazil.vfsevisa.com, affidata a VFS dal Ministero degli Esteri brasiliano: modulo, foto, estratto conto, biglietto di uscita e una tassa di 80,90 US$. La risposta arriva in pochi giorni fino a 10 giorni lavorativi. È a ingressi multipli: 10 anni per gli statunitensi, cinque per canadesi e australiani, 90 giorni per visita.',
      extend:
        'Prima che finiscano i 90 giorni puoi prorogare di altri 90 presso la Polizia Federale (Polícia Federal): prenoti online, paghi la tassa (GRU) e ti presenti con passaporto e biglietto. In totale non si superano 180 giorni in 12 mesi.',
      visaRun:
        'Il visa run aiuta solo in parte: un viaggio in Argentina, Uruguay o Paraguay non azzera il tetto di 180 giorni in 12 mesi, contato dal primo ingresso. Finché non lo esaurisci puoi uscire e rientrare, ma l’agente guarda il totale.',
      nomad:
        'Il visto per nomadi digitali VITEM XIV viene rilasciato per un anno, rinnovabile per un altro. Servono un reddito estero da 1.500 US$ al mese o 18.000 US$ in banca, un contratto con un datore di lavoro o clienti esteri e un’assicurazione sanitaria. Si richiede in un consolato brasiliano e, dopo l’arrivo, ci si registra alla Polizia Federale entro 90 giorni.',
      hacks: [
        'Un solo visto elettronico copre molti viaggi: gli statunitensi lo ricevono per 10 anni, canadesi e australiani per cinque, con fino a 90 giorni per ingresso.',
        'Cascate dell’Iguaçu: il lato argentino è una facile gita di un giorno da Foz do Iguaçu; basta far registrare uscita e ingresso al ponte Tancredo Neves.',
        'I cittadini del Mercosur possono entrare con la carta d’identità invece del passaporto.',
        'Per Amazzonia e Pantanal è raccomandato il vaccino contro la febbre gialla, e alcuni paesi successivi richiedono il certificato a chi arriva dal Brasile.',
      ],
      pitfalls: [
        'Siti che imitano la piattaforma ufficiale chiedono 150–200 US$ per lo stesso visto. L’indirizzo ufficiale è brazil.vfsevisa.com e la tassa è di 80,90 US$.',
        'Lo sforamento costa circa 100 reais al giorno (fino a 10.000), da pagare alla Polizia Federale o all’uscita; se resta in sospeso, avrai problemi al prossimo ingresso.',
        'Il nome sul visto elettronico deve coincidere esattamente con il passaporto: un errore non si corregge, bisogna ripresentare la domanda e pagare di nuovo.',
      ],
      passports: {
        RU: 'I russi hanno 90 giorni senza visto, fino a 180 in 12 mesi. Non ci sono voli diretti: si vola via Istanbul, Dubai, Doha o Addis Abeba. Le carte russe non funzionano, quindi porta dollari o euro in contanti.',
        US: 'Dal 10 aprile 2025 gli statunitensi hanno bisogno del visto elettronico (80,90 US$, 10 anni, ingressi multipli). Richiedilo almeno due settimane prima del volo.',
        CA: 'I canadesi hanno bisogno del visto elettronico (80,90 US$, cinque anni, ingressi multipli).',
        AU: 'Gli australiani hanno bisogno del visto elettronico (80,90 US$, cinque anni, ingressi multipli).',
        JP: 'Dal 2023 i cittadini giapponesi entrano di nuovo senza visto per 90 giorni.',
      },
    },
  },
};

export default guide;
