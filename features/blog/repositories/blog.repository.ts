import { prisma } from "@/lib/prisma";
import { CreateBlogInput, UpdateBlogInput } from "../schemas/blog.schema";

export const blogRepository = {
  findAll: () =>
    prisma.blog.findMany({
      include: {
        author: { select: { id: true, name: true, image: true } },
        category: { select: { id: true, name: true } },
      },
      orderBy: { createdAt: "desc" },
    }),

  findById: (id: string) =>
    prisma.blog.findUnique({
      where: { id },
      include: {
        author: { select: { id: true, name: true, image: true } },
        category: { select: { id: true, name: true } },
      },
    }),

  create: (data: CreateBlogInput) => {
    // publishedAt needs conversion to Date if it's a string, or undefined/null
    const formattedData = {
      ...data,
      publishedAt: data.publishedAt ? new Date(data.publishedAt) : null,
    };
    return prisma.blog.create({ data: formattedData });
  },

  update: (id: string, data: UpdateBlogInput) => {
    const formattedData = {
      ...data,
      ...(data.publishedAt !== undefined && {
        publishedAt: data.publishedAt ? new Date(data.publishedAt) : null,
      }),
    };
    return prisma.blog.update({ where: { id }, data: formattedData });
  },

  delete: (id: string) => prisma.blog.delete({ where: { id } }),
};
