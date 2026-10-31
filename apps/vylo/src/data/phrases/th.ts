import type { PhrasePack } from './types';

const pack: PhrasePack = {
  lang: 'th',
  speech: 'th-TH',
  text: {
    hello: 'สวัสดี', goodbye: 'ลาก่อน', please: 'กรุณา', thanks: 'ขอบคุณ', sorry: 'ขอโทษ', excuse: 'ขอโทษนะ', yes: 'ใช่', no: 'ไม่ใช่',
    noUnderstand: 'ไม่เข้าใจ', speakEnglish: 'พูดภาษาอังกฤษได้ไหม', slower: 'ช่วยพูดช้า ๆ หน่อย', wifi: 'ที่นี่มีไวไฟไหม',
    menu: 'ขอเมนูหน่อย', water: 'ขอน้ำเปล่าหนึ่งแก้ว', bill: 'เช็คบิลด้วย', delicious: 'อร่อย', vegetarian: 'กินมังสวิรัติ',
    allergy: 'แพ้ถั่ว', noSpicy: 'ไม่เผ็ดนะ', cheers: 'ไชโย',
    howMuch: 'อันนี้เท่าไหร่', tooExpensive: 'แพงไป', card: 'รับบัตรไหม', atm: 'ตู้เอทีเอ็มที่ใกล้ที่สุดอยู่ที่ไหน',
    toilet: 'ห้องน้ำอยู่ที่ไหน', station: 'สถานีรถไฟอยู่ที่ไหน', airport: 'ไปสนามบิน', hotel: 'ไปโรงแรมนี้',
    stopHere: 'จอดตรงนี้', left: 'ซ้าย', right: 'ขวา', straight: 'ตรงไป', ticket: 'ขอตั๋วหนึ่งใบ',
    help: 'ช่วยด้วย', doctor: 'ต้องการหมอ', police: 'ช่วยเรียกตำรวจหน่อย', pharmacy: 'ร้านขายยาอยู่ที่ไหน', lost: 'หลงทาง',
    n0: 'ศูนย์', n1: 'หนึ่ง', n2: 'สอง', n3: 'สาม', n4: 'สี่', n5: 'ห้า', n6: 'หก', n7: 'เจ็ด', n8: 'แปด', n9: 'เก้า', n10: 'สิบ', n100: 'หนึ่งร้อย', n1000: 'หนึ่งพัน',
  },
  roman: {
    hello: 'sa-wat-dee', goodbye: 'laa gon', please: 'ga-ru-naa', thanks: 'kop-khun', sorry: 'kho-thot', excuse: 'kho-thot na', yes: 'chai', no: 'mai chai',
    noUnderstand: 'mai khao-jai', speakEnglish: 'phuut phaa-saa ang-grit dai mai', slower: 'chuay phuut chaa-chaa noi', wifi: 'tee-nee mee wai-fai mai',
    menu: 'kho mee-nuu noi', water: 'kho naam-plao nueng gaew', bill: 'chek-bin duay', delicious: 'a-roi', vegetarian: 'gin mang-sa-wi-rat',
    allergy: 'pae tua', noSpicy: 'mai phet na', cheers: 'chai-yo',
    howMuch: 'an-nee thao-rai', tooExpensive: 'phaeng pai', card: 'rap bat mai', atm: 'dtuu ee-tee-em tee glai tee-sut yuu tee-nai',
    toilet: 'hong-naam yuu tee-nai', station: 'sa-taa-nee rot-fai yuu tee-nai', airport: 'bpai sa-naam-bin', hotel: 'bpai rong-raem nee',
    stopHere: 'jot dtrong-nee', left: 'saai', right: 'khwaa', straight: 'dtrong bpai', ticket: 'kho dtua nueng bai',
    help: 'chuay duay', doctor: 'dtong-gaan mor', police: 'chuay riak dtam-ruat noi', pharmacy: 'raan khaai yaa yuu tee-nai', lost: 'long taang',
    n0: 'suun', n1: 'nueng', n2: 'song', n3: 'saam', n4: 'sii', n5: 'haa', n6: 'hok', n7: 'jet', n8: 'paet', n9: 'gao', n10: 'sip', n100: 'nueng roi', n1000: 'nueng phan',
  },
  note: {
    ru: 'Вежливая фраза заканчивается частицей: мужчина добавляет «кхрап», женщина — «кха» (в вопросах «кхá»). Без неё речь звучит резко. Здороваясь, можно сложить ладони у груди и слегка поклониться (вай).',
    en: 'Polite speech ends with a particle: men add “khrap”, women add “kha”, and without it you can sound curt. Greet with a slight bow and palms pressed together at chest height (the wai), and never touch anyone’s head.',
    es: 'Las frases corteses terminan con una partícula: los hombres añaden «khrap» y las mujeres «kha»; sin ella suenas seco. Saluda con las palmas juntas a la altura del pecho y una leve inclinación (el wai), y no toques la cabeza de nadie.',
    de: 'Höfliche Sätze enden mit einer Partikel: Männer hängen „khrap“ an, Frauen „kha“, sonst klingt man schroff. Zur Begrüßung legt man die Handflächen vor der Brust zusammen und neigt leicht den Kopf (Wai); den Kopf anderer Menschen berührt man nie.',
    fr: 'Une phrase polie se termine par une particule : « khrap » pour un homme, « kha » pour une femme, faute de quoi on paraît sec. On salue les mains jointes devant la poitrine avec une légère inclinaison (le wai), et on ne touche jamais la tête de quelqu’un.',
    it: 'Le frasi cortesi finiscono con una particella: gli uomini aggiungono «khrap», le donne «kha», altrimenti si suona bruschi. Si saluta con le mani giunte al petto e un lieve inchino (il wai), e non si tocca mai la testa a nessuno.',
  },
  checked: '2026-10',
};

export default pack;
