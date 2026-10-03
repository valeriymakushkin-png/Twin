import { DEFAULT_LOCALE, isLocale, resolveLocale, userLocale, type Locale, type StarProductId, type VideoTemplate } from '@mascot/shared';

/**
 * Server-side copy for everything the bot says: command replies, notifications, invoice
 * texts, pre-checkout errors and share captions. One typed catalog per locale; the compiler
 * enforces that every locale implements every message.
 */
export interface BotCatalog {
  buttons: {
    open: string;
    openApp: string;
    createMascot: string;
    seeMascot: string;
    openPack: string;
    watch: string;
    seePremium: string;
    makeOwn: string;
  };
  commands: {
    start: string;
    premium: string;
    paysupport: (p: { support: string; id: string }) => string;
    terms: (p: { url: string; days: number }) => string;
    help: (p: { bot: string }) => string;
  };
  notify: {
    avatarReady: (p: { name: string }) => string;
    styleReady: (p: { slug: string; name: string }) => string;
    stickersReady: (p: { count: number }) => string;
    packPublished: (p: { title: string; url: string }) => string;
    videoReady: (p: { template: VideoTemplate }) => string;
    referralReward: (p: { credits: number }) => string;
    creditsAdded: (p: { credits: number }) => string;
    premiumRenewed: (p: Record<string, never>) => string;
    premiumUnlocked: (p: Record<string, never>) => string;
  };
  precheckout: {
    notFound: string;
    used: string;
    otherAccount: string;
    priceChanged: string;
    suspended: string;
    temporary: string;
  };
  share: {
    avatar: (p: { name: string }) => string;
    meme: string;
    pfp: string;
    pack: (p: { url: string }) => string;
    video: string;
  };
  invoice: Record<StarProductId, { title: string; description: string }>;
  stickerPackTitle: (p: { name: string }) => string;
  styleNames: Partial<Record<string, string>>;
  videoTemplates: Record<VideoTemplate, string>;
}

const en: BotCatalog = {
  buttons: {
    open: 'Open',
    openApp: 'Open Mascot AI',
    createMascot: '✨ Create my mascot',
    seeMascot: 'See my mascot',
    openPack: 'Open sticker pack',
    watch: 'Watch',
    seePremium: 'See Premium',
    makeOwn: '✨ Make my own mascot',
  },
  commands: {
    start: [
      '<b>Welcome to Mascot AI ✨</b>',
      '',
      'Upload a few selfies and get a personal 3D mascot that actually looks like you — then turn it into stickers, memes, profile pictures and videos.',
      '',
      '👇 Tap below to create yours in about a minute.',
    ].join('\n'),
    premium: '👑 Premium: unlimited mascots & styles, videos, HD export, premium outfits and poses.',
    paysupport: ({ support, id }) =>
      `Payment issue? Message @${support} with your Telegram ID (${id}) and a short description. We answer within 24h and refund failed generations automatically.`,
    terms: ({ url, days }) =>
      `Terms & Privacy: ${url}\n\nWe delete your source photos after ${days} days. You can delete your account and all data anytime from Profile → Delete account.`,
    help: ({ bot }) =>
      `Commands:\n/start — open Mascot AI\n/premium — Premium plans\n/paysupport — payment support\n/terms — terms & privacy\n\nTip: type @${bot} in any chat to share your mascot.`,
  },
  notify: {
    avatarReady: ({ name }) => `✨ ${name} is ready! Your personal mascot just came to life.`,
    styleReady: ({ name }) => `🎨 Your ${name} look is ready!`,
    stickersReady: ({ count }) => `🎉 Your ${count}-sticker pack is ready! Add it to Telegram in one tap.`,
    packPublished: ({ title, url }) => `✅ "${title}" is ready in Telegram: ${url}`,
    videoReady: ({ template }) => `🎬 Your ${en.videoTemplates[template].toLowerCase()} video is ready!`,
    referralReward: ({ credits }) => `🎉 A friend just created their mascot with your invite! +${credits} credits added.`,
    creditsAdded: ({ credits }) => `✅ ${credits} credits added. Thanks for supporting Mascot AI!`,
    premiumRenewed: () => '✅ Premium renewed. Keep creating!',
    premiumUnlocked: () => '👑 Premium unlocked! Unlimited mascots, all styles, videos and HD export are now yours.',
  },
  precheckout: {
    notFound: 'Invoice not found. Please try again from the app.',
    used: 'This invoice was already used. Please create a new one.',
    otherAccount: 'This invoice belongs to another account.',
    priceChanged: 'Price changed. Please reopen the offer.',
    suspended: 'Account suspended.',
    temporary: 'Temporary error, please retry.',
  },
  share: {
    avatar: ({ name }) => `Meet ${name} — my AI mascot ✨`,
    meme: 'Made with Mascot AI 😂',
    pfp: 'My new profile picture ✨',
    pack: ({ url }) => `My mascot sticker pack: ${url}`,
    video: 'My mascot in motion 🎬',
  },
  invoice: {
    premium_monthly: {
      title: 'Mascot AI Premium',
      description: 'Unlimited mascots & styles, video generation, HD export, premium outfits and poses. Renews every 30 days.',
    },
    premium_yearly: {
      title: 'Mascot AI Premium — 12 months',
      description: '12 months of Premium for the price of 8. One-time payment, no auto-renewal.',
    },
    credits_60: { title: '60 credits', description: 'Credits for extra stickers, styles, AI profile pictures and videos.' },
    credits_200: { title: '200 credits', description: 'Credits for extra stickers, styles, AI profile pictures and videos. +11% bonus.' },
    credits_600: { title: '600 credits', description: 'Credits for extra stickers, styles, AI profile pictures and videos. +33% bonus.' },
  },
  stickerPackTitle: ({ name }) => `${name} • Mascot AI`,
  styleNames: {},
  videoTemplates: { dancing: 'Dancing', talking: 'Talking', walking: 'Walking', podcast: 'Podcast clip', promo: 'Promo' },
};

