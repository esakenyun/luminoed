import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
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
    const { publishedAt, slug, ...rest } = data;
    const rawSlug = slug || rest.title;
    const generatedSlug = rawSlug
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");

    const formattedData: Prisma.BlogUncheckedCreateInput = {
      ...rest,
      slug: generatedSlug,
      publishedAt: publishedAt ? new Date(publishedAt) : null,
    };
    return prisma.blog.create({ data: formattedData });
  },

  update: (id: number, data: UpdateBlogInput) => {
    const { publishedAt, slug, ...rest } = data;
    const formattedData: Prisma.BlogUncheckedUpdateInput = {
      ...rest,
      ...(slug != null && { slug }),
      ...(publishedAt !== undefined && {
        publishedAt: publishedAt ? new Date(publishedAt) : null,
      }),
    };
    return prisma.blog.update({ where: { id }, data: formattedData });
  },

  delete: (id: number) => prisma.blog.delete({ where: { id } }),
};
