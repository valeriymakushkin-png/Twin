import type { PhrasePack } from './types';

const pack: PhrasePack = {
  lang: 'zh',
  speech: 'zh-CN',
  text: {
    hello: '你好', goodbye: '再见', please: '请', thanks: '谢谢', sorry: '对不起', excuse: '不好意思', yes: '是的', no: '不是',
    noUnderstand: '我听不懂', speakEnglish: '你会说英语吗？', slower: '请说慢一点', wifi: '这里有无线网吗？',
    menu: '请给我菜单', water: '请给我一杯水', bill: '请结账', delicious: '很好吃', vegetarian: '我吃素',
    allergy: '我对坚果过敏', noSpicy: '请不要放辣', cheers: '干杯！',
    howMuch: '这个多少钱？', tooExpensive: '太贵了', card: '可以刷卡吗？', atm: '最近的自动取款机在哪里？',
    toilet: '洗手间在哪里？', station: '火车站在哪里？', airport: '请去机场', hotel: '请去这家酒店',
    stopHere: '请在这里停车', left: '左边', right: '右边', straight: '一直走', ticket: '请给我一张票',
    help: '救命！', doctor: '我需要医生', police: '请帮我叫警察', pharmacy: '药店在哪里？', lost: '我迷路了',
    n0: '零', n1: '一', n2: '二', n3: '三', n4: '四', n5: '五', n6: '六', n7: '七', n8: '八', n9: '九', n10: '十', n100: '一百', n1000: '一千',
  },
  roman: {
    hello: 'nǐ hǎo', goodbye: 'zàijiàn', please: 'qǐng', thanks: 'xièxie', sorry: 'duìbuqǐ', excuse: 'bù hǎoyìsi', yes: 'shì de', no: 'bú shì',
    noUnderstand: 'wǒ tīng bu dǒng', speakEnglish: 'nǐ huì shuō Yīngyǔ ma?', slower: 'qǐng shuō màn yìdiǎn', wifi: 'zhèlǐ yǒu wúxiàn wǎng ma?',
    menu: 'qǐng gěi wǒ càidān', water: 'qǐng gěi wǒ yì bēi shuǐ', bill: 'qǐng jiézhàng', delicious: 'hěn hǎochī', vegetarian: 'wǒ chī sù',
    allergy: 'wǒ duì jiānguǒ guòmǐn', noSpicy: 'qǐng bú yào fàng là', cheers: 'gānbēi!',
    howMuch: 'zhège duōshao qián?', tooExpensive: 'tài guì le', card: 'kěyǐ shuā kǎ ma?', atm: 'zuìjìn de zìdòng qǔkuǎnjī zài nǎlǐ?',
    toilet: 'xǐshǒujiān zài nǎlǐ?', station: 'huǒchēzhàn zài nǎlǐ?', airport: 'qǐng qù jīchǎng', hotel: 'qǐng qù zhè jiā jiǔdiàn',
    stopHere: 'qǐng zài zhèlǐ tíngchē', left: 'zuǒbian', right: 'yòubian', straight: 'yìzhí zǒu', ticket: 'qǐng gěi wǒ yì zhāng piào',
    help: 'jiùmìng!', doctor: 'wǒ xūyào yīshēng', police: 'qǐng bāng wǒ jiào jǐngchá', pharmacy: 'yàodiàn zài nǎlǐ?', lost: 'wǒ mílù le',
    n0: 'líng', n1: 'yī', n2: 'èr', n3: 'sān', n4: 'sì', n5: 'wǔ', n6: 'liù', n7: 'qī', n8: 'bā', n9: 'jiǔ', n10: 'shí', n100: 'yì bǎi', n1000: 'yì qiān',
  },
  note: {
    ru: 'Китайский тональный: «mā», «má», «mǎ», «mà» значат разное, поэтому говорите чётко и держите наготове телефон с переводчиком. Это мандаринский (путунхуа); в Китае вежливое «вы» — «nín», а визитки и вещи принято подавать двумя руками.',
    en: 'Mandarin is tonal: “mā”, “má”, “mǎ” and “mà” are four different words, so speak clearly and keep a translation app handy. Use the polite “nín” for “you” with elders, and offer business cards and gifts with both hands.',
    es: 'El mandarín es tonal: «mā», «má», «mǎ» y «mà» son cuatro palabras distintas, así que habla con claridad y ten a mano un traductor. Con mayores usa el «nín» de cortesía y entrega tarjetas y regalos con las dos manos.',
    de: 'Mandarin ist eine Tonsprache: „mā“, „má“, „mǎ“ und „mà“ sind vier verschiedene Wörter, also deutlich sprechen und eine Übersetzer-App bereithalten. Älteren gegenüber sagt man höflich „nín“, Visitenkarten und Geschenke reicht man mit beiden Händen.',
    fr: 'Le mandarin est tonal : « mā », « má », « mǎ » et « mà » sont quatre mots différents, alors articulez bien et gardez une appli de traduction sous la main. Avec les aînés, on dit « nín » (vous), et l’on tend cartes de visite et cadeaux à deux mains.',
    it: 'Il mandarino è tonale: «mā», «má», «mǎ» e «mà» sono quattro parole diverse, quindi parla chiaro e tieni a portata di mano un’app di traduzione. Con le persone più anziane si usa il «nín» di cortesia, e biglietti da visita e regali si porgono con due mani.',
  },
  checked: '2026-10',
};

export default pack;
