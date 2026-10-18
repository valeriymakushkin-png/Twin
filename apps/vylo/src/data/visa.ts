import type { VisaInfo, VisaRegime } from './types';

/**
 * Entry rules for citizens of Russia (ordinary passport, tourism).
 * Reference data only — rules change, so the UI always links travellers to official sources.
 */
const PASSPORT_6M = 'Не менее 6 месяцев на дату въезда';
const PASSPORT_3M = 'Не менее 3 месяцев после выезда из Шенгена';

const rows: VisaInfo[] = [
  { code: 'TH', regime: 'free', days: 60, title: 'Безвиз', cost: 'Бесплатно', validity: PASSPORT_6M, how: 'Штамп при въезде. До прилёта заполните электронную карту прибытия TDAC.', docs: ['Обратный билет', 'Бронь жилья', 'TDAC (онлайн, бесплатно)'], notes: ['Срок безвиза пересматривался властями — проверьте актуальный перед поездкой.', 'Продление на 30 дней — в иммиграционном офисе, 1900 THB.'] },
  { code: 'ID', regime: 'voa', days: 30, title: 'Виза по прибытии / e-VOA', cost: '500 000 IDR (~$32)', validity: PASSPORT_6M, how: 'e-VOA онлайн до вылета или виза в аэропорту. Продлевается один раз на 30 дней.', docs: ['Обратный билет', 'Оплата e-VOA', 'Туристический сбор Бали 150 000 IDR'], notes: ['Заполните электронную таможенную декларацию e-CD перед прилётом.'] },
  { code: 'VN', regime: 'free', days: 45, title: 'Безвиз', cost: 'Бесплатно', validity: PASSPORT_6M, how: 'Штамп при въезде. Для долгих поездок — e-visa до 90 дней.', docs: ['Обратный билет'], notes: ['e-visa до 90 дней — $25 (однократная), только на официальном портале.'] },
  { code: 'JP', regime: 'required', days: 90, title: 'Нужна виза', cost: 'Бесплатно для граждан РФ', validity: 'Действует на весь срок поездки', how: 'Подача через визовый центр или аккредитованное турагентство. Срок рассмотрения — около 5 рабочих дней.', docs: ['Анкета и фото 45×45', 'План поездки', 'Справка с работы / выписка', 'Брони'], notes: ['Карты РФ в Японии не работают — берите наличные или зарубежную карту.'] },
  { code: 'PT', regime: 'required', days: 90, title: 'Шенгенская виза', cost: '€90 + сбор визового центра', validity: PASSPORT_3M, how: 'Подача в визовый центр с биометрией. Сроки записи могут быть долгими.', docs: ['Анкета', 'Страховка от €30 000', 'Брони и билеты', 'Финансовые документы'], notes: ['Срок рассмотрения — от 15 дней, закладывайте запас.'] },
  { code: 'GR', regime: 'required', days: 90, title: 'Шенгенская виза', cost: '€90 + сбор визового центра', validity: PASSPORT_3M, how: 'Подача в визовый центр Греции. Возможны многократные визы при хорошей истории.', docs: ['Анкета', 'Страховка от €30 000', 'Брони и билеты', 'Финансовые документы'], notes: [] },
  { code: 'FR', regime: 'required', days: 90, title: 'Шенгенская виза', cost: '€90 + сбор визового центра', validity: PASSPORT_3M, how: 'Подача в визовый центр Франции с биометрией.', docs: ['Анкета', 'Страховка от €30 000', 'Брони и билеты', 'Финансовые документы'], notes: [] },
  { code: 'IT', regime: 'required', days: 90, title: 'Шенгенская виза', cost: '€90 + сбор визового центра', validity: PASSPORT_3M, how: 'Подача в визовый центр Италии с биометрией.', docs: ['Анкета', 'Страховка от €30 000', 'Брони и билеты', 'Финансовые документы'], notes: [] },
  { code: 'ES', regime: 'required', days: 90, title: 'Шенгенская виза', cost: '€90 + сбор визового центра', validity: PASSPORT_3M, how: 'Подача в визовый центр Испании с биометрией.', docs: ['Анкета', 'Страховка от €30 000', 'Брони и билеты'], notes: [] },
  { code: 'CH', regime: 'required', days: 90, title: 'Шенгенская виза', cost: '€90 + сбор визового центра', validity: PASSPORT_3M, how: 'Подача в визовый центр Швейцарии.', docs: ['Анкета', 'Страховка от €30 000', 'Брони и билеты', 'Финансовые документы'], notes: [] },
  { code: 'IS', regime: 'required', days: 90, title: 'Шенгенская виза', cost: '€90 + сбор визового центра', validity: PASSPORT_3M, how: 'Исландия принимает документы через представительство другой страны Шенгена — уточните актуальное.', docs: ['Анкета', 'Страховка от €30 000', 'Брони и билеты'], notes: [] },
  { code: 'TR', regime: 'free', days: 60, title: 'Безвиз', cost: 'Бесплатно', validity: 'Не менее 120 дней на дату въезда', how: 'Штамп при въезде. Не более 90 дней в течение 180.', docs: ['Обратный билет'], notes: [] },
  { code: 'GE', regime: 'free', days: 365, title: 'Безвиз', cost: 'Бесплатно', validity: 'На весь срок пребывания', how: 'Штамп при въезде, можно находиться до года.', docs: ['Загранпаспорт'], notes: [] },
  { code: 'AM', regime: 'free', days: 180, title: 'Безвиз', cost: 'Бесплатно', validity: 'На весь срок пребывания', how: 'Въезд возможен даже по внутреннему паспорту РФ.', docs: ['Паспорт РФ или загранпаспорт'], notes: [] },
  { code: 'AE', regime: 'free', days: 90, title: 'Бесплатная виза по прибытии', cost: 'Бесплатно', validity: PASSPORT_6M, how: 'Штамп в аэропорту. До 90 дней в течение 180.', docs: ['Обратный билет'], notes: [] },
  { code: 'MV', regime: 'free', days: 30, title: 'Виза по прибытии', cost: 'Бесплатно', validity: PASSPORT_6M, how: 'Заполните анкету IMUGA за 96 часов до вылета.', docs: ['Бронь отеля', 'Обратный билет', 'IMUGA'], notes: [] },
  { code: 'LK', regime: 'eta', days: 30, title: 'Электронное разрешение ETA', cost: 'Бесплатно для граждан РФ (по программе)', validity: PASSPORT_6M, how: 'Оформите ETA онлайн на официальном сайте до поездки.', docs: ['ETA', 'Обратный билет'], notes: ['Остерегайтесь сайтов-посредников, которые берут деньги за бесплатную ETA.'] },
  { code: 'PE', regime: 'free', days: 90, title: 'Безвиз', cost: 'Бесплатно', validity: PASSPORT_6M, how: 'Штамп при въезде.', docs: ['Обратный билет'], notes: [] },
  { code: 'US', regime: 'required', days: 0, title: 'Нужна виза', cost: '$185 консульский сбор', validity: PASSPORT_6M, how: 'Собеседование в посольстве США в третьей стране (например, Варшава или Астана).', docs: ['Анкета DS-160', 'Подтверждение связей с родиной'], notes: ['Сроки ожидания собеседования могут быть большими.'] },
  { code: 'EG', regime: 'voa', days: 30, title: 'Виза по прибытии', cost: '$25', validity: PASSPORT_6M, how: 'Марка в аэропорту. Для Синая (Шарм-эш-Шейх) — бесплатный штамп до 15 дней.', docs: ['Обратный билет'], notes: [] },
  { code: 'CN', regime: 'free', days: 30, title: 'Безвиз (пилотный режим)', cost: 'Бесплатно', validity: PASSPORT_6M, how: 'Безвизовый режим введён в тестовом формате — проверьте, продлён ли он на даты вашей поездки.', docs: ['Обратный билет', 'Брони'], notes: ['Без продления пилота — туристическая виза через визовый центр.'] },
  { code: 'KR', regime: 'free', days: 60, title: 'Безвиз', cost: 'Бесплатно', validity: PASSPORT_6M, how: 'Штамп при въезде, до 90 дней в течение 180.', docs: ['Обратный билет'], notes: [] },
  { code: 'MY', regime: 'free', days: 30, title: 'Безвиз', cost: 'Бесплатно', validity: PASSPORT_6M, how: 'Заполните карту прибытия MDAC за 3 дня до въезда.', docs: ['MDAC', 'Обратный билет'], notes: [] },
  { code: 'PH', regime: 'free', days: 30, title: 'Безвиз', cost: 'Бесплатно', validity: PASSPORT_6M, how: 'Регистрация eTravel за 72 часа до прилёта.', docs: ['eTravel', 'Обратный билет'], notes: [] },
  { code: 'IN', regime: 'evisa', days: 30, title: 'Электронная виза', cost: 'от $10 до $80 (по сезону и сроку)', validity: PASSPORT_6M, how: 'e-Visa онлайн на официальном портале минимум за 4 дня до поездки.', docs: ['Фото', 'Скан паспорта'], notes: [] },
  { code: 'KH', regime: 'evisa', days: 30, title: 'Электронная виза', cost: '$36', validity: PASSPORT_6M, how: 'e-Visa онлайн или виза по прибытии в аэропорту.', docs: ['Фото', 'Обратный билет'], notes: [] },
  { code: 'LA', regime: 'free', days: 30, title: 'Безвиз', cost: 'Бесплатно', validity: PASSPORT_6M, how: 'Штамп при въезде.', docs: ['Обратный билет'], notes: [] },
  { code: 'RS', regime: 'free', days: 30, title: 'Безвиз', cost: 'Бесплатно', validity: 'На весь срок пребывания', how: 'Штамп при въезде.', docs: ['Загранпаспорт'], notes: [] },
  { code: 'ME', regime: 'free', days: 30, title: 'Безвиз', cost: 'Бесплатно', validity: 'На весь срок пребывания', how: 'Штамп при въезде.', docs: ['Загранпаспорт'], notes: [] },
  { code: 'MA', regime: 'free', days: 90, title: 'Безвиз', cost: 'Бесплатно', validity: PASSPORT_6M, how: 'Штамп при въезде.', docs: ['Обратный билет'], notes: [] },
  { code: 'TN', regime: 'free', days: 90, title: 'Безвиз', cost: 'Бесплатно', validity: PASSPORT_6M, how: 'Штамп при въезде.', docs: ['Обратный билет'], notes: [] },
  { code: 'IL', regime: 'free', days: 90, title: 'Безвиз', cost: 'Бесплатно', validity: PASSPORT_6M, how: 'Штамп-квиток при въезде, возможны расспросы на границе.', docs: ['Обратный билет', 'Страховка'], notes: [] },
  { code: 'BR', regime: 'free', days: 90, title: 'Безвиз', cost: 'Бесплатно', validity: PASSPORT_6M, how: 'Штамп при въезде.', docs: ['Обратный билет'], notes: [] },
  { code: 'AR', regime: 'free', days: 90, title: 'Безвиз', cost: 'Бесплатно', validity: PASSPORT_6M, how: 'Штамп при въезде.', docs: ['Обратный билет'], notes: [] },
  { code: 'CU', regime: 'free', days: 90, title: 'Безвиз', cost: 'Бесплатно', validity: PASSPORT_6M, how: 'Онлайн-форма D\'Viajeros до поездки.', docs: ['Страховка', 'D\'Viajeros'], notes: [] },
  { code: 'KZ', regime: 'free', days: 90, title: 'Безвиз', cost: 'Бесплатно', validity: 'На весь срок пребывания', how: 'Въезд возможен по внутреннему паспорту РФ.', docs: ['Паспорт РФ'], notes: [] },
  { code: 'UZ', regime: 'free', days: 60, title: 'Безвиз', cost: 'Бесплатно', validity: 'На весь срок пребывания', how: 'Регистрация по месту пребывания в течение 3 дней (отели делают сами).', docs: ['Загранпаспорт'], notes: [] },
  { code: 'GB', regime: 'required', days: 0, title: 'Нужна виза', cost: 'от £127', validity: 'На весь срок пребывания', how: 'Онлайн-заявка и биометрия в визовом центре в третьей стране.', docs: ['Анкета', 'Финансовые документы'], notes: [] },
];

export const visaByCode = (code: string) => rows.find((v) => v.code === code);
export const visaCountries = rows;

export const regimeMeta: Record<VisaRegime, { label: string; tone: 'mint' | 'amber' | 'sky' | 'rose' }> = {
  free: { label: 'Без визы', tone: 'mint' },
  voa: { label: 'По прибытии', tone: 'sky' },
  eta: { label: 'Разрешение ETA', tone: 'sky' },
  evisa: { label: 'E-виза', tone: 'amber' },
  required: { label: 'Нужна виза', tone: 'rose' },
};
