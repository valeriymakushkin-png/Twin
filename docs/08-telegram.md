# 8. Telegram integration

## One-time setup (@BotFather)

1. `/newbot` → token → `TELEGRAM_BOT_TOKEN`, username → `TELEGRAM_BOT_USERNAME`.
2. `/newapp` → attach a Mini App to the bot, short name `app` (`TELEGRAM_MINI_APP_SHORT_NAME`), URL `https://app.mascot.ai` → deep links `https://t.me/<bot>/app?startapp=…`.
3. `/setinline` → enable inline mode (placeholder "Share your mascot…"), `/setinlinefeedback` optional.
4. `/setdomain` → `admin.mascot.ai` (required by the Login Widget used by the admin panel).
5. Payments in **Telegram Stars** need no provider token — just support `/paysupport` (implemented).
6. Run `pnpm telegram:setup` (idempotent): `setWebhook` (secret token, allowed updates), commands (EN + RU), Mini App menu button, descriptions.

## Mini App authentication

`window.Telegram.WebApp.initData` is sent to `POST /v1/auth/telegram`. The server (`modules/telegram/init-data.ts`):

```
data_check_string = all key=value pairs except `hash`, sorted by key, joined with "\n"   (includes `signature`)
secret_key        = HMAC_SHA256(key = "WebAppData", message = bot_token)
valid             = hex(HMAC_SHA256(secret_key, data_check_string)) == hash      (constant-time compare)
fresh             = now - auth_date ≤ 24 h   (and not in the future)
```

The user is upserted from `initData.user` (premium flag, language, `allows_write_to_pm`), `start_param` is parsed
(`ref_<code>`, `src_<channel>`, `m_<shareSlug>`, combinable with `__`), and a JWT is issued. `initDataUnsafe` is never trusted.

## Mini App platform features used

| Feature | Bot API | Where |
|---|---|---|
| Native back button, haptics, header/background/bottom-bar colours | 6.1+ / 7.10 | `lib/telegram.ts`, `TelegramBackButton` |
| Safe areas / content safe areas, fullscreen events | 8.0 | CSS vars `--tg-safe-*` |
| Disable vertical swipes (no accidental close while dragging sheets) | 7.7 | boot |
| `openInvoice` (Stars) | 6.1 | paywall / premium page |
| `shareMessage(prepared_id)` + `savePreparedInlineMessage` | 8.0 | share sheet (chat share with "Make my own mascot" button) |
| `shareToStory(media, { widget_link })` | 7.8 | share sheet |
| `downloadFile` | 8.0 | save renders, stickers, memes, videos |
| `openTelegramLink` | 6.1 | open sticker sets, bot, share URLs |
| Telegram Login Widget | — | admin panel |

## Bot (webhook `POST /v1/telegram/webhook`)

- Authenticated by `X-Telegram-Bot-Api-Secret-Token`; updates de-duplicated by `update_id` in Redis (24 h); payment updates are re-delivered by Telegram if processing fails (we return non-2xx only for those).
- Allowed updates: `message`, `pre_checkout_query`, `inline_query`, `callback_query`.

| Update | Handling |
|---|---|
| `/start [payload]` | upsert user + attribution, welcome message with **web_app** button |
| `/premium`, `/help`, `/terms`, `/privacy` | info + Mini App buttons |
| `/paysupport` | required for Stars sellers: support contact + automatic refund note |
| `pre_checkout_query` | validated and answered within 10 s ([payments](09-payments.md)) |
| `message.successful_payment` / `message.refunded_payment` | fulfilment / revocation |
| `inline_query` | user's mascot share JPEGs + memes as `InlineQueryResultPhoto`, each with a "Make my own mascot" referral button; `button` → start bot |

## Sticker packs

1. Each sticker is a 512×512 WebP < 512 KB with transparency (Telegram static sticker spec) and a die-cut outline.
2. `uploadStickerFile(user_id, sticker, sticker_format=static)` → `file_id` (stored on `stickers.telegram_file_id`, so retries don't re-upload).
3. `createNewStickerSet(user_id, name="m<random>_by_<bot>", title, stickers[≤50], sticker_type=regular)`, each with `emoji_list` (primary + 2 extra) and keywords. Name collisions retry with a new name.
4. Additional stickers later → `addStickerToSet`. The user receives `https://t.me/addstickers/<name>`.
5. `PEER_ID_INVALID` / blocked bot → pack stays READY with "Open the bot and press Start" guidance.

## Notifications

Queued (`notify` queue, ≤ 25 msg/s globally, below Telegram's ~30 msg/s broadcast limit). Photo + caption + web_app button
to the exact screen (`/mascot/:id`, sticker pack, video). 403 (blocked) → `notifications_enabled=false`, `allows_write_to_pm=false`.

## Viral loops

| Loop | Mechanism |
|---|---|
| Chat sharing | prepared inline message (render + "✨ Make my own mascot" URL button with `startapp=ref_<code>__m_<slug>`) |
| Stories | `shareToStory` with widget link to the Mini App |
| Inline mode | `@MascotAIBot` in any chat lists your mascots and memes |
| Sticker packs | every sticker set name/title carries the brand; recipients ask "how did you make this?" |
| Public share page | `/m/<slug>` with OG card for links shared outside Telegram |
| Referrals | invitee +10 credits on sign-up; referrer +20 when the invitee finishes their first mascot (monthly cap 50, anti-abuse) |
| Watermark | free-tier renders/memes carry a subtle "✦ Mascot AI" mark |

## Testing

- Local: `NEXT_PUBLIC_DEV_AUTH=true` / `DEV_AUTH_ENABLED=true` bypass Telegram for browser development.
- The e2e test (`apps/api/scripts/e2e-smoke.ts`) runs a **fake Bot API server** and drives real webhook payloads (pre-checkout, successful payment, duplicates) and sticker publishing.
- Telegram's test environment (separate test accounts, test Stars; `…/bot<token>/test/<method>`) is enabled with `TELEGRAM_TEST_ENV=true` (create the test bot with the test-server @BotFather).