const ru: BotCatalog = {
  buttons: {
    open: 'Открыть',
    openApp: 'Открыть Mascot AI',
    createMascot: '✨ Создать маскота',
    seeMascot: 'Посмотреть маскота',
    openPack: 'Открыть стикерпак',
    watch: 'Смотреть',
    seePremium: 'Подробнее о Premium',
    makeOwn: '✨ Создать своего маскота',
  },
  commands: {
    start: [
      '<b>Добро пожаловать в Mascot AI ✨</b>',
      '',
      'Загрузите несколько селфи и получите персонального 3D-маскота, который действительно похож на вас, — а потом делайте с ним стикеры, мемы, аватарки и видео.',
      '',
      '👇 Нажмите кнопку ниже — всё займёт около минуты.',
    ].join('\n'),
    premium: '👑 Premium: безлимит маскотов и стилей, видео, экспорт в HD, премиум-образы и позы.',
    paysupport: ({ support, id }) =>
      `Проблема с оплатой? Напишите @${support}, укажите свой Telegram ID (${id}) и кратко опишите ситуацию. Отвечаем в течение 24 часов; неудачные генерации возвращаются автоматически.`,
    terms: ({ url, days }) =>
      `Условия и конфиденциальность: ${url}\n\nИсходные фото удаляются через ${days} дней. Удалить аккаунт и все данные можно в любой момент: Профиль → Удалить аккаунт.`,
    help: ({ bot }) =>
      `Команды:\n/start — открыть Mascot AI\n/premium — тарифы Premium\n/paysupport — помощь с оплатой\n/terms — условия и конфиденциальность\n\nСовет: наберите @${bot} в любом чате, чтобы отправить своего маскота.`,
  },
  notify: {
    avatarReady: ({ name }) => `✨ Маскот «${name}» готов — ваш персональный персонаж ожил!`,
    styleReady: ({ slug, name }) => `🎨 Новый образ «${ru.styleNames[slug] ?? name}» готов!`,
    stickersReady: ({ count }) => `🎉 Стикерпак готов (${count} шт.)! Добавьте его в Telegram в один тап.`,
    packPublished: ({ title, url }) => `✅ «${title}» уже в Telegram: ${url}`,
    videoReady: ({ template }) => `🎬 Видео «${ru.videoTemplates[template]}» готово!`,
    referralReward: ({ credits }) => `🎉 Друг создал маскота по вашему приглашению! Начислено +${credits} кредитов.`,
    creditsAdded: ({ credits }) => `✅ Начислено кредитов: ${credits}. Спасибо, что поддерживаете Mascot AI!`,
    premiumRenewed: () => '✅ Premium продлён. Творите дальше!',
    premiumUnlocked: () => '👑 Premium активирован! Безлимит маскотов, все стили, видео и экспорт в HD теперь ваши.',
  },
  precheckout: {
    notFound: 'Счёт не найден. Попробуйте ещё раз из приложения.',
    used: 'Этот счёт уже использован. Создайте новый.',
    otherAccount: 'Этот счёт принадлежит другому аккаунту.',
    priceChanged: 'Цена изменилась. Откройте предложение заново.',
    suspended: 'Аккаунт заблокирован.',
    temporary: 'Временная ошибка, попробуйте ещё раз.',
  },
  share: {
    avatar: ({ name }) => `Знакомьтесь: ${name} — мой ИИ-маскот ✨`,
    meme: 'Сделано в Mascot AI 😂',
    pfp: 'Моя новая аватарка ✨',
    pack: ({ url }) => `Стикерпак с моим маскотом: ${url}`,
    video: 'Мой маскот в движении 🎬',
  },
  invoice: {
    premium_monthly: {
      title: 'Mascot AI Premium',
      description: 'Безлимит маскотов и стилей, генерация видео, экспорт в HD, премиум-образы и позы. Продлевается каждые 30 дней.',
    },
    premium_yearly: {
      title: 'Mascot AI Premium — 12 месяцев',
      description: '12 месяцев Premium по цене 8. Разовый платёж, без автопродления.',
    },
    credits_60: { title: '60 кредитов', description: 'Кредиты на дополнительные стикеры, стили, ИИ-аватарки и видео.' },
    credits_200: { title: '200 кредитов', description: 'Кредиты на дополнительные стикеры, стили, ИИ-аватарки и видео. Бонус +11%.' },
    credits_600: { title: '600 кредитов', description: 'Кредиты на дополнительные стикеры, стили, ИИ-аватарки и видео. Бонус +33%.' },
  },
  stickerPackTitle: ({ name }) => `${name} • Mascot AI`,
  styleNames: {
    pixar: 'В стиле Pixar',
    cartoon: 'Мультфильм',
    anime: 'Аниме',
    cyberpunk: 'Киберпанк',
    lego: 'Фигурка из кубиков',
    'funko-pop': 'Винил-поп',
    fortnite: 'Королевская битва',
    arcane: 'Живописный нуар',
    'gta-loading-screen': 'Экран загрузки',
    'disney-inspired': 'Сказочное 3D',
    'dreamworks-inspired': 'Комедийное 3D',
  },
  videoTemplates: { dancing: 'Танец', talking: 'Речь', walking: 'Прогулка', podcast: 'Подкаст', promo: 'Промо' },
};

