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
        _count: {
          select: { blogs: true },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    }),

  findById: (id: number) => prisma.category.findUnique({ where: { id } }),

  create: (data: CreateCategoryInput) => prisma.category.create({ data }),

  update: (id: number, data: UpdateCategoryInput) =>
    prisma.category.update({ where: { id }, data }),

  delete: (id: number) => prisma.category.delete({ where: { id } }),
};
