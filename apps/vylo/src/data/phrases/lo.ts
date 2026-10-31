import type { PhrasePack } from './types';

const pack: PhrasePack = {
  lang: 'lo',
  speech: 'lo-LA',
  text: {
    hello: 'ສະບາຍດີ', goodbye: 'ລາກ່ອນ', please: 'ກະລຸນາ', thanks: 'ຂອບໃຈ', sorry: 'ຂໍໂທດ', excuse: 'ຂໍໂທດແດ່', yes: 'ແມ່ນ', no: 'ບໍ່ແມ່ນ',
    noUnderstand: 'ບໍ່ເຂົ້າໃຈ', speakEnglish: 'ເວົ້າພາສາອັງກິດໄດ້ບໍ?', slower: 'ກະລຸນາເວົ້າຊ້າໆ ແດ່', wifi: 'ຢູ່ນີ້ມີວາຍຟາຍບໍ?',
    menu: 'ຂໍເມນູແດ່', water: 'ຂໍນ້ຳໜຶ່ງແກ້ວ', bill: 'ຂໍຄິດເງິນແດ່', delicious: 'ແຊບຫຼາຍ', vegetarian: 'ຂ້ອຍກິນເຈ',
    allergy: 'ຂ້ອຍແພ້ຖົ່ວ', noSpicy: 'ບໍ່ເອົາເຜັດ', cheers: 'ຕຳແກ້ວ!',
    howMuch: 'ອັນນີ້ເທົ່າໃດ?', tooExpensive: 'ແພງເກີນໄປ', card: 'ຮັບບັດບໍ?', atm: 'ຕູ້ເອທີເອັມທີ່ໃກ້ທີ່ສຸດຢູ່ໃສ?',
    toilet: 'ຫ້ອງນ້ຳຢູ່ໃສ?', station: 'ສະຖານີລົດໄຟຢູ່ໃສ?', airport: 'ໄປສະໜາມບິນ', hotel: 'ໄປໂຮງແຮມນີ້',
    stopHere: 'ຈອດບ່ອນນີ້', left: 'ຊ້າຍ', right: 'ຂວາ', straight: 'ໄປຊື່ໆ', ticket: 'ຂໍປີ້ໜຶ່ງໃບ',
    help: 'ຊ່ວຍແດ່!', doctor: 'ຂ້ອຍຕ້ອງການໝໍ', police: 'ກະລຸນາເອີ້ນຕຳຫຼວດ', pharmacy: 'ຮ້ານຂາຍຢາຢູ່ໃສ?', lost: 'ຂ້ອຍຫຼົງທາງ',
    n0: 'ສູນ', n1: 'ໜຶ່ງ', n2: 'ສອງ', n3: 'ສາມ', n4: 'ສີ່', n5: 'ຫ້າ', n6: 'ຫົກ', n7: 'ເຈັດ', n8: 'ແປດ', n9: 'ເກົ້າ', n10: 'ສິບ', n100: 'ໜຶ່ງຮ້ອຍ', n1000: 'ໜຶ່ງພັນ',
  },
  roman: {
    hello: 'sa-bai-dee', goodbye: 'laa kon', please: 'ka-lu-naa', thanks: 'khop-chai', sorry: 'kho-thot', excuse: 'kho-thot dae', yes: 'maen', no: 'bo maen',
    noUnderstand: 'bo khao-chai', speakEnglish: 'wao paa-saa ang-kit dai bo', slower: 'ka-lu-naa wao saa-saa dae', wifi: 'yuu nee mee wai-fai bo',
    menu: 'kho meh-nuu dae', water: 'kho nam nueng kaew', bill: 'kho khit ngern dae', delicious: 'saep lai', vegetarian: 'khoi kin jay',
    allergy: 'khoi phae tua', noSpicy: 'bo ao phet', cheers: 'tam kaew',
    howMuch: 'an-nee thao-dai', tooExpensive: 'phaeng kern pai', card: 'hap bat bo', atm: 'tuu ay-tee-em tee kai tee sut yuu sai',
    toilet: 'hong nam yuu sai', station: 'sa-tha-nee lot-fai yuu sai', airport: 'pai sa-naam-bin', hotel: 'pai hong-haem nee',
    stopHere: 'jot bon nee', left: 'saai', right: 'khwaa', straight: 'pai sue-sue', ticket: 'kho pee nueng bai',
    help: 'suay dae', doctor: 'khoi tong-kan mo', police: 'ka-lu-naa oen tam-luat', pharmacy: 'haan khai yaa yuu sai', lost: 'khoi long thaang',
    n0: 'suun', n1: 'nueng', n2: 'song', n3: 'saam', n4: 'see', n5: 'haa', n6: 'hok', n7: 'jet', n8: 'paet', n9: 'kao', n10: 'sip', n100: 'nueng hoy', n1000: 'nueng phan',
  },
  note: {
    ru: 'В Лаосе здороваются, сложив ладони у груди и слегка поклонившись (ноп); чем старше человек, тем выше руки. Частицы «дае» и «бо» (в конце вопроса) смягчают просьбу и вопрос, а головы людей не касаются.',
    en: 'In Laos people greet with palms pressed together and a slight bow (the nop); the older the person, the higher the hands. Adding “dae” to a request softens it, and the head is considered sacred, so never touch it.',
    es: 'En Laos se saluda con las palmas juntas y una leve inclinación (el nop); cuanto mayor es la persona, más arriba van las manos. Añadir «dae» suaviza una petición, y la cabeza se considera sagrada, así que no se toca.',
    de: 'In Laos grüßt man mit zusammengelegten Handflächen und leichter Verbeugung (Nop); je älter das Gegenüber, desto höher die Hände. Ein angehängtes „dae“ macht eine Bitte weicher, und der Kopf gilt als heilig, den berührt man nicht.',
    fr: 'Au Laos, on salue les mains jointes avec une légère inclinaison (le nop) ; plus la personne est âgée, plus les mains montent. Ajouter « dae » adoucit une demande, et la tête étant sacrée, on ne la touche jamais.',
    it: 'In Laos si saluta a mani giunte con un lieve inchino (il nop): più la persona è anziana, più le mani salgono. Aggiungere «dae» addolcisce una richiesta, e la testa è considerata sacra, quindi non si tocca.',
  },
  checked: '2026-10',
};

export default pack;
