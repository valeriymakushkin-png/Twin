# syntax=docker/dockerfile:1.7
FROM node:22-bookworm-slim AS base
ENV PNPM_HOME=/pnpm PATH=/pnpm:$PATH NEXT_TELEMETRY_DISABLED=1
RUN corepack enable
WORKDIR /repo

FROM base AS build
ARG NEXT_PUBLIC_API_URL
ARG NEXT_PUBLIC_BOT_USERNAME
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL NEXT_PUBLIC_BOT_USERNAME=$NEXT_PUBLIC_BOT_USERNAME
COPY pnpm-lock.yaml pnpm-workspace.yaml package.json turbo.json tsconfig.base.json ./
COPY packages/shared/package.json packages/shared/
COPY apps/admin/package.json apps/admin/
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile --filter @mascot/admin...
COPY packages/shared packages/shared
COPY apps/admin apps/admin
RUN pnpm --filter @mascot/shared build && pnpm --filter @mascot/admin build

FROM node:22-bookworm-slim AS runtime
ENV NODE_ENV=production NEXT_TELEMETRY_DISABLED=1 PORT=3001 HOSTNAME=0.0.0.0
RUN useradd -r -u 10001 app
WORKDIR /app
COPY --from=build --chown=app /repo/apps/admin/.next/standalone ./
COPY --from=build --chown=app /repo/apps/admin/.next/static ./apps/admin/.next/static
COPY --from=build --chown=app /repo/apps/admin/public ./apps/admin/public
USER app
EXPOSE 3001
CMD ["node", "apps/admin/server.js"]
