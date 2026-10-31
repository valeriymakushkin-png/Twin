import type { PhrasePack } from './types';

const pack: PhrasePack = {
  lang: 'my',
  speech: 'my-MM',
  text: {
    hello: 'မင်္ဂလာပါ', goodbye: 'သွားပါဦးမယ်', please: 'ကျေးဇူးပြုပြီး', thanks: 'ကျေးဇူးတင်ပါတယ်', sorry: 'တောင်းပန်ပါတယ်', excuse: 'ခွင့်ပြုပါ', yes: 'ဟုတ်ကဲ့', no: 'မဟုတ်ပါဘူး',
    noUnderstand: 'နားမလည်ပါဘူး', speakEnglish: 'အင်္ဂလိပ်လို ပြောတတ်ပါသလား', slower: 'ဖြည်းဖြည်းပြောပေးပါ', wifi: 'ဒီမှာ ဝိုင်ဖိုင်ရှိပါသလား',
    menu: 'မီနူးပေးပါ', water: 'ရေတစ်ခွက်ပေးပါ', bill: 'ငွေရှင်းချင်ပါတယ်', delicious: 'စားလို့ကောင်းပါတယ်', vegetarian: 'သက်သတ်လွတ်စားပါတယ်',
    allergy: 'မြေပဲနဲ့ ဓာတ်မတည့်ပါဘူး', noSpicy: 'မစပ်ပါနဲ့', cheers: 'ကျန်းမာပါစေ',
    howMuch: 'ဒါ ဘယ်လောက်လဲ', tooExpensive: 'ဈေးကြီးလွန်းတယ်', card: 'ကတ်လက်ခံပါသလား', atm: 'အနီးဆုံး အေတီအမ်စက် ဘယ်မှာလဲ',
    toilet: 'အိမ်သာ ဘယ်မှာလဲ', station: 'ဘူတာရုံ ဘယ်မှာလဲ', airport: 'လေဆိပ်ကို သွားပါ', hotel: 'ဒီဟိုတယ်ကို သွားပါ',
    stopHere: 'ဒီမှာရပ်ပေးပါ', left: 'ဘယ်ဘက်', right: 'ညာဘက်', straight: 'ဖြောင့်ဖြောင့်သွားပါ', ticket: 'လက်မှတ်တစ်စောင်ပေးပါ',
    help: 'ကယ်ပါ', doctor: 'ဆရာဝန် လိုအပ်ပါတယ်', police: 'ရဲကို ခေါ်ပေးပါ', pharmacy: 'ဆေးဆိုင် ဘယ်မှာလဲ', lost: 'လမ်းပျောက်နေပါတယ်',
    n0: 'သုည', n1: 'တစ်', n2: 'နှစ်', n3: 'သုံး', n4: 'လေး', n5: 'ငါး', n6: 'ခြောက်', n7: 'ခုနစ်', n8: 'ရှစ်', n9: 'ကိုး', n10: 'ဆယ်', n100: 'တစ်ရာ', n1000: 'တစ်ထောင်',
  },
  roman: {
    hello: 'min-ga-la-ba', goodbye: 'thwa ba oun meh', please: 'kyay-zu pyu pyi', thanks: 'kyay-zu tin ba deh', sorry: 'taung-ban ba deh', excuse: 'khwin pyu ba', yes: 'hoh-keh', no: 'ma hoh ba bu',
    noUnderstand: 'na ma leh ba bu', speakEnglish: 'in-ga-lait lo pyaw dat ba tha la', slower: 'pyay-pyay pyaw pay ba', wifi: 'di hma wai-fai shi ba tha la',
    menu: 'mi-nu pay ba', water: 'yay ta-khwet pay ba', bill: 'ngway shin chin ba deh', delicious: 'sa lo kaung ba deh', vegetarian: 'thet-that-lut sa ba deh',
    allergy: 'myay-beh neh dat ma teh ba bu', noSpicy: 'ma sat ba neh', cheers: 'kyan-ma ba say',
    howMuch: 'da beh-lauk leh', tooExpensive: 'zay kyee lun deh', card: 'kat let-khan ba tha la', atm: 'a-nee-zoun ay-tee-em set beh hma leh',
    toilet: 'ein-tha beh hma leh', station: 'bu-da-yone beh hma leh', airport: 'lay-zeit ko thwa ba', hotel: 'di ho-teh ko thwa ba',
    stopHere: 'di hma yat pay ba', left: 'beh-bet', right: 'nya-bet', straight: 'phyaung-phyaung thwa ba', ticket: 'let-hma ta-saung pay ba',
    help: 'keh ba', doctor: 'sa-ya-wun lo-ap ba deh', police: 'yeh ko khaw pay ba', pharmacy: 'say-zain beh hma leh', lost: 'lan pyauk nay ba deh',
    n0: 'thoun-nya', n1: 'tit', n2: 'hnit', n3: 'thoun', n4: 'lay', n5: 'nga', n6: 'chauk', n7: 'khun-nit', n8: 'shit', n9: 'ko', n10: 'se', n100: 'ta-ya', n1000: 'ta-htaung',
  },
  note: {
    ru: 'Вежливые окончания зависят от пола: мужчина заканчивает фразу на «кхинбья», женщина на «шин». Вместо «ты» используют уважительные обращения: «У» (господин) и «Дау» (госпожа) перед именем, вещи передают двумя руками, а у входа в пагоды и дома снимают обувь.',
    en: 'Polite endings depend on gender: men close a sentence with “khin-bya”, women with “shin”. Use “U” (Mr) and “Daw” (Ms) before a name, hand things over with both hands, and take your shoes off before entering pagodas and homes.',
    es: 'Los finales corteses dependen del género: los hombres cierran la frase con «khin-bya» y las mujeres con «shin». Antepón «U» (señor) o «Daw» (señora) al nombre, entrega las cosas con ambas manos y quítate los zapatos al entrar en pagodas y casas.',
    de: 'Die höflichen Satzendungen richten sich nach dem Geschlecht: Männer schließen mit „khin-bya“, Frauen mit „shin“. Vor Namen setzt man „U“ (Herr) oder „Daw“ (Frau), reicht Dinge mit beiden Händen und zieht vor Pagoden und Wohnungen die Schuhe aus.',
    fr: 'Les terminaisons polies dépendent du genre : « khin-bya » pour un homme, « shin » pour une femme. On fait précéder le nom de « U » (monsieur) ou « Daw » (madame), on tend les objets à deux mains et l’on se déchausse avant d’entrer dans une pagode ou un foyer.',
    it: 'Le chiusure cortesi dipendono dal genere: gli uomini terminano con «khin-bya», le donne con «shin». Davanti al nome si usa «U» (signore) o «Daw» (signora), si porgono le cose con due mani e ci si toglie le scarpe prima di entrare in pagode e case.',
  },
  checked: '2026-10',
};

export default pack;
