/**
 * Seeds reference data (styles) and, optionally, a bootstrap admin.
 *   pnpm db:seed
 *   SEED_ADMIN_TELEGRAM_ID=123456789 pnpm db:seed
 */
import { PrismaClient } from '@prisma/client';
import { STYLE_CATALOG } from '@mascot/shared';
import { randomBytes } from 'node:crypto';

const prisma = new PrismaClient();

async function main(): Promise<void> {
  for (const recipe of STYLE_CATALOG) {
    await prisma.style.upsert({
      where: { slug: recipe.slug },
      update: {},
      create: { slug: recipe.slug, name: recipe.name, tagline: recipe.tagline, isPremium: recipe.isPremium, sortOrder: recipe.sortOrder },
    });
  }
  console.log(`✔ ${STYLE_CATALOG.length} styles ensured`);

  const adminId = process.env.SEED_ADMIN_TELEGRAM_ID;
  if (adminId) {
    await prisma.user.upsert({
      where: { telegramId: BigInt(adminId) },
      update: { role: 'ADMIN' },
      create: { telegramId: BigInt(adminId), firstName: 'Admin', role: 'ADMIN', referralCode: randomBytes(6).toString('base64url').slice(0, 8) },
    });
    console.log(`✔ admin ${adminId} ensured`);
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
