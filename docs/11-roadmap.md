# 11. MVP roadmap

Status legend: ✅ implemented in this repository · 🔜 next · 💡 later

## Phase 0 — Foundation (weeks 0–2) ✅

- ✅ Monorepo, shared domain model (DNA vocabulary, style engine, plans, API contracts)
- ✅ PostgreSQL schema + migrations, Redis, R2 storage layer (local driver for dev), BullMQ
- ✅ Telegram initData auth, JWT, rate limiting, error contract, structured logging, metrics
- ✅ Mock AI providers so the full product runs with zero AI spend; CI with e2e smoke test

## Phase 1 — Core loop MVP (weeks 2–6) ✅

**Goal:** a user goes from selfies to a recognisable mascot and a Telegram sticker pack in under 3 minutes.

- ✅ Guided upload (5-pose guide, live face checks, consent), face analysis service, identity consistency & age gates
- ✅ Mascot DNA extraction (geometry + colorimetry + vision LLM), prompt compiler, OpenAI/Flux providers, best-of-N identity scoring
- ✅ Processing screen with live stages; result page with DNA card, download, share
- ✅ Sticker generator + one-tap Telegram sticker set; meme generator; instant profile pictures
- ✅ FREE plan limits, paywall protocol (402 reasons), Telegram Stars (subscription, pass, credits), refunds
- ✅ Admin: analytics, users, revenue, generations, abuse, payments, styles

**Exit criteria:** activation (upload → mascot) ≥ 60 %, generation success ≥ 97 %, p95 avatar latency ≤ 90 s,
"looks like me" rating ≥ 4/5 on an internal panel of 200 testers.

## Phase 2 — Closed beta & launch (weeks 6–10) 🔜

- ✅ Video generation (Kling/Runway/Veo) with TTS voice-over, premium styles/outfits/poses, AI profile pictures
- ✅ Viral surfaces: shareMessage, Stories widget, inline mode, public share page, referral credits
- ✅ Likeness evaluation harness (`eval:likeness`): identity score, detection, rank-1 and margin per style + human-rating sheet; regression gates for prompt/provider changes
- 🔜 Assemble the golden set (200 consenting testers) and record the first real baseline
- ✅ Localisation EN + RU: Mini App (typed dictionaries, plurals, auto-detect + switch), bot, notifications, invoices, meme templates
- 🔜 More languages (ES, PT, TR, ID — Telegram's largest markets): add a dictionary + bot catalog entry
- 🔜 Telegram test-environment payment QA, Stars reconciliation script against `getStarTransactions`
- 🔜 Legal review of style naming (brand-inspired styles), ToS/Privacy, DPA with every AI vendor
- ✅ k6 load test (smoke / load / spike) with signed initData; single 4-vCPU node: ~1,350 mascots/hour at 0 % errors
- 🔜 Staging run at 5k mascots/hour to validate KEDA scaling

**KPIs:** D1 retention ≥ 35 %, share rate ≥ 20 % of activated users, K-factor ≥ 0.4, FREE → Premium ≥ 3 %.

## Phase 3 — Growth (weeks 10–20) 💡

- 💡 Animated & video stickers (WEBM, Telegram video sticker format) and custom emoji packs
- 💡 Lip-synced talking videos (dedicated lip-sync model on top of the TTS track)
- 💡 Seasonal drops (Halloween, New Year packs), limited premium styles, creator collab styles
- 💡 Group features: "mascot squad" images for friend groups / Telegram chats
- 💡 Mascot editing: let users correct DNA traits (hair colour, glasses) and re-render
- 💡 Creator tools: brand kit export (transparent PNG set, colour palette), watermark-free commercial licence add-on
- 💡 Paywall experiments (price points, trial via credits, annual default) with Stars

## Phase 4 — Scale & efficiency (20+ weeks) 💡

- 💡 Self-hosted image model (fine-tuned SDXL/FLUX with identity adapters) for stickers/memes to cut per-sticker cost by ~5×
- 💡 GPU face-service pool, embedding store with pgvector for duplicate-identity abuse detection
- 💡 `generations` partitioning + cold storage, analytics warehouse (ClickHouse/BigQuery) fed by CDC
- 💡 Multi-region read path (web + CDN already global; API close to Telegram DCs)
- 💡 SSE/WebSocket progress channel for desktop clients (polling remains the mobile default)

## Risks & mitigations

| Risk | Mitigation |
|---|---|
| Likeness not good enough → low conversion | reference-image providers with `input_fidelity=high`, best-of-N identity scoring, DNA-driven prompts, evaluation harness before prompt changes |
| AI cost outruns revenue | FREE: 1 candidate, medium-quality stickers, meme render reuse; credits for overages; spend alerting; self-hosted models in phase 4 |
| Provider outage / policy change | provider interfaces + config switch, retries with refunds, multi-vendor contracts |
| Abuse (deepfakes of others, minors, NSFW) | consent, identity consistency, age gate, moderation, risk score + auto-ban, stylised (non-photoreal) outputs, watermark |
| Telegram platform changes | thin Bot API client, feature detection (`isVersionAtLeast`), graceful fallbacks for share/download |
| IP / trademark claims on style names | descriptive style names ("Battle Royale", "Painterly Noir"), visual-language prompts, legal review gate |
