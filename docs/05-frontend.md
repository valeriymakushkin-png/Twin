# 5. Frontend architecture

## Telegram Mini App (`apps/web`)

Next.js 16 (App Router, Turbopack), React 19, TypeScript, Tailwind CSS v4, Framer Motion, TanStack Query, Zustand,
the official Telegram Mini Apps SDK (`telegram-web-app.js`, Bot API 8+), Geist font (bundled, no runtime font fetch).

### Screens

| Route | Purpose |
|---|---|
| `/` | Landing (hero with mascot stack, showcase marquee, before/after slider, how it works, outputs, styles, CTA) for new users; dashboard (quick actions, my mascots, invite card) once a mascot exists |
| `/create` | 3-step flow: **photo guide + upload grid** (live face check, detected pose per photo, 5 min / 10–15 recommended) → **style picker** (locked premium styles open the paywall) → **confirm & generate**. Biometric consent sheet on first upload |
| `/processing/[id]` | Orbit animation, % progress, 5-stage timeline (Uploading → Face analysis → Feature extraction → Character generation → Rendering), queue position, rotating tips; failure card with refund note |
| `/mascot/[id]` | Hero render, rename, Save (HD for Premium) / Share / Character card; action grid (Stickers, Memes, Profile pics, Videos, Change style); looks strip; Mascot DNA card; confetti on first view |
| `/mascot/[id]/stickers` | Emotion picker (10), free-allowance math, pack previews, **Add to Telegram** (sticker set) |
| `/mascot/[id]/memes` | Formats (classic, POV, Nobody/Me, Expectation vs Reality, Post, Caption), emotion auto-detect or manual, ideas, results with download/share |
| `/mascot/[id]/pfp` | Instant (Sharp composite, free) vs AI scene (Premium), backgrounds, outfits, poses, circle-crop preview |
| `/mascot/[id]/videos` | Templates (dance, talk, walk, podcast, promo), script + voice, aspect ratio, player |
| `/mascot/[id]/styles` | 11 styles + outfits + poses → re-render from stored DNA |
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

Dark-first, Linear/Arc-inspired: near-black canvas `#07070a`, hairline borders (`white/8%`), glass surfaces, one
**aurora** accent gradient (violet → fuchsia → amber), Geist Sans/Mono, 20–28 px radii, mobile-first `max-w-md` shell.
Tokens are Tailwind v4 `@theme` variables in `globals.css` (`--color-canvas`, `--color-surface*`, `--color-ink*`,
utilities `glass`, `bg-aurora`, `text-aurora`, `skeleton`, `checker`, `pt-safe`/`pb-safe`).

Motion (Framer Motion): spring taps (`scale 0.97`), shared-layout tab indicator, staggered grids, page fade/slide,
orbit loader, confetti on first reveal — all transform/opacity only (GPU-friendly), no layout thrash.

Procedural art: landing showcase, style previews and placeholders use `renderMascotSvg()` from `@mascot/shared`
(DNA-driven SVG), so the marketing site works before any real showcase assets exist; real images can be swapped in
via `NEXT_PUBLIC_SHOWCASE_BEFORE/AFTER`.

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
