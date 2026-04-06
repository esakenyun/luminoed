import { prisma } from "@/lib/prisma";
import {
  CreateCategoryInput,
  UpdateCategoryInput,
} from "../schemas/category.schema";

export const categoryRepository = {
  findAll: () =>
    prisma.category.findMany({
      select: {
        id: true,
        name: true,
        createdAt: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    }),

  findById: (id: string) => prisma.category.findUnique({ where: { id } }),

  create: (data: CreateCategoryInput) => prisma.category.create({ data }),

  update: (id: string, data: UpdateCategoryInput) =>
    prisma.category.update({ where: { id }, data }),

  delete: (id: string) => prisma.category.delete({ where: { id } }),
};
