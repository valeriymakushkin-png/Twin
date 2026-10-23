import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'MG',
  checked: '2026-10',
  fees: {
    evisa: { kind: 'from', amount: 30, currency: 'EUR' },
    voa: { kind: 'from', amount: 30, currency: 'EUR' },
  },
  stay: { evisa: 90, voa: 90 },
  links: { evisa: 'https://www.evisamada.gov.mg' },
  docs: ['returnTicket', 'booking'],
  passportMonths: 6,
  visaRun: 'no',
  text: {
    ru: {
      summary:
        'Безвиза у Мадагаскара для большинства нет, но туристическая виза простая: её покупают онлайн на evisamada.gov.mg или по прилёте в Антананариву (TNR) и на Нуси-Бе (NOS). Она действует до 90 дней, цена зависит от срока — примерно от 30 €, а очень короткие поездки (до 15 дней) до сих пор освобождались от самого визового сбора.',
      apply:
        'На evisamada.gov.mg выберите срок (15, 30, 60 или 90 дней), загрузите паспорт, обратный билет и адрес первой ночёвки, оплатите картой и распечатайте подтверждение — штамп поставят в аэропорту. С онлайн-визой вы идёте в отдельную очередь, а по прилёте ожидание может занять час. На месте визу можно оплатить и наличными евро или долларами. Тарифы меняются — сверьтесь с таблицей на портале перед поездкой.',
      visaRun:
        'Визараны не имеют смысла: туристу дают максимум 90 дней, а выезд на Маврикий или Реюньон означает покупку новой визы при возвращении. Делать это стоит, только если вы и так объединяете острова в одной поездке.',
      hacks: [
        'Объединяете Мадагаскар с Реюньоном или Маврикием? Air Austral и Air Mauritius летают из Тананариве и Нуси-Бе — стройте маршрут так, чтобы покупаемый срок визы покрывал только дни на самом Мадагаскаре.',
        'Выбирайте срок с запасом: цена растёт ступенями (30, 60, 90 дней), а продление в Антананариву — медленная бюрократия. Если сомневаетесь, берите следующий срок.',
        'Прилёт прямо на Нуси-Бе обычно быстрее для паспортного контроля, чем аэропорт Ивато в Антананариву.',
        'Возьмите наличные евро: за пределами Тананариве и Нуси-Бе карты почти не принимают, а стойка визы по прилёте иногда работает только с наличными.',
      ],
      pitfalls: [
        'Сайты-посредники с «madagascar-visa» в адресе берут вдвое больше. Официальный портал — только evisamada.gov.mg.',
        'Паспорт должен действовать шесть месяцев и иметь чистую страницу для визового штампа.',
        'Без обратного или выездного билета могут не посадить на рейс и не впустить: его проверяют и авиакомпании, и пограничники.',
      ],
      passports: {
        RU: 'Россиянам нужна обычная туристическая виза. Российские карты для онлайн-оплаты не подойдут — оформляйте визу по прилёте за наличные евро или платите картой зарубежного банка.',
      },
    },
    en: {
      summary:
        'Madagascar has no visa-free entry for most visitors, but the tourist visa is simple: buy it online on evisamada.gov.mg or on arrival at Antananarivo (TNR) or Nosy Be (NOS). It’s valid for up to 90 days, and the price depends on the length — from about €30 — while very short stays (up to 15 days) have so far been exempt from the visa fee itself.',
      apply:
        'On evisamada.gov.mg choose the length (15, 30, 60 or 90 days), upload your passport, a return ticket and the address of your first night, pay by card and print the confirmation — the stamp goes in at the airport. With an online visa you use a separate lane; on arrival the wait can take an hour. On arrival you can also pay in cash in euros or dollars. Fees change, so check the table on the portal before you travel.',
      visaRun:
        'Visa runs make no sense here: tourists get 90 days at most, and leaving for Mauritius or Réunion means buying a new visa when you return. Only do it if you’re combining islands on the same trip anyway.',
      hacks: [
        'Combining Madagascar with Réunion or Mauritius? Air Austral and Air Mauritius fly from Tana and Nosy Be — plan the route so the visa length you buy only covers the days you actually spend in Madagascar.',
        'Pick the length with a margin: the price steps up at 30, 60 and 90 days, and extending in Antananarivo is slow paperwork. If in doubt, take the next length up.',
        'Flying straight into Nosy Be is usually quicker at immigration than Ivato airport in Antananarivo.',
        'Bring euro cash: outside Tana and Nosy Be cards are rarely accepted, and the visa desk on arrival sometimes takes cash only.',
      ],
      pitfalls: [
        'Agency sites with “madagascar-visa” in the address charge double. The only official portal is evisamada.gov.mg.',
        'Your passport needs six months’ validity and a blank page for the visa stamp.',
        'Without a return or onward ticket you may be refused boarding or entry — both airlines and officers check it.',
      ],
      passports: {
        RU: 'Russian citizens need the standard tourist visa. Russian cards won’t work for the online payment — get the visa on arrival with cash euros, or pay with a card from a foreign bank.',
      },
    },
    es: {
      summary:
        'Madagascar no tiene entrada sin visado para la mayoría, pero el visado turístico es sencillo: se compra en línea en evisamada.gov.mg o a la llegada en Antananarivo (TNR) o Nosy Be (NOS). Vale hasta 90 días y el precio depende de la duración, desde unos 30 €; las estancias muy cortas (hasta 15 días) han estado exentas hasta ahora de la tasa del visado en sí.',
      apply:
        'En evisamada.gov.mg elige la duración (15, 30, 60 o 90 días), sube el pasaporte, el billete de vuelta y la dirección de la primera noche, paga con tarjeta e imprime la confirmación: el sello te lo ponen en el aeropuerto. Con el visado en línea vas por una fila aparte; a la llegada la espera puede ser de una hora. Allí también se puede pagar en efectivo en euros o dólares. Las tarifas cambian, así que revisa la tabla del portal antes de viajar.',
      visaRun:
        'Aquí los visa runs no tienen sentido: al turista se le dan 90 días como máximo, y salir a Mauricio o Reunión implica comprar un visado nuevo al volver. Solo compensa si ya combinas islas en el mismo viaje.',
      hacks: [
        '¿Combinas Madagascar con Reunión o Mauricio? Air Austral y Air Mauritius vuelan desde Tana y Nosy Be: organiza la ruta para que la duración del visado cubra solo los días que pasas en Madagascar.',
        'Elige la duración con margen: el precio sube por tramos (30, 60 y 90 días) y prorrogar en Antananarivo es un trámite lento. Si dudas, coge el tramo siguiente.',
        'Llegar directamente a Nosy Be suele ser más rápido en inmigración que el aeropuerto de Ivato, en Antananarivo.',
        'Lleva euros en efectivo: fuera de Tana y Nosy Be casi no aceptan tarjeta, y el mostrador de visados a la llegada a veces solo admite efectivo.',
      ],
      pitfalls: [
        'Las webs de agencias con “madagascar-visa” en la dirección cobran el doble. El único portal oficial es evisamada.gov.mg.',
        'El pasaporte necesita seis meses de validez y una página en blanco para el sello.',
        'Sin billete de vuelta o de salida pueden negarte el embarque o la entrada: lo comprueban tanto las aerolíneas como los agentes.',
      ],
      passports: {
        RU: 'Los ciudadanos rusos necesitan el visado turístico normal. Las tarjetas rusas no sirven para el pago en línea: saca el visado a la llegada con euros en efectivo o paga con la tarjeta de un banco extranjero.',
      },
    },
    de: {
      summary:
        'Visumfrei kommen die meisten nicht nach Madagaskar, aber das Touristenvisum ist einfach: online auf evisamada.gov.mg oder bei Ankunft in Antananarivo (TNR) oder Nosy Be (NOS). Es gilt bis zu 90 Tage, der Preis richtet sich nach der Dauer – ab rund 30 € –, sehr kurze Aufenthalte (bis 15 Tage) waren bisher von der eigentlichen Visumgebühr befreit.',
      apply:
        'Wähle auf evisamada.gov.mg die Dauer (15, 30, 60 oder 90 Tage), lade Pass, Rückflugticket und die Adresse der ersten Nacht hoch, zahle per Karte und drucke die Bestätigung – den Stempel gibt es am Flughafen. Mit Online-Visum nutzt du eine eigene Spur, bei Ankunft kann das Warten eine Stunde dauern. Vor Ort lässt sich auch bar in Euro oder Dollar zahlen. Die Gebühren ändern sich, also prüfe vor der Reise die Tabelle im Portal.',
      visaRun:
        'Visa-Runs ergeben hier keinen Sinn: Touristen bekommen höchstens 90 Tage, und wer nach Mauritius oder La Réunion ausreist, kauft bei der Rückkehr ein neues Visum. Lohnt sich nur, wenn du die Inseln ohnehin kombinierst.',
      hacks: [
        'Madagaskar plus La Réunion oder Mauritius? Air Austral und Air Mauritius fliegen ab Tana und Nosy Be – plane so, dass die gekaufte Visumdauer nur die Tage in Madagaskar abdeckt.',
        'Wähle die Dauer mit Puffer: Der Preis steigt in Stufen (30, 60, 90 Tage), und eine Verlängerung in Antananarivo ist zähe Bürokratie. Im Zweifel die nächste Stufe nehmen.',
        'Direkt nach Nosy Be zu fliegen geht an der Passkontrolle meist schneller als am Flughafen Ivato in Antananarivo.',
        'Nimm Euro in bar mit: Außerhalb von Tana und Nosy Be werden Karten kaum akzeptiert, und der Visaschalter bei Ankunft nimmt manchmal nur Bargeld.',
      ],
      pitfalls: [
        'Agenturseiten mit „madagascar-visa“ in der Adresse verlangen das Doppelte. Das einzige offizielle Portal ist evisamada.gov.mg.',
        'Der Pass muss sechs Monate gültig sein und eine freie Seite für den Visumstempel haben.',
        'Ohne Rück- oder Weiterflugticket drohen verweigertes Boarding oder Einreise – Airlines und Grenzbeamte prüfen es.',
      ],
      passports: {
        RU: 'Russische Staatsangehörige brauchen das normale Touristenvisum. Russische Karten funktionieren bei der Online-Zahlung nicht – hol dir das Visum bei Ankunft gegen Euro in bar oder zahle mit der Karte einer ausländischen Bank.',
      },
    },
    fr: {
      summary:
        'Madagascar n’offre pas d’entrée sans visa à la plupart des visiteurs, mais le visa touristique est simple : il s’achète en ligne sur evisamada.gov.mg ou à l’arrivée à Antananarivo (TNR) ou à Nosy Be (NOS). Il est valable 90 jours maximum, et son prix dépend de la durée — à partir d’environ 30 € — tandis que les très courts séjours (jusqu’à 15 jours) étaient jusqu’ici exemptés des droits de visa proprement dits.',
      apply:
        'Sur evisamada.gov.mg, choisissez la durée (15, 30, 60 ou 90 jours), téléchargez passeport, billet retour et adresse de la première nuit, payez par carte et imprimez la confirmation : le cachet est apposé à l’aéroport. Avec le visa en ligne, vous passez par une file dédiée ; à l’arrivée, l’attente peut atteindre une heure. Sur place, on peut aussi payer en espèces, en euros ou en dollars. Les tarifs changent : vérifiez le barème sur le portail avant de partir.',
      visaRun:
        'Les visa runs n’ont pas de sens ici : un touriste obtient 90 jours au maximum, et partir à Maurice ou à La Réunion oblige à racheter un visa au retour. Ne le faites que si vous combinez déjà les îles dans le même voyage.',
      hacks: [
        'Vous combinez Madagascar avec La Réunion ou Maurice ? Air Austral et Air Mauritius desservent Tana et Nosy Be : organisez l’itinéraire pour que la durée de visa achetée ne couvre que vos jours à Madagascar.',
        'Choisissez la durée avec de la marge : le prix augmente par paliers (30, 60, 90 jours) et une prolongation à Antananarivo est une démarche lente. Dans le doute, prenez le palier supérieur.',
        'Arriver directement à Nosy Be est en général plus rapide au contrôle que l’aéroport d’Ivato à Antananarivo.',
        'Emportez des euros en espèces : hors de Tana et de Nosy Be, la carte passe rarement, et le guichet des visas à l’arrivée n’accepte parfois que le liquide.',
      ],
      pitfalls: [
        'Les sites d’agences contenant « madagascar-visa » dans l’adresse facturent le double. Le seul portail officiel est evisamada.gov.mg.',
        'Le passeport doit être valable six mois et comporter une page vierge pour le cachet.',
        'Sans billet retour ou de continuation, l’embarquement ou l’entrée peuvent vous être refusés : compagnies et agents le vérifient.',
      ],
      passports: {
        RU: 'Les ressortissants russes ont besoin du visa touristique standard. Les cartes russes ne passent pas pour le paiement en ligne : prenez le visa à l’arrivée en euros ou payez avec la carte d’une banque étrangère.',
      },
    },
    it: {
      summary:
        'Il Madagascar non prevede l’ingresso senza visto per la maggior parte dei visitatori, ma il visto turistico è semplice: si compra online su evisamada.gov.mg o all’arrivo ad Antananarivo (TNR) o a Nosy Be (NOS). Vale fino a 90 giorni e il prezzo dipende dalla durata, da circa 30 €; i soggiorni brevissimi (fino a 15 giorni) finora erano esenti dalla tassa sul visto vera e propria.',
      apply:
        'Su evisamada.gov.mg scegli la durata (15, 30, 60 o 90 giorni), carica passaporto, biglietto di ritorno e indirizzo della prima notte, paga con carta e stampa la conferma: il timbro te lo mettono in aeroporto. Con il visto online passi da una corsia dedicata; all’arrivo l’attesa può durare un’ora. Sul posto si può pagare anche in contanti, in euro o dollari. Le tariffe cambiano: controlla la tabella sul portale prima di partire.',
      visaRun:
        'Qui i visa run non hanno senso: al turista si danno al massimo 90 giorni, e andare a Mauritius o alla Riunione significa ricomprare il visto al ritorno. Conviene solo se combini già le isole nello stesso viaggio.',
      hacks: [
        'Abbini il Madagascar alla Riunione o a Mauritius? Air Austral e Air Mauritius volano da Tana e Nosy Be: organizza l’itinerario in modo che la durata del visto copra solo i giorni in Madagascar.',
        'Scegli la durata con margine: il prezzo sale a scaglioni (30, 60, 90 giorni) e prorogare ad Antananarivo è una pratica lenta. Nel dubbio, prendi lo scaglione successivo.',
        'Atterrare direttamente a Nosy Be di solito è più rapido al controllo passaporti rispetto all’aeroporto di Ivato, ad Antananarivo.',
        'Porta euro in contanti: fuori da Tana e Nosy Be le carte sono accettate di rado, e lo sportello visti all’arrivo a volte prende solo contanti.',
      ],
      pitfalls: [
        'I siti di agenzie con “madagascar-visa” nell’indirizzo fanno pagare il doppio. L’unico portale ufficiale è evisamada.gov.mg.',
        'Il passaporto deve avere sei mesi di validità e una pagina libera per il timbro.',
        'Senza biglietto di ritorno o di proseguimento rischi di non essere imbarcato o di vederti negare l’ingresso: lo controllano compagnie e agenti.',
      ],
      passports: {
        RU: 'I cittadini russi hanno bisogno del normale visto turistico. Le carte russe non funzionano per il pagamento online: fai il visto all’arrivo in euro contanti o paga con la carta di una banca estera.',
      },
    },
  },
};

export default guide;
