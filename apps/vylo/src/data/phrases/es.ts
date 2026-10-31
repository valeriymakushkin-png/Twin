import type { PhrasePack } from './types';

const pack: PhrasePack = {
  lang: 'es',
  speech: 'es-ES',
  text: {
    hello: 'Hola', goodbye: 'Adiós', please: 'Por favor', thanks: 'Gracias', sorry: 'Lo siento', excuse: 'Disculpe', yes: 'Sí', no: 'No',
    noUnderstand: 'No entiendo', speakEnglish: '¿Habla inglés?', slower: '¿Puede hablar más despacio, por favor?', wifi: '¿Hay wifi aquí?',
    menu: 'El menú, por favor', water: 'Un vaso de agua, por favor', bill: 'La cuenta, por favor', delicious: 'Está delicioso', vegetarian: 'Soy vegetariano/a',
    allergy: 'Soy alérgico/a a los frutos secos', noSpicy: 'Sin picante, por favor', cheers: '¡Salud!',
    howMuch: '¿Cuánto cuesta esto?', tooExpensive: 'Es demasiado caro', card: '¿Aceptan tarjeta?', atm: '¿Dónde hay un cajero automático?',
    toilet: '¿Dónde está el baño?', station: '¿Dónde está la estación de tren?', airport: 'Al aeropuerto, por favor', hotel: 'A este hotel, por favor',
    stopHere: 'Pare aquí, por favor', left: 'Izquierda', right: 'Derecha', straight: 'Todo recto', ticket: 'Un billete/boleto, por favor',
    help: '¡Socorro!', doctor: 'Necesito un médico', police: 'Llame a la policía, por favor', pharmacy: '¿Dónde hay una farmacia?', lost: 'Estoy perdido/a',
    n0: 'cero', n1: 'uno', n2: 'dos', n3: 'tres', n4: 'cuatro', n5: 'cinco', n6: 'seis', n7: 'siete', n8: 'ocho', n9: 'nueve', n10: 'diez', n100: 'cien', n1000: 'mil',
  },
  note: {
    ru: 'Незнакомым и старшим говорят «usted»; в Испании молодёжь быстро переходит на «tú». Слова различаются: билет — «billete» в Испании и «boleto» в Латинской Америке, «todo recto» там чаще «derecho».',
    en: 'Use “usted” with strangers and older people; in Spain younger people switch to “tú” quickly. Some words differ by region: ticket is “billete” in Spain but “boleto” in Latin America, and “straight on” is “todo recto” in Spain but “derecho” in Latin America.',
    es: 'Con desconocidos y personas mayores se usa «usted»; en España los jóvenes pasan enseguida al «tú». Hay variantes regionales: «billete» en España y «boleto» en América, «todo recto» en España y «derecho» en América.',
    de: 'Fremde und ältere Menschen siezt man mit „usted“; in Spanien wechseln Jüngere schnell zum „tú“. Regional gibt es Unterschiede: „billete“ in Spanien, „boleto“ in Lateinamerika, „todo recto“ in Spanien, „derecho“ in Lateinamerika.',
    fr: 'On dit « usted » aux inconnus et aux personnes âgées ; en Espagne, les jeunes passent vite au « tú ». Les mots varient : « billete » en Espagne, « boleto » en Amérique latine, « todo recto » en Espagne, « derecho » en Amérique latine.',
    it: 'Con sconosciuti e anziani si usa «usted»; in Spagna i giovani passano presto al «tú». Ci sono varianti regionali: «billete» in Spagna e «boleto» in America latina, «todo recto» in Spagna e «derecho» in America latina.',
  },
  checked: '2026-10',
};

export default pack;
