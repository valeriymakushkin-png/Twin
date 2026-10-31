import type { PhrasePack } from './types';

const pack: PhrasePack = {
  lang: 'ru',
  speech: 'ru-RU',
  text: {
    hello: 'Здравствуйте', goodbye: 'До свидания', please: 'Пожалуйста', thanks: 'Спасибо', sorry: 'Простите', excuse: 'Извините', yes: 'Да', no: 'Нет',
    noUnderstand: 'Я не понимаю', speakEnglish: 'Вы говорите по-английски?', slower: 'Говорите помедленнее, пожалуйста', wifi: 'Здесь есть Wi-Fi?',
    menu: 'Меню, пожалуйста', water: 'Стакан воды, пожалуйста', bill: 'Счёт, пожалуйста', delicious: 'Очень вкусно', vegetarian: 'Я вегетарианец/вегетарианка',
    allergy: 'У меня аллергия на орехи', noSpicy: 'Не острое, пожалуйста', cheers: 'За здоровье!',
    howMuch: 'Сколько это стоит?', tooExpensive: 'Это слишком дорого', card: 'Можно оплатить картой?', atm: 'Где ближайший банкомат?',
    toilet: 'Где туалет?', station: 'Где вокзал?', airport: 'В аэропорт, пожалуйста', hotel: 'В этот отель, пожалуйста',
    stopHere: 'Остановите здесь, пожалуйста', left: 'Налево', right: 'Направо', straight: 'Прямо', ticket: 'Один билет, пожалуйста',
    help: 'Помогите!', doctor: 'Мне нужен врач', police: 'Вызовите полицию, пожалуйста', pharmacy: 'Где аптека?', lost: 'Я заблудился/заблудилась',
    n0: 'ноль', n1: 'один', n2: 'два', n3: 'три', n4: 'четыре', n5: 'пять', n6: 'шесть', n7: 'семь', n8: 'восемь', n9: 'девять', n10: 'десять', n100: 'сто', n1000: 'тысяча',
  },
  roman: {
    hello: 'Zdravstvuyte', goodbye: 'Do svidaniya', please: 'Pozhaluysta', thanks: 'Spasibo', sorry: 'Prostite', excuse: 'Izvinite', yes: 'Da', no: 'Nyet',
    noUnderstand: 'Ya ne ponimayu', speakEnglish: 'Vy govorite po-angliyski?', slower: 'Govorite pomedlennee, pozhaluysta', wifi: 'Zdyes yest vay-fay?',
    menu: 'Menyu, pozhaluysta', water: 'Stakan vody, pozhaluysta', bill: 'Shchyot,pozhaluysta', delicious: 'Ochen vkusno', vegetarian: 'Ya vegetaryanets/vegetaryanka',
    allergy: 'U menya allergiya na orekhi', noSpicy: 'Ne ostroye, pozhaluysta', cheers: 'Za zdorovye!',
    howMuch: 'Skolko eto stoit?', tooExpensive: 'Eto slishkom dorogo', card: 'Mozhno oplatit kartoy?', atm: 'Gdye blizhayshiy bankomat?',
    toilet: 'Gdye tualet?', station: 'Gdye vokzal?', airport: 'V aeroport, pozhaluysta', hotel: 'V etot otel, pozhaluysta',
    stopHere: 'Ostanovite zdyes, pozhaluysta', left: 'Nalevo', right: 'Napravo', straight: 'Pryamo', ticket: 'Odin bilet, pozhaluysta',
    help: 'Pomogite!', doctor: 'Mne nuzhen vrach', police: 'Vyzovite politsiyu, pozhaluysta', pharmacy: 'Gdye apteka?', lost: 'Ya zabludilsya/zabludilas',
    n0: 'nol', n1: 'odin', n2: 'dva', n3: 'tri', n4: 'chetyre', n5: 'pyat', n6: 'shest', n7: 'sem', n8: 'vosem', n9: 'devyat', n10: 'desyat', n100: 'sto', n1000: 'tysyacha',
  },
  note: {
    ru: 'К незнакомым людям обращайтесь на «вы» и начинайте со «здравствуйте»; «ты» уместно только с друзьями и детьми. Глаголы в прошедшем времени зависят от рода говорящего: мужчина скажет «заблудился», женщина — «заблудилась».',
    en: 'Use the polite “vy” with strangers and open with “zdravstvuyte”; “ty” is for friends and children. Past-tense verbs follow the speaker’s gender, so a man says “zabludilsya” and a woman “zabludilas”.',
    es: 'Con desconocidos se usa “vy” (usted) y se saluda con “zdravstvuyte”; el “ty” (tú) queda para amigos y niños. Los verbos en pasado cambian según el sexo de quien habla: un hombre dice “zabludilsya” y una mujer “zabludilas”.',
    de: 'Fremde sieziert man mit „wy“ und grüßt mit „sdrawstwujte“; „ty“ (du) ist Freunden und Kindern vorbehalten. Verben in der Vergangenheit richten sich nach dem Geschlecht des Sprechers: Männer sagen „sabludilsja“, Frauen „sabludilas“.',
    fr: 'On vouvoie les inconnus avec « vy » et on salue par « zdravstvouïte » ; le « ty » (tu) est réservé aux amis et aux enfants. Les verbes au passé s’accordent au sexe du locuteur : un homme dit « zabloudilsia », une femme « zabloudilas ».',
    it: 'Con gli sconosciuti si usa “vy” (lei) e il saluto “zdravstvujte”; il “ty” (tu) è per amici e bambini. I verbi al passato cambiano col genere di chi parla: un uomo dice “zabludilsja”, una donna “zabludilas”.',
  },
  checked: '2026-10',
};

export default pack;
