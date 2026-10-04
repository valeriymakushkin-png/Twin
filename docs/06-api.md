# 6. API reference

Base URL: `https://api.mascot.ai/v1` (local: `http://localhost:4000/v1`). JSON everywhere except `POST /upload`
(multipart). Auth: `Authorization: Bearer <jwt>` unless marked **public**. Request schemas are the zod objects in
[`packages/shared/src/api.ts`](../packages/shared/src/api.ts); response DTOs are the TypeScript interfaces in the same file.

Generation endpoints accept an optional **`Idempotency-Key`** header (8–80 chars): repeating a request with the same key returns
the original result instead of charging twice.

## Endpoints

### Auth
| Method | Path | Description |
|---|---|---|
| POST | `/auth/telegram` **public** | `{ initData }` → `{ accessToken, expiresIn, user, isNewUser }`. Validates Telegram initData signature & freshness, upserts the user, applies `start_param` (referral / source). 30/min/IP |
| POST | `/auth/admin/telegram-login` **public** | Telegram Login Widget payload → admin token (`aud=admin`), ADMIN/SUPPORT only |
| POST | `/auth/dev` **public** | Local development only (`DEV_AUTH_ENABLED`) |

### Profile
| Method | Path | Description |
|---|---|---|
| GET | `/profile` | `UserProfileDto`: plan, premiumUntil, credits, entitlements, usage, subscription, referral link |
| PATCH | `/profile` | `{ notificationsEnabled?, locale?: 'en' \| 'ru' \| null }` — `null` = follow Telegram `language_code` |
| GET | `/profile/referrals` | invited / activated / credits earned |
| DELETE | `/profile` | GDPR erasure (202, async) |

### Photos
| Method | Path | Description |
|---|---|---|
| POST | `/upload` | multipart: `photos` (1–20 files, ≤ 15 MB each), `consent=true` on first upload. → `{ photos: PhotoDto[], rejected: [{fileName, reason, code}] }` (`code`/`rejectCode` ∈ `PHOTO_REJECT_CODES` for localized UI). Each photo: normalised, moderated, face-checked (count, pose, age gate). 40/hour |
| GET | `/photos` | recent unassigned photos (signed URLs) |
| DELETE | `/photos/:id` | delete a photo |

### Mascots
| Method | Path | Description |
|---|---|---|
| POST | `/generate-avatar` | `{ photoIds[5..20], styleSlug, name?, outfitKey?, poseKey? }` → `{ avatar, generation }` (201). 402 `AVATAR_LIMIT` / `PREMIUM_STYLE` / `PREMIUM_WARDROBE`. 6 per 10 min |
| GET | `/avatars` | list with primary render, DNA, renders |
| GET | `/avatars/:id` | `AvatarDto` |
| PATCH | `/avatars/:id` | `{ name?, isPublic? }` |
| DELETE | `/avatars/:id` | soft delete + async storage cleanup |
| POST | `/avatars/:id/styles` | `{ styleSlug, outfitKey?, poseKey?, accessoryKey? }` → `GenerationDto` — re-render from stored DNA |
| PATCH | `/avatars/:id/look` | `{ hairKey?, glassesKey? }` (catalog keys, `glassesKey: "none"` removes glasses, `null` resets to the extracted trait) → `AvatarDto`; free, updates the DNA and its prompt fragment |
| POST | `/avatars/:id/renders/:renderId/primary` | make a look the main one |
| GET | `/avatars/:id/renders/:renderId/hd` | signed URL (10 min) to the transparent HD master — Premium (402 `HD_EXPORT`) |
| GET | `/public/avatars/:slug` **public** | share-page payload (name, style, image, card, referral code) |
| GET | `/styles` | `StyleDto[]` with `locked` per user plan |

### Generations
| Method | Path | Description |
|---|---|---|
| GET | `/generations/:id` | `GenerationDto` — status, stage, progress, queuePosition, outputUrls, error |
| GET | `/generations?type=&limit=` | recent generations |
| POST | `/generations/:id/cancel` | cancel while QUEUED (refunds) |

