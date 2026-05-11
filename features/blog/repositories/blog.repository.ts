import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { CreateBlogInput, UpdateBlogInput } from "../schemas/blog.schema";

/** Shared select for public-facing blog cards (omits heavy `content` field). */
const blogCardSelect = {
  id: true,
  slug: true,
  title: true,
  subtitle: true,
  image: true,
  imageCredit: true,
  status: true,
  publishedAt: true,
  createdAt: true,
  updatedAt: true,
  authorId: true,
  categoryId: true,
  author: { select: { id: true, name: true, image: true } },
  category: { select: { id: true, name: true } },
} satisfies Prisma.BlogSelect;

export const blogRepository = {
  // ─── Admin / full access ────────────────────────────────────────────────────

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

  // ─── Public listing — paginated & index-optimised ───────────────────────────

  /**
   * Fetches published blogs in descending publishedAt order (falls back to
   * createdAt when publishedAt is null).  Uses the composite DB index
   * `blog_status_publishedAt_idx` so the DB never does a full table scan.
   *
   * Returns a tuple: [rows, totalCount] via a transaction so both values are
   * always consistent.
   */
  findPublished: (page: number, limit: number) => {
    const skip = (page - 1) * limit;
    return prisma.$transaction([
      prisma.blog.findMany({
        where: { status: "PUBLISHED" },
        select: blogCardSelect,
        orderBy: [{ publishedAt: "desc" }, { createdAt: "desc" }],
        skip,
        take: limit,
      }),
      prisma.blog.count({ where: { status: "PUBLISHED" } }),
    ]);
  },

  // ─── Mutations ───────────────────────────────────────────────────────────────

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
