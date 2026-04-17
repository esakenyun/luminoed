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

  findById: (id: number) =>
    prisma.blog.findUnique({
      where: { id },
      include: {
        author: { select: { id: true, name: true, image: true } },
        category: { select: { id: true, name: true } },
      },
    }),

  findBySlug: (slug: string) =>
    prisma.blog.findUnique({
      where: { slug },
      include: {
        author: { select: { id: true, name: true, image: true } },
        category: { select: { id: true, name: true } },
      },
    }),

  create: (data: CreateBlogInput) => {
    // publishedAt needs conversion to Date if it's a string, or undefined/null
    const rawSlug = data.slug || data.title;
    const generatedSlug = rawSlug
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");

    const formattedData = {
      ...data,
      slug: generatedSlug,
      publishedAt: data.publishedAt ? new Date(data.publishedAt) : null,
    };
    return prisma.blog.create({ data: formattedData });
  },

  update: (id: number, data: UpdateBlogInput) => {
    const formattedData = {
      ...data,
      ...(data.publishedAt !== undefined && {
        publishedAt: data.publishedAt ? new Date(data.publishedAt) : null,
      }),
    };
    return prisma.blog.update({ where: { id }, data: formattedData });
  },

  delete: (id: number) => prisma.blog.delete({ where: { id } }),
};
