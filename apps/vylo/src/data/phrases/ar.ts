import type { PhrasePack } from './types';

const pack: PhrasePack = {
  lang: 'ar',
  speech: 'ar-SA',
  rtl: true,
  text: {
    hello: 'مرحباً', goodbye: 'مع السلامة', please: 'من فضلك', thanks: 'شكراً', sorry: 'آسف/آسفة', excuse: 'لو سمحت', yes: 'نعم', no: 'لا',
    noUnderstand: 'لا أفهم', speakEnglish: 'هل تتكلم الإنجليزية؟', slower: 'تكلّم ببطء من فضلك', wifi: 'هل يوجد واي فاي هنا؟',
    menu: 'قائمة الطعام من فضلك', water: 'كأس ماء من فضلك', bill: 'الحساب من فضلك', delicious: 'لذيذ جداً', vegetarian: 'أنا نباتي/نباتية',
    allergy: 'عندي حساسية من المكسّرات', noSpicy: 'بدون حار من فضلك', cheers: 'في صحتك!',
    howMuch: 'بكم هذا؟', tooExpensive: 'هذا غالٍ جداً', card: 'هل تقبلون البطاقات؟', atm: 'أين أقرب صرّاف آلي؟',
    toilet: 'أين الحمّام؟', station: 'أين محطة القطار؟', airport: 'إلى المطار من فضلك', hotel: 'إلى هذا الفندق من فضلك',
    stopHere: 'توقّف هنا من فضلك', left: 'يسار', right: 'يمين', straight: 'إلى الأمام', ticket: 'تذكرة واحدة من فضلك',
    help: 'النجدة!', doctor: 'أحتاج إلى طبيب', police: 'اتصل بالشرطة من فضلك', pharmacy: 'أين الصيدلية؟', lost: 'أنا تائه/تائهة',
    n0: 'صفر', n1: 'واحد', n2: 'اثنان', n3: 'ثلاثة', n4: 'أربعة', n5: 'خمسة', n6: 'ستة', n7: 'سبعة', n8: 'ثمانية', n9: 'تسعة', n10: 'عشرة', n100: 'مئة', n1000: 'ألف',
  },
  roman: {
    hello: 'marhaban', goodbye: 'ma‘a as-salama', please: 'min fadlak', thanks: 'shukran', sorry: 'asif / asifa', excuse: 'law samaht', yes: 'na‘am', no: 'la',
    noUnderstand: 'la afham', speakEnglish: 'hal tatakallam al-inglizia?', slower: 'takallam bi-but’, min fadlak', wifi: 'hal yujad wai fai huna?',
    menu: 'qa’imat at-ta‘am, min fadlak', water: 'ka’s ma’, min fadlak', bill: 'al-hisab, min fadlak', delicious: 'ladhidh jiddan', vegetarian: 'ana nabati / nabatiyya',
    allergy: '‘indi hassasiyya min al-mukassarat', noSpicy: 'bidun har, min fadlak', cheers: 'fi sihhatak!',
    howMuch: 'bikam hadha?', tooExpensive: 'hadha ghali jiddan', card: 'hal taqbalun al-bitaqat?', atm: 'ayna aqrab sarraf ali?',
    toilet: 'ayna al-hammam?', station: 'ayna mahattat al-qitar?', airport: 'ila al-matar, min fadlak', hotel: 'ila hadha al-funduq, min fadlak',
    stopHere: 'tawaqqaf huna, min fadlak', left: 'yasar', right: 'yamin', straight: 'ila al-amam', ticket: 'tadhkira wahida, min fadlak',
    help: 'an-najda!', doctor: 'ahtaj ila tabib', police: 'ittasil bi-sh-shurta, min fadlak', pharmacy: 'ayna as-saydaliyya?', lost: 'ana ta’ih / ta’iha',
    n0: 'sifr', n1: 'wahid', n2: 'ithnan', n3: 'thalatha', n4: 'arba‘a', n5: 'khamsa', n6: 'sitta', n7: 'sab‘a', n8: 'thamaniya', n9: 'tis‘a', n10: 'ashara', n100: 'mi’a', n1000: 'alf',
  },
  note: {
    ru: 'Это современный литературный арабский: его поймут везде, но в быту говорят на диалектах (египетском, левантийском, заливском, магрибском), и ответят вам, скорее всего, на своём. Обращения мужские; женщине скажите «мин фадлики», а приветствие «ас-саламу алейкум» уместно всегда.',
    en: 'This is Modern Standard Arabic, understood across the Arab world, but people chat in local dialects (Egyptian, Levantine, Gulf, Maghrebi) and will likely answer in theirs; for example, Egyptians say “fein el-hammam?” for the toilet. Forms for “you” are masculine; to a woman, change “-ak” to “-ik” (min fadlik), and “as-salamu alaykum” is a welcome opener anywhere.',
    es: 'Es árabe estándar moderno: se entiende en todo el mundo árabe, aunque en la calle se habla en dialectos (egipcio, levantino, del Golfo, magrebí) y es probable que te respondan en el suyo. Las formas de “tú” van en masculino; a una mujer cámbiale “-ak” por “-ik”, y saludar con “as-salamu alaykum” siempre cae bien.',
    de: 'Das ist modernes Hocharabisch: Man versteht es in der ganzen arabischen Welt, im Alltag spricht man aber Dialekte (ägyptisch, levantinisch, Golf, maghrebinisch) und antwortet meist darin. Die Anrede ist männlich; zu einer Frau sagt man „-ik“ statt „-ak“, und „as-salamu alaykum“ ist als Gruß überall willkommen.',
    fr: 'C’est de l’arabe standard moderne, compris dans tout le monde arabe, mais on parle au quotidien en dialecte (égyptien, levantin, du Golfe, maghrébin) et on vous répondra sans doute ainsi. Les formes de « vous » sont au masculin ; à une femme, remplacez « -ak » par « -ik », et « as-salamu alaykum » est toujours un bon début.',
    it: 'È arabo standard moderno, compreso in tutto il mondo arabo, ma nella vita quotidiana si parlano i dialetti (egiziano, levantino, del Golfo, maghrebino) e probabilmente ti risponderanno nel loro. Le forme del “tu” sono al maschile; a una donna si cambia “-ak” in “-ik”, e “as-salamu alaykum” è un saluto sempre gradito.',
  },
  checked: '2026-10',
};

export default pack;
