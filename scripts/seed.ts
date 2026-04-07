import { PrismaClient } from "../src/generated/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.upsert({
    where: { email: "admin@lumino.com" },
    update: {},
    create: {
      name: "Super Admin",
      email: "admin@lumino.com",
      role: "SUPERADMIN",
    },
  });

  await prisma.user.upsert({
    where: { email: "user@lumino.com" },
    update: {},
    create: {
      name: "User",
      email: "user@lumino.com",
      role: "ADMIN",
    },
  });

  console.log("Admin and User seeded!");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
