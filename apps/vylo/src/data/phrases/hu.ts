import type { PhrasePack } from './types';

const pack: PhrasePack = {
  lang: 'hu',
  speech: 'hu-HU',
  text: {
    hello: 'Jó napot kívánok', goodbye: 'Viszontlátásra', please: 'Legyen szíves', thanks: 'Köszönöm', sorry: 'Sajnálom', excuse: 'Elnézést', yes: 'Igen', no: 'Nem',
    noUnderstand: 'Nem értem', speakEnglish: 'Beszél angolul?', slower: 'Tudna lassabban beszélni?', wifi: 'Van itt wifi?',
    menu: 'Az étlapot kérem', water: 'Egy pohár vizet kérek', bill: 'A számlát kérem', delicious: 'Nagyon finom', vegetarian: 'Vegetáriánus vagyok',
    allergy: 'Allergiás vagyok a diófélékre', noSpicy: 'Nem csípősen, kérem', cheers: 'Egészségünkre!',
    howMuch: 'Mennyibe kerül ez?', tooExpensive: 'Ez túl drága', card: 'Elfogadnak kártyát?', atm: 'Hol van a legközelebbi bankautomata?',
    toilet: 'Hol van a mosdó?', station: 'Hol van a vasútállomás?', airport: 'A repülőtérre, kérem', hotel: 'Ebbe a szállodába, kérem',
    stopHere: 'Álljon meg itt, kérem', left: 'Balra', right: 'Jobbra', straight: 'Egyenesen', ticket: 'Egy jegyet kérek',
    help: 'Segítség!', doctor: 'Orvosra van szükségem', police: 'Kérem, hívja a rendőrséget', pharmacy: 'Hol van gyógyszertár?', lost: 'Eltévedtem',
    n0: 'nulla', n1: 'egy', n2: 'kettő', n3: 'három', n4: 'négy', n5: 'öt', n6: 'hat', n7: 'hét', n8: 'nyolc', n9: 'kilenc', n10: 'tíz', n100: 'száz', n1000: 'ezer',
  },
  note: {
    ru: 'Незнакомым говорят на «Ön» (вежливое «вы»): глагол стоит в третьем лице, как в «Beszél angolul?». Среди молодёжи и в туристических местах привычнее «te», но начинать лучше с вежливой формы.',
    en: 'Use the polite “Ön” with strangers, with the verb in the third person as in “Beszél angolul?”. Young people and tourist areas lean towards informal “te”, but it is better to start formal.',
    es: 'Con desconocidos se usa el «Ön» de cortesía, con el verbo en tercera persona, como en «Beszél angolul?». Entre jóvenes y en zonas turísticas se prefiere el «te», pero conviene empezar con la forma formal.',
    de: 'Fremde spricht man mit dem höflichen „Ön“ an, das Verb steht in der dritten Person wie in „Beszél angolul?“. Unter Jüngeren und in Touristenorten ist das „te“ üblicher, doch man beginnt besser förmlich.',
    fr: 'On vouvoie les inconnus avec « Ön », le verbe se mettant à la troisième personne comme dans « Beszél angolul ? ». Les jeunes et les lieux touristiques préfèrent le « te », mais mieux vaut commencer sur le mode formel.',
    it: 'Agli sconosciuti si dà dell’«Ön» di cortesia, con il verbo alla terza persona come in «Beszél angolul?». Tra i giovani e nelle zone turistiche si usa di più il «te», ma conviene iniziare in modo formale.',
  },
  checked: '2026-10',
};

export default pack;
