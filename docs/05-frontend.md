# 5. Frontend architecture

## Telegram Mini App (`apps/web`)

Next.js 16 (App Router, Turbopack), React 19, TypeScript, Tailwind CSS v4, Framer Motion, TanStack Query, Zustand,
the official Telegram Mini Apps SDK (`telegram-web-app.js`, Bot API 8+), Geist font (bundled, no runtime font fetch).

### Screens

| Route | Purpose |
|---|---|
| `/` | Landing after the brand reference: red-star logo, headline, live **3D hero** (drag to rotate) with floating emotion tiles, how it works, 11-style strip, sticker grid with captions, "Use your character everywhere" (Telegram/TikTok/Instagram/Discord/YouTube + more), pricing cards (Free vs Premium «Popular»), final CTA, slogan. Dashboard (quick actions, my mascots, invite card) once a mascot exists |
| `/create` | One screen: **"Upload photos"** (min 5 highlighted in red), photo grid with red check marks, pose examples (front, left/right profile, smile, neutral), live face check per photo; biometric consent sheet on first upload; sticky **Upload photos → Create character** CTA |
| `/processing/[id]` | **Photo analysis**: wireframe 3D head inside red scan brackets, checklist (face, features, character, render), % progress, queue position, rotating tips; failure card with refund note |
| `/mascot/[id]` | First visit: **"Ready!"** reveal (your mascot / style, Change style, Next). Then the **3D viewer**: side look thumbnails, Rotate / Camera (PNG snapshot) / Download, "Your mascot" card, action grid (Stickers, Memes, Profile pics, Videos, Change style, Customize), Mascot DNA card |
| `/mascot/[id]/stickers` | 3×3 emotion grid with captions (live 3D previews until renders exist), free-allowance math, pack previews, **Add to Telegram** (sticker set) |
| `/mascot/[id]/memes` | Prompt + **Generate**, formats (classic, POV, Nobody/Me, Expectation vs Reality, Post, Caption), emotion auto-detect or manual, ideas, results with download/share |
| `/mascot/[id]/pfp` | Instant (Sharp composite, free) vs AI scene (Premium), backgrounds, outfits, poses, circle-crop preview |
| `/mascot/[id]/videos` | Templates as cards (Dance, Talking, Walk, Podcast, Promo), script + voice, aspect ratio, **Create video**, player |
| `/mascot/[id]/styles` | **"Choose a style"**: 3-column grid of the same character in 11 styles (red selection), **Apply style** → re-render from stored DNA |
| `/mascot/[id]/customize` | **"Customize your style"**: live 3D preview, tabs Outfit / Accessories / Background / Poses, premium items locked, **Save** → new look |
| `/library` | Mascots, sticker packs, memes, PFPs, videos |
| `/premium` | Plans (monthly Star subscription, 12-month pass), Free vs Premium table, credit packs |
| `/profile` | Plan, usage meters, credits, referral link, subscription (cancel/resume auto-renew), notifications, support, legal, **delete account** |
| `/m/[slug]` | **Public SSR share page** with OG/Twitter cards → "Create my own mascot" deep link carrying the sharer's referral code |

### Layers

```
app/ (routes, client components)
 ├─ providers/  QueryProvider (global 402 → paywall, toasts) · AuthProvider (initData → JWT, splash gate)
 │              TelegramBackButton (native back button follows the route)
 ├─ lib/        api.ts (typed client, Idempotency-Key on generation calls) · queries.ts (React Query hooks,
 │              polling) · telegram.ts (SDK wrapper) · image.ts (client downscale) · env.ts
 ├─ store/      create-flow (photos, style, name) · paywall (global sheet)
 └─ components/ ui kit · brand · landing · upload · processing · mascot · paywall · share
```

- **Server state**: TanStack Query. Generation status is **polled** (1.2 s) until terminal — the most reliable transport inside Telegram webviews (no SSE/WebSocket drops on app backgrounding). Lists auto-poll only while something is pending.
- **Client state**: Zustand for the multi-step create flow and the global paywall.
- **Paywall by protocol**: any `402` from the API carries `paywall.reason`; the mutation cache opens the paywall sheet with the right headline — no per-screen paywall logic.
- **Auth gate**: app routes render a splash until a token exists, so no request is ever unauthenticated; public routes (`/m/*`, `/legal`) render immediately for SSR/OG.

