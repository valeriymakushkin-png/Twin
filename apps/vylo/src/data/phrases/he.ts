import type { PhrasePack } from './types';

const pack: PhrasePack = {
  lang: 'he',
  speech: 'he-IL',
  rtl: true,
  text: {
    hello: 'שלום', goodbye: 'להתראות', please: 'בבקשה', thanks: 'תודה', sorry: 'אני מצטער/מצטערת', excuse: 'סליחה', yes: 'כן', no: 'לא',
    noUnderstand: 'אני לא מבין/מבינה', speakEnglish: 'מדברים אנגלית?', slower: 'אפשר לדבר לאט יותר, בבקשה?', wifi: 'יש כאן וייפיי?',
    menu: 'אפשר תפריט, בבקשה?', water: 'כוס מים, בבקשה', bill: 'אפשר את החשבון, בבקשה?', delicious: 'זה טעים', vegetarian: 'אני צמחוני/צמחונית',
    allergy: 'יש לי אלרגיה לאגוזים', noSpicy: 'לא חריף, בבקשה', cheers: 'לחיים!',
    howMuch: 'כמה זה עולה?', tooExpensive: 'זה יקר מדי', card: 'אפשר לשלם בכרטיס אשראי?', atm: 'איפה יש כספומט קרוב?',
    toilet: 'איפה השירותים?', station: 'איפה תחנת הרכבת?', airport: 'לשדה התעופה, בבקשה', hotel: 'למלון הזה, בבקשה',
    stopHere: 'אפשר לעצור כאן, בבקשה?', left: 'שמאלה', right: 'ימינה', straight: 'ישר', ticket: 'כרטיס אחד, בבקשה',
    help: 'עזרה!', doctor: 'אני צריך/צריכה רופא', police: 'תקראו למשטרה, בבקשה', pharmacy: 'איפה יש בית מרקחת?', lost: 'הלכתי לאיבוד',
    n0: 'אפס', n1: 'אחת', n2: 'שתיים', n3: 'שלוש', n4: 'ארבע', n5: 'חמש', n6: 'שש', n7: 'שבע', n8: 'שמונה', n9: 'תשע', n10: 'עשר', n100: 'מאה', n1000: 'אלף',
  },
  roman: {
    hello: 'shalom', goodbye: 'lehitra’ot', please: 'bevakasha', thanks: 'toda', sorry: 'ani mitzta’er / mitzta’eret', excuse: 'slicha', yes: 'ken', no: 'lo',
    noUnderstand: 'ani lo mevin / mevina', speakEnglish: 'medabrim anglit?', slower: 'efshar ledaber le’at yoter, bevakasha?', wifi: 'yesh kan wifi?',
    menu: 'efshar tafrit, bevakasha?', water: 'kos mayim, bevakasha', bill: 'efshar et ha-cheshbon, bevakasha?', delicious: 'ze ta’im', vegetarian: 'ani tzimchoni / tzimchonit',
    allergy: 'yesh li alergya le-egozim', noSpicy: 'lo charif, bevakasha', cheers: 'le-chayim!',
    howMuch: 'kama ze ole?', tooExpensive: 'ze yakar midai', card: 'efshar leshalem be-kartis ashrai?', atm: 'eifo yesh caspomat karov?',
    toilet: 'eifo ha-sherutim?', station: 'eifo tachanat ha-rakevet?', airport: 'le-sde ha-te’ufa, bevakasha', hotel: 'la-malon ha-ze, bevakasha',
    stopHere: 'efshar la’atzor kan, bevakasha?', left: 'smola', right: 'yamina', straight: 'yashar', ticket: 'kartis echad, bevakasha',
    help: 'ezra!', doctor: 'ani tzarich / tzricha rofe', police: 'tikre’u la-mishtara, bevakasha', pharmacy: 'eifo yesh beit mirkachat?', lost: 'halachti le-ibud',
    n0: 'efes', n1: 'achat', n2: 'shtayim', n3: 'shalosh', n4: 'arba', n5: 'chamesh', n6: 'shesh', n7: 'sheva', n8: 'shmone', n9: 'tesha', n10: 'eser', n100: 'me’a', n1000: 'elef',
  },
  note: {
    ru: 'Иврит различает мужской и женский род: «я не понимаю» звучит «ани ло мевин» (м.) или «ани ло мевина» (ж.). В Израиле «шалом» работает и как «привет», и как «пока», а на английском вам почти всегда ответят.',
    en: 'Hebrew verbs and adjectives change with the speaker’s gender, so a man says “ani lo mevin” and a woman “ani lo mevina”. “Shalom” works as hello and goodbye, and most Israelis speak good English, so a simple “slicha” to start is enough.',
    es: 'El hebreo distingue género: un hombre dice “ani lo mevin” y una mujer “ani lo mevina”. “Shalom” sirve para saludar y despedirse, y casi todos los israelíes hablan inglés, así que empezar con un “slicha” basta.',
    de: 'Im Hebräischen richtet sich die Verbform nach dem Geschlecht des Sprechers: Männer sagen „ani lo mevin“, Frauen „ani lo mevina“. „Schalom“ gilt für Hallo und Tschüss, und die meisten Israelis sprechen gut Englisch; ein höfliches „slicha“ zu Beginn genügt.',
    fr: 'L’hébreu accorde les verbes selon le genre de celui qui parle : un homme dit « ani lo mevin », une femme « ani lo mevina ». « Shalom » sert à dire bonjour comme au revoir, et la plupart des Israéliens parlent bien anglais ; un simple « slicha » pour aborder suffit.',
    it: 'In ebraico i verbi cambiano col genere di chi parla: un uomo dice “ani lo mevin”, una donna “ani lo mevina”. “Shalom” vale sia per salutare sia per congedarsi, e la maggior parte degli israeliani parla bene l’inglese: un “slicha” per attaccare discorso basta.',
  },
  checked: '2026-10',
};

export default pack;
