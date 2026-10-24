import type { VisaGuide } from '../types';

const guide: VisaGuide = {
  code: 'DO',
  checked: '2026-10',
  links: { immigration: 'https://migracion.gob.do' },
  forms: [{ name: 'E-Ticket', url: 'https://eticket.migracion.gob.do', fee: { kind: 'free' } }],
  docs: ['returnTicket', 'booking'],
  passportMonths: 0,
  waivers: [
    {
      holds: ['visaUS', 'visaCA', 'visaGB', 'visaSchengen', 'resUS', 'resCA', 'resGB', 'resEU'],
      status: 'free',
      days: 30,
    },
  ],
  hackScope: [null, null, null],
  pitfallScope: [null, null, null],
  text: {
    ru: {
      summary:
        'Граждане России, Казахстана, Украины, Грузии, США, ЕС, Великобритании, Канады и большей части Латинской Америки въезжают без визы на 30 дней по туристической карте за 10 $, которая уже включена в стоимость авиабилета. Тем, кому виза нужна (например, гражданам Индии или Китая), достаточно действующей визы или ВНЖ США, Канады, Великобритании или Шенгена. Все заполняют бесплатную онлайн-форму E-Ticket.',
      apply:
        'Заполните E-Ticket на сайте миграционной службы за несколько дней до вылета: одна форма на въезд и одна на выезд, на семью можно одну. Покажите QR-код при регистрации и на границе. Туристическая карта (10 $) при перелёте включена в билет; при прибытии морем или по суше её покупают на месте. Остальным нужна виза в консульстве Доминиканы.',
      hacks: [
        'Хотите остаться дольше 30 дней? Продлевать заранее не обязательно: при вылете платите в аэропорту сбор за превышение срока — около 2500 песо за срок до 90 дней, дальше тариф растёт. Сумму можно заранее рассчитать на сайте миграционной службы.',
        'Форма E-Ticket одна на всю семью или группу, живущую по одному адресу, — экономит время у стойки.',
        'Длинная очередь на паспортный контроль в Пунта-Кане? С заранее заполненным E-Ticket вы пройдёте быстрее, а без него вас отправят заполнять форму с телефона.',
      ],
      pitfalls: [
        'Сайты-посредники берут 20–60 $ за «оформление» бесплатного E-Ticket. Официальный адрес — eticket.migracion.gob.do.',
        'Дольше года просрочки: огромный сбор и риск запрета на въезд. Держите превышение срока в пределах нескольких месяцев.',
        'Если E-Ticket заполнен с ошибкой в номере паспорта, на стойке регистрации могут не пустить на рейс — проще сразу создать новую форму.',
      ],
      waivers: [
        'Граждане стран, которым нужна виза, въезжают без неё на 30 дней по туристической карте, если у них есть действующая виза США, Канады, Великобритании или Шенгена либо вид на жительство одной из этих стран. Виза должна быть действительна на весь срок поездки; авиакомпании проверяют её при регистрации.',
      ],
      passports: {
        RU: 'Россияне въезжают без визы на 30 дней. Российские карты не работают — берите доллары наличными.',
        IN: 'Гражданам Индии виза не нужна, если у них есть действующая виза или ВНЖ США, Канады, Великобритании или Шенгена; иначе нужна консульская виза.',
        US: 'Американцы въезжают на 30 дней без визы; грин-карта и ВНЖ США дают такую же возможность гражданам стран, которым нужна виза.',
      },
    },
    en: {
      summary:
        'Citizens of Russia, Kazakhstan, Ukraine, Georgia, the US, the EU, the UK, Canada and most of Latin America enter visa-free for 30 days on a US$10 tourist card that is already built into your airfare. Those who would need a visa (Indian or Chinese citizens, for example) get in on a valid US, Canadian, UK or Schengen visa or residence permit. Everyone files the free online E-Ticket.',
      apply:
        'Fill in the E-Ticket on the immigration site a few days before departure: one form for arrival and one for departure, and one form can cover a family. Show the QR code at check-in and at the border. The tourist card (US$10) is included in air tickets; arriving by sea or land, you buy it on the spot. Everyone else needs a visa from a Dominican consulate.',
      hacks: [
        'Want more than 30 days? You do not need to extend in advance: on departure you pay an overstay fee at the airport — around RD$2,500 for up to 90 days, rising after that. You can calculate the amount beforehand on the immigration site.',
        'One E-Ticket can cover a whole family or group sharing an address — a time-saver at check-in.',
        'Long queue at Punta Cana passport control? A completed E-Ticket speeds you through; without one you will be sent to fill it in on your phone.',
      ],
      pitfalls: [
        'Agency sites charge US$20–60 to “process” the free E-Ticket. The official address is eticket.migracion.gob.do.',
        'Overstaying beyond a year means a steep fee and a risk of an entry ban. Keep any overstay to a few months.',
        'An E-Ticket with a typo in the passport number can get you stopped at check-in — it is quicker to create a new form.',
      ],
      waivers: [
        'Nationals who would need a visa enter visa-free for 30 days on the tourist card if they hold a valid US, Canadian, UK or Schengen visa or a residence permit from one of these countries. The visa must be valid for the whole trip; airlines check it at check-in.',
      ],
      passports: {
        RU: 'Russians enter visa-free for 30 days. Russian cards do not work, so bring US dollars in cash.',
        IN: 'Indian citizens need no visa if they hold a valid US, Canadian, UK or Schengen visa or residence permit; otherwise a consular visa is required.',
        US: 'Americans enter visa-free for 30 days; a US green card or visa gives visa-required nationals the same access.',
      },
    },
    es: {
      summary:
        'Los ciudadanos de Rusia, Kazajistán, Ucrania, Georgia, EE. UU., la UE, Reino Unido, Canadá y casi toda Latinoamérica entran sin visa por 30 días con la tarjeta de turista de 10 US$, que ya viene incluida en el boleto de avión. Quien necesitaría visa (por ejemplo, ciudadanos de India o China) entra con una visa o residencia vigente de EE. UU., Canadá, Reino Unido o Schengen. Todos llenan el E-Ticket gratuito en línea.',
      apply:
        'Llena el E-Ticket en el sitio de Migración unos días antes del vuelo: un formulario para la llegada y otro para la salida, y uno puede cubrir a toda la familia. Muestra el código QR al facturar y en la frontera. La tarjeta de turista (10 US$) va incluida en el boleto aéreo; si llegas por mar o por tierra, se compra allí mismo. El resto necesita visa de un consulado dominicano.',
      hacks: [
        '¿Quieres quedarte más de 30 días? No hace falta prorrogar antes: al salir pagas en el aeropuerto la tasa por estadía extendida, unos 2500 pesos dominicanos hasta 90 días, y sube a partir de ahí. Puedes calcular el importe antes en el sitio de Migración.',
        'Un solo E-Ticket sirve para toda una familia o grupo con la misma dirección, lo que ahorra tiempo al facturar.',
        '¿Cola larga en el control de pasaportes de Punta Cana? Con el E-Ticket ya hecho pasas más rápido; sin él te mandarán a rellenarlo en el móvil.',
      ],
      pitfalls: [
        'Las webs intermediarias cobran 20–60 US$ por «tramitar» el E-Ticket, que es gratis. La dirección oficial es eticket.migracion.gob.do.',
        'Pasarte más de un año implica una tasa muy alta y riesgo de prohibición de entrada. Limita el exceso a unos pocos meses.',
        'Un E-Ticket con una errata en el número de pasaporte puede frenarte en la facturación: es más rápido crear uno nuevo.',
      ],
      waivers: [
        'Quien necesitaría visa entra sin ella por 30 días con la tarjeta de turista si tiene una visa vigente de EE. UU., Canadá, Reino Unido o Schengen, o un permiso de residencia de uno de esos países. La visa debe estar vigente durante todo el viaje; las aerolíneas la revisan al facturar.',
      ],
      passports: {
        RU: 'Los rusos entran sin visa por 30 días. Las tarjetas rusas no funcionan, así que lleva dólares en efectivo.',
        IN: 'Los ciudadanos indios no necesitan visa si tienen visa o residencia vigente de EE. UU., Canadá, Reino Unido o Schengen; si no, necesitan visa consular.',
        US: 'Los estadounidenses entran sin visa por 30 días; la green card o una visa de EE. UU. da el mismo acceso a quienes necesitan visa.',
      },
    },
    de: {
      summary:
        'Staatsangehörige Russlands, Kasachstans, der Ukraine, Georgiens, der USA, der EU, Großbritanniens, Kanadas und der meisten Länder Lateinamerikas reisen 30 Tage visumfrei mit einer Touristenkarte für 10 US$ ein, die bereits im Flugpreis steckt. Wer sonst ein Visum bräuchte (etwa Inder oder Chinesen), kommt mit einem gültigen Visum oder Aufenthaltstitel der USA, Kanadas, Großbritanniens oder des Schengenraums hinein. Alle füllen das kostenlose Online-E-Ticket aus.',
      apply:
        'Füll das E-Ticket ein paar Tage vor dem Abflug auf der Seite der Migrationsbehörde aus: ein Formular für die Ein- und eines für die Ausreise, eines kann eine ganze Familie abdecken. Zeig den QR-Code beim Check-in und an der Grenze. Die Touristenkarte (10 US$) ist im Flugticket enthalten; bei Ankunft per Schiff oder über Land kaufst du sie vor Ort. Alle anderen brauchen ein Visum eines dominikanischen Konsulats.',
      hacks: [
        'Mehr als 30 Tage? Vorher verlängern musst du nicht: Bei der Ausreise zahlst du am Flughafen eine Gebühr für den längeren Aufenthalt – rund 2.500 RD$ für bis zu 90 Tage, danach mehr. Den Betrag kannst du vorab auf der Seite der Migrationsbehörde berechnen.',
        'Ein E-Ticket deckt eine ganze Familie oder Gruppe mit gleicher Adresse ab – das spart Zeit am Check-in.',
        'Lange Schlange an der Passkontrolle in Punta Cana? Mit fertigem E-Ticket geht es schneller; ohne wirst du zum Ausfüllen aufs Handy geschickt.',
      ],
      pitfalls: [
        'Vermittlerseiten verlangen 20–60 US$ für die „Bearbeitung“ des kostenlosen E-Tickets. Die offizielle Adresse ist eticket.migracion.gob.do.',
        'Wer über ein Jahr überzieht, zahlt eine hohe Gebühr und riskiert eine Einreisesperre. Halte die Überziehung bei wenigen Monaten.',
        'Ein E-Ticket mit Tippfehler in der Passnummer kann dich beim Check-in aufhalten – schneller ist ein neues Formular.',
      ],
      waivers: [
        'Visumpflichtige reisen 30 Tage visumfrei mit der Touristenkarte ein, wenn sie ein gültiges Visum der USA, Kanadas, Großbritanniens oder des Schengenraums oder einen Aufenthaltstitel eines dieser Länder haben. Das Visum muss für die gesamte Reise gültig sein; Airlines prüfen es beim Check-in.',
      ],
      passports: {
        RU: 'Russen reisen 30 Tage visumfrei ein. Russische Karten funktionieren nicht, nimm also US-Dollar in bar mit.',
        IN: 'Indische Staatsangehörige brauchen kein Visum, wenn sie ein gültiges Visum oder einen Aufenthaltstitel der USA, Kanadas, Großbritanniens oder des Schengenraums haben; sonst ist ein Konsularvisum nötig.',
        US: 'US-Bürger reisen 30 Tage visumfrei ein; eine Green Card oder ein US-Visum verschafft Visumpflichtigen denselben Zugang.',
      },
    },
    fr: {
      summary:
        'Les ressortissants de Russie, du Kazakhstan, d’Ukraine, de Géorgie, des États-Unis, de l’UE, du Royaume-Uni, du Canada et de la plupart des pays d’Amérique latine entrent sans visa pour 30 jours avec une carte de tourisme à 10 US$, déjà incluse dans le billet d’avion. Ceux qui auraient besoin d’un visa (Indiens ou Chinois, par exemple) entrent avec un visa ou un titre de séjour valide des États-Unis, du Canada, du Royaume-Uni ou de Schengen. Tout le monde remplit l’E-Ticket gratuit en ligne.',
      apply:
        'Remplissez l’E-Ticket sur le site de l’immigration quelques jours avant le départ : un formulaire pour l’arrivée, un pour le départ, et un seul peut couvrir une famille. Présentez le QR code à l’enregistrement et à la frontière. La carte de tourisme (10 US$) est incluse dans les billets d’avion ; par mer ou par la route, elle s’achète sur place. Les autres ont besoin d’un visa d’un consulat dominicain.',
      hacks: [
        'Envie de rester plus de 30 jours ? Inutile de prolonger à l’avance : au départ, vous payez à l’aéroport une taxe de séjour prolongé, environ 2 500 RD$ jusqu’à 90 jours, davantage au-delà. Le montant se calcule à l’avance sur le site de l’immigration.',
        'Un seul E-Ticket couvre une famille ou un groupe à la même adresse — un gain de temps à l’enregistrement.',
        'Longue file au contrôle des passeports de Punta Cana ? Avec l’E-Ticket déjà rempli, vous passez plus vite ; sans lui, on vous enverra le remplir sur votre téléphone.',
      ],
      pitfalls: [
        'Des sites intermédiaires facturent 20 à 60 US$ pour « traiter » l’E-Ticket gratuit. L’adresse officielle est eticket.migracion.gob.do.',
        'Dépasser d’un an ou plus coûte très cher et expose à une interdiction d’entrée. Limitez le dépassement à quelques mois.',
        'Un E-Ticket avec une coquille dans le numéro de passeport peut bloquer l’enregistrement : il est plus rapide d’en créer un nouveau.',
      ],
      waivers: [
        'Les ressortissants soumis au visa entrent sans visa pour 30 jours avec la carte de tourisme s’ils détiennent un visa valide des États-Unis, du Canada, du Royaume-Uni ou de Schengen, ou un titre de séjour de l’un de ces pays. Le visa doit être valide pendant tout le voyage ; les compagnies le vérifient à l’enregistrement.',
      ],
      passports: {
        RU: 'Les Russes entrent sans visa pour 30 jours. Les cartes russes ne fonctionnent pas : emportez des dollars en espèces.',
        IN: 'Les citoyens indiens n’ont pas besoin de visa s’ils détiennent un visa ou un titre de séjour valide des États-Unis, du Canada, du Royaume-Uni ou de Schengen ; sinon, un visa consulaire est nécessaire.',
        US: 'Les Américains entrent sans visa pour 30 jours ; une green card ou un visa américain ouvre le même accès aux nationalités soumises au visa.',
      },
    },
    it: {
      summary:
        'I cittadini di Russia, Kazakistan, Ucraina, Georgia, Stati Uniti, UE, Regno Unito, Canada e quasi tutta l’America Latina entrano senza visto per 30 giorni con la carta turistica da 10 US$, già inclusa nel biglietto aereo. Chi avrebbe bisogno del visto (per esempio i cittadini di India o Cina) entra con un visto o un permesso di soggiorno valido di Stati Uniti, Canada, Regno Unito o Schengen. Tutti compilano l’E-Ticket gratuito online.',
      apply:
        'Compila l’E-Ticket sul sito dell’immigrazione qualche giorno prima della partenza: un modulo per l’arrivo e uno per la partenza, e uno solo può valere per tutta la famiglia. Mostra il codice QR al check-in e alla frontiera. La carta turistica (10 US$) è inclusa nei biglietti aerei; se arrivi via mare o via terra si compra sul posto. Gli altri hanno bisogno del visto di un consolato dominicano.',
      hacks: [
        'Vuoi restare più di 30 giorni? Non serve prorogare prima: alla partenza paghi in aeroporto la tassa per la permanenza prolungata, circa 2.500 pesos dominicani fino a 90 giorni, poi sale. Puoi calcolare l’importo in anticipo sul sito dell’immigrazione.',
        'Un solo E-Ticket vale per un’intera famiglia o un gruppo con lo stesso indirizzo: si risparmia tempo al check-in.',
        'Coda lunga al controllo passaporti di Punta Cana? Con l’E-Ticket già compilato passi prima; senza ti mandano a compilarlo sul telefono.',
      ],
      pitfalls: [
        'I siti intermediari chiedono 20–60 US$ per «gestire» l’E-Ticket gratuito. L’indirizzo ufficiale è eticket.migracion.gob.do.',
        'Sforare di oltre un anno significa una tassa salatissima e il rischio di divieto d’ingresso. Contieni lo sforamento a pochi mesi.',
        'Un E-Ticket con un errore nel numero di passaporto può bloccarti al check-in: è più rapido crearne uno nuovo.',
      ],
      waivers: [
        'Chi avrebbe bisogno del visto entra senza per 30 giorni con la carta turistica se ha un visto valido di Stati Uniti, Canada, Regno Unito o Schengen, o un permesso di soggiorno di uno di questi paesi. Il visto deve essere valido per tutto il viaggio; le compagnie lo controllano al check-in.',
      ],
      passports: {
        RU: 'I russi entrano senza visto per 30 giorni. Le carte russe non funzionano, quindi porta dollari in contanti.',
        IN: 'I cittadini indiani non hanno bisogno del visto se hanno un visto o un permesso valido di Stati Uniti, Canada, Regno Unito o Schengen; altrimenti serve il visto consolare.',
        US: 'Gli statunitensi entrano senza visto per 30 giorni; una green card o un visto USA dà lo stesso accesso a chi avrebbe bisogno del visto.',
      },
    },
  },
};

export default guide;
