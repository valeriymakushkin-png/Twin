import type { PhrasePack } from './types';

const pack: PhrasePack = {
  lang: 'el',
  speech: 'el-GR',
  text: {
    hello: 'Γεια σας', goodbye: 'Αντίο', please: 'Παρακαλώ', thanks: 'Ευχαριστώ', sorry: 'Συγγνώμη', excuse: 'Με συγχωρείτε', yes: 'Ναι', no: 'Όχι',
    noUnderstand: 'Δεν καταλαβαίνω', speakEnglish: 'Μιλάτε αγγλικά;', slower: 'Μπορείτε να μιλάτε πιο αργά, παρακαλώ;', wifi: 'Υπάρχει Wi-Fi εδώ;',
    menu: 'Τον κατάλογο, παρακαλώ', water: 'Ένα ποτήρι νερό, παρακαλώ', bill: 'Τον λογαριασμό, παρακαλώ', delicious: 'Είναι πολύ νόστιμο', vegetarian: 'Είμαι χορτοφάγος',
    allergy: 'Έχω αλλεργία στους ξηρούς καρπούς', noSpicy: 'Όχι πικάντικο, παρακαλώ', cheers: 'Γεια μας!',
    howMuch: 'Πόσο κάνει αυτό;', tooExpensive: 'Είναι πολύ ακριβό', card: 'Δέχεστε κάρτες;', atm: 'Πού είναι το πλησιέστερο ΑΤΜ;',
    toilet: 'Πού είναι η τουαλέτα;', station: 'Πού είναι ο σιδηροδρομικός σταθμός;', airport: 'Στο αεροδρόμιο, παρακαλώ', hotel: 'Σε αυτό το ξενοδοχείο, παρακαλώ',
    stopHere: 'Σταματήστε εδώ, παρακαλώ', left: 'Αριστερά', right: 'Δεξιά', straight: 'Ευθεία', ticket: 'Ένα εισιτήριο, παρακαλώ',
    help: 'Βοήθεια!', doctor: 'Χρειάζομαι γιατρό', police: 'Καλέστε την αστυνομία, παρακαλώ', pharmacy: 'Πού υπάρχει φαρμακείο;', lost: 'Έχω χαθεί',
    n0: 'μηδέν', n1: 'ένα', n2: 'δύο', n3: 'τρία', n4: 'τέσσερα', n5: 'πέντε', n6: 'έξι', n7: 'εφτά', n8: 'οχτώ', n9: 'εννιά', n10: 'δέκα', n100: 'εκατό', n1000: 'χίλια',
  },
  roman: {
    hello: 'Ya sas', goodbye: 'Adio', please: 'Parakalo', thanks: 'Efharisto', sorry: 'Signomi', excuse: 'Me sinhoreite', yes: 'Ne', no: 'Ohi',
    noUnderstand: 'Den katalaveno', speakEnglish: 'Milate angliká?', slower: 'Borite na milate pio arga, parakalo?', wifi: 'Iparhi vay-fay edho?',
    menu: 'Ton katalogo, parakalo', water: 'Ena potiri nero, parakalo', bill: 'Ton logariasmo, parakalo', delicious: 'Ine poli nostimo', vegetarian: 'Ime hortofagos',
    allergy: 'Eho alerghia stous ksirous karpous', noSpicy: 'Ohi pikantiko, parakalo', cheers: 'Ya mas!',
    howMuch: 'Poso kani afto?', tooExpensive: 'Ine poli akrivo', card: 'Dehesthe kartes?', atm: 'Pou ine to plisiestero ay-ti-em?',
    toilet: 'Pou ine i tualeta?', station: 'Pou ine o sidirodromikos stathmos?', airport: 'Sto aerodromio, parakalo', hotel: 'Se afto to ksenodohio, parakalo',
    stopHere: 'Stamatiste edho, parakalo', left: 'Aristera', right: 'Dheksia', straight: 'Efthia', ticket: 'Ena isitirio, parakalo',
    help: 'Voithia!', doctor: 'Hriazome yatro', police: 'Kaleste tin astynomia, parakalo', pharmacy: 'Pou iparhi farmakio?', lost: 'Eho hathi',
    n0: 'miden', n1: 'ena', n2: 'dhio', n3: 'tria', n4: 'tessera', n5: 'pente', n6: 'eksi', n7: 'efta', n8: 'ohto', n9: 'ennia', n10: 'dheka', n100: 'ekato', n1000: 'hilia',
  },
  note: {
    ru: 'По-гречески «ναι» («ne») означает «да», а «όχι» («ohi») — «нет»; греки отрицают, чуть запрокидывая голову назад, иногда с цоканьем. Не показывайте раскрытую ладонь пальцами к человеку: это грубый жест.',
    en: 'In Greek “ναι” (“ne”) means “yes” and “όχι” (“ohi”) means “no”; Greeks often say no with a slight upward tilt of the head, sometimes with a click of the tongue. Avoid pushing an open palm towards someone, as it is a rude gesture.',
    es: 'En griego “ναι” (“ne”) significa “sí” y “όχι” (“ohi”) “no”; los griegos suelen negar echando la cabeza ligeramente hacia atrás, a veces con un chasquido de lengua. Evita mostrar la palma abierta hacia alguien, es un gesto grosero.',
    de: 'Auf Griechisch heißt „ναι“ („ne“) ja und „όχι“ („ohi“) nein; Griechen verneinen oft mit einem leichten Kopfnicken nach oben, manchmal mit Zungenschnalzen. Die offene Handfläche nicht auf jemanden richten, das gilt als unhöflich.',
    fr: 'En grec, « ναι » (« ne ») veut dire « oui » et « όχι » (« ohi ») « non » ; on dit souvent non en relevant légèrement la tête, parfois avec un claquement de langue. Évitez de tendre la paume ouverte vers quelqu’un : le geste est grossier.',
    it: 'In greco “ναι” (“ne”) vuol dire “sì” e “όχι” (“ohi”) “no”; i greci spesso negano rovesciando leggermente la testa all’indietro, a volte con uno schiocco di lingua. Evitate di puntare il palmo aperto verso qualcuno: è un gesto offensivo.',
  },
  checked: '2026-10',
};

export default pack;