export const BOT_CATALOGS: Record<Locale, BotCatalog> = { en, ru };

export function botCatalog(locale: string | null | undefined): BotCatalog {
  return BOT_CATALOGS[isLocale(locale) ? locale : DEFAULT_LOCALE];
}

/** Catalog for a user row (explicit app choice → Telegram language). */
export function catalogFor(user: { locale?: string | null; languageCode?: string | null }): BotCatalog {
  return BOT_CATALOGS[userLocale(user)];
}

/** Catalog for a raw Telegram `language_code` (updates from users we may not know yet). */
export function catalogForTelegram(languageCode: string | null | undefined): BotCatalog {
  return BOT_CATALOGS[resolveLocale(languageCode)];
}

export function localizedStyleName(catalog: BotCatalog, slug: string, fallback: string): string {
  return catalog.styleNames[slug] ?? fallback;
}

/* ------------------------------------------------------------------ */
/* Notification messages (serialisable, rendered per user at send time) */
/* ------------------------------------------------------------------ */

type NotifyFns = BotCatalog['notify'];
export type NotifyKey = keyof NotifyFns;
export type NotifyMessage = { [K in NotifyKey]: { key: K; params: Parameters<NotifyFns[K]>[0] } }[NotifyKey];
export type ButtonKey = keyof BotCatalog['buttons'];

export function renderNotify(catalog: BotCatalog, message: NotifyMessage): string {
  const fn = catalog.notify[message.key] as (p: unknown) => string;
  return fn(message.params);
}
