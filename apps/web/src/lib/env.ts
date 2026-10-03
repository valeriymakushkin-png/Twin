export const env = {
  apiUrl: (process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:4000').replace(/\/$/, ''),
  botUsername: process.env.NEXT_PUBLIC_BOT_USERNAME ?? 'MascotAIBot',
  miniAppShortName: process.env.NEXT_PUBLIC_MINI_APP_SHORT_NAME ?? 'app',
  devAuth: process.env.NEXT_PUBLIC_DEV_AUTH === 'true',
};

export const miniAppLink = (startParam?: string) =>
  `https://t.me/${env.botUsername}/${env.miniAppShortName}${startParam ? `?startapp=${encodeURIComponent(startParam)}` : ''}`;