### Telegram SDK integration (`src/lib/telegram.ts`)

| Capability | API used |
|---|---|
| Boot | `ready()`, `expand()`, `setHeaderColor/BackgroundColor/BottomBarColor('#07070a')`, `disableVerticalSwipes()` (7.7+) |
| Safe areas | `safeAreaInset` / `contentSafeAreaInset` → CSS vars (`pt-safe`, `pb-safe`), updated on `safeAreaChanged`, `fullscreenChanged` |
| Navigation | `BackButton.show/onClick` driven by the router |
| Feedback | `HapticFeedback.impactOccurred / notificationOccurred / selectionChanged` on every meaningful tap |
| Payments | `openInvoice(url)` → Telegram Stars sheet; profile polled until the webhook grants Premium |
| Sharing | `shareMessage(preparedId)` (8.0) with a server-prepared inline message + "Make my own mascot" button; `shareToStory(media, {widget_link})` (7.8); `t.me/share/url` fallback |
| Files | `downloadFile({url, file_name})` (8.0) with an `<a download>` fallback |
| Links | `openTelegramLink` (sticker sets, bot) / `openLink` |
| Dialogs | `showConfirm` for destructive actions |

Outside Telegram the app shows the public landing with an **Open in Telegram** CTA; local development uses `NEXT_PUBLIC_DEV_AUTH=true`.

### Uploads

`prepareImage()` decodes with `createImageBitmap(..., {imageOrientation: 'from-image'})`, downsizes to ≤ 2048 px and
re-encodes JPEG 0.9 on a canvas: 10× smaller uploads on 12–48 MP phone photos, HEIC handled by the OS decoder,
EXIF/GPS stripped before the bytes leave the device. Files are uploaded in batches of 3 for progressive feedback; results map
back to tiles by echoed file name.

### Design system

Black & red, cinematic (built to the brand reference): near-black canvas `#060607` with a red atmospheric glow,
graphite cards (`card`) with hairline borders, **one hot accent** — brand red `#ff2b3d` — for primary actions, selection
(`selected`: red ring + glow), progress and highlights in headlines (`text-brand-grad`). Geist Sans/Mono, 16–26 px radii,
mobile-first `max-w-md` shell, red-star logo with the tagline "Your AI character for Telegram".
Tokens are Tailwind v4 `@theme` variables in `globals.css` (`--color-canvas`, `--color-surface*`, `--color-ink*`,
`--color-brand*`, utilities `card`, `glass`, `selected`, `glow-red`, `bg-brand-grad`, `text-brand-grad`, `skeleton`,
`checker`, `pt-safe`/`pb-safe`). UI kit: `Button` (red primary / graphite secondary), `Card` + `ScreenTitle`,
`Badge`, `CheckDot` / `LockDot`, bottom `Sheet`, `TabBar` with a raised red create button.

Motion (Framer Motion): spring taps (`scale 0.97`), shared-layout tab indicator, staggered grids, page fade/slide,
floating emotion tiles, scan line, confetti on first reveal — transform/opacity only. `prefers-reduced-motion` is
honoured everywhere, including the 3D viewer (renders on demand instead of continuously).

### 3D character (`@mascot/mascot-3d`)

Every character image in the app is rendered live from the mascot DNA by a three.js renderer — no static art:

- **Character**: sculpted head (face shape, jaw, cheeks, nose, ears), painted face texture (brows, mouth per emotion,
  blush, freckles, stubble), eyeballs with iris textures and animated lids (blink), groomed hair (shells + flow-field
  clumps + curls for 30 hair styles), outfits (hoodie, tee, jacket…), accessories (cap, beanie, sunglasses,
  headphones, chain, earrings), emotion props (hearts, tears, sweat, steam, sparkles, thinking/facepalm hands).
- **Styles**: 11 looks map to shading models (PBR skin with sheen, vinyl, plastic, toon with ink outlines), saturation and
  rim-light colours, so "Pixar", "Anime", "Lego", "Cyberpunk"… are the same identity in different materials.
