import type { PhrasePack } from './types';

const pack: PhrasePack = {
  lang: 'ko',
  speech: 'ko-KR',
  text: {
    hello: '안녕하세요', goodbye: '안녕히 계세요', please: '부탁합니다', thanks: '감사합니다', sorry: '죄송합니다', excuse: '저기요', yes: '네', no: '아니요',
    noUnderstand: '이해가 안 돼요', speakEnglish: '영어 하세요?', slower: '천천히 말씀해 주세요', wifi: '여기 와이파이 있어요?',
    menu: '메뉴판 주세요', water: '물 한 잔 주세요', bill: '계산해 주세요', delicious: '맛있어요', vegetarian: '저는 채식주의자예요',
    allergy: '견과류 알레르기가 있어요', noSpicy: '맵지 않게 해 주세요', cheers: '건배!',
    howMuch: '이거 얼마예요?', tooExpensive: '너무 비싸요', card: '카드 돼요?', atm: '가장 가까운 현금인출기가 어디예요?',
    toilet: '화장실이 어디예요?', station: '기차역이 어디예요?', airport: '공항으로 가 주세요', hotel: '이 호텔로 가 주세요',
    stopHere: '여기서 세워 주세요', left: '왼쪽', right: '오른쪽', straight: '직진', ticket: '표 한 장 주세요',
    help: '도와주세요!', doctor: '의사가 필요해요', police: '경찰을 불러 주세요', pharmacy: '약국이 어디예요?', lost: '길을 잃었어요',
    n0: '영', n1: '일', n2: '이', n3: '삼', n4: '사', n5: '오', n6: '육', n7: '칠', n8: '팔', n9: '구', n10: '십', n100: '백', n1000: '천',
  },
  roman: {
    hello: 'annyeonghaseyo', goodbye: 'annyeonghi gyeseyo', please: 'butakamnida', thanks: 'gamsahamnida', sorry: 'joesonghamnida', excuse: 'jeogiyo', yes: 'ne', no: 'aniyo',
    noUnderstand: 'ihaega an dwaeyo', speakEnglish: 'yeongeo haseyo?', slower: 'cheoncheonhi malsseumhae juseyo', wifi: 'yeogi waipai isseoyo?',
    menu: 'menyupan juseyo', water: 'mul han jan juseyo', bill: 'gyesanhae juseyo', delicious: 'masisseoyo', vegetarian: 'jeoneun chaesikjuuijayeyo',
    allergy: 'gyeongwaryu allereugiga isseoyo', noSpicy: 'maepji anke hae juseyo', cheers: 'geonbae!',
    howMuch: 'igeo eolmayeyo?', tooExpensive: 'neomu bissayo', card: 'kadeu dwaeyo?', atm: 'gajang gakkaun hyeongeum inchulgiga eodiyeyo?',
    toilet: 'hwajangsiri eodiyeyo?', station: 'gichayeogi eodiyeyo?', airport: 'gonghangeuro ga juseyo', hotel: 'i hotello ga juseyo',
    stopHere: 'yeogiseo sewo juseyo', left: 'oenjjok', right: 'oreunjjok', straight: 'jikjin', ticket: 'pyo han jang juseyo',
    help: 'dowajuseyo!', doctor: 'uisaga piryohaeyo', police: 'gyeongchareul bulleo juseyo', pharmacy: 'yakgugi eodiyeyo?', lost: 'gireul ireosseoyo',
    n0: 'yeong', n1: 'il', n2: 'i', n3: 'sam', n4: 'sa', n5: 'o', n6: 'yuk', n7: 'chil', n8: 'pal', n9: 'gu', n10: 'sip', n100: 'baek', n1000: 'cheon',
  },
  note: {
    ru: 'Вежливый стиль на «-yo» и «-mnida» нужен со всеми незнакомыми. Деньги и вещи подают и принимают двумя руками или поддерживая правую локоть левой, а при встрече с пожилыми слегка кланяются. Числа здесь китайского ряда, для цен их и используют.',
    en: 'Stick to the polite “-yo” and “-mnida” endings with everyone you do not know. Hand over and receive money or objects with both hands (or the right hand supported at the elbow), and give a small bow to older people. These are the Sino-Korean numbers, the ones used for prices.',
    es: 'Con desconocidos usa siempre las terminaciones corteses «-yo» y «-mnida». Entrega y recibe dinero u objetos con las dos manos (o con la derecha sujetándote el codo) y saluda con una leve inclinación a los mayores. Los números son los sino-coreanos, los de los precios.',
    de: 'Fremden gegenüber gelten immer die höflichen Endungen „-yo“ und „-mnida“. Geld und Gegenstände reicht und nimmt man mit beiden Händen (oder rechts mit gestütztem Ellbogen), Älteren nickt man leicht zu. Die Zahlen sind die sinokoreanischen, die für Preise.',
    fr: 'Avec les inconnus, restez sur les terminaisons polies « -yo » et « -mnida ». On tend et reçoit argent et objets à deux mains (ou la main droite soutenue au coude) et l’on salue les aînés d’une légère inclinaison. Ce sont les nombres sino-coréens, ceux des prix.',
    it: 'Con gli sconosciuti si usano sempre le desinenze cortesi «-yo» e «-mnida». Soldi e oggetti si danno e si ricevono con due mani (o con la destra sorretta al gomito) e agli anziani si fa un piccolo inchino. I numeri sono quelli sino-coreani, usati per i prezzi.',
  },
  checked: '2026-10',
};

export default pack;
