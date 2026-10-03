/** Simplified platform glyphs for the "use it everywhere" section. */
export function TelegramGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path fill="currentColor" d="M21.4 4.3 18.3 19c-.2 1-.9 1.3-1.8.8l-4.7-3.5-2.3 2.2c-.3.3-.5.5-1 .5l.3-4.8 8.8-7.9c.4-.3-.1-.5-.6-.2L6.2 13 1.5 11.6c-1-.3-1-1 .2-1.5L20.1 3c.8-.3 1.6.2 1.3 1.3Z" />
    </svg>
  );
}
export function TikTokGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path fill="currentColor" d="M16.6 3c.4 2.2 1.9 3.8 4.1 4v3.1c-1.5 0-2.9-.4-4.1-1.2v6.2c0 3.6-2.7 6-6.1 6-3.3 0-6-2.6-6-5.9 0-3.6 3.1-6.3 6.8-5.8v3.2c-1.9-.4-3.6.9-3.6 2.6 0 1.5 1.2 2.7 2.8 2.7 1.7 0 2.9-1.2 2.9-3.2V3h3.2Z" />
    </svg>
  );
}
export function InstagramGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5.5" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.3" cy="6.8" r="1.3" fill="currentColor" />
    </svg>
  );
}
export function DiscordGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path fill="currentColor" d="M19.3 5.4A16 16 0 0 0 15.4 4l-.5 1a14.6 14.6 0 0 0-5.8 0L8.6 4a16 16 0 0 0-3.9 1.4C2.2 9.2 1.5 12.9 1.8 16.5a16 16 0 0 0 4.8 2.5l1-1.6c-.6-.2-1.1-.5-1.6-.8l.4-.3a11.4 11.4 0 0 0 11.2 0l.4.3c-.5.3-1 .6-1.6.8l1 1.6a16 16 0 0 0 4.8-2.5c.4-4.2-.7-7.9-2.9-11.1ZM8.7 14.3c-.9 0-1.7-.9-1.7-2s.8-2 1.7-2c1 0 1.8.9 1.7 2 0 1.1-.8 2-1.7 2Zm6.6 0c-.9 0-1.7-.9-1.7-2s.8-2 1.7-2c1 0 1.7.9 1.7 2s-.8 2-1.7 2Z" />
    </svg>
  );
}
export function YouTubeGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path fill="currentColor" d="M22.5 7.2a2.8 2.8 0 0 0-2-2C18.8 4.8 12 4.8 12 4.8s-6.8 0-8.5.4a2.8 2.8 0 0 0-2 2C1.1 9 1.1 12 1.1 12s0 3 .4 4.8a2.8 2.8 0 0 0 2 2c1.7.4 8.5.4 8.5.4s6.8 0 8.5-.4a2.8 2.8 0 0 0 2-2c.4-1.8.4-4.8.4-4.8s0-3-.4-4.8ZM9.8 15.1V8.9l5.6 3.1-5.6 3.1Z" />
    </svg>
  );
}

export const PLATFORM_STYLES = {
  telegram: { bg: 'bg-[#229ED9]', Icon: TelegramGlyph },
  tiktok: { bg: 'bg-[#111]', Icon: TikTokGlyph },
  instagram: { bg: 'bg-[radial-gradient(circle_at_30%_110%,#fdf497_0%,#fd5949_45%,#d6249f_60%,#285AEB_90%)]', Icon: InstagramGlyph },
  discord: { bg: 'bg-[#5865F2]', Icon: DiscordGlyph },
  youtube: { bg: 'bg-[#FF0000]', Icon: YouTubeGlyph },
} as const;