- **Stage**: neutral tone mapping, room environment reflections, warm key light, red rim lights that separate the
  character from black backgrounds, soft shadows.
- **Web integration** (`components/three`): `Mascot3D` — interactive viewer (drag, spin, idle breathing/blinking,
  30 fps cap, pauses off-screen); `MascotShot` — cached PNG snapshots from one shared offscreen stage via a render
  queue (`lib/mascot3d.ts`), used for tiles, style grids and sticker previews; SVG fallback when WebGL is unavailable.
  The bundle is code-split and loaded on demand.
- **Server**: `headless/entry.ts` is bundled to `dist/headless.js`; the API's mock image provider loads it into headless
  Chromium so dev/demo pipeline outputs (avatars, stickers, PFPs) match the in-app look (see AI pipeline docs).

Production character images come from the configured image model (OpenAI / FLUX); the 3D renderer powers live
previews, the viewer, showcase art and zero-key development.

### Localisation (EN / RU)

- Dictionaries in `src/lib/i18n/{en,ru}.ts`. `en` is the source of truth; `ru` is typed as `Dict`, so a missing key
  fails the build. `pnpm --filter @mascot/web i18n:check` (also in CI) verifies `{placeholder}` parity and Russian
  plural forms (`one/few/many` via `Intl.PluralRules`).
- `useT()` returns `{ t, f, p, pick }`: typed dictionary access (`t.create.generate`), interpolation, plurals and
  catalog lookups with fallback (emotions, outfits, poses, backgrounds, meme formats, video templates, style names
  and taglines, Mascot DNA traits).
- Language resolution: saved choice (localStorage, mirrored to `users.locale` via `PATCH /profile`) → Telegram
  `language_code` (ru, uk, be, kk… → Russian) → browser language. Profile → Settings → Language: Auto / EN / RU.
- Server errors are localized by their stable `code` (`errors.codes`, photo reject codes `errors.photo`);
  English falls back to the server's more specific message. Paywall copy uses localized headlines per reason.
- The public share page `/m/<slug>` is server-rendered and picks the language from `Accept-Language`.
- Adding a language: copy `ru.ts`, add the locale to `SUPPORTED_LOCALES` (`@mascot/shared`) and to the bot catalog
  (`apps/api/src/i18n/bot-messages.ts`) — the compiler lists every missing string.

### Performance budget

- First load JS for `/` < 200 KB gz; images are CDN WebP; generated media served from R2 with immutable caching.
- No blocking fonts (bundled Geist), Telegram SDK loaded `beforeInteractive` (required by the platform).
- Security headers: `frame-ancestors` restricted to Telegram origins (web clients iframe the app), `nosniff`, strict referrer policy.

## Admin dashboard (`apps/admin`)

Next.js + Recharts, desktop-first, dark. Telegram Login Widget sign-in (ADMIN/SUPPORT only), 401/403 → login.

| Page | Content |
|---|---|
| Overview | Hero Stars revenue, users/DAU/WAU/MAU, premium + conversion, activation, generation success, avatar p50/p95, AI cost, signups vs DAU chart, live queue table (retry failed), retention, ARPPU |
| Users | Search (@username, name, Telegram ID, id), filters, risk sort, cursor pagination → detail: plan, credits, mascots, moderation events, payments (refund), generations; ban/unban, grant Premium/credits |
| Revenue | Gross/refunded Stars, active & canceling subscriptions, MRR, Stars per day, revenue by product |
| Generations | Stacked daily volume by type, latency table, top failure codes, AI cost by type, provider failure rates |
| Abuse | Events by type, riskiest users, high-velocity users, event queue with resolve/dismiss |
| Payments | All Stars transactions, refunds |
| Styles | Enable/disable, free/premium tier, live prompt overrides |

Charts follow a validated colour-blind-safe categorical palette (dark steps, all six checks passing on the card surface),
fixed colour per entity, 2 px lines, ≤ 24 px bars with 4 px rounded ends and 2 px surface gaps, value-first tooltips with line keys,
a legend for ≥ 2 series, and a chart/table toggle on every chart.
