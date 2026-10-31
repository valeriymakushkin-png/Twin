import type { PhrasePack } from './types';

const pack: PhrasePack = {
  lang: 'ja',
  speech: 'ja-JP',
  text: {
    hello: 'こんにちは', goodbye: 'さようなら', please: 'お願いします', thanks: 'ありがとうございます', sorry: 'ごめんなさい', excuse: 'すみません', yes: 'はい', no: 'いいえ',
    noUnderstand: 'わかりません', speakEnglish: '英語は話せますか？', slower: 'もう少しゆっくり話してください', wifi: 'ここにワイファイはありますか？',
    menu: 'メニューをお願いします', water: 'お水を一杯ください', bill: 'お会計をお願いします', delicious: 'おいしいです', vegetarian: '私はベジタリアンです',
    allergy: 'ナッツアレルギーです', noSpicy: '辛くしないでください', cheers: '乾杯！',
    howMuch: 'これはいくらですか？', tooExpensive: '高すぎます', card: 'カードは使えますか？', atm: '一番近いＡＴＭはどこですか？',
    toilet: 'トイレはどこですか？', station: '駅はどこですか？', airport: '空港までお願いします', hotel: 'このホテルまでお願いします',
    stopHere: 'ここで止めてください', left: '左', right: '右', straight: 'まっすぐ', ticket: '切符を一枚ください',
    help: '助けて！', doctor: '医者が必要です', police: '警察を呼んでください', pharmacy: '薬局はどこですか？', lost: '道に迷いました',
    n0: 'ゼロ', n1: '一', n2: '二', n3: '三', n4: '四', n5: '五', n6: '六', n7: '七', n8: '八', n9: '九', n10: '十', n100: '百', n1000: '千',
  },
  roman: {
    hello: 'konnichiwa', goodbye: 'sayōnara', please: 'onegai shimasu', thanks: 'arigatō gozaimasu', sorry: 'gomen nasai', excuse: 'sumimasen', yes: 'hai', no: 'iie',
    noUnderstand: 'wakarimasen', speakEnglish: 'Eigo wa hanasemasu ka?', slower: 'mō sukoshi yukkuri hanashite kudasai', wifi: 'koko ni waifai wa arimasu ka?',
    menu: 'menyū o onegai shimasu', water: 'omizu o ippai kudasai', bill: 'okaikei o onegai shimasu', delicious: 'oishii desu', vegetarian: 'watashi wa bejitarian desu',
    allergy: 'nattsu arerugī desu', noSpicy: 'karaku shinai de kudasai', cheers: 'kanpai!',
    howMuch: 'kore wa ikura desu ka?', tooExpensive: 'takasugimasu', card: 'kādo wa tsukaemasu ka?', atm: 'ichiban chikai ētīemu wa doko desu ka?',
    toilet: 'toire wa doko desu ka?', station: 'eki wa doko desu ka?', airport: 'kūkō made onegai shimasu', hotel: 'kono hoteru made onegai shimasu',
    stopHere: 'koko de tomete kudasai', left: 'hidari', right: 'migi', straight: 'massugu', ticket: 'kippu o ichimai kudasai',
    help: 'tasukete!', doctor: 'isha ga hitsuyō desu', police: 'keisatsu o yonde kudasai', pharmacy: 'yakkyoku wa doko desu ka?', lost: 'michi ni mayoimashita',
    n0: 'zero', n1: 'ichi', n2: 'ni', n3: 'san', n4: 'yon', n5: 'go', n6: 'roku', n7: 'nana', n8: 'hachi', n9: 'kyū', n10: 'jū', n100: 'hyaku', n1000: 'sen',
  },
  note: {
    ru: 'В Японии принято кланяться при приветствии и благодарности, а «сумимасэн» годится и как «извините», и как «спасибо», и чтобы привлечь внимание. Чаевых не оставляют, деньги кладут на лоточек у кассы, а не отдают в руки.',
    en: 'A slight bow goes with greetings and thanks, and “sumimasen” works as excuse me, sorry and thank you all at once. There is no tipping, and money goes on the little tray at the till rather than into the cashier’s hand.',
    es: 'Al saludar y dar las gracias se hace una ligera reverencia, y «sumimasen» sirve para disculparse, llamar la atención o agradecer. No se deja propina, y el dinero se pone en la bandejita de la caja en vez de entregarlo en mano.',
    de: 'Zur Begrüßung und zum Danken gehört eine leichte Verbeugung, und „sumimasen“ passt als Entschuldigung, Anrede und Dank zugleich. Trinkgeld gibt es nicht; das Geld legt man auf das Tellerchen an der Kasse statt in die Hand.',
    fr: 'On accompagne salutations et remerciements d’une légère inclinaison, et « sumimasen » sert à la fois d’excuse, d’interpellation et de merci. Pas de pourboire, et l’on pose l’argent sur le plateau près de la caisse plutôt que dans la main.',
    it: 'Saluti e ringraziamenti si accompagnano con un lieve inchino, e «sumimasen» vale come scusa, per chiamare qualcuno e come grazie. Non si lascia la mancia e i soldi vanno sul vassoietto alla cassa, non in mano.',
  },
  checked: '2026-10',
};

export default pack;
