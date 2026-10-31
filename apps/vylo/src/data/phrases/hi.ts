import type { PhrasePack } from './types';

const pack: PhrasePack = {
  lang: 'hi',
  speech: 'hi-IN',
  text: {
    hello: 'नमस्ते', goodbye: 'फिर मिलेंगे', please: 'कृपया', thanks: 'धन्यवाद', sorry: 'माफ़ कीजिए', excuse: 'सुनिए', yes: 'हाँ', no: 'नहीं',
    noUnderstand: 'मुझे समझ नहीं आया', speakEnglish: 'क्या आपको अंग्रेज़ी आती है?', slower: 'कृपया थोड़ा धीरे बोलिए', wifi: 'क्या यहाँ वाई-फ़ाई है?',
    menu: 'कृपया मेन्यू दीजिए', water: 'एक गिलास पानी दीजिए', bill: 'कृपया बिल दीजिए', delicious: 'बहुत स्वादिष्ट है', vegetarian: 'मैं शाकाहारी हूँ',
    allergy: 'मुझे मेवों से एलर्जी है', noSpicy: 'तीखा नहीं चाहिए, कृपया', cheers: 'चीयर्स!',
    howMuch: 'यह कितने का है?', tooExpensive: 'यह बहुत महँगा है', card: 'क्या कार्ड चलेगा?', atm: 'सबसे पास का एटीएम कहाँ है?',
    toilet: 'टॉयलेट कहाँ है?', station: 'रेलवे स्टेशन कहाँ है?', airport: 'मुझे एयरपोर्ट जाना है', hotel: 'इस होटल तक ले चलिए',
    stopHere: 'यहीं रोक दीजिए', left: 'बाएँ', right: 'दाएँ', straight: 'सीधे', ticket: 'एक टिकट दीजिए',
    help: 'मदद कीजिए!', doctor: 'मुझे डॉक्टर चाहिए', police: 'कृपया पुलिस को बुलाइए', pharmacy: 'दवा की दुकान कहाँ है?', lost: 'मैं रास्ता भूल गया/गई हूँ',
    n0: 'शून्य', n1: 'एक', n2: 'दो', n3: 'तीन', n4: 'चार', n5: 'पाँच', n6: 'छह', n7: 'सात', n8: 'आठ', n9: 'नौ', n10: 'दस', n100: 'सौ', n1000: 'हज़ार',
  },
  roman: {
    hello: 'namaste', goodbye: 'phir milenge', please: 'kripya', thanks: 'dhanyavaad', sorry: 'maaf keejiye', excuse: 'suniye', yes: 'haan', no: 'nahin',
    noUnderstand: 'mujhe samajh nahin aaya', speakEnglish: 'kya aapko angrezi aati hai?', slower: 'kripya thoda dheere boliye', wifi: 'kya yahaan wai-fai hai?',
    menu: 'kripya menu deejiye', water: 'ek gilaas paani deejiye', bill: 'kripya bill deejiye', delicious: 'bahut swaadisht hai', vegetarian: 'main shaakaahaari hoon',
    allergy: 'mujhe mevon se elarji hai', noSpicy: 'teekha nahin chahiye, kripya', cheers: 'cheers!',
    howMuch: 'yah kitne ka hai?', tooExpensive: 'yah bahut mahanga hai', card: 'kya card chalega?', atm: 'sabse paas ka ATM kahaan hai?',
    toilet: 'toilet kahaan hai?', station: 'railway station kahaan hai?', airport: 'mujhe airport jaana hai', hotel: 'is hotel tak le chaliye',
    stopHere: 'yaheen rok deejiye', left: 'baayen', right: 'daayen', straight: 'seedhe', ticket: 'ek ticket deejiye',
    help: 'madad keejiye!', doctor: 'mujhe doctor chahiye', police: 'kripya police ko bulaaiye', pharmacy: 'dawa ki dukaan kahaan hai?', lost: 'main raasta bhool gaya / gayi hoon',
    n0: 'shoonya', n1: 'ek', n2: 'do', n3: 'teen', n4: 'chaar', n5: 'paanch', n6: 'chhah', n7: 'saat', n8: 'aath', n9: 'nau', n10: 'das', n100: 'sau', n1000: 'hazaar',
  },
  note: {
    ru: 'Незнакомым говорите «aap» (вежливое «вы»), а не «tum» или «tu»: это самая безопасная форма. «Намасте» с ладонями у груди и лёгким поклоном уместно всегда; фразу «я заблудился» мужчина произносит «гая», женщина «гайи».',
    en: 'Use “aap”, the respectful “you”, with everyone you don’t know, never “tum” or “tu”. “Namaste” with palms together is always safe, and most phrases here avoid gendered verbs; for “I’m lost” a man says “gaya” and a woman “gayi”.',
    es: 'Usa “aap”, el “usted” respetuoso, con todo el que no conozcas, nunca “tum” ni “tu”. “Namaste” con las palmas juntas es siempre seguro; en “estoy perdido/a” el hombre dice “gaya” y la mujer “gayi”.',
    de: 'Mit Unbekannten sagt man immer „aap“, das respektvolle „Sie“, nie „tum“ oder „tu“. „Namaste“ mit aneinandergelegten Handflächen passt immer; bei „ich habe mich verlaufen“ sagt ein Mann „gaya“, eine Frau „gayi“.',
    fr: 'Avec toute personne inconnue, employez « aap », le « vous » de respect, jamais « tum » ni « tu ». « Namaste » les mains jointes est toujours de mise ; pour « je suis perdu(e) », un homme dit « gaya » et une femme « gayi ».',
    it: 'Con chi non conosci usa sempre “aap”, il “lei” di rispetto, mai “tum” o “tu”. “Namaste” a mani giunte va sempre bene; per “mi sono perso/a” l’uomo dice “gaya” e la donna “gayi”.',
  },
  checked: '2026-10',
};

export default pack;