### Stickers, memes, profile pictures, videos
| Method | Path | Description |
|---|---|---|
| POST | `/generate-stickers` | `{ avatarId, emotions?[], styleSlug?, title? }` → `{ pack, generation }`. FREE defaults to remaining free emotions; overflow costs 2 credits each or 402 `STICKER_LIMIT` |
| GET | `/sticker-packs?avatarId=` | packs |
| GET | `/sticker-packs/:id` | `StickerPackDto` (incl. `addStickersUrl` once published) |
| POST | `/sticker-packs/:id/publish` | create/extend the Telegram sticker set (async; status PUBLISHING → PUBLISHED) |
| POST | `/generate-meme` | `{ avatarId, format, text? \| topText?/bottomText?, emotion? }` → `{ meme, generation }`. Text moderation (links, phone numbers, ML policy) |
| GET / DELETE | `/memes`, `/memes/:id` | list / delete |
| POST | `/generate-pfp` | `{ avatarId, backgroundKey, mode: composite\|ai, outfitKey?, poseKey? }` → `{ pfp, generation }`. AI/scene/premium options → 402 `AI_PFP_PREMIUM` or credits |
| GET | `/pfps`, `/pfps/:id/hd` | list / signed 2048² download (Premium) |
| POST | `/generate-video` | `{ avatarId, template, aspectRatio, prompt?, script?, voice? }` → `{ video, generation }`. Premium (402 `VIDEO_PREMIUM_ONLY`), monthly units then credits (402 `VIDEO_QUOTA`) |
| GET | `/videos`, `/videos/:id` | list / get |
| GET | `/library?avatarId=` | sticker packs, memes, PFPs, videos in one call |

### Payments (Telegram Stars)
| Method | Path | Description |
|---|---|---|
| GET | `/payments/products` **public** | `StarProductDto[]` |
| POST | `/payments/invoice` | `{ productId }` → `{ paymentId, invoiceUrl }` for `WebApp.openInvoice`. 409 `ALREADY_SUBSCRIBED` |
| GET | `/payments` | payment history |
| POST | `/payments/subscription/cancel` | stop auto-renew (`editUserStarSubscription is_canceled=true`) |
| POST | `/payments/subscription/resume` | re-enable auto-renew |

### Sharing & Telegram
| Method | Path | Description |
|---|---|---|
| POST | `/share/prepare` | `{ kind: avatar\|meme\|pfp\|sticker_pack\|video, id }` → `{ preparedMessageId, shareUrl, mediaUrl }` (`savePreparedInlineMessage` + referral deep link) |
| POST | `/telegram/webhook` **public** | Bot API updates; requires `X-Telegram-Bot-Api-Secret-Token` |

### Admin (`aud=admin`, ADMIN or SUPPORT; mutations marked ★ require ADMIN)
| Method | Path | Description |
|---|---|---|
| GET | `/admin/me` | current admin |
| GET | `/admin/analytics/overview?days=` | `AdminOverviewDto` (users, DAU/WAU/MAU, revenue, conversion, generation SLOs, queues, abuse) |
| GET | `/admin/analytics/users?days=` | signups, DAU series, new premium, sources, D1/D7 retention |
| GET | `/admin/analytics/revenue?days=` | Stars per day, refunds, by product, subscriptions, MRR |
| GET | `/admin/analytics/generations?days=` | daily by type, latency percentiles, failure codes, cost, providers |
| GET | `/admin/users?q=&plan=&banned=&sort=&cursor=` | search + cursor pagination |
| GET | `/admin/users/:id` | full user record (avatars, payments, subscriptions, events, generations, ledger) |
| POST | `/admin/users/:id/ban`, `/unban` | `{ reason }` |
| POST | `/admin/users/:id/grant-premium` ★, `/grant-credits` ★ | `{ days }` / `{ amount }` |
| GET | `/admin/abuse?status=&severity=&type=` | moderation queue |
| GET | `/admin/abuse/summary?days=` | by type, riskiest users, high-velocity users |
| POST | `/admin/abuse/:id/resolve` | `{ action: resolve\|dismiss, note? }` |
| GET / PATCH ★ | `/admin/styles`, `/admin/styles/:id` | style engine: active, premium, order, prompt overrides |
| GET | `/admin/payments?status=` | transactions |
| POST | `/admin/payments/:id/refund` ★ | `refundStarPayment` + revoke entitlement |
| GET | `/admin/queues` | BullMQ counts |
| POST | `/admin/queues/:name/retry-failed` ★ | retry failed jobs |

