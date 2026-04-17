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
        createdAt: "desc",
      },
    }),

  findById: (id: number) => prisma.user.findUnique({ where: { id } }),

  create: (data: CreateUserInput) => prisma.user.create({ data }),

  update: (id: number, data: UpdateUserInput) =>
    prisma.user.update({ where: { id }, data }),

  delete: (id: number) => prisma.user.delete({ where: { id } }),
};
