import type { PhrasePack } from './types';

const pack: PhrasePack = {
  lang: 'fr',
  speech: 'fr-FR',
  text: {
    hello: 'Bonjour', goodbye: 'Au revoir', please: 'S’il vous plaît', thanks: 'Merci', sorry: 'Pardon', excuse: 'Excusez-moi', yes: 'Oui', no: 'Non',
    noUnderstand: 'Je ne comprends pas', speakEnglish: 'Parlez-vous anglais ?', slower: 'Pouvez-vous parler plus lentement, s’il vous plaît ?', wifi: 'Y a-t-il du wifi ici ?',
    menu: 'La carte, s’il vous plaît', water: 'Un verre d’eau, s’il vous plaît', bill: 'L’addition, s’il vous plaît', delicious: 'C’est délicieux', vegetarian: 'Je suis végétarien/végétarienne',
    allergy: 'Je suis allergique aux fruits à coque', noSpicy: 'Pas épicé, s’il vous plaît', cheers: 'Santé !',
    howMuch: 'Combien ça coûte ?', tooExpensive: 'C’est trop cher', card: 'Acceptez-vous les cartes ?', atm: 'Où est le distributeur de billets le plus proche ?',
    toilet: 'Où sont les toilettes ?', station: 'Où est la gare ?', airport: 'À l’aéroport, s’il vous plaît', hotel: 'À cet hôtel, s’il vous plaît',
    stopHere: 'Arrêtez-vous ici, s’il vous plaît', left: 'Gauche', right: 'Droite', straight: 'Tout droit', ticket: 'Un billet, s’il vous plaît',
    help: 'Au secours !', doctor: 'J’ai besoin d’un médecin', police: 'Appelez la police, s’il vous plaît', pharmacy: 'Où y a-t-il une pharmacie ?', lost: 'Je suis perdu/perdue',
    n0: 'zéro', n1: 'un', n2: 'deux', n3: 'trois', n4: 'quatre', n5: 'cinq', n6: 'six', n7: 'sept', n8: 'huit', n9: 'neuf', n10: 'dix', n100: 'cent', n1000: 'mille',
  },
  note: {
    ru: 'Незнакомым говорят «vous» и всегда начинают разговор с «Bonjour» — войдя в магазин, кафе или обратившись к прохожему; без этого просьба звучит грубо.',
    en: 'Use “vous” with strangers and always open with “Bonjour” when entering a shop or café or stopping someone in the street; skipping it sounds rude.',
    es: 'Con desconocidos se usa «vous» y siempre se empieza con «Bonjour» al entrar en una tienda o un café o al parar a alguien en la calle; omitirlo resulta descortés.',
    de: 'Fremde siezt man mit „vous“, und man beginnt immer mit „Bonjour“, wenn man ein Geschäft oder Café betritt oder jemanden anspricht; ohne den Gruß wirkt man unhöflich.',
    fr: 'Avec un inconnu, on dit « vous » et on commence toujours par « Bonjour » en entrant dans un commerce ou en abordant quelqu’un dans la rue ; s’en passer est mal perçu.',
    it: 'Con gli sconosciuti si usa «vous» e si inizia sempre con «Bonjour» entrando in un negozio o in un caffè o fermando qualcuno per strada; ometterlo suona scortese.',
  },
  checked: '2026-10',
};

export default pack;