### Operations (no `/v1` prefix)
| Method | Path | Description |
|---|---|---|
| GET | `/health` | liveness |
| GET | `/health/ready` | readiness (Postgres + Redis) |
| GET | `/metrics` | Prometheus (Bearer `METRICS_TOKEN` when set) |
| GET | `/v1/files/:bucket/*path` | local storage driver only (signed URLs for the private bucket) |

## Examples

```http
POST /v1/auth/telegram
Content-Type: application/json

{ "initData": "query_id=AAH…&user=%7B%22id%22%3A42…%7D&auth_date=1790000000&start_param=ref_ab12CD34&signature=…&hash=…" }
```

```http
POST /v1/generate-avatar
Authorization: Bearer eyJ…
Idempotency-Key: web-mg3k1x-8f2a91c0
Content-Type: application/json

{ "photoIds": ["c…1","c…2","c…3","c…4","c…5","c…6"], "styleSlug": "pixar", "name": "Jay" }
```

```json
{
  "avatar": { "id": "cmg…", "name": "Jay", "status": "PROCESSING", "styleSlug": "pixar", "shareSlug": "Q8x…", "renders": [], "dna": null },
  "generation": { "id": "cmg…", "type": "AVATAR", "status": "QUEUED", "stage": "UPLOADING", "progress": 0, "queuePosition": 3 }
}
```

```http
GET /v1/generations/cmg…
→ { "status": "PROCESSING", "stage": "CHARACTER_GENERATION", "progress": 62, … }
→ { "status": "SUCCEEDED", "stage": "DONE", "progress": 100, "resultId": "<renderId>", "outputUrls": ["https://cdn…/display.webp", "https://cdn…/card.png"] }
```

## Error codes

| HTTP | `code` | Meaning |
|---|---|---|
| 400 | `VALIDATION_ERROR` | zod issues in `details[]` |
| 400 | `NOT_ENOUGH_PHOTOS`, `AVATAR_NOT_READY`, `SCRIPT_REQUIRED`, `TEXT_POLICY`, `UNKNOWN_*` | domain validation |
| 401 | `UNAUTHENTICATED`, `TOKEN_INVALID`, `INVALID_INIT_DATA` | re-authenticate |
| 402 | `PAYWALL` + `paywall.reason` | open the paywall |
| 403 | `BANNED`, `WRONG_AUDIENCE`, `FORBIDDEN`, `ACCOUNT_DELETED` | |
| 404 | `NOT_FOUND` | |
| 409 | `ALREADY_SUBSCRIBED`, `CONFLICT` | |
| 428 | `CONSENT_REQUIRED` | biometric consent missing |
| 429 | `RATE_LIMITED`, `DAILY_LIMIT`, `UPLOAD_LIMIT` | `Retry-After` header |
| 503 | `QUEUE_UNAVAILABLE`, `NOT_READY` | retry later |

Generation failures surface in `GenerationDto.error.code`: `NOT_ENOUGH_FACES`, `PHOTOS_INCONSISTENT`, `AGE_RESTRICTED`,
`VIDEO_POLICY`, `PROVIDER_ERROR`, `STALE`, `CANCELED` — always with a user-facing message and automatic refund.
