import { prisma } from "@/lib/prisma";
import { CreateUserInput, UpdateUserInput } from "../schemas/user.schema";

export const userRepository = {
  findAll: () =>
    prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
      },
      orderBy: {
        createdAt: "asc",
      },
    }),

  findById: (id: string) => prisma.user.findUnique({ where: { id } }),

  create: (data: CreateUserInput) => prisma.user.create({ data }),

  update: (id: string, data: UpdateUserInput) =>
    prisma.user.update({ where: { id }, data }),

  delete: (id: string) => prisma.user.delete({ where: { id } }),
};
