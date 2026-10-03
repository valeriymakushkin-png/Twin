/**
 * Typed wrapper around the official Telegram Mini Apps SDK (telegram-web-app.js, Bot API 8+).
 * All helpers degrade gracefully outside Telegram (local browser development).
 */

type HapticImpact = 'light' | 'medium' | 'heavy' | 'rigid' | 'soft';
type HapticNotification = 'error' | 'success' | 'warning';
type InvoiceStatus = 'paid' | 'cancelled' | 'failed' | 'pending';

interface BottomButton {
  text: string;
  isVisible: boolean;
  isActive: boolean;
  setText(text: string): BottomButton;
  setParams(params: { text?: string; color?: string; text_color?: string; is_active?: boolean; is_visible?: boolean; has_shine_effect?: boolean }): BottomButton;
  onClick(cb: () => void): BottomButton;
  offClick(cb: () => void): BottomButton;
  show(): BottomButton;
  hide(): BottomButton;
  showProgress(leaveActive?: boolean): BottomButton;
  hideProgress(): BottomButton;
}

export interface TelegramWebApp {
  initData: string;
  initDataUnsafe: {
    user?: { id: number; first_name: string; last_name?: string; username?: string; language_code?: string; is_premium?: boolean; photo_url?: string };
    start_param?: string;
    chat_type?: string;
  };
  version: string;
  platform: string;
  colorScheme: 'light' | 'dark';
  themeParams: Record<string, string>;
  isExpanded: boolean;
  isFullscreen?: boolean;
  viewportHeight: number;
  viewportStableHeight: number;
  safeAreaInset?: { top: number; bottom: number; left: number; right: number };
  contentSafeAreaInset?: { top: number; bottom: number; left: number; right: number };
  ready(): void;
  expand(): void;
  close(): void;
  isVersionAtLeast(version: string): boolean;
  setHeaderColor(color: string): void;
  setBackgroundColor(color: string): void;
  setBottomBarColor?(color: string): void;
  enableClosingConfirmation(): void;
  disableClosingConfirmation(): void;
  disableVerticalSwipes?(): void;
  requestFullscreen?(): void;
  onEvent(event: string, cb: (...args: unknown[]) => void): void;
  offEvent(event: string, cb: (...args: unknown[]) => void): void;
  openLink(url: string, options?: { try_instant_view?: boolean }): void;
  openTelegramLink(url: string): void;
  openInvoice(url: string, callback?: (status: InvoiceStatus) => void): void;
  shareToStory?(mediaUrl: string, params?: { text?: string; widget_link?: { url: string; name?: string } }): void;
  shareMessage?(msgId: string, callback?: (sent: boolean) => void): void;
  downloadFile?(params: { url: string; file_name: string }, callback?: (accepted: boolean) => void): void;
  showPopup(params: { title?: string; message: string; buttons?: Array<{ id?: string; type?: string; text?: string }> }, cb?: (id: string) => void): void;
  showConfirm(message: string, cb?: (ok: boolean) => void): void;
  addToHomeScreen?(): void;
  BackButton: { isVisible: boolean; show(): void; hide(): void; onClick(cb: () => void): void; offClick(cb: () => void): void };
  MainButton: BottomButton;
  HapticFeedback: {
    impactOccurred(style: HapticImpact): void;
    notificationOccurred(type: HapticNotification): void;
    selectionChanged(): void;
  };
}

declare global {
  interface Window {
    Telegram?: { WebApp?: TelegramWebApp };
  }
}

export function getWebApp(): TelegramWebApp | null {
  if (typeof window === 'undefined') return null;
  const app = window.Telegram?.WebApp;
  return app && app.initData ? app : null;
}

export function isTelegram(): boolean {
  return getWebApp() !== null;
}

function supports(version: string): boolean {
  const app = getWebApp();
  return Boolean(app?.isVersionAtLeast?.(version));
}

export const haptic = {
  tap: (style: HapticImpact = 'light') => getWebApp()?.HapticFeedback?.impactOccurred(style),
  select: () => getWebApp()?.HapticFeedback?.selectionChanged(),
  success: () => getWebApp()?.HapticFeedback?.notificationOccurred('success'),
  error: () => getWebApp()?.HapticFeedback?.notificationOccurred('error'),
  warning: () => getWebApp()?.HapticFeedback?.notificationOccurred('warning'),
};

/** Applies brand chrome and immersive settings once the SDK is ready. */
export function bootstrapWebApp(): TelegramWebApp | null {
  const app = getWebApp();
  if (!app) return null;
  app.ready();
  app.expand();
  try {
    app.setHeaderColor('#07070a');
    app.setBackgroundColor('#07070a');
    app.setBottomBarColor?.('#07070a');
    if (supports('7.7')) app.disableVerticalSwipes?.();
  } catch {
    /* older clients */
  }
  const applyInsets = () => {
    const root = document.documentElement.style;
    root.setProperty('--tg-safe-top', `${app.safeAreaInset?.top ?? 0}px`);
    root.setProperty('--tg-safe-bottom', `${app.safeAreaInset?.bottom ?? 0}px`);
    root.setProperty('--tg-content-top', `${app.contentSafeAreaInset?.top ?? 0}px`);
  };
  applyInsets();
  app.onEvent('safeAreaChanged', applyInsets);
  app.onEvent('contentSafeAreaChanged', applyInsets);
  app.onEvent('fullscreenChanged', applyInsets);
  return app;
}

export function openInvoice(url: string): Promise<InvoiceStatus> {
  const app = getWebApp();
  if (!app) {
    window.open(url, '_blank');
    return Promise.resolve('pending');
  }
  return new Promise((resolve) => app.openInvoice(url, resolve));
}

export function openTelegramLink(url: string): void {
  const app = getWebApp();
  if (app && url.startsWith('https://t.me/')) app.openTelegramLink(url);
  else window.open(url, '_blank', 'noopener');
}

export function openExternal(url: string): void {
  const app = getWebApp();
  if (app) app.openLink(url);
  else window.open(url, '_blank', 'noopener');
}

/** Bot API 8.0 native download sheet; falls back to opening the file. */
export function downloadFile(url: string, fileName: string): void {
  const app = getWebApp();
  if (app?.downloadFile && supports('8.0')) {
    app.downloadFile({ url, file_name: fileName });
    return;
  }
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName;
  a.target = '_blank';
  a.rel = 'noopener';
  document.body.appendChild(a);
  a.click();
  a.remove();
}

export function canShareToStory(): boolean {
  return Boolean(getWebApp()?.shareToStory) && supports('7.8');
}

export function shareToStory(mediaUrl: string, text: string, widget?: { url: string; name: string }): void {
  getWebApp()?.shareToStory?.(mediaUrl, { text: text.slice(0, 200), widget_link: widget });
}

export function shareMessage(preparedId: string): Promise<boolean> {
  const app = getWebApp();
  if (!app?.shareMessage || !supports('8.0')) return Promise.resolve(false);
  return new Promise((resolve) => app.shareMessage!(preparedId, resolve));
}

export function shareUrl(url: string, text: string): void {
  openTelegramLink(`https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`);
}

export function confirm(message: string): Promise<boolean> {
  const app = getWebApp();
  if (!app) return Promise.resolve(window.confirm(message));
  return new Promise((resolve) => app.showConfirm(message, resolve));
}
