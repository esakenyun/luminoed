import { z } from "zod";

export const createBlogSchema = z.object({
  title: z.string().min(1, "Title is required"),
  subtitle: z.string().min(1, "Subtitle is required"),
  image: z.string().min(1, "Cover Image URL is required"),
  imageCredit: z.string().min(1, "Image Credit is required"),
  content: z.string().min(1, "Content is required"),
  status: z.enum(["DRAFT", "PUBLISHED"]),
  authorId: z.number().min(1, "Author is required"),
  categoryId: z.number().min(1, "Category is required"),
  slug: z.string().optional().nullable(),
  publishedAt: z.string().optional().nullable(),
});

export const updateBlogSchema = createBlogSchema.partial();

export type CreateBlogInput = z.infer<typeof createBlogSchema>;
export type UpdateBlogInput = z.infer<typeof updateBlogSchema>;
