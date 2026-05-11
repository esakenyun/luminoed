import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

/**
 * Singleton Prisma client.
 *
 * Query performance is handled via:
 *  1. DB indexes on Blog (status+publishedAt, status+createdAt, categoryId, authorId)
 *  2. ISR (revalidate=60) on the /blog page — responses cached at the Next.js / CDN layer
 *  3. Cache-Control headers on /api/blog/public — CDN caches paginated responses for 60 s
 *
 * To enable Prisma Accelerate (connection pooling + global caching), swap DATABASE_URL
 * for the prisma:// connection string from https://console.prisma.io and install
 * @prisma/extension-accelerate, then extend the client here with `.$extends(withAccelerate())`.
 */
export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log:
      process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
