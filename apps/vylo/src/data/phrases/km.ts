import type { PhrasePack } from './types';

const pack: PhrasePack = {
  lang: 'km',
  speech: 'km-KH',
  text: {
    hello: 'សួស្តី', goodbye: 'ជម្រាបលា', please: 'សូម', thanks: 'អរគុណ', sorry: 'សុំទោស', excuse: 'សូមអភ័យទោស', yes: 'បាទ/ចាស', no: 'ទេ',
    noUnderstand: 'ខ្ញុំមិនយល់ទេ', speakEnglish: 'តើអ្នកចេះនិយាយភាសាអង់គ្លេសទេ?', slower: 'សូមនិយាយយឺតៗបន្តិច', wifi: 'នៅទីនេះមានវ៉ាយហ្វាយទេ?',
    menu: 'សូមមើលម៉ឺនុយ', water: 'សូមទឹកមួយកែវ', bill: 'សូមគិតលុយ', delicious: 'ឆ្ងាញ់ណាស់', vegetarian: 'ខ្ញុំញ៉ាំបួស',
    allergy: 'ខ្ញុំមានប្រតិកម្មនឹងសណ្តែកដី', noSpicy: 'សូមកុំហឹរ', cheers: 'ជល់មួយ!',
    howMuch: 'នេះថ្លៃប៉ុន្មាន?', tooExpensive: 'ថ្លៃពេក', card: 'ទទួលកាតទេ?', atm: 'ម៉ាស៊ីនអេធីអឹមនៅជិតបំផុតនៅឯណា?',
    toilet: 'បន្ទប់ទឹកនៅឯណា?', station: 'ស្ថានីយ៍រថភ្លើងនៅឯណា?', airport: 'សូមទៅព្រលានយន្តហោះ', hotel: 'សូមទៅសណ្ឋាគារនេះ',
    stopHere: 'សូមឈប់ត្រង់នេះ', left: 'ឆ្វេង', right: 'ស្តាំ', straight: 'ត្រង់ទៅមុខ', ticket: 'សូមសំបុត្រមួយសន្លឹក',
    help: 'ជួយផង!', doctor: 'ខ្ញុំត្រូវការគ្រូពេទ្យ', police: 'សូមហៅប៉ូលិស', pharmacy: 'ឱសថស្ថាននៅឯណា?', lost: 'ខ្ញុំវង្វេងផ្លូវ',
    n0: 'សូន្យ', n1: 'មួយ', n2: 'ពីរ', n3: 'បី', n4: 'បួន', n5: 'ប្រាំ', n6: 'ប្រាំមួយ', n7: 'ប្រាំពីរ', n8: 'ប្រាំបី', n9: 'ប្រាំបួន', n10: 'ដប់', n100: 'មួយរយ', n1000: 'មួយពាន់',
  },
  roman: {
    hello: 'suostei', goodbye: 'chum-reap lea', please: 'som', thanks: 'or-kun', sorry: 'som toh', excuse: 'som a-phay toh', yes: 'baat / chaas', no: 'te',
    noUnderstand: 'khnyom min yul te', speakEnglish: 'tae neak cheh niyeay pheasa ang-kles te', slower: 'som niyeay yeut-yeut bon-toch', wifi: 'nov ti-nih mean wai-fai te',
    menu: 'som meul menu', water: 'som teuk muoy kaeo', bill: 'som kit luy', delicious: 'chngain nas', vegetarian: 'khnyom nyam buas',
    allergy: 'khnyom mean pra-tik-kam nung sandaek dei', noSpicy: 'som kom hoeu', cheers: 'chol muoy',
    howMuch: 'nih thlay ponman', tooExpensive: 'thlay pek', card: 'tuo-tuol kat te', atm: 'masheen ay-ti-em nov chit bom-phot nov ae na',
    toilet: 'bon-tup teuk nov ae na', station: 'sthani roth-plerng nov ae na', airport: 'som tov pro-lean yon-hoh', hotel: 'som tov san-tha-kea nih',
    stopHere: 'som chhop trong nih', left: 'chveng', right: 'sdam', straight: 'trong tov mukh', ticket: 'som som-bot muoy son-lek',
    help: 'chuoy phong', doctor: 'khnyom trov kar kru-pet', police: 'som hav po-lis', pharmacy: 'au-sa-tha-sthan nov ae na', lost: 'khnyom vong-veng phlov',
    n0: 'soun', n1: 'muoy', n2: 'pir', n3: 'bei', n4: 'buon', n5: 'pram', n6: 'pram muoy', n7: 'pram pir', n8: 'pram bei', n9: 'pram buon', n10: 'dop', n100: 'muoy roy', n1000: 'muoy poan',
  },
  note: {
    ru: 'Вежливость в кхмерском зависит от пола: мужчина говорит «бат», женщина «чаз» (вместо «да» и в конце фраз). Здороваются, сложив ладони у груди (сампеах): чем выше руки, тем больше почтения; детей и ровесников так не приветствуют.',
    en: 'Politeness depends on gender: men say “baat” and women “chaas” for yes and to end polite sentences. Greet with palms together in front of the chest (the sampeah); the higher the hands, the more respect, and never touch anyone’s head.',
    es: 'La cortesía depende del género: los hombres dicen «baat» y las mujeres «chaas» para decir sí y cerrar las frases corteses. Se saluda con las palmas juntas ante el pecho (sampeah); cuanto más altas las manos, más respeto, y no se toca la cabeza de nadie.',
    de: 'Die Höflichkeitsform hängt vom Geschlecht ab: Männer sagen „baat“, Frauen „chaas“, als Ja und am Satzende. Man grüßt mit vor der Brust gefalteten Händen (Sampeah); je höher die Hände, desto mehr Respekt. Den Kopf eines Menschen fasst man nicht an.',
    fr: 'La politesse dépend du genre : les hommes disent « baat », les femmes « chaas », pour oui et en fin de phrase. On salue les mains jointes devant la poitrine (le sampeah) ; plus les mains sont hautes, plus on marque de respect, et on ne touche pas la tête d’autrui.',
    it: 'La cortesia dipende dal genere: gli uomini dicono «baat», le donne «chaas», per sì e a fine frase. Si saluta a mani giunte davanti al petto (il sampeah): più sono alte, più è il rispetto, e non si tocca la testa a nessuno.',
  },
  checked: '2026-10',
};

export default pack;
