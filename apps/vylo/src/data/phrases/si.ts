import type { PhrasePack } from './types';

/** `‍` is the zero-width joiner Sinhala needs for the conjuncts (ඉංග්‍රීසි, යන්ත්‍රය, අවශ්‍යයි). */
const pack: PhrasePack = {
  lang: 'si',
  speech: 'si-LK',
  text: {
    hello: 'ආයුබෝවන්', goodbye: 'ගිහින් එන්නම්', please: 'කරුණාකර', thanks: 'ස්තුතියි', sorry: 'කණගාටුයි', excuse: 'සමාවෙන්න', yes: 'ඔව්', no: 'නැහැ',
    noUnderstand: 'මට තේරෙන්නේ නැහැ', speakEnglish: 'ඔබට ඉංග්‍රීසි කතා කරන්න පුළුවන්ද?', slower: 'කරුණාකර හෙමින් කතා කරන්න', wifi: 'මෙතන වයිෆයි තියෙනවාද?',
    menu: 'මෙනුව දෙන්න', water: 'වතුර වීදුරුවක් දෙන්න', bill: 'බිල දෙන්න', delicious: 'ගොඩක් රසයි', vegetarian: 'මම නිර්මාංශිකයි',
    allergy: 'මට ඇට වර්ග වලට අසාත්මිකතාවක් තියෙනවා', noSpicy: 'සැර නැතුව දෙන්න', cheers: 'චියර්ස්!',
    howMuch: 'මේක කීයද?', tooExpensive: 'ගොඩක් මිල වැඩියි', card: 'කාඩ් පත් ගන්නවාද?', atm: 'ළඟම තියෙන ඒටීඑම් යන්ත්‍රය කොහෙද?',
    toilet: 'වැසිකිළිය කොහෙද?', station: 'දුම්රිය ස්ථානය කොහෙද?', airport: 'ගුවන් තොටුපළට යන්න', hotel: 'මේ හෝටලයට යන්න',
    stopHere: 'මෙතන නවත්තන්න', left: 'වම', right: 'දකුණ', straight: 'කෙලින්', ticket: 'ටිකට් එකක් දෙන්න',
    help: 'උදව් කරන්න!', doctor: 'මට දොස්තර කෙනෙක් අවශ්‍යයි', police: 'පොලිසියට කතා කරන්න', pharmacy: 'ෆාමසිය කොහෙද?', lost: 'මට පාර වැරදුණා',
    n0: 'බිංදුව', n1: 'එක', n2: 'දෙක', n3: 'තුන', n4: 'හතර', n5: 'පහ', n6: 'හය', n7: 'හත', n8: 'අට', n9: 'නවය', n10: 'දහය', n100: 'සියය', n1000: 'දහසක්',
  },
  roman: {
    hello: 'aayubowan', goodbye: 'gihin ennam', please: 'karunaakara', thanks: 'stuthiyi', sorry: 'kanagaatuyi', excuse: 'samaawenna', yes: 'ov', no: 'nahae',
    noUnderstand: 'mata terenne nahae', speakEnglish: 'obata ingreesi kathaa karanna puluwandha', slower: 'karunaakara hemin kathaa karanna', wifi: 'methana waifai thiyenawaadha',
    menu: 'menuwa denna', water: 'watura weedhuruwak denna', bill: 'bila denna', delicious: 'godak rasai', vegetarian: 'mama nirmaamsikayi',
    allergy: 'mata aeta warga walata asaathmikathaawak thiyenawa', noSpicy: 'sara naethuwa denna', cheers: 'cheers',
    howMuch: 'meka kiyadha', tooExpensive: 'godak mila waediyi', card: 'kaad path gannawaadha', atm: 'langama thiyena ATM yanthraya kohedha',
    toilet: 'waesikiliya kohedha', station: 'dumriya sthaanaya kohedha', airport: 'guwan thotupolata yanna', hotel: 'me hotalayata yanna',
    stopHere: 'methana nawaththanna', left: 'wama', right: 'dakuna', straight: 'kelin', ticket: 'tikat ekak denna',
    help: 'udaw karanna', doctor: 'mata dostar kenek awashyayi', police: 'polisiyata kathaa karanna', pharmacy: 'phaarmasiya kohedha', lost: 'mata paara waerudunaa',
    n0: 'bindhuwa', n1: 'eka', n2: 'deka', n3: 'thuna', n4: 'hathara', n5: 'paha', n6: 'haya', n7: 'hatha', n8: 'ata', n9: 'nawaya', n10: 'dahaya', n100: 'siyaya', n1000: 'dahasak',
  },
  note: {
    ru: 'На Шри-Ланке здороваются «Аюбоуан», сложив ладони у груди; пожилых и монахов приветствуют особенно почтительно. Покачивание головой из стороны в сторону означает согласие, а не отказ, а обувь снимают у храмов и в домах.',
    en: 'Sri Lankans greet with “Ayubowan” and palms pressed together at the chest, with extra reverence for elders and monks. A sideways head wobble usually means yes or “I understand”, and shoes come off at temples and in homes.',
    es: 'En Sri Lanka se saluda con «Ayubowan» y las palmas juntas a la altura del pecho, con aún más respeto ante mayores y monjes. Un balanceo lateral de la cabeza suele significar sí o «entiendo», y uno se descalza en templos y casas.',
    de: 'In Sri Lanka grüßt man mit „Ayubowan“ und vor der Brust gefalteten Händen, Älteren und Mönchen gegenüber besonders ehrerbietig. Ein seitliches Kopfwackeln heißt meist Ja oder „verstanden“; vor Tempeln und Wohnungen zieht man die Schuhe aus.',
    fr: 'Au Sri Lanka, on salue par « Ayubowan » les mains jointes à hauteur de poitrine, avec un respect particulier pour les aînés et les moines. Un hochement de tête latéral veut souvent dire oui ou « j’ai compris », et l’on se déchausse dans les temples et les maisons.',
    it: 'In Sri Lanka si saluta con «Ayubowan» a mani giunte al petto, con particolare rispetto per anziani e monaci. Un dondolio laterale della testa di solito vuol dire sì o «ho capito», e ci si toglie le scarpe nei templi e nelle case.',
  },
  checked: '2026-10',
};

export default pack;
